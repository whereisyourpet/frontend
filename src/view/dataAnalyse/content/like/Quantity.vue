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
          text: "待收养数量与受欢迎程度的关系"
        },
        tooltip: {},
        color:	'	#7AC5CD',
        legend: {
          data: [""]
        },
        xAxis: {
          data: [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16",
            "17",
            "18",
            "20"
          ],
          name:'/只',
          nameTextStyle:{
            fontWeight:'bold',
              fontSize: "20"
        },
          axisLabel: {
            show: true,
            textStyle: {
              fontWeight:'bold',
              fontSize: "20"
            }
          }
        },
        yAxis: { min: 0.2,
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
