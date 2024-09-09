<template>
    <div>
        <div class="row" style="margin-top: 40px; height: 250px;">
            <h5>Número de talleres, conferencias, foros realizados por las entidades coordinadoras, paralelos a los procesos de capacitación de maestros:</h5>
            <canvas ref="canvasTaller" style="height: 250px;"></canvas>
        </div>
        <div class="row" style="margin-top: 80px; height: 250px;">
            <h5>Número de encuentros realizados:</h5>
            <canvas ref="canvasEncuentros" style="height: 250px;"></canvas>
        </div>
        <div class="row" style="margin-top: 80px; height: 250px;">
            <h5>Número de participantes en encuentros:</h5>
            <canvas ref="canvasParticipantesEncuentros" style="height: 250px;"></canvas>
        </div>
        <div class="row" style="margin-top: 80px; height: 250px;">
            <h5>Número de premios recibidos por los grupos de investigación vinculados al programa Ondas:</h5>
            <canvas ref="canvasPremioNacional" style="height: 250px;"></canvas>
        </div>
        <div class="row" style="margin-top: 80px; height: 250px;">
            <h5>Número de niños, niñas y jóvenes vinculados al programa Ondas que participan en ferias de ciencia, tecnología e innovación:</h5>
            <canvas ref="canvasVinculadosFerias" style="height: 250px;"></canvas>
        </div>
        <div class="row" style="margin-top: 80px; height: 250px;">
            <h5>Número de niños, niñas y jóvenes vinculados al programa que participan en ferias de ciencia, tecnología e innovación internacionales:</h5>
            <canvas ref="canvasVinculadosInternacional" style="height: 250px;"></canvas>
        </div>
        <div class="row" style="margin-top: 80px; height: 250px;">
            <h5>Número de proyectos de investigación apoyados por el programa que son presentados en ferias de ciencia, tecnología e innovación:</h5>
            <canvas ref="canvasProyectoNacional" style="height: 250px;"></canvas>
        </div>
        <div class="row" style="margin-top: 80px; height: 250px;">
            <h5>Número de grupos de investigación vinculados al programa Ondas que han recibido premios o reconocimientos:</h5>
            <canvas ref="canvasGruposGanadores" style="height: 250px;"></canvas>
        </div>
        <div class="row" style="margin-top: 80px; height: 250px;">
            <h5>Número de proyectos de investigación apoyados por el programa que son presentados en ferias de ciencia, tecnología e innovación internacionales:</h5>
            <canvas ref="canvasProyectoInternacional" style="height: 250px;"></canvas>
        </div>
        <div class="row mt-5">
            <h3>Información de de niños, niñas y jóvenes vinculados al programa Ondas que participan en ferias de ciencia, tecnología e innovación:</h3>
            <div class="col-md-4 mb-4">
                <h5>Distribución Territorial</h5>
                <canvas ref="chartNacionalTerritorial"></canvas>
            </div>
            <div class="col-md-4 mb-4">
                <h5>Distribución por Discapacidad</h5>
                <canvas ref="chartNacionalDisability"></canvas>
            </div>
            <div class="col-md-4 mb-4">
                <h5>Distribución Étnica</h5>
                <canvas ref="chartNacionalEthnicity"></canvas>
            </div>
        </div>
    </div>
</template>

<script>
import { Chart, registerables } from 'chart.js';

export default {
    name: 'ConsultarMovilizacion',
    props: {
        datos: Array,
    },
    mounted() {
        if (this.datos) {
            this.createBarCharts();
            this.createPieCharts();
        } else {
            console.error('No data provided to the component or canvas elements not found.');
        }
    },
    methods: {
        aggregateData() {
        return this.datos.reduce((acc, dato) => {
            acc.num_Vinculados_Pdet = (acc.num_Vinculados_Pdet || 0) + dato.num_Vinculados_Pdet;
            acc.num_Vinculados_Zomac = (acc.num_Vinculados_Zomac || 0) + dato.num_Vinculados_Zomac;
            acc.num_Vinculados_Ferias = (acc.num_Vinculados_Ferias || 0) + dato.num_Vinculados_Ferias;
            acc.num_Vinculados_Discapacidad = (acc.num_Vinculados_Discapacidad || 0) + dato.num_Vinculados_Discapacidad;
            acc.num_Vinculados_Afro = (acc.num_Vinculados_Afro || 0) + dato.num_Vinculados_Afro;
            acc.num_Vinculados_Indigena = (acc.num_Vinculados_Indigena || 0) + dato.num_Vinculados_Indigena;
            acc.num_Vinculados_Gitano = (acc.num_Vinculados_Gitano || 0) + dato.num_Vinculados_Gitano;
            acc.num_Vinculados_Palenquero = (acc.num_Vinculados_Palenquero || 0) + dato.num_Vinculados_Palenquero;
            acc.num_Vinculados_Raizal = (acc.num_Vinculados_Raizal || 0) + dato.num_Vinculados_Raizal;
            acc.num_Vinculados_Conflicto_Armado = acc.num_Vinculados_Conflicto_Armado || 0 + dato.num_Vinculados_Conflicto_Armado;
            acc.num_Vinculados_Reincorporacion = acc.num_Vinculados_Reincorporacion || 0 + dato.num_Vinculados_Reincorporacion;
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
            const datasetsTaller = this.prepareDatasets(departamentos, years, 'num_Talleres_Entidades_Coordinadoras', departmentColors);

            // Prepare chart datasets for grupos de investigacion
            const datasetsEncuentros = this.prepareDatasets(departamentos, years, 'num_Encuentros', departmentColors);

            const datasetsParticipantesEncuentros = this.prepareDatasets(departamentos, years, 'num_Participantes_Encuentros', departmentColors);

            // Prepare chart datasets for Instituciones Aplican
            const datasetsPremioNacional = this.prepareDatasets(departamentos, years, 'num_Premios_Grupos_Investigacion', departmentColors);

            const datasetsVinculadosFeria = this.prepareDatasets(departamentos, years, 'num_Vinculados_Ferias', departmentColors);

            const datasetsVinculadosInternacional = this.prepareDatasets(departamentos, years, 'num_Vinculados_Internacionales', departmentColors);

            const datasetsProyectoNacional = this.prepareDatasets(departamentos, years, 'num_Proyectos_Ferias', departmentColors);

            const datasetsGruposGanadores = this.prepareDatasets(departamentos, years, 'num_Grupos_Ganadores', departmentColors);

            const datasetsProyectoInternacional = this.prepareDatasets(departamentos, years, 'num_Proyectos_Internacionales', departmentColors);

            this.createBarChart('canvasTaller', years, datasetsTaller);
            this.createBarChart('canvasEncuentros', years, datasetsEncuentros);
            this.createBarChart('canvasParticipantesEncuentros', years, datasetsParticipantesEncuentros);
            this.createBarChart('canvasPremioNacional', years, datasetsPremioNacional);
            this.createBarChart('canvasVinculadosFerias', years, datasetsVinculadosFeria);
            this.createBarChart('canvasVinculadosInternacional', years, datasetsVinculadosInternacional);
            this.createBarChart('canvasProyectoNacional', years, datasetsProyectoNacional);
            this.createBarChart('canvasGruposGanadores', years, datasetsGruposGanadores);
            this.createBarChart('canvasProyectoInternacional', years, datasetsProyectoInternacional);

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

        // Teachers (Docentes) charts
        this.createPieChart('chartNacionalTerritorial', this.getAsesorTerritorialData(aggregatedData));
        this.createPieChart('chartNacionalDisability', this.getAsesorDisabilityData(aggregatedData));
        this.createPieChart('chartNacionalEthnicity', this.getAsesorEthnicityData(aggregatedData));
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

        getAsesorTerritorialData(data) {
            return {
                labels: ['Conflicto Armado', 'Reincorporación','PDET', 'ZOMAC', 'Sin territorial'],
                datasets: [{
                    data: [data.num_Vinculados_Conflicto_Armado, data.num_Vinculados_Reincorporacion, data.num_Vinculados_Pdet, data.num_Vinculados_Zomac, data.num_Vinculados_Ferias - data.num_Vinculados_Conflicto_Armado - data.num_Vinculados_Reincorporacion - data.num_Vinculados_Pdet - data.num_Vinculados_Zomac],
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
                }],
                title: 'Distribución Territorial'
            };
        },
        getAsesorDisabilityData(data) {
            return {
                labels: ['Con Discapacidad', 'Sin Discapacidad'],
                datasets: [{
                    data: [data.num_Vinculados_Discapacidad, data.num_Vinculados - data.num_Vinculados_Discapacidad],
                    backgroundColor: ['#FF6384', '#36A2EB']
                }],
                title: 'Distribución por Discapacidad'
            };
        },
        getAsesorEthnicityData(data) {
            return {
                labels: ['Afro', 'Indígena', 'Gitano', 'Palenquero', 'Raizal', 'Sin etnia'],
                datasets: [{
                    data: [data.num_Vinculados_Afro, data.num_Vinculados_Indigena, data.num_Vinculados_Gitano, data.num_Vinculados_Palenquero, data.num_Vinculados_Raizal, data.num_Vinculados_Ferias - data.num_Vinculados_Afro - data.num_Vinculados_Indigena - data.num_Vinculados_Gitano - data.num_Vinculados_Palenquero - data.num_Vinculados_Raizal],
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