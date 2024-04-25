<template>
    <div>
        <img alt="Logo" src="../../assets/logo.png" style="margin-top: 417px; margin: 0% auto; height: 200px; width: 450px; margin-bottom: 74px;">
    </div>
    <div class="form-group" style="width: 540px; margin: 0% auto">
        <label for="inputUser" style="text-align: left; display: block; margin-bottom: 5px;">Usuario</label>
        <input class="form-control" id="inputUser" placeholder="Ingrese el usuario" style="margin-bottom: 27px;">
    </div>
    <div class="form-group" style="width: 540px; margin: 0% auto">
        <label for="inputPassword" style="text-align: left; display: block; margin-bottom: 5px;">Contraseña</label>
        <input type="password" class="form-control" id="inputPassword" placeholder="Ingrese la contraseña">
    </div>
    <button type="submit" class="btn" style="height: 40px; width: 331px; margin-top: 74px; background-color: #53C0D9;">Ingresar</button>
</template>

<script>
export default {
    name: 'InicioSesion'
};
</script>

<style>
/* Your component-specific styles go here */
</style>