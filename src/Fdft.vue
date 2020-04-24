<template>
  <div id="workout-selector" class="container container-xl">
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
import CheckboxFilters from "./components/CheckboxFilters.vue";
import WorkoutCards from "./components/WorkoutCards.vue";
import AccordionFilters from "./components/AccordionFilters.vue";

export default {
  name: "Fdft",

  components: {
    "checkbox-filters": CheckboxFilters,
    "workout-cards": WorkoutCards,
    "accordion-filters": AccordionFilters
  },

  computed: {
    ...mapGetters(["workouts", "filters", "filtered_workouts"])
  },

  methods: {
    ...mapActions(["fetchWorkouts"])
  },

  mounted() {
    this.fetchWorkouts()
      .then(() => console.log("Fetch success: workouts"))
      .catch(err => console.error("Fetch workouts failure: " + err.message));
  }
};
</script>

<style>
#workout-selector {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 10px;
}
</style>
