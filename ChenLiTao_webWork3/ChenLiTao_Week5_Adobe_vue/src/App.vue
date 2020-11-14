<template>
  <div id="app">
    <div></div>
    <Nav></Nav>
    <background></background>
    <trilogy></trilogy>
    <footFather></footFather>
    <!-- <hello-world></hello-world> -->
  </div>
</template>

<script>
  import Nav from './components/nav';
  import background from './components/background';
  import Trilogy from './components/Trilogy';
  import footFather from './components/footFather';
  import  './assets/Adobe.css';
  // import HelloWorld from './components/HelloWorld.vue';
  // import Adobe from '../../css/Adobe.css';

export default {
  name: 'App',
  components: {
    Nav,
    background,
    Trilogy,
    footFather,
    // HelloWorld,
  }
}
</script>
