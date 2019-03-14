<template>
  <div class="background">
    <el-card class="center-block">
      <!--<h2 v-model="adoption_star">收养指数为{{this.Global.predict_adoption_star}}</h2>-->
      <h2 v-model="adoption_star">收养指数为{{(adoption_star + 0.2) | numFilter}}</h2>
      <hr>
      <h2 v-model="adoption_star">超越了{{((4-(adoption_star + 0.2)) / 4) * 100}} %的宠物</h2>
      <hr>
      <h2 v-model="popularity_star">受欢迎指数为{{popularity_star}}</h2>
      <hr>
      <h2 v-model="popularity_star">超越了{{((4-popularity_star) / 4) * 100}} %的宠物</h2>
    </el-card>
  </div>
</template>
<script>
export default {
  name: "evaluate_pet",
  data() {
    return {
      adoption_star :'',
      popularity_star:''
    };
  },
  filters: {

    numFilter(value) {

      // 截取当前数据到小数点后三位

      let transformVal = Number(value).toFixed(3)

      let realVal = transformVal.substring(0, transformVal.length - 1)

      // num.toFixed(3)获取的是字符串

      return Number(realVal)

    }

  },
  mounted() {
    let me = this;
    me.adoption_star = me.Global.predict_adoption_star
    me.popularity_star = me.Global.predict_popularity_star
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
  top: 23%;
  left: 55%;
  overflow: hidden;
  text-align: center;
  background: hsla(60, 50%, 100%, 0.2);
  border: 0;
}
</style>

