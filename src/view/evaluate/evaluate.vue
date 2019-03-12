<template>
  <div class="body">
    <el-container class="background">
      <el-card class="form-style">
        <el-form label-width="100px">
          <div style="height:15px"></div>
          <h2 style="text-align: center">发布流浪动物信息</h2>
          <div style="height:15px">
            <el-form-item>
              <span slot="label">名&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;称</span>
              <el-input v-model="data.pet_name" type="text" placeholde style="width:217px"></el-input>
            </el-form-item>

            <el-form-item required>
              <span slot="label">类&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别</span>
              <el-select v-model="data.pet_type" placeholder="请选择">
                <el-option
                  v-for="item in data.pet_type_option"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>

            <el-form-item required>
              <!--先放一放，问题很大-->
              <span slot="label">性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别</span>
              <el-select v-model="data.pet_gender" placeholder="请选择">
                <el-option
                  v-for="item in data.pet_gender_option"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>

            <el-form-item required>
              <span slot="label">年&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;龄</span>
              <el-input
                v-model="data.pet_age"
                type="text"
                placeholder="请输入年龄（单位为月份）"
                style="width:217px"
              ></el-input>
            </el-form-item>

            <el-form-item label="主要血统" required>
              <el-select v-model="data.primary_breed" filterable placeholder="请选择">
                <el-option
                  v-for="item in data.primary_breed_option"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="次要血统">
              <el-select v-model="data.secondary_breed" filterable placeholder="请选择">
                <el-option
                  v-for="item in data.secondary_breed_option"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="主要毛色" required>
              <el-select v-model="data.primary_color" placeholder="请选择">
                <el-option
                  v-for="item in data.primary_color_option"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="次要毛色">
              <el-select v-model="data.secondary_color1" placeholder="请选择">
                <el-option
                  v-for="item in data.secondary_color1_option"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="再次毛色">
              <el-select v-model="data.secondary_color2" placeholder="请选择">
                <el-option
                  v-for="item in data.secondary_color2_option"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="成熟体型" required>
              <el-select v-model="data.maturity_size" placeholder="请选择">
                <el-option
                  v-for="item in data.maturity_size_option"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>

            <el-form-item required>
              <span slot="label" required>毛&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;长</span>
              <el-select v-model="data.fur_length" placeholder="请选择">
                <el-option
                  v-for="item in data.fur_length_option"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="所在州域" required>
              <el-select v-model="data.state" placeholder="请选择">
                <el-option
                  v-for="item in data.state_option"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
          </div>

          <div class="div-a">
            <el-form-item label="是否除虫" required>
              <el-select v-model="data.dewormed" placeholder="请选择">
                <el-option
                  v-for="item in data.dewormed_option"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="有无疫苗" required>
              <el-select v-model="data.vaccinated" placeholder="请选择">
                <el-option
                  v-for="item in data.vaccinated_option"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="是否绝育" required>
              <el-select v-model="data.sterilized" placeholder="请选择">
                <el-option
                  v-for="item in data.sterilized_option"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="健康状况" required>
              <el-select v-model="data.health" placeholder="请选择">
                <el-option
                  v-for="item in data.health_option"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
          </div>

          <el-form-item>
            <span slot="label">领养数量</span>
            <el-input v-model="data.quantity" type="text" placeholde style="width:217px"></el-input>
          </el-form-item>

          <el-form-item>
            <span slot="label">领养费用</span>
            <el-input v-model="data.fee" type="text" placeholde style="width:217px"></el-input>
          </el-form-item>

          <el-form-item label="动物图片">
            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :before-remove="beforeRemove"
              multiple
              :limit="3"
              :on-exceed="handleExceed"
              :file-list="fileList"
            >
              <el-button size="small" type="primary">
                点击上传
                <i class="el-icon-upload el-icon--right"></i>
              </el-button>
              <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
          </el-form-item>

          <el-form-item label="动物视频">
            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview2"
              :on-remove="handleRemove2"
              :before-remove="beforeRemove2"
              multiple
              :limit="3"
              :on-exceed="handleExceed2"
              :file-list="fileList2"
            >
              <el-button size="small" type="primary">
                点击上传
                <i class="el-icon-upload el-icon--right"></i>
              </el-button>
              <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
          </el-form-item>

          <!--<el-form-item label="信息确认">-->
          <!--<el-button type="primary" @click="get_url">确认上传图片</el-button>-->
          <!--</el-form-item>-->
          <el-form-item label="动物描述">
            <el-input v-model="data.description" type="textarea" rows="3" style="width:590px"></el-input>
          </el-form-item>

          <el-form-item style="text-align: center" label-width="-50px">
            <el-button type="primary" @click="handle_evaluate()">提交</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </el-container>
  </div>

  <!-- 小六，为师告诉你 ，你要记得加费用 -->
</template>

<script>
import qs from "qs";
export default {
  name: "evaluate",
  methods: {
    handle_evaluate() {
      let me = this;
      let postData = qs.stringify({
        pet_name: this.data.pet_name,
        pet_type: this.data.pet_type,
        pet_age: this.data.pet_age,
        pet_gender: this.data.pet_gender,
        primary_breed: this.data.primary_breed,
        secondary_breed: this.data.secondary_breed,
        primary_color: this.data.primary_color,
        secondary_color1: this.data.secondary_color1,
        secondary_color2: this.data.secondary_color2,
        maturity_size: this.data.maturity_size,
        state: this.data.state,
        fur_length: this.data.fur_length,
        dewormed: this.data.dewormed,
        sterilized: this.data.sterilized,
        vaccinated: this.data.vaccinated,
        fee: this.data.fee,
        video_amt: 1,
        photo_amt: 1,
        health: this.data.health,
        description: this.data.description,
        quantity: this.data.quantity
      });
      console.log(postData);

      this.$axios.defaults.withCredentials = true;
      this.$axios
        .post("http://127.0.0.1:8000/pets/publish_pet_information", postData)
        .then(function(response) {
          console.log(response);
          console.log(response.status);
          console.log(response.statusText);
          console.log(response.headers);
          console.log(response.config);
          if (response.data.success) {
            console.log(response);
            // me.$router.push('/find-pet')
            location.reload();
          } else {
            alert(response.data.msg);
          }
        });
    },
    handleRemove(file, fileList) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }

      console.log(file, fileList);
      return isJPG && isLt2M;
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${
          files.length
        } 个文件，共选择了 ${files.length + fileList.length} 个文件`
      );
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },

    handleRemove2(file, fileList2) {
      console.log(file, fileList2);
    },
    handlePreview2(file) {
      console.log(file);
    },
    handleExceed2(files, fileList2) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${
          files.length
        } 个文件，共选择了 ${files.length + fileList2.length} 个文件`
      );
    },
    beforeRemove2(file, fileList2) {
      return this.$confirm(`确定移除 ${file.name}？`);
    }
  },
  data() {
    return {
      fileList: [],
      fileList2: [],
      data: {
        fee: 0,
        pet_name: "",
        quantity: 0,
        pet_type: "",
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
        pet_gender: "",
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
        description: "这就是只小憨憨",
        pet_age: "",
        primary_breed: "",
        primary_breed_option: [
          //type==1
          { value: "1", label: "Affenpinscher" },
          { value: "2", label: "Afghan Hound" },
          { value: "3", label: "Airedale Terrier" },
          { value: "4", label: "Akbash" },
          { value: "5", label: "Akita" },
          { value: "6", label: "Alaskan Malamute" },
          { value: "7", label: "American Bulldog" },
          { value: "8", label: "American Eskimo Dog" },
          { value: "9", label: "American Hairless Terrier" },
          { value: "10", label: "American Staffordshire Terrier" },
          { value: "11", label: "American Water Spaniel" },
          { value: "12", label: "Anatolian Shepherd" },
          { value: "13", label: "Appenzell Mountain Dog" },
          { value: "14", label: "Australian Cattle Dog/Blue Heeler" },
          { value: "15", label: "Australian Kelpie" },
          { value: "16", label: "Australian Shepherd" },
          { value: "17", label: "Australian Terrier" },
          { value: "18", label: "Basenji" },
          { value: "19", label: "Basset Hound" },
          { value: "20", label: "Beagle" },
          { value: "21", label: "Bearded Collie" },
          { value: "22", label: "Beauceron" },
          { value: "23", label: "Bedlington Terrier" },
          { value: "24", label: "Belgian Shepherd Dog Sheepdog" },
          { value: "25", label: "Belgian Shepherd Laekenois" },
          { value: "26", label: "Belgian Shepherd Malinois" },
          { value: "27", label: "Belgian Shepherd Tervuren" },
          { value: "28", label: "Bernese Mountain Dog" },
          { value: "29", label: "Bichon Frise" },
          { value: "30", label: "Black and Tan Coonhound" },
          { value: "31", label: "Black Labrador Retriever" },
          { value: "32", label: "Black Mouth Cur" },
          { value: "33", label: "Black Russian Terrier" },
          { value: "34", label: "Bloodhound" },
          { value: "35", label: "Blue Lacy" },
          { value: "36", label: "Bluetick Coonhound" },
          { value: "37", label: "Boerboel" },
          { value: "38", label: "Bolognese" },
          { value: "39", label: "Border Collie" },
          { value: "40", label: "Border Terrier" },
          { value: "41", label: "Borzoi" },
          { value: "42", label: "Boston Terrier" },
          { value: "43", label: "Bouvier des Flanders" },
          { value: "44", label: "Boxer" },
          { value: "45", label: "Boykin Spaniel" },
          { value: "46", label: "Briard" },
          { value: "47", label: "Brittany Spaniel" },
          { value: "48", label: "Brussels Griffon" },
          { value: "49", label: "Bull Terrier" },
          { value: "50", label: "Bullmastiff" },
          { value: "51", label: "Cairn Terrier" },
          { value: "52", label: "Canaan Dog" },
          { value: "53", label: "Cane Corso Mastiff" },
          { value: "54", label: "Carolina Dog" },
          { value: "55", label: "Catahoula Leopard Dog" },
          { value: "56", label: "Cattle Dog" },
          { value: "57", label: "Caucasian Sheepdog (Caucasian Ovtcharka)" },
          { value: "58", label: "Cavalier King Charles Spaniel" },
          { value: "59", label: "Chesapeake Bay Retriever" },
          { value: "60", label: "Chihuahua" },
          { value: "61", label: "Chinese Crested Dog" },
          { value: "62", label: "Chinese Foo Dog" },
          { value: "63", label: "Chinook" },
          { value: "64", label: "Chocolate Labrador Retriever" },
          { value: "65", label: "Chow Chow" },
          { value: "66", label: "Cirneco dell'Etna" },
          { value: "67", label: "Clumber Spaniel" },
          { value: "68", label: "Cockapoo" },
          { value: "69", label: "Cocker Spaniel" },
          { value: "70", label: "Collie" },
          { value: "71", label: "Coonhound" },
          { value: "72", label: "Corgi" },
          { value: "73", label: "Coton de Tulear" },
          { value: "74", label: "Curly-Coated Retriever" },
          { value: "75", label: "Dachshund" },
          { value: "76", label: "Dalmatian" },
          { value: "77", label: "Dandi Dinmont Terrier" },
          { value: "78", label: "Doberman Pinscher" },
          { value: "79", label: "Dogo Argentino" },
          { value: "80", label: "Dogue de Bordeaux" },
          { value: "81", label: "Dutch Shepherd" },
          { value: "82", label: "English Bulldog" },
          { value: "83", label: "English Cocker Spaniel" },
          { value: "84", label: "English Coonhound" },
          { value: "85", label: "English Pointer" },
          { value: "86", label: "English Setter" },
          { value: "87", label: "English Shepherd" },
          { value: "88", label: "English Springer Spaniel" },
          { value: "89", label: "English Toy Spaniel" },
          { value: "90", label: "Entlebucher" },
          { value: "91", label: "Eskimo Dog" },
          { value: "92", label: "Feist" },
          { value: "93", label: "Field Spaniel" },
          { value: "94", label: "Fila Brasileiro" },
          { value: "95", label: "Finnish Lapphund" },
          { value: "96", label: "Finnish Spitz" },
          { value: "97", label: "Flat-coated Retriever" },
          { value: "98", label: "Fox Terrier" },
          { value: "99", label: "Foxhound" },
          { value: "100", label: "French Bulldog" },
          { value: "101", label: "Galgo Spanish Greyhound" },
          { value: "102", label: "German Pinscher" },
          { value: "103", label: "German Shepherd Dog" },
          { value: "104", label: "German Shorthaired Pointer" },
          { value: "105", label: "German Spitz" },
          { value: "106", label: "German Wirehaired Pointer" },
          { value: "107", label: "Giant Schnauzer" },
          { value: "108", label: "Glen of Imaal Terrier" },
          { value: "109", label: "Golden Retriever" },
          { value: "110", label: "Gordon Setter" },
          { value: "111", label: "Great Dane" },
          { value: "112", label: "Great Pyrenees" },
          { value: "113", label: "Greater Swiss Mountain Dog" },
          { value: "114", label: "Greyhound" },
          { value: "115", label: "Harrier" },
          { value: "116", label: "Havanese" },
          { value: "117", label: "Hound" },
          { value: "118", label: "Hovawart" },
          { value: "119", label: "Husky" },
          { value: "120", label: "Ibizan Hound" },
          { value: "121", label: "Illyrian Sheepdog" },
          { value: "122", label: "Irish Setter" },
          { value: "123", label: "Irish Terrier" },
          { value: "124", label: "Irish Water Spaniel" },
          { value: "125", label: "Irish Wolfhound" },
          { value: "126", label: "Italian Greyhound" },
          { value: "127", label: "Italian Spinone" },
          { value: "128", label: "Jack Russell Terrier" },
          {
            value: "129",
            label: "Jack Russell Terrier (Parson Russell Terrier)"
          },
          { value: "130", label: "Japanese Chin" },
          { value: "131", label: "Jindo" },
          { value: "132", label: "Kai Dog" },
          { value: "133", label: "Karelian Bear Dog" },
          { value: "134", label: "Keeshond" },
          { value: "135", label: "Kerry Blue Terrier" },
          { value: "136", label: "Kishu" },
          { value: "137", label: "Klee Kai" },
          { value: "138", label: "Komondor" },
          { value: "139", label: "Kuvasz" },
          { value: "140", label: "Kyi Leo" },
          { value: "141", label: "Labrador Retriever" },
          { value: "142", label: "Lakeland Terrier" },
          { value: "143", label: "Lancashire Heeler" },
          { value: "144", label: "Leonberger" },
          { value: "145", label: "Lhasa Apso" },
          { value: "146", label: "Lowchen" },
          { value: "147", label: "Maltese" },
          { value: "148", label: "Manchester Terrier" },
          { value: "149", label: "Maremma Sheepdog" },
          { value: "150", label: "Mastiff" },
          { value: "151", label: "McNab" },
          { value: "152", label: "Miniature Pinscher" },
          { value: "153", label: "Mountain Cur" },
          { value: "154", label: "Mountain Dog" },
          { value: "155", label: "Munsterlander" },
          { value: "156", label: "Neapolitan Mastiff" },
          { value: "157", label: "New Guinea Singing Dog" },
          { value: "158", label: "Newfoundland Dog" },
          { value: "159", label: "Norfolk Terrier" },
          { value: "160", label: "Norwegian Buhund" },
          { value: "161", label: "Norwegian Elkhound" },
          { value: "162", label: "Norwegian Lundehund" },
          { value: "163", label: "Norwich Terrier" },
          { value: "164", label: "Nova Scotia Duck-Tolling Retriever" },
          { value: "165", label: "Old English Sheepdog" },
          { value: "166", label: "Otterhound" },
          { value: "167", label: "Papillon" },
          { value: "168", label: "Patterdale Terrier (Fell Terrier)" },
          { value: "169", label: "Pekingese" },
          { value: "170", label: "Peruvian Inca Orchid" },
          { value: "171", label: "Petit Basset Griffon Vendeen" },
          { value: "172", label: "Pharaoh Hound" },
          { value: "173", label: "Pit Bull Terrier" },
          { value: "174", label: "Plott Hound" },
          { value: "175", label: "Podengo Portugueso" },
          { value: "176", label: "Pointer" },
          { value: "177", label: "Polish Lowland Sheepdog" },
          { value: "178", label: "Pomeranian" },
          { value: "179", label: "Poodle" },
          { value: "180", label: "Portuguese Water Dog" },
          { value: "181", label: "Presa Canario" },
          { value: "182", label: "Pug" },
          { value: "183", label: "Puli" },
          { value: "184", label: "Pumi" },
          { value: "185", label: "Rat Terrier" },
          { value: "186", label: "Redbone Coonhound" },
          { value: "187", label: "Retriever" },
          { value: "188", label: "Rhodesian Ridgeback" },
          { value: "189", label: "Rottweiler" },
          { value: "190", label: "Saint Bernard" },
          { value: "191", label: "Saluki" },
          { value: "192", label: "Samoyed" },
          { value: "193", label: "Sarplaninac" },
          { value: "194", label: "Schipperke" },
          { value: "195", label: "Schnauzer" },
          { value: "196", label: "Scottish Deerhound" },
          { value: "197", label: "Scottish Terrier Scottie" },
          { value: "198", label: "Sealyham Terrier" },
          { value: "199", label: "Setter" },
          { value: "200", label: "Shar Pei" },
          { value: "201", label: "Sheep Dog" },
          { value: "202", label: "Shepherd" },
          { value: "203", label: "Shetland Sheepdog Sheltie" },
          { value: "204", label: "Shiba Inu" },
          { value: "205", label: "Shih Tzu" },
          { value: "206", label: "Siberian Husky" },
          { value: "207", label: "Silky Terrier" },
          { value: "208", label: "Skye Terrier" },
          { value: "209", label: "Sloughi" },
          { value: "210", label: "Smooth Fox Terrier" },
          { value: "211", label: "South Russian Ovtcharka" },
          { value: "212", label: "Spaniel" },
          { value: "213", label: "Spitz" },
          { value: "214", label: "Staffordshire Bull Terrier" },
          { value: "215", label: "Standard Poodle" },
          { value: "216", label: "Sussex Spaniel" },
          { value: "217", label: "Swedish Vallhund" },
          { value: "218", label: "Terrier" },
          { value: "219", label: "Thai Ridgeback" },
          { value: "220", label: "Tibetan Mastiff" },
          { value: "221", label: "Tibetan Spaniel" },
          { value: "222", label: "Tibetan Terrier" },
          { value: "223", label: "Tosa Inu" },
          { value: "224", label: "Toy Fox Terrier" },
          { value: "225", label: "Treeing Walker Coonhound" },
          { value: "226", label: "Vizsla" },
          { value: "227", label: "Weimaraner" },
          { value: "228", label: "Welsh Corgi" },
          { value: "229", label: "Welsh Springer Spaniel" },
          { value: "230", label: "Welsh Terrier" },
          { value: "231", label: "West Highland White Terrier Westie" },
          { value: "232", label: "Wheaten Terrier" },
          { value: "233", label: "Whippet" },
          { value: "234", label: "White German Shepherd" },
          { value: "235", label: "Wire Fox Terrier" },
          { value: "236", label: "Wire-haired Pointing Griffon" },
          { value: "237", label: "Wirehaired Terrier" },
          { value: "238", label: "Xoloitzcuintle/Mexican Hairless" },
          { value: "239", label: "Yellow Labrador Retriever" },
          { value: "240", label: "Yorkshire Terrier Yorkie" },
          { value: "241", label: "Mixed Breed" },
          //type=2
          { value: "242", label: "Abyssinian" },
          { value: "243", label: "American Curl" },
          { value: "244", label: "American Shorthair" },
          { value: "245", label: "American Wirehair" },
          { value: "246", label: "Applehead Siamese" },
          { value: "247", label: "Balinese" },
          { value: "248", label: "Bengal" },
          { value: "249", label: "Birman" },
          { value: "250", label: "Bobtail" },
          { value: "251", label: "Bombay" },
          { value: "252", label: "British Shorthair" },
          { value: "253", label: "Burmese" },
          { value: "254", label: "Burmilla" },
          { value: "255", label: "Calico" },
          { value: "256", label: "Canadian Hairless" },
          { value: "257", label: "Chartreux" },
          { value: "258", label: "Chausie" },
          { value: "259", label: "Chinchilla" },
          { value: "260", label: "Cornish Rex" },
          { value: "261", label: "Cymric" },
          { value: "262", label: "Devon Rex" },
          { value: "263", label: "Dilute Calico" },
          { value: "264", label: "Dilute Tortoiseshell" },
          { value: "265", label: "Domestic Long Hair" },
          { value: "266", label: "Domestic Medium Hair" },
          { value: "267", label: "Domestic Short Hair" },
          { value: "268", label: "Egyptian Mau" },
          { value: "269", label: "Exotic Shorthair" },
          { value: "270", label: "Extra-Toes Cat (Hemingway Polydactyl)" },
          { value: "271", label: "Havana" },
          { value: "272", label: "Himalayan" },
          { value: "273", label: "Japanese Bobtail" },
          { value: "274", label: "Javanese" },
          { value: "275", label: "Korat" },
          { value: "276", label: "LaPerm" },
          { value: "277", label: "Maine Coon" },
          { value: "278", label: "Manx" },
          { value: "279", label: "Munchkin" },
          { value: "280", label: "Nebelung" },
          { value: "281", label: "Norwegian Forest Cat" },
          { value: "282", label: "Ocicat" },
          { value: "283", label: "Oriental Long Hair" },
          { value: "284", label: "Oriental Short Hair" },
          { value: "285", label: "Oriental Tabby" },
          { value: "286", label: "Persian" },
          { value: "287", label: "Pixie-Bob" },
          { value: "288", label: "Ragamuffin" },
          { value: "289", label: "Ragdoll" },
          { value: "290", label: "Russian Blue" },
          { value: "291", label: "Scottish Fold" },
          { value: "292", label: "Selkirk Rex" },
          { value: "293", label: "Siamese" },
          { value: "294", label: "Siberian" },
          { value: "295", label: "Silver" },
          { value: "296", label: "Singapura" },
          { value: "297", label: "Snowshoe" },
          { value: "298", label: "Somali" },
          { value: "299", label: "Sphynx (hairless cat)" },
          { value: "300", label: "Tabby" },
          { value: "301", label: "Tiger" },
          { value: "302", label: "Tonkinese" },
          { value: "303", label: "Torbie" },
          { value: "304", label: "Tortoiseshell" },
          { value: "305", label: "Turkish Angora" },
          { value: "306", label: "Turkish Van" },
          { value: "307", label: "Tuxedo" }
        ],
        secondary_breed: "",
        secondary_breed_option: [
          //type==1
          { value: "1", label: "Affenpinscher" },
          { value: "2", label: "Afghan Hound" },
          { value: "3", label: "Airedale Terrier" },
          { value: "4", label: "Akbash" },
          { value: "5", label: "Akita" },
          { value: "6", label: "Alaskan Malamute" },
          { value: "7", label: "American Bulldog" },
          { value: "8", label: "American Eskimo Dog" },
          { value: "9", label: "American Hairless Terrier" },
          { value: "10", label: "American Staffordshire Terrier" },
          { value: "11", label: "American Water Spaniel" },
          { value: "12", label: "Anatolian Shepherd" },
          { value: "13", label: "Appenzell Mountain Dog" },
          { value: "14", label: "Australian Cattle Dog/Blue Heeler" },
          { value: "15", label: "Australian Kelpie" },
          { value: "16", label: "Australian Shepherd" },
          { value: "17", label: "Australian Terrier" },
          { value: "18", label: "Basenji" },
          { value: "19", label: "Basset Hound" },
          { value: "20", label: "Beagle" },
          { value: "21", label: "Bearded Collie" },
          { value: "22", label: "Beauceron" },
          { value: "23", label: "Bedlington Terrier" },
          { value: "24", label: "Belgian Shepherd Dog Sheepdog" },
          { value: "25", label: "Belgian Shepherd Laekenois" },
          { value: "26", label: "Belgian Shepherd Malinois" },
          { value: "27", label: "Belgian Shepherd Tervuren" },
          { value: "28", label: "Bernese Mountain Dog" },
          { value: "29", label: "Bichon Frise" },
          { value: "30", label: "Black and Tan Coonhound" },
          { value: "31", label: "Black Labrador Retriever" },
          { value: "32", label: "Black Mouth Cur" },
          { value: "33", label: "Black Russian Terrier" },
          { value: "34", label: "Bloodhound" },
          { value: "35", label: "Blue Lacy" },
          { value: "36", label: "Bluetick Coonhound" },
          { value: "37", label: "Boerboel" },
          { value: "38", label: "Bolognese" },
          { value: "39", label: "Border Collie" },
          { value: "40", label: "Border Terrier" },
          { value: "41", label: "Borzoi" },
          { value: "42", label: "Boston Terrier" },
          { value: "43", label: "Bouvier des Flanders" },
          { value: "44", label: "Boxer" },
          { value: "45", label: "Boykin Spaniel" },
          { value: "46", label: "Briard" },
          { value: "47", label: "Brittany Spaniel" },
          { value: "48", label: "Brussels Griffon" },
          { value: "49", label: "Bull Terrier" },
          { value: "50", label: "Bullmastiff" },
          { value: "51", label: "Cairn Terrier" },
          { value: "52", label: "Canaan Dog" },
          { value: "53", label: "Cane Corso Mastiff" },
          { value: "54", label: "Carolina Dog" },
          { value: "55", label: "Catahoula Leopard Dog" },
          { value: "56", label: "Cattle Dog" },
          { value: "57", label: "Caucasian Sheepdog (Caucasian Ovtcharka)" },
          { value: "58", label: "Cavalier King Charles Spaniel" },
          { value: "59", label: "Chesapeake Bay Retriever" },
          { value: "60", label: "Chihuahua" },
          { value: "61", label: "Chinese Crested Dog" },
          { value: "62", label: "Chinese Foo Dog" },
          { value: "63", label: "Chinook" },
          { value: "64", label: "Chocolate Labrador Retriever" },
          { value: "65", label: "Chow Chow" },
          { value: "66", label: "Cirneco dell'Etna" },
          { value: "67", label: "Clumber Spaniel" },
          { value: "68", label: "Cockapoo" },
          { value: "69", label: "Cocker Spaniel" },
          { value: "70", label: "Collie" },
          { value: "71", label: "Coonhound" },
          { value: "72", label: "Corgi" },
          { value: "73", label: "Coton de Tulear" },
          { value: "74", label: "Curly-Coated Retriever" },
          { value: "75", label: "Dachshund" },
          { value: "76", label: "Dalmatian" },
          { value: "77", label: "Dandi Dinmont Terrier" },
          { value: "78", label: "Doberman Pinscher" },
          { value: "79", label: "Dogo Argentino" },
          { value: "80", label: "Dogue de Bordeaux" },
          { value: "81", label: "Dutch Shepherd" },
          { value: "82", label: "English Bulldog" },
          { value: "83", label: "English Cocker Spaniel" },
          { value: "84", label: "English Coonhound" },
          { value: "85", label: "English Pointer" },
          { value: "86", label: "English Setter" },
          { value: "87", label: "English Shepherd" },
          { value: "88", label: "English Springer Spaniel" },
          { value: "89", label: "English Toy Spaniel" },
          { value: "90", label: "Entlebucher" },
          { value: "91", label: "Eskimo Dog" },
          { value: "92", label: "Feist" },
          { value: "93", label: "Field Spaniel" },
          { value: "94", label: "Fila Brasileiro" },
          { value: "95", label: "Finnish Lapphund" },
          { value: "96", label: "Finnish Spitz" },
          { value: "97", label: "Flat-coated Retriever" },
          { value: "98", label: "Fox Terrier" },
          { value: "99", label: "Foxhound" },
          { value: "100", label: "French Bulldog" },
          { value: "101", label: "Galgo Spanish Greyhound" },
          { value: "102", label: "German Pinscher" },
          { value: "103", label: "German Shepherd Dog" },
          { value: "104", label: "German Shorthaired Pointer" },
          { value: "105", label: "German Spitz" },
          { value: "106", label: "German Wirehaired Pointer" },
          { value: "107", label: "Giant Schnauzer" },
          { value: "108", label: "Glen of Imaal Terrier" },
          { value: "109", label: "Golden Retriever" },
          { value: "110", label: "Gordon Setter" },
          { value: "111", label: "Great Dane" },
          { value: "112", label: "Great Pyrenees" },
          { value: "113", label: "Greater Swiss Mountain Dog" },
          { value: "114", label: "Greyhound" },
          { value: "115", label: "Harrier" },
          { value: "116", label: "Havanese" },
          { value: "117", label: "Hound" },
          { value: "118", label: "Hovawart" },
          { value: "119", label: "Husky" },
          { value: "120", label: "Ibizan Hound" },
          { value: "121", label: "Illyrian Sheepdog" },
          { value: "122", label: "Irish Setter" },
          { value: "123", label: "Irish Terrier" },
          { value: "124", label: "Irish Water Spaniel" },
          { value: "125", label: "Irish Wolfhound" },
          { value: "126", label: "Italian Greyhound" },
          { value: "127", label: "Italian Spinone" },
          { value: "128", label: "Jack Russell Terrier" },
          {
            value: "129",
            label: "Jack Russell Terrier (Parson Russell Terrier)"
          },
          { value: "130", label: "Japanese Chin" },
          { value: "131", label: "Jindo" },
          { value: "132", label: "Kai Dog" },
          { value: "133", label: "Karelian Bear Dog" },
          { value: "134", label: "Keeshond" },
          { value: "135", label: "Kerry Blue Terrier" },
          { value: "136", label: "Kishu" },
          { value: "137", label: "Klee Kai" },
          { value: "138", label: "Komondor" },
          { value: "139", label: "Kuvasz" },
          { value: "140", label: "Kyi Leo" },
          { value: "141", label: "Labrador Retriever" },
          { value: "142", label: "Lakeland Terrier" },
          { value: "143", label: "Lancashire Heeler" },
          { value: "144", label: "Leonberger" },
          { value: "145", label: "Lhasa Apso" },
          { value: "146", label: "Lowchen" },
          { value: "147", label: "Maltese" },
          { value: "148", label: "Manchester Terrier" },
          { value: "149", label: "Maremma Sheepdog" },
          { value: "150", label: "Mastiff" },
          { value: "151", label: "McNab" },
          { value: "152", label: "Miniature Pinscher" },
          { value: "153", label: "Mountain Cur" },
          { value: "154", label: "Mountain Dog" },
          { value: "155", label: "Munsterlander" },
          { value: "156", label: "Neapolitan Mastiff" },
          { value: "157", label: "New Guinea Singing Dog" },
          { value: "158", label: "Newfoundland Dog" },
          { value: "159", label: "Norfolk Terrier" },
          { value: "160", label: "Norwegian Buhund" },
          { value: "161", label: "Norwegian Elkhound" },
          { value: "162", label: "Norwegian Lundehund" },
          { value: "163", label: "Norwich Terrier" },
          { value: "164", label: "Nova Scotia Duck-Tolling Retriever" },
          { value: "165", label: "Old English Sheepdog" },
          { value: "166", label: "Otterhound" },
          { value: "167", label: "Papillon" },
          { value: "168", label: "Patterdale Terrier (Fell Terrier)" },
          { value: "169", label: "Pekingese" },
          { value: "170", label: "Peruvian Inca Orchid" },
          { value: "171", label: "Petit Basset Griffon Vendeen" },
          { value: "172", label: "Pharaoh Hound" },
          { value: "173", label: "Pit Bull Terrier" },
          { value: "174", label: "Plott Hound" },
          { value: "175", label: "Podengo Portugueso" },
          { value: "176", label: "Pointer" },
          { value: "177", label: "Polish Lowland Sheepdog" },
          { value: "178", label: "Pomeranian" },
          { value: "179", label: "Poodle" },
          { value: "180", label: "Portuguese Water Dog" },
          { value: "181", label: "Presa Canario" },
          { value: "182", label: "Pug" },
          { value: "183", label: "Puli" },
          { value: "184", label: "Pumi" },
          { value: "185", label: "Rat Terrier" },
          { value: "186", label: "Redbone Coonhound" },
          { value: "187", label: "Retriever" },
          { value: "188", label: "Rhodesian Ridgeback" },
          { value: "189", label: "Rottweiler" },
          { value: "190", label: "Saint Bernard" },
          { value: "191", label: "Saluki" },
          { value: "192", label: "Samoyed" },
          { value: "193", label: "Sarplaninac" },
          { value: "194", label: "Schipperke" },
          { value: "195", label: "Schnauzer" },
          { value: "196", label: "Scottish Deerhound" },
          { value: "197", label: "Scottish Terrier Scottie" },
          { value: "198", label: "Sealyham Terrier" },
          { value: "199", label: "Setter" },
          { value: "200", label: "Shar Pei" },
          { value: "201", label: "Sheep Dog" },
          { value: "202", label: "Shepherd" },
          { value: "203", label: "Shetland Sheepdog Sheltie" },
          { value: "204", label: "Shiba Inu" },
          { value: "205", label: "Shih Tzu" },
          { value: "206", label: "Siberian Husky" },
          { value: "207", label: "Silky Terrier" },
          { value: "208", label: "Skye Terrier" },
          { value: "209", label: "Sloughi" },
          { value: "210", label: "Smooth Fox Terrier" },
          { value: "211", label: "South Russian Ovtcharka" },
          { value: "212", label: "Spaniel" },
          { value: "213", label: "Spitz" },
          { value: "214", label: "Staffordshire Bull Terrier" },
          { value: "215", label: "Standard Poodle" },
          { value: "216", label: "Sussex Spaniel" },
          { value: "217", label: "Swedish Vallhund" },
          { value: "218", label: "Terrier" },
          { value: "219", label: "Thai Ridgeback" },
          { value: "220", label: "Tibetan Mastiff" },
          { value: "221", label: "Tibetan Spaniel" },
          { value: "222", label: "Tibetan Terrier" },
          { value: "223", label: "Tosa Inu" },
          { value: "224", label: "Toy Fox Terrier" },
          { value: "225", label: "Treeing Walker Coonhound" },
          { value: "226", label: "Vizsla" },
          { value: "227", label: "Weimaraner" },
          { value: "228", label: "Welsh Corgi" },
          { value: "229", label: "Welsh Springer Spaniel" },
          { value: "230", label: "Welsh Terrier" },
          { value: "231", label: "West Highland White Terrier Westie" },
          { value: "232", label: "Wheaten Terrier" },
          { value: "233", label: "Whippet" },
          { value: "234", label: "White German Shepherd" },
          { value: "235", label: "Wire Fox Terrier" },
          { value: "236", label: "Wire-haired Pointing Griffon" },
          { value: "237", label: "Wirehaired Terrier" },
          { value: "238", label: "Xoloitzcuintle/Mexican Hairless" },
          { value: "239", label: "Yellow Labrador Retriever" },
          { value: "240", label: "Yorkshire Terrier Yorkie" },
          { value: "241", label: "Mixed Breed" },
          //type=2
          { value: "242", label: "Abyssinian" },
          { value: "243", label: "American Curl" },
          { value: "244", label: "American Shorthair" },
          { value: "245", label: "American Wirehair" },
          { value: "246", label: "Applehead Siamese" },
          { value: "247", label: "Balinese" },
          { value: "248", label: "Bengal" },
          { value: "249", label: "Birman" },
          { value: "250", label: "Bobtail" },
          { value: "251", label: "Bombay" },
          { value: "252", label: "British Shorthair" },
          { value: "253", label: "Burmese" },
          { value: "254", label: "Burmilla" },
          { value: "255", label: "Calico" },
          { value: "256", label: "Canadian Hairless" },
          { value: "257", label: "Chartreux" },
          { value: "258", label: "Chausie" },
          { value: "259", label: "Chinchilla" },
          { value: "260", label: "Cornish Rex" },
          { value: "261", label: "Cymric" },
          { value: "262", label: "Devon Rex" },
          { value: "263", label: "Dilute Calico" },
          { value: "264", label: "Dilute Tortoiseshell" },
          { value: "265", label: "Domestic Long Hair" },
          { value: "266", label: "Domestic Medium Hair" },
          { value: "267", label: "Domestic Short Hair" },
          { value: "268", label: "Egyptian Mau" },
          { value: "269", label: "Exotic Shorthair" },
          { value: "270", label: "Extra-Toes Cat (Hemingway Polydactyl)" },
          { value: "271", label: "Havana" },
          { value: "272", label: "Himalayan" },
          { value: "273", label: "Japanese Bobtail" },
          { value: "274", label: "Javanese" },
          { value: "275", label: "Korat" },
          { value: "276", label: "LaPerm" },
          { value: "277", label: "Maine Coon" },
          { value: "278", label: "Manx" },
          { value: "279", label: "Munchkin" },
          { value: "280", label: "Nebelung" },
          { value: "281", label: "Norwegian Forest Cat" },
          { value: "282", label: "Ocicat" },
          { value: "283", label: "Oriental Long Hair" },
          { value: "284", label: "Oriental Short Hair" },
          { value: "285", label: "Oriental Tabby" },
          { value: "286", label: "Persian" },
          { value: "287", label: "Pixie-Bob" },
          { value: "288", label: "Ragamuffin" },
          { value: "289", label: "Ragdoll" },
          { value: "290", label: "Russian Blue" },
          { value: "291", label: "Scottish Fold" },
          { value: "292", label: "Selkirk Rex" },
          { value: "293", label: "Siamese" },
          { value: "294", label: "Siberian" },
          { value: "295", label: "Silver" },
          { value: "296", label: "Singapura" },
          { value: "297", label: "Snowshoe" },
          { value: "298", label: "Somali" },
          { value: "299", label: "Sphynx (hairless cat)" },
          { value: "300", label: "Tabby" },
          { value: "301", label: "Tiger" },
          { value: "302", label: "Tonkinese" },
          { value: "303", label: "Torbie" },
          { value: "304", label: "Tortoiseshell" },
          { value: "305", label: "Turkish Angora" },
          { value: "306", label: "Turkish Van" },
          { value: "307", label: "Tuxedo" }
        ],
        primary_color: "",
        primary_color_option: [
          { value: "1", label: "Black" },
          { value: "2", label: "Brown" },
          { value: "3", label: "Golden" },
          { value: "4", label: "Yellow" },
          { value: "5", label: "Cream" },
          { value: "6", label: "Gray" },
          { value: "7", label: "White" }
        ],
        secondary_color1: "",
        secondary_color1_option: [
          { value: "1", label: "Black" },
          { value: "2", label: "Brown" },
          { value: "3", label: "Golden" },
          { value: "4", label: "Yellow" },
          { value: "5", label: "Cream" },
          { value: "6", label: "Gray" },
          { value: "7", label: "White" }
        ],
        secondary_color2: "",
        secondary_color2_option: [
          { value: "1", label: "Black" },
          { value: "2", label: "Brown" },
          { value: "3", label: "Golden" },
          { value: "4", label: "Yellow" },
          { value: "5", label: "Cream" },
          { value: "6", label: "Gray" },
          { value: "7", label: "White" }
        ],
        maturity_size: "",
        maturity_size_option: [
          { value: "1", label: "小型" },
          { value: "2", label: "中型" },
          { value: "3", label: "大型" },
          { value: "4", label: "超大型" }
        ],
        fur_length: "",
        fur_length_option: [
          { value: "1", label: "短" },
          { value: "2", label: "中" },
          { value: "3", label: "长" },
          { value: "4", label: "不清楚" }
        ],

        state: "",
        state_option: [
          { value: "41336", label: "Johor" },
          { value: "41325", label: "Kedah" },
          { value: "41367", label: "Kelantan" },
          { value: "41401", label: "Kuala Lumpur" },
          { value: "41415", label: "Labuan" },
          { value: "41324", label: "Melaka" },
          { value: "41332", label: "Negeri Sembilan" },
          { value: "41335", label: "Pahang" },
          { value: "41330", label: "Perak" },
          { value: "41380", label: "Perlis" },
          { value: "41327", label: "Pulau Pinang" },
          { value: "41345", label: "Sabah" },
          { value: "41342", label: "Sarawak" },
          { value: "41326", label: "Selangor" },
          { value: "41361", label: "Terengganu" }
        ],
        dewormed: "",
        dewormed_option: [
          { value: "1", label: "是" },
          { value: "2", label: "否" },
          { value: "3", label: "不清楚" }
        ],
        sterilized: "",
        sterilized_option: [
          { value: "1", label: "是" },
          { value: "2", label: "否" },
          { value: "3", label: "不清楚" }
        ],
        vaccinated: "",
        vaccinated_option: [
          { value: "1", label: "是" },
          { value: "2", label: "否" },
          { value: "3", label: "不清楚" }
        ],
        health: "",
        health_option: [
          { value: "1", label: "健康" },
          { value: "2", label: "轻微受伤" },
          { value: "3", label: "严重受伤" }
        ]
      }
    };
  }
};
</script>

<style scoped>
.background {
  background-image: url("../../assets/image_repo/background-golden.jpg");
}
.form-style {
  width: 60%;
  margin-left: 20%;
  border-radius: 2%;
  margin-top: 30px;
  margin-bottom: 70px;
  background: rgba(255, 255, 255, 0.9);
}
.el-form-item {
  float: left;
  width: 49%;
}
</style>
