<template>
    <nav-bar-departamento/>
    <h1 style="text-align: center;">Ingreso de indicadores de movilización del departamento</h1>
    <div class="container">
        <div class="row" style="margin-top: 56px;">
            <div class="col-md-1" style="text-align: left;"></div>
            <div class="col-md-2" >
                    <label for="anio">Ingrese el año:</label>
            </div>
            <div class="col-md-2 p-0">
                <select class="custom-select" id="anio" style="width: 100%; background-color: #D9D9D9; border: 0cap;">
                    <option selected>Seleccionar...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
        </div>
        <IngresoMovilizacion/>
    </div>
</template>

<script>
import NavBarDepartamento from '@/components/NavBars/navBarDepartamento.vue'
import IngresoMovilizacion from '@/components/movilizacion/ingresoMovilizacion.vue'
export default {
    name: 'MovilizacionIngresoDepartamento',
    components: {
        NavBarDepartamento,
        IngresoMovilizacion,
    },
};
</script>

<style scoped>
/* Your component-specific styles here */
</style>