<template>
  <li class="our-advantages-item__item">
    <i class="our-advantages-item__icon">
      <img :src="_item.icon"/>
    </i>
    <div class="our-advantages-item__content">
      <h3 class="our-advantages-item__title">{{_item.title}}</h3>
      <div class="our-advantages-item__text" v-html="_item.text"></div>
    </div>
  </li>
</template>

<script>
  export default {
    name: 'OurAdvantagesItem',
    components: {

    },
    computed: {
      _item() {
        return this.item
      }
    },
    props: {
      item: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style lang="scss">
  @import "../assets/mixins.scss";

  .our-advantages-item {

    &__content {
      max-width: 90%;
    }

    &__icon {
      display: block;
      height: 5.6rem;
      width: 5.6rem;

      margin-bottom: 2.2rem;

      img {
        width: 100%;
      }

      @media #{$desktop} {
        margin-bottom: 0;
        width: 7rem;
        height: 9.8rem;
      }
    }

    &__title {
      color: #081305;
      font-family: $openSans;
      font-size: 1.2rem;
      line-height: 1.6rem;
      font-weight: 600;
      text-transform: uppercase;

      @media #{$mobile} {
        margin-bottom: -.3rem;
      }

      @media #{$desktop} {
        font-size: 1.8rem;
        line-height: 2.8rem;
      }
    }

    &__text {
      color: #858585;
      font-family: $openSans;
      font-size: 1.2rem;
      line-height: 1.6rem;
    }
  }


</style>
