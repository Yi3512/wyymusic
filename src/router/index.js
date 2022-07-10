//配置路由
import Vue from 'vue';
import VueRouter from 'vue-router';

//一级路由
import Layout from '@/views/Layout';
//二级路由
import Home from '@/views/Home';
import Search from '@/views/Search';

//注册
Vue.use(VueRouter);
//路由规则
const routes = [
  {
    path: '/',
    redirect: '/layout/home',
  },
  {
    path: '/layout',
    component: Layout,
    children: [
      {
        path: 'home',
        component: Home,
        meta: { title: '首页' },
      },
      {
        path: 'search',
        component: Search,
        meta: { title: '搜索' },
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});
export default router;
