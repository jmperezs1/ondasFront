<template>
    <NavBarMinciencias/>
    <ExportarAcompanamiento/>
</template>

<script>
import NavBarMinciencias from '@/components/NavBars/navBarMinciencias.vue';
import ExportarAcompanamiento from '@/components/acompanamiento/exportarAcompanamiento.vue';

export default {
    name: 'ExportarAcompanamientoMinciencias',
    components: {
        NavBarMinciencias,
        ExportarAcompanamiento,
    },
    data() {
        return {
            // Your data properties here
        };
    },
    methods: {
        // Your methods here
    },
    mounted() {
        // Code to run when the component is mounted
    },
    // Other component options here
};
</script>

<style scoped>
/* Your component-specific styles here */
</style>