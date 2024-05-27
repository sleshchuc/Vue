import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Localitzacions from '@/views/Localitzacions.vue';
import NPCs from '@/views/NPCs.vue';
import Armament from '@/views/Armament.vue';
import Vestimenta from '@/views/Vestimenta.vue';
import Bosses from '@/views/Bosses.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Localitzacions',
    name: 'Localitzacions',
    component: Localitzacions
  },
  {
    path: '/NPCs',
    name: 'NPCs',
    component: NPCs
  },
  {
    path: '/Armament',
    name: 'Armament',
    component: Armament
  },
  {
    path: '/Vestimenta',
    name: 'Vestimenta',
    component: Vestimenta
  },
  {
    path: '/Bosses',
    name: 'Bosses',
    component: Bosses
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
