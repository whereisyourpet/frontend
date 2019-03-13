<template >
  <div class="navbar">
    <!--<el-menu :default-active="activeIndex" mode="horizontal">-->
    <!--<el-menu :default-active="activeIndex" mode="horizontal">-->
    <el-menu mode="horizontal" style="background:rgba(246, 248, 236, 0.7)">
      <el-menu-item  @click="$router.push('/')"><img class="logo" src="../assets/image_repo/logo.png"></el-menu-item>
      <el-menu-item index="home" @click="$router.push('/')">主页</el-menu-item>
      <el-menu-item index="activity" @click="$router.push('/menu')">数据分析</el-menu-item>
      <el-menu-item index="resource" @click="$router.push('/evaluate')">萌宠寻主</el-menu-item>
      <el-menu-item index="forum" @click="$router.push('/find')">猜你喜欢</el-menu-item>
      <el-menu-item index="selectPet" @click="$router.push('/selectPet')">匹配萌宠</el-menu-item>
      <el-menu-item
        v-if="!this.isLogged"
        index="register"
        @click="$router.push('/register')"
        style="float: right">注册</el-menu-item>
      <el-menu-item
        v-if="!this.isLogged"
        index="log"
        @click="$router.push('/login')"
        style="float: right">登录</el-menu-item>
      <el-menu-item
        v-if="this.isLogged"
        index="logout"
        @click="handle_logout()"
        style="float: right">登出</el-menu-item>
      <el-menu-item
        v-if="this.isLogged"
        @click="$router.push('/basic')"
        style="float: right">欢迎您，{{this.nickname}}</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import { mapState } from "vuex";
/*
################################################################################
#                                 waiting for api                              #
################################################################################
  */
//import { logout } from ''

// import { mapState } from 'vuex'

export default {
  name: "navbar",
  data() {
    return {
      isLogged: false,
      nickname: "",
      activateIndex: "1"
    };
  },
  mounted() {
    let me = this;
    this.$axios
      .get("http://127.0.0.1:8000/users/status")
      .then(function(response) {
        if (response.data.status == "1") {
          me.isLogged = true;
          if (me.isLogged) {
            let setting = {
              method: "GET",
              url: "http://127.0.0.1:8000/users/get_user_info",
              headers: {
                "Content-Type": "application/x-www-form-urlencoded"
              }
            };
            me.$axios.defaults.withCredentials = true;
            me.$axios(setting).then(function(response) {
              me.nickname = response.data.nickname;

              if (response.data.location == "") {
                me.$alert('请先完善个人信息', '欢迎使用', {
                confirmButtonText: '确定',
                callback: action => {
                  me.$message({
                    type: '提示',
                    message: "已为您跳转到修改界面"
                  });
                }
              });

                me.$router.push("basic");
              }
            });
          }
        }
      });
  },
  methods: {
    handle_logout() {
      let me = this;
      this.$axios
        .get("http://127.0.0.1:8000/users/logout")
        .then(function(response) {

            me.$router.push("/");
            location.reload();
          if (response.data.success) {
          me.$message({
          message: '注销成功',
          type: 'success'
        });
          }
        });
    }
  },
  // computed: {
  //   ...mapState(['isLogged'])
  // }

};
</script>

<style scoped>
.navbar {
  width: 100%;
  margin: 0;
}
.logo{
  width:175px;
  left: 10px;
 }
</style>
