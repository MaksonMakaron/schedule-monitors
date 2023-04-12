import { createStore } from 'vuex';
import { schedule } from './scheduleModule';
import { settings } from './settingsModule';
import { systemInfo } from './systemInfoModule';

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    schedule,
    settings,
    systemInfo,
  },
});
