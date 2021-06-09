<template>
  <div class="px-5 py-2">
    <div>
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group
          id="input-group-1"
          label="First-Name:"
          label-for="input-1"
        >
          <b-form-select
            id="input-1"
            v-model="form.contact"
            :options="[
              { text: 'Choose...', value: null },
              'One',
              'Two',
              'Three',
            ]"
            placeholder="First Name"
            required
          >
          </b-form-select>
        </b-form-group>
        <b-form-group label="Lastname:" id="input-group-2" label-for="input-2">
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
        <b-card>
          <b-form-group id="input-group-1" label="contact:" label-for="input-1">
            <b-form-select
              id="input-1"
              v-model="form.contact"
              :options="[
                { text: 'Choose...', value: null },
                'One',
                'Two',
                'Three',
              ]"
              placeholder="First Name"
              required
            >
            </b-form-select>
          </b-form-group>
          <b-form-group label="address:" id="input-group-2" label-for="input-2">
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

          <b-form-group label="email:" id="input-group-2" label-for="input-2">
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
        </b-card>

        <b-button type="submit" variant="primary">Create</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        contact: "",
        name: "",
        food: null,
      },
      foods: [
        { text: "Select One", value: null },
        "Carrots",
        "Beans",
        "Tomatoes",
        "Corn",
      ],
      show: true,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.contact = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>