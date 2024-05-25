<template>
    <NavBarDepartamento/>
    <VisualizarAcompaniamiento/>
</template>

<script>
import NavBarDepartamento from '@/components/NavBars/navBarDepartamento.vue';
import VisualizarAcompaniamiento from '@/components/acompanamiento/visualizarAcompaniamiento.vue';
export default {
    name: 'VisualizarMovilizacionDepartamento',
    components: {
        NavBarDepartamento,
        VisualizarAcompaniamiento,
    },
};
</script>

<style scoped>
/* Your component's CSS styles go here */
</style>