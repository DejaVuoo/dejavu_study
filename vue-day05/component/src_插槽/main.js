import Vue from 'vue'
import App from './App.vue'
import myMixin from './mixin'
//全局混入 
Vue.mixin(myMixin)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
