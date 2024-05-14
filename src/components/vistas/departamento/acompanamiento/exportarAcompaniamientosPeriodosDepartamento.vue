<template>
    <NavBarDepartamento/>
    <ExportarAcompanamiento :id="1"/>
</template>

<script>
import ExportarAcompanamiento from '@/components/acompanamiento/exportarAcompanamiento.vue';
import NavBarDepartamento from '@/components/NavBars/navBarDepartamento.vue'
export default {
    name: 'ExportarAcompaniamientosPeriodosDepartamento',
    components: {
        NavBarDepartamento,
        ExportarAcompanamiento,
    }
};
</script>

<style scoped>
/* Your component-specific styles go here */
</style>