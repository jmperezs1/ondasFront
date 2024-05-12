<template>
    <NavBarMinciencias/>
    <ExportarConvocatoria :id="1"/>
</template>

<script>
import NavBarMinciencias from '@/components/NavBars/navBarMinciencias.vue';
import ExportarConvocatoria from '@/components/convocatoria/exportarConvocatoria.vue';

export default {
    name: 'ExportarConvocatoriasPeriodosMinciencias',
    components: {
    NavBarMinciencias,
    ExportarConvocatoria,
    },
    
};
</script>

<style scoped>
/* Your component's CSS styles go here */
</style>