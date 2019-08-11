import Vue from 'vue';
import Router from 'vue-router';
import AquaGUIVue from './AquaGUIVue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'aqua-gui-vue',
      component: AquaGUIVue,
    },
  ],
});
