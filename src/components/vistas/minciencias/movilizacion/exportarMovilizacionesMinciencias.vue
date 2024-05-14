<template>
    <NavBarMinciencias/>
    <ExportarMovilizacion :id="1"/>
</template>

<script>
import NavBarMinciencias from '@/components/NavBars/navBarMinciencias.vue';
import ExportarMovilizacion from '@/components/movilizacion/exportarMovilizacion.vue';

export default {
    name: 'ExportarMovilizacionesMinciencias',
    components: {
        NavBarMinciencias,
        ExportarMovilizacion,
    },
};
</script>

<style scoped>
/* Your component-specific styles go here */
</style>