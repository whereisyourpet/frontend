<template>
  <div id="myChart" :style="{width: '300px', height: '300px'}"></div>
</template>

<script>
export default {
  name: "hello",
  data() {
    return {
      msg: "size_like"
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
          text: "动物成熟体长与受欢迎程度的关系"
        },
        tooltip: {},
        legend: {
          data: [""]
        },
        xAxis: {
          data: ["小型", "中型", "大型", "超大型"]
        },
        yAxis: { min: 0.5 },
        series: [
          {
            name: "受欢迎程度",
            type: "bar",
            data: [0.98056, 0.836487, 1.071429, 1.424242]
          }
        ]
      });
    }
  }
};
</script>
