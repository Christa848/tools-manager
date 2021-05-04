<template>

  <div id="app">
    <div class="login-page" v-if="hideSideBar ">
      <router-view v-on:log-in= "logIn" />
    </div>
    <div v-else class="application">
      <div id="nav" >
        <!-- if it does not work put back the parentesis on togleSideBar() -->
       <supportnav v-on:togle-sidebar="togleSidebar"/>
    </div>
      <b-row>
      <b-col  cols="1.7" v-if="this.sidebar_shown==true">
        <div class="sidebar">
          <supportside/> 
        </div>
    </b-col>
    <b-col  cols="1.7" v-if="this.sidebar_shown==false">
        <div class="sidebar">
          <minisiderbar/> 
        </div>
    </b-col>
     <b-col >
       <div class="main">
         <router-view :massage="myname" />
       </div>
    </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import supportnav from "@/components/naavi.vue";
import supportside from "@/components/sidebar/sidebar.vue";
import minisiderbar from "@/components/sidebar/mini-sidebar.vue";



export default {
  name: "App",
  components: {
    supportnav, 
   supportside,
   minisiderbar
      
  },
  data(){
    return{
      is_logged_in:false,
      sidebar_shown:true,
      myname:'elvin'
    }
  },
  methods:{
    logIn(){
      this.is_logged_in = true
    },
    togleSidebar(){
      if(this.sidebar_shown)
      {
        this.sidebar_shown=false
      }
      else{
        this.sidebar_shown=true
      }
    }

  },
  computed:{
    hideSideBar(){
      return this.$route.meta.hideSideBar
    }

  }

}
</script>

<style>
#app{
  background-color: rgba(247, 247, 247, 0.89);
  overflow: hidden;

}
#nav{
  background-color: #284255!important;
  height: 100px;
  
}
.main{
  height: calc(100vh - 100px);
  overflow: scroll;
}



</style>