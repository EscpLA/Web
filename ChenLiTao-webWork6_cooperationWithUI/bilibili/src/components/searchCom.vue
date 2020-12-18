<template>
  <div class="searchCom">
      <div class="searchComFirst">
      </div>
      <div class="searchComSecond">
          <p class="fs16 ffffff MicrosoftYaHeiUI"> 慎入！千万不要在网络上<span class="clrffb100">搜索</span>这些词……</p>
      </div> 
      <div class="searchComThird">
          <div class="searchComThirdAvatar">
              <img src="../iamges/搜索界面/搜索界面/个人 (4).png" alt="">
          </div>
          <div class="searchComThirdAuthor">
              <p class="fs14 clr707070 MicrosoftYaHeiUI">
                  作者：
              </p>
          </div>
          <div class="searchComThirdName">
              <p class="fs14 clr707070 MicrosoftYaHeiUI">
                  UI无敌
              </p>
          </div>
      </div>
      <div class="searchComFourth">
          <div class="searchComFourthViews">
              <div class="searchComFourthViewsImg">
                  <img src="../iamges/搜索界面/搜索界面/播视web_播放量.png" alt="">
              </div>
              <div class="searchComFourthViewsAmount">
                  <p class="fs12 clr707070 MicrosoftYaHeiUI">
                      5.6万
                  </p>
              </div>
          </div>
          <div class="searchComFourthDate">
              <div class="searchComFourthDateImg">
                  <img src="../iamges/搜索界面/搜索界面/历史时间-2.png" alt="">
              </div>
              <div class="searchComFourthDateTime">
                  <p class="fs12 clr707070 MicrosoftYaHeiUI">2020-11-28</p>
              </div>
          </div>
          <div class="searchComFourthLike">
              <div class="searchComFourthLikeImg">
                  <img src="../iamges/搜索界面/搜索界面/点赞.png" alt="">
              </div>
              <div class="searchComFourthLikeAmount">
                  <p class="fs12 clr707070 MicrosoftYaHeiUI">
                      1.2万
                  </p>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name:'searchCom'
}
</script>

<style>
.searchCom{
    background-color: #242424;
    width: 353px;
    height: 268px;
    box-shadow:0 0 20px #000;
    border-radius: 10px;
}
.searchComFirst{
    background-image: url(../iamges/搜索界面/搜索界面/图片.png);
    width: 353px;
    height: 190px;
    margin-bottom: 7px;
}
.searchComSecond{
    margin-bottom: 6px;
    margin-left: 13px;
}
.searchComThird{
    display: flex;
    justify-content: start;
}
.searchComThird div{
    margin-left: 15px;
    margin-right: 3px;
}
.searchComFourth>div{
    display: flex;
    margin-right: 20px;
}
.searchComFourth{
    display: flex;
    margin-left: 15px;
}
</style>