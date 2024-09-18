<template>
    <div id="NavBarDepartamento" class="container-fluid p-0">
      <div class="row row align-items-center">
        <div class="col-md-2 text-center py-2">
          <img alt="Logo" src="../../assets/logo.png" class="img-fluid">
        </div>
        <div class="col-md-10">
          <div class="row align-items-center mb-2">
            <div class="col-md-6">
              <span class="fs-5">Bienvenido, Departamento {{ departamento }}</span>
            </div>
            <div class="col-md-6 text-end">
              <a class="btn me-2" href="/departamentos/configuracion">Configuración</a>
              <button class="btn" @click="cerrarSesion">Cerrar Sesión</button>
            </div>
          </div>
          <hr class="my-2">
          <div class="row justify-content-between align-items-center">
            <div class="col-auto">
              <a class="btn" href="/departamentos">Inicio</a>
            </div>
            <div class="col-auto">
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
            <div class="col-auto">
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
            <div class="col-auto">
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
            <div class="col-auto">
            <div class="dropdown">
              <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton4" data-bs-toggle="dropdown">
                Gráficas
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton4">
                <li><a class="dropdown-item" href="/departamentos/graficas/convocatorias">Ver Gráficas Convocatoria</a></li>
                <li><a class="dropdown-item" href='/departamentos/graficas/acompanamiento'>Ver Gráficas Acompañamiento</a></li>
                <li><a class="dropdown-item" href="/departamentos/graficas/movilizaciones">Ver Gráficas Movilizacion</a></li>
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
      await fetch(`${this.$baseRoute}/tokens/delete/${id}`, {
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
    const departamento = await fetch (`${this.$baseRoute}/tokens/${id}/departamento?token=${token}`);
    const json = await departamento.json();
    this.departamento = json.departamento;
    }
  }
  </script>
  
  <style scoped>
  #NavBarDepartamento {
    margin-top: 30px;
    background-color: #f8f9fa;
    padding: 15px 0;
    box-shadow: 0 2px 4px rgba(0,0,0,.1);
  }
  
  .dropdown-toggle {
    min-width: 120px;
  }
  
  .btn {
    margin-bottom: 5px;
  }
  
  @media (max-width: 768px) {
    .row.justify-content-between {
      justify-content: center !important;
    }
    
    .col-auto {
      margin-bottom: 10px;
    }
  }
  </style>
  