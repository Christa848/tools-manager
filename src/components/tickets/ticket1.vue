<template>
  <b-row align-v="center">
    <b-col cols="7" @click="showModal">
      <b-badge v-if="status === 'Unsolved'" variant="light">{{
        status
      }}</b-badge>
      <b-badge v-else-if="status === 'Unassigned'" variant="secondary">{{
        status
      }}</b-badge>
      <b-badge v-else-if="status === 'Open'" variant="success">{{
        status
      }}</b-badge>
      <b-badge v-else-if="status === 'Overdue'" variant="danger">{{
        status
      }}</b-badge>
      <b-badge v-else-if="status === 'Due today'" variant="warning">{{
        status
      }}</b-badge>
      <b-badge v-else-if="status === 'Onhold'" variant="primary">{{
        status
      }}</b-badge>
      <div>
        <h6 @click="showModal" id="my-nav-dropdown" style="color:black">
          {{ massage }}
        </h6>
        <p>
          From {{ name }}...<small>Received On:{{ date }}</small> ...<small
            >Due in 2 days</small
          >
        </p>

        <b-modal ref="my-modal" hide-footer title="Reply the ticket">
          <div class="d-block text-center">
            <div id="ticket">
              <b-col cols="">
                <b-row>
                  <b-col cols="3">
                    <!-- <b-icon icon="envelope"></b-icon> -->
                  </b-col>

                  <b-col>
                    <!--<h5>{{ subject }} Car is offline</h5> -->
                  </b-col>
                </b-row>

                <b-row>
                  <b-col cols="3">
                    <span class="badge badge-success">Client</span>
                  </b-col>

                  <b-col cols=""> {{ name }} <i>via email </i> </b-col>
                </b-row>

                <b-row>
                  <b-col cols="3">
                    <b-icon icon="envelope"></b-icon>
                  </b-col>

                  <b-col>
                    <p><i>Hie iTrack Zim</i></p>

                    <p>{{ massage }}</p>
                    <i>Regards</i>
                    {{ name }}
                  </b-col>
                </b-row>
              </b-col>
            </div>

          
              <div>
                <!--  <b-form-textarea
                  id="textarea-no-resize"
                  placeholder=" Reply"
                  rows="3"
                  no-resize
                  v-model="reply" 
                ></b-form-textarea> -->

                <template>
                  <form class="contact-form" @submit.prevent="sendEmail">
                   <!-- <label>Name</label>
                    <input type="text" name="user_name" /> -->
                  <!--  <label>Email</label>
                    <input type="email" name="user_email" /> -->
                    <b-row>
                      <b-col cols="">
                    <b-form-textarea name="message" placeholder=" Reply" rows="3"></b-form-textarea>
                    </b-col>
                    </b-row>
                    <br>
                    <b-row>
                    <b-col cols="2">
                    <input type="submit" value="Send"/>
                    </b-col>
                    </b-row>
                  </form>
                </template>
              </div>
              <b-row id="butto">
                <b-col cols="2">
              <!--    <b-button variant="outline-success" v-on:click="saveAction"
                    >Send</b-button
                  >-->
                </b-col>
                <b-col></b-col>
              </b-row>
            
          </div>
        </b-modal>
      </div>
    </b-col>
    <b-col> <b-badge variant="success">@ITrack Zim</b-badge> </b-col>
  </b-row>
</template>
<script>
import axios from "axios";
import emailjs from "emailjs-com";
export default {
  props: ["status", "name", "massage", "date", "id", "reply"],
  data() {
    return {
      subject: null
    };
  },
  methods: {
    sendEmail: e => {
      emailjs
        .sendForm(
          "service_e3socso",
          "contact_form",
          e.target,
          "user_7vXoZXilraSOj4izZRQoe"
        )
        .then(
          result => {
            console.log("SUCCESS!", result.status, result.text);
          },
          error => {
            console.log("FAILED...", error);
          }
        );
    },
    showModal() {
      this.$refs["my-modal"].show();
    },
    hideModal() {
      this.$refs["my-modal"].hide();
    },
    saveAction: function() {
      let formData = new FormData();
      formData.append("reply", this.reply);
      formData.append("id", this.id);
      axios
        .post("updateResponseMessage.php", formData)
        .post("reply.php", formData)
        .then(
          console.log(
            `Message ${this.reply} for id: ${this.id} updated successfully`
          )
        )
        .catch(error => console.error(error));
    },

    replyTicket: function() {
      console.log("Create contact!");

      let formData = new FormData();
      formData.append("reply", this.message);

      axios
        .post("reply.php", formData)
        .then(response => console.log(response.statustext))
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>
<style>
.ticket-card {
  border: limegreen 1px solid;
  margin: 0.5rem;
  padding: 0.5rem;
  background-color: white;
  margin-right: 1rem;
  max-height: 150px;
}
#checkbox-1 {
  margin-top: 8rem !important;
}
</style>
