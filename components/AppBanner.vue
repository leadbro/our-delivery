<template>
  <article class="app-banner">
    <picture class="app-banner__picture">
      <img
        v-if="pictures && isWithPicture"
        :src="pictures.mobile"
        :alt="title"
      />
    </picture>
    <div class="app-banner__content" v-if="isWithText" :class="contentClasses">
      <h2 class="app-banner__title">{{ title }}</h2>
      <h3 v-if="subtitle" class="app-banner__subtitle">{{ subtitle }}</h3>
      <p v-if="text" class="app-banner__text" v-html="text"></p>
    </div>
  </article>
</template>

<script>

  export default {
    name: 'AppHeaderSlider',
    data() {
      return {}
    },
    computed: {
      isCentered() {
        return !this.subtitle && !this.text
      },
      contentClasses() {
        return {
          'app-banner__content--centered': this.isCentered
        }
      }
    },
    methods: {},
    props: {
      title: {
        type: String,
        default() {
          return ''
        }
      },
      isWithText: {
        type: Boolean,
        default() {
          return true
        }
      },
      isWithPicture: {
        type: Boolean,
        default() {
          return true
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
      background-color: black;

      height: 100%;

      position: relative;
      z-index: 1;

      overflow: hidden;

      &:after {
        content: '';
        display: block;

        background-color: rgba(0, 0, 0, .4);

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

      position: absolute;
      top: 3.4rem;
      left: var(--side-padding);
      right: var(--side-padding);
      z-index: 2;

      @media #{$desktop} {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;

        height: 22.0rem;
        max-width: calc(100% - 15rem);
        width: 75rem;

        top: 10.6rem;
        left: 18.1rem;
      }

      &--centered {
        display: flex;
        justify-content: center;
        top: 0;
        bottom: 0;
        height: 100%;

        @media #{$mobile} {
          justify-content: flex-start;;
          align-items: center;
        }
      }
    }

    &__title {
      font-family: $bebasNeueBold;
      font-size: 2.6rem;
      line-height: 120%;
      text-transform: uppercase;
      margin: 0;
      // width: 25.5rem;

      @media #{$desktop} {
        font-size: 6rem;
        line-height: 120%;
        margin-bottom: 1.4rem;
      }
    }

    &__subtitle {
      font-family: $bebasNeueBold;
      text-transform: uppercase;
      margin: 0;

      @media #{$desktop} {
        font-size: 3rem;
        line-height: 6rem;
      }
    }

    &__text {
      font-family: $PTSans;
      font-size: 1.4rem;
      line-height: 1.8rem;
      margin: 0;
      width: 20.7rem;

      @media #{$desktop} {
        font-size: 2.4rem;
        line-height: 3.1rem;
        height: 6.2rem;
        width: 75%;
      }
    }
  }

</style>

