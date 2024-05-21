<template>

    <div>
        <div class="row">
            <!-- Start Year Input -->
            <div class="col-md-2" style="text-align: center;">
                <label for="start_year">Año de inicio:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="start_year" v-model.number="startYear" min="1900" max="2099" step="1" style="background-color: #D9D9D9; border: 0;" :style="{border: (startYear < 1900 || startYear > 2099) ? '1px solid red' : ''}">
            </div>
        
            <!-- End Year Input -->
            <div class="col-md-2" style="text-align: center;">
                <label for="end_year">Año de fin:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="end_year" v-model.number="endYear" min="1900" max="2099" step="1" style="background-color: #D9D9D9; border: 0;" :style="{border: (endYear < 1900 || endYear > 2099) ? '1px solid red' : ''}">
            </div>
        </div>
    </div>

    <div class="row" v-if="!this.departamental" style="margin-top: 40px; margin-left: 60px;">
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

    <div class="row" v-if="this.getDatos" style="margin-top: 45px; margin-left: 60px;">
        <h2>Informacion recolectada: </h2>
        <div v-if="Num_Encuentros != null">
            <div class="row" style="margin-top: 45px;">
                <div class="col-md-1" style="text-align: left;"></div>
                <div class="col-md-5" style="text-align: left;">
                    <label for="Num_Talleres_Entidades_Coordinadoras">Número de talleres, conferencias, foros realizados por las entidades coordinadoras, paralelos a los procesos de capacitación de maestros:</label>
                </div>
                <div class="col-md-3">
                    <p v-if="Num_Talleres_Entidades_Coordinadoras !== null">
                        {{ Num_Talleres_Entidades_Coordinadoras }}
                    </p>
                    <p v-else>
                        Loading...
                    </p>
                </div>
            </div>
            <div class="row" style="margin-top: 45px;">
                <div class="col-md-1" style="text-align: left;"></div>
                <div class="col-md-5" style="text-align: left;">
                    <label for="Num_Encuentros">Numero de Encuentros Realizados: </label>
                </div>
                <div class="col-md-3">
                    <p v-if="Num_Encuentros !== null">
                        {{ Num_Encuentros }}
                    </p>
                    <p v-else>
                        Loading...
                    </p>
                </div>
            </div> 
            <div class="row" style="margin-top: 45px;">
                <div class="col-md-1" style="text-align: left;"></div>
                <div class="col-md-5" style="text-align: left;">
                    <label for="Num_Premios_Grupos_Investigacion">Número de premios recibidos por los grupos de investigación vinculados al programa Ondas: </label>
                </div>
                <div class="col-md-3">
                    <p v-if="Num_Premios_Grupos_Investigacion !== null">
                        {{ Num_Premios_Grupos_Investigacion }}
                    </p>
                    <p v-else>
                        Loading...
                    </p>
                </div>
            </div>
            <div class="row" style="margin-top: 45px;">
                <div class="col-md-1" style="text-align: left;"></div>
                <div class="col-md-5" style="text-align: left;">
                    <label for="Num_Vinculados_Ferias">Número de niños, niñas y jóvenes vinculados al programa Ondas que participan en ferias de ciencia, tecnología e innovación: </label>
                </div>
                <div class="col-md-3">
                    <p v-if="Num_Vinculados_Ferias !== null">
                        {{ Num_Vinculados_Ferias }}
                    </p>
                    <p v-else>
                        Loading...
                    </p>
                </div>
            </div>
            <div class="row" style="margin-top: 45px;">
                <div class="col-md-1" style="text-align: left;"></div>
                <div class="col-md-5" style="text-align: left;">
                    <label for="Num_Vinculados_Internacionales">Número de niños, niñas y jóvenes vinculados al programa que participan en ferias de ciencia, tecnología e innovación internacionales: </label>
                </div>
                <div class="col-md-3">
                    <p v-if="Num_Vinculados_Internacionales !== null">
                        {{ Num_Vinculados_Internacionales }}
                    </p>
                    <p v-else>
                        Loading...
                    </p>
                </div>
            </div>
            <div class="row" style="margin-top: 45px;">
                <div class="col-md-1" style="text-align: left;"></div>
                <div class="col-md-5" style="text-align: left;">
                    <label for="Num_Proyectos_Internacionales">Número de proyectos de investigación apoyados por el programa que son presentados en ferias de ciencia, tecnología e innovación internacionales: </label>
                </div>
                <div class="col-md-3">
                    <p v-if="Num_Proyectos_Internacionales !== null">
                        {{ Num_Proyectos_Internacionales }}
                    </p>
                    <p v-else>
                        Loading...
                    </p>
                </div>
            </div>
            <div class="row" style="margin-top: 45px;">
                <div class="col-md-1" style="text-align: left;"></div>
                <div class="col-md-5" style="text-align: left;">
                    <label for="Num_Grupos_Ganadores">Número de grupos de investigación vinculados al programa Ondas que han recibido premios o reconocimientos: </label>
                </div>
                <div class="col-md-3">
                    <p v-if="Num_Grupos_Ganadores !== null">
                        {{ Num_Grupos_Ganadores }}
                    </p>
                    <p v-else>
                        Loading...
                    </p>
                </div>
            </div>
            <div class="row" style="margin-top: 45px;">
                <div class="col-md-1" style="text-align: left;"></div>
                <div class="col-md-5" style="text-align: left;">
                    <label for="Num_Proyectos_Ferias">Número de proyectos de investigación apoyados por el programa que son presentados en ferias de ciencia, tecnología e innovación: </label>
                </div>
                <div class="col-md-3">
                    <p v-if="Num_Proyectos_Ferias !== null">
                        {{ Num_Proyectos_Ferias }}
                    </p>
                    <p v-else>
                        Loading...
                    </p>
                </div>
            </div>
            <div class="row" style="margin-top: 45px;">
                <div class="col-md-1" style="text-align: left;"></div>
                <div class="col-md-5" style="text-align: left;">
                    <label for="Num_Vinculados_Conflicto_Armado">Numero de Vinculados Victima del Conflicto Armado: </label>
                </div>
                <div class="col-md-3">
                    <p v-if="Num_Vinculados_Conflicto_Armado !== null">
                        {{ Num_Vinculados_Conflicto_Armado }}
                    </p>
                    <p v-else>
                        Loading...
                    </p>
                </div>
            </div>
            <div class="row" style="margin-top: 45px;">
                <div class="col-md-1" style="text-align: left;"></div>
                <div class="col-md-5" style="text-align: left;">
                    <label for="Num_Vinculados_Reincorporacion">Numero de Vinculados en Reincorporación: </label>
                </div>
                <div class="col-md-3">
                    <p v-if="Num_Vinculados_Reincorporacion !== null">
                        {{ Num_Vinculados_Reincorporacion }}
                    </p>
                    <p v-else>
                        Loading...
                    </p>
                </div>
            </div>
            <div class="row" style="margin-top: 45px;">
                <div class="col-md-1" style="text-align: left;"></div>
                <div class="col-md-5" style="text-align: left;">
                    <label for="Num_Vinculados_Etnia">Numero de Vinculados parte de un grupo Etnico: </label>
                </div>
                <div class="col-md-3">
                    <p v-if="Num_Vinculados_Etnia !== null">
                        {{ Num_Vinculados_Etnia }}
                    </p>
                    <p v-else>
                        Loading...
                    </p>
                </div>
            </div>
            <div class="row" style="margin-top: 45px;">
                <div class="col-md-1" style="text-align: left;"></div>
                <div class="col-md-5" style="text-align: left;">
                    <label for="Num_Vinculados_Pdet">Numero de Vinculados PDET: </label>
                </div>
                <div class="col-md-3">
                    <p v-if="Num_Vinculados_Pdet !== null">
                        {{ Num_Vinculados_Pdet }}
                    </p>
                    <p v-else>
                        Loading...
                    </p>
                </div>
            </div>
            <div class="row" style="margin-top: 45px;">
                <div class="col-md-1" style="text-align: left;"></div>
                <div class="col-md-5" style="text-align: left;">
                    <label for="Num_Vinculados_Zomac">Numero de Vinculados ZOMAC: </label>
                </div>
                <div class="col-md-3">
                    <p v-if="Num_Vinculados_Zomac !== null">
                        {{ Num_Vinculados_Zomac }}
                    </p>
                    <p v-else>
                        Loading...
                    </p>
                </div>
            </div>
            <div class="row" style="margin-top: 45px;">
                <div class="col-md-1" style="text-align: left;"></div>
                <div class="col-md-5" style="text-align: left;">
                    <label for="Num_Vinculados_Indigena">Numero de Vinculados Indigenas: </label>
                </div>
                <div class="col-md-3">
                    <p v-if="Num_Vinculados_Indigena !== null">
                        {{ Num_Vinculados_Indigena }}
                    </p>
                    <p v-else>
                        Loading...
                    </p>
                </div>
            </div>
            <div class="row" style="margin-top: 45px;">
                <div class="col-md-1" style="text-align: left;"></div>
                <div class="col-md-5" style="text-align: left;">
                    <label for="Num_Vinculados_Gitano">Numero de Vinculados Gitanos: </label>
                </div>
                <div class="col-md-3">
                    <p v-if="Num_Vinculados_Gitano !== null">
                        {{ Num_Vinculados_Gitano }}
                    </p>
                    <p v-else>
                        Loading...
                    </p>
                </div>
            </div>
            <div class="row" style="margin-top: 45px;">
                <div class="col-md-1" style="text-align: left;"></div>
                <div class="col-md-5" style="text-align: left;">
                    <label for="Num_Vinculados_Raizal">Numero de Vinculados Raizales: </label>
                </div>
                <div class="col-md-3">
                    <p v-if="Num_Vinculados_Raizal !== null">
                        {{ Num_Vinculados_Raizal }}
                    </p>
                    <p v-else>
                        Loading...
                    </p>
                </div>
            </div>
            <div class="row" style="margin-top: 45px;">
                <div class="col-md-1" style="text-align: left;"></div>
                <div class="col-md-5" style="text-align: left;">
                    <label for="Num_Vinculados_Palenquero">Numero de Vinculados Palenqueros: </label>
                </div>
                <div class="col-md-3">
                    <p v-if="Num_Vinculados_Palenquero !== null">
                        {{ Num_Vinculados_Palenquero }}
                    </p>
                    <p v-else>
                        Loading...
                    </p>
                </div>
            </div>
            <div class="row" style="margin-top: 45px;">
                <div class="col-md-1" style="text-align: left;"></div>
                <div class="col-md-5" style="text-align: left;">
                    <label for="Num_Vinculados_Afro">Numero de Vinculados Afroamericanos: </label>
                </div>
                <div class="col-md-3">
                    <p v-if="Num_Vinculados_Afro !== null">
                        {{ Num_Vinculados_Afro }}
                    </p>
                    <p v-else>
                        Loading...
                    </p>
                </div>
            </div>
            <div class="row" style="margin-top: 45px;">
                <div class="col-md-1" style="text-align: left;"></div>
                <div class="col-md-5" style="text-align: left;">
                    <label for="Num_Vinculados_Discapacidad">Numero de Vinculados Discapacitados: </label>
                </div>
                <div class="col-md-3">
                    <p v-if="Num_Vinculados_Discapacidad !== null">
                        {{ Num_Vinculados_Discapacidad }}
                    </p>
                    <p v-else>
                        Loading...
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { jwtDecode } from 'jwt-decode';
    export default {
        name: 'VisualizacionMovilizacion',
        data() {
            return {
                token: null,
                id: null,
                Num_Talleres_Entidades_Coordinadoras: null,
                Num_Encuentros: null,
                Num_Premios_Grupos_Investigacion: null,
                Num_Vinculados_Ferias: null,
                Num_Vinculados_Internacionales: null,
                Num_Proyectos_Internacionales: null,
                Num_Grupos_Ganadores: null,
                Num_Proyectos_Ferias: null,
                Num_Vinculados_Conflicto_Armado: null,
                Num_Vinculados_Reincorporacion: null,
                Num_Vinculados_Etnia: null,
                Num_Vinculados_Pdet: null,
                Num_Vinculados_Zomac: null,
                Num_Vinculados_Indigena: null,
                Num_Vinculados_Gitano: null,
                Num_Vinculados_Raizal: null,
                Num_Vinculados_Palenquero: null,
                Num_Vinculados_Afro: null,
                Num_Vinculados_Discapacidad: null,
                listDepartamentos: [
                "Amazonas", "Antioquia", "Arauca", "Atlántico", "Bogotá",
                "Bolívar", "Boyacá", "Caldas", "Caquetá", "Casanare", "Cauca",
                "Cesar", "Chocó", "Córdoba", "Cundinamarca", "Guainía", "Guaviare",
                "Huila", "La Guajira", "Magdalena", "Meta", "Nariño", "Norte de Santander",
                "Putumayo", "Quindío", "Risaralda", "San Andrés y Providencia", "Santander",
                "Sucre", "Tolima", "Valle del Cauca", "Vaupés", "Vichada"
                ],
                departamental : null,
                rolF: null, // Define la variable 'rolF'
                departamento: null, // Define la variable 'departamento'
                departamentos: null, // Define la variable 'departamentos'
            };
        },
        methods: {
        async getData() {
            if(this.rolF === "Departamento"){
                if(this.start_year == this.end_year){
                    const response = await fetch(`https://localhost:7192/api/filterAnioDepartamentoVisualizar/${this.start_year}/${this.id}/${this.token}?departamentos=${this.departamento}`);
                    if(response.ok){
                        const data = await response.json();
                        this.Num_Encuentros = data.Num_Encuentros;
                        this.Num_Grupos_Ganadores = data.Num_Grupos_Ganadores;
                        this.Num_Premios_Grupos_Investigacion = data.Num_Premios_Grupos_Investigacion;
                        this.Num_Proyectos_Ferias = data.Num_Proyectos_Ferias;
                        this.Num_Proyectos_Internacionales = data.Num_Proyectos_Internacionales;
                        this.Num_Talleres_Entidades_Coordinadoras = data.Num_Talleres_Entidades_Coordinadoras;
                        this.Num_Vinculados_Afro = data.Num_Vinculados_Afro;
                        this.Num_Vinculados_Conflicto_Armado = data.Num_Vinculados_Conflicto_Armado;
                        this.Num_Vinculados_Discapacidad = data.Num_Vinculados_Discapacidad;
                        this.Num_Vinculados_Etnia = data.Num_Vinculados_Etnia;
                        this.Num_Vinculados_Ferias = data.Num_Vinculados_Ferias;
                        this.Num_Vinculados_Gitano = data.Num_Vinculados_Gitano;
                        this.Num_Vinculados_Indigena = data.Num_Vinculados_Indigena;
                        this.Num_Vinculados_Internacionales = data.Num_Vinculados_Internacionales;
                        this.Num_Vinculados_Palenquero = data.Num_Vinculados_Palenquero;
                        this.Num_Vinculados_Pdet = data.Num_Vinculados_Pdet;
                        this.Num_Vinculados_Raizal = data.Num_Vinculados_Raizal;
                        this.Num_Vinculados_Reincorporacion = data.Num_Vinculados_Reincorporacion;
                        this.Num_Vinculados_Zomac = data.Num_Vinculados_Zomac;

                    }
                }
                else if(this.end_year > this.start_year){
                    const response = await fetch(`https://localhost:7192/api/filterAnioDepartamentoVisualizar/${this.start_year}/${this.end_year}/${this.id}/${this.token}?departamentos=${this.departamento}`);
                        if(response.ok){
                        const data = await response.json();
                        this.Num_Encuentros = data.Num_Encuentros;
                        this.Num_Grupos_Ganadores = data.Num_Grupos_Ganadores;
                        this.Num_Premios_Grupos_Investigacion = data.Num_Premios_Grupos_Investigacion;
                        this.Num_Proyectos_Ferias = data.Num_Proyectos_Ferias;
                        this.Num_Proyectos_Internacionales = data.Num_Proyectos_Internacionales;
                        this.Num_Talleres_Entidades_Coordinadoras = data.Num_Talleres_Entidades_Coordinadoras;
                        this.Num_Vinculados_Afro = data.Num_Vinculados_Afro;
                        this.Num_Vinculados_Conflicto_Armado = data.Num_Vinculados_Conflicto_Armado;
                        this.Num_Vinculados_Discapacidad = data.Num_Vinculados_Discapacidad;
                        this.Num_Vinculados_Etnia = data.Num_Vinculados_Etnia;
                        this.Num_Vinculados_Ferias = data.Num_Vinculados_Ferias;
                        this.Num_Vinculados_Gitano = data.Num_Vinculados_Gitano;
                        this.Num_Vinculados_Indigena = data.Num_Vinculados_Indigena;
                        this.Num_Vinculados_Internacionales = data.Num_Vinculados_Internacionales;
                        this.Num_Vinculados_Palenquero = data.Num_Vinculados_Palenquero;
                        this.Num_Vinculados_Pdet = data.Num_Vinculados_Pdet;
                        this.Num_Vinculados_Raizal = data.Num_Vinculados_Raizal;
                        this.Num_Vinculados_Reincorporacion = data.Num_Vinculados_Reincorporacion;
                        this.Num_Vinculados_Zomac = data.Num_Vinculados_Zomac;
                }
            }

            else{
                if(this.start_year == this.end_year){
                    const response = await fetch(`https://localhost:7192/api/filterAnioDepartamentoVisualizar/${this.start_year}/${this.id}/${this.token}?departamentos=${this.departamentos}`);
                        if(response.ok){
                        const data = await response.json();
                        this.Num_Encuentros = data.Num_Encuentros;
                        this.Num_Grupos_Ganadores = data.Num_Grupos_Ganadores;
                        this.Num_Premios_Grupos_Investigacion = data.Num_Premios_Grupos_Investigacion;
                        this.Num_Proyectos_Ferias = data.Num_Proyectos_Ferias;
                        this.Num_Proyectos_Internacionales = data.Num_Proyectos_Internacionales;
                        this.Num_Talleres_Entidades_Coordinadoras = data.Num_Talleres_Entidades_Coordinadoras;
                        this.Num_Vinculados_Afro = data.Num_Vinculados_Afro;
                        this.Num_Vinculados_Conflicto_Armado = data.Num_Vinculados_Conflicto_Armado;
                        this.Num_Vinculados_Discapacidad = data.Num_Vinculados_Discapacidad;
                        this.Num_Vinculados_Etnia = data.Num_Vinculados_Etnia;
                        this.Num_Vinculados_Ferias = data.Num_Vinculados_Ferias;
                        this.Num_Vinculados_Gitano = data.Num_Vinculados_Gitano;
                        this.Num_Vinculados_Indigena = data.Num_Vinculados_Indigena;
                        this.Num_Vinculados_Internacionales = data.Num_Vinculados_Internacionales;
                        this.Num_Vinculados_Palenquero = data.Num_Vinculados_Palenquero;
                        this.Num_Vinculados_Pdet = data.Num_Vinculados_Pdet;
                        this.Num_Vinculados_Raizal = data.Num_Vinculados_Raizal;
                        this.Num_Vinculados_Reincorporacion = data.Num_Vinculados_Reincorporacion;
                        this.Num_Vinculados_Zomac = data.Num_Vinculados_Zomac;
                }
            }
                else if(this.end_year > this.start_year){
                    const response = await fetch(`https://localhost:7192/api/filterAniosDepartamentosVisualizar/${this.start_year}/${this.end_year}/${this.id}/${this.token}?departamentos=${this.departamentos}`);
                    if(response.ok){
                        const data = await response.json();
                        this.Num_Encuentros = data.Num_Encuentros;
                        this.Num_Grupos_Ganadores = data.Num_Grupos_Ganadores;
                        this.Num_Premios_Grupos_Investigacion = data.Num_Premios_Grupos_Investigacion;
                        this.Num_Proyectos_Ferias = data.Num_Proyectos_Ferias;
                        this.Num_Proyectos_Internacionales = data.Num_Proyectos_Internacionales;
                        this.Num_Talleres_Entidades_Coordinadoras = data.Num_Talleres_Entidades_Coordinadoras;
                        this.Num_Vinculados_Afro = data.Num_Vinculados_Afro;
                        this.Num_Vinculados_Conflicto_Armado = data.Num_Vinculados_Conflicto_Armado;
                        this.Num_Vinculados_Discapacidad = data.Num_Vinculados_Discapacidad;
                        this.Num_Vinculados_Etnia = data.Num_Vinculados_Etnia;
                        this.Num_Vinculados_Ferias = data.Num_Vinculados_Ferias;
                        this.Num_Vinculados_Gitano = data.Num_Vinculados_Gitano;
                        this.Num_Vinculados_Indigena = data.Num_Vinculados_Indigena;
                        this.Num_Vinculados_Internacionales = data.Num_Vinculados_Internacionales;
                        this.Num_Vinculados_Palenquero = data.Num_Vinculados_Palenquero;
                        this.Num_Vinculados_Pdet = data.Num_Vinculados_Pdet;
                        this.Num_Vinculados_Raizal = data.Num_Vinculados_Raizal;
                        this.Num_Vinculados_Reincorporacion = data.Num_Vinculados_Reincorporacion;
                        this.Num_Vinculados_Zomac = data.Num_Vinculados_Zomac;
                    }
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
    },  
    computed: {
        getDatos(){
            if(this.startYear != null && this.endYear != null && this.startYear >= this.endYear){
                this.getData();
                return true;
            }
            return false;
        }   
    },
    async mounted() {

        this.token = localStorage.getItem('token');
        this.id = jwtDecode(this.token).id;
        const rol = await fetch (`https://localhost:7192/api/tokens/${this.id}/?token=${this.token}`);
        const resp = await rol.json();
        this.rolF = resp.rol; // Asigna el valor a 'rolF' correctamente
        console.log(this.rolF)
        if(this.rolF === "Departamento"){
            this.departamental = true;
            const departamentoData = await fetch (`https://localhost:7192/api/tokens/${this.id}/departamento?token=${this.token}`);
            const departamentoJson = await departamentoData.json();
            this.departamento = departamentoJson.departamento; // Asegúrate de asignar correctamente 'departamento'
        }
    }
    };
</script>
