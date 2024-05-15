<template>
    <NavBarAdmin/>
    <h1 style="text-align: center;">Crear Usuario</h1>
    <div class="container">
        <div class="row" style="margin-bottom: 10px;">
            <div class="col-md-4"></div>
            <div class="col-md-4">
                <div class="form-group">
                    <label for="nombre">Nombre</label>
                    <input type="text" class="form-control" id="nombre" v-model="nombre" placeholder="Ingrese el nombre">
                </div>
            </div>
        </div>
        <div class="row" style="margin-bottom: 10px;">
            <div class="col-md-4"></div>
            <div class="col-md-4">
                <div class="form-group">
                    <label for="correo">Correo</label>
                    <input type="email" class="form-control" id="correo" v-model="correo" placeholder="Ingrese el correo">
                </div>
            </div>
        </div>
        <div class="row" style="margin-bottom: 10px;">
            <div class="col-md-4"></div>
            <div class="col-md-4">
                <div class="form-group">
                    <label for="usuario">Usuario</label>
                    <input type="text" class="form-control" id="usuario" v-model="usuario" placeholder="Ingrese el usuario">
                </div>
            </div>
        </div>

        <div class="row" style="margin-bottom: 10px;">
            <div class="col-md-4"></div>
            <div class="col-md-4">
                <label for="rol">Rol</label>
                <select class="form-select" id="rol" v-model="rol">
                    <option disabled value="">Seleccionar...</option>
                    <option value="Admin">Admin</option>
                    <option value="Minciencias">Minciencias</option>
                    <option value="Departamento">Departamento</option>
                </select>
            </div>
        </div>
        <div class="row" style="margin-bottom: 10px;" v-if="rol === 'Departamento'">
            <div class="col-md-4"></div>
            <div class="col-md-4">
                <label for="departamento">Ingrese el departamento:</label>
                <select class="form-select" id="departamento" v-model="departamento">
                    <option disabled value="">Seleccionar...</option>
                    <option v-for="(departamento, index) in listDepartamentos" :key="index" :value="departamento">{{ departamento }}</option>
                </select>
            </div>
        </div>
    </div>
    <div style="text-align:center">
        <button type="button" class="btn btn-primary" @click="crearUsuario">Crear Usuario</button>
    </div>
</template>

<script>
import NavBarAdmin from '@/components/NavBars/navBarAdmin.vue'

export default {
    name: 'CrearUsuario',
    components: {
        NavBarAdmin
    },
    data() {
        return {
            nombre: '',
            correo: '',
            usuario: '',
            rol: '',
            departamento: '',
            listDepartamentos: [
                "Amazonas", "Antioquia", "Arauca", "Atlántico", "Bogotá", "Bolívar", "Boyacá", "Caldas", "Caquetá",
                "Casanare", "Cauca", "Cesar", "Chocó", "Córdoba", "Cundinamarca", "Guainía", "Guaviare", "Huila",
                "La Guajira", "Magdalena", "Meta", "Nariño", "Norte de Santander", "Putumayo", "Quindío", "Risaralda",
                "San Andrés y Providencia", "Santander", "Sucre", "Tolima", "Valle del Cauca", "Vaupés", "Vichada"
            ]
        };
    },
    methods: {
        crearUsuario() {
            if (this.nombre && this.correo && this.usuario && this.rol && (this.rol !== 'Departamento' || this.departamento)) {
                // Code to handle user creation
                alert('Usuario creado con éxito');
            } else {
                alert('Por favor complete todos los campos requeridos');
            }
        }
    }
};
</script>

<style scoped>
/* Your component-specific styles go here */
</style>
