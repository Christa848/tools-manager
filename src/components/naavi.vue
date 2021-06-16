<template>
  <div class="">
    <b-navbar toggleable="lg" type="light" class="">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-icon v-on:click="togleSidebar()" icon="list"></b-icon><log1 />
        <alar />
        <msg />

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto ">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Seach">
              Search</b-form-input
            >

            <b-icon icon="search" variant="light"></b-icon>
          </b-nav-form>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content id="llog">
              <em variant="light"> <b-icon-plus></b-icon-plus> </em>
            </template>

            <b-dropdown-item-button id="dropdown-left" v-b-toggle.sidebar-right
              >New Ticket</b-dropdown-item-button
            >
            <b-dropdown-item-button id="dropdown-left" v-b-toggle.bar1-right
              >New Contact</b-dropdown-item-button
            >
            <b-dropdown-item-button id="dropdown-left" v-b-toggle.company-right>
              New Company</b-dropdown-item-button
            >
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content id="llog">
              <em variant="light">
                <b-icon-person-circle></b-icon-person-circle>{{username}}</em
              >
            </template>
            <b-dropdown-item href="#">Setting</b-dropdown-item>
            <b-dropdown-item href="/">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <!--sidebar start-->
    <b-sidebar id="sidebar-right" title=" New Ticket" right shadow>
      <newt />
    </b-sidebar>

    <b-sidebar id="bar1-right" title=" New Contact" right shadow>
      <newIndi />
    </b-sidebar>
    <b-sidebar id="company-right" title=" New Company" right shadow>
      <newCom />
    </b-sidebar>
  </div>
</template>

<script>
//import axios from 'axios';
import newCom from "@/components/form/newCompany.vue";
import newIndi from "@/components/form/newIndividual.vue";
import newt from "@/components/form/newticket.vue";
import alar from "@/components/icons/alarm.vue";
import log1 from "@/components/logopic/logo.vue";
import msg from "@/components/icons/message.vue";
export default {
  name: "naavi",
  components: {
    log1,
    alar,
    msg,
    newt,
    newIndi,
    newCom,
  },
  data() {
    return {
      username: ''
    }
  },
  async created() {
      this.username = localStorage.getItem("username");
      console.log(this.username);
  },
  methods: {
    togleSidebar() {
      this.$emit("togle-sidebar");
      console.log("clicked");
    }
  }
};
</script>

<style>
.navbar-dark .navbar-nav .nav-link {
  color: white;
}
.navbar-dark .navbar-nav .nav-link:hover {
  color: grey;
}
.navbar-light .navbar-nav .nav-link {
  color: white;
}
.sticky {
  position: fixed;
}
</style>
