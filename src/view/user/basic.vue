<template>
  <div class="personal-basic">
    <el-main>
      <el-form >
        <el-form-item label="性别">
          <el-input disabled ></el-input>
        </el-form-item>
        <el-form-item label="所在州">
          <el-input ></el-input>
        </el-form-item>
        <el-form-item label="有无宠物">
          <el-radio  label="1">备选项</el-radio>
          <el-radio  label="2">备选项</el-radio>
        </el-form-item>
        <el-form-item label="收养意愿">
          <el-radio  label="1">备选项</el-radio>
          <el-radio  label="2">备选项</el-radio>
        </el-form-item>
        <el-form-item label="收养数量">
          <el-input disabled ></el-input>
        </el-form-item>
        <el-form-item label="情感状况">
          <el-select placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input ></el-input>
        </el-form-item>
        <el-form-item label="联系电话">
          <el-input ></el-input>
        </el-form-item>
        <el-button type="primary" @click="handle_modify">保存修改</el-button>
      </el-form>
    </el-main>
  </div>
</template>

<script>
    export default {
        name: "basic"
    }
</script>

<style scoped>

</style>
