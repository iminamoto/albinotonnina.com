/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return waitForWebfonts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return setAttributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isMobile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createElementWithAttrs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return shouldFallbackToBoringCV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return onBeforePrint; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_webfontloader__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_webfontloader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_webfontloader__);


var waitForWebfonts = function waitForWebfonts(fonts, callback) {
  __WEBPACK_IMPORTED_MODULE_0_webfontloader___default.a.load({
    google: {
      families: fonts
    },
    active: callback
  });
};

var setAttributes = function setAttributes(el, attrs) {
  for (var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
};

var isMobile = function isMobile() {
  return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
  );
};

var createElementWithAttrs = function createElementWithAttrs(tagName, attrs) {
  var el = document.createElement(tagName);
  setAttributes(el, attrs);
  return el;
};

var shouldFallbackToBoringCV = function shouldFallbackToBoringCV() {
  var maxHeight = 768 / 1024 * window.innerWidth;
  return window.innerHeight > maxHeight;
};

var onBeforePrint = function onBeforePrint(callback) {
  if ('matchMedia' in window) {
    // Chrome, Firefox, and IE 10 support mediaMatch listeners
    window.matchMedia('print').addListener(function (media) {
      if (media.matches) {
        callback();
      }
    });
  } else {
    // IE and Firefox fire before/after events
    window.onbeforeprint = callback;
  }
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "d66b2db7584fb99ed7a76848f8a217f7.png";

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 2017 Julian Garnier
 Released under the MIT license
*/
var $jscomp={scope:{}};$jscomp.defineProperty="function"==typeof Object.defineProperties?Object.defineProperty:function(e,r,p){if(p.get||p.set)throw new TypeError("ES3 does not support getters and setters.");e!=Array.prototype&&e!=Object.prototype&&(e[r]=p.value)};$jscomp.getGlobal=function(e){return"undefined"!=typeof window&&window===e?e:"undefined"!=typeof global&&null!=global?global:e};$jscomp.global=$jscomp.getGlobal(this);$jscomp.SYMBOL_PREFIX="jscomp_symbol_";
$jscomp.initSymbol=function(){$jscomp.initSymbol=function(){};$jscomp.global.Symbol||($jscomp.global.Symbol=$jscomp.Symbol)};$jscomp.symbolCounter_=0;$jscomp.Symbol=function(e){return $jscomp.SYMBOL_PREFIX+(e||"")+$jscomp.symbolCounter_++};
$jscomp.initSymbolIterator=function(){$jscomp.initSymbol();var e=$jscomp.global.Symbol.iterator;e||(e=$jscomp.global.Symbol.iterator=$jscomp.global.Symbol("iterator"));"function"!=typeof Array.prototype[e]&&$jscomp.defineProperty(Array.prototype,e,{configurable:!0,writable:!0,value:function(){return $jscomp.arrayIterator(this)}});$jscomp.initSymbolIterator=function(){}};$jscomp.arrayIterator=function(e){var r=0;return $jscomp.iteratorPrototype(function(){return r<e.length?{done:!1,value:e[r++]}:{done:!0}})};
$jscomp.iteratorPrototype=function(e){$jscomp.initSymbolIterator();e={next:e};e[$jscomp.global.Symbol.iterator]=function(){return this};return e};$jscomp.array=$jscomp.array||{};$jscomp.iteratorFromArray=function(e,r){$jscomp.initSymbolIterator();e instanceof String&&(e+="");var p=0,m={next:function(){if(p<e.length){var u=p++;return{value:r(u,e[u]),done:!1}}m.next=function(){return{done:!0,value:void 0}};return m.next()}};m[Symbol.iterator]=function(){return m};return m};
$jscomp.polyfill=function(e,r,p,m){if(r){p=$jscomp.global;e=e.split(".");for(m=0;m<e.length-1;m++){var u=e[m];u in p||(p[u]={});p=p[u]}e=e[e.length-1];m=p[e];r=r(m);r!=m&&null!=r&&$jscomp.defineProperty(p,e,{configurable:!0,writable:!0,value:r})}};$jscomp.polyfill("Array.prototype.keys",function(e){return e?e:function(){return $jscomp.iteratorFromArray(this,function(e){return e})}},"es6-impl","es3");var $jscomp$this=this;
(function(e,r){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (r),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):"object"===typeof module&&module.exports?module.exports=r():e.anime=r()})(this,function(){function e(a){if(!h.col(a))try{return document.querySelectorAll(a)}catch(c){}}function r(a,c){for(var d=a.length,b=2<=arguments.length?arguments[1]:void 0,f=[],n=0;n<d;n++)if(n in a){var k=a[n];c.call(b,k,n,a)&&f.push(k)}return f}function p(a){return a.reduce(function(a,d){return a.concat(h.arr(d)?p(d):d)},[])}function m(a){if(h.arr(a))return a;
h.str(a)&&(a=e(a)||a);return a instanceof NodeList||a instanceof HTMLCollection?[].slice.call(a):[a]}function u(a,c){return a.some(function(a){return a===c})}function C(a){var c={},d;for(d in a)c[d]=a[d];return c}function D(a,c){var d=C(a),b;for(b in a)d[b]=c.hasOwnProperty(b)?c[b]:a[b];return d}function z(a,c){var d=C(a),b;for(b in c)d[b]=h.und(a[b])?c[b]:a[b];return d}function T(a){a=a.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(a,c,d,k){return c+c+d+d+k+k});var c=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);
a=parseInt(c[1],16);var d=parseInt(c[2],16),c=parseInt(c[3],16);return"rgba("+a+","+d+","+c+",1)"}function U(a){function c(a,c,b){0>b&&(b+=1);1<b&&--b;return b<1/6?a+6*(c-a)*b:.5>b?c:b<2/3?a+(c-a)*(2/3-b)*6:a}var d=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(a)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(a);a=parseInt(d[1])/360;var b=parseInt(d[2])/100,f=parseInt(d[3])/100,d=d[4]||1;if(0==b)f=b=a=f;else{var n=.5>f?f*(1+b):f+b-f*b,k=2*f-n,f=c(k,n,a+1/3),b=c(k,n,a);a=c(k,n,a-1/3)}return"rgba("+
255*f+","+255*b+","+255*a+","+d+")"}function y(a){if(a=/([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(a))return a[2]}function V(a){if(-1<a.indexOf("translate")||"perspective"===a)return"px";if(-1<a.indexOf("rotate")||-1<a.indexOf("skew"))return"deg"}function I(a,c){return h.fnc(a)?a(c.target,c.id,c.total):a}function E(a,c){if(c in a.style)return getComputedStyle(a).getPropertyValue(c.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase())||"0"}function J(a,c){if(h.dom(a)&&
u(W,c))return"transform";if(h.dom(a)&&(a.getAttribute(c)||h.svg(a)&&a[c]))return"attribute";if(h.dom(a)&&"transform"!==c&&E(a,c))return"css";if(null!=a[c])return"object"}function X(a,c){var d=V(c),d=-1<c.indexOf("scale")?1:0+d;a=a.style.transform;if(!a)return d;for(var b=[],f=[],n=[],k=/(\w+)\((.+?)\)/g;b=k.exec(a);)f.push(b[1]),n.push(b[2]);a=r(n,function(a,b){return f[b]===c});return a.length?a[0]:d}function K(a,c){switch(J(a,c)){case "transform":return X(a,c);case "css":return E(a,c);case "attribute":return a.getAttribute(c)}return a[c]||
0}function L(a,c){var d=/^(\*=|\+=|-=)/.exec(a);if(!d)return a;var b=y(a)||0;c=parseFloat(c);a=parseFloat(a.replace(d[0],""));switch(d[0][0]){case "+":return c+a+b;case "-":return c-a+b;case "*":return c*a+b}}function F(a,c){return Math.sqrt(Math.pow(c.x-a.x,2)+Math.pow(c.y-a.y,2))}function M(a){a=a.points;for(var c=0,d,b=0;b<a.numberOfItems;b++){var f=a.getItem(b);0<b&&(c+=F(d,f));d=f}return c}function N(a){if(a.getTotalLength)return a.getTotalLength();switch(a.tagName.toLowerCase()){case "circle":return 2*
Math.PI*a.getAttribute("r");case "rect":return 2*a.getAttribute("width")+2*a.getAttribute("height");case "line":return F({x:a.getAttribute("x1"),y:a.getAttribute("y1")},{x:a.getAttribute("x2"),y:a.getAttribute("y2")});case "polyline":return M(a);case "polygon":var c=a.points;return M(a)+F(c.getItem(c.numberOfItems-1),c.getItem(0))}}function Y(a,c){function d(b){b=void 0===b?0:b;return a.el.getPointAtLength(1<=c+b?c+b:0)}var b=d(),f=d(-1),n=d(1);switch(a.property){case "x":return b.x;case "y":return b.y;
case "angle":return 180*Math.atan2(n.y-f.y,n.x-f.x)/Math.PI}}function O(a,c){var d=/-?\d*\.?\d+/g,b;b=h.pth(a)?a.totalLength:a;if(h.col(b))if(h.rgb(b)){var f=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(b);b=f?"rgba("+f[1]+",1)":b}else b=h.hex(b)?T(b):h.hsl(b)?U(b):void 0;else f=(f=y(b))?b.substr(0,b.length-f.length):b,b=c&&!/\s/g.test(b)?f+c:f;b+="";return{original:b,numbers:b.match(d)?b.match(d).map(Number):[0],strings:h.str(a)||c?b.split(d):[]}}function P(a){a=a?p(h.arr(a)?a.map(m):m(a)):[];return r(a,
function(a,d,b){return b.indexOf(a)===d})}function Z(a){var c=P(a);return c.map(function(a,b){return{target:a,id:b,total:c.length}})}function aa(a,c){var d=C(c);if(h.arr(a)){var b=a.length;2!==b||h.obj(a[0])?h.fnc(c.duration)||(d.duration=c.duration/b):a={value:a}}return m(a).map(function(a,b){b=b?0:c.delay;a=h.obj(a)&&!h.pth(a)?a:{value:a};h.und(a.delay)&&(a.delay=b);return a}).map(function(a){return z(a,d)})}function ba(a,c){var d={},b;for(b in a){var f=I(a[b],c);h.arr(f)&&(f=f.map(function(a){return I(a,
c)}),1===f.length&&(f=f[0]));d[b]=f}d.duration=parseFloat(d.duration);d.delay=parseFloat(d.delay);return d}function ca(a){return h.arr(a)?A.apply(this,a):Q[a]}function da(a,c){var d;return a.tweens.map(function(b){b=ba(b,c);var f=b.value,e=K(c.target,a.name),k=d?d.to.original:e,k=h.arr(f)?f[0]:k,w=L(h.arr(f)?f[1]:f,k),e=y(w)||y(k)||y(e);b.from=O(k,e);b.to=O(w,e);b.start=d?d.end:a.offset;b.end=b.start+b.delay+b.duration;b.easing=ca(b.easing);b.elasticity=(1E3-Math.min(Math.max(b.elasticity,1),999))/
1E3;b.isPath=h.pth(f);b.isColor=h.col(b.from.original);b.isColor&&(b.round=1);return d=b})}function ea(a,c){return r(p(a.map(function(a){return c.map(function(b){var c=J(a.target,b.name);if(c){var d=da(b,a);b={type:c,property:b.name,animatable:a,tweens:d,duration:d[d.length-1].end,delay:d[0].delay}}else b=void 0;return b})})),function(a){return!h.und(a)})}function R(a,c,d,b){var f="delay"===a;return c.length?(f?Math.min:Math.max).apply(Math,c.map(function(b){return b[a]})):f?b.delay:d.offset+b.delay+
b.duration}function fa(a){var c=D(ga,a),d=D(S,a),b=Z(a.targets),f=[],e=z(c,d),k;for(k in a)e.hasOwnProperty(k)||"targets"===k||f.push({name:k,offset:e.offset,tweens:aa(a[k],d)});a=ea(b,f);return z(c,{children:[],animatables:b,animations:a,duration:R("duration",a,c,d),delay:R("delay",a,c,d)})}function q(a){function c(){return window.Promise&&new Promise(function(a){return p=a})}function d(a){return g.reversed?g.duration-a:a}function b(a){for(var b=0,c={},d=g.animations,f=d.length;b<f;){var e=d[b],
k=e.animatable,h=e.tweens,n=h.length-1,l=h[n];n&&(l=r(h,function(b){return a<b.end})[0]||l);for(var h=Math.min(Math.max(a-l.start-l.delay,0),l.duration)/l.duration,w=isNaN(h)?1:l.easing(h,l.elasticity),h=l.to.strings,p=l.round,n=[],m=void 0,m=l.to.numbers.length,t=0;t<m;t++){var x=void 0,x=l.to.numbers[t],q=l.from.numbers[t],x=l.isPath?Y(l.value,w*x):q+w*(x-q);p&&(l.isColor&&2<t||(x=Math.round(x*p)/p));n.push(x)}if(l=h.length)for(m=h[0],w=0;w<l;w++)p=h[w+1],t=n[w],isNaN(t)||(m=p?m+(t+p):m+(t+" "));
else m=n[0];ha[e.type](k.target,e.property,m,c,k.id);e.currentValue=m;b++}if(b=Object.keys(c).length)for(d=0;d<b;d++)H||(H=E(document.body,"transform")?"transform":"-webkit-transform"),g.animatables[d].target.style[H]=c[d].join(" ");g.currentTime=a;g.progress=a/g.duration*100}function f(a){if(g[a])g[a](g)}function e(){g.remaining&&!0!==g.remaining&&g.remaining--}function k(a){var k=g.duration,n=g.offset,w=n+g.delay,r=g.currentTime,x=g.reversed,q=d(a);if(g.children.length){var u=g.children,v=u.length;
if(q>=g.currentTime)for(var G=0;G<v;G++)u[G].seek(q);else for(;v--;)u[v].seek(q)}if(q>=w||!k)g.began||(g.began=!0,f("begin")),f("run");if(q>n&&q<k)b(q);else if(q<=n&&0!==r&&(b(0),x&&e()),q>=k&&r!==k||!k)b(k),x||e();f("update");a>=k&&(g.remaining?(t=h,"alternate"===g.direction&&(g.reversed=!g.reversed)):(g.pause(),g.completed||(g.completed=!0,f("complete"),"Promise"in window&&(p(),m=c()))),l=0)}a=void 0===a?{}:a;var h,t,l=0,p=null,m=c(),g=fa(a);g.reset=function(){var a=g.direction,c=g.loop;g.currentTime=
0;g.progress=0;g.paused=!0;g.began=!1;g.completed=!1;g.reversed="reverse"===a;g.remaining="alternate"===a&&1===c?2:c;b(0);for(a=g.children.length;a--;)g.children[a].reset()};g.tick=function(a){h=a;t||(t=h);k((l+h-t)*q.speed)};g.seek=function(a){k(d(a))};g.pause=function(){var a=v.indexOf(g);-1<a&&v.splice(a,1);g.paused=!0};g.play=function(){g.paused&&(g.paused=!1,t=0,l=d(g.currentTime),v.push(g),B||ia())};g.reverse=function(){g.reversed=!g.reversed;t=0;l=d(g.currentTime)};g.restart=function(){g.pause();
g.reset();g.play()};g.finished=m;g.reset();g.autoplay&&g.play();return g}var ga={update:void 0,begin:void 0,run:void 0,complete:void 0,loop:1,direction:"normal",autoplay:!0,offset:0},S={duration:1E3,delay:0,easing:"easeOutElastic",elasticity:500,round:0},W="translateX translateY translateZ rotate rotateX rotateY rotateZ scale scaleX scaleY scaleZ skewX skewY perspective".split(" "),H,h={arr:function(a){return Array.isArray(a)},obj:function(a){return-1<Object.prototype.toString.call(a).indexOf("Object")},
pth:function(a){return h.obj(a)&&a.hasOwnProperty("totalLength")},svg:function(a){return a instanceof SVGElement},dom:function(a){return a.nodeType||h.svg(a)},str:function(a){return"string"===typeof a},fnc:function(a){return"function"===typeof a},und:function(a){return"undefined"===typeof a},hex:function(a){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a)},rgb:function(a){return/^rgb/.test(a)},hsl:function(a){return/^hsl/.test(a)},col:function(a){return h.hex(a)||h.rgb(a)||h.hsl(a)}},A=function(){function a(a,
d,b){return(((1-3*b+3*d)*a+(3*b-6*d))*a+3*d)*a}return function(c,d,b,f){if(0<=c&&1>=c&&0<=b&&1>=b){var e=new Float32Array(11);if(c!==d||b!==f)for(var k=0;11>k;++k)e[k]=a(.1*k,c,b);return function(k){if(c===d&&b===f)return k;if(0===k)return 0;if(1===k)return 1;for(var h=0,l=1;10!==l&&e[l]<=k;++l)h+=.1;--l;var l=h+(k-e[l])/(e[l+1]-e[l])*.1,n=3*(1-3*b+3*c)*l*l+2*(3*b-6*c)*l+3*c;if(.001<=n){for(h=0;4>h;++h){n=3*(1-3*b+3*c)*l*l+2*(3*b-6*c)*l+3*c;if(0===n)break;var m=a(l,c,b)-k,l=l-m/n}k=l}else if(0===
n)k=l;else{var l=h,h=h+.1,g=0;do m=l+(h-l)/2,n=a(m,c,b)-k,0<n?h=m:l=m;while(1e-7<Math.abs(n)&&10>++g);k=m}return a(k,d,f)}}}}(),Q=function(){function a(a,b){return 0===a||1===a?a:-Math.pow(2,10*(a-1))*Math.sin(2*(a-1-b/(2*Math.PI)*Math.asin(1))*Math.PI/b)}var c="Quad Cubic Quart Quint Sine Expo Circ Back Elastic".split(" "),d={In:[[.55,.085,.68,.53],[.55,.055,.675,.19],[.895,.03,.685,.22],[.755,.05,.855,.06],[.47,0,.745,.715],[.95,.05,.795,.035],[.6,.04,.98,.335],[.6,-.28,.735,.045],a],Out:[[.25,
.46,.45,.94],[.215,.61,.355,1],[.165,.84,.44,1],[.23,1,.32,1],[.39,.575,.565,1],[.19,1,.22,1],[.075,.82,.165,1],[.175,.885,.32,1.275],function(b,c){return 1-a(1-b,c)}],InOut:[[.455,.03,.515,.955],[.645,.045,.355,1],[.77,0,.175,1],[.86,0,.07,1],[.445,.05,.55,.95],[1,0,0,1],[.785,.135,.15,.86],[.68,-.55,.265,1.55],function(b,c){return.5>b?a(2*b,c)/2:1-a(-2*b+2,c)/2}]},b={linear:A(.25,.25,.75,.75)},f={},e;for(e in d)f.type=e,d[f.type].forEach(function(a){return function(d,f){b["ease"+a.type+c[f]]=h.fnc(d)?
d:A.apply($jscomp$this,d)}}(f)),f={type:f.type};return b}(),ha={css:function(a,c,d){return a.style[c]=d},attribute:function(a,c,d){return a.setAttribute(c,d)},object:function(a,c,d){return a[c]=d},transform:function(a,c,d,b,f){b[f]||(b[f]=[]);b[f].push(c+"("+d+")")}},v=[],B=0,ia=function(){function a(){B=requestAnimationFrame(c)}function c(c){var b=v.length;if(b){for(var d=0;d<b;)v[d]&&v[d].tick(c),d++;a()}else cancelAnimationFrame(B),B=0}return a}();q.version="2.2.0";q.speed=1;q.running=v;q.remove=
function(a){a=P(a);for(var c=v.length;c--;)for(var d=v[c],b=d.animations,f=b.length;f--;)u(a,b[f].animatable.target)&&(b.splice(f,1),b.length||d.pause())};q.getValue=K;q.path=function(a,c){var d=h.str(a)?e(a)[0]:a,b=c||100;return function(a){return{el:d,property:a,totalLength:N(d)*(b/100)}}};q.setDashoffset=function(a){var c=N(a);a.setAttribute("stroke-dasharray",c);return c};q.bezier=A;q.easings=Q;q.timeline=function(a){var c=q(a);c.pause();c.duration=0;c.add=function(d){c.children.forEach(function(a){a.began=
!0;a.completed=!0});m(d).forEach(function(b){var d=z(b,D(S,a||{}));d.targets=d.targets||a.targets;b=c.duration;var e=d.offset;d.autoplay=!1;d.direction=c.direction;d.offset=h.und(e)?b:L(e,b);c.began=!0;c.completed=!0;c.seek(d.offset);d=q(d);d.began=!0;d.completed=!0;d.duration>b&&(c.duration=d.duration);c.children.push(d)});c.seek(0);c.reset();c.autoplay&&c.restart();return c};return c};q.random=function(a,c){return Math.floor(Math.random()*(c-a+1))+a};return q});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 3 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var throttle = __webpack_require__(5);
var debounce = __webpack_require__(43);

module.exports = {
	throttle: throttle,
	debounce: debounce
};


/***/ }),
/* 5 */
/***/ (function(module, exports) {

/* eslint-disable no-undefined,no-param-reassign,no-shadow */

/**
 * Throttle execution of a function. Especially useful for rate limiting
 * execution of handlers on events like resize and scroll.
 *
 * @param  {Number}    delay          A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
 * @param  {Boolean}   [noTrailing]   Optional, defaults to false. If noTrailing is true, callback will only execute every `delay` milliseconds while the
 *                                    throttled-function is being called. If noTrailing is false or unspecified, callback will be executed one final time
 *                                    after the last throttled-function call. (After the throttled-function has not been called for `delay` milliseconds,
 *                                    the internal counter is reset)
 * @param  {Function}  callback       A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
 *                                    to `callback` when the throttled-function is executed.
 * @param  {Boolean}   [debounceMode] If `debounceMode` is true (at begin), schedule `clear` to execute after `delay` ms. If `debounceMode` is false (at end),
 *                                    schedule `callback` to execute after `delay` ms.
 *
 * @return {Function}  A new, throttled, function.
 */
module.exports = function ( delay, noTrailing, callback, debounceMode ) {

	// After wrapper has stopped being called, this timeout ensures that
	// `callback` is executed at the proper times in `throttle` and `end`
	// debounce modes.
	var timeoutID;

	// Keep track of the last time `callback` was executed.
	var lastExec = 0;

	// `noTrailing` defaults to falsy.
	if ( typeof noTrailing !== 'boolean' ) {
		debounceMode = callback;
		callback = noTrailing;
		noTrailing = undefined;
	}

	// The `wrapper` function encapsulates all of the throttling / debouncing
	// functionality and when executed will limit the rate at which `callback`
	// is executed.
	function wrapper () {

		var self = this;
		var elapsed = Number(new Date()) - lastExec;
		var args = arguments;

		// Execute `callback` and update the `lastExec` timestamp.
		function exec () {
			lastExec = Number(new Date());
			callback.apply(self, args);
		}

		// If `debounceMode` is true (at begin) this is used to clear the flag
		// to allow future `callback` executions.
		function clear () {
			timeoutID = undefined;
		}

		if ( debounceMode && !timeoutID ) {
			// Since `wrapper` is being called for the first time and
			// `debounceMode` is true (at begin), execute `callback`.
			exec();
		}

		// Clear any existing timeout.
		if ( timeoutID ) {
			clearTimeout(timeoutID);
		}

		if ( debounceMode === undefined && elapsed > delay ) {
			// In throttle mode, if `delay` time has been exceeded, execute
			// `callback`.
			exec();

		} else if ( noTrailing !== true ) {
			// In trailing throttle mode, since `delay` time has not been
			// exceeded, schedule `callback` to execute `delay` ms after most
			// recent execution.
			//
			// If `debounceMode` is true (at begin), schedule `clear` to execute
			// after `delay` ms.
			//
			// If `debounceMode` is false (at end), schedule `callback` to
			// execute after `delay` ms.
			timeoutID = setTimeout(debounceMode ? clear : exec, debounceMode === undefined ? delay - elapsed : delay);
		}

	}

	// Return the wrapper function.
	return wrapper;

};


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scripts_utilities__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scripts_Site__ = __webpack_require__(8);



var onLoad = function onLoad() {
  var site = new __WEBPACK_IMPORTED_MODULE_1__scripts_Site__["a" /* default */]();
  site.initDivertissement();
};

window.onload = Object(__WEBPACK_IMPORTED_MODULE_0__scripts_utilities__["f" /* waitForWebfonts */])(['Roboto:400,100,300,700,900'], onLoad);

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/* Web Font Loader v1.6.28 - (c) Adobe Systems, Google. License: Apache 2.0 */(function(){function aa(a,b,c){return a.call.apply(a.bind,arguments)}function ba(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function p(a,b,c){p=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?aa:ba;return p.apply(null,arguments)}var q=Date.now||function(){return+new Date};function ca(a,b){this.a=a;this.o=b||a;this.c=this.o.document}var da=!!window.FontFace;function t(a,b,c,d){b=a.c.createElement(b);if(c)for(var e in c)c.hasOwnProperty(e)&&("style"==e?b.style.cssText=c[e]:b.setAttribute(e,c[e]));d&&b.appendChild(a.c.createTextNode(d));return b}function u(a,b,c){a=a.c.getElementsByTagName(b)[0];a||(a=document.documentElement);a.insertBefore(c,a.lastChild)}function v(a){a.parentNode&&a.parentNode.removeChild(a)}
function w(a,b,c){b=b||[];c=c||[];for(var d=a.className.split(/\s+/),e=0;e<b.length;e+=1){for(var f=!1,g=0;g<d.length;g+=1)if(b[e]===d[g]){f=!0;break}f||d.push(b[e])}b=[];for(e=0;e<d.length;e+=1){f=!1;for(g=0;g<c.length;g+=1)if(d[e]===c[g]){f=!0;break}f||b.push(d[e])}a.className=b.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function y(a,b){for(var c=a.className.split(/\s+/),d=0,e=c.length;d<e;d++)if(c[d]==b)return!0;return!1}
function ea(a){return a.o.location.hostname||a.a.location.hostname}function z(a,b,c){function d(){m&&e&&f&&(m(g),m=null)}b=t(a,"link",{rel:"stylesheet",href:b,media:"all"});var e=!1,f=!0,g=null,m=c||null;da?(b.onload=function(){e=!0;d()},b.onerror=function(){e=!0;g=Error("Stylesheet failed to load");d()}):setTimeout(function(){e=!0;d()},0);u(a,"head",b)}
function A(a,b,c,d){var e=a.c.getElementsByTagName("head")[0];if(e){var f=t(a,"script",{src:b}),g=!1;f.onload=f.onreadystatechange=function(){g||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(g=!0,c&&c(null),f.onload=f.onreadystatechange=null,"HEAD"==f.parentNode.tagName&&e.removeChild(f))};e.appendChild(f);setTimeout(function(){g||(g=!0,c&&c(Error("Script load timeout")))},d||5E3);return f}return null};function B(){this.a=0;this.c=null}function C(a){a.a++;return function(){a.a--;D(a)}}function E(a,b){a.c=b;D(a)}function D(a){0==a.a&&a.c&&(a.c(),a.c=null)};function F(a){this.a=a||"-"}F.prototype.c=function(a){for(var b=[],c=0;c<arguments.length;c++)b.push(arguments[c].replace(/[\W_]+/g,"").toLowerCase());return b.join(this.a)};function G(a,b){this.c=a;this.f=4;this.a="n";var c=(b||"n4").match(/^([nio])([1-9])$/i);c&&(this.a=c[1],this.f=parseInt(c[2],10))}function fa(a){return H(a)+" "+(a.f+"00")+" 300px "+I(a.c)}function I(a){var b=[];a=a.split(/,\s*/);for(var c=0;c<a.length;c++){var d=a[c].replace(/['"]/g,"");-1!=d.indexOf(" ")||/^\d/.test(d)?b.push("'"+d+"'"):b.push(d)}return b.join(",")}function J(a){return a.a+a.f}function H(a){var b="normal";"o"===a.a?b="oblique":"i"===a.a&&(b="italic");return b}
function ga(a){var b=4,c="n",d=null;a&&((d=a.match(/(normal|oblique|italic)/i))&&d[1]&&(c=d[1].substr(0,1).toLowerCase()),(d=a.match(/([1-9]00|normal|bold)/i))&&d[1]&&(/bold/i.test(d[1])?b=7:/[1-9]00/.test(d[1])&&(b=parseInt(d[1].substr(0,1),10))));return c+b};function ha(a,b){this.c=a;this.f=a.o.document.documentElement;this.h=b;this.a=new F("-");this.j=!1!==b.events;this.g=!1!==b.classes}function ia(a){a.g&&w(a.f,[a.a.c("wf","loading")]);K(a,"loading")}function L(a){if(a.g){var b=y(a.f,a.a.c("wf","active")),c=[],d=[a.a.c("wf","loading")];b||c.push(a.a.c("wf","inactive"));w(a.f,c,d)}K(a,"inactive")}function K(a,b,c){if(a.j&&a.h[b])if(c)a.h[b](c.c,J(c));else a.h[b]()};function ja(){this.c={}}function ka(a,b,c){var d=[],e;for(e in b)if(b.hasOwnProperty(e)){var f=a.c[e];f&&d.push(f(b[e],c))}return d};function M(a,b){this.c=a;this.f=b;this.a=t(this.c,"span",{"aria-hidden":"true"},this.f)}function N(a){u(a.c,"body",a.a)}function O(a){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+I(a.c)+";"+("font-style:"+H(a)+";font-weight:"+(a.f+"00")+";")};function P(a,b,c,d,e,f){this.g=a;this.j=b;this.a=d;this.c=c;this.f=e||3E3;this.h=f||void 0}P.prototype.start=function(){var a=this.c.o.document,b=this,c=q(),d=new Promise(function(d,e){function f(){q()-c>=b.f?e():a.fonts.load(fa(b.a),b.h).then(function(a){1<=a.length?d():setTimeout(f,25)},function(){e()})}f()}),e=null,f=new Promise(function(a,d){e=setTimeout(d,b.f)});Promise.race([f,d]).then(function(){e&&(clearTimeout(e),e=null);b.g(b.a)},function(){b.j(b.a)})};function Q(a,b,c,d,e,f,g){this.v=a;this.B=b;this.c=c;this.a=d;this.s=g||"BESbswy";this.f={};this.w=e||3E3;this.u=f||null;this.m=this.j=this.h=this.g=null;this.g=new M(this.c,this.s);this.h=new M(this.c,this.s);this.j=new M(this.c,this.s);this.m=new M(this.c,this.s);a=new G(this.a.c+",serif",J(this.a));a=O(a);this.g.a.style.cssText=a;a=new G(this.a.c+",sans-serif",J(this.a));a=O(a);this.h.a.style.cssText=a;a=new G("serif",J(this.a));a=O(a);this.j.a.style.cssText=a;a=new G("sans-serif",J(this.a));a=
O(a);this.m.a.style.cssText=a;N(this.g);N(this.h);N(this.j);N(this.m)}var R={D:"serif",C:"sans-serif"},S=null;function T(){if(null===S){var a=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);S=!!a&&(536>parseInt(a[1],10)||536===parseInt(a[1],10)&&11>=parseInt(a[2],10))}return S}Q.prototype.start=function(){this.f.serif=this.j.a.offsetWidth;this.f["sans-serif"]=this.m.a.offsetWidth;this.A=q();U(this)};
function la(a,b,c){for(var d in R)if(R.hasOwnProperty(d)&&b===a.f[R[d]]&&c===a.f[R[d]])return!0;return!1}function U(a){var b=a.g.a.offsetWidth,c=a.h.a.offsetWidth,d;(d=b===a.f.serif&&c===a.f["sans-serif"])||(d=T()&&la(a,b,c));d?q()-a.A>=a.w?T()&&la(a,b,c)&&(null===a.u||a.u.hasOwnProperty(a.a.c))?V(a,a.v):V(a,a.B):ma(a):V(a,a.v)}function ma(a){setTimeout(p(function(){U(this)},a),50)}function V(a,b){setTimeout(p(function(){v(this.g.a);v(this.h.a);v(this.j.a);v(this.m.a);b(this.a)},a),0)};function W(a,b,c){this.c=a;this.a=b;this.f=0;this.m=this.j=!1;this.s=c}var X=null;W.prototype.g=function(a){var b=this.a;b.g&&w(b.f,[b.a.c("wf",a.c,J(a).toString(),"active")],[b.a.c("wf",a.c,J(a).toString(),"loading"),b.a.c("wf",a.c,J(a).toString(),"inactive")]);K(b,"fontactive",a);this.m=!0;na(this)};
W.prototype.h=function(a){var b=this.a;if(b.g){var c=y(b.f,b.a.c("wf",a.c,J(a).toString(),"active")),d=[],e=[b.a.c("wf",a.c,J(a).toString(),"loading")];c||d.push(b.a.c("wf",a.c,J(a).toString(),"inactive"));w(b.f,d,e)}K(b,"fontinactive",a);na(this)};function na(a){0==--a.f&&a.j&&(a.m?(a=a.a,a.g&&w(a.f,[a.a.c("wf","active")],[a.a.c("wf","loading"),a.a.c("wf","inactive")]),K(a,"active")):L(a.a))};function oa(a){this.j=a;this.a=new ja;this.h=0;this.f=this.g=!0}oa.prototype.load=function(a){this.c=new ca(this.j,a.context||this.j);this.g=!1!==a.events;this.f=!1!==a.classes;pa(this,new ha(this.c,a),a)};
function qa(a,b,c,d,e){var f=0==--a.h;(a.f||a.g)&&setTimeout(function(){var a=e||null,m=d||null||{};if(0===c.length&&f)L(b.a);else{b.f+=c.length;f&&(b.j=f);var h,l=[];for(h=0;h<c.length;h++){var k=c[h],n=m[k.c],r=b.a,x=k;r.g&&w(r.f,[r.a.c("wf",x.c,J(x).toString(),"loading")]);K(r,"fontloading",x);r=null;if(null===X)if(window.FontFace){var x=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent),xa=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);
X=x?42<parseInt(x[1],10):xa?!1:!0}else X=!1;X?r=new P(p(b.g,b),p(b.h,b),b.c,k,b.s,n):r=new Q(p(b.g,b),p(b.h,b),b.c,k,b.s,a,n);l.push(r)}for(h=0;h<l.length;h++)l[h].start()}},0)}function pa(a,b,c){var d=[],e=c.timeout;ia(b);var d=ka(a.a,c,a.c),f=new W(a.c,b,e);a.h=d.length;b=0;for(c=d.length;b<c;b++)d[b].load(function(b,d,c){qa(a,f,b,d,c)})};function ra(a,b){this.c=a;this.a=b}
ra.prototype.load=function(a){function b(){if(f["__mti_fntLst"+d]){var c=f["__mti_fntLst"+d](),e=[],h;if(c)for(var l=0;l<c.length;l++){var k=c[l].fontfamily;void 0!=c[l].fontStyle&&void 0!=c[l].fontWeight?(h=c[l].fontStyle+c[l].fontWeight,e.push(new G(k,h))):e.push(new G(k))}a(e)}else setTimeout(function(){b()},50)}var c=this,d=c.a.projectId,e=c.a.version;if(d){var f=c.c.o;A(this.c,(c.a.api||"https://fast.fonts.net/jsapi")+"/"+d+".js"+(e?"?v="+e:""),function(e){e?a([]):(f["__MonotypeConfiguration__"+
d]=function(){return c.a},b())}).id="__MonotypeAPIScript__"+d}else a([])};function sa(a,b){this.c=a;this.a=b}sa.prototype.load=function(a){var b,c,d=this.a.urls||[],e=this.a.families||[],f=this.a.testStrings||{},g=new B;b=0;for(c=d.length;b<c;b++)z(this.c,d[b],C(g));var m=[];b=0;for(c=e.length;b<c;b++)if(d=e[b].split(":"),d[1])for(var h=d[1].split(","),l=0;l<h.length;l+=1)m.push(new G(d[0],h[l]));else m.push(new G(d[0]));E(g,function(){a(m,f)})};function ta(a,b){a?this.c=a:this.c=ua;this.a=[];this.f=[];this.g=b||""}var ua="https://fonts.googleapis.com/css";function va(a,b){for(var c=b.length,d=0;d<c;d++){var e=b[d].split(":");3==e.length&&a.f.push(e.pop());var f="";2==e.length&&""!=e[1]&&(f=":");a.a.push(e.join(f))}}
function wa(a){if(0==a.a.length)throw Error("No fonts to load!");if(-1!=a.c.indexOf("kit="))return a.c;for(var b=a.a.length,c=[],d=0;d<b;d++)c.push(a.a[d].replace(/ /g,"+"));b=a.c+"?family="+c.join("%7C");0<a.f.length&&(b+="&subset="+a.f.join(","));0<a.g.length&&(b+="&text="+encodeURIComponent(a.g));return b};function ya(a){this.f=a;this.a=[];this.c={}}
var za={latin:"BESbswy","latin-ext":"\u00e7\u00f6\u00fc\u011f\u015f",cyrillic:"\u0439\u044f\u0416",greek:"\u03b1\u03b2\u03a3",khmer:"\u1780\u1781\u1782",Hanuman:"\u1780\u1781\u1782"},Aa={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Ba={i:"i",italic:"i",n:"n",normal:"n"},
Ca=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;
function Da(a){for(var b=a.f.length,c=0;c<b;c++){var d=a.f[c].split(":"),e=d[0].replace(/\+/g," "),f=["n4"];if(2<=d.length){var g;var m=d[1];g=[];if(m)for(var m=m.split(","),h=m.length,l=0;l<h;l++){var k;k=m[l];if(k.match(/^[\w-]+$/)){var n=Ca.exec(k.toLowerCase());if(null==n)k="";else{k=n[2];k=null==k||""==k?"n":Ba[k];n=n[1];if(null==n||""==n)n="4";else var r=Aa[n],n=r?r:isNaN(n)?"4":n.substr(0,1);k=[k,n].join("")}}else k="";k&&g.push(k)}0<g.length&&(f=g);3==d.length&&(d=d[2],g=[],d=d?d.split(","):
g,0<d.length&&(d=za[d[0]])&&(a.c[e]=d))}a.c[e]||(d=za[e])&&(a.c[e]=d);for(d=0;d<f.length;d+=1)a.a.push(new G(e,f[d]))}};function Ea(a,b){this.c=a;this.a=b}var Fa={Arimo:!0,Cousine:!0,Tinos:!0};Ea.prototype.load=function(a){var b=new B,c=this.c,d=new ta(this.a.api,this.a.text),e=this.a.families;va(d,e);var f=new ya(e);Da(f);z(c,wa(d),C(b));E(b,function(){a(f.a,f.c,Fa)})};function Ga(a,b){this.c=a;this.a=b}Ga.prototype.load=function(a){var b=this.a.id,c=this.c.o;b?A(this.c,(this.a.api||"https://use.typekit.net")+"/"+b+".js",function(b){if(b)a([]);else if(c.Typekit&&c.Typekit.config&&c.Typekit.config.fn){b=c.Typekit.config.fn;for(var e=[],f=0;f<b.length;f+=2)for(var g=b[f],m=b[f+1],h=0;h<m.length;h++)e.push(new G(g,m[h]));try{c.Typekit.load({events:!1,classes:!1,async:!0})}catch(l){}a(e)}},2E3):a([])};function Ha(a,b){this.c=a;this.f=b;this.a=[]}Ha.prototype.load=function(a){var b=this.f.id,c=this.c.o,d=this;b?(c.__webfontfontdeckmodule__||(c.__webfontfontdeckmodule__={}),c.__webfontfontdeckmodule__[b]=function(b,c){for(var g=0,m=c.fonts.length;g<m;++g){var h=c.fonts[g];d.a.push(new G(h.name,ga("font-weight:"+h.weight+";font-style:"+h.style)))}a(d.a)},A(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+ea(this.c)+"/"+b+".js",function(b){b&&a([])})):a([])};var Y=new oa(window);Y.a.c.custom=function(a,b){return new sa(b,a)};Y.a.c.fontdeck=function(a,b){return new Ha(b,a)};Y.a.c.monotype=function(a,b){return new ra(b,a)};Y.a.c.typekit=function(a,b){return new Ga(b,a)};Y.a.c.google=function(a,b){return new Ea(b,a)};var Z={load:p(Y.load,Y)}; true?!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){return Z}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):"undefined"!==typeof module&&module.exports?module.exports=Z:(window.WebFont=Z,window.WebFontConfig&&Y.load(window.WebFontConfig));}());


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utilities__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__svg_menu_animation__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__svg_scene1_animation__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__svg_scene2_animation__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__svg_scene3_animation__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__svg_scene4_animation__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__svg_scene5_animation__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__svg_scene6_animation__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__libs_skrollr_scripts__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_throttle_debounce__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_throttle_debounce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_throttle_debounce__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__timing__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__styles_main_scss__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__styles_main_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__styles_main_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__svg_animation_scss__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__svg_animation_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__svg_animation_scss__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }















var skrollr = Object(__WEBPACK_IMPORTED_MODULE_8__libs_skrollr_scripts__["a" /* default */])();

var _class = function () {
  function _class() {
    _classCallCheck(this, _class);

    this.scenes = {
      scene1: __WEBPACK_IMPORTED_MODULE_2__svg_scene1_animation__["a" /* default */],
      scene2: __WEBPACK_IMPORTED_MODULE_3__svg_scene2_animation__["a" /* default */],
      scene3: __WEBPACK_IMPORTED_MODULE_4__svg_scene3_animation__["a" /* default */],
      scene5: __WEBPACK_IMPORTED_MODULE_6__svg_scene5_animation__["a" /* default */],
      scene4: __WEBPACK_IMPORTED_MODULE_5__svg_scene4_animation__["a" /* default */],
      scene6: __WEBPACK_IMPORTED_MODULE_7__svg_scene6_animation__["a" /* default */]
    };

    this.defaults = {
      mobileDeceleration: 0.001,
      smoothScrollingDuration: 200,
      smoothScrolling: true
    };

    this.timing = __WEBPACK_IMPORTED_MODULE_10__timing__["a" /* default */].scenes;

    this._initEvents();
    this._addEventToReopenBtn();
    this._buildDOMElements();
    this._initScenes();
    this._hideLoader();
  }

  _createClass(_class, [{
    key: '_addEventToReopenBtn',
    value: function _addEventToReopenBtn() {
      var _this = this;

      if (document.querySelector('#reopen')) {
        document.querySelector('#reopen').addEventListener('click', function (ev) {
          ev.preventDefault();
          _this.show();
        });
      }
    }
  }, {
    key: '_initEvents',
    value: function _initEvents() {
      window.onresize = Object(__WEBPACK_IMPORTED_MODULE_9_throttle_debounce__["debounce"])(100, false, this.initDivertissement.bind(this));
      __WEBPACK_IMPORTED_MODULE_0__utilities__["c" /* onBeforePrint */](this.destroy.bind(this));
    }
  }, {
    key: '_hideLoader',
    value: function _hideLoader() {
      document.querySelector('#loader').setAttribute('uiState', 'hidden');
    }
  }, {
    key: 'resizeScenes',
    value: function resizeScenes() {
      var innerWidth = window.innerWidth;
      var clientHeight = __WEBPACK_IMPORTED_MODULE_0__utilities__["b" /* isMobile */]() ? document.documentElement.clientHeight : window.innerHeight;

      [].forEach.call(document.querySelectorAll('[data-scene] svg'), function (scene) {
        __WEBPACK_IMPORTED_MODULE_0__utilities__["d" /* setAttributes */](scene, {
          width: innerWidth,
          height: clientHeight
        });
      });

      __WEBPACK_IMPORTED_MODULE_0__utilities__["d" /* setAttributes */](document.querySelector('#menu svg'), {
        width: innerWidth,
        height: clientHeight * 60 / 768
      });

      document.querySelector('#menu').style.width = innerWidth + 'px';
      document.querySelector('#menu').style.height = clientHeight * 60 / 768 + 'px';
    }
  }, {
    key: '_buildDOMElements',
    value: function _buildDOMElements() {
      this.siteRoot = __WEBPACK_IMPORTED_MODULE_0__utilities__["a" /* createElementWithAttrs */]('figure', { role: 'site' });
      var nav = __WEBPACK_IMPORTED_MODULE_0__utilities__["a" /* createElementWithAttrs */]('nav', { id: 'menu' });
      this.siteRoot.appendChild(nav);
      for (var key in this.timing) {
        this.siteRoot.appendChild(__WEBPACK_IMPORTED_MODULE_0__utilities__["a" /* createElementWithAttrs */]('div', {
          'data-scene': key,
          id: key
        }));
      }
      document.body.appendChild(this.siteRoot);
    }
  }, {
    key: '_initScenes',
    value: function _initScenes() {
      for (var name in this.scenes) {
        this.scenes[name].init(this);
      }

      __WEBPACK_IMPORTED_MODULE_1__svg_menu_animation__["a" /* default */].init(this);
    }
  }, {
    key: 'initDivertissement',
    value: function initDivertissement() {
      if (__WEBPACK_IMPORTED_MODULE_0__utilities__["e" /* shouldFallbackToBoringCV */]()) {
        this.destroy();
      } else {
        this.resizeScenes();
        this.show();
      }
    }
  }, {
    key: 'getSkrollrConfiguration',
    value: function getSkrollrConfiguration() {
      var _this2 = this;

      return {
        render: function render(data) {
          for (var name in _this2.scenes) {
            if (typeof _this2.scenes[name].render === 'function') {
              _this2.scenes[name].render(data);
            }
          }
        },
        beforerender: function beforerender(data) {
          for (var name in _this2.scenes) {
            if (typeof _this2.scenes[name].beforerender === 'function') {
              _this2.scenes[name].beforerender(data);
            }
          }
        }
      };
    }
  }, {
    key: 'initSkrollr',
    value: function initSkrollr() {
      if (!skrollr.get()) {
        this.skrollr = skrollr.init(Object.assign(this.defaults, this.getSkrollrConfiguration()));
        skrollr.stylesheets.init();

        skrollr.menu.init(this.skrollr, {
          animate: true,
          easing: 'swing',
          scenes: this.timing,
          scale: 1,
          duration: function duration(currentTop, targetTop) {
            return Math.abs(currentTop - targetTop) * 0.5;
          }
        });
      }

      this.skrollr.refresh();
    }
  }, {
    key: 'show',
    value: function show() {
      document.body.setAttribute('data-display', 'divertissement');
      document.querySelector('#vignette').setAttribute('uiState', 'show');
      this.siteRoot.setAttribute('uiState', 'show');
      this.initSkrollr();
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      document.body.removeAttribute('style');
      document.body.removeAttribute('data-display');
      document.querySelector('#vignette').setAttribute('uiState', 'hidden');
      this.siteRoot.setAttribute('uiState', 'hidden');
      if (skrollr.get()) {
        this.skrollr.destroy();
        window.scroll(0, 0);
      }
    }
  }]);

  return _class;
}();

/* harmony default export */ __webpack_exports__["a"] = (_class);
;

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scene_svg__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scene_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__scene_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scene_html__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scene_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__scene_html__);



/* harmony default export */ __webpack_exports__["a"] = ({
  init: function init() {
    document.querySelector('#menu').innerHTML = __WEBPACK_IMPORTED_MODULE_1__scene_html___default.a;
    document.querySelector('#menu .svg').innerHTML = __WEBPACK_IMPORTED_MODULE_0__scene_svg___default.a;
  }
});

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = "<svg version=\"1.1\" id=\"svgmenu\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"112 271 1024 60\" enable-background=\"new 112 271 1024 60\" xml:space=\"preserve\"><g id=\"menu\"><rect id=\"barcenter\" x=\"-3088\" y=\"271\" fill=\"#2BACB5\" width=\"9600\" height=\"60\"></rect><rect id=\"barleft\" x=\"-1087\" y=\"271\" fill=\"#229098\" width=\"1200\" height=\"60\"></rect><rect id=\"bar\" x=\"112\" y=\"271\" fill=\"#229098\" width=\"1024\" height=\"60\"></rect><g id=\"testi\"><text id=\"sc-menu1\" transform=\"matrix(1 0 0 1 208.0068 309.2969)\" fill=\"#F5ECD9\" font-weight=\"400\" font-size=\"24px\">ABOUT ME</text><text id=\"sc-menu3\" transform=\"matrix(1 0 0 1 464.3423 309.2969)\" fill=\"#F5ECD9\" font-weight=\"400\" font-size=\"24px\">SKILLS</text><text id=\"sc-menu5\" transform=\"matrix(1 0 0 1 699.4268 309.2969)\" fill=\"#F5ECD9\" font-weight=\"400\" font-size=\"24px\">WORK</text><text id=\"sc-menu6\" transform=\"matrix(1 0 0 1 909.9951 309.2969)\" fill=\"#F5ECD9\" font-weight=\"400\" font-size=\"24px\">CONNECT</text></g></g></svg>"

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = "<div class=\"scene-content\">\n\n\n\n</div>\n\n<div class=\"svg\"></div>\n";

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_animejs__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_animejs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_animejs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scene_svg__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scene_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__scene_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scene_html__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scene_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__scene_html__);




/* harmony default export */ __webpack_exports__["a"] = ({
  lightlast: 'none',
  lastKeyPercentage: 0,
  minY: 400,
  maxY: 700,
  isOnscreen: false,

  init: function init(site) {
    document.querySelector('[data-scene="scene1"]').innerHTML = __WEBPACK_IMPORTED_MODULE_2__scene_html___default.a;

    document.querySelector('[data-scene="scene1"] .svg').innerHTML = __WEBPACK_IMPORTED_MODULE_1__scene_svg___default.a;

    document.querySelector('#intro2').addEventListener('click', function () {
      window.open('http://www.workshare.com', '_blank');
    });

    document.querySelector('#viewresume').addEventListener('click', function () {
      site.destroy();
    });

    this.activateCvLink();

    this.sceneTiming = site.timing.scene1;
  },


  beforerender: function beforerender(data) {
    var scrolledPercentage = this.getScrolledPercentage(data, this.sceneTiming);

    this.isOnscreen = scrolledPercentage > 0 && scrolledPercentage <= 100;
  },

  getScrolledPercentage: function getScrolledPercentage(data, timing) {
    if (data.curTop <= timing.begin || data.curTop >= timing.end) {
      return 0;
    }

    return Math.abs((data.curTop - timing.begin) / timing.duration * 100).toFixed(3);
  },


  render: function render(data) {
    if (!this.isOnscreen) {
      return;
    }

    this.renderMbpLight(data);
  },

  renderMbpLight: function renderMbpLight(data) {
    var scrolledPercentage = this.getScrolledPercentage(data, this.sceneTiming);
    var keyFreqPercentage = Math.floor(Math.random() * 6) + 5;

    if (scrolledPercentage > 0 && scrolledPercentage < 100) {
      var shouldExecute = Math.abs(scrolledPercentage - this.lastKeyPercentage) > keyFreqPercentage;

      if (shouldExecute) {
        this.lightlast = this.lightlast === 'none' ? 'inline' : 'none';
        document.querySelector('#mbplight').style.display = this.lightlast;

        this.lastKeyPercentage = scrolledPercentage;
      }
    }
  },
  activateCvLink: function activateCvLink() {
    __WEBPACK_IMPORTED_MODULE_0_animejs___default()({ targets: '#scrolldown', opacity: 1, delay: 1500 });
    __WEBPACK_IMPORTED_MODULE_0_animejs___default()({ targets: '#viewresume', opacity: 1, delay: 2500 });
  }
});

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = "<svg version=\"1.1\" id=\"svg1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"496 -368 1024 768\" enable-background=\"new 496 -368 1024 768\" xml:space=\"preserve\"><g id=\"bg\"><rect x=\"-6591.4\" y=\"-7628.7\" fill=\"#3498DB\" width=\"16291.8\" height=\"14784\"></rect></g><path id=\"wire1\" fill=\"none\" stroke=\"#DBDBDB\" stroke-miterlimit=\"10\" enable-background=\"new \" d=\"M514.3-413.1 c45.9,59.7,97.6,127.8,180.5,125.9c65.6-1.5,127.1-41.7,193.4-31.3c67.3,10.6,116.7,71.3,167.2,111.7c53.2,42.6,112.2,66.4,172,97.3 c46,23.8,69.2,58.5,77.5,109.3c5.8,35.4-0.1,84.2,22.4,114.6c29.1,39.5,157,60,101,134.8c-53,70.9-150.8,81.9-210.6,115.8 c-16.1,9.1-52.3,35.4-52.6,35.4\"></path><g id=\"introduction\" xmlns:inkscape=\"http://www.inkscape.org/namespaces/inkscape\" xmlns:sodipodi=\"http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd\" xmlns:svg=\"http://www.w3.org/2000/svg\" xmlns:cc=\"http://creativecommons.org/ns#\" xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" sodipodi:docname=\"drawing.svg\" inkscape:version=\"0.48.4 r9939\"><g id=\"macbook\"><path fill=\"#586273\" d=\"M1434.6-61.8L1434.6-61.8C1434.6-61.7,1434.6-61.8,1434.6-61.8z\"></path><path opacity=\"0.8\" fill=\"#2980B9\" enable-background=\"new \" d=\"M1465.5-89.2l-342.2-155.9c0,0-8.2-3.7-11.9,4.5 c-3.7,8.2,4.5,11.9,4.5,11.9l24.6,11.2c0,0-8.2-3.7-11.9,4.5c-4.7,10.3-4.7,10.2-77.5,170.2c-3.9,8.5,0.8,19,9.3,22.9L1338,106.5 c8.5,3.9,18.6,0.1,22.5-8.4c0,0,59.1-129.8,74.2-162.9l0,0c0.1-0.2,0.6-1.3,3.3-7.3c3.7-8.2-4.5-11.9-4.5-11.9l24.6,11.2 c0,0,8.2,3.7,11.9-4.5S1465.5-89.2,1465.5-89.2z\"></path><g><path fill=\"#E6E9ED\" d=\"M1367.4,96.1c-3.9,8.5-14,12.3-22.5,8.4L1067.3-21.9c-8.5-3.9-13.2-14.4-9.3-22.9 c0,0,73.8-162,77.5-170.2s11.9-4.5,11.9-4.5l293,133.5c0,0,8.2,3.7,4.5,11.9S1367.4,96.1,1367.4,96.1z\"></path><path opacity=\"0.3\" fill=\"#B7BFC7\" enable-background=\"new \" d=\"M1440.6-66.8l-364.2-20.6c0,0,54.4-119.4,58.1-127.6 s11.9-4.5,11.9-4.5l293,133.5c0,0,8.2,3.7,4.5,11.9S1440.6-66.8,1440.6-66.8z\"></path><rect x=\"1210\" y=\"-153\" transform=\"matrix(-0.91 -0.4145 0.4145 -0.91 2527.3079 251.5304)\" fill=\"#DCE4E8\" width=\"161.9\" height=\"9\"></rect><radialGradient id=\"mbplight_1_\" cx=\"1913.2986\" cy=\"13499.2021\" r=\"163.2177\" gradientTransform=\"matrix(0.9118 0.4011 -9.550000e-02 0.1842 827.556 -3404.3704)\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0.103\" style=\"stop-color:#3498DB;stop-opacity:0.4\"></stop><stop offset=\"0.7955\" style=\"stop-color:#3498DB;stop-opacity:5.650000e-02\"></stop><stop offset=\"0.9095\" style=\"stop-color:#3498DB;stop-opacity:0\"></stop></radialGradient><polygon id=\"mbplight\" fill=\"url(#mbplight_1_)\" points=\"1456.4,-40 1121.7,-190.5 1165.8,-230.3 1464.9,-93.9 \"></polygon><path fill=\"#CCD1D9\" d=\"M1464-74.8l-342.2-155.9c0,0-8.2-3.7-4.5-11.9s11.9-4.5,11.9-4.5l342.3,155.9c0,0,8.2,3.7,4.5,11.9 C1472.2-71.1,1464-74.8,1464-74.8z\"></path><rect x=\"1173.4\" y=\"-16.6\" transform=\"matrix(-0.91 -0.4145 0.4145 -0.91 2327.3486 517.8984)\" fill=\"#F5F7FA\" stroke=\"#CCD1D9\" stroke-miterlimit=\"10\" width=\"92.9\" height=\"46\"></rect><g><rect x=\"1167.6\" y=\"-168.9\" transform=\"matrix(-0.9101 -0.4145 0.4145 -0.9101 2314.9368 176.6098)\" fill=\"#3B3B3B\" stroke=\"#C1C1C1\" stroke-miterlimit=\"10\" width=\"18\" height=\"12\"></rect><rect x=\"1158.6\" y=\"-151.7\" transform=\"matrix(-0.91 -0.4145 0.4145 -0.91 2289.5425 210.526)\" fill=\"#3B3B3B\" stroke=\"#C1C1C1\" stroke-miterlimit=\"10\" width=\"18\" height=\"17\"></rect><rect x=\"1147.7\" y=\"-127.4\" transform=\"matrix(-0.91 -0.4145 0.4145 -0.91 2269.7239 256.7742)\" fill=\"#3B3B3B\" stroke=\"#C1C1C1\" stroke-miterlimit=\"10\" width=\"30\" height=\"19\"></rect><rect x=\"1137.3\" y=\"-102\" transform=\"matrix(-0.9101 -0.4145 0.4145 -0.9101 2252.1755 301.8054)\" fill=\"#3B3B3B\" stroke=\"#C1C1C1\" stroke-miterlimit=\"10\" width=\"43\" height=\"17\"></rect><rect x=\"1180.5\" y=\"-141.6\" transform=\"matrix(-0.91 -0.4145 0.4145 -0.91 2328.1663 239.0804)\" fill=\"#3B3B3B\" stroke=\"#C1C1C1\" stroke-miterlimit=\"10\" width=\"19\" height=\"17\"></rect><rect x=\"1181\" y=\"-114.9\" transform=\"matrix(-0.91 -0.4145 0.4145 -0.91 2317.6672 292.1736)\" fill=\"#3B3B3B\" stroke=\"#C1C1C1\" stroke-miterlimit=\"10\" width=\"19\" height=\"19\"></rect><rect x=\"1182.8\" y=\"-86.6\" transform=\"matrix(-0.91 -0.4145 0.4145 -0.91 2309.7351 345.0804)\" fill=\"#3B3B3B\" stroke=\"#C1C1C1\" stroke-miterlimit=\"10\" width=\"19\" height=\"17\"></rect><rect x=\"1204.8\" y=\"-76.9\" transform=\"matrix(-0.91 -0.4145 0.4145 -0.91 2346.8284 372.5369)\" fill=\"#3B3B3B\" stroke=\"#C1C1C1\" stroke-miterlimit=\"10\" width=\"18\" height=\"17\"></rect><rect x=\"1227.6\" y=\"-66.6\" transform=\"matrix(-0.9101 -0.4145 0.4145 -0.9101 2386.126 401.6521)\" fill=\"#3B3B3B\" stroke=\"#C1C1C1\" stroke-miterlimit=\"10\" width=\"18\" height=\"17\"></rect><rect x=\"1249.4\" y=\"-56.5\" transform=\"matrix(-0.91 -0.4145 0.4145 -0.91 2423.5107 429.949)\" fill=\"#3B3B3B\" stroke=\"#C1C1C1\" stroke-miterlimit=\"10\" width=\"18\" height=\"17\"></rect><rect x=\"1272.2\" y=\"-46.3\" transform=\"matrix(-0.9101 -0.4145 0.4145 -0.9101 2462.8889 458.9117)\" fill=\"#3B3B3B\" stroke=\"#C1C1C1\" stroke-miterlimit=\"10\" width=\"18\" height=\"17\"></rect><rect x=\"1293.1\" y=\"-36.5\" transform=\"matrix(-0.9101 -0.4145 0.4145 -0.9101 2499.7046 486.3541)\" fill=\"#3B3B3B\" stroke=\"#C1C1C1\" stroke-miterlimit=\"10\" width=\"19\" height=\"17\"></rect><rect x=\"1314.7\" y=\"-21.2\" transform=\"matrix(-0.91 -0.4145 0.4145 -0.91 2557.5308 529.6163)\" fill=\"#3B3B3B\" stroke=\"#C1C1C1\" stroke-miterlimit=\"10\" width=\"43\" height=\"17\"></rect><rect x=\"1203.8\" y=\"-104.6\" transform=\"matrix(-0.91 -0.4145 0.4145 -0.91 2355.9146 321.1366)\" fill=\"#3B3B3B\" stroke=\"#C1C1C1\" stroke-miterlimit=\"10\" width=\"18\" height=\"19\"></rect><rect x=\"1225.6\" y=\"-94.4\" transform=\"matrix(-0.91 -0.4145 0.4145 -0.91 2394.2898 349.8357)\" fill=\"#3B3B3B\" stroke=\"#C1C1C1\" stroke-miterlimit=\"10\" width=\"19\" height=\"19\"></rect><rect x=\"1248.5\" y=\"-84.5\" transform=\"matrix(-0.9101 -0.4144 0.4144 -0.9101 2432.9771 377.8849)\" fill=\"#3B3B3B\" stroke=\"#C1C1C1\" stroke-miterlimit=\"10\" width=\"18\" height=\"19\"></rect><rect x=\"1270.2\" y=\"-74.3\" transform=\"matrix(-0.91 -0.4145 0.4145 -0.91 2471.2117 406.6866)\" fill=\"#3B3B3B\" stroke=\"#C1C1C1\" stroke-miterlimit=\"10\" width=\"19\" height=\"19\"></rect><rect x=\"1293\" y=\"-64\" transform=\"matrix(-0.91 -0.4145 0.4145 -0.91 2509.4597 435.5948)\" fill=\"#3B3B3B\" stroke=\"#C1C1C1\" stroke-miterlimit=\"10\" width=\"18\" height=\"19\"></rect><rect x=\"1314.8\" y=\"-53.9\" transform=\"matrix(-0.91 -0.4145 0.4145 -0.91 2547.8606 464.156)\" fill=\"#3B3B3B\" stroke=\"#C1C1C1\" stroke-miterlimit=\"10\" width=\"19\" height=\"19\"></rect><rect x=\"1337.1\" y=\"-41.3\" transform=\"matrix(-0.9101 -0.4145 0.4145 -0.9101 2595.8118 499.7851)\" fill=\"#3B3B3B\" stroke=\"#C1C1C1\" stroke-miterlimit=\"10\" width=\"30\" height=\"19\"></rect><rect x=\"1203.1\" y=\"-131.1\" transform=\"matrix(-0.91 -0.4145 0.4145 -0.91 2366.988 268.4662)\" fill=\"#3B3B3B\" stroke=\"#C1C1C1\" stroke-miterlimit=\"10\" width=\"19\" height=\"17\"></rect><rect x=\"1225.2\" y=\"-121.3\" transform=\"matrix(-0.91 -0.4145 0.4145 -0.91 2404.1396 296.1997)\" fill=\"#3B3B3B\" stroke=\"#C1C1C1\" stroke-miterlimit=\"10\" width=\"18\" height=\"17\"></rect><rect x=\"1247.9\" y=\"-111.2\" transform=\"matrix(-0.9101 -0.4145 0.4145 -0.9101 2443.3738 324.8653)\" fill=\"#3B3B3B\" stroke=\"#C1C1C1\" stroke-miterlimit=\"10\" width=\"18\" height=\"17\"></rect><rect x=\"1269.9\" y=\"-101.1\" transform=\"matrix(-0.9101 -0.4145 0.4145 -0.9101 2481.2302 353.1615)\" fill=\"#3B3B3B\" stroke=\"#C1C1C1\" stroke-miterlimit=\"10\" width=\"18\" height=\"17\"></rect><rect x=\"1292.4\" y=\"-90.7\" transform=\"matrix(-0.9101 -0.4144 0.4144 -0.9101 2519.7788 382.288)\" fill=\"#3B3B3B\" stroke=\"#C1C1C1\" stroke-miterlimit=\"10\" width=\"18\" height=\"17\"></rect><rect x=\"1313.4\" y=\"-81.1\" transform=\"matrix(-0.9101 -0.4145 0.4145 -0.9101 2556.9802 409.5916)\" fill=\"#3B3B3B\" stroke=\"#C1C1C1\" stroke-miterlimit=\"10\" width=\"19\" height=\"17\"></rect><rect x=\"1335.1\" y=\"-65.7\" transform=\"matrix(-0.9101 -0.4145 0.4145 -0.9101 2614.9094 453.1005)\" fill=\"#3B3B3B\" stroke=\"#C1C1C1\" stroke-miterlimit=\"10\" width=\"43\" height=\"17\"></rect><rect x=\"1128.5\" y=\"-86.2\" transform=\"matrix(-0.9101 -0.4145 0.4145 -0.9101 2204.5598 324.9062)\" fill=\"#3B3B3B\" stroke=\"#C1C1C1\" stroke-miterlimit=\"10\" width=\"18\" height=\"19\"></rect><rect x=\"1150.2\" y=\"-76\" transform=\"matrix(-0.91 -0.4145 0.4145 -0.91 2242.6592 353.7392)\" fill=\"#3B3B3B\" stroke=\"#C1C1C1\" stroke-miterlimit=\"10\" width=\"19\" height=\"19\"></rect><rect id=\"spacebar\" x=\"1168.6\" y=\"-45.6\" transform=\"matrix(-0.91 -0.4145 0.4145 -0.91 2357.7351 439.5003)\" fill=\"#3B3B3B\" stroke=\"#C1C1C1\" stroke-miterlimit=\"10\" width=\"115.9\" height=\"19\"></rect><rect x=\"1283.1\" y=\"-15.6\" transform=\"matrix(-0.9101 -0.4145 0.4145 -0.9101 2471.5447 524.0416)\" fill=\"#3B3B3B\" stroke=\"#C1C1C1\" stroke-miterlimit=\"10\" width=\"19\" height=\"19\"></rect><rect x=\"1305.9\" y=\"-5.3\" transform=\"matrix(-0.9101 -0.4145 0.4145 -0.9101 2510.7424 553.3196)\" fill=\"#3B3B3B\" stroke=\"#C1C1C1\" stroke-miterlimit=\"10\" width=\"19\" height=\"19\"></rect><rect x=\"1328.6\" y=\"4.9\" transform=\"matrix(-0.9101 -0.4145 0.4145 -0.9101 2548.9519 582.0089)\" fill=\"#3B3B3B\" stroke=\"#C1C1C1\" stroke-miterlimit=\"10\" width=\"18\" height=\"19\"></rect><rect x=\"1189.4\" y=\"-158.6\" transform=\"matrix(-0.91 -0.4145 0.4145 -0.91 2353.2036 205.5062)\" fill=\"#3B3B3B\" stroke=\"#C1C1C1\" stroke-miterlimit=\"10\" width=\"19\" height=\"12\"></rect><rect x=\"1212.2\" y=\"-148.3\" transform=\"matrix(-0.9101 -0.4145 0.4145 -0.9101 2392.4934 234.6421)\" fill=\"#3B3B3B\" stroke=\"#C1C1C1\" stroke-miterlimit=\"10\" width=\"19\" height=\"12\"></rect><rect x=\"1234\" y=\"-138.5\" transform=\"matrix(-0.91 -0.4145 0.4145 -0.91 2429.1284 262.2018)\" fill=\"#3B3B3B\" stroke=\"#C1C1C1\" stroke-miterlimit=\"10\" width=\"18\" height=\"12\"></rect><rect x=\"1256.7\" y=\"-128.1\" transform=\"matrix(-0.91 -0.4145 0.4145 -0.91 2468.168 291.4603)\" fill=\"#3B3B3B\" stroke=\"#C1C1C1\" stroke-miterlimit=\"10\" width=\"18\" height=\"12\"></rect><rect x=\"1278.7\" y=\"-118.3\" transform=\"matrix(-0.9101 -0.4145 0.4145 -0.9101 2506.2039 319.326)\" fill=\"#3B3B3B\" stroke=\"#C1C1C1\" stroke-miterlimit=\"10\" width=\"18\" height=\"12\"></rect><rect x=\"1301.4\" y=\"-107.9\" transform=\"matrix(-0.9101 -0.4145 0.4145 -0.9101 2545.2439 348.5917)\" fill=\"#3B3B3B\" stroke=\"#C1C1C1\" stroke-miterlimit=\"10\" width=\"18\" height=\"12\"></rect><rect x=\"1322.4\" y=\"-98.1\" transform=\"matrix(-0.9101 -0.4145 0.4145 -0.9101 2582.1729 376.2285)\" fill=\"#3B3B3B\" stroke=\"#C1C1C1\" stroke-miterlimit=\"10\" width=\"19\" height=\"12\"></rect><rect x=\"1345\" y=\"-87.7\" transform=\"matrix(-0.91 -0.4145 0.4145 -0.91 2621.0364 405.4589)\" fill=\"#3B3B3B\" stroke=\"#C1C1C1\" stroke-miterlimit=\"10\" width=\"19\" height=\"12\"></rect><rect x=\"1367.7\" y=\"-77.5\" transform=\"matrix(-0.91 -0.4146 0.4146 -0.91 2659.1111 434.2366)\" fill=\"#3B3B3B\" stroke=\"#C1C1C1\" stroke-miterlimit=\"10\" width=\"18\" height=\"12\"></rect></g></g></g><g id=\"bevanda\"><circle opacity=\"0.8\" fill=\"#2980B9\" enable-background=\"new \" cx=\"915.6\" cy=\"-231.3\" r=\"50.6\"></circle><circle fill=\"#E6E9ED\" cx=\"920.6\" cy=\"-233.3\" r=\"50.6\"></circle><path fill=\"#E74C3C\" d=\"M920.6-275c23,0,41.7,18.7,41.7,41.7s-18.7,41.7-41.7,41.7c-10.4,0-19.9-3.8-27.2-10.1 c-8.9-7.6-14.5-19-14.5-31.6C878.9-256.3,897.6-275,920.6-275z\"></path><path id=\"linecover1\" fill=\"#E6E9ED\" d=\"M920.6-276c23.6,0,42.7,19.1,42.7,42.7s-19.1,42.7-42.7,42.7c-10.6,0-20.3-3.9-27.8-10.3 c-9.1-7.8-14.9-19.4-14.9-32.4C877.9-256.9,897-276,920.6-276z\"></path><ellipse transform=\"matrix(-0.993 -0.1184 0.1184 -0.993 1830.8612 -293.5759)\" fill=\"#D8D8DA\" cx=\"906.7\" cy=\"-201.2\" rx=\"11.6\" ry=\"7.7\"></ellipse><polygon fill=\"#CCD1D9\" points=\"857.4,-211.1 898.3,-204.1 897.8,-200.6 856.5,-203.4 \"></polygon><ellipse transform=\"matrix(-0.993 -0.1184 0.1184 -0.993 1830.863 -293.5716)\" fill=\"#AAB2BD\" cx=\"906.7\" cy=\"-201.2\" rx=\"9.6\" ry=\"6.4\"></ellipse><path fill=\"#FFFFFF\" d=\"M893.3-276.2l9.7,12.5c1.6,2.1,1.2,5-0.8,6.7c-2.1,1.6-5,1.2-6.6-0.8l-9.7-12.5c-1.6-2.1-1.2-5,0.8-6.7 C888.7-278.6,891.7-278.2,893.3-276.2z\"></path><circle fill=\"#FFFFFF\" cx=\"920.6\" cy=\"-233.3\" r=\"34.8\"></circle><circle fill=\"#E6E7E8\" cx=\"920.6\" cy=\"-233.3\" r=\"31.3\"></circle><circle fill=\"#49433C\" cx=\"920.6\" cy=\"-233.3\" r=\"29.6\"></circle><path fill=\"#363532\" d=\"M899.4-216.8c9.1,11.7,26,13.8,37.7,4.7c0.7-0.5,0.8-1.5,0.3-2.2s-1.5-0.8-2.2-0.3 c-0.3,0.2-0.6,0.4-0.9,0.6c-0.1,0.1-0.1,0.1-0.2,0.2c-0.3,0.2-0.6,0.4-0.8,0.5c-0.1,0.1-0.2,0.1-0.3,0.2c-0.2,0.1-0.4,0.2-0.6,0.3 c-0.1,0.1-0.3,0.1-0.4,0.2c-0.2,0.1-0.5,0.2-0.7,0.4c-0.2,0.1-0.4,0.2-0.5,0.3s-0.3,0.1-0.4,0.2c-0.2,0.1-0.3,0.2-0.5,0.2 c-0.2,0.1-0.5,0.2-0.7,0.3s-0.3,0.1-0.5,0.2c-0.2,0.1-0.3,0.1-0.5,0.2c-0.1,0.1-0.3,0.1-0.4,0.1c-0.3,0.1-0.6,0.2-0.9,0.2 c-0.1,0-0.2,0.1-0.3,0.1c-0.2,0.1-0.5,0.1-0.8,0.2c-0.1,0-0.2,0-0.2,0.1c-0.3,0.1-0.7,0.1-1,0.2c0,0,0,0-0.1,0 c-0.2,0-0.4,0.1-0.6,0.1c-0.1,0-0.3,0-0.4,0.1h-0.1c-0.7,0.1-1.5,0.1-2.2,0.1l0,0c-0.7,0-1.5,0-2.2-0.1h-0.1c-0.3,0-0.7-0.1-1-0.1 c0,0,0,0-0.1,0c-0.3,0-0.6-0.1-0.9-0.1c-0.1,0-0.3,0-0.4-0.1c-0.2,0-0.4-0.1-0.5-0.1c-0.6-0.1-1.3-0.3-1.9-0.5l0,0 c-3.4-1-6.6-2.8-9.2-5.2c0,0,0,0-0.1,0c-0.1-0.1-0.3-0.3-0.4-0.4c-0.1-0.1-0.2-0.2-0.4-0.4c-0.1-0.1-0.2-0.2-0.4-0.4 s-0.4-0.4-0.6-0.7c-0.1-0.1-0.1-0.2-0.2-0.2c-0.2-0.3-0.5-0.5-0.7-0.8s-0.4-0.6-0.6-0.9c-0.1-0.1-0.1-0.2-0.2-0.3 c-0.2-0.2-0.3-0.5-0.5-0.7c-0.1-0.1-0.2-0.3-0.3-0.4c-0.1-0.1-0.2-0.3-0.3-0.4c-0.1-0.2-0.2-0.4-0.3-0.5c0,0,0,0,0-0.1 c-1.7-3.2-2.6-6.7-2.8-10.3l0,0c0-0.7,0-1.3,0-2c0-0.2,0-0.4,0-0.5s0-0.3,0-0.4c0-0.3,0.1-0.6,0.1-1c0,0,0,0,0-0.1 c0-0.3,0.1-0.7,0.1-1v-0.1c0.1-0.7,0.3-1.4,0.5-2.2l0,0c0.2-0.7,0.4-1.4,0.7-2.1c0,0,0,0,0-0.1c0.1-0.1,0.1-0.3,0.2-0.4 c0.1-0.2,0.2-0.4,0.2-0.6c0,0,0,0,0-0.1c0.1-0.3,0.3-0.6,0.4-0.9c0-0.1,0.1-0.1,0.1-0.2c0.1-0.2,0.2-0.5,0.4-0.7 c0.1-0.1,0.1-0.2,0.2-0.3c0.1-0.3,0.3-0.5,0.4-0.8c0.1-0.1,0.2-0.3,0.3-0.4c0.1-0.1,0.2-0.3,0.3-0.4c0.1-0.1,0.2-0.3,0.3-0.4 c0.2-0.2,0.3-0.4,0.5-0.6c0.1-0.1,0.2-0.3,0.3-0.4c0.1-0.1,0.2-0.2,0.3-0.3c0.1-0.2,0.3-0.3,0.4-0.5c0.2-0.2,0.3-0.4,0.5-0.6 c0.1-0.1,0.2-0.2,0.3-0.3c0.2-0.2,0.3-0.3,0.5-0.5c0.1-0.1,0.1-0.2,0.2-0.2c0.2-0.2,0.5-0.4,0.7-0.7c0.1-0.1,0.1-0.1,0.2-0.2 c0.3-0.2,0.5-0.5,0.8-0.7c0.7-0.5,0.8-1.5,0.3-2.2c-0.5-0.7-1.5-0.8-2.2-0.3C892.4-245.4,890.3-228.5,899.4-216.8z\"></path><path fill=\"#363532\" d=\"M909.3-256c0.3,0.8,1.3,1.2,2.1,0.8c0.2-0.1,0.4-0.2,0.6-0.3h0.1l0,0c0.2-0.1,0.4-0.1,0.6-0.2l0,0 c0.1,0,0.1,0,0.2-0.1l0,0c0.2-0.1,0.4-0.1,0.6-0.2l0,0l0,0l0,0c0.4-0.1,0.9-0.3,1.4-0.4c0.1,0,0.1,0,0.2,0 c0.4-0.1,0.9-0.2,1.3-0.3c0.1,0,0.2,0,0.3-0.1c-0.1,0-0.1,0-0.2,0c0.1,0,0.1,0,0.2,0l0,0c0.1,0,0.3,0,0.4-0.1l0,0 c0.1,0,0.1,0,0.1,0l0,0c-0.1,0-0.1,0-0.1,0c0.1,0,0.1,0,0.2,0c0.6-0.1,1.1,0.2,1.4,0.6c0.2,0.2,0.3,0.5,0.3,0.8 c0.1,0.9-0.5,1.7-1.3,1.8l0,0l0,0c-1.3,0.2-2.6,0.5-3.9,0.9l0,0c0,0,0,0-0.1,0l0,0c-0.4,0.1-0.8,0.3-1.2,0.5 c-0.8,0.3-1.1,1.3-0.8,2.1s1.3,1.2,2.1,0.8c2.2-0.9,4.5-1.4,6.9-1.4c0.1,0,0.1,0,0.2,0c0.2,0,0.3,0,0.5,0c0.1,0,0.2,0,0.3,0 s0.3,0,0.5,0c0.1,0,0.2,0,0.3,0s0.2,0,0.3,0l0,0c0,0,0,0,0.1,0c0.4,0.1,0.7,0.3,0.9,0.6s0.4,0.7,0.3,1.2c-0.1,0.9-0.9,1.5-1.8,1.4 c-2.5-0.3-5,0-7.2,1H915c-0.8,0.3-1.2,1.3-0.8,2.1c0.3,0.8,1.3,1.2,2.1,0.8c4.6-1.9,10-0.5,13,3.4c3.1,4,3.1,9.5,0.1,13.5 c-0.5,0.7-0.4,1.7,0.3,2.2s1.7,0.4,2.2-0.3l0.2-0.2c1.4-1.9,2.3-4.2,2.6-6.6c0.1-0.9,0.9-1.5,1.8-1.4c0.4,0.1,0.8,0.3,1.1,0.6 c0.2,0.3,0.4,0.7,0.3,1.1c0,0,0,0,0,0.1l0,0c0,0.1,0,0.2-0.1,0.3c0,0.1,0,0.2,0,0.3s-0.1,0.3-0.1,0.4c0,0.1,0,0.2-0.1,0.3 c0,0.2-0.1,0.3-0.1,0.5c0,0.1,0,0.1,0,0.2c-0.6,2.3-1.6,4.4-3,6.3c-0.5,0.7-0.4,1.7,0.3,2.2s1.7,0.4,2.2-0.3 c0.3-0.4,0.5-0.7,0.8-1.1l0,0c0,0,0,0,0-0.1l0,0c0.7-1.1,1.4-2.3,1.9-3.5l0,0l0,0c0.3-0.8,1.2-1.2,2.1-0.9 c0.3,0.1,0.5,0.3,0.6,0.5c0.3,0.4,0.4,1,0.2,1.5c0,0.1,0,0.1-0.1,0.2c-0.1,0.2-0.2,0.4-0.2,0.6c0,0.1-0.1,0.2-0.1,0.3 c-0.1,0.2-0.2,0.4-0.3,0.6c0,0.1-0.1,0.2-0.1,0.2c-0.1,0.2-0.2,0.4-0.3,0.6c0,0.1-0.1,0.1-0.1,0.2c-0.1,0.3-0.3,0.5-0.5,0.8 c0,0,0,0,0,0.1l0,0c-0.1,0.2-0.2,0.4-0.4,0.6l-0.1,0.1l0,0c-0.1,0.1-0.1,0.2-0.2,0.3s-0.1,0.1-0.1,0.2c0,0,0,0-0.1,0.1 c-0.1,0.2-0.3,0.4-0.4,0.6c-0.5,0.7-0.4,1.7,0.3,2.2s1.7,0.4,2.2-0.3c7.3-9.7,7.3-23.1-0.2-32.7c-7.4-9.6-20.5-13-31.6-8.3 C909.4-257.7,909-256.8,909.3-256z M942.3-223.6c0,0.1-0.1,0.2-0.1,0.2C942.2-223.5,942.2-223.6,942.3-223.6z M941.9-222.8 c0,0.1-0.1,0.1-0.1,0.2C941.8-222.6,941.8-222.7,941.9-222.8z M941.4-221.9l-0.1,0.1C941.3-221.8,941.4-221.8,941.4-221.9z M942.5-224.3c0,0,0-0.1,0.1-0.1C942.6-224.4,942.6-224.4,942.5-224.3C942.6-224.3,942.5-224.3,942.5-224.3z\"></path><path fill=\"#363532\" d=\"M939.5-218.9C939.5-219,939.5-219,939.5-218.9c0.2-0.2,0.3-0.4,0.4-0.6 C939.8-219.3,939.6-219.1,939.5-218.9z\"></path></g><g id=\"mouse\"><path opacity=\"0.8\" fill=\"#2980B9\" enable-background=\"new \" d=\"M1471.8,116.1C1471.8,116.1,1471.8,116,1471.8,116.1 c-9.8-7.2-23.6-5.2-30.9,4.6l-0.1,0.1l-0.1,0.2l-24.6,33.3c-0.1,0.1-0.2,0.3-0.2,0.4l-1.3,1.8l0,0c-7.2,9.9-5,23.5,4.7,30.7 c9.8,7.3,23.7,5.1,30.9-4.6l26.2-35.5C1483.7,137.2,1481.6,123.3,1471.8,116.1z\"></path><g><g><path fill=\"#CCD1D9\" d=\"M1446.7,119.9L1446.7,119.9l-0.2,0.3l-24.6,33.3c-0.1,0.1-0.1,0.2-0.2,0.3l-1.2,1.6l0,0 c-7.3,10.1-5.1,23.6,4.7,30.9l52.4-70.9C1467.8,108.1,1454,110.2,1446.7,119.9z\"></path><path fill=\"#E6E9ED\" d=\"M1477.6,115.4L1477.6,115.4l-52.5,70.9c9.8,7.3,23.7,5.2,30.9-4.6l-0.1-0.1l0,0l0,0l0.1,0.1l26.2-35.4 C1489.5,136.5,1487.4,122.6,1477.6,115.4z\"></path></g></g></g><g id=\"iphone\"><path opacity=\"0.8\" fill=\"#2980B9\" enable-background=\"new \" d=\"M1456.8-184.7l38.5-44.1c3-3.5,2.7-8.8-0.8-11.8l-88.1-77 c-3.5-3-8.8-2.7-11.8,0.8l-38.5,44.1c-3,3.5-2.7,8.8,0.8,11.8l88.1,77C1448.4-180.9,1453.7-181.3,1456.8-184.7z\"></path><path fill=\"#434A54\" d=\"M1400.1-317.9l-38.5,44.1c-3,3.5-2.7,8.8,0.8,11.8l88.1,77c3.5,3,8.8,2.7,11.8-0.8l38.5-44.1 c3-3.5,2.7-8.8-0.8-11.8l-88.1-77C1408.4-321.7,1403.1-321.4,1400.1-317.9z\"></path><path fill=\"#586273\" d=\"M1488.2-240.9l-38.5,44.1l-81.8-71.5l0,0l38.5-44l0,0L1488.2-240.9z\"></path><rect x=\"1469.1\" y=\"-215.2\" transform=\"matrix(-0.658 0.753 -0.753 -0.658 2285.7109 -1464.3358)\" fill=\"#434A54\" width=\"12.5\" height=\"4.2\"></rect><path fill=\"#F7F9F8\" d=\"M1367.9-268.3L1367.9-268.3l81.8,71.5l38.5-44.1l-81.8-71.5l0,0L1367.9-268.3z\"></path><path fill=\"#44C650\" d=\"M1431.8-273.9l-5.5-2.6c-0.6-0.3-1.5-0.3-2.1,0l-9.2,4.3l0,0l-1.3-1.1c-0.4-2.2-1.7-4.6-3.9-6.4l-1.7-1.5 c-3-2.6-7.5-2.5-10,0.4l0,0l0,0l0,0c-2.5,2.9-2.1,7.3,0.9,10l1.7,1.5c2.1,1.9,4.6,2.9,6.9,3l1.3,1.1l0,0l-3.1,9.7 c-0.2,0.6,0,1.5,0.3,2.1l3.3,5.1c0.3,0.5,1,0.6,1.4,0.1l10.6-12.1l0,0l10.6-12.1C1432.5-273,1432.3-273.6,1431.8-273.9z\"></path><rect x=\"1415\" y=\"-254.7\" transform=\"matrix(-0.6579 0.7531 -0.7531 -0.6579 2187.2922 -1493.9065)\" fill=\"#DCE4E8\" width=\"35.9\" height=\"9\"></rect><rect x=\"1425.3\" y=\"-245.8\" transform=\"matrix(-0.658 0.753 -0.753 -0.658 2211.1824 -1486.7847)\" fill=\"#DCE4E8\" width=\"35.9\" height=\"9\"></rect><rect x=\"1444\" y=\"-236.9\" transform=\"matrix(-0.658 0.753 -0.753 -0.658 2234.0796 -1479.3865)\" fill=\"#DCE4E8\" width=\"17.9\" height=\"9\"></rect><circle fill=\"#586273\" cx=\"1434.1\" cy=\"-231.2\" r=\"1.7\"></circle><circle fill=\"#586273\" cx=\"1440\" cy=\"-237.9\" r=\"1.7\"></circle><circle fill=\"#586273\" cx=\"1437.1\" cy=\"-234.5\" r=\"1.7\"></circle><path fill=\"#586273\" d=\"M1444.1-242.6c0.7,0.6,0.8,1.7,0.1,2.4c-0.6,0.7-1.7,0.8-2.4,0.2c-0.7-0.6-0.8-1.7-0.1-2.4 C1442.3-243.1,1443.4-243.2,1444.1-242.6z\"></path><circle fill=\"#586273\" cx=\"1424\" cy=\"-240\" r=\"1.7\"></circle><circle fill=\"#586273\" cx=\"1435.8\" cy=\"-253.5\" r=\"1.7\"></circle><circle fill=\"#586273\" cx=\"1429.9\" cy=\"-246.8\" r=\"1.7\"></circle><circle fill=\"#586273\" cx=\"1427\" cy=\"-243.4\" r=\"1.7\"></circle><circle fill=\"#586273\" cx=\"1432.9\" cy=\"-250.1\" r=\"1.7\"></circle><rect x=\"1448.7\" y=\"-233.5\" transform=\"matrix(-0.6578 0.7532 -0.7532 -0.6578 2234.1545 -1479.4175)\" fill=\"#E74C3C\" width=\"9\" height=\"2.7\"></rect><path fill=\"none\" d=\"M1400.1-317.9l-29.9,34.2l113.6,73.3l17.1-19.5c3-3.5,2.7-8.8-0.8-11.8l-88.1-77 C1408.4-321.7,1403.1-321.4,1400.1-317.9z\"></path></g><g id=\"matita1\"><polygon opacity=\"0.8\" fill=\"#2980B9\" enable-background=\"new \" points=\"1614,-48.9 1552,-176.9 1546.7,-174.3 1541.3,-171.8 1603.4,-43.7 1608.7,-46.3 \"></polygon><polygon fill=\"#2980B9\" points=\"1617.8,-30.9 1614,-48.9 1603.4,-43.7 1615.1,-29.6 1619.1,-25 \"></polygon><g><g><polygon fill=\"#58585C\" points=\"1612.8,-47.4 1553.4,-170.1 1550.8,-175.4 1545.4,-172.9 1607.5,-44.8 \"></polygon><polygon fill=\"#58585C\" points=\"1612.8,-47.4 1618.1,-50 1556.1,-178 1550.8,-175.4 1553.4,-170.1 \"></polygon></g><g><polygon fill=\"#464E5C\" points=\"1623.1,-26 1621.9,-32 1619.2,-30.7 \"></polygon><polygon fill=\"#F7D39A\" points=\"1621.9,-32 1618.1,-50 1607.5,-44.8 1619.2,-30.7 \"></polygon></g><g><rect x=\"1552.5\" y=\"-161.6\" transform=\"matrix(0.8998 -0.4362 0.4362 0.8998 225.6327 663.8549)\" fill=\"#DA4453\" width=\"11.9\" height=\"4.4\"></rect></g></g></g><g id=\"foglio2\"><g><g opacity=\"0.8\"><g><polygon fill=\"#2980B9\" points=\"661.6,-360.2 637.5,-171.7 788.3,-152.4 812.4,-341 814,-353.5 663.3,-372.8 \"></polygon></g></g><g><g><rect x=\"652.3\" y=\"-354\" transform=\"matrix(-0.9919 -0.1268 0.1268 -0.9919 1483.5524 -423.5044)\" fill=\"#EBF4FF\" width=\"151.9\" height=\"190\"></rect></g></g><g><g><rect x=\"665.2\" y=\"-366\" transform=\"matrix(-0.9919 -0.1268 0.1268 -0.9919 1522.0137 -622.353)\" fill=\"#44C650\" width=\"151.9\" height=\"12.7\"></rect></g></g><g><g><rect x=\"699.4\" y=\"-287.6\" transform=\"matrix(0.9919 0.1268 -0.1268 0.9919 -29.9638 -91.7566)\" fill=\"none\" width=\"12.7\" height=\"12.7\"></rect></g></g><g><g><rect x=\"721.8\" y=\"-285.2\" transform=\"matrix(-0.9919 -0.1267 0.1267 -0.9919 1479.871 -469.906)\" fill=\"none\" width=\"6.3\" height=\"6.3\"></rect></g></g><g><g><rect x=\"676.6\" y=\"-301.7\" transform=\"matrix(-0.9919 -0.1268 0.1268 -0.9919 1448.6362 -507.9211)\" fill=\"#434A54\" width=\"63.2\" height=\"3.2\"></rect></g></g><g><g><rect x=\"745.6\" y=\"-294.2\" transform=\"matrix(-0.9919 -0.1268 0.1268 -0.9919 1563.3064 -485.6218)\" fill=\"#3498DB\" width=\"41.1\" height=\"3.2\"></rect></g></g><g><g><rect x=\"669.3\" y=\"-292.4\" transform=\"matrix(-0.9919 -0.1268 0.1268 -0.9919 1492.8707 -486.5058)\" fill=\"#3498DB\" width=\"123.4\" height=\"3.2\"></rect></g></g><g><g><rect x=\"674.9\" y=\"-291.2\" transform=\"matrix(-0.9919 -0.1268 0.1268 -0.9919 1412.6401 -489.218)\" fill=\"#3498DB\" width=\"31.6\" height=\"3.2\"></rect></g></g><g><g><rect x=\"712.7\" y=\"-287.4\" transform=\"matrix(-0.9919 -0.1269 0.1269 -0.9919 1468.4655 -477.9913)\" fill=\"#434A54\" width=\"12.7\" height=\"3.2\"></rect></g></g><g><g><rect x=\"731.3\" y=\"-282.6\" transform=\"matrix(-0.9919 -0.1268 0.1268 -0.9919 1546.0007 -463.5307)\" fill=\"#3498DB\" width=\"53.8\" height=\"3.2\"></rect></g></g><g><g><rect x=\"659.1\" y=\"-242\" transform=\"matrix(-0.9919 -0.1268 0.1268 -0.9919 1374.9282 -393.2146)\" fill=\"#434A54\" width=\"31.6\" height=\"3.2\"></rect></g></g><g><g><rect x=\"657.6\" y=\"-230.4\" transform=\"matrix(-0.9919 -0.1269 0.1269 -0.9919 1357.7578 -371.0533)\" fill=\"#434A54\" width=\"19\" height=\"3.2\"></rect></g></g><g><g><rect x=\"682.7\" y=\"-227.5\" transform=\"matrix(-0.9919 -0.1269 0.1269 -0.9919 1401.1088 -362.4891)\" fill=\"#434A54\" width=\"12.7\" height=\"3.2\"></rect></g></g><g><g><rect x=\"658.4\" y=\"-236.3\" transform=\"matrix(-0.9919 -0.1268 0.1268 -0.9919 1366.3418 -382.3688)\" fill=\"#434A54\" width=\"25.3\" height=\"3.2\"></rect></g></g><g><g><rect x=\"656.7\" y=\"-223.2\" transform=\"matrix(-0.9919 -0.1268 0.1268 -0.9919 1367.7651 -356.0743)\" fill=\"#434A54\" width=\"31.6\" height=\"3.2\"></rect></g></g><g><g><rect x=\"662\" y=\"-278\" transform=\"matrix(-0.9919 -0.1269 0.1269 -0.9919 1389.6722 -435.6954)\" fill=\"#CCD1D9\" width=\"38\" height=\"31.7\"></rect></g></g><g><g><rect x=\"704.5\" y=\"-223.2\" transform=\"matrix(-0.9919 -0.1268 0.1268 -0.9919 1469.3522 -349.613)\" fill=\"#434A54\" width=\"38\" height=\"3.2\"></rect></g></g><g><g><rect x=\"703.8\" y=\"-218.5\" transform=\"matrix(-0.9919 -0.1268 0.1268 -0.9919 1442.1653 -341.9422)\" fill=\"#434A54\" width=\"12.7\" height=\"3.2\"></rect></g></g><g><g><rect x=\"722.9\" y=\"-216.5\" transform=\"matrix(-0.9919 -0.127 0.127 -0.9919 1473.4435 -335.7908)\" fill=\"#434A54\" width=\"6.3\" height=\"3.2\"></rect></g></g><g><g><rect x=\"705.4\" y=\"-230.7\" transform=\"matrix(-0.9919 -0.1268 0.1268 -0.9919 1453.1733 -365.6424)\" fill=\"#434A54\" width=\"19\" height=\"3.2\"></rect></g></g><g><g><rect x=\"730.6\" y=\"-227.7\" transform=\"matrix(-0.9919 -0.1268 0.1268 -0.9919 1496.7142 -356.863)\" fill=\"#434A54\" width=\"12.7\" height=\"3.2\"></rect></g></g><g><g><rect x=\"706.2\" y=\"-236\" transform=\"matrix(-0.9919 -0.1268 0.1268 -0.9919 1467.985 -375.2925)\" fill=\"#434A54\" width=\"31.6\" height=\"3.2\"></rect></g></g><g><g><rect x=\"708.9\" y=\"-272\" transform=\"matrix(-0.9919 -0.1268 0.1268 -0.9919 1482.496 -417.8746)\" fill=\"#CCD1D9\" width=\"38\" height=\"31.7\"></rect></g></g><g><g><rect x=\"753.3\" y=\"-229.7\" transform=\"matrix(-0.9919 -0.1268 0.1268 -0.9919 1567.382 -356.3694)\" fill=\"#434A54\" width=\"38\" height=\"3.2\"></rect></g></g><g><g><rect x=\"751.8\" y=\"-217.9\" transform=\"matrix(-0.9919 -0.1269 0.1269 -0.9919 1550.082 -333.7985)\" fill=\"#434A54\" width=\"25.3\" height=\"3.2\"></rect></g></g><g><g><rect x=\"753.6\" y=\"-225\" transform=\"matrix(-0.9919 -0.1268 0.1268 -0.9919 1542.1865 -348.5718)\" fill=\"#434A54\" width=\"12.7\" height=\"3.2\"></rect></g></g><g><g><rect x=\"750.9\" y=\"-212.1\" transform=\"matrix(-0.9919 -0.1268 0.1268 -0.9919 1541.4469 -322.8246)\" fill=\"#434A54\" width=\"19\" height=\"3.2\"></rect></g></g><g><g><rect x=\"776.1\" y=\"-209.2\" transform=\"matrix(-0.9919 -0.1268 0.1268 -0.9919 1584.9996 -314.2462)\" fill=\"#434A54\" width=\"12.7\" height=\"3.2\"></rect></g></g><g><g><rect x=\"771.4\" y=\"-222.1\" transform=\"matrix(-0.9919 -0.1269 0.1269 -0.9919 1583.3781 -340.0762)\" fill=\"#434A54\" width=\"19\" height=\"3.2\"></rect></g></g><g><g><rect x=\"756.1\" y=\"-265.9\" transform=\"matrix(-0.9919 -0.1268 0.1268 -0.9919 1575.7483 -399.8367)\" fill=\"#CCD1D9\" width=\"38\" height=\"31.6\"></rect></g></g><g><g><rect x=\"669.2\" y=\"-322\" transform=\"matrix(-0.9919 -0.1268 0.1268 -0.9919 1505.2805 -535.4182)\" fill=\"#CCD1D9\" width=\"132.9\" height=\"12.7\"></rect></g></g><g><g><g><rect x=\"676.1\" y=\"-324\" transform=\"matrix(-0.9919 -0.1268 0.1268 -0.9919 1400.9645 -555.5596)\" fill=\"#E5E5E5\" width=\"13.3\" height=\"3.2\"></rect></g></g></g><g><g><g><rect x=\"695.8\" y=\"-325.4\" transform=\"matrix(-0.9919 -0.1268 0.1268 -0.9919 1453.0239 -545.5476)\" fill=\"#434A54\" width=\"26.6\" height=\"12.7\"></rect></g></g><g><g><rect x=\"702.7\" y=\"-320.6\" transform=\"matrix(-0.9919 -0.1268 0.1268 -0.9919 1453.3215 -545.4236)\" fill=\"#E5E5E5\" width=\"13.3\" height=\"3.2\"></rect></g></g></g><g><g><g><rect x=\"729\" y=\"-317.2\" transform=\"matrix(-0.9919 -0.1269 0.1269 -0.9919 1505.3173 -535.2484)\" fill=\"#E5E5E5\" width=\"13.3\" height=\"3.2\"></rect></g></g></g><g><g><g><rect x=\"755.3\" y=\"-313.9\" transform=\"matrix(-0.9919 -0.1268 0.1268 -0.9919 1557.444 -525.3995)\" fill=\"#E5E5E5\" width=\"13.3\" height=\"3.2\"></rect></g></g></g><g><g><g><rect x=\"781.7\" y=\"-310.5\" transform=\"matrix(-0.9919 -0.1268 0.1268 -0.9919 1609.5958 -515.2783)\" fill=\"#E5E5E5\" width=\"13.3\" height=\"3.2\"></rect></g></g></g><g><g><g><rect x=\"675\" y=\"-339.3\" transform=\"matrix(-0.9919 -0.1268 0.1268 -0.9919 1462.9613 -582.2106)\" fill=\"#CCD1D9\" width=\"76\" height=\"3.2\"></rect></g></g><g><g><rect x=\"676\" y=\"-349.2\" transform=\"matrix(-0.9919 -0.1268 0.1268 -0.9919 1409.4409 -605.4177)\" fill=\"#CCD1D9\" width=\"19\" height=\"3.2\"></rect></g></g></g><g><g><rect x=\"653\" y=\"-202.6\" transform=\"matrix(-0.9919 -0.1268 0.1268 -0.9919 1457.2714 -287.0837)\" fill=\"#CCD1D9\" width=\"132.9\" height=\"25.3\"></rect></g></g></g></g><g id=\"foglio1\"><rect x=\"489.5\" y=\"-374\" transform=\"matrix(-0.9495 0.3137 -0.3137 -0.9495 1025.662 -690.8043)\" fill=\"#2980B9\" width=\"157.9\" height=\"222.2\"></rect><g><g><g><g><rect x=\"459.3\" y=\"-341.2\" transform=\"matrix(-0.3137 -0.9495 0.9495 -0.3137 998.4096 197.0747)\" fill=\"#F7F9F8\" width=\"222.2\" height=\"157.9\"></rect></g></g></g><g><rect x=\"565\" y=\"-319.4\" transform=\"matrix(-0.9495 0.3137 -0.3137 -0.9495 1057.7255 -802.9304)\" fill=\"#B7BFC7\" width=\"57\" height=\"6\"></rect><rect x=\"567.9\" y=\"-309.9\" transform=\"matrix(-0.9495 0.3137 -0.3137 -0.9495 1066.5258 -785.3304)\" fill=\"#DCE4E8\" width=\"57\" height=\"6\"></rect><rect x=\"571.2\" y=\"-300.3\" transform=\"matrix(-0.9495 0.3137 -0.3137 -0.9495 1075.8053 -767.6155)\" fill=\"#DCE4E8\" width=\"57\" height=\"6\"></rect><rect x=\"574.3\" y=\"-290.9\" transform=\"matrix(-0.9495 0.3137 -0.3137 -0.9495 1084.7795 -750.2712)\" fill=\"#DCE4E8\" width=\"57\" height=\"6\"></rect></g><rect x=\"484\" y=\"-325.3\" transform=\"matrix(-0.9495 0.3137 -0.3137 -0.9495 972.8923 -801.1075)\" fill=\"#DCE4E8\" width=\"133.9\" height=\"6\"></rect><rect x=\"477.6\" y=\"-354.3\" transform=\"matrix(-0.9495 0.3137 -0.3137 -0.9495 954.6384 -836.168)\" fill=\"#B7BFC7\" width=\"133.9\" height=\"26\"></rect><g><rect x=\"505.2\" y=\"-260.7\" transform=\"matrix(-0.9495 0.3137 -0.3137 -0.9495 1034.5391 -681.7959)\" fill=\"#DCE4E8\" width=\"133.9\" height=\"6\"></rect><rect x=\"508.5\" y=\"-251.3\" transform=\"matrix(-0.9495 0.3137 -0.3137 -0.9495 1043.8998 -664.508)\" fill=\"#DCE4E8\" width=\"133.9\" height=\"6\"></rect><rect x=\"511.4\" y=\"-241.8\" transform=\"matrix(-0.9495 0.3137 -0.3137 -0.9495 1052.6991 -646.9097)\" fill=\"#DCE4E8\" width=\"133.9\" height=\"6\"></rect></g><g><rect x=\"529.7\" y=\"-186.7\" transform=\"matrix(-0.9495 0.3137 -0.3137 -0.9495 1105.4739 -545.1959)\" fill=\"#DCE4E8\" width=\"133.9\" height=\"6\"></rect><rect x=\"533.7\" y=\"-172.4\" transform=\"matrix(-0.9495 0.3137 -0.3137 -0.9495 1088.6201 -513.9367)\" fill=\"#DCE4E8\" width=\"104\" height=\"6\"></rect></g><g><rect x=\"518.6\" y=\"-216.6\" transform=\"matrix(-0.9495 0.3137 -0.3137 -0.9495 1030.7095 -592.9636)\" fill=\"#B7BFC7\" width=\"89\" height=\"6\"></rect><rect x=\"521.7\" y=\"-207.2\" transform=\"matrix(-0.9495 0.3137 -0.3137 -0.9495 1039.6815 -575.6193)\" fill=\"#DCE4E8\" width=\"89\" height=\"6\"></rect><rect x=\"524.9\" y=\"-197.6\" transform=\"matrix(-0.9495 0.3137 -0.3137 -0.9495 1048.9579 -557.9011)\" fill=\"#DCE4E8\" width=\"89\" height=\"6\"></rect><rect x=\"617\" y=\"-239.8\" transform=\"matrix(-0.9496 0.3136 -0.3136 -0.9496 1165.8519 -641.0854)\" fill=\"#44C650\" width=\"35\" height=\"26\"></rect></g><g><rect x=\"497.7\" y=\"-288\" transform=\"matrix(-0.9495 0.3137 -0.3137 -0.9495 892.2896 -683.6794)\" fill=\"#DCE4E8\" width=\"7\" height=\"36\"></rect><rect x=\"507.2\" y=\"-291.3\" transform=\"matrix(-0.9495 0.3138 -0.3138 -0.9495 909.7889 -692.9809)\" fill=\"#DCE4E8\" width=\"7\" height=\"36\"></rect><rect x=\"516.7\" y=\"-294.4\" transform=\"matrix(-0.9495 0.3138 -0.3138 -0.9495 927.3488 -701.9917)\" fill=\"#DCE4E8\" width=\"7\" height=\"36\"></rect><rect x=\"526.3\" y=\"-297.5\" transform=\"matrix(-0.9495 0.3138 -0.3138 -0.9495 945.0789 -711.0957)\" fill=\"#DCE4E8\" width=\"7\" height=\"36\"></rect><rect x=\"535.7\" y=\"-300.7\" transform=\"matrix(-0.9495 0.3137 -0.3137 -0.9495 962.4186 -720.1851)\" fill=\"#DCE4E8\" width=\"7\" height=\"36\"></rect><rect x=\"545.2\" y=\"-303.8\" transform=\"matrix(-0.9496 0.3134 -0.3134 -0.9496 980.1196 -729.0641)\" fill=\"#DCE4E8\" width=\"7\" height=\"36\"></rect><rect x=\"554.8\" y=\"-306.8\" transform=\"matrix(-0.9495 0.3138 -0.3138 -0.9495 997.7372 -738.1511)\" fill=\"#DCE4E8\" width=\"7\" height=\"36\"></rect><rect x=\"500.9\" y=\"-268.6\" transform=\"matrix(-0.9496 0.3134 -0.3134 -0.9496 901.653 -666.0458)\" fill=\"#E74C3C\" width=\"7\" height=\"16\"></rect><rect x=\"509.9\" y=\"-274.7\" transform=\"matrix(-0.9495 0.3137 -0.3137 -0.9495 917.6191 -677.9631)\" fill=\"#E74C3C\" width=\"7\" height=\"19\"></rect><rect x=\"520.6\" y=\"-270.9\" transform=\"matrix(-0.9495 0.3138 -0.3138 -0.9495 938.5629 -680.8547)\" fill=\"#E74C3C\" width=\"7\" height=\"12\"></rect><rect x=\"528.4\" y=\"-283.9\" transform=\"matrix(-0.9495 0.3137 -0.3137 -0.9495 951.262 -698.7794)\" fill=\"#E74C3C\" width=\"7\" height=\"22\"></rect><rect x=\"537.3\" y=\"-290.9\" transform=\"matrix(-0.9495 0.3137 -0.3137 -0.9495 967.0631 -711.3167)\" fill=\"#E74C3C\" width=\"7\" height=\"26\"></rect><rect x=\"550\" y=\"-274.5\" transform=\"matrix(-0.9495 0.3138 -0.3138 -0.9495 993.7911 -702.9451)\" fill=\"#E74C3C\" width=\"7\" height=\"6\"></rect><rect x=\"557.9\" y=\"-287.4\" transform=\"matrix(-0.9496 0.3134 -0.3134 -0.9496 1006.8622 -720.6096)\" fill=\"#E74C3C\" width=\"7\" height=\"16\"></rect></g></g></g><g id=\"occhiali\"><g><g><path fill=\"#586273\" d=\"M631.1-243.7c-1.3-0.2-2.2-1.5-2-2.8c1.6-9.2-4.6-18.1-13.8-19.7L529-281.4c-1.3-0.2-2.2-1.5-2-2.8 s1.5-2.2,2.8-2l86.3,15.2c11.9,2.1,19.9,13.5,17.8,25.4C633.7-244.4,632.4-243.5,631.1-243.7z\"></path></g></g><g><g><g><path fill=\"#586273\" d=\"M631.1-243.7c-1.3-0.2-2.2-1.5-2-2.8c1.6-9.2-4.6-18.1-13.8-19.7L529-281.4c-1.3-0.2-2.2-1.5-2-2.8 s1.5-2.2,2.8-2l86.3,15.2c11.9,2.1,19.9,13.5,17.8,25.4C633.7-244.4,632.4-243.5,631.1-243.7z\"></path></g></g><g><g><path fill=\"#586273\" d=\"M535.3-260.6c-1.3-0.2-2.2-1.5-2-2.8c2.1-11.9,13.5-19.9,25.4-17.8L645-266c1.3,0.2,2.2,1.5,2,2.8 s-1.5,2.2-2.8,2l-86.3-15.2c-9.2-1.6-18.1,4.6-19.7,13.8C537.8-261.2,536.6-260.4,535.3-260.6z\"></path></g></g></g><g opacity=\"0.3\"><g><g><path fill=\"#EFEEEE\" d=\"M574-256.2c-0.9,5.3-6,8.8-11.3,7.9l-28.8-5.1c-5.3-0.9-8.8-6-7.9-11.3l3.4-19.2 c0.9-5.3,6-8.8,11.3-7.9l28.8,5.1c5.3,0.9,8.8,6,7.9,11.3L574-256.2z\"></path></g></g></g><g opacity=\"0.3\"><g><g><path fill=\"#EFEEEE\" d=\"M641.1-244.4c-0.9,5.3-6,8.8-11.3,7.9l-28.8-5.1c-5.3-0.9-8.8-6-7.9-11.3l3.4-19.2 c0.9-5.3,6-8.8,11.3-7.9l28.8,5.1c5.3,0.9,8.8,6,7.9,11.3L641.1-244.4z\"></path></g></g></g><g><g><path fill=\"#586273\" d=\"M593.6-255.3c-1.3-0.2-2.2-1.5-2-2.8c0.7-4-2-7.8-5.9-8.5c-4-0.7-7.8,2-8.5,5.9c-0.2,1.3-1.5,2.2-2.8,2 s-2.2-1.5-2-2.8c1.2-6.6,7.5-11,14.1-9.9c6.6,1.2,11,7.5,9.9,14.1C596.2-255.9,594.9-255,593.6-255.3z\"></path></g></g><g opacity=\"0.3\"><path fill=\"#EFEEEE\" d=\"M540.7-291.4c-5.3-0.9-10.2,2.3-11.1,7.6l-3.4,19.2c-0.9,5.3,2.5,10.8,7.8,11.7l14.1,2.5l6.8-38.4 L540.7-291.4z\"></path></g><g opacity=\"0.3\"><path fill=\"#EFEEEE\" d=\"M607.8-279.6c-5.3-0.9-9.4,2.4-10.3,7.7l-3.4,19.2c-0.9,5.3,1.6,10.6,6.9,11.5l14,2.5l6.8-38.4 L607.8-279.6z\"></path></g><g><g><path fill=\"none\" d=\"M636.2-272.5l-28.8-5.1c-4-0.7-7.8,2-8.5,5.9l-3.4,19.2c-0.7,4,2,7.8,5.9,8.5l28.8,5.1c4,0.7,7.8-2,8.5-5.9 l3.4-19.2C642.8-268,640.1-271.8,636.2-272.5z\"></path></g><g><path fill=\"none\" d=\"M569.1-284.3l-28.8-5.1c-4-0.7-7.8,2-8.5,5.9l-3.4,19.2c-0.7,4,2,7.8,5.9,8.5l28.8,5.1c4,0.7,7.8-2,8.5-5.9 l3.4-19.2C575.7-279.8,573-283.6,569.1-284.3z\"></path></g><g><path fill=\"#586273\" d=\"M569.9-289.1l-28.8-5.1c-6.6-1.2-12.9,3.3-14.1,9.9l-3.4,19.2c-1.2,6.6,3.3,12.9,9.9,14.1l28.8,5.1 c6.6,1.2,12.9-3.3,14.1-9.9l3.4-19.2C580.9-281.6,576.5-287.9,569.9-289.1z M571.6-256.7c-0.7,4-4.5,6.6-8.5,5.9l-28.8-5.1 c-4-0.7-6.6-4.5-5.9-8.5l3.4-19.2c0.7-4,4.5-6.6,8.5-5.9l28.8,5.1c4,0.7,6.6,4.5,5.9,8.5L571.6-256.7z\"></path></g><g><path fill=\"#586273\" d=\"M637-277.3l-28.8-5.1c-6.6-1.2-12.9,3.3-14.1,9.9l-3.4,19.2c-1.2,6.6,3.3,12.9,9.9,14.1l28.8,5.1 c6.6,1.2,12.9-3.3,14.1-9.9l3.4-19.2C648-269.8,643.6-276.1,637-277.3z M638.7-244.8c-0.7,4-4.5,6.6-8.5,5.9l-28.8-5.1 c-4-0.7-6.6-4.5-5.9-8.5l3.4-19.2c0.7-4,4.5-6.6,8.5-5.9l28.8,5.1c4,0.7,6.6,4.5,5.9,8.5L638.7-244.8z\"></path></g></g></g><g id=\"calcolatrice\"><path opacity=\"0.8\" fill=\"#2980B9\" enable-background=\"new \" d=\"M1682.1-330.8l-33.9-36.1c-2.6-2.8-7.1-2.9-9.9-0.3l-53.9,50.6 c-2.8,2.6-2.9,7.1-0.3,9.9l33.9,36.1c2.6,2.8,7.1,2.9,9.9,0.3l53.9-50.6C1684.6-323.5,1684.8-328,1682.1-330.8z\"></path><g><path fill=\"#F7F9F8\" d=\"M1588.4-316.6c-2.8,2.6-2.9,7.1-0.3,9.9l33.9,36.1c2.6,2.8,7.1,2.9,9.9,0.3l53.9-50.6 c2.8-2.6,2.9-7.1,0.3-9.9l-33.9-36.1c-2.6-2.8-7.1-2.9-9.9-0.3L1588.4-316.6z\"></path><g><rect x=\"1624.9\" y=\"-345.1\" transform=\"matrix(-0.6844 -0.7291 0.7291 -0.6844 2992.9622 614.626)\" fill=\"#E74C3C\" width=\"9.3\" height=\"9.3\"></rect><rect x=\"1634.4\" y=\"-334.9\" transform=\"matrix(-0.6844 -0.7291 0.7291 -0.6844 3001.5701 638.7821)\" fill=\"#E74C3C\" width=\"9.3\" height=\"9.3\"></rect><rect x=\"1644\" y=\"-324.6\" transform=\"matrix(-0.6844 -0.7291 0.7291 -0.6844 3010.2852 663.1724)\" fill=\"#E74C3C\" width=\"9.3\" height=\"9.3\"></rect><rect x=\"1653.5\" y=\"-314.4\" transform=\"matrix(-0.6844 -0.7291 0.7291 -0.6844 3018.8994 687.2864)\" fill=\"#E74C3C\" width=\"9.3\" height=\"9.3\"></rect><rect x=\"1614.6\" y=\"-335.6\" transform=\"matrix(-0.6845 -0.729 0.729 -0.6845 2968.8669 622.9996)\" fill=\"#E74C3C\" width=\"9.3\" height=\"9.3\"></rect><rect x=\"1624.3\" y=\"-325.4\" transform=\"matrix(-0.6844 -0.7291 0.7291 -0.6844 2977.6382 647.3981)\" fill=\"#E74C3C\" width=\"9.3\" height=\"9.3\"></rect><rect x=\"1633.7\" y=\"-315\" transform=\"matrix(-0.6843 -0.7292 0.7292 -0.6843 2985.7969 672.0587)\" fill=\"#E74C3C\" width=\"9.3\" height=\"9.3\"></rect><rect x=\"1643.5\" y=\"-304.8\" transform=\"matrix(-0.6844 -0.7291 0.7291 -0.6844 2994.8955 696.1037)\" fill=\"#E74C3C\" width=\"9.3\" height=\"9.3\"></rect><rect x=\"1604.3\" y=\"-325.9\" transform=\"matrix(-0.6843 -0.7292 0.7292 -0.6843 2944.1812 632.2205)\" fill=\"#E74C3C\" width=\"9.3\" height=\"9.3\"></rect><rect x=\"1614\" y=\"-315.6\" transform=\"matrix(-0.6844 -0.7291 0.7291 -0.6844 2953.1931 656.4695)\" fill=\"#E74C3C\" width=\"9.3\" height=\"9.3\"></rect><rect x=\"1623.6\" y=\"-305.5\" transform=\"matrix(-0.6844 -0.7291 0.7291 -0.6844 2961.9236 680.4485)\" fill=\"#E74C3C\" width=\"9.3\" height=\"9.3\"></rect><rect x=\"1633.2\" y=\"-295.1\" transform=\"matrix(-0.6844 -0.7291 0.7291 -0.6844 2970.5327 704.8375)\" fill=\"#E74C3C\" width=\"9.3\" height=\"9.3\"></rect><rect x=\"1594.2\" y=\"-316.3\" transform=\"matrix(-0.6845 -0.729 0.729 -0.6845 2920.3965 640.5447)\" fill=\"#E74C3C\" width=\"9.3\" height=\"9.3\"></rect><rect x=\"1603.8\" y=\"-306\" transform=\"matrix(-0.6846 -0.729 0.729 -0.6846 2929.2522 664.8574)\" fill=\"#E74C3C\" width=\"9.3\" height=\"9.3\"></rect><rect x=\"1611.1\" y=\"-290.5\" transform=\"matrix(-0.6844 -0.7291 0.7291 -0.6844 2941.8328 701.5938)\" fill=\"#656D78\" width=\"23.4\" height=\"9.3\"></rect></g><rect x=\"1631.8\" y=\"-347.2\" transform=\"matrix(-0.6844 -0.7291 0.7291 -0.6844 3038.2734 639.4577)\" fill=\"#2C3E50\" width=\"51.4\" height=\"18.7\"></rect><rect x=\"1661.7\" y=\"-335.7\" transform=\"matrix(-0.6843 -0.7292 0.7292 -0.6843 3044.1672 655.7499)\" fill=\"#ECF0F1\" width=\"4.7\" height=\"9.3\"></rect><rect x=\"1668\" y=\"-328.9\" transform=\"matrix(-0.6848 -0.7288 0.7288 -0.6848 3050.3889 671.0242)\" fill=\"#ECF0F1\" width=\"4.7\" height=\"9.4\"></rect><rect x=\"1648.9\" y=\"-349.2\" transform=\"matrix(-0.6842 -0.7293 0.7293 -0.6842 3032.2668 623.8472)\" fill=\"#ECF0F1\" width=\"4.7\" height=\"9.3\"></rect><rect x=\"1655.2\" y=\"-342.4\" transform=\"matrix(-0.6843 -0.7292 0.7292 -0.6843 3038.1096 639.7585)\" fill=\"#ECF0F1\" width=\"4.7\" height=\"9.3\"></rect></g></g><g id=\"hellocontainer\"><text id=\"hello\" transform=\"matrix(1 0 0 1 526.8582 21.0823)\" fill=\"#ECF0F1\" font-weight=\"900\" font-size=\"120px\">hello</text></g><g id=\"subtitle\"><text id=\"scrolldown\" transform=\"matrix(1 0 0 1 905.7269 21.0823)\" fill=\"#F5ECD9\" font-weight=\"400\" font-size=\"14px\">scroll down</text><text id=\"viewresume\" transform=\"matrix(1 0 0 1 980.327 21.0823)\" fill=\"#DED6C7\" font-weight=\"400\" font-size=\"14px\">or just view my resume.</text></g></g><g id=\"intro3\"><text transform=\"matrix(1 0 0 1 531.193 283.9221)\" fill=\"#01050A\" font-weight=\"100\" font-size=\"18px\">a design and technology hybrid .</text><text transform=\"matrix(1 0 0 1 529.3051 224.3221)\" fill=\"#01050A\" font-weight=\"100\" font-size=\"18px\"> - Participate in the design process: Discover, Ideate, Design &amp; Def ine </text><text transform=\"matrix(1 0 0 1 529.3051 245.9221)\" fill=\"#01050A\" font-weight=\"100\" font-size=\"18px\"> - Leads the UI development efforts across all web applications, ensuring best practices are followed at all times. </text><text transform=\"matrix(1 0 0 1 529.3051 202.1221)\" fill=\"#01050A\" font-weight=\"100\" font-size=\"18px\">* An engineer who has the technical knowhow and edge to create production code and: </text></g><g id=\"intro2\"><text id=\"h\" transform=\"matrix(1 0 0 1 526.8451 145.9221)\" fill=\"#F5F7FA\" font-weight=\"100\" font-size=\"30px\">I’m Lead Product Design Engineer* @ Workshare.com, London</text></g><g id=\"intro1\"><text transform=\"matrix(1 0 0 1 527.3451 60.4757)\" fill=\"#ECF0F1\" font-weight=\"100\" font-size=\"30px\">I’m Albino Tonnina,</text><text transform=\"matrix(1 0 0 1 527.3451 96.4757)\" fill=\"#ECF0F1\" font-weight=\"100\" font-size=\"30px\">a self-taught developer.</text></g></svg>"

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = "<div class=\"scene-content\">\n\n\n\n</div>\n\n<div class=\"svg\"></div>\n";

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scene_svg__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scene_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__scene_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scene_html__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scene_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__scene_html__);



/* harmony default export */ __webpack_exports__["a"] = ({
  init: function init() {
    document.querySelector('[data-scene="scene2"]').innerHTML = __WEBPACK_IMPORTED_MODULE_1__scene_html___default.a;
    document.querySelector('[data-scene="scene2"] .svg').innerHTML = __WEBPACK_IMPORTED_MODULE_0__scene_svg___default.a;
  }
});

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = "<svg version=\"1.1\" id=\"svg2\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"496 -368 1024 768\" enable-background=\"new 496 -368 1024 768\" xml:space=\"preserve\"><g id=\"sky\"><rect x=\"-6918.9\" y=\"-7417.1\" fill=\"#3498DB\" stroke=\"#000000\" stroke-miterlimit=\"10\" width=\"15687.9\" height=\"14889\"></rect></g><g id=\"mountains\"><g><polygon fill=\"#14757B\" points=\"321.6,136.5 493.1,315.2 337.7,331.4 \"></polygon><polygon fill=\"#ACE8EA\" points=\"128.3,293.5 185.8,230.7 209.6,268.2 132.7,485.8 \"></polygon><polygon fill=\"#ACE8EA\" points=\"-323.2,721.2 -204.3,204.2 -57.5,733.6 \"></polygon><polygon fill=\"#F5ECD9\" points=\"-204.3,204.2 -118.2,155.3 -57.5,733.6 \"></polygon><polygon fill=\"#FFFFFF\" points=\"-115.8,179.4 -118.2,155.3 -36.1,-0.1 58.9,335.2 \"></polygon><polygon fill=\"#229098\" points=\"-57.5,733.6 58.9,335.2 -95.2,178.6 -115.8,179.4 \"></polygon><polygon fill=\"#F5ECD9\" points=\"185.8,773.4 -57.5,733.6 58.9,335.2 128.3,293.5 \"></polygon><polygon fill=\"#C1E8E7\" points=\"-36.1,-0.1 128.3,293.5 58.9,335.2 \"></polygon><polygon fill=\"#FFFFFF\" points=\"185.8,230.7 321.6,136.5 350.9,490.4 \"></polygon><polygon fill=\"#14757B\" points=\"132.7,485.8 200.5,852.9 350.9,490.4 209.6,268.2 \"></polygon><polygon fill=\"#ACE8EA\" points=\"173.2,704.9 200.5,852.9 132.7,485.8 -57.5,733.6 \"></polygon><polygon fill=\"#229098\" points=\"321.6,136.5 337.7,331.4 350.9,490.4 \"></polygon><polygon fill=\"#14757B\" points=\"339.1,819.4 350.9,490.4 200.5,852.9 \"></polygon><polygon fill=\"#229098\" points=\"602.4,830.3 339.1,819.4 350.9,490.4 \"></polygon><polygon fill=\"#ACE8EA\" points=\"602.4,830.3 493.1,315.2 350.9,490.4 \"></polygon><polygon fill=\"#F5ECD9\" points=\"602.4,830.3 758.9,830.1 493.1,315.2 \"></polygon><polygon fill=\"#14757B\" points=\"493.1,315.2 702,523.8 758.9,830.1 \"></polygon><polygon fill=\"#63D3D6\" points=\"758.9,830.1 957.4,815.6 702,523.8 \"></polygon><polygon fill=\"#ACE8EA\" points=\"493.1,315.2 414.7,41.2 619.2,349.9 \"></polygon><polygon fill=\"#63D3D6\" points=\"702,523.8 619.2,349.9 493.1,315.2 \"></polygon><polygon fill=\"#FFFFFF\" points=\"493.1,315.2 414.7,41.2 321.6,136.5 \"></polygon><polygon fill=\"#229098\" points=\"128.3,293.5 185.8,230.7 -36.1,-0.1 \"></polygon><polygon fill=\"#63D3D6\" points=\"957.4,815.6 1021.6,764.9 804.7,560 \"></polygon><polygon fill=\"#ACE8EA\" points=\"1021.6,764.9 1232.1,727 985.3,555.8 804.7,560 \"></polygon><polygon fill=\"#C1E8E7\" points=\"786.3,570.8 679,421.9 679,317.6 781,231.9 985.3,555.8 \"></polygon><polygon fill=\"#1C8389\" points=\"1232.1,727 781,231.9 985.3,555.8 \"></polygon><polygon fill=\"#FFFFFF\" points=\"699,446 786.3,570.8 781,231.9 619.2,349.9 \"></polygon><polygon fill=\"#63D3D6\" points=\"1019.1,493.5 1130.3,509.8 1292.5,668.6 1232.1,727 \"></polygon><polygon fill=\"#C1E8E7\" points=\"985.3,555.8 1021.6,764.9 786.3,570.8 \"></polygon><polygon fill=\"#C1E8E7\" points=\"1130.3,509.8 1232.1,727 1292.5,668.6 \"></polygon></g></g><g id=\"clouds\"><path fill=\"#F5ECD9\" d=\"M719.3,238.6c0-10.2-8.3-18.4-18.4-18.4s-18.4,8.3-18.4,18.4H719.3z\"></path><path fill=\"#F5ECD9\" d=\"M804.6,238.6c0-10.2-8.3-18.4-18.4-18.4c-10.2,0-18.4,8.3-18.4,18.4H804.6z\"></path><path fill=\"#F5ECD9\" d=\"M761.9,238.6c0-15.7-12.7-28.4-28.4-28.4s-28.4,12.7-28.4,28.4H761.9z\"></path><g><path fill=\"#F5ECD9\" d=\"M784.8-31.3c0-4.6-3.7-8.2-8.2-8.2s-8.2,3.7-8.2,8.2H784.8z\"></path><path fill=\"#F5ECD9\" d=\"M810.3-31.3c0-3.5-2.9-6.4-6.4-6.4s-6.4,2.8-6.4,6.4H810.3z\"></path><path fill=\"#F5ECD9\" d=\"M803.9-31.3c0-7-5.7-12.7-12.7-12.7s-12.7,5.7-12.7,12.7H803.9z\"></path></g><g><path fill=\"#F5ECD9\" d=\"M991.5,160.4c0-6.6,5.4-12,12-12s12,5.4,12,12H991.5z\"></path><path fill=\"#F5ECD9\" d=\"M907.6,160.4c0-9.9,8.1-18,18-18s18,8.1,18,18H907.6z\"></path><path fill=\"#F5ECD9\" d=\"M931.5,160.4c0-19.9,16.1-36,36-36s36,16.1,36,36H931.5z\"></path></g><g><path fill=\"#F5ECD9\" d=\"M1013.5,180.2c0-5.3,4.3-9.6,9.5-9.6c5.3,0,9.6,4.3,9.6,9.6H1013.5z\"></path><path fill=\"#F5ECD9\" d=\"M1028.2,180.2c0-4.1,3.3-7.4,7.4-7.4c4.1,0,7.4,3.3,7.4,7.4H1028.2z\"></path></g><g><g><path fill=\"#F5ECD9\" d=\"M1334.8,6.5c0-19.7-16-35.6-35.6-35.6c-19.7,0-35.6,16-35.6,35.6H1334.8z\"></path><path fill=\"#F5ECD9\" d=\"M1361.4,6.5c0-14.7-11.9-26.6-26.6-26.6s-26.6,11.9-26.6,26.6H1361.4z\"></path><path fill=\"#F5ECD9\" d=\"M1275.8,6.5c0-8.8-7.1-15.9-15.9-15.9S1244-2.3,1244,6.5H1275.8z\"></path></g><g><path fill=\"#F5ECD9\" d=\"M949.3,139.6c0-18.1-14.6-32.7-32.7-32.7c-18.1,0-32.7,14.6-32.7,32.7H949.3z\"></path><path fill=\"#F5ECD9\" d=\"M908.3,139.6c0-13.5-10.9-24.4-24.4-24.4c-13.4,0-24.4,10.9-24.4,24.4H908.3z\"></path><path fill=\"#F5ECD9\" d=\"M968.8,139.6c0-10.8-8.7-19.5-19.5-19.5s-19.5,8.7-19.5,19.5H968.8z\"></path><path fill=\"#F5ECD9\" d=\"M869.3,139.6c0-8.1-6.5-14.6-14.6-14.6s-14.6,6.6-14.6,14.6H869.3z\"></path></g><g><g><path fill=\"#F5ECD9\" d=\"M1198,182.8c0-9-7.3-16.2-16.2-16.2s-16.2,7.3-16.2,16.2H1198z\"></path><path fill=\"#F5ECD9\" d=\"M1248,182.8c0-6.9-5.6-12.5-12.5-12.5s-12.5,5.6-12.5,12.5H1248z\"></path><path fill=\"#F5ECD9\" d=\"M1235.5,182.8c0-13.8-11.2-25-25-25s-25,11.2-25,25H1235.5z\"></path></g><g><path fill=\"#F5ECD9\" d=\"M835.7,160.9c0-7.7-6.2-13.9-13.9-13.9s-13.9,6.2-13.9,13.9H835.7z\"></path><path fill=\"#F5ECD9\" d=\"M846,160.9c0-5.7-4.6-10.4-10.4-10.4c-5.7,0-10.4,4.6-10.4,10.4H846z\"></path><path fill=\"#F5ECD9\" d=\"M812.6,160.9c0-3.4-2.8-6.2-6.2-6.2s-6.2,2.8-6.2,6.2H812.6z\"></path></g><g><path fill=\"#F5ECD9\" d=\"M893.7,2.4c0-8.3-6.7-15-15-15s-15,6.7-15,15H893.7z\"></path><path fill=\"#F5ECD9\" d=\"M998.4,2.4c0-12.4-10.1-22.4-22.5-22.4s-22.4,10-22.4,22.4H998.4z\"></path><path fill=\"#F5ECD9\" d=\"M968.5,2.4c0-24.8-20.1-44.9-44.9-44.9s-44.9,20.1-44.9,44.9L968.5,2.4z\"></path></g><g><path fill=\"#F5ECD9\" d=\"M1042.8,226.9c0-5.3-4.3-9.5-9.5-9.5c-5.3,0-9.6,4.3-9.6,9.5H1042.8z\"></path><path fill=\"#F5ECD9\" d=\"M1028.1,226.9c0-4.1-3.3-7.4-7.4-7.4c-4.1,0-7.4,3.3-7.4,7.4H1028.1z\"></path></g><g><path fill=\"#F5ECD9\" d=\"M1149.5-266.5c0-5.3-4.3-9.5-9.5-9.5c-5.3,0-9.5,4.3-9.5,9.5H1149.5z\"></path><path fill=\"#F5ECD9\" d=\"M1134.8-266.5c0-4.1-3.3-7.4-7.4-7.4s-7.4,3.3-7.4,7.4H1134.8z\"></path></g><g><path fill=\"#F5ECD9\" d=\"M1387.6-326.6c0-4.6-3.7-8.2-8.2-8.2c-4.6,0-8.2,3.7-8.2,8.2H1387.6z\"></path><path fill=\"#F5ECD9\" d=\"M1413-326.6c0-3.5-2.8-6.4-6.4-6.4c-3.5,0-6.4,2.8-6.4,6.4H1413z\"></path><path fill=\"#F5ECD9\" d=\"M1406.6-326.6c0-7-5.7-12.7-12.7-12.7s-12.7,5.7-12.7,12.7H1406.6z\"></path></g><g><path fill=\"#F5ECD9\" d=\"M596.9,21.9c0-5.3,4.3-9.5,9.5-9.5c5.3,0,9.5,4.3,9.5,9.5H596.9z\"></path><path fill=\"#F5ECD9\" d=\"M611.6,21.9c0-4.1,3.3-7.4,7.4-7.4c4.1,0,7.4,3.3,7.4,7.4H611.6z\"></path></g></g></g><g><g><path fill=\"#F5ECD9\" d=\"M595.1,166.5h-8v-1h8V166.5z M579.1,166.5h-8v-1h8V166.5z M563.1,166.5h-8v-1h8V166.5z M547.1,166.5h-8 v-1h8V166.5z M531.1,166.5h-8v-1h8V166.5z M515.1,166.5h-8v-1h8V166.5z M499.1,166.5h-8v-1h8V166.5z M483.1,166.5h-8v-1h8V166.5z M467.1,166.5h-8v-1h8V166.5z M451.1,166.5h-8v-1h8V166.5z M435.1,166.5h-8v-1h8V166.5z M419.1,166.5h-5.4v-1h5.4V166.5z\"></path></g><g><path fill=\"#F5ECD9\" d=\"M1682.2-280.9h-8v-1h8V-280.9z M1666.2-280.9h-8v-1h8V-280.9z M1650.2-280.9h-8v-1h8V-280.9z M1634.2-280.9h-8v-1h8V-280.9z M1618.2-280.9h-8v-1h8V-280.9z M1602.2-280.9h-8v-1h8V-280.9z M1586.2-280.9h-8v-1h8V-280.9z\"></path></g><g><path fill=\"#F5ECD9\" d=\"M1252-56.3h-8v-1h8V-56.3z M1236-56.3h-8v-1h8V-56.3z M1220-56.3h-8v-1h8V-56.3z M1204-56.3h-8v-1h8 V-56.3z M1188-56.3h-8v-1h8V-56.3z M1172-56.3h-8v-1h8V-56.3z M1156-56.3h-8v-1h8V-56.3z M1140-56.3h-8v-1h8V-56.3z M1124-56.3 h-8v-1h8V-56.3z M1108-56.3h-8v-1h8V-56.3z\"></path></g></g></g><g id=\"london\"><g><g id=\"lbase\"><polygon fill=\"#1F489C\" points=\"945.6,257.2 920.3,257.2 920.3,277.1 885.5,277.1 885.5,307.8 857,307.8 857,333.8 885.5,333.8 914.1,333.8 920.3,333.8 936.9,333.8 945.6,333.8 950.6,333.8 973.5,333.8 973.5,204.8 945.6,204.8 \"></polygon><rect x=\"1217.7\" y=\"114.1\" fill=\"#1F489C\" width=\"51.4\" height=\"16.6\"></rect><rect x=\"978\" y=\"149.9\" fill=\"#1F489C\" width=\"47.9\" height=\"183.9\"></rect><polygon fill=\"#1F489C\" points=\"1243.4,89.9 1221.6,111.1 1265.9,111.1 \"></polygon><rect x=\"1522.2\" y=\"301.6\" fill=\"#1F489C\" width=\"26.1\" height=\"32.1\"></rect><polygon fill=\"#1F489C\" points=\"1317.3,311.2 1298,311.2 1298,102 1199.9,102 1199.9,115.6 1184.7,115.6 1184.7,215.4 1159.3,215.4 1159.3,137.4 1097.4,137.4 1097.4,226.8 1063.4,226.8 1063.4,107.8 1000.7,107.8 1000.7,293.8 994.6,293.8 994.6,135.7 983.2,135.7 983.2,293.8 944.9,293.8 944.9,201 915.3,201 915.3,338.7 930.1,338.7 944.9,338.7 983.2,338.7 994.6,338.7 1000.7,338.7 1004.9,338.7 1051.7,338.7 1063.4,338.7 1097.4,338.7 1128.3,338.7 1147.6,338.7 1159.3,338.7 1184.7,338.7 1199.9,338.7 1246.6,338.7 1289.8,338.7 1298,338.7 1317.3,338.7 1331,338.7 1344.8,338.7 1344.8,229.1 1317.3,229.1 \"></polygon><rect x=\"1461.7\" y=\"275.5\" fill=\"#1F489C\" width=\"56.9\" height=\"58.3\"></rect></g><path id=\"ldn2\" fill=\"#1E6DB5\" d=\"M537.8,335.4h-4.3V3.7h4.3V335.4z M545.1,3.7h-4.3v331.8h4.3V3.7z M552.4,3.7h-4.3v331.8h4.3 V3.7z M559.7,3.7h-4.3v331.8h4.3V3.7z M567,3.7h-4.3v331.8h4.3V3.7z M574.3,3.7H570v331.8h4.3V3.7z M581.6,3.7h-4.3v331.8h4.3V3.7 z M593.5,45h-4.3v290.4h4.3V45z M600.8,45h-4.3v290.4h4.3V45z M608.1,45h-4.3v290.4h4.3V45z M615.4,45h-4.3v290.4h4.3V45z M622.7,45h-4.3v290.4h4.3V45z M630,45h-4.3v290.4h4.3V45z M637.3,45H633v290.4h4.3V45z M564.1-1.2V-31h-4.3v29.8H564.1z M571.4-1.2V-31h-4.3v29.8H571.4z M578.7-1.2V-31h-4.3v29.8H578.7z M586-1.2V-31h-4.3v29.8H586z M593.3,39v-70h-4.3v70H593.3z M600.6,39v-70h-4.3v70H600.6z M608,39v-70h-4.3v70H608z\"></path><path id=\"ldn3\" fill=\"#1F489C\" d=\"M788,197.2l-11.8,8.1l-11.8-8.1l11.8-8.1L788,197.2z M776.2,206.7l-11.8,8.1l11.8,8.1l11.8-8.1 L776.2,206.7z M776.2,171.5l-11.8,8.1l11.8,8.1l11.8-8.1L776.2,171.5z M776.2,154l-11.8,8.1l11.8,8.1l11.8-8.1L776.2,154z M776.2,224.2l-11.8,8.1l11.8,8.1l11.8-8.1L776.2,224.2z M776.2,259.3l-11.8,8.1l11.8,8.1l11.8-8.1L776.2,259.3z M776.2,241.8 l-11.8,8.1l11.8,8.1l11.8-8.1L776.2,241.8z M777.2,83.1l8,5.5c-0.5-3.3-1-6.6-1.6-9.9L777.2,83.1z M764.4,39.1l11.8,8.1l1.1-0.8 c-1.1-4.7-2.2-9.4-3.4-13.9L764.4,39.1z M777.2,65.5l4.7,3.2c-0.3-1.9-0.7-3.8-1.1-5.7L777.2,65.5z M776.2,136.4l-11.8,8.1 l11.8,8.1l11.8-8.1L776.2,136.4z M777.2,47.9l0.5,0.4c0-0.2-0.1-0.4-0.1-0.6L777.2,47.9z M776.2,118.8l-11.8,8.1l11.8,8.1L788,127 L776.2,118.8z M776.2,101.3l-11.8,8.1l11.8,8.1l11.8-8.1L776.2,101.3z M777.2,100.6l10.7,7.4c-0.6-4.5-1.2-9-1.8-13.5L777.2,100.6 z M788,285l-11.8-8.1l-11.8,8.1l11.8,8.1L788,285z M725.3,258l11.8-8.1l-11.8-8.1l-11.8,8.1L725.3,258z M725.3,205.3l11.8-8.1 l-11.8-8.1l-11.8,8.1L725.3,205.3z M725.3,240.5l11.8-8.1l-11.8-8.1l-11.8,8.1L725.3,240.5z M725.3,222.9l11.8-8.1l-11.8-8.1 l-11.8,8.1L725.3,222.9z M725.3,187.8l11.8-8.1l-11.8-8.1l-11.8,8.1L725.3,187.8z M725.3,152.6l11.8-8.1l-11.8-8.1l-11.8,8.1 L725.3,152.6z M725.3,170.2l11.8-8.1l-11.8-8.1l-11.8,8.1L725.3,170.2z M725.3,293.1l11.8-8.1l-11.8-8.1l-11.8,8.1L725.3,293.1z M738,303.3l-11.8,8.1l11.8,8.1l11.8-8.1L738,303.3z M733.7,335.4l-8.3-5.8l-8.3,5.8H733.7z M762.5,302.6l-11.8-8.1l-11.8,8.1 l11.8,8.1L762.5,302.6z M725.3,275.6l11.8-8.1l-11.8-8.1l-11.8,8.1L725.3,275.6z M775.2,293.8l-11.8-8.1l-11.8,8.1l11.8,8.1 L775.2,293.8z M725.3,310.7l11.8-8.1l-11.8-8.1l-11.8,8.1L725.3,310.7z M725.3,328.3l11.8-8.1l-11.8-8.1l-11.8,8.1L725.3,328.3z M712.6,196.5l11.8-8.1l-11.8-8.1l-11.8,8.1L712.6,196.5z M712.6,249.2l11.8-8.1l-11.8-8.1l-11.8,8.1L712.6,249.2z M712.6,319.5 l11.8-8.1l-11.8-8.1l-11.8,8.1L712.6,319.5z M750.8,312l-11.8,8.1l11.8,8.1l11.8-8.1L750.8,312z M750.8,329.6l-8.3,5.8h16.7 L750.8,329.6z M712.6,266.8l11.8-8.1l-11.8-8.1l-11.8,8.1L712.6,266.8z M712.6,284.4l11.8-8.1l-11.8-8.1l-11.8,8.1L712.6,284.4z M712.6,301.9l11.8-8.1l-11.8-8.1l-11.8,8.1L712.6,301.9z M710.2,335.4h4.9l9.3-6.4l-11.8-8.1l-11.8,8.1L710.2,335.4z M797.3,238.8l-8.3-5.8l-11.8,8.1l11.8,8.1l8.5-5.8C797.3,241.9,797.3,240.3,797.3,238.8z M796.6,220.8l-7.7-5.3l-11.8,8.1 l11.8,8.1l7.9-5.5C796.8,224.4,796.7,222.6,796.6,220.8z M797.7,256.6l-8.8-6.1l-11.8,8.1l11.8,8.1l8.9-6.1 C797.8,259.3,797.7,258,797.7,256.6z M775.2,311.4l-11.8-8.1l-11.8,8.1l11.8,8.1L775.2,311.4z M751.7,47.9l11.8,8.1l11.8-8.1 l-11.8-8.1L751.7,47.9z M798,274.4l-9.1-6.3l-11.8,8.1l11.8,8.1l9.1-6.3C798,276.9,798,275.6,798,274.4z M798.1,295.6 c0-1.2,0-2.3,0-3.5l-9.2-6.4l-11.8,8.1l11.8,8.1L798.1,295.6z M788,302.6l-11.8-8.1l-11.8,8.1l11.8,8.1L788,302.6z M699.9,82.4 l11.8-8.1l-11.8-8.1l-11.8,8.1L699.9,82.4z M724.4,83.1l-11.8-8.1l-11.8,8.1l11.8,8.1L724.4,83.1z M712.6,108.7l11.8-8.1 l-11.8-8.1l-11.8,8.1L712.6,108.7z M700.8,47.9l11.8,8.1l11.8-8.1l-11.8-8.1L700.8,47.9z M713.6,56.7l11.8,8.1l11.8-8.1l-11.8-8.1 L713.6,56.7z M739,56.7l11.8,8.1l11.8-8.1l-11.8-8.1L739,56.7z M712.6,231.7l11.8-8.1l-11.8-8.1l-11.8,8.1L712.6,231.7z M726.3,47.9L738,56l11.8-8.1L738,39.8L726.3,47.9z M725.3,135.1l11.8-8.1l-11.8-8.1l-11.8,8.1L725.3,135.1z M712.6,179l11.8-8.1 l-11.8-8.1l-11.8,8.1L712.6,179z M712.6,214.1l11.8-8.1l-11.8-8.1l-11.8,8.1L712.6,214.1z M712.6,161.4l11.8-8.1l-11.8-8.1 l-11.8,8.1L712.6,161.4z M712.6,143.9l11.8-8.1l-11.8-8.1l-11.8,8.1L712.6,143.9z M712.6,126.3l11.8-8.1l-11.8-8.1l-11.8,8.1 L712.6,126.3z M750.8,189.1l-11.8,8.1l11.8,8.1l11.8-8.1L750.8,189.1z M775.2,83.1l-11.8-8.1l-11.8,8.1l11.8,8.1L775.2,83.1z M750.8,241.8l-11.8,8.1l11.8,8.1l11.8-8.1L750.8,241.8z M738,320.8l-11.8,8.1l9.3,6.4h4.9l9.3-6.4L738,320.8z M739,91.8l11.8,8.1 l11.8-8.1l-11.8-8.1L739,91.8z M737.1,74.3l-11.8-8.1l-11.8,8.1l11.8,8.1L737.1,74.3z M750.8,224.2l-11.8,8.1l11.8,8.1l11.8-8.1 L750.8,224.2z M700.8,65.5l11.8,8.1l11.8-8.1l-11.8-8.1L700.8,65.5z M750.8,275.6l11.8-8.1l-11.8-8.1l-11.8,8.1L750.8,275.6z M750.8,136.4l-11.8,8.1l11.8,8.1l11.8-8.1L750.8,136.4z M750.8,118.8L739,127l11.8,8.1l11.8-8.1L750.8,118.8z M750.8,101.3 l-11.8,8.1l11.8,8.1l11.8-8.1L750.8,101.3z M750.8,154l-11.8,8.1l11.8,8.1l11.8-8.1L750.8,154z M795.8,202.6l-6.9-4.8l-11.8,8.1 l11.8,8.1l7.2-5C796,207,795.9,204.8,795.8,202.6z M750.8,171.5l-11.8,8.1l11.8,8.1l11.8-8.1L750.8,171.5z M750.8,206.7l-11.8,8.1 l11.8,8.1l11.8-8.1L750.8,206.7z M726.3,83.1l11.8,8.1l11.8-8.1L738,74.9L726.3,83.1z M673.5,276.2l-11.8-8.1l-9.3,6.4 c0,1.1,0,2.2,0,3.4l9.3,6.4L673.5,276.2z M673.5,293.8l-11.8-8.1l-9.4,6.5c0,1.1,0,2.1,0,3.2l9.4,6.5L673.5,293.8z M725.3,117.5 l11.8-8.1l-11.8-8.1l-11.8,8.1L725.3,117.5z M673.5,311.4l-11.8-8.1l-9.4,6.5c0,1.1,0,2.2,0,3.2l9.4,6.5L673.5,311.4z M673.5,241.1l-11.8-8.1l-8.6,5.9c0,1.4-0.1,2.9-0.1,4.3l8.7,6L673.5,241.1z M673.5,328.9l-11.8-8.1l-9.2,6.4c0,1.2,0,2.4,0.1,3.5 l6.7,4.6h4.9L673.5,328.9z M657.3,335.4l-4.8-3.3c0,1.2,0,2.3,0.1,3.3H657.3z M673.5,170.9l-11.8-8.1l-4.9,3.4c-0.2,3-0.4,6-0.6,9 l5.5,3.8L673.5,170.9z M673.5,223.6l-11.8-8.1l-8,5.5c-0.1,1.7-0.1,3.4-0.2,5.1l8.1,5.6L673.5,223.6z M673.5,153.3l-11.8-8.1 l-3.4,2.3c-0.3,3.6-0.6,7.3-0.9,10.9l4.3,3L673.5,153.3z M798.1,308.3c0-3.6,0-7.4,0-11.4l-8.2,5.7L798.1,308.3z M673.5,135.7 l-11.8-8.1l-1.5,1.1c-0.5,4.4-0.9,8.8-1.3,13.2l2.9,2L673.5,135.7z M673.5,206l-11.8-8.1l-7.1,4.9c-0.1,2.1-0.2,4.1-0.3,6.2 l7.4,5.1L673.5,206z M698.9,30.4l-11.8-8.1l-9.6,6.7c-0.2,0.8-0.5,1.6-0.7,2.5l10.3,7.1L698.9,30.4z M673.5,188.4l-11.8-8.1 l-6.1,4.2c-0.2,2.5-0.3,5-0.4,7.5l6.6,4.5L673.5,188.4z M673.5,258.7l-11.8-8.1l-9,6.2c0,1.2-0.1,2.5-0.1,3.7l9.1,6.3L673.5,258.7 z M763.5,127.6l-11.8,8.1l11.8,8.1l11.8-8.1L763.5,127.6z M763.5,145.2l-11.8,8.1l11.8,8.1l11.8-8.1L763.5,145.2z M763.5,110.1 l-11.8,8.1l11.8,8.1l11.8-8.1L763.5,110.1z M763.5,197.9l-11.8,8.1l11.8,8.1l11.8-8.1L763.5,197.9z M763.5,92.5l-11.8,8.1 l11.8,8.1l11.8-8.1L763.5,92.5z M763.5,180.3l-11.8,8.1l11.8,8.1l11.8-8.1L763.5,180.3z M763.5,162.8l-11.8,8.1l11.8,8.1l11.8-8.1 L763.5,162.8z M725.3,100l11.8-8.1l-11.8-8.1l-11.8,8.1L725.3,100z M739,74.3l11.8,8.1l11.8-8.1l-11.8-8.1L739,74.3z M726.3,65.5 l11.8,8.1l11.8-8.1L738,57.4L726.3,65.5z M785.8,93.3c-0.2-1.1-0.3-2.2-0.5-3.3l-9.1-6.3l-11.8,8.1l11.8,8.1L785.8,93.3z M763.5,215.4l-11.8,8.1l11.8,8.1l11.8-8.1L763.5,215.4z M782.1,70.2l-5.9-4.1l-11.8,8.1l11.8,8.1l7.2-4.9 C782.9,75,782.5,72.6,782.1,70.2z M751.7,65.5l11.8,8.1l11.8-8.1l-11.8-8.1L751.7,65.5z M778.1,49.9l-1.9-1.3l-11.8,8.1l11.8,8.1 l4.3-3C779.7,57.8,778.9,53.8,778.1,49.9z M763.5,233l-11.8,8.1l11.8,8.1l11.8-8.1L763.5,233z M738,196.5l11.8-8.1l-11.8-8.1 l-11.8,8.1L738,196.5z M738,231.7l11.8-8.1l-11.8-8.1l-11.8,8.1L738,231.7z M738,179l11.8-8.1l-11.8-8.1l-11.8,8.1L738,179z M738,214.1l11.8-8.1l-11.8-8.1l-11.8,8.1L738,214.1z M738,161.4l11.8-8.1l-11.8-8.1l-11.8,8.1L738,161.4z M738,126.3l11.8-8.1 l-11.8-8.1l-11.8,8.1L738,126.3z M738,143.9l11.8-8.1l-11.8-8.1l-11.8,8.1L738,143.9z M738,284.4l11.8-8.1l-11.8-8.1l-11.8,8.1 L738,284.4z M762.5,285l-11.8-8.1L739,285l11.8,8.1L762.5,285z M775.2,276.2l-11.8-8.1l-11.8,8.1l11.8,8.1L775.2,276.2z M763.5,250.6l-11.8,8.1l11.8,8.1l11.8-8.1L763.5,250.6z M738,301.9l11.8-8.1l-11.8-8.1l-11.8,8.1L738,301.9z M738,266.8l11.8-8.1 l-11.8-8.1l-11.8,8.1L738,266.8z M738,108.7l11.8-8.1L738,92.5l-11.8,8.1L738,108.7z M738,249.2l11.8-8.1L738,233l-11.8,8.1 L738,249.2z M688.1,56.7l11.8,8.1l11.8-8.1l-11.8-8.1L688.1,56.7z M673.5,100.6l-9-6.2c-0.7,4.6-1.3,9.1-1.9,13.8L673.5,100.6z M686.2,109.4l-11.8-8.1l-11.8,8.1l11.8,8.1L686.2,109.4z M686.2,2.7l1,0.7l11.8-8.1l-7.3-5C689.7-5.9,687.9-1.7,686.2,2.7z M673.5,83.1l-6.6-4.6c-0.6,3.4-1.1,6.8-1.6,10.2L673.5,83.1z M673.5,65.5l-3.8-2.6c-0.4,2-0.8,4-1.1,6L673.5,65.5z M686.2,4 l-0.4-0.3c-0.1,0.3-0.2,0.6-0.3,0.8L686.2,4z M673.5,47.9l-0.6-0.4c-0.1,0.3-0.1,0.6-0.2,1L673.5,47.9z M674.4,135.1l11.8-8.1 l-11.8-8.1l-11.8,8.1L674.4,135.1z M674.4,222.9l11.8-8.1l-11.8-8.1l-11.8,8.1L674.4,222.9z M674.4,240.5l11.8-8.1l-11.8-8.1 l-11.8,8.1L674.4,240.5z M674.4,258l11.8-8.1l-11.8-8.1l-11.8,8.1L674.4,258z M674.4,205.3l11.8-8.1l-11.8-8.1l-11.8,8.1 L674.4,205.3z M674.4,170.2l11.8-8.1l-11.8-8.1l-11.8,8.1L674.4,170.2z M674.4,152.6l11.8-8.1l-11.8-8.1l-11.8,8.1L674.4,152.6z M674.4,187.8l11.8-8.1l-11.8-8.1l-11.8,8.1L674.4,187.8z M726.3-4.8L738,3.4l11.8-8.1L738-12.9L726.3-4.8z M687.2,319.5l11.8-8.1 l-11.8-8.1l-11.8,8.1L687.2,319.5z M687.2,301.9l11.8-8.1l-11.8-8.1l-11.8,8.1L687.2,301.9z M687.2,231.7l11.8-8.1l-11.8-8.1 l-11.8,8.1L687.2,231.7z M687.2,284.4l11.8-8.1l-11.8-8.1l-11.8,8.1L687.2,284.4z M687.2,249.2l11.8-8.1l-11.8-8.1l-11.8,8.1 L687.2,249.2z M687.2,266.8l11.8-8.1l-11.8-8.1l-11.8,8.1L687.2,266.8z M797.9,327l-9-6.2l-11.8,8.1l9.3,6.4h4.9l6.5-4.5 C797.9,329.7,797.9,328.4,797.9,327z M739,4l11.8,8.1L762.5,4l-11.8-8.1L739,4z M713.6,4l11.8,8.1L737.1,4l-11.8-8.1L713.6,4z M674.4,275.6l11.8-8.1l-11.8-8.1l-11.8,8.1L674.4,275.6z M700.8-4.8l11.8,8.1l11.8-8.1l-11.8-8.1L700.8-4.8z M688.1,4l11.8,8.1 L711.6,4l-11.8-8.1L688.1,4z M764.4,4l0.5,0.3c-0.1-0.2-0.1-0.3-0.2-0.5L764.4,4z M789.9,320.1l8.1,5.6c0-3.3,0.1-7.1,0.1-11.2 L789.9,320.1z M751.7-4.8l11.8,8.1l0.8-0.6c-1.7-4.4-3.5-8.6-5.5-12.5L751.7-4.8z M684.7,335.4h4.9l9.3-6.4l-11.8-8.1l-11.8,8.1 L684.7,335.4z M654.2,210.3c-0.1,3.1-0.3,6.2-0.4,9.3l6.9-4.8L654.2,210.3z M656.1,176.4c-0.2,2.2-0.3,4.5-0.4,6.7l5.1-3.5 L656.1,176.4z M794.8,184.4l-5.9-4.1l-11.8,8.1l11.8,8.1l6.3-4.4C795.1,189.6,795,187,794.8,184.4z M657.3,159.7 c-0.1,1.7-0.3,3.3-0.4,5l3.8-2.6L657.3,159.7z M698.9-22.3l-0.1-0.1c-0.1,0.1-0.1,0.2-0.2,0.3L698.9-22.3z M660.4,126.7 c0,0.2,0,0.4-0.1,0.5l0.4-0.3L660.4,126.7z M658.7,143.1c-0.1,1-0.2,2-0.3,3l2.3-1.6L658.7,143.1z M652.4,279.2 c0,4-0.1,7.9-0.1,11.6l8.5-5.8L652.4,279.2z M652.3,314.3c0,4.3,0.1,8.1,0.1,11.5l8.3-5.7L652.3,314.3z M653.5,227.3 c-0.1,3.4-0.2,6.9-0.3,10.2l7.6-5.2L653.5,227.3z M724.7-40.1l4.1-2.8c-0.8-0.3-1.6-0.6-2.3-0.8c-0.4-0.1-0.7-0.1-1.1-0.2 c-0.1,0-0.1,0-0.2,0c-0.1,0-0.1,0-0.2,0c-0.3,0-0.7,0-1.1,0.2c-1,0.3-2,0.7-3,1.1L724.7-40.1z M652.3,296.7c0,4.1,0,8,0,11.7 l8.5-5.8L652.3,296.7z M653,244.5c-0.1,3.7-0.2,7.3-0.3,10.9l8-5.5L653,244.5z M652.6,261.8c-0.1,3.9-0.1,7.7-0.2,11.4l8.3-5.7 L652.6,261.8z M699.4-23.3l0.5,0.3l11.8-8.1l-3.7-2.6C704.9-30.7,702.1-27.3,699.4-23.3z M752.7-20.8c-0.3-0.5-0.7-1-1-1.5 l-0.6,0.4L752.7-20.8z M739-13.5l11.8,8.1l7.6-5.2c-1.4-2.7-2.8-5.3-4.2-7.8l-4-2.8L739-13.5z M726.3-22.3l11.8,8.1l11.1-7.7 L737.4-30L726.3-22.3z M793.3,335.4h4.5c0-1,0-2,0.1-3.1L793.3,335.4z M674.4,310.7l11.8-8.1l-11.8-8.1l-11.8,8.1L674.4,310.7z M713.6-13.5l11.8,8.1l11.8-8.1l-11.8-8.1L713.6-13.5z M674.4,328.3l11.8-8.1l-11.8-8.1l-11.8,8.1L674.4,328.3z M682.8,335.4 l-8.3-5.8l-8.3,5.8H682.8z M713.6-31.1l11.8,8.1l11.1-7.7l-11.8-8.1L713.6-31.1z M737.4-31.3l4.4-3c-3.7-3.5-7.6-6.2-11.8-8.1 l-4.4,3L737.4-31.3z M708.7-34.5l3.9,2.7l11.1-7.7l-3.9-2.7C715.9-40.3,712.2-37.8,708.7-34.5z M750.1-22.5l1-0.7 c-2.7-3.9-5.5-7.4-8.5-10.4l-4.3,2.9L750.1-22.5z M674.4,293.1l11.8-8.1l-11.8-8.1l-11.8,8.1L674.4,293.1z M697.1-19.7 c-1.7,2.8-3.4,5.8-5,8.9l7.8,5.4l11.8-8.1l-11.8-8.1L697.1-19.7z M673.5,118.2l-11.2-7.7c-0.6,5-1.2,10-1.7,15l1.2,0.8 L673.5,118.2z M700.8-22.3l11.8,8.1l11.8-8.1l-11.8-8.1L700.8-22.3z M655.1,193.3c-0.2,2.7-0.3,5.4-0.4,8.1l6.1-4.2L655.1,193.3z M699.9,205.3l11.8-8.1l-11.8-8.1l-11.8,8.1L699.9,205.3z M699.9,222.9l11.8-8.1l-11.8-8.1l-11.8,8.1L699.9,222.9z M699.9,240.5 l11.8-8.1l-11.8-8.1l-11.8,8.1L699.9,240.5z M699.9,135.1l11.8-8.1l-11.8-8.1l-11.8,8.1L699.9,135.1z M699.9,258l11.8-8.1 l-11.8-8.1l-11.8,8.1L699.9,258z M699.9,152.6l11.8-8.1l-11.8-8.1l-11.8,8.1L699.9,152.6z M699.9,170.2l11.8-8.1l-11.8-8.1 l-11.8,8.1L699.9,170.2z M699.9,187.8l11.8-8.1l-11.8-8.1l-11.8,8.1L699.9,187.8z M699.9,275.6l11.8-8.1l-11.8-8.1l-11.8,8.1 L699.9,275.6z M763.5,320.8l-11.8,8.1l9.3,6.4h4.9l9.3-6.4L763.5,320.8z M776.2,329.6l-8.3,5.8h16.7L776.2,329.6z M776.2,312 l-11.8,8.1l11.8,8.1l11.8-8.1L776.2,312z M699.9,293.1l11.8-8.1l-11.8-8.1l-11.8,8.1L699.9,293.1z M699.9,328.3l11.8-8.1 l-11.8-8.1l-11.8,8.1L699.9,328.3z M699.9,310.7l11.8-8.1l-11.8-8.1l-11.8,8.1L699.9,310.7z M708.2,335.4l-8.3-5.8l-8.3,5.8H708.2 z M751.7,30.4l11.8,8.1l10.1-7c-0.3-0.9-0.5-1.9-0.8-2.8l-9.3-6.5L751.7,30.4z M788.2,110.6l-11,7.6l11.8,8.1l1-0.7 C789.4,120.6,788.8,115.6,788.2,110.6z M726.3,30.4l11.8,8.1l11.8-8.1L738,22.3L726.3,30.4z M739,39.1l11.8,8.1l11.8-8.1L750.8,31 L739,39.1z M793.6,166l-4.6-3.2l-11.8,8.1l11.8,8.1l5.3-3.7C794,172.2,793.8,169.1,793.6,166z M790.2,128.5l-1.3-0.9l-11.8,8.1 l11.8,8.1l2.6-1.8C791.1,137.5,790.7,133,790.2,128.5z M792,147.3l-3.1-2.2l-11.8,8.1l11.8,8.1l4.1-2.8 C792.7,154.9,792.4,151.1,792,147.3z M700.8,30.4l11.8,8.1l11.8-8.1l-11.8-8.1L700.8,30.4z M687.2,91.2l11.8-8.1l-11.8-8.1 l-11.8,8.1L687.2,91.2z M711.6,91.8l-11.8-8.1l-11.8,8.1l11.8,8.1L711.6,91.8z M687.2,73.6l11.8-8.1l-11.8-8.1l-11.8,8.1 L687.2,73.6z M687.2,214.1l11.8-8.1l-11.8-8.1l-11.8,8.1L687.2,214.1z M699.9,117.5l11.8-8.1l-11.8-8.1l-11.8,8.1L699.9,117.5z M688.1,39.1l11.8,8.1l11.8-8.1L699.9,31L688.1,39.1z M713.6,39.1l11.8,8.1l11.8-8.1L725.3,31L713.6,39.1z M687.2,56l11.8-8.1 l-11.8-8.1l-11.8,8.1L687.2,56z M674.4,47.3l11.8-8.1l-9.6-6.7c-1.2,4.5-2.3,9.1-3.4,13.9L674.4,47.3z M669.9,61.7l4.5,3.1 l11.8-8.1l-11.8-8.1l-2.1,1.5C671.5,53.9,670.7,57.8,669.9,61.7z M686.2,21.6l-5.4-3.7c-1,3.1-1.9,6.2-2.8,9.4L686.2,21.6z M667.1,77.3l7.4,5.1l11.8-8.1l-11.8-8.1l-6.2,4.3C667.9,72.7,667.5,75,667.1,77.3z M798.1,313.2c0-1.2,0-2.3,0-3.6l-9.2-6.3 l-11.8,8.1l11.8,8.1L798.1,313.2z M700.8,12.8l11.8,8.1l11.8-8.1l-11.8-8.1L700.8,12.8z M688.1,21.6l11.8,8.1l11.8-8.1l-11.8-8.1 L688.1,21.6z M687.2,126.3l11.8-8.1l-11.8-8.1l-11.8,8.1L687.2,126.3z M687.2,179l11.8-8.1l-11.8-8.1l-11.8,8.1L687.2,179z M687.2,161.4l11.8-8.1l-11.8-8.1l-11.8,8.1L687.2,161.4z M687.2,196.5l11.8-8.1l-11.8-8.1l-11.8,8.1L687.2,196.5z M687.2,143.9 l11.8-8.1l-11.8-8.1l-11.8,8.1L687.2,143.9z M698.9,100.6l-11.8-8.1l-11.8,8.1l11.8,8.1L698.9,100.6z M664.6,93.2l9.8,6.8 l11.8-8.1l-11.8-8.1l-9.4,6.5C664.9,91.2,664.7,92.2,664.6,93.2z M713.6,21.6l11.8,8.1l11.8-8.1l-11.8-8.1L713.6,21.6z M684.7,6.4 c-1.2,3.3-2.4,6.8-3.6,10.4l6,4.2l11.8-8.1l-11.8-8.1L684.7,6.4z M789.9,232.3l7.3,5.1c-0.1-3.3-0.2-6.6-0.3-9.9L789.9,232.3z M789.9,214.8l6.7,4.6c-0.1-3-0.2-6-0.4-9L789.9,214.8z M789.9,197.2l5.9,4.1c-0.1-2.6-0.3-5.2-0.4-7.8L789.9,197.2z M789.9,267.5 l8.1,5.6c0-3.6-0.1-7.3-0.2-11.1L789.9,267.5z M789.9,249.9l7.8,5.4c-0.1-3.5-0.2-7-0.3-10.6L789.9,249.9z M789.9,285l8.2,5.7 c0-3.6,0-7.4-0.1-11.3L789.9,285z M789.9,179.6l4.8,3.3c-0.1-2.1-0.3-4.3-0.4-6.4L789.9,179.6z M789.9,127l0.2,0.1 c0-0.1,0-0.1,0-0.2L789.9,127z M751.7,12.8l11.8,8.1l5.8-4c-1.2-3.7-2.4-7.3-3.7-10.8l-2.1-1.5L751.7,12.8z M772.4,27.1 c-0.9-3.1-1.8-6.1-2.7-9.1l-5.2,3.6L772.4,27.1z M739,21.6l11.8,8.1l11.8-8.1l-11.8-8.1L739,21.6z M726.3,12.8l11.8,8.1l11.8-8.1 L738,4.7L726.3,12.8z M789.9,144.5l2,1.4c-0.1-0.9-0.2-1.8-0.2-2.6L789.9,144.5z M789.9,162.1l3.6,2.5c-0.1-1.6-0.2-3.1-0.4-4.7 L789.9,162.1z\"></path><path id=\"ldn4\" fill=\"#1E6DB5\" d=\"M801,335.4V-86h17.3v421.4H801z M825.4,335.4V-68.7h-3.6v404.2H825.4z M950.4,335.4l-1-4.9H837 v-2.9h111.8L948,324H837v-2.9h110.5l-0.8-3.6H837v-2.9H946l-0.8-3.6H837v-2.9h107.7l-0.8-3.6H837v-2.9h106.3l-0.8-3.6H837v-2.9 h105l-0.8-3.6H837v-2.9h103.6l-0.8-3.6H837v-2.9h102.2l-0.8-3.6H837v-2.9h100.9l-0.8-3.6H837v-2.9h99.5l-0.8-3.6H837v-2.9h98.1 l-0.8-3.6H837v-2.9h96.7l-0.8-3.6h-96v-2.9h95.4l-0.8-3.6H837v-2.9h94l-0.8-3.6H837V237h92.6l-0.8-3.6H837v-2.9h91.3l-0.8-3.6H837 V224h89.9l-0.8-3.6H837v-2.9h88.5l-0.8-3.6H837v-2.9h87.2l-0.8-3.6H837v-2.9h85.8L922,201h-85v-2.9h84.4l-0.8-3.6H837v-2.9h83 l-0.8-3.6H837v-2.9h81.7l-0.8-3.6H837v-2.9h80.3l-0.8-3.6H837v-2.9h78.9l-0.8-3.6H837v-2.9h77.6l-0.8-3.6H837v-2.9h76.2l-0.8-3.6 H837v-2.9h74.8l-0.8-3.6H837v-2.9h73.4l-0.8-3.6H837v-2.9H909l-0.8-3.6H837v-2.9h70.7l-0.8-3.6H837v-2.9h69.3l-0.8-3.6H837v-2.9 h68l-0.8-3.6H837V114h66.6l-0.8-3.6H837v-2.9h65.2l-0.8-3.6H837V101h63.9l-0.8-3.6H837v-2.9h62.5l-0.8-3.6H837v-2.9h61.1l-0.8-3.6 H837v-2.9h59.7l-0.8-3.6h-59v-2.9h58.4l-0.8-3.6H837v-2.9h57l-0.8-3.6H837v-2.9h55.6l-0.8-3.6H837v-2.9h54.3l-0.8-3.6H837v-2.9 h52.9l-0.8-3.6H837v-2.9h51.5l-0.8-3.6H837v-2.9h50.1l-0.8-3.6H837v-2.9h48.8l-0.8-3.6h-48v-2.9h47.4l-0.8-3.6H837v-2.9h46 l-0.8-3.6H837v-2.9h44.7l-0.8-3.6H837V3.9h43.3l-0.8-3.6H837v-2.9h41.9l-0.8-3.6H837V-9h40.6l-0.8-3.6H837v-2.9h39.2l-0.8-3.6H837 V-22h37.8l-0.8-3.6H837v-2.9h36.4l-0.8-3.6H837v-2.9H872l-0.8-3.6H837v-2.9h33.7l-0.8-3.6H837v-2.9h32.3l-0.8-3.6H837v-2.9h31 l-0.8-3.6H837v-2.9h29.6l-0.8-3.6H837v-2.9h28.2l-0.8-3.6H837v-2.9h26.8l-0.8-3.6H837v-2.9h25.5l-0.8-3.6H837v-2.9h24.1l-0.8-3.6 H837v-2.9h22.7l-0.8-3.6h-22v-2.9h21.4l-0.8-3.6H837v-2.9h20l-0.8-3.6H837v-2.9h18.6l-1.1-5H837v-2.9h16.9l-4.7-22.3h-18v478.3 H950.4z\"></path><path id=\"ldn5\" fill=\"#1E6DB5\" d=\"M1034.3,335.4c-2.8,0-2.8,0-5.5,0c0-54.3,5.3-125.3,14.2-191.2c4.6-34.1,9.7-62.9,14.7-84.4 h-1.3c-5.1,21.6-10.1,50.3-14.7,84.2c-8.9,65.9-14.2,137-14.2,191.3c-1.8,0-3.7,0-5.5,0c0-54.3,4.3-125.4,11.6-191.2 c3.8-34.1,7.9-62.9,12.1-84.4h-1.3c-4.1,21.6-8.3,50.3-12,84.2c-7.3,65.9-11.6,137-11.7,191.3c-1.8,0-3.7,0-5.5,0 c0-54.3,3.4-125.4,9.1-191.2c2.9-34.1,6.2-62.8,9.4-84.4h-1.3c-3.2,21.6-6.4,50.3-9.4,84.3c-5.7,65.9-9.1,137-9.1,191.3 c-1.8,0-3.7,0-5.5,0c0-54.3,2.4-125.4,6.5-191.2c2.1-34.1,4.4-62.8,6.7-84.4h-1.3c-6.9,64.4-13.1,187-13.1,275.6 c-1.9,0-3.7,0-5.5,0c0-88.6,3.8-211.4,7.9-275.6h-1.3c-4.1,64.3-7.9,187-7.9,275.6c-1.9,0-3.7,0-5.5,0c0-88.6,1.3-211.3,2.6-275.6 h-1.3c-1.4,64.3-2.6,187-2.6,275.6c-1.9,0-3.7,0-5.5,0c0-88.6-1.3-211.3-2.6-275.6h-1.3c1.4,64.3,2.6,186.9,2.6,275.6 c-1.9,0-3.7,0-5.5,0c0-88.6-3.8-211.2-7.9-275.6h-1.3c4.1,64.2,7.9,186.9,7.9,275.6c-1.9,0-3.7,0-5.5,0 c0-88.6-6.3-211.2-13.1-275.6h-1.3c2.3,21.5,4.6,50.3,6.7,84.4c4.1,65.8,6.5,136.9,6.5,191.2c-1.9,0-3.7,0-5.5,0 c0-54.3-3.4-125.4-9.1-191.3c-2.9-34-6.2-62.7-9.4-84.3h-1.3c3.2,21.5,6.4,50.3,9.4,84.4c5.7,65.8,9,136.9,9.1,191.2 c-2,0-3.8,0-5.5,0c0-54.3-4.3-125.5-11.7-191.3c-3.8-33.9-7.9-62.7-12-84.2h-1.3c4.1,21.5,8.3,50.3,12.1,84.4 c7.3,65.8,11.6,136.9,11.6,191.2c-2.1,0-3.9,0-5.5,0c0-54.3-5.3-125.5-14.2-191.3c-4.6-33.9-9.7-62.7-14.7-84.2h-1.3 c5,21.5,10.1,50.3,14.7,84.4c8.9,65.8,14.2,136.9,14.2,191.2c-3.3,0-5.1,0-5.1,0s-4.8-166.1-30.4-276.6c6.9,0,16.6,0,16.6,0 s9.9-20.9,13.9-29.4c53.9-11.7,122.3,29.9,122.3,29.9S1033.9,185.4,1034.3,335.4z\"></path><path id=\"ldn6\" fill=\"#1998C6\" d=\"M1130.2,148.1v8.7h-79.9v-8.7H1130.2z M1050.2,170.6h79.9v-8.7h-79.9V170.6z M1050.2,184.3h79.9 v-8.7h-79.9V184.3z M1050.2,198h79.9v-8.7h-79.9V198z M1050.2,211.8h79.9V203h-79.9V211.8z M1050.2,225.5h79.9v-8.7h-79.9V225.5z M1050.2,239.3h79.9v-8.7h-79.9V239.3z M1050.2,253h79.9v-8.7h-79.9V253z M1050.2,266.7h79.9V258h-79.9V266.7z M1050.2,280.5h79.9 v-8.7h-79.9V280.5z M1050.2,294.2h79.9v-8.7h-79.9V294.2z M1050.2,308h79.9v-8.7h-79.9V308z M1050.2,321.7h79.9v-8.7h-79.9V321.7z M1050.2,335.4h79.9v-8.7h-79.9V335.4z M1013.4,156.8h26.2v-8.7h-26.2V156.8z M1013.4,170.6h26.2v-8.7h-26.2V170.6z M1013.4,184.3 h26.2v-8.7h-26.2V184.3z M1013.4,198h26.2v-8.7h-26.2V198z M1013.4,211.8h26.2V203h-26.2V211.8z M1013.4,225.5h26.2v-8.7h-26.2 V225.5z M1013.4,239.3h26.2v-8.7h-26.2V239.3z M1013.4,253h26.2v-8.7h-26.2V253z M1013.4,266.7h26.2V258h-26.2V266.7z M1013.4,280.5h26.2v-8.7h-26.2V280.5z M1013.4,294.2h26.2v-8.7h-26.2V294.2z M1013.4,308h26.2v-8.7h-26.2V308z M1013.4,321.7 h26.2v-8.7h-26.2V321.7z M1013.4,335.4h26.2v-8.7h-26.2V335.4z\"></path><path id=\"ldn12\" fill=\"#8FD3D2\" d=\"M238.6,214.4h-78.4c0.8-3.2,6.1-9.4,10.2-9.4c10.6,0,30.6,0,37.1,0 C216.6,205,228.6,210.3,238.6,214.4z M244.6,217C244.5,217,244.5,217,244.6,217l-84.9,0c-0.6,3.1-0.9,6.3-1,9.4h101.5 C255.3,222.7,250.1,219.6,244.6,217z M263.4,229H158.7c0,3.2,0.3,6.3,0.6,9.4h113C269.6,235.1,266.7,231.9,263.4,229z M276.3,243.6c-0.6-0.9-1.3-1.7-1.9-2.5H159.7c0.4,3.1,1,6.3,1.6,9.4h119.9C279.6,248.1,277.9,245.9,276.3,243.6z M283,253.1 H161.8c0.7,3.2,1.4,6.3,2.3,9.4h124.7C287,259.3,285,256.1,283,253.1z M290.2,265.1H164.8c0.9,3.2,1.9,6.3,2.9,9.4h126.9 C293.3,271.3,291.9,268.2,290.2,265.1z M297.8,284.8c-0.6-2.6-1.4-5.2-2.3-7.7h-127c1.1,3.2,2.3,6.3,3.6,9.4h126 C298.1,286,298,285.4,297.8,284.8z M298.8,289.1H173.4c0.9,2,1.9,4,2.9,5.9c0.6,1.2,1.2,2.3,1.8,3.5h122.5 C300,295.4,299.4,292.3,298.8,289.1z M301,301.2H179.4c1.5,3.1,2.8,6.2,3.8,9.4h119C301.9,307.4,301.4,304.3,301,301.2z M302.5,313.2H184c0.8,3.2,1.4,6.3,1.6,9.4h117.7C303.1,319.5,302.8,316.3,302.5,313.2z M303.4,325.2H185.7 c0.1,3.2-0.2,6.3-0.7,9.4h118.7C303.7,331.5,303.6,328.4,303.4,325.2z\"></path><path id=\"ldn7\" fill=\"#EF4F34\" d=\"M466.3,72.8v241.8h5.3v-15h4v15h5.9v-15h4v15h5.8v-15h4v15h5.9v-15h4v15h5.6V72.8H466.3z M475.5,295h-4v-20.1h4V295z M475.5,270.3h-4v-20.1h4V270.3z M475.5,245.6h-4v-20.1h4V245.6z M475.5,220.9h-4v-20.1h4V220.9z M475.5,196.2h-4V176h4V196.2z M475.5,171.5h-4v-20.1h4V171.5z M475.5,146.8h-4v-20.1h4V146.8z M475.5,122.1h-4v-20.1h4V122.1z M475.5,97.4h-4V77.2h4V97.4z M485.4,295h-4v-20.1h4V295z M485.4,270.3h-4v-20.1h4V270.3z M485.4,245.6h-4v-20.1h4V245.6z M485.4,220.9h-4v-20.1h4V220.9z M485.4,196.2h-4V176h4V196.2z M485.4,171.5h-4v-20.1h4V171.5z M485.4,146.8h-4v-20.1h4V146.8z M485.4,122.1h-4v-20.1h4V122.1z M485.4,97.4h-4V77.2h4V97.4z M495.2,295h-4v-20.1h4V295z M495.2,270.3h-4v-20.1h4V270.3z M495.2,245.6h-4v-20.1h4V245.6z M495.2,220.9h-4v-20.1h4V220.9z M495.2,196.2h-4V176h4V196.2z M495.2,171.5h-4v-20.1h4V171.5z M495.2,146.8h-4v-20.1h4V146.8z M495.2,122.1h-4v-20.1h4V122.1z M495.2,97.4h-4V77.2h4V97.4z M505.1,295h-4v-20.1h4V295z M505.1,270.3h-4v-20.1h4V270.3z M505.1,245.6h-4v-20.1h4V245.6z M505.1,220.9h-4v-20.1h4V220.9z M505.1,196.2h-4V176h4V196.2z M505.1,171.5h-4v-20.1h4V171.5z M505.1,146.8h-4v-20.1h4V146.8z M505.1,122.1h-4v-20.1h4V122.1z M505.1,97.4h-4V77.2h4V97.4z M436.6,320.5v4h-12.5v-4H436.6z M459.2,335.4h-15.6v-4.4h15.6V335.4z M424.1,35.3v279.3h4.6v-2.7h4v2.7h3.9V35.3H424.1z M432.7,307.4h-4v-20.1h4V307.4z M432.7,282.6h-4v-20.1h4V282.6z M432.7,257.9h-4v-20.1h4V257.9z M432.7,233.2h-4v-20.1h4V233.2z M432.7,208.5h-4v-20.1h4V208.5z M432.7,183.8h-4v-20.1h4V183.8z M432.7,159.1h-4V139h4V159.1z M432.7,134.4h-4v-20.1h4V134.4z M432.7,109.7h-4V89.6h4V109.7z M432.7,85h-4V64.9h4V85z M432.7,60.3h-4V40.2h4V60.3z M510.8,320.5v4h-44.5v-4H510.8z M443.6,54.8 v259.8h5.8v-8.4h4v8.4h5.8V54.8H443.6z M453.4,301.6h-4v-20.1h4V301.6z M453.4,276.9h-4v-20.1h4V276.9z M453.4,252.2h-4v-20.1h4 V252.2z M453.4,227.5h-4v-20.1h4V227.5z M453.4,202.8h-4v-20.1h4V202.8z M453.4,178.1h-4v-20.1h4V178.1z M453.4,153.4h-4v-20.1h4 V153.4z M453.4,128.7h-4v-20.1h4V128.7z M453.4,104h-4V83.8h4V104z M453.4,79.3h-4V59.1h4V79.3z M510.8,335.4h-44.5v-4.4h44.5 V335.4z M459.2,320.5v4h-15.6v-4H459.2z M436.6,335.4h-12.5v-4.4h12.5V335.4z M394.8,18.8v295.8h4.9v-17.8h4v17.8h5.9v-17.8h4 v17.8h4.9V18.8h-4.3v0.3h-5v-0.3h-0.6v-5h0.6v-30.9h-3.5v30.9h0.3v5h-0.3v0.3h-5v-0.3H394.8z M409.6,25.1h4v20.1h-4V25.1z M409.6,49.8h4v20.1h-4V49.8z M409.6,74.5h4v20.1h-4V74.5z M409.6,99.2h4v20.1h-4V99.2z M409.6,123.9h4V144h-4V123.9z M409.6,148.6h4v20.1h-4V148.6z M409.6,173.3h4v20.1h-4V173.3z M409.6,198h4v20.1h-4V198z M409.6,222.7h4v20.1h-4V222.7z M409.6,247.4h4v20.1h-4V247.4z M409.6,272.1h4v20.1h-4V272.1z M403.7,292.3h-4v-20.1h4V292.3z M403.7,267.6h-4v-20.1h4V267.6z M403.7,242.9h-4v-20.1h4V242.9z M403.7,218.1h-4V198h4V218.1z M403.7,193.4h-4v-20.1h4V193.4z M403.7,168.7h-4v-20.1h4V168.7z M403.7,144h-4v-20.1h4V144z M403.7,119.3h-4V99.2h4V119.3z M403.7,94.6h-4V74.5h4V94.6z M403.7,69.9h-4V49.8h4V69.9z M403.7,25.1 v20.1h-4V25.1H403.7z M418.6,320.5v4h-23.8v-4H418.6z M418.6,335.4h-23.8v-4.4h23.8V335.4z\"></path><path id=\"ruota\" fill=\"#8FD3D2\" d=\"M1462.9,161.2c3.1,0.1,5.7-2.4,5.6-5.6c0-3.2-2.7-5.7-5.8-5.5c-1.2,0.1-2.3,0.5-3.2,1.2 c0-0.4,0-0.9-0.1-1.3l0.1,0l-0.1-0.2c0-0.2,0-0.4,0-0.5l0.1-0.2l-0.1,0c-0.3-4.8-0.8-9.5-1.6-14.1l0.1-0.1l-0.1-0.2 c0-0.2-0.1-0.4-0.1-0.5l0,0c1,0.5,2.2,0.7,3.4,0.5c3-0.5,5.1-3.5,4.4-6.6c-0.7-3.2-3.7-5.1-6.7-4.3c-1.2,0.3-2.2,1-2.9,1.8 c-0.4-1.8-0.9-3.6-1.4-5.4l0.1-0.1l-0.1-0.1c-0.1-0.2-0.1-0.4-0.2-0.5l0-0.2l-0.1,0c-1-3.4-2.2-6.8-3.5-10.1 c1.1,0.3,2.3,0.2,3.4-0.2c2.9-1.1,4.3-4.4,3.1-7.4c-1.3-3-4.7-4.2-7.4-2.9c-1.1,0.5-2,1.4-2.5,2.4c-1.4-3-2.9-5.9-4.5-8.8l0.1-0.1 l-0.2-0.1c-0.1-0.2-0.2-0.3-0.3-0.5l0-0.2l-0.1,0c-1.1-1.9-2.2-3.7-3.3-5.5c1.1,0.1,2.3-0.2,3.3-0.9c2.6-1.6,3.4-5.2,1.5-7.8 c-1.8-2.7-5.4-3.3-7.9-1.4c-1,0.7-1.7,1.7-2,2.8c-2.8-3.8-5.8-7.5-9-11l0-0.1l-0.1-0.1c-0.1-0.2-0.3-0.3-0.4-0.5l0-0.2l-0.1,0 c-0.5-0.5-1-1.1-1.5-1.6c1.1-0.2,2.2-0.7,3.1-1.5c2.3-2.1,2.3-5.7,0-8c-2.3-2.3-5.9-2.1-8,0.2c-0.8,0.9-1.3,2-1.4,3.1 c-0.8-0.7-1.6-1.4-2.4-2.1l0-0.1l-0.1,0c-0.2-0.1-0.3-0.3-0.5-0.4l-0.1-0.1l-0.1,0c-3.3-2.9-6.8-5.6-10.4-8.1 c1.1-0.4,2-1.1,2.7-2.1c1.8-2.5,1.2-6.1-1.6-7.8c-2.7-1.8-6.2-0.9-7.8,1.7c-0.6,1.1-0.9,2.2-0.8,3.3c-2.1-1.3-4.3-2.5-6.5-3.7 l0-0.1l-0.1,0c-0.2-0.1-0.4-0.2-0.6-0.3l-0.1-0.1l0,0c-2.6-1.4-5.3-2.7-8-3.9c1-0.6,1.8-1.4,2.3-2.6c1.3-2.8,0-6.2-3-7.4 c-3-1.2-6.3,0.3-7.3,3.2c-0.4,1.2-0.4,2.3-0.1,3.4c-3.7-1.3-7.4-2.5-11.2-3.5l0,0l-0.1,0c-0.3-0.1-0.5-0.1-0.8-0.2l0,0l0,0 c-1.5-0.4-3-0.7-4.5-1.1c0.8-0.8,1.5-1.8,1.8-3c0.7-3-1.3-6-4.4-6.6c-3.2-0.6-6.1,1.5-6.5,4.6c-0.2,1.2,0.1,2.4,0.6,3.4 c-0.3,0-0.6-0.1-0.8-0.1l0,0l0,0c-0.3,0-0.6-0.1-0.8-0.1l0,0l0,0c-4.7-0.6-9.4-1.1-14.2-1.2l0,0l0,0c-0.3,0-0.6,0-0.9,0l0,0l0,0 c-0.1,0-0.2,0-0.4,0c0.7-0.9,1.1-2,1.1-3.3c0.1-3.1-2.4-5.7-5.6-5.6c-3.2,0-5.7,2.7-5.5,5.8c0.1,1.2,0.5,2.3,1.2,3.2 c-2,0.1-4,0.2-6,0.4l0,0v0c-3.8,0.3-7.5,0.8-11.2,1.5c0.5-1,0.7-2.2,0.5-3.4c-0.5-3-3.5-5.1-6.6-4.4c-3.2,0.7-5.1,3.7-4.3,6.7 c0.3,1.2,1,2.2,1.8,2.9c-5.7,1.4-11.2,3.1-16.5,5.2c0.3-1.1,0.2-2.3-0.2-3.4c-1.1-2.9-4.4-4.3-7.4-3.1c-3,1.3-4.2,4.7-2.9,7.4 c0.5,1.1,1.4,2,2.4,2.5c-5.3,2.5-10.3,5.2-15.2,8.3c0.1-1.1-0.2-2.3-0.9-3.3c-1.6-2.6-5.2-3.4-7.8-1.5c-2.7,1.8-3.3,5.4-1.4,7.9 c0.7,1,1.7,1.7,2.8,2c-4.7,3.4-9.1,7.1-13.3,11.1c-0.2-1.1-0.7-2.2-1.5-3.1c-2.1-2.3-5.7-2.3-8,0c-2.3,2.3-2.1,5.9,0.2,8 c0.9,0.8,2,1.3,3.1,1.4c-3.9,4.3-7.5,8.8-10.9,13.5c-0.4-1.1-1.1-2-2.1-2.7c-2.5-1.8-6.1-1.2-7.8,1.6c-1.8,2.7-0.9,6.2,1.7,7.8 c1.1,0.6,2.2,0.9,3.3,0.8c-3,4.9-5.7,10-8,15.4c-0.6-1-1.4-1.8-2.6-2.3c-2.8-1.3-6.2,0-7.4,3c-1.2,3,0.3,6.3,3.2,7.3 c1.2,0.4,2.3,0.4,3.4,0.1c-2,5.4-3.6,10.9-4.9,16.6c-0.8-0.8-1.8-1.5-3-1.8c-3-0.7-6,1.3-6.6,4.4c-0.6,3.2,1.5,6.1,4.6,6.5 c1.2,0.2,2.4-0.1,3.4-0.6c-0.9,5.6-1.4,11.4-1.5,17.3c-0.9-0.7-2-1.1-3.3-1.1c-3.1-0.1-5.7,2.4-5.6,5.6c0,3.2,2.7,5.7,5.8,5.5 c1.2-0.1,2.3-0.5,3.2-1.2c0.2,5.9,0.9,11.6,1.9,17.2c-1-0.5-2.2-0.7-3.4-0.5c-3,0.5-5.1,3.5-4.4,6.6c0.7,3.2,3.7,5.1,6.7,4.3 c1.2-0.3,2.2-1,2.9-1.8c1.4,5.7,3.1,11.2,5.2,16.5c-1.1-0.3-2.3-0.2-3.4,0.2c-2.9,1.1-4.3,4.4-3.1,7.4c1.3,3,4.7,4.2,7.4,2.9 c1.1-0.5,2-1.4,2.5-2.4c2.5,5.3,5.2,10.3,8.3,15.2c-1.1-0.1-2.3,0.2-3.3,0.9c-2.6,1.6-3.4,5.2-1.6,7.8c1.8,2.7,5.4,3.3,7.9,1.4 c1-0.7,1.7-1.7,2-2.8c3.4,4.7,7.1,9.1,11.1,13.3c-1.1,0.2-2.2,0.7-3.1,1.5c-2.3,2.1-2.3,5.7,0,8c2.3,2.3,5.9,2.1,8-0.2 c0.8-0.9,1.3-2,1.4-3.1c4.3,3.9,8.8,7.5,13.5,10.9c-1.1,0.4-2,1.1-2.7,2.1c-1.8,2.5-1.2,6.1,1.5,7.8c2.7,1.8,6.2,0.9,7.8-1.7 c0.6-1.1,0.9-2.2,0.8-3.3c4.9,3,10,5.7,15.4,8c-1,0.6-1.8,1.4-2.3,2.6c-1.3,2.8,0.1,6.2,3,7.4c3,1.2,6.3-0.3,7.3-3.2 c0.4-1.2,0.4-2.3,0.1-3.4c5.4,2,11,3.6,16.6,4.8c-0.8,0.8-1.5,1.8-1.8,3c-0.3,1.4-0.1,2.8,0.6,4h-69.9c-1,0-1.9,0.8-1.9,1.9 c0,1,0.8,1.9,1.9,1.9h58.1v10.3h83.9v-10.3h58.1c1,0,1.9-0.8,1.9-1.9c0-1-0.8-1.9-1.9-1.9h-67.6c1-1.3,1.4-3,1-4.7 c-0.3-1.2-1-2.2-1.8-2.9c0.6-0.2,1.3-0.3,1.9-0.5l0,0l0,0c0.3-0.1,0.5-0.1,0.8-0.2l0.1,0l0,0c4.6-1.2,9.1-2.7,13.6-4.4l0,0 l0.1-0.1c0,0,0.1,0,0.1,0c-0.3,1.1-0.2,2.3,0.2,3.4c1.1,2.9,4.4,4.3,7.4,3c3-1.3,4.2-4.7,2.9-7.4c-0.5-1.1-1.4-2-2.4-2.5 c1.9-0.9,3.7-1.8,5.6-2.8l0,0l0.1-0.1c0.2-0.1,0.4-0.2,0.6-0.3l0.1,0l0-0.1c3-1.6,5.9-3.3,8.8-5.1c-0.1,1.1,0.2,2.3,0.9,3.3 c1.6,2.6,5.2,3.4,7.8,1.5c2.7-1.8,3.3-5.4,1.4-7.9c-0.7-1-1.7-1.7-2.8-2c2.8-2.1,5.6-4.2,8.2-6.5l0.1,0l0.1-0.1 c0.2-0.1,0.3-0.3,0.5-0.5l0.1,0l0-0.1c1.5-1.3,2.9-2.6,4.3-4c0.2,1.1,0.7,2.2,1.5,3.1c2.1,2.3,5.7,2.3,8,0c2.3-2.3,2.1-5.9-0.2-8 c-0.9-0.8-2-1.3-3.1-1.4c0.1-0.1,0.2-0.2,0.2-0.3l0.1-0.1l0-0.1c3.2-3.5,6.2-7.2,9-11l0.1,0l0-0.2c0.1-0.2,0.2-0.3,0.4-0.5 l0.2-0.1l0-0.1c0.3-0.4,0.6-0.9,0.9-1.3c0.4,1.1,1.1,2,2.1,2.7c2.5,1.8,6.1,1.2,7.8-1.6c1.8-2.7,0.9-6.2-1.7-7.8 c-1.1-0.6-2.2-0.9-3.3-0.8c0.7-1.1,1.3-2.2,1.9-3.2l0.1,0l0-0.2c0.1-0.2,0.2-0.3,0.3-0.5l0.2-0.1l-0.1-0.1c2-3.6,3.9-7.4,5.6-11.2 c0.6,1,1.4,1.8,2.6,2.3c2.8,1.3,6.2-0.1,7.4-3c1.2-3-0.3-6.3-3.2-7.3c-1.2-0.4-2.3-0.4-3.4-0.1c0.9-2.5,1.7-5.1,2.5-7.6l0.1,0 l0-0.2c0.1-0.2,0.1-0.4,0.2-0.5l0.1-0.2l-0.1-0.1c0.8-2.6,1.4-5.3,2-8c0.8,0.8,1.8,1.5,3,1.8c3,0.7,6-1.3,6.6-4.4 c0.6-3.2-1.5-6.1-4.6-6.5c-1.2-0.2-2.4,0.1-3.4,0.6c0.6-4,1-8.1,1.3-12.2l0.1,0l-0.1-0.2c0-0.2,0-0.4,0-0.5l0.1-0.2l-0.1,0 c0.1-1.3,0.1-2.7,0.1-4C1460.5,160.7,1461.7,161.1,1462.9,161.2z M1456.4,147.8c-4.4-1.6-8.9-3-13.3-4.2l-0.2,0.5 c0-0.3-0.1-0.6-0.1-0.9l0.3,0.4c4.1-2.2,8.1-4.5,12-7.1C1455.7,140.2,1456.2,144,1456.4,147.8z M1443.1,145.6 c4.1,1.2,8.2,2.5,12.2,4c-3.9,1.9-7.8,3.7-11.7,5.4C1443.5,151.8,1443.4,148.7,1443.1,145.6z M1455.3,164.3 c-4.1,1.5-8.1,2.8-12.2,4c0.3-3.1,0.5-6.2,0.5-9.4C1447.5,160.6,1451.4,162.4,1455.3,164.3z M1422.5,220.6l-91.7-61.3l101.9,42.2 C1429.9,208.2,1426.5,214.6,1422.5,220.6z M1430.7,210.4c2.8,3.2,5.5,6.5,8.1,10c-4.3-0.5-8.5-1.1-12.7-1.8 C1427.8,215.9,1429.3,213.2,1430.7,210.4z M1349.5,271.8c0.2,0,0.4-0.1,0.6-0.1l-0.3,0.2c2.5,3.9,5.2,7.7,8.1,11.5 c-2.5,0.6-5.1,1.2-7.7,1.7c-0.4-2.8-0.8-5.8-1.2-9c0.3-1.4,0.6-2.8,0.8-4.1L1349.5,271.8z M1302.4,285c0.1-0.2,0.2-0.4,0.4-0.6 c0,0.2-0.1,0.4-0.1,0.6C1302.6,285.1,1302.5,285,1302.4,285z M1231,221.4l91.7-61.3l-78,77.9C1239.6,233,1235,227.4,1231,221.4z M1238.8,234.7c-4,1.4-8,2.7-12.1,3.9c1.9-3.8,4-7.5,6.2-11.1C1234.8,230,1236.8,232.4,1238.8,234.7z M1230.4,220.6 c-4-6-7.4-12.4-10.2-19l101.9-42.2L1230.4,220.6z M1230.5,224.2c-4.1,1-8.2,1.8-12.4,2.5c2.4-3.5,4.8-7,7.4-10.3 C1227.1,219.1,1228.8,221.7,1230.5,224.2z M1213.6,179.9l108.1-21.5l-101.9,42.2C1217.1,194,1215,187.1,1213.6,179.9z M1217.8,200.7c-4.2,0-8.4-0.1-12.7-0.4c3.1-2.9,6.3-5.7,9.6-8.3C1215.6,195,1216.6,197.8,1217.8,200.7z M1213.4,179 c-1.3-7-2.1-14.2-2.1-21.5h110.2L1213.4,179z M1213.5,188c-4.2-0.5-8.4-1.1-12.5-1.8c3.4-2.5,6.9-4.9,10.5-7.2 C1212,182.1,1212.7,185.1,1213.5,188z M1219.8,113.3l101.9,42.2L1213.6,134C1215,126.9,1217.1,119.9,1219.8,113.3z M1214.7,121.9 c-3.3-2.6-6.5-5.4-9.6-8.3c4.2-0.3,8.5-0.4,12.7-0.4C1216.6,116.1,1215.6,119,1214.7,121.9z M1230.4,93.4l91.7,61.3l-101.9-42.2 C1223,105.7,1226.4,99.4,1230.4,93.4z M1225.5,97.5c-2.6-3.3-5.1-6.7-7.4-10.3c4.2,0.7,8.3,1.5,12.4,2.5 C1228.8,92.3,1227.1,94.9,1225.5,97.5z M1244.7,75.9l78,77.9L1231,92.6C1235,86.6,1239.6,81,1244.7,75.9z M1233,86.4 c-2.2-3.6-4.3-7.3-6.2-11.1c4.1,1.2,8.1,2.5,12.1,3.9C1236.8,81.6,1234.8,84,1233,86.4z M1432.7,112.4l-101.9,42.2l91.7-61.2 C1426.5,99.4,1429.9,105.7,1432.7,112.4z M1426.1,95.4c4.2-0.8,8.4-1.4,12.7-1.8c-2.6,3.4-5.3,6.8-8.1,10 C1429.3,100.7,1427.8,98,1426.1,95.4z M1437.5,119.5c4.3,0.2,8.5,0.6,12.8,1.1c-3.3,2.8-6.7,5.4-10.2,7.9 C1439.4,125.5,1438.5,122.5,1437.5,119.5z M1441.7,156.5h-110.2l108.1-21.5C1440.9,141.9,1441.6,149.1,1441.7,156.5z M1439.4,134 l-108.1,21.5l101.9-42.2C1435.8,119.9,1437.9,126.9,1439.4,134z M1432.5,107.1c4.2-0.3,8.5-0.4,12.9-0.4c-3,3.1-6.1,6.1-9.2,9 C1435,112.8,1433.8,109.9,1432.5,107.1z M1330.3,153.8l78-77.9c5.1,5.1,9.7,10.7,13.7,16.7L1330.3,153.8z M1329.6,153.1l61.3-91.7 c6,4,11.6,8.6,16.7,13.7L1329.6,153.1z M1328.8,152.6L1371,50.7c6.7,2.8,13.1,6.2,19.1,10.2L1328.8,152.6z M1348.3,294h-14.9 c0-0.2,0-0.5,0-0.7c-0.1-1.2-0.5-2.3-1.2-3.2c4.3-0.2,8.6-0.6,12.8-1.2l0,0l0,0c0.3,0,0.6-0.1,0.8-0.1l0,0l0,0 c0.4-0.1,0.8-0.1,1.2-0.2C1347.5,290.5,1347.9,292.3,1348.3,294z M1306.1,288.6c2.8,0.4,5.7,0.8,8.6,1v0l0,0 c2.9,0.2,5.8,0.4,8.7,0.5c-0.7,0.9-1.1,2-1.1,3.3c0,0.2,0,0.4,0,0.6H1306c0.3-0.6,0.6-1.2,0.7-2 C1306.9,290.8,1306.6,289.6,1306.1,288.6z M1304.5,270.1l0.9-4.6c-0.2,1.6-0.5,3.1-0.7,4.6 C1304.6,270.1,1304.6,270.1,1304.5,270.1z M1336.3,273.7c0.2,0,0.4,0,0.6-0.1l-0.3,0.2c2.1,4.2,4.3,8.3,6.8,12.3 c-3.7,0.5-7.5,0.8-11.4,1c1.7-4.4,3.3-8.8,4.6-13.3L1336.3,273.7z M1322.9,274.1c0.2,0,0.4,0,0.5,0l-0.3,0.1 c1.6,4.4,3.4,8.7,5.3,13c-0.7,0-1.4,0-2.1,0c-3.1,0-6.2-0.1-9.3-0.3c2.2-4.2,4.2-8.4,6.1-12.7L1322.9,274.1z M1330.2,285.9 c-1.8-3.9-3.5-7.8-5-11.8c0.4,0,0.8,0,1.2,0c2.7,0,5.4-0.1,8.1-0.3C1333.3,277.9,1331.8,281.9,1330.2,285.9z M1316.5,230.2 c3.5-21.1,6.4-40.2,8.2-54.2c0.4,0.3,0.8,0.6,1.3,0.7v95.4c-5.7,0-11.2-0.5-16.7-1.3C1311.5,259.1,1314,245.2,1316.5,230.2z M1321.2,274c-1.7,3.9-3.6,7.7-5.6,11.5c-1.4-4.1-2.6-8.1-3.6-12.2C1315,273.6,1318,273.8,1321.2,274z M1344.9,284.6 c-2.2-3.7-4.3-7.4-6.3-11.1c1.8-0.2,3.6-0.4,5.4-0.7c0.6,3.1,1.2,6,1.7,8.8C1345.5,282.6,1345.2,283.6,1344.9,284.6z M1327,272.2 v-95.4c0.5-0.1,1-0.3,1.3-0.7c1.8,13.9,4.7,33.1,8.2,54.2c2.5,15,4.9,28.9,7.2,40.6C1338.2,271.7,1332.6,272.1,1327,272.2z M1326,152l-21.5-108.1c7-1.3,14.2-2.1,21.5-2.1V152z M1325,152.2l-42.2-101.9c6.6-2.7,13.5-4.8,20.7-6.3L1325,152.2z M1324.1,152.6l-61.3-91.7c6-4,12.4-7.4,19.1-10.2L1324.1,152.6z M1323.3,153.1l-78-78c5.1-5.1,10.7-9.7,16.7-13.7L1323.3,153.1z M1219.4,109.4c-2.9-3-5.8-6.1-8.6-9.4c4.3,0.2,8.5,0.6,12.6,1.1C1222,103.8,1220.6,106.6,1219.4,109.4z M1321.5,156.5h-110.2 c0-7.4,0.8-14.5,2.1-21.5L1321.5,156.5z M1211.4,134.9c-3.5-2.2-7-4.6-10.5-7.2c4.2-0.8,8.4-1.4,12.5-1.8 C1212.7,128.9,1212,131.9,1211.4,134.9z M1223.5,212.8c-4.2,0.5-8.4,0.9-12.6,1.1c2.8-3.2,5.6-6.4,8.6-9.4 C1220.6,207.3,1222,210.1,1223.5,212.8z M1320.8,163.3c0.1,0.2,0.3,0.3,0.5,0.4l-59.3,88.7c-6-4-11.6-8.6-16.7-13.7L1320.8,163.3z M1322.6,161.6l0.8-0.8l-0.5,0.8C1322.7,161.6,1322.6,161.6,1322.6,161.6z M1311,229.4c-0.8,4.9-1.6,9.8-2.3,14.4l-5.2,26 c-7.2-1.4-14.1-3.6-20.7-6.3l39.4-95.2C1319.3,182.3,1315.2,204.4,1311,229.4z M1304.4,272c-0.4,2.7-0.7,5.3-1.1,7.8 c-0.8,1.2-1.6,2.4-2.4,3.6c-0.9-4.2-1.6-8.4-2.2-12.6C1300.6,271.3,1302.5,271.7,1304.4,272z M1308.4,275.6c0.5-0.8,1-1.7,1.4-2.5 l-0.2-0.2c0.2,0,0.3,0,0.5,0.1l-0.3,0.1c1.1,4.5,2.4,9,3.8,13.5c-2.5-0.2-4.9-0.6-7.3-0.9C1307,282.6,1307.7,279.2,1308.4,275.6z M1348.2,270.1c-0.2-1.5-0.4-3-0.7-4.6l0.9,4.6C1348.4,270.1,1348.3,270.1,1348.2,270.1z M1329.6,160.8l0.8,0.8 c-0.1,0-0.2,0-0.3,0L1329.6,160.8z M1332.1,163.3l75.4,75.4c-5.1,5.1-10.7,9.7-16.7,13.7l-59.3-88.7 C1331.8,163.6,1332,163.5,1332.1,163.3z M1330.3,160.1l91.7,61.3c-4.1,6-8.7,11.6-13.7,16.7L1330.3,160.1z M1436.1,198.2 c3.2,2.9,6.2,5.8,9.2,9c-4.3,0-8.6-0.1-12.9-0.4C1433.8,204,1435,201.1,1436.1,198.2z M1433.1,200.6l-101.9-42.2l108.1,21.5 C1437.9,187.1,1435.8,194,1433.1,200.6z M1440.1,185.4c3.5,2.5,6.9,5.1,10.2,7.9c-4.3,0.5-8.6,0.9-12.8,1.1 C1438.5,191.5,1439.4,188.5,1440.1,185.4z M1439.6,179l-108.1-21.5h110.2C1441.6,164.8,1440.9,172,1439.6,179z M1442.6,172.3 c3.7,2.1,7.4,4.3,11,6.6c-4.2,1-8.4,1.9-12.6,2.6C1441.7,178.5,1442.2,175.4,1442.6,172.3z M1441,132.4c4.2,0.7,8.4,1.6,12.6,2.6 c-3.6,2.4-7.3,4.6-11,6.6C1442.2,138.5,1441.7,135.4,1441,132.4z M1454.5,133c-4.6-1.1-9.1-2-13.7-2.6l-0.1,0.5 c-0.1-0.3-0.1-0.6-0.2-0.8l0.3,0.4c3.8-2.6,7.5-5.4,11.2-8.4C1453,125.6,1453.9,129.3,1454.5,133z M1451,118.6 c-4.7-0.5-9.3-0.9-13.9-1l-0.1,0.5c-0.1-0.3-0.2-0.5-0.3-0.8c0.1,0.1,0.3,0.2,0.4,0.3c3.5-3,6.9-6.3,10.1-9.6 C1448.6,111.4,1449.9,115,1451,118.6z M1445.8,104.7c-4.7,0-9.4,0.2-14,0.6l0,0.5c-0.1-0.3-0.3-0.5-0.4-0.8l0.4,0.3 c3.1-3.4,6.1-7,9-10.7C1442.6,97.8,1444.3,101.2,1445.8,104.7z M1439.1,91.4c-4.7,0.5-9.3,1.3-13.8,2.2l0,0.5 c-0.1-0.2-0.3-0.5-0.4-0.7l0.4,0.2c2.7-3.8,5.3-7.7,7.7-11.7C1435.1,85,1437.2,88.1,1439.1,91.4z M1423.9,92 c-1.7-2.6-3.6-5.1-5.5-7.6c4.1-1.2,8.2-2.3,12.4-3.3C1428.7,84.9,1426.4,88.5,1423.9,92z M1423.7,70.2c2.5,2.8,4.9,5.7,7.2,8.8 c-4.6,1.1-9.1,2.3-13.5,3.7c0,0.2,0,0.3,0.1,0.5c-0.2-0.2-0.3-0.4-0.5-0.6l0.4,0.2C1419.6,78.7,1421.7,74.5,1423.7,70.2z M1415.9,81.3c-2-2.4-4.1-4.7-6.3-6.9c3.9-1.7,7.9-3.2,12-4.6C1419.8,73.7,1417.9,77.6,1415.9,81.3z M1418.6,64.9 c0.9,0.9,1.8,1.8,2.7,2.8c-4.4,1.6-8.8,3.3-13,5.2l0.1,0.4c-0.2-0.2-0.4-0.4-0.6-0.5l0.4,0.1c1.8-4.3,3.4-8.7,4.8-13.1 C1415,61.4,1416.8,63.1,1418.6,64.9z M1406.7,71.6c-2.3-2.1-4.6-4.2-7.1-6.1c3.7-2.1,7.5-4.1,11.4-6 C1409.7,63.6,1408.3,67.7,1406.7,71.6z M1401.5,50.5c3.1,2.2,6.1,4.5,9,7c-4.2,2.1-8.3,4.3-12.3,6.7l0.2,0.4 c-0.2-0.2-0.4-0.3-0.6-0.5l0.4,0.1C1399.5,59.6,1400.6,55.1,1401.5,50.5z M1396.4,63c-2.5-1.9-5.1-3.6-7.7-5.3 c3.4-2.5,7-4.9,10.6-7.2C1398.5,54.8,1397.6,58.9,1396.4,63z M1388.9,42.6c3.3,1.8,6.6,3.8,9.7,5.9c-4,2.5-7.8,5.2-11.5,8l0.2,0.4 c-0.2-0.1-0.4-0.2-0.6-0.4l0.4,0C1387.9,51.9,1388.5,47.3,1388.9,42.6z M1385.3,55.7c-2.7-1.6-5.4-3-8.2-4.4 c3.1-2.9,6.3-5.7,9.7-8.4C1386.4,47.2,1385.9,51.5,1385.3,55.7z M1375.3,50.3c0.2-4.6,0.3-9.3,0.2-14c3.5,1.4,7,3,10.4,4.7 C1382.2,43.9,1378.6,47,1375.3,50.3c0.1,0.1,0.2,0.2,0.2,0.3c-0.2-0.1-0.4-0.2-0.6-0.3L1375.3,50.3z M1373.3,36.8 c0.2,4.3,0.2,8.6,0,12.8c-2.8-1.2-5.7-2.4-8.7-3.4C1367.4,43,1370.3,39.9,1373.3,36.8z M1372.2,35c-3.3,3.4-6.4,6.9-9.4,10.4 l0.3,0.3c-0.2-0.1-0.4-0.1-0.6-0.2l0.4-0.1c-0.3-4.6-0.8-9.3-1.5-14C1365,32.4,1368.7,33.6,1372.2,35z M1370.1,50.3l-42.2,101.9 l21.5-108.1C1356.6,45.5,1363.5,47.6,1370.1,50.3z M1327,152V41.8c7.4,0,14.5,0.8,21.5,2.1L1327,152z M1360.8,45 c-3-0.9-6-1.7-9-2.4c2.4-3.5,4.9-7,7.5-10.3C1360,36.5,1360.5,40.7,1360.8,45z M1358,30.5c-2.9,3.7-5.6,7.6-8.1,11.5l0.3,0.2 c-0.2,0-0.4-0.1-0.6-0.1l0.3-0.1c-0.8-4.6-1.8-9.2-3.1-13.7C1350.6,28.9,1354.3,29.6,1358,30.5z M1347.8,41.8 c-3-0.6-6.1-1-9.2-1.3c1.9-3.8,4-7.5,6.3-11.1C1346,33.5,1347,37.6,1347.8,41.8z M1343.4,27.8c-2.4,4-4.7,8.2-6.8,12.3l0.3,0.2 c-0.2,0-0.4,0-0.6-0.1l0.3-0.1c-1.3-4.5-2.9-8.9-4.6-13.3C1335.8,27,1339.6,27.3,1343.4,27.8z M1330.2,28.1c1.6,4,3,8,4.3,12 c-2.7-0.2-5.4-0.3-8.1-0.3c-0.4,0-0.8,0-1.2,0C1326.8,35.9,1328.4,32,1330.2,28.1z M1326.5,26.7c0.7,0,1.4,0,2.1,0 c-2,4.3-3.7,8.6-5.3,13l0.3,0.1c-0.2,0-0.4,0-0.5,0l0.3-0.2c-1.8-4.3-3.9-8.5-6.1-12.7C1320.2,26.8,1323.3,26.7,1326.5,26.7z M1315.5,28.5c2,3.8,3.9,7.6,5.6,11.4c-3.1,0.1-6.2,0.4-9.3,0.8C1313,36.6,1314.2,32.6,1315.5,28.5z M1313.7,27.3 c-1.5,4.5-2.8,9-3.8,13.5l0.3,0.1c-0.2,0-0.3,0-0.5,0.1l0.2-0.2c-2.3-4-4.8-8-7.5-11.9C1306.1,28.2,1309.9,27.7,1313.7,27.3z M1307.9,41.3c-3.1,0.5-6.1,1.1-9.1,1.8c0.6-4.2,1.3-8.4,2.2-12.6C1303.4,34.1,1305.7,37.7,1307.9,41.3z M1299,29.6 c-1,4.6-1.7,9.3-2.3,13.9l0.3,0.1c-0.2,0-0.3,0.1-0.4,0.1c0.1-0.1,0.1-0.1,0.2-0.2c-2.8-3.8-5.7-7.4-8.8-11 C1291.5,31.4,1295.2,30.4,1299,29.6z M1286.7,34.3c2.8,3.2,5.5,6.5,8.1,9.9c-3,0.8-5.9,1.8-8.8,2.9 C1286.1,42.8,1286.3,38.6,1286.7,34.3z M1284.7,33.5c-0.4,4.7-0.6,9.4-0.7,14.1c0.1,0,0.2,0,0.3,0c-0.1,0.1-0.3,0.1-0.4,0.2 l0.2-0.2c-3.2-3.4-6.5-6.7-10-9.9C1277.5,36.2,1281,34.8,1284.7,33.5z M1282.1,48.5c-2.9,1.2-5.7,2.5-8.4,3.8 c-0.4-4.2-0.6-8.4-0.7-12.7C1276.2,42.5,1279.2,45.5,1282.1,48.5z M1270.9,39.1c0.1,4.7,0.4,9.4,1,14.1l0.2,0 c-0.1,0.1-0.2,0.1-0.4,0.2l0.1-0.2c-3.5-3-7.3-5.9-11.1-8.7C1264,42.6,1267.4,40.8,1270.9,39.1z M1270.1,54.3 c-2.7,1.5-5.4,3.1-7.9,4.8c-0.9-4.1-1.6-8.3-2.2-12.5C1263.5,49,1266.8,51.6,1270.1,54.3z M1257.8,46.3c0.7,4.7,1.5,9.3,2.6,13.9 c0.1,0,0.1,0,0.2,0c-0.1,0.1-0.2,0.1-0.3,0.2l0.1-0.2c-3.9-2.6-7.9-5.1-12-7.4C1251.4,50.4,1254.5,48.3,1257.8,46.3z M1258.7,61.4 c-2.5,1.8-5,3.7-7.3,5.7c-1.3-4-2.5-8.1-3.6-12.2C1251.6,56.9,1255.2,59.1,1258.7,61.4z M1245.6,54.8c1.2,4.6,2.6,9.1,4.1,13.5 l0.2,0c-0.1,0.1-0.2,0.1-0.2,0.2l0.1-0.2c-4.2-2.2-8.4-4.2-12.8-6C1239.7,59.7,1242.6,57.2,1245.6,54.8z M1248.3,69.8 c-2.3,2.1-4.5,4.2-6.6,6.4c-1.8-3.8-3.4-7.7-4.9-11.7C1240.7,66.1,1244.5,67.9,1248.3,69.8z M1234.3,64.9c0.1-0.1,0.1-0.1,0.2-0.2 c1.7,4.4,3.6,8.8,5.6,13c0.1,0,0.1,0,0.2-0.1c-0.1,0.1-0.1,0.2-0.2,0.2l0-0.2c-4.4-1.7-8.8-3.2-13.4-4.5 C1229.2,70.3,1231.7,67.5,1234.3,64.9z M1224.6,75.8c2.2,4.2,4.6,8.3,7.1,12.3l0.2-0.1c-0.1,0.1-0.1,0.2-0.2,0.2l0-0.2 c-4.5-1.2-9.2-2.2-13.8-3C1219.9,81.9,1222.2,78.8,1224.6,75.8z M1216,87.9c2.7,3.9,5.5,7.7,8.4,11.4c0,0,0.1-0.1,0.1-0.1 c0,0.1-0.1,0.2-0.1,0.2l0-0.2c-4.6-0.6-9.3-1.1-14.1-1.4C1212.1,94.5,1214,91.2,1216,87.9z M1208.8,101c3.1,3.6,6.3,7.1,9.7,10.3 l0.1-0.1c0,0.1-0.1,0.2-0.1,0.2l0-0.1c-4.7-0.1-9.4,0-14.2,0.3C1205.7,108,1207.2,104.4,1208.8,101z M1203.2,114.7 c3.5,3.2,7.1,6.3,10.8,9.2l0.1-0.1c0,0.1,0,0.2-0.1,0.2l0-0.1c-4.7,0.4-9.4,1.1-14,1.9C1200.9,122,1201.9,118.4,1203.2,114.7z M1199.2,129.1c3.9,2.8,7.8,5.4,11.8,7.9c0,0,0.1-0.1,0.1-0.1c0,0.1,0,0.2,0,0.2l0-0.1c-4.6,1-9.2,2.1-13.7,3.5 C1197.7,136.6,1198.4,132.8,1199.2,129.1z M1209.7,148.2c-3.8-1.8-7.5-3.8-11.2-5.9c4.1-1.2,8.1-2.3,12.2-3.3 C1210.2,142,1209.9,145.1,1209.7,148.2z M1210.7,174.9c-4.1-0.9-8.2-2-12.2-3.3c3.7-2.1,7.4-4.1,11.2-5.9 C1209.9,168.8,1210.2,171.9,1210.7,174.9z M1196.8,143.8c4.1,2.3,8.4,4.5,12.6,6.5c0,0,0-0.1,0.1-0.1c0,0.1,0,0.2,0,0.2l-0.1-0.1 c-4.5,1.5-8.9,3.2-13.3,5C1196.3,151.4,1196.5,147.6,1196.8,143.8z M1209.4,161.6c-4-1.4-7.9-2.9-11.8-4.6 c3.9-1.7,7.8-3.2,11.8-4.6c-0.1,1.5-0.1,3.1-0.1,4.6C1209.3,158.5,1209.4,160.1,1209.4,161.6z M1196.8,170.2 c-0.4-3.8-0.6-7.6-0.6-11.5c4.4,1.9,8.8,3.5,13.3,5l0.1-0.1c0,0.1,0,0.2,0,0.2c0,0,0-0.1-0.1-0.1 C1205.2,165.6,1201,167.8,1196.8,170.2z M1197.2,173.5c4.6,1.4,9.2,2.5,13.7,3.5l0-0.1c0,0.1,0,0.2,0,0.2c0,0-0.1-0.1-0.1-0.1 c-4,2.4-7.9,5.1-11.8,7.9C1198.4,181.1,1197.7,177.3,1197.2,173.5z M1200,188.2c4.7,0.8,9.4,1.5,14,1.9l0-0.1c0,0.1,0,0.2,0.1,0.2 l-0.1-0.1c-3.7,2.9-7.3,5.9-10.8,9.2C1202,195.6,1200.9,191.9,1200,188.2z M1204.3,202.4c4.8,0.3,9.5,0.4,14.2,0.3l0-0.1 c0,0.1,0.1,0.2,0.1,0.2l-0.1-0.1c-3.3,3.3-6.6,6.7-9.7,10.3C1207.2,209.5,1205.7,206,1204.3,202.4z M1216,226 c-2-3.2-3.9-6.6-5.7-10c4.8-0.3,9.5-0.7,14.1-1.4l0-0.2c0,0.1,0.1,0.2,0.1,0.2c0,0-0.1-0.1-0.1-0.1 C1221.5,218.3,1218.7,222.1,1216,226z M1217.8,228.9c4.7-0.8,9.3-1.8,13.8-3l0-0.2c0.1,0.1,0.1,0.2,0.2,0.2l-0.2-0.1 c-2.5,4-4.9,8-7.1,12.2C1222.2,235.2,1219.9,232.1,1217.8,228.9z M1234.5,249.3c-0.1-0.1-0.1-0.1-0.2-0.2 c-2.7-2.7-5.2-5.4-7.6-8.3c4.6-1.3,9-2.8,13.4-4.5l0-0.2c0.1,0.1,0.1,0.1,0.2,0.2c-0.1,0-0.1,0-0.2-0.1 C1238.1,240.5,1236.2,244.8,1234.5,249.3z M1241.6,237.7c2.1,2.2,4.3,4.4,6.6,6.4c-3.8,1.9-7.6,3.6-11.6,5.3 C1238.2,245.4,1239.9,241.5,1241.6,237.7z M1237,251.6c4.4-1.8,8.7-3.8,12.8-6l-0.1-0.2c0.1,0.1,0.2,0.1,0.2,0.2l-0.2,0 c-1.6,4.4-2.9,8.9-4.1,13.5C1242.6,256.8,1239.7,254.3,1237,251.6z M1251.4,246.9c2.4,2,4.8,3.9,7.3,5.7 c-3.5,2.3-7.2,4.5-10.9,6.5C1248.9,254.9,1250.1,250.9,1251.4,246.9z M1248.3,261.2c4.1-2.3,8.2-4.8,12-7.4l-0.1-0.2 c0.1,0.1,0.2,0.1,0.3,0.2c-0.1,0-0.1,0-0.2,0c-1,4.6-1.9,9.2-2.6,13.9C1254.5,265.7,1251.4,263.5,1248.3,261.2z M1262.1,254.9 c2.6,1.7,5.2,3.3,7.9,4.8c-3.2,2.7-6.6,5.3-10.1,7.7C1260.5,263.2,1261.3,259,1262.1,254.9z M1271.8,260.7 c-0.5,4.6-0.8,9.3-1,14.1c-3.5-1.6-6.8-3.4-10.1-5.4C1264.6,266.7,1268.3,263.8,1271.8,260.7l-0.1-0.2c0.1,0.1,0.2,0.1,0.4,0.2 L1271.8,260.7z M1262.9,253l59.5-89c0.2,0,0.3,0,0.5,0h0.1l-41.1,99.2C1275.2,260.4,1268.9,257,1262.9,253z M1273,274.3 c0.1-4.3,0.3-8.5,0.7-12.7c2.7,1.4,5.6,2.7,8.4,3.8C1279.2,268.5,1276.2,271.4,1273,274.3z M1274,276.2c3.5-3.2,6.8-6.5,10-9.9 l-0.2-0.2c0.1,0.1,0.3,0.1,0.4,0.2c-0.1,0-0.2,0-0.3,0c0,4.7,0.2,9.4,0.7,14.1C1281,279.2,1277.5,277.8,1274,276.2z M1286,266.9 c2.9,1.1,5.8,2,8.8,2.9c-2.6,3.4-5.2,6.6-8.1,9.9C1286.3,275.4,1286.1,271.1,1286,266.9z M1287.9,281.5c3.1-3.6,6.1-7.3,8.8-11 c-0.1-0.1-0.1-0.1-0.2-0.2c0.1,0,0.3,0.1,0.4,0.1l-0.3,0.1c0.6,4.6,1.3,9.3,2.3,13.9C1295.2,283.5,1291.5,282.6,1287.9,281.5z M1359.3,281.7c-2.7-3.4-5.2-6.8-7.5-10.3c3-0.7,6.1-1.5,9-2.4C1360.5,273.2,1360,277.4,1359.3,281.7z M1349.4,269.9l-5.2-26 c-0.7-4.7-1.5-9.5-2.3-14.5c-4.1-25-8.3-47.1-11.2-61l39.4,95.2C1363.5,266.3,1356.6,268.4,1349.4,269.9z M1361.4,282.5 c0.7-4.7,1.2-9.3,1.5-14l-0.4-0.1c0.2-0.1,0.4-0.1,0.6-0.2l-0.3,0.3c3,3.6,6.1,7.1,9.4,10.4C1368.7,280.3,1365,281.5,1361.4,282.5 z M1373.4,277.1c-3-3-5.9-6.2-8.7-9.4c2.9-1,5.8-2.2,8.7-3.4C1373.5,268.6,1373.5,272.8,1373.4,277.1z M1371,263.2l-41.1-99.2h0.1 c0.2,0,0.4,0,0.5,0l59.5,89C1384.1,257,1377.7,260.4,1371,263.2z M1375.4,277.7c0.1-4.7,0.1-9.4-0.2-14l-0.4,0 c0.2-0.1,0.4-0.2,0.6-0.3c-0.1,0.1-0.2,0.2-0.2,0.3c3.4,3.2,6.9,6.3,10.5,9.3C1382.4,274.7,1379,276.3,1375.4,277.7z M1377,262.7 c2.8-1.3,5.6-2.8,8.2-4.4c0.6,4.2,1.1,8.4,1.5,12.7C1383.4,268.3,1380.1,265.5,1377,262.7z M1388.9,271.4c-0.4-4.7-1-9.3-1.8-13.9 l-0.4,0c0.2-0.1,0.4-0.2,0.6-0.4l-0.2,0.4c3.7,2.8,7.5,5.5,11.5,8C1395.5,267.6,1392.2,269.5,1388.9,271.4z M1388.7,256.2 c2.6-1.7,5.2-3.4,7.7-5.3c1.1,4.1,2.1,8.3,2.9,12.5C1395.7,261.1,1392.2,258.7,1388.7,256.2z M1401.5,263.5 c-0.9-4.6-2-9.2-3.3-13.6l-0.4,0.1c0.2-0.2,0.4-0.3,0.6-0.5l-0.2,0.4c4,2.4,8.1,4.6,12.3,6.7 C1407.6,259,1404.6,261.3,1401.5,263.5z M1399.6,248.4c2.4-1.9,4.8-4,7.1-6.1c1.6,4,3,8,4.3,12.1 C1407.1,252.5,1403.3,250.6,1399.6,248.4z M1418.6,249.1c-1.8,1.8-3.6,3.5-5.4,5.1c-1.5-4.5-3.1-8.9-4.8-13.1l-0.4,0.1 c0.2-0.2,0.4-0.4,0.6-0.5l-0.1,0.4c4.2,1.9,8.6,3.6,13,5.2C1420.4,247.2,1419.5,248.2,1418.6,249.1z M1409.6,239.5 c2.2-2.2,4.3-4.5,6.3-6.9c2,3.7,3.9,7.6,5.6,11.5C1417.5,242.7,1413.5,241.2,1409.6,239.5z M1423.7,243.7c-2-4.3-4-8.4-6.3-12.5 l-0.4,0.2c0.2-0.2,0.3-0.4,0.5-0.6c0,0.1,0,0.3-0.1,0.5c4.4,1.4,8.9,2.6,13.5,3.7C1428.6,238,1426.2,240.9,1423.7,243.7z M1418.5,229.5c1.9-2.4,3.8-5,5.5-7.6c2.4,3.5,4.7,7.1,6.9,10.8C1426.7,231.8,1422.5,230.7,1418.5,229.5z M1432.9,232.1 c-2.4-4-5-7.9-7.7-11.7l-0.4,0.2c0.1-0.2,0.3-0.5,0.4-0.7l0,0.5c4.5,0.9,9.1,1.6,13.8,2.2C1437.2,225.8,1435.1,229,1432.9,232.1z M1440.8,219.5c-2.9-3.7-5.8-7.3-9-10.7l-0.4,0.3c0.1-0.3,0.3-0.5,0.4-0.8l0,0.5c4.6,0.4,9.3,0.6,14,0.6 C1444.3,212.8,1442.6,216.2,1440.8,219.5z M1447.2,206c-3.3-3.4-6.6-6.6-10.1-9.6c-0.1,0.1-0.3,0.2-0.4,0.3 c0.1-0.3,0.2-0.5,0.3-0.8l0.1,0.5c4.6-0.2,9.3-0.5,13.9-1.1C1449.9,199,1448.6,202.5,1447.2,206z M1452,192 c-3.6-3-7.4-5.8-11.2-8.4l-0.3,0.4c0.1-0.3,0.1-0.6,0.2-0.8l0.1,0.5c4.6-0.7,9.1-1.6,13.7-2.6C1453.9,184.7,1453,188.3,1452,192z M1455.1,177.4c-4-2.5-8-4.9-12-7.1l-0.3,0.4c0-0.3,0.1-0.6,0.1-0.9l0.2,0.5c4.5-1.2,8.9-2.6,13.3-4.2 C1456.2,170,1455.7,173.7,1455.1,177.4z M1456.6,162.6c-4.2-2.1-8.5-4-12.8-5.7l-0.3,0.4c0-0.1,0-0.3,0-0.4c0-0.1,0-0.3,0-0.4 l0.3,0.4c4.3-1.7,8.6-3.6,12.8-5.7c0.1,1.9,0.1,3.8,0.1,5.7C1456.7,158.9,1456.7,160.8,1456.6,162.6z\"></path><path id=\"ldn8\" fill=\"#1E6DB5\" d=\"M1173.6,259h-57.9l29-11.7L1173.6,259z M1135.3,279.4h-4.2v11.7h4.2V279.4z M1148.4,279.4h-4.2 v11.7h4.2V279.4z M1160.6,279.4h-4.2v11.7h4.2V279.4z M1131.2,314.1h4.2v-11.7h-4.2V314.1z M1144.2,314.1h4.2v-11.7h-4.2V314.1z M1156.4,314.1h4.2v-11.7h-4.2V314.1z M1168.3,260.8h-49.7v7.9h49.7V260.8z M1118.6,337.3h167.7v-21.9h-167.7V337.3z M1126.6,314.1v-42.6h-4.2v42.6H1126.6z M1141.4,314.1v-42.6h-4.2v42.6H1141.4z M1154.3,314.1v-42.6h-4.2v42.6H1154.3z M1166.7,314.1v-42.6h-4.2v42.6H1166.7z M1170.8,314.1h4.2v-42.6h-4.2V314.1z M1192.4,314.1v-42.6h-4.2v42.6H1192.4z M1209.8,314.1v-42.6h-4.2v42.6H1209.8z M1227.2,314.1v-42.6h-4.2v42.6H1227.2z M1244.6,314.1v-42.6h-4.2v42.6H1244.6z M1262,314.1v-42.6h-4.2v42.6H1262z M1279.4,314.1v-42.6h-4.2v42.6H1279.4z M1170.8,260.8v7.9h116.9v-7.9H1273l16.3-5.6h-118.5 l11.1,5.6H1170.8z M1282.7,289.2h4.9v-11.6h-4.9V289.2z M1282.7,312.5h4.9v-11.6h-4.9V312.5z M1270.5,277.7h-4.9v11.6h4.9V277.7z M1265.5,312.5h4.9v-11.6h-4.9V312.5z M1253.3,277.7h-4.9v11.6h4.9V277.7z M1248.4,312.5h4.9v-11.6h-4.9V312.5z M1236.1,277.7 h-4.9v11.6h4.9V277.7z M1231.2,312.5h4.9v-11.6h-4.9V312.5z M1218.9,277.7h-4.9v11.6h4.9V277.7z M1214,312.5h4.9v-11.6h-4.9V312.5 z M1201.8,277.7h-4.9v11.6h4.9V277.7z M1196.9,312.5h4.9v-11.6h-4.9V312.5z M1184.6,277.7h-4.9v11.6h4.9V277.7z M1179.7,312.5h4.9 v-11.6h-4.9V312.5z M1169.9,256v-14.1h-51.2v13.4c0.6,0.1,26-9.6,26-9.6L1169.9,256z M1290.5,253.1h-119.7v-5.9V246h1.3h0.8h1.3 h0.8h1.3h0.8h1.3h0.8h1.3h0.8h1.3h0.8h1.3h0.8h1.3h0.8h1.3h0.8h1.3h0.8h1.3h0.8h1.3h0.8h1.3h0.8h1.3h0.8h1.3h0.8h1.3h0.8h1.3h0.8 h1.3h0.8h1.3h0.8h1.3h0.8h1.3h0.8h1.3h0.8h1.3h0.8h1.3h0.8h1.3h0.8h1.3h0.8h1.3h0.8h1.3h0.8h1.3h0.8h1.3h0.8h1.3h0.8h1.3h0.8h1.3 h0.8h1.3h0.8h1.3h0.8h1.3h0.8h1.3h0.8h1.3h0.8h1.3h0.8h1.3h0.8h1.3h0.8h1.3h0.8h1.3h0.8h1.3h0.8h1.3h0.8h1.3h0.8h1.3h0.8h1.3h0.8 h1.3h0.8h1.3h0.8h1.3h0.8h1.3h0.8h1.3h0.8h1.3h0.8h1.3h0.8h1.3h0.8h1.5h1.2V253.1z M1172.9,247.3h-0.8v3.9h0.8V247.3z M1175,247.3 h-0.8v3.9h0.8V247.3z M1177.1,247.3h-0.8v3.9h0.8V247.3z M1179.2,247.3h-0.8v3.9h0.8V247.3z M1181.3,247.3h-0.8v3.9h0.8V247.3z M1183.4,247.3h-0.8v3.9h0.8V247.3z M1185.4,247.3h-0.8v3.9h0.8V247.3z M1187.5,247.3h-0.8v3.9h0.8V247.3z M1189.6,247.3h-0.8v3.9 h0.8V247.3z M1191.7,247.3h-0.8v3.9h0.8V247.3z M1193.8,247.3h-0.8v3.9h0.8V247.3z M1195.9,247.3h-0.8v3.9h0.8V247.3z M1198,247.3 h-0.8v3.9h0.8V247.3z M1200.1,247.3h-0.8v3.9h0.8V247.3z M1202.1,247.3h-0.8v3.9h0.8V247.3z M1204.2,247.3h-0.8v3.9h0.8V247.3z M1206.3,247.3h-0.8v3.9h0.8V247.3z M1208.4,247.3h-0.8v3.9h0.8V247.3z M1210.5,247.3h-0.8v3.9h0.8V247.3z M1212.6,247.3h-0.8v3.9 h0.8V247.3z M1214.7,247.3h-0.8v3.9h0.8V247.3z M1216.8,247.3h-0.8v3.9h0.8V247.3z M1218.9,247.3h-0.8v3.9h0.8V247.3z M1220.9,247.3h-0.8v3.9h0.8V247.3z M1223,247.3h-0.8v3.9h0.8V247.3z M1225.1,247.3h-0.8v3.9h0.8V247.3z M1227.2,247.3h-0.8v3.9 h0.8V247.3z M1229.3,247.3h-0.8v3.9h0.8V247.3z M1231.4,247.3h-0.8v3.9h0.8V247.3z M1233.5,247.3h-0.8v3.9h0.8V247.3z M1235.6,247.3h-0.8v3.9h0.8V247.3z M1237.6,247.3h-0.8v3.9h0.8V247.3z M1239.7,247.3h-0.8v3.9h0.8V247.3z M1241.8,247.3h-0.8v3.9 h0.8V247.3z M1243.9,247.3h-0.8v3.9h0.8V247.3z M1246,247.3h-0.8v3.9h0.8V247.3z M1248.1,247.3h-0.8v3.9h0.8V247.3z M1250.2,247.3 h-0.8v3.9h0.8V247.3z M1252.3,247.3h-0.8v3.9h0.8V247.3z M1254.4,247.3h-0.8v3.9h0.8V247.3z M1256.4,247.3h-0.8v3.9h0.8V247.3z M1258.5,247.3h-0.8v3.9h0.8V247.3z M1260.6,247.3h-0.8v3.9h0.8V247.3z M1262.7,247.3h-0.8v3.9h0.8V247.3z M1264.8,247.3h-0.8v3.9 h0.8V247.3z M1266.9,247.3h-0.8v3.9h0.8V247.3z M1269,247.3h-0.8v3.9h0.8V247.3z M1271.1,247.3h-0.8v3.9h0.8V247.3z M1273.1,247.3 h-0.8v3.9h0.8V247.3z M1275.2,247.3h-0.8v3.9h0.8V247.3z M1277.3,247.3h-0.8v3.9h0.8V247.3z M1279.4,247.3h-0.8v3.9h0.8V247.3z M1281.5,247.3h-0.8v3.9h0.8V247.3z M1283.6,247.3h-0.8v3.9h0.8V247.3z M1285.7,247.3h-0.8v3.9h0.8V247.3z M1287.8,247.3h-0.8v3.9 h0.8V247.3z M1488,259h57.9l-29-11.7L1488,259z M1530.4,279.4h-4.2v11.7h4.2V279.4z M1517.4,279.4h-4.2v11.7h4.2V279.4z M1505.2,279.4h-4.2v11.7h4.2V279.4z M1526.3,314.1h4.2v-11.7h-4.2V314.1z M1513.2,314.1h4.2v-11.7h-4.2V314.1z M1501,314.1h4.2 v-11.7h-4.2V314.1z M1493.3,268.8h49.7v-7.9h-49.7V268.8z M1375.3,337.3H1543v-21.9h-167.7V337.3z M1535,271.5v42.6h4.2v-42.6 H1535z M1520.2,271.5v42.6h4.2v-42.6H1520.2z M1507.3,271.5v42.6h4.2v-42.6H1507.3z M1494.9,271.5v42.6h4.2v-42.6H1494.9z M1490.8,314.1v-42.6h-4.2v42.6H1490.8z M1473.4,314.1v-42.6h-4.2v42.6H1473.4z M1456,314.1v-42.6h-4.2v42.6H1456z M1438.6,314.1 v-42.6h-4.2v42.6H1438.6z M1421.2,314.1v-42.6h-4.2v42.6H1421.2z M1403.8,314.1v-42.6h-4.2v42.6H1403.8z M1386.4,314.1v-42.6h-4.2 v42.6H1386.4z M1490.8,260.8h-11.1l11.1-5.6h-118.5l16.3,5.6h-14.8v7.9h116.9V260.8z M1378.9,289.2v-11.6h-4.9v11.6H1378.9z M1378.9,300.9h-4.9v11.6h4.9V300.9z M1396.1,277.7h-4.9v11.6h4.9V277.7z M1391.1,312.5h4.9v-11.6h-4.9V312.5z M1413.2,277.7h-4.9 v11.6h4.9V277.7z M1408.3,312.5h4.9v-11.6h-4.9V312.5z M1430.4,277.7h-4.9v11.6h4.9V277.7z M1425.5,312.5h4.9v-11.6h-4.9V312.5z M1447.6,277.7h-4.9v11.6h4.9V277.7z M1442.6,312.5h4.9v-11.6h-4.9V312.5z M1464.7,277.7h-4.9v11.6h4.9V277.7z M1459.8,312.5h4.9 v-11.6h-4.9V312.5z M1481.9,277.7h-4.9v11.6h4.9V277.7z M1477,312.5h4.9v-11.6h-4.9V312.5z M1543,255.3v-13.4h-51.2V256l25.2-10.3 C1516.9,245.7,1542.4,255.4,1543,255.3z M1490.8,253.1h-119.7V246h1.2h1.5h0.8h1.3h0.8h1.3h0.8h1.3h0.8h1.3h0.8h1.3h0.8h1.3h0.8 h1.3h0.8h1.3h0.8h1.3h0.8h1.3h0.8h1.3h0.8h1.3h0.8h1.3h0.8h1.3h0.8h1.3h0.8h1.3h0.8h1.3h0.8h1.3h0.8h1.3h0.8h1.3h0.8h1.3h0.8h1.3 h0.8h1.3h0.8h1.3h0.8h1.3h0.8h1.3h0.8h1.3h0.8h1.3h0.8h1.3h0.8h1.3h0.8h1.3h0.8h1.3h0.8h1.3h0.8h1.3h0.8h1.3h0.8h1.3h0.8h1.3h0.8 h1.3h0.8h1.3h0.8h1.3h0.8h1.3h0.8h1.3h0.8h1.3h0.8h1.3h0.8h1.3h0.8h1.3h0.8h1.3h0.8h1.3h0.8h1.3h0.8h1.3h0.8h1.3h0.8h1.3h0.8h1.3 h0.8h1.3h0.8h1.3h0.8h1.3v1.3V253.1z M1374.7,247.3h-0.8v3.9h0.8V247.3z M1376.7,247.3h-0.8v3.9h0.8V247.3z M1378.8,247.3h-0.8 v3.9h0.8V247.3z M1380.9,247.3h-0.8v3.9h0.8V247.3z M1383,247.3h-0.8v3.9h0.8V247.3z M1385.1,247.3h-0.8v3.9h0.8V247.3z M1387.2,247.3h-0.8v3.9h0.8V247.3z M1389.3,247.3h-0.8v3.9h0.8V247.3z M1391.4,247.3h-0.8v3.9h0.8V247.3z M1393.5,247.3h-0.8v3.9 h0.8V247.3z M1395.5,247.3h-0.8v3.9h0.8V247.3z M1397.6,247.3h-0.8v3.9h0.8V247.3z M1399.7,247.3h-0.8v3.9h0.8V247.3z M1401.8,247.3h-0.8v3.9h0.8V247.3z M1403.9,247.3h-0.8v3.9h0.8V247.3z M1406,247.3h-0.8v3.9h0.8V247.3z M1408.1,247.3h-0.8v3.9 h0.8V247.3z M1410.2,247.3h-0.8v3.9h0.8V247.3z M1412.2,247.3h-0.8v3.9h0.8V247.3z M1414.3,247.3h-0.8v3.9h0.8V247.3z M1416.4,247.3h-0.8v3.9h0.8V247.3z M1418.5,247.3h-0.8v3.9h0.8V247.3z M1420.6,247.3h-0.8v3.9h0.8V247.3z M1422.7,247.3h-0.8v3.9 h0.8V247.3z M1424.8,247.3h-0.8v3.9h0.8V247.3z M1426.9,247.3h-0.8v3.9h0.8V247.3z M1429,247.3h-0.8v3.9h0.8V247.3z M1431,247.3 h-0.8v3.9h0.8V247.3z M1433.1,247.3h-0.8v3.9h0.8V247.3z M1435.2,247.3h-0.8v3.9h0.8V247.3z M1437.3,247.3h-0.8v3.9h0.8V247.3z M1439.4,247.3h-0.8v3.9h0.8V247.3z M1441.5,247.3h-0.8v3.9h0.8V247.3z M1443.6,247.3h-0.8v3.9h0.8V247.3z M1445.7,247.3h-0.8v3.9 h0.8V247.3z M1447.7,247.3h-0.8v3.9h0.8V247.3z M1449.8,247.3h-0.8v3.9h0.8V247.3z M1451.9,247.3h-0.8v3.9h0.8V247.3z M1454,247.3 h-0.8v3.9h0.8V247.3z M1456.1,247.3h-0.8v3.9h0.8V247.3z M1458.2,247.3h-0.8v3.9h0.8V247.3z M1460.3,247.3h-0.8v3.9h0.8V247.3z M1462.4,247.3h-0.8v3.9h0.8V247.3z M1464.4,247.3h-0.8v3.9h0.8V247.3z M1466.5,247.3h-0.8v3.9h0.8V247.3z M1468.6,247.3h-0.8v3.9 h0.8V247.3z M1470.7,247.3h-0.8v3.9h0.8V247.3z M1472.8,247.3h-0.8v3.9h0.8V247.3z M1474.9,247.3h-0.8v3.9h0.8V247.3z M1477,247.3 h-0.8v3.9h0.8V247.3z M1479.1,247.3h-0.8v3.9h0.8V247.3z M1481.2,247.3h-0.8v3.9h0.8V247.3z M1483.2,247.3h-0.8v3.9h0.8V247.3z M1485.3,247.3h-0.8v3.9h0.8V247.3z M1487.4,247.3h-0.8v3.9h0.8V247.3z M1489.5,247.3h-0.8v3.9h0.8V247.3z M1308.9,246v-15.7 h-16.8v22.8l8.4-3.6L1308.9,246z M1291.1,268.8v45.3h5.2v-45.3H1291.1z M1324.4,317.8v-54.7h-5.2v54.7H1324.4z M1297.3,262h-7.3 v5.6h7.3V262z M1290,317.8h7.3v-2.4h-7.3V317.8z M1302.7,268.8v45.3h5.2v-45.3H1302.7z M1308.9,262h-7.3v5.6h7.3V262z M1301.6,317.8h7.3v-2.4h-7.3V317.8z M1316.4,276.6h-4v10.6h4V276.6z M1312.4,311h4v-10.6h-4V311z M1330.6,239.6L1330.6,239.6 L1330.6,239.6L1330.6,239.6L1330.6,239.6l-47.9,19.4h47.9h0h47.9L1330.6,239.6z M1369.1,253.1v-22.8h-16.8V246l8.4,3.6 L1369.1,253.1z M1350,245.4v-12.9h-19.4h0h-19.4v12.9l19.4-8.3L1350,245.4z M1364.9,268.8v45.3h5.2v-45.3H1364.9z M1341.9,317.8 v-54.7h-5.2v54.7H1341.9z M1371.1,262h-7.3v5.6h7.3V262z M1363.8,317.8h7.3v-2.4h-7.3V317.8z M1353.3,268.8v45.3h5.2v-45.3H1353.3 z M1359.5,262h-7.3v5.6h7.3V262z M1352.2,317.8h7.3v-2.4h-7.3V317.8z M1371.1,260h-40.5h0H1290v1.1h40.5h0h40.5V260z M1348.7,276.6h-4v10.6h4V276.6z M1344.7,311h4v-10.6h-4V311z M1332.4,276.6h-1.8h0h-1.8v10.6h1.8h0h1.8V276.6z M1330.6,300.4 h-1.8V311h1.8h0h1.8v-10.6H1330.6L1330.6,300.4z M1330.6,319.6h-42.9v17.7h42.9h0h42.9v-17.7H1330.6L1330.6,319.6z\"></path><path id=\"ldn9\" fill=\"#D52757\" d=\"M726.4,175H723v-13h1.7l-13-18v-15.5c0,0-8.9-14.6-12.5-29.4v-6.5c0,0,0.2,0.1,0.5,0.1 c0.3,0,0.5-0.1,0.7-0.7c0.5-1.8-1.5-2.6-2.4-5.8c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c-0.9,3.2-3,4.1-2.4,5.8 c0.2,0.5,0.4,0.7,0.7,0.7c0.3,0,0.5-0.1,0.5-0.1v7.1c-3.8,14.6-12.4,28.8-12.4,28.8v15.5l-13,18h1.7v13h-3.3v32.6h2.1v78.1h-51.9 h-50.6v-18h-1.7v-22.6h-0.8v-1.1c0,0,0.2,0.1,0.5,0.1c0.3,0,0.5-0.1,0.7-0.7c0.5-1.8-1.5-2.6-2.4-5.8c0,0,0,0,0,0c0,0,0,0,0,0 c0,0,0,0,0,0c0,0,0,0,0,0c-0.9,3.2-3,4.1-2.4,5.8c0.2,0.5,0.4,0.7,0.7,0.7c0.3,0,0.5-0.1,0.5-0.1v1.1H563v22.6h-1.1l-4.3-11.3 h-4.2v-11.3h-0.9v-1.1c0,0,0.2,0.1,0.5,0.1c0.3,0,0.5-0.1,0.7-0.7c0.5-1.8-1.5-2.6-2.4-5.8c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0 c0,0,0,0,0,0c-0.9,3.2-3,4.1-2.4,5.8c0.2,0.5,0.4,0.7,0.7,0.7c0.3,0,0.5-0.1,0.5-0.1v1.1h-1.2v11.3H545v-11.3h-0.9v-1.1 c0,0,0.2,0.1,0.5,0.1c0.3,0,0.5-0.1,0.7-0.7c0.5-1.8-1.5-2.6-2.4-5.8c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0 c-0.9,3.2-3,4.1-2.4,5.8c0.2,0.5,0.4,0.7,0.7,0.7c0.3,0,0.5-0.1,0.5-0.1v1.1h-1.2v11.3h-5l-4,11.3H530v-22.6h-0.6v-1.1 c0,0,0.2,0.1,0.5,0.1c0.3,0,0.5-0.1,0.7-0.7c0.5-1.8-1.5-2.6-2.4-5.8c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0 c-0.9,3.2-3,4.1-2.4,5.8c0.2,0.5,0.4,0.7,0.7,0.7c0.3,0,0.5-0.1,0.5-0.1v1.1h-1.5v22.6h-0.8v18h-5v-18h-1.7v-22.6h-1.1v-1.1 c0,0,0.2,0.1,0.5,0.1c0.3,0,0.5-0.1,0.7-0.7c0.5-1.8-1.5-2.6-2.4-5.8c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0 c-0.9,3.2-3,4.1-2.4,5.8c0.2,0.5,0.4,0.7,0.7,0.7c0.3,0,0.5-0.1,0.5-0.1v1.1h-1v22.6h-1.1l-4.3-11.3h-4.2v-11.3h-1.2v-1.1 c0,0,0.2,0.1,0.5,0.1c0.3,0,0.5-0.1,0.7-0.7c0.5-1.8-1.5-2.6-2.4-5.8c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0 c-0.9,3.2-3,4.1-2.4,5.8c0.2,0.5,0.4,0.7,0.7,0.7c0.3,0,0.5-0.1,0.5-0.1v1.1h-0.9v11.3h-3.8v-11.3h-1v-1.1c0,0,0.2,0.1,0.5,0.1 c0.3,0,0.5-0.1,0.7-0.7c0.5-1.8-1.5-2.6-2.4-5.8c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c-0.9,3.2-3,4.1-2.4,5.8 c0.2,0.5,0.4,0.7,0.7,0.7c0.3,0,0.5-0.1,0.5-0.1v1.1h-1.1v11.3h-5l-4,11.3h-1.4v-22.6h-0.9v-1.1c0,0,0.2,0.1,0.5,0.1 c0.3,0,0.5-0.1,0.7-0.7c0.5-1.8-1.5-2.6-2.4-5.8c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c-0.9,3.2-3,4.1-2.4,5.8 c0.2,0.5,0.4,0.7,0.7,0.7c0.3,0,0.5-0.1,0.5-0.1v1.1h-1.2v22.6h-0.8v18.5l-1.8,0.1v-6.9h-0.3v-34.1h-1.1v34.1h-1.9v-34.1h-2.9v-6 h-3.2v-20.1h-2.4v-7.7H460l-3.1-29.8l-2.8,29.8h-2.3v7.7h-2.3v20.1h-2.7v6h-3.1v34.1h-1v-34.1h-1.1v34.1h-0.3v8.5l-3.2,0.2v-13.7 h-1.3v-17.1H436v-1.1c0,0,0.2,0.1,0.4,0.1c0.2,0,0.4-0.1,0.5-0.5c0.4-1.3-1.1-1.9-1.8-4.3c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0 c0,0,0,0,0,0c-0.7,2.4-2.2,3-1.8,4.3c0.1,0.4,0.3,0.5,0.5,0.5c0.2,0,0.4-0.1,0.4-0.1v1.1h-0.7v17.1h-0.8l-3.3-8.5h-3.2v-8.5h-0.8 v-1.1c0,0,0.2,0.1,0.4,0.1c0.2,0,0.4-0.1,0.5-0.5c0.4-1.3-1.1-1.9-1.8-4.3c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0 c-0.7,2.4-2.2,3-1.8,4.3c0.1,0.4,0.3,0.5,0.5,0.5c0.2,0,0.4-0.1,0.4-0.1v1.1h-0.8v8.5h-2.8v-8.5h-0.9v-1.1c0,0,0.2,0.1,0.4,0.1 c0.2,0,0.4-0.1,0.5-0.5c0.4-1.3-1.1-1.9-1.8-4.3c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c-0.7,2.4-2.2,3-1.8,4.3 c0.1,0.4,0.3,0.5,0.5,0.5c0.2,0,0.4-0.1,0.4-0.1v1.1h-0.8v8.5h-3.8l-3.1,8.5h-1v-17.1h-0.8v-1.1c0,0,0.2,0.1,0.4,0.1 c0.2,0,0.4-0.1,0.5-0.5c0.4-1.3-1.1-1.9-1.8-4.3c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c-0.7,2.4-2.2,3-1.8,4.3 c0.1,0.4,0.3,0.5,0.5,0.5c0.2,0,0.4-0.1,0.4-0.1v1.1h-0.9v17.1h-0.6v15.4l-2.1,0.1v-70.4h0.2v-24.4h-1.7v-4.1c0,0,0.5,0.3,1,0.3 c0.5,0,1.2-0.3,1.5-1.4c1.1-3.8-3.3-5.5-5.2-12.3c0,0,0,0,0-0.1c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c-1.9,6.9-6.3,8.6-5.2,12.3 c0.3,1.1,0.9,1.4,1.5,1.4c0.6,0,1-0.3,1-0.3v4.1h-2.1v9.8h-3.9l-14.4-34.5l-15.4,34.5h-3.4v-9.8h-1.9v-4.1c0,0,0.5,0.3,1,0.3 c0.5,0,1.2-0.3,1.5-1.4c1.1-3.8-3.3-5.5-5.2-12.3c0,0,0,0,0-0.1c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c-1.9,6.9-6.3,8.6-5.2,12.3 c0.3,1.1,0.9,1.4,1.5,1.4c0.6,0,1-0.3,1-0.3v4.1H347v24.4h0v50.9h-2.4v-8.5h-0.8v-0.9c0,0,0.2,0.1,0.4,0.1c0.2,0,0.4-0.1,0.5-0.5 c0.4-1.3-1.1-1.9-1.8-4.3c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c-0.7,2.4-2.2,3-1.8,4.3c0.1,0.4,0.3,0.5,0.5,0.5 c0.2,0,0.4-0.1,0.4-0.1v0.9h-0.8v8.5h-2.8v-8.5h-0.9v-0.9c0,0,0.2,0.1,0.4,0.1c0.2,0,0.4-0.1,0.5-0.5c0.4-1.3-1.1-1.9-1.8-4.3 c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c-0.7,2.4-2.2,3-1.8,4.3c0.1,0.4,0.3,0.5,0.5,0.5c0.2,0,0.4-0.1,0.4-0.1v0.9 h-0.8v8.5H331l-3.1,8.5h-1v-17.1h-0.8v-0.9c0,0,0.2,0.1,0.4,0.1c0.2,0,0.4-0.1,0.5-0.5c0.4-1.3-1.1-1.9-1.8-4.3c0,0,0,0,0,0 c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c-0.7,2.4-2.2,3-1.8,4.3c0.1,0.4,0.3,0.5,0.5,0.5c0.2,0,0.4-0.1,0.4-0.1v0.9h-0.9V279h-0.6 v15l-54.3,2.8V287h-1v-13.7h-0.9v-0.9c0,0,0.1,0.1,0.2,0.1c0.1,0,0.2-0.1,0.3-0.3c0.2-0.8-0.7-1.2-1.1-2.6c0,0,0,0,0,0 c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c-0.4,1.4-1.3,1.8-1.1,2.6c0.1,0.2,0.2,0.3,0.3,0.3c0.1,0,0.2-0.1,0.2-0.1v0.9h-0.8V287H264 l-2.6-6.9h-2.5v-6.9h-0.9v-0.9c0,0,0.1,0.1,0.2,0.1c0.1,0,0.2-0.1,0.3-0.3c0.2-0.8-0.7-1.2-1.1-2.6c0,0,0,0,0,0c0,0,0,0,0,0 c0,0,0,0,0,0c0,0,0,0,0,0c-0.4,1.4-1.3,1.8-1.1,2.6c0.1,0.2,0.2,0.3,0.3,0.3c0.1,0,0.2-0.1,0.2-0.1v0.9H256v6.9h-2.3v-6.9h-0.8 v-0.9c0,0,0.1,0.1,0.2,0.1c0.1,0,0.2-0.1,0.3-0.3c0.2-0.8-0.7-1.2-1.1-2.6c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0 c-0.4,1.4-1.3,1.8-1.1,2.6c0.1,0.2,0.2,0.3,0.3,0.3c0.1,0,0.2-0.1,0.2-0.1v0.9h-0.9v6.9h-3l-2.5,6.9h-0.8v-13.7h-0.9v-0.9 c0,0,0.1,0.1,0.2,0.1c0.1,0,0.2-0.1,0.3-0.3c0.2-0.8-0.7-1.2-1.1-2.6c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0 c-0.4,1.4-1.3,1.8-1.1,2.6c0.1,0.2,0.2,0.3,0.3,0.3c0.1,0,0.2-0.1,0.2-0.1v0.9h-0.8V287h-0.5v11.2l-4.2,0.2v-3.9h-0.8v-11.2h-0.6 v-0.9c0,0,0.1,0.1,0.2,0.1c0.1,0,0.2-0.1,0.3-0.3c0.2-0.8-0.7-1.2-1.1-2.6c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0 c-0.4,1.4-1.3,1.8-1.1,2.6c0.1,0.2,0.2,0.3,0.3,0.3c0.1,0,0.2-0.1,0.2-0.1v0.9H234v11.2h-0.5l-2.2-5.6h-2.1v-5.6h-0.6v-0.9 c0,0,0.1,0.1,0.2,0.1c0.1,0,0.2-0.1,0.3-0.3c0.2-0.8-0.7-1.2-1.1-2.6c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0 c-0.4,1.4-1.3,1.8-1.1,2.6c0.1,0.2,0.2,0.3,0.3,0.3c0.1,0,0.2-0.1,0.2-0.1v0.9H227v5.6h-1.9v-5.6h-0.5v-0.9c0,0,0.1,0.1,0.2,0.1 c0.1,0,0.2-0.1,0.3-0.3c0.2-0.8-0.7-1.2-1.1-2.6c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c-0.4,1.4-1.3,1.8-1.1,2.6 c0.1,0.2,0.2,0.3,0.3,0.3c0.1,0,0.2-0.1,0.2-0.1v0.9h-0.6v5.6h-2.5l-2,5.6h-0.7v-11.2h-0.7v-0.9c0,0,0.1,0.1,0.2,0.1 c0.1,0,0.2-0.1,0.3-0.3c0.2-0.8-0.7-1.2-1.1-2.6v0c0,0,0,0,0,0c0,0,0,0,0,0v0c-0.2,0.9-0.7,1.4-0.9,1.8v1c0.1,0,0.1,0.1,0.2,0.1 c0.1,0,0.2-0.1,0.2-0.1v0.9h-0.4v11.2v4.8v28.6h0.2v9.5h269.3v-0.1h16.3v0.1H563h56.8h51.9h9.9h42.6V207.6h2.1V175z M218.3,297 h0.9v11.6h-0.9V297z M220.4,334.1h-1.7v-9.9l1.7,0V334.1z M220.4,321.2l-1.7,0v-9.9l1.7-0.1V321.2z M221.4,308.6h-0.9V297h0.9 V308.6z M223.7,334.1H222v-9.9l1.7,0V334.1z M223.7,321.2l-1.7,0v-9.9l1.7-0.1V321.2z M223.8,308.6h-0.9V297h0.9V308.6z M225.2,297h0.9v11.6h-0.9V297z M227,334.1h-1.7v-9.9l1.7,0V334.1z M227,321.2l-1.7,0v-9.9l1.7-0.1V321.2z M231.6,334.1h-1.7v-10 l1.7,0V334.1z M231.6,321l-1.7,0v-10l1.7-0.1V321z M236.2,334.1h-1.7V324l1.7,0V334.1z M236.2,320.9l-1.7,0v-10.1l1.7-0.1V320.9z M240.9,334.1h-1.7v-10.1l1.7,0V334.1z M240.9,320.8l-1.7,0v-10.1l1.7-0.1V320.8z M245.6,334.1h-1.8v-10.2l1.8,0V334.1z M245.6,320.7l-1.8,0v-10.2l1.8-0.1V320.7z M246,307.5h-1.3v-17.9h1.3V307.5z M248,289.7h1.3v17.9H248V289.7z M250.5,334.1h-1.8 v-10.3l1.8,0V334.1z M250.5,320.6l-1.8,0v-10.3l1.8-0.1V320.6z M252.8,307.5h-1.3v-17.9h1.3V307.5z M255.4,334.1h-1.8v-10.4l1.8,0 V334.1z M255.4,320.5l-1.8,0v-10.4l1.8-0.1V320.5z M256,307.5h-1.3v-17.9h1.3V307.5z M260.5,334.1h-1.9v-10.5l1.9,0V334.1z M260.5,320.4l-1.9,0v-10.5l1.9-0.1V320.4z M265.6,334.1h-1.9v-10.6l1.9,0V334.1z M265.6,320.2l-1.9,0v-10.6l1.9-0.1V320.2z M269.9,334.1H268v-10.7l1.9,0V334.1z M269.9,320.1l-1.9,0v-10.7l1.9-0.1V320.1z M275.2,334.1h-2v-10.8l2,0V334.1z M275.2,320 l-2,0v-10.8l2-0.1V320z M280.5,334.1h-2v-10.9l2,0V334.1z M280.5,319.9l-2,0v-10.9l2-0.1V319.9z M286,334.1h-2v-11l2,0V334.1z M286,319.8l-2,0v-11l2-0.1V319.8z M291.6,334.1h-2.1V323l2.1,0V334.1z M291.6,319.6l-2.1,0v-11.1l2.1-0.1V319.6z M297.3,334.1 h-2.1v-11.2l2.1,0V334.1z M297.3,319.5l-2.1,0v-11.2l2.1-0.1V319.5z M303.1,334.1h-2.1v-11.3l2.1,0V334.1z M303.1,319.4l-2.1,0.1 v-11.3l2.1-0.1V319.4z M309,334.1h-2.2v-11.4l2.2,0V334.1z M309,319.2l-2.2,0.1v-11.4l2.2-0.1V319.2z M315,334.1h-2.2v-11.5l2.2,0 V334.1z M315,319.1l-2.2,0.1v-11.5l2.2-0.1V319.1z M321.1,334.1h-2.3v-11.6l2.3,0V334.1z M321.1,318.9l-2.3,0.1v-11.6l2.3-0.1 V318.9z M325.6,281.2h1.3v21.6h-1.3V281.2z M327.4,334.1h-2.3v-11.7l2.3,0V334.1z M327.4,318.8l-2.3,0.1v-11.7l2.3-0.1V318.8z M330.2,302.8h-1.3v-21.6h1.3V302.8z M332.3,281.2h1.3v21.6h-1.3V281.2z M333.7,334.1h-2.4v-11.8l2.4,0V334.1z M333.7,318.6 l-2.4,0.1v-11.8l2.4-0.1V318.6z M336.9,302.8h-1.3v-21.6h1.3V302.8z M340.2,334.1h-2.4v-11.9l2.4,0V334.1z M340.2,318.5l-2.4,0.1 v-11.9l2.4-0.1V318.5z M346.9,334.1h-2.5V322l2.5,0V334.1z M346.9,318.3l-2.5,0.1v-12.1l2.5-0.1V318.3z M353.6,334.1h-2.5v-12.2 l2.5,0V334.1z M353.6,318.2l-2.5,0.1V306l2.5-0.1V318.2z M353.6,297.4h-2.2v-18.9h2.2V297.4z M353.6,274.6h-2.2v-18.9h2.2V274.6z M353.6,251.8h-2.2v-18.9h2.2V251.8z M353.6,229h-2.2v-18.9h2.2V229z M363,210.1h2.2V229H363V210.1z M363,232.9h2.2v18.9H363 V232.9z M363,255.8h2.2v18.9H363V255.8z M357.1,210.1h2.2V229h-2.2V210.1z M357.1,232.9h2.2v18.9h-2.2V232.9z M357.1,255.8h2.2 v18.9h-2.2V255.8z M357.1,278.5h2.2v18.9h-2.2V278.5z M360.5,334.1H358v-12.3l2.6,0V334.1z M360.5,318l-2.6,0.1v-12.3l2.6-0.1V318 z M363,278.5h2.2v18.9H363V278.5z M367.6,334.1H365v-12.4l2.6,0V334.1z M367.6,317.8l-2.6,0.1v-12.4l2.6-0.1V317.8z M370.9,297.4 h-2.2v-18.9h2.2V297.4z M370.9,274.6h-2.2v-18.9h2.2V274.6z M370.9,251.8h-2.2v-18.9h2.2V251.8z M370.9,229h-2.2v-18.9h2.2V229z M374.8,334.1h-2.7v-12.6l2.7,0V334.1z M374.8,317.7l-2.7,0.1v-12.6l2.7-0.1V317.7z M378.5,297.4h-2.2v-18.9h2.2V297.4z M378.5,274.6h-2.2v-18.9h2.2V274.6z M378.5,251.8h-2.2v-18.9h2.2V251.8z M378.5,229h-2.2v-18.9h2.2V229z M382.1,334.1h-2.7v-12.7 l2.7,0V334.1z M382.1,317.5l-2.7,0.1v-12.7l2.7-0.1V317.5z M384.2,297.4H382v-18.9h2.2V297.4z M384.2,274.6H382v-18.9h2.2V274.6z M384.2,251.8H382v-18.9h2.2V251.8z M384.2,229H382v-18.9h2.2V229z M389.6,334.1h-2.8v-12.8l2.8-0.1V334.1z M389.6,317.3l-2.8,0.1 v-12.8l2.8-0.1V317.3z M390.1,297.4h-2.2v-18.9h2.2V297.4z M390.1,274.6h-2.2v-18.9h2.2V274.6z M390.1,251.8h-2.2v-18.9h2.2V251.8 z M390.1,229h-2.2v-18.9h2.2V229z M393.6,210.1h2.2V229h-2.2V210.1z M393.6,232.9h2.2v18.9h-2.2V232.9z M393.6,255.8h2.2v18.9 h-2.2V255.8z M393.6,278.5h2.2v18.9h-2.2V278.5z M397.3,334.1h-2.8v-13l2.8-0.1V334.1z M397.3,317.1l-2.8,0.1v-13l2.8-0.1V317.1z M405.1,334.1h-2.9V321l2.9-0.1V334.1z M405.1,316.9l-2.9,0.1v-13.1l2.9-0.1V316.9z M410,334.1h-2.2v-13.2h2.2V334.1z M410,316.9 h-2.2v-13.2h2.2V316.9z M412.7,276.5h1.9v23.8h-1.9V276.5z M416,334.1h-2.2v-13.2h2.2V334.1z M416,316.9h-2.2v-13.2h2.2V316.9z M419.5,300.3h-1.9v-23.8h1.9V300.3z M421.9,334.1h-2.2v-13.2h2.2V334.1z M421.9,316.9h-2.2v-13.2h2.2V316.9z M424.7,300.3h-1.9 v-23.8h1.9V300.3z M427.9,334.1h-2.2v-13.2h2.2V334.1z M427.9,316.9h-2.2v-13.2h2.2V316.9z M429.6,300.3h-1.9v-23.8h1.9V300.3z M433.9,334.1h-2.2v-13.2h2.2V334.1z M433.9,316.9h-2.2v-13.2h2.2V316.9z M439.8,334.1h-2.2v-13.2h2.2V334.1z M439.8,316.9h-2.2 v-13.2h2.2V316.9z M445.8,334.1h-2.2v-13.2h2.2V334.1z M445.8,316.9h-2.2v-13.2h2.2V316.9z M461.9,240.8h1.6v4.4h-1.6V240.8z M457.5,221.3h1.1v17.1h-1.1V221.3z M454.5,221.3h1.1v17.1h-1.1V221.3z M449.7,240.8h1.6v4.4h-1.6V240.8z M448.1,249.3h1.9v20.1 h-1.9V249.3z M448.1,271.8h1.9v28.5h-1.9V271.8z M451.7,334.1h-2.2v-13.2h2.2V334.1z M451.7,316.9h-2.2v-13.2h2.2V316.9z M452.7,238.3h-1.1v-17.1h1.1V238.3z M454.9,300.3H453v-28.5h1.9V300.3z M454.9,269.3H453v-20.1h1.9V269.3z M455.2,245.2h-1.6 v-4.4h1.6V245.2z M457.7,334.1h-2.2v-13.2h2.2V334.1z M457.7,316.9h-2.2v-13.2h2.2V316.9z M457.9,240.8h1.6v4.4h-1.6V240.8z M460.1,300.3h-1.9v-28.5h1.9V300.3z M460.1,269.3h-1.9v-20.1h1.9V269.3z M460.5,221.3h1.1v17.1h-1.1V221.3z M463.6,334.1h-2.2 v-13.2h2.2V334.1z M463.6,316.9h-2.2v-13.2h2.2V316.9z M465,300.3h-1.9v-28.5h1.9V300.3z M465,269.3h-1.9v-20.1h1.9V269.3z M469.6,334.1h-2.2v-13.2h2.2V334.1z M469.6,316.9h-2.2v-13.2h2.2V316.9z M475.5,334.1h-2.2v-13.2h2.2V334.1z M475.5,316.9h-2.2 v-13.2h2.2V316.9z M481.5,334.1h-2.2v-13.2h2.2V334.1z M481.5,316.9h-2.2v-13.2h2.2V316.9z M487.4,334.1h-2.2v-13.2h2.2V334.1z M487.4,316.9h-2.2v-13.2h2.2V316.9z M487.9,300.3h-2.2v-28.5h2.2V300.3z M493.4,334.1h-2.2v-13.2h2.2V334.1z M493.4,316.9h-2.2 v-13.2h2.2V316.9z M493.6,300.3h-2.2v-28.5h2.2V300.3z M499.3,334.1h-2.2v-13.2h2.2V334.1z M499.3,316.9h-2.2v-13.2h2.2V316.9z M499.5,300.3h-2.2v-28.5h2.2V300.3z M503,271.8h2.2v28.5H503V271.8z M505.3,334.1h-2.2v-13.2h2.2V334.1z M505.3,316.9h-2.2v-13.2 h2.2V316.9z M511.3,334.1h-2.2v-13.2h2.2V334.1z M511.3,316.9h-2.2v-13.2h2.2V316.9z M517.2,334.1H515v-13.2h2.2V334.1z M517.2,316.9H515v-13.2h2.2V316.9z M523.2,334.1H521v-13.2h2.2V334.1z M523.2,316.9H521v-13.2h2.2V316.9z M529.1,334.1h-2.2 v-13.2h2.2V334.1z M529.1,316.9h-2.2v-13.2h2.2V316.9z M535.1,334.1h-2.2v-13.2h2.2V334.1z M535.1,316.9h-2.2v-13.2h2.2V316.9z M539,300.3h-2.2v-28.5h2.2V300.3z M541.2,334.1H539v-13.2h2.2V334.1z M541.2,316.9H539v-13.2h2.2V316.9z M544.6,300.3h-2.2v-28.5 h2.2V300.3z M547.2,334.1H545v-13.2h2.2V334.1z M547.2,316.9H545v-13.2h2.2V316.9z M550.6,300.3h-2.2v-28.5h2.2V300.3z M553.1,334.1H551v-13.2h2.2V334.1z M553.1,316.9H551v-13.2h2.2V316.9z M556.2,300.3H554v-28.5h2.2V300.3z M559.1,334.1h-2.2 v-13.2h2.2V334.1z M559.1,316.9h-2.2v-13.2h2.2V316.9z M565.1,334.1h-2.2v-13.2h2.2V334.1z M565.1,316.9h-2.2v-13.2h2.2V316.9z M571,334.1h-2.2v-13.2h2.2V334.1z M571,316.9h-2.2v-13.2h2.2V316.9z M577,334.1h-2.2v-13.2h2.2V334.1z M577,316.9h-2.2v-13.2h2.2 V316.9z M582.9,334.1h-2.2v-13.2h2.2V334.1z M582.9,316.9h-2.2v-13.2h2.2V316.9z M588.9,334.1h-2.2v-13.2h2.2V334.1z M588.9,316.9 h-2.2v-13.2h2.2V316.9z M594.8,334.1h-2.2v-13.2h2.2V334.1z M594.8,316.9h-2.2v-13.2h2.2V316.9z M600.8,334.1h-2.2v-13.2h2.2 V334.1z M600.8,316.9h-2.2v-13.2h2.2V316.9z M606.7,334.1h-2.2v-13.2h2.2V334.1z M606.7,316.9h-2.2v-13.2h2.2V316.9z M612.7,334.1 h-2.2v-13.2h2.2V334.1z M612.7,316.9h-2.2v-13.2h2.2V316.9z M618.6,334.1h-2.2v-13.2h2.2V334.1z M618.6,316.9h-2.2v-13.2h2.2 V316.9z M624.6,334.1h-2.2v-13.2h2.2V334.1z M624.6,316.9h-2.2v-13.2h2.2V316.9z M630.5,334.1h-2.2v-13.2h2.2V334.1z M630.5,316.9 h-2.2v-13.2h2.2V316.9z M636.5,334.1h-2.2v-13.2h2.2V334.1z M636.5,316.9h-2.2v-13.2h2.2V316.9z M642.5,334.1h-2.2v-13.2h2.2 V334.1z M642.5,316.9h-2.2v-13.2h2.2V316.9z M648.4,334.1h-2.2v-13.2h2.2V334.1z M648.4,316.9h-2.2v-13.2h2.2V316.9z M654.4,334.1 h-2.2v-13.2h2.2V334.1z M654.4,316.9h-2.2v-13.2h2.2V316.9z M660.3,334.1h-2.2v-13.2h2.2V334.1z M660.3,316.9h-2.2v-13.2h2.2 V316.9z M666.3,334.1h-2.2v-13.2h2.2V334.1z M666.3,316.9h-2.2v-13.2h2.2V316.9z M672.2,334.1H670v-13.2h2.2V334.1z M672.2,316.9 H670v-13.2h2.2V316.9z M692.4,128.9h1.5v15h-1.5V128.9z M689,128.9h1.5v15H689V128.9z M691,163.1v11h-1.3v-11H691z M685.5,128.9 h1.5v15h-1.5V128.9z M688.1,163.1v11h-1.3v-11H688.1z M683.9,163.1h1.3v11h-1.3V163.1z M680.9,163.1h1.3v11h-1.3V163.1z M677.9,163.1h1.3v11h-1.3V163.1z M675,163.1h1.3v11H675V163.1z M677.5,333.9h-2.2V314h2.2V333.9z M677.5,308.2h-2.2v-28.5h2.2 V308.2z M677.5,273.7h-2.2v-28.5h2.2V273.7z M677.5,239.2h-2.2v-28.5h2.2V239.2z M682.5,333.9h-2.2V314h2.2V333.9z M682.5,308.2 h-2.2v-28.5h2.2V308.2z M682.5,273.7h-2.2v-28.5h2.2V273.7z M682.5,239.2h-2.2v-28.5h2.2V239.2z M687.5,333.9h-2.2V314h2.2V333.9z M687.5,308.2h-2.2v-28.5h2.2V308.2z M687.5,273.7h-2.2v-28.5h2.2V273.7z M687.5,239.2h-2.2v-28.5h2.2V239.2z M684.1,197.9 c-4.2,0-7.5-4.1-7.5-9.1s3.4-9.1,7.5-9.1c4.2,0,7.5,4.1,7.5,9.1S688.2,197.9,684.1,197.9z M692.5,333.9h-2.2V314h2.2V333.9z M692.5,308.2h-2.2v-28.5h2.2V308.2z M692.5,273.7h-2.2v-28.5h2.2V273.7z M692.5,239.2h-2.2v-28.5h2.2V239.2z M694,174.1h-1.3v-11 h1.3V174.1z M695.8,128.9h1.5v15h-1.5V128.9z M697.6,333.9h-0.9V207.3h0.9V333.9z M719.6,163.1h1.3v11h-1.3V163.1z M716.7,163.1 h1.3v11h-1.3V163.1z M713.7,163.1h1.3v11h-1.3V163.1z M712,163.1v11h-1.3v-11H712z M709.3,128.9h1.5v15h-1.5V128.9z M707.8,163.1 h1.3v11h-1.3V163.1z M706.2,128.9h1.5v15h-1.5V128.9z M702.7,128.9h1.5v15h-1.5V128.9z M700.4,205.4h-0.9v-29.8h0.9V205.4z M700.8,143.9h-1.5v-15h1.5V143.9z M701.9,163.1h1.3v11h-1.3V163.1z M704.4,333.9h-2.2V314h2.2V333.9z M704.4,308.2h-2.2v-28.5 h2.2V308.2z M704.4,273.7h-2.2v-28.5h2.2V273.7z M704.4,239.2h-2.2v-28.5h2.2V239.2z M704.8,163.1h1.3v11h-1.3V163.1z M710.1,333.9h-2.2V314h2.2V333.9z M710.1,308.2h-2.2v-28.5h2.2V308.2z M710.1,273.7h-2.2v-28.5h2.2V273.7z M710.1,239.2h-2.2 v-28.5h2.2V239.2z M716,333.9h-2.2V314h2.2V333.9z M716,308.2h-2.2v-28.5h2.2V308.2z M716,273.7h-2.2v-28.5h2.2V273.7z M716,239.2 h-2.2v-28.5h2.2V239.2z M713.2,197.9c-4.2,0-7.5-4.1-7.5-9.1s3.4-9.1,7.5-9.1s7.5,4.1,7.5,9.1S717.4,197.9,713.2,197.9z M721.7,333.9h-2.2V314h2.2V333.9z M721.7,308.2h-2.2v-28.5h2.2V308.2z M721.7,273.7h-2.2v-28.5h2.2V273.7z M721.7,239.2h-2.2 v-28.5h2.2V239.2z\"></path><path id=\"ldn10\" fill=\"#8FD3D2\" d=\"M1744,217.1v-5l-2.5-11.9v-2.3h-0.1v-0.3c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0 c0,0,0,0,0,0c0,0,0-0.1,0-0.2c0-0.1,0-0.1,0-0.2c0-0.1,0-0.3-0.1-0.4c0-0.1-0.1-0.2-0.1-0.3c0-0.1,0-0.1-0.1-0.2 c0-0.2-0.1-0.4-0.1-0.6c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c-0.1,1-0.4,1.2-0.4,1.8c0,0.1,0,0.1,0,0.2c0,0,0,0,0,0 c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0v0.3h-0.2l0,2.9l-2.9,11H1727l-3.1-10.8v-3.1h-0.1v-0.3c0,0,0,0,0,0c0,0,0,0,0,0 c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0-0.1,0-0.2c0-0.1,0-0.1,0-0.2c0-0.2-0.1-0.4-0.2-0.7c-0.1-0.2-0.1-0.5-0.2-0.8 c0,0,0,0,0,0c0,0,0,0,0,0l0,0c0,0,0,0,0,0c-0.1,0.6-0.2,0.9-0.3,1.2c0,0.2-0.1,0.3,0,0.5c0,0.1,0,0.1,0,0.2c0,0,0,0,0,0 c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0v0l0,0v0.3h0h-0.2l0,3.6l-2.4,10.4v8.5h-1v3.6h1v12.1v0h-1v3.6h1 v7.9h-1v3.6h1l0,0v8.3l-11.1-12.7l0,0l0,0l0,0v0l-11.1,12.7v-8.3l0,0h1v-3.6h-1v-7.9h1v-3.6h-1v0V224h1v-3.6h-1v-8.5l-2.4-10.9 v-3.1h-0.1v-0.3c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0-0.1,0-0.2c0-0.1,0-0.1,0-0.2 c0-0.1,0-0.3-0.1-0.4c-0.1-0.2-0.2-0.5-0.2-0.8c0-0.1,0-0.2-0.1-0.3c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0 c-0.1,1-0.4,1.2-0.4,1.8c0,0.1,0,0.1,0,0.2c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0v0.3h-0.2v3.5l-3.1,10.4 h-10.9l-3-11.3v-2.6h-0.1v-0.3c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0-0.1,0-0.2c0-0.1,0-0.1,0-0.2 c0-0.2-0.1-0.4-0.2-0.7c-0.1-0.2-0.1-0.5-0.2-0.8c0,0,0,0,0,0c0,0,0,0,0,0l0,0c0,0,0,0,0,0c0,0.2-0.1,0.4-0.1,0.6 c-0.1,0.5-0.3,0.7-0.2,1.1c0,0.1,0,0.1,0,0.2c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0v0v0v0.3 l0,0h-0.2l0,2.7l-2.4,11.6v5v3.4h-1v3.6h1v12.1v0h-1v3.6h1v5.9v2h-1v3.6h1l0,0v12.1h-0.8v4h1.2v68.7h31.5c0,0,0-6.3,0-8.6 c0-2.3,2.6-3.3,2.7-3.3l0,0l0,0l0,0l0,0c0,0,2.7,1,2.7,3.3c0,2.3,0,8.6,0,8.6h30.9v-68.7h1.2v-4h-0.8v-12.1l0,0h1v-3.6h-1v-2v-5.9 h1v-3.6h-1v0V224h1v-3.6h-1V217.1z M1688.6,228.4h1v2.6h-1V228.4z M1688.6,231.7v14.5h-1.4v-14.5H1688.6z M1686.2,228.4h1h0v2.6h0 h-1V228.4z M1684.8,231.7h1.4v14.5h-1.4V231.7z M1687.8,254.5c0.2,0,0.4,0,0.6,0.1c1.4,0.3,2.4,1.5,2.4,2.9c0,1.4-1,2.6-2.4,2.9 c-0.2,0-0.4,0.1-0.6,0.1c-1.6,0-3-1.3-3-3C1684.8,255.8,1686.1,254.5,1687.8,254.5z M1688.6,276.3v-2.6h1v2.6H1688.6z M1688.6,276.6v5.4h-1.4v-5.4H1688.6z M1681.9,326.3h-1.2h0l0,0h-1.2c0,0,0-1.5,0-2.7c0-0.8,0.7-1.3,1.1-1.5 c0.1,0,0.1-0.1,0.1-0.1v0l0,0l0,0c0,0,0,0,0,0c0,0,0,0,0,0v0c0.3,0.2,1.2,0.7,1.2,1.6C1681.9,324.8,1681.9,326.3,1681.9,326.3z M1686.2,314.3h-1.4v-23h1.4V314.3z M1686.2,282h-1.4v-5.4h1.4V282z M1686.2,273.6h1h0v2.6h0h-1V273.6z M1687.2,291.3h1.4v23h-1.4 V291.3z M1689.7,326.3h-1.2h0h-1.2c0,0,0-1.5,0-2.7c0-0.9,0.9-1.4,1.2-1.6v0c0,0,0,0,0,0c0,0,0,0,0,0v0c0.3,0.2,1.2,0.7,1.2,1.6 C1689.7,324.8,1689.7,326.3,1689.7,326.3z M1690.9,314.3h-1.4l0,0v-23l0,0h1.4V314.3z M1690.9,282h-1.4l0,0v-5.4l0,0h1.4V282z M1690.9,246.2h-1.4l0,0v-14.5l0,0h1.4V246.2z M1716.6,278.8c0.5,0.4,0.9,0.7,1.4,1.1v3.9h-1.4V278.8z M1716.6,284.5L1716.6,284.5 l1.4,0v0v6.5h-1.4V284.5z M1716.6,291.8L1716.6,291.8l1.4,0v0v6.5h-1.4V291.8z M1716.6,299.2L1716.6,299.2l1.4,0v0v6.5h-1.4V299.2 z M1714.3,277.1c0.1,0.1,0.2,0.1,0.3,0.2c0.1,0,0.7,0.5,0.9,0.7c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0s0,0,0,0 c0,0,0,0,0,0c0,0,0,0-0.1,0c0,0,0,0,0,0c0,0,0,0-0.1-0.1c-0.1-0.1-0.1-0.1-0.2-0.2c0.2,0.1,0.3,0.3,0.5,0.4v5.7h-1.4V277.1z M1714.3,284.5L1714.3,284.5l1.4,0v0v6.5h-1.4V284.5z M1714.3,291.8L1714.3,291.8l1.4,0v0v6.5h-1.4V291.8z M1714.3,299.2 L1714.3,299.2l1.4,0v0v6.5h-1.4V299.2z M1711,257.3L1711,257.3L1711,257.3h0.7l0,0h0v2.7h0h-0.7h0V257.3z M1710.5,255.6 L1710.5,255.6h0.5l0,0v1.3l0,0h-0.5h0V255.6z M1710.1,257.3L1710.1,257.3h0.4l0,0v2.7h-0.4h0h-0.4v-2.7l0,0H1710.1z M1709.2,255.6 h0.5h0v1.3h0h-0.5V255.6z M1708.5,257.3L1708.5,257.3h0.7l0,0v2.7h-0.7V257.3z M1704.4,278.1c0.2-0.1,0.3-0.3,0.5-0.4 c-0.1,0.1-0.2,0.1-0.2,0.2c-0.1,0.1-0.1,0.1-0.2,0.1C1704.5,278.1,1704.5,278.1,1704.4,278.1 C1704.5,278.1,1704.5,278.1,1704.4,278.1L1704.4,278.1c0.1-0.1,0.1-0.1,0.1-0.1c0,0,0,0,0,0c0.1,0,0.1-0.1,0.2-0.2c0,0,0,0,0,0 c0.1-0.1,0.2-0.2,0.3-0.2c0.2-0.2,0.4-0.3,0.4-0.3c0.1-0.1,0.2-0.1,0.3-0.2l0,0l0,0v6.8l0,0h-1.4V278.1z M1704.4,284.5 L1704.4,284.5l1.4,0v6.5l0,0h-1.4V284.5z M1704.4,291.8L1704.4,291.8l1.4,0v6.5l0,0h-1.4V291.8z M1704.4,299.2L1704.4,299.2l1.4,0 v6.5l0,0h-1.4V299.2z M1702.1,279.9c0.5-0.4,0.9-0.7,1.4-1.1v5h-1.4l0,0V279.9z M1702.1,284.5L1702.1,284.5L1702.1,284.5l1.4,0v0 v6.5h-1.4l0,0V284.5z M1702.1,291.8L1702.1,291.8L1702.1,291.8l1.4,0v0v6.5h-1.4l0,0V291.8z M1702.1,299.2L1702.1,299.2 L1702.1,299.2l1.4,0v0v6.5h-1.4l0,0V299.2z M1702.3,313.3h-0.9V309h0.9V313.3z M1703.7,313.3h-0.9V309h0.9V313.3z M1705,313.3 L1705,313.3h-0.9V309h0.9h0V313.3z M1706.3,313.3h-0.9V309h0.9V313.3z M1707.7,313.3h-0.9V309h0.9V313.3z M1708.1,299.2v6.5h-1.4 v-6.5v0L1708.1,299.2L1708.1,299.2z M1708.1,291.8v6.5h-1.4v-6.5v0L1708.1,291.8L1708.1,291.8z M1708.1,284.5v6.5h-1.4v-6.5v0 L1708.1,284.5L1708.1,284.5z M1708.1,283.8h-1.4v-7.4c0.5-0.4,0.9-0.7,1.3-1.1l0,0V283.8z M1709,313.3h-0.9V309h0.9V313.3z M1710.7,313.3h-0.6h0h-0.6l0,0V309l0,0h0.6h0h0.6V313.3z M1711,299.2v6.5h-0.9h0h-0.9v-6.5v0h0.9h0L1711,299.2L1711,299.2z M1711,291.8v6.5h-0.9h0h-0.9v-6.5v0h0.9h0L1711,291.8L1711,291.8z M1711,284.5v6.5h-0.9h0h-0.9v-6.5v0h0.9h0L1711,284.5 L1711,284.5z M1711,283.8h-0.9h0h-0.9v-9c0.3-0.2,0.6-0.3,0.9-0.5v0l0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0l0,0v0 c0.3,0.2,0.6,0.3,0.9,0.5V283.8z M1712,313.3L1712,313.3h-0.9V309h0.9h0V313.3z M1713.4,313.3h-0.9V309h0.9V313.3z M1713.4,299.2 v6.5h-1.4v-6.5v0L1713.4,299.2L1713.4,299.2z M1713.4,291.8v6.5h-1.4v-6.5v0L1713.4,291.8L1713.4,291.8z M1713.4,284.5v6.5h-1.4 v-6.5v0L1713.4,284.5L1713.4,284.5z M1713.4,283.8h-1.4v-8.6l0,0c0.4,0.4,0.9,0.7,1.3,1.1V283.8z M1714.7,313.3h-0.9V309h0.9 V313.3z M1716,313.3h-0.9V309h0.9V313.3z M1717.4,313.3h-0.9h0V309h0h0.9V313.3z M1718.7,313.3h-0.9V309h0.9V313.3z M1732.9,228.4 h1v2.6h-1V228.4z M1733,231.7v14.5h-1.4h0v-14.5h0H1733z M1730.6,228.4h1v2.6h-1V228.4z M1729.2,231.7h1.4v14.5h-1.4V231.7z M1729.2,276.6h1.4v5.4h-1.4V276.6z M1729.2,291.3h1.4v23h-1.4V291.3z M1732.9,326.3h-1.2h0h0h-1.2c0,0,0-1.5,0-2.7 c0-0.5,0.2-0.8,0.5-1.1c0.3-0.3,0.6-0.4,0.7-0.5v0h0l0,0c0,0,0,0,0,0c0,0,0,0,0,0v0c0.2,0.1,0.6,0.3,0.9,0.7 c0.2,0.2,0.3,0.5,0.3,0.9C1732.9,324.8,1732.9,326.3,1732.9,326.3z M1730.6,276.3v-2.6h1v2.6H1730.6z M1733,314.3h-1.4h0v-23h0 h1.4V314.3z M1733,282h-1.4h0v-5.4h0h1.4V282z M1733.9,276.3h-1v-2.6h1V276.3z M1735.3,314.3h-1.4v-23h1.4V314.3z M1735.3,282 h-1.4v-5.4h1.4V282z M1734.8,259.1c-0.2,0.3-0.5,0.6-0.8,0.8c-0.3,0.2-0.7,0.4-1.1,0.4c-0.2,0-0.4,0.1-0.6,0.1l0,0l0,0 c-0.4,0-0.8-0.1-1.2-0.2c-0.4-0.2-0.7-0.4-0.9-0.6c-0.1-0.1-0.3-0.3-0.4-0.4c-0.2-0.3-0.4-0.7-0.4-1.1c0-0.2-0.1-0.4-0.1-0.6 c0-0.2,0-0.4,0.1-0.6c0.1-0.4,0.2-0.7,0.4-1.1c0.1-0.2,0.2-0.3,0.4-0.4c0.3-0.3,0.6-0.5,0.9-0.6c0.4-0.2,0.7-0.2,1.2-0.2l0,0l0,0 c0.2,0,0.4,0,0.6,0.1c0.4,0.1,0.7,0.2,1.1,0.4c0.3,0.2,0.6,0.5,0.8,0.8c0.3,0.5,0.5,1,0.5,1.7 C1735.3,258.1,1735.1,258.7,1734.8,259.1z M1735.3,246.2h-1.4v-14.5h1.4V246.2z M1740.7,326.3h-1.2h0h-1.2c0,0,0-1.5,0-2.7 c0-0.9,0.9-1.4,1.2-1.6v0c0,0,0,0,0,0c0,0,0,0,0,0v0c0.3,0.2,1.2,0.7,1.2,1.6C1740.7,324.8,1740.7,326.3,1740.7,326.3z\"></path><path id=\"ldn11\" fill=\"#8FD3D2\" d=\"M1670.7,248.2l-0.6-6.2v-0.3l0,0.2l0-0.2v0.3l-0.6,6.2c0,0-3.7,1.7-6.7,6.4h0.7v14.7h-29.8 v-14.7h1c-3-4.7-6.7-6.4-6.7-6.4l-0.6-6.2v-0.3l0,0.2l0-0.2v0.3l-0.6,6.2c0,0-3.7,1.7-6.7,6.4h1.2v14.7h-6.5v-14.7h1.3 c-3-4.7-6.7-6.4-6.7-6.4l-0.6-6.2v-0.3l0,0.2l0-0.2v0.3l-0.6,6.2c0,0-3.7,1.7-6.7,6.4h0.9v14.7h-24.6v-14.7h1.2 c-3-4.7-6.7-6.4-6.7-6.4l-0.6-6.2v-0.3l0,0.2l0-0.2v0.3l-0.6,6.2c0,0-3.7,1.7-6.7,6.4h-2v82.1h10.7h4.7h24.6h12.4h6.5h12.4h29.8 h6.3h6.1v-82.1h1.5C1674.5,249.9,1670.7,248.2,1670.7,248.2z M1581.5,333.5h-2.5v-60.2h2.5V333.5z M1590.8,329.3h-2.8v-5.1h2.8 V329.3z M1590.8,314.6h-2.8v-5.1h2.8V314.6z M1590.8,300h-2.8v-5.1h2.8V300z M1590.8,285.3h-2.8v-5.1h2.8V285.3z M1600.2,333.5 h-2.5v-60.2h2.5V333.5z M1610.4,329.3h-2.8v-5.1h2.8V329.3z M1610.4,314.6h-2.8v-5.1h2.8V314.6z M1610.4,300h-2.8v-5.1h2.8V300z M1610.4,285.3h-2.8v-5.1h2.8V285.3z M1630,329.3h-2.8v-5.1h2.8V329.3z M1630,314.6h-2.8v-5.1h2.8V314.6z M1630,300h-2.8v-5.1h2.8 V300z M1630,285.3h-2.8v-5.1h2.8V285.3z M1638,333.5h-2.5v-60.2h2.5V333.5z M1650.2,329.3h-2.8v-5.1h2.8V329.3z M1650.2,314.6 h-2.8v-5.1h2.8V314.6z M1650.2,300h-2.8v-5.1h2.8V300z M1650.2,285.3h-2.8v-5.1h2.8V285.3z M1661.5,333.5h-2.5v-60.2h2.5V333.5z\"></path><path id=\"ldn13\" fill=\"#8FD3D2\" d=\"M1115.3,307l0.2-1.9c-0.2,0-17.7-2.2-39.5-10.4c-19.7-7.5-48.1-22.1-66.7-47.5v-22.8l-3.7-12.3 l-2.3,6.4l-6.5-14.4l-6.9,13l-1.5-5l-4.5,12.3h-0.3v14.7h-27.5v-1.1h-1.2h-4.4h-1.2v1.1h-24.7V236h-11.3v3.1h-26.8v-1.1h-5.6v1.1 h-28.7v-14.7h-0.3l-4.5-12.3l-1.5,5l-6.9-13l-6.5,14.4l-2.3-6.4l-3.7,12.3v22.8c-18.6,25.3-47,39.9-66.7,47.5 c-21.7,8.3-39.3,10.4-39.5,10.4l0.2,1.9v4.6H813v23.5h49.2v-16.5c31-6,51.6-6.9,55.8-7c4.3,0.1,24.8,1,55.8,7v16.5h49.2v-23.5 h92.2V307z M752.5,307h-20.6c5.4-1.2,12.5-2.9,20.6-5.6V307z M757.6,307h-4.3v-5.9c1.4-0.5,2.8-1,4.3-1.5V307z M762.8,307h-4.3 v-7.7c0.9-0.3,1.9-0.7,2.8-1.1c0.5-0.2,1-0.4,1.5-0.6V307z M767.9,307h-4.3v-9.6c1.4-0.6,2.8-1.1,4.3-1.8V307z M773.1,307h-4.3 v-11.7c1.4-0.6,2.8-1.2,4.3-1.9V307z M778.2,307h-4.3v-14.1c1.4-0.7,2.8-1.4,4.3-2.1V307z M783.3,307h-4.3v-16.6 c1.4-0.7,2.8-1.5,4.3-2.2V307z M788.5,307h-4.3v-19.3c1.4-0.8,2.8-1.6,4.3-2.4V307z M793.6,307h-4.3v-22.2 c1.4-0.9,2.9-1.7,4.3-2.7V307z M798.7,307h-4.3v-25.4c1.4-0.9,2.9-1.9,4.3-2.9V307z M803.9,307h-4.3V278c1.4-1,2.9-2.1,4.3-3.2 V307z M809,307h-4.3v-32.8c1.4-1.1,2.9-2.3,4.3-3.5V307z M814.2,307h-4.3v-37c1.4-1.2,2.9-2.5,4.3-3.9V307z M819.3,307H815v-41.7 c1.5-1.4,2.9-2.8,4.3-4.3V307z M826.7,307h-6.6v-46.9c2.3-2.5,4.5-5,6.6-7.7V307z M834.4,238.9h2.4v5.4h-2.4V238.9z M834.4,259.7 h2.4v6h-2.4V259.7z M834.4,275.4h2.4v6h-2.4V275.4z M834.4,288.4h2.4v3h-2.4V288.4z M836.8,302h-2.4v-9.2h2.4V302z M841.3,302 h-2.4v-13.6h2.4V302z M841.3,281.4h-2.4v-6h2.4V281.4z M841.3,265.7h-2.4v-6h2.4V265.7z M841.3,244.2h-2.4v-5.4h2.4V244.2z M841.3,232.9h-2.4v-5.4h2.4V232.9z M845.8,302h-2.4v-9.2h2.4V302z M845.8,291.4h-2.4v-3h2.4V291.4z M845.8,281.4h-2.4v-6h2.4 V281.4z M845.8,265.7h-2.4v-6h2.4V265.7z M845.8,244.2h-2.4v-5.4h2.4V244.2z M983.8,307h-64.9h-1.7h-64.9v-60.8h28.7v2.2h5.6v-2.2 h26.8v2.6h11.3v-2.6h24.7v2.2h1.2h4.4h1.2v-2.2h27.5V307z M990.4,238.9h2.4v5.4h-2.4V238.9z M990.4,259.7h2.4v6h-2.4V259.7z M990.4,275.4h2.4v6h-2.4V275.4z M990.4,288.4h2.4v3h-2.4V288.4z M992.8,302h-2.4v-9.2h2.4V302z M997.2,302h-2.4v-13.6h2.4V302z M997.2,281.4h-2.4v-6h2.4V281.4z M997.2,265.7h-2.4v-6h2.4V265.7z M997.2,244.2h-2.4v-5.4h2.4V244.2z M997.2,232.9h-2.4v-5.4h2.4 V232.9z M1001.7,302h-2.4v-9.2h2.4V302z M1001.7,291.4h-2.4v-3h2.4V291.4z M1001.7,281.4h-2.4v-6h2.4V281.4z M1001.7,265.7h-2.4 v-6h2.4V265.7z M1001.7,244.2h-2.4v-5.4h2.4V244.2z M1016,307h-6.6v-54.6c2.1,2.7,4.3,5.3,6.6,7.7V307z M1021.2,307h-4.3v-46 c1.4,1.5,2.8,2.9,4.3,4.3V307z M1026.3,307h-4.3v-40.9c1.4,1.3,2.8,2.6,4.3,3.9V307z M1031.4,307h-4.3v-36.3 c1.4,1.2,2.8,2.4,4.3,3.5V307z M1036.6,307h-4.3v-32.1c1.4,1.1,2.8,2.1,4.3,3.2V307z M1041.7,307h-4.3v-28.3c1.4,1,2.9,2,4.3,2.9 V307z M1046.8,307h-4.3v-24.9c1.4,0.9,2.9,1.8,4.3,2.7V307z M1052,307h-4.3v-21.7c1.4,0.8,2.9,1.7,4.3,2.4V307z M1057.1,307h-4.3 v-18.8c1.4,0.8,2.9,1.5,4.3,2.2V307z M1062.3,307h-4.3v-16.1c1.4,0.7,2.9,1.4,4.3,2.1V307z M1067.4,307h-4.3v-13.7 c1.4,0.7,2.9,1.3,4.3,1.9V307z M1072.5,307h-4.3v-11.4c1.5,0.6,2.9,1.2,4.3,1.8V307z M1077.7,307h-4.3v-9.3c0.5,0.2,1,0.4,1.5,0.6 c1,0.4,1.9,0.7,2.8,1.1V307z M1082.8,307h-4.3v-7.4c1.5,0.5,2.9,1,4.3,1.5V307z M1083.7,307v-5.6c8.1,2.7,15.2,4.4,20.6,5.6 H1083.7z\"></path><path id=\"ldnphonebooth\" fill=\"#D52757\" d=\"M1403.8,304.7H1388v-3h15.8V304.7z M1404.3,299.9v1.4h-16.7v-1.4c0,0,1.7-3.2,8.4-3.2 S1404.3,299.9,1404.3,299.9z M1402.2,299.7c-0.2-0.3-1.6-2.4-6.3-2.4c-4.7,0-6.1,2.1-6.3,2.4H1402.2z M1389.3,337.8v-31.3h13.4 v31.3h1.8V305h-17v32.8H1389.3z M1390,337.8v-30.6h12v30.6H1390z M1391,334.1h10v-25.9h-10V334.1z M1397.2,321.3h-2.3v3.4h2.3 V321.3z M1397.2,313.1h-2.3v3.4h2.3V313.1z M1395,328.9h2.3v-3.4h-2.3V328.9z M1397.2,317.2h-2.3v3.4h2.3V317.2z M1394.3,328.9 v-3.4h-2.9v3.4H1394.3z M1394.3,324.8v-3.4h-2.9v3.4H1394.3z M1394.3,320.7v-3.4h-2.9v3.4H1394.3z M1394.3,313.1h-2.9v3.4h2.9 V313.1z M1397.9,312.5h2.7v-3.9h-2.7V312.5z M1394.3,312.5v-3.9h-2.9v3.9H1394.3z M1394.3,329.6h-2.9v4.1h2.9V329.6z M1397.9,313.1v3.4h2.7v-3.4H1397.9z M1397.9,329.6v4.1h2.7v-4.1H1397.9z M1397.9,321.3v3.4h2.7v-3.4H1397.9z M1400.6,325.5h-2.7 v3.4h2.7V325.5z M1397.9,317.2v3.4h2.7v-3.4H1397.9z M1395,308.6v3.9h2.3v-3.9H1395z M1397.2,333.7v-4.1h-2.3v4.1H1397.2z\"></path><path id=\"bus2\" fill=\"#D52757\" d=\"M1291,331.1c0,0.2-0.1,0.5-0.1,0.7c0,0.2,0,0.3,0,0.5h-43.5c0-0.2,0-0.3,0-0.5 c0-0.3,0-0.5-0.1-0.7H1291z M1302.5,331.1c0,0.2,0.1,0.5,0.1,0.7c0,0.2,0,0.3,0,0.5h6.6v-1.2H1302.5z M1307.9,330.1h-5.6 c-0.8-2.3-2.9-4-5.5-4s-4.7,1.7-5.5,4h-44c-0.8-2.3-2.9-4-5.5-4s-4.7,1.7-5.5,4h-17.4v-33.5c0,0,0.9-5.4,6.2-5.4h67.4 c6.8-0.3,8.5,2,9,2.8c3.2,4.2,3.2,16.2,3.2,16.2h-7.4v7.8h5.4c4.7,0,5.1,4.8,5.1,4.8V330.1z M1263.2,299.8h10.5v-5.2h-10.5V299.8z M1250.7,299.8h10.5v-5.2h-10.5V299.8z M1235.4,310.1h-12.5v7.8h12.5V310.1z M1236.5,299.8v-5.2c0,0-6.7,0-9.2,0 c-2.5,0-3.3,5.2-3.3,5.2H1236.5z M1248.7,310.1h-12.3v7.8h12.3V310.1z M1248.7,294.6h-10.5v5.2h10.5V294.6z M1262.1,310.1h-12.3 v7.8h12.3V310.1z M1275.5,310.1h-12.3v7.8h12.3V310.1z M1275.7,299.8h10.5v-5.2h-10.5V299.8z M1288.8,310.1h-12.3v7.8h12.3V310.1z M1296.2,310.1h-6.2v7.8h6.2V310.1z M1300.3,299.8c0,0-0.8-5.2-3.3-5.2c-2.5,0-9.2,0-9.2,0v5.2H1300.3z M1217.8,331.1v1.2h18.1 c0-0.2,0-0.3,0-0.5c0-0.3,0-0.5,0.1-0.7H1217.8z M1246.2,332.8c0,2.5-2,4.6-4.6,4.6s-4.6-2-4.6-4.6c0-2.5,2-4.6,4.6-4.6 S1246.2,330.3,1246.2,332.8z M1243.9,332.8c0-1.3-1-2.3-2.3-2.3s-2.3,1-2.3,2.3c0,1.3,1,2.3,2.3,2.3S1243.9,334.1,1243.9,332.8z M1301.2,332.8c0,2.5-2,4.6-4.6,4.6c-2.5,0-4.6-2-4.6-4.6c0-2.5,2-4.6,4.6-4.6C1299.2,328.3,1301.2,330.3,1301.2,332.8z M1298.9,332.8c0-1.3-1-2.3-2.3-2.3c-1.3,0-2.3,1-2.3,2.3c0,1.3,1,2.3,2.3,2.3C1297.9,335.1,1298.9,334.1,1298.9,332.8z\"></path><path id=\"bus1\" fill=\"#D52757\" d=\"M1524.3,331.1c0,0.2-0.1,0.5-0.1,0.7c0,0.2,0,0.3,0,0.5h-43.5c0-0.2,0-0.3,0-0.5 c0-0.3,0-0.5-0.1-0.7H1524.3z M1462.7,331.1v1.2h6.6c0-0.2,0-0.3,0-0.5c0-0.3,0-0.5,0.1-0.7H1462.7z M1463.8,322.8 c0,0,0.5-4.8,5.1-4.8h5.4v-7.8h-7.4c0,0,0-12.1,3.2-16.2c0.6-0.7,2.2-3.1,9-2.8h67.4c5.3,0,6.2,5.4,6.2,5.4v33.5h-17.4 c-0.8-2.3-2.9-4-5.5-4c-2.6,0-4.7,1.7-5.5,4h-44c-0.8-2.3-2.9-4-5.5-4c-2.6,0-4.7,1.7-5.5,4h-5.6V322.8z M1508.5,294.6H1498v5.2 h10.5V294.6z M1521,294.6h-10.5v5.2h10.5V294.6z M1536.3,318h12.5v-7.8h-12.5V318z M1547.7,299.8c0,0-0.8-5.2-3.3-5.2 s-9.2,0-9.2,0v5.2H1547.7z M1523,318h12.3v-7.8H1523V318z M1523,299.8h10.5v-5.2H1523V299.8z M1509.6,318h12.3v-7.8h-12.3V318z M1496.2,318h12.3v-7.8h-12.3V318z M1496,294.6h-10.5v5.2h10.5V294.6z M1482.9,318h12.3v-7.8h-12.3V318z M1475.5,318h6.2v-7.8 h-6.2V318z M1483.9,299.8v-5.2c0,0-6.7,0-9.2,0s-3.3,5.2-3.3,5.2H1483.9z M1535.7,331.1c0,0.2,0.1,0.5,0.1,0.7c0,0.2,0,0.3,0,0.5 h18.1v-1.2H1535.7z M1530.1,328.3c2.5,0,4.6,2,4.6,4.6c0,2.5-2,4.6-4.6,4.6c-2.5,0-4.6-2-4.6-4.6 C1525.5,330.3,1527.6,328.3,1530.1,328.3z M1530.1,335.1c1.3,0,2.3-1,2.3-2.3c0-1.3-1-2.3-2.3-2.3c-1.3,0-2.3,1-2.3,2.3 C1527.8,334.1,1528.8,335.1,1530.1,335.1z M1475,328.3c2.5,0,4.6,2,4.6,4.6c0,2.5-2,4.6-4.6,4.6s-4.6-2-4.6-4.6 C1470.5,330.3,1472.5,328.3,1475,328.3z M1475,335.1c1.3,0,2.3-1,2.3-2.3c0-1.3-1-2.3-2.3-2.3c-1.3,0-2.3,1-2.3,2.3 C1472.8,334.1,1473.8,335.1,1475,335.1z\"></path></g></g><rect x=\"-111.7\" y=\"339.6\" fill=\"#44C650\" width=\"2607.9\" height=\"104\"></rect><path id=\"wire2\" fill=\"none\" stroke=\"#DBDBDB\" stroke-miterlimit=\"10\" d=\"M1166.9-368.6c-21.5,14.2-46.2,21.9-70.7,29 c-27.8,8-60.8-8-89.3-8v45l-62.4,47l159.1,45.3l-91.9,66.9c72.7,0,146.8-21.5,214.3-21.5c107.1,0,28,55.8,89.9,130.8 c57.6,69.8,174.9,116.5,160.7,231.6c-12.4,101.2-159.8,133.5-241.1,93.3C1086.9,217.3,1207.7-38,1360.2-1.4 c109.6,26.3,145.7,186.3,92.8,271.4c-31,49.8-96.2,67.1-149.5,86.7c-38.3,14.1-85.1,10.7-120.6,30.4c-6.4,3.5-12.4,8.1-17.9,13.3\"></path><g id=\"Layer_1_1_\"><g id=\"plane\"><path fill=\"#FFFEF0\" d=\"M1664.8,306.8c3,0.6,7.7,1.4,11.9,1.4c5.5,0,17.9-1.8,17.9-1.8l-45.2-16h-7.6L1664.8,306.8z\"></path><path fill=\"#C8C6BC\" d=\"M1796.1,302.9l35.2,25.6c0,0,2,0.5,5.2,1.2l-37.5-26.8L1796.1,302.9L1796.1,302.9z\"></path><path fill=\"#FFFEF0\" d=\"M1836.5,329.7c4.9,1,12.6,2.3,19.5,2.3c9,0,29.3-3,29.3-3l-73.9-26.2H1799L1836.5,329.7z\"></path><path id=\"carlinga\" fill=\"#FFFEF0\" d=\"M1673.8,286.3l13.3,18.2l48,12h176c0,0,39.5-2.2,51.7,6l4.3,4c0,0,12,4.5,13.6,9 c0.1,0.3,0.2,0.7,0.2,1c-0.1,4.9-12.7,16-69.9,16h-144c-10.7,0-25.6-3-41.9-7.2c-38.2-9.9-81.9-26.4-81.9-26.4v-8.6l8.6-2.1 l-5.7-21.9H1673.8L1673.8,286.3z\"></path><polygon fill=\"#FFFEF0\" points=\"1638.5,256.5 1652,256.5 1665.3,274.7 1643.2,274.7 \"></polygon><polygon fill=\"#FFFEF0\" points=\"1650.2,286.3 1646.3,286.3 1643.2,274.7 1646.6,274.7 \"></polygon><polygon fill=\"#8CC152\" points=\"1665.3,274.7 1673.8,286.3 1650.2,286.3 1646.6,274.7 \"></polygon><polygon fill=\"#C8C6BC\" points=\"1681.2,313.6 1667.5,327.6 1654.7,323.1 \"></polygon><path fill=\"#C8C6BC\" d=\"M1629.9,328.7l20.3-14.8c0,0,1.2-0.3,3-0.7l-21.6,15.4L1629.9,328.7L1629.9,328.7z\"></path><path fill=\"#FFFEF0\" d=\"M1653.1,313.3c2.9-0.6,7.3-1.3,11.2-1.3c5.2,0,16.9,1.7,16.9,1.7l-38.5,15.1h-11.1L1653.1,313.3z\"></path><rect x=\"1648.5\" y=\"255.4\" transform=\"matrix(0.9547 -0.2977 0.2977 0.9547 -8.7466 503.594)\" fill=\"#8CC152\" width=\"1\" height=\"50.3\"></rect><path fill=\"#00ADEF\" d=\"M1756.1,334.8h161l5,5h-166c-24.7,0-42.6-0.6-55.3-1.3c-7.5-2.3-14.8-4.6-21.5-6.9 C1687.7,332.7,1710.2,334.8,1756.1,334.8z\"></path><path fill=\"#DA4453\" d=\"M1756.1,341.5h133.2l-2.5,2.5h-130.7c-15.1,0-27.7-0.2-38.1-0.6c-3.4-0.9-6.9-1.9-10.3-2.9 C1719.7,341.1,1735.6,341.5,1756.1,341.5z\"></path><path fill=\"#E4E2D6\" d=\"M1980.8,335.5c0.1,0.3,0.2,0.7,0.2,1c-0.1,4.9-12.7,16-69.9,16h-144c-27,0-87.8-20.9-87.8-20.9 s28.4,12.1,114.8,12.1C1973.3,343.8,1980.5,335.6,1980.8,335.5z\"></path><path fill=\"#EDEDE6\" d=\"M1875.2,356.4c-24,3.4-34.6-0.3-41.2-2v-12c6.5-1.7,17.2-5.4,41.2-2V356.4z\"></path><polygon fill=\"#C8C6BC\" points=\"1877.8,342.4 1877.8,344.4 1877.8,354.4 1875.2,356.4 1875.2,344.4 1875.2,340.4 \"></polygon><path fill=\"#C8C6BC\" d=\"M1833.4,342.4c5.7-1.5,14.6-4.5,32.6-3l-17.9,17.9c-6.8-0.7-11.3-2.1-14.7-3V342.4L1833.4,342.4z\"></path><path fill=\"#C8C6BC\" d=\"M1776.9,365.5l35.2-25.6c0,0,2-0.5,5.1-1.2l-37.5,26.8L1776.9,365.5L1776.9,365.5z\"></path><path fill=\"#FFFEF0\" d=\"M1817.2,338.7c4.9-1,12.6-2.3,19.5-2.3c9,0,29.3,3,29.3,3l-66.9,26.2h-19.4L1817.2,338.7z\"></path><path fill=\"#1998C6\" d=\"M1733.6,324.5c0-0.6,0.5-1,1-1h1c0.6,0,1,0.4,1,1v2c0,0.6-0.4,1-1,1h-1c-0.5,0-1-0.4-1-1V324.5z M1741.6,326.5c0,0.6,0.5,1,1,1h1c0.6,0,1-0.4,1-1v-2c0-0.6-0.4-1-1-1h-1c-0.5,0-1,0.4-1,1V326.5z M1749.6,326.5c0,0.6,0.5,1,1,1 h1c0.6,0,1-0.4,1-1v-2c0-0.6-0.4-1-1-1h-1c-0.5,0-1,0.4-1,1V326.5z M1757.6,326.5c0,0.6,0.5,1,1,1h1c0.6,0,1-0.4,1-1v-2 c0-0.6-0.4-1-1-1h-1c-0.5,0-1,0.4-1,1V326.5z M1765.6,326.5c0,0.6,0.5,1,1,1h1c0.6,0,1-0.4,1-1v-2c0-0.6-0.4-1-1-1h-1 c-0.5,0-1,0.4-1,1V326.5z M1773.6,326.5c0,0.6,0.5,1,1,1h1c0.6,0,1-0.4,1-1v-2c0-0.6-0.4-1-1-1h-1c-0.5,0-1,0.4-1,1V326.5z M1781.6,326.5c0,0.6,0.5,1,1,1h1c0.6,0,1-0.4,1-1v-2c0-0.6-0.4-1-1-1h-1c-0.5,0-1,0.4-1,1V326.5z M1789.6,326.5c0,0.6,0.5,1,1,1 h1c0.6,0,1-0.4,1-1v-2c0-0.6-0.4-1-1-1h-1c-0.5,0-1,0.4-1,1V326.5z M1797.6,326.5c0,0.6,0.5,1,1,1h1c0.6,0,1-0.4,1-1v-2 c0-0.6-0.4-1-1-1h-1c-0.5,0-1,0.4-1,1V326.5z M1805.6,326.5c0,0.6,0.5,1,1,1h1c0.6,0,1-0.4,1-1v-2c0-0.6-0.4-1-1-1h-1 c-0.5,0-1,0.4-1,1V326.5z M1813.6,326.5c0,0.6,0.5,1,1,1h1c0.6,0,1-0.4,1-1v-2c0-0.6-0.4-1-1-1h-1c-0.5,0-1,0.4-1,1V326.5z M1821.6,326.5c0,0.6,0.5,1,1,1h1c0.6,0,1-0.4,1-1v-2c0-0.6-0.4-1-1-1h-1c-0.5,0-1,0.4-1,1V326.5z M1829.6,326.5c0,0.6,0.5,1,1,1 h1c0.6,0,1-0.4,1-1v-2c0-0.6-0.4-1-1-1h-1c-0.5,0-1,0.4-1,1V326.5z M1837.6,326.5c0,0.6,0.5,1,1,1h1c0.6,0,1-0.4,1-1v-2 c0-0.6-0.4-1-1-1h-1c-0.5,0-1,0.4-1,1V326.5z M1845.6,326.5c0,0.6,0.5,1,1,1h1c0.6,0,1-0.4,1-1v-2c0-0.6-0.4-1-1-1h-1 c-0.5,0-1,0.4-1,1V326.5z M1853.6,326.5c0,0.6,0.5,1,1,1h1c0.6,0,1-0.4,1-1v-2c0-0.6-0.4-1-1-1h-1c-0.5,0-1,0.4-1,1V326.5z M1861.6,326.5c0,0.6,0.5,1,1,1h1c0.6,0,1-0.4,1-1v-2c0-0.6-0.4-1-1-1h-1c-0.5,0-1,0.4-1,1V326.5z M1869.6,326.5c0,0.6,0.5,1,1,1 h1c0.6,0,1-0.4,1-1v-2c0-0.6-0.4-1-1-1h-1c-0.5,0-1,0.4-1,1V326.5z M1877.6,326.5c0,0.6,0.5,1,1,1h1c0.6,0,1-0.4,1-1v-2 c0-0.6-0.4-1-1-1h-1c-0.5,0-1,0.4-1,1V326.5z M1885.6,326.5c0,0.6,0.5,1,1,1h1c0.6,0,1-0.4,1-1v-2c0-0.6-0.4-1-1-1h-1 c-0.5,0-1,0.4-1,1V326.5z M1893.6,326.5c0,0.6,0.5,1,1,1h1c0.6,0,1-0.4,1-1v-2c0-0.6-0.4-1-1-1h-1c-0.5,0-1,0.4-1,1V326.5z M1901.6,326.5c0,0.6,0.5,1,1,1h1c0.6,0,1-0.4,1-1v-2c0-0.6-0.4-1-1-1h-1c-0.5,0-1,0.4-1,1V326.5z M1909.6,326.5c0,0.6,0.5,1,1,1 h1c0.6,0,1-0.4,1-1v-2c0-0.6-0.4-1-1-1h-1c-0.5,0-1,0.4-1,1V326.5z M1917.6,326.5c0,0.6,0.5,1,1,1h1c0.6,0,1-0.4,1-1v-2 c0-0.6-0.4-1-1-1h-1c-0.5,0-1,0.4-1,1V326.5z\"></path><path fill=\"#3BAFDA\" d=\"M1962.8,322.5l4.4,4c-16.9,0-16.1-4-16.1-4H1962.8L1962.8,322.5z M1959.3,322.3l2.4,4.7l0.9-0.5l-2.4-4.7 L1959.3,322.3z M1955.4,322l0.6,4.2l1-0.1l-0.6-4.2L1955.4,322z\"></path></g><g id=\"torre\"><rect x=\"-58.2\" y=\"107.5\" fill=\"#FFFEF0\" width=\"362.5\" height=\"2900\"></rect><rect x=\"-420.7\" y=\"107.5\" fill=\"#FFFEF0\" width=\"362.5\" height=\"2900\"></rect><rect x=\"-333.6\" y=\"107.5\" fill=\"#E4E2D6\" width=\"543.8\" height=\"2900\"></rect><polygon opacity=\"0.4\" fill=\"#C8C6BC\" enable-background=\"new \" points=\"-239.4,288.8 123.1,288.8 304.3,243.4 304.3,266.1 123.1,311.4 -239.4,311.4 -420.7,266.1 -420.7,243.4 \"></polygon><rect x=\"-239.4\" y=\"-73.7\" fill=\"#FFFEF0\" width=\"362.5\" height=\"362.5\"></rect><rect x=\"-69.5\" y=\"-980\" fill=\"#DA4453\" width=\"22.7\" height=\"453.1\"></rect><polygon fill=\"#FFFEF0\" points=\"-601.9,-323 -239.4,-413.6 -239.4,-458.9 -601.9,-368.3 -647.2,-357 -647.2,-311.6 \"></polygon><polygon fill=\"#FFFEF0\" points=\"485.6,-323 530.9,-311.6 530.9,-357 485.6,-368.3 123.1,-458.9 123.1,-413.6 \"></polygon><polygon fill=\"#E4E2D6\" points=\"123.1,288.8 485.6,198.1 485.6,-164.4 123.1,-73.7 \"></polygon><polygon fill=\"#E4E2D6\" points=\"-601.9,198.1 -239.4,288.8 -239.4,-73.7 -601.9,-164.4 \"></polygon><polygon fill=\"#E4E2D6\" points=\"123.1,-73.7 485.6,-164.4 485.6,-255 123.1,-164.4 \"></polygon><rect x=\"-239.4\" y=\"-164.4\" fill=\"#FFFEF0\" width=\"362.5\" height=\"90.6\"></rect><polygon fill=\"#E4E2D6\" points=\"-601.9,-164.4 -239.4,-73.7 -239.4,-164.4 -601.9,-255 \"></polygon><polygon fill=\"#E4E2D6\" points=\"395,-311.6 123.1,-255 89.1,-617.5 \"></polygon><polygon fill=\"#FFFEF0\" points=\"89.1,-617.5 123.1,-255 -239.4,-255 -205.4,-617.5 \"></polygon><polygon fill=\"#E4E2D6\" points=\"-205.4,-617.5 -239.4,-255 -511.3,-311.6 \"></polygon><rect x=\"-239.4\" y=\"-255\" fill=\"#DA4453\" width=\"362.5\" height=\"45.3\"></rect><polygon fill=\"#BA3548\" points=\"-601.9,-345.6 -239.4,-255 -239.4,-209.7 -239.4,-164.4 -601.9,-255 -647.2,-266.3 -647.2,-311.6 -647.2,-357 \"></polygon><polygon fill=\"#ED5565\" points=\"485.6,-345.6 530.9,-357 530.9,-311.6 530.9,-266.3 485.6,-255 123.1,-164.4 123.1,-209.7 123.1,-255 \"></polygon><rect x=\"-239.4\" y=\"-209.7\" fill=\"#DA4453\" width=\"362.5\" height=\"45.3\"></rect><polygon opacity=\"0.4\" fill=\"#C8C6BC\" enable-background=\"new \" points=\"123.1,-164.4 485.6,-255 485.6,-209.7 123.1,-119.1 -239.4,-119.1 -601.9,-209.7 -601.9,-255 -239.4,-164.4 \"></polygon><path fill=\"#FFFEF0\" d=\"M-80.8-980c0,12.5,10.1,22.7,22.7,22.7c12.5,0,22.7-10.1,22.7-22.7c0-12.5-10.1-22.7-22.7-22.7 S-80.8-992.5-80.8-980z\"></path></g></g><g id=\"text3\"><text transform=\"matrix(1 0 0 1 817.4995 -310.6447)\" fill=\"#F5ECD9\" font-weight=\"100\" font-size=\"36px\">to London</text></g><g id=\"text2\"><text transform=\"matrix(1 0 0 1 817.7998 -311.5982)\" fill=\"#FFFFFF\" font-weight=\"100\" font-size=\"36px\">from Rome</text></g><text id=\"text1\" transform=\"matrix(1 0 0 1 557.5032 -311.6446)\" fill=\"#FFFFFF\" font-weight=\"100\" font-size=\"36px\">In 2014 I moved</text><g id=\"planebig\"><g><path fill=\"#FFFEF0\" d=\"M-2357.6-434.1c15.2,0.2,36.5,2.9,36.5,2.9s-21.3,2.7-36.5,2.9c-15.2,0.2-27.8-2.9-27.8-2.9 S-2372.8-434.3-2357.6-434.1z\"></path><g><g><g><path fill=\"#C8C6BC\" d=\"M-2385.5-431.2l145.8,106.2c0,0,8.4,2.2,21.3,4.9l-155.3-111.1H-2385.5L-2385.5-431.2z\"></path><path fill=\"#FFFEF0\" d=\"M-2218.3-320.1c20.4,4.2,52.3,9.7,80.7,9.7c37.1,0,121.3-12.4,121.3-12.4l-305.9-108.4h-51.4 L-2218.3-320.1z\"></path></g></g></g><path opacity=\"0.4\" fill=\"#BCBAD0\" enable-background=\"new \" d=\"M-2385.5-431.2c0,0,12.6-3.1,27.8-2.9 c15.2,0.2,36.5,2.9,36.5,2.9s-0.3,0.1-0.9,0.1l305.7,108.3c0,0-84.1,12.4-121.2,12.4c-28.5,0-60.4-5.4-80.8-9.7 c-13-2.7-21.3-4.9-21.3-4.9L-2385.5-431.2h0.1C-2385.4-431.2-2385.5-431.2-2385.5-431.2z\"></path></g><g><g><g><path fill=\"#C8C6BC\" d=\"M-1331-346.5l238,173.4c0,0,13.7,3.6,34.9,8l-253.5-181.3L-1331-346.5L-1331-346.5z\"></path><path fill=\"#FFFEF0\" d=\"M-1058.1-165.2c33.4,6.9,85.3,15.8,131.8,15.8c60.6,0,197.9-20.3,197.9-20.3l-499.4-177h-83.8 L-1058.1-165.2z\"></path></g></g><polygon opacity=\"0.4\" fill=\"#BCBAD0\" enable-background=\"new \" points=\"-968.1,-254.7 -1246.8,-285.2 -1206,-254.7 \"></polygon></g><g><path id=\"carlinga_1_\" fill=\"#FFFEF0\" d=\"M-2157.6-458.6l89.8,122.8l324.5,81.1h1189.9c0,0,267-14.6,349.8,40.6l29.3,27 c0,0,81.2,30.7,92.3,60.9c0.9,2.3,1.3,4.5,1.3,6.8c-0.4,32.8-85.6,108.1-472.7,108.1H-1527c-72.3,0-172.8-20.4-283-48.9 c-258-66.7-553.7-178.2-553.7-178.2v-57.9l58.4-14.2l-38.7-148L-2157.6-458.6L-2157.6-458.6z\"></path><polygon fill=\"#FFFEF0\" points=\"-2396.7,-660.4 -2305.1,-660.4 -2215.3,-537.5 -2364.5,-537.5 \"></polygon><g><polygon fill=\"#FFFEF0\" points=\"-2317.3,-458.6 -2343.9,-458.6 -2364.5,-537.5 -2341.7,-537.5 \"></polygon><polygon fill=\"#8CC152\" points=\"-2215.3,-537.5 -2157.6,-458.6 -2317.3,-458.6 -2341.7,-537.5 \"></polygon></g></g><g><polygon fill=\"#C8C6BC\" points=\"-2107.7,-273.9 -2200.5,-179.6 -2286.7,-210.1 \"></polygon><g><path fill=\"#C8C6BC\" d=\"M-2454.7-172l137.1-99.9c0,0,7.9-2.1,20.1-4.6l-146,104.4L-2454.7-172L-2454.7-172z\"></path><path fill=\"#FFFEF0\" d=\"M-2297.6-276.4c19.3-4,49.2-9.1,75.9-9.1c34.9,0,113.9,11.7,113.9,11.7L-2368.3-172h-75.3L-2297.6-276.4z \"></path></g></g><g><polygon fill=\"#8CC152\" points=\"-2272,-336.7 -2278.5,-334.6 -2379.5,-659.1 -2373.1,-661.1 \"></polygon></g><g><g><path fill=\"#00ADEF\" d=\"M-1601.4-130.8l1078.7-22.9l43.6,56.7h-1122.2c-166.9,0-288-4.1-373.6-9c-50.6-15.4-99.9-31.3-145.5-46.4 C-2064-145.2-1911.6-130.8-1601.4-130.8z\"></path></g><g><path fill=\"#DA4453\" d=\"M-1601.4-85.3h900.3L-718-68.4h-883.4c-102.2,0-187.2-1.5-257.3-3.8c-23.2-6.3-46.5-13-69.7-19.8 C-1847.2-88.2-1740.1-85.3-1601.4-85.3z\"></path></g></g><path fill=\"#E4E2D6\" d=\"M-82.1-126.3c0.9,2.3,1.3,4.5,1.3,6.8c-0.4,32.8-85.6,108.1-472.7,108.1H-1527 c-182.6,0-593.5-141.1-593.5-141.1s192,82.1,776.1,82.1C-133.3-70.3-84.3-125.7-82.1-126.3z\"></path><g><g><path fill=\"#EDEDE6\" d=\"M-796.4,15.4c-162,22.8-234-1.8-278.3-13.5v-81.1c44.2-11.7,116.3-36.4,278.3-13.5V15.4z\"></path><polygon fill=\"#C8C6BC\" points=\"-778.9,-79.3 -778.9,-65.8 -778.9,1.8 -796.4,15.4 -796.4,-65.8 -796.4,-92.8 \"></polygon><g><polygon fill=\"#EDEDE6\" points=\"-1074.6,-4.3 -1092,-8.7 -1092,-68.8 -1074.6,-73.1 \"></polygon><g><polygon fill=\"#EDEDE6\" points=\"-1092,-17.3 -1144.2,-30.1 -1144.2,-47.3 -1092,-60.2 \"></polygon></g></g><g><path fill=\"#C8C6BC\" d=\"M-1078.9-79.3c38.6-10.2,98.4-30.3,220.6-20.1L-979.6,22c-46.2-4.6-76.4-14.1-99.2-20.1L-1078.9-79.3 L-1078.9-79.3z\"></path></g></g><g><path fill=\"#C8C6BC\" d=\"M-1460.9,76.5l238-173.4c0,0,13.7-3.6,34.8-8l-253.5,181.4H-1460.9L-1460.9,76.5z\"></path><path fill=\"#FFFEF0\" d=\"M-1188-104.9c33.4-6.9,85.3-15.8,131.8-15.8c60.6,0,197.9,20.2,197.9,20.2l-452.4,177h-130.8L-1188-104.9 z\"></path></g></g><g><path fill=\"#00ADEF\" d=\"M-203.8-214.2h-79.4c0,0-5.7,27,108.6,27L-203.8-214.2L-203.8-214.2z\"></path><g><g><path fill=\"#00ADEF\" d=\"M-1753.5-187.1c0,3.7,3,6.8,6.8,6.8h6.8c3.7,0,6.8-3,6.8-6.8v-13.5c0-3.8-3-6.8-6.8-6.8h-6.8 c-3.7,0-6.8,3-6.8,6.8V-187.1z\"></path></g><g><path fill=\"#00ADEF\" d=\"M-1699.4-187.1c0,3.7,3,6.8,6.8,6.8h6.8c3.7,0,6.8-3,6.8-6.8v-13.5c0-3.8-3-6.8-6.8-6.8h-6.8 c-3.7,0-6.8,3-6.8,6.8V-187.1z\"></path></g><g><path fill=\"#00ADEF\" d=\"M-1645.3-187.1c0,3.7,3,6.8,6.8,6.8h6.8c3.7,0,6.8-3,6.8-6.8v-13.5c0-3.8-3-6.8-6.8-6.8h-6.8 c-3.7,0-6.8,3-6.8,6.8V-187.1z\"></path></g><g><path fill=\"#00ADEF\" d=\"M-1591.3-187.1c0,3.7,3,6.8,6.8,6.8h6.8c3.7,0,6.8-3,6.8-6.8v-13.5c0-3.8-3-6.8-6.8-6.8h-6.8 c-3.7,0-6.8,3-6.8,6.8V-187.1z\"></path></g><g><path fill=\"#00ADEF\" d=\"M-1537.2-187.1c0,3.7,3,6.8,6.8,6.8h6.8c3.7,0,6.8-3,6.8-6.8v-13.5c0-3.8-3-6.8-6.8-6.8h-6.8 c-3.7,0-6.8,3-6.8,6.8V-187.1z\"></path></g><g><path fill=\"#00ADEF\" d=\"M-1483.1-187.1c0,3.7,3,6.8,6.8,6.8h6.8c3.7,0,6.8-3,6.8-6.8v-13.5c0-3.8-3-6.8-6.8-6.8h-6.8 c-3.7,0-6.8,3-6.8,6.8V-187.1z\"></path></g><g><path fill=\"#00ADEF\" d=\"M-1429-187.1c0,3.7,3,6.8,6.8,6.8h6.8c3.7,0,6.8-3,6.8-6.8v-13.5c0-3.8-3-6.8-6.8-6.8h-6.8 c-3.7,0-6.8,3-6.8,6.8V-187.1z\"></path></g><g><path fill=\"#00ADEF\" d=\"M-1374.9-187.1c0,3.7,3,6.8,6.8,6.8h6.8c3.7,0,6.8-3,6.8-6.8v-13.5c0-3.8-3-6.8-6.8-6.8h-6.8 c-3.7,0-6.8,3-6.8,6.8V-187.1z\"></path></g><g><path fill=\"#00ADEF\" d=\"M-1320.8-187.1c0,3.7,3,6.8,6.8,6.8h6.8c3.7,0,6.8-3,6.8-6.8v-13.5c0-3.8-3-6.8-6.8-6.8h-6.8 c-3.7,0-6.8,3-6.8,6.8V-187.1z\"></path></g><g><path fill=\"#00ADEF\" d=\"M-1266.8-187.1c0,3.7,3,6.8,6.8,6.8h6.8c3.7,0,6.8-3,6.8-6.8v-13.5c0-3.8-3-6.8-6.8-6.8h-6.8 c-3.7,0-6.8,3-6.8,6.8V-187.1z\"></path></g><g><path fill=\"#00ADEF\" d=\"M-1212.7-187.1c0,3.7,3,6.8,6.8,6.8h6.8c3.7,0,6.8-3,6.8-6.8v-13.5c0-3.8-3-6.8-6.8-6.8h-6.8 c-3.7,0-6.8,3-6.8,6.8V-187.1z\"></path></g><g><path fill=\"#00ADEF\" d=\"M-1158.6-187.1c0,3.7,3,6.8,6.8,6.8h6.8c3.7,0,6.8-3,6.8-6.8v-13.5c0-3.8-3-6.8-6.8-6.8h-6.8 c-3.7,0-6.8,3-6.8,6.8V-187.1z\"></path></g><g><path fill=\"#00ADEF\" d=\"M-1104.5-187.1c0,3.7,3,6.8,6.8,6.8h6.8c3.7,0,6.8-3,6.8-6.8v-13.5c0-3.8-3-6.8-6.8-6.8h-6.8 c-3.7,0-6.8,3-6.8,6.8V-187.1z\"></path></g><g><path fill=\"#00ADEF\" d=\"M-1050.4-187.1c0,3.7,3,6.8,6.8,6.8h6.8c3.8,0,6.8-3,6.8-6.8v-13.5c0-3.8-3-6.8-6.8-6.8h-6.8 c-3.7,0-6.8,3-6.8,6.8V-187.1z\"></path></g><g><path fill=\"#00ADEF\" d=\"M-996.3-187.1c0,3.7,3,6.8,6.8,6.8h6.8c3.7,0,6.8-3,6.8-6.8v-13.5c0-3.8-3-6.8-6.8-6.8h-6.8 c-3.7,0-6.8,3-6.8,6.8V-187.1z\"></path></g><g><path fill=\"#00ADEF\" d=\"M-942.3-187.1c0,3.7,3,6.8,6.8,6.8h6.8c3.7,0,6.8-3,6.8-6.8v-13.5c0-3.8-3-6.8-6.8-6.8h-6.8 c-3.7,0-6.8,3-6.8,6.8V-187.1z\"></path></g><g><path fill=\"#00ADEF\" d=\"M-888.2-187.1c0,3.7,3,6.8,6.8,6.8h6.8c3.7,0,6.8-3,6.8-6.8v-13.5c0-3.8-3-6.8-6.8-6.8h-6.8 c-3.7,0-6.8,3-6.8,6.8V-187.1z\"></path></g><g><path fill=\"#00ADEF\" d=\"M-834.1-187.1c0,3.7,3,6.8,6.8,6.8h6.8c3.7,0,6.8-3,6.8-6.8v-13.5c0-3.8-3-6.8-6.8-6.8h-6.8 c-3.7,0-6.8,3-6.8,6.8V-187.1z\"></path></g><g><path fill=\"#00ADEF\" d=\"M-780-187.1c0,3.7,3,6.8,6.8,6.8h6.8c3.7,0,6.8-3,6.8-6.8v-13.5c0-3.8-3-6.8-6.8-6.8h-6.8 c-3.7,0-6.8,3-6.8,6.8V-187.1z\"></path></g><g><path fill=\"#00ADEF\" d=\"M-725.9-187.1c0,3.7,3,6.8,6.8,6.8h6.8c3.7,0,6.8-3,6.8-6.8v-13.5c0-3.8-3-6.8-6.8-6.8h-6.8 c-3.7,0-6.8,3-6.8,6.8V-187.1z\"></path></g><g><path fill=\"#00ADEF\" d=\"M-671.8-187.1c0,3.7,3,6.8,6.8,6.8h6.8c3.7,0,6.8-3,6.8-6.8v-13.5c0-3.8-3-6.8-6.8-6.8h-6.8 c-3.7,0-6.8,3-6.8,6.8V-187.1z\"></path></g><g><path fill=\"#00ADEF\" d=\"M-617.8-187.1c0,3.7,3,6.8,6.8,6.8h6.8c3.7,0,6.8-3,6.8-6.8v-13.5c0-3.8-3-6.8-6.8-6.8h-6.8 c-3.7,0-6.8,3-6.8,6.8V-187.1z\"></path></g><g><path fill=\"#00ADEF\" d=\"M-563.7-187.1c0,3.7,3,6.8,6.8,6.8h6.8c3.7,0,6.8-3,6.8-6.8v-13.5c0-3.8-3-6.8-6.8-6.8h-6.8 c-3.7,0-6.8,3-6.8,6.8V-187.1z\"></path></g><g><path fill=\"#00ADEF\" d=\"M-509.6-187.1c0,3.7,3,6.8,6.8,6.8h6.8c3.7,0,6.8-3,6.8-6.8v-13.5c0-3.8-3-6.8-6.8-6.8h-6.8 c-3.7,0-6.8,3-6.8,6.8V-187.1z\"></path></g></g></g><path fill=\"#FFFEF0\" d=\"M-1395.9,69.8c35.5,0.4,85.2,6.8,85.2,6.8s-49.7,6.3-85.2,6.8c-35.5,0.4-65-6.8-65-6.8 S-1431.4,69.3-1395.9,69.8z\"></path><path fill=\"#FFFEF0\" d=\"M-2417.2-176c20.5,0.3,49.3,3.9,49.3,3.9s-28.8,3.6-49.3,3.9c-20.5,0.3-37.6-3.9-37.6-3.9 S-2437.7-176.3-2417.2-176z\"></path><polygon fill=\"#FFFEF0\" points=\"-221.7,-218.3 -205.5,-186.3 -211.6,-183.2 -227.8,-215.3 \"></polygon><polygon fill=\"#FFFEF0\" points=\"-247.4,-218.6 -243.4,-190.3 -250.1,-189.3 -254.2,-217.6 \"></polygon><path fill=\"#E4E2D6\" d=\"M-355.3-160.5c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 S-357.2-160.5-355.3-160.5z\"></path><path fill=\"#E4E2D6\" d=\"M-1821.7-160.5c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.8,0-3.4-1.5-3.4-3.4 C-1825.1-159-1823.6-160.5-1821.7-160.5z\"></path></g></svg>"

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = "<div class=\"scene-content\">\n\n\n\n</div>\n\n<div class=\"svg\"></div>\n";

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scene_svg__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scene_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__scene_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scene_html__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scene_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__scene_html__);



/* harmony default export */ __webpack_exports__["a"] = ({
  init: function init() {
    document.querySelector('[data-scene="scene3"]').innerHTML = __WEBPACK_IMPORTED_MODULE_1__scene_html___default.a;
    document.querySelector('[data-scene="scene3"] .svg').innerHTML = __WEBPACK_IMPORTED_MODULE_0__scene_svg___default.a;
  }
});

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = "<svg version=\"1.1\" id=\"svg3\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"496 -368 1024 768\" enable-background=\"new 496 -368 1024 768\" xml:space=\"preserve\"><g id=\"bg2_1_\"><rect x=\"-3360.1\" y=\"-2659.6\" fill=\"#44C650\" width=\"8736.7\" height=\"5396\"></rect></g><g id=\"objects\" inkscape:version=\"0.48.4 r9939\" sodipodi:docname=\"drawing.svg\" xmlns:cc=\"http://creativecommons.org/ns#\" xmlns:sodipodi=\"http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd\" xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:svg=\"http://www.w3.org/2000/svg\" xmlns:inkscape=\"http://www.inkscape.org/namespaces/inkscape\"><g id=\"iphone\"><path fill=\"#0F0D10\" d=\"M1438.7,68.9l1.2,9.7c0.5,3.6,3.7,6.1,7.3,5.7l52-6.6c3.6-0.5,6.1-3.7,5.7-7.3l-1.2-9.7L1438.7,68.9z\"></path><path fill=\"#0F0D10\" d=\"M1491.3-36.8l-1.2-9.7c-0.5-3.6-3.7-6.1-7.3-5.7l-52,6.6c-3.6,0.5-6.1,3.7-5.7,7.3l1.2,9.7L1491.3-36.8z\"></path><rect x=\"1432.3\" y=\"-33.1\" transform=\"matrix(-0.9921 0.1256 -0.1256 -0.9921 2920.4512 -152.1409)\" fill=\"#0F0D10\" width=\"65.5\" height=\"98.2\"></rect><rect x=\"1435.6\" y=\"-33\" transform=\"matrix(-0.9921 0.1256 -0.1256 -0.9921 2920.4771 -151.9379)\" fill=\"#F5F7FA\" width=\"58.9\" height=\"98.2\"></rect><circle fill=\"#272528\" cx=\"1472.2\" cy=\"72.9\" r=\"4.9\"></circle><g id=\"s3\"><rect id=\"s3-bg1\" x=\"1439.3\" y=\"25.7\" transform=\"matrix(-0.9921 0.1256 -0.1256 -0.9921 2931.5222 -94.1325)\" fill=\"#CCD1D9\" width=\"58.9\" height=\"39.3\"></rect><g><rect id=\"i1\" x=\"1456\" y=\"47.8\" transform=\"matrix(-0.9921 0.1256 -0.1256 -0.9921 2932.6328 -87.7094)\" fill=\"#F5F7FA\" width=\"26.2\" height=\"1.6\"></rect><rect id=\"i2\" x=\"1456.9\" y=\"54.2\" transform=\"matrix(-0.9921 0.1256 -0.1256 -0.9921 2935.2166 -75.063)\" fill=\"#F5F7FA\" width=\"26.2\" height=\"1.6\"></rect><rect id=\"i3\" x=\"1456.5\" y=\"51\" transform=\"matrix(-0.9921 0.1256 -0.1256 -0.9921 2934.0127 -81.3995)\" fill=\"#F5F7FA\" width=\"26.2\" height=\"1.6\"></rect><rect id=\"i4\" x=\"1457.3\" y=\"58.3\" transform=\"matrix(-0.9921 0.1257 -0.1257 -0.9921 2923.5112 -66.2683)\" fill=\"#F5F7FA\" width=\"13.1\" height=\"1.6\"></rect><rect id=\"i5\" x=\"1454.7\" y=\"31.3\" transform=\"matrix(-0.9921 0.1256 -0.1256 -0.9921 2928.6731 -108.9523)\" fill=\"#44C650\" width=\"26.2\" height=\"13.1\"></rect></g><g><rect id=\"i6\" x=\"1447.5\" y=\"5.5\" transform=\"matrix(-0.9921 0.1256 -0.1256 -0.9921 2916.8494 -171.3033)\" fill=\"#AAB2BD\" width=\"32.7\" height=\"1.6\"></rect><rect id=\"i7\" x=\"1448.3\" y=\"12.1\" transform=\"matrix(-0.9921 0.1256 -0.1256 -0.9921 2919.2852 -158.2649)\" fill=\"#AAB2BD\" width=\"32.7\" height=\"1.6\"></rect><rect id=\"i8\" x=\"1447.9\" y=\"8.8\" transform=\"matrix(-0.9921 0.1256 -0.1256 -0.9921 2918.0571 -164.7963)\" fill=\"#AAB2BD\" width=\"32.7\" height=\"1.6\"></rect><rect id=\"i9\" x=\"1455.3\" y=\"15.2\" transform=\"matrix(-0.9921 0.1256 -0.1256 -0.9921 2920.5566 -152.1483)\" fill=\"#AAB2BD\" width=\"19.6\" height=\"1.6\"></rect><rect id=\"i10\" x=\"1438.1\" y=\"-26.3\" transform=\"matrix(-0.9921 0.1256 -0.1256 -0.9921 2908.2998 -216.3773)\" fill=\"#3498DB\" width=\"45.8\" height=\"19.6\"></rect><rect id=\"i11\" x=\"1443.3\" y=\"-1.5\" transform=\"matrix(-0.9921 0.1256 -0.1256 -0.9921 2914.2266 -184.2502)\" fill=\"#E1E1E2\" width=\"39.3\" height=\"2.5\"></rect></g></g></g><g id=\"ipad\"><path fill=\"#0F0D10\" d=\"M1386-67.4v-12c0-4.4-3.6-8-8-8h-144c-4.4,0-8,3.6-8,8v12H1386z\"></path><path fill=\"#0F0D10\" d=\"M1226,100.6v12c0,4.4,3.6,8,8,8h144c4.4,0,8-3.6,8-8v-12H1226L1226,100.6z\"></path><rect x=\"1226\" y=\"-67.4\" fill=\"#0F0D10\" width=\"160\" height=\"168\"></rect><rect x=\"1234\" y=\"-67.4\" fill=\"#C4C3C4\" width=\"144\" height=\"168\"></rect><circle fill=\"#272528\" cx=\"1306\" cy=\"110.6\" r=\"6\"></circle><g id=\"s2\"><rect x=\"1234\" y=\"-67.4\" fill=\"#E6E9ED\" width=\"144\" height=\"168\"></rect><rect id=\"s2-bg1\" x=\"1234\" y=\"36.6\" fill=\"#FFFFFF\" width=\"144\" height=\"64\"></rect><g><rect id=\"g1\" x=\"1258\" y=\"-51.4\" fill=\"#44C650\" width=\"96\" height=\"48\"></rect><g id=\"g2g\"><rect id=\"g2\" x=\"1274\" y=\"11.6\" fill=\"#434A54\" width=\"64\" height=\"2\"></rect><rect id=\"g3\" x=\"1274\" y=\"19.6\" fill=\"#434A54\" width=\"64\" height=\"2\"></rect><rect id=\"g4\" x=\"1274\" y=\"15.6\" fill=\"#434A54\" width=\"64\" height=\"2\"></rect><rect id=\"g5\" x=\"1282\" y=\"23.6\" fill=\"#434A54\" width=\"48\" height=\"2\"></rect></g><rect id=\"g21\" x=\"1266\" y=\"2.6\" fill=\"#4FC1E9\" width=\"80\" height=\"4\"></rect></g><g><g id=\"g6g\"><rect id=\"g6\" x=\"1290\" y=\"68.6\" fill=\"#AAB2BD\" width=\"32\" height=\"2\"></rect><rect id=\"g7\" x=\"1290\" y=\"76.6\" fill=\"#AAB2BD\" width=\"32\" height=\"2\"></rect><rect id=\"g8\" x=\"1290\" y=\"72.6\" fill=\"#AAB2BD\" width=\"32\" height=\"2\"></rect><rect id=\"g9\" x=\"1290\" y=\"80.6\" fill=\"#AAB2BD\" width=\"16\" height=\"2\"></rect></g><rect id=\"g10\" x=\"1290\" y=\"48.6\" fill=\"#44C650\" width=\"32\" height=\"16\"></rect></g><g><g id=\"g11g\"><rect id=\"g11\" x=\"1242\" y=\"80.6\" fill=\"#AAB2BD\" width=\"16\" height=\"2\"></rect><rect id=\"g12\" x=\"1242\" y=\"72.6\" fill=\"#AAB2BD\" width=\"32\" height=\"2\"></rect><rect id=\"g13\" x=\"1242\" y=\"76.6\" fill=\"#AAB2BD\" width=\"32\" height=\"2\"></rect><rect id=\"g14\" x=\"1242\" y=\"68.6\" fill=\"#AAB2BD\" width=\"32\" height=\"2\"></rect></g><rect id=\"g15\" x=\"1242\" y=\"48.6\" fill=\"#44C650\" width=\"32\" height=\"16\"></rect></g><g><rect id=\"g16\" x=\"1338\" y=\"68.6\" fill=\"#AAB2BD\" width=\"32\" height=\"2\"></rect><rect id=\"g17\" x=\"1338\" y=\"76.6\" fill=\"#AAB2BD\" width=\"32\" height=\"2\"></rect><rect id=\"g18\" x=\"1338\" y=\"72.6\" fill=\"#AAB2BD\" width=\"32\" height=\"2\"></rect><rect id=\"g19\" x=\"1338\" y=\"80.6\" fill=\"#AAB2BD\" width=\"16\" height=\"2\"></rect><rect id=\"g20\" x=\"1338\" y=\"48.6\" fill=\"#44C650\" width=\"32\" height=\"16\"></rect></g><rect x=\"1234\" y=\"-67.4\" fill=\"#4B4A4C\" width=\"144\" height=\"8\"></rect></g></g><g id=\"imac\"><rect id=\"gridbg\" x=\"882.9\" y=\"-187.4\" fill=\"#F5B8B6\" width=\"299.5\" height=\"165.8\"></rect><g id=\"grid\"><rect id=\"grid1\" x=\"902\" y=\"-187.4\" fill=\"#FFFFFF\" width=\"6.4\" height=\"166\"></rect><rect id=\"grid2\" x=\"928\" y=\"-187.4\" fill=\"#FFFFFF\" width=\"6.4\" height=\"166\"></rect><rect id=\"grid3\" x=\"953\" y=\"-187.4\" fill=\"#FFFFFF\" width=\"6.4\" height=\"166\"></rect><rect id=\"grid4\" x=\"979\" y=\"-187.4\" fill=\"#FFFFFF\" width=\"6.4\" height=\"166\"></rect><rect id=\"grid5\" x=\"1004\" y=\"-187.4\" fill=\"#FFFFFF\" width=\"6.4\" height=\"166\"></rect><rect id=\"grid6\" x=\"1030\" y=\"-187.4\" fill=\"#FFFFFF\" width=\"6.4\" height=\"166\"></rect><rect id=\"grid7\" x=\"1055\" y=\"-187.4\" fill=\"#FFFFFF\" width=\"6.4\" height=\"166\"></rect><rect id=\"grid8\" x=\"1081\" y=\"-187.4\" fill=\"#FFFFFF\" width=\"6.4\" height=\"166\"></rect><rect id=\"grid9\" x=\"1106\" y=\"-187.4\" fill=\"#FFFFFF\" width=\"6.4\" height=\"166\"></rect><rect id=\"grid10\" x=\"1132\" y=\"-187.4\" fill=\"#FFFFFF\" width=\"6.4\" height=\"166\"></rect><rect id=\"grid11\" x=\"1157\" y=\"-187.4\" fill=\"#FFFFFF\" width=\"6.4\" height=\"166\"></rect></g><path id=\"bg1\" fill=\"#F5F7FA\" d=\"M1182.4-187.4c0,0,0,0,0,12.8v153.1h-300v-153.1c0-12.8,0-12.8,0-12.8H1182.4L1182.4-187.4z\"></path><rect id=\"bg2\" x=\"882.4\" y=\"-110.8\" fill=\"#E6E9ED\" width=\"300\" height=\"76.6\"></rect><g id=\"b4\"><rect id=\"f22\" x=\"1106.5\" y=\"-48.6\" fill=\"#434A54\" width=\"28.6\" height=\"3.2\"></rect><rect id=\"f21\" x=\"1106.5\" y=\"-61.4\" fill=\"#434A54\" width=\"57.1\" height=\"3.2\"></rect><rect id=\"f20\" x=\"1106.5\" y=\"-55\" fill=\"#434A54\" width=\"57.1\" height=\"3.2\"></rect><rect id=\"f19\" x=\"1106.5\" y=\"-67.8\" fill=\"#434A54\" width=\"57.1\" height=\"3.2\"></rect></g><rect id=\"f18\" x=\"1106.5\" y=\"-99.7\" fill=\"#3498DB\" width=\"57.1\" height=\"25.5\"></rect><g id=\"b3\"><rect id=\"f17\" x=\"1003.8\" y=\"-67.8\" fill=\"#434A54\" width=\"57.1\" height=\"3.2\"></rect><rect id=\"f16\" x=\"1003.8\" y=\"-55\" fill=\"#434A54\" width=\"57.1\" height=\"3.2\"></rect><rect id=\"f15\" x=\"1003.8\" y=\"-61.4\" fill=\"#434A54\" width=\"57.1\" height=\"3.2\"></rect><rect id=\"f14\" x=\"1003.8\" y=\"-48.6\" fill=\"#434A54\" width=\"28.6\" height=\"3.2\"></rect></g><rect id=\"f13\" x=\"1003.8\" y=\"-99.7\" fill=\"#3498DB\" width=\"57.1\" height=\"25.5\"></rect><g id=\"b2\"><rect id=\"f12\" x=\"902.1\" y=\"-67.8\" fill=\"#434A54\" width=\"57.1\" height=\"3.2\"></rect><rect id=\"f11\" x=\"902.1\" y=\"-55\" fill=\"#434A54\" width=\"57.1\" height=\"3.2\"></rect><rect id=\"f10\" x=\"902.1\" y=\"-61.4\" fill=\"#434A54\" width=\"57.1\" height=\"3.2\"></rect><rect id=\"f9\" x=\"902.1\" y=\"-48.6\" fill=\"#434A54\" width=\"28.6\" height=\"3.2\"></rect></g><rect id=\"f8\" x=\"902.1\" y=\"-99.7\" fill=\"#3498DB\" width=\"57.1\" height=\"25.5\"></rect><g id=\"b1\"><rect id=\"f6\" x=\"1018\" y=\"-172.2\" fill=\"#E74C3C\" width=\"110.7\" height=\"6.4\"></rect><rect id=\"f5\" x=\"1018\" y=\"-133.9\" fill=\"#39B54A\" width=\"39.3\" height=\"12.8\"></rect><rect id=\"f4\" x=\"1018\" y=\"-161\" fill=\"#656D78\" width=\"110.7\" height=\"3.2\"></rect><rect id=\"f3\" x=\"1018\" y=\"-148.3\" fill=\"#656D78\" width=\"110.7\" height=\"3.2\"></rect><rect id=\"f2\" x=\"1018\" y=\"-154.7\" fill=\"#656D78\" width=\"110.7\" height=\"3.2\"></rect><rect id=\"f7\" x=\"1018\" y=\"-141.9\" fill=\"#656D78\" width=\"82.1\" height=\"3.2\"></rect></g><rect id=\"f1\" x=\"902.1\" y=\"-172.2\" fill=\"#3498DB\" width=\"110.7\" height=\"51\"></rect></g><g id=\"diagramma1\"><polygon fill=\"#39B54A\" points=\"736.8,-2 709.1,-35.2 561.2,-46.1 543.2,199 721.1,212.1 \"></polygon><polygon fill=\"#F5F7FA\" points=\"713.1,-38.8 565.2,-49.7 547.2,195.4 725,208.5 740.8,-5.6 \"></polygon><polygon fill=\"#8996A9\" points=\"710.8,-7.8 740.8,-5.6 713.1,-38.8 \"></polygon><g id=\"dg1\"><ellipse id=\"d1\" transform=\"matrix(7.330216e-02 -0.9973 0.9973 7.330216e-02 617.2805 638.9192)\" fill=\"#3498DB\" cx=\"652.4\" cy=\"-12.7\" rx=\"15.4\" ry=\"14.9\"></ellipse><rect id=\"d2\" x=\"642.7\" y=\"-14.5\" transform=\"matrix(-0.9973 -7.330216e-02 7.330216e-02 -0.9973 1303.2542 22.636)\" fill=\"#F5F7FA\" width=\"18.6\" height=\"3.8\"></rect><rect id=\"d3\" x=\"649.1\" y=\"-4.2\" transform=\"matrix(-0.9973 -7.310535e-02 7.310535e-02 -0.9973 1299.7186 61.4756)\" fill=\"#E6E9ED\" width=\"3.7\" height=\"22.3\"></rect></g><g id=\"dg2\"><polygon id=\"d4\" fill=\"#E6E9ED\" points=\"687.9,36.2 684.2,35.9 685.2,22.6 614.8,17.4 614.1,27 610.4,26.8 611.3,13.3 689.1,19.1 \"></polygon><polygon id=\"d5\" fill=\"#E74C3C\" points=\"581.7,36.2 612.5,23.1 641,40.6 610.2,53.7 \"></polygon><rect id=\"d6\" x=\"596.5\" y=\"36.5\" transform=\"matrix(-0.9973 -7.340055e-02 7.340055e-02 -0.9973 1218.3253 121.5671)\" fill=\"#F5F7FA\" width=\"29.7\" height=\"3.8\"></rect><rect id=\"d7\" x=\"608.4\" y=\"45.8\" transform=\"matrix(-0.9973 -7.359733e-02 7.359733e-02 -0.9973 1214.7175 154.6632)\" fill=\"#E6E9ED\" width=\"3.7\" height=\"18.3\"></rect></g><g id=\"dg3\"><rect id=\"d8\" x=\"578.9\" y=\"61.2\" transform=\"matrix(-0.9973 -7.340055e-02 7.340055e-02 -0.9973 1210.027 197.6722)\" fill=\"#3498DB\" width=\"59.4\" height=\"30.8\"></rect><rect id=\"d9\" x=\"590.3\" y=\"70\" transform=\"matrix(-0.9973 -7.330216e-02 7.330216e-02 -0.9973 1188.7159 187.4211)\" fill=\"#F5F7FA\" width=\"14.9\" height=\"3.8\"></rect><rect id=\"d10\" x=\"612.7\" y=\"71.4\" transform=\"matrix(-0.9973 -7.349895e-02 7.349895e-02 -0.9973 1225.6483 191.7063)\" fill=\"#F5F7FA\" width=\"7.4\" height=\"3.8\"></rect><rect id=\"d11\" x=\"589.7\" y=\"78.5\" transform=\"matrix(-0.9973 -7.330216e-02 7.330216e-02 -0.9973 1209.0625 205.175)\" fill=\"#F5F7FA\" width=\"37.1\" height=\"3.8\"></rect><rect id=\"d12\" x=\"605.2\" y=\"80.3\" transform=\"matrix(-0.9973 -7.310535e-02 7.310535e-02 -0.9973 1205.5034 236.9141)\" fill=\"#E6E9ED\" width=\"3.7\" height=\"32.2\"></rect></g><g id=\"dg4\"><rect id=\"d13\" x=\"575\" y=\"107.4\" transform=\"matrix(-0.9973 -7.340055e-02 7.340055e-02 -0.9973 1198.0951 304.9243)\" fill=\"#3498DB\" width=\"59.4\" height=\"46.1\"></rect><rect id=\"d14\" x=\"581.5\" y=\"132.3\" transform=\"matrix(-0.9973 -7.330216e-02 7.330216e-02 -0.9973 1196.2281 312.2983)\" fill=\"#F5F7FA\" width=\"44.6\" height=\"3.8\"></rect><rect id=\"d15\" x=\"581\" y=\"138.9\" transform=\"matrix(-0.9973 -7.330216e-02 7.330216e-02 -0.9973 1165.0803 324.363)\" fill=\"#F5F7FA\" width=\"14.9\" height=\"3.8\"></rect><rect id=\"d16\" x=\"603.3\" y=\"140.3\" transform=\"matrix(-0.9973 -7.330216e-02 7.330216e-02 -0.9973 1202.031 328.512)\" fill=\"#F5F7FA\" width=\"7.4\" height=\"3.8\"></rect><rect id=\"d17\" x=\"582.2\" y=\"123.8\" transform=\"matrix(-0.9973 -7.330216e-02 7.330216e-02 -0.9973 1175.9841 294.5612)\" fill=\"#F5F7FA\" width=\"22.3\" height=\"3.8\"></rect><rect id=\"d18\" x=\"611.8\" y=\"125.8\" transform=\"matrix(-0.9973 -7.330216e-02 7.330216e-02 -0.9973 1227.5549 300.4456)\" fill=\"#F5F7FA\" width=\"14.9\" height=\"3.8\"></rect><rect id=\"d19\" x=\"582.7\" y=\"116.7\" transform=\"matrix(-0.9973 -7.340055e-02 7.340055e-02 -0.9973 1192.2705 281.0103)\" fill=\"#F5F7FA\" width=\"37.1\" height=\"3.8\"></rect></g><g id=\"dg5\"><polygon id=\"d20\" fill=\"#44C650\" points=\"655.8,41.7 686.6,28.5 715.1,46 684.3,59.2 \"></polygon><rect id=\"d21\" x=\"670.7\" y=\"42\" transform=\"matrix(-0.9973 -7.330216e-02 7.330216e-02 -0.9973 1366.1172 137.9327)\" fill=\"#F5F7FA\" width=\"29.7\" height=\"3.8\"></rect><rect id=\"d22\" x=\"668.3\" y=\"66.6\" transform=\"matrix(-0.9973 -7.330216e-02 7.330216e-02 -0.9973 1359.1049 198.4728)\" fill=\"#3498DB\" width=\"29.7\" height=\"15.4\"></rect></g><g id=\"dg6\"><rect id=\"d23\" x=\"682.4\" y=\"51.3\" transform=\"matrix(-0.9973 -7.310535e-02 7.310535e-02 -0.9973 1362.3187 170.7607)\" fill=\"#E6E9ED\" width=\"3.7\" height=\"18.3\"></rect><rect id=\"d24\" x=\"676.2\" y=\"72.5\" transform=\"matrix(-0.9973 -7.330216e-02 7.330216e-02 -0.9973 1360.0939 198.7082)\" fill=\"#F5F7FA\" width=\"14.9\" height=\"3.8\"></rect><rect id=\"d25\" x=\"679.9\" y=\"69.5\" transform=\"matrix(-0.9973 -7.310535e-02 7.310535e-02 -0.9973 1354.7909 239.6832)\" fill=\"#E6E9ED\" width=\"3.7\" height=\"51.1\"></rect></g><g id=\"dg7\"><rect id=\"d26\" x=\"651.8\" y=\"89.8\" transform=\"matrix(0.9973 7.330216e-02 -7.330216e-02 0.9973 8.9805 -49.6966)\" fill=\"#3498DB\" width=\"59.4\" height=\"15.4\"></rect><rect id=\"d27\" x=\"681.9\" y=\"96.5\" transform=\"matrix(-0.9973 -7.330216e-02 7.330216e-02 -0.9973 1377.1115 247.3358)\" fill=\"#F5F7FA\" width=\"22.3\" height=\"3.8\"></rect><rect id=\"d28\" x=\"659.7\" y=\"94.6\" transform=\"matrix(-0.9973 -7.330216e-02 7.330216e-02 -0.9973 1325.5209 241.6497)\" fill=\"#F5F7FA\" width=\"14.9\" height=\"3.8\"></rect></g><g id=\"dg8\"><rect id=\"d29\" x=\"657.5\" y=\"112.8\" transform=\"matrix(-0.9973 -7.330216e-02 7.330216e-02 -0.9973 1349.028 290.5073)\" fill=\"#3498DB\" width=\"44.6\" height=\"15.4\"></rect><rect id=\"d30\" x=\"676.8\" y=\"128\" transform=\"matrix(-0.9973 -7.330216e-02 7.330216e-02 -0.9973 1345.4645 324.7833)\" fill=\"#E6E9ED\" width=\"3.7\" height=\"19.4\"></rect><rect id=\"d32\" x=\"668.7\" y=\"118.6\" transform=\"matrix(-0.9973 -7.330216e-02 7.330216e-02 -0.9973 1349.1278 290.5103)\" fill=\"#F5F7FA\" width=\"22.3\" height=\"3.8\"></rect></g><g id=\"dg9\"><ellipse id=\"d31\" transform=\"matrix(7.330216e-02 -0.9973 0.9973 7.330216e-02 469.0443 822.384)\" fill=\"#3498DB\" cx=\"677\" cy=\"158.8\" rx=\"15.4\" ry=\"14.9\"></ellipse><rect id=\"d33\" x=\"667.2\" y=\"157\" transform=\"matrix(-0.9973 -7.330216e-02 7.330216e-02 -0.9973 1339.6256 366.9621)\" fill=\"#FFFFFF\" width=\"18.6\" height=\"3.8\"></rect></g></g><g id=\"appunti\"><rect x=\"897.2\" y=\"122.7\" transform=\"matrix(0.1011 -0.9949 0.9949 0.1011 645.3823 1215.8701)\" fill=\"#39B54A\" width=\"196.7\" height=\"256.2\"></rect><rect x=\"902.1\" y=\"118.8\" transform=\"matrix(0.1011 -0.9949 0.9949 0.1011 653.6492 1217.207)\" fill=\"#E6E9ED\" width=\"196.7\" height=\"256.2\"></rect><rect x=\"908.6\" y=\"118.7\" transform=\"matrix(-3.460012e-02 -0.9994 0.9994 -3.460012e-02 795.0997 1261.6832)\" fill=\"#F5F7FA\" width=\"196.7\" height=\"256.2\"></rect><g id=\"ag1\"><path id=\"a1\" fill=\"#44C650\" d=\"M1091.6,276.3l-108.7,4.2l-3.6-91.1l108.7-4.2L1091.6,276.3z M987.1,276l100-3.9l-3.2-82.4 l-100,3.9L987.1,276z\"></path><rect id=\"a2\" x=\"982.2\" y=\"204.5\" transform=\"matrix(-0.9992 3.890502e-02 -3.890502e-02 -0.9992 2076.106 372.9764)\" fill=\"#44C650\" width=\"104.4\" height=\"4.3\"></rect></g><g id=\"ag2\"><path id=\"a3\" fill=\"#44C650\" d=\"M1021.8,270.3l-21.7,0.8l-0.9-21.7l21.7-0.8L1021.8,270.3z M1004.3,266.7l13-0.5l-0.5-13l-13,0.5 L1004.3,266.7z\"></path><path id=\"a4\" fill=\"#44C650\" d=\"M1047.7,269.3l-21.7,0.9l-0.8-21.7l21.7-0.8L1047.7,269.3z M1030.2,265.6l13-0.5l-0.5-13l-13,0.5 L1030.2,265.6z\"></path><path id=\"a5\" fill=\"#44C650\" d=\"M1073.8,268.3l-21.7,0.8l-0.8-21.7l21.7-0.8L1073.8,268.3z M1056.3,264.6l13-0.5l-0.5-13l-13,0.5 L1056.3,264.6z\"></path></g><g id=\"ag3\"><path id=\"a6\" fill=\"#44C650\" d=\"M1038.2,243.6l-39.1,1.5l-1.2-30.4l39.1-1.5L1038.2,243.6z M1003.3,240.6l30.4-1.2l-0.8-21.7 l-30.4,1.2L1003.3,240.6z\"></path><rect id=\"a7\" x=\"1043.3\" y=\"212.4\" transform=\"matrix(-0.9992 3.900458e-02 -3.900458e-02 -0.9992 2120.3303 387.8162)\" fill=\"#44C650\" width=\"26.1\" height=\"4.3\"></rect><rect id=\"a8\" x=\"1043.8\" y=\"221.1\" transform=\"matrix(-0.9992 3.890502e-02 -3.890502e-02 -0.9992 2121.6379 405.2888)\" fill=\"#44C650\" width=\"26.1\" height=\"4.3\"></rect><rect id=\"a9\" x=\"1044.1\" y=\"229.9\" transform=\"matrix(-0.9992 3.890502e-02 -3.890502e-02 -0.9992 2113.8811 423.0434)\" fill=\"#44C650\" width=\"17.4\" height=\"4.3\"></rect></g><g id=\"ag4\"><rect id=\"a10\" x=\"1055.1\" y=\"290\" transform=\"matrix(-0.9992 3.900458e-02 -3.900458e-02 -0.9992 2155.6362 542.3217)\" fill=\"#44C650\" width=\"34.8\" height=\"4.3\"></rect><rect id=\"a11\" x=\"1055.4\" y=\"298.7\" transform=\"matrix(-0.9992 3.890502e-02 -3.890502e-02 -0.9992 2156.6418 559.8035)\" fill=\"#44C650\" width=\"34.9\" height=\"4.3\"></rect><rect id=\"a18\" x=\"1072.1\" y=\"281.1\" transform=\"matrix(-0.9992 3.900458e-02 -3.900458e-02 -0.9992 2171.8855 524.2064)\" fill=\"#44C650\" width=\"17.4\" height=\"4.3\"></rect></g><g id=\"ag5\"><rect id=\"a12\" x=\"967.2\" y=\"258.4\" transform=\"matrix(-0.9992 3.900458e-02 -3.900458e-02 -0.9992 1987.2742 482.4036)\" fill=\"#44C650\" width=\"43.4\" height=\"4.3\"></rect><rect id=\"a13\" x=\"949.6\" y=\"259.9\" transform=\"matrix(-0.9993 3.869431e-02 -3.869431e-02 -0.9993 1917.4197 486.9216)\" fill=\"#44C650\" width=\"8.7\" height=\"4.3\"></rect><rect id=\"a14\" x=\"964.7\" y=\"197.9\" transform=\"matrix(-0.9992 3.900458e-02 -3.900458e-02 -0.9992 1979.9198 361.5571)\" fill=\"#44C650\" width=\"43.4\" height=\"4.3\"></rect><rect id=\"a15\" x=\"947.4\" y=\"199.4\" transform=\"matrix(-0.9993 3.859477e-02 -3.859477e-02 -0.9993 1910.657 366.1379)\" fill=\"#44C650\" width=\"8.7\" height=\"4.3\"></rect><rect id=\"a16\" x=\"948\" y=\"216.5\" transform=\"matrix(-0.9992 3.880546e-02 -3.880546e-02 -0.9992 1912.5157 400.2531)\" fill=\"#44C650\" width=\"8.7\" height=\"4.3\"></rect><polygon id=\"a17\" fill=\"#44C650\" points=\"1017.4,231.2 982.5,219.7 965.5,220.4 965.4,216 983.1,215.3 1018.7,227.1 \"></polygon></g></g><g id=\"appunti2\"><rect x=\"1683.8\" y=\"-5\" transform=\"matrix(-0.9548 0.2971 -0.2971 -0.9548 3433.354 -346.616)\" fill=\"#363532\" width=\"118.5\" height=\"185.2\"></rect><circle fill=\"#363532\" cx=\"1776.4\" cy=\"-4.3\" r=\"14.8\"></circle><circle fill=\"#363532\" cx=\"1822.7\" cy=\"144.3\" r=\"14.8\"></circle><rect x=\"1799.3\" y=\"-10.1\" transform=\"matrix(0.9548 -0.2972 0.2972 0.9548 61.5143 540.025)\" fill=\"#363532\" width=\"14.8\" height=\"155.6\"></rect><circle fill=\"#363532\" cx=\"1711.7\" cy=\"186.6\" r=\"7.4\"></circle><circle fill=\"#363532\" cx=\"1661\" cy=\"23.9\" r=\"7.4\"></circle><rect x=\"1678.8\" y=\"19.3\" transform=\"matrix(-0.9548 0.2972 -0.2972 -0.9548 3332.7676 -297.6945)\" fill=\"#363532\" width=\"20.4\" height=\"170.4\"></rect><rect x=\"1683.1\" y=\"-6.8\" transform=\"matrix(-0.9548 0.2971 -0.2971 -0.9548 3431.4954 -349.8928)\" fill=\"#FFFFFF\" width=\"118.5\" height=\"185.2\"></rect><circle fill=\"#FFFFFF\" cx=\"1775.9\" cy=\"-6\" r=\"14.8\"></circle><circle fill=\"#FFFFFF\" cx=\"1822.1\" cy=\"142.5\" r=\"14.8\"></circle><rect x=\"1798.7\" y=\"-11.7\" transform=\"matrix(0.9548 -0.2972 0.2972 0.9548 61.961 539.7559)\" fill=\"#FFFFFF\" width=\"14.8\" height=\"155.6\"></rect><circle fill=\"#FFFFFF\" cx=\"1711.7\" cy=\"186.6\" r=\"5.6\"></circle><circle fill=\"#FFFFFF\" cx=\"1660.5\" cy=\"22.1\" r=\"7.4\"></circle><rect x=\"1680.4\" y=\"17.2\" transform=\"matrix(-0.9548 0.2971 -0.2971 -0.9548 3333.6741 -300.0716)\" fill=\"#FFFFFF\" width=\"18.5\" height=\"172.2\"></rect><path fill=\"#434A54\" d=\"M1770.9-22l-113.2,35.2c-3.9,1.2-6.1,5.4-4.9,9.3l50.6,162.7c1.2,3.9,5.4,6.1,9.3,4.9l113.2-35.2 c7.8-2.4,12.2-10.7,9.7-18.6l-46.2-148.6C1787.1-20,1778.7-24.4,1770.9-22z\"></path><rect x=\"1693.1\" y=\"3.8\" transform=\"matrix(-0.955 0.2967 -0.2967 -0.955 3347.1514 -305.9011)\" fill=\"#A0D468\" width=\"7.4\" height=\"194.5\"></rect><rect x=\"1704.5\" y=\"50.3\" transform=\"matrix(0.9542 -0.2992 0.2992 0.9542 63.9709 522.1379)\" fill=\"#E6E9ED\" width=\"65.2\" height=\"3.7\"></rect><rect x=\"1709\" y=\"64.8\" transform=\"matrix(0.9542 -0.2992 0.2992 0.9542 59.8407 524.1202)\" fill=\"#E6E9ED\" width=\"65.2\" height=\"3.7\"></rect><rect x=\"1713.4\" y=\"79.4\" transform=\"matrix(0.9542 -0.2992 0.2992 0.9542 55.6837 526.1115)\" fill=\"#E6E9ED\" width=\"65.2\" height=\"3.7\"></rect><rect x=\"1717.7\" y=\"93.9\" transform=\"matrix(0.9542 -0.2992 0.2992 0.9542 51.5285 528.0619)\" fill=\"#E6E9ED\" width=\"65.2\" height=\"3.7\"></rect></g><g id=\"coffee\"><circle fill=\"#39B54A\" cx=\"1619\" cy=\"-92.4\" r=\"50.6\"></circle><circle fill=\"#E6E9ED\" cx=\"1624\" cy=\"-94.4\" r=\"50.6\"></circle><path fill=\"#3498DB\" d=\"M1624-136.1c23,0,41.7,18.7,41.7,41.7S1647-52.7,1624-52.7c-10.4,0-19.9-3.8-27.2-10.1 c-8.9-7.6-14.5-19-14.5-31.6C1582.3-117.4,1601-136.1,1624-136.1z\"></path><path id=\"linecover2\" fill=\"#E6E9ED\" d=\"M1624-137.1c23.6,0,42.7,19.1,42.7,42.7s-19.1,42.7-42.7,42.7c-10.6,0-20.3-3.9-27.8-10.3 c-9.1-7.8-14.9-19.4-14.9-32.4C1581.3-118,1600.5-137.1,1624-137.1z\"></path><ellipse transform=\"matrix(-0.1184 0.993 -0.993 -0.1184 1738.9366 -1668.7406)\" fill=\"#D8D8DA\" cx=\"1610.3\" cy=\"-62.4\" rx=\"7.7\" ry=\"11.6\"></ellipse><polygon fill=\"#CCD1D9\" points=\"1560.9,-72.2 1601.7,-65.3 1601.3,-61.7 1559.9,-64.5 \"></polygon><ellipse transform=\"matrix(-0.1184 0.993 -0.993 -0.1184 1738.7898 -1668.6754)\" fill=\"#AAB2BD\" cx=\"1610.2\" cy=\"-62.4\" rx=\"6.4\" ry=\"9.6\"></ellipse><path fill=\"#FFFFFF\" d=\"M1596.8-137.3l9.7,12.5c1.6,2.1,1.2,5-0.8,6.7c-2.1,1.6-5,1.2-6.7-0.8l-9.7-12.5c-1.6-2.1-1.2-5,0.8-6.7 C1592.2-139.7,1595.1-139.3,1596.8-137.3z\"></path><circle fill=\"#FFFFFF\" cx=\"1624\" cy=\"-94.4\" r=\"34.8\"></circle><circle fill=\"#E6E7E8\" cx=\"1624\" cy=\"-94.4\" r=\"31.3\"></circle><circle fill=\"#49433C\" cx=\"1624\" cy=\"-94.4\" r=\"29.6\"></circle><path fill=\"#363532\" d=\"M1602.8-77.9c9.1,11.7,26,13.8,37.7,4.7c0.7-0.5,0.8-1.5,0.3-2.2s-1.5-0.8-2.2-0.3 c-0.3,0.2-0.6,0.4-0.9,0.6c-0.1,0.1-0.2,0.1-0.2,0.2c-0.3,0.2-0.5,0.4-0.8,0.5c-0.1,0.1-0.2,0.1-0.3,0.2c-0.2,0.1-0.4,0.2-0.6,0.3 c-0.1,0.1-0.3,0.1-0.4,0.2c-0.2,0.1-0.5,0.2-0.7,0.4c-0.2,0.1-0.4,0.2-0.5,0.3c-0.1,0.1-0.3,0.1-0.4,0.2c-0.2,0.1-0.3,0.2-0.5,0.2 c-0.2,0.1-0.5,0.2-0.7,0.3c-0.2,0.1-0.3,0.1-0.5,0.2c-0.2,0.1-0.3,0.1-0.5,0.2c-0.1,0-0.3,0.1-0.4,0.1c-0.3,0.1-0.6,0.2-0.9,0.2 c-0.1,0-0.2,0.1-0.3,0.1c-0.2,0.1-0.5,0.1-0.8,0.2c-0.1,0-0.2,0-0.2,0.1c-0.3,0.1-0.7,0.1-1,0.2c0,0,0,0-0.1,0 c-0.2,0-0.4,0.1-0.6,0.1c-0.1,0-0.3,0-0.5,0.1h-0.1c-0.7,0.1-1.5,0.1-2.2,0.1l0,0c-0.7,0-1.5,0-2.2-0.1h-0.1c-0.3,0-0.7-0.1-1-0.1 c0,0,0,0-0.1,0c-0.3,0-0.6-0.1-0.9-0.1c-0.1,0-0.3,0-0.4-0.1c-0.2,0-0.4-0.1-0.5-0.1c-0.6-0.1-1.3-0.3-1.9-0.5l0,0 c-3.4-1-6.6-2.8-9.2-5.2c0,0,0,0-0.1,0c-0.1-0.1-0.3-0.3-0.4-0.4c-0.1-0.1-0.2-0.2-0.4-0.4c-0.1-0.1-0.2-0.2-0.4-0.4 c-0.2-0.2-0.4-0.4-0.6-0.7c-0.1-0.1-0.1-0.2-0.2-0.2c-0.2-0.3-0.5-0.5-0.7-0.8c-0.2-0.3-0.4-0.6-0.6-0.9c-0.1-0.1-0.1-0.2-0.2-0.3 c-0.2-0.2-0.3-0.5-0.5-0.7c-0.1-0.1-0.2-0.3-0.3-0.4c-0.1-0.1-0.2-0.3-0.3-0.4c-0.1-0.2-0.2-0.4-0.3-0.5c0,0,0,0,0-0.1 c-1.7-3.2-2.6-6.7-2.8-10.3l0,0c0-0.7,0-1.3,0-2c0-0.2,0-0.4,0-0.5s0-0.3,0-0.4c0-0.3,0.1-0.6,0.1-1c0,0,0,0,0-0.1 c0-0.3,0.1-0.7,0.1-1v-0.1c0.1-0.7,0.3-1.4,0.5-2.2l0,0c0.2-0.7,0.4-1.4,0.7-2.1c0,0,0,0,0-0.1c0.1-0.1,0.1-0.3,0.2-0.4 c0.1-0.2,0.2-0.4,0.2-0.6c0,0,0,0,0-0.1c0.1-0.3,0.3-0.6,0.4-0.9c0-0.1,0.1-0.1,0.1-0.2c0.1-0.2,0.2-0.5,0.4-0.7 c0.1-0.1,0.1-0.2,0.2-0.3c0.1-0.3,0.3-0.5,0.5-0.8c0.1-0.1,0.2-0.3,0.3-0.4s0.2-0.3,0.3-0.4c0.1-0.1,0.2-0.3,0.3-0.4 c0.2-0.2,0.3-0.4,0.5-0.6c0.1-0.1,0.2-0.3,0.3-0.4c0.1-0.1,0.2-0.2,0.3-0.3c0.1-0.2,0.3-0.3,0.4-0.5c0.2-0.2,0.3-0.4,0.5-0.6 c0.1-0.1,0.2-0.2,0.3-0.3c0.2-0.2,0.3-0.3,0.5-0.5c0.1-0.1,0.1-0.2,0.2-0.2c0.2-0.2,0.5-0.5,0.7-0.7c0.1-0.1,0.1-0.1,0.2-0.2 c0.3-0.2,0.5-0.5,0.8-0.7c0.7-0.5,0.8-1.5,0.3-2.2s-1.5-0.8-2.2-0.3C1595.8-106.5,1593.7-89.6,1602.8-77.9z\"></path><path fill=\"#363532\" d=\"M1612.8-117.1c0.3,0.8,1.3,1.2,2.1,0.8c0.2-0.1,0.4-0.2,0.6-0.3h0.1l0,0c0.2-0.1,0.4-0.1,0.6-0.2l0,0 c0.1,0,0.1,0,0.2-0.1l0,0c0.2-0.1,0.4-0.1,0.6-0.2l0,0l0,0l0,0c0.4-0.1,0.9-0.3,1.4-0.4c0.1,0,0.1,0,0.2,0 c0.4-0.1,0.9-0.2,1.3-0.3c0.1,0,0.2,0,0.3-0.1c-0.1,0-0.1,0-0.2,0c0.1,0,0.1,0,0.2,0l0,0c0.1,0,0.3,0,0.4-0.1l0,0 c0.1,0,0.1,0,0.2,0l0,0h-0.1c0.1,0,0.1,0,0.2,0c0.6-0.1,1.1,0.2,1.4,0.6c0.2,0.2,0.3,0.5,0.3,0.8c0.1,0.9-0.5,1.7-1.3,1.8l0,0l0,0 c-1.3,0.2-2.6,0.5-3.9,0.9l0,0c0,0,0,0-0.1,0l0,0c-0.4,0.1-0.8,0.3-1.2,0.5c-0.8,0.3-1.1,1.3-0.8,2.1c0.3,0.8,1.3,1.2,2.1,0.8 c2.2-0.9,4.5-1.4,6.9-1.4c0.1,0,0.1,0,0.2,0c0.2,0,0.3,0,0.5,0c0.1,0,0.2,0,0.3,0c0.1,0,0.3,0,0.5,0c0.1,0,0.2,0,0.3,0 s0.2,0,0.3,0l0,0c0,0,0,0,0.1,0c0.4,0.1,0.7,0.3,0.9,0.6c0.2,0.3,0.4,0.7,0.3,1.2c-0.1,0.9-0.9,1.5-1.8,1.4c-2.5-0.3-5,0-7.2,1 h-0.1c-0.8,0.3-1.2,1.3-0.8,2.1c0.3,0.8,1.3,1.2,2.1,0.8c4.6-1.9,10-0.5,13,3.4c3.1,4,3.1,9.5,0.1,13.5c-0.5,0.7-0.4,1.7,0.3,2.2 c0.7,0.5,1.7,0.4,2.2-0.3l0.2-0.2c1.4-1.9,2.3-4.2,2.6-6.6c0.1-0.9,0.9-1.5,1.8-1.4c0.4,0.1,0.8,0.3,1.1,0.6 c0.2,0.3,0.3,0.7,0.3,1.1c0,0,0,0,0,0.1l0,0c0,0.1,0,0.2-0.1,0.3c0,0.1,0,0.2,0,0.3c0,0.1-0.1,0.3-0.1,0.4s0,0.2-0.1,0.3 c0,0.2-0.1,0.3-0.1,0.5c0,0.1,0,0.1,0,0.2c-0.6,2.3-1.6,4.4-3,6.3c-0.5,0.7-0.4,1.7,0.3,2.2c0.7,0.5,1.7,0.4,2.2-0.3 c0.3-0.4,0.5-0.7,0.8-1.1l0,0c0,0,0,0,0-0.1l0,0c0.7-1.1,1.4-2.3,1.9-3.5l0,0l0,0c0.3-0.8,1.2-1.2,2.1-0.9 c0.3,0.1,0.5,0.3,0.6,0.5c0.3,0.4,0.4,1,0.2,1.5c0,0.1,0,0.1-0.1,0.2c-0.1,0.2-0.2,0.4-0.2,0.6c0,0.1-0.1,0.2-0.1,0.3 c-0.1,0.2-0.2,0.4-0.3,0.6c0,0.1-0.1,0.2-0.1,0.2c-0.1,0.2-0.2,0.4-0.3,0.6c0,0.1-0.1,0.1-0.1,0.2c-0.1,0.3-0.3,0.5-0.5,0.8l0,0 l0,0c-0.1,0.2-0.2,0.4-0.4,0.6l-0.1,0.1l0,0c-0.1,0.1-0.1,0.2-0.2,0.3c0,0.1-0.1,0.1-0.1,0.2c0,0,0,0-0.1,0.1 c-0.1,0.2-0.3,0.4-0.4,0.6c-0.5,0.7-0.4,1.7,0.3,2.2c0.7,0.5,1.7,0.4,2.2-0.3c7.3-9.7,7.3-23.1-0.2-32.7s-20.5-13-31.6-8.3 C1612.8-118.8,1612.4-117.9,1612.8-117.1z M1645.7-84.7c0,0.1-0.1,0.2-0.1,0.2C1645.6-84.6,1645.6-84.7,1645.7-84.7z M1645.3-83.9 c0,0.1-0.1,0.1-0.1,0.2C1645.2-83.7,1645.2-83.8,1645.3-83.9z M1644.8-83L1644.8-83C1644.8-82.9,1644.8-83,1644.8-83z M1645.9-85.4C1645.9-85.4,1645.9-85.5,1645.9-85.4C1646-85.5,1646-85.5,1645.9-85.4C1646-85.4,1646-85.4,1645.9-85.4z\"></path><path fill=\"#363532\" d=\"M1642.9-80.1L1642.9-80.1c0.2-0.2,0.3-0.4,0.4-0.6C1643.2-80.4,1643-80.3,1642.9-80.1z\"></path></g></g><g id=\"title\"><text id=\"texttitle\" transform=\"matrix(1 0 0 1 512.931 -322.0194)\" fill=\"#F5F7FA\" font-weight=\"100\" font-size=\"36px\">At work, I do:</text></g><path id=\"wire3\" fill=\"none\" stroke=\"#DBDBDB\" stroke-miterlimit=\"10\" enable-background=\"new \" d=\"M1169.1-370.2l-3.8,2.2 c-21.2,19.3-38.9,40.8-57.3,62.4c-20.9,24.4-50.5,40.6-81.1,49.3c-34.8,9.9-71.5,11-107.6,9.3c-19.7-1-40.4-2.6-58.4,5.5 C774.3-203,786-15,893.3-15c91.1,0,204.7,0,295.9,0c0-22.6,0-60.9,0-90.1c31.9,0,29.2,0.1,64.3,0.1c46.1,0,100.7,0,146.7,0 c0,18.9,0.7,70.3,0.7,87.3c0,38.2,0,117.9,0,156.1c-36.7,0-11.8,0.4-65.7,0.4c-21.5,0-42.4,2.6-64,2.1c-29.3-0.7-57.9-3.9-87.1-4.3 c-3.7-0.1-7.6-0.1-11-1.7c-3.4-1.6-5.9-4.4-8.4-7.2c-10.2-11.1-21.7-21.1-34.1-29.7c-8.4,7.1-14.5,16.8-17.3,27.4 c-8.8-18-16-36.8-21.4-56.1c-7.2,7.6-14.5,15.2-21.7,22.9c-2.4,2.5-5,5.2-8.4,6c-5.9,1.4-11.4-3-15.8-7.2 c-17.7-16.7-25.5-33.3-43.2-50c-6.6,6.6-13.9,12.9-22,24.7c-8.5-17.1-13.8-35.9-14.3-54.9C953.2,47.4,943,85,935.9,123.2 c-21.4-0.3-42.8-5-63.9-4.9c-27.6,0.1-55.9,3.6-79.8,18.2c-71.5,43.4-34.2,173.1-108,208.6c-32.3,15.5-93.5,2.7-97.8,54.9\"></path><g id=\"tblock1\"><path fill=\"#3498DB\" d=\"M909.4-283.4h257.1v68.8H909.4V-283.4z\"></path><path fill=\"#3498DB\" d=\"M1043.4-176.5l-13-48l24,0L1043.4-176.5z\"></path><g><g><text transform=\"matrix(1 0 0 1 967.8848 -192.0213)\" fill=\"#ECF0F1\" font-family=\"&#x27;ArialHebrew-Light&#x27;\" font-size=\"21px\"></text></g><g><text transform=\"matrix(1 0 0 1 917.2407 -229.4725)\" fill=\"#ECF0F1\" font-weight=\"300\" font-size=\"18px\">UX and Design </text><text transform=\"matrix(1 0 0 1 917.6499 -257.2889)\" fill=\"#ECF0F1\" font-weight=\"300\" font-size=\"18px\">Front-End development </text><text transform=\"matrix(1 0 0 1 953.228 -233.2889)\" fill=\"#ECF0F1\" font-family=\"&#x27;ArialHebrew-Light&#x27;\" font-size=\"21px\"></text><text transform=\"matrix(1 0 0 1 992.683 -263.2889)\" fill=\"#ECF0F1\" font-family=\"&#x27;ArialHebrew-Light&#x27;\" font-size=\"21px\"></text><text transform=\"matrix(1 0 0 1 1059.647 -263.2889)\" fill=\"#ECF0F1\" font-family=\"&#x27;ArialHebrew-Light&#x27;\" font-size=\"21px\"></text></g><g><text transform=\"matrix(1 0 0 1 1017.2588 -215.7781)\" fill=\"#ECF0F1\" font-family=\"&#x27;ArialHebrew-Light&#x27;\" font-size=\"21px\"></text></g></g></g><g id=\"tblock2\"><path fill=\"#3498DB\" d=\"M1231.3-210.4h257.1v69.8h-257.1V-210.4z\"></path><path fill=\"#3498DB\" d=\"M1360.8-108l-13-48h24L1360.8-108z\"></path><text transform=\"matrix(1 0 0 1 1242.1345 -181.037)\" fill=\"#ECF0F1\" font-weight=\"300\" font-size=\"18px\">Mobile Applications</text><text transform=\"matrix(1 0 0 1 1242.1345 -158.766)\" fill=\"#ECF0F1\" font-weight=\"300\" font-size=\"18px\">Responsive Web Design</text></g><g id=\"tblock3\"><path fill=\"#3498DB\" d=\"M1196.9,199.3h314.3v124.8h-314.3V199.3z\"></path><path fill=\"#3498DB\" d=\"M1152,261.6l48-13v24L1152,261.6z\"></path><g><g><text transform=\"matrix(1 0 0 1 1213.1407 228.6191)\" fill=\"#ECF0F1\" font-weight=\"300\" font-size=\"18px\">Project Management</text><text transform=\"matrix(1 0 0 1 1275.5231 224.0146)\" fill=\"#ECF0F1\" font-family=\"&#x27;ArialHebrew-Light&#x27;\" font-size=\"21px\"></text><text transform=\"matrix(1 0 0 1 1417.5797 224.0146)\" fill=\"#ECF0F1\" font-weight=\"300\" font-size=\"18px\"></text></g><g><text transform=\"matrix(1 0 0 1 1285.4781 247.7704)\" fill=\"#ECF0F1\" font-family=\"&#x27;ArialHebrew-Light&#x27;\" font-size=\"21px\"></text><text transform=\"matrix(1 0 0 1 1304.0172 247.7704)\" fill=\"#ECF0F1\" font-family=\"&#x27;ArialHebrew-Light&#x27;\" font-size=\"21px\"></text><text transform=\"matrix(1 0 0 1 1367.1598 247.7704)\" fill=\"#ECF0F1\" font-family=\"&#x27;ArialHebrew-Light&#x27;\" font-size=\"21px\"></text></g><g><text transform=\"matrix(1 0 0 1 1255.1539 271.5263)\" fill=\"#ECF0F1\" font-family=\"&#x27;ArialHebrew-Light&#x27;\" font-size=\"21px\"></text></g><g><text transform=\"matrix(1 0 0 1 1213.1407 253.3192)\" fill=\"#ECF0F1\" font-weight=\"300\" font-size=\"18px\">Estimating / Strategy / Planning</text><text transform=\"matrix(1 0 0 1 1213.1407 304.8857)\" fill=\"#ECF0F1\" font-weight=\"300\" font-size=\"18px\">Client relationship</text><text transform=\"matrix(1 0 0 1 1265.2545 295.2821)\" fill=\"#ECF0F1\" font-family=\"&#x27;ArialHebrew-Light&#x27;\" font-size=\"21px\"></text><text transform=\"matrix(1 0 0 1 1325.3737 295.2821)\" fill=\"#ECF0F1\" font-family=\"&#x27;ArialHebrew-Light&#x27;\" font-size=\"21px\"></text></g><text transform=\"matrix(1 0 0 1 1213.1407 278.8857)\" fill=\"#ECF0F1\" font-weight=\"300\" font-size=\"18px\">Mentoring, Team Leading</text></g></g></svg>"

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = "<div class=\"scene-content\">\n\n\n\n</div>\n\n<div class=\"svg\"></div>\n";

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scene_svg__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scene_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__scene_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scene_html__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scene_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__scene_html__);



/* harmony default export */ __webpack_exports__["a"] = ({
  init: function init() {
    document.querySelector('[data-scene="scene4"]').innerHTML = __WEBPACK_IMPORTED_MODULE_1__scene_html___default.a;
    document.querySelector('[data-scene="scene4"] .svg').innerHTML = __WEBPACK_IMPORTED_MODULE_0__scene_svg___default.a;

    document.querySelector('#lalineag').addEventListener('click', function () {
      window.open('http://en.wikipedia.org/wiki/La_Linea_(TV_series)');
    });
    document.querySelector('#book1').addEventListener('click', function () {
      window.open('https://youtu.be/9BdtGjoIN4E?t=10s');
    });
    document.querySelector('#book2').addEventListener('click', function () {
      window.open('https://www.youtube.com/watch?v=p0O1VVqRSK0');
    });
    document.querySelector('#book3').addEventListener('click', function () {
      window.open('https://addyosmani.com/resources/essentialjsdesignpatterns/book/');
    });
  }
});

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = "<svg version=\"1.1\" id=\"svg4\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"496 -368 1024 768\" enable-background=\"new 496 -368 1024 768\" xml:space=\"preserve\"><rect x=\"-7641.8\" y=\"-6068.9\" fill=\"#44C650\" width=\"16535.7\" height=\"12159.7\"></rect><g id=\"ruler\"><path fill=\"#459B45\" d=\"M1264.5-102.4l-59.9,155l16.3,6.3l59.9-155L1264.5-102.4z M1268.7-89c-1.1-0.4-1.7-1.7-1.2-2.8 c0.4-1.1,1.7-1.7,2.8-1.3c1.1,0.4,1.7,1.7,1.3,2.8C1271.1-89.1,1269.9-88.6,1268.7-89z\"></path><path fill=\"#F6BB42\" d=\"M1266-102.9l-59.9,155l16.3,6.3l59.9-155L1266-102.9z M1270.2-89.5c-1.1-0.4-1.7-1.7-1.2-2.8 c0.4-1.1,1.7-1.7,2.8-1.3c1.1,0.4,1.7,1.7,1.3,2.8C1272.6-89.6,1271.4-89.1,1270.2-89.5z\"></path><path fill=\"#FFFFFF\" d=\"M1259.8-86.8l6.2,2.4l-0.2,0.5l-6.2-2.4L1259.8-86.8z M1253.4-70l6.2,2.4l0.2-0.5l-6.2-2.4L1253.4-70z M1247-53.6l6.2,2.4l0.2-0.5l-6.2-2.4L1247-53.6z M1240.7-37.4l6.2,2.4l0.2-0.5l-6.2-2.4L1240.7-37.4z M1234.3-21.1l6.2,2.4 l0.2-0.5l-6.2-2.4L1234.3-21.1z M1228.2-4.7l6.2,2.4l0.2-0.5l-6.2-2.4L1228.2-4.7z M1221.8,11.5l6.2,2.4l0.2-0.5l-6.2-2.4 L1221.8,11.5z M1215.5,28l6.2,2.4l0.2-0.5l-6.2-2.4L1215.5,28z M1209.3,44.2l6.2,2.4l0.2-0.5l-6.2-2.4L1209.3,44.2z M1258.1-82.3 l4.1,1.6l0.2-0.5l-4.1-1.6L1258.1-82.3z M1256.5-78.2l4.1,1.6l0.2-0.5l-4.1-1.6L1256.5-78.2z M1254.9-74l4.1,1.6l0.2-0.5l-4.1-1.6 L1254.9-74z M1253.4-69.9l4.1,1.6l0.2-0.5l-4.1-1.6L1253.4-69.9z M1251.8-65.9l4.1,1.6l0.2-0.5l-4.1-1.6L1251.8-65.9z M1250.1-61.9 l4.1,1.6l0.2-0.5l-4.1-1.6L1250.1-61.9z M1248.6-57.8l4.1,1.6l0.2-0.5l-4.1-1.6L1248.6-57.8z M1247-53.7l4.1,1.6l0.2-0.5l-4.1-1.6 L1247-53.7z M1245.4-49.6l4.1,1.6l0.2-0.5l-4.1-1.6L1245.4-49.6z M1243.8-45.6l4.1,1.6l0.2-0.5L1244-46L1243.8-45.6z M1242.3-41.5 l4.1,1.6l0.2-0.5l-4.1-1.6L1242.3-41.5z M1240.6-37.3l4.1,1.6l0.2-0.5l-4.1-1.6L1240.6-37.3z M1239.1-33.4l4.1,1.6l0.2-0.5 l-4.1-1.6L1239.1-33.4z M1237.5-29.2l4.1,1.6l0.2-0.5l-4.1-1.6L1237.5-29.2z M1236-25.2l4.1,1.6l0.2-0.5l-4.1-1.6L1236-25.2z M1234.5-21.1l4.1,1.6l0.2-0.5l-4.1-1.6L1234.5-21.1z M1232.9-16.9l4.1,1.6l0.2-0.5l-4.1-1.6L1232.9-16.9z M1231.2-12.9l4.1,1.6 l0.2-0.5l-4.1-1.6L1231.2-12.9z M1229.7-8.9l4.1,1.6l0.2-0.5l-4.1-1.6L1229.7-8.9z M1228.2-4.7l4.1,1.6l0.2-0.5l-4.1-1.6 L1228.2-4.7z M1226.6-0.6l4.1,1.6l0.2-0.5l-4.1-1.6L1226.6-0.6z M1224.9,3.4L1229,5l0.2-0.5l-4.1-1.6L1224.9,3.4z M1223.4,7.5 l4.1,1.6l0.2-0.5l-4.1-1.6L1223.4,7.5z M1221.8,11.6l4.1,1.6l0.2-0.5l-4.1-1.6L1221.8,11.6z M1220.2,15.6l4.1,1.6l0.2-0.5l-4.1-1.6 L1220.2,15.6z M1218.6,19.7l4.1,1.6l0.2-0.5l-4.1-1.6L1218.6,19.7z M1217.1,23.9l4.1,1.6l0.2-0.5l-4.1-1.6L1217.1,23.9z M1215.6,27.8l4.1,1.6l0.2-0.5l-4.1-1.6L1215.6,27.8z M1214,31.9l4.1,1.6l0.2-0.5l-4.1-1.6L1214,31.9z M1212.4,36l4.1,1.6l0.2-0.5 l-4.1-1.6L1212.4,36z M1210.9,40l4.1,1.6l0.2-0.5l-4.1-1.6L1210.9,40z M1209.3,44.2l4.1,1.6l0.2-0.5l-4.1-1.6L1209.3,44.2z\"></path></g><g id=\"lalineag\"><rect x=\"1087.2\" y=\"258.3\" fill=\"#44C650\" width=\"66.3\" height=\"66.7\"></rect></g><path id=\"wire4\" fill=\"none\" stroke=\"#DBDBDB\" stroke-miterlimit=\"10\" enable-background=\"new \" d=\"M586.1-368.3 c-0.8,45.2,22.2,92,35.9,134.8c10.6,32.9,22.7,68.2,50.8,88.3c26.6,19.1,61.6,20.4,94.4,20.1c25.7-0.3,52.2-1.3,75.8-11.5 c15.7-6.9,29.4-17.5,43-28.1c46.5-36.3,93-72.6,139.5-108.9c25.5-19.9,51.4-40,81.2-52.6c31.2-13.2,65.3-17.6,99.1-19.7 c35.4-2.2,76.7,0.6,97.3,29.4c12.6,17.6,14,40.7,14.7,62.4c0.7,22.8,1.2,45.6,1.4,68.4c0.1,14.5-0.1,29.9-7.9,42.1 c-9.8,15.4-28.9,21.7-46.8,25.5c-110.3,23.4-229.2-7.4-335.4,30.3c-13.7,4.9-27.3,11-37.8,21.1c-8.9,8.5-15.1,19.5-20.2,30.7 c-37.4,82.8-16.5,182.5,30.6,260.3c14.7,24.2,32.1,47.3,54.7,64.4c43.6,32.9,95.9,24.4,147.1,24.4h10.3c2.9,0,5.8,0.1,8.7,0.1 c0.7,0,1-0.2,1-0.9c0-4.1,0.2-8.2-0.1-12.3c-0.2-3.8-0.9-7.5-2.3-11.1c-1.2-3.2-2.9-6.2-4.9-9.1c-1.1,0.8-2.1,1.5-3.1,2.3 c-1.3,1-2.5,2-3.8,3c-1.6,1.3-2.1,3-2.1,4.9c0,0.6,0.2,1.2,0.2,1.7c0.1,0.7-0.2,1.3-0.9,1.5c-0.7,0.2-1.4-0.1-1.6-0.9 c-0.1-0.6-0.1-1.3-0.2-2.2c-0.2,0.7-0.3,1.1-0.5,1.5c-0.3,1-0.9,1.6-1.6,1.3c-0.9-0.3-1.2-0.9-0.8-1.8c-0.5,0.3-0.9,0.7-1.4,0.8 c-1.3,0.2-1.8-0.7-1.2-1.8c0.6-1.1,1.3-2.2,2-3.3c0.1-0.2,0.2-0.4,0.3-0.6c-0.5-0.4-1.1-0.7-1.4-1.2s-0.3-1.2-0.2-1.7 c0.1-0.2,0.9-0.3,1.3-0.4c0.7-0.1,1.3-0.1,2-0.1c0.5,0,0.9,0,1.4-0.1c0.4-0.1,0.8-0.2,1-0.4c2.5-2.3,5-4.5,7.4-6.8 c0.3-0.3,0.4-0.9,0.3-1.4c-0.2-1.2-0.6-2.3-1-3.5c-0.2-0.7,0-1,0.7-1.4c1.7-1,3.4-2,5.1-3c-0.1-0.1-0.1-0.2-0.1-0.2 c-1,0.2-2.1,0.5-3.1,0.5c-0.6,0-1.4,0-1.9-0.4c-1-0.6-0.9-1.3,0-2c0.1-0.1,0.3-0.3,0.4-0.3c-1-0.6-2-1-2.9-1.7 c-1.6-1.4-1.3-3.3,0.5-4.4c1.6-0.9,3.4-1.3,5.2-1.1c3.4,0.4,6.5,1.8,9.1,4.1c2.1,1.9,3.5,5,1.6,8.4c4.8,2,9.6,3.9,14.4,5.9 c0-0.1,0-0.2-0.1-0.3c0.6-0.3,1.3-0.5,1.9-0.8c0.8-0.5,1.5-1,2.2-1.7c0.4-0.4,0.7-1,1.3-0.6c0.7,0.4,1.2,0.9,1,1.8 c-0.1,0.2-0.1,0.4-0.2,0.6c-0.5,1.5-0.4,1.6,0.9,2.5c1.2,0.8,2.5,1.6,3.7,2.6c0.4,0.3,0.7,0.9,0.6,1.3c-0.1,1-0.8,1.2-1.7,0.7 c-0.2-0.1-0.5-0.3-0.9-0.5c0.3,1,1.4,1.9,0.2,2.7c-1,0.6-1.7-0.2-2.5-0.9c0.1,0.2,0.1,0.5,0.3,0.7c0.5,0.6,0.3,1.2-0.2,1.6 c-0.6,0.5-1.4,0.4-1.8-0.2c-0.5-0.7-1-1.4-1.3-2.2c-0.5-1.5-1.4-2.4-3.1-2.8c-2.7-0.6-5.4-1.4-8.2-2.2c0.3,0.5,0.5,0.9,0.7,1.3 c2.1,3.1,2.9,6.5,3.5,10.1c0.6,4.2,0,8.4-0.7,12.6c-0.4,2.9-0.7,5.8-0.9,8.7c-0.2,2.7-0.1,2.7,2.6,2.7l15.6,0.2h3.2 c42.9,0,75.2,0,75.2,0s61.9,4.8,61.9-51.2c0-55.8,0-162.3,0-163.4c0-15.8-5.3-32.7-9.8-47.8c-3.3-10.9-6.8-22.7-3.5-34.1 c5.2-17.7,24.1-26.2,40.6-30.1c28.9-6.8,61.6-3.4,89,7.7c18.3,7.4,48.6,25.6,39,49.9c-10.3,26.3-51.6,30.2-75.2,29.4 c-26.7-0.9-68.2-8.5-82-35.1c-13.4-25.7,19.1-41.8,39.1-46.9c31.2-7.9,70.6-6.4,99,10.2c22.1,12.9,26.1,35,5.1,51.4 c-24.8,19.4-63.1,23.7-93.3,18.3c-23-4.2-54.5-18.8-50.9-47.2c3.5-27.7,35.8-41.7,60.5-42.6c22.1-0.8,45.2-0.5,66.5,6.4 c19.8,6.4,47.8,26.9,41.9,51.5c-2.9,11.9-15.2,18.5-24.5,26.5c-14.8,12.8-23.3,32.6-22.4,52.1c0.4,10.1,3.2,20,5.7,29.8 c10.4,41.5,15.2,84.4,14.2,127.2c-0.5,20.3-3.6,34-10.3,52.5c-7.2,19.9-13,40.7-14,61.9c-0.2,3.2-0.3,4.6-0.3,6.2 c0,2,0.1,3.7,0.1,4.8\"></path><g><circle fill=\"#459B45\" cx=\"1364.4\" cy=\"30.5\" r=\"52.1\"></circle><circle fill=\"#F5ECD9\" cx=\"1368.4\" cy=\"27.5\" r=\"52.1\"></circle><circle fill=\"#2BACB5\" cx=\"1368.4\" cy=\"27.5\" r=\"39.1\"></circle><ellipse transform=\"matrix(-0.9964 8.450393e-02 -8.450393e-02 -0.9964 2760.8235 12.2281)\" fill=\"#D8D8DA\" cx=\"1380.2\" cy=\"64.5\" rx=\"11.9\" ry=\"7.9\"></ellipse><polygon fill=\"#D8D8DA\" points=\"1431.8,64 1389.2,65.5 1388.9,61.8 1431.2,56.1 \"></polygon><ellipse transform=\"matrix(-0.9964 8.450393e-02 -8.450393e-02 -0.9964 2760.646 12.2144)\" fill=\"#95989F\" cx=\"1380.1\" cy=\"64.5\" rx=\"9.9\" ry=\"6.6\"></ellipse><path fill=\"#FFFFFF\" d=\"M1412.5-0.8l-12.8,10c-2.1,1.7-5.2,1.3-6.9-0.8c-1.7-2.1-1.3-5.2,0.8-6.9l12.8-10c2.1-1.7,5.2-1.3,6.9,0.8 C1415-5.5,1414.6-2.4,1412.5-0.8z\"></path><circle fill=\"#FFFFFF\" cx=\"1368.4\" cy=\"27.5\" r=\"35.8\"></circle><circle fill=\"#E6E7E8\" cx=\"1368.4\" cy=\"27.5\" r=\"32.2\"></circle><circle fill=\"#49433C\" cx=\"1368.4\" cy=\"27.5\" r=\"30.4\"></circle><path fill=\"#363532\" d=\"M1351.4,5.6c-12,9.4-14.2,26.8-4.8,38.8c0.6,0.7,1.6,0.8,2.3,0.3c0.7-0.6,0.8-1.6,0.3-2.3 c-0.2-0.3-0.4-0.6-0.7-0.9c-0.1-0.1-0.1-0.2-0.2-0.2c-0.2-0.3-0.4-0.6-0.6-0.9c-0.1-0.1-0.1-0.2-0.2-0.3c-0.1-0.2-0.2-0.4-0.4-0.6 c-0.1-0.1-0.2-0.3-0.2-0.4c-0.1-0.2-0.3-0.5-0.4-0.7s-0.2-0.4-0.3-0.6c-0.1-0.1-0.1-0.3-0.2-0.4c-0.1-0.2-0.2-0.3-0.2-0.5 c-0.1-0.3-0.2-0.5-0.3-0.8c-0.1-0.2-0.1-0.3-0.2-0.5s-0.1-0.3-0.2-0.5s-0.1-0.3-0.2-0.5c-0.1-0.3-0.2-0.6-0.3-0.9 c0-0.1-0.1-0.2-0.1-0.3c-0.1-0.3-0.1-0.5-0.2-0.8c0-0.1,0-0.2-0.1-0.2c-0.1-0.4-0.1-0.7-0.2-1.1c0,0,0,0,0-0.1 c0-0.2-0.1-0.4-0.1-0.6s0-0.3-0.1-0.5V30c-0.1-0.8-0.1-1.5-0.2-2.3l0,0c0-0.8,0-1.5,0.1-2.3v-0.1c0-0.4,0.1-0.7,0.1-1 c0,0,0,0,0-0.1c0-0.3,0.1-0.7,0.1-1c0-0.1,0-0.3,0.1-0.4c0-0.2,0.1-0.4,0.1-0.5c0.1-0.7,0.3-1.3,0.5-2l0,0c1-3.5,2.9-6.8,5.4-9.5 c0,0,0,0,0-0.1c0.1-0.2,0.3-0.3,0.4-0.5c0.1-0.1,0.2-0.2,0.4-0.4c0.1-0.1,0.3-0.3,0.4-0.4c0.2-0.2,0.4-0.4,0.7-0.6 c0.1-0.1,0.2-0.1,0.2-0.2c0.3-0.2,0.6-0.5,0.8-0.7c0.3-0.2,0.6-0.4,0.9-0.6c0.1-0.1,0.2-0.1,0.3-0.2c0.3-0.2,0.5-0.3,0.8-0.5 c0.2-0.1,0.3-0.2,0.5-0.3c0.1-0.1,0.3-0.2,0.5-0.3c0.2-0.1,0.4-0.2,0.6-0.3c0,0,0,0,0.1,0c3.3-1.8,6.9-2.7,10.6-2.9l0,0 c0.7,0,1.4,0,2,0c0.2,0,0.4,0,0.6,0c0.1,0,0.3,0,0.4,0c0.3,0,0.7,0.1,1,0.1c0,0,0,0,0.1,0c0.3,0,0.7,0.1,1,0.2h0.1 c0.7,0.1,1.5,0.3,2.2,0.5l0,0c0.7,0.2,1.5,0.4,2.2,0.7c0,0,0,0,0.1,0c0.1,0.1,0.3,0.1,0.4,0.2c0.2,0.1,0.4,0.2,0.6,0.2 c0,0,0,0,0.1,0c0.3,0.1,0.7,0.3,1,0.5c0.1,0,0.2,0.1,0.2,0.1c0.2,0.1,0.5,0.2,0.7,0.4c0.1,0.1,0.2,0.1,0.3,0.2 c0.3,0.1,0.5,0.3,0.8,0.5c0.1,0.1,0.3,0.2,0.4,0.3c0.1,0.1,0.3,0.2,0.4,0.3c0.1,0.1,0.3,0.2,0.4,0.3c0.2,0.2,0.4,0.3,0.7,0.5 c0.2,0.1,0.3,0.2,0.4,0.4c0.1,0.1,0.2,0.2,0.4,0.3c0.2,0.1,0.3,0.3,0.5,0.4c0.2,0.2,0.4,0.4,0.6,0.5c0.1,0.1,0.2,0.2,0.3,0.3 c0.2,0.2,0.3,0.3,0.5,0.5c0.1,0.1,0.2,0.2,0.2,0.2c0.2,0.2,0.5,0.5,0.7,0.8c0.1,0.1,0.1,0.1,0.2,0.2c0.2,0.3,0.5,0.6,0.7,0.8 c0.6,0.7,1.6,0.8,2.3,0.3c0.7-0.6,0.8-1.6,0.3-2.3C1380.8-1.6,1363.4-3.8,1351.4,5.6z\"></path><path fill=\"#363532\" d=\"M1391.7,15.8c-0.8,0.4-1.2,1.3-0.9,2.1c0.1,0.2,0.2,0.4,0.3,0.7v0.1l0,0c0.1,0.2,0.2,0.4,0.2,0.6l0,0 c0,0.1,0,0.1,0.1,0.2l0,0c0.1,0.2,0.1,0.4,0.2,0.7l0,0l0,0l0,0c0.1,0.5,0.3,0.9,0.4,1.4c0,0.1,0,0.1,0,0.2c0.1,0.5,0.2,0.9,0.3,1.4 c0,0.1,0,0.2,0.1,0.3c0-0.1,0-0.1,0-0.2c0,0.1,0,0.1,0,0.2l0,0c0,0.1,0,0.3,0.1,0.4l0,0c0,0.1,0,0.1,0,0.2l0,0V24 c0,0.1,0,0.1,0,0.2c0.1,0.6-0.2,1.1-0.6,1.5c-0.2,0.2-0.5,0.3-0.8,0.3c-0.9,0.1-1.7-0.5-1.8-1.4l0,0l0,0c-0.2-1.4-0.5-2.7-1-4l0,0 c0,0,0,0,0-0.1l0,0c-0.2-0.4-0.3-0.9-0.5-1.3c-0.4-0.8-1.3-1.2-2.1-0.8c-0.8,0.3-1.2,1.3-0.9,2.1c0.9,2.2,1.4,4.6,1.4,7.1 c0,0.1,0,0.1,0,0.2c0,0.2,0,0.3,0,0.5c0,0.1,0,0.2,0,0.3c0,0.2,0,0.3,0,0.5c0,0.1,0,0.2,0,0.3c0,0.1,0,0.2,0,0.3l0,0c0,0,0,0,0,0.1 c-0.1,0.4-0.3,0.7-0.6,1c-0.3,0.3-0.8,0.4-1.2,0.3c-0.9-0.1-1.5-0.9-1.4-1.8c0.3-2.6,0-5.1-1-7.4v-0.1c-0.4-0.8-1.3-1.2-2.1-0.8 c-0.8,0.4-1.2,1.3-0.9,2.1c2,4.7,0.6,10.3-3.5,13.4c-4.1,3.2-9.8,3.2-13.9,0.1c-0.7-0.5-1.7-0.4-2.3,0.3c-0.5,0.7-0.4,1.7,0.3,2.3 l0.2,0.2c2,1.4,4.3,2.4,6.8,2.7c0.9,0.1,1.5,0.9,1.4,1.8c-0.1,0.4-0.3,0.8-0.6,1.1c-0.3,0.2-0.7,0.4-1.1,0.3c0,0,0,0-0.1,0l0,0 c-0.1,0-0.2,0-0.3-0.1c-0.1,0-0.2,0-0.3,0c-0.2,0-0.3-0.1-0.5-0.1c-0.1,0-0.2,0-0.3-0.1c-0.2,0-0.3-0.1-0.5-0.1c-0.1,0-0.1,0-0.2,0 c-2.4-0.6-4.6-1.6-6.5-3.1c-0.7-0.5-1.7-0.4-2.3,0.3c-0.5,0.7-0.4,1.7,0.3,2.3c0.4,0.3,0.7,0.5,1.1,0.8l0,0c0,0,0,0,0.1,0l0,0 c1.1,0.7,2.4,1.4,3.6,1.9l0,0l0,0c0.8,0.3,1.2,1.3,0.9,2.1c-0.1,0.3-0.3,0.5-0.5,0.7c-0.4,0.3-1,0.4-1.6,0.2c-0.1,0-0.1,0-0.2-0.1 c-0.2-0.1-0.4-0.2-0.6-0.3c-0.1,0-0.2-0.1-0.3-0.1c-0.2-0.1-0.4-0.2-0.6-0.3c-0.1,0-0.2-0.1-0.3-0.1c-0.2-0.1-0.4-0.2-0.7-0.4 c-0.1,0-0.1-0.1-0.2-0.1c-0.3-0.1-0.5-0.3-0.8-0.5c0,0,0,0-0.1,0l0,0c-0.2-0.1-0.4-0.3-0.6-0.4l-0.1-0.1l0,0 c-0.1-0.1-0.2-0.1-0.3-0.2c-0.1-0.1-0.1-0.1-0.2-0.1c0,0,0,0-0.1-0.1c-0.2-0.1-0.4-0.3-0.6-0.4c-0.7-0.5-1.7-0.4-2.3,0.3 c-0.5,0.7-0.4,1.7,0.3,2.3c10,7.5,23.8,7.4,33.7-0.3c9.9-7.7,13.3-21.1,8.4-32.6C1393.5,15.8,1392.6,15.4,1391.7,15.8z M1358.5,49.8c-0.1,0-0.2-0.1-0.2-0.1S1358.4,49.7,1358.5,49.8z M1357.6,49.4c-0.1,0-0.1-0.1-0.2-0.1 C1357.5,49.3,1357.5,49.3,1357.6,49.4z M1356.7,48.9L1356.7,48.9C1356.6,48.8,1356.6,48.9,1356.7,48.9z M1359.1,50 C1359.1,50,1359.2,50,1359.1,50L1359.1,50C1359.2,50.1,1359.2,50.1,1359.1,50z\"></path><path fill=\"#363532\" d=\"M1353.7,46.9L1353.7,46.9c0.2,0.2,0.4,0.3,0.6,0.4C1354.1,47.2,1353.9,47.1,1353.7,46.9z\"></path><path fill=\"#363532\" d=\"M1390.9,17.9c0.1,0.2,0.2,0.4,0.3,0.6C1391.1,18.3,1391,18.1,1390.9,17.9L1390.9,17.9z\"></path></g><g id=\"notebook1\"><polygon opacity=\"0.8\" fill=\"#37AA3C\" points=\"1160.6,-290.7 1279.8,-306.6 1284.6,-140.8 1168.3,-134.5 \"></polygon><rect x=\"1168.2\" y=\"-290.4\" transform=\"matrix(-0.9985 5.437579e-02 -5.437579e-02 -0.9985 2439.2173 -497.3545)\" fill=\"#F5F7F6\" width=\"116.4\" height=\"149.9\"></rect><g><rect x=\"1163.8\" y=\"-303.4\" transform=\"matrix(-0.9985 5.437579e-02 -5.437579e-02 -0.9985 2425.9507 -661.2976)\" fill=\"#7A7B7C\" width=\"116.4\" height=\"11.6\"></rect><polygon fill=\"#2F4250\" points=\"1163.5,-300.3 1164.2,-288.7 1164.3,-285.8 1280.6,-292.1 1280.4,-295 1279.8,-306.6 \"></polygon></g><path fill=\"#CAE5FC\" d=\"M1171.7-149.9l116.2-6.3l0.1,1.5l-116.2,6.3L1171.7-149.9z M1171.1-160l116.2-6.3l-0.1-1.5l-116.2,6.3 L1171.1-160z M1170.5-171.6l116.2-6.3l-0.1-1.5l-116.2,6.3L1170.5-171.6z M1169.9-183.2l116.2-6.3l-0.1-1.5l-116.2,6.3 L1169.9-183.2z M1169.2-194.9l116.2-6.3l-0.1-1.5l-116.2,6.3L1169.2-194.9z M1168.6-206.5l116.2-6.3l-0.1-1.5l-116.2,6.3 L1168.6-206.5z M1168-218.1l116.2-6.3l-0.1-1.5l-116.2,6.3L1168-218.1z M1167.3-229.7l116.2-6.3l-0.1-1.5l-116.2,6.3L1167.3-229.7z M1166.7-241.4l116.2-6.3l-0.1-1.5l-116.2,6.3L1166.7-241.4z M1166.1-253l116.2-6.3l-0.1-1.5l-116.2,6.3L1166.1-253z M1165.4-264.6 l116.2-6.3l-0.1-1.5l-116.2,6.3L1165.4-264.6z M1164.8-276.2l116.2-6.3l-0.1-1.5l-116.2,6.3L1164.8-276.2z\"></path><polygon fill=\"#E74C3C\" points=\"1171.5,-289.3 1173,-289.5 1180.7,-138.5 1179.3,-138.3 \"></polygon><path fill=\"none\" d=\"M1164.2-288.6l116.2-6.3l0.2,2.9l-116.2,6.3L1164.2-288.6z\"></path><g><path fill=\"#53C1DE\" d=\"M1274.8-283.5c-0.2-0.1-0.5-0.1-0.7-0.1c0-0.2,0.1-0.3,0.1-0.5c0.3-2.5-0.2-4.4-1.4-4.9 c-1.1-0.5-2.8,0.3-4.5,2c-0.2,0.2-0.3,0.3-0.5,0.5c-0.1-0.1-0.2-0.2-0.4-0.3c-2-1.5-4-2-5-1.3c-1,0.7-1.2,2.6-0.5,4.9 c0.1,0.2,0.2,0.5,0.2,0.7c-0.2,0.1-0.5,0.2-0.8,0.3c-2.1,0.9-3.4,2.3-3.3,3.5c0.1,1.3,1.7,2.4,4.1,3c0.2,0.1,0.4,0.1,0.6,0.1 c-0.1,0.2-0.1,0.5-0.1,0.7c-0.2,2.3,0.3,4.1,1.4,4.6c1.2,0.5,3-0.3,4.6-2.1c0.2-0.2,0.2-0.2,0.4-0.4c0.2,0.2,0.4,0.3,0.6,0.5 c1.9,1.4,3.7,1.8,4.7,1.1c1.1-0.8,1.3-2.7,0.5-5c-0.1-0.2-0.1-0.4-0.2-0.5c0.2-0.1,0.2-0.1,0.4-0.2c2.3-1,3.7-2.4,3.6-3.7 C1278.6-281.9,1277.1-282.9,1274.8-283.5L1274.8-283.5z\"></path><path fill=\"#FFFFFF\" d=\"M1274.8-277.7c-0.1,0.1-0.2,0.1-0.3,0.2c-0.3-0.8-0.8-1.6-1.3-2.5c0.4-1,0.6-1.8,0.8-2.6 c0.2,0.1,0.4,0.1,0.6,0.1c2,0.5,3.2,1.3,3.3,2.1C1277.9-279.7,1276.7-278.6,1274.8-277.7L1274.8-277.7z M1274.1-275.9 c0.3,1,0.4,2,0.3,2.7c-0.1,0.6-0.3,1.1-0.6,1.4c-0.6,0.4-2.1,0.1-3.7-1.1c-0.2-0.2-0.4-0.3-0.6-0.5c0.5-0.7,1.1-1.5,1.5-2.4 c1-0.2,1.9-0.4,2.8-0.7C1274-276.3,1274.1-276.1,1274.1-275.9L1274.1-275.9z M1265.8-271.2c-0.6,0.3-1.1,0.4-1.4,0.2 c-0.7-0.3-1.1-1.7-0.9-3.7c0-0.2,0.1-0.5,0.1-0.7c0.9,0.1,1.8,0.2,2.9,0.1c0.7,0.8,1.3,1.5,2,2c-0.2,0.2-0.2,0.2-0.4,0.4 C1267.3-272.1,1266.5-271.5,1265.8-271.2L1265.8-271.2z M1262.4-276.6c-1-0.3-1.9-0.6-2.5-1s-0.8-0.8-0.9-1.2 c-0.1-0.8,1-1.8,2.8-2.6c0.2-0.1,0.5-0.2,0.7-0.3c0.3,0.8,0.8,1.6,1.3,2.5c-0.4,1-0.6,1.8-0.8,2.7 C1262.7-276.5,1262.5-276.6,1262.4-276.6z M1262.7-283.5c-0.5-2-0.4-3.5,0.2-3.9c0.6-0.5,2.2,0,4,1.2c0.1,0.1,0.2,0.2,0.3,0.2 c-0.5,0.7-1.1,1.5-1.6,2.4c-0.9,0.2-1.9,0.4-2.8,0.6C1262.9-283.1,1262.8-283.2,1262.7-283.5L1262.7-283.5z M1271.9-282.1 c-0.2-0.3-0.5-0.6-0.7-1c0.6,0.1,1.3,0,1.9,0.2c-0.1,0.6-0.3,1.2-0.5,1.8C1272.3-281.4,1272.1-281.7,1271.9-282.1L1271.9-282.1z M1267.9-285.3c0.4,0.4,0.9,0.8,1.3,1.4c-0.8,0-1.7,0.1-2.5,0.2C1267.1-284.3,1267.5-284.8,1267.9-285.3L1267.9-285.3z M1264.5-281.4c-0.1,0.4-0.4,0.7-0.5,1.1c-0.3-0.6-0.6-1.2-0.9-1.7c0.5-0.2,1.2-0.4,1.8-0.5 C1264.9-282.1,1264.7-281.8,1264.5-281.4z M1265.7-276.2c-0.7,0-1.3,0-1.9-0.1c0.1-0.6,0.3-1.3,0.5-1.9c0.2,0.3,0.4,0.7,0.7,1 C1265.1-276.9,1265.4-276.5,1265.7-276.2z M1269-274c-0.5-0.4-0.9-0.8-1.4-1.4c0.4,0,0.8,0,1.2-0.1c0.4,0,0.9-0.1,1.3-0.1 C1269.6-275,1269.4-274.4,1269-274z M1272.8-279.1c0.3,0.6,0.6,1.2,0.9,1.7c-0.5,0.2-1.3,0.4-1.9,0.5c0.2-0.4,0.4-0.7,0.5-1.1 C1272.4-278.2,1272.5-278.6,1272.8-279.1L1272.8-279.1z M1271.4-278.2c-0.3,0.6-0.5,1.1-0.8,1.7c-0.6,0.1-1.3,0.2-1.9,0.2 c-0.6,0-1.3,0.1-1.9,0.1c-0.4-0.5-0.8-1-1.2-1.5c-0.3-0.5-0.7-1-1-1.6c0.2-0.6,0.4-1.2,0.7-1.8l0,0c0.3-0.6,0.5-1.1,0.9-1.7 c0.6-0.1,1.3-0.2,1.9-0.2c0.6,0,1.3-0.1,1.9-0.1c0.4,0.5,0.7,1,1.2,1.5c0.3,0.5,0.7,1,1,1.6C1272-279.4,1271.7-278.9,1271.4-278.2 L1271.4-278.2z M1272.4-288.3c0.7,0.4,1.2,1.9,0.9,4.1c0,0.2-0.1,0.3-0.1,0.4c-0.9-0.1-1.8-0.2-2.8-0.1c-0.7-0.8-1.3-1.5-2-2 c0.2-0.2,0.3-0.3,0.5-0.5C1270.2-287.9,1271.6-288.6,1272.4-288.3L1272.4-288.3z\"></path><path fill=\"#53C1DE\" d=\"M1268.2-281.5c1-0.1,1.9,0.6,2,1.7s-0.6,1.9-1.7,2c-1,0.1-1.9-0.6-2-1.7 C1266.4-280.5,1267.2-281.4,1268.2-281.5\"></path></g><path fill=\"#4C4C4C\" d=\"M1182.3-273.2c0.5,0,0.4,0.8,0.6,0.9c0.3,0.1,0.3-0.5,0.6-0.5c0.5,0,1.9-0.4,1.4,0.6 c-0.3,0.5-0.7-0.2-1,0.1c-0.5,0.5-0.5,1.1-0.6,1.8c-0.1,0.6,0.2,4-0.8,2.1c-0.2-0.5-0.1-1.4-0.1-1.9 C1182.4-270.6,1181.6-273.1,1182.3-273.2C1182.6-273.2,1182.1-273.1,1182.3-273.2z M1187-272.8c1.7-0.1,1.3,2.9-0.3,3 c0.1,0.6,0.6,1.4,1.3,1.3c0.9-0.1,0.6-1.1,1.1-1.4c1.3-0.6,0.3,1.8-0.7,2.1C1185.8-267,1184.6-272,1187-272.8z M1186.6-271 C1187.7-269.8,1187.1-273.6,1186.6-271C1186.6-271,1186.7-271.6,1186.6-271z M1192.6-272.8c1.4-0.1,1.2,0.6,1.4,1.7 c0.1,0.6,0.6,2.2,0.3,2.5c-0.6,0.5-1-0.6-1-1.1c-0.8,1-1.9,2.9-2.9,0.7C1189.8-270.4,1191-272.6,1192.6-272.8z M1191.2-269.5 c0.4,2.1,2.2-1.9,1.9-2.4C1192.3-273,1191.1-270,1191.2-269.5z M1197-273.9c0.3,0,0.8,1.9,0.5,2.3c-0.8,0.9-0.7-1.6-1.6-0.9 c-0.5,0.4-0.2,2.4,0.1,2.9c1.1,1.4,1.3-0.2,2.4-0.3c1.1-0.1,0.1,1.1-0.4,1.3c-1.1,0.6-2,0.3-2.7-0.8 C1194.3-271.2,1194.9-273.8,1197-273.9C1197.2-273.9,1196.8-273.9,1197-273.9z M1200.1-280.9c0.8,0,0.7,5.8,0.7,6.5 c0.1-0.1,0.9-0.2,0.9-0.2c0.8,1.5-0.1-0.2-0.4,0.9c-0.2,0.6-0.3,0.8-0.2,1.7c0.1,0.7,0.5,2.4,0.3,3.1c-0.6,1.5-0.8-0.2-0.9-0.9 c-0.1-0.8,0.1-1.8-0.2-2.6c0-0.1,0-0.7-0.1-0.8c-0.3-0.4-0.8,0.4-1.1-0.5c-0.2-0.6,0.9-0.3,0.9-0.5c0.1-0.6-0.1-1.5-0.1-2.1 C1199.9-277.1,1199.2-280.7,1200.1-280.9C1200.4-280.9,1199.9-280.8,1200.1-280.9z M1208.7-274.6c0.3,0,0.8,1.9,0.5,2.3 c-0.8,0.9-0.7-1.6-1.6-0.9c-0.5,0.4-0.2,2.4,0.1,2.9c1.1,1.4,1.3-0.2,2.4-0.3c1.1-0.1,0.1,1.1-0.4,1.3c-1.1,0.6-2,0.3-2.7-0.8 C1206-271.9,1206.6-274.5,1208.7-274.6C1208.9-274.7,1208.5-274.6,1208.7-274.6z M1212.6-274.2c1.8,0.5,2.2,5.4-0.1,5 C1210.5-269.5,1210.8-273.7,1212.6-274.2z M1212-271.5c0,1.5,1.1,2.1,1.2,0.3C1213.3-273.1,1211.9-273.9,1212-271.5z M1217.1-274.6 c1.8,0,1.7,5.2,0.9,5.1c-1,0,0.3-5.2-1.3-4c-0.9,0.7-0.1,2.4-0.4,3.3c-0.4,1.4-0.7,0.6-0.9-0.6c-0.1-0.7-0.4-1.6-0.4-2.4 c0-0.5,0.5-2.2,0.8-0.6C1216-274.1,1216.6-274.6,1217.1-274.6C1218-274.6,1216.6-274.6,1217.1-274.6z M1221.3-282 c1.3-0.1,1.9,2.6,0.8,2c-0.8-0.4-0.9-2.4-1.3,0.3c-0.1,0.9-0.2,3.5,0.3,4.4c0.1,0.2,0.5,0.6,0.5,0.6c0.1,0.1,0.6,0.1,0.7,0.4 c0.2,0.4-0.9,0.4-1,0.4c0.1,0.7,1,5.2-0.2,4.2c-0.6-0.4-0.5-3.4-0.7-4.1c-0.7,0.3-1.4,0.2-1.3-0.6c0.1-0.3,0.9,0,1-0.2 c0.1-0.2,0-0.4,0-0.7C1220.7-276.7,1218.5-281.9,1221.3-282C1222-282.1,1220.2-282,1221.3-282z M1224.3-275.1 c1.7-0.1,1.3,2.9-0.3,3c0.1,0.6,0.6,1.4,1.3,1.3c0.9-0.1,0.6-1.1,1.1-1.4c1.3-0.6,0.3,1.8-0.7,2.1 C1223.1-269.3,1221.9-274.3,1224.3-275.1z M1223.9-273.3C1225-272,1224.4-275.9,1223.9-273.3C1223.9-273.3,1224-273.9,1223.9-273.3 z M1227.6-275.9c0.4,0.1,0.6,0.4,0.6,0.9c0.4-0.5,1.1-0.9,1.7-0.6c1,0.5,0,0.6-0.2,0.8c-0.1,0.1-0.6-0.1-0.8,0.3 c-0.4,0.6-0.3,1.6-0.3,2.2c0,1.3-0.3,2.8-0.8,0.9C1227.7-272.1,1227.2-275.9,1227.6-275.9C1227.9-275.9,1227.4-275.9,1227.6-275.9z M1232.4-275.6c1.7-0.1,1.3,2.9-0.3,3c0.1,0.6,0.6,1.4,1.3,1.3c0.9-0.1,0.6-1.1,1.1-1.4c1.3-0.6,0.3,1.8-0.7,2.1 C1231.1-269.8,1229.9-274.8,1232.4-275.6z M1231.9-273.7C1233-272.5,1232.4-276.4,1231.9-273.7 C1231.9-273.7,1232-274.3,1231.9-273.7z M1238-275.8c1.8,0,1.7,5.2,0.9,5.1c-1,0,0.3-5.2-1.3-4c-0.9,0.7-0.1,2.4-0.4,3.3 c-0.4,1.4-0.7,0.6-0.9-0.6c-0.1-0.7-0.4-1.6-0.4-2.4c0-0.5,0.5-2.2,0.8-0.6C1237-275.4,1237.5-275.9,1238-275.8 C1238.9-275.8,1237.5-275.9,1238-275.8z M1242.3-276.7c0.3,0,0.8,1.9,0.5,2.3c-0.8,0.9-0.7-1.6-1.6-0.9c-0.5,0.4-0.2,2.4,0.1,2.9 c1.1,1.4,1.3-0.2,2.4-0.3c1.1-0.1,0.1,1.1-0.4,1.3c-1.1,0.6-2,0.3-2.7-0.8C1239.6-273.9,1240.2-276.6,1242.3-276.7 C1242.5-276.7,1242.1-276.7,1242.3-276.7z M1245.9-276.4c1.7-0.1,1.3,2.9-0.3,3c0.1,0.6,0.6,1.4,1.3,1.3c0.9-0.1,0.6-1.1,1.1-1.4 c1.3-0.6,0.3,1.8-0.7,2.1C1244.7-270.6,1243.5-275.6,1245.9-276.4z M1245.5-274.6C1246.6-273.3,1246-277.2,1245.5-274.6 C1245.5-274.6,1245.6-275.2,1245.5-274.6z\"></path><path fill=\"#4C4C4C\" d=\"M1184.6-260.6c1.8,0,1.7,5.2,0.9,5.1c-1,0,0.3-5.2-1.3-4c-0.9,0.7-0.1,2.4-0.4,3.3 c-0.4,1.4-0.7,0.6-0.9-0.6c-0.1-0.7-0.4-1.6-0.4-2.4c0-0.5,0.5-2.2,0.8-0.6C1183.6-260.1,1184.1-260.6,1184.6-260.6 C1185.6-260.6,1184.2-260.6,1184.6-260.6z M1188.4-260.7c1.8,0.5,2.2,5.4-0.1,5C1186.2-256,1186.6-260.2,1188.4-260.7z M1187.8-258 c0,1.5,1.1,2.1,1.2,0.3C1189.1-259.7,1187.6-260.4,1187.8-258z M1191.2-268.3c0.8,0,0.7,5.8,0.7,6.5c0.1-0.1,0.9-0.2,0.9-0.2 c0.8,1.5-0.1-0.2-0.4,0.9c-0.2,0.6-0.3,0.8-0.2,1.7c0.1,0.7,0.5,2.4,0.3,3.1c-0.6,1.5-0.8-0.2-0.9-0.9c-0.1-0.8,0.1-1.8-0.2-2.6 c0-0.1,0-0.7-0.1-0.8c-0.3-0.4-0.8,0.4-1.1-0.5c-0.2-0.6,0.9-0.3,0.9-0.5c0.1-0.6-0.1-1.5-0.1-2.1 C1191-264.6,1190.3-268.2,1191.2-268.3C1191.5-268.3,1190.9-268.3,1191.2-268.3z M1195.3-261.3c1.7-0.1,1.3,2.9-0.3,3 c0.1,0.6,0.6,1.4,1.3,1.3c0.9-0.1,0.6-1.1,1.1-1.4c1.3-0.6,0.3,1.8-0.7,2.1C1194.1-255.5,1192.9-260.5,1195.3-261.3z M1194.9-259.5 C1196-258.3,1195.4-262.1,1194.9-259.5C1194.9-259.5,1195-260.1,1194.9-259.5z M1200.3-261.9c1.1-0.1,0.8,0.5,0.5,0.9 c-0.1,0.1-0.5-0.2-0.6-0.1c-0.5,0.5-1.3,1.1-0.5,1.8c0.5,0.4,1.2-0.5,1.8,0c0.9,0.8-0.8,3.1-1.8,3c-0.3,0-1.1-0.3-1-0.7 c0.1-0.6,0.8-0.1,0.8-0.2c0.1-0.1,1.9-0.6,1.3-1.3c-0.5-0.6-1.9,0.6-2.2-1.2C1198.4-260.8,1199.4-261.7,1200.3-261.9z\"></path><path fill=\"#15AED1\" d=\"M1207.3-249.9c0.8-0.1,0.9,5.8,1,6.5c0.1-0.1,0.9-0.2,0.9-0.2c0.9,1.4-0.1-0.2-0.4,0.9 c-0.2,0.6-0.3,0.8-0.2,1.7c0.1,0.7,0.6,2.3,0.4,3.1c-0.5,1.5-0.8-0.2-1-0.8c-0.2-0.8,0-1.8-0.3-2.6c0-0.1,0-0.7-0.1-0.8 c-0.3-0.4-0.8,0.4-1.1-0.4c-0.2-0.5,0.9-0.3,0.9-0.6c0.1-0.6-0.1-1.5-0.2-2.1C1207.2-246.2,1206.4-249.7,1207.3-249.9 C1207.6-249.9,1207-249.9,1207.3-249.9z M1210.1-251.5c0.7-0.1,1.1,8.3,1.2,8.8c1.9-2.4,2.7,2.4,2.9,3.4c0.1,0.8,0.5,2.5-0.7,1.4 c-0.2-0.2-0.2-2-0.3-2.3c-0.2-0.9-0.9-3.9-1.5-1.2c-0.2,0.8,0.7,2.9,0.3,3.4c-1.1,1.4-1.3-4-1.4-4.9 C1210.4-244,1209.3-251.5,1210.1-251.5C1210.3-251.6,1209.8-251.5,1210.1-251.5z M1215.2-245.5c0.9-0.1,0.1,0.9,0.2,0.9 C1215.3-244.4,1214-245.4,1215.2-245.5C1215.4-245.5,1215-245.5,1215.2-245.5z M1215.4-243.6c0.7,0,0.7,5.6,0.2,5.5 C1214.8-238.3,1214.7-243.6,1215.4-243.6C1215.8-243.6,1215.2-243.6,1215.4-243.6z M1218.6-244c1.1-0.1,0.8,0.5,0.6,0.9 c-0.1,0.1-0.5-0.2-0.6-0.1c-0.5,0.5-1.3,1.2-0.5,1.8c0.5,0.3,1.2-0.5,1.8-0.1c0.9,0.8-0.7,3.1-1.7,3c-0.3,0-1.1-0.2-1-0.7 c0.1-0.6,0.8-0.2,0.8-0.2c0.1-0.1,1.9-0.7,1.2-1.3c-0.5-0.6-1.9,0.7-2.2-1.1C1216.7-242.8,1217.6-243.8,1218.6-244z M1224.7-246.4 c0.9-0.1,0.1,0.9,0.2,0.9C1224.8-245.3,1223.5-246.3,1224.7-246.4C1224.9-246.4,1224.5-246.4,1224.7-246.4z M1224.9-244.5 c0.7,0,0.7,5.6,0.2,5.5C1224.3-239.2,1224.2-244.5,1224.9-244.5C1225.3-244.5,1224.7-244.5,1224.9-244.5z M1228.1-244.9 c1.1-0.1,0.8,0.5,0.6,0.9c-0.1,0.1-0.5-0.2-0.6-0.1c-0.5,0.5-1.3,1.2-0.5,1.8c0.5,0.3,1.2-0.5,1.8-0.1c0.9,0.8-0.7,3.1-1.7,3 c-0.3,0-1.1-0.2-1-0.7c0.1-0.6,0.8-0.2,0.8-0.2c0.1-0.1,1.9-0.7,1.2-1.3c-0.5-0.6-1.9,0.7-2.2-1.1 C1226.2-243.7,1227.1-244.7,1228.1-244.9z M1211.5-235.5c0.8-0.1,2.6,9.6,2.9,10.9c0,0.2,0.8,2.4,0,2.3c-0.7-0.1-0.6-1.6-0.8-2.1 c-0.6-1.3-0.1-0.7-1.3-1c-3.3-0.6-1.2,2-2.8,3.4c-1,0.9-0.5-0.7-0.4-1.3C1209.4-225,1210.1-235.3,1211.5-235.5 C1211.6-235.5,1211.3-235.4,1211.5-235.5z M1210.5-226.2c2.5,0.3,2.7,0.1,2.2-2c-0.4-1.6-0.8-3.3-1.2-4.9 C1210.6-231.2,1210.7-228.3,1210.5-226.2z M1220.7-236.5c0.9,0.2,0.9,6.8,1.1,8.1c0.1,1,1.1,4.3,0.4,5.1c-1.2,1.4-2.3-3.6-2.9-3.8 c-0.3,1.5-1.2,6.5-2.3,2.7c-0.8-2.8-1.5-5.7-2-8.5c-0.1-0.5-0.6-2.1-0.2-2.6c0.7-0.9,0.9,1.3,0.9,1.6c0.5,3.1,1.2,6.1,2.1,9.1 c0.4-0.8,0.6-4.4,1.2-4.6c0.6-0.2,1.9,3.8,2.4,4.6C1221.4-226.1,1219.2-236.2,1220.7-236.5C1220.9-236.5,1220.3-236.5,1220.7-236.5 z M1222.6-236.9c0.5,0,0.3,0.5,0.5,0.6c0.3,0.2,1.3-0.3,1.7-0.3c2.9-0.1,0.3,0.6-0.7,1c-1,0.4-0.8,0.1-0.9,1.1 c-0.1,1,0.4,3.4,0.8,4.1c1,2.2-0.4,0.5,0.8,0.9c0.5,0.2,1-0.4,1.4,0.1c0.9,1-1.5,0.5-1.8,0.8c-0.6,0.5,0.1,4.2,0.7,4.4 c0.7,0.3,1.8-0.6,2.5-0.4c1.6,0.5-2,1.4-2.6,1.3c-0.9-0.2-1-0.3-1.3-1.6c-0.2-0.9-0.2-1.8-0.3-2.6 C1223.3-229.6,1221-235.6,1222.6-236.9z M1230.2-237.2c0.8-0.1,2.6,0.9,2.3,2c-0.4,1.3-1.2-0.8-1.5-1c-1.9-0.9-1.6,1.9-1.3,3 c0.8,2.4,3.3,4.1,3.8,6.6c0.5,2.4-1.7,4-3.6,2.2c-0.3-0.3-1.8-2.4-0.5-2.4c0.8,0,0.2,0.7,0.4,1c0.9,1.1,2.6,2.3,2.9,0 C1233-227.8,1224.8-236.4,1230.2-237.2z M1235.1-236.6c3.6-0.3,6.1,11.6,1.7,12.3C1232.8-223.7,1233-236.4,1235.1-236.6 C1236.4-236.7,1234.7-236.6,1235.1-236.6z M1235.3-235.8c-0.3,1.2-1.6,12.1,1.9,10.5C1239.7-226.4,1237.7-236,1235.3-235.8 C1234.7-233.6,1235.4-235.8,1235.3-235.8z M1239.7-238.5c0.3,0,2.1,3.3,2.4,3.8c0.3,0.7,0.5,1.5,0.8,2.1c0.1-1.3,0.1-4.5,1.1-5.5 c1.3-1.3,1.5,2,1.6,3c0.4,2.7,0.3,5.5,1.1,8.1c0.1,0.4,1,2.1-0.2,1.7c-0.9-0.3-1.1-3.9-1.2-4.6c-0.3-1.9,0.1-5.3-0.9-6.9 c-0.3,1-0.4,6.5-1.3,6.5c-1-0.1-1.5-4.1-2.4-4.9c0.2,1.5,0.4,3,0.6,4.5c0.1,0.7,1,5.3,0.4,5.7c-1.1,0.7-1.1-4.6-1.2-5.1 C1240.3-231.7,1238.9-238.3,1239.7-238.5C1239.9-238.5,1239.3-238.4,1239.7-238.5z M1247.5-239.3c0.5,0,0.3,0.6,0.5,0.6 c0.3,0.2,1.3-0.3,1.7-0.3c2.9-0.1,0.3,0.6-0.7,1c-1,0.4-0.8,0.1-0.9,1.1c-0.1,1,0.4,3.4,0.8,4.1c1,2.2-0.4,0.5,0.8,0.9 c0.5,0.2,1-0.4,1.4,0.1c0.9,1-1.5,0.5-1.8,0.8c-0.6,0.5,0.1,4.2,0.7,4.4c0.7,0.3,1.8-0.6,2.5-0.4c1.6,0.5-2,1.4-2.6,1.3 c-0.9-0.2-1-0.3-1.3-1.6c-0.2-0.9-0.2-1.8-0.3-2.6C1248.2-232,1245.9-237.9,1247.5-239.3z M1253.4-238.9c0.5,0,2,9.5,1.3,10.1 c-1,0.9-1.1-4.2-1.1-4.7C1253.5-234.5,1252.8-238.7,1253.4-238.9C1253.8-238.9,1253.1-238.8,1253.4-238.9z M1254.6-227.2 c0.9-0.1-0.4,1.4-0.2,0.6C1254.4-226.8,1253.7-227.1,1254.6-227.2C1254.8-227.2,1254.3-227.2,1254.6-227.2z\"></path><path d=\"M1189.4-203.1c0.9,0,0.6,5.7,0.6,6.2c0,1.1,0.1,3.1-0.7,3.9c-0.8,0.7-2.4,0.4-2.9-0.5c-1.1-1.6,1.6,0.5,2.2,0.2 c1.3-0.6,0.7-4.9,0.7-6.1c-1.6,0.8-2.9-0.9-2.3-2.5C1187.4-202.9,1188.5-203,1189.4-203.1C1189.7-203.1,1189.3-203.1,1189.4-203.1z M1188-202.2c-0.8,0.7-0.5,3.1,0.8,2.3C1189.7-200.4,1189-202.2,1188-202.2z M1191.6-203.1c1.4,0,1,2.4-0.3,2.5 c0.2,2.5,1.7,0.1,2,0c1.2-0.3,0.1,1.5-0.6,1.7C1190.4-198.4,1189.6-202.5,1191.6-203.1z M1191.2-201.6c0,0,0.2,0.3,0.3,0.3 c0.4,0,0.4-1,0.2-1C1191.3-202.2,1191.3-202,1191.2-201.6z M1195.2-209.2c0.6,0,0.4,4.8,0.4,5.4c0,0,0.7-0.1,0.7-0.1 c0.4,1.5,0-0.5-0.4,0.7c-0.1,0.4-0.2,0.6-0.2,1.3c0,0.7,0.2,4.7-0.6,2.1c-0.2-0.6,0-1.4-0.1-2c0-0.3,0.1-0.8,0-1 c-0.1-0.1-0.6-0.1-0.6-0.1c-0.4-0.1-0.4-0.3-0.2-0.5c0.1-0.3,0.4-0.3,0.7-0.2c0.1-0.3-0.1-0.7,0-1.1 C1195-205.4,1194.4-209.1,1195.2-209.2C1195.4-209.2,1194.9-209.2,1195.2-209.2z M1201.1-209.4c0.6,0,0.4,4.8,0.4,5.4 c0,0,0.7-0.1,0.7-0.1c0.4,1.5,0-0.5-0.4,0.7c-0.1,0.4-0.2,0.6-0.2,1.3c0,0.7,0.2,4.7-0.6,2.1c-0.2-0.6,0-1.4-0.1-2 c0-0.3,0.1-0.8,0-1c-0.1-0.1-0.6-0.1-0.6-0.1c-0.4-0.1-0.4-0.3-0.2-0.5c0.1-0.3,0.4-0.3,0.7-0.2c0.1-0.3-0.1-0.7,0-1.1 C1201-205.6,1200.3-209.3,1201.1-209.4C1201.4-209.4,1200.9-209.3,1201.1-209.4z M1203.5-210.5c0.6,0,0.5,6.9,0.5,7.4 c1.9-2.1,3,4.1,2,4.6c-0.3-0.2-1-6.9-1.8-3.1c-0.1,0.7,0.4,1.8,0.1,2.4c-0.8,1.6-0.8-1.5-0.8-1.8 C1203.4-202.1,1202.9-210.5,1203.5-210.5C1203.6-210.6,1203.2-210.5,1203.5-210.5z M1207.8-203.5c1.4,0,1,2.4-0.3,2.5 c0.2,2.5,1.7,0.1,2,0c1.2-0.3,0.1,1.5-0.6,1.7C1206.6-198.8,1205.8-202.9,1207.8-203.5z M1207.4-202.1c0,0,0.2,0.3,0.3,0.3 c0.4,0,0.4-1,0.2-1C1207.5-202.7,1207.5-202.4,1207.4-202.1z M1215.4-209.7c0.7,0,1,1,1.2,1.5c0,1.1-1-0.8-1.3-0.7 c-0.7,0.2-0.5,2.5-0.4,2.9c0,0.7,0,1.7,0.2,2.4c0,0,1.9,0.6,0.1,0.7c0,0.5,0.6,4.4-0.3,3.5c-0.5-0.5-0.4-2.7-0.5-3.4 c-1,0.3-0.9-0.2-0.8-0.6c0,0.4,0.7-0.5,0.7-0.5C1214.8-205.1,1213-209.6,1215.4-209.7C1215.9-209.7,1214.5-209.6,1215.4-209.7z M1216.7-204.3c0.3,0.1,0.5,0.4,0.5,0.8c0.2,0,0.4-0.1,0.5-0.4c0.2,0,1.4-0.3,1.3,0.3c-0.1,0.9-0.7-0.1-0.9,0.2 c-0.3,0.5-0.5,0.8-0.6,1.5c-0.1,0.7,0.2,3-0.7,1.8C1216.4-200.7,1216.6-204.3,1216.7-204.3C1216.9-204.3,1216.5-204.3,1216.7-204.3 z M1220.6-203.9c1.4,0,1,2.4-0.3,2.5c0.2,2.5,1.7,0.1,2,0c1.2-0.3,0.1,1.5-0.6,1.7C1219.4-199.2,1218.6-203.3,1220.6-203.9z M1220.2-202.4c0,0,0.2,0.3,0.3,0.3c0.4,0,0.4-1,0.2-1C1220.3-203,1220.3-202.8,1220.2-202.4z M1224.3-204c1.4,0,1,2.4-0.3,2.5 c0.2,2.5,1.7,0.1,2,0c1.2-0.3,0.1,1.5-0.6,1.7C1223.2-199.3,1222.3-203.4,1224.3-204z M1224-202.5c0,0,0.2,0.3,0.3,0.3 c0.4,0,0.4-1,0.2-1C1224.1-203.1,1224-202.9,1224-202.5z M1230.9-210.2c0.6,0,0.4,4.8,0.4,5.4c0,0,0.7-0.1,0.7-0.1 c0.4,1.5,0-0.5-0.4,0.7c-0.1,0.4-0.2,0.6-0.2,1.3c0,0.7,0.2,4.7-0.6,2.1c-0.2-0.6,0-1.4-0.1-2c0-0.3,0.1-0.8,0-1 c-0.1-0.1-0.6-0.1-0.6-0.1c-0.4-0.1-0.4-0.3-0.2-0.5c0.1-0.3,0.4-0.3,0.7-0.2c0.1-0.3-0.1-0.7,0-1.1 C1230.7-206.4,1230.1-210.1,1230.9-210.2C1231.2-210.2,1230.7-210.2,1230.9-210.2z M1233.8-203.5c0.7,0,2.7,0.2,1.1,0.7 C1234.1-202.5,1232.7-203.4,1233.8-203.5C1235-203.5,1233.5-203.5,1233.8-203.5z M1238-204.6c1.7,0,0,0.8,0.1,0.7 c-0.3,0.5-1.4,0.8-0.5,1.5c0.3,0.2,0.8-0.4,1.1-0.1c0.6,0.6,0.2,1.8-0.7,2.3c-0.8,0.3-1.8,0.1-1.1-0.7c0,0.1,1.8,0.4,1.4-0.8 c-0.1-0.4-1.6,0.4-1.8-1C1236.4-203.7,1237.3-204.6,1238-204.6z M1239.8-211.6c0.6,0,0.5,6.9,0.5,7.4c1.9-2.1,3,4.1,2,4.6 c-0.3-0.2-1-6.9-1.8-3.1c-0.1,0.7,0.4,1.8,0.1,2.4c-0.8,1.6-0.8-1.5-0.8-1.8C1239.8-203.2,1239.3-211.5,1239.8-211.6 C1240-211.6,1239.6-211.6,1239.8-211.6z M1243.8-204.7c0.6,0.1,0.3,4.5-0.2,4.6C1243.5-200.1,1242.8-204.7,1243.8-204.7 C1244.1-204.7,1243.6-204.7,1243.8-204.7z M1243.7-206.3c0.6,0,0.1,0.8,0.1,0.8C1243.8-205.6,1242.8-206.3,1243.7-206.3 C1243.9-206.3,1243.5-206.3,1243.7-206.3z M1245.1-205.1c0.3,0.1,0.5,0.4,0.5,0.8c0.2,0,0.4-0.1,0.5-0.4c0.2,0,1.4-0.3,1.3,0.3 c-0.1,0.9-0.7-0.1-0.9,0.2c-0.3,0.5-0.5,0.8-0.6,1.5c-0.1,0.7,0.2,3-0.7,1.8C1244.8-201.5,1245-205.1,1245.1-205.1 C1245.3-205.1,1244.9-205.1,1245.1-205.1z M1248.8-210.7c0.6,0,0.4,4.8,0.4,5.4c-0.1,0,0.7-0.1,0.7-0.1c0.4,1.5,0-0.5-0.4,0.7 c-0.1,0.4-0.2,0.6-0.2,1.3c0,0.7,0.2,4.7-0.6,2.1c-0.2-0.6,0-1.4-0.1-2c0-0.3,0.1-0.8,0-1c-0.1-0.1-0.6-0.1-0.6-0.1 c-0.4-0.1-0.4-0.3-0.2-0.5c0.1-0.3,0.4-0.3,0.7-0.2c0.1-0.3-0.1-0.7,0-1.1C1248.6-206.9,1248-210.6,1248.8-210.7 C1249-210.7,1248.5-210.7,1248.8-210.7z M1251.3-211c0.4,0,1,7.4,0.6,8.1c-0.8,1.4-0.8-2.7-0.8-3.2 C1251.2-206.8,1250.9-210.9,1251.3-211C1251.6-211,1251.1-210.9,1251.3-211z M1251.7-201.3c0.8,0-0.4,1.5-0.4,0.3 C1251.4-201.1,1251.5-201.2,1251.7-201.3C1251.8-201.3,1251.4-201.3,1251.7-201.3z\"></path><g><path fill=\"#15AED1\" d=\"M1221.8-255.1c0,0-0.2,0-0.6,0c-0.4,0-0.9,0-1.6,0c-1.4,0-3.5,0.1-6.1,0.7c-2.6,0.6-5.6,1.7-8.6,3.9 c-2.9,2.2-5.6,5.6-6.6,10c-0.3,1.1-0.4,2.2-0.4,3.4c0,1.2,0.1,2.3,0.4,3.5c0.6,2.3,1.8,4.6,3.4,6.5c1.7,1.9,3.7,3.6,6.1,4.9 c2.4,1.3,5,2.2,7.7,2.8c5.5,1.2,11.4,1.4,17.3,1.5c5.9,0,12-0.4,17.8-1.7c2.9-0.6,5.9-1.4,8.6-2.6c1.3-0.6,2.6-1.4,3.5-2.4 c0.5-0.5,0.8-1.1,1-1.8c0.2-0.6,0.3-1.3,0.3-2c-0.1-1.4-0.5-2.8-1.1-4c-0.7-1.3-1.5-2.5-2.4-3.6c-1.9-2.2-4.1-3.9-6.5-5.4 c-2.4-1.5-4.9-2.7-7.4-3.8c-2.5-1.1-4.9-2.1-7.4-3c-4.9-1.8-9.6-3.1-14-4c-8.9-1.8-16.5-2.1-21.7-1.8c-2.6,0.2-4.7,0.5-6.1,0.9 c-1.4,0.3-2.1,0.6-2.1,0.6s0.7-0.3,2.1-0.6c1.4-0.4,3.4-0.8,6.1-1c2.6-0.2,5.9-0.3,9.6-0.1c3.7,0.2,7.8,0.6,12.3,1.5 c4.5,0.9,9.2,2.1,14.2,3.9c2.5,0.9,5,1.8,7.5,2.9c2.5,1.1,5.1,2.3,7.5,3.8c2.4,1.5,4.8,3.3,6.8,5.5c1,1.1,1.9,2.4,2.5,3.7 c0.7,1.4,1.2,2.9,1.3,4.4c0,0.8-0.1,1.6-0.3,2.4c-0.2,0.7-0.7,1.5-1.2,2.1c-1,1.2-2.4,2.1-3.8,2.7c-2.8,1.2-5.8,2-8.7,2.7 c-6,1.3-12.1,1.7-18,1.7c-3,0-5.9-0.1-8.9-0.4c-2.9-0.2-5.8-0.6-8.6-1.2c-2.8-0.7-5.5-1.6-7.9-3c-2.4-1.4-4.5-3.1-6.2-5.2 c-1.7-2-2.9-4.4-3.5-6.8c-0.3-1.2-0.4-2.4-0.4-3.6c0-1.2,0.2-2.4,0.5-3.5c1.2-4.5,4-8,7-10.1c3-2.2,6.2-3.2,8.8-3.8 c2.6-0.5,4.7-0.6,6.1-0.6c0.7,0,1.3,0,1.6,0.1C1221.6-255.1,1221.8-255.1,1221.8-255.1z\"></path></g><path fill=\"#7A7A7A\" d=\"M1184.5-187.5c0.5,0,0.3,3.8,0.1,3.8C1183.6-183.5,1183.7-187.5,1184.5-187.5 C1184.8-187.4,1184.2-187.5,1184.5-187.5z M1184.3-188.8c0.1,0.1,0.3,0.2,0.4,0.3c0,0.5-0.8,0.4-0.8,0 C1184.1-188.6,1184.2-188.7,1184.3-188.8C1184.6-188.8,1184.2-188.8,1184.3-188.8z M1186.7-192.6c0.7,0,0.5,4.1,0.5,4.7 c0.2-0.1,1.2-0.3,1.2,0.1c0,0.6-1.1,0.2-1.1,0.5c-0.1,0.3,0.1,0.8,0.1,1.2c0,0.4,0.5,2.8-0.4,2.5c-0.5-0.1-0.3-1.7-0.4-2.1 c0-0.4,0.1-1-0.1-1.4c-0.1-0.3-1,0.3-1-0.3c0-0.3,0.9-0.6,0.9-0.4c0.1-0.3-0.1-0.8,0-1.1C1186.5-189.6,1185.8-192.5,1186.7-192.6 C1187-192.6,1186.5-192.6,1186.7-192.6z M1189.5-191.3c2-0.1,0,3.5-0.4,2.1C1189.8-189.8,1188.9-191.3,1189.5-191.3 C1189.9-191.3,1189.4-191.3,1189.5-191.3z M1193-187.9c0.4-0.1,0.7,0.1,0.8,0.4c0,0.3-1.3,0.2-1.5,0.6c-0.5,1.1,0.3,0.6,0.8,0.8 c0.7,0.4,1.4-0.2,0.9,1.1c-0.2,0.5-2.6,1.9-2.6,0.5c0.2-0.3,2.5,0.2,1.9-1.1c-0.1-0.3-1.8,0.4-2-0.8 C1191.2-187.2,1192.3-187.8,1193-187.9z M1200.2-187.7c1.1-0.1,1,0.4,1.2,1.1c0.1,0.2,0.4,1.8,0.4,1.8c-0.5,0.8-1-0.2-1.1-0.6 C1198.4-182.1,1196.7-187.5,1200.2-187.7z M1198.8-185.3c0.3,1.7,1.7-1.5,1.8-1.7C1199.6-187.3,1198.8-186.3,1198.8-185.3z M1202.8-193.4c0.3,0,1,8.3,0.7,8.7c-0.8,1.2-0.9-1.8-1-2.3C1202.5-187.9,1201.8-193.4,1202.8-193.4 C1202.9-193.4,1202.4-193.4,1202.8-193.4z M1205-193.4c0.3,0,1,8.3,0.7,8.7c-0.8,1.2-0.9-1.8-1-2.3 C1204.7-188,1204-193.5,1205-193.4C1205.1-193.4,1204.7-193.4,1205-193.4z M1212.2-188.2c1.1-0.1,1,0.4,1.2,1.1 c0.1,0.2,0.4,1.8,0.4,1.8c-0.5,0.8-1-0.2-1.1-0.6C1210.4-182.5,1208.7-188,1212.2-188.2z M1210.8-185.8c0.3,1.7,1.7-1.5,1.8-1.7 C1211.6-187.8,1210.8-186.8,1210.8-185.8z M1214.3-194c0.6,0.1,0.6,3.3,0.7,3.7c0,0.3,0.1,1.5,0.3,1.8c2,1.8-1.6-1,0.6,0.2 c0.9,0.5,1.8-0.1,2,1.6c0.1,1.2-0.5,1.8-1.5,2.1c-1.2,0.4-1.2-0.1-1.5-1.6C1214.8-186.9,1213.3-194,1214.3-194 C1214.6-194,1214-194,1214.3-194z M1215.7-186.9c0,1,0.2,2.1,1.2,1.3C1218.3-186.8,1215.6-189,1215.7-186.9 C1215.8-185.8,1215.7-187.3,1215.7-186.9z M1220-188.6c1.7,0.4,1.7,4-0.2,3.6C1218-185.4,1218.5-188.2,1220-188.6z M1219.4-186.6 c-0.1,1.3,1.1,1.5,1.1,0C1220.5-188.1,1219.3-188.1,1219.4-186.6z M1224.6-188.6c0.6,0,0.6,1.8,0.6,2.3c0,0.1,0.4,0.8,0.5,0.7 c-0.5,1.1-0.5-0.2-0.9-0.1c-0.9,0.3-1.5,1.1-2.4,0c-0.3-0.3-0.6-2.1-0.4-2.5c0.9-1.4,0.3,3.2,2,2.2 C1224.7-186.5,1223.7-188.6,1224.6-188.6z M1227-194.2c0.7,0,0.5,4.1,0.5,4.7c0.2-0.1,1.2-0.3,1.2,0.1c0,0.6-1.1,0.2-1.1,0.5 c-0.1,0.3,0.1,0.8,0.1,1.2c0,0.4,0.5,2.8-0.4,2.5c-0.5-0.1-0.3-1.7-0.4-2.1c0-0.4,0.1-1-0.1-1.4c-0.1-0.3-1,0.3-1-0.3 c0-0.3,0.9-0.6,0.9-0.4c0.1-0.3-0.1-0.8,0-1.1C1226.8-191.2,1226.1-194.1,1227-194.2C1227.3-194.2,1226.8-194.1,1227-194.2z M1234.7-189.4c3.3-0.1,3.1,4.7-0.6,3.5c0.1,1,1,4.7,0.4,5.6c-1,1.4-1-2.4-1-2.8c-0.1-1.2-1-4.6-0.5-5.6 C1233.7-189.7,1233.7-188.7,1234.7-189.4z M1234.3-187.7c-0.1,1.2,1.5,2.2,2.1,0.8C1236.8-188,1234.4-189.9,1234.3-187.7 C1234.2-186.7,1234.3-188.4,1234.3-187.7z M1239-189.4c1.5-0.1,1,2.1-0.4,2.2c0.3,1.3,1.2,0.7,1.9,0.5c0.2-0.1,0.2-0.6,0.6-0.6 c1.1,0-0.3,1.2-0.5,1.4C1238.3-184.7,1236.5-188.8,1239-189.4z M1238.6-188.2C1239.6-187.7,1239-189.7,1238.6-188.2 C1238.6-188.2,1238.7-188.6,1238.6-188.2z M1242.1-190c0.3,0,0.6,0.4,0.9,0.5c0.2,0,1.7-0.8,1.8,0.1c-0.2,0.6-1,0-1.4,0.5 c-0.5,0.7,0.1,2.1-0.3,2.6C1242.1-185.1,1241.7-190,1242.1-190C1242.4-190,1241.9-190,1242.1-190z M1247.4-194.9 c0.7,0,1.1,0.7,1.3,1.2c0,1-1.4-0.6-1.3-0.6c-0.7,0.4-0.6,1.3-0.6,2c0,0.6-0.1,1.8,0.2,2.2c0.1,0.2,1.1,0.6,1.1,0.7 c0,0.4-0.8,0.3-0.9,0.3c0.1,0.6,0.6,2.1,0.3,2.6c-0.5,1.1-0.6,0.3-0.9-0.6c-0.1-0.5,0.1-1.5-0.2-1.9c-0.2-0.2-1.2,0.3-1.3-0.3 c0-0.5,1-0.1,1.1-0.3c0.1-0.3,0-0.7,0-1.2C1246.2-191.9,1245.5-194.8,1247.4-194.9z M1250.3-189.8c1.7,0.4,1.7,4-0.2,3.6 C1248.2-186.6,1248.7-189.4,1250.3-189.8z M1249.7-187.8c-0.1,1.3,1.1,1.5,1.1,0C1250.7-189.3,1249.6-189.3,1249.7-187.8z M1252.3-190.4c0.3,0,0.6,0.4,0.9,0.5c0.2,0,1.7-0.8,1.8,0.1c-0.2,0.6-1,0-1.4,0.5c-0.5,0.7,0.1,2.1-0.3,2.6 C1252.2-185.5,1251.9-190.4,1252.3-190.4C1252.5-190.4,1252.1-190.4,1252.3-190.4z M1259.2-190.4c0.7,0.2,1.7,3.1,1.4,3.6 c-0.9,1.4-1.5-2.7-1.3-2.6c-1.3-0.6-0.1,2.6-1.2,2.5c-0.8,0-0.1-2.6-1.1-2.6c-0.9,0,0.2,4.5-1.2,2.4c-0.2-0.4-0.2-1.5-0.2-1.9 c0.2-1.5-0.1-0.9,0.8-1c0.5-0.1,0.5,0,1,0c0.1,0.2,0.3,0.4,0.5,0.4C1258.4-190,1258.7-190.3,1259.2-190.4 C1259.9-190.2,1258.8-190.3,1259.2-190.4z M1263.2-190.2c1.1-0.1,1,0.4,1.2,1.1c0.1,0.2,0.4,1.8,0.4,1.8c-0.5,0.8-1-0.2-1.1-0.6 C1261.4-184.5,1259.7-190,1263.2-190.2z M1261.8-187.8c0.3,1.7,1.7-1.5,1.8-1.7C1262.6-189.8,1261.8-188.8,1261.8-187.8z M1267.5-190.5c1.1,0,1.3,1.6,1.2,2.4c-0.1,0.4-0.3,2-0.8,0.9c-0.3-0.5,0.1-4.5-1.1-1.7c-0.2,0.4,0.2,2.2-0.5,2.1 c-0.6-0.1-0.4-0.9-0.5-1.3c-0.1-0.4-0.5-1.6-0.3-1.9C1265.4-189.8,1267.4-190.5,1267.5-190.5 C1268.4-190.5,1267.1-190.5,1267.5-190.5z M1271.5-191.1c0.5,0,0.7,1.6,0.1,1.7c-0.8,0.2-0.6-1.8-1.3-0.4c-1.5,2.8,2.9,1.6,2.9,1.8 C1271-184.6,1267-190.9,1271.5-191.1C1271.8-191.1,1271.4-191.1,1271.5-191.1z M1274.9-190.8c1.5-0.1,1,2.2-0.4,2.2 c0.3,1.3,1.2,0.7,1.9,0.5c0.2-0.1,0.2-0.6,0.6-0.6c1.1,0-0.3,1.2-0.5,1.4C1274.2-186.1,1272.3-190.2,1274.9-190.8z M1274.4-189.6 C1275.5-189.1,1274.9-191.1,1274.4-189.6C1274.4-189.6,1274.5-190,1274.4-189.6z\"></path><path d=\"M1184.5-163.6c0.4,0,0.9,2.2,1.2,2.6c0-2,0.7-1.5,1.6-0.1c0-0.5-0.3-2.5,0.4-2.7c0.6-0.2,0.3,2.4,0.3,2.6 c0.1,2.7-0.4,1.8-1.7,0C1186.3-155.1,1183.9-163.3,1184.5-163.6C1184.8-163.7,1184.3-163.5,1184.5-163.6z M1189.9-163.6 c1.4-0.1,1.1,2.4-0.2,2.5c0.2,2.1,1.4,0.3,1.9,0.2c0.1,0,0.5-1.1,0.7-0.1c0.1,0.5-0.7,1.3-1,1.4 C1189-158.6,1187.8-162.8,1189.9-163.6z M1189.5-162.1c0,0,0.2,0.2,0.3,0.3c0.4,0,0.3-1.1,0.1-1 C1189.6-162.7,1189.6-162.5,1189.5-162.1z M1192.3-170.2c1.1,0.1,0.3,6.1,1.4,6.9c0.4-0.5,0.8-0.5,1.3-0.2c0.3,0.2,0.6,0.5,0.7,0.9 c0.1,0.3,0.1,0.7,0.2,1c0.1,1.3-0.3,1.9-1.3,2.3c-0.7,0.3-0.2,0.9-0.9-0.3c-0.5-0.8-0.3-1.2-0.4-2.1 C1193.1-162.3,1191.4-170.2,1192.3-170.2C1192.6-170.2,1192-170.2,1192.3-170.2z M1193.9-162c0.1,1.1,0.1,2.4,1.1,1.5 C1196.3-161.7,1193.7-164.5,1193.9-162C1194-160.7,1193.9-162.4,1193.9-162z M1198.1-164.4c3-0.2,3.1,5.5-0.3,4.1 c0.1,0.5,1,6.8,0.3,6.9c-0.7,0-1.1-7.2-1.1-7.9c-0.1-0.6-0.6-2.2-0.2-2.8C1197-164.5,1197.5-163.8,1198.1-164.4z M1197.8-162.4 c-0.1,1.5,1.6,2.4,2,0.6C1200-162.9,1197.8-164.8,1197.8-162.4C1197.7-161.3,1197.8-163.2,1197.8-162.4z M1202.8-164.3 c1.3-0.2,0.9,0.8,1.2,1.6c0.1,0.3,0.7,1.9,0.1,2c-0.4,0.1-0.6-0.7-0.7-1C1200.9-157.9,1200-164,1202.8-164.3z M1201.6-161.5 c0.3,1.7,1.8-1.6,1.5-2C1202.7-164.4,1201.6-162,1201.6-161.5z M1206.4-165.3c0.3,0,0.9,1.9,0.1,2c-0.6,0.1-0.3-1.4-1.1-0.9 c-1,0.7,0.4,4,2.1,2.1c1.1,0.2-0.7,1.5-1.2,1.5c-1,0-1.6-1-1.8-1.9C1204.4-163.8,1205-165.2,1206.4-165.3 C1206.6-165.3,1206.3-165.2,1206.4-165.3z M1208.4-172.8c0.6,0,0.6,7.8,0.7,8.5c0.1-0.2,1.1-1.6,1.5-1.4c0.9,0.3-1.3,1.8-1.2,2.4 c0.1,0.7,2.6,1.6,2.5,1.9c-0.4,1-2.4-0.8-2.7-1c0,0.2,0.2,3.3-0.8,2c0,0,0.2-0.5,0.2-0.6c-0.3-1.4-0.2-3.1-0.2-4.5 C1208.3-166.1,1207.6-172.8,1208.4-172.8C1208.6-172.8,1208.2-172.8,1208.4-172.8z M1215-168.1c0.6,0.1,0.4,1.6,0.4,2 c0.4-0.1,2.5-0.4,1.6,0.6c-0.3,0.3-1.2-0.1-1.4,0.3c-0.3,0.5,0.6,1.9,0.1,2.3c-0.7,0.6-0.8-2-0.8-2.4c-0.4,0.1-1.2,0.4-1.6,0.3 c-1.3-0.4,0.9-0.9,0.9-0.9c0.7-0.6,0.2,0.1,0.5-0.8C1214.9-167.1,1214.4-167.6,1215-168.1z M1221.6-166.4c0.3,0.1,0.5,0.4,0.5,0.7 c0.3-0.5,1-0.8,1.6-0.4c0.6,0.4-0.3,0.6-0.3,0.6c0.1-0.4-0.7,0.3-0.6,0.1c-0.5,0.6-0.2,1.5-0.3,2.2 C1222.1-159.1,1221.4-166.4,1221.6-166.4z M1225.5-166.2c1.4-0.1,1.1,2.4-0.2,2.5c0.3,2.5,1.7,0,2-0.1c1.2-0.3,0.2,1.5-0.6,1.7 C1224.6-161.4,1223.6-165.5,1225.5-166.2z M1225.2-164.7c0,0,0.2,0.2,0.3,0.3c0.4,0,0.3-1.1,0.1-1 C1225.3-165.3,1225.3-165.1,1225.2-164.7z M1230.1-166.3c1.3-0.2,0.9,0.8,1.2,1.6c0.1,0.3,0.7,1.9,0.1,2c-0.4,0.1-0.6-0.7-0.7-1 C1228.2-159.9,1227.3-165.9,1230.1-166.3z M1229-163.5c0.3,1.7,1.8-1.6,1.5-2C1230-166.4,1228.9-164,1229-163.5z M1233.8-167.2 c0.3,0,0.9,1.9,0.1,2c-0.6,0.1-0.3-1.4-1.1-0.9c-1,0.7,0.4,4,2.1,2.1c1.1,0.2-0.7,1.5-1.2,1.5c-1,0-1.6-1-1.8-1.9 C1231.8-165.8,1232.4-167.1,1233.8-167.2C1234-167.2,1233.6-167.2,1233.8-167.2z M1236.3-173c0.6,0,0.6,4.8,0.7,5.4 c0,0,0.7-0.2,0.7-0.2c0.4,1.5,0-0.5-0.4,0.8c-0.1,0.4-0.2,0.6-0.2,1.3c0,0.7,0.4,4.7-0.5,2.2c-0.2-0.6,0-1.4-0.2-2 c-0.1-0.3,0-0.8-0.1-1c-0.1-0.1-0.6-0.1-0.6,0c-0.4-0.1-0.5-0.3-0.3-0.5c0.1-0.3,0.3-0.3,0.7-0.3c0-0.3-0.1-0.7-0.1-1.1 C1236.3-169.2,1235.5-172.8,1236.3-173C1236.5-173,1236.1-172.9,1236.3-173z M1244.3-170.2c0.6,0.1,0.4,1.6,0.4,2 c0.4-0.1,2.5-0.4,1.6,0.6c-0.3,0.3-1.2-0.1-1.4,0.3c-0.3,0.5,0.6,1.9,0.1,2.3c-0.7,0.6-0.8-2-0.8-2.4c-0.4,0.1-1.2,0.4-1.6,0.3 c-1.3-0.4,0.9-0.9,0.9-0.9c0.7-0.6,0.2,0.1,0.5-0.8C1244.2-169.2,1243.7-169.7,1244.3-170.2z M1249.4-168.2c1.7-0.1,0,0.8,0.1,0.7 c-0.3,0.5-1.4,0.9-0.4,1.5c0.3,0.2,0.8-0.4,1.1-0.1c0.6,0.6,0.3,1.8-0.6,2.3c-0.8,0.4-1.8,0.2-1.1-0.7c0,0.1,1.8,0.3,1.3-0.9 c-0.1-0.4-1.6,0.4-1.8-0.9C1247.8-167.1,1248.6-168,1249.4-168.2z M1251.5-174.1c0.6,0,0.6,4.8,0.7,5.4c0,0,0.7-0.2,0.7-0.2 c0.4,1.5,0-0.5-0.4,0.8c-0.1,0.4-0.2,0.6-0.2,1.3c0,0.7,0.4,4.7-0.5,2.2c-0.2-0.6,0-1.4-0.2-2c-0.1-0.3,0-0.8-0.1-1 c-0.1-0.1-0.6-0.1-0.6,0c-0.4-0.1-0.5-0.3-0.3-0.5c0.1-0.3,0.3-0.4,0.7-0.3c0-0.3-0.1-0.7-0.1-1.1 C1251.5-170.3,1250.7-173.9,1251.5-174.1C1251.8-174.1,1251.3-174,1251.5-174.1z M1254.1-168.2c0.8-0.1,0.1,3.6,1.2,3.1 c0.7-0.3-0.3-3.4,0.8-3.1c0.5,0.1,0.6,6.9,0.5,7.6c-0.1,1.1-0.3,3.1-1.7,3c-1.3-0.1-1.9-2.9-1.3-2.6c0.6,0.3,0.4,2,1.5,1.9 c0.6-0.1,0.7-1,0.8-1.4c0.4-1.6,0.1-3.3-0.1-4.9C1253.6-163.4,1253.5-168.1,1254.1-168.2C1254.3-168.2,1253.9-168.2,1254.1-168.2z M1257.1-174.7c0.3,0,1.3,9.6,1.1,10c-0.8,1.2-1-2.7-1-3.2C1257.1-168.6,1256.2-174.6,1257.1-174.7 C1257.3-174.7,1256.9-174.7,1257.1-174.7z M1260-168.7c1.4-0.1,1.1,2.4-0.2,2.5c0.2,2.1,1.4,0.3,1.9,0.2c0.1,0,0.5-1.1,0.7-0.1 c0.1,0.5-0.7,1.3-1,1.4C1259.2-163.7,1258-167.9,1260-168.7z M1259.7-167.2c0,0,0.2,0.2,0.3,0.3c0.4,0,0.3-1.1,0.1-1 C1259.8-167.8,1259.8-167.6,1259.7-167.2z M1265.1-169.1c0.9-0.1,0.9,5.7,0.9,6.2c0,1.1,0.2,3.1-0.6,4c-0.7,0.8-2.3,0.5-2.9-0.4 c-1.1-1.6,1.6,0.4,2.2,0.1c1.2-0.7,0.5-4.9,0.4-6.1c-1.5,0.9-2.9-0.8-2.4-2.4C1263.1-168.8,1264.2-169,1265.1-169.1 C1265.4-169.1,1265-169.1,1265.1-169.1z M1263.8-168.2c-0.7,0.7-0.4,3.1,0.9,2.3C1265.5-166.4,1264.7-168.2,1263.8-168.2z M1268.6-169c0.6,0,0.6,2.4,0.7,2.6c0,0.1,0.5,0.8,0.5,0.8c-0.1,0.5-0.6,0.4-0.8,0c-2,3.1-3.3-3.2-2.3-3.2c0.6,0,0.3,4.8,1.7,2.7 C1268.7-166.8,1267.8-169,1268.6-169C1268.8-169,1268.3-169,1268.6-169z M1270.4-171.2c0.6,0,0.1,0.8,0.1,0.8 C1270.5-170.5,1269.5-171.1,1270.4-171.2C1270.6-171.2,1270.3-171.2,1270.4-171.2z M1270.6-169.6c0.6,0.1,0.5,4.4,0,4.6 C1270.5-165,1269.6-169.6,1270.6-169.6C1270.9-169.6,1270.4-169.6,1270.6-169.6z M1273.5-175.4c0.5,0,0.8,5.1,0.9,5.5 c0.2,1.2,0.8,2.8,0.7,3.9c0,0.9,0.5,0.5-0.4,0.8c0,0-0.2-0.6-0.3-0.6c-0.2,0-0.5,0.5-0.8,0.5c-1-0.2-1.5-0.8-1.7-1.8 c-0.2-1.2,0.5-2.9,1.9-1.9C1273.7-169.6,1272.5-175.4,1273.5-175.4C1273.6-175.4,1273.2-175.4,1273.5-175.4z M1272.5-167.5 c-0.1,1,0.8,2.1,1.4,1C1274.6-167.8,1272.4-169.9,1272.5-167.5z M1276.1-171.6c0.6,0,0.1,0.8,0.1,0.8 C1276.2-170.9,1275.1-171.5,1276.1-171.6C1276.3-171.6,1275.9-171.6,1276.1-171.6z M1276.3-170c0.6,0,0.5,4.4,0,4.6 C1276.1-165.4,1275.3-170,1276.3-170C1276.5-170,1276-170,1276.3-170z M1278.9-170.3c1.7-0.1,0,0.8,0.1,0.7 c-0.3,0.5-1.4,0.9-0.4,1.5c0.3,0.2,0.8-0.4,1.1-0.1c0.6,0.6,0.3,1.8-0.6,2.3c-0.8,0.4-1.8,0.2-1.1-0.7c0,0.1,1.8,0.3,1.3-0.9 c-0.1-0.4-1.6,0.4-1.8-0.9C1277.3-169.3,1278.1-170.2,1278.9-170.3z M1281-176.2c0.6,0,0.6,4.8,0.7,5.4c0,0,0.7-0.2,0.7-0.2 c0.4,1.5,0-0.5-0.3,0.8c-0.1,0.4-0.2,0.6-0.2,1.3c0,0.7,0.4,4.7-0.5,2.2c-0.2-0.6,0-1.4-0.2-2c-0.1-0.3,0-0.8-0.1-1 c-0.1-0.1-0.6-0.1-0.6,0c-0.4-0.1-0.5-0.3-0.3-0.5c0.1-0.3,0.3-0.3,0.7-0.3c0-0.3-0.1-0.7-0.1-1.1 C1281-172.4,1280.2-176.1,1281-176.2C1281.3-176.2,1280.8-176.2,1281-176.2z\"></path></g><g id=\"book5\"><path opacity=\"0.8\" fill=\"#37AA3C\" d=\"M595.2,292.7l-2,11.8c-0.7,4.3,2.2,8.5,6.5,9.2L741.6,338c4.3,0.7,8.5-2.2,9.2-6.5l2-11.8 L595.2,292.7z\"></path><rect x=\"608.3\" y=\"139.6\" transform=\"matrix(-0.9856 -0.169 0.169 -0.9856 1328.8608 560.2322)\" opacity=\"0.8\" fill=\"#37AA3C\" width=\"160\" height=\"168\"></rect><path opacity=\"0.8\" fill=\"#37AA3C\" d=\"M781.3,154.2l2-11.8c0.7-4.3-2.2-8.5-6.5-9.2l-141.9-24.3c-4.3-0.7-8.5,2.2-9.2,6.5l-2,11.8 L781.3,154.2z\"></path><path fill=\"#0F0D10\" d=\"M598.2,289.7l-2,11.8c-0.7,4.3,2.2,8.5,6.5,9.2L744.6,335c4.3,0.7,8.5-2.2,9.2-6.5l2-11.8L598.2,289.7z\"></path><path fill=\"#0F0D10\" d=\"M784.3,151.2l2-11.8c0.7-4.3-2.2-8.5-6.5-9.2l-141.9-24.3c-4.3-0.7-8.5,2.2-9.2,6.5l-2,11.8L784.3,151.2z\"></path><rect x=\"611.3\" y=\"136.6\" transform=\"matrix(-0.9856 -0.169 0.169 -0.9856 1335.3247 554.7823)\" fill=\"#0F0D10\" width=\"160\" height=\"168\"></rect><circle fill=\"#272528\" cx=\"675.4\" cy=\"313.1\" r=\"6\"></circle><rect x=\"618.9\" y=\"140.5\" transform=\"matrix(-0.9856 -0.169 0.169 -0.9856 1334.2366 558.4706)\" fill=\"#971C1D\" width=\"144\" height=\"164\"></rect><rect x=\"632.8\" y=\"137.6\" transform=\"matrix(0.9856 0.169 -0.169 0.9856 34.0758 -117.0799)\" fill=\"#4B4A4C\" width=\"144\" height=\"8\"></rect><path fill=\"#2E2524\" d=\"M689.1,171.6c2.2-8.9,15.4-5,15.1,2.1c-0.3,7.7-10.9,0.2-12.8,6.7C689.3,178.6,689.6,174.1,689.1,171.6 C689.2,171.2,689.5,173.4,689.1,171.6z M702.5,163.9c-2.3-0.6-4.2,0-6,1.4c1.6-0.1,7,3.8,7.7,2.8 C704.9,167.3,702.2,165.1,702.5,163.9C700.2,163.3,702.2,165.1,702.5,163.9z\"></path><path fill=\"#FAEFEB\" d=\"M721,295.5c-1.6-0.4-10.5-0.8-6.6-4.2C716.1,291.1,724.8,292.1,721,295.5C719.2,295.1,723.7,293,721,295.5z M665.3,288.9c-1.7-1.5-3.4-1.6-5.2-0.4c0.3,1,9,6.7,8.6,1.8C668.6,289.1,666.1,289.2,665.3,288.9 C664.2,288.8,665.6,289,665.3,288.9z M634.1,285.4C635.2,288.1,643.8,285.4,634.1,285.4C635.2,288,635.4,285.4,634.1,285.4z M689.7,164.1c-0.1,1.3-0.9,2.8,0.6,3.9C690.2,166.7,694.1,164.8,689.7,164.1z M702.6,163.9c0.2-0.1,0.4-0.1,0.6-0.1 C703,163.8,702.8,163.8,702.6,163.9z M722.6,227.1c-1.6-0.5-4.8,0.3-4.2-2.1c0.3-1.8,9.6,0.4,7.6-1.6c-2.1,0-6.1-5.1-12.2,0.2 c-0.1,1.2-1,5.8-1.2,6.1c-1.1,7.8-1.5,9.4,11.4,8.4c1.8-6.9-8-2.3-7.1-6.3C717.2,230.2,727,231.6,722.6,227.1 C721,226.6,722.7,227.2,722.6,227.1z M658.3,226.7c4.8,0.8,3.8-1.1,4.5-5.2c2,2.7,0.2,7.6,5.7,7.3c0.4-0.7,3.1-9.3,4.4-8.8 c2.2,0.6-4.6,8.9,2.5,9.6c0.5-2.9,6.5-22.9-2.9-17.5c-1.1,0.7-2.8,7.7-4.1,7.2c-1.2-0.3,0-5.3-0.6-6.3c-1.6-2.6-3.4-2.6-6.6-3.1 C660.3,215.4,658.3,221.3,658.3,226.7C659.5,226.9,658.3,226.2,658.3,226.7z M662.5,202.6c-1.1,14,20.1,4,13.6-5.8v0.1 c-1.5-2.2-5.5-4.6-8.4-4.2C662.5,193.5,663.7,196.5,662.5,202.6C662,208.8,663.2,199.1,662.5,202.6z M672.4,201.2 c-0.9,5.4-5.6,5.7-4.9,0.1C668.2,196.2,672.4,196,672.4,201.2C672.1,203,672.4,200.9,672.4,201.2z M691.5,216.7 c-1.7-1.7-5.4-4-6.9,0.1c-1.5,3.5-10.4,14.6-2.7,14.2c3.7-7.5,7.2,2.4,11.6,2.4c0.1-1.6,0.1-3.2-0.1-4.8 C692.7,225.2,694.1,219.4,691.5,216.7z M722.5,218.8c0.8-3.8,1.2-8,2.8-11.6c1-2.2,6.5,1.5,3.5-4.1c0.4,0.7-16.1-3.3-16.7-2.9 c-0.8,0.5-3.1,5.9-1.7,7.2c3.4,3.2,2.4-3,4.3-2.7C725.3,206.8,712.7,216.9,722.5,218.8C723,216.3,721,218.5,722.5,218.8z M682.4,196.4c4.1,0.4,0.7,2.3,1.2,4.2c6.8-6.3,6.8,13.5-1.2,6.4c-0.3,1-0.5,1.9-0.8,2.9c-2-1.3-1.6-6-3.5-6.6 c-0.8,7.1,4.2,11.6,11.3,8.9C695.9,206.4,693.2,190,682.4,196.4z M682.3,207.1c0-2.3-1.6-3.3,0.7-5.3l0.2,0.1c0.5-2,2.3-5-1-5.3 c-3.8,2.5-5.5,10.1-0.7,13.4C681.8,208.8,682.1,208,682.3,207.1C682.3,206.8,682.1,208,682.3,207.1z M698.7,234.3 c3.2-0.2,0.9-4.4,3.5-4.6c1.6-0.1,2.8,6.1,6.7,6.4c2.4-0.5-2.3-8.6-2-9.9c0.1-0.6,2.9-5.1,2.8-4.1c0.1-1,3.3-1.5,2.4-3.1 c-2.2-3.9-8.9,3.8-9.6,4.6c-1.3-2.7,1.6-4.5,0.3-6.4c-4.8-6.8-6.3,8.9-6.5,10.4C695.8,230.6,694.3,234.8,698.7,234.3z M693.4,213.1 c2.6,5.1,4.9-5.7,5.1-6.9c3,2.3,2.1,10.6,6.8,10c3.1-0.4,3-5.7,3.4-8.1c1.7-9.8-2.9-10.5-4.4-1.1c-1.1-1.6-1.9-2.7-2-4.2 C698,189.9,693.4,208.4,693.4,213.1C693.5,213.3,693.4,212.7,693.4,213.1z M727.5,163.3c1.8-2.8,3.7-0.9,5.7,0.1 c0.1-1.7-2.6-2.3-2.5-3c0.3-0.3,0.5-0.6,0.7-1c-3.7-0.9,0.4-2.3-2-3.5c-0.9,0.4-1,5.5-2.8,3.8c-2-1.9,2.2-4.1-1.4-5.3 c0.1,0.4,0.1,6.7-2,4.7c-2.6-2.5,2.5-4.7-2.8-5.3c2.6,0.9,0.1,4.4,1.7,6.1C723.6,161.6,727.9,159.5,727.5,163.3 C729.3,160.5,727.7,161.1,727.5,163.3z M706.9,157.6c2.6,0,1.8-5,4.5-0.6c2,0-1.2-8-1.3-8C706.7,147.9,707.3,155.1,706.9,157.6 C707.4,157.6,707.3,155.1,706.9,157.6z M684.1,145.7c-2.6,2-1.5,4.9-1.8,7.5 M676.8,144.1C674.6,147.7,684.8,154.8,676.8,144.1 C675.8,145.7,678,145.7,676.8,144.1z M687.9,149.8c-1.2,2.4-1,2.9,2.3,4.1 M688,148.6c-0.7,0.1-1.3,0.4-1.7,0.9 c-0.7,1.2-0.6,2.5-0.3,3.8 M708.8,271.2c-5.6-1.3,1-7.2-2.4-9.9c-0.7,3.7-1.3,7.4-2,11.1C707.6,273,708.8,274.4,708.8,271.2 C706.3,270.6,708.8,271.8,708.8,271.2z M692.3,267.7c0.2-1.1,0.5-5.2,1.3-5.7c2.1,2.2,2.6,5.4,4.2,7.9c-0.8-0.3,3.7,0.8,3.2,0.8 c1.2,0.1,3.8-12.9,3-14.1c-4.1-5.7-2.9,6.4-4.6,6.7c-0.6,0.1-2.1-3.8-2.2-4c-0.9-2.7-3.3-6.4-6.7-4 C685.5,258.8,690,272.9,692.3,267.7C692.4,267,690.9,270.9,692.3,267.7z M699.1,248.7c-1.3,0.1-2.5,0.2-2.1-1.8 c0.4-3.2,4.1,0.7,5.2-1.3c3.2-5.7-4.8-1.6-4.1-5c0.5-2,6.9,0,7.1,0c2.4-5.7-7.6-4-10.4-6.2c-1.7,6.2-7.2,21.9,5.5,18.4 C705.4,251.4,704.1,249.4,699.1,248.7C697.8,248.8,699.9,248.8,699.1,248.7z M714.8,264.6c-2.7-0.3-6.6-5.4-8-4.6 c-0.5,2.2-1,10.4,2.1,11.1c1.1-4.3,2.5-3.7,3.8,0.3l0.1-0.2l-0.1,0.2C717.4,273.6,716.1,266.6,714.8,264.6 C713.8,264.5,715.4,265.5,714.8,264.6z M714.8,264.6c1.5-1.9,3-3.7,4.5-5.6c-1.7-0.5-3.3-1-4.9-0.2c-0.9,1.6-2,2.9-3.5,3.9 c-0.5-1.7,1.3-4.3,0.5-5.6c-3.1-5.8-4.8,3.1-4.8,2.9C708.7,258.8,711.9,264.4,714.8,264.6C716.3,262.7,713.8,264.5,714.8,264.6z M697.7,269.9c1.2,3.9,3.9,0.7,4.6,0c1.8-1.6,1.9-10.2,1.7-12.4c-0.2,1-1.7,13.3-3.2,13.2C701.4,270.8,696.9,269.6,697.7,269.9 C698.4,272.2,698.4,270.2,697.7,269.9z M712.7,271.4c-0.1,3.6,2.8,2.5,4.9,3.2c0-3.9,0.3-3-1.5-6.2 C715.9,270.7,715.7,272.8,712.7,271.4C712.6,275,716.1,272.9,712.7,271.4z M654.2,247c-0.6,2.2,1.9,5.9,2.1,8.6 c0.1,1.3-2.7,11.2,1.8,7.6c2.9-2.3,1-8.1,3.4-11.1c0.7-0.9,4.2,0.3,4.9-2.4C662.4,249,658.3,247.7,654.2,247 C653.8,248.5,654.8,247.1,654.2,247z M675.3,260.4c1.3-7.4-1-0.9-2.8-5.1c-1.2-2.8,1.5-4.5-1.7-5.8c-4.6-1.8-4.7,12.3-5.1,15.2 c5.1,2.3,2.3-2.3,4.8-3.3C672.3,260.7,673,260.9,675.3,260.4C675.5,259.3,673.8,260.7,675.3,260.4z M675.3,260.4 c-0.5,3.8-0.5,6,3.5,6.7c0-3.2,5.2-13.9,1.4-15.7C675.4,249.1,675.8,257.7,675.3,260.4C675.1,261.8,675.5,259.2,675.3,260.4z M688.2,252.9c-5.9-1-4.1,2.6-5,7c-0.4,2.1-3.2,7.7-0.3,8.8C688,270.7,687.8,255.7,688.2,252.9C687,252.7,687.5,257.5,688.2,252.9z M689.2,250.6c1.5-3,5.8-19.4-1.7-16.7c-0.9,0.3-7.1,8-5.1,8.9c1.5,0.5,0.7-2.1,1.7-1.7c1.7,0.6,0,7,0.3,8.6 C686,250,687.6,250.3,689.2,250.6C689.3,250.4,687.6,250.3,689.2,250.6z M673.2,248.1c5.4,0,3.2-4.6,4.5-9.1 c1.8,2.2,0.6,9.2,2.7,9.9c4.4,1.6,5.6-7.2,3.8-7.8c-1.4-0.5,0,2.3-1.7,1.7c-1.1-0.4-0.8-3.4-1.1-4.4c-1.4-5.2-0.4-4.6-6.2-6.3 C674.8,234.2,671.1,246.7,673.2,248.1C674,248.1,672.2,247.4,673.2,248.1z M704.4,173.1c2.8-0.5,0.4-5,5.2-3.4 c-0.9-1.9-5.2-5.7-7.1-5.7l0,0c-0.4,1.5,2.5,2.9,1.7,4.2c-1.1,1.4-5.8-3.1-7.7-2.8C696.5,168.9,703.3,169,704.4,173.1 C705,173,703.5,169.6,704.4,173.1z M710.6,181.1c-3.5-3.5,0.1-2.8,0.5-5.8c0.2-1.7-1-4.2-1.5-5.8c-4.9-1.6-5.3,6.3-8.7,8.6 c-0.9,0.6-4.6,1.1-5.5,1.1c0.6,0-2.4-0.4-3.5-0.7c-1.4,5-2.1,4,0.3,7.2c1.9,2.4,3.4,2.1,5.3,2.7c-0.8-0.2,3.2,0.4,3.7,0.5 c1.5,0.3,4.6,1.8,5.7,0.4c1.6-2-1.3-3.1-0.8-5c0.3-1.3-0.7-2.6,1.6-3c1.4-0.3,1.9,1.4,2.9,1.1C711,182,711,181.5,710.6,181.1 C710.4,180.9,711,181.5,710.6,181.1z M698.9,177.7c-2.3-3.5-2.5,1.2-3.4,1.5C696.7,178.8,697.4,178.5,698.9,177.7 C697.4,175.4,697.9,178.2,698.9,177.7z M692,178.5c0.9,0.3,2.1,1.4,2.4-0.6C693.5,177.8,692.4,177,692,178.5z M710.6,181.1 c-0.2-1.5,2.2-4.5,0.5-5.8C709.4,177,707.2,179.5,710.6,181.1C710.5,180.1,710.4,181,710.6,181.1z M706.1,184.2 c0.9,0.4,4.5-1.1,4.5-1.9C710.9,182.3,703.3,180,706.1,184.2C708,185.1,704.8,182.2,706.1,184.2z\"></path></g><g id=\"book4\"><polygon opacity=\"0.8\" fill=\"#37AA3C\" points=\"919.6,-39.6 1133.9,-81.4 1190.1,198.9 976.2,241.7 \"></polygon><polygon fill=\"#FFFFFF\" points=\"922.6,-45.6 1136.9,-87.4 1193.1,192.9 979.2,235.7 \"></polygon><path fill=\"#363435\" d=\"M1076.7,140.3c0,1.2-0.5,1.3-1.4,1.2 M1080.2,136.2c0,0.6-0.3,1.3,0.6,1.9c0.5-1.7,0.5-3.1,0.3-5 M1106.8,131.1c-1.6-1.6,0.3-2.2,1-3.1c-2.7,0.5-2.9,2.4-3,4.6c-0.2,1.9,0.2,4.1-1.8,5.9c2.4-0.5,2.4-2,2.6-3.5 c0.3-1.4-0.4-3.1,1.3-4.1C1106.9,130.9,1106.9,131,1106.8,131.1z M1093.8,131.4c-0.4,0.1-0.5,0.4-0.6,0.8c-0.2,1.7-0.4,3.5-0.7,5.3 c-0.1,0.7,0.3,0.8,0.7,0.8c0.3,0.1,0.9,0,0.8-0.5c-0.3-2,0.4-3.8,0.4-5.7C1094.5,131.7,1094.5,131.4,1093.8,131.4z M1138.8,128.7 c-2-1.8-1.1-3.6-0.2-5.4C1135.8,125.8,1135.8,127.4,1138.8,128.7z M1117.5,128.4c-1.7,1.4-0.6,3.3-0.7,5 C1118.1,131.8,1117.4,130,1117.5,128.4z M1126,129.3c0-0.8,0.7-1.8-0.8-2.9c0.4,2.1-1.6,3.9,1,5.8 C1126.1,130.9,1126,130.1,1126,129.3z M1098.8,134.3c1.1,0.6,1.2,2.5,3.1,2C1100.4,136.2,1102,131.5,1098.8,134.3z M1152,123.9 c-1.1-0.2,0.2-2-1.5-2c0,1.6-1,3.9,0.2,4.4C1152.3,127.1,1150.3,124.1,1152,123.9L1152,123.9z M1123.1,132.5 c0.2-1.9,0.6-3.4-0.1-5.2C1122,129.3,1122,130.4,1123.1,132.5z M1120.7,128.1c0-0.5-0.2-1.1-0.7-1.1c-0.7,0-1.2,0.6-1,1.1 c0.6,1.5-0.2,3,0.8,4.4C1120.1,131.1,1120.3,129.7,1120.7,128.1z M1108.2,135c0.8-1.3,0.3-2.7,0.3-3.9c0-1.2-1-0.4-1.6-0.1v-0.1 C1108.9,131.7,1106.7,133.9,1108.2,135z M1156.7,118.3c-0.3,1.8-0.8,3.5,0.2,5.4c0.2-1.7,0.3-3.4,0.5-5.1 C1157.1,118.5,1156.9,118.4,1156.7,118.3z M1112,131.2c0.4-0.7-0.3-1-0.8-1.1c-1.1-0.2-0.6,0.6-0.6,1.1c0,0.9,0.1,1.8,0.1,2.8 C1112,133.3,1111.6,132.1,1112,131.2z M1151.9,123.9c0.5,1.2,1,0.9,1.5,0.2C1152.9,124.4,1152.4,124.7,1151.9,123.9 C1151.9,123.9,1152,123.9,1151.9,123.9z\"></path><path fill=\"#03A7A1\" d=\"M1009.2,92.4c5.1,0.9,9.8-0.2,14.2-2.8c1.1,0.7,2.2,0,3.3-0.2c4.6-0.8,9.2-1.7,13.8-2.6 c0.7,1.4,0.4,2.8,0.1,4.2c-0.4,1.8,0.3,2.6,2,2.5c2.5-0.2,5,0.6,7.5-0.8c0.7-0.4,1.7,0.1,2.6,0.2c-0.2,0.4-0.3,0.9-0.6,1.2 c-3.8,5.5-2.5,9.5,3.8,11.6c0.8,0.3,1.7,0.4,2.5,0.6c7.1,1.5,8.1,2.7,7.5,9.6c0,0.1,0.1,0.1,0.3,0.3c2.2-1.6,3.1-3.7,2.7-6.4 c-0.5-3.2-2.4-5.2-5.4-6.1c-2.5-0.8-5-1.2-7.5-1.9c-2.4-0.7-3.8-2.4-3.8-4.8c0-2.2,1.7-3.3,3.5-4c2.8-1.2,5.3-0.5,7,2 c0.4,0.5,0.5,1.3,1.3,1.4c0.4-4,0-4.4-5-5.4c0.3-1.6,0-3.2-1-4.5c-0.7-0.9-0.8-1.8-0.7-2.9c2.8-1.1,5.7-1.4,8.6-1.9 c1.2,2.5,3.7,2.7,5.9,2.6c4.4-0.2,8.6-1.5,11.6-5c0.7-1.9,2.5-1.6,4-1.9c20.1-4,40.3-7.9,60.4-12.1c2.8-0.6,3.8,0,4.3,2.9 c2.6,14,5.4,27.9,8.3,41.8c0.5,2.3,0,3.1-2.4,3.6c-53.8,10.6-107.6,21.3-161.5,31.9c-5.6,1.1-11.3,2.2-16.9,3.4 c-1.9,0.4-2.6-0.1-2.9-1.9c-2.8-14.6-5.7-29.2-8.7-43.7c-0.3-1.5,0-2.4,1.6-2.6c2-0.2,4-0.5,6-0.8c0.3,1.8,1.5,2.9,3.2,2.5 c4.7-0.9,9.5-1.6,13.6-4.4c0.7-0.5,1.3-1.1,1.2-2.1C999,94.7,1004.2,94.1,1009.2,92.4z M1038.7,115.3c-1.7,0.5-2.6,1.8-3.5,3.2 c-0.8,1.2-1.2,2.6-0.2,4s2.4,1.8,4,1.5c2.4-0.5,4.1-1.8,5.3-3.9c0.8-0.4,1.4-0.2,2,0.4c2.6,2.1,4,1.7,5.3-1.6 c-2.1,1.2-3,0.3-3.3-1.8c-0.4-2.5-0.9-4.9-1.5-7.3c-0.5-1.9-0.2-4.2-1.7-5.7c-1.8-1.8-3.8,0.1-5.6,0c-3.6-0.1-5.2,2.3-6.7,4.8 c-0.3,0.6-0.9,1.5,0,2c0.9,0.4,1.7-0.2,2.2-1c0.6-1.2,1-2.5,1.6-3.7c0.9-1.6,2.3-2.2,4.1-2.2c1.3,0,2.1,0.8,2.2,1.9 c0.4,4.7,3.2,9.1,1.5,14.1c-0.9,0.4-1.7,0.8-2.6,1.1c-1.4,0.5-2.9,0.8-3.9-0.6c-1-1.2-0.4-2.5,0.2-3.8 C1038.4,116.4,1039.5,116.1,1038.7,115.3c1,0.1,1.7-0.2,1.9-1.4C1039.6,114,1039,114.3,1038.7,115.3z M1095.8,95.2 c-1.1,0.5-1.3-0.2-1.5-1c-0.2-1-0.7-1.4-1.5-0.6c-1.2,1.1-2.3,2.2-3.5,3.4c3.7,1.4,5.9,11.9,3.3,16.1c2.3-1.4,5-0.4,7.3-1.7 c-1.3-0.3-2.4-0.7-2.6-2.1C1096.6,104.5,1094.5,100,1095.8,95.2c1-0.3,2-1,3.2-0.2c0.9,0.6,1.8,0.6,2.6-0.3 c0.5-0.6,0.5-1.3,0.1-1.9c-0.7-1-1.7-1.2-2.8-0.9C1097.2,92.4,1096.2,93.6,1095.8,95.2z M1007.6,127.3c0.7-0.4,1.4-0.3,2.1,0.2 c3,2.1,3.6,2,5.7-1.5c-2.6,1.6-3.3,0.1-3.7-2c-0.6-3.5-1.3-7-2-10.4c-0.3-1.3-0.6-2.4-2.4-2.8c-4.4-0.9-9.3,1.4-11.1,5.5 c-0.3,0.7-0.8,1.5,0,2.1c1,0.7,1.8-0.2,2.1-0.8c0.8-1.2,1.2-2.6,1.7-3.9c0.6-1.5,1.9-2.1,3.4-2.3c1.3-0.1,2.2,0.4,2.8,1.5 c1.6,2.8,1.1,5.1-1.5,7.1c-2.2,1.7-4.6,3.2-6.1,5.6c-0.8,1.3-1.3,2.6-0.3,4s2.4,1.9,4,1.6C1004.8,130.8,1006.6,129.5,1007.6,127.3 L1007.6,127.3z M1113.1,92.6c3-0.3,3.3,1.3,3.7,3.1c1,5.4,2.1,10.7,3.2,16.1c0.4,1.9,0.7,3.8-0.8,5.4c2.3,0.6,2.3,0.6,6.2-1.2 c-2.1-1.6-2.3-2.2-3-7.4c-0.2-1.6,0.1-2.5,1.9-2.1c1.5,0.3,2.8,0,3.9-1.1c-4.2,1.2-6.3-0.1-7.2-4.2c-0.4-2.2-0.9-4.3-1.3-6.5 c-0.6-3.2,1-5.5,4.2-6c3-0.5,5.7-0.1,7.6,2.6s2.8,5.7,1.3,8.9c-0.6,1.4-1.3,2.7-2,4.1c1.5-0.2,1.5-0.2,3.7-2.5 c3-3.2,2.9-9.4-0.7-12.5c-4.1-3.6-7.8-4.5-12.4-1.1c-1,0.7-1.9,3.1-3.2,0.2c-0.3-0.6-0.9-0.1-1.1,0.3 C1116.2,90.1,1114.7,90.7,1113.1,92.6z M983.5,107.2c4,1.3,4,1.3,4.8,5.4c1.3,6.4,2.5,12.8,3.8,19.2c0.3,1.3,0.4,2.7,0.2,4 c-0.7,3.8-1.8,4.5-5.4,3.1c-1.3-0.5-2.4-0.2-2.8,1.1c-0.4,1.2,0.4,2,1.6,2.3c1.4,0.4,2.6,0.1,3.8-0.8c4.3-3.2,6.5-7.3,5.5-12.7 c-1-5.7-2.2-11.3-3.3-16.9c-0.8-4.3-0.8-4.3,2.8-6.9C990.6,105.8,987.3,106.5,983.5,107.2z M1011.3,109.6c1.5,0.6,2.5,1.6,3.3,2.8 c2.8,4.2,5.6,8.4,8.4,12.5c0.4,0.5,0.5,1.4,1.4,1.2c0.8-0.1,0.7-1,0.9-1.6c1-4.2,2.1-8.3,3.1-12.5c0.5-2.3,0.3-4.7,2.8-6.2 c-1.9,0.1-3.7,0.3-5.8,1.2c1.8,0.6,2.8,1.4,2.3,3.1c-0.8,2.9-1.4,5.7-2.2,8.6c-0.2,0.6-0.2,1.4-1,1.6c-0.9,0.2-1.3-0.6-1.7-1.2 c-1.4-2.1-2.7-4.4-4.3-6.4c-1.3-1.6-1.3-2.9,0.6-4.6C1016.1,108.7,1013.7,109.2,1011.3,109.6z M1139.1,79.8 c0.3,2.6-5.8,3.9-1.3,7.1c0.3,0.2,0.2,0.9,0.3,1.4c0.8,3.8,1.5,7.5,2.3,11.3c0.4,1.7,1.4,3,3.1,3.4c1.8,0.4,3.3-0.2,4.6-1.8 c-4.2-0.4-4.4-0.5-5.2-4.7c-0.5-2.4-0.9-4.9-1.5-7.3c-0.7-2.7-1.1-5,2.8-4.9c0.5,0,1.2-0.2,1-1c-0.2-0.6-0.8-0.5-1.2-0.3 C1141.3,83.8,1139.6,83.2,1139.1,79.8z M1086.4,112.9c-0.9,0.1-1.3,0.1-1.8,0.3c-3.4,1.1-7.2,0.2-8.9-2.6c-1.4-2.2-2-4.7-1.9-7.4 c0.2-3.2,2.1-5.1,4.5-6.5c2.3-1.3,4.2-0.1,5.8,1.6c0.5,0.5,1,1.5,1.9,0.8c0.8-0.6,0.2-1.6,0-2.4c-0.3-1.1-1.3-1.3-2.2-1.5 c-2.1-0.4-4.1-0.1-5.9,0.7c-4,1.7-6.5,4.8-7,9.1c-0.4,4,1.4,7,4.8,9.2C1079.1,116.4,1083.9,116,1086.4,112.9z M1114.8,108.3 c-3.1-0.2-2.9-2.7-3.3-4.7c-0.8-4-1.6-8.1-2.4-12.1c-0.2-0.9-0.7-2.1-1.5-1c-0.9,1.4-2.5,2-3.3,3.4c3.9,1.8,5.8,12.7,2.6,16 C1109.8,109.3,1112.3,108.8,1114.8,108.3z M1064.8,117.8c-0.7-0.4-1.1-0.1-1.6,0.1c-3.3,1.7-6.4,1.1-8.7-1.7 c-0.5-0.6-0.4-2-1.7-1.3c-1,0.5-0.2,1.6-0.1,2.3c0.1,1.2,1.1,1.8,2,2.2C1058.3,120.6,1061.7,119.8,1064.8,117.8z M1105.7,82.1 c-1,0.4-1.6,1.2-1.4,2.4c0.2,1,0.7,1.9,1.8,1.8c1.2-0.1,1.9-1,1.7-2.2C1107.8,83,1107.2,82.1,1105.7,82.1z\"></path><path fill=\"#363435\" d=\"M1017.9-6.8c0.1-0.4,0.4-0.6,0.9-0.6v0.1c0.2,0.9,0.9,0.6,1.5,0.6c0.6-0.3,1.6,0.1,1.6-1.1 c0.5-0.7,1.1-1.1,1.9-1c0.1,0.7,0.6,0.9,1.1,1.1c0.4,0.4,0.4,0.8,0.3,1.3c-2.6,0.2-3.9,1.5-3.8,4.2c-1,0.4-1.2,1.3-1.6,2.2 c1.5-0.2,2-0.9,1.7-2.2c2-0.7,3.7-1.7,3.7-4.2c1.1-0.2,1.5-0.8,1.4-1.9v-0.1c0.6-1.1,1.3-2.1,2.7-2.1c0.1,0.6-0.6,1.2-0.1,1.8 c0.1,1.6-1.4,2.2-2.1,3.3c-0.7,0.1-0.8,0.7-1.1,1.2c-0.3,0.4-0.9,0.9-0.3,1.4s1.1,0,1.4-0.5c0.2-0.4,0.3-0.9,0.5-1.3 c1.2-0.6,2.7,0.1,3.9-0.7c1,1.5,2.2-0.5,3.2,0.3c0.4,0.3,0.4,1.7,1.3,0.5c0.6-0.8,0.5-2.5-0.2-2.5c-2.2,0.2-1.4-1.8-2.3-2.6 c2.1,0.9,4.8-0.2,6.6,1.7c-0.1,0.2-0.2,0.5-0.2,0.5c2.3,2.2,4.6,4.4,7.1,6.4c1.4,1.1,0.9,3.5,3.4,4.1c-0.9-2.8-2.9-5-2.2-7.8 c1.3,2,2.8,2.1,4.5,0c0.9,1.4,1.6,2.7,2.6,4.2c0.8-1.9,1.8-2.1,3-0.7c0,1.6,0.9,2.3,2.4,2.2c1,0.1,1.7,1.2,1.7,1.7 c0.1,1.8,1.7,1.7,2.5,2.5c0.6-0.9,1.7-1.7,1.8-2.6c0.1-2,1-1.4,1.9-0.9c2.3,1.2,5,1.4,7.4,2c1.3,0.3,2.8,0.1,3.5-0.7 c0.8-0.9-0.7-1.7-1.2-2.6c-1.7-3.1-3.3-6.1-1.6-9.7c0.3-0.6-0.1-1.7,1-1.9c0.8-0.1,1.4,0.5,1.9,1.1c0.6,0.8,1.4,1.6,1.4,2.8 c-1-0.1-1.4-1.6-3.1-1.1c1.4,3.3,2.5,6.7,4.1,9.8c0.7,1.4,2.1,1.3,2.4-0.7c1.2,0.3,1.1-0.7,1.4-1.3c0.9-1.8,1.2-3.7,2.2-5.5 c1.3-2.3,2.9-4.1,5.1-5.5c1.6,1,1.6,2.5,1.3,4.1c-1.6-0.1-0.6-2.6-2.3-2.1c-1.3,0.4-1.4,1.8-2,2.9c-1.8,3.2,1.4,3.2,2.7,4.4 l0.2,0.1c0.5,1-0.2,1.9-0.4,2.8c-0.3,0.4-0.6,0.7-0.9,1.1c-1.6,1.6-2,2.6,0.2,4.6c3.3,3,5.9,6.9,9,10.3c2.2,2.5,5.8,2.1,8.6,3.5 c1,0.5,1.2-0.8,1.5-1.6c1.5-4.9,1.4-9.8,0.3-14.8c-1.3-5.8-3.4-11.3-5.7-16.7c-0.3-0.7-0.7-1.1,0.1-1.6c0.6-0.4,0.7,0.2,0.9,0.7 c4.3,8.2,7.3,16.9,9.2,26c0.2,1,0.1,2,0.1,3.2c1.2,0.2,1-2,2.3-1.4c1,0.5,0.6,1.7,1.1,2.5c1.4,2.3-0.1,5.2,1.7,7.4 c-1.3,0.6-1.9-1.4-3-0.5c-0.6-0.9-1.3-0.4-2.2,0.2c0.9-0.1,1.6-0.2,2.2-0.3c0.6,1.8,2.4,1.5,3.6,1.9c1.1,0.4,2.1,0.5,2.2,1.9 c-0.4,0-0.7,0.1-1.1,0.2v0.4c0.6,0.3,0.8-0.2,1.2-0.5c0.2,0.4,0.3,0.8,0.5,1.3c-1.6,0.8-2.2,3.1-4.4,2.9c-0.3,0-1.2,0.5-1,1.2 c0.2,0.4,0.9,1.1,1.3,1c2.9-0.4,3.7,2.1,5.3,3.6c-1.3,0.9-2.9,1.3-3.5,3.1c-0.2,0.8-1.2,1.3-2.1,1.3c-4.1,0-7.9,2.2-12.1,1.9 c-3.6-0.2-6.5,2.8-10.2,2.6c-0.9-0.1-1.7,0-2.6,0c-0.6,0-1.3,0.1-1.2,0.8c0.3,4.6-3.5,6.6-6,9.3c-3.1,3.5-5.8,3-8.4-1 c-1.2-1.9-3.1-2.2-5-2.3c-1.6,0-1.2,1.8-1.1,2.4c0.3,1.6,0,2.9-0.5,4.4c-0.6,1.6-0.9,3.4,0.2,4.9c1.2,1.6,0.5,2.7-0.8,4 c1.1,0.3,1.9,0.6,2.4,1.7c1,1.7,2.4,2.6,4.5,1.7c1.3-0.5,5.1,1.5,5.7,2.6c0.2,0.4,0.1,0.7-0.1,1.1c-0.3,0.6-0.6,0.3-1.1,0.3 c-1,0-2.1-1.4-2.8-0.4c-0.8,1.2,1.3,1.3,1.5,2.3c0.1,0.5,0.6,0.9,1,1.4c-3.1,3.5-7.2,4.8-11.6,5c-2.2,0.1-4.6-0.1-5.9-2.6 c1-3.3-0.4-6-2.1-8.6c-2.5-3.8-4.9-7.5-4.4-12.4c0.1-1-0.6-2.2-1-3.3c-0.1-0.4-0.3-0.9-0.9-0.8c-1.3,0.1-4.2,3-4,4.2 c0.3,1.5,0.2,3,0.8,4.5c1,2.3,1.2,4.7,0.2,7.2c-0.5,1.3-0.4,2.9-1,4.4c-0.9,2.5,1.2,5.7,3.8,6.8c-0.2,1.1,0,2,0.7,2.9 c1,1.3,1.3,2.9,1,4.5c-1.9,0.3-3.8,0.7-5.6,1c-0.6-0.1-1,0.1-0.8,0.8l0,0c-0.9-0.1-2-0.5-2.6-0.2c-2.4,1.3-5,0.5-7.5,0.8 c-1.7,0.2-2.4-0.7-2-2.5c0.3-1.4,0.6-2.8-0.1-4.2c1.4-2.6,3.1-5.1,2.5-8.3c-0.5-3.1-0.7-6.4-1.8-9.2c-3.1-7.6-3.4-6.8-9.8-5.2 c-0.5,0.1-0.9,0.3-1.4,0.5c-5.5,2.4-11,4.3-17.1,3.6c-0.8-0.1-1.8-0.1-1.6,1c0.3,2.4,0.4,4.9,1.3,7.2c1.4,3.7,4.8,5,8.5,5.2 c2.9,0.2,4.6,2.2,5.5,4.3c0.9,2.1-1.9,2.3-3.1,3.5c-0.1,0.1-0.1,0.1-0.2,0.2c-4.4,2.6-9.1,3.7-14.2,2.8c-0.5-0.7-1.3-1.5-1.3-2.2 c0.1-4.8-3.6-6.9-6.7-9.3c-3.3-2.6-6.6-4.8-5-9.8c0.2-0.6,0-1.3-0.2-2c-0.3-1.2-0.9-1.8-1.9-0.4c-1.8,2.4-4,2.9-6.9,1.1 c2.9,4.5,1.4,9,1.1,13.5c-0.2,2.5,0.2,5.4,2.5,7c1.9,1.4,2.6,3.2,2.9,5.3c0.2,1-0.4,1.6-1.2,2.1c-4.1,2.8-8.9,3.5-13.6,4.4 c-1.7,0.3-2.9-0.7-3.2-2.5c0.1-1.9,0.5-3.8,1.8-5.3c2.3-3,1.6-6.1,0-8.8c-1.5-2.6-3-5.1-3.4-8.1c-0.1-0.9-0.4-1.4-1.5-1.7 c-1.5-0.5-3-1.8-2.4-3.4c2-5.6-1-9.6-3.9-13.6c-1.6-2.2-2.3-4.9-4.5-6.8c3,4.3,3.2,9,2.2,14.3c-2.5-2.6-3.7-5.4-3.4-8.7 c0.3-2.9-0.1-5.7-1.1-8.4c-1.2-3.3-1.2-6.8-1.2-10.2s0.2-6.7,0-10.2c-0.3-4.3,1.3-8.7,3.7-12.5c0.4-0.7,0.7-1.2,0.8-2 c0.6-5.6,2.9-10.4,8.3-12.7c4.7-2,9-5.3,14.1-6c5.2-0.8,10.4-1.2,15.6-0.4c1.9,0.3,3.7-0.1,5.4-0.5c2.6-0.5,4.9-0.7,6.9,1.5 c0.3,0.4,1.4,0,2.2,0c0.4,0.6,0.8,0.3,1.1,0c0.1-0.1,0.1-0.4,0.1-0.5c-0.4-0.4-0.8-0.3-1.2,0.1c-0.2-0.4-0.4-0.9-0.6-1.3l-0.1-0.1 c0.4-0.5,1.1-0.7,1.7-0.8c0.6,0.1,0.8,1.2,1.5,0.6C1018.2-6.1,1018.2-6.5,1017.9-6.8z M1081.5,17c-0.1,0-0.2,0-0.3-0.1 C1081.3,17,1081.4,17,1081.5,17c0.3,0.2,0.5,0.4,0.8,0.6c0-0.1,0.1-0.2,0.1-0.4C1082.1,17.1,1081.8,17,1081.5,17z M967.2,17.9 c-0.7,0.2-1.6,0.3-1.4,1.3c0.1,0.5,0.5,0.9,1,0.7C967.7,19.5,967.3,18.7,967.2,17.9c0.1-0.1,0.2-0.2,0.2-0.3 C967.3,17.7,967.3,17.8,967.2,17.9z M1106.9,32.6c-1,0.7-2.6,0.5-3.2,2c0,0.1,0.2,0.5,0.2,0.5C1105.3,34.7,1106.2,33.7,1106.9,32.6 c0-0.2,0.2-0.3,0.3-0.4c-0.1,0-0.2,0-0.3-0.1C1106.9,32.3,1106.9,32.4,1106.9,32.6z M1042.6,0.5c0.1,0.5,0.1,1,0.2,1.4 s0,1.1,0.6,1.1c0.3,0,0.8-0.2,1-0.5c0.6-0.8-0.3-0.9-0.6-1.2c-0.3-0.3-0.6-0.7-0.9-1c0-1.6-1.3-2.4-2.2-3.5 c-0.4-0.5-0.8-1.5-1.7-1.2c-0.8,0.3,0.4,1.4-0.4,1.9c-1.6,1.3-1.1,2.9-1.1,4.6c0,0.8,0,1.1,0.7,1.4c1,0.3,1.2-0.5,1.2-1.1 c0.1-0.8-0.3-1.7-0.2-2.5c0.2-1.2,0.8,0.1,1.2-0.1C1041,0.5,1041.9,0.4,1042.6,0.5z M965.6,27.6l-0.2-0.1L965.6,27.6 c0.1,0.5,0.4,0.9,0.4,1.4c0,1.2,0.1,2.6,1.5,2.5c1.1,0,1.8-1.6,2-2.5c0.3-1.4-1.4-1.1-2.2-1.5C966.9,27.3,966.2,27.6,965.6,27.6z M1045.6,6.7c1.2,1.6,2,3.3,2.6,5.2c-0.6,1,0.4,1.7,0.3,2.7c-0.1,0.7,1,1,1.5,0.7c0.7-0.5,0.2-1.1-0.4-1.6c-0.3-3.1-1.3-6.1-3-8.7 c-0.4-0.6-0.9-1.3-1.1,0.1C1044,5.7,1045,6.2,1045.6,6.7z M1085.5,15.3c2.1,0.4,3-0.2,2.8-2.2c-0.1-0.7-0.4-1.7,0.6-2.3 c0.7-0.3,0.6-1,0.1-1.4c-0.4-0.4-0.9-0.8-1.4-0.8c-0.7,0-0.9,1-0.8,1.3C1087.1,11.8,1086.2,13.5,1085.5,15.3z M1057.5,89.7 c-0.6-1.7-1.2-3.1-1.5-4.5c-0.3-1.6-1.3-0.7-1.9-0.5c-0.7,0.2-1.5,0.8-0.7,1.7C1054.5,87.6,1055.4,89.2,1057.5,89.7z M1096.1,30.4 c1.4-3.2-0.6-4.7-1.5-6.4c-0.2-0.5-0.9-0.7-1.5-0.3c-0.8,0.6-0.4,1.2,0.1,1.7C1094.3,26.7,1095.6,27.9,1096.1,30.4z M981.3,42.4 c0.3,1.8,0.3,2.9,0.6,3.9c0.8,2.6,2.4,3.2,4,1.4C983.7,46.8,982.8,44.8,981.3,42.4z M1097.8,31.2c-1.6,1.2-0.4,2.6-0.4,3.9 c0,0.7,1.1,1.1,1.8,0.9c1-0.2,0.4-1.1,0.3-1.6C1099.1,33.2,1098.8,32,1097.8,31.2z M1052.8,57c-0.3-1.4-0.5-2.6-0.8-3.8 c-0.1-0.6-0.3-1.4-1.2-1.2c-1.1,0.2-0.8,1-0.7,1.8C1050.2,55.5,1051.7,55.9,1052.8,57z M1055,46c-0.8,0.8-2.7,0.5-2.4,2.3 c0.1,0.6,0.7,1.1,1.3,0.8c1-0.6,2.4-1.1,2.6-2.4C1056.6,45.9,1055.8,45.7,1055,46z M1053.5,10.9c0.4,1,0.7,2,1.1,3 c0.3,0.9,1,0.6,1.7,0.5c0.2,0,0.4-0.2,0.7-0.4c-1.4-1.1-0.8-3.4-2.6-4.2C1053.3,9.3,1053.4,10.2,1053.5,10.9z M970.2,24.1 c-0.7-1.3-0.7-2.8-2-3.1c-1.4-0.3-2,1-2.8,2.3c0.9,0,1.6,0,2.2,0.1C968.3,23.4,969,23.7,970.2,24.1z M1074.5,77.3 c-0.3,0.3-0.7,0.5-0.8,0.8c-0.1,0.5,3.9,2.9,4.3,2.8c0.4-0.2,0.6-0.6,0.4-0.9C1077.5,78.6,1076,78,1074.5,77.3z M1118.6,38.3 c-2.3-2.7-3-2.8-5.7-0.8C1115,36.5,1116.7,38,1118.6,38.3z M1015.2,8.6c0.8-1.9,2.7-3.3,2.8-5.9C1015.5,4.2,1015.3,6.4,1015.2,8.6z M970.7,37c-0.3-1.9,0.3-3.3-0.9-4c-0.7-0.4-2.1,0.5-2,1.4C967.8,35.8,969.4,35.7,970.7,37z M1011.7,1.5c2.1-0.6,2.4,0.8,2.8,2.3 c0.3-1.3,2-2.1,1.3-3C1014.7-0.4,1013.3,1.5,1011.7,1.5z M1020.2,16.4c-0.3-1-1.9-2.5-2.5-2.3s-0.7,0.8-0.4,1.1 c0.9,0.8,0.9,2.3,2.2,2.5C1019.9,17.7,1020.4,17,1020.2,16.4z M977.1,36.4c-0.1-0.9-0.2-1.5-0.3-2c-0.1-0.6-0.1-1.3-0.1-1.9 c0-0.4-0.1-0.8-0.5-0.9c-0.2-0.1-0.6,0-0.8,0.2C974.9,32.4,975.7,35.4,977.1,36.4z M1113.4,30.7c-1.1-0.3-1.2-2.1-2.2-1.9 c-1.1,0.3-1.2,1.7-1.4,3.2C1111,31.2,1112.1,30.8,1113.4,30.7z M1023.4,0.5c-1.5,0.7-2.1,1.8-2.5,3c-0.1,0.3,0.3,0.7,0.8,0.6 c1.6-0.3,1.2-2,1.9-2.9C1023.5,1.1,1023.4,1,1023.4,0.5z M1019.1,86.1c0.2,1.3,1,2,2.4,2.6C1021.1,87.2,1020.1,86.7,1019.1,86.1z M1102.5,22.6c1.2,1,2.1,1.6,3.8,1.2C1105.1,22.6,1104.2,21.9,1102.5,22.6z M1058,18.4c0.7-0.8,1.3-1.5,0.6-2.3 c-0.4-0.4-1-0.3-1.3,0C1056.5,17.2,1057.8,17.5,1058,18.4z M1040.6,9.3c-0.3-0.3-0.6-0.6-1-0.4c-0.2,0.1-0.6,0.4-0.5,0.5 c0.2,0.7,0.7-0.1,1.1,0.1C1040.4,9.7,1040.7,9.7,1040.6,9.3z M1093.6,9c-0.4,0.2-0.9,0.4-0.8,1c0,0.2,0.3,0.6,0.4,0.6 c0.5,0,0.8-0.4,0.9-0.9C1094.3,9.3,1094,9,1093.6,9z M1039.6,7.7c-0.1-0.1-0.1-0.1-0.2-0.2c0,0.1-0.1,0.2-0.1,0.2 c0.1,0.1,0.2,0.2,0.3,0.2C1039.6,7.8,1039.6,7.8,1039.6,7.7z M1106.5,25.8c0-0.2,0.1-0.3,0.1-0.5c0-0.1-0.1-0.1-0.2-0.1 c-0.1,0.1-0.2,0.2-0.2,0.3C1106.2,25.6,1106.4,25.6,1106.5,25.8z M925.8-45.2c-2.1,0.5-2.5,1.1-2.1,3.2 c18.3,92,36.5,184.1,54.8,276.1c0.2,0.7,0,1.6,1.1,2c-0.2-0.9-0.3-1.6-0.4-2.3C961.3,143.5,943.4,53.3,925.5-37 c-0.4-1.8-0.7-3.6-1.1-5.4c-0.2-1.2,0-1.8,1.3-2c4.3-0.7,8.7-1.6,13-2.4c11.3-2.3,22.7-4.6,34.1-6.9c32.1-6.4,64.3-12.8,96.5-19.2 c2.6-0.6,4.5-0.2,5.9,2c0.5,0.2,1,0.3,1.5,0.6c20.5,13.8,41,27.5,61.6,41.2c3.8,2.5,7.7,5,12.1,7.9c-2.3-11.6-4.7-22.3-6.5-33.2 c-0.7-4.1-2.4-6.7-5.9-8.9c-7.8-4.9-15.3-10.3-22.9-15.4c-0.5-0.3-1.2-0.5-1.7-0.9c-0.6-0.4-1.2-0.9-1-1.6c0.1-0.7,0.9-0.6,1.4-0.7 c2.8-0.6,5.5-1.1,8.3-1.6c5-1,10-2,15-3c-0.1-0.3-0.1-0.6-0.2-0.9c-0.6,0.2-1.3,0.3-1.9,0.4 M1135.4-57c-0.2-2.5-6-6.3-8.8-5.9 c-0.7-1,1.2-1.2,0.6-2.3c-0.9,0-1.8,0.3-2.8-0.1c-0.6-0.3-1.2-0.6-0.7-1.1c1.4-1.4-0.3-1.5-0.8-1.9c-1.2-0.8-2.4,0-2.8,1 c-0.4,1.1-2.7,2.2-1.5,2.8c2,1,3.2,3.8,6,3c0.8,0.2,0,1.4,0.5,1.3c1.8-0.5,2.1,3.3,4.4,1.5c0.4-0.3,0.6,0.6,0.6,1 c0.4,2.4,1.9,2.8,3.9,2.1c-0.9,1.8,0.7,2.6,1.7,2.6c1.2,0,2.6-1.4,2.6-2.6C1138.3-57.1,1136.9-57.6,1135.4-57z\"></path><path fill=\"#03A7A1\" d=\"M938.4-47.1c11.4-2.3,22.7-4.6,34.1-6.9c32.2-6.4,64.4-12.7,96.5-19.2c2.5-0.5,4.4-0.1,5.9,2 c-11.2,2.3-22.3,4.6-33.5,6.9c-33.2,6.6-66.3,13.1-99.5,19.8C939.4-44,938.4-44.6,938.4-47.1z\"></path><path fill=\"#FCFDFD\" d=\"M1109.6-74c1.2-3.6,2.7-3.9,5.7-1.2c-0.4,0.3-0.8,0.7-1.2,1c-0.6,0.3-1,0.7-0.7,1.3c0.4,0.8,1,0.2,1.4,0.1 c0.6-0.2,0.8,0.2,1,0.7c-0.4,0.3-1.2,0.5-0.6,1.1s0.8-0.3,1.2-0.6c2.2-0.2,0.9,2,1.8,2.7c-1.1,0.7-1.3,2.9-3.3,2.2 c-0.5-0.2-1.1-0.3-1.5-0.6c-1.4-1.4-2.3-3.5-4.8-3.3c-0.6,0-1.4-0.7-1.4-1.6c0.1-1.1,0.9-1.3,1.8-1.2c0.3,0.5-0.2,1.5,0.7,1.6 c0.7,0,1.3-0.6,1.3-1.2C1111.3-74.2,1110.2-73.8,1109.6-74z M1126.7-62.9c-0.4,0.8-0.7,2-2,1.4l0.1-0.1c0.8,0.2,0,1.4,0.5,1.3 c1.9-0.4,2.1,3.3,4.4,1.5c0.4-0.3,0.5,0.6,0.6,1c0.4,2.5,1.9,2.8,3.9,2.1l-0.1,0.1c-0.3-0.6,0.1-0.7,0.5-0.8l-0.1,0.1 c0.1-0.6,0.5-0.9,1.1-0.8l-0.1,0.1C1135.2-59.5,1129.5-63.4,1126.7-62.9L1126.7-62.9z M1124.7-61.4c0.3-0.8,0.8-1.7,2-1.5v0.1 c-0.7-1,1.2-1.2,0.6-2.3c-0.9,0-1.8,0.3-2.8-0.1c-0.7-0.3-1.2-0.6-0.7-1.1c1.4-1.5-0.3-1.6-0.8-1.9c-1.2-0.8-2.4,0-2.8,1 c-0.4,1.1-2.7,2.2-1.5,2.8C1120.6-63.4,1121.9-60.6,1124.7-61.4L1124.7-61.4z M1132.6-52.5c-7.5-5.1-15-10.2-22.5-15.2 c-0.1,0.2-0.2,0.3-0.3,0.5c7.5,5.1,15.1,10.1,22.6,15.2C1132.4-52.2,1132.5-52.3,1132.6-52.5z M1135.4-57c0,0.5-0.1,1.2-1.1,0.8 l0.1-0.1c0.5,0.7-0.1,0.7-0.5,0.8l0.1-0.1c-0.9,1.8,0.7,2.6,1.7,2.6c1.3,0,2.6-1.4,2.6-2.6C1138.2-57.1,1136.9-57.6,1135.4-57 L1135.4-57z\"></path><path fill=\"#363435\" d=\"M994.8,217.1c-2.2,0.4-4.4-1.1-4.7-3.2c-0.3-1.9,1.3-4.1,3.3-4.4c2.3-0.4,4.4,1,4.8,3.1 C998.6,214.7,997.2,216.7,994.8,217.1z M997,212.7c-0.6-1.5-1.7-2.4-3.4-2s-2.4,1.7-2,3.3c0.4,1.5,1.6,2.2,3.1,1.9 C996.3,215.6,997.1,214.4,997,212.7z M1007,214.2c-0.2-1.6-2.8-1.8-1.8-3.9c0.5-0.8-0.1-1.6-0.9-2.1c-1-0.6-2-0.7-3-0.1 c-0.9,0.5-0.6,1.5-0.4,2.3c0.1,0.7,0.2,1.4,0.4,2c0.4,1-0.3,2.9,1.2,2.8c1.3-0.1-0.4-1.9,0.5-2.7C1004.7,212,1005.1,215,1007,214.2 z M1026.4,206.7c0.5-1.2,1.1-2.3,1.6-3.4c-0.2-0.3-0.3-0.5-0.5-0.7c-1.3,2.9-3.1,2.7-5.4,1.4c2,1.9,3.8,3.7,4.2,6.4 C1027,209,1025.8,207.9,1026.4,206.7z M1020.6,208c0-1.1,0-3.4-1.1-3.1c-1.6,0.4-0.3,2.3-0.1,3.4c0.7,4.1,1.1,4.3,5.7,2.1 C1022.6,210.2,1020.6,210.6,1020.6,208z M1015,212c0.1,0.4,0.3,0.7,0.8,0.6s0.7-0.4,0.5-0.8c-0.7-1.9-0.5-4.1-1.9-5.9 C1013.8,208,1014.7,210,1015,212z M1006.7,208.1c0.1,0.9,0.2,1.7,0.5,2.5c0.5,1-0.4,2.6,1.4,2.9c0-1.2,0.4-2.6-0.1-3.5 c-0.5-0.8,0-2.1-0.8-2.4C1006.7,207.4,1006.7,207.9,1006.7,208.1z\"></path></g><g id=\"book3\"><polygon opacity=\"0.8\" fill=\"#37AA3C\" points=\"457,-182.4 616.7,-145.1 566,67 406.2,31 \"></polygon><polygon fill=\"#F2F2F2\" points=\"567.8,64.2 409.7,29 459,-182.1 617.1,-146.9 \"></polygon><path fill=\"#04A7A7\" d=\"M563.2,10.9c-1-0.2-2-0.4-3-0.6c-41.6-9.7-83.1-19.4-124.7-29.1c-1.4-0.3-1.6-0.8-1.3-2.1 c3-12.8,6-25.6,9-38.4c0.3-1.3,0.7-1.6,2-1.3c18.1,4.3,36.3,8.5,54.4,12.7c0.6,0.1,1.2,0.2,1.7,0.4c1.6,0.3,3.2,1.3,5,0.5 c0.2,0.1,0.2,0.7,0.6,0.2l0.1,0l0.1,0c0.5,1.4,1.8,0.9,2.8,1.2c1.3,0.6,2.8,0.2,4,1c0.9-0.3,1.7,0.5,2.6,0.3 c0.2,0.2,0.5,0.4,0.7,0.5c0.7,0.7,1.6,1,2.5,1.2c0.1,0.1,0.2,0.2,0.3,0.2c0.1,0.2,0.3,0.4,0.4,0.6c0.8,0.9,2,1.4,2.9,2.1 c-0.2,0.6,0,1.1,0.3,1.6c0,0.2,0.1,0.4,0.1,0.6c0.3,2.3,0.6,2.5,2.4,1.6c0.7-0.3,0.8-0.1,1,0.5c0.3,1.5-0.2,2.9-0.8,4.5 c2.4-2,2.9-3.8,1.9-6.1c-0.1-0.5-0.2-1-0.9-1.1c0-1-0.5-1.7-1.3-2.2c-0.3-0.4-0.5-0.8-1-0.9c0-0.3-0.3-0.4-0.5-0.4 c0-0.6,0.3-0.6,0.7-0.5c0.8,0.2,1.6,0.3,2.5,0.5c2.2,0.5,4.4,1,6.6,1.6c0.4,0.1,0.8,0.2,1.2,0.3c4.5,1.1,9,2.1,13.5,3.2 c0.3,0.1,0.6,0.2,0.8,0.3c0.1,0.2,0.2,0.3,0.3,0.5c-0.4,1.1-0.2,2.1,0.5,3.1c0.1,0.6,0.3,1.1,0.4,1.7c0,0.1-0.1,0.2-0.1,0.3 c-0.5,1.6-0.1,3,1,4.2c-0.5,1.1-0.8,2.1,0.3,3c0,0.2,0.1,0.3,0.1,0.5c0.1,1,0.3,2,0.3,3c0,0.6-0.3,1.6,0.6,2.1c0,0.1,0,0.1,0,0.2 c-0.7,0.9,0.6,1.6,0.2,2.4c0,1.1,0.1,2.2,0.8,3.2c0.1,2,1.7,2.8,3,3.9c0.2,0.2,0.4,0.4,0.5,0.6c0.1,0.4,0.3,0.8,0.8,0.7 c0.1,0.2,0.3,0.4,0.4,0.6c0.3,1,0.7,2,0.8,3c0.2,1.2,0.7,2,1.6,2.7c-0.6,0.3-0.7,0.8-0.4,1.4c0.1,0.3,0.1,0.7,0.2,1 c-0.2,0.4,0,0.7,0.4,0.8c0,0.1,0,0.2,0,0.2c-0.6,0.5,0.3,0.7,0.2,1.1c-0.1,0.3-0.2,0.6,0,0.9c0,0.1,0,0.2,0,0.3 c0,0.7,0.2,1.4,0.8,1.8c-0.2,0.3-0.2,0.6,0.2,0.8l0,0c0,0.2,0,0.4,0,0.6C562.5,9.4,563.3,10.1,563.2,10.9z\"></path><path fill=\"#CECCCD\" d=\"M457.3-45c0,0-0.1,0.1-0.1,0.1\"></path><path fill=\"#333132\" d=\"M438.1,17.8c0.3-1.4,0.7-2.8,1-4.2c0.1-0.5,0.3-0.9,0.8-0.7c0.8,0.3,2,0,2.3,0.8c0.3,0.8-0.6,0.3-1,0.3 c-0.5,0-1.1-0.6-1.4,0.4c-0.3,1.1,0.5,0.9,1.1,1.1c0.2,0.1,0.4,0.1,0.6,0.2c0.1,0.1,0.2,0.2,0.2,0.4c-0.5,0.5-0.9,0.1-1.3,0.1 c-0.6-0.2-1-0.1-1.1,0.6c-0.1,0.7,0.2,0.9,0.7,0.9c0.3,0,0.5,0.1,0.8,0.2c0.2,0.1,0.6,0.1,0.5,0.5c-0.1,0.4-0.3,0.4-0.6,0.3 c-1.2-0.3-2.4-0.5-3.5-0.9c-0.8-0.2-0.5-1.2-0.9-1.8c-0.3-0.4-0.3-1-0.9-0.9c-0.5,0.1-0.3,0.7-0.5,1.1c-0.2,0.4,0,1.1-0.8,0.9 c-0.6-0.2-0.2-0.7-0.1-1.1c0.2-1,0.5-2,0.7-3c0.2-1.1,0.6-1.5,1.7-1c1,0.4,2,1.3,1.3,2.1C436.2,15.8,437.4,16.7,438.1,17.8z M436.8,13.9c0.1-0.6-0.2-0.8-0.7-0.9c-0.7-0.2-0.7,0.3-0.7,0.7c-0.1,0.3-0.3,0.8,0.3,0.8C436.2,14.6,436.6,14.4,436.8,13.9z M429.7,10.6c1.5,0.3,2.6,1.9,2.3,3.3c-0.3,1.6-1.9,2.6-3.5,2.2c-1.6-0.4-2.5-1.8-2.2-3.4C426.7,11.2,428.2,10.2,429.7,10.6z M431.1,14.1c0.3-1.5-0.2-2.3-1.4-2.7c-1.2-0.3-2.4,0.3-2.5,1.5c-0.2,1.2,0.3,2.1,1.6,2.4C430,15.6,430.8,15,431.1,14.1z M453.5,17 c-0.9,1-1.4,0.5-1.8-0.5c-0.3-0.7-0.3-0.7-1.3-0.8c1,1.6,1.7,3.2,0.8,5c-0.1,0.2-0.1,0.5,0.2,0.6c0.4,0.1,0.6-0.1,0.7-0.4 c0.1-2,1.3-3.1,3.1-4.2C454.3,16.2,453.9,16.6,453.5,17z M443.8,17.6c-0.6,1.4-0.2,2.2,1.4,2.3c0.2,0,0.4,0.1,0.6,0.1 c0.3,0,0.7,0.3,0.8-0.2c0.1-0.5-0.3-0.5-0.6-0.5c-1.7,0-1.4-1-1.1-2.1c0.2-0.7,0.4-1.5,0.5-2.2c0.1-0.3,0.1-0.7-0.3-0.8 c-0.4-0.1-0.5,0.3-0.6,0.6c-0.2,0.6-0.3,1.2-0.4,1.9C443.9,17,443.9,17.3,443.8,17.6z M446.8-68.1c-0.4,1.4-1.2,2.9-2.5,3.9 c3,1,3,1,3.7,0c-0.6,0.1-1,0.5-1.6,0.3c-0.6-0.1-0.9-0.4-0.6-0.9c0.9-1.4,1.4-3,2.8-4.1C447.9-69.2,447.2-69.6,446.8-68.1z M448.3,15c-0.3,1.3-0.5,2.6-0.9,3.8c-0.4,1.2,0,1.8,1.2,1.8c0.2,0,0.4,0.1,0.6,0.1c0.4,0,0.9,0.5,1-0.2c0.1-0.5-0.5-0.5-0.8-0.5 c-1.5-0.1-1.5-0.8-1.2-2c0.3-1,0.7-2,0.5-3C448.6,15.1,448.5,15,448.3,15z M443.8,14.6c0.1-0.3,0.1-0.6-0.2-0.7 c-0.4-0.1-0.6,0.2-0.7,0.5c-0.3,1.4-0.7,2.8-1,4.2c-0.1,0.3,0.1,0.5,0.3,0.6c0.3,0.1,0.5-0.1,0.6-0.4c0.2-0.7,0.3-1.5,0.5-2.2 C443.5,15.9,443.7,15.2,443.8,14.6z M471.9-57.6c-0.3-0.4,0.3-0.5,0.3-0.7c0.1-0.8-0.6,0.3-0.7-0.3c1.7-3.1,1.7-3.1,0.2-3.3 c1,0.9,0,1.5-0.3,2.1C470.3-58.1,470.2-58.1,471.9-57.6L471.9-57.6z M453.9-62.6L453.9-62.6c-0.7,0-1.2-0.1-0.7-1.1 c0.3-0.6,1-0.9,1.1-1.6c-0.6-0.2-0.9,0.4-1.4,0.4l0,0c0,0.1-0.1,0.2-0.2,0.2l0,0c-0.1,0.2-0.1,0.5-0.2,0.7 c-0.4,0.6-0.6,1.2-0.1,1.7C452.9-61.8,453.5-61.9,453.9-62.6L453.9-62.6z M459.1-63.3c0.2-0.4,0.7-1.4-0.1-1.6 c-0.9-0.3-0.4,0.6-0.6,1c-0.1,0.5-0.5,0.9-0.8,1.4c-0.2,0.4-0.7,0.8-0.5,1.8C458-61.8,458.7-62.5,459.1-63.3z M473.6-58.9 c-0.8,0.3-0.4,1.1-0.7,1.6c0,0,0,0,0,0c1.2,0.1,2.1,0.5,2.3,1.9c0.7-0.4,0.6-0.9,0.2-1.4c-0.2-0.3-0.7-0.6-0.3-1.1l0,0 c-0.4,1-0.9,0.1-1.1-0.1c-0.5-0.4,0.2-0.5,0.3-0.8c-0.1-0.2-0.2-0.3-0.3-0.5C473.9-59.1,473.8-59,473.6-58.9z M464.5-62.2 c-0.5,0.5-0.8,1.2-1.2,1.9c-0.1,0.3-0.2,0.6,0.3,0.7c0.3,0.1,0.8-0.2,0.8-0.3c-0.5-1.2,0.6-1.7,1-2.4c0.5-1.1,0.2-1.3-1-1.4 C464.8-63.1,465-62.7,464.5-62.2z M463-63.4c0.1-0.4,0.1-0.6-0.3-0.8c-0.3-0.1-0.7,0.1-0.7,0.2c0.3,1.5-1.2,2.2-1.1,3.6 C461.8-61.2,462.7-62,463-63.4z M466.5-59.2c0-1.2,1-2,1.5-3c0.1-0.2,0.2-0.5-0.2-0.7c-0.3-0.1-0.9,0-0.8,0.2 c0.1,1.2-0.9,1.9-1.2,3c-0.1,0.2-0.2,0.5,0.3,0.7C466.2-59,466.5-59.1,466.5-59.2z M455-61.6c0.3,0.1,0.6,0,0.6-0.3 c0.2-1.1,1-2,1.5-3c0.1-0.2,0.3-0.5-0.1-0.6c-0.3-0.1-0.5,0-0.6,0.3c-0.4,1-1.4,1.6-1.4,2.5C454.8-62.1,454.5-61.8,455-61.6z M470.3-61.8c0.1-0.3,0.1-0.6-0.3-0.6c-0.2,0-0.4,0-0.6,0c-0.5,0.2-0.2,0.4,0,0.6c0.3,0.3-0.1,0.5-0.2,0.8 c-0.3,0.8-1.1,1.4-1.2,2.6C469.4-59.2,469.8-60.5,470.3-61.8z M448.7-63.9c0,0.9,0.7,1.1,1.6,1c-1.4-1.1-1.3-1.6,0.5-3.7 C449.1-66,448.6-65.1,448.7-63.9z M456.4,16.8c-0.6-0.1-0.9,0.2-1,0.7c-0.1,0.6,0.2,1,0.7,1.1c0.5,0,0.9-0.4,1.2-0.7 C457.2,17.3,457,16.9,456.4,16.8z M476.5-60.8c-0.5,0.9-0.3,2-1.4,2.2c0,0.2,0,0.4,0,0.7l0,0C476.2-58.5,477.2-59.1,476.5-60.8z M433.7,11.6c-0.4-0.1-0.7,0.1-0.7,0.4c0,0.4,0,1.2,0.2,1.3c0.5,0.2,0.6-0.4,0.7-0.7C434.1,12.1,434.2,11.7,433.7,11.6z M474.9-61 c-1.4,0.6-1.4,0.6-1.3,2.1c0.1-0.1,0.3-0.2,0.4-0.4C474.3-59.8,474.6-60.4,474.9-61z M453.9-62.6L453.9-62.6 c0.3,0.1,0.5,0.1,0.6-0.1c0-0.1-0.1-0.2-0.1-0.2 M471.9-57.6c0.2,0.8,0.7,0.3,1,0.3c0,0,0,0,0,0C472.6-57.5,472.3-57.5,471.9-57.6 C471.9-57.6,471.9-57.6,471.9-57.6z M450.9-63.3l0,0.2L450.9-63.3L450.9-63.3z M471.8-56.9l-0.2,0L471.8-56.9L471.8-56.9z M475.2-61.2c0,0.1-0.1,0.1-0.1,0.2c0,0,0,0.1,0.1,0.1c0-0.1,0.1-0.1,0.1-0.2C475.3-61.1,475.3-61.1,475.2-61.2z M452.9-64.8 c-0.2-0.2-0.3-0.1-0.2,0.2C452.8-64.7,452.9-64.7,452.9-64.8z\"></path><path fill=\"#353335\" d=\"M563.3,10.9c-0.2-0.9-2.6-7.5-1.5-7.9c2.6,1.6,4.5,0.7,7,0.4c4.9-0.6,2.4,2.9,5.9-4.1 c-0.6,0.1-0.8,0.4-0.6,1c0.1,0,0.4-5-1.3-3.2c1-4.5,6-0.4,5.1-4.7c-0.7,0.1-1.4,0.1-2.2,0.1c0-0.8,0.2-1.5,0.7-2.1 c-5.9-6.1-4.5,5.7-4.2,3.7c-0.3,2,1.7,4.3,1.1,6.1c-0.5,1.6-3.3,2.5-3.7,0.2c0.1,0.8-0.1,1.5-0.8,2.1c-0.5-0.7-0.7-1.4-0.5-2.3 c-0.2,1.6-1,1.8-2.5,0.6c-0.1,0.9-0.4,1.7-0.9,2.4c-0.4-0.1-3.6-5.5-3.6-2.1c-0.1-4.2-10.5-15.1-7.8-18.5c4.5,3,8.9,2.5,12.4,5.8 c1.2-2.9-2.5-9.1-6.3-7.1c-0.8,1.7-2.5,0.6-3.7,1.2c-1.6-0.3-1.2-5.1-2.4-0.1c-2.6-2.4-3.4-13.5-1-16.3c0.4,2.1,2.4,0.5,2.9,2.4 c0.7-0.6,0.8-1.3,0.3-2.1c0.7,0.3,1.5,0.4,2.3,0.2c0.5-0.6-7.6-2.5-7.8-2.6c1.4,1.2-0.8-3.4-0.7-2.3c0-0.5,10.2-0.9,12.8-1.8 c0-1.1-4-4.5-4.9-2.3c0.4,0.7,1,1.3,1.7,1.8c-2.4,1.9-10.3-2.3-11.5-4.7c0.4-0.7,1-1.1,1.8-1c0.3-1.4-3.3,0.1-3.1-2.1 c2.1,0.1,0.7-1.5,1.4-2.7c0.8,0.4,1.2,1.1,1.1,2c0.4-1.9,3.6-3.7-1.9-6.7c0.6,2.1-0.1,3.5-2,4.3c-2.3,0.1-0.8-6-2.2-6.3 c-1-0.2-1,3.5-0.8,4c-1.6-1.3-6.1-1.5-5.1-4.8c-2.6,0.8-4.8-2.3-2.8-6.1c-1.3,2.3,0.6,3.2-0.3,4.1c-0.9,0.9-4.1-0.7-6.4,0.3 c-2.8,1.2-4.7,3.2-6.1,6.5c-3.7,8.4-0.4,5.6,7,7.9c-7.3-0.8-2.5-0.2-2.5,2.2c-0.1,2.7-6.3-1-6.7-1.2c-4.1-1.9,0.5-4.1-2.2-5.7 c-0.2,1.5-3.6,3.1-3.1,4.7c-0.1-0.3,4.1,0.9,2.9,1.6c-2.5,1.6-12.4-2.6-15.1-3.1c1.7-4.9,13.3-0.1,16.4-7.7c3.8-9.2-4-4.9-10.1-7.4 c0.4,0,10.5-2.1,6-4.4c-0.4-0.2,0.6,1.9-0.3,2.1c-5.6,0.9-2.8-9.7-1-4.8c-2.9-7.9-6.6-8.5-11.2-15.3c-4.8-7.1-7.4-17.6-9.2-25.7 c-1.2-5.4-2.3-8.9,0.2-14.4c2.8-6.1,6.3-5.4,3.2-11.7c-1.4-2.9-9.6-7.2-12.8-5.6c4.6-11.5,25.6-10.2,31.7-1.7 c3.6,5,4.7,14.5,6,20.2c1.3,5.5,0.4,3.1,3.8,5.7c-0.7,0.2-1.3,0.1-2-0.3c0.3,0.2,6.6,0,9.1,3.6c0.4,0.6,1.4,5.4,1.4,6.1 c0.1-0.1,2.6-2.4,2.2-2.9c3.9,1-1.6,2.6-2.3,4.1c5.4-2-0.2,1.6,1.5,1.2c0.5-1.2,3.9,1.8,5.9-0.1c1.4,2.2,0,1.4-0.6,3.1 c1.8,0.6,2.2,0.3,1.2-0.8c2.2,0.3,10.9,10.6,7,11.9c0.7,1.1,3.9-1.7,4.3,0.8c0,0.1-1.6,4.1-0.1,5.4c1,0.2,1.4-0.2,1.4-1.1 c2.1,0.7,1.8,7.9,1.2,7.9c-0.1,0-1.5-3-2.5-3.1c-1.2-0.1,5.6,8.3,6.3,6.9c0.3,1.7-1.2,3.2-1,4.3c0.3,1.6,3.5-0.3,3,2.5 c-2.6-0.5-6,6-6.7,5.8c0.9,0.3,9.5-4.4,8.9-1.2c-0.6,0-1.2-0.1-1.9-0.2c2,2.4-6.7,3.5-6.2,8.7c0.1,1.4,9.7,13.3,13.6,12.3 c-0.2-0.5-1.6-5.3-1.1-5.4c-0.8-0.4-5.7-4.4-5.6-5.5c0.2-1.4,5,1.6,5.2,1.7c4.9-2-3.2-2.6-3.2-2.6c-1.1-0.5,1.9-4.2,2.6-2.5 c1.1,2.4,1.9,5,2.9,7.3c0.5,1.2,6.6,12.7,5.2,13.1c-0.6,0.2-8.8-0.4-5.6,2.1c-1.4-1.1,3.6-1.9,3.7-1c0-1.7-0.6,3,0,1.9 c-1,0.1-1.6-0.4-1.8-1.3c-0.3,1.4-3.1,1.4-2.9,2.9c0.5,3.5,2.4,1.7,3.7,4.1c0.3,0.6,2.4,2.2,2.5,2.1c1.8,1.4-0.8,1.3-1,2.3 c0.8,0.7,1.3,0.4,1.5-1c0.8,1.8,5.1,9.1-0.6,5.1c-0.5,5.4,3.2,2,4.7,5.3c1.6,3.4,2.5,9.9,2.8,13.6c0.4,5.7-2.5,7.4-3.5,12.4 c-0.4,1.9,0.6,5.4,0.4,7.3c-0.1,0.6-2.6,3.6-2.7,1.5c-2.1,2.8,4.4,7.8-2.5,4.3c-2.9-1.5-7.2-9.1-5.5-12.5c1.3,0.8,2.7,1.1,4.2,0.9 c1.7-1.2-3.3-4.2-3.6-4.3C570.4,9.2,560.7,11.4,563.3,10.9C563.1,10.1,564.1,10.7,563.3,10.9z M514.5-111.6c6.8-6.2,2,4,2.5,4.9 c0.8,0.1,3.9-3.6,4.4-4.1c-3.2,1.1-1.3-1.9,0.1-0.9c-0.3,0.5-0.7-4.2-0.1-3.6c-1.8-1.9-7.7,2.2-7.3,2.1c-0.9-0.1-1.8-0.3-2.6-0.7 C511.8-113.6,513.9-111,514.5-111.6C515.7-112.7,514.2-111.3,514.5-111.6z M513.1-122.8C512.5-123.3,513-122.7,513.1-122.8 C513-122.9,513.1-122.9,513.1-122.8z M529.5-66.4C529.1-66,529.2-66.5,529.5-66.4C529.4-66.4,529.4-66.5,529.5-66.4z M561.1-45.4 c0,0-0.5-1.3-0.8-0.3C560.1-44.5,562.1-45.3,561.1-45.4z M510.1-135.4c-0.1,0.5-0.5,3.3,0.3,0c-0.3-0.5,0.5,2.5,0.6,1.9 c0.3-1.9,2.1-4-0.6-4.4C510.8-136.9,510.7-136.1,510.1-135.4C509.9-134.6,510.9-134.7,510.1-135.4z M580.6-2.8 C581.1-2.1,580-3.5,580.6-2.8C580.6-2.7,580.5-2.9,580.6-2.8z M510-136.4C510.4-135.4,509.3-137.4,510-136.4 C510-136.3,509.9-136.5,510-136.4z M545.7-72.8c0.3,0.5,0.3-1.2-0.2-1.1C544.3-73.6,545.5-72.4,545.7-72.8z M554.5-45.6 c0.3,0.7,0.8,1.2,1.4,1.6c-3.5-8.1-2,0-6.1-2c1.5,0.7,4.7-1.9,5.9-0.2C556.1-44.4,555.6-44.2,554.5-45.6 C554.1-46.4,554.7-45.5,554.5-45.6z M557-43.9C556.3-44.2,556.9-44.2,557-43.9C556.8-44,556.9-44.1,557-43.9z M512.6-132.4 c-0.3,0.7,0.6-1.6,0.3-2.3C511.8-134.1,511.7-133.3,512.6-132.4C512.3-131.7,512.3-132.7,512.6-132.4z M502.7-91.2 c1,2.7,1-1.9,1.2-1.6c-0.6,0.5-0.9,0.2-0.9-0.6C502.7-92.6,502.6-91.9,502.7-91.2C502.8-90.7,502.7-91.2,502.7-91.2z M498.4-123.6 c-0.2,1-0.8,1.5-1.8,1.5c-1.3,2.5,5.2,1,2.3,0.4c0.8,0.2,1.6,2.9,3.2,1.1c0,0-1.6-1.2-1.8-1.2c0.8,0,0.9-0.6,0.1-2 c1.4,1.8,3.6-3,1.2-3.8c-1,0.4-0.8,0.7,0.5,0.8C502.1-126.7,498.9-121.9,498.4-123.6C498.4-123.5,498.4-123.3,498.4-123.6z M513.7-134.2C513.5-136.5,513.4-134.4,513.7-134.2C513.7-134.5,513.9-134.1,513.7-134.2z M510.7-80 C510.3-80.5,511.1-79.3,510.7-80C510.7-80.1,510.8-80,510.7-80z M528.9-114.1c0.5,1.1,1.2,1.2,2,0.3c-0.2-0.7-4.4-4.5-6-2.8 c0.8-0.9,1.2,5.2,0.5,5c0.5-0.3,0.8-0.7,0.8-1.2c1.4,0.9,1.4,1.6,0.1,2.1c0.7,0.2,1.3,0,1.8-0.6c-0.5,0.8-0.2,5.1-4,4.1 c1.3-1.2,1.5-4.7-1.4-3.6c0.6,0.8,1.2,1.4,2.1,1.9c-1.4,0.3-2.7,0.9-4,1.6c0.5,1.3,1.9,2.5,2.9,3.6c0.5,2.1-4.8-2.2-4.1-2.3 c-1.4,0.2-0.8,4.4-3.8,3.3c-0.8-0.3-3-3.4-3.1-3.4c1,0.1,3.4,0.7,3.7,0.4c-0.9-1-1.8-1.9-2.7-2.8c-1.3,1.2-2.6-0.2-4.1,1 c0.6,3.1,6.5,3.2,3.6,6.3c-2.9,3.1-3-1.2-4.9-2.4c0.5,1.1,0.8,2.3,0.7,3.5c-0.4,0.2-3.7-0.5-3.7-0.5c-0.5,1.1,1.8,1.8-0.3,1.7 c1.7,0.2,11,7.9,11.6,2.3c-0.4,0.9-0.9,1.8-1.6,2.5c0.7,0.3,1.2,0.7,1.7,1.2c-0.5-0.9-6.7-1.1-7.1,0c1.4-0.4,6.6,1.9,8.3,2.3 c1.7,0.4,3.6,0.2,5.4,0.9c-1-0.3-1.9-0.5-2.9-0.4c3.7-2.9,9.4-2.6,13.4-5c1.9-1.2,1.4-2.8,1.9-3.1c1.1-0.8,7.1-1.9,7.5-2.7 c-4.7-3.7-9.3,2.8-10.6,3.4c0.4-0.2,3.1-3.7,3.9-2.3c1.3,2.3-8.1,6.4-9.9,5.5c0.2,0.1,4.1-3,4.2-3.3c-4.9,0.7,4.7-4.5,5.2-7 c-0.3,0.2-2,2.4-2.6,2.1c0.4,0.3-3-5.5-3.3-0.1c0.2-3-3.9-1.2-0.6-3.8c-0.9,0.5-2.5-1.2-2.3-1.4c1.7-1.7,4.2,0.2,5.5,1.2 C531.5-109.4,525.5-114.4,528.9-114.1C528.9-113.3,528.8-114.1,528.9-114.1z M502.3-104.1c0.5,0.7-0.6-2.3-0.3-1.9 C501.8-105.3,501.9-104.6,502.3-104.1C502.9-103.4,502-104.2,502.3-104.1z M500.4-107.3c0.4,0.1,0.9,0.1,1.3,0.2 C500.5-107.6,500.1-107.7,500.4-107.3C500.8-107.2,500.4-107.2,500.4-107.3z M518.7-107.3c-0.7-0.3-1-0.3-0.8,0.3 C518.7-107.4,519-107.5,518.7-107.3C517.9-107.6,518.7-107.4,518.7-107.3z M567.6-41.7C569.2-41.2,566.9-42.9,567.6-41.7 C567.8-41.7,567.5-41.9,567.6-41.7z M527.7-76.7c-0.1-1.4-0.9-2-2.4-1.8c-0.2,0.9,0.1,1.7,0.7,2.4C526-76.1,527.4-76.7,527.7-76.7 C527.6-77.8,527-76.6,527.7-76.7z M549.6-48.4c-0.6-1.3-0.2,0.5-0.3,0.7C551.9-46.2,549.5-48.6,549.6-48.4 C549-49.7,549.8-48.2,549.6-48.4z M575.7-14.3c-0.6-0.5,0.1,0.9,0.4,1.1C576-13.5,575.9-13.9,575.7-14.3 C575.1-14.7,575.8-13.9,575.7-14.3z M515.4-111.1C514.6-111.5,516.1-109.5,515.4-111.1C515.3-111.1,515.5-110.9,515.4-111.1z M505.9-136.5c0.8,1,1.4,2.1,2,3.3c-0.9-0.7-1.7-0.6-2.4,0.3c1.4-0.6-0.2,1.4,0.8,1.5c7.5,0.2,0.1-7.3,0-7 C505.8-137,506.6-136.4,505.9-136.5C505.9-134.9,505.8-136.5,505.9-136.5z M508.1-123.2c0.5,0.7-0.1-1.8-0.4-2.2 C508-125,508-123.3,508.1-123.2C508.6-122.5,507.6-123.6,508.1-123.2z M513.8-123.3c0.6,0.8-0.2-1.7-0.6-1.6 C513.2-124.9,514-123.1,513.8-123.3C514.4-122.4,513.4-123.7,513.8-123.3z M506.2-123.3c0.1-0.6,0.2-1.2,0.3-1.9 c-0.7,1.5-0.7,3,0.1,4.4C505.5-130.3,507.4-122,506.2-123.3C506.4-123.9,506.2-123.2,506.2-123.3z M566-23.1 c0.2,1.4,0.3,1.3,0.4-0.2c0.9-0.1,4.3,3,5.5,1.4c-1.2-1.4-2.4-2.1,0.3-2.9c-0.1-0.5-0.3-1-0.5-1.5c-0.2,0.3-2.8,2.2-2.8,2 C568.1-28.3,565.3-24.9,566-23.1C566.1-22.7,565.7-23.9,566-23.1z M522.1-67.1c1.2,0.2,3.7-2.3,3.9-3.1 C526.4-71.5,521.3-64.9,522.1-67.1C522.6-67,522-66.9,522.1-67.1z M533.3-90.1c-1.1,1.2-4.9-1.5-3.9,1.8c-2-1.1-6-1.1-6.8,2.4 c-0.4,1.8,4.2,2.4,4.2,2.4c-0.4-1-3-1.7-2.1-4.1c0.5,0.1,1,0,1.5-0.2c2,5.7,5.8-1.6,10.7-0.8c-2.2,0.6-2.5-1.7-2-2.6 C535-91.1,533.3-90.4,533.3-90.1C532.2-88.8,533.2-91.1,533.3-90.1z M502.4-95.5c2.3,2.1,7,6.5,7.9,9.6c0.5-1.9-5.8-17-11.1-13.6 c0,1.5,3.5,1.1,3.6,1.3C502.9-97.5,502.6-96,502.4-95.5C503.1-94.8,503.1-97.1,502.4-95.5z M503.9-143.2c-0.4-0.5-0.9-0.9-1.5-1.2 C501.6-143,504.1-143.2,503.9-143.2C503.4-143.7,504-143.2,503.9-143.2z M510.1-124.1c-0.1-1.5,0,3.3,0,3.7 C511.4-124.8,510.2-123.6,510.1-124.1C510-125.6,510.4-123,510.1-124.1z M577.3,8.3c-0.7-0.4,1.2-3.7-0.9-2.7 c-0.5,1.2-0.5,2.4,0.2,3.6C577.9,7.7,577.6,7.5,577.3,8.3C576.6,7.9,577.5,8,577.3,8.3z M509.3-114c0.6-2.7,1.8,4,1.8,3.8 c-1,0.4-2,0.7-3,1C515.3-107,509.4-114.1,509.3-114C509.5-114.7,509.9-114.3,509.3-114z M526.4-91c-0.9-0.3-1.5,0-1.8,0.9 C524.6-89.4,527.3-90.7,526.4-91C525.8-90.5,526.5-91,526.4-91z M508-105.4c0-0.3,0.8-3.1-0.5-2.8 C505.7-107.8,507.9-105.5,508-105.4C508-104.5,507.7-105.8,508-105.4z M526-73.3c0.2-1.6-1.8-0.7-1.7-0.7 C525.2-73.6,526.4-72.7,526-73.3C526.2-74.9,526.5-72.6,526-73.3z M519.7-86.9c-0.1,1,0.4,1.5,1.4,1.6c-0.2-3.5-2.4-1.2-3.4-3.1 C518.4-86,519.6-86.9,519.7-86.9C520.1-85.4,518.8-87,519.7-86.9z M552.7-51.1c0-1.2-0.5-2.2-1.4-3c-2.1,0.5,2.3,4.8,2.3,5.1 C554-50.9,552.6-51.3,552.7-51.1C552.9-50.9,553.1-50.6,552.7-51.1z M514.2-67.8c0.4,0.2,2.9-1.5-0.6-3.2 C514.9-68.3,514.3-68.2,514.2-67.8C512.2-69.2,514.7-68.9,514.2-67.8z M546.6-85.2c-1.2,0.1-2.2,0.5-3.1,1.2 C544-81.7,546.8-85.3,546.6-85.2C546-85.3,546.6-85.2,546.6-85.2z M536.9-76.1c-1.5-0.4-1.5-1,0-1.9c-2.3-4.4-9,3.6-9.2,3.7 c0.2,0.1,5.1,3.5,4.1-0.1c-0.9,0.2-1.3-0.1-1.3-1.1c0.9-1.3,2-1.3,3.5-0.2c-3.2,1.9,0.5,8.7,1.5,7.6c0.7-0.8-2.1-4.4,0.8-4.4 c0.6,0,4.7,0.9,3.5,1c-1.3,0.1,2,2.7,2.7,2.8c2.7,0.3,5.4-2.8,8.2-3c-1.2,1.9-0.8,2.3,1.3,1.1c2.7-5.4-9.8,0.5-10-0.9 c0.6-0.2,5.2-6.6,5.3-5.7c0,1-0.2,2.1-0.5,3c0.8-0.6,8.3-2.3,8.2-2.5c-0.1-1.7-4.5,0.6-4.8,0.4c-2-1.1,0.2-2.6-0.2-4.2 c-0.1-0.3-11.1,6.2-12.4,4.9c1.1-1,2.3-1.8,3.6-2.5C540-79.4,536.9-76,536.9-76.1C536.6-76.4,537.3-77.1,536.9-76.1z M519.3-82.6 c1.2,1.4,3.4,4.3,4.1,4.6c2.2-0.4,0.3-4.1,0.3-4.1c0.8-0.1-7.6-4.1-7.9-2.8C515.5-83.7,519.5-82.1,519.3-82.6 C519.9-82,519.3-82.8,519.3-82.6z M512.9-80.8c0.5,0.6,4.3,6.5,3.4,1.6C513.7-78.3,514.3-80.7,512.9-80.8 C511.6-82.4,514.5-80.7,512.9-80.8z M565.3-21.7c-0.8-1.4-8.9-7.5-11-7.7c-1.3-0.1,0.4,6.3,1,6.9c0.5,0.4,3.4-2.1,4,2.8 c0.6-1.3,1.5-2.3,2.6-3.2C562.3-19.8,565.2-21.6,565.3-21.7C564.9-22.4,564.9-21.1,565.3-21.7z M575.8,11c0.2-0.7,0-1.4-0.5-2 c0.1,1-2.9,2.3-2.8,3.9C572.7,14.7,575.7,11.8,575.8,11C575.8,11.1,575.7,12,575.8,11z M509-128.3c0.9-1.7-3.9-1.8-2.4,1.8 c1.2-3.2,2-2.7,2.3,1.4C510.6-127.8,509.2-128.1,509-128.3C509.5-129,510-127.2,509-128.3z M541.5-64.8c-1.5-0.1-1.5-0.7,0-1.7 c0.3,1.4,1.9,5.2,4,6.4c-0.2-7.8,3.8-2.7,6.9-5.4c1.4-1.2,6.8-5.7,1.2-5.1c-6.8,0.7-7.5,6.5-16.2,0.1 C536.5-68.9,539.7-62.5,541.5-64.8C541.2-65,541.6-64.9,541.5-64.8z M566.7-6.1c-0.4-0.5-3-2.8-3.4-2c0.2,1,0,1.5-1.7,1.8 c0.2,0,8.2,3.6,8.5,1.5C570.5-7.5,566.9-6.7,566.7-6.1C566.9-5.9,567-7.2,566.7-6.1z M569-12.8c1.8,2.4,3.7-1.2,5.1-3.4 c-2.2,0.3-1.9-2.9-3-2.7C568.7-18.5,568.7-14.3,569-12.8C570.3-11.1,568.9-13.3,569-12.8z M554-58.9c0.5-1.3-5.8-4.3-6.9-4.4 c1.1,1.5-0.4,2.8-0.3,3.3c0.3,1.6,4.4,4.2,6,3.8C551.6-57.8,553.6-58.6,554-58.9C554.3-59.8,553.3-58.4,554-58.9z M497.7-142.1 C485.3-151.9,482.5-139.5,497.7-142.1C496.1-142.8,496.1-142.8,497.7-142.1C496.8-142.8,496.3-141.9,497.7-142.1z M532.1-82.9 c-0.3,0-6,1.2-5.8,1.6c0.8,0.2,1.6,0.3,2.4,0.3c-0.3,0.7-0.3,1.5,0,2.3C528.4-79.1,535.3-82.4,532.1-82.9 C531.3-82.8,532.7-82.8,532.1-82.9z M547.5-92.1c-1-2.2-5.6-1.4-6.1,0.4C540.8-89.8,547.8-92.1,547.5-92.1 C546.9-93.2,546.7-92.2,547.5-92.1z M566-33c-0.3-0.8-0.5-1.7-0.4-2.6c-0.7-1.4-2.5,2.6-2.3,2.8C563.5-32.7,566.5-33.1,566-33 C564.9-34.5,565.8-32.9,566-33z M574.7,4.7c1.8-0.5,3.6-1.3,5.2-2.4c-3.2,0.8-2.6,0.2-2.5-1.9C574.4-0.3,574.8,5.4,574.7,4.7 C576.6,3.3,574.6,3.1,574.7,4.7z M537.5-93.1c0.6-0.4,4.1-1.8,3.1-3.2C540-97.2,536-93.7,537.5-93.1 C538.3-93.7,536.8-93.4,537.5-93.1z M561.5-6.1c0.5-1.5,0-2.5-1.3-3C557.9-9.2,561-4,561.5-6.1C562.5-8.5,561.1-4.5,561.5-6.1z M562.4-39c-0.7-0.4-1,3.6,0.5,3.3c-0.5,0.1,1.8-3.6,2-3C564.8-38.8,562.3-39.1,562.4-39C561.2-39.7,563.2-38.2,562.4-39z M533.9-81.8c0.5,0.2,4.5-1.3,3.7-2.4C536.7-85.3,532.1-83.9,533.9-81.8C534.4-81.6,533.6-82.2,533.9-81.8z M509.6-91.3 c1.2,1.3,2.2,2.6,3.1,4.1C515.6-89.8,508.9-91.1,509.6-91.3C510.7-90,510.1-91.4,509.6-91.3z M559.1-30.5c1.2-0.8,2.4-1.8,3.4-2.8 c-0.5-0.7-5,0.2-5,1.1C557.3-31.1,559.1-30.9,559.1-30.5C559.4-31.2,559-31.3,559.1-30.5z M513.7-88.5c0.3,0.2,1.7,4,2.4,2.3 C517.1-88.3,513.5-88.5,513.7-88.5C515.1-87.6,514.5-88.5,513.7-88.5z M541.4-84.5c0.6-2-2.6,0.1-2.7,0.2 C539.8-84.5,540.4-83,541.4-84.5C542-86.5,540.9-83.7,541.4-84.5z M505.9-110.9c-2,1.1-2.6,2.8-1.7,5 C503.7-106.8,505.8-110.4,505.9-110.9C504.5-109.3,505.7-109.5,505.9-110.9z M535.1-80.6c-1.4,0.5-2.8,0.9-4.3,1.2 C532.6-78.5,534.7-79.1,535.1-80.6z M544.6-96C544.7-100.9,539.8-95.2,544.6-96C544.6-96.3,544-95.9,544.6-96z M575.8,17.1 c0-0.9-0.4-1.4-1.3-1.5C573.3,16.2,575.5,19.3,575.8,17.1C576,16.5,575.7,18,575.8,17.1z M535.2-85.6c-1.3-2.6-2.6,1.3-3.1,1.1 C532.9-84.1,535.1-85.4,535.2-85.6C534.1-87.7,535-85.1,535.2-85.6z M539.7-86.1c-1.8-2.2-2.2,0.7-2.5,0.6 C541.9-86.7,538.4-86.4,539.7-86.1C537.9-88.3,538.6-86.3,539.7-86.1z M500.9-100.9c0.8-1.1-0.1-2.1-0.3-3.3 C499.1-102.9,500.2-101.9,500.9-100.9z M531.4-84.4C530-86.1,526.9-82.7,531.4-84.4C530.8-85.1,530.8-84.1,531.4-84.4z M539.3-81.1 c-1.1-0.5-2.1-0.3-3,0.5C536.1-79.5,539.1-81,539.3-81.1C538.4-80.7,538.5-80.7,539.3-81.1z M505.8-87.4 C507.2-84.9,509.3-85,505.8-87.4C506.1-86.9,506.5-87,505.8-87.4z M539.7-92.2c0.8-0.3,1.5-0.8,2.1-1.5 C540.7-94.2,540-93.7,539.7-92.2C540-93.5,540-93.5,539.7-92.2C540.5-92.5,539.7-93.8,539.7-92.2z M505.6-121.5 c-0.4-0.9-0.7-1.8-1.1-2.8c0,0.3-1.5,2.7-0.2,2.8C507.9-121.1,503.6-121.4,505.6-121.5C505.3-122.4,504.8-121.5,505.6-121.5z M544.3-81.7C545.8-79.6,547.2-81.5,544.3-81.7C544.7-81.2,545-81.7,544.3-81.7z M552.2-62.2c-0.6-1.3-1.4-1.6-2.6-1 C549.4-62.4,553.1-62.2,552.2-62.2C552.1-62.6,551.4-62.2,552.2-62.2z M551.2-82.3c0.9-2.4-2.7,1.4-1.4,1 C551.3-81.2,551.1-82.3,551.2-82.3C552-84.7,551-81.4,551.2-82.3z M560.7-46.6c-0.4-0.8-1.1-1.4-2-1.7 C557.3-47.1,561.5-46.4,560.7-46.6C560.4-46.7,559.7-46.8,560.7-46.6z M522.5-64.1c-0.8,0-1.5,0.3-2,0.9 C521.4-61.3,522.8-64.3,522.5-64.1C521.6-64.1,521.9-63.8,522.5-64.1z M504.7-143.2c0-0.4,2.2-5.4-1.1-2 C505.6-145.3,504.7-143.3,504.7-143.2C504.7-143.6,504.5-144,504.7-143.2z M502.3-148.1C500.1-149.9,499.9-146.3,502.3-148.1 C502.1-148.3,501.8-147.7,502.3-148.1z M543.6-82.9c-1.4-0.3-1.4-0.3-2.6,0.6C542.1-81.3,542.6-82.9,543.6-82.9z M549.5-69.9 C549.9-71.7,547.7-67.1,549.5-69.9C549.8-71.2,549.3-69.5,549.5-69.9z M501.4-146.6c-0.2,0.3-1.7,3.3-0.2,3 C501.5-143.7,501.7-147.7,501.4-146.6C501.5-146.7,501.2-145.6,501.4-146.6z M530-69.9c1.1,0.1,0.8-1.6,0-1.3 C528.6-70.6,529.6-70,530-69.9C531.3-69.8,529.5-70,530-69.9z M543.2-80.2c-1.4,1-1.4,1-1,2C542.1-79.1,544.3-78.7,543.2-80.2z M499.9-108.1C503.3-107.8,495.5-110.4,499.9-108.1C500.3-108,499.5-108.3,499.9-108.1z M524.6-64c0.9,0.4,1.5,0.2,2.2,0.1 C526.1-65.4,525.5-64.7,524.6-64z M541.8-98.6c-0.6-1.5-2.1-0.1-1.8,0.2C542.1-97.7,541.2-98.7,541.8-98.6 C541.1-100.1,541.1-98.7,541.8-98.6z M537.9-102c-0.2-0.4-1.3-2-1.6-0.5C536.4-102.3,538.1-102.1,537.9-102 C537.8-102.4,537.5-102,537.9-102z M557.8-67.2c-0.1-0.7-0.4-1.1-1-1.2C557.5-68.1,557.7-67.2,557.8-67.2 C557.8-67.8,557.2-67.3,557.8-67.2z M503-113.9C502.5-116.6,502.4-111.3,503-113.9C502.9-114.3,502.9-113.4,503-113.9z M500.9-115.2c-0.4-0.6-0.8-0.7-1.2-0.2C499.6-115.5,500.9-115.3,500.9-115.2C500.6-115.9,500.8-114.9,500.9-115.2z M554.1-50.1 c0,1.4,1.1,0.4,1.7,0.3C555.6-50.2,554.1-50.1,554.1-50.1C554.1-48.7,554.6-50.4,554.1-50.1z M563.7-40.1c0.8-0.5,0.9-1.1,0.3-1.5 C563.5-40.6,563.6-40.3,563.7-40.1C564.4-40.6,563.5-40.6,563.7-40.1z M508.6-137.5c0-0.4,0.7-0.7,0.1-1.2 C508.4-138.3,508.4-137.9,508.6-137.5z M502.9-94.7C502.1-94.7,504.1-94.6,502.9-94.7C502.7-94.7,503.1-94.7,502.9-94.7z M512.2-122.7c0.3-0.5,0.2-0.9-0.1-1.3C511.8-123.5,511.9-123.1,512.2-122.7z M531.3-106C531.5-106,531.6-106.9,531.3-106 C531.7-105.9,531.4-106.1,531.3-106z M506.5-139C506.2-139.7,505.1-138.7,506.5-139C506.5-139.2,506.3-139,506.5-139z M525.9-110.7 c0.1-0.3-0.4,1.9,0.1,1.2C526-109.9,526-110.3,525.9-110.7C526-111,525.9-110.3,525.9-110.7z M580.2-1.6 C579.8-0.9,580.4-0.7,580.2-1.6C580.1-1.5,580.2-1.5,580.2-1.6z M572.7,22.6C572.2,23,572.9,23,572.7,22.6 C572.6,22.7,572.7,22.7,572.7,22.6z M497.2-120.1C497.9-120.2,496.5-121,497.2-120.1C497.3-120.1,497.1-120.2,497.2-120.1z M511.3-119.3C511.7-119.2,510.6-120,511.3-119.3C511.4-119.2,511.2-119.3,511.3-119.3z M519.4-107.2 C519.7-106.1,521.3-107.7,519.4-107.2C519.5-106.9,519.8-107.3,519.4-107.2z M510.7-102.7C510.9-104.5,509.6-101.4,510.7-102.7 C510.7-103,510.6-102.7,510.7-102.7z M513.1-111.1C512.6-112,512.3-110.9,513.1-111.1C513-111.2,513-111.1,513.1-111.1z M535.2-66.2C534.6-67.1,534.3-66.1,535.2-66.2C535.1-66.4,535-66.2,535.2-66.2z M554-45.7C553.8-46.7,553.3-45.4,554-45.7 C553.9-45.9,553.8-45.7,554-45.7z M519.1-108.4c0.3,0.1,0.6,0.2,1,0.3C519.8-108.2,519.4-108.3,519.1-108.4 C519.4-108.3,519.6-108.3,519.1-108.4z M501.9-123.1C502.5-125,500.7-122.2,501.9-123.1C502-123.4,501.8-123.1,501.9-123.1z M498.6-95.8C498.2-95.3,498.7-95.1,498.6-95.8C498.6-95.7,498.6-95.7,498.6-95.8z M521.5-69C522.3-68.3,522.4-69.4,521.5-69 C521.6-68.9,521.6-69.1,521.5-69z M530.2-106.3C529.6-106.1,530.2-105.8,530.2-106.3C530.1-106.3,530.2-106.2,530.2-106.3z M519.3-61.2c-0.1-0.6-0.2-0.7-0.6-0.3C518.9-61.4,519.1-61.3,519.3-61.2C519.2-61.9,519.1-61.1,519.3-61.2z M510.4-105.7 C509.6-106.3,509.9-105,510.4-105.7C510.3-105.8,510.3-105.5,510.4-105.7z M578.4-6.8C578.2-6.4,578.6-6.7,578.4-6.8 C578.3-6.7,578.4-6.8,578.4-6.8z M511-86C510.8-86.3,510.6-85.5,511-86C511-86,511-85.9,511-86z M507.1-125.8 C506.9-126.3,506.8-125.5,507.1-125.8C507.1-125.9,507-125.8,507.1-125.8z M500-118.8C499.5-118.4,500.2-118.2,500-118.8 C499.9-118.8,500-118.7,500-118.8z M501.7-97.3C500.8-97.3,501.9-96.2,501.7-97.3C501.3-97.3,501.7-97.3,501.7-97.3z M501.1-119.4 C500.8-120.1,500.5-119.1,501.1-119.4C501-119.5,501-119.4,501.1-119.4z M510.8-101.7C510.5-102.7,510.2-101.3,510.8-101.7 C510.8-101.8,510.7-101.6,510.8-101.7z M577.5-11.7C577.2-11.9,577.4-11.3,577.5-11.7C577.5-11.7,577.5-11.6,577.5-11.7z M510.9-104.6C511.4-104.2,511.2-104.8,510.9-104.6C511-104.5,511-104.6,510.9-104.6z M501.9-116.6 C501.6-116.6,501.9-116.3,501.9-116.6C501.9-116.6,501.9-116.6,501.9-116.6z M527.8-109.8C528.4-109.9,527.8-110.2,527.8-109.8 C527.9-109.8,527.8-109.8,527.8-109.8z M502-100.7C501.8-100.9,501.9-100.4,502-100.7C502-100.8,502-100.7,502-100.7z M510.9-83.4 C510.8-83.7,510.3-83.3,510.9-83.4C510.9-83.5,510.8-83.4,510.9-83.4z M514.8-134.7C515-135.2,514.4-135.1,514.8-134.7 C514.8-134.8,514.7-134.8,514.8-134.7z M508.2-115.4C508.5-115.7,508.1-116.1,508.2-115.4C508.2-115.5,508.2-115.5,508.2-115.4z M510-83.2C509.9-83.6,509.8-82.8,510-83.2C510-83.2,510-83.2,510-83.2z M503.1-106.1C503-106.1,503-106.1,503.1-106.1L503.1-106.1 z M509.3-83.4C509.4-83.5,509.4-83.5,509.3-83.4L509.3-83.4z M511.8-83.8C511.7-84.1,511.5-83.7,511.8-83.8 C511.8-83.9,511.8-83.8,511.8-83.8z M524.8-67.6C524.8-67.7,524.8-67.7,524.8-67.6L524.8-67.6z M567.4-51.7 C567.4-51.8,567.4-51.8,567.4-51.7L567.4-51.7z M532.8-106.5C532.6-106.2,533.2-106.4,532.8-106.5 C532.8-106.4,532.9-106.5,532.8-106.5z M503.4-86.5C503.4-86.6,503.4-86.6,503.4-86.5L503.4-86.5z M501.5-92 C501.1-91.9,501.7-91.7,501.5-92C501.4-92,501.5-92,501.5-92z M502-92.1C502.1-92.1,502.1-92.1,502-92.1L502-92.1z\"></path><path fill=\"#04A7A7\" d=\"M471.2-178.9c27.3,6.4,54.5,12.7,81.8,19.1c12.7,3,25.3,5.9,38,8.9c3.5,0.8,8.4,1.1,11.7,2.7 c1.3,0.6,5,0.9,1.9,3.2c-1.8,1.3-17.1-4-19.5-4.6c-20.4-4.8-40.7-9.5-61.1-14.3c-9.3-2.2-18.6-4.4-27.9-6.5 c-6.1-1.4-12.2-2.9-18.3-4.3C474-175.5,469.9-174.6,471.2-178.9C515.9-168.4,471-178.5,471.2-178.9z\"></path><path fill=\"#E5F6F7\" d=\"M481.3-35.6c1.2-0.2,2.1-0.7,2.3-1.9c0.2-1.1-0.4-2.1-1.3-2.8c-0.8-0.6-1.6-1.3-2.3-1.9 c-0.9-0.8-1.2-1.8-0.8-2.9c0.4-1.2,1.3-1.8,2.5-2c1.3-0.2,2.6,0.2,3.7,0.8c1.2,0.7,0.2,1.6,0.1,2.4c-0.1-0.5-0.2-0.9-0.4-1.4 c-0.4-1-1.3-1.4-2.3-1.4c-0.9,0-1.7,0.2-2.1,1.2c-0.4,1,0,1.8,0.8,2.4c0.6,0.5,1.2,1,1.9,1.5c1.4,1.1,2.1,2.7,1.6,4 c-0.5,1.5-1.9,2.4-3.8,2.4C481.3-35.3,481.3-35.4,481.3-35.6z M518.7-37.4c-1.1,0.7-1.7,1.4-2.6,1.7c-0.3,0.1-0.5,0.4-0.1,0.5 c0.8,0.3,0.4,0.9,0.3,1.3c-0.3,1.6-0.8,3.2-1.1,4.9c-0.3,1.7,0.8,2.6,2.5,1.9c-1.1-0.4-1.2-1.2-1-2.1c0.2-0.9,0.4-1.9,0.6-2.8 c0.6-2.4,0.6-2.4,2.9-2.6C519.1-35,517.7-35.2,518.7-37.4z M493-41.2c-0.7-0.3-1.4-0.5-2.2-0.5c-1.9,0.1-3.4,1-4.3,2.7 c-0.8,1.5-0.5,3,0.5,4.2c1,1.3,2.4,2,4.4,1.6c-0.6-0.2-1.1-0.4-1.5-0.6c-1.4-0.6-2.1-1.8-2.2-3.3c-0.1-1.5,0.4-2.7,1.7-3.6 c1.7-1.2,3-0.8,3.8,1.1c0.1,0.3,0.2,0.6,0.7,0.8C494.5-40.4,494.5-40.5,493-41.2z M496.3-33c0.4-1.5,0.6-3.1,1.1-4.5 c0.3-0.8,1-2,2.2-0.6c0.2,0.3,0.6,0.5,1,0.2c0.3-0.2,0.3-0.5,0.3-0.9c0-0.4-0.4-0.6-0.8-0.7c-0.9-0.3-1.6,0.4-2.4,0.6 c-0.3-0.4,0.3-0.8-0.1-1.2c-0.8,0.3-1.6,0.6-2.7,1c0.9,0.2,1.4,0.6,1.1,1.3c-0.8,1.8,0,4.3-2.3,5.4c1.1,0.3,2.3,0.5,3.5,0.8 C496.9-32.1,496.1-32.2,496.3-33z M502.9-32.2c0.5-2.1,1-4.1,1.5-6.4c-1.1,0.3-1.9,0.6-2.5,0.8c1.2,1.8-0.2,3.5-0.3,5.1 c-0.1,0.9-0.2,1.9-1.6,1.8c1.2,0.3,2.4,0.6,3.7,0.9C502.5-30.5,502.7-31.3,502.9-32.2z M446.3-24c2.4,0.4,4.6-0.4,6-2.6 c1.3-1.9,1.4-4,0.3-6.1c-1.6-3-7.1-5-10.6-3.7c1.8-0.2,1.7,0.6,1.4,1.7c-0.6,2.2-1.1,4.5-1.6,6.7c-0.3,1.2-0.4,2.3-2.1,2.3 C441.9-25,444.1-24.3,446.3-24z M445.1-34.9c0.1-0.6,0.3-1.1,1.2-1c2.8,0.2,5,2.1,5.3,4.9c0.3,2.8-1.4,5.6-3.9,6.3 c-0.6,0.2-1.2,0.2-1.7,0.1c-2.6-0.1-3.1-0.7-2.5-3.2c0.2-1,0.5-2.1,0.7-3.1C444.5-32.3,444.8-33.6,445.1-34.9z M479.4-13.2 c1-0.5,1.7-1.2,1.5-2.4c-0.1-1.1-1-1.7-2-2c-0.7-0.2-1.5-0.3-2.2-0.6c-0.6-0.2-1.6,0-1.4-0.9c0.1-0.6,1-0.5,1.7-0.4 c0.1,0,0.2,0.1,0.3,0.1c2.6,0.4,3.8-0.4,4.2-3c0.1-0.5,0.2-0.7,0.7-0.5c0.3,0.1,0.7,0.1,0.8-0.3c0.1-0.5-0.4-0.6-0.7-0.6 c-1-0.1-1.8-0.6-2.6-1.2c-1.3-0.8-3.3-0.5-4.3,0.5c-1.3,1.2-1.2,2.3,0.3,4.5c-0.6,0.5-1.4,0.3-2.1,0.7c1.1,1.2,1.2,2-0.6,2.4 c-1.1,0.3-1.2,1.6-0.3,2.5c1,0.9,2.1,1.5,3.4,1.5c0-0.1,0.1-0.3,0.1-0.4c-0.5-0.2-0.9-0.3-1.4-0.5c-0.9-0.4-1.6-1.1-1.3-2.1 c0.3-1,1.2-1.5,2.3-1.3c0.7,0.1,1.4,0.3,2,0.5c2,0.5,2.3,1.6,1,3.2C479-13.3,479.2-13.3,479.4-13.2 M476-22.8 c-0.3,1.5,0.2,2.7,1.4,3c1.2,0.3,2.4-0.6,2.7-2c0.3-1.4-0.3-2.7-1.4-3C477.5-25.2,476.3-24.3,476-22.8z M542.6-3 c0.4-1.3,0.6-2.7,1-4.1c0.4-1.2,1.9-1.8,3.1-1.4c1.3,0.5,1.5,1.4,1.2,2.6c-0.2,0.9-0.5,1.8-0.6,2.7c-0.2,1.1-0.5,2.1-2,2.2 c1.5,0.4,2.8,0.6,4,0.9c-1.4-0.5-0.8-1.5-0.6-2.4c0.3-1.2,0.6-2.4,0.8-3.6c0.3-2.3-1.3-3.7-3.6-3.2c-0.6,0.1-1.1,0.6-1.8,0.5 c-0.2-0.4,0.3-0.9-0.2-1.2c-0.6,0.6-1.6,0.5-2.3,0.9c1.3,1.3,0.1,6.1-1.9,6.8c1.3,0.3,2.5,0.6,4,0.9C543.2-2,542.4-2.1,542.6-3z M474.8-38.9c0.4-1.5,0.7-3,1.1-4.5c0.2-1-0.1-1.6-1.1-2c-1.2-0.4-2.4-0.5-3.6,0c-0.6,0.3-1.3,0.6-1.6,1.3c-0.1,0.2,0,0.5,0.3,0.5 c0.8,0.1,1.3-0.4,1.7-1c0.6-0.7,1.4-1,2.3-0.6c0.8,0.3,0.7,1,0.7,1.6c-0.1,0.9-0.3,1.7-1.5,1.9c-1.2,0.2-2.6,0.4-3.6,1.1 c-0.6,0.4-1.1,0.9-0.9,1.7c0.2,0.8,0.8,1.3,1.6,1.3c0.8,0.1,1.6,0,2.3-0.4c0.3-0.2,0.6-0.4,0.9,0.2c0.6,1.6,1.6,1.1,2.8,0.4 C474.7-37.2,474.6-37.8,474.8-38.9z M471.2-38.3c-0.8-0.2-1.3-0.6-1.1-1.5c0.2-0.7,2.4-1.8,3.4-1.6c1,0.2,0.1,0.8,0.3,1 C473.5-38.8,472.4-38,471.2-38.3z M453.9-26c-0.2,1.8,0.7,3.6,2.2,4.3c2,0.9,3.6,0.7,4.7-0.5c-3.3,0.7-5.3-0.6-5.4-3.5 c0-1,0.2-1.5,1.4-1.2c1.5,0.4,3,0.7,4.5,1.1c0.8,0.2,1-0.2,1-0.9c0-1.8-1.4-3-3.9-3.2c0.7,0.4,1.2,0.6,1.6,0.8 c0.7,0.3,1.1,0.9,0.9,1.7c-0.3,0.9-1,0.6-1.6,0.5c-0.4-0.1-0.7-0.1-1.1-0.2c-2.5-0.5-2.5-0.5-0.7-2.6C455.3-29.3,454.1-28,453.9-26 z M446.5-40.4c2-0.6,3-2.1,3.4-4.1c0.6-2.3,1.1-4.7,1.6-7c0.3-1.2,0.5-2.3,2.1-2.1c-1.5-0.3-2.9-0.7-4.4-1c1.3,0.5,1.2,1.4,0.9,2.5 c-0.7,2.9-1.4,5.7-2,8.6c-0.3,1.2-0.7,2.2-1.8,2.9C446.4-40.6,446.4-40.5,446.5-40.4z M530.9-4.8c-0.5-0.1-0.9-0.3-1.4-0.4 c-1.7-0.6-2.7-2.2-2.4-3.9c0.1-0.8,0.4-1.2,1.3-1c1.4,0.4,2.8,0.6,4.2,1c1.1,0.3,1.3-0.2,1.3-1.1c0-1.6-1.6-2.9-3.8-2.9 c0.6,0.3,1.2,0.6,1.8,0.9c0.7,0.4,0.8,1,0.6,1.7c-0.2,0.7-0.8,0.6-1.4,0.5c-0.5-0.1-1.1-0.2-1.6-0.4c-0.6-0.2-1.7,0-1.8-0.7 c-0.2-0.7,0.8-1,1.3-1.4c0.1,0,0-0.2,0.1-0.4c-1.7,0.1-2.7,1-3.3,2.4c-0.7,1.7-0.4,3.3,0.8,4.6c1.1,1.3,2.7,1.5,4.2,1.5 C530.8-4.5,530.9-4.7,530.9-4.8z M468.1-27.7c-0.9-0.3-1.8-0.5-2.7-0.2c-0.9,0.3-1.6,0.7-1.8,1.7c-0.2,0.9,0.3,1.5,1,2 c0.7,0.5,1.4,1,2.1,1.5c0.9,0.8,0.7,2-0.2,2.6c-1.3,0.8-3,0-3.4-1.5c-0.1-0.4,0.3-1.1-0.5-1.3c-0.9,2.3-0.7,2.7,1.6,3.2 c0.5,0.1,1,0.3,1.4,0.3c1.3-0.1,2.5-0.5,2.9-1.9c0.4-1.2-0.2-2.1-1.3-2.8c-0.6-0.4-1.2-0.9-1.8-1.3c-0.5-0.4-0.6-0.9-0.4-1.4 c0.2-0.5,0.6-0.7,1.1-0.7c1.6-0.2,2.2,0.7,2.4,2.5C469.7-26.6,469.2-27.3,468.1-27.7z M501.3-17.5c0.4-1.6,0.8-3.2,1.1-4.8 c-0.2-0.2-0.3-0.5-0.5-0.7c-0.3-0.1-0.6-0.2-1-0.2c-0.1,0.2-0.1,0.4-0.2,0.6c-0.6,2.6-1.2,5.2-1.8,7.8c-0.3,1.2-0.1,2.8-2.1,2.6 c1.5,0.3,2.9,0.7,4.4,1c-1.9-0.5-1.1-1.7-0.9-2.8c0.2-1,0.5-2,0.7-2.9C501.2-17.1,501.3-17.3,501.3-17.5z M506.9-30.1 c0-2.2,0.1-4.3,1.7-6.1c0-0.2,0.1-0.5,0.1-0.7c-1.1-1.8-2.1,0.3-3.2,0.1c1,0.4,1.1,0.9,0.8,1.8c-0.6,2.3-1.1,4.7-1.7,7 c-0.2,1-0.3,2.1-1.7,2.1c1.2,0.3,2.4,0.6,4,0.9c-1.5-1.2-1.5-2.7-0.2-4.7C506.8-29.8,506.9-29.9,506.9-30.1z M521.5-14.8 c1,0.3,0.8,0.9,0.6,1.6c-0.4,1.7-0.8,3.3-1.1,5c-0.1,0.7-0.1,1.5,0.8,1.9c0.9,0.4,1.6,0.3,2.4-0.4c-1.8,0-2.1-0.3-1.8-2.2 c0.2-0.8,0.4-1.6,0.5-2.3c0.6-2.6,0.6-2.6,3.1-2.7c-0.9-0.8-3.1-0.4-2-2.7C523.5-15.6,522.5-15.4,521.5-14.8z M517.4-10.2 c0.2-0.9,0.5-1.9,0.6-2.8c0.2-1.6,0.7-2.6,2.6-1.9c0,0,0.1-0.1,0.2-0.2c-1.9-1.1-1.9-1.1-1.8-2.6c-0.8,0.5-1.3,1.1-2.1,1.4 c-0.2,0.1-0.6,0.3-0.2,0.5c0.9,0.4,0.3,1,0.2,1.5c-0.3,1.4-0.7,2.8-0.9,4.2c-0.2,0.9-0.5,1.9,0.6,2.4c1,0.5,2.1,0.6,3.1-0.5 C517.2-7.6,516.9-8,517.4-10.2z M552.1,0.8c0.4,0.1,0.8,0.2,1.2,0.3c1.5,0.2,2.7-0.2,3.3-1.6c0.6-1.5-0.2-2.4-1.4-3.2 c-1.2-0.7-2.5-1.5-2-3.4c-1.6,1-1.8,2.1-0.7,3.2c0.5,0.5,1.2,0.9,1.8,1.3c0.8,0.6,1.5,1.2,1,2.3c-0.4,0.9-1.2,1.2-2.2,1 c-1-0.2-1.9-0.6-1.9-1.8c0-0.4,0.1-0.9-0.3-1.3C549.9-0.3,550.1,0.2,552.1,0.8z M514-30.8c0.6-1.7,0.8-3.3-0.5-4.8 c-1.3-1.5-3-1.6-4.8-1.2c0,0.2-0.1,0.5-0.1,0.7c2-0.4,3.5,0.2,4.1,1.7c0.6,1.5,0,3.8-1.4,4.8c-1.5,1.1-2.9,0.9-4.5-0.5 c-0.1,0.2-0.1,0.3-0.2,0.5C508.6-27.4,513.1-28.4,514-30.8z M536.2-4.5c0.4-1.4,0.6-2.8,1-4.2c0.4-1.2,1.4-1.6,2.1-0.9 c0.4,0.4,0.7,0.7,1.2,0.3c0.3-0.2,0.4-0.5,0.3-0.8c-0.2-0.5-0.6-0.7-1.1-0.7c-0.8-0.1-1.4,0.5-2.1,0.8c0-0.5,0.1-0.9,0.1-1.4 c-0.9,0.3-1.8,0.6-2.7,0.8c1.4,1.3,0.3,6-1.7,6.9c1.3,0.3,2.4,0.6,3.8,0.9C536.9-3.5,536-3.6,536.2-4.5z M487.1-21.9 c2.7-0.3,3.5,0.6,2.9,3.3c-0.2,0.7-0.4,1.5-0.5,2.2c-0.2,1-0.5,1.9-2.2,1.9c1.8,0.4,3,0.7,4.2,1c-1.4-0.6-0.9-1.6-0.7-2.5 c0.2-0.9,0.5-1.9,0.6-2.8c0.2-1.2,0.5-2.4-0.8-3.3c-1.3-0.9-2.5-0.8-3.7-0.1C487-22.1,487.1-22,487.1-21.9z M466-43.5 c-0.6,0.7-1.1,1.4-1.9,2.3c-0.3-1.8-0.4-3.2-0.8-4.7c-0.2-1-0.2-1.6,1.2-1.7c-1.3-0.5-2.5-0.9-3.4-0.9c1.4,2.9,1,6.1,2,9.2 c1.2-1.1,2-2.4,2.9-3.6C466.1-43.1,466.1-43.3,466-43.5z M455.8-49.5c0.7,0.3,1.9,0,2,1.1c0.1,1,0.1,2.2-1.1,2.7 c0.2,0.1,0.3,0.2,0.5,0.4l0.1,0.1c0,0.1,0.1,0.2,0.1,0.2c0,0-0.1,0.1-0.1,0.1c-0.1,0.4-0.2,0.9-0.3,1.3c0,0.1,0,0.2,0,0.2 c0,0-0.1,0-0.1,0.1c-0.2,0.7-1.1,0.7-1.4,1.3l0,0c0.4,0.3,0.9-0.5,1.3,0.3c0.6,1.3,1.4,1.3,2.6,0.2c-1.3,0.4-1.5-0.2-1.2-1.2 c0.3-1.2,0.6-2.5,0.9-3.8C459.6-49,458.5-50,455.8-49.5L455.8-49.5z M470.4-25.7c1.4,1.3,0.1,6.1-1.8,6.8c1.2,0.3,2.5,0.6,3.7,0.9 c-1.1-0.3-0.8-1-0.6-1.7c0.5-2.2,1-4.5,1.6-6.9C472.1-26.2,471.3-26,470.4-25.7z M487-22.2c-1.5,0.4-0.1-1-0.7-1.1 c-0.8,0.3-1.6,0.6-2.4,0.9c1.4,1.3,0.1,6-1.8,6.9c1.3,0.4,2.5,0.7,4,0.8c-0.4-0.6-1.2-0.7-1.1-1.3c0.5-2,0.3-4.3,2.3-5.8 C487.1-22,487-22.1,487-22.2z M505.9-20.8c0.6,1.1,0.5,2.2-0.3,3.2c-1,1.3-2.3,1.3-4.3,0.2c0,0.2-0.1,0.3-0.1,0.5 c0.5,0.3,0.9,0.6,1.4,0.8c1.7,0.9,3.9,0.2,4.8-1.5c0.9-1.6,0.2-3.5-1.6-4.4c-1.2-0.6-2.5-0.8-3.9-0.9c0.2,0.2,0.3,0.5,0.5,0.7 C503.9-22.4,505.2-22.2,505.9-20.8z M512.1-17c1.1,0.7,1.2,2.4,0.2,3.3c-0.1,0.1-0.7,0-0.4,0.3c1.1,0.9,0.1,1.7-0.1,2.5 c-0.3,0.7,0.1,2.1,0.8,2.3c0.4,0.1,0.8,0.2,1.1-0.1c0.3-0.3-0.3-0.4-0.4-0.6c-0.2-0.5-0.1-1,0.1-1.4c0.3-1.3,0.6-2.5,0.9-3.8 c0.5-2,0.2-2.5-1.9-3C512.1-17.3,512.1-17.1,512.1-17z M455.4-42c-0.1,0-0.2-0.1-0.3-0.1c-0.7-0.1-1.6-0.1-1.7-1.1 c-0.1-1,0.6-1.4,1.4-1.7c-0.1-0.1-0.2-0.2-0.3-0.3c-0.7,0-1.2,0.3-1.8,0.6c-0.6,0.4-1.1,0.9-1,1.7c0.2,0.9,0.9,1.4,1.7,1.4 C454.1-41.5,454.9-41.3,455.4-42L455.4-42z M508.6-10.5c-0.6-0.8,0.2-1.4,0.3-2.2c-1.1,0-1.7,0.6-2,1.4c-0.2,0.6,0,1.3,0.5,1.5 c1.1,0.5,2.2,0.8,3.6-0.2C509.9-10,509.2-9.8,508.6-10.5z M478.2-39.5c-0.7,1.1-1.5,2.1-0.5,3.1c0.9,0.9,2.2,1.6,3.6,1.2 c0-0.1,0.1-0.2,0.1-0.3C478.9-35.7,477.8-37,478.2-39.5z M470.3-46.3c-1.4-0.3-2.3-0.5-3.2-0.8c1.1,0.6,0.9,1.3,0.2,2.1 c-0.4,0.5-0.8,1-1.2,1.5c0,0.2,0.1,0.4,0.1,0.6C467.5-43.9,467.9-45.9,470.3-46.3z M508.8-16.7c-0.4,0.3-1.2,0.6-0.7,1.1 c0.4,0.5,1.1,0.1,1.5-0.4c0.7-0.8,1.4-1.3,2.5-1c0-0.2,0.1-0.3,0.1-0.5C511-17.6,509.8-17.4,508.8-16.7z M446.3-40.7 c-0.7,0.2-1.1,0-1.4-0.7c-0.2-0.4-0.5-0.7-1-0.6c-0.3,0.1-0.6,0.3-0.6,0.7c-0.1,0.6,0.3,0.9,0.7,1.1c0.8,0.3,1.7,0.2,2.4-0.3 C446.4-40.5,446.4-40.6,446.3-40.7z M455.8-49.5c-1.1-0.3-1.8,0.3-2.6,0.9c-0.3,0.2-0.5,0.5-0.3,0.8c0.2,0.4,0.7,0.2,0.9,0.1 C454.5-48.3,455.2-48.9,455.8-49.5C455.8-49.5,455.8-49.5,455.8-49.5z M557-4.7c1-1.9,0.5-2.4-2.4-2.7C555.9-7,556.8-6.2,557-4.7z M472.3-29.4c-0.2,0.5,0,0.9,0.6,1.1c0.5,0.1,0.8-0.1,1-0.6c0.2-0.5,0.1-0.9-0.4-1.2C472.9-30.1,472.4-30,472.3-29.4z M503.5-41.4 c-0.1,0.5,0,0.9,0.5,1c0.5,0.2,0.9-0.1,1.1-0.6c0.2-0.5,0-0.9-0.5-1.1C504-42.2,503.7-41.9,503.5-41.4z M479.4-13.2 c-0.2-0.1-0.4-0.1-0.7-0.2c-0.9,0.1-1.8,0.1-2.6,0.2c0,0.1-0.1,0.3-0.1,0.4C477.2-12.7,478.3-12.7,479.4-13.2 M499.8-23.6 c0,0.6,0.5,0.7,0.9,0.9c0.1-0.2,0.1-0.4,0.2-0.6C500.6-23.5,500.3-23.7,499.8-23.6z\"></path></g><g id=\"book2\"><polygon opacity=\"0.8\" fill=\"#37AA3C\" points=\"1415.4,-345.3 1639.6,-301.5 1580.8,-5.6 1357.1,-48.1 \"></polygon><polygon points=\"1419.4,-349.3 1643.6,-305.5 1585.8,-8.6 1362.1,-51.1 \"></polygon><g><path fill=\"#F5F5F5\" d=\"M1616.9-274.3c3.8,0.7,7.5,1.5,11.3,2.2c2.9,0.6,5.8,1.2,8.7,1.8c-0.1,0.3-0.1,0.6-0.2,0.9 c-37.3-7.3-74.6-14.6-112-21.9c-37.5-7.3-75.1-14.7-112.6-22c0.1-0.3,0.1-0.6,0.2-0.9c25.2,4.9,50.3,9.8,75.5,14.8 c0.5,0.1,0.9,0.1,1.4,0.2c2,0.4,4,0.8,6,1.2c7.7,1.5,15.3,3,23,4.5c1.5,0.3,3.1,0.6,4.6,0.9c4.9,1,9.8,1.9,14.7,2.9 c0.3,0,0.5,0.1,0.8,0.1c0.2,0.1,0.5,0.1,0.7,0.2c5.6,1.1,11.3,2.2,16.9,3.3c1.1,0.2,2.2,0.4,3.3,0.7c0.9,0.1,1.8,0.3,2.6,0.4 c0.8,0.3,1.6,0.3,1-0.8c-1.1-2.2-0.2-4.4,0-6.6c0.4-3.8,6.8-6.4,10-4.7c5.5,3.1,6.5,8.1,2.3,13.1c-0.9,1.1-0.7,1.6,0.7,1.7 c0.7,0.2,1.5,0.3,2.2,0.5c1.4,0.3,2.8,0.5,4.2,0.8c5.5,1.1,11.1,2.2,16.6,3.3c4,0.8,7.9,1.6,11.9,2.3 C1612.8-275.1,1614.8-274.7,1616.9-274.3z\"></path><path fill=\"#F5F5F5\" d=\"M1589.5-30c-2.8-0.5-5.5-1-8.3-1.6c-4-0.8-8-1.6-12-2.3c-1.7-0.3-3.4-0.7-5.1-1 c-6.1-1.2-12.3-2.4-18.4-3.6c-1.2-0.2-2.5-0.5-3.7-0.7c-1.7-0.3-3.4-0.7-5.1-1c-2.8-0.5-5.5-1.1-8.3-1.6c-2.6-0.5-5.2-1-7.8-1.5 c-0.3-0.1-0.6-0.1-0.9-0.2c-0.8-0.1-1.6-0.3-2.4-0.4c-3.9-0.8-7.9-1.5-11.8-2.3c-5.9-1.2-11.7-2.3-17.6-3.5 c-0.5-0.1-0.9-0.2-1.4-0.3s-0.9-0.1-1.4-0.2c-2.8-0.5-5.5-1.1-8.3-1.6c-4.4-0.9-8.9-1.7-13.3-2.6c-0.6-0.1-1.2-0.2-1.8-0.4 c-0.5-0.1-0.9-0.2-1.4-0.3c-1-0.2-2-0.5-3-0.7c-29.8-5.8-59.7-11.7-89.5-17.5c-0.9-0.2-1.8-0.4-2.7-0.6c0.1-0.3,0.1-0.6,0.2-0.9 c19.8,3.9,39.5,7.8,59.3,11.7c54,10.6,108.1,21.1,162.1,31.7c0.9,0.2,1.8,0.4,2.7,0.6c0.1,0.1,0.2,0.3,0.4,0.4 c0,0.2-0.1,0.3-0.1,0.5C1589.8-30,1589.6-30,1589.5-30z\"></path><path fill=\"#9DBDD3\" d=\"M1590-30.5c-0.1-0.1-0.2-0.3-0.4-0.4c0.1-0.1,0.3-0.1,0.4,0S1590.1-30.6,1590-30.5z\"></path><path fill=\"#25677B\" d=\"M1589.5-30c0.1-0.1,0.3-0.1,0.5,0c0,0.2-0.1,0.3-0.1,0.5C1589.7-29.7,1589.6-29.8,1589.5-30z\"></path><path fill=\"#F5F5F5\" d=\"M1559.4-238.5c0.1-2.4,0.4-4.8,1.7-7c2.5-4.2,6.7-4.9,10.7-1.5c0.5-2.6,0.1-9,4.1-8.1 c4.1,0.8,0.5,10.4,0,13.2c-0.3,1.6-1.3,11.4-3.1,11.1c-1.8-0.3-3.6,0.1-3.1-2.5C1564.4-230.3,1560.6-232.7,1559.4-238.5 C1559.5-240.9,1560.7-232.1,1559.4-238.5z M1570.4-239.8c0.3-2,0.8-4-1.5-5c-4.2-1.8-6.8,8.1-2.2,9 C1568.6-235.3,1569.8-236.6,1570.4-239.8C1570.5-240.4,1569.8-236.6,1570.4-239.8z M1455.3-258.2c-0.9,0.5-3.4,0-4.2-0.4 c-3.9-1.4-5.3-5.5-3.5-10.1c1-2.5,3-4.4,5.8-4.5c2.3-0.1,5.2,2.6,6.4-0.3c0.5-1.3,1-2.2-0.9-3c-7.2-3.1-14.6-0.1-16.9,8.4 c-2.2,8.7,5.4,15.8,14,14.1C1456-255.5,1457-257.1,1455.3-258.2C1454.5-257.8,1457-257.1,1455.3-258.2z M1539.4-239.3 c0.9-3.4-2.5-2.5-4.6-3.1c-2.8-0.8-4.4-2.7-4.6-5.7c-0.3-3.8,1.3-7,4.7-8.7c0.6-1.7,4.7,0.4,5.4,0.4c2.1,0.1,1.7,0.8,2.9-1.3 c0.8-1.5,0.2-2.1-1.2-2.7c-6.4-2.8-11.6-0.9-16.1,6.2c-0.6,5.6-1.8,9,2.5,13.4c2.9,3,6.9,3.6,10.9,3 C1539.3-238.3,1539.2-238.8,1539.4-239.3C1540-241.5,1539.2-238.8,1539.4-239.3z M1543.2-248.4c1.7-3.7,6.8-5,10.4-3.4 c4.8,2.2,5,7.5,3.6,12c-3.9,6.2-10.5,6.7-14.3,1C1540.9-241.7,1542.2-245.3,1543.2-248.4C1544.5-251.2,1543-247.8,1543.2-248.4z M1552.9-243.2c0.5-2.9-0.2-5-1.9-5.4c-4.2-0.9-6.1,9-2,9.9C1550.8-238.4,1552.4-240.2,1552.9-243.2 C1553.4-246.1,1552.4-240.2,1552.9-243.2z M1578-239.2c1-2.4,2.2-4.6,4.8-5.8c4.3-1.9,8.8,0.7,9.5,5.3c0.3,1.7,0.3,3.6-0.5,5 c-1.5,2.6-8.7-2.5-9.6-0.4c-1.7,4.2,8.2,2.3,7.8,5c-0.1,1.1,0.2,2.3-1.6,2.5C1580.7-226.9,1576.9-231.2,1578-239.2 C1579-241.6,1576.9-231.2,1578-239.2z M1582.7-239.3c1.3,0.3,6,2.1,5.5-0.5c-0.2-1.3-0.9-2.2-2.2-2.3 C1584.1-242.1,1583.3-241,1582.7-239.3C1584.2-239,1583.3-241,1582.7-239.3z M1515.8-255.2c-0.2-1.2-0.6-2.3-1.1-3.3 c-2.3-2.3-5.3-2.3-8-0.5c-0.3-2.4-2.2-2.6-4.3-2.3c-0.7,5.3-1.8,10.5-3,15.7c0.4,0.7,2.9,1.6,3.7,1.4c1.5-0.5,1.2-1.3,1.6-2.8 c0.6-2.3,0.4-10.1,4.4-9.2c5.8,1.1-4.7,12.6,3.1,13.8C1514.6-242.1,1515.8-252.9,1515.8-255.2 C1515.6-256.4,1515.8-253,1515.8-255.2z M1482.6-259.8c-0.2,2.2-0.1,3.6-2.3,4.1c-1.8,0.5-6.8-2.5-8-1.2c-0.4,0.5-0.1,1,0.2,1.5 c1.9,2.9,7.8,0.7,7.3,4.6c-0.6,3.9-9.2,0.4-10.8-1.5c-3.7-4.5-0.9-12.7,4.4-14.5C1478.2-268.3,1481.9-265.5,1482.6-259.8 C1482.1-255.2,1481.9-265.5,1482.6-259.8z M1472.9-261c0.4-0.4,4.5,2.1,5.2,0.9c0.5-0.9,0.1-1.8-0.5-2.6c-0.6-0.7-1.4-0.9-2.3-0.7 C1474.2-263.2,1473.5-262.5,1472.9-261C1472.8-260.9,1473.5-262.5,1472.9-261z M1495.9-245.7c-0.9-0.5-1.9,0-2.8-0.4 c-1.2-0.4-1.2-1.3-2.3-1.5c-3.1-0.7-5.8,2-7.5-2.6c-1-2.9,0.6-5.8,3.2-7.1c0.9-0.5,6.4-0.2,6.6-1c0.9-3.6-5.7-1.5-6.7-2.2 c0.2-5.4,6.4-4.1,9.8-1.7C1499.8-258,1496.8-250.3,1495.9-245.7C1494.6-246.4,1496.5-249,1495.9-245.7z M1492.4-252.5 c0.6-3.2-3.9-2.4-4.4,0c-0.3,1.1,0.2,2.1,1.5,2.2C1491.2-250.2,1492.1-251.3,1492.4-252.5C1492.6-253.6,1492.1-251.3,1492.4-252.5 z M1461.8-252.4c0.6,0.1,1.1,0.1,1.7,0.2c1.1-5,2.1-10,3-15c0.5-2.6,3.4-8.8-0.5-9.3c-4.2-0.6-3.6,5.6-4.3,8.8 c-1,4.9-2,9.7-2.8,14.6C1459.9-252.7,1460.7-252.5,1461.8-252.4C1462.4-252.3,1461.1-252.5,1461.8-252.4z M1535.4-257.1 c-0.3-0.1-0.5,0.1-0.6,0.3C1535-256.9,1535.2-257,1535.4-257.1z\"></path><path fill=\"#4BA3C1\" d=\"M1582.1-281c-1.4-0.3-2.8-0.5-4.2-0.8c4.1-6,4.3-9.3,0.8-14.5c-2.3-3.3-6.5-5.6-10.7-4.7 c-4.7,1.1-7.5,4-9,8.5c-0.8,2.4,0.3,4.6,0.1,6.9c-1.1-0.2-2.2-0.4-3.3-0.7c0.4-1.1,0.4-2.3,0.3-3.5c-0.4-4.1,1.3-7.2,4.3-10.3 c3.2-3.3,7.3-3.4,11.2-4.4c0.6-0.2,1,0.2,1.5,0.5c0.9,0.5,1.7,1.2,2.6,1.5c3.2,1,5.3,3.4,6.6,6.1c1.9,3.9,2,8.2,0.1,12.2 C1582.1-282.9,1581.7-282.1,1582.1-281z\"></path><path fill=\"#C9D9E4\" d=\"M1436.5-320.9c0.1,1.4-1.5,2.7-0.5,4.2c-0.5,0.7-0.8,0.6-0.9-0.2c-0.1-0.7,0-1.8-1-1.8 c-0.9,0-0.5,1.1-0.9,1.6c-0.1,0.2-0.3,0.4-0.7,1c-0.1-2.3,0.5-3.8,0.7-5.3c0.1-0.7,0.8-0.7,1-0.4 C1435-321.1,1435.9-321.3,1436.5-320.9z M1480.6-310.7c0.8-0.5,0.6-0.5,0.1-1c-0.3-0.4-0.4-1.2-1.1-0.4c-0.3,0.4-0.7,0.4-1.2,0.3 c-2.1-0.2-3,1.2-2,3.5c0.6-0.4,0.5-1.1,0.6-1.7c0.2-1,0.9-1.6,1.8-1.4c0.9,0.2,0.5,1.1,0.4,1.8c-0.2,1-0.5,2.1,1.3,2.3 C1479.9-308.9,1479.8-310,1480.6-310.7z M1451.1-315.5c0.3-0.8,1-1.2,1.6-1.1c0.7,0.1,0.5,1,0.4,1.6c-0.2,0.7-0.4,1.4,0.1,2 c0.2,0.3,0.6,0.7,1,0.4c0.5-0.3-0.1-0.5-0.2-0.8c-0.2-0.9-0.3-1.9,0.6-2.4c0.8-0.5,0.3-0.6,0-0.9c-0.3-0.2-0.3-1.2-0.9-0.6 c-1.1,1.1-2.1,0.1-3.2,0.1c-0.2,1.4-0.8,2.7-0.5,4.1C1451.1-313.5,1450.9-314.5,1451.1-315.5z M1458.3-314.1c0.1-2.4,2.1-2,4.1-2 c-1.8-1.4-3.1-1.1-4.2-0.1s-1.3,2.3-0.5,3.6c0.7,1.2,1.8,1.8,3.7,1C1459.7-312.1,1458.1-312.2,1458.3-314.1z M1492-308.4 c-0.5-0.4-1.1-0.7-0.5-1.5c0.2-0.2,1,0.1,0.5-0.6c-0.2-0.2-0.7-0.2-0.9-0.1c-1.1,0.6-1,1.4-0.3,2.3c0.4,0.6,1.8,0.8,1.2,1.9 c-0.5,1.1-1.5-0.1-2.3,0.3c0.2,0.9,1,0.7,1.6,1c0.4-0.2,0.9-0.4,1.4-0.6C1493.3-306.9,1492.8-307.7,1492-308.4z M1493.5-306 c1,0.3,2-0.3,3.1,0c0.7,0.2,0.8-0.5,0.7-1.1c-0.2-1.1-1-1.4-1.9-1.5C1493.8-308.5,1494.2-306.8,1493.5-306z M1447-318 c-0.8,0.6-1.1,1.4-1.1,2.6c0.8-0.5,1.6-0.3,2.3-0.1c1.2,0.3,1.3-0.4,1.3-1.3C1449-317.8,1448.1-318,1447-318z M1467.6-312.1 c1-0.5,0.3-1.6,0.3-2.5c0-0.4-0.2-0.8-0.6-0.9c-0.6-0.1-0.7,0.4-0.8,0.9c-0.3,1.3-0.5,2.6-0.8,3.9 C1466.2-311.8,1466.3-311.6,1467.6-312.1z M1471.5-313.8c0.1-0.5,0.2-1.1-0.5-1c-0.6,0.1-1.1,0.8-0.9,1.1c1.2,1.4-0.2,2.9,0.8,4.3 C1471.1-310.9,1471.3-312.3,1471.5-313.8z M1484.1-310.5c-0.9,0.7-0.7,2.1-0.9,3.5c1.5-0.6,0.6-4.3,3.8-2.3 C1486.2-310.9,1484.6-310.8,1484.1-310.5z M1441.8-318.9c-0.2,1.2-0.4,2.5-0.6,3.7c1-0.3,1.9,1.7,2.9,0.1 c-0.7-0.3-2.1-0.1-1.7-1.3c0.3-1.3-0.2-2.6,0.3-3.8C1441.4-320.5,1442.4-319.1,1441.8-318.9z M1481.9-306.5 c0.3-1.9,0.6-3.1,0.8-4.3C1481.7-309.7,1481.2-308.6,1481.9-306.5z M1444.9-315.1c-0.1-0.4,0.4-0.9-0.3-1.4 c-0.2,0.5-0.4,0.9-0.6,1.4C1444.3-314.6,1444.6-315.1,1444.9-315.1z M1506.6-305.5c-0.7,1.3,1.2,1.5,1.1,2.4 c-0.4,0.9-1.2-0.2-1.6,0.6c0.7,0.7,1.5,0.8,2.2,0.1c0.7-0.6,0.4-1.3-0.2-1.8c-1.6-1.4,0.2-1.1,1.1-1.5 C1508-306.1,1507.3-306.4,1506.6-305.5z M1503.1-303.7c0-0.3,0-0.6,0-0.9c0-0.6-0.2-1-0.8-1.1c-1.4,0.1-0.2-1.5-1.1-1.7 c-0.7,0.4-0.4,1.2-0.8,1.8c0,0.7-0.1,1.3-0.1,2c1.1-2,1.7-1.2,2.3,0.2C1502.8-303.5,1502.9-303.6,1503.1-303.7z M1504.9-304.4 c0.2-0.6,0.3-1.2,0.4-1.8c-0.3-0.3-0.7-0.5-1-0.8c-0.6,0.2-1.1,0.5-1.7,0.7c-0.1,0.2-0.2,0.4-0.3,0.6c0.6,0.2,0.9,0.5,0.8,1.1 C1503.8-304.6,1504.4-304.5,1504.9-304.4z M1503.3-303c0.5,0.6,1.1,0.6,1.8,0.1c-0.5-0.6-1.2-0.4-1.7-0.6 C1503.4-303.3,1503.3-303.1,1503.3-303z M1505.4-306.3c-0.2,0.6-0.3,1.2-0.4,1.8C1506.6-304.8,1505.7-305.6,1505.4-306.3z M1503-303.7c-0.1,0.2-0.3,0.3-0.4,0.4c0.2,0.1,0.4,0.3,0.6,0.4c0.1-0.2,0.1-0.4,0.2-0.6C1503.3-303.6,1503.2-303.7,1503-303.7z\"></path><path fill=\"#026DB8\" d=\"M1538.3-289.7c-0.3,0-0.5-0.1-0.8-0.1C1537.8-289.9,1538-289.9,1538.3-289.7z\"></path><path fill=\"#9DBDD3\" d=\"M1559.2-285.5c0.2-2.3-0.9-4.6-0.1-6.9c1.5-4.5,4.4-7.4,9-8.5c4.1-1,8.4,1.3,10.7,4.7 c3.5,5.2,3.3,8.5-0.8,14.5c-0.7-0.2-1.5-0.3-2.2-0.5c1.8-2.4,3.4-4.8,3.1-8.2c-0.3-4.1-3.7-8-7.9-8.4c-4.8-0.5-8.5,2.2-9.6,6.6 c-0.6,2.6-0.2,4.9,0.5,7.3C1560.9-285.2,1560.1-285.4,1559.2-285.5z\"></path><path fill=\"#C9D9E4\" d=\"M1561.8-285.1c-0.7-2.4-1.1-4.8-0.5-7.3c1.1-4.4,4.8-7,9.6-6.6c4.2,0.4,7.6,4.3,7.9,8.4 c0.3,3.4-1.3,5.8-3.1,8.2c-1.4-0.1-1.6-0.6-0.7-1.7c4.1-5,3.1-10-2.3-13.1c-3.2-1.8-9.6,0.8-10,4.7c-0.2,2.2-1,4.4,0,6.6 C1563.4-284.7,1562.6-284.7,1561.8-285.1z\"></path><path fill=\"#C9D9E4\" d=\"M1552.8-26.8c0.6-0.9,0.2-2.8,1.2-2.7c1.4,0.1,0.6,1.9,1,2.9c0.1,0.4,0.1,0.7,0.3,1.5c1-1.5,1.7-2.7,2.5-4 c1.8,0.8,0,2.2,0.6,3.2c-0.6,1-0.1,2.3-0.9,3.2c-0.7-0.4-0.2-1.2-0.5-1.6c-2.5,1-2.5,1-2.9-2.4c-1,0.8-0.5,2.2-1.4,3.1 C1551.8-24.7,1552.9-25.7,1552.8-26.8z M1519.5-30.3c0.6-0.1,0.7-0.4,0.8-0.7c0.3-0.6-0.1-1.5,0.8-1.5c1,0,0.8,1,0.9,1.6 c0.1,0.5-0.2,1.5,0.9,1.1c0.1-1-0.6-2.2,0-3.1c0.5-0.8,1.1-1.5,0.3-2.4c-0.8-0.8-1.8-1.3-2.9-0.6c-0.1,0.2-0.1,0.5-0.2,0.8 s-0.1,0.7-0.2,1C1519.9-32.8,1519.2-31.6,1519.5-30.3z M1532.4-31.2c-0.5-1.5-3.5-1.2-2.6-3.6c-0.2,0-0.4,0.1-0.6,0.1 c-0.4,2-0.8,4-1.2,6C1531.5-27.6,1531.8-27.8,1532.4-31.2z M1529.9-28.8c-0.8-0.2-0.8-0.9-0.7-1.5c0.1-0.7,0.3-1.6,1.3-1.5 c0.9,0.1,0.8,0.9,0.8,1.6C1531.1-29.5,1530.9-28.6,1529.9-28.8z M1535.2-27c-0.5-0.5-0.7-0.9-1-1.1c-0.4-0.4-0.7-0.7-0.5-1.2 c2.9,0.2,2.9,0.2,2.4-2.1c-1.4-0.9-2.4-0.3-3.3,0.8C1532.4-28.8,1532.7-27.4,1535.2-27z M1545.7-30.8c-0.1,0.1-0.3,0.2-0.4,0.3 c-0.2,0.1-0.5,0.3-0.7,0.5l0.1,0.1l-0.1,0.1c-0.9,3.8,0.3,5.6,3.2,4.7c-0.7-0.8-2.3-0.2-2.5-1.7c-0.5-1-0.2-1.9,0.4-2.8 c0.8-1.1,2.1-0.4,3.4-0.5c-0.8-1.2-1.9-0.9-2.7-1.2C1546.2-31.1,1545.9-31,1545.7-30.8z M1540.4-26.3L1540.4-26.3 c0.4-1.4,0.3-3,1.8-3.9l0,0c-0.6-0.1-1-0.4-0.8-1.1c-1.1-0.1-1.5,0.5-1.3,1.6c-0.2,0.8-0.3,1.5-0.4,2.3c0,0.3,0,0.6,0,0.9 C1539.9-26.4,1540.2-26.3,1540.4-26.3z M1526.6-29.2c-0.2-0.1-0.3-0.3-0.4-0.5c-1.4,0.4-1.8-0.5-1.6-1.6c0.2-1,0.6-2,2-1.1 c0.1-0.2,0.3-0.3,0.5-0.4c-0.7-0.8-1.7-1.1-2.4-0.5c-1.2,1-1.2,2.4-0.7,3.8C1524.7-28.4,1525.6-28.9,1526.6-29.2z M1526.5-32.4 c0.5,1,0.2,1.8-0.4,2.7c0.2,0.1,0.3,0.3,0.4,0.5c0.3-0.2,0.5-0.4,0.8-0.6c0.2-1.1,0.8-2.2-0.2-3.1 C1526.9-32.7,1526.7-32.6,1526.5-32.4z M1561.3-25c-0.3,0-0.6,0.1-0.9,0.1c-1,0.1-1.7,0.4-1.7,1.5c0,0.8,0.5,1.3,1.5,1.3 c1.1,0,1.7-0.3,1.7-1.5c0.1-0.8,0.1-1.5,0.2-2.3c-0.8-0.8-1.6-1.2-2.6-0.5C1559.9-25.7,1561.2-26.5,1561.3-25z M1570.8-24.6 c-0.1,1.4-1,2.8-0.4,4.5c0.9-0.8,0.6-1.7,0.9-2.5c0.2-0.6,0.4-1.1,1.1-1c0.7,0.1,0.7,0.7,0.7,1.3c0,0.8-0.6,1.6,0,3 c0.8-2.1,1.3-3.6,0-5.1C1572.3-24.4,1571.5-24.3,1570.8-24.6z M1566.1-25.5c0,0.1,0,0.3-0.1,0.4c0.4,0.8,0.1,1.6-0.1,2.4 c-0.2,1,0,1.8,1.2,2c-0.2-1.6-0.9-3.4,1.2-4.4C1567.5-24.8,1567.3-27.4,1566.1-25.5z M1563.1-21.4c1.1-1.3,0.1-4.1,2.9-3.7 c0.1-0.1,0.1-0.3,0.1-0.4C1563.1-26.1,1562.3-25.2,1563.1-21.4z M1569-24.9c-0.3,1.4-1,2.7-0.1,4.3c0.3-1.4,0.5-2.8,0.8-4.2 C1569.5-24.9,1569.2-24.9,1569-24.9z\"></path><path fill=\"#C9D9E4\" d=\"M1408-51.6c0-1.2,0.1-2,0.1-2.7c-0.3,0-0.5,0-0.6,0.1c-0.7,0.5,0,2.4-1.4,2c-1.1-0.3-0.3-1.7-0.1-2.5 c0.4-2.3,0.2-1.8,2.1-1C1411.6-54.5,1409.3-53.4,1408-51.6z M1397.5-54.1L1397.5-54.1c0.1-0.7,0.4-1,1.1-0.8l0,0 c0.2-1-0.8-1.1-1.2-1.7c-0.4,0.1-0.9,0.1-1.1-0.2c-0.6-1.4-2.3,0.6-2.8-0.9c-0.2,0.2-0.3,0.4-0.4,0.6c-0.3,0.6-0.6,1.3-1,2.2 c1.4-1.2,1.4-1.2,1.6-1c1.1,1,1.1,1,1.9-0.2c0.4,0.7,0.8,1.4,1.2,2.1C1397-54.1,1397.2-54.2,1397.5-54.1z M1444-46.2 c-0.1,0.8-0.1,1.6-0.2,2.4c0.7-1,1.6-0.5,2.3-0.8c0.7-0.2,1.9-0.7,1.5-1.4s-0.3-1.8-1.3-2c-0.9-0.2-1.9-0.3-2.1,1 C1444.1-46.7,1444.1-46.4,1444-46.2z M1383-59c0.4,2.8,2.4,3.6,5.5,2.4c-0.1-0.3-0.1-0.5-0.1-0.8c-0.7-1.6-3.5-2.6-5.3-2 C1383.1-59.3,1383-59.1,1383-59z M1384.9-58.8c0.1-0.1,0.6,0.1,0.7,0.3c0.2,1-0.6,1.1-1.1,1.7 C1384.1-57.8,1384.1-58.4,1384.9-58.8z M1423.5-52.4c-4.5-0.5-4.5-0.5-4.5,2.2c0.6-0.5,0.1-2.1,1.2-1.9c1.5,0.2-0.1,1.7,0.9,2.7 C1421.5-50.7,1421.6-52,1423.5-52.4z M1441.9-48.7c-1.2,0.7-1.3,1.9-0.5,3.1c0.8-0.4,0-1.7,1.1-2c0.8,0.7-0.3,1.6,0.3,2.3 c0.7,0,0.8-0.8,1.3-0.9c0-0.2,0.1-0.5,0.1-0.8C1443.4-47.6,1443.5-49.6,1441.9-48.7z M1403.3-55.9c-0.7-0.2-1.4-0.4-2.1-0.2h0.1 c-0.3,1-0.7,1.9,0.4,2.7C1403.3-53.6,1404-54.3,1403.3-55.9z M1418-52.5c-0.7,0-1.8,0-1.9,1.4c-0.1,0.7,0,1,0.7,1 c0.8,0,1.6-0.1,1.5-1.2C1418.3-51.8,1418.8-52.6,1418-52.5z M1382.1-60.8c0.1-0.3,0.4-0.5,0-0.7c-0.3-0.1-0.7-0.2-0.8,0.2 c-0.3,1.3-0.9,2.5-0.5,4c0.7-0.4,0.5-1.1,0.8-1.5c0-0.3,0.1-0.3,0.4-0.2c0.4,0,0.7,0,1,0c0.1-0.1,0.1-0.3,0.1-0.4 C1382.5-59.8,1381.3-59.7,1382.1-60.8z M1413.6-50.8c2.4-0.5,1.9-2.6,2-4.2C1414.6-53.8,1415.2-51.8,1413.6-50.8z M1391.2-57 c0.2-0.5,0.1-0.7-0.4-0.9c-1-0.5-1.9-1.1-2.4,0.5c0.1,0.3,0.1,0.5,0.1,0.8C1389.6-55.4,1390.1-57.8,1391.2-57z M1404.3-57.4 c-0.4,0.5-0.7,1-1,1.5c0.7,1.6,0,2.3-1.6,2.5C1403.9-52.7,1404.8-54,1404.3-57.4z M1400.1-56.8c-0.9,0.8-0.8,1.9-0.8,3.4 c1.1-0.9,0.5-2.6,1.9-2.7c0.1,0,0,0,0,0C1401.3-57.1,1400.3-56.9,1400.1-56.8z M1431.4-47.7c0.3-1.5,0.7-2.3,0.4-3.6 C1430-50.4,1430.6-49.4,1431.4-47.7z M1433.3-47.7c1.4-0.5,2.6-1.1,1-2.7l0,0c-0.7,0.7-0.8,1.7-1,2.6V-47.7z M1398.7-56.8 c-0.3-0.5-1-0.6-1.4,0.1c0.4,0.6,1.5,0.7,1.2,1.7C1399.6-55.4,1399.1-56.2,1398.7-56.8z M1434.3-50.4c-0.2-0.8-0.2-1.9-1.8-1.5 C1433.3-51.5,1433.5-50.6,1434.3-50.4L1434.3-50.4z M1398.5-55c-0.6-0.1-1,0.1-1.1,0.8C1398.1-53.9,1398.5-54.1,1398.5-55z M1416.5-53.3l0.1-0.1l-0.1-0.1V-53.3z M1433.3-47.8c-0.1,0-0.1,0.1-0.2,0.1l0.1,0.1C1433.3-47.6,1433.3-47.7,1433.3-47.8 L1433.3-47.8z M1397.3-54.2c-0.1,0-0.3,0.1-0.5,0.2C1397.1-54,1397.4-53.7,1397.3-54.2z M1382-59c-0.3-0.2-0.4-0.1-0.4,0.2 C1381.7-58.9,1381.9-59,1382-59z M1385.5-58.5c0-0.2-0.6-0.4-0.7-0.3c-0.6,0.4-0.7,1.1-0.3,2C1384.9-57.5,1385.8-57.6,1385.5-58.5 z\"></path><path fill=\"#A57A5E\" d=\"M1592.7-302.9c1.3,1.2,3,0.9,4.5,1c0.7,1.3,0.4,2.1-1.2,2.2h0.1c-0.3-0.1-0.6-0.2-0.8-0.4 c-0.7-0.5-1.7-1-2.1,0c-0.3,0.7,0.6,1.2,1.5,1.2v0.1c-0.6,0.3-1.2,0.6-1.8,0.9c-0.7,0.3-1.4,0.2-1.8-0.5c-0.4-0.6-0.4-1.3,0.4-1.6 c0.8-0.3,0.4-0.6,0.1-1.1C1590.9-302.2,1591.6-302.7,1592.7-302.9z M1591.9-304.6c-0.3,0.7,0.2,1.1,0.8,1.4 c1.3-0.2,2.9-0.3,1.4-2.2C1593.2-305.5,1592.3-305.7,1591.9-304.6z M1594.6-298.8v0.1c-0.1,0.6-0.6,1.4,0.5,1.6 c0.7,0.1,1.3,0,1.6-0.6c0.5-0.9-0.4-1.3-0.6-2c-0.1,0,0,0,0,0C1595.6-299.4,1595.2-299.1,1594.6-298.8z M1618.7-300.3 c-1.5,1.8-2.1,0.5-2.7-0.6c-1.7,0.4-0.8,1.7-1,2.8c0.7-1,1.3-1.3,2-0.1c0.3,0.5,0.7,0.8,1.3,0.9 C1618.4-298.3,1618.9-299.2,1618.7-300.3z M1619.2-300c2.1,0.8,0.9,2.1,1.7,3.3c0.4-1.2,0.4-2.7,1.9-2.4s0.1,1.5,0.7,2.5 C1624.2-299.4,1623.8-299.9,1619.2-300z M1629.8-294.7c1.4-0.5,0.9-3.5,4-2.2c-1.2-1.1-2.1-0.9-2.9-1.2 C1630.1-297.1,1630.2-295.8,1629.8-294.7z M1629-297.8c-2.4-1.7-3.1-1.4-3.5,2.2C1626.3-297.7,1627.3-298.5,1629-297.8z M1609.2-302.4c-0.8-0.2-1.5-0.3-2.3-0.5c-0.2,0.1-0.4,0.2-0.6,0.3c0.1,0.8-0.3,2.4-0.1,2.3c1.5-0.6,1.7,1.2,2.8,1.2 C1608.4-300.2,1610.3-301.2,1609.2-302.4z M1613.2-298.3c0,0,0.1-0.1,0.1-0.2c-0.5-0.3-1-0.5-1.5-0.8c2.1-1.6-1-1-0.7-1.8 c-0.4,1.6-0.4,1.6,0.3,2.7c0.4,0,0.9,0.1,1.3,0.2C1612.9-298.3,1613-298.3,1613.2-298.3z M1615-294.5c-0.1-0.6,0.4-1.3-0.3-2.1 c-0.4,1.2-1.2,2.3-0.4,3.2c0.6,0.6,1.7,1,2.7,0.2C1616.4-293.9,1614.8-292.9,1615-294.5z M1602.5-303.1c-0.2,0.3-1.1,1.4,0.3,1.8 c1.5,0.3,2.5-0.1,2.1-1.9C1604-303.1,1603.1-304.2,1602.5-303.1z M1607.5-297.8c-0.9-0.1-1.7,1.4-2.7,2.9c1.8-0.9,3-0.8,4.1,0.3 C1608.5-295.8,1608.8-297.6,1607.5-297.8z M1595.3-300c-0.7-0.6-1.7-1-2.1,0c-0.3,0.6,0.6,1.2,1.5,1.2c0.5-0.3,0.9-0.6,1.4-0.9 C1595.8-299.8,1595.5-299.9,1595.3-300z\"></path><path fill=\"#C9D9E4\" d=\"M1572.6-218.4c-0.9,0.8-1.8-0.3-2.2,0.6c-0.4,1.1,3.7,3.3,0.3,4c-1.6,0.4-3-1-4.7-0.7c0,0,0.4-4.6-1.3-4.9 c-1.5-0.3-1.2,3.1-2.2,3.8c0.3-2.2-0.5-4.5,1.5-6.5c0.6,2.4,1,1.1,2.1,1.8c0.4-0.3,0.8-0.4,1.2-0.3c0.1,0.5,0.4,0.9,0.9,1.2 c-1,0-2,2.7-1.4,3.7c0.7,1.2,2.4,1.1,3.5,0.9c1.2-0.2-1.7-2.5-1-3.6C1570.3-219.4,1571.3-219.2,1572.6-218.4 C1571.7-217.6,1571.3-219.2,1572.6-218.4z M1430.9-247.1c-0.1-0.5,0.4-1.2-0.4-1.4c-1.2-0.2-0.3,2.8-2.6,2.5 c-2.5-0.4-0.2-3-2.2-3.4c-0.1,0.8-1.8,6.8-0.8,7c1.3,0.2,0.2-3.2,2.6-2.8c2.4,0.4,0.5,3.4,1.7,3.6 C1430-241.4,1430.7-246.5,1430.9-247.1C1430.8-247.6,1430.7-246.5,1430.9-247.1z M1418.6-245.9c1.7,0.4,0.6,2.4,2.2,2.7 c0.1-2.3-0.4-4.6-0.8-6.8c-0.2-1-1-1-1.5-0.2c-1.2,1.9-2.2,3.8-3.6,6.3C1416.8-244.3,1416.7-246.2,1418.6-245.9 C1420.3-245.5,1416.7-246.2,1418.6-245.9z M1447.1-245.4c-0.9,0-0.7,1.4-1.5,1.9c-0.5,0.3-2.2,0.2-3.1,0.4 c-0.6,1.2-1.2,2.4-0.3,3.7c0.6,0.8,1.4,1.1,2.6,0.6c-0.7-0.4-1.3-0.6-1.6-1c-0.7-0.9-0.5-1.8,0.1-2.6c0.4-0.6,1-0.7,1.6-0.4 c2.1,1-1.1,3.5,0.3,4.2c1.7,0.7,2.1-6,2.3-6.8C1447.4-245.4,1447.2-245.5,1447.1-245.4C1447-245.4,1447.2-245.5,1447.1-245.4z M1544.7-223.5c-1.1-1.2-2.3-1.4-3.5-0.3c-1,1-1.3,2.3-0.5,3.6c0.8,1.2,2,1.3,3.3,0.8c-0.6-0.6-2.8-0.3-2.5-1.8 c0.3-1.1,2.8-0.2,3.5-0.2C1544.9-222.1,1544.9-222.9,1544.7-223.5C1543.6-224.7,1544.9-222.9,1544.7-223.5z M1551.9-218.2 c-2-0.1-2.9-1.2-2.7-3.2c0.4-3.5,4-0.9,4.9-2.6c-1.4-0.9-2.7-1.1-4.1-0.3c-1.8,0.9-2.1,2.6-1.9,4.4c1.1,1.9,2.6,3.1,4.9,2 C1552.7-218.2,1552.4-218.2,1551.9-218.2C1549.9-218.3,1552.4-218.2,1551.9-218.2z M1597.5-215.5c-0.5,2-0.8,4.1-1.2,6.1 c-0.1,0.7,0.4,0.7,0.9,0.7c0.1-0.7,0.2-4.2,1.7-3.8c2.1,0.3-0.9,4,0.8,4.3c0.3,0.1,0.7,0.1,0.8-0.2c0.3-1.2,0.9-2.5,0.5-3.8 c-0.3-1.2-1.7-1.6-2.7-1.1c0-0.8,0.1-1.6,0.3-2.4C1598.1-216.3,1597.6-216.3,1597.5-215.5C1597-213.5,1597.6-216.3,1597.5-215.5z M1591-210.4c0-1.6,1.2-3.9-0.8-4.8c-1-0.4-2.7-0.1-2.8,0.3c-0.5,1.2-1.3,2.7-0.4,4.3c1.2-0.8,0.3-4.3,2.4-3.8 c2.3,0.5-1.1,4.3,1.3,4.4C1590.7-210.2,1590.8-210.3,1591-210.4C1591-210.9,1590.8-210.3,1591-210.4z M1435.9-240.8 c-0.1,0.3,0,0.5,0.1,0.7c2.3-0.1,0.3-4.2,2.9-3.9c2.4,0.2-0.6,4.2,0.8,4.5c0.4,0.1,0.6,0,0.7-0.4c0.2-1.6,1.1-3.2-0.1-4.7 c-1-0.6-2.3,0.4-3.2-0.6C1436.9-244.4,1436.6-241.4,1435.9-240.8C1435.9-240.6,1436-240.9,1435.9-240.8z M1577.3-217.2 c-0.8-1.3-2.2-0.1-3.1-0.9c-1,1.4-0.8,3-1.2,4.7c1.5-0.5,0.9-4.1,2.9-3.7c1.5,0.4,0,3.3,0.7,4.4 C1576.8-214.3,1578.3-215.7,1577.3-217.2C1576.5-218.5,1578.3-215.7,1577.3-217.2z M1431-241.5c1.1,1.3,2.5,0.8,3.8,0.6 c0.2-0.9,0.3-1.9,0.4-2.9C1435.5-245.7,1429.5-243.5,1431-241.5C1432.1-240.2,1430.4-242.3,1431-241.5z M1432.5-241.5 c-0.5-0.2-0.8-0.6-0.6-1.1c0.3-0.7,1-0.7,1.6-0.6c0.4,0.1,0.7,0.4,0.2,1.3C1433.6-241.7,1433.2-241.3,1432.5-241.5 C1432-241.7,1433.2-241.3,1432.5-241.5z M1560-217.3c-0.2,0.5-0.8,0.7-1.4,0.4c-0.9-0.5,0-1.2-0.1-1.8c-0.8-0.6-1,0.1-1.1,0.5 c-0.3,0.5-0.2,1.3,0.2,1.5c0.9,0.5,2.2,1.1,2.9,0.8c1.2-0.6,0.9-2.3,1.1-3.5c0.1-0.9-1.2-2-2-1.2c0.2,0.4,1,0.4,0.9,1.1 c-0.6,0.5-1.6-0.3-2,0.8C1558.9-218.1,1560.8-219.2,1560-217.3C1559.8-216.8,1560.8-219.2,1560-217.3z M1583.4-211.5 c2.5,1,1.8-1.2,2.1-2.2c0.5-1.6-0.1-2.6-2-2.4c-0.1,0.4,1.3,0.8,1,1.2C1583.4-213.4,1583.4-213.8,1583.4-211.5 C1585.9-210.5,1583.4-212.5,1583.4-211.5z M1593.6-214.1c0.1-0.1-0.5-0.1-0.7,0.2c-1.3,1.9,1.7,2,1.2,3.4c-0.2,0.6-2,0.5-2.5,1 c1.6,0.4,1.8,0.2,3.2,0C1596.6-211.5,1593-212.3,1593.6-214.1C1593.7-214.2,1593-212.3,1593.6-214.1z M1578.2-217 c2.8,1.2,0.5,3.3,1.3,5.1C1581.4-215.2,1581-216.8,1578.2-217z M1557-221.1c0.1-0.1-0.1-0.8-0.2-0.7c-0.9,0.9-1.2-0.3-2.2,1 c-0.4,0.5-1.3,4,0.2,3.8C1555.5-218.4,1554.6-220.6,1557-221.1C1557.1-221.2,1554.6-220.6,1557-221.1z M1581.2-212.8 c0.1,1.2,1,1.6,2.2,1.3c0.1-1,0.1-2,0.1-3C1582.2-214.6,1581.2-214.2,1581.2-212.8C1581.3-211.6,1581.2-214.2,1581.2-212.8z M1435.9-240.4c0-0.2,0-0.3,0-0.5C1435.5-240.7,1435.7-240.5,1435.9-240.4z M1446.6-245.4c0.1,0,0.3-0.1,0.5-0.1 C1446.9-245.8,1446.7-245.7,1446.6-245.4z M1605.8-207.3c0,0.1,0,0.2,0,0.2c0.9,0.8,1.8,0.8,2.7,0.1c1-0.8,1.3-1.8,1.1-3.1 c-0.3-1.7-1.7-1.2-2.7-1.5c0.8,0.8,2.2,1.2,1.7,2.8C1607.9-206.9,1606.7-208.2,1605.8-207.3 C1605.8-207.2,1605.9-207.4,1605.8-207.3z M1605.3-211.9c-0.6,2.1-1.2,4.2-1.2,6.5c0.2,0,0.4,0.1,0.6,0.1c0.9-1.3,2-5,1.1-6.6 C1605.6-211.9,1605.4-211.9,1605.3-211.9C1604.7-209.8,1605.4-211.9,1605.3-211.9z M1603.3-212.6c-1,1.5-1.3,3.1-0.9,4.9 C1603.1-209.3,1603.6-210.9,1603.3-212.6z M1605.9-212.3c-0.3,0-0.7-0.2-0.7,0.3c0.2,0,0.4,0.1,0.6,0.1 C1605.9-212,1605.9-212.1,1605.9-212.3C1605.6-212.3,1605.9-212.1,1605.9-212.3z M1604.7-205.3c-0.2,0-0.4-0.1-0.6-0.1 C1604.2-204.9,1604.4-204.9,1604.7-205.3z M1487.4-235.8c-0.2-0.7,0.1-1.6-0.9-1.7c-1.3-0.2-3.6,5.4-4.4,6.2 c1.6,0.3,2.2-1.6,3.6-1.3c1,0.2,1.6,3.5,2.6,2.1C1488-232.3,1487.7-234,1487.4-235.8C1487.2-236.5,1487.7-234,1487.4-235.8z M1526.3-224.6c-0.6-1.1,0.1-2.5-0.9-3.5c-0.8,0.7-0.6,4.8,0.5,5.3c0.8,0.4,1.4-1.8,2.5-1.8c-0.1,0.6-0.3,1.3-0.1,1.8 c0.3,0.6,1,1.4,1.6,0.4c0.8-1.3,1.9-2.5,2-4.4c-1.5,0.6-1.4,2.1-2.3,2.9c-0.2-0.9-2-1.1-1.1-2.5 C1527.2-226.5,1527.3-224.9,1526.3-224.6C1525.7-225.7,1527.3-224.9,1526.3-224.6z M1488.6-227.9c1.5,1.1,3,1.3,4.4-0.1 c0.1-0.7,1.5-5.4,0.5-5.6c-2-0.4,0.5,3.8-2.2,3.5c-3-0.6,0.1-3.4,1.1-3.9c-2.2-2.2-3.6,2.4-2.8,4l0,0c0.6,0.6,2.7,0.4,2.4,1.4 C1491.5-227,1489.5-228.8,1488.6-227.9C1490.1-226.8,1488.8-228.1,1488.6-227.9z M1503.2-232c-0.8-0.6-1.7-0.4-2.4,0.1 c-1.6,1.3-1.3,2.6-0.6,4.3c1.1,0.8,2.2,1.4,3.7,0.3c-0.9-0.4-3.5-0.4-3.1-2c0.2-0.9,2.7,0,3.3,0 C1504.5-230.5,1504.3-231.5,1503.2-232C1502.4-232.6,1504.3-231.5,1503.2-232z M1510.5-227.3c-0.5,0.3-3.4,0.6-3.4,1 c0,1.1,2.9,0.3,3.4,0.2c3.2-2.7-2.3-3.1-1.4-5.2c0.7-1.5,2.1,0.3,3-0.9c-1.3-0.7-2.5-1.1-3.6,0.1c-1,1.1-0.3,2.1,0.7,2.9 M1474.9-237.8c-1.5-0.3-2.5,0.5-2.9,2c-0.9,3.5,3.9,4.4,4.9,1.1C1477.1-236.3,1476.6-237.5,1474.9-237.8 C1473.4-238.1,1476.6-237.5,1474.9-237.8z M1475.8-235.1c-0.1,1-0.6,1.9-1.7,1.8c-1-0.1-1.3-1-1.2-1.9c0.2-1,0.6-1.8,1.7-1.8 C1475.8-236.8,1476-236,1475.8-235.1C1475.7-234.1,1476-236,1475.8-235.1z M1466.7-241.8c-1.1,1.4-2.6,5.6-1.7,7.3 c1.5-1.4,2.2,1,3.7,0.6C1467.8-236.5,1465.8-238.8,1466.7-241.8C1466-240.9,1465.8-238.8,1466.7-241.8z M1455.4-236.3 c1.5,0.3,2.5-0.4,2.9-2c0.4-1.7-0.2-2.8-2-3.3c-1.8-0.4-2.5,0.4-2.7,1.6C1453.1-237.9,1453.5-236.6,1455.4-236.3 C1456.9-236,1453.5-236.6,1455.4-236.3z M1457.4-238.8c-0.2,1-0.7,1.9-1.8,1.7c-1-0.1-1.2-1-1.1-1.9c0.1-1,0.5-1.8,1.7-1.7 C1457.3-240.4,1457.5-239.6,1457.4-238.8C1457.2-237.8,1457.5-239.6,1457.4-238.8z M1516.9-226c0.5-1.1,0.8-2.2-0.1-3.2 c-0.6-0.7-1.5-1-2.5-0.7c-1.6,0.4-2,2-2,3.4c0.8,1.5,2,2.1,3.6,1.7C1516.2-225.2,1516.7-225.5,1516.9-226 C1517.4-227.1,1516.7-225.5,1516.9-226z M1514.4-225.6c-1-0.2-1.2-1.1-1-2c0.2-1,0.7-1.8,1.9-1.5c1.1,0.2,1.1,1.1,1,2 C1516-226.1,1515.6-225.2,1514.4-225.6C1513.4-225.8,1515.6-225.2,1514.4-225.6z M1459-237.9c-0.3,1.5,0.5,2.6,2,2.9 c1.7,0.2,2.8-0.7,3-2.3c0.2-1.1,0.2-2.4-1.7-2.4c0.9,1.4,1,2.6-0.2,3.6c-0.7,0.6-1.4,0.3-1.8-0.4c-0.8-1.6,0-2.6,1.5-3.4 C1459.8-240.6,1459.3-239.4,1459-237.9z M1523.2-223.7c-1.3-1.4,0.9-4.2,0.9-4.2c-0.7-0.3-0.6-1.1-1.3-1.3c0,0-2.5,0.7-2.4,0.7 c0.3,0.5,0.7,0.8,1.4,0.8c0.2,0.6,0.2,1.3-0.1,1.9c0.6,1.3-0.9,2.5,1.4,2.9C1523.4-223.2,1523.5-223.4,1523.2-223.7 C1522.1-224.9,1523.5-223.4,1523.2-223.7z M1479.1-234.9c0.6-2.3,0.7-2.3,0.3-3.6c-1.2,1.3-1.9,4.1-1.5,6.6 C1479.2-232.3,1478.8-233.7,1479.1-234.9C1479.7-237.2,1478.9-234,1479.1-234.9z M1449.3-242.5c0.2-0.8,0.3-1.7,0.5-2.5 c-1.7-0.6-2.6,7.4-1.4,7.1c1.9-0.5-0.7-1.6,0.6-2.8c1.2-1.1,2.3,0.1,3.1-0.7C1451.3-242.6,1450.7-242.5,1449.3-242.5 C1449.5-243.3,1450.1-242.5,1449.3-242.5z M1534.1-221c2.9,0.8,1.9-1.7,2.2-2.8c0.3-1.5-0.1-1.7-2.1-1.7c0.1,0.4,1.2,0.3,1.1,0.8 C1534.9-223.2,1533.7-222.9,1534.1-221C1537-220.2,1533.9-222.1,1534.1-221z M1537.6-223c0,0-0.8,2.4,0,2.6c0.8,0.3,1.2-3.7,3-3.9 C1538.5-225.8,1537.6-225.3,1537.6-223z M1519.9-229c-0.2-0.4,0.5-1-0.3-1.4c-1.6,1.6-1.7,3.9-1.7,6.3c2.2,0.6,0.6-3.7,2.7-4 C1520.4-228.4,1520.1-228.7,1519.9-229C1519.7-229.4,1519.9-228.8,1519.9-229z M1496.6-232.7c0.1-0.5-0.1-0.8-0.5-0.9 c-1.2-0.2-1.4,4.2-1.5,4.8c0.4,0.1,0.8,0.1,1.2,0.2C1496.1-230,1496.3-231.4,1496.6-232.7C1496.7-233.2,1496.3-231.4,1496.6-232.7 z M1531.9-222c0.1,1.6,1.3,1.1,2.2,1c-0.2-1.1,0.1-2.1,0.6-3.1C1533.1-224.3,1531.9-223.9,1531.9-222 C1532-220.4,1531.9-223.9,1531.9-222z M1499.6-235.2c-0.3-0.1-0.7-0.1-1-0.2c-0.5,2.4-0.9,4.8-1.4,7.2c0.3,0,0.7,0.1,1,0.1 C1498.7-230.5,1499.1-232.9,1499.6-235.2C1499.3-235.3,1499.1-232.9,1499.6-235.2z M1451.7-241.1c0.4,1.3,0,2.3-1.4,3.2 c2.2-0.1,2.8-1.4,1.8-3.5C1452-241.3,1451.8-241.2,1451.7-241.1C1452.1-239.8,1451.8-241.2,1451.7-241.1z M1520.6-228.8 c-0.2-0.1-0.4-0.1-0.6-0.2c-0.1,0.3,0,0.4,0.3,0.5C1520.4-228.6,1520.5-228.7,1520.6-228.8 C1520.4-228.9,1520.5-228.7,1520.6-228.8z M1509.3-226.8c0.4,0.1,0.7-0.1,0.9-0.5C1509.9-227.1,1509.7-226.9,1509.3-226.8z\"></path><path fill=\"#122A37\" d=\"M1586.3-133.4c8.6,4.5-29,30.7-36.2,33c-22.2,7-42.9,3-64.6-3.2c-23.5-6.7-44.5-15-61.7-37 c-3.4-4.3-23.4-35.8-11.7-35.8c-11.7-18.3,23.8-35.5,39.5-40.5c25.2-8,49.9-2,74.7,7.7c15.1,5.9,75.3,66.3,61.7,75 c-4.8,3.1-40-55.9-44.6-59.2c-16.4-12-45.8-21.9-65.1-21.3c-18.3,0.5-94.2,36-54.7,44.3c-2.4-1-4.8-1.8-7.3-2.6 c-7.2,4.4,19.4,38.2,22.3,41.1c15.3,15.5,39.5,25.9,61.2,28.8c31.3,4.3,55-16.8,80.6-20.1c5.9-0.8-12.3-7.3-7.3-5.7 C1573.7-133,1584.5-127.1,1586.3-133.4C1588.2-132.4,1585.4-130.5,1586.3-133.4z\"></path><path fill=\"#1C4B5F\" d=\"M1578.2-138.4c-0.4,1.7-58.8-48.6-63.2-50.7c-35.5-16.9-65.2,7-101.2,5c3.4-11.7,55.6-23,67.6-22.9 C1527-206.5,1555.6-170.5,1578.2-138.4C1578.1-137.8,1578.1-138.6,1578.2-138.4z M1573-128.9c-36.8-5.1-64.3,22.4-102.9,0.8 c-7.6-4.2-43.3-42.4-45.4-40.3c-16.4,16.3,58.2,55.1,63.3,56.5c15.4,4.4,29.9,4.9,45.8,0.7C1539.6-112.8,1567-130.9,1573-128.9 C1569.8-129.4,1573.1-128.9,1573-128.9z\"></path><path fill=\"#143846\" d=\"M1577.8-139c-17.2-2.9-25.6-36.9-40.6-47.7c-16.6-11.9-38.7-20.2-59-19.5c-26.3,0.9-42.7,18.7-65.3,22.1 c1.8,0.4,27.6-21.1,34.3-23.7c14.6-5.6,28.2-6.6,43.3-5.3c15,1.3,38.6,9.3,52.3,19.1C1549.8-188.8,1582.5-151.8,1577.8-139 C1574.3-139.5,1579-142.1,1577.8-139z M1435.9-196.7C1436.6-196.2,1436.4-197.4,1435.9-196.7C1436-196.6,1436-196.8,1435.9-196.7z M1431.4-167.6c0.5-1-8.1-9.8-15.1-5.5c-7.6,4.7,20.6,39.5,24.2,42.9c15,14.1,38.5,24.2,59.2,27c31.2,4.2,55.1-16.8,80.6-20.1 c0.6-0.1,0.3-3.5,0.3-3.6c-11-7.1-36.2,12.8-46.9,15.6c-15.6,4.1-30.4,3.7-45.7-0.7c-5.6-1.6-79.2-40.6-63.3-56.5 C1427-169.4,1429.3-169,1431.4-167.6C1431.6-168,1430.1-168,1431.4-167.6z\"></path><path fill=\"#A57A5E\" d=\"M1435.8-168.3c-0.6-0.6-25.6-13.7-25.3-13.7c0.4-6.1,28.4,1.3,30,1.9c-1.9,2.5-11.9-3.2-12.8,0.5 c-2.5,10.8,131,52.1,135.9,42c0.1-0.2-7.7-10.3-7.4-8.3c4.1,0,26.8,9.5,25.8,15.3c-6.4,4.9-25.5-1.1-33.7-2.5 c-18.9-3.3-38.9-9.4-56.9-15.3C1478.4-152.5,1448.6-169.5,1435.8-168.3C1434.6-169.4,1438-168.5,1435.8-168.3z\"></path><path fill=\"#25677B\" d=\"M1439.6-180.4c-5.5-1.1-11-2.1-16.5-3.2c0,0.1,23.6-5.6,27.1-6.4c21.6-5,36.4-9.9,55.8-3.1 c14.2,5,53.7,27.5,55.9,46.1c-0.7-5.5-47.9-35.7-55.7-38.4C1492.5-190.1,1449.5-193.3,1439.6-180.4 C1434.1-181.5,1440.3-181.4,1439.6-180.4z M1559.9-131c-19-3.4-35.2,9.3-54.3,8.2c-9.2-0.5-65.8-21.5-59.6-37.9 c1.9-0.7,3.9-0.7,6,0c0.1-2.8-18.7-10.9-20.6-6.9c16.9,12,21.5,30.9,42.3,41.5c19.9,10.2,39.6,10.5,61.3,5.4 C1540.3-122,1558-131.2,1559.9-131C1559.2-131.1,1560.6-130.9,1559.9-131z\"></path><path fill=\"#347F98\" d=\"M1446-180.9c2.2-18.1,63.7-3.8,71.2,0.1c9.7,5.1,45.2,30.3,52.2,40.2c-0.4,0.7-32.1-12.9-34.5-14.3 c-9.8-5.9-15.9-16.5-26.9-21.6C1486.4-186.5,1467.3-173.4,1446-180.9C1446.2-182.4,1450.3-179.4,1446-180.9z M1550.6-132.4 c3.2,0-46.5-6.5-21.4-5.2c3.4,11.7-47.5,0.3-55.2-4.8c-2.1-1.4-25.7-24.4-28-18.2c-3.8,10.1,40.2,36.1,48.5,37.9 C1501.7-121.2,1549.6-126.1,1550.6-132.4C1548.9-132.5,1550.5-131.4,1550.6-132.4z\"></path><path fill=\"#4BA3C1\" d=\"M1535-154.9c-3.9,3.1-37-14.8-40.3-15.8c-17.4-5.1-37.4-3-55.1-9.8c1.9-2.5,49.4-2.2,56.1-0.8 C1509.3-178.3,1527.3-166.7,1535-154.9C1534.4-154.4,1534.3-156,1535-154.9z M1529.2-137.6c-24.3-7-47.2-15.3-71.7-21.4 C1448.6-136.4,1533-124.5,1529.2-137.6C1528.6-137.8,1529.6-136.5,1529.2-137.6z\"></path><path fill=\"#C9D9E4\" d=\"M1482.9-155.1c2.1,0.1,4.2-0.1,6.3-0.3c-7-3.7-0.1-4.4,0.4-7.6c0.5-3.2-15-3-13.9-6.1 c0.6-1.7,36.1,7.6,34.8,10.7c-0.6,1.6-5.4-1.6-6.1-0.1C1499-147.8,1498.6-150.2,1482.9-155.1 C1484-156.5,1487.7-153.6,1482.9-155.1z\"></path><path fill=\"#9DBDD3\" d=\"M1550.3-148.2c2.7,1,14.6,7.6,13.2,10.6c-3.5,7.4-60.9-11-66.2-13c8.7-4,4.2-2.2,7.1-7.9 c0.7-1.5,5.5,1.7,6.1,0.1c2-5-34.9-10.6-34.8-10.7c-1.1,3.1,14.4,2.9,13.9,6.1c-0.5,3.2-7.4,3.9-0.4,7.6 c-5.8,4.2-63.2-17.2-61.6-24.2C1431-194.6,1532.9-151.9,1550.3-148.2C1551.5-147.8,1549.5-148.4,1550.3-148.2z M1506.2-144 c2.6,0.9-34.8-11-31.9-10.6C1473.7-150,1502.1-138.5,1506.2-144C1501.3-145.6,1505.7-143.3,1506.2-144z\"></path><path fill=\"#122A37\" d=\"M1577.8-97.4c4.6,3.5,6.8,12.5-2.9,13.2C1575-87.8,1577-94.9,1577.8-97.4z\"></path><path fill=\"#25677B\" d=\"M1577.5-96c5.2,2.9,2.3,6.9-2,7.8C1572.3-93.3,1571.7-95.4,1577.5-96C1577.8-95.9,1576.4-95.9,1577.5-96z M1576.3-90.5c3.1-0.9,3.3-2.3,0.7-4.2C1574-93.8,1573.7-92.4,1576.3-90.5C1577.7-90.3,1575.4-91.1,1576.3-90.5z\"></path><path fill=\"#9DBDD3\" d=\"M1576.3-90.5c-2.5-2-2.3-3.4,0.7-4.2C1579.6-92.8,1579.4-91.3,1576.3-90.5 C1575.4-91.1,1577.7-90.3,1576.3-90.5z\"></path><path fill=\"#25677B\" d=\"M1529.8-34.8c-0.2,0-0.4,0.1-0.6,0.1c-1.5-2-4-3.4-6.1-3.6c-3.8-0.4-4.4-3-5.5-5.6 c0.8,0.1,1.6,0.3,2.4,0.4c0.3,0.2,0.5,0.3,0.8,0.5c-0.2,1.5,0.6,2.1,2,2c1.7-0.1,3.1,0.4,4.4,1.7c1.9,1.9,4.4,3.1,6.8,2.8 c2.2-0.2,4.4-1.1,6.7-1.3c0.9-0.1,1.1-0.7,1.3-1.4c1.2,0.2,2.5,0.5,3.7,0.7c-0.7,2.1-2.8,2-4.2,2.2c-1.6,0.2-3.2,0.5-4.7,1.2 c-2.3,1.1-4.5,2.1-6.6-0.2C1530.1-35.1,1530-35,1529.8-34.8z\"></path><path fill=\"#026DB8\" d=\"M1542.1-39.2c-0.2,0.7-0.5,1.3-1.3,1.4c-2.3,0.2-4.5,1-6.7,1.3c-2.4,0.2-5-0.9-6.8-2.8 c-1.3-1.3-2.7-1.8-4.4-1.7c-1.4,0.1-2.2-0.5-2-2c0.1-0.1,0.1-0.2,0.1-0.3c2.6,0.5,5.2,1,7.8,1.5c0.4,2.6,2.6,3.4,4.5,3.8 c1.2,0.2,3.4,0.1,3.8-2.1C1538.7-39.9,1540.4-39.5,1542.1-39.2z\"></path><path fill=\"#347F98\" d=\"M1537-40.2c-0.4,2.2-2.6,2.4-3.8,2.1c-1.9-0.4-4.1-1.2-4.5-3.8C1531.5-41.3,1534.2-40.7,1537-40.2z\"></path></g></g><g id=\"book1\"><path opacity=\"0.8\" fill=\"#37AA3C\" d=\"M839.3-337.8H723.6c-4.8,0-8.8,4-8.8,8.8v158.6c0,4.8,4,8.8,8.8,8.8h115.7 c4.8,0,8.8-4,8.8-8.8V-329C848.1-333.8,844.1-337.8,839.3-337.8z M839.3-179.2H723.6v-142.1h115.7V-179.2z\"></path><path fill=\"#F7F9F8\" d=\"M726.5-324.3v142.1h115.7v-142.1H726.5z\"></path><path fill=\"#4C5D66\" d=\"M842.2-340.8H726.5c-4.8,0-8.8,4-8.8,8.8v158.6c0,4.8,4,8.8,8.8,8.8h115.7c4.8,0,8.8-4,8.8-8.8V-332 C851-336.8,847-340.8,842.2-340.8z M842.2-182.2H726.5v-142.1h115.7V-182.2z\"></path><rect x=\"771.1\" y=\"-175.5\" fill=\"#34414F\" width=\"26.4\" height=\"4.4\"></rect><path fill=\"#343434\" d=\"M784.5-242.2c-3,4.2-1.5,9.3-1.1,14c0.3,4.9-0.7,8.7-4.2,12.2c-1.2,1.2-3.3,2.2-1.5,3.9 c1.8,1.7,2.9-0.2,4.3-1.4c3.3-2.8,6.8-4.9,11.1-2.7c10.1,5.2,3.7,18-2,23.8c-3.2,3.3-7.1,6-11.2,8c-5.2,2.6-10.7,2.1-16.3,2.1 c-8.3,0-24.3,3.3-25.8-8.8c-0.5-4.1-0.5-11.4,1.3-15.1c2.2-4.6,6.5-7.8,8.3-12.7c1.8-5,1.6-10.7,2-16c0.3-4.2-1.4-10,1.2-13.8 c1.1-1.6,2.8-1.8,4.5-2.5c-0.1,0.1,2.3-0.5,2.5-0.8c0.2-0.4-0.1-1.5-0.1-1.5c0.1-0.1-0.1-1.4,0.4-2c0.8-0.9,2.5-1,3.6-0.8 c4.3,0.9,1,2,1.7,3.8c0.6,1.6,3.4,1.3,4.8,2c1.8,0.9,2.8,1.9,3.5,3.7c0.8,1.9,0.6,3.7,0.6,5.4c0,2.9,0.2,5.9,0.5,8.9 c0.1,1.5-0.3,5.3,1.6,5.6c2.4,0.4,3.1-2.7,3.3-4.3c0.5-2.7-0.4-6.6,0.8-9.1C779.6-242.9,781.6-242.2,784.5-242.2 C782.7-239.7,783-242.2,784.5-242.2z M784.2-192.2c6.7-2.1,17.8-18.4,6.3-21.6c-3.7-1-8.4,2.7-8.7,6.5c-0.2,2.2,1.8,4.7,2.3,6.9 C784.8-197.6,784.5-195,784.2-192.2C785-192.5,784.4-193.5,784.2-192.2z M756.1-233.6c-1.2,0-1.1,7-1.2,8.4 C756.2-225.2,756-232.2,756.1-233.6C755.9-233.6,755.9-230.8,756.1-233.6z M750.9-198.4C749.1-199.6,748.4-196.8,750.9-198.4 C750.4-198.7,750.3-198,750.9-198.4z\"></path><path fill=\"#343434\" d=\"M841.3-323.8c0,3.7,0,7.3,0,11c-0.6,0-1.9,0.1-2.4,0.1c-28.7-0.1-58.5-0.2-87.2-0.3c-7,0-15.9-0.2-22.9-0.2 c-1.2,0-1.6-0.3-1.5-1.3c0.1-2.3,0-4.7,0-7c0-1.8,0.6-2.3,2.8-2.3c10.3,0,22.7,0,33,0c24.9,0,53,0,78,0 C841.4-323.8,840.8-323.8,841.3-323.8z M751.8-317.7c0-0.5,0-1,0-1.6c-0.5-0.1-1-0.1-1.5-0.2c0,0.7,0,1.3,0,1.9 C750.8-317.6,751.3-317.7,751.8-317.7z M797.4-319.4c0,1,0,1.6,0,2.2c0.1,0,0.2,0,0.3,0c0.1-0.6,0.2-1.1,0.3-1.7c0.2,0,0.3,0,0.5,0 c0.1,0.5,0.3,1,0.4,1.5c0.3-0.4,0.6-1,0.4-1.1C798.9-318.9,798.2-319.1,797.4-319.4z M773-317.1c0.1-0.2,0.3-0.3,0.4-0.5 c-0.3-0.2-0.5-0.5-0.8-0.7c-0.3-0.3-0.5-0.6-0.8-0.9c-0.2,0.5-0.6,1.1-0.5,1.4C771.7-317.4,772.4-317.3,773-317.1z M791.2-317.3 c0.1,0,0.2,0,0.4,0c0.1-0.5,0.2-1.1,0.3-1.6c0.2,0,0.3,0,0.5,0c0.1,0.5,0.2,1.1,0.3,1.6c0.3-0.5,0.6-1.1,0.3-1.3 c-0.4-0.4-1.1-0.4-1.8-0.6C791.2-318.4,791.2-317.9,791.2-317.3z M805-319.4c0,1,0,1.6,0,2.2c0.1,0,0.2,0,0.3,0 c0.1-0.6,0.2-1.2,0.2-1.7c0.2,0,0.4,0,0.5,0c0.1,0.5,0.3,1,0.4,1.6c0.3-0.4,0.6-0.9,0.4-1.1C806.4-318.9,805.7-319,805-319.4z\"></path><path fill=\"#343434\" d=\"M820-296.1c0-2-0.4-4.1,0.6-5.9c1.2,2.1,0.8,5.9,0.2,8.2c-2.5-1.5-4.2-4.1-6.1-6.3c0,2.2,0.4,4.4-0.7,6.3 c-1-2-0.9-6-0.1-8.2c2.2,1.2,4.3,4,5.6,6.1C819.7-296,819.8-296,820-296.1C820-297.7,819.8-296,820-296.1z M786.7-266.2 c1.6,1.9,3.2,4.5,5.4,5.6c0.8-2.1,0.9-6.1-0.1-8.2c-1.1,1.8-0.6,4.2-0.6,6.3c-1.8-2.1-3.6-5-6.1-6.3c-0.6,2.2-0.9,6,0.2,8.1 c1-1.9,0.6-4,0.6-6.1C786.4-266.4,786.6-266.3,786.7-266.2z M803.5-277.2c6.2-0.3,4.3-9.7-1.7-8.1c-1.4,0.4-1.2,0-1.9,1.2 c-0.2,0.3-0.3,5,0,5.6C800.8-276.8,801-277.1,803.5-277.2z M801.2-283.4c0-1.2,6.2-0.6,4.8,3.2c-0.7,2.1-3,1.9-4.9,1.9 C801.2-280.1,801.2-281.8,801.2-283.4z M776.8-298.1c0,3.5,0.3,4.6,4,4.1c1.9-0.3,3.4-1.9,3.5-3.8c0.2-2.8-2.2-4.3-4.6-4.3 C776.4-302.1,776.8-301.2,776.8-298.1C776.8-298.1,776.8-298.1,776.8-298.1C776.8-297.8,776.8-298.1,776.8-298.1z M778.1-301 c2.1-0.3,4.9,0,5.1,2.8c0.1,3-3,3-5.1,3.1C778.1-297.2,778.1-299,778.1-301C779.7-301.2,778.1-299,778.1-301z M810.9-300.7 c-3.6-4.3-10.3,2-6.1,5.8c4.4,4.1,9.2-3.7,3.4-2.8c0,0.8,0.5,1.1,1.4,1c0.9,2.8-3.5,1.9-4.4,0.4c-2.6-4.3,2.9-4.9,5.4-4.1 C810.7-300.5,810.8-300.6,810.9-300.7C810.6-301,810.8-300.6,810.9-300.7z M802.3-267.3c-3.6-4.6-11.1,2.6-5.6,6.2 c1.6,1,3.4,0.9,5,0.2c0.9-0.4,0.5-3.1,0.5-3.6c-1.2,0-1.9-0.2-2.8,0.6c0.8,0.6,0.9,0.6,1.9,0.8c-0.4,0.7-0.6,1.4-1,1.6 c-1.3,0.4-2.6,0.3-3.5-0.8c-0.9-1.1-1-2.3-0.4-3.6C798-269,800.9-266.1,802.3-267.3C802-267.6,802.2-267.2,802.3-267.3z M772.7-267.9c0-0.3-0.3-0.6-0.5-0.8c-1.3,1.5-1.2,6.6-0.1,8.1c0.7-1.1,0.5-2,0.5-3.4c1.6,0,3,0,4.5,0c0,1.4-0.2,2.2,0.6,3.4 c1.1-1.6,1.1-6.3,0.1-8.1c-0.8,1.2-0.6,2-0.6,3.4c-1.6,0-3,0-4.5,0C772.7-266.3,772.7-267.1,772.7-267.9z M785.1-278 c0,0.2,0.4,0.5,0.6,0.7c0.9-1.1,0.6-2.3,0.6-3.7c2,1,2.8,2.8,4.6,4c0.1-0.1,0.2-0.3,0.3-0.4c-0.5-0.8-2.4-2.9-2.5-3.8 c-0.1-0.8,1.9-1.2,0.9-2.9c-1-1.8-2.7-1.4-4.5-1.4C785-282.8,785-280.4,785.1-278z M786.4-284.3c2.6-0.1,2.8,2.7,0,2.4 C786.4-282.7,786.4-283.5,786.4-284.3C787.4-284.4,786.4-283.5,786.4-284.3z M816.2-277.3c-1.2-2.7-2.2-5.5-4-8 c-1.6,2.5-2.7,5.2-3.9,8c0.1,0.1,0.3,0.2,0.4,0.4c0.6-0.6,1.7-2.7,2.8-2.5c2.4,0.4,2.4,0.8,4.1,2.6 C815.8-277.1,816-277.2,816.2-277.3C815.3-279.4,816-277.2,816.2-277.3z M813.4-280.7c-0.8,0-1.5,0-2.3,0c0.4-0.9,0.7-1.7,1.1-2.8 C812.7-282.3,813-281.6,813.4-280.7C812.6-280.7,813-281.6,813.4-280.7z M779.5-284.3c1.3,0,2.2,0.2,3.3-0.6c-7.1-4.9-6.5,12,0,7.1 c-1.1-0.8-2.2-0.6-3.5-0.6c0.1-1,0.1-1.7,0.1-2.5c1.2,0,2.1,0.2,3.2-0.5c-1-0.8-1.8-0.6-3.1-0.6 C779.5-282.8,779.5-283.5,779.5-284.3C780.5-284.3,779.5-283.5,779.5-284.3z M790.3-301c0.3,0,0.7-0.3,1-0.5 c-5.8-4.1-4.7,4.6-4.7,7.6c1.7,0,3.4,0.4,4.8-0.6c-1.2-0.7-2.2-0.5-3.5-0.5c0-0.9,0-1.6,0-2.4c1.3,0,2.2,0.2,3.3-0.6 c-1.1-0.8-1.9-0.6-3.3-0.6c0-0.9,0-1.6,0-2.4C788.7-301,789.5-300.9,790.3-301z M766.9-280.9c0.3,0,0.6-0.3,0.9-0.5 c-1.1-0.8-1.8-0.7-3.2-0.7c0-0.9,0-1.6,0-2.3c1.4,0,2.3,0.3,3.3-0.7c-1.3-0.2-3.5-1-4.6,0.2c-0.8,0.8-0.1,6.4-0.1,7.7 c1.6,0,3.4,0.3,4.7-0.5c-1.2-0.7-2.1-0.6-3.5-0.6c0-0.9,0-1.6,0-2.5C765.4-280.9,766.1-280.9,766.9-280.9z M808.5-268.2 c-1.5-1.8-4.3,0.2-4.1,2c0.2,1.5,2.7,2.5,3.3,4c-2.1,0.6-1.8,0.5-3.5-0.4c0.5,1.8,2.3,3.1,4.1,1.5c2.7-2.5-1.7-3.4-2.3-4.9 c-1-2.5,1.5-1.1,2.8-1.2C808.7-267.5,808.7-267.9,808.5-268.2z M797.1-301.7c-1.6-1.7-4.2,0.4-3.9,2.3c0.2,1.5,2.7,2.4,3.3,4 c-2.1,0.6-1.8,0.5-3.5-0.4c1.2,3.8,6.1,1.7,3.4-2.3c-1.4-2.1-3-3.7,1.2-2.3C797.4-301,797.3-301.5,797.1-301.7z M769.3-285.3 c1.1,2.6,2.2,5.3,3.5,8.3c1.3-3,2.4-5.7,3.7-8.6c-2.2,0.3-3,4.2-3.7,5.8c-0.9-2.1-1.4-4.3-3.2-5.8 C769.5-285.5,769.4-285.4,769.3-285.3C770.4-282.6,769.4-285.4,769.3-285.3z M791.3-285.3c0.5,1.6,2.1,2.5,2.6,4.3 c0.3,1-0.4,3,0.4,3.6c1.4,1,0.9-2.9,1-3.3c0.5-1.8,1.9-3.1,3-4.6c-2.3-0.1-2.4,1.9-3.7,2.7c-0.9-1.2-1.8-2.1-3-3 C791.5-285.5,791.4-285.4,791.3-285.3C791.3-285.1,791.4-285.4,791.3-285.3z M819.4-282.7c-2.4-2.6-2.4-2.6-3.3-2.4 c0.8,1.5,2.2,2.4,2.6,4.1c0.1,0.4-0.3,4,0.7,3.8c1.3-0.2,0.4-2.7,0.6-3.5c0.5-1.8,1.9-3.1,3-4.5 C820.8-285.6,820.7-283.2,819.4-282.7C817-285.3,820.7-283.2,819.4-282.7z M765.5-266.4c0,1.9-0.4,4,0.6,5.7c1.1-1.9,0.6-4.9,0.6-7 c1.2,0,1.9,0.2,2.8-0.6c-1-0.9-5.7-1-6.8-0.1c0.8,0.9,1.6,0.6,2.8,0.6C765.5-267.2,765.5-266.8,765.5-266.4z M758.2-301.8 c-2,0-6.7-1.2-6.7,1.7c1.6-1.5,1.7-1.5,3.6-1.1c-0.4,2.3-0.8,4.6-1.2,6.9c0.4,0,1.1,0,1.7,0c-0.1-1.4,0.3-11,3.7-5.7 C759.6-301.5,759.4-301.7,758.2-301.8z M808.7-229.1c-0.3,1.8-0.6,3.4-0.2,5c0.2,0,0.4,0,0.6,0c0.1-1.1,0.1-2.2,0.2-3.5 c0.6,0.7,1,1.1,1.6,1.8c0.4-0.6,0.8-1.2,1.1-1.7c0.2,0.1,0.3,0.1,0.5,0.2c0,1.1,0,2.2,0,3.2c0.2,0,0.3,0,0.5,0 c0-1.3,0.6-4.2-0.5-5.1c-0.5,0.7-0.9,1.5-1.4,2.3C810-227.9,809.4-228.5,808.7-229.1C808.4-227.3,809.4-228.5,808.7-229.1z M801.3-233.6c4,0,3.7-4.9-0.1-5.1c-2.2-0.1-1.2,1.5-1.4,2.3C799.6-233.7,799.7-233.6,801.3-233.6z M800.6-238.3 c3.3,1.6,3.4,2.6,0,4.3C800.6-235.7,800.6-236.7,800.6-238.3C801.6-237.8,800.6-236.7,800.6-238.3z M807.7-238.7 c-1.4,0-2.7,1.2-2.6,2.6c0,1.4,1.3,2.6,2.7,2.5c1.4,0,2.7-1.3,2.7-2.6C810.4-237.5,809.1-238.7,807.7-238.7z M805.9-236.1 c-0.1-5.1,7.2,1.6,1.8,1.7C806.7-234.4,806-234.9,805.9-236.1z M804.5-224.2c0.1-0.6,0.1-1.2,0.2-2.3c0.9,1,1.7,1.7,2.4,2.5 c0.1-0.1,0.2-0.2,0.4-0.3c-0.5-0.7-0.9-1.5-1.4-2.2c0.1,0,0.3,0,0.4,0c0-2.1-0.5-2-2.5-2.8c0,2,0,3.5,0,5.1 C804.2-224.2,804.4-224.2,804.5-224.2C804.6-224.9,804.4-224.2,804.5-224.2z M795.8-229c-0.1,1.1-0.1,2.2-0.2,3.4 c-1.2-1.3-2.3-2.5-3.6-3.8c0,2.1,0,3.6,0,5.2c0.1,0,0.3,0,0.4,0c0-1.1,0-2.2,0-3.7c1.4,1.5,2.4,2.7,3.5,3.9c0.8-0.5,0.3-4,0.3-5 C796.2-229,796-229,795.8-229C795.7-227.9,796-229,795.8-229z M815.9-233.7c0-1.6,0-3.1,0-4.7c-0.2,0-0.3,0-0.5,0 c0,1.1,0,2.1,0,3.6c-1.4-1.5-2.5-2.7-3.8-4.1c0,2.1,0,3.7,0,5.3c0.2,0,0.3,0,0.5,0c0-1.1,0-2.2,0-3.7c1.4,1.5,2.4,2.7,3.4,3.9 C815.7-233.6,815.8-233.7,815.9-233.7C815.9-235.3,815.8-233.7,815.9-233.7z M823.8-224c0-1.6,0-3.2,0-4.8c-0.2,0-0.4,0-0.5-0.1 c-0.1,1.1-0.1,2.2-0.2,3.5c-1.2-1.3-2.3-2.5-3.4-3.7c-0.9,0.7-0.5,3.9-0.3,4.9c0.2,0,0.4,0,0.6,0c0-1.1,0-2.1,0-3.5 c1.3,1.5,2.3,2.6,3.3,3.8C823.5-224,823.7-224,823.8-224C823.8-225.7,823.7-224,823.8-224z M800.1-229.2c-7.6,0,2.9,9.8,2.7,2.5 C802.8-228,801.5-229.2,800.1-229.2z M800.2-224.8c-4.7,0.6,0.9-7.2,1.8-1.9C801.9-225.6,801.3-224.9,800.2-224.8z M799.9-298 c0,1.5-0.3,3,0.6,4.2c1.2-1.4,1.1-6.8,0.1-8.2C799.6-300.8,799.9-299.6,799.9-298C799.9-298,799.9-298,799.9-298 C799.9-296.9,799.9-298,799.9-298z M816.3-229.1c-0.1,0-0.3,0-0.4,0c-0.7,1.6-1.4,3.2-2.2,5.1c1.1-0.7,1.8-1.5,2.5-1.5 c0.7,0,1.5,0.8,2.6,1.5C817.8-225.9,817-227.5,816.3-229.1C816.1-229.1,817-227.5,816.3-229.1z M756.1-274.8 c0.7-3.5,1.4-7,2.2-10.9c-2.2,3.2-2.2,6.9-2.8,10.8C755.8-274.9,755.9-274.9,756.1-274.8C756.8-278.3,755.9-274.9,756.1-274.8z M781.1-264.7c0,1.5-0.2,2.7,0.6,4c1.2-1.7,1.3-6.4,0-8.1C780.8-267.5,781.1-266.1,781.1-264.7 C781.1-264.7,781.1-264.7,781.1-264.7C781.1-263.6,781.1-264.7,781.1-264.7z M754-280c0.2-6.2-8.5,2.7-2.6,2.8 C752.6-277.3,754-278.7,754-280z M751.6-277.7c-0.2,0.2-1.2-2.8,0.5-4.1c0.4,0.5,0.7,1,1.2,1.7 C752.7-279.2,752.2-278.4,751.6-277.7z M761.2-299.9c-0.2,1.9-1,4.1-0.3,5.9c0.8-1.2,2.5-8.3,0.4-7.9 C761.2-301.2,761.3-300.6,761.2-299.9z M768.7-298.9c-1.6,2.1-2.8,4.3,0.6,5c0.1-0.6-1.2-0.5-1.5-1.4 C767.4-296.3,768.4-298,768.7-298.9L768.7-298.9z M763.7-296.8c0,0.3-0.9,3.4,0.7,2.7c0.1-1.2,1-4.6-1-4.8 C763.6-298,763.7-297.4,763.7-296.8z M768.7-298.9c1.2,0.6,1.7,1.4,0.2,2.7c0.2,0,0.4,0.1,0.7,0.1c0.4-0.5,0.7-1.1,1.1-1.6 C774.9-295.1,768.7-298.9,768.7-298.9C769.9-298.3,768.7-298.9,768.7-298.9z\"></path></g><g id=\"arduino\"><path fill=\"#0F7391\" d=\"M1676.9,223.8l-1.7,2.5l-15.9,2.9l-2.9,4.2l-45.6,8.4l-4.2-2.9l-2.1,0.4c-0.8,0.1-1.5-0.4-1.6-1.1 c0,0,0,0,0,0l-16.4-89.1c-0.1-0.8,0.4-1.5,1.1-1.6c0,0,0,0,0,0l71.4-13.1c0.8-0.1,1.5,0.4,1.6,1.1l0,0L1676.9,223.8 M1652.1,228.2 c-1.2,0.2-2,1.4-1.8,2.6c0.2,1.2,1.4,2,2.6,1.8c0,0,0,0,0,0c1.2-0.2,2-1.4,1.8-2.6C1654.5,228.8,1653.4,228,1652.1,228.2 C1652.1,228.2,1652.1,228.2,1652.1,228.2z M1613.3,235.4c-1.2,0.2-2,1.4-1.8,2.6c0.2,1.2,1.4,2,2.6,1.8c0,0,0,0,0,0 c1.2-0.2,2-1.4,1.8-2.6C1615.7,236,1614.5,235.2,1613.3,235.4C1613.3,235.4,1613.3,235.4,1613.3,235.4z M1660.3,153.7 c-1.2,0.2-2,1.4-1.8,2.6c0.2,1.2,1.4,2,2.6,1.8c0,0,0,0,0,0c1.2-0.2,2-1.4,1.8-2.6C1662.7,154.3,1661.5,153.5,1660.3,153.7 C1660.3,153.7,1660.3,153.7,1660.3,153.7L1660.3,153.7z M1592.9,164.3c-1.2,0.2-2,1.4-1.8,2.6c0.2,1.2,1.4,2,2.6,1.8c0,0,0,0,0,0 c1.2-0.2,2-1.4,1.8-2.6S1594.1,164.1,1592.9,164.3C1592.9,164.3,1592.9,164.3,1592.9,164.3z\"></path><path fill=\"#333333\" d=\"M1642.3,162.5c1.4,7.4,1.7,6.9-5.7,8.2C1635.3,163.3,1634.9,163.8,1642.3,162.5z\"></path><path fill=\"#333333\" d=\"M1620,181.5c3.2,17.2,6.3,34.4,9.5,51.6c-7.1,1.3-6.2,2.6-8.5-2.6c-2.7-6.1-2.8-15.2-4-21.7 c-1.2-6.5-4.4-15.1-4-21.7C1613.3,181.2,1612.6,182.9,1620,181.5z\"></path><path fill=\"none\" stroke=\"#FFFFFF\" stroke-width=\"0.864\" stroke-linecap=\"round\" d=\"M1662.5,225.9l-9.7-52.4 M1614.9,234.6 l-3.6-19.4 M1610.5,210.8l-3.2-17.6 M1655.1,202.9c-0.8-0.3-4.8-0.5-4.3,2c0.5,2.5,4.2,0.7,4.7,0.3 M1655.8,206.8 c-1.5,0.3-3.6,0.9-4.4,1.2c1.2-0.2,2.4-0.4,3.7-0.7c-1.3,0.9-2.3,2.7-3.1,3.5c1.6-0.3,3.6-0.6,4.3-1.3c-1.2,0.2-2.4,0.4-3.7,0.7 M1657,212.8c0.8,4.5-4.7,0.9-4.7,0.9C1652.3,213.6,1656.2,208.3,1657,212.8z M1656.5,212.9c0,0-4.3-2.6-3.7,0.7\"></path><path fill=\"#404040\" d=\"M1604.2,215.6c0.9,4.7,7,22.4,0.4,21.8C1603.7,232.8,1597.5,215.1,1604.2,215.6z\"></path><path fill=\"#404040\" d=\"M1671.6,225.1c-1.7-9.4-3.5-18.8-5.2-28.3c6-2.8,5.4,9.4,6.1,13.5C1673.3,214.3,1678.2,225.6,1671.6,225.1z \"></path><path d=\"M1603.3,216.9c-0.6,0.8,1,1.7-1.1,1.6C1601.3,216.6,1602.7,217.7,1603.3,216.9z M1602.8,222.1c2.1,0.1,0.6-0.8,1.1-1.6 C1603.4,221.3,1602,220.2,1602.8,222.1z M1603.5,225.6c2.1,0.1,0.6-0.8,1.1-1.6C1604,224.8,1602.6,223.7,1603.5,225.6z M1604.1,229.1c2.1,0.1,0.6-0.8,1.1-1.6C1604.7,228.3,1603.3,227.2,1604.1,229.1z M1604.8,232.7c2.1,0.1,0.6-0.8,1.1-1.6 C1605.3,231.9,1603.9,230.8,1604.8,232.7z M1605.4,236.2c2.1,0.1,0.6-0.8,1.1-1.6C1606,235.4,1604.6,234.3,1605.4,236.2z\"></path><path fill=\"#404040\" d=\"M1663.1,159.1c1.2,6.8,2.5,13.5,3.7,20.3c0.7,4,5.9,16.1-0.8,15.7c-1.2-6.8-2.5-13.5-3.7-20.3 C1661.6,170.7,1656.5,158.6,1663.1,159.1z\"></path><path fill=\"#F2F2F2\" d=\"M1651.6,222.9c-0.2-1.2-0.4-2.4-0.7-3.6C1653.9,219.9,1654,221.3,1651.6,222.9z\"></path><path fill=\"#404040\" d=\"M1643,227.7c2.3-4.7,4.5,3,4.4,4.9C1644.4,235.1,1641.6,230.7,1643,227.7z M1643.9,233.3 c0.1-1.9-2.2-9.6-4.4-4.9C1638,231.4,1640.8,235.7,1643.9,233.3z M1640.4,233.9c0.1-1.9-2.2-9.6-4.4-4.9 C1634.5,232,1637.3,236.4,1640.4,233.9z\"></path><path fill=\"#8D8C8C\" d=\"M1637.4,230.4c0.5-0.7-0.8-1.4,0.9-1.3C1639.1,230.6,1637.9,229.7,1637.4,230.4z M1639,232.6 c-1.7-0.1-0.5,0.7-0.9,1.3C1638.6,233.2,1639.7,234.2,1639,232.6z M1641.9,228.4c-1.7-0.1-0.5,0.7-0.9,1.3 C1641.4,229.1,1642.6,230,1641.9,228.4z M1642.5,231.9c-1.7-0.1-0.5,0.7-0.9,1.3C1642.1,232.6,1643.3,233.5,1642.5,231.9z M1645.4,227.8c-1.7-0.1-0.5,0.7-0.9,1.3C1645,228.4,1646.1,229.3,1645.4,227.8z M1646.1,231.3c-1.7-0.1-0.5,0.7-0.9,1.3 C1645.6,231.9,1646.8,232.9,1646.1,231.3z\"></path><path fill=\"#404040\" d=\"M1652.1,160c-4.7-2.3,3-4.5,4.9-4.4C1659.4,158.7,1655.1,161.5,1652.1,160z M1657.6,159.1 c-1.9-0.1-9.6,2.2-4.9,4.4C1655.7,165,1660.1,162.2,1657.6,159.1z M1658.2,162.6c-1.9-0.1-9.6,2.2-4.9,4.4 C1656.4,168.5,1660.7,165.7,1658.2,162.6z\"></path><path fill=\"#8D8C8C\" d=\"M1653.6,165.8c0.5-0.7-0.8-1.4,0.9-1.3C1655.2,166,1654,165.1,1653.6,165.8z M1658,163.8 c-1.7-0.1-0.5,0.7-0.9,1.3C1657.6,164.5,1658.7,165.4,1658,163.8z M1653.8,160.9c-1.7-0.1-0.5,0.7-0.9,1.3 C1653.4,161.6,1654.6,162.5,1653.8,160.9z M1657.4,160.3c-1.7-0.1-0.5,0.7-0.9,1.3C1656.9,160.9,1658.1,161.8,1657.4,160.3z M1653.2,157.4c-1.7-0.1-0.5,0.7-0.9,1.3C1652.7,158,1653.9,159,1653.2,157.4z M1656.7,156.7c-1.7-0.1-0.5,0.7-0.9,1.3 C1656.3,157.4,1657.4,158.3,1656.7,156.7z\"></path><path fill=\"#B3B3B3\" d=\"M1582,160.1c-0.6-3.1-4.9-15.3-3.3-17.7c0.7-1.1,14.7-3.9,15.9-3.2c1,0.6,3.7,16.6,3.2,17.5 C1596.4,159,1585.3,159.5,1582,160.1z\"></path><path fill=\"#999999\" d=\"M1578.7,142.1c-0.5-1-0.5-2.6-0.7-3.7c5.3-1,10.6-2,15.9-2.9C1596.6,141.9,1583.2,141.3,1578.7,142.1z\"></path><path opacity=\"0.5\" fill=\"#CCCCCC\" enable-background=\"new \" d=\"M1582,160.1c-1.3-7.2-2.7-14.5-4-21.7c0.3-0.1,0.7-0.1,1-0.2 C1579.9,142.9,1584.7,157.4,1582,160.1z M1593.9,135.5c-0.3,0.1-0.7,0.1-1,0.2c1.3,7.2,2.7,14.5,4,21.7 C1599.6,154.7,1594.8,140.2,1593.9,135.5z\"></path><path fill=\"#1A1A1A\" d=\"M1604.6,185.7c-6.7-0.6-5.3-9.5,2.7-9.8C1611.9,178.7,1611.2,186.3,1604.6,185.7z M1605.4,166 c-8,0.3-9.4,9.2-2.7,9.8C1609.4,176.4,1610,168.8,1605.4,166z\"></path><path fill=\"#E6E6E6\" d=\"M1606.2,185.2c-5.5,1-7.1-7.5-1.6-8.5C1610.2,175.6,1611.7,184.2,1606.2,185.2z M1602.8,166.7 c-5.5,1-3.9,9.6,1.6,8.5C1609.9,174.3,1608.3,165.7,1602.8,166.7z\"></path><path fill=\"#CCCCCC\" d=\"M1600.3,149.8c0.6,2.2,1,4.7,1.3,7.1c9.5-1.8,7.7-2.2,6-11.6C1603.7,146,1598.9,145.1,1600.3,149.8z\"></path><path fill=\"#CCCCCC\" d=\"M1610.2,152.2c-0.6-2.2-1-4.7-1.3-7.1c-2.6,0.5-5.2,1-7.8,1.4c1.7,9.4,0.1,10.5,9.7,8.7 C1610.5,154.2,1610.3,153.2,1610.2,152.2z\"></path><path fill=\"#852725\" d=\"M1604.7,148.6c5.5-1,0.9,4.9,0.9,4.8C1605.6,153.5,1599.2,149.6,1604.7,148.6z\"></path></g><g id=\"battery2\"><path id=\"path6101\" fill=\"#353535\" d=\"M1648.7,295.2c0.4-0.9,1.6-1.2,2.7-0.7l60.9,28c1.1,0.5,1.6,1.6,1.2,2.5l-5.5,11.9 c-0.4,0.9-1.6,1.2-2.7,0.7l-60.9-28c-1.1-0.5-1.6-1.6-1.2-2.5L1648.7,295.2L1648.7,295.2z\"></path><path id=\"path6103\" fill=\"#CE925D\" d=\"M1661.1,317.3l-16.8-7.7c-1.1-0.5-1.6-1.6-1.2-2.5l5.5-11.9c0.4-0.9,1.6-1.2,2.7-0.7 l16.8,7.7L1661.1,317.3z\"></path><path id=\"path6109\" fill=\"#7C7C7C\" d=\"M1647,299.3c0.1,0.1-2,4.6-2.1,4.5l0,0c0.1-0.3,0-0.6-0.4-0.8l-0.3-0.1 c-0.3-0.2-0.5-0.5-0.4-0.8l1.2-2.5c0.1-0.3,0.5-0.4,0.8-0.2l0.3,0.1C1646.5,299.6,1646.9,299.5,1647,299.3L1647,299.3L1647,299.3z\"></path><path id=\"path6135\" opacity=\"0.35\" fill=\"#FFFFFF\" enable-background=\"new \" d=\"M1646.4,305.1c0.2-0.5,1.2-0.7,2-0.3l58.1,26.7 c0.9,0.4,1.4,1.1,1.1,1.7l-1.4,2.9c-0.2,0.5-1.2,0.7-2,0.3l-58.1-26.7c-0.9-0.4-1.4-1.2-1.1-1.7L1646.4,305.1L1646.4,305.1z\"></path></g><g id=\"battery1\"><path id=\"path6101_1_\" fill=\"#353535\" d=\"M1586.1,279.5c0.5-0.8,1.8-1,2.8-0.4l57,35.3c1,0.6,1.4,1.8,0.9,2.6l-6.9,11.1 c-0.5,0.8-1.8,1-2.8,0.4l-57-35.3c-1-0.6-1.4-1.8-0.9-2.6L1586.1,279.5L1586.1,279.5z\"></path><path id=\"path6103_1_\" fill=\"#CE925D\" d=\"M1595.8,302.9l-15.7-9.8c-1-0.6-1.4-1.8-0.9-2.6l6.9-11.1c0.5-0.8,1.8-1,2.8-0.4l15.7,9.8 L1595.8,302.9z\"></path><path id=\"path6109_1_\" fill=\"#7C7C7C\" d=\"M1584,283.3c0.1,0.1-2.5,4.3-2.6,4.2l0,0c0.2-0.3,0-0.6-0.3-0.8l-0.3-0.2 c-0.3-0.2-0.4-0.6-0.3-0.8l1.5-2.3c0.2-0.3,0.5-0.3,0.9-0.1l0.3,0.2C1583.5,283.6,1583.8,283.6,1584,283.3L1584,283.3L1584,283.3z\"></path><path id=\"path6135_1_\" opacity=\"0.35\" fill=\"#FFFFFF\" enable-background=\"new \" d=\"M1582.6,289c0.3-0.5,1.2-0.5,2,0l54.3,33.7 c0.8,0.5,1.2,1.3,0.9,1.8l-1.7,2.8c-0.3,0.5-1.2,0.5-2.1,0l-54.3-33.7c-0.8-0.5-1.2-1.3-0.9-1.8L1582.6,289L1582.6,289z\"></path></g></svg>"

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"scene-content\">\n\n\n</div>\n\n<div class=\"svg\"></div>\n";

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scene_svg__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scene_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__scene_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scene_html__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scene_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__scene_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scripts_utilities__ = __webpack_require__(0);




/* harmony default export */ __webpack_exports__["a"] = ({
  iskey: 0,
  keyfreq: Math.floor(Math.random() * 2) + 4,
  lightfreq: Math.floor(Math.random() * 21) + 10,
  lightlast: 'none',
  islight: 0,
  mousefreq: Math.floor(Math.random() * 21) + 30,
  ismouse: 0,
  mouselast: 0,
  minY: 3600,
  maxY: 5800,
  newq: [0, 0],

  init: function init(site) {
    document.querySelector('[data-scene="scene5"]').innerHTML = __WEBPACK_IMPORTED_MODULE_1__scene_html___default.a;
    document.querySelector('[data-scene="scene5"] .svg').innerHTML = __WEBPACK_IMPORTED_MODULE_0__scene_svg___default.a;

    this.addVideoPlayer(site);

    this.getPhoneDimensionsInAHackyWayCauseFirefoxDoesNotWork();
  },
  getPhoneDimensionsInAHackyWayCauseFirefoxDoesNotWork: function getPhoneDimensionsInAHackyWayCauseFirefoxDoesNotWork() {
    var rectt = document.querySelector('#iphone5positionpath');
    var newrect = rectt.cloneNode(true);
    newrect.setAttribute('id', 'dear_firefox_come_on');
    newrect.setAttribute('fill', 'transparent');
    newrect.setAttribute('transform', 'rotate(90) translate(-6930, -530) scale(8)');

    //  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    // document.body.appendChild(svg);

    var svg = document.querySelector('#svg5');

    svg.appendChild(newrect);
  },
  addVideoPlayer: function addVideoPlayer(site) {
    var videoPlayerDiv = __WEBPACK_IMPORTED_MODULE_2__scripts_utilities__["a" /* createElementWithAttrs */]('div', {
      id: 'videoPlayer'
    });

    var videoPlayerIframe = __WEBPACK_IMPORTED_MODULE_2__scripts_utilities__["a" /* createElementWithAttrs */]('iframe', {
      id: 'vimeoPlayer',
      src: '//player.vimeo.com/video/88016428',
      width: '100%',
      height: '100%',
      frameborder: '0',
      allowfullscreen: true
    });

    videoPlayerDiv.appendChild(videoPlayerIframe);
    site.siteRoot.appendChild(videoPlayerDiv);
  },


  render: function render(data) {
    if (data.curTop > 5550 && data.curTop < 5900) {
      // console.log('resizing');

      var rect = document.querySelector('#dear_firefox_come_on').getBoundingClientRect();

      var videoPlayerIframe = document.querySelector('#videoPlayer');
      videoPlayerIframe.style.left = Math.floor(rect.left) + 'px';
      videoPlayerIframe.style.top = Math.floor(rect.top) + 'px';
      videoPlayerIframe.style.width = Math.floor(rect.width) + 'px';
      videoPlayerIframe.style.height = Math.floor(rect.height) + 'px';
    }

    if (data.curTop > this.minY && data.curTop < this.maxY) {
      if (data.curTop - this.iskey > this.keyfreq && data.direction === 'down' || this.iskey - data.curTop > this.keyfreq && data.direction === 'up') {
        var keys1 = document.querySelectorAll('#keyboard rect');
        var keys2 = document.querySelectorAll('#keyboard2 rect');
        var keys3 = document.querySelectorAll('#keyboard3 rect');

        var randomKey1 = Math.floor(Math.random() * keys1.length);
        var randomKey2 = Math.floor(Math.random() * keys2.length);
        var randomKey3 = Math.floor(Math.random() * keys3.length);

        keys1[randomKey1].style.fill = '#ccd1d9';
        keys2[randomKey2].style.fill = '#f7f9f8';
        keys3[randomKey3].style.fill = '#f7f9f8';

        this.iskey = data.curTop;
      }

      if (data.curTop - this.islight > this.lightfreq && data.direction === 'down' || this.islight - data.curTop > this.lightfreq && data.direction === 'up') {
        this.lightlast = this.lightlast === 'none' ? 'inline' : 'none';
        document.querySelector('#imaclight').style.display = this.lightlast;
        this.islight = data.curTop;
      }
    }
  }
});

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = "<svg version=\"1.1\" id=\"svg5\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"496 -368 1024 768\" enable-background=\"new 496 -368 1024 768\" xml:space=\"preserve\"><rect x=\"-5911\" y=\"-4990.1\" fill=\"#E74C3C\" stroke=\"#E74C3C\" stroke-miterlimit=\"10\" width=\"14063\" height=\"10085.2\"></rect><g id=\"scene\"><g id=\"desks\"><g id=\"deskleft\"><g><path fill=\"#982E21\" d=\"M477.1,316.3c0,30.7-25.1,55.8-55.8,55.8h-863.8c-30.7,0-57.4-26.7-57.4-57.4v-473 c0-30.7,25.1-55.8,55.8-55.8h865.3c30.7,0,55.8,25.1,55.8,55.8V316.3z\"></path><path fill=\"#BE3D2F\" d=\"M481,312.4c0,30.7-25.1,55.8-55.8,55.8h-865.3c-30.7,0-55.8-25.1-55.8-55.8v-474.5 c0-30.7,25.1-55.8,55.8-55.8h865.3c30.7,0,55.8,25.1,55.8,55.8V312.4z\"></path></g><g><path fill=\"#9E3023\" d=\"M296.1-109.5L-7.1-175.2c0,0-7.3-1.6-8.8,5.7c-1.6,7.3,5.7,8.8,5.7,8.8l21.8,4.7c0,0-7.3-1.6-8.8,5.7 C1.2-143-29.9,0.5-29.9,0.5c-1.6,7.6,4,15.2,11.5,16.9l245.9,53.3c7.6,1.6,15-3.2,16.7-10.7c0,0,24.9-115,31.3-144.3l0,0 c0-0.1,0.2-1.1,1.4-6.4c1.6-7.3-5.7-8.8-5.7-8.8l21.8,4.7c0,0,7.3,1.6,8.8-5.7C303.3-107.9,296.1-109.5,296.1-109.5z\"></path><g><path fill=\"#DCE4E8\" d=\"M250,59.5c-1.6,7.6-9.1,12.4-16.7,10.7L-12.6,16.9c-7.6-1.6-13.2-9.3-11.5-16.9 c0,0,31.1-143.5,32.7-150.8c1.6-7.3,8.8-5.7,8.8-5.7L277-100.1c0,0,7.3,1.6,5.7,8.8C281.1-84,250,59.5,250,59.5z\"></path><path fill=\"#F7F9F8\" d=\"M298.8-95.4L-4.4-161.1c0,0-7.3-1.6-5.7-8.8c1.6-7.3,8.8-5.7,8.8-5.7l303.1,65.7c0,0,7.3,1.6,5.7,8.8 C306-93.8,298.8-95.4,298.8-95.4z\"></path><path opacity=\"0.3\" fill=\"#B7BFC7\" enable-background=\"new \" d=\"M281.3-84.8L-15.9-37.6c0,0,22.9-105.8,24.5-113.1 c1.6-7.3,8.8-5.7,8.8-5.7L277-100.1c0,0,7.3,1.6,5.7,8.8C281.1-84,281.3-84.8,281.3-84.8z\"></path><rect x=\"77.9\" y=\"-6.2\" transform=\"matrix(-0.9773 -0.2117 0.2117 -0.9773 227.1551 49.8791)\" fill=\"#F7F9F8\" width=\"76.7\" height=\"37.9\"></rect><g id=\"keyboard2\"><rect x=\"46.4\" y=\"-121\" transform=\"matrix(-0.9773 -0.2118 0.2118 -0.9773 130.9595 -218.0008)\" fill=\"#F7F9F8\" width=\"14.8\" height=\"9.9\"></rect><rect x=\"42.6\" y=\"-105.7\" transform=\"matrix(-0.9773 -0.2117 0.2117 -0.9773 119.8809 -184.4895)\" fill=\"#F7F9F8\" width=\"14.8\" height=\"14\"></rect><rect x=\"38.1\" y=\"-85.3\" transform=\"matrix(-0.9773 -0.2118 0.2118 -0.9773 116.2887 -142.4859)\" fill=\"#F7F9F8\" width=\"24.7\" height=\"15.7\"></rect><rect x=\"33.8\" y=\"-64\" transform=\"matrix(-0.9773 -0.2119 0.2119 -0.9773 113.9697 -101.8525)\" fill=\"#F7F9F8\" width=\"35.5\" height=\"14\"></rect><rect x=\"62\" y=\"-101.4\" transform=\"matrix(-0.9773 -0.2118 0.2118 -0.9773 158.0007 -171.887)\" fill=\"#F7F9F8\" width=\"15.7\" height=\"14\"></rect><rect x=\"67.3\" y=\"-80\" transform=\"matrix(-0.9773 -0.2118 0.2118 -0.9773 163.7843 -126.7833)\" fill=\"#F7F9F8\" width=\"15.7\" height=\"15.7\"></rect><rect x=\"73.5\" y=\"-57.6\" transform=\"matrix(-0.9773 -0.2118 0.2118 -0.9773 171.6101 -82.7327)\" fill=\"#F7F9F8\" width=\"15.7\" height=\"14\"></rect><rect x=\"92.9\" y=\"-53.4\" transform=\"matrix(-0.9773 -0.2118 0.2118 -0.9773 208.2171 -70.5601)\" fill=\"#F7F9F8\" width=\"14.8\" height=\"14\"></rect><rect x=\"113.1\" y=\"-49.1\" transform=\"matrix(-0.9773 -0.2118 0.2118 -0.9773 247.1448 -57.6669)\" fill=\"#F7F9F8\" width=\"14.8\" height=\"14\"></rect><rect x=\"132.5\" y=\"-44.8\" transform=\"matrix(-0.9773 -0.2117 0.2117 -0.9773 284.6044 -45.1541)\" fill=\"#F7F9F8\" width=\"14.8\" height=\"14\"></rect><rect x=\"152.6\" y=\"-40.5\" transform=\"matrix(-0.9773 -0.2118 0.2118 -0.9773 323.4627 -32.3368)\" fill=\"#F7F9F8\" width=\"14.8\" height=\"14\"></rect><rect x=\"171.1\" y=\"-36.4\" transform=\"matrix(-0.9773 -0.2117 0.2117 -0.9773 360.0728 -20.2315)\" fill=\"#F7F9F8\" width=\"15.7\" height=\"14\"></rect><rect x=\"191\" y=\"-29.9\" transform=\"matrix(-0.9773 -0.2118 0.2118 -0.9773 417.6397 -1.1327)\" fill=\"#F7F9F8\" width=\"35.5\" height=\"14\"></rect><rect x=\"87.4\" y=\"-75.7\" transform=\"matrix(-0.9773 -0.2118 0.2118 -0.9773 201.9484 -114.0957)\" fill=\"#F7F9F8\" width=\"14.8\" height=\"15.7\"></rect><rect x=\"106.8\" y=\"-71.4\" transform=\"matrix(-0.9773 -0.2117 0.2117 -0.9773 240.1373 -101.3926)\" fill=\"#F7F9F8\" width=\"15.7\" height=\"15.7\"></rect><rect x=\"127\" y=\"-67.1\" transform=\"matrix(-0.9773 -0.2117 0.2117 -0.9773 278.2854 -88.7481)\" fill=\"#F7F9F8\" width=\"14.8\" height=\"15.7\"></rect><rect x=\"146.3\" y=\"-62.9\" transform=\"matrix(-0.9773 -0.2119 0.2119 -0.9773 316.3459 -76.1859)\" fill=\"#F7F9F8\" width=\"15.7\" height=\"15.7\"></rect><rect x=\"166.5\" y=\"-58.6\" transform=\"matrix(-0.9773 -0.2118 0.2118 -0.9773 354.5521 -63.4782)\" fill=\"#F7F9F8\" width=\"14.8\" height=\"15.7\"></rect><polygon fill=\"#F7F9F8\" points=\"197.5,-37.1 184.3,-40.4 187.6,-55.8 200.8,-52.4 \"></polygon><polygon fill=\"#F7F9F8\" points=\"226.5,-30.8 204.5,-36.1 207.8,-51.4 229.9,-46.2 \"></polygon><rect x=\"82.1\" y=\"-97.1\" transform=\"matrix(-0.9773 -0.2118 0.2118 -0.9773 196.9207 -158.9975)\" fill=\"#F7F9F8\" width=\"15.7\" height=\"14\"></rect><rect x=\"101.5\" y=\"-92.9\" transform=\"matrix(-0.9773 -0.2117 0.2117 -0.9773 233.5554 -146.8136)\" fill=\"#F7F9F8\" width=\"14.8\" height=\"14\"></rect><rect x=\"121.6\" y=\"-88.6\" transform=\"matrix(-0.9773 -0.2118 0.2118 -0.9773 272.459 -133.907)\" fill=\"#F7F9F8\" width=\"14.8\" height=\"14\"></rect><rect x=\"141\" y=\"-84.4\" transform=\"matrix(-0.9773 -0.2117 0.2117 -0.9773 309.8701 -121.5048)\" fill=\"#F7F9F8\" width=\"14.8\" height=\"14\"></rect><rect x=\"161.1\" y=\"-80\" transform=\"matrix(-0.9773 -0.2118 0.2118 -0.9773 348.7414 -108.6488)\" fill=\"#F7F9F8\" width=\"14.8\" height=\"14\"></rect><rect x=\"179.7\" y=\"-75.9\" transform=\"matrix(-0.9773 -0.2118 0.2118 -0.9773 385.3354 -96.5227)\" fill=\"#F7F9F8\" width=\"15.7\" height=\"14\"></rect><rect x=\"199.6\" y=\"-69.4\" transform=\"matrix(-0.9773 -0.2117 0.2117 -0.9773 443.0012 -77.3977)\" fill=\"#F7F9F8\" width=\"35.5\" height=\"14\"></rect><rect x=\"29.9\" y=\"-47.6\" transform=\"matrix(-0.9773 -0.2117 0.2117 -0.9773 82.2178 -70.8096)\" fill=\"#F7F9F8\" width=\"14.8\" height=\"15.7\"></rect><rect x=\"49.2\" y=\"-43.4\" transform=\"matrix(-0.9773 -0.2118 0.2118 -0.9773 120.2958 -58.2639)\" fill=\"#F7F9F8\" width=\"15.7\" height=\"15.7\"></rect><rect x=\"68.5\" y=\"-30.6\" transform=\"matrix(-0.9773 -0.2118 0.2118 -0.9773 234.7533 -20.2882)\" fill=\"#F7F9F8\" width=\"95.7\" height=\"15.7\"></rect><rect x=\"166.9\" y=\"-17.9\" transform=\"matrix(-0.9773 -0.2118 0.2118 -0.9773 347.6496 17.1372)\" fill=\"#F7F9F8\" width=\"15.7\" height=\"15.7\"></rect><polygon fill=\"#F7F9F8\" points=\"200.9,3.6 183.5,0.3 186.8,-15 204.2,-11.7 \"></polygon><rect x=\"207.2\" y=\"-9.2\" transform=\"matrix(-0.9773 -0.2119 0.2119 -0.9773 424.7173 42.7433)\" fill=\"#F7F9F8\" width=\"14.8\" height=\"15.7\"></rect><rect x=\"63.6\" y=\"-116.7\" transform=\"matrix(-0.9773 -0.2118 0.2118 -0.9773 164.9492 -205.7878)\" fill=\"#F7F9F8\" width=\"15.7\" height=\"9.9\"></rect><rect x=\"83.8\" y=\"-112.3\" transform=\"matrix(-0.9773 -0.2119 0.2119 -0.9773 203.8623 -192.8775)\" fill=\"#F7F9F8\" width=\"15.7\" height=\"9.9\"></rect><rect x=\"103.1\" y=\"-108.2\" transform=\"matrix(-0.9773 -0.2117 0.2117 -0.9773 240.486 -180.7437)\" fill=\"#F7F9F8\" width=\"14.8\" height=\"9.9\"></rect><rect x=\"123.3\" y=\"-103.9\" transform=\"matrix(-0.9773 -0.2118 0.2118 -0.9773 279.3676 -167.935)\" fill=\"#F7F9F8\" width=\"14.8\" height=\"9.9\"></rect><rect x=\"142.7\" y=\"-99.6\" transform=\"matrix(-0.9773 -0.2117 0.2117 -0.9773 316.8189 -155.3949)\" fill=\"#F7F9F8\" width=\"14.8\" height=\"9.9\"></rect><rect x=\"162.8\" y=\"-95.2\" transform=\"matrix(-0.9773 -0.2117 0.2117 -0.9773 355.7382 -142.5073)\" fill=\"#F7F9F8\" width=\"14.8\" height=\"9.9\"></rect><rect x=\"181.3\" y=\"-91.2\" transform=\"matrix(-0.9773 -0.2118 0.2118 -0.9773 392.2724 -130.4546)\" fill=\"#F7F9F8\" width=\"15.7\" height=\"9.9\"></rect><rect x=\"201.5\" y=\"-86.8\" transform=\"matrix(-0.9773 -0.2118 0.2118 -0.9773 431.2051 -117.5357)\" fill=\"#F7F9F8\" width=\"15.7\" height=\"9.9\"></rect><rect x=\"221.6\" y=\"-82.5\" transform=\"matrix(-0.9773 -0.2118 0.2118 -0.9773 469.3684 -104.8604)\" fill=\"#F7F9F8\" width=\"14.8\" height=\"9.9\"></rect></g><rect x=\"79.6\" y=\"-128.3\" transform=\"matrix(-0.9773 -0.2118 0.2118 -0.9773 315.8812 -215.3845)\" fill=\"#DCE4E8\" width=\"133.6\" height=\"7.4\"></rect></g></g><g id=\"mouse04-1\"><path fill=\"#9E3023\" d=\"M370.8,56.4C370.8,56.4,370.8,56.4,370.8,56.4c-9.8-2.1-19.5,4.1-21.7,13.9c0,0,0,0.1,0,0.1l0,0.2 l-7.2,33.4c0,0.1,0,0.3-0.1,0.4l-0.4,1.8h0c-2.1,9.9,4.2,19.4,14,21.5c9.8,2.1,19.6-4.2,21.7-13.9l7.7-35.6 C386.9,68.2,380.6,58.5,370.8,56.4z\"></path><g><g><path fill=\"#DCE4E8\" d=\"M353.2,67.8c0,0,0,0.1,0,0.1l0,0.2l-7.2,33.4c0,0.1,0,0.2-0.1,0.3l-0.4,1.7h0 c-2.1,10,4.2,19.5,14,21.6l15.4-71.1C365.1,51.8,355.4,58,353.2,67.8z\"></path><path fill=\"#F7F9F8\" d=\"M374.9,53.9C374.9,53.9,374.9,53.9,374.9,53.9L359.5,125c9.8,2.1,19.6-4.1,21.7-13.9l-0.1,0l0,0l0,0 l0.1,0l7.7-35.5C391,65.7,384.8,56,374.9,53.9z\"></path></g></g></g></g><g id=\"deskright\"><g><path fill=\"#982E21\" d=\"M2520.7,326.3c0,30.7-25.1,55.8-55.8,55.8h-863.8c-30.7,0-57.4-26.7-57.4-57.4v-473 c0-30.7,25.1-55.8,55.8-55.8h865.3c30.7,0,55.8,25.1,55.8,55.8L2520.7,326.3L2520.7,326.3z\"></path><path fill=\"#BE3D2F\" d=\"M2524.6,322.4c0,30.7-25.1,55.8-55.8,55.8h-865.3c-30.7,0-55.8-25.1-55.8-55.8v-474.5 c0-30.7,25.1-55.8,55.8-55.8h865.3c30.7,0,55.8,25.1,55.8,55.8V322.4z\"></path></g><g><path fill=\"#586273\" d=\"M1997.8-183.8L1997.8-183.8C1997.9-183.7,1997.8-183.8,1997.8-183.8z\"></path><path fill=\"#9E3023\" d=\"M2040.8-171.8L1782.4-0.2c0,0-6.2,4.1-2.1,10.3c4.1,6.2,10.3,2.1,10.3,2.1l18.6-12.3 c0,0-6.2,4.1-2.1,10.3c4.1,6.2,85.4,128.5,85.4,128.5c4.3,6.4,13.7,7.8,20.1,3.5L2122.2,2.9c6.5-4.3,8.2-13,3.9-19.4 c0,0-65.1-98-81.7-123l0,0c-0.1-0.1-0.6-1-3.7-5.5c-4.1-6.2-10.3-2.1-10.3-2.1l18.6-12.3c0,0,6.2-4.1,2.1-10.3 C2047-175.9,2040.8-171.8,2040.8-171.8z\"></path><path fill=\"#DCE4E8\" d=\"M2129.8-21c4.3,6.5,2.5,15.2-3.9,19.4l-209.6,139.2c-6.4,4.3-15.8,3-20.1-3.5c0,0-81.2-122.3-85.4-128.5 s2.1-10.3,2.1-10.3l221.3-147c0,0,6.2-4.1,10.3,2.1C2048.6-143.3,2129.8-21,2129.8-21z\"></path><path fill=\"#F7F9F8\" d=\"M2052.7-163.9L1794.4,7.7c0,0-6.2,4.1-10.3-2.1c-4.1-6.2,2.1-10.3,2.1-10.3l258.4-171.6 c0,0,6.2-4.1,10.3,2.1C2058.9-168,2052.7-163.9,2052.7-163.9z\"></path><path opacity=\"0.3\" fill=\"#B7BFC7\" enable-background=\"new \" d=\"M2048.1-144l-173.3,246c0,0-59.9-90.2-64-96.3 c-4.1-6.2,2.1-10.3,2.1-10.3l221.3-147c0,0,6.2-4.1,10.3,2.1C2048.6-143.3,2048.1-144,2048.1-144z\"></path><rect x=\"1964.8\" y=\"23.4\" transform=\"matrix(-0.833 0.5533 -0.5533 -0.833 3695.1458 -1030.5942)\" fill=\"#F7F9F8\" width=\"76.7\" height=\"37.9\"></rect><g id=\"keyboard3\"><rect x=\"1858.3\" y=\"-6.1\" transform=\"matrix(-0.833 0.5533 -0.5533 -0.833 3419.2661 -1034.4646)\" fill=\"#F7F9F8\" width=\"14.9\" height=\"9.9\"></rect><rect x=\"1868.2\" y=\"6.7\" transform=\"matrix(-0.833 0.5533 -0.5533 -0.833 3445.5706 -1012.6198)\" fill=\"#F7F9F8\" width=\"14.9\" height=\"14\"></rect><rect x=\"1878.8\" y=\"20.3\" transform=\"matrix(-0.833 0.5533 -0.5533 -0.833 3482.0044 -994.7851)\" fill=\"#F7F9F8\" width=\"24.7\" height=\"15.7\"></rect><rect x=\"1888.8\" y=\"34.7\" transform=\"matrix(-0.833 0.5533 -0.5533 -0.833 3517.8384 -978.4077)\" fill=\"#F7F9F8\" width=\"35.5\" height=\"14\"></rect><rect x=\"1884.6\" y=\"-4.6\" transform=\"matrix(-0.833 0.5533 -0.5533 -0.833 3470.1479 -1042.5603)\" fill=\"#F7F9F8\" width=\"15.7\" height=\"14\"></rect><rect x=\"1904.2\" y=\"6.3\" transform=\"matrix(-0.833 0.5533 -0.5533 -0.833 3512.6479 -1031.9867)\" fill=\"#F7F9F8\" width=\"15.7\" height=\"15.7\"></rect><rect x=\"1924.1\" y=\"17.8\" transform=\"matrix(-0.833 0.5532 -0.5532 -0.833 3555.0427 -1023.2202)\" fill=\"#F7F9F8\" width=\"15.7\" height=\"14\"></rect><rect x=\"1940.7\" y=\"7\" transform=\"matrix(-0.833 0.5533 -0.5533 -0.833 3578.6919 -1052.1219)\" fill=\"#F7F9F8\" width=\"14.8\" height=\"14\"></rect><rect x=\"1957.9\" y=\"-4.3\" transform=\"matrix(-0.833 0.5533 -0.5533 -0.833 3603.9583 -1082.4233)\" fill=\"#F7F9F8\" width=\"14.8\" height=\"14\"></rect><rect x=\"1974.4\" y=\"-15.2\" transform=\"matrix(-0.833 0.5533 -0.5533 -0.833 3628.1304 -1111.6285)\" fill=\"#F7F9F8\" width=\"14.8\" height=\"14\"></rect><rect x=\"1991.5\" y=\"-26.9\" transform=\"matrix(-0.833 0.5533 -0.5533 -0.833 3653.0344 -1142.3983)\" fill=\"#F7F9F8\" width=\"14.9\" height=\"14\"></rect><rect x=\"2007.3\" y=\"-37.5\" transform=\"matrix(-0.833 0.5533 -0.5533 -0.833 3676.864 -1170.7855)\" fill=\"#F7F9F8\" width=\"15.7\" height=\"14\"></rect><rect x=\"2022.8\" y=\"-54.4\" transform=\"matrix(-0.833 0.5533 -0.5533 -0.833 3714.0981 -1215.837)\" fill=\"#F7F9F8\" width=\"35.5\" height=\"14\"></rect><rect x=\"1921.5\" y=\"-4.7\" transform=\"matrix(-0.833 0.5533 -0.5533 -0.833 3537.4934 -1061.5682)\" fill=\"#F7F9F8\" width=\"14.8\" height=\"15.7\"></rect><rect x=\"1938\" y=\"-15.8\" transform=\"matrix(-0.833 0.5533 -0.5533 -0.833 3562.3074 -1091.1868)\" fill=\"#F7F9F8\" width=\"15.7\" height=\"15.7\"></rect><rect x=\"1955.2\" y=\"-27.1\" transform=\"matrix(-0.833 0.5533 -0.5533 -0.833 3586.8752 -1121.1444)\" fill=\"#F7F9F8\" width=\"14.9\" height=\"15.7\"></rect><rect x=\"1971.6\" y=\"-38.4\" transform=\"matrix(-0.833 0.5533 -0.5533 -0.833 3611.3599 -1151.1976)\" fill=\"#F7F9F8\" width=\"15.7\" height=\"15.7\"></rect><rect x=\"1988.8\" y=\"-49.6\" transform=\"matrix(-0.833 0.5533 -0.5533 -0.833 3635.9788 -1181.0822)\" fill=\"#F7F9F8\" width=\"14.8\" height=\"15.7\"></rect><rect x=\"2005.2\" y=\"-60.8\" transform=\"matrix(-0.833 0.5533 -0.5533 -0.833 3660.636 -1210.9072)\" fill=\"#F7F9F8\" width=\"15.7\" height=\"15.7\"></rect><rect x=\"2021.7\" y=\"-74.6\" transform=\"matrix(-0.833 0.5533 -0.5533 -0.833 3691.5474 -1247.7843)\" fill=\"#F7F9F8\" width=\"24.7\" height=\"15.7\"></rect><rect x=\"1901.8\" y=\"-15.9\" transform=\"matrix(-0.833 0.5533 -0.5533 -0.833 3495.3928 -1072.8756)\" fill=\"#F7F9F8\" width=\"15.7\" height=\"14\"></rect><rect x=\"1918.4\" y=\"-26.4\" transform=\"matrix(-0.833 0.5533 -0.5533 -0.833 3519.2942 -1101.1653)\" fill=\"#F7F9F8\" width=\"14.8\" height=\"14\"></rect><rect x=\"1935.6\" y=\"-37.9\" transform=\"matrix(-0.833 0.5533 -0.5533 -0.833 3544.3801 -1131.6963)\" fill=\"#F7F9F8\" width=\"14.9\" height=\"14\"></rect><rect x=\"1952\" y=\"-49\" transform=\"matrix(-0.833 0.5533 -0.5533 -0.833 3568.3789 -1161.1357)\" fill=\"#F7F9F8\" width=\"14.9\" height=\"14\"></rect><rect x=\"1969.2\" y=\"-60.3\" transform=\"matrix(-0.833 0.5533 -0.5533 -0.833 3593.6794 -1191.3944)\" fill=\"#F7F9F8\" width=\"14.8\" height=\"14\"></rect><rect x=\"1984.9\" y=\"-71.1\" transform=\"matrix(-0.833 0.5533 -0.5533 -0.833 3617.2366 -1220.1217)\" fill=\"#F7F9F8\" width=\"15.7\" height=\"14\"></rect><rect x=\"2000.5\" y=\"-88\" transform=\"matrix(-0.833 0.5533 -0.5533 -0.833 3654.562 -1265.0658)\" fill=\"#F7F9F8\" width=\"35.5\" height=\"14\"></rect><rect x=\"1901.5\" y=\"56.1\" transform=\"matrix(-0.833 0.5533 -0.5533 -0.833 3534.427 -939.0646)\" fill=\"#F7F9F8\" width=\"14.9\" height=\"15.7\"></rect><rect x=\"1917.9\" y=\"44.7\" transform=\"matrix(-0.833 0.5533 -0.5533 -0.833 3558.9243 -969.1353)\" fill=\"#F7F9F8\" width=\"15.7\" height=\"15.7\"></rect><rect x=\"1928.4\" y=\"11.3\" transform=\"matrix(-0.833 0.5533 -0.5533 -0.833 3633.0845 -1058.361)\" fill=\"#F7F9F8\" width=\"95.7\" height=\"15.7\"></rect><rect x=\"2018.2\" y=\"-21.8\" transform=\"matrix(-0.833 0.5533 -0.5533 -0.833 3706.0254 -1146.6719)\" fill=\"#F7F9F8\" width=\"15.7\" height=\"15.7\"></rect><rect x=\"2035.5\" y=\"-33.1\" transform=\"matrix(-0.833 0.5533 -0.5533 -0.833 3731.3689 -1176.8728)\" fill=\"#F7F9F8\" width=\"15.7\" height=\"15.7\"></rect><rect x=\"2052.7\" y=\"-44.4\" transform=\"matrix(-0.833 0.5533 -0.5533 -0.833 3755.908 -1206.8531)\" fill=\"#F7F9F8\" width=\"14.8\" height=\"15.7\"></rect><rect x=\"1874.8\" y=\"-17.1\" transform=\"matrix(-0.833 0.5533 -0.5533 -0.833 3444.2388 -1063.8679)\" fill=\"#F7F9F8\" width=\"15.7\" height=\"9.9\"></rect><rect x=\"1891.9\" y=\"-28.9\" transform=\"matrix(-0.833 0.5533 -0.5533 -0.833 3468.8979 -1094.9662)\" fill=\"#F7F9F8\" width=\"15.7\" height=\"9.9\"></rect><rect x=\"1908.5\" y=\"-39.5\" transform=\"matrix(-0.833 0.5533 -0.5533 -0.833 3492.738 -1123.3331)\" fill=\"#F7F9F8\" width=\"14.9\" height=\"9.9\"></rect><rect x=\"1925.7\" y=\"-50.7\" transform=\"matrix(-0.833 0.5533 -0.5533 -0.833 3518.0718 -1153.5376)\" fill=\"#F7F9F8\" width=\"14.8\" height=\"9.9\"></rect><rect x=\"1942.3\" y=\"-61.6\" transform=\"matrix(-0.833 0.5533 -0.5533 -0.833 3542.4373 -1182.4996)\" fill=\"#F7F9F8\" width=\"14.9\" height=\"9.9\"></rect><rect x=\"1959.4\" y=\"-73.1\" transform=\"matrix(-0.833 0.5533 -0.5533 -0.833 3567.4211 -1213.1577)\" fill=\"#F7F9F8\" width=\"14.8\" height=\"9.9\"></rect><rect x=\"1975.1\" y=\"-83.8\" transform=\"matrix(-0.833 0.5533 -0.5533 -0.833 3591.1726 -1241.6539)\" fill=\"#F7F9F8\" width=\"15.7\" height=\"9.9\"></rect><rect x=\"1992.3\" y=\"-95.3\" transform=\"matrix(-0.833 0.5533 -0.5533 -0.833 3616.1523 -1272.3109)\" fill=\"#F7F9F8\" width=\"15.7\" height=\"9.9\"></rect><rect x=\"2009.6\" y=\"-106.4\" transform=\"matrix(-0.833 0.5533 -0.5533 -0.833 3641.0178 -1301.8944)\" fill=\"#F7F9F8\" width=\"14.8\" height=\"9.9\"></rect></g><rect x=\"1858.8\" y=\"-78.7\" transform=\"matrix(-0.833 0.5533 -0.5533 -0.833 3488.2104 -1202.8478)\" fill=\"#DCE4E8\" width=\"133.7\" height=\"7.4\"></rect></g><g><g><g><g><g><path fill=\"#9E3023\" d=\"M1587.8-104.9c-4.3,0.7-7.2,4.7-6.5,9l23.2,147c0.7,4.3,4.7,7.2,9,6.5l50.3-7.9l-25.6-162.5 L1587.8-104.9z\"></path></g></g><g><g><path fill=\"#9E3023\" d=\"M1688.4-120.8l-50.3,7.9l25.6,162.5l50.3-7.9c4.3-0.7,7.2-4.7,6.5-9l-23.2-147 C1696.7-118.5,1692.6-121.5,1688.4-120.8z\"></path></g></g></g><g><g><path fill=\"#586273\" d=\"M1590.8-107.9c-4.3,0.7-7.2,4.7-6.5,9l23.2,147c0.7,4.3,4.7,7.2,9,6.5l50.3-7.9l-25.6-162.5 L1590.8-107.9z\"></path></g></g><g opacity=\"0.2\"><g><path fill=\"#DCE4E8\" d=\"M1590.8-107.9c-4.3,0.7-7.2,4.7-6.5,9l23.2,147c0.7,4.3,4.7,7.2,9,6.5l50.3-7.9l-25.6-162.5 L1590.8-107.9z\"></path></g></g><g><g><path fill=\"#586273\" d=\"M1691.4-123.8l-50.3,7.9l25.6,162.5l50.3-7.9c4.3-0.7,7.2-4.7,6.5-9l-23.2-147 C1699.7-121.5,1695.6-124.5,1691.4-123.8z\"></path></g></g></g><g><g><polygon fill=\"#F7F9F8\" points=\"1618.4,42.3 1618.4,42.4 1711.3,27.7 1711.3,27.7 1689.3,-111.6 1689.3,-111.6 1596.5,-96.9 1596.5,-96.9 \"></polygon></g></g><g><path fill=\"#464E5C\" d=\"M1638.8-130.4c-6.4,1-10.8,7-9.8,13.4c1,6.4,7,10.8,13.4,9.8c6.4-1,10.8-7,9.8-13.4 C1651.2-127,1645.2-131.4,1638.8-130.4z M1641.5-113c-3.2,0.5-6.2-1.7-6.7-4.9c-0.5-3.2,1.7-6.2,4.9-6.7 c3.2-0.5,6.2,1.7,6.7,4.9C1646.9-116.5,1644.7-113.5,1641.5-113z\"></path></g><g><g><g><g><rect x=\"1624.8\" y=\"21.5\" transform=\"matrix(-0.9878 0.1556 -0.1556 -0.9878 3309.3845 -212.1816)\" fill=\"#DCE4E8\" width=\"76.4\" height=\"3.9\"></rect></g></g></g><g><g><g><rect x=\"1623\" y=\"9.9\" transform=\"matrix(-0.9878 0.1556 -0.1556 -0.9878 3303.9446 -234.9977)\" fill=\"#DCE4E8\" width=\"76.4\" height=\"3.9\"></rect></g></g></g><g><g><g><rect x=\"1621.2\" y=\"-1.7\" transform=\"matrix(-0.9878 0.1556 -0.1556 -0.9878 3298.4966 -257.7553)\" fill=\"#DCE4E8\" width=\"76.4\" height=\"3.9\"></rect></g></g></g><g><g><g><rect x=\"1619.3\" y=\"-13.4\" transform=\"matrix(-0.9878 0.1556 -0.1556 -0.9878 3293.0635 -280.5695)\" fill=\"#DCE4E8\" width=\"76.4\" height=\"3.9\"></rect></g></g></g><g><g><g><rect x=\"1617.5\" y=\"-25\" transform=\"matrix(-0.9878 0.1556 -0.1556 -0.9878 3287.6196 -303.3495)\" fill=\"#DCE4E8\" width=\"76.4\" height=\"3.9\"></rect></g></g></g><g><g><g><rect x=\"1615.7\" y=\"-36.6\" transform=\"matrix(-0.9878 0.1556 -0.1556 -0.9878 3282.175 -326.1235)\" fill=\"#DCE4E8\" width=\"76.4\" height=\"3.9\"></rect></g></g></g><g><g><g><rect x=\"1613.8\" y=\"-48.2\" transform=\"matrix(-0.9878 0.1556 -0.1556 -0.9878 3276.7351 -348.9239)\" fill=\"#DCE4E8\" width=\"76.4\" height=\"3.9\"></rect></g></g></g><g><g><g><rect x=\"1612\" y=\"-59.8\" transform=\"matrix(-0.9878 0.1556 -0.1556 -0.9878 3271.3032 -371.7603)\" fill=\"#DCE4E8\" width=\"76.4\" height=\"3.9\"></rect></g></g></g><g><g><g><rect x=\"1610.2\" y=\"-71.4\" transform=\"matrix(-0.9878 0.1556 -0.1556 -0.9878 3265.8569 -394.4918)\" fill=\"#DCE4E8\" width=\"76.4\" height=\"3.9\"></rect></g></g></g><g><g><g><rect x=\"1608.4\" y=\"-83\" transform=\"matrix(-0.9878 0.1556 -0.1556 -0.9878 3260.4189 -417.2757)\" fill=\"#DCE4E8\" width=\"76.4\" height=\"3.9\"></rect></g></g></g><g><g><g><rect x=\"1606.5\" y=\"-94.6\" transform=\"matrix(-0.9878 0.1556 -0.1556 -0.9878 3254.9795 -440.0953)\" fill=\"#DCE4E8\" width=\"76.4\" height=\"3.9\"></rect></g></g></g></g><g><g><path fill=\"#464E5C\" d=\"M1671.2-113.7c0.7,4.3-2.3,8.3-6.5,9l-42.6,6.7c-4.3,0.7-8.3-2.3-9-6.5l-0.3-1.9 c-0.7-4.3,2.3-8.3,6.5-9l42.6-6.7c4.3-0.7,8.3,2.3,9,6.5L1671.2-113.7z\"></path></g></g></g><g id=\"mouse04-2\"><path fill=\"#9E3023\" d=\"M2269.5-111.8C2269.5-111.8,2269.5-111.8,2269.5-111.8c-9.8-2.1-19.5,4.1-21.7,13.9c0,0,0,0.1,0,0.1 l0,0.2l-7.2,33.4c0,0.1,0,0.3-0.1,0.4l-0.4,1.8h0c-2.1,9.9,4.2,19.4,14,21.5c9.8,2.1,19.6-4.2,21.7-14l7.7-35.6 C2285.6-99.9,2279.4-109.6,2269.5-111.8z\"></path><g><g><path fill=\"#DCE4E8\" d=\"M2252-100.3c0,0,0,0.1,0,0.1l0,0.2l-7.2,33.4c0,0.1,0,0.2-0.1,0.3l-0.4,1.7h0 c-2.1,10,4.2,19.5,14,21.6l15.4-71.1C2263.8-116.4,2254.1-110.1,2252-100.3z\"></path><path fill=\"#F7F9F8\" d=\"M2273.6-114.2C2273.6-114.2,2273.6-114.2,2273.6-114.2l-15.4,71.1c9.8,2.1,19.6-4.2,21.7-13.9l-0.1,0 c0,0,0,0,0,0s0,0,0,0l0.1,0l7.7-35.5C2289.7-102.4,2283.5-112.1,2273.6-114.2z\"></path></g></g></g></g><g id=\"desk\"><g><g id=\"mouse04\"><path fill=\"#BE3D2F\" d=\"M1438.6,250.3C1438.6,250.3,1438.6,250.3,1438.6,250.3c-9.8-2.1-19.5,4.1-21.7,13.9c0,0,0,0.1,0,0.1 l0,0.2l-7.2,33.4c0,0.1,0,0.3-0.1,0.4l-0.4,1.8h0c-2.1,9.9,4.2,19.4,14,21.5c9.8,2.1,19.6-4.2,21.7-14l7.7-35.6 C1454.7,262.2,1448.5,252.5,1438.6,250.3z\"></path><g><g><path fill=\"#DCE4E8\" d=\"M1421.1,261.8c0,0,0,0.1,0,0.1l0,0.2l-7.2,33.4c0,0.1,0,0.2-0.1,0.3l-0.4,1.6h0 c-2.1,10.1,4.2,19.5,14,21.6l15.4-71.1C1432.9,245.7,1423.2,252,1421.1,261.8z\"></path><path fill=\"#F7F9F8\" d=\"M1442.8,247.8C1442.8,247.8,1442.8,247.8,1442.8,247.8l-15.4,71.1c9.8,2.1,19.6-4.2,21.7-13.9l-0.1,0 l0,0l0,0l0.1,0l7.7-35.5C1458.8,259.7,1452.6,250,1442.8,247.8z\"></path></g></g></g><g><path fill=\"#BE3D2F\" d=\"M1204.4-156.9c1.5-6.5,8-10.5,14.4-8.9l57.1,13.4c6.5,1.5,10.5,8,8.9,14.4l-5.8,55.5 c-1.5,6.5-8,10.5-14.4,8.9l-70.8-16.6c-6.5-1.5-10.5-8-8.9-14.4L1204.4-156.9z\"></path><path fill=\"#656D78\" d=\"M1211.6-160.4c1.5-6.5,8-10.5,14.4-8.9l57.1,13.4c6.5,1.5,10.5,8,8.9,14.4l-5.8,55.5 c-1.5,6.5-8,10.5-14.4,8.9l-70.8-16.6c-6.5-1.5-10.5-8-8.9-14.4L1211.6-160.4z\"></path><path fill=\"#AAB2BD\" d=\"M1216.8-159.2c1.5-6.5,8-10.5,14.4-8.9l46.1,10.8c6.5,1.5,10.5,8,8.9,14.4l-2.7,11.7 c-1.5,6.5-8,10.5-14.4,8.9l-46.1-10.8c-6.5-1.5-10.5-8-8.9-14.4L1216.8-159.2z\"></path><radialGradient id=\"imaclight_1_\" cx=\"1197.0829\" cy=\"-1165.9751\" r=\"262.5483\" gradientTransform=\"matrix(0.9773 0.2118 5.430000e-02 -0.2503 130.0341 -642.0239)\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0.103\" style=\"stop-color:#FFFFFF;stop-opacity:0.4\"></stop><stop offset=\"0.7955\" style=\"stop-color:#FFFFFF;stop-opacity:5.650000e-02\"></stop><stop offset=\"0.9095\" style=\"stop-color:#FFFFFF;stop-opacity:0\"></stop></radialGradient><polygon id=\"imaclight\" fill=\"url(#imaclight_1_)\" points=\"1547.3,34.5 969.1,-96.9 1024.9,-195.3 1542.3,-74.2 \"></polygon><rect x=\"978.5\" y=\"-127.1\" transform=\"matrix(0.9737 0.228 -0.228 0.9737 7.131 -286.6269)\" fill=\"#E6E9ED\" width=\"531.5\" height=\"29.3\"></rect><path fill=\"#656D78\" d=\"M1506.2-66.1c0,0-107-42.9-257.3-78c-150.3-35.2-260-43.1-260-43.1L1506.2-66.1z\"></path></g><g><g><g><rect x=\"1008.8\" y=\"135.6\" transform=\"matrix(0.9833 0.1821 -0.1821 0.9833 51.8232 -205.3251)\" fill=\"#BE3D2F\" width=\"270.6\" height=\"87.9\"></rect></g></g><g><g><rect x=\"1012.7\" y=\"133\" transform=\"matrix(-0.9833 -0.1821 0.1821 -0.9833 2244.4939 559.9081)\" fill=\"#E6E9ED\" width=\"270.6\" height=\"87.9\"></rect></g></g><g id=\"keyboard\"><rect x=\"1016\" y=\"177.9\" transform=\"matrix(-0.9833 -0.1821 0.1821 -0.9833 1994.7433 552.4594)\" fill=\"#CCD1D9\" width=\"13.5\" height=\"13.5\"></rect><rect x=\"1019.7\" y=\"157.9\" transform=\"matrix(-0.9833 -0.182 0.182 -0.9833 2005.7773 513.4186)\" fill=\"#CCD1D9\" width=\"13.5\" height=\"13.5\"></rect><rect x=\"1023.3\" y=\"138\" transform=\"matrix(-0.9833 -0.182 0.182 -0.9833 2016.6624 474.5983)\" fill=\"#CCD1D9\" width=\"13.5\" height=\"13.5\"></rect><rect x=\"1027.1\" y=\"118\" transform=\"matrix(-0.9833 -0.1821 0.1821 -0.9833 2027.6693 435.7839)\" fill=\"#CCD1D9\" width=\"13.5\" height=\"13.5\"></rect><rect x=\"1035.9\" y=\"181.6\" transform=\"matrix(-0.9833 -0.1821 0.1821 -0.9833 2033.6051 563.4432)\" fill=\"#CCD1D9\" width=\"13.5\" height=\"13.5\"></rect><rect x=\"1039.7\" y=\"161.6\" transform=\"matrix(-0.9833 -0.1821 0.1821 -0.9833 2044.7292 524.4495)\" fill=\"#CCD1D9\" width=\"13.5\" height=\"13.5\"></rect><rect x=\"1043.4\" y=\"141.6\" transform=\"matrix(-0.9833 -0.1821 0.1821 -0.9833 2055.8125 485.4792)\" fill=\"#CCD1D9\" width=\"13.5\" height=\"13.5\"></rect><rect x=\"1047\" y=\"121.8\" transform=\"matrix(-0.9833 -0.1821 0.1821 -0.9833 2066.4075 446.8069)\" fill=\"#CCD1D9\" width=\"13.5\" height=\"13.5\"></rect><rect x=\"1056\" y=\"185.2\" transform=\"matrix(-0.9833 -0.1821 0.1821 -0.9833 2072.7244 574.2708)\" fill=\"#CCD1D9\" width=\"13.5\" height=\"13.5\"></rect><rect x=\"1059.6\" y=\"165.3\" transform=\"matrix(-0.9833 -0.182 0.182 -0.9833 2083.5625 535.3241)\" fill=\"#CCD1D9\" width=\"13.5\" height=\"13.5\"></rect><rect x=\"1063.3\" y=\"145.3\" transform=\"matrix(-0.9833 -0.1819 0.1819 -0.9833 2094.5586 496.2979)\" fill=\"#CCD1D9\" width=\"13.5\" height=\"13.5\"></rect><rect x=\"1067\" y=\"125.4\" transform=\"matrix(-0.9833 -0.182 0.182 -0.9833 2105.4739 457.5428)\" fill=\"#CCD1D9\" width=\"13.5\" height=\"13.5\"></rect><rect x=\"1075.2\" y=\"196.3\" transform=\"matrix(-0.9833 -0.182 0.182 -0.9833 2189.2996 607.0856)\" fill=\"#CCD1D9\" width=\"94.7\" height=\"13.5\"></rect><rect x=\"1079.5\" y=\"169\" transform=\"matrix(-0.9833 -0.182 0.182 -0.9833 2122.4553 546.2854)\" fill=\"#CCD1D9\" width=\"13.5\" height=\"13.5\"></rect><rect x=\"1083.2\" y=\"149.1\" transform=\"matrix(-0.9833 -0.182 0.182 -0.9833 2133.3928 507.4)\" fill=\"#CCD1D9\" width=\"13.5\" height=\"13.5\"></rect><rect x=\"1087\" y=\"129.1\" transform=\"matrix(-0.9833 -0.1821 0.1821 -0.9833 2144.4153 468.5502)\" fill=\"#CCD1D9\" width=\"13.5\" height=\"13.5\"></rect><rect x=\"1099.4\" y=\"172.7\" transform=\"matrix(-0.9833 -0.1821 0.1821 -0.9833 2161.2441 557.4272)\" fill=\"#CCD1D9\" width=\"13.5\" height=\"13.5\"></rect><rect x=\"1103.2\" y=\"152.8\" transform=\"matrix(-0.9833 -0.1822 0.1822 -0.9833 2172.2119 518.642)\" fill=\"#CCD1D9\" width=\"13.5\" height=\"13.5\"></rect><rect x=\"1106.9\" y=\"132.8\" transform=\"matrix(-0.9833 -0.1819 0.1819 -0.9833 2183.2869 479.3188)\" fill=\"#CCD1D9\" width=\"13.5\" height=\"13.5\"></rect><rect x=\"1119.4\" y=\"176.4\" transform=\"matrix(-0.9833 -0.1819 0.1819 -0.9833 2200.2092 568.1033)\" fill=\"#CCD1D9\" width=\"13.5\" height=\"13.5\"></rect><rect x=\"1123.1\" y=\"156.5\" transform=\"matrix(-0.9833 -0.1819 0.1819 -0.9833 2211.1248 529.2713)\" fill=\"#CCD1D9\" width=\"13.5\" height=\"13.5\"></rect><rect x=\"1126.8\" y=\"136.5\" transform=\"matrix(-0.9833 -0.1819 0.1819 -0.9833 2222.1035 490.368)\" fill=\"#CCD1D9\" width=\"13.5\" height=\"13.5\"></rect><rect x=\"1139.5\" y=\"180\" transform=\"matrix(-0.9833 -0.1819 0.1819 -0.9833 2239.3423 578.8986)\" fill=\"#CCD1D9\" width=\"13.5\" height=\"13.5\"></rect><rect x=\"1143.1\" y=\"160.2\" transform=\"matrix(-0.9833 -0.1821 0.1821 -0.9833 2250.0222 540.4341)\" fill=\"#CCD1D9\" width=\"13.5\" height=\"13.5\"></rect><rect x=\"1146.8\" y=\"140.2\" transform=\"matrix(-0.9833 -0.182 0.182 -0.9833 2261.0154 501.4298)\" fill=\"#CCD1D9\" width=\"13.5\" height=\"13.5\"></rect><rect x=\"1159.5\" y=\"183.7\" transform=\"matrix(-0.9833 -0.1822 0.1822 -0.9833 2278.2219 590.1837)\" fill=\"#CCD1D9\" width=\"13.5\" height=\"13.5\"></rect><rect x=\"1163\" y=\"163.8\" transform=\"matrix(-0.9833 -0.1821 0.1821 -0.9833 2288.9155 551.3851)\" fill=\"#CCD1D9\" width=\"13.5\" height=\"13.5\"></rect><rect x=\"1166.7\" y=\"143.9\" transform=\"matrix(-0.9833 -0.1821 0.1821 -0.9833 2299.9529 512.48)\" fill=\"#CCD1D9\" width=\"13.5\" height=\"13.5\"></rect><rect x=\"1175.6\" y=\"207.5\" transform=\"matrix(-0.9833 -0.1822 0.1822 -0.9833 2305.8464 640.2904)\" fill=\"#CCD1D9\" width=\"13.5\" height=\"13.5\"></rect><rect x=\"1179.3\" y=\"187.5\" transform=\"matrix(-0.9833 -0.1822 0.1822 -0.9833 2316.8967 601.2913)\" fill=\"#CCD1D9\" width=\"13.5\" height=\"13.5\"></rect><rect x=\"1183\" y=\"167.5\" transform=\"matrix(-0.9833 -0.1819 0.1819 -0.9833 2327.9443 562.0438)\" fill=\"#CCD1D9\" width=\"13.5\" height=\"13.5\"></rect><rect x=\"1186.8\" y=\"147.4\" transform=\"matrix(-0.9833 -0.182 0.182 -0.9833 2339.1333 523.0511)\" fill=\"#CCD1D9\" width=\"13.5\" height=\"13.5\"></rect><rect x=\"1195.6\" y=\"211.1\" transform=\"matrix(-0.9833 -0.182 0.182 -0.9833 2344.916 650.8773)\" fill=\"#CCD1D9\" width=\"13.5\" height=\"13.5\"></rect><rect x=\"1199.2\" y=\"191.2\" transform=\"matrix(-0.9833 -0.1821 0.1821 -0.9833 2355.6426 612.2717)\" fill=\"#CCD1D9\" width=\"13.5\" height=\"13.5\"></rect><rect x=\"1203\" y=\"171.2\" transform=\"matrix(-0.9833 -0.182 0.182 -0.9833 2366.8711 573.0593)\" fill=\"#CCD1D9\" width=\"13.5\" height=\"13.5\"></rect><rect x=\"1206.5\" y=\"151.4\" transform=\"matrix(-0.9833 -0.1821 0.1821 -0.9833 2377.4456 534.5854)\" fill=\"#CCD1D9\" width=\"13.5\" height=\"13.5\"></rect><rect x=\"1215.6\" y=\"214.7\" transform=\"matrix(-0.9833 -0.1821 0.1821 -0.9833 2383.9668 661.8566)\" fill=\"#CCD1D9\" width=\"13.5\" height=\"13.5\"></rect><rect x=\"1219.2\" y=\"194.8\" transform=\"matrix(-0.9833 -0.182 0.182 -0.9833 2394.833 622.8889)\" fill=\"#CCD1D9\" width=\"13.5\" height=\"13.5\"></rect><rect x=\"1222.9\" y=\"174.9\" transform=\"matrix(-0.9833 -0.182 0.182 -0.9833 2405.7031 584.0595)\" fill=\"#CCD1D9\" width=\"13.5\" height=\"13.5\"></rect><rect x=\"1226.6\" y=\"155\" transform=\"matrix(-0.9833 -0.1821 0.1821 -0.9833 2416.6208 545.3239)\" fill=\"#CCD1D9\" width=\"13.5\" height=\"13.5\"></rect><rect x=\"1235.4\" y=\"218.5\" transform=\"matrix(-0.9833 -0.1822 0.1822 -0.9833 2422.5288 673.1276)\" fill=\"#CCD1D9\" width=\"13.5\" height=\"13.5\"></rect><rect x=\"1239.2\" y=\"198.5\" transform=\"matrix(-0.9833 -0.1821 0.1821 -0.9833 2433.6199 634.0102)\" fill=\"#CCD1D9\" width=\"13.5\" height=\"13.5\"></rect><rect x=\"1242.8\" y=\"178.6\" transform=\"matrix(-0.9833 -0.1819 0.1819 -0.9833 2444.5945 594.9327)\" fill=\"#CCD1D9\" width=\"13.5\" height=\"13.5\"></rect><rect x=\"1246.5\" y=\"158.6\" transform=\"matrix(-0.9833 -0.1819 0.1819 -0.9833 2455.5828 555.9178)\" fill=\"#CCD1D9\" width=\"13.5\" height=\"13.5\"></rect><rect x=\"1257.2\" y=\"202.1\" transform=\"matrix(-0.9833 -0.1819 0.1819 -0.9833 2467.0957 664.1975)\" fill=\"#CCD1D9\" width=\"13.5\" height=\"33.8\"></rect><rect x=\"1262.7\" y=\"182.4\" transform=\"matrix(-0.9833 -0.1819 0.1819 -0.9833 2483.293 606.0385)\" fill=\"#CCD1D9\" width=\"13.5\" height=\"13.5\"></rect><rect x=\"1266.5\" y=\"162.4\" transform=\"matrix(-0.9833 -0.1822 0.1822 -0.9833 2494.3042 567.454)\" fill=\"#CCD1D9\" width=\"13.5\" height=\"13.5\"></rect></g></g></g><g id=\"freelance\"><g><g><path fill=\"#586273\" d=\"M716.3-70.6l-36.4,12.8c-2.9,1-4.4,4.2-3.4,7L702,22c1,2.9,4.2,4.4,7,3.4l36.4-12.8 c2.9-1,4.4-4.2,3.4-7l-25.5-72.8C722.3-70,719.1-71.6,716.3-70.6z M741.8,2.2L705.4,15l-23.7-67.6c0,0,0,0,0,0l36.4-12.8 c0,0,0,0,0,0L741.8,2.2L741.8,2.2z\"></path></g><g><g><rect x=\"721.3\" y=\"12.4\" transform=\"matrix(-0.9436 0.331 -0.331 -0.9436 1414.5494 -213.3765)\" fill=\"#464E5C\" width=\"8.3\" height=\"2.8\"></rect></g></g><g><g><g><polygon fill=\"#F7F9F8\" points=\"681.7,-52.6 681.7,-52.6 705.4,15 741.8,2.2 718.1,-65.4 718.1,-65.4 \"></polygon></g></g></g><g><g><g><path fill=\"#62C3ED\" d=\"M720.1-35l-2.3-3.3c-0.2-0.3-0.8-0.7-1.2-0.7l-6.7-0.5c0,0,0,0,0,0l-0.4-1.1 c0.5-1.4,0.5-3.2-0.1-4.9l-0.5-1.4c-0.9-2.5-3.5-3.9-5.9-3l0,0l0,0l0,0c-2.4,0.8-3.6,3.5-2.7,6l0.5,1.4 c0.6,1.8,1.7,3.1,3,3.9l0.4,1.1c0,0,0,0,0,0l-4.9,4.6c-0.3,0.3-0.5,0.9-0.5,1.3l0.2,4c0,0.4,0.4,0.6,0.8,0.5l10-3.5l0,0 l10-3.5C720.3-34.3,720.4-34.7,720.1-35z\"></path></g></g></g><g><g><rect x=\"701.4\" y=\"-24.1\" transform=\"matrix(-0.9436 0.331 -0.331 -0.9436 1379.184 -277.095)\" fill=\"#DCE4E8\" width=\"23.6\" height=\"5.9\"></rect></g></g><g><g><rect x=\"704.3\" y=\"-15.7\" transform=\"matrix(-0.9436 0.331 -0.331 -0.9436 1387.6761 -261.8465)\" fill=\"#DCE4E8\" width=\"23.6\" height=\"5.9\"></rect></g></g><g><g><rect x=\"713\" y=\"-7.3\" transform=\"matrix(-0.9436 0.331 -0.331 -0.9436 1395.9154 -246.3992)\" fill=\"#DCE4E8\" width=\"11.8\" height=\"5.9\"></rect></g></g><g><g><g><circle fill=\"#586273\" cx=\"707.7\" cy=\"-9.8\" r=\"1.1\"></circle></g></g><g><g><circle fill=\"#586273\" cx=\"713.2\" cy=\"-11.7\" r=\"1.1\"></circle></g></g><g><g><circle fill=\"#586273\" cx=\"710.4\" cy=\"-10.8\" r=\"1.1\"></circle></g></g><g><g><circle fill=\"#586273\" cx=\"716\" cy=\"-12.7\" r=\"1.1\"></circle></g></g><g><g><circle fill=\"#586273\" cx=\"704.7\" cy=\"-18.1\" r=\"1.1\"></circle></g></g><g><g><circle fill=\"#586273\" cx=\"715.9\" cy=\"-22.1\" r=\"1.1\"></circle></g></g><g><g><circle fill=\"#586273\" cx=\"710.3\" cy=\"-20.1\" r=\"1.1\"></circle></g></g><g><g><circle fill=\"#586273\" cx=\"707.5\" cy=\"-19.1\" r=\"1.1\"></circle></g></g><g><g><circle fill=\"#586273\" cx=\"713.1\" cy=\"-21.1\" r=\"1.1\"></circle></g></g></g><g><g><rect x=\"716.1\" y=\"-5.2\" transform=\"matrix(-0.9436 0.3311 -0.3311 -0.9436 1396.0325 -246.5279)\" fill=\"#EF8555\" width=\"5.9\" height=\"1.8\"></rect></g></g><g opacity=\"0.2\"><path fill=\"#DCE4E8\" d=\"M698.3-64.3l-18.4,6.5c-2.9,1-4.4,4.2-3.4,7L702,22c1,2.9,4.2,4.4,7,3.4l18.4-6.5L698.3-64.3z\"></path></g></g><g><g><g><circle fill=\"#BE3D2F\" cx=\"578\" cy=\"-150.2\" r=\"43.9\"></circle></g></g><g><g><circle fill=\"#F7F9F8\" cx=\"591\" cy=\"-158.2\" r=\"43.9\"></circle></g></g><g><g><path fill=\"#F7F9F8\" d=\"M632.7-109.7c-2.1,0-4.2-0.8-5.8-2.4l-19.2-19.2c-3.2-3.2-3.2-8.4,0-11.6c3.2-3.2,8.4-3.2,11.6,0 l19.2,19.2c3.2,3.2,3.2,8.4,0,11.6C636.9-110.5,634.8-109.7,632.7-109.7z\"></path></g></g><g><g><path fill=\"#EF8555\" d=\"M623-165.9c-1.4-5.7-4.3-11.1-8.7-15.5c-12.9-12.9-33.7-12.9-46.6,0c-4.4,4.4-7.3,9.8-8.7,15.5 c-2.6,10.8,0.3,22.6,8.7,31c12.9,12.9,33.7,12.9,46.6,0C622.7-143.3,625.6-155.1,623-165.9z\"></path></g></g><g><g><g><path fill=\"#382104\" d=\"M562.9-175.3c5-3.1,10.9-4.8,17.1-4.8c18.2,0,32.9,14.7,32.9,32.9c0,6.3-1.8,12.1-4.8,17.1 c9.5-5.8,15.8-16.2,15.8-28.1c0-18.2-14.7-32.9-32.9-32.9C579.1-191.1,568.7-184.8,562.9-175.3z\"></path></g></g><g><g><path fill=\"#5E2905\" d=\"M580-180.1c-6.3,0-12.1,1.8-17.1,4.8c-3.1,5-4.8,10.9-4.8,17.1c0,18.2,14.7,32.9,32.9,32.9 c6.3,0,12.1-1.8,17.1-4.8c3.1-5,4.8-10.9,4.8-17.1C612.9-165.4,598.2-180.1,580-180.1z\"></path></g></g></g></g></g><g id=\"entrepeneur\"><g id=\"ipadscene4\"><path fill=\"#BE3D2F\" d=\"M745.6-115.4l-105.1,29c-4.4,1.2-7,5.8-5.8,10.2l39.7,144.1c1.2,4.4,5.8,7,10.2,5.8l105.1-29 c4.4-1.2,7-5.8,5.8-10.2l-39.7-144.1C754.6-114,750-116.6,745.6-115.4z M785.3,28.6l-105.1,29c0,0-35.6-129.1-35.6-129.1 c0,0,105-28.9,105.1-28.9L785.3,28.6z\"></path><path fill=\"#F7F9F8\" d=\"M647.7-73.5c0,0,35.6,129.1,35.6,129.1l105.1-29c0,0-35.6-129.1-35.6-129.1L647.7-73.5z\"></path><path fill=\"#434A54\" d=\"M748.6-117.4l-105.1,29c-4.4,1.2-7,5.8-5.8,10.2l39.7,144.1c1.2,4.4,5.8,7,10.2,5.8l105.1-29 c4.4-1.2,7-5.8,5.8-10.2l-39.7-144.1C757.6-116,753-118.6,748.6-117.4z M788.3,26.6l-105.1,29c0,0-35.6-129.1-35.6-129.1 c0,0,105-28.9,105.1-28.9L788.3,26.6z\"></path><rect x=\"725.6\" y=\"47.1\" transform=\"matrix(-0.9641 0.2657 -0.2657 -0.9641 1462.5756 -99.5622)\" fill=\"#2A2A2A\" width=\"24.9\" height=\"4.2\"></rect><g><g><rect x=\"685.2\" y=\"23.6\" transform=\"matrix(-0.9641 0.2656 -0.2656 -0.9641 1365.1539 -115.1683)\" fill=\"#3498DB\" width=\"10.3\" height=\"22.3\"></rect></g><g><rect x=\"699.4\" y=\"5.1\" transform=\"matrix(-0.9641 0.2657 -0.2657 -0.9641 1389.9772 -141.3568)\" fill=\"#3498DB\" width=\"10.3\" height=\"36.6\"></rect></g><g><rect x=\"717.5\" y=\"9.9\" transform=\"matrix(-0.9641 0.2655 -0.2655 -0.9641 1424.8612 -145.6927)\" fill=\"#3498DB\" width=\"9.5\" height=\"27\"></rect></g><g><rect x=\"731.2\" y=\"-11.8\" transform=\"matrix(-0.9641 0.2656 -0.2656 -0.9641 1449.1396 -175.0453)\" fill=\"#3498DB\" width=\"10.3\" height=\"44.5\"></rect></g><g><rect x=\"749\" y=\"-4.6\" transform=\"matrix(-0.964 0.2658 -0.2658 -0.964 1484.3234 -177.4696)\" fill=\"#3498DB\" width=\"10.3\" height=\"32.6\"></rect></g><g><rect x=\"763.1\" y=\"-29.3\" transform=\"matrix(-0.9641 0.2657 -0.2657 -0.9641 1507.4915 -209.2633)\" fill=\"#3498DB\" width=\"9.5\" height=\"53.3\"></rect></g></g><g><g><g><path fill=\"#E74C3C\" d=\"M676.4-3.1c-0.7,0.2-1.5,0-2.1-0.5c-0.8-0.8-0.9-2.2,0-3l26.9-27.5c0.8-0.8,2.2-0.9,3,0 c0.8,0.8,0.9,2.2,0,3L677.3-3.7C677.1-3.4,676.7-3.2,676.4-3.1z\"></path></g></g><g><g><path fill=\"#E74C3C\" d=\"M726-22.7c-0.7,0.2-1.5,0-2-0.5c-0.8-0.8-0.9-2.2-0.1-3L754-57.4c0.8-0.8,2.2-0.9,3-0.1 c0.8,0.8,0.9,2.2,0.1,3L727-23.3C726.7-23,726.4-22.8,726-22.7z\"></path></g></g><g><g><path fill=\"#E74C3C\" d=\"M726.1-22.7c-0.4,0.1-0.8,0.1-1.3,0l-22.7-8c-1.1-0.4-1.7-1.6-1.3-2.7c0.4-1.1,1.6-1.7,2.7-1.3 l22.7,8c1.1,0.4,1.7,1.6,1.3,2.7C727.3-23.4,726.7-22.9,726.1-22.7z\"></path></g></g></g><g><g><rect x=\"659.1\" y=\"-72.1\" transform=\"matrix(-0.9641 0.2657 -0.2657 -0.9641 1298.8148 -296.7616)\" fill=\"#B7BFC7\" width=\"20.7\" height=\"23.1\"></rect></g><g><rect x=\"680.5\" y=\"-78.6\" transform=\"matrix(-0.9641 0.2657 -0.2657 -0.9641 1339.1185 -332.8118)\" fill=\"#DCE4E8\" width=\"23.1\" height=\"5.6\"></rect></g><g><rect x=\"683\" y=\"-69.3\" transform=\"matrix(-0.9641 0.2657 -0.2657 -0.9641 1340.1107 -314.3776)\" fill=\"#DCE4E8\" width=\"16.7\" height=\"5.6\"></rect></g><g><rect x=\"733.5\" y=\"-83.4\" transform=\"matrix(-0.9641 0.2657 -0.2657 -0.9641 1436.485 -355.5123)\" fill=\"#DCE4E8\" width=\"17.5\" height=\"5.6\"></rect></g><g><rect x=\"701.9\" y=\"-76.3\" transform=\"matrix(-0.9641 0.2657 -0.2657 -0.9641 1387.9434 -334.8132)\" fill=\"#DCE4E8\" width=\"29.4\" height=\"5.6\"></rect></g><g><rect x=\"685.5\" y=\"-59.9\" transform=\"matrix(-0.9641 0.2657 -0.2657 -0.9641 1340.479 -295.651)\" fill=\"#DCE4E8\" width=\"9.5\" height=\"5.6\"></rect></g><g><rect x=\"697.5\" y=\"-64.7\" transform=\"matrix(-0.9641 0.2657 -0.2657 -0.9641 1373.0012 -309.5683)\" fill=\"#DCE4E8\" width=\"19.9\" height=\"5.6\"></rect></g><g><rect x=\"706.1\" y=\"-83.8\" transform=\"matrix(-0.9641 0.2656 -0.2656 -0.9641 1374.6726 -347.9718)\" fill=\"#DCE4E8\" width=\"9.5\" height=\"5.6\"></rect></g><g><rect x=\"717.9\" y=\"-90\" transform=\"matrix(-0.9641 0.2657 -0.2657 -0.9641 1417.3665 -366.2097)\" fill=\"#DCE4E8\" width=\"31\" height=\"5.6\"></rect></g></g><g opacity=\"0.2\"><g><path fill=\"#DCE4E8\" d=\"M696.8-103.1l-53.2,14.7c-4.4,1.2-7,5.8-5.8,10.2l39.7,144.1c1.2,4.4,5.8,7,10.2,5.8l53.2-14.7 L696.8-103.1z\"></path></g></g></g><g id=\"iphone05\"><path fill=\"#BE3D2F\" d=\"M883.2,9.8l0.1-8.4l0.6-83.7l0,0l0.1-8.4c0-3.1-2.5-5.6-5.5-5.6l-44.7-0.3c-3.1,0-5.6,2.5-5.6,5.5 l-0.1,8.4v0l-0.5,83.7l0,0l-0.1,8.4c0,3.1,2.5,5.6,5.5,5.6l44.7,0.3C880.6,15.4,883.2,12.9,883.2,9.8z\"></path><path fill=\"#434A54\" d=\"M887.2,7.9l0-8.2l0,0l0-83.8l0,0l0-8.3c0-3.1-2.5-5.6-5.6-5.6l-44.7,0c-3.1,0-5.6,2.4-5.6,5.5l0,7.4h0 l0,83.7h0l0,9.3c0,3.1,2.5,5.7,5.6,5.6l44.7,0C884.6,13.4,887.2,10.9,887.2,7.9z\"></path><circle fill=\"#2A2A2A\" cx=\"857.8\" cy=\"6.5\" r=\"4.2\"></circle><rect id=\"iphone5positionpath\" x=\"834\" y=\"-83.6\" fill=\"#FFFFFF\" width=\"50.4\" height=\"82.6\"></rect><path fill=\"#3498DB\" d=\"M855.3-38l5.3-8.6c0.1-0.1,0.1-0.1,0.2-0.1c0.1,0,0.2,0.1,0.2,0.2l4.8,8.5c0.1,0.1,0.1,0.2,0,0.3 c0,0.1-0.1,0.1-0.2,0.1l-10.1,0c-0.1,0-0.2,0-0.2-0.1C855.2-37.8,855.2-37.9,855.3-38L855.3-38z\"></path></g></g><g id=\"employee\"><g><g><g><path fill=\"#586273\" d=\"M652.7-92.5c-4.3,0.7-7.2,4.7-6.5,9l23.2,147c0.7,4.3,4.7,7.2,9,6.5l50.3-7.9L703-100.4L652.7-92.5z\"></path></g></g><g opacity=\"0.2\"><g><path fill=\"#AAB2BD\" d=\"M652.7-92.5c-4.3,0.7-7.2,4.7-6.5,9l23.2,147c0.7,4.3,4.7,7.2,9,6.5l50.3-7.9L703-100.4L652.7-92.5z\"></path></g></g><g><g><path fill=\"#656D78\" d=\"M753.3-108.4l-50.3,7.9l25.6,162.5l50.3-7.9c4.3-0.7,7.2-4.7,6.5-9l-23.2-147 C761.6-106.1,757.5-109,753.3-108.4z\"></path></g></g></g><g><g><polygon fill=\"#F7F9F8\" points=\"680.3,57.8 680.3,57.8 773.2,43.2 773.2,43.2 751.2,-96.1 751.2,-96.1 658.4,-81.5 658.4,-81.5 \"></polygon></g></g><g><path fill=\"#464E5C\" d=\"M700.7-114.9c-6.4,1-10.8,7-9.8,13.4c1,6.4,7,10.8,13.4,9.8c6.4-1,10.8-7,9.8-13.4 S707.1-115.9,700.7-114.9z M703.4-97.5c-3.2,0.5-6.2-1.7-6.7-4.9c-0.5-3.2,1.7-6.2,4.9-6.7c3.2-0.5,6.2,1.7,6.7,4.9 C708.8-101,706.6-98,703.4-97.5z\"></path></g><g><g><g><g><rect x=\"686.7\" y=\"36.9\" transform=\"matrix(-0.9878 0.1556 -0.1556 -0.9878 1447.0376 -35.5482)\" fill=\"#DCE4E8\" width=\"76.4\" height=\"3.9\"></rect></g></g></g><g><g><g><rect x=\"684.9\" y=\"25.3\" transform=\"matrix(-0.9878 0.1556 -0.1556 -0.9878 1441.6221 -58.3651)\" fill=\"#DCE4E8\" width=\"76.4\" height=\"3.9\"></rect></g></g></g><g><g><g><rect x=\"683.1\" y=\"13.7\" transform=\"matrix(-0.9878 0.1556 -0.1556 -0.9878 1436.1541 -81.1213)\" fill=\"#DCE4E8\" width=\"76.4\" height=\"3.9\"></rect></g></g></g><g><g><g><rect x=\"681.2\" y=\"2.1\" transform=\"matrix(-0.9878 0.1556 -0.1556 -0.9878 1430.7175 -103.9143)\" fill=\"#DCE4E8\" width=\"76.4\" height=\"3.9\"></rect></g></g></g><g><g><g><rect x=\"679.4\" y=\"-9.5\" transform=\"matrix(-0.9878 0.1556 -0.1556 -0.9878 1425.2896 -126.7184)\" fill=\"#DCE4E8\" width=\"76.4\" height=\"3.9\"></rect></g></g></g><g><g><g><rect x=\"677.6\" y=\"-21.1\" transform=\"matrix(-0.9878 0.1556 -0.1556 -0.9878 1419.8433 -149.5029)\" fill=\"#DCE4E8\" width=\"76.4\" height=\"3.9\"></rect></g></g></g><g><g><g><rect x=\"675.8\" y=\"-32.7\" transform=\"matrix(-0.9878 0.1556 -0.1556 -0.9878 1414.3976 -172.2861)\" fill=\"#DCE4E8\" width=\"76.4\" height=\"3.9\"></rect></g></g></g><g><g><g><rect x=\"673.9\" y=\"-44.4\" transform=\"matrix(-0.9878 0.1556 -0.1556 -0.9878 1408.9716 -195.0868)\" fill=\"#DCE4E8\" width=\"76.4\" height=\"3.9\"></rect></g></g></g><g><g><g><rect x=\"672.1\" y=\"-56\" transform=\"matrix(-0.9878 0.1556 -0.1556 -0.9878 1403.526 -217.8717)\" fill=\"#DCE4E8\" width=\"76.4\" height=\"3.9\"></rect></g></g></g><g><g><g><rect x=\"670.3\" y=\"-67.6\" transform=\"matrix(-0.9878 0.1556 -0.1556 -0.9878 1398.0804 -240.6513)\" fill=\"#DCE4E8\" width=\"76.4\" height=\"3.9\"></rect></g></g></g><g><g><g><rect x=\"668.4\" y=\"-79.2\" transform=\"matrix(-0.9878 0.1556 -0.1556 -0.9878 1392.6401 -263.4504)\" fill=\"#DCE4E8\" width=\"76.4\" height=\"3.9\"></rect></g></g></g></g><g><g><path fill=\"#464E5C\" d=\"M733.1-98.2c0.7,4.3-2.3,8.3-6.5,9L684-82.6c-4.3,0.7-8.3-2.3-9-6.5l-0.3-1.9c-0.7-4.3,2.3-8.3,6.5-9 l42.6-6.7c4.3-0.7,8.3,2.3,9,6.5L733.1-98.2z\"></path></g></g></g><g id=\"clients\"><g id=\"luiss\"><g><path fill=\"#BE3D2F\" d=\"M659.7,280.2c-0.1,2.6,2.1,4.8,4.7,4.9l100.6,2.1c2.6,0.1,4.8-2.1,4.9-4.7l3-143.6 c0.1-2.6-2.1-4.8-4.7-4.9l-100.6-2.1c-2.6-0.1-4.8,2.1-4.9,4.7l-0.1,2.4l-4.8-0.1l-0.1,4.8l4.8,0.1l-0.1,4.8l-4.8-0.1 l-0.1,4.8l4.8,0.1l-0.1,4.9l-4.8-0.1l-0.1,4.8l4.8,0.1l-0.1,4.7l-4.8-0.1l-0.1,4.8l4.8,0.1l-0.1,4.8l-4.8-0.1L657,182l4.8,0.1 l-0.1,4.9l-4.8-0.1l-0.1,4.8l4.8,0.1l-0.1,4.7l-4.8-0.1l-0.1,4.8l4.8,0.1l-0.1,4.8l-4.8-0.1l-0.1,4.8l4.8,0.1l-0.1,4.9 l-4.8-0.1l-0.1,4.8l4.8,0.1l-0.1,4.7l-4.8-0.1l-0.1,4.8l4.8,0.1l-0.1,4.8l-4.8-0.1l-0.1,4.8l4.8,0.1l-0.1,4.9l-4.8-0.1 l-0.1,4.8l4.8,0.1l-0.1,4.7l-4.8-0.1l-0.1,4.8l4.8,0.1l-0.1,4.7l-4.8-0.1l-0.1,4.8l4.8,0.1l-0.1,4.8l-4.8-0.1l-0.1,4.8 l4.8,0.1L659.7,280.2z\"></path><path fill=\"#ECF0F1\" d=\"M772.4,280.2c-0.1,2.6-2.3,4.7-4.9,4.7l-100.6-2.1c-2.6-0.1-4.7-2.3-4.7-4.9l3-143.6 c0.1-2.6,2.3-4.7,4.9-4.7l100.6,2.1c2.6,0.1,4.7,2.3,4.7,4.9L772.4,280.2z\"></path><path fill=\"#E5E5E5\" d=\"M667.4,256.2l-9.6-0.2l0.1-4.8l9.6,0.2L667.4,256.2z M667.3,260.9l-9.6-0.2l-0.1,4.8l9.6,0.2 L667.3,260.9z M667.1,270.4l-9.6-0.2l-0.1,4.8l9.6,0.2L667.1,270.4z M667.7,242.3l-9.6-0.2l-0.1,4.8l9.6,0.2L667.7,242.3z M667.9,232.6l-9.6-0.2l-0.1,4.8l9.6,0.2L667.9,232.6z M668.1,223l-9.6-0.2l-0.1,4.8l9.6,0.2L668.1,223z M668.3,213.5 l-9.6-0.2l-0.1,4.8l9.6,0.2L668.3,213.5z M668.5,203.8l-9.6-0.2l-0.1,4.8l9.6,0.2L668.5,203.8z M668.7,194.2l-9.6-0.2 l-0.1,4.8l9.6,0.2L668.7,194.2z M668.9,184.8l-9.6-0.2l-0.1,4.8l9.6,0.2L668.9,184.8z M669.1,175.1l-9.6-0.2l-0.1,4.8l9.6,0.2 L669.1,175.1z M669.3,165.5l-9.6-0.2l-0.1,4.8l9.6,0.2L669.3,165.5z M669.5,156l-9.6-0.2l-0.1,4.8l9.6,0.2L669.5,156z M669.7,146.3l-9.6-0.2l-0.1,4.8l9.6,0.2L669.7,146.3z M669.9,136.7l-9.6-0.2l-0.1,4.8l9.6,0.2L669.9,136.7z\"></path><path fill=\"#BDC3C7\" d=\"M766.1,148.1l-24.8-0.5l0.1-3.8l24.8,0.5L766.1,148.1z M766.1,150.6l-24.8-0.5l-0.1,3.8l24.8,0.5 L766.1,150.6z M765.9,157l-24.8-0.5l-0.1,3.8l24.8,0.5L765.9,157z M765.8,163.4l-24.8-0.5l-0.1,3.8l24.8,0.5L765.8,163.4z M764.8,213.7l-85.3-1.8l0.1-3.8l85.3,1.8L764.8,213.7z M765,203.5l-85.3-1.8l-0.1,3.8l85.3,1.8L765,203.5z M765.1,197.1 l-85.3-1.8l-0.1,3.8l85.3,1.8L765.1,197.1z M765.2,190.7l-85.3-1.8l-0.1,3.8l85.3,1.8L765.2,190.7z M713.7,215.2l-34.4-0.7 l-0.1,3.8l34.4,0.7L713.7,215.2z\"></path></g><path fill=\"#212323\" d=\"M700.8,150.8c1.3,0,2.5,0.1,3.8,0.1c-1.2,0.5-1.4,1.5-1.3,2.7c0,1.8-0.1,3.7-0.1,5.5 c0.1,2.3,1.6,3.4,3.7,2.9c0.9-0.2,1.6-0.7,1.8-1.6c0.5-2.7,0.3-5.4,0.3-8.1c0-0.7-0.7-1-1.2-1.4c1.1,0,2.2,0,3.3,0.1 c-1.2,0.5-1.1,1.6-1.1,2.6c0,1.9-0.1,3.9-0.1,5.8c-0.1,2.3-1.3,3.4-3.6,3.5c-2.7,0.1-4.3-1.1-4.4-3.4c-0.1-2,0-4.1,0.1-6.1 C701.8,152.4,702.1,151.3,700.8,150.8z M734.9,160.7c0.4-2.2-0.5-3.4-3-4.3c-0.6-0.2-1.2-0.4-1.8-0.7c-0.6-0.3-1-0.7-1.1-1.5 c-0.1-1.1,0.2-2,1.4-2.4c1.2-0.4,2.3-0.2,3,1c0.2,0.4,0.2,1,0.8,0.9c0.3,0,0.4-0.2,0.4-0.5c0-0.5,0.2-1.1-0.4-1.5 c-0.3-0.2-0.5-0.3-0.8-0.4c-1-0.3-2.1-0.4-3.1-0.2c-1.5,0.3-2.5,1.3-2.7,2.8c-0.2,1.5,0.5,2.7,2.1,3.3c0.8,0.3,1.7,0.6,2.5,0.9 c1.3,0.5,1.4,1.5,1.3,2.7c-0.2,1.2-1,1.7-2.1,1.7c-1.3,0.1-2.5-0.1-2.9-1.7c-0.1-0.3-0.2-0.6-0.6-0.6c-0.3,0-0.5,0.1-0.5,0.4 c-0.1,0.8-0.3,1.7,0.8,2.1c0.8,0.3,1.6,0.5,2.5,0.5C733.1,163.5,734.6,162.5,734.9,160.7z M725.7,160.3c0.4-1.9-0.6-3.2-2.9-4 c-0.7-0.2-1.5-0.4-2.1-0.8c-1.4-0.8-1.3-2.8,0.1-3.6c1.3-0.7,2.8-0.3,3.5,1c0.2,0.4,0.2,0.8,0.8,0.7c0.7-0.1,0.4-0.7,0.5-1.1 c0.1-0.6-0.3-0.9-0.8-1.1c-1-0.4-2.1-0.5-3.2-0.4c-1.7,0.2-2.7,1.2-2.9,2.7c-0.2,1.8,0.4,2.8,2.1,3.5c0.7,0.3,1.3,0.5,2,0.7 c1.2,0.4,1.9,1.3,1.8,2.6c-0.1,1.1-0.7,1.9-1.9,2c-1.3,0.1-2.5,0.2-3.2-1.3c-0.2-0.4-0.2-1.1-0.9-0.9c-0.6,0.2-0.3,0.8-0.4,1.2 c-0.1,0.6,0.2,1,0.8,1.2c0.8,0.3,1.7,0.5,2.6,0.5C724,163.3,725.3,162.3,725.7,160.3z M693.4,152.9c-0.1,2.3-0.1,4.5-0.2,6.8 c0,1,0.2,2.2-1.4,2.6c2.1,0.2,4,0.3,6,0.3c2.1,0,2.5-0.7,1.7-2.7c-1.3,2.1-1.3,2-3.6,2c-1,0-1.3-0.3-1.3-1.3 c0.1-2.4,0.1-4.8,0.2-7.2c0-1.1,0.1-2.2,1.4-2.7c-1.3,0-2.6-0.1-3.9-0.1C693.4,151.1,693.4,152,693.4,152.9z M713.8,153.6 c-0.1,2.2-0.1,4.4-0.1,6.6c0,1,0.1,2.1-1.3,2.5c1.4,0.2,2.6,0.3,4.1,0c-1.6-0.3-1.3-1.4-1.3-2.4c0-2,0.1-4.1,0.1-6.1 c0-1.2,0-2.3,1.7-3c-1.7,0-3-0.1-4.2-0.1C713.8,151.6,713.8,152.5,713.8,153.6z M686.7,155.6c0.3,0.4,0.8,0.6,1.3,0.4 c0.6-0.3,1-0.7,0.9-1.4c-0.1-0.9-0.6-1.5-1.5-1.6c-1.1-0.1-2,0.4-2.1,1.5c-0.2,2.5-0.2,5-0.2,7.9c0.6-0.8,0.5-1.3,0.5-1.8 c0.1-1.9,0.1-3.8,0.2-5.7c0-0.7,0.4-1.2,1-1.4c0.5-0.2,1-0.1,1.4,0.3c0.3,0.3,0.6,0.7,0.3,1.2c-0.2,0.3-0.5,0.5-0.9,0.4 c-0.7-0.1-0.2-0.7-0.5-1.2C686.3,154.7,686.3,155.2,686.7,155.6z M678.6,161.8c0-2.1,0.1-4.2,0.1-6.3c0-0.5,0-1.1-0.3-1.6 c-0.5-1-1.3-1.4-2.4-1c-0.9,0.3-1.2,1-1.1,1.9c0.1,0.6,0.6,0.9,1.1,1.1c0.4,0.1,0.8-0.1,1-0.4c0.3-0.4,0.3-0.9-0.3-1.3 c-0.3,0.4,0.2,1.2-0.7,1.1c-0.4,0-0.7-0.2-0.8-0.6c-0.1-0.6,0.1-1,0.6-1.2c0.8-0.4,1.4-0.1,1.8,0.6c0.4,0.5,0.3,1.1,0.3,1.7 c0,2-0.1,4-0.1,6.1C678.3,161.8,678.4,161.8,678.6,161.8z M688.6,150.6c-4.4-0.1-8.9-0.2-13.3-0.3c0,0.1,0,0.2,0,0.2 c4.5,0.1,8.9,0.2,13.4,0.3C688.6,150.7,688.6,150.7,688.6,150.6z M688.6,151.8c-4.4-0.1-8.8-0.2-13.2-0.3c0,0.1,0,0.1,0,0.2 c4.4,0.1,8.8,0.2,13.2,0.3C688.6,152,688.6,151.9,688.6,151.8z M679.8,154.3c-0.1,2.6-0.1,5.1-0.2,7.7c0.1,0,0.2,0,0.2,0 c0.1-2.6,0.1-5.1,0.2-7.7C679.9,154.3,679.8,154.3,679.8,154.3z M681.2,162c0.1-2.6,0.1-5.2,0.2-7.8c-0.1,0-0.2,0-0.2,0 c-0.1,2.6-0.1,5.2-0.2,7.8C681,162,681.1,162,681.2,162z M682.5,154.4c-0.1,2.5-0.1,5.1-0.2,7.6c0.1,0,0.2,0,0.2,0 c0.1-2.5,0.1-5.1,0.2-7.6C682.7,154.3,682.6,154.3,682.5,154.4z M684,162.1c0.1-2.6,0.1-5.2,0.2-7.8c-0.1,0-0.2,0-0.3,0 c-0.1,2.6-0.1,5.2-0.2,7.8C683.8,162.1,683.9,162.1,684,162.1z M684.6,153c-1.8,0-3.5-0.1-5.3-0.1c0,0.1,0,0.1,0,0.2 c1.8,0,3.5,0.1,5.3,0.1C684.6,153.1,684.6,153.1,684.6,153z\"></path></g><g id=\"algida\"><g><rect x=\"828.5\" y=\"120.9\" transform=\"matrix(-0.9995 3.000150e-02 -3.000150e-02 -0.9995 1773.7046 370.6915)\" fill=\"#BE3D2F\" width=\"111.1\" height=\"155.4\"></rect><rect x=\"829.5\" y=\"119.9\" transform=\"matrix(-0.9995 3.000150e-02 -3.000150e-02 -0.9995 1775.6052 368.6152)\" fill=\"#FFFFFF\" width=\"111.1\" height=\"155.4\"></rect></g><g><path fill=\"#E13A3E\" d=\"M867.5,127.8c6.7-0.2,12.5,2.3,15.2,4.2c0.5,0.3,0.7,0.3,1.1,0c1.7-1.2,6.8-4.9,14-5.2 c8.7-0.3,17.6,3.9,17.9,13.4c0.2,5.9-3.6,12.1-10.4,16.5c-1.7,1.1-3.7,2.1-5.9,2.9c-1.2,0.5-1.8,0-0.5-1 c3.1-2.5,11.2-9,10.9-16.9c-0.2-5.3-5.3-10.5-13.8-10.3c-6.5,0.2-11.2,4-12.1,4.6c-0.5,0.3-0.8,0.3-1.2-0.1 c-2.4-2-7.3-4.1-12.8-4c-6.8,0.2-12.8,4.1-12.6,10.8c0.4,12.1,21.5,16.4,26.6,16.3c1.3,0,12.4-4.3,12.1-13.7 c-0.1-3.3-2.2-5.5-5-5.4c-3.6,0.1-5.5,3.2-6.9,4.9c-0.3,0.4-0.8,0.6-1.1,0c-1.3-2.2-3.8-4.6-7.1-4.5c-2.9,0.1-4.6,2.3-4.6,4.6 c0.2,5.5,7.9,8.7,11.5,9.8c0.7,0.2,0.7,1-0.3,0.9c-5.1-0.3-17.9-3.8-18.1-12c-0.1-3.4,2.7-7.2,8.5-7.4c3.9-0.1,7.7,1.9,10,4.5 c0.2,0.3,0.6,0.2,0.8,0c0.2-0.2,4.6-4.8,10.1-5c3.9-0.1,8.2,2.4,8.4,8c0.2,5.8-4.7,11.8-8.9,14.5c-4.3,2.9-8.4,4.2-9.5,4.1 c-16.9-0.9-32.1-10.2-32.4-21.7C851.3,135.3,855.4,128.1,867.5,127.8L867.5,127.8z\"></path><path fill=\"#E13A3E\" d=\"M862.3,174.3l3.7-7.7l0,0l4.3,7.4l-1.5,0.7l-0.8-1.5l-3.6,0.1l-0.6,1.5L862.3,174.3z M865.1,172 l2.2-0.1l-1.2-2.2L865.1,172z\"></path><path fill=\"#E13A3E\" d=\"M898.9,173.2l3.7-7.7h0l4.3,7.4l-1.5,0.7l-0.8-1.5l-3.6,0.1l-0.6,1.5L898.9,173.2z M901.7,170.9 l2.2-0.1l-1.2-2.2L901.7,170.9z\"></path><path fill=\"#E13A3E\" d=\"M872,174.4l-0.2-7.7l1.7,0l0.2,6.2l2.7-0.1l0,1.5L872,174.4L872,174.4z\"></path><path fill=\"#E13A3E\" d=\"M884.7,173c-0.5,0.6-2.1,1.2-3.2,1.2c-2.2,0.1-3.9-1.6-4-3.9c-0.1-2.3,1.6-4,3.7-4.1 c1.3,0,2.5,0.6,2.9,1.2l-1.1,1.2c-0.3-0.3-0.9-0.7-1.8-0.7c-1.1,0-2,1-2,2.5c0,1.5,1.2,2.3,2.3,2.2c0.6,0,1.1-0.2,1.5-0.5 l0-1.2l-1.2,0l-0.1-1.4l2.8-0.1L884.7,173L884.7,173z\"></path><path fill=\"#E13A3E\" d=\"M891.2,166.1l2.6-0.1c2.1-0.1,4,1.6,4.1,3.7c0.1,2.6-2.1,4-4.1,4l-2.3,0.1L891.2,166.1L891.2,166.1z M893.9,172.2c1.5,0,2.3-1.2,2.2-2.4c0-1.3-1.1-2.2-2.4-2.2l-0.8,0l0.1,4.6L893.9,172.2L893.9,172.2z\"></path><rect x=\"887.1\" y=\"166.2\" transform=\"matrix(-0.9995 3.020133e-02 -3.020133e-02 -0.9995 1780.5812 313.2866)\" fill=\"#E13A3E\" width=\"1.7\" height=\"7.8\"></rect></g><g><g><rect x=\"846.1\" y=\"209.3\" transform=\"matrix(0.9995 -3.000150e-02 3.000150e-02 0.9995 -5.9338 26.673)\" fill=\"#DCE4E8\" width=\"79.6\" height=\"3.6\"></rect></g><g><rect x=\"845.9\" y=\"203.4\" transform=\"matrix(0.9995 -3.000150e-02 3.000150e-02 0.9995 -5.7557 26.6649)\" fill=\"#DCE4E8\" width=\"79.6\" height=\"3.6\"></rect></g><g><rect x=\"845.7\" y=\"197.4\" transform=\"matrix(0.9995 -3.000150e-02 3.000150e-02 0.9995 -5.5775 26.657)\" fill=\"#DCE4E8\" width=\"79.6\" height=\"3.6\"></rect></g><g><rect x=\"845.6\" y=\"191.5\" transform=\"matrix(0.9995 -3.000150e-02 3.000150e-02 0.9995 -5.3995 26.649)\" fill=\"#DCE4E8\" width=\"79.6\" height=\"3.6\"></rect></g><g><rect x=\"846.3\" y=\"215.9\" transform=\"matrix(0.9995 -3.000150e-02 3.000150e-02 0.9995 -6.1438 25.9688)\" fill=\"#DCE4E8\" width=\"32.1\" height=\"3.6\"></rect></g></g></g><g id=\"unilever\"><g><rect x=\"525.4\" y=\"9.1\" fill=\"#BE3D2F\" width=\"111.1\" height=\"155.4\"></rect><rect x=\"526.4\" y=\"8.1\" fill=\"#DCE4E8\" width=\"111.1\" height=\"155.4\"></rect></g><path fill=\"#0081C0\" d=\"M560.1,81.2c-0.1-0.3-0.7-5.3,1.2-3.6c1.4,1.2,0.8,5.5,0.5,7c-1.2,6.2-9.3,6.4-9.6-0.3 c-0.1-1.9-0.1-6.1,2.2-6.6c0.9-0.2,0.1,6.3,0.1,7.2C554.9,91.5,561.9,86.8,560.1,81.2C560,80.9,560.3,81.8,560.1,81.2z M600.8,83.7c2.1,0,0,2.5-1,2.7C599.5,85.7,599.5,83.7,600.8,83.7z M587,84.9c0-2.2-2.8,0-1.3,1.9 C586.6,86.5,587,85.8,587,84.9z M576,77.7c-0.1-1.7-2.4-0.9-2.3,0.6C573.8,80.2,576.1,79.3,576,77.7 C575.9,77.1,576.1,78.5,576,77.7z M581.7,79.8c0.1-0.8-0.2-1.2-0.8-1.4c-1.4,0.1-1.1,6.4-0.4,6.3 C581.6,84.6,581.8,80.4,581.7,79.8C581.7,78.8,581.9,82,581.7,79.8z M605.2,83.5c-0.3,1.1-5,6.6-5,3.9c0-0.3,2.5-1.3,2.8-1.8 c1.6-2.5-2.2-4.3-3.9-2.1c-4,5,3.5,8,6.2,2.3c0.4,1.1,1.1,5.4,2.5,2.4c0.7-1.5,1.3-3.5,2.5-4.6c1.4-1.3,1.1,0.5,2.5,0.5 c2,0,0.4-3.4-2.1-2.2c-1.1,0.5-2.8,4.7-3.3,4.7c-1.2,0-0.3-4-1.2-4C605.6,82.7,605.3,83,605.2,83.5 C604.7,85.3,605.2,83.2,605.2,83.5z M576.9,87.7c3.2,0,1.2-7.1,2.1-9.4c2.2-5.8,4.3,1.7,3.6,4.5c-0.3,1.3-1,2.3-1.5,3.5 c0.3,1.7,2.8,2.4,2.8,0.3c0-7.4,8.3-3,2.3,0.8c3.2,3.2,4.3-5.3,5.8-5.3c0.9,0,1.5,4.6,2.1,5.3c1.6,1.9,1.6-4.8,1.8-5.1 c1.9-2.9,1,3.6,0.6,4.6c-2.9,5.6-3.6-0.7-5.2-0.7c-0.7,0-1.9,2-2.5,2.3c-2.2,1.5-3.5-0.1-5.6,0.6c-1.9,0.7-2.2-1.1-3.6-1.1 c-1.5,0-2.7,2.4-4.5,1c-0.7-0.6-1.2-2.8-2.2-1.3c-1,1.5-2,2.4-3,0.3c-2.8-5.9-3.3,1.7-6.9,1.4c-0.8-0.1,0.4-6.4,1.7-6.3 c0.5,0,0.2,2.3,1,2.3c0.9,0,2.5-4.4,3.6-2.8c0.6,1,0.8,4.6,2.4,4.6c2.3,0,0.5-4.6,2.7-4.6C576.4,82.5,573.6,87.7,576.9,87.7 M601.5,32.3c-1.4,0-0.6-1-1.3-1.5c0.7,0.2,3.7-1,3.7,0C603.5,31.8,602.6,32.3,601.5,32.3z M601.9,34.5c1.8,0,5.7-3.8,2.7-4.2 C605.9,31.9,598.2,34.5,601.9,34.5z M601.8,35.2c0.2,1.2,2.2,4.2,3.7,4.1c0.8-0.1,1.2-5.8,0.2-6.1 C605,34.5,603.2,35.4,601.8,35.2 M559.6,47c-1,0,0.4-2.8-0.5-2.8c-1.4,0-1.7,7.9,0,7.9c2.4,0,0.3-4.1,1.5-4.1 c3.5,0-0.8,5.6-1.1,6.3c-1.3,3.9,1.5,4.2,2.9,6.8c1.7-3.1-3.4-3.8-1.7-7.1c0.4,0.9,1.2,1.2,2.1,1.1c-1.9-1.6,3.1-11.3,2.2-11.3 c-1.1,0-0.9,3.8-2.3,3.8c-0.5,0,1.7-4.9,0.7-4.9c-1.3,0-1,4.3-2,4.3c-1,0,1-3.9-0.2-3.9C559.8,43.1,560.6,47,559.6,47 M564.4,52.5c2.4,0,0.9-4.7,2-5.9c-0.4,2,2.1,5.5-0.3,5.5c-0.3,0,0.3,2.7,1.7,1.1c1.5-1.7-1.5-5.6-0.6-8c0,2.3,1.2,4.2,2.3,6.1 c1.4,2.3,0.6,1.8-0.5,1.8c-2.3,0,4.8,4.7,2.4-0.5c-1.3-2.7-5-5.8-3.1-9.2c-2.9,1.9-2.7,7.6-4.8,7.6 C563.1,51,563.6,52.5,564.4,52.5 M592.8,31.4c1.8-1.2,6.1-0.7,6.8,1.2C601.7,38.4,590.2,33.2,592.8,31.4 C593,31.3,592.7,31.5,592.8,31.4z M596.9,33.8c0.6,0.1,1.1-0.1,1.4-0.6c0-0.2-3.7-0.5-3.7-0.6C595,33.5,595.8,33.9,596.9,33.8 M564.8,59.6c-4,1-0.2,6.3,1.8,7c4.3,1.6,6.8-3,4-6.3c-2.4-2.9-7-0.2-4.5,2.9c0.8,0.9,2.6,1.6,3.6,0.6c1.9-2-2-3.8-2-2.6 c0,0.8,1.3,1.1,1.8,0.8c0.8,1.3-2.1,0.6-2.3,0.4c-2.2-2,1.9-3.7,3.2-1C572.7,66.2,563.2,65.9,564.8,59.6 M586.2,70.6 c0.1,0,1.4-0.3,1.4,0.2c0,1.2-3,1.1-3.7,0.6c-1.4-1-4,0.7-6.3,0.2c-1.9-0.4-7.1-2.4-8.3-3.8c1.9,0.4,3.7-0.5,3.5-2.6 c1.8,0.7,1.3,3.1,3.3,3.1c1.5,0,5.4-2.8,5.8-4.6c0.8,0.2,6.3,2.2,6,1.4c0.5,1.7,0.2,0.8-0.2,2.2c-1.5,5-3.1-0.4-5.1-0.4 c-0.1,0-7,4.1-7,2.5c0,1.7,5.1,0,5.7-0.6C583.1,67.3,583.7,70.6,586.2,70.6z M584.7,66.8c0,1,1.5,1,1.5,0 C586.2,65.9,584.7,65.9,584.7,66.8 M599.6,57.5c-1.2,0-0.2,1.9,0.7,1.9C602.1,59.4,600.7,57.5,599.6,57.5z M597.5,58.6 c-0.7,0-2.3,2.1-2.8,2.5c-1.8,1.2-2.3-1-1-1.3c2.6-0.6,4.4-5.1,7.4-2.3c2.7,2.4-0.4,6.4-2.5,7.9c-0.9,0.6-2-0.8-1-1.2 c0.3-0.1,4.1-3.6,2.5-3.6c-1.8,0-1.6,4.8-4.7,2.6C594,62,598.3,58.6,597.5,58.6 M560.4,34.1c-2.1,1.2-3.9-1.6-1.7-2.5 C558.6,32.7,559.3,33.7,560.4,34.1z M564.4,37.7c-0.9,1-1.5,4,0.7,4C567.9,41.7,565.9,38.1,564.4,37.7 C564,38.2,565.4,37.9,564.4,37.7z M558.2,38.4c-1.2,2,8.5-0.5,5.6-2.6C560.8,33.7,560.1,35.4,558.2,38.4 C558.2,38.5,558.5,38,558.2,38.4z M562.6,36.1c0.6,0.3,0.7,0.7,0,1.1c-0.7,0-1.9-1.9-0.7-1.9C562.4,35.3,562.6,35.6,562.6,36.1 C562.8,36.3,562.4,35.8,562.6,36.1z M560.9,38.4c-1,0-1.8-2.3-0.8-2.3C559.6,36.1,562.8,38.4,560.9,38.4z M562.5,33.7 C564.6,27,555.4,33.7,562.5,33.7C562.6,33.4,561.2,33.7,562.5,33.7z M557.6,41.2c0,2.9,2.1,2.1,3.6,0.8 C559.7,42.3,558.6,42.6,557.6,41.2C557.6,42.6,558.2,42,557.6,41.2z M558.3,39.5c-0.4,1.8,1.6,2,2.6,0.8 C560,40.4,558.9,40.3,558.3,39.5C558.3,39.6,558.7,40.1,558.3,39.5z M562.9,39.2c-2.2,0.6-1,3.7,0.6,2.5 C562.8,40.9,562.6,40.1,562.9,39.2C562.5,39.3,562.8,39.4,562.9,39.2z M563.6,34.1c0,1,1.5,1,1.5,0S563.6,33.1,563.6,34.1z M564.5,35.8c0,1,1.5,1,1.5,0C566,34.8,564.5,34.8,564.5,35.8 M593.8,45c0.5-0.9,1-0.9,1.4,0C594.7,46,594.3,46,593.8,45z M587.2,39.2c0,1,1.5,1,1.5,0S587.2,38.2,587.2,39.2z M586.6,41.8c0,1.4,2.1,1.4,2.1,0C588.7,40.5,586.6,40.5,586.6,41.8z M588.9,40.6c0,1.5,2.3,1.5,2.3,0C591.2,39.2,588.9,39.2,588.9,40.6z M589,38.2c0.2,0.2,0.5,0.5,0.7,0.7c1-0.5,1-1,0-1.4 C589.5,37.7,589.3,38,589,38.2z M592.4,36.4c0.5,0.9,1,0.9,1.4,0C593.4,35.5,592.9,35.5,592.4,36.4z M591,38.7 c0,1.5,2.4,1.5,2.4,0S591,37.2,591,38.7z M589.1,43.1c0,1,1.5,1,1.5,0C590.6,42.1,589.1,42.1,589.1,43.1z M591.5,41.6 c0,1,1.5,1,1.5,0C593,40.6,591.5,40.6,591.5,41.6z M590.8,44.2c0,1.7,2.6,1.7,2.6,0S590.8,42.6,590.8,44.2z M593.5,42.7 c0,1.1,1.8,1.1,1.8,0C595.3,41.5,593.5,41.5,593.5,42.7z M593.5,40.3c0,1,1.6,1,1.6,0C595.1,39.3,593.5,39.3,593.5,40.3 M595.4,64.9c-2.4,1.9-6.8-0.5-6.8,3.9C588.6,75.2,600.1,64.9,595.4,64.9C594.9,65.3,595.8,64.9,595.4,64.9z M594.4,64.7 c1.7-1.5-2.5-1.9-3.3-1.5C589,64.3,592.7,66.2,594.4,64.7C594.6,64.6,593.9,65.1,594.4,64.7z M594.3,66.5 c0.8,0-1.6,2.4-2.7,2.4C592.2,67.1,591.7,66.5,594.3,66.5 M587.1,43.6c0-0.1,3.8,4.5,2.6,4.5c0.8,0,0.1-1.7,0.6-2.1 c0.7-0.6,2.1,0.6,2.8,0.6c-0.1,0.3-4.8,3-1.6,3c0,0,3.1-2.2,3.1,0.9c0,2.5-4.3-1-4.3-0.1c0,0.4,1.5,3.6-0.8,1.9 c-0.8-0.6,0.3-2.4-0.2-2.4c-1,0-1.9,1.9-3.3,2c0.9-0.8,0.6-1.6,0.6-2.7c0-2.1,1.7,0.1,2.1,0.1 C588.5,49.6,586.1,45.4,587.1,43.6C587.3,45.2,586.6,44.6,587.1,43.6z M596,49.1c-0.1,0.5,0.1,0.9,0.6,1c1.4,0,0.2-3.1,0.7-3.1 c0.7,0,1.1,0.2,1.9,0.2c-1.3,0,0.7,2.2,0.7,1.7c0,0.6-2.5,0.1-2.5,1.4c0,1.2,2.9-0.2,3.3-0.2c-1.4,0,0.6,2.3,0.6,2.1 c0.3-0.9-2.6,1.3-1.6,1.3c-0.7,0-1-2.2-2.3-2.2c-1.8,0,1.9,3.2,1.9,3c0-0.6-2.5,1.7-1.2,1.7c-0.6,0-1.2-0.4-2-0.4 c0,0,1.4-3.9,0-3.9c-1.5,0-1.1,3.4-1.5,3.4c0.4,0-1.7-2-1.7-0.6c0.2-0.4,0.3-0.7,0.5-1.1c-0.4-0.2-0.8-0.4-1.2-0.5 c0,0,3-1.3,2.5-0.9c2.9-2-1.7-2.7-1.7-3.8c0,0.5,2.2-1.5,1.3-1.5c0.6,0,1.1,0.2,1.9,0.2C596.7,47.4,596.7,48.2,596,49.1 M587.7,54.3c3.3,0.4-1.7,1.6-1.7,1.6c1.4,0.2-2.4,2.4-2.4,3.6c0,2.6,5.8,4.2,5.8,2.2c0,0.1-1-1.3-0.6-1.3 c-0.7,0.3-1.5,0.5-2.3,0.5c-0.4,0-2.7-1.6-1.8-1.6c0.7,0,0.5-1.4,1.2-0.8c1.5,1.2,4.8,1.8,6.4,0.4c0,5-6.9,6.4-9.5,2.4 c-1.2-1.9-1.2-4.4,0.1-6.2c0.5-0.7,6-4,6-1.7C588.5,53.8,588.1,54,587.7,54.3C588.5,54.4,587.7,53.7,587.7,54.3z M593.4,55.3 c0.6,0.9-1.1,3.3,1,3.3C596.9,58.6,595.3,55.4,593.4,55.3C593.5,55.5,594.8,55.4,593.4,55.3z M587.2,56.5 c0.6,0.6-0.5,2.3,0.9,2.3C589.9,58.8,588.6,56.5,587.2,56.5C587.4,56.7,588.3,56.5,587.2,56.5z M589.7,53.3 c2.1,0.4,4.9,5.1,1.4,5.1C587.9,58.4,590.8,54.6,589.7,53.3C591.7,53.7,590,53.6,589.7,53.3z M590.7,55.8 c0.3,0.7,0.6,0.6,0.9-0.1c0-0.5-0.3-0.8-0.7-0.9C590.8,55.1,590.7,55.5,590.7,55.8 M570,36.5c0.9,0,1.5-4.3,1.2-4.3 C570.3,32.2,569.6,36.5,570,36.5z M574.6,37.6c0.9,0,1.2-3.4,0.8-3.4C574.6,34.1,574.1,37.6,574.6,37.6z M571.5,35.9 c1.2,0,1.2-2.3,0.6-2.3C571.6,33.6,570.9,35.9,571.5,35.9z M574.1,35.1c0-1.5-1.8,1.3-0.5,1.3C574,36.1,574.1,35.7,574.1,35.1z M575.5,32.9c1.8,0,2.3,3.6,1.4,3.6c-0.5,0,0-1.4-0.5-1.4c-0.9,0-0.7,3.2,0.4,2.2c-0.3,3.5-3.8,0.5-4.1-1.4 c-1.1,1.2-3.1,2.6-4.8,1.5c-0.4-0.3-1.8-3-0.5-3c0.5,0,0.2,2.3,1.4,1.4c0.9-0.7,0.7-3.6-0.7-2.2c1.2-3.5,5.6-2,4.9,1.4 C573.6,33.7,574.4,33.1,575.5,32.9 M572,37.9c-1.1,0-0.8,2.5-0.8,2.9c-0.8-1.7-4.6-4.3-3.8-0.6c0.5-1.6,2.9,0.7,3.2,1 c-2.2-0.4-4.8-0.3-4.3,2.8c0.7-1.5,2.5-2.3,4-2.1c-1.4,1.2-1.1,8.6,1.4,8.6c1.6,0-0.4-3.4-0.7-4c-1.2-0.3,0.2-3.9,0.3-4.3 c1.2,0.9,1.5,2,1.2,3.4c2.6-1.3,2.5-3.5-0.5-3.9c1-0.4,3.9-1,4.2,0.8c2.3-3.5-3.2-2.3-4.6-1.4c0.3-0.6,0.8-1.8,1.7-1.6 C573.3,38.8,572.8,38.2,572,37.9 M603.6,51.5c-1.4,0-1.6,1.8-0.8,2.6c-1.3-1.3-3.6,0.3-2.3,1.6c1,1,2.8,0.8,2.8,2.7 C604.4,57.4,607.1,51.5,603.6,51.5 M586.9,33.7c0.5,0.5,3.2,0.4,1.9,1.6c1.5,0.6,3-0.7,3-2.2c2.3,3-3.2,4.5-4.6,4.4 C585.8,37.2,586.5,34.2,586.9,33.7C587.4,34.1,586.5,34.1,586.9,33.7z M589.7,32.3c-0.6-1-2.3-0.1-2.5,0.7 c-1.8-4.4,8.4-1.9,3.2,1C590.2,33.7,588.5,32.9,589.7,32.3 M573.8,28.2c0,0.8,2,3.9,2.8,3.9C579.4,32.1,573.8,27,573.8,28.2z M560.1,26.3c0,0.6-1.4,1.6-1.9,1.6C556.5,27.9,560.1,24.6,560.1,26.3z M577.2,27.4c0-1.8-3-2.4-3.1-4c0-1,2.8-0.7,2.8-1.6 c0-0.9-3.9,0.3-4.2,0.4c-2.1,0.9,1.6,2.4,1.6,3.6c0,1.2-3.4-1.7-3.4,0c0,0.3,1.1,3.2,1,3.2c-0.9,0-1.5-1.9-2.5-1.9 c-0.5,0,0,2-0.4,2c-0.4-0.5-0.8-0.9-1.2-1.4c-0.7,0-0.4,2.4-1,2.4c-0.6,0,0-2.7-0.6-2.7c-0.8,0-0.9,1.8-1.7,1.8 c-0.8,0,0.8-2.6-0.2-2.6c-0.1,0-2.5,1.2-2.5,0.8c0-1,2-1.4,2-2.5c0-0.8-2.8,0-2.8-0.9c0-0.9,2-0.9,2-1.8c0-0.9-5-1.2-5-0.3 c0,0.7,2.5,0.4,2.5,1.1c0,0.9-2.6,1.1-2.6,2.2c0,0.8,3.7-0.2,3.7,0.6c0,1.6-3.2,2.6-3.2,4.3c0,0.9,4.1-1.6,4.6-1.6 c0.4,0.7,0.5,1.5,0.1,2.3c0,1.9,1.9-0.4,2.3-0.4c0.9,0,0,3.5,1.1,3.5c1.2,0,0.7-3.7,1.6-3.7c0.5,0.4,0.9,0.7,1.3,1.1 c0.7,0,0.2-1.9,0.9-1.9c1.3,0,2,2.2,3.4,2.2c1.1,0-1-3.9-1-4.4C572.5,26.1,577.2,28.8,577.2,27.4z M575.2,23.6 c0,0.8,2.1,1.8,2.1,0.2C577.4,22.8,575.2,23.2,575.2,23.6z M570.8,21.7c0,0.5-6.7,0.1-6.7,0c0.4,0.1,0.7,0.4,0.9,0.8 c0,0.8-1.9,0.6-1.9,1.2c0,0.7,2.4-0.5,2.4,0.3c-0.3,0.6-0.7,1.1-1,1.7c0-2.6,3.7,1.3,2.7,1.3c0.7,0,0.2-2.1,1.1-2.1 c0.6,0.4,1.1,0.9,1.6,1.4c-1.9,0,1.7-4.3,1.7-2.3c-0.6-0.5-1.1-1-1.7-1.5C570.1,22.2,570.4,21.9,570.8,21.7 M604,24.8 c0,1.9-1.7,3-3.4,3.3C601.7,28.2,607.4,25.8,604,24.8C604,26.4,604.5,24.9,604,24.8z M600.9,26.7c0-1.5-3.2-1.3-3.2-2 c0.8-0.4,1.7-0.7,2.7-0.7c0,0-3.4-2.2-3.4-1.9c0-0.8,3.9-0.5,4.4-0.3c1.7,0.7-0.8,3.4,1,3.4c1.1,0,0.6-2,0.6-2.5c0-1.9,2-1,3-1 c-1.9,1.1,0.8,4.9-1.4,6.7c-0.7,0.6-8.1,2.3-8.1,0.9c0,0.3,2.3-2.8,1.3-2.8C598.5,26.5,600.9,28.9,600.9,26.7z M603.9,22.5 c0.3,0.6,0.6,0.6,0.9,0C604.6,21.9,604.2,21.9,603.9,22.5 M602.3,39.8c0-0.1-1.4-2-1.4-2c-0.1,0.4-0.3,0.7-0.5,1 c-0.9,0-0.9-1.7-1.5-1.7c-0.5,0,0.2,1.3-0.4,1.3c-0.5-0.4-0.9-0.8-1.4-1.2c1.2,0-1,1.9-1,1.6c0,0.7,2.2-0.4,2.2,0.3 c-0.2,0.3-0.4,0.6-0.7,0.8c0,0.7,2.6-1.5,2.6-0.5c0,0.1-1.1,1.2-0.5,1.2C599.9,40.8,602.3,39.4,602.3,39.8z M602.8,48.9 c0.3-0.9,0.7-1.8,1.3-2.6c-1.5-0.8-3.7-4.4-0.3-4.4c0.7,0-1,3.8,0.5,3.8c2.1,0,1-4-0.3-4.6c-1.3-0.6-3,0.6-4.4,0.6 c-3.1,0-5.1-5.8-4.9-5.8c3.7,0,6.4,0.6,8.6,3.9c5.1,3.2,1,5.2,0.1,9.3c0.7-0.6,1.5-1.1,2.2-1.6c1.9,0-0.5,3.6-0.7,3.8 c0.7-2.7-2-0.6-2.5,0.3c-0.6-2-1.5-4.5-3.7-5.2c-3.7-1.2-0.6-2.1-2.3-4.3c1.6,0.6,5.4,6.3,6,7.9c0.6-3.2-3.2-4.5-4-7.1 C601,42.9,602.8,46.4,602.8,48.9 M592.5,29.1c-1,0.1-1.7-0.3-2.2-1c0-0.8,1.6,0.4,1.9,0.4c-1.8,0,1.8-3.6,1.8-1.4 c-0.4-0.5-0.8-1-1.2-1.5c0.5-0.3,1-0.6,1.5-0.9c0-0.6-1.7,0.2-1.7-1.4c0-0.5-2.1,0.8-2.1-0.1C590.6,19.1,601.1,29.1,592.5,29.1 z M588.9,25.5c-0.2-0.3-0.5-0.5-0.7-0.8c0,1.1,1.8-1,1.4-1c-0.3,0,1.5,2.2,1.5,0.8c-0.2,0.3-0.3,0.5-0.5,0.8 c0.3,0.2,0.7,0.4,1.1,0.5c-0.4,0.1-0.7,0.2-1.1,0.3c0.1,0.3,0.3,0.5,0.4,0.8c0-0.8-1.8,0.6-1.7,0.6c0.6,0-1.2-2.2-1.2-1.1 C588.3,26.1,588.6,25.8,588.9,25.5z M588.3,28.6c0.6,0,0.1,1.4,0.6,1.4c1.4,0,0.3-0.9,2.3-0.1c2.8,1.1,5.8-1.2,5.8-4.1 c0-4.6-5.4-4.4-8.2-4.4c-0.4,0,0,1.4-0.4,1.4c-0.2,0-2.2-1.1-2.2-0.8c0.4,0.7,0.8,1.4,1.2,2.1c-0.4,0.3-0.7,0.6-1.1,0.9 c0.4,0.3,0.8,0.6,1.2,1c-0.4,0.5-0.8,0.9-1.3,1.3c0.4,0.1,0.9,0.3,1.3,0.5c0,0.1-1.1,2.2-0.8,2.2 C587.2,29.4,587.8,29,588.3,28.6 M579.8,61.5c0-0.8-6,3.4-6,2.8c0,3,7.7,1.8,6.2-1.7c0,0.1,3-0.1,1.4-0.9 c0.8-0.6-1.1-1.6-1.3-1.6C579.5,60.5,579.4,60.9,579.8,61.5 M569.5,58c3.1,0.8,1.7,3.7,4.1,4.9c2.2,1,3.2-0.9,1.4-2.3 c-2.2-1.6-1.4-0.4-3.2-3.1C570.2,55.2,566.5,57.3,569.5,58C571,58.4,568.3,57.7,569.5,58z M574.8,62.2 c-0.6-0.1-1.1-0.4-1.4-0.9C573.4,59.8,576.2,62.2,574.8,62.2 M573,47.6c0-1.9,3.9-1.8,2.6-4.3c3.3,1.8,0.4,2.8,0.4,4.9 c0,2.1,2.4,1.2,0.8,3.8c-0.8,1.3-1.1,3.4,1,3.6c-2.1,0.5-4.8-0.9-4.8-3.3c0-2.7,2.8-1.8,2.8-1.9C575.8,49.3,573,49.2,573,47.6z M579,57.1c-0.3,0.1-1.8,2-0.7,2c0.7,0,2.6-2.5,1.4-2.5C579.5,56.8,579.3,56.9,579,57.1C578.4,57.4,579.5,56.9,579,57.1z M579,55.8c0-1.8-3-0.9-1.1-3.6c0.5,2.7,5.7,3.2,2.3,6.9c-4.8,5.2-7.4-3.8-7-3.8C573.6,55.2,579,58.7,579,55.8 M565.7,56.2 c0.2,2.1-2.9-0.4-0.8-0.6C565.2,55.7,565.4,56,565.7,56.2C565.7,56.6,565.6,55.8,565.7,56.2z M562.2,56.9 c0.4,2.8,5.7,1.2,5.5-1.4C567.4,52.8,561.9,54.3,562.2,56.9\"></path><g><g><rect x=\"536.4\" y=\"136.2\" fill=\"#3498DB\" width=\"93.5\" height=\"4.2\"></rect></g><g><rect x=\"536.4\" y=\"129.2\" fill=\"#3498DB\" width=\"93.5\" height=\"4.2\"></rect></g><g><rect x=\"536.4\" y=\"122.2\" fill=\"#3498DB\" width=\"93.5\" height=\"4.2\"></rect></g><g><rect x=\"536.4\" y=\"115.3\" fill=\"#3498DB\" width=\"93.5\" height=\"4.2\"></rect></g><g><rect x=\"536.4\" y=\"143.2\" fill=\"#3498DB\" width=\"37.7\" height=\"4.2\"></rect></g></g></g><g id=\"alitalia\"><g><rect x=\"512.1\" y=\"89.6\" transform=\"matrix(-0.9937 -0.1123 0.1123 -0.9937 1112.918 397.2945)\" fill=\"#BE3D2F\" width=\"111.2\" height=\"155.5\"></rect><rect x=\"513.3\" y=\"88.8\" transform=\"matrix(-0.9937 -0.1123 0.1123 -0.9937 1115.438 395.9095)\" fill=\"#ECF0F1\" width=\"111.2\" height=\"155.5\"></rect></g><g><path fill=\"#ED1C2E\" d=\"M540.6,116.4c1.6,0.2,2.5-3.3,3.9-7l-8.2,6.5C537.8,116.1,539,116.2,540.6,116.4L540.6,116.4z\"></path><path fill=\"#008457\" d=\"M559.7,102.1l-5.5,16l-4.3-0.5l5.5-16L559.7,102.1z M561.2,106.4l-4.1,12.1l4.3,0.5l4.1-12.1 L561.2,106.4z M562.5,102.5l-1,2.9l4.3,0.5l1-2.9L562.5,102.5z M594,106.1l-5.5,16l4.3,0.5l5.5-16L594,106.1z M599.6,110.9 l-4.1,12.1l4.3,0.5l4.1-12.1L599.6,110.9z M601,106.9l-1,2.9l4.3,0.5l1-2.9L601,106.9z M568.4,104.6l-4,11.6 c-1.1,3.2,2.5,3.4,2.5,3.4l5.1,0.6l1.1-3.2l-3.1-0.4c-1.3-0.2-0.9-1.3-0.9-1.3l1.6-4.6l1.9,0.2c1.7,0.3,2.9-0.4,3.4-2.9 c-1.5-0.2-2.9-0.3-4.4-0.5l0.8-2.4L568.4,104.6L568.4,104.6z M587.5,109.4c3,1,1.7,3.9,1.7,3.9l-3,8.8 c-2.9,0.1-8.1-0.7-8.1-0.7c-2.8-0.3-3.9-1.6-3.9-1.6c-1-1.1-0.2-3-0.2-3c0.9-2.9,3.7-3,3.7-3l6-0.4c1.3-0.2,1.2-1,1.2-1 c0.3-1.3-1.6-1.3-1.6-1.3c-2.1-0.3-2.7,1.4-2.7,1.4l-4.3-0.5c0.9-3.3,4.6-3.4,4.6-3.4C584.5,108.2,587.5,109.4,587.5,109.4 L587.5,109.4z M582.7,119.1l1.2-3.5l-3.9,0.3c-1.1,0.1-1.4,1.1-1.4,1.1c-0.4,1.1,0.4,1.5,0.4,1.5 C580,119,582.7,119.1,582.7,119.1L582.7,119.1z M615.7,112.7c3,1,1.8,3.9,1.8,3.9l-3,8.8c-3,0.1-8.1-0.7-8.1-0.7 c-2.8-0.3-3.9-1.6-3.9-1.6c-1-1.1-0.2-3-0.2-3c1-2.9,3.7-3,3.7-3l6-0.4c1.3-0.2,1.3-1,1.3-1c0.3-1.3-1.6-1.4-1.6-1.4 c-2.2-0.3-2.7,1.4-2.7,1.4l-4.3-0.5c0.9-3.3,4.5-3.4,4.5-3.4C612.7,111.5,615.7,112.7,615.7,112.7L615.7,112.7z M611,122.4 l1.2-3.5l-3.9,0.3c-1.1,0.1-1.4,1.1-1.4,1.1c-0.4,1.1,0.4,1.5,0.4,1.5C608.2,122.4,611,122.4,611,122.4L611,122.4z M549,102.9 l-5,14c0.8,0.1,1.6,0.2,2.3,0.3c1.7,0.2,2.4-1.2,3.3-3.8l4-12l-5.9-0.7c-1.7-0.2-2.6,0.6-2.6,0.6l-17,13.8l5.2,0.6L549,102.9 L549,102.9z\"></path></g><g><g><g><rect x=\"526.9\" y=\"132.5\" transform=\"matrix(0.9923 0.124 -0.124 0.9923 21.0978 -69.8901)\" fill=\"#DCE4E8\" width=\"90.2\" height=\"4\"></rect></g><g><rect x=\"526.1\" y=\"139.2\" transform=\"matrix(0.9923 0.124 -0.124 0.9923 21.9199 -69.7343)\" fill=\"#DCE4E8\" width=\"90.2\" height=\"4\"></rect></g><g><rect x=\"525.2\" y=\"145.9\" transform=\"matrix(0.9923 0.124 -0.124 0.9923 22.7417 -69.5815)\" fill=\"#DCE4E8\" width=\"90.2\" height=\"4\"></rect></g></g><g><g><rect x=\"520.4\" y=\"184.6\" transform=\"matrix(0.9923 0.124 -0.124 0.9923 27.5088 -68.6808)\" fill=\"#DCE4E8\" width=\"90.2\" height=\"4\"></rect></g><g><rect x=\"519.6\" y=\"190.1\" transform=\"matrix(0.9923 0.124 -0.124 0.9923 28.0981 -67.2935)\" fill=\"#DCE4E8\" width=\"70\" height=\"4\"></rect></g></g><g><g><rect x=\"523.8\" y=\"156.7\" transform=\"matrix(0.9923 0.124 -0.124 0.9923 23.9546 -67.4361)\" fill=\"#B7BFC7\" width=\"59.9\" height=\"4\"></rect></g><g><rect x=\"522.9\" y=\"163.4\" transform=\"matrix(0.9923 0.124 -0.124 0.9923 24.7762 -67.2809)\" fill=\"#DCE4E8\" width=\"59.9\" height=\"4\"></rect></g><g><rect x=\"522.1\" y=\"170.1\" transform=\"matrix(0.9923 0.124 -0.124 0.9923 25.5984 -67.1269)\" fill=\"#DCE4E8\" width=\"59.9\" height=\"4\"></rect></g><g><rect x=\"589.2\" y=\"162.7\" transform=\"matrix(0.9923 0.124 -0.124 0.9923 25.8928 -73.1996)\" fill=\"#62C3ED\" width=\"23.6\" height=\"17.5\"></rect></g></g></g></g><g id=\"enel\"><path fill=\"#BE3D2F\" d=\"M666.5,320.2c0.2,2.6,2.6,4.6,5.2,4.3l100.2-9.1c2.6-0.2,4.6-2.6,4.3-5.2l-13-143.1 c-0.2-2.6-2.6-4.6-5.2-4.3l-100.2,9.1c-2.6,0.2-4.6,2.6-4.3,5.2l0.2,2.4l-4.8,0.4l0.4,4.8l4.8-0.4l0.4,4.8l-4.8,0.4l0.4,4.8 l4.8-0.4l0.4,4.9l-4.8,0.4l0.4,4.8l4.8-0.4l0.4,4.7l-4.8,0.4l0.4,4.8l4.8-0.4l0.4,4.8l-4.8,0.4l0.4,4.8l4.8-0.4l0.4,4.9 l-4.8,0.4l0.4,4.8l4.8-0.4l0.4,4.7l-4.8,0.4l0.4,4.8l4.8-0.4l0.4,4.8l-4.8,0.4l0.4,4.8l4.8-0.4l0.4,4.9l-4.8,0.4l0.4,4.8 l4.8-0.4l0.4,4.7l-4.8,0.4l0.4,4.8l4.8-0.4l0.4,4.8l-4.8,0.4l0.4,4.8l4.8-0.4l0.4,4.9l-4.8,0.4l0.4,4.8l4.8-0.4l0.4,4.7 l-4.8,0.4l0.4,4.8l4.8-0.4l0.4,4.6l-4.8,0.4l0.4,4.8l4.8-0.4l0.4,4.8l-4.8,0.4l0.4,4.8l4.8-0.4L666.5,320.2z\"></path><path fill=\"#ECF0F1\" d=\"M778.5,307.6c0.2,2.6-1.7,5-4.3,5.2l-100.2,9.1c-2.6,0.2-5-1.7-5.2-4.3l-13-143.1 c-0.2-2.6,1.7-5,4.3-5.2l100.2-9.1c2.6-0.2,5,1.7,5.2,4.3L778.5,307.6z\"></path><path fill=\"#E5E5E5\" d=\"M671.5,295.8l-9.5,0.9l-0.4-4.8l9.5-0.9L671.5,295.8z M672,300.4l-9.5,0.9l0.4,4.8l9.5-0.9L672,300.4z M672.8,309.9l-9.5,0.9l0.4,4.8l9.5-0.9L672.8,309.9z M670.2,281.6l-9.5,0.9l0.4,4.8l9.5-0.9L670.2,281.6z M669.4,271.9 l-9.5,0.9l0.4,4.8l9.5-0.9L669.4,271.9z M668.5,262.4l-9.5,0.9l0.4,4.8l9.5-0.9L668.5,262.4z M667.6,252.9l-9.5,0.9l0.4,4.8 l9.5-0.9L667.6,252.9z M666.8,243.3l-9.5,0.9l0.4,4.8l9.5-0.9L666.8,243.3z M665.9,233.7l-9.5,0.9l0.4,4.8l9.5-0.9L665.9,233.7 z M665,224.3l-9.5,0.9l0.4,4.8l9.5-0.9L665,224.3z M664.2,214.6l-9.5,0.9l0.4,4.8l9.5-0.9L664.2,214.6z M663.3,205.1l-9.5,0.9 l0.4,4.8l9.5-0.9L663.3,205.1z M662.4,195.6l-9.5,0.9l0.4,4.8l9.5-0.9L662.4,195.6z M661.6,186l-9.5,0.9l0.4,4.8l9.5-0.9 L661.6,186z M660.7,176.4l-9.5,0.9l0.4,4.8l9.5-0.9L660.7,176.4z\"></path><path fill=\"#EE3E28\" d=\"M686.4,204.4c-5.4-0.1-10.8,9.1-16.8,4.3c3.5-0.4,5.5-2.9,8.3-4.5C680.1,202.9,684.4,202.2,686.4,204.4 z M678.7,198.7c-3.3,0.3-6.1,1.8-9.4,0.7c3.5,6.9,12.2,0.7,17.1,2.9C685.5,199.5,681.2,198.5,678.7,198.7z M681.3,194 c-3.1-1.1-6.3-1-8.8-3.3c0.3,7.7,10.7,5.7,14.3,9.9C687.2,197.6,683.7,194.8,681.3,194z M686,190.7c-2.3-2.3-5.3-3.5-6.6-6.8 c-3,7.1,7.3,9.8,8.7,15C689.8,196.4,687.8,192.5,686,190.7z M691.5,189.8c-1.1-3.1-3.3-5.4-3.1-8.9c-5.8,5.2,2.5,11.9,1.6,17.3 C692.4,196.6,692.3,192.2,691.5,189.8z M696.9,191.2c0.3-3.3-0.7-6.3,0.9-9.4c-7.4,2.2-2.8,11.9-5.9,16.3 C694.9,197.8,696.7,193.7,696.9,191.2z M701.1,194.9c1.7-2.8,2.1-6,4.9-8c-7.7-1.2-7.6,9.4-12.4,12.1 C696.4,200,699.8,197.1,701.1,194.9z M703.3,200.1c2.7-1.8,4.5-4.5,8-5.1c-6.4-4.4-11,5.2-16.5,5.5 C696.9,202.7,701.1,201.6,703.3,200.1z M703.3,205.7c3.3-0.4,6-2.1,9.4-1.1c-3.8-6.7-12.2-0.1-17.2-2.2 C696.4,205.2,700.8,206,703.3,205.7z M701.5,219.3c-5.8-3.6-6.4-9-7-15.1C689.7,210,693.3,220.1,701.5,219.3z M687.3,204.8 c0.6,6.2,1.2,11.6-3.8,16.3C691.8,220.3,693.2,209.6,687.3,204.8z\"></path><path fill=\"#0054A5\" d=\"M724.6,203c-2.9,0.3-5.8,0.6-8.7,0.9c0.4-4.4,0.8-8.7,1.2-13.1c0.4-3.9,5.4-2.7,8.9-3 c0.7,3.2-1.4,2.8-3.7,3.1c-2.9,0.3-2.3,0.8-2.6,3.7c1.7-0.2,3.5-0.4,5.2-0.5c0.7,3.2-1.8,2.7-4.1,2.9c-2.2,0.2-1.5,2-1.7,4 c1.9-0.2,3.8-0.4,5.7-0.6C724.8,201.1,724.9,202.2,724.6,203z M735.9,201.8c-0.8,0.3-2,0.2-2.8,0.3c0.1-1.4,1.4-13-2.9-7.8 c-2.2,2.7,0.8,9.5-4.3,8.5c0.3-3.2-1-12.5,3.8-11.6c-0.1,0.6-0.1,1.2-0.2,1.8c2-2.8,7.5-3.6,7.1,1.1 C736.4,196.7,736.2,199.3,735.9,201.8z M747.7,195.9c-2.3,0.2-4.7,0.5-7,0.7c-1,0.1,0,1.7,0.4,2c1.5,1.3,4.2,0.2,5.7-0.6 c0.9,4.7-11.5,4.8-8.9-3.5C739.8,188,748.8,188.3,747.7,195.9z M744.9,194.2c0.3-3.8-4.1-2.4-4.4,0.5 C742,194.5,743.5,194.3,744.9,194.2z M751.1,200.3c-0.8,0.3-1.9,0.2-2.8,0.3c0.4-3.7-0.8-16.4,4.4-15.6 C752.2,190.1,751.6,195.2,751.1,200.3z\"></path></g><g id=\"equitalia\"><g><rect x=\"820.7\" y=\"185\" transform=\"matrix(-0.9984 -5.630078e-02 5.630078e-02 -0.9984 1736.427 574.3133)\" fill=\"#BE3D2F\" width=\"111.1\" height=\"155.4\"></rect><rect x=\"821.9\" y=\"184.1\" transform=\"matrix(-0.9984 -5.630078e-02 5.630078e-02 -0.9984 1738.7008 572.6115)\" fill=\"#F5ECD9\" width=\"111.1\" height=\"155.4\"></rect></g><g><path fill=\"#7F94C8\" d=\"M848.1,209c-0.1,0-0.2,0-0.3,0c-0.3,0-0.6-0.3-0.6-0.7l0.6-9.5l-14.5,5.6c-0.1,0.1-0.2,0.2-0.2,0.3 c0,0.1,0.1,0.3,0.2,0.4l18.8,10.4c0.1,0,0.2,0.1,0.2,0.1c0.4,0,0.6-0.2,0.7-0.6l0.6-8.2L848.1,209\"></path><path fill=\"#0057A4\" d=\"M889.3,214.3l-1.9-0.1l0.2-3.2l0,0c-0.5,0.6-1.2,0.7-2,0.7c-1.8-0.1-2.7-1.8-2.6-3.5 c0.1-1.9,1.4-3.1,3.3-3c0.9,0.1,1.6,0.6,1.9,1.1l0,0l0.1-0.8l1.8,0.1L889.3,214.3 M886.5,206.9c-1-0.1-1.6,0.5-1.6,1.5 c-0.1,0.9,0.5,1.6,1.4,1.7c1,0.1,1.6-0.5,1.6-1.5C888,207.6,887.4,206.9,886.5,206.9z M896.6,212.3l0.4-6.2l-1.9-0.1l-0.2,3.1 c-0.1,0.8-0.3,1.6-1.3,1.5c-1-0.1-0.9-1-0.9-1.7l0.2-3.1l-1.9-0.1l-0.2,3.4c-0.1,1.7,0.2,3,2.1,3.1c0.9,0.1,1.6-0.4,1.9-0.9 l0,0l-0.1,0.8L896.6,212.3 M899.6,203.1c0.6,0,1.1,0.6,1,1.2c0,0.6-0.6,1.1-1.2,1c-0.6,0-1.1-0.6-1-1.2 C898.4,203.5,899,203.1,899.6,203.1 M898.4,206.1l1.9,0.1l-0.4,6.2l-1.9-0.1L898.4,206.1z M906.2,208.2l0.1-1.5l-1.8-0.1 l0.1-1.9l-1.9-0.1l-0.1,1.9l-1.2-0.1l-0.1,1.5l1.2,0.1l-0.2,3c-0.1,1.4,0.9,2,2.1,2c0.5,0,1.1,0,1.5-0.1l0.1-1.6 c-0.2,0.1-0.7,0.1-0.9,0.1c-0.8-0.1-0.9-0.6-0.8-1.2l0.1-2.1L906.2,208.2 M911,212.5L911,212.5c-0.5,0.6-1.3,0.9-2.1,0.8 c-1.2-0.1-2.2-0.8-2.1-2.1c0.1-2.2,2.8-2,4.4-1.9c0-0.7-0.5-1.2-1.2-1.2c-0.6,0-1.2,0.2-1.6,0.6l-1-1.1 c0.8-0.6,1.8-0.9,2.8-0.8c2.2,0.2,2.8,1.3,2.6,3.4l-0.2,3.2l-1.8-0.1L911,212.5 M910.7,210.5c-0.6,0-1.9-0.1-2,0.8 c0,0.5,0.4,0.7,0.9,0.7c0.8,0.1,1.5-0.3,1.5-1.1l0-0.4L910.7,210.5z M913.9,213.4l1.9,0.1l0.7-10l-1.9-0.1L913.9,213.4z M918.8,204.4c0.6,0,1.1,0.6,1,1.2c0,0.6-0.6,1.1-1.2,1c-0.6,0-1.1-0.6-1-1.2C917.7,204.8,918.2,204.4,918.8,204.4 M917.6,207.4l1.9,0.1l-0.4,6.2l-1.9-0.1L917.6,207.4z M924.5,213.4L924.5,213.4c-0.5,0.6-1.3,0.9-2.1,0.8 c-1.2-0.1-2.2-0.8-2.1-2.1c0.1-2.2,2.8-2,4.4-1.9c0-0.7-0.5-1.2-1.2-1.2c-0.6,0-1.2,0.2-1.6,0.6l-1-1.1 c0.8-0.6,1.8-0.9,2.8-0.8c2.2,0.2,2.8,1.3,2.6,3.4l-0.2,3.2l-1.8-0.1L924.5,213.4 M924.2,211.4c-0.6,0-1.9-0.1-2,0.8 c0,0.5,0.4,0.7,0.9,0.7c0.8,0.1,1.5-0.3,1.5-1.1l0-0.4L924.2,211.4z M875.5,200.7l-0.7,10l7.1,0.5l0.1-2l-4.9-0.3l0.1-2 l4.3,0.3l0.1-2l-4.3-0.3l0.1-1.9l4.6,0.3l0.1-2L875.5,200.7 M868.2,201.2c0.1-0.1,0.2-0.2,0.2-0.3c0-0.1-0.1-0.3-0.2-0.3 l-18.8-10.4c-0.1-0.1-0.2-0.1-0.3-0.1c-0.3,0-0.7,0.2-0.7,0.6l-0.6,8.2l5.7-2.2c0.2-0.1,0.5-0.1,0.6,0.1 c0.1,0.1,0.1,0.2,0.1,0.3l-0.1,0.8c0,0.4-0.2,0.7-0.4,0.8l-4.2,1.7l-0.1,2l3.5-1.3c0.2-0.1,0.5-0.1,0.6,0.1 c0.1,0.1,0.1,0.2,0.1,0.3l-0.1,0.8c0,0.4-0.2,0.7-0.4,0.8l-3.8,1.5l-0.1,2.1l3.8-1.5c0.2-0.1,0.5-0.1,0.6,0.1 c0.1,0.1,0.1,0.2,0.1,0.3l-0.1,1.4L868.2,201.2\"></path></g><g><g><rect x=\"835.5\" y=\"232\" transform=\"matrix(0.9987 5.139888e-02 -5.139888e-02 0.9987 13.1908 -44.9549)\" fill=\"#DCE4E8\" width=\"90.2\" height=\"4\"></rect></g><g><rect x=\"835.2\" y=\"238.7\" transform=\"matrix(0.9987 5.139888e-02 -5.139888e-02 0.9987 13.536 -44.9282)\" fill=\"#DCE4E8\" width=\"90.2\" height=\"4\"></rect></g><g><rect x=\"834.9\" y=\"245.4\" transform=\"matrix(0.9987 5.139888e-02 -5.139888e-02 0.9987 13.8807 -44.9022)\" fill=\"#DCE4E8\" width=\"90.2\" height=\"4\"></rect></g></g></g><g id=\"infostrada\"><g><rect x=\"810.3\" y=\"219.5\" transform=\"matrix(-0.9999 1.210032e-02 -1.210032e-02 -0.9999 1735.1945 583.9326)\" fill=\"#BE3D2F\" width=\"111.1\" height=\"155.4\"></rect><rect x=\"811.1\" y=\"218.3\" transform=\"matrix(-0.9999 1.210032e-02 -1.210032e-02 -0.9999 1736.9276 581.6261)\" fill=\"#FFFFFF\" width=\"111.1\" height=\"155.4\"></rect></g><g><path fill=\"#EA690B\" d=\"M824.6,266.5l-0.1-7.5l2,0l0.1,7.5L824.6,266.5L824.6,266.5z M828.2,266.4l1.9,0l-0.1-5.6h0l4,5.5 l2.5,0l-0.1-7.5l-1.9,0l0.1,5.6l0,0l-3.9-5.5l-2.5,0L828.2,266.4L828.2,266.4z M838.5,266.3l2,0l0-3.3l3.4-0.1l0-1.2l-3.4,0.1 l0-1.8l3.6-0.1l0-1.2l-5.6,0.1L838.5,266.3L838.5,266.3z M845.3,262.4L845.3,262.4c0-2.3,1.7-3.9,4.9-3.9c3.2,0,5,1.5,5,3.8 c0,2.3-1.7,3.9-4.9,4C847,266.3,845.3,264.7,845.3,262.4L845.3,262.4z M847.4,262.4c0,1.3,0.8,2.7,2.9,2.7 c2.1,0,2.8-1.4,2.8-2.7c0-1.3-0.9-2.6-2.9-2.6C848.2,259.7,847.4,261.1,847.4,262.4L847.4,262.4z M862.4,258.6 c-0.7-0.2-1.6-0.2-2.4-0.2c-1.8,0-3.5,0.7-3.5,2.3c0,2.5,4.5,1.8,4.5,3.2c0,0.7-1,1-1.8,1c-0.8,0-1.6-0.2-2.3-0.4l-0.2,1.4 c1,0.2,1.5,0.3,2.6,0.2c2,0,3.8-0.7,3.8-2.3c0-2.5-4.5-1.9-4.5-3.2c0-0.8,0.9-1.1,1.6-1.1c0.7,0,1.4,0.1,2.1,0.3L862.4,258.6 L862.4,258.6z M866.3,265.8l2,0l-0.1-6.3l2.9,0l0-1.2l-7.8,0.1l0,1.2l2.9,0L866.3,265.8L866.3,265.8z M874.4,259.4 L874.4,259.4l0,2l0.7,0c1,0,2.1-0.1,2.1-1.1c0-0.9-1.1-1-2.2-0.9L874.4,259.4L874.4,259.4z M872.5,265.7l-0.1-7.5l2.2,0 c2.2,0,4.8-0.1,4.8,1.9c0,0.9-0.8,1.6-2.1,1.8v0c0.6,0,0.9,0.4,1.1,0.8l1.7,2.9l-2.3,0l-1.3-2.3c-0.3-0.6-0.6-0.8-1.4-0.8 l-0.7,0l0,3.1L872.5,265.7L872.5,265.7z M887.3,262.6L887.3,262.6l-1.5-3.1h0l-1.4,3.1L887.3,262.6L887.3,262.6z M880.8,265.6 l3.8-7.5l2.3,0l4.1,7.4l-2.2,0l-0.9-1.7l-4.1,0.1l-0.9,1.7L880.8,265.6L880.8,265.6z M891.7,265.4L891.7,265.4l-0.1-7.5l2.8,0 c3.1,0,5.9,0.7,5.9,3.6c0,3-2.7,3.8-5.8,3.8L891.7,265.4L891.7,265.4z M893.7,259.1l0.1,5.1l1.1,0c1.7,0,3.3-1,3.3-2.6 c0-1.6-1.7-2.5-3.4-2.5L893.7,259.1L893.7,259.1z M906.8,262.3L906.8,262.3l-1.5-3.1h0l-1.4,3.1L906.8,262.3L906.8,262.3z M900.3,265.3l3.8-7.5l2.3,0l4.1,7.4l-2.3,0l-0.9-1.7l-4.1,0.1l-0.9,1.7L900.3,265.3L900.3,265.3z\"></path><g><path fill=\"#14267B\" d=\"M853.9,250.6c0,0,1.6,2,2.1,2.7c0.6,0.6,1.2,1.5,1.9,1.5c0.8,0,1.7-1.2,2-1.4 c0.5-0.4,0.8-0.4,1.1-0.4c0.9-0.1,2.8,1,4,1c3.2-0.1,5.8-2.6,7.1-3.7c1.2-1.2,2-1.9,2-1.9s0.4,0.1,0.1,0.7 c-0.2,0.5-3.5,5.9-9.1,6.2c-2.5,0.1-2.9-1.2-4.3-1c-0.9,0.1-1.8,1.9-3.5,1.9c-1.4,0-3.5-4.2-3.5-4.2S853.1,250.7,853.9,250.6 L853.9,250.6z\"></path><path fill=\"#EA690B\" d=\"M860,252c0.7-0.2,1.1-0.8,0.9-1.3c-0.2-0.5-0.8-0.7-1.5-0.5c-0.7,0.2-1.1,0.8-0.9,1.3 C858.6,251.9,859.3,252.2,860,252L860,252z\"></path></g></g><g><path fill=\"#F5ECD9\" d=\"M905.9,341.9l-76.4,1.3l-0.1-3.9l76.4-1.3L905.9,341.9z M905.6,326.2l-76.4,1.3l0.1,3.9l76.4-1.3 L905.6,326.2z M905.4,314.5l-76.4,1.3l0.1,3.9l76.4-1.3L905.4,314.5z M905.2,302.7l-76.4,1.3l0.1,3.9l76.4-1.3L905.2,302.7z M905,291l-76.4,1.3l0.1,3.9l76.4-1.3L905,291z\"></path><g><g><g><rect x=\"828.4\" y=\"279.9\" transform=\"matrix(0.9999 -1.679931e-02 1.679931e-02 0.9999 -4.6124 14.5987)\" fill=\"#3498DB\" width=\"76.4\" height=\"3.9\"></rect></g></g></g></g></g><g id=\"nintendo\"><g><rect x=\"511.8\" y=\"127.8\" transform=\"matrix(-0.9965 -8.350065e-02 8.350065e-02 -0.9965 1115.6144 457.7294)\" fill=\"#BE3D2F\" width=\"111.1\" height=\"155.4\"></rect><rect x=\"513\" y=\"127\" transform=\"matrix(-0.9965 -8.350065e-02 8.350065e-02 -0.9965 1118.0179 456.176)\" fill=\"#F5F7FA\" width=\"111.1\" height=\"155.4\"></rect></g><g><path fill=\"#EC1C2E\" d=\"M536.2,165.2c-4.2-0.4-6.8-3.6-6.5-7.3c0.3-3.6,3.4-6.4,7.7-6.1l40,3.5c4.2,0.4,6.8,3.7,6.5,7.3 c-0.3,3.6-3.4,6.4-7.7,6L536.2,165.2L536.2,165.2z\"></path><path fill=\"#FFFFFF\" d=\"M537.3,153.5c-3.4-0.3-5.6,1.8-5.9,4.6c-0.2,2.8,1.6,5.2,5,5.5l40,3.5c3.4,0.3,5.6-1.8,5.9-4.6 s-1.6-5.2-5-5.5L537.3,153.5L537.3,153.5z\"></path><path fill=\"#EC1C2E\" d=\"M535.4,155.2l2,0.2l2.3,4.6l0.4-4.4l1.9,0.2l-0.6,6.3l-1.9-0.2l-2.3-4.6l-0.4,4.4l-1.9-0.2 L535.4,155.2z M552.4,158.2l-1-0.1l-0.1,0.6l1,0.1L552,163l1.9,0.2l0.4-4.2l1,0.1l0.1-0.6l-1-0.1l0.1-0.8l-1.9-0.2 L552.4,158.2z M542.5,162.2l1.9,0.2l0.4-4.2l-1.9-0.2L542.5,162.2z M542.9,157.2l1.9,0.2l0.1-1.3l-1.9-0.2L542.9,157.2z M576.5,163L576.5,163L576.5,163c0-0.2,0.1-0.6,0.1-0.9c0.1-0.7-0.3-1-0.7-1s-0.8,0.2-0.9,0.9c0,0.3-0.1,0.9-0.1,0.9 s-0.1,0.6-0.1,0.9c-0.1,0.7,0.3,1,0.7,1c0.4,0,0.8-0.2,0.9-0.9C576.5,163.7,576.5,163,576.5,163L576.5,163z M576,160.6 c1.5,0.1,2.7,1.3,2.6,2.6c-0.1,1.3-1.4,2.2-3,2.1c-1.5-0.1-2.7-1.3-2.6-2.6C573.1,161.5,574.5,160.5,576,160.6L576,160.6z M570.9,158.4L570.9,158.4c0,0-0.1,1.3-0.2,2.3c-0.3-0.2-0.6-0.4-1-0.5c-1.3-0.2-2.5,0.9-2.6,2c-0.1,1.5,0.9,2.1,1.1,2.2 c0.6,0.3,1.4,0.4,2.2,0c0,0,0,0.2,0,0.2l1.9,0.2l0.6-6.3L570.9,158.4L570.9,158.4z M570.6,162.5c0,0,0,0.5-0.1,0.7 c-0.1,0.6-0.5,0.8-0.8,0.7c-0.3,0-0.7-0.2-0.7-0.9c0-0.2,0.1-0.7,0.1-0.7s0-0.5,0.1-0.7c0.1-0.6,0.5-0.8,0.8-0.7 c0.3,0,0.7,0.2,0.7,0.9C570.6,162,570.6,162.5,570.6,162.5L570.6,162.5z M549.2,158.4c-0.6,0-1.2,0.2-1.6,0.5 c0-0.1,0-0.4,0-0.4l-1.9-0.2l-0.4,4.2l1.9,0.2c0,0,0.2-2.6,0.2-2.7c0-0.4,0.4-0.7,1-0.7c0.5,0,0.8,0.5,0.8,0.8 c0,0.3-0.2,2.7-0.2,2.7l1.9,0.2c0,0,0.2-2,0.2-2.3C551.3,159,549.9,158.4,549.2,158.4L549.2,158.4z M564.5,159.7 c-0.6,0-1.2,0.2-1.6,0.5c0-0.1,0-0.4,0-0.4l-1.9-0.2l-0.4,4.2l1.9,0.2c0,0,0.2-2.6,0.2-2.7c0-0.4,0.5-0.7,1-0.7 c0.5,0,0.8,0.5,0.8,0.8c0,0.3-0.2,2.7-0.2,2.7l1.9,0.2c0,0,0.2-2,0.2-2.3C566.6,160.4,565.3,159.8,564.5,159.7L564.5,159.7z M556.9,160.7L556.9,160.7l1.6,0.1c0-0.4,0.1-0.6-0.1-0.8c-0.1-0.3-0.4-0.4-0.6-0.4h0c-0.2,0-0.5,0.1-0.7,0.3 C557,160.1,556.9,160.4,556.9,160.7L556.9,160.7z M558.4,162.1l1.9,0.2c-0.4,1-1.6,1.6-2.8,1.5c-1.5-0.1-2.7-1.3-2.6-2.6 c0.1-1.3,1.5-2.2,3-2.1c1.5,0.1,2.7,1.3,2.6,2.6l-3.6-0.3c0,0-0.1,0.6-0.1,0.9c-0.1,0.8,0.4,1,0.7,1c0.3,0,0.8-0.1,0.9-0.9 C558.4,162.1,558.4,162.1,558.4,162.1L558.4,162.1z M578.9,160.6L578.9,160.6l0.1-0.6l0.2,0l0.3,0.7l0.2,0l-0.4-0.7 c0.2,0,0.4-0.1,0.4-0.4c0-0.3-0.1-0.4-0.5-0.5l-0.5,0l-0.1,1.4L578.9,160.6L578.9,160.6z M579.2,159.8l-0.3,0l0-0.4l0.3,0 c0.1,0,0.3,0.1,0.3,0.2C579.6,159.8,579.4,159.8,579.2,159.8L579.2,159.8z M578,159.8L578,159.8c-0.1,0.7,0.5,1.3,1.1,1.4 c0.7,0.1,1.3-0.4,1.4-1.1c0.1-0.7-0.5-1.3-1.1-1.3C578.7,158.6,578,159.1,578,159.8L578,159.8z M579.1,160.9 c-0.6,0-1-0.5-0.9-1.1c0.1-0.6,0.5-1,1.1-0.9c0.6,0,1,0.5,0.9,1.1C580.2,160.6,579.7,161,579.1,160.9L579.1,160.9z\"></path></g><path fill=\"#D1D3D3\" d=\"M615.5,233.5l-97.8-8.5l0.4-4.4l97.8,8.5L615.5,233.5z M616.5,221.8l-97.8-8.5l-0.4,4.4l97.8,8.5 L616.5,221.8z M617.1,214.5l-97.8-8.5l-0.4,4.4l97.8,8.5L617.1,214.5z M617.8,207.2l-97.8-8.5l-0.4,4.4l97.8,8.5L617.8,207.2z M622.4,153.9l-28.5-2.5l-0.4,4.4l28.5,2.5L622.4,153.9z M621.4,165.6l-28.5-2.5l0.4-4.4l28.5,2.5L621.4,165.6z M620.7,172.9 l-28.5-2.5l0.4-4.4l28.5,2.5L620.7,172.9z M620.1,180.2l-28.5-2.5l0.4-4.4l28.5,2.5L620.1,180.2z M556.9,231.3l-39.4-3.4 l-0.4,4.4l39.4,3.4L556.9,231.3z\"></path></g><g id=\"peroni\"><path fill=\"#BE3D2F\" d=\"M683.2,390.8c0.7,2.5,3.4,4,5.9,3.3l96.8-27.7c2.5-0.7,4-3.4,3.3-5.9l-39.5-138.1 c-0.7-2.5-3.4-4-5.9-3.3L647,246.8c-2.5,0.7-4,3.4-3.3,5.9l0.7,2.3l-4.6,1.3l1.3,4.6l4.6-1.3l1.3,4.6l-4.6,1.3l1.3,4.6l4.6-1.3 l1.3,4.7l-4.6,1.3l1.3,4.6l4.6-1.3l1.3,4.5l-4.6,1.3l1.3,4.6l4.6-1.3l1.3,4.6l-4.6,1.3l1.3,4.6l4.6-1.3l1.3,4.7l-4.6,1.3 l1.3,4.6l4.6-1.3l1.3,4.5l-4.6,1.3l1.3,4.6l4.6-1.3l1.3,4.6l-4.6,1.3l1.3,4.6l4.6-1.3l1.4,4.7l-4.6,1.3l1.3,4.6l4.6-1.3 l1.3,4.5l-4.6,1.3l1.3,4.6l4.6-1.3l1.3,4.6l-4.6,1.3l1.3,4.6l4.6-1.3l1.4,4.7l-4.6,1.3l1.3,4.6l4.6-1.3l1.3,4.5l-4.6,1.3 l1.3,4.6l4.6-1.3l1.3,4.5L674,376l1.3,4.6l4.6-1.3l1.3,4.6l-4.6,1.3l1.3,4.6l4.6-1.3L683.2,390.8z\"></path><path fill=\"#FFFFFF\" d=\"M790.8,357.5c0.7,2.5-0.8,5.2-3.3,5.9l-96.8,27.7c-2.5,0.7-5.2-0.8-5.9-3.3l-39.5-138.1 c-0.7-2.5,0.8-5.2,3.3-5.9l96.8-27.7c2.5-0.7,5.2,0.8,5.9,3.3L790.8,357.5z\"></path><path fill=\"#E5E5E5\" d=\"M683.5,365.9l-9.2,2.6L673,364l9.2-2.6L683.5,365.9z M684.8,370.4l-9.2,2.6l1.3,4.6l9.2-2.6 L684.8,370.4z M687.5,379.6l-9.2,2.6l1.3,4.6l9.2-2.6L687.5,379.6z M679.7,352.2l-9.2,2.6l1.3,4.6l9.2-2.6L679.7,352.2z M676.9,342.8l-9.2,2.6l1.3,4.6l9.2-2.6L676.9,342.8z M674.3,333.7l-9.2,2.6l1.3,4.6l9.2-2.6L674.3,333.7z M671.7,324.6 l-9.2,2.6l1.3,4.6l9.2-2.6L671.7,324.6z M669.2,315.2l-9.2,2.6l1.3,4.6l9.2-2.6L669.2,315.2z M666.5,306.1l-9.2,2.6l1.3,4.6 l9.2-2.6L666.5,306.1z M663.8,296.9l-9.2,2.6l1.3,4.6l9.2-2.6L663.8,296.9z M661.1,287.6l-9.2,2.6l1.3,4.6l9.2-2.6L661.1,287.6 z M658.5,278.4l-9.2,2.6l1.3,4.6l9.2-2.6L658.5,278.4z M655.9,269.3l-9.2,2.6l1.3,4.6l9.2-2.6L655.9,269.3z M653.3,259.9 l-9.2,2.6l1.3,4.6l9.2-2.6L653.3,259.9z M650.6,250.7l-9.2,2.6l1.3,4.6l9.2-2.6L650.6,250.7z\"></path><path id=\"SVGID_1_\" fill=\"#A08842\" d=\"M744.8,264.1c-0.4,0.1-1,0-1.6-0.4c-1.2-0.8-3.3-2.3-3.3-2.3c-0.7,0.2-58.8,17.4-59,17.5 c0,0-1.3,3-1.8,4c-0.3,0.6-0.7,1-1.1,1.1c-0.4,0.1-0.9,0-1.3-0.4c-1.9-1.9-4.8-5.6-7.4-14.3c-2.6-8.7-2.1-14.4-1.5-16.8 c0.1-0.5,0.4-0.7,0.6-0.8c0.3-0.1,0.7,0,0.9,0.2c0.5,0.3,4.1,2.8,4.1,2.8c0.7-0.2,58.1-17.2,59-17.5c0,0,1.7-3.9,2-4.5 c0.2-0.5,0.5-0.8,0.8-0.9c0.3-0.1,0.6,0,0.9,0.3c1.8,1.7,5.4,6.2,8,15c2.6,8.8,2,13.4,1.6,16.1 C745.5,263.6,745.2,264,744.8,264.1\"></path><path fill=\"#FFFFFF\" d=\"M742,247.5c-0.4-1.3-0.9-2.5-1.3-3.7c-0.6-1.6-1.3-3.1-2-4.6c-0.7-1.4-1.4-2.7-2.4-3.9 c-0.4-0.5-0.6-0.2-0.8,0.3c-0.1,0.4-1.2,3-1.2,3l0,0c-0.6,0.2-61.4,18.2-61.4,18.2s-2.5-1.8-2.8-2c-0.3-0.2-0.6-0.1-0.6,0.3 c0,3.5,0.1,6.7,0.9,10.2c0.9,3.8,2.1,7.5,3.9,11c0.8,1.5,1.8,3,2.8,4.3c0.3,0.4,0.6,0.1,0.7-0.2c0.1-0.1,1.3-3,1.3-3 c0.9-0.3,60.5-17.9,61.2-18.2c0,0,2.2,1.6,2.6,1.9c0.4,0.3,0.7,0.1,0.8-0.3C744.4,256.6,743.4,251.8,742,247.5\"></path><path fill=\"#B01F24\" d=\"M743.1,260.5c-0.3-0.2-2.7-1.9-2.7-1.9l-61.8,18.3c0,0-1,2.3-1.3,3c-1-1.2-1.9-2.6-2.6-3.9 c-1.1-2.1-2-4.5-2.9-7.4c-0.3-1.1-0.6-2.2-0.9-3.5c-0.8-3.2-0.9-6.2-0.9-9.6c0.7,0.5,2.1,1.5,2.4,1.7l0.2,0.2l62-18.4l0.1-0.3 c0,0,1-2.6,1.1-2.9c0.8,1,1.5,2.2,2.1,3.5c0.8,1.6,1.4,3.1,2,4.6c0.5,1.3,0.9,2.5,1.3,3.6c0.2,0.5,0.3,1,0.5,1.5 C743.2,253.6,743.6,257.4,743.1,260.5\"></path><path d=\"M674.6,260.2l-0.7,0.2l3.9,13l3.9-1.2c0,0-0.9-3.1-1.1-3.8c0.6-0.2,1.5-0.5,1.5-0.5c2.7-0.8,4-2.9,3.3-5.4l-0.3-1 c-0.8-2.8-3.5-3.4-5.6-2.8L674.6,260.2 M680.3,262.2c0.6-0.2,1-0.1,1.2,0.4l0.3,0.9c0,0.2,0.2,0.7-0.8,0.9c0,0-0.9,0.3-1.5,0.4 c-0.2-0.6-0.5-1.7-0.7-2.3C679.4,262.5,680.3,262.2,680.3,262.2z M693.2,254.6l0.5-0.1l1,3.5c0,0-4.2,1.3-5,1.5 c0.1,0.5,0.3,1.1,0.5,1.5c0.7-0.2,2.9-0.9,2.9-0.9l1,3.5c-2.3,0.7-2.9,0.9-2.9,0.9s0.2,0.8,0.3,1.1c0.8-0.2,5.2-1.6,5.2-1.6 l1,3.4l-9.2,2.7l-3.9-13L693.2,254.6 M695.8,253.9l-0.7,0.2l3.9,13l3.9-1.2c0,0-0.9-3.2-1.2-3.9c0.3-0.1,0.4-0.1,0.6-0.2 c0.4,0.4,3,3.4,3,3.4l4.1-1.2c0,0-3.1-3.5-3.5-4c1.1-1.1,1.4-2.4,1.1-3.8c0,0-0.4-1.3-0.4-1.3c-0.9-2.9-3.5-3.2-5.6-2.6 L695.8,253.9 M701.7,255.8c0.3-0.1,1-0.2,1.2,0.5l0.3,0.9c0.2,0.7-0.6,1-0.8,1c0,0-1.1,0.3-1.7,0.5c-0.2-0.6-0.6-1.9-0.7-2.4 C700.6,256.1,701.7,255.8,701.7,255.8z M729.1,244l0.5-0.1l3.9,13l-3.4,1c0,0-3.3-3.1-5-4.6c0.1,0.5,1.7,5.6,1.7,5.6l-3.9,1.1 l-3.9-13l3.5-1c0,0,3.2,3,4.8,4.5c-0.1-0.5-1.6-5.4-1.6-5.4L729.1,244 M734.8,242.3l0.5-0.1l3.9,13l-3.9,1.2l-3.9-13 L734.8,242.3 M707.7,250.8L707.7,250.8l-0.1,0.2c-0.2,0.5,0.1,2.9,0.9,5.6l0.3,1c0.9,2.9,1.9,5.1,2.4,5.5l0,0l0,0 c0.3,0.2,0.5,0.3,4.5-0.9l0.6-0.2c4-1.2,4.1-1.4,4.3-1.7l0,0l0,0c0.2-0.6-0.1-2.9-1-5.9l-0.3-1c-0.8-2.8-1.9-4.8-2.3-5.2 l-0.1-0.1l-0.1,0l0,0c-0.5-0.2-2.7,0.3-4.4,0.8l-0.6,0.2C709.4,249.9,707.9,250.5,707.7,250.8 M712.8,252.2 c0,0,0.5-0.2,0.5-0.2c0.4-0.1,0.9-0.2,1.3-0.3c0.2,0.6,0.6,1.6,0.9,2.8l0.3,1c0.3,1.1,0.6,2,0.7,2.8c-0.5,0.2-1.3,0.4-1.3,0.4 l-0.6,0.2c0,0-0.8,0.2-1.3,0.3c-0.3-0.8-0.6-1.7-0.9-2.8l-0.3-1c-0.3-1-0.5-2-0.7-2.9C711.9,252.5,712.4,252.3,712.8,252.2z\"></path><path fill=\"#FFFFFF\" d=\"M679.7,259.1l-5.1,1.5l3.6,12.1l2.9-0.9c0,0-1-3.5-1.1-3.8c0.4-0.1,2-0.6,2-0.6 c2.5-0.7,3.6-2.6,2.9-4.9l-0.3-1C683.9,259.1,681.6,258.6,679.7,259.1 M682.2,263.4c0.3,1-0.7,1.4-1.1,1.5c0,0-1.6,0.5-1.9,0.6 c-0.1-0.4-0.8-2.9-1-3.2c0.4-0.1,1.9-0.6,1.9-0.6c0.3-0.1,1.5-0.4,1.8,0.7L682.2,263.4z M693.1,255.1l0.2-0.1l0.8,2.5 c0,0-4.6,1.4-5,1.5c0.1,0.3,0.7,2.4,0.7,2.4l2.9-0.9l0.8,2.6l-2.9,0.9l0.6,2l5.3-1.6l0.8,2.5l-8.2,2.4l-3.6-12.1L693.1,255.1 M706.5,256.4l-0.4-1.3c-0.8-2.5-3.1-2.8-5-2.3l-5.4,1.6l3.6,12.1l2.9-0.9c0,0-1-3.5-1.2-3.9c0.3-0.1,1.2-0.4,1.4-0.4 c0.2,0.2,3,3.4,3,3.4l3.1-0.9c0,0-3.1-3.5-3.3-3.7C706.5,258.9,706.9,257.8,706.5,256.4 M703.7,257c0.2,0.8-0.4,1.4-1.1,1.6 c0,0-1.8,0.5-2.2,0.6c-0.1-0.3-0.9-3-1-3.3c0.4-0.1,2.2-0.6,2.2-0.6c0.7-0.2,1.6-0.1,1.9,0.8L703.7,257z M729,244.5l0.2-0.1 l3.6,12.1l-2.6,0.8l-5.7-5.3l-0.1,0c0,0-0.2-0.2-0.4-0.3c0,0,0.5,1.5,0.5,1.5l1.6,5.4l-2.9,0.9l-3.6-12.1l2.8-0.8l5.5,5.2l0,0 c0,0,0.2,0.2,0.4,0.4c0,0-0.5-1.5-0.5-1.5l-1.5-5.2L729,244.5 M734.7,242.8l0.2-0.1l3.6,12.1l-2.9,0.9l-3.6-12.1L734.7,242.8 M716.8,248.5L716.8,248.5L716.8,248.5c-0.3-0.1-2.4,0.3-4.2,0.8l-0.6,0.2c-1.7,0.5-3.7,1.2-3.9,1.5c-0.1,0.4,0,2.5,0.9,5.4 l0.3,1c1,3.3,2,5.1,2.2,5.3c0.2,0.1,0.6,0.1,4.1-1l0.6-0.2c3.5-1.1,3.9-1.3,4-1.4c0.1-0.3,0-2.3-1-5.6l-0.3-1 C718.1,250.6,717,248.7,716.8,248.5 M716.4,255.3c0.4,1.3,0.7,2.4,0.9,3.3c-0.2,0.1-1.7,0.6-1.7,0.6l-0.6,0.2 c0,0-1.4,0.4-1.8,0.5c-0.3-0.9-0.7-1.9-1.1-3.2l-0.3-1c-0.4-1.5-0.7-2.6-0.8-3.3c0.5-0.2,1.1-0.4,1.7-0.6l0,0l0.6-0.2 c0.6-0.2,1.2-0.3,1.7-0.4c0.3,0.7,0.7,1.7,1.1,3.2L716.4,255.3z\"></path><path fill=\"#C1E5E8\" d=\"M756.8,280.6l-77.1,22.3l-1-3.5l77.1-22.3L756.8,280.6z M757.5,282.9l-77.1,22.3l1,3.5l77.1-22.3 L757.5,282.9z M760.1,292.1L683,314.4l-1-3.5l77.1-22.3L760.1,292.1z M761.8,297.9l-77.1,22.3l-1-3.5l77.1-22.3L761.8,297.9z\"></path></g><g id=\"sapienza\"><g><rect x=\"511.3\" y=\"180.5\" transform=\"matrix(-0.9986 -5.220191e-02 5.220191e-02 -0.9986 1119.4163 545.6042)\" fill=\"#BE3D2F\" width=\"111.1\" height=\"155.4\"></rect><rect x=\"512.4\" y=\"179.6\" transform=\"matrix(-0.9986 -5.220191e-02 5.220191e-02 -0.9986 1121.795 543.9896)\" fill=\"#FFFFFF\" width=\"111.1\" height=\"155.4\"></rect></g><path fill=\"#8B2332\" d=\"M538.9,191.8c5.7,0.3,10.1,6.1,9.8,12.9c-0.3,6.9-5.2,12.2-11,11.9c-5.7-0.3-10.1-6.1-9.8-12.9 C528.3,196.8,533.2,191.5,538.9,191.8 M563.2,204.7c0.2-3.5-5.5-3-5.3-5.5c0.1-1.4,1.6-2.1,2.7-2c1.2,0.1,1.9,0.6,2,1.1 c0.1,0.7,0.1,0.7,0.2,0.7c0.1,0,0.1,0,0.1-0.2c0-0.5,0-1,0-1.6c-0.7-0.2-1.6-0.3-2.2-0.4c-2.5-0.1-3.5,1.3-3.5,2.7 c0,1.1,0.3,1.9,1.4,2.5c0.8,0.4,1.6,0.8,2.3,1.2c0.9,0.4,1.6,0.9,1.5,1.8c-0.1,1.5-1.5,2.2-2.9,2.2c-0.6,0-2.1-0.5-2.6-1 l-0.2,0.4c0.8,0.6,2.2,0.9,2.8,0.9C561.3,207.6,563.1,206.6,563.2,204.7 M567.6,200.5l-1.6,3.3l2.8,0.1L567.6,200.5z M570.1,207.9l-1.2-3.5l-3.1-0.1l-1.5,3.2l-0.7,0.1l3.6-7.4c0.1-0.2,0.1-0.3,0-0.5l-0.1-0.3l1,0c0.1,0,0.1,0,0.1,0.1l3,8.3 L570.1,207.9z M575.4,199.8c-0.5,0-1.3,0-1.8,0c-0.3,0-0.8-0.1-1-0.1c-0.2-0.1-0.4-0.1-0.5-0.1c-0.1,0-0.1,0-0.2,0.1 c0,0.1,0,0.2,0.3,0.2c0.7,0.1,0.7,0.2,0.7,0.8l-0.4,7.3l1-0.1l0.4-7.4c0-0.4,0.1-0.4,0.4-0.4c2,0.1,2.5,0.9,2.5,2.2 c-0.1,1.1-0.6,1.9-2,1.8c-0.3,0-0.6-0.2-0.7-0.2c0,0-0.1,0.1-0.1,0.1c0,0.1,0.5,0.4,0.8,0.4c1.7,0.1,2.9-0.9,2.9-2.4 C577.8,200.7,576.5,199.8,575.4,199.8z M581.2,200c-0.4,0-0.8,0-1.1,0c-0.3,0-0.8-0.1-1.2-0.1c-0.1,0-0.2,0-0.2,0.1 c0,0.1,0.1,0.2,0.6,0.3c0.2,0.1,0.3,0.4,0.3,0.7l-0.4,7.3l1,0l0.3-7.2c0-0.3,0.1-0.6,0.4-0.6c0.4,0,0.5-0.2,0.5-0.2 C581.4,200.1,581.4,200,581.2,200z M584.3,204.2l0.2-3.4c0-0.1,0.1-0.2,0.3-0.2l1.5,0.1c0.1,0,0.3,0,0.5,0.1 c0.2,0.1,0.4,0,0.5,0.5c0.1,0.6,0.2,0.6,0.3,0.6c0.1,0,0.1,0,0.1-0.2c0-0.3,0-0.7,0-1.1c0-0.3-0.1-0.3-0.3-0.3 c-0.4,0-0.7,0-1.2,0c-0.5,0-1.6,0-2-0.1c-0.3,0-0.7-0.1-1-0.1c-0.2-0.1-0.4-0.1-0.5-0.1c-0.1,0-0.1,0.1-0.2,0.2 c0,0.1,0,0.2,0.3,0.2c0.7,0.1,0.7,0.2,0.7,0.8l-0.4,7.3l0.8,0c0.4,0,1.4,0.1,1.8,0.1c0.5,0,1.2,0.1,1.6,0.1 c0.3,0,0.3,0,0.4-0.3c0-0.4,0.1-0.7,0.1-1.1c0-0.1,0-0.2-0.1-0.2c-0.1,0-0.2,0-0.3,0.6c-0.1,0.5-0.3,0.5-0.5,0.5 c-0.3,0-1,0-1.4,0c-0.4,0-0.7-0.1-1-0.1c-0.4-0.1-0.4-0.2-0.4-0.7l0.1-3l2.6,0.1l0-0.3L584.3,204.2z M597.1,200.7 c-0.2,0-0.8,0.1-1,0.1c-0.3,0-0.9-0.2-1.1-0.2c-0.1,0-0.1,0-0.2,0.1c0,0.1,0,0.2,0.3,0.2c0.7,0.1,0.7,0.2,0.7,0.8l-0.3,5.8 l-4.4-6.8c0-0.1-0.1-0.1-0.1-0.1c-0.4,0-1.3-0.1-1.8-0.2c-0.1,0-0.1,0-0.1,0.1c0,0.1,0,0.2,0.3,0.2c0.7,0.1,0.7,0.2,0.7,0.8 l-0.4,7.3l0.5-0.1l0.3-7.1h0l4.9,7.5l0.6-0.1l0.3-7.2c0-0.6,0.1-0.7,0.7-0.7c0.3,0,0.3-0.1,0.3-0.2 C597.2,200.8,597.2,200.7,597.1,200.7z M603.8,209.4l1.7-3.6l1.6-3.3l1.2,3.5l1.4,3.9l1-0.1l-3-8.3c0-0.1-0.1-0.1-0.1-0.1l-1,0 l0.1,0.3c0.1,0.2,0.1,0.4,0,0.5l-3.3,6.7c-1.2-0.2-4-0.4-4.9-0.5l5.3-7l-0.1-0.3l-4.5-0.2c-1,0-1.1-0.1-1.1-0.1 c-0.1,0-0.1,0.1-0.1,0.1l-0.1,0.5c0,0.1,0,0.1,0.1,0.1c0,0,0.3-0.3,0.8-0.3l3.9,0.2l-5.4,7.2c0,0,0,0.1,0,0.1 c0,0.1,0,0.1,0.1,0.1C598,208.7,602.5,209.1,603.8,209.4z M608.6,205.9l-3.5-0.2l0,0.4l3.5,0.2L608.6,205.9z M589.3,215 c1.1,0.1,1.9-0.6,1.9-1.7c0-1-0.7-1.6-1.7-1.7c-0.3,0-0.4,0-0.6,0c-0.1,0-0.2,0-0.3,0c-0.1,0-0.3,0-0.4-0.1c-0.1,0-0.1,0-0.2,0 c-0.1,0-0.1,0-0.1,0.1c0,0,0,0.1,0.1,0.1c0.3,0,0.2,0.1,0.2,0.3l-0.1,2.9l0.4,0C588.8,214.9,589.2,215,589.3,215 M590.7,213.4 c0,0.9-0.4,1.5-1.4,1.5c-0.2,0-0.4,0-0.6-0.1c-0.1,0-0.1,0-0.1-0.2l0.1-2.6c0-0.1,0.1-0.2,0.2-0.2l0.4,0 C590.6,211.8,590.8,212.6,590.7,213.4z M592.9,212c0.1,0,0.2,0,0.2-0.1s0-0.1-0.1-0.1c-0.1,0-0.3,0-0.4,0c-0.1,0-0.3,0-0.5,0 c-0.1,0-0.1,0-0.1,0.1c0,0.1,0.1,0.1,0.2,0.1c0.1,0,0.1,0.1,0.1,0.2l-0.1,2.9l0.4,0l0.1-2.9C592.7,212.1,592.8,212,592.9,212 M598,215.4L598,215.4C598,215.4,598,215.4,598,215.4c-0.3-0.3-0.4-0.6-0.6-0.9l-0.7-1.2c0.4-0.1,0.8-0.6,0.9-1.2 c0-0.6-0.5-1-1-1c-0.3,0-0.5,0-0.8,0c-0.2,0-0.4,0-0.5-0.1c-0.1,0-0.2,0-0.3,0c-0.1,0-0.1,0-0.1,0.1c0,0.1,0,0.1,0.2,0.1 c0.3,0,0.3,0.1,0.3,0.4l-0.2,3.7l0.5,0l0.1-1.8l0.2,0c0.2,0,0.3,0,0.4,0l0.7,1.3l0.2,0.4c0.1,0.2,0.3,0.3,0.5,0.3 C597.8,215.5,598,215.5,598,215.4 M597.1,212.2c0,0.5-0.2,1.1-1.1,1.1c-0.1,0-0.2,0-0.2,0l0.1-1.8c0-0.1,0.1-0.2,0.2-0.2l0.3,0 C596.9,211.3,597.1,211.7,597.1,212.2z M600.1,215.5c1,0,1.8-0.6,1.8-1.6c0.1-1.1-0.8-1.7-1.7-1.8c-0.9,0-1.8,0.6-1.8,1.6 C598.4,214.7,599.1,215.5,600.1,215.5 M601.5,213.9c0,0.9-0.4,1.5-1.3,1.5c-0.8,0-1.2-0.7-1.2-1.6c0-1,0.6-1.5,1.3-1.5 C600.9,212.3,601.5,212.8,601.5,213.9z M606.8,212.6c0.1,0,0.1,0,0.1-0.1c0-0.1-0.1-0.1-0.1-0.1c-0.1,0-0.5,0-0.6,0 c-0.1,0-0.2,0-0.2,0.1l-1.2,2.6l-1.2-2.7c-0.1-0.1-0.1-0.1-0.2-0.1c-0.1,0-0.4,0-0.6-0.1c0,0-0.1,0-0.1,0.1c0,0,0,0.1,0.1,0.1 c0.3,0,0.3,0.1,0.2,0.3c0,0.1,0-0.4-0.4,2.9l0.4,0l0.3-2.7l1.1,2.6l0.2,0l1.2-2.5l0.2,2.7l0.5,0c0,0-0.2-2.5-0.2-2.8 C606.5,212.7,606.5,212.6,606.8,212.6 M610,216l0.5,0l-1.2-3.3c0,0-0.1-0.1-0.1-0.1l-0.4,0l0.1,0.2c0,0.1,0,0.1,0,0.2l-1.4,2.9 l0.4,0l0.6-1.3l1.2,0.1L610,216 M609.4,214.4l-1-0.1l0.6-1.3L609.4,214.4z M560.1,209.5c0.2,0,0.3,0,0.3-0.1 c0-0.1,0-0.1-0.1-0.1c-0.2,0-0.3,0-0.4,0c-0.1,0-0.3,0-0.5,0c-0.1,0-0.1,0-0.1,0.1c0,0,0,0,0.3,0.1c0.1,0,0.1,0.2,0.1,0.3 l0,0.1c0,0.6-0.1,1.2-0.1,1.9c-0.1,0.9-0.5,1.5-1.3,1.5c-0.7,0-1.1-0.6-1.1-1.6c0-0.7,0-2,0-2c0-0.1,0-0.3,0.2-0.3 c0.2,0,0.3,0,0.3-0.1c0-0.1,0-0.1-0.1-0.1c-0.2,0-0.4,0-0.5,0c-0.1,0-0.4,0-0.6,0c-0.1,0-0.1,0-0.1,0.1c0,0,0,0,0.3,0.1 c0.1,0,0.1,0.2,0.1,0.3c0,0,0,0.1,0,0.3c0,0.5-0.1,1.6,0,1.9c0.1,0.6,0.3,1.6,1.5,1.6c1.2,0.1,1.5-1,1.5-1.5 c0.1-0.7,0.2-2.1,0.2-2.2C560,209.7,560,209.6,560.1,209.5 M564.1,210.5c0.1,0,0.1,0,0.1-0.1c0-0.1,0-0.1-0.1-0.1 c-0.1,0-0.3,0-0.4,0c-0.1,0-0.4-0.1-0.4-0.1c-0.1,0-0.1,0-0.1,0.1c0,0,0,0.1,0.1,0.1c0.3,0,0.2,0.1,0.2,0.3l-0.1,2.3l-1.8-2.8 c-0.2,0-0.4,0-0.6-0.1c-0.1,0-0.1,0-0.1,0.1c0,0,0,0.1,0.1,0.1c0.3,0,0.2,0.1,0.2,0.3l-0.1,2.9l0.2-0.1l0.1-2.7l1.9,2.9l0.3,0 l0.1-2.9C563.8,210.6,563.8,210.5,564.1,210.5 M565.7,210.6c0.1,0,0.2,0,0.2-0.1c0-0.1,0-0.1-0.1-0.1c-0.1,0-0.3,0-0.4,0 c-0.1,0-0.3,0-0.5,0c-0.1,0-0.1,0-0.1,0.1c0,0.1,0.1,0.1,0.2,0.1c0.1,0,0.1,0.1,0.1,0.2l-0.1,2.9l0.4,0l0.1-2.9 C565.6,210.8,565.6,210.7,565.7,210.6 M569.5,210.8c0.1,0,0.2,0,0.2-0.1c0,0,0-0.1-0.1-0.1c-0.1,0-0.2,0-0.3,0 c-0.1,0-0.3,0-0.4,0c-0.1,0-0.1,0-0.1,0.1c0,0,0,0.1,0.2,0.1c0.1,0,0.1,0.1,0.1,0.2l-1.1,2.5l-0.9-2.7c0-0.1-0.1-0.2-0.2-0.2 c-0.1,0-0.4,0-0.5-0.1c-0.1,0-0.1,0-0.1,0.1c0,0,0,0.1,0.1,0.1c0.1,0,0.1,0,0.1,0.1c0,0.1,0.1,0.2,0.1,0.2l1,3l0.3,0l1.3-2.9 C569.4,210.9,569.4,210.8,569.5,210.8 M571.9,214c0-0.2,0-0.3,0-0.4c0-0.1,0-0.1-0.1-0.1c-0.1,0-0.1,0.4-0.2,0.4 c-0.1,0-0.6,0-0.7,0c-0.2,0-0.3,0-0.4,0c-0.1,0-0.1,0-0.1-0.2l0.1-1.2l0.6,0c0.1,0,0.2,0,0.3,0.1c0,0.2,0,0.3,0.1,0.3 c0.1,0,0.1,0,0.1-0.1c0-0.1,0-0.2,0-0.3c0-0.1,0-0.2,0-0.3c0-0.1,0-0.1-0.1-0.1c-0.1,0-0.1,0-0.1,0.3c0,0.1-0.2,0.1-0.3,0.1 l-0.6,0l0.1-1.4c0,0,0-0.1,0.1,0l0.6,0c0,0,0.3,0,0.3,0.1c0.1,0.1,0.1,0.4,0.2,0.4c0,0,0.1,0,0.1-0.1c0-0.1,0-0.3,0-0.4 c0-0.1,0-0.1-0.2-0.1c-0.4,0-0.8,0-1.3,0c-0.1,0-0.3,0-0.4,0c-0.1,0-0.1,0-0.2,0c-0.1,0-0.1,0-0.1,0.1c0,0,0,0.1,0.1,0.1 c0.3,0,0.3,0.1,0.2,0.3L570,214l0.4,0c0.5,0,0.9,0.1,1.3,0.1C571.8,214.1,571.9,214.1,571.9,214 M575.1,214.3 c0.1,0,0.2,0,0.2,0c0,0,0-0.1-0.1-0.1c-0.1-0.1-0.2-0.2-0.2-0.2c-0.3-0.5-0.1-0.2-0.8-1.4c0.3-0.1,0.7-0.4,0.7-0.9 c0-0.5-0.4-0.8-0.9-0.8c-0.2,0-0.4,0-0.6,0c-0.1,0-0.4,0-0.5-0.1c-0.1,0-0.1,0-0.2,0c-0.1,0-0.1,0-0.1,0.1c0,0,0,0.1,0.1,0.1 c0.3,0,0.3,0.1,0.2,0.3l-0.1,2.9l0.4,0l0.1-1.4l0.1,0c0.1,0,0.1,0,0.2,0l0.6,1l0.2,0.3C574.8,214.2,574.9,214.3,575.1,214.3 M574.5,211.7c0,0.4-0.1,0.9-0.9,0.8c-0.1,0-0.1,0-0.2,0l0.1-1.4c0-0.1,0-0.1,0.2-0.1l0.2,0 C574.4,211.1,574.6,211.3,574.5,211.7z M576.7,214.4c0.6,0,1.1-0.3,1.1-0.9c0-0.3-0.1-0.5-0.2-0.7c-0.2-0.2-0.4-0.3-0.6-0.4 c-0.2-0.1-0.4-0.2-0.6-0.4c-0.1-0.1-0.2-0.2-0.2-0.3c0-0.4,0.4-0.6,0.7-0.6c0.4,0,0.5,0.2,0.5,0.3c0,0.2,0,0.3,0.1,0.3 c0.1,0,0.1,0,0.1-0.1c0-0.1,0-0.3,0-0.5c-0.3-0.1-0.5-0.1-0.7-0.1c-0.6,0-1,0.3-1.1,0.8c0,0.4,0.1,0.6,0.3,0.8 c0.2,0.2,0.5,0.4,0.8,0.6c0.2,0.1,0.4,0.3,0.4,0.5c0,0.4-0.4,0.6-0.8,0.6c-0.2,0-0.6-0.1-0.8-0.3l-0.1,0.2 C576.2,214.3,576.5,214.4,576.7,214.4 M579.5,211.3c0.1,0,0.2,0,0.2-0.1c0-0.1,0-0.1-0.1-0.1c-0.1,0-0.3,0-0.4,0 c-0.1,0-0.3,0-0.5,0c-0.1,0-0.1,0-0.1,0.1c0,0.1,0.1,0.1,0.2,0.1c0.1,0,0.1,0.1,0.1,0.2l-0.1,2.9l0.4,0l0.1-2.9 C579.4,211.4,579.4,211.3,579.5,211.3 M583.1,211.6c0.1-0.1,0.1-0.1,0.1-0.2c0,0,0-0.1-0.1-0.1c-0.1,0-0.3,0-0.4,0 c-0.6,0-1.3,0-1.9-0.1c-0.2,0-0.3,0-0.5,0c-0.1,0-0.2,0-0.2,0.1c0,0.2,0,0.3,0,0.4c0,0.1,0,0.1,0.1,0.1l0,0 c0.1,0,0.1-0.2,0.1-0.3c0-0.1,0.1-0.2,0.3-0.2c0,0,0.5,0,0.8,0l-0.2,3.1l0.4,0l0.1-3.1l1,0.1L583.1,211.6 M584.9,211.2 l-0.6-0.4c-0.2-0.1-0.2-0.2-0.2-0.2c0-0.1,0.1-0.2,0.2-0.2c0.1,0,0.1,0,0.2,0.1l0.7,0.7L584.9,211.2 M585.1,213.2l-1-0.1 l0.6-1.3L585.1,213.2z M586.1,214.7l-1.2-3.3c0,0,0-0.1-0.1-0.1l-0.4,0l0.1,0.2c0,0.1,0,0.1,0,0.2l-1.4,2.9l0.4,0l0.6-1.3 l1.2,0.1l0.5,1.4L586.1,214.7z\"></path><path fill=\"#FFFFFF\" d=\"M538.9,195.8c0,0.4-0.1,1.4-0.1,1.8c0,0.2,0,0.3,0.1,0.4c0,0,0.1,0.1,0.1,0.1c0,0,0.1,0,0.1,0 c0,0,0.1,0,0.1,0c0.1,0,0.2,0,0.4-0.2c0.2-0.2,0.8-0.8,1-1c0.1-0.1,0-0.1-0.1-0.1c-0.4,0-0.9,0.4-1.3,0.7 C539.3,197.1,539.3,196.1,538.9,195.8C538.9,195.7,538.9,195.7,538.9,195.8 M538.5,195.7c-0.3,0.4-0.4,1.3-0.5,1.7 c-0.3-0.3-0.8-0.7-1.2-0.8c-0.1,0-0.1,0-0.1,0.1c0.2,0.2,0.7,0.8,0.9,1.1c0.1,0.1,0.2,0.2,0.3,0.2c0.1,0,0.1,0,0.1,0 c0,0,0.1,0,0.1,0c0,0,0.1,0,0.1-0.1c0.1-0.1,0.2-0.2,0.2-0.4C538.5,197.1,538.6,196.1,538.5,195.7 C538.6,195.6,538.5,195.6,538.5,195.7z M534.3,204.5c0-0.3-0.2-0.6-0.5-0.7c0,0-0.1,0-0.1,0c-1.4-0.2-2.7-0.6-3.9-1.4 c0,0-0.1,0,0,0c0.1,0.1,0.3,0.3,0.6,0.6c0.4,0.3,1.6,1,2.7,1.2C533.5,204.4,533.9,204.4,534.3,204.5z M535.3,206.1 c0-0.1,0-0.3,0-0.4c0-0.1-0.1-0.2-0.2-0.3c-0.2-0.1-0.3-0.2-0.5-0.2c-1.4-0.1-2.7-0.7-3.9-1.6c-0.1,0-0.1,0,0,0 c0.2,0.3,0.4,0.6,0.7,0.8c0.8,0.7,1.7,1.1,2.7,1.3c0.2,0.1,0.4,0.1,0.6,0.1c0,0,0.1,0,0.1,0c0,0,0,0,0,0.1c0,0.2,0,0.4-0.1,0.6 c0,1,0.1,2,0.6,2.9c0.1,0.3,0.4,0.6,0.6,0.8c0,0.1,0.1,0,0.1,0C535.2,208.9,535,207.5,535.3,206.1z M536.4,207.3 c0,0,0-0.1,0-0.1c0-0.3-0.2-0.6-0.5-0.6l0,0c-0.1,0.4-0.1,0.8-0.1,1.2c0,1.1,0.3,2.4,0.5,2.9c0.2,0.4,0.3,0.6,0.4,0.7 c0,0,0.1,0,0.1,0C536.3,209.9,536.2,208.6,536.4,207.3z M537.7,207.6c0,0,0-0.2,0-0.2c0.1-0.5,0-1-0.3-1.4 c-0.5-0.6-1.3-0.7-1.7-1.1c-0.3-0.4-0.1-1.3-0.6-1.9c-0.3-0.4-0.8-0.6-1.3-0.6l-0.1,0c-1.5-0.1-2.8-0.4-4.2-1.1 c0,0-0.1,0-0.1,0.1c0.1,0.2,0.4,0.4,0.8,0.7c1.5,0.7,3.5,1,3.5,1c0.9,0.1,1.2,0.9,1.4,1.5c0.1,0.2,0.1,0.4,0.3,0.6 c0.1,0.1,0.3,0.3,0.5,0.4c0.6,0.3,1.4,0.9,1.2,1.7c0,0-0.4,2-0.1,3.5c0.1,0.5,0.3,0.8,0.4,1c0,0.1,0.1,0,0.1,0 C537.3,210.4,537.4,209,537.7,207.6z M533.9,201.5c-0.2,0-0.6,0.1-0.9,0.2c0,0-0.1,0.1,0,0.1c0.3,0.1,1,0.3,1.3,0.2 c0.4-0.1,0.3-0.7,0.1-0.9c-0.7-1.2-1.1-2.5-1.1-4c0-0.1,0-0.1-0.1,0c-0.1,0.3-0.2,0.6-0.2,1C533,199.3,533.3,200.5,533.9,201.5 z M534.2,199.4c0.2,0.4,0.4,0.7,0.6,1.1c0.3-0.2,0.4-0.5,0.3-0.8c0,0,0-0.1-0.1-0.1c-0.7-1.2-1.1-2.5-1.3-3.8c0,0,0,0-0.1,0 c-0.1,0.1-0.1,0.4-0.1,0.8C533.6,197,533.8,198.4,534.2,199.4z M535.6,199.2c0.5,0.7,0.1,1.5-0.4,2c-0.5,0.7,0,1.6,0,1.1 c0-0.8,1-1.1,1.1-2c0.1-0.5,0-0.9-0.3-1.4l-0.1-0.1c-0.8-1.2-1.4-2.4-1.7-3.9c0,0-0.1-0.1-0.1,0c-0.1,0.2-0.1,0.6,0,1.1 C534.5,197.5,535.6,199.2,535.6,199.2z M542.5,201.4c-0.2,0.2-0.3,0.8,0,1c0.2,0.1,1,0.1,1.3-0.1c0.1,0,0.1-0.1,0-0.1 c-0.3-0.1-0.7-0.3-0.9-0.3c0.7-0.9,1.2-2.1,1.2-3.3c0-0.3-0.1-0.7-0.1-1c0-0.1,0-0.1-0.1,0C543.9,199,543.4,200.3,542.5,201.4z M542,200c-0.2,0.3-0.1,0.6,0.2,0.8c0.3-0.3,0.5-0.7,0.7-1c0.5-0.9,0.9-2.3,0.9-2.7c0-0.4,0.1-0.7,0-0.8c0,0,0,0-0.1,0 c-0.3,1.4-0.9,2.6-1.7,3.7L542,200z M541.6,202.6c-0.1,0.5,0.6-0.3,0.1-1.1c-0.4-0.6-0.7-1.4-0.2-2c0,0,1.2-1.6,1.7-3.1 c0.2-0.5,0.1-0.9,0.1-1.1c0-0.1-0.1,0-0.1,0c-0.5,1.4-1.2,2.6-2.1,3.7c0,0-0.1,0.1-0.1,0.1c-0.3,0.4-0.5,0.9-0.4,1.3 C540.7,201.3,541.7,201.8,541.6,202.6z M537.7,215.8c-5.3-0.3-9.4-5.7-9.1-12.1c0.3-6.4,4.9-11.4,10.2-11.2 c5.3,0.3,9.4,5.7,9.1,12.1C547.6,211.1,543,216.1,537.7,215.8z M538.9,192.2c-5.5-0.3-10.2,4.9-10.6,11.5 c-0.3,6.6,3.9,12.2,9.4,12.5c5.5,0.3,10.2-4.9,10.6-11.5C548.6,198.1,544.4,192.5,538.9,192.2z M536.4,204 c-0.3,0-0.5-0.2-0.5-0.3c-0.2,0.6,0.2,0.9,0.6,1C536.4,204.5,536.4,204.3,536.4,204L536.4,204z M536.4,203.6c0-0.2,0-0.4,0-0.6 c-0.4-0.1-0.7-0.4-0.7-0.5C535.5,202.9,535.7,203.5,536.4,203.6z M540.3,204.3c0,0.2-0.1,0.4-0.2,0.6c0.5-0.1,0.8-0.3,0.7-0.9 C540.7,204,540.5,204.2,540.3,204.3L540.3,204.3z M541,202.8c-0.1,0.1-0.3,0.4-0.8,0.4c0,0.2,0,0.4,0,0.6 C541,203.7,541.3,203.2,541,202.8z M538.9,201.6c1.4,0.9,1.9,0.2,1.9,0.2s0.5,0.6-0.4,0.8c-0.9,0.2-1.5-0.4-1.7-0.5 C538.5,201.9,538.5,201.3,538.9,201.6z M539.7,200.9c0.5,0.4,0.7,0.4,0.7,0.4s0,0.6-0.8,0.2c-0.3-0.1-1.1-0.6-1-0.8 C538.9,200.4,539.3,200.7,539.7,200.9z M537.9,201.6c-1.4,0.7-1.9,0-1.9,0s-0.6,0.6,0.3,0.9c0.9,0.3,1.6-0.2,1.7-0.3 C538.4,201.9,538.5,201.3,537.9,201.6z M537.2,200.8c-0.5,0.3-0.7,0.3-0.7,0.3s0,0.6,0.8,0.3c0.3-0.1,1.2-0.5,1-0.7 C538.1,200.3,537.7,200.6,537.2,200.8z M539.9,204c0-0.2,0-0.7,0-0.9c-0.7,0-1.3-0.6-1.5-0.9c-0.2,0.3-0.9,0.8-1.6,0.7 c0,0.2-0.1,0.7-0.1,0.9c-0.1,0.4,0.1,0.9,0.3,1.2c0.1,0.2,0.3,0.3,0.5,0.5c0,0,0,0,0.1,0l0.1,0c0.1,0,0.1,0.1,0.1,0.1 c0.1,0.1,0.4,0.1,0.4,0.1c0,0,0.2,0,0.4-0.1c0.1,0,0.1-0.1,0.1-0.1l0.1,0c0,0,0,0,0.1,0c0.2-0.1,0.4-0.2,0.6-0.4 C539.8,204.9,540,204.4,539.9,204z M539.1,203.8c-0.4,0-0.4-0.1-0.4-0.1s0.1-0.3,0.5-0.3c0.4,0,0.5,0.3,0.5,0.3 C539.6,203.7,539.6,203.8,539.1,203.8z M538.3,205.2c-0.3,0-0.6-0.3-0.6-0.4c0-0.1,1.1,0,1.1,0.1 C538.9,204.9,538.6,205.2,538.3,205.2z M537.6,203.7c-0.5,0-0.5-0.1-0.5-0.2c0,0,0.1-0.3,0.5-0.2c0.4,0,0.4,0.3,0.4,0.3 S537.9,203.7,537.6,203.7z M538.3,204.2c0.2,0,0.3,0.1,0.3,0.1s-0.1,0.1-0.3,0.1c-0.2,0-0.3-0.1-0.3-0.1 C538,204.3,538.2,204.2,538.3,204.2z M543.6,204.8c1.1-0.2,2.4-0.7,2.8-1c0.4-0.2,0.6-0.4,0.7-0.5c0,0,0-0.1,0,0 c-1.3,0.6-2.6,0.9-4,1c0,0-0.1,0-0.1,0c-0.3,0-0.6,0.3-0.5,0.7C542.7,204.9,543.1,204.8,543.6,204.8z M540.3,210.4 C540.2,210.5,540.3,210.5,540.3,210.4c0.3-0.2,0.5-0.5,0.7-0.7c0.5-0.9,0.8-1.9,0.9-2.8c0-0.2,0-0.4,0-0.6c0,0,0-0.1,0-0.1 c0,0,0,0,0.1,0c0.2,0,0.4,0,0.6-0.1c1-0.1,2-0.5,2.8-1.1c0.3-0.2,0.5-0.5,0.7-0.7c0-0.1,0-0.1,0,0c-1.3,0.8-2.6,1.2-4,1.2 c-0.2,0-0.4,0.1-0.5,0.2c-0.1,0.1-0.2,0.2-0.2,0.3c-0.1,0.1-0.1,0.3-0.1,0.4C541.3,207.8,541,209.1,540.3,210.4z M539.3,211.4 C539.2,211.4,539.3,211.5,539.3,211.4c0.2-0.1,0.3-0.3,0.5-0.7c0.2-0.4,0.7-1.7,0.8-2.8c0-0.4,0-0.8,0-1.2h0 c-0.3,0-0.6,0.3-0.6,0.6c0,0,0,0.1,0,0.1C540,208.8,539.8,210.1,539.3,211.4z M538.4,211.9C538.4,211.9,538.4,212,538.4,211.9 c0.2-0.1,0.4-0.4,0.6-0.9c0.4-1.5,0.3-3.5,0.3-3.5c-0.1-0.8,0.7-1.3,1.4-1.6c0.2-0.1,0.4-0.2,0.5-0.4c0.1-0.1,0.2-0.3,0.3-0.6 c0.2-0.7,0.6-1.4,1.5-1.4c0,0,2,0,3.6-0.6c0.5-0.2,0.8-0.4,0.9-0.6c0-0.1,0-0.1-0.1-0.1c-1.4,0.5-2.8,0.7-4.3,0.7l-0.1,0 c-0.5,0-1,0.2-1.3,0.5c-0.5,0.5-0.5,1.5-0.8,1.8c-0.4,0.4-1.2,0.4-1.8,0.9c-0.3,0.3-0.5,0.8-0.5,1.3c0,0,0,0.2,0,0.2 C538.8,209.1,538.8,210.5,538.4,211.9z M544.4,211.4C544.4,211.4,544.3,211.4,544.4,211.4c-0.1,0-0.2,0-0.2,0 c-0.2,0-0.5-0.1-0.7-0.1c0.1-0.1,0.1-0.4-0.1-0.6c-0.2-0.2-0.5-0.1-0.6,0.1c-0.1,0.1-0.1,0.2-0.2,0.2c0,0-0.1,0.1-0.2,0.2 c0,0-0.1,0-0.1,0.1c0,0,0,0.1,0,0.1c0,0,0.1,0,0.1,0c0.1-0.1,0.1-0.1,0.2,0l1.1,1.1l0.2-0.2l-0.5-0.5l0,0c0,0,0-0.1,0.1-0.1 l0.6,0.1c0.2,0,0.3,0.1,0.5-0.1C544.3,211.5,544.4,211.4,544.4,211.4z M543.1,210.9c0.1,0.1,0.3,0.3,0,0.6c0,0,0,0-0.1,0.1 l-0.5-0.5c0,0,0,0,0-0.1l0.1-0.1C542.9,210.7,543,210.8,543.1,210.9z M530,207.6c0-0.1-0.1-0.3,0-0.5l0.2,0 c-0.1,0.2-0.1,0.4,0,0.5c0.1,0.2,0.2,0.3,0.4,0.3c0.1,0,0.1-0.1,0.2-0.2c0-0.2,0.1-0.4,0.1-0.5c0.1-0.1,0.1-0.2,0.3-0.3 c0.3-0.1,0.5,0.1,0.6,0.4c0,0.1,0,0.2,0.1,0.4c-0.1,0-0.2,0.1-0.3,0.1c0,0-0.1,0-0.1,0c0,0,0-0.1,0.1-0.1c0,0,0.1-0.1,0-0.3 c-0.1-0.2-0.2-0.3-0.4-0.3c-0.1,0-0.2,0.3-0.2,0.4c0,0.1,0,0.3-0.1,0.4c-0.1,0.1-0.2,0.2-0.3,0.2 C530.4,208.1,530.1,207.9,530,207.6z M532.4,209.2C532.4,209.2,532.4,209.2,532.4,209.2l-0.1-0.1l-0.2-0.5l-1.4,0.6l-0.1-0.3 l1.4-0.6c-0.1-0.1-0.2-0.4-0.2-0.4c-0.1-0.1-0.1-0.1-0.2-0.1c0,0-0.1,0-0.1,0c0-0.1,0-0.1,0-0.1c0.1,0,0.1-0.1,0.2-0.1 c0.1,0,0.1,0,0.1,0.1c0,0.1,0.1,0.1,0.1,0.2c0.1,0.3,0.3,0.6,0.4,0.9c0,0.1,0.1,0.1,0.1,0.2 C532.5,209.1,532.5,209.1,532.4,209.2C532.5,209.2,532.5,209.2,532.4,209.2C532.4,209.2,532.4,209.2,532.4,209.2z M533.4,210.8 c0,0-0.1,0-0.1,0l-1.6,0.4l-0.1-0.1c0.4-0.6,0.6-1,0.9-1.4c0,0,0-0.1,0-0.1c0-0.1,0-0.1,0-0.1c0,0,0.1,0,0.1,0 c0,0.1,0.1,0.2,0.1,0.2c0,0.1,0,0.1,0,0.2l-0.8,1.2l1.3-0.3c0.1,0-0.1-0.2,0-0.2c0,0,0.1,0,0.1,0c0,0.1,0.1,0.1,0.1,0.2 c0,0,0.1,0.1,0.1,0.1c0,0,0,0.1,0,0.1C533.5,210.9,533.5,210.9,533.4,210.8z M534.4,212.7c0.3-0.4,0.2-0.9-0.2-1.3 c-0.1-0.1-0.2-0.1-0.2-0.2c0,0-0.1-0.1-0.1-0.1c0,0-0.1-0.1-0.1-0.1c0,0,0-0.1-0.1-0.1c0,0-0.1,0-0.1,0c0,0,0,0.1,0,0.1 c0.1,0.1,0.1,0.1,0,0.2l-1,1.2c0.1,0.1,0.2,0.2,0.3,0.3c0,0.1,0.1,0.1,0.1,0.1C533.5,213.2,534,213.2,534.4,212.7z M534.1,212.6c-0.3,0.3-0.6,0.5-1,0.2c-0.1-0.1-0.2-0.1-0.2-0.2c0,0,0,0,0-0.1l0.9-1c0,0,0.1,0,0.1,0l0.2,0.1 C534.5,211.9,534.4,212.3,534.1,212.6z M535.4,212.5C535.3,212.5,535.3,212.5,535.4,212.5l-0.8,1.4l-0.3-0.1l0.7-1.3 c0-0.1,0-0.1,0-0.1c0,0-0.1,0-0.1-0.1c0,0,0.1,0,0.1,0c0.1,0,0.2,0.1,0.2,0.1c0,0,0.1,0.1,0.2,0.1c0,0,0.1,0.1,0,0.1 C535.5,212.5,535.5,212.5,535.4,212.5z M537.3,213.1c0,0-0.1,0-0.1,0.1l-1,1.3l-0.2,0c-0.1-0.7-0.1-1.1-0.2-1.7 c0,0,0-0.1,0-0.1c-0.1,0-0.1-0.1-0.1-0.1c0,0,0-0.1,0.1,0c0.1,0,0.2,0.1,0.2,0.1c0.1,0,0.1,0.1,0.1,0.2l0.1,1.4l0.8-1.1 c0.1-0.1-0.2-0.1-0.1-0.2c0,0,0,0,0.1,0c0.1,0,0.3,0.1,0.4,0.1c0.1,0,0.1,0,0.1,0.1C537.4,213.1,537.4,213.1,537.3,213.1z M539.6,212.9c-0.1,0-0.1,0.1-0.1,0.2c0,0.2,0.3,1.4,0.3,1.4l-0.3,0.1l-0.3-1.3l-0.4,1.3l-0.1,0l-0.7-1.2l0,1.3l-0.3,0.1l0-1.5 c0-0.1,0-0.2-0.1-0.2c-0.1,0-0.1,0-0.1-0.1c0-0.1,0-0.1,0.1-0.1c0.1,0,0.3,0,0.3,0c0.1,0,0.1,0,0.1,0.1l0.7,1.2l0.4-1.4 c0-0.1,0.1-0.1,0.1-0.1c0.1,0,0.2-0.1,0.3-0.1C539.6,212.7,539.7,212.7,539.6,212.9C539.7,212.8,539.7,212.9,539.6,212.9z M542.1,211.5c0,0.1,0,0.1,0,0.2l0.3,1.6l-0.2,0.1c-0.5-0.4-0.9-0.6-1.3-1c0,0,0,0-0.1,0c-0.1,0-0.1,0-0.1,0c0,0,0-0.1,0-0.1 c0.1,0,0.2-0.1,0.2-0.1c0.1,0,0.1,0,0.2,0l1.1,0.8l-0.2-1.3c0-0.1-0.2,0.1-0.2,0c0,0,0-0.1,0-0.1c0.1-0.1,0.2-0.2,0.3-0.3 c0,0,0.1,0,0.1,0C542.2,211.4,542.2,211.5,542.1,211.5z M545,209.7c-0.2-0.2-0.4-0.1-0.6,0.1c0-0.2,0-0.3-0.2-0.4 c-0.2-0.1-0.4,0-0.6,0.2c-0.1,0.1-0.1,0.2-0.2,0.2c0,0.1-0.1,0.1-0.1,0.2c0,0-0.1,0.1-0.1,0.1c0,0,0,0.1,0,0.1c0,0,0,0,0.1-0.1 c0.1-0.1,0.1-0.1,0.1,0l0.1,0l1.2,0.8c0,0,0.1-0.2,0.1-0.2c0.1-0.1,0.1-0.1,0.2-0.2C545.2,210.3,545.2,209.9,545,209.7z M544,209.7c0.1,0.1,0.2,0.2,0.1,0.4l-0.1,0.1l-0.5-0.3c0,0,0,0,0-0.1l0,0C543.7,209.6,543.9,209.5,544,209.7z M544.8,210 c0.2,0.1,0.2,0.3,0.1,0.5c0,0.1-0.1,0.1-0.2,0.2c0,0,0,0,0,0l-0.6-0.4l0-0.1C544.4,209.9,544.6,209.9,544.8,210z M544.3,208.5 C544.3,208.6,544.3,208.6,544.3,208.5l1.4,0.8l-0.1,0.3l-1.3-0.7c-0.1,0-0.1,0-0.1,0c0,0,0,0.1-0.1,0.1c0,0,0-0.1,0-0.1 c0-0.1,0.1-0.2,0.1-0.2c0-0.1,0.1-0.1,0.1-0.2c0-0.1,0.1-0.1,0.1,0C544.3,208.4,544.3,208.4,544.3,208.5z M546.1,208.3 c0,0.1-0.1,0.3-0.3,0.4l-0.1-0.1c0.1-0.1,0.3-0.2,0.3-0.3c0.1-0.2,0-0.4-0.1-0.5c-0.1,0-0.2,0-0.3,0.1 c-0.1,0.1-0.2,0.3-0.4,0.3c-0.1,0.1-0.3,0.1-0.4,0c-0.2-0.1-0.3-0.4-0.2-0.7c0-0.1,0.1-0.2,0.2-0.4c0.1,0,0.2,0.1,0.3,0.1 c0,0,0.1,0,0.1,0.1c0,0,0,0.1-0.2,0c-0.1,0-0.1,0-0.2,0.2c-0.1,0.2,0,0.4,0.1,0.4c0.1,0,0.3-0.2,0.4-0.2 c0.1-0.1,0.2-0.2,0.3-0.2c0.1-0.1,0.2-0.1,0.4,0C546.2,207.7,546.2,208,546.1,208.3z\"></path><g><g><rect x=\"531.7\" y=\"235.6\" transform=\"matrix(0.9993 3.869810e-02 -3.869810e-02 0.9993 9.6163 -21.9521)\" fill=\"#B7BFC7\" width=\"80.3\" height=\"3.6\"></rect></g><g><rect x=\"531.5\" y=\"241.6\" transform=\"matrix(0.9993 3.869810e-02 -3.869810e-02 0.9993 9.8466 -21.9388)\" fill=\"#DCE4E8\" width=\"80.3\" height=\"3.6\"></rect></g><g><rect x=\"531.2\" y=\"247.7\" transform=\"matrix(0.9993 3.869810e-02 -3.869810e-02 0.9993 10.0819 -21.9251)\" fill=\"#DCE4E8\" width=\"80.3\" height=\"3.6\"></rect></g><g><rect x=\"531\" y=\"253.7\" transform=\"matrix(0.9993 3.869810e-02 -3.869810e-02 0.9993 10.3145 -21.9114)\" fill=\"#DCE4E8\" width=\"80.3\" height=\"3.6\"></rect></g></g><g><g><rect x=\"530.1\" y=\"265\" transform=\"matrix(0.9993 3.869810e-02 -3.869810e-02 0.9993 10.7539 -21.8774)\" fill=\"#DCE4E8\" width=\"80.7\" height=\"3.6\"></rect></g><g><rect x=\"529.9\" y=\"271.1\" transform=\"matrix(0.9993 3.869810e-02 -3.869810e-02 0.9993 10.9892 -21.8642)\" fill=\"#DCE4E8\" width=\"80.7\" height=\"3.6\"></rect></g><g><rect x=\"529.7\" y=\"277.1\" transform=\"matrix(0.9993 3.869810e-02 -3.869810e-02 0.9993 11.222 -21.8501)\" fill=\"#DCE4E8\" width=\"80.7\" height=\"3.6\"></rect></g></g></g><g id=\"wind\"><g><rect x=\"518.4\" y=\"231.8\" transform=\"matrix(-0.9986 5.369770e-02 -5.369770e-02 -0.9986 1163.8428 587.8218)\" fill=\"#BE3D2F\" width=\"111.2\" height=\"155.5\"></rect><rect x=\"519.3\" y=\"230.7\" transform=\"matrix(-0.9986 5.369770e-02 -5.369770e-02 -0.9986 1165.5166 585.5847)\" fill=\"#FFFFFF\" width=\"111.2\" height=\"155.5\"></rect></g><g><path fill=\"#515F84\" d=\"M575.3,254.6c6.4,1.1,11.5-2.8,15.3-7.5c0.9-1.1,3-3.2,2.3-4.8c-6.2,2.5-8.6,11.5-16.9,10.2 c-3.4-0.6-4.9-2.2-8.3,0c-2.6,1.7-2.8,2.2-5.2-0.1c-1-1-2.6-4-4-4.4c-2.6-0.7,0.3,3.3,1,4.4c2.6,3.8,4.5,5.1,8.4,2.7 C571.2,253.1,571.6,254,575.3,254.6z\"></path><path fill=\"#F4812C\" d=\"M560.4,274.4l-3.5,0.2l-2.6-7.5l-0.8-2.5l-0.5,2.6l-1.6,7.7l-3.5,0.2l-5.8-12.8l3.9-0.2l2.8,7.4l0.7,2 l1.9-9.7l3.9-0.2l3.2,9.4l0.4-2.1l1.9-7.6l3.8-0.2L560.4,274.4z M570.3,260.8l-3.8,0.2l0.7,13l3.8-0.2L570.3,260.8z M588.8,272.8l-0.7-13l-3.4,0.2l0.5,9.1l-7.6-8.7l-3.9,0.2l0.7,13l3.6-0.2l-0.5-9.3l7.7,8.9L588.8,272.8z M599.1,270 c1.8-0.1,3-0.7,3.5-2.1c0.4-0.8,0.6-1.6,0.5-2.6c-0.1-1.3-0.4-2.3-1-3c-0.6-0.6-1.7-0.9-3.4-0.8l-3.4,0.2l0.5,8.5L599.1,270 L599.1,270z M599.9,272.2l-7.7,0.4l-0.7-13l7.7-0.4c1-0.1,2,0,2.7,0.1c1.2,0.2,2.3,0.7,3.1,1.5c0.7,0.6,1.1,1.3,1.4,2 c0.2,0.7,0.4,1.5,0.4,2.1c0.1,1.7-0.3,3.2-1.2,4.5C604.5,271.1,602.6,272.1,599.9,272.2L599.9,272.2z M567.7,249.8l0.3,0 l0.6-0.2c0.3,0,0.6-0.2,0.8-0.3c0.2-0.2,0.4-0.4,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1l0-0.3c0-0.2-0.1-0.4-0.2-0.6 c-0.1-0.2-0.4-0.4-0.7-0.4c-0.3-0.2-0.8-0.1-1.4-0.1c-0.6,0.1-1,0.2-1.3,0.4c-0.4,0.2-0.5,0.4-0.6,0.6 c-0.2,0.3-0.2,0.5-0.2,0.6l0,0.6c0,0.2,0,0.4,0.1,0.6c0.1,0.2,0.3,0.4,0.6,0.5C566.9,249.7,567.3,249.8,567.7,249.8 L567.7,249.8z\"></path></g><g><g><g><rect x=\"580.2\" y=\"287.5\" transform=\"matrix(0.9986 -5.349828e-02 5.349828e-02 0.9986 -14.6284 32.4311)\" fill=\"#B7BFC7\" width=\"36.4\" height=\"3.8\"></rect></g><path fill=\"#DCE4E8\" d=\"M617.1,296.8l-36.4,1.9l-0.2-3.8l36.4-1.9L617.1,296.8z M617.3,299.3l-36.4,2l0.2,3.8l36.4-2 L617.3,299.3z M617.6,305.7l-36.4,1.9l0.2,3.8l36.4-1.9L617.6,305.7z\"></path></g><g><g><rect x=\"532.7\" y=\"320.1\" transform=\"matrix(0.9986 -5.349828e-02 5.349828e-02 0.9986 -16.4045 31.2535)\" fill=\"#DCE4E8\" width=\"85.7\" height=\"3.8\"></rect></g><g><rect x=\"533.1\" y=\"326.5\" transform=\"matrix(0.9986 -5.349828e-02 5.349828e-02 0.9986 -16.7455 31.2809)\" fill=\"#DCE4E8\" width=\"85.7\" height=\"3.8\"></rect></g><g><rect x=\"533.4\" y=\"332.9\" transform=\"matrix(0.9986 -5.349828e-02 5.349828e-02 0.9986 -17.0866 31.3079)\" fill=\"#DCE4E8\" width=\"85.7\" height=\"3.8\"></rect></g></g><g><g><rect x=\"535.4\" y=\"369.9\" transform=\"matrix(0.9986 -5.349828e-02 5.349828e-02 0.9986 -19.064 31.4671)\" fill=\"#DCE4E8\" width=\"85.7\" height=\"3.8\"></rect></g><g><rect x=\"535.8\" y=\"376.8\" transform=\"matrix(0.9986 -5.349828e-02 5.349828e-02 0.9986 -19.4462 30.9828)\" fill=\"#DCE4E8\" width=\"66.5\" height=\"3.8\"></rect></g></g><g><rect x=\"534.1\" y=\"345.8\" transform=\"matrix(0.9986 -5.349828e-02 5.349828e-02 0.9986 -17.7959 30.5938)\" fill=\"#B7BFC7\" width=\"56.9\" height=\"3.8\"></rect></g><path fill=\"#DCE4E8\" d=\"M591.4,354.5l-56.8,3l-0.2-3.8l56.8-3L591.4,354.5z M591.5,357l-56.8,3l0.2,3.8l56.8-3L591.5,357z\"></path><g><path fill=\"#DCE4E8\" d=\"M536.7,313.9l-4.5,0.2l-1.2-23l4.5-0.2L536.7,313.9z M541.9,290.6l-4.5,0.2l1.2,23l4.5-0.2 L541.9,290.6z M548.3,290.2l-4.5,0.2l1.2,23l4.5-0.2L548.3,290.2z M554.7,289.9l-4.5,0.2l1.2,23l4.5-0.2L554.7,289.9z M561,289.5l-4.5,0.2l1.2,23l4.5-0.2L561,289.5z M567.4,289.2l-4.5,0.2l1.2,23l4.5-0.2L567.4,289.2z M573.8,288.9l-4.5,0.2 l1.2,23l4.5-0.2L573.8,288.9z\"></path><path fill=\"#62C3ED\" d=\"M536.7,313.9l-4.5,0.2l-0.5-10.2l4.5-0.2L536.7,313.9z M542.5,301.4l-4.5,0.2l0.7,12.1l4.5-0.2 L542.5,301.4z M549.1,305.5l-4.5,0.2l0.4,7.7l4.5-0.2L549.1,305.5z M555.1,298.8l-4.5,0.2l0.8,14l4.5-0.2L555.1,298.8z M561.4,295.9l-4.5,0.2l0.9,16.6l4.5-0.2L561.4,295.9z M568.5,308.3l-4.5,0.2l0.2,3.8l4.5-0.2L568.5,308.3z M574.5,301.6 l-4.5,0.2l0.5,10.2l4.5-0.2L574.5,301.6z\"></path></g></g></g></g><path id=\"wire5\" fill=\"none\" stroke=\"#DBDBDB\" stroke-miterlimit=\"10\" enable-background=\"new \" d=\"M1582.5-614.8 c-18.5,62-198.3,159.1-173.5,246.8c4.3,15.1,5.8,29.9,24.6,44.1c8.3,6.3,109.8,50.3,48.2,54.4c-44.3,2.9-91.1-10.1-134.4-17.9 c-20.4-3.6-220.9-43.3-181.2,28c22,39.6,210.5,106.9,200.9,145.1\"></path></g><g id=\"titles\"><g id=\"title3\"><text transform=\"matrix(1 0 0 1 853.0562 60.1387)\" fill=\"#F5F7FA\" font-weight=\"100\" font-size=\"48px\">as an entrepreneur</text></g><g id=\"title2\"><g><text transform=\"matrix(1 0 0 1 917.7407 60.1387)\" fill=\"#F5F7FA\" font-weight=\"100\" font-size=\"48px\">as an employee</text></g></g><g id=\"title1\"><g><text transform=\"matrix(1 0 0 1 922.5957 60.1387)\" fill=\"#F5F7FA\" font-weight=\"100\" font-size=\"48px\">as a freelancer</text></g></g></g></g><text id=\"title\" transform=\"matrix(1 0 0 1 533.3481 -307.748)\" fill=\"#F5F7FA\" font-weight=\"100\" font-size=\"36px\">Over the years I worked for clients and companies</text></g></svg>"

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = "<div class=\"scene-content\">\n\n\n\n</div>\n\n<div class=\"svg\"></div>\n";

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scene_svg__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scene_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__scene_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scene_html__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scene_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__scene_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_animejs__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_animejs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_animejs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__keywords__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_knuth_shuffle__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_knuth_shuffle___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_knuth_shuffle__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_throttle_debounce__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_throttle_debounce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_throttle_debounce__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__scripts_utilities__ = __webpack_require__(0);





// import * as utils from '../../scripts/utilities';



/* harmony default export */ __webpack_exports__["a"] = ({
  skillShape: {
    pos: [6000, 6200, 6400, 6600, 6800, 7000, 7200, 7400],
    points: ['729.6,-147.8 748.5,-69.4 709.5,-69.4', '729.6,-147.8 765.8,-53.3 709.5,-69.4', '729.6,-164.2 765.8,-53.3 693.4,-53.3', '729.6,-167 783.6,-36.7 693.4,-53.3', '729.6,-203 783.6,-36.7 664,-25.9', '729.6,-203 819.4,-3.3 625.9,9.6', '729.6,-230.5 833.3,9.6 625.9,9.6'],
    repeat: 0
  },

  me: {
    pos: [7300, 7340],
    repeat: 0
  },

  lastKeyPercentage: 0,

  repeat: 0,

  get newskills() {
    return Object(__WEBPACK_IMPORTED_MODULE_4_knuth_shuffle__["knuthShuffle"])(__WEBPACK_IMPORTED_MODULE_3__keywords__["a" /* default */].slice(0));
  },

  init: function init(site) {
    document.querySelector('[data-scene="scene6"]').innerHTML = __WEBPACK_IMPORTED_MODULE_1__scene_html___default.a;
    document.querySelector('[data-scene="scene6"] .svg').innerHTML = __WEBPACK_IMPORTED_MODULE_0__scene_svg___default.a;

    this.initClickEvents(site);
    this.skills = this.newskills;
    this.sceneTiming = site.timing.scene6;

    this.animateMe = Object(__WEBPACK_IMPORTED_MODULE_5_throttle_debounce__["debounce"])(10000, true, this.animateMe);
    this.resizeSkills = Object(__WEBPACK_IMPORTED_MODULE_5_throttle_debounce__["throttle"])(250, true, this.resizeSkills);
  },


  beforerender: function beforerender(data) {
    return this.getScrolledPercentage(data, this.sceneTiming) > 0;
  },

  render: function render(data) {
    this.renderSkillWords(data);
    this.resizeSkills();
    this.renderSkills(data);
    this.renderMe(data);
  },

  getScrolledPercentage: function getScrolledPercentage(data, timing) {
    return data.curTop >= timing.begin ? Math.abs((data.curTop - timing.begin) / timing.duration * 100).toFixed(3) : 0;
  },
  initClickEvents: function initClickEvents(site) {
    document.querySelector('#email').addEventListener('click', function () {
      window.open('mailto:albinotonnina@gmail.com');
    });

    document.querySelector('#medium').addEventListener('click', function () {
      window.open('https://medium.com/@albinotonnina');
    });

    document.querySelector('#linkedin').addEventListener('click', function () {
      window.open('http://www.linkedin.com/in/albinotonnina', '_blank');
    });

    document.querySelector('#githubsite').addEventListener('click', function () {
      window.open('http://github.com/albinotonnina/albinotonnina.com', '_blank');
    });

    document.querySelector('#instagram').addEventListener('click', function () {
      window.open('http://www.instagram.com/albino_tonnina', '_blank');
    });

    document.querySelector('#twitter').addEventListener('click', function () {
      window.open('https://twitter.com/albinotonnina', '_blank');
    });

    document.querySelector('#contactresume').addEventListener('click', function () {
      site.destroy();
    });
  },
  animateSkills: function animateSkills(points, animationNum) {
    var _this = this;

    __WEBPACK_IMPORTED_MODULE_2_animejs___default()({
      targets: '#skillpath',
      points: points,
      easing: 'easeOutQuad',
      duration: 1000,
      begin: function begin() {
        _this.skillShape.repeat = animationNum;
      }
    });
  },
  animateMe: function animateMe() {
    __WEBPACK_IMPORTED_MODULE_2_animejs___default()({
      targets: '#invincible #me',
      translateY: '-30px',
      easing: 'easeInOutQuad',
      duration: 1000,
      loop: 12,
      direction: 'alternate'
    });
  },
  gen: function gen(minX, maxX, minY, maxY) {
    return {
      top: Math.floor(Math.random() * (maxX - minX + 1) + minX),
      left: Math.floor(Math.random() * (maxY - minY + 1) + minY)
    };
  },
  renderSkills: function renderSkills(data) {
    for (var i = 0; i < this.skillShape.points.length; i++) {
      if (data.curTop > this.skillShape.pos[i] && data.curTop < this.skillShape.pos[i + 1] && this.skillShape.repeat !== i + 1) {
        this.animateSkills(this.skillShape.points[i], i + 1);
      }
    }
  },
  renderMe: function renderMe(data) {
    if (data.curTop > this.me.pos[0] && data.curTop < this.me.pos[1]) {
      this.animateMe();
    }
  },
  renderSkillWords: function renderSkillWords(data) {
    var keyFreqPercentage = 2;
    var scrolledPercentage = this.getScrolledPercentage(data, this.sceneTiming);

    if (scrolledPercentage > 2 && scrolledPercentage < 45) {
      var shouldExecute = Math.abs(scrolledPercentage - this.lastKeyPercentage) > keyFreqPercentage;

      if (shouldExecute) {
        var word = this.skills.pop();
        var fontSize = Math.abs(Math.random() * 32) + 16;
        var minX = window.innerWidth / 2;
        var maxX = window.innerWidth - word.length * fontSize;
        var top = Math.floor(Math.random() * window.innerHeight + 1);
        var left = Math.floor(Math.random() * (maxX - minX + 1) + minX);

        var wordTag = Object(__WEBPACK_IMPORTED_MODULE_6__scripts_utilities__["a" /* createElementWithAttrs */])('div', {
          class: 'word',
          style: 'font-size: ' + fontSize + 'px; top: ' + top + 'px; left: ' + left + 'px'
        });

        wordTag.innerHTML = word;
        document.querySelector('#skills_container').appendChild(wordTag);

        __WEBPACK_IMPORTED_MODULE_2_animejs___default()({
          targets: wordTag,
          opacity: 0.6,
          scale: 1.4,
          direction: 'alternate',
          easing: 'easeInOutQuart'
        });

        if (this.skills.length < 1) {
          this.skills = this.newskills;
        }

        this.lastKeyPercentage = scrolledPercentage;
      }
    } else if (scrolledPercentage) {
      document.querySelector('#skills_container').innerHTML = '';
    }
  },
  resizeSkills: function resizeSkills() {
    // console.log('document.querySelector(\'#skills\')', document.querySelector('#skills'));
  }
});

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = "<svg version=\"1.1\" id=\"svg6\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"496 -368 1024 768\" enable-background=\"new 496 -368 1024 768\" xml:space=\"preserve\"><rect id=\"bg\" x=\"-7122.6\" y=\"-7472\" fill=\"#2BACB5\" stroke=\"#000000\" stroke-miterlimit=\"10\" width=\"15687.9\" height=\"14889\"></rect><g id=\"skills\"><g id=\"skillnames\"><g id=\"title\"><text id=\"texttitle\" transform=\"matrix(1 0 0 1 677.7734 -243.826)\" fill=\"#F5ECD9\" font-weight=\"300\" font-size=\"24.0762px\">Front end</text></g><g id=\"title_1_\"><text id=\"texttitle_1_\" transform=\"matrix(1 0 0 1 846.2227 16.0004)\" fill=\"#F5ECD9\" font-weight=\"300\" font-size=\"24.0762px\">User Experience</text></g><g id=\"title_2_\"><text id=\"texttitle_2_\" transform=\"matrix(1 0 0 1 514.2649 16.0002)\" fill=\"#F5ECD9\" font-weight=\"300\" font-size=\"24.0762px\">Graphics</text></g></g><polyline id=\"graph1\" fill=\"none\" stroke=\"#FFFFFF\" stroke-width=\"2\" stroke-miterlimit=\"10\" points=\"729.6,-230.5 729.6,-87 833.3,9.6 \"></polyline><line id=\"graph2\" fill=\"none\" stroke=\"#FFFFFF\" stroke-width=\"2\" stroke-miterlimit=\"10\" x1=\"729.6\" y1=\"-87\" x2=\"625.9\" y2=\"9.6\"></line><polygon id=\"skillpath\" fill=\"none\" stroke=\"#FFFFFF\" stroke-miterlimit=\"10\" points=\"729.6,-147.8 748.5,-69.4 709.5,-69.4 \"></polygon><g id=\"invincible\"><defs><polygon id=\"clippingimage\" points=\"729.6,-232.3 833.3,9.6 625.9,9.6 \"></polygon></defs><clipPath id=\"clippingimage_1_\"><use xlink:href=\"#clippingimage\" overflow=\"visible\"></use></clipPath><rect x=\"586.5\" y=\"-244.5\" clip-path=\"url(#clippingimage_1_)\" fill=\"#E3E815\" width=\"323\" height=\"294\"></rect><g clip-path=\"url(#clippingimage_1_)\"><g><g><rect x=\"723.8\" y=\"-41.8\" fill=\"#4D4C4C\" width=\"4.8\" height=\"39.8\"></rect><path fill=\"#E8B33F\" d=\"M748.2-18.2c0,1.6-1.3,2.9-2.9,2.9h-38.6c-1.6,0-2.9-1.3-2.9-2.9l0,0c0-1.6,1.3-2.9,2.9-2.9h38.6 C746.9-21.1,748.2-19.8,748.2-18.2L748.2-18.2z\"></path><rect x=\"709\" y=\"-18.4\" fill=\"#4D4C4C\" width=\"34.4\" height=\"4.3\"></rect><path fill=\"#4D4C4C\" d=\"M741.4-0.6c0,0.8-0.7,1.5-1.5,1.5h-27.4c-0.8,0-1.5-0.7-1.5-1.5l0,0c0-0.8,0.7-1.5,1.5-1.5h27.4 C740.7-2.1,741.4-1.5,741.4-0.6L741.4-0.6z\"></path><path fill=\"#4D4C4C\" d=\"M715.6,3.1c0,1.3-1,2.3-2.3,2.3c-1.3,0-2.3-1-2.3-2.3c0-1.3,1-2.3,2.3-2.3 C714.6,0.9,715.6,1.9,715.6,3.1z\"></path><path fill=\"#4D4C4C\" d=\"M741.4,3.1c0,1.3-1,2.3-2.3,2.3c-1.3,0-2.3-1-2.3-2.3c0-1.3,1-2.3,2.3-2.3 C740.4,0.9,741.4,1.9,741.4,3.1z\"></path><path fill=\"#4D4C4C\" d=\"M728.4,3.1c0,1.3-1,2.3-2.3,2.3c-1.3,0-2.3-1-2.3-2.3c0-1.3,1-2.3,2.3-2.3 C727.4,0.9,728.4,1.9,728.4,3.1z\"></path><path fill=\"#E8B33F\" d=\"M748.4-36.6c0,2-1.7,3.7-3.7,3.7h-36.3c-2,0-3.7-1.7-3.7-3.7v-13.7c0-2,1.7-3.7,3.7-3.7h36.3 c2,0,3.7,1.7,3.7,3.7V-36.6z\"></path></g><g><path opacity=\"0.1\" d=\"M808.2,5.7c0,2-36.1,3.6-80.5,3.6c-44.5,0-80.5-1.6-80.5-3.6c0-2,36.1-3.6,80.5-3.6 C772.1,2.1,808.2,3.7,808.2,5.7z\"></path></g><g><rect x=\"657.9\" y=\"-72.6\" fill=\"#F4F4F4\" width=\"7\" height=\"26\"></rect><path fill=\"#BFBEBE\" d=\"M663.2-50.1c0,1-0.8,1.8-1.8,1.8c-1,0-1.8-0.8-1.8-1.8c0-1,0.8-1.8,1.8-1.8 C662.4-51.9,663.2-51.1,663.2-50.1z\"></path></g><g><rect x=\"665.8\" y=\"-72.6\" fill=\"#F4F4F4\" width=\"7\" height=\"26\"></rect><path fill=\"#BFBEBE\" d=\"M671-50.1c0,1-0.8,1.8-1.8,1.8c-1,0-1.8-0.8-1.8-1.8c0-1,0.8-1.8,1.8-1.8C670.2-51.9,671-51.1,671-50.1 z\"></path></g><g><rect x=\"676.1\" y=\"-73.1\" transform=\"matrix(0.9755 -0.2198 0.2198 0.9755 29.8222 147.899)\" fill=\"#F4F4F4\" width=\"7\" height=\"26\"></rect><path fill=\"#BFBEBE\" d=\"M683.4-51.2c0.2,1-0.4,1.9-1.3,2.1c-1,0.2-1.9-0.4-2.1-1.3c-0.2-1,0.4-1.9,1.3-2.1 C682.2-52.7,683.2-52.1,683.4-51.2z\"></path></g><polygon fill=\"#544B43\" points=\"808.2,-46.5 648.1,-46.5 648.1,-42.9 654.5,-42.9 654.5,5.4 661.4,5.4 661.4,-42.9 794.8,-42.9 794.8,5.4 801.8,5.4 801.8,-42.9 808.2,-42.9 \"></polygon></g><g><path fill=\"#ADADAD\" d=\"M801.2-47c0,0.3-0.3,0.6-0.6,0.6H759c-0.3,0-0.6-0.3-0.6-0.6v-2c0-0.3,0.3-0.6,0.6-0.6h41.6 c0.3,0,0.6,0.3,0.6,0.6V-47z\"></path><g><path fill=\"#E8E7E7\" d=\"M798.9-73.3h-19.1v23.8h19.1c1.3,0,2.3-1,2.3-2.3V-71C801.2-72.3,800.2-73.3,798.9-73.3z\"></path><path fill=\"#CCCBCB\" d=\"M760.8-73.3c-1.3,0-2.3,1-2.3,2.3v19.2c0,1.3,1,2.3,2.3,2.3h19v-23.8H760.8z\"></path></g><path fill=\"#FFFFFF\" d=\"M782.5-61.4c0,1.5-1.2,2.6-2.6,2.6c-1.5,0-2.6-1.2-2.6-2.6c0-1.5,1.2-2.6,2.6-2.6 C781.3-64.1,782.5-62.9,782.5-61.4z\"></path></g><g id=\"me\"><rect x=\"705.1\" y=\"-96.3\" fill=\"#FFFFFF\" width=\"41.9\" height=\"41.9\"></rect><polygon fill=\"#F7D3AE\" points=\"706.1,-129 706.1,-115.8 706.1,-96.3 746.1,-96.3 746.1,-115.4 746.1,-129 \"></polygon><polygon fill=\"#E8E7E7\" points=\"729.3,-93.2 729.8,-84.4 741.8,-96.3 729.3,-96.3 729.3,-93.2 \"></polygon><polygon fill=\"#E8E7E7\" points=\"722.7,-96.3 710.1,-96.3 722.2,-84.4 722.7,-93.2 \"></polygon><polygon fill=\"#CA5580\" points=\"726,-93.2 729.3,-93.2 729.3,-96.3 722.7,-96.3 722.7,-93.2 \"></polygon><polygon fill=\"#EF6592\" points=\"730.5,-71.6 729.3,-93.2 729.3,-93.2 726,-93.2 722.7,-93.2 721.5,-71.5 726.1,-66.9 \"></polygon><polygon fill=\"#FFFFFF\" points=\"726,-96.3 717.1,-89.6 711.3,-96.3 \"></polygon><polygon fill=\"#FFFFFF\" points=\"726,-96.3 735,-89.6 740.7,-96.3 \"></polygon><polygon fill=\"#1B1C1C\" points=\"747,-51.1 705.2,-51.2 705.2,-61.4 747,-61.4 \"></polygon><polygon fill=\"#544B43\" points=\"706.1,-116.3 697.7,-132.6 721.5,-143.8 722.7,-139.6 738.7,-149.6 733.4,-139.2 744,-144.1 738.7,-137 744,-137.7 740.9,-132.9 750.1,-131 746.1,-116.3 744,-126.2 709.6,-124.5 \"></polygon><path fill=\"#1B1C1C\" d=\"M728-45.9\"></path><path fill=\"#1B1C1C\" d=\"M755.2-63.9c-6.1-4.8-29.1,0-29.1,0s-11.9-2.5-20.8-2.1c-3.5,0.1-6.6,0.7-8.3,2.1 c-6.1,4.8,2.7,17.3,29.1,15.4C752.5-46.6,761.3-59.1,755.2-63.9z\"></path><g><path fill=\"#544B43\" d=\"M711.2-115.5l-0.3,0.7c0.2,0.1,5.3,2.2,10.2-0.7l-0.4-0.6C716.1-113.4,711.2-115.4,711.2-115.5z\"></path></g><g><path fill=\"#544B43\" d=\"M741-115.6l0.3,0.7c-0.2,0.1-5.2,2.3-10.2-0.5l0.4-0.6C736.1-113.4,740.9-115.5,741-115.6z\"></path></g><g><path fill=\"#FFFFFF\" d=\"M756.8-70.4c-2,0.9-3.1,0.3-3.7-0.2c-2.2-1.7-3.9-6.7-4.8-14c-0.7-6-0.6-11.4-0.6-11.5c0,0,0,0,0,0 l-4.4-0.1c0,0.2-0.1,5.9,0.7,12.2c1.1,9,3.3,14.9,6.6,17.5c1,0.8,2.5,1.5,4.4,1.5c1,0,2.2-0.2,3.5-0.8L756.8-70.4z\"></path><path fill=\"#F7D3AE\" d=\"M756.5-63.6c-2.3-0.4-3.8-2.7-3.4-5.1c0.4-2.4,2.6-4,5-3.5c2.3,0.4,3.8,2.7,3.4,5.1 C761-64.7,758.8-63.1,756.5-63.6z\"></path></g><g><path fill=\"#FFFFFF\" d=\"M695.3-70.4c2,0.9,3.1,0.3,3.7-0.2c2.2-1.7,3.9-6.7,4.8-14c0.7-6,0.6-11.4,0.6-11.5c0,0,0,0,0,0 l4.4-0.1c0,0.2,0.1,5.9-0.7,12.2c-1.1,9-3.3,14.9-6.6,17.5c-1,0.8-2.5,1.5-4.4,1.5c-1,0-2.2-0.2-3.5-0.8L695.3-70.4z\"></path><path fill=\"#F7D3AE\" d=\"M695.6-63.6c2.3-0.4,3.8-2.7,3.4-5.1c-0.4-2.4-2.6-4-5-3.5c-2.3,0.4-3.8,2.7-3.4,5.1 C691.1-64.7,693.3-63.1,695.6-63.6z\"></path></g></g></g></g></g><g id=\"sc6title\"><text transform=\"matrix(1 0 0 1 527.9698 -314.6172)\" fill=\"#F5ECD9\" font-weight=\"100\" font-size=\"49.2156px\">As for the future:</text></g><rect id=\"bgright\" x=\"1031.3\" y=\"-1872.5\" fill=\"#F5ECD9\" width=\"2340.6\" height=\"3810.5\"></rect><g id=\"endtitles\"><g id=\"githubsite\"><g><text transform=\"matrix(1 0 0 1 1098.5768 1164.7454)\" fill=\"#2BACB5\" font-weight=\"100\" font-size=\"23.8652px\">copyright 2017 Albino Tonnina</text></g><path fill=\"#2BACB5\" d=\"M1093.4,202.4c-0.1,0.1-0.3,0.1-0.4-0.1c-0.2-0.2-0.3-0.3-0.1-0.4c0.1-0.1,0.3-0.1,0.4,0.1 C1093.5,202.2,1093.5,202.4,1093.4,202.4z M1092.5,201.2c0.2,0.2,0.2,0.3,0,0.4c-0.1,0.1-0.3,0-0.3-0.2c-0.1-0.2-0.1-0.3,0-0.4 C1092.3,200.9,1092.4,200.9,1092.5,201.2z M1091.2,199.9c-0.1,0.1-0.2,0.1-0.3,0c-0.2-0.1-0.2-0.2-0.2-0.3c0-0.1,0.2-0.1,0.3,0 C1091.2,199.7,1091.3,199.8,1091.2,199.9z M1091.9,200.6c-0.1,0.1-0.2,0.1-0.3-0.1c-0.1-0.2-0.2-0.3,0-0.3 c0.1-0.1,0.2-0.1,0.3,0.1C1092,200.4,1092,200.5,1091.9,200.6z M1094.6,202.9c-0.1,0.2-0.2,0.3-0.4,0.2c-0.3-0.1-0.3-0.2-0.3-0.3 c0.1-0.2,0.2-0.2,0.4-0.2C1094.6,202.7,1094.6,202.8,1094.6,202.9z M1096,203.1c0,0.2-0.1,0.3-0.3,0.3c-0.3,0-0.3-0.1-0.3-0.3 c0-0.2,0.1-0.3,0.3-0.3C1095.8,202.9,1096,202.9,1096,203.1z M1097.1,202.9c0,0.2-0.1,0.3-0.3,0.3s-0.3,0-0.4-0.2 c0-0.2,0.1-0.3,0.3-0.3C1097,202.6,1097.1,202.7,1097.1,202.9z M1117.6,182.7v20.2c0,1.7-0.6,3.1-1.8,4.3 c-1.2,1.2-2.6,1.8-4.3,1.8h-4.8c-0.3,0-0.4,0-0.5,0s-0.3-0.1-0.4-0.1c-0.2-0.1-0.3-0.2-0.3-0.3c-0.1-0.2-0.1-0.3-0.1-0.6v-5 c0-1.3-0.3-2.3-1.1-3c0.8-0.1,1.5-0.3,2.2-0.3c0.7-0.2,1.3-0.4,2-0.8c0.7-0.4,1.3-0.8,1.7-1.4c0.4-0.6,0.8-1.3,1.1-2.3 s0.4-2,0.4-3.2c0-1.7-0.6-3.2-1.7-4.3c0.5-1.3,0.5-2.8-0.2-4.3c-0.4-0.1-1-0.1-1.7,0.3c-0.8,0.3-1.4,0.6-1.9,0.9l-0.8,0.5 c-1.3-0.3-2.7-0.6-4-0.6c-1.4,0-2.8,0.2-4,0.6c-0.3-0.2-0.5-0.3-0.9-0.6c-0.3-0.3-0.9-0.5-1.8-0.8c-0.8-0.3-1.4-0.4-1.8-0.3 c-0.6,1.6-0.7,3-0.2,4.3c-1.1,1.2-1.7,2.7-1.7,4.3c0,1.2,0.2,2.3,0.4,3.2c0.3,0.9,0.7,1.7,1.1,2.3s1,1,1.7,1.4 c0.7,0.4,1.3,0.7,2,0.8s1.3,0.3,2.2,0.3c-0.6,0.5-0.9,1.3-1,2.2c-0.3,0.2-0.6,0.3-0.9,0.3c-0.3,0.1-0.8,0.1-1.2,0.1 c-0.5,0-0.9-0.2-1.4-0.5c-0.5-0.3-0.8-0.8-1.2-1.3c-0.3-0.4-0.6-0.8-1-1.1c-0.4-0.3-0.8-0.4-1-0.5l-0.4-0.1c-0.3,0-0.5,0-0.6,0.1 c-0.1,0.1-0.2,0.2-0.1,0.3c0,0.1,0.1,0.2,0.2,0.3c0.1,0.1,0.2,0.2,0.3,0.3l0.2,0.1c0.3,0.2,0.6,0.4,0.9,0.8 c0.3,0.4,0.5,0.8,0.7,1.1l0.3,0.5c0.2,0.5,0.5,1,0.9,1.3s0.9,0.5,1.4,0.7c0.5,0.1,1,0.2,1.5,0.2c0.5,0,0.8,0,1.2-0.1l0.5-0.1 c0,0.5,0,1.3,0,2.2s0,1.4,0,1.4c0,0.3-0.1,0.5-0.3,0.7c-0.2,0.2-0.3,0.3-0.5,0.3s-0.4,0-0.7,0h-4.8c-1.7,0-3.1-0.6-4.3-1.8 c-1.2-1.2-1.8-2.6-1.8-4.3v-20.2c0-1.7,0.6-3.1,1.8-4.3c1.2-1.2,2.6-1.8,4.3-1.8h20.2c1.7,0,3.1,0.6,4.3,1.8 C1117,179.6,1117.6,181,1117.6,182.7L1117.6,182.7z\"></path><g><text transform=\"matrix(1 0 0 1 1131.6166 202.1562)\" fill=\"#2BACB5\" font-weight=\"100\" font-size=\"23.8652px\">has a public repository on GitHub.</text></g></g><g id=\"node\"><g><path fill=\"#2BACB5\" d=\"M1273.8,75.4c0-0.4-0.2-0.7-0.5-0.9l-8.9-5.2c-0.1-0.1-0.3-0.1-0.5-0.1h-0.1c-0.2,0-0.3,0.1-0.5,0.1 l-8.9,5.2c-0.3,0.2-0.5,0.5-0.5,0.9v13.9c0,0.2,0.1,0.4,0.3,0.5s0.4,0.1,0.5,0l5.3-3.1c0.3-0.2,0.5-0.5,0.5-0.9v-6.5 c0-0.4,0.2-0.7,0.5-0.9l2.2-1.3c0.2-0.1,0.3-0.1,0.5-0.1c0.2,0,0.4,0,0.5,0.1l2.2,1.3c0.3,0.2,0.5,0.5,0.5,0.9v6.5 c0,0.4,0.2,0.7,0.5,0.9l5.3,3.1c0.2,0.1,0.4,0.1,0.5,0c0.2-0.1,0.3-0.3,0.3-0.5L1273.8,75.4z\"></path><path fill=\"#2BACB5\" d=\"M1321.7,56.3c-0.2-0.1-0.4-0.1-0.5,0c-0.2,0.1-0.3,0.3-0.3,0.5v13.7c0,0.1-0.1,0.3-0.2,0.3 c-0.1,0.1-0.3,0.1-0.4,0l-2.2-1.3c-0.3-0.2-0.7-0.2-1.1,0l-8.9,5.2c-0.3,0.2-0.5,0.5-0.5,0.9v10.4c0,0.4,0.2,0.7,0.5,0.9l8.9,5.2 c0.3,0.2,0.7,0.2,1.1,0l8.9-5.2c0.3-0.2,0.5-0.5,0.5-0.9V60.2c0-0.4-0.2-0.7-0.5-0.9L1321.7,56.3z M1320.8,82.6 c0,0.1-0.1,0.2-0.1,0.2l-3.1,1.7c-0.1,0-0.2,0-0.3,0l-3.1-1.7c-0.1,0-0.1-0.1-0.1-0.2V79c0-0.1,0.1-0.2,0.1-0.2l3.1-1.7 c0.1-0.1,0.2-0.1,0.3,0l3.1,1.7c0.1,0.1,0.1,0.1,0.1,0.2V82.6z\"></path><path fill=\"#2BACB5\" d=\"M1353.7,78.9c0.3-0.2,0.5-0.5,0.5-0.9v-2.5c0-0.4-0.2-0.7-0.5-0.9l-8.9-5.2c-0.3-0.2-0.7-0.2-1.1,0 l-8.9,5.2c-0.3,0.2-0.5,0.5-0.5,0.9v10.4c0,0.4,0.2,0.7,0.5,0.9l8.9,5.1c0.3,0.2,0.7,0.2,1,0l5.4-2.9c0.2-0.1,0.3-0.3,0.3-0.5 c0-0.2-0.1-0.4-0.3-0.5l-9-5.2c-0.2-0.1-0.3-0.3-0.3-0.5v-3.3c0-0.2,0.1-0.4,0.3-0.5l2.8-1.6c0.2-0.1,0.4-0.1,0.5,0l2.8,1.6 c0.2,0.1,0.3,0.3,0.3,0.5v2.5c0,0.2,0.1,0.4,0.3,0.5s0.4,0.1,0.5,0L1353.7,78.9z\"></path><path fill=\"#2BACB5\" d=\"M1290.1,69.4c0.3-0.2,0.7-0.2,1.1,0l8.9,5.2c0.3,0.2,0.5,0.5,0.5,0.9v10.4c0,0.4-0.2,0.7-0.5,0.9 l-8.9,5.2c-0.3,0.2-0.7,0.2-1.1,0l-8.9-5.2c-0.3-0.2-0.5-0.5-0.5-0.9V75.5c0-0.4,0.2-0.7,0.5-0.9L1290.1,69.4z\"></path><path fill=\"#2BACB5\" d=\"M1371.2,92c-0.3,0-0.6-0.1-0.9-0.2l-2.8-1.6c-0.4-0.2-0.2-0.3-0.1-0.4c0.6-0.2,0.7-0.2,1.3-0.6 c0.1,0,0.1,0,0.2,0l2.1,1.3c0.1,0,0.2,0,0.3,0l8.4-4.9c0.1,0,0.1-0.1,0.1-0.2v-9.8c0-0.1,0-0.2-0.1-0.2l-8.4-4.9 c-0.1,0-0.2,0-0.3,0l-8.4,4.9c-0.1,0-0.1,0.1-0.1,0.2v9.8c0,0.1,0.1,0.2,0.1,0.2l2.3,1.3c1.2,0.6,2-0.1,2-0.8v-9.7 c0-0.1,0.1-0.2,0.2-0.2h1.1c0.1,0,0.2,0.1,0.2,0.2v9.7c0,1.6-0.9,2.6-2.5,2.6c-0.5,0-0.9,0-1.9-0.5l-2.2-1.3 c-0.5-0.3-0.9-0.9-0.9-1.5v-9.8c0-0.6,0.3-1.2,0.9-1.5l8.4-4.9c0.5-0.3,1.2-0.3,1.7,0l8.4,4.9c0.5,0.3,0.9,0.9,0.9,1.5v9.8 c0,0.6-0.3,1.2-0.9,1.5l-8.4,4.9C1371.8,92,1371.5,92,1371.2,92z\"></path><path fill=\"#2BACB5\" d=\"M1373.7,85.3c-3.7,0-4.5-1.7-4.5-3.2c0-0.1,0.1-0.2,0.2-0.2h1.1c0.1,0,0.2,0.1,0.2,0.2 c0.2,1.1,0.6,1.6,2.8,1.6c1.8,0,2.5-0.4,2.5-1.3c0-0.5-0.2-0.9-2.9-1.2c-2.3-0.2-3.8-0.7-3.8-2.5c0-1.7,1.4-2.7,3.9-2.7 c2.7,0,4.1,0.9,4.3,2.9c0,0.1,0,0.1-0.1,0.2c0,0-0.1,0.1-0.2,0.1h-1.1c-0.1,0-0.2-0.1-0.2-0.2c-0.3-1.1-0.9-1.5-2.6-1.5 c-1.9,0-2.1,0.7-2.1,1.2c0,0.6,0.3,0.8,2.8,1.1c2.6,0.3,3.9,0.8,3.9,2.6C1378,84.3,1376.5,85.3,1373.7,85.3z\"></path><g><path fill=\"#2BACB5\" d=\"M1385.4,69.3v0.2h-0.7v1.8h-0.3v-1.8h-0.7v-0.2H1385.4z\"></path><path fill=\"#2BACB5\" d=\"M1385.6,69.3h0.4l0.6,1.8l0.6-1.8h0.4v2.1h-0.3v-1.2c0,0,0-0.1,0-0.2s0-0.2,0-0.3l-0.6,1.7h-0.3 l-0.6-1.7v0.1c0,0.1,0,0.1,0,0.2s0,0.2,0,0.2v1.2h-0.3L1385.6,69.3L1385.6,69.3L1385.6,69.3z\"></path></g><path fill=\"#2BACB5\" d=\"M1344.2,78.5c0.1,0,0.1,0,0.2,0l1.7,1c0.1,0,0.1,0.1,0.1,0.2v2c0,0.1,0,0.1-0.1,0.2l-1.7,1 c-0.1,0-0.1,0-0.2,0l-1.7-1c-0.1,0-0.1-0.1-0.1-0.2v-2c0-0.1,0-0.1,0.1-0.2L1344.2,78.5z\"></path></g><text transform=\"matrix(1 0 0 1 1085.4595 88.8281)\" fill=\"#2BACB5\" font-weight=\"100\" font-size=\"23.8652px\">is powered by:</text></g><g id=\"heroku\"><g><path fill=\"#2BACB5\" d=\"M1282.3,146.3v-12.3c0-0.8-0.6-1.3-1.4-1.3c-1.5,0-3.4,0.4-5,1.2v12.4h-3.5v-22.8h3.5v7.6 c1.7-0.6,3.6-1.2,5.6-1.2c3.1,0,4.3,1.9,4.3,4.6v11.9L1282.3,146.3L1282.3,146.3z M1292.1,138.9c0.1,4.1,0.9,4.9,3.5,4.9 c2,0,4.2-0.6,6-1.4l0.5,2.6c-1.9,0.8-4.1,1.7-6.8,1.7c-5.8,0-6.7-3.1-6.7-8.2c0-2.7,0.2-5.2,0.8-7.6c1.7-0.6,4.1-1,6.9-1 c4.7,0,6.2,2.6,6.2,7.2v1.8L1292.1,138.9L1292.1,138.9z M1296.5,132.8c-1,0-2.7,0-4,0.3c-0.1,0.7-0.3,1.7-0.4,3.4h7.2 C1299.3,134.2,1298.9,132.8,1296.5,132.8L1296.5,132.8z M1309.1,134v12.4h-3.5v-14c2.9-1.6,6-2.1,8-2.2v2.8 C1312.3,133.2,1310.5,133.3,1309.1,134L1309.1,134z M1322.9,146.8c-5.1,0-7.5-2.5-7.5-8.3c0-6.2,3-8.5,7.5-8.5 c5.1,0,7.5,2.5,7.5,8.3C1330.3,144.5,1327.3,146.8,1322.9,146.8L1322.9,146.8z M1322.9,132.8c-2.6,0-4.1,1.6-4.1,5.6 c0,4.4,1.3,5.5,4.1,5.5c2.6,0,4.1-1.5,4.1-5.6C1327,133.9,1325.7,132.8,1322.9,132.8L1322.9,132.8z M1347.1,146.3h-4.1 c-0.9-2.5-2.3-5.1-4.3-7.3h-1.8v7.3h-3.5v-22.8h3.5v13.1h1.6c1.8-1.8,3.1-4.1,4.1-6.3h3.9c-1.4,2.7-3,5-4.9,6.9 C1343.8,140.3,1345.6,143.3,1347.1,146.3L1347.1,146.3z M1353.5,146.8c-3.1,0-4.3-1.9-4.3-4.6v-11.9h3.5v12.3 c0,0.8,0.6,1.3,1.4,1.3c1.5,0,3.6-0.4,5.2-1.2v-12.4h3.5v13.9C1358.7,146.6,1355.5,146.8,1353.5,146.8L1353.5,146.8z\"></path><path fill=\"#2BACB5\" d=\"M1261,154.8h-24.1c-2.1,0-3.8-1.7-3.8-3.8v-31.7c0-2.1,1.7-3.8,3.8-3.8h24.1c2.1,0,3.8,1.7,3.8,3.8v31.7 C1264.8,153.2,1263.1,154.8,1261,154.8L1261,154.8z M1263.5,119.6c0-1.5-1.2-2.6-2.6-2.6h-23.7c-1.5,0-2.6,1.2-2.6,2.6v31.3 c0,1.5,1.2,2.6,2.6,2.6h23.7c1.5,0,2.6-1.2,2.6-2.6V119.6L1263.5,119.6z\"></path><path fill=\"#2BACB5\" d=\"M1253,149.4v-15.5c0,0,1-3.7-12.5,1.6c0,0.1,0-14.4,0-14.4h4.4v9.2c0,0,12.3-4.8,12.3,3.7s0,15.5,0,15.5 L1253,149.4L1253,149.4z M1255.5,126.6h-4.6c1.7-2.1,3.1-5.6,3.1-5.6h4.8C1258.9,121.1,1258,123.4,1255.5,126.6L1255.5,126.6z M1240.6,149.4v-8.8l4.4,4.4L1240.6,149.4L1240.6,149.4z\"></path></g><text transform=\"matrix(1 0 0 1 1085.4595 145.1913)\" fill=\"#2BACB5\" font-weight=\"100\" font-size=\"23.8652px\">is hosted on:</text></g><text transform=\"matrix(1 0 0 1 1085.4603 42.7616)\" fill=\"#2BACB5\" font-weight=\"100\" font-size=\"47.7304px\">This website:</text><g id=\"medium\"><text transform=\"matrix(1 0 0 1 1132.8278 -84.3644)\" fill=\"#2BACB5\" font-weight=\"100\" font-size=\"23.8652px\">Medium</text><g><path fill=\"#2BACB5\" d=\"M1119.1-101.6C1119.1-101.6,1119.1-101.6,1119.1-101.6L1119.1-101.6l-9.2-4.6c-0.1,0-0.1-0.1-0.2-0.1 c-0.1,0-0.2,0-0.3,0c-0.4,0-0.7,0.2-0.9,0.5l-5.3,8.6l6.6,10.8l9.2-15C1119.2-101.5,1119.1-101.6,1119.1-101.6z\"></path><polygon fill=\"#2BACB5\" points=\"1100.3,-99.2 1100.3,-89.4 1109,-85.1 \"></polygon><path fill=\"#2BACB5\" d=\"M1110.3-84.4l7.2,3.6c0.9,0.5,1.7,0.1,1.7-0.7v-17.2L1110.3-84.4z\"></path><path fill=\"#2BACB5\" d=\"M1098.8-101.6l-9-4.5c-0.2-0.1-0.3-0.1-0.5-0.1c-0.4,0-0.7,0.3-0.7,0.8V-86c0,0.5,0.4,1.1,0.8,1.4l7.9,4 c0.2,0.1,0.4,0.1,0.6,0.1c0.5,0,0.8-0.4,0.8-1L1098.8-101.6C1098.9-101.6,1098.9-101.6,1098.8-101.6z\"></path></g></g><g id=\"linkedin\"><text transform=\"matrix(1 0 0 1 1134.2368 -181.9218)\" fill=\"#2BACB5\" font-weight=\"100\" font-size=\"23.8652px\">LinkedIn profile</text><path fill=\"#2BACB5\" d=\"M1093.9-181.6h3.7v-11.1h-3.7V-181.6z M1097.9-196.2c0-0.5-0.3-1.1-0.5-1.3c-0.4-0.4-0.9-0.5-1.5-0.5 s-1.2,0.1-1.5,0.5c-0.4,0.4-0.5,0.8-0.5,1.3c0,0.5,0.1,1.1,0.5,1.3c0.4,0.4,0.9,0.5,1.5,0.5l0,0c0.7,0,1.2-0.1,1.6-0.5 C1097.7-195.3,1097.9-195.7,1097.9-196.2L1097.9-196.2z M1107.3-181.6h3.7v-6.4c0-1.6-0.4-2.9-1.2-3.7c-0.8-0.8-1.9-1.3-3-1.3 c-1.5,0-2.5,0.7-3.3,1.9l0,0v-1.6h-3.7c0,0.7,0,4.4,0,11.1h3.7v-6.2c0-0.4,0-0.7,0.1-0.9c0.1-0.4,0.4-0.7,0.8-0.9 c0.3-0.3,0.7-0.4,1.2-0.4c1.2,0,1.9,0.8,1.9,2.5L1107.3-181.6L1107.3-181.6z M1114.9-197.7v15.5c0,1.3-0.4,2.4-1.3,3.3 s-2,1.3-3.3,1.3h-15.5c-1.3,0-2.4-0.4-3.3-1.3s-1.3-2-1.3-3.3v-15.5c0-1.3,0.4-2.4,1.3-3.3s2-1.3,3.3-1.3h15.5 c1.3,0,2.4,0.4,3.3,1.3S1114.9-199,1114.9-197.7z\"></path></g><g id=\"instagram\"><text transform=\"matrix(1 0 0 1 1132.2526 -31.0253)\" fill=\"#2BACB5\" font-weight=\"100\" font-size=\"23.8652px\">Instagram</text><path fill=\"#2BACB5\" d=\"M1102.8-50.6c3.4,0,3.8,0,5.2,0.1c1.2,0.1,1.9,0.3,2.4,0.4c0.6,0.2,1,0.5,1.5,1c0.4,0.4,0.7,0.9,1,1.5 c0.2,0.5,0.4,1.1,0.4,2.4c0.1,1.3,0.1,1.8,0.1,5.2c0,3.4,0,3.8-0.1,5.2c-0.1,1.2-0.3,1.9-0.4,2.4c-0.2,0.6-0.5,1-1,1.5 c-0.4,0.4-0.9,0.7-1.5,1c-0.5,0.2-1.1,0.4-2.4,0.4c-1.3,0.1-1.8,0.1-5.2,0.1c-3.4,0-3.8,0-5.2-0.1c-1.2-0.1-1.9-0.3-2.4-0.4 c-0.6-0.2-1-0.5-1.5-1c-0.4-0.4-0.7-0.9-1-1.5c-0.2-0.5-0.4-1.1-0.4-2.4c-0.1-1.3-0.1-1.8-0.1-5.2c0-3.4,0-3.8,0.1-5.2 c0.1-1.2,0.3-1.9,0.4-2.4c0.2-0.6,0.5-1,1-1.5c0.4-0.4,0.9-0.7,1.5-1c0.5-0.2,1.1-0.4,2.4-0.4C1099-50.5,1099.4-50.6,1102.8-50.6 M1102.8-52.9c-3.5,0-3.9,0-5.3,0.1c-1.4,0.1-2.3,0.3-3.1,0.6c-0.8,0.3-1.6,0.8-2.3,1.5c-0.7,0.7-1.1,1.4-1.5,2.3 c-0.3,0.8-0.5,1.7-0.6,3.1c-0.1,1.4-0.1,1.8-0.1,5.3c0,3.5,0,3.9,0.1,5.3c0.1,1.4,0.3,2.3,0.6,3.1c0.3,0.8,0.8,1.6,1.5,2.3 c0.7,0.7,1.4,1.1,2.3,1.5c0.8,0.3,1.7,0.5,3.1,0.6c1.4,0.1,1.8,0.1,5.3,0.1c3.5,0,3.9,0,5.3-0.1c1.4-0.1,2.3-0.3,3.1-0.6 c0.8-0.3,1.6-0.8,2.3-1.5c0.7-0.7,1.1-1.4,1.5-2.3c0.3-0.8,0.5-1.7,0.6-3.1c0.1-1.4,0.1-1.8,0.1-5.3c0-3.5,0-3.9-0.1-5.3 c-0.1-1.4-0.3-2.3-0.6-3.1c-0.3-0.8-0.8-1.6-1.5-2.3c-0.7-0.7-1.4-1.1-2.3-1.5c-0.8-0.3-1.7-0.5-3.1-0.6 C1106.7-52.8,1106.3-52.9,1102.8-52.9L1102.8-52.9z\"></path><path fill=\"#2BACB5\" d=\"M1102.8-46.6c-3.6,0-6.6,2.9-6.6,6.6s2.9,6.6,6.6,6.6c3.6,0,6.6-2.9,6.6-6.6S1106.5-46.6,1102.8-46.6z M1102.8-35.8c-2.4,0-4.3-1.9-4.3-4.3s1.9-4.3,4.3-4.3c2.4,0,4.3,1.9,4.3,4.3S1105.2-35.8,1102.8-35.8z\"></path><circle fill=\"#2BACB5\" cx=\"1109.7\" cy=\"-46.9\" r=\"1.5\"></circle></g><g id=\"contactresume\"><path fill=\"#2BACB5\" d=\"M1108.5-138.9v1.2c0,0.1,0,0.3-0.1,0.4c-0.1,0.1-0.3,0.1-0.4,0.1h-12.7c-0.1,0-0.3,0-0.4-0.1 c-0.1-0.1-0.1-0.3-0.1-0.4v-1.2c0-0.1,0-0.3,0.1-0.4c0.1-0.1,0.3-0.1,0.4-0.1h12.7c0.1,0,0.3,0,0.4,0.1 C1108.5-139.2,1108.5-139.1,1108.5-138.9z M1108.5-143.6v1.2c0,0.1,0,0.3-0.1,0.4c-0.1,0.1-0.3,0.1-0.4,0.1h-12.7 c-0.1,0-0.3,0-0.4-0.1c-0.1-0.1-0.1-0.3-0.1-0.4v-1.2c0-0.1,0-0.3,0.1-0.4c0.1-0.1,0.3-0.1,0.4-0.1h12.7c0.1,0,0.3,0,0.4,0.1 S1108.5-143.7,1108.5-143.6z M1092.4-132.6h18.4v-13.8h-7.6c-0.5,0-0.9-0.1-1.2-0.5c-0.4-0.4-0.5-0.8-0.5-1.2v-7.6h-9.3 L1092.4-132.6L1092.4-132.6z M1104-148.7h6.8c-0.1-0.4-0.3-0.5-0.4-0.8l-5.7-5.7c-0.1-0.1-0.4-0.3-0.8-0.4L1104-148.7L1104-148.7z M1113.1-148.2v16.2c0,0.5-0.1,0.9-0.5,1.2c-0.4,0.4-0.8,0.5-1.2,0.5h-19.6c-0.5,0-0.9-0.1-1.2-0.5c-0.4-0.4-0.5-0.8-0.5-1.2 v-24.3c0-0.5,0.1-0.9,0.5-1.2c0.4-0.4,0.8-0.5,1.2-0.5h11.5c0.5,0,1.1,0.1,1.6,0.4c0.5,0.3,1.1,0.5,1.3,0.9l5.6,5.6 c0.4,0.4,0.7,0.8,0.9,1.3C1113-149.1,1113.1-148.6,1113.1-148.2L1113.1-148.2z\"></path><g><text transform=\"matrix(1 0 0 1 1134.8812 -133.0322)\" fill=\"#2BACB5\" font-weight=\"100\" font-size=\"23.8652px\">View resume</text></g></g><g id=\"email\"><text transform=\"matrix(1 0 0 1 1135.932 -230.895)\" fill=\"#2BACB5\" font-weight=\"100\" font-size=\"23.8652px\">albinotonnina@gmail.com</text><path fill=\"#2BACB5\" d=\"M1111.7-229.9v-9.9c-0.3,0.3-0.5,0.5-0.9,0.8c-2.3,1.7-4.1,3.2-5.4,4.4c-0.4,0.4-0.8,0.7-1.1,0.8 c-0.3,0.3-0.7,0.4-1.1,0.7c-0.5,0.3-0.9,0.3-1.3,0.3l0,0c-0.4,0-0.8-0.1-1.3-0.3c-0.5-0.3-0.8-0.4-1.1-0.7 c-0.3-0.3-0.7-0.5-1.1-0.8c-1.3-1.2-3.2-2.5-5.4-4.4c-0.3-0.3-0.7-0.5-0.9-0.8v9.9c0,0.1,0,0.3,0.1,0.3c0.1,0.1,0.1,0.1,0.3,0.1 h19c0.1,0,0.3,0,0.3-0.1C1111.7-229.6,1111.7-229.7,1111.7-229.9L1111.7-229.9z M1111.7-243.4v-0.3c0,0,0,0,0-0.1s0-0.1,0-0.1 s0,0-0.1-0.1c0-0.1,0-0.1-0.1-0.1h-0.1h-19c-0.1,0-0.3,0-0.3,0.1c-0.1,0.1-0.1,0.1-0.1,0.3c0,1.5,0.7,2.7,1.9,3.7 c1.6,1.3,3.3,2.7,5.2,4.1c0,0,0.1,0.1,0.4,0.4c0.3,0.3,0.4,0.4,0.5,0.5c0.1,0.1,0.4,0.3,0.5,0.4c0.3,0.1,0.4,0.3,0.7,0.4 c0.1,0.1,0.4,0.1,0.5,0.1l0,0c0.1,0,0.4,0,0.5-0.1c0.1-0.1,0.4-0.1,0.7-0.4c0.3-0.1,0.4-0.3,0.5-0.4s0.4-0.3,0.5-0.5 c0.3-0.3,0.4-0.3,0.4-0.4c1.9-1.5,3.4-2.8,5.2-4.1c0.5-0.4,0.9-0.9,1.3-1.5C1111.4-242.3,1111.7-242.9,1111.7-243.4L1111.7-243.4z M1113.3-243.8v13.9c0,0.5-0.3,1.1-0.7,1.5s-0.9,0.7-1.5,0.7h-19c-0.5,0-1.1-0.1-1.5-0.7c-0.4-0.4-0.7-0.9-0.7-1.5v-13.9 c0-0.5,0.3-1.1,0.7-1.5c0.4-0.4,0.9-0.7,1.5-0.7h19c0.5,0,1.1,0.3,1.5,0.7C1113.1-244.9,1113.3-244.5,1113.3-243.8z\"></path></g><text transform=\"matrix(1 0 0 1 1085.4603 -318.587)\" fill=\"#2BACB5\" font-weight=\"100\" font-size=\"47.7304px\">To stay connected:</text><text transform=\"matrix(1 0 0 1 1085.46 835)\" fill=\"#2BACB5\" font-weight=\"100\" font-size=\"65.2522px\">Bye!</text><g id=\"twitter\"><text transform=\"matrix(1 0 0 1 1135.9325 -272.895)\" fill=\"#2BACB5\" font-weight=\"100\" font-size=\"23.8652px\">@albinotonnina</text><path fill=\"#2BACB5\" d=\"M1096.6-268.3c10.7,0,16.6-8.9,16.6-16.6c0-0.3,0-0.5,0-0.8c1.1-0.8,2.1-1.8,2.9-3 c-1.1,0.5-2.2,0.8-3.3,0.9c1.2-0.7,2.1-1.9,2.6-3.2c-1.1,0.7-2.4,1.2-3.7,1.4c-2.2-2.3-5.9-2.5-8.2-0.3c-1.5,1.4-2.2,3.5-1.7,5.6 c-4.7-0.2-9-2.4-12-6.1c-1.5,2.7-0.8,6.1,1.8,7.8c-0.9,0-1.8-0.3-2.6-0.7c0,0,0,0,0,0.1c0,2.8,2,5.2,4.7,5.7 c-0.9,0.2-1.8,0.3-2.6,0.1c0.8,2.4,2.9,4,5.4,4c-2.1,1.6-4.6,2.5-7.2,2.5c-0.5,0-0.9,0-1.4-0.1 C1090.3-269.2,1093.4-268.3,1096.6-268.3\"></path></g></g><rect id=\"noskillwordshere\" x=\"517.3\" y=\"-368\" fill=\"none\" width=\"366.9\" height=\"410.8\"></rect></svg>"

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<div class=\"scene-content\">\n\n<div id=\"photo_container\">\n    <div class=\"photo1\">\n\n        <div class=\"polaroid\">\n            <img src=\"" + __webpack_require__(30) + "\" />\n        </div>\n\n        <div class=\"caption\">\n            <img src=\"" + __webpack_require__(31) + "\" />\n        </div>\n\n    </div>\n    <div class=\"photo2\">\n\n        <div class=\"polaroid\">\n            <img src=\"" + __webpack_require__(32) + "\" />\n        </div>\n\n        <div class=\"caption\">\n            <img src=\"" + __webpack_require__(33) + "\" />\n        </div>\n\n    </div>\n    <div class=\"photo3\">\n\n        <div class=\"polaroid\">\n            <img src=\"" + __webpack_require__(34) + "\" />\n        </div>\n\n        <div class=\"caption\">\n            <img src=\"" + __webpack_require__(35) + "\" />\n        </div>\n\n    </div>\n    <div class=\"photo4\">\n\n\n\n        <div class=\"polaroid\">\n            <img src=\"" + __webpack_require__(36) + "\" />\n        </div>\n\n        <div class=\"caption\">\n            <img src=\"" + __webpack_require__(37) + "\" />\n        </div>\n\n    </div>\n    <div class=\"photo5\">\n\n\n\n        <div class=\"polaroid\">\n            <img src=\"" + __webpack_require__(38) + "\" />\n        </div>\n\n        <div class=\"caption\">\n            <img src=\"" + __webpack_require__(1) + "\" />\n        </div>\n\n    </div>\n    <div class=\"photo6\">\n\n\n\n        <div class=\"polaroid\">\n            <img src=\"" + __webpack_require__(39) + "\" />\n        </div>\n\n        <div class=\"caption\">\n            <img src=\"" + __webpack_require__(1) + "\" />\n        </div>\n\n    </div>\n    <div class=\"photo7\">\n\n\n\n        <div class=\"polaroid\">\n            <img src=\"" + __webpack_require__(40) + "\" />\n        </div>\n\n        <div class=\"caption\">\n            <img src=\"" + __webpack_require__(1) + "\" />\n        </div>\n\n    </div>\n</div>\n\n<div id=\"skills_container\">\n\n</div>\n\n\n</div>\n\n<div class=\"svg\"></div>\n";

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "4620759a9c5f6da98afbf5ecb091f44f.jpg";

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "e37eb702b90d52502fca6bfb137e96f6.png";

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "44385e891026619f48685c07d704e947.jpg";

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "504f8b90d23ef37681af759338752c85.png";

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "2ea821aa6fc744734657634a26d3da10.jpg";

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "678cc39a2e1f8e190cb23e208666116b.png";

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "8dfd0ccc41d90dbb8d2ff7e27af69306.jpg";

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "9def03e1146848bf91cb83705bb79e2e.png";

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "8d754e9d5bf33bb92e9c5bccfc497c98.jpg";

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "f019f1a892572b5a8cdcedffc14cf939.jpg";

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "b48d9a3d7254e26db03c1aead184051f.jpg";

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (['Progressive disclosure', 'Red route', 'Stakeholder Interviews', 'Usability engineering', 'User-centred design', 'User journey', 'Lean UX', 'Iterative design', 'Information scent', 'The Double Diamond', 'Principles Over Standards', 'Accessibility First', 'Functional Programming', 'Offline Web Apps', 'Shadow DOM', 'Continuous integration', 'Test-driven development', 'Pair programming', 'Experience design', 'Module bundlers', 'React', 'Redux', 'Application architectures', 'ES2017', 'Jest', 'Visual regression testing', 'Snapshot testing', 'Type inference', 'RxJS', 'Focus on affordance', 'Forward thinking', 'Leadership', 'Mentoring', 'Internet of things', 'Async functions']);

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/*jshint -W054 */
(function (exports) {
  'use strict';

  // http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  function shuffle(array) {
    var currentIndex = array.length
      , temporaryValue
      , randomIndex
      ;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  exports.knuthShuffle = shuffle;
}('undefined' !== typeof exports && exports || 'undefined' !== typeof window && window || global));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable no-undefined */

var throttle = __webpack_require__(5);

/**
 * Debounce execution of a function. Debouncing, unlike throttling,
 * guarantees that a function is only executed a single time, either at the
 * very beginning of a series of calls, or at the very end.
 *
 * @param  {Number}   delay         A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
 * @param  {Boolean}  [atBegin]     Optional, defaults to false. If atBegin is false or unspecified, callback will only be executed `delay` milliseconds
 *                                  after the last debounced-function call. If atBegin is true, callback will be executed only at the first debounced-function call.
 *                                  (After the throttled-function has not been called for `delay` milliseconds, the internal counter is reset).
 * @param  {Function} callback      A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
 *                                  to `callback` when the debounced-function is executed.
 *
 * @return {Function} A new, debounced function.
 */
module.exports = function ( delay, atBegin, callback ) {
	return callback === undefined ? throttle(delay, atBegin, false) : throttle(delay, callback, atBegin !== false);
};


/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__skrollr__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__skrollr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__skrollr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__libs_skrollr_menu__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__libs_skrollr_menu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__libs_skrollr_menu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__libs_skrollr_stylesheets__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__libs_skrollr_stylesheets___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__libs_skrollr_stylesheets__);




/* harmony default export */ __webpack_exports__["a"] = (function () {
  __WEBPACK_IMPORTED_MODULE_2__libs_skrollr_stylesheets___default()(__WEBPACK_IMPORTED_MODULE_0__skrollr___default.a);

  __WEBPACK_IMPORTED_MODULE_1__libs_skrollr_menu___default()(__WEBPACK_IMPORTED_MODULE_0__skrollr___default.a);

  return __WEBPACK_IMPORTED_MODULE_0__skrollr___default.a;
});

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*!
 * skrollr core
 *
 * Alexander Prinzhorn - https://github.com/Prinzhorn/skrollr
 *
 * Free to use under terms of MIT license
 */
(function (window, document, undefined) {
	/*
 * Global api.
 */
	var skrollr = {
		get: function get() {
			return _instance;
		},

		//Main entry point.
		init: function init(options) {
			return _instance || new Skrollr(options);
		},

		VERSION: '0.6.26'
	};

	//Minify optimization.
	var hasProp = Object.prototype.hasOwnProperty;
	var Math = window.Math;
	var getStyle = window.getComputedStyle;

	//They will be filled when skrollr gets initialized.
	var documentElement = void 0;
	var body = void 0;

	var EVENT_TOUCHSTART = 'touchstart';
	var EVENT_TOUCHMOVE = 'touchmove';
	var EVENT_TOUCHCANCEL = 'touchcancel';
	var EVENT_TOUCHEND = 'touchend';

	var SKROLLABLE_CLASS = 'skrollable';
	var SKROLLABLE_BEFORE_CLASS = SKROLLABLE_CLASS + '-before';
	var SKROLLABLE_BETWEEN_CLASS = SKROLLABLE_CLASS + '-between';
	var SKROLLABLE_AFTER_CLASS = SKROLLABLE_CLASS + '-after';

	var SKROLLR_CLASS = 'skrollr';
	var NO_SKROLLR_CLASS = 'no-' + SKROLLR_CLASS;
	var SKROLLR_DESKTOP_CLASS = SKROLLR_CLASS + '-desktop';
	var SKROLLR_MOBILE_CLASS = SKROLLR_CLASS + '-mobile';

	var DEFAULT_EASING = 'linear';
	var DEFAULT_DURATION = 1000; //ms
	var DEFAULT_MOBILE_DECELERATION = 0.004; //pixel/ms²

	var DEFAULT_SMOOTH_SCROLLING_DURATION = 200; //ms

	var ANCHOR_START = 'start';
	var ANCHOR_END = 'end';
	var ANCHOR_CENTER = 'center';
	var ANCHOR_BOTTOM = 'bottom';

	//The property which will be added to the DOM element to hold the ID of the skrollable.
	var SKROLLABLE_ID_DOM_PROPERTY = '___skrollable_id';

	var rxTouchIgnoreTags = /^(?:input|textarea|button|select)$/i;

	var rxTrim = /^\s+|\s+$/g;

	//Find all data-attributes. data-[_constant]-[offset]-[anchor]-[anchor].
	var rxKeyframeAttribute = /^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/;

	var rxPropValue = /\s*(@?[\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi;

	//Easing function names follow the property in square brackets.
	var rxPropEasing = /^(@?[a-z\-]+)\[(\w+)\]$/;

	var rxCamelCase = /-([a-z0-9_])/g;
	var rxCamelCaseFn = function rxCamelCaseFn(str, letter) {
		return letter.toUpperCase();
	};

	//Numeric values with optional sign.
	var rxNumericValue = /[\-+]?[\d]*\.?[\d]+/g;

	//Used to replace occurences of {?} with a number.
	var rxInterpolateString = /\{\?\}/g;

	//Finds rgb(a) colors, which don't use the percentage notation.
	var rxRGBAIntegerColor = /rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g;

	//Finds all gradients.
	var rxGradient = /[a-z\-]+-gradient/g;

	//Vendor prefix. Will be set once skrollr gets initialized.
	var theCSSPrefix = '';
	var theDashedCSSPrefix = '';

	//Will be called once (when skrollr gets initialized).
	var detectCSSPrefix = function detectCSSPrefix() {
		//Only relevant prefixes. May be extended.
		//Could be dangerous if there will ever be a CSS property which actually starts with "ms". Don't hope so.
		var rxPrefixes = /^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;

		//Detect prefix for current browser by finding the first property using a prefix.
		if (!getStyle) {
			return;
		}

		var style = getStyle(body, null);

		for (var k in style) {
			//We check the key and if the key is a number, we check the value as well, because safari's getComputedStyle returns some weird array-like thingy.
			theCSSPrefix = k.match(rxPrefixes) || +k == k && style[k].match(rxPrefixes);

			if (theCSSPrefix) {
				break;
			}
		}

		//Did we even detect a prefix?
		if (!theCSSPrefix) {
			theCSSPrefix = theDashedCSSPrefix = '';

			return;
		}

		theCSSPrefix = theCSSPrefix[0];

		//We could have detected either a dashed prefix or this camelCaseish-inconsistent stuff.
		if (theCSSPrefix.slice(0, 1) === '-') {
			theDashedCSSPrefix = theCSSPrefix;

			//There's no logic behind these. Need a look up.
			theCSSPrefix = {
				'-webkit-': 'webkit',
				'-moz-': 'Moz',
				'-ms-': 'ms',
				'-o-': 'O'
			}[theCSSPrefix];
		} else {
			theDashedCSSPrefix = '-' + theCSSPrefix.toLowerCase() + '-';
		}
	};

	var polyfillRAF = function polyfillRAF() {
		var requestAnimFrame = window.requestAnimationFrame || window[theCSSPrefix.toLowerCase() + 'RequestAnimationFrame'];

		var lastTime = _now();

		if (_isMobile || !requestAnimFrame) {
			requestAnimFrame = function requestAnimFrame(callback) {
				//How long did it take to render?
				var deltaTime = _now() - lastTime;
				var delay = Math.max(0, 1000 / 60 - deltaTime);

				return window.setTimeout(function () {
					lastTime = _now();
					callback();
				}, delay);
			};
		}

		return requestAnimFrame;
	};

	var polyfillCAF = function polyfillCAF() {
		var cancelAnimFrame = window.cancelAnimationFrame || window[theCSSPrefix.toLowerCase() + 'CancelAnimationFrame'];

		if (_isMobile || !cancelAnimFrame) {
			cancelAnimFrame = function cancelAnimFrame(timeout) {
				return window.clearTimeout(timeout);
			};
		}

		return cancelAnimFrame;
	};

	//Built-in easing functions.
	var easings = {
		begin: function begin() {
			return 0;
		},
		end: function end() {
			return 1;
		},
		linear: function linear(p) {
			return p;
		},
		quadratic: function quadratic(p) {
			return p * p;
		},
		cubic: function cubic(p) {
			return p * p * p;
		},
		swing: function swing(p) {
			return -Math.cos(p * Math.PI) / 2 + 0.5;
		},
		sqrt: function sqrt(p) {
			return Math.sqrt(p);
		},
		outCubic: function outCubic(p) {
			return Math.pow(p - 1, 3) + 1;
		},

		//see https://www.desmos.com/calculator/tbr20s8vd2 for how I did this
		bounce: function bounce(p) {
			var a = void 0;

			if (p <= 0.5083) {
				a = 3;
			} else if (p <= 0.8489) {
				a = 9;
			} else if (p <= 0.96208) {
				a = 27;
			} else if (p <= 0.99981) {
				a = 91;
			} else {
				return 1;
			}

			return 1 - Math.abs(3 * Math.cos(p * a * 1.028) / a);
		}
	};

	/**
 * Constructor.
 */

	var Skrollr = function () {
		function Skrollr(options) {
			_classCallCheck(this, Skrollr);

			documentElement = document.documentElement;
			body = document.body;

			detectCSSPrefix();

			_instance = this;

			options = options || {};

			_constants = options.constants || {};

			//We allow defining custom easings or overwrite existing.
			if (options.easing) {
				for (var e in options.easing) {
					easings[e] = options.easing[e];
				}
			}

			_edgeStrategy = options.edgeStrategy || 'set';

			_listeners = {
				//Function to be called right before rendering.
				beforerender: options.beforerender,

				//Function to be called right after finishing rendering.
				render: options.render,

				//Function to be called whenever an element with the `data-emit-events` attribute passes a keyframe.
				keyframe: options.keyframe
			};

			//forceHeight is true by default
			_forceHeight = options.forceHeight !== false;

			if (_forceHeight) {
				_scale = options.scale || 1;
			}

			_mobileDeceleration = options.mobileDeceleration || DEFAULT_MOBILE_DECELERATION;

			_smoothScrollingEnabled = options.smoothScrolling !== false;
			_smoothScrollingDuration = options.smoothScrollingDuration || DEFAULT_SMOOTH_SCROLLING_DURATION;

			//Dummy object. Will be overwritten in the _render method when smooth scrolling is calculated.
			_smoothScrolling = {
				targetTop: _instance.getScrollTop()
			};

			//A custom check function may be passed.
			_isMobile = (options.mobileCheck || function () {
				return (/Android|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent || navigator.vendor || window.opera)
				);
			})();

			if (_isMobile) {
				_skrollrBody = document.getElementById('skrollr-body');

				//Detect 3d transform if there's a skrollr-body (only needed for #skrollr-body).
				if (_skrollrBody) {
					_detect3DTransforms();
				}

				_initMobile();
				_updateClass(documentElement, [SKROLLR_CLASS, SKROLLR_MOBILE_CLASS], [NO_SKROLLR_CLASS]);
			} else {
				_updateClass(documentElement, [SKROLLR_CLASS, SKROLLR_DESKTOP_CLASS], [NO_SKROLLR_CLASS]);
			}

			//Triggers parsing of elements and a first reflow.
			_instance.refresh();

			_addEvent(window, 'resize orientationchange', function () {
				var width = documentElement.clientWidth;
				var height = documentElement.clientHeight;

				//Only reflow if the size actually changed (#271).
				if (height !== _lastViewportHeight || width !== _lastViewportWidth) {
					_lastViewportHeight = height;
					_lastViewportWidth = width;

					_requestReflow = true;
				}
			});

			var requestAnimFrame = polyfillRAF();

			//Let's go.
			(function animloop() {
				_render();
				_animFrame = requestAnimFrame(animloop);
			})();

			return _instance;
		}

		/**
   * (Re)parses some or all elements.
   */


		_createClass(Skrollr, [{
			key: 'refresh',
			value: function refresh(elements) {
				var elementIndex = void 0;
				var elementsLength = void 0;
				var ignoreID = false;

				//Completely reparse anything without argument.
				if (elements === undefined) {
					//Ignore that some elements may already have a skrollable ID.
					ignoreID = true;

					_skrollables = [];
					_skrollableIdCounter = 0;

					elements = document.getElementsByTagName('*');
				} else if (elements.length === undefined) {
					//We also accept a single element as parameter.
					elements = [elements];
				}

				elementIndex = 0;
				elementsLength = elements.length;

				for (; elementIndex < elementsLength; elementIndex++) {
					var el = elements[elementIndex];
					var anchorTarget = el;
					var keyFrames = [];

					//If this particular element should be smooth scrolled.
					var smoothScrollThis = _smoothScrollingEnabled;

					//The edge strategy for this particular element.
					var edgeStrategy = _edgeStrategy;

					//If this particular element should emit keyframe events.
					var emitEvents = false;

					//If we're reseting the counter, remove any old element ids that may be hanging around.
					if (ignoreID && SKROLLABLE_ID_DOM_PROPERTY in el) {
						delete el[SKROLLABLE_ID_DOM_PROPERTY];
					}

					if (!el.attributes) {
						continue;
					}

					//Iterate over all attributes and search for key frame attributes.
					var attributeIndex = 0;
					var attributesLength = el.attributes.length;

					for (; attributeIndex < attributesLength; attributeIndex++) {
						var attr = el.attributes[attributeIndex];

						if (attr.name === 'data-anchor-target') {
							anchorTarget = document.querySelector(attr.value);

							if (anchorTarget === null) {
								throw 'Unable to find anchor target "' + attr.value + '"';
							}

							continue;
						}

						//Global smooth scrolling can be overridden by the element attribute.
						if (attr.name === 'data-smooth-scrolling') {
							smoothScrollThis = attr.value !== 'off';

							continue;
						}

						//Global edge strategy can be overridden by the element attribute.
						if (attr.name === 'data-edge-strategy') {
							edgeStrategy = attr.value;

							continue;
						}

						//Is this element tagged with the `data-emit-events` attribute?
						if (attr.name === 'data-emit-events') {
							emitEvents = true;

							continue;
						}

						var match = attr.name.match(rxKeyframeAttribute);

						if (match === null) {
							continue;
						}

						var kf = {
							props: attr.value,
							//Point back to the element as well.
							element: el,
							//The name of the event which this keyframe will fire, if emitEvents is
							eventType: attr.name.replace(rxCamelCase, rxCamelCaseFn)
						};

						keyFrames.push(kf);

						var constant = match[1];

						if (constant) {
							//Strip the underscore prefix.
							kf.constant = constant.substr(1);
						}

						//Get the key frame offset.
						var offset = match[2];

						//Is it a percentage offset?
						if (/p$/.test(offset)) {
							kf.isPercentage = true;
							kf.offset = (offset.slice(0, -1) | 0) / 100;
						} else {
							kf.offset = offset | 0;
						}

						var anchor1 = match[3];

						//If second anchor is not set, the first will be taken for both.
						var anchor2 = match[4] || anchor1;

						//"absolute" (or "classic") mode, where numbers mean absolute scroll offset.
						if (!anchor1 || anchor1 === ANCHOR_START || anchor1 === ANCHOR_END) {
							kf.mode = 'absolute';

							//data-end needs to be calculated after all key frames are known.
							if (anchor1 === ANCHOR_END) {
								kf.isEnd = true;
							} else if (!kf.isPercentage) {
								//For data-start we can already set the key frame w/o calculations.
								//#59: "scale" options should only affect absolute mode.
								kf.offset = kf.offset * _scale;
							}
						}
						//"relative" mode, where numbers are relative to anchors.
						else {
								kf.mode = 'relative';
								kf.anchors = [anchor1, anchor2];
							}
					}

					//Does this element have key frames?
					if (!keyFrames.length) {
						continue;
					}

					//Will hold the original style and class attributes before we controlled the element (see #80).
					var styleAttr = void 0;

					var classAttr = void 0;

					var id = void 0;

					if (!ignoreID && SKROLLABLE_ID_DOM_PROPERTY in el) {
						//We already have this element under control. Grab the corresponding skrollable id.
						id = el[SKROLLABLE_ID_DOM_PROPERTY];
						styleAttr = _skrollables[id].styleAttr;
						classAttr = _skrollables[id].classAttr;
					} else {
						//It's an unknown element. Asign it a new skrollable id.
						id = el[SKROLLABLE_ID_DOM_PROPERTY] = _skrollableIdCounter++;
						styleAttr = el.style.cssText;
						classAttr = _getClass(el);
					}

					_skrollables[id] = {
						element: el,
						styleAttr: styleAttr,
						classAttr: classAttr,
						anchorTarget: anchorTarget,
						keyFrames: keyFrames,
						smoothScrolling: smoothScrollThis,
						edgeStrategy: edgeStrategy,
						emitEvents: emitEvents,
						lastFrameIndex: -1
					};

					_updateClass(el, [SKROLLABLE_CLASS], []);
				}

				//Reflow for the first time.
				_reflow();

				//Now that we got all key frame numbers right, actually parse the properties.
				elementIndex = 0;
				elementsLength = elements.length;

				for (; elementIndex < elementsLength; elementIndex++) {
					var sk = _skrollables[elements[elementIndex][SKROLLABLE_ID_DOM_PROPERTY]];

					if (sk === undefined) {
						continue;
					}

					//Parse the property string to objects
					_parseProps(sk);

					//Fill key frames with missing properties from left and right
					_fillProps(sk);
				}

				return _instance;
			}

			/**
    * Transform "relative" mode to "absolute" mode.
    * That is, calculate anchor position and offset of element.
    */

		}, {
			key: 'relativeToAbsolute',
			value: function relativeToAbsolute(element, viewportAnchor, elementAnchor) {
				var viewportHeight = documentElement.clientHeight;
				var box = element.getBoundingClientRect();
				var absolute = box.top;

				//#100: IE doesn't supply "height" with getBoundingClientRect.
				var boxHeight = box.bottom - box.top;

				if (viewportAnchor === ANCHOR_BOTTOM) {
					absolute -= viewportHeight;
				} else if (viewportAnchor === ANCHOR_CENTER) {
					absolute -= viewportHeight / 2;
				}

				if (elementAnchor === ANCHOR_BOTTOM) {
					absolute += boxHeight;
				} else if (elementAnchor === ANCHOR_CENTER) {
					absolute += boxHeight / 2;
				}

				//Compensate scrolling since getBoundingClientRect is relative to viewport.
				absolute += _instance.getScrollTop();

				return absolute + 0.5 | 0;
			}

			/**
    * Animates scroll top to new position.
    */

		}, {
			key: 'animateTo',
			value: function animateTo(top) {
				var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

				var now = _now();
				var scrollTop = _instance.getScrollTop();

				//Setting this to a new value will automatically cause the current animation to stop, if any.
				_scrollAnimation = {
					startTop: scrollTop,
					topDiff: top - scrollTop,
					targetTop: top,
					duration: options.duration || DEFAULT_DURATION,
					startTime: now,
					endTime: now + (options.duration || DEFAULT_DURATION),
					easing: easings[options.easing || DEFAULT_EASING],
					done: options.done
				};

				//Don't queue the animation if there's nothing to animate.
				if (!_scrollAnimation.topDiff) {
					if (_scrollAnimation.done) {
						_scrollAnimation.done.call(_instance, false);
					}

					_scrollAnimation = undefined;
				}

				return _instance;
			}

			/**
    * Stops animateTo animation.
    */

		}, {
			key: 'stopAnimateTo',
			value: function stopAnimateTo() {
				if (_scrollAnimation && _scrollAnimation.done) {
					_scrollAnimation.done.call(_instance, true);
				}

				_scrollAnimation = undefined;
			}

			/**
    * Returns if an animation caused by animateTo is currently running.
    */

		}, {
			key: 'isAnimatingTo',
			value: function isAnimatingTo() {
				return !!_scrollAnimation;
			}
		}, {
			key: 'isMobile',
			value: function isMobile() {
				return _isMobile;
			}
		}, {
			key: 'setScrollTop',
			value: function setScrollTop(top, force) {
				_forceRender = force === true;

				if (_isMobile) {
					_mobileOffset = Math.min(Math.max(top, 0), _maxKeyFrame);
				} else {
					window.scrollTo(0, top);
				}

				return _instance;
			}
		}, {
			key: 'getScrollTop',
			value: function getScrollTop() {
				if (_isMobile) {
					return _mobileOffset;
				} else {
					return window.pageYOffset || documentElement.scrollTop || body.scrollTop || 0;
				}
			}
		}, {
			key: 'getMaxScrollTop',
			value: function getMaxScrollTop() {
				return _maxKeyFrame;
			}
		}, {
			key: 'on',
			value: function on(name, fn) {
				_listeners[name] = fn;

				return _instance;
			}
		}, {
			key: 'off',
			value: function off(name) {
				delete _listeners[name];

				return _instance;
			}
		}, {
			key: 'destroy',
			value: function destroy() {
				var cancelAnimFrame = polyfillCAF();
				cancelAnimFrame(_animFrame);
				_removeAllEvents();

				_updateClass(documentElement, [NO_SKROLLR_CLASS], [SKROLLR_CLASS, SKROLLR_DESKTOP_CLASS, SKROLLR_MOBILE_CLASS]);

				var skrollableIndex = 0;
				var skrollablesLength = _skrollables.length;

				for (; skrollableIndex < skrollablesLength; skrollableIndex++) {
					_reset(_skrollables[skrollableIndex].element);
				}

				documentElement.style.overflow = body.style.overflow = '';
				documentElement.style.height = body.style.height = '';

				if (_skrollrBody) {
					skrollr.setStyle(_skrollrBody, 'transform', 'none');
				}

				_instance = undefined;
				_skrollrBody = undefined;
				_listeners = undefined;
				_forceHeight = undefined;
				_maxKeyFrame = 0;
				_scale = 1;
				_constants = undefined;
				_mobileDeceleration = undefined;
				_direction = 'down';
				_lastTop = -1;
				_lastViewportWidth = 0;
				_lastViewportHeight = 0;
				_requestReflow = false;
				_scrollAnimation = undefined;
				_smoothScrollingEnabled = undefined;
				_smoothScrollingDuration = undefined;
				_smoothScrolling = undefined;
				_forceRender = undefined;
				_skrollableIdCounter = 0;
				_edgeStrategy = undefined;
				_isMobile = false;
				_mobileOffset = 0;
				_translateZ = undefined;
			}
		}]);

		return Skrollr;
	}();

	var _initMobile = function _initMobile() {
		var initialElement = void 0;
		var initialTouchY = void 0;
		var initialTouchX = void 0;
		var currentElement = void 0;
		var currentTouchY = void 0;
		var currentTouchX = void 0;
		var lastTouchY = void 0;
		var deltaY = void 0;

		var initialTouchTime = void 0;
		var currentTouchTime = void 0;
		var lastTouchTime = void 0;
		var deltaTime = void 0;

		_addEvent(documentElement, [EVENT_TOUCHSTART, EVENT_TOUCHMOVE, EVENT_TOUCHCANCEL, EVENT_TOUCHEND].join(' '), function (e) {
			var touch = e.changedTouches[0];

			currentElement = e.target;

			//We don't want text nodes.
			while (currentElement.nodeType === 3) {
				currentElement = currentElement.parentNode;
			}

			currentTouchY = touch.clientY;
			currentTouchX = touch.clientX;
			currentTouchTime = e.timeStamp;

			if (!rxTouchIgnoreTags.test(currentElement.tagName)) {
				e.preventDefault();
			}

			switch (e.type) {
				case EVENT_TOUCHSTART:
					//The last element we tapped on.
					if (initialElement) {
						initialElement.blur();
					}

					_instance.stopAnimateTo();

					initialElement = currentElement;

					initialTouchY = lastTouchY = currentTouchY;
					initialTouchX = currentTouchX;
					initialTouchTime = currentTouchTime;

					break;
				case EVENT_TOUCHMOVE:
					//Prevent default event on touchIgnore elements in case they don't have focus yet.
					if (rxTouchIgnoreTags.test(currentElement.tagName) && document.activeElement !== currentElement) {
						e.preventDefault();
					}

					deltaY = currentTouchY - lastTouchY;
					deltaTime = currentTouchTime - lastTouchTime;

					_instance.setScrollTop(_mobileOffset - deltaY, true);

					lastTouchY = currentTouchY;
					lastTouchTime = currentTouchTime;
					break;
				default:
				case EVENT_TOUCHCANCEL:
				case EVENT_TOUCHEND:
					var distanceY = initialTouchY - currentTouchY;
					var distanceX = initialTouchX - currentTouchX;
					var distance2 = distanceX * distanceX + distanceY * distanceY;

					//Check if it was more like a tap (moved less than 7px).
					if (distance2 < 49) {
						if (!rxTouchIgnoreTags.test(initialElement.tagName)) {
							initialElement.focus();

							//It was a tap, click the element.
							var clickEvent = document.createEvent('MouseEvents');
							clickEvent.initMouseEvent('click', true, true, e.view, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, 0, null);
							initialElement.dispatchEvent(clickEvent);
						}

						return;
					}

					initialElement = undefined;

					var speed = deltaY / deltaTime;

					//Cap speed at 3 pixel/ms.
					speed = Math.max(Math.min(speed, 3), -3);

					var duration = Math.abs(speed / _mobileDeceleration);
					var targetOffset = speed * duration + 0.5 * _mobileDeceleration * duration * duration;
					var targetTop = _instance.getScrollTop() - targetOffset;

					//Relative duration change for when scrolling above bounds.
					var targetRatio = 0;

					//Change duration proportionally when scrolling would leave bounds.
					if (targetTop > _maxKeyFrame) {
						targetRatio = (_maxKeyFrame - targetTop) / targetOffset;

						targetTop = _maxKeyFrame;
					} else if (targetTop < 0) {
						targetRatio = -targetTop / targetOffset;

						targetTop = 0;
					}

					duration = duration * (1 - targetRatio);

					_instance.animateTo(targetTop + 0.5 | 0, { easing: 'outCubic', duration: duration });
					break;
			}
		});

		//Just in case there has already been some native scrolling, reset it.
		window.scrollTo(0, 0);
		documentElement.style.overflow = body.style.overflow = 'hidden';
	};

	/**
 * Updates key frames which depend on others / need to be updated on resize.
 * That is "end" in "absolute" mode and all key frames in "relative" mode.
 * Also handles constants, because they may change on resize.
 */
	var _updateDependentKeyFrames = function _updateDependentKeyFrames() {
		var viewportHeight = documentElement.clientHeight;
		var processedConstants = _processConstants();
		var skrollable = void 0;
		var element = void 0;
		var anchorTarget = void 0;
		var keyFrames = void 0;
		var keyFrameIndex = void 0;
		var keyFramesLength = void 0;
		var kf = void 0;
		var skrollableIndex = void 0;
		var skrollablesLength = void 0;
		var offset = void 0;
		var constantValue = void 0;

		//First process all relative-mode elements and find the max key frame.
		skrollableIndex = 0;
		skrollablesLength = _skrollables.length;

		for (; skrollableIndex < skrollablesLength; skrollableIndex++) {
			skrollable = _skrollables[skrollableIndex];
			element = skrollable.element;
			anchorTarget = skrollable.anchorTarget;
			keyFrames = skrollable.keyFrames;

			keyFrameIndex = 0;
			keyFramesLength = keyFrames.length;

			for (; keyFrameIndex < keyFramesLength; keyFrameIndex++) {
				kf = keyFrames[keyFrameIndex];

				offset = kf.offset;
				constantValue = processedConstants[kf.constant] || 0;

				kf.frame = offset;

				if (kf.isPercentage) {
					//Convert the offset to percentage of the viewport height.
					offset = offset * viewportHeight;

					//Absolute + percentage mode.
					kf.frame = offset;
				}

				if (kf.mode === 'relative') {
					_reset(element);

					kf.frame = _instance.relativeToAbsolute(anchorTarget, kf.anchors[0], kf.anchors[1]) - offset;

					_reset(element, true);
				}

				kf.frame += constantValue;

				//Only search for max key frame when forceHeight is enabled.
				if (_forceHeight) {
					//Find the max key frame, but don't use one of the data-end ones for comparison.
					if (!kf.isEnd && kf.frame > _maxKeyFrame) {
						_maxKeyFrame = kf.frame;
					}
				}
			}
		}

		//#133: The document can be larger than the maxKeyFrame we found.
		_maxKeyFrame = Math.max(_maxKeyFrame, _getDocumentHeight());

		//Now process all data-end keyframes.
		skrollableIndex = 0;
		skrollablesLength = _skrollables.length;

		for (; skrollableIndex < skrollablesLength; skrollableIndex++) {
			skrollable = _skrollables[skrollableIndex];
			keyFrames = skrollable.keyFrames;

			keyFrameIndex = 0;
			keyFramesLength = keyFrames.length;

			for (; keyFrameIndex < keyFramesLength; keyFrameIndex++) {
				kf = keyFrames[keyFrameIndex];

				constantValue = processedConstants[kf.constant] || 0;

				if (kf.isEnd) {
					kf.frame = _maxKeyFrame - kf.offset + constantValue;
				}
			}

			skrollable.keyFrames.sort(_keyFrameComparator);
		}
	};

	/**
 * Calculates and sets the style properties for the element at the given frame.
 * @param fakeFrame The frame to render at when smooth scrolling is enabled.
 * @param actualFrame The actual frame we are at.
 */
	var _calcSteps = function _calcSteps(fakeFrame, actualFrame) {
		//Iterate over all skrollables.
		var skrollableIndex = 0;
		var skrollablesLength = _skrollables.length;

		for (; skrollableIndex < skrollablesLength; skrollableIndex++) {
			var skrollable = _skrollables[skrollableIndex];
			var element = skrollable.element;
			var frame = skrollable.smoothScrolling ? fakeFrame : actualFrame;
			var frames = skrollable.keyFrames;
			var framesLength = frames.length;
			var firstFrame = frames[0];
			var lastFrame = frames[frames.length - 1];
			var beforeFirst = frame < firstFrame.frame;
			var afterLast = frame > lastFrame.frame;
			var firstOrLastFrame = beforeFirst ? firstFrame : lastFrame;
			var emitEvents = skrollable.emitEvents;
			var lastFrameIndex = skrollable.lastFrameIndex;
			var key = void 0;
			var value = void 0;

			//If we are before/after the first/last frame, set the styles according to the given edge strategy.
			if (beforeFirst || afterLast) {
				//Check if we already handled this edge case last time.
				//Note: using setScrollTop it's possible that we jumped from one edge to the other.
				if (beforeFirst && skrollable.edge === -1 || afterLast && skrollable.edge === 1) {
					continue;
				}

				//Add the skrollr-before or -after class.
				if (beforeFirst) {
					_updateClass(element, [SKROLLABLE_BEFORE_CLASS], [SKROLLABLE_AFTER_CLASS, SKROLLABLE_BETWEEN_CLASS]);

					//This handles the special case where we exit the first keyframe.
					if (emitEvents && lastFrameIndex > -1) {
						_emitEvent(element, firstFrame.eventType, _direction);
						skrollable.lastFrameIndex = -1;
					}
				} else {
					_updateClass(element, [SKROLLABLE_AFTER_CLASS], [SKROLLABLE_BEFORE_CLASS, SKROLLABLE_BETWEEN_CLASS]);

					//This handles the special case where we exit the last keyframe.
					if (emitEvents && lastFrameIndex < framesLength) {
						_emitEvent(element, lastFrame.eventType, _direction);
						skrollable.lastFrameIndex = framesLength;
					}
				}

				//Remember that we handled the edge case (before/after the first/last keyframe).
				skrollable.edge = beforeFirst ? -1 : 1;

				switch (skrollable.edgeStrategy) {
					case 'reset':
						_reset(element);
						continue;
					case 'ease':
						//Handle this case like it would be exactly at first/last keyframe and just pass it on.
						frame = firstOrLastFrame.frame;
						break;
					default:
					case 'set':
						var props = firstOrLastFrame.props;

						for (key in props) {
							if (hasProp.call(props, key)) {
								value = _interpolateString(props[key].value);

								//Set style or attribute.
								if (key.indexOf('@') === 0) {
									element.setAttribute(key.substr(1), value);
								} else {
									skrollr.setStyle(element, key, value);
								}
							}
						}

						continue;
				}
			} else {
				//Did we handle an edge last time?
				if (skrollable.edge !== 0) {
					_updateClass(element, [SKROLLABLE_CLASS, SKROLLABLE_BETWEEN_CLASS], [SKROLLABLE_BEFORE_CLASS, SKROLLABLE_AFTER_CLASS]);
					skrollable.edge = 0;
				}
			}

			//Find out between which two key frames we are right now.
			var keyFrameIndex = 0;

			for (; keyFrameIndex < framesLength - 1; keyFrameIndex++) {
				if (frame >= frames[keyFrameIndex].frame && frame <= frames[keyFrameIndex + 1].frame) {
					var left = frames[keyFrameIndex];
					var right = frames[keyFrameIndex + 1];

					for (key in left.props) {
						if (hasProp.call(left.props, key)) {
							var progress = (frame - left.frame) / (right.frame - left.frame);

							//Transform the current progress using the given easing function.
							progress = left.props[key].easing(progress);

							//Interpolate between the two values
							value = _calcInterpolation(left.props[key].value, right.props[key].value, progress);

							value = _interpolateString(value);

							//Set style or attribute.
							if (key.indexOf('@') === 0) {
								element.setAttribute(key.substr(1), value);
							} else {
								skrollr.setStyle(element, key, value);
							}
						}
					}

					//Are events enabled on this element?
					//This code handles the usual cases of scrolling through different keyframes.
					//The special cases of before first and after last keyframe are handled above.
					if (emitEvents) {
						//Did we pass a new keyframe?
						if (lastFrameIndex !== keyFrameIndex) {
							if (_direction === 'down') {
								_emitEvent(element, left.eventType, _direction);
							} else {
								_emitEvent(element, right.eventType, _direction);
							}

							skrollable.lastFrameIndex = keyFrameIndex;
						}
					}

					break;
				}
			}
		}
	};

	/**
 * Renders all elements.
 */
	var _render = function _render() {
		if (_requestReflow) {
			_requestReflow = false;
			_reflow();
		}

		//We may render something else than the actual scrollbar position.
		var renderTop = _instance.getScrollTop();

		//If there's an animation, which ends in current render call, call the callback after rendering.
		var afterAnimationCallback = void 0;
		var now = _now();
		var progress = void 0;

		//Before actually rendering handle the scroll animation, if any.
		if (_scrollAnimation) {
			//It's over
			if (now >= _scrollAnimation.endTime) {
				renderTop = _scrollAnimation.targetTop;
				afterAnimationCallback = _scrollAnimation.done;
				_scrollAnimation = undefined;
			} else {
				//Map the current progress to the new progress using given easing function.
				progress = _scrollAnimation.easing((now - _scrollAnimation.startTime) / _scrollAnimation.duration);

				renderTop = _scrollAnimation.startTop + progress * _scrollAnimation.topDiff | 0;
			}

			_instance.setScrollTop(renderTop, true);
		}
		//Smooth scrolling only if there's no animation running and if we're not forcing the rendering.
		else if (!_forceRender) {
				var smoothScrollingDiff = _smoothScrolling.targetTop - renderTop;

				//The user scrolled, start new smooth scrolling.
				if (smoothScrollingDiff) {
					_smoothScrolling = {
						startTop: _lastTop,
						topDiff: renderTop - _lastTop,
						targetTop: renderTop,
						startTime: _lastRenderCall,
						endTime: _lastRenderCall + _smoothScrollingDuration
					};
				}

				//Interpolate the internal scroll position (not the actual scrollbar).
				if (now <= _smoothScrolling.endTime) {
					//Map the current progress to the new progress using easing function.
					progress = easings.sqrt((now - _smoothScrolling.startTime) / _smoothScrollingDuration);

					renderTop = _smoothScrolling.startTop + progress * _smoothScrolling.topDiff | 0;
				}
			}

		//That's were we actually "scroll" on mobile.
		if (_isMobile && _skrollrBody) {
			//Set the transform ("scroll it").
			skrollr.setStyle(_skrollrBody, 'transform', 'translate(0, ' + -_mobileOffset + 'px) ' + _translateZ);
		}

		//Did the scroll position even change?
		if (_forceRender || _lastTop !== renderTop) {
			//Remember in which direction are we scrolling?
			_direction = renderTop > _lastTop ? 'down' : renderTop < _lastTop ? 'up' : _direction;

			_forceRender = false;

			var listenerParams = {
				curTop: renderTop,
				lastTop: _lastTop,
				maxTop: _maxKeyFrame,
				direction: _direction
			};

			//Tell the listener we are about to render.
			var continueRendering = _listeners.beforerender && _listeners.beforerender.call(_instance, listenerParams);

			//The beforerender listener function is able the cancel rendering.
			if (continueRendering !== false) {
				//Now actually interpolate all the styles.
				_calcSteps(renderTop, _instance.getScrollTop());

				//Remember when we last rendered.
				_lastTop = renderTop;

				if (_listeners.render) {
					_listeners.render.call(_instance, listenerParams);
				}
			}

			if (afterAnimationCallback) {
				afterAnimationCallback.call(_instance, false);
			}
		}

		_lastRenderCall = now;
	};

	/**
 * Parses the properties for each key frame of the given skrollable.
 */
	var _parseProps = function _parseProps(_ref) {
		var keyFrames = _ref.keyFrames;

		//Iterate over all key frames
		var keyFrameIndex = 0;
		var keyFramesLength = keyFrames.length;

		for (; keyFrameIndex < keyFramesLength; keyFrameIndex++) {
			var frame = keyFrames[keyFrameIndex];
			var easing = void 0;
			var value = void 0;
			var prop = void 0;
			var props = {};

			var match = void 0;

			while ((match = rxPropValue.exec(frame.props)) !== null) {
				prop = match[1];
				value = match[2];

				easing = prop.match(rxPropEasing);

				//Is there an easing specified for this prop?
				if (easing !== null) {
					prop = easing[1];
					easing = easing[2];
				} else {
					easing = DEFAULT_EASING;
				}

				//Exclamation point at first position forces the value to be taken literal.
				value = value.indexOf('!') ? _parseProp(value) : [value.slice(1)];

				//Save the prop for this key frame with his value and easing function
				props[prop] = {
					value: value,
					easing: easings[easing]
				};
			}

			frame.props = props;
		}
	};

	/**
 * Parses a value extracting numeric values and generating a format string
 * for later interpolation of the new values in old string.
 *
 * @param val The CSS value to be parsed.
 * @return Something like ["rgba(?%,?%, ?%,?)", 100, 50, 0, .7]
 * where the first element is the format string later used
 * and all following elements are the numeric value.
 */
	var _parseProp = function _parseProp(val) {
		var numbers = [];

		//One special case, where floats don't work.
		//We replace all occurences of rgba colors
		//which don't use percentage notation with the percentage notation.
		rxRGBAIntegerColor.lastIndex = 0;
		val = val.replace(rxRGBAIntegerColor, function (rgba) {
			return rgba.replace(rxNumericValue, function (n) {
				return n / 255 * 100 + '%';
			});
		});

		//Handle prefixing of "gradient" values.
		//For now only the prefixed value will be set. Unprefixed isn't supported anyway.
		if (theDashedCSSPrefix) {
			rxGradient.lastIndex = 0;
			val = val.replace(rxGradient, function (s) {
				return theDashedCSSPrefix + s;
			});
		}

		//Now parse ANY number inside this string and create a format string.
		val = val.replace(rxNumericValue, function (n) {
			numbers.push(+n);
			return '{?}';
		});

		//Add the formatstring as first value.
		numbers.unshift(val);

		return numbers;
	};

	/**
 * Fills the key frames with missing left and right hand properties.
 * If key frame 1 has property X and key frame 2 is missing X,
 * but key frame 3 has X again, then we need to assign X to key frame 2 too.
 *
 * @param sk A skrollable.
 */
	var _fillProps = function _fillProps(_ref2) {
		var keyFrames = _ref2.keyFrames;

		//Will collect the properties key frame by key frame
		var propList = {};
		var keyFrameIndex = void 0;
		var keyFramesLength = void 0;

		//Iterate over all key frames from left to right
		keyFrameIndex = 0;
		keyFramesLength = keyFrames.length;

		for (; keyFrameIndex < keyFramesLength; keyFrameIndex++) {
			_fillPropForFrame(keyFrames[keyFrameIndex], propList);
		}

		//Now do the same from right to fill the last gaps

		propList = {};

		//Iterate over all key frames from right to left
		keyFrameIndex = keyFrames.length - 1;

		for (; keyFrameIndex >= 0; keyFrameIndex--) {
			_fillPropForFrame(keyFrames[keyFrameIndex], propList);
		}
	};

	var _fillPropForFrame = function _fillPropForFrame(_ref3, propList) {
		var props = _ref3.props;

		var key = void 0;

		//For each key frame iterate over all right hand properties and assign them,
		//but only if the current key frame doesn't have the property by itself
		for (key in propList) {
			//The current frame misses this property, so assign it.
			if (!hasProp.call(props, key)) {
				props[key] = propList[key];
			}
		}

		//Iterate over all props of the current frame and collect them
		for (key in props) {
			propList[key] = props[key];
		}
	};

	/**
 * Calculates the new values for two given values array.
 */
	var _calcInterpolation = function _calcInterpolation(val1, val2, progress) {
		var valueIndex = void 0;
		var val1Length = val1.length;

		//They both need to have the same length
		if (val1Length !== val2.length) {
			throw 'Can\'t interpolate between "' + val1[0] + '" and "' + val2[0] + '"';
		}

		//Add the format string as first element.
		var interpolated = [val1[0]];

		valueIndex = 1;

		for (; valueIndex < val1Length; valueIndex++) {
			//That's the line where the two numbers are actually interpolated.
			interpolated[valueIndex] = val1[valueIndex] + (val2[valueIndex] - val1[valueIndex]) * progress;
		}

		return interpolated;
	};

	/**
 * Interpolates the numeric values into the format string.
 */
	var _interpolateString = function _interpolateString(val) {
		var valueIndex = 1;

		rxInterpolateString.lastIndex = 0;

		return val[0].replace(rxInterpolateString, function () {
			return val[valueIndex++];
		});
	};

	/**
 * Resets the class and style attribute to what it was before skrollr manipulated the element.
 * Also remembers the values it had before reseting, in order to undo the reset.
 */
	var _reset = function _reset(elements, undo) {
		//We accept a single element or an array of elements.
		elements = [].concat(elements);

		var skrollable = void 0;
		var element = void 0;
		var elementsIndex = 0;
		var elementsLength = elements.length;

		for (; elementsIndex < elementsLength; elementsIndex++) {
			element = elements[elementsIndex];
			skrollable = _skrollables[element[SKROLLABLE_ID_DOM_PROPERTY]];

			//Couldn't find the skrollable for this DOM element.
			if (!skrollable) {
				continue;
			}

			if (undo) {
				//Reset class and style to the "dirty" (set by skrollr) values.
				element.style.cssText = skrollable.dirtyStyleAttr;
				_updateClass(element, skrollable.dirtyClassAttr);
			} else {
				//Remember the "dirty" (set by skrollr) class and style.
				skrollable.dirtyStyleAttr = element.style.cssText;
				skrollable.dirtyClassAttr = _getClass(element);

				//Reset class and style to what it originally was.
				element.style.cssText = skrollable.styleAttr;
				_updateClass(element, skrollable.classAttr);
			}
		}
	};

	/**
 * Detects support for 3d transforms by applying it to the skrollr-body.
 */
	var _detect3DTransforms = function _detect3DTransforms() {
		_translateZ = 'translateZ(0)';
		skrollr.setStyle(_skrollrBody, 'transform', _translateZ);

		var computedStyle = getStyle(_skrollrBody);
		var computedTransform = computedStyle.getPropertyValue('transform');
		var computedTransformWithPrefix = computedStyle.getPropertyValue(theDashedCSSPrefix + 'transform');
		var has3D = computedTransform && computedTransform !== 'none' || computedTransformWithPrefix && computedTransformWithPrefix !== 'none';

		if (!has3D) {
			_translateZ = '';
		}
	};

	/**
 * Set the CSS property on the given element. Sets prefixed properties as well.
 */
	skrollr.setStyle = function (el, prop, val) {
		var style = el.style;

		//Camel case.
		prop = prop.replace(rxCamelCase, rxCamelCaseFn).replace('-', '');

		//Make sure z-index gets a <integer>.
		//This is the only <integer> case we need to handle.
		if (prop === 'zIndex') {
			if (isNaN(val)) {
				//If it's not a number, don't touch it.
				//It could for example be "auto" (#351).
				style[prop] = val;
			} else {
				//Floor the number.
				style[prop] = '' + (val | 0);
			}
		}
		//#64: "float" can't be set across browsers. Needs to use "cssFloat" for all except IE.
		else if (prop === 'float') {
				style.styleFloat = style.cssFloat = val;
			} else {
				//Need try-catch for old IE.
				try {
					//Set prefixed property if there's a prefix.
					if (theCSSPrefix) {
						style[theCSSPrefix + prop.slice(0, 1).toUpperCase() + prop.slice(1)] = val;
					}

					//Set unprefixed.
					style[prop] = val;
				} catch (ignore) {}
			}
	};

	/**
 * Cross browser event handling.
 */
	var _addEvent = skrollr.addEvent = function (element, names, callback) {
		var intermediate = function intermediate() {
			var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.event;

			if (!e.target) {
				e.target = e.srcElement;
			}

			if (!e.preventDefault) {
				e.preventDefault = function () {
					e.returnValue = false;
					e.defaultPrevented = true;
				};
			}

			return callback.call(this, e);
		};

		names = names.split(' ');

		var name = void 0;
		var nameCounter = 0;
		var namesLength = names.length;

		for (; nameCounter < namesLength; nameCounter++) {
			name = names[nameCounter];

			if (element.addEventListener) {
				element.addEventListener(name, callback, false);
			} else {
				element.attachEvent('on' + name, intermediate);
			}

			//Remember the events to be able to flush them later.
			_registeredEvents.push({
				element: element,
				name: name,
				listener: callback
			});
		}
	};

	var _removeEvent = skrollr.removeEvent = function (element, names, callback) {
		names = names.split(' ');

		var nameCounter = 0;
		var namesLength = names.length;

		for (; nameCounter < namesLength; nameCounter++) {
			if (element.removeEventListener) {
				element.removeEventListener(names[nameCounter], callback, false);
			} else {
				element.detachEvent('on' + names[nameCounter], callback);
			}
		}
	};

	var _removeAllEvents = function _removeAllEvents() {
		var eventData = void 0;
		var eventCounter = 0;
		var eventsLength = _registeredEvents.length;

		for (; eventCounter < eventsLength; eventCounter++) {
			eventData = _registeredEvents[eventCounter];

			_removeEvent(eventData.element, eventData.name, eventData.listener);
		}

		_registeredEvents = [];
	};

	var _emitEvent = function _emitEvent(element, name, direction) {
		if (_listeners.keyframe) {
			_listeners.keyframe.call(_instance, element, name, direction);
		}
	};

	var _reflow = function _reflow() {
		var pos = _instance.getScrollTop();

		//Will be recalculated by _updateDependentKeyFrames.
		_maxKeyFrame = 0;

		if (_forceHeight && !_isMobile) {
			//un-"force" the height to not mess with the calculations in _updateDependentKeyFrames (#216).
			body.style.height = '';
		}

		_updateDependentKeyFrames();

		if (_forceHeight && !_isMobile) {
			//"force" the height.
			body.style.height = _maxKeyFrame + documentElement.clientHeight + 'px';
		}

		//The scroll offset may now be larger than needed (on desktop the browser/os prevents scrolling farther than the bottom).
		if (_isMobile) {
			_instance.setScrollTop(Math.min(_instance.getScrollTop(), _maxKeyFrame));
		} else {
			//Remember and reset the scroll pos (#217).
			_instance.setScrollTop(pos, true);
		}

		_forceRender = true;
	};

	/*
 * Returns a copy of the constants object where all functions and strings have been evaluated.
 */
	var _processConstants = function _processConstants() {
		var viewportHeight = documentElement.clientHeight;
		var copy = {};
		var prop = void 0;
		var value = void 0;

		for (prop in _constants) {
			value = _constants[prop];

			if (typeof value === 'function') {
				value = value.call(_instance);
			}
			//Percentage offset.
			else if (/p$/.test(value)) {
					value = value.slice(0, -1) / 100 * viewportHeight;
				}

			copy[prop] = value;
		}

		return copy;
	};

	/*
 * Returns the height of the document.
 */
	var _getDocumentHeight = function _getDocumentHeight() {
		var skrollrBodyHeight = _skrollrBody && _skrollrBody.offsetHeight || 0;
		var bodyHeight = Math.max(skrollrBodyHeight, body.scrollHeight, body.offsetHeight, documentElement.scrollHeight, documentElement.offsetHeight, documentElement.clientHeight);

		return bodyHeight - documentElement.clientHeight;
	};

	/**
 * Returns a string of space separated classnames for the current element.
 * Works with SVG as well.
 */
	var _getClass = function _getClass(element) {
		var prop = 'className';

		//SVG support by using className.baseVal instead of just className.
		if (window.SVGElement && element instanceof window.SVGElement) {
			element = element[prop];
			prop = 'baseVal';
		}

		return element[prop];
	};

	/**
 * Adds and removes a CSS classes.
 * Works with SVG as well.
 * add and remove are arrays of strings,
 * or if remove is ommited add is a string and overwrites all classes.
 */
	var _updateClass = function _updateClass(element, add, remove) {
		var prop = 'className';

		//SVG support by using className.baseVal instead of just className.
		if (window.SVGElement && element instanceof window.SVGElement) {
			element = element[prop];
			prop = 'baseVal';
		}

		//When remove is ommited, we want to overwrite/set the classes.
		if (remove === undefined) {
			element[prop] = add;
			return;
		}

		//Cache current classes. We will work on a string before passing back to DOM.
		var val = element[prop];

		//All classes to be removed.
		var classRemoveIndex = 0;
		var removeLength = remove.length;

		for (; classRemoveIndex < removeLength; classRemoveIndex++) {
			val = _untrim(val).replace(_untrim(remove[classRemoveIndex]), ' ');
		}

		val = _trim(val);

		//All classes to be added.
		var classAddIndex = 0;
		var addLength = add.length;

		for (; classAddIndex < addLength; classAddIndex++) {
			//Only add if el not already has class.
			if (!_untrim(val).includes(_untrim(add[classAddIndex]))) {
				val += ' ' + add[classAddIndex];
			}
		}

		element[prop] = _trim(val);
	};

	var _trim = function _trim(a) {
		return a.replace(rxTrim, '');
	};

	/**
 * Adds a space before and after the string.
 */
	var _untrim = function _untrim(a) {
		return ' ' + a + ' ';
	};

	var _now = Date.now || function () {
		return +new Date();
	};

	var _keyFrameComparator = function _keyFrameComparator(_ref4, _ref5) {
		var frame = _ref4.frame;
		var frameB = _ref5.frame;
		return frame - frameB;
	};

	/*
 * Private variables.
 */

	//Singleton
	var _instance;

	/*
 A list of all elements which should be animated associated with their the metadata.
 Exmaple skrollable with two key frames animating from 100px width to 20px:
 	skrollable = {
 	element: <the DOM element>,
 	styleAttr: <style attribute of the element before skrollr>,
 	classAttr: <class attribute of the element before skrollr>,
 	keyFrames: [
 		{
 			frame: 100,
 			props: {
 				width: {
 					value: ['{?}px', 100],
 					easing: <reference to easing function>
 				}
 			},
 			mode: "absolute"
 		},
 		{
 			frame: 200,
 			props: {
 				width: {
 					value: ['{?}px', 20],
 					easing: <reference to easing function>
 				}
 			},
 			mode: "absolute"
 		}
 	]
 };
 */
	var _skrollables;

	var _skrollrBody;

	var _listeners;
	var _forceHeight;
	var _maxKeyFrame = 0;

	var _scale = 1;
	var _constants;

	var _mobileDeceleration;

	//Current direction (up/down).
	var _direction = 'down';

	//The last top offset value. Needed to determine direction.
	var _lastTop = -1;

	//The last time we called the render method (doesn't mean we rendered!).
	var _lastRenderCall = _now();

	//For detecting if it actually resized (#271).
	var _lastViewportWidth = 0;
	var _lastViewportHeight = 0;

	var _requestReflow = false;

	//Will contain data about a running scrollbar animation, if any.
	var _scrollAnimation;

	var _smoothScrollingEnabled;

	var _smoothScrollingDuration;

	//Will contain settins for smooth scrolling if enabled.
	var _smoothScrolling;

	//Can be set by any operation/event to force rendering even if the scrollbar didn't move.
	var _forceRender;

	//Each skrollable gets an unique ID incremented for each skrollable.
	//The ID is the index in the _skrollables array.
	var _skrollableIdCounter = 0;

	var _edgeStrategy;

	//Mobile specific vars. Will be stripped by UglifyJS when not in use.
	var _isMobile = false;

	//The virtual scroll offset when using mobile scrolling.
	var _mobileOffset = 0;

	//If the browser supports 3d transforms, this will be filled with 'translateZ(0)' (empty string otherwise).
	var _translateZ;

	//Will contain data about registered events by skrollr.
	var _registeredEvents = [];

	//Animation frame id returned by RequestAnimationFrame (or timeout when RAF is not supported).
	var _animFrame;

	//Expose skrollr as either a global variable or a require.js module
	if (true) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return skrollr;
		}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if (typeof module !== 'undefined' && module.exports) {
		module.exports = skrollr;
	} else {
		window.skrollr = skrollr;
	}
})(window, document);

/***/ }),
/* 46 */
/***/ (function(module, exports) {

/*!
 * Plugin for skrollr.
 * This plugin makes hashlinks scroll nicely to their target position.
 *
 * Alexander Prinzhorn - https://github.com/Prinzhorn/skrollr
 *
 * Free to use under terms of MIT license
 *
 *
 * Attention, I modified this file. Albino.
 *
 */
(function (document, window) {
  'use strict';

  module.exports = function (skrollr) {
    var DEFAULT_DURATION = 500;
    var DEFAULT_EASING = 'sqrt';
    var DEFAULT_SCALE = 1;

    var MENU_OFFSET_ATTR = 'data-menu-offset';

    // var skrollr = window.skrollr;
    var history = window.history;
    var supportsHistory = !!history.pushState;

    /*
       Since we are using event bubbling, the element that has been clicked
       might not acutally be the link but a child.
    */
    var findParentLink = function findParentLink(element) {
      // Yay, it's a link!

      if (element.tagName === 'A' || element.tagName === 'text') {
        return element;
      }

      // We reached the top, no link found.
      if (element === document) {
        return false;
      }

      // Maybe the parent is a link.
      return findParentLink(element.parentNode);
    };

    /*
       Handle the click event on the document.
    */
    var handleClick = function handleClick(e) {
      // Only handle left click.

      if (e.which !== 1 && e.button !== 0) {
        return;
      }

      var link = findParentLink(e.target);

      // The click did not happen inside a link.
      if (!link) {
        return;
      }

      if (handleLink(link)) {
        e.preventDefault();
      }
    };

    /*
       Handles the click on a link. May be called without an actual click event.
       When the fake flag is set, the link won't change the url and the position won't be animated.
    */
    var handleLink = function handleLink(link, fake) {
      var patt = new RegExp('sc-menu[0-9]');
      var isMenu = patt.test(link.id);

      if (!isMenu) {
        return false;
      }
      // Now get the targetTop to scroll to.
      var targetTop;

      var menuTop;

      var scenetoLoad = link.id.replace('sc-menu', 'scene');
      var href = '#' + scenetoLoad;
      // If there's a handleLink function, it overrides the actual anchor offset.
      if (_handleLink) {
        menuTop = _handleLink(link);
      } else {
        menuTop = _scenes[scenetoLoad].begin + _scenes[scenetoLoad].menuoffset;
      }

      if (menuTop !== null) {
        // Is it a percentage offset?
        if (/p$/.test(menuTop)) {
          targetTop = menuTop.slice(0, -1) / 100 * document.documentElement.clientHeight;
        } else {
          targetTop = +menuTop * _scale;
        }
      } else {
        var scrollTarget = document.getElementById(href.substr(1));

        // Ignore the click if no target is found.
        if (!scrollTarget) {
          return false;
        }

        targetTop = _skrollrInstance.relativeToAbsolute(scrollTarget, 'top', 'top');

        var menuOffset = scrollTarget.getAttribute(MENU_OFFSET_ATTR);

        if (menuOffset !== null) {
          targetTop += +menuOffset;
        }
      }
      /*
               if (supportsHistory && !fake) {
                   history.pushState({
                       top: targetTop
                   }, '', href);
               }
      */
      // Now finally scroll there.
      if (_animate && !fake) {
        _skrollrInstance.animateTo(targetTop, {
          duration: _duration(_skrollrInstance.getScrollTop(), targetTop),
          easing: _easing
        });
      } else {
        defer(function () {
          _skrollrInstance.setScrollTop(targetTop);
        });
      }

      return true;
    };

    var jumpStraightToHash = function jumpStraightToHash() {
      if (window.location.hash && document.querySelector) {
        var link = document.querySelector('a[href="' + window.location.hash + '"]');

        if (link) {
          handleLink(link, true);
        }
      }
    };

    var defer = function defer(fn) {
      window.setTimeout(fn, 1);
    };

    var _skrollrInstance;

    var _easing;
    var _duration;
    var _animate;
    var _handleLink;
    var _scale;
    var _scenes;

    var init = function init(skrollr) {
      /*
      Global menu function accessible through window.skrollr.menu.init.
      */
      skrollr.menu = {};
      skrollr.menu.init = function (skrollrInstance, options) {
        _skrollrInstance = skrollrInstance;

        options = options || {};
        _scenes = options.scenes || {};
        _easing = options.easing || DEFAULT_EASING;
        _animate = options.animate !== false;
        _duration = options.duration || DEFAULT_DURATION;
        _handleLink = options.handleLink;
        _scale = options.scale || DEFAULT_SCALE;

        if (typeof _duration === 'number') {
          _duration = function (duration) {
            return function () {
              return duration;
            };
          }(_duration);
        }

        // Use event bubbling and attach a single listener to the document.
        skrollr.addEvent(document, 'click', handleClick);

        if (supportsHistory) {
          skrollr.addEvent(window, 'popstate', function (e) {
            var state = e.state || {};
            var top = state.top || 0;

            defer(function () {
              _skrollrInstance.setScrollTop(top);
            });
          }, false);
        }

        jumpStraightToHash();
      };

      // Private reference to the initialized skrollr.

      // In case the page was opened with a hash, prevent jumping to it.
      // http://stackoverflow.com/questions/3659072/jquery-disable-anchor-jump-when-loading-a-page
      defer(function () {
        if (window.location.hash) {
          window.scrollTo(0, 0);
        }
      });
    };

    init(skrollr);
  };
})(document, window);

/***/ }),
/* 47 */
/***/ (function(module, exports) {

/* global matchMedia, XMLHttpRequest, XDomainRequest */

(function (window, document) {
  'use strict';

  module.exports = function (skrollr) {
    var content;
    var contents = [];

    // Finds the declaration of an animation block.
    var rxAnimation = /@-skrollr-keyframes\s+([\w-]+)/g;

    // Finds the block of keyframes inside an animation block.
    // http://regexpal.com/ saves your ass with stuff like this.
    var rxKeyframes = /\s*\{\s*((?:[^{]+\{[^}]*\}\s*)+?)\s*\}/g;

    // Gets a single keyframe and the properties inside.
    var rxSingleKeyframe = /([\w-]+)\s*\{([^}]+)\}/g;

    // Optional keyframe name prefix to work around SASS (>3.4) issues
    var keyframeNameOptionalPrefix = 'skrollr-';

    // Finds usages of the animation.
    var rxAnimationUsage = /-skrollr-animation-name\s*:\s*([\w-]+)/g;

    // Finds usages of attribute setters.
    var rxAttributeSetter = /-skrollr-(anchor-target|smooth-scrolling|emit-events|menu-offset)\s*:\s*['"]([^'"]+)['"]/g;

    var fetchRemote = function fetchRemote(url) {
      var xhr = new XMLHttpRequest();

      /*
       * Yes, these are SYNCHRONOUS requests.
       * Simply because skrollr stylesheets should run while the page is loaded.
       * Get over it.
       */
      try {
        xhr.open('GET', url, false);
        xhr.send(null);
      } catch (e) {
        // Fallback to XDomainRequest if available
        if (window.XDomainRequest) {
          xhr = new XDomainRequest();
          xhr.open('GET', url, false);
          xhr.send(null);
        }
      }

      return xhr.responseText;
    };

    // "main"
    var kickstart = function kickstart(stylesheets) {
      // Iterate over all stylesheets, embedded and remote.
      for (var stylesheetIndex = 0; stylesheetIndex < stylesheets.length; stylesheetIndex++) {
        var sheet = stylesheets[stylesheetIndex];

        if (sheet.tagName === 'LINK') {
          if (sheet.getAttribute('data-skrollr-stylesheet') === null) {
            continue;
          }

          // Test media attribute if matchMedia available.
          if (window.matchMedia) {
            var media = sheet.getAttribute('media');

            if (media && !matchMedia(media).matches) {
              continue;
            }
          }

          // Remote stylesheet, fetch it (synchrnonous).
          content = fetchRemote(sheet.href);
        } else {
          // Embedded stylesheet, grab the node content.
          content = sheet.textContent || sheet.innerText || sheet.innerHTML;
        }

        if (content) {
          contents.push(content);
        }
      }

      // We take the stylesheets in reverse order.
      // This is needed to ensure correct order of stylesheets and inline styles.
      contents.reverse();

      var animations = {};
      var selectors = [];
      var attributes = [];

      // Now parse all stylesheets.
      for (var contentIndex = 0; contentIndex < contents.length; contentIndex++) {
        content = contents[contentIndex];

        parseAnimationDeclarations(content, animations);
        parseAnimationUsage(content, selectors);
        parseAttributeSetters(content, attributes);
      }

      applyKeyframeAttributes(animations, selectors);
      applyAttributeSetters(attributes);
    };

    // Finds animation declarations and puts them into the output map.
    var parseAnimationDeclarations = function parseAnimationDeclarations(input, output) {
      rxAnimation.lastIndex = 0;

      var animation;
      var rawKeyframes;
      var keyframe;
      var curAnimation;

      while ((animation = rxAnimation.exec(input)) !== null) {
        // Grab the keyframes inside this animation.
        rxKeyframes.lastIndex = rxAnimation.lastIndex;
        rawKeyframes = rxKeyframes.exec(input);

        // Grab the single keyframes with their CSS properties.
        rxSingleKeyframe.lastIndex = 0;

        // Save the animation in an object using it's name as key.
        curAnimation = output[animation[1]] = {};

        while ((keyframe = rxSingleKeyframe.exec(rawKeyframes[1])) !== null) {
          // Put all keyframes inside the animation using the keyframe (like botttom-top, or 100) as key
          // and the properties as value (just the raw string, newline stripped).
          curAnimation[keyframe[1]] = keyframe[2].replace(/[\n\r\t]/g, '');
        }
      }
    };

    // Extracts the selector of the given block by walking backwards to the start of the block.
    var extractSelector = function extractSelector(input, startIndex) {
      var begin;
      var end = startIndex;

      // First find the curly bracket that opens this block.
      while (end-- && input.charAt(end) !== '{') {}

      // The end is now fixed to the right of the selector.
      // Now start there to find the begin of the selector.
      begin = end;

      // Now walk farther backwards until we grabbed the whole selector.
      // This either ends at beginning of string or at end of next block.
      while (begin-- && input.charAt(begin - 1) !== '}') {}

      // Return the cleaned selector.
      return input.substring(begin, end).replace(/[\n\r\t]/g, '');
    };

    // Finds usage of animations and puts the selectors into the output array.
    var parseAnimationUsage = function parseAnimationUsage(input, output) {
      var match;
      var selector;

      rxAnimationUsage.lastIndex = 0;

      while ((match = rxAnimationUsage.exec(input)) !== null) {
        // Extract the selector of the block we found the animation in.
        selector = extractSelector(input, rxAnimationUsage.lastIndex);

        // Associate this selector with the animation name.
        output.push([selector, match[1]]);
      }
    };

    // Finds usage of attribute setters and puts the selector and attribute data into the output array.
    var parseAttributeSetters = function parseAttributeSetters(input, output) {
      var match;
      var selector;

      rxAttributeSetter.lastIndex = 0;

      while ((match = rxAttributeSetter.exec(input)) !== null) {
        // Extract the selector of the block we found the animation in.
        selector = extractSelector(input, rxAttributeSetter.lastIndex);

        // Associate this selector with the attribute name and value.
        output.push([selector, match[1], match[2]]);
      }
    };

    // Applies the keyframes (as data-attributes) to the elements.
    var applyKeyframeAttributes = function applyKeyframeAttributes(animations, selectors) {
      var elements;
      var keyframes;
      var keyframeName;
      var cleanKeyframeName;
      var elementIndex;
      var attributeName;
      var attributeValue;
      var curElement;

      for (var selectorIndex = 0; selectorIndex < selectors.length; selectorIndex++) {
        elements = document.querySelectorAll(selectors[selectorIndex][0]);

        if (!elements) {
          continue;
        }

        keyframes = animations[selectors[selectorIndex][1]];

        for (keyframeName in keyframes) {
          if (keyframeName.indexOf(keyframeNameOptionalPrefix) === 0) {
            cleanKeyframeName = keyframeName.substring(keyframeNameOptionalPrefix.length);
          } else {
            cleanKeyframeName = keyframeName;
          }

          for (elementIndex = 0; elementIndex < elements.length; elementIndex++) {
            curElement = elements[elementIndex];
            attributeName = 'data-' + cleanKeyframeName;
            attributeValue = keyframes[keyframeName];

            // If the element already has this keyframe inline, give the inline one precedence by putting it on the right side.
            // The inline one may actually be the result of the keyframes from another stylesheet.
            // Since we reversed the order of the stylesheets, everything comes together correctly here.
            if (curElement.hasAttribute(attributeName)) {
              attributeValue += curElement.getAttribute(attributeName);
            }

            curElement.setAttribute(attributeName, attributeValue);
          }
        }
      }
    };

    // Applies the keyframes (as data-attributes) to the elements.
    var applyAttributeSetters = function applyAttributeSetters(selectors) {
      var curSelector;
      var elements;
      var attributeName;
      var attributeValue;
      var elementIndex;

      for (var selectorIndex = 0; selectorIndex < selectors.length; selectorIndex++) {
        curSelector = selectors[selectorIndex];
        elements = document.querySelectorAll(curSelector[0]);
        attributeName = 'data-' + curSelector[1];
        attributeValue = curSelector[2];

        if (!elements) {
          continue;
        }

        for (elementIndex = 0; elementIndex < elements.length; elementIndex++) {
          elements[elementIndex].setAttribute(attributeName, attributeValue);
        }
      }
    };

    var init = function init(skrollr) {
      skrollr.stylesheets = {};

      skrollr.stylesheets.init = function () {
        kickstart(document.querySelectorAll('link, style'));
      };
    };

    init(skrollr);
  };
})(window, document);

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var sceneTimes = {
  scene1: {
    offset: 0,
    duration: 900,
    menuoffset: 300
  },
  scene2: {
    offset: 0,
    duration: 1100,
    menuoffset: 600
  },
  scene3: {
    offset: 0,
    duration: 1100,
    menuoffset: 600
  },

  scene4: {
    offset: 0,
    duration: 1000,
    menuoffset: 0
  },

  scene5: {
    offset: 0,
    duration: 2100,
    menuoffset: 1470
  },
  scene6: {
    offset: 0,
    duration: 2500,
    menuoffset: 1400
  }
};

/* harmony default export */ __webpack_exports__["a"] = ({

  get scenes() {
    var begin = 0;

    for (var scene in sceneTimes) {
      begin += sceneTimes[scene].offset;
      sceneTimes[scene].name = scene;
      sceneTimes[scene].begin = begin;
      sceneTimes[scene].end = begin + sceneTimes[scene].duration;
      begin += sceneTimes[scene].duration;
    }

    return sceneTimes;
  }
});

/***/ }),
/* 49 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 50 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map