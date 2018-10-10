import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDNPJJQhtPmOwAP4oJ8-w6b-cyy2WR6CKs',
    libraries: 'places',
  },
});