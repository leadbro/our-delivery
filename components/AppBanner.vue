<template>
  <article class="app-banner">
    <picture class="app-banner__picture">
      <img
          :src="pictures.mobile"
          :alt="title"
      />
    </picture>
    <div class="app-banner__content">
      <h2>{{ title }}</h2>
      <h3>{{ subtitle }}</h3>
      <p v-html="text"></p>
    </div>
  </article>
</template>

<script>

  export default {
    name: 'AppHeaderSlider',
    data() {
      return {}
    },
    computed: {},
    methods: {},
    props: {
      title: {
        type: String,
        default() {
          return ''
        }
      },
      subtitle: {
        type: String,
        default() {
          return ''
        }
      },
      text: {
        type: String,
        default() {
          return ''
        }
      },
      pictures: {
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

  .app-banner {

    &__picture {
      height: 100%;

      position: relative;
      z-index: 1;

      overflow: hidden;

      &:after {
        content: '';
        display: block;

        background-color: rgba(0,0,0,.4);

        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 1;
      }

      img {
        object-fit: cover;
        height: 100%;
        width: 100%;
      }
    }

    &__content {
      color: #fdfeff;

      max-width: calc(100% - 15rem);
      width: 85rem;

      position: absolute;
      top: 21.1rem;
      left: 11.1rem;
      z-index: 2;

      h2 {
        font-family: $bebasNeueBold;
        font-size: 6rem;
        line-height: 7.5rem;
        text-transform: uppercase;
        margin: 0;
      }

      h3 {
        font-family: $bebasNeueBold;
        font-size: 3rem;
        line-height: 6rem;
        text-transform: uppercase;
        margin: 0;
      }

      p {
        font-family: $PTSans;
        font-size: 1.6rem;
        line-height: 2.6rem;
        margin: 0;
      }
    }
  }

</style>

