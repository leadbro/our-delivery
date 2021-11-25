export default {
  mounted() {
    /* Скролл к элементу по якорю в URL */
    let hash = this.$route.hash;
    if (hash) {
      this.$scrollTo(hash, 1500, {
        onDone: (el) => {
          this.$parent.$parent?.$refs?.header?.headroom?.unpin()
        }
      });
    }
  },
}
