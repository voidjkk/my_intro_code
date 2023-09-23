<template>
  <div class="footerBG">

    <div @click="GoToTop" class="ToTopBtn" >
      <span class="material-symbols-outlined">arrow_upward</span>
    </div>

    <div class="FooterBtnScale">
      <router-link v-for="route in BtnData" :key="route.path" :to="route.path">
           <div class="FooterButton">
             <p>{{route.name}}</p>
           </div>

      </router-link>
    </div>

    <div class="FooterBtnScale"> 
      <a href="mailto:jack91423@gmail.com" class="FooterIcon" >
        <i class="fas fa-envelope-square"></i>
      </a>
      <a href="https://github.com/voidjkk?tab=repositories" target="_blank" class="FooterIcon">
        <i class="fab fa-github" ></i>
      </a>
    </div>

  </div>


  <div class="FooterEnd">All page made by Ken. 2023</div>
</template>






<script lang="ts">
  import { defineComponent } from "vue";

  import router from "../router";

  
export default defineComponent({
  name: "SimpleFooter",
    components: {    },
    setup(){
      const BtnData = router.options.routes
      const GoToTop = () =>{
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });  
      }
      return {BtnData , GoToTop}
    }
  });
</script>

<style lang="scss" scoped>




a{
  color: $EmphsizeColor;
  font-weight: bold;

  &:active{
    color: $ViceColorDark;
  }
  &:hover{
    color: $ViceColor;
  }
}



.FooterIcon{
  margin: 0;
}

.ToTopBtn{
  padding: 5px;
  background-color: rgba(0,120,170,0.3);
  border: $MainColor 1.5px solid;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: $MainColor ;

  &:active{
    transform: translateY(4px);
    box-shadow:1px 1px 10px 3px rgba(0, 0, 0, 0.7) inset;
  }

  &:hover{
    background-color: rgba(0,120,170,0.5);
  }
  .material-symbols-outlined {
    font-variation-settings:
    'FILL' 0,
    'wght' 600,
    'GRAD' 0,
    'opsz' 40
  }


}







.footerBG{
  height: 10vh;
  width: 100%;
  background-color: $MainColorBG;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  
}

.FooterButton{
  padding: 2px;
  font-size: 22px;
}
.FooterBtnScale{
  display: flex;
  align-items: center;

  i{
    font-size: 24px;
    color: $ViceColorDark ;
    padding: 5px;

    &:hover{
      
      color: $MainColor ;
    }
  }
}

.FooterEnd{
  background-color: $MainColorBG ;
  font-size: 12px ;
  color: $MainColor ;
  margin: 0 auto;
  padding: 6px;
  letter-spacing: 2px;
}
</style>