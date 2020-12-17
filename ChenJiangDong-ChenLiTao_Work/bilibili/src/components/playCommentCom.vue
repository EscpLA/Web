<template>
  <div class="playComment">
      <div class="avatar">
        <img src="../iamges/播放页面/播放页面/路人头像.png" alt="">
      </div>
      <div class="userInfo">
        <div class="userName">
          <p class="fs24 MicrosoftYaHeiUI ffffff">
            {{msg1}}
          </p>
        </div>
        <div class="userLv">
          <p class="userLvP fs14 MicrosoftYaHeiUI ffffff textaligncenter">
            LV.2
          </p>
        </div>
      </div>
      <div class="commentContent">
        <p class="fs20  MicrosoftYaHeiUI userName ffffff">
          {{msg2}}
        </p>
      </div>
      <div class="thumbsup">
        <img src="../iamges/播放页面/播放页面/赞.png" alt="">
      </div>
      <div class="thumbsdowm">
        <img src="../iamges/播放页面/播放页面/踩.png" alt="">
      </div>
  </div>
</template>

<script>
export default {
  props:{
    msg1:String,
    msg2:String,
  }
}
</script>

<style>
.playComment{
  width: 1296px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 30px;
}
.userLvP{
  width: 41px;
  height: 18px;
  background: #F9D011;
  border: NaNpx solid #FB7299;
  border-radius: 9px;
}
.avatar{
  flex: 100;
}
.userInfo{
  display:flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: start;
  flex: 100;
}
.commentContent{
  flex:800;
}
.userName{
  width: 100%;
}
.userLv{
  width: 100%;
  margin-top: 8px; 
}
.thumbsup{
  flex: 45;
}
.thumbsdowm{
  flex: 45;
}
</style>