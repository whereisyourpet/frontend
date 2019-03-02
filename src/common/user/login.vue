<template>
  <div class="Login">
    <div class="centerPage">
      <div style="height:92px">
      </div>
    <el-card style="width:350px;left: 20%" align="left" class="card_style">
      <div slot="header" class="clearfix">
        <h2>
          登录
          <i class='el-icon-caret-left'></i>
          <router-link to="/register">
            <el-button type="text" style="float: right; padding: 3px 0">
              注册
            </el-button>
          </router-link>
        </h2>
      </div>
      <el-form >
        <el-form-item prop="passport" >
          <el-input type="text"  placeholder="用户名/邮箱/手机号" style="width:90%;padding-left:5%;"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password"  placeholder="密码" style="width:90%;padding-left:5%" ></el-input>
        </el-form-item>
        <router-link to="/passwordForget"></router-link>
        <!--登录按钮要不要居中？-->
        <el-form-item label-width="120px">
          <el-button type="primary" @click="handle_submit">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
      <div style="height:92px">
      </div>
      </div>
  </div>
</template>

<script>
    export default {
        name: "login"
    }
</script>

<style scoped>
.Login{
    background-image: url('../../assets/image_repo/background.jpg');
    background-size: 100%;
    background-repeat:no-repeat;
    background-attachment:fixed;
}
.card_style{
  width: 85%; 
  border-radius: 5%;
  height: 30%;
  background:rgba(255,255,255,0.7)
}
.centerPage{
  margin-left: 65%;
}
.el-input__inner,.el-textarea__inner,.el-button {
    border-radius: 15%;
}
</style>
