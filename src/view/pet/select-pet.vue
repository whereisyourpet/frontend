<template>
  <div>
      <el-form label-width="120px">
          <div class="select-block" style="float: left">
            <el-form-item>
              <span slot="label">请选择种类</span>
              <el-select v-model="pet_type" placeholder="请选择">
                <el-option
                  v-for="item in pet_type_option"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
          </div>
          <div class="select-block float-right-padding" style="float: right">
            <el-form-item>
              <!--<span slot="label">请输入最大数量&nbsp;&nbsp;&nbsp;</span>-->
              <span slot="label">请输入最大数量</span>
              <el-input v-model="quantity" placeholder="请输入" style="width:217px"></el-input>
            </el-form-item>
          </div>
          <div class="select-block" style="float:left">
            <el-form-item>
              <span slot="label">请选择颜色</span>
              <el-select v-model="primary_color" placeholder="请选择">
                <el-option
                  v-for="item in primary_color_option"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
          </div>
          <div class="select-block" style="float: left">
            <el-form-item>
              <span slot="label">请选择性别</span>
              <el-select v-model="pet_gender" filterable placeholder="请选择">
                <el-option
                  v-for="item in pet_gender_option"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
          </div>
          <div class="select-block" style="float: left">
            <el-form-item>
              <span slot="label">请选择所在州</span>
              <el-select v-model="state" filterable placeholder="请选择">
                <el-option
                  v-for="item in state_option"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
          </div>
          <div class="confirm-button float-right-padding" style="float:right;">
            <el-button type="primary" id="submit_button" @click="handle_select()">开始筛选</el-button>
          </div>
      </el-form>
    <div>
      <hr width="95%" style="margin-top: 2%"  noshade="noshade" color="#409EFF" size="1"/>
    </div>
    <!--没接口写个几把-->
    <div>
      <div class="published-pet-list">
        <div class="published-pet-card"  v-for="pet in pets_list" :key="pet">
          <div @click="">
            <el-card style="padding-left: 5%">
              <el-container>
                <el-main class="published-pet-info-right">
                  <div>
                    <div class="published-pet-title word-style" style="font-size: xx-large; ">
                      <a
                        @click=""
                        style="text-decoration: none"
                      >宠物名称:{{pet.pet_name}}</a>
                    </div>
                    <div class="word-style-in-card" style="font-size: large; ">
                      性别：{{pet.gender}}
                    </div>
                    <div class="word-style-in-card" style="font-size: large; ">
                      种类：{{pet.pet_type}}
                    </div>
                    <div class="word-style-in-card" style="font-size: large; ">
                      毛长：{{pet.fur_length}}
                    </div>
                    <div class="word-style-in-card" style="font-size: large; ">
                      主色：{{pet.primary_color}}
                    </div>
                    <div class="word-style-in-card" style="font-size: large; ">
                      年龄：{{pet.pet_age}}
                    </div>
                    <div class="word-style-in-card" style="font-size: large; ">
                      救助人：{{pet.rescuer_name}}
                    </div>
                  </div>
                </el-main>
              </el-container>
            </el-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import qs from "qs";
import { get_pet_from_id } from "../../api/api";

export default {
  name: "select-pet",
  methods: {
    handle_select() {
      let me = this;
      let postData = qs.stringify({
        pet_type: this.pet_type,
        pet_gender: this.pet_gender,
        primary_color: this.primary_color,
        state: this.state,
        quantity: this.quantity,

          // secondary_color1:"",
          // secondary_color2:"",
          // upfee:1000,
          // downfee:0,
          // downquantity:0,
      });
      // console.log(111)
      this.$axios.defaults.withCredentials = true;
      this.$axios
        .post("http://127.0.0.1:8000/pets/petfilter", postData)
        .then(function(response) {
          // console.log(postData);
          if (response.data.success) {
            // console.log(response.data.data);
            me.pets = response.data.data
            // console.log(me.pets);
            me.get_pets_info();
          } else {
            alert(response.data.success);
            console.log('失败');
          }
        });


    },
    get_pets_info() {
      let me = this;
      for (let i = 0; i < this.pets.length; i++) {
        let postData = qs.stringify({
          pet_id: this.pets[i].pet_id
        });
        console.log(postData);
        this.$axios.defaults.withCredentials = true;
        this.$axios
          .post("http://127.0.0.1:8000/pets/get_pet_info_from_id", postData)
          .then(function(response) {
            // console.log("The get pets info:");
            console.log(response.data.data[0]);
            me.$set(me.pets_list, i, response.data.data[0]);
            console.log(this.pets_list)
          });
      }

      // get_pet_info_from_idlist({pets_id : pets_id})
      //   .then(res => {
      //     this.pets_list = res.data
      //   }).catch( e => {
      //   console.log(e.response.data)
      // })
    },

  },
  data() {
    return {
      pet_type: "",
      quantity: "",
      primary_color: "",
      pet_gender: "",
      state: "",
      pets:[],
      pets_list:[],
      pet_type_option: [
        {
          value: "1",
          label: "狗"
        },
        {
          value: "2",
          label: "猫"
        }
      ],
      quantity: "",
      primary_color_option: [
        { value: "1", label: "Black" },
        { value: "2", label: "Brown" },
        { value: "3", label: "Golden" },
        { value: "4", label: "Yellow" },
        { value: "5", label: "Cream" },
        { value: "6", label: "Gray" },
        { value: "7", label: "White" }
      ],
      pet_gender_option: [
        {
          value: "1",
          label: "公"
        },
        {
          value: "2",
          label: "母"
        },
        {
          value: "3",
          label: "混合"
        }
      ],
      state_option: [
        {value: "41336",label: "Johor"},
        {value: "41325",label: "Kedah"},
        {value: "41367",label: "Kelantan"},
        {value: "41401",label: "Kuala Lumpur"},
        {value: "41415",label: "Labuan"},
        {value: "41324",label: "Melaka"},
        {value: "41332",label: "Negeri Sembilan"},
        {value: "41335",label: "Pahang"},
        {value: "41330",label: "Perak"},
        {value: "41380",label: "Perlis"},
        {value: "41327",label: "Pulau Pinang"},
        {value: "41345",label: "Sabah"},
        {value: "41342",label: "Sarawak"},
        {value: "41326",label: "Selangor"},
        {value: "41361",label: "Terengganu"},


      ]
    };
  }
};
</script>

<style scoped>
.select-block {
  padding-left: 5%;
  padding-top: 3%;
}
.confirm-button {
  /*padding-left: 25%;*/
  /*padding-top: 3%;*/
  padding-top: 3%;
  /*padding-right: 20%;*/
}
.float-right-padding{
  padding-right: 17%;
}
.published-pet-list{
  padding-left: 18%;
  width: 80%;
  padding-top: 3%;
}
.published-pet-card{
  width: 80%;
  /*padding-left: 10%;*/
  padding-top: 3%;
}
.word-style-in-card{
  padding-left: 20%;
  float: left;
}
</style>
