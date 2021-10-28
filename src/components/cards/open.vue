<template>
  <div id="open">
    <b-card border-variant="success" img-top tag="article" id="op" class="mb-2">
      <h6>
        <b-icon icon="check-square" scale="1.5" variant="success"></b-icon> Open
      </h6>
      <h4>{{ data.length }}</h4>
      <hr v-if="active === 'open_active'" class="activebar" />
    </b-card>
  </div>
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
        "http://itrackdevs.geo-fuel.com/tools_manager_api/getticketCard.php?action=open"
      );
      const data = await res.json();
      this.data = data;
    },
  },
};
</script>
<style>
#op:hover {
  transform: scale(1.1);
}
.h2 {
  text-align: center;
}
.activebar {
  background-color: green;
}
</style>