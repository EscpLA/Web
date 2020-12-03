<template>
  <div class="contentThird">
      <div class="contentThirdH_tiny">
        <h216px586069 msg="Security and administration" />    
      </div>
      <div class="contentThirdH">
          <p40px24292e msg="Your business needs, met"/>
      </div>
      <div class="contentThirdP">
          <p20px586069 msg="From flexible hosting to granular access controls, we’ve got your security requirements covered."/>
      </div>
      <div class="contentThirdBtn">
          <btn msg="Learn how Github enterprise works ->" :fatherStyle="obj_3"/>
      </div>

  </div>
</template>

<script>
import h216px586069 from './TEXT/h216px586069'
import p40px24292e from './TEXT/p40px24292e'
import p20px586069 from './TEXT/p20px586069'
import btn from './btn/btn'
export default {
    name:'contentSixth',
    components:{
        h216px586069,
        p40px24292e,
        p20px586069,
        btn,
    },
    data:function(){
        return{
            obj_3:{
                'background-color':'#ffffff',
                'font-weight': '500',
                'font-size':'16px',
                color:'#1074e7',
                width:'300px',
                height:'66px',
                margin:'8px 0px 4px 0px',
                padding:'10px 0px',
                border:'1px solid #1074e7',
                'border-radius':'6px',
            },
        }
    },
  props: {
    parentArr: Array
  }
}
</script>

<style>
.contentThird{
    width: 1232px;
    height: 322.8px;
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
</style>