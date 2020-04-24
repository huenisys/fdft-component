<template>
  <div>
    <div class="accordion mb-0 mx-4" id="accordionFilters">
      <div v-for="filter in filters" class="card" :key="filter.attr">
        <div class="card-header" style="padding: 0" :id="'ac_' + filter.attr">
          <h2 class="mb-0">
            <button
              class="btn btn-link collapsed text-dark text-left btn-block"
              type="button"
              data-toggle="collapse"
              :data-target="'#collapse_' + filter.attr"
              aria-expanded="false"
              :aria-controls="'collapse_' + filter.attr"
            >
              <small
                class="Avenir-LT-W01_35-Light1475496 float-right"
                v-text="model[filter.attr]"
                v-if="model[filter.attr].length > 0"
              ></small>
              <strong class="raleway" v-text="filter.label"></strong>
            </button>
          </h2>
        </div>

        <div
          :id="'collapse_' + filter.attr"
          class="collapse"
          :aria-labelledby="'ac_' + filter.attr"
          data-parent="#accordionFilters"
        >
          <div class="card-body">
            <div
              class="d-block"
              v-for="choice in choices(filter.attr)"
              :key="choice"
            >
              <div class="form-check small" v-show="!choiceHasComma(choice)">
                <input
                  class="form-check-input"
                  type="checkbox"
                  :id="choice"
                  :value="choice"
                  v-model="model[filter.attr]"
                  v-on:change="modelChanged([filter.attr, model[filter.attr]])"
                />
                <label
                  class="form-check-label"
                  :for="choice"
                  v-text="choiceTextNoCountIfZero([filter.attr, choice])"
                ></label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /#accordion-filters-wrapper -->
</template>
<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "AccordionFilters",
  props: {
    collection: Array,
    msg: String,
    filters: Array
  },

  methods: {
    ...mapMutations(["setModel"]),

    modelChanged: function([attr, val]) {
      this.setModel([attr, val]);
    }
  },
  computed: {
    ...mapGetters([
      "model",
      "choices",
      "filtered_workouts",
      "choiceHasComma",
      "choiceTextNoCountIfZero",
      "choiceCount"
    ])
  }
};
</script>
