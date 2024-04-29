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
            <h5>Número de instituciones educativas que aplican a las convocatorias:</h5>
            <canvas ref="canvasInstitucionesAplican" style="height: 250px;"></canvas>
        </div>
        <div class="row" style="margin-top: 80px; height: 250px;">
            <h5>Número de niños, niñas y jóvenes vinculados al programa:</h5>
            
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
            const datasetsConvocatorias = departamentos.map((departamento, index) => {
                const data = years.map(year => {
                    const convocationsForYearAndDept = this.datos.filter(dato => dato.anio === year && dato.departamento === departamento);
                    return convocationsForYearAndDept.length > 0 ? convocationsForYearAndDept[0].num_Convocatorias : 0;
                });

                return {
                    label: departamento,
                    backgroundColor: departmentColors[index % departmentColors.length], // Cycling through colors
                    data: data
                };
            });

            // Prepare chart datasets for grupos de investigacion
            const datasetsGruposInvestigacion = departamentos.map((departamento, index) => {
                // For demonstration, generating random data for grupos de investigacion
                const data = years.map(year => {
                    const investigacionesForYearAndDept = this.datos.filter(dato => dato.anio === year && dato.departamento === departamento);
                    return investigacionesForYearAndDept.length > 0 ? investigacionesForYearAndDept[0].num_Grupos_Investigacion_Aplican: 0;
                });

                return {
                    label: departamento,
                    backgroundColor: departmentColors[index % departmentColors.length], // Cycling through colors
                    data: data
                };
            });

            // Prepare chart datasets for Instituciones Aplican
            const datasetsInstitucionesAplican = departamentos.map((departamento, index) => {
                // For demonstration, generating random data for grupos de investigacion
                const data = years.map(year => {
                    const investigacionesForYearAndDept = this.datos.filter(dato => dato.anio === year && dato.departamento === departamento);
                    return investigacionesForYearAndDept.length > 0 ? investigacionesForYearAndDept[0].num_Instituciones_Educativas_Aplican: 0;
                });

                return {
                    label: departamento,
                    backgroundColor: departmentColors[index % departmentColors.length], // Cycling through colors
                    data: data
                };
            });

            const chartDataConvocatorias = {
                labels: years,
                datasets: datasetsConvocatorias
            };

            const chartDataGruposInvestigacion = {
                labels: years,
                datasets: datasetsGruposInvestigacion
            };

            const chartDataInstitucionesAplican = {
                labels: years,
                datasets: datasetsInstitucionesAplican
            };

            Chart.register(...registerables);

            // Initialize chart for convocatorias
            new Chart(this.$refs.canvasConvocatorias, {
                type: 'bar',
                data: chartDataConvocatorias,
                options: {
                    responsive: true,
                    maintainAspectRatio: false
                }
            });

            // Initialize chart for grupos de investigacion
            new Chart(this.$refs.canvasGruposInvestigacion, {
                type: 'bar',
                data: chartDataGruposInvestigacion,
                options: {
                    responsive: true,
                    maintainAspectRatio: false
                }
            });

            new Chart(this.$refs.canvasInstitucionesAplican, {
                type: 'bar',
                data: chartDataInstitucionesAplican,
                options: {
                    responsive: true,
                    maintainAspectRatio: false
                }
            });
        } else {
            console.error('No data provided to the component or canvas elements not found.');
        }
    }
};
</script>

<style scoped>
/* Your component-specific styles go here */
</style>
