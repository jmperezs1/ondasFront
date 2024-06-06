<template>
  <h1 style="text-align: center; margin-top: 40px" v-if="id==0">Exportar movilización en un año</h1>
  <h1 style="text-align: center; margin-top: 40px" v-if="id==1">Exportar movilización en un rango de años</h1>
    <div class="container mt-3">
      <div class="row" style="margin-top: 40px;">
        <div class="col-md-2"></div>
        <div class="col-md-3">
          <h6>Seleccione los indicadores de interés:</h6>
        </div>
        <div class="col-md-7">
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
      <div class="row mb-3" style="margin-top: 20px;" >
        <div class="col-md-2"></div>
        <div class="col-md-3">
          <label for="anio" v-if="this.id == 0"><h6>Seleccione el año de interés:</h6></label>
          <label for="anio" v-if="this.id == 1"><h6>Seleccione el primer año:</h6></label>
        </div>
        <div class="col-md-7">
          <select class="custom-select" id="anio" v-model="anio"> 
            <option selected>Seleccionar...</option>
            <option  v-for="year in years" :key="year">{{ year }}</option>
          </select>
        </div>
      </div>
        <div class="row mb-3" style="margin-top: 20px;" v-if="this.id == 1">
          <div class="col-md-2"></div>
        <div class="col-md-3">
          <label for="anio2" ><h6>Seleccione el segundo año:</h6></label>
        </div>
        <div class="col-md-7">
          <select class="custom-select" id="anio2" v-model="anio2"> 
            <option selected>Seleccionar...</option>
            <option  v-for="year in years" :key="year">{{ year }}</option>
          </select>
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-md-2"></div>
        <div class="col-md-3">
          <label for="desagregacion"><h6>Desagregación:</h6></label>
        </div>
        <div class="col-md-7" >
          <select class="custom-select" id="desagregacion" v-model="selectedDesagregacion">
            <option selected>Seleccionar...</option>
            <option v-if="!this.departamental" value="nacional">Nacional</option>
            <option value="departamental">Departamental</option>
            <option v-if="showGeneroOption" value="conflicto_armado">Población victima del conflicto armado</option>
            <option v-if="showGeneroOption" value="reincorporacion">Población en reincorporación</option>
            <option v-if="showGeneroOption" value="etnia">Pueblos y comunidades étnicas</option>
            <option v-if="showGeneroOption" value="discapacidad">Población en discapacidad</option>
            <option v-if="(!departamental && showGeneroOption) || (territorial && departamental) " value="territorial">Territorial</option>
          </select>
        </div>
      </div>
      <div class="row" v-if="showDesagregacion2 && !departamental">
        <div class="col-md-2"></div>
        <div class="col-md-3">
          <label for="agrupar">Agrupar por:</label>
        </div>
        <div class="col-md-6 p-0" style ="margin-left: 10px">
          <select class="custom-select" id="desagregacion" v-model="selectedDesagregacion2">
            <option selected>Seleccionar...</option>
            <option v-if="!showTerritorial || !this.departamental" value="nacional">Nacional</option>
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
import { jwtDecode } from 'jwt-decode';
export default {
    name: 'ExportarMovilizacion',
    data() {
      return {
        years: [],
        listIndicadores: [
          "Número de talleres, conferencias, foros realizados por las entidades coordinadoras, paralelos a los procesos de capacitación de maestros", 
          "Número de encuentros realizados",
          "Número de participantes en cada encuentro realizado", 
          "Número de premios recibidos por los grupos de investigación vinculados al programa Ondas",
          "Número de grupos de investigación vinculados al programa Ondas que han recibido premios o reconocimientos",
          "Número de niños, niñas y jóvenes vinculados al programa Ondas que participan en ferias de ciencia, tecnología e innovación",
          "Número de proyectos de investigación apoyados por el programa que son presentados en ferias de ciencia, tecnología e innovación",
          "Número de niños, niñas y jóvenes vinculados al programa que participan en ferias de ciencia, tecnología e innovación internacionales",
          "Número de proyectos de investigación apoyados por el programa que son presentados en ferias de ciencia, tecnología e innovación internacionales"
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
        anio2 : null,
        departamental : null,
        territorial: true,
        userId: null,
        token: null
      };
    },
    props: {
      id: {
        type: Number,
        required: true
      }
    },
    watch: {
        selectedIndicadores: {
            handler: 'disSelect',
            deep: true
        }
    },
    methods:{
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
        async descarga(response, identificador){
          var archivo = ''; 
          if(identificador === 0){
            if(this.id === 0){
              archivo = `movilizaciones_${this.anio}_nacional.xlsx`;
            }
            else if(this.id === 1){
              archivo = `movilizaciones_${this.anio}-${this.anio2}_nacional.xlsx`;
            }
          }
          else if(identificador === 1 ){
            if(this.id === 0){
              archivo = `movilizaciones_${this.anio}_departamental.xlsx`
            }
            else if(this.id === 1){
              archivo = `movilizaciones_${this.anio}-${this.anio2}_departamental.xlsx`
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
        async clickButton(){
            console.log(this.selectedIndicadores);
            let response;
            if(this.selectedDesagregacion === 'nacional'){
                const cadena = this.seleccionIndicadores();
                console.log(cadena);
                if(this.id === 0){
                  response = await fetch(`https://localhost:7192/api/movilizaciones/filterGroupByAnio/${this.anio}/${this.userId}/${this.token}?columnNames=${cadena}`);
                }
                else if (this.id === 1){
                  response = await fetch(`https://localhost:7192/api/movilizaciones/filterGroupByAnios/${this.anio}/${this.anio2}/${this.userId}/${this.token}?columnNames=${cadena}`);
                }
                if (response.ok) {
                  this.descarga(response, 0);
              } else {
                  // Handle the error if the response is not successful
                  console.error('Failed to fetch data:', response.statusText);
              }
            }
            else if(this.selectedDesagregacion === 'departamental'){
                const departamentos = this.seleccionDepartamental();
                const columnas = this.seleccionIndicadores();
                if(this.id === 0){
                  response = await fetch(`https://localhost:7192/api/movilizaciones/filterAnioDepartamento/${this.anio}/${this.userId}/${this.token}?departamentos=${departamentos}&columnNames=${columnas}`);
                }
                else if (this.id === 1){
                  response = await fetch(`https://localhost:7192/api/movilizaciones/filterAniosDepartamentos/${this.anio}/${this.anio2}/${this.userId}/${this.token}?departamentos=${departamentos}&columnNames=${columnas}`);
                }
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
                if(this.id === 0){
                  response = await fetch(`https://localhost:7192/api/movilizaciones/filterGroupByAnio/${this.anio}/${this.userId}/${this.token}?columnNames=${cadena}`);
                }
                else if (this.id === 1){
                  response = await fetch(`https://localhost:7192/api/movilizaciones/filterGroupByAnios/${this.anio}/${this.anio2}/${this.userId}/${this.token}?columnNames=${cadena}`);
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
                  response = await fetch(`https://localhost:7192/api/movilizaciones/filterAnioDepartamento/${this.anio}/${this.userId}/${this.token}?departamentos=${departamentos}&columnNames=${columnas}`);
                }
                else if (this.id === 1){
                  response = await fetch(`https://localhost:7192/api/movilizaciones/filterAniosDepartamentos/${this.anio}/${this.anio2}/${this.userId}/${this.token}?departamentos=${departamentos}&columnNames=${columnas}`);
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
                  response = await fetch(`https://localhost:7192/api/movilizaciones/filterAnioDepartamento/${this.anio}/${this.userId}/${this.token}?departamentos=${departamentos}&columnNames=${columnas}`);
                }
                else if (this.id === 1){
                  response = await fetch(`https://localhost:7192/api/movilizaciones/filterAniosDepartamentos/${this.anio}/${this.anio2}/${this.userId}/${this.token}?departamentos=${departamentos}&columnNames=${columnas}`);
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
                  response = await fetch(`https://localhost:7192/api/movilizaciones/filterAnioDepartamento/${this.anio}/${this.userId}/${this.token}?departamentos=${departamentos}&columnNames=${columnas}`);
                }
                else if (this.id === 1){
                  response = await fetch(`https://localhost:7192/api/movilizaciones/filterAniosDepartamentos/${this.anio}/${this.anio2}/${this.userId}/${this.token}?departamentos=${departamentos}&columnNames=${columnas}`);
                }
                if (response.ok) {
                    this.descarga(response, 1);
                } else {
                    // Handle the error if the response is not successful
                    console.error('Failed to fetch data:', response.statusText);
                }
              }
              else if(this.departamental && this.selectedDesagregacion == "territorial"){
                var cadena='Num_Vinculados_Pdet,Num_Vinculados_Ferias,Num_Vinculados_Zomac,Num_Vinculados_Ferias';
                if(this.id === 0){
                  response = await fetch(`https://localhost:7192/api/Convocatorias/filterAnioDepartamento/${this.anio}/${this.userId}/${this.token}?departamentos=${this.selectedDepartamentos[0]}&columnNames=${cadena}`);
                }
                else if (this.id === 1){
                  response = await fetch(`https://localhost:7192/api/Convocatorias/filterAniosDepartamentos/${this.anio}/${this.anio2}/${this.userId}/${this.token}?departamentos=${this.selectedDepartamentos[0]}&columnNames=${cadena}`);
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
            if(this.selectedIndicadores.includes("Número de talleres, conferencias, foros realizados por las entidades coordinadoras, paralelos a los procesos de capacitación de maestros")){
                cadena += 'Num_Talleres_Entidades_Coordinadoras';
            }
            if(this.selectedIndicadores.includes("Número de encuentros realizados")){
                if(cadena != ''){
                    cadena += ',';
                }
                cadena += 'Num_Encuentros';
            }
            if(this.selectedIndicadores.includes("Número de participantes en cada encuentro realizado")){
                if(cadena != ''){
                    cadena += ',';
                }
                cadena += 'Num_Participantes_Encuentros';
            }
            if(this.selectedIndicadores.includes("Número de premios recibidos por los grupos de investigación vinculados al programa Ondas")){
                if(cadena != ''){
                    cadena += ',';
                }
                cadena += 'Num_Premios_Grupos_Investigacion';
            }
            if(this.selectedIndicadores.includes("Número de grupos de investigación vinculados al programa Ondas que han recibido premios o reconocimientos")){
                if(cadena != ''){
                    cadena += ',';
                }
                cadena += 'Num_Grupos_Ganadores';
            }
            if(this.selectedIndicadores.includes("Número de niños, niñas y jóvenes vinculados al programa Ondas que participan en ferias de ciencia, tecnología e innovación")){
                if(cadena != ''){
                    cadena += ',';
                }
                cadena += 'Num_Vinculados_Ferias';
            }
            if(this.selectedIndicadores.includes("Número de proyectos de investigación apoyados por el programa que son presentados en ferias de ciencia, tecnología e innovación")){
                if(cadena != ''){
                    cadena += ',';
                }
                cadena += 'Num_Proyectos_Ferias';
            }
            if(this.selectedIndicadores.includes("Número de niños, niñas y jóvenes vinculados al programa que participan en ferias de ciencia, tecnología e innovación internacionales")){
                if(cadena != ''){
                    cadena += ',';
                }
                cadena += 'Num_Vinculados_Internacionales';

            }
            if(this.selectedIndicadores.includes("Número de proyectos de investigación apoyados por el programa que son presentados en ferias de ciencia, tecnología e innovación internacionales")){
                if(cadena != ''){
                    cadena += ',';
                }
                cadena += 'Num_Proyectos_Internacionales';
                
            }
            return cadena;
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
        seleccionAgrupamiento(){
            var cadena = '';
            if(this.selectedDesagregacion === 'conflicto_armado'){
                cadena += 'Num_Vinculados_Conflicto,Num_Vinculados_Ferias';
            }
            else if(this.selectedDesagregacion === 'reincorporacion'){
               cadena += 'Num_Vinculados_Reincorporacion,Num_Vinculados_Ferias';
            }
            else if(this.selectedDesagregacion === 'etnia'){
                cadena += 'Num_Vinculados_Indigenas,Num_Vinculados_Gitano,Num_Vinculados_Raizal,Num_Vinculados_Afro,Num_Vinculados_Palenquero,Num_Vinculados_Etnia,Num_Vinculados_Ferias';
            }
            else if(this.selectedDesagregacion === 'discapacidad'){
                cadena += 'Num_Vinculados_Discapacidad,Num_Vinculados_Ferias';
            }
            return cadena;
        },
        seleccionPdet(){
            return "Num_Vinculados_Pdet,Num_Vinculados_Ferias";
        },
        seleccionZomac(){
            return "Num_Vinculados_Zomac,Num_Vinculados_Ferias";
        },
        disSelect() {
            const hasNiñosSelected = this.selectedIndicadores.includes("Número de niños, niñas y jóvenes vinculados al programa Ondas que participan en ferias de ciencia, tecnología e innovación")
            const hasOtherSelections = this.selectedIndicadores.kength > 1;
            if(!this.departamental){if (!hasNiñosSelected || ( hasNiñosSelected && hasOtherSelections )) {
            this.selectedDesagregacion2= null;
            if((this.selectedDesagregacion === "conflicto_armado" || this.selectedDesagregacion === "reincorporacion" || this.selectedDesagregacion === "etnia" || this.selectedDesagregacion === "discapacidad"|| this.selectedDesagregacion === 'territorial') && !hasNiñosSelected){
                this.selectedDesagregacion= null;
            }
            }
          }
        }
    },
    computed:{
        isFormValid() {
            if(this.selectedIndicadores.length > 0){
                if(this.anio!=null && ((this.anio2!=null && this.id == 1) || (this.anio2==null && this.id == 0))){
                    if(this.selectedDesagregacion!=null){
                        if(this.selectedDesagregacion === "departamental" && this.selectedDepartamentos.length > 0){
                            return true;
                        }
                        else if(this.selectedDesagregacion === "nacional"){
                            return true;
                        }
                        else if(this.selectedDesagregacion === "conflicto_armado" || this.selectedDesagregacion === "reincorporacion" || this.selectedDesagregacion === "etnia" || this.selectedDesagregacion === "discapacidad"){
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
        showGeneroOption(){
            return this.selectedIndicadores.includes("Número de niños, niñas y jóvenes vinculados al programa Ondas que participan en ferias de ciencia, tecnología e innovación") && this.selectedIndicadores.length == 1;
        },
        showDesagregacion2(){
        const valido1 = this.showGeneroOption
        const valido2 =   this.selectedDesagregacion === "conflicto_armado" || this.selectedDesagregacion === "reincorporacion" || this.selectedDesagregacion === "etnia" || this.selectedDesagregacion === "discapacidad"|| this.selectedDesagregacion === "territorial";
        return valido1 && valido2;
      },
        showTerritorial(){
            return this.selectedDesagregacion === "territorial" && this.showGeneroOption;
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
        const response = await fetch(`https://localhost:7192/api/movilizaciones/minmaxanio/${this.selectedDepartamentos[0]}/${this.userId}/${this.token}`);
        const json2 = await response.json();
        const minYear = json2.minAnio;
        const maxYear = json2.maxAnio;
        for (let year = minYear; year <= maxYear; year++) {
          this.years.push(year);
        }
      }
      else{
          const  response = await fetch(`https://localhost:7192/api/movilizaciones/minmaxanio/${this.userId}/${this.token}`);
        
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
};
</script>

<style scoped>
/* Your component styles here */
</style>