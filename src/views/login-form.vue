<template>
    <div class="backg">
        <div class="login-div text-center">
            <h1>{{user}}</h1>
    <b-form >
        <div class="inputgroups text-left">
            <label  for="inline-form-input-name">User Name:</label>
            <b-form-input
                id="input-name"
                class="mb-2 mr-sm-2 mb-sm-0 input"
                placeholder="username"
            ></b-form-input>

            <label  for="inline-form-input-username">Password:</label>
            <b-form-input
                id="input-password"
                class="mb-2 mr-sm-2 mb-sm-0 input"
                placeholder="password"
                type="password"
            ></b-form-input>
        </div>
    <div class="remember text-left">
      <b-form-checkbox
                id="checkbox-1"
                v-model="status"
                name="checkbox-1"
                value="accepted"
                >
      rember me
    </b-form-checkbox>
    </div>
        <router-link to="/home" class ="iterms"><b-button  class="searchBtn" variant="primary">login</b-button></router-link>
      <div class="admin"><b-link v-on:click="setAdmin()">Login as {{defaultUser}} </b-link>|<b-link v-on:click="setAgent()" > fogot password</b-link></div>
    </b-form>
  </div>
    </div>    
</template>
<script>
export default {
  data(){
      return {
          user:"Agent",
          defaultUser: "Admin"
      }
  },
  methods:{
      setAdmin(){
          this.user = "Admin"
          if ( this.defaultUser == "Agent") {
              this.defaultUser = "Admin"
              this.user = "Log in"
          } else {
                this.defaultUser = "Agent"
                this.user = "Admin"
          }
      },
  }
}
</script>
<style scoped>
  .login-div{
    /*background-color: rgb(105, 100, 100);*/
    /*opacity: 0.5;*/
    width: 22%;
    padding:20px 30px;
    border-radius: 5px;
    box-shadow: 0 15px 30px rgba(0,0,0,.2);
    margin-left: 38%;
              
  }
  .searchBtn{
    padding: 6px 40px;
    background-color: #05cc15;
    border: transparent;
    margin-top:1rem;
    width:100%;
  }
  label{
      margin-top:1rem;
  }
  .remember{
      color:white;
      margin-top: .5rem;
     
  }
   .admin{
      color:white;
      margin-top: .5rem;
  }
  @keyframes change-bg{
      0%{ background-image: url(../assets/backg.png);}
      20%{background-image: url(../assets/backg2.png);}
      40%{background-image: url(../assets/backg3.png);}
      60%{background-image: url(../assets/backg4.png);}
      80%{background-image: url(../assets/backg5.png);}
      100%{background-image: url(../assets/backg.png);}
  }
  .backg{
      padding-top:10rem;
      width: 100%;
      height: 100vh;
      background-size: cover;  
      animation-name:change-bg;
      animation-duration:50s;
      animation-iteration-count: infinite;
      transition: ease-in;
  }

  .inputgroups{
      color:white;
  }
  b-link{
       background-color: #05cc15;
  }
</style>