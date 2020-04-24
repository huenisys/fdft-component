<template>
  <div class="container container-xl mt-3">
    <checkbox-filters
      id="checkbox-filters-wrapper"
      class="container-xl px-0 d-none d-md-block"
      :collection="workouts"
      :filters="filters"
      msg="fdft-component"
    />
    <accordion-filters
      id="accordion-filters-wrapper"
      class="p-2 d-md-none"
      :collection="workouts"
      :filters="filters"
      msg="fdft-component"
    />
    <hr />
    <workout-cards :collection="filtered_workouts"></workout-cards>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import CheckboxFilters from "@/components/CheckboxFilters.vue";
import WorkoutCards from "@/components/WorkoutCards.vue";
import AccordionFilters from "@/components/AccordionFilters.vue";
import store from "@/store";

export default {
  store,
  name: "App",
  components: {
    CheckboxFilters,
    WorkoutCards,
    AccordionFilters
  },

  props: {
    resourceUrl: {
      type: String,
      default: "https://fdft-component.huenits.com/assets/data/workouts.json"
    }
  },

  computed: {
    ...mapGetters(["workouts", "filters", "filtered_workouts"])
  },

  methods: {
    ...mapActions(["fetchWorkouts"])
  },

  mounted() {
    this.fetchWorkouts(this.$props.resourceUrl)
      .then(() => console.log("Fetch success: workouts"))
      .catch(err => console.error("Fetch workouts failure: " + err.message));
  }
};
</script>

<style lang="scss">
@import "@/_sass/app.scss";
</style>
