// require styles
import 'swiper/css/swiper.min.css'

import Vue from 'vue'
import { Swiper as SwiperClass, Autoplay, EffectFade } from 'swiper/js/swiper.esm.js'

import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter'

SwiperClass.use([Autoplay, EffectFade])

Vue.use(getAwesomeSwiper(SwiperClass));
