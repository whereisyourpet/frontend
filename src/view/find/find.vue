<template>
  <div class="body">
    <div style="height:30px"></div>
    <el-card class="form-style">
      <el-form label-width="100px">
        <div style="height:15px"></div>
        <h2 style="text-align: center">添加你的喜欢参数</h2>
        <div style="height:15px"></div>
        <div class="div-a">
          <el-form-item label="领养费用">
            <el-input type="text" placeholder="货币单位MYR" style="width:217px"></el-input>
          </el-form-item>
        </div>
        <div class="div-a">
          <el-form-item>
            <span slot="label">类&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别</span>
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
          <el-form-item>
            <!--先放一放，问题很大-->
            <span slot="label">性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别</span>
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
          <el-form-item>
            <span slot="label">年&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;龄</span>
            <el-input type="text" placeholder="请输入年龄（单位为月份）" style="width:217px"></el-input>
          </el-form-item>
        </div>
        <div class="div-a">
          <el-form-item label="主要血统">
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
          <el-form-item label="次要血统">
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
          <el-form-item label="主要毛色">
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
          <el-form-item label="次要毛色">
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
          <el-form-item label="再次毛色">
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
          <el-form-item label="成熟体型">
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
          <el-form-item>
            <span slot="label">毛&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;长</span>
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
          <el-form-item label="所在州域">
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
          <el-form-item label="是否除虫">
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
          <el-form-item label="有无疫苗">
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
          <el-form-item label="是否绝育">
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
          <el-form-item label="健康状况">
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
        <el-form-item style="text-align: center" label-width="-50px">
          <el-button type="primary" @click="handle_register">提交</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <div style="height:30px"></div>
  </div>
</template>

<script>
export default {
  name: "find"
};
</script>

<style scoped>
.body {
  background-image: url("../../assets/image_repo/background1.jpg");
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
