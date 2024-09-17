<template>
    <div>
        <div class="row" style="margin-top: 40px; height: 250px;">
            <h5>Número de convocatorias implementadas en el año:</h5>
            <canvas ref="canvasConvocatorias" style="height: 250px;"></canvas>
        </div>
        <div class="row" style="margin-top: 80px; height: 250px;">
            <h5>Número de grupos de investigación que aplican a las convocatorias:</h5>
            <canvas ref="canvasGruposInvestigacion" style="height: 250px;"></canvas>
        </div>
        <div class="row" style="margin-top: 80px; height: 250px;">
            <h5>Número de grupos de investigación vinculados a las convocatorias:</h5>
            <canvas ref="canvasGruposInvestigacionVinculados" style="height: 250px;"></canvas>
        </div>
        <div class="row" style="margin-top: 80px; height: 250px;">
            <h5>Número de instituciones educativas que aplican a las convocatorias:</h5>
            <canvas ref="canvasInstitucionesAplican" style="height: 250px;"></canvas>
        </div>
        <div class="row" style="margin-top: 80px; height: 250px;">
            <h5>Número de instituciones educativas vinculadas al programa:</h5>
            <canvas ref="canvasInstitucionesVinculadas" style="height: 250px;"></canvas>
        </div>
        <div class="row" style="margin-top: 80px; height: 250px;">
            <h5>Número de proyectos de investigacion apoyados por el programa:</h5>
            <canvas ref="canvasProyectos" style="height: 250px;"></canvas>
        </div>

        <div class="row mt-5">
            <h3>Información de Niños, Niñas y Jóvenes</h3>
            <div class="row" style="margin-top: 40px; height: 250px;">
                <h5>Número de Vinculados:</h5>
                <canvas ref="canvasVinculados" style="height: 250px;"></canvas>
            </div>
            <div class="col-md-4 mb-4" style="margin-top:35px">
                <h5>Distribución por Género</h5>
                <canvas ref="chartNinosGender"></canvas>
            </div>
            <div class="col-md-4 mb-4" style="margin-top:35px">
                <h5>Distribución por Edad</h5>
                <canvas ref="chartNinosAge"></canvas>
            </div>
            <div class="col-md-4 mb-4" style="margin-top:35px">
                <h5>Distribución Territorial</h5>
                <canvas ref="chartNinosTerritorial"></canvas>
            </div>
            <div class="col-md-4 mb-4">
                <h5>Distribución por Discapacidad</h5>
                <canvas ref="chartNinosDisability"></canvas>
            </div>
            <div class="col-md-4 mb-4">
                <h5>Distribución Étnica</h5>
                <canvas ref="chartNinosEthnicity"></canvas>
            </div>
        </div>

        <div class="row mt-5">
            <h3>Información de Docentes</h3>
            <div class="col-md-4 mb-4">
                <h5>Distribución por Género</h5>
                <canvas ref="chartDocentesGender"></canvas>
            </div>
            <div class="col-md-4 mb-4">
                <h5>Orientación Sexual</h5>
                <canvas ref="chartDocentesSexualOrientation"></canvas>
            </div>
            <div class="col-md-4 mb-4">
                <h5>Distribución Territorial</h5>
                <canvas ref="chartDocentesTerritorial"></canvas>
            </div>
            <div class="col-md-4 mb-4">
                <h5>Distribución por Discapacidad</h5>
                <canvas ref="chartDocentesDisability"></canvas>
            </div>
            <div class="col-md-4 mb-4">
                <h5>Distribución Étnica</h5>
                <canvas ref="chartDocentesEthnicity"></canvas>
            </div>
        </div>
    </div>
</template>

<script>
import { Chart, registerables } from 'chart.js';

export default {
    name: 'ConsultaConvocatoria',
    props: {
        datos: Array,
    },
    mounted() {
        if (this.datos && this.$refs.canvasConvocatorias && this.$refs.canvasGruposInvestigacion) {
            this.createBarCharts();
            this.createPieCharts();
        } else {
            console.error('No data provided to the component or canvas elements not found.');
        }
    },
    methods: {
        aggregateData() {
        return this.datos.reduce((acc, dato) => {
            acc.num_Ninos_F = (acc.num_Ninos_F || 0) + dato.num_Ninos_F;
            acc.num_Ninos_M = (acc.num_Ninos_M || 0) + dato.num_Ninos_M;
            acc.num_Ninos_I = (acc.num_Ninos_I || 0) + dato.num_Ninos_I;
            acc.num_Entre_6_8 = (acc.num_Entre_6_8 || 0) + dato.num_Entre_6_8;
            acc.num_Entre_9_11 = (acc.num_Entre_9_11 || 0) + dato.num_Entre_9_11;
            acc.num_Entre_12_14 = (acc.num_Entre_12_14 || 0) + dato.num_Entre_12_14;
            acc.num_Entre_15_17 = (acc.num_Entre_15_17 || 0) + dato.num_Entre_15_17;
            acc.num_Ninios_Pdet = (acc.num_Ninios_Pdet || 0) + dato.num_Ninios_Pdet;
            acc.num_Ninios_Zomac = (acc.num_Ninios_Zomac || 0) + dato.num_Ninios_Zomac;
            acc.num_Ninios_Conflicto_Armado = acc.num_Ninios_Conflicto_Armado || 0 + dato.num_Ninios_Conflicto_Armado;
            acc.num_Ninios_Reincorporacion = acc.num_Ninios_Reincorporacion || 0 + dato.num_Ninios_Reincorporacion;
            acc.num_Vinculados = (acc.num_Vinculados || 0) + dato.num_Vinculados;
            acc.num_Ninios_Discapacidad = (acc.num_Ninios_Discapacidad || 0) + dato.num_Ninios_Discapacidad;
            acc.num_Ninios_Afro = (acc.num_Ninios_Afro || 0) + dato.num_Ninios_Afro;
            acc.num_Ninios_Indigena = (acc.num_Ninios_Indigena || 0) + dato.num_Ninios_Indigena;
            acc.num_Ninios_Gitano = (acc.num_Ninios_Gitano || 0) + dato.num_Ninios_Gitano;
            acc.num_Ninios_Palenquero = (acc.num_Ninios_Palenquero || 0) + dato.num_Ninios_Palenquero;
            acc.num_Ninios_Raizal = (acc.num_Ninios_Raizal || 0) + dato.num_Ninios_Raizal;
            acc.num_Docentes_Femenino_Vinculados = (acc.num_Docentes_Femenino_Vinculados || 0) + dato.num_Docentes_Femenino_Vinculados;
            acc.num_Docentes_Masculino_Vinculados = (acc.num_Docentes_Masculino_Vinculados || 0) + dato.num_Docentes_Masculino_Vinculados;
            acc.num_Docentes_Intersexual_Vinculados = (acc.num_Docentes_Intersexual_Vinculados || 0) + dato.num_Docentes_Intersexual_Vinculados;
            acc.num_Docentes_Orientacion_Hetero = (acc.num_Docentes_Orientacion_Hetero || 0) + dato.num_Docentes_Orientacion_Hetero;
            acc.num_Docentes_Orientacion_Homo = (acc.num_Docentes_Orientacion_Homo || 0) + dato.num_Docentes_Orientacion_Homo;
            acc.num_Docentes_Orientacion_Bi = (acc.num_Docentes_Orientacion_Bi || 0) + dato.num_Docentes_Orientacion_Bi;
            acc.num_Docentes_Orientacion_Otro = (acc.num_Docentes_Orientacion_Otro || 0) + dato.num_Docentes_Orientacion_Otro;
            acc.num_Docentes_Pdet = (acc.num_Docentes_Pdet || 0) + dato.num_Docentes_Pdet;
            acc.num_Docentes_Zomac = (acc.num_Docentes_Zomac || 0) + dato.num_Docentes_Zomac;
            acc.num_Docentes = (acc.num_Docentes || 0) + dato.num_Docentes;
            acc.num_Docentes_Discapacidad = (acc.num_Docentes_Discapacidad || 0) + dato.num_Docentes_Discapacidad;
            acc.num_Docentes_Afro = (acc.num_Docentes_Afro || 0) + dato.num_Docentes_Afro;
            acc.num_Docentes_Indigena = (acc.num_Docentes_Indigena || 0) + dato.num_Docentes_Indigena;
            acc.num_Docentes_Gitano = (acc.num_Docentes_Gitano || 0) + dato.num_Docentes_Gitano;
            acc.num_Docentes_Palenquero = (acc.num_Docentes_Palenquero || 0) + dato.num_Docentes_Palenquero;
            acc.num_Docentes_Raizal = (acc.num_Docentes_Raizal || 0) + dato.num_Docentes_Raizal;
            acc.num_Docentes_Conflicto_Armado = acc.num_Docentes_Conflicto_Armado || 0 + dato.num_Docentes_Conflicto_Armado;
            acc.num_Docentes_Reincorporacion = acc.num_Docentes_Reincorporacion || 0 + dato.num_Docentes_Reincorporacion;
            return acc;
        })},
        createBarCharts() {
            Chart.register(...registerables);

            // Extract unique years
            const years = [...new Set(this.datos.map(dato => dato.anio))];

            // Extract unique departamentos
            const departamentos = [...new Set(this.datos.map(dato => dato.departamento))];

            // Custom colors for departments
            const departmentColors = [
                "#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd",
                "#8c564b", "#e377c2", "#7f7f7f", "#bcbd22", "#17becf",
                "#aec7e8", "#ffbb78", "#98df8a", "#ff9896", "#c5b0d5",
                "#c49c94", "#f7b6d2", "#c7c7c7", "#dbdb8d", "#9edae5",
                "#393b79", "#637939", "#8c6d31", "#843c39", "#7b4173",
                "#5254a3", "#8ca252", "#bd9e39", "#ad494a", "#8c6d31",
                "#b5cf6b", "#8ca252", "#bd9e39"
            ];

            // Prepare chart datasets for convocatorias
            const datasetsConvocatorias = this.prepareDatasets(departamentos, years, 'num_Convocatorias', departmentColors);

            // Prepare chart datasets for grupos de investigacion
            const datasetsGruposInvestigacion = this.prepareDatasets(departamentos, years, 'num_Grupos_Investigacion_Aplican', departmentColors);

            const datasetsGruposInvestigacionVinculados = this.prepareDatasets(departamentos, years, 'num_Grupos_Investigacion', departmentColors);

            // Prepare chart datasets for Instituciones Aplican
            const datasetsInstitucionesAplican = this.prepareDatasets(departamentos, years, 'num_Instituciones_Educativas_Aplican', departmentColors);

            const datasetsInstitucionesVinculadas = this.prepareDatasets(departamentos, years, 'num_Instituciones_Educativas_Vinculadas', departmentColors);

            const datasetsProyectos = this.prepareDatasets(departamentos, years, 'num_Proyectos', departmentColors);

            const datasetsVinculados = this.prepareDatasets(departamentos, years, 'num_Vinculados', departmentColors);

            this.createBarChart('canvasConvocatorias', years, datasetsConvocatorias);
            this.createBarChart('canvasGruposInvestigacion', years, datasetsGruposInvestigacion);
            this.createBarChart('canvasGruposInvestigacionVinculados', years, datasetsGruposInvestigacionVinculados);
            this.createBarChart('canvasInstitucionesAplican', years, datasetsInstitucionesAplican);
            this.createBarChart('canvasInstitucionesVinculadas', years, datasetsInstitucionesVinculadas);
            this.createBarChart('canvasProyectos', years, datasetsProyectos);
            this.createBarChart('canvasVinculados', years, datasetsVinculados);
        },

        prepareDatasets(departamentos, years, dataField, colors) {
            return departamentos.map((departamento, index) => {
                const data = years.map(year => {
                    const dataForYearAndDept = this.datos.filter(dato => dato.anio === year && dato.departamento === departamento);
                    return dataForYearAndDept.length > 0 ? dataForYearAndDept[0][dataField] : 0;
                });

                return {
                    label: departamento,
                    backgroundColor: colors[index % colors.length],
                    data: data
                };
            });
        },

        createBarChart(canvasRef, labels, datasets) {
            new Chart(this.$refs[canvasRef], {
                type: 'bar',
                data: { labels, datasets },
                options: {
                    responsive: true,
                    maintainAspectRatio: false
                }
            });
        },

        createPieCharts() {
    if (this.datos && this.datos.length > 0) {
        // Aggregate data across all years
        const aggregatedData = this.aggregateData();

        // Children (Niños) charts
        this.createPieChart('chartNinosGender', this.getChildrenGenderData(aggregatedData));
        this.createPieChart('chartNinosAge', this.getChildrenAgeData(aggregatedData));
        this.createPieChart('chartNinosTerritorial', this.getChildrenTerritorialData(aggregatedData));
        this.createPieChart('chartNinosDisability', this.getChildrenDisabilityData(aggregatedData));
        this.createPieChart('chartNinosEthnicity', this.getChildrenEthnicityData(aggregatedData));

        // Teachers (Docentes) charts
        this.createPieChart('chartDocentesGender', this.getTeachersGenderData(aggregatedData));
        this.createPieChart('chartDocentesSexualOrientation', this.getTeachersSexualOrientationData(aggregatedData));
        this.createPieChart('chartDocentesTerritorial', this.getTeachersTerritorialData(aggregatedData));
        this.createPieChart('chartDocentesDisability', this.getTeachersDisabilityData(aggregatedData));
        this.createPieChart('chartDocentesEthnicity', this.getTeachersEthnicityData(aggregatedData));
    }
},

        createPieChart(canvasRef, chartData) {
            const ctx = this.$refs[canvasRef].getContext('2d');
            new Chart(ctx, {
                type: 'pie',
                data: chartData,
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'top',
                        },
                        title: {
                            display: true,
                            text: chartData.title
                        }
                    }
                }
            });
        },

        getChildrenGenderData(data) {
            return {
                labels: ['Femenino', 'Masculino', 'Intersexual'],
                datasets: [{
                    data: [data.num_Ninos_F, data.num_Ninos_M, data.num_Ninos_I],
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
                }],
                title: 'Distribución por Género'
            };
        },

        getChildrenAgeData(data) {
            return {
                labels: ['6-8 años', '9-11 años', '12-14 años', '15-17 años'],
                datasets: [{
                    data: [data.num_Entre_6_8, data.num_Entre_9_11, data.num_Entre_12_14, data.num_Entre_15_17],
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']
                }],
                title: 'Distribución por Edad'
            };
        },

        getChildrenTerritorialData(data) {
            return {
                labels: ['Conflicto Armado', 'Reincorporación' ,'PDET', 'ZOMAC', 'Sin territorial'],
                datasets: [{
                    data: [data.num_Ninios_Conflicto_Armado, data.num_Ninios_Reincorporacion,data.num_Ninios_Pdet, data.num_Ninios_Zomac, data.num_Vinculados - data.num_Ninios_Pdet - data.num_Ninios_Zomac - data.num_Ninios_Conflicto_Armado - data.num_Ninios_Reincorporacion >= 0 ? data.num_Vinculados - data.num_Ninios_Pdet - data.num_Ninios_Zomac - data.num_Ninios_Conflicto_Armado - data.num_Ninios_Reincorporacion:0],
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#C9CBCF']
                }],
                title: 'Distribución Territorial'
            };
        },

        getChildrenDisabilityData(data) {
            return {
                labels: ['Con Discapacidad', 'Sin Discapacidad'],
                datasets: [{
                    data: [data.num_Ninios_Discapacidad, data.num_Vinculados - data.num_Ninios_Discapacidad],
                    backgroundColor: ['#FF6384', '#36A2EB']
                }],
                title: 'Distribución por Discapacidad'
            };
        },

        getChildrenEthnicityData(data) {
            return {
                labels: ['Afro', 'Indígena', 'Gitano', 'Palenquero', 'Raizal', 'Sin etnia'],
                datasets: [{
                    data: [
                        data.num_Ninios_Afro,
                        data.num_Ninios_Indigena,
                        data.num_Ninios_Gitano,
                        data.num_Ninios_Palenquero,
                        data.num_Ninios_Raizal,
                        data.num_Vinculados - data.num_Ninios_Afro - data.num_Ninios_Indigena - data.num_Ninios_Gitano - data.num_Ninios_Palenquero - data.num_Ninios_Raizal
                    ],
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#C9CBCF']
                }],
                title: 'Distribución Étnica'
            };
        },

        getTeachersGenderData(data) {
            return {
                labels: ['Femenino', 'Masculino', 'Intersexual'],
                datasets: [{
                    data: [data.num_Docentes_Femenino_Vinculados, data.num_Docentes_Masculino_Vinculados, data.num_Docentes_Intersexual_Vinculados],
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
                }],
                title: 'Distribución por Género'
            };
        },

        getTeachersSexualOrientationData(data) {
            return {
                labels: ['Heterosexual', 'Homosexual', 'Bisexual', 'Otro'],
                datasets: [{
                    data: [data.num_Docentes_Orientacion_Hetero, data.num_Docentes_Orientacion_Homo, data.num_Docentes_Orientacion_Bi, data.num_Docentes_Orientacion_Otro],
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']
                }],
                title: 'Orientación Sexual'
            };
        },
        getTeachersTerritorialData(data) {
            return {
                labels: ['Conflicto Armado', 'Reincorporación','PDET', 'ZOMAC', 'Sin territorial'],
                datasets: [{
                    data: [data.num_Docentes_Conflicto_Armado,data.num_Docentes_Reincorporacion,data.num_Docentes_Pdet, data.num_Docentes_Zomac, data.num_Docentes - data.num_Docentes_Pdet - data.num_Docentes_Zomac-data.num_Docentes_Conflicto_Armado-data.num_Docentes_Reincorporacion? data.num_Docentes - data.num_Docentes_Pdet - data.num_Docentes_Zomac-data.num_Docentes_Conflicto_Armado-data.num_Docentes_Reincorporacion : 0],
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
                }],
                title: 'Distribución Territorial'
            };
        },
        getTeachersDisabilityData(data) {
            return {
                labels: ['Con Discapacidad', 'Sin Discapacidad'],
                datasets: [{
                    data: [data.num_Docentes_Discapacidad, data.num_Docentes - data.num_Docentes_Discapacidad],
                    backgroundColor: ['#FF6384', '#36A2EB']
                }],
                title: 'Distribución por Discapacidad'
            };
        },
        getTeachersEthnicityData(data) {
            return {
                labels: ['Afro', 'Indígena', 'Gitano', 'Palenquero', 'Raizal', 'Sin etnia'],
                datasets: [{
                    data: [
                        data.num_Docentes_Afro,
                        data.num_Docentes_Indigena,
                        data.num_Docentes_Gitano,
                        data.num_Docentes_Palenquero,
                        data.num_Docentes_Raizal,
                    ],
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#C9CBCF']
                }],
                title: 'Distribución Étnica'
            };
        }
    },
};
</script>

<style scoped>
/* Your component-specific styles go here */
</style>