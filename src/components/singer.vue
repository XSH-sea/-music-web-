<template>
  <div id="singer">
    <div class="category">
      <ul class="index">
        <li
          v-for="(val,index) in singerCat.index"
          :key="index"
          :class="{bgc:index==Index}"
          @click="changeIndex(index,$event,val.id)"
        >{{val.name}}</li>
      </ul>
      <ul class="area">
        <li
          v-for="(val,index) in singerCat.area"
          :key="index"
          :class="{bgc:index==areaIndex}"
          @click="changeIndex(index,$event,val.id)"
        >{{val.name}}</li>
      </ul>
      <ul class="sex">
        <li
          v-for="(val ,index) in singerCat.sex"
          :key="index"
          :class="{bgc:index==sexIndex}"
          @click="changeIndex(index,$event,val.id)"
        >{{val.name}}</li>
      </ul>
      <ul class="genre">
        <li
          v-for="(val ,index) in singerCat.genre"
          :key="index"
          :class="{bgc:index==genreIndex}"
          @click="changeIndex(index,$event,val.id)"
        >{{val.name}}</li>
      </ul>
    </div>
    <div class="singerList">
      <ul>
        <li v-for="(val,index) in singerList" :key="index" @click="getId(val)">
          <img :src="val.singer_pic" alt />
          <p>{{val.singer_name}}</p>
        </li>
      </ul>
      <div class="icon">
        <span class="left" v-if="flag!=1" @click="reduce()">&lt;</span>
        <span>{{flag}}</span>
        <span class="right" @click="add()">&gt;</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "singer",
  data() {
    return {
      singerCat: [],
      Index: 0,
      areaIndex: 0,
      sexIndex: 0,
      genreIndex: 0,
      urlParams: {
        sexId: -100,
        areaId: -100,
        genre: -100,
        index: -100,
        page: 0,
        pageSize:40
      },
      singerList: [],
      flag: 1,
    };
  },
  created() {
    this.api("https://v1.itooi.cn/tencent/artist/category").then(res => {
      console.log(res);
      this.singerCat = res;
    });
    this.getUrl();
  },
  mounted() {},
  methods: {
    changeIndex(index, e, id) {
      switch (e.currentTarget.parentElement.className) {
        case "index":
          this.Index = index;
          this.urlParams.index = id;
          break;
        case "area":
          this.areaIndex = index;
          this.urlParams.areaId = id;
          break;
        case "sex":
          this.sexIndex = index;
          this.urlParams.sexId = id;
          break;
        default:
          this.genreIndex = index;
          this.urlParams.genre = id;
      }
      this.flag = 1;
      this.getUrl();
    },
    getUrl() {
      this.api("https://v1.itooi.cn/tencent/artist/list", this.urlParams).then(
        res => {
          this.singerList = res;
          console.log(res);
        }
      );
    },
    add() {
      this.flag++;
      this.urlParams.page = this.flag;
      this.getUrl();
    },
    reduce() {
      this.flag--;
      this.urlParams.page = this.flag;
      this.getUrl();
    },
    getId(val) {
      this.$router.push({ path: "song", query: { id: val.singer_mid } });
    }
  }
};
</script>

<style scoped>
.category {
  width: 1200px;
  margin: 0 auto;
  background-color: #eee;
  padding-top: 30px;
}

.category ul {
  width: 100%;
  height: 40px;
  margin-left: 20px;
}

.category ul li {
  float: left;
  margin-right: 20px;
  font-size: 14px;
  font-weight: 500;
  height: 26px;
  line-height: 26px;
  padding: 0 6px;
  cursor: pointer;
}

.bgc {
  background-color: rgb(58, 193, 126);
  color: #fff;
}

.singerList {
  width: 1200px;
  background-color: #fff;
  margin: 0 auto;
  padding: 20px 0;
}

.singerList ul {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.singerList ul li {
  height: 150px;
  width: 150px;
  text-align: center;
}

.singerList ul li img {
  height: 100px;
  width: 100px;
  border-radius: 50%;
  cursor: pointer;
  border: 1px solid #eee;
  cursor: pointer;
}

.singerList ul li p {
  font-size: 12px;
  font-weight: bold;
  color: #111;
}

.singerList ul li p {
  margin: 0;
  cursor: pointer;
}

.singerList ul li p:hover {
  color: rgb(58, 193, 126);
}

.singerList .icon {
  height: 20px;
  text-align: center;
}

.singerList .icon span {
  display: inline-block;
  height: 30px;
  padding: 0 10px;
  line-height: 30px;
  color: #ccc;
  font-size: 16px;
  font-weight: 600;
}

.singerList .icon span:nth-last-child(2) {
  margin: 0 20px;
  background-color: rgb(58, 193, 126);
  color: #fff;
}

.singerList .icon span:hover {
  background-color: rgb(58, 193, 126);
  color: #fff;
}
</style>