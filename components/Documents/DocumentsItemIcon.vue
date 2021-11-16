<template>
  <img class="documents-item-icon" :src="src">
</template>

<script>

  export default {
    name: 'DocumentsItemIcon',
    data() {
      return {
        iconsFolderPath: '/images/icons/documents/',
        types: {
          xls: 'xls.svg',
          xlsx: 'xls.svg',
          pdf: 'pdf.svg',
          doc: 'doc.svg',
          docx: 'doc.svg',
        }
      }
    },
    components: {},
    computed: {
      src() {
        return this.iconsFolderPath + this.types[this.type]
      }
    },
    props: {
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

  .documents-item-icon {
    display: block;

    width: 5.5rem;
    height: 7.7rem;

    object-fit: cover;
  }


</style>
