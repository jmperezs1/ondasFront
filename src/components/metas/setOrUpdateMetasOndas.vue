<template>
    <div class="container mt-5">
      <!-- Year Selection -->
      <div class="row mb-4 align-items-center">
        <div class="col-md-3">
          <label for="anio"><h5>Seleccione el año:</h5></label>
        </div>
        <div class="col-md-6">
          <select class="form-select" id="anio" v-model="anio" @change="loadMetas">
            <option selected disabled>Seleccionar...</option>
            <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
          </select>
        </div>
      </div>
  
      <!-- Department Selection -->
      <div class="row mb-4">
        <div class="col-md-3">
          <h5>Departamentos:</h5>
        </div>
        <div class="col-md-9">
          <div class="row">
            <!-- First Column of Departments -->
            <div class="col-md-4">
              <ul class="list-unstyled">
                <li v-for="(departamento, index) in firstColumnDepartamentos" :key="index">
                  <div class="form-check">
                    <input class="form-check-input" v-model="selectedDepartamento" type="radio" :value="departamento" :id="'Departamento'+index" @change="loadMetas"/>
                    <label class="form-check-label" :for="'Departamento'+index">{{ departamento }}</label>
                  </div>
                </li>
              </ul>
            </div>
  
            <!-- Second Column of Departments -->
            <div class="col-md-4">
              <ul class="list-unstyled">
                <li v-for="(departamento, index) in secondColumnDepartamentos" :key="index">
                  <div class="form-check">
                    <input class="form-check-input" v-model="selectedDepartamento" type="radio" :value="departamento" :id="'Departamento'+index" @change="loadMetas"/>
                    <label class="form-check-label" :for="'Departamento'+index">{{ departamento }}</label>
                  </div>
                </li>
              </ul>
            </div>
  
            <!-- Third Column of Departments -->
            <div class="col-md-4">
              <ul class="list-unstyled">
                <li v-for="(departamento, index) in thirdColumnDepartamentos" :key="index">
                  <div class="form-check">
                    <input class="form-check-input" v-model="selectedDepartamento" type="radio" :value="departamento" :id="'Departamento'+index" @change="loadMetas"/>
                    <label class="form-check-label" :for="'Departamento'+index">{{ departamento }}</label>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Meta Inputs (render after year and department are selected) -->
      <div v-if="anio && selectedDepartamento" class="row">
        <div class="col-md-6 mb-3">
          <label for="metaGruposEtnicos">Meta Total Grupos Étnicos</label>
          <input type="number" id="metaGruposEtnicos" class="form-control" v-model.number="metaTotalGruposEtnicos" />
        </div>
        <div class="col-md-6 mb-3">
          <label for="metaPdetZomac">Meta Total PDET y ZOMAC</label>
          <input type="number" id="metaPdetZomac" class="form-control" v-model.number="metaTotalPdetZomac" />
        </div>
        <div class="col-md-6 mb-3">
          <label for="metaVinculados">Meta Total Vinculados</label>
          <input type="number" id="metaVinculados" class="form-control" v-model.number="metaTotalVinculados" />
        </div>
        <div class="col-md-6 mb-3">
          <label for="metaMujeres">Meta Total Mujeres</label>
          <input type="number" id="metaMujeres" class="form-control" v-model.number="metaTotalMujeres" />
        </div>
      </div>
  
      <!-- Save Metas Button -->
      <div v-if="anio && selectedDepartamento" class="row">
        <div class="col-md-12 text-center">
          <button type="button" class="btn btn-primary" @click="saveMetas">Guardar Metas</button>
        </div>
      </div>
  
      <!-- Warning if convocatorias do not exist -->
      <div v-if="noConvocatorias" class="alert alert-warning mt-4">
        No podrá visualizar el avance en las metas hasta que llene los datos de convocatoria para el departamento en este año.
      </div>
    </div>
  </template>
  
  <script>
    import { jwtDecode } from 'jwt-decode';
  
    export default {
      data() {
        return {
          years: Array.from({ length: 31 }, (v, i) => i + 2000), // Years from 2000 to 2030
          listDepartamentos: [
            "Todos los departamentos", "Amazonas", "Antioquia", "Arauca", "Atlántico", "Bogotá", "Bolívar", "Boyacá", "Caldas", "Caquetá", "Casanare", "Cauca",
            "Cesar", "Chocó", "Córdoba", "Cundinamarca", "Guainía", "Guaviare", "Huila", "La Guajira", "Magdalena", "Meta",
            "Nariño", "Norte de Santander", "Putumayo", "Quindío", "Risaralda", "San Andrés y Providencia", "Santander",
            "Sucre", "Tolima", "Valle del Cauca", "Vaupés", "Vichada"
          ],
          selectedDepartamento: null,
          anio: null,
          metaTotalGruposEtnicos: null,
          metaTotalPdetZomac: null,
          metaTotalVinculados: null,
          metaTotalMujeres: null,
          noConvocatorias: false, // Flag to indicate missing convocatoria data
          userId: null,
          token: null,
        };
      },
      computed: {
        firstColumnDepartamentos() {
          return this.listDepartamentos.slice(0, Math.ceil(this.listDepartamentos.length / 3));
        },
        secondColumnDepartamentos() {
          return this.listDepartamentos.slice(Math.ceil(this.listDepartamentos.length / 3), Math.ceil((2 * this.listDepartamentos.length) / 3));
        },
        thirdColumnDepartamentos() {
          return this.listDepartamentos.slice(Math.ceil((2 * this.listDepartamentos.length) / 3));
        },
      },
      methods: {
        async loadMetas() {
          if (!this.anio || !this.selectedDepartamento) return;
  
          try {
            // First, check if convocatorias exist for the selected year and department
            const convocatoriaResponse = await fetch(`${this.$baseRoute}/Convocatorias/convocatoriaExists/${this.anio}/${this.selectedDepartamento}/${this.userId}/${this.token}`);
            
            if (convocatoriaResponse.ok) {
                // Directly parse the response as a boolean
                const convocatoriaExists = await convocatoriaResponse.text();
                
                // Convert response from text ("true"/"false") to actual boolean values
                this.noConvocatorias = convocatoriaExists === "false";
            } else {
                console.error("Error checking convocatorias:", convocatoriaResponse.statusText);
            }
  
            // Then, load the metas
            const response = await fetch(`${this.$baseRoute}/metas/getOrCreateMetas/${this.anio}/${this.selectedDepartamento}/${this.userId}/${this.token}`);
            if (response.ok) {
              const metaData = await response.json();
              this.metaTotalGruposEtnicos = metaData.meta_total_grupos_etnicos;
              this.metaTotalPdetZomac = metaData.meta_total_pdet_y_zomac;
              this.metaTotalVinculados = metaData.meta_total_vinculados;
              this.metaTotalMujeres = metaData.meta_total_mujeres;
            } else {
              console.error("Error fetching metas:", response.statusText);
            }
          } catch (error) {
            console.error("Error:", error);
          }
        },
        async saveMetas() {
          try {
  
            const response = await fetch(`${this.$baseRoute}/metas/setMetas/${this.userId}/${this.token}/${this.anio}/${this.selectedDepartamento}/${this.metaTotalGruposEtnicos}/${this.metaTotalPdetZomac}/${this.metaTotalVinculados}/${this.metaTotalMujeres}`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              }
            });
  
            if (response.ok) {
              alert("Metas guardadas exitosamente.");
            } else {
              alert("Error al guardar las metas.");
            }
          } catch (error) {
            console.error("Error saving metas:", error);
          }
        },
      },
      async mounted() {
        this.token = localStorage.getItem("token");
        this.userId = jwtDecode(this.token).id;
      },
    };
  </script>
  
  <style scoped>
    .container {
      background-color: #f8f9fa;
      padding: 40px;
      border-radius: 8px;
    }
  
    h5 {
      font-weight: 600;
    }
  
    .form-select {
      width: 100%;
    }
  
    .row {
      margin-top: 20px;
    }
  
    .form-check-label {
      margin-left: 10px;
    }
  
    .alert {
      font-size: 1rem;
      padding: 15px;
    }
  
    button.btn {
      padding: 10px 30px;
      font-size: 1rem;
    }
  
    input[type="number"] {
      font-size: 1.2rem;
      padding: 10px;
    }
  
    .text-center {
      margin-top: 20px;
    }
  </style>
  