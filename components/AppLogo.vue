<template>
  <div class="logo">
    <svg class="logo__icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="89" height="101" viewBox="0 0 89 101"><defs><path id="h352a" d="M183 55.05l44.75 25.65L272 55.05v50.3L227.3 131 183 105.35z"/><path id="h352b" d="M183 55.13L227.75 30 272 55.13v25.63l-44.75 25.63L183 80.76z"/><path id="h352c" d="M227.63 78.44L183 54.3v51.22l44.62 25.18z"/><path id="h352d" d="M227.28 53.34c.18 0 .36.02.53.06a2.53 2.53 0 1 0-.95 4.56 2.33 2.33 0 0 1-1.92-2.29 2.34 2.34 0 0 1 2.34-2.33z"/><path id="h352e" d="M227.5 45.29c1.8 0 7.27 8.92 7.27 19.94 0 3.79-.86 6.52-1.98 8.49H222.2c-1.12-1.97-1.98-4.7-1.98-8.5 0-11 5.6-19.93 7.27-19.93zm-3 10.4a3.2 3.2 0 0 0 3.22 3.18 3.2 3.2 0 0 0 3.22-3.18 3.2 3.2 0 0 0-3.22-3.19 3.2 3.2 0 0 0-3.22 3.19zm-7.27 19.3l2.57-6.37s-.01 1.56.43 2.97c.41 1.35 1.28 2.55 1.28 2.55l-3.42 2.55s-1.1.8-1.29.42c-.23-.45.43-2.12.43-2.12zm20.97 2.12c-.2.39-1.29-.42-1.29-.42l-3.42-2.55s.87-1.2 1.28-2.55c.44-1.4.43-2.97.43-2.97l2.57 6.37s.66 1.67.43 2.12z"/><path id="h352f" d="M183 80.93l17.97 8.49s1.93-.64 3.85 0c1.86.6 3.77 3.25 3.77 3.25s1.57-4.24 6.54-3.49c3.67.55 4.38 3.82 4.5 5.28a3.5 3.5 0 0 1 4.4-1.14c.17-.42.32-.88.48-1.36 1.94-6.11-1.29-14-1.29-14l4.28 2.54 4.28-2.54s-2.58 6.37-1.32 12.34a9.53 9.53 0 0 1 4.3-1.12c3.37-.12 7 1.6 8.08 3.9.16-.49.91-2.66 1.98-3.4 1.79-1.23 4.57 0 4.9.15-.19-.16-.3-.43-.3-.88a3.5 3.5 0 0 1 3.52-3.5c.79 0 1.49.27 2.05.7a1.74 1.74 0 0 1 2.8-.09l.09-.04L272 80.71l-44.79 25.92-43.78-25.43"/></defs><g><g transform="translate(-183 -30)"><use fill="#f00b3c" xlink:href="#h352a"/></g><g transform="translate(-183 -30)"><use fill="#0727e7" xlink:href="#h352b"/></g><g opacity=".18" transform="translate(-183 -30)"><use xlink:href="#h352c"/></g><g transform="translate(-183 -30)"><use fill="#fff" xlink:href="#h352d"/></g><g transform="translate(-183 -30)"><use fill="#fff" xlink:href="#h352e"/></g><g transform="translate(-183 -30)"><use fill="#fff" xlink:href="#h352f"/></g></g></svg>
    <div class="logo__text">
      Наша доставка
    </div>
  </div>
</template>

<style lang="scss">
  @import "../assets/mixins.scss";

  .logo {
    display: flex;
    align-items: center;

    font-size: 4rem;
    line-height: 4.024rem;

    &__icon {
      height: 10.1rem;
      width: 8.9rem;
    }

    &__text {
      font-family: $pobedaBold;
      text-transform: uppercase;
      padding: 0 1.7rem;
      width: 12.8rem;
    }
  }

</style>

