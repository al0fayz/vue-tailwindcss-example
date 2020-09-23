import App from './App.vue';
import hero from './components/pages/Hero.vue';
import feature from './components/pages/Feature.vue';
import cta from './components/pages/Cta.vue';
import dashboard from './components/pages/Dashboard.vue';
import heading from './components/pages/Heading.vue';
import list from './components/pages/Lists.vue';
import select from './components/pages/Select.vue';
import pilih from './components/pages/Pilih.vue';
import login from './components/pages/Login.vue';
import navbar from './components/pages/Navbar.vue';
import pagination from './components/pages/Pagination.vue';
import modal from './components/pages/Modal.vue';
import slide from './components/pages/Slide.vue';
import avatar from './components/pages/Avatar.vue';
import dropdown from './components/pages/dropdown.vue';

export const myRoutes = [
    {
        path: '/',
        component: App,
    },
    {
        path: '/hero',
        component: hero,
    },
    {
        path: '/feature',
        component: feature
    },
    {
        path: '/cta',
        component: cta
    },
    {
        path: '/dashboard',
        component: dashboard
    },
    {
        path: '/heading',
        component: heading
    },
    {
        path: '/list',
        component: list
    },
    {
        path: '/select',
        component: select
    },
    {
        path: '/pilih',
        component: pilih
    },
    {
        path: '/login',
        component: login
    },
    {
        path: '/navbar',
        component: navbar
    },
    {
        path: '/pagination',
        component: pagination
    },
    {
        path: '/modal',
        component: modal
    },
    {
        path: '/slide',
        component: slide
    },
    {
        path: '/avatar',
        component: avatar
    },
    {
        path: '/dropdown',
        component: dropdown
    },
];