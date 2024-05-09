<template>
    <div class="container mt-3">
        <div class="row">
            <div class="col-md-12">
                <h3 class="text-center">Aplicar filtros</h3>
            </div>
        </div>
        <div class="row" style="margin-top: 20px;">
        <div class="col-md-3">
          <h6>Seleccione los indicadores:</h6>
        </div>
        <div class="col-md-9">
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
      <div class="row" style="margin-top: 20px;">
        <div class="col-md-2">
          <label for="anio">Año:</label>
        </div>
        <div class="col-md-9">
          <select class = "custom-select" id="anio" v-model="anio">
              <option selected>Seleccionar...</option>
              <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
          </select>
        </div>
      </div>
      <div class="row" style="margin-top: 20px;">
        <div class="col-md-2">
          <label for="desagregacion">Desagregación:</label>
        </div>
        <div class="col-md-8">
          <select class="custom-select" id="desagregacion" v-model="selectedDesagregacion">
            <option selected>Seleccionar...</option>
            <option value="nacional">Nacional</option>
            <option value="departamental">Departamental</option>
            <option v-if="showGeneroOption" value="genero">Género</option>
            <option v-if="showGeneroOption" value="orientacion">Orientación sexual</option>
            <option v-if="showGeneroOption" value="conflicto_armado">Población victima del conflicto armado</option>
            <option v-if="showGeneroOption" value="reincorporacion">Población en reincorporación</option>
            <option v-if="showGeneroOption" value="etnia">Pueblos y comunidades étnicas</option>
            <option v-if="showGeneroOption" value="discapacidad">Población en discapacidad</option>
            <option v-if="showGeneroOption" value="territorial">Territorial</option>
          </select> 
        </div>
      </div>
      <div class="row" v-if="showDesagregacion2" style="margin-top: 20px;">
        <div class="col-md-2">
          <label for="agrupar">Agrupar por:</label>
        </div>
        <div class="col-md-9 p-0" style ="margin-left: 10px">
          <select class="custom-select" id="desagregacion" v-model="selectedDesagregacion2">
            <option selected>Seleccionar...</option>
            <option v-if="!showTerritorial" value="nacional">Nacional</option>
            <option v-if="!showTerritorial" value="departamental">Departamentos</option>
            <option v-if="showTerritorial" value="pdet">PDET</option>
            <option v-if="showTerritorial" value="zomac">ZOMAC</option>
          </select>
        </div>
      </div>
      <div class="row" v-if="showDepartamentos" style="margin-top: 40px;">
        <div class="col-md-3">
          <h6>Departamentos:</h6>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="selectAllDepartamentos" @change="selectAllDepartamentos" />
            <label class="form-check-label" for="selectAllDepartamentos">Todos los departamentos</label>
          </div>
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
        <div class="col-md-12 text-center" style="margin-bottom: 20px;">
          <button type="button" @click="clickButton" :disabled="!isFormValid" class="btn btn-primary">Exportar</button>
        </div>
      </div>
    </div>
   
</template>

<script>
export default {
    components: {
        
    },
    name: 'ExportarAcompanamiento',
    data() {
        return {
        years:[],
        listIndicadores: [
          "Número de asesores vinculados al programa", 
          "Número de asesorías realizadas en el año",
          "Número de grupos de investigación que recibieron asesorías en el año", 
          "Número promedio de asesorías que recibe cada grupo de investigación",
          "Número de grupos de investigación vinculados al programa por asesor",
          "Número de talleres de formación y/o capacitación realizados en cada coordinación",
          "Número de docentes vinculados al programa que participan en talleres de capacitación y/o formación",
          "Número promedio de horas dedicadas por los docentes vinculados al programa a actividades de Ondas",
          "Número promedio de horas dedicadas por los niños, niñas y adolescentes vinculados a Ondas a las actividades de investigación",
          "Duración promedio de los proyectos de investigación seleccionados",
          "Porcentaje de municipios en el departamento con instituciones educativas vinculadas al programa Ondas",
          "Monto total destinado a la financiación de los proyectos de Ondas",
          "Monto promedio destinado por proyecto de investigación",
          "Monto promedio destinado por niño, niña o adolescente vinculado al programa",
          "Porcentaje de municipios en el departamento con instituciones educativas vinculadas al programa Ondas"
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
        selectedDepartamentos: [],
        };
    },
    watch:{
      selectedIndicadores:{
        handler:'disSelect',
        deep:true
      }
    },
    computed: {
        showGeneroOption(){
          const hasAsesoresSelected = this.selectedIndicadores.includes("Número de asesores vinculados al programa");
          const hasOtherSelections = this.selectedIndicadores.length > 1;
          return hasAsesoresSelected && !hasOtherSelections;
        },
        showDesagregacion2(){
          const valido =  this.selectedDesagregacion === "genero" || this.selectedDesagregacion === "orientacion" || this.selectedDesagregacion === "conflicto_armado" || this.selectedDesagregacion === "reincorporacion" || this.selectedDesagregacion === "etnia" || this.selectedDesagregacion === "discapacidad"|| this.selectedDesagregacion === "territorial";
          return valido && this.showGeneroOption;
        },
        showTerritorial(){
          return this.selectedDesagregacion === "territorial" && this.showGeneroOption;
        },
        showDepartamentos(){
          return this.selectedDesagregacion === "departamental" || (this.selectedDesagregacion2 === "departamental" && this.showDesagregacion2);
        },
        firstColumnDepartamentos() {
        return this.listDepartamentos.slice(0, this.listDepartamentos.length / 3);
      },
      secondColumnDepartamentos() {
        return this.listDepartamentos.slice(this.listDepartamentos.length / 3, 2 * this.listDepartamentos.length / 3);
      },
      thirdColumnDepartamentos() {
        return this.listDepartamentos.slice(2 * this.listDepartamentos.length / 3);
      },
      isFormValid(){
        if(this.selectedIndicadores.length>0){
          if(this.anio !== null){
            if(this.selectedDesagregacion !== null){
              if(this.selectedDesagregacion === "departamental" && this.selectedDepartamentos.length > 0){
                return true;
              }
              else if(this.selectedDesagregacion === "nacional"){
                return true;
              }
              else if(this.selectedDesagregacion === "genero" || this.selectedDesagregacion === "orientacion" || this.selectedDesagregacion === "conflicto_armado" || this.selectedDesagregacion === "reincorporacion" || this.selectedDesagregacion === "etnia" || this.selectedDesagregacion === "discapacidad"){
                if(this.selectedDesagregacion2 === "nacional" || (this.selectedDesagregacion2 === "departamental" && this.selectedDepartamentos.length > 0)){
                  return true;
                }
              }
              else if(this.selectedDesagregacion === 'territorial'){
                if(this.selectedDesagregacion2 === "pdet" || this.selectedDesagregacion2 === 'zomac'){
                  return true;
                }
              }
          }
        }
      }
      return false;
    }
  },
    methods: {
      selectAllDepartamentos() {
          if (this.selectedDepartamentos.length === this.listDepartamentos.length) {
              this.selectedDepartamentos = [];
            } else {
              this.selectedDepartamentos = [...this.listDepartamentos];
            }
        },
        disSelect(){
          const hasAsesoresSelected = this.selectedIndicadores.includes("Número de asesores vinculados al programa");
          const hasOtherSelections = this.selectedIndicadores.some(indicador => indicador !== "Número de asesores vinculados al programa");
          if(!hasAsesoresSelected && hasOtherSelections){
            this.selectedDesagregacion2 = null;
            if((this.selectedDesagregacion === "genero" || this.selectedDesagregacion === "orientacion" || this.selectedDesagregacion === "conflicto_armado" || this.selectedDesagregacion === "reincorporacion" || this.selectedDesagregacion === "etnia" || this.selectedDesagregacion === "discapacidad"|| this.selectedDesagregacion === 'territorial') && !hasAsesoresSelected)
            {
              this.selectedDesagregacion = null;
            }
          }
        },
        clickButton(){
          
        }
    },
    async mounted() {
        try{
          const response = await fetch ("https://localhost:7192/api/acompaniamientos/minmaxanio");
          if(!response.ok){
            throw new Error("Error en la petición");
          }
          const json = await response.json();
          const minYear = json.minAnio;
          const maxYear = json.maxAnio;
          for (let i = minYear; i <= maxYear; i++) {
            this.years.push(i);
          }
        }catch(error){
          console.error('Error fetching data:', error);
        }
    },
};
</script>

<style scoped>
/* Your component-specific styles here */
</style>