<template>
  <Header/>
  <!-- <main class="main-content">
    <router-view/>
  </main> -->
  <Footer/>
</template>

<script>
//b1: imput vào
import Header from './components/ComHeader.vue'
import Footer from './components/ComFooter.vue'

export default {
  name: 'App',
  components: {
    
    Header,
    Footer,

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
