<template>
  <li
      class="base-pagination-numbered-item"
      :class="{'base-pagination-numbered-item--current' : isCurrent }"
  >
    <slot></slot>


  </li>
</template>

<script>
export default {
  name: "BasePaginationNumberedItem",
  data() {
    return {
      currentPercent: 0,
      startTime: 0,
      animationId: 0,
    };
  },
  computed: {
    circum() {
      return Math.PI * 2
    },
    start() {
      return Math.PI / -2
    },
    duration() {
      return this.speed
    }
  },
  watch: {
    isCurrent(value) {

    }
  },
  methods: {

  },
  props: {
    isCurrent: {
      type: Boolean,
      default: false
    },
    speed: {
      type: Number,
      default: 6000
    }
  }
};
</script>

<style scoped lang="scss">
@import "../assets/mixins.scss";

.base-pagination-numbered-item {
  --size: 3.8rem;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  background-color: rgba(210, 210, 210, 0.4);
  background-clip: padding-box;
  border: 6px solid rgba(255, 255, 255, 0);
  border-radius: 50%;

  font-family: $pobedaBold;
  font-weight: 700;
  font-size: 1.3rem;

  width: var(--size);
  height: var(--size);

  position: relative;

  transition-property: border-color, background-color;
  transition-duration: 0.6s;

  &--current {
    border: 1px solid rgba(210, 210, 210, 0.4);

    background-color: #fff;
    color: $color-red-2;
    font-size: 1.8rem;
    font-weight: 600;
  }

  &__canvas {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    //z-index: -1;
  }
}
</style>
