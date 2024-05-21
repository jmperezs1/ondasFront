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
              <a class="btn me-2" href="/minciencias/configuracion">Configuración</a>
              <button class="btn" @click="cerrarSesion">Cerrar Sesión</button>
            </div>
          </div>
          <hr>
          <div class="row">
            <div class="col-3 d-flex align-items-center justify-content-center">
              <a class="btn" href="/minciencias">Inicio</a>
            </div>
            <div class="col-3">
              <div class="dropdown">
                <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  Convocatoria
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><a class="dropdown-item" href="/minciencias/convocatorias/ingreso">Ingresar información convocatoria</a></li>
                  <li><a class="dropdown-item" href="/minciencias/convocatorias/consultas/periodo">Exportar información de un año convocatoria</a></li>
                  <li><a class="dropdown-item" href="/minciencias/convocatorias/consultas/periodos">Exportar información en un rango de años convocatoria</a></li>
                </ul>
              </div>
            </div>
            <div class="col-3">
              <div class="dropdown">
                <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                  Acompañamiento
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                  <li><a class="dropdown-item" href="/minciencias/acompanamiento/ingreso">Ingresar información acompañamiento</a></li>
                  <li><a class="dropdown-item" href="/minciencias/acompanamiento/consultas/periodo">Exportar información de un año</a></li>
                  <li><a class="dropdown-item" href="/minciencias/acompanamiento/consultas/periodos">Exportar información en un rango de años</a></li>
                </ul>
              </div>
            </div>
            <div class="col-3">
              <div class="dropdown">
                <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                  Movilización
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                    <li><a class="dropdown-item" href="/minciencias/movilizacion/ingreso">Ingresar información movilización</a></li>
                    <li><a class="dropdown-item" href="/minciencias/movilizacion/consultas/periodo">Exportar información de un año</a></li>
                    <li><a class="dropdown-item" href="/minciencias/movilizacion/consultas/periodos">Exportar información en un rango de años</a></li>
                    <li><a class="dropdown-item" href="/minciencias/movilizaciones/visualizacion">Visualizar movilizaciones</a></li>
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
    name: 'NavBarMinciencias',
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
  }
}
</script>

<style >
  #NavBarMinCiencias{
    margin-top: 30px;
    overflow-x: hidden; 
    height: 230px
  }
</style>