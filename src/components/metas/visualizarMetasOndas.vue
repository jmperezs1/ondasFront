<template>
  <div class="container mt-3">
    <!-- Year Selection -->
    <div class="row mt-4">
      <div class="col-md-3">
        <label for="anio"><h6>Seleccione el año:</h6></label>
      </div>
      <div class="col-md-7">
        <select class="custom-select" id="anio" v-model="anio" @change="fetchProgress">
          <option value="" disabled selected>Seleccionar año...</option>
          <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
        </select>
      </div>
    </div>

    <!-- Departamentos Selection -->
    <div class="row mt-4">
      <div class="col-md-3">
        <h6>Seleccione el Departamento:</h6>
      </div>
      <div class="col-md-7">
        <select class="custom-select" v-model="selectedDepartamento" @change="fetchProgress">
          <option value="" disabled selected>Seleccionar departamento...</option>
          <option value="Todos los departamentos">Todos los departamentos</option>
          <option v-for="departamento in listDepartamentos" :key="departamento" :value="departamento">{{ departamento }}</option>
        </select>
      </div>
    </div>

    <!-- Show Progress Bars -->
    <div v-if="progressData" class="mt-5">
      <h4>Progreso de Metas</h4>
      <div v-for="(meta, label) in progressData" :key="label" class="mt-4">
        <h6>{{ label }}: {{ meta.current }} / {{ meta.meta }} ({{ meta.percentage }}%)</h6>
        <b-progress 
          :value="meta.percentage" 
          :max="100" 
          :variant="getProgressBarVariant(meta.percentage)" 
          animated
        ></b-progress>
      </div>
    </div>

    <!-- Warning if no metas exist -->
    <div v-else-if="showNoMetasAlert" class="alert alert-warning mt-5">
      No se han creado metas para este departamento en este año.
    </div>
  </div>
</template>

<script>
import { jwtDecode } from 'jwt-decode';

export default {
  data() {
    return {
      years: Array.from({ length: 31 }, (_, i) => 2000 + i), // Años de 2000 a 2030
      listDepartamentos: [
        "Amazonas", "Antioquia", "Arauca", "Atlántico", "Bogotá",
        "Bolívar", "Boyacá", "Caldas", "Caquetá", "Casanare", "Cauca",
        "Cesar", "Chocó", "Córdoba", "Cundinamarca", "Guainía", "Guaviare",
        "Huila", "La Guajira", "Magdalena", "Meta", "Nariño", "Norte de Santander",
        "Putumayo", "Quindío", "Risaralda", "San Andrés y Providencia", "Santander",
        "Sucre", "Tolima", "Valle del Cauca", "Vaupés", "Vichada"
      ],
      selectedDepartamento: null,
      anio: null,
      progressData: null,
      showNoMetasAlert: false,
      token: null,
      userId: null,
    };
  },
  methods: {
    async fetchProgress() {
      if (!this.anio || !this.selectedDepartamento) return;

      try {
        const response = await fetch(`${this.$baseRoute}/metas/filterAnioDepartamentoPercentages/${this.anio}/${this.selectedDepartamento}/${this.userId}/${this.token}`);

        if (response.status === 204) {
          this.progressData = null;
          this.showNoMetasAlert = true;
          return;
        }

        if (response.ok) {
          const result = await response.json();
          console.log(result); // Log the API result

          // Process the result and log it before rendering
          this.progressData = {
            'Grupos Étnicos': {
              percentage: result.GruposEtnicos.meta > 0 ? Math.round(result.GruposEtnicos.percentage) : 0,
              current: result.GruposEtnicos.current || 0,
              meta: result.GruposEtnicos.meta || 0
            },
            'PDET y ZOMAC': {
              percentage: result.ZomacPdet.meta > 0 ? Math.round(result.ZomacPdet.percentage) : 0,
              current: result.ZomacPdet.current || 0,
              meta: result.ZomacPdet.meta || 0
            },
            'Vinculados': {
              percentage: result.Vinculados.meta > 0 ? Math.round(result.Vinculados.percentage) : 0,
              current: result.Vinculados.current || 0,
              meta: result.Vinculados.meta || 0
            },
            'Mujeres': {
              percentage: result.Mujeres.meta > 0 ? Math.round(result.Mujeres.percentage) : 0,
              current: result.Mujeres.current || 0,
              meta: result.Mujeres.meta || 0
            }
          };

          console.log(this.progressData); // Log the processed data
          this.showNoMetasAlert = false;
        } else {
          console.error("Error fetching progress data:", response.statusText);
          this.progressData = null;
          this.showNoMetasAlert = true;
        }
      } catch (error) {
        console.error("Error fetching progress data:", error);
        this.progressData = null;
        this.showNoMetasAlert = true;
      }
    },

    // Method to determine the color variant based on the percentage
    getProgressBarVariant(percentage) {
      if (percentage >= 100) return 'success'; // Green
      if (percentage >= 50) return 'warning'; // Yellow
      return 'danger'; // Red
    }
  },
  async mounted() {
    try {
      this.token = localStorage.getItem('token');
      this.userId = jwtDecode(this.token).id;

      // Fetch min and max years
      const response = await fetch(`${this.$baseRoute}/convocatorias/minmaxanio/${this.userId}/${this.token}`);
      if (response.ok) {
        const json = await response.json();
        const minYear = json.minAnio;
        const maxYear = json.maxAnio;

        for (let year = minYear; year <= maxYear; year++) {
          this.years.push(year);
        }
      } else {
        console.error(`Failed to fetch min/max year data: ${response.statusText}`);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
};
</script>

<style scoped>
.container {
  background-color: #f8f9fa;
  padding: 40px;
  border-radius: 8px;
}

.custom-select {
  font-size: 1.1rem;
  padding: 10px;
  margin-bottom: 20px;
}

b-progress {
  height: 1.5rem;
}

h6 {
  font-weight: 500;
}

.alert {
  font-size: 1.1rem;
}
</style>
