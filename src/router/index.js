
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import AboutMe from '../components/AboutMe.vue';
import Project from '../components/Projects.vue';
import Skills from '../components/Skills.vue';



const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/about-me',
      name: 'AboutMe',
      component: AboutMe,
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Project,
    },
    {
      path: '/skills',
      name: 'Skills',
      component: Skills,
    },
    // You can add more routes here
  ],
});

export default router;
