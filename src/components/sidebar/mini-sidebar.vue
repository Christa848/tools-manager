<template>
  <div id="inner">
    <b-row class="mb-1 sidelink">
      <b-col cols="12" sm="12" class="p-3"
        ><router-link to="/home" class="iterms">
          <b-icon icon="card-checklist"></b-icon> </router-link
      ></b-col>
    </b-row>
    <b-row class="mb-1 sidelink">
      <b-col cols="12" sm="12" class="p-3"
        ><router-link to="/ticket" class="iterms">
          <b-icon icon="journals"></b-icon></router-link
      ></b-col>
    </b-row>
    <b-row class="mb-2 sidelink">
      <b-col>
        <b-input-group>
          <template #prepend>
            <b-icon class="ico" icon="person-square" variant="light"></b-icon>
          </template>

          <b-dropdown
            id="my-nav-dropdown"
            text=""
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
      <b-col cols="12" sm="12" class="p-3"
        ><router-link to="/report" class="iterms">
          <b-icon icon="server"></b-icon></router-link
      ></b-col>
    </b-row>
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
  color: #3432b6;
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