<template>
  <div class="menu-map">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <el-menu-item index="1">
        <i class="el-icon-tickets"></i>
        <span slot="title">受欢迎程度</span>
      </el-menu-item>
      <el-menu-item index="2">
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
    export default {
      name: "menuMap",
      methods: {
        handleOpen(key, keyPath) {
          console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
          console.log(key, keyPath);
        }
      }
    }
</script>

<style scoped>
.menu-map{
  width: 10%;
  margin-left: 5%;
  margin-top: 5%;
}
</style>
