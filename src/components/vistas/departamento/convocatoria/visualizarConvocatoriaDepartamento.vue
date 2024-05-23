<template>
    <NavBarDepartamento/>
    <VisualizarConvocatoria/>
</template>

<script>
import NavBarDepartamento from '@/components/NavBars/navBarDepartamento.vue';
import VisualizarConvocatoria from '@/components/convocatoria/visualizarConvocatoria.vue';
export default {
    name: 'VisualizarConvocatoriaDepartamento',
    components: {
        NavBarDepartamento,
        VisualizarConvocatoria,
    },
};
</script>

<style scoped>
/* Your component's CSS styles go here */
</style>