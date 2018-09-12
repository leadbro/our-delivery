<template>
  <div class="our-services-layer-bottom">
    <div
        class="our-services-layer-bottom__square"
        :style="squareStyle"
    ></div>
    <picture class="our-services-layer-bottom__picture">
      <img
          :src="_item.picture.mobile"
          :alt="_item.title"
      />
    </picture>
  </div>
</template>

<script>

  export default {
    name: 'OurServicesLayerBottom',
    components: {},
    data() {
      return {}
    },
    computed: {
      squareStyle() {
        return {
          'background-color': this._item.color
        }
      },
      _item() {
        return this.item
      },
    },
    props: {
      item: {
        type: Object,
        default() {
          return {}
        }
      },
    }
  }
</script>

<style scoped lang="scss">
  @import "../assets/mixins.scss";

  .our-services-layer-bottom {
    display: flex;
    overflow: hidden;

    &__square {
      /*background-color: #f00b3c;*/
      height: 100%;

      transition: background-color .4s ease-out;
    }

    &__square,
    &__swiper {
      flex-shrink: 0;
      width: 50%;
    }

    &__picture {
      height: 100%;

      img {
        object-fit: cover;

        width: 100%;
        height: 100%;
      }
    }
  }
</style>