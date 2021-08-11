<template>
  <div>
    <router-link to="/home" class="iterms">
      <b-icon
        icon="x-circle"
        scale="1.5"
        variant="danger"
        id="back"
        v-b-popover.hover="'Exit'"
      ></b-icon
    ></router-link>

    <b-row>
      <b-col cols="8">
        <b-card id="response1">
          <H3>Helpdesk Analysis</H3>
          <b-row>
            <b-col cols="2">
              <router-link to="HelpDeskInDepth" class="iterms">
                <b-card
                  ><b-icon icon="zoom-in" scale="2" variant="success"></b-icon>
                </b-card>
              </router-link>
              <p><small>Help-Desk in Depth</small></p>
            </b-col>

            <b-col cols="2">
              <router-link to="TicketVolume" class="iterms">
                <b-card
                  ><b-icon
                    icon="book-half"
                    scale="2"
                    variant="success"
                  ></b-icon>
                </b-card>
              </router-link>
              <p><small>Ticket Volume Trents</small></p>
            </b-col>

            <b-col> </b-col>
          </b-row>
        </b-card>

        <b-card>
          <H3>Productivity</H3>
          <b-row>
            <b-col cols="2">
              <router-link to="AgentPerfomance" class="iterms">
                <b-card
                  ><b-icon
                    icon="person-lines-fill"
                    scale="2"
                    variant="info"
                  ></b-icon>
                </b-card>
              </router-link>
              <p><small>Agent Perfomance</small></p>
            </b-col>

            <b-col cols="2">
              <router-link to="GroupPerfomance" class="iterms">
                <b-card
                  ><b-icon icon="people-fill" scale="2" variant="info"></b-icon>
                </b-card>
              </router-link>
              <p><small>Group Perfomance</small></p>
            </b-col>

            <b-col cols="2">
              <router-link to="PerfomanceAnalysis" class="iterms">
                <b-card
                  ><b-icon
                    icon="pie-chart-fill"
                    scale="2"
                    variant="info"
                  ></b-icon>
                </b-card>
              </router-link>
              <p><small>Perfomance Distribution</small></p>
            </b-col>
          </b-row>
        </b-card>

        <b-card id="response1"> </b-card>
      </b-col>

      <b-col cols="4">
        <b-row>
          <marquee id="mar">Today's Insights </marquee>
          <b-col cols="12">
            <b-card id="response">
              <b-row>
                <b-col cols="3"></b-col>
                <b-col cols="9">7 Received Tickets</b-col>
              </b-row>
            </b-card>
          </b-col>
        </b-row>

        <b-row>
          <b-col cols="12">
            <b-card id="response">
              <b-row>
                <b-col cols="3">0%</b-col>
                <b-col cols="9">0 Resolved Tickets</b-col>
              </b-row>
            </b-card>
          </b-col>
        </b-row>

        <b-row>
          <b-col cols="12">
            <b-card id="response">
              <b-row>
                <b-col cols="3">100%</b-col>
                <b-col cols="9">7 Unresolved Tickets</b-col>
              </b-row>
            </b-card>
          </b-col>
        </b-row>

        <b-row>
          <b-col cols="12">
            <b-card id="response">
              <b-row>
                <b-col cols="3">9%</b-col>
                <b-col cols="9">3min 20sec Average First Time Response</b-col>
              </b-row>
            </b-card>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {};
</script>
<style>
#response {
  margin-bottom: 10px;
}
#response1 {
  margin-bottom: 10px;
  margin-top: 20px;
}

#response:hover {
  transform: scale(1.1);
}

#back {
  margin-left: 98%;
  margin-top: 2px;
}
</style>
