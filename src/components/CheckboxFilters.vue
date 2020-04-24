<template>
  <div>
    <div class="d-flex flex-wrap justify-content-center">
      <checkbox-group
        v-for="filter in filters"
        :key="filter.attr"
        :filter="filter"
        :collection="collection"
      ></checkbox-group>
    </div>
  </div>
  <!-- /#checkbox-filters-wrapper -->
</template>

<script>
import CheckboxGroup from "./CheckboxGroup.vue";

export default {
  name: "CheckboxFilters",

  components: {
    "checkbox-group": CheckboxGroup
  },

  props: {
    collection: Array,
    msg: String,
    filters: Array
  }
};
</script>
