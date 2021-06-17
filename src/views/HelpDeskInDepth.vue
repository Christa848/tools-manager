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
        <h3>Helpdesk in Depth</h3>
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
    <b-card id="deskdata">
      <h2>11</h2>
      <p>Created Tickets</p>
      <hr />

      <b-row>
        <b-col cols="2">
          <b-row>
            <b-col cols="12">
              <h2>0</h2>

              <p>Resolved Tickets</p>
            </b-col>
          </b-row>

          <hr />
          <b-row>
            <b-col cols="12">
              <h2>0</h2>
              <p>Unresolved Tickets</p>
            </b-col>
          </b-row>
          <hr />
          <b-row>
            <b-col cols="12">
              <h2>0</h2>
              <p>Reopened Tickets</p>
            </b-col>
          </b-row>
          <hr />
          <b-row>
            <b-col>
              <h2>0min 0sec</h2>
              <p>Average First Response</p>
            </b-col>
          </b-row>
          <hr />
          <b-row>
            <b-col>
              <h2>0min 0sec</h2>
              <p>Average Response Time</p>
            </b-col>
          </b-row>
          <hr />
          <b-row>
            <b-col>
              <h2>0min 0sec</h2>
              <p>Average Resolution Time</p>
            </b-col>
          </b-row>
          <hr />
        </b-col>
        <b-col cols="5" id="graphs">
          <b-row>
            <h4>Created Tickets Split By Source</h4>
            <bySource />
          </b-row>
          <!-- <b-row> Created Tickets Split By Status
            <byStatus/>
            
          </b-row> -->
          <b-row></b-row>
        </b-col>
        <b-col cols="5">
          <h4>Created Tickets Split By Status</h4>
          <!--<byPriority/>   -->
          <byStatus
        /></b-col>
      </b-row>
    </b-card>
  </div>
</template>
<script>
import byStatus from "@/components/graphs/ticketsByStatus.vue";
import bySource from "@/components/graphs/ticketsBySource.vue";
export default {
  name: "HelpDeskInDepth",
  components: {
    bySource,
    byStatus
  }
};
</script>
<style>
#helpdesk {
  margin-top: 20px;
}
#deskdata {
  margin: 20px;
}
</style>
