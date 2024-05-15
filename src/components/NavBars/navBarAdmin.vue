<template>
    <div id="NavBarAdmin" class="container-fluid p-0">
      <div class="row">
        <div class="col-md-2 d-flex align-items-center justify-content-center">
          <img alt="Logo" src="../../assets/logo.png" class="img-fluid">
        </div>
        <div class="col-md-10">
          <div class="row">
            <div class="col-8 col-md-6">
              <span>Bienvenido, Administrador de usuarios</span>
            </div>
            <div class="col-4 col-md-6 d-flex justify-content-end">
              <button class="btn me-2">Configuración</button>
              <button class="btn" @click="cerrarSesion">Cerrar Sesión</button>
            </div>
          </div>
          <hr>
          <div class="row">
            <div class="col-6 d-flex align-items-center justify-content-center">
              <a class="btn" href="/admin">Inicio</a>
            </div>
            <div class="col-3">
              <div class="dropdown">
                <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  Usuarios
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><a class="dropdown-item" href="/admin/crearUsuario">Crear usuario</a></li>
                  <li><a class="dropdown-item" href="/admin/eliminarUsuario">Eliminar usuario</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>

<script>
import {jwtDecode} from 'jwt-decode';
export default {
    name: 'NavBarAdmin',
    methods: {
    async cerrarSesion() {
      const token = localStorage.getItem('token');
      const id = jwtDecode(token).id;
      localStorage.removeItem('token');
      this.$router.push('/');
      await fetch(`https://localhost:7192/api/tokens/delete/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
  },
}
</script>

<style>
#NavBarAdmin {
    margin-top: 30px;
    overflow-x: hidden; 
    height: 200px
}
</style>