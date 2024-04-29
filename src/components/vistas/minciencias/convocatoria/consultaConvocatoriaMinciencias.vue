<template>
    <NavBarMinciencias />
    <div class="container">
        <div class="row">
            <div class="col-md-3">
                <div class="container" style="height: 350px; background-color: #d9d9d9;">
                    <div class="row">
                        <h4 style="text-align: center; margin-bottom: 20px; margin-top: 20px;">Filtro</h4>
                    </div>
                    <div class="row">
                        <div class="col-md-4" >
                            <label for="anio">Año:</label>
                        </div>
                        <div class="col-md-8" style="margin-bottom: 20px;">
                            <select class="custom-select" id="anio" style="width: 100%; border: 0cap;">
                                <option selected>Seleccionar...</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>
                    <div class="row" style="text-align: center; margin-bottom: 20px;">
                        <h5>Ó</h5>
                    </div>
                    <div class="row" style="margin-bottom: 20px;">
                        <div class="col-md-3">
                            <label>Periodos:</label>
                        </div>
                    </div>
                    <div class="row" style="margin-bottom: 20px;">
                        <div class="col-md-5">
                            <select class="custom-select" id="anio" style="width: 100%; border: 0cap;">
                                <option selected>Seleccionar...</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div class="col-sm-1" style="text-align: center;">
                            <label>-</label>
                        </div>
                        <div class="col-md-5">
                            <select class="custom-select" id="anio" style="width: 100%; border: 0cap;">
                                <option selected>Seleccionar...</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>
                    <div class="row" style="margin-bottom: 10px;">
                       <label>Departamento:</label>   
                    </div>
                    <div class="row">
                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"   style="width: 100%;">
                                Seleccionar...
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton" style="max-height: 200px; overflow-y: auto;">
                                <li v-for="(departamento, index) in listDepartamentos" :key="index">
                                    <a class="dropdown-item" href="#">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" :value="departamento" :id="'Checkme'+index" />
                                            <label class="form-check-label" :for="'Checkme'+index">{{ departamento }}</label>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="row">
                        <button type="button" class="btn btn-primary" style="width: 100%; margin-top: 50px;">Exportar</button>
                    </div>
                </div>
            </div>
            <div class="col-md-1"></div>
            <div class="col-md-8">
                <h1 style="text-align: center;">Indicadores de convocatoria</h1>
                <ConsultaConvocatoria v-if="datos" :datos="datos" />
            </div>
        </div>
    </div>
</template>

<script>
import NavBarMinciencias from '@/components/NavBars/navBarMinciencias.vue';
import ConsultaConvocatoria from '@/components/convocatoria/consultaConvocatoria.vue';
export default {
    name: 'ConsultaConvocatoriaMinciencias',
    components: {
        NavBarMinciencias,
        ConsultaConvocatoria,
    },
    data() {
    return {
      datos: null,
      listDepartamentos: ["Amazonas", 
                            "Antioquia", 
                            "Arauca", 
                            "Atlántico", 
                            "Bogotá",
                            "Bolívar", 
                            "Boyacá", 
                            "Caldas",    
                            "Caquetá",    
                            "Casanare",    
                            "Cauca",    
                            "Cesar",    
                            "Chocó",    
                            "Córdoba",    
                            "Cundinamarca",    
                            "Guainía",    
                            "Guaviare",    
                            "Huila",    
                            "La Guajira",    
                            "Magdalena",    
                            "Meta",    
                            "Nariño",    
                            "Norte de Santander",    
                            "Putumayo",    
                            "Quindío",    
                            "Risaralda",    
                            "San Andrés y Providencia",    
                            "Santander",    
                            "Sucre",    
                            "Tolima",    
                            "Valle del Cauca",    
                            "Vaupés",    
                            "Vichada"],
    }
  },
  async mounted() {
    const response = await fetch('https://localhost:7192/api/convocatorias', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    let json = await response.json();
    this.datos = json;    
  }
};
</script>

<style scoped>
/* Your component-specific styles here */
</style>