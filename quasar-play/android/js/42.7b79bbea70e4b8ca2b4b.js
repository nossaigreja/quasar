webpackJsonp([42,95],{185:function(t,a,e){var i,s;i=e(259);var l=e(374);s=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(s=i=i.default),"function"==typeof s&&(s=s.options),s.render=l.render,s.staticRenderFns=l.staticRenderFns,t.exports=i},259:function(t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={data:function(){return{model:""}}}},374:function(t,a){t.exports={render:function(){var t=this,a=(t.$createElement,t._c);return a("div",[a("div",{staticClass:"layout-padding"},[a("p",{staticClass:"caption"},[t._v("Standalone")]),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.model,expression:"model"}],domProps:{value:t._s(t.model)},on:{input:function(a){a.target.composing||(t.model=a.target.value)}}}),t._v(" "),a("p",{staticClass:"caption"},[t._v("Placeholder")]),t._v(" "),a("textarea",{attrs:{placeholder:"Placeholder"}}),t._v(" "),a("p",{staticClass:"caption"},[t._v("Stacked Label")]),t._v(" "),t._m(0),t._v(" "),a("p",{staticClass:"caption"},[t._v("Floating Label")]),t._v(" "),t._m(1),t._v(" "),a("p",{staticClass:"caption"},[t._v("Disabled State")]),t._v(" "),a("textarea",{attrs:{disabled:""}},[t._v("I'm disabled. You cannot edit me.")]),t._v(" "),a("p",{staticClass:"caption"},[t._v("Readonly State")]),t._v(" "),a("textarea",{attrs:{readonly:""}},[t._v("Read only. Cannot edit.")]),t._v(" "),a("p",{staticClass:"caption"},[t._v("Error State")]),t._v(" "),a("textarea",{staticClass:"has-error"},[t._v("Invalid content here.")]),t._v(" "),a("p",{staticClass:"caption"},[t._v("Inside of a List")]),t._v(" "),t._m(2),t._v(" "),a("p",{staticClass:"caption"},[t._v("Textbox and Textarea with No Borders")]),t._v(" "),a("div",{staticClass:"list"},[a("div",{staticClass:"item multiple-lines item-delimiter"},[a("div",{staticClass:"item-content"},[a("input",{staticClass:"full-width no-border",attrs:{value:"Textbox here with no border and full width."},domProps:{value:"Textbox here with no border and full width."}})])]),t._v(" "),t._m(3)])])])},staticRenderFns:[function(){var t=this,a=(t.$createElement,t._c);return a("div",{staticClass:"stacked-label"},[a("textarea",{staticClass:"full-width"}),t._v(" "),a("label",[t._v("Stacked Label")])])},function(){var t=this,a=(t.$createElement,t._c);return a("div",{staticClass:"floating-label"},[a("textarea",{staticClass:"full-width",attrs:{required:""}}),t._v(" "),a("label",[t._v("Floating Label")])])},function(){var t=this,a=(t.$createElement,t._c);return a("div",{staticClass:"list"},[a("div",{staticClass:"item multiple-lines"},[a("i",{staticClass:"item-primary"},[t._v("edit")]),t._v(" "),a("div",{staticClass:"item-content"},[a("textarea",{staticClass:"full-width"})])]),t._v(" "),a("hr"),t._v(" "),a("div",{staticClass:"item multiple-lines"},[a("i",{staticClass:"item-primary"},[t._v("edit")]),t._v(" "),a("div",{staticClass:"item-content"},[a("div",{staticClass:"item-label",staticStyle:{"margin-right":"10px"}},[t._v("Label:")]),t._v(" "),a("textarea",{staticClass:"full-width"})])]),t._v(" "),a("hr"),t._v(" "),a("div",{staticClass:"item multiple-lines"},[a("i",{staticClass:"item-primary"},[t._v("edit")]),t._v(" "),a("div",{staticClass:"item-content"},[a("div",{staticClass:"stacked-label"},[a("textarea",{staticClass:"full-width"}),t._v(" "),a("label",[t._v("Stacked Label")])])])]),t._v(" "),a("hr"),t._v(" "),a("div",{staticClass:"item multiple-lines"},[a("i",{staticClass:"item-primary"},[t._v("edit")]),t._v(" "),a("div",{staticClass:"item-content"},[a("div",{staticClass:"floating-label"},[a("textarea",{staticClass:"full-width",attrs:{required:""}}),t._v(" "),a("label",[t._v("Floating Label")])])])])])},function(){var t=this,a=(t.$createElement,t._c);return a("div",{staticClass:"item multiple-lines item-delimiter"},[a("div",{staticClass:"item-content"},[a("textarea",{staticClass:"full-width no-border"},[t._v("Textarea here with no border and full width.")])])])}]}}});