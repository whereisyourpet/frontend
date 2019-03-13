<template>
<div>

    <p>收养指数为{{this.Global.predict_adoption_star}}</p>
<p>受欢迎指数为{{this.Global.predict_popularity_star}}</p>
</div>

</template>
<script>

export default {
  name: "evaluate_pet",
  data() {
    return {

    };
  },
  mounted() {
    let me = this;
    console.log(me.Global.find_data)
  },
  //  接口没定我写个捷豹写,
  // 现在有了，我开始写捷豹
  methods: {
  }
}
</script>
