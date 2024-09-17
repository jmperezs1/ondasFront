<template>
    <NavBarMinciencias/>
    <UpdateOrSetMetas/>

</template>

<script>
import NavBarMinciencias from '@/components/NavBars/navBarMinciencias.vue';
import UpdateOrSetMetas from '@/components/metas/setOrUpdateMetasOndas.vue';

export default {
    name: 'setOrUpdateMetasMinciencias',
    components: {
        NavBarMinciencias,
        UpdateOrSetMetas
    }
}
</script>

