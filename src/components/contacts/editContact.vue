<template>
  <div id="edit">
    <h4>Edit Contact</h4>
    <form @submit.prevent="editContact" id="editor" class="col-12">
      <label for="username">FirstName</label>:
      <b-form-input
        v-model="user.fname"
        type="text"
        :placeholder="user.fname"
      ></b-form-input>
      <label for="username">Surname</label>:
      <b-form-input
        v-model="user.lname"
        type="text"
        :placeholder="user.lname"
      ></b-form-input>
      <label for="username">Contact</label>:
      <b-form-input
        v-model="user.contact"
        type="text"
        :placeholder="user.contact"
      ></b-form-input>
      <label for="username">Address</label>:
      <b-form-input
        v-model="user.address"
        type="text"
        :placeholder="user.address"
      ></b-form-input>
      <label for="username">Email</label>:
      <b-form-input
        v-model="user.email"
        type="email"
        :placeholder="user.email"
      ></b-form-input>
      <br />
      <button class="btn btn-primary">Save Changes</button>
      <router-link to="/individualContacts" class="btn btn-secondary"
        >Back</router-link
      >
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "editContact",
  data() {
    return {
      user: {},
      id: null,
    };
  },
  mounted() {
    this.getContact();
  },
  watch: {
    $route: "getContact",
  },
  methods: {
    editContact() {
      let formData = new FormData();
      formData.append("id", this.id);
      formData.append("fname", this.user.fname);
      formData.append("lname", this.user.lname);
      formData.append("address", this.user.address);
      formData.append("email", this.user.email);
      formData.append("contact", this.user.contact);

      axios
        .post("setContact.php", formData)
        .then((response) => {
          console.log(response.statusText);
          this.$router.push("/individualContacts");
        })
        .catch((error) => console.error(error));
    },
    getContact() {
      let formData = new FormData();
      formData.append("id", this.$route.params.contact_id);
      this.id = this.$route.params.contact_id;
      axios
        .post("getContact.php", formData)
        .then((response) => {
          let userData = response.data[0];
          this.user.fname = userData.fname;
          this.user.lname = userData.lname;
          this.user.email = userData.email;
          this.user.contact = userData.contact;
          this.user.address = userData.address;
          this.id = userData.id;
  
          this.$forceUpdate(); // to load the data into the form
        })
        .catch((error) => console.error(error));
    },
  },
};
</script>
<style lang="css" scoped>
h4 {
  margin-top: 10px;
}
#editor {
  margin: 10px 50px;
  width: auto;
  padding: 10px;
}
button {
  margin-right: 10px;
}
b-form-input {
  width: 300px;
}
</style>
