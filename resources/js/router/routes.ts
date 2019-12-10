import Vue from 'vue';
import Router from 'vue-router';
import Home from '../pages/Home.vue';
import RouteConfig from '../types/vue-router';

Vue.use(Router);

export const routeCatchall: RouteConfig = {
	path: '*',
	redirect: '/home',
};

export const routeHome: RouteConfig = {
	path: '/',
	name: 'home',
	component: Home,
};

export const routeCafes: RouteConfig = {
	path: '/cafes',
	name: 'cafes',
	component: () => import(/* webpackChunkName: "Cafes" */ '@/pages/Cafes.vue'),
	children: [
		{
			path: 'new',
			name: 'newcafe',
			component: () => import(/* webpackChunkName: "CafesCreate" */ '@/components/CafesCreate.vue'),
		},
		{
			path: '/:id',
			name: 'cafe',
			component: () =>
				import(/* webpackChunkName: "CafesCreate" */ '@/components/CafesDetails.vue'),
		},
	],
};

export const routes = [routeCatchall, routeHome, routeCafes];
