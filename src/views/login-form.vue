<template>
  <div class="backg">
    <div class="login-div text-center">
      <h3>{{ user }}</h3>
      <b-form>
        <div class="inputgroups text-left">
          <label for="inline-form-input-name">User Name:</label>
          <b-form-input
            v-model="username"
            id="input-name"
            class="mb-2 mr-sm-2 mb-sm-0 input"
            placeholder="username"
          ></b-form-input>

          <label for="inline-form-input-username">Password:</label>
          <b-form-input
            v-model="passw"
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
            remember me
          </b-form-checkbox>
        </div>
        <b-button v-on:click="islogedIn(); createLogs()" class="searchBtn" variant="primary"
          >login</b-button
        >
        <div class="admin">
          <b-link v-on:click="setAdmin()">Login as {{ defaultUser }} </b-link
          >|<b-link v-on:click="setAgent()"> Forgot Password</b-link>
        </div>
      </b-form>
    </div>
   <!-- <router-link to="/home" class="iterms"
      ><b-button class="searchBtn" variant="primary"
        >login</b-button
      ></router-link
    >
    <div class="admin">
      <b-link v-on:click="setAdmin()">Login as {{ defaultUser }} </b-link
      >|<b-link v-on:click="setAgent()"> fogot password</b-link>
    </div>-->
  </div>
</template>
<script>
import axios from "axios";
//import axios from 'axios';
export default {
  data() {
    return {
      status: "",
      username: "",
      user: "Tools Manager",
      defaultUser: "Admin",
      data: {},
      passw: "",
    };
  },

  beforeMount() {
    this.getName();
  },
  methods: {
        createLogs: function() {
      console.log("Create logs!");

      let formData = new FormData();
      console.log("username:", this.username);
       ;
        

      var contact = {};
      formData.forEach(function(value, key) {
        contact[key] = value;
      });

      axios({
        method: "post",
        url: "http://itrackdevs.geo-fuel.com/tools_manager_api/userLogs.php",
        data: formData,
        config: { headers: { "Content-Type": "multipart/form-data" } },
      }).catch(function(response) {
        //handle error
        console.log(response);
      });
    },

    async getName() {
      const res = await fetch(
        "https://itrackdevs.geo-fuel.com/tools_manager_api/login.php"
      );
      const data = await res.json();
      this.data = data;
    },
    setAdmin() {
      this.user = "Admin";
      if (this.defaultUser == "Tools Manager") {
        this.defaultUser = "Admin";
        this.user = "Log in";
      } else {
        this.defaultUser = "Tools Manager";
        this.user = "Admin";
      }
    },



    islogedIn: function () {
      var i = 0;
      while (i < this.data.length) {
        if (
          this.username === this.data[i]["username"] &&
          this.passw === this.data[i]["password"]
        ) {
          localStorage.setItem("username", this.username);
          this.$router.push("/home");
          this.$emit("log-in");
          break;
        } else if (this.username == "" || this.passw == "") {
          alert("Enter Username and Password");
          break;
        }
        i++;
      }

      /*
      
      if(this.usern != "" && this.passw != "") {     
        let formData = new FormData();
        console.log("usern:", this.usern),

        formData.append('usern', this.usern),
        formData.append('passw', this.passw)
        var contact = {};
        formData.forEach(function(value, key){
            contact[key] = value;
        });

        axios({
            request: 1,
            method: 'post',
            url: 'http://itrackdevs.geo-fuel.com/tools_manager_api/logging.php',
            data: formData,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
        })
        .then(function(response) {
        console.log(response);
        if (response.data[0].status == 1) {
         alert('Login Successfully');
        } else {
         alert("User does not exist");
        }
       })

        .catch(function (response) {
            //handle error
            console.log(response)
            
        });
              
    this.$emit("log-in");
          }
      else {
      alert('Please enter username & password');
     } */
    },

    
  },
};
</script>
<style scoped>
.login-div {
  /*background-color: rgb(105, 100, 100);*/
  /*opacity: 0.5;*/
  width: 22%;
  padding: 20px 30px;
  border-radius: 5px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  margin-left: 38%;
}
.searchBtn {
  padding: 6px 40px;
  background-color: #05cc15;
  border: transparent;
  margin-top: 1rem;
  width: 100%;
}
label {
  margin-top: 1rem;
}
.remember {
  color: white;
  margin-top: 0.5rem;
}
.admin {
  color: white;
  margin-top: 0.5rem;
}
@keyframes change-bg {
  0% {
    background-image: url(../assets/backg.png);
  }
  20% {
    background-image: url(../assets/backg2.png);
  }
  40% {
    background-image: url(../assets/backg3.png);
  }
  60% {
    background-image: url(../assets/backg4.png);
  }
  80% {
    background-image: url(../assets/backg5.png);
  }
  100% {
    background-image: url(../assets/backg.png);
  }
}
.backg {
  padding-top: 10rem;
  width: 100%;
  height: 100vh;
  background-size: cover;
  animation-name: change-bg;
  animation-duration: 50s;
  animation-iteration-count: infinite;
  transition: ease-in;
}

.inputgroups {
  color: white;
}
b-link {
  background-color: #05cc15;
}
</style>
