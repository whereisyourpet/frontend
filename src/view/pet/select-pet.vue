<template>
  <div>
    <el-row :gutter="12">
      <el-col :span="8">
        <div class="select-block">
          <span slot="label">请选择种类</span>
          <el-select v-model="value1" filterable placeholder="请选择">
            <el-option
              v-for="item in options"
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
          <el-select v-model="value8" filterable placeholder="请选择">
            <el-option
              v-for="item in options"
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
          <el-select v-model="value8" filterable placeholder="请选择">
            <el-option
              v-for="item in options"
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
          <el-select v-model="value8" filterable placeholder="请选择">
            <el-option
              v-for="item in options"
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
          <el-select v-model="value8" filterable placeholder="请选择">
            <el-option
              v-for="item in options"
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
        name: "select-pet"
    }
</script>

<style scoped>
.select-block{
  padding-left: 5%;
  padding-top: 3%;
}
.confirm-button{
  padding-left: 8%;
  padding-top: 3%;
}
</style>
