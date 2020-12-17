<template>
  <div class="searchroot">
    <!-- <navSignin :searchShow="false"/> -->
    <navSignInReworkFanjubg :whitePicture="true" :blackPicture="false" :searchShow="false" :pffffff="true" :navbgTran="false" :btnpffffff="false"/>
    <div class="search bgc343434">
      <div class="searchContent">
        <!-- <searchCom/> -->
        <div class="searchContentNav">
          <div class="searchLogo">
            <div class="searchLogoTv">
              <img src="../iamges/搜索界面/搜索界面/bilibili-line.png" alt="" />
            </div>
            <div class="searchLogoBlbl">
              <img src="../iamges/搜索界面/搜索界面/BILIBILI_LOGO.png" alt="" />
            </div>
          </div>
          <div class="searchBoxDiv">
            <div class="searchBoxDivBox">
              <input type="text" />
            </div>
            <div class="searchBoxDivImg">
              <img src="../iamges/顶栏和底栏/sousuo.png" alt="" />
            </div>
          </div>
        </div>
        <div class="searchContentNavSecond">
          <li
            v-for="(item, index) in searchNavArray"
            :key="index"
            @click="bottomLineShowClick(index)"
          >
            <p
              class="fs18 MicrosoftYaHeiUI ffffff textaligncenter"
              :class="[bottomLineActive[index] ? 'btmLineShow' : 'btmLineTran']"
            >
              {{ item }} <span class="fs16">{{ searchNavArrayNum[index] }}</span>
            </p>
          </li>
        </div>
        <div class="lineBottom bgcb8b8b8"></div>
        <div class="threeDynamicImgs">
          <div class="threeDynamicImgsFirst">
            <div class="threeDynamicImgsFirstDiv" @click="threeDynamicImgsFirstSwitch">
              <img src="../iamges/搜索界面/搜索界面/筛选(1).png" alt="" :class="[threeDynamicImgsFirstActive ? '' : 'imgShowb8b8b8']"/>
            </div>
            <p class="fs16 ffffff MicrosoftYaHeiUI  threeDynamicImgsP" @click="threeDynamicImgsFirstSwitch" :class="[threeDynamicImgsFirstActive ? 'clrffb100' : 'clrb8b8b8']">筛选</p>
          </div>
          <div class="threeDynamicImgsSecond">
            <div class="threeDynamicImgsSecondDiv" @click="threeDynamicImgsSecondShowSwitch(1)">
              <img src="../iamges/搜索界面/搜索界面/列表式排列.png" alt="" :class="[threeDynamicImgsSecondSwitch ? 'imgShow2323b8b8b8' : 'imgShow2323ffb100']"/>
            </div>
            <div class="threeDynamicImgsSecondDiv" @click="threeDynamicImgsSecondShowSwitch(2)">
              <img src="../iamges/搜索界面/搜索界面/方格排列.png" alt="" :class="[threeDynamicImgsSecondSwitch ? 'imgShow2323ffb100' : 'imgShow2323b8b8b8']"/>
            </div>
          </div>
        </div>
        <div class="category" v-show="categoryActive">
          <div class="categoryContent">
            <p class="fs16 categoryContentHead MicrosoftYaHeiUI " :class="[categoryContentHead1Active ? 'categoryHeadbgColor474747' : 'categoryHeadbgffffff']" @click="categoryClick1(index, 5,0)">综合排序</p>
            <li
              v-for="(item, index) in category1"
              :key="index"
              @click="categoryClick1(index, 5,1)"
              class="categoryContentFirstLi"
            >
              <p
                class="fs14 clr868686 MicrosoftYaHeiUI"
                :class="[categoryActive1[index] ? 'categorybg' : 'categorybgTransparant']"
              >
                {{ item }}
              </p>
            </li>
          </div>
          <div class="categoryContent">
            <p class="fs16 categoryContentHead MicrosoftYaHeiUI " :class="[categoryContentHead2Active ? 'categoryHeadbgColor474747' : 'categoryHeadbgffffff']" @click="categoryClick2(index, 5,0)"> 全部时长</p>
            <li v-for="(item, index) in category2" :key="index" @click="categoryClick2(index, 5,1)" class="categoryContentSecondLi" >
              <p class="fs14 clr868686 MicrosoftYaHeiUI" :class="[categoryActive2[index] ? 'categorybg' : 'categorybgTransparant']">
                {{ item }}
              </p>
            </li>
          </div>
          <div class="categoryContent">
            <p class="fs16 categoryContentHead MicrosoftYaHeiUI " :class="[categoryContentHead3Active ? 'categoryHeadbgColor474747' : 'categoryHeadbgffffff']" @click="categoryClick3(index, 20,0)">综合排序</p>
            <li v-for="(item, index) in category3" :key="index" @click="categoryClick3(index, 20,1)" class="categoryContentThirdLi">
              <p class="fs14 clr868686 MicrosoftYaHeiUI textaligncenter" :class="[categoryActive3[index] ? 'categorybg' : 'categorybgTransparant']">
                {{ item }}
              </p>
            </li>
          </div>
        </div>
        <div class="searchResult">
          <router-link to='/play'><searchCom/></router-link>
          <router-link to='/play'><searchCom/></router-link>
          <router-link to='/play'><searchCom/></router-link>
          <router-link to='/play'><searchCom/></router-link>
          <router-link to='/play'><searchCom/></router-link>
          <router-link to='/play'><searchCom/></router-link>
          <router-link to='/play'><searchCom/></router-link>
          <router-link to='/play'><searchCom/></router-link>
        </div>
        <div class="navBottom">
          <div class="backwards" @click="backwardsClick">
            <img src="../iamges/搜索界面/搜索界面/左.png" alt="">
          </div>
          <div class="navBottomLeft">
            <li v-for="(item,index) in jumpSwitchArray1" :key="index" class="navBottomLi" :class="[navBottomBgcActive[index]?'navBottomBgc':'navBottomBgcTransparant']" @click="navBottomClick(index,10)">
              <p class="fs16 ffffff MicrosoftYaHeiUI">
                {{item}}
              </p>
            </li>
          </div>
          <div class="navBottomMid">
            <img src="../iamges/搜索界面/搜索界面/省略号.png" alt="">
          </div>
          <div class="navBottomRight">
            <li v-for="(item,index) in jumpSwitchArray2" :key="index" class="navBottomLi" :class="[navBottomBgcActive[index+7]?'navBottomBgc':'navBottomBgcTransparant']" @click="navBottomClick(index+7,10)">
              <p class="fs16 ffffff MicrosoftYaHeiUI navBottomRightP">
                {{item}}
              </p>
            </li>
          </div>
          <div class="forwards" @click="forwardsClick">
            <img src="../iamges/搜索界面/搜索界面/右.png" alt="">
          </div>
          <div class="jumpSwitch">
            <p class="fs14 ffffff MicrosoftYaHeiUI">
              跳转至
            </p>
            <input type="number" class="jumpSwitchTextBox">
            <p class="fs14 ffffff MicrosoftYaHeiUI">
              页
            </p>
          </div>
        </div>
      </div>
    </div>
    <foot />
  </div>
</template>

<script>
// import searchCom from '../components/searchCom'
// import navSignin from "../components/navSignin";
import navSignInReworkFanjubg from '../components/navSignInReworkFanjubg';
import foot from "../components/foot";
import searchCom from '../components/searchCom';
export default {
  name: "search",
  components: {
    // searchCom,
    // navSignin,
    navSignInReworkFanjubg  ,
    foot,
    searchCom
  },
  data: function () {
    return {
      searchNavArray: ["综合", "视频", "番剧", "影视", "直播", "专栏", "话题", "用户"],
      searchNavArrayNum: ["", "99+", "0", "5", "0", "99+", "99+", "99+"],
      bottomLineActive: [true, false, false, false, false, false, false, false],
      category1: ["最多点击", "最多发布", "最多弹幕", "最多收藏"],
      category2: ["10分钟以下", "10~30分钟", "30~60分钟", "60分钟以上"],
      category3: [
        "动画",
        "番剧",
        "国创",
        "音乐",
        "舞蹈",
        "游戏",
        "知识",
        "数码",
        "生活",
        "美食",
        "鬼畜",
        "时尚",
        "资讯",
        "娱乐",
        "影视",
        "纪录片",
        "电影",
        "电视剧",
        "其他",
      ],
      categoryActive1: [false, false, false, false, false],
      categoryActive2: [false, false, false, false, false],
      categoryActive3: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
      categoryContentHead1Active:true,
      categoryContentHead2Active:true,
      categoryContentHead3Active:true,
      categoryActive:true,
      threeDynamicImgsFirstActive:true,
      threeDynamicImgsSecondSwitch:true,
      jumpSwitchArray1:[1,2,3,4,5,6,7],
      jumpSwitchArray2:[48,49,50],
      navBottomBgcActive:[true,false,false,false,false,false,false,false,false,false],
      navBottomCur:0,
    };
  },
  methods: {
    bottomLineShowClick(n) {
      var i = 0;
      for (i = 0; i <= 7; i++) {
        this.$set(this.bottomLineActive, i, false);
      }
      this.$set(this.bottomLineActive, n, true);
    },
    categoryClick1(index, n,temp) {
      if(temp==0){
      var i = 0;
      for (i = 0; i <= n; i++) this.$set(this.categoryActive1, i, false);
      this.categoryContentHead1Active=true;     
      }
      else{
      for (i = 0; i <= n; i++) this.$set(this.categoryActive1, i, false);
      this.$set(this.categoryActive1, index, true);
      this.categoryContentHead1Active=false; 
      }
    },
    categoryClick2(index, n,temp) {
      if(temp==0){
      var i = 0;
      for (i = 0; i <= n; i++) this.$set(this.categoryActive2, i, false);
      this.categoryContentHead2Active=true;     
      }
      else{
      for (i = 0; i <= n; i++) this.$set(this.categoryActive2, i, false);
      this.$set(this.categoryActive2, index, true);
      this.categoryContentHead2Active=false; 
      }
    },
    categoryClick3(index, n,temp) {
      if(temp==0){
      var i = 0;
      for (i = 0; i <= n; i++) this.$set(this.categoryActive3, i, false);
      this.categoryContentHead3Active=true;     
      }
      else{
      for (i = 0; i <= n; i++) this.$set(this.categoryActive3, i, false);
      this.$set(this.categoryActive3, index, true);
      this.categoryContentHead3Active=false; 
      }
    },
    threeDynamicImgsFirstSwitch:function(){
      this.threeDynamicImgsFirstActive=!this.threeDynamicImgsFirstActive;
      this.categoryActive=!this.categoryActive
    },
    threeDynamicImgsSecondShowSwitch(n){
      if(n==1) this.threeDynamicImgsSecondSwitch=false;
      else this.threeDynamicImgsSecondSwitch=true;
    },
    navBottomClick(n,m){
      this.navBottomCur=n;
      var i = 0;
      for(i=0;i<=m-1;i++)
        this.$set(this.navBottomBgcActive, i, false);
      this.$set(this.navBottomBgcActive, n, true);
    },
    backwardsClick:function(){
      this.$set(this.navBottomBgcActive, this.navBottomCur, false);
      if (this.navBottomCur==0)
        this.navBottomCur=0;
      else
        this.navBottomCur--;
      this.$set(this.navBottomBgcActive, this.navBottomCur, true);
    },
    forwardsClick:function(){
      this.$set(this.navBottomBgcActive, this.navBottomCur, false);
      if (this.navBottomCur==10)
        this.navBottomCur=10;
      else
        this.navBottomCur++;
      this.$set(this.navBottomBgcActive, this.navBottomCur, true);
    }
  },
};
</script>

<style>
.navBottomBgc{
  background-color: #FFB100;
  border-radius: 50%;
}
.navBottomBgcTransparant{
  background-color: transparent;
  border-radius: 50%;
}
.threeDynamicImgsPb8b8b8{
  color: #b8b8b8;
}
.imgShowb8b8b8{
  width: 18px;
  height: 21px;
  margin-left: -18px;
  filter: drop-shadow(18px 0px 0rem #b8b8b8);
}
.imgShow2323ffb100{
  width: 23px;
  height: 23px;
  margin-left: -23px;
  filter: drop-shadow(23px 0px 0rem #ffb100);
}
.imgShow2323b8b8b8{
  width: 23px;
  height: 23px;
  margin-left: -23px;
  filter: drop-shadow(23px 0px 0rem #b8b8b8);
}
.categoryHeadbgffffff{
  color: #ffffff;
}
.categoryHeadbgColor474747{
  background-color: #ffb110;
  border-radius: 10px;
  color: #474747;
}
.categorybg {
  background-color: #ffb110;
  border-radius: 10px;
}
.categorybgTransparant{
  background-color: transparent;
  border-radius: 10px;
}
.searchContentNavSecond p{
  transition:  border-color 0.5s;
}
.btmLineShow {
  border-bottom: solid 3px #ffb100;
  /* background-color: crimson; */
}
.btmLineTran {
  border-bottom: solid 3px transparent;
  /* background-color: crimson; */
}
.search > div {
  margin: 0 auto;
}
.searchContentNav {
  display: flex;
  justify-content: center;
  padding-top: 81px;
  padding-bottom: 40px;
}
.searchLogo {
  display: flex;
  flex: 822;
  justify-content: flex-end;
  align-items: center;
}
.searchLogo div {
  margin-right: 17px;
}
.searchBoxDiv {
  position: relative;
  margin-left: 39px;
  flex: 1098;
}
.searchBoxDivBox input {
  width: 483px;
  height: 53px;
  background: #707070;
  box-shadow: 0px 1px 2px 0px rgba(208, 240, 249, 0.35);
  border-radius: 10px;
  padding-left: 10px;
  font-size: 18px;
  color: #ffffff;
}
.searchBoxDivImg {
  position: absolute;
  top: 15px;
  left: 433px;
}
.searchContentNavSecond {
  margin: 0px 200px;
  display: flex;
}
.searchContentNavSecond li {
  width: 12.5%;
  padding: 0px 27.625px;
  cursor: pointer;
}
.searchContentNavSecond p {
  padding-bottom: 5px;}
.btmLineShow {
  border-bottom: solid 3px #ffb100;
}
.threeDynamicImgs {
  display: flex;
  margin-left: 236px;
  margin-top: 23px;
  margin-bottom: 30px;
}
.threeDynamicImgsFirst {
  display: flex;
  margin-right: 27px;
}
.threeDynamicImgsFirst img {
  margin-right: 6px;
}
.lineBottom {
  height: 2px;
  margin: 0px 200px;
}
.threeDynamicImgsSecond{
  display: flex;
}
.threeDynamicImgsSecond img {
  margin-right: 6px;
}
.category {
  margin: 0px 231px;
}
.category > div {
  display: flex;
}
.categoryContent {
  margin-bottom: 16px;
}
.categoryContent li {
  cursor: pointer;
}
.categoryContent p {
  transition: background-color 0.5s;
  transition: color 0.5s;
  padding: 2px 15px 4px 14px;
}
.categoryContentHead{
  margin-right: 33px;
  cursor: pointer;
}
.categoryContentFirstLi{
  margin-left: 13px;
}
.categoryContentSecondLi{
  margin-right: 27px;
}
.categoryContentThirdLi{
  margin-right: 20px;
}
.categoryContentThirdLi p{
  padding: 2px 8.5px 4px 8.5px;
}
.searchResult{
  width: 1487px;
  display: flex;
  margin: 0 auto;
  flex-wrap: wrap;
}
.searchCom{  
  margin-left: 18px;
  cursor: pointer;
}
.threeDynamicImgsFirstDiv{
  width: 18px;
  height: 21px;
  overflow: hidden;
  margin-right: 6px;
}
.threeDynamicImgsFirstDiv{
  cursor: pointer;
}
.threeDynamicImgsSecondDiv{
  width: 23px;
  height: 23px;
  cursor: pointer;
  margin-right: 6px;
  overflow: hidden;
}
.threeDynamicImgsP{
  cursor: pointer;
}
.jumpSwitchTextBox{
  width: 37px;
  height: 19px;
  background: #707070;
  border-radius: 10px;
  outline: none;
  padding-left: 7px;
  color: #ffffff;
}
.navBottom{
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 912px;
  margin: 0 auto;
  margin-top: 29px;
}
.navBottomLeft,.navBottomRight{
  display: flex;
  justify-content: space-around;
}
.navBottomLeft{
  flex: 1.2;
}
.navBottomRight{
  flex: 0.5;
}
.jumpSwitch{
  display: flex;
  margin-left: 18px;
}
.navBottomLi{
  padding: 11px 14px 11px 16px;
  cursor: pointer;
  transition: all 0.5s;
}
</style>
