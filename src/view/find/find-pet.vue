<template>
 <div class="body">
    <el-container class="background">
      <el-card class="form-style" style="padding-bottom:20px">
          <h2 style="text-align: center">为你推荐</h2>
  <div class="published-pet-list" >
    <div class="published-pet-card" v-for="pet in this.pets_list" :key="pet.pet_id">
      <div >
        <el-card class="published-pet-card" style="float: left;width: 45%; margin-top:15px;margin-left:3%;border-radius: 15px;" >
          <el-container>
            <el-main class="published-pet-info-right" >
              <div>
                <div class="published-pet-title word-style" style="font-size: large; ">
                  <a style="text-decoration: none"
                  >宠物名称:{{pet[0].pet_name}}</a>
                </div>
                <br>
                <div class style="font-size: large; ">
                  <a style="text-decoration: none">受欢迎程度：{{pet[0].popularity_star}}</a>&nbsp;&nbsp;&nbsp;
                   <a style="text-decoration: none">被收养速率：{{pet[0].adoption_star}}</a>&nbsp;&nbsp;&nbsp;&nbsp;
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
    me.pets_list = me.Global.find_data
    // console.log(me.Global.find_data)
    console.log(11)
    console.log(me.pets_list)
    console.log(11)
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
