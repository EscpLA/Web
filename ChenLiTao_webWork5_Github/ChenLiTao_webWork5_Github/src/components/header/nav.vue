<template>
  <div class="nav">
      <div class="container">
            <div class="navLeft">
                <div class="logo">
                    <svg height="32" class="octicon octicon-mark-github text-white" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true">
                        <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                    </svg>
                </div>
                <ul class="navUl">
                    <a href="">
                        <li v-for="(item,index) in navArr" :key="index" class="navL">
                            {{item}}
                        </li>
                    </a>
                </ul>
            </div>
            <div class="navRight">
                <div class="search">
                    <input type="text" placeholder="Search Github" class="search_input">
                </div>
                <div class="sign">
                    <a href="" class="sI">sign in</a>
                    <a href="" class="sU">sign up</a>
                </div>
            </div>
      </div>
  </div>
</template>

<script>
export default {

    name:'nav',
    data:function(){
        return{
            navArr:["Why Github? >","Team","Enterprise","Explore >","Marketplace","Pricing >"],
        }
    }
}
</script>

<style>
    .container{
        display: flex;
    }
    .navLeft{
        width: 100%;
        display: flex;
        justify-content: center;
    }
    .navRight{
        width: 100%;
        display: flex;
        padding-top: 20px;
    }
    .search{
        margin-left: 200px;
        background-color: none;
    }
    .sign{
        display: flex;
    }
    .sI{
        margin-left: 10px;
        margin-right: 10px;
        margin-top: 10px;
        color: #ffffff;
        font-weight: 400;
    }
    .sU{
        margin-left: 10px;
        margin-right: 10px;
        border: solid #ffffff 1px;
        /* border: 1px solid pink; */
        padding: 4px 8px 4px 8px; 
        border-radius:6px;
        margin-top: 4px;
        margin-bottom: 12px;
        color: #ffffff;
        font-weight: 400;
    }
    .search_input{
        width: 213px;
        height: 36px;
        background-color: black;
        border: none;
    }
    .logo{
        padding-top: 30px;
        margin-left: 50px;
    }
    .navUl{
        display: flex;
        justify-content: space-around;
        padding-top: 35px;
    }
    .navL{
        color:#ffffff;
        list-style-type: none;
        display: inline;
        margin-left: 15px;
        
    }
</style>