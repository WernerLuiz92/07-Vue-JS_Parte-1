import Register from './components/pages/register/Register.vue';
import Home from './components/pages/home/Home.vue';

export const routes = [
    { path: '', component: Home },
    { path: '/cadastro', component: Register }
];