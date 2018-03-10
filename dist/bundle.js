!function(e,t){for(var n in t)e[n]=t[n]}(exports,function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=7)}([function(e,t,n){var r=n(4);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(2)(r,o);r.locals&&(e.exports=r.locals)},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o,a=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(a)?e:(o=0===a.indexOf("//")?a:0===a.indexOf("/")?n+a:r+a.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(e,t,n){var r,o,a={},i=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),s=function(e){var t={};return function(e){if("function"==typeof e)return e();if(void 0===t[e]){var n=function(e){return document.querySelector(e)}.call(this,e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}}(),c=null,l=0,u=[],f=n(1);function p(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=a[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(g(r.parts[i],t))}else{var s=[];for(i=0;i<r.parts.length;i++)s.push(g(r.parts[i],t));a[r.id]={id:r.id,refs:1,parts:s}}}}function d(e,t){for(var n=[],r={},o=0;o<e.length;o++){var a=e[o],i=t.base?a[0]+t.base:a[0],s={css:a[1],media:a[2],sourceMap:a[3]};r[i]?r[i].parts.push(s):n.push(r[i]={id:i,parts:[s]})}return n}function m(e,t){var n=s(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=u[u.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),u.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=s(e.insertInto+" "+e.insertAt.before);n.insertBefore(t,o)}}function b(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=u.indexOf(e);t>=0&&u.splice(t,1)}function h(e){var t=document.createElement("style");return e.attrs.type="text/css",v(t,e.attrs),m(e,t),t}function v(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function g(e,t){var n,r,o,a;if(t.transform&&e.css){if(!(a=t.transform(e.css)))return function(){};e.css=a}if(t.singleton){var i=l++;n=c||(c=h(t)),r=y.bind(null,n,i,!1),o=y.bind(null,n,i,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",v(t,e.attrs),m(e,t),t}(t),r=function(e,t,n){var r=n.css,o=n.sourceMap,a=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||a)&&(r=f(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var i=new Blob([r],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(i),s&&URL.revokeObjectURL(s)}.bind(null,n,t),o=function(){b(n),n.href&&URL.revokeObjectURL(n.href)}):(n=h(t),r=function(e,t){var n=t.css,r=t.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){b(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=i()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=d(e,t);return p(n,t),function(e){for(var r=[],o=0;o<n.length;o++){var i=n[o];(s=a[i.id]).refs--,r.push(s)}e&&p(d(e,t),t);for(o=0;o<r.length;o++){var s;if(0===(s=r[o]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete a[s.id]}}}};var _,x=(_=[],function(e,t){return _[e]=t,_.filter(Boolean).join("\n")});function y(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=x(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(i=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),a=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(a).concat([o]).join("\n")}var i;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var a=this[o][0];"number"==typeof a&&(r[a]=!0)}for(o=0;o<e.length;o++){var i=e[o];"number"==typeof i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),t.push(i))}},t}},function(e,t,n){(t=e.exports=n(3)(!1)).push([e.i,"._3JhK_RoJdB2b1LRW_Kb70L {\n  background: url(http://demo.shapedtheme.com/kotha-pro-html/assets/images/about-me-bg.jpg) no-repeat;\n  -webkit-background-size: 100%;\n  background-size: 100%;\n  background-color: #fff;\n  background-color: #fff;\n  padding: 35px 30px;\n  margin-bottom: 40px;\n  -webkit-box-shadow: 0 0 2px 0 rgba(51, 51, 51, 0.08), 0 0 2px 0 rgba(51, 51, 51, 0.08);\n  box-shadow: 0 0 2px 0 rgba(51, 51, 51, 0.08), 0 0 2px 0 rgba(51, 51, 51, 0.08);\n}\n\n._3JhK_RoJdB2b1LRW_Kb70L>div._30s-79_a7SMPn7kK0B_mH2 {\n  padding-bottom: 13px;\n}\n\n._3JhK_RoJdB2b1LRW_Kb70L>div._30s-79_a7SMPn7kK0B_mH2>div {\n  padding-top: 8%;\n}\n\n._3JhK_RoJdB2b1LRW_Kb70L>div._30s-79_a7SMPn7kK0B_mH2>div>img {\n  display: inline-block;\n  border: 7px solid #fff;\n  border-radius: 50%;\n  margin-top: 40px;\n}\n\n._3JhK_RoJdB2b1LRW_Kb70L>div._30s-79_a7SMPn7kK0B_mH2>div>h2 {\n  margin-top: 12px;\n  margin-bottom: 22px;\n  color: #444;\n  font-size: 18px;\n  letter-spacing: 0.5px;\n  font-weight: bold;\n}\n\n._3JhK_RoJdB2b1LRW_Kb70L>div._30s-79_a7SMPn7kK0B_mH2>div>p {\n  font-size: 15px;\n  line-height: 25px;\n  padding-top: 0;\n  margin-top: 0;\n}\n\n._3JhK_RoJdB2b1LRW_Kb70L>div._1FeQSqLeU9uPp-seriqqU ul li {\n  padding: 0px;\n}\n\n._3JhK_RoJdB2b1LRW_Kb70L>div._1FeQSqLeU9uPp-seriqqU ul li>a {\n  display: inline-block;\n  border: 1px solid #e2e2e2;\n  color: #aaaaaa;\n  font-size: 13px;\n  height: 30px;\n  width: 30px;\n  border-radius: 50%;\n  line-height: 28px;\n  margin-right: 6px;\n}\n\n._3JhK_RoJdB2b1LRW_Kb70L>div._1FeQSqLeU9uPp-seriqqU ul li>a:hover {\n  background: #da521e;\n  border-color: #da521e;\n  color: #fff;\n}",""]),t.locals={aboutme:"_3JhK_RoJdB2b1LRW_Kb70L",content:"_30s-79_a7SMPn7kK0B_mH2",footerShared:"_1FeQSqLeU9uPp-seriqqU"}},function(e,t){e.exports=require("react")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(5);n(0);const o=n(0);t.AboutMeComponent=(e=>r.createElement("aside",{className:`${o.aboutme} widget about-me-widget  text-center`},r.createElement("div",{className:o.content},r.createElement("div",null,r.createElement("img",{src:e.img,alt:"",className:"img-me img-circle"}),r.createElement("h2",{className:"text-uppercase"},e.textUppercase),r.createElement("p",null,e.content))),r.createElement("div",{className:o.footerShared},r.createElement("ul",{className:"list-inline"},r.createElement("li",null,r.createElement("a",{className:"s-facebook",href:""},r.createElement("i",{className:"fa fa-facebook"}))),r.createElement("li",null,r.createElement("a",{className:"s-twitter",href:""},r.createElement("i",{className:"fa fa-twitter"}))),r.createElement("li",null,r.createElement("a",{className:"s-google-plus",href:""},r.createElement("i",{className:"fa fa-google-plus"}))),r.createElement("li",null,r.createElement("a",{className:"s-linkedin",href:""},r.createElement("i",{className:"fa fa-linkedin"}))),r.createElement("li",null,r.createElement("a",{className:"s-instagram",href:""},r.createElement("i",{className:"fa fa-instagram"})))))))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}(n(6))}]));
//# sourceMappingURL=bundle.js.map