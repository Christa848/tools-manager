<template>
  <b-container class="bv-example-row">
  <b-row>
    
    <b-col id="un">
        <H4>Uresolved Tickets</H4>
        <p><small> Accross Helpdesk</small><p/>
    <b-row>
    <b-col cols="8">Marketing</b-col>
    <b-col cols="4">8</b-col>
  </b-row>
  <hr>
  <b-row>
    <b-col cols="8">IT Surport</b-col>
    <b-col cols="4">35</b-col>
  </b-row>
  <hr>
  <b-row>
    <b-col cols="8">Accounting</b-col>
    <b-col cols="4">60</b-col>
  </b-row>
  <hr>
  <b-row>
    <b-col cols="8">Systems Development</b-col>
    <b-col cols="4">0</b-col>
  </b-row>
  
  </b-col>

  
    <b-col id="cs"><h4> Cusomer Satisfaction</h4>
             <p> <small>Accross help desk this mounth</small></p>
<b-container class="bv-example-row">
  <b-row>
    <b-col>
         Responses received
        <H3>300</H3>
    
    </b-col>
    <b-col>Positive
        <h3> <b-icon icon="emoji-smile" scale="1" variant="success"></b-icon>27%</h3>
    </b-col>
    <hr>
    <div class="w-100"></div>
    <b-col>Negative
        <h3> <b-icon icon="emoji-frown" scale="1" variant="danger"></b-icon>27%</h3>
    </b-col>
    <b-col>Neutral
        <h3> <b-icon icon="emoji-neutral" scale="1" variant="warning"></b-icon>27%</h3>
    </b-col>
  </b-row>
</b-container>
    
    </b-col>
    
    
    <b-col id="td"><h4> To-do</h4>
    <p><small>Add a to do</small></p>
             
 <b-container class="bv-example-row">
  <b-row>

    <b-col><lowerbottom/></b-col>
    <div class="w-100"></div>
    <hr>
    
    
  </b-row>
</b-container>
    
    </b-col>
  
  
  </b-row>

 
 
</b-container>  
</template>
<script>

import lowerbottom from "@/components/checkbox/checked.vue";
export default {
    name:"lower",
    components:{
         lowerbottom


    },

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
#un{
  margin-right: 0.5rem;
  background-color: white;
}

#un:hover{
  transform: scale(1.1);
}
#cs{
  
  background-color: white;
  
}
#cs:hover{
transform: scale(1.1);
}
#td{
   margin-left: 0.5rem;
  background-color: white;
   
}
#td:hover{
transform: scale(1.1);
}
</style>