<template>
  <div>
    <el-row :gutter="12">
      <el-form label-width="100px">
        <el-col :span="8">
          <div>
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
        </el-col>
        <el-col :span="8">
          <div>
            <el-form-item>
              <span slot="label">请输入最大数量&nbsp;&nbsp;&nbsp;</span>
              <el-input v-model="upquantity" placeholder="请输入"></el-input>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="8">
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
        </el-col>
        <el-col :span="8">
          <div class="select-block">
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
        </el-col>
        <el-col :span="8">
          <div class="select-block">
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
        </el-col>
        <el-col :span="8">
          <div class="confirm-button">
            <el-button type="primary" id="submit_button" @click="handle_select()">开始筛选</el-button>
          </div>
        </el-col>
      </el-form>
    </el-row>

    <!--没接口写个几把-->
    <div>
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
    </div>
  </div>
</template>

<script>
import qs from "qs";
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
        upquantity: this.upquantity,

          secondary_color1:"",
          secondary_color2:"",
          upfee:1000,
          downfee:0,
          downquantity:0,
      });

      this.$axios.defaults.withCredentials = true;
      this.$axios
        .post("http://127.0.0.1:8000/pets/petfilter", postData)
        .then(function(response) {
          console.log(postData);
          if (response.data.success) {

            console.log(response.data);
          } else {
            alert(response.data.success);
            console.log('失败');
          }
        });
    },

  },
  data() {
    return {
      pet_type: "",
      upquantity: "",
      primary_color: "",
      pet_gender: "",
      state: "",
      pets:[],
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
      upquantity: "",
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
  padding-left: 25%;
  padding-top: 3%;
}
</style>
