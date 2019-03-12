<template>
  <div>

<el-menu mode="horizontal"
      class="el-menu-vertical-demo personal-sidenav"
      @select="change_component">
      <el-menu-item index="type"><el-button type="primary" round >种类</el-button></el-menu-item>
      <el-menu-item index="gender"><el-button type="primary" round >性别</el-button></el-menu-item>
      <el-menu-item index="MaturitySize"><el-button type="primary" round >体型</el-button></el-menu-item>
      <el-menu-item index="FurLength"><el-button type="primary" round >毛长</el-button></el-menu-item>
      <el-menu-item index="Dewormed"><el-button type="primary" round >驱虫</el-button></el-menu-item>
      <el-menu-item index="Vaccinated"><el-button type="primary" round >疫苗</el-button></el-menu-item>
      <el-menu-item index="Quantity"><el-button type="primary" round >数量</el-button></el-menu-item>
      <el-menu-item index="location"><el-button type="primary" round >地域</el-button></el-menu-item>
      
     
</el-menu>

    <el-main class="personal-content">
      <component :is="componentName"></component>
    </el-main>
  </div>
</template>

<script>
import type from "../content/speed/type";
import gender from "../content/speed/gender";
import MaturitySize from "../content/speed/MaturitySize";
import Quantity from "../content/speed/Quantity";
import Vaccinated from "../content/speed/Vaccinated";
import Dewormed from "../content/speed/Dewormed";
import FurLength from "../content/speed/FurLength";
import location from "../content/speed/location";
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
          case "location":
          this.componentName = "location";
          break;

        default:
          break;
      }
    }
  },
  mounted() {
        this.componentName = 'type'
      },
  components: {
    type,
    gender,
    MaturitySize,
    Quantity,
    Vaccinated,
    Dewormed,
    FurLength,
    location
  }
};
</script>

<style scoped>
</style>
