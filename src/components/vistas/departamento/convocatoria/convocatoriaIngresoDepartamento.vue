<template>
    <navBarDepartamento/>
    <h1 style="text-align: center;">Ingreso de indicadores convocatoria del departamento</h1>
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
                <label for="num_convocatorias">Ingrese el número de convocatorias implementadas en el año:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="num_convocatorias" style="background-color: #D9D9D9; border: 0;">
            </div>
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-1" style="text-align: left;"></div>
            <div class="col-md-7" style="text-align: left;">
                <label for="num_grupos_investigacion_aplican">Ingrese el número de grupos de investigación que aplican a las convocatorias:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="num_grupos_investigacion_aplican" style="background-color: #D9D9D9; border: 0;">
            </div>
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-1" style="text-align: left;"></div>
            <div class="col-md-7" style="text-align: left;">
                <label for="num_instituciones_educativas_aplican">Ingrese el número de instituciones educativas que aplican a las convocatorias:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="num_instituciones_educativas_aplican" style="background-color: #D9D9D9; border: 0;">
            </div>
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-1" style="text-align: left;"></div>
            <div class="col-md-7" style="text-align: left;">
                <label>Ingrese la información de niños, niñas y jóvenes vinculados al programa:</label>
            </div>
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-2" style="text-align: left;"></div>
            <div class="col-md-1" style="text-align: left;">
                <label for="num_vinculados">Total:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="num_vinculados" style="background-color: #D9D9D9; border: 0;">
            </div>
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-2" style="text-align: left;"></div>
            <div class="col-md-4" style="text-align: left;">
                <label for="num_menores_10_f">Ingrese el número de niñas menores a 10 años:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="num_menores_10_f" style="background-color: #D9D9D9; border: 0;">
            </div>
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-2" style="text-align: left;"></div>
            <div class="col-md-4" style="text-align: left;">
                <label for="num_menores_10_m">Ingrese el número de niños menores a 10 años:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="num_menores_10_m" style="background-color: #D9D9D9; border: 0;">
            </div>
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-2" style="text-align: left;"></div>
            <div class="col-md-4" style="text-align: left;">
                <label for="num_entre_10_12_f">Ingrese el número de niñas entre 10 a 11 años:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="num_entre_10_12_f" style="background-color: #D9D9D9; border: 0;">
            </div>
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-2" style="text-align: left;"></div>
            <div class="col-md-4" style="text-align: left;">
                <label for="num_entre_10_12_m">Ingrese el número de niños entre 10 años a 11 años:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="num_entre_10_12_m" style="background-color: #D9D9D9; border: 0;">
            </div>
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-2" style="text-align: left;"></div>
            <div class="col-md-4" style="text-align: left;">
                <label for="num_entre_12_14_f">Ingrese el número de niñas entre 12 a 13 años:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="num_entre_12_14_f" style="background-color: #D9D9D9; border: 0;">
            </div>
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-2" style="text-align: left;"></div>
            <div class="col-md-4" style="text-align: left;">
                <label for="num_entre_12_14_m">Ingrese el número de niños entre 12 años a 13 años:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="num_entre_12_14_m" style="background-color: #D9D9D9; border: 0;">
            </div>
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-2" style="text-align: left;"></div>
            <div class="col-md-4" style="text-align: left;">
                <label for="num_entre_14_16_f">Ingrese el número de niñas entre 14 a 15 años:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="num_entre_14_16_f" style="background-color: #D9D9D9; border: 0;">
            </div>
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-2" style="text-align: left;"></div>
            <div class="col-md-4" style="text-align: left;">
                <label for="num_entre_14_16_m">Ingrese el número de niños entre 14 años a 16 años:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="num_entre_14_16_m" style="background-color: #D9D9D9; border: 0;">
            </div>
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-2" style="text-align: left;"></div>
            <div class="col-md-4" style="text-align: left;">
                <label for="num_entre_16_18_f">Ingrese el número de niñas entre 16 a 17 años:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="num_entre_16_18_f" style="background-color: #D9D9D9; border: 0;">
            </div>
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-2" style="text-align: left;"></div>
            <div class="col-md-4" style="text-align: left;">
                <label for="num_entre_16_18_m">Ingrese el número de niños entre 16 años a 17 años:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="num_entre_16_18_m" style="background-color: #D9D9D9; border: 0;">
            </div>
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-2" style="text-align: left;"></div>
            <div class="col-md-4" style="text-align: left;">
                <label for="num_mayores_18_f">Ingrese el número de jóvenes mayor o igual a 18 años:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="num_mayores_18_f" style="background-color: #D9D9D9; border: 0;">
            </div>
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-2" style="text-align: left;"></div>
            <div class="col-md-4" style="text-align: left;">
                <label for="num_mayores_18_m">Ingrese el número de jóvenes mayor o igual a 18 años:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="num_mayores_18_m" style="background-color: #D9D9D9; border: 0;">
            </div>
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
                <input type="number" class="form-control" id="num_docentes" style="background-color: #D9D9D9; border: 0;">
            </div>
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-2" style="text-align: left;"></div>
            <div class="col-md-4" style="text-align: left;">
                <label for="num_docentes_femenino_vinculados">Ingrese el número de docentes mujeres:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="num_docentes_femenino_vinculados" style="background-color: #D9D9D9; border: 0;">
            </div>
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-2" style="text-align: left;"></div>
            <div class="col-md-4" style="text-align: left;">
                <label for="num_docentes_masculino_vinculados">Ingrese el número de docentes masculino:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="num_docentes_masculino_vinculados" style="background-color: #D9D9D9; border: 0;">
            </div>
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-1" style="text-align: left;"></div>
            <div class="col-md-7" style="text-align: left;">
                <label for="num_grupos_investigacion">Ingrese el número de grupos de investigación vinculados al programa:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="num_grupos_investigacion" style="background-color: #D9D9D9; border: 0;">
            </div>
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-1" style="text-align: left;"></div>
            <div class="col-md-7" style="text-align: left;">
                <label for="num_instituciones_educativas">Ingrese el número de instituciones educativas vinculadas al programa: </label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="num_instituciones_educativas" style="background-color: #D9D9D9; border: 0;">
            </div>
        </div>
        <div class="row" style="margin-top: 45px; margin-bottom: 50px">
            <div class="col-md-1" style="text-align: left;"></div>
            <div class="col-md-7" style="text-align: left;">
                <label for="num_proyectos">Ingrese el número de proyectos de investigación apoyados por el programa:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="num_proyectos" style="background-color: #D9D9D9; border: 0;">
            </div>
        </div>
        <button type="button" class="btn btn-primary" style="margin-bottom: 50px; margin-left: 45%; width: 150px">Guardar</button>
        
    </div>
</template>

<script>
import NavBarDepartamento from '@/components/NavBars/navBarDepartamento.vue';
export default {
    name: 'ConvocatoriaIngresoDepartamento',
    components: {
        NavBarDepartamento,
    }
};
</script>

<style scoped>
/* Your component-specific styles go here */
</style>