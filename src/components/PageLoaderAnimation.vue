<template>
  <div class="LoadingBG" >
    <div class="LoadingScale" >
      <div class="LoadingAnimation" >
          <div class="cube-1" style=" top: 0; left:0 ; "></div>
          <div class="Shadow-1" style=" top: 20px; left:0 ; "></div>

          <div class="cube-2" style=" top: 25px; left: 0 ;   "></div>
          <div class="Shadow-2" style=" top: 45px; left:0 ; "></div>

          <div class="cube-3" style=" top: 50px; left: 0 ;   "></div>
          <div class="Shadow-3" style=" top: 70px; left:0 ; "></div>

          <div class="cube-4" style=" top: 75px; left: 0 ;   "></div>
          <div class="Shadow-4" style=" top: 95px; left:0 ; "></div>

          <div class="cube-5" style=" top: 75px ; left: 25px;   "></div>
          <div class="Shadow-5" style=" top: 95px; left:25px ; "></div>

          <div class="cube-6" style=" top: 75px ; left: 50px;   "></div>
          <div class="Shadow-6" style=" top: 95px; left:50px ; "></div>

          <p>Loading ...    {{Percent}}%</p>
      </div>


    </div>
  </div>

</template>
  
<script lang="ts">
  import { defineComponent , ref , onMounted ,onBeforeUnmount , watchEffect, computed  } from "vue";
  
  export default defineComponent({
    name: "PageLoaderAnimation",
 //   props: {
 //     msg: String,
 //   },
    setup(props , context ){
      var Percent = ref(0)
      var ProgressSpeed = 30

      const Animation_is_Over = function(){
        return  context.emit("AnimationIsOver" , false)
      }
      

      onMounted(()=>{
        document.body.style.overflowY = "hidden";
      }),
      onBeforeUnmount(()=>{
        document.body.style.overflowY = "auto";
      }),

      watchEffect ( ()=> {
        if(Percent.value <= 100){
          setTimeout(()=>{
            Percent.value += 1
          } , ProgressSpeed )
        }
        else {

          Animation_is_Over()
          
        }

        return

      })

      return{
        Percent,  
      }
    }
  



  });
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

$cube-color: rgb(209,247,255) , rgb(136, 215, 235) , rgb(42, 140, 185) ,
rgb(0,120,170) , rgb(158, 110, 212) , rgb(182, 24, 245) ;

@mixin TotalCenter(){
    display: flex;
    justify-content: center;  
    align-items: center;
}

.LoadingBG{
    @include TotalCenter();
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: $MainColorBG ;
    z-index: 999;
   
    overflow: hidden;

}
.LoadingScale{

width: 200px;
height: 200px;

}
.LoadingAnimation{
    position: relative;
    top: 23%;
    left: 28%;

    p{
    font-size: 40px;
    white-space: nowrap;
    position:absolute;
    left: -75px;
    top: 130px;
    color: nth($cube-color , 1);
    }

}



@for $i from 1 through length($cube-color) {
  .cube-#{$i} {
    position: absolute ;
    width: 20px;
    height: 20px;
    margin-bottom: 5px;
    margin-right: 5px;
    background-color: nth($cube-color , $i) ;
    animation: JumpingCubeAnimation linear 2s infinite;
    animation-delay: $i * 0.1s;
  }
}

@for $i from 1 through length($cube-color) {
  .Shadow-#{$i} {
    position: absolute;
    transform: translate(-50%, -50%);
    height: 2px;
    width: 20px;
    background-color: rgba(247, 219, 219, 0.2);
    animation: CubeShadow linear 2s infinite;
    animation-delay: $i * 0.1s;
  }
}

@keyframes JumpingCubeAnimation{
  0%  {    transform: translateY(0) scale(1, 1);  }
  8%  {    transform: scale(1.2, 0.8);    }
  15% {    transform: translateY(-30px)  scale(0.8, 1.2);   }
  
  20%{   transform: translateY(-60px) rotate(0deg) scale(1,1) ;}
  50%{   transform: translateY(-80px) rotate(180deg) ;  }
  80%{   transform: translateY(-60px) rotate(360deg);  }
  90%{   transform: translateY(-20px)  rotate(360deg);  }
 100%{   transform: translateY(0px)    rotate(360deg) ;    }  
  
}
@keyframes CubeShadow{
  0%   { transform: translateY(0px)  scale(1 , 1);  }
  30%  { transform: translateY(-2px) scale(0.8 ,0.8 );  }
  80%  { transform: translateY(-2px) scale(0.8 ,0.8 );  }
  100% { transform: translateY(0px)  scale(1 , 1);  }

}




</style>