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
                <b-button href="#" variant="primary" id="filt">
                  Filter</b-button
                >
              </b-col>
            </b-row>
          </div>
        </b-col>
      </b-row>
    </b-card>

    <b-card id="volume">
  

      <b-row>
        <b-col id="dat">
          Total Received tickets
          <h5>6</h5></b-col
        >
        <b-col id="dat">
          Total Resolved tickets
          <h5>1</h5></b-col
        >
        <b-col id="dat">
          Total Unsolved tickets
          <h5>5</h5></b-col
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
    volume
  },
  methods: {
    // TODO: Implement the functions for altering graph displays
    daily: function() {},
    weekly: function() {},
    monthly: function() {},
    yearly: function() {}
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
