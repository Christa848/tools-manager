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
        <h3>Perfomance Distriburion</h3>
        <small>Last Updated 30 minutes ago</small>
      </b-card-text>
      <b-row>
        <b-col cols="1">
          <b-button href="#" variant="primary"> Filter</b-button>
        </b-col>
        <b-col>
          <p>
            Data as of <b> {{ currentDate }} </b>
          </p></b-col
        >
      </b-row>
    </b-card>
    <b-row>
      <b-col cols="6">
        <h4>First Response Time</h4>
        <perfomance />
      </b-col>
      <b-col cols="">
        <h4>Average First Response Time</h4>
        <perfomanceavg />
      </b-col>
    </b-row>
  </div>
</template>
<script>
import perfomance from "@/components/graphs/perfomance.vue";
import perfomanceavg from "@/components/graphs/perfomanceAVG.vue";

export default {
  name: "PerfomanceAnalysis",
  components: {
    perfomance,
    perfomanceavg,
  },
  data() {
    return {
      currentDate: new Date().toGMTString().substr(5, 11),
    };
  },
};
</script>
