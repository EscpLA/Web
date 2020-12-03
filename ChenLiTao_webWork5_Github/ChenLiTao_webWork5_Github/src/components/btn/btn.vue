<template>
  <div class="Btn" >
      <button value="sign in" :style="fatherStyle">
          {{msg}}
      </button>
  </div>
</template>

<script>
export default {
    name:'Btn',
    props:{
        msg:String,
        fatherStyle:Object,
    }
}
</script>

<style>

</style>