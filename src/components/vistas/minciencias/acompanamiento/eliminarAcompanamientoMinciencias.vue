<template>
    <NavBarMinciencias />
    <h1 style="text-align: center; margin-top: 40px;">Eliminar Acompañamiento</h1>
    <div class="container">
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-1" style="text-align: left;"></div>
            <div class="col-md-2" >
                <label for="departamento">Ingrese el departamento:</label>
            </div>
            <div class="col-md-2 p-0">
                <select class="custom-select" id="departamento" v-model="departamento" @change="fetchYears">
                    <option selected value="seleccionar">Seleccionar...</option>
                    <option v-for="(departamento, index) in listDepartamentos" :key="index" :value="departamento">{{ departamento }}</option>
                </select>
            </div>
        </div>
        <div class="row" style="margin-top: 56px;">
            <div class="col-md-1" style="text-align: left;"></div>
            <div class="col-md-2" >
                <label for="anio">Ingrese el año:</label>
            </div>
            <div class="col-md-2 p-0">
                <select class="custom-select" id="anio" v-model="anio" @change="verificarExistencia">
                    <option selected value="seleccionar">Seleccionar...</option>
                    <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
                </select>
            </div>
        </div>
        <div v-if="anio=='seleccionar' && departamento!='seleccionar'" class="alert alert-success" role="alert" style="margin-top: 40px;">
            Por favor seleccione un año para ingresar la convocatoria
        </div>
        <div v-else-if="anio!='seleccionar' && departamento=='seleccionar'" class="alert alert-success" role="alert" style="margin-top: 40px;">
            Por favor seleccione un departamento para ingresar la convocatoria
        </div>
        <div v-else-if="anio=='seleccionar' && departamento=='seleccionar'" class="alert alert-success" role="alert" style="margin-top: 40px;">
            Por favor seleccione un año y un departamento para ingresar la convocatoria
        </div>
    </div>
    <EliminarAcompanamiento v-if="valido" :anio="anio" :departamento="departamento" />
</template>

<script>
import NavBarMinciencias from '@/components/NavBars/navBarMinciencias.vue';
import EliminarAcompanamiento from '@/components/acompanamiento/eliminarAcompanamiento.vue';
import {jwtDecode} from 'jwt-decode';
export default {
    name: 'EliminarAcompanamientoMinciencias',
    components: {
        NavBarMinciencias,
        EliminarAcompanamiento,
    },
    data() {
        return {
            listDepartamentos: ["Amazonas", "Antioquia", "Arauca", "Atlántico", "Bogotá", "Bolívar", "Boyacá", "Caldas", "Caquetá", "Casanare", "Cauca", "Cesar", "Chocó", "Córdoba", "Cundinamarca", "Guainía", "Guaviare", "Huila", "La Guajira", "Magdalena", "Meta", "Nariño", "Norte de Santander", "Putumayo", "Quindío", "Risaralda", "San Andrés y Providencia", "Santander", "Sucre", "Tolima", "Valle del Cauca", "Vaupés", "Vichada"],
            anio: 'seleccionar',
            departamento: 'seleccionar',
            valido: '',
            id: null,
            token: null,
            years: []
        }
    },
    async mounted() {
        this.token = localStorage.getItem('token');
        this.id = jwtDecode(this.token).id;
    },
    methods: {
        async fetchYears() {
            if (this.departamento !== null) {
                const response = await fetch(`${this.$baseRoute}/acompaniamientos/anios/departamento/${this.departamento}/${this.id}/${this.token}`);
                if (response.ok) {
                    this.years = await response.json();
                }
                else{
                    this.years = [];
                }
            }
        },
        async verificarExistencia() {
            if (this.anio != 'seleccionar' && !isNaN(this.anio) && this.departamento != 'seleeccionar') {
                this.valido = true;
            } else {
                this.valido = false;
            }
            
        }
    }
}
</script>

<style scoped>
/* Your component styles here */
</style>