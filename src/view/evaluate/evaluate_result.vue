<template>
  <div class="background">
    <el-card class="center-block">
      <h2>收养指数为{{this.Global.predict_adoption_star}}</h2>
      <hr>
      <h2>受欢迎指数为{{this.Global.predict_popularity_star}}</h2>
    </el-card>
  </div>
</template>
<script>
export default {
  name: "evaluate_pet",
  data() {
    return {};
  },
  mounted() {
    let me = this;
    console.log(me.Global.find_data);
  },
  //  接口没定我写个捷豹写,
  // 现在有了，我开始写捷豹
  methods: {}
};
</script>

<style scoped>
.background {
  background-image: url("../../assets/image_repo/background.jpg");
  position: fixed;
  top: 60px;
  bottom: 0px;
  left: 0px;
  right: 0px;
}

.center-block {
  position: absolute;
  top: 40%;
  left: 55%;
  overflow: hidden;
  text-align: center;
  background: hsla(60, 50%, 100%, 0.2);
  border: 0;
}
</style>

