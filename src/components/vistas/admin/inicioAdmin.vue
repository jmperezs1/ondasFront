<template>
  <NavBarAdmin/>
  <div class="container" style="background-color: #D9D9D9; height:250px">
    <div class="row h-100">
    <div class="col-md-4 d-flex align-items-center justify-content-center">
      <h1>Usuarios</h1>
    </div>
    <div class="col-md-1 d-flex align-items-center justify-content-center">
        <div style="border-left: 1px solid black; height: 80%;"></div>
      </div>
    <div class="col-md-7">
      <div class="row h-100 align-items-center justify-content-start">
      <div class="col-8 col-md-6">
        <ul style="list-style-type: none;">
          <li style="margin-bottom: 10px;"><a href="/admin/crearUsuario">Crear usuario</a></li>
          <li style="margin-bottom: 10px;"><a href="/admin/eliminarUsuario">Eliminar usuario</a></li>
        </ul>
      </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import NavBarAdmin from '@/components/NavBars/navBarAdmin.vue'
export default {
    name: 'InicioAdmin',
    components: {
    NavBarAdmin,
  }
};
</script>

<style scoped>
/* Your component-specific styles go here */
</style>