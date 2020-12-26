<template>
  <div class="login_1">
    <div class="login_box">
      <!-- 头部图片 -->
      <div class="avatar_box">
        <img src="../assets/logo.png" alt="" />
      </div>
      <!-- 登录表单领域 -->
      <el-form label-width="0" ref="forms" :rules="rules" :model="forms" class="login_form">
        <!-- 账号 -->
        <el-form-item prop="username">
          <el-input
            v-model="forms.username"
            prefix-icon="iconfont icon-user"
          ></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input
            v-model="forms.password"
            type="password"
            prefix-icon="iconfont icon-3702mima"
          ></el-input>
        </el-form-item>
        <!-- 登录 -->
        <el-form-item class="login_btn">
          <el-button type="primary" @click="loginbnt">登录</el-button>
          <el-button type="info" @click="logincs">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  // 数据
  data() {
    return {
      // 这是登录表单绑定的数据
      forms: {
        // 默认username用户名
        username: "admin",
        // 默认password密码
        password: "123456",
      },
      // 在data里面定义单验证规则
      rules: {
        // 验证用户名是否合法
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 3,
            max: 10,
            message: "长度在 3 到 10 个字符",
            trigger: "blur",
          },
        ],
        // 验证用户密码是否合法
        password: [
          { required: true, message: "请输入用户密码", trigger: "blur" },
          {
            min: 5,
            max: 15,
            message: "长度在 6 到 15 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  // 方法
  methods: {
    // 点击重设按钮 恢复到默认表单
    logincs(){
      this.$refs.forms.resetFields()
    },
    // 点击登录按钮 进行登录验证 和登录 页面跳转
    loginbnt(){
      this.$refs.forms.validate(async valid => {
        // 验证错误 
        if (!valid) return 
        // 验证成功 进行axios请求 
       var {data:res} =  await this.$http.post('login',this.forms)
        console.log(res);
        // 登录失败
        if (res.meta.status !== 200) return this.$message.error('登录错误!')
        // 登录成功
        this.$message.success('登录成功!')
        // 1. 将登录成功之后的 token，保存到客户端的 sessionStorage 中
        //   1.1 项目中出了登录之外的其他API接口，必须在登录之后才能访问
        //   1.2 token 只应在当前网站打开期间生效，所以将 token 保存在 sessionStorage 中
        window.sessionStorage.setItem('token',res.data.token)
        // 2. 通过编程式导航跳转到后台主页，路由地址是 /home
        this.$router.push('./hoem')
      })
    }
  },
};
</script>

<style lang="less" scoped>
.login_1 {
  background-color: #2b4b6b;
  height: 100%;
}
.login_box {
  width: 450px;
  height: 300px;
  background-color: #fff;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 3px;
  .avatar_box {
    width: 130px;
    height: 130px;
    border: 1px solid greenyellow;
    border-radius: 50%;
    padding: 10px;
    background-color: yellowgreen;
    box-shadow: 0 0 10px #ccc;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: springgreen;
    }
  }
}
.login_form {
  position: absolute;
  bottom: 0;
  width: 100%;
  box-sizing: border-box;
  padding: 0 20px;
}

.login_btn {
  display: flex;
  justify-content: flex-end;
}
</style>