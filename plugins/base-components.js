import Vue from "vue";

import BaseButton from "../components/BaseButton";
import BaseButton2 from "../components/BaseButton2";
import BaseInput from "../components/BaseInput";
import BaseCheckbox from "../components/BaseCheckbox";
import BaseTitle from "../components/BaseTitle";
import BaseTitleSmall from "../components/BaseTitleSmall";
import BasePaginationNumbered from "../components/BasePaginationNumbered";

const components = {
  BaseButton,
  BaseButton2,
  BaseCheckbox,
  BaseInput,
  BaseTitle,
  BaseTitleSmall,
  BasePaginationNumbered
};

Object.keys(components).forEach(key => {
  Vue.component(key, components[key])
});