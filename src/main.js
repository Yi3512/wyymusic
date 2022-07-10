import Vue from 'vue';
import App from './App.vue';
//引入路由
import router from '@/router';
//引入vant组件
import {
  NavBar,
  Tabbar,
  TabbarItem,
  Grid,
  GridItem,
  Cell,
  CellGroup,
  Image as VanImage,
  Icon,
  Search,
  Tag,
  List,
} from 'vant';

//引入初始化
import '@/styles/reset.css';
import '@/mobile/flexible.js';
//关闭生产提示
Vue.config.productionTip = false;
//vant组件注册
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(NavBar);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(VanImage);
Vue.use(Icon);
Vue.use(Search);
Vue.use(Tag);

Vue.use(List);

// import { getRecommendListApi } from '@/apis';

// async function fn() {
//   try {
//     const res = await getRecommendListApi();
//     console.log(res);
//   } catch (e) {
//     console.log('寄');
//   }
// }

// fn();

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
