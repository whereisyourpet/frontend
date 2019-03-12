<template>
  <div id="myChart" :style="{width: '300px', height: '300px'}"></div>
</template>

<script>
export default {
  name: "hello",
  data() {
    return {
      msg: "gender_adoption_speed"
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
          text: "动物性别与收养速度的关系"
        },
        tooltip: {},
        legend: {
          data: [""]
        },
        xAxis: {
          data: ["公", "母", "混合"]
        },
        yAxis: { min: 2 },
        series: [
          {
            name: "被收养速度",
            type: "bar",
            data: [2.418714, 2.569878, 2.586239]
            // 数据归一化
            // data: [0.9352244707469031, 0.9936738251955832, 1]
          }
        ]
      });
    }
  }
};
</script>
