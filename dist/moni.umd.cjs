(function(e){typeof define=="function"&&define.amd?define(e):e()})(function(){"use strict";const e={html:function(i){return i?(this.each(function(t){t.innerHTML=i}),this):this[0]?this[0].innerHTML:void 0},each:function(i){return Array.prototype.forEach.call(this,function(t,n){i.call(t,t,n)}),this}},s={on:function(i,t){return this.each(function(n){n.addEventListener(i,t)}),this}},o={css:function(i,t){return t?this.each(function(n){n.style[i]=t}):this[0]?getComputedStyle(this[0])[i]:void 0},classes:function(){const i=this[0]?this[0].classList:void 0,t={has:function(n){return i?i.contains(n):!1},add:function(n){return i&&i.add(n),this},remove:function(n){return i&&i.remove(n),this},toArray:function(){return i?Array.from(i):[]}};return Object.assign(Object.create(this.constructor.fn),t,this)}};(function(i){const t=function(n){return new t.fn.init(n)};t.fn=t.prototype={constructor:t,length:0,init:function(n){if(!n)return this;if(typeof n=="string")if(n[0]==="#")this[0]=document.getElementById(n.slice(1)),this.length=1;else{const r=document.querySelectorAll(n);Array.prototype.push.apply(this,r)}else n.nodeType&&(this[0]=n,this.length=1);return this}},Object.assign(t.fn,e,s,o),t.loaded=function(n){document.readyState!=="loading"?n():document.addEventListener("DOMContentLoaded",n)},t.fn.init.prototype=t.fn,i.moni=t})(window)});
