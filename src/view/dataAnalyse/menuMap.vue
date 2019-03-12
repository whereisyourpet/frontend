<template>
  <div class="personal-view">
    <el-menu
      default-active="like"
      class="el-menu-vertical-demo personal-sidenav"
      @select="change_component">
      <el-menu-item index="like">
        <i class="el-icon-tickets"></i>
        <span slot="title">受欢迎程度</span>
      </el-menu-item>
      <el-menu-item index="speed">
        <i class="el-icon-menu"></i>
        <span slot="title">被收养速度</span>
      </el-menu-item>
      <!--<el-menu-item index="3">-->
        <!--<i class="el-icon-document"></i>-->
        <!--<span slot="title">导航三</span>-->
      <!--</el-menu-item>-->
      <!--<el-menu-item index="4">-->
        <!--<i class="el-icon-setting"></i>-->
        <!--<span slot="title">导航四</span>-->
      <!--</el-menu-item>-->
    </el-menu>
    <el-main class="personal-content">
      <component :is="componentName"></component>
    </el-main>
      </div>
</template>

<script>

 import speed from './fine-grained-attributes/attributes_for_speed'
 import like from './fine-grained-attributes/attributes_for_like'
 import { mapState } from 'vuex'

    export default {
      name: "menuMap",
      data() {
        return {
          componentName: '',
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
            case 'speed':
              this.componentName = 'speed'
                  break
            case 'like':
              this.componentName = 'like'
                  break
            default:
              break
          }
        }
      },
      mounted() {
        this.componentName = 'like'
      },
      components:{
        speed,
        like
      },
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
  height: 520px;
  margin: 0 auto;
}
.personal-sidenav {
  margin-top: 10%;
  width: 20%;
  float: left;
}
.personal-content {
  width: 80%;
  float: right;
  margin-top: -20%;
}
</style>
