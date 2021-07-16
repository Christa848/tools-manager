<template>
  <div id="tabb">
    <b-row>
      <div id="con">
        <b-form @submit="createContact" @reset="onReset" v-if="show">
          <b-form-group
            id="input-group-2"
            label="First Name:"
            label-for="input-2"
          >
            <b-form-input
              id="input-2"
              v-model="fname"
              placeholder=" name"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-4"
            label="Last Name:"
            label-for="input-2"
          >
            <b-form-input
              id="input-4"
              v-model="lname"
              placeholder=" last name"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-3" label="Contact:" label-for="input-2">
            <b-form-input
              id="input-3"
              v-model="contact"
              placeholder="contact"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-6" label="Adress:" label-for="input-2">
            <b-form-input
              id="input-6"
              v-model="adress"
              placeholder="adress"
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
              v-model="email"
              type="email"
              placeholder="Enter email"
              required
            ></b-form-input>
          </b-form-group>

          <b-button type="submit" variant="primary">Submit</b-button>
          <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>

        <b-button class="mt-3" variant="outline-danger" block @click="hideModal"
          >Close
        </b-button>
      </div>
    </b-row>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      filter: "",
      data: [],

      form: {
        email: "",
        name: "",
        food: null,
        checked: []
      },
      show: true,

      fname: "",
      lname: "",
      contact: "",
      adress: "",
      email: ""
    };
  },

  methods: {
    createContact: function() {
      console.log("Create contact!");

      let formData = new FormData();
      console.log("fname:", this.fname),
        console.log("lname:", this.lname),
        console.log("contact:", this.contact),
        console.log("adress:", this.adress),
        console.log("email:", this.email),
        formData.append("fname", this.fname),
        formData.append("lname", this.lname),
        formData.append("contact", this.contact),
        formData.append("adress", this.adress),
        formData.append("email", this.email);

      var contact = {};
      formData.forEach(function(value, key) {
        contact[key] = value;
      });

      axios({
        method: "post",
        url: "http://itrackdevs.geo-fuel.com/tools_manager_api/toolsapi.php",
        data: formData,
        config: { headers: { "Content-Type": "multipart/form-data" } }
      }).catch(function(response) {
        //handle error
        console.log(response);
      });
    },

    Delete: function() {
      console.log("Create contact!");

      let formData = new FormData();
      console.log("id:", this.id), formData.append("id", this.id);

      var contact = {};
      formData.forEach(function(value, key) {
        contact[key] = value;
      });

      axios({
        method: "post",
        url: "http://itrackdevs.geo-fuel.com/tools_manager_api/toolsapi.php",
        data: formData,
        config: { headers: { "Content-Type": "multipart/form-data" } }
      }).catch(function(response) {
        //handle error
        console.log(response);
      });
    },

    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.email = "";
      this.fname = "";
      this.lname;

      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>

<style scoped>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

th {
  background-color: #dddddd;
}

input[type="text"],
select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid lawngreen;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 2;
}
#srch {
  width: 180px;
}
#con {
  margin-left: 25px;
}
</style>
-->

<style>
#app {
  margin-top: 10px;
}
#back {
  margin-left: 98%;
  margin-top: 2px;
}
</style>
