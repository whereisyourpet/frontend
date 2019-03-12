<template>
  <div id="myChart" :style="{width: '600px', height: '450px'}"></div>
</template>

<script>
export default {
  name: "hello",
  data() {
    return {
      msg: "FurLength_like"
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
          text: "动物毛发长度与受欢迎程度的关系"
        },
        tooltip: {},
        color:	'	#7AC5CD',
        legend: {
          data: [""]
        },
        xAxis: {
          data: ["短", "中", "长"],
          axisLabel: {
            show: true,
            textStyle: {
              fontWeight:'bold',
              fontSize: "20"
            }
          }
        },
        yAxis: { min: 0.5,
          axisLabel: {
            show: true,
            textStyle: {
              fontWeight:'bold',
              fontSize: "20"
            }
          } },
        series: [
          {
            name: "受欢迎程度",
            type: "bar",
            data: [0.88817, 0.839396, 1.241505]
          }
        ]
      });
    }
  }
};
</script>
