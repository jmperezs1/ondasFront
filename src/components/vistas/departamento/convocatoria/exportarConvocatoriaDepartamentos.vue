<template>
    <NavBarDepartamento/>
    <ExportarConvocatoria :id="0"/>
</template>

<script>
import NavBarDepartamento from '@/components/NavBars/navBarDepartamento.vue';
import ExportarConvocatoria from '@/components/convocatoria/exportarConvocatoria.vue';

export default {    
    name: 'ExportarConvocatoriaDepartamentos',
    components: {
        NavBarDepartamento,
        ExportarConvocatoria,
    }
};
</script>

<style scoped>
/* Your component-specific styles go here */
</style>