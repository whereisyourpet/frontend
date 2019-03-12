<template>
  <div id="myChart" :style="{width: '300px', height: '300px'}"></div>
</template>

<script>
export default {
  name: "hello",
  data() {
    return {
      msg: "size_adoption_speed"
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
          text: "动物成熟体长与收养速度的关系"
        },
        tooltip: {},
        legend: {
          data: [""]
        },
        xAxis: {
          data: ["小型", "中型", "大型", "超大型"]
        },
        yAxis: { min: 2 },
        series: [
          {
            name: "被收养速度",
            type: "bar",
            data: [2.357879, 2.576904, 2.45873, 2.151515]
          }
        ]
      });
    }
  }
};
</script>
