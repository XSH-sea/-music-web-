<template>
  <div id="header">
    <div class="header">
      <a href="https//:www.kugou.com" class="logo">
        <img src="../../assets/logo.png" alt />
      </a>
      <div class="searchBox">
        <input type="search" name id />
        <i class="iconfont icon-sousuo"></i>
      </div>
      <div class="login">
        <a href="#">登陆</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#header {
  height: 80px;
  width: 100%;
  background: #fff
}

.header{
    width: 1200px;
    height: 100%;
    margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgb(58, 193, 126);
  background: #fff;
}

.logo {
  height: 56px;
  width: 204px;
  margin-left: 30px;
}

.logo img {
  height: 56px;
  width: 204px;
}

.searchBox {
  height: 30px;
  width: 280px;
  position: relative;
  border: 1px solid rgb(58, 193, 126);
  border-radius: 15px;
  margin-left: 500px;
}

.searchBox input {
  position: absolute;
  left: 0;
  top: 0;
  height: 28px;
  padding: 6px 0 6px 10px;
  width: 278px;
  font-size: 12px;
  border-radius: 15px;
}

.searchBox i {
  position: absolute;
  right: 10px;
  top: 0;
  font-size: 14px;
  color: gray;
  height: 30px;
  line-height: 30px;
}

.login a {
  display: block;
  height: 30px;
  width: 50px;
  background-color: rgb(58, 193, 126);
  font-size: 14px;
  text-align: center;
  line-height: 30px;
  color: #fff;
  font-weight: 500;
  border-radius: 4px;
  margin-right: 30px;
}

.login a:hover{
    color: #ccc;
}
</style>