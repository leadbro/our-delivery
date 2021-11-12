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
      size: 19
    };
  },
  computed: {
    progressRadius() {
      return (this.size)/2 * 10;
    },
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
      const styles = getComputedStyle(this.$el)
      const tabletSize = parseFloat(styles.getPropertyValue('--pagination-item-tablet-size'));

      if (tabletSize) {
        this.size = tabletSize
      } else {
        this.size = parseFloat(styles.getPropertyValue('--pagination-item-size'));
      }

      if (this.isCurrent) {
        this.start();
      }
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
  mounted() {
    this.init()
  },
  components: {
    BasePaginationNumberedItemProgress
  }
};
</script>

<style scoped lang="scss">
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

  @media #{$tablet} {
    // Увеличиваем в 2 раза для планшета
    --pagination-item-tablet-size: 5.6rem;
  }

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
