<template>
  <modal
    name="sert-modal"
    :scrollable="true"
    class="sert-modal"
    transition="nice-modal-fade"
    height="auto"
    width="60%"
    @before-open="onOpen"
  >
    <button class="sert-modal__cross" @click.prevent="hide">
      <span class="sert-modal__cross-line"></span>
      <span class="sert-modal__cross-line"></span>
    </button>
    <img :src="image" class="sert-modal__image" />
  </modal>
</template>

<script>
  import {mapGetters} from 'vuex';

  export default {
    name: 'SertModal',
    data() {
      return {
        image: undefined
      }
    },
    methods: {
      hide () {
        this.$modal.hide('sert-modal');
      },
      onOpen(e) {
        this.image = e.params.image
      }
    },
  }
</script>

<style
  lang="scss"
>
  @import "../assets/mixins.scss";

  .sert-modal {
    padding-top: 2rem;
    padding-bottom: 2rem;

    .vm--modal {
      border-radius: 12px;
      overflow: hidden;
    }

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

      border: 2px solid #0101FE;

      height: 3rem;
      width: 3rem;

      overflow: hidden;
      position: absolute;
      top: 4.5rem;
      right: 4.2rem;

      @media #{$mobile} {
        top: 1.5rem;
        right: 1.5rem;
      }

      &:hover &-line,
      &:focus &-line {
        background-color: #f00b3c;
      }

      &-line {
        background-color: black;

        height: .2rem;
        width: 2rem;

        position: absolute;
        top: 1.25rem;
        left: 0.3rem;

        transform-origin: 50%;
        transform: rotateZ(45deg);

        transition: background-color .2s;

        @media #{$tablet} {
          top: 1.3rem;
          left: .4rem;
        }

        &:nth-child(2) {
          transform: rotateZ(-45deg);
        }
      }
    }

    &__image {
      display: block;
      width: 100%;
    }
  }

</style>
