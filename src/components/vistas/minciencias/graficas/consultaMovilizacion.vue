<template>
    <NavBarMinciencias />
    <div class="container my-5">
        <h1 class="text-center mb-5">Indicadores de Movilizaciones</h1>
        <div class="row">
            <div class="col-md-4">
                <div class="card shadow-sm">
                    <div class="card-body">
                        <h4 class="card-title text-center mb-4">Filtros</h4>
                        <div class="mb-4">
                            <label class="form-label fw-bold">Periodos:</label>
                            <div class="d-flex gap-2">
                                <select class="form-select" v-model="selectedPeriodoStart" @change="resetGraph">
                                    <option value="">Inicio...</option>
                                    <option v-for="anio in getYearsRange()" :key="anio" :value="anio">{{ anio }}</option>
                                </select>
                                <select class="form-select" v-model="selectedPeriodoEnd" @change="resetGraph">
                                    <option value="">Fin...</option>
                                    <option v-for="anio in getYearsRange()" :key="anio" :value="anio">{{ anio }}</option>
                                </select>
                            </div>
                        </div>

                        <div class="mb-4">
                            <label class="form-label fw-bold">Departamentos:</label>
                            <div class="form-check mb-2">
                                <input class="form-check-input" type="checkbox" id="selectAllDepartments" v-model="selectAll" @change="toggleAllDepartments">
                                <label class="form-check-label" for="selectAllDepartments">
                                    Seleccionar todos
                                </label>
                            </div>
                            <div class="department-list">
                                <div v-for="(departamento, index) in listDepartamentos" :key="index" class="form-check">
                                    <input class="form-check-input" type="checkbox" :id="'dep'+index" v-model="selectedDepartamentos" :value="departamento" @change="updateSelectAll">
                                    <label class="form-check-label" :for="'dep'+index">
                                        {{ departamento }}
                                    </label>
                                </div>
                            </div>
                        </div>

                        <button type="button" class="btn btn-primary w-100" @click="validateAndGenerate">Generar gráficas</button>
                    </div>
                </div>
            </div>
            <div class="col-md-8">
                <div class="card shadow-sm">
                    <div class="card-body">
                        <ConsultarMovilizacion v-if="generar && datos" :datos="datos" />
                        <div v-else class="text-center py-5">
                            <p class="text-muted">Seleccione los filtros y haga clic en "Generar gráficas" para ver los resultados.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NavBarMinciencias from '@/components/NavBars/navBarMinciencias.vue';
import ConsultarMovilizacion from '@/components/graficas/consultarMovilizacion.vue';
import {jwtDecode} from 'jwt-decode';

export default {
    name: 'ConsultaMovilizacionMinciencias',
    components: {
        NavBarMinciencias,
        ConsultarMovilizacion,
    },
    data() {
        return {
            generar: false,
            datos: null,
            min: 0,
            max: 0,
            selectedAnio: '',
            selectedPeriodoStart: '',
            selectedPeriodoEnd: '',
            selectedDepartamentos: [],
            selectAll: false,
            listDepartamentos: [
                "Amazonas", "Antioquia", "Arauca", "Atlántico", "Bogotá", 
                "Bolívar", "Boyacá", "Caldas", "Caquetá", "Casanare", 
                "Cauca", "Cesar", "Chocó", "Córdoba", "Cundinamarca", 
                "Guainía", "Guaviare", "Huila", "La Guajira", "Magdalena", 
                "Meta", "Nariño", "Norte de Santander", "Putumayo", "Quindío", 
                "Risaralda", "San Andrés y Providencia", "Santander", "Sucre", 
                "Tolima", "Valle del Cauca", "Vaupés", "Vichada"
            ]
        }
    },
    methods: {
        getYearsRange() {
            const years = [];
            for (let i = this.min; i <= this.max; i++) {
                years.push(i);
            }
            return years;
        },
        resetYear() {
            this.selectedAnio = '';
            this.resetGraph();
        },
        resetPeriod() {
            this.selectedPeriodoStart = '';
            this.selectedPeriodoEnd = '';
            this.resetGraph();
        },
        toggleAllDepartments() {
            this.selectedDepartamentos = this.selectAll ? [...this.listDepartamentos] : [];
            this.resetGraph();
        },
        updateSelectAll() {
            this.selectAll = this.selectedDepartamentos.length === this.listDepartamentos.length;
            this.resetGraph();
        },
        resetGraph() {
            this.generar = false;
            this.datos = null;
        },
        validateAndGenerate() {
            if (!this.selectedAnio && !this.selectedPeriodoStart && !this.selectedPeriodoEnd) {
                alert('Por favor, seleccione un año o un rango de periodos.');
                return;
            }
            if (this.selectedPeriodoStart && this.selectedPeriodoEnd && parseInt(this.selectedPeriodoStart) > parseInt(this.selectedPeriodoEnd)) {
                alert('El año de inicio del periodo debe ser menor o igual al año de fin.');
                return;
            }
            if (this.selectedDepartamentos.length === 0) {
                alert('Por favor, seleccione al menos un departamento.');
                return;
            }
            this.generateGraph();
        },
        async generateGraph() {
            try {
                const startYear = this.selectedAnio || this.selectedPeriodoStart || '';
                const endYear = this.selectedAnio || this.selectedPeriodoEnd || '';
                const departamentos = this.selectedDepartamentos.join(',');

                const response = await fetch(`${this.$baseRoute}/Movilizaciones/getAllMovilizaciones/${startYear}/${endYear}/${this.userId}/${this.token}?departamentos=${departamentos}`);

                const data = await response.json();

                
                // Ensure data is in the correct format for ConsultaConvocatoria
                this.datos = Array.isArray(data) ? data : [data];
                this.generar = true;
            } catch (error) {
                console.error('Error generating graph:', error);
                alert('Ocurrió un error al generar las gráficas. Por favor, intente de nuevo.');
            }
        }
    },
    async mounted() {
        try {
            this.token = localStorage.getItem('token');
            this.userId = jwtDecode(this.token).id;
            const response = await fetch(`${this.$baseRoute}/movilizaciones/minmaxanio/${this.userId}/${this.token}`);
            const JSONdata = await response.json();
            this.min = JSONdata.minAnio;
            this.max = JSONdata.maxAnio;
        } catch (error) {
            console.error('Error fetching year range:', error);
            alert('Ocurrió un error al cargar el rango de años. Por favor, recargue la página.');
        }
    }
};
</script>

<style scoped>
.card {
    border: none;
    border-radius: 15px;
}

.form-select, .btn {
    border-radius: 20px;
}

.department-list {
    max-height: 200px;
    overflow-y: auto;
    border: 1px solid #ced4da;
    border-radius: 10px;
    padding: 10px;
}

.form-check-input:checked {
    background-color: #0d6efd;
    border-color: #0d6efd;
}

.badge {
    font-size: 1rem;
    padding: 0.5rem 1rem;
}
</style>