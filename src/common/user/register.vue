<template>
  <div class="register background">
    <div class="centerPage">
      <el-card class="card_style">
        <div slot="header" class="card-header">
          <h2>
            注册
            <i class="el-icon-caret-left"></i>
            <router-link to="/login">
              <el-button type="text" style="float: right;">登录</el-button>
            </router-link>
          </h2>
        </div>
        <el-form :model="form" :rules="rules" ref="form" label-width="80px" label-position="left">
          <el-form-item prop="username" label="用户名">
            <el-input v-model.trim="form.username" type="text"></el-input>
          </el-form-item>
          <el-form-item prop="nickname" label="昵称">
            <el-input v-model="form.nickname" type="text"></el-input>
          </el-form-item>
          <el-form-item prop="password" label="密码">
            <el-input v-model="form.password" type="password"></el-input>
          </el-form-item>
          <el-form-item prop="password2" label="确认密码">
            <el-input v-model="form.password2" type="password"></el-input>
          </el-form-item>
          <!--注册按钮要不要居中？-->
        </el-form>
        <el-form>
          <el-form-item>
            <el-button type="primary" id="submit_button" @click="handle_register()">注册</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
  </div>
</template>

<script>
import qs from "qs";
export default {
  name: "register",

  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.form.password2 !== "") {
          this.$refs.form.validateField("password2");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.form.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };

    return {
      form: {
        username: "",
        password: "",
        password2: "",
        nickname: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { max: 12, message: "用户名长度应小于12个字符", trigger: "blur" }
        ],
        nickname: [
          { required: true, message: "请输入昵称", trigger: "blur" },
          { max: 16, message: "昵称请小于16个字符", trigger: "blur" }
        ],
        password: [
          { validator: validatePass, trigger: "blur" },
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 12,
            message: "密码长度在 6 到18个字符",
            trigger: "blur"
          }
        ],

        password2: [
          { validator: validatePass2, trigger: "blur" },
          { required: true, message: "请输入确认密码", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    handle_register() {
      if (this.form.username.length == 0) {
        this.$notify.info({
          title: "提示",
          message: "请输入用户名"
        });
        return;
      }

      if (this.form.nickname.length == 0) {
        this.$notify.info({
          title: "提示",
          message: "请输入昵称"
        });
        return;
      }

      if (this.form.password.length < 6) {
        this.$notify.info({
          title: "提示",
          message: "密码长度应在6-18位"
        });
        return;
      }
      if (this.form.password !== this.form.password2) {
        this.$notify.info({
          title: "提示",
          message: "两次密码不一致"
        });
        return;
      }
      let me = this;
      let postData = qs.stringify({
        username: this.form.username,
        nickname: this.form.nickname,
        password: this.form.password
      });
      console.log(postData);
      this.$axios
        .post("http://127.0.0.1:8000/users/register", postData)
        .then(function(response) {
          // console.log(response.data);
          // console.log(response.status);
          // console.log(response.statusText);
          // console.log(response.headers);
          // console.log(response.config);
          if (response.data.success) {
            me.$message({
              message: "注册成功，请登录",
              type: "success",
              center: true
            });
            me.$router.push("/login");
          } else {
            me.form.username = "";
            me.$notify.error({
              title: "错误",
              message: response.data.msg
            });
          }
        });
    }
  }
};
</script>

<style scoped>
.background {
  background-image: url("../../assets/image_repo/background-lip.jpeg");
  position: fixed;
  top: 60px;
  bottom: 0px;
  left: 0px;
  right: 0px;
}

.card-header {
  margin: -20px 0;
}

.centerPage {
  margin-left: 65%;
}
.card_style {
  margin-top: 35%;
  width: 85%;
  border-radius: 5%;
  background: rgba(255, 255, 255, 0.7);
}

#submit_button {
  width: 100%;
  display: block;
}
</style>
