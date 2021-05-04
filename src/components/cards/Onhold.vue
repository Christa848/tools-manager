<template>
     <b-card
    
    border-variant="success"
    img-top
    tag="article"
    id="on"
    class="mb-2"
  >

    <h6> <b-icon icon="dash-square-fill" scale="1.5" variant="success"></b-icon>  Onhold</h6>
   <h4> {{data.length}} </h4>
    <hr v-if="active === 'onhold_active'" class="activebar">
  </b-card>
</template>
<script>
export default {
   props: ['active'],
   data(){
      return{
        data:[], 
        selected:[],
      }
    },

    beforeMount(){
    this.getName();
  },
  methods: {
    async getName(){
      const res = await fetch('http://itrackdevs.geo-fuel.com/tools_manager_api/getticketCard.php');
      const data = await res.json();
      this.data = data;
    }
  }

}
</script>
<style>
#on:hover{
  transform: scale(1.1);
}
.activebar{
  background-color:green;
}
</style>