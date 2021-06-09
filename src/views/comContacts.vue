<template>
<div>
<!-- <div id="bar">

       <b-card>
  <b-row>
  <b-col>
    <b-nav-form>
 <b-form-checkbox
      id="checkbox-2"
      v-model="status"
      name="checkbox-2"
      value="accepted"
      unchecked-value="not_accepted"
    >
    
    </b-form-checkbox>

      <b-form-input class="mr-sm-2" placeholder="Search"></b-form-input>
      <b-button variant="outline-success" class="my-2 my-sm-0" type="submit" >Search</b-button>
      
     
    </b-nav-form>
    </b-col>
   <b-col>

   <router-link to="/home" class ="iterms"> <b-icon icon="x-circle" scale="1.5" variant="danger" id="back" v-b-popover.hover="'Exit'"></b-icon></router-link>
 
    </b-col>
    </b-row>
    </b-card>
</div>

 -->


 <b-row>
   <b-col cols="12">
<company/>
   </b-col>
   <b-col>
     <!--filtercoming here -->
    <!-- <filters /> -->
   </b-col>
</b-row>
</div>
</template>

<script>
import company from "@/components/contacts/companies.vue";
//import filters from "@/components/contacts/contact-filter.vue";
export default {
  name:"comContacts",
  components:{
  company,
  // filters
  }
}
</script>
<style>
#bar{
  background: white;
}
#back{
  margin-left: 95%;
  margin-top: 2px;
}

</style>