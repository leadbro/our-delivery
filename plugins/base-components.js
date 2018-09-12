import Vue from "vue";

import BaseButton from "../components/BaseButton";
import BaseInput from "../components/BaseInput";
import BaseCheckbox from "../components/BaseCheckbox";

const components = {
  BaseButton,
  BaseCheckbox,
  BaseInput
};

Object.keys(components).forEach(key => {
  Vue.component(key, components[key])
});