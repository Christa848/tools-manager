<template>
  <b-container class="bv-example-row">
    <b-row>
      <b-col id="un">
        <b-row>
          <b-col cols="8">Marketing</b-col>
          <b-col cols="4">{{ marketing.length }}</b-col>
        </b-row>
        <hr />
        <b-row>
          <b-col cols="8">IT Support</b-col>
          <b-col cols="4">{{ itsupport.length }}</b-col>
        </b-row>
        <hr />
        <b-row>
          <b-col cols="8">Accounting</b-col>
          <b-col cols="4">{{ account.length }}</b-col>
        </b-row>
        <hr />
        <b-row>
          <b-col cols="8">Systems Development</b-col>
          <b-col cols="4">{{ systems.length }}</b-col>
        </b-row>
      </b-col>
      <b-col id="cs"
        ><h4>Customer Satisfaction</h4>
        <p><small>Across help desk this month</small></p>

        <b-col>
          Responses received
          <H3>100</H3>
        </b-col>
        <b-col
          >Positive
          <h3>
            <b-icon icon="emoji-smile" scale="1" variant="success"></b-icon>27%
          </h3>
        </b-col>
        <hr />
        <div class="w-100"></div>
        <b-col
          >Negative
          <h3>
            <b-icon icon="emoji-frown" scale="1" variant="danger"></b-icon>27%
          </h3>
        </b-col>
        <hr />
        <b-col
          >Neutral
          <h3>
            <b-icon icon="emoji-neutral" scale="1" variant="warning"></b-icon
            >27%
          </h3>
        </b-col>
      </b-col>
      <b-col id="td">
        <h4>My To-do</h4>
        <div id="todoApp">
          <form
            name="todo-form"
            method="post"
            action=""
            v-on:submit.prevent="addTask"
          >
            <input
              name="add-todo"
              type="text"
              v-model="addTodoInput"
              v-bind:class="{ error: hasError }"
            />
            <button type="submit">Add</button>
          </form>
        </div>

        <div class="todo-lists" v-if="lists.length">
          <h6>Tasks for the Day ({{ lists.filter(item => !item.completed).length }} remaining)</h6>
          <ol>
            <li v-for="list in filterLists" :key="list.id">
              <input
                type="checkbox"
                v-model="list.completed"
                v-on:change="updateTask($event, list)"
              />
              <span
                class="title"
                contenteditable="true"
                v-on:keydown.enter="updateTask($event, list)"
                v-on:blur="updateTask($event, list)"
                v-bind:class="{ completed: list.completed }"
              >
                {{ list.title }}
              </span>
              <span class="remove" v-on:click="removeTask(list)">x</span>
            </li>
          </ol>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import _ from "lodash";
import axios from "axios";
export default {
  name: "lower",
  data() {
    return {
      data: [],
      selected: [],
      admin: [],
      marketing: [],
      itsupport: [],
      account: [],
      software: [],
      systems: [],
      listData: [],
      lists: [],
      hasError: false,

      addTodoInput: "",
    };
  },

  computed: {
    filterLists: function() {
      return _.orderBy(this.lists, ["completed", false]);
    },
  },

  beforeMount() {
    this.getName();
    this.getSoftware();
    this.getAdmin();
    this.getMarketing();
    this.getSupport();
    this.getAccounts();
    this.getTask();
    this.getSystems();
  },

  methods: {
    async getName() {
      const res = await fetch(
        "http://itrackdevs.geo-fuel.com/tools_manager_api/getAllmail.php"
      );
      const data = await res.json();
      this.data = data;
    },

    // async getSoftware() {
    //   const res = await fetch(
    //     "http://itrackdevs.geo-fuel.com/tools_manager_api/getAllmail.php"
    //   );
    //   const software = await res.json();
    //   this.software = software;
    // },

        async getSoftware() {
      const res = await fetch(
        "http://itrackdevs.geo-fuel.com/tools_manager_api/getDepartmentstickets.php?action=devs"
      );
      const software = await res.json();
      this.software = software;
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
    async getSystems() {
      const res = await fetch(
        "http://itrackdevs.geo-fuel.com/tools_manager_api/getDepartmentstickets.php?action=systems"
      );
      const systems = await res.json();
      this.systems = systems;
    },
    addTask: function() {
      if (!this.addTodoInput) {
        // <--- If no value then we are setting error to `true`
        this.hasError = true;
        return; // <--- stops here
      }
      this.hasError = false;
      this.lists.push({
        id: this.lists.length + 1,
        title: this.addTodoInput,
        isComplete: false,
      });

      // To format a content-type for CORS preflight request
      let formData = new FormData();
      let owner = localStorage.getItem("username");
      formData.append("task", this.addTodoInput);
      formData.append("owner", owner);
      formData.append("completed", "not done");
      
      axios
        .post("addListItem.php", formData)
        .then(() => {
          this.addTodoInput = "";
          console.log("Task added successfully") 
        })
        .catch(error => {
          console.error(error);
          this.addTodoInput = ""; 
        });
    },
    getTask: function() {
      const formData = new FormData();
      formData.append("owner", localStorage.getItem("username"));
      axios
        .post("getListItem.php", formData)
        .then((response) => {
          let userList = [...response.data];
          userList.forEach((val) => {
            let completeness = val.completed == "done" ? true : false;
            this.lists.push({
              id: val.id,
              title: val.task,
              isComplete: completeness
            });
          });
        })
        .catch(error => console.error(error));
    },
    updateTask: function(e, list) {
      e.preventDefault();
      list.task = e.target.innerText;
      const formData = new FormData();
      formData.append("task", list.title);
      formData.append("completed", list.completed);
      formData.append("id", list.id);
      axios
        .post("editItemList.php", formData)
        .then(() => console.log("Record modified successfully"))
        .catch(error => console.error(error));

      e.target.blur();
    },

    completeTask: function(list) {
      list.completed = !list.completed;
    },

    removeTask: function(list) {
      var index = _.findIndex(this.lists, list);
      const formData = new FormData();
      formData.append("id", list.id);
      axios
        .post("deleteItemList.php", formData)
        .catch(error => console.error(error));
      this.lists.splice(index, 1);
    }
  }
};
</script>
<style scoped>
#un {
  margin-right: 0.5rem;
  background-color: white;
}
#un:hover {
  transform: scale(1.1);
}
#cs {
  background-color: white;
}
#cs:hover {
  transform: scale(1.1);
}
#td {
  margin-left: 0.5rem;
  background-color: white;
}
#td:hover {
  transform: scale(1.1);
}

:root {
  font-family: Arial;
}
input[type="text"] {
  font-size: 16px;
  padding: 8px;
  border-radius: 10px;
  border: 1px solid #c4c4c4;
}

button {
  background: #3498db;
  background-image: linear-gradient(to bottom, #3498db, #2980b9);
  border-radius: 28px;

  color: #ffffff;
  font-size: 16px;
  padding: 8px 20px;
  border: none;
  cursor: pointer;
}
button:hover {
  background: #3cb0fd;
  background-image: linear-gradient(to bottom, #3cb0fd, #3498db);
}
input[type="text"].error {
  border: 1px solid red;
}
[contenteditable="true"]:focus {
  overflow: hidden;
  border: 1px solid transparent;

  -webkit-appearance: textfield;
  -moz-appearance: textfield;
  appearance: textfield;

  white-space: nowrap;
  border-radius: 10px;
}

.title {
  display: inline-block;
  width: 200px;
  border: 1px solid transparent;
  padding: 8px;
  font-size: 16px;
  vertical-align: middle;
}

.title:hover {
  border: 1px solid #c4c4c4;
  border-radius: 10px;
}

.remove {
  cursor: pointer;
  display: inline-block;
  border: 1px solid #c4c4c4;
  border-radius: 50%;
  padding: 0px 4px;
}
.remove:hover {
  background: #3cb0fd;
}

.completed {
  text-decoration: line-through;
}
</style>
