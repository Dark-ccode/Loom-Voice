<template>

<div class="footer ">
Powered by Echelon Tech LLC
</div>

</template>


<script>
import AOS from 'aos'
import 'aos/dist/aos.css'
export default {
name: 'Footer',
components: {
//Footer,
},
mounted() {AOS.init()}


}
</script>

<style>
.footer{padding: 0px;padding-bottom: 0px;color: white;width: 30%;margin-left: 35%;margin-top: 20px;
margin-bottom: -50px;margin-top: 0px;text-align: center;font-size: 12px;border-radius: 20px;font-weight:bolder;}

@media screen and (max-width:480px){

.footer{padding: 0px;padding-bottom: 0px;width: 80%;margin-left: 10%;
margin-bottom: 20px;margin-top: 0px;text-align: center;font-size: 12px;}

}
</style>
