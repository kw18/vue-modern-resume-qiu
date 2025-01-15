<template>
  <v-card
    color="grey lighten-4"
    light
  >
    <v-card-text class="text-xs-center">
      <h4>
        ICP filing number： <span style="color: blue;">Gan ICP No. 15398589</span>
        related links： <a
          href="https://github.com/AmirrezaNasiri/vue-modern-resume"
          target="_blank"
          style="color: blue;"
        >vue-modern-resume</a>
      </h4>
      <!-- <div>Don't believe me? keep scrolling!</div> -->
    </v-card-text>
  </v-card>
</template>

<script>
import ContentSection from '@/views/dark-template/content/Section'
import VueContentLoading, { VclCode } from 'vue-content-loading'
import { debounce } from 'lodash'

export default {
  name      : 'EndlessTimeline',
  components: {
    ContentSection, VueContentLoading, VclCode,
  },
  data   : () => ({}),
  methods: {},
}
</script>

<style scoped>
.fill-width {
  width: 100%;
}
.pre {
  white-space: pre;
}
</style>
