<template>
    <div>
      <el-button round @click="$router.push('/')">年龄</el-button>
      <el-button round @click="$router.push('/')">种类</el-button>
      <el-button round @click="$router.push('/')">性别</el-button>
      <el-button round @click="$router.push('/')">毛长</el-button>
      <el-button round @click="$router.push('/')">驱虫</el-button>
      <el-button round @click="$router.push('/')">收养费用</el-button>
    </div>
</template>

<script>
    export default {
        name: "attributes"
    }
</script>

<style scoped>

</style>
