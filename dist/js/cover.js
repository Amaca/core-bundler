"use strict";(self.webpackChunkcore_bundler=self.webpackChunkcore_bundler||[]).push([[437],{146:(e,s,a)=>{a.r(s),a.d(s,{CoverModule:()=>t,createInstance:()=>l});var c=a(385);class t extends c.Z{constructor(e){super(e)}init(){this.ready()}}function l(){return new t}},385:(e,s,a)=>{a.d(s,{Z:()=>t});var c=a(506);class t extends c.Z{constructor(e){super(e)}bind(e,s,a,c){this.node=e,this.name=s,this.options=null!==a?a:{selectors:"",settings:""},this.setOptions(),this.init()}setOptions(){}init(){}ready(){const e=Date.now();setTimeout((()=>this.trigger("ready",[e])),1e-6)}}},506:(e,s,a)=>{a.d(s,{Z:()=>c});class c{constructor(){this.callbacks={},this.callbacks.base={}}on(e,s){return void 0===e||""===e?(console.warn("wrong names"),!1):void 0===s?(console.warn("wrong callback"),!1):(this.resolveNames(e).forEach((e=>{const a=this.resolveName(e);this.callbacks[a.namespace]instanceof Object||(this.callbacks[a.namespace]={}),this.callbacks[a.namespace][a.value]instanceof Array||(this.callbacks[a.namespace][a.value]=[]),this.callbacks[a.namespace][a.value].push(s)})),this)}off(e){return void 0===e||""===e?(console.warn("wrong name"),!1):(this.resolveNames(e).forEach((e=>{const s=this.resolveName(e);if("base"!==s.namespace&&""===s.value)delete this.callbacks[s.namespace];else if("base"===s.namespace)for(const e in this.callbacks)this.callbacks[e]instanceof Object&&this.callbacks[e][s.value]instanceof Array&&(delete this.callbacks[e][s.value],0===Object.keys(this.callbacks[e]).length&&delete this.callbacks[e]);else this.callbacks[s.namespace]instanceof Object&&this.callbacks[s.namespace][s.value]instanceof Array&&(delete this.callbacks[s.namespace][s.value],0===Object.keys(this.callbacks[s.namespace]).length&&delete this.callbacks[s.namespace])})),this)}trigger(e,s){if(void 0===e||""===e)return console.warn("wrong name"),!1;let a=null,c=null;const t=s instanceof Array?s:[];let l=this.resolveNames(e);if(l=this.resolveName(l[0]),"base"===l.namespace)for(const e in this.callbacks)this.callbacks[e]instanceof Object&&this.callbacks[e][l.value]instanceof Array&&this.callbacks[e][l.value].forEach((function(e){c=e.apply(this,t),void 0===a&&(a=c)}));else if(this.callbacks[l.namespace]instanceof Object){if(""===l.value)return console.warn("wrong name"),this;this.callbacks[l.namespace][l.value].forEach((function(e){c=e.apply(this,t),void 0===a&&(a=c)}))}return a}resolveNames(e){let s=e;return s=s.replace(/[^a-zA-Z0-9 ,/.]/g,""),s=s.replace(/[,/]+/g," "),s=s.split(" "),s}resolveName(e){const s={},a=e.split(".");return s.original=e,s.value=a[0],s.namespace="base",a.length>1&&""!==a[1]&&(s.namespace=a[1]),s}}}}]);
//# sourceMappingURL=cover.js.map