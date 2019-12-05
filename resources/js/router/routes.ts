import Vue from 'vue';
import Router from 'vue-router';
import Home from '../pages/Home.vue';

Vue.use(Router);

export const routeCatchall = {
  path: '*',
  redirect: '/home',
};

export const routeHome = {
  path: '/',
  name: 'home',
  component: Home,
};

export const routes = [routeCatchall, routeHome];
