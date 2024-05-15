<template>
    <navBarAdmin />
    <h1>Eliminar Usuario</h1>
    <div class="container">
        <div class="row" >
            <div class="col-md-4"></div>
            <div class="col-md-4">
                <div class="form-group">
                    <label for="usuario">Usuario</label>
                    <input type="text" class="form-control" id="usuario" v-model="usuario" placeholder="Ingrese el usuario">
                </div>
            </div>
        </div> 
    </div>
</template>

<script>
import navBarAdmin from '@/components/NavBars/navBarAdmin.vue';
export default {
    name: 'EliminarUsuario',
    components: {
        navBarAdmin
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
/* Your component styles here */
</style>