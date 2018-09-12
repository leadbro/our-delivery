import Vue from "vue";

import BaseButton from "../components/BaseButton";
import BaseInput from "../components/BaseInput";
import BaseCheckbox from "../components/BaseCheckbox";
import BaseTitle from "../components/BaseTitle";
import BaseTitleSmall from "../components/BaseTitleSmall";

const components = {
  BaseButton,
  BaseCheckbox,
  BaseInput,
  BaseTitle,
  BaseTitleSmall
};

Object.keys(components).forEach(key => {
  Vue.component(key, components[key])
});