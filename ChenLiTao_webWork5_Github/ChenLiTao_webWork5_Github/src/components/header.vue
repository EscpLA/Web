<template>
  <div class="header" >
      <Nav/>
      <headerSign/>
  </div>
</template>

<script>
import Nav from './header/nav'
import headerSign from './header/headerSign'
// import bgc from '../../images/simple-codelines.svg'
export default {
    name:'header',
    // data:function(){
    //   return{
    //     bgcurl:bgc,
    //   }
    // },
    components:{
      Nav,
      headerSign
    }
}
</script>
<style>
  .header{
    background-color: #2b3137;
    height: 623.8px;
    background-image: url("../../images/simple-codelines.svg");
  }
</style>