<template>
     <b-card
    border-variant="info"
    tag="article"
    class="mb-2"
    id="rc"
  >
<p>
Received</p> 
<h3>{{data.length}} </h3>   
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
      const res = await fetch('http://itrackdevs.geo-fuel.com/tools_manager_api/getAllmail.php');
      const data = await res.json();
      this.data = data;
    }
  }
   
}
</script>
<style>
#rc:hover{
 color: thistle;
}
</style>