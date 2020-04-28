import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.config.devtools = true

Vue.config.errorHandler = function(err, vm, info) {
  console.log('猜测', err)
}

Vue.config.warnHandler = function(warn, vm, infor) {
  console.log('猜测', warn)
}

Vue.config.ignoredElements = [
  'test'
]

Vue.config.keyCodes = {
  esc: 27 
}

new Vue({
  render: h => h(App),
}).$mount('#app')
