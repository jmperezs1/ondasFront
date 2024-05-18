<template>
    <div>
      <navBarAdmin />
      <div class="container">
        <h1 class="text-center">Eliminar Usuario</h1>
        <div class="row mt-4">
          <div class="col-md-6 offset-md-3">
            <div class="form-group">
              <label for="usuario">Usuario</label>
              <input type="text" class="form-control" id="usuario" v-model="usuario" placeholder="Ingrese el usuario que desea eliminar">
            </div>
            <button type="button" class="btn btn-danger btn-block" @click="eliminarUsuario" style="margin-top: 20px; margin-left: 45%;">Eliminar</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import navBarAdmin from '@/components/NavBars/navBarAdmin.vue';
import { jwtDecode } from 'jwt-decode';
  export default {
    name: 'EliminarUsuario',
    components: {
      navBarAdmin
    },
    data() {
      return {
        usuario: '',
        token: localStorage.getItem('token'),
        id: ''
      };
    },
    methods: {
      async eliminarUsuario() {
        if (!this.usuario) {
          alert('Por favor ingrese el usuario a eliminar.');
          return;
        }
  
        try {
        
            this.id = jwtDecode(this.token).id;
          const response = await fetch(`https://localhost:7192/api/autenticaciones/${this.id}/${this.token}/${this.usuario}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
   
            }
          });
  
          if (response.ok) {
            alert('Usuario eliminado exitosamente.');
            // Optionally, you can reset the username input
            this.usuario = '';
          } else if (response.status === 404) {
            alert('El usuario especificado no fue encontrado.');
          } else {
            alert('Ocurrió un error al eliminar el usuario. Por favor, inténtelo de nuevo.');
          }
        } catch (error) {
          console.error('Error:', error);
          alert('Ocurrió un error al eliminar el usuario. Por favor, inténtelo de nuevo.');
        }
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add your component-specific styles here */
  </style>
  
