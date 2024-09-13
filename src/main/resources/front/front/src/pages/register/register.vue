<template>
	<div>

	<div class="container" :style='{"minHeight":"100vh","alignItems":"center","background":"url(http://codegen.caihongy.cn/20240521/fbedba929b084920ae5673f3abb6cd49.png)","display":"flex","width":"100%","backgroundSize":"cover","backgroundPosition":"center center","backgroundRepeat":"no-repeat","justifyContent":"center"}'>
        <el-form class='rgs-form' v-if="pageFlag=='security1'" :style='{"padding":"20px 0","margin":"120px auto 60px","borderRadius":"12px","background":"#fff","width":"35vw","position":"relative","height":"auto"}'>
			<div v-if="true" :style='{"margin":"20px auto 10px","color":"#fff","top":"-110px","textAlign":"center","width":"100%","letterSpacing":"2px","lineHeight":"44px","fontSize":"32px","position":"absolute"}'>找回密码</p></div>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' prop="username">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","background":"none","width":"130px","lineHeight":"36px","fontSize":"14px","minWidth":"80px"}'>账号：</div>
				<el-input v-model="forgetForm.username" placeholder="请您输入账号" />
			</el-form-item>
			<el-button :style='{"border":"0","cursor":"pointer","padding":"0 10px","margin":"20px auto 5px","outline":"none","color":"#fff","borderRadius":"4px","background":"#1abc9e","display":"block","width":"80%","fontSize":"16px","height":"44px"}' type="primary" @click="getSecurity()">下一步</el-button>
			<router-link :style='{"cursor":"pointer","padding":"0 10%","margin":"0 0 40px","color":"rgba(159, 159, 159, 1)","display":"inline-block","lineHeight":"1","fontSize":"14px","textDecoration":"none"}' to="/login">已有账户登录</router-link>
        </el-form>
		<el-form class='rgs-form' v-if="pageFlag=='security2'" :style='{"padding":"20px 0","margin":"120px auto 60px","borderRadius":"12px","background":"#fff","width":"35vw","position":"relative","height":"auto"}'>
			<div v-if="true" :style='{"margin":"20px auto 10px","color":"#fff","top":"-110px","textAlign":"center","width":"100%","letterSpacing":"2px","lineHeight":"44px","fontSize":"32px","position":"absolute"}'>找回密码</p></div>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' prop="pquestion">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","background":"none","width":"130px","lineHeight":"36px","fontSize":"14px","minWidth":"80px"}'>密保问题：</div>
				<el-input readonly v-model="registerForm.pquestion" placeholder="密保问题" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' prop="myanswer">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","background":"none","width":"130px","lineHeight":"36px","fontSize":"14px","minWidth":"80px"}'>密保答案：</div>
				<el-input v-model="registerForm.myanswer" placeholder="请您输入密保答案" />
			</el-form-item>
			<el-button :style='{"border":"0","cursor":"pointer","padding":"0 10px","margin":"20px auto 5px","outline":"none","color":"#fff","borderRadius":"4px","background":"#1abc9e","display":"block","width":"80%","fontSize":"16px","height":"44px"}' type="primary" @click="validateSecurity()">下一步</el-button>
			<router-link :style='{"cursor":"pointer","padding":"0 10%","margin":"0 0 40px","color":"rgba(159, 159, 159, 1)","display":"inline-block","lineHeight":"1","fontSize":"14px","textDecoration":"none"}' to="/login">已有账户登录</router-link>
		</el-form>
        <el-form class='rgs-form' v-if="pageFlag=='security3'" :style='{"padding":"20px 0","margin":"120px auto 60px","borderRadius":"12px","background":"#fff","width":"35vw","position":"relative","height":"auto"}'>
			<div v-if="true" :style='{"margin":"20px auto 10px","color":"#fff","top":"-110px","textAlign":"center","width":"100%","letterSpacing":"2px","lineHeight":"44px","fontSize":"32px","position":"absolute"}'>找回密码</p></div>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' prop="newpassword">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","background":"none","width":"130px","lineHeight":"36px","fontSize":"14px","minWidth":"80px"}'>新密码：</div>
				<el-input v-model="registerForm.newpassword" type="password" placeholder="请您输入新密码" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' prop="repassword">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","background":"none","width":"130px","lineHeight":"36px","fontSize":"14px","minWidth":"80px"}'>确认密码：</div>
				<el-input v-model="registerForm.repassword" type="password" placeholder="请您确认密码" />
			</el-form-item>
			<el-button :style='{"border":"0","cursor":"pointer","padding":"0 10px","margin":"20px auto 5px","outline":"none","color":"#fff","borderRadius":"4px","background":"#1abc9e","display":"block","width":"80%","fontSize":"16px","height":"44px"}' type="primary" @click="updatePassword()">修改密码</el-button>
			<router-link :style='{"cursor":"pointer","padding":"0 10%","margin":"0 0 40px","color":"rgba(159, 159, 159, 1)","display":"inline-block","lineHeight":"1","fontSize":"14px","textDecoration":"none"}' to="/login">已有账户登录</router-link>
        </el-form>
		<el-form class='rgs-form' v-if="pageFlag=='register'" :style='{"padding":"20px 0","margin":"120px auto 60px","borderRadius":"12px","background":"#fff","width":"35vw","position":"relative","height":"auto"}' ref="registerForm" :model="registerForm" :rules="rules">
			<div v-if="false" :style='{"width":"100%","margin":"0 0 10px 0","lineHeight":"44px","fontSize":"20px","color":"rgba(64, 158, 255, 1)","textAlign":"center"}'>USER / REGISTER</div>
			<div v-if="true" :style='{"margin":"20px auto 10px","color":"#fff","top":"-110px","textAlign":"center","width":"100%","letterSpacing":"2px","lineHeight":"44px","fontSize":"32px","position":"absolute"}'>基于JAVA的高校社团管理系统的设计与实现注册</p></div>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='yonghu'" prop="yonghuzhanghao">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","background":"none","width":"130px","lineHeight":"36px","fontSize":"14px","minWidth":"80px"}' :class="changeRules('yonghuzhanghao')?'required':''">用户账号：</div>
				<el-input v-model="registerForm.yonghuzhanghao"  placeholder="请输入用户账号" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='yonghu'" prop="mima">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","background":"none","width":"130px","lineHeight":"36px","fontSize":"14px","minWidth":"80px"}' :class="changeRules('mima')?'required':''">密码：</div>
				<el-input v-model="registerForm.mima" type="password" placeholder="请输入密码" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='yonghu'" prop="mima2">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","background":"none","width":"130px","lineHeight":"36px","fontSize":"14px","minWidth":"80px"}' :class="changeRules('mima')?'required':''">确认密码：</div>
				<el-input v-model="registerForm.mima2" type="password" placeholder="请再次输入密码" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='yonghu'" prop="yonghuxingming">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","background":"none","width":"130px","lineHeight":"36px","fontSize":"14px","minWidth":"80px"}' :class="changeRules('yonghuxingming')?'required':''">用户姓名：</div>
				<el-input v-model="registerForm.yonghuxingming"  placeholder="请输入用户姓名" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='yonghu'" prop="touxiang">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","background":"none","width":"130px","lineHeight":"36px","fontSize":"14px","minWidth":"80px"}' :class="changeRules('touxiang')?'required':''">照片：</div>
                <file-upload
					tip="点击上传照片"
					action="file/upload"
					:limit="1"
					:multiple="true"
					:fileUrls="registerForm.touxiang?registerForm.touxiang:''"
					@change="yonghutouxiangUploadChange"
				></file-upload>
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='yonghu'" prop="xingbie">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","background":"none","width":"130px","lineHeight":"36px","fontSize":"14px","minWidth":"80px"}' :class="changeRules('xingbie')?'required':''">性别：</div>
                <el-select v-model="registerForm.xingbie" placeholder="请选择性别" >
                  <el-option
                      v-for="(item,index) in yonghuxingbieOptions"
                      :key="index"
                      :label="item"
                      :value="item">
                  </el-option>
                </el-select>
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='yonghu'" prop="nianling">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","background":"none","width":"130px","lineHeight":"36px","fontSize":"14px","minWidth":"80px"}' :class="changeRules('nianling')?'required':''">年龄：</div>
				<el-input v-model.number="registerForm.nianling"  placeholder="请输入年龄" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='yonghu'" prop="zhuanye">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","background":"none","width":"130px","lineHeight":"36px","fontSize":"14px","minWidth":"80px"}' :class="changeRules('zhuanye')?'required':''">专业：</div>
				<el-input v-model="registerForm.zhuanye"  placeholder="请输入专业" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='yonghu'" prop="shoujihao">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","background":"none","width":"130px","lineHeight":"36px","fontSize":"14px","minWidth":"80px"}' :class="changeRules('shoujihao')?'required':''">手机号：</div>
				<el-input v-model="registerForm.shoujihao"  placeholder="请输入手机号" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='yonghu'" prop="xueyuan">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","background":"none","width":"130px","lineHeight":"36px","fontSize":"14px","minWidth":"80px"}' :class="changeRules('xueyuan')?'required':''">学院：</div>
				<el-input v-model="registerForm.xueyuan"  placeholder="请输入学院" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='yonghu'" prop="nianji">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","background":"none","width":"130px","lineHeight":"36px","fontSize":"14px","minWidth":"80px"}' :class="changeRules('nianji')?'required':''">年级：</div>
				<el-input v-model="registerForm.nianji"  placeholder="请输入年级" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='yonghu'" prop="banji">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","background":"none","width":"130px","lineHeight":"36px","fontSize":"14px","minWidth":"80px"}' :class="changeRules('banji')?'required':''">班级：</div>
				<el-input v-model="registerForm.banji"  placeholder="请输入班级" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='yonghu'" prop="pquestion">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","background":"none","width":"130px","lineHeight":"36px","fontSize":"14px","minWidth":"80px"}' :class="changeRules('pquestion')?'required':''">密保问题：</div>
				<el-input v-model="registerForm.pquestion"  placeholder="请输入密保问题" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='yonghu'" prop="panswer">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","background":"none","width":"130px","lineHeight":"36px","fontSize":"14px","minWidth":"80px"}' :class="changeRules('panswer')?'required':''">密保答案：</div>
				<el-input v-model="registerForm.panswer"  placeholder="请输入密保答案" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='shetuanfuzeren'" prop="fuzerenzhanghao">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","background":"none","width":"130px","lineHeight":"36px","fontSize":"14px","minWidth":"80px"}' :class="changeRules('fuzerenzhanghao')?'required':''">负责人账号：</div>
				<el-input v-model="registerForm.fuzerenzhanghao"  placeholder="请输入负责人账号" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='shetuanfuzeren'" prop="mima">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","background":"none","width":"130px","lineHeight":"36px","fontSize":"14px","minWidth":"80px"}' :class="changeRules('mima')?'required':''">密码：</div>
				<el-input v-model="registerForm.mima" type="password" placeholder="请输入密码" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='shetuanfuzeren'" prop="mima2">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","background":"none","width":"130px","lineHeight":"36px","fontSize":"14px","minWidth":"80px"}' :class="changeRules('mima')?'required':''">确认密码：</div>
				<el-input v-model="registerForm.mima2" type="password" placeholder="请再次输入密码" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='shetuanfuzeren'" prop="fuzerenxingming">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","background":"none","width":"130px","lineHeight":"36px","fontSize":"14px","minWidth":"80px"}' :class="changeRules('fuzerenxingming')?'required':''">负责人姓名：</div>
				<el-input v-model="registerForm.fuzerenxingming"  placeholder="请输入负责人姓名" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='shetuanfuzeren'" prop="xingbie">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","background":"none","width":"130px","lineHeight":"36px","fontSize":"14px","minWidth":"80px"}' :class="changeRules('xingbie')?'required':''">性别：</div>
                <el-select v-model="registerForm.xingbie" placeholder="请选择性别" >
                  <el-option
                      v-for="(item,index) in shetuanfuzerenxingbieOptions"
                      :key="index"
                      :label="item"
                      :value="item">
                  </el-option>
                </el-select>
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='shetuanfuzeren'" prop="nianling">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","background":"none","width":"130px","lineHeight":"36px","fontSize":"14px","minWidth":"80px"}' :class="changeRules('nianling')?'required':''">年龄：</div>
				<el-input v-model="registerForm.nianling"  placeholder="请输入年龄" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='shetuanfuzeren'" prop="shoujihao">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","background":"none","width":"130px","lineHeight":"36px","fontSize":"14px","minWidth":"80px"}' :class="changeRules('shoujihao')?'required':''">手机号：</div>
				<el-input v-model="registerForm.shoujihao"  placeholder="请输入手机号" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='shetuanfuzeren'" prop="shetuanbianhao">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","background":"none","width":"130px","lineHeight":"36px","fontSize":"14px","minWidth":"80px"}' :class="changeRules('shetuanbianhao')?'required':''">社团编号：</div>
				<el-input v-model="registerForm.shetuanbianhao"  placeholder="请输入社团编号" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='shetuanfuzeren'" prop="shetuanmingcheng">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","background":"none","width":"130px","lineHeight":"36px","fontSize":"14px","minWidth":"80px"}' :class="changeRules('shetuanmingcheng')?'required':''">社团名称：</div>
				<el-input v-model="registerForm.shetuanmingcheng"  placeholder="请输入社团名称" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='shetuanfuzeren'" prop="touxiang">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","background":"none","width":"130px","lineHeight":"36px","fontSize":"14px","minWidth":"80px"}' :class="changeRules('touxiang')?'required':''">头像：</div>
                <file-upload
					tip="点击上传头像"
					action="file/upload"
					:limit="1"
					:multiple="true"
					:fileUrls="registerForm.touxiang?registerForm.touxiang:''"
					@change="shetuanfuzerentouxiangUploadChange"
				></file-upload>
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='shetuanfuzeren'" prop="pquestion">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","background":"none","width":"130px","lineHeight":"36px","fontSize":"14px","minWidth":"80px"}' :class="changeRules('pquestion')?'required':''">密保问题：</div>
				<el-input v-model="registerForm.pquestion"  placeholder="请输入密保问题" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='shetuanfuzeren'" prop="panswer">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","background":"none","width":"130px","lineHeight":"36px","fontSize":"14px","minWidth":"80px"}' :class="changeRules('panswer')?'required':''">密保答案：</div>
				<el-input v-model="registerForm.panswer"  placeholder="请输入密保答案" />
			</el-form-item>
			<el-button :style='{"border":"0","cursor":"pointer","padding":"0 10px","margin":"20px auto 5px","outline":"none","color":"#fff","borderRadius":"4px","background":"#1abc9e","display":"block","width":"80%","fontSize":"16px","height":"44px"}' type="primary" @click="submitForm('registerForm')">注册</el-button>
			<el-button :style='{"border":"0","cursor":"pointer","padding":"0 10px","margin":"0px auto 0px","color":"#666","textAlign":"right","display":"block","outline":"none","borderRadius":"8px","background":"none","width":"80%","fontSize":"16px","height":"44px"}' @click="resetForm('registerForm')">重置</el-button>
			<router-link :style='{"cursor":"pointer","padding":"0 10%","margin":"0 0 40px","color":"rgba(159, 159, 159, 1)","display":"inline-block","lineHeight":"1","fontSize":"14px","textDecoration":"none"}' to="/login">已有账户登录</router-link>
			<div class="idea1" :style='{"width":"100%","background":"red","display":"none","height":"40px"}'></div>
			<div class="idea2" :style='{"width":"100%","background":"blue","display":"none","height":"40px"}'></div>
		</el-form>
    </div>
  </div>
</div>
</template>

<script>

export default {
    //数据集合
    data() {
		return {
            pageFlag : '',
			tableName: '',
			registerForm: {},
			forgetForm: {},
			rules: {},
			requiredRules: {},
            yonghuxingbieOptions: [],
            shetuanfuzerenxingbieOptions: [],
		}
    },
	mounted() {
		if(this.$route.query.pageFlag=='register'){
			this.tableName = this.$route.query.role;
			if(this.tableName=='yonghu'){
				this.registerForm = {
					yonghuzhanghao: '',
					mima: '',
					mima2: '',
					yonghuxingming: '',
					touxiang: '',
					xingbie: '',
					nianling: '',
					zhuanye: '',
					shoujihao: '',
					xueyuan: '',
					nianji: '',
					banji: '',
					pquestion: '',
					panswer: '',
				}
			}
			if(this.tableName=='shetuanfuzeren'){
				this.registerForm = {
					fuzerenzhanghao: '',
					mima: '',
					mima2: '',
					fuzerenxingming: '',
					xingbie: '',
					nianling: '',
					shoujihao: '',
					shetuanbianhao: '',
					shetuanmingcheng: '',
					touxiang: '',
					pquestion: '',
					panswer: '',
				}
			}
			if ('yonghu' == this.tableName) {
				this.requiredRules.yonghuzhanghao = [{ required: true, message: '请输入用户账号', trigger: 'blur' }]
			}
			if ('yonghu' == this.tableName) {
				this.requiredRules.mima = [{ required: true, message: '请输入密码', trigger: 'blur' }]
			}
			if ('yonghu' == this.tableName) {
				this.requiredRules.yonghuxingming = [{ required: true, message: '请输入用户姓名', trigger: 'blur' }]
			}
			if ('shetuanfuzeren' == this.tableName) {
				this.requiredRules.fuzerenzhanghao = [{ required: true, message: '请输入负责人账号', trigger: 'blur' }]
			}
			if ('shetuanfuzeren' == this.tableName) {
				this.requiredRules.mima = [{ required: true, message: '请输入密码', trigger: 'blur' }]
			}
			if ('shetuanfuzeren' == this.tableName) {
				this.requiredRules.fuzerenxingming = [{ required: true, message: '请输入负责人姓名', trigger: 'blur' }]
			}
			if ('shetuanfuzeren' == this.tableName) {
				this.requiredRules.shoujihao = [{ required: true, message: '请输入手机号', trigger: 'blur' }]
			}
		}
	},
    created() {
		this.pageFlag = this.$route.query.pageFlag;
		if(this.$route.query.pageFlag=='register'){
		  if ('yonghu' == this.tableName) {
			this.rules.yonghuzhanghao = [{ required: true, message: '请输入用户账号', trigger: 'blur' }];
		  }
		  if ('yonghu' == this.tableName) {
			this.rules.mima = [{ required: true, message: '请输入密码', trigger: 'blur' }];
		  }
		  if ('yonghu' == this.tableName) {
			this.rules.yonghuxingming = [{ required: true, message: '请输入用户姓名', trigger: 'blur' }];
		  }
			this.yonghuxingbieOptions = "男,女".split(',');
		  if ('yonghu' == this.tableName) {
			this.rules.nianling = [{ required: true, validator: this.$validate.isIntNumer, trigger: 'blur' }];
		  }
		  if ('yonghu' == this.tableName) {
			this.rules.shoujihao = [{ required: true, validator: this.$validate.isMobile, trigger: 'blur' }];
		  }
		  if ('shetuanfuzeren' == this.tableName) {
			this.rules.fuzerenzhanghao = [{ required: true, message: '请输入负责人账号', trigger: 'blur' }];
		  }
		  if ('shetuanfuzeren' == this.tableName) {
			this.rules.mima = [{ required: true, message: '请输入密码', trigger: 'blur' }];
		  }
		  if ('shetuanfuzeren' == this.tableName) {
			this.rules.fuzerenxingming = [{ required: true, message: '请输入负责人姓名', trigger: 'blur' }];
		  }
			this.shetuanfuzerenxingbieOptions = "男,女".split(',');
		  if ('shetuanfuzeren' == this.tableName) {
			this.rules.shoujihao = [{ required: true, validator: this.$validate.isMobileNotNull, trigger: 'blur' }];
		  }
		}
    },
    //方法集合
    methods: {
		changeRules(name){
			if(this.requiredRules[name]){
				return true
			}
			return false
		},
      // 获取uuid
      getUUID () {
        return new Date().getTime();
      },
        // 下二随
      yonghutouxiangUploadChange(fileUrls) {
          this.registerForm.touxiang = fileUrls.replace(new RegExp(this.$config.baseUrl,"g"),"");
      },
      shetuanfuzerentouxiangUploadChange(fileUrls) {
          this.registerForm.touxiang = fileUrls.replace(new RegExp(this.$config.baseUrl,"g"),"");
      },

        // 多级联动参数


//获取密保问题
        getSecurity(){
            this.tableName = 'yonghu'
            if(!this.tableName) {
                this.$message.error("请选择角色");
                return false
            }
            if(!this.forgetForm.username){
                this.$message.error("请输入账号");
                return false
            }
            this.$http({
                url: this.tableName+`/security?username=` + this.forgetForm.username,
                method: "get",
            }).then(({
                data
            }) => {
                if (data.data && data.code === 0) {
                    this.registerForm = data.data;
                    this.pageFlag="security2"
                } else {
                    if(!data.data) {
                        this.$message.error("用户不存在");
                    } else {
                        this.$message.error(data.msg);
                    }
                }
            });
        },
        //验证密保问题
        validateSecurity(){
            let that = this
            if(this.registerForm.panswer!=this.registerForm.myanswer){
                this.$message.error("答案输入不正确");
                return false
            }
            this.$message.success("答案正确");
            setTimeout(()=>{
                this.pageFlag="security3";
            },1000)
        },
        // 修改密码
        updatePassword() {
            if (!this.registerForm.newpassword) {
                this.$message.error("请输入新密码");
                return;
            }
            if (this.registerForm.newpassword != this.registerForm.repassword) {
                this.$message.error("两次密码输入不一致");
                return;
            }
            this.registerForm.mima = this.registerForm.newpassword;
            this.registerForm.password = this.registerForm.newpassword;
            this.$http.post(this.tableName+`/update`, this.registerForm).then(res => {
              if (res.data.code === 0) {
                this.$message({
                    message: "密码修改成功",
                    type: "success",
                    duration: 1500,
                    onClose: () => {
                      this.$router.push('/login');
                    }
                });
              } else {
                this.$message.error(res.data.msg);
              }
            });
        },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            var url=this.tableName+"/register";
				if((!this.registerForm.yonghuzhanghao) && `yonghu` == this.tableName){
					this.$message.error(`用户账号不能为空`);
					return
				}
               if(`yonghu` == this.tableName && this.registerForm.mima!=this.registerForm.mima2) {
                this.$message.error(`两次密码输入不一致`);
                return
               }
				if((!this.registerForm.mima) && `yonghu` == this.tableName){
					this.$message.error(`密码不能为空`);
					return
				}
				if((!this.registerForm.yonghuxingming) && `yonghu` == this.tableName){
					this.$message.error(`用户姓名不能为空`);
					return
				}
				if(`yonghu` == this.tableName && this.registerForm.nianling &&(!this.$validate.isIntNumer2(this.registerForm.nianling))){
					this.$message.error(`年龄应输入整数`);
					return
				}
					if(`yonghu` == this.tableName && this.registerForm.shoujihao &&(!this.$validate.isMobile2(this.registerForm.shoujihao))){
						this.$message.error(`手机号应输入手机格式`);
						return
					}
				if(`yonghu` == this.tableName && this.registerForm.pquestion==''){
					this.$message.error(`密保问题不能为空`);
				    return
				}
				if(`yonghu` == this.tableName && this.registerForm.panswer==''){
					this.$message.error(`密保答案不能为空`);
				    return
				}
				if((!this.registerForm.fuzerenzhanghao) && `shetuanfuzeren` == this.tableName){
					this.$message.error(`负责人账号不能为空`);
					return
				}
               if(`shetuanfuzeren` == this.tableName && this.registerForm.mima!=this.registerForm.mima2) {
                this.$message.error(`两次密码输入不一致`);
                return
               }
				if((!this.registerForm.mima) && `shetuanfuzeren` == this.tableName){
					this.$message.error(`密码不能为空`);
					return
				}
				if((!this.registerForm.fuzerenxingming) && `shetuanfuzeren` == this.tableName){
					this.$message.error(`负责人姓名不能为空`);
					return
				}
				if((!this.registerForm.shoujihao) && `shetuanfuzeren` == this.tableName){
					this.$message.error(`手机号不能为空`);
					return
				}
					if(`shetuanfuzeren` == this.tableName && this.registerForm.shoujihao &&(!this.$validate.isMobile2(this.registerForm.shoujihao))){
						this.$message.error(`手机号应输入手机格式`);
						return
					}
				if(`shetuanfuzeren` == this.tableName && this.registerForm.pquestion==''){
					this.$message.error(`密保问题不能为空`);
				    return
				}
				if(`shetuanfuzeren` == this.tableName && this.registerForm.panswer==''){
					this.$message.error(`密保答案不能为空`);
				    return
				}
            this.$http.post(url, this.registerForm).then(res => {
              if (res.data.code === 0) {
                this.$message({
                  message: '注册成功',
                  type: 'success',
                  duration: 1500,
                  onClose: () => {
                    this.$router.push('/login');
                  }
                });
              } else {
                this.$message.error(res.data.msg);
              }
            });
          } else {
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.container {
		position: relative;
		background: url(http://codegen.caihongy.cn/20240521/fbedba929b084920ae5673f3abb6cd49.png);
		
		.el-input {
		  width: auto;
		}
		
		.el-date-editor.el-input {
			width: auto;
		}
		
		.el-form-item /deep/ .el-form-item__content {
						display: flex;
						flex-wrap: wrap;
					}
		
		.rgs-form .el-input /deep/ .el-input__inner {
						border-radius: 0px;
						padding: 0 10px;
						outline: none;
						color: #666;
						width: auto;
						font-size: 14px;
						border-color: #1abc9e30;
						border-width: 0 0 1px;
						border-style: solid;
						min-width: 300px;
						height: 40px;
					}
		
		.rgs-form .el-select /deep/ .el-input__inner {
						border-radius: 0px;
						padding: 0 10px;
						outline: none;
						color: #666;
						width: auto;
						font-size: 14px;
						border-color: #1abc9e30;
						border-width: 0 0 1px;
						border-style: solid;
						min-width: 300px;
						height: 40px;
					}
		
		.rgs-form .el-date-editor /deep/ .el-input__inner {
						border-radius: 0px;
						padding: 0 10px 0 30px;
						outline: none;
						color: #666;
						width: auto;
						font-size: 14px;
						border-color: #1abc9e30;
						border-width: 0 0 1px;
						border-style: solid;
						min-width: 300px;
						height: 40px;
					}
		
		.rgs-form .el-date-editor /deep/ .el-input__inner {
						border-radius: 0px;
						padding: 0 10px 0 30px;
						outline: none;
						color: #666;
						width: auto;
						font-size: 14px;
						border-color: #1abc9e30;
						border-width: 0 0 1px;
						border-style: solid;
						min-width: 300px;
						height: 40px;
					}
		
		.rgs-form /deep/ .el-upload--picture-card {
			background: transparent;
			border: 0;
			border-radius: 0;
			width: auto;
			height: auto;
			line-height: initial;
			vertical-align: middle;
		}
		
		.rgs-form /deep/ .upload .upload-img {
		  		  cursor: pointer;
		  		  border-radius: 0px;
		  		  color: #1abc9e80;
		  		  width: 160px;
		  		  font-size: 32px;
		  		  border-color: #1abc9e30;
		  		  border-width: 0 0 1px;
		  		  line-height: 80px;
		  		  border-style: solid;
		  		  text-align: center;
		  		  height: 80px;
		  		}
		
		.rgs-form /deep/ .el-upload-list .el-upload-list__item {
		  		  cursor: pointer;
		  		  border-radius: 0px;
		  		  color: #1abc9e80;
		  		  width: 160px;
		  		  font-size: 32px;
		  		  border-color: #1abc9e30;
		  		  border-width: 0 0 1px;
		  		  line-height: 80px;
		  		  border-style: solid;
		  		  text-align: center;
		  		  height: 80px;
		  		}
		
		.rgs-form /deep/ .el-upload .el-icon-plus {
		  		  cursor: pointer;
		  		  border-radius: 0px;
		  		  color: #1abc9e80;
		  		  width: 160px;
		  		  font-size: 32px;
		  		  border-color: #1abc9e30;
		  		  border-width: 0 0 1px;
		  		  line-height: 80px;
		  		  border-style: solid;
		  		  text-align: center;
		  		  height: 80px;
		  		}
	}
	.required {
		position: relative;
	}
	.required::after{
				color: red;
				left: 120px;
				position: absolute;
				content: "*";
				order: 2;
			}
</style>
