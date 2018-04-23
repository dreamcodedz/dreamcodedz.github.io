var Zepto=function(){function c(t){return null==t?String(t):z[Z.call(t)]||"object"}function s(t){return"function"==c(t)}function o(t){return null!=t&&t==t.window}function a(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function r(t){return"object"==c(t)}function l(t){return r(t)&&!o(t)&&Object.getPrototypeOf(t)==Object.prototype}function u(t){return"number"==typeof t.length}function f(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function n(t){return t in e?e[t]:e[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function h(t,e){return"number"!=typeof e||L[f(t)]?e:e+"px"}function i(t){return"children"in t?N.call(t.children):x.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function p(t,e){return null==e?x(t):x(t).filter(e)}function d(t,e,n,i){return s(e)?e.call(t,n,i):e}function m(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function g(t,e){var n=t.className||"",i=n&&n.baseVal!==y;return e===y?i?n.baseVal:n:void(i?n.baseVal=e:t.className=e)}function v(e){try{return e?"true"==e||"false"!=e&&("null"==e?null:+e+""==e?+e:/^[\[\{]/.test(e)?x.parseJSON(e):e):e}catch(t){return e}}var y,b,x,w,E,C,S=[],N=S.slice,T=S.filter,j=window.document,O={},e={},L={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},P=/^\s*<(\w+|!)[^>]*>/,A=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,_=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,k=/^(?:body|html)$/i,R=/([A-Z])/g,D=["val","css","html","text","data","width","height","offset"],t=j.createElement("table"),H=j.createElement("tr"),I={tr:j.createElement("tbody"),tbody:t,thead:t,tfoot:t,td:H,th:H,"*":j.createElement("div")},M=/complete|loaded|interactive/,F=/^[\w-]*$/,z={},Z=z.toString,$={},q=j.createElement("div"),B={tabindex:"tabIndex",readonly:"readOnly",for:"htmlFor",class:"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},J=Array.isArray||function(t){return t instanceof Array};return $.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var i,r=t.parentNode,o=!r;return o&&(r=q).appendChild(t),i=~$.qsa(r,e).indexOf(t),o&&q.removeChild(t),i},E=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},C=function(n){return T.call(n,function(t,e){return n.indexOf(t)==e})},$.fragment=function(t,e,n){var i,r,o;return A.test(t)&&(i=x(j.createElement(RegExp.$1))),i||(t.replace&&(t=t.replace(_,"<$1></$2>")),e===y&&(e=P.test(t)&&RegExp.$1),e in I||(e="*"),(o=I[e]).innerHTML=""+t,i=x.each(N.call(o.childNodes),function(){o.removeChild(this)})),l(n)&&(r=x(i),x.each(n,function(t,e){-1<D.indexOf(t)?r[t](e):r.attr(t,e)})),i},$.Z=function(t,e){return(t=t||[]).__proto__=x.fn,t.selector=e||"",t},$.isZ=function(t){return t instanceof $.Z},$.init=function(t,e){var n,i;if(!t)return $.Z();if("string"==typeof t)if("<"==(t=t.trim())[0]&&P.test(t))n=$.fragment(t,RegExp.$1,e),t=null;else{if(e!==y)return x(e).find(t);n=$.qsa(j,t)}else{if(s(t))return x(j).ready(t);if($.isZ(t))return t;if(J(t))i=t,n=T.call(i,function(t){return null!=t});else if(r(t))n=[t],t=null;else if(P.test(t))n=$.fragment(t.trim(),RegExp.$1,e),t=null;else{if(e!==y)return x(e).find(t);n=$.qsa(j,t)}}return $.Z(n,t)},(x=function(t,e){return $.init(t,e)}).extend=function(e){var n,t=N.call(arguments,1);return"boolean"==typeof e&&(n=e,e=t.shift()),t.forEach(function(t){!function t(e,n,i){for(b in n)i&&(l(n[b])||J(n[b]))?(l(n[b])&&!l(e[b])&&(e[b]={}),J(n[b])&&!J(e[b])&&(e[b]=[]),t(e[b],n[b],i)):n[b]!==y&&(e[b]=n[b])}(e,t,n)}),e},$.qsa=function(t,e){var n,i="#"==e[0],r=!i&&"."==e[0],o=i||r?e.slice(1):e,s=F.test(o);return a(t)&&s&&i?(n=t.getElementById(o))?[n]:[]:1!==t.nodeType&&9!==t.nodeType?[]:N.call(s&&!i?r?t.getElementsByClassName(o):t.getElementsByTagName(e):t.querySelectorAll(e))},x.contains=j.documentElement.contains?function(t,e){return t!==e&&t.contains(e)}:function(t,e){for(;e&&(e=e.parentNode);)if(e===t)return!0;return!1},x.type=c,x.isFunction=s,x.isWindow=o,x.isArray=J,x.isPlainObject=l,x.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},x.inArray=function(t,e,n){return S.indexOf.call(e,t,n)},x.camelCase=E,x.trim=function(t){return null==t?"":String.prototype.trim.call(t)},x.uuid=0,x.support={},x.expr={},x.map=function(t,e){var n,i,r,o,s=[];if(u(t))for(i=0;i<t.length;i++)null!=(n=e(t[i],i))&&s.push(n);else for(r in t)null!=(n=e(t[r],r))&&s.push(n);return 0<(o=s).length?x.fn.concat.apply([],o):o},x.each=function(t,e){var n,i;if(u(t)){for(n=0;n<t.length;n++)if(!1===e.call(t[n],n,t[n]))return t}else for(i in t)if(!1===e.call(t[i],i,t[i]))return t;return t},x.grep=function(t,e){return T.call(t,e)},window.JSON&&(x.parseJSON=JSON.parse),x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){z["[object "+e+"]"]=e.toLowerCase()}),x.fn={forEach:S.forEach,reduce:S.reduce,push:S.push,sort:S.sort,indexOf:S.indexOf,concat:S.concat,map:function(n){return x(x.map(this,function(t,e){return n.call(t,e,t)}))},slice:function(){return x(N.apply(this,arguments))},ready:function(t){return M.test(j.readyState)&&j.body?t(x):j.addEventListener("DOMContentLoaded",function(){t(x)},!1),this},get:function(t){return t===y?N.call(this):this[0<=t?t:t+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(n){return S.every.call(this,function(t,e){return!1!==n.call(t,e,t)}),this},filter:function(e){return s(e)?this.not(this.not(e)):x(T.call(this,function(t){return $.matches(t,e)}))},add:function(t,e){return x(C(this.concat(x(t,e))))},is:function(t){return 0<this.length&&$.matches(this[0],t)},not:function(e){var n=[];if(s(e)&&e.call!==y)this.each(function(t){e.call(this,t)||n.push(this)});else{var i="string"==typeof e?this.filter(e):u(e)&&s(e.item)?N.call(e):x(e);this.forEach(function(t){i.indexOf(t)<0&&n.push(t)})}return x(n)},has:function(t){return this.filter(function(){return r(t)?x.contains(this,t):x(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!r(t)?t:x(t)},last:function(){var t=this[this.length-1];return t&&!r(t)?t:x(t)},find:function(t){var n=this;return t?"object"==typeof t?x(t).filter(function(){var e=this;return S.some.call(n,function(t){return x.contains(t,e)})}):1==this.length?x($.qsa(this[0],t)):this.map(function(){return $.qsa(this,t)}):x()},closest:function(t,e){var n=this[0],i=!1;for("object"==typeof t&&(i=x(t));n&&!(i?0<=i.indexOf(n):$.matches(n,t));)n=n!==e&&!a(n)&&n.parentNode;return x(n)},parents:function(t){for(var e=[],n=this;0<n.length;)n=x.map(n,function(t){return(t=t.parentNode)&&!a(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return p(e,t)},parent:function(t){return p(C(this.pluck("parentNode")),t)},children:function(t){return p(this.map(function(){return i(this)}),t)},contents:function(){return this.map(function(){return N.call(this.childNodes)})},siblings:function(t){return p(this.map(function(t,e){return T.call(i(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(e){return x.map(this,function(t){return t[e]})},show:function(){return this.each(function(){var t,e,n;"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=(t=this.nodeName,O[t]||(e=j.createElement(t),j.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),O[t]=n),O[t]))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(e){var n=s(e);if(this[0]&&!n)var i=x(e).get(0),r=i.parentNode||1<this.length;return this.each(function(t){x(this).wrapAll(n?e.call(this,t):r?i.cloneNode(!0):i)})},wrapAll:function(t){if(this[0]){x(this[0]).before(t=x(t));for(var e;(e=t.children()).length;)t=e.first();x(t).append(this)}return this},wrapInner:function(r){var o=s(r);return this.each(function(t){var e=x(this),n=e.contents(),i=o?r.call(this,t):r;n.length?n.wrapAll(i):e.append(i)})},unwrap:function(){return this.parent().each(function(){x(this).replaceWith(x(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(e){return this.each(function(){var t=x(this);(e===y?"none"==t.css("display"):e)?t.show():t.hide()})},prev:function(t){return x(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return x(this.pluck("nextElementSibling")).filter(t||"*")},html:function(n){return 0 in arguments?this.each(function(t){var e=this.innerHTML;x(this).empty().append(d(this,n,t,e))}):0 in this?this[0].innerHTML:null},text:function(n){return 0 in arguments?this.each(function(t){var e=d(this,n,t,this.textContent);this.textContent=null==e?"":""+e}):0 in this?this[0].textContent:null},attr:function(e,n){var t;return"string"!=typeof e||1 in arguments?this.each(function(t){if(1===this.nodeType)if(r(e))for(b in e)m(this,b,e[b]);else m(this,e,d(this,n,t,this.getAttribute(e)))}):this.length&&1===this[0].nodeType?!(t=this[0].getAttribute(e))&&e in this[0]?this[0][e]:t:y},removeAttr:function(t){return this.each(function(){1===this.nodeType&&t.split(" ").forEach(function(t){m(this,t)},this)})},prop:function(e,n){return e=B[e]||e,1 in arguments?this.each(function(t){this[e]=d(this,n,t,this[e])}):this[0]&&this[0][e]},data:function(t,e){var n="data-"+t.replace(R,"-$1").toLowerCase(),i=1 in arguments?this.attr(n,e):this.attr(n);return null!==i?v(i):y},val:function(e){return 0 in arguments?this.each(function(t){this.value=d(this,e,t,this.value)}):this[0]&&(this[0].multiple?x(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(o){if(o)return this.each(function(t){var e=x(this),n=d(this,o,t,e.offset()),i=e.offsetParent().offset(),r={top:n.top-i.top,left:n.left-i.left};"static"==e.css("position")&&(r.position="relative"),e.css(r)});if(!this.length)return null;var t=this[0].getBoundingClientRect();return{left:t.left+window.pageXOffset,top:t.top+window.pageYOffset,width:Math.round(t.width),height:Math.round(t.height)}},css:function(t,e){if(arguments.length<2){var n,i=this[0];if(!i)return;if(n=getComputedStyle(i,""),"string"==typeof t)return i.style[E(t)]||n.getPropertyValue(t);if(J(t)){var r={};return x.each(t,function(t,e){r[e]=i.style[E(e)]||n.getPropertyValue(e)}),r}}var o="";if("string"==c(t))e||0===e?o=f(t)+":"+h(t,e):this.each(function(){this.style.removeProperty(f(t))});else for(b in t)t[b]||0===t[b]?o+=f(b)+":"+h(b,t[b])+";":this.each(function(){this.style.removeProperty(f(b))});return this.each(function(){this.style.cssText+=";"+o})},index:function(t){return t?this.indexOf(x(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return!!t&&S.some.call(this,function(t){return this.test(g(t))},n(t))},addClass:function(n){return n?this.each(function(t){if("className"in this){w=[];var e=g(this);d(this,n,t,e).split(/\s+/g).forEach(function(t){x(this).hasClass(t)||w.push(t)},this),w.length&&g(this,e+(e?" ":"")+w.join(" "))}}):this},removeClass:function(e){return this.each(function(t){if("className"in this){if(e===y)return g(this,"");w=g(this),d(this,e,t,w).split(/\s+/g).forEach(function(t){w=w.replace(n(t)," ")}),g(this,w.trim())}})},toggleClass:function(n,i){return n?this.each(function(t){var e=x(this);d(this,n,t,g(this)).split(/\s+/g).forEach(function(t){(i===y?!e.hasClass(t):i)?e.addClass(t):e.removeClass(t)})}):this},scrollTop:function(t){if(this.length){var e="scrollTop"in this[0];return t===y?e?this[0].scrollTop:this[0].pageYOffset:this.each(e?function(){this.scrollTop=t}:function(){this.scrollTo(this.scrollX,t)})}},scrollLeft:function(t){if(this.length){var e="scrollLeft"in this[0];return t===y?e?this[0].scrollLeft:this[0].pageXOffset:this.each(e?function(){this.scrollLeft=t}:function(){this.scrollTo(t,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),n=this.offset(),i=k.test(e[0].nodeName)?{top:0,left:0}:e.offset();return n.top-=parseFloat(x(t).css("margin-top"))||0,n.left-=parseFloat(x(t).css("margin-left"))||0,i.top+=parseFloat(x(e[0]).css("border-top-width"))||0,i.left+=parseFloat(x(e[0]).css("border-left-width"))||0,{top:n.top-i.top,left:n.left-i.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||j.body;t&&!k.test(t.nodeName)&&"static"==x(t).css("position");)t=t.offsetParent;return t})}},x.fn.detach=x.fn.remove,["width","height"].forEach(function(i){var r=i.replace(/./,function(t){return t[0].toUpperCase()});x.fn[i]=function(e){var t,n=this[0];return e===y?o(n)?n["inner"+r]:a(n)?n.documentElement["scroll"+r]:(t=this.offset())&&t[i]:this.each(function(t){(n=x(this)).css(i,d(this,e,t,n[i]()))})}}),["after","prepend","before","append"].forEach(function(e,s){var a=s%2;x.fn[e]=function(){var e,i,r=x.map(arguments,function(t){return"object"==(e=c(t))||"array"==e||null==t?t:$.fragment(t)}),o=1<this.length;return r.length<1?this:this.each(function(t,e){i=a?e:e.parentNode,e=0==s?e.nextSibling:1==s?e.firstChild:2==s?e:null;var n=x.contains(j.documentElement,i);r.forEach(function(t){if(o)t=t.cloneNode(!0);else if(!i)return x(t).remove();i.insertBefore(t,e),n&&function t(e,n){n(e);for(var i=0,r=e.childNodes.length;i<r;i++)t(e.childNodes[i],n)}(t,function(t){null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src||window.eval.call(window,t.innerHTML)})})})},x.fn[a?e+"To":"insert"+(s?"Before":"After")]=function(t){return x(t)[e](this),this}}),$.Z.prototype=x.fn,$.uniq=C,$.deserializeValue=v,x.zepto=$,x}();window.Zepto=Zepto,void 0===window.$&&(window.$=Zepto),function(u){function f(t){return t._zid||(t._zid=e++)}function s(t,e,n,i){if((e=h(e)).ns)var r=(o=e.ns,new RegExp("(?:^| )"+o.replace(" "," .* ?")+"(?: |$)"));var o;return(E[f(t)]||[]).filter(function(t){return!(!t||e.e&&t.e!=e.e||e.ns&&!r.test(t.ns)||n&&f(t.fn)!==f(n)||i&&t.sel!=i)})}function h(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function p(t,e){return t.del&&!n&&t.e in i||!!e}function d(t){return C[t]||n&&i[t]||t}function l(r,t,e,o,s,a,c){var n=f(r),l=E[n]||(E[n]=[]);t.split(/\s/).forEach(function(t){if("ready"==t)return u(document).ready(e);var n=h(t);n.fn=e,n.sel=s,n.e in C&&(e=function(t){var e=t.relatedTarget;return!e||e!==this&&!u.contains(this,e)?n.fn.apply(this,arguments):void 0});var i=(n.del=a)||e;n.proxy=function(t){if(!(t=g(t)).isImmediatePropagationStopped()){t.data=o;var e=i.apply(r,t._args==y?[t]:[t].concat(t._args));return!1===e&&(t.preventDefault(),t.stopPropagation()),e}},n.i=l.length,l.push(n),"addEventListener"in r&&r.addEventListener(d(n.e),n.proxy,p(n,c))})}function m(e,t,n,i,r){var o=f(e);(t||"").split(/\s/).forEach(function(t){s(e,t,n,i).forEach(function(t){delete E[o][t.i],"removeEventListener"in e&&e.removeEventListener(d(t.e),t.proxy,p(t,r))})})}function g(i,r){return(r||!i.isDefaultPrevented)&&(r||(r=i),u.each(t,function(t,e){var n=r[t];i[t]=function(){return this[e]=a,n&&n.apply(r,arguments)},i[e]=S}),(r.defaultPrevented!==y?r.defaultPrevented:"returnValue"in r?!1===r.returnValue:r.getPreventDefault&&r.getPreventDefault())&&(i.isDefaultPrevented=a)),i}function v(t){var e,n={originalEvent:t};for(e in t)r.test(e)||t[e]===y||(n[e]=t[e]);return g(n,t)}var y,e=1,b=Array.prototype.slice,x=u.isFunction,w=function(t){return"string"==typeof t},E={},o={},n="onfocusin"in window,i={focus:"focusin",blur:"focusout"},C={mouseenter:"mouseover",mouseleave:"mouseout"};o.click=o.mousedown=o.mouseup=o.mousemove="MouseEvents",u.event={add:l,remove:m},u.proxy=function(t,e){var n=2 in arguments&&b.call(arguments,2);if(x(t)){var i=function(){return t.apply(e,n?n.concat(b.call(arguments)):arguments)};return i._zid=f(t),i}if(w(e))return n?(n.unshift(t[e],t),u.proxy.apply(null,n)):u.proxy(t[e],t);throw new TypeError("expected function")},u.fn.bind=function(t,e,n){return this.on(t,e,n)},u.fn.unbind=function(t,e){return this.off(t,e)},u.fn.one=function(t,e,n,i){return this.on(t,e,n,i,1)};var a=function(){return!0},S=function(){return!1},r=/^([A-Z]|returnValue$|layer[XY]$)/,t={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};u.fn.delegate=function(t,e,n){return this.on(e,t,n)},u.fn.undelegate=function(t,e,n){return this.off(e,t,n)},u.fn.live=function(t,e){return u(document.body).delegate(this.selector,t,e),this},u.fn.die=function(t,e){return u(document.body).undelegate(this.selector,t,e),this},u.fn.on=function(e,r,n,o,s){var a,c,i=this;return e&&!w(e)?(u.each(e,function(t,e){i.on(t,r,n,e,s)}),i):(w(r)||x(o)||!1===o||(o=n,n=r,r=y),(x(n)||!1===n)&&(o=n,n=y),!1===o&&(o=S),i.each(function(t,i){s&&(a=function(t){return m(i,t.type,o),o.apply(this,arguments)}),r&&(c=function(t){var e,n=u(t.target).closest(r,i).get(0);return n&&n!==i?(e=u.extend(v(t),{currentTarget:n,liveFired:i}),(a||o).apply(n,[e].concat(b.call(arguments,1)))):void 0}),l(i,e,o,n,r,c||a)}))},u.fn.off=function(t,n,e){var i=this;return t&&!w(t)?(u.each(t,function(t,e){i.off(t,n,e)}),i):(w(n)||x(e)||!1===e||(e=n,n=y),!1===e&&(e=S),i.each(function(){m(this,t,e,n)}))},u.fn.trigger=function(t,e){return(t=w(t)||u.isPlainObject(t)?u.Event(t):g(t))._args=e,this.each(function(){t.type in i&&"function"==typeof this[t.type]?this[t.type]():"dispatchEvent"in this?this.dispatchEvent(t):u(this).triggerHandler(t,e)})},u.fn.triggerHandler=function(n,i){var r,o;return this.each(function(t,e){(r=v(w(n)?u.Event(n):n))._args=i,r.target=e,u.each(s(e,n.type||n),function(t,e){return o=e.proxy(r),!r.isImmediatePropagationStopped()&&void 0})}),o},"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){u.fn[e]=function(t){return 0 in arguments?this.bind(e,t):this.trigger(e)}}),u.Event=function(t,e){w(t)||(t=(e=t).type);var n=document.createEvent(o[t]||"Events"),i=!0;if(e)for(var r in e)"bubbles"==r?i=!!e[r]:n[r]=e[r];return n.initEvent(t,i,!0),g(n)}}(Zepto),function(g){function v(t,e,n,i){return t.global?(r=e||N,o=n,s=i,a=g.Event(o),g(r).trigger(a,s),!a.isDefaultPrevented()):void 0;var r,o,s,a}function y(t,e){var n=e.context;return!1!==e.beforeSend.call(n,t,e)&&!1!==v(e,n,"ajaxBeforeSend",[t,e])&&void v(e,n,"ajaxSend",[t,e])}function b(t,e,n,i){var r=n.context,o="success";n.success.call(r,t,o,e),i&&i.resolveWith(r,[t,o,e]),v(n,r,"ajaxSuccess",[e,n,t]),s(o,e,n)}function x(t,e,n,i,r){var o=i.context;i.error.call(o,n,e,t),r&&r.rejectWith(o,[n,e,t]),v(i,o,"ajaxError",[n,i,t||e]),s(e,n,i)}function s(t,e,n){var i,r=n.context;n.complete.call(r,e,t),v(n,r,"ajaxComplete",[e,n]),(i=n).global&&!--g.active&&v(i,null,"ajaxStop")}function w(){}function E(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function c(t,e,n,i){return g.isFunction(e)&&(i=n,n=e,e=void 0),g.isFunction(n)||(i=n,n=void 0),{url:t,data:e,success:n,dataType:i}}var C,S,u=0,N=window.document,l=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,T=/^(?:text|application)\/javascript/i,j=/^(?:text|application)\/xml/i,O="application/json",L="text/html",P=/^\s*$/,A=N.createElement("a");A.href=window.location.href,g.active=0,g.ajaxJSONP=function(n,i){if(!("type"in n))return g.ajax(n);var r,o,t=n.jsonpCallback,s=(g.isFunction(t)?t():t)||"jsonp"+ ++u,a=N.createElement("script"),c=window[s],e=function(t){g(a).triggerHandler("error",t||"abort")},l={abort:e};return i&&i.promise(l),g(a).on("load error",function(t,e){clearTimeout(o),g(a).off().remove(),"error"!=t.type&&r?b(r[0],l,n,i):x(null,e||"error",l,n,i),window[s]=c,r&&g.isFunction(c)&&c(r[0]),c=r=void 0}),!1===y(l,n)?e("abort"):(window[s]=function(){r=arguments},a.src=n.url.replace(/\?(.+)=\?/,"?$1="+s),N.head.appendChild(a),0<n.timeout&&(o=setTimeout(function(){e("timeout")},n.timeout))),l},g.ajaxSettings={type:"GET",beforeSend:w,success:w,error:w,complete:w,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:O,xml:"application/xml, text/xml",html:L,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},g.ajax=function(t){var e,n,i,r=g.extend({},t||{}),o=g.Deferred&&g.Deferred();for(C in g.ajaxSettings)void 0===r[C]&&(r[C]=g.ajaxSettings[C]);(i=r).global&&0==g.active++&&v(i,null,"ajaxStart"),r.crossDomain||((e=N.createElement("a")).href=r.url,e.href=e.href,r.crossDomain=A.protocol+"//"+A.host!=e.protocol+"//"+e.host),r.url||(r.url=window.location.toString()),(n=r).processData&&n.data&&"string"!=g.type(n.data)&&(n.data=g.param(n.data,n.traditional)),!n.data||n.type&&"GET"!=n.type.toUpperCase()||(n.url=E(n.url,n.data),n.data=void 0);var s=r.dataType,a=/\?.+=\?/.test(r.url);if(a&&(s="jsonp"),!1!==r.cache&&(t&&!0===t.cache||"script"!=s&&"jsonp"!=s)||(r.url=E(r.url,"_="+Date.now())),"jsonp"==s)return a||(r.url=E(r.url,r.jsonp?r.jsonp+"=?":!1===r.jsonp?"":"callback=?")),g.ajaxJSONP(r,o);var c,l=r.accepts[s],u={},f=function(t,e){u[t.toLowerCase()]=[t,e]},h=/^([\w-]+:)\/\//.test(r.url)?RegExp.$1:window.location.protocol,p=r.xhr(),d=p.setRequestHeader;if(o&&o.promise(p),r.crossDomain||f("X-Requested-With","XMLHttpRequest"),f("Accept",l||"*/*"),(l=r.mimeType||l)&&(-1<l.indexOf(",")&&(l=l.split(",",2)[0]),p.overrideMimeType&&p.overrideMimeType(l)),(r.contentType||!1!==r.contentType&&r.data&&"GET"!=r.type.toUpperCase())&&f("Content-Type",r.contentType||"application/x-www-form-urlencoded"),r.headers)for(S in r.headers)f(S,r.headers[S]);if(p.setRequestHeader=f,!(p.onreadystatechange=function(){if(4==p.readyState){p.onreadystatechange=w,clearTimeout(c);var t,e=!1;if(200<=p.status&&p.status<300||304==p.status||0==p.status&&"file:"==h){s=s||((n=r.mimeType||p.getResponseHeader("content-type"))&&(n=n.split(";",2)[0]),n&&(n==L?"html":n==O?"json":T.test(n)?"script":j.test(n)&&"xml")||"text"),t=p.responseText;try{"script"==s?(0,eval)(t):"xml"==s?t=p.responseXML:"json"==s&&(t=P.test(t)?null:g.parseJSON(t))}catch(t){e=t}e?x(e,"parsererror",p,r,o):b(t,p,r,o)}else x(p.statusText||null,p.status?"error":"abort",p,r,o)}var n})===y(p,r))return p.abort(),x(null,"abort",p,r,o),p;if(r.xhrFields)for(S in r.xhrFields)p[S]=r.xhrFields[S];var m=!("async"in r)||r.async;for(S in p.open(r.type,r.url,m,r.username,r.password),u)d.apply(p,u[S]);return 0<r.timeout&&(c=setTimeout(function(){p.onreadystatechange=w,p.abort(),x(null,"timeout",p,r,o)},r.timeout)),p.send(r.data?r.data:null),p},g.get=function(){return g.ajax(c.apply(null,arguments))},g.post=function(){var t=c.apply(null,arguments);return t.type="POST",g.ajax(t)},g.getJSON=function(){var t=c.apply(null,arguments);return t.dataType="json",g.ajax(t)},g.fn.load=function(t,e,n){if(!this.length)return this;var i,r=this,o=t.split(/\s/),s=c(t,e,n),a=s.success;return 1<o.length&&(s.url=o[0],i=o[1]),s.success=function(t){r.html(i?g("<div>").html(t.replace(l,"")).find(i):t),a&&a.apply(r,arguments)},g.ajax(s),this};var i=encodeURIComponent;g.param=function(t,e){var n=[];return n.add=function(t,e){g.isFunction(e)&&(e=e()),null==e&&(e=""),this.push(i(t)+"="+i(e))},function n(i,t,r,o){var s,a=g.isArray(t),c=g.isPlainObject(t);g.each(t,function(t,e){s=g.type(e),o&&(t=r?o:o+"["+(c||"object"==s||"array"==s?t:"")+"]"),!o&&a?i.add(e.name,e.value):"array"==s||!r&&"object"==s?n(i,e,r,t):i.add(t,e)})}(n,t,e),n.join("&").replace(/%20/g,"+")}}(Zepto),function(o){o.fn.serializeArray=function(){var n,i,e=[],r=function(t){return t.forEach?t.forEach(r):void e.push({name:n,value:t})};return this[0]&&o.each(this[0].elements,function(t,e){i=e.type,(n=e.name)&&"fieldset"!=e.nodeName.toLowerCase()&&!e.disabled&&"submit"!=i&&"reset"!=i&&"button"!=i&&"file"!=i&&("radio"!=i&&"checkbox"!=i||e.checked)&&r(o(e).val())}),e},o.fn.serialize=function(){var e=[];return this.serializeArray().forEach(function(t){e.push(encodeURIComponent(t.name)+"="+encodeURIComponent(t.value))}),e.join("&")},o.fn.submit=function(t){if(0 in arguments)this.bind("submit",t);else if(this.length){var e=o.Event("submit");this.eq(0).trigger(e),e.isDefaultPrevented()||this.get(0).submit()}return this}}(Zepto),function(n){"__proto__"in{}||n.extend(n.zepto,{Z:function(t,e){return t=t||[],n.extend(t,n.fn),t.selector=e||"",t.__Z=!0,t},isZ:function(t){return"array"===n.type(t)&&"__Z"in t}});try{getComputedStyle(void 0)}catch(t){var e=getComputedStyle;window.getComputedStyle=function(t){try{return e(t)}catch(t){return null}}}}(Zepto),function(t){"use strict";function n(t){return new RegExp("(^|\\s+)"+t+"(\\s+|$)")}var i,r,o;function e(t,e){(i(t,e)?o:r)(t,e)}"classList"in document.documentElement?(i=function(t,e){return t.classList.contains(e)},r=function(t,e){t.classList.add(e)},o=function(t,e){t.classList.remove(e)}):(i=function(t,e){return n(e).test(t.className)},r=function(t,e){i(t,e)||(t.className=t.className+" "+e)},o=function(t,e){t.className=t.className.replace(n(e)," ")});var s={hasClass:i,addClass:r,removeClass:o,toggleClass:e,has:i,add:r,remove:o,toggle:e};"function"==typeof define&&define.amd?define(s):t.classie=s}(window);var TxtRotate=function(t,e,n,i){this.toRotate=e,this.el=t,this.loopNum=0,this.period=parseInt(n,10)||2e3,this.speedCoef=parseInt(i,10)||300,this.txt="",this.tick(),this.isDeleting=!1};function getEvent(t){return t=t||window.event}function getEventTarget(t){return(t=t||window.event).target||t.srcElement}function is_containedIn_OrEqual(t,e){for(var n=t;null!=n;){if(n===e)return!0;n=n.parentNode}return!1}function hasClass_ONEtest(t,e){for(var n=t.className.split(/\s+/),i=0;i<n.length;i++)if(n[i].trim()===e)return!0;return!1}function hasClass(t,e){if("string"==typeof e)return hasClass_ONEtest(t,e);for(var n=0;n<e.length;n++)if(!hasClass_ONEtest(t,e[n]))return!1;return!0}function addClass(t,e){if("string"==typeof e)hasClass(t,e)||(t.className+=" "+e);else if("[object Array]"===Object.prototype.toString.call(e))for(var n=0;n<e.length;n++)hasClass(t,e[n])||(t.className+=" "+e[n]);t.className=t.className.trim()}function removeClass(t,e){var n=t.className.split(/\s+/);removeElementFromArray_Mutate(n,e),t.className=n.join(" ")}function removeElementFromArray_Mutate(t,e){if("[object Array]"===Object.prototype.toString.call(e))for(var n=0;n<e.length;n++)for(var i=0;i<t.length;i++)e[n]===t[i]&&(t.splice(i,1),i--);else for(n=0;n<t.length;n++)t[n]===e&&(t.splice(n,1),n--)}TxtRotate.prototype.tick=function(){var t=this.loopNum%this.toRotate.length,e=this.toRotate[t];this.isDeleting?this.txt=e.substring(0,this.txt.length-1):this.txt=e.substring(0,this.txt.length+1),this.el.innerHTML='<span class="wrap">'+this.txt+"</span>";var n=this,i=Math.abs(this.speedCoef-100*Math.random());this.isDeleting&&(i/=2),this.isDeleting||this.txt!==e?this.isDeleting&&""===this.txt&&(this.isDeleting=!1,this.loopNum++,i=500):(i=this.period,this.isDeleting=!0),setTimeout(function(){n.tick()},i)},window.onload=function(){for(var t=document.getElementsByClassName("txt-rotate"),e=0;e<t.length;e++){var n=t[e].getAttribute("data-rotate"),i=t[e].getAttribute("data-period"),r=t[e].getAttribute("data-speed");n&&new TxtRotate(t[e],JSON.parse(n),i,r)}var o=document.createElement("style");o.type="text/css",o.innerHTML=".txt-rotate > .wrap { border-right: 0.08em solid #666 }",document.body.appendChild(o)},function(i){"use strict";var n=i.document.documentElement;function s(){var t=n.clientHeight,e=i.innerHeight;return t<e?e:t}function a(){return i.pageYOffset||n.scrollTop}function r(t,e){var n=t.offsetHeight,i=a(),r=i+s(),o=function(t){for(var e=0,n=0;isNaN(t.offsetTop)||(e+=t.offsetTop),isNaN(t.offsetLeft)||(n+=t.offsetLeft),t=t.offsetParent;);return{top:e,left:n}}(t).top;return o+n*(e=e||0)<=r&&i<=o+n-n*e}function o(t){if(t){var e=new Image;e.onload=function(){t.src=e.src},e.src=t.getAttribute("data-url")}}function t(t,e){this.el=t,this.options=function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}(this.defaults,e),this._init()}t.prototype={defaults:{minDuration:0,maxDuration:0,viewportFactor:0},_init:function(){this.items=Array.prototype.slice.call(document.querySelectorAll("#"+this.el.id+" > article")),this.itemsCount=this.items.length,this.itemsRenderedCount=0,this.didScroll=!1;var n=this;n.items.forEach(function(t,e){r(t)&&(n._checkTotalRendered(),classie.add(t,"shown"),o(t.querySelector(".preload")))}),i.addEventListener("scroll",function(){n._onScrollFn()},!1),i.addEventListener("resize",function(){n._resizeHandler()},!1)},_onScrollFn:function(){var t=this;this.didScroll||(this.didScroll=!0,setTimeout(function(){t._scrollPage()},60))},_scrollPage:function(){var i=this;this.items.forEach(function(n,t){classie.has(n,"shown")||classie.has(n,"animate")||!r(n,i.options.viewportFactor)||setTimeout(function(){var t=a()+s()/2;if(i.el.style.WebkitPerspectiveOrigin="50% "+t+"px",i.el.style.MozPerspectiveOrigin="50% "+t+"px",i.el.style.perspectiveOrigin="50% "+t+"px",i._checkTotalRendered(),i.options.minDuration&&i.options.maxDuration){var e=Math.random()*(i.options.maxDuration-i.options.minDuration)+i.options.minDuration+"s";n.style.WebkitAnimationDuration=e,n.style.MozAnimationDuration=e,n.style.animationDuration=e}classie.add(n,"animate"),o(n.querySelector(".preload"))},25)}),this.didScroll=!1},_resizeHandler:function(){var t=this;this.resizeTimeout&&clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(function(){t._scrollPage(),t.resizeTimeout=null},1e3)},_checkTotalRendered:function(){++this.itemsRenderedCount,this.itemsRenderedCount===this.itemsCount&&i.removeEventListener("scroll",this._onScrollFn)}},i.AnimOnScroll=t}(window),function(l){l.fn.simpleJekyllSearch=function(t){var r=l.extend({jsonFile:"/search.json",jsonFormat:"title,tags,categories,url,date",template:'<li><article><a href="{url}"><span class="entry-category">{categories}</span> {title} <span class="entry-date"><time datetime="{date}">{date}</time></span></a></article></li>',searchResults:".search-results",limit:"10",noResults:"<p>Puuuts! Não encontramos nada :(</p>"},t),o=r.jsonFormat.split(","),s=[],i=this,a=l(r.searchResults);function c(){a.children().remove()}r.jsonFile.length&&a.length&&l.ajax({type:"GET",url:r.jsonFile,dataType:"json",success:function(t,e,n){s=t,i.keyup(function(t){var e,n,i;l(this).val().length?(n=l(this).val(),i=[],l.each(s,function(t,e){for(t=0;t<o.length;t++)void 0!==e[o[t]]&&-1!==e[o[t]].toLowerCase().indexOf(n.toLowerCase())&&(i.push(e),t=o.length)}),e=i,c(),a.append(l(r.searchResultsTitle)),e.length?l.each(e,function(t,e){if(t<r.limit){for(var n=r.template,t=0;t<o.length;t++){var i=new RegExp("{"+o[t]+"}","g");n=n.replace(i,e[o[t]])}a.append(l(n))}}):a.append(r.noResults)):c()})},error:function(t,e,n){console.log("***ERROR in simpleJekyllSearch.js***"),console.log(t),console.log(e),console.log(n)}})}}(Zepto),function(t,e){"function"==typeof define&&define.amd?define([],e(t)):"object"==typeof exports?module.exports=e(t):t.smoothScroll=e(t)}("undefined"!=typeof global?global:this.window||this.global,function(b){"use strict";var n,e,s,x,i={},r="querySelector"in document&&"addEventListener"in b,w={selector:"[data-scroll]",selectorHeader:"[data-scroll-header]",speed:500,easing:"easeInOutCubic",offset:0,updateURL:!0,callback:function(){}},E=function(){var n={},i=!1,t=0,e=arguments.length;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(i=arguments[0],t++);for(var r=function(t){for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(i&&"[object Object]"===Object.prototype.toString.call(t[e])?n[e]=E(!0,n[e],t[e]):n[e]=t[e])};t<e;t++){r(arguments[t])}return n},C=function(t){return null===t?0:(e=t,Math.max(e.scrollHeight,e.offsetHeight,e.clientHeight)+t.offsetTop);var e};i.animateScroll=function(a,c,t){var e,n=(e=a?a.getAttribute("data-options"):null)&&"object"==typeof JSON&&"function"==typeof JSON.parse?JSON.parse(e):{},l=E(l||w,t||{},n),u="#"===(c="#"+function(t){for(var e,n=String(t),i=n.length,r=-1,o="",s=n.charCodeAt(0);++r<i;){if(0===(e=n.charCodeAt(r)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");o+=1<=e&&e<=31||127==e||0===r&&48<=e&&e<=57||1===r&&48<=e&&e<=57&&45===s?"\\"+e.toString(16)+" ":128<=e||45===e||95===e||48<=e&&e<=57||65<=e&&e<=90||97<=e&&e<=122?n.charAt(r):"\\"+n.charAt(r)}return o}(c.substr(1)))?b.document.documentElement:b.document.querySelector(c),f=b.pageYOffset;s||(s=b.document.querySelector(l.selectorHeader)),x||(x=C(s));var h,p,d,i,r,m=function(t,e,n){var i=0;if(t.offsetParent)for(;i+=t.offsetTop,t=t.offsetParent;);return 0<=(i=i-e-n)?i:0}(u,x,parseInt(l.offset,10)),g=m-f,v=Math.max(b.document.body.scrollHeight,b.document.documentElement.scrollHeight,b.document.body.offsetHeight,b.document.documentElement.offsetHeight,b.document.body.clientHeight,b.document.documentElement.clientHeight),y=0;i=c,r=l.updateURL,b.history.pushState&&(r||"true"===r)&&"file:"!==b.location.protocol&&b.history.pushState(null,null,[b.location.protocol,"//",b.location.host,b.location.pathname,b.location.search,i].join(""));var o=function(){var t,e,n,i,r,o,s;p=1<(p=(y+=16)/parseInt(l.speed,10))?1:p,d=f+g*(t=l.easing,e=p,"easeInQuad"===t&&(n=e*e),"easeOutQuad"===t&&(n=e*(2-e)),"easeInOutQuad"===t&&(n=e<.5?2*e*e:(4-2*e)*e-1),"easeInCubic"===t&&(n=e*e*e),"easeOutCubic"===t&&(n=--e*e*e+1),"easeInOutCubic"===t&&(n=e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1),"easeInQuart"===t&&(n=e*e*e*e),"easeOutQuart"===t&&(n=1- --e*e*e*e),"easeInOutQuart"===t&&(n=e<.5?8*e*e*e*e:1-8*--e*e*e*e),"easeInQuint"===t&&(n=e*e*e*e*e),"easeOutQuint"===t&&(n=1+--e*e*e*e*e),"easeInOutQuint"===t&&(n=e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e),n||e),b.scrollTo(0,Math.floor(d)),i=d,r=m,o=h,s=b.pageYOffset,(i==r||s==r||b.innerHeight+s>=v)&&(clearInterval(o),u.focus(),l.callback(a,c))};0===b.pageYOffset&&b.scrollTo(0,0),h=setInterval(o,16)};var o=function(t){var e=function(t,e){var n,i,r=e.charAt(0),o="classList"in document.documentElement;for("["===r&&1<(n=(e=e.substr(1,e.length-2)).split("=")).length&&(i=!0,n[1]=n[1].replace(/"/g,"").replace(/'/g,""));t&&t!==document;t=t.parentNode){if("."===r)if(o){if(t.classList.contains(e.substr(1)))return t}else if(new RegExp("(^|\\s)"+e.substr(1)+"(\\s|$)").test(t.className))return t;if("#"===r&&t.id===e.substr(1))return t;if("["===r&&t.hasAttribute(n[0])){if(!i)return t;if(t.getAttribute(n[0])===n[1])return t}if(t.tagName.toLowerCase()===e)return t}return null}(t.target,n.selector);e&&"a"===e.tagName.toLowerCase()&&(t.preventDefault(),i.animateScroll(e,e.hash,n))},a=function(t){e||(e=setTimeout(function(){e=null,x=C(s)},66))};return i.destroy=function(){n&&(b.document.removeEventListener("click",o,!1),b.removeEventListener("resize",a,!1),x=s=e=n=null)},i.init=function(t){r&&(i.destroy(),n=E(w,t||{}),s=b.document.querySelector(n.selectorHeader),x=C(s),b.document.addEventListener("click",o,!1),s&&b.addEventListener("resize",a,!1))},i});var commingSoonEls=document.getElementsByClassName("social_commingSoon");!function(){var r=document.getElementById("socialComingSoonPopUp");addClass(r,"hidden"),console.log("============+++>"),console.dir(commingSoonEls[0]),new Popper(commingSoonEls[0],r,{placement:"top",onCreate:function(t){console.log(t)},modifiers:{flip:{behavior:["left","right","top","bottom"]},offset:{enabled:!0,offset:"0,10"}}});for(var t=0;t<commingSoonEls.length;t++)commingSoonEls[t].addEventListener("click",function(t){t.preventDefault(),t.stopPropagation(),r.className="hide",setTimeout(function(){r.className=""},20);new Popper(this,r,{placement:"top",onCreate:function(t){console.log(t)},modifiers:{flip:{behavior:["left","right","top","bottom"]},offset:{enabled:!0,offset:"0,10"}}})});console.log("damn a!!!!!!"),console.dir(commingSoonEls),document.addEventListener("click",function(t){var e=getEventTarget(t=getEvent(t));console.log("click ::::::::::::::::::"),console.dir(commingSoonEls);for(var n=!1,i=0;i<commingSoonEls.length;i++)if(is_containedIn_OrEqual(e,commingSoonEls[i])){n=!0;break}n||(r.className="hide",setTimeout(function(){r.className="hidden"},400))})}(),function(){for(var t=document.links,e=0,n=t.length;e<n;e++)t[e].hostname!=window.location.hostname&&(t[e].target="_blank")}(),function(e,t,n){e("#menu").click(function(){e("body").addClass("push-menu-to-right"),e("#sidebar").addClass("open"),e(".overlay").addClass("show")}),e("#mask").click(function(){e("body").removeClass("push-menu-to-right"),e("#sidebar").removeClass("open"),e(".overlay").removeClass("show")});var i={close:e(".icon-remove-sign"),searchform:e(".search-form"),canvas:e("body"),dothis:e(".dosearch")};function r(){e(".search-wrapper").toggleClass("active"),i.searchform.toggleClass("active"),i.canvas.removeClass("search-overlay")}i.dothis.on("click",function(){e(".search-wrapper").toggleClass("active"),i.searchform.toggleClass("active"),i.searchform.find("input").focus(),i.canvas.toggleClass("search-overlay"),e(".search-field").simpleJekyllSearch()}),i.close.on("click",r),document.addEventListener("keyup",function(t){27==t.keyCode&&e(".search-overlay").length&&r()}),1<=document.getElementsByClassName("home").length&&new AnimOnScroll(document.getElementById("grid"),{minDuration:.4,maxDuration:.7,viewportFactor:.2}),smoothScroll.init({selectorHeader:".bar-header",speed:500,updateURL:!1})}(Zepto,window);