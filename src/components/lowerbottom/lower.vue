<template>
  <b-container class="bv-example-row">
    <b-row>
      <b-col id="un">
        <h4>Uresolved Tickets</h4>
        <p><small> Across Helpdesk</small></p>
        <p />
        <b-row>
          <b-col cols="8">Marketing</b-col>
          <b-col cols="4">8</b-col>
        </b-row>
        <hr />
        <b-row>
          <b-col cols="8">IT Support</b-col>
          <b-col cols="4">35</b-col>
        </b-row>
        <hr />
        <b-row>
          <b-col cols="8">Accounting</b-col>
          <b-col cols="4">60</b-col>
        </b-row>
        <hr />
        <b-row>
          <b-col cols="8">Systems Development</b-col>
          <b-col cols="4">0</b-col>
        </b-row>
      </b-col>

      <b-col id="cs"
        ><h4>Customer Satisfaction</h4>
        <p><small>Accross help desk this mounth</small></p>
        <b-container class="bv-example-row">
          <b-row>
            <b-col>
              Responses received
              <H3>300</H3>
            </b-col>
            <b-col
              >Positive
              <h3>
                <b-icon icon="emoji-smile" scale="1" variant="success"></b-icon
                >27%
              </h3>
            </b-col>
            <hr />
            <div class="w-100"></div>
            <b-col
              >Negative
              <h3>
                <b-icon icon="emoji-frown" scale="1" variant="danger"></b-icon
                >27%
              </h3>
            </b-col>
            <b-col
              >Neutral
              <h3>
                <b-icon
                  icon="emoji-neutral"
                  scale="1"
                  variant="warning"
                ></b-icon
                >27%
              </h3>
            </b-col>
          </b-row>
        </b-container>
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
          <h3>My Todo Tasks</h3>
          <ol>
            <li v-for="list in filterLists" :key="list.id">
              <input
                type="checkbox"
                v-on:change="completeTask(list)"
                v-bind:checked="list.completed"
              />
              <span
                class="title"
                contenteditable="true"
                v-on:keydown.enter="updateTask($event, list)"
                v-on:blur="updateTask($event, list)"
                v-bind:class="{ completed: list.completed }"
              >
                {{ list.task }}
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
      addTodoInput: "",
      lists: [],
      hasError: false,
    };
  },

  computed: {
    filterLists: function () {
      return _.orderBy(this.lists, ["completed", false]);
    },
  },
  beforeMount() {
    this.getName();
  },
  
  methods: {
    async getName() {
      const res = await fetch(
        "http://itrackdevs.geo-fuel.com/tools_manager_api/getAllmail.php"
      );
      const data = await res.json();
      this.data = data;
    },

    addTask: function () {
      if (!this.addTodoInput) {
        // <--- If no value then we are setting error to `true`
        this.hasError = true;
        return; // <--- stops here
      }
      this.hasError = false;
      this.lists.push({
        id: this.lists.length + 1,
        task: this.addTodoInput,
        completed: false,
      });

      // To format a content-type for CORS preflight request
      let formData = new FormData();
      formData.append("task", this.addTodoInput);
      formData.append("owner", "tinashe");
      formData.append("completed", 1);
      axios
        .post(
          "http://itrackdevs.geo-fuel.com/tools_manager_api/addListItem.php",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data,",
            },
          }
        )
        .then((response) => {
          console.log("Success: " + response.statusText);
        })
        .catch((error) => {
          console.log(error);
        });

      this.addTodoInput = ""; //clear the input after successful submission
    },

    async getTask() {
      const response = await fetch(
        "http://itrackdevs.geo-fuel.com/tools_manager_api/getItemList.php"
      );
      this.lists = await response.json();
    },

    updateTask: function (e, list) {
      e.preventDefault();
      list.task = e.target.innerText;
      e.target.blur();
    },

    completeTask: function (list) {
      list.completed = !list.completed;
    },

    removeTask: function (list) {
      var index = _.findIndex(this.lists, list);
      this.lists.splice(index, 1);
    },
  },
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
