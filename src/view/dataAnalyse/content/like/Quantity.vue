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
          text: "待收养数量与受欢迎程度的关系"
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
        yAxis: { min: 0.2 },
        series: [
          {
            name: "受欢迎程度",
            type: "line",
            // 数据里很诡异的没有19只
            data: [
              0.932901,
              0.756681,
              0.72314,
              0.781544,
              0.693694,
              0.675676,
              0.797619,
              0.788462,
              0.818182,
              0.842105,
              0.9,
              1.0,
              1.0,
              1.0,
              0.5,
              0.333333,
              1.0,
              1.0,
              0.666667
            ]
          }
        ]
      });
    }
  }
};
</script>
