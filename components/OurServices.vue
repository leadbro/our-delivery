<template>
  <section class="our-services">
    <our-services-layer-bottom
        class="our-services__layer-bottom"
        :item="_item"
        v-if="_item"
    />
    <our-services-layer-top
        class="our-services__layer-top"
        :items="_items"
        v-if="_item"
        :speed="speed"
        :current-item-index="currentItemIndex"
        @set-index="onSetIndex"
    />
  </section>
</template>

<script>
  import { mapGetters } from 'vuex';

  import OurServicesLayerBottom from '~/components/OurServicesLayerBottom';
  import OurServicesLayerTop from '~/components/OurServicesLayerTop';

  export default {
    name: 'OurServices',
    data() {
      return {
        currentItemIndex: 0,
        intervalId: 0
      }
    },
    computed: {
      ...mapGetters({
        _items: 'services/sliderItems',
        getItemById: 'services/getItemById',
      }),
      _item() {
        return this._items[this.currentItemIndex]
      },
    },
    methods: {
      slideNext() {
        let nextSlideId = this.currentItemIndex + 1;
        this.currentItemIndex = nextSlideId >= this._items.length ? 0 : nextSlideId;

        return nextSlideId;
      },
      clearInterval() {
        clearInterval(this.intervalId)
      },
      init() {
        this.intervalId = setInterval(() => {
          this.slideNext();
        }, this.speed)
      },
      reInit() {
        this.clearInterval();
        this.init()
      },
      onSetIndex(id) {
        this.currentItemIndex = id;
        this.reInit();
      }
    },
    components: {
      OurServicesLayerTop,
      OurServicesLayerBottom
    },
    props: {
      speed: {
        type: Number,
        default: 5000
      }
    },
    mounted() {
      this.init();
    }
  }
</script>

<style scoped lang="scss">
  @import "../assets/mixins.scss";

  .our-services {
    position: relative;

    &__content {
      color: #fff;
    }

    &__layer-bottom {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 1;
    }

    &__layer-top {
      height: 93rem;

      position: relative;
      z-index: 2;
    }


  }
</style>