<template>
  <div class="play bgc343434">
    <navSignInReworkNoFanjubg :whitePicture="false" :blackPicture="false" :searchShow="true" :pffffff="true" :navbgTran="false" :btnpffffff="true"/>
    <div class="palyContent">
      <div class="playHeader w1296px">
        <p class="fs36 #fdf6f8 SimHei ffffff">【爱特之光】我们都是未来B站创始人</p>
      </div>
      <div class="playSurface">
        <div class="playSurfaceLeft">
          <VerticalNavCom :liArr="liArr1" />
        </div>
        <div class="playSurfaceMid w1296px">
          <div class="playSurfaceMidFirst bgc474646 w1296px">
            <img src="../iamges/播放页面/播放页面/转发-空.png" alt="" />
            <img src="../iamges/播放页面/播放页面/下载.png" alt="" />
            <img src="../iamges/播放页面/播放页面/设置.png" alt="" />
            <img src="../iamges/播放页面/播放页面/声音+点击效果.png" alt="" />
          </div>
          <div class="playSurfaceMidSecond bgc242424">
            <img src="../iamges/播放页面/播放页面/居中暂停键.png" alt="" />
          </div>
          <div class="playSurfaceMidProgressBar">
            <div class="playSurfaceMidProgressBarLeft h15px bgc343434"></div>
            <div class="playSurfaceMidProgressBarDot h15px"></div>
            <div class="playSurfaceMidProgressBarRight h15px bgc2a2a2a"></div>
          </div>
          <div class="playSurfaceMidfourth bgc242424">
            <div class="playSurfaceMidfourthImg">
              <img src="../iamges/播放页面/播放页面/小栏暂停键.png" alt="" />
            </div>
            <div class="playSurfaceMidfourthP">
              <p class="fs20 MicrosoftYaHeiUI clrd9d6d6">10:01 / 42:45</p>
            </div>
          </div>
          <div class="playSurfaceMidfifth bgc242424">
            <div class="vedioInfo">
              <p class="fs24 clr6f6f6f MicrosoftYaHeiUI">1999人在看，1099条弹幕</p>
            </div>
            <div class="playSurfaceMidfifthFour">
              <img src="../iamges/播放页面/播放页面/打赏.png" alt="" />
              <img src="../iamges/播放页面/播放页面/点赞+已点击效果.png" alt="" />
              <img src="../iamges/播放页面/播放页面/全屏.png" alt="" />
              <img src="../iamges/播放页面/播放页面/播放器-弹幕（关）_44.png" alt="" />
            </div>
            <div class="playSurfaceMidfifthSendBulletscreen">
              <input
                type="text"
                name=""
                value=""
                class="playSurfaceMidfifthSendBulletscreenInpunt"
                placeholder="留下你的看法"
              />
              <button class="playSurfaceMidfifthSendBulletscreenBtn">
                  <p class="fs18  MicrosoftYaHeiUI ffffff ">发送</p>
              </button>
            </div>
          </div>
        </div>
        <div class="playSurfaceRight">
          <VerticalNavCom :liArr="liArr2" />
        </div>
      </div>
    </div>
    <div class="personalInfo w1296px">
      <div class="person">
        <div class="personAvatar">
          <img src="../iamges/播放页面/播放页面/头像.png" alt="">
        </div>
        <div class="personSecondPart">
          <div class="personName">
            <p class="fs27 ffffff MicrosoftYaHeiUI textaligncenter">
              非知名博主
            </p>
          </div>
          <div class="personFollow">
            <p class="fs20 ffffff MicrosoftYaHeiUI
            textaligncenter">
              +关注
            </p>
          </div>
        </div>
      </div>
      <div class="personMotto">
        <p class="fs20 clra9a5a5 MicrosoftYaHeiUI">
          <span class="fs20 clr938e8e MicrosoftYaHeiUI">
            个人签名
          </span>
          
              ：可能有一天，我们会因为各种各样的原因，告别英雄联盟。就好像太一失去了亚古兽一样。但是我一直坚信，我们终会再见。
                            
          </p>
      </div>
    </div>
    <div class="relative w1296px">
      <div class="relativeHeads">
        <p class="fs27 ffffff MicrosoftYaHeiUI w1296px">
          相关推荐
        </p>
      </div>
      <div class="relativeRecommendations w1296px">
        <relativeRecommendCom/>
        <relativeRecommendCom/>
        <relativeRecommendCom/>
        <relativeRecommendCom/>
      </div>
    </div>
    <div class="comment w1296px">
      <div class="commentHead">
        <p class="fs27 ffffff MicrosoftYaHeiUI">
          评论
        </p>
      </div>
      <div class="commentarea">
        <textarea name="" id="" cols="30" rows="10" class="commenttextarea " placeholder="留下善意的评论吧..."></textarea>
        <button class="commenttextareabtn"><p>
          发表
        </p></button>
      </div>
    </div>
    <div class="userComment w1296px">
      <playCommentCom msg1="路人甲" msg2="：咱不知道说啥好，就给大家表演个才艺吧：胸口碎大石！！！吹爆？？吹爆。"/>
      <playCommentCom msg1="路人乙" msg2="：这不火吗！不比马保国好？赶快火起来！！"/>
      <playCommentCom msg1="路人丙" msg2="：年轻人你不讲武德？？我劝你耗子尾汁耗子尾汁。小心我闪电五连鞭抽你~~我一鞭，两鞭，三鞭。 啊不，武林要以和为贵，要讲武德，不要搞窝里斗，谢谢朋友们。"/>
    </div>
    <div class="commentNav w1296px ">
      <p class="commentNavBackwards fs30 MicrosoftYaHeiUI ffffff textaligncenter" @click="commentNavBackwardsClick"> &lt; </p>
      <li v-for="(item,index) in commentNavArray" :key="index" class="commentNavLi" @click="commentNavSwitch(index,6)">
        <p class="fs30 MicrosoftYaHeiUI ffffff textaligncenter" :class="[commentNavActive[index] ? 'commentNavBgc' : '']">
          {{item}}
        </p>
      </li>
      <p class="commentNavForwards fs30 MicrosoftYaHeiUI ffffff textaligncenter" @click="commentNavForwardsClick">&gt;</p>
    </div>
    <foot />
  </div>
</template>

<script>
import VerticalNavCom from "../components/verticalNavCom";
import navSignInReworkNoFanjubg from "../components/navSignInReworkNoFanjubg";
import foot from "../components/foot";
import relativeRecommendCom from '../components/relativeRecommendCom';
import playCommentCom from '../components/playCommentCom'
import Foot from '../components/foot.vue';
export default {
  name: "play",
  components: {
    VerticalNavCom,
    relativeRecommendCom,
    navSignInReworkNoFanjubg,
    foot,
    playCommentCom,
    Foot,
  },
  data: function () {
    return {
      liArr1: [
        "数码",
        "生活",
        "美食",
        "鬼畜",
        "时尚",
        "咨询",
        "娱乐",
        "专栏",
        "电影",
        "TV",
      ],
      liArr2: [
        "直播",
        "动画",
        "番剧",
        "国创",
        "漫画",
        "音乐",
        "舞蹈",
        "游戏",
        "知识",
        "课堂",
      ],
      commentNavArray:["1","2","3","4","...","10"],
      commentNavActive:[true,false,false,false,false,false],
      commentNavCur:0,
    };
  },
  methods:{
    commentNavSwitch(n,m){
      this.commentNavCur=n;
      var i = 0;
      for(i=0;i<=m-1;i++)
        this.$set(this.commentNavActive, i, false);
      this.$set(this.commentNavActive, n, true);
    },
    commentNavBackwardsClick:function(){
      this.$set(this.commentNavActive, this.commentNavCur, false);
      if (this.commentNavCur==0)
        this.commentNavCur=0;
      else if(this.commentNavCur==5)
        this.commentNavCur-=2;
      else
        this.commentNavCur--;
      this.$set(this.commentNavActive, this.commentNavCur, true);
    },
    commentNavForwardsClick:function(){
      this.$set(this.commentNavActive, this.commentNavCur, false);
      if (this.commentNavCur==5)
        this.commentNavCur=5;
      else if(this.commentNavCur==3)
        this.commentNavCur+=2;
      else
        this.commentNavCur++;
      this.$set(this.commentNavActive, this.commentNavCur, true);
    },
  }
}
</script>

<style>
.commentNavBgc{
  background-color: #ffb100;
}
.palyContent {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.playHeader {
  padding-top: 97px;
  padding-bottom: 61px;
}
.playSurface {
  width: 1702px;
  display: flex;
  justify-content: space-between;
}
.playSurfaceMidFirst {
  display: flex;
  flex-direction: row-reverse;
  padding-top: 9px;
  padding-bottom: 16px;
}
.playSurfaceMidFirst img {
  margin-right: 36px;
}
.playSurfaceMidSecond {
  height: 525px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.playSurfaceMidSecond img{
    cursor: pointer;
}
.playSurfaceMidProgressBar {
  display: flex;
}
.playSurfaceMidProgressBarLeft {
  width: 336px;
}
.playSurfaceMidProgressBarDot {
  width: 15px;
  background: #d9d6d6;
  border-radius: 50%;
}
.playSurfaceMidProgressBarRight {
  width: 943px;
}
.playSurfaceMidfourth {
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
}
.playSurfaceMidfourthImg {
  margin-left: 30px;
}
.playSurfaceMidfourthP {
  margin-right: 21px;
}
.playSurfaceMidfifth{
    display: flex;
    padding-bottom: 34px;
    padding-top: 13px;
}
.vedioInfo{
    flex: 30;
    display: flex;
    align-items: center;
    margin-left: 30px;
}
.playSurfaceMidfifthFour{
    flex: 20;
    display: flex;
    align-items: center;
}
.playSurfaceMidfifthFour img{
    margin-right: 43px;
}
.playSurfaceMidfifthSendBulletscreen{
    position: relative;
    flex: 40;
}
.playSurfaceMidfifthSendBulletscreenInpunt {
  width: 391px;
  height: 64px;
  background-color: #242424;
  border: solid #434343;
  border-radius: 30px;
  color: #ffffff;
  font-size: 18px;
  padding-left: 21px;
}
.playSurfaceMidfifthSendBulletscreenBtn{
    width: 118px;
    height: 63px;
    background: #FFB100;
    border: none;
    box-shadow: 0px 0px 12px 1px rgba(112, 109, 101, 0.74);    border-radius: 30px;
    outline: none;
    position: absolute;
    right:114px;
    top: 5px;
    cursor: pointer;
    transition: all 0.5s;
}
.personFollow p{
  width: 87px;
  height: 32px;
  background: #FFB100;
  border-radius: 15px;
  cursor: pointer;
}
.personSecondPart{
  display: flex;
  flex-wrap:wrap;
}
.person{
  display: flex;
  flex: 0.;
}
.personMotto{
  flex: 1;
}
.personalInfo{
  display: flex;
  margin: 0 auto;
  margin-top: 40px;
}
.personFollow{
  display: flex;
  justify-content: center;
  /* margin: 0 auto; */
  width: 100%;
}
.personName{
  /* margin: 0 auto; */
  width: 100%;
  display: flex;
  justify-content: center;
}
.relativeRecommendations{
  display: flex;
}
.relativeHeads{
  margin-bottom: 18px;
}
.relative{
  margin: 0 auto;
  margin-top: 72px;
}
relativeRecommendCom{
  width: 25%;
}
.comment{
  margin: 0 auto;
}
.commentHead{
  margin-top: 47px;
  margin-bottom: 20px;

}
.commentarea{
  position: relative;
}
.commenttextarea{
  width: 1296px;
  height: 124px;
  background: #414141;
  border-radius: 20px;
  border: none;
  padding-left: 27px;
  padding-top: 23px;
  outline: none;
  font-size: 20px;
  margin-bottom: 35px;
  color:#ffffff;
}
.commenttextareabtn{
  width: 98px;
  height: 41px;
  background: #FFB100;
  border-radius: 20px;
  outline: none;
  border: none;
  position: absolute;
  right: 18px;
  bottom: 52px;
  color:#ffffff;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.5s;
}
.userComment{
  margin: 0 auto;
}
.commentNav{
  margin: 0 auto;
  display: flex;
  margin-bottom: 143px;
}
.commentNavLi p{
  transition: all 0.5s;
  cursor: pointer;
}
.commentNavLi p{
  width: 40px;
  height: 43px;
  border-radius: 13px;
  padding: 5px;
  border-radius: 13px;
}
input::placeholder{
  color: #ffffff;
  font-family: MicrosoftYaHeiUI;
}
textarea::placeholder{
  color :#ffffff;
  font-family: MicrosoftYaHeiUI;
}
.playSurfaceMidfifthSendBulletscreenBtn:hover{
  background-color: #F4EA2A;
}
.commenttextareabtn:hover{
  background-color: #F4EA2A;
}
.commentNavBackwards,.commentNavForwards{
  padding: 5px;
  cursor: pointer;
  margin-right: 37px;
}
.commentNavForwards{
  margin-left: 37px;
}
</style>
