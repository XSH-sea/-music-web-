<template>
  <div id="homePage">
    <div class="hotSongList">
      <h1>热门歌单</h1>
      <div class="listBox">
        <ul class="songList" ref="ulEle">
          <li v-for="(val,index) in hotSongList" :key="index">
            <div class="pic">
              <img :src="val.coverImgUrl" alt />
              <i class="iconfont icon-zanting"></i>
            </div>
            <p>{{val.name}}</p>
            <p>播放量：{{val.playCount}}</p>
          </li>
          <li v-for="(val,index) in hotSongList02" :key="index">
            <div class="pic">
              <img :src="val.coverImgUrl" alt />
              <i class="iconfont icon-zanting"></i>
            </div>
            <p>{{val.name}}</p>
            <p>播放量：{{val.playCount}}</p>
          </li>
        </ul>
        <span class="i_left" @click="goLeft()">
          <i class="iconfont icon-jiantou"></i>
        </span>
        <span class="i_right" @click="goRight()">
          <i class="iconfont icon-icon-keyboard"></i>
        </span>
        <ul class="hole">
          <li
            v-for="(val,index) in hotHole"
            :key="index"
            :class="{bgc:val==hotFlag}"
            @click="hole(val)"
          ></li>
        </ul>
      </div>
    </div>
    <div class="newSong">
        <h1>新歌首发</h1>
        <ul>
            <li v-for="(val,index) in newSong" :key="index">
                <div class="pic">
                    
                    <img :src="val.picUrl" alt="">
                    <i class="iconfont icon-zanting"></i>
                </div>
                <p>{{val.name}}</p>
                <p>{{val.song.artists[0].name}}</p>
            </li>
        </ul>
    </div>

    <div class="hotSinger">
        <h1>热门歌手</h1>
        <ul>
            <li v-for="(val,index) in hotSinger" :key="index">
                <img :src="val.img1v1Url" alt="">
                <p>{{val.name}}</p>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "homePage",
  data() {
    return {
      hotSongList: [
        {
          name: "那些辗转难眠的夜晚 总有一首歌打湿你的心",
          coverImgUrl:
            "http://p1.music.126.net/4Rv-EmTtyuoGHcbtRjmAMA==/109951164625522083.jpg",
          playCount: 373294
        },
        {
          name: "那些辗转难眠的夜晚 总有一首歌打湿你的心",
          coverImgUrl:
            "http://p1.music.126.net/4Rv-EmTtyuoGHcbtRjmAMA==/109951164625522083.jpg",
          playCount: 373294
        },
        {
          name: "那些辗转难眠的夜晚 总有一首歌打湿你的心",
          coverImgUrl:
            "http://p1.music.126.net/4Rv-EmTtyuoGHcbtRjmAMA==/109951164625522083.jpg",
          playCount: 373294
        },
        {
          name: "那些辗转难眠的夜晚 总有一首歌打湿你的心",
          coverImgUrl:
            "http://p1.music.126.net/4Rv-EmTtyuoGHcbtRjmAMA==/109951164625522083.jpg",
          playCount: 373294
        },
        {
          name: "那些辗转难眠的夜晚 总有一首歌打湿你的心",
          coverImgUrl:
            "http://p1.music.126.net/4Rv-EmTtyuoGHcbtRjmAMA==/109951164625522083.jpg",
          playCount: 373294
        },
        {
          name: "那些辗转难眠的夜晚 总有一首歌打湿你的心",
          coverImgUrl:
            "http://p1.music.126.net/4Rv-EmTtyuoGHcbtRjmAMA==/109951164625522083.jpg",
          playCount: 373294
        },
        {
          name: "那些辗转难眠的夜晚 总有一首歌打湿你的心",
          coverImgUrl:
            "http://p1.music.126.net/4Rv-EmTtyuoGHcbtRjmAMA==/109951164625522083.jpg",
          playCount: 373294
        },
        {
          name: "那些辗转难眠的夜晚 总有一首歌打湿你的心",
          coverImgUrl:
            "http://p1.music.126.net/4Rv-EmTtyuoGHcbtRjmAMA==/109951164625522083.jpg",
          playCount: 373294
        },
        {
          name: "那些辗转难眠的夜晚 总有一首歌打湿你的心",
          coverImgUrl:
            "http://p1.music.126.net/4Rv-EmTtyuoGHcbtRjmAMA==/109951164625522083.jpg",
          playCount: 373294
        },
        {
          name: "那些辗转难眠的夜晚 总有一首歌打湿你的心",
          coverImgUrl:
            "http://p1.music.126.net/4Rv-EmTtyuoGHcbtRjmAMA==/109951164625522083.jpg",
          playCount: 373294
        },
        {
          name: "那些辗转难眠的夜晚 总有一首歌打湿你的心",
          coverImgUrl:
            "http://p1.music.126.net/4Rv-EmTtyuoGHcbtRjmAMA==/109951164625522083.jpg",
          playCount: 373294
        },
        {
          name: "那些辗转难眠的夜晚 总有一首歌打湿你的心",
          coverImgUrl:
            "http://p1.music.126.net/4Rv-EmTtyuoGHcbtRjmAMA==/109951164625522083.jpg",
          playCount: 373294
        }
      ],
      hotHole: [0, 1, 2],
      hotFlag: 0,
      newSong:[],
      hotSinger:[]
    };
  },
  created() {
      this.getHotSongList();
      this.getNewSong();
      this.getHotsinger();
        
      
  },
  mounted() {},
  computed: {
    hotSongList02: function() {
      let arr = [];
      for (var i = 0; i < 4; i++) {
        arr.push(this.hotSongList[i]);
      }
      return arr;
    }
  },
  methods: {
    //轮播图向左
    goLeft() {
      let flag;

      if (this.hotFlag < 2) {
        this.hotFlag++;
        flag = this.hotFlag;
      } else if ((this.hotFlag = 2)) {
        flag = this.hotFlag + 1;
        this.hotFlag = 0;
      }
      if (this.$refs.ulEle.offsetLeft == -this.hotHole.length * 1200) {
        this.$refs.ulEle.style.left = 0 + "px";
      }

      this.scrollJs(this.$refs.ulEle, -flag * 1200);
    },
    //轮播图向右边
    goRight() {
      let flag;

      if (this.hotFlag < 3 && this.hotFlag > 0) {
        this.hotFlag--;
        flag = this.hotFlag;
      } else if (this.hotFlag == 0) {
        this.hotFlag = 2;
        flag = this.hotHole.length - 1;
      }

      if (this.$refs.ulEle.offsetLeft == 0) {
        this.$refs.ulEle.style.left = -this.hotHole.length * 1200 + "px";
      }

      this.scrollJs(this.$refs.ulEle, -flag * 1200);
    },

    //轮播图小圆圈
    hole(val) {
      if (this.$refs.ulEle.offsetLeft == -this.hotHole.length * 1200) {
        this.$refs.ulEle.style.left = 0 + "px";
      }
      this.hotFlag = val;
      this.scrollJs(this.$refs.ulEle, -this.hotFlag * 1200);
    },
    //获取热门歌单
    getHotSongList() {
      this.axios
        .get(
          "https://v1.itooi.cn/netease/songList/hot?cat=全部&pageSize=12&page=0"
        )
        .then(res => {
          this.hotSongList = res.data.data;
        })
        .catch(err => {
          console.loh(err);
        });
    },
    //获取新歌
    getNewSong(){
        this.axios
        .get(
            "https://v1.itooi.cn/netease/song/newest"
        )
        .then(res => {
          this.newSong = res.data.data;
        })
        .catch(err => {
          console.log(err);
        });
    },

    //获取排行榜
    getHotsinger(){
        this.axios
        .get(
            "https://v1.itooi.cn/netease/artist/top?page=0&pageSize=12"
        )
        .then(res => {
          this.hotSinger=res.data.data;
          console.log(res.data.data)
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style scoped>
.hotSongList {
  width: 1200px;
  height: 480px;
  background-color: #eee;
  margin: 0 auto;
}

h1 {
  text-align: center;
  padding: 40px 0 20px 0;
  font-weight: 700;
  letter-spacing: 8px;
}

.listBox {
  height: 340px;
  width: 100%;
  /* background-color: pink; */
  overflow: hidden;
  position: relative;
}

.listBox span {
  width: 40px;
  height: 80px;
  position: absolute;
  background-color: rgba(255, 255, 255, 0.3);
  position: absolute;
  top: 50%;
  margin-top: -40px;
  text-align: center;
  opacity: 0;
  transition: all 0.5s;
}

.listBox span i {
  display: block;
  height: 80px;
  width: 40px;
  line-height: 80px;
  font-size: 40px;
  color: #bbb;
  transition: all 0.5s;
}

.listBox .i_left {
  left: -40px;
}

.listBox .i_right {
  right: -40px;
}

.listBox:hover .i_left {
  left: 0px;
  opacity: 1;
}

.listBox:hover .i_right {
  right: 0px;
  opacity: 1;
}

.songList {
  width: 4800px;
  height: 260px;
  /* background-color: red; */
  display: flex;
  justify-content: space-around;
  position: absolute;
  left: 0;
  top: 0;
}

.songList li {
  height: 300px;
  width: 250px;
  
}

.songList li .pic {
  height: 250px;
  width: 250px;
  overflow: hidden;
  position: relative;
}

.songList li .pic i{
    width: 250px;
    height: 250px;
    line-height: 250px;
}

.songList li .pic img {
  height: 250px;
  width: 250px;
  transition: all 0.5s;
}

.songList li .pic:hover img {
  transform: scale(1.1);
  opacity: 0.8;
}

ul li p:first-of-type {
  font-size: 14px;
  font-weight: 500;
  margin-top:10px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  color: rgb(36, 36, 36);
}

ul li p:first-of-type:hover {
  color: rgb(228, 11, 46);
  
}

ul li p:last-of-type {
  font-size: 14px;
  color: #999;
}

.listBox .hole {
  position: absolute;
  bottom: 0;
  width: 80px;
  left: 50%;
  margin-left: -40px;
  display: flex;
  justify-content: space-around;
}

.listBox .hole li {
  height: 10px;
  width: 10px;
  background-color: #ddd;
  border-radius: 5px;
}

.listBox .hole li:hover {
  background-color: rgba(228, 11, 46,.8);
}

.listBox .hole .bgc {
  background-color: rgba(228, 11, 46,.6);
}

.newSong{
    width: 1200px;
    height: 720px;
    margin: 0 auto;
    background-color: #fff;
}

.newSong ul{
    width: 100%;
    height: 400px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

.newSong ul li{
    width: 220px;
    height: 280px;
    margin-bottom: 20px;
}

ul li .pic{
    width: 220px;
    height: 220px;
    overflow: hidden;
    position: relative;
}

ul li .pic i{
    position: absolute;
    font-size: 30px;
    font-weight: 700;
    top: 0;
    left: 0;
    text-align: center;
    color: #fff;
    opacity: 0;
    transition: all 0.5s;
}

.newSong ul li .pic i{
    width: 220px;
    height: 220px;
    line-height: 220px;
}

ul li .pic:hover i{
    transform: scale(2);
    opacity: 1
}


.newSong ul li .pic img{
    width: 220px;
    height: 220px;
    transition: all 0.5s;
}

.newSong ul li .pic:hover img{
    transform: scale(1.1);
    opacity: 0.8;
}

.hotSinger{
    width: 1200px;
    height: 540px;
    background-color: #eee;
    margin: 0 auto;
}

.hotSinger ul{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

.hotSinger ul li{
    height: 200px;
    width: 200px;
    text-align: center;
}

.hotSinger ul li img{
    height: 150px;
    width: 150px;
    border-radius: 50%;
    cursor: pointer;
}

.hotSinger ul li p{
    color: rgb(36, 36, 36);
    margin: 0;
}


</style>
