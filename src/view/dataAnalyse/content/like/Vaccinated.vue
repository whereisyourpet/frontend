<template>
  <div id="myChart" :style="{width: '600px', height: '450px'}"></div>
</template>

<script>
export default {
  name: "hello",
  data() {
    return {
      msg: "Vaccinated_like"
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
          text: "是否接种疫苗与受欢迎程度的关系"
        },
        tooltip: {},
        color:	'	#7AC5CD',
        legend: {
          data: [""]
        },
        xAxis: {
          data: ["是", "否", "不清楚"],
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
              fontSize: "17"
            }
          } },
        series: [
          {
            name: "受欢迎程度",
            type: "bar",
            data: [1.00746, 0.784281, 0.929336]
          }
        ]
      });
    }
  }
};
</script>
