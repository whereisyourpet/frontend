<template>
  <div class="personal-basic">
    <div style="height:33px"></div>
    <div class="form-style">
      <div style="height:15px"></div>
      <h2 style="text-align: center">个人中心</h2>
      <div style="height:15px"></div>
      <div style="border-top:1px solid #DCDCDC"></div>
      <el-main>
        <el-form :model="data" label-width="120px" >
            <el-form-item prop = "gender"  required>
              <span slot="label">性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别</span>
              <el-radio v-model="data.gender" label="2">男</el-radio>
              <el-radio v-model="data.gender" label="1">女</el-radio>
            </el-form-item>

            <el-form-item required  prop = "location" >
              <span slot="label">所在州域</span>
              <el-select required   v-model="data.location" placeholder="请选择">
                <el-option
                  v-for="item in data.location_option"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>


            <el-form-item  prop = "has_pet" label="有无宠物">
              <el-radio v-model="data.has_pet" label="1">有</el-radio>
              <el-radio v-model="data.has_pet" label="2">无</el-radio>
            </el-form-item>

            <el-form-item prop = "willing" label="收养意愿" required>
              <el-radio v-model="data.willing" label="1">有</el-radio>
              <el-radio v-model="data.willing" label="2">无</el-radio>
            </el-form-item>

            <el-form-item prop = "number" label="收养数量" required>
              <el-input v-model="data.number" style="width:217px"></el-input>
            </el-form-item>

            <el-form-item prop = "married" label="情感状况">
              <el-radio v-model="data.married" label="1">已婚</el-radio>
              <el-radio v-model="data.married" label="2">未婚</el-radio>
            </el-form-item>


            <el-form-item prop = "email" label="电子邮箱">
              <el-input v-model="data.email" style="width:217px"></el-input>
            </el-form-item>


            <el-form-item prop = "phone" label="联系电话" >
              <el-input v-model="data.phone" style="width:217px"></el-input>
            </el-form-item>

          <el-form-item  style="float:right;margin-right:60px" label-width="0px">
            <el-button type="primary" @click="handle_modify()">保存修改</el-button>
          </el-form-item>
          </el-form>
      </el-main>
    </div>
    <div style="height:35px"></div>
  </div>
</template>

    <script>
    import qs from "qs";
export default {
  name: "basic",
  data() {
    return {
      data: {
        username: "",
        email: "",
        nickname: "",
        location: "",
        location_option: [
          {
            value: "选项1",
            label: "Johor"
          },
          {
            value: "选项2",
            label: "Kedah"
          },
          {
            value: "选项3",
            label: "Kelantan"
          },
          {
            value: "选项4",
            label: "Kuala Lumpur"
          },
          {
            value: "选项5",
            label: "Labuan"
          },
          {
            value: "选项6",
            label: "Melaka"
          },
          {
            value: "选项7",
            label: "Negeri Sembilan"
          },
          {
            value: "选项8",
            label: "Pahang"
          },
          {
            value: "选项9",
            label: "Perak"
          },
          {
            value: "选项10",
            label: "Perlis"
          },
          {
            value: "选项11",
            label: "Pulau Pinang"
          },
          {
            value: "选项12",
            label: "Sabah"
          },
          {
            value: "选项13",
            label: "Sarawak"
          },
          {
            value: "选项14",
            label: "Selangor"
          },
          {
            value: "选项15",
            label: "Terengganu"
          }
        ],
        has_pet: "1",
        willing: "1",
        number: "",
        phone: "",
        married: "1",
        gender: "1",
        description: ""
      }
      // rules:{

      // },
    };
  },
  mounted() {
    let me = this;
    let setting = {
      method: "GET",
      url: "http://127.0.0.1:8000/users/get_user_info",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    };
    this.$axios.defaults.withCredentials = true;
    this.$axios(setting).then(response => {
      console.log(response);

      me.data.username = response.data.username;
      me.data.email = response.data.email;
      me.data.nickname = response.data.nickname;
      me.data.location = response.data.location;
      if(response.data.has_pet==true)
        me.data.has_pet = "1";
      else
        me.data.has_pet = "2";
      if(response.data.willing==true)
        me.data.willing = "1";
      else
        me.data.willing = "2";
      if(response.data.married==true)
        me.data.married = "1";
      else
        me.data.married = "2";
      if(response.data.gender==true)
        me.data.gender = "1";
      else
        me.data.gender = "2";
      me.data.number = response.data.number;
      me.data.phone = response.data.phone;
      me.data.email = response.data.email;
      me.data.description = response.data.description;
    });
  },
  methods: {
    handle_modify() {
      let me = this
      let postData = qs.stringify({
        has_pet: this.data.has_pet,
        willing: this.data.willing,
        number: this.data.number,
        phone: this.data.phone,
        married: this.data.married,
        gender: this.data.gender,
        email: this.data.email,
        description: this.data.description,
        location: this.data.location,
      });
      this.$axios.defaults.withCredentials=true;
      this.$axios.post("http://127.0.0.1:8000/users/modify",postData)
        .then(function(response) {
          console.log(response);
          console.log(response.status);
          console.log(response.statusText);
          console.log(response.headers);
          console.log(response.config);
          if(response.data.success){
            alert("修改成功")
            // me.$router.push('/')
          }else{
            alert(response.data.msg)
          }
        });
    }
  },
};
</script>

 <style scoped>
.personal-basic {
  /*background-image: url("../../../assets/image_repo/background2.jpg");*/
  /*background-size: 100%;*/
  /*background-repeat: no-repeat;*/
  /*background-attachment: fixed;*/
}
.form-style {
  /* width: 60%; */
  margin-left: 10%;
  border-radius: 2%;
  background: rgba(255, 255, 255, 0.9);
}
.el-form-item {
  float: left;
  width: 49%;
}
</style>
