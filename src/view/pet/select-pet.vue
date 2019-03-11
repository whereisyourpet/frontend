<template>
  <div>
    <el-row :gutter="12">
      <el-col :span="8">
        <div class="select-block">
          <span slot="label">请选择种类</span>
          <el-select v-model="type" filterable placeholder="请选择">
            <el-option
              v-for="item in type_option"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="select-block">
          <span slot="label">请选择数量&nbsp&nbsp&nbsp</span>
          <el-select v-model="quantities" filterable placeholder="请选择">
            <el-option
              v-for="item in quantities_option"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="select-block">
          <span slot="label">请选择颜色</span>
          <el-select v-model="color" filterable placeholder="请选择">
            <el-option
              v-for="item in color_option"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="select-block">
          <span slot="label">请选择性别</span>
          <el-select v-model="gender" filterable placeholder="请选择">
            <el-option
              v-for="item in gender_option"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="select-block">
          <span slot="label">请选择所在州</span>
          <el-select v-model="state" filterable placeholder="请选择">
            <el-option
              v-for="item in state_option"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="confirm-button">
          <el-button type="primary">开始筛选</el-button>
        </div>
      </el-col>
    </el-row>


    <!--没接口写个几把-->
    <!--<div>-->
      <!--<el-card>-->
        <!--空着先-->
      <!--</el-card>-->
    <!--</div>-->
  </div>
</template>

<script>
    export default {
        name: "select-pet",
        data(){
          return{
            type:'',
            quantities:'',
            color:'',
            gender:'',
            state:'',
            type_option:[
              {
                value:'1',
                label:'苟'
              },
              {
                value:'2',
                label:'毛'
              }
            ],
            quantities_option:[
            //  没人回复我，我就先空下了
            ],
            color_option:[
              { value: "1", label: "Black" },
              { value: "2", label: "Brown" },
              { value: "3", label: "Golden" },
              { value: "4", label: "Yellow" },
              { value: "5", label: "Cream" },
              { value: "6", label: "Gray" },
              { value: "7", label: "White" }
            ],
            gender_option:[
              {
                value: "1",
                label: "公"
              },
              {
                value: "2",
                label: "母"
              },
              {
                value: "3",
                label: "混合"
              }
            ],
            state_option:[
              {
                value: "1",
                label: "Johor"
              },
              {
                value: "2",
                label: "Kedah"
              },
              {
                value: "3",
                label: "Kelantan"
              },
              {
                value: "4",
                label: "Kuala Lumpur"
              },
              {
                value: "5",
                label: "Labuan"
              },
              {
                value: "6",
                label: "Melaka"
              },
              {
                value: "7",
                label: "Negeri Sembilan"
              },
              {
                value: "8",
                label: "Pahang"
              },
              {
                value: "9",
                label: "Perak"
              },
              {
                value: "10",
                label: "Perlis"
              },
              {
                value: "11",
                label: "Pulau Pinang"
              },
              {
                value: "12",
                label: "Sabah"
              },
              {
                value: "13",
                label: "Sarawak"
              },
              {
                value: "14",
                label: "Selangor"
              },
              {
                value: "15",
                label: "Terengganu"
              }
            ]
        }
      }
    }
</script>

<style scoped>
.select-block{
  padding-left: 5%;
  padding-top: 3%;
}
.confirm-button{
  padding-left: 25%;
  padding-top: 3%;
}
</style>
