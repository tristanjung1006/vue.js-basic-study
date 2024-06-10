import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  // 뷰 내부적으로 사용하는 함수
  render: h => h(App),
}).$mount('#app')
