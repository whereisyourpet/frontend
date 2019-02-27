<template>
  <div class="navbar">
    <el-menu :default-active="activeIndex" mode="horizontal">
      <el-menu-item index="home" @click="$router.push('/')">
        主页
      </el-menu-item>
      <el-menu-item index="activity" @click="$router.push('/activity')">
        数据分析
      </el-menu-item>
      <el-menu-item index="resource" @click="$router.push('/resource')">
        萌宠寻主
      </el-menu-item>
      <el-menu-item index="forum" @click="$router.push('/organization')">
        猜你喜欢
      </el-menu-item>
      <el-menu-item v-if="!this.isLogged" index="log" @click="$router.push('/login')" style="float: right">
        登陆/注册
      </el-menu-item>
      <el-menu-item v-if="this.isLogged" index="logout" @click="handle_logout" style="float: right">
        登出
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import { mapState } from 'vuex'
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
            activateIndex : '1'
          }
      },
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
      computed : {
        ...mapState(['isLogged'])
      }

    }
</script>

<style scoped>
  .navbar {
    width: 1200px;
    margin: 0 auto;
  }
</style>
