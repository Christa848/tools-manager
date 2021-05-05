<template>
     <b-card
    border-variant="info"
    tag="article"
    class="mb-2"
    id="rs"
  >
<p>
Resolved</p> 
<h3>{{data.length}}   </h3>
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
      const res = await fetch('http://itrackdevs.geo-fuel.com/tools_manager_api/getticketCard.php?action=resolved');
      const data = await res.json();
      this.data = data;
    }
  }
   
}
</script>
<style>
#rs:hover{
 color: thistle;
}
</style>