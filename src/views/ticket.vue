<template>
  <div class="text-left">
    <b-card>
      <b-row>
        <b-col cols="1">
          <b-form-group>
            <template #label>
              Select All
              <input type="checkbox" title="Select All" v-model="selectAll" />
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
            <b-dropdown-item
              v-model="support"
              @click="assignSupport, reloadPage"
              >Support</b-dropdown-item
            >
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item
              v-model="finance"
              @click="assignAccounts, reloadPage"
              >Accounts</b-dropdown-item
            >
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item v-model="admin" @click="assignAdmin, reloadPage"
              >Admin</b-dropdown-item
            >
            <b-dropdown-item v-model="admin" @click="assignSoftware, reloadPage"
              >Software Development</b-dropdown-item
            >
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item
              v-model="marketing"
              @click="assignMarketing, reloadPage"
              >Marketing</b-dropdown-item
            >
            <b-dropdown-divider></b-dropdown-divider>
          </b-dropdown>

          <b-navbar-brand>
            <b-button
              variant="outline-success"
              class="my-2 my-sm-0"
              type="submit"
              @click="deleteData(), reloadPage()"
              >Delete</b-button
            >
          </b-navbar-brand>
          <b-button
            variant="outline-success"
            size="md"
            id="show-btn"
            @click="showModal"
            >Create Ticket</b-button
          >
          <b-modal ref="my-modal" hide-footer title="Enter Ticket Details">
            <div>
              <b-form @submit.stop="createTicket" @reset="onReset" v-if="show">
                <b-form-group
                  id="input-group-2"
                  label="Ticket Message:"
                  label-for="input-2"
                >
                  <b-form-input
                    id="input-2"
                    v-model="ticket_msg"
                    placeholder="Ticket Message"
                    required
                  ></b-form-input>
                </b-form-group>

                <b-form-group
                  id="input-group-4"
                  label="Assigned To:"
                  label-for="input-2"
                >
                  <b-form-input
                    id="input-4"
                    v-model="assigned_to"
                    placeholder="Assigned To"
                    required
                  ></b-form-input>
                </b-form-group>

                <b-form-group
                  id="input-group-3"
                  label="Status:"
                  label-for="input-2"
                >
                  <b-form-input
                    id="input-3"
                    v-model="ticket_status"
                    placeholder="Open, In-Progress or Closed"
                    required
                  ></b-form-input>
                </b-form-group>

                <b-form-group
                  id="input-group-6"
                  label="Priority:"
                  label-for="input-2"
                >
                  <b-form-input
                    id="input-6"
                    v-model="priority"
                    placeholder="Low, Medium, High"
                    required
                  ></b-form-input>
                </b-form-group>
                <b-button type="submit" variant="primary">Submit</b-button>
                <b-button type="reset" variant="danger">Reset</b-button>
              </b-form>
            </div>

            <b-button
              class="mt-3"
              variant="outline-danger"
              block
              @click="hideModal"
              >Close</b-button
            >
          </b-modal>
        </b-col>
        <b-col cols="1">
          <router-link to="/home" class="iterms">
            <b-icon
              icon="x-circle"
              scale="1.5"
              variant="danger"
              id="back"
              v-b-popover.hover="'Exit'"
            ></b-icon>
          </router-link>
        </b-col>
      </b-row>
    </b-card>

    <b-row>
      <b-col cols="9" id="ticketing">
        <b-tabs>
          <b-tab title="All" v-if="selected_tab === 'all'">
            <div v-if="data">
              <template>
                <ol>
                  <li v-for="ticket in itemsSearched" :key="ticket.id">
                    <b-card-text class="ticket-card">
                      <b-row align-v="center">
                        <b-col cols="1">
                          <!--<input type="checkbox" :value="ticket.name" v-model="selected"> <span class="checkbox-label"> </span> <br>-->
                          <input
                            type="checkbox"
                            v-model="selected"
                            :value="ticket.id"
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
              </template>
            </div>
          </b-tab>

          <b-tab v-else-if="selected_tab === 'admin'" title="Admin" active>
            <div v-if="admin">
              <b-card>
                <ol>
                  <li v-for="ticket in itemsSearcheda" :key="ticket.id">
                    <b-card-text class="ticket-card">
                      <b-row align-v="center">
                        <b-col cols="1">
                          <input
                            type="checkbox"
                            v-model="selected"
                            :value="ticket.id"
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
            </div>
          </b-tab>

          <b-tab
            v-else-if="selected_tab === 'marketing'"
            title="Marketing"
            active
          >
            <div v-if="marketing">
              <b-card>
                <ol>
                  <li v-for="ticket in itemsSearchedm" :key="ticket.id">
                    <b-card-text class="ticket-card">
                      <b-row align-v="center">
                        <b-col cols="1">
                          <input
                            type="checkbox"
                            v-model="selected"
                            :value="ticket.id"
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
            </div>
          </b-tab>

          <b-tab
            v-else-if="selected_tab === 'itsupport'"
            title="Support"
            active
          >
            <div v-if="itsupport">
              <b-card>
                <ol>
                  <li v-for="ticket in itemsSearcheds" :key="ticket.id">
                    <b-card-text class="ticket-card">
                      <b-row align-v="center">
                        <b-col cols="1">
                          <input
                            type="checkbox"
                            v-model="selected"
                            :value="ticket.id"
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
            </div>
          </b-tab>

          <b-tab v-else-if="selected_tab === 'account'" title="Accounts" active>
            <div v-if="account">
              <b-card>
                <ol>
                  <li v-for="ticket in itemsSearchedac" :key="ticket.id">
                    <b-card-text class="ticket-card">
                      <b-row align-v="center">
                        <b-col cols="1">
                          <input
                            type="checkbox"
                            v-model="selected"
                            :value="ticket.id"
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
            </div>
          </b-tab>
        </b-tabs>
      </b-col>
      <b-col>
        <div class="filter">
          <b-row>
            <b-col cols="7">
              <h6>Filter by name</h6>
            </b-col>
            <b-col cols="1"></b-col>
            <b-col cols="2">
              <h6>O</h6>
            </b-col>
          </b-row>
          <b-form-input
            id="input-large"
            size="lg"
            placeholder="Search in Tickets"
            v-model="searchText"
          ></b-form-input>
          <!-- <input v-model="searchText" /> -->
        </div>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import axios from "axios";
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
      ticket: null,
      agent: [],
      name: null,
      show: true,
      support: "",
      ticket_msg: "",
      logged_by: "",
      assigned_to: "",
      ticket_status: "",
      priority: "",
      selected_tab: "all",
      isactive: false,
      searchText: "",
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
      //console.log(data);
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
    },

    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.ticket_msg = "";
      this.logged_by = "";
      this.ticket_status = "";
      this.priority = "";
      this.assigned_to = "";

      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },

    createTicket: function() {
      console.log("starting creating process")
      let formData = new FormData();
      formData.append("ticket_msg", this.ticket_msg);
      formData.append("assigned_to", this.assigned_to);
      formData.append("logged_by", localStorage.getItem("username"));
      formData.append("ticket_status", this.ticket_status);
      formData.append("priority", this.priority);
      formData.append("createdOn", new Date());

      axios
        .post("createTicket.php", formData)
        .then(response => console.log(response.statustext))
        .catch(err => console.error(err));
    },

    assignAdmin: function() {
      console.log(this.selected[0]);
      let i = 0;
      while (i < this.selected.length) {
        let formData = new FormData();
        formData.append(`id${i}`, this.selected[i]);
        console.log(this.selected[i]);
        axios
          .post(
            "http://itrackdevs.geo-fuel.com/tools_manager_api/assignTickets.php?action=admin",
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data"
              }
            }
          )
          .then(response => console.log(response.statusText))
          .catch(function(error) {
            console.log(error);
          });
        i++;
      }
    },

    assignMarkerting: function() {
      console.log(this.selected[0]);
      let i = 0;
      while (i < this.selected.length) {
        let formData = new FormData();
        formData.append(`id${i}`, this.selected[i]);
        console.log(this.selected[i]);
        axios
          .post(
            "http://itrackdevs.geo-fuel.com/tools_manager_api/assignTickets.php?action=marketing",
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data"
              }
            }
          )
          .then(response => console.log(response.statusText))
          .catch(function(error) {
            console.log(error);
          });
        i++;
      }
    },

    assignSupport: function() {
      console.log(this.selected[0]);
      let i = 0;
      while (i < this.selected.length) {
        let formData = new FormData();
        formData.append(`id${i}`, this.selected[i]);
        console.log(this.selected[i]);
        axios
          .post(
            "http://itrackdevs.geo-fuel.com/tools_manager_api/assignTickets.php?action=support",
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data"
              }
            }
          )
          .then(response => console.log(response.statusText))
          .catch(function(error) {
            console.log(error);
          });
        i++;
      }
    },

    assignSoftware: function() {
      console.log(this.selected[0]);
      let i = 0;
      while (i < this.selected.length) {
        let formData = new FormData();
        formData.append(`id${i}`, this.selected[i]);
        console.log(this.selected[i]);
        axios
          .post(
            "http://itrackdevs.geo-fuel.com/tools_manager_api/assignTickets.php?action=software",
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data"
              }
            }
          )
          .then(response => console.log(response.statusText))
          .catch(function(error) {
            console.log(error);
          });
        i++;
      }
    },

    assignAccounts: function() {
      console.log(this.selected[0]);
      let i = 0;
      while (i < this.selected.length) {
        let formData = new FormData();
        formData.append(`id${i}`, this.selected[i]);
        console.log(this.selected[i]);
        axios
          .post(
            "http://itrackdevs.geo-fuel.com/tools_manager_api/assignTickets.php?action=accounts",
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data"
              }
            }
          )
          .then(response => console.log(response.statusText))
          .catch(function(error) {
            console.log(error);
          });
        i++;
      }
    },
    showModal() {
      this.$refs["my-modal"].show();
    },
    hideModal() {
      this.$refs["my-modal"].hide();
    },
    // Done 😃
    deleteData: function() {
      console.log(this.selected[0]);
      let i = 0;
      while (i < this.selected.length) {
        let formData = new FormData();
        formData.append(`id${i}`, this.selected[i]);
        console.log(this.selected[i]);
        axios
          .post(
            "http://itrackdevs.geo-fuel.com/tools_manager_api/deleteTicket.php",
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data"
              }
            }
          )
          .then(response => console.log(response.statusText))
          .catch(function(error) {
            console.log(error);
          });
        i++;
      }
    },
    reloadPage() {
      window.location.reload();
      alert("Ticket Deleted");
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
            selected.push(ticket.id);
          });
        }

        this.selected = selected;
      }
    },

    filteredRows() {
      return this.data.filter(row => {
        const name = row.name.toString().toLowerCase();

        const searchTerm = this.filter.toLowerCase();

        return name.includes(searchTerm);
      });
    },

    itemsSearched: function() {
      var self = this;
      if (this.searchText == "") {
        return this.data;
      }
      return this.data.filter(function(ticket) {
        // console.log(ticket.indexOf(self.searchText))
        return ticket.name.indexOf(self.searchText) >= 0;
      });
    },

    itemsSearchedm: function() {
      var self = this;
      if (this.searchText == "") {
        return this.marketing;
      }
      return this.marketing.filter(function(ticket) {
        // console.log(ticket.indexOf(self.searchText))
        return ticket.name.indexOf(self.searchText) >= 0;
      });
    },
    itemsSearcheda: function() {
      var self = this;
      if (this.searchText == "") {
        return this.admin;
      }
      return this.admin.filter(function(ticket) {
        // console.log(ticket.indexOf(self.searchText))
        return ticket.name.indexOf(self.searchText) >= 0;
      });
    },
    itemsSearcheds: function() {
      var self = this;
      if (this.searchText == "") {
        return this.itsupport;
      }
      return this.itsupport.filter(function(ticket) {
        // console.log(ticket.indexOf(self.searchText))
        return ticket.name.indexOf(self.searchText) >= 0;
      });
    },

    itemsSearchedac: function() {
      var self = this;
      if (this.searchText == "") {
        return this.account;
      }
      return this.account.filter(function(ticket) {
        // console.log(ticket.indexOf(self.searchText))
        return ticket.name.indexOf(self.searchText) >= 0;
      });
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
