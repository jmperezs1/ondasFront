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
                <label for="num_asesores">Total:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="num_asesores"  v-model="num_asesores" style="background-color: #D9D9D9; border: 0;" :style="{ border:'1px solid', borderColor: num_asesores<0 || typeof num_asesores === 'string'? 'red' : '' }">
            </div>
            <div class="col-md-3" v-if="num_asesores<0" style="color: red; margin-top: 10px;">El número de asesores debe ser POSITIVO.</div>
            <div class="col-md-3" v-if="typeof num_asesores === 'string'" style="color: red; margin-top: 10px;">Debe ingresar un valor.</div>
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-2" style="text-align: left;"></div>
            <div class="col-md-1" style="text-align: left;">
                <label for="num_asesores_hombre">Masculino:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="num_asesores_hombre" v-model="num_asesores_hombre" style="background-color: #D9D9D9; border: 0;" :style="{ border:'1px solid', borderColor: num_asesores_hombre<0 || typeof num_asesores_hombre === 'string' || num_asesores_hombre+num_asesores_mujer!=num_asesores? 'red' : '' }">
            </div>
            <div class="col-md-3" v-if="num_asesore_hombres<0" style="color: red; margin-top: 10px;">El número de asesores debe ser POSITIVO.</div>
            <div class="col-md-3" v-if="typeof num_asesores_hombre === 'string'" style="color: red; margin-top: 10px;">Debe ingresar un valor.</div>
            <div class="col-md-3" v-if="num_asesores_hombre+num_asesores_mujer!=num_asesores" style="color: red; margin-top: 10px;">La suma de asesores masculinos y femeninos debe ser igual al total de asesores.</div>
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-2" style="text-align: left;"></div>
            <div class="col-md-1" style="text-align: left;">
                <label for="num_asesores_femenino">Femenino:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="num_asesores_femenino" v-model="num_asesores_mujer" style="background-color: #D9D9D9; border: 0;" :style="{ border:'1px solid', borderColor: num_asesores_mujer<0 || typeof num_asesores_mujer === 'string' || num_asesores_hombre+num_asesores_mujer!=num_asesores? 'red' : '' }">
            </div>
            <div class="col-md-3" v-if="num_asesores_mujer<0" style="color: red; margin-top: 10px;">El número de asesores debe ser POSITIVO.</div>
            <div class="col-md-3" v-if="typeof num_asesores_mujer === 'string'" style="color: red; margin-top: 10px;">Debe ingresar un valor.</div>
            <div class="col-md-3" v-if="num_asesores_hombre+num_asesores_mujer!=num_asesores" style="color: red; margin-top: 10px;">La suma de asesores masculinos y femeninos debe ser igual al total de asesores.</div>
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-1" style="text-align: left;"></div>
            <div class="col-md-4" style="text-align: left;">
                <label for="num_asesorias">Ingrese el número de asesorías realizadas en el año:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="num_asesorias" v-model="num_asesorias" style="background-color: #D9D9D9; border: 0;" :style="{border:'1px solid', borderColor: num_asesorias<0||typeof num_asesorias ==='string' ? 'red' : ''}">
            </div>
            <div class="col-md-3" v-if="num_asesorias<0" style="color: red; margin-top: 10px;">El número de asesorías debe ser POSITIVO.</div>
            <div class="col-md-3" v-if="typeof num_asesorias === 'string'" style="color: red; margin-top: 10px;">Debe ingresar un valor.</div>
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-1" style="text-align: left;"></div>
            <div class="col-md-6" style="text-align: left;">
                <label for="num_grupos_asesorados">Ingrese el número de grupos de investigación que recibieron asesorías en el año:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="num_grupos_asesorados" v-model="num_grupos_asesorados" style="background-color: #D9D9D9; border: 0;" :style="{border:'1px solid', borderColor: num_grupos_asesorados<0||typeof num_grupos_asesorados ==='string' ? 'red' : ''}">
            </div>
            <div class="col-md-2" v-if="num_grupos_asesorados<0" style="color: red; margin-top: 10px;">El número de asesorías debe ser POSITIVO.</div>
            <div class="col-md-2" v-if="typeof num_grupos_asesorados === 'string'" style="color: red; margin-top: 10px;">Debe ingresar un valor.</div>
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-1" style="text-align: left;"></div>
            <div class="col-md-6" style="text-align: left;">
                <label for="num_promedio_asesorias">Ingrese el número promedio de asesorías que recibe cada grupo de investigación:</label>
            </div>
            <div class="col-md-3">
                <input type="number" step="0.01" class="form-control" id="num_promedio_asesorias" v-model="num_promedio_asesorias" style="background-color: #D9D9D9; border: 0;" :style="{border:'1px solid', borderColor:num_promedio_asesorias<0||typeof num_promedio_asesorias === 'string' ? 'red' : ''}">
            </div>
            <div class="col-md-2" v-if="num_promedio_asesorias<0" style="color: red; margin-top: 10px;">El número de asesorías debe ser POSITIVO.</div>
            <div class="col-md-2" v-if="typeof num_promedio_asesorias === 'string'" style="color: red; margin-top: 10px;">Debe ingresar un valor.</div>
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-1" style="text-align: left;"></div>
            <div class="col-md-6" style="text-align: left;">
                <label for="num_grupos_por_asesor">Ingrese el número promedio de grupos de investigación vinculados al programa por asesor:</label>
            </div>
            <div class="col-md-3">
                <input type="number" step="0.01" class="form-control" id="num_grupos_por_asesor" v-model="num_grupos_por_asesor" style="background-color: #D9D9D9; border: 0;" :style="{border:'1px solid', borderColor:num_grupos_por_asesor<0||typeof num_grupos_por_asesor === 'string' ? 'red' : ''}">
            </div>
            <div class="col-md-2" v-if="num_grupos_por_asesor<0" style="color: red; margin-top: 10px;">El número de asesorías debe ser POSITIVO.</div>
            <div class="col-md-2" v-if="typeof num_grupos_por_asesor === 'string'" style="color: red; margin-top: 10px;">Debe ingresar un valor.</div>
        
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-1" style="text-align: left;"></div>
            <div class="col-md-6" style="text-align: left;">
                <label for="num_talleres">Ingrese el número promedio de talleres de formación y/o capacitación realizados en cada coordinación:</label>
            </div>
            <div class="col-md-3">
                <input type="number" step="0.01" class="form-control" id="num_talleres" v-model="num_talleres" style="background-color: #D9D9D9; border: 0;" :style="{border:'1px solid', borderColor:num_talleres<0||typeof num_talleres === 'string' ? 'red' : ''}">
            </div>
            <div class="col-md-3" v-if="num_talleres<0" style="color: red; margin-top: 10px;">El número de asesores debe ser POSITIVO.</div>
            <div class="col-md-3" v-if="typeof num_talleres === 'string'" style="color: red; margin-top: 10px;">Debe ingresar un valor.</div>
        
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-1" style="text-align: left;"></div>
            <div class="col-md-6" style="text-align: left;">
                <label for="num_docentes_vinculados">Ingrese el número de docentes vinculados al programa que participan en talleres de capacitación y/o formación:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="num_docentes_vinculados" v-model="num_docentes_vinculados" style="background-color: #D9D9D9; border: 0;" :style="{border:'1px solid', borderColor:num_docentes_vinculados<0||typeof num_docentes_vinculados === 'string' ? 'red' : ''}">
            </div>
            <div class="col-md-3" v-if="num_docentes_vinculados<0" style="color: red; margin-top: 10px;">El número de asesores debe ser POSITIVO.</div>
            <div class="col-md-3" v-if="typeof num_docentes_vinculados === 'string'" style="color: red; margin-top: 10px;">Debe ingresar un valor.</div>
        
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-1" style="text-align: left;"></div>
            <div class="col-md-6" style="text-align: left;">
                <label for="num_promedio_horas_docentes">Ingrese el número promedio de horas dedicadas por los docentes vinculados al programa a actividades de Ondas:</label>
            </div>
            <div class="col-md-3">
                <input type="number" step="0.01" class="form-control" id="num_promedio_horas_docentes" v-model="num_promedio_horas_docentes" style="background-color: #D9D9D9; border: 0;" :style="{border:'1px solid', borderColor:num_promedio_horas_docentes<0||typeof num_promedio_horas_docentes === 'string' ? 'red' : ''}">
            </div>
            <div class="col-md-3" v-if="num_promedio_horas_docentes<0" style="color: red; margin-top: 10px;">El número de asesores debe ser POSITIVO.</div>
            <div class="col-md-3" v-if="typeof num_promedio_horas_docentes === 'string'" style="color: red; margin-top: 10px;">Debe ingresar un valor.</div>
        
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-1" style="text-align: left;"></div>
            <div class="col-md-6" style="text-align: left;">
                <label for="num_promedio_horas_jovenes">Ingrese el número promedio de horas dedicadas por los niños, niñas y adolescentes vinculados a Ondas a las actividades de investigación:</label>
            </div>
            <div class="col-md-3">
                <input type="number" step="0.01" class="form-control" id="num_promedio_horas_jovenes" v-model="num_promedio_horas_jovenes" style="background-color: #D9D9D9; border: 0;" :style="{border:'1px solid', borderColor:num_promedio_horas_jovenes<0||typeof num_promedio_horas_jovenes === 'string' ? 'red' : ''}">
            </div>
            <div class="col-md-3" v-if="num_promedio_horas_jovenes<0" style="color: red; margin-top: 10px;">El número de asesores debe ser POSITIVO.</div>
            <div class="col-md-3" v-if="typeof num_promedio_horas_jovenes === 'string'" style="color: red; margin-top: 10px;">Debe ingresar un valor.</div>
        
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-1" style="text-align: left;"></div>
            <div class="col-md-7" style="text-align: left;">
                <label for="duracion_proyectos">Ingrese la duración promedio de los proyectos de investigación seleccionados:</label>
            </div>
            <div class="col-md-3">
                <input type="number" step="0.01" class="form-control" id="duracion_proyectos" v-model="duracion_proyectos" style="background-color: #D9D9D9; border: 0;" :style="{border:'1px solid', borderColor:duracion_proyectos<0||typeof duracion_proyectos === 'string' ? 'red' : ''}">
            </div>
            <div class="col-md-3" v-if="duracion_proyectos<0" style="color: red; margin-top: 10px;">El número de asesores debe ser POSITIVO.</div>
            <div class="col-md-3" v-if="typeof duracion_proyectos === 'string'" style="color: red; margin-top: 10px;">Debe ingresar un valor.</div>
        
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-1" style="text-align: left;"></div>
            <div class="col-md-7" style="text-align: left;">
                <label for="pct_vinculados">Ingrese el porcentaje de municipios en el departamento con instituciones educativas vinculadas al programa Ondas:</label>
            </div>
            <div class="col-md-3">
                <input type="number" step="0.01" class="form-control" id="pct_vinculados" v-model="pct_vinculados" style="background-color: #D9D9D9; border: 0;" :style="{border:'1px solid', borderColor:pct_vinculados<0||typeof pct_vinculados === 'string' ? 'red' : ''}">
            </div>
            <div class="col-md-3" v-if="pct_vinculados<0" style="color: red; margin-top: 10px;">El número de asesores debe ser POSITIVO.</div>
            <div class="col-md-3" v-if="typeof pct_vinculados === 'string'" style="color: red; margin-top: 10px;">Debe ingresar un valor.</div>
        
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-1" style="text-align: left;"></div>
            <div class="col-md-7" style="text-align: left;">
                <label for="monto_financiacion">Ingrese el monto total destinado a la financiación de los proyectos de Ondas:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="monto_financiacion" v-model="monto_financiacion" style="background-color: #D9D9D9; border: 0;" :style="{border:'1px solid', borderColor:monto_financiacion<0||typeof monto_financiacion === 'string' ? 'red' : ''}">
            </div>
            <div class="col-md-3" v-if="monto_financiacion<0" style="color: red; margin-top: 10px;">El número de asesores debe ser POSITIVO.</div>
            <div class="col-md-3" v-if="typeof monto_financiacion === 'string'" style="color: red; margin-top: 10px;">Debe ingresar un valor.</div>
        
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-1" style="text-align: left;"></div>
            <div class="col-md-7" style="text-align: left;">
                <label for="monto_promedio_proyecto">Ingrese el monto promedio destinado por proyecto de investigación:</label>
            </div>
            <div class="col-md-3">
                <input type="number" step="0.01" class="form-control" id="monto_promedio_proyecto" v-model="monto_promedio_proyecto" style="background-color: #D9D9D9; border: 0;" :style="{border:'1px solid', borderColor:monto_promedio_proyecto<0||typeof monto_promedio_proyecto === 'string' ? 'red' : ''}">
            </div>
            <div class="col-md-3" v-if="monto_promedio_proyecto<0" style="color: red; margin-top: 10px;">El número de asesores debe ser POSITIVO.</div>
            <div class="col-md-3" v-if="typeof monto_promedio_proyecto === 'string'" style="color: red; margin-top: 10px;">Debe ingresar un valor.</div>
        
        </div>
        <div class="row" style="margin-top: 45px; margin-bottom: 50px;">
            <div class="col-md-1" style="text-align: left;"></div>
            <div class="col-md-7" style="text-align: left;">
                <label for="monto_promedio_por_joven">Ingrese el monto promedio destinado por niño, niña o adolescente vinculado al programa:</label>
            </div>
            <div class="col-md-3">
                <input type="number" step="0.01" class="form-control" id="monto_promedio_por_joven" v-model="monto_promedio_por_joven" style="background-color: #D9D9D9; border: 0;" :style="{border:'1px solid', borderColor:monto_promedio_por_jovenr<0||typeof monto_promedio_por_joven === 'string' ? 'red' : ''}">
            </div>
            <div class="col-md-3" v-if="monto_promedio_por_joven<0" style="color: red; margin-top: 10px;">El número de asesores debe ser POSITIVO.</div>
            <div class="col-md-3" v-if="typeof monto_promedio_por_joven === 'string'" style="color: red; margin-top: 10px;">Debe ingresar un valor.</div>
        
        </div>
        <button type="button" class="btn btn-primary" @click="saveData" :disabled="!isFormValid" style="margin-bottom: 50px; margin-left: 45%; width: 150px">Guardar</button>
</template>

<script>
export default {
    name: 'IngresoAcompanamiento',
    data() {
        return {
            anio: 2001,
            departamento: 'Caldas',
            num_asesores: null,
            num_asesores_hombre: null,
            num_asesores_mujer: null,
            num_asesorias: null,
            num_grupos_asesorados: null,
            num_promedio_asesorias: null,
            num_grupos_por_asesor: null,
            num_talleres: null,
            num_docentes_vinculados: null,
            num_promedio_horas_docentes: null,
            num_promedio_horas_jovenes: null,
            duracion_proyectos: null,
            pct_vinculados: null,
            monto_financiacion: null,
            monto_promedio_proyecto: null,
            monto_promedio_por_joven: null
        };
    },
    computed: {
        isFormValid() {
            // Comprueba si todos los campos están llenos
            const allFieldsFilled = Object.values(this.$data).every(field => field !== null && field !== '');

            // Comprueba si el total de asesores es igual a la suma de asesores masculinos y femeninos
            const genderTotalMatches = this.num_asesores === (this.num_asesores_hombre + this.num_asesores_mujer);

            return allFieldsFilled && genderTotalMatches;
        }
    },
    methods: {
        async saveData(){
            const response = await fetch('https://localhost:7192/api/Acompaniamientos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.$data)
            });
            return response.json();
        }
    
    }

};
</script>

<style scoped>
/* Your component-specific styles go here */
</style>