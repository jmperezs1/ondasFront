<template>

    <div>
        <div class="row">
            <!-- Start Year Input -->
            <div class="col-md-2" style="text-align: center;">
                <label for="startYear">Año de inicio:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" @change="getDatos" id="startYear" v-model.number="startYear" min="1900" max="2099" step="1" style="background-color: #D9D9D9; border: 0;" :style="{border: (startYear < 1900 || startYear > 2099) ? '1px solid red' : ''}">
            </div>
        
            <!-- End Year Input -->
            <div class="col-md-2" style="text-align: center;">
                <label for="endYear">Año de fin:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" @change="getDatos" id="endYear" v-model.number="endYear" min="1900" max="2099" step="1" style="background-color: #D9D9D9; border: 0;" :style="{border: (endYear < 1900 || endYear > 2099) ? '1px solid red' : ''}">
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

    <div class="col-md-12 text-center" v-if="this.rolF ==  'Minciencias'" style="margin-bottom: 20px;">
          <button type="button" @click="whenClicked" class="btn btn-primary">Buscar</button>
    </div>

    <div class="row" v-if="Num_Convocatorias != null" style="margin-top: 45px; margin-left: 60px;">
        <h2 style="margin-left: 150px;">Informacion recolectada: </h2>
        <div>
            <div class="row" style="margin-top: 45px;">
                <div class="col-md-1" style="text-align: left;"></div>
                <div class="col-md-5" style="text-align: left;">
                    <label for="Num_Convocatorias">Número de convocatorias implementadas en el año:</label>
                </div>
                <div class="col-md-3">
                    <p v-if="Num_Convocatorias !== null">
                        {{ Num_Convocatorias }}
                    </p>
                    <p v-else>
                        Loading...
                    </p>
                </div>
            </div>
            <div class="row" style="margin-top: 45px;">
                <div class="col-md-1" style="text-align: left;"></div>
                <div class="col-md-5" style="text-align: left;">
                    <label for="Num_Grupos_Investigacion_Aplican">Número de grupos de investigación que aplican a las convocatorias: </label>
                </div>
                <div class="col-md-3">
                    <p v-if="Num_Grupos_Investigacion_Aplican !== null">
                        {{ Num_Grupos_Investigacion_Aplican }}
                    </p>
                    <p v-else>
                        Loading...
                    </p>
                </div>
            </div> 
            <div class="row" style="margin-top: 45px;">
                <div class="col-md-1" style="text-align: left;"></div>
                <div class="col-md-5" style="text-align: left;">
                    <label for="Num_Instituciones_Educativas_Aplican">Número de instituciones educativas que aplican a las convocatorias: </label>
                </div>
                <div class="col-md-3">
                    <p v-if="Num_Instituciones_Educativas_Aplican !== null">
                        {{ Num_Instituciones_Educativas_Aplican }}
                    </p>
                    <p v-else>
                        Loading...
                    </p>
                </div>
            </div>
            <div class="row" style="margin-top: 45px;">
                <div class="col-md-1" style="text-align: left;"></div>
                <div class="col-md-5" style="text-align: left;">
                    <label for="Num_Vinculados">Número promedio de asesorías que recibe cada grupo de investigación: </label>
                </div>
                <div class="col-md-3">
                    <p v-if="Num_Vinculados !== null">
                        {{ Num_Vinculados }}
                    </p>
                    <p v-else>
                        Loading...
                    </p>
                </div>
            </div>
            <div class="row" style="margin-top: 45px;">
                <div class="col-md-1" style="text-align: left;"></div>
                <div class="col-md-5" style="text-align: left;">
                    <label for="Num_Docentes">Número de docentes vinculados al programa: </label>
                </div>
                <div class="col-md-3">
                    <p v-if="Num_Docentes !== null">
                        {{ Num_Docentes }}
                    </p>
                    <p v-else>
                        Loading...
                    </p>
                </div>
            </div>
            <div class="row" style="margin-top: 45px;">
                <div class="col-md-1" style="text-align: left;"></div>
                <div class="col-md-5" style="text-align: left;">
                    <label for="Num_Grupos_Investigacion">Número de grupos de investigación vinculados al programa: </label>
                </div>
                <div class="col-md-3">
                    <p v-if="Num_Grupos_Investigacion !== null">
                        {{ Num_Grupos_Investigacion }}
                    </p>
                    <p v-else>
                        Loading...
                    </p>
                </div>
            </div>
            <div class="row" style="margin-top: 45px;">
                <div class="col-md-1" style="text-align: left;"></div>
                <div class="col-md-5" style="text-align: left;">
                    <label for="Num_Instituciones_Educativas_Vinculadas">Número de instituciones educativas vinculadas al programa: </label>
                </div>
                <div class="col-md-3">
                    <p v-if="Num_Instituciones_Educativas_Vinculadas !== null">
                        {{ Num_Instituciones_Educativas_Vinculadas }}
                    </p>
                    <p v-else>
                        Loading...
                    </p>
                </div>
            </div>
            <div class="row" style="margin-top: 45px;">
                <div class="col-md-1" style="text-align: left;"></div>
                <div class="col-md-5" style="text-align: left;">
                    <label for="Num_Proyectos">Número de proyectos de investigación apoyados por el programa: </label>
                </div>
                <div class="col-md-3">
                    <p v-if="Num_Proyectos !== null">
                        {{ Num_Proyectos }}
                    </p>
                    <p v-else>
                        Loading...
                    </p>
                </div>
            </div>
            <div class="row" style="margin-top: 45px;">
                <div class="col-md-1" style="text-align: left;"></div>
                <div class="col-md-5" style="text-align: left;">
                    <label for="Num_Entre_6_8">Numero de niños vinculados con edad entre los 6 y 8 años: </label>
                </div>
                <div class="col-md-3">
                    <p v-if="Num_Entre_6_8 !== null">
                        {{ Num_Entre_6_8 }}
                    </p>
                    <p v-else>
                        Loading...
                    </p>
                </div>
            </div>
            <div class="row" style="margin-top: 45px;">
                <div class="col-md-1" style="text-align: left;"></div>
                <div class="col-md-5" style="text-align: left;">
                    <label for="Num_Entre_9_11">Numero de niños vinculados con edad entre los 9 y 11 años: </label>
                </div>
                <div class="col-md-3">
                    <p v-if="Num_Entre_9_11 !== null">
                        {{ Num_Entre_9_11 }}
                    </p>
                    <p v-else>
                        Loading...
                    </p>
                </div>
            </div>
            <div class="row" style="margin-top: 45px;">
                <div class="col-md-1" style="text-align: left;"></div>
                <div class="col-md-5" style="text-align: left;">
                    <label for="Num_Entre_12_14">Numero de niños vinculados con edad entre los 12 y 14 años: </label>
                </div>
                <div class="col-md-3">
                    <p v-if="Num_Entre_12_14 !== null">
                        {{ Num_Entre_12_14 }}
                    </p>
                    <p v-else>
                        Loading...
                    </p>
                </div>
            </div>
            <div class="row" style="margin-top: 45px;">
                <div class="col-md-1" style="text-align: left;"></div>
                <div class="col-md-5" style="text-align: left;">
                    <label for="Num_Entre_15_17">Numero de niños vinculados con edad entre los 15 y 17 años: </label>
                </div>
                <div class="col-md-3">
                    <p v-if="Num_Entre_15_17 !== null">
                        {{ Num_Entre_15_17 }}
                    </p>
                    <p v-else>
                        Loading...
                    </p>
                </div>
            </div>
            <div class="row" style="margin-top: 45px;">
                <div class="col-md-1" style="text-align: left;"></div>
                <div class="col-md-5" style="text-align: left;">
                    <label for="Num_Ninos_M">Numero de niños vinculados de genero masculino: </label>
                </div>
                <div class="col-md-3">
                    <p v-if="Num_Ninos_M !== null">
                        {{ Num_Ninos_M }}
                    </p>
                    <p v-else>
                        Loading...
                    </p>
                </div>
            </div>
            <div class="row" style="margin-top: 45px;">
                <div class="col-md-1" style="text-align: left;"></div>
                <div class="col-md-5" style="text-align: left;">
                    <label for="Num_Ninos_F">Numero de niñas vinculadas de genero femenino:</label>
                </div>
                <div class="col-md-3">
                    <p v-if="Num_Ninos_F !== null">
                        {{ Num_Ninos_F }}
                    </p>
                    <p v-else>
                        Loading...
                    </p>
                </div>
            </div>
            <div class="row" style="margin-top: 45px;">
                <div class="col-md-1" style="text-align: left;"></div>
                <div class="col-md-5" style="text-align: left;">
                    <label for="Num_Ninos_I">Numero de niños vinculados de genero intersexual:</label>
                </div>
                <div class="col-md-3">
                    <p v-if="Num_Ninos_I !== null">
                        {{ Num_Ninos_I }}
                    </p>
                    <p v-else>
                        Loading...
                    </p>
                </div>
            </div>
            <div class="row" style="margin-top: 45px;">
                <div class="col-md-1" style="text-align: left;"></div>
                <div class="col-md-5" style="text-align: left;">
                    <label for="Num_Ninios_Conflicto_Armado">Numero de niños vinculados victima del conflicto armado:</label>
                </div>
                <div class="col-md-3">
                    <p v-if="Num_Ninios_Conflicto_Armado !== null">
                        {{ Num_Ninios_Conflicto_Armado }}
                    </p>
                    <p v-else>
                        Loading...
                    </p>
                </div>
            </div>
            <div class="row" style="margin-top: 45px;">
                <div class="col-md-1" style="text-align: left;"></div>
                <div class="col-md-5" style="text-align: left;">
                    <label for="Num_Ninios_Reincorporacion">Numero de niños vinculados parte de poblacion en reincorporacion: </label>
                </div>
                <div class="col-md-3">
                    <p v-if="Num_Ninios_Reincorporacion !== null">
                        {{ Num_Ninios_Reincorporacion }}
                    </p>
                    <p v-else>
                        Loading...
                    </p>
                </div>
            </div>
            <div class="row" style="margin-top: 45px;">
                <div class="col-md-1" style="text-align: left;"></div>
                <div class="col-md-5" style="text-align: left;">
                    <label for="Num_Ninios_Etnia">Numero de niños vinculados que pertenecen a un grupo etnico: </label>
                </div>
                <div class="col-md-3">
                    <p v-if="Num_Ninios_Etnia !== null">
                        {{ Num_Ninios_Etnia }}
                    </p>
                    <p v-else>
                        Loading...
                    </p>
                </div>
            </div>
            <div class="row" style="margin-top: 45px;">
                <div class="col-md-1" style="text-align: left;"></div>
                <div class="col-md-5" style="text-align: left;">
                    <label for="Num_Ninios_Indigena">Numero de niños vinculados de etnia indigena: </label>
                </div>
                <div class="col-md-3">
                    <p v-if="Num_Ninios_Indigena !== null">
                        {{ Num_Ninios_Indigena }}
                    </p>
                    <p v-else>
                        Loading...
                    </p>
                </div>
            </div>
            <div class="row" style="margin-top: 45px;">
                <div class="col-md-1" style="text-align: left;"></div>
                <div class="col-md-5" style="text-align: left;">
                    <label for="Num_Ninios_Gitano">Numero de niños vinculados de etnia gitana: </label>
                </div>
                <div class="col-md-3">
                    <p v-if="Num_Ninios_Gitano !== null">
                        {{ Num_Ninios_Gitano }}
                    </p>
                    <p v-else>
                        Loading...
                    </p>
                </div>
            </div>
            <div class="row" style="margin-top: 45px;">
                <div class="col-md-1" style="text-align: left;"></div>
                <div class="col-md-5" style="text-align: left;">
                    <label for="Num_Ninios_Raizal">Numero de niños vinculados de etnia raizal: </label>
                </div>
                <div class="col-md-3">
                    <p v-if="Num_Ninios_Raizal !== null">
                        {{ Num_Ninios_Raizal }}
                    </p>
                    <p v-else>
                        Loading...
                    </p>
                </div>
            </div>
            <div class="row" style="margin-top: 45px;">
                <div class="col-md-1" style="text-align: left;"></div>
                <div class="col-md-5" style="text-align: left;">
                    <label for="Num_Ninios_Palenquero">Numero de niños vinculados de etnia palenquera: </label>
                </div>
                <div class="col-md-3">
                    <p v-if="Num_Ninios_Palenquero !== null">
                        {{ Num_Ninios_Palenquero }}
                    </p>
                    <p v-else>
                        Loading...
                    </p>
                </div>
            </div>
            <div class="row" style="margin-top: 45px;">
                <div class="col-md-1" style="text-align: left;"></div>
                <div class="col-md-5" style="text-align: left;">
                    <label for="Num_Ninios_Afro">Numero de niños vinculados de etnia afrodescendiente: </label>
                </div>
                <div class="col-md-3">
                    <p v-if="Num_Ninios_Afro !== null">
                        {{ Num_Ninios_Afro }}
                    </p>
                    <p v-else>
                        Loading...
                    </p>
                </div>
            </div>
            <div class="row" style="margin-top: 45px;">
                <div class="col-md-1" style="text-align: left;"></div>
                <div class="col-md-5" style="text-align: left;">
                    <label for="Num_Ninios_Pdet">Numero de niños vinculados provenientes de un municipio PDET: </label>
                </div>
                <div class="col-md-3">
                    <p v-if="Num_Ninios_Pdet !== null">
                        {{ Num_Ninios_Pdet }}
                    </p>
                    <p v-else>
                        Loading...
                    </p>
                </div>
            </div>
            <div class="row" style="margin-top: 45px;">
                <div class="col-md-1" style="text-align: left;"></div>
                <div class="col-md-5" style="text-align: left;">
                    <label for="Num_Ninios_Zomac">Numero de niños vinculados provenientes de un municipio ZOMAC: </label>
                </div>
                <div class="col-md-3">
                    <p v-if="Num_Ninios_Zomac !== null">
                        {{ Num_Ninios_Zomac }}
                    </p>
                    <p v-else>
                        Loading...
                    </p>
                </div>
            </div>
            <div class="row" style="margin-top: 45px;">
                <div class="col-md-1" style="text-align: left;"></div>
                <div class="col-md-5" style="text-align: left;">
                    <label for="Num_Ninios_Discapacidad">Numero de niños vinculados discapacitados: </label>
                </div>
                <div class="col-md-3">
                    <p v-if="Num_Ninios_Discapacidad !== null">
                        {{ Num_Ninios_Discapacidad }}
                    </p>
                    <p v-else>
                        Loading...
                    </p>
                </div>
            </div>
            <div class="row" style="margin-top: 45px;">
                <div class="col-md-1" style="text-align: left;"></div>
                <div class="col-md-5" style="text-align: left;">
                    <label for="Num_Docentes_Masculino_Vinculados">Numero de docentes vinculados de genero masculino: </label>
                </div>
                <div class="col-md-3">
                    <p v-if="Num_Docentes_Masculino_Vinculados !== null">
                        {{ Num_Docentes_Masculino_Vinculados }}
                    </p>
                    <p v-else>
                        Loading...
                    </p>
                </div>
            </div>
            <div class="row" style="margin-top: 45px;">
                <div class="col-md-1" style="text-align: left;"></div>
                <div class="col-md-5" style="text-align: left;">
                    <label for="Num_Docentes_Femenino_Vinculados">Numero de docentes vinculados de genero femenino: </label>
                </div>
                <div class="col-md-3">
                    <p v-if="Num_Docentes_Femenino_Vinculados !== null">
                        {{ Num_Docentes_Femenino_Vinculados }}
                    </p>
                    <p v-else>
                        Loading...
                    </p>
                </div>
            </div>
            <div class="row" style="margin-top: 45px;">
                <div class="col-md-1" style="text-align: left;"></div>
                <div class="col-md-5" style="text-align: left;">
                    <label for="Num_Docentes_Intersexual_Vinculados">Numero de docentes vinculados de genero intersexual: </label>
                </div>
                <div class="col-md-3">
                    <p v-if="Num_Docentes_Intersexual_Vinculados !== null">
                        {{ Num_Docentes_Intersexual_Vinculados }}
                    </p>
                    <p v-else>
                        Loading...
                    </p>
                </div>
            </div>
            <div class="row" style="margin-top: 45px;">
                <div class="col-md-1" style="text-align: left;"></div>
                <div class="col-md-5" style="text-align: left;">
                    <label for="Num_Docentes_Orientacion_Homo">Numero de docentes vinculados de orientacion sexual homosexual:</label>
                </div>
                <div class="col-md-3">
                    <p v-if="Num_Docentes_Orientacion_Homo !== null">
                        {{ Num_Docentes_Orientacion_Homo }}
                    </p>
                    <p v-else>
                        Loading...
                    </p>
                </div>
            </div>
            <div class="row" style="margin-top: 45px;">
                <div class="col-md-1" style="text-align: left;"></div>
                <div class="col-md-5" style="text-align: left;">
                    <label for="Num_Docentes_Orientacion_Hetero">Numero de docentes vinculados de orientacion sexual heterosexual: </label>
                </div>
                <div class="col-md-3">
                    <p v-if="Num_Docentes_Orientacion_Hetero !== null">
                        {{ Num_Docentes_Orientacion_Hetero }}
                    </p>
                    <p v-else>
                        Loading...
                    </p>
                </div>
            </div>
            <div class="row" style="margin-top: 45px;">
                <div class="col-md-1" style="text-align: left;"></div>
                <div class="col-md-5" style="text-align: left;">
                    <label for="Num_Docentes_Orientacion_Bi">Numero de docentes vinculados de orientacion sexual bisexual: </label>
                </div>
                <div class="col-md-3">
                    <p v-if="Num_Docentes_Orientacion_Bi !== null">
                        {{ Num_Docentes_Orientacion_Bi }}
                    </p>
                    <p v-else>
                        Loading...
                    </p>
                </div>
            </div>
            <div class="row" style="margin-top: 45px;">
                <div class="col-md-1" style="text-align: left;"></div>
                <div class="col-md-5" style="text-align: left;">
                    <label for="Num_Docentes_Orientacion_Otro">Numero de docentes vinculados de otra orientacion sexual: </label>
                </div>
                <div class="col-md-3">
                    <p v-if="Num_Docentes_Orientacion_Otro !== null">
                        {{ Num_Docentes_Orientacion_Otro }}
                    </p>
                    <p v-else>
                        Loading...
                    </p>
                </div>
            </div>
            <div class="row" style="margin-top: 45px;">
                <div class="col-md-1" style="text-align: left;"></div>
                <div class="col-md-5" style="text-align: left;">
                    <label for="Num_Docentes_Conflicto_Armado">Numero de docentes vinculados victima del conflicto armado: </label>
                </div>
                <div class="col-md-3">
                    <p v-if="Num_Docentes_Conflicto_Armado !== null">
                        {{ Num_Docentes_Conflicto_Armado }}
                    </p>
                    <p v-else>
                        Loading...
                    </p>
                </div>
            </div>
            <div class="row" style="margin-top: 45px;">
                <div class="col-md-1" style="text-align: left;"></div>
                <div class="col-md-5" style="text-align: left;">
                    <label for="Num_Docentes_Reincorporacion">Numero de docentes vinculados parte de poblacion en reincorporacion: </label>
                </div>
                <div class="col-md-3">
                    <p v-if="Num_Docentes_Reincorporacion !== null">
                        {{ Num_Docentes_Reincorporacion }}
                    </p>
                    <p v-else>
                        Loading...
                    </p>
                </div>
            </div>
            <div class="row" style="margin-top: 45px;">
                <div class="col-md-1" style="text-align: left;"></div>
                <div class="col-md-5" style="text-align: left;">
                    <label for="Num_Docentes_Etnia">Numero de docentes vinculados que pertecen a algun grupo etnico: </label>
                </div>
                <div class="col-md-3">
                    <p v-if="Num_Docentes_Etnia !== null">
                        {{ Num_Docentes_Etnia }}
                    </p>
                    <p v-else>
                        Loading...
                    </p>
                </div>
            </div>
            <div class="row" style="margin-top: 45px;">
                <div class="col-md-1" style="text-align: left;"></div>
                <div class="col-md-5" style="text-align: left;">
                    <label for="Num_Docentes_Indigena">Numero de docentes vinculados de etnia indigena: </label>
                </div>
                <div class="col-md-3">
                    <p v-if="Num_Docentes_Indigena !== null">
                        {{ Num_Docentes_Indigena }}
                    </p>
                    <p v-else>
                        Loading...
                    </p>
                </div>
            </div>
            <div class="row" style="margin-top: 45px;">
                <div class="col-md-1" style="text-align: left;"></div>
                <div class="col-md-5" style="text-align: left;">
                    <label for="Num_Docentes_Gitano">Numero de docentes vinculados de etnia gitana: </label>
                </div>
                <div class="col-md-3">
                    <p v-if="Num_Docentes_Gitano !== null">
                        {{ Num_Docentes_Gitano }}
                    </p>
                    <p v-else>
                        Loading...
                    </p>
                </div>
            </div>
            <div class="row" style="margin-top: 45px;">
                <div class="col-md-1" style="text-align: left;"></div>
                <div class="col-md-5" style="text-align: left;">
                    <label for="Num_Docentes_Raizal">Numero de docentes vinculados de etnia raizal: </label>
                </div>
                <div class="col-md-3">
                    <p v-if="Num_Docentes_Raizal !== null">
                        {{ Num_Docentes_Raizal }}
                    </p>
                    <p v-else>
                        Loading...
                    </p>
                </div>
            </div>
            <div class="row" style="margin-top: 45px;">
                <div class="col-md-1" style="text-align: left;"></div>
                <div class="col-md-5" style="text-align: left;">
                    <label for="Num_Docentes_Palenquero">Numero de docentes vinculados de etnia palenquera: </label>
                </div>
                <div class="col-md-3">
                    <p v-if="Num_Docentes_Palenquero !== null">
                        {{ Num_Docentes_Palenquero }}
                    </p>
                    <p v-else>
                        Loading...
                    </p>
                </div>
            </div>
            <div class="row" style="margin-top: 45px;">
                <div class="col-md-1" style="text-align: left;"></div>
                <div class="col-md-5" style="text-align: left;">
                    <label for="Num_Docentes_Afro">Numero de docentes vinculados de etnia afrodescendiente: </label>
                </div>
                <div class="col-md-3">
                    <p v-if="Num_Docentes_Afro !== null">
                        {{ Num_Docentes_Afro }}
                    </p>
                    <p v-else>
                        Loading...
                    </p>
                </div>
            </div>
            <div class="row" style="margin-top: 45px;">
                <div class="col-md-1" style="text-align: left;"></div>
                <div class="col-md-5" style="text-align: left;">
                    <label for="Num_Docentes_Pdet">Numero de docentes vinculados provenientes de un municipio PDET: </label>
                </div>
                <div class="col-md-3">
                    <p v-if="Num_Docentes_Pdet !== null">
                        {{ Num_Docentes_Pdet }}
                    </p>
                    <p v-else>
                        Loading...
                    </p>
                </div>
            </div>
            <div class="row" style="margin-top: 45px;">
                <div class="col-md-1" style="text-align: left;"></div>
                <div class="col-md-5" style="text-align: left;">
                    <label for="Num_Docentes_Zomac">Numero de docentes vinculados provenientes de un municipio ZOMAC: </label>
                </div>
                <div class="col-md-3">
                    <p v-if="Num_Docentes_Zomac !== null">
                        {{ Num_Docentes_Zomac }}
                    </p>
                    <p v-else>
                        Loading...
                    </p>
                </div>
            </div>
            <div class="row" style="margin-top: 45px;">
                <div class="col-md-1" style="text-align: left;"></div>
                <div class="col-md-5" style="text-align: left;">
                    <label for="Num_Docentes_Discapacidad">Numero de docentes vinculados dispacitados </label>
                </div>
                <div class="col-md-3">
                    <p v-if="Num_Docentes_Discapacidad !== null">
                        {{ Num_Docentes_Discapacidad }}
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
        name: 'VisualizacionConvocatoria',
        data() {
            return {
                token: null,
                id: null,
                Num_Convocatorias : null,
                Num_Grupos_Investigacion_Aplican : null,
                Num_Instituciones_Educativas_Aplican : null,
                Num_Vinculados : null,
                Num_Docentes : null,
                Num_Grupos_Investigacion : null,
                Num_Instituciones_Educativas_Vinculadas : null,
                Num_Proyectos : null,
                Num_Entre_6_8 : null,
                Num_Entre_9_11 : null,
                Num_Entre_12_14 : null,
                Num_Entre_15_17 : null,
                Num_Ninos_M : null,
                Num_Ninos_F : null,
                Num_Ninos_I : null,
                Num_Ninios_Conflicto_Armado : null,
                Num_Ninios_Reincorporacion : null,
                Num_Ninios_Etnia : null,
                Num_Ninios_Indigena : null,
                Num_Ninios_Gitano : null,
                Num_Ninios_Raizal : null,
                Num_Ninios_Palenquero : null,
                Num_Ninios_Afro : null,
                Num_Ninios_Pdet : null,
                Num_Ninios_Zomac : null,
                Num_Ninios_Discapacidad : null,
                Num_Docentes_Masculino_Vinculados : null,
                Num_Docentes_Femenino_Vinculados : null,
                Num_Docentes_Intersexual_Vinculados : null,
                Num_Docentes_Orientacion_Hetero : null,
                Num_Docentes_Orientacion_Homo : null,
                Num_Docentes_Orientacion_Bi : null,
                Num_Docentes_Orientacion_Otro : null,
                Num_Docentes_Conflicto_Armado : null,
                Num_Docentes_Reincorporacion : null,
                Num_Docentes_Etnia : null,
                Num_Docentes_Indigena : null,
                Num_Docentes_Gitano : null,
                Num_Docentes_Raizal : null,
                Num_Docentes_Palenquero : null,
                Num_Docentes_Afro : null,
                Num_Docentes_Pdet : null, 
                Num_Docentes_Zomac : null,
                Num_Docentes_Discapacidad : null,
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
                    const response = await fetch(`https://localhost:7192/api/Convocatorias/filterAnioDepartamentoVisualizar/${this.startYear}/${this.id}/${this.token}?departamentos=${this.departamento}`);
                    if(response.ok){
                        const data = await response.json();
                        this.Num_Convocatorias = data.Num_Convocatorias;
                        this.Num_Grupos_Investigacion_Aplican = data.Num_Grupos_Investigacion_Aplican;
                        this.Num_Instituciones_Educativas_Aplican = data.Num_Instituciones_Educativas_Aplican;
                        this.Num_Vinculados = data.Num_Vinculados;
                        this.Num_Docentes = data.Num_Docentes;
                        this.Num_Grupos_Investigacion = data.Num_Grupos_Investigacion;
                        this.Num_Instituciones_Educativas_Vinculadas = data.Num_Instituciones_Educativas_Vinculadas;
                        this.Num_Proyectos = data.Num_Proyectos;
                        this.Num_Entre_6_8 = data.Num_Entre_6_8;
                        this.Num_Entre_9_11 = data.Num_Entre_9_11;
                        this.Num_Entre_12_14 = data.Num_Entre_12_14;
                        this.Num_Entre_15_17 = data.Num_Entre_15_17;
                        this.Num_Ninos_M = data.Num_Ninos_M;
                        this.Num_Ninos_F = data.Num_Ninos_F;
                        this.Num_Ninos_I = data.Num_Ninos_I;
                        this.Num_Ninios_Conflicto_Armado = data.Num_Ninios_Conflicto_Armado;
                        this.Num_Ninios_Reincorporacion = data.Num_Ninios_Reincorporacion;
                        this.Num_Ninios_Etnia = data.Num_Ninios_Etnia;
                        this.Num_Ninios_Indigena = data.Num_Ninios_Indigena;
                        this.Num_Ninios_Gitano = data.Num_Ninios_Gitano;
                        this.Num_Ninios_Raizal = data.Num_Ninios_Raizal;
                        this.Num_Ninios_Palenquero = data.Num_Ninios_Palenquero;
                        this.Num_Ninios_Afro = data.Num_Ninios_Afro;
                        this.Num_Ninios_Pdet = data.Num_Ninios_Pdet;
                        this.Num_Ninios_Zomac = data.Num_Ninios_Zomac;
                        this.Num_Ninios_Discapacidad = data.Num_Ninios_Discapacidad;
                        this.Num_Docentes_Masculino_Vinculados = data.Num_Docentes_Masculino_Vinculados;
                        this.Num_Docentes_Femenino_Vinculados = data.Num_Docentes_Femenino_Vinculados;
                        this.Num_Docentes_Intersexual_Vinculados = data.Num_Docentes_Intersexual_Vinculados;
                        this.Num_Docentes_Orientacion_Hetero = data.Num_Docentes_Orientacion_Hetero;
                        this.Num_Docentes_Orientacion_Homo = data.Num_Docentes_Orientacion_Homo;
                        this.Num_Docentes_Orientacion_Bi = data.Num_Docentes_Orientacion_Bi;
                        this.Num_Docentes_Orientacion_Otro = data.Num_Docentes_Orientacion_Otro;
                        this.Num_Docentes_Conflicto_Armado = data.Num_Docentes_Conflicto_Armado;
                        this.Num_Docentes_Reincorporacion = data.Num_Docentes_Reincorporacion;
                        this.Num_Docentes_Etnia = data.Num_Docentes_Etnia;
                        this.Num_Docentes_Indigena = data.Num_Docentes_Indigena;
                        this.Num_Docentes_Gitano = data.Num_Docentes_Gitano;
                        this.Num_Docentes_Raizal = data.Num_Docentes_Raizal;
                        this.Num_Docentes_Palenquero = data.Num_Docentes_Palenquero;
                        this.Num_Docentes_Afro = data.Num_Docentes_Afro;
                        this.Num_Docentes_Pdet = data.Num_Docentes_Pdet;
                        this.Num_Docentes_Zomac = data.Num_Docentes_Zomac;
                        this.Num_Docentes_Discapacidad = data.Num_Docentes_Discapacidad;
                    }
                }
                else if(this.endYear > this.startYear){
                    const response = await fetch(`https://localhost:7192/api/Convocatorias/filterAniosDepartamentosVisualizar/${this.startYear}/${this.endYear}/${this.id}/${this.token}?departamentos=${this.departamento}`);
                    if(response.ok){
                        const data = await response.json();
                        this.Num_Convocatorias = data.Num_Convocatorias;
                        this.Num_Grupos_Investigacion_Aplican = data.Num_Grupos_Investigacion_Aplican;
                        this.Num_Instituciones_Educativas_Aplican = data.Num_Instituciones_Educativas_Aplican;
                        this.Num_Vinculados = data.Num_Vinculados;
                        this.Num_Docentes = data.Num_Docentes;
                        this.Num_Grupos_Investigacion = data.Num_Grupos_Investigacion;
                        this.Num_Instituciones_Educativas_Vinculadas = data.Num_Instituciones_Educativas_Vinculadas;
                        this.Num_Proyectos = data.Num_Proyectos;
                        this.Num_Entre_6_8 = data.Num_Entre_6_8;
                        this.Num_Entre_9_11 = data.Num_Entre_9_11;
                        this.Num_Entre_12_14 = data.Num_Entre_12_14;
                        this.Num_Entre_15_17 = data.Num_Entre_15_17;
                        this.Num_Ninos_M = data.Num_Ninos_M;
                        this.Num_Ninos_F = data.Num_Ninos_F;
                        this.Num_Ninos_I = data.Num_Ninos_I;
                        this.Num_Ninios_Conflicto_Armado = data.Num_Ninios_Conflicto_Armado;
                        this.Num_Ninios_Reincorporacion = data.Num_Ninios_Reincorporacion;
                        this.Num_Ninios_Etnia = data.Num_Ninios_Etnia;
                        this.Num_Ninios_Indigena = data.Num_Ninios_Indigena;
                        this.Num_Ninios_Gitano = data.Num_Ninios_Gitano;
                        this.Num_Ninios_Raizal = data.Num_Ninios_Raizal;
                        this.Num_Ninios_Palenquero = data.Num_Ninios_Palenquero;
                        this.Num_Ninios_Afro = data.Num_Ninios_Afro;
                        this.Num_Ninios_Pdet = data.Num_Ninios_Pdet;
                        this.Num_Ninios_Zomac = data.Num_Ninios_Zomac;
                        this.Num_Ninios_Discapacidad = data.Num_Ninios_Discapacidad;
                        this.Num_Docentes_Masculino_Vinculados = data.Num_Docentes_Masculino_Vinculados;
                        this.Num_Docentes_Femenino_Vinculados = data.Num_Docentes_Femenino_Vinculados;
                        this.Num_Docentes_Intersexual_Vinculados = data.Num_Docentes_Intersexual_Vinculados;
                        this.Num_Docentes_Orientacion_Hetero = data.Num_Docentes_Orientacion_Hetero;
                        this.Num_Docentes_Orientacion_Homo = data.Num_Docentes_Orientacion_Homo;
                        this.Num_Docentes_Orientacion_Bi = data.Num_Docentes_Orientacion_Bi;
                        this.Num_Docentes_Orientacion_Otro = data.Num_Docentes_Orientacion_Otro;
                        this.Num_Docentes_Conflicto_Armado = data.Num_Docentes_Conflicto_Armado;
                        this.Num_Docentes_Reincorporacion = data.Num_Docentes_Reincorporacion;
                        this.Num_Docentes_Etnia = data.Num_Docentes_Etnia;
                        this.Num_Docentes_Indigena = data.Num_Docentes_Indigena;
                        this.Num_Docentes_Gitano = data.Num_Docentes_Gitano;
                        this.Num_Docentes_Raizal = data.Num_Docentes_Raizal;
                        this.Num_Docentes_Palenquero = data.Num_Docentes_Palenquero;
                        this.Num_Docentes_Afro = data.Num_Docentes_Afro;
                        this.Num_Docentes_Pdet = data.Num_Docentes_Pdet;
                        this.Num_Docentes_Zomac = data.Num_Docentes_Zomac;
                        this.Num_Docentes_Discapacidad = data.Num_Docentes_Discapacidad;
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
                    console.log(this.selectedDepartamentos)
                    const response = await fetch(`https://localhost:7192/api/Convocatorias/filterAnioDepartamentoVisualizar/${this.startYear}/${this.id}/${this.token}?departamentos=${cadena}`);
                    if(response.ok){
                        const data = await response.json();
                        this.Num_Convocatorias = data.Num_Convocatorias;
                        this.Num_Grupos_Investigacion_Aplican = data.Num_Grupos_Investigacion_Aplican;
                        this.Num_Instituciones_Educativas_Aplican = data.Num_Instituciones_Educativas_Aplican;
                        this.Num_Vinculados = data.Num_Vinculados;
                        this.Num_Docentes = data.Num_Docentes;
                        this.Num_Grupos_Investigacion = data.Num_Grupos_Investigacion;
                        this.Num_Instituciones_Educativas_Vinculadas = data.Num_Instituciones_Educativas_Vinculadas;
                        this.Num_Proyectos = data.Num_Proyectos;
                        this.Num_Entre_6_8 = data.Num_Entre_6_8;
                        this.Num_Entre_9_11 = data.Num_Entre_9_11;
                        this.Num_Entre_12_14 = data.Num_Entre_12_14;
                        this.Num_Entre_15_17 = data.Num_Entre_15_17;
                        this.Num_Ninos_M = data.Num_Ninos_M;
                        this.Num_Ninos_F = data.Num_Ninos_F;
                        this.Num_Ninos_I = data.Num_Ninos_I;
                        this.Num_Ninios_Conflicto_Armado = data.Num_Ninios_Conflicto_Armado;
                        this.Num_Ninios_Reincorporacion = data.Num_Ninios_Reincorporacion;
                        this.Num_Ninios_Etnia = data.Num_Ninios_Etnia;
                        this.Num_Ninios_Indigena = data.Num_Ninios_Indigena;
                        this.Num_Ninios_Gitano = data.Num_Ninios_Gitano;
                        this.Num_Ninios_Raizal = data.Num_Ninios_Raizal;
                        this.Num_Ninios_Palenquero = data.Num_Ninios_Palenquero;
                        this.Num_Ninios_Afro = data.Num_Ninios_Afro;
                        this.Num_Ninios_Pdet = data.Num_Ninios_Pdet;
                        this.Num_Ninios_Zomac = data.Num_Ninios_Zomac;
                        this.Num_Ninios_Discapacidad = data.Num_Ninios_Discapacidad;
                        this.Num_Docentes_Masculino_Vinculados = data.Num_Docentes_Masculino_Vinculados;
                        this.Num_Docentes_Femenino_Vinculados = data.Num_Docentes_Femenino_Vinculados;
                        this.Num_Docentes_Intersexual_Vinculados = data.Num_Docentes_Intersexual_Vinculados;
                        this.Num_Docentes_Orientacion_Hetero = data.Num_Docentes_Orientacion_Hetero;
                        this.Num_Docentes_Orientacion_Homo = data.Num_Docentes_Orientacion_Homo;
                        this.Num_Docentes_Orientacion_Bi = data.Num_Docentes_Orientacion_Bi;
                        this.Num_Docentes_Orientacion_Otro = data.Num_Docentes_Orientacion_Otro;
                        this.Num_Docentes_Conflicto_Armado = data.Num_Docentes_Conflicto_Armado;
                        this.Num_Docentes_Reincorporacion = data.Num_Docentes_Reincorporacion;
                        this.Num_Docentes_Etnia = data.Num_Docentes_Etnia;
                        this.Num_Docentes_Indigena = data.Num_Docentes_Indigena;
                        this.Num_Docentes_Gitano = data.Num_Docentes_Gitano;
                        this.Num_Docentes_Raizal = data.Num_Docentes_Raizal;
                        this.Num_Docentes_Palenquero = data.Num_Docentes_Palenquero;
                        this.Num_Docentes_Afro = data.Num_Docentes_Afro;
                        this.Num_Docentes_Pdet = data.Num_Docentes_Pdet;
                        this.Num_Docentes_Zomac = data.Num_Docentes_Zomac;
                        this.Num_Docentes_Discapacidad = data.Num_Docentes_Discapacidad;
                }
            }
            else if(this.endYear > this.startYear){
                const response = await fetch(`https://localhost:7192/api/Convocatorias/filterAniosDepartamentosVisualizar/${this.startYear}/${this.endYear}/${this.id}/${this.token}?departamentos=${cadena}`);
                if(response.ok){
                    const data = await response.json();
                        this.Num_Convocatorias = data.Num_Convocatorias;
                        this.Num_Grupos_Investigacion_Aplican = data.Num_Grupos_Investigacion_Aplican;
                        this.Num_Instituciones_Educativas_Aplican = data.Num_Instituciones_Educativas_Aplican;
                        this.Num_Vinculados = data.Num_Vinculados;
                        this.Num_Docentes = data.Num_Docentes;
                        this.Num_Grupos_Investigacion = data.Num_Grupos_Investigacion;
                        this.Num_Instituciones_Educativas_Vinculadas = data.Num_Instituciones_Educativas_Vinculadas;
                        this.Num_Proyectos = data.Num_Proyectos;
                        this.Num_Entre_6_8 = data.Num_Entre_6_8;
                        this.Num_Entre_9_11 = data.Num_Entre_9_11;
                        this.Num_Entre_12_14 = data.Num_Entre_12_14;
                        this.Num_Entre_15_17 = data.Num_Entre_15_17;
                        this.Num_Ninos_M = data.Num_Ninos_M;
                        this.Num_Ninos_F = data.Num_Ninos_F;
                        this.Num_Ninos_I = data.Num_Ninos_I;
                        this.Num_Ninios_Conflicto_Armado = data.Num_Ninios_Conflicto_Armado;
                        this.Num_Ninios_Reincorporacion = data.Num_Ninios_Reincorporacion;
                        this.Num_Ninios_Etnia = data.Num_Ninios_Etnia;
                        this.Num_Ninios_Indigena = data.Num_Ninios_Indigena;
                        this.Num_Ninios_Gitano = data.Num_Ninios_Gitano;
                        this.Num_Ninios_Raizal = data.Num_Ninios_Raizal;
                        this.Num_Ninios_Palenquero = data.Num_Ninios_Palenquero;
                        this.Num_Ninios_Afro = data.Num_Ninios_Afro;
                        this.Num_Ninios_Pdet = data.Num_Ninios_Pdet;
                        this.Num_Ninios_Zomac = data.Num_Ninios_Zomac;
                        this.Num_Ninios_Discapacidad = data.Num_Ninios_Discapacidad;
                        this.Num_Docentes_Masculino_Vinculados = data.Num_Docentes_Masculino_Vinculados;
                        this.Num_Docentes_Femenino_Vinculados = data.Num_Docentes_Femenino_Vinculados;
                        this.Num_Docentes_Intersexual_Vinculados = data.Num_Docentes_Intersexual_Vinculados;
                        this.Num_Docentes_Orientacion_Hetero = data.Num_Docentes_Orientacion_Hetero;
                        this.Num_Docentes_Orientacion_Homo = data.Num_Docentes_Orientacion_Homo;
                        this.Num_Docentes_Orientacion_Bi = data.Num_Docentes_Orientacion_Bi;
                        this.Num_Docentes_Orientacion_Otro = data.Num_Docentes_Orientacion_Otro;
                        this.Num_Docentes_Conflicto_Armado = data.Num_Docentes_Conflicto_Armado;
                        this.Num_Docentes_Reincorporacion = data.Num_Docentes_Reincorporacion;
                        this.Num_Docentes_Etnia = data.Num_Docentes_Etnia;
                        this.Num_Docentes_Indigena = data.Num_Docentes_Indigena;
                        this.Num_Docentes_Gitano = data.Num_Docentes_Gitano;
                        this.Num_Docentes_Raizal = data.Num_Docentes_Raizal;
                        this.Num_Docentes_Palenquero = data.Num_Docentes_Palenquero;
                        this.Num_Docentes_Afro = data.Num_Docentes_Afro;
                        this.Num_Docentes_Pdet = data.Num_Docentes_Pdet;
                        this.Num_Docentes_Zomac = data.Num_Docentes_Zomac;
                        this.Num_Docentes_Discapacidad = data.Num_Docentes_Discapacidad;
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
        const rol = await fetch (`https://localhost:7192/api/tokens/${this.id}/?token=${this.token}`);
        const resp = await rol.json();
        this.rolF = resp.rol; // Asigna el valor a 'rolF' correctamente
        if(this.rolF === "Departamento"){
            this.departamental = true;
            const departamentoData = await fetch (`https://localhost:7192/api/tokens/${this.id}/departamento?token=${this.token}`);
            const departamentoJson = await departamentoData.json();
            this.departamento = departamentoJson.departamento; // Asegúrate de asignar correctamente 'departamento'
        }
    }
    };
</script>
