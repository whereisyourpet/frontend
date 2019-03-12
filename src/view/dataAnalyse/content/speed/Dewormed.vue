<template>
  <div id="myChart" :style="{width: '600px', height: '450px'}"></div>
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
          text: "是否除虫与收养速度的关系"
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
            data: [2.562582, 2.3892, 2.642897]
          }
        ]
      });
    }
  }
};
</script>
