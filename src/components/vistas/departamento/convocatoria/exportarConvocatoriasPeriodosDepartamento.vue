<template>
    <NavBarDepartamento/>
    <ExportarConvocatoria :id="1"/>
</template>

<script>
import NavBarDepartamento from '@/components/NavBars/navBarDepartamento.vue';
import ExportarConvocatoria from '@/components/convocatoria/exportarConvocatoria.vue';

export default {
    name: 'ExportarConvocatoriasPeriodosDepartamento',
    components: {
        NavBarDepartamento,
        ExportarConvocatoria,
    }
};
</script>

<style scoped>
/* Your component-specific styles go here */
</style>