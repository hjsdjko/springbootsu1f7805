<template>
<div class="home-preview" :style='{"margin":"0px auto","flexWrap":"wrap","flexDirection":"column","background":"none","display":"flex","width":"100%","justifyContent":"center"}'>




		
	<!-- 新闻资讯 -->
	<div id="animate_newsnews" class="news animate__animated" :style='{"padding":"0","margin":"0 0 10px","background":"url(),#fff","order":"5"}'>
		<div v-if="false" class="idea newsIdea" :style='{"padding":"20px","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
			<div class="box1" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
			<div class="box2" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
			<div class="box3" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
			<div class="box4" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
			<div class="box5" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
			<div class="box6" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
			<div class="box7" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
			<div class="box8" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
			<div class="box9" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
			<div class="box10" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		</div>
		
		<div class="title" :style='{"width":"100%","margin":"40px auto 10px","lineHeight":"50px","textAlign":"center","background":"none"}'>
			<span :style='{"color":"#333","fontSize":"32px","lineHeight":"40px"}'>公告信息</span>
		</div>
		
			
			
			
			
			
			
			
			
			
			
		

		<div v-if="newsList.length" class="list list12 index-pv1" :style='{"padding":"0px 7%","color":"#fff","background":"none","display":"flex","width":"100%","fontSize":"14px","justifyContent":"space-between","height":"auto"}'>
		  <div class="left" :style='{"width":"49%","padding":"20px","position":"relative","background":"#fff","height":"auto"}'>
		    <div class="top" :style='{"width":"100%","justifyContent":"space-between","display":"flex","height":"auto"}'>
			  <template v-for="(item,index) in newsList">
		      <div v-if="index < 2" class="list-item animation-box" :style='{"cursor":"pointer","width":"49%","position":"relative","height":"340px"}' @click="toDetail('newsDetail', item)">
		        <img :style='{"width":"100%","objectFit":"cover","display":"block","height":"100%"}' :src="baseUrl + item.picture">
		        <div :style='{"width":"100%","padding":"0 0 6px","position":"absolute","left":"0","bottom":"0","background":"rgba(0,0,0,.3)"}'>
		          <div :style='{"padding":"0 10px","overflow":"hidden","whiteSpace":"nowrap","color":"#fff","width":"100%","lineHeight":"44px","fontSize":"16px","textOverflow":"ellipsis"}' class="title">{{item.title}}</div>
		          <div :style='{"padding":"0 10px"}'>
		            <span class="icon iconfont icon-shijian21" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"inherit","color":"inherit"}'></span>
		            <span :style='{"color":"inherit","lineHeight":"1.5","fontSize":"inherit"}'>{{item.addtime}}</span>
		          </div>
		          <div :style='{"padding":"0 10px","display":"inline-block"}'>
		            <span class="icon iconfont icon-geren16" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"inherit","color":"inherit"}'></span>
		            <span :style='{"color":"inherit","lineHeight":"1.5","fontSize":"inherit"}'>{{item.name}}</span>
		          </div>
		          <div :style='{"padding":"0 10px","display":"inline-block"}'>
		            <span class="icon iconfont icon-zan10" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"inherit","color":"inherit"}'></span>
		            <span :style='{"color":"inherit","lineHeight":"1.5","fontSize":"inherit"}'>{{item.thumbsupnum}}</span>
		          </div>
		          <div :style='{"padding":"0 10px","display":"inline-block"}'>
		            <span class="icon iconfont icon-shoucang10" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"inherit","color":"inherit"}'></span>
		            <span :style='{"color":"inherit","lineHeight":"1.5","fontSize":"inherit"}'>{{item.storeupnum}}</span>
		          </div>
		          <div :style='{"padding":"0 10px","display":"inline-block"}'>
		            <span class="icon iconfont icon-chakan9" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"inherit","color":"inherit"}'></span>
		            <span :style='{"color":"inherit","lineHeight":"1.5","fontSize":"inherit"}'>{{item.clicknum}}</span>
		          </div>
		        </div>
		      </div>
			  </template>
		    </div>
		    <div v-if="newsList.length > 2" class="list" :style='{"width":"100%","padding":"5px 10px","background":"none","height":"auto"}'>
		      <template v-for="(item,index) in newsList">
			  <div class="item" v-if="index > 1 && index < 6" @click="toDetail('newsDetail', item)">
		        <div :style='{"margin":"-2px 0 0","top":"50%","borderRadius":"100%","left":"0","background":"red","width":"4px","position":"absolute","height":"4px"}'></div>
		        <div :style='{"overflow":"hidden","whiteSpace":"nowrap","color":"#333","width":"100%","lineHeight":"40px","fontSize":"14px","textOverflow":"ellipsis"}'>{{item.title}}</div>
		      </div>
			  </template>
		    </div>
		  </div>
		  <div v-if="newsList.length > 6" class="right" :style='{"alignContent":"start","padding":"20px 20px 0","flexWrap":"wrap","background":"#fff","display":"flex","width":"49%","justifyContent":"space-between","height":"auto"}'>
			<template v-for="(item,index) in newsList">
		    <div v-if="index > 5" class="list-item animation-box" :style='{"cursor":"pointer","width":"49%","margin":"0 0 20px","position":"relative","height":"auto"}' @click="toDetail('newsDetail', item)">
		      <img :style='{"width":"100%","objectFit":"cover","display":"block","height":"240px"}' :src="baseUrl + item.picture">
		      <div :style='{"width":"100%","padding":"0 0 6px","position":"absolute","left":"0","bottom":"0","background":"rgba(0,0,0,.3)"}'>
		        <div :style='{"padding":"0 10px","overflow":"hidden","whiteSpace":"nowrap","color":"#fff","width":"100%","lineHeight":"44px","fontSize":"16px","textOverflow":"ellipsis"}' class="title">{{item.title}}</div>
		        <div :style='{"padding":"0 10px"}'>
		          <span class="icon iconfont icon-shijian21" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"inherit","color":"inherit"}'></span>
		          <span :style='{"color":"inherit","lineHeight":"1.5","fontSize":"inherit"}'>{{item.addtime}}</span>
		        </div>
		        <div :style='{"padding":"0 10px","display":"inline-block"}'>
		          <span class="icon iconfont icon-geren16" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"inherit","color":"inherit"}'></span>
		          <span :style='{"color":"inherit","lineHeight":"1.5","fontSize":"inherit"}'>{{item.name}}</span>
		        </div>
		        <div :style='{"padding":"0 10px","display":"inline-block"}'>
		          <span class="icon iconfont icon-zan10" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"inherit","color":"inherit"}'></span>
		          <span :style='{"color":"inherit","lineHeight":"1.5","fontSize":"inherit"}'>{{item.thumbsupnum}}</span>
		        </div>
		        <div :style='{"padding":"0 10px","display":"inline-block"}'>
		          <span class="icon iconfont icon-shoucang10" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"inherit","color":"inherit"}'></span>
		          <span :style='{"color":"inherit","lineHeight":"1.5","fontSize":"inherit"}'>{{item.storeupnum}}</span>
		        </div>
		        <div :style='{"padding":"0 10px","display":"inline-block"}'>
		          <span class="icon iconfont icon-chakan9" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"inherit","color":"inherit"}'></span>
		          <span :style='{"color":"inherit","lineHeight":"1.5","fontSize":"inherit"}'>{{item.clicknum}}</span>
		        </div>
		      </div>
		    </div>
			</template>
		  </div>
		</div>










		<div @click="moreBtn('news')" :style='{"border":"1px solid #ddd","cursor":"pointer","margin":"40px auto","textAlign":"center","background":"#fff","display":"block","width":"120px","lineHeight":"36px"}'>
			<span :style='{"color":"#333","fontSize":"14px"}'>查看更多</span>
			<i :style='{"color":"#333","fontSize":"12px"}' class="icon iconfont icon-gengduo1"></i>
		</div>
		
		</div>
	<!-- 新闻资讯 -->



<!-- 特价商品 -->
<div id="animate_listshetuanxinxi" class="lists animate__animated" :style='{"margin":"30px 0 20px","background":"#fff","order":"1"}'>
	<div v-if="false" class="idea" :style='{"padding":"20px","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
		<div class="box1" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box2" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box3" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box4" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box5" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box6" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box7" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box8" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box9" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box10" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
	</div>
	
	<div class="title" :style='{"width":"100%","margin":"10px auto","lineHeight":"40px","textAlign":"center","background":"none"}'>
	  <span :style='{"fontSize":"32px","lineHeight":"40px","color":"#333","font":"\"宋体\""}'>社团信息展示</span>
	</div>
	
	
	
	
	
	
	
	
	
	



	<div v-if="shetuanxinxiList.length" class="list list12 index-pv1 list12shetuanxinxi" :style='{"width":"100%","padding":"10px 7%","background":"#fff","height":"auto"}'>
	  <div class="tab" :style='{"width":"100%","margin":"0 0 20px","alignItems":"center","justifyContent":"center","display":"flex","height":"auto"}'>
		<template v-for="item,index in listList12shetuanxinxi">
	    <div v-if="index < 6" @click="listIndexClick12(index + 1, 'shetuanxinxi')" class="item"  :class="index + 1 == listIndex12shetuanxinxi ? 'active' : ''">
			<img v-if="item.image" :style='{"width":"34px","margin":"5px 5px 0 0","objectFit":"cover","display":"block","height":"34px"}' :src="baseUrl + (item.image?item.image.split(',')[0]:'')">
			<div :style='{"color":"inherit","fontSize":"14px"}'>{{item[listColumn12shetuanxinxi]}}</div>
		</div>
		</template>
		<div class="more" @click="moreBtn('shetuanxinxi')">
		  <div :style='{"color":"#999","fontSize":"14px","fontWeight":"500"}'>更多</div>
		  <span class="icon iconfont icon-jiantou25" :style='{"color":"#999","margin":"0 0 0 2px","fontSize":"14px"}'></span>
		</div>
	  </div>
	  <div class="list" :style='{"margin":"40px 0 0","overflow":"hidden","flexWrap":"wrap","flex":"1","background":"#fff","display":"flex","justifyContent":"space-between","height":"auto"}'>
	    <div :style='{"cursor":"pointer","width":"23%","margin":"0 0 30px","position":"relative","height":"auto"}' class="item list-item animation-box" v-for="item,index in shetuanxinxiList" :key="index" @click="toDetail('shetuanxinxiDetail', item)">
			<img :name="item.id" :style='{"width":"100%","objectFit":"cover","display":"block","clipPath":"polygon(100% 88%, 88% 100%, 0% 100%, 0% 0%, 100% 0%)","height":"200px"}' v-if="preHttp(item.tupian)" :src="item.tupian.split(',')[0]" alt="" />
			<img :name="item.id" :style='{"width":"100%","objectFit":"cover","display":"block","clipPath":"polygon(100% 88%, 88% 100%, 0% 100%, 0% 0%, 100% 0%)","height":"200px"}' v-else :src="baseUrl + (item.tupian?item.tupian.split(',')[0]:'')" alt="" />
			<div class="line1" :style='{"padding":"0 10px","overflow":"hidden","whiteSpace":"nowrap","color":"#333","width":"100%","lineHeight":"32px","fontSize":"16px","textOverflow":"ellipsis"}'>{{item.shetuanmingcheng}}</div>
			<div class="line1" :style='{"padding":"0 10px","overflow":"hidden","whiteSpace":"nowrap","color":"#333","width":"100%","lineHeight":"32px","fontSize":"16px","textOverflow":"ellipsis"}'>{{item.shetuanleixing}}</div>
	    </div>
	  </div>
	</div>



	
	
	<div @click="moreBtn('shetuanxinxi')" :style='{"border":"1px solid #ddd","cursor":"pointer","margin":"30px auto 10px","textAlign":"center","background":"#fff","display":"block","width":"120px","lineHeight":"36px"}'>
		<span :style='{"color":"#333","fontSize":"14px"}'>查看更多</span>
		<i :style='{"color":"#333","fontSize":"14px"}' class="icon iconfont icon-jinru"></i>
	</div>
	

</div>
<!-- 特价商品 -->

<!-- 特价商品 -->
<div id="animate_listshetuanhuodong" class="lists animate__animated" :style='{"margin":"30px 0 20px","background":"#fff","order":"1"}'>
	<div v-if="false" class="idea" :style='{"padding":"20px","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
		<div class="box1" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box2" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box3" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box4" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box5" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box6" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box7" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box8" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box9" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box10" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
	</div>
	
	<div class="title" :style='{"width":"100%","margin":"10px auto","lineHeight":"40px","textAlign":"center","background":"none"}'>
	  <span :style='{"fontSize":"32px","lineHeight":"40px","color":"#333","font":"\"宋体\""}'>社团活动展示</span>
	</div>
	
	
	
	
	
	
	
	
	
	



	<div v-if="shetuanhuodongList.length" class="list list12 index-pv1 list12shetuanhuodong" :style='{"width":"100%","padding":"10px 7%","background":"#fff","height":"auto"}'>
	  <div class="tab" :style='{"width":"100%","margin":"0 0 20px","alignItems":"center","justifyContent":"center","display":"flex","height":"auto"}'>
		<template v-for="item,index in listList12shetuanhuodong">
	    <div v-if="index < 6" @click="listIndexClick12(index + 1, 'shetuanhuodong')" class="item"  :class="index + 1 == listIndex12shetuanhuodong ? 'active' : ''">
			<img v-if="item.image" :style='{"width":"34px","margin":"5px 5px 0 0","objectFit":"cover","display":"block","height":"34px"}' :src="baseUrl + (item.image?item.image.split(',')[0]:'')">
			<div :style='{"color":"inherit","fontSize":"14px"}'>{{item[listColumn12shetuanhuodong]}}</div>
		</div>
		</template>
		<div class="more" @click="moreBtn('shetuanhuodong')">
		  <div :style='{"color":"#999","fontSize":"14px","fontWeight":"500"}'>更多</div>
		  <span class="icon iconfont icon-jiantou25" :style='{"color":"#999","margin":"0 0 0 2px","fontSize":"14px"}'></span>
		</div>
	  </div>
	  <div class="list" :style='{"margin":"40px 0 0","overflow":"hidden","flexWrap":"wrap","flex":"1","background":"#fff","display":"flex","justifyContent":"space-between","height":"auto"}'>
	    <div :style='{"cursor":"pointer","width":"23%","margin":"0 0 30px","position":"relative","height":"auto"}' class="item list-item animation-box" v-for="item,index in shetuanhuodongList" :key="index" @click="toDetail('shetuanhuodongDetail', item)">
			<img :name="item.id" :style='{"width":"100%","objectFit":"cover","display":"block","clipPath":"polygon(100% 88%, 88% 100%, 0% 100%, 0% 0%, 100% 0%)","height":"200px"}' v-if="preHttp(item.huodongtupian)" :src="item.huodongtupian.split(',')[0]" alt="" />
			<img :name="item.id" :style='{"width":"100%","objectFit":"cover","display":"block","clipPath":"polygon(100% 88%, 88% 100%, 0% 100%, 0% 0%, 100% 0%)","height":"200px"}' v-else :src="baseUrl + (item.huodongtupian?item.huodongtupian.split(',')[0]:'')" alt="" />
			<div class="line1" :style='{"padding":"0 10px","overflow":"hidden","whiteSpace":"nowrap","color":"#333","width":"100%","lineHeight":"32px","fontSize":"16px","textOverflow":"ellipsis"}'>{{item.shetuanmingcheng}}</div>
			<div class="line1" :style='{"padding":"0 10px","overflow":"hidden","whiteSpace":"nowrap","color":"#333","width":"100%","lineHeight":"32px","fontSize":"16px","textOverflow":"ellipsis"}'>{{item.huodongmingcheng}}</div>
			<div class="line1" :style='{"padding":"0 10px","overflow":"hidden","whiteSpace":"nowrap","color":"#333","width":"100%","lineHeight":"32px","fontSize":"16px","textOverflow":"ellipsis"}'>{{item.huodongleixing}}</div>
	    </div>
	  </div>
	</div>



	
	
	<div @click="moreBtn('shetuanhuodong')" :style='{"border":"1px solid #ddd","cursor":"pointer","margin":"30px auto 10px","textAlign":"center","background":"#fff","display":"block","width":"120px","lineHeight":"36px"}'>
		<span :style='{"color":"#333","fontSize":"14px"}'>查看更多</span>
		<i :style='{"color":"#333","fontSize":"14px"}' class="icon iconfont icon-jinru"></i>
	</div>
	

</div>
<!-- 特价商品 -->
	
</div>
</template>

<script>
import 'animate.css'
import Swiper from "swiper";

  export default {
    //数据集合
    data() {
      return {
        baseUrl: '',
        newsList: [],

        shetuanxinxiList: [],
        shetuanhuodongList: [],



		listIndex12shetuanxinxi: 0,
		listList12shetuanxinxi: [],
		listColumn12shetuanxinxi: '',
		listIndex12shetuanhuodong: 0,
		listList12shetuanhuodong: [],
		listColumn12shetuanhuodong: '',

      }
    },
    created() {
		this.baseUrl = this.$config.baseUrl;
		this.getNewsList();
		this.getList();
		this.shetuanxinxiListCate()
		this.shetuanhuodongListCate()
    },
	mounted() {
		window.addEventListener('scroll', this.handleScroll)
		setTimeout(()=>{
			this.handleScroll()
		},100)
		
		this.swiperChanges()
	},
	beforeDestroy() {
	  window.removeEventListener('scroll', this.handleScroll)
	},
    //方法集合
    methods: {
		swiperChanges() {
			setTimeout(()=>{
			},750)
		},

		shetuanxinxiListCate(){
			this.$http.get('shetuanleixing/list',{}).then(res => {
			  if (res.data.code == 0) {
				this.listList12shetuanxinxi = res.data.data.list
			  }
			});
			this.listColumn12shetuanxinxi = 'shetuanleixing'
		},
		shetuanhuodongListCate(){
			this.$http.get('huodongleixing/list',{}).then(res => {
			  if (res.data.code == 0) {
				this.listList12shetuanhuodong = res.data.data.list
			  }
			});
			this.listColumn12shetuanhuodong = 'huodongleixing'
		},
		listIndexClick12(index, name) {
			this['listIndex12' + name] = index
			this.getList()
			
			document.querySelectorAll('.lists .list12' + name + ' .list .item').forEach(el => {
			  el.classList.remove("active")
			})
			setTimeout(() => {
			  document.querySelectorAll('.lists .list12' + name + ' .list .item').forEach(el => {
			    el.classList.add("active")
			  })
			}, 1);
		},

		handleScroll() {
			let arr = [
				{id:'search',css:'animate__fadeInDown'},
				{id:'about',css:'animate__fadeInRight'},
				{id:'system',css:'animate__fadeInRight'},
				{id:'animate_listshetuanxinxi',css:'animate__fadeInLeft'},
				{id:'animate_listshetuanhuodong',css:'animate__fadeInLeft'},
				{id:'animate_newsnews',css:'animate__fadeInLeft'},
				{id:'msgs',css:'animate__fadeInDown'},
				{id:'friendly',css:'animate__fadeInUp'}
			]
			
			for (let i in arr) {
				let doc = document.getElementById(arr[i].id)
				if (doc) {
					let top = doc.offsetTop
					let win_top = window.innerHeight + window.pageYOffset
					// console.log(top,win_top)
					if (win_top > top && doc.classList.value.indexOf(arr[i].css) < 0) {
						// console.log(doc)
						doc.classList.add(arr[i].css)
					}
				}
			}
		},
      preHttp(str) {
          return str && str.substr(0,4)=='http';
      },
		getNewsList() {
			let data = {
				page: 1,
				limit: 10,
                sort: 'addtime',
				order: 'desc'
			}
			this.$http.get('news/list', {params: data}).then(res => {
				if (res.data.code == 0) {
					this.newsList = res.data.data.list;
					
					
				}
			});
		},
		getList() {
			let autoSortUrl = "";
			let data = {}
			
			data = {
				page: 1,
				limit: 8,
			}
			if(this.listIndex12shetuanxinxi != 0){
				data.shetuanleixing = this.listList12shetuanxinxi[this.listIndex12shetuanxinxi - 1].shetuanleixing
			}
			this.$http.get('shetuanxinxi/list', {params: data}).then(res => {
				if (res.data.code == 0) {
					this.shetuanxinxiList = res.data.data.list;
					
					// 商品列表样式五
					
				}
			});
			data = {
				page: 1,
				limit: 8,
			}
			if(this.listIndex12shetuanhuodong != 0){
				data.huodongleixing = this.listList12shetuanhuodong[this.listIndex12shetuanhuodong - 1].huodongleixing
			}
			this.$http.get('shetuanhuodong/list', {params: data}).then(res => {
				if (res.data.code == 0) {
					this.shetuanhuodongList = res.data.data.list;
					
					// 商品列表样式五
					
				}
			});
		},
		toDetail(path, item) {
			this.$router.push({path: '/index/' + path, query: {id: item.id}});
		},
		moreBtn(path) {
			this.$router.push({path: '/index/' + path});
		}
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.home-preview {
		// -------- search --------
		.search .select /deep/ .el-input__inner {
			border: 1px solid #ddd;
			border-radius: 4px;
			padding: 0 30px 0 10px;
			box-shadow: 0 0 0px rgba(64, 158, 255, .3);
			outline: none;
			color: rgba(64, 158, 255, 1);
			width: 180px;
			font-size: 14px;
			height: 36px;
		}
		
		.search .input /deep/ .el-input__inner {
			border: 1px solid #ddd;
			border-radius: 4px;
			padding: 0 10px;
			box-shadow: 0 0 0px rgba(64, 158, 255, .3);
			outline: none;
			color: rgba(64, 158, 255, 1);
			width: 480px;
			font-size: 14px;
			height: 36px;
		}
		// -------- search --------
		.recommend {
			.list3 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list3 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list3 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list3 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list5 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
        }
        
        .list5 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list5 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 {
				.swiper-slide-prev {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-next {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-active {
					position: relative;
					z-index: 5;
				}
			}
			
			.index-pv1 .animation-box {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				z-index: initial;
			}
			
			.index-pv1 .animation-box:hover {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, -10px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
				z-index: 1;
			}
			
			.index-pv1 .animation-box img {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
			}
			
			.index-pv1 .animation-box img:hover {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
			}
		}
		
		.news {
			.list3 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list3 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list3 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list3 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list6 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list6 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list6 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list6 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.index-pv1 .animation-box {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				z-index: initial;
			}
			
			.index-pv1 .animation-box:hover {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
				z-index: 1;
			}
			
			.index-pv1 .animation-box img {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
			}
			
			.index-pv1 .animation-box img:hover {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
			}
		}
	
		.lists {
			.list3 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list3 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list3 .swiper-button-next {
				left: auto;
				right: 10px;
        }
        
        .list3 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list5 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 .swiper-button-next {
            left: auto;
            right: 10px;
			}
			
			.list5 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 {
				.swiper-slide-prev {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-next {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-active {
					position: relative;
					z-index: 5;
				}
			}
			
			.index-pv1 .animation-box {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				z-index: initial;
			}
			
			.index-pv1 .animation-box:hover {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, -10px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
				z-index: 1;
			}
			
			.index-pv1 .animation-box img {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
			}
			
			.index-pv1 .animation-box img:hover {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
			}
		}
	}
	
	.home-preview .news .list12 .left .list .item {
				cursor: pointer;
				padding: 0 0 0 10px;
				width: 100%;
				border-color: #ddd;
				border-width: 0 0 1px;
				position: relative;
				border-style: dashed;
				transition: 0.3s;
				height: auto;
			}
	.home-preview .news .list12 .left .list .item:hover {
				transform: translate3d(10px, 0px, 0px);
			}










	.home-preview .lists .list12 .tab .item {
				cursor: pointer;
				border: 1px solid #eee;
				padding: 0 20px;
				margin: 0 10px;
				color: #333;
				background: #fff;
				width: auto;
				font-size: 16px;
				line-height: 36px;
				height: auto;
			}
	
	.home-preview .lists .list12 .tab .item:hover {
				color: #fff;
				background: #1abc9e;
				border-color: #1abc9e;
				border-width: 1px;
				border-style: solid;
			}
	
	.home-preview .lists .list12 .tab .item.active {
				color: #fff;
				background: #1abc9e;
				border-color: #1abc9e;
				border-width: 1px;
				border-style: solid;
			}
	
	.home-preview .lists .list12 .tab .more {
				cursor: pointer;
				padding: 5px 10px;
				margin: 0 10px;
				color: #666;
				background: #fff;
				display: flex;
				line-height: 36px;
				align-items: center;
				height: 36px;
			}
	
	.home-preview .lists .list12 .tab .more:hover {
				color: red;
			}
	
	.home-preview .lists .list12 .item.active {
	  animation-name: mymove;
	
	  &:nth-of-type(1) {
	    animation-duration: 1s;
	  }
	  &:nth-of-type(2) {
	    animation-duration: 1.2s;
	  }
	  &:nth-of-type(3) {
	    animation-duration: 1.4s;
	  }
	  &:nth-of-type(4) {
	    animation-duration: 1.6s;
	  }
	  &:nth-of-type(5) {
	    animation-duration: 1.8s;
	  }
	  &:nth-of-type(6) {
	    animation-duration: 2s;
	  }
	}
	
	@keyframes mymove
	{
		from {top: 320px;}
		to {top: 0;}
	}
</style>
