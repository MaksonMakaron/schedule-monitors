import { createRouter, createWebHistory } from 'vue-router';
import ScheduleOverviewPage from '@/pages/ScheduleOverviewPage.vue';
import SettingsPage from '@/pages/SettingsPage.vue';
import SystemInfoPage from '@/pages/SystemInfoPage.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: ScheduleOverviewPage,
  },
  {
    path: '/settings',
    name: 'settings',
    component: SettingsPage,
  },
  {
    path: '/sysinfo',
    name: 'sysinfo',
    component: SystemInfoPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
