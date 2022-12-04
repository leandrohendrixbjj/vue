import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import { routes } from './routes.js';

Vue.use(VueResource);
Vue.use(VueRouter);

//mode: history => Permite que na chamada da pagina não use o #
//Sem history => http://localhost:8080/#/cadastro
//Com history => http://localhost:8080/cadastro
const router = new VueRouter({ routes: routes, mode: 'history' });

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
