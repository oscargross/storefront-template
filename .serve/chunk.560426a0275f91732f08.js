(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "./node_modules/@ecomplus/widget-search-engine/node_modules/@ecomplus/storefront-twbs/dist/storefront-twbs.min.js":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/@ecomplus/widget-search-engine/node_modules/@ecomplus/storefront-twbs/dist/storefront-twbs.min.js ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t(__webpack_require__(/*! jquery/dist/jquery.slim */ "./node_modules/jquery/dist/jquery.slim.js"),__webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js")):undefined}(window,(function(e,t){return function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=13)}([function(t,n){t.exports=e},function(e,t,n){
/*!
  * Bootstrap util.js v4.6.1 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
e.exports=function(e){"use strict";function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=t(e);function i(e){var t=this,i=!1;return n.default(this).one(o.TRANSITION_END,(function(){i=!0})),setTimeout((function(){i||o.triggerTransitionEnd(t)}),e),this}var o={TRANSITION_END:"bsTransitionEnd",getUID:function(e){do{e+=~~(1e6*Math.random())}while(document.getElementById(e));return e},getSelectorFromElement:function(e){var t=e.getAttribute("data-target");if(!t||"#"===t){var n=e.getAttribute("href");t=n&&"#"!==n?n.trim():""}try{return document.querySelector(t)?t:null}catch(e){return null}},getTransitionDurationFromElement:function(e){if(!e)return 0;var t=n.default(e).css("transition-duration"),i=n.default(e).css("transition-delay"),o=parseFloat(t),a=parseFloat(i);return o||a?(t=t.split(",")[0],i=i.split(",")[0],1e3*(parseFloat(t)+parseFloat(i))):0},reflow:function(e){return e.offsetHeight},triggerTransitionEnd:function(e){n.default(e).trigger("transitionend")},supportsTransitionEnd:function(){return Boolean("transitionend")},isElement:function(e){return(e[0]||e).nodeType},typeCheckConfig:function(e,t,n){for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)){var a=n[i],r=t[i],s=r&&o.isElement(r)?"element":null==(l=r)?""+l:{}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase();if(!new RegExp(a).test(s))throw new Error(e.toUpperCase()+': Option "'+i+'" provided type "'+s+'" but expected type "'+a+'".')}var l},findShadowRoot:function(e){if(!document.documentElement.attachShadow)return null;if("function"==typeof e.getRootNode){var t=e.getRootNode();return t instanceof ShadowRoot?t:null}return e instanceof ShadowRoot?e:e.parentNode?o.findShadowRoot(e.parentNode):null},jQueryDetection:function(){if(void 0===n.default)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var e=n.default.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1===e[0]&&9===e[1]&&e[2]<1||e[0]>=4)throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}};return o.jQueryDetection(),n.default.fn.emulateTransitionEnd=i,n.default.event.special[o.TRANSITION_END]={bindType:"transitionend",delegateType:"transitionend",handle:function(e){if(n.default(e.target).is(this))return e.handleObj.handler.apply(this,arguments)}},o}(n(0))},function(e){e.exports=JSON.parse('{"a":"@ecomplus/storefront-twbs","b":"7.1.0"}')},function(e,n){e.exports=t},function(e,t,n){
/*!
  * Bootstrap tooltip.js v4.6.1 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
e.exports=function(e,t,n){"use strict";function i(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=i(e),a=i(t),r=i(n);function s(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var u=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],d={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},f=/^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,c=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;function h(e,t,n){if(0===e.length)return e;if(n&&"function"==typeof n)return n(e);for(var i=(new window.DOMParser).parseFromString(e,"text/html"),o=Object.keys(t),a=[].slice.call(i.body.querySelectorAll("*")),r=function(e,n){var i=a[e],r=i.nodeName.toLowerCase();if(-1===o.indexOf(i.nodeName.toLowerCase()))return i.parentNode.removeChild(i),"continue";var s=[].slice.call(i.attributes),l=[].concat(t["*"]||[],t[r]||[]);s.forEach((function(e){(function(e,t){var n=e.nodeName.toLowerCase();if(-1!==t.indexOf(n))return-1===u.indexOf(n)||Boolean(f.test(e.nodeValue)||c.test(e.nodeValue));for(var i=t.filter((function(e){return e instanceof RegExp})),o=0,a=i.length;o<a;o++)if(i[o].test(n))return!0;return!1})(e,l)||i.removeAttribute(e.nodeName)}))},s=0,l=a.length;s<l;s++)r(s);return i.body.innerHTML}var g="tooltip",m=".bs.tooltip",p=o.default.fn[g],_=new RegExp("(^|\\s)bs-tooltip\\S+","g"),v=["sanitize","whiteList","sanitizeFn"],b={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},y={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent",customClass:"",sanitize:!0,sanitizeFn:null,whiteList:d,popperConfig:null},w={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string|function)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)",customClass:"(string|function)",sanitize:"boolean",sanitizeFn:"(null|function)",whiteList:"object",popperConfig:"(null|object)"},E={HIDE:"hide"+m,HIDDEN:"hidden"+m,SHOW:"show"+m,SHOWN:"shown"+m,INSERTED:"inserted"+m,CLICK:"click"+m,FOCUSIN:"focusin"+m,FOCUSOUT:"focusout"+m,MOUSEENTER:"mouseenter"+m,MOUSELEAVE:"mouseleave"+m},T=function(){function e(e,t){if(void 0===a.default)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=e,this.config=this._getConfig(t),this.tip=null,this._setListeners()}var t,n,i,u=e.prototype;return u.enable=function(){this._isEnabled=!0},u.disable=function(){this._isEnabled=!1},u.toggleEnabled=function(){this._isEnabled=!this._isEnabled},u.toggle=function(e){if(this._isEnabled)if(e){var t=this.constructor.DATA_KEY,n=o.default(e.currentTarget).data(t);n||(n=new this.constructor(e.currentTarget,this._getDelegateConfig()),o.default(e.currentTarget).data(t,n)),n._activeTrigger.click=!n._activeTrigger.click,n._isWithActiveTrigger()?n._enter(null,n):n._leave(null,n)}else{if(o.default(this.getTipElement()).hasClass("show"))return void this._leave(null,this);this._enter(null,this)}},u.dispose=function(){clearTimeout(this._timeout),o.default.removeData(this.element,this.constructor.DATA_KEY),o.default(this.element).off(this.constructor.EVENT_KEY),o.default(this.element).closest(".modal").off("hide.bs.modal",this._hideModalHandler),this.tip&&o.default(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,this._activeTrigger=null,this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},u.show=function(){var e=this;if("none"===o.default(this.element).css("display"))throw new Error("Please use show on visible elements");var t=o.default.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){o.default(this.element).trigger(t);var n=r.default.findShadowRoot(this.element),i=o.default.contains(null!==n?n:this.element.ownerDocument.documentElement,this.element);if(t.isDefaultPrevented()||!i)return;var s=this.getTipElement(),l=r.default.getUID(this.constructor.NAME);s.setAttribute("id",l),this.element.setAttribute("aria-describedby",l),this.setContent(),this.config.animation&&o.default(s).addClass("fade");var u="function"==typeof this.config.placement?this.config.placement.call(this,s,this.element):this.config.placement,d=this._getAttachment(u);this.addAttachmentClass(d);var f=this._getContainer();o.default(s).data(this.constructor.DATA_KEY,this),o.default.contains(this.element.ownerDocument.documentElement,this.tip)||o.default(s).appendTo(f),o.default(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new a.default(this.element,s,this._getPopperConfig(d)),o.default(s).addClass("show"),o.default(s).addClass(this.config.customClass),"ontouchstart"in document.documentElement&&o.default(document.body).children().on("mouseover",null,o.default.noop);var c=function(){e.config.animation&&e._fixTransition();var t=e._hoverState;e._hoverState=null,o.default(e.element).trigger(e.constructor.Event.SHOWN),"out"===t&&e._leave(null,e)};if(o.default(this.tip).hasClass("fade")){var h=r.default.getTransitionDurationFromElement(this.tip);o.default(this.tip).one(r.default.TRANSITION_END,c).emulateTransitionEnd(h)}else c()}},u.hide=function(e){var t=this,n=this.getTipElement(),i=o.default.Event(this.constructor.Event.HIDE),a=function(){"show"!==t._hoverState&&n.parentNode&&n.parentNode.removeChild(n),t._cleanTipClass(),t.element.removeAttribute("aria-describedby"),o.default(t.element).trigger(t.constructor.Event.HIDDEN),null!==t._popper&&t._popper.destroy(),e&&e()};if(o.default(this.element).trigger(i),!i.isDefaultPrevented()){if(o.default(n).removeClass("show"),"ontouchstart"in document.documentElement&&o.default(document.body).children().off("mouseover",null,o.default.noop),this._activeTrigger.click=!1,this._activeTrigger.focus=!1,this._activeTrigger.hover=!1,o.default(this.tip).hasClass("fade")){var s=r.default.getTransitionDurationFromElement(n);o.default(n).one(r.default.TRANSITION_END,a).emulateTransitionEnd(s)}else a();this._hoverState=""}},u.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},u.isWithContent=function(){return Boolean(this.getTitle())},u.addAttachmentClass=function(e){o.default(this.getTipElement()).addClass("bs-tooltip-"+e)},u.getTipElement=function(){return this.tip=this.tip||o.default(this.config.template)[0],this.tip},u.setContent=function(){var e=this.getTipElement();this.setElementContent(o.default(e.querySelectorAll(".tooltip-inner")),this.getTitle()),o.default(e).removeClass("fade show")},u.setElementContent=function(e,t){"object"!=typeof t||!t.nodeType&&!t.jquery?this.config.html?(this.config.sanitize&&(t=h(t,this.config.whiteList,this.config.sanitizeFn)),e.html(t)):e.text(t):this.config.html?o.default(t).parent().is(e)||e.empty().append(t):e.text(o.default(t).text())},u.getTitle=function(){var e=this.element.getAttribute("data-original-title");return e||(e="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),e},u._getPopperConfig=function(e){var t=this;return l({},{placement:e,modifiers:{offset:this._getOffset(),flip:{behavior:this.config.fallbackPlacement},arrow:{element:".arrow"},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(e){e.originalPlacement!==e.placement&&t._handlePopperPlacementChange(e)},onUpdate:function(e){return t._handlePopperPlacementChange(e)}},this.config.popperConfig)},u._getOffset=function(){var e=this,t={};return"function"==typeof this.config.offset?t.fn=function(t){return t.offsets=l({},t.offsets,e.config.offset(t.offsets,e.element)),t}:t.offset=this.config.offset,t},u._getContainer=function(){return!1===this.config.container?document.body:r.default.isElement(this.config.container)?o.default(this.config.container):o.default(document).find(this.config.container)},u._getAttachment=function(e){return b[e.toUpperCase()]},u._setListeners=function(){var e=this;this.config.trigger.split(" ").forEach((function(t){if("click"===t)o.default(e.element).on(e.constructor.Event.CLICK,e.config.selector,(function(t){return e.toggle(t)}));else if("manual"!==t){var n="hover"===t?e.constructor.Event.MOUSEENTER:e.constructor.Event.FOCUSIN,i="hover"===t?e.constructor.Event.MOUSELEAVE:e.constructor.Event.FOCUSOUT;o.default(e.element).on(n,e.config.selector,(function(t){return e._enter(t)})).on(i,e.config.selector,(function(t){return e._leave(t)}))}})),this._hideModalHandler=function(){e.element&&e.hide()},o.default(this.element).closest(".modal").on("hide.bs.modal",this._hideModalHandler),this.config.selector?this.config=l({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},u._fixTitle=function(){var e=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||"string"!==e)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},u._enter=function(e,t){var n=this.constructor.DATA_KEY;(t=t||o.default(e.currentTarget).data(n))||(t=new this.constructor(e.currentTarget,this._getDelegateConfig()),o.default(e.currentTarget).data(n,t)),e&&(t._activeTrigger["focusin"===e.type?"focus":"hover"]=!0),o.default(t.getTipElement()).hasClass("show")||"show"===t._hoverState?t._hoverState="show":(clearTimeout(t._timeout),t._hoverState="show",t.config.delay&&t.config.delay.show?t._timeout=setTimeout((function(){"show"===t._hoverState&&t.show()}),t.config.delay.show):t.show())},u._leave=function(e,t){var n=this.constructor.DATA_KEY;(t=t||o.default(e.currentTarget).data(n))||(t=new this.constructor(e.currentTarget,this._getDelegateConfig()),o.default(e.currentTarget).data(n,t)),e&&(t._activeTrigger["focusout"===e.type?"focus":"hover"]=!1),t._isWithActiveTrigger()||(clearTimeout(t._timeout),t._hoverState="out",t.config.delay&&t.config.delay.hide?t._timeout=setTimeout((function(){"out"===t._hoverState&&t.hide()}),t.config.delay.hide):t.hide())},u._isWithActiveTrigger=function(){for(var e in this._activeTrigger)if(this._activeTrigger[e])return!0;return!1},u._getConfig=function(e){var t=o.default(this.element).data();return Object.keys(t).forEach((function(e){-1!==v.indexOf(e)&&delete t[e]})),"number"==typeof(e=l({},this.constructor.Default,t,"object"==typeof e&&e?e:{})).delay&&(e.delay={show:e.delay,hide:e.delay}),"number"==typeof e.title&&(e.title=e.title.toString()),"number"==typeof e.content&&(e.content=e.content.toString()),r.default.typeCheckConfig(g,e,this.constructor.DefaultType),e.sanitize&&(e.template=h(e.template,e.whiteList,e.sanitizeFn)),e},u._getDelegateConfig=function(){var e={};if(this.config)for(var t in this.config)this.constructor.Default[t]!==this.config[t]&&(e[t]=this.config[t]);return e},u._cleanTipClass=function(){var e=o.default(this.getTipElement()),t=e.attr("class").match(_);null!==t&&t.length&&e.removeClass(t.join(""))},u._handlePopperPlacementChange=function(e){this.tip=e.instance.popper,this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(e.placement))},u._fixTransition=function(){var e=this.getTipElement(),t=this.config.animation;null===e.getAttribute("x-placement")&&(o.default(e).removeClass("fade"),this.config.animation=!1,this.hide(),this.show(),this.config.animation=t)},e._jQueryInterface=function(t){return this.each((function(){var n=o.default(this),i=n.data("bs.tooltip"),a="object"==typeof t&&t;if((i||!/dispose|hide/.test(t))&&(i||(i=new e(this,a),n.data("bs.tooltip",i)),"string"==typeof t)){if(void 0===i[t])throw new TypeError('No method named "'+t+'"');i[t]()}}))},t=e,i=[{key:"VERSION",get:function(){return"4.6.1"}},{key:"Default",get:function(){return y}},{key:"NAME",get:function(){return g}},{key:"DATA_KEY",get:function(){return"bs.tooltip"}},{key:"Event",get:function(){return E}},{key:"EVENT_KEY",get:function(){return m}},{key:"DefaultType",get:function(){return w}}],(n=null)&&s(t.prototype,n),i&&s(t,i),e}();return o.default.fn[g]=T._jQueryInterface,o.default.fn[g].Constructor=T,o.default.fn[g].noConflict=function(){return o.default.fn[g]=p,T._jQueryInterface},T}(n(0),n(3),n(1))},function(e,t,n){
/*!
  * Bootstrap alert.js v4.6.1 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
e.exports=function(e,t){"use strict";function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var i=n(e),o=n(t);function a(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var r="alert",s=i.default.fn[r],l=function(){function e(e){this._element=e}var t,n,r,s=e.prototype;return s.close=function(e){var t=this._element;e&&(t=this._getRootElement(e)),this._triggerCloseEvent(t).isDefaultPrevented()||this._removeElement(t)},s.dispose=function(){i.default.removeData(this._element,"bs.alert"),this._element=null},s._getRootElement=function(e){var t=o.default.getSelectorFromElement(e),n=!1;return t&&(n=document.querySelector(t)),n||(n=i.default(e).closest(".alert")[0]),n},s._triggerCloseEvent=function(e){var t=i.default.Event("close.bs.alert");return i.default(e).trigger(t),t},s._removeElement=function(e){var t=this;if(i.default(e).removeClass("show"),i.default(e).hasClass("fade")){var n=o.default.getTransitionDurationFromElement(e);i.default(e).one(o.default.TRANSITION_END,(function(n){return t._destroyElement(e,n)})).emulateTransitionEnd(n)}else this._destroyElement(e)},s._destroyElement=function(e){i.default(e).detach().trigger("closed.bs.alert").remove()},e._jQueryInterface=function(t){return this.each((function(){var n=i.default(this),o=n.data("bs.alert");o||(o=new e(this),n.data("bs.alert",o)),"close"===t&&o[t](this)}))},e._handleDismiss=function(e){return function(t){t&&t.preventDefault(),e.close(this)}},t=e,r=[{key:"VERSION",get:function(){return"4.6.1"}}],(n=null)&&a(t.prototype,n),r&&a(t,r),e}();return i.default(document).on("click.bs.alert.data-api",'[data-dismiss="alert"]',l._handleDismiss(new l)),i.default.fn[r]=l._jQueryInterface,i.default.fn[r].Constructor=l,i.default.fn[r].noConflict=function(){return i.default.fn[r]=s,l._jQueryInterface},l}(n(0),n(1))},function(e,t,n){
/*!
  * Bootstrap button.js v4.6.1 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
e.exports=function(e){"use strict";function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=t(e);function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var o="button",a=n.default.fn[o],r=function(){function e(e){this._element=e,this.shouldAvoidTriggerChange=!1}var t,o,a,r=e.prototype;return r.toggle=function(){var e=!0,t=!0,i=n.default(this._element).closest('[data-toggle="buttons"]')[0];if(i){var o=this._element.querySelector('input:not([type="hidden"])');if(o){if("radio"===o.type)if(o.checked&&this._element.classList.contains("active"))e=!1;else{var a=i.querySelector(".active");a&&n.default(a).removeClass("active")}e&&("checkbox"!==o.type&&"radio"!==o.type||(o.checked=!this._element.classList.contains("active")),this.shouldAvoidTriggerChange||n.default(o).trigger("change")),o.focus(),t=!1}}this._element.hasAttribute("disabled")||this._element.classList.contains("disabled")||(t&&this._element.setAttribute("aria-pressed",!this._element.classList.contains("active")),e&&n.default(this._element).toggleClass("active"))},r.dispose=function(){n.default.removeData(this._element,"bs.button"),this._element=null},e._jQueryInterface=function(t,i){return this.each((function(){var o=n.default(this),a=o.data("bs.button");a||(a=new e(this),o.data("bs.button",a)),a.shouldAvoidTriggerChange=i,"toggle"===t&&a[t]()}))},t=e,a=[{key:"VERSION",get:function(){return"4.6.1"}}],(o=null)&&i(t.prototype,o),a&&i(t,a),e}();return n.default(document).on("click.bs.button.data-api",'[data-toggle^="button"]',(function(e){var t=e.target,i=t;if(n.default(t).hasClass("btn")||(t=n.default(t).closest(".btn")[0]),!t||t.hasAttribute("disabled")||t.classList.contains("disabled"))e.preventDefault();else{var o=t.querySelector('input:not([type="hidden"])');if(o&&(o.hasAttribute("disabled")||o.classList.contains("disabled")))return void e.preventDefault();"INPUT"!==i.tagName&&"LABEL"===t.tagName||r._jQueryInterface.call(n.default(t),"toggle","INPUT"===i.tagName)}})).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',(function(e){var t=n.default(e.target).closest(".btn")[0];n.default(t).toggleClass("focus",/^focus(in)?$/.test(e.type))})),n.default(window).on("load.bs.button.data-api",(function(){for(var e=[].slice.call(document.querySelectorAll('[data-toggle="buttons"] .btn')),t=0,n=e.length;t<n;t++){var i=e[t],o=i.querySelector('input:not([type="hidden"])');o.checked||o.hasAttribute("checked")?i.classList.add("active"):i.classList.remove("active")}for(var a=0,r=(e=[].slice.call(document.querySelectorAll('[data-toggle="button"]'))).length;a<r;a++){var s=e[a];"true"===s.getAttribute("aria-pressed")?s.classList.add("active"):s.classList.remove("active")}})),n.default.fn[o]=r._jQueryInterface,n.default.fn[o].Constructor=r,n.default.fn[o].noConflict=function(){return n.default.fn[o]=a,r._jQueryInterface},r}(n(0))},function(e,t,n){
/*!
  * Bootstrap collapse.js v4.6.1 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
e.exports=function(e,t){"use strict";function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var i=n(e),o=n(t);function a(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var s="collapse",l="bs.collapse",u=i.default.fn[s],d={toggle:!0,parent:""},f={toggle:"boolean",parent:"(string|element)"},c=function(){function e(e,t){this._isTransitioning=!1,this._element=e,this._config=this._getConfig(t),this._triggerArray=[].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'));for(var n=[].slice.call(document.querySelectorAll('[data-toggle="collapse"]')),i=0,a=n.length;i<a;i++){var r=n[i],s=o.default.getSelectorFromElement(r),l=[].slice.call(document.querySelectorAll(s)).filter((function(t){return t===e}));null!==s&&l.length>0&&(this._selector=s,this._triggerArray.push(r))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var t,n,u,c=e.prototype;return c.toggle=function(){i.default(this._element).hasClass("show")?this.hide():this.show()},c.show=function(){var t,n,a=this;if(!(this._isTransitioning||i.default(this._element).hasClass("show")||(this._parent&&0===(t=[].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter((function(e){return"string"==typeof a._config.parent?e.getAttribute("data-parent")===a._config.parent:e.classList.contains("collapse")}))).length&&(t=null),t&&(n=i.default(t).not(this._selector).data(l))&&n._isTransitioning))){var r=i.default.Event("show.bs.collapse");if(i.default(this._element).trigger(r),!r.isDefaultPrevented()){t&&(e._jQueryInterface.call(i.default(t).not(this._selector),"hide"),n||i.default(t).data(l,null));var s=this._getDimension();i.default(this._element).removeClass("collapse").addClass("collapsing"),this._element.style[s]=0,this._triggerArray.length&&i.default(this._triggerArray).removeClass("collapsed").attr("aria-expanded",!0),this.setTransitioning(!0);var u="scroll"+(s[0].toUpperCase()+s.slice(1)),d=o.default.getTransitionDurationFromElement(this._element);i.default(this._element).one(o.default.TRANSITION_END,(function(){i.default(a._element).removeClass("collapsing").addClass("collapse show"),a._element.style[s]="",a.setTransitioning(!1),i.default(a._element).trigger("shown.bs.collapse")})).emulateTransitionEnd(d),this._element.style[s]=this._element[u]+"px"}}},c.hide=function(){var e=this;if(!this._isTransitioning&&i.default(this._element).hasClass("show")){var t=i.default.Event("hide.bs.collapse");if(i.default(this._element).trigger(t),!t.isDefaultPrevented()){var n=this._getDimension();this._element.style[n]=this._element.getBoundingClientRect()[n]+"px",o.default.reflow(this._element),i.default(this._element).addClass("collapsing").removeClass("collapse show");var a=this._triggerArray.length;if(a>0)for(var r=0;r<a;r++){var s=this._triggerArray[r],l=o.default.getSelectorFromElement(s);null!==l&&(i.default([].slice.call(document.querySelectorAll(l))).hasClass("show")||i.default(s).addClass("collapsed").attr("aria-expanded",!1))}this.setTransitioning(!0),this._element.style[n]="";var u=o.default.getTransitionDurationFromElement(this._element);i.default(this._element).one(o.default.TRANSITION_END,(function(){e.setTransitioning(!1),i.default(e._element).removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")})).emulateTransitionEnd(u)}}},c.setTransitioning=function(e){this._isTransitioning=e},c.dispose=function(){i.default.removeData(this._element,l),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},c._getConfig=function(e){return(e=r({},d,e)).toggle=Boolean(e.toggle),o.default.typeCheckConfig(s,e,f),e},c._getDimension=function(){return i.default(this._element).hasClass("width")?"width":"height"},c._getParent=function(){var t,n=this;o.default.isElement(this._config.parent)?(t=this._config.parent,void 0!==this._config.parent.jquery&&(t=this._config.parent[0])):t=document.querySelector(this._config.parent);var a='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]',r=[].slice.call(t.querySelectorAll(a));return i.default(r).each((function(t,i){n._addAriaAndCollapsedClass(e._getTargetFromElement(i),[i])})),t},c._addAriaAndCollapsedClass=function(e,t){var n=i.default(e).hasClass("show");t.length&&i.default(t).toggleClass("collapsed",!n).attr("aria-expanded",n)},e._getTargetFromElement=function(e){var t=o.default.getSelectorFromElement(e);return t?document.querySelector(t):null},e._jQueryInterface=function(t){return this.each((function(){var n=i.default(this),o=n.data(l),a=r({},d,n.data(),"object"==typeof t&&t?t:{});if(!o&&a.toggle&&"string"==typeof t&&/show|hide/.test(t)&&(a.toggle=!1),o||(o=new e(this,a),n.data(l,o)),"string"==typeof t){if(void 0===o[t])throw new TypeError('No method named "'+t+'"');o[t]()}}))},t=e,u=[{key:"VERSION",get:function(){return"4.6.1"}},{key:"Default",get:function(){return d}}],(n=null)&&a(t.prototype,n),u&&a(t,u),e}();return i.default(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',(function(e){"A"===e.currentTarget.tagName&&e.preventDefault();var t=i.default(this),n=o.default.getSelectorFromElement(this),a=[].slice.call(document.querySelectorAll(n));i.default(a).each((function(){var e=i.default(this),n=e.data(l)?"toggle":t.data();c._jQueryInterface.call(e,n)}))})),i.default.fn[s]=c._jQueryInterface,i.default.fn[s].Constructor=c,i.default.fn[s].noConflict=function(){return i.default.fn[s]=u,c._jQueryInterface},c}(n(0),n(1))},function(e,t,n){
/*!
  * Bootstrap dropdown.js v4.6.1 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
e.exports=function(e,t,n){"use strict";function i(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=i(e),a=i(t),r=i(n);function s(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var u="dropdown",d="bs.dropdown",f="."+d,c=o.default.fn[u],h=new RegExp("38|40|27"),g={offset:0,flip:!0,boundary:"scrollParent",reference:"toggle",display:"dynamic",popperConfig:null},m={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string",popperConfig:"(null|object)"},p=function(){function e(e,t){this._element=e,this._popper=null,this._config=this._getConfig(t),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var t,n,i,c=e.prototype;return c.toggle=function(){if(!this._element.disabled&&!o.default(this._element).hasClass("disabled")){var t=o.default(this._menu).hasClass("show");e._clearMenus(),t||this.show(!0)}},c.show=function(t){if(void 0===t&&(t=!1),!(this._element.disabled||o.default(this._element).hasClass("disabled")||o.default(this._menu).hasClass("show"))){var n={relatedTarget:this._element},i=o.default.Event("show.bs.dropdown",n),s=e._getParentFromElement(this._element);if(o.default(s).trigger(i),!i.isDefaultPrevented()){if(!this._inNavbar&&t){if(void 0===a.default)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");var l=this._element;"parent"===this._config.reference?l=s:r.default.isElement(this._config.reference)&&(l=this._config.reference,void 0!==this._config.reference.jquery&&(l=this._config.reference[0])),"scrollParent"!==this._config.boundary&&o.default(s).addClass("position-static"),this._popper=new a.default(l,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&0===o.default(s).closest(".navbar-nav").length&&o.default(document.body).children().on("mouseover",null,o.default.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),o.default(this._menu).toggleClass("show"),o.default(s).toggleClass("show").trigger(o.default.Event("shown.bs.dropdown",n))}}},c.hide=function(){if(!this._element.disabled&&!o.default(this._element).hasClass("disabled")&&o.default(this._menu).hasClass("show")){var t={relatedTarget:this._element},n=o.default.Event("hide.bs.dropdown",t),i=e._getParentFromElement(this._element);o.default(i).trigger(n),n.isDefaultPrevented()||(this._popper&&this._popper.destroy(),o.default(this._menu).toggleClass("show"),o.default(i).toggleClass("show").trigger(o.default.Event("hidden.bs.dropdown",t)))}},c.dispose=function(){o.default.removeData(this._element,d),o.default(this._element).off(f),this._element=null,this._menu=null,null!==this._popper&&(this._popper.destroy(),this._popper=null)},c.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},c._addEventListeners=function(){var e=this;o.default(this._element).on("click.bs.dropdown",(function(t){t.preventDefault(),t.stopPropagation(),e.toggle()}))},c._getConfig=function(e){return e=l({},this.constructor.Default,o.default(this._element).data(),e),r.default.typeCheckConfig(u,e,this.constructor.DefaultType),e},c._getMenuElement=function(){if(!this._menu){var t=e._getParentFromElement(this._element);t&&(this._menu=t.querySelector(".dropdown-menu"))}return this._menu},c._getPlacement=function(){var e=o.default(this._element.parentNode),t="bottom-start";return e.hasClass("dropup")?t=o.default(this._menu).hasClass("dropdown-menu-right")?"top-end":"top-start":e.hasClass("dropright")?t="right-start":e.hasClass("dropleft")?t="left-start":o.default(this._menu).hasClass("dropdown-menu-right")&&(t="bottom-end"),t},c._detectNavbar=function(){return o.default(this._element).closest(".navbar").length>0},c._getOffset=function(){var e=this,t={};return"function"==typeof this._config.offset?t.fn=function(t){return t.offsets=l({},t.offsets,e._config.offset(t.offsets,e._element)),t}:t.offset=this._config.offset,t},c._getPopperConfig=function(){var e={placement:this._getPlacement(),modifiers:{offset:this._getOffset(),flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}};return"static"===this._config.display&&(e.modifiers.applyStyle={enabled:!1}),l({},e,this._config.popperConfig)},e._jQueryInterface=function(t){return this.each((function(){var n=o.default(this).data(d);if(n||(n=new e(this,"object"==typeof t?t:null),o.default(this).data(d,n)),"string"==typeof t){if(void 0===n[t])throw new TypeError('No method named "'+t+'"');n[t]()}}))},e._clearMenus=function(t){if(!t||3!==t.which&&("keyup"!==t.type||9===t.which))for(var n=[].slice.call(document.querySelectorAll('[data-toggle="dropdown"]')),i=0,a=n.length;i<a;i++){var r=e._getParentFromElement(n[i]),s=o.default(n[i]).data(d),l={relatedTarget:n[i]};if(t&&"click"===t.type&&(l.clickEvent=t),s){var u=s._menu;if(o.default(r).hasClass("show")&&!(t&&("click"===t.type&&/input|textarea/i.test(t.target.tagName)||"keyup"===t.type&&9===t.which)&&o.default.contains(r,t.target))){var f=o.default.Event("hide.bs.dropdown",l);o.default(r).trigger(f),f.isDefaultPrevented()||("ontouchstart"in document.documentElement&&o.default(document.body).children().off("mouseover",null,o.default.noop),n[i].setAttribute("aria-expanded","false"),s._popper&&s._popper.destroy(),o.default(u).removeClass("show"),o.default(r).removeClass("show").trigger(o.default.Event("hidden.bs.dropdown",l)))}}}},e._getParentFromElement=function(e){var t,n=r.default.getSelectorFromElement(e);return n&&(t=document.querySelector(n)),t||e.parentNode},e._dataApiKeydownHandler=function(t){if(!(/input|textarea/i.test(t.target.tagName)?32===t.which||27!==t.which&&(40!==t.which&&38!==t.which||o.default(t.target).closest(".dropdown-menu").length):!h.test(t.which))&&!this.disabled&&!o.default(this).hasClass("disabled")){var n=e._getParentFromElement(this),i=o.default(n).hasClass("show");if(i||27!==t.which){if(t.preventDefault(),t.stopPropagation(),!i||27===t.which||32===t.which)return 27===t.which&&o.default(n.querySelector('[data-toggle="dropdown"]')).trigger("focus"),void o.default(this).trigger("click");var a=[].slice.call(n.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)")).filter((function(e){return o.default(e).is(":visible")}));if(0!==a.length){var r=a.indexOf(t.target);38===t.which&&r>0&&r--,40===t.which&&r<a.length-1&&r++,r<0&&(r=0),a[r].focus()}}}},t=e,i=[{key:"VERSION",get:function(){return"4.6.1"}},{key:"Default",get:function(){return g}},{key:"DefaultType",get:function(){return m}}],(n=null)&&s(t.prototype,n),i&&s(t,i),e}();return o.default(document).on("keydown.bs.dropdown.data-api",'[data-toggle="dropdown"]',p._dataApiKeydownHandler).on("keydown.bs.dropdown.data-api",".dropdown-menu",p._dataApiKeydownHandler).on("click.bs.dropdown.data-api keyup.bs.dropdown.data-api",p._clearMenus).on("click.bs.dropdown.data-api",'[data-toggle="dropdown"]',(function(e){e.preventDefault(),e.stopPropagation(),p._jQueryInterface.call(o.default(this),"toggle")})).on("click.bs.dropdown.data-api",".dropdown form",(function(e){e.stopPropagation()})),o.default.fn[u]=p._jQueryInterface,o.default.fn[u].Constructor=p,o.default.fn[u].noConflict=function(){return o.default.fn[u]=c,p._jQueryInterface},p}(n(0),n(3),n(1))},function(e,t,n){
/*!
  * Bootstrap modal.js v4.6.1 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
e.exports=function(e,t){"use strict";function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var i=n(e),o=n(t);function a(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var s="modal",l=".bs.modal",u=i.default.fn[s],d={backdrop:!0,keyboard:!0,focus:!0,show:!0},f={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},c=function(){function e(e,t){this._config=this._getConfig(t),this._element=e,this._dialog=e.querySelector(".modal-dialog"),this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollbarWidth=0}var t,n,u,c=e.prototype;return c.toggle=function(e){return this._isShown?this.hide():this.show(e)},c.show=function(e){var t=this;if(!this._isShown&&!this._isTransitioning){var n=i.default.Event("show.bs.modal",{relatedTarget:e});i.default(this._element).trigger(n),n.isDefaultPrevented()||(this._isShown=!0,i.default(this._element).hasClass("fade")&&(this._isTransitioning=!0),this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),i.default(this._element).on("click.dismiss.bs.modal",'[data-dismiss="modal"]',(function(e){return t.hide(e)})),i.default(this._dialog).on("mousedown.dismiss.bs.modal",(function(){i.default(t._element).one("mouseup.dismiss.bs.modal",(function(e){i.default(e.target).is(t._element)&&(t._ignoreBackdropClick=!0)}))})),this._showBackdrop((function(){return t._showElement(e)})))}},c.hide=function(e){var t=this;if(e&&e.preventDefault(),this._isShown&&!this._isTransitioning){var n=i.default.Event("hide.bs.modal");if(i.default(this._element).trigger(n),this._isShown&&!n.isDefaultPrevented()){this._isShown=!1;var a=i.default(this._element).hasClass("fade");if(a&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),i.default(document).off("focusin.bs.modal"),i.default(this._element).removeClass("show"),i.default(this._element).off("click.dismiss.bs.modal"),i.default(this._dialog).off("mousedown.dismiss.bs.modal"),a){var r=o.default.getTransitionDurationFromElement(this._element);i.default(this._element).one(o.default.TRANSITION_END,(function(e){return t._hideModal(e)})).emulateTransitionEnd(r)}else this._hideModal()}}},c.dispose=function(){[window,this._element,this._dialog].forEach((function(e){return i.default(e).off(l)})),i.default(document).off("focusin.bs.modal"),i.default.removeData(this._element,"bs.modal"),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._isTransitioning=null,this._scrollbarWidth=null},c.handleUpdate=function(){this._adjustDialog()},c._getConfig=function(e){return e=r({},d,e),o.default.typeCheckConfig(s,e,f),e},c._triggerBackdropTransition=function(){var e=this,t=i.default.Event("hidePrevented.bs.modal");if(i.default(this._element).trigger(t),!t.isDefaultPrevented()){var n=this._element.scrollHeight>document.documentElement.clientHeight;n||(this._element.style.overflowY="hidden"),this._element.classList.add("modal-static");var a=o.default.getTransitionDurationFromElement(this._dialog);i.default(this._element).off(o.default.TRANSITION_END),i.default(this._element).one(o.default.TRANSITION_END,(function(){e._element.classList.remove("modal-static"),n||i.default(e._element).one(o.default.TRANSITION_END,(function(){e._element.style.overflowY=""})).emulateTransitionEnd(e._element,a)})).emulateTransitionEnd(a),this._element.focus()}},c._showElement=function(e){var t=this,n=i.default(this._element).hasClass("fade"),a=this._dialog?this._dialog.querySelector(".modal-body"):null;this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),i.default(this._dialog).hasClass("modal-dialog-scrollable")&&a?a.scrollTop=0:this._element.scrollTop=0,n&&o.default.reflow(this._element),i.default(this._element).addClass("show"),this._config.focus&&this._enforceFocus();var r=i.default.Event("shown.bs.modal",{relatedTarget:e}),s=function(){t._config.focus&&t._element.focus(),t._isTransitioning=!1,i.default(t._element).trigger(r)};if(n){var l=o.default.getTransitionDurationFromElement(this._dialog);i.default(this._dialog).one(o.default.TRANSITION_END,s).emulateTransitionEnd(l)}else s()},c._enforceFocus=function(){var e=this;i.default(document).off("focusin.bs.modal").on("focusin.bs.modal",(function(t){document!==t.target&&e._element!==t.target&&0===i.default(e._element).has(t.target).length&&e._element.focus()}))},c._setEscapeEvent=function(){var e=this;this._isShown?i.default(this._element).on("keydown.dismiss.bs.modal",(function(t){e._config.keyboard&&27===t.which?(t.preventDefault(),e.hide()):e._config.keyboard||27!==t.which||e._triggerBackdropTransition()})):this._isShown||i.default(this._element).off("keydown.dismiss.bs.modal")},c._setResizeEvent=function(){var e=this;this._isShown?i.default(window).on("resize.bs.modal",(function(t){return e.handleUpdate(t)})):i.default(window).off("resize.bs.modal")},c._hideModal=function(){var e=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._showBackdrop((function(){i.default(document.body).removeClass("modal-open"),e._resetAdjustments(),e._resetScrollbar(),i.default(e._element).trigger("hidden.bs.modal")}))},c._removeBackdrop=function(){this._backdrop&&(i.default(this._backdrop).remove(),this._backdrop=null)},c._showBackdrop=function(e){var t=this,n=i.default(this._element).hasClass("fade")?"fade":"";if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className="modal-backdrop",n&&this._backdrop.classList.add(n),i.default(this._backdrop).appendTo(document.body),i.default(this._element).on("click.dismiss.bs.modal",(function(e){t._ignoreBackdropClick?t._ignoreBackdropClick=!1:e.target===e.currentTarget&&("static"===t._config.backdrop?t._triggerBackdropTransition():t.hide())})),n&&o.default.reflow(this._backdrop),i.default(this._backdrop).addClass("show"),!e)return;if(!n)return void e();var a=o.default.getTransitionDurationFromElement(this._backdrop);i.default(this._backdrop).one(o.default.TRANSITION_END,e).emulateTransitionEnd(a)}else if(!this._isShown&&this._backdrop){i.default(this._backdrop).removeClass("show");var r=function(){t._removeBackdrop(),e&&e()};if(i.default(this._element).hasClass("fade")){var s=o.default.getTransitionDurationFromElement(this._backdrop);i.default(this._backdrop).one(o.default.TRANSITION_END,r).emulateTransitionEnd(s)}else r()}else e&&e()},c._adjustDialog=function(){var e=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&e&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!e&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},c._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},c._checkScrollbar=function(){var e=document.body.getBoundingClientRect();this._isBodyOverflowing=Math.round(e.left+e.right)<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},c._setScrollbar=function(){var e=this;if(this._isBodyOverflowing){var t=[].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")),n=[].slice.call(document.querySelectorAll(".sticky-top"));i.default(t).each((function(t,n){var o=n.style.paddingRight,a=i.default(n).css("padding-right");i.default(n).data("padding-right",o).css("padding-right",parseFloat(a)+e._scrollbarWidth+"px")})),i.default(n).each((function(t,n){var o=n.style.marginRight,a=i.default(n).css("margin-right");i.default(n).data("margin-right",o).css("margin-right",parseFloat(a)-e._scrollbarWidth+"px")}));var o=document.body.style.paddingRight,a=i.default(document.body).css("padding-right");i.default(document.body).data("padding-right",o).css("padding-right",parseFloat(a)+this._scrollbarWidth+"px")}i.default(document.body).addClass("modal-open")},c._resetScrollbar=function(){var e=[].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"));i.default(e).each((function(e,t){var n=i.default(t).data("padding-right");i.default(t).removeData("padding-right"),t.style.paddingRight=n||""}));var t=[].slice.call(document.querySelectorAll(".sticky-top"));i.default(t).each((function(e,t){var n=i.default(t).data("margin-right");void 0!==n&&i.default(t).css("margin-right",n).removeData("margin-right")}));var n=i.default(document.body).data("padding-right");i.default(document.body).removeData("padding-right"),document.body.style.paddingRight=n||""},c._getScrollbarWidth=function(){var e=document.createElement("div");e.className="modal-scrollbar-measure",document.body.appendChild(e);var t=e.getBoundingClientRect().width-e.clientWidth;return document.body.removeChild(e),t},e._jQueryInterface=function(t,n){return this.each((function(){var o=i.default(this).data("bs.modal"),a=r({},d,i.default(this).data(),"object"==typeof t&&t?t:{});if(o||(o=new e(this,a),i.default(this).data("bs.modal",o)),"string"==typeof t){if(void 0===o[t])throw new TypeError('No method named "'+t+'"');o[t](n)}else a.show&&o.show(n)}))},t=e,u=[{key:"VERSION",get:function(){return"4.6.1"}},{key:"Default",get:function(){return d}}],(n=null)&&a(t.prototype,n),u&&a(t,u),e}();return i.default(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',(function(e){var t,n=this,a=o.default.getSelectorFromElement(this);a&&(t=document.querySelector(a));var s=i.default(t).data("bs.modal")?"toggle":r({},i.default(t).data(),i.default(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||e.preventDefault();var l=i.default(t).one("show.bs.modal",(function(e){e.isDefaultPrevented()||l.one("hidden.bs.modal",(function(){i.default(n).is(":visible")&&n.focus()}))}));c._jQueryInterface.call(i.default(t),s,this)})),i.default.fn[s]=c._jQueryInterface,i.default.fn[s].Constructor=c,i.default.fn[s].noConflict=function(){return i.default.fn[s]=u,c._jQueryInterface},c}(n(0),n(1))},function(e,t,n){
/*!
  * Bootstrap popover.js v4.6.1 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
e.exports=function(e,t){"use strict";function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var i=n(e),o=n(t);function a(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var l="popover",u=".bs.popover",d=i.default.fn[l],f=new RegExp("(^|\\s)bs-popover\\S+","g"),c=r({},o.default.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),h=r({},o.default.DefaultType,{content:"(string|element|function)"}),g={HIDE:"hide"+u,HIDDEN:"hidden"+u,SHOW:"show"+u,SHOWN:"shown"+u,INSERTED:"inserted"+u,CLICK:"click"+u,FOCUSIN:"focusin"+u,FOCUSOUT:"focusout"+u,MOUSEENTER:"mouseenter"+u,MOUSELEAVE:"mouseleave"+u},m=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,s(t,n);var r,d,m,p=o.prototype;return p.isWithContent=function(){return this.getTitle()||this._getContent()},p.addAttachmentClass=function(e){i.default(this.getTipElement()).addClass("bs-popover-"+e)},p.getTipElement=function(){return this.tip=this.tip||i.default(this.config.template)[0],this.tip},p.setContent=function(){var e=i.default(this.getTipElement());this.setElementContent(e.find(".popover-header"),this.getTitle());var t=this._getContent();"function"==typeof t&&(t=t.call(this.element)),this.setElementContent(e.find(".popover-body"),t),e.removeClass("fade show")},p._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},p._cleanTipClass=function(){var e=i.default(this.getTipElement()),t=e.attr("class").match(f);null!==t&&t.length>0&&e.removeClass(t.join(""))},o._jQueryInterface=function(e){return this.each((function(){var t=i.default(this).data("bs.popover"),n="object"==typeof e?e:null;if((t||!/dispose|hide/.test(e))&&(t||(t=new o(this,n),i.default(this).data("bs.popover",t)),"string"==typeof e)){if(void 0===t[e])throw new TypeError('No method named "'+e+'"');t[e]()}}))},r=o,m=[{key:"VERSION",get:function(){return"4.6.1"}},{key:"Default",get:function(){return c}},{key:"NAME",get:function(){return l}},{key:"DATA_KEY",get:function(){return"bs.popover"}},{key:"Event",get:function(){return g}},{key:"EVENT_KEY",get:function(){return u}},{key:"DefaultType",get:function(){return h}}],(d=null)&&a(r.prototype,d),m&&a(r,m),o}(o.default);return i.default.fn[l]=m._jQueryInterface,i.default.fn[l].Constructor=m,i.default.fn[l].noConflict=function(){return i.default.fn[l]=d,m._jQueryInterface},m}(n(0),n(4))},function(e,t,n){
/*!
  * Bootstrap tab.js v4.6.1 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
e.exports=function(e,t){"use strict";function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var i=n(e),o=n(t);function a(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var r=i.default.fn.tab,s=function(){function e(e){this._element=e}var t,n,r,s=e.prototype;return s.show=function(){var e=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&i.default(this._element).hasClass("active")||i.default(this._element).hasClass("disabled"))){var t,n,a=i.default(this._element).closest(".nav, .list-group")[0],r=o.default.getSelectorFromElement(this._element);if(a){var s="UL"===a.nodeName||"OL"===a.nodeName?"> li > .active":".active";n=(n=i.default.makeArray(i.default(a).find(s)))[n.length-1]}var l=i.default.Event("hide.bs.tab",{relatedTarget:this._element}),u=i.default.Event("show.bs.tab",{relatedTarget:n});if(n&&i.default(n).trigger(l),i.default(this._element).trigger(u),!u.isDefaultPrevented()&&!l.isDefaultPrevented()){r&&(t=document.querySelector(r)),this._activate(this._element,a);var d=function(){var t=i.default.Event("hidden.bs.tab",{relatedTarget:e._element}),o=i.default.Event("shown.bs.tab",{relatedTarget:n});i.default(n).trigger(t),i.default(e._element).trigger(o)};t?this._activate(t,t.parentNode,d):d()}}},s.dispose=function(){i.default.removeData(this._element,"bs.tab"),this._element=null},s._activate=function(e,t,n){var a=this,r=(!t||"UL"!==t.nodeName&&"OL"!==t.nodeName?i.default(t).children(".active"):i.default(t).find("> li > .active"))[0],s=n&&r&&i.default(r).hasClass("fade"),l=function(){return a._transitionComplete(e,r,n)};if(r&&s){var u=o.default.getTransitionDurationFromElement(r);i.default(r).removeClass("show").one(o.default.TRANSITION_END,l).emulateTransitionEnd(u)}else l()},s._transitionComplete=function(e,t,n){if(t){i.default(t).removeClass("active");var a=i.default(t.parentNode).find("> .dropdown-menu .active")[0];a&&i.default(a).removeClass("active"),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!1)}i.default(e).addClass("active"),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!0),o.default.reflow(e),e.classList.contains("fade")&&e.classList.add("show");var r=e.parentNode;if(r&&"LI"===r.nodeName&&(r=r.parentNode),r&&i.default(r).hasClass("dropdown-menu")){var s=i.default(e).closest(".dropdown")[0];if(s){var l=[].slice.call(s.querySelectorAll(".dropdown-toggle"));i.default(l).addClass("active")}e.setAttribute("aria-expanded",!0)}n&&n()},e._jQueryInterface=function(t){return this.each((function(){var n=i.default(this),o=n.data("bs.tab");if(o||(o=new e(this),n.data("bs.tab",o)),"string"==typeof t){if(void 0===o[t])throw new TypeError('No method named "'+t+'"');o[t]()}}))},t=e,r=[{key:"VERSION",get:function(){return"4.6.1"}}],(n=null)&&a(t.prototype,n),r&&a(t,r),e}();return i.default(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',(function(e){e.preventDefault(),s._jQueryInterface.call(i.default(this),"show")})),i.default.fn.tab=s._jQueryInterface,i.default.fn.tab.Constructor=s,i.default.fn.tab.noConflict=function(){return i.default.fn.tab=r,s._jQueryInterface},s}(n(0),n(1))},function(e,t,n){
/*!
  * Bootstrap toast.js v4.6.1 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
e.exports=function(e,t){"use strict";function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var i=n(e),o=n(t);function a(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var s="toast",l=i.default.fn[s],u={animation:!0,autohide:!0,delay:500},d={animation:"boolean",autohide:"boolean",delay:"number"},f=function(){function e(e,t){this._element=e,this._config=this._getConfig(t),this._timeout=null,this._setListeners()}var t,n,l,f=e.prototype;return f.show=function(){var e=this,t=i.default.Event("show.bs.toast");if(i.default(this._element).trigger(t),!t.isDefaultPrevented()){this._clearTimeout(),this._config.animation&&this._element.classList.add("fade");var n=function(){e._element.classList.remove("showing"),e._element.classList.add("show"),i.default(e._element).trigger("shown.bs.toast"),e._config.autohide&&(e._timeout=setTimeout((function(){e.hide()}),e._config.delay))};if(this._element.classList.remove("hide"),o.default.reflow(this._element),this._element.classList.add("showing"),this._config.animation){var a=o.default.getTransitionDurationFromElement(this._element);i.default(this._element).one(o.default.TRANSITION_END,n).emulateTransitionEnd(a)}else n()}},f.hide=function(){if(this._element.classList.contains("show")){var e=i.default.Event("hide.bs.toast");i.default(this._element).trigger(e),e.isDefaultPrevented()||this._close()}},f.dispose=function(){this._clearTimeout(),this._element.classList.contains("show")&&this._element.classList.remove("show"),i.default(this._element).off("click.dismiss.bs.toast"),i.default.removeData(this._element,"bs.toast"),this._element=null,this._config=null},f._getConfig=function(e){return e=r({},u,i.default(this._element).data(),"object"==typeof e&&e?e:{}),o.default.typeCheckConfig(s,e,this.constructor.DefaultType),e},f._setListeners=function(){var e=this;i.default(this._element).on("click.dismiss.bs.toast",'[data-dismiss="toast"]',(function(){return e.hide()}))},f._close=function(){var e=this,t=function(){e._element.classList.add("hide"),i.default(e._element).trigger("hidden.bs.toast")};if(this._element.classList.remove("show"),this._config.animation){var n=o.default.getTransitionDurationFromElement(this._element);i.default(this._element).one(o.default.TRANSITION_END,t).emulateTransitionEnd(n)}else t()},f._clearTimeout=function(){clearTimeout(this._timeout),this._timeout=null},e._jQueryInterface=function(t){return this.each((function(){var n=i.default(this),o=n.data("bs.toast");if(o||(o=new e(this,"object"==typeof t&&t),n.data("bs.toast",o)),"string"==typeof t){if(void 0===o[t])throw new TypeError('No method named "'+t+'"');o[t](this)}}))},t=e,l=[{key:"VERSION",get:function(){return"4.6.1"}},{key:"DefaultType",get:function(){return d}},{key:"Default",get:function(){return u}}],(n=null)&&a(t.prototype,n),l&&a(t,l),e}();return i.default.fn[s]=f._jQueryInterface,i.default.fn[s].Constructor=f,i.default.fn[s].noConflict=function(){return i.default.fn[s]=l,f._jQueryInterface},f}(n(0),n(1))},function(e,t,n){"use strict";n.r(t),n.d(t,"isSafari",(function(){return f})),n.d(t,"isSafariNew",(function(){return c})),n.d(t,"isIOS",(function(){return h})),n.d(t,"isIE",(function(){return g})),n.d(t,"isMobile",(function(){return m})),n.d(t,"isScreenXs",(function(){return p})),n.d(t,"isScreenLg",(function(){return _})),n.d(t,"_self",(function(){return v})),n.d(t,"$",(function(){return r})),n.d(t,"animateCss",(function(){return l}));var i=n(2),o=n(0),a=n.n(o);"object"==typeof window&&(window.$=window.jQuery=a.a);var r=a.a,s=function(e,t){return new Promise((function(n){function i(){e.classList.remove("animated",t),n(),clearTimeout(o),e.removeEventListener("animationend",i)}e.classList.add("animated",t);var o=setTimeout(i,e.classList.contains("slower")?800:500);e.addEventListener("animationend",i)}))};"object"==typeof window&&(window.animateCss=s);var l=s;n(5),n(6),n(7),n(8),n(9),n(10),n(11),n(12),n(4),n(1);const{userAgent:u}=navigator,d=document.body?document.body.offsetWidth:window.screen.width,f=u.includes("Safari")&&!u.includes("Chrome"),c=f&&/Version\/1[4-9]/i.test(u),h=/iPad|iPhone|iPod/.test(u)&&!window.MSStream,g=!!document.documentMode,m=h||/Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(u),p=d<=575.98,_=d>=992,v=i.a+"@"+i.b;t.default=r}])}));
//# sourceMappingURL=storefront-twbs.min.js.map

/***/ }),

/***/ "./node_modules/@ecomplus/widget-search-engine/src/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@ecomplus/widget-search-engine/src/index.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.url-search-params.js */ "./node_modules/core-js/modules/web.url-search-params.js");
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_1__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'core-js/modules/es.error.cause.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _ecomplus_storefront_twbs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ecomplus/storefront-twbs */ "./node_modules/@ecomplus/widget-search-engine/node_modules/@ecomplus/storefront-twbs/dist/storefront-twbs.min.js");
/* harmony import */ var _ecomplus_storefront_twbs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ecomplus_storefront_twbs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _components_SearchEngine_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! #components/SearchEngine.vue */ "./node_modules/@ecomplus/storefront-components/src/SearchEngine.vue");




/*!
 * @ecomplus/widget-search-engine
 * (c) E-Com Club <ti@e-com.club>
 * Released under the MIT License.
 */



/* harmony default export */ __webpack_exports__["default"] = (function () {
  let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let elId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'search-engine';
  let paginationElId = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'search-pagination';
  const $searchEngine = document.getElementById(elId);

  if ($searchEngine) {
    const $dock = document.getElementById("".concat(elId, "-dock"));
    let $productItems;
    const getScopedSlots = window.storefront && window.storefront.getScopedSlots;
    const {
      dataset
    } = $searchEngine;
    const urlParams = new URLSearchParams(window.location.search);
    const props = { ...options.props,
      term: urlParams.get('term'),
      brands: urlParams.getAll('brands[]'),
      categories: urlParams.getAll('categories[]'),
      defaultFilters: urlParams.getAll('filters[]').reduce((filters, gridAndOption) => {
        const [gridId, option] = gridAndOption.split(':');

        if (!filters[gridId]) {
          filters[gridId] = [];
        }

        filters[gridId].push(option);
        return filters;
      }, {}),
      defaultSort: dataset.sort || urlParams.get('sort')
    };
    ['brands', 'categories'].forEach(resource => {
      if (dataset[resource]) {
        try {
          props[resource] = JSON.parse(dataset[resource]);
        } catch (err) {
          console.error(err);
          return;
        }

        if (props[resource] && props[resource].length < 2) {
          props["isFixed".concat(resource.charAt(0).toUpperCase()).concat(resource.slice(1))] = true;
        }

        props.hasPopularItems = false;
      }
    });
    const {
      resource
    } = window.document.body.dataset;

    switch (resource) {
      case 'brands':
      case 'categories':
        if (!props[resource] || !props[resource].length) {
          console.error(new Error("Skipping SearchEngine with empty '".concat(resource, "' filter")));
          return;
        }

    }

    const pageTitle = document.title;

    const updatePageUrl = () => {
      const term = urlParams.get('term');
      let title = term ? "".concat(term, " ~ ").concat(pageTitle) : pageTitle;
      const page = urlParams.get('page');

      if (page > 1) {
        title += " (".concat(page, ") ");
      }

      if (window.history) {
        const query = urlParams.toString();
        const {
          pathname
        } = window.location;
        window.history.pushState({
          pathname,
          query
        }, title, pathname + (query ? "?".concat(query) : ''));
      }

      document.title = title;
    };

    updatePageUrl();
    const vueApp = new vue__WEBPACK_IMPORTED_MODULE_4__["default"]({
      data: {
        countRequests: 0,
        canShowItems: !$dock,
        term: props.term,
        page: parseInt(urlParams.get('page'), 10) || 1,
        totalItems: 0
      },

      render(createElement) {
        const vm = this;

        if (options.pagination) {
          __webpack_require__.e(/*! import() */ 16).then(__webpack_require__.bind(null, /*! #components/APagination.vue */ "./node_modules/@ecomplus/storefront-components/src/APagination.vue")).then(pagination => {
            new vue__WEBPACK_IMPORTED_MODULE_4__["default"]({
              render: h => h(pagination.default, {
                props: {
                  totalItems: vm.totalItems,
                  page: vm.page
                },
                on: {
                  'update:page'(page) {
                    vm.page = page;
                    urlParams.set('page', page);
                    updatePageUrl();
                    window.scroll({
                      top: 0,
                      behavior: 'smooth'
                    });
                  }

                }
              })
            }).$mount(document.getElementById(paginationElId));
          });
        }

        return createElement(_components_SearchEngine_vue__WEBPACK_IMPORTED_MODULE_5__["default"], {
          attrs: {
            id: $dock ? null : elId
          },
          props: { ...props,
            term: vm.term,
            page: vm.page,
            canLoadMore: !options.pagination && !dataset.disableLoadMore,
            canShowItems: vm.canShowItems,
            loadMoreSelector: $dock ? '#search-engine-load' : null,
            isFilterable: !dataset.disableFilters
          },
          on: {
            'update:term'(term) {
              vm.term = term;
              urlParams.set('term', term);
              updatePageUrl();
            },

            fetch(_ref) {
              let {
                ecomSearch,
                fetching,
                isPopularItems
              } = _ref;
              fetching.then(result => {
                if (!isPopularItems) {
                  vm.totalItems = ecomSearch.getTotalCount();
                }

                if ($dock) {
                  vm.countRequests++;

                  const renderNewItems = () => {
                    vm.canShowItems = true;
                    Object(_ecomplus_storefront_twbs__WEBPACK_IMPORTED_MODULE_3__["$"])('#search-engine-snap').remove();
                  };

                  if (!vm.canShowItems) {
                    if (vm.countRequests > 1) {
                      renderNewItems();
                    } else if (result && result.hits) {
                      if (!$productItems || $productItems.length !== result.hits.hits.length) {
                        renderNewItems();
                      } else {
                        let isSameItems = true;
                        const {
                          hits
                        } = result.hits;

                        for (let i = 0; i < hits.length; i++) {
                          if (!$productItems.find("[data-product-id=\"".concat(hits[i]._id, "\"]")).length) {
                            isSameItems = false;
                            break;
                          }
                        }

                        if (!isSameItems) {
                          renderNewItems();
                        }
                      }
                    }
                  }
                }
              });
            }

          },
          scopedSlots: typeof getScopedSlots === 'function' ? getScopedSlots($searchEngine, createElement, !$dock) : undefined
        });
      }

    });

    if ($dock) {
      Object(_ecomplus_storefront_twbs__WEBPACK_IMPORTED_MODULE_3__["$"])($searchEngine).append(Object(_ecomplus_storefront_twbs__WEBPACK_IMPORTED_MODULE_3__["$"])('<div>', {
        id: 'search-engine-load'
      }));

      const mount = () => vueApp.$mount($dock);

      $productItems = Object(_ecomplus_storefront_twbs__WEBPACK_IMPORTED_MODULE_3__["$"])('#search-engine-snap .product-item');

      if ($productItems.length) {
        const observer = new window.MutationObserver(() => {
          clearTimeout(fallbackTimer);
          observer.disconnect();
          setTimeout(mount, 150);
        });
        observer.observe($productItems[0], {
          childList: true
        });
        const fallbackTimer = setTimeout(() => {
          observer.disconnect();
          mount();
        }, 3000);
      } else {
        mount();
      }
    } else {
      vueApp.$mount($searchEngine);
    }
  }
});

/***/ }),

/***/ "./node_modules/@linusborg/vue-simple-portal/dist/index.esm.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@linusborg/vue-simple-portal/dist/index.esm.js ***!
  \*********************************************************************/
/*! exports provided: default, Portal, config, setSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Portal", function() { return Portal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSelector", function() { return setSelector; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var nanoid_non_secure__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nanoid/non-secure */ "./node_modules/nanoid/non-secure/index.js");

/**
 * vue-simple-portal
 * version: 0.1.5,
 * (c) Thorsten Lünborg, 2021 - present
 * LICENCE: Apache-2.0
 * http://github.com/linusborg/vue-simple-portal
*/



function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

var config = {
  selector: "vue-portal-target-".concat(Object(nanoid_non_secure__WEBPACK_IMPORTED_MODULE_1__["nanoid"])())
};
var setSelector = function setSelector(selector) {
  return config.selector = selector;
};
var isBrowser = typeof window !== 'undefined' && (typeof document === "undefined" ? "undefined" : _typeof(document)) !== undefined;

var TargetContainer = vue__WEBPACK_IMPORTED_MODULE_0__["default"].extend({
  // as an abstract component, it doesn't appear in
  // the $parent chain of components.
  // which means the next parent of any component rendered inside of this oen
  // will be the parent from which is was sent
  // @ts-expect-error
  abstract: true,
  name: 'PortalOutlet',
  props: ['nodes', 'tag'],
  data: function data(vm) {
    return {
      updatedNodes: vm.nodes
    };
  },
  render: function render(h) {
    var nodes = this.updatedNodes && this.updatedNodes();
    if (!nodes) return h();
    return nodes.length === 1 && !nodes[0].text ? nodes : h(this.tag || 'DIV', nodes);
  },
  destroyed: function destroyed() {
    var el = this.$el;
    el && el.parentNode.removeChild(el);
  }
});

var Portal = vue__WEBPACK_IMPORTED_MODULE_0__["default"].extend({
  name: 'VueSimplePortal',
  props: {
    disabled: {
      type: Boolean
    },
    prepend: {
      type: Boolean
    },
    selector: {
      type: String,
      default: function _default() {
        return "#".concat(config.selector);
      }
    },
    tag: {
      type: String,
      default: 'DIV'
    }
  },
  render: function render(h) {
    if (this.disabled) {
      var nodes = this.$scopedSlots && this.$scopedSlots.default();
      if (!nodes) return h();
      return nodes.length < 2 && !nodes[0].text ? nodes : h(this.tag, nodes);
    }

    return h();
  },
  created: function created() {
    if (!this.getTargetEl()) {
      this.insertTargetEl();
    }
  },
  updated: function updated() {
    var _this = this;

    // We only update the target container component
    // if the scoped slot function is a fresh one
    // The new slot syntax (since Vue 2.6) can cache unchanged slot functions
    // and we want to respect that here.
    this.$nextTick(function () {
      if (!_this.disabled && _this.slotFn !== _this.$scopedSlots.default) {
        _this.container.updatedNodes = _this.$scopedSlots.default;
      }

      _this.slotFn = _this.$scopedSlots.default;
    });
  },
  beforeDestroy: function beforeDestroy() {
    this.unmount();
  },
  watch: {
    disabled: {
      immediate: true,
      handler: function handler(disabled) {
        disabled ? this.unmount() : this.$nextTick(this.mount);
      }
    }
  },
  methods: {
    // This returns the element into which the content should be mounted.
    getTargetEl: function getTargetEl() {
      if (!isBrowser) return;
      return document.querySelector(this.selector);
    },
    insertTargetEl: function insertTargetEl() {
      if (!isBrowser) return;
      var parent = document.querySelector('body');
      var child = document.createElement(this.tag);
      child.id = this.selector.substring(1);
      parent.appendChild(child);
    },
    mount: function mount() {
      if (!isBrowser) return;
      var targetEl = this.getTargetEl();
      var el = document.createElement('DIV');

      if (this.prepend && targetEl.firstChild) {
        targetEl.insertBefore(el, targetEl.firstChild);
      } else {
        targetEl.appendChild(el);
      }

      this.container = new TargetContainer({
        el: el,
        parent: this,
        propsData: {
          tag: this.tag,
          nodes: this.$scopedSlots.default
        }
      });
    },
    unmount: function unmount() {
      if (this.container) {
        this.container.$destroy();
        delete this.container;
      }
    }
  }
});

function install(_Vue) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  _Vue.component(options.name || 'portal', Portal);

  if (options.defaultSelector) {
    setSelector(options.defaultSelector);
  }
}

if (typeof window !== 'undefined' && window.Vue && window.Vue === vue__WEBPACK_IMPORTED_MODULE_0__["default"]) {
  // plugin was inlcuded directly in a browser
  vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(install);
}

/* harmony default export */ __webpack_exports__["default"] = (install);



/***/ }),

/***/ "./node_modules/nanoid/non-secure/index.js":
/*!*************************************************!*\
  !*** ./node_modules/nanoid/non-secure/index.js ***!
  \*************************************************/
/*! exports provided: nanoid, customAlphabet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nanoid", function() { return nanoid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customAlphabet", function() { return customAlphabet; });
let urlAlphabet =
  'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict'
let customAlphabet = (alphabet, size) => {
  return () => {
    let id = ''
    let i = size
    while (i--) {
      id += alphabet[(Math.random() * alphabet.length) | 0]
    }
    return id
  }
}
let nanoid = (size = 21) => {
  let id = ''
  let i = size
  while (i--) {
    id += urlAlphabet[(Math.random() * 64) | 0]
  }
  return id
}



/***/ })

}]);
//# sourceMappingURL=chunk.560426a0275f91732f08.js.map