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
          <label for="anio" v-if="this.id == 0">Año:</label>
          <label for="anio" v-if="this.id == 1">Primer Año:</label>
        </div>
        <div class="col-md-9">
          <select class = "custom-select" id="anio" v-model="anio">
              <option selected>Seleccionar...</option>
              <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
          </select>
        </div>
      </div>
      <div class="row mb-3" style="margin-top: 20px;" v-if="this.id == 1">
        <div class="col-md-2">
          <label for="anio2" >Segundo año:</label>
        </div>
        <div class="col-md-9">
          <select class="custom-select" id="anio2" v-model="anio2"> 
            <option selected>Seleccionar...</option>
            <option  v-for="year in years" :key="year">{{ year }}</option>
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
            <option v-if='!this.departamental' value="nacional">Nacional</option>
            <option value="departamental">Departamental</option>
            <option v-if="showGeneroOption" value="genero">Género</option>
            <option v-if="showGeneroOption" value="orientacion">Orientación sexual</option>
            <option v-if="showGeneroOption" value="conflicto_armado">Población victima del conflicto armado</option>
            <option v-if="showGeneroOption" value="reincorporacion">Población en reincorporación</option>
            <option v-if="showGeneroOption" value="etnia">Pueblos y comunidades étnicas</option>
            <option v-if="showGeneroOption" value="discapacidad">Población en discapacidad</option>
            <option v-if="(!departamental && showGeneroOption) || (territorial && departamental) " value="territorial">Territorial</option>
          </select> 
        </div>
      </div>
      <div class="row" v-if="showDesagregacion2 && !departamental" style="margin-top: 20px;">
        <div class="col-md-2">
          <label for="agrupar">Agrupar por:</label>
        </div>
        <div class="col-md-9 p-0" style ="margin-left: 10px">
          <select class="custom-select" id="desagregacion" v-model="selectedDesagregacion2">
            <option selected>Seleccionar...</option>
            <option  v-if="!showTerritorial || !this.departamental" value="nacional">Nacional</option>
            <option v-if="!showTerritorial" value="departamental">Departamentos</option>
            <option v-if="showTerritorial" value="pdet">PDET</option>
            <option v-if="showTerritorial" value="zomac">ZOMAC</option>
          </select>
        </div>
      </div>
      <div class="row" v-if="showDepartamentos && !this.departamental" style="margin-top: 40px;">
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
import {jwtDecode }from 'jwt-decode';
export default {
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
        anio2: null,
        departamental : null,
        territorial: true,
        userId:null,
        token: null
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
          if(this.anio !== null && ((this.anio2!=null && this.id == 1) || (this.anio2==null && this.id == 0))){
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
          if(!this.departamental){if(!hasAsesoresSelected && hasOtherSelections){
            this.selectedDesagregacion2 = null;
            if((this.selectedDesagregacion === "genero" || this.selectedDesagregacion === "orientacion" || this.selectedDesagregacion === "conflicto_armado" || this.selectedDesagregacion === "reincorporacion" || this.selectedDesagregacion === "etnia" || this.selectedDesagregacion === "discapacidad"|| this.selectedDesagregacion === 'territorial') && !hasAsesoresSelected)
            {
              this.selectedDesagregacion = null;
            }
          }
        }
        },
        async clickButton(){
          let response;
          if(this.selectedDesagregacion === "nacional"){
            const cadena = this.seleccionIndicadores();
            console.log(cadena)
            if(this.id === 0){
              response = await fetch(`https://localhost:7192/api/acompaniamientos/filterGroupByAnio/${this.anio}/${this.userId}/${this.token}?columnNames=${cadena}`)
            }
            else if (this.id === 1){
              response = await fetch(`https://localhost:7192/api/acompaniamientos/filterGroupByAnios/${this.anio}/${this.anio2}/${this.userId}/${this.token}?columnNames=${cadena}`)
            }
            if(response.ok){
              this.descarga(response,0);
            }else{
              console.error('Failed to fetch data:', response.statusText);
            } 
          }
          else if(this.selectedDesagregacion === "departamental"){
              const departamentos = this.seleccionDepartamental();
              const columnas = this.seleccionIndicadores();
              if(this.id === 0){
                response = await fetch(`https://localhost:7192/api/acompaniamientos/filterAnioDepartamento/${this.anio}/${this.userId}/${this.token}?departamentos=${departamentos}&columnNames=${columnas}`);
              }
              else if(this.id === 1){
                response = await fetch(`https://localhost:7192/api/acompaniamientos/filterAniosDepartamentos/${this.anio}/${this.anio2}/${this.userId}/${this.token}?departamentos=${departamentos}&columnNames=${columnas}`);
              }
              if (response.ok) {
                  this.descarga(response, 1);
              } else {
                  // Handle the error if the response is not successful
                  console.error('Failed to fetch data:', response.statusText);
              }
          }else{
              if(this.selectedDesagregacion2 === "nacional"){
                const cadena = this.seleccionAgrupamiento();
                if(this.id === 0){
                  response = await fetch(`https://localhost:7192/api/acompaniamientos/filterGroupByAnio/${this.anio}/${this.userId}/${this.token}?columnNames=${cadena}`)
                }
                else if (this.id === 1){
                  response = await fetch(`https://localhost:7192/api/acompaniamientos/filterGroupByAnios/${this.anio}/${this.anio2}/${this.userId}/${this.token}?columnNames=${cadena}`)
                }
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
                if(this.id === 0){
                response = await fetch(`https://localhost:7192/api/acompaniamientos/filterAnioDepartamento/${this.anio}/${this.userId}/${this.token}?departamentos=${departamentos}&columnNames=${columnas}`);
              }
              else if(this.id === 1){
                response = await fetch(`https://localhost:7192/api/acompaniamientos/filterAniosDepartamentos/${this.anio}/${this.anio2}/${this.userId}/${this.token}?departamentos=${departamentos}&columnNames=${columnas}`);
              }
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
                if(this.id === 0){
                response = await fetch(`https://localhost:7192/api/acompaniamientos/filterAnioDepartamento/${this.anio}/${this.userId}/${this.token}?departamentos=${departamentos}&columnNames=${columnas}`);
              }
              else if(this.id === 1){
                response = await fetch(`https://localhost:7192/api/acompaniamientos/filterAniosDepartamentos/${this.anio}/${this.anio2}/${this.userId}/${this.token}?departamentos=${departamentos}&columnNames=${columnas}`);
              }
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
                if(this.id === 0){
                response = await fetch(`https://localhost:7192/api/acompaniamientos/filterAnioDepartamento/${this.anio}/${this.userId}/${this.token}?departamentos=${departamentos}&columnNames=${columnas}`);
              }
              else if(this.id === 1){
                response = await fetch(`https://localhost:7192/api/acompaniamientos/filterAniosDepartamentos/${this.anio}/${this.anio2}/${this.userId}/${this.token}?departamentos=${departamentos}&columnNames=${columnas}`);
              }
                if (response.ok) {
                    this.descarga(response, 1);
                } else {
                    // Handle the error if the response is not successful
                    console.error('Failed to fetch data:', response.statusText);
                }
              }
              else if(this.departamental && this.selectedDesagregacion == "territorial"){
                var cadena='';
                    
                if(this.selectedIndicadores.includes("Número de asesores vinculados al programa")){
                  cadena += 'Num_Asesores_Pdet,Num_Asesores';
                }
                if(this.id === 0){
                  response = await fetch(`https://localhost:7192/api/Acompaniamiento/filterAnioDepartamento/${this.anio}/${this.userId}/${this.token}?departamentos=${this.selectedDepartamentos[0]}&columnNames=${cadena}`);
                }
                else if (this.id === 1){
                  response = await fetch(`https://localhost:7192/api/Acompaniamiento/filterAniosDepartamentos/${this.anio}/${this.anio2}/${this.userId}/${this.token}?departamentos=${this.selectedDepartamentos[0]}&columnNames=${cadena}`);
                }
                if (response.ok) {
                    this.descarga(response, 1);
                } else {
                    // Handle the error if the response is not successful
                    console.error('Failed to fetch data:', response.statusText);
                }
              }
            }
        },
        seleccionIndicadores(){
          var cadena = '';
          if(this.selectedIndicadores.includes("Número de asesores vinculados al programa")){
            cadena += 'Num_Asesores';
          }
          if(this.selectedIndicadores.includes("Número de asesorías realizadas en el año")){
            if(cadena === ''){
              cadena += 'Num_Asesorias';
            }
            else{
              cadena += ',Num_Asesorias';
            }
          }
          if(this.selectedIndicadores.includes('Número de grupos de investigación que recibieron asesorías en el año')){
            if(cadena === ''){
              cadena += 'Num_Grupos_Asesorados';
            }
            else{
              cadena += ',Num_Grupos_Asesorados';
            }
          }
          if(this.selectedIndicadores.includes("Número promedio de asesorías que recibe cada grupo de investigación")){
            if(cadena === ''){
              cadena += 'Num_Promedio_Asesorias';
            }
            else{
              cadena += ',Num_Promedio_Asesorias';
            }
          }
          if(this.selectedIndicadores.includes("Número de grupos de investigación vinculados al programa por asesor")){
            if(cadena === ''){
              cadena += 'Num_Grupos_Por_Asesor';
            }
            else{
              cadena += ',Num_Grupos_Por_Asesor';
            }
          }
          if(this.selectedIndicadores.includes("Número de talleres de formación y/o capacitación realizados en cada coordinación")){
            if(cadena === ''){
              cadena += 'Num_Talleres';
            }
            else{
              cadena += ',Num_Talleres';
            }
          }
          if(this.selectedIndicadores.includes("Número de docentes vinculados al programa que participan en talleres de capacitación y/o formación")){
            if(cadena === ''){
              cadena += 'Num_Docentes_Vinculados';
            }
            else{
              cadena += ',Num_Docentes_Vinculados';
            }
          }
          if(this.selectedIndicadores.includes("Número promedio de horas dedicadas por los docentes vinculados al programa a actividades de Ondas")){
            if(cadena === ''){
              cadena += 'Num_Promedio_Horas_Docentes';
            }
            else{
              cadena += ',Num_Promedio_Horas_Docentes';
            }
          }
          if(this.selectedIndicadores.includes("Número promedio de horas dedicadas por los niños, niñas y adolescentes vinculados a Ondas a las actividades de investigación")){
            if(cadena === ''){
              cadena += 'Num_Promedio_Horas_Jovenes';
            }
            else{
              cadena += ',Num_Promedio_Horas_Jovenes';
            }
          }
          if(this.selectedIndicadores.includes("Duración promedio de los proyectos de investigación seleccionados")){
            if(cadena === ''){
              cadena += 'Duracion_Proyectos';
            }
            else{
              cadena += ',Duracion_Proyectos';
            }
          }
          if(this.selectedIndicadores.includes("Porcentaje de municipios en el departamento con instituciones educativas vinculadas al programa Ondas")){
            if(cadena === ''){
              cadena += 'Pct_Vinculados';
            }
            else{
              cadena += ',Pct_Vinculados';
            }
          }
          if(this.selectedIndicadores.includes("Monto total destinado a la financiación de los proyectos de Ondas")){
            if(cadena === ''){
              cadena += 'Monto_Financiacion';
            }
            else{
              cadena += ',Monto_Financiacion';
            }
          }
          if(this.selectedIndicadores.includes("Monto promedio destinado por proyecto de investigación")){
            if(cadena === ''){
              cadena += 'Monto_Promedio_Proyecto';
            }
            else{
              cadena += ',Monto_Promedio_Proyecto';
            }
          }
          if(this.selectedIndicadores.includes("Monto promedio destinado por niño, niña o adolescente vinculado al programa")){
            if(cadena === ''){
              cadena += 'Monto_Promedio_Por_Joven';
            }
            else{
              cadena += ',Monto_Promedio_Por_Joven';
            }
          }
          return cadena;
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
          if(this.selectedIndicadores.includes("Número de asesores vinculados al programa")){
            if(this.selectedDesagregacion === "genero"){
              cadena = 'Num_Asesores_Hombre,Num_Asesores_Mujer,Num_Asesores_Intersexual,Num_Asesores';
            }
            else if(this.selectedDesagregacion === "orientacion"){
              cadena = 'Num_Asesores_Orientacion_Homo,Num_Asesores_Orientacion_Hetero,Num_Asesores_Orientacion_Bi,Num_Asesores_Orientacion_Otro,Num_Asesores'
            }
            else if(this.selectedDesagregacion === "conflicto_armado"){
              cadena = 'Num_Asesores_Conflicto_Armado,Num_Asesores';
            }
            else if(this.selectedDesagregacion === "reincorporacion"){
              cadena = 'Num_Asesores_Reincorporacion,Num_Asesores';
            }
            else if(this.selectedDesagregacion === 'etnia'){
              cadena = 'Num_Asesores_Indigena,Num_Asesores_Gitano,Num_Asesores_Raizal,Num_Asesores_Palenquero,Num_Asesores_Afro,Num_Asesores_Etnia,Num_Asesores'
            }
            else if (this.selectedDesagregacion === 'discapacidad'){
              cadena = 'Num_Asesores_Discapacidad,Num_Asesores'
            }
          }
          return cadena;
        },
        seleccionPdet(){
          var cadena='';
          if(this.selectedIndicadores.includes("Número de asesores vinculados al programa")){
            cadena += 'Num_Asesores_Pdet,Num_Asesores';
          }
          return cadena;
        },

        seleccionZomac(){
          var cadena='';
          if(this.selectedIndicadores.includes("Número de asesores vinculados al programa")){
            cadena += 'Num_Asesores_Zomac,Num_Asesores';
          }
          return cadena;
        },
        async descarga(response, identificador){
          var archivo = ''; 
          if(identificador === 0){
            if(this.id === 0){
              archivo = `Acompañamientos_${this.anio}_nacional.xlsx`;
            }
            else if(this.id === 1){
              archivo = `Acompañamientos_${this.anio}-${this.anio2}_nacional.xlsx`;
            }
          }
          else if(identificador === 1 ){
            if(this.id === 0){
              archivo = `Acompañamientos_${this.anio}_departamental.xlsx`;
            }
            else if(this.id === 1){
              archivo = `Acompañamientos_${this.anio}-${this.anio2}_departamental.xlsx`;
            }
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
    },
    async mounted() {
      this.token = localStorage.getItem('token');
      this.userId = jwtDecode(this.token).id;
      const rol = await fetch (`https://localhost:7192/api/tokens/${this.userId}/?token=${this.token}`);
      const resp = await rol.json();
      const rolF = resp.rol;
      if( rolF === 'Departamento'){
        this.departamental = true;
        const departamento = await fetch (`https://localhost:7192/api/tokens/${this.userId}/departamento?token=${this.token}`);
        const json = await departamento.json();
        this.selectedDepartamentos.push(json.departamento);
        this.selectedDesagregacion2 = 'departamental';
        this.territorial = ["Cauca,Nariño,Valle del Cauca,Arauca,Antioquia,Norte de Santander,Chocó,Caquetá,Huila,Guaviare,Meta,Bolívar,Sucre,Putumayo,Cesar,La Guajira,Magdalena,Córdoba,Tolima"].includes(this.selectedDepartamentos[0])
        const response = await fetch(`https://localhost:7192/api/acompaniamientos/minmaxanio/${this.selectedDepartamentos[0]}/${this.userId}/${this.token}`);
        const json2 = await response.json();
        const minYear = json2.minAnio;
        const maxYear = json2.maxAnio;
        for (let year = minYear; year <= maxYear; year++) {
          this.years.push(year);
        }
      }
      else{
          const  response = await fetch(`https://localhost:7192/api/acompaniamientos/minmaxanio/${this.userId}/${this.token}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const json = await response.json();
        const minYear = json.minAnio;
        const maxYear = json.maxAnio;
        for (let year = minYear; year <= maxYear; year++) {
          this.years.push(year);
        }
      }
    },
    props: {
        id: {
            type: Number,
            required: true
      }
    }
};
</script>

<style scoped>
/* Your component-specific styles here */
</style>