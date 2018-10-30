import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/page/Home.vue';
import Technology from '@/page/tech/index.vue';
import Cognition from '@/page/cognition/index.vue';
import Humanity from '@/page/humanity/index.vue';
import Socail from '@/page/social/index.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      redirect: '/tech',
      children: [
        {
          path: '/tech',
          component: Technology
        },
        {
          path: '/cognition',
          component: Cognition
        },
        {
          path: '/humanity',
          component: Humanity
        },
        {
          path: '/social',
          component: Socail
        }
      ]
    }
  ]
});
