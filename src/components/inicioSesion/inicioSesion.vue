<template>
    <div style="text-align: center">
      <img alt="Logo" src="../../assets/logo.png" style="margin-top: 40px; height: 200px; width: 450px; margin-bottom: 74px;">
    </div>
    <div class="form-group" style="width: 540px; margin: 0% auto">
      <label for="inputUser" style="text-align: left; display: block; margin-bottom: 5px;">Usuario</label>
      <input class="form-control" id="inputUser" placeholder="Ingrese el usuario" style="margin-bottom: 27px;">
    </div>
    <div class="form-group" style="width: 540px; margin: 0% auto">
      <label for="inputPassword" style="text-align: left; display: block; margin-bottom: 5px;">Contraseña</label>
      <input type="password" class="form-control" id="inputPassword" placeholder="Ingrese la contraseña">
    </div>
    <div style="text-align: center; margin-top: 10px;">
          <a href="/reset-password" style="color: #53C0D9;">Olvidé Contraseña</a>
      </div>
    <div style="text-align: center;">
      <button type="submit" class="btn" style="height: 40px; width: 331px; margin-top: 50px; background-color: #53C0D9;" @click="onLogin">Ingresar</button>
    </div>
  </template>
  
  <script>  
  export default {
    name: 'InicioSesion',
    methods: {
      async onLogin() {
        const user = document.getElementById('inputUser').value.toLowerCase();
        const password = document.getElementById('inputPassword').value;
  
        try {
          const response = await fetch(`${this.$baseRoute}/Autenticaciones/login`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ user, password })
          });
  
          const data = await response.json();
  
          if (response.ok) {
            localStorage.setItem('token', data.token);
            if (data.rol === "Minciencias") {
              this.$router.push('/minciencias');
            } else if (data.rol === "Departamento") {
              this.$router.push('/departamentos');
            }
            else if(data.rol === "Admin"){
              this.$router.push('/admin');
            }
          } else {
            alert('Usuario o contraseña incorrectos');
          }
        } catch (error) {
          alert('Usuario o contraseña incorrectos');
        }
      }
    }
  };
  </script>
  
  <style>
  /* Your component-specific styles go here */
  </style>
  