<template>
  <div class="personal-basic">
    <div style="height:33px"></div>
    <div class="form-style">
      <div style="height:15px"></div>
      <h2 style="text-align: center">个人中心</h2>
      <div style="height:15px"></div>
      <div style="border-top:1px solid #DCDCDC"></div>
      <el-main>
        <el-form label-width="100px">
          <div class="div-a">
            <el-form-item>
              <span slot="label">性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别</span>
              <el-input disabled style="width:217px"></el-input>
            </el-form-item>
          </div>
          <div class="div-a">
            <el-form-item label="所在州域">
              <el-input style="width:217px"></el-input>
            </el-form-item>
          </div>
          <div class="div-a">
            <el-form-item label="有无宠物">
              <el-radio label="1">有</el-radio>
              <el-radio label="2">无</el-radio>
            </el-form-item>
          </div>
          <div class="div-a">
            <el-form-item label="收养意愿">
              <el-radio label="1">有</el-radio>
              <el-radio label="2">无</el-radio>
            </el-form-item>
          </div>
          <div class="div-a">
            <el-form-item label="收养数量">
              <el-input disabled style="width:217px"></el-input>
            </el-form-item>
          </div>
          <div class="div-a">
            <el-form-item label="情感状况">
              <el-select placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
          </div>
          <div class="div-a">
            <el-form-item label="电子邮箱">
              <el-input style="width:217px"></el-input>
            </el-form-item>
          </div>
          <div class="div-a">
            <el-form-item label="联系电话">
              <el-input style="width:217px"></el-input>
            </el-form-item>
          </div>
          <el-form-item style="text-align: center" label-width="0px">
            <el-button type="primary" @click="handle_modify">保存修改</el-button>
          </el-form-item>
        </el-form>
      </el-main>
    </div>
    <div style="height:35px"></div>
  </div>
</template>

    <script>
export default {
  name: "basic"
};
</script>

    <style scoped>
.personal-basic {
  background-image: url("../../assets/image_repo/background.jpg");
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
