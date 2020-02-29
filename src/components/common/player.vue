<template>
  <div id="player" :class="{'show':showFlag}">
      <div class="playerBox">
          <div class="icon">
              <i class="left iconfont icon-step-backward"></i>
              <i class="center iconfont icon-zanting"></i>
              <i class="right iconfont icon-step-forward"></i>
          </div>
          <div class="info">
              <img src="../../assets/head.jpg" alt="">
              <div class="songInfo">
                <span>shiyilang</span>
                <span>夏小海</span>
              </div>
              <div class="bar">
                  <div class="way">
                      <div class="drop"></div>
                  </div>
                  <p>04:00</p>
              </div>
          </div>
          <div class="control">
              <i class="type iconfont icon-xunhuanbofang"></i>
              <i class="sound iconfont icon-shengyinyinliangmianxing"></i>
              <i class="list iconfont icon-other"></i>
              <div class="sound"></div>
          </div>
          <!-- <div class="listBox">
              
          </div> -->
      </div>
      
  </div>
</template>

<script>
export default {
name:'player',
data(){
    return{
        clientHeight:0,
        showFlag:false
    }
},
created(){
    
},
mounted(){
    window.onresize=(e)=>{
        console.log(this.clientHeight);
        this.clientHeight=document.documentElement.clientHeight;
    }

    window.onmousemove=(e)=>{
        console.log(this.showFlag);
        if(e.clientY==this.clientHeight){
            this.showFlag=true;
            console.log(this.showFlag)
        }
        
        
    };


},
methods:{
    
}
}
</script>

<style scoped>
    #player{
        width: 100%;
        /* background-color: #ccc; */
        background-color: #eee;
        position: fixed;
        bottom: -61px;
        left: 0;
        transition: bottom 0.5s ease-in-out;
        border-top: 1px solid #eee;
    }
    
    .show{
        bottom:-59px;
    }

    #player:hover{
        bottom: 0;
    }

    .playerBox{
        height: 60px;
        width: 1200px;
        margin: 0 auto;
        /* background-color: red; */
        position: relative;
    }

    .listBox{
        height: 300px;
        width: 100%;
        background-color: pink;
        position:absolute;
        top: -300px;
        left: 0;
        border-radius: 6px 6px 0 0;
    }

    .playerBox .icon{
        height: 60px;
        width: 130px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        float: left;
    }

    .playerBox .icon i{
        display: block;
        height: 30px;
        width: 30px;
        line-height: 30px;
        text-align: center;
        font-size: 25px;
        font-weight: 700;
         color:rgb(58, 193, 126) 
    }

    .playerBox .icon .center{
        height: 40px;
        width: 40px;
        font-size: 40px;
        line-height: 40px;
    }

    .playerBox .icon i:hover{
        text-shadow: 0px 0px 1px rgb(58, 193, 126) ;
    }

    .playerBox .control{
        width: 150px;
        height: 60px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        float: right;
    }

    .playerBox .control i{
        display: block;
        width: 30px;
        height: 30px;
        font-size: 20px;
        line-height: 30px;
        color:rgb(58, 193, 126) 
    }

    .playerBox .control .list{
        font-size: 26px;
    }
    
    .playerBox .info{
        float: left;
        height: 60px;
        width: 850px;
        margin-left:20px;
    }

    .playerBox .info img{
        width:50px;
        height: 50px;
        border-radius: 8px;
        border: 1px solid #ccc;
        box-shadow: 0px 1px 3px #ccc;
        margin: 5px 10px;
        float: left;
    }

    .playerBox .info .songInfo,.playerBox .info .bar{
        height: 30px;
    }

    .playerBox .info .songInfo span{
        font-size: 16px;
        line-height: 30px;
    }

    .playerBox .info .songInfo span:last-child{
        color: #666;
        margin-left: 10px;
    }

    .playerBox .info .bar .way{
        display: inline-block;
        position: relative;
        width: 700px;
        height: 10px;
        margin-bottom: 8px;
        border-radius: 5px;
        border: 1px solid #ccc;
        background-color: #ccc;
    }

    .playerBox .info .bar .way .drop{
        height: 15px;
        width: 15px;
        position: absolute;
        top: -4px;
        left: -6px;
        border: 4px solid #fff;
        background-color: rgb(58, 193, 126);
        border-radius: 50px;
        box-shadow:  0 0 5px #ccc;
    }

    .playerBox .info .bar p{
        float: right;
        height: 30px;
        font-size: 16px;
        line-height: 16px;
        color: #666;
    }

    
</style>