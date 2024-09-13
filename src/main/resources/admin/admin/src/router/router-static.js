import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import news from '@/views/modules/news/list'
    import shenqingshetuan from '@/views/modules/shenqingshetuan/list'
    import huodongyusuan from '@/views/modules/huodongyusuan/list'
    import shetuanhuodong from '@/views/modules/shetuanhuodong/list'
    import shetuanxinxi from '@/views/modules/shetuanxinxi/list'
    import syslog from '@/views/modules/syslog/list'
    import caiwuxinxi from '@/views/modules/caiwuxinxi/list'
    import menu from '@/views/modules/menu/list'
    import shetuanleixing from '@/views/modules/shetuanleixing/list'
    import huodongjihua from '@/views/modules/huodongjihua/list'
    import shetuanchengyuan from '@/views/modules/shetuanchengyuan/list'
    import yonghu from '@/views/modules/yonghu/list'
    import huodongbaoming from '@/views/modules/huodongbaoming/list'
    import messages from '@/views/modules/messages/list'
    import huodongpingjia from '@/views/modules/huodongpingjia/list'
    import config from '@/views/modules/config/list'
    import shetuanfuzeren from '@/views/modules/shetuanfuzeren/list'
    import huodongleixing from '@/views/modules/huodongleixing/list'
    import newstype from '@/views/modules/newstype/list'


//2.配置路由   注意：名字
export const routes = [{
    path: '/',
    name: '系统首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '系统首页',
      component: Home,
      meta: {icon:'', title:'center', affix: true}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/news',
        name: '公告信息',
        component: news
      }
      ,{
	path: '/shenqingshetuan',
        name: '申请社团',
        component: shenqingshetuan
      }
      ,{
	path: '/huodongyusuan',
        name: '活动预算',
        component: huodongyusuan
      }
      ,{
	path: '/shetuanhuodong',
        name: '社团活动',
        component: shetuanhuodong
      }
      ,{
	path: '/shetuanxinxi',
        name: '社团信息',
        component: shetuanxinxi
      }
      ,{
	path: '/syslog',
        name: '系统日志',
        component: syslog
      }
      ,{
	path: '/caiwuxinxi',
        name: '财务信息',
        component: caiwuxinxi
      }
      ,{
	path: '/menu',
        name: '菜单列表',
        component: menu
      }
      ,{
	path: '/shetuanleixing',
        name: '社团类型',
        component: shetuanleixing
      }
      ,{
	path: '/huodongjihua',
        name: '活动计划',
        component: huodongjihua
      }
      ,{
	path: '/shetuanchengyuan',
        name: '社团成员',
        component: shetuanchengyuan
      }
      ,{
	path: '/yonghu',
        name: '用户',
        component: yonghu
      }
      ,{
	path: '/huodongbaoming',
        name: '活动报名',
        component: huodongbaoming
      }
      ,{
	path: '/messages',
        name: '留言反馈',
        component: messages
      }
      ,{
	path: '/huodongpingjia',
        name: '活动评价',
        component: huodongpingjia
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
      ,{
	path: '/shetuanfuzeren',
        name: '社团负责人',
        component: shetuanfuzeren
      }
      ,{
	path: '/huodongleixing',
        name: '活动类型',
        component: huodongleixing
      }
      ,{
	path: '/newstype',
        name: '公告信息分类',
        component: newstype
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
export default router;
