<template>

<div  class="AnimaScale">
  <div 
  :style="ClockWipeEffect"
  class="PageSwitchAnimation "
  ></div>
</div>

</template>
  
<script lang="ts">
  import { defineComponent , ref , onBeforeUnmount, onMounted, computed  } from "vue";
  import "animate.css";
  export default defineComponent({
    name: "PageSwitchAnimation",

    setup( ){

// animate__animated  animate__slideOutLeft
//animate__animated  animate__slideOutRight
  
      var ClockAngle = ref(0);
      const ClockWipeRate = ()=>{
        let timer:any;

        timer = setInterval( ()=>{
          if(ClockAngle.value < 360 ){
            ClockAngle.value+= 10
          }
        }, 25 )

      }
      const ClockWipeEffect = computed(  ()=>{

          return  `background:
      conic-gradient(  
      transparent 0deg, rgb(5,217,232) ${ClockAngle.value}deg ,
      rgb(1,1,43) calc( ${ClockAngle.value}deg + 10deg),
      rgb(1,1,43) 360deg  );`
        } )

      onMounted( ()=>{
      document.body.style.overflowY = "hidden";
      ClockWipeRate()
      }),

      onBeforeUnmount(()=>{
        document.body.style.overflowY = "auto";
      })
      return{
        ClockWipeEffect  , ClockWipeRate
      }
    }
  



  });
</script>
  

<style scoped lang="scss">

.AnimaScale{

  position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;

    z-index: 900;
    width: 100vw;
}

.PageSwitchAnimation{
  

  z-index: 900;
@include decoration_position(absolute , 0px, 0px, 0px, 0px);
  

}




/*
.animate__animated.animate__slideOutLeft,
.animate__animated.animate__slideOutRight {
  --animate-duration: 2s;
  --animation-timing-fuction: linear ; 
}
*/

</style>