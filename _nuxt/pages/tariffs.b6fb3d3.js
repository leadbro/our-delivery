(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{407:function(t,e,n){"use strict";e.a={data:function(){return{scrollToOffset:0}},mounted:function(){var t=this,e=this.$route.hash;e&&this.$scrollTo(e,1500,{offset:this.scrollToOffset,onDone:function(e){var n,r,o,c;null===(n=t.$parent.$parent)||void 0===n||null===(r=n.$refs)||void 0===r||null===(o=r.header)||void 0===o||null===(c=o.headroom)||void 0===c||c.unpin()}})}}},408:function(t,e,n){var content=n(413);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(4).default)("5857ad87",content,!0,{sourceMap:!1})},409:function(t,e,n){var content=n(415);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(4).default)("4d870327",content,!0,{sourceMap:!1})},410:function(t,e,n){var content=n(417);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(4).default)("5a0e6607",content,!0,{sourceMap:!1})},412:function(t,e,n){"use strict";n(408)},413:function(t,e,n){var r=n(3)((function(i){return i[1]}));r.push([t.i,".documents-item-icon{display:block;width:3.2rem;height:4.6rem;-o-object-fit:cover;object-fit:cover}@media screen and (min-width:1280px){.documents-item-icon{width:5.5rem;height:7.7rem}}",""]),r.locals={},t.exports=r},414:function(t,e,n){"use strict";n(409)},415:function(t,e,n){var r=n(3)((function(i){return i[1]}));r.push([t.i,'.documents-item{display:flex;align-items:flex-start;border-bottom:.1rem dashed #c6c6c6;padding-bottom:1.7rem;position:relative}@media screen and (min-width:1280px){.documents-item{padding-bottom:2.7rem}}.documents-item__link{display:block;position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;opacity:0}.documents-item__text{font-family:"Open Sans",sans-serif;font-size:1.4rem;padding-top:0;padding-left:2.2rem}@media screen and (max-width:1280px){.documents-item__text{line-height:1.9rem;padding-right:2rem}}@media screen and (min-width:1280px){.documents-item__text{font-size:1.8rem;padding-top:2.6rem;padding-left:3.2rem}}.documents-item__title{color:#0727e7;text-decoration:underline;margin:0 0 1.2rem}.documents-item__properties{color:#a0a5ab}',""]),r.locals={},t.exports=r},416:function(t,e,n){"use strict";n(410)},417:function(t,e,n){var r=n(3)((function(i){return i[1]}));r.push([t.i,"@media screen and (min-width:1280px){.documents{display:flex;flex-wrap:wrap}}.documents__item{margin-bottom:2.4rem}@media screen and (min-width:1280px){.documents__item{margin-right:10rem;margin-bottom:3.2rem;width:calc(50% - 10rem)}}",""]),r.locals={},t.exports=r},418:function(t,e,n){"use strict";var r={name:"DocumentsItemIcon",data:function(){return{iconsFolderPath:"/our-delivery/images/icons/documents/",types:{xls:"xls.svg",xlsx:"xls.svg",pdf:"pdf.svg",doc:"doc.svg",docx:"doc.svg"}}},components:{},computed:{src:function(){return this.iconsFolderPath+this.types[this.type]}},props:{type:{type:String,default:function(){return""}}}},o=(n(412),n(0)),c={name:"DocumentsItem",components:{DocumentsItemIcon:Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("img",{staticClass:"documents-item-icon",attrs:{src:t.src}})}),[],!1,null,null,null).exports},computed:{properties:function(){return"".concat(this.type,", ").concat(this.size)}},props:{src:{type:String,default:function(){return""}},size:{type:String,default:function(){return""}},type:{type:String,default:function(){return""}}}},l=(n(414),{name:"Documents",components:{DocumentsItem:Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"documents-item"},[n("documents-item-icon",{staticClass:"documents-item__icon",attrs:{type:t.type}}),t._v(" "),n("div",{staticClass:"documents-item__text"},[n("h5",{staticClass:"documents-item__title"},[t._t("default")],2),t._v(" "),n("div",{staticClass:"documents-item__properties"},[t._v(t._s(t.properties))])]),t._v(" "),n("a",{staticClass:"documents-item__link",attrs:{href:t.src,target:"_blank"}})],1)}),[],!1,null,null,null).exports},computed:{_items:function(){return this.items}},props:{items:{type:Array,default:function(){return[]}}}}),m=(n(416),Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"documents"},t._l(t._items,(function(e){return n("documents-item",{key:e.id,staticClass:"documents__item",attrs:{src:e.src,type:e.type,size:e.size}},[t._v("\n    "+t._s(e.name)+"\n  ")])})),1)}),[],!1,null,null,null));e.a=m.exports},430:function(t,e,n){var content=n(467);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(4).default)("53405bb6",content,!0,{sourceMap:!1})},431:function(t,e,n){var content=n(469);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(4).default)("4608d03f",content,!0,{sourceMap:!1})},432:function(t,e,n){var content=n(471);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(4).default)("57a92aea",content,!0,{sourceMap:!1})},466:function(t,e,n){"use strict";n(430)},467:function(t,e,n){var r=n(3)((function(i){return i[1]}));r.push([t.i,"@media screen and (max-width:1280px){.our-tariffs__title{margin-bottom:4.2rem}}",""]),r.locals={},t.exports=r},468:function(t,e,n){"use strict";n(431)},469:function(t,e,n){var r=n(3)((function(i){return i[1]}));r.push([t.i,'.warehousing__container{display:flex}.warehousing__content{padding-left:7.5rem}.warehousing__title{font-family:"BebasNeueBold",sans-serif;font-size:3rem;text-transform:uppercase}.warehousing__title-address{font-family:"BebasNeueRegular",sans-serif;font-size:2.4rem;line-height:2.6rem;text-transform:uppercase}.warehousing__text{font-size:1.4rem;line-height:.5}.warehousing__text p{line-height:2.6rem}.warehousing ul{font-family:"Open Sans",sans-serif;font-size:1.6rem;line-height:2.4rem;padding-left:1.6rem;list-style-type:none}.warehousing ul li{position:relative;margin-bottom:1.4rem}.warehousing ul li:before{content:"";display:block;background-color:#0727e7;border-radius:50%;width:.6rem;height:.6rem;position:absolute;top:1rem;left:-1.6rem}',""]),r.locals={},t.exports=r},470:function(t,e,n){"use strict";n(432)},471:function(t,e,n){var r=n(3)((function(i){return i[1]}));r.push([t.i,".page-tariffs__documents{margin-bottom:8rem}.page-tariffs__tariffs{margin-bottom:6rem}.page-tariffs__warehousing{margin-bottom:28rem}.page-tariffs__banner{width:var(--banner-width);height:var(--banner-height);position:absolute;right:0;top:0;z-index:3}@media screen and (max-width:1280px){.page-tariffs__banner{position:relative}}",""]),r.locals={},t.exports=r},494:function(t,e,n){"use strict";n.r(e);var r=n(5),o=(n(17),n(14),n(10),n(11),n(18),n(19),n(6)),c=n(418),l=n(13);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var f={name:"OurTariffs",components:{Documents:c.a},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(l.b)({_items:"tariffs/items"}))},d=f,_=(n(466),n(0)),h=Object(_.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"our-tariffs"},[n("div",{staticClass:"out-tariffs__container container"},[n("base-title-small",{staticClass:"our-tariffs__title"},[t._v("\n      Предоставим для Вас оптимальный тариф и сроки доставки\n    ")]),t._v(" "),n("documents",{staticClass:"our-tariffs__documents",attrs:{items:t._items}})],1)])}),[],!1,null,null,null).exports,v={name:"Warehousing",components:{},computed:{}},x=(n(468),Object(_.a)(v,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"warehousing"},[n("div",{staticClass:"warehousing__container container"},[n("img",{staticClass:"warehousing__image",attrs:{src:"/our-delivery/images/warehousing.jpg",alt:"Складские услуги"}}),t._v(" "),n("div",{staticClass:"warehousing__content"},[n("h3",{staticClass:"warehousing__title"},[t._v("Компания «Наша Доставка» предлагает складские услуги:")]),t._v(" "),n("ul",{staticClass:"warehousing__list"},[n("li",[t._v("«Ответственное хранение» - "),n("b",[t._v("стоимость услуги 1м3 — 25 руб. в сутки;")])]),t._v(" "),n("li",[t._v("«Запаллечивание груза» — "),n("b",[t._v("стоимость услуги 220 р./паллет;")])]),t._v(" "),n("li",[t._v("«Изготовление жесткой упаковки» — "),n("b",[t._v("стоимость услуги 1м3 — 600 руб.;")])]),t._v(" "),n("li",[t._v("«Внутритарный пересчет» — "),n("b",[t._v("стоимость услуги 1 место – 8 рублей.")])])]),t._v(" "),n("h4",{staticClass:"warehousing__title-address"},[t._v("Наш склад находиться по адресу:")]),t._v(" "),n("div",{staticClass:"warehousing__text"},[n("p",[t._v("\n          Московская область, г. Щелково Фряновское шоссе 52.\n        ")]),t._v(" "),n("br"),t._v(" "),n("p",[t._v("\n          При необходимости, вынужденное хранение груза осуществляется на складах партнеров в городе получения.\n        ")]),t._v(" "),n("p",[t._v("\n          За хранение взымается дополнительная плата в размере 100 руб./1 м3. за каждый день.\n        ")])])])])])}],!1,null,null,null).exports),w={name:"docs",transition:"fade",mixins:[n(407).a],data:function(){return{title:"Тарифы и сроки",subtitle:"",text:"",pictures:{mobile:"/our-delivery/images/banners/tariffs.jpg"}}},head:function(){return{title:this.title}},components:{OurTariffs:h,Warehousing:x},fetch:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.store,e.next=3,n.dispatch("tariffs/getItems");case 3:case"end":return e.stop()}}),e)})))()}},y=(n(470),Object(_.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-tariffs"},[n("app-banner",{staticClass:"page-tariffs__banner",attrs:{title:t.title,subtitle:t.subtitle,text:t.text,pictures:t.pictures}}),t._v(" "),n("our-tariffs",{staticClass:"page-tariffs__tariffs",attrs:{id:"tariffs"}}),t._v(" "),n("banner-form",{staticClass:"page-tariffs__form"})],1)}),[],!1,null,null,null));e.default=y.exports}}]);