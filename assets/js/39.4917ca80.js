(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{476:function(t,a,e){"use strict";e.r(a);var s=e(77),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"gmapvue"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gmapvue"}},[t._v("#")]),t._v(" GmapVue")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://travis-ci.org/diegoazh/gmap-vue",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://travis-ci.org/diegoazh/gmap-vue.svg?branch=master",alt:"Build Status"}}),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://www.jsdelivr.com/package/npm/gmap-vue",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://data.jsdelivr.com/v1/package/npm/gmap-vue/badge",alt:""}}),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"documentation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#documentation"}},[t._v("#")]),t._v(" Documentation")]),t._v(" "),e("p",[t._v("The new documentation page is ready and it contains all examples for any component in the plugin.")]),t._v(" "),e("p",[t._v("You can use your own gmap key in order to test it in the live example section.")]),t._v(" "),e("p",[t._v("We have planed improve and grow all required documentation about the plugin.")]),t._v(" "),e("p",[t._v("Please follow next link to our "),e("a",{attrs:{href:"https://diegoazh.github.io/gmap-vue/",target:"_blank",rel:"noopener noreferrer"}},[t._v("documentation"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("h2",{attrs:{id:"vue-2-port-of-vue-google-maps"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue-2-port-of-vue-google-maps"}},[t._v("#")]),t._v(" Vue-2 port of vue-google-maps")]),t._v(" "),e("p",[t._v("This is a fork of the popular vue2-google-maps. As the author of the library no longer commit to maintain the project, we forked it to develop and maintain the project.")]),t._v(" "),e("h2",{attrs:{id:"contributors-needed"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#contributors-needed"}},[t._v("#")]),t._v(" CONTRIBUTORS NEEDED!")]),t._v(" "),e("p",[t._v("If you have time to contribute to a rather frequently used library, feel free to make a PR!\nFor more background, please refer to "),e("a",{attrs:{href:"https://github.com/xkjyeah/vue-google-maps/issues/514",target:"_blank",rel:"noopener noreferrer"}},[t._v("this issue"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("p",[t._v("What's urgently needed are:")]),t._v(" "),e("ol",[e("li",[t._v("Better automated tests")]),t._v(" "),e("li",[t._v("Better integration tests with the popular frameworks, especially Nuxt and Vue template")]),t._v(" "),e("li",[t._v("~Better documentation (examples, recommendations)~")])]),t._v(" "),e("p",[t._v("The above three will go a long way to keeping the project maintainable and contributable, and will address many of the open issues.")]),t._v(" "),e("h2",{attrs:{id:"braking-changes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#braking-changes"}},[t._v("#")]),t._v(" Braking changes")]),t._v(" "),e("h3",{attrs:{id:"v3-0-0"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#v3-0-0"}},[t._v("#")]),t._v(" v3.0.0")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("autobindAllEvents")]),t._v(" config option was renamed to "),e("code",[t._v("autoBindAllEvents")])]),t._v(" "),e("li",[e("code",[t._v("vueGoogleMapsInit")]),t._v(" name was renamed to "),e("code",[t._v("GoogleMapsCallback")])]),t._v(" "),e("li",[e("code",[t._v("gmapApi")]),t._v(" function was renamed to "),e("code",[t._v("getGoogleMapsAPI")])]),t._v(" "),e("li",[e("code",[t._v("MapElementMixin")]),t._v(" now is exported from "),e("code",[t._v("components")]),t._v(" object instead of "),e("code",[t._v("helpers")]),t._v(" object")]),t._v(" "),e("li",[e("code",[t._v("customCallback")]),t._v(" config option was added to reuse existing Google Maps API that already loaded, eg from an HTML file")])]),t._v(" "),e("h3",{attrs:{id:"v2-0-0"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#v2-0-0"}},[t._v("#")]),t._v(" v2.0.0")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("All components were rewriting in SFC ("),e("code",[t._v(".vue")]),t._v(")")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("MarkerCluster")]),t._v(" was renamed to "),e("code",[t._v("Cluster")])])]),t._v(" "),e("li",[e("p",[e("code",[t._v("@google/markerclustererplus")]),t._v(" was replace for "),e("code",[t._v("@googlemaps/markerclusterer")])])]),t._v(" "),e("li",[e("p",[t._v("The plugin exports two main objects:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("components")]),t._v(": it has all components and mountable mixin)")]),t._v(" "),e("li",[e("code",[t._v("helpers")]),t._v(": it has promise lazy factory function, gmapApi function and map element mixin")])])]),t._v(" "),e("li",[e("p",[t._v("The plugin now exports by default the install function, this means that you can do the following")])]),t._v(" "),e("li",[e("p",[t._v("From "),e("strong",[t._v("v2.0.0")]),t._v(" and above, the "),e("code",[t._v("autocomplete")]),t._v(" component uses the "),e("code",[t._v("default")]),t._v(" slot instead of the named "),e("code",[t._v("input")]),t._v(" slot, from v1.5.0 the "),e("code",[t._v("input")]),t._v(" slot on the autocomplete component still works.")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" GmapVue "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'gmap-vue'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("instead of")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" GmapVue "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'gmap-vue'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])]),t._v(" "),e("h2",{attrs:{id:"installation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),e("h3",{attrs:{id:"npm"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#npm"}},[t._v("#")]),t._v(" npm")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" gmap-vue --save\n")])])]),e("h3",{attrs:{id:"yarn"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#yarn"}},[t._v("#")]),t._v(" yarn")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" gmap-vue\n")])])]),e("h3",{attrs:{id:"manually"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#manually"}},[t._v("#")]),t._v(" Manually")]),t._v(" "),e("p",[t._v("Just download "),e("code",[t._v("dist/gmap-vue.js")]),t._v(" file and include it from your HTML.")]),t._v(" "),e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("./gmap-vue.js"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token script"}}),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("h3",{attrs:{id:"jsdelivr"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jsdelivr"}},[t._v("#")]),t._v(" jsdelivr")]),t._v(" "),e("p",[t._v("You can use a free CDN like "),e("a",{attrs:{href:"https://www.jsdelivr.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("jsdelivr"),e("OutboundLink")],1),t._v(" to include this plugin in your html file")]),t._v(" "),e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://cdn.jsdelivr.net/npm/gmap-vue@1.2.2/dist/gmap-vue.min.js"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token script"}}),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("h3",{attrs:{id:"unpkg"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#unpkg"}},[t._v("#")]),t._v(" unpkg")]),t._v(" "),e("p",[t._v("You can use a free CDN like "),e("a",{attrs:{href:"https://unpkg.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("unpkg"),e("OutboundLink")],1),t._v(" to include this plugin in your html file")]),t._v(" "),e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://unpkg.com/gmap-vue@1.2.2/dist/gmap-vue.js"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token script"}}),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[t._v("Be aware that if you use this method, you cannot use TitleCase for your components and your attributes.\nThat is, instead of writing "),e("code",[t._v("<GmapMap>")]),t._v(", you need to write "),e("code",[t._v("<gmap-map>")]),t._v(".")])]),t._v(" "),e("p",[e("a",{attrs:{href:"https://diegoazh.github.io/gmap-vue/guide/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Live example"),e("OutboundLink")],1),t._v(".")])])}),[],!1,null,null,null);a.default=n.exports}}]);