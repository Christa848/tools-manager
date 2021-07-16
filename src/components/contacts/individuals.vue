<template>
  <div id="tabb">
    <b-row>
      <b-col cols="2">
        <input type="text" id="srch" placeholder="Search " v-model="filter" />
      </b-col>
      <b-col cols="1" id="not">
        <div>
          <div>
            <b-button
              variant="outline-success"
              size="lg"
              id="show-btn"
              @click="showModal"
              >Add</b-button
            >
            <b-modal ref="my-modal" hide-footer title="Enter Contacts">
              <div>
                <b-form @submit="createContact" @reset="onReset" v-if="show">
                  <b-form-group
                    id="input-group-2"
                    label="First Name:"
                    label-for="input-2"
                  >
                    <b-form-input
                      id="input-2"
                      v-model="fname"
                      placeholder="First Name"
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
                      placeholder="Last name"
                      required
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    id="input-group-3"
                    label="Contact:"
                    label-for="input-2"
                  >
                    <b-form-input
                      id="input-3"
                      v-model="contact"
                      placeholder="Contact"
                      required
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    id="input-group-6"
                    label="Address:"
                    label-for="input-2"
                  >
                    <b-form-input
                      id="input-6"
                      v-model="adress"
                      placeholder="Address"
                      required
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    id="input-group-1"
                    label="Email Address:"
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
              </div>

              <b-button
                class="mt-3"
                variant="outline-danger"
                block
                @click="hideModal"
                >Close
              </b-button>
            </b-modal>
          </div>
        </div>
      </b-col>
    </b-row>

    <table>
      <thead>
        <tr>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Adress</th>
          <th>Contact</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in filteredRows" :key="`fname-${index}`">
          <td v-html="highlightMatches(row.fname)"></td>
          <td v-html="highlightMatches(row.lname)"></td>
          <td v-html="highlightMatches(row.adress)"></td>
          <td v-html="highlightMatches(row.contact)"></td>
          <td v-html="highlightMatches(row.email)"></td>

          <td>
            <!-- <button
              type="button"
              name="edit"
              class="btn btn-primary btn-xs edit"
              @click="fetchData(row.id)"
            >
              Edit
            </button> -->
            <router-link
              class="btn btn-primary"
              :to="{ name: 'editContact', params: { contact_id: row.id } }"
              >Edit</router-link
            >
          </td>
          <td>
            <b-icon
              variant="danger"
              icon="trash-fill"
              font-scale="1"
              @click="deleteData(row.id)"
              v-b-popover.hover="'Delete'"
            ></b-icon>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      filter: "",
      data: [],
      show: true,
      fname: "",
      lname: "",
      contact: "",
      adress: "",
      email: "",
      contact_id: null,
    };
  },
  beforeMount() {
    this.GetAllContacts();
  },
  methods: {
    async GetAllContacts() {
      const res = await fetch(
        "http://itrackdevs.geo-fuel.com/tools_manager_api/getAllcontacts.php"
      );
      const data = await res.json();
      this.data = data;
    },

    createContact: function () {
      console.log("Create contact!");

      let formData = new FormData();
      formData.append("fname", this.fname);
      formData.append("lname", this.lname);
      formData.append("contact", this.contact);
      formData.append("adress", this.adress);
      formData.append("email", this.email);

      axios
        .post("toolsapi.php", formData)
        .then((response) => console.log(response.statustext))
        .catch(function (error) {
          console.log(error);
        });
    },
    deleteData(id) {
      const formData = new FormData();
      formData.append("id", id);
      if (confirm("Are you sure to delete this record?")) {
        axios
          .post("deleteContact.php", formData)
          .then((res) => {
            console.log(res.statusText);
            this.$router.go();
          })
          .catch((error) => console.error(error));
      }
    },
    fetchData() {},

    showModal() {
      this.$refs["my-modal"].show();
    },
    hideModal() {
      this.$refs["my-modal"].hide();
    },
    toggleModal() {
      // We pass the ID of the button that we want to return focus to
      // when the modal has hidden
      this.$refs["my-modal"].toggle("#toggle-btn");
    },

    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.email = "";
      this.fname = "";
      this.lname = "";
      this.contact = "";
      this.adress = "";

      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },

    highlightMatches(text) {
      const matchExists = text
        .toLowerCase()
        .includes(this.filter.toLowerCase());
      if (!matchExists) return text;

      const re = new RegExp(this.filter, "ig");
      return text.replace(
        re,
        (matchedText) => `<strong>${matchedText}</strong>`
      );
    },
  },

  computed: {
    filteredRows() {
      return this.data.filter((row) => {
        const fname = row.fname.toString().toLowerCase();
        const lname = row.lname.toLowerCase();
        const contact = row.contact.toLowerCase();

        const searchTerm = this.filter.toLowerCase();

        return (
          fname.includes(searchTerm) ||
          lname.includes(searchTerm) ||
          contact.includes(searchTerm)
        );
      });
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
  margin-top: 25px;
}
#srch {
  width: 180px;
}
#not {
  margin-top: 25px;
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
