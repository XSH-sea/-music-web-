<template>
  <div id="footer">
    <div class="info">
      <div class="box">
        <a href="https://github.com/XSH-sea" class="left">
          <img src="@/assets/head.jpg" alt />
          <p>十一郎</p>
        </a>
        <div class="right">
          <a href="mailto:xsh97922@qq.com" target="_blank">邮箱：xsh97922@qq.com</a><br>
          <a href="https://github.com/XSH-sea" target="_blank">Github：github.com/XSH-sea</a>
        </div>
      </div>
      <p>此页面仅用作web开发练习与技术交流，若涉及侵权，请联系我删除</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
#footer {
  width: 100%;
  height: 200px;
  background-color: rgb(51, 51, 51);
  border-top: 2px solid rgb(58, 193, 126);
}

.info {
  width: 1200px;
  margin: 0 auto;
  
}

.info .box{
    width: 400px;
    height: 100px;
    margin: 30px auto 20px;
    position: relative;
    /* background-color: pink; */
}

.info .box .left{
    height: 100px;
    width: 130px;
    font-weight: bold;
    position: absolute;
    left: 0;
    top: 0;
    border-right: 1px solid #fff;
    text-align: center;
    padding-right: 10px;
    
}

.info .box .left img{
    height: 80px;
    width:80px;
    border-radius: 50%;
}

.info .box .left p{
    color: #fff;
    margin-top: -8px;
    font-size: 16px;
}

.info .box .right{
    height: 100px;
    width: 260px;
    position: absolute;
    right: 0;
    top: 0px;
    font-size: 14px;
    font-weight: 500;
    padding: 20px 0px 20px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

.info .box .right a{
    color: #fff;
    cursor: pointer;
}

.info p{
    text-align: center;
    color: #fff;
    font-size: 14px;
}
</style>