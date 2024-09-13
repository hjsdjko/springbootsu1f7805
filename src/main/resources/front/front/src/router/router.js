import VueRouter from 'vue-router'

//引入组件
import Index from '../pages'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import Center from '../pages/center/center'
import Messages from '../pages/messages/list'
import Storeup from '../pages/storeup/list'
import News from '../pages/news/news-list'
import NewsDetail from '../pages/news/news-detail'
import payList from '../pages/pay'

import yonghuList from '../pages/yonghu/list'
import yonghuDetail from '../pages/yonghu/detail'
import yonghuAdd from '../pages/yonghu/add'
import shetuanfuzerenList from '../pages/shetuanfuzeren/list'
import shetuanfuzerenDetail from '../pages/shetuanfuzeren/detail'
import shetuanfuzerenAdd from '../pages/shetuanfuzeren/add'
import shetuanleixingList from '../pages/shetuanleixing/list'
import shetuanleixingDetail from '../pages/shetuanleixing/detail'
import shetuanleixingAdd from '../pages/shetuanleixing/add'
import shetuanxinxiList from '../pages/shetuanxinxi/list'
import shetuanxinxiDetail from '../pages/shetuanxinxi/detail'
import shetuanxinxiAdd from '../pages/shetuanxinxi/add'
import huodongleixingList from '../pages/huodongleixing/list'
import huodongleixingDetail from '../pages/huodongleixing/detail'
import huodongleixingAdd from '../pages/huodongleixing/add'
import shetuanhuodongList from '../pages/shetuanhuodong/list'
import shetuanhuodongDetail from '../pages/shetuanhuodong/detail'
import shetuanhuodongAdd from '../pages/shetuanhuodong/add'
import huodongbaomingList from '../pages/huodongbaoming/list'
import huodongbaomingDetail from '../pages/huodongbaoming/detail'
import huodongbaomingAdd from '../pages/huodongbaoming/add'
import shetuanchengyuanList from '../pages/shetuanchengyuan/list'
import shetuanchengyuanDetail from '../pages/shetuanchengyuan/detail'
import shetuanchengyuanAdd from '../pages/shetuanchengyuan/add'
import shenqingshetuanList from '../pages/shenqingshetuan/list'
import shenqingshetuanDetail from '../pages/shenqingshetuan/detail'
import shenqingshetuanAdd from '../pages/shenqingshetuan/add'
import huodongjihuaList from '../pages/huodongjihua/list'
import huodongjihuaDetail from '../pages/huodongjihua/detail'
import huodongjihuaAdd from '../pages/huodongjihua/add'
import huodongpingjiaList from '../pages/huodongpingjia/list'
import huodongpingjiaDetail from '../pages/huodongpingjia/detail'
import huodongpingjiaAdd from '../pages/huodongpingjia/add'
import huodongyusuanList from '../pages/huodongyusuan/list'
import huodongyusuanDetail from '../pages/huodongyusuan/detail'
import huodongyusuanAdd from '../pages/huodongyusuan/add'
import caiwuxinxiList from '../pages/caiwuxinxi/list'
import caiwuxinxiDetail from '../pages/caiwuxinxi/detail'
import caiwuxinxiAdd from '../pages/caiwuxinxi/add'
import syslogList from '../pages/syslog/list'
import syslogDetail from '../pages/syslog/detail'
import syslogAdd from '../pages/syslog/add'
import newstypeList from '../pages/newstype/list'
import newstypeDetail from '../pages/newstype/detail'
import newstypeAdd from '../pages/newstype/add'
import menuList from '../pages/menu/list'
import menuDetail from '../pages/menu/detail'
import menuAdd from '../pages/menu/add'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

//配置路由
export default new VueRouter({
	routes:[
		{
      path: '/',
      redirect: '/index/home'
    },
		{
			path: '/index',
			component: Index,
			children:[
				{
					path: 'home',
					component: Home
				},
				{
					path: 'center',
					component: Center,
				},
				{
					path: 'pay',
					component: payList,
				},
				{
					path: 'messages',
					component: Messages
				},
				{
					path: 'storeup',
					component: Storeup
				},
				{
					path: 'news',
					component: News
				},
				{
					path: 'newsDetail',
					component: NewsDetail
				},
				{
					path: 'yonghu',
					component: yonghuList
				},
				{
					path: 'yonghuDetail',
					component: yonghuDetail
				},
				{
					path: 'yonghuAdd',
					component: yonghuAdd
				},
				{
					path: 'shetuanfuzeren',
					component: shetuanfuzerenList
				},
				{
					path: 'shetuanfuzerenDetail',
					component: shetuanfuzerenDetail
				},
				{
					path: 'shetuanfuzerenAdd',
					component: shetuanfuzerenAdd
				},
				{
					path: 'shetuanleixing',
					component: shetuanleixingList
				},
				{
					path: 'shetuanleixingDetail',
					component: shetuanleixingDetail
				},
				{
					path: 'shetuanleixingAdd',
					component: shetuanleixingAdd
				},
				{
					path: 'shetuanxinxi',
					component: shetuanxinxiList
				},
				{
					path: 'shetuanxinxiDetail',
					component: shetuanxinxiDetail
				},
				{
					path: 'shetuanxinxiAdd',
					component: shetuanxinxiAdd
				},
				{
					path: 'huodongleixing',
					component: huodongleixingList
				},
				{
					path: 'huodongleixingDetail',
					component: huodongleixingDetail
				},
				{
					path: 'huodongleixingAdd',
					component: huodongleixingAdd
				},
				{
					path: 'shetuanhuodong',
					component: shetuanhuodongList
				},
				{
					path: 'shetuanhuodongDetail',
					component: shetuanhuodongDetail
				},
				{
					path: 'shetuanhuodongAdd',
					component: shetuanhuodongAdd
				},
				{
					path: 'huodongbaoming',
					component: huodongbaomingList
				},
				{
					path: 'huodongbaomingDetail',
					component: huodongbaomingDetail
				},
				{
					path: 'huodongbaomingAdd',
					component: huodongbaomingAdd
				},
				{
					path: 'shetuanchengyuan',
					component: shetuanchengyuanList
				},
				{
					path: 'shetuanchengyuanDetail',
					component: shetuanchengyuanDetail
				},
				{
					path: 'shetuanchengyuanAdd',
					component: shetuanchengyuanAdd
				},
				{
					path: 'shenqingshetuan',
					component: shenqingshetuanList
				},
				{
					path: 'shenqingshetuanDetail',
					component: shenqingshetuanDetail
				},
				{
					path: 'shenqingshetuanAdd',
					component: shenqingshetuanAdd
				},
				{
					path: 'huodongjihua',
					component: huodongjihuaList
				},
				{
					path: 'huodongjihuaDetail',
					component: huodongjihuaDetail
				},
				{
					path: 'huodongjihuaAdd',
					component: huodongjihuaAdd
				},
				{
					path: 'huodongpingjia',
					component: huodongpingjiaList
				},
				{
					path: 'huodongpingjiaDetail',
					component: huodongpingjiaDetail
				},
				{
					path: 'huodongpingjiaAdd',
					component: huodongpingjiaAdd
				},
				{
					path: 'huodongyusuan',
					component: huodongyusuanList
				},
				{
					path: 'huodongyusuanDetail',
					component: huodongyusuanDetail
				},
				{
					path: 'huodongyusuanAdd',
					component: huodongyusuanAdd
				},
				{
					path: 'caiwuxinxi',
					component: caiwuxinxiList
				},
				{
					path: 'caiwuxinxiDetail',
					component: caiwuxinxiDetail
				},
				{
					path: 'caiwuxinxiAdd',
					component: caiwuxinxiAdd
				},
				{
					path: 'syslog',
					component: syslogList
				},
				{
					path: 'syslogDetail',
					component: syslogDetail
				},
				{
					path: 'syslogAdd',
					component: syslogAdd
				},
				{
					path: 'newstype',
					component: newstypeList
				},
				{
					path: 'newstypeDetail',
					component: newstypeDetail
				},
				{
					path: 'newstypeAdd',
					component: newstypeAdd
				},
				{
					path: 'menu',
					component: menuList
				},
				{
					path: 'menuDetail',
					component: menuDetail
				},
				{
					path: 'menuAdd',
					component: menuAdd
				},
			]
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/register',
			component: Register
		},
	]
})
