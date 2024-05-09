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
      <div class="row mb-3" style="margin-top: 20px;">
        <div class="col-md-2">
          <label for="anio">Año:</label>
        </div>
        <div class="col-md-9">
          <select class="custom-select" id="anio" v-model="anio"> 
            <option selected>Seleccionar...</option>
            <option  v-for="year in years" :key="year">{{ year }}</option>
          </select>
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-md-2">
          <label for="desagregacion">Desagregación:</label>
        </div>
        <div class="col-md-8" >
          <select class="custom-select" id="desagregacion" v-model="selectedDesagregacion">
            <option selected>Seleccionar...</option>
            <option value="nacional">Nacional</option>
            <option value="departamental">Departamental</option>
            <option v-if="showGeneroOption" value="genero">Género</option>
            <option v-if="showOrientacionOption" value="orientacion">Orientación sexual</option>
            <option v-if="showGeneroOption" value="conflicto_armado">Población victima del conflicto armado</option>
            <option v-if="showGeneroOption" value="reincorporacion">Población en reincorporación</option>
            <option v-if="showGeneroOption" value="etnia">Pueblos y comunidades étnicas</option>
            <option v-if="showGeneroOption" value="discapacidad">Población en discapacidad</option>
            <option v-if="showGruposOption" value="grupos_de_edad">Grupos de Edad</option>
            <option v-if="showGeneroOption" value="territorial">Territorial</option>
          </select>
        </div>
      </div>
      <div class="row" v-if="showDesagregacion2">
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
        seleccionesIndicadores(){
          var cadena = '';
          if(this.selectedIndicadores.includes("Número de convocatorias")){
            cadena += "Num_Convocatorias";
          }
          if(this.selectedIndicadores.includes("Número de grupos de investigación que aplican")){
            if(cadena === ''){
              cadena += "Num_Grupos_Investigacion_Aplican"
            } else{
              cadena += ",Num_Grupos_Investigacion_Aplican" 
            }
          }
          if(this.selectedIndicadores.includes("Número de instituciones educativas que aplican")){
            if(cadena === ''){
              cadena += "Num_Instituciones_Educativas_Aplican"
            } else{
              cadena += ",Num_Instituciones_Educativas_Aplican" 
            }
          }
          if(this.selectedIndicadores.includes("Número de niños, niñas y jóvenes vinculados al programa")){
            if(cadena === ''){
              cadena += "Num_Vinculados"
            } else{
              cadena += ",Num_Vinculados" 
            }
          }
          if(this.selectedIndicadores.includes("Número de docentes vinculados")){
            if(cadena === ''){
              cadena += "Num_Docentes"
            } else{
              cadena += ",Num_Docentes" 
            }
          }
          if(this.selectedIndicadores.includes("Número de grupos de investigación vinculados")){
            if(cadena === ''){
              cadena += "Num_Grupos_Investigacion"
            } else{
              cadena += ",Num_Grupos_Investigacion" 
            }
          }
          if(this.selectedIndicadores.includes("Número de instituciones educativas vinculadas")){
            if(cadena === ''){
              cadena += "Num_Instituciones_Educativas_Vinculadas"
            } else{
              cadena += ",Num_Instituciones_Educativas_Vinculadas" 
            }
          }
          if(this.selectedIndicadores.includes("Número de proyectos de investigación apoyados")){
            if(cadena === ''){
              cadena += "Num_Proyectos"
            } else{
              cadena += ",Num_Proyectos" 
            }
          }
          return cadena
        },

        seleccionDepartamental(){
          let cadena='';
          for(let i=0; i<this.selectedDepartamentos.length; i++){
            if(cadena===""){
              cadena += this.selectedDepartamentos[i];
            }
            else{
              cadena += `,${this.selectedDepartamentos[i]}`;
            }
          }
          return cadena;

        },

        seleccionAgrupamiento(){
          var cadena = '';
          if(this.selectedIndicadores.includes('Número de niños, niñas y jóvenes vinculados al programa')){
            if(this.selectedDesagregacion === "genero" ){
              cadena = 'Num_Ninos_M,Num_Ninos_F,Num_Ninos_I,Num_Vinculados';
            }
            else if(this.selectedDesagregacion === 'conflicto_armado'){
              cadena = 'Num_Ninios_Conflicto_Armado,Num_Vinculados';
            }
            else if(this.selectedDesagregacion === 'reincorporacion'){
              cadena = 'Num_Ninios_Reincorporacion,Num_Vinculados';
            }
            else if(this.selectedDesagregacion === "etnia"){
              cadena = 'Num_Ninios_Indigena,Num_Ninios_Gitano,Num_Ninios_Raizal,Num_Ninios_Palanquero,Num_Ninios_Afro,Num_Ninios_Etnia,Num_Vinculados';
            }
            else if(this.selectedDesagregacion === "discapacidad"){
              cadena = 'Num_Ninios_Discapacidad,Num_Vinculados';
            }
            else if(this.selectedDesagregacion === "grupos_de_edad"){
              cadena = 'Num_Entre_6_8,Num_Entre_9_11,Num_Entre_12_14,Num_Entre_15_17,Num_Vinculados';
            }
          }
          if(this.selectedIndicadores.includes('Número de docentes vinculados')){
            if(this.selectedDesagregacion === "genero" ){
              if(cadena === ''){
                cadena += 'Num_Docentes_Masculino_Vinculados,Num_Docentes_Femenino_Vinculados,Num_Docentes_Intersexual_Vinculados,Num_Docentes';
              }
              else{
                cadena += ',Num_Docentes_Masculino_Vinculados,Num_Docentes_Femenino_Vinculados,Num_Docentes_Intersexual_Vinculados,Num_Docentes';
              }
              
            }
            else if(this.selectedDesagregacion === "orientacion" ){
              if(cadena === ''){
                cadena += 'Num_Docentes_Orientacion_Homo,Num_Docentes_Orientacion_Hetero,Num_Docentes_Orientacion_Bi,Num_Docentes_Orientacion_Otro,Num_Docentes';
              }
              else{
                cadena += ',Num_Docentes_Orientacion_Homo,Num_Docentes_Orientacion_Hetero,Num_Docentes_Orientacion_Bi,Num_Docentes_Orientacion_Otro,Num_Docentes';
              }
            }
            else if(this.selectedDesagregacion === "conflicto_armado" ){
              if(cadena === ''){
                cadena += 'Num_Docentes_Conflicto_Armado,Num_Docentes';
              }
              else{
                cadena += ',Num_Docentes_Conflicto_Armado,Num_Docentes';
              }
            }
            else if(this.selectedDesagregacion === "reincorporacion" ){
              if(cadena === ''){
                cadena += 'Num_Docentes_Reincorporacion,Num_Docentes';
              }
              else{
                cadena += ',Num_Docentes_Reincorporacion,Num_Docentes';
              }
            }
            else if(this.selectedDesagregacion === "etnia" ){
              if(cadena === ''){
                cadena += 'Num_Docentes_Indigena,Num_Docentes_Gitano,Num_Docentes_Raizal,Num_Docentes_Palanquero,Num_Docentes_Afro,Num_Docentes_Etnia,Num_Docentes';
              }
              else{
                cadena += ',Num_Docentes_Indigena,Num_Docentes_Gitano,Num_Docentes_Raizal,Num_Docentes_Palanquero,Num_Docentes_Afro,Num_Docentes_Etnia,Num_Docentes';
              }
            }
            else if(this.selectedDesagregacion === "discapacidad" ){
              if(cadena === ''){
                cadena = 'Num_Docentes_Discapacidad,Num_Docentes';
              }
              else{
                cadena = ',Num_Docentes_Discapacidad,Num_Docentes';
              }
            }
          }
          return cadena;
        },

        seleccionPdet(){
          var cadena='';
          if(this.selectedIndicadores.includes("Número de niños, niñas y jóvenes vinculados al programa")){
            cadena += 'Num_Ninios_Pdet,Num_Vinculados';
          }
          if(this.selectedIndicadores.includes('Número de docentes vinculados')){
            if(cadena == ''){
              cadena += 'Num_Docentes_Pdet,Num_Docentes';
            }else{
              cadena += ',Num_Docentes_Pdet,Num_Docentes';
            }
          }
          return cadena;
        },

        seleccionZomac(){
          var cadena='';
          if(this.selectedIndicadores.includes("Número de niños, niñas y jóvenes vinculados al programa")){
            cadena += 'Num_Ninios_Zomac,Num_Vinculados';
          }
          if(this.selectedIndicadores.includes('Número de docentes vinculados')){
            if(cadena == ''){
              cadena += 'Num_Docentes_Zomac,Num_Docentes'
            }else{
              cadena += ',Num_Docentes_Zomac,Num_Docentes'
            }
          }
          return cadena;
        },

        async descarga(response, identificador){
          var archivo = ''; 
          if(identificador === 0){
            archivo = `convocatorias_${this.anio}_nacional.xlsx`;
          }
          else if(identificador === 1 ){
            archivo = `convocatorias_${this.anio}_departamental.xlsx`
          }
          // Convert the response to a blob
          const blob = await response.blob();
          // Create a new anchor element
          const link = document.createElement('a');
          // Set the href attribute of the anchor to the blob URL
          link.href = URL.createObjectURL(blob);
          // Set the download attribute of the anchor to specify the filename
          link.download = archivo;
          // Hide the anchor element
          link.style.display = 'none';
          // Append the anchor element to the document body
          document.body.appendChild(link);
          // Simulate a click on the anchor element to trigger the download
          link.click();
          // Remove the anchor element from the document body
          document.body.removeChild(link);
        },

        async clickButton() {
            if (this.selectedDesagregacion === "nacional") {
                const cadena = this.seleccionesIndicadores();
                const response = await fetch(`https://localhost:7192/api/Convocatorias/filterGroupByAnio/${this.anio}?columnNames=${cadena}`);
                if (response.ok) {
                  this.descarga(response, 0);
              } else {
                  // Handle the error if the response is not successful
                  console.error('Failed to fetch data:', response.statusText);
              }
            }
            else if(this.selectedDesagregacion === "departamental"){
              const departamentos = this.seleccionDepartamental();
              const columnas = this.seleccionesIndicadores();
              const response = await fetch(`https://localhost:7192/api/Convocatorias/filterAnioDepartamento/${this.anio}?departamentos=${departamentos}&columnNames=${columnas}`);
              if (response.ok) {
                  this.descarga(response, 1);
              } else {
                  // Handle the error if the response is not successful
                  console.error('Failed to fetch data:', response.statusText);
              }
            }
            else{
              if(this.selectedDesagregacion2 === "nacional"){
                const cadena = this.seleccionAgrupamiento();
                const response = await fetch(`https://localhost:7192/api/Convocatorias/filterGroupByAnio/${this.anio}?columnNames=${cadena}`);
                if (response.ok) {
                  this.descarga(response, 0);
                } else {
                    // Handle the error if the response is not successful
                    console.error('Failed to fetch data:', response.statusText);
                }
              }
              else if(this.selectedDesagregacion2 === "departamental"){
                const departamentos = this.seleccionDepartamental();
                const columnas = this.seleccionAgrupamiento();
                const response = await fetch(`https://localhost:7192/api/Convocatorias/filterAnioDepartamento/${this.anio}?departamentos=${departamentos}&columnNames=${columnas}`);
                if (response.ok) {
                    this.descarga(response, 1);
                } else {
                    // Handle the error if the response is not successful
                    console.error('Failed to fetch data:', response.statusText);
                }
              }
              else if(this.selectedDesagregacion2 === "pdet"){
                const departamentos = "Cauca,Nariño,Valle del Cauca,Arauca,Antioquia,Norte de Santander,Chocó,Caquetá,Huila,Guaviare,Meta,Bolívar,Sucre,Putumayo,Cesar,La Guajira,Magdalena,Córdoba,Tolima";
                const columnas = this.seleccionPdet();
                const response = await fetch(`https://localhost:7192/api/Convocatorias/filterAnioDepartamento/${this.anio}?departamentos=${departamentos}&columnNames=${columnas}`);
                if (response.ok) {
                    this.descarga(response, 1);
                } else {
                    // Handle the error if the response is not successful
                    console.error('Failed to fetch data:', response.statusText);
                }
              }
              else if(this.selectedDesagregacion2 === "zomac"){
                const departamentos = "Antioquia,Arauca,Bolívar,Boyacá,Caldas,Caquetá,Casanare,Cauca,Cesar,Chocó,Córdoba,Cundinamarca,Guaviare,Huila,La Guajira,Magdalena,Meta,Nariño,Norte de Santander,Putumayo,Quindío,Risaralda,Santander,Sucre,Tolima,Valle del Cauca,Vaupés,Vichada";
                const columnas = this.seleccionZomac();
                const response = await fetch(`https://localhost:7192/api/Convocatorias/filterAnioDepartamento/${this.anio}?departamentos=${departamentos}&columnNames=${columnas}`);
                if (response.ok) {
                    this.descarga(response, 1);
                } else {
                    // Handle the error if the response is not successful
                    console.error('Failed to fetch data:', response.statusText);
                }
              }
            }
        },


        selectAllDepartamentos() {
          if (this.selectedDepartamentos.length === this.listDepartamentos.length) {
              // If all departments are currently selected, deselect all
              this.selectedDepartamentos = [];
            } else {
              // Otherwise, select all departments
              this.selectedDepartamentos = [...this.listDepartamentos];
            }
        },
        
        disSelect() {
        const hasNiñosSelected = this.selectedIndicadores.includes("Número de niños, niñas y jóvenes vinculados al programa");
        const hasDocentesSelected = this.selectedIndicadores.includes("Número de docentes vinculados");
        const hasOtherSelections = this.selectedIndicadores.some(item => item !== "Número de niños, niñas y jóvenes vinculados al programa" && item !== "Número de docentes vinculados");
        if ((!hasNiñosSelected && !hasDocentesSelected) || hasOtherSelections) {
          this.selectedDesagregacion2= null;
          if((this.selectedDesagregacion === "grupos_de_edad" || this.selectedDesagregacion === "genero" || this.selectedDesagregacion === "orientacion" || this.selectedDesagregacion === "conflicto_armado" || this.selectedDesagregacion === "reincorporacion" || this.selectedDesagregacion === "etnia" || this.selectedDesagregacion === "discapacidad"|| this.selectedDesagregacion === 'territorial') && !hasNiñosSelected){
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
                        else if(this.selectedDesagregacion === "grupos_de_edad" || this.selectedDesagregacion === "genero" || this.selectedDesagregacion === "orientacion" || this.selectedDesagregacion === "conflicto_armado" || this.selectedDesagregacion === "reincorporacion" || this.selectedDesagregacion === "etnia" || this.selectedDesagregacion === "discapacidad"){
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
        },
      showOrientacionOption(){
        const hasOtherSelections = this.selectedIndicadores.some(item=> item !== "Número de docentes vinculados");
        const hasDocentesSelected = this.selectedIndicadores.includes("Número de docentes vinculados");
        return !hasOtherSelections && hasDocentesSelected;
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
        const valido2 = this.selectedDesagregacion === "grupos_de_edad" || this.selectedDesagregacion === "genero" || this.selectedDesagregacion === "orientacion" || this.selectedDesagregacion === "conflicto_armado" || this.selectedDesagregacion === "reincorporacion" || this.selectedDesagregacion === "etnia" || this.selectedDesagregacion === "discapacidad"|| this.selectedDesagregacion === "territorial";
        return valido1 && valido2;
      },
      showTerritorial(){
        const hasNiñosSelected = this.selectedIndicadores.includes("Número de niños, niñas y jóvenes vinculados al programa");
        const hasDocentesSelected = this.selectedIndicadores.includes("Número de docentes vinculados");
        const hasOtherSelections = this.selectedIndicadores.some(item => item !== "Número de niños, niñas y jóvenes vinculados al programa" && item !== "Número de docentes vinculados");
        const desagregacion = this.selectedDesagregacion === 'territorial'
      // Show "Género" if either "Número de niños" or "Número de docentes" is selected and no other selection is made
      return (hasNiñosSelected || hasDocentesSelected) && !hasOtherSelections && desagregacion;
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
  