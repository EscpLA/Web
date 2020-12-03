<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Header/>
    <contentFirst/>
    <contentSecond :imgarr="imgarr"/>
    <contentThird  />
    <contentFourth />
    <contentFifth/>
    <contentSixth :parentArr="arr" />
    <contentSeventh />
    <contentEighth />
    <contentNinth/>
    <signupbtm/>
    <Footer />
    <!-- <footerTop/> -->
  </div>
  
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Header from './components/header'
// import p20px586069 from './components/TEXT/p20px586069'
// import h232px24292e from './components/TEXT/h232px24292e'
// import h316px24292e from './components/TEXT/h316px24292e'
import contentFirst from './components/contentFirst'
import contentSecond from './components/contentSecond'
import contentThird from './components/contentThird'
import contentFourth from './components/contentFourth'
import contentFifth from './components/contentFifth'
import contentSixth from './components/contentSixth'
import contentSeventh from './components/contentSeventh'
import contentEighth from './components/contentEighth'
import contentNinth from './components/contentNinth'
import signupbtm from './components/signupbtm'
import Footer from './components/Footer'
// import footerTop from './components/footerComponents/footerTop'
export default {
  name: 'App',
  components: {
    // HelloWorld
    Header,
    // p20px586069,
    // h232px24292e,
    // h316px24292e,
    contentFirst,
    contentSecond,
    contentThird,
    contentFourth,
    contentFifth,
    contentSixth,
    contentSeventh,
    contentEighth,
    contentNinth,
    signupbtm,
    Footer,
    // footerTop,
  },
  data:function(){
    return{
      arr:[1,2,3,4]
    }
  }
}
</script>

<style>
*{
  margin: 0px;
  padding: 0px;
  /* overflow-x: hidden; */
}
#app {
  margin: 0px;
}
a{
  text-decoration: none;
}

</style>
