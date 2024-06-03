<template>
    <div class="container">
        <div class=" row">
            <div class="col-md-5"></div>
            <div class="col-md-2">
                <button class="btn btn-danger" @click="confirmAndDelete">Eliminar</button>
            </div>
        </div>
        
    </div>
</template>

<script>
import { jwtDecode } from 'jwt-decode';
export default {
    name: 'EliminarConvocatoria',
    data() {
        return {
            Anio: null,
            Departamento: null,
        };
    },
    watch: {
    anio(newAnio) {
      this.Anio = newAnio;
      for (const key in this.$data) {
                if (key !== 'Anio' && key !== 'Departamento') {
                    this.$data[key] = 0;
                }
            }
    },
    departamento(newDepartamento) {
      this.Departamento = newDepartamento;
      for (const key in this.$data) {
                if (key !== 'Anio' && key !== 'Departamento') {
                    this.$data[key] = 0;
                }
            }
    }
  },
    props:{
        anio: {
            type: Number,
            required: true
        },
        departamento: {
            type: String,
            required: true
        }
    },
    methods: {
        async eliminarConvocatoria() {
            const token = localStorage.getItem('token');
            const id = jwtDecode(token).id;
            const response = await fetch(`https://localhost:7192/api/convocatorias/anio/${this.Anio}/departamento/${this.departamento}/${id}/${token}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if(response.ok){
                alert('Convocatoria eliminada con éxito');
                window.location.reload();
            }
            else{
                alert('Error al eliminar la convocatoria');
            }
        },
        confirmAndDelete() {
            if (window.confirm('¿Está seguro de que desea eliminar esta convocatoria?')) {
                this.eliminarConvocatoria();
            }
        }
    },
};
</script>

<style scoped>
/* Your component-specific styles go here */
</style>