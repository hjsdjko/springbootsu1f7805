<template>
	<div class="addEdit-block" :style='{"minHeight":"calc(100vh - 200px)","padding":"10px 0 30px","margin":"0 auto","color":"#666","background":"none","width":"calc(100% - 20px)","fontSize":"14px","height":"100%"}'>
		<el-form
			:style='{"border":"1px solid #ddd","padding":"30px 0","boxShadow":"inset 0px 0px 0px 0px #E8EFF7,0 0px 0px 0px rgba(100,100,100,.1)","borderColor":"#ccc","alignItems":"flex-start","borderRadius":"0px","flexWrap":"wrap","background":"#eee","borderWidth":"1px","display":"flex","fontSize":"inherit","borderStyle":"solid"}'
			class="add-update-preview"
			ref="ruleForm"
			:model="ruleForm"
			:rules="rules"
			label-width="200px"
		>
			<template >
				<el-form-item :style='{"padding":"0px 0","margin":"0 auto 20px","color":"inherit","borderRadius":"4px","background":"none","width":"100%","fontSize":"inherit"}' class="select" v-if="type!='info'" label="负责人账号" prop="fuzerenzhanghao">
					<el-select :disabled="ro.fuzerenzhanghao" @change="fuzerenzhanghaoChange" v-model="ruleForm.fuzerenzhanghao" placeholder="请选择负责人账号">
						<el-option
							v-for="(item,index) in fuzerenzhanghaoOptions"
							v-bind:key="index"
							:label="item"
							:value="item">
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item :style='{"padding":"0px 0","margin":"0 auto 20px","color":"inherit","borderRadius":"4px","background":"none","width":"100%","fontSize":"inherit"}' class="input" v-else-if="ruleForm.fuzerenzhanghao" label="负责人账号" prop="fuzerenzhanghao">
					<el-input v-model="ruleForm.fuzerenzhanghao" placeholder="负责人账号" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"padding":"0px 0","margin":"0 auto 20px","color":"inherit","borderRadius":"4px","background":"none","width":"100%","fontSize":"inherit"}' class="input" v-if="type!='info'"  label="负责人姓名" prop="fuzerenxingming">
					<el-input v-model="ruleForm.fuzerenxingming" placeholder="负责人姓名" clearable  :readonly="ro.fuzerenxingming"></el-input>
				</el-form-item>
				<el-form-item :style='{"padding":"0px 0","margin":"0 auto 20px","color":"inherit","borderRadius":"4px","background":"none","width":"100%","fontSize":"inherit"}' v-else class="input" label="负责人姓名" prop="fuzerenxingming">
					<el-input v-model="ruleForm.fuzerenxingming" placeholder="负责人姓名" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"padding":"0px 0","margin":"0 auto 20px","color":"inherit","borderRadius":"4px","background":"none","width":"100%","fontSize":"inherit"}' class="input" v-if="type!='info'"  label="社团编号" prop="shetuanbianhao">
					<el-input v-model="ruleForm.shetuanbianhao" placeholder="社团编号" clearable  :readonly="ro.shetuanbianhao"></el-input>
				</el-form-item>
				<el-form-item :style='{"padding":"0px 0","margin":"0 auto 20px","color":"inherit","borderRadius":"4px","background":"none","width":"100%","fontSize":"inherit"}' v-else class="input" label="社团编号" prop="shetuanbianhao">
					<el-input v-model="ruleForm.shetuanbianhao" placeholder="社团编号" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"padding":"0px 0","margin":"0 auto 20px","color":"inherit","borderRadius":"4px","background":"none","width":"100%","fontSize":"inherit"}' class="input" v-if="type!='info'"  label="社团名称" prop="shetuanmingcheng">
					<el-input v-model="ruleForm.shetuanmingcheng" placeholder="社团名称" clearable  :readonly="ro.shetuanmingcheng"></el-input>
				</el-form-item>
				<el-form-item :style='{"padding":"0px 0","margin":"0 auto 20px","color":"inherit","borderRadius":"4px","background":"none","width":"100%","fontSize":"inherit"}' v-else class="input" label="社团名称" prop="shetuanmingcheng">
					<el-input v-model="ruleForm.shetuanmingcheng" placeholder="社团名称" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"padding":"0px 0","margin":"0 auto 20px","color":"inherit","borderRadius":"4px","background":"none","width":"100%","fontSize":"inherit"}' class="select" v-if="type!='info'"  label="社团类型" prop="shetuanleixing">
					<el-select :disabled="ro.shetuanleixing" v-model="ruleForm.shetuanleixing" placeholder="请选择社团类型" >
						<el-option
							v-for="(item,index) in shetuanleixingOptions"
							v-bind:key="index"
							:label="item"
							:value="item">
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item :style='{"padding":"0px 0","margin":"0 auto 20px","color":"inherit","borderRadius":"4px","background":"none","width":"100%","fontSize":"inherit"}' v-else class="input" label="社团类型" prop="shetuanleixing">
					<el-input v-model="ruleForm.shetuanleixing"
						placeholder="社团类型" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"padding":"0px 0","margin":"0 auto 20px","color":"inherit","borderRadius":"4px","background":"none","width":"100%","fontSize":"inherit"}' class="upload" v-if="type!='info' && !ro.tupian" label="图片" prop="tupian">
					<file-upload
						tip="点击上传图片"
						action="file/upload"
						:limit="3"
						:multiple="true"
						:fileUrls="ruleForm.tupian?ruleForm.tupian:''"
						@change="tupianUploadChange"
					></file-upload>
				</el-form-item>
				<el-form-item :style='{"padding":"0px 0","margin":"0 auto 20px","color":"inherit","borderRadius":"4px","background":"none","width":"100%","fontSize":"inherit"}' class="upload" v-else-if="ruleForm.tupian" label="图片" prop="tupian">
					<img v-if="ruleForm.tupian.substring(0,4)=='http'" class="upload-img" style="margin-right:20px;" v-bind:key="index" :src="ruleForm.tupian.split(',')[0]" width="100" height="100">
					<img v-else class="upload-img" style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in ruleForm.tupian.split(',')" :src="$base.url+item" width="100" height="100">
				</el-form-item>
				<el-form-item :style='{"padding":"0px 0","margin":"0 auto 20px","color":"inherit","borderRadius":"4px","background":"none","width":"100%","fontSize":"inherit"}' class="input" v-if="type!='info'"  label="社团人数" prop="shetuanrenshu">
					<el-input v-model="ruleForm.shetuanrenshu" placeholder="社团人数" clearable  :readonly="ro.shetuanrenshu"></el-input>
				</el-form-item>
				<el-form-item :style='{"padding":"0px 0","margin":"0 auto 20px","color":"inherit","borderRadius":"4px","background":"none","width":"100%","fontSize":"inherit"}' v-else class="input" label="社团人数" prop="shetuanrenshu">
					<el-input v-model="ruleForm.shetuanrenshu" placeholder="社团人数" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"padding":"0px 0","margin":"0 auto 20px","color":"inherit","borderRadius":"4px","background":"none","width":"100%","fontSize":"inherit"}' class="date" v-if="type!='info'" label="创建时间" prop="chuangjianshijian">
					<el-date-picker
						format="yyyy 年 MM 月 dd 日"
						value-format="yyyy-MM-dd"
						v-model="ruleForm.chuangjianshijian" 
						type="date"
						:readonly="ro.chuangjianshijian"
						placeholder="创建时间"
					></el-date-picker> 
				</el-form-item>
				<el-form-item :style='{"padding":"0px 0","margin":"0 auto 20px","color":"inherit","borderRadius":"4px","background":"none","width":"100%","fontSize":"inherit"}' class="input" v-else-if="ruleForm.chuangjianshijian" label="创建时间" prop="chuangjianshijian">
					<el-input v-model="ruleForm.chuangjianshijian" placeholder="创建时间" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"padding":"0px 0","margin":"0 auto 20px","color":"inherit","borderRadius":"4px","background":"none","width":"100%","fontSize":"inherit"}' class="input" v-if="type!='info'"  label="社团邮箱" prop="shetuanyouxiang">
					<el-input v-model="ruleForm.shetuanyouxiang" placeholder="社团邮箱" clearable  :readonly="ro.shetuanyouxiang"></el-input>
				</el-form-item>
				<el-form-item :style='{"padding":"0px 0","margin":"0 auto 20px","color":"inherit","borderRadius":"4px","background":"none","width":"100%","fontSize":"inherit"}' v-else class="input" label="社团邮箱" prop="shetuanyouxiang">
					<el-input v-model="ruleForm.shetuanyouxiang" placeholder="社团邮箱" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"padding":"0px 0","margin":"0 auto 20px","color":"inherit","borderRadius":"4px","background":"none","width":"100%","fontSize":"inherit"}' class="input" v-if="type!='info'"  label="联系电话" prop="lianxidianhua">
					<el-input v-model="ruleForm.lianxidianhua" placeholder="联系电话" clearable  :readonly="ro.lianxidianhua"></el-input>
				</el-form-item>
				<el-form-item :style='{"padding":"0px 0","margin":"0 auto 20px","color":"inherit","borderRadius":"4px","background":"none","width":"100%","fontSize":"inherit"}' v-else class="input" label="联系电话" prop="lianxidianhua">
					<el-input v-model="ruleForm.lianxidianhua" placeholder="联系电话" readonly></el-input>
				</el-form-item>
			</template>
				<el-form-item :style='{"padding":"0px 0","margin":"0 auto 20px","color":"inherit","borderRadius":"4px","background":"none","width":"100%","fontSize":"inherit"}' v-if="type!='info'"  label="社团简介" prop="shetuanjianjie">
					<editor 
						style="min-width: 200px; max-width: 600px;"
						v-model="ruleForm.shetuanjianjie" 
						class="editor" 
						action="file/upload">
					</editor>
				</el-form-item>
				<el-form-item :style='{"padding":"0px 0","margin":"0 auto 20px","color":"inherit","borderRadius":"4px","background":"none","width":"100%","fontSize":"inherit"}' v-else-if="ruleForm.shetuanjianjie" label="社团简介" prop="shetuanjianjie">
                    <span :style='{"fontSize":"12px","lineHeight":"24px","color":"inherit","fontWeight":"500","display":"inline-block"}' v-html="ruleForm.shetuanjianjie"></span>
                </el-form-item>
			<el-form-item :style='{"padding":"0","margin":"30px auto","alignItems":"center","textAlign":"center","background":"none","display":"flex","width":"100%","fontSize":"18px"}' class="btn">
				<el-button class="btn3"  v-if="type!='info'" type="success" @click="onSubmit">
					<span class="icon iconfont icon-tijiao10" :style='{"color":"inherit","margin":"0 2px","fontSize":"inherit"}'></span>
					确定
				</el-button>
				<el-button class="btn4" v-if="type!='info'" type="success" @click="back()">
					<span class="icon iconfont icon-quxiao08" :style='{"color":"inherit","margin":"0 2px","fontSize":"inherit"}'></span>
					取消
				</el-button>
				<el-button class="btn5" v-if="type=='info'" type="success" @click="back()">
					<span class="icon iconfont icon-fanhui01" :style='{"color":"inherit","margin":"0 2px","fontSize":"inherit"}'></span>
					返回
				</el-button>
			</el-form-item>
		</el-form>
    

  </div>
</template>
<script>
import { 
	isEmail,
	isMobile,
} from "@/utils/validate";
export default {
	data() {
		var validateMobile = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isMobile(value)) {
				callback(new Error("请输入正确的手机号码"));
			} else {
				callback();
			}
		};
		var validateEmail = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isEmail(value)) {
				callback(new Error("请输入正确的邮箱地址"));
			} else {
				callback();
			}
		};
		return {
			id: '',
			type: '',
			
			
			ro:{
				fuzerenzhanghao : false,
				fuzerenxingming : false,
				shetuanbianhao : false,
				shetuanmingcheng : false,
				shetuanleixing : false,
				tupian : false,
				shetuanrenshu : false,
				chuangjianshijian : false,
				shetuanyouxiang : false,
				lianxidianhua : false,
				shetuanjianjie : false,
			},
			
			
			ruleForm: {
				fuzerenzhanghao: '',
				fuzerenxingming: '',
				shetuanbianhao: '',
				shetuanmingcheng: '',
				shetuanleixing: '',
				tupian: '',
				shetuanrenshu: '1',
				chuangjianshijian: '',
				shetuanyouxiang: '',
				lianxidianhua: '',
				shetuanjianjie: '',
			},
		
			fuzerenzhanghaoOptions: [],
			shetuanleixingOptions: [],

			
			rules: {
				fuzerenzhanghao: [
				],
				fuzerenxingming: [
				],
				shetuanbianhao: [
				],
				shetuanmingcheng: [
					{ required: true, message: '社团名称不能为空', trigger: 'blur' },
				],
				shetuanleixing: [
					{ required: true, message: '社团类型不能为空', trigger: 'blur' },
				],
				tupian: [
				],
				shetuanrenshu: [
				],
				chuangjianshijian: [
				],
				shetuanyouxiang: [
					{ validator: validateEmail, trigger: 'blur' },
				],
				lianxidianhua: [
					{ validator: validateMobile, trigger: 'blur' },
				],
				shetuanjianjie: [
				],
			},
		};
	},
	props: ["parent"],
	computed: {



	},
    components: {
    },
	created() {
	},
	methods: {
		
		// 下载
		download(file){
			window.open(`${file}`)
		},
		// 初始化
		init(id,type) {
			if (id) {
				this.id = id;
				this.type = type;
			}
			if(this.type=='info'||this.type=='else'){
				this.info(id);
			}else if(this.type=='logistics'){
				this.logistics=false;
				this.info(id);
			}else if(this.type=='cross'){
				var obj = this.$storage.getObj('crossObj');
				for (var o in obj){
						if(o=='fuzerenzhanghao'){
							this.ruleForm.fuzerenzhanghao = obj[o];
							this.ro.fuzerenzhanghao = true;
							continue;
						}
						if(o=='fuzerenxingming'){
							this.ruleForm.fuzerenxingming = obj[o];
							this.ro.fuzerenxingming = true;
							continue;
						}
						if(o=='shetuanbianhao'){
							this.ruleForm.shetuanbianhao = obj[o];
							this.ro.shetuanbianhao = true;
							continue;
						}
						if(o=='shetuanmingcheng'){
							this.ruleForm.shetuanmingcheng = obj[o];
							this.ro.shetuanmingcheng = true;
							continue;
						}
						if(o=='shetuanleixing'){
							this.ruleForm.shetuanleixing = obj[o];
							this.ro.shetuanleixing = true;
							continue;
						}
						if(o=='tupian'){
							this.ruleForm.tupian = obj[o];
							this.ro.tupian = true;
							continue;
						}
						if(o=='shetuanrenshu'){
							this.ruleForm.shetuanrenshu = obj[o];
							this.ro.shetuanrenshu = true;
							continue;
						}
						if(o=='chuangjianshijian'){
							this.ruleForm.chuangjianshijian = obj[o];
							this.ro.chuangjianshijian = true;
							continue;
						}
						if(o=='shetuanyouxiang'){
							this.ruleForm.shetuanyouxiang = obj[o];
							this.ro.shetuanyouxiang = true;
							continue;
						}
						if(o=='lianxidianhua'){
							this.ruleForm.lianxidianhua = obj[o];
							this.ro.lianxidianhua = true;
							continue;
						}
						if(o=='shetuanjianjie'){
							this.ruleForm.shetuanjianjie = obj[o];
							this.ro.shetuanjianjie = true;
							continue;
						}
				}
				this.ruleForm.shetuanrenshu = '1'; 			}
			// 获取用户信息
			this.$http({
				url: `${this.$storage.get('sessionTable')}/session`,
				method: "get"
			}).then(({ data }) => {
				if (data && data.code === 0) {
					var json = data.data;
					if(((json.fuzerenzhanghao!=''&&json.fuzerenzhanghao) || json.fuzerenzhanghao==0) && this.$storage.get("role")!="管理员"){
						this.ruleForm.fuzerenzhanghao = json.fuzerenzhanghao
						this.ro.fuzerenzhanghao = true;
					}
					if(((json.fuzerenxingming!=''&&json.fuzerenxingming) || json.fuzerenxingming==0) && this.$storage.get("role")!="管理员"){
						this.ruleForm.fuzerenxingming = json.fuzerenxingming
						this.ro.fuzerenxingming = true;
					}
					if(((json.shetuanbianhao!=''&&json.shetuanbianhao) || json.shetuanbianhao==0) && this.$storage.get("role")!="管理员"){
						this.ruleForm.shetuanbianhao = json.shetuanbianhao
						this.ro.shetuanbianhao = true;
					}
					if(((json.shetuanmingcheng!=''&&json.shetuanmingcheng) || json.shetuanmingcheng==0) && this.$storage.get("role")!="管理员"){
						this.ruleForm.shetuanmingcheng = json.shetuanmingcheng
						this.ro.shetuanmingcheng = true;
					}
				} else {
					this.$message.error(data.msg);
				}
			});
            this.$http({
				url: `option/shetuanfuzeren/fuzerenzhanghao`,
				method: "get"
            }).then(({ data }) => {
				if (data && data.code === 0) {
					this.fuzerenzhanghaoOptions = data.data;
				} else {
					this.$message.error(data.msg);
				}
            });
            this.$http({
				url: `option/shetuanleixing/shetuanleixing`,
				method: "get"
            }).then(({ data }) => {
				if (data && data.code === 0) {
					this.shetuanleixingOptions = data.data;
				} else {
					this.$message.error(data.msg);
				}
            });
			
		},
			// 下二随
			fuzerenzhanghaoChange () {
				this.$http({
					url: `follow/shetuanfuzeren/fuzerenzhanghao?columnValue=`+ this.ruleForm.fuzerenzhanghao,
					method: "get"
				}).then(({ data }) => {
					if (data && data.code === 0) {
						if(data.data.fuzerenxingming){
							this.ruleForm.fuzerenxingming = data.data.fuzerenxingming
						}
						if(data.data.shetuanbianhao){
							this.ruleForm.shetuanbianhao = data.data.shetuanbianhao
						}
						if(data.data.shetuanmingcheng){
							this.ruleForm.shetuanmingcheng = data.data.shetuanmingcheng
						}
					} else {
						this.$message.error(data.msg);
					}
				});
			},
    // 多级联动参数

    info(id) {
      this.$http({
        url: `shetuanxinxi/info/${id}`,
        method: "get"
      }).then(({ data }) => {
        if (data && data.code === 0) {
        this.ruleForm = data.data;
        //解决前台上传图片后台不显示的问题
        let reg=new RegExp('../../../upload','g')//g代表全部
        this.ruleForm.shetuanjianjie = this.ruleForm.shetuanjianjie.replace(reg,'../../../springbootsu1f7805/upload');
        } else {
          this.$message.error(data.msg);
        }
      });
    },


    // 提交
    onSubmit() {
	if(this.ruleForm.tupian!=null) {
		this.ruleForm.tupian = this.ruleForm.tupian.replace(new RegExp(this.$base.url,"g"),"");
	}
var objcross = this.$storage.getObj('crossObj');
      //更新跨表属性
       var crossuserid;
       var crossrefid;
       var crossoptnum;
       if(this.type=='cross'){
                var statusColumnName = this.$storage.get('statusColumnName');
                var statusColumnValue = this.$storage.get('statusColumnValue');
                if(statusColumnName!='') {
                        var obj = this.$storage.getObj('crossObj');
                       if(statusColumnName && !statusColumnName.startsWith("[")) {
                               for (var o in obj){
                                 if(o==statusColumnName){
                                   obj[o] = statusColumnValue;
                                 }
                               }
                               var table = this.$storage.get('crossTable');
                             this.$http({
                                 url: `${table}/update`,
                                 method: "post",
                                 data: obj
                               }).then(({ data }) => {});
                       } else {
                               crossuserid=this.$storage.get('userid');
                               crossrefid=obj['id'];
                               crossoptnum=this.$storage.get('statusColumnName');
                               crossoptnum=crossoptnum.replace(/\[/,"").replace(/\]/,"");
                        }
                }
        }
		this.$refs["ruleForm"].validate(valid => {
			if (valid) {
				if(crossrefid && crossuserid) {
					this.ruleForm.crossuserid = crossuserid;
					this.ruleForm.crossrefid = crossrefid;
					let params = { 
						page: 1, 
						limit: 10, 
						crossuserid:this.ruleForm.crossuserid,
						crossrefid:this.ruleForm.crossrefid,
					} 
				this.$http({ 
					url: "shetuanxinxi/page", 
					method: "get", 
					params: params 
				}).then(({ 
					data 
				}) => { 
					if (data && data.code === 0) { 
						if(data.data.total>=crossoptnum) {
							this.$message.error(this.$storage.get('tips'));
							return false;
						} else {
							this.$http({
								url: `shetuanxinxi/${!this.ruleForm.id ? "save" : "update"}`,
								method: "post",
								data: this.ruleForm
							}).then(({ data }) => {
								if (data && data.code === 0) {
									this.$message({
										message: "操作成功",
										type: "success",
										duration: 1500,
										onClose: () => {
											this.parent.showFlag = true;
											this.parent.addOrUpdateFlag = false;
											this.parent.shetuanxinxiCrossAddOrUpdateFlag = false;
											this.parent.search();
											this.parent.contentStyleChange();
										}
									});
								} else {
									this.$message.error(data.msg);
								}
							});

						}
					} else { 
				} 
			});
		} else {
			this.$http({
				url: `shetuanxinxi/${!this.ruleForm.id ? "save" : "update"}`,
				method: "post",
			   data: this.ruleForm
			}).then(({ data }) => {
				if (data && data.code === 0) {
					this.$message({
						message: "操作成功",
						type: "success",
						duration: 1500,
						onClose: () => {
							this.parent.showFlag = true;
							this.parent.addOrUpdateFlag = false;
							this.parent.shetuanxinxiCrossAddOrUpdateFlag = false;
							this.parent.search();
							this.parent.contentStyleChange();
						}
					});
				} else {
					this.$message.error(data.msg);
			   }
			});
		 }
         }
		});
    },
    // 获取uuid
    getUUID () {
      return new Date().getTime();
    },
    // 返回
    back() {
      this.parent.showFlag = true;
      this.parent.addOrUpdateFlag = false;
      this.parent.shetuanxinxiCrossAddOrUpdateFlag = false;
      this.parent.contentStyleChange();
    },
    tupianUploadChange(fileUrls) {
	    this.ruleForm.tupian = fileUrls;
    },
  }
};
</script>
<style lang="scss" scoped>
	.amap-wrapper {
		width: 100%;
		height: 500px;
	}
	
	.search-box {
		position: absolute;
	}
	
	.el-date-editor.el-input {
		width: auto;
	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__label {
	  	  padding: 0 10px 0 0;
	  	  color: inherit;
	  	  background: none;
	  	  font-weight: 600;
	  	  display: inline-block;
	  	  width: 200px;
	  	  font-size: inherit;
	  	  line-height: 40px;
	  	  text-align: right;
	  	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__content {
	  margin-left: 200px;
	}
	
	.add-update-preview .el-input /deep/ .el-input__inner {
	  	  border-radius: 4px;
	  	  padding: 0 10px;
	  	  color: inherit;
	  	  background: #f6f6f6;
	  	  width: auto;
	  	  font-size: 12px;
	  	  border-color: #ccc;
	  	  border-width: 1px;
	  	  border-style: solid;
	  	  min-width: 200px;
	  	  height: 30px;
	  	}
	.add-update-preview .el-input-number /deep/ .el-input__inner {
		text-align: left;
	  	  border-radius: 4px;
	  	  padding: 0 10px;
	  	  color: inherit;
	  	  background: #f6f6f6;
	  	  width: auto;
	  	  font-size: 12px;
	  	  border-color: #ccc;
	  	  border-width: 1px;
	  	  border-style: solid;
	  	  min-width: 200px;
	  	  height: 30px;
	  	}
	.add-update-preview .el-input-number /deep/ .el-input-number__decrease {
		display: none;
	}
	.add-update-preview .el-input-number /deep/ .el-input-number__increase {
		display: none;
	}
	
	.add-update-preview .el-select /deep/ .el-input__inner {
	  	  border-radius: 4px;
	  	  padding: 0 10px;
	  	  color: inherit;
	  	  background: #f6f6f6;
	  	  width: auto;
	  	  font-size: 12px;
	  	  border-color: #ccc;
	  	  border-width: 1px;
	  	  border-style: solid;
	  	  min-width: 200px;
	  	  height: 30px;
	  	}
	
	.add-update-preview .el-date-editor /deep/ .el-input__inner {
	  	  border-radius: 4px;
	  	  padding: 0 10px 0 30px;
	  	  color: inherit;
	  	  background: #f6f6f6;
	  	  width: auto;
	  	  font-size: 12px;
	  	  border-color: #ccc;
	  	  border-width: 1px;
	  	  border-style: solid;
	  	  min-width: 200px;
	  	  height: 30px;
	  	}
	
	.add-update-preview /deep/ .el-upload--picture-card {
		background: transparent;
		border: 0;
		border-radius: 0;
		width: auto;
		height: auto;
		line-height: initial;
		vertical-align: middle;
	}
	
	.add-update-preview /deep/ .upload .upload-img {
	  	  border: 1px solid #ccc;
	  	  cursor: pointer;
	  	  border-radius: 4px;
	  	  margin: 0 0 10px;
	  	  color: #aaa;
	  	  background: #f6f6f6;
	  	  object-fit: cover;
	  	  width: 150px;
	  	  font-size: 24px;
	  	  line-height: 60px;
	  	  text-align: center;
	  	  height: 60px;
	  	}
	
	.add-update-preview /deep/ .el-upload-list .el-upload-list__item {
	  	  border: 1px solid #ccc;
	  	  cursor: pointer;
	  	  border-radius: 4px;
	  	  margin: 0 0 10px;
	  	  color: #aaa;
	  	  background: #f6f6f6;
	  	  object-fit: cover;
	  	  width: 150px;
	  	  font-size: 24px;
	  	  line-height: 60px;
	  	  text-align: center;
	  	  height: 60px;
	  	}
	
	.add-update-preview /deep/ .el-upload .el-icon-plus {
	  	  border: 1px solid #ccc;
	  	  cursor: pointer;
	  	  border-radius: 4px;
	  	  margin: 0 0 10px;
	  	  color: #aaa;
	  	  background: #f6f6f6;
	  	  object-fit: cover;
	  	  width: 150px;
	  	  font-size: 24px;
	  	  line-height: 60px;
	  	  text-align: center;
	  	  height: 60px;
	  	}
	
	.add-update-preview .el-textarea /deep/ .el-textarea__inner {
	  	  border: 1px solid #ccc;
	  	  border-radius: 4px;
	  	  padding: 10px 10px;
	  	  color: inherit;
	  	  background: #f6f6f6;
	  	  width: auto;
	  	  font-size: 12px;
	  	  min-height: 80px;
	  	  min-width: 300px;
	  	  height: auto;
	  	}
	
	.add-update-preview .btn .btn1 {
				border: 0px solid #3fcbca;
				cursor: pointer;
				padding: 0 10px;
				margin: 0px 4px;
				color: #fff;
				display: inline-block;
				font-size: 14px;
				line-height: 24px;
				border-radius: 4px;
				outline: none;
				background: #5680ac;
				width: auto;
				height: 24px;
			}
	
	.add-update-preview .btn .btn1:hover {
				opacity: 0.8;
			}
	
	.add-update-preview .btn .btn2 {
				border: 0px solid #23b7e5;
				cursor: pointer;
				border-radius: 4px;
				padding: 0 10px;
				margin: 0px 4px;
				outline: none;
				color: #fff;
				background: #56ac92;
				width: auto;
				font-size: 14px;
				line-height: 24px;
				height: 24px;
			}
	
	.add-update-preview .btn .btn2:hover {
				opacity: 0.8;
			}
	
	.add-update-preview .btn .btn3 {
				border: 0px solid #3fcbca;
				cursor: pointer;
				border-radius: 4px;
				padding: 0 10px;
				margin: 0px 4px;
				outline: none;
				color: #fff;
				background: #64ac56;
				width: auto;
				font-size: 14px;
				line-height: 24px;
				height: 24px;
			}
	
	.add-update-preview .btn .btn3:hover {
				opacity: 0.8;
			}
	
	.add-update-preview .btn .btn4 {
				border: 0px solid #FF6B6B;
				cursor: pointer;
				border-radius: 4px;
				padding: 0 10px;
				margin: 0px 4px;
				outline: none;
				color: #fff;
				background: #be696d;
				width: auto;
				font-size: 14px;
				line-height: 24px;
				height: 24px;
			}
	
	.add-update-preview .btn .btn4:hover {
				opacity: 0.8;
			}
	
	.add-update-preview .btn .btn5 {
				border: 0px solid #65C3DF;
				cursor: pointer;
				border-radius: 4px;
				padding: 0 10px;
				margin: 4px;
				outline: none;
				color: #fff;
				background: #aaa;
				width: auto;
				font-size: 14px;
				line-height: 24px;
				height: 24px;
			}
	
	.add-update-preview .btn .btn5:hover {
				opacity: 0.8;
			}
</style>
