import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({

    state: {
        progress: false,
    },

    mutations: {
        progress_status(state, status) {
            this.state.progress = status
        }

    },

})