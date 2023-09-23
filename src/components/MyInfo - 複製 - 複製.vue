<template>

    <div class="Section1Scale">
        <div class="Section1">
           <div class="CornerDeco1"></div>
           <div class="CornerDeco2"></div>
           <div class="InfoInner">

              <SectionTitleFrame  title_name="217" ></SectionTitleFrame>
 
              <div class="ArticleText">Press  here  to  know  more</div>
              <div v-if="isShowInfo" id="InfoContent">
                <ul class="InfoContentScale">
                  <template v-for=" Col in Cols"  :key="Col.id" >
                    <li  
                       @click="PassColNum(Col.ColNumber)" 
                       :class="{   ActivedContent : CheckingNowColNum(Col.ColNumber) ,
                                   ...GetHoverStyle(Col.ColNumber) ,
                                   ColStyle : !CheckingNowColNum(-1)   }"
                    >
                    <div v-show="!CheckingNowColNum(Col.ColNumber)" >
                        <div  class="VerticalArr">
                          <div class="TitleImg"></div>
                          <h2>{{Col.ColTitle}}</h2>
                        </div>
                    </div>


                        <article v-if="CheckingNowColNum(1)" >
                          <div  class="BriefIntroScale" >
                              <div  class="VerticalArr">
                                <div class="CornerDeco1" ></div>
                                <div class="CornerDeco2" ></div>
                                <div class="TitleImg"></div>
                                <h2>{{Col.ColTitle}}</h2>
                                
                              </div>
                              <div class="BriefIntro"  >
                                <div class="CornerDeco1"></div>
                                <div class="CornerDeco2"></div>
                                <ul>
                                  <li>123</li>
                                  <li>456</li>
                                  <li>789</li>
                                </ul>
                              </div>
                            </div>
                          <div class="DecoLine" ></div>
                          <div class="ArticleScale">
                            <label>
                                <div class="TitleWithBar" style="--ProgressBarWidth: 100% ;"></div>
                                <div class="TitleBG">
                                    <h3>Experience</h3>
                                </div>

                            </label>

                            <ul class="TimeLine" >
                              <li>45611</li>

                            </ul>

                          </div>


                        </article>
                        <article v-if="CheckingNowColNum(2)" >
                            <div  class="BriefIntroScale" >
                              <div  class="VerticalArr">
                                <div class="CornerDeco1" ></div>
                                <div class="CornerDeco2" ></div>
                                <div class="TitleImg"></div>
                                <h2>{{Col.ColTitle}}</h2>
                              </div>
                            </div>
                          <div class="ArticleScale">
                            <label>
                                <div class="TitleWithBar" style="--ProgressBarWidth: 55% ;"></div>
                                <div class="TitleBG">
                                    <h3>JavaScript</h3>
                                </div>

                            </label>

                            <ul  >
                              <li>1111111111111111111111222222222222111111</li>
                              <li>2</li>
                              <li>3</li>
                              <li>4</li>
                              <li>5</li>
                              <li>6</li>
                              <li>7</li>
                              <li>8</li>
                              <li>9</li>
                            </ul>

                          </div>
                          <div class="ArticleScale">
                            <label>
                                <div class="TitleWithBar" style="--ProgressBarWidth: 70% ;"></div>
                                <div class="TitleBG">
                                    <h3>HTML / CSS</h3>
                                </div>

                            </label>

                            <ul  >
                              <li>111111</li>
                              <li>2</li>
                              <li>3</li>
                              <li>4</li>
                              <li>5</li>
                              <li>6</li>
                              <li>7</li>
                              <li>8</li>
                              <li>9</li>
                            </ul>

                          </div>
                          <div class="ArticleScale">
                            <label>
                                <div class="TitleWithBar" style="--ProgressBarWidth: 35% ;"></div>
                                <div class="TitleBG">
                                    <h3>Other</h3>
                                </div>

                            </label>

                            <ul  >
                              <li>1111111111111111111111222222222222111111</li>
                              <li>2</li>
                              <li>3</li>
                              <li>4</li>
                              <li>5</li>
                              <li>6</li>
                              <li>7</li>
                              <li>8</li>
                              <li>9</li>
                            </ul>

                          </div>
                        </article>
                        <article v-if="CheckingNowColNum(3)" >
                          <div class="ArticleScale">
                            <label>
                                <div class="TitleWithBar" style="--ProgressBarWidth: 55% ;"></div>
                                <div class="TitleBG">
                                    <h3>JavaScript</h3>
                                </div>

                            </label>

                            <ul  >
                              <li>11111111111</li>

                            </ul>

                          </div>
                          <div class="ArticleScale">
                            <label>
                                <div class="TitleWithBar" style="--ProgressBarWidth: 70% ;"></div>
                                <div class="TitleBG">
                                    <h3>HTML / CSS</h3>
                                </div>

                            </label>

                            <ul  >
                              <li>111</li>
  
                            </ul>

                          </div>
                          <div class="ArticleScale">
                            <label>
                                <div class="TitleWithBar" style="--ProgressBarWidth: 35% ;"></div>
                                <div class="TitleBG">
                                    <h3>Other</h3>
                                </div>

                            </label>

                            <ul  >
                              <li>111111111</li>

                            </ul>

                          </div>
                        </article>
                        <div class="ReturnBtn" @click.stop="Goback" >
                            <span class="material-symbols-outlined">undo</span>
                        </div>
                    </li>
                  </template>


                </ul>
                <div @click="CancelWindow" class="CloseBtn" >
                  <div></div>
                  <div></div>
                  <p>CLOSE</p>
                </div>
              </div>  
              <div class="SVGFrame"
              :style="PressEffect"
              @mousedown="CountProgress"
              @mouseup="ResetProgress"
              @mouseleave="ResetProgress"
              @contextmenu.prevent
              >
                <div class="ProgressNum"> {{ PressPercent }} %</div>
             <!-- 最外圈 
              M 弧線起點 A 圓半徑x/y 特殊旋轉角度 弧線最大(1)最小角度(0) 方向順(1)逆(0) 弧線結尾
               弧線算法= SIN(  角度   )* 半徑 + 圓心Y座標
                      = COS(  角度   )*  半徑 + 圓心X座標-->
                <div class=" RotatingSVG_Slow">
   
                  <svg  width="200px" height="200px"
                        viewBox="0px 0px 200 200"
                        preserveAspectRatio="xMidYMid meet">
                      <path xmlns="http://www.w3.org/2000/svg"  
                      d="M 147.5 182.27 A 95 95, 0 , 1 1 , 52.5 17.72"
                      stroke = "rgb(5,217,232)"
                      stroke-width="2" 
                      fill="none"
                      stroke-linejoin="round"   />
   
                
                  </svg>
             
                </div>

                <div class="RotatingSVG_Mid">
                   <svg  width="200px" height="200px"
                         viewBox="0px 0px 200 200"
                         preserveAspectRatio="xMidYMid meet">
                       <path xmlns="http://www.w3.org/2000/svg"  
                       d="M 180.54 146.5 A 93 93, 0 , 1 0 , 19.46 53.5"
                       stroke = "rgb(5,217,232)"
                       stroke-width="2" 
                       fill="none"
                       stroke-linejoin="round"   />       
                   </svg>
                </div>
             <!--兩條-->
                <div class="RotatingSVG_Fast">
               <svg  width="200px" height="200px"
                     viewBox="0px 0px 200 200"
                     preserveAspectRatio="xMidYMid meet">
                   <path xmlns="http://www.w3.org/2000/svg"  
                   d="M 183.71 114.76 A 85 85, 0 , 0 0 , 183.71 85.24"
                   stroke = "rgb(5,217,232)"
                   stroke-width="5" 
                   fill="none"
                   stroke-linejoin="round"   />
                   <path xmlns="http://www.w3.org/2000/svg"  
                   d="M 16.29 85.23 A 85 85, 0 , 0 1 , 57.5 26.39"
                   stroke = "rgb(5,217,232)"
                   stroke-width="5" 
                   fill="none"
                   stroke-linejoin="round"   />
               </svg>
                </div>

                <div class="RotatingSVG_Mid">
               <svg  width="200px" height="200px"
                     viewBox="0px 0px 200 200"
                     preserveAspectRatio="xMidYMid meet">
                   <path xmlns="http://www.w3.org/2000/svg"  
                   d="M 139 167.55 A 78 78, 0 , 0 0 , 139 32.45"
                   stroke = "rgb(5,217,232)"
                   stroke-width="5" 
                   fill="none"
                   stroke-linejoin="round"   />       
               </svg>
                </div>
    
                <div class="RotatingSVG_Mid">
               <svg  width="200px" height="200px"
                     viewBox="0px 0px 200 200"
                     preserveAspectRatio="xMidYMid meet">
                   <path xmlns="http://www.w3.org/2000/svg"  
                   d="M 165.78 123.94 A 70 70, 0 , 0 0 , 165.78 76.06"
                   stroke = "rgb(5,217,232)"
                   stroke-width="3" 
                   fill="none"
                   stroke-linejoin="round"   />
                   <path xmlns="http://www.w3.org/2000/svg"  
                   d="M 34.22 76.06 A 70 70, 0 , 0 1 , 135 39.38"
                   stroke = "rgb(5,217,232)"
                   stroke-width="3" 
                   fill="none"
                   stroke-linejoin="round"   />
                   <path xmlns="http://www.w3.org/2000/svg"  
                   d="M 157.34 59.85 A 70 70, 0 , 0 0 , 145 46.38"
                   stroke = "rgb(5,217,232)"
                   stroke-width="3" 
                   fill="none"
                   stroke-linejoin="round"   />
               </svg>
                </div>
    
                <div class="RotatingSVG_Fast">

                <svg  width="200px" height="200px"
                      viewBox="0px 0px 200 200"
                      preserveAspectRatio="xMidYMid meet">
                    <path xmlns="http://www.w3.org/2000/svg"  
                    d="M 77.77 38.92 A 65 65, 0 , 0 0  , 50.21 58.21"
                    stroke = "rgb(5,217,232)"
                    stroke-width="2"
                    fill="none"
                    stroke-linejoin="round"   />
                    <path xmlns="http://www.w3.org/2000/svg"  
                    d="M 161.08 122.23 A 65 65, 0 , 0 1  , 132.5 156.3"
                    stroke = "rgb(5,217,232)"
                    stroke-width="2"
                    fill="none"
                    stroke-linejoin="round"   />
                    <path xmlns="http://www.w3.org/2000/svg"  
                    d="M 111.29 164.01 A 65 65, 0 , 0 1  , 58.22 149.8"
                    stroke = "rgb(5,217,232)"
                    stroke-width="2"
                    fill="none"
                    stroke-linejoin="round"   />
                </svg>

                </div>
    
                <div class="RotatingSVG_Slow">

                <svg  width="200px" height="200px"
                      viewBox="0px 0px 200 200"
                      preserveAspectRatio="xMidYMid meet">
                    <path xmlns="http://www.w3.org/2000/svg"  
                    d="M 79.48 156.38 A 60 60, 0 , 0 0 , 142.43 57.57"
                    stroke = "rgb(5,217,232)"
                    stroke-width="4"
                    fill="none"
                    stroke-linejoin="round"   />
                
                
                </svg>
            
                </div>

                <div class="RotatingSVG_Mid">

               <svg  width="200px" height="200px"
                     viewBox="0px 0px 200 200"
                     preserveAspectRatio="xMidYMid meet">
                   <path xmlns="http://www.w3.org/2000/svg"  
                   d="M 81.19 151.68 A 55 55, 0 , 0 1 , 118.81 48.31"
                   stroke = "rgb(5,217,232)"
                   stroke-width="2"
                   fill="none"
                   stroke-linejoin="round"   />
               </svg>
                </div>
    
                <div class="RotatingSVG_Fast">

                <svg  width="200px" height="200px"
                      viewBox="0px 0px 200 200"
                      preserveAspectRatio="xMidYMid meet">
                    <path xmlns="http://www.w3.org/2000/svg"  
                    d="M 90.97 48.79 A 52 52, 0 , 0 1 , 136.77 136.77"
                    stroke = "rgb(5,217,232)"
                    stroke-width="2"
                    fill="none"
                    stroke-linejoin="round"   />
                </svg>
                </div>
              </div>
           </div>

        </div>

    </div>

    
    
</template>
        
<script lang="ts">
    import { defineComponent ,ref , watchEffect , computed} from "vue";
    import  SectionTitleFrame  from "../components/SectionTitleFrame.vue";

    export default defineComponent({
      name: "MyInfo",
      components: {
      SectionTitleFrame 
      },
     setup(){
        const Cols = [
        {id:"InfoColumn_1",ColTitle:"About",ColNumber:1     },
        {id:"InfoColumn_2",ColTitle:"Skills",ColNumber:2    },
        {id:"InfoColumn_3",ColTitle:"Hobbies",ColNumber:3   }
        ]
        var  PressPercent = ref(0)
        var PressEffectLevel = ref(0)
        var timer:any;
        var isShowInfo = ref(false)

        const CountProgress = ()=>{
            if(PressPercent.value < 100 ){
             timer = setInterval( () => {
                PressPercent.value+= 5;
                PressEffectLevel.value+=5;
                if(PressPercent.value >= 100){
                    clearInterval(timer)
                    PressPercent.value = 100
                    PressEffectLevel.value = 100
                    isShowInfo.value = true
                    console.log("open")
                }

              }, 100);
            }


        }

        const CancelWindow = ()=>{
            isShowInfo.value = false
        }
        const ResetProgress = ()=>{
        
            if(PressPercent.value >= 0 ){
                clearInterval(timer)
                PressPercent.value= 0;
                PressEffectLevel.value= 0;
            //    isShowInfo.value = false
                console.log("歸零")
            }
        }

        const PressEffect = computed(  ()=>{
          return  `background:radial-gradient(ellipse at center,
          rgba(255,255,255,1) 0%  ,
          rgba(255,255,255,1)   ,
          rgba(255,255,255,0) ${PressEffectLevel.value}% );`
        } )


        var isActive = ref(false)
        const OpenContent  = () =>{
          isActive.value = true ;
        }
        const Goback  = () =>{
          CurrClick.value = -1 ;
        }


        var CurrClick = ref(-1)
        const CheckingNowColNum = ( x:number )=>{
          return  CurrClick.value === x
        } 
        const PassColNum  = (ColNumber:number) =>{
          CurrClick.value = ColNumber ;
        }

        const GetHoverStyle  = (ColNumber:number) =>{
          let base = `ColHoverStyle_${ColNumber}`
       // :class需要當作一個物件返回，所以使用時要記得解構
          return { [base] : !CheckingNowColNum(-1) };
        }

    watchEffect( ()=>{
console.log(CurrClick.value )

    })
        

    return{
        PressPercent,  CountProgress ,  ResetProgress  , timer , isShowInfo,
        CancelWindow , PressEffect ,  isActive ,OpenContent ,Goback
        ,CheckingNowColNum , PassColNum , Cols ,GetHoverStyle
    }
      }

    });

</script>
    
    
<style lang="scss">
//-webkit-text-stroke: 2px black;



.VerticalArr{
  display: flex;
  flex-direction: column;
  align-items: center;
}

.InfoContentScale{
    display: flex;
    justify-content: center;
    height: 100%;
    @include decoration_position(relative, 0px , 0px , 0px , 0px );

}



.ColStyle{
    @include decoration_position(relative,  0px , 0px , 0px ,0px);
    width: 25%;
    transition: all 0.4s;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 15%;

    &:hover{
      width: calc( 25% + 50px );
      z-index: 500;
      background-color: rgba(200, 200, 254, 0.1) ;
      opacity: 1;
      cursor: pointer;
      padding-top: 13%;

      h2{
        text-shadow: 0px 0px 16px $EmphsizeColor;
        margin-top: 20px;
        transition: all 0.4s ;
      }
    }

    


    .TitleImg{
    display: block;
    width: 80px;
    height: 80px;
    border: $MainColor 1px solid;
    margin: 20px 0;
    }
    h2 {
    font-size: 24px;
    font-weight:bold ;
    color: rgb(92, 197, 204);
    }
    


    .ReturnBtn{
        display: none;
    }
}





.ColHoverStyle_1{

    &::before{
        content: "";
        width: 100%;
        height: 100%;
        @include decoration_position(absolute, 0px , null  , null , null);
    }
    &::after{
        content: "";
        width: 100%;
        height: 100%;
        @include decoration_position(absolute, null , null  , 0px , null);
    }

    &:hover{
      &::before{
        background:radial-gradient(ellipse 100% 30%  at 50% -12%,$ViceColor 0% ,transparent 70%);
       
      }
  
      &::after{
        background:radial-gradient(ellipse 100% 30% at 50% 112%,$ViceColor 0% , transparent 70%);
        
      }
    }

}



.ColHoverStyle_2{ 

    &::before,&::after{
        content: "";
        width: calc(100% );
        aspect-ratio: 1/1;
        
    }

    &::before{  @include decoration_position(absolute, 0px  , null   , null , null); }
    &::after {  @include decoration_position(absolute, null , null   , 0px  ,  null );  }
 

    &:hover{

      &::before{
        clip-path: polygon(50% 20%, 0 0, 100% 0) ;
        background: linear-gradient(  to bottom ,transparent -5%,$ViceColor  30%);
      }

      &::after{
        clip-path: polygon(50% 80%, 0 100%, 100% 100% ) ;
        background:   linear-gradient(  to top  , transparent -5% ,$ViceColor 30%),
      }

  }

}

.ColHoverStyle_3{

    &::before,&::after{
        content: "";
        width: 100% ;
        height: 100%;
               
    }

    &::before{  @include decoration_position(absolute, 0px  , null   , null , null); }
    &::after {  @include decoration_position(absolute, null , null   , 0px  ,  null );  }
 

    &:hover{

      &::before{
   
        background: linear-gradient(  to bottom ,$ViceColor -5%, transparent 10%);
      }

      &::after{
     
        background: linear-gradient(  to top ,$ViceColor -5%, transparent 10%);
      }

  }
}

#InfoContent{
    width: 96%;
    height: 86%;
    border: $MainColor 1px solid;
    @include decoration_position(fixed , calc( 50% + 50px) , 0, 0, 50%);
    z-index: 800;
    background-color:$MainColorBG;
    opacity: 1;
    animation: ShowInfoAnima  1s   ;
    transform: translate(-50%, -50%);


    .CloseBtn{
        @include decoration_position(absolute ,0px , 0px, null, null);
        
        width: 40px;
        height: 40px;
        cursor: pointer;

        div{
          &:nth-child(1){
            @include decoration_position(absolute , null, null, null, null);
            margin-top: 20px;
              width: 30px;
              height: 2px;
              background-color: $EmphsizeColor;
              border-radius: 4px;
              transform: rotate(45deg);
              transition: all 0.5s ;
          }
          &:nth-child(2){
            margin-top: 20px;
            @include decoration_position(absolute ,null , null, null, null);
              width: 30px;
              height: 2px;
              background-color: $EmphsizeColor ;
              border-radius: 4px;
              transform: rotate(-45deg);
              transition: all 0.5s ;
          }
        }
        & > p {
            margin-top: 45px;
            margin-left: -10px;
            font-size: 10px;
            letter-spacing: 1px;
            opacity: 0;
            color: $MainColor ;
            transition: all 0.5s ;
        }

        &:hover {
          div{
            &:nth-child(1){
              transform: rotate(0deg);
            }
            &:nth-child(2){
              transform: rotate(0deg);
            }
          }
          & > p {

            opacity: 1;
            margin-top: 35px;
        }
        }


    }
}



@keyframes RotateAnima{
       0%   {   transform: rotate(0deg)   ;  }
       50%  {   transform: rotate(180deg) ;  }
       100% {   transform: rotate(360deg) ;  }
}

@keyframes HoverScaleAnima{
       0%   {   transform: scale(1)    ; }
       100% {   transform: scale(1.1)  ;  }

}

@keyframes ShowInfoAnima{
         0% {   transform: translate(-50%, -50%) scale(0.01 ,0.01 )    ; }
        50% {   transform: translate(-50%, -50%) scale(0.01 , 1)  ;  }
       100% {   transform: translate(-50%, -50%) scale(1 , 1)  ;  }

}


@mixin RotatingSVG($time , $dir){
    @include decoration_position(absolute ,  0px , 0px, 0px,  0px);
    width: 200px;
    height: 200px;
    animation: RotateAnima  $time * 1s linear infinite ;
    animation-direction: $dir ;
}
.RotatingSVG_Fast{  @include RotatingSVG( 1.5 , normal ) }
.RotatingSVG_Mid {  @include RotatingSVG( 3   , reverse ) }
.RotatingSVG_Slow{  @include RotatingSVG( 5   , normal ) }






.SVGFrame{
    //animation-duration: 2.3s;
    @include decoration_position(relative , 0px , 0px, 0px, 0px);
    width: 200px;
    height: 200px;
    margin:  30px auto;
    
  
border-radius: 50%;

    &:hover{
        animation:  HoverScaleAnima 0.8s  ;
        animation-fill-mode: forwards;
    }

    &:hover .RotatingSVG_Fast { animation-duration: 0.8s  ;  }
    &:hover .RotatingSVG_Mid  { animation-duration: 1.4s  ;  }
    &:hover .RotatingSVG_Slow { animation-duration: 3.2s ;   }


}



.ProgressNum{
    @include decoration_position(absolute , 50% , null , null , 50% );
    transform: translate(-50%, -50%);
    z-index: 700;
    color:$MainColor;

    font-size: 28px;
}



.Section1Scale{
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 50px;

}

.Section1{
    @include decoration_position( relative , 0px , 0px , 0px , 0px );  
    
 
}

.ArticleText{
font-size: 20px;
color: $MainColor;
}




.InfoInner{

  border: 1px rgb(66, 222, 233) solid;
  padding: 12px;
  padding-top: 30px;
  padding-bottom: 30px;
  box-sizing: border-box;

  background-color: $MainColorBG ;
  opacity: 0.9;



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
    font-size: 18px;
    margin-left: 4px;
  }

}
//保險起見CornerDeco1/2都跟NavBar的一樣
 //  裝飾上半邊框角落，參照點是 Section1

 .BriefIntro{
        @include decoration_position(relative, null , null, null, null);
        display: block;
        border: 1px $MainColor solid;
        width: 70%;
        margin-left: 5%;

        li{
          list-style: none;
          padding: 6px;
          text-align: left;
          list-style-position: inside;
          color:$ViceColor;

          &::marker{
            content: "▶ ";
            color: $ViceColorDark ;
           
          }

        }
       }

.ActivedContent{
    @include decoration_position( absolute , 0px , 0px , 0px , 0px );
    width: 100% ;
    z-index: 610;
    background-color: $MainColorBG ;
    transition: all 0.4s ;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 5%;
    
    


      .BriefIntroScale{
        display:flex;
        width: 100%;
        margin-left: 10%;

        .VerticalArr{
          @include decoration_position(relative, null , null, null, null);
          border: 1px $MainColor solid;
          padding: 10px;
        }

      }



    

    article{
      display: block;
      width: 90%;
      overflow-y: auto;
      margin-top:30px ;
      margin-bottom: 3% ;

      &::-webkit-scrollbar-thumb{   
        background-color: $MainColorBG ;
        /*box-sizing放border底部會和邊框重疊，而且卷軸吃不到這個屬性，Firefox3.6以下不支援content-box，*/
        background-clip: content-box; 
        border: 1.5px solid $MainColor;
      }
      &::-webkit-scrollbar{  
      width: 12px;
      }
    }

    .ArticleScale{
        padding: 10px;
        margin-top: 20px;
        margin-left: 30px;
        
        text-align:left;
        @include decoration_position(relative , null, null, null, null);
        



       ul{
            font-weight: bold;
            font-size: 24px;
            margin-bottom: 12px;
            column-count:2;
            max-height: 200px;
       }

       li{
          list-style-type: square;
          list-style-position: inside;
          margin-bottom: 12px;
          max-width: 90%;
          border: 1px #cccccc solid;
          word-break: break-all;


          &::marker{
            color:white;
            width: 5px;
          }

        }

        label{
            display: inline-block   ;
            height: 70px;
        }

        .TimeLine{
           list-style-type: none;
           padding-top: 1%;
           width: 100%;
           border: 1px green solid;
           li{
            
             list-style-type: none;
             border: 1px red solid;
           }
        }
        .TitleBG{
            @include decoration_position(absolute , 0px, null, null, 0px);    
            background-color:  $ViceColorDark  ;
            transform: skew(-45deg);
            display: inline-block;
            height: 30px;
            
            padding: 8px;
            padding-left: 16px;
            padding-right: 16px;
        }




        .TitleWithBar{
            @include decoration_position(absolute , 15px, null, null, 5px);
            z-index: -1;
            
            width: 300px;
            height: 40px;
            // 下方為縮寫: background-color、background-position、 background-size、background-repeat
            background: linear-gradient(to right, $ViceColor 0px 60%, $MainColor ) left  / var(--ProgressBarWidth) 100% no-repeat;
            transform: skew(-45deg);
            animation: ProgressBarShowing ease-out 0.8s  ;
            
            &::before{
                content: "";
                @include decoration_position(absolute , null, null, null, null);
                width: 100%;
                height: 100%;

                background:  
                //能量條外框(X、Y方向)、條紋間隔
                 linear-gradient(90deg , $ViceColorDark 0px 5px  , transparent 5px calc(100% - 5px) , $ViceColorDark calc(100% - 5px) 100% ),
                 linear-gradient(0deg ,  $ViceColorDark 0px 5px  , transparent 5px calc(100% - 5px) , $ViceColorDark calc(100% - 5px) 100% ),
                 repeating-linear-gradient(90deg  , $ViceColorDark 0px 6px, transparent 6px 16px ) right  / 50% 100%   no-repeat ;
                 
            }
        }

         


        h3{
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 8px;
            transform: skew(45deg);
            text-align: center;
            line-height: 30px;
            color: $MainColor;
        }
    }





    .DecoLine{
        margin-top: 3%;
        height: 1px;
        background-color: $MainColor  ;
        width: 90%;
    }

    .TitleImg{
    display: block;
    width: 60px;
    height: 60px;
    border: $MainColor 1px solid;
    margin: 20px 0;
    transition: all 0.5s;
    }

    h2 {
    font-size: 30px;
    font-weight:bold ;
    color: rgb(92, 197, 204);
    transition: all 0.5s;
    }

   .ReturnBtn{
     @include decoration_position(absolute, 0px , 0px  , null , null);
     height: 80px;
     width: 80px;
     z-index: 600;
     cursor: pointer ;
     color: $EmphsizeColor ;

  
     display: flex;
     align-items: center;
     justify-content: center;
    

     &:hover{
        filter: drop-shadow(1px 1px 8px #5555e0);
        animation: BreatheEffect_MyInfo 2s infinite ;
     }
     &:active{
        animation: FlickingOut_MyInfo 0.7s ;
     }
     .material-symbols-outlined {
       font-variation-settings:
       'FILL' 0,
       'wght' 600,
       'GRAD' 0,
       'opsz' 40
     }


  }

}


@keyframes  FlickingOut_MyInfo{
  0% { opacity: 0 ;}
  2% { opacity: 1 ;}
  4% { opacity: 0 ;}
 10% { opacity: 1 ;}
 90% { opacity: 0; }
} 
@keyframes  BreatheEffect_MyInfo{
  0% { opacity: 1 ;}
 50% { opacity: 0.3 ;}
 100% { opacity: 1; }
} 
@keyframes ProgressBarShowing{
    0% {    width: 0;  }

}

    </style>