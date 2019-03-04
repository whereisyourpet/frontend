<template>
  <div class="body">
    <div style="height:30px"></div>
    <el-card class="form-style">
      <el-form label-width="100px">
        <div style="height:15px"></div>
        <h2 style="text-align: center">发布流浪动物信息</h2>
        <div style="height:15px"></div>
        <div class="div-a">
          <el-form-item>
            <span slot="label">名&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;称</span>
            <el-input type="text" placeholder style="width:217px"></el-input>
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
        <el-form-item label="动物描述">
          <el-input type="textarea" rows="3" style="width:590px"></el-input>
        </el-form-item>
        <div class="div-a">
          <el-form-item label="动物图片">
            <el-upload
              class="upload-demo"
              action
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :before-remove="beforeRemove"
              multiple
              :limit="3"
              :on-exceed="handleExceed"
              :file-list="fileList"
            >
              <el-button size="small" type="primary">点击上传
                <i class="el-icon-upload el-icon--right"></i>
              </el-button>
              <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
          </el-form-item>
        </div>
        <div class="div-a">
          <el-form-item label="动物视频">
            <el-upload
              class="upload-demo"
              action
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :before-remove="beforeRemove"
              multiple
              :limit="3"
              :on-exceed="handleExceed"
              :file-list="fileList"
            >
              <el-button size="small" type="primary">点击上传
                <i class="el-icon-upload el-icon--right"></i>
              </el-button>
              <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
          </el-form-item>
        </div>
        <!--<el-form-item label="信息确认">-->
        <!--<el-button type="primary" @click="get_url">确认上传图片</el-button>-->
        <!--</el-form-item>-->
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
  name: "evaluate"
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
