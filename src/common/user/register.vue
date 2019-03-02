<template>
  <div class="register">
    <div class="centerPage">
      <div style="height:30px"></div>
      <el-card class="card_style">
        <div slot="header" class="clearfix">
          <h2>
            注册
            <i class="el-icon-caret-left"></i>
            <router-link to="/login">
              <el-button type="text" style="float: right; padding: 3px 0">登录</el-button>
            </router-link>
          </h2>
        </div>
        <el-form label-width="100px">
          <el-form-item prop="username" label="用户名">
            <el-input type="text" placeholder></el-input>
          </el-form-item>
          <el-form-item prop="name" label="昵称">
            <el-input type="text" placeholder></el-input>
          </el-form-item>
          <el-form-item prop="password" label="密码">
            <el-input type="password" placeholder></el-input>
          </el-form-item>
          <el-form-item prop="password2" label="确认密码" required>
            <el-input type="password" placeholder></el-input>
          </el-form-item>
          <!--注册按钮要不要居中？-->
          <el-form-item label-width="143px">
            <el-button type="primary" @click="handle_register">注册</el-button>
          </el-form-item>
        </el-form>
      </el-card>
      <div style="height:30px"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "register"
};
</script>

<style scoped>
.register {
  background-image: url("../../assets/image_repo/background.jpg");
  background-size: 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
.centerPage {
  margin-left: 65%;
}
.card_style {
  width: 85%;
  border-radius: 5%;
  height: 30%;
  background: rgba(255, 255, 255, 0.7);
}
</style>
