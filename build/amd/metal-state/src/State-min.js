define(["exports","metal/src/metal","metal-events/src/events"],function(t,e,a){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function t(t,e){for(var a=0;a<e.length;a++){var i=e[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,a,i){return a&&t(e.prototype,a),i&&t(e,i),e}}(),o=function l(t,e,a){null===t&&(t=Function.prototype);var i=Object.getOwnPropertyDescriptor(t,e);if(void 0===i){var n=Object.getPrototypeOf(t);return null===n?void 0:l(n,e,a)}if("value"in i)return i.value;var s=i.get;if(void 0!==s)return s.call(a)},u=function(t){function a(t,e,s,r){i(this,a);var o=n(this,(a.__proto__||Object.getPrototypeOf(a)).call(this));return o.commonOpts_=r,o.context_=s||o,o.keysBlacklist_={},o.obj_=e||o,o.scheduledBatchData_=null,o.stateInfo_={},o.setShouldUseFacade(!0),o.mergeInvalidKeys_(),o.addToStateFromStaticHint_(t),o}return s(a,t),r(a,[{key:"addKeyToState",value:function(t,e,a){this.buildKeyInfo_(t,e,a,arguments.length>2),Object.defineProperty(this.obj_,t,this.buildKeyPropertyDef_(t)),this.validateInitialValue_(t),this.assertGivenIfRequired_(t)}},{key:"addToState",value:function(t,a,i){if((0,e.isString)(t))return this.addKeyToState.apply(this,arguments);for(var n=a||{},s=Object.keys(t),r={},o=0;o<s.length;o++){var u=s[o];this.buildKeyInfo_(u,t[u],n[u],n.hasOwnProperty(u)),r[u]=this.buildKeyPropertyDef_(u,i),this.assertGivenIfRequired_(u)}i!==!1&&Object.defineProperties(i||this.obj_,r);for(var l=0;l<s.length;l++)this.validateInitialValue_(s[l])}},{key:"addToStateFromStaticHint_",value:function(t){var e,i=this.constructor,n=a.mergeStateStatic(i);this.obj_===this&&(e=!!n&&i.prototype),this.addToState(i.STATE_MERGED,t,e)}},{key:"assertGivenIfRequired_",value:function(t){var i=this.stateInfo_[t];if(i.config.required){var n=i.state===a.KeyStates.INITIALIZED?this.get(t):i.initialValue;!(0,e.isDefAndNotNull)(n)}}},{key:"assertValidStateKeyName_",value:function(t){if(this.constructor.INVALID_KEYS_MERGED[t]||this.keysBlacklist_[t])throw new Error("It's not allowed to create a state key with the name \""+t+'".')}},{key:"buildKeyInfo_",value:function(t,i,n,s){this.assertValidStateKeyName_(t),i=i&&i.config?i.config:i||{},this.commonOpts_&&(i=e.object.mixin({},i,this.commonOpts_)),this.stateInfo_[t]={config:i,state:a.KeyStates.UNINITIALIZED},s&&(this.stateInfo_[t].initialValue=n)}},{key:"buildKeyPropertyDef_",value:function(t,e){var a=e===this.constructor.prototype?null:this;return{configurable:!0,enumerable:!0,get:function(){return(a||this).getStateKeyValue_(t)},set:function(e){(a||this).setStateKeyValue_(t,e)}}}},{key:"callFunction_",value:function(t,a){return(0,e.isString)(t)?this.context_[t].apply(this.context_,a):(0,e.isFunction)(t)?t.apply(this.context_,a):void 0}},{key:"callSetter_",value:function(t,e,a){var i=this.stateInfo_[t],n=i.config;return n.setter&&(e=this.callFunction_(n.setter,[e,a])),e}},{key:"callValidator_",value:function(t,e){var a=this.stateInfo_[t],i=a.config;if(i.validator){var n=this.callFunction_(i.validator,[e,t,this.context_]);return n instanceof Error,n}return!0}},{key:"canSetState",value:function(t){var e=this.stateInfo_[t];return!e.config.writeOnce||!e.written}},{key:"disposeInternal",value:function(){o(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"disposeInternal",this).call(this),this.stateInfo_=null,this.scheduledBatchData_=null}},{key:"emitBatchEvent_",value:function(){if(!this.isDisposed()){var t=this.scheduledBatchData_;this.scheduledBatchData_=null,this.emit("stateChanged",t)}}},{key:"get",value:function(t){return this.obj_[t]}},{key:"getState",value:function(t){for(var e={},a=t||this.getStateKeys(),i=0;i<a.length;i++)e[a[i]]=this.get(a[i]);return e}},{key:"getStateKeyConfig",value:function(t){return(this.stateInfo_[t]||{}).config}},{key:"getStateKeys",value:function(){return this.stateInfo_?Object.keys(this.stateInfo_):[]}},{key:"getStateKeyValue_",value:function(t){if(!this.warnIfDisposed_(t))return this.initStateKey_(t),this.stateInfo_[t].value}},{key:"hasBeenSet",value:function(t){var e=this.stateInfo_[t];return e.state===a.KeyStates.INITIALIZED||this.hasInitialValue_(t)}},{key:"hasInitialValue_",value:function(t){return this.stateInfo_[t].hasOwnProperty("initialValue")}},{key:"hasStateKey",value:function(t){if(!this.warnIfDisposed_(t))return!!this.stateInfo_[t]}},{key:"informChange_",value:function(t,e){if(this.shouldInformChange_(t,e)){var a={key:t,newVal:this.get(t),prevVal:e};this.emit(t+"Changed",a),this.emit("stateKeyChanged",a),this.scheduleBatchEvent_(a)}}},{key:"initStateKey_",value:function(t){var e=this.stateInfo_[t];e.state===a.KeyStates.UNINITIALIZED&&(e.state=a.KeyStates.INITIALIZING,this.setInitialValue_(t),e.written||this.setDefaultValue(t),e.state=a.KeyStates.INITIALIZED)}},{key:"mergeInvalidKeys_",value:function(){(0,e.mergeSuperClassesProperty)(this.constructor,"INVALID_KEYS",function(t){return e.array.flatten(t).reduce(function(t,e){return e&&(t[e]=!0),t},{})})}},{key:"removeStateKey",value:function(t){this.stateInfo_[t]=null,delete this.obj_[t]}},{key:"scheduleBatchEvent_",value:function(t){this.scheduledBatchData_||(e.async.nextTick(this.emitBatchEvent_,this),this.scheduledBatchData_={changes:{}});var a=t.key,i=this.scheduledBatchData_.changes;i[a]?i[a].newVal=t.newVal:i[a]=t}},{key:"set",value:function(t,e){this.hasStateKey(t)&&(this.obj_[t]=e)}},{key:"setDefaultValue",value:function(t){var e=this.stateInfo_[t].config;void 0!==e.value?this.set(t,e.value):this.set(t,this.callFunction_(e.valueFn))}},{key:"setInitialValue_",value:function(t){if(this.hasInitialValue_(t)){var e=this.stateInfo_[t];this.set(t,e.initialValue),e.initialValue=void 0}}},{key:"setKeysBlacklist_",value:function(t){this.keysBlacklist_=t}},{key:"setState",value:function(t,e){var a=this;Object.keys(t).forEach(function(e){return a.set(e,t[e])}),e&&this.scheduledBatchData_&&this.once("stateChanged",e)}},{key:"setStateKeyValue_",value:function(t,e){if(!this.warnIfDisposed_(t)&&this.canSetState(t)&&this.validateKeyValue_(t,e)){var i=this.stateInfo_[t];this.hasInitialValue_(t)||i.state!==a.KeyStates.UNINITIALIZED||(i.state=a.KeyStates.INITIALIZED);var n=this.get(t);i.value=this.callSetter_(t,e,n),this.assertGivenIfRequired_(t),i.written=!0,this.informChange_(t,n)}}},{key:"shouldInformChange_",value:function(t,i){var n=this.stateInfo_[t];return n.state===a.KeyStates.INITIALIZED&&((0,e.isObject)(i)||i!==this.get(t))}},{key:"validateInitialValue_",value:function(t){var e=this.stateInfo_[t];this.hasInitialValue_(t)&&!this.callValidator_(t,e.initialValue)&&delete e.initialValue}},{key:"validateKeyValue_",value:function(t,e){var i=this.stateInfo_[t];return i.state===a.KeyStates.INITIALIZING||this.callValidator_(t,e)}},{key:"warnIfDisposed_",value:function(t){var e=this.isDisposed();return e}}],[{key:"mergeState",value:function(t){return e.object.mixin.apply(null,[{}].concat(t.reverse()))}},{key:"mergeStateStatic",value:function(t){return(0,e.mergeSuperClassesProperty)(t,"STATE",a.mergeState)}}]),a}(a.EventEmitter);u.INVALID_KEYS=["state","stateKey"],u.KeyStates={UNINITIALIZED:0,INITIALIZING:1,INITIALIZED:2},t["default"]=u});