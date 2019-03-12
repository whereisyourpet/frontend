<template>
  <div id="myChart" :style="{width: '300px', height: '300px'}"></div>
</template>

<script>
export default {
  name: "hello",
  data() {
    return {
      msg: "Vaccinated _adoption_speed"
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
          text: "是否接种疫苗与收养速度的关系"
        },
        tooltip: {},
        legend: {
          data: [""]
        },
        xAxis: {
          data: ["是", "否", "不清楚"]
        },
        yAxis: { min: 2 },
        series: [
          {
            name: "被收养速度",
            type: "bar",
            data: [2.670058, 2.361976, 2.629015]
          }
        ]
      });
    }
  }
};
</script>
