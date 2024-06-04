<template>
    <NavBarMinciencias />
    <h1 style="text-align: center;">Eliminar Convocatoria</h1>
    <div class="container">
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-1" style="text-align: left;"></div>
            <div class="col-md-2" >
                <label for="departamento">Ingrese el departamento:</label>
            </div>
            <div class="col-md-2 p-0">
                <select class="custom-select" id="departamento" v-model="departamento" @change="fetchYears" style="width: 100%; background-color: #D9D9D9; border: 0cap;">
                    <option selected>Seleccionar...</option>
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
                <select class="custom-select" id="anio" v-model="anio" @change="verificarExistencia" style="width: 100%; background-color: #D9D9D9; border: 0cap;">
                    <option selected>Seleccionar...</option>
                    <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
                </select>
            </div>
        </div>
    </div>
    <EliminarConvocatoria v-if="valido" :anio="anio" :departamento="departamento" />
</template>

<script>
import NavBarMinciencias from '@/components/NavBars/navBarMinciencias.vue';
import EliminarConvocatoria from '@/components/convocatoria/eliminarConvocatoria.vue';
import {jwtDecode} from 'jwt-decode';

export default {
    name: 'EliminarConvocatoriaMinciencias',
    components: {
        NavBarMinciencias,
        EliminarConvocatoria,
    },
    data() {
        return {
            listDepartamentos: ["Amazonas", "Antioquia", "Arauca", "Atlántico", "Bogotá", "Bolívar", "Boyacá", "Caldas", "Caquetá", "Casanare", "Cauca", "Cesar", "Chocó", "Córdoba", "Cundinamarca", "Guainía", "Guaviare", "Huila", "La Guajira", "Magdalena", "Meta", "Nariño", "Norte de Santander", "Putumayo", "Quindío", "Risaralda", "San Andrés y Providencia", "Santander", "Sucre", "Tolima", "Valle del Cauca", "Vaupés", "Vichada"],
            anio: null,
            departamento: null,
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
                const response = await fetch(`https://localhost:7192/api/convocatorias/anios/departamento/${this.departamento}/${this.id}/${this.token}`);
                if (response.ok) {
                    this.years = await response.json();
                }
                else{
                    this.years = [];
                }
            }
        },
        async verificarExistencia() {
            if (this.anio != null && !isNaN(this.anio) && this.departamento != null) {
                this.valido = true;
            } else {
                this.valido = false;
            }
            
        }
    }
}
</script>

<style scoped>
/* Your component-specific styles here */
</style>
