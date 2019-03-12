<template>
  <div>
    <div class="" >
      <div class="" v-for="pet in pets_list" :key="pet">
        <div @click="$router.push('/Pet/'+publishedPet.id)">
          <el-card class="published-pet-card">
            <el-container>
              <el-main class="published-pet-info-right">
                <div class="published-pet-title word-style" style="font-size: xx-large; ">
                  <a @click="$router.push('/Pet/'+publishedPet.id)" style="text-decoration: none">宠物名称：{{ pet.pet_name }}</a>
                </div>
                <div class="published-pet-time word-style" style="font-size: x-large; ">
                  是否被领养：
                  <!--下面判断 是否领养人为空-->
                  <!--{{publishedPet.name}}-->
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
  import { get_pets_of_user } from "../../../api/api";

  export default {
        name: "user-info",
      data(){
          return {
            pets_list:[]
          }
      },
    //  接口没定我写个捷豹写,
    // 现在有了，我开始写捷豹
        methods:{
          get_user_pets(){
            get_pets_of_user()
              .then(res =>{
                this.pets_list = res.data
                console.log(pets_list)
              }).catch( e => {
              console.log(e.response.data)
            })
          }
        },
        mounted(){
          this.get_user_pets()
        }

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
