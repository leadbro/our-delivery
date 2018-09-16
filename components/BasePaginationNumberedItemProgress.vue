<template>
  <div
      class="base-pagination-numbered-item-progress"
      :class="{'base-pagination-numbered-item-progress--active' : isActive }"
  >
    <svg
        class="base-pagination-numbered-item-progress__svg"
        :height="svgSize"
        :width="svgSize"
    >
      <circle
          class="base-pagination-numbered-item-progress__background"
          :cx="cx"
          :cy="cy"
      >
        <!--<animate attributeName="r" begin="0s" dur="1s" repeatCount="indefinite" from="5%" to="25%"/>-->
      </circle>
      <circle
          class="base-pagination-numbered-item-progress__cover"
          :r="circleRadius"
          :cx="cx"
          :cy="cy"
          :stroke-dasharray="circumference"
          :stroke-dashoffset="coverOffset"
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
        isActive: false,
        value: 100
      };
    },
    computed: {
      radius() {
        return parseFloat(this.r)
      },
      svgSize() {
        return this.radius * 2
      },
      circleRadius() {
        return this.radius - this.strokeWidth/2
      },
      cx() {
        return this.circleRadius + this.strokeWidth/2
      },
      cy() {
        return this.cx
      },
      circumference() {
        return 2 * this.radius * Math.PI;
      },
      coverOffset() {
        return this.circumference * this.value / this.max
      },
      isEnded() {
        return this.value <= 0
      }
    },
    methods: {
      start() {
        this.value = this.max;

        this.intervalId = setInterval(() => {
          this.isActive = true;
          this.tick();
        }, this.speed/240)
      },
      stop() {
        this.isActive = false;
        this.stopAnimation();
      },
      stopAnimation() {
        clearInterval(this.intervalId)
      },
      tick() {
        if (this.isEnded) {
          this.stopAnimation()
        } else {
          this.value -= this.step;
        }
      },
    },
    created() {
    },
    props: {
      r: {
        type: Number,
        default: 19
      },
      speed: {
        type: Number,
        default: 3000
      },
      step: {
        type: Number,
        default: .5
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
  };
</script>

<style lang="scss">
  @import "../assets/mixins.scss";

  .base-pagination-numbered-item-progress {

    position: relative;

    transition: opacity 1s;

    svg {
      transform: rotate(270deg);
    }

    &--active &__cover {
      stroke: #fff;
    }

    &--active &__background {
      fill: rgba(255,255,255, 0);
      stroke: rgba(157, 7, 39, .4);
      r: 48%;
    }

    &__background,
    &__cover {
      transform: rotate(0.1deg); // to fix Firefox
    }

    &__background {
      fill: rgba(157, 7, 39, .4);
      r: 35%;
      transition-property: r, fill;
      transition-duration: .4s;
      transition-timing-function: ease-out;
    }

    &__cover {
      stroke: rgba(255,255,255, 0);
      transition: stroke .3s;
    }
  }

</style>
