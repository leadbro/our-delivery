<template>
  <li
      class="base-pagination-numbered-item"
      ref="item"
      :class="{'base-pagination-numbered-item--current' : isCurrent }"
  >
    <div class="base-pagination-numbered-item__name">
      <slot></slot>
    </div>

    <base-pagination-numbered-item-progress
        class="base-pagination-numbered-item__progress"
        :r="progressRadius"
        ref="progress"
        :speed="speed"
    />
  </li>
</template>

<script>
  import BasePaginationNumberedItemProgress from '~/components/BasePaginationNumberedItemProgress'

export default {
  name: "BasePaginationNumberedItem",
  data() {
    return {
      currentPercent: 0,
      startTime: 0,
      animationId: 0,
      size: 19,
      progressRadius: 10
    };
  },
  computed: {
    duration() {
      return this.speed
    },
  },
  watch: {
    isCurrent(value) {
      value ? this.start() : this.stop()
    }
  },
  methods: {
    init() {
      this.calculateSize()

      if (this.isCurrent) {
        this.start();
      }
    },
    calculateAll() {
      this.calculateSize()
      this.calculateRadius()
    },
    calculateSize() {
      const styles = getComputedStyle(this.$el)
      this.size = parseFloat(styles.getPropertyValue('--pagination-item-size'));
    },
    calculateRadius() {
      const html = document.querySelector('html')
      const size = parseFloat(getComputedStyle(html).fontSize)

      this.progressRadius = (this.size)/2 * size;
    },
    start() {
      this.$refs.progress.start();
    },
    stop() {
      this.$refs.progress.stop();
    }
  },
  props: {
    isCurrent: {
      type: Boolean,
      default: false
    },
    speed: {
      type: Number,
      default: 6000
    },
  },
  created() {
    window.addEventListener('resize', this.calculateAll)
  },
  destroyed() {
    window.removeEventListener('resize', this.calculateAll)
  },
  mounted() {
    this.init()

    this.calculateRadius()
  },
  components: {
    BasePaginationNumberedItemProgress
  }
};
</script>

<style lang="scss">
@import "../assets/mixins.scss";

.base-pagination-numbered-item {
  --pagination-item-size: 2.8rem;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  border-radius: 50%;
  color: #fff;

  font-family: $montserrat;
  font-weight: 700;
  font-size: 1.2rem;

  width: var(--pagination-item-size);
  height: var(--pagination-item-size);

  position: relative;

  @media #{$desktop} {
    --pagination-item-size: 3.8rem;

    font-size: 1.8rem;
  }

  &__progress {
    position: absolute;
    top: -1px;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
  }

  &__name {
    font-size: inherit;
    position: relative;
    z-index: 2;

    transform: scale(.8);
    transition: transform .3s;
  }

  &--current &__name {
    transform: scale(1);
  }
}
</style>
