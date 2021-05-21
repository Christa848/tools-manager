<template>

  <div id="tabb">
<b-row >
  <b-col cols="2">
    
    </b-col>
   
      <div>
        
    
    
      
<div>
    <b-form @submit="createContact" @reset="onReset" v-if="show">


      <b-form-group id="input-group-2" label=" Company Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="Name"
          placeholder=" name"
          required
        ></b-form-input>
      </b-form-group>

          <b-form-group id="input-group-4" label="Region:" label-for="input-2">
        <b-form-input
          id="input-4"
          v-model="Region"
          placeholder=" region"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Contact:" label-for="input-2">
        <b-form-input
          id="input-3"
          v-model="Contact"
          placeholder="contact"
          required
        ></b-form-input>
      </b-form-group>

     

            <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="Email"
          type="email"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>

           <b-form-group id="input-group-6" label="Adress:" label-for="input-2">
        <b-form-input
          id="input-6"
          v-model="Adress"
          placeholder="adress"
          required
        ></b-form-input>
      </b-form-group>

      

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    
  </div>




      
      
   
  </div>

   
    </b-row>
     
  


  
</div>
</template>
<script>
 import axios from 'axios';
   export default{

  data (){ return{
    filter: "",
    data: []

    ,

    form: {
          email: '',
          name: '',
          food: null,
          checked: []
        },
        show: true,

         Name:"",
          Region:"",
          Contact:"",
          Adress:"",
          Email:""
    

         

    
      }
              
        
      
  },
 beforeMount(){
    this.getName();
  },
  methods: {
    async getName(){
      const res = await fetch('http://itrackdevs.geo-fuel.com/tools_manager_api/getComcontacts.php');
      const data = await res.json();
      this.data = data;
    },

    createContact: function(){
        console.log("Create contact!")

        let formData = new FormData();
        console.log("Name:", this.Name),
        console.log("Region:", this.Region),
        console.log("Contact:", this.Contact),
        console.log("Email:", this.Email),
        console.log("Adress:", this.Adress),
        
        

        formData.append('Name', this.Name),
        formData.append('Region', this.Region),
        formData.append('Contact', this.Contact),
        formData.append('Email', this.Email),
        formData.append('Adress', this.Adress)
        
        
           
        var contact = {};
        formData.forEach(function(value, key){
            contact[key] = value;
        });

        axios({
            method: 'post',
            url: 'http://itrackdevs.geo-fuel.com/tools_manager_api/companiesCont.php',
            data: formData,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
        })
       
        .catch(function (response) {
            //handle error
            console.log(response)
            
        });
    },



            onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.Email = ''
        this.Name = ''
        this.Address 
        
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
            },


  
   
  },
  
 
};

</script>

<style scoped>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

th {
  background-color: #dddddd;
}

input[type=text], select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid lawngreen;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 25px;
}
#srch{
  width: 180px;
}
#not{
  margin-top: 25px;
}
</style> -->





<style>
#app{
  margin-top: 10px;
}
#back{
  margin-left: 98%;
  margin-top: 2px;
}

</style>


