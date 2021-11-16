<template>
  <article class="documents-item">
    <documents-item-icon class="documents-item__icon" :type="type"/>
    <div class="documents-item__text">
      <h5 class="documents-item__title"><slot></slot></h5>
      <div class="documents-item__properties">{{properties}}</div>
    </div>
    <a
      class="documents-item__link"
      :href="src"
      target="_blank"
    ></a>
  </article>
</template>

<script>
  import DocumentsItemIcon from './DocumentsItemIcon';

  export default {
    name: 'DocumentsItem',
    components: {
      DocumentsItemIcon
    },
    computed: {
      properties() {
        return `${this.type}, ${this.size}`
      }
    },
    props: {
      src: {
        type: String,
        default() {
          return ''
        }
      },
      size: {
        type: String,
        default() {
          return ''
        }
      },
      type: {
        type: String,
        default() {
          return ''
        }
      }
    }
  }
</script>

<style lang="scss">
  @import "../../assets/mixins";

  .documents-item {
    display: flex;
    align-items: flex-start;

    border-bottom: 0.1rem dashed #c6c6c6;

    padding-bottom: 2.7rem;

    position: relative;

    &__icon {

    }

    &__link {
      display: block;

      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 1;

      opacity: 0;
    }

    &__text {
      font-family: $openSans;
      font-size: 1.8rem;

      padding-top: 2.6rem;
      padding-left: 3.2rem;
    }

    &__title {
      color: #0727e7;
      text-decoration: underline;

      margin: 0 0 1.2rem;
    }

    &__properties {
      color: #a0a5ab;
    }
  }


</style>
