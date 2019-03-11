<template>
  <div>
    <div v-for="o in 4" :key="o" class="text item">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>卡片名称</span>
          <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
    export default {
        name: "find-pet"
    }
</script>

<style scoped>

</style>
