<template>
  <div class="headerSign">
    <div class="SignContentLeft">
      <h1 class="headerH">
        Build for<br/>developers
      </h1>
      <p class="headerP">
         GitHub is a development platform inspired by the<br/> way you work. From 
        <a href="" class="textWhite">open source</a>
        to
        <a href="" class="textWhite">business</a>
        , you<br/> can host and review code, manage projects, and <br/>build software alongside 50 million developers.
      </p>
    </div>
    <div class="SignContentRight">
      <form action="" class="signForm">
        <div class="formText">
          Username
        </div>
        <input type="text"><br/>
        <div class="formText">
          Email
        </div>
        <input type="text"><br/>
        <div class="formText">
          Password
        </div>
        <input type="password"><br/>
        <div class="tips1">
          <span class="tips1Text">Make sure it's</span>
          <span class="tipsGreen">
            at least 15 characters
          </span>
          <span class="tipsText">OR t leas8 characters including a <br/>number and a lowercase letter.</span>
          <span class="tipsBlue">Learn more</span>
        </div>
        <a href="">sdafasd</a>
        <a href="">
                  <button class="signBtn">
          Sign Up For Github
        </button>
        </a>
        <div class="tips2">
          By clicking "Sign up for GitHub", you agree toour 
          <span class="tipsBlue">
            Terms of Service
          </span>
           and 
           <span class="tipsBlue">
             Privacy Statement
           </span>
           .We'll occasionally send you account relatedemails.
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import bgc from '../../../images/simple-codelines.svg'
export default {
    name:'headerSign',
    data:function(){
      return{
        bgcurl:bgc,
      }
    }
}
</script>

<style>
  input{
    padding-left: 10px;
  }
  .headerSign{
    position: relative;
  }
  .headerH{
    font-family: Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
    font-weight: 500;
    font-size: 64px;
    color: white;
    margin-bottom: 0px;
  }
  .headerP{
    font-size: 20px;
    font-weight: 400;
        font-family: Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
    color: #FFFFFF99;

  }
  .textWhite{
    color: #FFFFFF;
    text-decoration: underline;
  }
  .SignContentLeft{
    margin-left: 250px;
    margin-top: 80px;
    width: 553.23px;
    height: 286.4px;
  }
  .signForm{
    background-color: white;
    width: 426.78px;
    height: 495.8px;
    position: absolute;
    left:850px;
    bottom:-150px;
    border-radius: 5px;
    /* margin-left: 900px;
    margin-bottom: 1000px; */
  }
  .signForm{
    padding-left: 20px;
  }
  .formText{
    margin-top: 20px;
    margin-bottom: 10px;
  }
  .signForm input{
    width: 378.78px;
    height: 46px;
    font-size: 18px;
  }
  .tips1{
    margin-top: 10px;
    font-size: 12px;
    color: #24292e;
  }
      .tips2{
    margin-top: 10px;
    font-size: 12px;
    color: #6A737D;
  }
  .tipsGreen{
    color: #22863A;
  }
  .tipsBlue{
    color: #0366D6;
  }
  .signBtn{

    width: 378.78px;
    height: 66px;
    background-color: #2ebc4f;
    color: #FFFFFF;
    
    font-weight: 700;
    font-size: 16px;
    border: none;
    margin-top: 10px;
    margin-bottom: 10px;
  }

</style>