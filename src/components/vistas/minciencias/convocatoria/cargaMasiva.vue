<template>
  <navBarMinciencias />
  <div class="container mt-5">
    <div class="card shadow-lg" v-if="!isLoading">
      <div class="card-body">
        <h2 class="card-title text-center">Subir archivo Excel</h2>
        <form @submit.prevent="onFileUpload">
          <div class="form-group">
            <label for="fileUpload" class="form-label">Seleccione un archivo (.xlsx)</label>
            <input
              type="file"
              id="fileUpload"
              @change="onFileChange"
              accept=".xlsx"
              class="form-control"
            />
          </div>

          <div v-if="uploadProgress > 0" class="progress mt-3">
            <div
              class="progress-bar progress-bar-striped progress-bar-animated"
              role="progressbar"
              :style="{ width: uploadProgress + '%' }"
              :aria-valuenow="uploadProgress"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              {{ uploadProgress }}%
            </div>
          </div>

          <button type="submit" class="btn btn-primary btn-block mt-3">Subir</button>
        </form>

        <!-- Success or Error Message -->
        <div v-if="message" class="alert alert-info mt-3" role="alert">
          {{ message }}
        </div>

        <!-- Error List -->
        <div v-if="errors.length" class="alert alert-danger mt-3" role="alert">
          <ul>
            <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
          </ul>
        </div>
      </div>
    </div>
    <!-- Loading Screen -->
    <div v-if="isLoading" class="loading-screen">
      <div class="spinner-border text-primary" role="status">
        <span class="sr-only">Loading...</span>
      </div>
      <p class="loading-text">Subiendo archivo, por favor espere...</p>
    </div>
  </div>
</template>

<script>
import navBarMinciencias from '@/components/NavBars/navBarMinciencias.vue';
import { jwtDecode } from 'jwt-decode';
export default {
  components: {
    navBarMinciencias,
  },
  data() {
    return {
      file: null,
      message: '',
      token: '',
      id: '',
      errors: [],
      isLoading: false, // New state for loading
    };
  },
  async mounted() {
  this.token = localStorage.getItem('token');
  this.id = jwtDecode(this.token).id;
  },
  methods: {
    onFileChange(event) {
      this.file = event.target.files[0];
    },
    async onFileUpload() {
      if (!this.file) {
        this.message = 'Please select a file first.';
        return;
      }

      const formData = new FormData();
      formData.append('file', this.file);

      // Set loading to true
      this.isLoading = true;

      try {
        const response = await fetch(`${this.$baseRoute}/Convocatorias/UploadExcel/${this.id}/${this.token}`, {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          this.message = 'Carga exitosa';
          this.errors = [];
        }
        else{
          const data = await response.json();
          this.errors = data.errors || [];
        }
      } catch (error) {
        this.message = 'An error occurred during file upload.';
      } finally {
        // Set loading to false when done
        this.isLoading = false;
      }
    },
  },
};
</script>

<style scoped>
.container {
max-width: 600px;
}

.card {
border-radius: 10px;
}

h2 {
font-weight: bold;
margin-bottom: 20px;
}

.form-label {
font-size: 16px;
}

.btn {
font-size: 18px;
}

.alert ul {
margin: 0;
padding: 0;
list-style-type: none;
}

.progress-bar {
transition: width 0.4s ease;
}

/* Add styles for loading screen */
.loading-screen {
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
height: 80vh;
}

.loading-text {
margin-top: 10px;
font-size: 18px;
font-weight: bold;
}

.spinner-border {
width: 3rem;
height: 3rem;
}
</style>
