<template>
    <NavBarMinciencias/>
    <VisualizarConvocatoria/>
</template>

<script>
import NavBarMinciencias from '@/components/NavBars/navBarMinciencias.vue';
import VisualizarConvocatoria from '@/components/convocatoria/visualizarConvocatoria.vue';
export default {
    name: 'VisualizarConvocatoriaMinciencias',
    components: {
        NavBarMinciencias,
        VisualizarConvocatoria,
    },
};
</script>

<style scoped>
/* Your component's CSS styles go here */
</style>