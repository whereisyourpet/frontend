<template>
  <div>
    <div class="" >
      <div class="" v-for="publishedPet in publishedPets" :key="publishedPet.id">
        <div @click="$router.push('/Pet/'+publishedPet.id)">
          <el-card class="organization-card">
            <el-container>
              <el-main class="organization-info-right">
                <div class="organization-title word-style" style="font-size: xx-large; ">
                  <a @click="$router.push('/Pet/'+publishedPet.id)" style="text-decoration: none">组织名称：{{ publishedPet.name }}</a>
                </div>
                <div class="organization-time word-style" style="font-size: x-large; ">
                  负责人：{{publishedPet.name}}
                </div>
              </el-main>
            </el-container>
          </el-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "user-info"
    //  接口没定我写个捷豹写
    }
</script>

<style scoped>

</style>
