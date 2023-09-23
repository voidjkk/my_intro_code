<template>
    <nav   :class="{ FlickingInAnima  :isShowNavBar ,
                     FlickingOutAnima  :!isShowNavBar , }"
                  
    >
       <div class="NavScale">
         <router-link v-for="route in NavBtnData" :key="route.path" :to="route.path">
           <div class="CornerDeco1_Btn"></div>
           <div class="CornerDeco2_Btn"></div>
           <div class="InnerButton">
             <span class="material-symbols-outlined">{{ route.Icon }}</span>
             <p>{{route.name}}</p>
           </div>

         </router-link>

        </div>

         <a  @click="BGM_Toggle" >
           <div class="InnerButton MusicPlayer">
             <div class="CornerDeco1_Btn"></div>
             <div class="CornerDeco2_Btn"></div>
             <div class="material-symbols-outlined"
                 :class="{ Hiding: !isPlayBGM , }"
             >volume_up</div>
             <div class="material-symbols-outlined"
                 :class="{ Hiding: isPlayBGM , }"
             >pause</div>
           </div>
         </a>

    
    </nav>

    
</template>
      
<script lang="ts">

  import { defineComponent , ref , computed,
    onMounted,onBeforeUnmount  } from "vue";
  import router from "../router";
  //PP 2:直接將路徑寫在Audio物件會抓不到，要透過import
  //PP 3:呈PP 2似乎要加上custom.d.ts設定引入 module '*.mp3'才能正常運作
  import  BGM_Music  from "@/assets/web_bgm.mp3" ;

  export default defineComponent({
    name: "NavBar",

     setup( ){
      const RouterData = router.options.routes
      const NavBtnData = computed( ()=>{
        return RouterData.map( ( x , index )=>
          { //原本about的圖示 badge
            let IconsArray = ["home", "contact_phone"]
            return {
                ...x ,
                Icon: IconsArray[index]
            }
        })
        
      })
    const isPlayBGM = ref(false)
    const MusicPlayer = new Audio(BGM_Music);
    const BGM_Toggle = () => { 
      isPlayBGM.value = ! isPlayBGM.value
      MusicPlayer.volume = 0.15
      if( isPlayBGM.value ){
        MusicPlayer.play() 
        MusicPlayer.loop = true
      }
      else{
        MusicPlayer.pause()
      }
    }




    var lastY = 0
    const isShowNavBar = ref(true)
    const isHideNavBar = function(){

        if (lastY < window.scrollY ){ 
            isShowNavBar.value = false
            console.log("往下")
        }
        else{
            isShowNavBar.value = true
            console.log("往上")
        }
        lastY = window.scrollY 
    }

    
      onMounted(() => {
      window.addEventListener('scroll', isHideNavBar);
      
    });

    onBeforeUnmount(() => {
      window.removeEventListener('scroll', isHideNavBar);
    });



       return{
        MusicPlayer , BGM_Toggle , isPlayBGM, NavBtnData ,isShowNavBar
       }
     }

  });


</script>
      
    
<style  lang="scss">

a{
  margin-right: 16px;
  margin-bottom: 4px;
}





.InnerButton{
  @include decoration_position( static , 0px , 0px , 0px , 0px );
  z-index:200 ;
  box-sizing: border-box;
  border: 1px $MainColor solid;
  display: flex;
  align-items: center;
  padding: 12px;


  background-color: $MainColorBG;

  &:hover{
      background-color: rgba(147, 201, 251,0.25);
  }
  &:active{
    background-color: rgb(66, 69, 77);
  }

  .material-symbols-outlined {
  font-variation-settings:
    'FILL' 0,
    'wght' 300,
    'GRAD' 0,
    'opsz' 20
  }

   p{
    display: inline-block;
    padding-top:4px ;
    font-size: 22px;
    margin-left: 4px;
  }

}

.MusicPlayer{

position: static  ;
justify-content: center;
cursor: pointer;
color: $EmphsizeColor ;

  .material-symbols-outlined {
    font-variation-settings:
      'FILL' 0,
      'wght' 400,
      'GRAD' 0,
      'opsz' 28
  }
}

.Hiding{
display: none;
}


 //  裝飾上半邊框角落，參照點: a標籤
.CornerDeco1_Btn{
  @include decoration_position( absolute , -3px , -3px , 0px , -3px );
  box-sizing: border-box;
  pointer-events: none;
  
  &::before{
    content: "";
    @include BorderCorner(
      0px,0px,null,null,
      10px,
      2px $ViceColor solid ,2px $ViceColor solid ,null,null
    );
  }
  &::after{
    content: "";
    @include BorderCorner(
      0px,null,null,0px,
      10px,
      2px $ViceColor solid ,null,null,2px $ViceColor solid 
    );
  }
}

  //  裝飾下半邊框角落
.CornerDeco2_Btn{
  @include decoration_position( absolute , 0px , -3px , -3px , -3px );
  box-sizing: border-box;
  pointer-events: none;


  &::before{
    content: "";
    @include BorderCorner(
      null,null,0px,0px,
      10px,
      null,null,2px $ViceColor solid ,2px $ViceColor solid 
    );
  }
  &::after{
    content: "";
    @include BorderCorner(
      null,0px,0px,null,
      10px,
      null ,2px $ViceColor solid ,2px $ViceColor solid , null
    );
  }
}




.NavScale{
  display: flex;
  justify-content: center;
  align-items: center;
//  padding-bottom: 5px; //調整因nav視覺效果的偏差
}

nav{

  @include decoration_position(fixed,0px ,8px ,0px ,0px );
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: $MainColorBG;
  opacity: 1;
  padding-left: 10px;
  padding-right: 10px;
  border-right: 2px $MainColor solid;
  border-bottom: 2px $MainColor solid;
  z-index: 600;
  animation: FlickingOut linear 2s;
  
   &::after{
    content: "";
    position: absolute;
    height: 100%;
    top: -7px;
    left: -5px;
    right: 4px;
    bottom: 0px;
    border: 2px $MainColor solid;
    background-color: $MainColorBG;
    z-index: -1;
    opacity: 0.8;
   }


}

.FlickingInAnima{
    animation: FlickingIn ease 1s ;
    animation-fill-mode: forwards;
}
.FlickingOutAnima{
    animation: FlickingOut ease 1s ;
    animation-fill-mode: forwards;
}


@keyframes FlickingIn{
  0% { opacity: 0;    transform:  translateY(-10vh); }

100% { opacity: 1;  transform:  translateY(0); }
}


@keyframes FlickingOut{
  0% { opacity: 0.85 ;}
100% { transform:  translateY(-10vh);
       opacity: 0; }
}




</style>