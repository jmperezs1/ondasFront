<template>
    <NavBarMinciencias/>
    <ExportarConvocatoria/>
</template>

<script>
import NavBarMinciencias from '@/components/NavBars/navBarMinciencias.vue';
import ExportarConvocatoria from '@/components/convocatoria/exportarConvocatoria.vue';

export default {
    name: 'ExportarConvocatoriaMinciencias',
    components: {
    NavBarMinciencias,
    ExportarConvocatoria,
    },
    
};
</script>

<style scoped>
/* Your component's CSS styles go here */
</style>