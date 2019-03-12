<template>
  <div id="myChart" :style="{width: '600px', height: '450px'}"></div>
</template>

<script>
export default {
  name: "hello",
  data() {
    return {
      msg: "type_adoption_speed"
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
          text: "收养速度与动物种类的关系",
          x:'center',
        y:'top',
        textAlign:'left'
        },
        tooltip: {},
        color:	'	#7AC5CD',
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
            data: [2.615101, 2.399504]
            // data: [0.615101, 0.399504]
            // 数据归一化
            // data:[1,0.9175569127157995]
          }
        ]
      });
    }
  }
};
</script>
