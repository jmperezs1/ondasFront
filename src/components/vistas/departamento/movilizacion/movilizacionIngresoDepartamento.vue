<template>
    <nav-bar-departamento/>
    <h1 style="text-align: center; margin-top: 40px;">Ingreso de indicadores de movilización del departamento</h1>
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
        <IngresoMovilizacion v-if="valido" :anio="anio" :departamento="departamento"/>
        <div v-else-if="valido === false && anio!='seleccionar'" class="alert alert-danger" role="alert" style="margin-top: 40px;">
            Ya existe una movilización para el año {{ anio }} en el departamento de {{ departamento }}
        </div>
        <div v-else-if="anio=='seleccionar'" class="alert alert-success" role="alert" style="margin-top: 40px;">
            Por favor seleccione un año para ingresar la movilización
        </div>
    </div>
</template>

<script>
import { jwtDecode } from 'jwt-decode';
import NavBarDepartamento from '@/components/NavBars/navBarDepartamento.vue'
import IngresoMovilizacion from '@/components/movilizacion/ingresoMovilizacion.vue'
export default {
    name: 'MovilizacionIngresoDepartamento',
    components: {
        NavBarDepartamento,
        IngresoMovilizacion,
    },
    data() {
        return {
            anio: 'seleccionar',
            departamento: null,
            valido: '',
            token: null,
            userId: null,
        }
    },
    methods: {
        async verificarExistencia() {
            if (this.anio != null) {
                const response = await fetch(`${this.$baseRoute}/movilizaciones/anio/${this.anio}/departamento/${this.departamento}/${this.userId}/${this.token}`);
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
    async mounted() {
        this.token = localStorage.getItem('token');
        this.userId = jwtDecode(this.token).id;
        const departamento = await fetch (`${this.$baseRoute}/tokens/${this.userId}/departamento?token=${this.token}`);
        const json = await departamento.json();
        this.departamento = json.departamento;
    }
};
</script>

<style scoped>
/* Your component-specific styles here */
</style>