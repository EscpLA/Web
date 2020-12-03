<template>
    <div class="Footer">
        <footerTop />
        <footerBottom />
    </div>
</template>

<script>
import footerTop from './footerComponents/footerTop'
import footerBottom from './footerComponents/footerBottom'
export default {
    name:"Footer",
    components:{
        footerTop,
        footerBottom,
    }
}
</script>

<style>

</style>