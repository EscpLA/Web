<template>
  <div class="contentFifth">
      <h320px24292e msg="See how the world's leading companies use GitHub Enterprise." class="h320px586069"/>
      <combinitionComponent1 />
      <combinitionComponent2 />
      <combinitionComponent3 />
      <combinitionComponent4 />
  </div>
</template>

<script>
import h320px24292e from './TEXT/h320px24292e'
import combinitionComponent1 from './combinitionComponent.vue/combinitionComponent1'
import combinitionComponent2 from './combinitionComponent.vue/combinitionComponent2'
import combinitionComponent3 from './combinitionComponent.vue/combinitionComponent3'
import combinitionComponent4 from './combinitionComponent.vue/combinitionComponent4'
export default {
    name:'contentFifth',
    components:{
        h320px24292e,
        combinitionComponent1,
        combinitionComponent2,
        combinitionComponent3,
        combinitionComponent4,
    },
    data:function(){
        return{
            cb1:[
                {
                    h:"MGM Resorts International",
                    p:"Hospitality",
                },
                {},
            ]
        }
    }
}
</script>

<style>
    .contentFifth{
        width: 1280px;
        margin: 0px auto;
        padding: 0px 16px;
        display: flex;
        flex-wrap: wrap;
    }
    .h320px586069{
        color: #586069;
        margin: 40px 320px 0px ;
        margin-bottom: 20px;
    }
</style>