<template>
  <HomeTitle></HomeTitle>
  <MyInfo></MyInfo>
<div  ></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import HomeTitle from "../components/HomeTitle.vue"
import MyInfo from "../components/MyInfo.vue"

//style="height: 1100px; border: 1px green solid;"

export default defineComponent({
  name: "HomeView",
  components: {
    
     HomeTitle , MyInfo ,
  },
});
</script>
