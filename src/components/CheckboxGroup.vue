<template>
  <ul class="list-unstyled p-2 mx-2 border">
    <li class="h5 raleway" v-text="filter.label"></li>
    <li
      v-for="choice in choices(filter.attr)"
      :key="choice"
      v-show="!choiceHasComma(choice)"
    >
      <div class="form-check small">
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
    </li>
  </ul>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "CheckboxGroup",

  props: {
    filter: Object,
    collection: Array
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
