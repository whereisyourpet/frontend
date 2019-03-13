<template>
 <div class="body">
    <el-container class="background">
      <el-card class="form-style">
          <h2 style="text-align: center">为你推荐</h2>
  <div class="published-pet-list">
    <div class="published-pet-card" v-for="pet in this.Global.find_data" :key="pet.pet_id">
      <div @click="$router.push('/Pet/'+pet.id)">
        <el-card class="published-pet-card" style="float: left;width: 45%; margin-top:15px;margin-left:3%;border-radius: 15px;" >
          <el-container>
            <el-main class="published-pet-info-right" >
              <div>
                <div class="published-pet-title word-style" style="font-size: x-large; ">
                  <a
                    @click="$router.push('/Pet/'+pet.id)"
                    style="text-decoration: none"
                  >宠物名称:{{pet.pet_name}}</a>
                </div>
                <br>
                
                <div class style="font-size: large; ">
                  <a
                    @click="$router.push('/Pet/'+pet.id)"
                    style="text-decoration: none"
                  >性别：{{pet.gender}}</a>&nbsp;&nbsp;&nbsp;
                   <a
                    @click="$router.push('/Pet/'+pet.id)"
                    style="text-decoration: none"
                  >年龄：{{pet.pet_age}}</a>&nbsp;&nbsp;&nbsp;
                   <a
                    @click="$router.push('/Pet/'+pet.id)"
                    style="text-decoration: none"
                  >救助人：{{pet.rescuer_name}}</a>&nbsp;&nbsp;&nbsp;
                </div>
              </div> 
            </el-main>  
          </el-container>
        </el-card>
      </div>
    </div>
  </div>
   </el-card>
    </el-container>
  </div>
</template>
<script>

export default {
  name: "find-pet",
  data() {
    return {
      pet_ids: [],
      pets_list: [],
      update: 1
    };
  },
  mounted() {
    let me = this;
    console.log(me.Global.find_data)
  },
  //  接口没定我写个捷豹写,
  // 现在有了，我开始写捷豹
  methods: {
  }
}
</script>
<style scoped>
.background {
  background-image: url("../../assets/image_repo/background-finger.jpeg");
}

.form-style {
  width: 70%;
  margin-left: 15%;
  margin-top: 30px;
  margin-bottom: 70px;
  border-radius: 2%;
  background: rgba(255, 255, 255, 0.9);
}
.el-main {
  float: left;
  width: 49%;
}


#submit_button {
  width: 100%;
  margin-bottom: 20px;
}

.el-input {
  max-width: 194px;
}
</style>