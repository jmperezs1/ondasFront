<template>
    <div id="NavBarMinCiencias" class="container-fluid p-0">
      <div class="row">
        <div class="col-md-2 d-flex align-items-center justify-content-center">
          <img alt="Logo" src="../../assets/logo.png" class="img-fluid">
        </div>
        <div class="col-md-10">
          <div class="row">
            <div class="col-8 col-md-6">
              <span>Bienvenido, MinCiencias</span>
            </div>
            <div class="col-4 col-md-6 d-flex justify-content-end">
              <button class="btn me-2">Configuración</button>
              <button class="btn">Cerrar Sesión</button>
            </div>
          </div>
          <hr>
          <div class="row">
            <div class="col-3 d-flex align-items-center justify-content-center">
              <button class="btn">Inicio</button>
            </div>
            <div class="col-3">
              <div class="dropdown">
                <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  Convocatoria
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><a class="dropdown-item" href="#">Consultar información convocatoria</a></li>
                  <li><a class="dropdown-item" href="#">Ingresar información convocatoria</a></li>
                </ul>
              </div>
            </div>
            <div class="col-3">
              <div class="dropdown">
                <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                  Acompañamiento
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                    <li><a class="dropdown-item" href="#">Consultar información acompañamiento</a></li>
                  <li><a class="dropdown-item" href="#">Ingresar información acompañamiento</a></li>
                </ul>
              </div>
            </div>
            <div class="col-3">
              <div class="dropdown">
                <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                  Movilización
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                    <li><a class="dropdown-item" href="#">Consultar información movilización</a></li>
                  <li><a class="dropdown-item" href="#">Ingresar información movilización</a></li>
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
    name: 'NavBarMinciencias',
    // Your component's logic goes here
}
</script>

<style >
  #NavBarMinCiencias{
    margin-top: 30px;
    overflow-x: hidden; 
    height: 200px
  }
</style>