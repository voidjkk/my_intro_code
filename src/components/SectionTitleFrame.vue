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
  
    filter: drop-shadow(0px 4px 7px $ViceColorDark )  ;
}

.TextFrameCenter{

    //中間長條寬度 目前是5%、90%
    clip-path: polygon(25% 5%, 75% 5%, 100% 50%, 75% 90%, 25% 90%, 0% 50%);
    background-color: $MainColorBG ;
   
    box-sizing: border-box;
    .TitleStyle{
        font-size: 36px;
        
        color:$EmphsizeColor;
        white-space:nowrap;
    }
}

.Frame_L{
    @include decoration_position(absolute ,0px,null,null,0px );
    width: 100%;
    height: 100%;
    clip-path: polygon(33% 0, 8% 50%, 33% 100%, 25% 100%, 0% 50%, 25% 0);
    background-color: $ViceColor ;
 
}

.Frame_R{
    @include decoration_position(absolute ,0px,0px, null,null );
    width: 100%;
    height: 100%;
 // 邊長寬8
   -webkit-clip-path: polygon(70% 0, 70% 50%, 20% 100%, 0 100%, 50% 50%, 50% 0);
   clip-path:         polygon(75% 0, 100% 50%, 75% 100%, 67% 100%, 92% 50%, 67% 0);
   background-color: $ViceColor ;
 
}

</style>