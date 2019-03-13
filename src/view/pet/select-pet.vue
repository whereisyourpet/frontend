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
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>卡片名称</span>
          <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
        </div>
      </el-card>
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
        upquantity: this.upquantity
      });   
      console.log(postData);

      this.$axios.defaults.withCredentials = true; 
      this.$axios
        .post("http://127.0.0.1:8000/pets/petfilter", postData)
        .then(function(response) {
          console.log(response);
          if (response.data.success) {
            console.log(response);
            // me.$router.push('/find-pet')
            // location.reload();
            console.log(response.data.data);
          } else {
            alert(response.data.success);
            console.log('失败');
          }
        });
    }
  },
  data() {
    return {
      pet_type: "",
      upquantity: "",
      primary_color: "",
      pet_gender: "",
      state: "",
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
        {
          value: "1",
          label: "Johor"
        },
        {
          value: "2",
          label: "Kedah"
        },
        {
          value: "3",
          label: "Kelantan"
        },
        {
          value: "4",
          label: "Kuala Lumpur"
        },
        {
          value: "5",
          label: "Labuan"
        },
        {
          value: "6",
          label: "Melaka"
        },
        {
          value: "7",
          label: "Negeri Sembilan"
        },
        {
          value: "8",
          label: "Pahang"
        },
        {
          value: "9",
          label: "Perak"
        },
        {
          value: "10",
          label: "Perlis"
        },
        {
          value: "11",
          label: "Pulau Pinang"
        },
        {
          value: "12",
          label: "Sabah"
        },
        {
          value: "13",
          label: "Sarawak"
        },
        {
          value: "14",
          label: "Selangor"
        },
        {
          value: "15",
          label: "Terengganu"
        }
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
