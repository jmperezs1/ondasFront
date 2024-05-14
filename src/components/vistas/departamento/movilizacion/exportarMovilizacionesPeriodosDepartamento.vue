<template>
    <NavBarDepartamento/>
    <ExportarMovilizacion :id="1"/>
</template>

<script>
import NavBarDepartamento from '@/components/NavBars/navBarDepartamento.vue';
import ExportarMovilizacion from '@/components/movilizacion/exportarMovilizacion.vue';
export default {
    name: 'ExportarMovilizacionesPeriodosDepartamento',
    components: {
        NavBarDepartamento,
        ExportarMovilizacion,
    },
};
</script>

<style scoped>
/* Your component's CSS styles go here */
</style>