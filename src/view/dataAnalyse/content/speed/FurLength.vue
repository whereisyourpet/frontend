<template>
  <div id="myChart" :style="{width: '600px', height: '450px'}"></div>
</template>

<script>
export default {
  name: "hello",
  data() {
    return {
      msg: "FurLength _adoption_speed"
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
          text: "动物毛发长度与收养速度的关系"
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
        yAxis: { min: 2,
          axisLabel: {
            show: true,
            textStyle: {
              fontWeight:'bold',
              fontSize: "20"
            }
          }  },
        series: [
          {
            name: "被收养速度",
            type: "bar",
            data: [2.585263, 2.470435, 2.080097]
          }
        ]
      });
    }
  }
};
</script>
