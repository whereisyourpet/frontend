<template>
  <div class="Login">
    <el-card style="width:350px;left: 20%" align="left">
      <div slot="header" class="clearfix">
        <h2>
          登陆
          <i class='el-icon-caret-left'></i>
          <router-link to="/register">
            <el-button type="text" style="float: right; padding: 3px 0">
              注册
            </el-button>
          </router-link>
        </h2>
      </div>
      <el-form >
        <el-form-item prop="passport">
          <el-input type="text"  placeholder="用户名/邮箱/手机号"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password"  placeholder="密码"></el-input>
        </el-form-item>
        <router-link to="/passwordForget"></router-link>
        <el-form-item>
          <el-button type="primary" @click="handle_submit">登陆</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
    export default {
        name: "login"
    }
</script>

<style scoped>

</style>
