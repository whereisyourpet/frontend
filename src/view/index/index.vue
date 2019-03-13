<template>
  <el-container class="background">
    <el-row>
      <el-col :span="7" :offset="15">
        <el-card class="img-block">
          <el-row>
            <a href="index.vue">
              <img class="img-button" src="../../assets/image_repo/doge_meitu_1_s.png">
            </a>
          </el-row>
          <el-row>
            <a href="index.vue">
              <img class="img-button" src="../../assets/image_repo/doge_meitu_3_s.png">
            </a>
          </el-row>
          <el-row>
            <a href="index.vue">
              <img class="img-button" src="../../assets/image_repo/doge_meitu_2_s.png">
            </a>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
  </el-container>
</template>   

<script>
export default {
  name: "index"
};
</script>

<style scoped>
.background {
  background-image: url("../../assets/image_repo/background.jpg");
  position: absolute;
  top: 60px;
  bottom: 0px;
  left: 0px;
}

.img-block {
  width: 80%;
  /* height: 40%; */
  min-height: 20em;
  margin-top: 100px;
}
.img-button {
  height: 60%;
  width: 95%;
}
.img-block {
  border: none;
  background: rgba(255, 255, 255, 0);
}
</style>
