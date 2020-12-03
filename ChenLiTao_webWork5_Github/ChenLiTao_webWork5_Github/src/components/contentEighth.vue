<template>
  <div class="contentThird">
      <div class="contentThirdH_tiny">
        <h216px586069 msg="Integrations" />    
      </div>
      <div class="contentThirdH">
          <p40px24292e msg="Build on GitHub"/>
      </div>
      <div class="contentThirdP">
          <p20px586069 msg="Customize your process with GitHub apps and an intuitive API. Integrate the tools you already use or discover new favorites to create a happier, more efficient way of working."/>
      </div>
      <div class="contentThirdBtn">
          <btn msg="Learn about Integrations" :fatherStyle="obj_3"/>
      </div>
      <div class="contentThirdBtm">
        <p14px586069 msg="Sometimes, there’s more than one tool for the job. Why not try something new?"/>
        <a href=""><p14px586069 blue="Browse GitHub Marketplace →" class="bluenounderline"/></a>
      </div>


  </div>
</template>

<script>
import h216px586069 from './TEXT/h216px586069'
import p14px586069 from './TEXT/p14px586069'
import p40px24292e from './TEXT/p40px24292e'
import p20px586069 from './TEXT/p20px586069'
import btn from './btn/btn'
export default {
    name:'contentThird',
    components:{
        h216px586069,
        p40px24292e,
        p20px586069,
        p14px586069,
        btn,
    },
    data:function(){
        return{
            obj_3:{
                'background-color':'#ffffff',
                'font-weight': '500',
                'font-size':'16px',
                color:'#1074e7',
                width:'263px',
                height:'66px',
                margin:'8px 0px 4px 0px',
                padding:'10px 0px',
                border:'1px solid #1074e7',
                'border-radius':'6px',
            },
        }
    },
    props:{
        arr:Array,
    }
}
</script>

<style>
.contentThird{
    width: 1150px;
    height:100%;
    margin: 50px auto 0px auto;
    /* border: #3f3f3f solid; */
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-content: space-around;
}
.contentThirdH_tiny,.contentThirdH,.contentThirdP,.contentThirdBtn{
    display: flex;
    justify-content: center;
    width: 100%;
}
.contentThirdH_tiny{
    margin-top: 50px;
}
.contentThirdH{
    
}
.contentThirdP{
    margin: 0px 250px;
    text-align: center;
}
.contentThirdBtn{
    margin-bottom: 20px;
}
.contentThirdBtm{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 1150px;
    margin: 0px 390px;
}
.bluenounderline{
    text-decoration: none;
}

</style>