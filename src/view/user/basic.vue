<template>
  <div class="personal-basic">
    <div style="height:33px"></div>
    <div class="form-style">
      <div style="height:15px"></div>
      <h2 style="text-align: center">个人中心</h2>
      <div style="height:15px"></div>
      <div style="border-top:1px solid #DCDCDC"></div>
      <el-main>
        <el-form :model="data" :rules="rules" ref="data" label-width="100px">
          <div class="div-a">
            <el-form-item prop="gender" required>
              <span slot="label">性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别</span>
              <el-input v-model="data.gender" disabled style="width:217px"></el-input>
            </el-form-item>
          </div>
          <div class="div-a">
            <el-form-item  prop="state" label="所在州域" required>
              <el-input v-model="data.location" style="width:217px"></el-input>
            </el-form-item>
          </div>
          <div class="div-a">
            <el-form-item  v-model="data.has_pet" label="有无宠物">
              <el-radio label="1">有</el-radio>
              <el-radio label="2">无</el-radio>
            </el-form-item>
          </div>
          <div class="div-a">
            <el-form-item v-model="data.willing" label="收养意愿" required>
              <el-radio label="1">有</el-radio>
              <el-radio label="2">无</el-radio>
            </el-form-item>
          </div>
          <div class="div-a">
            <el-form-item v-model="data.number" label="收养数量" required>
              <el-input disabled style="width:217px"></el-input>
            </el-form-item>
          </div>
          <div class="div-a">
            <el-form-item  label="情感状况">
              <el-select v-model="data.married" placeholder="请选择">
                <!-- <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option> -->
              </el-select>
            </el-form-item>
          </div>
          <div class="div-a">
            <el-form-item  label="电子邮箱">
              <el-input v-model="data.email" style="width:217px"></el-input>
            </el-form-item>
          </div>
          <div class="div-a">
            <el-form-item label="联系电话">
              <el-input v-model="data.number" style="width:217px"></el-input>
            </el-form-item>
          </div>
          <el-form-item style="text-align: center" label-width="0px">
            <el-button  type="primary" @click="handle_modify()">保存修改</el-button>
          </el-form-item>
        </el-form>
      </el-main>
    </div>
    <div style="height:35px"></div>
  </div>
</template>

    <script>
export default {
  name: "basic",
  data() {
    return {
      data: {
        username: null,
        email: null,
        nickname: null,
        location: null,
        has_pet: '有',
        willing: '1',
        number: null,
        phone: null,
        married: '1',
        gender: '1',
        description: null,
      },
      rules:{
        
      },
    };
  },
  mounted() {
    let me = this
    let setting = {
      method: "GET",
      url: "http://127.0.0.1:8000/users/get_user_info",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    };
    this.$axios.defaults.withCredentials=true;
    this.$axios(setting).then(response => {
      console.log(response);
      
      // me.data.username = response.data.username;
      // me.data.email = response.data.email;
      // me.data.nickname = response.data.nickname;
      // me.data.location = response.data.location;
      // me.data.has_pet = response.data.has_pet;
      // me.data.willing = response.data.willing;
      // me.data.number = response.data.number;
      // me.data.phone = response.data.phone;
      // me.data.married = response.data.married;
      // me.data.gender = response.data.gender;
      // me.data.description = response.data.description;
    });
  },
  methods: {
    handle_modify(){

    }
  },
};
</script>

    <style scoped>
.personal-basic {
  background-image: url("../../assets/image_repo/background2.jpg");
  background-size: 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
.form-style {
  width: 60%;
  margin-left: 20%;
  border-radius: 2%;
  background: rgba(255, 255, 255, 0.9);
}
.div-a {
  float: left;
  width: 49%;
}
</style>
