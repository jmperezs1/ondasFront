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
              <button class="btn">Cerrar Sesión</button>
            </div>
          </div>
          <hr>
          <div class="row">
            <div class="col-6 d-flex align-items-center justify-content-center">
              <button class="btn">Inicio</button>
            </div>
            <div class="col-3">
              <div class="dropdown">
                <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  Usuarios
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><a class="dropdown-item" href="#">Crear usuario</a></li>
                  <li><a class="dropdown-item" href="#">Buscar usuario</a></li>
                  <li><a class="dropdown-item" href="#">Modificar usuario</a></li>
                  <li><a class="dropdown-item" href="#">Eliminar usuario</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>

<script>
export default {
    name: 'NavBarAdmin',
    // Your component's logic here
}
</script>

<style>
#NavBarAdmin {
    margin-top: 30px;
    overflow-x: hidden; 
    height: 270px
}
</style>