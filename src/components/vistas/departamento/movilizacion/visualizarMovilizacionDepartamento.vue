<template>
    <NavBarDepartamento/>
    <VisualizarMovilizacion/>
</template>

<script>
import NavBarDepartamento from '@/components/NavBars/navBarDepartamento.vue';
import VisualizarMovilizacion from '@/components/movilizacion/visualizarMovilizacion.vue';
export default {
    name: 'VisualizarMovilizacionDepartamento',
    components: {
        NavBarDepartamento,
        VisualizarMovilizacion,
    },
};
</script>

<style scoped>
/* Your component's CSS styles go here */
</style>