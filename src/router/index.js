import { createRouter, createWebHistory } from 'vue-router';
import InicioSesion from '../components/inicioSesion/inicioSesion.vue';
import InicioMinciencias from '../components/vistas/minciencias/inicioMinciencias.vue';
import InicioDepartamento from '../components/vistas/departamento/inicioDepartamento.vue';
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
        path: '/departamentos',
        name: 'vistaDepartamentos',
        component: InicioDepartamento
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    const authMinciencias = ['/minciencias'];
    const authDepartamento = ['/departamentos'];
    const token = localStorage.getItem('token');

    if (token) {
        const decoded = jwtDecode(token);

        if (authMinciencias.includes(to.path) && decoded.rol !== 'Minciencias') {
            next('/');
        } else if (authDepartamento.includes(to.path) && decoded.rol !== 'Departamento') {
            next('/');
        } else {
            next();
        }
    } else {
        if (authMinciencias.includes(to.path) || authDepartamento.includes(to.path)) {
            next('/');
        } else {
            next(); 
        }
    }
});

export default router;
