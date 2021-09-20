<template>
  <div id="inner">
    <b-row class="mb-1 sidelink">
      <b-col cols="12" sm="12" class="p-3 "
        ><router-link to="/home" class="iterms">
          <b-icon icon="card-checklist"></b-icon> Dashboard</router-link
        ></b-col
      >
    </b-row>
    <b-row class="mb-1 sidelink">
      <b-col cols="12" sm="12" class="p-3 "
        ><router-link to="/ticket" class="iterms">
          <b-icon icon="journals"></b-icon> Tickets</router-link
        ></b-col
      >
    </b-row>
    <b-row class="mb-2 sidelink">
      <b-col>
        <b-input-group>
          <template #prepend>
            <b-icon class="ico" icon="person-square" variant="light"></b-icon>
          </template>

          <b-dropdown
            id="my-nav-dropdown"
            text="Contacts"
            color="black"
            variant="none"
            right
          >
            <b-dropdown-item>
              <router-link to="/individualContacts" id="my-nav-dropdown"
                >Individuals</router-link
              ></b-dropdown-item
            >
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item
              ><router-link to="/comContacts" id="my-nav-dropdown"
                >Companies</router-link
              ></b-dropdown-item
            >
          </b-dropdown>
        </b-input-group>
      </b-col>
    </b-row>
    <b-row class="mb-1 sidelink">
      <b-col cols="12" sm="12" class="p-3 ">
        <!--  <router-link to="/report" class="iterms">
          <b-icon icon="server"></b-icon> Report</router-link -->
        <b-input-group>
          <template #prepend>
            <b-icon icon="server" class="ico"></b-icon>
          </template>
          <b-dropdown
            id="my-nav-dropdown"
            text="Reports"
            color="black"
            variant="none"
            right
          >
            <b-dropdown-item>
              <router-link to="/HelpDeskInDepth" id="my-nav-dropdown"
                >HelpDesk in Depth</router-link
              ></b-dropdown-item
            >

            <b-dropdown-item
              ><router-link to="/TicketVolume" id="my-nav-dropdown"
                >Ticket Volome</router-link
              ></b-dropdown-item
            >

            <b-dropdown-item
              ><router-link to="/AgentPerfomance" id="my-nav-dropdown"
                >Agent Perfomance</router-link
              ></b-dropdown-item
            >
            <b-dropdown-item
              ><router-link to="/GroupPerfomance" id="my-nav-dropdown"
                >Group Perfomance</router-link
              ></b-dropdown-item
            >
          </b-dropdown>
        </b-input-group>
      </b-col>
    </b-row>

    

        <b-row class="mb-1 sidelink" v-b-modal.modal-3>
      <b-col cols="12" sm="12" class="p-3 "
        >
          <b-icon icon="dice6"></b-icon>  User Logs</b-col
      >
    </b-row>

    <div>
  <b-modal id="modal-3" size="xl" title="User Logs">
    <div>
            <b-row>
              <b-col cols="3">
              <div>
                
  <b-dropdown id="dropdown-1" text="Choose User" class="m-md-2">
    <b-dropdown-item>Christa</b-dropdown-item>
    <b-dropdown-item>Tinashe</b-dropdown-item>
    <b-dropdown-item>Kelvin</b-dropdown-item>
    <b-dropdown-divider></b-dropdown-divider>

  </b-dropdown>
</div>
              </b-col>
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
              <b-col cols="1">
                <p></p>
                <p></p>
                <b-button href="#" variant="primary" id="filt">
                  Filter</b-button
                >
              </b-col>
            </b-row>
          </div>
  </b-modal>
</div>
  </div>
</template>
<script>
export default {};
</script>
<style>
#inner {
  background-color: rgb(36, 36, 77) !important;
  margin-left: 0.1in;
  background-color: #284255 !important;
  padding-left: 2rem;
  height: calc(100vh - 100px);
  text-align: left;
  color: #ffff;
  box-shadow: 4px 0px #f7f7f7;
}
.ico {
  margin-top: 0.6rem;
}

a {
  color: #ffff;
  text-decoration: unset;
}
a:hover {
  text-decoration: unset;
  color: rgb(165, 162, 162);
}
#my-nav-dropdown__BV_toggle_ {
  color: #ffff !important;
}
.sidelink {
  border-bottom: solid 1px #fff;
}
a #my-nav-dropdown {
  color: black;
}
</style>
