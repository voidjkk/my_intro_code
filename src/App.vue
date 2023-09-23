<script lang="ts">

  import PageLoaderAnimation from "./components/PageLoaderAnimation.vue";
  import PageSwitchAnimation from "./components/PageSwitchAnimation.vue";
  import NavBar from "./components/NavBar.vue";
  import SimpleFooter from "./components/SimpleFooter.vue";

  import { useStore } from 'vuex'
  import {  computed, onMounted, ref , watchEffect , } from "vue";




export default ({
  name: "App",
  components: {
    
    PageLoaderAnimation,PageSwitchAnimation,NavBar,SimpleFooter
  },
  setup() {
    const store = useStore();
   // store.commit("PlayingAnimation") 
    var PlayOpeningAnima = computed(() => { return store.state.ShowSwitchingAnimation});

   // const  aaaa = ref<HTMLDivElement>()  //ts不能直接ref(null)
    const isShowAnimation = ref(true);
    return {
      isShowAnimation  , PlayOpeningAnima ,
       
    }
  }

})
</script>

<template>

    <PageSwitchAnimation v-if="PlayOpeningAnima"></PageSwitchAnimation>

    <NavBar  ></NavBar>
    <router-view ></router-view>

    <transition name="Loading_FadeOut">
       <PageLoaderAnimation v-if="isShowAnimation" @AnimationIsOver="isShowAnimation = false"></PageLoaderAnimation>
    </transition>
    <SimpleFooter></SimpleFooter>

</template>

<style lang="scss">
//引入google fonts字體
@import url('https://fonts.googleapis.com/css2?family=Handjet:wght@600&display=swap');


@mixin FadeAnimation($time ){
  animation: FadeOut ease-out $time * 1s ;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
}

#app {
  font-family:"Handjet", cursive, Avenir,
               Helvetica, Arial, sans-serif ,
               "Microsoft JhengHei" , ;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  letter-spacing: 1px;
}

//改變反白文字後的顏色
::selection  {
  background: rgb(162, 85, 235) ;
	color: rgb(43, 2, 82) ;
  text-shadow: none;
}
::-moz-selection{
  background: rgb(162, 85, 235) ;
	color: rgb(43, 2, 82) ;
	text-shadow: none;
}

body{
  margin: 0;
  z-index: -1;
  background-image: url("@/assets/bg_pic2.jpg") ;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  overflow: hidden;
  overflow-y: auto;
      &::-webkit-scrollbar-thumb{   
        background-color: $MainColorBG ;
        background-clip: content-box; 
        border: 1.5px solid $MainColor;
      }
      &::-webkit-scrollbar{  
      width: 10px;
      }
      &::-webkit-scrollbar-track{
        background-color:  $MainColorBG ;
      }


}

 //router-link 渲染之後是a tag
  a { 
      box-sizing: border-box;
      position: relative;
      color: $EmphsizeColor;
      display: block;
      text-decoration: none;
      font-size: 16px;
    &.router-link-exact-active {
        
        font-size: 18px;
        filter: drop-shadow(0px 0px 8px $ViceColor);
    }


  }

 //  裝飾上半邊框角落，參照點: a標籤
 .CornerDeco1{
  @include decoration_position( absolute , -3px , -3px , 0px , -3px );
  box-sizing: border-box;
  pointer-events: none;
  
  &::before{
    content: "";
    @include BorderCorner(
      0px,0px,null,null,
      25px,
      2px $ViceColor solid ,2px $ViceColor solid ,null,null
    );
  }
  &::after{
    content: "";
    @include BorderCorner(
      0px,null,null,0px,
      25px,
      2px $ViceColor solid ,null,null,2px $ViceColor solid 
    );
  }
}

  //  裝飾下半邊框角落
.CornerDeco2{
  @include decoration_position( absolute , 0px , -3px , -3px , -3px );
  box-sizing: border-box;
  pointer-events: none;


  &::before{
    content: "";
    @include BorderCorner(
      null,null,0px,0px,
      25px,
      null,null,2px $ViceColor solid ,2px $ViceColor solid 
    );
  }
  &::after{
    content: "";
    @include BorderCorner(
      null,0px,0px,null,
      25px,
      null ,2px $ViceColor solid ,2px $ViceColor solid , null
    );
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.Loading_FadeOut-enter-active,
.Loading_FadeOut-leave-active {
  @include FadeAnimation(1);
}



@keyframes FadeOut{
    0% {    opacity: 1;  }
  100% {    opacity: 0;  }
}
 //       animation: FontFlashing ease 3s infinite;
@keyframes FontFlashing{
 0% , 100% {  text-shadow: 0px 0px 0px rgba(255, 0, 0, 0);  }
       50% {  text-shadow: 0px 0px 3px rgba(255, 0, 0, 0.9); }
}

//主標40px  h2 36px h3 30px 內文抓22px (字體特殊，比平時大6px)
</style>