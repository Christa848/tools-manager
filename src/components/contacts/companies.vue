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
            <b-modal ref="my-modal" hide-footer title="Enter New Contact">
              <div>
                <b-form @submit="createContact" @reset="onReset" v-if="show">
                  <b-form-group
                    id="input-group-2"
                    label=" Company Name:"
                    label-for="input-2"
                  >
                    <b-form-input
                      id="input-2"
                      v-model="Name"
                      placeholder="Name"
                      required
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    id="input-group-4"
                    label="Region:"
                    label-for="input-2"
                  >
                    <b-form-input
                      id="input-4"
                      v-model="Region"
                      placeholder="Region"
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
                      v-model="Contact"
                      placeholder="Contact"
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

                  <b-form-group
                    id="input-group-6"
                    label="Address:"
                    label-for="input-2"
                  >
                    <b-form-input
                      id="input-6"
                      v-model="Address"
                      placeholder="Address"
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
                >Close</b-button
              >
            </b-modal>
          </div>
        </div>
      </b-col>
    </b-row>

    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Region</th>
          <th>Address</th>
          <th>Contact</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <!--<tr v-for="(row, index) of filteredRows" :key="index">  -->
        <tr v-for="(row, index) in filteredRows" :key="`Name-${index}`">
          <td v-html="highlightMatches(row.Name)"></td>
          <td v-html="highlightMatches(row.Region)"></td>
          <td v-html="highlightMatches(row.Address)"></td>
          <td v-html="highlightMatches(row.Contact)"></td>
          <td v-html="highlightMatches(row.Email)"></td>
          <td>
            <button
              type="button"
              name="edit"
              class="btn btn-primary btn-xs edit"
              @click="fetchData(row.Id)"
            >
              Edit
            </button>
          </td>
          <td>
            <button
              type="button"
              name="delete"
              class="btn btn-danger btn-xs delete"
              @click="deleteData(row.Id)"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import axios from "axios";
export default {
  emits: { valueChanged: null },
  data() {
    return {
      filter: "",
      data: [],
      show: true,
      Id: 0,
      Name: "",
      Region: "",
      Contact: "",
      Address: "",
      Email: "",
    };
  },
  beforeMount() {
    this.getName();
  },
  methods: {
    async getName() {
      const res = await fetch(
        "http://itrackdevs.geo-fuel.com/tools_manager_api/getComcontacts.php"
      );
      const data = await res.json();
      this.data = data;
    },

    createContact: function () {
      let formData = new FormData();
      formData.append("Name", this.Name);
      formData.append("Region", this.Region);
      formData.append("Contact", this.Contact);
      formData.append("Email", this.Email);
      formData.append("Address", this.Address);

      axios
        .post(
          "companiesCont.php",
          formData
          )
        .then((response) => console.log(response.statustext))
        .catch(function (error) {
          console.log(error);
        });
    },

    deleteData: function (id) {
      console.log(19)
      let formData = new FormData();
      formData.append("id", id);
      axios
        .post("deleteCompany.php", formData)
        .then(this.$router.go())
        .catch((error) => console.error(error));
    },

    fetchData: function (id) {
      let formData = new FormData();
      formData.append("id", id);
      axios
        .get()
        .then((res) => console.log(res))
        .catch((error) => console.error(error));
    },

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
      this.Email = "";
      this.Name = "";
      this.Adress = "";
      this.Contact = "";
      this.Region = "";

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
        const Name = row.Name.toString().toLowerCase() ? "" : "NULL";
        const Region = row.Region.toString().toLowerCase() ? "" : "NULL";
        const Address = row.Address.toLowerCase() ? "" : "NULL";
        const searchTerm = this.filter.toLowerCase();

        return (
          Name.includes(searchTerm) ||
          Region.includes(searchTerm) ||
          Address.includes(searchTerm)
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

#app {
  margin-top: 10px;
}
#back {
  margin-left: 98%;
  margin-top: 2px;
}
</style>
