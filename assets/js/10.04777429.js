(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{437:function(e,t,s){var i=s(2),n=s(438).values;i({target:"Object",stat:!0},{values:function(e){return n(e)}})},438:function(e,t,s){var i=s(9),n=s(4),r=s(81),a=s(20),o=n(s(107).f),l=n([].push),p=function(e){return function(t){for(var s,n=a(t),p=r(n),u=p.length,c=0,m=[];u>c;)s=p[c++],i&&!o(n,s)||l(m,e?[s,n[s]]:n[s]);return m}};e.exports={entries:p(!0),values:p(!1)}},471:function(e,t,s){"use strict";s.r(t);var i=s(3),n=(s(37),s(104),s(212),s(42),s(38),s(43),s(8),s(437),s(214),s(215),{name:"set-valid-api-key",props:{libraries:String},data:function(){return{options:{key:"",libraries:"places",installComponents:!0},stateProcess:""}},methods:{setValidKey:function(){this.stateProcess="Procesing, please wait...";var e=Object(i.a)({},this.options);e.libraries=e.libraries.replace(/\s/,""),e.callback="GoogleMapsCallback";var t=Object.keys(e).map((function(t){return encodeURIComponent(t)+"="+encodeURIComponent(e[t])})).join("&"),s="".concat("https://maps.googleapis.com/","maps/api/js?").concat(t),n=document.getElementsByTagName("script"),r=Object.values(n).filter((function(e){return e.src.includes("https://maps.googleapis.com/maps/api/js")}));if(r.length)r[0].src=s;else{var a=document.createElement("script");a.setAttribute("src",s),a.setAttribute("async",""),a.setAttribute("defer",""),document.head.appendChild(a)}this.stateProcess="Gmap is ready :)",this.$emit("is-valid",!0)}},mounted:function(){this.libraries&&(this.options.libraries=this.libraries)}}),r=s(77),a=Object(r.a)(n,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("h3",[e._v("For live examples set a valid gmap api key")]),e._v(" "),s("label",{attrs:{for:"gmap_key"}},[e._v("\n    gmap api key "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.options.key,expression:"options.key"}],attrs:{type:"text",name:"gmap_key",id:"gmap_key"},domProps:{value:e.options.key},on:{keypress:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.setValidKey.apply(null,arguments)},input:function(t){t.target.composing||e.$set(e.options,"key",t.target.value)}}})]),e._v(" "),s("br"),s("br"),e._v(" "),s("label",{attrs:{for:"libraries"}},[e._v("\n    libraries "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.options.libraries,expression:"options.libraries"}],attrs:{type:"text",name:"libraries",id:"libraries"},domProps:{value:e.options.libraries},on:{keypress:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.setValidKey.apply(null,arguments)},input:function(t){t.target.composing||e.$set(e.options,"libraries",t.target.value)}}}),e._v(" "),s("br"),e._v(" "),s("small",[e._v("Eg: places,routes,drawing,visualization depending on your requirements")])]),e._v(" "),s("br"),s("br"),e._v(" "),s("button",{on:{click:e.setValidKey}},[e._v("set gmap key")]),e._v(" "),s("br"),s("br"),e._v(" "),s("p",[e._v(e._s(e.stateProcess))])])}),[],!1,null,null,null);t.default=a.exports}}]);