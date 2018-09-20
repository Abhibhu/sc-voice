import '@babel/polyfill'
import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
//import Vuetify from 'vuetify'
import './plugins/vuetify'
import App from './App.vue'

const DEFAULT_VOICES = [{
    name: 'Amy',
    value: 'recite',
    label: 'Amy for meditation and contemplation',
},{
    name: 'Raveena',
    value: 'review',
    label: 'Raveena for review and study',
}];

const scvOptions = {
    showId: false,
    iVoice: 0,
    voices: DEFAULT_VOICES,
};

Vue.config.productionTip = false

Vue.use(VueAxios, axios);
Vue.use(VueRouter);
var router = new VueRouter();
//Vue.use(Vuetify);

// global options

new Vue({
    render: h => h(App),
    router,
    data: scvOptions,
    scvOptions,
}).$mount('#app')
