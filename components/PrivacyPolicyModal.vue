<template>
  <modal
    name="privacy-policy"
    :scrollable="true"
    class="privacy-policy"
    transition="nice-modal-fade"
    height="auto"
    width="60%"
  >
    <button class="privacy-policy__cross" @click.prevent="hide">
      <span class="privacy-policy__cross-line"></span>
      <span class="privacy-policy__cross-line"></span>
    </button>
    <div class="privacy-policy__text" v-html="content"></div>
  </modal>
</template>

<script>
  import {mapGetters} from 'vuex';

  export default {
    name: 'PrivacyPolicyModal',
    computed: {
      ...mapGetters({
        content: 'privacyPolicy'
      })
    },
    methods: {
      hide () {
        this.$modal.hide('privacy-policy');
      }
    },
    mounted() {
      this.$store.dispatch('getPrivacyPolicy');
    }
  }
</script>

<style
  lang="scss"
>
  @import "../assets/mixins.scss";

  .privacy-policy {
    padding-top: 2rem;
    padding-bottom: 2rem;


    @media #{$mobile} {

      .vm--modal {
        left: 5% !important;
        width: 90% !important;
      }
    }

    @media #{$desktop} {
      padding-top: 8rem;
      padding-bottom: 4rem;
    }

    &__cross {
      background: none;
      border: none;
      cursor: pointer;
      outline: none;

      height: 3rem;
      width: 3rem;

      overflow: hidden;
      position: absolute;
      top: 1.5rem;
      right: 2rem;

      &:hover &-line,
      &:focus &-line {
        background-color: #f00b3c;
      }

      &-line {
        background-color: #0727e7;

        margin-left: -1.5rem;
        margin-top: 0;

        height: 1px;
        width: 3rem;

        position: absolute;
        top: 50%;
        left: 50%;

        transform-origin: 50%;
        transform: rotateZ(45deg);

        transition: background-color .2s;

        &:nth-child(2) {
          transform: rotateZ(-45deg);
        }
      }
    }

    &__text {
      font-family: $openSans;
      font-size: 1.6rem;
      line-height: 2.6rem;

      padding: 2rem;

      @media #{$desktop} {
        padding: 4rem;
      }

      h2 {
        text-transform: uppercase;
        font-family: $bebasNeueBold;
        font-size: 1.8em;

        @media #{$desktop} {
          font-size: 2.8em;
        }
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
  }

</style>
