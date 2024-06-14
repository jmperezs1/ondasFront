<template>
    <NavBarAdmin />
    <div style="text-align: center">
      <h1 style="margin-top: 50px; margin-bottom: 50px;">Cambio de Contraseña</h1>
    </div>
    <div class="form-group" style="width: 540px; margin: 0% auto">
      <label for="temp">Clave actual o Clave temporal</label>
      <input type="password" class="form-control" id="temp" v-model="temp" placeholder="Ingrese su clave actual o clave temporal" style="margin-bottom: 27px;">
    </div>
    <div class="form-group" style="width: 540px; margin: 0% auto">
      <label for="inputNueva">Nueva Contraseña</label>
      <input type="password" class="form-control" id="inputNueva" v-model="nueva" placeholder="Ingrese la su nueva contraseña">
      <p v-if="!validPasswordLength" style="color: red; margin-top: 5px;">La contraseña debe tener al menos 8 caracteres.</p>
    </div>
    <div class="form-group" style="width: 540px; margin: 0% auto">
      <label for="inputConfirmacion">Confirmar Contraseña</label>
      <input type="password" class="form-control" id="inputConfirmacion" v-model="confirmacion" :class="{'border-danger': !passwordsMatch}" placeholder="Confirme su nueva contraseña">
      <p v-if="!passwordsMatch" style="color: red; margin-top: 5px;">Las contraseñas no coinciden.</p>
    </div>
    <div style="text-align: center;">
      <button type="submit" class="btn" style="height: 40px; width: 331px; margin-top: 74px; background-color: #53C0D9;" @click="confirmPasswordService">Cambiar contraseña</button>
    </div>
</template>

<script>
import NavBarAdmin from '@/components/NavBars/navBarAdmin.vue';
import {jwtDecode} from 'jwt-decode';

export default {
    name: 'configuracionAdmin',
    components: {
        NavBarAdmin
    },
    data() {
        return {
            temp: undefined,
            token: localStorage.getItem('token'),
            id: 0,
            nueva: '',
            confirmacion: ''
        };
    },
    computed: {
        passwordsMatch() {
            return this.nueva === this.confirmacion;
        },
        validPasswordLength() {
            return this.nueva.length >= 8;
        }
    },
    methods: {
        async confirmPasswordService(){
            try {
                this.id = jwtDecode(this.token).id;
                const response = await fetch(`${this.$baseRoute}/autenticaciones/ConfirmarContrasenia/${this.temp}/${this.token}/${this.id}`);
                if(response.ok){
                    if(this.passwordsMatch && this.validPasswordLength){
                        this.saveData();
                    } else {
                        alert('Las contraseñas no coinciden o la nueva contraseña es demasiado corta.');
                    }
                } else {
                    alert('La contraseña actual o temporal es incorrecta.');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('Hubo un problema con la verificación de la contraseña.');
            }
        },
        async saveData(){
            try {
                const response = await fetch(`${this.$baseRoute}/autenticaciones/CambioContrasenia/${this.token}/${this.id}/${this.nueva}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                if(response.status === 403){
                    alert('No tiene permisos para realizar esta acción.');
                } else if(response.status === 404){
                    alert('Usuario no encontrado.');
                } else if(response.status === 400){
                    alert('La contraseña no cumple con los requisitos mínimos.');
                } else if(response.status === 500){
                    alert('Error interno del servidor.');
                } else if(response.status === 401){
                    alert('No autorizado.');
                } else if(response.ok){
                    alert('Contraseña cambiada con éxito.');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('Hubo un problema al cambiar la contraseña.');
            }
        }
    }
}
</script>

<style scoped>
.border-danger {
  border: 2px solid red;
}
.btn {
  background-color: #53C0D9;
}
</style>
