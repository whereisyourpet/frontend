<template >
  <div class="navbar">
    <!--<el-menu :default-active="activeIndex" mode="horizontal">-->
    <!--<el-menu :default-active="activeIndex" mode="horizontal">-->
    <el-menu mode="horizontal" style="background:rgba(246, 248, 236, 0.7)">
      <el-menu-item index="home" @click="$router.push('/')">主页</el-menu-item>
      <el-menu-item index="activity" @click="$router.push('/menu')">数据分析</el-menu-item>
      <el-menu-item index="resource" @click="$router.push('/evaluate')">萌宠寻主</el-menu-item>
      <el-menu-item index="forum" @click="$router.push('/find')">猜你喜欢</el-menu-item>
      <el-menu-item
        v-if="!this.islogged"
        index="register"
        @click="$router.push('/register')"
        style="float: right"
      >注册</el-menu-item>
      <el-menu-item
        v-if="!this.islogged"
        index="log"
        @click="$router.push('/login')"
        style="float: right"
      >登录</el-menu-item>
      <el-menu-item
        v-if="this.islogged"
        index="logout"
        @click="handle_logout()"
        style="float: right"
      >登出</el-menu-item>
      <el-menu-item
        v-if="this.islogged"
        @click="$router.push('/basic')"
        style="float: right"
      >欢迎您，{{this.nickname}}</el-menu-item>
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

export default {
  name: "navbar",
  data() {
    return {
      islogged: false,
      nickname: "",
      activateIndex: "1"
    };
  },
  mounted() {
    let me = this;
    this.$axios
      .get("http://127.0.0.1:8000/users/status")
      .then(function(response) {
        console.log(response.data.status == "1");
        if (response.data.status == "1") {
          me.islogged = true;
          if (me.islogged) {
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
              console.log(response.data.location);
              if (response.data.location == "") {
                alert("请完善个人信息");
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
          if (response.data.success) {
            alert("注销成功");
            me.$router.push("/");
            location.reload();
          }
        });
    }
  }

  /*
################################################################################
#                                 wait for api                                 #
################################################################################
  */

  // methods : {
  //   handle_logout() {
  //     this.$store.commit('TOGGLE_LOGOUT') // set log out
  //     this.$store.commit('SET_USERINFO', {}) // clear user information
  //     // use put method to log out
  //     logout()
  //       .then(res => {
  //         this.$message({
  //           message: '注销成功',
  //           type: 'success',
  //           showClose: true
  //         })
  //         this.$router.push('/')
  //         console.log(this.$store.state.userInfo);
  //       }).catch(e => {
  //       console.log("error! Login.vue", e.response.data);
  //     })
  //   }
  // }
  // computed : {
  //   ...mapState(['isLogged'])
  // }
};
</script>

<style scoped>
.navbar {
  width: 100%;
  margin: 0;
}
</style>
