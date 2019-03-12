<template>
  <div id="myChart" :style="{width: '300px', height: '300px'}"></div>
</template>

<script>
export default {
  name: "hello",
  data() {
    return {
      msg: "Dewormed_adoption_speed"
    };
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      console.log(this);
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      // 绘制图表
      myChart.setOption({
        title: {
          text: "待收养数量与收养速度的关系"
        },
        tooltip: {},
        legend: {
          data: [""]
        },
        xAxis: {
          data: [
            "1只",
            "2只",
            "3只",
            "4只",
            "5只",
            "6只",
            "7只",
            "8只",
            "9只",
            "10只",
            "11只",
            "12只",
            "13只",
            "14只",
            "15只",
            "16只",
            "17只",
            "18只",
            "20只"
          ]
        },
        yAxis: { min: 2 },
        series: [
          {
            name: "被收养速度",
            type: "line",
            // 数据里很诡异的没有19只
            data: [
              2.485171,
              2.564698,
              2.534435,
              2.634652,
              2.801802,
              2.751351,
              2.833333,
              2.634615,
              2.757576,
              3.052632,
              3.3,
              3.0,
              3.0,
              4.0,
              3.0,
              2.666667,
              2.333333,
              4.0,
              3.333333
            ]
          }
        ]
      });
    }
  }
};
</script>
