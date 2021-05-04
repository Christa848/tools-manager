<template>
     <b-card
    
   border-variant="success"
    img-top
    tag="article"
    id="uns"
    class="mb-2"
  >

  <h6> <b-icon icon="exclamation-circle-fill" variant="danger" scale="1.5"></b-icon>    Unsolved </h6>
  <h4>{{data.length}}</h4>
  <hr v-if="active === 'unsolved_active'" class="activebar">
  </b-card>
</template>
<script>
export default {
   props: ['active'],
    data(){
      return{
        data:[], 
        
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
#uns:hover{
  transform: scale(1.1);
}
.activebar{
  background-color:green;
}
</style>
