<template>
  <div id="Nav">
    <div class="nav">
      <div class="W">
        <ul>
          <li v-for="(val,index) in nav" :key="index" @click="addClass(index),jump(val)" :class="{fontColor:index==classIndex}" >{{val}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      nav: ["首页", "歌手", "新碟","歌单", "排行榜", "MV"],
      classIndex: 0
    };
  },
  methods: {
    //点击变色
    addClass(index) {
      this.classIndex = index;
    },

    //点击跳转子路由
    jump(val){
        if(val=='首页'){
            this.$router.push('/');
        }else if(val=='歌手'){
            this.$router.push('singer')
        }
    }
  },
  created() {
    
  },
  mounted(){
  }
};
</script>

<style scoped>
#Nav{
  width: 100%;
}

.W {
  width: 1200px;
  margin: 0 auto;
  background-color: #fff;
}

.nav {
  height: 50px;
  background-color: #fff;
}

.nav ul {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 18px;
  font-weight: 500;
  color: rgb(36, 36, 36);
}

.nav ul li {
  height: 26px;
  line-height: 26px;
  padding: 0 10px;
  border-radius: 13px;
}

.nav ul li:hover {
  color: #fff;
  background-color: rgb(58, 193, 126);
  box-shadow: 0px 2px 5px #ccc;
}



.fontColor {
  color: #fff;
  background-color: rgb(58, 193, 126);
  box-shadow: 0px 2px 5px #ccc;
  position: relative;
}

.fontColor::after {
  content: "";
  width: 0;
  height: 0;
  border-bottom: 6px solid #eee;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  position: absolute;
  bottom: -12px;
  left: 50%;
  margin-left: -3px;
}
</style>