"use strict";(self.webpackChunkcore_bundler=self.webpackChunkcore_bundler||[]).push([[437],{294:(f,i,l)=>{l.r(i),l.d(i,{CoverModule:()=>o,createInstance:()=>a});var r=l(712);class o extends r.Z{constructor(t){super(t)}init(){this.ready()}}function a(){return new o}},712:(f,i,l)=>{l.d(i,{Z:()=>o});var r=l(976);class o extends r.Z{constructor(e){super(e)}bind(e,t,s,n){this.node=e,this.name=t,this.options=s!==null?s:{selectors:"",settings:""},this.setOptions(),this.init()}setOptions(){}init(){}ready(){const e=Date.now();setTimeout(()=>this.trigger("ready",[e]),1e-6)}}},976:(f,i,l)=>{l.d(i,{Z:()=>r});class r{constructor(){this.callbacks={},this.callbacks.base={}}on(a,e){return typeof a=="undefined"||a===""?(console.warn("wrong names"),!1):typeof e=="undefined"?(console.warn("wrong callback"),!1):(this.resolveNames(a).forEach(s=>{const n=this.resolveName(s);this.callbacks[n.namespace]instanceof Object||(this.callbacks[n.namespace]={}),this.callbacks[n.namespace][n.value]instanceof Array||(this.callbacks[n.namespace][n.value]=[]),this.callbacks[n.namespace][n.value].push(e)}),this)}off(a){return typeof a=="undefined"||a===""?(console.warn("wrong name"),!1):(this.resolveNames(a).forEach(t=>{const s=this.resolveName(t);if(s.namespace!=="base"&&s.value==="")delete this.callbacks[s.namespace];else if(s.namespace==="base")for(const n in this.callbacks)this.callbacks[n]instanceof Object&&this.callbacks[n][s.value]instanceof Array&&(delete this.callbacks[n][s.value],Object.keys(this.callbacks[n]).length===0&&delete this.callbacks[n]);else this.callbacks[s.namespace]instanceof Object&&this.callbacks[s.namespace][s.value]instanceof Array&&(delete this.callbacks[s.namespace][s.value],Object.keys(this.callbacks[s.namespace]).length===0&&delete this.callbacks[s.namespace])}),this)}trigger(a,e){if(typeof a=="undefined"||a==="")return console.warn("wrong name"),!1;let t=null,s=null;const n=e instanceof Array?e:[];let c=this.resolveNames(a);if(c=this.resolveName(c[0]),c.namespace==="base")for(const u in this.callbacks)this.callbacks[u]instanceof Object&&this.callbacks[u][c.value]instanceof Array&&this.callbacks[u][c.value].forEach(function(h){s=h.apply(this,n),typeof t=="undefined"&&(t=s)});else if(this.callbacks[c.namespace]instanceof Object){if(c.value==="")return console.warn("wrong name"),this;this.callbacks[c.namespace][c.value].forEach(function(u){s=u.apply(this,n),typeof t=="undefined"&&(t=s)})}return t}resolveNames(a){let e=a;return e=e.replace(/[^a-zA-Z0-9 ,/.]/g,""),e=e.replace(/[,/]+/g," "),e=e.split(" "),e}resolveName(a){const e={},t=a.split(".");return e.original=a,e.value=t[0],e.namespace="base",t.length>1&&t[1]!==""&&(e.namespace=t[1]),e}}}}]);

//# sourceMappingURL=cover.js.map