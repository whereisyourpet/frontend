<template>
  <div class="personal-view">
    <el-menu default-active="1" class="el-menu-vertical-demo personal-sidenav" @select="change_component">
      <el-menu-item index="user-info">
        <i class="el-icon-tickets"></i>
        <span slot="title">个人信息</span>
      </el-menu-item>
      <el-menu-item index="published-pet">
        <i class="el-icon-menu"></i>
        <span slot="title">已发布宠物</span>
      </el-menu-item>

    </el-menu>
    <el-main class="personal-content">
      <component :is="componentName"></component>
    </el-main>
    <div style="clear: both;"></div>
  </div>
</template>

<script>
 import UserInfo from './content/user-info'
 import PublishedPet from './content/published-pet'
 import { mapState } from 'vuex'

    export default {
      name: "menuMap",
      data() {
        return {
          componentName: 'Basic',
        }
      },
      methods: {
        handleOpen(key, keyPath) {
          console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
          console.log(key, keyPath);
        },
        change_component(key){
          switch (key){
            case 'user-info':
              this.componentName = 'UserInfo'
                  break
            case 'published-pet':
              this.componentName = 'PublishedPet'
                  break
            default:
              break
          }
        }
      },
      components:{
        UserInfo,
        PublishedPet
      },
      // computed:{
      //   ...mapState(['userInfo'])
      // }
    }
</script>

<style scoped>
.menu-map{
  width: 10%;
  margin-left: 5%;
  margin-top: 5%;
}
.personal-view {
  width: 1200px;
  margin: 0 auto;
}
.personal-sidenav {
  width: 20%;
  float: left;
}
.personal-content {
  width: 75%;
  float: right;
}
</style>
