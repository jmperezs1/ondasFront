<template>
    <div class="container mt-3">
      <div class="row">
        <div class="col-md-12">
          <h3 class="text-center">Filtros</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <h6>Indicadores:</h6>
        </div>
        <div class="col-md-8">
          <ul class="list-unstyled">
            <li v-for="(indicador, index) in listIndicadores" :key="index">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" :value="indicador" v-model="selectedIndicadores" :id="'Checkme'+index" />
                <label class="form-check-label" :for="'Checkme'+index">{{ indicador }}</label>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-md-4">
          <label for="anio">Año:</label>
        </div>
        <div class="col-md-8">
          <select class="custom-select" id="anio" v-model="anio"> 
            <option selected>Seleccionar...</option>
            <option  v-for="year in years" :key="year">{{ year }}</option>
          </select>
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-md-4">
          <label for="desagregacion">Desagregación:</label>
        </div>
        <div class="col-md-8">
          <select class="custom-select" id="desagregacion" v-model="selectedDesagregacion">
            <option selected>Seleccionar...</option>
            <option value="nacional">Nacional</option>
            <option value="departamental">Departamental</option>
            <option v-if="showGeneroOption" value="genero">Género</option>
            <option v-if="showGruposOption" value="grupos_de_edad">Grupos de Edad</option>
          </select>
        </div>
      </div>
      <div class="row mb-3" v-if="showDesagregacion2">
        <div class="col-md-4">
          <label for="agrupar">Agrupar por:</label>
        </div>
        <div class="col-md-8">
          <select class="custom-select" id="desagregacion" v-model="selectedDesagregacion2">
            <option selected>Seleccionar...</option>
            <option value="nacional">Territorio Nacional</option>
            <option value="departamental">Departamentos</option>
          </select>
        </div>
      </div>
      <div class="row" v-if="showDepartamentos">
        <div class="col-md-3">
          <h6>Departamentos:</h6>
        </div>
        <div class="col-md-3">
          <ul class="list-unstyled">
            <li v-for="(departamento, index) in firstColumnDepartamentos" :key="index">
              <div class="form-check">
                <input class="form-check-input" v-model="selectedDepartamentos" type="checkbox" :value="departamento" :id="'Departamento'+index" />
                <label class="form-check-label" :for="'Departamento'+index">{{ departamento }}</label>
              </div>
            </li>
          </ul>
        </div>
        <div class="col-md-3">
          <ul class="list-unstyled">
            <li v-for="(departamento, index) in secondColumnDepartamentos" :key="index">
              <div class="form-check">
                <input class="form-check-input" v-model="selectedDepartamentos" type="checkbox" :value="departamento" :id="'Departamento'+(index + firstColumnDepartamentos.length)" />
                <label class="form-check-label" :for="'Departamento'+(index + firstColumnDepartamentos.length)">{{ departamento }}</label>
              </div>
            </li>
          </ul>
        </div>
        <div class="col-md-3">
          <ul class="list-unstyled">
            <li v-for="(departamento, index) in thirdColumnDepartamentos" :key="index">
              <div class="form-check">
                <input class="form-check-input" v-model="selectedDepartamentos" type="checkbox" :value="departamento" :id="'Departamento'+(index + firstColumnDepartamentos.length + secondColumnDepartamentos.length)" />
                <label class="form-check-label" :for="'Departamento'+(index + firstColumnDepartamentos.length + secondColumnDepartamentos.length)">{{ departamento }}</label>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-md-12">
          <button type="button" @click="clickButton" :disabled="!isFormValid" class="btn btn-primary">Exportar</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>

  export default {
    name: 'ExportarConvocatoria',
    data() {
      return {
        years: [],
        listIndicadores: [
          "Número de convocatorias", 
          "Número de grupos de investigación que aplican",
          "Número de instituciones educativas que aplican", 
          "Número de niños, niñas y jóvenes vinculados al programa",
          "Número de docentes vinculados",
          "Número de grupos de investigación vinculados",
          "Número de instituciones educativas vinculadas",
          "Número de proyectos de investigación apoyados"
        ],
        listDepartamentos: [
          "Amazonas", "Antioquia", "Arauca", "Atlántico", "Bogotá",
          "Bolívar", "Boyacá", "Caldas", "Caquetá", "Casanare", "Cauca",
          "Cesar", "Chocó", "Córdoba", "Cundinamarca", "Guainía", "Guaviare",
          "Huila", "La Guajira", "Magdalena", "Meta", "Nariño", "Norte de Santander",
          "Putumayo", "Quindío", "Risaralda", "San Andrés y Providencia", "Santander",
          "Sucre", "Tolima", "Valle del Cauca", "Vaupés", "Vichada"
        ],
        selectedIndicadores: [],
        anio: null,
        selectedDesagregacion: null,
        selectedDesagregacion2: null,
        selectedDepartamentos: []
      };
    },
    watch: {
  selectedIndicadores: {
            handler: 'disSelect',
            deep: true
        }
    },
    methods:{
        clickButton(){
            console.log(this.selectedIndicadores);
            console.log(this.anio);
            console.log(this.selectedDesagregacion);
            console.log(this.selectedDesagregacion2);
            console.log(this.selectedDepartamentos);  
        },
        
        disSelect() {
        const hasNiñosSelected = this.selectedIndicadores.includes("Número de niños, niñas y jóvenes vinculados al programa");
        const hasDocentesSelected = this.selectedIndicadores.includes("Número de docentes vinculados");
        const hasOtherSelections = this.selectedIndicadores.some(item => item !== "Número de niños, niñas y jóvenes vinculados al programa" && item !== "Número de docentes vinculados");
        if ((!hasNiñosSelected && !hasDocentesSelected) || hasOtherSelections) {
          this.selectedDesagregacion2= null;
          if(this.selectedDesagregacion === "genero" || this.selectedDesagregacion === "grupos_de_edad" && hasNiñosSelected){
            this.selectedDesagregacion= null;
          }
        }
      }
    },
    computed: {
        isFormValid() {
            if(this.selectedIndicadores.length > 0){
                if(this.anio!=null){
                    if(this.selectedDesagregacion!=null){
                        if(this.selectedDesagregacion === "departamental" && this.selectedDepartamentos.length > 0){
                            return true;
                        }
                        else if(this.selectedDesagregacion === "nacional"){
                            return true;
                        }
                        else if(this.showDesagregacion === "grupos_de_edad" || this.selectedDesagregacion === "genero"){
                            if(this.selectedDesagregacion2 === "nacional" || (this.selectedDesagregacion2 === "departamental" && this.selectedDepartamentos.length > 0)){
                                return true;
                            }
                        }
                    }
                }
            }
            return false;
        },
      showGeneroOption() {
        // Check if "Número de niños" or "Número de docentes" is selected
        const hasNiñosSelected = this.selectedIndicadores.includes("Número de niños, niñas y jóvenes vinculados al programa");
        const hasDocentesSelected = this.selectedIndicadores.includes("Número de docentes vinculados");
        const hasOtherSelections = this.selectedIndicadores.some(item => item !== "Número de niños, niñas y jóvenes vinculados al programa" && item !== "Número de docentes vinculados");
      
      // Show "Género" if either "Número de niños" or "Número de docentes" is selected and no other selection is made
      return (hasNiñosSelected || hasDocentesSelected) && !hasOtherSelections;
      },
      showGruposOption(){
        const hasNiñosSelected = this.selectedIndicadores.includes("Número de niños, niñas y jóvenes vinculados al programa");
        const hasOtherSelections = this.selectedIndicadores.some(item => item !== "Número de niños, niñas y jóvenes vinculados al programa");
        return (hasNiñosSelected) && !hasOtherSelections;
      },
      showDesagregacion2(){
        const valido1 = this.showGeneroOption || this.showGruposOption;
        const valido2 = this.selectedDesagregacion === "genero" || this.selectedDesagregacion === "grupos_de_edad";
        return valido1 && valido2;
      },
      showDepartamentos() {
            return (
                this.selectedDesagregacion === "departamental" ||
                (this.showDesagregacion2 && this.selectedDesagregacion2 === "departamental")
            );
      },
      firstColumnDepartamentos() {
        return this.listDepartamentos.slice(0, this.listDepartamentos.length / 3);
      },
      secondColumnDepartamentos() {
        return this.listDepartamentos.slice(this.listDepartamentos.length / 3, 2 * this.listDepartamentos.length / 3);
      },
      thirdColumnDepartamentos() {
        return this.listDepartamentos.slice(2 * this.listDepartamentos.length / 3);
      }
    },
    async mounted() {
      try {
        const response = await fetch('https://localhost:7192/api/convocatorias/minmaxanio');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const json = await response.json();
        const minYear = json.minAnio;
        const maxYear = json.maxAnio;
        for (let year = minYear; year <= maxYear; year++) {
          this.years.push(year);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
  };
  </script>
  
  <style scoped>
  /* Your component-specific styles here */
  </style>
  