<template>
  <article class="services-item">
    <img
      :src="iconSrc"
      :alt="title"
      class="services-item__icon"
    >
    <div class="services-item__content">
      <h4 class="services-item__title">{{title}}</h4>

      <div class="services-item__text">{{previewText}}</div>

      <div
        class="services-item__expand-area"
        :aria-expanded="isExpanded"
      >
        <div class="services-item__text" v-html="text"></div>
        <base-button class="services-item__button" size="small" @click.native="scrollToBannerForm">Заказать</base-button>
      </div>

      <button
        class="services-item__readmore-button"
        :class="{'services-item__readmore-button--expanded': isExpanded}"
        @click.prevent="toggleExpand"
      >{{readmoreText}}
      </button>
    </div>
  </article>
</template>

<script>

  export default {
    name: 'ServicesItem',
    data() {
      return {
        isExpanded: false
      }
    },
    components: {},
    computed: {
      readmoreText() {
        return this.isExpanded ? 'Свернуть' : 'Читать больше'
      }
    },
    methods: {
      toggleExpand() {
        this.isExpanded = this.isExpanded === false;
      },
      scrollToBannerForm() {
        this.$scrollTo('#banner-form');
      }
    },
    props: {
      title: {
        type: String,
        default: ''
      },
      text: {
        type: String,
        default: ''
      },
      previewText: {
        type: String,
        default: ''
      },
      iconSrc: {
        type: String,
        default: ''
      },
    }
  }
</script>

<style lang="scss">
  @import "../assets/mixins.scss";

  .services-item {
    display: flex;

    &__icon {
      display: block;

      flex-shrink: 0;
      width: 6rem;
      height: 6rem;

      object-fit: contain;
    }

    &__content {
      padding-top: .6rem;
      padding-left: 1.8rem;
    }

    &__expand-area {
      max-height: 0;
      opacity: 0;

      overflow: hidden;

      transition: opacity 1s, max-height 1s;


      &[aria-expanded="true"] {
        max-height: 100rem;
        opacity: 1;

        transition: opacity 1s, max-height 2s;
      }
    }

    &__title {
      font-family: $bebasNeueBold;
      font-size: 3rem;
      line-height: 6rem;
      text-transform: uppercase;

      margin: 0;
    }

    &__text {
      font-family: $openSans;
      font-size: 1.4rem;
      line-height: 2.6rem;

      ul {
        padding-left: 1.6rem;
        list-style-type: none;

        li {
          position: relative;

          &:before {
            content: '';
            display: block;

            background-color: #0727e7;
            border-radius: 50%;

            width: 0.6rem;
            height: 0.6rem;

            position: absolute;
            top: 1rem;
            left: -1.6rem;
          }
        }
      }
    }

    &__button {
      margin-top: 3rem;
      margin-bottom: 2rem;
    }

    &__readmore-button {
      cursor: pointer;

      color: #0727e7;
      background: none;
      border: none;
      border-bottom: .1rem dotted #0727e7;
      font-family: $openSans;
      font-size: 1.4rem;
      outline: none;

      padding: 0;

      position: relative;

      transition: border-bottom-color .5s;

      &:after {
        content: '';
        display: block;

        background-image: url('/images/icons/arrow.svg');
        background-repeat: no-repeat;

        width: 1.2rem;
        height: 0.8rem;

        position: absolute;
        right: -1.8rem;
        top: .4rem;

        transition: transform .5s;
      }

      &--expanded {
        border-bottom-color: rgba(255, 255, 255, 0);

        &:after {
          transform: rotateZ(180deg);
        }
      }
    }
  }


</style>