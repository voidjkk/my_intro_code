<template>

  
    
    <ContactPage></ContactPage>
  
</template>


<script lang="ts">
import { defineComponent } from "vue";

 import ContactPage from "../components/ContactPage.vue"



export default defineComponent({
  name: "ContactView",
  components: {
    ContactPage,
    
  },
});
</script>

<style scoped lang="scss">



</style>