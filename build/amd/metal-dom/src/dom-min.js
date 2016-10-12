define(["exports","metal/src/metal","./domData","./DomDelegatedEventHandle","./DomEventHandle"],function(e,t,n,a,r){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=i(n),l=i(a),u=i(r),c=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),d="__metal_next_target__",v={blur:!0,error:!0,focus:!0,invalid:!0,load:!0,scroll:!0},f=function(){function e(){o(this,e)}return c(e,null,[{key:"addClasses",value:function(n,a){t.core.isObject(n)&&t.core.isString(a)&&("classList"in n?e.addClassesWithNative_(n,a):e.addClassesWithoutNative_(n,a))}},{key:"addClassesWithNative_",value:function(e,t){t.split(" ").forEach(function(t){t&&e.classList.add(t)})}},{key:"addClassesWithoutNative_",value:function(e,t){var n=" "+e.className+" ",a="";t=t.split(" ");for(var r=0;r<t.length;r++){var i=t[r];n.indexOf(" "+i+" ")===-1&&(a+=" "+i)}a&&(e.className=e.className+a)}},{key:"addElementListener_",value:function(t,n,a){var r=s["default"].get(t);e.addToArr_(r.listeners,n,a)}},{key:"addSelectorListener_",value:function(t,n,a,r){var i=s["default"].get(t);e.addToArr_(i.delegating[n].selectors,a,r)}},{key:"addToArr_",value:function(e,t,n){e[t]||(e[t]=[]),e[t].push(n)}},{key:"attachDelegateEvent_",value:function(t,n){var a=s["default"].get(t);a.delegating[n]||(a.delegating[n]={handle:e.on(t,n,e.handleDelegateEvent_,!!v[n]),selectors:{}})}},{key:"closest",value:function(t,n){for(;t&&!e.match(t,n);)t=t.parentNode;return t}},{key:"append",value:function(n,a){if(t.core.isString(a)&&(a=e.buildFragment(a)),a instanceof NodeList)for(var r=Array.prototype.slice.call(a),i=0;i<r.length;i++)n.appendChild(r[i]);else n.appendChild(a);return a}},{key:"buildFragment",value:function(e){var t=document.createElement("div");t.innerHTML="<br>"+e,t.removeChild(t.firstChild);for(var n=document.createDocumentFragment();t.firstChild;)n.appendChild(t.firstChild);return n}},{key:"contains",value:function(e,n){return t.core.isDocument(e)?e.documentElement.contains(n):e.contains(n)}},{key:"delegate",value:function(n,a,r,i,o){var s=e.customEvents[a];return s&&s.delegate&&(a=s.originalEvent,i=s.handler.bind(s,i)),o&&(i=i.bind(),i.defaultListener_=!0),e.attachDelegateEvent_(n,a),t.core.isString(r)?e.addSelectorListener_(n,a,r,i):e.addElementListener_(r,a,i),new l["default"](t.core.isString(r)?n:r,a,i,t.core.isString(r)?r:null)}},{key:"enterDocument",value:function(t){t&&e.append(document.body,t)}},{key:"exitDocument",value:function(e){e&&e.parentNode&&e.parentNode.removeChild(e)}},{key:"handleDelegateEvent_",value:function(n){e.normalizeDelegateEvent_(n);for(var a=t.core.isDef(n[d])?n[d]:n.target,r=!0,i=n.currentTarget,o=n.currentTarget.parentNode,s=[];a&&a!==o&&!n.stopped;)n.delegateTarget=a,r&=e.triggerMatchedListeners_(i,a,n,s),a=a.parentNode;for(var l=0;l<s.length&&!n.defaultPrevented;l++)n.delegateTarget=s[l].element,r&=s[l].fn(n);return n.delegateTarget=null,n[d]=o,r}},{key:"hasClass",value:function(t,n){return"classList"in t?e.hasClassWithNative_(t,n):e.hasClassWithoutNative_(t,n)}},{key:"hasClassWithNative_",value:function(e,t){return e.classList.contains(t)}},{key:"hasClassWithoutNative_",value:function(e,t){return(" "+e.className+" ").indexOf(" "+t+" ")>=0}},{key:"isEmpty",value:function(e){return 0===e.childNodes.length}},{key:"match",value:function(t,n){if(!t||1!==t.nodeType)return!1;var a=Element.prototype,r=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.msMatchesSelector||a.oMatchesSelector;return r?r.call(t,n):e.matchFallback_(t,n)}},{key:"matchFallback_",value:function(e,t){for(var n=document.querySelectorAll(t,e.parentNode),a=0;a<n.length;++a)if(n[a]===e)return!0;return!1}},{key:"next",value:function(t,n){do if(t=t.nextSibling,t&&e.match(t,n))return t;while(t);return null}},{key:"normalizeDelegateEvent_",value:function(t){t.stopPropagation=e.stopPropagation_,t.stopImmediatePropagation=e.stopImmediatePropagation_}},{key:"on",value:function(n,a,r,i){if(t.core.isString(n))return e.delegate(document,a,n,r);var o=e.customEvents[a];return o&&o.event&&(a=o.originalEvent,r=o.handler.bind(o,r)),n.addEventListener(a,r,i),new u["default"](n,a,r,i)}},{key:"once",value:function(e,t,n){var a=this.on(e,t,function(){return a.removeListener(),n.apply(this,arguments)});return a}},{key:"parent",value:function(t,n){return e.closest(t.parentNode,n)}},{key:"registerCustomEvent",value:function(t,n){e.customEvents[t]=n}},{key:"removeChildren",value:function(e){for(var t;t=e.firstChild;)e.removeChild(t)}},{key:"removeClasses",value:function(n,a){t.core.isObject(n)&&t.core.isString(a)&&("classList"in n?e.removeClassesWithNative_(n,a):e.removeClassesWithoutNative_(n,a))}},{key:"removeClassesWithNative_",value:function(e,t){t.split(" ").forEach(function(t){t&&e.classList.remove(t)})}},{key:"removeClassesWithoutNative_",value:function(e,t){var n=" "+e.className+" ";t=t.split(" ");for(var a=0;a<t.length;a++)n=n.replace(" "+t[a]+" "," ");e.className=n.trim()}},{key:"replace",value:function(e,t){e&&t&&e!==t&&e.parentNode&&(e.parentNode.insertBefore(t,e),e.parentNode.removeChild(e))}},{key:"stopImmediatePropagation_",value:function(){this.stopped=!0,this.stoppedImmediate=!0,Event.prototype.stopImmediatePropagation.call(this)}},{key:"stopPropagation_",value:function(){this.stopped=!0,Event.prototype.stopPropagation.call(this)}},{key:"supportsEvent",value:function(n,a){return!!e.customEvents[a]||(t.core.isString(n)&&(g[n]||(g[n]=document.createElement(n)),n=g[n]),"on"+a in n)}},{key:"toElement",value:function(e){return t.core.isElement(e)||t.core.isDocument(e)?e:t.core.isString(e)?"#"===e[0]&&e.indexOf(" ")===-1?document.getElementById(e.substr(1)):document.querySelector(e):null}},{key:"toggleClasses",value:function(n,a){t.core.isObject(n)&&t.core.isString(a)&&("classList"in n?e.toggleClassesWithNative_(n,a):e.toggleClassesWithoutNative_(n,a))}},{key:"toggleClassesWithNative_",value:function(e,t){t.split(" ").forEach(function(t){e.classList.toggle(t)})}},{key:"toggleClassesWithoutNative_",value:function(e,t){var n=" "+e.className+" ";t=t.split(" ");for(var a=0;a<t.length;a++){var r=" "+t[a]+" ",i=n.indexOf(r);n=i===-1?n+t[a]+" ":n.substring(0,i)+" "+n.substring(i+r.length)}e.className=n.trim()}},{key:"triggerEvent",value:function(e,n,a){var r=document.createEvent("HTMLEvents");r.initEvent(n,!0,!0),t.object.mixin(r,a),e.dispatchEvent(r)}},{key:"triggerListeners_",value:function(e,t,n,a){var r=!0;e=e||[];for(var i=0;i<e.length&&!t.stoppedImmediate;i++)e[i].defaultListener_?a.push({element:n,fn:e[i]}):r&=e[i](t);return r}},{key:"triggerMatchedListeners_",value:function(t,n,a,r){for(var i=s["default"].get(n),o=i.listeners[a.type],l=e.triggerListeners_(o,a,n,r),u=s["default"].get(t).delegating[a.type].selectors,c=Object.keys(u),d=0;d<c.length&&!a.stoppedImmediate;d++)e.match(n,c[d])&&(o=u[c[d]],l&=e.triggerListeners_(o,a,n,r));return l}}]),e}(),g={};f.customEvents={},e["default"]=f});