<template>
  <div class="contentFourth">
    <div class="contentFourthLeft">
      <img src="../../../images/04.svg" alt="">
    </div>
    <div class="contentFourthRight">
      <contentFourth_Compnents msg1="Write better code" msg2="Collaboration makes perfect. The conversations and codereviews that happen in pull requests help your team sharethe weight of your work and improve the software youbuild." msg3=" Learn about code review."/>
      <contentFourth_Compnents msg1="Manage your chaos" msg2="Take a deep breath. On GitHub, project management happens in isses and project boardslUight alongside yourcode. All you have to do is mention a teammate to getthem involved." msg3="Learn about project management."/>
      <contentFourth_Compnents msg1="Find the right tools" msg2="Browse and buy apps from GitHub Marketplace withyourGitHub account. Find the tools you like or discover newfavorites-then start using them in minutes." msg3="Learn aboutintegrations."/>
    </div>
  </div>
</template>
    
<script>
import contentFourth_Compnents from './contentFourth_components/contentFourth_Compnents'
export default {
    name:"contentFourth",
    // date:function(){
    //   return{
    //     imgsrc:"../../../mages\04.svg"
    //   }
    // },
    components:{
    contentFourth_Compnents,
  }
}
</script>

<style>
  .contentFourth{
    width: 1248px;
    height: 689.13px;
    margin: 100px auto 0px auto;
    /* border: #3f3f3f solid; */
    padding: 0px 0px 0px 40px;
    display: flex;
    justify-content: space-around;
    padding-top: 30px;
}
  .contentFourthLeft,.contentFourthRight{
    width: 50%;
  }
  .contentFourth p {
    text-align: left;
  }
</style>