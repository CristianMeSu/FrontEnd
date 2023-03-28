import Vue from 'vue'
import i18n from './lang'
import App from './App.vue'
import axios from 'axios' ;

import VueRouter from 'vue-router'
import { routes } from './routes'

import Vuex from 'vuex'

import Notifications from 'vue-notification'
// import LoadingOverlay from 'gasparesganga-jquery-loading-overlay'

// import './assets/js/jquery-3.6.0'
import '@/assets/bootstrap-4.6.0-dist/css/bootstrap.css'
import '@/assets/fontawesome-free-5.15.3-web/css/all.css'
import '@/assets/override.css'
import 'bootstrap'
// import JQuery from "jquery"
// window.$ = JQuery
// import './assets/DataTables/DataTables-1.10.24/js/jquery.dataTables'
// import DataTables from '@/assets/DataTables/datatables'

import '@/assets/AdminLTE/plugins/fontawesome-free/css/all.min.css'
import '@/assets/AdminLTE/dist/css/adminlte.min.css'
import '@/assets/AdminLTE/dist/js/adminlte.min'

// import '@/assets/AdminLTE/plugins/datatables/jquery.dataTables.min'

Vue.config.productionTip = false

Vue.use( VueRouter )
Vue.use( Vuex )
Vue.use( Notifications )
// Vue.use( DataTables )
// Vue.use( LoadingOverlay )


const router = new VueRouter({
  mode: 'history',
  routes,
})

// if ( !localStorage.getItem('lang' ) ) {
  localStorage.setItem( 'lang', 'en' )
  localStorage.setItem( 'selectedLang' , 'false' )
// }

new Vue({
  router
  // , store
  // , ResPushStore
  , i18n
  , axios
  // , DataTables
  , render: h => h( App )
}).$mount('#app' )
