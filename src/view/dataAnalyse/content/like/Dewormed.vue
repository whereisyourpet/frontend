<template>
  <div id="myChart" :style="{width: '300px', height: '300px'}"></div>
</template>

<script>
export default {
  name: "hello",
  data() {
    return {
      msg: "Dewormed_like"
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
          text: "是否除虫与受欢迎程度的关系"
        },
        tooltip: {},
        legend: {
          data: [""]
        },
        xAxis: {
          data: ["是", "否", "不清楚"]
        },
        yAxis: { min: 0.5 },
        series: [
          {
            name: "受欢迎程度",
            type: "bar",
            data: [0.940455, 0.789616, 0.924761]
          }
        ]
      });
    }
  }
};
</script>
