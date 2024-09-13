<template>
	<div>
		<div class="container" :style='{"minHeight":"100vh","alignItems":"center","background":"url(http://codegen.caihongy.cn/20240521/fbedba929b084920ae5673f3abb6cd49.png)","display":"flex","width":"100%","backgroundSize":"cover","backgroundPosition":"center center","backgroundRepeat":"no-repeat","justifyContent":"center"}'>
			<el-form v-if="pageFlag=='security1'" :style='{"padding":"20px","margin":"40px 0 40px 45vw","borderRadius":"20px","textAlign":"center","background":"#fff","width":"40vw","fontSize":"14px","position":"relative","height":"auto"}' class="rgs-form" :model="forgetForm">
				<div v-if="true" :style='{"padding":"0px","margin":"20px auto 20px","borderColor":"#eee","color":"#333","background":"none","borderWidth":"0px","display":"inline-block","width":"100%","lineHeight":"40px","fontSize":"22px","borderStyle":"solid","fontWeight":"600"}' class="title">基于JAVA的高校社团管理系统的设计与实现找回密码</div>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 10px","textAlign":"left","width":"50%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item">
					<div v-if="true" :style='{"padding":"0 8px 0 0","color":"#666","textAlign":"right","left":"-180px","width":"180px","lineHeight":"40px","fontSize":"14px","position":"absolute"}' class="lable">账号</div>
					<el-input v-model="forgetForm.username" autocomplete="off" placeholder="请您输入账号" />
				</el-form-item>
				<button :style='{"border":"0px solid #fff","cursor":"pointer","padding":"0 0 0 30px","margin":"30px auto 5px","color":"#fff","borderRadius":"50px","background":"#19aa8d","display":"block","width":"50%","letterSpacing":"4px","fontSize":"20px","height":"40px"}' type="button" class="r-btn" @click="getSecurity()">下一步</button>
				<div :style='{"cursor":"pointer","padding":"0","margin":"20px 0","color":"rgba(159, 159, 159, 1)","textAlign":"right","display":"inline-block","width":"50%","lineHeight":"1","fontSize":"14px"}' class="r-login" @click="close()">已有账号，直接登录</div>
            </el-form>
			<el-form v-if="pageFlag=='security2'" :style='{"padding":"20px","margin":"40px 0 40px 45vw","borderRadius":"20px","textAlign":"center","background":"#fff","width":"40vw","fontSize":"14px","position":"relative","height":"auto"}' class="rgs-form" :model="ruleForm">
				<div v-if="true" :style='{"padding":"0px","margin":"20px auto 20px","borderColor":"#eee","color":"#333","background":"none","borderWidth":"0px","display":"inline-block","width":"100%","lineHeight":"40px","fontSize":"22px","borderStyle":"solid","fontWeight":"600"}' class="title">基于JAVA的高校社团管理系统的设计与实现密码重置</div>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 10px","textAlign":"left","width":"50%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item">
					<div v-if="true" :style='{"padding":"0 8px 0 0","color":"#666","textAlign":"right","left":"-180px","width":"180px","lineHeight":"40px","fontSize":"14px","position":"absolute"}' class="lable">密保问题</div>
					<el-input v-model="ruleForm.pquestion" readOnly autocomplete="off" placeholder="密保问题" />
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 10px","textAlign":"left","width":"50%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item">
					<div v-if="true" :style='{"padding":"0 8px 0 0","color":"#666","textAlign":"right","left":"-180px","width":"180px","lineHeight":"40px","fontSize":"14px","position":"absolute"}' class="lable">密保答案</div>
					<el-input v-model="ruleForm.myanswer" autocomplete="off" placeholder="请您输入密保答案" />
				</el-form-item>
				<button :style='{"border":"0px solid #fff","cursor":"pointer","padding":"0 0 0 30px","margin":"30px auto 5px","color":"#fff","borderRadius":"50px","background":"#19aa8d","display":"block","width":"50%","letterSpacing":"4px","fontSize":"20px","height":"40px"}' type="button" class="r-btn" @click="validateSecurity()">下一步</button>
				<div :style='{"cursor":"pointer","padding":"0","margin":"20px 0","color":"rgba(159, 159, 159, 1)","textAlign":"right","display":"inline-block","width":"50%","lineHeight":"1","fontSize":"14px"}' class="r-login" @click="close()">已有账号，直接登录</div>
            </el-form>
			<el-form v-if="pageFlag=='security3'" :style='{"padding":"20px","margin":"40px 0 40px 45vw","borderRadius":"20px","textAlign":"center","background":"#fff","width":"40vw","fontSize":"14px","position":"relative","height":"auto"}' class="rgs-form" :model="ruleForm">
				<div v-if="true" :style='{"padding":"0px","margin":"20px auto 20px","borderColor":"#eee","color":"#333","background":"none","borderWidth":"0px","display":"inline-block","width":"100%","lineHeight":"40px","fontSize":"22px","borderStyle":"solid","fontWeight":"600"}' class="title">基于JAVA的高校社团管理系统的设计与实现密码重置</div>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 10px","textAlign":"left","width":"50%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item">
					<div v-if="true" :style='{"padding":"0 8px 0 0","color":"#666","textAlign":"right","left":"-180px","width":"180px","lineHeight":"40px","fontSize":"14px","position":"absolute"}' class="lable">新密码</div>
					<el-input v-model="ruleForm.newpassword" autocomplete="off" type="password" placeholder="请您输入新密码" />
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 10px","textAlign":"left","width":"50%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item">
					<div v-if="true" :style='{"padding":"0 8px 0 0","color":"#666","textAlign":"right","left":"-180px","width":"180px","lineHeight":"40px","fontSize":"14px","position":"absolute"}' class="lable">确认密码</div>
					<el-input v-model="ruleForm.repassword" autocomplete="off" type="password" placeholder="请您确认新密码" />
				</el-form-item>
				<button :style='{"border":"0px solid #fff","cursor":"pointer","padding":"0 0 0 30px","margin":"30px auto 5px","color":"#fff","borderRadius":"50px","background":"#19aa8d","display":"block","width":"50%","letterSpacing":"4px","fontSize":"20px","height":"40px"}' type="button" class="r-btn" @click="updatePassword()">修改密码</button>
				<div :style='{"cursor":"pointer","padding":"0","margin":"20px 0","color":"rgba(159, 159, 159, 1)","textAlign":"right","display":"inline-block","width":"50%","lineHeight":"1","fontSize":"14px"}' class="r-login" @click="close()">已有账号，直接登录</div>
            </el-form>
			<el-form v-if="pageFlag=='register'" :style='{"padding":"20px","margin":"40px 0 40px 45vw","borderRadius":"20px","textAlign":"center","background":"#fff","width":"40vw","fontSize":"14px","position":"relative","height":"auto"}' ref="rgsForm" class="rgs-form" :model="rgsForm" :rules="rules">
				<div v-if="true" :style='{"padding":"0px","margin":"20px auto 20px","borderColor":"#eee","color":"#333","background":"none","borderWidth":"0px","display":"inline-block","width":"100%","lineHeight":"40px","fontSize":"22px","borderStyle":"solid","fontWeight":"600"}' class="title">基于JAVA的高校社团管理系统的设计与实现注册</div>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 10px","textAlign":"left","width":"50%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='yonghu'">
					<div v-if="true" :style='{"padding":"0 8px 0 0","color":"#666","textAlign":"right","left":"-180px","width":"180px","lineHeight":"40px","fontSize":"14px","position":"absolute"}' class="lable" :class="changeRules('yonghuzhanghao')?'required':''">用户账号：</div>
					<el-input  v-model="ruleForm.yonghuzhanghao"  autocomplete="off" placeholder="用户账号"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 10px","textAlign":"left","width":"50%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='yonghu'">
					<div v-if="true" :style='{"padding":"0 8px 0 0","color":"#666","textAlign":"right","left":"-180px","width":"180px","lineHeight":"40px","fontSize":"14px","position":"absolute"}' class="lable" :class="changeRules('mima')?'required':''">密码：</div>
					<el-input  v-model="ruleForm.mima"  autocomplete="off" placeholder="密码"  type="password"  />
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 10px","textAlign":"left","width":"50%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='yonghu'">
					<div v-if="true" :style='{"padding":"0 8px 0 0","color":"#666","textAlign":"right","left":"-180px","width":"180px","lineHeight":"40px","fontSize":"14px","position":"absolute"}' class="lable" :class="changeRules('mima')?'required':''">确认密码：</div>
					<el-input  v-model="ruleForm.mima2" autocomplete="off" placeholder="确认密码" type="password" />
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 10px","textAlign":"left","width":"50%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='yonghu'">
					<div v-if="true" :style='{"padding":"0 8px 0 0","color":"#666","textAlign":"right","left":"-180px","width":"180px","lineHeight":"40px","fontSize":"14px","position":"absolute"}' class="lable" :class="changeRules('yonghuxingming')?'required':''">用户姓名：</div>
					<el-input  v-model="ruleForm.yonghuxingming"  autocomplete="off" placeholder="用户姓名"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 10px","textAlign":"left","width":"50%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='yonghu'">
					<div v-if="true" :style='{"padding":"0 8px 0 0","color":"#666","textAlign":"right","left":"-180px","width":"180px","lineHeight":"40px","fontSize":"14px","position":"absolute"}' class="lable" :class="changeRules('touxiang')?'required':''">照片：</div>
                    <file-upload
                        tip="点击上传照片"
                        action="file/upload"
                        :limit="3"
                        :multiple="true"
                        :fileUrls="ruleForm.touxiang?ruleForm.touxiang:''"
                        @change="yonghutouxiangUploadChange"
                    ></file-upload>
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 10px","textAlign":"left","width":"50%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='yonghu'">
					<div v-if="true" :style='{"padding":"0 8px 0 0","color":"#666","textAlign":"right","left":"-180px","width":"180px","lineHeight":"40px","fontSize":"14px","position":"absolute"}' class="lable" :class="changeRules('xingbie')?'required':''">性别：</div>
                    <el-select v-model="ruleForm.xingbie" placeholder="请选择性别" >
                        <el-option
                            v-for="(item,index) in yonghuxingbieOptions"
                            v-bind:key="index"
                            :label="item"
                            :value="item">
                        </el-option>
                    </el-select>
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 10px","textAlign":"left","width":"50%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='yonghu'">
					<div v-if="true" :style='{"padding":"0 8px 0 0","color":"#666","textAlign":"right","left":"-180px","width":"180px","lineHeight":"40px","fontSize":"14px","position":"absolute"}' class="lable" :class="changeRules('nianling')?'required':''">年龄：</div>
					<el-input  v-model.number="ruleForm.nianling"  autocomplete="off" placeholder="年龄"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 10px","textAlign":"left","width":"50%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='yonghu'">
					<div v-if="true" :style='{"padding":"0 8px 0 0","color":"#666","textAlign":"right","left":"-180px","width":"180px","lineHeight":"40px","fontSize":"14px","position":"absolute"}' class="lable" :class="changeRules('zhuanye')?'required':''">专业：</div>
					<el-input  v-model="ruleForm.zhuanye"  autocomplete="off" placeholder="专业"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 10px","textAlign":"left","width":"50%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='yonghu'">
					<div v-if="true" :style='{"padding":"0 8px 0 0","color":"#666","textAlign":"right","left":"-180px","width":"180px","lineHeight":"40px","fontSize":"14px","position":"absolute"}' class="lable" :class="changeRules('shoujihao')?'required':''">手机号：</div>
					<el-input  v-model="ruleForm.shoujihao"  autocomplete="off" placeholder="手机号"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 10px","textAlign":"left","width":"50%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='yonghu'">
					<div v-if="true" :style='{"padding":"0 8px 0 0","color":"#666","textAlign":"right","left":"-180px","width":"180px","lineHeight":"40px","fontSize":"14px","position":"absolute"}' class="lable" :class="changeRules('xueyuan')?'required':''">学院：</div>
					<el-input  v-model="ruleForm.xueyuan"  autocomplete="off" placeholder="学院"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 10px","textAlign":"left","width":"50%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='yonghu'">
					<div v-if="true" :style='{"padding":"0 8px 0 0","color":"#666","textAlign":"right","left":"-180px","width":"180px","lineHeight":"40px","fontSize":"14px","position":"absolute"}' class="lable" :class="changeRules('nianji')?'required':''">年级：</div>
					<el-input  v-model="ruleForm.nianji"  autocomplete="off" placeholder="年级"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 10px","textAlign":"left","width":"50%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='yonghu'">
					<div v-if="true" :style='{"padding":"0 8px 0 0","color":"#666","textAlign":"right","left":"-180px","width":"180px","lineHeight":"40px","fontSize":"14px","position":"absolute"}' class="lable" :class="changeRules('banji')?'required':''">班级：</div>
					<el-input  v-model="ruleForm.banji"  autocomplete="off" placeholder="班级"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 10px","textAlign":"left","width":"50%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='yonghu'">
					<div v-if="true" :style='{"padding":"0 8px 0 0","color":"#666","textAlign":"right","left":"-180px","width":"180px","lineHeight":"40px","fontSize":"14px","position":"absolute"}' class="lable" :class="changeRules('pquestion')?'required':''">密保问题：</div>
					<el-input  v-model="ruleForm.pquestion"  autocomplete="off" placeholder="密保问题"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 10px","textAlign":"left","width":"50%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='yonghu'">
					<div v-if="true" :style='{"padding":"0 8px 0 0","color":"#666","textAlign":"right","left":"-180px","width":"180px","lineHeight":"40px","fontSize":"14px","position":"absolute"}' class="lable" :class="changeRules('panswer')?'required':''">密保答案：</div>
					<el-input  v-model="ruleForm.panswer"  autocomplete="off" placeholder="密保答案"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 10px","textAlign":"left","width":"50%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='shetuanfuzeren'">
					<div v-if="true" :style='{"padding":"0 8px 0 0","color":"#666","textAlign":"right","left":"-180px","width":"180px","lineHeight":"40px","fontSize":"14px","position":"absolute"}' class="lable" :class="changeRules('fuzerenzhanghao')?'required':''">负责人账号：</div>
					<el-input  v-model="ruleForm.fuzerenzhanghao"  autocomplete="off" placeholder="负责人账号"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 10px","textAlign":"left","width":"50%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='shetuanfuzeren'">
					<div v-if="true" :style='{"padding":"0 8px 0 0","color":"#666","textAlign":"right","left":"-180px","width":"180px","lineHeight":"40px","fontSize":"14px","position":"absolute"}' class="lable" :class="changeRules('mima')?'required':''">密码：</div>
					<el-input  v-model="ruleForm.mima"  autocomplete="off" placeholder="密码"  type="password"  />
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 10px","textAlign":"left","width":"50%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='shetuanfuzeren'">
					<div v-if="true" :style='{"padding":"0 8px 0 0","color":"#666","textAlign":"right","left":"-180px","width":"180px","lineHeight":"40px","fontSize":"14px","position":"absolute"}' class="lable" :class="changeRules('mima')?'required':''">确认密码：</div>
					<el-input  v-model="ruleForm.mima2" autocomplete="off" placeholder="确认密码" type="password" />
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 10px","textAlign":"left","width":"50%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='shetuanfuzeren'">
					<div v-if="true" :style='{"padding":"0 8px 0 0","color":"#666","textAlign":"right","left":"-180px","width":"180px","lineHeight":"40px","fontSize":"14px","position":"absolute"}' class="lable" :class="changeRules('fuzerenxingming')?'required':''">负责人姓名：</div>
					<el-input  v-model="ruleForm.fuzerenxingming"  autocomplete="off" placeholder="负责人姓名"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 10px","textAlign":"left","width":"50%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='shetuanfuzeren'">
					<div v-if="true" :style='{"padding":"0 8px 0 0","color":"#666","textAlign":"right","left":"-180px","width":"180px","lineHeight":"40px","fontSize":"14px","position":"absolute"}' class="lable" :class="changeRules('xingbie')?'required':''">性别：</div>
                    <el-select v-model="ruleForm.xingbie" placeholder="请选择性别" >
                        <el-option
                            v-for="(item,index) in shetuanfuzerenxingbieOptions"
                            v-bind:key="index"
                            :label="item"
                            :value="item">
                        </el-option>
                    </el-select>
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 10px","textAlign":"left","width":"50%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='shetuanfuzeren'">
					<div v-if="true" :style='{"padding":"0 8px 0 0","color":"#666","textAlign":"right","left":"-180px","width":"180px","lineHeight":"40px","fontSize":"14px","position":"absolute"}' class="lable" :class="changeRules('nianling')?'required':''">年龄：</div>
					<el-input  v-model="ruleForm.nianling"  autocomplete="off" placeholder="年龄"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 10px","textAlign":"left","width":"50%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='shetuanfuzeren'">
					<div v-if="true" :style='{"padding":"0 8px 0 0","color":"#666","textAlign":"right","left":"-180px","width":"180px","lineHeight":"40px","fontSize":"14px","position":"absolute"}' class="lable" :class="changeRules('shoujihao')?'required':''">手机号：</div>
					<el-input  v-model="ruleForm.shoujihao"  autocomplete="off" placeholder="手机号"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 10px","textAlign":"left","width":"50%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='shetuanfuzeren'">
					<div v-if="true" :style='{"padding":"0 8px 0 0","color":"#666","textAlign":"right","left":"-180px","width":"180px","lineHeight":"40px","fontSize":"14px","position":"absolute"}' class="lable" :class="changeRules('shetuanbianhao')?'required':''">社团编号：</div>
					<el-input  v-model="ruleForm.shetuanbianhao"  autocomplete="off" placeholder="社团编号"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 10px","textAlign":"left","width":"50%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='shetuanfuzeren'">
					<div v-if="true" :style='{"padding":"0 8px 0 0","color":"#666","textAlign":"right","left":"-180px","width":"180px","lineHeight":"40px","fontSize":"14px","position":"absolute"}' class="lable" :class="changeRules('shetuanmingcheng')?'required':''">社团名称：</div>
					<el-input  v-model="ruleForm.shetuanmingcheng"  autocomplete="off" placeholder="社团名称"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 10px","textAlign":"left","width":"50%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='shetuanfuzeren'">
					<div v-if="true" :style='{"padding":"0 8px 0 0","color":"#666","textAlign":"right","left":"-180px","width":"180px","lineHeight":"40px","fontSize":"14px","position":"absolute"}' class="lable" :class="changeRules('touxiang')?'required':''">头像：</div>
                    <file-upload
                        tip="点击上传头像"
                        action="file/upload"
                        :limit="3"
                        :multiple="true"
                        :fileUrls="ruleForm.touxiang?ruleForm.touxiang:''"
                        @change="shetuanfuzerentouxiangUploadChange"
                    ></file-upload>
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 10px","textAlign":"left","width":"50%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='shetuanfuzeren'">
					<div v-if="true" :style='{"padding":"0 8px 0 0","color":"#666","textAlign":"right","left":"-180px","width":"180px","lineHeight":"40px","fontSize":"14px","position":"absolute"}' class="lable" :class="changeRules('pquestion')?'required':''">密保问题：</div>
					<el-input  v-model="ruleForm.pquestion"  autocomplete="off" placeholder="密保问题"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 10px","textAlign":"left","width":"50%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='shetuanfuzeren'">
					<div v-if="true" :style='{"padding":"0 8px 0 0","color":"#666","textAlign":"right","left":"-180px","width":"180px","lineHeight":"40px","fontSize":"14px","position":"absolute"}' class="lable" :class="changeRules('panswer')?'required':''">密保答案：</div>
					<el-input  v-model="ruleForm.panswer"  autocomplete="off" placeholder="密保答案"  type="text"  />
				</el-form-item>
				<button :style='{"border":"0px solid #fff","cursor":"pointer","padding":"0 0 0 30px","margin":"30px auto 5px","color":"#fff","borderRadius":"50px","background":"#19aa8d","display":"block","width":"50%","letterSpacing":"4px","fontSize":"20px","height":"40px"}' type="button" class="r-btn" @click="login()">注册</button>
				<div :style='{"cursor":"pointer","padding":"0","margin":"20px 0","color":"rgba(159, 159, 159, 1)","textAlign":"right","display":"inline-block","width":"50%","lineHeight":"1","fontSize":"14px"}' class="r-login" @click="close()">已有账号，直接登录</div>
			</el-form>
			
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			ruleForm: {
			},
			forgetForm: {},
            pageFlag : '',
			tableName:"",
			rules: {},
            yonghuxingbieOptions: [],
            shetuanfuzerenxingbieOptions: [],
		};
	},
	mounted(){
		this.pageFlag = this.$route.query.pageFlag
		if(this.$route.query.pageFlag=='register'){
			
			let table = this.$storage.get("loginTable");
			this.tableName = table;
			if(this.tableName=='yonghu'){
				this.ruleForm = {
					yonghuzhanghao: '',
					mima: '',
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
				this.ruleForm = {
					fuzerenzhanghao: '',
					mima: '',
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
				this.rules.yonghuzhanghao = [{ required: true, message: '请输入用户账号', trigger: 'blur' }]
			}
			if ('yonghu' == this.tableName) {
				this.rules.mima = [{ required: true, message: '请输入密码', trigger: 'blur' }]
			}
			if ('yonghu' == this.tableName) {
				this.rules.yonghuxingming = [{ required: true, message: '请输入用户姓名', trigger: 'blur' }]
			}
			if ('shetuanfuzeren' == this.tableName) {
				this.rules.fuzerenzhanghao = [{ required: true, message: '请输入负责人账号', trigger: 'blur' }]
			}
			if ('shetuanfuzeren' == this.tableName) {
				this.rules.mima = [{ required: true, message: '请输入密码', trigger: 'blur' }]
			}
			if ('shetuanfuzeren' == this.tableName) {
				this.rules.fuzerenxingming = [{ required: true, message: '请输入负责人姓名', trigger: 'blur' }]
			}
			if ('shetuanfuzeren' == this.tableName) {
				this.rules.shoujihao = [{ required: true, message: '请输入手机号', trigger: 'blur' }]
			}
			this.yonghuxingbieOptions = "男,女".split(',')
			this.shetuanfuzerenxingbieOptions = "男,女".split(',')
		}
	},
	created() {
	},
	destroyed() {
		  	},
	methods: {
		changeRules(name){
			if(this.rules[name]){
				return true
			}
			return false
		},
		// 获取uuid
		getUUID () {
			return new Date().getTime();
		},
		close(){
			this.$router.push({ path: "/login" });
		},
        yonghutouxiangUploadChange(fileUrls) {
            this.ruleForm.touxiang = fileUrls;
        },
        shetuanfuzerentouxiangUploadChange(fileUrls) {
            this.ruleForm.touxiang = fileUrls;
        },

        // 多级联动参数


        //获取密保问题
        getSecurity(){
            this.tableName = 'shetuanfuzeren'
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
                    this.ruleForm = data.data;
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
            if(this.ruleForm.panswer!=this.ruleForm.myanswer){
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
            if (this.ruleForm.newpassword != this.ruleForm.repassword) {
                this.$message.error("两次密码输入不一致");
                return;
            }
            this.ruleForm.mima = this.ruleForm.newpassword;
            this.ruleForm.password = this.ruleForm.newpassword;
            this.$http({
                url: this.tableName+`/update`,
                method: "post",
                data: this.ruleForm
            }).then(({
                data
            }) => {
                if (data && data.code === 0) {
                    this.$message({
                        message: "修改密码成功",
                        type: "success",
                        duration: 1500,
                        onClose: () => {}
                    });
                    this.close()
                } else {
                    this.$message.error(data.msg);
                }
            });
        },
		// 注册
		login() {
			var url=this.tableName+"/register";
					if((!this.ruleForm.yonghuzhanghao) && `yonghu` == this.tableName){
						this.$message.error(`用户账号不能为空`);
						return
					}
					if((!this.ruleForm.mima) && `yonghu` == this.tableName){
						this.$message.error(`密码不能为空`);
						return
					}
					if((this.ruleForm.mima!=this.ruleForm.mima2) && `yonghu` == this.tableName){
						this.$message.error(`两次密码输入不一致`);
						return
					}
					if((!this.ruleForm.yonghuxingming) && `yonghu` == this.tableName){
						this.$message.error(`用户姓名不能为空`);
						return
					}
            if(this.ruleForm.touxiang!=null) {
                this.ruleForm.touxiang = this.ruleForm.touxiang.replace(new RegExp(this.$base.url,"g"),"");
            }
					if(`yonghu` == this.tableName && this.ruleForm.nianling &&(!this.$validate.isIntNumer(this.ruleForm.nianling))){
						this.$message.error(`年龄应输入整数`);
						return
					}
					if(`yonghu` == this.tableName && this.ruleForm.shoujihao &&(!this.$validate.isMobile(this.ruleForm.shoujihao))){
						this.$message.error(`手机号应输入手机格式`);
						return
					}
				if(`yonghu` == this.tableName && this.ruleForm.pquestion==''){
					this.$message.error(`密保问题不能为空`);
				    return
				}
				if(`yonghu` == this.tableName && this.ruleForm.panswer==''){
					this.$message.error(`密保答案不能为空`);
				    return
				}
					if((!this.ruleForm.fuzerenzhanghao) && `shetuanfuzeren` == this.tableName){
						this.$message.error(`负责人账号不能为空`);
						return
					}
					if((!this.ruleForm.mima) && `shetuanfuzeren` == this.tableName){
						this.$message.error(`密码不能为空`);
						return
					}
					if((this.ruleForm.mima!=this.ruleForm.mima2) && `shetuanfuzeren` == this.tableName){
						this.$message.error(`两次密码输入不一致`);
						return
					}
					if((!this.ruleForm.fuzerenxingming) && `shetuanfuzeren` == this.tableName){
						this.$message.error(`负责人姓名不能为空`);
						return
					}
					if((!this.ruleForm.shoujihao) && `shetuanfuzeren` == this.tableName){
						this.$message.error(`手机号不能为空`);
						return
					}
					if(`shetuanfuzeren` == this.tableName && this.ruleForm.shoujihao &&(!this.$validate.isMobile(this.ruleForm.shoujihao))){
						this.$message.error(`手机号应输入手机格式`);
						return
					}
            if(this.ruleForm.touxiang!=null) {
                this.ruleForm.touxiang = this.ruleForm.touxiang.replace(new RegExp(this.$base.url,"g"),"");
            }
				if(`shetuanfuzeren` == this.tableName && this.ruleForm.pquestion==''){
					this.$message.error(`密保问题不能为空`);
				    return
				}
				if(`shetuanfuzeren` == this.tableName && this.ruleForm.panswer==''){
					this.$message.error(`密保答案不能为空`);
				    return
				}
			this.$http({
				url: url,
				method: "post",
				data:this.ruleForm
			}).then(({ data }) => {
				if (data && data.code === 0) {
					this.$message({
						message: "注册成功",
						type: "success",
						duration: 1500,
						onClose: () => {
							this.$router.replace({ path: "/login" });
						}
					});
				} else {
					this.$message.error(data.msg);
				}
			});
		}
	}
};
</script>

<style lang="scss" scoped>
	.container {
	  position: relative;
	  background: url(http://codegen.caihongy.cn/20240521/fbedba929b084920ae5673f3abb6cd49.png);

		.el-date-editor.el-input {
		  width: 100%;
		}
		
		.rgs-form .el-input /deep/ .el-input__inner {
						border-radius: 20px;
						padding: 0 10px;
						color: #666;
						background: #f2f2f2;
						width: calc(100% - 0px);
						font-size: 14px;
						border-color: #ddd;
						border-width: 0px;
						border-style: solid;
						height: 40px;
					}
		
		.rgs-form .el-select /deep/ .el-input__inner {
						border-radius: 20px;
						padding: 0 10px;
						color: #666;
						background: #f2f2f2;
						width: 100%;
						font-size: 14px;
						border-color: #ddd;
						border-width: 0px;
						border-style: solid;
						height: 40px;
					}
		
		.rgs-form .el-date-editor /deep/ .el-input__inner {
						border-radius: 20px;
						padding: 0 10px 0 30px;
						color: #666;
						background: #f2f2f2;
						width: 100%;
						font-size: 14px;
						border-color: #ddd;
						border-width: 0px;
						border-style: solid;
						height: 40px;
					}
		
		.rgs-form .el-date-editor /deep/ .el-input__inner {
						border-radius: 20px;
						padding: 0 10px 0 30px;
						color: #666;
						background: #f2f2f2;
						width: 100%;
						font-size: 14px;
						border-color: #ddd;
						border-width: 0px;
						border-style: solid;
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
		  		  border-radius: 20px;
		  		  color: #bbb;
		  		  background: #f2f2f2;
		  		  width: 160px;
		  		  font-size: 24px;
		  		  border-color: #ddd;
		  		  border-width: 0px;
		  		  line-height: 60px;
		  		  border-style: solid;
		  		  text-align: center;
		  		  height: 60px;
		  		}
		
		.rgs-form /deep/ .el-upload-list .el-upload-list__item {
		  		  cursor: pointer;
		  		  border-radius: 20px;
		  		  color: #bbb;
		  		  background: #f2f2f2;
		  		  width: 160px;
		  		  font-size: 24px;
		  		  border-color: #ddd;
		  		  border-width: 0px;
		  		  line-height: 60px;
		  		  border-style: solid;
		  		  text-align: center;
		  		  height: 60px;
		  		}
		
		.rgs-form /deep/ .el-upload .el-icon-plus {
		  		  cursor: pointer;
		  		  border-radius: 20px;
		  		  color: #bbb;
		  		  background: #f2f2f2;
		  		  width: 160px;
		  		  font-size: 24px;
		  		  border-color: #ddd;
		  		  border-width: 0px;
		  		  line-height: 60px;
		  		  border-style: solid;
		  		  text-align: center;
		  		  height: 60px;
		  		}
	}
	.required {
		position: relative;
	}
	.required::after{
				color: red;
				position: absolute;
				right: 5px;
				content: "*";
			}
	.editor>.avatar-uploader {
		line-height: 0;
		height: 0;
	}
</style>
