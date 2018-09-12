<template>
  <li
      class="our-advantages-item__item"
  >
    <i class="our-advantages-item__icon">
      <img :src="_item.icon"/>
    </i>
    <div class="our-advantages-item__content">
      <h3 class="our-advantages-item__title">{{_item.title}}</h3>
      <div class="our-advantages-item__text">{{_item.text}}</div>
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

      width: 7rem;
      height: 9.8rem;

      img {
        width: 100%;
      }
    }

    &__title {
      color: #081305;
      font-family: $openSans;
      line-height: 2.8rem;
      font-weight: 600;
      font-size: 1.8rem;
      text-transform: uppercase;
    }

    &__text {
      color: #858585;
      font-family: $openSans;
      font-size: 1.4rem;
    }
  }


</style>