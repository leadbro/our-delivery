<template>
  <section class="contacts-maps">

    <div class="contacts-maps__item">
      <div class="contacts-maps__text contacts-maps__text--blue">
        <h2 class="contacts-maps__title">Москва</h2>

        <h4>Адрес:</h4>
        <p>117216, ул. Грина, дом 8, помещение II, К24</p>

        <h4>Склад:</h4>
        <p>Москва, Фряновское шоссе 52.</p>

      </div>

      <GmapMap
        class="contacts-maps__map"
        :center="markers.moskow.position"
        :zoom="17"
        map-type-id="terrain"
        style="width: 918px; height: 515px"
      >
        <GmapMarker
          :position="markers.moskow.position"

        />
      </GmapMap>
    </div>
    <div class="contacts-maps__item">
      <GmapMap
        class="contacts-maps__map"
        :center="markers.sterlitamak.position"
        :zoom="17"
        map-type-id="terrain"
        style="width: 783px; height: 515px"
      >
        <GmapMarker
          :position="markers.sterlitamak.position"
        />
      </GmapMap>

      <div class="contacts-maps__text contacts-maps__text--red">
        <h2 class="contacts-maps__title">Стерлитамак, <br/>Республика Башкортостан</h2>

        <h4>Адрес и склад:</h4>
        <p>ул. Черноморская, 29 а.</p>

      </div>
    </div>
  </section>
</template>

<script>
  import Vue from 'vue'
  import * as VueGoogleMaps from 'vue2-google-maps'

  Vue.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyDNPJJQhtPmOwAP4oJ8-w6b-cyy2WR6CKs',
      libraries: 'places',
    },
  });

  export default {
    name: 'ContactsMaps',
    data() {
      return {
        markers: {
          moskow: {
            position: {lat: 55.563322, lng: 37.5828713}
          },
          sterlitamak: {
            position: {lat: 53.6220306, lng: 55.9216816}
          }
        }
      }
    },
    components: {},
    computed: {},
    props: {}
  }
</script>

<style
  scoped
  lang="scss"
>
  @import "../assets/mixins.scss";

  .contacts-maps {

    &__item {
      display: flex;
    }

    &__title {
      color: #fdfeff;
      font-family: $bebasNeueBold;
      font-size: 5.5rem;
      line-height: 7.5rem;
      text-transform: uppercase;

      margin-top: 11rem;
      margin-bottom: 2rem;
    }

    &__text {
      flex-shrink: 0;

      color: #fdfeff;

      &--blue {
        background-color: #0727e7;
        padding-left: 32rem;

        width: 783px;
      }

      &--red {
        background-color: #f00b3c;
        padding-left: 9.7rem;

        width: 918px;
      }

      h4 {
        font-family: $bebasNeue;
        font-size: 3rem;
        font-weight: 400;
        letter-spacing: 0.03rem;
        text-transform: uppercase;

        margin-bottom: 1rem;
      }

      p {
        font-family: $PTSans;
        font-size: 1.6rem;
      }
    }
  }


</style>