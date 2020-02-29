<template>
  <div id="app">
    <Header></Header>
    <Nav></Nav>
    <router-view/>
    <Footer></Footer>
     <player></player>
  </div>
</template>

<script>
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import Nav from '@/components/common/Nav'
import player from '@/components/common/player'

export default {
  name: 'App',
  components:{
    Header,
    Footer,
    Nav,
    player
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
