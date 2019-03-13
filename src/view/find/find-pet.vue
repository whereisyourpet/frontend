<template>
  <div class="published-pet-list">
    <div class="published-pet-card" v-for="pet in this.Global.find_data" :key="pet.pet_id">
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
</template>
<script>

export default {
  name: "find-pet",
  data() {
    return {
      pet_ids: [],
      pets_list: [],
      update: 1
    };
  },
  mounted() {
    let me = this;
    console.log(me.Global.find_data)
  },
  //  接口没定我写个捷豹写,
  // 现在有了，我开始写捷豹
  methods: {
  }
}
</script>
