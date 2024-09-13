<template>
<div :style='{"width":"100%","padding":"30px 7% 40px","margin":"0px auto","position":"relative","background":"#fff"}'>
    <el-form
	  :style='{"border":"1px solid #f0f0f0","width":"100%","padding":"30px 20%","position":"relative","background":"#fcfcfc"}'
      class="add-update-preview"
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      label-width="80px"
    >
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"none"}' label="负责人账号" prop="fuzerenzhanghao">
            <el-input v-model="ruleForm.fuzerenzhanghao" 
                placeholder="负责人账号" clearable :disabled=" false  ||ro.fuzerenzhanghao"></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"none"}' label="负责人姓名" prop="fuzerenxingming">
            <el-input v-model="ruleForm.fuzerenxingming" 
                placeholder="负责人姓名" clearable :disabled=" false  ||ro.fuzerenxingming"></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"none"}' label="社团编号" prop="shetuanbianhao">
            <el-input v-model="ruleForm.shetuanbianhao" 
                placeholder="社团编号" clearable :disabled=" false  ||ro.shetuanbianhao"></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"none"}' label="社团名称" prop="shetuanmingcheng">
            <el-input v-model="ruleForm.shetuanmingcheng" 
                placeholder="社团名称" clearable :disabled=" false  ||ro.shetuanmingcheng"></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"none"}' label="活动名称" prop="huodongmingcheng">
            <el-input v-model="ruleForm.huodongmingcheng" 
                placeholder="活动名称" clearable :disabled=" false  ||ro.huodongmingcheng"></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"none"}' label="活动类型" prop="huodongleixing">
            <el-input v-model="ruleForm.huodongleixing" 
                placeholder="活动类型" clearable :disabled=" false  ||ro.huodongleixing"></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"none"}' label="活动图片" v-if="type!='cross' || (type=='cross' && !ro.huodongtupian)" prop="huodongtupian">
            <file-upload
            tip="点击上传活动图片"
            action="file/upload"
            :limit="3"
            :multiple="true"
            :fileUrls="ruleForm.huodongtupian?ruleForm.huodongtupian:''"
            @change="huodongtupianUploadChange"
            ></file-upload>
          </el-form-item>
            <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"none"}' class="upload" v-else label="活动图片" prop="huodongtupian">
                <img v-if="ruleForm.huodongtupian.substring(0,4)=='http'" class="upload-img" style="margin-right:20px;" v-bind:key="index" :src="ruleForm.huodongtupian.split(',')[0]" width="100" height="100">
                <img v-else class="upload-img" style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in ruleForm.huodongtupian.split(',')" :src="baseUrl+item" width="100" height="100">
            </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"none"}' label="活动地点" prop="huodongdidian">
            <el-input v-model="ruleForm.huodongdidian" 
                placeholder="活动地点" clearable :disabled=" false  ||ro.huodongdidian"></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"none"}' label="用户账号" prop="yonghuzhanghao">
            <el-input v-model="ruleForm.yonghuzhanghao" 
                placeholder="用户账号" clearable :disabled=" false  ||ro.yonghuzhanghao"></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"none"}' label="用户姓名" prop="yonghuxingming">
            <el-input v-model="ruleForm.yonghuxingming" 
                placeholder="用户姓名" clearable :disabled=" false  ||ro.yonghuxingming"></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"none"}' label="评价时间" prop="pingjiashijian">
              <el-date-picker
				  :disabled=" false  ||ro.pingjiashijian"
                  value-format="yyyy-MM-dd HH:mm:ss"
                  v-model="ruleForm.pingjiashijian" 
                  type="datetime"
                  placeholder="评价时间">
              </el-date-picker>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"none"}'  label="活动评分" prop="huodongpingfen">
            <el-select v-model="ruleForm.huodongpingfen" placeholder="请选择活动评分" :disabled=" false  ||ro.huodongpingfen" >
              <el-option
                  v-for="(item,index) in huodongpingfenOptions"
                  :key="index"
                  :label="item"
                  :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"none"}' label="活动评价" prop="huodongpingjia">
            <el-input
              type="textarea"
              :rows="8"
              placeholder="活动评价"
              v-model="ruleForm.huodongpingjia">
            </el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"none"}' label="活动建议" prop="huodongjianyi">
            <el-input
              type="textarea"
              :rows="8"
              placeholder="活动建议"
              v-model="ruleForm.huodongjianyi">
            </el-input>
          </el-form-item>

      <el-form-item :style='{"padding":"0","textAlign":"center","margin":"0"}'>
        <el-button :style='{"border":"0","cursor":"pointer","padding":"0","margin":"0 20px 0 0","outline":"none","color":"rgba(255, 255, 255, 1)","borderRadius":"0px","background":"#1abc9e","width":"128px","lineHeight":"40px","fontSize":"14px","height":"40px"}'  type="primary" @click="onSubmit">提交</el-button>
        <el-button :style='{"border":"1px solid #eee","cursor":"pointer","padding":"0","margin":"0","outline":"none","color":"#333","borderRadius":"0px","background":"#fcfcfc","width":"128px","lineHeight":"40px","fontSize":"14px","height":"40px"}' @click="back()">返回</el-button>
      </el-form-item>
    </el-form>
</div>
</template>

<script>
  export default {
    data() {
	  let self = this
      return {
        id: '',
        baseUrl: '',
        ro:{
				fuzerenzhanghao : false,
				fuzerenxingming : false,
				shetuanbianhao : false,
				shetuanmingcheng : false,
				huodongmingcheng : false,
				huodongleixing : false,
				huodongtupian : false,
				huodongdidian : false,
				yonghuzhanghao : false,
				yonghuxingming : false,
				pingjiashijian : false,
				huodongpingfen : false,
				huodongpingjia : false,
				huodongjianyi : false,
        },
        type: '',
        userTableName: localStorage.getItem('UserTableName'),
        ruleForm: {
          fuzerenzhanghao: '',
          fuzerenxingming: '',
          shetuanbianhao: '',
          shetuanmingcheng: '',
          huodongmingcheng: '',
          huodongleixing: '',
          huodongtupian: '',
          huodongdidian: '',
          yonghuzhanghao: '',
          yonghuxingming: '',
          pingjiashijian: '',
          huodongpingfen: '',
          huodongpingjia: '',
          huodongjianyi: '',
        },
        huodongpingfenOptions: [],


        rules: {
          fuzerenzhanghao: [
          ],
          fuzerenxingming: [
          ],
          shetuanbianhao: [
          ],
          shetuanmingcheng: [
          ],
          huodongmingcheng: [
          ],
          huodongleixing: [
          ],
          huodongtupian: [
          ],
          huodongdidian: [
          ],
          yonghuzhanghao: [
          ],
          yonghuxingming: [
          ],
          pingjiashijian: [
          ],
          huodongpingfen: [
          ],
          huodongpingjia: [
          ],
          huodongjianyi: [
          ],
        },
		centerType: false,
      };
    },
    computed: {



    },
    components: {
    },
    created() {
		if(this.$route.query.centerType){
			this.centerType = true
		}
	  //this.bg();
      let type = this.$route.query.type ? this.$route.query.type : '';
      this.init(type);
      this.baseUrl = this.$config.baseUrl;
      this.ruleForm.pingjiashijian = this.getCurDateTime()
    },
    methods: {
      getMakeZero(s) {
          return s < 10 ? '0' + s : s;
      },
      // 下载
      download(file){
        window.open(`${file}`)
      },
      // 初始化
      init(type) {
        this.type = type;
        if(type=='cross'){
          var obj = JSON.parse(localStorage.getItem('crossObj'));
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
            if(o=='huodongmingcheng'){
              this.ruleForm.huodongmingcheng = obj[o];
              this.ro.huodongmingcheng = true;
              continue;
            }
            if(o=='huodongleixing'){
              this.ruleForm.huodongleixing = obj[o];
              this.ro.huodongleixing = true;
              continue;
            }
            if(o=='huodongtupian'){
              this.ruleForm.huodongtupian = obj[o].split(",")[0];
              this.ro.huodongtupian = true;
              continue;
            }
            if(o=='huodongdidian'){
              this.ruleForm.huodongdidian = obj[o];
              this.ro.huodongdidian = true;
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
            if(o=='pingjiashijian'){
              this.ruleForm.pingjiashijian = obj[o];
              this.ro.pingjiashijian = true;
              continue;
            }
            if(o=='huodongpingfen'){
              this.ruleForm.huodongpingfen = obj[o];
              this.ro.huodongpingfen = true;
              continue;
            }
            if(o=='huodongpingjia'){
              this.ruleForm.huodongpingjia = obj[o];
              this.ro.huodongpingjia = true;
              continue;
            }
            if(o=='huodongjianyi'){
              this.ruleForm.huodongjianyi = obj[o];
              this.ro.huodongjianyi = true;
              continue;
            }
          }
        }else if(type=='edit'){
			this.info()
		}
        // 获取用户信息
        this.$http.get(this.userTableName + '/session', {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            var json = res.data.data;
            if((json.yonghuzhanghao!=''&&json.yonghuzhanghao) || json.yonghuzhanghao==0){
                this.ruleForm.yonghuzhanghao = json.yonghuzhanghao;
				this.ro.yonghuzhanghao = true;
            }
            if((json.yonghuxingming!=''&&json.yonghuxingming) || json.yonghuxingming==0){
                this.ruleForm.yonghuxingming = json.yonghuxingming;
				this.ro.yonghuxingming = true;
            }
          }
        });
        this.huodongpingfenOptions = "一分,二分,三分,四分,五分".split(',')

		if (localStorage.getItem('raffleType') && localStorage.getItem('raffleType') != null) {
			localStorage.removeItem('raffleType')
			setTimeout(() => {
				this.onSubmit()
			}, 300)
		}
      },

    // 多级联动参数
      // 多级联动参数
      info() {
        this.$http.get(`huodongpingjia/detail/${this.$route.query.id}`, {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            this.ruleForm = res.data.data;
          }
        });
      },
      // 提交
      onSubmit() {
			//更新跨表属性
			var crossuserid;
			var crossrefid;
			var crossoptnum;
			this.$refs["ruleForm"].validate(valid => {
				if(valid) {
					if(this.type=='cross'){
						var statusColumnName = localStorage.getItem('statusColumnName');
						var statusColumnValue = localStorage.getItem('statusColumnValue');
						if(statusColumnName && statusColumnName!='') {
							var obj = JSON.parse(localStorage.getItem('crossObj'));
							if(!statusColumnName.startsWith("[")) {
								for (var o in obj){
									if(o==statusColumnName){
										obj[o] = statusColumnValue;
									}
								}
								var table = localStorage.getItem('crossTable');
								this.$http.post(table+'/update', obj).then(res => {});
							} else {
								crossuserid=Number(localStorage.getItem('frontUserid'));
								crossrefid=obj['id'];
								crossoptnum=localStorage.getItem('statusColumnName');
								crossoptnum=crossoptnum.replace(/\[/,"").replace(/\]/,"");
							}
						}
					}
					if(crossrefid && crossuserid) {
						this.ruleForm.crossuserid=crossuserid;
						this.ruleForm.crossrefid=crossrefid;
						var params = {
							page: 1,
							limit: 10,
							crossuserid:crossuserid,
							crossrefid:crossrefid,
						}
						this.$http.get('huodongpingjia/list', {
							params: params
						}).then(res => {
							if(res.data.data.total>=crossoptnum) {
								this.$message({
									message: localStorage.getItem('tips'),
									type: 'error',
									duration: 1500,
								});
								return false;
							} else {
								// 跨表计算


								this.$http.post(`huodongpingjia/${this.ruleForm.id?'update':this.centerType?'save':'add'}`, this.ruleForm).then(res => {
									if (res.data.code == 0) {
										this.$message({
											message: '操作成功',
											type: 'success',
											duration: 1500,
											onClose: () => {
												this.$router.go(-1);
											}
										});
									} else {
										this.$message({
											message: res.data.msg,
											type: 'error',
											duration: 1500
										});
									}
								});
							}
						});
					} else {


						this.$http.post(`huodongpingjia/${this.ruleForm.id?'update':this.centerType?'save':'add'}`, this.ruleForm).then(res => {
							if (res.data.code == 0) {
								this.$message({
									message: '操作成功',
									type: 'success',
									duration: 1500,
									onClose: () => {
										this.$router.go(-1);
									}
								});
							} else {
								this.$message({
									message: res.data.msg,
									type: 'error',
									duration: 1500
								});
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
			this.$router.go(-1);
		},
      huodongtupianUploadChange(fileUrls) {
          this.ruleForm.huodongtupian = fileUrls.replace(new RegExp(this.$config.baseUrl,"g"),"");
      },
    }
  };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.el-date-editor.el-input {
		width: auto;
	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__label {
	  padding: 0 10px 0 0;
	  color: #666;
	  font-weight: 500;
	  width: 80px;
	  font-size: 14px;
	  line-height: 40px;
	  text-align: right;
	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__content {
	  margin-left: 80px;
	}
	
	.add-update-preview .el-input /deep/ .el-input__inner {
	  border: 1px solid #ddd;
	  padding: 0 12px;
	  color: #666;
	  font-size: 14px;
	  border-color: #1abc9e30;
	  border-radius: 0px;
	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  outline: none;
	  background: none;
	  width: 400px;
	  border-width: 0 0 1px;
	  border-style: solid;
	  height: 40px;
	}
	.add-update-preview .el-input-number /deep/ .el-input__inner {
		text-align: left;
	  border: 1px solid #ddd;
	  padding: 0 12px;
	  color: #666;
	  font-size: 14px;
	  border-color: #1abc9e30;
	  border-radius: 0px;
	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  outline: none;
	  background: none;
	  width: 400px;
	  border-width: 0 0 1px;
	  border-style: solid;
	  height: 40px;
	}
	.add-update-preview .el-input-number /deep/ .el-input-number__decrease {
		display: none;
	}
	.add-update-preview .el-input-number /deep/ .el-input-number__increase {
		display: none;
	}
	
	.add-update-preview .el-select /deep/ .el-input__inner {
	  border-radius: 0px;
	  padding: 0 10px;
	  color: #666;
	  background: none;
	  width: 200px;
	  font-size: 14px;
	  border-color: #1abc9e30;
	  border-width: 0 0 1px;
	  border-style: solid;
	  height: 40px;
	}
	
	.add-update-preview .el-date-editor /deep/ .el-input__inner {
	  border-radius: 0px;
	  padding: 0 10px 0 30px;
	  color: #666;
	  background: none;
	  width: 200px;
	  font-size: 14px;
	  border-color: #1abc9e30;
	  border-width: 0 0 1px;
	  border-style: solid;
	  height: 40px;
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
	  cursor: pointer;
	  border-radius: 0px;
	  color: #1abc9e60;
	  background: none;
	  width: 200px;
	  font-size: 32px;
	  border-color: #1abc9e30;
	  border-width: 0 0 1px;
	  line-height: 100px;
	  border-style: solid;
	  text-align: center;
	  height: 100px;
	}
	
	.add-update-preview /deep/ .el-upload-list .el-upload-list__item {
	  cursor: pointer;
	  border-radius: 0px;
	  color: #1abc9e60;
	  background: none;
	  width: 200px;
	  font-size: 32px;
	  border-color: #1abc9e30;
	  border-width: 0 0 1px;
	  line-height: 100px;
	  border-style: solid;
	  text-align: center;
	  height: 100px;
	}
	
	.add-update-preview /deep/ .el-upload .el-icon-plus {
	  cursor: pointer;
	  border-radius: 0px;
	  color: #1abc9e60;
	  background: none;
	  width: 200px;
	  font-size: 32px;
	  border-color: #1abc9e30;
	  border-width: 0 0 1px;
	  line-height: 100px;
	  border-style: solid;
	  text-align: center;
	  height: 100px;
	}
	
	.add-update-preview .el-textarea /deep/ .el-textarea__inner {
	  border: 1px solid #1abc9e30;
	  border-radius: 0px;
	  padding: 12px;
	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  outline: none;
	  color: #666;
	  background: none;
	  width: 400px;
	  font-size: 14px;
	  height: 120px;
	}
</style>
