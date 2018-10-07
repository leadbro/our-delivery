<template>
  <article class="documents-item">
    <documents-item-icon class="documents-item__icon" :type="type"/>
    <div class="documents-item__text">
      <h5 class="documents-item__title"><slot></slot></h5>
      <div class="documents-item__properties">{{properties}}</div>
    </div>
  </article>
</template>

<script>
  import DocumentsItemIcon from '~/components/DocumentsItemIcon';

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

<style scoped lang="scss">
  @import "../assets/mixins.scss";

  .documents-item {

    &__icon {

    }
  }


</style>