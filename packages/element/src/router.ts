import Vue from 'vue';
import Router from 'vue-router';
import AquaGUIElement from './AquaGUIElement';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'aqua-gui-element',
      component: AquaGUIElement,
    },
  ],
});
