<template>
<div class="text-left">
    <b-card>
  <b-row>
<b-col cols="1">
  <div>
    <b-form-checkbox
      id="checkbox-2"
      v-model="selectAll"
      name="checkbox-2"
      value="accepted"
      unchecked-value="not_accepted"
     
    >
       </b-form-checkbox>
       </div>
</b-col>  
 <b-col cols="10">
    <b-dropdown id="dropdown-1" text="Assign" class="m-md-2" variant="outline-success">
    <b-dropdown-item>Support</b-dropdown-item>
     <b-dropdown-divider></b-dropdown-divider>
    <b-dropdown-item>Finance</b-dropdown-item>
     <b-dropdown-divider></b-dropdown-divider>
    <b-dropdown-item>Admin</b-dropdown-item>
     <b-dropdown-divider></b-dropdown-divider>
    <b-dropdown-item>Marketing</b-dropdown-item>
    <b-dropdown-divider></b-dropdown-divider>
   
  </b-dropdown>

   
    <b-navbar-brand><b-button variant="outline-success" class="my-2 my-sm-0" type="submit">Delete</b-button></b-navbar-brand>
    <b-navbar-brand><b-button variant="outline-success" class="my-2 my-sm-0" type="submit">Spam</b-button></b-navbar-brand>
 </b-col> 
 <b-col cols="1">
     <router-link to="/home" class ="iterms"> <b-icon icon="x-circle" scale="1.5" variant="danger" id="back" v-b-popover.hover="'Exit'"></b-icon></router-link>
  
 
 </b-col>


</b-row>
</b-card>
<b-row>


  <b-col cols="9" id="ticketing">
    
    <ol>
      <li v-for="ticket in data" :key="ticket.id">
        <b-card-text class="ticket-card" >
        <b-row  align-v="center">
          <b-col cols="1">
           <b-form-checkbox
           id="checkbox-1"
           v-model="selected"
           name="checkbox-1"
            :value="ticket.id" number
            
            
    >
    </b-form-checkbox> 
    </b-col>
    <b-col >

         <tick :name="ticket.name"
                :massage="ticket.massage"
                 :date="ticket.date"/> 
                 </b-col>
        </b-row>
         </b-card-text>
      </li>
    </ol>
   
  </b-col>
  <b-col>
    
    

 <div class="filter">
        <b-row>
            <b-col cols="3">
                <h6>Filters</h6>
            </b-col>
            <b-col cols="7">
                
            </b-col>
            <b-col cols="2">
                <h6>O</h6>
            </b-col>
        </b-row>

    <!-- select tag start -->
        <div>
            <b-form-group
            id="fieldset-1"
            label="Name:"
            label-for="input-1"
            >
            <b-form-select id="input-1" :options= "name"></b-form-select>
            </b-form-group>
        </div>
    <!-- select tag end -->
    <!-- select tag start -->
        <div>
            <b-form-group
            id="fieldset-2"
            label="Agent:"
            label-for="input-2"
            >
            <b-form-select id="input-2" :options= "agent"></b-form-select>
            </b-form-group>
        </div>
    <!-- select tag end -->
    
    

    </div>

    
  </b-col>
</b-row>
</div>
    
</template>
<script>

import tick from "@/components/tickets/ticket1.vue";

export default {
    name:"ticket",
    components:{
        tick
        
    },
    data(){
      return{
        data:[], 
        selected:[],
      }
    },


     computed: {
    selectAll: {
      get() {
        if (this.data && this.data.length > 0) { // A users array exists with at least one item
          let allChecked = true;

          for (const ticket of this.data) {
            if (!this.selected.includes(ticket.id)) {
              allChecked = false; // If even one is not included in array
            }
            
            // Break out of loop if mismatch already found
            if(!allChecked) break;
          }

          return allChecked;
        }

        return false;
      },
      set(value) {
        const checked = [];

        if (value) {
          this.data.forEach((ticket) => {
            checked.push(ticket.id);
          });
        }

        this.selected = checked;
      }
    }
    },

    
     beforeMount(){
    this.getName();
  },
  methods: {
    async getName(){
      const res = await fetch('http://itrackdevs.geo-fuel.com/tools_manager_api/getAllmail.php?action=read');
      const data = await res.json();
      this.data = data;
    }
  }

}
</script>
<style >


.nav2{
    background: white!important;
    margin-top: 0.9rem;
}
#ticketing{
  max-height: 500px;
  
  overflow-y: scroll;
}
#back{
  margin-left: 98%;
  margin-top: 2px;
}
</style>