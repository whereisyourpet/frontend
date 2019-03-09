<template>
  <div class="Login">
    <div class="centerPage">
      <div style="height:92px"></div>
      <el-card style="width:350px;left: 20%" align="left" class="card_style">
        <div slot="header" class="clearfix">
          <h2>
            登录
            <i class="el-icon-caret-left"></i>
            <router-link to="/register">
              <el-button type="text" style="float: right; padding: 3px 0">注册</el-button>
            </router-link>
          </h2>
        </div>
        <el-form :model="form" :rules="rules" ref="form">
          <el-form-item prop="username">
            <el-input
              v-model="form.username"
              type="text"
              placeholder="用户名/邮箱/手机号"
              style="width:90%;padding-left:5%;"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              v-model="form.password"
              type="password"
              placeholder="密码"
              style="width:90%;padding-left:5%"
            ></el-input>
          </el-form-item>
          <router-link to="/passwordForget"></router-link>
          <!--登录按钮要不要居中？-->
          <el-form-item label-width="120px">
            <el-button type="primary" @click="handle_submit()">登录</el-button>
          </el-form-item>
        </el-form>
      </el-card>
      <div style="height:92px"></div>
    </div>
  </div>
</template>




<script>
import qs from "qs";
import { log } from 'util';

export default {
  name: "login",
    mounted() {
      console.log('ojbk');
      
    let setting = {
      method: "GET",
      url: "http://127.0.0.1:8000/users/get_user_info",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    };
    this.$axios(setting).then(response => {
      console.log(response);
    });
  },
  data() {
    return {
      form: {
        username: null,
        password: null
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { max: 12, message: "用户名长度应小于12个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入123", trigger: "blur" },
          { min: 6, max: 18, message: "长度在 6 到18个字符", trigger: "blur" }
        ]
      }
    };
  },
  

  methods: {
    handle_submit() {
      let me = this;
      let postData = qs.stringify({
        username: this.form.username,
        password: this.form.password
      });

      this.$axios
        .post("http://127.0.0.1:8000/users/login", postData)
        .then(function(response) {
          // console.log(response.data);
          // console.log(response.status);
          // console.log(response.statusText);
          // console.log(response.headers);
          // console.log(response.config);
          if (response.data.success) {
            me.$router.push("/");
          } else {
            alert(response.data.msg);
          }
        });
    }
  }
};
</script>

<style scoped>
.Login {
  background-image: url("../../assets/image_repo/background.jpg");
  background-size: 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
.card_style {
  width: 85%;
  border-radius: 5%;
  height: 30%;
  background: rgba(255, 255, 255, 0.7);
}
.centerPage {
  margin-left: 65%;
}
.el-input__inner,
.el-textarea__inner,
.el-button {
  border-radius: 15%;
}
</style>
