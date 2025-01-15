import Vue from 'vue'
import helper from '@/plugins/helper'
import VuePreview from 'vue-preview'
import App from '@/App.vue'
import '@/plugins/vuetify'
import '@/components'

Vue.config.productionTip = false
Vue.use(helper, VuePreview)

new Vue({ render: (h) => h(App) }).$mount('#app')
