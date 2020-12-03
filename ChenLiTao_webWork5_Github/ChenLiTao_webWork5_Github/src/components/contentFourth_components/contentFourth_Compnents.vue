<template>
<div class="contentFourth_Compnents">
    <h320px6a737d :msg="msg1"/>
    <p14px586069 :msg="msg2" :blue="msg3"/>
</div>
</template>

<script>
import h320px6a737d from "../TEXT/h320px6a737d"
import p14px586069 from '../TEXT/p14px586069'
export default {
    name:"contentFourth_Compnents",
    components:{
        h320px6a737d,
        p14px586069,
    },
    props:{
        msg1:String,
        msg2:String,
        msg3:String,
    }
}
</script>

<style>
    .contentFourth_Compnents{
        width: 486.68px;
        height: 140px;
        padding: 24px;
        margin-bottom: 2px;
        border: solid 1px transparent;
        transition: all 0.5s;
    }
    .contentFourth_Compnents:hover{
        border: solid 1px grey;
        box-shadow:0 0 10px #000;
    }
    
</style>