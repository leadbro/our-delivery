<template>
  <div class="base-pagination-numbered-item-progress">
    <svg
        class="base-pagination-numbered-item-progress__svg"
        :height="radius * 2"
        :width="radius * 2"
    >
      <circle
          class="base-pagination-numbered-item-progress__background"
          :r="radius"
          :cx="cx"
          :cy="cy"
          :stroke-dasharray="circumference"
          :stroke-width="strokeWidth"
          fill="transparent"
      ></circle>
      <circle
          class="base-pagination-numbered-item-progress__cover"
          :r="radius"
          :cx="cx"
          :cy="cy"
          :stroke-dasharray="circumference"
          :stroke-dashoffset="coverOffset"
          :stroke-width="strokeWidth"
          fill="transparent"
      ></circle>
      <circle
          class="base-pagination-numbered-item-progress__center"
          :r="centerRadius"
          :cx="cx"
          :cy="cy"
          :stroke-dasharray="circumference"
          :stroke-width="strokeWidth"
          fill="transparent"
      ></circle>
    </svg>
  </div>
</template>

<script>
  export default {
    name: "BasePaginationNumberedItemProgress",
    data() {
      return {
        currentPercent: 0,
        startTime: 0,
        animationId: 0,
        value: 1
      };
    },
    computed: {
      radius() {
        return parseFloat(this.r)
      },
      centerRadius() {
        return this.radius - 0.01
      },
      cx() {
        return this.radius + this.strokeWidth/2
      },
      cy() {
        return this.cx
      },
      circumference() {
        return 2 * this.radius * Math.PI;
      },
      coverOffset() {
        return -this.circumference * this.value / this.max
      },
      isEnded() {
        return this.value >= this.max
      }
    },
    methods: {
      start() {
        this.intervalId = setInterval(() => {
          if (this.isEnded) {
            clearInterval(this.intervalId)
          }

          this.value += this.step;
        }, this.speed)
      },
      tick() {

      },
      init() {

      }
    },
    props: {
      r: {
        type: Number,
        default: 19
      },
      speed: {
        type: Number,
        default: 1000
      },
      step: {
        type: Number,
        default: 10
      },
      strokeWidth: {
        type: Number,
        default: 2
      },
      max: {
        type: Number,
        default: 100
      },
    },
    created() {
      this.start();
    }
  };
</script>

<style lang="scss">
  @import "../assets/mixins.scss";

  .base-pagination-numbered-item-progress {
    position: relative;
    display: inline-block;

    svg {
      transform: rotate(270deg);
    }

    circle {
      fill: transparent;
      transform: rotate(0.1deg); // to fix Firefox
    }

    &__background {
      stroke: $color-red !important;
    }

    &__cover {
      stroke: #DEDEDE !important;
    }

    .radial-fill {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

</style>
