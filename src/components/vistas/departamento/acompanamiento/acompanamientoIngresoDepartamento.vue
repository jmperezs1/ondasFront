<template>
    <NavBarDepartamento/>
    <h1 style="text-align: center;">Ingreso de indicadores de Acompañamiento del departamento</h1>
    <div class="container">
        <div class="row" style="margin-top: 56px;">
            <div class="col-md-1" style="text-align: left;"></div>
            <div class="col-md-2" >
                    <label for="anio">Ingrese el año:</label>
            </div>
            <div class="col-md-2 p-0">
                <select class="custom-select" id="anio" style="width: 100%; background-color: #D9D9D9; border: 0cap;">
                    <option selected>Seleccionar...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
        </div>
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
                <input type="number" class="form-control" id="num_asesores" style="background-color: #D9D9D9; border: 0;">
            </div>
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-2" style="text-align: left;"></div>
            <div class="col-md-1" style="text-align: left;">
                <label for="num_asesores_hombre">Masculino:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="num_asesores_hombre" style="background-color: #D9D9D9; border: 0;">
            </div>
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-2" style="text-align: left;"></div>
            <div class="col-md-1" style="text-align: left;">
                <label for="num_asesores_femenino">Femenino:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="num_asesores_femenino" style="background-color: #D9D9D9; border: 0;">
            </div>
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-1" style="text-align: left;"></div>
            <div class="col-md-4" style="text-align: left;">
                <label for="num_asesorias">Ingrese el número de asesorías realizadas en el año:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="num_asesorias" style="background-color: #D9D9D9; border: 0;">
            </div>
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-1" style="text-align: left;"></div>
            <div class="col-md-7" style="text-align: left;">
                <label for="num_grupos_asesorados">Ingrese el número de grupos de investigación que recibieron asesorías en el año:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="num_grupos_asesorados" style="background-color: #D9D9D9; border: 0;">
            </div>
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-1" style="text-align: left;"></div>
            <div class="col-md-7" style="text-align: left;">
                <label for="num_promedio_asesorias">Ingrese el número promedio de asesorías que recibe cada grupo de investigación:</label>
            </div>
            <div class="col-md-3">
                <input type="number" step="0.01" class="form-control" id="num_promedio_asesorias" style="background-color: #D9D9D9; border: 0;">
            </div>
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-1" style="text-align: left;"></div>
            <div class="col-md-7" style="text-align: left;">
                <label for="num_grupos_por_asesor">Ingrese el número promedio de grupos de investigación vinculados al programa por asesor:</label>
            </div>
            <div class="col-md-3">
                <input type="number" step="0.01" class="form-control" id="num_grupos_por_asesor" style="background-color: #D9D9D9; border: 0;">
            </div>
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-1" style="text-align: left;"></div>
            <div class="col-md-7" style="text-align: left;">
                <label for="num_talleres">Ingrese el número promedio de talleres de formación y/o capacitación realizados en cada coordinación:</label>
            </div>
            <div class="col-md-3">
                <input type="number" step="0.01" class="form-control" id="num_talleres" style="background-color: #D9D9D9; border: 0;">
            </div>
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-1" style="text-align: left;"></div>
            <div class="col-md-7" style="text-align: left;">
                <label for="num_docentes_vinculados">Ingrese el número de docentes vinculados al programa que participan en talleres de capacitación y/o formación:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="num_docentes_vinculados" style="background-color: #D9D9D9; border: 0;">
            </div>
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-1" style="text-align: left;"></div>
            <div class="col-md-7" style="text-align: left;">
                <label for="num_promedio_horas_docentes">Ingrese el número promedio de horas dedicadas por los docentes vinculados al programa a actividades de Ondas:</label>
            </div>
            <div class="col-md-3">
                <input type="number" step="0.01" class="form-control" id="num_promedio_horas_docentes" style="background-color: #D9D9D9; border: 0;">
            </div>
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-1" style="text-align: left;"></div>
            <div class="col-md-7" style="text-align: left;">
                <label for="num_promedio_horas_jovenes">Ingrese el número promedio de horas dedicadas por los niños, niñas y adolescentes vinculados a Ondas a las actividades de investigación:</label>
            </div>
            <div class="col-md-3">
                <input type="number" step="0.01" class="form-control" id="num_promedio_horas_jovenes" style="background-color: #D9D9D9; border: 0;">
            </div>
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-1" style="text-align: left;"></div>
            <div class="col-md-7" style="text-align: left;">
                <label for="duracion_proyectos">Ingrese la duración promedio de los proyectos de investigación seleccionados:</label>
            </div>
            <div class="col-md-3">
                <input type="number" step="0.01" class="form-control" id="duracion_proyectos" style="background-color: #D9D9D9; border: 0;">
            </div>
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-1" style="text-align: left;"></div>
            <div class="col-md-7" style="text-align: left;">
                <label for="pct_vinculados">Ingrese el porcentaje de municipios en el departamento con instituciones educativas vinculadas al programa Ondas:</label>
            </div>
            <div class="col-md-3">
                <input type="number" step="0.01" class="form-control" id="pct_vinculados" style="background-color: #D9D9D9; border: 0;">
            </div>
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-1" style="text-align: left;"></div>
            <div class="col-md-7" style="text-align: left;">
                <label for="monto_financiacion">Ingrese el monto total destinado a la financiación de los proyectos de Ondas:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="monto_financiacion" style="background-color: #D9D9D9; border: 0;">
            </div>
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-1" style="text-align: left;"></div>
            <div class="col-md-7" style="text-align: left;">
                <label for="monto_promedio_proyecto">Ingrese el monto promedio destinado por proyecto de investigación:</label>
            </div>
            <div class="col-md-3">
                <input type="number" step="0.01" class="form-control" id="monto_promedio_proyecto" style="background-color: #D9D9D9; border: 0;">
            </div>
        </div>
        <div class="row" style="margin-top: 45px; margin-bottom: 50px;">
            <div class="col-md-1" style="text-align: left;"></div>
            <div class="col-md-7" style="text-align: left;">
                <label for="monto_promedio_por_joven">Ingrese el monto promedio destinado por niño, niña o adolescente vinculado al programa:</label>
            </div>
            <div class="col-md-3">
                <input type="number" step="0.01" class="form-control" id="monto_promedio_por_joven" style="background-color: #D9D9D9; border: 0;">
            </div>
        </div>
        <button type="button" class="btn btn-primary" style="margin-bottom: 50px; margin-left: 45%; width: 150px">Guardar</button>
    </div>

</template>

<script>
import NavBarDepartamento from '@/components/NavBars/navBarDepartamento.vue'

export default {
    name: 'AcompanamientoIngresoDepartamento',
    components: {
        NavBarDepartamento,
    },
}
</script>

<style scoped>
/* Your CSS code goes here */
</style>