<template>

    <div class="Section1Scale">
        <div  class="Section1">
           <div class="CornerDeco1"></div>
           <div class="CornerDeco2"></div>
           <div class="InfoInner">

              <SectionTitleFrame  title_name="Brief" ></SectionTitleFrame>
 
              <div class="ArticleText">Press  here  to  know  more</div>
              <div v-if="isShowInfo" id="InfoContent">
                <ul class="InfoContentScale">
                  <template v-for=" Col in Cols"  :key="Col.id" >
                    <li  
                       @click="PassColNum(Col.ColNumber)" 
                       :class="{   ...GetHoverStyle(Col.ColNumber) ,
                                   ColStyle : CheckingNowColNum(-1) ,
                                   }"
                    >
                    <div v-show="CheckingNowColNum(-1)" >
                        <div  class="VerticalArr">
                          <div class="TitleImg">
                            <i :class= "Col.IconData" ></i>
                          </div>
                          <h2>{{Col.ColTitle}}</h2>
                        </div>
                    </div>
                    </li>
                    <div  
                      class="ActivedContent"
                      v-if="CheckingNowColNum(Col.ColNumber)"
                    >
                      <article v-if="CheckingNowColNum(1)" >
                          <div  class="BriefIntroScale" >
                              <div  class="VerticalArr">
                                <div class="CornerDeco1" ></div>
                                <div class="CornerDeco2" ></div>
                                <div class="TitleImg">
                                  <i :class= "Col.IconData" ></i>
                                </div>
                                <h2>{{Col.ColTitle}}</h2>
                                
                              </div>
                              <div class="BriefIntro"  >
                                <div class="CornerDeco1"></div>
                                <div class="CornerDeco2"></div>
                                <ul>
                                  <li>I am a software engineer. My goal is being a full-stack developer.</li>
                                  <li>Born in 1997, Living in Taipei.</li>
                                  <li>Stay curious when learning new things, Embracing new perspectives. </li>
                                </ul>
                              </div>
                          </div>
                          <div class="DecoLine" ></div>
                          <div class="ArticleScale">
                            <label>
                                <div class="TitleWithBar" style="--ProgressBarWidth: 95% ;"></div>
                                <div class="TitleBG">
                                    <h3>Experience</h3>
                                </div>

                            </label>

                            <ul class="TimeLine" >
                              <li>
                                  <div class="TL_NodeDeco"></div>
                                  <div class="LineSpace"></div>
                                  <div class="ContentSpace">
                                    <div class="CornerDeco1"></div>
                                    <div class="CornerDeco2"></div>
                                    <h4> ~2019 graduated from YZU</h4>
                                    <p>I earned a bachelor’s degree in CEMS ( Chemical Engineering & Materials Science ) at Yuan Ze University.
                                    </p>
                                  </div>

                              </li>
                              <li>
                                  <div class="TL_NodeDeco"></div>
                                  <div class="LineSpace"></div>
                                  <div class="ContentSpace">
                                    <div class="CornerDeco1"></div>
                                    <div class="CornerDeco2"></div>
                                    <h4>2020 ~ 2022 Cathay United Bank </h4>
                                    <p> I have about two years of work experience in full-stack developer.
                                        <br>In addition to maintaining the core software for the backend of a banking system on Linux, I solve problems related to business logic for salespeople, and query database using SQL.
                                    </p>
                                  </div>
                                
                              </li>
                              <li>
                                  <div class="TL_NodeDeco"></div>
                                  <div class="LineSpace"></div>
                                  <div class="ContentSpace">
                                    <div class="CornerDeco1"></div>
                                    <div class="CornerDeco2"></div>
                                    <h4>2023 ~ </h4>
                                    <p>Keeping learning</p>
                                  </div>
                                
                              </li>
                            </ul>

                          </div>


                      </article>
                      <article v-if="CheckingNowColNum(2)" >

                        <div  class="NormalArr">
                          <div class="CornerDeco1" ></div>
                          <div class="CornerDeco2" ></div>
                          <div class="TitleImg">
                            <i :class= "Col.IconData" ></i>
                          </div>
                          <h2>{{Col.ColTitle}}</h2>
                        </div>

                          <div class="ArticleScale">
                            <label>
                                <div class="TitleWithBar" style="--ProgressBarWidth: 83% ;"></div>
                                <div class="TitleBG">
                                    <h3>Front-end</h3>
                                </div>

                            </label>

                            <ul  >
                              <li>Experience with Javascript frameworks : Vue.js</li>
                              <li>Experience with Vuex & Vue Router</li>
                              <li>Experience with integrating the YouTube API by using Axios</li>
                              <li>Use jQuery to create dynamic effects</li>
                              <li>Could design Infinite Scrolling</li>
                              <li>Design web layout with SCSS</li>
                              <li>Could make responsive web layout</li>
                            </ul>

                          </div>
                          <div class="ArticleScale">
                            <label>
                                <div class="TitleWithBar" style="--ProgressBarWidth: 63% ;"></div>
                                <div class="TitleBG">
                                    <h3>Back-end</h3>
                                </div>

                            </label>

                            <ul  >
                              <li>Have experience in querying large databases</li>
                              <li>Optimizing query performance</li>
                              <li>Experience with reading shell script</li>
                              <li>Could use basic Linux command</li>

                            </ul>

                          </div>
                          <div class="ArticleScale">
                            <label>
                                <div class="TitleWithBar" style="--ProgressBarWidth: 71% ;"></div>
                                <div class="TitleBG">
                                    <h3>Language</h3>
                                </div>
                            </label>

                            <ul >
                              <li>Chinese : native speaker</li>
                              <li>English : intermediate</li>
                              <li>Japanese : basic</li>
                            </ul>

                          </div>
                          <div class="ArticleScale">
                            <label>
                                <div class="TitleWithBar" style="--ProgressBarWidth: 51% ;"></div>
                                <div class="TitleBG">
                                    <h3>Other</h3>
                                </div>
                            </label>

                            <ul >
                              <li>Have experience in git version control</li>
                              <li>Understanding how to use branch / merge command in git</li>
                            </ul>

                          </div>
                      </article>
                      <article v-if="CheckingNowColNum(3)" >
                        <div  class="NormalArr">
                                <div class="CornerDeco1" ></div>
                                <div class="CornerDeco2" ></div>
                                <div class="TitleImg">
                                  <i :class= "Col.IconData" ></i>
                                </div>
                                <h2>{{Col.ColTitle}}</h2>
                        </div>
                          <div class="ArticleScale">
                            <label>
                                <div class="TitleWithBar" style="--ProgressBarWidth: 55% ;"></div>
                                <div class="TitleBG">
                                    <h3>Passive</h3>
                                </div>

                            </label>

                            <ul  >
                              <li>Listening to music</li>
                              <li>Playing video games</li>
                              <li>Watching animation</li>
                            </ul>

                          </div>
                          <div class="ArticleScale">
                            <label>
                                <div class="TitleWithBar" style="--ProgressBarWidth: 70% ;"></div>
                                <div class="TitleBG">
                                    <h3>Active</h3>
                                </div>

                            </label>

                            <ul  >
                              <li>Playing badminton</li>
                              <li>Developing skills</li>
                              <li>Tasting ramen</li>
                            </ul>
                           
                          </div>
                          <span style="height: 300px;"></span>
                      </article>
                      <div   class="ReturnBtn" @click.stop="Goback" >
                          <span class="material-symbols-outlined">undo</span>
                      </div>
                    </div>
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
<div class="Section2"></div>
    
    
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
        {id:"InfoColumn_1",ColTitle:"About",ColNumber:1   ,IconData:"	fas fa-user-circle"  },
        {id:"InfoColumn_2",ColTitle:"Skills",ColNumber:2  ,IconData: "	fas fa-tools" },
        {id:"InfoColumn_3",ColTitle:"Hobbies",ColNumber:3 ,IconData:"		fab fa-xbox"  }
        ]


        const GetColIcon = (ClassName:any)=>{
             return  `${ClassName.IconData}`
        }


        var  PressPercent = ref(0)
        var PressEffectLevel = ref(0)
        var timer:any;
        var isShowInfo = ref(false)

        const CountProgress = (e:any)=>{
          if(e.button == 2)
            return       
          if(PressPercent.value < 100 ){
            timer = setInterval( () => 
            {
              let num = RandomNum()
              PressPercent.value+= num ;
              PressEffectLevel.value+= num ;
              if(PressPercent.value >= 100){
                  clearInterval(timer)
                  PressPercent.value = 100
                  PressEffectLevel.value = 100
                  isShowInfo.value = true
                  console.log("open")
              }
  
            }, 50);
          }
        }
        const RandomNum = () => {
          return  ( Math.floor(Math.random() * 10) + 3);
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
          return { [base] : CheckingNowColNum(-1) };
        }

  //  watchEffect( ()=>{

   // })
        

    return{
        PressPercent,  CountProgress ,  ResetProgress  , timer , isShowInfo,
        CancelWindow , PressEffect ,  isActive ,OpenContent ,Goback
        ,CheckingNowColNum , PassColNum , Cols ,GetHoverStyle  , GetColIcon
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

  i{
    font-size: 80px;
    color: $MainColor;
  }

}


.NormalArr{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 5%;
  @include decoration_position(relative, null , null, null, 2px);
  border: 1px $MainColor solid;
  padding: 10px;
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

      background-color: rgba(200, 200, 254, 0.1) ;
      opacity: 1;
      cursor: pointer;
      padding-top: 13%;
      i{
        filter: drop-shadow(0px 0px 10px $ViceColorDark );
      }
      h2{
        text-shadow: 0px 0px 12px  $MainColor ;
        margin-top: 20px;
        transition: all 0.6s ;
        font-size: 36px;
      }
    }

    .TitleImg{
    display: block;
    width: 80px;
    height: 80px;
    margin: 20px 0;
    margin-bottom: 40px;
    }
    h2{
    font-size: 30px;
    font-weight:bold ;
    color: $MainColor ;
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
    height: 90%;
    border: $MainColor 1px solid;
    @include decoration_position(fixed , calc( 50% ) , null , null , 50%);
    
    background-color:$MainColorBG;
    opacity: 1;
    animation: ShowInfoAnima  1s   ;
    transform: translate(-50%, -50%);


    .CloseBtn{
        @include decoration_position(absolute ,0px , 0px, null, null);
        z-index: 711;
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
    z-index: -1;
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

    color:$MainColor;

    font-size: 38px;
}



.Section1Scale{
    padding-left: 30px;
    padding-right: calc(30px - 12px);
    padding-top: 50px;

}

.Section1{
    @include decoration_position( relative , 0px , 0px , 0px , 0px );
    z-index: 710;  
}

.Section2{
height: 300px;
}

.ArticleText{
font-size: 28px;
color: $MainColor;
}




.InfoInner{

  border: 1px rgb(66, 222, 233) solid;
  padding: 12px;
  padding-top: 30px;
  padding-bottom: 30px;
  box-sizing: border-box;

  background-color: $MainColorBG ;
  opacity: 0.95;



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
    margin-left: 4px;
  }

}


 .BriefIntro{
        @include decoration_position(relative, null , null, null, null);
        display: block;
        border: 1px $MainColor solid;
        width: 75%;
        margin-left: 5%;
        margin-right: 5%;

        li{
          list-style: none;
          padding: 6px;
          text-align: left;
          margin-left: 32px;
          color:$ViceColor;
          font-size: 22px;
          &::marker{
            content: "▶ ";
            color: $ViceColorDark ;
           
          }

        }
  }

.ActivedContent{
    @include decoration_position( absolute , 0px , 0px , 0px , 0px );
    width: 100% ;
    z-index: 720;
    background-color: $MainColorBG ;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 5%;
    animation: StretchWidthShowing 1s  ;  


    .BriefIntroScale{
      display:flex;
      width: 100%;
      margin-left: 5%;

    }
    .VerticalArr{
      @include decoration_position(relative, null , null, null, null);
      border: 1px $MainColor solid;
      padding: 15px;

    }
    .TitleImg{
      display: block;
      width: 60px;
      height: 60px;
      margin: 10px 0;
      transition: all 0.5s;
  
      i{
        font-size: 60px;
        color: $MainColor;
      }
    }

    h2{
    font-size: 40px;
    font-weight:bold ;
    color: $MainColor ;
    transition: all 0.5s;
    }

    article{
      display: block;
      width: 90%;
      overflow-y: auto;
      overflow-x: hidden ;
      margin-top:30px ;
      margin-bottom: 3% ;
      padding-top: 2px;
      padding-right: 10px;

      opacity: 0;
      @include Moving_Animation(0px , 100px   , 0px,0px  );
      @include FadeIn_Animation(0 , 1  );
      animation: FadeIn 0.7s ease-out ,  Moving 0.7s ease-out   ;
      animation-fill-mode: forwards;
      animation-delay: 0.6s;

      //必須指定在article下直屬的子元素div，依序設定動華延遲效果，article和第一子元素設定同時間不然看起來會有點怪
      & > div{
        opacity: 0;
        animation: FadeIn 0.7s ease-out ,  Moving 0.7s ease-out   ;
        animation-fill-mode: forwards;

          &:nth-child(1){
            animation-delay: 0.6s;
          }
          &:nth-child(2){        
            animation-delay: 1.4s;
          }
          &:nth-child(3){
            animation-delay: 2.0s;
          }
          &:nth-child(4){
            animation-delay: 2.3s;
          }
          &:nth-child(5){
            animation-delay: 2.6s;
          }
      }

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
        text-align:left;
        @include decoration_position(relative , null, null, null, null);



       ul{
            font-weight: bold;
            font-size: 22px;
            margin-bottom: 12px;
            column-count:2;
            max-height: 200px;
       }

       li{
          list-style-type: square;
          margin-bottom: 12px;
          max-width: 50%;
          color: $ViceColor;
          margin-left: 20px;
          &::marker{
            color:$ViceColor ;
            width: 5px;
          }

        }

        label{
            display: inline-block   ;
            height: 70px;
          
        }

        .TimeLine{
          $TimeLineNodeX:20px;
          $TimeLineNodeY:50%;
           list-style-type: none;
           max-height:none;

           padding-top: 1%;
           width: 100%;
           display: block;
          
           column-count:1;
           overflow: auto;

           
           li{
             @include decoration_position(relative, null, null, null, null);
             list-style-type: none;
             border: none;
             max-width:none;
             margin-bottom: 0px;

             overflow: auto;
             padding: 10px;
             overflow: hidden;
           }
           .TL_NodeDeco{
            //bef=圓 aft=方形
            &::before{
              content: "";
              @include decoration_position(absolute, $TimeLineNodeY , null, null, calc($TimeLineNodeX + 4px ));
              width: 18px;
              height: 18px;
              border-radius: 50%;
             background-color: $MainColor;
             transform: translate(0px,-50%);
             
            }
            &::after{
              content: "";
              @include decoration_position(absolute, $TimeLineNodeY , null, null, calc($TimeLineNodeX ) );
              width: 24px;
              height: 24px;
              border: 1px $MainColor solid  ;
              transform: translate(0px,-50%);

              animation: TL_NodeCubeAnimation 1.2s linear infinite;
            }
           }
           .LineSpace{
            display: inline-block;

     //bef=直線 aft=橫線
            &::before{
              content: "";
              @include decoration_position(absolute, $TimeLineNodeY, null, null, calc( 12px + $TimeLineNodeX));
              width: 1px;
              height: 100%;

             background-color: $MainColor;
             transform: translate(0px,-50%);

            }
            &::after{
              content: "";
              @include decoration_position(absolute, $TimeLineNodeY, null, null, calc( 12px + $TimeLineNodeX));
              width: calc(80px );
              height: 1px;
              background-color: $MainColor;
            }

           }

           .ContentSpace{
            @include decoration_position(relative, 0px, null, null, null);
            border: 1px $MainColor solid;
            height: 100%;
            padding: 10px;
            margin-left: 100px;
            margin-right: 5%;
            h4{

              font-size: 24px;
              margin-bottom: 10px;
              color: $MainColor;
            }
            p{
              display: block;
              line-height: 30px;
              word-wrap:break-word;  
              word-break: none;
              color: $ViceColor;
            }



           }


        }




        .TitleBG{
            @include decoration_position(absolute , 0px, null, null, 30px);    
            background-color:  $ViceColorDark  ;
            transform: skew(-45deg);
            display: inline-block;
            height: 30px;
            
            padding: 8px;
            padding-left: 16px;
            padding-right: 16px;
            filter:drop-shadow(3px 1px 5px rgb(0,0,0));
            
        }




        .TitleWithBar{
            @include decoration_position(absolute , 15px, null, null, 35px);
            z-index: -1;
            
            width: 300px;
            height: 40px;
            // 下方為縮寫: background-color、background-position、 background-size、background-repeat
            background: linear-gradient(to right, $ViceColor 0px 70%, $EmphsizeColor ) left  / var(--ProgressBarWidth) 100% no-repeat;
            transform: skew(-45deg);


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
            font-size: 30px;
            margin-bottom: 8px;
            transform: skew(45deg);
            text-align: center;
            line-height: 30px;
            color: $ViceColor ;
        }
    }





    .DecoLine{
        margin-top: 3%;
        height: 1px;
        background-color: $MainColor  ;
        
    }



   .ReturnBtn{
     @include decoration_position(absolute, 0px , 0px  , null , null);
     height: 80px;
     width: 80px;
     z-index: 711;
     cursor: pointer ;
     color: $EmphsizeColor ;
     @include FadeIn_Animation(0 , 1  );
     animation: FadeIn 2s  ;
  
     display: flex;
     align-items: center;
     justify-content: center;
    

     &:hover{
        filter: drop-shadow(1px 1px 8px #5555e0);
        animation: BreatheEffect_MyInfo 2s infinite ;
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


@keyframes  test_MyInfo{
  0% { transform:translate(0px,-50%)  ;}
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
@keyframes StretchWidthShowing{
    0% {    width: 0;  }
}

@keyframes TL_NodeCubeAnimation{
  //transform內的要素順序會影像效果
    0% {    transform:translate(0px,-50%)  scale(0.1)  rotate(0deg) ;  }
    50% {    transform: translate(0px,-50%) scale(1)  rotate(180deg) ;  }
    100% {    transform: translate(0px,-50%) scale(0.1)  rotate(360deg) ;  }
}
//展開1s，等0.5s後再滑進內容0.7s
</style>