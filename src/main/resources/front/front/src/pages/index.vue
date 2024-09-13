<template>
	<div class="main-containers">
		<div class="body-containers" :style='{"minHeight":"100vh","padding":"0","margin":"0","position":"relative","background":"#fff"}'>
		<div class="top-container" :style='{"boxShadow":"0 0px 0px rgba(64, 158, 255, .3)","padding":"40px 7% 0","borderColor":"#eee","alignItems":"center","color":"#666","textAlign":"right","display":"block","overflow":"hidden","top":"0","left":"0","background":"url(http://codegen.caihongy.cn/20230920/1f5fe27ece68413ab9926605647f1da2.png) no-repeat center bottom,#fff","borderWidth":"0px","width":"100%","fontSize":"14px","position":"relative","borderStyle":"solid","height":"120px","zIndex":"1002"}'>
			<!-- info -->
			<div :style='{"float":"left","display":"block"}'>
			  <span @click="goMenu('/index/home')" :style='{"padding":"0 0 0 12px","lineHeight":"44px","fontSize":"22px","color":"#1abc9e","float":"left"}'>基于JAVA的高校社团管理系统的设计与实现</span>
			</div>
			
			<div v-if="false" :style='{"margin":"0 10px","fontSize":"inherit","color":"inherit","display":"inline-block"}'></div>
			
			<img v-if="headportrait&&Token" :style='{"width":"32px","margin":"0 0px","borderRadius":"50%","height":"32px"}' :src="headportrait?baseUrl + headportrait:require('@/assets/avator.png')">
			<div v-if="Token" :style='{"padding":"0 12px","fontSize":"inherit","lineHeight":"32px","color":"inherit","display":"inline-block","height":"32px"}'>{{username}}</div>
			<div v-if="Token && notAdmin" :style='{"padding":"0 12px","fontSize":"inherit","lineHeight":"32px","color":"inherit","display":"none","height":"32px"}' @click="goMenu('/index/center')">个人中心</div>
			<el-button v-if="!Token" @click="toLogin()" :style='{"border":"0","padding":"0 12px","margin":"0 10px","color":"#f4f4f5","borderRadius":"2px","background":"#1abc9e","display":"inline-block","fontSize":"14px","lineHeight":"32px","height":"32px"}'>登录/注册</el-button>
			<el-button v-if="Token" @click="logout" :style='{"border":"1px solid #ddd","padding":"0 12px","margin":"0 10px","color":"#333","borderRadius":"2px","background":"#fff","display":"inline-block","fontSize":"14px","lineHeight":"32px","height":"32px"}'>退出</el-button>
		</div>


			<div class="menu-preview" :style='{"padding":"0","borderColor":"#efefef","margin":"0 auto","background":"linear-gradient(180deg, rgba(43,209,178,1) 35%, rgba(26,188,158,1) 100%),#1abc9e","borderWidth":"0 0 0px 0","clipPath":"polygon(2% 0, 100% 0%, 98% 100%, 0% 100%)","width":"99%","borderStyle":"solid","height":"auto"}'>
			<el-scrollbar wrap-class="scrollbar-wrapper-horizontal">
				<el-menu class="el-menu-horizontal-demo" :style='{"border":"0","padding":"0","listStyle":"none","margin":"0","alignItems":"flex-start","background":"none","display":"flex","position":"relative","justifyContent":"center"}' :default-active="activeMenu" :unique-opened="true" mode="horizontal" :router="true" @select="handleSelect">
					<div class="userinfo" :style='{"width":"84px","padding":"6px 10px 0","display":"none","height":"auto"}'>
					  <el-image v-if="headportrait&&Token" :style='{"width":"100%","objectFit":"cover","borderRadius":"20px","display":"block","height":"32px"}' :src="headportrait?baseUrl + headportrait:require('@/assets/avator.png')" fit="cover"></el-image>
					  <div :style='{"fontSize":"12px","lineHeight":"1.5","color":"#333","textAlign":"center"}'>{{username}}</div>
					</div>
					<el-menu-item class="home" index="/index/home" @click.native="goMenu('/index/home')">
						<span :style='{"padding":"0 10px","margin":"0","color":"inherit","display":"none","width":"14px","lineHeight":"60px","fontSize":"16px","height":"60px"}' class="icon iconfont icon-shouye-zhihui"></span>
						<span :style='{"padding":"0 10px","lineHeight":"60px","fontSize":"16px","color":"inherit","height":"60px"}'>首页</span>
					</el-menu-item>
					<el-menu-item class="item" v-for="(menu, index) in menuList" :index="menu.url" :key="index" @click.native="goMenu(menu.url)">
						<i :style='{"padding":"0 10px","margin":"0","color":"inherit","display":"none","width":"14px","lineHeight":"60px","fontSize":"14px","height":"60px"}' :class="iconArr[index]"></i>
						<span :style='{"padding":"0 10px","lineHeight":"60px","fontSize":"16px","color":"inherit","height":"60px"}'>{{menu.name}}</span>
					</el-menu-item>
					<el-menu-item class="user" index="/index/center" v-if="Token && notAdmin" @click.native="goMenu('/index/center')">
						<span :style='{"padding":"0 10px","margin":"0","color":"inherit","display":"none","width":"14px","lineHeight":"60px","fontSize":"14px","height":"60px"}' class="icon iconfont icon-shouye-zhihui"></span>
						<span :style='{"padding":"0 10px","lineHeight":"60px","fontSize":"16px","color":"inherit","height":"60px"}'>个人中心</span>
					</el-menu-item>
				</el-menu>
			</el-scrollbar>
			</div>


			<div class="banner-preview" :style='{"width":"100%","padding":"0 7%","margin":"10px 0 0","height":"auto"}'>
				<el-carousel :style='{"width":"100%","margin":"0 auto","height":"100%"}' trigger="click" indicator-position="inside" arrow="always" type="default" direction="horizontal" height="480px" :autoplay="true" :interval="3000" :loop="true">
					<el-carousel-item :style='{"borderRadius":"0px","width":"100%","height":"100%"}' v-for="item in carouselList" :key="item.id">
						<el-image v-if="preHttp(item.value)" @click="carouselClick(item.url)" :style='{"objectFit":"cover","width":"100%","height":"100%"}' :src="item.value" fit="cover"></el-image>
						<el-image v-else @click="carouselClick(item.url)" :style='{"objectFit":"cover","width":"100%","height":"100%"}' :src="baseUrl + item.value" fit="cover"></el-image>
					</el-carousel-item>
				</el-carousel>
			</div>


			<router-view id="scrollView"></router-view>
			
			<div class="bottom-preview" :style='{"width":"100%","height":"auto"}'>
				<div :style='{"minHeight":"150px","padding":"20px 7%","overflow":"hidden","color":"#fff","textAlign":"center","background":"url(http://codegen.caihongy.cn/20230920/4e04dd02f1e44f8cbc95e0f6e34f2a71.jpg) no-repeat center bottom,#333","width":"100%","fontSize":"14px","height":"auto"}'><div v-html="bottomContent"></div></div>
			</div>
		</div>
		
	</div>
</template>

<script>
import Vue from 'vue'
import Swiper from "swiper";
import axios from 'axios'

export default {
    data() {
		return {
            activeIndex: '0',
			roleMenus: [{"backMenu":[{"child":[{"allButtons":["新增","查看","修改","删除"],"appFrontIcon":"cuIcon-vipcard","buttons":["新增","查看","修改","删除"],"menu":"用户","menuJump":"列表","tableName":"yonghu"}],"menu":"用户管理"},{"child":[{"allButtons":["新增","查看","修改","删除"],"appFrontIcon":"cuIcon-similar","buttons":["新增","查看","修改","删除"],"menu":"社团负责人","menuJump":"列表","tableName":"shetuanfuzeren"}],"menu":"社团负责人管理"},{"child":[{"allButtons":["新增","查看","修改","删除"],"appFrontIcon":"cuIcon-discover","buttons":["新增","查看","修改","删除"],"menu":"社团类型","menuJump":"列表","tableName":"shetuanleixing"}],"menu":"社团类型管理"},{"child":[{"allButtons":["新增","查看","修改","删除","申请"],"appFrontIcon":"cuIcon-goods","buttons":["新增","查看","修改","删除"],"menu":"社团信息","menuJump":"列表","tableName":"shetuanxinxi"}],"menu":"社团信息管理"},{"child":[{"allButtons":["新增","查看","修改","删除"],"appFrontIcon":"cuIcon-taxi","buttons":["新增","查看","修改","删除"],"menu":"活动类型","menuJump":"列表","tableName":"huodongleixing"}],"menu":"活动类型管理"},{"child":[{"allButtons":["新增","查看","修改","删除","报名","活动计划","活动预算"],"appFrontIcon":"cuIcon-list","buttons":["新增","查看","修改","删除"],"menu":"社团活动","menuJump":"列表","tableName":"shetuanhuodong"}],"menu":"社团活动管理"},{"child":[{"allButtons":["新增","查看","修改","删除","审核","评价建议"],"appFrontIcon":"cuIcon-goodsnew","buttons":["查看","修改","删除","审核"],"menu":"活动报名","menuJump":"列表","tableName":"huodongbaoming"}],"menu":"活动报名管理"},{"child":[{"allButtons":["新增","查看","修改","删除"],"appFrontIcon":"cuIcon-wenzi","buttons":["查看","修改","删除"],"menu":"社团成员","menuJump":"列表","tableName":"shetuanchengyuan"}],"menu":"社团成员管理"},{"child":[{"allButtons":["新增","查看","修改","删除","审核"],"appFrontIcon":"cuIcon-medal","buttons":["查看","修改","删除","审核"],"menu":"申请社团","menuJump":"列表","tableName":"shenqingshetuan"}],"menu":"申请社团管理"},{"child":[{"allButtons":["新增","查看","修改","删除","审核"],"appFrontIcon":"cuIcon-addressbook","buttons":["查看","修改","删除","审核"],"menu":"活动计划","menuJump":"列表","tableName":"huodongjihua"}],"menu":"活动计划管理"},{"child":[{"allButtons":["新增","查看","修改","删除","各活动评分数"],"appFrontIcon":"cuIcon-attentionfavor","buttons":["查看","修改","删除","各活动评分数"],"menu":"活动评价","menuJump":"列表","tableName":"huodongpingjia"}],"menu":"活动评价管理"},{"child":[{"allButtons":["新增","查看","修改","删除","报表"],"appFrontIcon":"cuIcon-form","buttons":["查看","修改","删除","报表"],"menu":"活动预算","menuJump":"列表","tableName":"huodongyusuan"}],"menu":"活动预算管理"},{"child":[{"allButtons":["新增","查看","修改","删除","报表"],"appFrontIcon":"cuIcon-vip","buttons":["查看","修改","删除","报表"],"menu":"财务信息","menuJump":"列表","tableName":"caiwuxinxi"}],"menu":"财务信息管理"},{"child":[{"allButtons":["查看","修改","回复","删除"],"appFrontIcon":"cuIcon-message","buttons":["查看","修改","回复","删除"],"menu":"留言反馈","tableName":"messages"}],"menu":"留言反馈"},{"child":[{"allButtons":["查看","编辑名称","编辑父级","编辑权限","删除"],"appFrontIcon":"cuIcon-attentionfavor","buttons":["查看","编辑名称","编辑父级","编辑权限","删除"],"menu":"菜单列表","tableName":"menu"},{"allButtons":["查看","删除"],"appFrontIcon":"cuIcon-addressbook","buttons":["查看","删除"],"menu":"系统日志","tableName":"syslog"},{"allButtons":["新增","查看","修改","删除"],"appFrontIcon":"cuIcon-skin","buttons":["查看","修改","删除"],"menu":"轮播图管理","tableName":"config"},{"allButtons":["新增","查看","修改","删除"],"appFrontIcon":"cuIcon-news","buttons":["新增","查看","修改","删除"],"menu":"公告信息","tableName":"news"},{"allButtons":["新增","查看","修改","删除"],"appFrontIcon":"cuIcon-news","buttons":["新增","查看","修改","删除"],"menu":"公告信息分类","tableName":"newstype"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"allButtons":["新增","查看","修改","删除","申请"],"appFrontIcon":"cuIcon-form","buttons":["查看","申请"],"menu":"社团信息列表","menuJump":"列表","tableName":"shetuanxinxi"}],"menu":"社团信息模块"},{"child":[{"allButtons":["新增","查看","修改","删除","报名","活动计划","活动预算"],"appFrontIcon":"cuIcon-goods","buttons":["查看","报名"],"menu":"社团活动列表","menuJump":"列表","tableName":"shetuanhuodong"}],"menu":"社团活动模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"allButtons":["新增","查看","修改","删除"],"appFrontIcon":"cuIcon-vipcard","buttons":["好友申请"],"menu":"用户","menuJump":"列表","tableName":"yonghu"}],"menu":"用户管理"},{"child":[{"allButtons":["新增","查看","修改","删除","审核","评价建议"],"appFrontIcon":"cuIcon-goodsnew","buttons":["查看","评价建议","修改","删除"],"menu":"活动报名","menuJump":"列表","tableName":"huodongbaoming"}],"menu":"活动报名管理"},{"child":[{"allButtons":["新增","查看","修改","删除","审核"],"appFrontIcon":"cuIcon-medal","buttons":["查看","删除"],"menu":"申请社团","menuJump":"列表","tableName":"shenqingshetuan"}],"menu":"申请社团管理"},{"child":[{"allButtons":["新增","查看","修改","删除","各活动评分数"],"appFrontIcon":"cuIcon-attentionfavor","buttons":["查看","修改","删除"],"menu":"活动评价","menuJump":"列表","tableName":"huodongpingjia"}],"menu":"活动评价管理"}],"frontMenu":[{"child":[{"allButtons":["新增","查看","修改","删除","申请"],"appFrontIcon":"cuIcon-form","buttons":["查看","申请"],"menu":"社团信息列表","menuJump":"列表","tableName":"shetuanxinxi"}],"menu":"社团信息模块"},{"child":[{"allButtons":["新增","查看","修改","删除","报名","活动计划","活动预算"],"appFrontIcon":"cuIcon-goods","buttons":["查看","报名"],"menu":"社团活动列表","menuJump":"列表","tableName":"shetuanhuodong"}],"menu":"社团活动模块"}],"hasBackLogin":"否","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"用户","tableName":"yonghu"},{"backMenu":[{"child":[{"allButtons":["新增","查看","修改","删除","申请"],"appFrontIcon":"cuIcon-goods","buttons":["查看","修改"],"menu":"社团信息","menuJump":"列表","tableName":"shetuanxinxi"}],"menu":"社团信息管理"},{"child":[{"allButtons":["新增","查看","修改","删除","报名","活动计划","活动预算"],"appFrontIcon":"cuIcon-list","buttons":["新增","查看","修改","删除","活动计划","活动预算"],"menu":"社团活动","menuJump":"列表","tableName":"shetuanhuodong"}],"menu":"社团活动管理"},{"child":[{"allButtons":["新增","查看","修改","删除","审核","评价建议"],"appFrontIcon":"cuIcon-goodsnew","buttons":["查看","修改","删除","审核"],"menu":"活动报名","menuJump":"列表","tableName":"huodongbaoming"}],"menu":"活动报名管理"},{"child":[{"allButtons":["新增","查看","修改","删除"],"appFrontIcon":"cuIcon-wenzi","buttons":["新增","查看","修改","删除"],"menu":"社团成员","menuJump":"列表","tableName":"shetuanchengyuan"}],"menu":"社团成员管理"},{"child":[{"allButtons":["新增","查看","修改","删除","审核"],"appFrontIcon":"cuIcon-medal","buttons":["查看","审核"],"menu":"申请社团","menuJump":"列表","tableName":"shenqingshetuan"}],"menu":"申请社团管理"},{"child":[{"allButtons":["新增","查看","修改","删除","审核"],"appFrontIcon":"cuIcon-addressbook","buttons":["查看","修改","删除","新增"],"menu":"活动计划","menuJump":"列表","tableName":"huodongjihua"}],"menu":"活动计划管理"},{"child":[{"allButtons":["新增","查看","修改","删除","报表"],"appFrontIcon":"cuIcon-form","buttons":["查看","修改","删除"],"menu":"活动预算","menuJump":"列表","tableName":"huodongyusuan"}],"menu":"活动预算管理"},{"child":[{"allButtons":["新增","查看","修改","删除","报表"],"appFrontIcon":"cuIcon-vip","buttons":["新增","查看","修改","删除"],"menu":"财务信息","menuJump":"列表","tableName":"caiwuxinxi"}],"menu":"财务信息管理"}],"frontMenu":[{"child":[{"allButtons":["新增","查看","修改","删除","申请"],"appFrontIcon":"cuIcon-form","buttons":["查看","申请"],"menu":"社团信息列表","menuJump":"列表","tableName":"shetuanxinxi"}],"menu":"社团信息模块"},{"child":[{"allButtons":["新增","查看","修改","删除","报名","活动计划","活动预算"],"appFrontIcon":"cuIcon-goods","buttons":["查看","报名"],"menu":"社团活动列表","menuJump":"列表","tableName":"shetuanhuodong"}],"menu":"社团活动模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"社团负责人","tableName":"shetuanfuzeren"}],
			baseUrl: '',
			carouselList: [],
			menuList: [],
			form: {
				ask: '',
				userid: localStorage.getItem('frontUserid')
			},
			headportrait: localStorage.getItem('frontHeadportrait')?localStorage.getItem('frontHeadportrait'):'',
			Token: localStorage.getItem('frontToken'),
            username: localStorage.getItem('username'),
            notAdmin: localStorage.getItem('frontSessionTable')!='"users"',
			timer: '',
			iconArr: [
				'el-icon-star-off',
				'el-icon-goods',
				'el-icon-warning',
				'el-icon-question',
				'el-icon-info',
				'el-icon-help',
				'el-icon-picture-outline-round',
				'el-icon-camera-solid',
				'el-icon-video-camera-solid',
				'el-icon-video-camera',
				'el-icon-bell',
				'el-icon-s-cooperation',
				'el-icon-s-order',
				'el-icon-s-platform',
				'el-icon-s-operation',
				'el-icon-s-promotion',
				'el-icon-s-release',
				'el-icon-s-ticket',
				'el-icon-s-management',
				'el-icon-s-open',
				'el-icon-s-shop',
				'el-icon-s-marketing',
				'el-icon-s-flag',
				'el-icon-s-comment',
				'el-icon-s-finance',
				'el-icon-s-claim',
				'el-icon-s-opportunity',
				'el-icon-s-data',
				'el-icon-s-check'
			],
			bottomContent: '',
		}
    },
    created() {
		this.baseUrl = this.$config.baseUrl;
		this.menuList = this.$config.indexNav;
		this.getCarousel();
        if(localStorage.getItem('frontToken') && localStorage.getItem('frontToken')!=null) {
			this.getSession()
        }
    },
    mounted() {
        this.activeIndex = localStorage.getItem('keyPath') || '0';



    },
    computed: {
		activeMenu() {
			const route = this.$route
			const {
				meta,
				path
			} = route
			// if st path, the sidebar will highlight the path you sete
			if (meta.activeMenu) {
				return meta.activeMenu
			}
			return path
		},
    },
    watch: {
        $route(newValue) {
            let that = this
            let url = window.location.href
            let arr = url.split('#')
            for (let x in this.menuList) {
                if (newValue.path == this.menuList[x].url) {
                    this.activeIndex = x
                }
            }
            this.Token = localStorage.getItem('frontToken')
            if(arr[1]!='/index/home'){
            	var element = document.getElementById('scrollView');
            	var distance = element.offsetTop;
            	window.scrollTo( 0, distance )
            }else{
            	window.scrollTo( 0, 0 )
            }
        },
		headportrait(){
			this.$forceUpdate()
		},
    },
    methods: {
		preHttp(str) {
			return str && str.substr(0,4)=='http';
		},

		async getSession() {
			await this.$http.get(`${localStorage.getItem('UserTableName')}/session`, {emulateJSON: true}).then(async res => {
				if (res.data.code == 0) {
					localStorage.setItem('sessionForm',JSON.stringify(res.data.data))
					localStorage.setItem('frontUserid', res.data.data.id);
					if(res.data.data.vip) {
						localStorage.setItem('vip', res.data.data.vip);
					}
					if(res.data.data.touxiang) {
						this.headportrait = res.data.data.touxiang
						localStorage.setItem('frontHeadportrait', res.data.data.touxiang);
					} else if(res.data.data.headportrait) {
						this.headportrait = res.data.data.headportrait
						localStorage.setItem('frontHeadportrait', res.data.data.headportrait);
					}
				}
			});
		},
        handleSelect(keyPath) {
            if (keyPath) {
                localStorage.setItem('keyPath', keyPath)
            }
        },
		toLogin() {
		  this.$router.push('/login');
		},
        logout() {
            localStorage.clear();
            Vue.http.headers.common['Token'] = "";
            this.$router.push('/index/home');
            this.activeIndex = '0'
            localStorage.setItem('keyPath', this.activeIndex)
            this.Token = ''
            this.$forceUpdate()
            this.$message({
                message: '登出成功',
                type: 'success',
                duration: 1000,
            });
        },
		getCarousel() {
			this.$http.get('config/list', {params: { page: 1, limit: 3 }}).then(res => {
				if (res.data.code == 0) {
					this.carouselList = res.data.data.list;
				}
			});
		},
		// 轮播图跳转
		carouselClick(url) {
			if (url) {
				if (url.indexOf('https') != -1) {
					window.open(url)
				} else {
					this.$router.push(url)
				}
			}
		},
		goBackend() {
			localStorage.setItem('Token', localStorage.getItem('frontToken'));
			localStorage.setItem('role', localStorage.getItem('frontRole'));
			localStorage.setItem('sessionTable', localStorage.getItem('frontSessionTable'));
			localStorage.setItem('headportrait', localStorage.getItem('frontHeadportrait'));
			localStorage.setItem('userid', localStorage.getItem('frontUserid'));
			window.location.href = `${this.$config.baseUrl}admin/dist/index.html`
			
		},
		goMenu(path) {
            this.$router.push(path);
		},
    }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.menu-preview {
	  .el-scrollbar {
	    height: 100%;
	  
	    & /deep/ .scrollbar-wrapper-vertical {
	      overflow-x: hidden;
	    }
	  
	    & /deep/ .scrollbar-wrapper-horizontal {
	      overflow-y: hidden;
	  
	      .el-scrollbar__view {
	        white-space: nowrap;
	      }
	    }
	  }
	}
	
	
	.menu-preview .el-menu-horizontal-demo .el-menu-item.home {
				cursor: pointer;
				border: 0;
				padding: 0 10px;
				margin: 0;
				color: #fff;
				white-space: nowrap;
				display: flex;
				font-size: 16px;
				line-height: 60px;
				background: none;
				justify-content: center;
				align-items: center;
				position: relative;
				list-style: none;
				height: 60px;
			}
	
	.menu-preview .el-menu-horizontal-demo .el-menu-item.home:hover {
				color: #fff;
				background: #27ac93;
				border-color: #F5BB00;
				border-width: 0px;
				border-style: solid;
			}
	
	.menu-preview .el-menu-horizontal-demo .el-menu-item.home.is-active {
				color: #fff;
				background: #27ac93;
				border-color: #F5BB00;
				border-width: 0px;
				border-style: solid;
			}
	
	.menu-preview .el-menu-horizontal-demo .el-menu-item.user {
				cursor: pointer;
				border: 0;
				padding: 0 10px;
				color: #fff;
				white-space: nowrap;
				display: flex;
				font-size: 16px;
				line-height: 60px;
				background: none;
				align-items: center;
				position: relative;
				list-style: none;
				height: 60px;
				order: 3;
			}
	
	.menu-preview .el-menu-horizontal-demo .el-menu-item.user:hover {
				color: #fff;
				background: #27ac93;
				border-color: #F5BB00;
				border-width: 0px;
				border-style: solid;
			}
	
	.menu-preview .el-menu-horizontal-demo .el-menu-item.user.is-active {
				color: #fff;
				background: #27ac93;
				border-color: #F5BB00;
				border-width: 0px;
				border-style: solid;
			}
	
	.menu-preview .el-menu-horizontal-demo .el-menu-item.service {
				cursor: pointer;
				border: 0;
				padding: 0 10px;
				color: #fff;
				white-space: nowrap;
				display: none;
				font-size: 16px;
				line-height: 60px;
				background: none;
				align-items: center;
				position: relative;
				list-style: none;
				height: 60px;
				order: 4;
			}
	
	.menu-preview .el-menu-horizontal-demo .el-menu-item.service:hover {
				color: #fff;
				background: #27ac93;
			}
	
	.menu-preview .el-menu-horizontal-demo .el-menu-item.service.is-active {
				color: #fff;
				background: #27ac93;
			}
	
	.menu-preview .el-menu-horizontal-demo .el-menu-item.shop {
				cursor: pointer;
				border: 0;
				padding: 0 20px;
				color: #fff;
				white-space: nowrap;
				display: none;
				font-size: 16px;
				line-height: 60px;
				background: none;
				align-items: center;
				position: relative;
				list-style: none;
				height: 60px;
				order: 5;
			}
	
	.menu-preview .el-menu-horizontal-demo .el-menu-item.shop:hover {
				color: #fff;
				background: #27ac93;
			}
	
	.menu-preview .el-menu-horizontal-demo .el-menu-item.shop.is-active {
				color: #fff;
				background: #27ac93;
			}
	
	.menu-preview .el-menu-horizontal-demo .el-menu-item.back {
				cursor: pointer;
				border: 0;
				padding: 0 10px;
				color: #fff;
				white-space: nowrap;
				display: flex;
				font-size: 16px;
				line-height: 60px;
				background: none;
				align-items: center;
				position: relative;
				list-style: none;
				height: 60px;
				order: 6;
			}
	
	.menu-preview .el-menu-horizontal-demo .el-menu-item.back:hover {
				color: #fff;
				background: #27ac93;
			}
	
	.menu-preview .el-menu-horizontal-demo .el-menu-item.back.is-active {
				color: #fff;
				background: #27ac93;
			}
	
	.menu-preview .el-menu-horizontal-demo .el-menu-item.item {
				cursor: pointer;
				border: 0;
				padding: 0 10px;
				margin: 0;
				color: #fff;
				white-space: nowrap;
				display: flex;
				font-size: 16px;
				line-height: 60px;
				background: none;
				justify-content: center;
				align-items: center;
				position: relative;
				list-style: none;
				height: 60px;
			}
	
	.menu-preview .el-menu-horizontal-demo .el-menu-item.item:hover {
				color: #fff;
				background: #27ac93;
				border-color: #F5BB00;
				border-width: 0px;
				border-style: solid;
			}
	
	.menu-preview .el-menu-horizontal-demo .el-menu-item.item.is-active {
				color: #fff;
				background: #27ac93;
				border-color: #F5BB00;
				border-width: 0px;
				border-style: solid;
			}
	
	.banner-preview {
	  .el-carousel /deep/ .el-carousel__indicator button {
	    width: 0;
	    height: 0;
	    display: none;
	  }
	}
	
	.banner-preview .el-carousel /deep/ .el-carousel__container .el-carousel__arrow--left {
		width: 36px;
		font-size: 12px;
		height: 36px;
	}
	
	.banner-preview .el-carousel /deep/ .el-carousel__container .el-carousel__arrow--left:hover {
		background: #1abc9e;
	}
	
	.banner-preview .el-carousel /deep/ .el-carousel__container .el-carousel__arrow--right {
		width: 36px;
		font-size: 12px;
		height: 36px;
	}
	
	.banner-preview .el-carousel /deep/ .el-carousel__container .el-carousel__arrow--right:hover {
		background: #1abc9e;
	}

	.banner-preview .el-carousel /deep/ .el-carousel__indicators {
		padding: 0;
		margin: 0 0 12px;
		z-index: 2;
		position: absolute;
		list-style: none;
	}
	
	.banner-preview .el-carousel /deep/ .el-carousel__indicators li {
		border-radius: 100%;
		padding: 0;
		margin: 0 4px;
		background: #fff;
		display: inline-block;
		width: 16px;
		opacity: 0.4;
		transition: 0.3s;
		height: 16px;
	}
	
	.banner-preview .el-carousel /deep/ .el-carousel__indicators li:hover {
		padding: 0;
		margin: 0 4px;
		background: #fff;
		display: inline-block;
		width: 16px;
		opacity: 0.7;
		height: 16px;
	}
	
	.banner-preview .el-carousel /deep/ .el-carousel__indicators li.is-active {
		border-radius: 100%;
		padding: 0;
		margin: 0 4px;
		background: #fff;
		display: inline-block;
		width: 16px;
		opacity: 1;
		height: 16px;
	}

    .chat-content {
        padding-bottom: 20px;
        width: 100%;
        margin-bottom: 10px;
        max-height: 300px;
        height: 300px;
        overflow-y: scroll;
        border: 1px solid #eeeeee;
        background: #fff;

        .left-content {
            float: left;
            margin-bottom: 10px;
            padding: 10px;
            max-width: 80%;
        }

        .right-content {
            float: right;
            margin-bottom: 10px;
            padding: 10px;
            max-width: 80%;
        }
    }

    .clear-float {
        clear: both;
    }


	
	// -------- search --------
	.main-containers .search .select /deep/ .el-input__inner {
				border: 0;
				border-radius: 4px;
				padding: 0 30px 0 10px;
				box-shadow: 0 0 6px rgba(64, 158, 255, .3);
				outline: none;
				color: rgba(64, 158, 255, 1);
				width: 180px;
				font-size: 14px;
				height: 44px;
			}
	
	.main-containers .search .input /deep/ .el-input__inner {
				border: 0;
				border-radius: 4px;
				padding: 0 10px;
				box-shadow: 0 0 6px rgba(64, 158, 255, .3);
				outline: none;
				color: rgba(64, 158, 255, 1);
				width: 180px;
				font-size: 14px;
				height: 44px;
			}
	// -------- search --------
	
	.main-containers .btn-service {
				border: 0;
				padding: 0 8px;
				margin: 0 10px;
				color: #333;
				background: none;
				width: auto;
				font-size: 14px;
				line-height: 32px;
				height: 32px;
			}
	
	.main-containers .btn-service:hover {
				color: #333;
				background: none;
			}
	
	.main-containers .btn-shop {
				border: 0;
				padding: 0 8px;
				margin: 0 10px;
				color: #333;
				background: none;
				width: auto;
				font-size: 14px;
				line-height: 32px;
				height: 32px;
			}
	
	.main-containers .btn-shop:hover {
				color: #333;
				background: none;
			}
</style>
