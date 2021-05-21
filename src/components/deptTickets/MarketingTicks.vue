<template>
    <div>
    <h6>Marketing </h6>
    
    <hr v-if="active === 'marketing_active'" class="activebar">
 </div>
</template>
<script>
export default {
    props: ['active'],
     data(){
      return{
     
      }
    },

  

}
</script>
<style>
#due:hover{
transform: scale(1.1);
}
.activebar{
  background-color: green;
}
</style>