<template>
    <navBarAdmin />
    <h1 style="text-align: center;">Eliminar Usuario</h1>
    <div class="container">
        <div class="row" style="margin-top: 20px;" >
            <div class="col-md-3"></div>
            <div class="col-md-6">
                <div class="form-group">
                    <label for="usuario">Usuario</label>
                    <input type="text" class="form-control" id="usuario" v-model="usuario" placeholder="Ingrese el usuario que desea eliminar">
                </div>
            </div>
        </div> 
    </div>
    <div style="margin-top: 20px;">
        <button type="button" class="btn btn-danger" style="margin-left: 45%;" @click="eliminarUsuario">Eliminar</button>
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