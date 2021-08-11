<template>
  <div>
    <b-col>
      <b-row class="mb-2 cards">
        <b-col cols="2" sm="2" class="p-3">
          <opencard
            v-if="isactive === 'unsolved'"
            v-on:click.native="selectTab('unsolved')"
            active="unsolved_active"
          />
          <opencard
            v-else
            v-on:click.native="selectTab('unsolved')"
            active="notactive"
          />
        </b-col>
        <b-col cols="2" sm="2" class="p-3">
          <solvedcard
            v-if="isactive === 'overdue'"
            v-on:click.native="selectTab('overdue')"
            active="overdue_active"
          />
          <solvedcard
            v-else
            v-on:click.native="selectTab('overdue')"
            active="notactive"
          />
        </b-col>
        <b-col cols="2" sm="2" class="p-3">
          <newcard
            v-if="isactive === 'overdueToday'"
            v-on:click.native="selectTab('overdueToday')"
            active="dueToday_active"
          />
          <newcard
            v-else
            v-on:click.native="selectTab('overdueToday')"
            active="notactive"
          />
        </b-col>
        <b-col cols="2" sm="2" class="p-3">
          <open
            v-if="isactive === 'open'"
            v-on:click.native="selectTab('open')"
            active="open_active"
          />
          <open
            v-else
            v-on:click.native="selectTab('open')"
            active="notactive"
          />
        </b-col>
        <b-col cols="2" sm="2" class="p-3">
          <unassighned
            v-if="isactive === 'unsigned'"
            v-on:click.native="selectTab('unsigned')"
            active="unsigned_active"
          />
          <unassighned
            v-else
            v-on:click.native="selectTab('unsigned')"
            active="notactive"
          />
        </b-col>
        <b-col cols="2" sm="2" class="p-3">
          <onhold
            v-if="isactive === 'onhold'"
            v-on:click.native="selectTab('onhold')"
            active="onhold_active"
          />
          <onhold
            v-else
            v-on:click.native="selectTab('onhold')"
            active="notactive"
          />
        </b-col>
      </b-row>

      <b-row class="mb-2">
        <!-- tabs start -->
        <b-col cols="7" sm="8" class="p-3" id="trents">
          <b-tabs>
            <b-tab title="Trends" v-if="selected_tab === 'trend'">
              <trent />
            </b-tab>
            <b-tab
              title="Unsolved"
              v-else-if="selected_tab === 'unsolved'"
              active
            >
              <b-card>
                <ol>
                  <li v-for="ticket in unsolved" :key="ticket.id">
                    <b-card-text class="ticket-card">
                      <b-row align-v="center">
                        <b-col cols="1">
                          <b-form-checkbox
                            id="checkbox-1"
                            v-model="selected"
                            name="checkbox-1"
                            :value="ticket.id"
                            number
                          >
                          </b-form-checkbox>
                        </b-col>
                        <b-col>
                          <tick
                            status="Unsolved"
                            :name="ticket.name"
                            :massage="ticket.message"
                            :date="ticket.date"
                          />
                        </b-col>
                      </b-row>
                    </b-card-text>
                  </li>
                </ol>
              </b-card>
            </b-tab>
            <b-tab
              v-else-if="selected_tab === 'overdue'"
              title="Overdue"
              active
            >
              <b-card>
                <ol>
                  <li v-for="ticket in overdue" :key="ticket.id">
                    <b-card-text class="ticket-card">
                      <b-row align-v="center">
                        <b-col cols="1">
                          <b-form-checkbox
                            id="checkbox-1"
                            v-model="selected"
                            name="checkbox-1"
                            :value="ticket.id"
                            number
                          >
                          </b-form-checkbox>
                        </b-col>
                        <b-col>
                          <tick
                            status="Overdue"
                            :name="ticket.name"
                            :massage="ticket.message"
                            :date="ticket.date"
                          />
                        </b-col>
                      </b-row>
                    </b-card-text>
                  </li>
                </ol>
              </b-card>
            </b-tab>
            <b-tab
              v-else-if="selected_tab === 'overdueToday'"
              title="Due Today"
              active
            >
              <b-card>
                <ol>
                  <li v-for="ticket in data" :key="ticket.id">
                    <b-card-text class="ticket-card">
                      <b-row align-v="center">
                        <b-col cols="1">
                          <b-form-checkbox
                            id="checkbox-1"
                            v-model="selected"
                            name="checkbox-1"
                            :value="ticket.id"
                            number
                          >
                          </b-form-checkbox>
                        </b-col>
                        <b-col>
                          <tick
                            status="Due today"
                            :name="ticket.name"
                            :massage="ticket.message"
                            :date="ticket.date"
                          />
                        </b-col>
                      </b-row>
                    </b-card-text>
                  </li>
                </ol>
              </b-card>
            </b-tab>
            <b-tab v-else-if="selected_tab === 'open'" title="Open" active>
              <b-card>
                <ol>
                  <li v-for="ticket in open" :key="ticket.id">
                    <b-card-text class="ticket-card">
                      <b-row align-v="center">
                        <b-col cols="1">
                          <b-form-checkbox
                            id="checkbox-1"
                            v-model="selected"
                            name="checkbox-1"
                            :value="ticket.id"
                            number
                          >
                          </b-form-checkbox>
                        </b-col>
                        <b-col>
                          <tick
                            status="Open"
                            :name="ticket.name"
                            :massage="ticket.message"
                            :date="ticket.date"
                          />
                        </b-col>
                      </b-row>
                    </b-card-text>
                  </li>
                </ol>
              </b-card>
            </b-tab>
            <b-tab
              v-else-if="selected_tab === 'unsigned'"
              title="Unassigned"
              active
            >
              <b-card>
                <ol>
                  <li v-for="ticket in unassigned" :key="ticket.id">
                    <b-card-text class="ticket-card">
                      <b-row align-v="center">
                        <b-col cols="1">
                          <b-form-checkbox
                            id="checkbox-1"
                            v-model="selected"
                            name="checkbox-1"
                            :value="ticket.id"
                            number
                          >
                          </b-form-checkbox>
                        </b-col>
                        <b-col>
                          <tick
                            status="Unassigned"
                            :name="ticket.name"
                            :massage="ticket.message"
                            :date="ticket.date"
                          />
                        </b-col>
                      </b-row>
                    </b-card-text>
                  </li>
                </ol>
              </b-card>
            </b-tab>
            <b-tab v-else-if="selected_tab === 'onhold'" title="Onhold" active>
              <b-card>
                <ol>
                  <li v-for="ticket in onhold" :key="ticket.id">
                    <b-card-text class="ticket-card">
                      <b-row align-v="center">
                        <b-col cols="1">
                          <b-form-checkbox
                            id="checkbox-1"
                            v-model="selected"
                            name="checkbox-1"
                            :value="ticket.id"
                            number
                          >
                          </b-form-checkbox>
                        </b-col>
                        <b-col>
                          <tick
                            status="Onhold"
                            :name="ticket.name"
                            :massage="ticket.message"
                            :date="ticket.date"
                          />
                        </b-col>
                      </b-row>
                    </b-card-text>
                  </li>
                </ol>
              </b-card>
            </b-tab>
          </b-tabs>
        </b-col>
        <!-- tabs start -->
        <b-col cols="5" sm="4" class="p-3">
          <b-container fluid class="bv-example-row">
            <b-row>
              <b-col sm="12">
                <H4>Statistics</H4>
                <b-row>
                  <b-col cols="6" sm="6"><resolved /></b-col>
                  <b-col cols="6" sm="6"><received /></b-col>
                </b-row>
                <b-row>
                  <b-col cols="8" sm="12" align-self="centre"
                    ><average
                  /></b-col>
                </b-row>
              </b-col>
            </b-row>
          </b-container>
        </b-col>
      </b-row>

      <lower />
    </b-col>
  </div>
</template>

<script>
import lower from "@/components/lowerbottom/lower.vue";
import opencard from "@/components/cards/unsolved.vue";
import solvedcard from "@/components/cards/Overdue.vue";
import newcard from "@/components/cards/Duetoday.vue";
import open from "@/components/cards/open.vue";
import onhold from "@/components/cards/Onhold.vue";
import unassighned from "@/components/cards/unassigned.vue";
import trent from "@/components/cards/Trents.vue";
import resolved from "@/components/cards/resolved.vue";
import received from "@/components/cards/received.vue";
import average from "@/components/cards/averageTime.vue";
import tick from "@/components/tickets/ticket1.vue";

export default {
  name: "side",
  components: {
    opencard,
    solvedcard,
    newcard,
    unassighned,
    trent,
    open,
    onhold,
    resolved,
    received,
    lower,
    average,
    tick
  },
  data() {
    return {
      selected_tab: "trend",
      isactive: false,
      data: [],
      unsolved: [],
      overdue: [],
      open: [],
      unassigned: [],
      onhold: []
    };
  },
  beforeMount() {
    this.getName();
    this.getUnsolved();
    this.getOverdue();
    this.getOpen();
    this.getUnassigned();
    this.getOnhold();
  },
  methods: {
    async getName() {
      const res = await fetch(
        "http://itrackdevs.geo-fuel.com/tools_manager_api/getticketCard.php?action=duetoday"
      );
      const data = await res.json();
      this.data = data;
    },

    async getUnsolved() {
      const res = await fetch(
        "http://itrackdevs.geo-fuel.com/tools_manager_api/getticketCard.php?action=unsolved"
      );
      const unsolved = await res.json();
      this.unsolved = unsolved;
    },
    async getOverdue() {
      const res = await fetch(
        "http://itrackdevs.geo-fuel.com/tools_manager_api/getticketCard.php?action=overdue"
      );
      const overdue = await res.json();
      this.overdue = overdue;
    },
    async getOpen() {
      const res = await fetch(
        "http://itrackdevs.geo-fuel.com/tools_manager_api/getticketCard.php?action=open"
      );
      const open = await res.json();
      this.open = open;
    },
    async getUnassigned() {
      const res = await fetch(
        "http://itrackdevs.geo-fuel.com/tools_manager_api/getticketCard.php?action=unassigned"
      );
      const unassigned = await res.json();
      this.unassigned = unassigned;
    },
    async getOnhold() {
      const res = await fetch(
        "http://itrackdevs.geo-fuel.com/tools_manager_api/getticketCard.php?action=onhold"
      );
      const onhold = await res.json();
      this.onhold = onhold;
    },
    selectTab: function(tab) {
      if (this.selected_tab != tab) {
        this.selected_tab = tab;
        this.isactive = tab;
      } else {
        this.selected_tab = "trend";
        this.isactive = "trend";
      }
    }
  }
};
</script>
<style>
#trents {
  max-height: 450px;
  overflow-y: hidden;
  overflow-y: scroll;
}
</style>
