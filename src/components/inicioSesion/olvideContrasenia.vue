<template>
    <div style="text-align: center">
      <img alt="Logo" src="../../assets/logo.png" style="margin-top: 40px; height: 200px; width: 450px; margin-bottom: 74px;">
    </div>
    <div class="form-group" style="width: 540px; margin: 0% auto">
      <label for="inputUser" style="text-align: left; display: block; margin-bottom: 5px;">Usuario</label>
      <input class="form-control" id="inputUser" placeholder="Ingrese su nombre de usuario" style="margin-bottom: 27px;">
    </div>
    <div class="form-group" style="width: 540px; margin: 0% auto">
      <label for="inputCorreo" style="text-align: left; display: block; margin-bottom: 5px;">Correo Electronico</label>
      <input type="form-control" class="form-control" id="inputCorreo" placeholder="Ingrese el correo electronico asociado a su cuenta">
    </div>
    <div style="text-align: center;">
      <button type="submit" class="btn" style="height: 40px; width: 331px; margin-top: 50px; background-color: #53C0D9;" @click="onLogin">Recuperar Contraseña</button>
    </div>
  </template>
  
  <script>  
  export default {
    name: 'restablecerContrasenia',
    methods: {
      async onLogin() {
        const username = document.getElementById('inputUser').value.toLowerCase();
        const email = document.getElementById('inputCorreo').value;

        try {
          const response = await fetch(`https://localhost:7192/api/autenticaciones/RestablecerContrasenia/${username}/${email}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
          });
          console.log(response);
          if (response.ok) {
            alert('Se ha enviado un correo con las instrucciones para restablecer su contraseña.');
          } else {
            alert('El usuario o correo electronico no coinciden con ninguna cuenta.');
          }
      }
     catch (error) {
      console.error('An error occurred', error);}
     }
    }
  };
  </script>
  
  <style>
  /* Your component-specific styles go here */
  </style>
  