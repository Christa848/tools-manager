<template>
  <div class="home">
    <b-row class="mb-4" id="info">
      <supportdisplay />
    </b-row>
  </div>
</template>
<script>
// @ is an alias to /src

import supportdisplay from "@/components/side.vue";

export default {
  name: "Home",
  components: {
    supportdisplay
  }
};
</script>
<style></style>
