<template>
  <div id="myChart" :style="{width: '600px', height: '450px'}"></div>
</template>

<script>
import echarts from "echarts";
import "echarts-gl";
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
      console.log(this);
      // 基于准备好的dom，初始化echarts实例

      var data = [
[0	,0	,2.699196],
[1	,0	,2.541942],
[0	,1	,2.453477],
[1	,1	,2.377625],
[2	,0	,2.152632],
[2	,1	,2.018018],
      ];

      let myChart = echarts.init(document.getElementById("myChart"));

      myChart.setOption({
        title: {
          text: "被收养速度与毛长及种类的关系"
        },
        tooltip: {},
        visualMap: {
          show: false,
          max: 15,
          inRange: {
            color: ["#4575b4"]
          }
        },
        xAxis3D: {
          name: "种类",
          nameTextStyle:{
            fontWeight:'bold',
              fontSize: "18"
        },
          nameGap: 1,
          type: "category",
          data: ["狗", "猫"],
          axisLabel: {
            show: true,
            textStyle: {
              fontWeight:'bold',
              fontSize: "18"
            }
          }
        },
        yAxis3D: {
          name: "毛长",
          nameTextStyle:{
            fontWeight:'bold',
              fontSize: "18"
        },
          type: "category",
          data: ["短", "中", "长"],
          axisLabel: {
            show: true,
            textStyle: {
              fontWeight:'bold',
              fontSize: "18"
            }
          }
        },
        zAxis3D: {
          name: "被收养速度",
          nameTextStyle:{
            fontWeight:'bold',
              fontSize: "18"
        },
          type: "value",
          min: 2,
          axisLabel: {
            show: true,
            textStyle: {
              fontWeight:'bold',
              fontSize: "18"
            }
          }
        },
        grid3D: {
          boxWidth: 70,
          boxDepth: 70,
          light: {
            main: {
              intensity: 1.2,
              shadow: true
            },
            ambient: {
              intensity: 0.3
            }
          },
          viewControl: {
            alpha: 20,
            beta: 45
          }
        },
        series: [
          {
            type: "bar3D",
            data: data.map(function(item) {
              return {
                value: [item[1], item[0], item[2]]
              };
            }),
            shading: "lambert",
            label: {
              textStyle: {
                fontSize: 16,
                borderWidth: 1
              }
            },

            emphasis: {
              label: {
                textStyle: {
                  fontSize: 20
                }
              }
            }
          }
        ]
      });
    }
  }
};
</script>
