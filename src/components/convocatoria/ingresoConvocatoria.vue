<template>
    <div class="row" style="margin-top: 45px;">
            <div class="col-md-1" style="text-align: left;"></div>
            <div class="col-md-5" style="text-align: left;">
                <label for="num_convocatorias">Ingrese el número de convocatorias implementadas en el año:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="num_convocatorias" min="0" v-model.number="Num_Convocatorias" style="background-color: #D9D9D9; border: 0;" :style="{border:'1px solid', borderColor: this.Num_Convocatorias<0 ? 'red' : ''}">
            </div>
            <div class="col-md-3" v-if="Num_Convocatorias<0" style="color: red; margin-top: 10px; text-align: center">El número de convocatorias debe ser POSITIVO.</div>
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-1" style="text-align: left;"></div>
            <div class="col-md-5" style="text-align: left;">
                <label for="num_grupos_investigacion_aplican">Ingrese el número de grupos de investigación que aplican a las convocatorias:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="num_grupos_investigacion_aplican" min="0" v-model.number="Num_Grupos_Investigacion_Aplican" style="background-color: #D9D9D9; border: 0;" :style="{border:'1px solid', borderColor: this.Num_Grupos_Investigacion_Aplican<0 ? 'red' : ''}">
            </div>
            <div class="col-md-3" v-if="Num_Grupos_Investigacion_Aplican<0" style="color: red; margin-top: 10px; text-align: center">El número de grupos de investigación debe ser POSITIVO.</div>
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-1" style="text-align: left;"></div>
            <div class="col-md-5" style="text-align: left;">
                <label for="num_instituciones_educativas_aplican">Ingrese el número de instituciones educativas que aplican a las convocatorias:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="num_instituciones_educativas_aplican" min="0" v-model.number="Num_Instituciones_Educativas_Aplican" style="background-color: #D9D9D9; border: 0;" :style="{border:'1px solid', borderColor: this.Num_Instituciones_Educativas_Aplican<0 ? 'red' : ''}">
            </div>
            <div class="col-md-3" v-if="Num_Instituciones_Educativas_Aplican<0" style="color: red; margin-top: 10px; text-align: center">El número de instituciones educativas debe ser POSITIVO.</div>
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-1" style="text-align: left;"></div>
            <div class="col-md-7" style="text-align: left;">
                <label>Ingrese la información de niños, niñas y jóvenes vinculados al programa:</label>
            </div>
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-2" style="text-align: left;"></div>
            <div class="col-md-4" style="text-align: left;">
                <label for="num_docentes">Ingrese el número total de niños participantes:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="num_docentes" v-model.number="Num_Vinculados" style="background-color: #D9D9D9; border: 0;" :style="{border:'1px solid', borderColor: this.Num_Vinculados<0 ? 'red' : ''}">
            </div>
            <div class="col-md-3" v-if="Num_Vinculados<0" style="color: red; margin-top: 10px; text-align: center">El número de vinculados debe ser POSITIVO.</div>
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-2" style="text-align: left;"></div>
            <div class="col-md-4" style="text-align: left;">
                <label for="num_entre_6_8">Ingrese el número de niños participantes entre 6 y 8 años:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="num_entre_6_8" min="0" v-model.number="Num_Entre_6_8" style="background-color: #D9D9D9; border: 0;" :style="{border:'1px solid', borderColor: this.Num_Entre_6_8<0|| !((this.Num_Entre_6_8 + this.Num_Entre_9_11 + this.Num_Entre_12_14 + this.Num_Entre_15_17 == this.Num_Vinculados) )? 'red' : ''}">
            </div>
            <div class="col-md-3" v-if="Num_Entre_6_8<0" style="color: red; margin-top: 10px; text-align: center">El número de niños entre 6 y 8 debe ser POSITIVO.</div>
            <div class="col-md-3" v-if="this.Num_Entre_6_8 + this.Num_Entre_9_11 + this.Num_Entre_12_14 + this.Num_Entre_15_17 != this.Num_Vinculados" style="color: red; margin-top: 10px; text-align: center">La suma de los niños por rango de edades debe ser igual al total de niños.</div>
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-2" style="text-align: left;"></div>
            <div class="col-md-4" style="text-align: left;">
                <label for="num_entre_9_11">Ingrese el número de niños participantes entre 9 y 11 años:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="num_entre_9_11" min="0" v-model.number="Num_Entre_9_11" style="background-color: #D9D9D9; border: 0;" :style="{border:'1px solid', borderColor: this.Num_Entre_9_11<0|| !((this.Num_Entre_6_8 + this.Num_Entre_9_11 + this.Num_Entre_12_14 + this.Num_Entre_15_17 == this.Num_Vinculados) )? 'red' : ''}">
            </div>
            <div class="col-md-3" v-if="Num_Entre_9_11<0" style="color: red; margin-top: 10px; text-align: center">El número de niños entre 9 y 11 debe ser POSITIVO.</div>
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-2" style="text-align: left;"></div>
            <div class="col-md-4" style="text-align: left;">
                <label for="num_entre_12_14">Ingrese el número de niños participantes entre 12 y 14:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="num_entre_12_14" min="0" v-model.number="Num_Entre_12_14" style="background-color: #D9D9D9; border: 0;" :style="{border:'1px solid', borderColor: this.Num_Entre_12_14<0|| !((this.Num_Entre_6_8 + this.Num_Entre_9_11 + this.Num_Entre_12_14 + this.Num_Entre_15_17 == this.Num_Vinculados) )? 'red' : ''}">
            </div>
            <div class="col-md-3" v-if="Num_Entre_12_14<0" style="color: red; margin-top: 10px; text-align: center">El número de niños entre 12 y 14 debe ser POSITIVO.</div>
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-2" style="text-align: left;"></div>
            <div class="col-md-4" style="text-align: left;">
                <label for="num_entre_15_17">Ingrese el número de niños participantes entre 15 y 17:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="num_entre_15_17" min="0" v-model.number="Num_Entre_15_17" style="background-color: #D9D9D9; border: 0;" :style="{border:'1px solid', borderColor: this.Num_Entre_15_17<0|| !((this.Num_Entre_6_8 + this.Num_Entre_9_11 + this.Num_Entre_15_17 + this.Num_Entre_15_17 == this.Num_Vinculados) )? 'red' : ''}">
            </div>
            <div class="col-md-3" v-if="Num_Entre_15_17<0" style="color: red; margin-top: 10px; text-align: center">El número de niños entre 15 y 17 debe ser POSITIVO.</div>
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-2" style="text-align: left;"></div>
            <div class="col-md-4" style="text-align: left;">
                <label for="num_ninos_m">Ingrese el número de niños participantes del genero masculino:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="num_ninos_m" min="0" v-model.number="Num_Ninos_M" style="background-color: #D9D9D9; border: 0;" :style="{border:'1px solid', borderColor: this.Num_Ninos_M<0|| !((this.Num_Ninos_M + this.Num_Ninos_F + this.Num_Ninos_I  == this.Num_Vinculados) )? 'red' : ''}">
            </div>
            <div class="col-md-3" v-if="Num_Ninos_M<0" style="color: red; margin-top: 10px; text-align: center">El número de niños masculinos debe ser POSITIVO.</div>
            <div class="col-md-3" v-if="this.Num_Ninos_M + this.Num_Ninos_F + this.Num_Ninos_I  != this.Num_Vinculados" style="color: red; margin-top: 10px; text-align: center">La suma de los niños por genero debe ser igual al total de niños.</div>
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-2" style="text-align: left;"></div>
            <div class="col-md-4" style="text-align: left;">
                <label for="num_ninos_f">Ingrese el número de niños participantes del genero femenino:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="num_ninos_f" min="0" v-model.number="Num_Ninos_F" style="background-color: #D9D9D9; border: 0;" :style="{border:'1px solid', borderColor: this.Num_Ninos_F<0|| !((this.Num_Ninos_M + this.Num_Ninos_F + this.Num_Ninos_I  == this.Num_Vinculados) )? 'red' : ''}">
            </div>
            <div class="col-md-3" v-if="Num_Ninos_F<0" style="color: red; margin-top: 10px; text-align: center">El número de niños femeninos debe ser POSITIVO.</div>
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-2" style="text-align: left;"></div>
            <div class="col-md-4" style="text-align: left;">
                <label for="num_ninos_i">Ingrese el número de niños participantes del genero intersexual:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="num_ninos_i" min="0" v-model.number="Num_Ninos_I" style="background-color: #D9D9D9; border: 0;" :style="{border:'1px solid', borderColor: this.Num_Ninos_M<0|| !((this.Num_Ninos_M + this.Num_Ninos_F + this.Num_Ninos_I  == this.Num_Vinculados) )? 'red' : ''}">
            </div>
            <div class="col-md-3" v-if="Num_Ninos_I<0" style="color: red; margin-top: 10px; text-align: center">El número de niños intersexual debe ser POSITIVO.</div>
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-2" style="text-align: left;"></div>
            <div class="col-md-4" style="text-align: left;">
                <label for="num_ninios_conflicto_armado">Ingrese el número de niños participantes victimas del conflicto armado:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="num_ninios_conflicto_armado" min="0" v-model.number="Num_Ninios_Conflicto_Armado" style="background-color: #D9D9D9; border: 0;" :style="{border:'1px solid', borderColor: this.Num_Ninios_Conflicto_Armado<0|| !((this.Num_Ninios_Conflicto_Armado <= this.Num_Vinculados) )? 'red' : ''}">
            </div>
            <div class="col-md-3" v-if="Num_Ninios_Conflicto_Armado<0" style="color: red; margin-top: 10px; text-align: center">El número de niños victimas de conflicto debe ser POSITIVO.</div>
            <div class="col-md-3" v-if="this.Num_Ninios_Conflicto_Armado > this.Num_Vinculados" style="color: red; margin-top: 10px; text-align: center">El número de niños victimas del conflicto debe ser menor o igual al número total de niños.</div>
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-2" style="text-align: left;"></div>
            <div class="col-md-4" style="text-align: left;">
                <label for="num_ninios_reincorporacion">Ingrese el número de niños participantes en reincorporación:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="num_ninios_reincorporacion" v-model.number="Num_Ninios_Reincorporacion" style="background-color: #D9D9D9; border: 0;" :style="{border:'1px solid', borderColor: this.Num_Ninios_Reincorporacion<0|| !((this.Num_Ninios_Reincorporacion <= this.Num_Vinculados) )? 'red' : ''}">
            </div>
            <div class="col-md-3" v-if="Num_Ninios_Reincorporacion<0" style="color: red; margin-top: 10px; text-align: center">El número de niños en reincorporación debe ser POSITIVO.</div>
            <div class="col-md-3" v-if="this.Num_Ninios_Reincorporacion > this.Num_Vinculados" style="color: red; margin-top: 10px; text-align: center">El número de niños en reincorporacion debe ser menor o igual al número total de niños.</div>
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-2" style="text-align: left;"></div>
            <div class="col-md-4" style="text-align: left;">
                <label for="num_ninios_etnia">Ingrese el número total de niños participantes que pertenecen a una etnia:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="num_ninios_etnia" v-model.number="Num_Ninios_Etnia" style="background-color: #D9D9D9; border: 0;" :style="{border:'1px solid', borderColor:   this.Num_Ninios_Etnia != this.Num_Ninios_Indigena + this.Num_Ninios_Gitano + this.Num_Ninios_Palenquero + this.Num_Ninios_Raizal + this.Num_Ninios_Afro|| this.Num_Ninios_Etnia<0|| !((this.Num_Ninios_Etnia <= this.Num_Vinculados) )? 'red' : ''}">
            </div>
            <div class="col-md-3" v-if="Num_Ninios_Etnia<0" style="color: red; margin-top: 10px; text-align: center">El número de niños etnia debe ser POSITIVO.</div>
            <div class="col-md-3" v-if="this.Num_Ninios_Etnia > this.Num_Vinculados" style="color: red; margin-top: 10px; text-align: center">El número de niños en etnia debe ser menor o igual al número total de niños.</div>
        </div>
        <div class="row" style="margin-top: 45px;" v-if="this.Num_Ninios_Etnia>0">
            <div class="col-md-2" style="text-align: left;"></div>
            <div class="col-md-4" style="text-align: left;">
                <label for="num_ninios_indigena">Ingrese el número de niños participantes que pertenecen a la etnia indigena:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="num_ninios_indigena" v-model.number="Num_Ninios_Indigena" style="background-color: #D9D9D9; border: 0;" :style="{border:'1px solid', borderColor:   this.Num_Ninios_Etnia != this.Num_Ninios_Indigena + this.Num_Ninios_Gitano + this.Num_Ninios_Palenquero + this.Num_Ninios_Raizal + this.Num_Ninios_Afro|| this.Num_Ninios_Indigena<0 ? 'red' : ''}">
            </div>
            <div class="col-md-3" v-if="Num_Ninios_Indigena<0" style="color: red; margin-top: 10px; text-align: center">El número de niños indigenas debe ser POSITIVO.</div>
            <div class="col-md-3" v-if="this.Num_Ninios_Etnia != this.Num_Ninios_Indigena + this.Num_Ninios_Gitano + this.Num_Ninios_Palenquero + this.Num_Ninios_Raizal + this.Num_Ninios_Afro" style="color: red; margin-top: 10px; text-align: center">La suma de los niños en cada etnia debe ser igual al número total de niños que pertencen las etnia. </div>
        </div>
        <div class="row" style="margin-top: 45px;" v-if="this.Num_Ninios_Etnia>0">
            <div class="col-md-2" style="text-align: left;"></div>
            <div class="col-md-4" style="text-align: left;">
                <label for="num_ninios_gitano">Ingrese el número de niños participantes que pertenecen a la etnia gitano:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="num_ninios_gitano" v-model.number="Num_Ninios_Gitano" style="background-color: #D9D9D9; border: 0;" :style="{border:'1px solid', borderColor:   this.Num_Ninios_Etnia != this.Num_Ninios_Indigena + this.Num_Ninios_Gitano + this.Num_Ninios_Palenquero + this.Num_Ninios_Raizal + this.Num_Ninios_Afro|| this.Num_Ninios_Gitano<0 ? 'red' : ''}">
            </div>
            <div class="col-md-3" v-if="Num_Ninios_Gitano<0" style="color: red; margin-top: 10px; text-align: center">El número de niños gitanos debe ser POSITIVO.</div>
        </div>
        <div class="row" style="margin-top: 45px;" v-if="this.Num_Ninios_Etnia>0">
            <div class="col-md-2" style="text-align: left;"></div>
            <div class="col-md-4" style="text-align: left;">
                <label for="num_ninios_raizal">Ingrese el número de niños participantes que pertenecen a la etnia raizal:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="num_ninios_raizal" v-model.number="Num_Ninios_Raizal" style="background-color: #D9D9D9; border: 0;" :style="{border:'1px solid', borderColor:   this.Num_Ninios_Etnia != this.Num_Ninios_Indigena + this.Num_Ninios_Gitano + this.Num_Ninios_Palenquero + this.Num_Ninios_Raizal + this.Num_Ninios_Afro|| this.Num_Ninios_Raizal<0 ? 'red' : ''}">
            </div>
            <div class="col-md-3" v-if="Num_Ninios_Raizal<0" style="color: red; margin-top: 10px; text-align: center">El número de niños raizal debe ser POSITIVO.</div>
        </div>
        <div class="row" style="margin-top: 45px;" v-if="this.Num_Ninios_Etnia>0">
            <div class="col-md-2" style="text-align: left;"></div>
            <div class="col-md-4" style="text-align: left;">
                <label for="num_ninios_palenquero">Ingrese el número de niños participantes que pertenecen a la etnia palenquero:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="num_ninios_palenquero" v-model.number="Num_Ninios_Palenquero" style="background-color: #D9D9D9; border: 0;" :style="{border:'1px solid', borderColor:   this.Num_Ninios_Etnia != this.Num_Ninios_Indigena + this.Num_Ninios_Gitano + this.Num_Ninios_Palenquero + this.Num_Ninios_Raizal + this.Num_Ninios_Afro|| this.Num_Ninios_Palenquero<0 ? 'red' : ''}">
            </div>
            <div class="col-md-3" v-if="Num_Ninios_Palenquero<0" style="color: red; margin-top: 10px; text-align: center">El número de niños palenqueros debe ser POSITIVO.</div>
        </div>
        <div class="row" style="margin-top: 45px;"  v-if="this.Num_Ninios_Etnia>0">
            <div class="col-md-2" style="text-align: left;"></div>
            <div class="col-md-4" style="text-align: left;">
                <label for="num_ninios_afro">Ingrese el número de niños participantes que pertenecen a la etnia afro:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="num_ninios_afro" v-model.number="Num_Ninios_Afro" style="background-color: #D9D9D9; border: 0;" :style="{border:'1px solid', borderColor:   this.Num_Ninios_Etnia != this.Num_Ninios_Indigena + this.Num_Ninios_Gitano + this.Num_Ninios_Palenquero + this.Num_Ninios_Raizal + this.Num_Ninios_Afro|| this.Num_Ninios_Afro<0 ? 'red' : ''}">
            </div>
            <div class="col-md-3" v-if="Num_Ninios_Afro<0" style="color: red; margin-top: 10px; text-align: center">El número de niños afro debe ser POSITIVO.</div>
        </div>
        <div class="row" style="margin-top: 45px;" v-if="verificarPdet">
            <div class="col-md-2" style="text-align: left;"></div>
            <div class="col-md-4" style="text-align: left;">
                <label for="num_ninios_pdet">Ingrese el número de niños participantes que cuyo municipio de nacimiento es PDET:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="num_ninios_pdet" v-model.number="Num_Ninios_Pdet" style="background-color: #D9D9D9; border: 0;" :style="{border:'1px solid', borderColor:   this.Num_Ninios_Pdet > this.Num_Vinculados || this.Num_Ninios_Pdet<0 ? 'red' : ''}">
            </div>
            <div class="col-md-3" v-if="Num_Ninios_Pdet<0" style="color: red; margin-top: 10px; text-align: center">El número de niños PDET debe ser POSITIVO.</div>
            <div class="col-md-3" v-if="this.Num_Ninios_Pdet > this.Num_Vinculados" style="color: red; margin-top: 10px; text-align: center">El número de niños PDET debe ser menor o igual al número total de niños.</div>
        </div>
        <div class="row" style="margin-top: 45px;" v-if="verificarZomac">
            <div class="col-md-2" style="text-align: left;"></div>
            <div class="col-md-4" style="text-align: left;">
                <label for="num_ninios_zomac">Ingrese el número de niños participantes que cuyo municipio de nacimiento es ZOMAC:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="num_ninios_zomac" v-model.number="Num_Ninios_Zomac" style="background-color: #D9D9D9; border: 0;" :style="{border:'1px solid', borderColor:   this.Num_Ninios_Zomac > this.Num_Vinculados || this.Num_Ninios_Zomac<0 ? 'red' : ''}">
            </div>
            <div class="col-md-3" v-if="Num_Ninios_Zomac<0" style="color: red; margin-top: 10px; text-align: center">El número de niños ZOMAC debe ser POSITIVO.</div>
            <div class="col-md-3" v-if="this.Num_Ninios_Zomac > this.Num_Vinculados" style="color: red; margin-top: 10px; text-align: center">El número de niños Zomac debe ser menor o igual al número total de niños.</div>
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-2" style="text-align: left;"></div>
            <div class="col-md-4" style="text-align: left;">
                <label for="num_ninios_discapacidad">Ingrese el número de niños participantes que tienen una discapacidad:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="num_ninios_discapacidad" v-model.number="Num_Ninios_Discapacidad" style="background-color: #D9D9D9; border: 0;" :style="{border:'1px solid', borderColor: this.Num_Ninios_Discapacidad > this.Num_Vinculados || this.Num_Ninios_Discapacidad < 0 ? 'red' : ''}">
            </div>
            <div class="col-md-3" v-if="Num_Ninios_Discapacidad<0" style="color: red; margin-top: 10px; text-align: center">El número de niños co discapacidad debe ser POSITIVO.</div>
            <div class="col-md-3" v-if="this.Num_Ninios_Discapacidad > this.Num_Vinculados" style="color: red; margin-top: 10px; text-align: center">El número de niños con discapacidad debe ser menor o igual al número total de niños.</div>
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-1" style="text-align: left;"></div>
            <div class="col-md-7" style="text-align: left;">
                <label>Ingrese la información de docentes vinculados al programa:</label>
            </div>
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-2" style="text-align: left;"></div>
            <div class="col-md-1" style="text-align: left;">
                <label for="num_docentes">Total:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="num_docentes" v-model.number="Num_Docentes" style="background-color: #D9D9D9; border: 0;" :style="{border:'1px solid', borderColor: this.Num_Docentes<0 ? 'red' : ''}">
            </div>
            <div class="col-md-3" v-if="Num_Docentes<0" style="color: red; margin-top: 10px; text-align: center">El número de docentes debe ser POSITIVO.</div>
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-2" style="text-align: left;"></div>
            <div class="col-md-4" style="text-align: left;">
                <label for="num_docentes_femenino_vinculados">Ingrese el número de docentes mujeres:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="num_docentes_femenino_vinculados" v-model.number="Num_Docentes_Femenino_Vinculados" style="background-color: #D9D9D9; border: 0;" :style="{border:'1px solid', borderColor: this.Num_Docentes_Femenino_Vinculados<0 || this.Num_Docentes_Femenino_Vinculados + this.Num_Docentes_Masculino_Vinculados + this.Num_Docentes_Intersexual_Vinculados != this.Num_Docentes ? 'red' : ''}">
            </div>
            <div class="col-md-3" v-if="Num_Docentes_Femenino_Vinculados<0" style="color: red; margin-top: 10px; text-align: center">El número de docentes mujeres debe ser POSITIVO.</div>
            <div class="col-md-3" v-if="this.Num_Docentes_Femenino_Vinculados + this.Num_Docentes_Masculino_Vinculados + this.Num_Docentes_Intersexual_Vinculados != this.Num_Docentes" style="color: red; margin-top: 10px; text-align: center">La suma de los generos de los docentes debe ser menor o igual a el número total de docentes.</div>
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-2" style="text-align: left;"></div>
            <div class="col-md-4" style="text-align: left;">
                <label for="num_docentes_masculino_vinculados">Ingrese el número de docentes masculino:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="num_docentes_masculino_vinculados" v-model.number="Num_Docentes_Masculino_Vinculados" style="background-color: #D9D9D9; border: 0;" :style="{border:'1px solid', borderColor: this.Num_Docentes_Masculino_Vinculados<0 || this.Num_Docentes_Femenino_Vinculados + this.Num_Docentes_Masculino_Vinculados + this.Num_Docentes_Intersexual_Vinculados != this.Num_Docentes ? 'red' : ''}">
            </div>
            <div class="col-md-3" v-if="Num_Docentes_Masculino_Vinculados<0" style="color: red; margin-top: 10px; text-align: center">El número de docentes masculino debe ser POSITIVO.</div>
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-2" style="text-align: left;"></div>
            <div class="col-md-4" style="text-align: left;">
                <label for="num_docentes_intersexual_vinculados">Ingrese el número de docentes intersexual:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="num_docentes_intersexual_vinculados" v-model.number="Num_Docentes_Intersexual_Vinculados" style="background-color: #D9D9D9; border: 0;" :style="{border:'1px solid', borderColor: this.Num_Docentes_Intersexual_Vinculados<0 || this.Num_Docentes_Femenino_Vinculados + this.Num_Docentes_Intersexual_Vinculados + this.Num_Docentes_Masculino_Vinculados != this.Num_Docentes ? 'red' : ''}">
            </div>
            <div class="col-md-3" v-if="Num_Docentes_Intersexual_Vinculados<0" style="color: red; margin-top: 10px; text-align: center">El número de docentes intersexual debe ser POSITIVO.</div>
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-2" style="text-align: left;"></div>
            <div class="col-md-4" style="text-align: left;">
                <label for="num_docentes_orientacion_hetero">Ingrese el número de docentes con orientación heterosexual:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="num_docentes_orientacion_hetero" v-model.number="Num_Docentes_Orientacion_Hetero" style="background-color: #D9D9D9; border: 0;" :style="{border:'1px solid', borderColor: this.Num_Docentes_Orientacion_Hetero<0 || this.Num_Docentes_Orientacion_Homo + this.Num_Docentes_Orientacion_Hetero + this.Num_Docentes_Orientacion_Bi + this.Num_Docentes_Orientacion_Otro != this.Num_Docentes ? 'red' : ''}">
            </div>
            <div class="col-md-3" v-if="Num_Docentes_Orientacion_Hetero<0" style="color: red; margin-top: 10px; text-align: center">El número de docentes heterosexuales debe ser POSITIVO.</div>
            <div class="col-md-3" v-if="this.Num_Docentes_Orientacion_Homo + this.Num_Docentes_Orientacion_Hetero + this.Num_Docentes_Orientacion_Bi + this.Num_Docentes_Orientacion_Otro != this.Num_Docentes" style="color: red; margin-top: 10px; text-align: center">La suma de las orientaciones de los docentes debe ser menor o igual a el número total de docentes.</div>
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-2" style="text-align: left;"></div>
            <div class="col-md-4" style="text-align: left;">
                <label for="num_docentes_orientacion_homo">Ingrese el número de docentes con orientación homosexual:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="num_docentes_orientacion_homo" v-model.number="Num_Docentes_Orientacion_Homo" style="background-color: #D9D9D9; border: 0;" :style="{border:'1px solid', borderColor: this.Num_Docentes_Orientacion_Homo<0 || this.Num_Docentes_Orientacion_Homo + this.Num_Docentes_Orientacion_Hetero + this.Num_Docentes_Orientacion_Bi + this.Num_Docentes_Orientacion_Otro != this.Num_Docentes ? 'red' : ''}">
            </div>
            <div class="col-md-3" v-if="Num_Docentes_Orientacion_Homo<0" style="color: red; margin-top: 10px; text-align: center">El número de docentes homosexuales debe ser POSITIVO.</div>
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-2" style="text-align: left;"></div>
            <div class="col-md-4" style="text-align: left;">
                <label for="num_docentes_orientacion_bi">Ingrese el número de docentes con orientación bisexual:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="num_docentes_orientacion_bi" v-model.number="Num_Docentes_Orientacion_Bi" style="background-color: #D9D9D9; border: 0;" :style="{border:'1px solid', borderColor: this.Num_Docentes_Orientacion_Bi<0 || this.Num_Docentes_Orientacion_Homo + this.Num_Docentes_Orientacion_Hetero + this.Num_Docentes_Orientacion_Bi + this.Num_Docentes_Orientacion_Otro != this.Num_Docentes ? 'red' : ''}">
            </div>
            <div class="col-md-3" v-if="Num_Docentes_Orientacion_Bi<0" style="color: red; margin-top: 10px; text-align: center">El número de docentes bisexuales debe ser POSITIVO.</div>
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-2" style="text-align: left;"></div>
            <div class="col-md-4" style="text-align: left;">
                <label for="num_docentes_orientacion_otro">Ingrese el número de docentes con otra orientación:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="num_docentes_orientacion_otro" v-model.number="Num_Docentes_Orientacion_Otro" style="background-color: #D9D9D9; border: 0;" :style="{border:'1px solid', borderColor: this.Num_Docentes_Orientacion_Otro<0 || this.Num_Docentes_Orientacion_Homo + this.Num_Docentes_Orientacion_Hetero + this.Num_Docentes_Orientacion_Bi + this.Num_Docentes_Orientacion_Otro != this.Num_Docentes ? 'red' : ''}">
            </div>
            <div class="col-md-3" v-if="Num_Docentes_Orientacion_Otro<0" style="color: red; margin-top: 10px; text-align: center">El número de docentes otro debe ser POSITIVO.</div>
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-2" style="text-align: left;"></div>
            <div class="col-md-4" style="text-align: left;">
                <label for="num_docentes_conflicto_armado">Ingrese el número de docentes victimas del conflicto conflicto armado:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="num_docentes_conflicto_armado" v-model.number="Num_Docentes_Conflicto_Armado" style="background-color: #D9D9D9; border: 0;" :style="{border:'1px solid', borderColor: (this.Num_Docentes_Conflicto_Armado < 0 || this.Num_Docentes_Conflicto_Armado > this.Num_Docentes)  ? 'red' : ''}">
            </div>
            <div class="col-md-3" v-if="Num_Docentes_Conflicto_Armado<0" style="color: red; margin-top: 10px; text-align: center">El número de docentes victimas de conflicto armado debe ser POSITIVO.</div>
            <div class="col-md-3" v-if="this.Num_Docentes_Conflicto_Armado > this.Num_Docentes" style="color: red; margin-top: 10px; text-align: center">El número de docentes victimas del conflicto debe ser menor o igual al número total de docentes.</div>
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-2" style="text-align: left;"></div>
            <div class="col-md-4" style="text-align: left;">
                <label for="num_docentes_reincorporacion">Ingrese el número de docentes en reincorporación:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="num_docentes_reincorporacion" v-model.number="Num_Docentes_Reincorporacion" style="background-color: #D9D9D9; border: 0;" :style="{border:'1px solid', borderColor: this.Num_Docentes_Reincorporacion<0 || this.Num_Docentes_Reincorporacion > this.Num_Docentes  ? 'red' : ''}">
            </div>
            <div class="col-md-3" v-if="Num_Docentes_Reincorporacion<0" style="color: red; margin-top: 10px; text-align: center">El número de docentes en reincorporación debe ser POSITIVO.</div>
            <div class="col-md-3" v-if="this.Num_Docentes_Reincorporacion > this.Num_Docentes" style="color: red; margin-top: 10px; text-align: center">El número de docentes en reincorporacion debe ser menor o igual al número total de docentes.</div>
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-2" style="text-align: left;"></div>
            <div class="col-md-4" style="text-align: left;">
                <label for="num_docentes_etnia">Ingrese el número de docentes que pertenecen a una etnia:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="num_docentes_etnia" v-model.number="Num_Docentes_Etnia" style="background-color: #D9D9D9; border: 0;" :style="{border:'1px solid', borderColor: this.Num_Docentes_Etnia<0 || this.Num_Docentes_Etnia != this.Num_Docentes_Indigena + this.Num_Docentes_Gitano + this.Num_Docentes_Raizal + this.Num_Docentes_Afro + this.Num_Docentes_Palenquero  ? 'red' : ''}">
            </div>
            <div class="col-md-3" v-if="Num_Docentes_Etnia<0" style="color: red; margin-top: 10px; text-align: center">El número de docentes etnias debe ser POSITIVO.</div>
            <div class="col-md-3" v-if="this.Num_Docentes_Etnia > this.Num_Docentes" style="color: red; margin-top: 10px; text-align: center">El número de docentes que pertenecen a una etnia debe ser menor o igual al número total de docentes.</div>
        </div>
        <div class="row" style="margin-top: 45px;" v-if="this.Num_Docentes_Etnia>0">
            <div class="col-md-2" style="text-align: left;"></div>
            <div class="col-md-4" style="text-align: left;">
                <label for="num_docentes_indigena">Ingrese el número de docentes que pertenecen a la etnia indigena:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="num_docentes_indigena" v-model.number="Num_Docentes_Indigena" style="background-color: #D9D9D9; border: 0;" :style="{border:'1px solid', borderColor: this.Num_Docentes_Indigena<0 || this.Num_Docentes_Etnia != this.Num_Docentes_Indigena + this.Num_Docentes_Gitano + this.Num_Docentes_Raizal + this.Num_Docentes_Afro + this.Num_Docentes_Palenquero  ? 'red' : ''}">
            </div>
            <div class="col-md-3" v-if="Num_Docentes_Indigena<0" style="color: red; margin-top: 10px; text-align: center">El número de docentes indigenas debe ser POSITIVO.</div>
            <div class="col-md-3" v-if="this.Num_Docentes_Etnia != this.Num_Docentes_Indigena + this.Num_Docentes_Gitano + this.Num_Docentes_Raizal + this.Num_Docentes_Afro + this.Num_Docentes_Palenquero" style="color: red; margin-top: 10px; text-align: center">La suma de los docentes en cada etina debe ser igual al total de docentes que pertencesn a las etnias.</div>
        </div>
        <div class="row" style="margin-top: 45px;" v-if="this.Num_Docentes_Etnia>0">
            <div class="col-md-2" style="text-align: left;"></div>
            <div class="col-md-4" style="text-align: left;">
                <label for="num_docentes_gitano">Ingrese el número de docentes que pertenecen a la etnia gitano:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="num_docentes_gitano" v-model.number="Num_Docentes_Gitano" style="background-color: #D9D9D9; border: 0;" :style="{border:'1px solid', borderColor: this.Num_Docentes_Gitano<0 || this.Num_Docentes_Etnia != this.Num_Docentes_Indigena + this.Num_Docentes_Gitano + this.Num_Docentes_Raizal + this.Num_Docentes_Afro + this.Num_Docentes_Palenquero  ? 'red' : ''}">
            </div>
            <div class="col-md-3" v-if="Num_Docentes_Gitano<0" style="color: red; margin-top: 10px; text-align: center">El número de docentes gitano debe ser POSITIVO.</div>
        </div>
        <div class="row" style="margin-top: 45px;" v-if="this.Num_Docentes_Etnia>0">
            <div class="col-md-2" style="text-align: left;"></div>
            <div class="col-md-4" style="text-align: left;">
                <label for="num_docentes_raizal">Ingrese el número de docentes que pertenecen a la etnia raizal:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="num_docentes_raizal" v-model.number="Num_Docentes_Raizal" style="background-color: #D9D9D9; border: 0;" :style="{border:'1px solid', borderColor: this.Num_Docentes_Raizal<0 || this.Num_Docentes_Etnia != this.Num_Docentes_Indigena + this.Num_Docentes_Gitano + this.Num_Docentes_Raizal + this.Num_Docentes_Afro + this.Num_Docentes_Palenquero  ? 'red' : ''}">
            </div>
            <div class="col-md-3" v-if="Num_Docentes_Raizal<0" style="color: red; margin-top: 10px; text-align: center">El número de docentes raizal debe ser POSITIVO.</div>
        </div>
        <div class="row" style="margin-top: 45px;" v-if="this.Num_Docentes_Etnia>0">
            <div class="col-md-2" style="text-align: left;"></div>
            <div class="col-md-4" style="text-align: left;">
                <label for="num_docentes_palenquero">Ingrese el número de docentes que pertenecen a la etnia palenquero:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="num_docentes_palenquero" v-model.number="Num_Docentes_Palenquero" style="background-color: #D9D9D9; border: 0;" :style="{border:'1px solid', borderColor: this.Num_Docentes_Palenquero<0 || this.Num_Docentes_Etnia != this.Num_Docentes_Indigena + this.Num_Docentes_Gitano + this.Num_Docentes_Raizal + this.Num_Docentes_Afro + this.Num_Docentes_Palenquero  ? 'red' : ''}">
            </div>
            <div class="col-md-3" v-if="Num_Docentes_Palenquero<0" style="color: red; margin-top: 10px; text-align: center">El número de docentes palenquero debe ser POSITIVO.</div>
        </div>
        <div class="row" style="margin-top: 45px;" v-if="this.Num_Docentes_Etnia>0">
            <div class="col-md-2" style="text-align: left;"></div>
            <div class="col-md-4" style="text-align: left;">
                <label for="num_docentes_afro">Ingrese el número de docentes que pertenecen a la etnia afro:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="num_docentes_afro" v-model.number="Num_Docentes_Afro" style="background-color: #D9D9D9; border: 0;" :style="{border:'1px solid', borderColor: this.Num_Docentes_Afro<0 || this.Num_Docentes_Etnia != this.Num_Docentes_Indigena + this.Num_Docentes_Gitano + this.Num_Docentes_Raizal + this.Num_Docentes_Afro + this.Num_Docentes_Palenquero  ? 'red' : ''}">
            </div>
            <div class="col-md-3" v-if="Num_Docentes_Afro<0" style="color: red; margin-top: 10px; text-align: center">El número de docentes afro debe ser POSITIVO.</div>
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-2" style="text-align: left;"></div>
            <div class="col-md-4" style="text-align: left;">
                <label for="num_docentes_discapacidad">Ingrese el número de docentes que tienen una discapacidad:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="num_docentes_discapacidad" v-model.number="Num_Docentes_Discapacidad" style="background-color: #D9D9D9; border: 0;" :style="{border:'1px solid', borderColor: this.Num_Docentes_Discapacidad<0 || this.Num_Docentes_Discapacidad > this.Num_Docentes  ? 'red' : ''}">
            </div>
            <div class="col-md-3" v-if="Num_Docentes_Discapacidad<0" style="color: red; margin-top: 10px; text-align: center">El número de docentes discapacidad debe ser POSITIVO.</div>
        </div>
        <div class="row" style="margin-top: 45px;" v-if="verificarPdet">
            <div class="col-md-2" style="text-align: left;"></div>
            <div class="col-md-4" style="text-align: left;">
                <label for="num_docentes_pdet">Ingrese el número de docentes cuyo municipio de nacimiento es PDET:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="num_docentes_pdet" v-model.number="Num_Docentes_Pdet" style="background-color: #D9D9D9; border: 0;" :style="{border:'1px solid', borderColor: this.Num_Docentes_Pdet<0 || this.Num_Docentes_Pdet > this.Num_Docentes  ? 'red' : ''}">
            </div>
            <div class="col-md-3" v-if="Num_Docentes_Pdet<0" style="color: red; margin-top: 10px; text-align: center">El número de docentes PDET debe ser POSITIVO.</div>
            <div class="col-md-3" v-if="this.Num_Docentes_Pdet > this.Num_Docentes" style="color: red; margin-top: 10px; text-align: center">El número de docentes PDET debe ser menor o igual al numero total de docentes.</div>
        </div>
        <div class="row" style="margin-top: 45px;" v-if="verificarZomac">
            <div class="col-md-2" style="text-align: left;"></div>
            <div class="col-md-4" style="text-align: left;">
                <label for="num_docentes_zomac">Ingrese el número de docentes cuyo municipio de nacimiento es ZOMAC:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="num_docentes_zomac" v-model.number="Num_Docentes_Zomac" style="background-color: #D9D9D9; border: 0;" :style="{border:'1px solid', borderColor: this.Num_Docentes_Zomac<0 || this.Num_Docentes_Zomac > this.Num_Docentes  ? 'red' : ''}">
            </div>
            <div class="col-md-3" v-if="Num_Docentes_Zomac<0" style="color: red; margin-top: 10px; text-align: center">El número de docentes ZOMAC debe ser POSITIVO.</div>
            <div class="col-md-3" v-if="this.Num_Docentes_Zomac > this.Num_Docentes" style="color: red; margin-top: 10px; text-align: center">El número de docentes ZOMAC debe ser menor o igual al numero total de docentes.</div>
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-1" style="text-align: left;"></div>
            <div class="col-md-5" style="text-align: left;">
                <label for="num_grupos_investigacion">Ingrese el número de grupos de investigación vinculados al programa:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="num_grupos_investigacion" min="0" v-model.number="Num_Grupos_Investigacion" style="background-color: #D9D9D9; border: 0;" :style="{border:'1px solid', borderColor: this.Num_Grupos_Investigacion<0 ? 'red' : ''}">
            </div>
            <div class="col-md-3" v-if="Num_Grupos_Investigacion<0" style="color: red; margin-top: 10px; text-align: center">El número de grupos de investigación debe ser POSITIVO.</div>
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-1" style="text-align: left;"></div>
            <div class="col-md-5" style="text-align: left;">
                <label for="num_instituciones_educativas_vinculadas">Ingrese el número de grupos de instituciones educativas vinculadas al programa:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="num_instituciones_educativas_vinculadas" min="0" v-model.number="Num_Instituciones_Educativas_Vinculadas" style="background-color: #D9D9D9; border: 0;" :style="{border:'1px solid', borderColor: this.Num_Instituciones_Educativas_Vinculadas<0 ? 'red' : ''}">
            </div>
            <div class="col-md-3" v-if="Num_Instituciones_Educativas_Vinculadas<0" style="color: red; margin-top: 10px; text-align: center">El número de instituciones educativas vinculadas debe ser POSITIVO.</div>
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-1" style="text-align: left;"></div>
            <div class="col-md-5" style="text-align: left;">
                <label for="num_proyectos">Ingrese el número de proyectos de investigacion apoyados por el programa:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="num_proyectos" min="0" v-model.number="Num_Proyectos" style="background-color: #D9D9D9; border: 0;" :style="{border:'1px solid', borderColor: this.Num_Proyectos<0 ? 'red' : ''}">
            </div>
            <div class="col-md-3" v-if="Num_Proyectos<0" style="color: red; margin-top: 10px; text-align: center">El número de proyectos debe ser POSITIVO.</div>
        </div>
        

        <button type="button" class="btn btn-primary" style="margin-bottom: 50px; margin-left: 45%; width: 150px" @click="saveData" :disabled="!isFormValid">Guardar</button>
</template>

<script>
import { jwtDecode } from 'jwt-decode';



export default {
    name: 'IngresoConvocatoria',
    data() {
        return {
            Anio: this.anio,
            Departamento: this.departamento,
            Num_Convocatorias: 0,
            Num_Grupos_Investigacion_Aplican: 0,
            Num_Instituciones_Educativas_Aplican: 0,
            Num_Vinculados: 0,
            Num_Docentes: 0,
            Num_Grupos_Investigacion: 0,
            Num_Instituciones_Educativas_Vinculadas: 0,
            Num_Proyectos: 0,
            Num_Entre_6_8: 0,
            Num_Entre_9_11: 0,
            Num_Entre_12_14: 0,
            Num_Entre_15_17: 0,
            Num_Ninos_M: 0,
            Num_Ninos_F: 0,
            Num_Ninos_I: 0,
            Num_Ninios_Conflicto_Armado: 0,
            Num_Ninios_Reincorporacion: 0,
            Num_Ninios_Etnia: 0,
            Num_Ninios_Pdet: 0,
            Num_Ninios_Zomac: 0,
            Num_Ninios_Discapacidad: 0,
            Num_Ninios_Indigena: 0,
            Num_Ninios_Gitano: 0,
            Num_Ninios_Raizal: 0,
            Num_Ninios_Palenquero: 0,
            Num_Ninios_Afro:0,
            Num_Docentes_Masculino_Vinculados:0,
            Num_Docentes_Femenino_Vinculados:0,
            Num_Docentes_Intersexual_Vinculados:0,
            Num_Docentes_Orientacion_Homo:0,
            Num_Docentes_Orientacion_Hetero:0,
            Num_Docentes_Orientacion_Bi:0,
            Num_Docentes_Orientacion_Otro:0,
            Num_Docentes_Conflicto_Armado:0,
            Num_Docentes_Reincorporacion:0,
            Num_Docentes_Etnia:0,
            Num_Docentes_Pdet:0,
            Num_Docentes_Zomac:0,
            Num_Docentes_Discapacidad:0,
            Num_Docentes_Indigena:0,
            Num_Docentes_Gitano:0,
            Num_Docentes_Raizal:0,
            Num_Docentes_Palenquero:0,
            Num_Docentes_Afro:0
        }
    },
    props: {
        anio: {
            type: Number,
            required: true
        },
        departamento: {
            type: String,
            required: true
        }
    },
    methods: {
    async saveData() {
        const token = localStorage.getItem('token');
        const id = jwtDecode(token).id
        const response = await fetch('https://localhost:7192/api/Convocatorias/'+id+'/'+token, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.$data)
        });
        if(response.ok){
            window.location.reload(); // Refresh the page
            alert('Datos guardados correctamente');
        }
        }
    },
    watch: {
    // Watch for changes in the props and update the data accordingly
    anio(newAnio) {
      this.Anio = newAnio;
      for (const key in this.$data) {
                if (key !== 'Anio' && key !== 'Departamento') {
                    this.$data[key] = 0;
                }
            }
    },
    departamento(newDepartamento) {
      this.Departamento = newDepartamento;
      for (const key in this.$data) {
                if (key !== 'Anio' && key !== 'Departamento') {
                    this.$data[key] = 0;
                }
            }
    }
  },
  computed: {
    isFormValid() {
            for (const key in this.$data) {
                if (key != "Departamento"){
                    if (this.$data[key] < 0) {
                    return false;
                    }
                }
            }
            // Comprueba si todos los campos están llenos
            const edades = (this.Num_Entre_6_8 + this.Num_Entre_9_11 + this.Num_Entre_12_14 + this.Num_Entre_15_17) === this.Num_Vinculados;
            const generos = (this.Num_Ninos_F+this.Num_Ninos_M+this.Num_Ninos_I) === this.Num_Vinculados;
            const conflicto = (this.Num_Ninios_Conflicto_Armado) <= this.Num_Vinculados;
            const reincorporacion = (this.Num_Ninios_Reincorporacion) <= this.Num_Vinculados;
            const etnia = ((this.Num_Ninios_Etnia) <= this.Num_Vinculados) && (this.Num_Ninios_Etnia === this.Num_Ninios_Indigena + this.Num_Ninios_Gitano + this.Num_Ninios_Raizal + this.Num_Ninios_Palenquero + this.Num_Ninios_Afro);
            const pdet = (this.Num_Ninios_Pdet) <= this.Num_Vinculados;
            const zomac = (this.Num_Ninios_Zomac) <= this.Num_Vinculados;
            const discapacidad = (this.Num_Ninios_Discapacidad) <= this.Num_Vinculados;
            const docentes = (this.Num_Docentes_Femenino_Vinculados + this.Num_Docentes_Masculino_Vinculados + this.Num_Docentes_Intersexual_Vinculados) === this.Num_Docentes;
            const orientacion = (this.Num_Docentes_Orientacion_Bi+this.Num_Docentes_Orientacion_Hetero+this.Num_Docentes_Orientacion_Homo+this.Num_Docentes_Orientacion_Otro) === this.Num_Docentes;
            const conflictoDocentes = this.Num_Docentes_Conflicto_Armado <= this.Num_Docentes;
            const reincorporacionDocentes = this.Num_Docentes_Reincorporacion <=this.Num_Docentes;
            const etniaDocentes = (this.Num_Docentes_Etnia === this.Num_Docentes_Indigena + this.Num_Docentes_Gitano + this.Num_Docentes_Raizal + this.Num_Docentes_Palenquero + this.Num_Docentes_Afro) && (this.Num_Docentes_Etnia <= this.Num_Docentes);
            const docentesPdet = (this.Num_Docentes_Pdet <= this.Num_Docentes);
            const docentesZomac = (this.Num_Docentes_Zomac <= this.Num_Docentes);
            const docentesDiscapacidad = this.Num_Docentes_Discapacidad <= this.Num_Docentes;
            // Comprueba si el total de asesores es igual a la suma de asesores masculinos y femeninos
            return edades && generos && conflicto && reincorporacion && etnia && pdet && zomac && discapacidad && docentes && orientacion && conflictoDocentes && reincorporacionDocentes && etniaDocentes && docentesPdet && docentesZomac && docentesDiscapacidad;
        },
        verificarPdet(){
            const departamentos = [
                    "Cauca",
                    "Nariño",
                    "Valle del Cauca",
                    "Arauca",
                    "Antioquia",
                    "Norte de Santander",
                    "Chocó",
                    "Caquetá",
                    "Huila",
                    "Guaviare",
                    "Meta",
                    "Bolívar",
                    "Sucre",
                    "Putumayo",
                    "Cesar",
                    "La Guajira",
                    "Magdalena",
                    "Córdoba",
                    "Tolima"
                ];
        return departamentos.includes(this.Departamento);
         },
        verificarZomac(){
            const departamentos = [
                    "Antioquia",
                    "Arauca",
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
                    "Santander",
                    "Sucre",
                    "Tolima",
                    "Valle del Cauca",
                    "Vaupés",
                    "Vichada"
                ];
            return departamentos.includes(this.Departamento);
        }

  },
};

</script>

<style scoped>
/* Your component-specific styles go here */
</style>