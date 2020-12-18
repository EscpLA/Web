<template>
  <div class="homePage">
    <navSignInReworkNoFanjubg :whitePicture="true" :blackPicture="false" :searchShow="true" :pffffff="true" :navbgTran="false" :btnpffffff="false"/>
    <div class="homePageContent">
      <div class="homePageContentFirst">
        <div class="homePageContentFirstRowFst">
          <div class="logo">
            <img src="../iamges//个人中心页/个人中心页/BILIBILI_LOGO(1).png" alt="" />
          </div>
          <div class="reload">
            <img
              src="../iamges//个人中心页/个人中心页/更换.png"
              alt=""
              :class="[rotate? 'go' : 'aa']"
              @click="Perspective"
            />
            <p class="fs16 ffffff MicrosoftYaHeiUI inline" @click="Perspective">{{PerspectiveWords[i]}}</p>
          </div>
        </div>
        <div class="myInfo">
          <div class="myInfoLeft">
            <img src="../iamges//个人中心页/个人中心页/头像2.png" alt="" />
          </div>
          <div class="myInfoRight">
            <div class="myId">
              <p class="fs36 MicrosoftYaHeiUI ffffff">UI无敌</p>
            </div>
            <div class="underMyId">
              <div class="gender">
                <img src="../iamges//个人中心页/个人中心页/男.png" alt="" />
              </div>
              <div class="level">
                <p class="fs18 clr343434">LV0</p>
              </div>
            </div>
          </div>
        </div>
        <div class="motto">
          <p class="fs24 ffffff MicrosoftYaHeiUI textaligncenter">点击编辑个性签名</p>
        </div>
      </div>
      <div class="homePageContentSecond bgc242424">
        <div class="homePageContentSecondLeft">
          <div class="homePageContentSecondLeftComb"  @mouseenter="lineActive(0)">
            <img
              src="../iamges//个人中心页/个人中心页/主页.png"
              alt=""
              class="homePageContentSecondLeftCombImg"
            />
            <p class="fs18 ffffff MicrosoftYaHeiUI">主页</p>
          </div>
          <div class="homePageContentSecondLeftComb"  @mouseenter="lineActive(1)">
            <img
              src="../iamges//个人中心页/个人中心页/动态.png"
              alt=""
              class="homePageContentSecondLeftCombImg"
            />
            <p class="fs18 ffffff MicrosoftYaHeiUI">动态</p>
          </div>
          <div class="homePageContentSecondLeftComb"  @mouseenter="lineActive(2)">
            <img
              src="../iamges//个人中心页/个人中心页/投稿.png"
              alt=""
              class="homePageContentSecondLeftCombImg"
            />
            <p class="fs18 ffffff MicrosoftYaHeiUI">投稿</p>
          </div>
          <div class="homePageContentSecondLeftComb"  @mouseenter="lineActive(3)">
            <img
              src="../iamges//个人中心页/个人中心页/视频.png"
              alt=""
              class="homePageContentSecondLeftCombImg"
            />
            <p class="fs18 ffffff MicrosoftYaHeiUI">视频</p>
          </div>
          <div class="bottomLine" :style="styleobj1"></div>
        </div>
        <div class="homePageContentSecondMid">
          <div class="homePageContentSecondMidUlDiv">
            <ul class="homePageContentSecondMidUl">
              <li><p class="fs18 ffffff MicrosoftYaHeiUI">关注：0</p></li>
              <li><p class="fs18 ffffff MicrosoftYaHeiUI">获赞：0</p></li>
              <li><p class="fs18 ffffff MicrosoftYaHeiUI">粉丝：0</p></li>
            </ul>
          </div>
          <ul class="homePageContentSecondMidUl"> 
            <li><p class="fs18 ffffff MicrosoftYaHeiUI">播放：0</p></li>
            <li><p class="fs18 ffffff MicrosoftYaHeiUI">阅读：0</p></li>
            <li><p class="fs18 ffffff MicrosoftYaHeiUI">转载：0</p></li>
          </ul>
        </div>
        <div class="homePageContentSecondRight">
          <router-link to='/Sign'>
          <div class="homePageContentSecondRightImg">
            <img src="../iamges//个人中心页/个人中心页/设置.png" alt="" class="homePageContentSecondRightImgImg"/>
          </div></router-link>
          <div class="homePageContentSecondRightSearch">
            <div class="homePageContentSecondRightSearchImg">
              <img src="../iamges/个人中心页/个人中心页/搜索(1).png" alt="" />
            </div>
            <input type="text" class="homePageContentSecondRightSearchBox bgcdbdbdbd" />
          </div>
        </div>
      </div>
      <div class="homePageContentThird bgc343434">
        <div class="homePageContentThirdTop">
          <div class="homePageContentThirdTopLeft">
            <div class="homePageContentThirdTopLeftCata" @mouseenter="bgActive(0)" @mouseover="pActive0">
              <p class="homePageContentThirdTopLeftCatap1 fs20 MicrosoftYaHeiUI ffffff" :class="[pSwitch0?'pStyle':'']">
                视频
              </p>
              <p class="homePageContentThirdTopLeftCatap2 fs20 MicrosoftYaHeiUI ffffff" :class="[pSwitch0?'pStyle':'']">
                0
              </p>
            </div>
            <div class="homePageContentThirdTopLeftCata" @mouseenter="bgActive(1)" @mouseover="pActive1" >
              <p class="homePageContentThirdTopLeftCatap1 fs20 MicrosoftYaHeiUI ffffff" :class="[pSwitch1?'pStyle':'']" >
                音频
              </p>
              <p class="homePageContentThirdTopLeftCatap2 fs20 MicrosoftYaHeiUI ffffff" :class="[pSwitch1?'pStyle':'']">
                0
              </p>
            </div>
            <div class="homePageContentThirdTopLeftCata" @mouseenter="bgActive(2)" @mouseover="pActive2">
              <p class="homePageContentThirdTopLeftCatap1 fs20 MicrosoftYaHeiUI ffffff" :class="[pSwitch2?'pStyle':'']">
                相簿
              </p>
              <p class="homePageContentThirdTopLeftCatap2 fs20 MicrosoftYaHeiUI ffffff" :class="[pSwitch2?'pStyle':'']">
                0
              </p>
            </div>
            <div class="homePageContentThirdTopLeftCata" @mouseenter="bgActive(3)" @mouseover="pActive3">
              <p class="homePageContentThirdTopLeftCatap1 fs20 MicrosoftYaHeiUI ffffff" :class="[pSwitch3?'pStyle':'']">
                专栏
              </p>
              <p class="homePageContentThirdTopLeftCatap2 fs20 MicrosoftYaHeiUI ffffff" :class="[pSwitch3?'pStyle':'']">
                0
              </p>
            </div>
            <div class="bgdiv" :style="styleobj2"></div>
          </div>
          <div class="homePageContentThirdTopRight">
            <div class="homePageContentThirdTopRightAdd">
              <img src="../iamges//个人中心页/个人中心页/分类.png" alt="" class="borderActive"/>
              <img src="../iamges//个人中心页/个人中心页/新建.png" alt="" class="borderActive"/>
            </div>
            <div class="homePageContentThirdTopRightEmpty">
              <img src="../iamges//个人中心页/个人中心页/列表空空.png" alt="" />
              <div
                class="homePageContentThirdTopRightEmptyWords MicrosoftYaHeiUI fs18 ffffff"
              >
                空空如也
              </div>
            </div>
          </div>
        </div>
        <div class="homePageContentThirdBtm">
          <div class="homePageContentThirdBtmLeft">
            <div class="homePageContentThirdBtmLeftTop">
              <p class="MicrosoftYaHeiUI fs28 ffffff">全部关注</p>
            </div>
            <div class="homePageContentThirdBtmLeftBtm">
              <div class="homePageContentThirdBtmLeftBtmTop">
                <div :class="[onSwitch1 ? 'switched':'']" class="homePageContentThirdBtmLeftBtmTopEle" @click="ClickSwitch1">
                  <img
                    src="../iamges//个人中心页/个人中心页/KHCFDC_关注(1).png"
                    alt=""
                  />
                  <p class="Adobe ffffff fs20">特别关注</p>
                </div>
                <div :class="[onSwitch2 ? 'switched':'']" class="homePageContentThirdBtmLeftBtmTopEle" @click="ClickSwitch2">
                  <img src="../iamges//个人中心页/个人中心页/不可见(1).png" alt="" />
                  <p class="Adobe ffffff fs20">悄悄关注</p>
                </div>
                <div :class="[onSwitch3 ? 'switched':'']" class="homePageContentThirdBtmLeftBtmTopEle" @click="ClickSwitch3">
                  <img src="../iamges//个人中心页/个人中心页/向下箭头.png" alt="" />
                  <p class="Adobe ffffff fs20">其他分组</p>
                </div>
              </div>
              <div class="homePageContentThirdBtmLeftBtmBtm" >
                <div class="temp">
                  <img src="../iamges//个人中心页/个人中心页/添加.png" alt="" />
                  <p class="MicrosoftYaHeiUI ffffff fs18">新建分组</p>
                </div>
              </div>
            </div>
          </div>
          <div class="homePageContentThirdBtmRight">
            <div class="homePageContentThirdBtmRightTop">
              <img src="../iamges//个人中心页/个人中心页/添加 加号 无边框.png" alt="">
            </div>
            <div class="homePageContentThirdBtmRightBtm">
              <p class="MicrosoftYaHeiUI fs24 clr7f7f7f">暂无关注</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <foot/>
  </div>
</template>

<script>
import navSignInReworkNoFanjubg from "../components/navSignInReworkNoFanjubg"
import foot from '../components/foot'
export default {
  name: "homePage",
  components: {
    navSignInReworkNoFanjubg,
    foot,
  },
  methods: {
    lineActive(n){
      this.num1=n;

    },
    pActive0:function(){
      this.pSwitch0=true;
      this.pSwitch1=false;
      this.pSwitch2=false;
      this.pSwitch3=false;
      // prompt(this.pSwitch0);
    },
    pActive1:function(){
      this.pSwitch0=false;
      this.pSwitch1=true;
      this.pSwitch2=false;
      this.pSwitch3=false;
      // prompt(this.pSwitch0)
    },
    pActive2:function(){
      this.pSwitch0=false;
      this.pSwitch1=false;
      this.pSwitch2=true;
      this.pSwitch3=false;
    },
    pActive3:function(){
      this.pSwitch0=false;
      this.pSwitch1=false;
      this.pSwitch2=false;
      this.pSwitch3=true;
    },
    bgActive(n){
      this.num2=n;
      // prompt("你好");
    },
    onClick: function () {
      this.backgroundColor = "blue";
    },
    Perspective:function(){
      this.rotate=!this.rotate;
      this.i=(this.i+1)%3
    },
    ClickSwitch1:function(){
      this.onSwitch1=true;
      this.onSwitch2=false;
      this.onSwitch3=false;
    },
    ClickSwitch2:function(){
      this.onSwitch1=false;
      this.onSwitch2=true;
      this.onSwitch3=false;
    },
    ClickSwitch3:function(){
      this.onSwitch1=false;
      this.onSwitch2=false;
      this.onSwitch3=true;
    },
  },
  data:function(){
    return{
      num1:0,
      num2:0,
      rotate:false,
      onSwitch1:true,
      onSwitch2:false,
      onSwitch3:false,

      pSwitch0:false,
      pSwitch1:false,
      pSwitch2:false,
      pSwitch3:false,
      PerspectiveWords:["我的视角","新访客","我的粉丝"],
      i:0,
      pos1:[608,446,287,142],
      pos2:[520,603,686,769],
    }
  },
  computed:{
    styleobj1 : function () {
      return{ right : this.pos1[this.num1] + 'px'}
    },
    styleobj2 : function () {
      return{ top : this.pos2[this.num2] + 'px'}
    },
  }
};
</script>

<style>
.pStyle{
  color: #343434;
}
.switched{
  background-color: #242424;
}
.aa{
  transition: all 1s;
  position: absolute;
  top: 2px;
  left: -20px;
}
.go{
  transform: rotate(180deg);
  transition: all 1s;
  position: absolute;
  top: 2px;
  left: -20px;
}
.homePageContent {
  padding: 0px 200px;
  background-color: rgba(52, 52, 52, 1);
  height: 1260px;
}
.homePageContentFirst {
  height: 300px;
  background-image: url("../iamges/个人中心页/个人中心页/u=2372474950,2229220851&fm=26&gp=0.png");
}
.level {
  background-color: #ffb100;
  padding: 4px 5px 4px 6px;
}
.underMyId {
  display: flex;
  justify-content: space-between;
}
.myInfoLeft {
  margin-left: 92px;
}
.myInfoRight {
  display: flex;
  flex-direction: column;
  margin-left: 36px;
}
.myInfo {
  display: flex;
  justify-content: start;
  margin-top: 51px;
}
.homePageContentFirstRowFst {
  display: flex;
  justify-content: space-between;
}
.logo {
  margin: 20px 0px 0px 35px;
}
.reload {
  /* display: flex; */
  margin-top: 20px;
  margin-right: 31px;
  position: relative;
}
.inline {
  display: inline;
}
.ReloadImg {
  position: absolute;
  top: 2px;
  left: -20px;
  transition: all 1s;
}
.bgc242424 {
  background-color: #242424;
}
.homePageContentSecond {
  height: 90px;
}
.homePageContentSecondLeft {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 90px;
  flex: 3;
}
.homePageContentSecondLeftComb {
  display: flex;
  align-items: center;
  border-bottom: solid transparent 7px;
  padding: 22px 15px;
  /* padding-bottom: 30px; */
  margin-left: 20px;
  transition: border 1s;
  cursor: pointer;
}

.homePageContentSecondLeftCombImg {
  margin-right: 32px;
}
.homePageContentSecondMid {
  display: flex;
  justify-content: space-around;
  flex: 0.9;
  margin-left: 120px;
}
.homePageContentSecondRight {
  display: flex;
  justify-content: center;
  flex: 1.5;
}
.homePageContentSecond {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.homePageContentSecondRightSearchBox {
  width: 218px;
  height: 42px;
  border-radius: 10px;
  margin-left: 14px;
  font-size: 20px;
  padding-left: 10px;
}
.homePageContentSecondRightSearch {
  position: relative;
}
.homePageContentSecondRightSearchImg {
  position: absolute;
  top: 11px;
  left: 200px;
}
.homePageContentThird{
  box-shadow:0px 0px 5px #000;
}
.homePageContentThirdTop {
  border-bottom: solid 2px #4c4c4c;
  height: 410px;
  display: flex;
}
.homePageContentThirdTopLeft {
  border-right: solid 2px #4c4c4c;
  height: 410px;
  flex: 0.116;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
}
.homePageContentThirdTopLeftCata {
  display: flex;
  width: 100%;
  padding: 21px 42px 26px 41px;
  transition: background-color, 1s;
  justify-content: space-between;
  cursor: pointer;
  margin-top: 10px;
}
.homePageContentThirdTopLeftCata p {
  transition: color, 0.5s;
  z-index: 2;
}
.homePageContentThirdTopRight {
  flex: 1;
}
/* .homePageContentThirdTopLeftCata:hover p {
  color: #343434;
} */
.homePageContentThirdTopRightAdd {
  display: flex;
  flex-direction: row-reverse;
}
.homePageContentThirdTopRightAdd img {
  margin-right: 30px;
}
.homePageContentThirdTopRightEmpty {
  height: 367px;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
}
.homePageContentThirdTopRightEmptyWords {
  text-align: center;
  width: 100%;
  margin-top: 23px;
}
/* .nav-line {
  background: none repeat scroll 0 0 #35c4fd;
  bottom: 0;
  font-size: 0;
  height: 10px;
  left: 0;
  line-height: 2px;
  position: absolute;
  width: 52px;
} */
.homePageContentThirdBtm {
  display: flex;
}
.homePageContentThirdBtmLeft {
  flex: 0.116;
  border-right: solid 1px #4c4c4c;
  height: 453px;
}
.homePageContentThirdBtmRight {
  flex: 1;
}
.homePageContentThirdBtmLeftTop {
  padding: 32px 26px 29px 18px;
  border-bottom: 3px solid #4c4c4c;
}
.homePageContentThirdBtmLeftBtmTopEle {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px;
  transition: all 1s;
  /* margin-top: 38px; */
}
.homePageContentThirdBtmLeftBtmTopEle img {
  margin-right: 10px;
}
.homePageContentThirdBtmLeftBtmBtm {
  display: flex;
  justify-content: center;
  margin-left: 24px;
}
.homePageContentThirdBtmLeftBtmBtm img {
  margin-right: 10px;
}
.homePageContentThirdBtmLeftBtm {
  height: 325px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.homePageContentThirdBtmLeftBtmTop{
  display: flex;
  flex-wrap: wrap;
  align-content: space-around;
  justify-content: stretch;
  height: 199px;
  }
.temp{
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  margin-left: 10px;
}
.temp img{
  height: 19px;
  align-self: center;
}
.homePageContentThirdBtmRightTop img{
  margin: 27px 0px 0px 26px;
}
.homePageContentThirdBtmRightBtm{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 403px;
}
.homePageContentThirdBtmLeftBtmTopEle,.temp{
  cursor: pointer;
}
.borderActive{
  padding: 10px;
  margin-top: 10px;
  border: solid 4px transparent;
  border-radius: 25%;
}
.borderActive:active{
  border: solid 4px #242424;
  border-radius: 25%;
}
.bottomLine{
  width: 144px;
  height: 7px;
  background-color: #ffb100;
  position: relative;
  top: 46px;
  transition: all 0.5s ease-out;
  /* right: 142px; */
}
.bgdiv{
  width: 157.8px;
  height: 73px;
  background-color: #ffb100;
  position: absolute;
  top: 769px;
  z-index: 1;
  transition: all 0.5s ease-out;
}
.homePageContentSecondMidUl{
  cursor: pointer;
}
/* .homePageContentSecondRightImgImg{
  transition: all 0.5s;
} */
.homePageContentSecondRightImgImg:hover{
  animation: rotate360deg 1.25s  1 alternate;
  transform: scale(1.25);
}
@keyframes rotate360deg {
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg) scale(1.25);
  }
}
</style>
