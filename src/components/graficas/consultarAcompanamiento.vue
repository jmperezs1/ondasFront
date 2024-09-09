<template>
    <div>
        <div class="row" style="margin-top: 40px; height: 250px;">
            <h5>Número de asesores vinculados al programa:</h5>
            <canvas ref="canvasAsesores" style="height: 250px;"></canvas>
        </div>
        <div class="row" style="margin-top: 80px; height: 250px;">
            <h5>Número de asesorias realizadas en el año:</h5>
            <canvas ref="canvasAsesorias" style="height: 250px;"></canvas>
        </div>
        <div class="row" style="margin-top: 80px; height: 250px;">
            <h5>Número de grupos de investigación que recibieron asesorías en el año:</h5>
            <canvas ref="canvasGruposInvestigacionAsesorias" style="height: 250px;"></canvas>
        </div>
        <div class="row" style="margin-top: 80px; height: 250px;">
            <h5>Número promedio de asesorías que recibe cada grupo de investigación:</h5>
            <canvas ref="canvasAsesoriasGrupos" style="height: 250px;"></canvas>
        </div>
        <div class="row" style="margin-top: 80px; height: 250px;">
            <h5>Número promedio de talleres de formación y/o capacitación realizados en cada coordinación:</h5>
            <canvas ref="canvasTalleres" style="height: 250px;"></canvas>
        </div>
        <div class="row" style="margin-top: 80px; height: 250px;">
            <h5>Número promedio de grupos de investigación vinculados al programa por asesor:</h5>
            <canvas ref="canvasGruposAsesor" style="height: 250px;"></canvas>
        </div>
        <div class="row" style="margin-top: 80px; height: 250px;">
            <h5>Número de docentes vinculados al programa que participan en talleres de capacitación y/o formación:</h5>
            <canvas ref="canvasDocentes" style="height: 250px;"></canvas>
        </div>
        <div class="row" style="margin-top: 80px; height: 250px;">
            <h5>Número promedio de horas dedicadas por los docentes vinculados al programa a actividades de Ondas:</h5>
            <canvas ref="canvasHorasDocentes" style="height: 250px;"></canvas>
        </div>
        <div class="row" style="margin-top: 80px; height: 250px;">
            <h5>Número promedio de horas dedicadas por los niños, niñas y adolescentes vinculados a Ondas a las actividades de investigación:</h5>
            <canvas ref="canvasHorasJovenes" style="height: 250px;"></canvas>
        </div>
        <div class="row" style="margin-top: 80px; height: 250px;">
            <h5>Duración promedio de los proyectos de investigación seleccionados:</h5>
            <canvas ref="canvasDuracion" style="height: 250px;"></canvas>
        </div>
        <div class="row" style="margin-top: 80px; height: 250px;">
            <h5>Porcentaje de municipios en el departamento con instituciones educativas vinculadas al programa Ondas:</h5>
            <canvas ref="canvasPct" style="height: 250px;"></canvas>
        </div>
        <div class="row" style="margin-top: 80px; height: 250px;">
            <h5>Monto total destinado a la financiación de los proyectos de Ondas:</h5>
            <canvas ref="canvasMontoFinanciacion" style="height: 250px;"></canvas>
        </div>
        <div class="row" style="margin-top: 80px; height: 250px;">
            <h5>Monto promedio destinado por proyecto de investigación:</h5>
            <canvas ref="canvasMontoPromedio" style="height: 250px;"></canvas>
        </div>
        <div class="row" style="margin-top: 80px; height: 250px;">
            <h5>Monto promedio destinado por niño, niña o adolescente vinculado al programa:</h5>
            <canvas ref="canvasPromedioJoven" style="height: 250px;"></canvas>
        </div>
        <div class="row mt-5">
            <h3>Información de asesores</h3>
            <div class="col-md-4 mb-4">
                <h5>Distribución por Género</h5>
                <canvas ref="chartAsesoresGender"></canvas>
            </div>
            <div class="col-md-4 mb-4">
                <h5>Orientación Sexual</h5>
                <canvas ref="chartAsesoresSexualOrientation"></canvas>
            </div>
            <div class="col-md-4 mb-4">
                <h5>Distribución Territorial</h5>
                <canvas ref="chartAsesoresTerritorial"></canvas>
            </div>
            <div class="col-md-4 mb-4">
                <h5>Distribución por Discapacidad</h5>
                <canvas ref="chartAsesoresDisability"></canvas>
            </div>
            <div class="col-md-4 mb-4">
                <h5>Distribución Étnica</h5>
                <canvas ref="chartAsesoresEthnicity"></canvas>
            </div>
        </div>
    </div>
</template>

<script>
import { Chart, registerables } from 'chart.js';

export default {
    name: 'ConsultarAcompanamiento',
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
            acc.num_Asesores_Mujer = (acc.num_Asesores_Mujer || 0) + dato.num_Asesores_Mujer;
            acc.num_Asesores_Hombre = (acc.num_Asesores_Hombre || 0) + dato.num_Asesores_Hombre;
            acc.num_Asesores_Intersexual = (acc.num_Asesores_Intersexual|| 0) + dato.num_Docentes_Intersexual;
            acc.num_Asesores_Orientacion_Hetero = (acc.num_Asesores_Orientacion_Hetero || 0) + dato.num_Asesores_Orientacion_Hetero;
            acc.num_Asesores_Orientacion_Homo = (acc.num_Asesores_Orientacion_Homo || 0) + dato.num_Asesores_Orientacion_Homo;
            acc.num_Asesores_Orientacion_Bi = (acc.num_Docentes_Orientacion_Bi || 0) + dato.num_Docentes_Orientacion_Bi;
            acc.num_Asesores_Orientacion_Otro = (acc.num_Asesores_Orientacion_Otro || 0) + dato.num_Asesores_Orientacion_Otro;
            acc.num_Asesores_Pdet = (acc.num_Asesores_Pdet || 0) + dato.num_Asesores_Pdet;
            acc.num_Asesores_Zomac = (acc.num_Asesores_Zomac || 0) + dato.num_Asesores_Zomac;
            acc.num_Asesores = (acc.num_Asesores || 0) + dato.num_Asesores;
            acc.num_Asesores_Discapacidad = (acc.num_Asesores_Discapacidad || 0) + dato.num_Asesores_Discapacidad;
            acc.num_Asesores_Afro = (acc.num_Asesores_Afro || 0) + dato.num_Asesores_Afro;
            acc.num_Asesores_Indigena = (acc.num_Asesores_Indigena || 0) + dato.num_Asesores_Indigena;
            acc.num_Asesores_Gitano = (acc.num_Asesores_Gitano || 0) + dato.num_Asesores_Gitano;
            acc.num_Asesores_Palenquero = (acc.num_Asesores_Palenquero || 0) + dato.num_Asesores_Palenquero;
            acc.num_Asesores_Raizal = (acc.num_Asesores_Raizal || 0) + dato.num_Asesores_Raizal;
            acc.num_Asesores_Conflicto_Armado = acc.num_Asesores_Conflicto_Armado || 0 + dato.num_Asesores_Conflicto_Armado;
            acc.num_Asesores_Reincorporacion = acc.num_Asesores_Reincorporacion || 0 + dato.num_Asesores_Reincorporacion;
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
            const datasetsAsesores = this.prepareDatasets(departamentos, years, 'num_Asesores', departmentColors);

            // Prepare chart datasets for grupos de investigacion
            const datasetsAsesorias = this.prepareDatasets(departamentos, years, 'num_Asesorias', departmentColors);

            const datasetsGruposInvestigacionAsesorias = this.prepareDatasets(departamentos, years, 'num_Grupos_Asesorados', departmentColors);

            // Prepare chart datasets for Instituciones Aplican
            const datasetsAsesoriasGrupos = this.prepareDatasets(departamentos, years, 'num_Promedio_Asesorias', departmentColors);

            const datasetsGruposAsesor = this.prepareDatasets(departamentos, years, 'num_Grupos_Por_Asesor', departmentColors);

            const datasetsTalleres = this.prepareDatasets(departamentos, years, 'num_Talleres', departmentColors);

            const datasetsDocentes = this.prepareDatasets(departamentos, years, 'num_Docentes_Vinculados', departmentColors);

            const datasetsHorasDocentes = this.prepareDatasets(departamentos, years, 'num_Promedio_Horas_Docentes', departmentColors);

            const datasetsHorasJovenes = this.prepareDatasets(departamentos, years, 'num_Promedio_Horas_Jovenes', departmentColors);

            const datasetsDuracion = this.prepareDatasets(departamentos, years, 'duracion_Proyectos', departmentColors);

            const datasetsPct = this.prepareDatasets(departamentos, years, 'pct_Vinculados', departmentColors);

            const datasetsMontoFinanciacion = this.prepareDatasets(departamentos, years, 'monto_Financiacion', departmentColors);

            const datasetsMontoPromedio = this.prepareDatasets(departamentos, years, 'monto_Promedio_Proyecto', departmentColors);

            const datasetsPromedioJoven = this.prepareDatasets(departamentos, years, 'monto_Promedio_Por_Joven', departmentColors);
            
            this.createBarChart('canvasAsesores', years, datasetsAsesores);
            this.createBarChart('canvasAsesorias', years, datasetsAsesorias);
            this.createBarChart('canvasGruposInvestigacionAsesorias', years, datasetsGruposInvestigacionAsesorias);
            this.createBarChart('canvasAsesoriasGrupos', years, datasetsAsesoriasGrupos);
            this.createBarChart('canvasGruposAsesor', years, datasetsGruposAsesor);
            this.createBarChart('canvasTalleres', years, datasetsTalleres);
            this.createBarChart('canvasDocentes', years, datasetsDocentes);
            this.createBarChart('canvasHorasDocentes', years, datasetsHorasDocentes);
            this.createBarChart('canvasHorasJovenes', years, datasetsHorasJovenes);
            this.createBarChart('canvasDuracion', years, datasetsDuracion);
            this.createBarChart('canvasPct', years, datasetsPct);
            this.createBarChart('canvasMontoFinanciacion', years, datasetsMontoFinanciacion);
            this.createBarChart('canvasMontoPromedio', years, datasetsMontoPromedio);
            this.createBarChart('canvasPromedioJoven', years, datasetsPromedioJoven);

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
        this.createPieChart('chartAsesoresGender', this.getAsesorGenderData(aggregatedData));
        this.createPieChart('chartAsesoresSexualOrientation', this.getAsesorSexualOrientationData(aggregatedData));
        this.createPieChart('chartAsesoresTerritorial', this.getAsesorTerritorialData(aggregatedData));
        this.createPieChart('chartAsesoresDisability', this.getAsesorDisabilityData(aggregatedData));
        this.createPieChart('chartAsesoresEthnicity', this.getAsesorEthnicityData(aggregatedData));
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


        getAsesorGenderData(data) {
            return {
                labels: ['Femenino', 'Masculino', 'Intersexual'],
                datasets: [{
                    data: [data.num_Asesores_Mujer, data.num_Asesores_Hombre, data.num_Asesores_Intersexual],
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
                }],
                title: 'Distribución por Género'
            };
        },

        getAsesorSexualOrientationData(data) {
            return {
                labels: ['Heterosexual', 'Homosexual', 'Bisexual', 'Otro'],
                datasets: [{
                    data: [data.num_Asesores_Orientacion_Hetero, data.num_Asesores_Orientacion_Homo, data.num_Asesores_Orientacion_Bi, data.num_Asesores_Orientacion_Otro],
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']
                }],
                title: 'Orientación Sexual'
            };
        },
        getAsesorTerritorialData(data) {
            return {
                labels: ['Conflicto Armado', 'Reincorporación','PDET', 'ZOMAC', 'Sin territorial'],
                datasets: [{
                    data: [data.num_Asesores_Conflicto_Armado,data.num_Asesores_Reincorporacion,data.num_Asesores_Pdet, data.num_Asesores_Zomac, data.num_Asesores - data.num_Asesores_Pdet - data.num_Asesores_Zomac-data.num_Asesores_Conflicto_Armado-data.num_Asesores_Reincorporacion],
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
                }],
                title: 'Distribución Territorial'
            };
        },
        getAsesorDisabilityData(data) {
            return {
                labels: ['Con Discapacidad', 'Sin Discapacidad'],
                datasets: [{
                    data: [data.num_Asesores_Discapacidad, data.num_Asesores - data.num_Asesores_Discapacidad],
                    backgroundColor: ['#FF6384', '#36A2EB']
                }],
                title: 'Distribución por Discapacidad'
            };
        },
        getAsesorEthnicityData(data) {
            return {
                labels: ['Afro', 'Indígena', 'Gitano', 'Palenquero', 'Raizal', 'Sin etnia'],
                datasets: [{
                    data: [
                        data.num_Asesores_Afro,
                        data.num_Asesores_Indigena,
                        data.num_Asesores_Gitano,
                        data.num_Asesores_Palenquero,
                        data.num_Asesores_Raizal,
                        data.num_Asesores - data.num_Asesores_Afro - data.num_Asesores_Indigena - data.num_Asesores_Gitano - data.num_Asesores_Palenquero - data.num_Asesores_Raizal
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