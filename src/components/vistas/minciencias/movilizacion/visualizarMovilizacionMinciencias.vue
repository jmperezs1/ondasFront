<template>
    <NavBarMinciencias/>
    <VisualizarMovilizacion/>
</template>

<script>
import NavBarMinciencias from '@/components/NavBars/navBarMinciencias.vue';
import VisualizarMovilizacion from '@/components/movilizacion/visualizarMovilizacion.vue';
export default {
    name: 'VisualizarMovilizacionMinciencias',
    components: {
        NavBarMinciencias,
        VisualizarMovilizacion,
    },
};
</script>

<style scoped>
/* Your component's CSS styles go here */
</style>