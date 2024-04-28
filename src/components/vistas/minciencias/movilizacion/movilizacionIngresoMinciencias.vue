<template>
    <NavBarMinciencias/>
    <h1 style="text-align: center;">Ingreso de indicadores de movilización del departamento</h1>
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
            <div class="col-md-2" >
                    <label for="anio">Ingrese el departamento:</label>
            </div>
            <div class="col-md-2 p-0">
                <select class="custom-select" id="anio" style="width: 100%; background-color: #D9D9D9; border: 0cap;">
                    <option selected>Seleccionar...</option>
                    <option v-for="(departamento, index) in listDepartamentos" :key="index" :value="departamento">{{ departamento }}</option>
                </select>
            </div>
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-1" style="text-align: left;"></div>
            <div class="col-md-7" style="text-align: left;">
                <label for="num_talleres_entidades_coordinadoras">Ingrese el número de talleres, conferencias, foros realizados por las entidades coordinadoras, paralelos a los procesos de capacitación de maestros:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="num_talleres_entidades_coordinadoras" min="0" style="background-color: #D9D9D9; border: 0;">
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
                <input type="number" class="form-control" id="num_premios_grupos_investigacion" min="0" style="background-color: #D9D9D9; border: 0;">
            </div>
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-1" style="text-align: left;"></div>
            <div class="col-md-7" style="text-align: left;">
                <label for="num_grupos_premios">Ingrese el número de grupos de investigación vinculados al programa Ondas que han recibido premios o reconocimientos:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="num_grupos_premios" min="0" style="background-color: #D9D9D9; border: 0;">
            </div>
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-1" style="text-align: left;"></div>
            <div class="col-md-7" style="text-align: left;">
                <label for="num_ninos">Ingrese el número de niños, niñas y jóvenes vinculados al programa Ondas que participan en ferias de ciencia, tecnología e innovación :</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="num_ninios" min="0" style="background-color: #D9D9D9; border: 0;">
            </div>
        </div>
        <div class="row" style="margin-top: 45px;">
            <div class="col-md-1" style="text-align: left;"></div>
            <div class="col-md-7" style="text-align: left;">
                <label for="num_vinculados_internacionales">Ingrese el número de niños, niñas y jóvenes vinculados al programa que participan en ferias de ciencia, tecnología e innovación internacionales:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="num_vinculados_internacionales" min="0" style="background-color: #D9D9D9; border: 0;">
            </div>
        </div>
        <div class="row" style="margin-top: 45px; margin-bottom: 50px;">
            <div class="col-md-1" style="text-align: left;"></div>
            <div class="col-md-7" style="text-align: left;">
                <label for="num_proyectos_internacionales">Ingrese el número de proyectos de investigación apoyados por el programa que son presentados en ferias de ciencia, tecnología e innovación internacionales:</label>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control" id="num_proyectos_internacionales" min="0" style="background-color: #D9D9D9; border: 0;">
            </div>
        </div>
        <button type="button" class="btn btn-primary" style="margin-bottom: 50px; margin-left: 45%; width: 150px">Guardar</button>
    </div>
</template>

<script>
import NavBarMinciencias from '@/components/NavBars/navBarMinciencias.vue'
export default {
    name: 'MovilizacionIngresoMinciencias',
    components: {
        NavBarMinciencias,
    },
    data() {
        return {
            numEncuentros: 0,
            listDepartamentos: ["Amazonas", 
                            "Antioquia", 
                            "Arauca", 
                            "Atlántico", 
                            "Bogotá",
                            "Bolívar", 
                            "Boyacá", 
                            "Caldas",    
                            "Caquetá",    
                            "Casanare",    
                            "Cauca",    
                            "Cesar",    
                            "Chocó",    
                            "Córdoba",    
                            "Cundinamarca",    
                            "Guainía",    
                            "Guaviare",    
                            "Huila",    
                            "La Guajira",    
                            "Magdalena",    
                            "Meta",    
                            "Nariño",    
                            "Norte de Santander",    
                            "Putumayo",    
                            "Quindío",    
                            "Risaralda",    
                            "San Andrés y Providencia",    
                            "Santander",    
                            "Sucre",    
                            "Tolima",    
                            "Valle del Cauca",    
                            "Vaupés",    
                            "Vichada"],
        }
    },
};
</script>

<style scoped>
/* Your component-specific styles here */
</style>