<template>
    <NavBarMinciencias/>
    <VisualizarMetas/>
</template>

<script>
import NavBarMinciencias from '@/components/NavBars/navBarMinciencias.vue';
import VisualizarMetas from '@/components/metas/visualizarMetasOndas.vue';
export default {

    name: 'MetasMinciencias',
    components: {
        NavBarMinciencias,
        VisualizarMetas
    }

}

</script>