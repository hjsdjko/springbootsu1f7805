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
				<el-form-item :style='{"padding":"0px 0","margin":"0 auto 20px","color":"inherit","borderRadius":"4px","background":"none","width":"100%","fontSize":"inherit"}' class="input" v-if="type!='info'"  label="负责人账号" prop="fuzerenzhanghao">
					<el-input v-model="ruleForm.fuzerenzhanghao" placeholder="负责人账号" clearable  :readonly="ro.fuzerenzhanghao"></el-input>
				</el-form-item>
				<el-form-item :style='{"padding":"0px 0","margin":"0 auto 20px","color":"inherit","borderRadius":"4px","background":"none","width":"100%","fontSize":"inherit"}' v-else class="input" label="负责人账号" prop="fuzerenzhanghao">
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
				<el-form-item :style='{"padding":"0px 0","margin":"0 auto 20px","color":"inherit","borderRadius":"4px","background":"none","width":"100%","fontSize":"inherit"}' class="input" v-if="type!='info'"  label="社团类型" prop="shetuanleixing">
					<el-input v-model="ruleForm.shetuanleixing" placeholder="社团类型" clearable  :readonly="ro.shetuanleixing"></el-input>
				</el-form-item>
				<el-form-item :style='{"padding":"0px 0","margin":"0 auto 20px","color":"inherit","borderRadius":"4px","background":"none","width":"100%","fontSize":"inherit"}' v-else class="input" label="社团类型" prop="shetuanleixing">
					<el-input v-model="ruleForm.shetuanleixing" placeholder="社团类型" readonly></el-input>
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
				<el-form-item :style='{"padding":"0px 0","margin":"0 auto 20px","color":"inherit","borderRadius":"4px","background":"none","width":"100%","fontSize":"inherit"}' class="select" v-if="type!='info'"  label="申请人数" prop="shetuanrenshu">
					<el-select :disabled="ro.shetuanrenshu" v-model="ruleForm.shetuanrenshu" placeholder="请选择申请人数" >
						<el-option
							v-for="(item,index) in shetuanrenshuOptions"
							v-bind:key="index"
							:label="item"
							:value="item">
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item :style='{"padding":"0px 0","margin":"0 auto 20px","color":"inherit","borderRadius":"4px","background":"none","width":"100%","fontSize":"inherit"}' v-else class="input" label="申请人数" prop="shetuanrenshu">
					<el-input v-model="ruleForm.shetuanrenshu"
						placeholder="申请人数" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"padding":"0px 0","margin":"0 auto 20px","color":"inherit","borderRadius":"4px","background":"none","width":"100%","fontSize":"inherit"}' class="date" v-if="type!='info'" label="申请时间" prop="shenqingshijian">
					<el-date-picker
						value-format="yyyy-MM-dd HH:mm:ss"
						v-model="ruleForm.shenqingshijian" 
						type="datetime"
						:readonly="ro.shenqingshijian"
						placeholder="申请时间"
					></el-date-picker>
				</el-form-item>
				<el-form-item :style='{"padding":"0px 0","margin":"0 auto 20px","color":"inherit","borderRadius":"4px","background":"none","width":"100%","fontSize":"inherit"}' class="input" v-else-if="ruleForm.shenqingshijian" label="申请时间" prop="shenqingshijian">
					<el-input v-model="ruleForm.shenqingshijian" placeholder="申请时间" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"padding":"0px 0","margin":"0 auto 20px","color":"inherit","borderRadius":"4px","background":"none","width":"100%","fontSize":"inherit"}' class="input" v-if="type!='info'"  label="用户账号" prop="yonghuzhanghao">
					<el-input v-model="ruleForm.yonghuzhanghao" placeholder="用户账号" clearable  :readonly="ro.yonghuzhanghao"></el-input>
				</el-form-item>
				<el-form-item :style='{"padding":"0px 0","margin":"0 auto 20px","color":"inherit","borderRadius":"4px","background":"none","width":"100%","fontSize":"inherit"}' v-else class="input" label="用户账号" prop="yonghuzhanghao">
					<el-input v-model="ruleForm.yonghuzhanghao" placeholder="用户账号" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"padding":"0px 0","margin":"0 auto 20px","color":"inherit","borderRadius":"4px","background":"none","width":"100%","fontSize":"inherit"}' class="input" v-if="type!='info'"  label="用户姓名" prop="yonghuxingming">
					<el-input v-model="ruleForm.yonghuxingming" placeholder="用户姓名" clearable  :readonly="ro.yonghuxingming"></el-input>
				</el-form-item>
				<el-form-item :style='{"padding":"0px 0","margin":"0 auto 20px","color":"inherit","borderRadius":"4px","background":"none","width":"100%","fontSize":"inherit"}' v-else class="input" label="用户姓名" prop="yonghuxingming">
					<el-input v-model="ruleForm.yonghuxingming" placeholder="用户姓名" readonly></el-input>
				</el-form-item>
			</template>
				<el-form-item :style='{"padding":"0px 0","margin":"0 auto 20px","color":"inherit","borderRadius":"4px","background":"none","width":"100%","fontSize":"inherit"}' v-if="type!='info'"  label="申请说明" prop="shenqingshuoming">
					<editor 
						style="min-width: 200px; max-width: 600px;"
						v-model="ruleForm.shenqingshuoming" 
						class="editor" 
						action="file/upload">
					</editor>
				</el-form-item>
				<el-form-item :style='{"padding":"0px 0","margin":"0 auto 20px","color":"inherit","borderRadius":"4px","background":"none","width":"100%","fontSize":"inherit"}' v-else-if="ruleForm.shenqingshuoming" label="申请说明" prop="shenqingshuoming">
                    <span :style='{"fontSize":"12px","lineHeight":"24px","color":"inherit","fontWeight":"500","display":"inline-block"}' v-html="ruleForm.shenqingshuoming"></span>
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
	isIntNumer,
} from "@/utils/validate";
export default {
	data() {
		var validateIntNumber = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isIntNumer(value)) {
				callback(new Error("请输入整数"));
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
				shenqingshijian : false,
				shenqingshuoming : false,
				yonghuzhanghao : false,
				yonghuxingming : false,
				sfsh : false,
				shhf : false,
			},
			
			
			ruleForm: {
				fuzerenzhanghao: '',
				fuzerenxingming: '',
				shetuanbianhao: '',
				shetuanmingcheng: '',
				shetuanleixing: '',
				tupian: '',
				shetuanrenshu: '1',
				shenqingshijian: '',
				shenqingshuoming: '',
				yonghuzhanghao: '',
				yonghuxingming: '',
				shhf: '',
			},
		
			shetuanrenshuOptions: [],

			
			rules: {
				fuzerenzhanghao: [
				],
				fuzerenxingming: [
				],
				shetuanbianhao: [
				],
				shetuanmingcheng: [
				],
				shetuanleixing: [
				],
				tupian: [
				],
				shetuanrenshu: [
					{ required: true, message: '申请人数不能为空', trigger: 'blur' },
					{ validator: validateIntNumber, trigger: 'blur' },
				],
				shenqingshijian: [
				],
				shenqingshuoming: [
				],
				yonghuzhanghao: [
				],
				yonghuxingming: [
				],
				sfsh: [
				],
				shhf: [
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
		this.ruleForm.shenqingshijian = this.getCurDateTime()
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
						if(o=='shenqingshijian'){
							this.ruleForm.shenqingshijian = obj[o];
							this.ro.shenqingshijian = true;
							continue;
						}
						if(o=='shenqingshuoming'){
							this.ruleForm.shenqingshuoming = obj[o];
							this.ro.shenqingshuoming = true;
							continue;
						}
						if(o=='yonghuzhanghao'){
							this.ruleForm.yonghuzhanghao = obj[o];
							this.ro.yonghuzhanghao = true;
							continue;
						}
						if(o=='yonghuxingming'){
							this.ruleForm.yonghuxingming = obj[o];
							this.ro.yonghuxingming = true;
							continue;
						}
				}
				this.ruleForm.shetuanrenshu = 0
				this.ro.shetuanrenshu = false;
				this.ruleForm.shetuanrenshu = Number('1'); 			}
			// 获取用户信息
			this.$http({
				url: `${this.$storage.get('sessionTable')}/session`,
				method: "get"
			}).then(({ data }) => {
				if (data && data.code === 0) {
					var json = data.data;
					if(((json.yonghuzhanghao!=''&&json.yonghuzhanghao) || json.yonghuzhanghao==0) && this.$storage.get("role")!="管理员"){
						this.ruleForm.yonghuzhanghao = json.yonghuzhanghao
						this.ro.yonghuzhanghao = true;
					}
					if(((json.yonghuxingming!=''&&json.yonghuxingming) || json.yonghuxingming==0) && this.$storage.get("role")!="管理员"){
						this.ruleForm.yonghuxingming = json.yonghuxingming
						this.ro.yonghuxingming = true;
					}
				} else {
					this.$message.error(data.msg);
				}
			});
            this.shetuanrenshuOptions = "1".split(',')
			
		},
    // 多级联动参数

    info(id) {
      this.$http({
        url: `shenqingshetuan/info/${id}`,
        method: "get"
      }).then(({ data }) => {
        if (data && data.code === 0) {
        this.ruleForm = data.data;
        //解决前台上传图片后台不显示的问题
        let reg=new RegExp('../../../upload','g')//g代表全部
        this.ruleForm.shenqingshuoming = this.ruleForm.shenqingshuoming.replace(reg,'../../../springbootsu1f7805/upload');
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
      var table = this.$storage.getObj('crossTable');
      if(objcross!=null) {
		  if(!this.ruleForm.shetuanrenshu){
			  this.$message.error("申请人数不能为空");
			  return
		  }
	      objcross.shetuanrenshu = parseFloat(objcross.shetuanrenshu) + parseFloat(this.ruleForm.shetuanrenshu)
                }
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
                              this.$http({
                                  url: `${table}/update`,
                                  method: "post",
                                  data: objcross
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
					url: "shenqingshetuan/page", 
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
								url: `shenqingshetuan/${!this.ruleForm.id ? "save" : "update"}`,
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
											this.parent.shenqingshetuanCrossAddOrUpdateFlag = false;
											this.parent.search();
											this.parent.contentStyleChange();
										}
									});
									this.$http({
										url: `${table}/update`,
										method: "post",
										data: objcross
									}).then(({ data }) => {});
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
				url: `shenqingshetuan/${!this.ruleForm.id ? "save" : "update"}`,
				method: "post",
			   data: this.ruleForm
			}).then(({ data }) => {
				if (data && data.code === 0) {
					this.$http({
						url: `${table}/update`,
						method: "post",
						data: objcross
					}).then(({ data }) => {});
					this.$message({
						message: "操作成功",
						type: "success",
						duration: 1500,
						onClose: () => {
							this.parent.showFlag = true;
							this.parent.addOrUpdateFlag = false;
							this.parent.shenqingshetuanCrossAddOrUpdateFlag = false;
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
      this.parent.shenqingshetuanCrossAddOrUpdateFlag = false;
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
