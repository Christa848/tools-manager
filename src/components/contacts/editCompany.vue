<template>
  <div id="edit">
    <h4>Edit Company</h4>
    <form @submit.prevent="editCompany" id="editor" class="col-12">
      <label for="companyname">Name</label>
      <b-form-input
        v-model="company.name"
        type="text"
        :placeholder="company.name"
      ></b-form-input>
      <label for="region">Region</label>
      <b-form-input
        v-model="company.region"
        type="text"
        :placeholder="company.region"
      ></b-form-input>
      <label for="contact">Contact</label>
      <b-form-input
        v-model="company.contact"
        type="text"
        :placeholder="company.contact"
      ></b-form-input>
      <label for="address">Address</label>
      <b-form-input
        v-model="company.address"
        type="text"
        :placeholder="company.address"
      ></b-form-input>
      <label for="email">Email</label>
      <b-form-input
        v-model="company.email"
        type="email"
        :placeholder="company.email"
      ></b-form-input>
      <br />
      <button class="btn btn-primary">Save Changes</button>
      <router-link to="/comContacts" class="btn btn-secondary"
        >Back</router-link
      >
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "editCompany",
  data() {
    return {
      company: {},
      id: null,
    };
  },
  mounted() {
    this.getCompany();
  },
  watch: {
    $route: "getCompany",
  },
  methods: {
    editCompany() {
      let formData = new FormData();
      formData.append("id", this.id);
      formData.append("name", this.company.name);
      formData.append("region", this.company.region);
      formData.append("address", this.company.address);
      formData.append("email", this.company.email);
      formData.append("contact", this.company.contact);

      axios
        .post("updateCompany.php", formData)
        .then((response) => {
          console.log(response.statusText);
          this.$router.push("/comContacts");
        })
        .catch((error) => console.error(error));
    },
    getCompany() {
      let formData = new FormData();
      formData.append("id", this.$route.params.company_id);
      this.id = this.$route.params.company_id;
      axios
        .post("getCompany.php", formData)
        .then((response) => {
          let companyData = response.data[0];
          this.company.name = companyData.name;
          this.company.region = companyData.region;
          this.company.email = companyData.email;
          this.company.contact = companyData.contact;
          this.company.address = companyData.address;
          this.id = companyData.id;

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
