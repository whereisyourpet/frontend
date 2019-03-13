<template>
  <div id="myChart" :style="{width: '600px', height: '450px'}"></div>
</template>

<script>
export default {
  name: "hello",
  data() {
    return {
      msg: "Dewormed_adoption_speed",
        x:'center',
        y:'top',
        textAlign:'left'
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
          text: "收养速度与待收养数量的关系"
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
            type: "line",
            // 数据里很诡异的没有19只
            data: [
              2.485171,
              2.564698,
              2.534435,
              2.634652,
              2.801802,
              2.751351,
              2.833333,
              2.634615,
              2.757576,
              3.052632,
              3.3,
              3.0,
              3.0,
              4.0,
              3.0,
              2.666667,
              2.333333,
              4.0,
              3.333333
            ]
          }
        ]
      });
    }
  }
};
</script>
