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
    data() {
        return {
            // Your component's data goes here
        };
    },
    methods: {
        // Your component's methods go here
    },
    mounted() {
        // Code to run when the component is mounted goes here
    },
};
</script>

<style scoped>
/* Your component's CSS styles go here */
</style>