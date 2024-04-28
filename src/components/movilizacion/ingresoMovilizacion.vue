<template>
    <div class="row" style="margin-top: 45px;">
            <div class="col-md-1" style="text-align: left;"></div>
            <div class="col-md-7" style="text-align: left;">
                <label for="num_talleres_entidades_coordinadoras">Ingrese el número de talleres, conferencias, foros realizados por las entidades coordinadoras, paralelos a los procesos de capacitación de maestros:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="num_talleres_entidades_coordinadoras" min="0" v-model.number="numTalleresEntidadesCoordinadoras" style="background-color: #D9D9D9; border: 0;">
            </div>
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-1" style="text-align: left;"></div>
            <div class="col-md-4" style="text-align: left;">
                <label for="num_encuentros">Ingrese el número de encuentros realizados:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="num_encuentros" min="0" v-model.number="numEncuentros" style="background-color: #D9D9D9; border: 0;">
            </div>
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-1" style="text-align: left;"></div>
            <div class="col-md-4" style="text-align: left;">
                <label for="num_participantes_encuentros">Ingrese el número de participantes de los encuentros:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="num_participantes_encuentros" min="0" v-model.number="numParticipantesEncuentros" style="background-color: #D9D9D9; border: 0;">
            </div>
        </div>
        <div v-if="numEncuentros>0">
            <div class="row" style="margin-top: 45px;" v-for="index in parseInt(numEncuentros)" :key="index">
                <div class="col-md-2" style="text-align: left;"></div>
                <div class="col-md-4" style="text-align: left;">
                    <label :for="'encuentro' + index">Ingrese el número de participantes en el encuentro {{ index }}:</label>
                </div>
                <div class="col-md-3">
                    <input type="number" class="form-control" :id="'encuentro' + index" min="0" style="background-color: #D9D9D9; border: 0;">
                </div>
            </div>
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-1" style="text-align: left;"></div>
            <div class="col-md-7" style="text-align: left;">
                <label for="num_premios_grupos_investigacion">Ingrese el número de premios recibidos por los grupos de investigación vinculados al programa Ondas:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="num_talleres_entidades_coordinadoras" min="0" v-model.number="numPremiosGruposInvestigacion" style="background-color: #D9D9D9; border: 0;">
            </div>
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-1" style="text-align: left;"></div>
            <div class="col-md-7" style="text-align: left;">
                <label for="num_vinculados_ferias">Ingrese el número de niños, niñas y jóvenes vinculados al programa Ondas que participan en ferias de ciencia, tecnología e innovación </label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="num_vinculados_ferias" min="0" v-model.number="numVinculadosFerias" style="background-color: #D9D9D9; border: 0;">
            </div>
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-1" style="text-align: left;"></div>
            <div class="col-md-7" style="text-align: left;">
                <label for="num_vinculados_internacionales">Ingrese el número de niños, niñas y jóvenes vinculados al programa que participan en ferias de ciencia, tecnología e innovación internacionales:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="num_vinculados_internacionales" min="0" v-model.number="numVinculadosInternacionales" style="background-color: #D9D9D9; border: 0;">
            </div>
        </div>
        <div class="row" style="margin-top: 45px; margin-bottom: 50px;">
            <div class="col-md-1" style="text-align: left;"></div>
            <div class="col-md-7" style="text-align: left;">
                <label for="num_proyectos_internacionales">Ingrese el número de proyectos de investigación apoyados por el programa que son presentados en ferias de ciencia, tecnología e innovación internacionales:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="num_proyectos_internacionales" min="0" v-model.number="numProyectosInternacionales" style="background-color: #D9D9D9; border: 0;">
            </div>
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-1" style="text-align: left;"></div>
            <div class="col-md-7" style="text-align: left;">
                <label for="num_grupos_ganadores">Ingrese el número de grupos de investigación vinculados al programa Ondas que han recibido premios o reconocimientos:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="num_grupos_ganadores" min="0" v-model.number="numGruposGanadores" style="background-color: #D9D9D9; border: 0;">
            </div>
        </div>
                <div class="row" style="margin-top: 45px;">
            <div class="col-md-1" style="text-align: left;"></div>
            <div class="col-md-7" style="text-align: left;">
                <label for="num_proyectos_ferias">Ingrese el número de proyectos de investigación apoyados por el programa que son presentados en ferias de ciencia, tecnología e innovación internacionales :</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="num_proyectos_ferias" min="0" v-model.number="numProyectosFerias" style="background-color: #D9D9D9; border: 0;">
            </div>
        </div>
        <button type="button" class="btn btn-primary" @click="saveData" style="margin-bottom: 50px; margin-left: 45%; width: 150px">Guardar</button>

</template>

<script>
export default {
    name: 'IngresoMovilizacion',
    data() {
        return {
            anio: 2025,
            departamento: 'Caldas',
            numTalleresEntidadesCoordinadoras: 0,
            numEncuentros: 0,
            numParticipantesEncuentros: 0,
            numPremiosGruposInvestigacion: 0,
            numVinculadosFerias: 0,
            numVinculadosInternacionales: 0,
            numProyectosInternacionales: 0,
            numGruposGanadores: 0,
            numProyectosFerias: 0,
            encuentros: []
        }
    },
    methods: {
    async saveData() {
        const formData = {
            anio: this.anio,
            departamento: this.departamento,
            numTalleresEntidadesCoordinadoras: this.numTalleresEntidadesCoordinadoras,
            numEncuentros: this.numEncuentros,
            numParticipantesEncuentros: this.numParticipantesEncuentros,
            numPremiosGruposInvestigacion: this.numPremiosGruposInvestigacion,
            numVinculadosFerias: this.numVinculadosFerias,
            numVinculadosInternacionales: this.numVinculadosInternacionales,
            numProyectosInternacionales: this.numProyectosInternacionales,
            numGruposGanadores: this.numGruposGanadores,
            numProyectosFerias: this.numProyectosFerias,
            encuentros: this.encuentros.slice(0, this.numEncuentros)
        };
        var print = JSON.stringify(formData)
        console.log(print);
        const response = await fetch('https://localhost:7192/api/Movilizaciones', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        return response.json();


    }
}
};

</script>

<style scoped>
/* Your component's CSS styles go here */
</style>