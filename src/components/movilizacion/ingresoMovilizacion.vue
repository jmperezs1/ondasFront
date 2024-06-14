<template>
    <div class="row" style="margin-top: 45px;">
            <div class="col-md-1" style="text-align: left;"></div>
            <div class="col-md-5" style="text-align: left;">
                <label for="num_talleres_entidades_coordinadoras">Ingrese el número de talleres, conferencias, foros realizados por las entidades coordinadoras, paralelos a los procesos de capacitación de maestros:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="num_talleres_entidades_coordinadoras" min="0" v-model.number="Num_Talleres_Entidades_Coordinadoras" @keydown="preventDecimal" @paste="preventPaste" style="background-color: #D9D9D9; border: 0;" :style="{border:'1px solid', borderColor: this.Num_Talleres_Entidades_Coordinadoras<0 ? 'red' : ''}">
            </div>
            <div class="col-md-3" v-if="Num_Talleres_Entidades_Coordinadoras<0" style="color: red; margin-top: 10px; text-align: center">El número de talleres debe ser POSITIVO.</div>
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-1" style="text-align: left;"></div>
            <div class="col-md-4" style="text-align: left;">
                <label for="num_encuentros">Ingrese el número de encuentros realizados:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="num_encuentros" min="0" v-model.number="Num_Encuentros" @keydown="preventDecimal" @paste="preventPaste" style="background-color: #D9D9D9; border: 0;" :style="{border:'1px solid', borderColor: this.Num_Encuentros<0 ? 'red' : ''}" @change="updateEncuentros">
            </div>
            <div class="col-md-3" v-if="Num_Encuentros<0" style="color: red; margin-top: 10px; text-align: center">El número de encuentros debe ser POSITIVO.</div>
        </div>
        <div class="row" style="margin-top: 45px;" v-if="Num_Encuentros>0">
            <div class="col-md-1" style="text-align: left;"></div>
            <div class="col-md-4" style="text-align: left;">
                <label for="num_participantes_encuentros">Ingrese el número total de participantes en los encuentros:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="num_participantes_encuentros" min="0" v-model.number="Num_Participantes_Encuentros" @keydown="preventDecimal" @paste="preventPaste" style="background-color: #D9D9D9; border: 0;" :style="{border:'1px solid', borderColor: this.Num_Participantes_Encuentros<0 ? 'red' : ''}">
            </div>
            <div class="col-md-3" v-if="Num_Participantes_Encuentros<0" style="color: red; margin-top: 10px; text-align: center">El número de participantes debe ser POSITIVO.</div>
        </div>
        <div v-if="Num_Encuentros>0">
            <div class="row" style="margin-top: 45px;" v-for="index in parseInt(Num_Encuentros)" :key="index">
                <div class="col-md-2" style="text-align: left;"></div>
                <div class="col-md-4" style="text-align: left;">
                    <label :for=index>Ingrese el número de participantes en el encuentro {{ index }}:</label>
                </div>
                <div class="col-md-3">
                    <input type="number" class="form-control" :id=index min="0" v-model="encuentros[index - 1]" @keydown="preventDecimal" @paste="preventPaste" style="background-color: #D9D9D9; border: 0;">
                </div>
            </div>
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-1" style="text-align: left;"></div>
            <div class="col-md-5" style="text-align: left;">
                <label for="num_premios_grupos_investigacion">Ingrese el número de premios recibidos por los grupos de investigación vinculados al programa Ondas:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="num_premios_grupos_investigacion" min="0" v-model.number="Num_Premios_Grupos_Investigacion" @keydown="preventDecimal" @paste="preventPaste" style="background-color: #D9D9D9; border: 0;" :style="{border:'1px solid', borderColor: this.Num_Premios_Grupos_Investigacion<0 ? 'red' : ''}">
            </div>
            <div class="col-md-3" v-if="Num_Premios_Grupos_Investigacion<0" style="color: red; margin-top: 10px; text-align: center">El número de premios debe ser POSITIVO.</div>
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-1" style="text-align: left;"></div>
            <div class="col-md-5" style="text-align: left;">
                <label for="num_vinculados_ferias">Ingrese el número de niños, niñas y jóvenes vinculados al programa Ondas que participan en ferias de ciencia, tecnología e innovación </label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="num_vinculados_ferias" min="0" v-model.number="Num_Vinculados_Ferias" @keydown="preventDecimal" @paste="preventPaste" style="background-color: #D9D9D9; border: 0;" :style="{border:'1px solid', borderColor: this.Num_Vinculados_Ferias<0 ? 'red' : ''}">
            </div>
            <div class="col-md-3" v-if="Num_Vinculados_Ferias<0" style="color: red; margin-top: 10px; text-align: center">El número de niños debe ser POSITIVO.</div>
        </div>
        <div class="row" style="margin-top: 45px;" v-if="Num_Vinculados_Ferias>0">
            <div class="col-md-2" style="text-align: left;"></div>
            <div class="col-md-5" style="text-align: left;">
                <label for="num_vinculados_conflicto">Ingrese el número de niños, niñas y jóvenes vinculados al programa Ondas victimas del conflicto armado que participan en ferias de ciencia, tecnología e innovación:</label>
            </div>
            <div class="col-md-2">
                <input type="number" class="form-control" id="num_vinculados_conflicto" min="0" v-model.number="Num_Vinculados_Conflicto_Armado" @keydown="preventDecimal" @paste="preventPaste" style="background-color: #D9D9D9; border: 0;" :style="{border:'1px solid', borderColor: this.Num_Vinculados_Conflicto_Armado<0 || Num_Vinculados_Conflicto_Armado>Num_Vinculados_Ferias? 'red' : ''}">
            </div>
            <div class="col-md-3" v-if="Num_Vinculados_Conflicto_Armado<0" style="color: red; margin-top: 10px; text-align: center">El número de victimas del conflicto debe ser POSITIVO.</div>
            <div class="col-md-3" v-if="Num_Vinculados_Conflicto_Armado>Num_Vinculados_Ferias" style="color: red; margin-top: 10px; text-align: center">El número de victimas debe ser menor o igual al total de niños.</div>
        </div>
        <div class="row" style="margin-top: 45px;" v-if="Num_Vinculados_Ferias>0">
            <div class="col-md-2" style="text-align: left;"></div>
            <div class="col-md-5" style="text-align: left;">
                <label for="num_vinculados_reincorporacion">Ingrese el número de niños, niñas y jóvenes vinculados al programa Ondas en reincorporación que participan en ferias de ciencia, tecnología e innovación:</label>
            </div>
            <div class="col-md-2">
                <input type="number" class="form-control" id="num_vinculados_reincorporacion" min="0" v-model.number="Num_Vinculados_Reincorporacion" @keydown="preventDecimal" @paste="preventPaste" style="background-color: #D9D9D9; border: 0;" :style="{border:'1px solid', borderColor: this.Num_Vinculados_Reincorporacion<0 || Num_Vinculados_Reincorporacion>Num_Vinculados_Ferias? 'red' : ''}">
            </div>
            <div class="col-md-3" v-if="Num_Vinculados_Reincorporacion<0" style="color: red; margin-top: 10px; text-align: center">El número de reincorporados debe ser POSITIVO.</div>
            <div class="col-md-3" v-if="Num_Vinculados_Reincorporacion>Num_Vinculados_Ferias" style="color: red; margin-top: 10px; text-align: center">El número de reincorporados debe ser menor o igual al número total de niños.</div>
        </div>
        <div class="row" style="margin-top: 45px;" v-if="Num_Vinculados_Ferias>0">
            <div class="col-md-2" style="text-align: left;"></div>
            <div class="col-md-5" style="text-align: left;">
                <label for="num_vinculados_etnia">Ingrese el número de niños, niñas y jóvenes vinculados al programa Ondas pertenecientes a una etnia que participan en ferias de ciencia, tecnología e innovación:</label>
            </div>
            <div class="col-md-2">
                <input type="number" class="form-control" id="num_vinculados_etnia" min="0" v-model.number="Num_Vinculados_Etnia" @keydown="preventDecimal" @paste="preventPaste" style="background-color: #D9D9D9; border: 0;" :style="{border:'1px solid', borderColor: this.Num_Vinculados_Etnia<0 || Num_Vinculados_Etnia>Num_Vinculados_Ferias? 'red' : ''}">
            </div>
            <div class="col-md-3" v-if="Num_Vinculados_Etnia<0" style="color: red; margin-top: 10px; text-align: center">El número de etnia debe ser POSITIVO.</div>
            <div class="col-md-3" v-if="Num_Vinculados_Etnia>=Num_Vinculados_Ferias" style="color: red; margin-top: 10px; text-align: center">El número de etnia debe ser menor o igual número de niños.</div>
        </div>
        <div class="row" style="margin-top: 45px;" v-if="Num_Vinculados_Etnia>0">
            <div class="col-md-3" style="text-align: left;"></div>
            <div class="col-md-5" style="text-align: left;">
                <label for="num_vinculados_indigena">Ingrese el número de niños, niñas y jóvenes vinculados al programa Ondas pertenecientes a la etnia Indigena que participan en ferias de ciencia, tecnología e innovación:</label>
            </div>
            <div class="col-md-2">
                <input type="number" class="form-control" id="num_vinculados_indigena" min="0" v-model.number="Num_Vinculados_Indigena" @keydown="preventDecimal" @paste="preventPaste" style="background-color: #D9D9D9; border: 0;" :style="{border:'1px solid', borderColor: this.Num_Vinculados_Indigena<0 || Num_Vinculados_Indigena+Num_Vinculados_Gitano+Num_Vinculados_Raizal+Num_Vinculados_Afro+Num_Vinculados_Palenquero!=Num_Vinculados_Etnia? 'red' : ''}">
            </div>
            <div class="col-md-2" v-if="Num_Vinculados_Indigena<0" style="color: red; margin-top: 10px; text-align: center">El número de indigenas debe ser POSITIVO.</div>
            <div class="col-md-2" v-if="Num_Vinculados_Etnia!=Num_Vinculados_Indigena+Num_Vinculados_Gitano+Num_Vinculados_Raizal+Num_Vinculados_Afro+Num_Vinculados_Palenquero" style="color: red; margin-top: 10px; text-align: center">La suma de cada etnia debe ser igualal número de niños total que pertenecen a una etnia.</div>
        </div>
        <div class="row" style="margin-top: 45px;" v-if="Num_Vinculados_Etnia>0">
            <div class="col-md-3" style="text-align: left;"></div>
            <div class="col-md-5" style="text-align: left;">
                <label for="num_vinculados_gitano">Ingrese el número de niños, niñas y jóvenes vinculados al programa Ondas pertenecientes a la etnia Gitano que participan en ferias de ciencia, tecnología e innovación:</label>
            </div>
            <div class="col-md-2">
                <input type="number" class="form-control" id="num_vinculados_gitano" min="0" v-model.number="Num_Vinculados_Gitano" @keydown="preventDecimal" @paste="preventPaste" style="background-color: #D9D9D9; border: 0;" :style="{border:'1px solid', borderColor: this.Num_Vinculados_Gitano<0 || Num_Vinculados_Indigena+Num_Vinculados_Gitano+Num_Vinculados_Raizal+Num_Vinculados_Afro+Num_Vinculados_Palenquero!=Num_Vinculados_Etnia? 'red' : ''}">
            </div>
            <div class="col-md-2" v-if="Num_Vinculados_Gitano<0" style="color: red; margin-top: 10px; text-align: center">El número de gitanos debe ser POSITIVO.</div>
        </div>
        <div class="row" style="margin-top: 45px;" v-if="Num_Vinculados_Etnia>0">
            <div class="col-md-3" style="text-align: left;"></div>
            <div class="col-md-5" style="text-align: left;">
                <label for="num_vinculados_raizal">Ingrese el número de niños, niñas y jóvenes vinculados al programa Ondas pertenecientes a la etnia Raizal que participan en ferias de ciencia, tecnología e innovación:</label>
            </div>
            <div class="col-md-2">
                <input type="number" class="form-control" id="num_vinculados_raizal" min="0" v-model.number="Num_Vinculados_Raizal" @keydown="preventDecimal" @paste="preventPaste" style="background-color: #D9D9D9; border: 0;" :style="{border:'1px solid', borderColor: this.Num_Vinculados_Raizal<0 || Num_Vinculados_Indigena+Num_Vinculados_Gitano+Num_Vinculados_Raizal+Num_Vinculados_Afro+Num_Vinculados_Palenquero!=Num_Vinculados_Etnia? 'red' : ''}">
            </div>
            <div class="col-md-2" v-if="Num_Vinculados_Raizal<0" style="color: red; margin-top: 10px; text-align: center">El número de raizales debe ser POSITIVO.</div>
        </div>
        <div class="row" style="margin-top: 45px;" v-if="Num_Vinculados_Etnia>0">
            <div class="col-md-3" style="text-align: left;"></div>
            <div class="col-md-5" style="text-align: left;">
                <label for="num_vinculados_afro">Ingrese el número de niños, niñas y jóvenes vinculados al programa Ondas pertenecientes a la etnia Afro que participan en ferias de ciencia, tecnología e innovación:</label>
            </div>
            <div class="col-md-2">
                <input type="number" class="form-control" id="num_vinculados_afro" min="0" v-model.number="Num_Vinculados_Afro" @keydown="preventDecimal" @paste="preventPaste" style="background-color: #D9D9D9; border: 0;" :style="{border:'1px solid', borderColor: this.Num_Vinculados_Afro<0 || Num_Vinculados_Indigena+Num_Vinculados_Gitano+Num_Vinculados_Raizal+Num_Vinculados_Afro+Num_Vinculados_Palenquero!=Num_Vinculados_Etnia? 'red' : ''}">
            </div>
            <div class="col-md-2" v-if="Num_Vinculados_Afro<0" style="color: red; margin-top: 10px; text-align: center">El número de afro debe ser POSITIVO.</div>
        </div>
        <div class="row" style="margin-top: 45px;" v-if="Num_Vinculados_Etnia>0">
            <div class="col-md-3" style="text-align: left;"></div>
            <div class="col-md-5" style="text-align: left;">
                <label for="num_vinculados_palenquero">Ingrese el número de niños, niñas y jóvenes vinculados al programa Ondas pertenecientes a la etnia Palenquero que participan en ferias de ciencia, tecnología e innovación:</label>
            </div>
            <div class="col-md-2">
                <input type="number" class="form-control" id="num_vinculados_palenquero" min="0" v-model.number="Num_Vinculados_Palenquero" @keydown="preventDecimal" @paste="preventPaste" style="background-color: #D9D9D9; border: 0;" :style="{border:'1px solid', borderColor: this.Num_Vinculados_Palenquero<0 || Num_Vinculados_Indigena+Num_Vinculados_Gitano+Num_Vinculados_Raizal+Num_Vinculados_Afro+Num_Vinculados_Palenquero!=Num_Vinculados_Etnia? 'red' : ''}">
            </div>
            <div class="col-md-2" v-if="Num_Vinculados_Afro<0" style="color: red; margin-top: 10px; text-align: center">El número de palenquero debe ser POSITIVO.</div>
        </div>
        <div class="row" style="margin-top: 45px;" v-if="Num_Vinculados_Ferias>0">
            <div class="col-md-2" style="text-align: left;"></div>
            <div class="col-md-5" style="text-align: left;">
                <label for="num_vinculados_discapacitado">Ingrese el número de niños, niñas y jóvenes vinculados al programa Ondas discapacitados en ferias de ciencia, tecnología e innovación:</label>
            </div>
            <div class="col-md-2">
                <input type="number" class="form-control" id="num_vinculados_discapacitado" min="0" v-model.number="Num_Vinculados_Discapacidad" @keydown="preventDecimal" @paste="preventPaste" style="background-color: #D9D9D9; border: 0;" :style="{border:'1px solid', borderColor: this.Num_Vinculados_Discapacidad<0 || Num_Vinculados_Discapacidad>Num_Vinculados_Ferias? 'red' : ''}">
            </div>
            <div class="col-md-3" v-if="Num_Vinculados_Discapacidad<0" style="color: red; margin-top: 10px; text-align: center">El número de discapacitados debe ser POSITIVO.</div>
            <div class="col-md-3" v-if="Num_Vinculados_Discapacidad>Num_Vinculados_Ferias" style="color: red; margin-top: 10px; text-align: center">El número de discapacitados debe ser menor o igual al total de niños.</div>
        </div>
        
        <div class="row" style="margin-top: 45px;" v-if="verificarPdet && Num_Vinculados_Ferias>0">
            <div class="col-md-2" style="text-align: left;"></div>
            <div class="col-md-4" style="text-align: left;">
                <label for="num_vinculados_pdet">Ingrese el número de niños participantes que cuyo municipio de nacimiento es PDET:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="num_vinculados_pdet" v-model.number="Num_Vinculados_Pdet" @keydown="preventDecimal" @paste="preventPaste" style="background-color: #D9D9D9; border: 0;" :style="{border:'1px solid', borderColor:   this.Num_Vinculados_Pdet > this.Num_Vinculados_Ferias || this.Num_Vinculados_Pdet<0 ? 'red' : ''}">
            </div>
            <div class="col-md-3" v-if="Num_Vinculados_Pdet<0" style="color: red; margin-top: 10px; text-align: center">El número de niños PDET debe ser POSITIVO.</div>
            <div class="col-md-3" v-if="this.Num_Vinculados_Pdet > this.Num_Vinculados_Ferias" style="color: red; margin-top: 10px; text-align: center">El número de niños PDET debe ser menor o igual al número total de niños.</div>
        </div>
        <div class="row" style="margin-top: 45px;" v-if="verificarZomac && Num_Vinculados_Ferias>0">
            <div class="col-md-2" style="text-align: left;"></div>
            <div class="col-md-4" style="text-align: left;">
                <label for="num_vinculados_zomac">Ingrese el número de niños participantes que cuyo municipio de nacimiento es ZOMAC:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="num_vinculados_zomac" v-model.number="Num_Vinculados_Zomac" @keydown="preventDecimal" @paste="preventPaste" style="background-color: #D9D9D9; border: 0;" :style="{border:'1px solid', borderColor:   this.Num_Vinculados_Zomac > this.Num_Vinculados_Ferias || this.Num_Vinculados_Zomac<0 ? 'red' : ''}">
            </div>
            <div class="col-md-3" v-if="Num_Vinculados_Zomac<0" style="color: red; margin-top: 10px; text-align: center">El número de niños ZOMAC debe ser POSITIVO.</div>
            <div class="col-md-3" v-if="this.Num_Vinculados_Zomac > this.Num_Vinculados_Ferias" style="color: red; margin-top: 10px; text-align: center">El número de niños Zomac debe ser menor o igual al número total de niños.</div>
        </div>

        <div class="row" style="margin-top: 45px;">
            <div class="col-md-1" style="text-align: left;"></div>
            <div class="col-md-5" style="text-align: left;">
                <label for="num_vinculados_internacionales">Ingrese el número de niños, niñas y jóvenes vinculados al programa que participan en ferias de ciencia, tecnología e innovación internacionales:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="num_vinculados_internacionales" min="0" v-model.number="Num_Vinculados_Internacionales" @keydown="preventDecimal" @paste="preventPaste" style="background-color: #D9D9D9; border: 0;" :style="{border:'1px solid', borderColor: this.Num_Vinculados_Internacionales<0 ? 'red' : ''}">
            </div>
            <div class="col-md-3" v-if="Num_Vinculados_Internacionales<0" style="color: red; margin-top: 10px; text-align: center">El número de niños internacionales debe ser POSITIVO.</div>
        </div>
        <div class="row" style="margin-top: 45px; margin-bottom: 50px;">
            <div class="col-md-1" style="text-align: left;"></div>
            <div class="col-md-5" style="text-align: left;">
                <label for="num_proyectos_ferias">Ingrese el número de proyectos de investigación apoyados por el programa que son presentados en ferias de ciencia, tecnología e innovación:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="num_proyectos_ferias" min="0" v-model.number="Num_Proyectos_Ferias" @keydown="preventDecimal" @paste="preventPaste" style="background-color: #D9D9D9; border: 0;" :style="{border:'1px solid', borderColor: this.Num_Proyectos_Ferias<0 ? 'red' : ''}">
            </div>
            <div class="col-md-3" v-if="Num_Proyectos_Ferias<0" style="color: red; margin-top: 10px; text-align: center">El número de niños proyectos ferias debe ser POSITIVO.</div>
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-1" style="text-align: left;"></div>
            <div class="col-md-5" style="text-align: left;">
                <label for="num_grupos_ganadores">Ingrese el número de grupos de investigación vinculados al programa Ondas que han recibido premios o reconocimientos:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="num_grupos_ganadores" min="0" v-model.number="Num_Grupos_Ganadores" @keydown="preventDecimal" @paste="preventPaste" style="background-color: #D9D9D9; border: 0;" :style="{border:'1px solid', borderColor: this.Num_Grupos_Ganadores<0 ? 'red' : ''}">
            </div>
            <div class="col-md-3" v-if="Num_Grupos_Ganadores<0" style="color: red; margin-top: 10px; text-align: center">El número de premios debe ser POSITIVO.</div>
        </div>
                <div class="row" style="margin-top: 45px;">
            <div class="col-md-1" style="text-align: left;"></div>
            <div class="col-md-5" style="text-align: left;">
                <label for="num_proyectos_internacional">Ingrese el número de proyectos de investigación apoyados por el programa que son presentados en ferias de ciencia, tecnología e innovación internacionales :</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="num_proyectos_internacional" min="0" v-model.number="Num_Proyectos_Internacionales" @keydown="preventDecimal" @paste="preventPaste" style="background-color: #D9D9D9; border: 0;" :style="{border:'1px solid', borderColor: this.Num_Proyectos_Internacionales<0 ? 'red' : ''}">
            </div>
            <div class="col-md-3" v-if="Num_Proyectos_Internacionales<0" style="color: red; margin-top: 10px; text-align: center">El número de proyectos internacionales debe ser POSITIVO.</div>
        </div>
        <button type="button" class="btn btn-primary" @click="saveData" style="margin-bottom: 50px; margin-left: 45%; width: 150px" :disabled="!isFormValid">Guardar</button>

</template>

<script>
import { jwtDecode } from 'jwt-decode';
export default {
    name: 'IngresoMovilizacion',
    data() {
        return {
            Anio: this.anio,
            Departamento: this.departamento,
            Num_Talleres_Entidades_Coordinadoras: 0,
            Num_Encuentros: 0,
            Num_Participantes_Encuentros: 0,
            Num_Premios_Grupos_Investigacion: 0,
            Num_Vinculados_Ferias: 0,
            Num_Vinculados_Internacionales: 0,
            Num_Proyectos_Internacionales: 0,
            Num_Grupos_Ganadores: 0,
            Num_Proyectos_Ferias: 0,
            Num_Vinculados_Conflicto_Armado: 0,
            Num_Vinculados_Reincorporacion: 0,
            Num_Vinculados_Etnia: 0,
            Num_Vinculados_Pdet: 0,
            Num_Vinculados_Zomac:0,
            Num_Vinculados_Indigena:0,
            Num_Vinculados_Gitano:0,
            Num_Vinculados_Raizal:0,
            Num_Vinculados_Palenquero:0,
            Num_Vinculados_Afro:0,
            Num_Vinculados_Discapacidad:0,
            encuentros: []
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
        },
        identificador: {
            type: Boolean,
            required: false,
            default: false
        }   
    },
    methods: {
        preventDecimal(event) {
      // Prevent user from entering a decimal point or other invalid characters
      const invalidKeys = ['.', 'e', 'E', 'v', '-'];
      if (invalidKeys.includes(event.key) || (event.ctrlKey && event.key === 'v')) {
        event.preventDefault();
      }
    },
    preventPaste(event) {
      // Prevent user from pasting non-integer values
      const pasteData = event.clipboardData.getData('text');
      if (!/^\d+$/.test(pasteData)) {
        event.preventDefault();
        this.errorMessage = 'Only whole numbers are allowed.';
      } else {
        this.errorMessage = '';
      }
    },
        updateEncuentros() {
                if (this.encuentros.length > this.Num_Encuentros) {
                    this.encuentros.splice(this.Num_Encuentros);
                }
                if(this.Num_Encuentros == 0){
                    this.Num_Participantes_Encuentros = 0;
                }
            },
        async saveData() {
        const token = localStorage.getItem('token');
        const id = jwtDecode(token).id
        this.generateEncuentrosData();
        if(this.identificador){
        const response = await fetch(`${this.$baseRoute}/Movilizaciones/${id}/${token}`, {
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
        else{
            alert('Error al guardar los datos');
            }
        }
        else{
            console.log(JSON.stringify(this.$data))
            const response = await fetch(`${this.$baseRoute}/movilizaciones/anio/${this.anio}/departamento/${this.departamento}/${id}/${token}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(this.$data)
        });
        if(response.ok){
            window.location.reload(); // Refresh the page
            alert('Datos guardados correctamente');
            }
        else{
            alert('Error al guardar los datos');
            }

        }
    },
  generateEncuentrosData() {
    // Initialize an empty array to store the generated objects
    let generatedData = [];

    // Loop through the encuentros array
    this.encuentros.forEach((encuentro, index) => {
      // Create an object with the required structure
      let encuentroData = {
        anio: this.Anio, // You can set the year as needed
        departamento: this.Departamento, // You can set the department as needed
        id: index + 1, // Assuming id starts from 1 and increments
        num_Personas: encuentro // Use the value from the encuentros array
      };

      // Push the created object into the generatedData array
      generatedData.push(encuentroData);
    });

    // Assign the generated array of objects to the 'encuentros' property
    this.encuentros = generatedData;
  }
},
watch:{
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
                if (key !== 'Anio' && key !== 'Departamento' && key !== 'encuentros') {
                    this.$data[key] = 0;
                }
                else if (key === 'encuentros') {
                    this.$data[key] = [];
                }
            }
    },
    Num_Vinculados_Ferias(newVal){
        if(newVal == 0){
            this.Num_Vinculados_Conflicto_Armado= 0;
            this.Num_Vinculados_Reincorporacion= 0;
            this.Num_Vinculados_Etnia= 0;
            this.Num_Vinculados_Pdet= 0;
            this.Num_Vinculados_Zomac=0;
            this.Num_Vinculados_Indigena=0;
            this.Num_Vinculados_Gitano=0;
            this.Num_Vinculados_Raizal=0;
            this.Num_Vinculados_Palenquero=0;
            this.Num_Vinculados_Afro=0;
            this.Num_Vinculados_Discapacidad=0;
        }
    }
},
computed: {
    isFormValid(){
        for (const key in this.$data) {
                if (key != "Departamento" && key != "encuentros"){
                    if (this.$data[key] < 0 || typeof(this.$data[key]) === "string") {
                    return false;
                    }
                }
            }
        
        const conflicto = this.Num_Vinculados_Conflicto_Armado <= this.Num_Vinculados_Ferias;
        const reincorporacion = this.Num_Vinculados_Reincorporacion <= this.Num_Vinculados_Ferias;
        const etnia = this.Num_Vinculados_Etnia <= this.Num_Vinculados_Ferias;
        const pdet = this.Num_Vinculados_Pdet <= this.Num_Vinculados_Ferias;
        const zomac = this.Num_Vinculados_Zomac <= this.Num_Vinculados_Ferias;
        const etnias = this.Num_Vinculados_Indigena + this.Num_Vinculados_Gitano + this.Num_Vinculados_Raizal + this.Num_Vinculados_Afro + this.Num_Vinculados_Palenquero === this.Num_Vinculados_Etnia;
        const discapacidad = this.Num_Vinculados_Discapacidad <= this.Num_Vinculados_Ferias;
        return conflicto && reincorporacion && etnia && pdet && zomac && etnias && discapacidad;

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
    async mounted() {
        if(this.identificador){
            const token = localStorage.getItem('token');
            const id = jwtDecode(token).id
            const movilizacion = await fetch(`${this.$baseRoute}/Movilizaciones/anio/${this.anio}/departamento/${this.departamento}/${id}/${token}`);
            const movilizacionData = await movilizacion.json();
            this.Num_Talleres_Entidades_Coordinadoras = movilizacionData[0].num_Talleres_Entidades_Coordinadoras;
            this.Num_Encuentros = movilizacionData[0].num_Encuentros;
            this.Num_Participantes_Encuentros = movilizacionData[0].num_Participantes_Encuentros;
            this.Num_Premios_Grupos_Investigacion = movilizacionData[0].num_Premios_Grupos_Investigacion;
            this.Num_Vinculados_Ferias = movilizacionData[0].num_Vinculados_Ferias;
            this.Num_Vinculados_Internacionales = movilizacionData[0].num_Vinculados_Internacionales;
            this.Num_Proyectos_Internacionales = movilizacionData[0].num_Proyectos_Internacionales;
            this.Num_Grupos_Ganadores = movilizacionData[0].num_Grupos_Ganadores;
            this.Num_Proyectos_Ferias = movilizacionData[0].num_Proyectos_Ferias;
            this.Num_Vinculados_Conflicto_Armado = movilizacionData[0].num_Vinculados_Conflicto_Armado;
            this.Num_Vinculados_Reincorporacion = movilizacionData[0].num_Vinculados_Reincorporacion;
            this.Num_Vinculados_Etnia = movilizacionData[0].num_Vinculados_Etnia;
            this.Num_Vinculados_Pdet = movilizacionData[0].num_Vinculados_Pdet;
            this.Num_Vinculados_Zomac = movilizacionData[0].num_Vinculados_Zomac;
            this.Num_Vinculados_Indigena = movilizacionData[0].num_Vinculados_Indigena;
            this.Num_Vinculados_Gitano = movilizacionData[0].num_Vinculados_Gitano;
            this.Num_Vinculados_Raizal = movilizacionData[0].num_Vinculados_Raizal;
            this.Num_Vinculados_Palenquero = movilizacionData[0].num_Vinculados_Palenquero;
            this.Num_Vinculados_Afro = movilizacionData[0].num_Vinculados_Afro;
            this.Num_Vinculados_Discapacidad = movilizacionData[0].num_Vinculados_Discapacidad;
            this.encuentros = movilizacionData[0].encuentros.map(encuentro => encuentro.num_Personas);
        }
    }
};

</script>

<style scoped>
/* Your component's CSS styles go here */
</style>