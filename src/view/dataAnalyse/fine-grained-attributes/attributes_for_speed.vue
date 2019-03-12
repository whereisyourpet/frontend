<template>
    <div>
      <el-button round @click="$router.push('/')">种类</el-button>
      <el-button round @click="$router.push('/')">性别</el-button>
      <el-button round @click="$router.push('/')">成熟体型</el-button>
      <el-button round @click="$router.push('/')">毛发长度</el-button>
      <el-button round @click="$router.push('/')">是否驱虫</el-button>
      <el-button round @click="$router.push('/')">接种疫苗</el-button>
      <el-button round @click="$router.push('/')">数量</el-button>
    </div>
</template>

<script>
    export default {
        name: "attributes_for_speed"
    }
</script>

<style scoped>

</style>
