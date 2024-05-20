import { createRouter, createWebHistory } from 'vue-router';
import InicioSesion from '../components/inicioSesion/inicioSesion.vue';
import InicioMinciencias from '../components/vistas/minciencias/inicioMinciencias.vue';
import InicioDepartamento from '../components/vistas/departamento/inicioDepartamento.vue';
import convocatoriaIngresoMinciencias from '../components/vistas/minciencias/convocatoria/convocatoriaIngresoMinciencias.vue';
import exportarConvocatoriaMinciencias from '../components/vistas/minciencias/convocatoria/exportarConvocatoriaMinciencias.vue';
import exportarConvocatoriasPeriodosMinciencias from '../components/vistas/minciencias/convocatoria/exportarConvocatoriasPeriodosMinciencias.vue';
import acompanamientoIngresoMinciencias from '../components/vistas/minciencias/acompanamiento/acompanamientoIngresoMinciencias.vue';
import exportarAcompanamientoMinciencias from '../components/vistas/minciencias/acompanamiento/exportarAcompanamientoMinciencias.vue';
import exportarAcompanamientosPeriodosMinciencias from '../components/vistas/minciencias/acompanamiento/exportarAcompanamientosPeriodosMiciencias.vue';
import movilizacionIngresoMinciencias from '../components/vistas/minciencias/movilizacion/movilizacionIngresoMinciencias.vue';
import exportarMovilizacionMinciencias from '../components/vistas/minciencias/movilizacion/exportarMovilizacionMinciencias.vue';
import exportarMovilizacionesMinciencias from '../components/vistas/minciencias/movilizacion/exportarMovilizacionesMinciencias.vue';
import cofiguracionMinCiencias from '../components/vistas/minciencias/configuracionMinciencias.vue';
import convocatoriaIngresoDepartamento from '../components/vistas/departamento/convocatoria/convocatoriaIngresoDepartamento.vue';
import exportarConvocatoriaDepartamento from '../components/vistas/departamento/convocatoria/exportarConvocatoriaDepartamentos.vue';
import exportarConvocatoriasPeriodosDepartamento from '@/components/vistas/departamento/convocatoria/exportarConvocatoriasPeriodosDepartamento.vue';
import acompanamientoIngresoDepartamento from '@/components/vistas/departamento/acompanamiento/acompanamientoIngresoDepartamento.vue';
import exportarAcompanamientoDepartamento from '@/components/vistas/departamento/acompanamiento/exportarAcompanamientoDepartamento.vue';
import exportarAcompaniamientosPeriodosDepartamento from '../components/vistas/departamento/acompanamiento/exportarAcompaniamientosPeriodosDepartamento.vue';
import movilizacionIngresoDepartamento from '@/components/vistas/departamento/movilizacion/movilizacionIngresoDepartamento.vue';
import exportarMovilizacionDepartamento from '@/components/vistas/departamento/movilizacion/exportarMovilizacionDepartamento.vue';
import exportarMovilizacionesPeriodosDepartamento from '@/components/vistas/departamento/movilizacion/exportarMovilizacionesPeriodosDepartamento.vue';
import inicioAdmin from '@/components/vistas/admin/inicioAdmin.vue';
import crearUusario from '@/components/vistas/admin/crearUsuario.vue';
import eliminarUsuario from '@/components/vistas/admin/eliminarUsuario.vue';
import configuracionAdmin from '@/components/vistas/admin/configuracionAdmin.vue';
import configuracionDepartamento from '@/components/vistas/departamento/configuracionDepartamento.vue';
import restablecerContrasenia from '@/components/inicioSesion/olvideContrasenia.vue';
import visualizacionMinciencias from '@/components/vistas/minciencias/movilizacion/consultaMovilizacionMinciencias.vue';
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
        path: '/minciencias/movilizaciones/visualizacion',
        name: 'visualizacionMinciencias',
        component: visualizacionMinciencias
    }

   
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach(async (to, from, next) => {
    const authMinciencias = ['/minciencias','/minciencias/convocatorias/ingreso', '/minciencias/convocatorias/consultas/periodo', '/minciencias/convocatorias/consultas/periodos',
        '/minciencias/acompanamiento/ingreso', '/minciencias/acompanamiento/consultas/periodo', '/minciencias/acompanamiento/consultas/periodos',
        '/minciencias/movilizacion/ingreso', '/minciencias/movilizacion/consultas/periodo', '/minciencias/movilizacion/consultas/periodos', '/minciencias/configuracion'];
    const authDepartamento = ['/departamentos', '/departamentos/convocatorias/ingreso', '/departamentos/convocatorias/consultas/periodo', '/departamentos/convocatorias/consultas/periodos',
        '/departamentos/acompanamientos/ingreso', '/departamentos/acompanamientos/consultas/periodo', '/departamentos/acompanamientos/consultas/periodos',
        '/departamentos/movilizaciones/ingreso', '/departamentos/movilizaciones/consultas/periodo', '/departamentos/movilizaciones/consultas/periodos'
    ];
    const authAdmin = ['/admin', '/admin/crearUsuario', '/admin/eliminarUsuario'];
    

    if (!['/'].includes(to.path)) {
        const token = localStorage.getItem('token');
        

        try {
            const id = jwtDecode(token).id;
            const response = await fetch(`https://localhost:7192/api/tokens/${id}?token=${token}`);
            const json = await response.json();
            if (json.status === "success") {
                console.log(json);
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
    } else {
        if (authMinciencias.includes(to.path) || authDepartamento.includes(to.path) || authAdmin.includes(to.path)) {
            next('/');
        } else {
            next(); 
        }
    }
});



export default router;
