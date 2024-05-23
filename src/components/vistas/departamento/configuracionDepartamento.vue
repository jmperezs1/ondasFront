<template>
    <NavBarDepartamento />
    <div style="text-align: center">
      <h1 style="margin-top: 50px; margin-bottom: 50px;">Cambio de Contraseña</h1>
    </div>
    <div class="form-group" style="width: 540px; margin: 0% auto">
      <label for="temp">Clave actual o Clave temporal</label>
      <input type="password" class="form-control" id="temp" v-model="temp" placeholder="Ingrese su clave actual o clave temporal" style="margin-bottom: 27px;">
    </div>
    <div class="form-group" style="width: 540px; margin: 0% auto">
      <label for="inputNueva">Nueva Contraseña</label>
      <input type="password" class="form-control" id="inputNueva" v-model="nueva" :class="{'border-danger': !validPasswordLength}" placeholder="Ingrese su nueva contraseña">
      <p v-if="!validPasswordLength" style="color: red; margin-top: 5px;">La contraseña debe tener al menos 8 caracteres.</p>
    </div>
    <div class="form-group" style="width: 540px; margin: 0% auto">
      <label for="inputConfirmacion">Confirmar Contraseña</label>
      <input type="password" class="form-control" id="inputConfirmacion" v-model="confirmacion" :class="{'border-danger': !passwordsMatch}" placeholder="Confirme su nueva contraseña">
      <p v-if="!passwordsMatch" style="color: red; margin-top: 5px;">Las contraseñas no coinciden.</p>
    </div>
    <div style="text-align: center;">
      <button type="submit" class="btn" style="height: 40px; width: 331px; margin-top: 74px; background-color: #53C0D9;" @click="confirmPasswordService" :disabled="!validPasswordLength || !passwordsMatch">Cambiar contraseña</button>
    </div>
</template>

<script>
import NavBarDepartamento from '@/components/NavBars/navBarDepartamento.vue';
import { jwtDecode } from 'jwt-decode';

export default {
    name: 'configuracionDepartamento',
    components: {
        NavBarDepartamento
    },
    data() {
        return {
            temp: '',
            nueva: '',
            confirmacion: '',
            token: localStorage.getItem('token'),
            id: 0,
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
            this.id = jwtDecode(this.token).id;
            const response = await fetch(`https://localhost:7192/api/autenticaciones/ConfirmarContrasenia/${this.temp}/${this.token}/${this.id}`);
            if(response.ok){
                if(this.passwordsMatch && this.validPasswordLength){
                    this.saveData();
                }
            }
            else{
                alert('La contraseña actual o temporal es incorrecta.');
            }
        },
        async saveData(){
            const response = await fetch(`https://localhost:7192/api/autenticaciones/CambioContrasenia/${this.token}/${this.id}/${this.nueva}`, {
                method: 'POST',
            });
            if(response.forbidden){
                alert('No tiene permisos para realizar esta acción.');
            }
            else if(response.notFound){
                alert('Usuario no encontrado.');
            }
            else if(response.badRequest){
                alert('La contraseña no cumple con los requisitos mínimos.');
            }
            else if(response.internalServerError){
                alert('Error interno del servidor.');
            }
            else if(response.unauthorized){
                alert('No autorizado.');
            }
            else{
                alert('Contraseña cambiada con éxito.');
            }
        }
    }
}
</script>

<style scoped>
.border-danger {
  border: 2px solid red;
}
</style>
