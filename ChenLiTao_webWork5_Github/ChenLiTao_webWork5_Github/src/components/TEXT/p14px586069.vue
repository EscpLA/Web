<template>
  <div class="p14px586069">
      <p>
          {{msg}}
        <span class="blue">
            {{blue}}
        </span>
      </p>
  </div>
</template>

<script>
export default {
    name:'p14px586069',
    props:{
        msg:String,
        blue:String,
    }
}
</script>

<style>
    .p14px586069{
        font-size: 14px;
        color: #586069;
        line-height: 1.5;
        margin-bottom: 10px;
        text-align: center;
    }
    .blue{
        font-size: 14px;
        color: #0366D6;
        text-decoration: underline;

    }
</style>