<template>
  <v-card
    color="grey lighten-4"
    light
  >
    <v-card-text>
      <!-- about -->
      <content-section
        title="Who am I?"
      >
        My name is Qiu Zhicheng. I come from Jiangxi, mainland China. I have strong adaptability and can quickly integrate into a new environment. I graduated from high school in 2015. From 2019 to 2024, I pursued a correspondence undergraduate program at Jiangxi Normal University, majoring in Computer Science and Technology. Now, I have accumulated nearly 10 years of working experience. During this period, my career trajectory has been diverse. From 2015 to 2016, I was engaged in photography and financial sales. Later, I mainly worked in design fields. I also worked as a driver and delivered goods. In 2024, I am doing e-commerce 3D design. I have a clear goal and really want to join Tesla . I am willing to continuously learn and improve here and go all out for the company's development.
      </content-section>
      <!-- proud -->
      <content-section
        v-if="prouds"
        title="What am I proud of?"
      >
        <v-layout
          v-for="(proud, i) in prouds"
          :key="i"
        >
          <v-flex
            md1
            xs3
          >
            <v-icon right>
              {{ proud.icon }}
            </v-icon>
          </v-flex>
          <v-flex
            md11
            xs9
          >
            <p>
              <strong>{{ proud.text }}</strong><br>
              <small>{{ proud.source }}</small>
            </p>
          </v-flex>
        </v-layout>
      </content-section>
      <!-- education -->
      <content-section
        v-if="educations"
        title="Education"
      >
        <v-layout
          v-for="(education, i) in educations"
          :key="i"
        >
          <v-flex md4>
            {{ education.from }} - {{ education.to }}
          </v-flex>
          <v-flex md8>
            <strong v-if="education.title">{{ education.title }}</strong>
            <div v-if="education.location">
              <i>{{ education.location }}</i>
            </div>
            <div v-if="education.description">
              {{ education.description }}
            </div>
          </v-flex>
        </v-layout>
      </content-section>
      <!-- skills -->
      <content-section
        v-if="skills"
        id="to-timeline"
        title="Skills"
      >
        <template slot="actions">
          (% are relative not absolute)
        </template>
        <v-layout wrap>
          <template
            v-for="(skill, i) in skills"
          >
            <v-flex
              v-if="skill.divider"
              :key="i"
              md12
              xs12
              mb-4
            />
            <v-flex
              v-else
              :key="i"
              md6
              xs12
            >
              <div
                class="mr-2 ml-2"
              >
                <div class="align-center">
                  <v-icon
                    small
                  >
                    {{ skill.icon }}
                  </v-icon>
                  {{ skill.title }}
                </div>
                <v-progress-linear
                  class="progress"
                  color="secondary"
                  height="3"
                  :value="skill.value"
                />
              </div>
            </v-flex>
          </template>
        </v-layout>
      </content-section>
      <!-- works -->
      <content-section
        v-if="works"
        id="to-workline"
        title="works"
      >
        <v-layout wrap>
          <template v-for="(work, i) in works">
            <v-flex
              :key="i"
              md3
              xs6
            >
              <div class="mr-2 ml-2">
                <div
                  v-if="i<=1"
                  class="align-center flex-column"
                >
                  <v-icon small>
                    {{ work.icon }}
                  </v-icon>
                  <a
                    :href="work.link"
                    target="_blank"
                  >{{ work.title }}</a>
                </div>

                <div
                  v-else
                  class="align-center flex-column"
                >
                  <v-icon
                    small
                    @click="previewImages(work.title, work.images)"
                  >
                    {{ work.icon }}
                  </v-icon>
                  <a
                    href="#"
                    @click.prevent="previewImages(work.title, work.images)"
                  >{{ work.title }}</a>
                </div>
              </div>
            </v-flex>
          </template>
        </v-layout>
      </content-section>
      <!-- end -->
    </v-card-text>
    <!-- Image Preview Dialog  -->
    <v-dialog
      v-model="dialogVisible"
      max-width="600px"
    >
      <v-card>
        <v-toolbar
          dark
          color="primary"
        >
          <v-toolbar-title>{{ currentTitle }}</v-toolbar-title>
          <v-spacer />
          <v-btn
            icon
            @click="dialogVisible = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
        <v-card-text>
          <v-carousel
            v-model="currentImageIndex"
            cycle
            hide-delimiters
            show-arrows
            interval="3500"
          >
            <v-carousel-item
              v-for="(image, index) in currentImages"
              :key="index"
            >
              <!-- 添加图片索引和总数 -->
              <div class="image-caption">
                <span>{{ index + 1 }}/{{ currentImages.length }}</span>
              </div>
              <v-img
                :src="image"
                aspect-ratio="1"
                max-width="100%"
                contain
              />
            </v-carousel-item>
          </v-carousel>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
import ContentSection from '@/views/dark-template/content/Section'
export default {
  name      : 'MainContent',
  components: { ContentSection },
  data      : () => ({
    prouds: [
      {
        icon  : 'mdi-help-rhombus-outline',
        text  : 'Nearly 10 years of rich working experience, strong adaptability, and able to quickly integrate into the new environment.  ',
        source: 'Have strong learning and adaptive abilities, and continuously improve oneself. ',
      },
      {
        icon  : 'mdi-timer-sand',
        text  : 'Have a serious working attitude  ',
        source: 'Have a gentle personality ',
      },
      {
        // icon  : 'mdi-account-multiple',
        icon  : 'mdi-text',
        text  : 'Have good exploration and execution abilities',
        source: 'Self-study to build servers, websites, mini programs, etc.  ',
      },
    ],
    educations: [
      {
        from       : '2019',
        to         : '2024 ( finished yet)',
        title      : 'Computer Science and Technology  ',
        location   : 'Jiangxi Normal University  ',
        description: 'After graduating from high school and entering society, the undergraduate degree was obtained through correspondence education.  ',
      },
    ],
    skills: [
      {
        title: 'Graphic album design, CorelDRAW, Photoshop, Illustrator, InDesign',
        // icon : 'mdi-language-php',
        value: 85,
      },
      {
        title: 'E-commerce 3D design, modeling, rendering, animation, 3dmax, Photoshop',
        // icon : 'mdi-language-javascript',
        value: 85,
      },

      {
        title: 'Front end, Vue, Node, JavaScript  ',
        // icon : 'mdi-vuejs',
        value: 80,
      },
      // { divider: true },
      {
        title: 'miniprogram',
        // icon : 'mdi-ubuntu',
        value: 85,
      },
      {
        title: 'Python',
        // icon : '',
        value: 60,
      },

      // { divider: true },

    ],
    works: [
      {
        title: 'first',
        icon : 'mdi-web',
        link : 'https://first.jiasheng23.top',
        value: 85,
      },
      {
        title: 'second',
        icon : 'mdi-web',
        link : 'https://second.jiasheng23.top',
        value: 85,
      },

      {
        title : 'miniprogram',
        icon  : 'mdi-desktop-classic',
        value : 80,
        images: [
          'img/timeline/mip-1.jpg',
          'img/timeline/mip-2.jpg',
          'img/timeline/mip-3.jpg',
          'img/timeline/mip-4.jpg',
          'img/timeline/mip-5.jpg',
          'img/timeline/mip-6.jpg',
          'img/timeline/mip-7.jpg',
          'img/timeline/mip-8.jpg',

        ],
      },
      {
        title : 'design',
        icon  : 'mdi-auto-fix',
        value : 80,
        images: [
          'img/timeline/3d-1.jpg',
          'img/timeline/3d-2.jpg',
          'img/timeline/3d-3.jpg',
          'img/timeline/3d-4.jpg',
          'img/timeline/3d-5.jpg',
          'img/timeline/3d-6.jpg',
          'img/timeline/3d-7.jpg',
          'img/timeline/3d-8.jpg',

        ],
      },

    ],
    dialogVisible    : false,
    currentTitle     : '',
    currentImages    : [],
    currentImageIndex: 0,
  }),
  methods: {
    previewImages (title, images) {
      console.log(images, 'hello')
      this.currentTitle  = title
      this.currentImages = images
      this.dialogVisible = true
    },
  },
}
</script>

<style scoped>
.title {
  border-bottom: 2px #bfbfbf solid;
  line-height: 1.5 !important;
}
.progress {
  margin-top: 0.1rem;
}
.v-carousel {
  background-color: #f5f5f5; /* 浅灰色背景 */
}
.image-caption {
  /* border-radius: 10%; */
  position: absolute;
  bottom: 0;
  left: 45%;
  /* right: 0; */
  background-color: rgba(0, 0, 0, 0.01);
  color: rgba(200, 200, 200, 0.5);
  padding: 5px; /* 内边距 */
  text-align: center; /* 文字居中 */
  z-index: 800;
  width: 10%;
}
</style>
