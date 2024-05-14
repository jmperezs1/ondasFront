<template>
    <NavBarDepartamento/>
    <ExportarMovilizacion :id="0"/>
</template>

<script>
import NavBarDepartamento from '@/components/NavBars/navBarDepartamento.vue';
import ExportarMovilizacion from '@/components/movilizacion/exportarMovilizacion.vue';
export default {
    name: 'ExportarMovilizacionDepartamento',
    components: {
        NavBarDepartamento,
        ExportarMovilizacion,
    },
};
</script>

<style scoped>
/* Your component's CSS styles go here */
</style>