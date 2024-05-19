<template>
    <div class="row" style="margin-top: 45px;">
            <div class="col-md-1" style="text-align: left;"></div>
            <div class="col-md-7" style="text-align: left;">
                <label>Ingrese el número de asesores vinculados al programa :</label>
            </div>
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-2" style="text-align: left;"></div>
            <div class="col-md-1" style="text-align: left;">
                <label for="Num_asesores">Total:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="Num_asesores"  v-model="Num_asesores" style="background-color: #D9D9D9; border: 0;" :style="{ border:'1px solid', borderColor: Num_asesores<0 ? 'red' : '' }">
            </div>
            <div class="col-md-3" v-if="Num_asesores<0" style="color: red; margin-top: 10px;">El número de asesores debe ser POSITIVO.</div>
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-2" style="text-align: left;"></div>
            <div class="col-md-1" style="text-align: left;">
                <label for="Num_asesores_hombre">Masculino:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="Num_asesores_hombre" v-model="Num_asesores_hombre" style="background-color: #D9D9D9; border: 0;" :style="{ border:'1px solid', borderColor: Num_asesores_hombre<0 || Num_asesores_hombre+Num_asesores_mujer + Num_asesores_intersexual != Num_asesores? 'red' : '' }">
            </div>
            <div class="col-md-3" v-if="Num_asesores_hombre<0" style="color: red; margin-top: 10px;">El número de asesores masculino debe ser POSITIVO.</div>
            <div class="col-md-3" v-if="Num_asesores_hombre+Num_asesores_mujer+Num_asesores_intersexual!=Num_asesores" style="color: red; margin-top: 10px;">La suma de los generos de los asesores debe ser igual al total de asesores.</div>
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-2" style="text-align: left;"></div>
            <div class="col-md-1" style="text-align: left;">
                <label for="Num_asesores_femenino">Femenino:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="Num_asesores_femenino" v-model="Num_asesores_mujer" style="background-color: #D9D9D9; border: 0;" :style="{ border:'1px solid', borderColor: Num_asesores_mujer<0 || Num_asesores_hombre+Num_asesores_mujer+Num_asesores_intersexual!=Num_asesores? 'red' : '' }">
            </div>
            <div class="col-md-3" v-if="Num_asesores_mujer<0" style="color: red; margin-top: 10px;">El número de asesores femenino debe ser POSITIVO.</div>
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-2" style="text-align: left;"></div>
            <div class="col-md-1" style="text-align: left;">
                <label for="Num_asesores_intersexual">Intersexual:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="Num_asesores_intersexual" v-model="Num_asesores_intersexual" style="background-color: #D9D9D9; border: 0;" :style="{ border:'1px solid', borderColor: Num_asesores_intersexual<0 || Num_asesores_hombre+Num_asesores_mujer+Num_asesores_intersexual!=Num_asesores? 'red' : '' }">
            </div>
            <div class="col-md-3" v-if="Num_asesores_intersexual<0" style="color: red; margin-top: 10px;">El número de asesores intersexual debe ser POSITIVO.</div>
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-2" style="text-align: left;"></div>
            <div class="col-md-4" style="text-align: left;">
                <label for="Num_asesores_heterosexual">Ingrese el número de asesores con orientacion heterosexual:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="Num_asesores_heterosexual" v-model="Num_asesores_Orientacion_Hetero" style="background-color: #D9D9D9; border: 0;" :style="{ border:'1px solid', borderColor: Num_asesores_Orientacion_Hetero<0 || Num_asesores_Orientacion_Hetero+Num_asesores_Orientacion_Homo+Num_asesores_Orientacion_Bi+Num_asesores_Orientacion_Otro != Num_asesores ? 'red' : '' }">
            </div>
            <div class="col-md-3" v-if="Num_asesores_Orientacion_Hetero<0" style="color: red; margin-top: 10px;">El número de asesores heterosexual debe ser POSITIVO.</div>
            <div class="col-md-3" v-if="Num_asesores_Orientacion_Hetero+Num_asesores_Orientacion_Homo+Num_asesores_Orientacion_Bi+Num_asesores_Orientacion_Otro != Num_asesores" style="color: red; margin-top: 10px;">La suma de las orientaciones de los asesores debe ser igual al total de aseseores.</div>
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-2" style="text-align: left;"></div>
            <div class="col-md-4" style="text-align: left;">
                <label for="Num_asesores_homo">Ingrese el número de asesores con orientacion homosexual:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="Num_asesores_homo" v-model="Num_asesores_Orientacion_Homo" style="background-color: #D9D9D9; border: 0;" :style="{ border:'1px solid', borderColor: Num_asesores_Orientacion_Homo<0 || Num_asesores_Orientacion_Hetero+Num_asesores_Orientacion_Homo+Num_asesores_Orientacion_Bi+Num_asesores_Orientacion_Otro != Num_asesores ? 'red' : '' }">
            </div>
            <div class="col-md-3" v-if="Num_asesores_Orientacion_Homo<0" style="color: red; margin-top: 10px;">El número de asesores homosexual debe ser POSITIVO.</div>
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-2" style="text-align: left;"></div>
            <div class="col-md-4" style="text-align: left;">
                <label for="Num_asesores_bi">Ingrese el número de asesores con orientacion bisexual:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="Num_asesores_bi" v-model="Num_asesores_Orientacion_Bi" style="background-color: #D9D9D9; border: 0;" :style="{ border:'1px solid', borderColor: Num_asesores_Orientacion_Bi<0 || Num_asesores_Orientacion_Hetero+Num_asesores_Orientacion_Homo+Num_asesores_Orientacion_Bi+Num_asesores_Orientacion_Otro != Num_asesores ? 'red' : '' }">
            </div>
            <div class="col-md-3" v-if="Num_asesores_Orientacion_Bi<0" style="color: red; margin-top: 10px;">El número de asesores bisexual debe ser POSITIVO.</div>
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-2" style="text-align: left;"></div>
            <div class="col-md-4" style="text-align: left;">
                <label for="Num_asesores_otro">Ingrese el número de asesores con otra orientación:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="Num_asesores_otro" v-model="Num_asesores_Orientacion_Otro" style="background-color: #D9D9D9; border: 0;" :style="{ border:'1px solid', borderColor: Num_asesores_Orientacion_Otro<0 || Num_asesores_Orientacion_Hetero+Num_asesores_Orientacion_Homo+Num_asesores_Orientacion_Bi+Num_asesores_Orientacion_Otro != Num_asesores ? 'red' : '' }">
            </div>
            <div class="col-md-3" v-if="Num_asesores_Orientacion_Otro<0" style="color: red; margin-top: 10px;">El número de asesores con otra orientación debe ser POSITIVO.</div>
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-2" style="text-align: left;"></div>
            <div class="col-md-4" style="text-align: left;">
                <label for="Num_asesores_conflicto">Ingrese el número de asesores victimas del conflicto armado:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="Num_asesores_conflicto" v-model="Num_asesores_Conflicto_Armado" style="background-color: #D9D9D9; border: 0;" :style="{ border:'1px solid', borderColor: Num_asesores_Conflicto_Armado<0 || Num_asesores_Conflicto_Armado > Num_asesores ? 'red' : '' }">
            </div>
            <div class="col-md-3" v-if="Num_asesores_Conflicto_Armado<0" style="color: red; margin-top: 10px;">El número de asesores victimas del conflicto armado debe ser POSITIVO.</div>
            <div class="col-md-3" v-if="Num_asesores_Conflicto_Armado>Num_asesores" style="color: red; margin-top: 10px;">El número de asesores victimas del conflicto armado debe ser menor o igual al total de asesores.</div>
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-2" style="text-align: left;"></div>
            <div class="col-md-4" style="text-align: left;">
                <label for="Num_asesores_reincorporacion">Ingrese el número de asesores en reincorporación:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="Num_asesores_reincorporacion" v-model="Num_asesores_Reincorporacion" style="background-color: #D9D9D9; border: 0;" :style="{ border:'1px solid', borderColor: Num_asesores_Reincorporacion<0 || Num_asesores_Reincorporacion > Num_asesores ? 'red' : '' }">
            </div>
            <div class="col-md-3" v-if="Num_asesores_Reincorporacion<0" style="color: red; margin-top: 10px;">El número de asesores en reincorporación debe ser POSITIVO.</div>
            <div class="col-md-3" v-if="Num_asesores_Reincorporacion>Num_asesores" style="color: red; margin-top: 10px;">El número de asesores en reincorporación debe ser menor o igual al total de asesores.</div>
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-2" style="text-align: left;"></div>
            <div class="col-md-4" style="text-align: left;">
                <label for="Num_asesores_etnia">Ingrese el número de asesores que pertenecen a una etnia:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="Num_asesores_etnia" v-model="Num_asesores_Etnia" style="background-color: #D9D9D9; border: 0;" :style="{ border:'1px solid', borderColor: Num_asesores_Etnia<0 || Num_asesores_Etnia > Num_asesores ? 'red' : '' }">
            </div>
            <div class="col-md-3" v-if="Num_asesores_Etnia<0" style="color: red; margin-top: 10px;">El número de asesores que pertenecen a una etnia deber ser POSITIVO.</div>
            <div class="col-md-3" v-if="Num_asesores_Etnia>Num_asesores" style="color: red; margin-top: 10px;">El número de asesores que pertenecen a una etnia debe ser menor o igual al total de asesores.</div>
        </div>
        <div class="row" style="margin-top: 45px;" v-if="Num_asesores_Etnia>0">
            <div class="col-md-2" style="text-align: left;"></div>
            <div class="col-md-4" style="text-align: left;">
                <label for="Num_asesores_indigena">Ingrese el número de asesores indigenas:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="Num_asesores_indigena" v-model="Num_asesores_Indigena" style="background-color: #D9D9D9; border: 0;" :style="{ border:'1px solid', borderColor: Num_asesores_Indigena<0 || Num_asesores_Etnia != Num_asesores_Indigena + Num_asesores_Gitano + Num_asesores_Raizal + Num_asesores_Afro + Num_asesores_Palenquero ? 'red' : '' }">
            </div>
            <div class="col-md-3" v-if="Num_asesores_Indigena < 0" style="color: red; margin-top: 10px;">El número de asesores indigena deber ser POSITIVO.</div>
            <div class="col-md-3" v-if="Num_asesores_Indigena + Num_asesores_Gitano + Num_asesores_Raizal + Num_asesores_Palenquero + Num_asesores_Afro != Num_asesores_Etnia" style="color: red; margin-top: 10px;">El número de asesores que pertenecen a una etnia debe ser menor o igual al total de asesores en etnias.</div>
        </div>
        <div class="row" style="margin-top: 45px;" v-if="Num_asesores_Etnia>0">
            <div class="col-md-2" style="text-align: left;"></div>
            <div class="col-md-4" style="text-align: left;">
                <label for="Num_asesores_gitano">Ingrese el número de asesores gitanos:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="Num_asesores_gitano" v-model="Num_asesores_Gitano" style="background-color: #D9D9D9; border: 0;" :style="{ border:'1px solid', borderColor: Num_asesores_Gitano<0 || Num_asesores_Etnia != Num_asesores_Indigena + Num_asesores_Gitano + Num_asesores_Raizal + Num_asesores_Afro + Num_asesores_Palenquero ? 'red' : '' }">
            </div>
            <div class="col-md-3" v-if="Num_asesores_Gitano < 0" style="color: red; margin-top: 10px;">El número de asesores gitanos deber ser POSITIVO.</div>
        </div>
        <div class="row" style="margin-top: 45px;" v-if="Num_asesores_Etnia>0">
            <div class="col-md-2" style="text-align: left;"></div>
            <div class="col-md-4" style="text-align: left;">
                <label for="Num_asesores_raizal">Ingrese el número de asesores raizales:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="Num_asesores_raizal" v-model="Num_asesores_Raizal" style="background-color: #D9D9D9; border: 0;" :style="{ border:'1px solid', borderColor: Num_asesores_Raizal<0 || Num_asesores_Etnia != Num_asesores_Indigena + Num_asesores_Gitano + Num_asesores_Raizal + Num_asesores_Afro + Num_asesores_Palenquero ? 'red' : '' }">
            </div>
            <div class="col-md-3" v-if="Num_asesores_Raizal < 0" style="color: red; margin-top: 10px;">El número de asesores raizal deber ser POSITIVO.</div>
        </div>
        <div class="row" style="margin-top: 45px;" v-if="Num_asesores_Etnia>0">
            <div class="col-md-2" style="text-align: left;"></div>
            <div class="col-md-4" style="text-align: left;">
                <label for="Num_asesores_afro">Ingrese el número de asesores afro:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="Num_asesores_afro" v-model="Num_asesores_Afro" style="background-color: #D9D9D9; border: 0;" :style="{ border:'1px solid', borderColor: Num_asesores_Afro<0 || Num_asesores_Etnia != Num_asesores_Indigena + Num_asesores_Gitano + Num_asesores_Raizal + Num_asesores_Afro + Num_asesores_Palenquero ? 'red' : '' }">
            </div>
            <div class="col-md-3" v-if="Num_asesores_Afro < 0" style="color: red; margin-top: 10px;">El número de asesores afro deber ser POSITIVO.</div>
        </div>
        <div class="row" style="margin-top: 45px;" v-if="Num_asesores_Etnia>0">
            <div class="col-md-2" style="text-align: left;"></div>
            <div class="col-md-4" style="text-align: left;">
                <label for="Num_asesores_palenquero">Ingrese el número de asesores palenqueros:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="Num_asesores_palenquero" v-model="Num_asesores_Palenquero" style="background-color: #D9D9D9; border: 0;" :style="{ border:'1px solid', borderColor: Num_asesores_Palenquero<0 || Num_asesores_Etnia != Num_asesores_Indigena + Num_asesores_Gitano + Num_asesores_Raizal + Num_asesores_Afro + Num_asesores_Palenquero ? 'red' : '' }">
            </div>
            <div class="col-md-3" v-if="Num_asesores_Palenquero < 0" style="color: red; margin-top: 10px;">El número de asesores palenquero deber ser POSITIVO.</div>
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-2" style="text-align: left;"></div>
            <div class="col-md-4" style="text-align: left;">
                <label for="Num_asesores_discapacitados">Ingrese el número de asesores discapacitados:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="Num_asesores_discapacitados" v-model="Num_asesores_Discapacidad" style="background-color: #D9D9D9; border: 0;" :style="{ border:'1px solid', borderColor: Num_asesores_Discapacidad<0 || Num_asesores_Discapacidad > Num_asesores ? 'red' : '' }">
            </div>
            <div class="col-md-3" v-if="Num_asesores_Discapacidad<0" style="color: red; margin-top: 10px;">El número de asesores con discapacidad deber ser POSITIVO.</div>
            <div class="col-md-3" v-if="Num_asesores_Discapacidad>Num_asesores" style="color: red; margin-top: 10px;">El número de asesores con discapacidad debe ser menor o igual al total de asesores.</div>
        </div>
        <div class="row" style="margin-top: 45px;" v-if="verificarPdet">
            <div class="col-md-2" style="text-align: left;"></div>
            <div class="col-md-4" style="text-align: left;">
                <label for="Num_asesores_pdet">Ingrese el número de asesores cuyo nacimiento fue en un municipio PDET:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="Num_asesores_pdet" v-model="Num_asesores_Pdet" style="background-color: #D9D9D9; border: 0;" :style="{ border:'1px solid', borderColor: Num_asesores_Pdet<0 || Num_asesores_Pdet > Num_asesores ? 'red' : '' }">
            </div>
            <div class="col-md-3" v-if="Num_asesores_Pdet<0" style="color: red; margin-top: 10px;">El número de asesores PDET deber ser POSITIVO.</div>
            <div class="col-md-3" v-if="Num_asesores_Pdet>Num_asesores" style="color: red; margin-top: 10px;">El número de asesores PDET debe ser menor o igual al total de asesores.</div>
        </div>
        <div class="row" style="margin-top: 45px;" v-if="verificarZomac">
            <div class="col-md-2" style="text-align: left;"></div>
            <div class="col-md-4" style="text-align: left;">
                <label for="Num_asesores_zomac">Ingrese el número de asesores cuyo nacimiento fue en un municipio ZOMAC:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="Num_asesores_zomac" v-model="Num_asesores_Zomac" style="background-color: #D9D9D9; border: 0;" :style="{ border:'1px solid', borderColor: Num_asesores_Zomac<0 || Num_asesores_Zomac > Num_asesores ? 'red' : '' }">
            </div>
            <div class="col-md-3" v-if="Num_asesores_Zomac<0" style="color: red; margin-top: 10px;">El número de asesores ZOMAC deber ser POSITIVO.</div>
            <div class="col-md-3" v-if="Num_asesores_Zomac>Num_asesores" style="color: red; margin-top: 10px;">El número de asesores ZOMAC debe ser menor o igual al total de asesores.</div>
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-1" style="text-align: left;"></div>
            <div class="col-md-4" style="text-align: left;">
                <label for="Num_asesorias">Ingrese el número de asesorías realizadas en el año:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="Num_asesorias" v-model="Num_asesorias" style="background-color: #D9D9D9; border: 0;" :style="{border:'1px solid', borderColor: Num_asesorias<0||typeof Num_asesorias ==='string' ? 'red' : ''}">
            </div>
            <div class="col-md-3" v-if="Num_asesorias<0" style="color: red; margin-top: 10px;">El número de asesorías debe ser POSITIVO.</div>
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-1" style="text-align: left;"></div>
            <div class="col-md-6" style="text-align: left;">
                <label for="Num_grupos_asesorados">Ingrese el número de grupos de investigación que recibieron asesorías en el año:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="Num_grupos_asesorados" v-model="Num_grupos_asesorados" style="background-color: #D9D9D9; border: 0;" :style="{border:'1px solid', borderColor: Num_grupos_asesorados<0||typeof Num_grupos_asesorados ==='string' ? 'red' : ''}">
            </div>
            <div class="col-md-2" v-if="Num_grupos_asesorados<0" style="color: red; margin-top: 10px;">El número de asesorías debe ser POSITIVO.</div>
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-1" style="text-align: left;"></div>
            <div class="col-md-6" style="text-align: left;">
                <label for="Num_promedio_asesorias">Ingrese el número promedio de asesorías que recibe cada grupo de investigación:</label>
            </div>
            <div class="col-md-3">
                <input type="number" step="0.01" class="form-control" id="Num_promedio_asesorias" v-model="Num_promedio_asesorias" style="background-color: #D9D9D9; border: 0;" :style="{border:'1px solid', borderColor:Num_promedio_asesorias<0||typeof Num_promedio_asesorias === 'string' ? 'red' : ''}">
            </div>
            <div class="col-md-2" v-if="Num_promedio_asesorias<0" style="color: red; margin-top: 10px;">El número de asesorías debe ser POSITIVO.</div>
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-1" style="text-align: left;"></div>
            <div class="col-md-6" style="text-align: left;">
                <label for="Num_grupos_por_asesor">Ingrese el número promedio de grupos de investigación vinculados al programa por asesor:</label>
            </div>
            <div class="col-md-3">
                <input type="number" step="0.01" class="form-control" id="Num_grupos_por_asesor" v-model="Num_grupos_por_asesor" style="background-color: #D9D9D9; border: 0;" :style="{border:'1px solid', borderColor:Num_grupos_por_asesor<0||typeof Num_grupos_por_asesor === 'string' ? 'red' : ''}">
            </div>
            <div class="col-md-2" v-if="Num_grupos_por_asesor<0" style="color: red; margin-top: 10px;">El número de asesorías debe ser POSITIVO.</div>
        
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-1" style="text-align: left;"></div>
            <div class="col-md-6" style="text-align: left;">
                <label for="Num_talleres">Ingrese el número promedio de talleres de formación y/o capacitación realizados en cada coordinación:</label>
            </div>
            <div class="col-md-3">
                <input type="number" step="0.01" class="form-control" id="Num_talleres" v-model="Num_talleres" style="background-color: #D9D9D9; border: 0;" :style="{border:'1px solid', borderColor:Num_talleres<0||typeof Num_talleres === 'string' ? 'red' : ''}">
            </div>
            <div class="col-md-3" v-if="Num_talleres<0" style="color: red; margin-top: 10px;">El número de asesores debe ser POSITIVO.</div>
        
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-1" style="text-align: left;"></div>
            <div class="col-md-6" style="text-align: left;">
                <label for="Num_docentes_vinculados">Ingrese el número de docentes vinculados al programa que participan en talleres de capacitación y/o formación:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="Num_docentes_vinculados" v-model="Num_docentes_vinculados" style="background-color: #D9D9D9; border: 0;" :style="{border:'1px solid', borderColor:Num_docentes_vinculados<0||typeof Num_docentes_vinculados === 'string' ? 'red' : ''}">
            </div>
            <div class="col-md-3" v-if="Num_docentes_vinculados<0" style="color: red; margin-top: 10px;">El número de asesores debe ser POSITIVO.</div>
        
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-1" style="text-align: left;"></div>
            <div class="col-md-6" style="text-align: left;">
                <label for="Num_promedio_horas_docentes">Ingrese el número promedio de horas dedicadas por los docentes vinculados al programa a actividades de Ondas:</label>
            </div>
            <div class="col-md-3">
                <input type="number" step="0.01" class="form-control" id="Num_promedio_horas_docentes" v-model="Num_promedio_horas_docentes" style="background-color: #D9D9D9; border: 0;" :style="{border:'1px solid', borderColor:Num_promedio_horas_docentes<0||typeof Num_promedio_horas_docentes === 'string' ? 'red' : ''}">
            </div>
            <div class="col-md-3" v-if="Num_promedio_horas_docentes<0" style="color: red; margin-top: 10px;">El número de asesores debe ser POSITIVO.</div>
        
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-1" style="text-align: left;"></div>
            <div class="col-md-6" style="text-align: left;">
                <label for="Num_promedio_horas_jovenes">Ingrese el número promedio de horas dedicadas por los niños, niñas y adolescentes vinculados a Ondas a las actividades de investigación:</label>
            </div>
            <div class="col-md-3">
                <input type="number" step="0.01" class="form-control" id="Num_promedio_horas_jovenes" v-model="Num_promedio_horas_jovenes" style="background-color: #D9D9D9; border: 0;" :style="{border:'1px solid', borderColor:Num_promedio_horas_jovenes<0||typeof Num_promedio_horas_jovenes === 'string' ? 'red' : ''}">
            </div>
            <div class="col-md-3" v-if="Num_promedio_horas_jovenes<0" style="color: red; margin-top: 10px;">El número de asesores debe ser POSITIVO.</div>
        
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-1" style="text-align: left;"></div>
            <div class="col-md-7" style="text-align: left;">
                <label for="Duracion_proyectos">Ingrese la duración promedio de los proyectos de investigación seleccionados:</label>
            </div>
            <div class="col-md-3">
                <input type="number" step="0.01" class="form-control" id="Duracion_proyectos" v-model="Duracion_proyectos" style="background-color: #D9D9D9; border: 0;" :style="{border:'1px solid', borderColor:Duracion_proyectos<0||typeof Duracion_proyectos === 'string' ? 'red' : ''}">
            </div>
            <div class="col-md-3" v-if="Duracion_proyectos<0" style="color: red; margin-top: 10px;">El número de asesores debe ser POSITIVO.</div>
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-1" style="text-align: left;"></div>
            <div class="col-md-7" style="text-align: left;">
                <label for="Pct_vinculados">Ingrese el porcentaje de municipios en el departamento con instituciones educativas vinculadas al programa Ondas:</label>
            </div>
            <div class="col-md-3">
                <input type="number" step="0.01" class="form-control" id="Pct_vinculados" v-model="Pct_vinculados" style="background-color: #D9D9D9; border: 0;" :style="{border:'1px solid', borderColor:Pct_vinculados<0||typeof Pct_vinculados === 'string' ? 'red' : ''}">
            </div>
            <div class="col-md-3" v-if="Pct_vinculados<0" style="color: red; margin-top: 10px;">El número de asesores debe ser POSITIVO.</div>        
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-1" style="text-align: left;"></div>
            <div class="col-md-7" style="text-align: left;">
                <label for="Monto_financiacion">Ingrese el monto total destinado a la financiación de los proyectos de Ondas:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="Monto_financiacion" v-model="Monto_financiacion" style="background-color: #D9D9D9; border: 0;" :style="{border:'1px solid', borderColor:Monto_financiacion<0||typeof Monto_financiacion === 'string' ? 'red' : ''}">
            </div>
            <div class="col-md-3" v-if="Monto_financiacion<0" style="color: red; margin-top: 10px;">El número de asesores debe ser POSITIVO.</div>
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-1" style="text-align: left;"></div>
            <div class="col-md-7" style="text-align: left;">
                <label for="Monto_promedio_proyecto">Ingrese el monto promedio destinado por proyecto de investigación:</label>
            </div>
            <div class="col-md-3">
                <input type="number" step="0.01" class="form-control" id="Monto_promedio_proyecto" v-model="Monto_promedio_proyecto" style="background-color: #D9D9D9; border: 0;" :style="{border:'1px solid', borderColor:Monto_promedio_proyecto<0||typeof Monto_promedio_proyecto === 'string' ? 'red' : ''}">
            </div>
            <div class="col-md-3" v-if="Monto_promedio_proyecto<0" style="color: red; margin-top: 10px;">El número de asesores debe ser POSITIVO.</div>        
        </div>
        <div class="row" style="margin-top: 45px; margin-bottom: 50px;">
            <div class="col-md-1" style="text-align: left;"></div>
            <div class="col-md-7" style="text-align: left;">
                <label for="Monto_promedio_por_joven">Ingrese el monto promedio destinado por niño, niña o adolescente vinculado al programa:</label>
            </div>
            <div class="col-md-3">
                <input type="number" step="0.01" class="form-control" id="Monto_promedio_por_joven" v-model="Monto_promedio_por_joven" style="background-color: #D9D9D9; border: 0;" :style="{border:'1px solid', borderColor:Monto_promedio_por_jovenr<0||typeof Monto_promedio_por_joven === 'string' ? 'red' : ''}">
            </div>
            <div class="col-md-3" v-if="Monto_promedio_por_joven<0" style="color: red; margin-top: 10px;">El número de asesores debe ser POSITIVO.</div>        
        </div>
        <button type="button" class="btn btn-primary" @click="saveData" :disabled="!isFormValid" style="margin-bottom: 50px; margin-left: 45%; width: 150px">Guardar</button>
</template>

<script>
import { jwtDecode } from 'jwt-decode';
export default {
    name: 'IngresoAcompanamiento',
    data() {
        return {
            Anio: this.anio,
            Departamento: this.departamento,
            Num_asesores: 0,
            Num_asesorias: 0,
            Num_grupos_asesorados: 0,
            Num_promedio_asesorias: 0,
            Num_grupos_por_asesor: 0,
            Num_talleres: 0,
            Num_docentes_vinculados: 0,
            Num_promedio_horas_docentes: 0,
            Num_promedio_horas_jovenes: 0,
            Duracion_proyectos: 0,
            Pct_vinculados: 0,
            Monto_financiacion: 0,
            Monto_promedio_proyecto: 0,
            Monto_promedio_por_joven: 0,
            Num_asesores_hombre: 0,
            Num_asesores_mujer: 0,
            Num_asesores_intersexual: 0,
            Num_asesores_Orientacion_Homo:0,
            Num_asesores_Orientacion_Hetero:0,
            Num_asesores_Orientacion_Bi:0,
            Num_asesores_Orientacion_Otro:0,
            Num_asesores_Conflicto_Armado:0,
            Num_asesores_Reincorporacion:0,
            Num_asesores_Etnia:0,
            Num_asesores_Pdet:0,
            Num_asesores_Zomac:0,
            Num_asesores_Discapacidad:0,
            Num_asesores_Indigena:0,
            Num_asesores_Gitano:0,
            Num_asesores_Raizal:0,
            Num_asesores_Palenquero:0,
            Num_asesores_Afro:0

        };
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

            const genero = this.Num_asesores_hombre + this.Num_asesores_mujer + this.Num_asesores_intersexual === this.Num_asesores;
            const orientacion = this.Num_asesores_Orientacion_Hetero + this.Num_asesores_Orientacion_Homo + this.Num_asesores_Orientacion_Bi + this.Num_asesores_Orientacion_Otro === this.Num_asesores;
            const conflicto = this.Num_asesores_Conflicto_Armado <= this.Num_asesores;
            const reincorporacion = this.Num_asesores_Reincorporacion <= this.Num_asesores;
            const etnia = (this.Num_asesores_Etnia === this.Num_asesores_Indigena + this.Num_asesores_Gitano + this.Num_asesores_Raizal + this.Num_asesores_Palenquero + this.Num_asesores_Afro) && (this.Num_asesores_Etnia <= this.Num_asesores);
            const pdet = this.Num_asesores_Pdet <= this.Num_asesores;
            const zomac = this.Num_asesores_Zomac <= this.Num_asesores;
            const discapacidad = this.Num_asesores_Discapacidad <= this.Num_asesores;
            return  genero && orientacion && conflicto && reincorporacion && etnia && pdet && zomac && discapacidad;
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
    methods: {
        async saveData() {
        const token = localStorage.getItem('token');
        const id = jwtDecode(token).id
        const response = await fetch('https://localhost:7192/api/Acompaniamientos/'+id+'/'+token, {
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
}};
</script>

<style scoped>
/* Your component-specific styles go here */
</style>