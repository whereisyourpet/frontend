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
        [2, 0, 1.6],
        [0, 0, 0.946232],
        [2, 1, 0.934685],
        [1, 0, 0.929987],
        [0, 1, 0.821009],
        [1, 1, 0.721817]
      ];

      let myChart = echarts.init(document.getElementById("myChart"));

      myChart.setOption({
        title: {
          text: "受欢迎程度与毛长及种类的关系"
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
          name: "type",
          nameGap: 1,
          type: "category",
          data: ["狗", "猫"]
        },
        yAxis3D: {
          name: "gender",
          type: "category",
          data: ["短", "中", "长"]
        },
        zAxis3D: {
          name: "like",
          type: "value",
          min: 0.5
        },
        grid3D: {
          boxWidth: 50,
          boxDepth: 50,
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
            alpha: 0,
            beta: 0
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

var xData = ['狗', '猫'];
var yData = ['公','母','混合'];
var data = [[2	,0	,2.749714],
[1	,0	,2.677093],
[0	,0	,2.488186],
[2	,1	,2.476628],
[1	,1	,2.419174],
[0	,1	,2.336231],];
      let myChart = echarts.init(document.getElementById("myChart"));

      myChart.setOption({
        title: {
                    text: '被收养速度与性别及种类的关系'
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
        name:'type',
        nameGap: 1,
        type: 'category',
        data: xData
    },
    yAxis3D: {
        name:'gender',
        type: 'category',
        data: yData
    },
    zAxis3D: {
        name:'like',
        type: 'value',
        min:2
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
