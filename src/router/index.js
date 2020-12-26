import Vue from 'vue'
import Router from 'vue-router'
// 默认导入login路由
import Login from '../components/Login.vue'
// 默认导入hoem路由
import Hoem from '../components/Hoem.vue'


Vue.use(Router)

  // routes 是路由规则数组
  const routes = [
    // 添加路由重定向 默认打开页面显示的第一个页面
    { path: '/', redirect: '/login' },
    // 每个路由规则都是一个配置对象，其中至少包含 path 和 component 两个属性：
    // path 表示当前路由规则匹配的 hash 地址
    // component 表示当前路由规则对应要展示的组件
    { path: '/login', component: Login },
    { path: '/hoem', component: Hoem }
  ]
// 创建路由实例对象
const router = new Router({
  routes
})
// 挂载路由全局前置守卫 防止用户没有登录 获取token值 进入其他页面
router.beforeEach((to,from,next) =>{
  //to将要访问的路径
  // form代表从哪个路径跳转而来
  // next() 是一个函数 表示放行
  // next('/login' ) 强制跳转
  if (to.path === '/login') return next();
  // 获取token值
  var tokenSrt = sessionStorage.getItem('token');
  // 判断 tokenSrt 如果为空 强行跳转到login页面
  if(!tokenSrt) next('/login')
  next()
})


// 向外导出路由
export default router
