export default {
  data() {
    return {
      scrollToOffset: 0,
    }
  },
  mounted() {
    /* Скролл к элементу по якорю в URL */
    let hash = this.$route.hash;
    if (hash) {
      this.$scrollTo(hash, 1500, {
        offset: this.scrollToOffset,
        onDone: (el) => {
          this.$parent.$parent?.$refs?.header?.headroom?.unpin()
        }
      });
    }
  },
}
