<template>

  <div class="testScale" >
    <div class="ColorPickerArea">
      <div  class="ColorPickerAreaLeft">
        <label>Color Picker</label>
        <div class="ColorPickerPanel">
          <div class="anchor" ref="anchor"></div>
          <canvas 
          ref="PickArea"
          class="PickArea"

          @mousedown="DotMove"

          height="150"
          width="400"
          >
            
          </canvas>
          <div ref="PreviewArea" class="PreviewArea"></div>
        </div>
        <ul class="SelectedColorInfo">
          <li>{{ ShowRGB }}</li>
          <li>HEX : {{ HEX_Data }}</li>
          <li>{{ ShowHSL(0) }}</li>
        </ul>
        <div class="ColorPickerBarWrap">
          <div 
           ref="ColorPickerBar"  
           class="ColorPickerBar"   
           @mousedown.prevent="DragColorSlider "  
          >
            <div
             ref="ColorPickerSlider"
             class="ColorPickerSlider"
             >
            </div>
          </div>
        </div>
        <div class="CustomizeColor">
          <label>Find Color :</label>
          <div>
              
            <span>R: </span><input 
              type="number" 
              v-model="Cust_R" 
              min="0" 
              max="255" 
              placeholder="0 ~ 255"  
              required 
              >
            <span>G: </span><input 
             type="number" 
             v-model="Cust_G" 
             min="0" 
             max="255" 
             placeholder="0 ~ 255" 
             required
            >
            <span>B: </span><input 
             type="number"  
             v-model="Cust_B" 
             min="0" 
             max="255" 
             placeholder="0 ~ 255" 
             required
            >
          </div>
          <button @click="SendCustColor" >Send!</button>
        </div>
      </div>
      <div  class="ColorPickerAreaRight" >
        <ul class="ReferenceColor">
          <li :style=DiffColor(180)><span> {{ ShowHSL(180) }}</span></li>
          <li :style=DiffColor(30)><span>  {{ ShowHSL(30)  }}</span></li>
          <li :style=DiffColor(-30)><span> {{ ShowHSL(-30) }}</span></li>
        </ul>
      </div>
    </div>
    <div class="DecoLine"></div>
    <div class="ToolWrap">
      <label>Pixel Tool</label>
      <div class="HorizonWrap">
        <div class="ChoseSize ">
          <label>Size:</label>
          <div>
            <select v-model.number.lazy="EachBitAmount" 
            onfocus='this.size=4;' 
            onblur='this.size=0;' 
            onchange='this.size=1; this.blur();'
            @change="ReRenderCanvas"
            >
              <option value="8">8x8</option>
              <option value="16">16x16</option>
              <option value="32">32x32</option>
              <option value="64">64x64</option>
            </select>
            <label for="CustomizeSize">Other size:</label>
            <input id="CustomizeSize"
                   type="number"
                   v-model.number.lazy="EachBitAmount"
                   placeholder="max:80"
                   max="80"
                   min="1"
                   @change="ReRenderCanvas"
            >
          </div>
        </div>
        <div class="StorageWrap">
          <ul class="DefaultColor">
            <template  v-for="n in DefaultColorArray" :key="n">
              <li  
                @mousedown="ClickedDefaultCell( $event)"
                :style="SelectedColor(n)"  
              ></li>
            </template>
          </ul>
          <ul class="ColorStorage">
            <template  v-for="n in DefaultColorArray.length" :key="n">
              <li 
               @mousedown="PutinColor( $event )"
              
              ></li>
            </template>
          </ul>

        </div>
      </div>
    </div>

      <div class="PixelPanelWrap">
        <canvas 
         ref="PixelPanel"  
         id="PixelPanel"
         :width="CalcCanvasLength"
         :height="CalcCanvasLength"
         @mousedown="Panel_PosClick($event)"
         @mousemove="Panel_PosMove($event)"
         @mouseup="isMousedownOnPanel = false"
         @mouseleave="isMousedownOnPanel = false"
        >
        </canvas>
      </div>


    <div id="bbbbb" ref="bbbbb"  ></div>

  </div>

</template> 




<script lang="ts">
  import { defineComponent  , ref , onMounted,onBeforeUnmount,watch,
     watchEffect,computed,onUpdated } from "vue";
  
  export default defineComponent({
    name: "SimplePixelTool",
    components: {
    },
    setup(){
      /*ref取進行元素屬性值的操作，目前只想到在onMounted將數值丟回setup的變數
       ，然後在函式使用時加上(變數!==undefined 進行判斷)，否則TS檢查會報錯*/
//color pick相關
      const ColorPickerBar  = ref<HTMLDivElement | null>(null);
      const ColorPickerSlider =  ref<HTMLDivElement | null>(null);

      const PickArea = ref<HTMLCanvasElement | null>(null);
      let ColorPickerCtx:any
      let PickerWidth :number | undefined
      let PickerHeight :number | undefined
      let anchor = ref<HTMLDivElement | null>(null);
      const PreviewArea = ref<HTMLDivElement | null>(null);
      let Bar_Width :number | undefined

//data
      let RGB_Data = ref(["0","0","0"])
      let HEX_Data =ref("#")
      let HSL_Data = ref(["0","0","0"])
      let NowRGBColor = ref(["0","0","0"])
      let tmp_offsetX = 1 , tmp_offsetY = 1
      let Cust_R = ref(0)
      let Cust_G = ref(0)
      let Cust_B = ref(0)

      const GetMountedEleInfo = () =>{
  //color pick面板處理
        Bar_Width = ColorPickerBar.value?.clientWidth;
        ColorPickerCtx = PickArea.value?.getContext("2d" , { willReadFrequently: true } )
        PickerWidth = PickArea.value?.clientWidth
        PickerHeight = PickArea.value?.clientHeight

        ColorPickerCtx.fillStyle=`hsl(0,100% ,50%)`
        ColorPickerCtx.fillRect(0, 0, PickerWidth, PickerHeight);
        DrawColorPickerGradient(ColorPickerCtx , PickerWidth , PickerHeight)

//Pixel 畫圖版
        Canvastx = PixelPanel.value?.getContext("2d")
        ReRenderCanvas()

      }













      const DrawColorPickerGradient = (ctx:any, Width:any , Height:any)=>{
        let WhiteLayer = ctx.createLinearGradient( 0, 0, Width , 0 );
         WhiteLayer.addColorStop(0.01, 'rgba(255,255,255,0)');
         WhiteLayer.addColorStop(0.99, 'rgba(255,255,255,1)');
         WhiteLayer.addColorStop(1, 'rgba(255,255,255,1)');
         ctx.fillStyle = WhiteLayer ;
         ctx.fillRect( 0, 0, Width, Height );

        let BlackLayer = ctx.createLinearGradient( 0, 0, 0, Height );
         BlackLayer.addColorStop(0.01, 'rgba(0,0,0,0)');
         BlackLayer.addColorStop(1, 'rgba(0,0,0,1)');
         ctx.fillStyle = BlackLayer;
         ctx.fillRect( 0, 0, Width, Height );
      }

      const DotMove = (e:any)=>{
        
        if(e.button == 2)
         return

        let selected_ele =  e.target
        let Picker_L  = PickArea.value?.getBoundingClientRect().left
        let Picker_T  = PickArea.value?.getBoundingClientRect().top
 //       console.log(` clientY ${e.clientY}  x  Picker_T ${Picker_T}`)
        if (Picker_L !== undefined  && Picker_T !== undefined) {
          let outside_mouseX = e.clientX - Picker_L
          let outside_mouseY = e.clientY - Picker_T
      //    console.log(` Picker_L ${Picker_L} mouseX:${outside_mouseX} ${outside_mouseY} `)
          outside_mouseX <= 0 ? outside_mouseX = 0 : outside_mouseX
          outside_mouseX >= 400 ? outside_mouseX = 400-1 : outside_mouseX
          outside_mouseY <= 0 ? outside_mouseY = 0 : outside_mouseY
          outside_mouseY >= 150 ? outside_mouseY = 150 : outside_mouseY
          SettingColor(ColorPickerCtx,outside_mouseX,outside_mouseY)
         anchor.value?.style.setProperty('left', `${outside_mouseX}px`)
         anchor.value?.style.setProperty('top', `${outside_mouseY}px`)

        }
        

        if(selected_ele.getAttribute("class") === "PickArea" ){
          let x  = e.offsetX
          let y  = e.offsetY
          SettingColor(ColorPickerCtx,x,y)
          anchor.value?.style.setProperty('left', `${x}px`)
          anchor.value?.style.setProperty('top', `${y}px`)
      }


        document.addEventListener('mousemove', DotMove );
        document.addEventListener('mouseup',   CanelPickerListener  );

       }


       const rgb2Hex = (rgb:string[])=>{
        HEX_Data.value = "#"
        rgb.forEach( (each:string  ) =>{ 
        let hexValue = parseInt(each, 10).toString(16);
        if( parseInt(each, 10) < 16 ){
          HEX_Data.value  += "0"
        }
        HEX_Data.value  += hexValue
        })  
       }

       const rgbToHsl = (r:number, g:number, b:number)=> {
        r /= 255, g /= 255, b /= 255;
        let max = Math.max(r, g, b);
        let min = Math.min(r, g, b);
        let h = 0, s
        let l = (max + min) / 2;

        if (max == min) {
            h = s = 0;
        } 
        else {
            let d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch(max) {
                case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                case g: h = (b - r) / d + 2; break;
                case b: h = (r - g) / d + 4; break;
            }
            h /= 6;
        }
        HSL_Data.value[0] = (Math.floor(h * 360) ).toString()
        HSL_Data.value[1] = ( Math.floor(s * 100) ).toString()
        HSL_Data.value[2] = ( Math.floor(l * 100) ).toString()
       // return 'hsl(' + Math.floor(h * 360) + ',' + Math.floor(s * 100) + '%,' + Math.floor(l * 100) + '%)';
      }


      const ShowHSL = (offset: number) =>{
        return `HSL : ${ CalcuHue(offset) } , ${HSL_Data.value[1]}% , ${HSL_Data.value[2]}%`
      }

      const ShowRGB = computed(()=>{
        return `RGB : ${RGB_Data.value[0]} , ${RGB_Data.value[1]} , ${RGB_Data.value[2]}`
      })
      const DiffColor = (offset: number)  =>{
        return `background-color: hsl(${ CalcuHue(offset) }, ${HSL_Data.value[1]}% , ${HSL_Data.value[2]}%);`
      }
      const CalcuHue =  (offset: number)  =>{
        let hue = (parseInt(HSL_Data.value[0],10) + offset  ) % 360
        hue =  hue < 0 ? hue + 360 : hue
         return hue
      }
      const SendCustColor =  ()  =>{
        let r = RGB_Num(Cust_R.value)
        let g = RGB_Num(Cust_G.value)
        let b = RGB_Num(Cust_B.value)

       ColorDataTransform( r.toString() ,g.toString() , b.toString()) 
       if(Bar_Width){
          let bar_x = ( parseInt(HSL_Data.value[0],10) * Bar_Width ) / 360
        
          ColorPickerCtx.fillStyle=`hsl(${HSL_Data.value[0]},100% ,50%)`
          ColorPickerCtx.fillRect(0, 0, PickerWidth, PickerHeight);
          DrawColorPickerGradient(ColorPickerCtx , PickerWidth , PickerHeight)

          PreviewArea.value?.style.setProperty('background-color', `rgb(${RGB_Data.value[0]},${RGB_Data.value[1]} ,${RGB_Data.value[2]})`); 
          ColorPickerSlider.value?.style.setProperty('left', `${ bar_x }px`)
          anchor.value?.style.setProperty('left', `1px`)
          anchor.value?.style.setProperty('top', `1px`)

       }
      }
      const RGB_Num =   (Num :number)=>{
        if(Num >255){
          Num = 255
        }
        else if(Num < 0 || Num === null  || Num === undefined ){
          Num = 0
        }
           return Num
      }
      const ColorDataTransform  = (input_R:string , input_G:string , input_B:string) =>{
        RGB_Data.value[0] = input_R
        RGB_Data.value[1] = input_G
        RGB_Data.value[2] = input_B
        NowRGBColor.value = RGB_Data.value
        rgb2Hex( RGB_Data.value)
        rgbToHsl(parseInt( RGB_Data.value[0], 10)  ,
                 parseInt( RGB_Data.value[1], 10)  ,
                 parseInt( RGB_Data.value[2], 10) )
      }



      const SettingColor = (ctx:any, pos_x:number, pos_y:number )=>{

        let pixel = ctx.getImageData(pos_x,pos_y,1,1).data
        PreviewArea.value?.style.setProperty('background-color', `rgb(${pixel[0]},${pixel[1]} ,${pixel[2]})`); 
        ColorDataTransform(pixel[0] ,pixel[1] ,pixel[2]) 

        tmp_offsetX = pos_x
        tmp_offsetY = pos_y
        isUsingCustCell = false
      }

       const CanelPickerListener = ()=>{
         document.removeEventListener('mousemove', DotMove );
         document.removeEventListener('mouseup', CanelPickerListener );


       }
       const CanelBarListener = ()=>{
         document.removeEventListener('mousemove', DragColorSlider );
         document.removeEventListener('mouseup', CanelBarListener );

       }



      const DragColorSlider = (e:any)=>{

        if(e.button == 2)
         return

        if(  Bar_Width !== undefined ){

            //getBoundingClientRect的長寬會包含padding的距離，而且不是根據渲染視覺上看到的長寬，所以不會算transform之後的長寬
          let BarToWindowOffset_L  = ColorPickerBar.value?.getBoundingClientRect().left
          if (BarToWindowOffset_L !== undefined ) {
               //要加上wrap的padding距離 + 形狀寬度/2
            let offset_X = e.pageX - ( Math.floor(BarToWindowOffset_L) + 12 )
            if(offset_X <= 0 ){
              offset_X = 0
            }
            else if( offset_X >= Bar_Width ){     
              offset_X =  Bar_Width
            }

            let HSL_Value = ( ( offset_X / Bar_Width ) * 360)
            ColorPickerSlider.value?.style.setProperty('left', `${offset_X}px`)
            ColorPickerCtx.fillStyle=`hsl(${HSL_Value},100% ,50%)`
            ColorPickerCtx.fillRect(0, 0, PickerWidth, PickerHeight);

            DrawColorPickerGradient(ColorPickerCtx , PickerWidth , PickerHeight)
            SettingColor(ColorPickerCtx , tmp_offsetX , tmp_offsetY )
          }
        }

        document.addEventListener('mousemove', DragColorSlider );
        document.addEventListener('mouseup',   CanelBarListener   );


      }


      onMounted(() => {
        GetMountedEleInfo()
      })


//存顏色區塊
   let DefaultColorArray  =[ "rgb(0,0,0)" , "rgb(80,80,80)", "rgb(255,255,255)" ,"rgb(255,0,0)" ,"rgb(255,255,0)" , "rgb(0,80,0)", "rgb(0,0,255)" ,]
   let  isUsingCustCell = false

   const PickColor = ( e :any )=>{
     let selectedArea = e.target
     let RGB =  selectedArea.style.getPropertyValue('background-color');
     let reg = /[^0-9,]/g
     let RGB_Arr = RGB.replace(reg,'').split(',')
     NowRGBColor.value = RGB_Arr
     console.log(`PickColor :: ${NowRGBColor.value} `)
   }

   const ClickedDefaultCell = (e:any)=>{ 
    PickColor(e)
   }


   const PutinColor = ( e :any )=>{

     let selectedArea = e.target
     if(isUsingCustCell === false ){
      isUsingCustCell = true
      selectedArea.style.setProperty('background-color', `rgb(${NowRGBColor.value[0]},${NowRGBColor.value[1]} ,${NowRGBColor.value[2]})` )
     }
     PickColor(e)
   }

   const SelectedColor = (x:any)=>{ 
     return `background-color: ${x};`
   }

// pixelPanel
   let PixelPanel = ref<HTMLCanvasElement | null>(null);
   let Canvastx :any
   let EachBitSize = 10
   let EachBitAmount :any = ref(8)



   const CalcCanvasLength = computed( ()=> EachBitSize * EachBitAmount.value  )



    let isMousedownOnPanel = ref(false)
    const Panel_PosClick = (e:any)=>{
      if(e.button == 2)
        return
      Canvastx.globalAlpha = 1
      //因為有padding，所以讓點擊時和預期座標有出入，扣掉一邊padding修正
      let Now_Row =  Math.floor( ( e.offsetX - 5 ) / EachBitSize)
      let Now_Col =  Math.floor( ( e.offsetY - 5 ) / EachBitSize)
      isMousedownOnPanel.value = true
      Canvastx.fillStyle =` rgb(${NowRGBColor.value[0]},${NowRGBColor.value[1]} ,${NowRGBColor.value[2]}) `;
      Canvastx.fillRect( Now_Row*EachBitSize , Now_Col*EachBitSize , EachBitSize, EachBitSize);
       console.log(" click now is " + e.offsetX +" and " + e.offsetY )
    }
    const Panel_PosMove = (e:any)=>{
      if(isMousedownOnPanel.value === true){
         let Now_Row =  Math.floor( ( e.offsetX - 5 ) / EachBitSize)
         let Now_Col =  Math.floor( ( e.offsetY - 5 ) / EachBitSize)
         Canvastx.fillRect( Now_Row*EachBitSize , Now_Col*EachBitSize  , EachBitSize, EachBitSize);

       }
    }
    const ReRenderCanvas = ()=>{

         Canvastx.clearRect(0, 0, CalcCanvasLength , CalcCanvasLength );
         Canvastx.globalAlpha = 0.5
//記得在canvas處設定寬跟高，否則形狀會跑掉，設定canvas tag內的寬高就好 style的寬高如果有設定最好跟canvas的一致，否則會有因縮放產生色差(因為canvas是像素繪圖)
         for(let i = 0; i < EachBitAmount.value ; i++){
           for(let j = 0; j < EachBitAmount.value ; j++){
             
             (i+j) % 2 == 0 ? Canvastx.fillStyle = "black"  : Canvastx.fillStyle = "white" ;
             Canvastx.fillRect( i*EachBitSize , j*EachBitSize , EachBitSize , EachBitSize );
           }
         }
    }






    //  onUpdated(() => {  ReRenderCanvas() }),
      watchEffect(()=>{
        console.log(NowRGBColor.value[0], NowRGBColor.value[1] , NowRGBColor.value[2],)

      })


      return  { PickArea ,PickerWidth,PickerHeight,anchor,DotMove, HEX_Data,HSL_Data,ShowHSL,
         ColorPickerBar,DragColorSlider ,PreviewArea ,ColorPickerSlider, 
        EachBitAmount , DefaultColorArray , SelectedColor , PickColor  , PutinColor , 
        PixelPanel ,  Panel_PosClick , Panel_PosMove , isMousedownOnPanel , CalcCanvasLength
        , RGB_Data, ClickedDefaultCell , ReRenderCanvas , ShowRGB  , DiffColor ,
        Cust_R , Cust_G ,Cust_B, SendCustColor
      }
    }
  });
</script>


<style scoped lang="scss">

label{
  font-size: 40px;
  color: $MainColor;
  margin: 10px 0;
}

#PreviewArea{
  width: 300px;
  border: rgb(178, 224, 102) 1px solid;
  height: 200px;
//  background-color: hsl( 55.5 ,100% ,50%)
};
  
.testScale{
    margin: 20px auto;
    padding-left: 20px;
    padding-right: 20px;
    border: $MainColor 1px solid;
    width: 80%;
 
   background-color: $MainColorBG;
}

.ColorPickerArea{
  display: flex;
  justify-content: flex-start;
  margin-bottom: 20px;

  @include RWD_phone(1024px){
    flex-direction: column;
  }
}
.ColorPickerAreaLeft{
  user-select:none;

 & > label{
    display: block;
    text-align: left;
  }
  .ColorPickerPanel{
    @include decoration_position(relative, null ,null ,null ,null  );
    border: 1px $MainColor solid;
    display: flex;
    @include RWD_phone(1024px){
      margin: 0 10%;
      }

    .PickArea{
      cursor: crosshair;

    }

    .PreviewArea{
      width: 100%;
      border-left: 1px $MainColor solid;

    }
    .anchor{
        @include decoration_position(absolute, 2px ,null ,null ,5px  );
        width: 10px;
        height: 10px;
        border: 2px $MainColor solid;
        background-color: $MainColorBG;
        border-radius: 50%;
        transform: translate(-50% ,-50%);
        pointer-events: none;
      }
  }
  .SelectedColorInfo{
    display: flex;
    align-items: center;
    justify-content: space-around;
    column-count:3;
    margin-top: 10px;

    color: $ViceColor;

    li{
      font-size: 20px;
    }
  }

  .ColorPickerBarWrap{
    margin: 10px 0 ;

    height: 40px;
    width: 450px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 20px;
    padding-right: 20px;

    @include RWD_phone(1024px){
      margin:   0 auto ;
    }

  }
  .ColorPickerBar{
    width: 100%;
    height: 12px;
    background: linear-gradient(to right,
        hsl(0,100%,50%)  ,hsl(60,100%,50%) ,hsl(120,100%,50%),
        hsl(180,100%,50%),hsl(240,100%,50%),hsl(300,100%,50%),
        hsl(360,100%,50%));
    border-radius: 20px;
    cursor: pointer;

    @include decoration_position(relative,null,null,null,null);
    .ColorPickerSlider{
      @include decoration_position(absolute,-4px,null,null, 0px );
       width: 20px;
       height: 20px;
       background-color: $MainColor;
       pointer-events: none;
       transform: translate(-50%,0);

    }
  }
  .CustomizeColor{
    display: flex;
    align-items: center;
    justify-content: space-around;
    overflow: hidden;

    & > div{
      display: flex;
    }
    & > label{
      font-size: 26px;
    }


    span{
      display: flex;
      justify-content: center;  
      align-items: center; 
      margin: auto 0;
      font-size: 26px;
      width: 26px;
      color: black;

      &:nth-child(1){ background-color: rgb(255,0,0);  }
      &:nth-child(3){ background-color: rgb(0,255,0);  }
      &:nth-child(5){ background-color: rgb(0,0,255);  color: white; }
    }

    input[type="number"]{
      outline: none;
      border: none;
      width: 50px;
      background-color: transparent;
      color: $MainColor;
      border-bottom: 1px $MainColor solid;
      margin: 0px 6px 4px 6px;
      
      &::placeholder{
        color: rgba(5,217,232,0.4);
      }
      &:focus{
        background-color: rgba(55, 145, 100, 0.5) ;
      }
    }
    button{
      border:1px $MainColor solid ;
      padding: 6px;
      font-size: 14px;
      background-color:$MainColorBG ;
      border-radius: 20px;
      color:  $MainColor ;

      box-shadow:0px 0px 3px 3px rgba(0, 0, 0, 0.7) inset;
      &:hover{
        cursor: pointer;
        background-color: rgba(37, 90, 134, 0.493);
        box-shadow:none;
      }
      &:active{
        transform: translate(1px , 2px);
        background-color: $MainColor;
        color: $MainColorBG ;
        box-shadow:none;
      }


    }
  }



  /*<input type="range" min="0" max="360" step="1" value="0">
  input[type=range]{
    width: 80%;
    height: 10px;
    -webkit-appearance: none;
    appearance: none;
    background-color: red;
    &::-webkit-slider-thumb{
      background: linear-gradient(to right,
        hsl(0,100%,50%),hsl(60,100%,50%),hsl(120,100%,50%),
        hsl(180,100%,50%),hsl(240,100%,50%),hsl(300,100%,50%),
        hsl(360,100%,50%));
      border-radius: 20px;
    }
    &::-webkit-slider-thumb{
      height: 16px;
      width: 6px;
      background-color: purple;
    }

  } 
  input[type=range]::-webkit-slider-runnable-track {
  width: 100%;
  height: 11px;

  background: #ffffff;

  }   */
}




.ColorPickerAreaRight{
  width: 50%;
  @include RWD_phone(1024px){
    width: 70%;
    margin: 0 auto;
  }


  .ReferenceColor{
    column-count:1;
    margin-top: 30px;
    margin-left: 20px;
    @include RWD_phone(1024px){
      margin-left: 0px;

    }

    li{
      height: 80px;
      border: $MainColor 1px solid;
      margin-bottom: 30px;
      @include decoration_position(relative,null,null,null,null);
      box-shadow: inset 0 0 2px 4px $MainColorBG;

      @include RWD_phone(1024px){
        height: 50px;
      width: 100%;
      }

      span{
        @include decoration_position(absolute,null ,null,12px,8px);
         background-color: rgba(63, 59, 59, 0.589);
         color: $ViceColor;
         padding: 2px;


      }

      &::before{
        padding: 6px;
        color: $MainColor;
        font-size: 20px;
        background-color: $MainColorBG;
        word-break:nowrap;
        @include decoration_position(absolute,-16px ,null,null,10px);
        content: "Analogous color";

      }
      &:nth-child(1)::before{ content: "Complementary Color"; }

    }
  }
}
#PixelPanel{
 // display: flex;
 // flex-wrap: wrap;

  border: 1px $MainColor solid;
  aspect-ratio: 1 / 1;
  padding: 5px;
  margin: 40px 0;
}

.PixelPanelWrap{
  display: flex;
  justify-content: center;

}
.hi{
    
    width: 10px;
    height: 10px;
    &:nth-child(odd){
        background-color: green;
    }
    &:nth-child(even){
        background-color: yellowgreen;
    }

}

.DecoLine{
  width: 100%;
  height: 1px;
  background-color: $MainColor ;
  margin: 20px 0;
}
.HorizonWrap{
  display: flex;
  align-items: center;
  align-items: flex-end;
}
.ToolWrap{

  label{
    display: block;
    text-align: left;
  }
}

.ChoseSize{

  & > label{
    display: block;
    font-size: 26px;
  }

  & > div{
    display: flex;
    justify-content: center;
    @include decoration_position(relative, null , null, null, null);
    label{
      margin-left: 80px;//針對select的排版處理
      font-size: 18px;
    }
  }

  select{
    color: $MainColor;
    background-color: $MainColorBG ;
    border-radius: 2px ;
    border: 2px  $MainColor solid;
    padding: 4px 2px 4px 2px;
    font-size: 14px;
    @include decoration_position(absolute, 50% , null, null, 0px);
    transform: translate(0, -50%);
    outline: none;

    &::-webkit-scrollbar-thumb{
      background-color: $MainColor ;
      background-clip: content-box; 
      border: 2px solid transparent ;
    }
    &::-webkit-scrollbar{  
      width: 6px;
    }
    &::-webkit-scrollbar-track{
      background-color:  $MainColorBG ;
    }
    option{
      margin: 2px;
 //hover顏色生效需要在select tag處加上這段語法onfocus='this.size=4;'  onblur='this.size=0;'   onchange='this.size=1; this.blur();'
      &:hover{ background: $ViceColorDark ;}
    }

  }
}


.StorageWrap{
  margin-left: 20px;
}

.DefaultColor,
.ColorStorage{
  display: flex;
  
  li{
    width: 20px;
    height: 20px;
    background-color: wheat;
    margin: 2px;
    border: 1px $MainColor solid;
    box-shadow: inset 0 0 0 2px $MainColorBG ;
    &:hover{
      border: 1px $EmphsizeColor solid;
    }
  }

}
.ColorStorage li{
  background-color: transparent;

}

#CustomizeSize{
  appearance: none;
  color: $MainColor ;
  display: block;
  background-color: transparent;
  border: 0;
  border-bottom: 2px  $MainColor solid;
  margin: 6px;
  width: 60px;
  outline:none;

  &:focus{
    background-color: rgba(55, 145, 100, 0.3);
  }
  &::placeholder{
    color: rgba(5,217,232,0.4);
  }
}


.xc{
    width: 10px;
    height: 10px;

}
</style>