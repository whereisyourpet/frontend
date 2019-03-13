<template>
  <div class="published-pet-list">
    <div class="published-pet-card" v-for="pet in pets_list" :key="pet.pet_id">
      <div @click="$router.push('/Pet/'+pet.id)">
        <el-card class="published-pet-card">
          <el-container>
            <el-main class="published-pet-info-right">
              <div>
                <div class="published-pet-title word-style" style="font-size: xx-large; ">
                  <a
                    @click="$router.push('/Pet/'+pet.id)"
                    style="text-decoration: none"
                  >宠物名称:{{pet.pet_name}}</a>
                </div>
                <div class style="font-size: large; ">
                  <a
                    @click="$router.push('/Pet/'+pet.id)"
                    style="text-decoration: none"
                  >救助人：{{pet.rescuer_name}}</a>
                </div>
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
import { get_pet_from_id } from "../../../api/api";
import { get_pet_info_from_idlist } from "../../../api/api";
import qs from "qs";
export default {
  name: "user-info",
  data() {
    return {
      pet_ids: [],
      pets_list: [],
      update: 1
    };
  },
  //  接口没定我写个捷豹写,
  // 现在有了，我开始写捷豹
  methods: {
    get_user_pets() {
      get_pets_of_user()
        .then(res => {
          this.pet_ids = res.data.data;
          console.log(res.data.data);
          this.get_pets_info();
          console.log("get_user_pets ok");
        })
        .catch(e => {
          console.log(2);
          // console.log(e.response.data);
        });
    },
    get_pets_info() {
      let me = this;
      if (this.pet_ids.length == 0) {
        this.if_no_pets_published();
      }
      for (let i = 0; i < this.pet_ids.length; i++) {
        let postData = qs.stringify({
          pet_id: this.pet_ids[i].pet_id
        });
        console.log(postData);
        this.$axios.defaults.withCredentials = true;
        this.$axios
          .post("http://127.0.0.1:8000/pets/get_pet_info_from_id", postData)
          .then(function(response) {
            console.log("The get pets info:");
            console.log(response.data.data[0]);
            me.$set(me.pets_list, i, response.data.data[0]);
            me.update++;
            // console.log(response);
            // console.log(response.status);
            // console.log(response.statusText);
            // console.log(response.headers);
            // console.log(response.config);
          });
      }

      // get_pet_info_from_idlist({pets_id : pets_id})
      //   .then(res => {
      //     this.pets_list = res.data
      //   }).catch( e => {
      //   console.log(e.response.data)
      // })
    },
    if_no_pets_published() {
      if (this.pets_list.length == 0) {
        this.$message({
          title: "警告",
          message: "目前没有发布的宠物信息",
          type: "warning"
        });
      }
    }
  },
  mounted() {
    this.get_user_pets();
  }
};
</script>

<style scoped>
.published-pet-list {
  padding-top: 3%;
  width: 80%;
  padding-left: 10%;
  /*height: 200px;*/
}
.published-pet-card {
  height: 30%;
}
.word-style {
  padding-left: 3%;
  padding-bottom: 3%;
}
.published-pet-button {
  float: right;
  /*padding-top: 2%;*/
  padding-right: 10%;
}
</style>
