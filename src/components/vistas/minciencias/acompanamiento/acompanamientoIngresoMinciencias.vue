<template>
    <NavBarMinciencias/>
    <NavBarDepartamento/>
    <h1 style="text-align: center; margin-top: 40px;">Ingreso de indicadores de Acompañamiento del departamento</h1>
    <div class="container">
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
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-1" style="text-align: left;"></div>
            <div class="col-md-2" >
                    <label for="anio">Ingrese el departamento:</label>
            </div>
            <div class="col-md-2 p-0">
                <select class="custom-select" id="anio" v-model="departamento" @change="verificarExistencia">
                    <option selected value="seleccionar">Seleccionar...</option>
                    <option v-for="(departamento, index) in listDepartamentos" :key="index" :value="departamento">{{ departamento }}</option>
                </select>
            </div>
        </div>
        <IngresoAcompanamiento v-if="valido" :anio="anio" :departamento="departamento" />
        <div v-else-if="valido === false && anio!='seleccionar' && departamento!='seleccionar'" class="alert alert-danger" role="alert" style="margin-top: 40px;">
            Ya existe una convocatoria para el año {{ anio }} en el departamento de {{ departamento }}
        </div>
        <div v-else-if="anio=='seleccionar' && departamento!='seleccionar'" class="alert alert-success" role="alert" style="margin-top: 40px;">
            Por favor seleccione un año para ingresar la convocatoria
        </div>
        <div v-else-if="anio!='seleccionar' && departamento=='seleccionar'" class="alert alert-success" role="alert" style="margin-top: 40px;">
            Por favor seleccione un departamento para ingresar la convocatoria
        </div>
        <div v-else-if="anio=='seleccionar' && departamento=='seleccionar'" class="alert alert-success" role="alert" style="margin-top: 40px;">
            Por favor seleccione un año y un departamento para ingresar la convocatoria
        </div>
    </div>
</template>

<script>
import NavBarMinciencias from '@/components/NavBars/navBarMinciencias.vue'
import IngresoAcompanamiento from '@/components/acompanamiento/ingresoAcompanamiento.vue'
import { jwtDecode } from 'jwt-decode';
export default {
    name: 'AcompanamientoIngresoMinciencias',
    components: {
        NavBarMinciencias,
        IngresoAcompanamiento,
    },
    data() {
        return {
            listDepartamentos: ["Amazonas", 
                            "Antioquia", 
                            "Arauca", 
                            "Atlántico", 
                            "Bogotá",
                            "Bolívar", 
                            "Boyacá", 
                            "Caldas",    
                            "Caquetá",    
                            "Casanare",    
                            "Cauca",    
                            "Cesar",    
                            "Chocó",    
                            "Córdoba",    
                            "Cundinamarca",    
                            "Guainía",    
                            "Guaviare",    
                            "Huila",    
                            "La Guajira",    
                            "Magdalena",    
                            "Meta",    
                            "Nariño",    
                            "Norte de Santander",    
                            "Putumayo",    
                            "Quindío",    
                            "Risaralda",    
                            "San Andrés y Providencia",    
                            "Santander",    
                            "Sucre",    
                            "Tolima",    
                            "Valle del Cauca",    
                            "Vaupés",    
                            "Vichada"],
                anio : 'seleccionar',
                departamento : 'seleccionar',
                valido: '',
        }
    },
    async mounted() {
    this.token = localStorage.getItem('token');
    this.id = jwtDecode(this.token).id;

    },
    methods: {
        async verificarExistencia() {
            if (this.anio != 'seleccionar' && this.departamento != 'seleccionar') {
                const response = await fetch(`https://localhost:7192/api/Acompaniamientos/anio/${this.anio}/departamento/${this.departamento}/${this.id}/${this.token}`);
                if (response.status === 404) {
                    this.valido = true;
                }
                else {
                    this.valido = false;
                }
            }
            
        }
    },
    computed: {
        years() {
            const currentYear = new Date().getFullYear();
            const startYear = 2009; 
            return Array.from({ length: currentYear - startYear + 1 }, (_, index) => startYear + index);
        },
    },
};
</script>

<style scoped>
/* Your component styles here */
</style>