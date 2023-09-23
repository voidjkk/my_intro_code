<template>

<div  class="TitleScale" ref="TitleScale">
  <p v-if="!isPlayingAnimation" class="TypingText" >Welcome...</p>
  <div class="TypingLine"></div>
</div>




<div class="GuideArrow">
  <div  @click="GoToContent"  >
  <svg  width="80px" height="80px"  viewBox="-160 -160 800 800" 
      preserveAspectRatio="xMidYMid meet">

        <path xmlns="http://www.w3.org/2000/svg" 
          d="M245.015,490.015L490.03,234.132l-69.802-69.773L490.03,91.46L398.548,0.015L245.015,160.352L91.482,0.015L0,91.46  l69.802,72.899L0,234.132L245.015,490.015z M42.904,91.924l48.099-48.076l154.012,160.831L399.027,43.847l48.099,48.076  L245.015,303.009L42.904,91.924z M91.003,186.52l154.012,160.846L399.027,186.52l48.099,48.076L245.015,445.674L42.904,234.596  L91.003,186.52z"
        />

  </svg>
</div>
</div>


</template>
    
<script lang="ts">
  import { defineComponent ,ref  , computed} from "vue";
  import store from "../store";


  export default defineComponent({
      name: "HomeTitle",

    setup(){
      let isPlayingAnimation = computed(() => { 

        return store.state.ShowSwitchingAnimation});
      const TitleScale = ref<HTMLDivElement>(); //有TS在時用ref要這樣寫
      const GoToContent = () =>{
            window.scrollTo({
              top: TitleScale.value?.clientHeight ,
              behavior: "smooth",
            });  
          }


          return  {GoToContent , TitleScale , isPlayingAnimation }

    }
});
</script>


<style lang="scss">




.GuideArrow{
  @include decoration_position(absolute , null , 0px , 0px , 0px ) ;

    stroke: $EmphsizeColor;
    fill:$EmphsizeColor;
    cursor: pointer;
    stroke-width: 10px;
    filter: drop-shadow(0px 0px 15px $EmphsizeColor) ;
    height: 80px;
    width: 80px;
    margin: auto;
    z-index: 300;

     


  svg {

    animation: Flicking linear 3s infinite;

    &:hover{
      animation:none;
      fill: $EmphsizeColor; 
      stroke: rgb(255, 255, 255);
      stroke-width: 5px;
      filter: drop-shadow(0px 0px 20px rgb(223, 96, 240)) ;
    }
  }
}




.TitleScale{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}


.TypingText{
    //打字效果，要根字數調整width和steps
  width: 11ch;
  animation: TypingEffect 1.5s steps(11)  ;
 // animation-delay: 4s;
  overflow: hidden;
  white-space: nowrap;

    font-size: 70px;
    font-weight: bold;
    color: $EmphsizeColor  ;
letter-spacing: 3px;
}
.TypingLine{
   border-left  : 6px $EmphsizeColor solid;
   animation: TypingLineAnima 1s infinite;
   height: 40px;
}

@keyframes TypingLineAnima {
    0% {    opacity: 1 ;  }
  100% {    opacity: 0 ;  }
}

@keyframes TypingEffect {
 0% { width: 0 }
}

@keyframes Flicking {
     0% {    opacity: 0.1 ;  }
     2% {    opacity: 1 ;  }
     6% {    opacity: 0.1 ;  }
    10% {    opacity: 1 ;  }
    60% {    opacity: 0.5 ;  }
   100% {    opacity: 1 ;  }
}

</style>