<template>
    <div class="row" style="margin-top: 45px;">
            <div class="col-md-1" style="text-align: left;"></div>
            <div class="col-md-7" style="text-align: left;">
                <label for="num_convocatorias">Ingrese el número de convocatorias implementadas en el año:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="num_convocatorias" min="0" v-model.number="Num_Convocatorias" style="background-color: #D9D9D9; border: 0;">
            </div>
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-1" style="text-align: left;"></div>
            <div class="col-md-7" style="text-align: left;">
                <label for="num_grupos_investigacion_aplican">Ingrese el número de grupos de investigación que aplican a las convocatorias:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="num_grupos_investigacion_aplican" min="0" v-model.number="Num_Grupos_Investigacion_Aplican" style="background-color: #D9D9D9; border: 0;">
            </div>
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-1" style="text-align: left;"></div>
            <div class="col-md-7" style="text-align: left;">
                <label for="num_instituciones_educativas_aplican">Ingrese el número de instituciones educativas que aplican a las convocatorias:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="num_instituciones_educativas_aplican" min="0" v-model.number="Num_Instituciones_Educativas_Aplican" style="background-color: #D9D9D9; border: 0;">
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
                <label for="num_menores_10_f">Ingrese el número de participantes menores de 10 años del genero femenino:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="num_menores_10_f" min="0" v-model.number="Num_Menores_10_F" style="background-color: #D9D9D9; border: 0;">
            </div>
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-2" style="text-align: left;"></div>
            <div class="col-md-1" style="text-align: left;">
                <label for="num_menores_10_m">Ingrese el número de participantes menores de 10 años del genero masculino:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="num_menores_10_m" min="0" v-model.number="Num_Menores_10_M" style="background-color: #D9D9D9; border: 0;">
            </div>
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-2" style="text-align: left;"></div>
            <div class="col-md-1" style="text-align: left;">
                <label for="num_entre_10_12_m">Ingrese el número de participantes entre 10 y 12 años del genero masculino:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="num_entre_10_12_m" min="0" v-model.number="Num_Entre_10_12_M" style="background-color: #D9D9D9; border: 0;">
            </div>
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-2" style="text-align: left;"></div>
            <div class="col-md-1" style="text-align: left;">
                <label for="num_entre_10_12_f">Ingrese el número de participantes entre 10 y 12 años del genero femenino:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="num_entre_10_12_f" min="0" v-model.number="Num_Entre_10_12_F" style="background-color: #D9D9D9; border: 0;">
            </div>
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-2" style="text-align: left;"></div>
            <div class="col-md-1" style="text-align: left;">
                <label for="num_entre_12_14_m">Ingrese el número de participantes entre 12 y 14 años del genero masculino:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="num_entre_12_14_m" min="0" v-model.number="Num_Entre_12_14_M" style="background-color: #D9D9D9; border: 0;">
            </div>
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-2" style="text-align: left;"></div>
            <div class="col-md-1" style="text-align: left;">
                <label for="num_entre_12_14_f">Ingrese el número de participantes entre 12 y 14 años del genero femenino:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="num_entre_12_14_f" min="0" v-model.number="Num_Entre_12_14_F" style="background-color: #D9D9D9; border: 0;">
            </div>
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-2" style="text-align: left;"></div>
            <div class="col-md-1" style="text-align: left;">
                <label for="num_entre_14_16_m">Ingrese el número de participantes entre 14 y 16 años del genero masculino:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="num_entre_14_16_m" min="0" v-model.number="Num_Entre_14_16_M" style="background-color: #D9D9D9; border: 0;">
            </div>
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-2" style="text-align: left;"></div>
            <div class="col-md-1" style="text-align: left;">
                <label for="num_entre_14_16_f">Ingrese el número de participantes entre 14 y 16 años del genero femenino:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="num_entre_14_16_f" min="0" v-model.number="Num_Entre_14_16_F" style="background-color: #D9D9D9; border: 0;">
            </div>
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-2" style="text-align: left;"></div>
            <div class="col-md-4" style="text-align: left;">
                <label for="num_mayores_18_m">Ingrese el número de participantes entre 16 y 18 años del genero masculino:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="num_entre_16_18_m" min="0" v-model.number="Num_Entre_16_18_M" style="background-color: #D9D9D9; border: 0;">
            </div>
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-2" style="text-align: left;"></div>
            <div class="col-md-4" style="text-align: left;">
                <label for="num_mayores_18_m">Ingrese el número de participantes entre 16 y 18 años del genero femenino:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="num_entre_16_18_f" v-model.number="Num_Entre_16_18_F" style="background-color: #D9D9D9; border: 0;">
            </div>
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-2" style="text-align: left;"></div>
            <div class="col-md-4" style="text-align: left;">
                <label for="num_mayores_18_m">Ingrese el número de participantes mayores de 18 años del genero masculino:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="num_mayores_18_m" v-model.number="numMayores18M" style="background-color: #D9D9D9; border: 0;">
            </div>
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-2" style="text-align: left;"></div>
            <div class="col-md-4" style="text-align: left;">
                <label for="num_mayores_18_f">Ingrese el número de participantes mayores de 18 años del genero femenino:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="num_mayores_18_f" v-model.number="Num_Mayores_18_F" style="background-color: #D9D9D9; border: 0;">
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
                <input type="number" class="form-control" id="num_docentes_femenino_vinculados" v-model.number="Num_Docentes_Femenino_Vinculados" style="background-color: #D9D9D9; border: 0;">
            </div>
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-2" style="text-align: left;"></div>
            <div class="col-md-4" style="text-align: left;">
                <label for="num_docentes_masculino_vinculados">Ingrese el número de docentes masculino:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="num_docentes_masculino_vinculados" v-model.number="Num_Docentes_Masculino_Vinculados" style="background-color: #D9D9D9; border: 0;">
            </div>
        </div>

        <button type="button" class="btn btn-primary" style="margin-bottom: 50px; margin-left: 45%; width: 150px" @click="saveData">Guardar</button>
</template>

<script>
export default {
    name: 'IngresoConvocatoria',
    data() {
        return {
            Anio: 2023,
            Departamento: 'Caldas',
            Num_Convocatorias: 0,
            Num_Grupos_Investigacion_Aplican: 0,
            Num_Instituciones_Educativas_Aplican: 0,
            Num_Vinculados: 0,
            Num_Docentes: 0,
            Num_Grupos_Investigacion: 0,
            Num_Instituciones_Educativas_Vinculadas: 0,
            Num_Proyectos: 0,
            Num_Menores_10_F: 0,
            Num_Menores_10_M: 0,
            Num_Entre_10_12_F: 0,
            Num_Entre_10_12_M: 0,
            Num_Entre_12_14_F: 0,
            Num_Entre_12_14_M: 0,
            Num_Entre_14_16_F: 0,
            Num_Entre_14_16_M: 0,
            Num_Entre_16_18_F: 0,
            Num_Entre_16_18_M: 0,
            Num_Mayores_18_F: 0,
            Num_Mayores_18_M: 0,
            Num_Docentes_Masculino_Vinculados: 0,
            Num_Docentes_Femenino_Vinculados: 0,
        }
    },
    methods: {
    async saveData() {
        console.log(JSON.stringify(this.$data));
        const response = await fetch('https://localhost:7192/api/Convocatorias', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.$data)
        });
        console.log(response);
        return response.json();


    }


    }
};

</script>

<style scoped>
/* Your component-specific styles go here */
</style>