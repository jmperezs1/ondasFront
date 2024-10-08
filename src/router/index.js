import { createRouter, createWebHistory } from 'vue-router';
import InicioSesion from '../components/inicioSesion/inicioSesion.vue';
import InicioMinciencias from '../components/vistas/minciencias/inicioMinciencias.vue';
import InicioDepartamento from '../components/vistas/departamento/inicioDepartamento.vue';
import convocatoriaIngresoMinciencias from '../components/vistas/minciencias/convocatoria/convocatoriaIngresoMinciencias.vue';
import exportarConvocatoriaMinciencias from '../components/vistas/minciencias/convocatoria/exportarConvocatoriaMinciencias.vue';
import exportarConvocatoriasPeriodosMinciencias from '../components/vistas/minciencias/convocatoria/exportarConvocatoriasPeriodosMinciencias.vue';
import acompanamientoIngresoMinciencias from '../components/vistas/minciencias/acompanamiento/acompanamientoIngresoMinciencias.vue';
import exportarAcompanamientoMinciencias from '../components/vistas/minciencias/acompanamiento/exportarAcompanamientoMinciencias.vue';
import consultaConvocatoriaMinciencias from '@/components/vistas/minciencias/graficas/consultaConvocatoriaMinciencias.vue';
import exportarAcompanamientosPeriodosMinciencias from '../components/vistas/minciencias/acompanamiento/exportarAcompanamientosPeriodosMiciencias.vue';
import movilizacionIngresoMinciencias from '../components/vistas/minciencias/movilizacion/movilizacionIngresoMinciencias.vue';
import exportarMovilizacionMinciencias from '../components/vistas/minciencias/movilizacion/exportarMovilizacionMinciencias.vue';
import exportarMovilizacionesMinciencias from '../components/vistas/minciencias/movilizacion/exportarMovilizacionesMinciencias.vue';
import cofiguracionMinCiencias from '../components/vistas/minciencias/configuracionMinciencias.vue';
import convocatoriaIngresoDepartamento from '../components/vistas/departamento/convocatoria/convocatoriaIngresoDepartamento.vue';
import exportarConvocatoriaDepartamento from '../components/vistas/departamento/convocatoria/exportarConvocatoriaDepartamentos.vue';
import exportarConvocatoriasPeriodosDepartamento from '@/components/vistas/departamento/convocatoria/exportarConvocatoriasPeriodosDepartamento.vue';
import consultaAcompanamientoMinciencias from '@/components/vistas/minciencias/graficas/consultaAcompanamientoMinciencias.vue';
import acompanamientoIngresoDepartamento from '@/components/vistas/departamento/acompanamiento/acompanamientoIngresoDepartamento.vue';
import exportarAcompanamientoDepartamento from '@/components/vistas/departamento/acompanamiento/exportarAcompanamientoDepartamento.vue';
import exportarAcompaniamientosPeriodosDepartamento from '../components/vistas/departamento/acompanamiento/exportarAcompaniamientosPeriodosDepartamento.vue';
import movilizacionIngresoDepartamento from '@/components/vistas/departamento/movilizacion/movilizacionIngresoDepartamento.vue';
import consultaMovilizacionMinciencias from '@/components/vistas/minciencias/graficas/consultaMovilizacion.vue';
import exportarMovilizacionDepartamento from '@/components/vistas/departamento/movilizacion/exportarMovilizacionDepartamento.vue';
import exportarMovilizacionesPeriodosDepartamento from '@/components/vistas/departamento/movilizacion/exportarMovilizacionesPeriodosDepartamento.vue';
import inicioAdmin from '@/components/vistas/admin/inicioAdmin.vue';
import crearUusario from '@/components/vistas/admin/crearUsuario.vue';
import eliminarUsuario from '@/components/vistas/admin/eliminarUsuario.vue';
import configuracionAdmin from '@/components/vistas/admin/configuracionAdmin.vue';
import configuracionDepartamento from '@/components/vistas/departamento/configuracionDepartamento.vue';
import restablecerContrasenia from '@/components/inicioSesion/olvideContrasenia.vue';
import VisualizarMovilizacionDepartamento from '@/components/vistas/departamento/movilizacion/visualizarMovilizacionDepartamento.vue';
import VisualizarMovilizacionMinciencias from '@/components/vistas/minciencias/movilizacion/visualizarMovilizacionMinciencias.vue'
import VisualizarAcompaniamientoMinciencias from '@/components/vistas/minciencias/acompanamiento/visualizarAcompaniamientoMinciencias.vue'
import VisualizarAcompaniamientoDepartamento from '@/components/vistas/departamento/acompanamiento/visualizarAcompaniamientoDepartamento.vue'
import VisualizarConvocatoriaMinciencias from '@/components/vistas/minciencias/convocatoria/visualizarConvocatoriaMinciencias.vue'
import VisualizarConvocatoriaDepartamento from '@/components/vistas/departamento/convocatoria/visualizarConvocatoriaDepartamento.vue'
import EliminarConvocatoriaDepartamento from '@/components/vistas/departamento/convocatoria/eliminarConvocatoriaDepartamento.vue'
import EliminarAcompanamientoDepartamento from '@/components/vistas/departamento/acompanamiento/eliminarAcompanamientoDepartamento.vue';
import EliminarMovilizacionDepartamento from '@/components/vistas/departamento/movilizacion/eliminarMovilizacionDepartamento.vue';
import EliminarConvocatoriaMinciencias from '@/components/vistas/minciencias/convocatoria/eliminarConvocatoriaMinciencias.vue';
import EliminarAcompanamientoMinciencias from '@/components/vistas/minciencias/acompanamiento/eliminarAcompanamientoMinciencias.vue';
import eliminarMovilizacionMinciencias from '@/components/vistas/minciencias/movilizacion/eliminarMovilizacionMinciencias.vue';
import modificarConvocatoriaDepartamento from '@/components/vistas/departamento/convocatoria/modificarConvocatoriaDepartamento.vue';
import ModificarAcompanamientoDepartamento from '@/components/vistas/departamento/acompanamiento/modificarAcompanamientoDepartamento.vue';
import modificarMovilizacionDepartamento from '@/components/vistas/departamento/movilizacion/modificarMovilizacionDepartamento.vue';
import modificarConvocatoriaMinciencias from '@/components/vistas/minciencias/convocatoria/modificarConvocatoriaMinciencias.vue';
import modificarAcompanamientoMinciencias from '@/components/vistas/minciencias/acompanamiento/modificarAcompanamientoMinciencias.vue';
import modificarMovilizacionMinciencias from '@/components/vistas/minciencias/movilizacion/modificarMovilizacionMinciencias.vue';
import consultaMovilizacionDepartamento from '@/components/vistas/departamento/graficas/consultaMovilizacionDepartamento.vue';
import consultaConvocatoriaDepartamento from '@/components/vistas/departamento/graficas/consultaConvocatoria.Departamento.vue';
import consultaAcompanamientoDepartamento from '@/components/vistas/departamento/graficas/consultaAcompanamientoDepartamento.vue';
import MetasMinciencias from '@/components/vistas/minciencias/metas/metasMinciencias.vue';
import setOrUpdateMetasMinciencias from '@/components/vistas/minciencias/metas/metasUpdateMinciencias.vue';

import cargaMasivaConvocatoria from '@/components/vistas/minciencias/convocatoria/cargaMasiva.vue';
import cargaMasivaAcompamiamiento from '@/components/vistas/minciencias/acompanamiento/cargaMasivaAcompamiamiento.vue';
import cargaMasivaMovilizacion from '@/components/vistas/minciencias/movilizacion/cargaMasivaMovilizacion.vue';
import { jwtDecode } from 'jwt-decode';

const routes = [
    {
        path: '/',
        name: 'home',
        component: InicioSesion
    },
    {
        path: '/minciencias',
        name: 'vistaMinciencias',
        component: InicioMinciencias
    },
    {
        path: '/minciencias/convocatorias/ingreso',
        name: 'ingresoConvocatoriasMinciencias',
        component: convocatoriaIngresoMinciencias
    }, 
    {
        path: '/minciencias/convocatorias/consultas/periodo',
        name: 'periodoConvocatoriasMinciencias',
        component: exportarConvocatoriaMinciencias
    },
    {
        path: '/minciencias/convocatorias/consultas/periodos',
        name: 'periodosConvocatoriasMinciencias',
        component: exportarConvocatoriasPeriodosMinciencias
    },
    {
        path: '/minciencias/acompanamiento/ingreso',
        name: 'ingresoAcompanamientoMinciencias',
        component: acompanamientoIngresoMinciencias
    },
    {
        path: '/minciencias/acompanamiento/consultas/periodo',
        name: 'periodoAcompanamientoMinciencias',
        component: exportarAcompanamientoMinciencias
    },
    {
        path: '/minciencias/acompanamiento/consultas/periodos',
        name: 'periodosAcompanamientoMinciencias',
        component: exportarAcompanamientosPeriodosMinciencias
    },
    {
        path: '/minciencias/movilizacion/ingreso',
        name: 'ingresoMovilizacionMinciencias',
        component: movilizacionIngresoMinciencias
    },
    {
        path: '/minciencias/movilizacion/consultas/periodo',
        name: 'periodoMovilizacionMinciencias',
        component: exportarMovilizacionMinciencias
    },
    {
        path: '/minciencias/movilizacion/consultas/periodos',
        name: 'periodosMovilizacionMinciencias',
        component: exportarMovilizacionesMinciencias
    },
    {
        path: '/minciencias/graficas/convocatoria',
        name: 'consultasConvocatoriasMinciencias',
        component: consultaConvocatoriaMinciencias
    },
    {
        path: '/minciencias/graficas/acompanamiento',
        name: 'consultaAcompanamientoMinciencias',
        component: consultaAcompanamientoMinciencias
    },
    {
        path: '/minciencias/graficas/movilizacion',
        name: 'consultaMovilizacionMinciencias',
        component: consultaMovilizacionMinciencias
    },
    {
        path:'/minciencias/configuracion',
        name: 'configuracionMinciencias',
        component: cofiguracionMinCiencias
    },
    {
        path: '/departamentos',
        name: 'vistaDepartamentos',
        component: InicioDepartamento
    },
    {
        path: '/departamentos/convocatorias/ingreso',
        name: 'ingresoConvocatoriasDepartamento',
        component: convocatoriaIngresoDepartamento
    },
    {
        path: '/departamentos/convocatorias/consultas/periodo',
        name: 'periodoConvocatoriasDepartamento',
        component: exportarConvocatoriaDepartamento
    },
    {
        path: '/departamentos/convocatorias/consultas/periodos',
        name: 'periodosConvocatoriasDepartamento',
        component: exportarConvocatoriasPeriodosDepartamento
    },
    {
        path: '/departamentos/acompanamientos/ingreso',
        name: 'ingresoAcompanamientoDepartamento',
        component: acompanamientoIngresoDepartamento   
    },
    {
        path: '/departamentos/acompanamientos/consultas/periodo',
        name: 'periodoAcompanamientoDepartamento',
        component: exportarAcompanamientoDepartamento
    },
    {
        path: '/departamentos/acompanamientos/consultas/periodos',
        name: 'periodosAcompanamientoDepartamento',
        component: exportarAcompaniamientosPeriodosDepartamento
    },
    {
        path: '/departamentos/movilizaciones/ingreso',
        name: 'ingresoMovilizacionDepartamento',
        component: movilizacionIngresoDepartamento
    },
    {
        path: '/departamentos/movilizaciones/consultas/periodo',
        name: 'periodoMovilizacionDepartamento',
        component: exportarMovilizacionDepartamento
    },
    {
        path: '/departamentos/movilizaciones/consultas/periodos',
        name: 'periodosMovilizacionDepartamento',
        component: exportarMovilizacionesPeriodosDepartamento
    },
    {
        path: '/admin',
        name: 'inicioAdmin',
        component: inicioAdmin
    },
    {
        path:'/admin/crearUsuario',
        name: 'crearUsuario',
        component: crearUusario
    },
    {
        path: '/admin/eliminarUsuario',
        name: 'eliminarUsuario',
        component: eliminarUsuario
    
    },
    {
        path: '/reset-password',
        name: 'resetPassword',
        component: restablecerContrasenia
    },
    {
        path: '/admin/configuracion',
        name: 'configuracionAdmin',
        component: configuracionAdmin
    },
    {
        path: '/departamentos/configuracion',
        name: 'configuracionDepartamento',
        component: configuracionDepartamento
    },
    {
        path: '/departamentos/movilizaciones/visualizacion',
        name: 'visualizacionMovilizacionDepartamento',
        component: VisualizarMovilizacionDepartamento
    },
    {
        path: '/minciencias/movilizaciones/visualizacion',
        name: 'visualizarMovilizacionMinciencias',
        component: VisualizarMovilizacionMinciencias
    },
    {
        path: '/minciencias/acompanamiento/visualizacion',
        name: 'visualizarAcompaniamientoMinciencias',
        component: VisualizarAcompaniamientoMinciencias
    },
    {
        path: '/departamentos/acompanamientos/visualizacion',
        name: 'visualizacionAcompanamientoDepartamento',
        component: VisualizarAcompaniamientoDepartamento
    },
    {
        path: '/minciencias/convocatorias/visualizacion',
        name: 'visualizacionConvocatoriaMinciencias',
        component: VisualizarConvocatoriaMinciencias
    },
    {
        path: '/departamentos/convocatorias/visualizacion',
        name: 'visualizacionConvocatoriaDepartamento',
        component: VisualizarConvocatoriaDepartamento
    },
    {
        path: '/departamentos/convocatorias/eliminar',
        name: 'eliminarConvocatoriaDepartamento',
        component: EliminarConvocatoriaDepartamento
    },
    {
        path: '/departamentos/acompanamientos/eliminar',
        name: 'eliminarAcompanamientoDepartamento',
        component: EliminarAcompanamientoDepartamento
    },
    {
        path: '/departamentos/movilizaciones/eliminar',
        name: 'eliminarMovilizacionDepartamento',
        component: EliminarMovilizacionDepartamento
    
    },
    {
        path: '/minciencias/convocatorias/eliminar',
        name: 'eliminarConvocatoriaMinciencias',
        component: EliminarConvocatoriaMinciencias
    },
    {
        path: '/minciencias/acompanamiento/eliminar',
        name: 'eliminarAcompanamientoMinciencias',
        component: EliminarAcompanamientoMinciencias
    },
    {
        path: '/minciencias/movilizacion/eliminar',
        name: 'eliminarMovilizacionMinciencias',
        component: eliminarMovilizacionMinciencias
    },
    {
        path: '/departamentos/convocatorias/modificar',
        name: 'modificarConvocatoriaDepartamento',
        component: modificarConvocatoriaDepartamento
    },
    {
        path: '/departamentos/acompanamientos/modificar',
        name: 'modificarAcompanamientoDepartamento',
        component: ModificarAcompanamientoDepartamento
    },
    {
        path: '/departamentos/movilizaciones/modificar',
        name: 'modificarMovilizacionDepartamento',
        component: modificarMovilizacionDepartamento
    },
    {
        path: '/departamentos/graficas/movilizaciones',
        name: 'consultaMovilizacionDepartamento',
        component: consultaMovilizacionDepartamento
    },
    {
        path: '/departamentos/graficas/convocatorias',
        name: 'consultaConvocatoriaDepartamento',
        component: consultaConvocatoriaDepartamento
    },
    {
        path: '/departamentos/graficas/acompanamiento',
        name: 'consultaAcompanamientoDepartamento',
        component: consultaAcompanamientoDepartamento
    },
    {
        path: '/minciencias/convocatorias/modificar',
        name: 'modificarConvocatoriaMinciencias',
        component: modificarConvocatoriaMinciencias
    },
    {
        path: '/minciencias/acompanamiento/modificar',
        name: 'modificarAcompanamientoMinciencias',
        component: modificarAcompanamientoMinciencias
    },
    {
        path: '/minciencias/movilizacion/modificar',
        name: 'modificarMovilizacionMinciencias',
        component: modificarMovilizacionMinciencias
    },
    {
        path: '/minciencias/metas/visualizar',
        name: 'metasMinciencias',
        component: MetasMinciencias
    },
    {
        path: '/minciencias/metas/actualizar',
        name: 'setOrUpdateMetasMinciencias',
        component: setOrUpdateMetasMinciencias
    },
    {
        path: '/minciencias/convocatorias/cargaMasiva',
        name: 'cargaMasivaConvocatoria',
        component: cargaMasivaConvocatoria
    },
    {
        path:'/minciencias/acompanamiento/cargaMasiva',
        name: 'cargaMasivaAcompamiamiento',
        component: cargaMasivaAcompamiamiento
    },
    {
        path: '/minciencias/movilizacion/cargaMasiva',
        name: 'cargaMasivaMovilizacion',
        component: cargaMasivaMovilizacion
    }



   
];

const baseRoute = 'https://localhost:7192/api';
const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach(async (to, from, next) => {
    const authMinciencias = ['/minciencias','/minciencias/convocatorias/ingreso', '/minciencias/convocatorias/consultas/periodo', '/minciencias/convocatorias/consultas/periodos', '/minciencias/convocatorias/cargaMasiva',
        '/minciencias/acompanamiento/ingreso', '/minciencias/acompanamiento/consultas/periodo', '/minciencias/acompanamiento/consultas/periodos','/minciencias/acompanamiento/cargaMasiva' ,
        '/minciencias/movilizacion/ingreso', '/minciencias/movilizacion/consultas/periodo', '/minciencias/movilizacion/consultas/periodos', '/minciencias/configuracion',
        '/minciencias/movilizacion/visualizacion', '/minciencias/acompaniamiento/visualizacion', '/minciencias/convocatorias/visualizacion', '/minciencias/convocatorias/eliminar',
        '/minciencias/acompanamiento/eliminar', '/minciencias/movilizacion/eliminar', '/minciencias/convocatorias/modificar', '/minciencias/acompanamiento/modificar', '/minciencias/movilizacion/modificar',
        '/minciencias/graficas/convocatoria', '/minciencias/graficas/acompanamiento', '/minciencias/graficas/movilizacion', '/minciencias/movilizacion/cargaMasiva',
     '/minciencias/movilizacion/modificar', '/minciencias/metas'];
    const authDepartamento = ['/departamentos', '/departamentos/convocatorias/ingreso', '/departamentos/convocatorias/consultas/periodo', '/departamentos/convocatorias/consultas/periodos',
        '/departamentos/acompanamientos/ingreso', '/departamentos/acompanamientos/consultas/periodo', '/departamentos/acompanamientos/consultas/periodos',
        '/departamentos/movilizaciones/ingreso', '/departamentos/movilizaciones/consultas/periodo', '/departamentos/movilizaciones/consultas/periodos', '/departamentos/configuracion', '/departamentos/movilizaciones/visualizacion', '/departamentos/acompanamientos/visualizacion', '/departamentos/convocatorias/visualizacion', '/departamentos/convocatorias/eliminar',
        '/departamentos/acompanamientos/eliminar', '/departamentos/movilizaciones/eliminar', '/departamentos/convocatorias/modificar',
        '/departamentos/acompanamientos/modificar', '/departamentos/movilizaciones/modificar',
        '/departamentos/graficas/movilizaciones', '/departamentos/graficas/convocatorias', '/departamentos/graficas/acompanamiento'
    ];
    const authAdmin = ['/admin', '/admin/crearUsuario', '/admin/eliminarUsuario'];
    

    if (!['/'].includes(to.path)) {
        if(to.path === '/reset-password'){
            next()
        }else{
            const token = localStorage.getItem('token');   

        try {
            const id = jwtDecode(token).id;
            const response = await fetch(`${baseRoute}/tokens/${id}?token=${token}`);
            const json = await response.json();
            if (json.status === "success") {
                if (authMinciencias.includes(to.path) && json.rol !== 'Minciencias') {
                    next('/');
                } else if (authDepartamento.includes(to.path) && json.rol !== 'Departamento') {    
                    next('/');
                }
                else if(authAdmin.includes(to.path) && json.rol !== 'Admin'){
                    next('/');
                } else {
                    next();
                }
            } else {
                console.error('Failed to authenticate:', response.status);
                next('/');
            }
        } catch (error) {
            console.error('Failed to fetch:', error);
            next('/');
        }
    }
    } else {
        if (authMinciencias.includes(to.path) || authDepartamento.includes(to.path) || authAdmin.includes(to.path)) {
            next('/');
        } else {
            next(); 
        }
    }
});



export default router;
