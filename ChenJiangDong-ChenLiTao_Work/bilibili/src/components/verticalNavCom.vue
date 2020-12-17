<template>
  <div class="verticalNav">
      <div class="verticalNavImgDiv">
            <img src="../iamges/播放页面/播放页面/小左耳朵.png" alt="">
          <img src="../iamges/播放页面/播放页面/小右耳朵.png" alt="">
      </div>
      <div class="verticalNavContent">
              <li v-for="(item,index) in liArr" :key="index" class="verticalNavContentLi fs24 clrfdf6f8">
                  <p class="fs24 clrfdf6f8 MicrosoftYaHeiUI">
                    {{item}}
                  </p>
              </li>
      </div>
  </div>
</template>

<script>
export default {
  name: "verticalNav",
  props:{
      liArr:Array,
  }
}
</script>

<style>
.verticalNav {
  width: 104px;
  /* height: 529px; */
  background: #242424;
  border: NaNpx solid 2px #434343;
  border-radius: 30px;
  margin: 0 auto;
  margin-top: 50px;
  padding-top: 28px;
  padding-bottom: 34px;
  display: flex;
  justify-content: center;
  position: relative;
}
.verticalNavContent{
    /* width: 48px; */                          
    height: 468px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.verticalNavContent li{
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  margin-top: 3px;
  padding-top: 5px;
  transition: all 0.5s;
  border-radius: 15px;
  cursor: pointer;
}
.verticalNavImgDiv{
    position: absolute;
    top:-19px
}
.verticalNavContent li:hover{
  background-color: #ffb100;
}
</style>
