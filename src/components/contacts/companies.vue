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
                      placeholder=" name"
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
                      placeholder=" region"
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

                  <b-form-group
                    id="input-group-6"
                    label="Address:"
                    label-for="input-2"
                  >
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
          <th>Name</th>
          <th>Region</th>
          <th>Adress</th>
          <th>Contact</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
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
              @click="fetchData(row.id)"
            >
              Edit
            </button>
          </td>
          <td>
            <button
              type="button"
              name="delete"
              class="btn btn-danger btn-xs delete"
              @click="deleteData(row.id)"
            >
              Delete
            </button>
          </td>

          <!--<td >{{row.Name}}</td>
         <td>{{row.Region}}</td>
        <td >{{row.Address}}</td>
        <td >{{row.Contact}}</td>
        <td >{{row.Email}}</td> -->
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
      form: {
        email: "",
        name: "",
        food: null,
        checked: [],
      },
      show: true,
      Name: "",
      Region: "",
      Contact: "",
      Adress: "",
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
      console.log("Create contact!");

      let formData = new FormData();
      console.log("Name:", this.Name),
        console.log("Region:", this.Region),
        console.log("Contact:", this.Contact),
        console.log("Email:", this.Email),
        console.log("Adress:", this.Adress),
        formData.append("Name", this.Name),
        formData.append("Region", this.Region),
        formData.append("Contact", this.Contact),
        formData.append("Email", this.Email),
        formData.append("Adress", this.Adress);

      var contact = {};
      formData.forEach(function (value, key) {
        contact[key] = value;
      });

      axios({
        method: "post",
        url:
          "http://itrackdevs.geo-fuel.com/tools_manager_api/companiesCont.php",
        data: formData,
        config: { headers: { "Content-Type": "multipart/form-data" } },
      }).catch(function (response) {
        //handle error
        console.log(response);
      });
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
      this.Address;

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
        const Name = row.Name.toString().toLowerCase();
        const Region = row.Region.toLowerCase();
        const Address = row.Address.toLowerCase();

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
</style> -->





<style>
#app {
  margin-top: 10px;
}
#back {
  margin-left: 98%;
  margin-top: 2px;
}
</style>


