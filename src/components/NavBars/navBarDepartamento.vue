<template>
    <div id="NavBarDepartamento" class="container-fluid p-0">
      <div class="row">
        <div class="col-md-2 d-flex align-items-center justify-content-center">
          <img alt="Logo" src="../../assets/logo.png" class="img-fluid">
        </div>
        <div class="col-md-10">
          <div class="row">
            <div class="col-8 col-md-6">
              <span>Bienvenido, Departamento {{ departamento }}</span>
            </div>
            <div class="col-4 col-md-6 d-flex justify-content-end">
              <button class="btn me-2">Configuración</button>
              <button class="btn" @click="cerrarSesion">Cerrar Sesión</button>
            </div>
          </div>
          <hr>
          <div class="row">
            <div class="col-3 d-flex align-items-center justify-content-center">
              <a class="btn" href="/departamentos">Inicio</a>
            </div>
            <div class="col-3">
              <div class="dropdown">
                <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  Convocatoria
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><a class="dropdown-item" href="/departamentos/convocatorias/ingreso">Ingresar información convocatoria</a></li>
                  <li><a class="dropdown-item" href="/departamentos/convocatorias/consultas/periodo">Exportar información de un año</a></li>
                  <li><a  class="dropdown-item" href="/departamentos/convocatorias/consultas/periodos">Exportar información en un rango de años</a></li>
                </ul>
              </div>
            </div>
            <div class="col-3">
              <div class="dropdown">
                <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                  Acompañamiento
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                  <li><a class="dropdown-item" href="/departamentos/acompanamientos/ingreso">Ingresar información Acompañamiento</a></li>
                  <li><a class="dropdown-item" href="/departamentos/acompanamientos/consultas/periodo">Exportar información de un año</a></li>
                  <li><a  class="dropdown-item" href="/departamentos/acompanamientos/consultas/periodos">Exportar información en un rango de años</a></li>
                </ul>
              </div>
            </div>
            <div class="col-3">
              <div class="dropdown">
                <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                  Movilización
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                  <li><a class="dropdown-item" href="/departamentos/movilizaciones/ingreso">Ingresar información movilización</a></li>
                  <li><a class="dropdown-item" href='/departamentos/movilizaciones/consultas/periodo'>Exportar información de un año</a></li>
                  <li><a  class="dropdown-item" href='/departamentos/movilizaciones/consultas/periodos'>Exportar información en un rango de años</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { jwtDecode } from 'jwt-decode';
  export default {
    name: 'NavBarDepartamento',
    data () {
    return {
        departamento: null
    }
  },methods: {
    cerrarSesion() {
      localStorage.removeItem('token');
      this.$router.push('/');
    }
  },
  mounted() {
    const token = localStorage.getItem('token');
    this.departamento = jwtDecode(token).departamento;
    }
  }
  </script>
  
  <style>
  #NavBarDepartamento{
    margin-top: 30px;
    overflow-x: hidden; 
    height: 230px
  }

  </style>
  