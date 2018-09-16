<template>
  <div id="app">
    <nuxt/>
  </div>
</template>

<script>
 export default {}
</script>

<style lang="scss">
  @import "../assets/mixins.scss";

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
</style>

