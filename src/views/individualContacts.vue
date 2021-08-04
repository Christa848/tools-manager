<template>
  <div>
    <b-row>
      <b-col cols="12">
        <individual />
      </b-col>
      <b-col>
        <!--<filters /> -->
      </b-col>
    </b-row>
  </div>
</template>

<script>
import individual from "@/components/contacts/individuals.vue";
//import filters from "@/components/contacts/individuals-filter.vue";

export default {
  name: "comContacts",
  components: {
    individual
    //filters
  }
};
</script>
<style>
#bar {
  background: white;
}
</style>
