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
        <h3>Agent Perfomance</h3>
        <small>Last Updated 30 minutes ago</small>
      </b-card-text>
      <b-row>
        <b-col cols="1">
          <b-button href="#" variant="primary"> Filter</b-button>
        </b-col>
        <b-col>
          <p>
            <small>Filter by: Time Period: </small>
            <b> 7 Feb, 2021- 9 Feb 2021 </b>
          </p></b-col
        >
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
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Received Tickets</th>
          <th>Resolved Tickets</th>
          <th>Unresolved Tickets</th>
          <th>%Perfomance</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in filteredRows" :key="`first_name-${index}`">
          <td v-html="highlightMatches(row.first_name)"></td>
          <td v-html="highlightMatches(row.last_name)"></td>
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
  beforeMount() {
    this.getName();
  },
  methods: {
    async getName() {
      const res = await fetch(
        "http://itrackdevs.geo-fuel.com/tools_manager_api/reports.php?action=agent"
      );
      const data = await res.json();
      this.data = data;
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
        const first_name = row.first_name.toString().toLowerCase();
        const last_name = row.last_name.toLowerCase();

        const searchTerm = this.filter.toLowerCase();

        return (
          first_name.includes(searchTerm) || last_name.includes(searchTerm)
        );
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
