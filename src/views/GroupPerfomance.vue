<template>
  <div>
    <b-card id="helpdesk">
      <b-card-text>
        <router-link to="/report" class="iterms">
          <b-icon
            icon="x-circle"
            scale="1.5"
            variant="danger"
            id="back"
            v-b-popover.hover="'Exit'"
          ></b-icon
        ></router-link>
        <h3>Group Performance</h3>
      </b-card-text>
      <b-row>
        <b-col cols="1"> </b-col>
        <b-col>
          <p></p>

          <div>
            <b-row>
              <b-col cols="4">
                <label for="example-datepicker"><b>Start date</b></label>
                <b-form-datepicker
                  id="example-datepicker"
                  v-model="value"
                  class="mb-2"
                ></b-form-datepicker>
                
              </b-col>
              <b-col cols="4">
                <label for="example-datepicker"><b>End date</b></label>
                <b-form-datepicker
                  id="example-datepicker1"
                  v-model="value2"
                  class="mb-2"
                ></b-form-datepicker>
              </b-col>
              <b-col cols="3">
                <p></p>
                <p></p>
                <b-button v-on:click="isHidden = !isHidden" variant="primary" id="filt">
                  Filter</b-button
                >
              </b-col>
            </b-row>
          </div>
        </b-col>
      </b-row>
    </b-card>

    <b-row>
      <b-col cols="2">
        <input type="text" id="srch" placeholder="Search " v-model="filter" />
      </b-col>
      <b-col cols="1" id="not">
        <div>
          <div></div>
        </div>
      </b-col>
    </b-row>

    <table>
      <thead>
        <tr>
          <th>Department</th>
          <th>Received Tickets</th>
          <th>Resolved Tickets</th>
          <th>Unresolved Tickets</th>
          <th>%Perfomance</th>
        </tr>
      </thead>
   
      
      <tbody v-if="!isHidden">
        <tr v-for="(row, index) in filteredRows" :key="`department-${index}`">
          <td v-html="highlightMatches(row.department)"></td>
          <td v-html="highlightMatches(row.received_tickets)"></td>
          <td v-html="highlightMatches(row.resolved_tickets)"></td>
          <td v-html="highlightMatches(row.unresolved_tickets)"></td>
          <!--<td >{{row.fname}}</td>
       <td >{{row.lname}}</td>
         <td >{{row.adress}}</td>
        <td >{{row.contact}}</td>
        <td >{{row.email}}</td>-->
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
      value: "",
isHidden: true,
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
  beforeMount() {
    this.getName();
    this.showDeptStats();
  },
  methods: {
    async getName() {
      const res = await fetch(
        "http://itrackdevs.geo-fuel.com/tools_manager_api/groupPerfomnce.php?"
      );
      const data = await res.json();
      this.data = data;
    },

    //FIXME: Fix responses for record count 🙍
    showDeptStats: function() {
      axios.get("getDeptStats.php").catch(error => console.error(error));
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
    },

    highlightMatches(text) {
      const matchExists = text
        .toLowerCase()
        .includes(this.filter.toLowerCase());
      if (!matchExists) return text;

      const re = new RegExp(this.filter, "ig");
      return text.replace(re, matchedText => `<strong>${matchedText}</strong>`);
    }
  },

  computed: {
    filteredRows() {
      return this.data.filter(row => {
        const department = row.department.toString().toLowerCase();
        const searchTerm = this.filter.toLowerCase();
        return department.includes(searchTerm);
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
