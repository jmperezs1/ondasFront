<template>
    <NavBarDepartamento/>
    <h1 style="text-align: center;">Eliminar Movilización</h1>
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
    </div>
    <EliminarMovilizacion v-if="valido" :anio="anio" :departamento="departamento" />
</template>

<script>
import { jwtDecode } from 'jwt-decode';
import NavBarDepartamento from '@/components/NavBars/navBarDepartamento.vue';
import EliminarMovilizacion from '@/components/movilizacion/eliminarMovilizacion.vue';
export default {
    name: 'EliminarMovilizacionDepartamento',
    components: {
        NavBarDepartamento,
        EliminarMovilizacion,
    },
    data() {
        return {
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
    const departamento = await fetch (`https://localhost:7192/api/tokens/${this.id}/departamento?token=${this.token}`);
    const json = await departamento.json();
    this.departamento = json.departamento;
    const yearsResponse = await fetch(`https://localhost:7192/api/movilizaciones/anios/departamento/${this.departamento}/${this.id}/${this.token}`);
      if (yearsResponse.ok) {
        this.years = await yearsResponse.json();
    }
    },
    methods: {
        async verificarExistencia() {
            if (this.anio != null && !isNaN(this.anio)) {
                this.valido = true;
            } else {
                this.valido = false;
            }
            
        }
    },
}
</script>

<style scoped>
/* Your component styles here */
</style>