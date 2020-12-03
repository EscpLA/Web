<template>
  <div class="contentFirst">
      <div class="space">
          <img src="../../images/01.svg" alt="" class="spaceImg"/>
      </div>
      <div class="contentFirstLeft">
          <div class="contentFirstLeftH">
              <h232px24292e msg="Get started with GitHub Enterprise"/>
          </div>
          <div class="contentFirstLeftP">
              <p20px586069 msg="Take collaboration to the next level with security and administrativefeatures built for teams."/>
          </div>
      </div>
      <div class="contentFirstMid">
          <div class="contentFirstImgDiv">
              <img src="../../../images/02.svg" alt="" class="contentFirstImg">
              
          </div>
            <div class="contentFirstH">
               <h316px24292e msg="Enterprise"/>
            </div>
          <div class="contentFirstP">
            <p14px586069 msg="Deploy to your environment or the cloud"/>
          </div>
           <div class="contentFirstBtnDiv">
              <btn msg="Start a free trial" :fatherStyle="obj_1"/>
          </div>
      </div>
      <div class="contentFirstRight">
           <div class="contentFirstImgDiv">
                <img src="../../../images/03.svg" alt="" class="contentFirstImg">
           </div>
           <div class="contentFirstH">
               <h316px24292e msg="Talk to us"/>
           </div>
          <div class="contentFirstP">
                <p14px586069 msg="Need Help?"/>
          </div>
          <div class="contentFirstBtnDiv">
                <btn msg="Contact scales" :fatherStyle="obj_2"/>
          </div>
      </div>
  </div>
</template>

<script>
import h232px24292e from './TEXT/h232px24292e'
import P14px586069 from './TEXT/p14px586069.vue'
import p20px586069 from './TEXT/p20px586069'
import h316px24292e from './TEXT/h316px24292e'
import btn from './btn/btn'
export default {
    components:{
        h232px24292e,
        h316px24292e,
        p20px586069,
        P14px586069,
        btn
    },
    name:'contentFirst',
    data:function(){
        return{
            obj_1:{
                'background-color':'#1074e7',
                'font-weight': '500',
                'font-size':'16px',
                'border-radius':'6px',
                color:'#ffffff',
                width:'148.71px',
                height:'54.8px',
                margin:'8px 0px 4px 0px',
                padding:'16px 0px',
                border:'none',
            },
            obj_2:{
                'background-color':'#ffffff',
                'font-weight': '500',
                'font-size':'16px',
                color:'#1074e7',
                width:'148.71px',
                height:'54.8px',
                margin:'8px 0px 4px 0px',
                padding:'16px 0px',
                border:' solid 1px #1074e7',
                'border-radius':'6px',
            },
            
        }
    },
}
</script>

<style>
.spaceImg{
    width: 450px;
    height: 190px;
    position: absolute;
    left: 850px;
    bottom:300px;
}
.contentFirst{
    width: 1232px;
    height: 322.8px;
    margin: 100px auto 0px auto;
    /* border: #3f3f3f solid; */
    padding: 0px 0px 0px 40px;
    display: flex;
    justify-content: space-around;
    box-shadow:0 0 15px grey;
    position: relative;
}
.contentFirstLeft{
    flex: 1.35;
}
.contentFirstMid{
    flex: 1;
}
.contentFirstRight{
    flex: 1;
}   
.contentFirstLeftH,.contentFirstLeftP{
   width: 300px;
}
.contentFirstLeftH{
    margin-top: 50px;
}
.contentFirstImgDiv{
    display: flex;
    justify-content: center;
}
.contentFirstImg{
    width: 50px;
    height: 50px;
    margin-top: 50px;
    margin-bottom: 8px;
}
.contentFirstBtnDiv{
    display: flex;
    justify-content: center;
}
</style>