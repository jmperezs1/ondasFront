<template>
  <div>
    <NavBarDepartamento />
    <div id="carouselExampleIndicators" class="carousel slide custom-carousel" data-bs-ride="carousel" style="margin-top: 60px;">
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
                      <li class="mb-3">
                        <button @click="navigateTo('/departamentos/convocatorias/ingreso')" class="btn btn-custom w-100">Ingresar información sobre convocatoria del departamento</button>
                      </li>
                      <li class="mb-3">
                        <button @click="navigateTo('/departamentos/convocatorias/modificar')" class="btn btn-custom w-100">Modificar información de una convocatoria</button>
                      </li>
                      <li class="mb-3">
                        <button @click="navigateTo('/departamentos/convocatorias/eliminar')" class="btn btn-custom w-100">Eliminar información de una convocatoria</button>
                      </li>
                      <li class="mb-3">
                        <button @click="navigateTo('/departamentos/convocatorias/consultas/periodo')" class="btn btn-custom w-100">Exportar información de un año</button>
                      </li>
                      <li class="mb-3">
                        <button @click="navigateTo('/departamentos/convocatorias/consultas/periodos')" class="btn btn-custom w-100">Exportar información en un rango de años</button>
                      </li>
                      <li class="mb-3">
                        <button @click="navigateTo('/departamentos/convocatorias/visualizacion')" class="btn btn-custom w-100">Visualizar convocatorias</button>
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
                      <li class="mb-3">
                        <button @click="navigateTo('/departamentos/acompanamientos/ingreso')" class="btn btn-custom w-100">Ingresar información sobre acompañamientos del departamento</button>
                      </li>
                      <li class="mb-3">
                        <button @click="navigateTo('/departamentos/acompanamientos/modificar')" class="btn btn-custom w-100">Modificar información un acompañmiento</button>
                      </li>
                      <li class="mb-3">
                        <button @click="navigateTo('/departamentos/acompanamientos/eliminar')" class="btn btn-custom w-100">Eliminar información un acompañmiento</button>
                      </li>
                      <li class="mb-3">
                        <button @click="navigateTo('/departamentos/acompanamientos/consultas/periodo')" class="btn btn-custom w-100">Exportar información de un año</button>
                      </li>
                      <li class="mb-3">
                        <button @click="navigateTo('/departamentos/acompanamientos/consultas/periodos')" class="btn btn-custom w-100">Exportar información en un rango de años</button>
                      </li>
                      <li class="mb-3">
                        <button @click="navigateTo('/departamentos/acompanamientos/visualizacion')" class="btn btn-custom w-100">Visualizar acompañamientos</button>
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
                        <button @click="navigateTo('/departamentos/movilizaciones/ingreso')" class="btn btn-custom w-100">Ingresar información sobre movilización del departamento</button>
                      </li>
                      <li class="mb-3">
                        <button @click="navigateTo('/departamentos/movilizaciones/modificar')" class="btn btn-custom w-100">Modificar información una movilización</button>
                      </li>
                      <li class="mb-3">
                        <button @click="navigateTo('/departamentos/movilizaciones/eliminar')" class="btn btn-custom w-100">Eliminar información una movilización</button>
                      </li>
                      <li class="mb-3">
                        <button @click="navigateTo('/departamentos/movilizaciones/consultas/periodo')" class="btn btn-custom w-100">Exportar información de un año</button>
                      </li>
                      <li class="mb-3">
                        <button @click="navigateTo('/departamentos/movilizaciones/consultas/periodos')" class="btn btn-custom w-100">Exportar información en un rango de años</button>
                      </li>
                      <li class="mb-3">
                        <button @click="navigateTo('/departamentos/movilizaciones/visualizacion')" class="btn btn-custom w-100">Visualizar movilizaciones</button>
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
                    <li class="mb-3">
                      <button
                        @click="navigateTo('')"
                        class="btn btn-custom w-100"
                      >
                        Visualizar Progreso Metas
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div><div class="carousel-item">
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
                        @click="navigateTo('/departamentos/graficas/convocatorias')"
                        class="btn btn-custom w-100"
                      >
                        Visualizar Convocatorias
                      </button>
                    </li>
                    <li class="mb-3">
                      <button
                        @click="navigateTo('/departamentos/graficas/acompanamiento')"
                        class="btn btn-custom w-100"
                      >
                        Visualizar Acompañamiento
                      </button>
                    </li>
                    <li class="mb-3">
                      <button
                        @click="navigateTo('/departamentos/graficas/movilizaciones')"
                        class="btn btn-custom w-100"
                      >
                        Visualizar Movilización
                      </button>
                    </li>
                    <li class="mb-3">
                      <button
                        @click="navigateTo('')"
                        class="btn btn-custom w-100"
                      >
                        Visualizar Progreso Metas
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
  </div>
</template>

<script>
import NavBarDepartamento from '@/components/NavBars/navBarDepartamento.vue';

export default {
  name: 'InicioDepartamento',
  components: {
    NavBarDepartamento,
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route)
    },
  },
};
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
