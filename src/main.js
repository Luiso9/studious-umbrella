import Vue from 'vue'
import App from './App.vue'
import NavBar from './components/NavBar.vue'

Vue.config.productionTip = false

Vue.component('NavBar', NavBar);

new Vue({
    
  render: h => h(App),
}).$mount('#app')
