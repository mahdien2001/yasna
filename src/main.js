import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

// vuex
import { store } from './Store.js'


// router config
import VueRouter from 'vue-router'
import { Routes } from './Routes'
Vue.use(VueRouter)
const router = new VueRouter({
    routes: Routes,
    mode: 'history',
    linkExactActiveClass: "active",
})

// vue toasted config
import Toasted from 'vue-toasted';
Vue.use(Toasted, {
    position: "bottom-right",
    duration: 3000,
})

Vue.config.productionTip = false

new Vue({
    vuetify,
    router,
    store,
    render: h => h(App)
}).$mount('#app')