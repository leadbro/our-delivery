<template>
  <article class="services-item" :id="serviceId">
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
      },
      serviceId() {
        return 'service-' + this.id
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
    mounted() {
      const hash = this.$route?.hash

      if (hash && hash.slice(1) === this.serviceId) {
        this.isExpanded = true
      }
    },
    props: {
      id: {
        type: Number,
        required: true
      },
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

    @media #{$mobile} {
      flex-direction: column;
    }

    &__icon {
      display: block;

      flex-shrink: 0;
      width: 3.9rem;
      height: 3.9rem;

      object-fit: contain;

      @media #{$desktop} {
        width: 6rem;
        height: 6rem;
      }
    }

    &__content {
      padding-top: .6rem;
      padding-left: 0;

      @media #{$desktop} {
        padding-top: .6rem;
        padding-left: 1.8rem;
      }
    }

    &__expand-area {
      max-height: 0;
      opacity: 0;

      overflow: hidden;

      transition: opacity 1s, max-height .8s;


      &[aria-expanded="true"] {
        max-height: 100rem;
        opacity: 1;

        transition: opacity 1s, max-height 1.5s;
      }
    }

    &__title {
      font-family: $bebasNeueBold;
      font-size: 2rem;
      line-height: 4.2rem;
      text-transform: uppercase;

      margin: 0;

      @media #{$mobile} {
        margin-bottom: .4rem;
      }

      @media #{$desktop} {
        font-size: 3rem;
        line-height: 6rem;
      }
    }

    &__text {
      font-family: $openSans;
      font-size: 1.4rem;
      line-height: 1.9rem;

      @media #{$mobile} {
        padding-right: 2.0rem;
      }

      @media #{$desktop} {
        line-height: 2.6rem;
      }

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

      @media #{$mobile} {
        width: 100%;
      }
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

      margin-top: 2rem;
      padding: 0;

      position: relative;

      transition: border-bottom-color .5s;

      @media #{$mobile} {
        margin-top: 1.4rem;
        font-size: 1.2rem;
        line-height: 1.6rem;
      }

      &:after {
        content: '';
        display: block;

        background-image: url('~/assets/images/icons/arrow.svg');
        background-repeat: no-repeat;
        background-size: contain;

        width: 0.9rem;
        height: 0.5rem;

        position: absolute;
        right: -1.8rem;
        top: .6rem;

        transition: transform .5s;

        @media #{$mobile} {
          height: .7rem;
          width: .7rem;
          top: 50%;
          transform: translateY(-50%);
          right: -1.8rem;
        }
      }

      &--expanded {
        border-bottom-color: rgba(255, 255, 255, 0);

        &:after {
          transform: rotateZ(180deg);

          @media #{$mobile} {
            transform: rotateZ(180deg) translateY(50%);
          }
        }
      }
    }
  }


</style>
