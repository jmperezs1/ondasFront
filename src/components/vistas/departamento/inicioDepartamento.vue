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
                    <ul style="list-style-type: none;">
                      <li style="margin-bottom: 10px;">
                        <a href="/departamentos/convocatorias/ingreso" class="btn">Ingresar información sobre convocatoria del departamento</a>
                      </li>
                      <li style="margin-bottom: 10px;">
                        <a href="/departamentos/convocatorias/modificar" class="btn">Modificar información de una convocatoria</a>
                      </li>
                      <li style="margin-bottom: 10px;">
                        <a href="/departamentos/convocatorias/eliminar" class="btn">Eliminar información de una convocatoria</a>
                      </li>
                      <li style="margin-bottom: 10px;">
                        <a href="/departamentos/convocatorias/consultas/periodo" class="btn">Exportar información de un año</a>
                      </li>
                      <li style="margin-bottom: 10px;">
                        <a href="/departamentos/convocatorias/consultas/periodos" class="btn">Exportar información en un rango de años</a>
                      </li>
                      <li style="margin-bottom: 10px;">
                        <a href='/departamentos/convocatorias/visualizacion' class="btn">Visualizar convocatorias</a>
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
                    <ul style="list-style-type: none;">
                      <li style="margin-bottom: 10px;">
                        <a href="/departamentos/acompanamientos/ingreso"  class="btn">Ingresar información sobre acompañamientos del departamento</a>
                      </li>
                      <li style="margin-bottom: 10px;">
                        <a href="/departamentos/acompanamientos/modificar" class="btn">Modificar información un acompañmiento</a>
                      </li>
                      <li style="margin-bottom: 10px;">
                        <a href="/departamentos/acompanamientos/eliminar" class="btn">Eliminar información un acompañmiento</a>
                      </li>
                      <li style="margin-bottom: 10px;">
                        <a href="/departamentos/acompanamientos/consultas/periodo" class="btn">Exportar información de un año</a>
                      </li>
                      <li style="margin-bottom: 10px;">
                        <a href="/departamentos/acompanamientos/consultas/periodos" class="btn">Exportar información en un rango de años</a>
                      </li>
                      <li style="margin-bottom: 10px;">
                        <a href='/departamentos/acompanamientos/visualizacion' class="btn">Visualizar acompañamientos</a>
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
                    <ul style="list-style-type: none;">
                      <li style="margin-bottom: 10px;">
                        <a href="/departamentos/movilizaciones/ingreso"  class="btn">Ingresar información sobre movilización del departamento</a>
                      </li>
                      <li style="margin-bottom: 10px;">
                        <a href="/departamentos/movilizaciones/modificar" class="btn">Modificar información una movilización</a>
                      </li>
                      <li style="margin-bottom: 10px;">
                        <a href="/departamentos/movilizaciones/eliminar" class="btn">Eliminar información una movilización</a>
                      </li>
                      <li style="margin-bottom: 10px;">
                        <a href='/departamentos/movilizaciones/consultas/periodo' class="btn">Exportar información de un año</a>
                      </li>
                      <li style="margin-bottom: 10px;">
                        <a href='/departamentos/movilizaciones/consultas/periodos' class="btn">Exportar información en un rango de años</a>
                      </li>
                      <li style="margin-bottom: 10px;">
                        <a href='/departamentos/movilizaciones/visualizacion' class="btn">Visualizar movilizaciones</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev" style="padding-left: 40px; color: #333;">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next" style="padding-right: 40px; color: #333;">
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

</style>
