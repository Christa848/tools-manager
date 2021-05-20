<template>
  <div class="px-5 py-2">
    <div>
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group id="input-group-8" label="Contact:" label-for="input-1">
          <b-form-select
            id="input-1"
            v-model="form.contact"
            :options="[
              'One',
              'Two',
              'Three',
            ]"
            placeholder="Enter Contact"
            required
          >
          </b-form-select>
        </b-form-group>

        <b-form-group label="Type:" id="input-group-7" label-for="input-2">
          <b-form-select
            v-model="form.type"
            id="inline-form-custom-select-pref"
            class="mb-2 mr-sm-2 mb-sm-0"
            :options="['Technical', 'Finacial', 'Administrative', 'Other']"
            :value="null"
          ></b-form-select>
        </b-form-group>
        <!--
        <b-form-group label="Subject:" id="input-group-2" label-for="input-2">
          <b-form-select
            v-model="form.subject"
            id="inline-form-custom-select-pref"
            class="mb-2 mr-sm-2 mb-sm-0"
            :options="[
              { text: 'Subject...', value: null },
              'One',
              'Two',
              'Three',
            ]"
            :value="null"
          ></b-form-select>
        </b-form-group>

        <b-form-group label="source:" id="input-group-2" label-for="input-2">
          <b-form-select
            v-model="form.source"
            id="inline-form-custom-select-pref"
            class="mb-2 mr-sm-2 mb-sm-0"
            :options="[
              { text: 'Source...', value: null },
              'One',
              'Two',
              'Three',
            ]"
            :value="null"
          ></b-form-select>
        </b-form-group>
-->
        <b-form-group label="Status:" id="input-group-2" label-for="input-2">
          <b-form-select
            v-model="form.status"
            id="inline-form-custom-select-pref"
            class="mb-2 mr-sm-2 mb-sm-0"
            :options="['Opened', 'In Progress', 'Resolved']"
            :value="null"
          ></b-form-select>
        </b-form-group>

        <b-form-group label="Priority:" id="input-group-3" label-for="input-2">
          <b-form-select
            v-model="form.priority"
            id="inline-form-custom-select-pref"
            class="mb-2 mr-sm-2 mb-sm-0"
            :options="['Low', 'Moderate', 'High', 'Severe']"
            :value="null"
          ></b-form-select>
        </b-form-group>

        <b-form-group label="Section:" id="input-group-4" label-for="input-2">
          <b-form-select
            v-model="form.group"
            id="inline-form-custom-select-pref"
            class="mb-2 mr-sm-2 mb-sm-0"
            :options="['Support', 'Finance', 'Administration', 'Marketing']"
            :value="null"
          ></b-form-select>
        </b-form-group>

        <b-form-group label="Agent:" id="input-group-5" label-for="input-2">
          <b-form-select
            v-model="form.agent"
            id="inline-form-custom-select-pref"
            class="mb-2 mr-sm-2 mb-sm-0"
            aria-placeholder="kiki"
            :options="['One', 'Two', 'Three']"
            :value="null"
          ></b-form-select>
        </b-form-group>

        <b-form-group label="Message" id="input-group-6"  label-for="input-1">
          <b-form-textarea
            id="textarea-state"
            v-model="form.message"
            placeholder="Ticket information..."
            rows="5"
          ></b-form-textarea>
        </b-form-group>

        <b-button type="submit" variant="primary">Create</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>
    </div>
  </div>
</template>
<script>
//TODO: Resolve the new ticket modal
import axios from "axios";
export default {
  data() {
    return {
      form: {
        contact: "",
        priority: "",
        message: "",
        agent: "",
        type: "",
        status: "",
      },
      show: true,
    };
  },
  // end of data declaration
  methods: {
    onSubmit(event) {
      event.preventDefault();
      this.createTicket();
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.contact = "";
      this.form.agent = "";
      this.form.message = "";
      this.form.type = "";
      this.form.priority = "";
      this.form.status = "";
      this.form.group = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
    createTicket: function () {
      const URL =
        "http://itrackdevs.geo-fuel.com/tools_manager_api/createTicket.php";
      console.log("Create Ticket!");
      console.log(
        `Issue: ${this.form.message} by ${this.form.contact} for ${
          this.form.agent
        } was issued on ${new Date()}`
      );

      // FormData type used to compose values from form, preparing them for the database
      let formData = new FormData();
      let currentDT = new Date();
      formData.append("logged_by", this.form.contact);
      formData.append("priority", this.form.priority);
      formData.append("ticket_message", this.form.message);
      formData.append("assigned_to", this.form.agent);
      formData.append("type", this.form.type);
      formData.append("status", this.form.status);
      formData.append("created_on", currentDT);
      formData.append("updated_on", currentDT);

      let ticket = {};
      formData.forEach((value, key) => {
        ticket[key] = value;
      });

      console.log(ticket);
      axios({
        method: "post",
        URL, 
        ticket, 
        headers: { "Content-Type": "multipart/form-data" },
        }).catch(resp => console.log(resp.data));        
        
    },
  }
};
</script>