<template>
  <div>
    <el-card class="img-block">
      <div>
        <a href="index.vue">
          <img class="img-button" src="../../assets/image_repo/doge_meitu_1_s.png">
        </a>
      </div>
      <div style="height:30px"></div>
      <div>
        <a href="index.vue">
          <img class="img-button" src="../../assets/image_repo/doge_meitu_3_s.png">
        </a>
      </div>
      <div style="height:30px"></div>
      <div>
        <a href="index.vue">
          <img class="img-button" src="../../assets/image_repo/doge_meitu_2_s.png">
        </a>
      </div>
    </el-card>
  </div>
</template>   

<script>
export default {
  name: "index"
};
</script>

<style scoped>
/* .body {
  background-image: url("../../assets/image_repo/background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
} */

.img-block {
  width: 18%;
  height: 40%;
  margin-left: 65%;
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
