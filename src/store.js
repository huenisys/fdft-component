import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

function normalizeWorkout(wo) {
  var pI = parseInt;

  // video duration normalized
  if (wo.videoduration < 600) wo.videoDurationN = "Under 10 minutes";
  else if (pI(wo.videoduration) >= 600 && pI(wo.videoduration) < 900)
    wo.videoDurationN = "10-15 minutes";
  else if (pI(wo.videoduration) >= 900 && pI(wo.videoduration) <= 1200)
    wo.videoDurationN = "15-20 minutes";
  else wo.videoDurationN = "Over 15 minutes";

  return wo;
}

export default new Vuex.Store({
  state: {
    workouts: [],
    filters: [
      { attr: "access", label: "Access" },
      { attr: "trainingtype", label: "Training Type" },
      { attr: "focus", label: "Workout Focus" },
      { attr: "videoDurationN", label: "Video Length" },
      { attr: "equipment", label: "Equipment" }
    ],
    model: {
      access: [],
      videoDurationN: [],
      focus: [],
      trainingtype: [],
      equipment: []
    }
  },
  getters: {
    workouts: s => (s.workouts.length > 0 ? s.workouts : []),
    filters: s => s.filters,
    model: s => s.model,
    m: s => s.model,

    choiceHasComma: () => choice => choice && choice.includes(","),

    choiceCount: (s, g) => ([attr, val]) => {
      return g.filtered_workouts.filter(wo => {
        return (
          wo[attr] == val ||
          wo[attr]
            .split(",")
            .map(function(x) {
              return x.trim();
            })
            .includes(val)
        );
      }).length;
    },

    choiceTextNoCountIfZero: (s, g) => ([attr, val]) =>
      g.choiceCount([attr, val]) == 0
        ? val
        : val + " [" + g.choiceCount([attr, val]) + "]",

    // forces distinct items
    choices: (s, g) => attr => [...new Set(g.workouts.map(wo => wo[attr]))],
    filtered_workouts: (s, g) =>
      g.workouts
        .filter(
          wo =>
            g.m["access"].includes(wo["access"]) || g.m["access"].length === 0
        )
        .filter(wo => {
          var captures = [];

          wo["trainingtype"].split(",").forEach(item => {
            if (g.m["trainingtype"].includes(item.trim())) {
              captures.push(item.trim());
            }
          });

          return captures.length > 0 || g.m["trainingtype"].length === 0;
        })
        .filter(
          wo => g.m["focus"].includes(wo["focus"]) || g.m["focus"].length === 0
        )
        .filter(
          wo =>
            g.m["videoDurationN"].includes(wo["videoDurationN"]) ||
            g.m["videoDurationN"].length === 0
        )
        .filter(
          wo =>
            g.m["equipment"].includes(wo["equipment"]) ||
            g.m["equipment"].length === 0
        )
  },
  mutations: {
    setModel(s, [attr, val]) {
      s.model[attr] = val;
    },
    setWorkouts(state, array) {
      state.workouts = array;
    }
  },
  actions: {
    fetchWorkouts(context, resourceUrl) {
      return fetch(resourceUrl ? resourceUrl : "/assets/data/workouts.json")
        .then(response => response.json())
        .then(jsonArr => jsonArr.map(wo => normalizeWorkout(wo)))
        .then(collection => {
          context.commit("setWorkouts", collection);
        });
    }
  },
  modules: {}
});
