<template>
  <div id="song">
      <ul class="listHeader">
          <li>歌曲</li>
          <li>专辑</li>
          <li>时长</li>
      </ul>
      <ul class="listContent">
          <li v-for="(val,index) in songList01[flag-1]" :key="index">
              <div><i>{{val.index}}</i></div>
              <div><span>{{val.musicData.songname}}</span></div>
              <div><span>{{val.musicData.albumname}}</span></div>
              <div><span>{{val.musicData.interval}}</span></div>
          </li>
      </ul>
      <div class="icon">
        <span class="left" v-if="flag!=1" @click="reduce()">&lt;</span>
        <span>{{flag}}</span>
        <span class="right" @click="add()">&gt;</span>
      </div>
  </div>
</template>

<script>
export default {
  name: "song",
  data() {
    return {
      params: {
        id: 0,
        pageSize: 999,
        page: 0,
      },
      songList:[[],[]],
      flag:1,
    };
  },
  created() {
    this.params.id = this.$route.query.id;
    this.api("https://v1.itooi.cn/tencent/song/artist", this.params).then(
      res => {
        console.log(res);
        for(let i=0;i<res.length;i++){
            let interval=res[i].musicData.interval
            let m=parseInt(interval/60).toString().length==1?'0'+parseInt(interval/60).toString():parseInt(interval/60);
            let s=parseInt(interval%60).toString().length==1?'0'+parseInt(interval%60).toString():parseInt(interval%60);
            res[i].musicData.interval=m+':'+s;
        }
        this.songList=res;
      }
    );
    
  },
mounted(){
    
  },
  methods: {
      //页面切换
       add() {
      this.flag++;
    },
    reduce() {
      this.flag--;
    }
  },
  computed:{
      songList01:function(){
          let list=[];
          for(let i=0;i<Math.ceil(this.songList.length/15);i++){
              let arr=[]
              for(let j=0;j<15;j++){
                  arr.push(this.songList[i*15+j])
              }
              list.push(arr);
          }
          var count=0;
          for(let a=9;a>=0;a--){
              if(list[Math.ceil(this.songList.length/15)-1][a]==undefined){
                  list[Math.ceil(this.songList.length/15)-1].pop()
              }
          }
          console.log(list)
          return list;
      }
  }
};
</script>

<style scoped>
#song{
    width: 1200px;
    height: 700px;
    background-color: #eee;
    margin: 0 auto;
}

.listHeader{
    width: 100%;
    height: 40px;
    font-size: 16px;
    line-height: 40px;
    color: #999;
    background-color: #eee;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.listHeader li{
    height: 40px;
}

.listHeader li:first-child{
    margin-left: 60px
}

.listHeader li:last-child{
    margin-right: 60px
}

.listContent {
    width: 100%;
}

.listContent li{
    height: 40px;
    width: 1200px;
}

.listContent li div{
    float: left;
    height: 40px;
    font-size: 14px;
    line-height: 40px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}


.listContent li div:last-child{
    float: right;
    margin-right: 60px;
}

.listContent li div:first-child{
    width: 60px;
    text-align: center;
    color: #999;
}

.listContent li div:nth-child(2),.listContent li div:nth-child(3){
    width: 525px;
    font-weight: 500;
}

.listContent li div:nth-child(3){
    width: 400px;
}

.listContent li div:nth-child(2) span:hover,.listContent li div:nth-child(3) span:hover{
    color: rgb(58, 193, 126);
    cursor: pointer;
}

.listContent li:nth-child(odd){
    background-color: #fff;
}

#song .icon {
  height: 20px;
  text-align: center;
  margin-top: 15px;
}

#song .icon span {
  display: inline-block;
  height: 30px;
  padding: 0 10px;
  line-height: 30px;
  color: #ccc;
  font-size: 16px;
  font-weight: 600;
}

#song .icon span:nth-last-child(2) {
  margin: 0 20px;
  background-color: rgb(58, 193, 126);
  color: #fff;
}

#song .icon span:hover {
  background-color: rgb(58, 193, 126);
  color: #fff;
}
</style>