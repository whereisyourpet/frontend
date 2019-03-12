<template>
  <div>
    <div class="" >
      <div class="" v-for="publishedPet in publishedPets" :key="publishedPet.id">
        <div @click="$router.push('/Pet/'+publishedPet.id)">
          <el-card class="published-pet-card">
            <el-container>
              <el-main class="published-pet-info-right">
                <div class="published-pet-title word-style" style="font-size: xx-large; ">
                  <a @click="$router.push('/Pet/'+publishedPet.id)" style="text-decoration: none">宠物名称：{{ publishedPet.name }}</a>
                </div>
                <div class="published-pet-time word-style" style="font-size: x-large; ">
                  发布人：{{publishedPet.name}}
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
  .published-pet-list{
    padding-top: 3%;
    width: 80%;
    padding-left: 10%;
    /*height: 200px;*/

  }
  .published-pet-card{
    height: 200px;
  }
  .word-style{
    padding-left: 3%;
    padding-bottom: 3%;
  }
  .published-pet-button{
    float: right;
    /*padding-top: 2%;*/
    padding-right: 10%;
  }
</style>
