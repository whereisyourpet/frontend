<template>
  <div class="body">
    <el-card class="img-block">
      <div>
        <a href="index.vue"><img class="img-button" src="../../assets/image_repo/doge_meitu_3.png"/></a>
      </div>
      <div>
        <a href="index.vue"><img class="img-button" src="../../assets/image_repo/doge_meitu_3.png"/></a>
      </div>
      <div>
        <a href="index.vue"><img class="img-button" src="../../assets/image_repo/doge_meitu_3.png"/></a>
      </div>
    </el-card>
  </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped>
  .body{
  background-image: url('../../assets/image_repo/background.jpg');
  background-size: 100%;
  background-repeat:no-repeat;
}
  .img-block{
    width: 18%;
    height: 40%;
  }
  .img-button{
    height: 60%;
    width: 60%;
  }
</style>
