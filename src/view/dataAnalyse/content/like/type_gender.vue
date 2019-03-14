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
      msg: "type_gender_adoption_speed"
    };
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      console.log(this);
      // 基于准备好的dom，初始化echarts实例

var xData = ['狗', '猫'];
var yData = ['公','母','混合'];
var data = [[0,	0,	1.043594],
            [1,	0,	0.955080],
            [0,	1,	0.830897],
            [1,	1,	0.811240],
            [2,	0,	0.796571],
            [2,	1,	0.685824],];
      let myChart = echarts.init(document.getElementById("myChart"));

      myChart.setOption({
        title: {
                    text: '受欢迎程度与性别及种类的关系',
                    x:'center',
                        },
    tooltip: {},
    visualMap: {
        show:false,
        max: 15,
        inRange: {
            color: ['#4575b4']
        }
    },
    xAxis3D: {
        name:'种类',
          nameTextStyle:{
            fontWeight:'bold',
              fontSize: "18"
        },
        nameGap: 1,
        type: 'category',
        data: xData,
        axisLabel: {
            show: true,
            textStyle: {
              fontWeight:'bold',
              fontSize: "18"
            }
          }
    },
    yAxis3D: {
        name:'性别',
        nameTextStyle:{
            fontWeight:'bold',
              fontSize: "18"
        },
        type: 'category',
        data: yData,
        axisLabel: {
            show: true,
            textStyle: {
              fontWeight:'bold',
              fontSize: "18"
            }
          }
    },
    zAxis3D: {
        name:'受欢迎程度',
        nameTextStyle:{
            fontWeight:'bold',
              fontSize: "18"
        },
        type: 'value',
        min:0.5,
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
