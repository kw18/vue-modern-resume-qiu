<template>
  <v-card
    color="grey lighten-4"
    light
  >
    <v-card-text>
      <content-section
        id="timeline"
        :title="detailed ? 'My Life in a Nutshell' : 'My Experiences'"
      >
        <template slot="actions">
          <div>
            <v-switch
              v-model="detailed"
              :label="detailed ? 'Detailed' : 'Summary'"
            />
          </div>
        </template>

        <v-timeline
          dense
        >
          <v-timeline-item
            v-for="(item, i) in orderedItems"
            :key="i"
            :icon="item.icon || ''"
            :class="{transparent: item.transparent}"
            large
          >
            <template
              v-if="item.iconImage"
              v-slot:icon
            >
              <v-avatar>
                <img
                  :src="publicPath(item.iconImage)"
                >
              </v-avatar>
            </template>
            <template v-slot:opposite />
            <v-layout>
              <v-flex
                v-if="$vuetify.breakpoint.smAndUp"
                md1
                sm2
                align-self-center
              >
                <span>{{ item.year }}</span>
              </v-flex>
              <v-flex
                md11
                sm10
                xs12
              >
                <v-card class="elevation-1">
                  <v-card-title class="pb-0">
                    <div>
                      <p v-if="$vuetify.breakpoint.xsOnly">
                        {{ item.year }}
                      </p>
                      <h3>{{ item.title }}</h3>
                    </div>
                  </v-card-title>
                  <v-card-text>
                    <v-layout wrap>
                      <v-flex
                        :md7="!!item.image"
                        :md12="!item.image"
                        xs12
                      >
                        <div class="mr-1">
                          <span
                            v-if="item.text"
                            class="pre"
                          >{{ item.text }}</span>
                          <!-- eslint-disable vue/no-v-html -->
                          <div
                            v-else-if="item.html"
                            v-html="item.html"
                          />
                          <!-- eslint-enable vue/no-v-html -->
                        </div>
                      </v-flex>
                      <v-flex
                        v-if="item.image"
                        md5
                        xs12
                      >
                        <div
                          class="mt-2"
                        >
                          <v-carousel
                            v-if="Array.isArray(item.image)"
                            :show-arrows="false"
                            :height="325"
                          >
                            <v-carousel-item
                              v-for="(citem,ci) in item.image"
                              :key="ci"
                              :src="publicPath(citem)"
                            />
                          </v-carousel>
                          <v-img
                            v-else
                            :max-height="item.imageHeight ? item.imageHeight : ''"
                            :src="publicPath(item.image)"
                          />
                        </div>
                      </v-flex>
                    </v-layout>
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-timeline-item>
        </v-timeline>
      </content-section>
    </v-card-text>
  </v-card>
</template>

<script>
import ContentSection from '@/views/dark-template/content/Section'
export default {
  name      : 'Timeline',
  components: { ContentSection },
  data      : () => ({
    detailed: true,
    items   : [
      {

        year : '1996',
        title: 'birth',
        html : '<p>Came into this world on February 19, 1996. </p><p>In rural China, I am the youngest one in the family.  </p>',
        icon : 'mdi-cake-variant',
      },
      {
        detailed   : true,
        transparent: true,
        year       : '2008',
        title      : 'Come into contact with computers  ',
        html       : 'After graduating from primary school, I went to Guangdong during the summer vacation. <br>Enrolled in a computer class. Contacted a computer for the first time and learned typing and Office. ',
        icon       : 'mdi-mouse-variant',
      },
      {
        detailed   : true,
        transparent: true,
        year       : '2012',
        title      : 'Junior high school graduation  ',
        html       : `
          <p>
            After the middle school entrance examination, the school organized some students for free to have a one-month experience at the vocational secondary school in the county seat.  
          <br>
            Be proficient in typing and Office. First came into contact with Photoshop and AutoCAD.  
          </p>
          `,

        // 熟练打字、office，首次接触到 <span class="light-blue--text lighten-3">ps、autocad:</span>
        // image: 'img/timeline/vue-modern-resume.png',
        icon: 'mdi-book-open-page-variant',
      },
      {
        year : '2015',
        // transparent: true,
        title: 'After the college entrance examination',
        html : `
                <p>
                    After graduating from high school, entered society, obtained a driver's license, bought a mobile phone and a laptop, and spent time self-studying. 
                </p>
                
                <p>
                    Just entering society, I was a bit confused. Did some investments (stocks and foreign exchange), and learned photography. 
                    <ul>
                        
                        <li>
                            PS image retouching  
                        </li>
                        <li>
                            InDesign furniture album layout  
                        </li>
                        
                    </ul>
                </p>
        `,
        // image      : 'img/timeline/an7.mahblog.com.png',
        // imageHeight: 200,
        icon: 'mdi-book-open-page-variant',
      },
      {
        detailed   : true,
        year       : '2016',
        transparent: true,
        title      : 'Go to Guangdong ',
        html       : 'Want to go out and strive. Went to Guangzhou. The original intention was to be a trader<br>Later, I did financial sales, spot crude oil. Had two days off on weekends and did part-time jobs on weekends',
        // image      : 'img/timeline/almas-khor.jpg',
        iconImage  : 'img/timeline/bytegate.ir-icon.png',
      },
      {
        year : '2017',
        title: 'Return to Jiangxi',
        html : `
          <p>
            Do graphic design, CorelDRAW, indoor and outdoor advertisements  
          </p>
          <p>
            After September, do furniture albums, PS image retouching, and InDesign album layout. 
          </p>
          <p>
            In the second half of the year, I was free. I learned front-end. I made a small website and was also slowly learning 3dmax and Python.  
          </p>
        `,
        // image    : 'img/timeline/street-mobsters.jpg',
        iconImage: 'img/timeline/bytegate.ir-icon.png',
      },
      {
        detailed   : true,
        year       : '2018',
        transparent: true,
        title      : 'Marriage and adult college entrance examination ',
        html       : `
                <p>
                     do e-commerce detail pages, apply for the entrance examination from high school to undergraduate. 
                </p>
               
                `,
        iconImage: 'img/timeline/vue-registrar-logo.png',
      },
      {
        year : '2019',
        title: 'design ',
        html : `
                    <p>
                        Graphic and album design, e-commerce detail pages  
                    </p>
                    <p>
                        After September, do 3D modeling and rendering, furniture animations, and video editing.  
                    </p>
                    <p>
                        Leisurely, made the second website, had an early vacation, and entered the furniture factory to work as a short-term worker. 
                    </p>
                   `,
        icon: 'mdi-desktop-classic',
      },
      {
        detailed   : true,
        year       : '2020',
        transparent: true,
        title      : 'challenge',
        /* eslint-disable no-useless-escape */
        html       : `
                <p>
                    Affected by the epidemic, I worked in an e-commerce company to make e-commerce detail pages and do furniture modeling and rendering.  <br>
                    At the beginning of the year, opened a store on Pinduoduo to sell furniture. The sales were quite good at the beginning.  <br>
                    After June, resigned and became a freelancer.  
                </p>
                `,
        /* eslint-enable no-useless-escape */
        icon: 'mdi-account-multiple',
        // icon: 'mdi-worker',
      },
      {
        year       : '2021',
        transparent: true,
        detailed   : true,
        title      : 'ordinarily',
        html       : `
          <p>
            The live streaming emerged. Work as a customer service at a friend's place. At the beginning of the live streaming, there was a big sale.  <br>
            Furniture product design, 3D modeling and rendering, original design of soft furniture  <br>
            I feel that design is brain-burning and boring. It's winter again. Delivery (loading and unloading together) is tiring but the days are fulfilling.  
          
          </p>
        `,
        icon: 'mdi-timer-sand',
      },
      {
        transparent: true,
        detailed   : true,
        year       : '2022',
        title      : 'truck driver',
        html       : `
          <p>
            Loading and unloading together, delivering to warehouses and logistics. <br>
            Sell furniture on WeChat, post on Moments, and pick up and deliver goods from the warehouse by oneself. <br>
          </p>
          
        `,
        iconImage: 'img/timeline/bobet.ir-icon.png',
      },
      {
        year : '2023',
        title: 'Delivery and programming  ',
        html : `
          
          <p>
            The main job is a truck driver and independently writes a mini-program integrating the front and back ends for the display of furniture products before and after modification.  
          </p>
          <p>
            Due to the needs of work or to improve efficiency, write mini-programs and set up servers.  
          <p>
          <p>
            The large model AI painting is wonderful. I have been confused and wandered. Be patient until the end of the year. Delivery in winter is busy and hard. 
          </p>
        `,
        // iconImage: 'img/timeline/telepad-icon.png',
        iconImage: 'img/timeline/delix.ir-icon.png',
      },
      {
        year : '2024',
        title: '3D design',
        html : `
         
          <p>
            Open a studio with former colleagues, do mini-programs and designs. Because there was no business, look for a job and go to work.  
          </p>
          <p>
            Do the design, modeling and rendering of 3D e-commerce soft sofa and bed 
          </p>
          <p>
            Piecework. The monthly salary exceeded 10,000 yuan for the first time. The overall life was fulfilling. 
          </p>
        `,
        // image    : 'img/timeline/delix.ir.png',
        icon: 'mdi-worker',
        // iconImage: 'img/timeline/delix.ir-icon.png',
      },
      {
        detailed   : true,
        transparent: true,
        year       : '2024',
        title      : 'change',
        html       : `
          <p>
            The internal and external environments have undergone great changes. Vietnam and other countries are booming, while it is getting more and more difficult domestically. People are pessimistic about the future.  <br>
            In order to have better development and better income, change the idea, decide to work outside, and start to make preparations. <br>
            Improve professional skills and English proficiency  
          </p>
        `,
        icon: 'mdi-auto-fix',

      },
      // {
      //   year : '2024',
      //   title: '心态',
      //   html : `
      //     <p>
      //         决定后，心里有很大的冲动，现在就出去: <span class="light-blue--text lighten-3">Open Sourced</span><br>Available on: <a target="_blank" href="https://github.com/AmirrezaNasiri/telegram-web-bridge">AmirrezaNasiri/telegram-web-bridge</a>
      //     </p>
      //     <p>
      //       通过豆包，自查，合法去国外工作的，一切顺利的话，周期也很长，自我安慰不要急，慢慢来<br>
      //       通过抖音、知乎，查找和验证，也开始做些细致的准备
      //     </p>
      //     <p>
      //       与家人沟通，有2个小孩，虽有反对，解释且坚持己见，付诸于实际行动
      //     </p>
      //   `,
      //   image: 'img/timeline/telegram-web-bridge.png',
      //   icon : 'mdi-github-circle',
      // },

      {
        year : 'So far ...',
        title: 'Improve work skills and English proficiency',
        html : `In the winter of the second half of the year, I have more free time to learn and practice English, improve my work skills, and prepare for working abroad
                    <ul>
                      <li> Learn English in various scenes through Douyin</li>
                      <li> Practice oral communication through Doubao's intelligent agent</li>
                      <li> Search and study through Douyin and Zhihu, and start to make some detailed preparations  </li>
                      </ul>`,
        icon: 'mdi-fountain-pen-tip',
      },
    ],
  }),
  computed: {
    orderedItems () {
      const items = [...this.items].reverse()
      if (this.detailed)
        return items
      return items.filter((item) => {
        return !item.detailed
      })
    },
  },
}
</script>

<style scoped>
.title {
  border-bottom: 2px #bfbfbf solid;
  line-height: 1.5 !important;
}
.pre {
  white-space: pre;
}
.transparent{
  opacity: 0.6;
}
</style>
