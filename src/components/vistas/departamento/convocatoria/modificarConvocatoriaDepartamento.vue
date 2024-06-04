<template>
    <navBarDepartamento/>
    <h1 style="text-align: center;">Ingreso de indicadores convocatoria del departamento</h1>
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
        <IngresoConvocatoria v-if="valido" :anio="anio" :departamento="departamento" :identificador="true"/>
        <div v-else-if="valido === false" class="alert alert-danger" role="alert" style="margin-top: 40px;">
            Ya existe una convocatoria para el año {{ anio }} en el departamento de {{ departamento }}
        </div>
    </div>
</template>

<script>
import NavBarDepartamento from '@/components/NavBars/navBarDepartamento.vue';
import IngresoConvocatoria from '@/components/convocatoria/ingresoConvocatoria.vue';
import { jwtDecode } from 'jwt-decode';
export default {
    name: 'ModificarConvocatoriaDepartamento',
    components: {
        NavBarDepartamento,
        IngresoConvocatoria,
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
    const yearsResponse = await fetch(`https://localhost:7192/api/Convocatorias/anios/departamento/${this.departamento}/${this.id}/${this.token}`);
      if (yearsResponse.ok) {
        this.years = await yearsResponse.json();
    }
    },
    methods: {
        async verificarExistencia() {
            if (this.anio != null) {
                const response = await fetch(`https://localhost:7192/api/Convocatorias/anio/${this.anio}/departamento/${this.departamento}/${this.id}/${this.token}`);
                if (response.ok) {
                    this.valido = true;
                }
                else {
                    this.valido = false;
                }
            }
            
        }
    },
};
</script>

<style scoped>
/* Your CSS styles here */
</style>