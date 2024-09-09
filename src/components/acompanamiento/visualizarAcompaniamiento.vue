<template>
    <h1 style="margin-top: 40px; text-align: center;">Visualizar Acompañamiento</h1>
    <div>
        <div class="row" style="margin-top: 40px">
            <!-- Start Year Input -->
            <div class="col-md-2" style="text-align: center;">
                <label for="startYear">Año de inicio:</label>
            </div>
            <div class="col-md-3">
                <input type="number" placeholder="Ingrese el año de inicio" class="form-control" @change="getDatos" id="startYear" v-model.number="startYear" min="1900" max="2099" step="1" style=" border: 0;" :style="{border: (startYear < 1900 || startYear > 2099) ? '1px solid red' : ''}">
            </div>
        
            <!-- End Year Input -->
            <div class="col-md-2" style="text-align: center;">
                <label for="endYear">Año de fin:</label>
            </div>
            <div class="col-md-3">
                <input type="number" placeholder="Ingrese el año de inicio" class="form-control" @change="getDatos" id="endYear" v-model.number="endYear" min="1900" max="2099" step="1" style=" border: 0;" :style="{border: (endYear < 1900 || endYear > 2099) ? '1px solid red' : ''}">
            </div>
        </div>
    </div>

    <div class="row" v-if="this.rolF ==  'Minciencias'  " style="margin-top: 40px; margin-left: 60px;">
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

    <div class="col-md-12 text-center" style="margin-top: 40px; margin-bottom: 20px;">
          <button type="button" @click="whenClicked" class="btn btn-primary">Buscar</button>
    </div>

    <div class="row" v-if="Num_Asesores != null" style="margin-top: 45px; margin-left: 60px;">
        <h2 style="margin-left: 150px;">Informacion recolectada: </h2>
        <div>
            <div class="row" style="margin-top: 45px;">
                <div class="col-md-1" style="text-align: left;"></div>
                <div class="col-md-5" style="text-align: left;">
                    <label for="Num_Asesores">Número de asesores vinculados al programa:</label>
                </div>
                <div class="col-md-3">
                    <p v-if="Num_Asesores !== null">
                        {{ Num_Asesores }}
                    </p>
                    <p v-else>
                        Loading...
                    </p>
                </div>
            </div>
            <div class="row" style="margin-top: 45px;">
                <div class="col-md-1" style="text-align: left;"></div>
                <div class="col-md-5" style="text-align: left;">
                    <label for="Num_Asesorias">Número de asesorías realizadas en el año: </label>
                </div>
                <div class="col-md-3">
                    <p v-if="Num_Asesorias !== null">
                        {{ Num_Asesorias }}
                    </p>
                    <p v-else>
                        Loading...
                    </p>
                </div>
            </div> 
            <div class="row" style="margin-top: 45px;">
                <div class="col-md-1" style="text-align: left;"></div>
                <div class="col-md-5" style="text-align: left;">
                    <label for="Num_Grupos_Asesorados">Número de grupos de investigación que recibieron asesorías en el año: </label>
                </div>
                <div class="col-md-3">
                    <p v-if="Num_Grupos_Asesorados !== null">
                        {{ Num_Grupos_Asesorados }}
                    </p>
                    <p v-else>
                        Loading...
                    </p>
                </div>
            </div>
            <div class="row" style="margin-top: 45px;">
                <div class="col-md-1" style="text-align: left;"></div>
                <div class="col-md-5" style="text-align: left;">
                    <label for="Num_Promedio_Asesorias">Número promedio de asesorías que recibe cada grupo de investigación: </label>
                </div>
                <div class="col-md-3">
                    <p v-if="Num_Promedio_Asesorias !== null">
                        {{ Num_Promedio_Asesorias }}
                    </p>
                    <p v-else>
                        Loading...
                    </p>
                </div>
            </div>
            <div class="row" style="margin-top: 45px;">
                <div class="col-md-1" style="text-align: left;"></div>
                <div class="col-md-5" style="text-align: left;">
                    <label for="Num_Grupos_Por_Asesor">Número de grupos de investigación vinculados al programa por asesor: </label>
                </div>
                <div class="col-md-3">
                    <p v-if="Num_Grupos_Por_Asesor !== null">
                        {{ Num_Grupos_Por_Asesor }}
                    </p>
                    <p v-else>
                        Loading...
                    </p>
                </div>
            </div>
            <div class="row" style="margin-top: 45px;">
                <div class="col-md-1" style="text-align: left;"></div>
                <div class="col-md-5" style="text-align: left;">
                    <label for="Num_Talleres">Número de talleres de formación y/o capacitación realizados en cada coordinación: </label>
                </div>
                <div class="col-md-3">
                    <p v-if="Num_Talleres !== null">
                        {{ Num_Talleres }}
                    </p>
                    <p v-else>
                        Loading...
                    </p>
                </div>
            </div>
            <div class="row" style="margin-top: 45px;">
                <div class="col-md-1" style="text-align: left;"></div>
                <div class="col-md-5" style="text-align: left;">
                    <label for="Num_Docentes_Vinculados">Número de docentes vinculados al programa que participan en talleres de capacitación y/o formación: </label>
                </div>
                <div class="col-md-3">
                    <p v-if="Num_Docentes_Vinculados !== null">
                        {{ Num_Docentes_Vinculados }}
                    </p>
                    <p v-else>
                        Loading...
                    </p>
                </div>
            </div>
            <div class="row" style="margin-top: 45px;">
                <div class="col-md-1" style="text-align: left;"></div>
                <div class="col-md-5" style="text-align: left;">
                    <label for="Num_Promedio_Horas_Docentes">Número promedio de horas dedicadas por los docentes vinculados al programa a actividades de Ondas: </label>
                </div>
                <div class="col-md-3">
                    <p v-if="Num_Promedio_Horas_Docentes !== null">
                        {{ Num_Promedio_Horas_Docentes }}
                    </p>
                    <p v-else>
                        Loading...
                    </p>
                </div>
            </div>
            <div class="row" style="margin-top: 45px;">
                <div class="col-md-1" style="text-align: left;"></div>
                <div class="col-md-5" style="text-align: left;">
                    <label for="Num_Promedio_Horas_Jovenes">Número promedio de horas dedicadas por los niños, niñas y adolescentes vinculados a Ondas a las actividades de investigación: </label>
                </div>
                <div class="col-md-3">
                    <p v-if="Num_Promedio_Horas_Jovenes !== null">
                        {{ Num_Promedio_Horas_Jovenes }}
                    </p>
                    <p v-else>
                        Loading...
                    </p>
                </div>
            </div>
            <div class="row" style="margin-top: 45px;">
                <div class="col-md-1" style="text-align: left;"></div>
                <div class="col-md-5" style="text-align: left;">
                    <label for="Duracion_Proyectos">Duración promedio de los proyectos de investigación seleccionados: </label>
                </div>
                <div class="col-md-3">
                    <p v-if="Duracion_Proyectos !== null">
                        {{ Duracion_Proyectos }}
                    </p>
                    <p v-else>
                        Loading...
                    </p>
                </div>
            </div>
            <div class="row" style="margin-top: 45px;">
                <div class="col-md-1" style="text-align: left;"></div>
                <div class="col-md-5" style="text-align: left;">
                    <label for="Pct_Vinculados">Porcentaje de municipios en el departamento con instituciones educativas vinculadas al programa Ondas: </label>
                </div>
                <div class="col-md-3">
                    <p v-if="Pct_Vinculados !== null">
                        {{ Pct_Vinculados }}
                    </p>
                    <p v-else>
                        Loading...
                    </p>
                </div>
            </div>
            <div class="row" style="margin-top: 45px;">
                <div class="col-md-1" style="text-align: left;"></div>
                <div class="col-md-5" style="text-align: left;">
                    <label for="Monto_Financiacion">Monto total destinado a la financiación de los proyectos de Ondas: </label>
                </div>
                <div class="col-md-3">
                    <p v-if="Monto_Financiacion !== null">
                        {{ Monto_Financiacion }}
                    </p>
                    <p v-else>
                        Loading...
                    </p>
                </div>
            </div>
            <div class="row" style="margin-top: 45px;">
                <div class="col-md-1" style="text-align: left;"></div>
                <div class="col-md-5" style="text-align: left;">
                    <label for="Monto_Promedio_Proyecto">Monto promedio destinado por proyecto de investigación: </label>
                </div>
                <div class="col-md-3">
                    <p v-if="Monto_Promedio_Proyecto !== null">
                        {{ Monto_Promedio_Proyecto }}
                    </p>
                    <p v-else>
                        Loading...
                    </p>
                </div>
            </div>
            <div class="row" style="margin-top: 45px;">
                <div class="col-md-1" style="text-align: left;"></div>
                <div class="col-md-5" style="text-align: left;">
                    <label for="Monto_Promedio_Por_Joven">Monto promedio destinado por niño, niña o adolescente vinculado al programa: </label>
                </div>
                <div class="col-md-3">
                    <p v-if="Monto_Promedio_Por_Joven !== null">
                        {{ Monto_Promedio_Por_Joven }}
                    </p>
                    <p v-else>
                        Loading...
                    </p>
                </div>
            </div>
            <div class="row" style="margin-top: 45px;">
                <div class="col-md-1" style="text-align: left;"></div>
                <div class="col-md-5" style="text-align: left;">
                    <label for="Num_Asesores_Hombre">Numero de Asesores Hombres: </label>
                </div>
                <div class="col-md-3">
                    <p v-if="Num_Asesores_Hombre !== null">
                        {{ Num_Asesores_Hombre }}
                    </p>
                    <p v-else>
                        Loading...
                    </p>
                </div>
            </div>
            <div class="row" style="margin-top: 45px;">
                <div class="col-md-1" style="text-align: left;"></div>
                <div class="col-md-5" style="text-align: left;">
                    <label for="Num_Asesores_Mujer">Numero de Asesoras Mujeres: </label>
                </div>
                <div class="col-md-3">
                    <p v-if="Num_Asesores_Mujer !== null">
                        {{ Num_Asesores_Mujer }}
                    </p>
                    <p v-else>
                        Loading...
                    </p>
                </div>
            </div>
            <div class="row" style="margin-top: 45px;">
                <div class="col-md-1" style="text-align: left;"></div>
                <div class="col-md-5" style="text-align: left;">
                    <label for="Num_Asesores_Intersexual">Numero de Asesores Intersexuales: </label>
                </div>
                <div class="col-md-3">
                    <p v-if="Num_Asesores_Intersexual !== null">
                        {{ Num_Asesores_Intersexual }}
                    </p>
                    <p v-else>
                        Loading...
                    </p>
                </div>
            </div>
            <div class="row" style="margin-top: 45px;">
                <div class="col-md-1" style="text-align: left;"></div>
                <div class="col-md-5" style="text-align: left;">
                    <label for="Num_Asesores_Orientacion_Homo">Numero de Asesores Homosexuales: </label>
                </div>
                <div class="col-md-3">
                    <p v-if="Num_Asesores_Orientacion_Homo !== null">
                        {{ Num_Asesores_Orientacion_Homo }}
                    </p>
                    <p v-else>
                        Loading...
                    </p>
                </div>
            </div>
            <div class="row" style="margin-top: 45px;">
                <div class="col-md-1" style="text-align: left;"></div>
                <div class="col-md-5" style="text-align: left;">
                    <label for="Num_Asesores_Orientacion_Hetero">Numero de Asesores Heterosexuales: </label>
                </div>
                <div class="col-md-3">
                    <p v-if="Num_Asesores_Orientacion_Hetero !== null">
                        {{ Num_Asesores_Orientacion_Hetero }}
                    </p>
                    <p v-else>
                        Loading...
                    </p>
                </div>
            </div>
            <div class="row" style="margin-top: 45px;">
                <div class="col-md-1" style="text-align: left;"></div>
                <div class="col-md-5" style="text-align: left;">
                    <label for="Num_Asesores_Orientacion_Bi">Numero de Asesores Bisexuales: </label>
                </div>
                <div class="col-md-3">
                    <p v-if="Num_Asesores_Orientacion_Bi !== null">
                        {{ Num_Asesores_Orientacion_Bi }}
                    </p>
                    <p v-else>
                        Loading...
                    </p>
                </div>
            </div>
            <div class="row" style="margin-top: 45px;">
                <div class="col-md-1" style="text-align: left;"></div>
                <div class="col-md-5" style="text-align: left;">
                    <label for="Num_Asesores_Orientacion_Otro">Numero de Asesores Otra Orientacion Sexual: </label>
                </div>
                <div class="col-md-3">
                    <p v-if="Num_Asesores_Orientacion_Otro !== null">
                        {{ Num_Asesores_Orientacion_Otro }}
                    </p>
                    <p v-else>
                        Loading...
                    </p>
                </div>
            </div>
            <div class="row" style="margin-top: 45px;">
                <div class="col-md-1" style="text-align: left;"></div>
                <div class="col-md-5" style="text-align: left;">
                    <label for="Num_Asesores_Conflicto_Armado">Numero de Asesores Victimas del Conflicto Armado: </label>
                </div>
                <div class="col-md-3">
                    <p v-if="Num_Asesores_Conflicto_Armado !== null">
                        {{ Num_Asesores_Conflicto_Armado }}
                    </p>
                    <p v-else>
                        Loading...
                    </p>
                </div>
            </div>
            <div class="row" style="margin-top: 45px;">
                <div class="col-md-1" style="text-align: left;"></div>
                <div class="col-md-5" style="text-align: left;">
                    <label for="Num_Asesores_Reincorporacion">Numero de Asesores Poblacion en Reincorporacion: </label>
                </div>
                <div class="col-md-3">
                    <p v-if="Num_Asesores_Reincorporacion !== null">
                        {{ Num_Asesores_Reincorporacion }}
                    </p>
                    <p v-else>
                        Loading...
                    </p>
                </div>
            </div>
            <div class="row" style="margin-top: 45px;">
                <div class="col-md-1" style="text-align: left;"></div>
                <div class="col-md-5" style="text-align: left;">
                    <label for="Num_Asesores_Etnia">Numero de Asesores Pertenecientes a un Grupo Etnico: </label>
                </div>
                <div class="col-md-3">
                    <p v-if="Num_Asesores_Etnia !== null">
                        {{ Num_Asesores_Etnia }}
                    </p>
                    <p v-else>
                        Loading...
                    </p>
                </div>
            </div>
            <div class="row" style="margin-top: 45px;">
                <div class="col-md-1" style="text-align: left;"></div>
                <div class="col-md-5" style="text-align: left;">
                    <label for="Num_Asesores_Indigena">Numero de Asesores de Etnia Indigena: </label>
                </div>
                <div class="col-md-3">
                    <p v-if="Num_Asesores_Indigena !== null">
                        {{ Num_Asesores_Indigena }}
                    </p>
                    <p v-else>
                        Loading...
                    </p>
                </div>
            </div>
            <div class="row" style="margin-top: 45px;">
                <div class="col-md-1" style="text-align: left;"></div>
                <div class="col-md-5" style="text-align: left;">
                    <label for="Num_Asesores_Gitano">Numero de Asesores de Etnia Gitana: </label>
                </div>
                <div class="col-md-3">
                    <p v-if="Num_Asesores_Gitano !== null">
                        {{ Num_Asesores_Gitano }}
                    </p>
                    <p v-else>
                        Loading...
                    </p>
                </div>
            </div>
            <div class="row" style="margin-top: 45px;">
                <div class="col-md-1" style="text-align: left;"></div>
                <div class="col-md-5" style="text-align: left;">
                    <label for="Num_Asesores_Raizal">Numero de Asesores de Etnia Raizal: </label>
                </div>
                <div class="col-md-3">
                    <p v-if="Num_Asesores_Raizal !== null">
                        {{ Num_Asesores_Raizal }}
                    </p>
                    <p v-else>
                        Loading...
                    </p>
                </div>
            </div>
            <div class="row" style="margin-top: 45px;">
                <div class="col-md-1" style="text-align: left;"></div>
                <div class="col-md-5" style="text-align: left;">
                    <label for="Num_Asesores_Palenquero">Numero de Asesores de Etnia Afrodescendiente: </label>
                </div>
                <div class="col-md-3">
                    <p v-if="Num_Asesores_Palenquero !== null">
                        {{ Num_Asesores_Palenquero }}
                    </p>
                    <p v-else>
                        Loading...
                    </p>
                </div>
            </div>
            <div class="row" style="margin-top: 45px;">
                <div class="col-md-1" style="text-align: left;"></div>
                <div class="col-md-5" style="text-align: left;">
                    <label for="Num_Asesores_Afro">Numero de Asesores de Etnia Palenquera: </label>
                </div>
                <div class="col-md-3">
                    <p v-if="Num_Asesores_Afro !== null">
                        {{ Num_Asesores_Afro }}
                    </p>
                    <p v-else>
                        Loading...
                    </p>
                </div>
            </div>
            <div class="row" style="margin-top: 45px;">
                <div class="col-md-1" style="text-align: left;"></div>
                <div class="col-md-5" style="text-align: left;">
                    <label for="Num_Asesores_Pdet">Numero de Asesores Provenientes de un municipio PDET: </label>
                </div>
                <div class="col-md-3">
                    <p v-if="Num_Asesores_Pdet !== null">
                        {{ Num_Asesores_Pdet }}
                    </p>
                    <p v-else>
                        Loading...
                    </p>
                </div>
            </div>
            <div class="row" style="margin-top: 45px;">
                <div class="col-md-1" style="text-align: left;"></div>
                <div class="col-md-5" style="text-align: left;">
                    <label for="Num_Asesores_Zomac">Numero de Asesores Provenientes de un municipio ZOMAC: </label>
                </div>
                <div class="col-md-3">
                    <p v-if="Num_Asesores_Zomac !== null">
                        {{ Num_Asesores_Zomac }}
                    </p>
                    <p v-else>
                        Loading...
                    </p>
                </div>
            </div>
            <div class="row" style="margin-top: 45px;">
                <div class="col-md-1" style="text-align: left;"></div>
                <div class="col-md-5" style="text-align: left;">
                    <label for="Num_Asesores_Discapacidad">Numero de Asesores Discapacitados: </label>
                </div>
                <div class="col-md-3">
                    <p v-if="Num_Asesores_Discapacidad !== null">
                        {{ Num_Asesores_Discapacidad }}
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
                Num_Asesores: null,
                Num_Asesorias: null,
                Num_Grupos_Asesorados: null,
                Num_Promedio_Asesorias: null,
                Num_Grupos_Por_Asesor: null,
                Num_Talleres: null,
                Num_Docentes_Vinculados: null,
                Num_Promedio_Horas_Docentes: null,
                Num_Promedio_Horas_Jovenes: null,
                Duracion_Proyectos: null,
                Pct_Vinculados: null,
                Monto_Financiacion: null,
                Monto_Promedio_Proyecto: null,
                Monto_Promedio_Por_Joven: null,
                Num_Asesores_Hombre: null,
                Num_Asesores_Mujer: null,
                Num_Asesores_Intersexual: null,
                Num_Asesores_Orientacion_Homo: null,
                Num_Asesores_Orientacion_Hetero: null,
                Num_Asesores_Orientacion_Bi: null,
                Num_Asesores_Orientacion_Otro: null,
                Num_Asesores_Conflicto_Armado: null,
                Num_Asesores_Reincorporacion: null,
                Num_Asesores_Etnia: null,
                Num_Asesores_Pdet: null,
                Num_Asesores_Zomac: null,
                Num_Asesores_Discapacidad: null,
                Num_Asesores_Indigena: null,
                Num_Asesores_Gitano: null,
                Num_Asesores_Raizal: null,
                Num_Asesores_Palenquero: null,
                Num_Asesores_Afro: null,
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
                selectedDepartamentos : [],
            };
        },
        methods: {
        async getData() {
            if(this.rolF === "Departamento"){
                if(this.startYear == this.endYear){
                    const response = await fetch(`${this.$baseRoute}/Acompaniamientos/filterAnioDepartamentoVisualizar/${this.startYear}/${this.id}/${this.token}?departamentos=${this.departamento}`);
                    if(response.ok){
                        const data = await response.json();
                        this.Num_Asesores = data.Num_Asesores;
                        this.Num_Asesorias = data.Num_Asesorias;
                        this.Num_Grupos_Asesorados = data.Num_Grupos_Asesorados;
                        this.Num_Promedio_Asesorias = data.Num_Promedio_Asesorias;
                        this.Num_Grupos_Por_Asesor = data.Num_Grupos_Por_Asesor;
                        this.Num_Talleres = data.Num_Talleres;
                        this.Num_Docentes_Vinculados = data.Num_Docentes_Vinculados;
                        this.Num_Promedio_Horas_Docentes = data.Num_Promedio_Horas_Docentes;
                        this.Num_Promedio_Horas_Jovenes = data.Num_Promedio_Horas_Jovenes;
                        this.Duracion_Proyectos = data.Duracion_Proyectos;
                        this.Pct_Vinculados = data.Pct_Vinculados;
                        this.Monto_Financiacion = data.Monto_Financiacion;
                        this.Monto_Promedio_Proyecto = data.Monto_Promedio_Proyecto;
                        this.Monto_Promedio_Por_Joven = data.Monto_Promedio_Por_Joven;
                        this.Num_Asesores_Hombre = data.Num_Asesores_Hombre;
                        this.Num_Asesores_Mujer = data.Num_Asesores_Mujer;
                        this.Num_Asesores_Intersexual = data.Num_Asesores_Intersexual;
                        this.Num_Asesores_Orientacion_Homo = data.Num_Asesores_Orientacion_Homo;
                        this.Num_Asesores_Orientacion_Hetero = data.Num_Asesores_Orientacion_Hetero;
                        this.Num_Asesores_Orientacion_Bi = data.Num_Asesores_Orientacion_Bi;
                        this.Num_Asesores_Orientacion_Otro = data.Num_Asesores_Orientacion_Otro;
                        this.Num_Asesores_Conflicto_Armado = data.Num_Asesores_Conflicto_Armado;
                        this.Num_Asesores_Reincorporacion = data.Num_Asesores_Reincorporacion;
                        this.Num_Asesores_Etnia = data.Num_Asesores_Etnia;
                        this.Num_Asesores_Pdet = data.Num_Asesores_Pdet;
                        this.Num_Asesores_Zomac = data.Num_Asesores_Zomac;
                        this.Num_Asesores_Discapacidad = data.Num_Asesores_Discapacidad;
                        this.Num_Asesores_Indigena = data.Num_Asesores_Indigena;
                        this.Num_Asesores_Gitano = data.Num_Asesores_Gitano;
                        this.Num_Asesores_Raizal = data.Num_Asesores_Raizal;
                        this.Num_Asesores_Palenquero = data.Num_Asesores_Palenquero;
                        this.Num_Asesores_Afro = data.Num_Asesores_Afro;
                    }
                }
                else if(this.endYear > this.startYear){
                    const response = await fetch(`${this.$baseRoute}/Acompaniamientos/filterAniosDepartamentosVisualizar/${this.startYear}/${this.endYear}/${this.id}/${this.token}?departamentos=${this.departamento}`);
                    if(response.ok){
                        const data = await response.json();
                        this.Num_Asesores = data.Num_Asesores;
                        this.Num_Asesorias = data.Num_Asesorias;
                        this.Num_Grupos_Asesorados = data.Num_Grupos_Asesorados;
                        this.Num_Promedio_Asesorias = data.Num_Promedio_Asesorias;
                        this.Num_Grupos_Por_Asesor = data.Num_Grupos_Por_Asesor;
                        this.Num_Talleres = data.Num_Talleres;
                        this.Num_Docentes_Vinculados = data.Num_Docentes_Vinculados;
                        this.Num_Promedio_Horas_Docentes = data.Num_Promedio_Horas_Docentes;
                        this.Num_Promedio_Horas_Jovenes = data.Num_Promedio_Horas_Jovenes;
                        this.Duracion_Proyectos = data.Duracion_Proyectos;
                        this.Pct_Vinculados = data.Pct_Vinculados;
                        this.Monto_Financiacion = data.Monto_Financiacion;
                        this.Monto_Promedio_Proyecto = data.Monto_Promedio_Proyecto;
                        this.Monto_Promedio_Por_Joven = data.Monto_Promedio_Por_Joven;
                        this.Num_Asesores_Hombre = data.Num_Asesores_Hombre;
                        this.Num_Asesores_Mujer = data.Num_Asesores_Mujer;
                        this.Num_Asesores_Intersexual = data.Num_Asesores_Intersexual;
                        this.Num_Asesores_Orientacion_Homo = data.Num_Asesores_Orientacion_Homo;
                        this.Num_Asesores_Orientacion_Hetero = data.Num_Asesores_Orientacion_Hetero;
                        this.Num_Asesores_Orientacion_Bi = data.Num_Asesores_Orientacion_Bi;
                        this.Num_Asesores_Orientacion_Otro = data.Num_Asesores_Orientacion_Otro;
                        this.Num_Asesores_Conflicto_Armado = data.Num_Asesores_Conflicto_Armado;
                        this.Num_Asesores_Reincorporacion = data.Num_Asesores_Reincorporacion;
                        this.Num_Asesores_Etnia = data.Num_Asesores_Etnia;
                        this.Num_Asesores_Pdet = data.Num_Asesores_Pdet;
                        this.Num_Asesores_Zomac = data.Num_Asesores_Zomac;
                        this.Num_Asesores_Discapacidad = data.Num_Asesores_Discapacidad;
                        this.Num_Asesores_Indigena = data.Num_Asesores_Indigena;
                        this.Num_Asesores_Gitano = data.Num_Asesores_Gitano;
                        this.Num_Asesores_Raizal = data.Num_Asesores_Raizal;
                        this.Num_Asesores_Palenquero = data.Num_Asesores_Palenquero;
                        this.Num_Asesores_Afro = data.Num_Asesores_Afro;
                }}}
            else if (this.rolF == 'Minciencias'){
                var cadena = ''
                for(var i = 0; i < this.selectedDepartamentos.length; i++){
                    if(i == 0){
                        cadena += this.selectedDepartamentos[i];
                    }
                    else{
                        cadena += ',' + this.selectedDepartamentos[i];
                    }
                }

                if(this.startYear == this.endYear){
                    const response = await fetch(`${this.$baseRoute}/Acompaniamientos/filterAnioDepartamentoVisualizar/${this.startYear}/${this.id}/${this.token}?departamentos=${cadena}`);
                    if(response.ok){
                        const data = await response.json();
                        this.Num_Asesores = data.Num_Asesores;
                        this.Num_Asesorias = data.Num_Asesorias;
                        this.Num_Grupos_Asesorados = data.Num_Grupos_Asesorados;
                        this.Num_Promedio_Asesorias = data.Num_Promedio_Asesorias;
                        this.Num_Grupos_Por_Asesor = data.Num_Grupos_Por_Asesor;
                        this.Num_Talleres = data.Num_Talleres;
                        this.Num_Docentes_Vinculados = data.Num_Docentes_Vinculados;
                        this.Num_Promedio_Horas_Docentes = data.Num_Promedio_Horas_Docentes;
                        this.Num_Promedio_Horas_Jovenes = data.Num_Promedio_Horas_Jovenes;
                        this.Duracion_Proyectos = data.Duracion_Proyectos;
                        this.Pct_Vinculados = data.Pct_Vinculados;
                        this.Monto_Financiacion = data.Monto_Financiacion;
                        this.Monto_Promedio_Proyecto = data.Monto_Promedio_Proyecto;
                        this.Monto_Promedio_Por_Joven = data.Monto_Promedio_Por_Joven;
                        this.Num_Asesores_Hombre = data.Num_Asesores_Hombre;
                        this.Num_Asesores_Mujer = data.Num_Asesores_Mujer;
                        this.Num_Asesores_Intersexual = data.Num_Asesores_Intersexual;
                        this.Num_Asesores_Orientacion_Homo = data.Num_Asesores_Orientacion_Homo;
                        this.Num_Asesores_Orientacion_Hetero = data.Num_Asesores_Orientacion_Hetero;
                        this.Num_Asesores_Orientacion_Bi = data.Num_Asesores_Orientacion_Bi;
                        this.Num_Asesores_Orientacion_Otro = data.Num_Asesores_Orientacion_Otro;
                        this.Num_Asesores_Conflicto_Armado = data.Num_Asesores_Conflicto_Armado;
                        this.Num_Asesores_Reincorporacion = data.Num_Asesores_Reincorporacion;
                        this.Num_Asesores_Etnia = data.Num_Asesores_Etnia;
                        this.Num_Asesores_Pdet = data.Num_Asesores_Pdet;
                        this.Num_Asesores_Zomac = data.Num_Asesores_Zomac;
                        this.Num_Asesores_Discapacidad = data.Num_Asesores_Discapacidad;
                        this.Num_Asesores_Indigena = data.Num_Asesores_Indigena;
                        this.Num_Asesores_Gitano = data.Num_Asesores_Gitano;
                        this.Num_Asesores_Raizal = data.Num_Asesores_Raizal;
                        this.Num_Asesores_Palenquero = data.Num_Asesores_Palenquero;
                        this.Num_Asesores_Afro = data.Num_Asesores_Afro;
                }
            }
            else if(this.endYear > this.startYear){
                const response = await fetch(`${this.$baseRoute}/Acompaniamientos/filterAniosDepartamentosVisualizar/${this.startYear}/${this.endYear}/${this.id}/${this.token}?departamentos=${cadena}`);
                if(response.ok){
                        const data = await response.json();
                        this.Num_Asesores = data.Num_Asesores;
                        this.Num_Asesorias = data.Num_Asesorias;
                        this.Num_Grupos_Asesorados = data.Num_Grupos_Asesorados;
                        this.Num_Promedio_Asesorias = data.Num_Promedio_Asesorias;
                        this.Num_Grupos_Por_Asesor = data.Num_Grupos_Por_Asesor;
                        this.Num_Talleres = data.Num_Talleres;
                        this.Num_Docentes_Vinculados = data.Num_Docentes_Vinculados;
                        this.Num_Promedio_Horas_Docentes = data.Num_Promedio_Horas_Docentes;
                        this.Num_Promedio_Horas_Jovenes = data.Num_Promedio_Horas_Jovenes;
                        this.Duracion_Proyectos = data.Duracion_Proyectos;
                        this.Pct_Vinculados = data.Pct_Vinculados;
                        this.Monto_Financiacion = data.Monto_Financiacion;
                        this.Monto_Promedio_Proyecto = data.Monto_Promedio_Proyecto;
                        this.Monto_Promedio_Por_Joven = data.Monto_Promedio_Por_Joven;
                        this.Num_Asesores_Hombre = data.Num_Asesores_Hombre;
                        this.Num_Asesores_Mujer = data.Num_Asesores_Mujer;
                        this.Num_Asesores_Intersexual = data.Num_Asesores_Intersexual;
                        this.Num_Asesores_Orientacion_Homo = data.Num_Asesores_Orientacion_Homo;
                        this.Num_Asesores_Orientacion_Hetero = data.Num_Asesores_Orientacion_Hetero;
                        this.Num_Asesores_Orientacion_Bi = data.Num_Asesores_Orientacion_Bi;
                        this.Num_Asesores_Orientacion_Otro = data.Num_Asesores_Orientacion_Otro;
                        this.Num_Asesores_Conflicto_Armado = data.Num_Asesores_Conflicto_Armado;
                        this.Num_Asesores_Reincorporacion = data.Num_Asesores_Reincorporacion;
                        this.Num_Asesores_Etnia = data.Num_Asesores_Etnia;
                        this.Num_Asesores_Pdet = data.Num_Asesores_Pdet;
                        this.Num_Asesores_Zomac = data.Num_Asesores_Zomac;
                        this.Num_Asesores_Discapacidad = data.Num_Asesores_Discapacidad;
                        this.Num_Asesores_Indigena = data.Num_Asesores_Indigena;
                        this.Num_Asesores_Gitano = data.Num_Asesores_Gitano;
                        this.Num_Asesores_Raizal = data.Num_Asesores_Raizal;
                        this.Num_Asesores_Palenquero = data.Num_Asesores_Palenquero;
                        this.Num_Asesores_Afro = data.Num_Asesores_Afro;
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
        getDatos(){
            if(this.startYear != null && this.endYear != null && this.rolF == 'Departamento'){
                        this.getData();
                        return true;
                }
            return false;
        },
        whenClicked(){
            if(this.startYear != null && this.endYear != null && this.rolF == 'Minciencias'){
                        this.getData();
                        return true;
                }
            return false;
        }  

    },  
    computed: {
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
        this.id = jwtDecode(this.token).id;
        const rol = await fetch (`${this.$baseRoute}/tokens/${this.id}/?token=${this.token}`);
        const resp = await rol.json();
        this.rolF = resp.rol; // Asigna el valor a 'rolF' correctamente
        if(this.rolF === "Departamento"){
            this.departamental = true;
            const departamentoData = await fetch (`${this.$baseRoute}/tokens/${this.id}/departamento?token=${this.token}`);
            const departamentoJson = await departamentoData.json();
            this.departamento = departamentoJson.departamento; // Asegúrate de asignar correctamente 'departamento'
        }
    }
    };
</script>
