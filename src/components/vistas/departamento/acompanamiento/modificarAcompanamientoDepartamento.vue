<template>
    <navBarDepartamento/>
    <h1 style="text-align: center; margin-top: 40px;">Modificar indicadores de acompañamiento del departamento</h1>
    <div class="container">
        <div class="row" style="margin-top: 56px;">
            <div class="col-md-1" style="text-align: left;"></div>
            <div class="col-md-2" >
                    <label for="anio">Ingrese el año:</label>
            </div>
            <div class="col-md-2 p-0">
                <select class="custom-select" id="anio" v-model="anio" @change="verificarExistencia">
                    <option value="seleccionar" selected>Seleccionar...</option>
                    <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
                </select>
            </div>
        </div>
        <IngresoAcompanamiento v-if="valido" :anio="anio" :departamento="departamento" :identificador="true"/>
        <div v-else-if="anio=='seleccionar'" class="alert alert-success" role="alert" style="margin-top: 40px;">
            Por favor seleccione un año para modificar el acompanamiento
        </div>
    </div>
</template>

<script>
    import NavBarDepartamento from '@/components/NavBars/navBarDepartamento.vue';
    import IngresoAcompanamiento from '@/components/acompanamiento/ingresoAcompanamiento.vue';
    import { jwtDecode } from 'jwt-decode';
export default {
    name: 'ModificarAcompanamientoDepartamento',
    components: {
        NavBarDepartamento,
        IngresoAcompanamiento,
    },
    data() {
        return {
            anio: 'seleccionar',
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
    const departamento = await fetch (`${this.$baseRoute}/tokens/${this.id}/departamento?token=${this.token}`);
    const json = await departamento.json();
    this.departamento = json.departamento;
    const yearsResponse = await fetch(`${this.$baseRoute}/acompaniamientos/anios/departamento/${this.departamento}/${this.id}/${this.token}`);
      if (yearsResponse.ok) {
        this.years = await yearsResponse.json();
    }
    },
    methods: {
        async verificarExistencia() {
            if (this.anio != null) {
                const response = await fetch(`${this.$baseRoute}/acompaniamientos/anio/${this.anio}/departamento/${this.departamento}/${this.id}/${this.token}`);
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
/* Your component-specific styles here */
</style>