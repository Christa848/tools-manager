<template>
     <b-card
    
    border-variant="success"
    img-top
    tag="article"
    id="due"
    class="mb-2"
  >

    <h6> <b-icon icon="exclamation-triangle-fill" variant="warning" scale="1.5"></b-icon>    Due Today </h6>
    <h4>{{data.length}}</h4>
    <hr v-if="active === 'dueToday_active'" class="activebar">
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
      const res = await fetch('http://itrackdevs.geo-fuel.com/tools_manager_api/getticketCard.php?action=duetoday');
      const data = await res.json();
      this.data = data;
    }
  }

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