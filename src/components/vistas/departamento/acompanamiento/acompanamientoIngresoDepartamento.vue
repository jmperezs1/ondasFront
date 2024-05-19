<template>
    <NavBarDepartamento/>
    <h1 style="text-align: center;">Ingreso de indicadores de Acompañamiento del departamento</h1>
    <div class="container">
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
        <IngresoAcompanamiento v-if="valido" :anio="anio" :departamento="departamento"/>
        <div v-else-if="valido === false" class="alert alert-danger" role="alert" style="margin-top: 40px;">
            Ya existe un Acompañamiento para el año {{ anio }} en el departamento de {{ departamento }}
        </div>
    </div>

</template>

<script>
import NavBarDepartamento from '@/components/NavBars/navBarDepartamento.vue'
import IngresoAcompanamiento from '@/components/acompanamiento/ingresoAcompanamiento.vue'
import { jwtDecode } from 'jwt-decode'

export default {
    name: 'AcompanamientoIngresoDepartamento',
    components: {
        NavBarDepartamento,
        IngresoAcompanamiento,
    },
    data() {
        return {
            anio: null,
            departamento: null,
            valido: '',
            token: null,
            id: null
        }
    },
    methods: {
        async verificarExistencia() {
            if (this.anio != null) {
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
    async mounted() {
    this. token = localStorage.getItem('token');
    this.id = jwtDecode(this.token).id;

    const departamento = await fetch (`https://localhost:7192/api/tokens/${this.id}/departamento?token=${this.token}`);
    const json = await departamento.json();
    this.departamento = json.departamento;
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
/* Your CSS code goes here */
</style>