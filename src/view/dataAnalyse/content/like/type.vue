<template>
  <div id="myChart" :style="{width: '600px', height: '450px'}"></div>
</template>

<script>
export default {
  name: "hello",
  data() {
    return {
      msg: "type_like"
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
          text: "受欢迎程度与动物种类的关系",
          x:'center',
        y:'top',
        textAlign:'left'
        },
        tooltip: {},
        color: "	#7AC5CD",
        legend: {
          data: [""]
        },
        xAxis: {
          
          data: ["狗", "猫"],
          axisLabel: {
            show: true,
            textStyle: {
              fontWeight:'bold',
              fontSize: "20"
            }
          }
        },
        yAxis: {
          min: 0.5,
          axisLabel: {
            show: true,
            textStyle: {
              fontWeight:'bold',
              fontSize: "20"
            }
          }
        },
        series: [
          {
            name: "受欢迎程度",
            type: "bar",
            barWidth: 130,
            data: [0.970733, 0.794636]
          }
        ]
      });
    }
  }
};
</script>
