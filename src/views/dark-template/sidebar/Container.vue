<template>
  <v-card
    color="grey darken-3"
    dark
  >
    <v-card-text>
      <avatar />
      <div class="text-sm-center mb-4 mt-3">
        <h1>
          Qiu <span class="light-blue--text text--lighten-3">Zhicheng</span>
        </h1>
        <span>
          Comprehensive talents in cross-disciplinary fields
        </span>
      </div>

      <sidebar-section :options="sections.info" />
      <sidebar-section :options="sections.socials" />
      <sidebar-section :options="sections.hobbies">
        <template v-slot:item="{item}">
          <v-chip>
            <v-avatar>
              <v-icon>
                {{ item.icon }}
              </v-icon>
            </v-avatar>
            {{ item.text }}
          </v-chip>
        </template>
      </sidebar-section>
      <sidebar-section :options="sections.languages">
        <template v-slot:items="{items}">
          <v-container pa-0>
            <v-layout
              wrap
              class="text-xs-center"
            >
              <template
                v-for="(item, i) in items"
              >
                <v-flex
                  :key="i"
                  md3
                  sm4
                  xs6
                >
                  <v-progress-circular
                    rotate="360"
                    size="65"
                    width="2"
                    :value="item.value"
                    color="white"
                    class="ma-2"
                  >
                    {{ item.text }}
                  </v-progress-circular>
                </v-flex>
              </template>
            </v-layout>
          </v-container>
        </template>
      </sidebar-section>
    </v-card-text>
  </v-card>
</template>

<script>
import Avatar from '@/views/dark-template/sidebar/Avatar'
import SidebarSection from '@/views/dark-template/sidebar/Section'
export default {
  name      : 'Sidebar',
  components: { SidebarSection, Avatar },
  data () {
    return {
      sections: {
        info: {
          title: 'INFO',
          items: [
            {
              name: 'phone',
              icon: 'mdi-phone',
              text: '+86 157 7972 8423',
            },
            {
              name: 'Email',
              icon: 'mdi-email',
              text: '523074234@qq.com',
            },
            {
              name: 'Website',
              icon: 'mdi-web',
              text: 'www.jiasheng23.top',
            },
            {
              name: 'Birth Date',
              icon: 'mdi-cake-variant',
              text: 'Feb 19,1996',
            },
            {
              name: 'Habitation',
              icon: 'mdi-map-marker',
              text: 'Ganzhou, Jiangxi, china ',
            },
          ],
        },
        socials: {
          title: 'SOCIALS',
          items: [
            {
              icon: 'mdi-github-circle',
              text: 'github.com/kw18',
              link: 'https://github.com/kw18',
            },
            {
              icon: 'mdi-linkedin-box',
              text: 'linkedin.com/in/zhiCheng-qiu',
              link: 'https://linkedin.com/in/zhiCheng-qiu',
            },
            // {
            //   icon: 'mdi-twitter',
            //   text: 'twitter.com/Amirreza_Nasiri',
            //   link: 'https://twitter.com/Amirreza_Nasiri',
            // },
            // {
            //   icon: 'mdi-instagram',
            //   text: 'instagram.com/amirreza.n96',
            //   link: 'https://instagram.com/amirreza.n96',
            // },
          ],
        },
        hobbies: {
          title: 'HOBBIES',
          items: [
            {
              icon: 'mdi-bike',
              text: 'Cycling',
            },
            {
              icon: 'mdi-image-filter-hdr',
              text: 'Nature',
            },
            {
              icon: 'mdi-karate',
              text: 'Sports',
            },
            {
              icon: 'mdi-music',
              text: 'Music',
            },
            {
              icon: 'mdi-book-open-page-variant',
              text: 'Books',
            },
          ],
        },
        languages: {
          title: 'LANGUAGES',
          items: [
            {
              text : 'English',
              value: 60,
            },
            {
              text : 'Chinese',
              value: 100,
            },

          ],
        },
      },
    }
  },
}
</script>

<style scoped>
.sidebar{
    background: #2e2e2e;
}
</style>
