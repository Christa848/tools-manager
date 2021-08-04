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
        <h3>Tickets Volume Trents</h3>
        <small>Last Updated 30 minutes ago</small>
      </b-card-text>
      <b-row>
        <b-col cols="1">
          <b-button href="#" variant="primary"> Filter</b-button>
        </b-col>
        <b-col>
          <p>
            <small>Filter by: Time Period</small>
            <b> 7 Feb, 2021- 9 Feb 2021 </b>
          </p></b-col
        >
      </b-row>
    </b-card>

    <b-card id="volume">
      <b-row id="top">
        <b-col cols="">
          <p>MONTHLY TRENTS OF TICKETS RECEIVED, RESOLVED AND UNRESOLVED</p>
        </b-col>
        <b-col cols="4">
          <div>
            <b-button squared variant="outline-success">Daily</b-button>
            <b-button squared variant="outline-success">Weekly</b-button>
            <b-button squared variant="outline-success">Monthly</b-button>
            <b-button squared variant="outline-success">Yearly</b-button>
          </div>
        </b-col>
      </b-row>

      <b-row>
        <b-col id="dat">
          Total Received tickets
          <h5>77</h5></b-col
        >
        <b-col id="dat">
          Total Resolved tickets
          <h5>70</h5></b-col
        >
        <b-col id="dat">
          Total Unsolved tickets
          <h5>07</h5></b-col
        >
        <b-col id="dat">
          Average Received tickets
          <h5>77</h5></b-col
        >
        <b-col id="dat">
          Average Resolved tickets
          <h5>70</h5></b-col
        >
        <b-col id="dat">
          Average Unsolved tickets
          <h5>07</h5></b-col
        >
      </b-row>
      <volume />
    </b-card>
  </div>
</template>

<script>
import volume from "@/components/graphs/weeklyTrents.vue";
export default {
  name: "weeklyTrents",
  components: {
    volume,
  },
  methods: {
    // TODO: Implement the functions for altering graph displays
    daily: function() {

    },
    weekly: function() {

    },
    monthly: function() {

    },
    yearly: function() {

    },
  }
};
</script>
<style scoped>
#dat {
  margin-left: 10px;
}
#volume {
  margin: 20px;
}
#top {
  background-color: white;
  margin-top: 10px;
}
.p {
  margin-left: 10px;
}
</style>
