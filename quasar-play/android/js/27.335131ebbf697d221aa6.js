webpackJsonp([27,95],{205:function(t,e,n){var i,o;i=n(275);var a=n(383);o=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(o=i=i.default),"function"==typeof o&&(o=o.options),o.render=a.render,o.staticRenderFns=a.staticRenderFns,t.exports=i},275:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(2);e.default={methods:{showToast:function(){i.Toast.create((i.Platform.is.desktop?"Clicked":"Tapped")+" on a context menu item.")}}}},383:function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("div",[e("div",{staticClass:"layout-padding",staticStyle:{"margin-bottom":"1000px"}},[t._m(0),t._v(" "),e("blockquote",[e("small",[t._v("\n        Works with any elements you want. It doesn't have to be a List.\n      ")])]),t._v(" "),t._m(1)],1),t._v(" "),e("q-context-menu",{ref:"context"},[e("div",{staticClass:"list highlight",staticStyle:{"min-width":"150px","max-height":"300px"}},t._l(10,function(n){return e("div",{staticClass:"item item-link two-lines item-delimiter",on:{click:function(e){t.showToast(),t.$refs.context.close()}}},[e("div",{staticClass:"item-content"},[e("div",[t._v("Label")]),t._v(" "),e("div",[t._v("Value")])])])}))])],1)},staticRenderFns:[function(){var t=this,e=(t.$createElement,t._c);return e("p",{staticClass:"caption"},[e("span",{staticClass:"desktop-only"},[t._v("\n        Right click anywhere on the Page below (not on header though).\n        "),e("br"),t._v("\n        On a real mobile device it works different by opening a minimized Modal triggered by a long tap.\n      ")]),t._v(" "),e("span",{staticClass:"mobile-only"},[t._v("\n        Long Tap anywhere on the Page below (not on header though).\n        "),e("br"),t._v("\n        On a desktop it works different by opening a Popover.\n      ")])])},function(){var t=this,e=(t.$createElement,t._c);return e("p",{staticClass:"caption"},[e("span",{staticClass:"mobile-only"},[t._v("\n        On a desktop browser user\n      ")]),t._v(" "),e("span",{staticClass:"desktop-only"},[t._v("\n        User\n      ")]),t._v("\n      can dismiss the Context Menu\n      by hitting the <ESCAPE> key.\n    ")])}]}}});