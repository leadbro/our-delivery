<template>
  <div id="app">
    <app-header/>
    <nuxt/>
    <app-footer/>
    <privacy-policy-modal/>
  </div>
</template>

<script>
  import "normalize.css";
  import "~/assets/blocks";

  import AppHeader from "~/components/AppHeader"
  import AppFooter from "~/components/AppFooter"
  import PrivacyPolicyModal from "~/components/PrivacyPolicyModal"

  export default {
    components: {
      AppHeader,
      AppFooter,
      PrivacyPolicyModal
    }
  }
</script>

<style lang="scss">
  @import "../assets/mixins.scss";

  html:root {
    --banner-width: 100vw;
    --banner-height: calc(192 * 100vw / 320);
    --side-padding: 1.6rem;

    @media #{$desktop} {
      --banner-width: calc((1411 / 1903) * 100%);
      --banner-height: 43.6rem;
      --side-padding: 0;
    }
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  html {
    background-color: #081305;
    position: relative;

    font-size: responsive;
    min-font-size: 10px;
    max-font-size: 20px;
    lower-font-range: 320px;
    upper-font-range: 768px;

    @media #{$tablet} {
      font-size: 20px;
    }

    @media #{$desktop} {
      font-size: 10px;
    }
  }

  body {
    background-color: #fff;
    font-family: $openSans;
    font-size: 1.6rem;
    width: 100%;
  }

  #app {
    position: relative;
    overflow: hidden;
    z-index: 1;
  }

  html,
  body,
  #__nuxt,
  #__layout,
  #app {
    min-height: 100%;
  }

  picture {
    display: block;

    img {
      display: block;
    }
  }

  a {

    &:focus {
      outline-color: #0000ff;
    }
  }

  .fade-enter-active {
    animation: fade-in 2s;
  }
  .fade-leave-active {
    animation: fade-out .6s;
  }

  @keyframes fade-in {
    0% {
      opacity: .8;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes fade-out {
    0% {  opacity: 1 }
    100% { opacity: .7 }
  }
</style>

