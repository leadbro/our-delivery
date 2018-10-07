<template>
  <div id="app">
    <app-header/>
    <nuxt/>
    <app-footer/>
  </div>
</template>

<script>
  import "normalize.css";
  import "~/assets/blocks";

  import AppHeader from "~/components/AppHeader"
  import AppFooter from "~/components/AppFooter"

  export default {
    components: {
      AppHeader,
      AppFooter
    }
  }
</script>

<style lang="scss">
  @import "../assets/mixins.scss";

  html:root {
    --banner-width: calc((1411 / 1903) * 100%);
    --banner-height: 57.7rem;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  html {
    font-size: 10px;
    position: relative;
  }

  body {
    font-family: $openSans;
    font-size: 1.6rem;
    width: 100%;
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

