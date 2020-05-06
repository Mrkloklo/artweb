import { Vue } from '@boot';
import Index from './index';
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(Element, { size: 'small', zIndex: 3000 });

const vm = new Vue({
  render: h => h(Index)
}).$mount('#app');

Vue.use({
  vm
});
