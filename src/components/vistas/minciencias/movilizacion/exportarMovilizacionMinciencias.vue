<template>
    <NavBarMinciencias/>
    <ExportarMovilizacion :id="0"/>
</template>

<script>
import NavBarMinciencias from '@/components/NavBars/navBarMinciencias.vue';
    import ExportarMovilizacion from '@/components/movilizacion/exportarMovilizacion.vue';
export default {

    name: 'ExportarMovilizacionMinciencias',
    components: {
        NavBarMinciencias,
        ExportarMovilizacion,
    },
    
};
</script>

<style scoped>
/* Your component's CSS styles go here */
</style>