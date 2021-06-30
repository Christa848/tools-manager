/* eslint-disable prettier/prettier */
<template>
  <div class="text-left">
    <b-card>
      <b-row>
        <b-col cols="1">
          <b-form-group>
            <template #label>
              <input type="checkbox" v-model="selectAll" />
            </template>
          </b-form-group>
        </b-col>
        <b-col cols="10">
          <b-dropdown
            id="dropdown-1"
            text="Choose Department"
            class="m-md-2"
            variant="outline-success"
          >
            <b-dropdown-item>
              <atick
                v-if="isactive === 'admin'"
                v-on:click.native="selectTab('admin')"
                active="admin_active"
              />
              <atick
                v-else
                v-on:click.native="selectTab('admin')"
                active="notactive"
              />
            </b-dropdown-item>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item>
              <actick
                v-if="isactive === 'account'"
                v-on:click.native="selectTab('account')"
                active="account_active"
              />
              <actick
                v-else
                v-on:click.native="selectTab('account')"
                active="notactive"
              />
            </b-dropdown-item>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item>
              <stick
                v-if="isactive === 'itsupport'"
                v-on:click.native="selectTab('itsupport')"
                active="itsupport_active"
              />
              <stick
                v-else
                v-on:click.native="selectTab('itsupport')"
                active="notactive"
              />
            </b-dropdown-item>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item>
              <mtick
                v-if="isactive === 'marketing'"
                v-on:click.native="selectTab('marketing')"
                active="marketing_active"
              />
              <mtick
                v-else
                v-on:click.native="selectTab('marketing')"
                active="notactive"
              />
            </b-dropdown-item>
            <b-dropdown-divider></b-dropdown-divider>
          </b-dropdown>
          <b-dropdown
            id="dropdown-2"
            text="Assign"
            class="m-md-2"
            variant="outline-success"
          >
            <b-dropdown-item>Support</b-dropdown-item>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item>Finance</b-dropdown-item>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item>Admin</b-dropdown-item>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item>Marketing</b-dropdown-item>
            <b-dropdown-divider></b-dropdown-divider>
          </b-dropdown>

          <b-navbar-brand
            ><b-button
              variant="outline-success"
              class="my-2 my-sm-0"
              type="submit"
              >Delete</b-button
            ></b-navbar-brand
          >
          <b-navbar-brand
            ><b-button
              variant="outline-success"
              class="my-2 my-sm-0"
              type="submit"
              >Spam</b-button
            ></b-navbar-brand
          >
        </b-col>
        <b-col cols="1">
          <router-link to="/home" class="iterms">
            <b-icon
              icon="x-circle"
              scale="1.5"
              variant="danger"
              id="back"
              v-b-popover.hover="'Exit'"
            ></b-icon
          ></router-link>
        </b-col>
      </b-row>
    </b-card>
    <b-row>
      <b-col cols="9" id="ticketing">
        {{ ticket }}
        <b-tabs>
          <b-tab title="All" v-if="selected_tab === 'all'">
            <template>
              <ol>
                <li v-for="ticket in data" :key="ticket.id">
                  <b-card-text class="ticket-card">
                    <b-row align-v="center">
                      <b-col cols="1">
                        <!--<input type="checkbox" :value="ticket.name" v-model="selected"> <span class="checkbox-label"> </span> <br>-->
                        <input
                          type="checkbox"
                          v-model="selected"
                          :value="ticket.name"
                          number
                        />
                      </b-col>
                      <b-col>
                        <tick
                          :name="ticket.name"
                          :massage="ticket.massage"
                          :date="ticket.date"
                          :id="ticket.id"
                        />
                      </b-col>
                    </b-row>
                  </b-card-text>
                </li>
              </ol>
            </template>
          </b-tab>

          <b-tab v-else-if="selected_tab === 'admin'" title="Admin" active>
            <b-card>
              <ol>
                <li v-for="ticket in admin" :key="ticket.id">
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
                          :name="ticket.name"
                          :massage="ticket.massage"
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
            v-else-if="selected_tab === 'marketing'"
            title="Marketing"
            active
          >
            <b-card>
              <ol>
                <li v-for="ticket in marketing" :key="ticket.id">
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
                          :name="ticket.name"
                          :massage="ticket.massage"
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
            v-else-if="selected_tab === 'itsupport'"
            title="Support"
            active
          >
            <b-card>
              <ol>
                <li v-for="ticket in itsupport" :key="ticket.id">
                  <b-card-text class="ticket-card">
                    <b-row align-v="center">
                      <b-col cols="1">
                        <input
                          type="checkbox"
                          v-model="selected"
                          :value="ticket.name"
                          number
                        />
                      </b-col>
                      <b-col>
                        <tick
                          :name="ticket.name"
                          :massage="ticket.massage"
                          :date="ticket.date"
                        />
                      </b-col>
                    </b-row>
                  </b-card-text>
                </li>
              </ol>
            </b-card>
          </b-tab>

          <b-tab v-else-if="selected_tab === 'account'" title="Accounts" active>
            <b-card>
              <ol>
                <li v-for="ticket in account" :key="ticket.id">
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
                          :name="ticket.name"
                          :massage="ticket.massage"
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
      <b-col>
        <div class="filter">
          <b-row>
            <b-col cols="3">
              <h6>Filters</h6>
            </b-col>
            <b-col cols="7"> </b-col>
            <b-col cols="2">
              <h6>O</h6>
            </b-col>
          </b-row>

          <!-- select tag start -->
          <div>
            <b-form-group id="fieldset-1" label="Name:" label-for="input-1">
              <b-form-select id="input-1" :options="name"></b-form-select>
            </b-form-group>
          </div>
          <!-- select tag end -->
          <!-- select tag start -->
          <div>
            <b-form-group id="fieldset-2" label="Agent:" label-for="input-2">
              <b-form-select id="input-2" :options="agent"></b-form-select>
            </b-form-group>
          </div>
          <!-- select tag end -->
        </div>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import tick from "@/components/tickets/ticket1.vue";
import atick from "@/components/deptTickets/Admin.vue";
import mtick from "@/components/deptTickets/MarketingTicks.vue";
import stick from "@/components/deptTickets/Supportticks.vue";
import actick from "@/components/deptTickets/accountsticks.vue";
export default {
  name: "ticket",
  components: {
    tick,
    atick,
    mtick,
    stick,
    actick
  },
  data() {
    return {
      data: [],
      admin: [],
      marketing: [],
      itsupport: [],
      account: [],

      selected_tab: "all",
      isactive: false,

      selected: [],
      allSelected: false,
      indeterminate: false
    };
  },

  beforeMount() {
    this.getName();
    this.getAdmin();
    this.getMarketing();
    this.getSupport();
    this.getAccounts();
  },
  methods: {
    async getName() {
      const res = await fetch(
        "http://itrackdevs.geo-fuel.com/tools_manager_api/getAllmail.php?action=read"
      );
      const data = await res.json();
      console.log(data);
      this.data = data;
    },
    async getAdmin() {
      const res = await fetch(
        "http://itrackdevs.geo-fuel.com/tools_manager_api/getDepartmentstickets.php?action=admin"
      );
      const admin = await res.json();
      this.admin = admin;
    },

    async getMarketing() {
      const res = await fetch(
        "http://itrackdevs.geo-fuel.com/tools_manager_api/getDepartmentstickets.php?action=marketing"
      );
      const marketing = await res.json();
      this.marketing = marketing;
    },

    async getSupport() {
      const res = await fetch(
        "http://itrackdevs.geo-fuel.com/tools_manager_api/getDepartmentstickets.php?action=itsupport"
      );
      const itsupport = await res.json();
      this.itsupport = itsupport;
    },

    async getAccounts() {
      const res = await fetch(
        "http://itrackdevs.geo-fuel.com/tools_manager_api/getDepartmentstickets.php?action=accounts"
      );
      const account = await res.json();
      this.account = account;
    },
    selectTab: function(tab) {
      if (this.selected_tab != tab) {
        this.selected_tab = tab;
        this.isactive = tab;
      } else {
        this.selected_tab = "all";
        this.isactive = "all";
      }
    },
    toggleAll(checked) {
      this.selected = checked ? this.flavours.slice() : [];
    }
  },

  watch: {
    selected(newValue) {
      // Handle changes in individual flavour checkboxes
      if (newValue.length === 0) {
        this.indeterminate = false;
        this.allSelected = false;
      } else if (newValue.length === this.flavours.length) {
        this.indeterminate = false;
        this.allSelected = true;
      } else {
        this.indeterminate = true;
        this.allSelected = false;
      }
    }
  },

  computed: {
    selectAll: {
      get: function() {
        return this.data ? this.selected.length == this.data.length : false;
      },
      set: function(value) {
        var selected = [];

        if (value) {
          this.data.forEach(function(ticket) {
            selected.push(ticket.name);
          });
        }

        this.selected = selected;
      }
    }
  }
};
</script>
<style>
.nav2 {
  background: white !important;
  margin-top: 0.9rem;
}
#ticketing {
  max-height: 500px;

  overflow-y: scroll;
}
#back {
  margin-left: 98%;
  margin-top: 2px;
}
</style>
