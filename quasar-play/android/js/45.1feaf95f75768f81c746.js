webpackJsonp([45,95],{182:function(e,t,l){var s,i;s=l(256);var a=l(424);i=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(i=s=s.default),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,e.exports=s},256:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{select:"fb",multipleSelect:["goog","twtr"],selectOptions:[{label:"Google",value:"goog"},{label:"Facebook",value:"fb"},{label:"Twitter",value:"twtr"},{label:"Apple Inc.",value:"appl"},{label:"Oracle",value:"ora"}]}}}},424:function(e,t){e.exports={render:function(){var e=this,t=(e.$createElement,e._c);return t("div",[t("div",{staticClass:"layout-padding"},[t("p",{staticClass:"caption"},[e._v("With Radios")]),e._v(" "),t("q-select",{directives:[{name:"model",rawName:"v-model",value:e.select,expression:"select"}],attrs:{type:"radio",options:e.selectOptions},domProps:{value:e.select},on:{input:function(t){e.select=t}}}),e._v(" "),t("p",{staticClass:"caption"},[e._v("With List")]),e._v(" "),t("q-select",{directives:[{name:"model",rawName:"v-model",value:e.select,expression:"select"}],attrs:{type:"list",options:e.selectOptions},domProps:{value:e.select},on:{input:function(t){e.select=t}}}),e._v(" "),t("p",{staticClass:"caption"},[e._v("With Checkboxes")]),e._v(" "),t("q-select",{directives:[{name:"model",rawName:"v-model",value:e.multipleSelect,expression:"multipleSelect"}],attrs:{type:"checkbox",options:e.selectOptions},domProps:{value:e.multipleSelect},on:{input:function(t){e.multipleSelect=t}}}),e._v(" "),t("p",{staticClass:"caption"},[e._v("With Toggles")]),e._v(" "),t("q-select",{directives:[{name:"model",rawName:"v-model",value:e.multipleSelect,expression:"multipleSelect"}],attrs:{type:"toggle",options:e.selectOptions},domProps:{value:e.multipleSelect},on:{input:function(t){e.multipleSelect=t}}}),e._v(" "),t("p",{staticClass:"caption"},[e._v("With Label")]),e._v(" "),t("q-select",{directives:[{name:"model",rawName:"v-model",value:e.multipleSelect,expression:"multipleSelect"}],attrs:{type:"checkbox",options:e.selectOptions,label:"Pick Company"},domProps:{value:e.multipleSelect},on:{input:function(t){e.multipleSelect=t}}}),e._v(" "),t("p",{staticClass:"caption"},[e._v("With Placeholder")]),e._v(" "),t("q-select",{directives:[{name:"model",rawName:"v-model",value:e.multipleSelect,expression:"multipleSelect"}],attrs:{type:"checkbox",options:e.selectOptions,placeholder:"Pick Company"},domProps:{value:e.multipleSelect},on:{input:function(t){e.multipleSelect=t}}}),e._v(" "),t("p",{staticClass:"caption"},[e._v("With Static Label")]),e._v(" "),t("q-select",{directives:[{name:"model",rawName:"v-model",value:e.multipleSelect,expression:"multipleSelect"}],attrs:{type:"checkbox",options:e.selectOptions,"static-label":"Company"},domProps:{value:e.multipleSelect},on:{input:function(t){e.multipleSelect=t}}}),e._v(" "),t("p",{staticClass:"caption"},[e._v("Disabled State")]),e._v(" "),t("q-select",{directives:[{name:"model",rawName:"v-model",value:e.select,expression:"select"}],attrs:{disable:"",type:"radio",options:e.selectOptions},domProps:{value:e.select},on:{input:function(t){e.select=t}}}),e._v(" "),t("p",{staticClass:"caption"},[e._v("Readonly State")]),e._v(" "),t("q-select",{directives:[{name:"model",rawName:"v-model",value:e.select,expression:"select"}],attrs:{readonly:"",type:"radio",options:e.selectOptions},domProps:{value:e.select},on:{input:function(t){e.select=t}}}),e._v(" "),t("p",{staticClass:"caption"},[e._v("Error State")]),e._v(" "),t("q-select",{directives:[{name:"model",rawName:"v-model",value:e.select,expression:"select"}],staticClass:"has-error",attrs:{type:"radio",options:e.selectOptions},domProps:{value:e.select},on:{input:function(t){e.select=t}}}),e._v(" "),t("p",{staticClass:"caption"},[e._v("Inside of a List")]),e._v(" "),t("div",{staticClass:"list"},[t("div",{staticClass:"list-label"},[e._v("Single Selection")]),e._v(" "),t("div",{staticClass:"item two-lines"},[t("i",{staticClass:"item-primary"},[e._v("supervisor_account")]),e._v(" "),t("div",{staticClass:"item-content"},[t("q-select",{directives:[{name:"model",rawName:"v-model",value:e.select,expression:"select"}],staticClass:"full-width",attrs:{type:"radio",options:e.selectOptions},domProps:{value:e.select},on:{input:function(t){e.select=t}}})],1)]),e._v(" "),t("hr"),e._v(" "),t("div",{staticClass:"list-label"},[e._v("Multiple Selection")]),e._v(" "),t("div",{staticClass:"item two-lines"},[t("i",{staticClass:"item-primary"},[e._v("supervisor_account")]),e._v(" "),t("div",{staticClass:"item-content"},[t("q-select",{directives:[{name:"model",rawName:"v-model",value:e.multipleSelect,expression:"multipleSelect"}],staticClass:"full-width",attrs:{type:"checkbox",options:e.selectOptions},domProps:{value:e.multipleSelect},on:{input:function(t){e.multipleSelect=t}}})],1)]),e._v(" "),t("div",{staticClass:"item two-lines"},[t("i",{staticClass:"item-primary"},[e._v("supervisor_account")]),e._v(" "),t("div",{staticClass:"item-content"},[t("q-select",{directives:[{name:"model",rawName:"v-model",value:e.multipleSelect,expression:"multipleSelect"}],staticClass:"full-width",attrs:{type:"toggle",options:e.selectOptions},domProps:{value:e.multipleSelect},on:{input:function(t){e.multipleSelect=t}}})],1)])])],1)])},staticRenderFns:[]}}});