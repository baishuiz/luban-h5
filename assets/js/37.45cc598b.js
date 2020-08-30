(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{347:function(t,s,a){"use strict";a.r(s);var n=a(40),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"原理篇-单属性自定义编辑器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原理篇-单属性自定义编辑器","aria-hidden":"true"}},[t._v("#")]),t._v(" 原理篇:单属性自定义编辑器")]),t._v(" "),a("blockquote",[a("p",[t._v("自定义组件/插件/Plugin 原理概览")])]),t._v(" "),a("p",[t._v("通过"),a("code",[t._v("自定义属性编辑器")]),t._v("来配置组件的某些属性的"),a("code",[t._v("复杂编辑需求")])]),t._v(" "),a("p",[t._v("举个例子：图片的 imgSrc 属性，采用自定义编辑器的方法如下，"),a("a",{attrs:{href:"https://user-images.githubusercontent.com/12668546/69001396-6a916500-0918-11ea-8f39-5e27a688d2fe.png",target:"_blank",rel:"noopener noreferrer"}},[t._v("图片演示"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("props"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  imgSrc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" String"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    defualt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    editor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      custom"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果写了 custom: true，则会采用 editor.vue 或者 editor.js 来配置组件的相关属性")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 自定义组件的加载目前在 mini-editor/panel/props.js 的 loadCustomEditorForPlugin 方法中加载并注册")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这样，就可以通过自定义属性编辑器来配置组件的某些复杂属性了")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 图片演示：https://user-images.githubusercontent.com/12668546/69001396-6a916500-0918-11ea-8f39-5e27a688d2fe.png")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ul",[a("li",[a("ol",[a("li",[t._v("从上面来看，其实我们自定义的这个图片选择器，只影响到了 imgSrc 这一个属性")])])]),t._v(" "),a("li",[a("ol",{attrs:{start:"2"}},[a("li",[t._v("其实可以把它抽象出来作为一个组件(比如叫做 "),a("code",[t._v("luban-support-image-gallery")]),t._v("(鲁班辅助支撑组件-图片库))")])])]),t._v(" "),a("li",[a("ol",{attrs:{start:"3"}},[a("li",[t._v("发布到 npm 上，作为全局组件引入即可")])])])]),t._v(" "),a("p",[t._v("简单改造下 imgSrc 的属性配置：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("props"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  imgSrc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" String"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    defualt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    editor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'luban-support-image-gallery'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])},[],!1,null,null,null);s.default=e.exports}}]);