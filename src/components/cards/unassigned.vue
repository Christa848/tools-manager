<template>
  <b-card border-variant="success" img-top tag="article" id="un" class="mb-2">
    <h5>
      <b-icon
        icon="exclamation-triangle-fill"
        scale="1.5"
        variant="success"
      ></b-icon>
       Unassigned
    </h5>
    <h4>{{ data.length }}</h4>
    <hr v-if="active === 'unsigned_active'" class="activebar" />
  </b-card>
</template>
<script>
export default {
  props: ["active"],
  data() {
    return {
      data: [],
      selected: [],
    };
  },

  beforeMount() {
    this.getName();
  },
  methods: {
    async getName() {
      const res = await fetch(
        "http://itrackdevs.geo-fuel.com/tools_manager_api/getticketCard.php?action=unassigned"
      );
      const data = await res.json();
      this.data = data;
    },
  },
};
</script>
<style>
#un:hover {
  transform: scale(1.1);
}
.activebar {
  background-color: green;
}
</style>
