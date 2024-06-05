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
              <a class="btn me-2" href="/departamentos/configuracion">Configuración</a>
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
                <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown">
                  Convocatoria
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><a class="dropdown-item" href="/departamentos/convocatorias/ingreso">Ingresar información convocatoria</a></li>
                  <li><a class="dropdown-item" href="/departamentos/convocatorias/modificar">Modificar información de un año</a></li>
                  <li><a class="dropdown-item" href="/departamentos/convocatorias/eliminar">Eliminar información de un año</a></li>
                  <li><a class="dropdown-item" href="/departamentos/convocatorias/consultas/periodo">Exportar información de un año</a></li>
                  <li><a  class="dropdown-item" href="/departamentos/convocatorias/consultas/periodos">Exportar información en un rango de años</a></li>
                  <li><a  class="dropdown-item" href='/departamentos/convocatorias/visualizacion'>Visualizar convocatorias</a></li>
                </ul>
              </div>
            </div>
            <div class="col-3">
              <div class="dropdown">
                <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown">
                  Acompañamiento
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                  <li><a class="dropdown-item" href="/departamentos/acompanamientos/ingreso">Ingresar información Acompañamiento</a></li>
                  <li><a class="dropdown-item" href="/departamentos/acompanamientos/modificar">Modificar información de un año</a></li>
                  <li><a class="dropdown-item" href="/departamentos/acompanamientos/eliminar">Eliminar información de un año</a></li>
                  <li><a class="dropdown-item" href="/departamentos/acompanamientos/consultas/periodo">Exportar información de un año</a></li>
                  <li><a  class="dropdown-item" href="/departamentos/acompanamientos/consultas/periodos">Exportar información en un rango de años</a></li>
                  <li><a class="dropdown-item" href="/departamentos/acompanamientos/visualizacion">Visualizar acompañamientos</a></li>
                </ul>
              </div>
            </div>
            <div class="col-3">
              <div class="dropdown">
                <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown">
                  Movilización
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton2"  >
                  <li><a class="dropdown-item" href="/departamentos/movilizaciones/ingreso">Ingresar información movilización</a></li>
                  <li><a class="dropdown-item" href="/departamentos/movilizaciones/modificar">Modificar información de un año</a></li>
                  <li><a class="dropdown-item" href="/departamentos/movilizaciones/eliminar">Eliminar información de un año</a></li>
                  <li><a class="dropdown-item" href='/departamentos/movilizaciones/consultas/periodo'>Exportar información de un año</a></li>
                  <li><a  class="dropdown-item" href='/departamentos/movilizaciones/consultas/periodos'>Exportar información en un rango de años</a></li>
                  <li><a  class="dropdown-item" href='/departamentos/movilizaciones/visualizacion'>Visualizar movilizaciones</a></li>
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
  async mounted() {
    const token = localStorage.getItem('token');
    const id = jwtDecode(token).id;
    const departamento = await fetch (`https://localhost:7192/api/tokens/${id}/departamento?token=${token}`);
    const json = await departamento.json();
    this.departamento = json.departamento;
    }
  }
  </script>
  
  <style>
  #NavBarDepartamento{
    margin-top: 30px;
  }

  </style>
  