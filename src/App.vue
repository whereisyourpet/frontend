<template>
  <div>
    <el-container>
      <el-header>
        <Navbar></Navbar>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer width="100%" style="background:rgba(246, 248, 236, 0.7)">
        <Footer></Footer>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import Navbar from "@/common/navbar";
import Footer from "@/common/footer";

export default {
  name: "App",
  components: {
    Navbar,
    Footer
  }
};
</script>

<style>
#app {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.background {
  background-image: url("assets/image_repo/background.jpg");
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  width: 100%;
  position: absolute;
  top: 60px;
  bottom: 0px;
  left: 0px;
}

.el-header,
.el-footer {
  padding: 0%;
}

.el-footer {
  position: absolute;
  bottom: 0px;
  width: 100%;
}

body {
  margin: 0%;
}
</style>
