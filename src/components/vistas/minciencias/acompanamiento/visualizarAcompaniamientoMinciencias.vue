<template>
    <NavBarMinciencias/>
    <VisualizarAcompaniamiento/>
</template>

<script>
import NavBarMinciencias from '@/components/NavBars/navBarMinciencias.vue';
import VisualizarAcompaniamiento from '@/components/acompanamiento/visualizarAcompaniamiento.vue';
export default {
    name: 'VisualizarMovilizacionMinciencias',
    components: {
        NavBarMinciencias,
        VisualizarAcompaniamiento,
    },
};
</script>

<style scoped>
/* Your component's CSS styles go here */
</style>