<template>

<div class="TextFrameContainer">

    <div class="TextFrameCenter">
      <span  class="TitleStyle">{{title_name_ref}}</span>
    </div>
    <div class="Frame_R"></div>
    <div class="Frame_L"></div>

</div>

    
    
</template>
        
<script lang="ts">
    import { defineComponent , toRef } from "vue";
 
    export default defineComponent({
          name: "SectionTitleFrame",
          props: { "title_name" : 
                    { type : String }
          },
          setup (props ) {
          const title_name_ref = toRef(props , "title_name" )
          return{
            title_name_ref
          }
          },

    
    });
</script>







<style lang="scss">

.TextFrameContainer{
 
    @include decoration_position(absolute ,-35px,null,null,40px ); 
    min-width: 180px;
    width: 220px;
    height: 80px;
    line-height: 80px;
    filter: drop-shadow(0px 4px 7px $ViceColorDark ) ;

    @include RWD_phone(768px){

      @include decoration_position(absolute ,-90px,0px,null, -20px );
      width: calc(100% + 40px );
      height: 80px;
      line-height: 80px;
      z-index: -1;
  }
}

.TextFrameCenter{

    //中間長條寬度 目前是5%、90%
    clip-path: polygon(25% 5%, 75% 5%, 100% 50%, 75% 90%, 25% 90%, 0% 50%);
    background-color: $MainColorBG ;
    box-sizing: border-box;
    height: 80px;
    line-height: 80px;
    @include RWD_phone(768px){
      clip-path: polygon(10% 20%, 90% 20%, 100% 50%, 90% 80%, 10% 80%, 0% 50%);
     
    }

    .TitleStyle{
        font-size: 36px;
        @include RWD_phone(768px){
            font-size: 32px;
            line-height: 80px;
        }
        color:$EmphsizeColor;
        white-space:nowrap;
    }
}

.Frame_L{
    @include decoration_position(absolute ,0px,null,null,0px );
    width: 100%;
    height: 100%;
    //寬度8%、右上角為起點順時針走
    clip-path: polygon(33% 0, 8% 50%, 33% 100%, 25% 100%, 0% 50%, 25% 0);
    background-color: $ViceColor ;
    @include RWD_phone(768px){ //寬度6% 10的+-3，照內部圖形座標調整
      clip-path: polygon(12% 15%, 4% 50%, 12% 90%, 8% 90%, 0% 50%, 8% 15%);
     
    }
}

.Frame_R{
    @include decoration_position(absolute ,0px,0px, null,null );
    width: 100%;
    height: 100%;
 // 邊長寬8、右上角為起點順時針走
   
   clip-path: polygon(75% 0, 100% 50%, 75% 100%, 67% 100%, 92% 50%, 67% 0);
   background-color: $ViceColor ;
   @include RWD_phone(768px){//寬度6% 90的+-3，照內部圖形座標調整
      clip-path: polygon(92% 15%, 100% 50%, 92% 90%, 88% 90%, 96% 50%, 88% 15%);
     
    }
}

</style>