<template>
  <div id="workout-cards-wrapper" class="container-xl px-2">
    <h1 class="h6 text-center raleway">
      <span class="h1">Workout Videos</span>&nbsp;
      <span
        class="muted raleway"
        v-text="'(' + videosCount(collection) + ')'"
      ></span>
    </h1>

    <hr class="invisible" />

    <div id="workout-cards" class="row">
      <div
        class="col-12 col-sm-6 col-md-4 col-lg-3 d-flex px-sm-0 mb-3 justify-content-center"
        v-for="wo in collection"
        :key="wo.id"
      >
        <div class="card m-2">
          <div
            class="card-header raleway small"
            v-text="'Focus: ' + wo.focus"
          ></div>
          <div class="card-body p-1">
            <span
              :class="
                wo.access == 'Free'
                  ? 'raleway small access-tag bg-darkgreen'
                  : 'raleway small access-tag'
              "
              v-text="wo.access"
            ></span>
            <a :href="wo.landingpageurl">
              <img
                :src="wo.imagelink"
                width="320"
                class="card-img-top"
                alt=""
              />
            </a>
            <div class="card-body">
              <h6 class="card-title raleway" v-text="wo.title"></h6>
              <p class="small">
                <u v-text="wo.videoDurationN"></u>
                <i
                  class="text-muted float-right"
                  v-text="'(' + humanizeSecs(wo.videoduration) + ')'"
                ></i>
              </p>
              <p v-text="wo.trainingtype"></p>
              <p class="card-text" v-text="wo.description"></p>
              <span class="small" v-text="'Equipment: ' + wo.equipment"></span>
            </div>
          </div>
          <!-- /.card-body -->
        </div>
        <!-- /.card -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WorkoutCards",

  props: {
    collection: {
      type: Array,
      default: () => []
    }
  },

  computed: {
    videosCount: () => collection => collection.length
  },

  methods: {
    humanizeSecs: function(seconds) {
      var min = parseInt(seconds / 60);
      var sec = seconds % 60;
      return min + "min, " + sec + " sec";
    }
  }
};
</script>
