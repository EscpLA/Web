<template>
  <div class="contentSecond">
      
      <div class="contentSecondH">
          <h320px6a737d msg="More than 2.9 milion buinesses and oranizaions use GiHub"/>
      </div>
      <div class="contentSecondImagesDiv">
          <!-- <img :src=item alt="" v-for="(item,index) in imgarr" :key="index" class="contentSecondImages"> -->
           <div class="contentSecondImagesDIv">
              <ul class="contentSecondImagesUl">
                  <div class="contentSecondImagesLDiv">
                          <li v-for="(item,index) in imgarr" :key="index" class="contentSecondImagesL">
                              <img :src="item" alt="">
                          </li>
                  </div>
              </ul>
          </div> 
      </div>

  </div>
</template>

<script>
import h320px6a737d from './TEXT/h320px6a737d'
import logo01 from '../../images/logo_01.png'
import logo02 from '../../images/logo-02.png'
import logo03 from '../../images/logo-03.png'
import logo04 from '../../images/logo-04.png'
import logo05 from '../../images/logo-05.png'
import logo06 from '../../images/logo-06.png'
import logo07 from '../../images/logo-07.png'
import logo08 from '../../images/logo-08.png'
import logo09 from '../../images/logo-09.png'
import logo10 from '../../images/logo-10.png'
import logo11 from '../../images/logo-11.png'
import logo12 from '../../images/logo-12.png'

export default {
    name:'contentSecond',
    components:{
        h320px6a737d,
    },
    data:function(){
        return{
            imgarr:[logo01,logo02,logo03,logo04,logo05,logo06,logo07,logo08,logo09,logo10,logo11,logo12],
            
        }
    }
}
</script>

<style>
.contentSecond{
    width: 1232px;
    height: 100%;
    margin: 100px auto 0px auto;
    /* border: #3f3f3f solid; */
    padding: 60px 0px 0px 40px;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
    padding: 48px 0px;
}
.contentSecondImagesUl{
    display: flex;
    justify-content: space-around;
}
.contentSecondImagesDiv{
    width: 980px;
}
.contentSecondImagesLDiv{
    display: flex;
    flex-wrap: wrap;
}
.contentSecondImagesL{
    width: 16.6%;
    height: 25px;
    margin-top: 20px;
    display: inline;
}
.contentSecondImagesL img{
    width:auto;
    height: 25px;
    filter: grayscale(100%);
}
</style>