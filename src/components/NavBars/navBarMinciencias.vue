<template>
  <div id="NavBarMinCiencias" class="container-fluid p-0">
    <div class="row align-items-center">
      <div class="col-md-2 text-center py-2">
        <img alt="Logo" src="../../assets/logo.png" class="img-fluid" style="max-height: 80px;">
      </div>
      <div class="col-md-10">
        <div class="row align-items-center mb-2">
          <div class="col-md-6">
            <span class="fs-5">Bienvenido, MinCiencias</span>
          </div>
          <div class="col-md-6 text-end">
            <a class="btn me-2" href="/minciencias/configuracion">Configuración</a>
            <button class="btn" @click="cerrarSesion">Cerrar Sesión</button>
          </div>
        </div>
        <hr class="my-2">
        <div class="row justify-content-between align-items-center">
          <div class="col-auto">
            <a class="btn" href="/minciencias">Inicio</a>
          </div>
          <div class="col-auto">
            <div class="dropdown">
              <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown">
                Convocatoria
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a class="dropdown-item" href="/minciencias/convocatorias/ingreso">Ingresar información convocatoria</a></li>
                <li><a class="dropdown-item" href="/minciencias/convocatorias/modificar">Modificar información de un año convocatoria</a></li>
                <li><a class="dropdown-item" href="/minciencias/convocatorias/eliminar">Eliminar información de un año convocatoria</a></li>
                <li><a class="dropdown-item" href="/minciencias/convocatorias/consultas/periodo">Exportar información de un año convocatoria</a></li>
                <li><a class="dropdown-item" href="/minciencias/convocatorias/consultas/periodos">Exportar información en un rango de años convocatoria</a></li>
                <li><a class="dropdown-item" href="/minciencias/convocatorias/visualizacion">Visualizar convocatorias</a></li>
                <li><a class="dropdown-item" href='/minciencias/convocatorias/cargaMasiva'>Carga masiva desde Excel</a></li>
              </ul>
            </div>
          </div>
          <div class="col-auto">
            <div class="dropdown">
              <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown">
                Acompañamiento
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                <li><a class="dropdown-item" href="/minciencias/acompanamiento/ingreso">Ingresar información acompañamiento</a></li>
                <li><a class="dropdown-item" href="/minciencias/acompanamiento/modificar">Modificar información de un año</a></li>
                <li><a class="dropdown-item" href="/minciencias/acompanamiento/eliminar">Eliminar información de un año</a></li>
                <li><a class="dropdown-item" href="/minciencias/acompanamiento/consultas/periodo">Exportar información de un año</a></li>
                <li><a class="dropdown-item" href="/minciencias/acompanamiento/consultas/periodos">Exportar información en un rango de años</a></li>
                <li><a class="dropdown-item" href="/minciencias/acompanamiento/visualizacion">Visualizar acompañamientos</a></li>
                <li><a class="dropdown-item" href='/minciencias/acompanamiento/cargaMasiva'>Carga masiva desde Excel</a></li>
              </ul>
            </div>
          </div>
          <div class="col-auto">
            <div class="dropdown">
              <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton3" data-bs-toggle="dropdown">
                Movilización
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton3">
                <li><a class="dropdown-item" href="/minciencias/movilizacion/ingreso">Ingresar información movilización</a></li>
                <li><a class="dropdown-item" href="/minciencias/movilizacion/modificar">Modificar información de un año</a></li>
                <li><a class="dropdown-item" href="/minciencias/movilizacion/eliminar">Eliminar información de un año</a></li>
                <li><a class="dropdown-item" href="/minciencias/movilizacion/consultas/periodo">Exportar información de un año</a></li>
                <li><a class="dropdown-item" href="/minciencias/movilizacion/consultas/periodos">Exportar información en un rango de años</a></li>
                <li><a class="dropdown-item" href="/minciencias/movilizaciones/visualizacion">Visualizar movilizaciones</a></li>
                <li><a class="dropdown-item" href='/minciencias/movilizacion/cargaMasiva'>Visualizar movilizaciones</a></li>
              </ul>
            </div>
          </div>
          <div class="col-auto">
            <div class="dropdown">
              <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton4" data-bs-toggle="dropdown">
                Gráficas
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton4">
                <li><a class="dropdown-item" href="/minciencias/graficas/convocatoria">Ver Gráficas Convocatoria</a></li>
                <li><a class="dropdown-item" href="/minciencias/graficas/acompanamiento">Ver Gráficas Acompañamiento</a></li>
                <li><a class="dropdown-item" href="/minciencias/graficas/movilizacion">Ver Gráficas Movilizacion</a></li>
              </ul>
            </div>
          </div>
          <div class="col-auto">
            <div class="dropdown">
              <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton4" data-bs-toggle="dropdown">
                Metas
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton4">
                <li><a class="dropdown-item" href="/minciencias/metas/visualizar">Ver Avance de Metas</a></li>
                <li><a class="dropdown-item" href="/minciencias/metas/actualizar">Crear y Actualizar Metas</a></li>
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
      await fetch(`${this.$baseRoute}/tokens/delete/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
  }
}
</script>

<style scoped>
#NavBarMinCiencias {
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