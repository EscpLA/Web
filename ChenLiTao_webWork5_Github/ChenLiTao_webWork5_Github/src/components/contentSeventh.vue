<template>
  <div class="contentSeventh">
      <div class="contentSeventhleft">
          <contentFourth_Compnents msg1="Code security" msg2="Prevent problems before they happen. Protected branches, signed commits, and required status checks protect your work and help you maintain a high standard for your code." class="noshadow1"/>
          <contentFourth_Compnents msg1="Access controlled" msg2="Encourage teams to work together while limiting access to those who need it with granular permissions and authentication through SAML/SSO and LDAP." class="noshadow2"/>
      </div>
      <div class="contentSeventhRight">
          <img src="../../../images\business.png" alt="">
      </div>
      <div class="contentSeventhBtmDiv">
          <contentSeventhBtm/>
      </div>
  </div>
</template>

<script>
import contentFourth_Compnents from './contentFourth_components/contentFourth_Compnents'
import contentSeventhBtm from './contentSeventh/contentSeventhBtm'
export default {
    name:"contentSeventh",
    components:{
        contentFourth_Compnents,
        contentSeventhBtm
    }
}
</script>

<style>
.contentSeventh{
    width: 980px;
    /* height: 322.8px; */
    margin: 100px auto 0px auto;
    /* border: #3f3f3f solid; */
    padding: 20px 0px 20px 0px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}
.noshadow1:hover,.noshadow2:hover{
        border: solid 1px transparent;
        box-shadow:none;    
}
.noshadow1,.noshadow2{
    margin: 0px;
    padding: 0px;
}
.contentSeventhRight{
    display:flex;
    align-items: center;
    width: 50%;
}
.contentSeventhleft{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    width:50%;
}
.contentSeventhRight img{
    width: 458px;
    height: 284px;
    padding-top: 10px;
}
.contentSeventh p{
    text-align: left;
}
.contentSeventhBtmDiv{
    width: 980px;
    display: flex;
    justify-content: center;
}

</style>