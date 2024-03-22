<template>
<div id="app">
<!--<Header />-->

<router-view></router-view>

<!--<Footer />-->

</div>
</template>

<script>
//import Header from './components/plugins/header.vue'   leave-active-class="animate__animated animate__fadeOut"
//import Footer from './components/Footer.vue'

export default {
  name: 'App',
   components: {
  //  Header,
  //  Footer
  }
}





</script>

<style>

.contain{margin-top: 0px;padding-bottom: 0px;background-color: white;}
    
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif,'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #06080b;
  margin-top: 0px;
/* background-color: white; */
  padding-bottom: 0px;
  padding: 60px;


  background-image: url("./assets/bg4.jpg");background-size: cover;
background-repeat: no-repeat;color: white;
background-repeat: no-repeat;
animation:bgani 30s linear infinite;
animation-delay: 1s;
/* background-position: 1000px 100px; */
}


@keyframes bgani{
0%{background-position: 1200 0;}
50%{background-position: 50% 0;}
100%{background-position: 100% 0;}
}


@media screen and (max-width:480px){
#app {
  overflow-x: hidden;
  padding: 10px;
}
}


</style>
