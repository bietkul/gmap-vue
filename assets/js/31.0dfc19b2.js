(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{465:function(t,n,e){"use strict";e.r(n);var l={name:"eg-polygon-simple",data:function(){return{edited:null,paths:[[{lat:1.38,lng:103.8},{lat:1.38,lng:103.81},{lat:1.39,lng:103.81},{lat:1.39,lng:103.8}],[{lat:1.382,lng:103.802},{lat:1.382,lng:103.808},{lat:1.388,lng:103.808},{lat:1.388,lng:103.802}]]}},methods:{updateEdited:function(t){for(var n=[],e=0;e<t.getLength();e++){for(var l=[],a=0;a<t.getAt(e).getLength();a++){var i=t.getAt(e).getAt(a);l.push({lat:i.lat(),lng:i.lng()})}n.push(l)}this.edited=n}}},a=e(77),i=Object(a.a)(l,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("gmap-map",{staticStyle:{width:"100%",height:"500px"},attrs:{center:{lat:1.38,lng:103.8},zoom:12}},[e("gmap-polygon",{attrs:{paths:t.paths,editable:!0},on:{paths_changed:function(n){return t.updateEdited(n)}}})],1),t._v(" "),t.edited?e("ul",{on:{click:function(n){t.edited=null}}},t._l(t.edited,(function(n){return e("li",[e("ol",t._l(n,(function(n){return e("li",[t._v("\n          "+t._s(n.lat)+", "+t._s(n.lng)+"\n        ")])})),0)])})),0):t._e()],1)}),[],!1,null,"37df008f",null);n.default=i.exports}}]);