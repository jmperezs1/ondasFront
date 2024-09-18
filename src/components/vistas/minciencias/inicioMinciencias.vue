<template>
  <NavBarMinciencias />
  <div
    id="carouselExampleIndicators"
    class="carousel slide custom-carousel"
    data-bs-ride="carousel"
    style="margin-top: 60px;"
  >
    <div class="carousel-inner">
      <div class="carousel-item active">
        <div class="container" style="background-color: #4CE2C6;">
          <div class="row h-100">
            <div class="col-md-4 d-flex align-items-center justify-content-center">
              <h1>Convocatoria</h1>
            </div>
            <div class="col-md-1 d-flex align-items-center justify-content-center">
              <div style="border-left: 1px solid black; height: 80%;"></div>
            </div>
            <div class="col-md-7">
              <div class="row h-100 align-items-center justify-content-start">
                <div class="col-12 col-md-10">
                  <ul class="list-unstyled">
                    <li style="margin-bottom: 10px; font-size:14px;">
                      <button
                        @click="navigateTo('/minciencias/convocatorias/ingreso')"
                        class="btn btn-custom w-100"
                      >
                        Ingresar información sobre convocatoria del departamento
                      </button>
                    </li>
                    <li style="margin-bottom: 10px; font-size:14px;">
                      <button
                        @click="navigateTo('/minciencias/convocatorias/modificar')"
                        class="btn btn-custom w-100"
                      >
                        Modificar información de una convocatoria
                      </button>
                    </li>
                    <li style="margin-bottom: 10px; font-size:14px;">
                      <button
                        @click="navigateTo('/minciencias/convocatorias/eliminar')"
                        class="btn btn-custom w-100"
                      >
                        Eliminar información de una convocatoria
                      </button>
                    </li>
                    <li style="margin-bottom: 10px; font-size:14px;">
                      <button
                        @click="navigateTo('/minciencias/convocatorias/consultas/periodo')"
                        class="btn btn-custom w-100"
                      >
                        Exportar información de un año
                      </button>
                    </li>
                    <li style="margin-bottom: 10px; font-size:14px;">
                      <button
                        @click="navigateTo('/minciencias/convocatorias/consultas/periodos')"
                        class="btn btn-custom w-100"
                      >
                        Exportar información en un rango de años
                      </button>
                    </li>
                    <li style="margin-bottom: 10px; font-size:14px;">
                      <button
                        @click="navigateTo('/minciencias/convocatorias/visualizacion')"
                        class="btn btn-custom w-100"
                      >
                        Visualizar convocatorias
                      </button>
                    </li>
                    <li style="margin-bottom: 10px; font-size:14px;">
                        <button @click="navigateTo('/minciencias/convocatorias/cargaMasiva')" class="btn btn-custom w-100">Carga masiva desde Excel</button>
                      </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="container" style="background-color: #7FEEA9;">
          <div class="row h-100">
            <div class="col-md-4 d-flex align-items-center justify-content-center">
              <h1>Acompañamiento</h1>
            </div>
            <div class="col-md-1 d-flex align-items-center justify-content-center">
              <div style="border-left: 1px solid black; height: 80%;"></div>
            </div>
            <div class="col-md-7">
              <div class="row h-100 align-items-center justify-content-start">
                <div class="col-12 col-md-10">
                  <ul class="list-unstyled">
                    <li style="margin-bottom: 10px; font-size:14px;">
                      <button
                        @click="navigateTo('/minciencias/acompanamiento/ingreso')"
                        class="btn btn-custom w-100"
                      >
                        Ingresar información sobre acompañamientos del departamento
                      </button>
                    </li>
                    <li style="margin-bottom: 10px; font-size:14px;">
                      <button
                        @click="navigateTo('/minciencias/acompanamiento/modificar')"
                        class="btn btn-custom w-100"
                      >
                        Modificar información un acompañamiento
                      </button>
                    </li>
                    <li style="margin-bottom: 10px; font-size:14px;">
                      <button
                        @click="navigateTo('/minciencias/acompanamiento/eliminar')"
                        class="btn btn-custom w-100"
                      >
                        Eliminar información un acompañamiento
                      </button>
                    </li>
                    <li style="margin-bottom: 10px; font-size:14px;">
                      <button
                        @click="navigateTo('/minciencias/acompanamiento/consultas/periodo')"
                        class="btn btn-custom w-100"
                      >
                        Exportar información de un año
                      </button>
                    </li>
                    <li style="margin-bottom: 10px; font-size:14px;">
                      <button
                        @click="navigateTo('/minciencias/acompanamiento/consultas/periodos')"
                        class="btn btn-custom w-100"
                      >
                        Exportar información en un rango de años
                      </button>
                    </li>
                    <li style="margin-bottom: 10px; font-size:14px;">
                      <button
                        @click="navigateTo('/minciencias/acompanamiento/visualizacion')"
                        class="btn btn-custom w-100"
                      >
                        Visualizar acompañamientos
                      </button>
                    </li>
                    <li style="margin-bottom: 10px; font-size:14px;">
                        <button @click="navigateTo('/minciencias/acompanamiento/cargaMasiva')" class="btn btn-custom w-100">Carga masiva desde Excel</button>
                      </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="container" style="background-color: #38D2D8;">
          <div class="row h-100">
            <div class="col-md-4 d-flex align-items-center justify-content-center">
              <h1>Movilización</h1>
            </div>
            <div class="col-md-1 d-flex align-items-center justify-content-center">
              <div style="border-left: 1px solid black; height: 80%;"></div>
            </div>
            <div class="col-md-7">
              <div class="row h-100 align-items-center justify-content-start">
                <div class="col-12 col-md-10">
                  <ul class="list-unstyled">
                    <li class="mb-3">
                      <button
                        @click="navigateTo('/minciencias/movilizacion/ingreso')"
                        class="btn btn-custom w-100"
                      >
                        Ingresar información sobre movilización del departamento
                      </button>
                    </li>
                    <li class="mb-3">
                      <button
                        @click="navigateTo('/minciencias/movilizacion/modificar')"
                        class="btn btn-custom w-100"
                      >
                        Modificar información una movilización
                      </button>
                    </li>
                    <li class="mb-3">
                      <button
                        @click="navigateTo('/minciencias/movilizacion/eliminar')"
                        class="btn btn-custom w-100"
                      >
                        Eliminar información una movilización
                      </button>
                    </li>
                    <li class="mb-3">
                      <button
                        @click="navigateTo('/minciencias/movilizacion/consultas/periodo')"
                        class="btn btn-custom w-100"
                      >
                        Exportar información de un año
                      </button>
                    </li>
                    <li class="mb-3">
                      <button
                        @click="navigateTo('/minciencias/movilizacion/consultas/periodos')"
                        class="btn btn-custom w-100"
                      >
                        Exportar información en un rango de años
                      </button>
                    </li>
                    <li class="mb-3">
                      <button
                        @click="navigateTo('/minciencias/movilizaciones/visualizacion')"
                        class="btn btn-custom w-100"
                      >
                        Visualizar movilizaciones
                      </button>
                    </li>
                    <li class="mb-3">
                      <button
                        @click="navigateTo('/minciencias/movilizacion/cargaMasiva')"
                        class="btn btn-custom w-100"
                      >
                        Visualizar movilizaciones
                      </button>
                    </li>
                    
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="container" style="background-color: #38D2D8;">
          <div class="row h-100">
            <div class="col-md-4 d-flex align-items-center justify-content-center">
              <h1>Gráficas</h1>
            </div>
            <div class="col-md-1 d-flex align-items-center justify-content-center">
              <div style="border-left: 1px solid black; height: 80%;"></div>
            </div>
            <div class="col-md-7">
              <div class="row h-100 align-items-center justify-content-start">
                <div class="col-12 col-md-10">
                  <ul class="list-unstyled">
                    <li class="mb-3">
                      <button
                        @click="navigateTo('/minciencias/graficas/convocatoria')"
                        class="btn btn-custom w-100"
                      >
                        Visualizar Convocatorias
                      </button>
                    </li>
                    <li class="mb-3">
                      <button
                        @click="navigateTo('/minciencias/graficas/acompanamiento')"
                        class="btn btn-custom w-100"
                      >
                        Visualizar Acompañamiento
                      </button>
                    </li>
                    <li class="mb-3">
                      <button
                        @click="navigateTo('/minciencias/graficas/movilizacion')"
                        class="btn btn-custom w-100"
                      >
                        Visualizar Movilización
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <a
      class="carousel-control-prev"
      href="#carouselExampleIndicators"
      role="button"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    </a>
    <a
      class="carousel-control-next"
      href="#carouselExampleIndicators"
      role="button"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
    </a>
  </div>
</template>

<script>
import NavBarMinciencias from '@/components/NavBars/navBarMinciencias.vue'

export default {
  name: 'InicioMinciencias',
  components: {
    NavBarMinciencias,
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route)
    },
  },
}
</script>

<style scoped>
.custom-carousel,
.custom-carousel .carousel-inner,
.custom-carousel .carousel-item {
  height: 420px; /* Set your desired height here */
}

.custom-carousel .container {
  height: 100%; /* Ensure the container takes the full height of the carousel item */
}

.carousel-indicators li::after {
  display: none;
}

.btn-custom {
  background-color: rgba(255, 255, 255, 0.9);
  border: none;
  transition: all 0.3s ease;
  color: #333;
  font-weight: bold;
  padding: 10px 15px;
  border-radius: 5px;
}

.btn-custom:hover {
  background-color: rgba(255, 255, 255, 1);
  transform: translateY(-2px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.carousel-control-prev,
.carousel-control-next {
  width: 5%;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  padding: 15px;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 50%;
  padding: 25px;
  background-size: 50%;
}
</style>