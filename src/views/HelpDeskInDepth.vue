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
                <p>Value: '{{ value }}'</p>
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
                <b-button href="#" variant="primary" id="filt">
                  Filter</b-button
                >
              </b-col>
            </b-row>
          </div>
        </b-col>
      </b-row>
    </b-card>
    <b-card id="deskdata">
      <h2>6</h2>
      <p>Created Tickets</p>
      <hr />

      <b-row>
        <b-col cols="2">
          <b-row>
            <b-col cols="12">
              <h2>7</h2>

              <p>Resolved Tickets</p>
            </b-col>
          </b-row>

          <hr />
          <b-row>
            <b-col cols="12">
              <h2>1</h2>
              <p>Unresolved Tickets</p>
            </b-col>
          </b-row>
          <hr />

          <b-row>
            <b-col>
              <h2>3min 0sec</h2>
              <p>Average Response Time</p>
            </b-col>
          </b-row>
          <hr />
          <b-row>
            <b-col>
              <h2>0hrs 30min 45sec</h2>
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
