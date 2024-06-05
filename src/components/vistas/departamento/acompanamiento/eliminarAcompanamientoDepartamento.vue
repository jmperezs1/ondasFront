<template>
    <NavBarDepartamento/>
    <h1 style="text-align: center; margin-top: 40px;">Eliminar Acompañamiento</h1>
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
        <div v-if="anio=='seleccionar'" class="alert alert-success" role="alert" style="margin-top: 40px;">
            Por favor seleccione un año para eliminar el acompañamiento
        </div>
    </div>
    <EliminarAcompanamiento v-if="valido" :anio="anio" :departamento="departamento" />
</template>

<script>
import NavBarDepartamento from '@/components/NavBars/navBarDepartamento.vue';
import EliminarAcompanamiento from '@/components/acompanamiento/eliminarAcompanamiento.vue';
import { jwtDecode } from 'jwt-decode';
export default {
    name: 'EliminarAcompanamientoDepartamento',
    components: {
        NavBarDepartamento,
        EliminarAcompanamiento,
    },
    data() {
        return {
            anio: "seleccionar",
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
    const yearsResponse = await fetch(`https://localhost:7192/api/acompaniamientos/anios/departamento/${this.departamento}/${this.id}/${this.token}`);
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
/* Your CSS styles here */
</style>