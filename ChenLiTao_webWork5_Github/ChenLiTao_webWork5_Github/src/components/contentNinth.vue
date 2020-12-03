<template>
  <div class="contentThird">
      <div class="contentThirdH_tiny">
        <h216px586069 msg="Community" />    
      </div>
      <div class="contentThirdH">
          <p40px24292e msg="Welcome home,developers"/>
      </div>
      <div class="contentThirdP">
          <p20px586069 msg="GitHub is home to the world’s largest community of developers and their projects..."/>
      </div>
      <!-- <div class="contentThirdBtn">
          <btn msg="Sign up your team" :fatherStyle="obj_3"/>
      </div> -->
      <div class="developers">
          <combinition-component-5/>
          <combinition-component-6/>
          <combinition-component-7/>
          <combinition-component-8/>
      </div>

  </div>
</template>

<script>
import h216px586069 from './TEXT/h216px586069'
import p40px24292e from './TEXT/p40px24292e'
import p20px586069 from './TEXT/p20px586069'
import combinitionComponent5 from './combinitionComponent.vue/combinitionComponent5'
import combinitionComponent6 from './combinitionComponent.vue/combinitionComponent6'
import combinitionComponent7 from './combinitionComponent.vue/combinitionComponent7'
import combinitionComponent8 from './combinitionComponent.vue/combinitionComponent8'
import CombinitionComponent5 from './combinitionComponent.vue/combinitionComponent5.vue'
// import btn from './btn/btn'
export default {
    name:'contentThird',
    components:{
        h216px586069,
        p40px24292e,
        p20px586069,
        combinitionComponent5,
        combinitionComponent6,
        combinitionComponent7,
        combinitionComponent8,
        CombinitionComponent5,

        // btn,
    },
    data:function(){
        return{
            obj_3:{
                'background-color':'#ffffff',
                'font-weight': '500',
                'font-size':'16px',
                color:'#1074e7',
                width:'217.8px',
                height:'66px',
                margin:'8px 0px 4px 0px',
                padding:'20px 32px',
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
    width: 1232px;
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
.developers{
    display: flex;
    
}
</style>