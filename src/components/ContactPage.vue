<template>

    <div class="ContactPageScale" >


      <div class="ContactContent">
        <div v-if="isCopied" class=  "MessageAlert" >
          <p>Content copied to clipboard !</p>
          <div class="CornerDeco1"></div>
          <div class="CornerDeco2"></div>
        </div>
        <SectionTitleFrame title_name="Contact"  ></SectionTitleFrame>
        <div class="CornerDeco1"></div>
        <div class="CornerDeco2"></div>
        <p>Tap to get contact Information.</p>
        <div class="ContactIcons">
            <i class="fas fa-envelope"  
               @click="ShowIconInfo('jack91423@gmail.com')"
            ></i>
            <i class="fab fa-github" 
               @click="ShowIconInfo('https://github.com/voidjkk/my_intro_code')"
            ></i>
        </div>
        <div class="ShowInfoArea">
            <div class="CornerDeco1"></div>
            <div class="CornerDeco2"></div>
            <div 
              :class= "{ ReflashLine : isReflash  }"
            ></div>

            <span class="UpperStr"  @click="SwitchToWeb"
           :class= "{ ReflashContent : isReflash  }"
            >{{ UpperStr }}
        </span>

           <span class="LowerStr">{{ LowerStr }}</span>
        </div>
      </div>

    </div>
  </template>
  
  
  <script lang="ts">
  import { defineComponent,ref } from "vue";
  import  SectionTitleFrame  from "../components/SectionTitleFrame.vue";

  export default defineComponent({
    name: "ContactPage",
    components: {
        SectionTitleFrame
    },
    setup() {
        var UpperStr = ref("")
        var LowerStr = ref("")
        var isReflash = ref(false)
        const ShowIconInfo = (ShowInfo:any)=>{
            if(isReflash.value === true)
              return

            isReflash.value =  true;
            LowerStr.value = UpperStr.value
            UpperStr.value =  ShowInfo;
           
           setTimeout(() => {
            isReflash.value =  false;
           }, 1300); //若要調時間ReflashContent、ReflashLine動畫時間也要調
           
        }


        var isCopied = ref(false)
        const SwitchToWeb = () =>{
          let CheckMail = /@*mail/;
          if( CheckMail.test(UpperStr.value)  ){
            //複製文字到剪貼版
            navigator.clipboard.writeText( UpperStr.value )
            .then(() => {
              throttle_click()
              console.log('Content copied to clipboard');
            })
            .catch (() => {
              console.error('Failed to copy');
            });
          }
         else{
          window.open( UpperStr.value , "_blank");
         }
        }

        const open_alert = ()=>{
          isCopied.value = true
        } 
        //限定x秒只會內執行一次
        const throttle = function( func:any ,delay:any ){
          let time_count:any
          let isbusy:boolean

          return (...para:any) => {
            if( !isbusy ){
              isbusy = true
              func(para)  
              clearTimeout(time_count)
              console.log("做了一次")
              time_count = setTimeout(()=>{
  
                isbusy = false
                isCopied.value = false
                console.log("在一次")
              }, delay)
            }
          }
  
        }
        const throttle_click = throttle(open_alert , 2000)

        return {    UpperStr , LowerStr , ShowIconInfo , isReflash ,
           SwitchToWeb , isCopied,  throttle_click , open_alert }
    },



  });
  </script>
  
<style scoped lang="scss">
  

  .ShowInfoArea{
    border: 1px $MainColor solid;
    width: 50vw;
    height: 50px;
    @include decoration_position(relative,null,null,null,null);
    padding: 10px;
    margin-top: 30px;
    margin-bottom: 30px;
    .ReflashContent{
    animation: ReflashingContent 1.3s ;
    }
    .ReflashLine{
        @include decoration_position(absolute,50%,null,null,0px); 
        z-index: 600;
        width: 100% ;
        height: 100% ;
        transform: translate( calc( 0 ) , -50%);
        background: linear-gradient( to left , transparent 0% 80% , $MainColor 80% , transparent 100%);
       opacity: 1;
       animation: FlashLineMove 1.3s ;
       animation-fill-mode: forwards;

    }


    @keyframes FlashLineMove {
        0%{  transform: translate( calc( 0 ), -50%); 
             opacity: 1 ;      }
       60%{  opacity: 0.3 ;}    
      100%{  transform: translate( calc(  80% - 10px + 1px ) , -50% ); 
             opacity: 0 ; }
    }
    .UpperStr , .LowerStr{
        color: $EmphsizeColor ;
        font-size: 24px;
        @include decoration_position(absolute,50%,null,null,50%); 
        background-color: $MainColorBG;
        transform: translate(-50%, -50%);
        text-align: center;
        width: calc(100% - ( 10px + 1px )  * 2 )   ;  //單邊padding跟border
    }
    .UpperStr{
        z-index: 500;
        cursor: pointer;
        &:hover{
          color: $ViceColor ;
        }
    }
    .LowerStr{ 
        z-index: 400;
    }


  }

  .ContactPageScale{
    margin-top: 10vh;
  
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 10vh;
    padding-bottom: 20px;
  }
  .ContactContent{
    @include decoration_position(relative, null, null, null, null);
    border: 1px $MainColor solid;
    background-color: $MainColorBG;
    height: 80vh;
    margin: 0 auto;
    opacity: 0.95;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & > p{
        color: $MainColor;
        font-size: 28px;
        margin-top: -40px;
        margin-left: 20px;
    }

    i{
        margin-left: 10px;
        margin-right: 10px;
        font-size:32px;
        color: $MainColor;
        cursor: pointer;
    }
  }
.ContactIcons{
    margin: 0 auto;
    margin-top: 20px;

    i{
      &:hover{
        filter: drop-shadow(0px 0px 10px $MainColor );
      }  
    }
}

.MessageAlert{
  @include decoration_position(fixed, 25% , null ,null ,null);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  background: $MainColorBG ;
  border: 1px $MainColor solid;
  color:  $EmphsizeColor ;
  animation: MessageTempShow 2s ease-out;
  animation-fill-mode: none;
  opacity: 0;
  margin: 0;
  padding: 20px;
  z-index: 800;

  p{
    font-size: 22px;
  }
}

@keyframes MessageTempShow {
    0%{    opacity: 1; }
  100%{    opacity: 0; }
}

@keyframes ReflashingContent {
    0%{   clip-path: inset(0 100% 0 0);}
  100%{   clip-path: inset(0 0px 0 0); }
}


</style>