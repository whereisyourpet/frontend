<template>
  <div>
    <el-menu
      mode="horizontal"
      class="el-menu-vertical-demo personal-sidenav"
      @select="change_component"
      style="margin-top: 50px;"
    >
      <el-menu-item index="type">
        <el-button type="primary">种类</el-button>
      </el-menu-item>
      <el-menu-item index="gender">
        <el-button type="primary">性别</el-button>
      </el-menu-item>
      <el-menu-item index="MaturitySize">
        <el-button type="primary">体型</el-button>
      </el-menu-item>
      <el-menu-item index="FurLength">
        <el-button type="primary">毛长</el-button>
      </el-menu-item>
      <el-menu-item index="Dewormed">
        <el-button type="primary">驱虫</el-button>
      </el-menu-item>
      <el-menu-item index="Vaccinated">
        <el-button type="primary">疫苗</el-button>
      </el-menu-item>
      <el-menu-item index="Quantity">
        <el-button type="primary">数量</el-button>
      </el-menu-item>
      <el-menu-item index="type_gender">
        <el-button type="primary">种类&性别</el-button>
      </el-menu-item>
      <el-menu-item index="type_furlength">
        <el-button type="primary">种类&毛长</el-button>
      </el-menu-item>
    </el-menu>

    <el-main class="personal-content" style="margin-left:100px;margin-top: 20px;">
      <component :is="componentName"></component>
    </el-main>
  </div>
</template>

<script>
import type from "../content/like/type";
import gender from "../content/like/gender";
import MaturitySize from "../content/like/MaturitySize";
import Quantity from "../content/like/Quantity";
import Vaccinated from "../content/like/Vaccinated";
import Dewormed from "../content/like/Dewormed";
import FurLength from "../content/like/FurLength";
import type_furlength from "../content/like/type_furlength";
import type_gender from "../content/like/type_gender";
import { mapState } from "vuex";

export default {
  name: "attributes_for_like",
  data() {
    return {
      componentName: ""
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    change_component(key) {
      switch (key) {
        case "type":
          this.componentName = "type";
          break;
        case "gender":
          this.componentName = "gender";
          break;
        case "MaturitySize":
          this.componentName = "MaturitySize";
          break;
        case "Quantity":
          this.componentName = "Quantity";
          break;
        case "Vaccinated":
          this.componentName = "Vaccinated";
          break;
        case "Dewormed":
          this.componentName = "Dewormed";
          break;
        case "FurLength":
          this.componentName = "FurLength";
          break;
        case "type_furlength":
          this.componentName = "type_furlength";
          break;
        case "type_gender":
          this.componentName = "type_gender";
          break;

        default:
          break;
      }
    }
  },
  mounted() {
    this.componentName = "type";
  },
  components: {
    type,
    gender,
    MaturitySize,
    Quantity,
    Vaccinated,
    Dewormed,
    FurLength,
    type_furlength,
    type_gender
  }
};
</script>

<style scoped>
.el-menu-item {
  float: left;
  padding: 0 5px;
}
</style>
