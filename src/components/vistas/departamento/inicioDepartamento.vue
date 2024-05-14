<template>
    <NavBarDepartamento/>
    <div class="container" style="background-color: #D9D9D9; height:150px">
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
          <li style="margin-bottom: 10px;"><a href="/departamentos/convocatorias/ingreso">Ingresar información sobre convocatoria del departamento</a></li>
          <li style="margin-bottom: 10px;"><a href="/departamentos/convocatorias/consultas/periodo">Exportar información de un año</a></li>
          <li style="margin-bottom: 10px;"><a href="/departamentos/convocatorias/consultas/periodos">Exportar información en un rango de años</a></li>
        </ul>
      </div>
      </div>
    </div>
    </div>
  </div>
  <div class="container" style="background-color: #D9D9D9; height:150px; margin-top: 10px;">
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
          <li style="margin-bottom: 10px;"><a href="#">Consultar información sobre acompañamiento del departamento</a></li>
          <li style="margin-bottom: 10px;"><a href="#">Ingresar información sobre acompañamiento del departamento</a></li>
        </ul>
      </div>
      </div>
    </div>
    </div>
  </div>
  <div class="container" style="background-color: #D9D9D9; height:150px; margin-top: 10px;">
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
          <li style="margin-bottom: 10px;"><a href="#">Consultar información sobre movilización del departamento</a></li>
          <li style="margin-bottom: 10px;"><a href="#">Ingresar información sobre movilización del departamento</a></li>
        </ul>
      </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import NavBarDepartamento from '@/components/NavBars/navBarDepartamento.vue'
export default {
    name: 'InicioDepartamento',
    components:{
        NavBarDepartamento,
    },
    
};
</script>

<style scoped>
/* Your CSS code goes here */
</style>