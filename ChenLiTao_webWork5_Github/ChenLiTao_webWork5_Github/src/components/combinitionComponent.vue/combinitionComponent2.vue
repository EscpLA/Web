<template>
  <div class="combinitionComponent">
      <div class="combinitionComponentImgDiv">
          <img src="../../../images\See-2.jpg" alt="" class="combinitionComponentImg">
      </div>
      <div class="combinitionComponentH">
        <h116px24292e msg="Nationwide" class="combinitionComponenth116px24292e"/>
      </div>
      <div class="combinitionComponentP">
          <p>
              <p14px586069 msg="Insurance" class="combinitionComponentp14px586069"/>
          </p>
      </div>
      <div class="spanDoubleBtm">
          <span class="spanLeft">
              Read More
          </span>
          <span class="spanRight">
              ->
          </span>
      </div>
  </div>
</template>

<script>
import h116px24292e from '../TEXT/h116px24292e'
import p14px586069 from '../TEXT/p14px586069'
export default {
    name:'combinitionComponent2',
    components:{
        h116px24292e,
        p14px586069,
    },
    props:{
        msg1:String,
        msg2:String,
    }
}
</script>

<style>
.combinitionComponentImg{
    width: 248px;
    height: 200px;
}
.combinitionComponentImgDiv{
    margin: 0px auto;
    display: flex;
    justify-content: center ;
}
    .combinitionComponent{
        padding: 16px 16px 0px;
        /* border: solid 1px #3f3f3f; */
        width: 288px;
        height: 412px;
        box-shadow:0 0 5px grey;
    }
    .combinitionComponentp14px586069{
        text-align: left;
        margin-bottom: 20px;
        margin-left: 30px;
    }
    .spanDoubleBtm{
        margin: 5px 15px;
        padding: 10px 0px;
        color: #1074e7;
        border-top: solid 1px grey;
        display: flex;
        justify-content: space-between;
    }
        .combinitionComponenth116px24292e{
        margin-left: 30px;
    }
</style>