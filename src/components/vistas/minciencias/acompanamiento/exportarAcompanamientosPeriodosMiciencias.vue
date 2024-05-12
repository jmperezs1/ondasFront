<template>
    <NavBarMinciencias/>
    <ExportarAcompanamiento :id="1"/>
</template>

<script>
import NavBarMinciencias from '@/components/NavBars/navBarMinciencias.vue';
import ExportarAcompanamiento from '@/components/acompanamiento/exportarAcompanamiento.vue';

export default {
    name: 'ExportarAcompanamientosPeriodosMiciencias',
    components: {
        NavBarMinciencias,
        ExportarAcompanamiento,
    },
    data() {
        return {
            // Your data properties go here
        };
    },
    methods: {
        // Your component methods go here
    },
    mounted() {
        // Code to run when the component is mounted
    },
};
</script>

<style scoped>
/* Your component styles go here */
</style>