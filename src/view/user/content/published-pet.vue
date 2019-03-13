<template>
  <div>
    <div class="" v-for="(pet,key) in pets_list" :key="key">
      <div @click="$router.push('/Pet/'+pet.id)">
        <el-card class="published-pet-card">
          <el-container>
            <el-main class="published-pet-info-right">
              <div class="published-pet-title word-style" style="font-size: xx-large; ">
                <a @click="$router.push('/Pet/'+pet.id)" style="text-decoration: none">宠物名称：{{ pet.pet_name }}</a>
              </div>
              <div class="published-pet-time word-style" style="font-size: x-large; ">
                <!--是否被领养：{{}}-->
                <!--下面判断 是否领养人为空-->
                <!--{{publishedPet.name}}-->
              </div>
            </el-main>
          </el-container>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
  import { get_pets_of_user } from "../../../api/api";
  // import { get_pet_from_id } from "../../../api/api";
  import { get_pet_info_from_idlist } from "../../../api/api";

  export default {
        name: "user-info",
      data(){
          return {
            pet_ids:[],
            pets_list:[],
          }
      },
    //  接口没定我写个捷豹写,
    // 现在有了，我开始写捷豹
        methods:{
          get_user_pets(){
            get_pets_of_user()
              .then(res =>{
                this.pet_ids = res.data
                // console.log(659)
                // console.log(this.pet_ids.data)
                // console.log(this.pet_ids)
                // console.log(679)
              }).catch( e => {
              console.log(e.response.data)
            })
          },
          get_pets_info(pets_id){
            get_pet_info_from_idlist({pets_id : pets_id})
              .then(res => {
                this.pets_list = res.data
              }).catch( e => {
              console.log(e.response.data)
            })

          },
          if_no_pets_published(){
            if (this.pets_list.length ==0 ){
              this.$notify({
                title: '警告',
                message: '目前没有发布的宠物信息',
                type: 'warning'
              });
            }
          },

        },
        mounted(){
          this.get_user_pets()
          this.if_no_pets_published()
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
