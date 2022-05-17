/*
 * @Author: J_in
 * @Date: 2022-05-17 10:40:49
 * @LastEditors: J_in
 * @LastEditTime: 2022-05-17 10:45:53
 * @FilePath: /jubilant-eureka/src/main.js
 */
import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

Vue.use(ElementUI);

new Vue({
  render: h => h(App),
}).$mount('#app')
