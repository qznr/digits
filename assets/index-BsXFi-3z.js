var Kb=Object.defineProperty;var Qb=(e,t,r)=>t in e?Kb(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var Vu=(e,t,r)=>Qb(e,typeof t!="symbol"?t+"":t,r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(a){if(a.ep)return;a.ep=!0;const i=r(a);fetch(a.href,i)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Ks(e){const t=Object.create(null);for(const r of e.split(","))t[r]=1;return r=>r in t}const He={},ti=[],Xt=()=>{},Zb=()=>!1,Vn=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Qs=e=>e.startsWith("onUpdate:"),gt=Object.assign,Zs=(e,t)=>{const r=e.indexOf(t);r>-1&&e.splice(r,1)},Xb=Object.prototype.hasOwnProperty,Ue=(e,t)=>Xb.call(e,t),Ie=Array.isArray,ri=e=>qn(e)==="[object Map]",Qf=e=>qn(e)==="[object Set]",ze=e=>typeof e=="function",Ze=e=>typeof e=="string",xr=e=>typeof e=="symbol",je=e=>e!==null&&typeof e=="object",Zf=e=>(je(e)||ze(e))&&ze(e.then)&&ze(e.catch),Xf=Object.prototype.toString,qn=e=>Xf.call(e),Jb=e=>qn(e).slice(8,-1),Jf=e=>qn(e)==="[object Object]",Xs=e=>Ze(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Ai=Ks(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Fn=e=>{const t=Object.create(null);return r=>t[r]||(t[r]=e(r))},Yb=/-(\w)/g,vr=Fn(e=>e.replace(Yb,(t,r)=>r?r.toUpperCase():"")),ew=/\B([A-Z])/g,qr=Fn(e=>e.replace(ew,"-$1").toLowerCase()),Yf=Fn(e=>e.charAt(0).toUpperCase()+e.slice(1)),ga=Fn(e=>e?`on${Yf(e)}`:""),wr=(e,t)=>!Object.is(e,t),ya=(e,...t)=>{for(let r=0;r<e.length;r++)e[r](...t)},eh=(e,t,r,n=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:n,value:r})},tw=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let qu;const Hn=()=>qu||(qu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Gn(e){if(Ie(e)){const t={};for(let r=0;r<e.length;r++){const n=e[r],a=Ze(n)?aw(n):Gn(n);if(a)for(const i in a)t[i]=a[i]}return t}else if(Ze(e)||je(e))return e}const rw=/;(?![^(]*\))/g,iw=/:([^]+)/,nw=/\/\*[^]*?\*\//g;function aw(e){const t={};return e.replace(nw,"").split(rw).forEach(r=>{if(r){const n=r.split(iw);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function Js(e){let t="";if(Ze(e))t=e;else if(Ie(e))for(let r=0;r<e.length;r++){const n=Js(e[r]);n&&(t+=n+" ")}else if(je(e))for(const r in e)e[r]&&(t+=r+" ");return t.trim()}const sw="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ow=Ks(sw);function th(e){return!!e||e===""}const rh=e=>!!(e&&e.__v_isRef===!0),$n=e=>Ze(e)?e:e==null?"":Ie(e)||je(e)&&(e.toString===Xf||!ze(e.toString))?rh(e)?$n(e.value):JSON.stringify(e,ih,2):String(e),ih=(e,t)=>rh(t)?ih(e,t.value):ri(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((r,[n,a],i)=>(r[_a(n,i)+" =>"]=a,r),{})}:Qf(t)?{[`Set(${t.size})`]:[...t.values()].map(r=>_a(r))}:xr(t)?_a(t):je(t)&&!Ie(t)&&!Jf(t)?String(t):t,_a=(e,t="")=>{var r;return xr(e)?`Symbol(${(r=e.description)!=null?r:t})`:e};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let $t;class lw{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=$t,!t&&$t&&(this.index=($t.scopes||($t.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,r;if(this.scopes)for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].pause();for(t=0,r=this.effects.length;t<r;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,r;if(this.scopes)for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].resume();for(t=0,r=this.effects.length;t<r;t++)this.effects[t].resume()}}run(t){if(this._active){const r=$t;try{return $t=this,t()}finally{$t=r}}}on(){$t=this}off(){$t=this.parent}stop(t){if(this._active){this._active=!1;let r,n;for(r=0,n=this.effects.length;r<n;r++)this.effects[r].stop();for(this.effects.length=0,r=0,n=this.cleanups.length;r<n;r++)this.cleanups[r]();if(this.cleanups.length=0,this.scopes){for(r=0,n=this.scopes.length;r<n;r++)this.scopes[r].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0}}}function uw(){return $t}let qe;const ba=new WeakSet;class nh{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,$t&&$t.active&&$t.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ba.has(this)&&(ba.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||sh(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Fu(this),oh(this);const t=qe,r=Dt;qe=this,Dt=!0;try{return this.fn()}finally{lh(this),qe=t,Dt=r,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)to(t);this.deps=this.depsTail=void 0,Fu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ba.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){xs(this)&&this.run()}get dirty(){return xs(this)}}let ah=0,Oi,Ri;function sh(e,t=!1){if(e.flags|=8,t){e.next=Ri,Ri=e;return}e.next=Oi,Oi=e}function Ys(){ah++}function eo(){if(--ah>0)return;if(Ri){let t=Ri;for(Ri=void 0;t;){const r=t.next;t.next=void 0,t.flags&=-9,t=r}}let e;for(;Oi;){let t=Oi;for(Oi=void 0;t;){const r=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(n){e||(e=n)}t=r}}if(e)throw e}function oh(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function lh(e){let t,r=e.depsTail,n=r;for(;n;){const a=n.prevDep;n.version===-1?(n===r&&(r=a),to(n),dw(n)):t=n,n.dep.activeLink=n.prevActiveLink,n.prevActiveLink=void 0,n=a}e.deps=t,e.depsTail=r}function xs(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(uh(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function uh(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Pi))return;e.globalVersion=Pi;const t=e.dep;if(e.flags|=2,t.version>0&&!e.isSSR&&e.deps&&!xs(e)){e.flags&=-3;return}const r=qe,n=Dt;qe=e,Dt=!0;try{oh(e);const a=e.fn(e._value);(t.version===0||wr(a,e._value))&&(e._value=a,t.version++)}catch(a){throw t.version++,a}finally{qe=r,Dt=n,lh(e),e.flags&=-3}}function to(e,t=!1){const{dep:r,prevSub:n,nextSub:a}=e;if(n&&(n.nextSub=a,e.prevSub=void 0),a&&(a.prevSub=n,e.nextSub=void 0),r.subs===e&&(r.subs=n,!n&&r.computed)){r.computed.flags&=-5;for(let i=r.computed.deps;i;i=i.nextDep)to(i,!0)}!t&&!--r.sc&&r.map&&r.map.delete(r.key)}function dw(e){const{prevDep:t,nextDep:r}=e;t&&(t.nextDep=r,e.prevDep=void 0),r&&(r.prevDep=t,e.nextDep=void 0)}let Dt=!0;const dh=[];function Sr(){dh.push(Dt),Dt=!1}function Tr(){const e=dh.pop();Dt=e===void 0?!0:e}function Fu(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const r=qe;qe=void 0;try{t()}finally{qe=r}}}let Pi=0;class cw{constructor(t,r){this.sub=t,this.dep=r,this.version=r.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ro{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(t){if(!qe||!Dt||qe===this.computed)return;let r=this.activeLink;if(r===void 0||r.sub!==qe)r=this.activeLink=new cw(qe,this),qe.deps?(r.prevDep=qe.depsTail,qe.depsTail.nextDep=r,qe.depsTail=r):qe.deps=qe.depsTail=r,ch(r);else if(r.version===-1&&(r.version=this.version,r.nextDep)){const n=r.nextDep;n.prevDep=r.prevDep,r.prevDep&&(r.prevDep.nextDep=n),r.prevDep=qe.depsTail,r.nextDep=void 0,qe.depsTail.nextDep=r,qe.depsTail=r,qe.deps===r&&(qe.deps=n)}return r}trigger(t){this.version++,Pi++,this.notify(t)}notify(t){Ys();try{for(let r=this.subs;r;r=r.prevSub)r.sub.notify()&&r.sub.dep.notify()}finally{eo()}}}function ch(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let n=t.deps;n;n=n.nextDep)ch(n)}const r=e.dep.subs;r!==e&&(e.prevSub=r,r&&(r.nextSub=e)),e.dep.subs=e}}const Ss=new WeakMap,Nr=Symbol(""),Ts=Symbol(""),Ui=Symbol("");function ut(e,t,r){if(Dt&&qe){let n=Ss.get(e);n||Ss.set(e,n=new Map);let a=n.get(r);a||(n.set(r,a=new ro),a.map=n,a.key=r),a.track()}}function sr(e,t,r,n,a,i){const s=Ss.get(e);if(!s){Pi++;return}const l=u=>{u&&u.trigger()};if(Ys(),t==="clear")s.forEach(l);else{const u=Ie(e),c=u&&Xs(r);if(u&&r==="length"){const f=Number(n);s.forEach((h,g)=>{(g==="length"||g===Ui||!xr(g)&&g>=f)&&l(h)})}else switch((r!==void 0||s.has(void 0))&&l(s.get(r)),c&&l(s.get(Ui)),t){case"add":u?c&&l(s.get("length")):(l(s.get(Nr)),ri(e)&&l(s.get(Ts)));break;case"delete":u||(l(s.get(Nr)),ri(e)&&l(s.get(Ts)));break;case"set":ri(e)&&l(s.get(Nr));break}}eo()}function Kr(e){const t=Pe(e);return t===e?t:(ut(t,"iterate",Ui),Et(e)?t:t.map(dt))}function jn(e){return ut(e=Pe(e),"iterate",Ui),e}const pw={__proto__:null,[Symbol.iterator](){return wa(this,Symbol.iterator,dt)},concat(...e){return Kr(this).concat(...e.map(t=>Ie(t)?Kr(t):t))},entries(){return wa(this,"entries",e=>(e[1]=dt(e[1]),e))},every(e,t){return ir(this,"every",e,t,void 0,arguments)},filter(e,t){return ir(this,"filter",e,t,r=>r.map(dt),arguments)},find(e,t){return ir(this,"find",e,t,dt,arguments)},findIndex(e,t){return ir(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return ir(this,"findLast",e,t,dt,arguments)},findLastIndex(e,t){return ir(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return ir(this,"forEach",e,t,void 0,arguments)},includes(...e){return va(this,"includes",e)},indexOf(...e){return va(this,"indexOf",e)},join(e){return Kr(this).join(e)},lastIndexOf(...e){return va(this,"lastIndexOf",e)},map(e,t){return ir(this,"map",e,t,void 0,arguments)},pop(){return hi(this,"pop")},push(...e){return hi(this,"push",e)},reduce(e,...t){return Hu(this,"reduce",e,t)},reduceRight(e,...t){return Hu(this,"reduceRight",e,t)},shift(){return hi(this,"shift")},some(e,t){return ir(this,"some",e,t,void 0,arguments)},splice(...e){return hi(this,"splice",e)},toReversed(){return Kr(this).toReversed()},toSorted(e){return Kr(this).toSorted(e)},toSpliced(...e){return Kr(this).toSpliced(...e)},unshift(...e){return hi(this,"unshift",e)},values(){return wa(this,"values",dt)}};function wa(e,t,r){const n=jn(e),a=n[t]();return n!==e&&!Et(e)&&(a._next=a.next,a.next=()=>{const i=a._next();return i.value&&(i.value=r(i.value)),i}),a}const fw=Array.prototype;function ir(e,t,r,n,a,i){const s=jn(e),l=s!==e&&!Et(e),u=s[t];if(u!==fw[t]){const h=u.apply(e,i);return l?dt(h):h}let c=r;s!==e&&(l?c=function(h,g){return r.call(this,dt(h),g,e)}:r.length>2&&(c=function(h,g){return r.call(this,h,g,e)}));const f=u.call(s,c,n);return l&&a?a(f):f}function Hu(e,t,r,n){const a=jn(e);let i=r;return a!==e&&(Et(e)?r.length>3&&(i=function(s,l,u){return r.call(this,s,l,u,e)}):i=function(s,l,u){return r.call(this,s,dt(l),u,e)}),a[t](i,...n)}function va(e,t,r){const n=Pe(e);ut(n,"iterate",Ui);const a=n[t](...r);return(a===-1||a===!1)&&so(r[0])?(r[0]=Pe(r[0]),n[t](...r)):a}function hi(e,t,r=[]){Sr(),Ys();const n=Pe(e)[t].apply(e,r);return eo(),Tr(),n}const hw=Ks("__proto__,__v_isRef,__isVue"),ph=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(xr));function mw(e){xr(e)||(e=String(e));const t=Pe(this);return ut(t,"has",e),t.hasOwnProperty(e)}class fh{constructor(t=!1,r=!1){this._isReadonly=t,this._isShallow=r}get(t,r,n){if(r==="__v_skip")return t.__v_skip;const a=this._isReadonly,i=this._isShallow;if(r==="__v_isReactive")return!a;if(r==="__v_isReadonly")return a;if(r==="__v_isShallow")return i;if(r==="__v_raw")return n===(a?i?Tw:yh:i?gh:mh).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(n)?t:void 0;const s=Ie(t);if(!a){let u;if(s&&(u=pw[r]))return u;if(r==="hasOwnProperty")return mw}const l=Reflect.get(t,r,ct(t)?t:n);return(xr(r)?ph.has(r):hw(r))||(a||ut(t,"get",r),i)?l:ct(l)?s&&Xs(r)?l:l.value:je(l)?a?_h(l):no(l):l}}class hh extends fh{constructor(t=!1){super(!1,t)}set(t,r,n,a){let i=t[r];if(!this._isShallow){const u=Pr(i);if(!Et(n)&&!Pr(n)&&(i=Pe(i),n=Pe(n)),!Ie(t)&&ct(i)&&!ct(n))return u?!1:(i.value=n,!0)}const s=Ie(t)&&Xs(r)?Number(r)<t.length:Ue(t,r),l=Reflect.set(t,r,n,ct(t)?t:a);return t===Pe(a)&&(s?wr(n,i)&&sr(t,"set",r,n):sr(t,"add",r,n)),l}deleteProperty(t,r){const n=Ue(t,r);t[r];const a=Reflect.deleteProperty(t,r);return a&&n&&sr(t,"delete",r,void 0),a}has(t,r){const n=Reflect.has(t,r);return(!xr(r)||!ph.has(r))&&ut(t,"has",r),n}ownKeys(t){return ut(t,"iterate",Ie(t)?"length":Nr),Reflect.ownKeys(t)}}class gw extends fh{constructor(t=!1){super(!0,t)}set(t,r){return!0}deleteProperty(t,r){return!0}}const yw=new hh,_w=new gw,bw=new hh(!0);const Cs=e=>e,an=e=>Reflect.getPrototypeOf(e);function ww(e,t,r){return function(...n){const a=this.__v_raw,i=Pe(a),s=ri(i),l=e==="entries"||e===Symbol.iterator&&s,u=e==="keys"&&s,c=a[e](...n),f=r?Cs:t?ks:dt;return!t&&ut(i,"iterate",u?Ts:Nr),{next(){const{value:h,done:g}=c.next();return g?{value:h,done:g}:{value:l?[f(h[0]),f(h[1])]:f(h),done:g}},[Symbol.iterator](){return this}}}}function sn(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function vw(e,t){const r={get(a){const i=this.__v_raw,s=Pe(i),l=Pe(a);e||(wr(a,l)&&ut(s,"get",a),ut(s,"get",l));const{has:u}=an(s),c=t?Cs:e?ks:dt;if(u.call(s,a))return c(i.get(a));if(u.call(s,l))return c(i.get(l));i!==s&&i.get(a)},get size(){const a=this.__v_raw;return!e&&ut(Pe(a),"iterate",Nr),Reflect.get(a,"size",a)},has(a){const i=this.__v_raw,s=Pe(i),l=Pe(a);return e||(wr(a,l)&&ut(s,"has",a),ut(s,"has",l)),a===l?i.has(a):i.has(a)||i.has(l)},forEach(a,i){const s=this,l=s.__v_raw,u=Pe(l),c=t?Cs:e?ks:dt;return!e&&ut(u,"iterate",Nr),l.forEach((f,h)=>a.call(i,c(f),c(h),s))}};return gt(r,e?{add:sn("add"),set:sn("set"),delete:sn("delete"),clear:sn("clear")}:{add(a){!t&&!Et(a)&&!Pr(a)&&(a=Pe(a));const i=Pe(this);return an(i).has.call(i,a)||(i.add(a),sr(i,"add",a,a)),this},set(a,i){!t&&!Et(i)&&!Pr(i)&&(i=Pe(i));const s=Pe(this),{has:l,get:u}=an(s);let c=l.call(s,a);c||(a=Pe(a),c=l.call(s,a));const f=u.call(s,a);return s.set(a,i),c?wr(i,f)&&sr(s,"set",a,i):sr(s,"add",a,i),this},delete(a){const i=Pe(this),{has:s,get:l}=an(i);let u=s.call(i,a);u||(a=Pe(a),u=s.call(i,a)),l&&l.call(i,a);const c=i.delete(a);return u&&sr(i,"delete",a,void 0),c},clear(){const a=Pe(this),i=a.size!==0,s=a.clear();return i&&sr(a,"clear",void 0,void 0),s}}),["keys","values","entries",Symbol.iterator].forEach(a=>{r[a]=ww(a,e,t)}),r}function io(e,t){const r=vw(e,t);return(n,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?n:Reflect.get(Ue(r,a)&&a in n?r:n,a,i)}const $w={get:io(!1,!1)},xw={get:io(!1,!0)},Sw={get:io(!0,!1)};const mh=new WeakMap,gh=new WeakMap,yh=new WeakMap,Tw=new WeakMap;function Cw(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function kw(e){return e.__v_skip||!Object.isExtensible(e)?0:Cw(Jb(e))}function no(e){return Pr(e)?e:ao(e,!1,yw,$w,mh)}function Iw(e){return ao(e,!1,bw,xw,gh)}function _h(e){return ao(e,!0,_w,Sw,yh)}function ao(e,t,r,n,a){if(!je(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const s=kw(e);if(s===0)return e;const l=new Proxy(e,s===2?n:r);return a.set(e,l),l}function ii(e){return Pr(e)?ii(e.__v_raw):!!(e&&e.__v_isReactive)}function Pr(e){return!!(e&&e.__v_isReadonly)}function Et(e){return!!(e&&e.__v_isShallow)}function so(e){return e?!!e.__v_raw:!1}function Pe(e){const t=e&&e.__v_raw;return t?Pe(t):e}function Ew(e){return!Ue(e,"__v_skip")&&Object.isExtensible(e)&&eh(e,"__v_skip",!0),e}const dt=e=>je(e)?no(e):e,ks=e=>je(e)?_h(e):e;function ct(e){return e?e.__v_isRef===!0:!1}function jt(e){return zw(e,!1)}function zw(e,t){return ct(e)?e:new Aw(e,t)}class Aw{constructor(t,r){this.dep=new ro,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=r?t:Pe(t),this._value=r?t:dt(t),this.__v_isShallow=r}get value(){return this.dep.track(),this._value}set value(t){const r=this._rawValue,n=this.__v_isShallow||Et(t)||Pr(t);t=n?t:Pe(t),wr(t,r)&&(this._rawValue=t,this._value=n?t:dt(t),this.dep.trigger())}}function Ow(e){return ct(e)?e.value:e}const Rw={get:(e,t,r)=>t==="__v_raw"?e:Ow(Reflect.get(e,t,r)),set:(e,t,r,n)=>{const a=e[t];return ct(a)&&!ct(r)?(a.value=r,!0):Reflect.set(e,t,r,n)}};function bh(e){return ii(e)?e:new Proxy(e,Rw)}class Mw{constructor(t,r,n){this.fn=t,this.setter=r,this._value=void 0,this.dep=new ro(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Pi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!r,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&qe!==this)return sh(this,!0),!0}get value(){const t=this.dep.track();return uh(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Bw(e,t,r=!1){let n,a;return ze(e)?n=e:(n=e.get,a=e.set),new Mw(n,a,r)}const on={},In=new WeakMap;let Rr;function Dw(e,t=!1,r=Rr){if(r){let n=In.get(r);n||In.set(r,n=[]),n.push(e)}}function Nw(e,t,r=He){const{immediate:n,deep:a,once:i,scheduler:s,augmentJob:l,call:u}=r,c=T=>a?T:Et(T)||a===!1||a===0?_r(T,1):_r(T);let f,h,g,_,b=!1,w=!1;if(ct(e)?(h=()=>e.value,b=Et(e)):ii(e)?(h=()=>c(e),b=!0):Ie(e)?(w=!0,b=e.some(T=>ii(T)||Et(T)),h=()=>e.map(T=>{if(ct(T))return T.value;if(ii(T))return c(T);if(ze(T))return u?u(T,2):T()})):ze(e)?t?h=u?()=>u(e,2):e:h=()=>{if(g){Sr();try{g()}finally{Tr()}}const T=Rr;Rr=f;try{return u?u(e,3,[_]):e(_)}finally{Rr=T}}:h=Xt,t&&a){const T=h,k=a===!0?1/0:a;h=()=>_r(T(),k)}const S=uw(),$=()=>{f.stop(),S&&S.active&&Zs(S.effects,f)};if(i&&t){const T=t;t=(...k)=>{T(...k),$()}}let v=w?new Array(e.length).fill(on):on;const C=T=>{if(!(!(f.flags&1)||!f.dirty&&!T))if(t){const k=f.run();if(a||b||(w?k.some((A,O)=>wr(A,v[O])):wr(k,v))){g&&g();const A=Rr;Rr=f;try{const O=[k,v===on?void 0:w&&v[0]===on?[]:v,_];u?u(t,3,O):t(...O),v=k}finally{Rr=A}}}else f.run()};return l&&l(C),f=new nh(h),f.scheduler=s?()=>s(C,!1):C,_=T=>Dw(T,!1,f),g=f.onStop=()=>{const T=In.get(f);if(T){if(u)u(T,4);else for(const k of T)k();In.delete(f)}},t?n?C(!0):v=f.run():s?s(C.bind(null,!0),!0):f.run(),$.pause=f.pause.bind(f),$.resume=f.resume.bind(f),$.stop=$,$}function _r(e,t=1/0,r){if(t<=0||!je(e)||e.__v_skip||(r=r||new Set,r.has(e)))return e;if(r.add(e),t--,ct(e))_r(e.value,t,r);else if(Ie(e))for(let n=0;n<e.length;n++)_r(e[n],t,r);else if(Qf(e)||ri(e))e.forEach(n=>{_r(n,t,r)});else if(Jf(e)){for(const n in e)_r(e[n],t,r);for(const n of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,n)&&_r(e[n],t,r)}return e}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Fi(e,t,r,n){try{return n?e(...n):e()}catch(a){Kn(a,t,r)}}function Yt(e,t,r,n){if(ze(e)){const a=Fi(e,t,r,n);return a&&Zf(a)&&a.catch(i=>{Kn(i,t,r)}),a}if(Ie(e)){const a=[];for(let i=0;i<e.length;i++)a.push(Yt(e[i],t,r,n));return a}}function Kn(e,t,r,n=!0){const a=t?t.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:s}=t&&t.appContext.config||He;if(t){let l=t.parent;const u=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${r}`;for(;l;){const f=l.ec;if(f){for(let h=0;h<f.length;h++)if(f[h](e,u,c)===!1)return}l=l.parent}if(i){Sr(),Fi(i,null,10,[e,u,c]),Tr();return}}Pw(e,r,a,n,s)}function Pw(e,t,r,n=!0,a=!1){if(a)throw e;console.error(e)}const ht=[];let Gt=-1;const ni=[];let gr=null,Zr=0;const wh=Promise.resolve();let En=null;function Uw(e){const t=En||wh;return e?t.then(this?e.bind(this):e):t}function Ww(e){let t=Gt+1,r=ht.length;for(;t<r;){const n=t+r>>>1,a=ht[n],i=Wi(a);i<e||i===e&&a.flags&2?t=n+1:r=n}return t}function oo(e){if(!(e.flags&1)){const t=Wi(e),r=ht[ht.length-1];!r||!(e.flags&2)&&t>=Wi(r)?ht.push(e):ht.splice(Ww(t),0,e),e.flags|=1,vh()}}function vh(){En||(En=wh.then(xh))}function Lw(e){Ie(e)?ni.push(...e):gr&&e.id===-1?gr.splice(Zr+1,0,e):e.flags&1||(ni.push(e),e.flags|=1),vh()}function Gu(e,t,r=Gt+1){for(;r<ht.length;r++){const n=ht[r];if(n&&n.flags&2){if(e&&n.id!==e.uid)continue;ht.splice(r,1),r--,n.flags&4&&(n.flags&=-2),n(),n.flags&4||(n.flags&=-2)}}}function $h(e){if(ni.length){const t=[...new Set(ni)].sort((r,n)=>Wi(r)-Wi(n));if(ni.length=0,gr){gr.push(...t);return}for(gr=t,Zr=0;Zr<gr.length;Zr++){const r=gr[Zr];r.flags&4&&(r.flags&=-2),r.flags&8||r(),r.flags&=-2}gr=null,Zr=0}}const Wi=e=>e.id==null?e.flags&2?-1:1/0:e.id;function xh(e){try{for(Gt=0;Gt<ht.length;Gt++){const t=ht[Gt];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Fi(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Gt<ht.length;Gt++){const t=ht[Gt];t&&(t.flags&=-2)}Gt=-1,ht.length=0,$h(),En=null,(ht.length||ni.length)&&xh()}}let Zt=null,Sh=null;function zn(e){const t=Zt;return Zt=e,Sh=e&&e.type.__scopeId||null,t}function Vw(e,t=Zt,r){if(!t||e._n)return e;const n=(...a)=>{n._d&&td(-1);const i=zn(t);let s;try{s=e(...a)}finally{zn(i),n._d&&td(1)}return s};return n._n=!0,n._c=!0,n._d=!0,n}function kr(e,t,r,n){const a=e.dirs,i=t&&t.dirs;for(let s=0;s<a.length;s++){const l=a[s];i&&(l.oldValue=i[s].value);let u=l.dir[n];u&&(Sr(),Yt(u,r,8,[e.el,l,e,t]),Tr())}}const qw=Symbol("_vte"),Fw=e=>e.__isTeleport;function lo(e,t){e.shapeFlag&6&&e.component?(e.transition=t,lo(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Th(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function An(e,t,r,n,a=!1){if(Ie(e)){e.forEach((b,w)=>An(b,t&&(Ie(t)?t[w]:t),r,n,a));return}if(Mi(n)&&!a){n.shapeFlag&512&&n.type.__asyncResolved&&n.component.subTree.component&&An(e,t,r,n.component.subTree);return}const i=n.shapeFlag&4?fo(n.component):n.el,s=a?null:i,{i:l,r:u}=e,c=t&&t.r,f=l.refs===He?l.refs={}:l.refs,h=l.setupState,g=Pe(h),_=h===He?()=>!1:b=>Ue(g,b);if(c!=null&&c!==u&&(Ze(c)?(f[c]=null,_(c)&&(h[c]=null)):ct(c)&&(c.value=null)),ze(u))Fi(u,l,12,[s,f]);else{const b=Ze(u),w=ct(u);if(b||w){const S=()=>{if(e.f){const $=b?_(u)?h[u]:f[u]:u.value;a?Ie($)&&Zs($,i):Ie($)?$.includes(i)||$.push(i):b?(f[u]=[i],_(u)&&(h[u]=f[u])):(u.value=[i],e.k&&(f[e.k]=u.value))}else b?(f[u]=s,_(u)&&(h[u]=s)):w&&(u.value=s,e.k&&(f[e.k]=s))};s?(S.id=-1,vt(S,r)):S()}}}Hn().requestIdleCallback;Hn().cancelIdleCallback;const Mi=e=>!!e.type.__asyncLoader,Ch=e=>e.type.__isKeepAlive;function Hw(e,t){kh(e,"a",t)}function Gw(e,t){kh(e,"da",t)}function kh(e,t,r=mt){const n=e.__wdc||(e.__wdc=()=>{let a=r;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(Qn(t,n,r),r){let a=r.parent;for(;a&&a.parent;)Ch(a.parent.vnode)&&jw(n,t,r,a),a=a.parent}}function jw(e,t,r,n){const a=Qn(t,e,n,!0);Ih(()=>{Zs(n[t],a)},r)}function Qn(e,t,r=mt,n=!1){if(r){const a=r[e]||(r[e]=[]),i=t.__weh||(t.__weh=(...s)=>{Sr();const l=Hi(r),u=Yt(t,r,e,s);return l(),Tr(),u});return n?a.unshift(i):a.push(i),i}}const or=e=>(t,r=mt)=>{(!Vi||e==="sp")&&Qn(e,(...n)=>t(...n),r)},Kw=or("bm"),uo=or("m"),Qw=or("bu"),Zw=or("u"),Xw=or("bum"),Ih=or("um"),Jw=or("sp"),Yw=or("rtg"),ev=or("rtc");function tv(e,t=mt){Qn("ec",e,t)}const rv=Symbol.for("v-ndc");function iv(e,t,r,n){let a;const i=r,s=Ie(e);if(s||Ze(e)){const l=s&&ii(e);let u=!1;l&&(u=!Et(e),e=jn(e)),a=new Array(e.length);for(let c=0,f=e.length;c<f;c++)a[c]=t(u?dt(e[c]):e[c],c,void 0,i)}else if(typeof e=="number"){a=new Array(e);for(let l=0;l<e;l++)a[l]=t(l+1,l,void 0,i)}else if(je(e))if(e[Symbol.iterator])a=Array.from(e,(l,u)=>t(l,u,void 0,i));else{const l=Object.keys(e);a=new Array(l.length);for(let u=0,c=l.length;u<c;u++){const f=l[u];a[u]=t(e[f],f,u,i)}}else a=[];return a}const Is=e=>e?Zh(e)?fo(e):Is(e.parent):null,Bi=gt(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Is(e.parent),$root:e=>Is(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>zh(e),$forceUpdate:e=>e.f||(e.f=()=>{oo(e.update)}),$nextTick:e=>e.n||(e.n=Uw.bind(e.proxy)),$watch:e=>Tv.bind(e)}),$a=(e,t)=>e!==He&&!e.__isScriptSetup&&Ue(e,t),nv={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:r,setupState:n,data:a,props:i,accessCache:s,type:l,appContext:u}=e;let c;if(t[0]!=="$"){const _=s[t];if(_!==void 0)switch(_){case 1:return n[t];case 2:return a[t];case 4:return r[t];case 3:return i[t]}else{if($a(n,t))return s[t]=1,n[t];if(a!==He&&Ue(a,t))return s[t]=2,a[t];if((c=e.propsOptions[0])&&Ue(c,t))return s[t]=3,i[t];if(r!==He&&Ue(r,t))return s[t]=4,r[t];Es&&(s[t]=0)}}const f=Bi[t];let h,g;if(f)return t==="$attrs"&&ut(e.attrs,"get",""),f(e);if((h=l.__cssModules)&&(h=h[t]))return h;if(r!==He&&Ue(r,t))return s[t]=4,r[t];if(g=u.config.globalProperties,Ue(g,t))return g[t]},set({_:e},t,r){const{data:n,setupState:a,ctx:i}=e;return $a(a,t)?(a[t]=r,!0):n!==He&&Ue(n,t)?(n[t]=r,!0):Ue(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=r,!0)},has({_:{data:e,setupState:t,accessCache:r,ctx:n,appContext:a,propsOptions:i}},s){let l;return!!r[s]||e!==He&&Ue(e,s)||$a(t,s)||(l=i[0])&&Ue(l,s)||Ue(n,s)||Ue(Bi,s)||Ue(a.config.globalProperties,s)},defineProperty(e,t,r){return r.get!=null?e._.accessCache[t]=0:Ue(r,"value")&&this.set(e,t,r.value,null),Reflect.defineProperty(e,t,r)}};function ju(e){return Ie(e)?e.reduce((t,r)=>(t[r]=null,t),{}):e}let Es=!0;function av(e){const t=zh(e),r=e.proxy,n=e.ctx;Es=!1,t.beforeCreate&&Ku(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:s,watch:l,provide:u,inject:c,created:f,beforeMount:h,mounted:g,beforeUpdate:_,updated:b,activated:w,deactivated:S,beforeDestroy:$,beforeUnmount:v,destroyed:C,unmounted:T,render:k,renderTracked:A,renderTriggered:O,errorCaptured:B,serverPrefetch:q,expose:X,inheritAttrs:ce,components:ge,directives:se,filters:he}=t;if(c&&sv(c,n,null),s)for(const le in s){const ue=s[le];ze(ue)&&(n[le]=ue.bind(r))}if(a){const le=a.call(r,r);je(le)&&(e.data=no(le))}if(Es=!0,i)for(const le in i){const ue=i[le],ee=ze(ue)?ue.bind(r,r):ze(ue.get)?ue.get.bind(r,r):Xt,Ae=!ze(ue)&&ze(ue.set)?ue.set.bind(r):Xt,N=Kv({get:ee,set:Ae});Object.defineProperty(n,le,{enumerable:!0,configurable:!0,get:()=>N.value,set:V=>N.value=V})}if(l)for(const le in l)Eh(l[le],n,r,le);if(u){const le=ze(u)?u.call(r):u;Reflect.ownKeys(le).forEach(ue=>{pv(ue,le[ue])})}f&&Ku(f,e,"c");function Q(le,ue){Ie(ue)?ue.forEach(ee=>le(ee.bind(r))):ue&&le(ue.bind(r))}if(Q(Kw,h),Q(uo,g),Q(Qw,_),Q(Zw,b),Q(Hw,w),Q(Gw,S),Q(tv,B),Q(ev,A),Q(Yw,O),Q(Xw,v),Q(Ih,T),Q(Jw,q),Ie(X))if(X.length){const le=e.exposed||(e.exposed={});X.forEach(ue=>{Object.defineProperty(le,ue,{get:()=>r[ue],set:ee=>r[ue]=ee})})}else e.exposed||(e.exposed={});k&&e.render===Xt&&(e.render=k),ce!=null&&(e.inheritAttrs=ce),ge&&(e.components=ge),se&&(e.directives=se),q&&Th(e)}function sv(e,t,r=Xt){Ie(e)&&(e=zs(e));for(const n in e){const a=e[n];let i;je(a)?"default"in a?i=xn(a.from||n,a.default,!0):i=xn(a.from||n):i=xn(a),ct(i)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>i.value,set:s=>i.value=s}):t[n]=i}}function Ku(e,t,r){Yt(Ie(e)?e.map(n=>n.bind(t.proxy)):e.bind(t.proxy),t,r)}function Eh(e,t,r,n){let a=n.includes(".")?Fh(r,n):()=>r[n];if(Ze(e)){const i=t[e];ze(i)&&Sa(a,i)}else if(ze(e))Sa(a,e.bind(r));else if(je(e))if(Ie(e))e.forEach(i=>Eh(i,t,r,n));else{const i=ze(e.handler)?e.handler.bind(r):t[e.handler];ze(i)&&Sa(a,i,e)}}function zh(e){const t=e.type,{mixins:r,extends:n}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:s}}=e.appContext,l=i.get(t);let u;return l?u=l:!a.length&&!r&&!n?u=t:(u={},a.length&&a.forEach(c=>On(u,c,s,!0)),On(u,t,s)),je(t)&&i.set(t,u),u}function On(e,t,r,n=!1){const{mixins:a,extends:i}=t;i&&On(e,i,r,!0),a&&a.forEach(s=>On(e,s,r,!0));for(const s in t)if(!(n&&s==="expose")){const l=ov[s]||r&&r[s];e[s]=l?l(e[s],t[s]):t[s]}return e}const ov={data:Qu,props:Zu,emits:Zu,methods:Ti,computed:Ti,beforeCreate:ft,created:ft,beforeMount:ft,mounted:ft,beforeUpdate:ft,updated:ft,beforeDestroy:ft,beforeUnmount:ft,destroyed:ft,unmounted:ft,activated:ft,deactivated:ft,errorCaptured:ft,serverPrefetch:ft,components:Ti,directives:Ti,watch:uv,provide:Qu,inject:lv};function Qu(e,t){return t?e?function(){return gt(ze(e)?e.call(this,this):e,ze(t)?t.call(this,this):t)}:t:e}function lv(e,t){return Ti(zs(e),zs(t))}function zs(e){if(Ie(e)){const t={};for(let r=0;r<e.length;r++)t[e[r]]=e[r];return t}return e}function ft(e,t){return e?[...new Set([].concat(e,t))]:t}function Ti(e,t){return e?gt(Object.create(null),e,t):t}function Zu(e,t){return e?Ie(e)&&Ie(t)?[...new Set([...e,...t])]:gt(Object.create(null),ju(e),ju(t??{})):t}function uv(e,t){if(!e)return t;if(!t)return e;const r=gt(Object.create(null),e);for(const n in t)r[n]=ft(e[n],t[n]);return r}function Ah(){return{app:null,config:{isNativeTag:Zb,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let dv=0;function cv(e,t){return function(n,a=null){ze(n)||(n=gt({},n)),a!=null&&!je(a)&&(a=null);const i=Ah(),s=new WeakSet,l=[];let u=!1;const c=i.app={_uid:dv++,_component:n,_props:a,_container:null,_context:i,_instance:null,version:Qv,get config(){return i.config},set config(f){},use(f,...h){return s.has(f)||(f&&ze(f.install)?(s.add(f),f.install(c,...h)):ze(f)&&(s.add(f),f(c,...h))),c},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),c},component(f,h){return h?(i.components[f]=h,c):i.components[f]},directive(f,h){return h?(i.directives[f]=h,c):i.directives[f]},mount(f,h,g){if(!u){const _=c._ceVNode||Jt(n,a);return _.appContext=i,g===!0?g="svg":g===!1&&(g=void 0),e(_,f,g),u=!0,c._container=f,f.__vue_app__=c,fo(_.component)}},onUnmount(f){l.push(f)},unmount(){u&&(Yt(l,c._instance,16),e(null,c._container),delete c._container.__vue_app__)},provide(f,h){return i.provides[f]=h,c},runWithContext(f){const h=ai;ai=c;try{return f()}finally{ai=h}}};return c}}let ai=null;function pv(e,t){if(mt){let r=mt.provides;const n=mt.parent&&mt.parent.provides;n===r&&(r=mt.provides=Object.create(n)),r[e]=t}}function xn(e,t,r=!1){const n=mt||Zt;if(n||ai){const a=ai?ai._context.provides:n?n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:void 0;if(a&&e in a)return a[e];if(arguments.length>1)return r&&ze(t)?t.call(n&&n.proxy):t}}const Oh={},Rh=()=>Object.create(Oh),Mh=e=>Object.getPrototypeOf(e)===Oh;function fv(e,t,r,n=!1){const a={},i=Rh();e.propsDefaults=Object.create(null),Bh(e,t,a,i);for(const s in e.propsOptions[0])s in a||(a[s]=void 0);r?e.props=n?a:Iw(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function hv(e,t,r,n){const{props:a,attrs:i,vnode:{patchFlag:s}}=e,l=Pe(a),[u]=e.propsOptions;let c=!1;if((n||s>0)&&!(s&16)){if(s&8){const f=e.vnode.dynamicProps;for(let h=0;h<f.length;h++){let g=f[h];if(Zn(e.emitsOptions,g))continue;const _=t[g];if(u)if(Ue(i,g))_!==i[g]&&(i[g]=_,c=!0);else{const b=vr(g);a[b]=As(u,l,b,_,e,!1)}else _!==i[g]&&(i[g]=_,c=!0)}}}else{Bh(e,t,a,i)&&(c=!0);let f;for(const h in l)(!t||!Ue(t,h)&&((f=qr(h))===h||!Ue(t,f)))&&(u?r&&(r[h]!==void 0||r[f]!==void 0)&&(a[h]=As(u,l,h,void 0,e,!0)):delete a[h]);if(i!==l)for(const h in i)(!t||!Ue(t,h))&&(delete i[h],c=!0)}c&&sr(e.attrs,"set","")}function Bh(e,t,r,n){const[a,i]=e.propsOptions;let s=!1,l;if(t)for(let u in t){if(Ai(u))continue;const c=t[u];let f;a&&Ue(a,f=vr(u))?!i||!i.includes(f)?r[f]=c:(l||(l={}))[f]=c:Zn(e.emitsOptions,u)||(!(u in n)||c!==n[u])&&(n[u]=c,s=!0)}if(i){const u=Pe(r),c=l||He;for(let f=0;f<i.length;f++){const h=i[f];r[h]=As(a,u,h,c[h],e,!Ue(c,h))}}return s}function As(e,t,r,n,a,i){const s=e[r];if(s!=null){const l=Ue(s,"default");if(l&&n===void 0){const u=s.default;if(s.type!==Function&&!s.skipFactory&&ze(u)){const{propsDefaults:c}=a;if(r in c)n=c[r];else{const f=Hi(a);n=c[r]=u.call(null,t),f()}}else n=u;a.ce&&a.ce._setProp(r,n)}s[0]&&(i&&!l?n=!1:s[1]&&(n===""||n===qr(r))&&(n=!0))}return n}const mv=new WeakMap;function Dh(e,t,r=!1){const n=r?mv:t.propsCache,a=n.get(e);if(a)return a;const i=e.props,s={},l=[];let u=!1;if(!ze(e)){const f=h=>{u=!0;const[g,_]=Dh(h,t,!0);gt(s,g),_&&l.push(..._)};!r&&t.mixins.length&&t.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}if(!i&&!u)return je(e)&&n.set(e,ti),ti;if(Ie(i))for(let f=0;f<i.length;f++){const h=vr(i[f]);Xu(h)&&(s[h]=He)}else if(i)for(const f in i){const h=vr(f);if(Xu(h)){const g=i[f],_=s[h]=Ie(g)||ze(g)?{type:g}:gt({},g),b=_.type;let w=!1,S=!0;if(Ie(b))for(let $=0;$<b.length;++$){const v=b[$],C=ze(v)&&v.name;if(C==="Boolean"){w=!0;break}else C==="String"&&(S=!1)}else w=ze(b)&&b.name==="Boolean";_[0]=w,_[1]=S,(w||Ue(_,"default"))&&l.push(h)}}const c=[s,l];return je(e)&&n.set(e,c),c}function Xu(e){return e[0]!=="$"&&!Ai(e)}const Nh=e=>e[0]==="_"||e==="$stable",co=e=>Ie(e)?e.map(Qt):[Qt(e)],gv=(e,t,r)=>{if(t._n)return t;const n=Vw((...a)=>co(t(...a)),r);return n._c=!1,n},Ph=(e,t,r)=>{const n=e._ctx;for(const a in e){if(Nh(a))continue;const i=e[a];if(ze(i))t[a]=gv(a,i,n);else if(i!=null){const s=co(i);t[a]=()=>s}}},Uh=(e,t)=>{const r=co(t);e.slots.default=()=>r},Wh=(e,t,r)=>{for(const n in t)(r||n!=="_")&&(e[n]=t[n])},yv=(e,t,r)=>{const n=e.slots=Rh();if(e.vnode.shapeFlag&32){const a=t._;a?(Wh(n,t,r),r&&eh(n,"_",a,!0)):Ph(t,n)}else t&&Uh(e,t)},_v=(e,t,r)=>{const{vnode:n,slots:a}=e;let i=!0,s=He;if(n.shapeFlag&32){const l=t._;l?r&&l===1?i=!1:Wh(a,t,r):(i=!t.$stable,Ph(t,a)),s=t}else t&&(Uh(e,t),s={default:1});if(i)for(const l in a)!Nh(l)&&s[l]==null&&delete a[l]},vt=Ov;function bv(e){return wv(e)}function wv(e,t){const r=Hn();r.__VUE__=!0;const{insert:n,remove:a,patchProp:i,createElement:s,createText:l,createComment:u,setText:c,setElementText:f,parentNode:h,nextSibling:g,setScopeId:_=Xt,insertStaticContent:b}=e,w=(E,z,P,j=null,G=null,F=null,te=void 0,J=null,Y=!!z.dynamicChildren)=>{if(E===z)return;E&&!mi(E,z)&&(j=it(E),V(E,G,F,!0),E=null),z.patchFlag===-2&&(Y=!1,z.dynamicChildren=null);const{type:Z,ref:me,shapeFlag:ie}=z;switch(Z){case Xn:S(E,z,P,j);break;case Ur:$(E,z,P,j);break;case Ta:E==null&&v(z,P,j,te);break;case Kt:ge(E,z,P,j,G,F,te,J,Y);break;default:ie&1?k(E,z,P,j,G,F,te,J,Y):ie&6?se(E,z,P,j,G,F,te,J,Y):(ie&64||ie&128)&&Z.process(E,z,P,j,G,F,te,J,Y,Ve)}me!=null&&G&&An(me,E&&E.ref,F,z||E,!z)},S=(E,z,P,j)=>{if(E==null)n(z.el=l(z.children),P,j);else{const G=z.el=E.el;z.children!==E.children&&c(G,z.children)}},$=(E,z,P,j)=>{E==null?n(z.el=u(z.children||""),P,j):z.el=E.el},v=(E,z,P,j)=>{[E.el,E.anchor]=b(E.children,z,P,j,E.el,E.anchor)},C=({el:E,anchor:z},P,j)=>{let G;for(;E&&E!==z;)G=g(E),n(E,P,j),E=G;n(z,P,j)},T=({el:E,anchor:z})=>{let P;for(;E&&E!==z;)P=g(E),a(E),E=P;a(z)},k=(E,z,P,j,G,F,te,J,Y)=>{z.type==="svg"?te="svg":z.type==="math"&&(te="mathml"),E==null?A(z,P,j,G,F,te,J,Y):q(E,z,G,F,te,J,Y)},A=(E,z,P,j,G,F,te,J)=>{let Y,Z;const{props:me,shapeFlag:ie,transition:pe,dirs:we}=E;if(Y=E.el=s(E.type,F,me&&me.is,me),ie&8?f(Y,E.children):ie&16&&B(E.children,Y,null,j,G,xa(E,F),te,J),we&&kr(E,null,j,"created"),O(Y,E,E.scopeId,te,j),me){for(const ye in me)ye!=="value"&&!Ai(ye)&&i(Y,ye,null,me[ye],F,j);"value"in me&&i(Y,"value",null,me.value,F),(Z=me.onVnodeBeforeMount)&&Ft(Z,j,E)}we&&kr(E,null,j,"beforeMount");const ke=vv(G,pe);ke&&pe.beforeEnter(Y),n(Y,z,P),((Z=me&&me.onVnodeMounted)||ke||we)&&vt(()=>{Z&&Ft(Z,j,E),ke&&pe.enter(Y),we&&kr(E,null,j,"mounted")},G)},O=(E,z,P,j,G)=>{if(P&&_(E,P),j)for(let F=0;F<j.length;F++)_(E,j[F]);if(G){let F=G.subTree;if(z===F||Gh(F.type)&&(F.ssContent===z||F.ssFallback===z)){const te=G.vnode;O(E,te,te.scopeId,te.slotScopeIds,G.parent)}}},B=(E,z,P,j,G,F,te,J,Y=0)=>{for(let Z=Y;Z<E.length;Z++){const me=E[Z]=J?yr(E[Z]):Qt(E[Z]);w(null,me,z,P,j,G,F,te,J)}},q=(E,z,P,j,G,F,te)=>{const J=z.el=E.el;let{patchFlag:Y,dynamicChildren:Z,dirs:me}=z;Y|=E.patchFlag&16;const ie=E.props||He,pe=z.props||He;let we;if(P&&Ir(P,!1),(we=pe.onVnodeBeforeUpdate)&&Ft(we,P,z,E),me&&kr(z,E,P,"beforeUpdate"),P&&Ir(P,!0),(ie.innerHTML&&pe.innerHTML==null||ie.textContent&&pe.textContent==null)&&f(J,""),Z?X(E.dynamicChildren,Z,J,P,j,xa(z,G),F):te||ue(E,z,J,null,P,j,xa(z,G),F,!1),Y>0){if(Y&16)ce(J,ie,pe,P,G);else if(Y&2&&ie.class!==pe.class&&i(J,"class",null,pe.class,G),Y&4&&i(J,"style",ie.style,pe.style,G),Y&8){const ke=z.dynamicProps;for(let ye=0;ye<ke.length;ye++){const Me=ke[ye],at=ie[Me],tt=pe[Me];(tt!==at||Me==="value")&&i(J,Me,at,tt,G,P)}}Y&1&&E.children!==z.children&&f(J,z.children)}else!te&&Z==null&&ce(J,ie,pe,P,G);((we=pe.onVnodeUpdated)||me)&&vt(()=>{we&&Ft(we,P,z,E),me&&kr(z,E,P,"updated")},j)},X=(E,z,P,j,G,F,te)=>{for(let J=0;J<z.length;J++){const Y=E[J],Z=z[J],me=Y.el&&(Y.type===Kt||!mi(Y,Z)||Y.shapeFlag&70)?h(Y.el):P;w(Y,Z,me,null,j,G,F,te,!0)}},ce=(E,z,P,j,G)=>{if(z!==P){if(z!==He)for(const F in z)!Ai(F)&&!(F in P)&&i(E,F,z[F],null,G,j);for(const F in P){if(Ai(F))continue;const te=P[F],J=z[F];te!==J&&F!=="value"&&i(E,F,J,te,G,j)}"value"in P&&i(E,"value",z.value,P.value,G)}},ge=(E,z,P,j,G,F,te,J,Y)=>{const Z=z.el=E?E.el:l(""),me=z.anchor=E?E.anchor:l("");let{patchFlag:ie,dynamicChildren:pe,slotScopeIds:we}=z;we&&(J=J?J.concat(we):we),E==null?(n(Z,P,j),n(me,P,j),B(z.children||[],P,me,G,F,te,J,Y)):ie>0&&ie&64&&pe&&E.dynamicChildren?(X(E.dynamicChildren,pe,P,G,F,te,J),(z.key!=null||G&&z===G.subTree)&&Lh(E,z,!0)):ue(E,z,P,me,G,F,te,J,Y)},se=(E,z,P,j,G,F,te,J,Y)=>{z.slotScopeIds=J,E==null?z.shapeFlag&512?G.ctx.activate(z,P,j,te,Y):he(z,P,j,G,F,te,Y):fe(E,z,Y)},he=(E,z,P,j,G,F,te)=>{const J=E.component=Vv(E,j,G);if(Ch(E)&&(J.ctx.renderer=Ve),qv(J,!1,te),J.asyncDep){if(G&&G.registerDep(J,Q,te),!E.el){const Y=J.subTree=Jt(Ur);$(null,Y,z,P)}}else Q(J,E,z,P,G,F,te)},fe=(E,z,P)=>{const j=z.component=E.component;if(zv(E,z,P))if(j.asyncDep&&!j.asyncResolved){le(j,z,P);return}else j.next=z,j.update();else z.el=E.el,j.vnode=z},Q=(E,z,P,j,G,F,te)=>{const J=()=>{if(E.isMounted){let{next:ie,bu:pe,u:we,parent:ke,vnode:ye}=E;{const st=Vh(E);if(st){ie&&(ie.el=ye.el,le(E,ie,te)),st.asyncDep.then(()=>{E.isUnmounted||J()});return}}let Me=ie,at;Ir(E,!1),ie?(ie.el=ye.el,le(E,ie,te)):ie=ye,pe&&ya(pe),(at=ie.props&&ie.props.onVnodeBeforeUpdate)&&Ft(at,ke,ie,ye),Ir(E,!0);const tt=Yu(E),Xe=E.subTree;E.subTree=tt,w(Xe,tt,h(Xe.el),it(Xe),E,G,F),ie.el=tt.el,Me===null&&Av(E,tt.el),we&&vt(we,G),(at=ie.props&&ie.props.onVnodeUpdated)&&vt(()=>Ft(at,ke,ie,ye),G)}else{let ie;const{el:pe,props:we}=z,{bm:ke,m:ye,parent:Me,root:at,type:tt}=E,Xe=Mi(z);Ir(E,!1),ke&&ya(ke),!Xe&&(ie=we&&we.onVnodeBeforeMount)&&Ft(ie,Me,z),Ir(E,!0);{at.ce&&at.ce._injectChildStyle(tt);const st=E.subTree=Yu(E);w(null,st,P,j,E,G,F),z.el=st.el}if(ye&&vt(ye,G),!Xe&&(ie=we&&we.onVnodeMounted)){const st=z;vt(()=>Ft(ie,Me,st),G)}(z.shapeFlag&256||Me&&Mi(Me.vnode)&&Me.vnode.shapeFlag&256)&&E.a&&vt(E.a,G),E.isMounted=!0,z=P=j=null}};E.scope.on();const Y=E.effect=new nh(J);E.scope.off();const Z=E.update=Y.run.bind(Y),me=E.job=Y.runIfDirty.bind(Y);me.i=E,me.id=E.uid,Y.scheduler=()=>oo(me),Ir(E,!0),Z()},le=(E,z,P)=>{z.component=E;const j=E.vnode.props;E.vnode=z,E.next=null,hv(E,z.props,j,P),_v(E,z.children,P),Sr(),Gu(E),Tr()},ue=(E,z,P,j,G,F,te,J,Y=!1)=>{const Z=E&&E.children,me=E?E.shapeFlag:0,ie=z.children,{patchFlag:pe,shapeFlag:we}=z;if(pe>0){if(pe&128){Ae(Z,ie,P,j,G,F,te,J,Y);return}else if(pe&256){ee(Z,ie,P,j,G,F,te,J,Y);return}}we&8?(me&16&&Ee(Z,G,F),ie!==Z&&f(P,ie)):me&16?we&16?Ae(Z,ie,P,j,G,F,te,J,Y):Ee(Z,G,F,!0):(me&8&&f(P,""),we&16&&B(ie,P,j,G,F,te,J,Y))},ee=(E,z,P,j,G,F,te,J,Y)=>{E=E||ti,z=z||ti;const Z=E.length,me=z.length,ie=Math.min(Z,me);let pe;for(pe=0;pe<ie;pe++){const we=z[pe]=Y?yr(z[pe]):Qt(z[pe]);w(E[pe],we,P,null,G,F,te,J,Y)}Z>me?Ee(E,G,F,!0,!1,ie):B(z,P,j,G,F,te,J,Y,ie)},Ae=(E,z,P,j,G,F,te,J,Y)=>{let Z=0;const me=z.length;let ie=E.length-1,pe=me-1;for(;Z<=ie&&Z<=pe;){const we=E[Z],ke=z[Z]=Y?yr(z[Z]):Qt(z[Z]);if(mi(we,ke))w(we,ke,P,null,G,F,te,J,Y);else break;Z++}for(;Z<=ie&&Z<=pe;){const we=E[ie],ke=z[pe]=Y?yr(z[pe]):Qt(z[pe]);if(mi(we,ke))w(we,ke,P,null,G,F,te,J,Y);else break;ie--,pe--}if(Z>ie){if(Z<=pe){const we=pe+1,ke=we<me?z[we].el:j;for(;Z<=pe;)w(null,z[Z]=Y?yr(z[Z]):Qt(z[Z]),P,ke,G,F,te,J,Y),Z++}}else if(Z>pe)for(;Z<=ie;)V(E[Z],G,F,!0),Z++;else{const we=Z,ke=Z,ye=new Map;for(Z=ke;Z<=pe;Z++){const ot=z[Z]=Y?yr(z[Z]):Qt(z[Z]);ot.key!=null&&ye.set(ot.key,Z)}let Me,at=0;const tt=pe-ke+1;let Xe=!1,st=0;const ur=new Array(tt);for(Z=0;Z<tt;Z++)ur[Z]=0;for(Z=we;Z<=ie;Z++){const ot=E[Z];if(at>=tt){V(ot,G,F,!0);continue}let _t;if(ot.key!=null)_t=ye.get(ot.key);else for(Me=ke;Me<=pe;Me++)if(ur[Me-ke]===0&&mi(ot,z[Me])){_t=Me;break}_t===void 0?V(ot,G,F,!0):(ur[_t-ke]=Z+1,_t>=st?st=_t:Xe=!0,w(ot,z[_t],P,null,G,F,te,J,Y),at++)}const Wt=Xe?$v(ur):ti;for(Me=Wt.length-1,Z=tt-1;Z>=0;Z--){const ot=ke+Z,_t=z[ot],ui=ot+1<me?z[ot+1].el:j;ur[Z]===0?w(null,_t,P,ui,G,F,te,J,Y):Xe&&(Me<0||Z!==Wt[Me]?N(_t,P,ui,2):Me--)}}},N=(E,z,P,j,G=null)=>{const{el:F,type:te,transition:J,children:Y,shapeFlag:Z}=E;if(Z&6){N(E.component.subTree,z,P,j);return}if(Z&128){E.suspense.move(z,P,j);return}if(Z&64){te.move(E,z,P,Ve);return}if(te===Kt){n(F,z,P);for(let ie=0;ie<Y.length;ie++)N(Y[ie],z,P,j);n(E.anchor,z,P);return}if(te===Ta){C(E,z,P);return}if(j!==2&&Z&1&&J)if(j===0)J.beforeEnter(F),n(F,z,P),vt(()=>J.enter(F),G);else{const{leave:ie,delayLeave:pe,afterLeave:we}=J,ke=()=>n(F,z,P),ye=()=>{ie(F,()=>{ke(),we&&we()})};pe?pe(F,ke,ye):ye()}else n(F,z,P)},V=(E,z,P,j=!1,G=!1)=>{const{type:F,props:te,ref:J,children:Y,dynamicChildren:Z,shapeFlag:me,patchFlag:ie,dirs:pe,cacheIndex:we}=E;if(ie===-2&&(G=!1),J!=null&&An(J,null,P,E,!0),we!=null&&(z.renderCache[we]=void 0),me&256){z.ctx.deactivate(E);return}const ke=me&1&&pe,ye=!Mi(E);let Me;if(ye&&(Me=te&&te.onVnodeBeforeUnmount)&&Ft(Me,z,E),me&6)W(E.component,P,j);else{if(me&128){E.suspense.unmount(P,j);return}ke&&kr(E,null,z,"beforeUnmount"),me&64?E.type.remove(E,z,P,Ve,j):Z&&!Z.hasOnce&&(F!==Kt||ie>0&&ie&64)?Ee(Z,z,P,!1,!0):(F===Kt&&ie&384||!G&&me&16)&&Ee(Y,z,P),j&&Ce(E)}(ye&&(Me=te&&te.onVnodeUnmounted)||ke)&&vt(()=>{Me&&Ft(Me,z,E),ke&&kr(E,null,z,"unmounted")},P)},Ce=E=>{const{type:z,el:P,anchor:j,transition:G}=E;if(z===Kt){We(P,j);return}if(z===Ta){T(E);return}const F=()=>{a(P),G&&!G.persisted&&G.afterLeave&&G.afterLeave()};if(E.shapeFlag&1&&G&&!G.persisted){const{leave:te,delayLeave:J}=G,Y=()=>te(P,F);J?J(E.el,F,Y):Y()}else F()},We=(E,z)=>{let P;for(;E!==z;)P=g(E),a(E),E=P;a(z)},W=(E,z,P)=>{const{bum:j,scope:G,job:F,subTree:te,um:J,m:Y,a:Z}=E;Ju(Y),Ju(Z),j&&ya(j),G.stop(),F&&(F.flags|=8,V(te,E,z,P)),J&&vt(J,z),vt(()=>{E.isUnmounted=!0},z),z&&z.pendingBranch&&!z.isUnmounted&&E.asyncDep&&!E.asyncResolved&&E.suspenseId===z.pendingId&&(z.deps--,z.deps===0&&z.resolve())},Ee=(E,z,P,j=!1,G=!1,F=0)=>{for(let te=F;te<E.length;te++)V(E[te],z,P,j,G)},it=E=>{if(E.shapeFlag&6)return it(E.component.subTree);if(E.shapeFlag&128)return E.suspense.next();const z=g(E.anchor||E.el),P=z&&z[qw];return P?g(P):z};let et=!1;const Ut=(E,z,P)=>{E==null?z._vnode&&V(z._vnode,null,null,!0):w(z._vnode||null,E,z,null,null,null,P),z._vnode=E,et||(et=!0,Gu(),$h(),et=!1)},Ve={p:w,um:V,m:N,r:Ce,mt:he,mc:B,pc:ue,pbc:X,n:it,o:e};return{render:Ut,hydrate:void 0,createApp:cv(Ut)}}function xa({type:e,props:t},r){return r==="svg"&&e==="foreignObject"||r==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:r}function Ir({effect:e,job:t},r){r?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function vv(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Lh(e,t,r=!1){const n=e.children,a=t.children;if(Ie(n)&&Ie(a))for(let i=0;i<n.length;i++){const s=n[i];let l=a[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=a[i]=yr(a[i]),l.el=s.el),!r&&l.patchFlag!==-2&&Lh(s,l)),l.type===Xn&&(l.el=s.el)}}function $v(e){const t=e.slice(),r=[0];let n,a,i,s,l;const u=e.length;for(n=0;n<u;n++){const c=e[n];if(c!==0){if(a=r[r.length-1],e[a]<c){t[n]=a,r.push(n);continue}for(i=0,s=r.length-1;i<s;)l=i+s>>1,e[r[l]]<c?i=l+1:s=l;c<e[r[i]]&&(i>0&&(t[n]=r[i-1]),r[i]=n)}}for(i=r.length,s=r[i-1];i-- >0;)r[i]=s,s=t[s];return r}function Vh(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Vh(t)}function Ju(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const xv=Symbol.for("v-scx"),Sv=()=>xn(xv);function Sa(e,t,r){return qh(e,t,r)}function qh(e,t,r=He){const{immediate:n,deep:a,flush:i,once:s}=r,l=gt({},r),u=t&&n||!t&&i!=="post";let c;if(Vi){if(i==="sync"){const _=Sv();c=_.__watcherHandles||(_.__watcherHandles=[])}else if(!u){const _=()=>{};return _.stop=Xt,_.resume=Xt,_.pause=Xt,_}}const f=mt;l.call=(_,b,w)=>Yt(_,f,b,w);let h=!1;i==="post"?l.scheduler=_=>{vt(_,f&&f.suspense)}:i!=="sync"&&(h=!0,l.scheduler=(_,b)=>{b?_():oo(_)}),l.augmentJob=_=>{t&&(_.flags|=4),h&&(_.flags|=2,f&&(_.id=f.uid,_.i=f))};const g=Nw(e,t,l);return Vi&&(c?c.push(g):u&&g()),g}function Tv(e,t,r){const n=this.proxy,a=Ze(e)?e.includes(".")?Fh(n,e):()=>n[e]:e.bind(n,n);let i;ze(t)?i=t:(i=t.handler,r=t);const s=Hi(this),l=qh(a,i.bind(n),r);return s(),l}function Fh(e,t){const r=t.split(".");return()=>{let n=e;for(let a=0;a<r.length&&n;a++)n=n[r[a]];return n}}const Cv=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${vr(t)}Modifiers`]||e[`${qr(t)}Modifiers`];function kv(e,t,...r){if(e.isUnmounted)return;const n=e.vnode.props||He;let a=r;const i=t.startsWith("update:"),s=i&&Cv(n,t.slice(7));s&&(s.trim&&(a=r.map(f=>Ze(f)?f.trim():f)),s.number&&(a=r.map(tw)));let l,u=n[l=ga(t)]||n[l=ga(vr(t))];!u&&i&&(u=n[l=ga(qr(t))]),u&&Yt(u,e,6,a);const c=n[l+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,Yt(c,e,6,a)}}function Hh(e,t,r=!1){const n=t.emitsCache,a=n.get(e);if(a!==void 0)return a;const i=e.emits;let s={},l=!1;if(!ze(e)){const u=c=>{const f=Hh(c,t,!0);f&&(l=!0,gt(s,f))};!r&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}return!i&&!l?(je(e)&&n.set(e,null),null):(Ie(i)?i.forEach(u=>s[u]=null):gt(s,i),je(e)&&n.set(e,s),s)}function Zn(e,t){return!e||!Vn(t)?!1:(t=t.slice(2).replace(/Once$/,""),Ue(e,t[0].toLowerCase()+t.slice(1))||Ue(e,qr(t))||Ue(e,t))}function Yu(e){const{type:t,vnode:r,proxy:n,withProxy:a,propsOptions:[i],slots:s,attrs:l,emit:u,render:c,renderCache:f,props:h,data:g,setupState:_,ctx:b,inheritAttrs:w}=e,S=zn(e);let $,v;try{if(r.shapeFlag&4){const T=a||n,k=T;$=Qt(c.call(k,T,f,h,_,g,b)),v=l}else{const T=t;$=Qt(T.length>1?T(h,{attrs:l,slots:s,emit:u}):T(h,null)),v=t.props?l:Iv(l)}}catch(T){Di.length=0,Kn(T,e,1),$=Jt(Ur)}let C=$;if(v&&w!==!1){const T=Object.keys(v),{shapeFlag:k}=C;T.length&&k&7&&(i&&T.some(Qs)&&(v=Ev(v,i)),C=si(C,v,!1,!0))}return r.dirs&&(C=si(C,null,!1,!0),C.dirs=C.dirs?C.dirs.concat(r.dirs):r.dirs),r.transition&&lo(C,r.transition),$=C,zn(S),$}const Iv=e=>{let t;for(const r in e)(r==="class"||r==="style"||Vn(r))&&((t||(t={}))[r]=e[r]);return t},Ev=(e,t)=>{const r={};for(const n in e)(!Qs(n)||!(n.slice(9)in t))&&(r[n]=e[n]);return r};function zv(e,t,r){const{props:n,children:a,component:i}=e,{props:s,children:l,patchFlag:u}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(r&&u>=0){if(u&1024)return!0;if(u&16)return n?ed(n,s,c):!!s;if(u&8){const f=t.dynamicProps;for(let h=0;h<f.length;h++){const g=f[h];if(s[g]!==n[g]&&!Zn(c,g))return!0}}}else return(a||l)&&(!l||!l.$stable)?!0:n===s?!1:n?s?ed(n,s,c):!0:!!s;return!1}function ed(e,t,r){const n=Object.keys(t);if(n.length!==Object.keys(e).length)return!0;for(let a=0;a<n.length;a++){const i=n[a];if(t[i]!==e[i]&&!Zn(r,i))return!0}return!1}function Av({vnode:e,parent:t},r){for(;t;){const n=t.subTree;if(n.suspense&&n.suspense.activeBranch===e&&(n.el=e.el),n===e)(e=t.vnode).el=r,t=t.parent;else break}}const Gh=e=>e.__isSuspense;function Ov(e,t){t&&t.pendingBranch?Ie(e)?t.effects.push(...e):t.effects.push(e):Lw(e)}const Kt=Symbol.for("v-fgt"),Xn=Symbol.for("v-txt"),Ur=Symbol.for("v-cmt"),Ta=Symbol.for("v-stc"),Di=[];let St=null;function Jr(e=!1){Di.push(St=e?null:[])}function Rv(){Di.pop(),St=Di[Di.length-1]||null}let Li=1;function td(e,t=!1){Li+=e,e<0&&St&&t&&(St.hasOnce=!0)}function jh(e){return e.dynamicChildren=Li>0?St||ti:null,Rv(),Li>0&&St&&St.push(e),e}function Ci(e,t,r,n,a,i){return jh(br(e,t,r,n,a,i,!0))}function Mv(e,t,r,n,a){return jh(Jt(e,t,r,n,a,!0))}function Kh(e){return e?e.__v_isVNode===!0:!1}function mi(e,t){return e.type===t.type&&e.key===t.key}const Qh=({key:e})=>e??null,Sn=({ref:e,ref_key:t,ref_for:r})=>(typeof e=="number"&&(e=""+e),e!=null?Ze(e)||ct(e)||ze(e)?{i:Zt,r:e,k:t,f:!!r}:e:null);function br(e,t=null,r=null,n=0,a=null,i=e===Kt?0:1,s=!1,l=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Qh(t),ref:t&&Sn(t),scopeId:Sh,slotScopeIds:null,children:r,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:n,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:Zt};return l?(po(u,r),i&128&&e.normalize(u)):r&&(u.shapeFlag|=Ze(r)?8:16),Li>0&&!s&&St&&(u.patchFlag>0||i&6)&&u.patchFlag!==32&&St.push(u),u}const Jt=Bv;function Bv(e,t=null,r=null,n=0,a=null,i=!1){if((!e||e===rv)&&(e=Ur),Kh(e)){const l=si(e,t,!0);return r&&po(l,r),Li>0&&!i&&St&&(l.shapeFlag&6?St[St.indexOf(e)]=l:St.push(l)),l.patchFlag=-2,l}if(jv(e)&&(e=e.__vccOpts),t){t=Dv(t);let{class:l,style:u}=t;l&&!Ze(l)&&(t.class=Js(l)),je(u)&&(so(u)&&!Ie(u)&&(u=gt({},u)),t.style=Gn(u))}const s=Ze(e)?1:Gh(e)?128:Fw(e)?64:je(e)?4:ze(e)?2:0;return br(e,t,r,n,a,s,i,!0)}function Dv(e){return e?so(e)||Mh(e)?gt({},e):e:null}function si(e,t,r=!1,n=!1){const{props:a,ref:i,patchFlag:s,children:l,transition:u}=e,c=t?Uv(a||{},t):a,f={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&Qh(c),ref:t&&t.ref?r&&i?Ie(i)?i.concat(Sn(t)):[i,Sn(t)]:Sn(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Kt?s===-1?16:s|16:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:u,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&si(e.ssContent),ssFallback:e.ssFallback&&si(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return u&&n&&lo(f,u.clone(f)),f}function Nv(e=" ",t=0){return Jt(Xn,null,e,t)}function Pv(e="",t=!1){return t?(Jr(),Mv(Ur,null,e)):Jt(Ur,null,e)}function Qt(e){return e==null||typeof e=="boolean"?Jt(Ur):Ie(e)?Jt(Kt,null,e.slice()):Kh(e)?yr(e):Jt(Xn,null,String(e))}function yr(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:si(e)}function po(e,t){let r=0;const{shapeFlag:n}=e;if(t==null)t=null;else if(Ie(t))r=16;else if(typeof t=="object")if(n&65){const a=t.default;a&&(a._c&&(a._d=!1),po(e,a()),a._c&&(a._d=!0));return}else{r=32;const a=t._;!a&&!Mh(t)?t._ctx=Zt:a===3&&Zt&&(Zt.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else ze(t)?(t={default:t,_ctx:Zt},r=32):(t=String(t),n&64?(r=16,t=[Nv(t)]):r=8);e.children=t,e.shapeFlag|=r}function Uv(...e){const t={};for(let r=0;r<e.length;r++){const n=e[r];for(const a in n)if(a==="class")t.class!==n.class&&(t.class=Js([t.class,n.class]));else if(a==="style")t.style=Gn([t.style,n.style]);else if(Vn(a)){const i=t[a],s=n[a];s&&i!==s&&!(Ie(i)&&i.includes(s))&&(t[a]=i?[].concat(i,s):s)}else a!==""&&(t[a]=n[a])}return t}function Ft(e,t,r,n=null){Yt(e,t,7,[r,n])}const Wv=Ah();let Lv=0;function Vv(e,t,r){const n=e.type,a=(t?t.appContext:e.appContext)||Wv,i={uid:Lv++,vnode:e,type:n,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new lw(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Dh(n,a),emitsOptions:Hh(n,a),emit:null,emitted:null,propsDefaults:He,inheritAttrs:n.inheritAttrs,ctx:He,data:He,props:He,attrs:He,slots:He,refs:He,setupState:He,setupContext:null,suspense:r,suspenseId:r?r.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=kv.bind(null,i),e.ce&&e.ce(i),i}let mt=null,Rn,Os;{const e=Hn(),t=(r,n)=>{let a;return(a=e[r])||(a=e[r]=[]),a.push(n),i=>{a.length>1?a.forEach(s=>s(i)):a[0](i)}};Rn=t("__VUE_INSTANCE_SETTERS__",r=>mt=r),Os=t("__VUE_SSR_SETTERS__",r=>Vi=r)}const Hi=e=>{const t=mt;return Rn(e),e.scope.on(),()=>{e.scope.off(),Rn(t)}},rd=()=>{mt&&mt.scope.off(),Rn(null)};function Zh(e){return e.vnode.shapeFlag&4}let Vi=!1;function qv(e,t=!1,r=!1){t&&Os(t);const{props:n,children:a}=e.vnode,i=Zh(e);fv(e,n,i,t),yv(e,a,r);const s=i?Fv(e,t):void 0;return t&&Os(!1),s}function Fv(e,t){const r=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,nv);const{setup:n}=r;if(n){Sr();const a=e.setupContext=n.length>1?Gv(e):null,i=Hi(e),s=Fi(n,e,0,[e.props,a]),l=Zf(s);if(Tr(),i(),(l||e.sp)&&!Mi(e)&&Th(e),l){if(s.then(rd,rd),t)return s.then(u=>{id(e,u)}).catch(u=>{Kn(u,e,0)});e.asyncDep=s}else id(e,s)}else Xh(e)}function id(e,t,r){ze(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:je(t)&&(e.setupState=bh(t)),Xh(e)}function Xh(e,t,r){const n=e.type;e.render||(e.render=n.render||Xt);{const a=Hi(e);Sr();try{av(e)}finally{Tr(),a()}}}const Hv={get(e,t){return ut(e,"get",""),e[t]}};function Gv(e){const t=r=>{e.exposed=r||{}};return{attrs:new Proxy(e.attrs,Hv),slots:e.slots,emit:e.emit,expose:t}}function fo(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(bh(Ew(e.exposed)),{get(t,r){if(r in t)return t[r];if(r in Bi)return Bi[r](e)},has(t,r){return r in t||r in Bi}})):e.proxy}function jv(e){return ze(e)&&"__vccOpts"in e}const Kv=(e,t)=>Bw(e,t,Vi),Qv="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Rs;const nd=typeof window<"u"&&window.trustedTypes;if(nd)try{Rs=nd.createPolicy("vue",{createHTML:e=>e})}catch{}const Jh=Rs?e=>Rs.createHTML(e):e=>e,Zv="http://www.w3.org/2000/svg",Xv="http://www.w3.org/1998/Math/MathML",ar=typeof document<"u"?document:null,ad=ar&&ar.createElement("template"),Jv={insert:(e,t,r)=>{t.insertBefore(e,r||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,r,n)=>{const a=t==="svg"?ar.createElementNS(Zv,e):t==="mathml"?ar.createElementNS(Xv,e):r?ar.createElement(e,{is:r}):ar.createElement(e);return e==="select"&&n&&n.multiple!=null&&a.setAttribute("multiple",n.multiple),a},createText:e=>ar.createTextNode(e),createComment:e=>ar.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ar.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,r,n,a,i){const s=r?r.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),r),!(a===i||!(a=a.nextSibling)););else{ad.innerHTML=Jh(n==="svg"?`<svg>${e}</svg>`:n==="mathml"?`<math>${e}</math>`:e);const l=ad.content;if(n==="svg"||n==="mathml"){const u=l.firstChild;for(;u.firstChild;)l.appendChild(u.firstChild);l.removeChild(u)}t.insertBefore(l,r)}return[s?s.nextSibling:t.firstChild,r?r.previousSibling:t.lastChild]}},Yv=Symbol("_vtc");function e$(e,t,r){const n=e[Yv];n&&(t=(t?[t,...n]:[...n]).join(" ")),t==null?e.removeAttribute("class"):r?e.setAttribute("class",t):e.className=t}const sd=Symbol("_vod"),t$=Symbol("_vsh"),r$=Symbol(""),i$=/(^|;)\s*display\s*:/;function n$(e,t,r){const n=e.style,a=Ze(r);let i=!1;if(r&&!a){if(t)if(Ze(t))for(const s of t.split(";")){const l=s.slice(0,s.indexOf(":")).trim();r[l]==null&&Tn(n,l,"")}else for(const s in t)r[s]==null&&Tn(n,s,"");for(const s in r)s==="display"&&(i=!0),Tn(n,s,r[s])}else if(a){if(t!==r){const s=n[r$];s&&(r+=";"+s),n.cssText=r,i=i$.test(r)}}else t&&e.removeAttribute("style");sd in e&&(e[sd]=i?n.display:"",e[t$]&&(n.display="none"))}const od=/\s*!important$/;function Tn(e,t,r){if(Ie(r))r.forEach(n=>Tn(e,t,n));else if(r==null&&(r=""),t.startsWith("--"))e.setProperty(t,r);else{const n=a$(e,t);od.test(r)?e.setProperty(qr(n),r.replace(od,""),"important"):e[n]=r}}const ld=["Webkit","Moz","ms"],Ca={};function a$(e,t){const r=Ca[t];if(r)return r;let n=vr(t);if(n!=="filter"&&n in e)return Ca[t]=n;n=Yf(n);for(let a=0;a<ld.length;a++){const i=ld[a]+n;if(i in e)return Ca[t]=i}return t}const ud="http://www.w3.org/1999/xlink";function dd(e,t,r,n,a,i=ow(t)){n&&t.startsWith("xlink:")?r==null?e.removeAttributeNS(ud,t.slice(6,t.length)):e.setAttributeNS(ud,t,r):r==null||i&&!th(r)?e.removeAttribute(t):e.setAttribute(t,i?"":xr(r)?String(r):r)}function cd(e,t,r,n,a){if(t==="innerHTML"||t==="textContent"){r!=null&&(e[t]=t==="innerHTML"?Jh(r):r);return}const i=e.tagName;if(t==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?e.getAttribute("value")||"":e.value,u=r==null?e.type==="checkbox"?"on":"":String(r);(l!==u||!("_value"in e))&&(e.value=u),r==null&&e.removeAttribute(t),e._value=r;return}let s=!1;if(r===""||r==null){const l=typeof e[t];l==="boolean"?r=th(r):r==null&&l==="string"?(r="",s=!0):l==="number"&&(r=0,s=!0)}try{e[t]=r}catch{}s&&e.removeAttribute(a||t)}function s$(e,t,r,n){e.addEventListener(t,r,n)}function o$(e,t,r,n){e.removeEventListener(t,r,n)}const pd=Symbol("_vei");function l$(e,t,r,n,a=null){const i=e[pd]||(e[pd]={}),s=i[t];if(n&&s)s.value=n;else{const[l,u]=u$(t);if(n){const c=i[t]=p$(n,a);s$(e,l,c,u)}else s&&(o$(e,l,s,u),i[t]=void 0)}}const fd=/(?:Once|Passive|Capture)$/;function u$(e){let t;if(fd.test(e)){t={};let n;for(;n=e.match(fd);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):qr(e.slice(2)),t]}let ka=0;const d$=Promise.resolve(),c$=()=>ka||(d$.then(()=>ka=0),ka=Date.now());function p$(e,t){const r=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=r.attached)return;Yt(f$(n,r.value),t,5,[n])};return r.value=e,r.attached=c$(),r}function f$(e,t){if(Ie(t)){const r=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{r.call(e),e._stopped=!0},t.map(n=>a=>!a._stopped&&n&&n(a))}else return t}const hd=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,h$=(e,t,r,n,a,i)=>{const s=a==="svg";t==="class"?e$(e,n,s):t==="style"?n$(e,r,n):Vn(t)?Qs(t)||l$(e,t,r,n,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):m$(e,t,n,s))?(cd(e,t,n),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&dd(e,t,n,s,i,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!Ze(n))?cd(e,vr(t),n,i,t):(t==="true-value"?e._trueValue=n:t==="false-value"&&(e._falseValue=n),dd(e,t,n,s))};function m$(e,t,r,n){if(n)return!!(t==="innerHTML"||t==="textContent"||t in e&&hd(t)&&ze(r));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const a=e.tagName;if(a==="IMG"||a==="VIDEO"||a==="CANVAS"||a==="SOURCE")return!1}return hd(t)&&Ze(r)?!1:t in e}const g$=gt({patchProp:h$},Jv);let md;function y$(){return md||(md=bv(g$))}const _$=(...e)=>{const t=y$().createApp(...e),{mount:r}=t;return t.mount=n=>{const a=w$(n);if(!a)return;const i=t._component;!ze(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.nodeType===1&&(a.textContent="");const s=r(a,!1,b$(a));return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),s},t};function b$(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function w$(e){return Ze(e)?document.querySelector(e):e}const Yh=(e,t)=>{const r=e.__vccOpts||e;for(const[n,a]of t)r[n]=a;return r},v$={class:"canvas-container"},$$={__name:"Canvas",emits:["update:imageData","clear-prediction"],setup(e,{emit:t}){const r=jt(null),n=jt(!1),a=jt(0),i=jt(0),s=jt(null),l=jt(new Array(28*28).fill(0)),u=t;uo(()=>{r.value&&(s.value=r.value.getContext("2d"),s.value.fillStyle="black",s.value.fillRect(0,0,28,28),w())});const c=$=>{n.value=!0,[a.value,i.value]=g($),b(a.value,i.value),S()},f=$=>{if(!n.value)return;const[v,C]=g($);_(a.value,i.value,v,C),a.value=v,i.value=C,S()},h=()=>{n.value=!1},g=$=>{const v=r.value.getBoundingClientRect(),C=Math.floor(($.clientX-v.left)/(v.width/28)),T=Math.floor(($.clientY-v.top)/(v.height/28)),k=Math.max(0,Math.min(C,27)),A=Math.max(0,Math.min(T,27));return[k,A]},_=($,v,C,T)=>{s.value.beginPath(),s.value.moveTo($+.5,v+.5),s.value.lineTo(C+.5,T+.5),s.value.strokeStyle="white",s.value.lineWidth=2,s.value.lineCap="round",s.value.stroke(),b($,v),b(C,T)},b=($,v)=>{const C=v*28+$;l.value[C]=1,s.value.fillStyle="white",s.value.fillRect($,v,1,1)},w=()=>{s.value.fillStyle="black",s.value.fillRect(0,0,28,28),l.value=new Array(28*28).fill(0),u("update:imageData",l.value),u("clear-prediction")},S=()=>{const $=s.value.getImageData(0,0,28,28),v=[];for(let C=0;C<$.data.length;C+=4){const T=($.data[C]+$.data[C+1]+$.data[C+2])/3;v.push(T/255)}l.value=v,u("update:imageData",l.value)};return($,v)=>(Jr(),Ci("div",v$,[br("canvas",{ref_key:"canvasRef",ref:r,width:"28",height:"28",onMousedown:c,onMousemove:f,onMouseup:h,onMouseleave:h,"aria-label":"Drawing Canvas"},null,544),br("button",{onClick:w,class:"clear-button"},"Clear")]))}},x$=Yh($$,[["__scopeId","data-v-a44cced1"]]);/*!
 * ONNX Runtime Web v1.21.0
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */var ho=Object.defineProperty,S$=Object.getOwnPropertyDescriptor,T$=Object.getOwnPropertyNames,C$=Object.prototype.hasOwnProperty,k$=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof require<"u"?require:t)[r]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),K=(e,t)=>()=>(e&&(t=e(e=0)),t),Gi=(e,t)=>{for(var r in t)ho(e,r,{get:t[r],enumerable:!0})},I$=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of T$(t))!C$.call(e,a)&&a!==r&&ho(e,a,{get:()=>t[a],enumerable:!(n=S$(t,a))||n.enumerable});return e},Mn=e=>I$(ho({},"__esModule",{value:!0}),e),gi,fr,Yr,gd,em,tm=K(()=>{gi=new Map,fr=[],Yr=(e,t,r)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let n=gi.get(e);if(n===void 0)gi.set(e,{backend:t,priority:r});else{if(n.priority>r)return;if(n.priority===r&&n.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${r}`)}if(r>=0){let a=fr.indexOf(e);a!==-1&&fr.splice(a,1);for(let i=0;i<fr.length;i++)if(gi.get(fr[i]).priority<=r){fr.splice(i,0,e);return}fr.push(e)}return}throw new TypeError("not a valid backend")},gd=async e=>{let t=gi.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let r=!!t.initPromise;try{return r||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(n){return r||(t.error=`${n}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},em=async e=>{let t=e.executionProviders||[],r=t.map(u=>typeof u=="string"?u:u.name),n=r.length===0?fr:r,a,i=[],s=new Set;for(let u of n){let c=await gd(u);typeof c=="string"?i.push({name:u,err:c}):(a||(a=c),a===c&&s.add(u))}if(!a)throw new Error(`no available backend found. ERR: ${i.map(u=>`[${u.name}] ${u.err}`).join(", ")}`);for(let{name:u,err:c}of i)r.includes(u)&&console.warn(`removing requested execution provider "${u}" from session options because it is not available: ${c}`);let l=t.filter(u=>s.has(typeof u=="string"?u:u.name));return[a,new Proxy(e,{get:(u,c)=>c==="executionProviders"?l:Reflect.get(u,c)})]}}),E$=K(()=>{tm()}),rm,z$=K(()=>{rm="1.21.0"}),Ia,It,im=K(()=>{z$(),Ia="warning",It={wasm:{},webgl:{},webgpu:{},versions:{common:rm},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);Ia=e}},get logLevel(){return Ia}},Object.defineProperty(It,"logLevel",{enumerable:!0})}),Fe,A$=K(()=>{im(),Fe=It}),nm,am,O$=K(()=>{nm=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);r.width=e.dims[3],r.height=e.dims[2];let n=r.getContext("2d");if(n!=null){let a,i;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(a=e.dims[2],i=e.dims[3]):(a=e.dims[3],i=e.dims[2]);let s=(t==null?void 0:t.format)!==void 0?t.format:"RGB",l=t==null?void 0:t.norm,u,c;l===void 0||l.mean===void 0?u=[255,255,255,255]:typeof l.mean=="number"?u=[l.mean,l.mean,l.mean,l.mean]:(u=[l.mean[0],l.mean[1],l.mean[2],0],l.mean[3]!==void 0&&(u[3]=l.mean[3])),l===void 0||l.bias===void 0?c=[0,0,0,0]:typeof l.bias=="number"?c=[l.bias,l.bias,l.bias,l.bias]:(c=[l.bias[0],l.bias[1],l.bias[2],0],l.bias[3]!==void 0&&(c[3]=l.bias[3]));let f=i*a,h=0,g=f,_=f*2,b=-1;s==="RGBA"?(h=0,g=f,_=f*2,b=f*3):s==="RGB"?(h=0,g=f,_=f*2):s==="RBG"&&(h=0,_=f,g=f*2);for(let w=0;w<i;w++)for(let S=0;S<a;S++){let $=(e.data[h++]-c[0])*u[0],v=(e.data[g++]-c[1])*u[1],C=(e.data[_++]-c[2])*u[2],T=b===-1?255:(e.data[b++]-c[3])*u[3];n.fillStyle="rgba("+$+","+v+","+C+","+T+")",n.fillRect(S,w,1,1)}if("toDataURL"in r)return r.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},am=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),n;if(r!=null){let a,i,s;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(a=e.dims[2],i=e.dims[1],s=e.dims[3]):(a=e.dims[3],i=e.dims[2],s=e.dims[1]);let l=t!==void 0&&t.format!==void 0?t.format:"RGB",u=t==null?void 0:t.norm,c,f;u===void 0||u.mean===void 0?c=[255,255,255,255]:typeof u.mean=="number"?c=[u.mean,u.mean,u.mean,u.mean]:(c=[u.mean[0],u.mean[1],u.mean[2],255],u.mean[3]!==void 0&&(c[3]=u.mean[3])),u===void 0||u.bias===void 0?f=[0,0,0,0]:typeof u.bias=="number"?f=[u.bias,u.bias,u.bias,u.bias]:(f=[u.bias[0],u.bias[1],u.bias[2],0],u.bias[3]!==void 0&&(f[3]=u.bias[3]));let h=i*a;if(t!==void 0&&(t.format!==void 0&&s===4&&t.format!=="RGBA"||s===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let g=4,_=0,b=1,w=2,S=3,$=0,v=h,C=h*2,T=-1;l==="RGBA"?($=0,v=h,C=h*2,T=h*3):l==="RGB"?($=0,v=h,C=h*2):l==="RBG"&&($=0,C=h,v=h*2),n=r.createImageData(a,i);for(let k=0;k<i*a;_+=g,b+=g,w+=g,S+=g,k++)n.data[_]=(e.data[$++]-f[0])*c[0],n.data[b]=(e.data[v++]-f[1])*c[1],n.data[w]=(e.data[C++]-f[2])*c[2],n.data[S]=T===-1?255:(e.data[T++]-f[3])*c[3]}else throw new Error("Can not access image data");return n}}),ln,sm,om,lm,um,dm,R$=K(()=>{mo(),ln=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:r,width:n}=t,a=t.norm??{mean:255,bias:0},i,s;typeof a.mean=="number"?i=[a.mean,a.mean,a.mean,a.mean]:i=[a.mean[0],a.mean[1],a.mean[2],a.mean[3]??255],typeof a.bias=="number"?s=[a.bias,a.bias,a.bias,a.bias]:s=[a.bias[0],a.bias[1],a.bias[2],a.bias[3]??0];let l=t.format!==void 0?t.format:"RGBA",u=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",c=r*n,f=u==="RGBA"?new Float32Array(c*4):new Float32Array(c*3),h=4,g=0,_=1,b=2,w=3,S=0,$=c,v=c*2,C=-1;l==="RGB"&&(h=3,g=0,_=1,b=2,w=-1),u==="RGBA"?C=c*3:u==="RBG"?(S=0,v=c,$=c*2):u==="BGR"&&(v=0,$=c,S=c*2);for(let T=0;T<c;T++,g+=h,b+=h,_+=h,w+=h)f[S++]=(e[g]+s[0])/i[0],f[$++]=(e[_]+s[1])/i[1],f[v++]=(e[b]+s[2])/i[2],C!==-1&&w!==-1&&(f[C++]=(e[w]+s[3])/i[3]);return u==="RGBA"?new xt("float32",f,[1,4,r,n]):new xt("float32",f,[1,3,r,n])},sm=async(e,t)=>{let r=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,n=typeof ImageData<"u"&&e instanceof ImageData,a=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,i=typeof e=="string",s,l=t??{},u=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},c=f=>typeof HTMLCanvasElement<"u"&&f instanceof HTMLCanvasElement||f instanceof OffscreenCanvas?f.getContext("2d"):null;if(r){let f=u();f.width=e.width,f.height=e.height;let h=c(f);if(h!=null){let g=e.height,_=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(g=t.resizedHeight,_=t.resizedWidth),t!==void 0){if(l=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");l.tensorFormat="RGBA",l.height=g,l.width=_}else l.tensorFormat="RGBA",l.height=g,l.width=_;h.drawImage(e,0,0),s=h.getImageData(0,0,_,g).data}else throw new Error("Can not access image data")}else if(n){let f,h;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(f=t.resizedHeight,h=t.resizedWidth):(f=e.height,h=e.width),t!==void 0&&(l=t),l.format="RGBA",l.height=f,l.width=h,t!==void 0){let g=u();g.width=h,g.height=f;let _=c(g);if(_!=null)_.putImageData(e,0,0),s=_.getImageData(0,0,h,f).data;else throw new Error("Can not access image data")}else s=e.data}else if(a){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let f=u();f.width=e.width,f.height=e.height;let h=c(f);if(h!=null){let g=e.height,_=e.width;return h.drawImage(e,0,0,_,g),s=h.getImageData(0,0,_,g).data,l.height=g,l.width=_,ln(s,l)}else throw new Error("Can not access image data")}else{if(i)return new Promise((f,h)=>{let g=u(),_=c(g);if(!e||!_)return h();let b=new Image;b.crossOrigin="Anonymous",b.src=e,b.onload=()=>{g.width=b.width,g.height=b.height,_.drawImage(b,0,0,g.width,g.height);let w=_.getImageData(0,0,g.width,g.height);l.height=g.height,l.width=g.width,f(ln(w.data,l))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(s!==void 0)return ln(s,l);throw new Error("Input data provided is not supported - aborted tensor creation")},om=(e,t)=>{let{width:r,height:n,download:a,dispose:i}=t,s=[1,n,r,4];return new xt({location:"texture",type:"float32",texture:e,dims:s,download:a,dispose:i})},lm=(e,t)=>{let{dataType:r,dims:n,download:a,dispose:i}=t;return new xt({location:"gpu-buffer",type:r??"float32",gpuBuffer:e,dims:n,download:a,dispose:i})},um=(e,t)=>{let{dataType:r,dims:n,download:a,dispose:i}=t;return new xt({location:"ml-tensor",type:r??"float32",mlTensor:e,dims:n,download:a,dispose:i})},dm=(e,t,r)=>new xt({location:"cpu-pinned",type:e,data:t,dims:r??[t.length]})}),Mr,ki,Ea,cm,M$=K(()=>{Mr=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),ki=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),Ea=!1,cm=()=>{if(!Ea){Ea=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,r=globalThis.Float16Array,n=typeof r<"u"&&r.from;e&&(Mr.set("int64",BigInt64Array),ki.set(BigInt64Array,"int64")),t&&(Mr.set("uint64",BigUint64Array),ki.set(BigUint64Array,"uint64")),n?(Mr.set("float16",r),ki.set(r,"float16")):Mr.set("float16",Uint16Array)}}}),pm,fm,B$=K(()=>{mo(),pm=e=>{let t=1;for(let r=0;r<e.length;r++){let n=e[r];if(typeof n!="number"||!Number.isSafeInteger(n))throw new TypeError(`dims[${r}] must be an integer, got: ${n}`);if(n<0)throw new RangeError(`dims[${r}] must be a non-negative integer, got: ${n}`);t*=n}return t},fm=(e,t)=>{switch(e.location){case"cpu":return new xt(e.type,e.data,t);case"cpu-pinned":return new xt({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new xt({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new xt({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new xt({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),xt,mo=K(()=>{O$(),R$(),M$(),B$(),xt=class{constructor(e,t,r){cm();let n,a;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,n=e.type,a=e.dims,e.location){case"cpu-pinned":{let s=Mr.get(n);if(!s)throw new TypeError(`unsupported type "${n}" to create tensor from pinned buffer`);if(!(e.data instanceof s))throw new TypeError(`buffer should be of type ${s.name}`);this.cpuData=e.data;break}case"texture":{if(n!=="float32")throw new TypeError(`unsupported type "${n}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(n!=="float32"&&n!=="float16"&&n!=="int32"&&n!=="int64"&&n!=="uint32"&&n!=="uint8"&&n!=="bool"&&n!=="uint4"&&n!=="int4")throw new TypeError(`unsupported type "${n}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(n!=="float32"&&n!=="float16"&&n!=="int32"&&n!=="int64"&&n!=="uint32"&&n!=="uint64"&&n!=="int8"&&n!=="uint8"&&n!=="bool"&&n!=="uint4"&&n!=="int4")throw new TypeError(`unsupported type "${n}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let s,l;if(typeof e=="string")if(n=e,l=r,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");s=t}else{let u=Mr.get(e);if(u===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&u===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${u.name} as data.`);e==="uint64"||e==="int64"?s=u.from(t,BigInt):s=u.from(t)}else if(t instanceof u)s=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")s=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&t instanceof Uint16Array&&u!==Uint16Array)s=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw new TypeError(`A ${n} tensor's data must be type of ${u}`)}else if(l=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let u=typeof e[0];if(u==="string")n="string",s=e;else if(u==="boolean")n="bool",s=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${u}.`)}else if(e instanceof Uint8ClampedArray)n="uint8",s=Uint8Array.from(e);else{let u=ki.get(e.constructor);if(u===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);n=u,s=e}if(l===void 0)l=[s.length];else if(!Array.isArray(l))throw new TypeError("A tensor's dims must be a number array");a=l,this.cpuData=s,this.dataLocation="cpu"}let i=pm(a);if(this.cpuData&&i!==this.cpuData.length&&!((n==="uint4"||n==="int4")&&Math.ceil(i/2)===this.cpuData.length))throw new Error(`Tensor's size(${i}) does not match data length(${this.cpuData.length}).`);this.type=n,this.dims=a,this.size=i}static async fromImage(e,t){return sm(e,t)}static fromTexture(e,t){return om(e,t)}static fromGpuBuffer(e,t){return lm(e,t)}static fromMLTensor(e,t){return um(e,t)}static fromPinnedBuffer(e,t,r){return dm(e,t,r)}toDataURL(e){return nm(this,e)}toImageData(e){return am(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return fm(this,e)}}}),Bt,hm=K(()=>{mo(),Bt=xt}),Bn,za,er,Nt,mm=K(()=>{im(),Bn=(e,t)=>{(typeof It.trace>"u"?!It.wasm.trace:!It.trace)||console.timeStamp(`${e}::ORT::${t}`)},za=(e,t)=>{var a;let r=((a=new Error().stack)==null?void 0:a.split(/\r\n|\r|\n/g))||[],n=!1;for(let i=0;i<r.length;i++){if(n&&!r[i].includes("TRACE_FUNC")){let s=`FUNC_${e}::${r[i].trim().split(" ")[1]}`;t&&(s+=`::${t}`),Bn("CPU",s);return}r[i].includes("TRACE_FUNC")&&(n=!0)}},er=e=>{(typeof It.trace>"u"?!It.wasm.trace:!It.trace)||za("BEGIN",e)},Nt=e=>{(typeof It.trace>"u"?!It.wasm.trace:!It.trace)||za("END",e)}}),gm,D$=K(()=>{tm(),hm(),mm(),gm=class ym{constructor(t){this.handler=t}async run(t,r,n){er();let a={},i={};if(typeof t!="object"||t===null||t instanceof Bt||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let s=!0;if(typeof r=="object"){if(r===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(r instanceof Bt)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(r)){if(r.length===0)throw new TypeError("'fetches' cannot be an empty array.");s=!1;for(let c of r){if(typeof c!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(c)===-1)throw new RangeError(`'fetches' contains invalid output name: ${c}.`);a[c]=null}if(typeof n=="object"&&n!==null)i=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else{let c=!1,f=Object.getOwnPropertyNames(r);for(let h of this.outputNames)if(f.indexOf(h)!==-1){let g=r[h];(g===null||g instanceof Bt)&&(c=!0,s=!1,a[h]=g)}if(c){if(typeof n=="object"&&n!==null)i=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else i=r}}else if(typeof r<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let c of this.inputNames)if(typeof t[c]>"u")throw new Error(`input '${c}' is missing in 'feeds'.`);if(s)for(let c of this.outputNames)a[c]=null;let l=await this.handler.run(t,a,i),u={};for(let c in l)if(Object.hasOwnProperty.call(l,c)){let f=l[c];f instanceof Bt?u[c]=f:u[c]=new Bt(f.type,f.data,f.dims)}return Nt(),u}async release(){return this.handler.dispose()}static async create(t,r,n,a){er();let i,s={};if(typeof t=="string"){if(i=t,typeof r=="object"&&r!==null)s=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(i=t,typeof r=="object"&&r!==null)s=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let f=t,h=0,g=t.byteLength;if(typeof r=="object"&&r!==null)s=r;else if(typeof r=="number"){if(h=r,!Number.isSafeInteger(h))throw new RangeError("'byteOffset' must be an integer.");if(h<0||h>=f.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${f.byteLength}).`);if(g=t.byteLength-h,typeof n=="number"){if(g=n,!Number.isSafeInteger(g))throw new RangeError("'byteLength' must be an integer.");if(g<=0||h+g>f.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${f.byteLength-h}].`);if(typeof a=="object"&&a!==null)s=a;else if(typeof a<"u")throw new TypeError("'options' must be an object.")}else if(typeof n<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof r<"u")throw new TypeError("'options' must be an object.");i=new Uint8Array(f,h,g)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[l,u]=await em(s),c=await l.createInferenceSessionHandler(i,u);return Nt(),new ym(c)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}}}),go,N$=K(()=>{D$(),go=gm}),P$=K(()=>{}),U$=K(()=>{}),W$=K(()=>{}),L$=K(()=>{}),V$={};Gi(V$,{InferenceSession:()=>go,TRACE:()=>Bn,TRACE_FUNC_BEGIN:()=>er,TRACE_FUNC_END:()=>Nt,Tensor:()=>Bt,env:()=>Fe,registerBackend:()=>Yr});var Pt=K(()=>{E$(),A$(),N$(),hm(),P$(),U$(),mm(),W$(),L$()}),yo=K(()=>{}),_m={};Gi(_m,{default:()=>bm});var Aa,Oa,bm,q$=K(()=>{var e;$_(),Fr(),_o(),Aa="ort-wasm-proxy-worker",Oa=((e=globalThis.self)==null?void 0:e.name)===Aa,Oa&&(self.onmessage=t=>{let{type:r,in:n}=t.data;try{switch(r){case"init-wasm":bo(n.wasm).then(()=>{No(n).then(()=>{postMessage({type:r})},a=>{postMessage({type:r,err:a})})},a=>{postMessage({type:r,err:a})});break;case"init-ep":{let{epName:a,env:i}=n;Po(i,a).then(()=>{postMessage({type:r})},s=>{postMessage({type:r,err:s})});break}case"copy-from":{let{buffer:a}=n,i=Ln(a);postMessage({type:r,out:i});break}case"create":{let{model:a,options:i}=n;Uo(a,i).then(s=>{postMessage({type:r,out:s})},s=>{postMessage({type:r,err:s})});break}case"release":Wo(n),postMessage({type:r});break;case"run":{let{sessionId:a,inputIndices:i,inputs:s,outputIndices:l,options:u}=n;Lo(a,i,s,l,new Array(l.length).fill(null),u).then(c=>{c.some(f=>f[3]!=="cpu")?postMessage({type:r,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:r,out:c},qo([...s,...c]))},c=>{postMessage({type:r,err:c})});break}case"end-profiling":Vo(n),postMessage({type:r});break;default:}}catch(a){postMessage({type:r,err:a})}}),bm=Oa?null:t=>new Worker(t??wt,{type:"module",name:Aa})}),wm={};Gi(wm,{default:()=>vm});var Ra,Ma,vm,yd,F$=K(()=>{var e,t;Ma=(Ra=import.meta.url,async function(r={}){var Lu;var n,a,i=r,s=new Promise((o,d)=>{n=o,a=d}),l=typeof window=="object",u=typeof WorkerGlobalScope<"u",c=u&&((Lu=self.name)==null?void 0:Lu.startsWith("em-pthread"));i.mountExternalData=(o,d)=>{o.startsWith("./")&&(o=o.substring(2)),(i.Bd||(i.Bd=new Map)).set(o,d)},i.unmountExternalData=()=>{delete i.Bd};var f=globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let h=()=>{let o=(p,m,y)=>(...x)=>{let I=Vt,R=m==null?void 0:m();x=p(...x);let D=m==null?void 0:m();return R!==D&&(p=D,y(R),m=y=null),Vt!=I?new Promise((H,re)=>{la={resolve:H,reject:re}}):x},d=p=>async(...m)=>{var y;try{if(i.Cd)throw Error("Session already started");let x=i.Cd={be:m[0],errors:[]},I=await p(...m);if(i.Cd!==x)throw Error("Session mismatch");(y=i.Dd)==null||y.flush();let R=x.errors;if(0<R.length){let D=await Promise.all(R);if(D=D.filter(H=>H),0<D.length)throw Error(D.join(`
`))}return I}finally{i.Cd=null}};i._OrtCreateSession=o(i._OrtCreateSession,()=>i._OrtCreateSession,p=>i._OrtCreateSession=p),i._OrtRun=d(o(i._OrtRun,()=>i._OrtRun,p=>i._OrtRun=p)),i._OrtRunWithBinding=d(o(i._OrtRunWithBinding,()=>i._OrtRunWithBinding,p=>i._OrtRunWithBinding=p)),i._OrtBindInput=o(i._OrtBindInput,()=>i._OrtBindInput,p=>i._OrtBindInput=p),h=void 0};i.jsepInit=(o,d)=>{if(h==null||h(),o==="webgpu"){[i.Dd,i.Rd,i.Vd,i.Hd,i.Ud,i.hc,i.Wd,i.Zd,i.Sd,i.Td,i.Xd]=d;let p=i.Dd;i.jsepRegisterBuffer=(m,y,x,I)=>p.registerBuffer(m,y,x,I),i.jsepGetBuffer=m=>p.getBuffer(m),i.jsepCreateDownloader=(m,y,x)=>p.createDownloader(m,y,x),i.jsepOnCreateSession=m=>{p.onCreateSession(m)},i.jsepOnReleaseSession=m=>{p.onReleaseSession(m)},i.jsepOnRunStart=m=>p.onRunStart(m),i.$d=(m,y)=>{p.upload(m,y)}}else if(o==="webnn"){[i.Dd,i.Yd,i.Id,i.jsepEnsureTensor,i.Jd,i.jsepDownloadTensor]=d,i.jsepReleaseTensorId=i.Id,i.jsepUploadTensor=i.Jd;let p=i.Dd;i.jsepOnRunStart=m=>p.onRunStart(m),i.jsepOnRunEnd=p.onRunEnd.bind(p),i.jsepRegisterMLContext=(m,y)=>{p.registerMLContext(m,y)},i.jsepOnReleaseSession=m=>{p.onReleaseSession(m)},i.jsepCreateMLTensorDownloader=(m,y)=>p.createMLTensorDownloader(m,y),i.jsepRegisterMLTensor=(m,y,x,I)=>p.registerMLTensor(m,y,x,I),i.jsepCreateMLContext=m=>p.createMLContext(m),i.jsepRegisterMLConstant=(m,y,x,I,R)=>p.registerMLConstant(m,y,x,I,R,i.Bd),i.jsepRegisterGraphInput=p.registerGraphInput.bind(p),i.jsepIsGraphInput=p.isGraphInput.bind(p),i.jsepCreateTemporaryTensor=p.createTemporaryTensor.bind(p)}};var g,_,b=Object.assign({},i),w=(o,d)=>{throw d},S="";(l||u)&&(u?S=self.location.href:typeof document<"u"&&document.currentScript&&(S=document.currentScript.src),Ra&&(S=Ra),S=S.startsWith("blob:")?"":S.slice(0,S.replace(/[?#].*/,"").lastIndexOf("/")+1),u&&(_=o=>{var d=new XMLHttpRequest;return d.open("GET",o,!1),d.responseType="arraybuffer",d.send(null),new Uint8Array(d.response)}),g=async o=>{if(Ae(o))return new Promise((p,m)=>{var y=new XMLHttpRequest;y.open("GET",o,!0),y.responseType="arraybuffer",y.onload=()=>{y.status==200||y.status==0&&y.response?p(y.response):m(y.status)},y.onerror=m,y.send(null)});var d=await fetch(o,{credentials:"same-origin"});if(d.ok)return d.arrayBuffer();throw Error(d.status+" : "+d.url)});var $=console.log.bind(console),v=console.error.bind(console),C=$,T=v;Object.assign(i,b),b=null;var k,A,O,B,q,X,ce,ge,se,he,fe,Q,le,ue=i.wasmBinary,ee=!1,Ae=o=>o.startsWith("file://");function N(){return k.buffer!=B.buffer&&De(),B}function V(){return k.buffer!=B.buffer&&De(),q}function Ce(){return k.buffer!=B.buffer&&De(),X}function We(){return k.buffer!=B.buffer&&De(),ce}function W(){return k.buffer!=B.buffer&&De(),ge}function Ee(){return k.buffer!=B.buffer&&De(),se}function it(){return k.buffer!=B.buffer&&De(),he}function et(){return k.buffer!=B.buffer&&De(),le}if(c){let o=function(d){try{var p=d.data,m=p.yd;if(m==="load"){let y=[];self.onmessage=x=>y.push(x),self.startWorker=()=>{postMessage({yd:"loaded"});for(let x of y)o(x);self.onmessage=o};for(let x of p.Od)i[x]&&!i[x].proxy||(i[x]=(...I)=>{postMessage({yd:"callHandler",Nd:x,args:I})},x=="print"&&(C=i[x]),x=="printErr"&&(T=i[x]));k=p.he,De(),Ut(p.ie)}else if(m==="run"){M_(p.xd),pa(p.xd,0,0,1,0,0),_t(),sa(p.xd),Ve||(Dl(),Ve=!0);try{B_(p.de,p.Fd)}catch(y){if(y!="unwind")throw y}}else p.target!=="setimmediate"&&(m==="checkMailbox"?Ve&&Ki():m&&(T(`worker: received unknown command ${m}`),T(p)))}catch(y){throw Nl(),y}};var Ut,Ve=!1;T=function(...d){d=d.join(" "),console.error(d)},self.alert=function(...d){postMessage({yd:"alert",text:d.join(" "),fe:rn()})},self.onunhandledrejection=d=>{throw d.reason||d},self.onmessage=o}function De(){var o=k.buffer;i.HEAP8=B=new Int8Array(o),i.HEAP16=X=new Int16Array(o),i.HEAPU8=q=new Uint8Array(o),i.HEAPU16=ce=new Uint16Array(o),i.HEAP32=ge=new Int32Array(o),i.HEAPU32=se=new Uint32Array(o),i.HEAPF32=he=new Float32Array(o),i.HEAPF64=le=new Float64Array(o),i.HEAP64=fe=new BigInt64Array(o),i.HEAPU64=Q=new BigUint64Array(o)}function E(){c?startWorker(i):L.Bb()}c||(k=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),De());var z,P=0,j=null;function G(){if(--P==0&&j){var o=j;j=null,o()}}function F(o){throw T(o="Aborted("+o+")"),ee=!0,o=new WebAssembly.RuntimeError(o+". Build with -sASSERTIONS for more info."),a(o),o}function te(){return{a:{Ta:Z,Va:Y,W:D_,la:N_,b:U_,u:W_,R:L_,Za:V_,d:q_,pb:Go,g:P_,T:Qo,Ga:Zo,lb:Jo,nb:Yo,Ha:el,Ea:tl,wb:rl,Da:il,pa:nl,mb:al,jb:sl,Fa:ol,kb:ll,Ma:F_,za:H_,eb:G_,cb:K_,ya:Z_,V:X_,N:J_,db:Y_,ma:s0,fb:o0,zb:l0,hb:u0,qb:d0,ab:c0,Aa:p0,yb:sa,Ja:f0,S:h0,Wa:m0,$:_0,G:b0,E:v0,m:ia,H:$0,B:T0,X:C0,J:k0,v:I0,O:E0,D:z0,t:A0,A:O0,z:R0,w:M0,r:B0,tb:D0,ub:N0,vb:P0,rb:$l,sb:xl,bb:Sl,Oa:W0,La:V0,y:q0,ja:F0,Ba:H0,Ka:L0,qa:G0,Ia:j0,ib:K0,U:U0,fa:Q0,Sa:Z0,gb:X0,Qa:J0,Pa:Y0,Ab:Il,Ca:El,ob:tt,aa:zl,oa:Al,xb:Ol,na:Rl,$a:Cb,ia:Ub,sa:Fb,ga:Sb,da:Ob,ua:Vb,p:$b,e:sb,c:nb,ea:zb,f:ob,n:ub,k:_b,Y:cb,ka:bb,j:xb,wa:Eb,Ra:jb,ca:Nb,Ua:Gb,P:Ab,K:fb,_:Db,Q:Tb,Z:Wb,x:pb,l:ab,va:Bb,i:ib,h:db,ra:Hb,ta:qb,o:lb,q:hb,s:gb,I:yb,C:vb,L:wb,xa:Ib,_a:kb,F:Pb,Ya:Rb,ba:Lb,M:mb,Xa:Mb,ha:tb,a:k,Na:Me}}}var J={1319426:()=>typeof wasmOffsetConverter<"u",1319483:(o,d,p,m,y)=>{if(i===void 0||!i.Bd)return 1;if((o=Qe(Number(o>>>0))).startsWith("./")&&(o=o.substring(2)),!(o=i.Bd.get(o)))return 2;if(d=Number(d>>>0),p=Number(p>>>0),m=Number(m>>>0),d+p>o.byteLength)return 3;try{let x=o.subarray(d,d+p);switch(y){case 0:V().set(x,m>>>0);break;case 1:i.$d(m,x);break;default:return 4}return 0}catch{return 4}},1320198:(o,d,p)=>{i.Jd(o,V().subarray(d>>>0,d+p>>>0))},1320261:()=>i.Yd(),1320302:o=>{i.Id(o)},1320338:()=>{i.Sd()},1320369:()=>{i.Td()},1320398:()=>{i.Xd()},1320423:o=>i.Rd(o),1320456:o=>i.Vd(o),1320488:(o,d,p)=>{i.Hd(Number(o),Number(d),Number(p),!0)},1320551:(o,d,p)=>{i.Hd(Number(o),Number(d),Number(p))},1320608:o=>{i.hc("Abs",o,void 0)},1320659:o=>{i.hc("Neg",o,void 0)},1320710:o=>{i.hc("Floor",o,void 0)},1320763:o=>{i.hc("Ceil",o,void 0)},1320815:o=>{i.hc("Reciprocal",o,void 0)},1320873:o=>{i.hc("Sqrt",o,void 0)},1320925:o=>{i.hc("Exp",o,void 0)},1320976:o=>{i.hc("Erf",o,void 0)},1321027:o=>{i.hc("Sigmoid",o,void 0)},1321082:(o,d,p)=>{i.hc("HardSigmoid",o,{alpha:d,beta:p})},1321161:o=>{i.hc("Log",o,void 0)},1321212:o=>{i.hc("Sin",o,void 0)},1321263:o=>{i.hc("Cos",o,void 0)},1321314:o=>{i.hc("Tan",o,void 0)},1321365:o=>{i.hc("Asin",o,void 0)},1321417:o=>{i.hc("Acos",o,void 0)},1321469:o=>{i.hc("Atan",o,void 0)},1321521:o=>{i.hc("Sinh",o,void 0)},1321573:o=>{i.hc("Cosh",o,void 0)},1321625:o=>{i.hc("Asinh",o,void 0)},1321678:o=>{i.hc("Acosh",o,void 0)},1321731:o=>{i.hc("Atanh",o,void 0)},1321784:o=>{i.hc("Tanh",o,void 0)},1321836:o=>{i.hc("Not",o,void 0)},1321887:(o,d,p)=>{i.hc("Clip",o,{min:d,max:p})},1321956:o=>{i.hc("Clip",o,void 0)},1322008:(o,d)=>{i.hc("Elu",o,{alpha:d})},1322066:o=>{i.hc("Gelu",o,void 0)},1322118:o=>{i.hc("Relu",o,void 0)},1322170:(o,d)=>{i.hc("LeakyRelu",o,{alpha:d})},1322234:(o,d)=>{i.hc("ThresholdedRelu",o,{alpha:d})},1322304:(o,d)=>{i.hc("Cast",o,{to:d})},1322362:o=>{i.hc("Add",o,void 0)},1322413:o=>{i.hc("Sub",o,void 0)},1322464:o=>{i.hc("Mul",o,void 0)},1322515:o=>{i.hc("Div",o,void 0)},1322566:o=>{i.hc("Pow",o,void 0)},1322617:o=>{i.hc("Equal",o,void 0)},1322670:o=>{i.hc("Greater",o,void 0)},1322725:o=>{i.hc("GreaterOrEqual",o,void 0)},1322787:o=>{i.hc("Less",o,void 0)},1322839:o=>{i.hc("LessOrEqual",o,void 0)},1322898:(o,d,p,m,y)=>{i.hc("ReduceMean",o,{keepDims:!!d,noopWithEmptyAxes:!!p,axes:m?Array.from(W().subarray(Number(m)>>>0,Number(y)>>>0)):[]})},1323073:(o,d,p,m,y)=>{i.hc("ReduceMax",o,{keepDims:!!d,noopWithEmptyAxes:!!p,axes:m?Array.from(W().subarray(Number(m)>>>0,Number(y)>>>0)):[]})},1323247:(o,d,p,m,y)=>{i.hc("ReduceMin",o,{keepDims:!!d,noopWithEmptyAxes:!!p,axes:m?Array.from(W().subarray(Number(m)>>>0,Number(y)>>>0)):[]})},1323421:(o,d,p,m,y)=>{i.hc("ReduceProd",o,{keepDims:!!d,noopWithEmptyAxes:!!p,axes:m?Array.from(W().subarray(Number(m)>>>0,Number(y)>>>0)):[]})},1323596:(o,d,p,m,y)=>{i.hc("ReduceSum",o,{keepDims:!!d,noopWithEmptyAxes:!!p,axes:m?Array.from(W().subarray(Number(m)>>>0,Number(y)>>>0)):[]})},1323770:(o,d,p,m,y)=>{i.hc("ReduceL1",o,{keepDims:!!d,noopWithEmptyAxes:!!p,axes:m?Array.from(W().subarray(Number(m)>>>0,Number(y)>>>0)):[]})},1323943:(o,d,p,m,y)=>{i.hc("ReduceL2",o,{keepDims:!!d,noopWithEmptyAxes:!!p,axes:m?Array.from(W().subarray(Number(m)>>>0,Number(y)>>>0)):[]})},1324116:(o,d,p,m,y)=>{i.hc("ReduceLogSum",o,{keepDims:!!d,noopWithEmptyAxes:!!p,axes:m?Array.from(W().subarray(Number(m)>>>0,Number(y)>>>0)):[]})},1324293:(o,d,p,m,y)=>{i.hc("ReduceSumSquare",o,{keepDims:!!d,noopWithEmptyAxes:!!p,axes:m?Array.from(W().subarray(Number(m)>>>0,Number(y)>>>0)):[]})},1324473:(o,d,p,m,y)=>{i.hc("ReduceLogSumExp",o,{keepDims:!!d,noopWithEmptyAxes:!!p,axes:m?Array.from(W().subarray(Number(m)>>>0,Number(y)>>>0)):[]})},1324653:o=>{i.hc("Where",o,void 0)},1324706:(o,d,p)=>{i.hc("Transpose",o,{perm:d?Array.from(W().subarray(Number(d)>>>0,Number(p)>>>0)):[]})},1324830:(o,d,p,m)=>{i.hc("DepthToSpace",o,{blocksize:d,mode:Qe(p),format:m?"NHWC":"NCHW"})},1324963:(o,d,p,m)=>{i.hc("DepthToSpace",o,{blocksize:d,mode:Qe(p),format:m?"NHWC":"NCHW"})},1325096:(o,d,p,m,y,x,I,R,D,H,re,de,xe,Le,kt)=>{i.hc("ConvTranspose",o,{format:D?"NHWC":"NCHW",autoPad:d,dilations:[p],group:m,kernelShape:[y],pads:[x,I],strides:[R],wIsConst:()=>!!N()[H>>>0],outputPadding:re?Array.from(W().subarray(Number(re)>>>0,Number(de)>>>0)):[],outputShape:xe?Array.from(W().subarray(Number(xe)>>>0,Number(Le)>>>0)):[],activation:Qe(kt)})},1325529:(o,d,p,m,y,x,I,R,D,H,re,de,xe,Le)=>{i.hc("ConvTranspose",o,{format:R?"NHWC":"NCHW",autoPad:d,dilations:Array.from(W().subarray(Number(p)>>>0,2+(Number(p)>>>0)>>>0)),group:m,kernelShape:Array.from(W().subarray(Number(y)>>>0,2+(Number(y)>>>0)>>>0)),pads:Array.from(W().subarray(Number(x)>>>0,4+(Number(x)>>>0)>>>0)),strides:Array.from(W().subarray(Number(I)>>>0,2+(Number(I)>>>0)>>>0)),wIsConst:()=>!!N()[D>>>0],outputPadding:H?Array.from(W().subarray(Number(H)>>>0,Number(re)>>>0)):[],outputShape:de?Array.from(W().subarray(Number(de)>>>0,Number(xe)>>>0)):[],activation:Qe(Le)})},1326190:(o,d,p,m,y,x,I,R,D,H,re,de,xe,Le,kt)=>{i.hc("ConvTranspose",o,{format:D?"NHWC":"NCHW",autoPad:d,dilations:[p],group:m,kernelShape:[y],pads:[x,I],strides:[R],wIsConst:()=>!!N()[H>>>0],outputPadding:re?Array.from(W().subarray(Number(re)>>>0,Number(de)>>>0)):[],outputShape:xe?Array.from(W().subarray(Number(xe)>>>0,Number(Le)>>>0)):[],activation:Qe(kt)})},1326623:(o,d,p,m,y,x,I,R,D,H,re,de,xe,Le)=>{i.hc("ConvTranspose",o,{format:R?"NHWC":"NCHW",autoPad:d,dilations:Array.from(W().subarray(Number(p)>>>0,2+(Number(p)>>>0)>>>0)),group:m,kernelShape:Array.from(W().subarray(Number(y)>>>0,2+(Number(y)>>>0)>>>0)),pads:Array.from(W().subarray(Number(x)>>>0,4+(Number(x)>>>0)>>>0)),strides:Array.from(W().subarray(Number(I)>>>0,2+(Number(I)>>>0)>>>0)),wIsConst:()=>!!N()[D>>>0],outputPadding:H?Array.from(W().subarray(Number(H)>>>0,Number(re)>>>0)):[],outputShape:de?Array.from(W().subarray(Number(de)>>>0,Number(xe)>>>0)):[],activation:Qe(Le)})},1327284:(o,d)=>{i.hc("GlobalAveragePool",o,{format:d?"NHWC":"NCHW"})},1327375:(o,d,p,m,y,x,I,R,D,H,re,de,xe,Le)=>{i.hc("AveragePool",o,{format:Le?"NHWC":"NCHW",auto_pad:d,ceil_mode:p,count_include_pad:m,storage_order:y,dilations:x?Array.from(W().subarray(Number(x)>>>0,Number(I)>>>0)):[],kernel_shape:R?Array.from(W().subarray(Number(R)>>>0,Number(D)>>>0)):[],pads:H?Array.from(W().subarray(Number(H)>>>0,Number(re)>>>0)):[],strides:de?Array.from(W().subarray(Number(de)>>>0,Number(xe)>>>0)):[]})},1327854:(o,d)=>{i.hc("GlobalAveragePool",o,{format:d?"NHWC":"NCHW"})},1327945:(o,d,p,m,y,x,I,R,D,H,re,de,xe,Le)=>{i.hc("AveragePool",o,{format:Le?"NHWC":"NCHW",auto_pad:d,ceil_mode:p,count_include_pad:m,storage_order:y,dilations:x?Array.from(W().subarray(Number(x)>>>0,Number(I)>>>0)):[],kernel_shape:R?Array.from(W().subarray(Number(R)>>>0,Number(D)>>>0)):[],pads:H?Array.from(W().subarray(Number(H)>>>0,Number(re)>>>0)):[],strides:de?Array.from(W().subarray(Number(de)>>>0,Number(xe)>>>0)):[]})},1328424:(o,d)=>{i.hc("GlobalMaxPool",o,{format:d?"NHWC":"NCHW"})},1328511:(o,d,p,m,y,x,I,R,D,H,re,de,xe,Le)=>{i.hc("MaxPool",o,{format:Le?"NHWC":"NCHW",auto_pad:d,ceil_mode:p,count_include_pad:m,storage_order:y,dilations:x?Array.from(W().subarray(Number(x)>>>0,Number(I)>>>0)):[],kernel_shape:R?Array.from(W().subarray(Number(R)>>>0,Number(D)>>>0)):[],pads:H?Array.from(W().subarray(Number(H)>>>0,Number(re)>>>0)):[],strides:de?Array.from(W().subarray(Number(de)>>>0,Number(xe)>>>0)):[]})},1328986:(o,d)=>{i.hc("GlobalMaxPool",o,{format:d?"NHWC":"NCHW"})},1329073:(o,d,p,m,y,x,I,R,D,H,re,de,xe,Le)=>{i.hc("MaxPool",o,{format:Le?"NHWC":"NCHW",auto_pad:d,ceil_mode:p,count_include_pad:m,storage_order:y,dilations:x?Array.from(W().subarray(Number(x)>>>0,Number(I)>>>0)):[],kernel_shape:R?Array.from(W().subarray(Number(R)>>>0,Number(D)>>>0)):[],pads:H?Array.from(W().subarray(Number(H)>>>0,Number(re)>>>0)):[],strides:de?Array.from(W().subarray(Number(de)>>>0,Number(xe)>>>0)):[]})},1329548:(o,d,p,m,y)=>{i.hc("Gemm",o,{alpha:d,beta:p,transA:m,transB:y})},1329652:o=>{i.hc("MatMul",o,void 0)},1329706:(o,d,p,m)=>{i.hc("ArgMax",o,{keepDims:!!d,selectLastIndex:!!p,axis:m})},1329814:(o,d,p,m)=>{i.hc("ArgMin",o,{keepDims:!!d,selectLastIndex:!!p,axis:m})},1329922:(o,d)=>{i.hc("Softmax",o,{axis:d})},1329985:(o,d)=>{i.hc("Concat",o,{axis:d})},1330045:(o,d,p,m,y)=>{i.hc("Split",o,{axis:d,numOutputs:p,splitSizes:m?Array.from(W().subarray(Number(m)>>>0,Number(y)>>>0)):[]})},1330201:o=>{i.hc("Expand",o,void 0)},1330255:(o,d)=>{i.hc("Gather",o,{axis:Number(d)})},1330326:(o,d)=>{i.hc("GatherElements",o,{axis:Number(d)})},1330405:(o,d)=>{i.hc("GatherND",o,{batch_dims:Number(d)})},1330484:(o,d,p,m,y,x,I,R,D,H,re)=>{i.hc("Resize",o,{antialias:d,axes:p?Array.from(W().subarray(Number(p)>>>0,Number(m)>>>0)):[],coordinateTransformMode:Qe(y),cubicCoeffA:x,excludeOutside:I,extrapolationValue:R,keepAspectRatioPolicy:Qe(D),mode:Qe(H),nearestMode:Qe(re)})},1330846:(o,d,p,m,y,x,I)=>{i.hc("Slice",o,{starts:d?Array.from(W().subarray(Number(d)>>>0,Number(p)>>>0)):[],ends:m?Array.from(W().subarray(Number(m)>>>0,Number(y)>>>0)):[],axes:x?Array.from(W().subarray(Number(x)>>>0,Number(I)>>>0)):[]})},1331110:o=>{i.hc("Tile",o,void 0)},1331162:(o,d,p)=>{i.hc("InstanceNormalization",o,{epsilon:d,format:p?"NHWC":"NCHW"})},1331276:(o,d,p)=>{i.hc("InstanceNormalization",o,{epsilon:d,format:p?"NHWC":"NCHW"})},1331390:o=>{i.hc("Range",o,void 0)},1331443:(o,d)=>{i.hc("Einsum",o,{equation:Qe(d)})},1331524:(o,d,p,m,y)=>{i.hc("Pad",o,{mode:d,value:p,pads:m?Array.from(W().subarray(Number(m)>>>0,Number(y)>>>0)):[]})},1331667:(o,d,p,m,y,x)=>{i.hc("BatchNormalization",o,{epsilon:d,momentum:p,spatial:!!y,trainingMode:!!m,format:x?"NHWC":"NCHW"})},1331836:(o,d,p,m,y,x)=>{i.hc("BatchNormalization",o,{epsilon:d,momentum:p,spatial:!!y,trainingMode:!!m,format:x?"NHWC":"NCHW"})},1332005:(o,d,p)=>{i.hc("CumSum",o,{exclusive:Number(d),reverse:Number(p)})},1332102:(o,d,p)=>{i.hc("DequantizeLinear",o,{axis:d,blockSize:p})},1332192:(o,d,p,m,y)=>{i.hc("GridSample",o,{align_corners:d,mode:Qe(p),padding_mode:Qe(m),format:y?"NHWC":"NCHW"})},1332362:(o,d,p,m,y)=>{i.hc("GridSample",o,{align_corners:d,mode:Qe(p),padding_mode:Qe(m),format:y?"NHWC":"NCHW"})},1332532:(o,d)=>{i.hc("ScatterND",o,{reduction:Qe(d)})},1332617:(o,d,p,m,y,x,I,R,D)=>{i.hc("Attention",o,{numHeads:d,isUnidirectional:p,maskFilterValue:m,scale:y,doRotary:x,qkvHiddenSizes:I?Array.from(W().subarray(Number(R)>>>0,Number(R)+I>>>0)):[],pastPresentShareBuffer:!!D})},1332889:o=>{i.hc("BiasAdd",o,void 0)},1332944:o=>{i.hc("BiasSplitGelu",o,void 0)},1333005:o=>{i.hc("FastGelu",o,void 0)},1333061:(o,d,p,m,y,x,I,R,D,H,re,de,xe,Le,kt,fi)=>{i.hc("Conv",o,{format:de?"NHWC":"NCHW",auto_pad:d,dilations:p?Array.from(W().subarray(Number(p)>>>0,Number(m)>>>0)):[],group:y,kernel_shape:x?Array.from(W().subarray(Number(x)>>>0,Number(I)>>>0)):[],pads:R?Array.from(W().subarray(Number(R)>>>0,Number(D)>>>0)):[],strides:H?Array.from(W().subarray(Number(H)>>>0,Number(re)>>>0)):[],w_is_const:()=>!!N()[Number(xe)>>>0],activation:Qe(Le),activation_params:kt?Array.from(it().subarray(Number(kt)>>>0,Number(fi)>>>0)):[]})},1333645:o=>{i.hc("Gelu",o,void 0)},1333697:(o,d,p,m,y,x,I,R,D)=>{i.hc("GroupQueryAttention",o,{numHeads:d,kvNumHeads:p,scale:m,softcap:y,doRotary:x,rotaryInterleaved:I,smoothSoftmax:R,localWindowSize:D})},1333914:(o,d,p,m)=>{i.hc("LayerNormalization",o,{axis:d,epsilon:p,simplified:!!m})},1334025:(o,d,p,m)=>{i.hc("LayerNormalization",o,{axis:d,epsilon:p,simplified:!!m})},1334136:(o,d,p,m,y,x)=>{i.hc("MatMulNBits",o,{k:d,n:p,accuracyLevel:m,bits:y,blockSize:x})},1334263:(o,d,p,m,y,x)=>{i.hc("MultiHeadAttention",o,{numHeads:d,isUnidirectional:p,maskFilterValue:m,scale:y,doRotary:x})},1334422:(o,d)=>{i.hc("QuickGelu",o,{alpha:d})},1334486:(o,d,p,m,y)=>{i.hc("RotaryEmbedding",o,{interleaved:!!d,numHeads:p,rotaryEmbeddingDim:m,scale:y})},1334625:(o,d,p)=>{i.hc("SkipLayerNormalization",o,{epsilon:d,simplified:!!p})},1334727:(o,d,p)=>{i.hc("SkipLayerNormalization",o,{epsilon:d,simplified:!!p})},1334829:(o,d,p,m)=>{i.hc("GatherBlockQuantized",o,{gatherAxis:d,quantizeAxis:p,blockSize:m})},1334950:o=>{i.Wd(o)},1334984:(o,d)=>i.Zd(Number(o),Number(d),i.Cd.be,i.Cd.errors)};function Y(o,d,p){return gl(async()=>{await i.Ud(Number(o),Number(d),Number(p))})}function Z(){return typeof wasmOffsetConverter<"u"}class me{constructor(d){Vu(this,"name","ExitStatus");this.message=`Program terminated with exit(${d})`,this.status=d}}var ie=o=>{o.terminate(),o.onmessage=()=>{}},pe=[],we=o=>{Xe.length==0&&(Fo(),ui(Xe[0]));var d=Xe.pop();if(!d)return 6;st.push(d),Wt[o.xd]=d,d.xd=o.xd;var p={yd:"run",de:o.ce,Fd:o.Fd,xd:o.xd};return d.postMessage(p,o.Ld),0},ke=0,ye=(o,d,...p)=>{for(var m=2*p.length,y=ve(),x=ha(8*m),I=x>>>3,R=0;R<p.length;R++){var D=p[R];typeof D=="bigint"?(fe[I+2*R]=1n,fe[I+2*R+1]=D):(fe[I+2*R]=0n,et()[I+2*R+1>>>0]=D)}return o=Pl(o,0,m,x,d),be(y),o};function Me(o){if(c)return ye(0,1,o);if(O=o,!(0<ke)){for(var d of st)ie(d);for(d of Xe)ie(d);Xe=[],st=[],Wt={},ee=!0}w(0,new me(o))}function at(o){if(c)return ye(1,0,o);tt(o)}var tt=o=>{if(O=o,c)throw at(o),"unwind";Me(o)},Xe=[],st=[],ur=[],Wt={},ot=o=>{var d=o.xd;delete Wt[d],Xe.push(o),st.splice(st.indexOf(o),1),o.xd=0,Ul(d)};function _t(){ur.forEach(o=>o())}var ui=o=>new Promise(d=>{o.onmessage=y=>{var x=(y=y.data).yd;if(y.Ed&&y.Ed!=rn()){var I=Wt[y.Ed];I?I.postMessage(y,y.Ld):T(`Internal error! Worker sent a message "${x}" to target pthread ${y.Ed}, but that thread no longer exists!`)}else x==="checkMailbox"?Ki():x==="spawnThread"?we(y):x==="cleanupThread"?ot(Wt[y.ee]):x==="loaded"?(o.loaded=!0,d(o)):x==="alert"?alert(`Thread ${y.fe}: ${y.text}`):y.target==="setimmediate"?o.postMessage(y):x==="callHandler"?i[y.Nd](...y.args):x&&T(`worker sent an unknown command ${x}`)},o.onerror=y=>{throw T(`worker sent an error! ${y.filename}:${y.lineno}: ${y.message}`),y};var p,m=[];for(p of[])i.propertyIsEnumerable(p)&&m.push(p);o.postMessage({yd:"load",Od:m,he:k,ie:A})});function Fo(){var o=new Worker(import.meta.url.startsWith("file:")?new URL("/assets/ort.bundle.min-OfoG_cy9.mjs",import.meta.url):new URL(import.meta.url),{type:"module",workerData:"em-pthread",name:"em-pthread"});Xe.push(o)}var M_=o=>{De();var d=Ee()[o+52>>>2>>>0];o=Ee()[o+56>>>2>>>0],Vl(d,d-o),be(d)},B_=(o,d)=>{ke=0,o=ma(o,d),0<ke?O=o:fa(o)},ji=[];function D_(o){var d=new Jn(o>>>=0);if(N()[d.wd+12>>>0]==0){var p=1;N()[d.wd+12>>>0]=p}return p=0,N()[d.wd+13>>>0]=p,ji.push(d),Fl(o),Gl(o)}var Gr=0,N_=()=>{$e(0,0);var o=ji.pop();ql(o.Gd),Gr=0};class Jn{constructor(d){this.Gd=d,this.wd=d-24}}function P_(o){throw Gr||(Gr=o>>>0),Gr}var Yn=o=>{var d=Gr;if(!d)return pi(0),0;var p=new Jn(d);Ee()[p.wd+16>>>2>>>0]=d;var m=Ee()[p.wd+4>>>2>>>0];if(!m)return pi(0),d;for(var y of o){if(y===0||y===m)break;if(Hl(y,m,p.wd+16))return pi(y),d}return pi(m),d};function U_(){return Yn([])}function W_(o){return Yn([o>>>0])}function L_(o,d){return Yn([o>>>0,d>>>0])}var V_=()=>{var o=ji.pop();o||F("no exception to throw");var d=o.Gd;if(N()[o.wd+13>>>0]==0){ji.push(o);var p=1;N()[o.wd+13>>>0]=p,p=0,N()[o.wd+12>>>0]=p}throw Gr=d};function q_(o,d,p){var m=new Jn(o>>>=0);throw d>>>=0,p>>>=0,Ee()[m.wd+16>>>2>>>0]=0,Ee()[m.wd+4>>>2>>>0]=d,Ee()[m.wd+8>>>2>>>0]=p,Gr=o}function Ho(o,d,p,m){return c?ye(2,1,o,d,p,m):Go(o,d,p,m)}function Go(o,d,p,m){if(o>>>=0,p>>>=0,m>>>=0,f===void 0)return 6;var y=[];return c&&y.length===0?Ho(o,d>>>=0,p,m):(o={ce:p,xd:o,Fd:m,Ld:y},c?(o.yd="spawnThread",postMessage(o,y),0):we(o))}var jo=typeof TextDecoder<"u"?new TextDecoder:void 0,Ko=(o,d=0,p=NaN)=>{var m=(d>>>=0)+p;for(p=d;o[p]&&!(p>=m);)++p;if(16<p-d&&o.buffer&&jo)return jo.decode(o.buffer instanceof ArrayBuffer?o.subarray(d,p):o.slice(d,p));for(m="";d<p;){var y=o[d++];if(128&y){var x=63&o[d++];if((224&y)==192)m+=String.fromCharCode((31&y)<<6|x);else{var I=63&o[d++];65536>(y=(240&y)==224?(15&y)<<12|x<<6|I:(7&y)<<18|x<<12|I<<6|63&o[d++])?m+=String.fromCharCode(y):(y-=65536,m+=String.fromCharCode(55296|y>>10,56320|1023&y))}}else m+=String.fromCharCode(y)}return m},Qe=(o,d)=>(o>>>=0)?Ko(V(),o,d):"";function Qo(o,d,p){return c?ye(3,1,o,d,p):0}function Zo(o,d){if(c)return ye(4,1,o,d)}var Xo=o=>{for(var d=0,p=0;p<o.length;++p){var m=o.charCodeAt(p);127>=m?d++:2047>=m?d+=2:55296<=m&&57343>=m?(d+=4,++p):d+=3}return d},jr=(o,d,p)=>{var m=V();if(d>>>=0,0<p){var y=d;p=d+p-1;for(var x=0;x<o.length;++x){var I=o.charCodeAt(x);if(55296<=I&&57343>=I&&(I=65536+((1023&I)<<10)|1023&o.charCodeAt(++x)),127>=I){if(d>=p)break;m[d++>>>0]=I}else{if(2047>=I){if(d+1>=p)break;m[d++>>>0]=192|I>>6}else{if(65535>=I){if(d+2>=p)break;m[d++>>>0]=224|I>>12}else{if(d+3>=p)break;m[d++>>>0]=240|I>>18,m[d++>>>0]=128|I>>12&63}m[d++>>>0]=128|I>>6&63}m[d++>>>0]=128|63&I}}m[d>>>0]=0,o=d-y}else o=0;return o};function Jo(o,d){if(c)return ye(5,1,o,d)}function Yo(o,d,p){if(c)return ye(6,1,o,d,p)}function el(o,d,p){return c?ye(7,1,o,d,p):0}function tl(o,d){if(c)return ye(8,1,o,d)}function rl(o,d,p){if(c)return ye(9,1,o,d,p)}function il(o,d,p,m){if(c)return ye(10,1,o,d,p,m)}function nl(o,d,p,m){if(c)return ye(11,1,o,d,p,m)}function al(o,d,p,m){if(c)return ye(12,1,o,d,p,m)}function sl(o){if(c)return ye(13,1,o)}function ol(o,d){if(c)return ye(14,1,o,d)}function ll(o,d,p){if(c)return ye(15,1,o,d,p)}var ul,dr,F_=()=>F(""),Lt=o=>{for(var d="";V()[o>>>0];)d+=ul[V()[o++>>>0]];return d},ea={},ta={};function tr(o,d,p={}){return function(m,y,x={}){var I=y.name;if(!m)throw new dr(`type "${I}" must have a positive integer typeid pointer`);if(ta.hasOwnProperty(m)){if(x.Pd)return;throw new dr(`Cannot register type '${I}' twice`)}ta[m]=y,ea.hasOwnProperty(m)&&(y=ea[m],delete ea[m],y.forEach(R=>R()))}(o,d,p)}var dl=(o,d,p)=>{switch(d){case 1:return p?m=>N()[m>>>0]:m=>V()[m>>>0];case 2:return p?m=>Ce()[m>>>1>>>0]:m=>We()[m>>>1>>>0];case 4:return p?m=>W()[m>>>2>>>0]:m=>Ee()[m>>>2>>>0];case 8:return p?m=>fe[m>>>3]:m=>Q[m>>>3];default:throw new TypeError(`invalid integer width (${d}): ${o}`)}};function H_(o,d,p){p>>>=0,tr(o>>>=0,{name:d=Lt(d>>>0),fromWireType:m=>m,toWireType:function(m,y){if(typeof y!="bigint"&&typeof y!="number")throw y=y===null?"null":(m=typeof y)=="object"||m==="array"||m==="function"?y.toString():""+y,new TypeError(`Cannot convert "${y}" to ${this.name}`);return typeof y=="number"&&(y=BigInt(y)),y},zd:cr,readValueFromPointer:dl(d,p,d.indexOf("u")==-1),Ad:null})}var cr=8;function G_(o,d,p,m){tr(o>>>=0,{name:d=Lt(d>>>0),fromWireType:function(y){return!!y},toWireType:function(y,x){return x?p:m},zd:cr,readValueFromPointer:function(y){return this.fromWireType(V()[y>>>0])},Ad:null})}var ra=[],rr=[];function ia(o){9<(o>>>=0)&&--rr[o+1]==0&&(rr[o]=void 0,ra.push(o))}var bt=o=>{if(!o)throw new dr("Cannot use deleted val. handle = "+o);return rr[o]},Ct=o=>{switch(o){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let d=ra.pop()||rr.length;return rr[d]=o,rr[d+1]=1,d}};function na(o){return this.fromWireType(Ee()[o>>>2>>>0])}var j_={name:"emscripten::val",fromWireType:o=>{var d=bt(o);return ia(o),d},toWireType:(o,d)=>Ct(d),zd:cr,readValueFromPointer:na,Ad:null};function K_(o){return tr(o>>>0,j_)}var Q_=(o,d)=>{switch(d){case 4:return function(p){return this.fromWireType(it()[p>>>2>>>0])};case 8:return function(p){return this.fromWireType(et()[p>>>3>>>0])};default:throw new TypeError(`invalid float width (${d}): ${o}`)}};function Z_(o,d,p){p>>>=0,tr(o>>>=0,{name:d=Lt(d>>>0),fromWireType:m=>m,toWireType:(m,y)=>y,zd:cr,readValueFromPointer:Q_(d,p),Ad:null})}function X_(o,d,p,m,y){if(o>>>=0,p>>>=0,d=Lt(d>>>0),y===-1&&(y=4294967295),y=R=>R,m===0){var x=32-8*p;y=R=>R<<x>>>x}var I=d.includes("unsigned")?function(R,D){return D>>>0}:function(R,D){return D};tr(o,{name:d,fromWireType:y,toWireType:I,zd:cr,readValueFromPointer:dl(d,p,m!==0),Ad:null})}function J_(o,d,p){function m(x){var I=Ee()[x>>>2>>>0];return x=Ee()[x+4>>>2>>>0],new y(N().buffer,x,I)}var y=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][d];tr(o>>>=0,{name:p=Lt(p>>>0),fromWireType:m,zd:cr,readValueFromPointer:m},{Pd:!0})}function Y_(o,d){tr(o>>>=0,{name:d=Lt(d>>>0),fromWireType:function(p){for(var m,y=Ee()[p>>>2>>>0],x=p+4,I=x,R=0;R<=y;++R){var D=x+R;R!=y&&V()[D>>>0]!=0||(I=Qe(I,D-I),m===void 0?m=I:(m+="\0",m+=I),I=D+1)}return qt(p),m},toWireType:function(p,m){m instanceof ArrayBuffer&&(m=new Uint8Array(m));var y=typeof m=="string";if(!(y||m instanceof Uint8Array||m instanceof Uint8ClampedArray||m instanceof Int8Array))throw new dr("Cannot pass non-string to std::string");var x=y?Xo(m):m.length,I=nn(4+x+1),R=I+4;if(Ee()[I>>>2>>>0]=x,y)jr(m,R,x+1);else if(y)for(y=0;y<x;++y){var D=m.charCodeAt(y);if(255<D)throw qt(I),new dr("String has UTF-16 code units that do not fit in 8 bits");V()[R+y>>>0]=D}else for(y=0;y<x;++y)V()[R+y>>>0]=m[y];return p!==null&&p.push(qt,I),I},zd:cr,readValueFromPointer:na,Ad(p){qt(p)}})}var cl=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,e0=(o,d)=>{for(var p=o>>1,m=p+d/2;!(p>=m)&&We()[p>>>0];)++p;if(32<(p<<=1)-o&&cl)return cl.decode(V().slice(o,p));for(p="",m=0;!(m>=d/2);++m){var y=Ce()[o+2*m>>>1>>>0];if(y==0)break;p+=String.fromCharCode(y)}return p},t0=(o,d,p)=>{if(p??(p=2147483647),2>p)return 0;var m=d;p=(p-=2)<2*o.length?p/2:o.length;for(var y=0;y<p;++y){var x=o.charCodeAt(y);Ce()[d>>>1>>>0]=x,d+=2}return Ce()[d>>>1>>>0]=0,d-m},r0=o=>2*o.length,i0=(o,d)=>{for(var p=0,m="";!(p>=d/4);){var y=W()[o+4*p>>>2>>>0];if(y==0)break;++p,65536<=y?(y-=65536,m+=String.fromCharCode(55296|y>>10,56320|1023&y)):m+=String.fromCharCode(y)}return m},n0=(o,d,p)=>{if(d>>>=0,p??(p=2147483647),4>p)return 0;var m=d;p=m+p-4;for(var y=0;y<o.length;++y){var x=o.charCodeAt(y);if(55296<=x&&57343>=x&&(x=65536+((1023&x)<<10)|1023&o.charCodeAt(++y)),W()[d>>>2>>>0]=x,(d+=4)+4>p)break}return W()[d>>>2>>>0]=0,d-m},a0=o=>{for(var d=0,p=0;p<o.length;++p){var m=o.charCodeAt(p);55296<=m&&57343>=m&&++p,d+=4}return d};function s0(o,d,p){if(o>>>=0,d>>>=0,p=Lt(p>>>=0),d===2)var m=e0,y=t0,x=r0,I=R=>We()[R>>>1>>>0];else d===4&&(m=i0,y=n0,x=a0,I=R=>Ee()[R>>>2>>>0]);tr(o,{name:p,fromWireType:R=>{for(var D,H=Ee()[R>>>2>>>0],re=R+4,de=0;de<=H;++de){var xe=R+4+de*d;de!=H&&I(xe)!=0||(re=m(re,xe-re),D===void 0?D=re:(D+="\0",D+=re),re=xe+d)}return qt(R),D},toWireType:(R,D)=>{if(typeof D!="string")throw new dr(`Cannot pass non-string to C++ string type ${p}`);var H=x(D),re=nn(4+H+d);return Ee()[re>>>2>>>0]=H/d,y(D,re+4,H+d),R!==null&&R.push(qt,re),re},zd:cr,readValueFromPointer:na,Ad(R){qt(R)}})}function o0(o,d){tr(o>>>=0,{Qd:!0,name:d=Lt(d>>>0),zd:0,fromWireType:()=>{},toWireType:()=>{}})}function l0(o){pa(o>>>0,!u,1,!l,131072,!1),_t()}var aa=o=>{if(!ee)try{if(o(),!(0<ke))try{c?fa(O):tt(O)}catch(d){d instanceof me||d=="unwind"||w(0,d)}}catch(d){d instanceof me||d=="unwind"||w(0,d)}};function sa(o){o>>>=0,typeof Atomics.ge=="function"&&(Atomics.ge(W(),o>>>2,o).value.then(Ki),o+=128,Atomics.store(W(),o>>>2,1))}var Ki=()=>{var o=rn();o&&(sa(o),aa(Ll))};function u0(o,d){(o>>>=0)==d>>>0?setTimeout(Ki):c?postMessage({Ed:o,yd:"checkMailbox"}):(o=Wt[o])&&o.postMessage({yd:"checkMailbox"})}var oa=[];function d0(o,d,p,m,y){for(d>>>=0,m/=2,oa.length=m,p=y>>>0>>>3,y=0;y<m;y++)oa[y]=fe[p+2*y]?fe[p+2*y+1]:et()[p+2*y+1>>>0];return(d?J[d]:rb[o])(...oa)}var c0=()=>{ke=0};function p0(o){o>>>=0,c?postMessage({yd:"cleanupThread",ee:o}):ot(Wt[o])}function f0(o){}var Qi=(o,d)=>{var p=ta[o];if(p===void 0)throw o=Bl(o),p=Lt(o),qt(o),new dr(`${d} has unknown type ${p}`);return p},pl=(o,d,p)=>{var m=[];return o=o.toWireType(m,p),m.length&&(Ee()[d>>>2>>>0]=Ct(m)),o};function h0(o,d,p){return d>>>=0,p>>>=0,o=bt(o>>>0),d=Qi(d,"emval::as"),pl(d,p,o)}function m0(o,d){return d>>>=0,o=bt(o>>>0),(d=Qi(d,"emval::as")).toWireType(null,o)}var Zi=o=>{try{o()}catch(d){F(d)}},pr=0,Vt=null,fl=0,Xi=[],hl={},ml={},g0=0,la=null,y0=[];function gl(o){return function(d){if(!ee){if(pr===0){var p=!1,m=!1;d((y=0)=>{if(!ee&&(fl=y,p=!0,m)){pr=2,Zi(()=>Uu(Vt)),typeof MainLoop<"u"&&MainLoop.Md&&MainLoop.resume(),y=!1;try{var x=function(){var D=W()[Vt+8>>>2>>>0];return D=L[ml[D]],--ke,D()}()}catch(D){x=D,y=!0}var I=!1;if(!Vt){var R=la;R&&(la=null,(y?R.reject:R.resolve)(x),I=!0)}if(y&&!I)throw x}}),m=!0,p||(pr=1,Vt=function(){var y=nn(65548),x=y+12;Ee()[y>>>2>>>0]=x,Ee()[y+4>>>2>>>0]=x+65536,x=Xi[0];var I=hl[x];return I===void 0&&(I=g0++,hl[x]=I,ml[I]=x),x=I,W()[y+8>>>2>>>0]=x,y}(),typeof MainLoop<"u"&&MainLoop.Md&&MainLoop.pause(),Zi(()=>Nu(Vt)))}else pr===2?(pr=0,Zi(Wu),qt(Vt),Vt=null,y0.forEach(aa)):F(`invalid state: ${pr}`);return fl}}(d=>{o().then(d)})}function _0(o){return o>>>=0,gl(async()=>{var d=await bt(o);return Ct(d)})}var Ji=[];function b0(o,d,p,m){return p>>>=0,m>>>=0,(o=Ji[o>>>0])(null,d=bt(d>>>0),p,m)}var w0={},Yi=o=>{var d=w0[o];return d===void 0?Lt(o):d};function v0(o,d,p,m,y){return p>>>=0,m>>>=0,y>>>=0,(o=Ji[o>>>0])(d=bt(d>>>0),d[p=Yi(p)],m,y)}var yl=()=>typeof globalThis=="object"?globalThis:Function("return this")();function $0(o){return(o>>>=0)==0?Ct(yl()):(o=Yi(o),Ct(yl()[o]))}var x0=o=>{var d=Ji.length;return Ji.push(o),d},S0=(o,d)=>{for(var p=Array(o),m=0;m<o;++m)p[m]=Qi(Ee()[d+4*m>>>2>>>0],"parameter "+m);return p},_l=(o,d)=>Object.defineProperty(d,"name",{value:o});function T0(o,d,p){var m=(d=S0(o,d>>>0)).shift();o--;var y=`return function (obj, func, destructorsRef, args) {
`,x=0,I=[];p===0&&I.push("obj");for(var R=["retType"],D=[m],H=0;H<o;++H)I.push("arg"+H),R.push("argType"+H),D.push(d[H]),y+=`  var arg${H} = argType${H}.readValueFromPointer(args${x?"+"+x:""});
`,x+=d[H].zd;return y+=`  var rv = ${p===1?"new func":"func.call"}(${I.join(", ")});
`,m.Qd||(R.push("emval_returnValue"),D.push(pl),y+=`  return emval_returnValue(retType, destructorsRef, rv);
`),R.push(y+`};
`),o=function(re){var de=Function;if(!(de instanceof Function))throw new TypeError(`new_ called with constructor type ${typeof de} which is not a function`);var xe=_l(de.name||"unknownFunctionName",function(){});return xe.prototype=de.prototype,xe=new xe,(re=de.apply(xe,re))instanceof Object?re:xe}(R)(...D),p=`methodCaller<(${d.map(re=>re.name).join(", ")}) => ${m.name}>`,x0(_l(p,o))}function C0(o){return o=Yi(o>>>0),Ct(i[o])}function k0(o,d){return d>>>=0,o=bt(o>>>0),d=bt(d),Ct(o[d])}function I0(o){9<(o>>>=0)&&(rr[o+1]+=1)}function E0(){return Ct([])}function z0(o){o=bt(o>>>0);for(var d=Array(o.length),p=0;p<o.length;p++)d[p]=o[p];return Ct(d)}function A0(o){return Ct(Yi(o>>>0))}function O0(){return Ct({})}function R0(o){for(var d=bt(o>>>=0);d.length;){var p=d.pop();d.pop()(p)}ia(o)}function M0(o,d,p){d>>>=0,p>>>=0,o=bt(o>>>0),d=bt(d),p=bt(p),o[d]=p}function B0(o,d){return d>>>=0,o=(o=Qi(o>>>0,"_emval_take_value")).readValueFromPointer(d),Ct(o)}function D0(o,d){o=-9007199254740992>o||9007199254740992<o?NaN:Number(o),d>>>=0,o=new Date(1e3*o),W()[d>>>2>>>0]=o.getUTCSeconds(),W()[d+4>>>2>>>0]=o.getUTCMinutes(),W()[d+8>>>2>>>0]=o.getUTCHours(),W()[d+12>>>2>>>0]=o.getUTCDate(),W()[d+16>>>2>>>0]=o.getUTCMonth(),W()[d+20>>>2>>>0]=o.getUTCFullYear()-1900,W()[d+24>>>2>>>0]=o.getUTCDay(),o=(o.getTime()-Date.UTC(o.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,W()[d+28>>>2>>>0]=o}var bl=o=>o%4==0&&(o%100!=0||o%400==0),wl=[0,31,60,91,121,152,182,213,244,274,305,335],vl=[0,31,59,90,120,151,181,212,243,273,304,334];function N0(o,d){o=-9007199254740992>o||9007199254740992<o?NaN:Number(o),d>>>=0,o=new Date(1e3*o),W()[d>>>2>>>0]=o.getSeconds(),W()[d+4>>>2>>>0]=o.getMinutes(),W()[d+8>>>2>>>0]=o.getHours(),W()[d+12>>>2>>>0]=o.getDate(),W()[d+16>>>2>>>0]=o.getMonth(),W()[d+20>>>2>>>0]=o.getFullYear()-1900,W()[d+24>>>2>>>0]=o.getDay();var p=(bl(o.getFullYear())?wl:vl)[o.getMonth()]+o.getDate()-1|0;W()[d+28>>>2>>>0]=p,W()[d+36>>>2>>>0]=-60*o.getTimezoneOffset(),p=new Date(o.getFullYear(),6,1).getTimezoneOffset();var m=new Date(o.getFullYear(),0,1).getTimezoneOffset();o=0|(p!=m&&o.getTimezoneOffset()==Math.min(m,p)),W()[d+32>>>2>>>0]=o}function P0(o){o>>>=0;var d=new Date(W()[o+20>>>2>>>0]+1900,W()[o+16>>>2>>>0],W()[o+12>>>2>>>0],W()[o+8>>>2>>>0],W()[o+4>>>2>>>0],W()[o>>>2>>>0],0),p=W()[o+32>>>2>>>0],m=d.getTimezoneOffset(),y=new Date(d.getFullYear(),6,1).getTimezoneOffset(),x=new Date(d.getFullYear(),0,1).getTimezoneOffset(),I=Math.min(x,y);return 0>p?W()[o+32>>>2>>>0]=+(y!=x&&I==m):0<p!=(I==m)&&(y=Math.max(x,y),d.setTime(d.getTime()+6e4*((0<p?I:y)-m))),W()[o+24>>>2>>>0]=d.getDay(),p=(bl(d.getFullYear())?wl:vl)[d.getMonth()]+d.getDate()-1|0,W()[o+28>>>2>>>0]=p,W()[o>>>2>>>0]=d.getSeconds(),W()[o+4>>>2>>>0]=d.getMinutes(),W()[o+8>>>2>>>0]=d.getHours(),W()[o+12>>>2>>>0]=d.getDate(),W()[o+16>>>2>>>0]=d.getMonth(),W()[o+20>>>2>>>0]=d.getYear(),o=d.getTime(),BigInt(isNaN(o)?-1:o/1e3)}function $l(o,d,p,m,y,x,I){return c?ye(16,1,o,d,p,m,y,x,I):-52}function xl(o,d,p,m,y,x){if(c)return ye(17,1,o,d,p,m,y,x)}var di={},U0=()=>performance.timeOrigin+performance.now();function Sl(o,d){if(c)return ye(18,1,o,d);if(di[o]&&(clearTimeout(di[o].id),delete di[o]),!d)return 0;var p=setTimeout(()=>{delete di[o],aa(()=>Wl(o,performance.timeOrigin+performance.now()))},d);return di[o]={id:p,ke:d},0}function W0(o,d,p,m){o>>>=0,d>>>=0,p>>>=0,m>>>=0;var y=new Date().getFullYear(),x=new Date(y,0,1).getTimezoneOffset();y=new Date(y,6,1).getTimezoneOffset();var I=Math.max(x,y);Ee()[o>>>2>>>0]=60*I,W()[d>>>2>>>0]=+(x!=y),o=(d=R=>{var D=Math.abs(R);return`UTC${0<=R?"-":"+"}${String(Math.floor(D/60)).padStart(2,"0")}${String(D%60).padStart(2,"0")}`})(x),d=d(y),y<x?(jr(o,p,17),jr(d,m,17)):(jr(o,m,17),jr(d,p,17))}var L0=()=>Date.now();function V0(o,d,p){return 0<=o&&3>=o?(o===0?o=Date.now():o=performance.timeOrigin+performance.now(),fe[p>>>0>>>3]=BigInt(Math.round(1e6*o)),0):28}var ua=[],Tl=(o,d)=>{ua.length=0;for(var p;p=V()[o++>>>0];){var m=p!=105;d+=(m&=p!=112)&&d%8?4:0,ua.push(p==112?Ee()[d>>>2>>>0]:p==106?fe[d>>>3]:p==105?W()[d>>>2>>>0]:et()[d>>>3>>>0]),d+=m?8:4}return ua};function q0(o,d,p){return o>>>=0,d=Tl(d>>>0,p>>>0),J[o](...d)}function F0(o,d,p){return o>>>=0,d=Tl(d>>>0,p>>>0),J[o](...d)}var H0=()=>{};function G0(o,d){return T(Qe(o>>>0,d>>>0))}var j0=()=>{throw ke+=1,"unwind"};function K0(){return 4294901760}var Q0=()=>navigator.hardwareConcurrency;function Z0(){return F("Cannot use emscripten_pc_get_function without -sUSE_OFFSET_CONVERTER"),0}function X0(o){o>>>=0;var d=V().length;if(o<=d||4294901760<o)return!1;for(var p=1;4>=p;p*=2){var m=d*(1+.2/p);m=Math.min(m,o+100663296);e:{m=(Math.min(4294901760,65536*Math.ceil(Math.max(o,m)/65536))-k.buffer.byteLength+65535)/65536|0;try{k.grow(m),De();var y=1;break e}catch{}y=void 0}if(y)return!0}return!1}var en=()=>(F("Cannot use convertFrameToPC (needed by __builtin_return_address) without -sUSE_OFFSET_CONVERTER"),0),ci={},Cl=o=>{o.forEach(d=>{en()})};function J0(){var o=Error().stack.toString().split(`
`);return o[0]=="Error"&&o.shift(),Cl(o),ci.Kd=en(),ci.ae=o,ci.Kd}function Y0(o,d,p){if(o>>>=0,d>>>=0,ci.Kd==o)var m=ci.ae;else(m=Error().stack.toString().split(`
`))[0]=="Error"&&m.shift(),Cl(m);for(var y=3;m[y]&&en()!=o;)++y;for(o=0;o<p&&m[o+y];++o)W()[d+4*o>>>2>>>0]=en();return o}var da,ca={},kl=()=>{if(!da){var o,d={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:"./this.program"};for(o in ca)ca[o]===void 0?delete d[o]:d[o]=ca[o];var p=[];for(o in d)p.push(`${o}=${d[o]}`);da=p}return da};function Il(o,d){if(c)return ye(19,1,o,d);o>>>=0,d>>>=0;var p=0;return kl().forEach((m,y)=>{var x=d+p;for(y=Ee()[o+4*y>>>2>>>0]=x,x=0;x<m.length;++x)N()[y++>>>0]=m.charCodeAt(x);N()[y>>>0]=0,p+=m.length+1}),0}function El(o,d){if(c)return ye(20,1,o,d);o>>>=0,d>>>=0;var p=kl();Ee()[o>>>2>>>0]=p.length;var m=0;return p.forEach(y=>m+=y.length+1),Ee()[d>>>2>>>0]=m,0}function zl(o){return c?ye(21,1,o):52}function Al(o,d,p,m){return c?ye(22,1,o,d,p,m):52}function Ol(o,d,p,m){return c?ye(23,1,o,d,p,m):70}var eb=[null,[],[]];function Rl(o,d,p,m){if(c)return ye(24,1,o,d,p,m);d>>>=0,p>>>=0,m>>>=0;for(var y=0,x=0;x<p;x++){var I=Ee()[d>>>2>>>0],R=Ee()[d+4>>>2>>>0];d+=8;for(var D=0;D<R;D++){var H=V()[I+D>>>0],re=eb[o];H===0||H===10?((o===1?C:T)(Ko(re)),re.length=0):re.push(H)}y+=R}return Ee()[m>>>2>>>0]=y,0}function tb(o){return o>>>0}c||function(){for(var o=i.numThreads-1;o--;)Fo();pe.unshift(()=>{P++,function(d){c?d():Promise.all(Xe.map(ui)).then(d)}(()=>G())})}();for(var Ml=Array(256),tn=0;256>tn;++tn)Ml[tn]=String.fromCharCode(tn);ul=Ml,dr=i.BindingError=class extends Error{constructor(o){super(o),this.name="BindingError"}},i.InternalError=class extends Error{constructor(o){super(o),this.name="InternalError"}},rr.push(0,1,void 0,1,null,1,!0,1,!1,1),i.count_emval_handles=()=>rr.length/2-5-ra.length;var L,rb=[Me,at,Ho,Qo,Zo,Jo,Yo,el,tl,rl,il,nl,al,sl,ol,ll,$l,xl,Sl,Il,El,zl,Al,Ol,Rl];(async function(){function o(m,y){return L=m.exports,L=function(){var x=L,I={};for(let[R,D]of Object.entries(x))I[R]=typeof D=="function"?(...H)=>{Xi.push(R);try{return D(...H)}finally{ee||(Xi.pop(),Vt&&pr===1&&Xi.length===0&&(pr=0,ke+=1,Zi(Pu),typeof Fibers<"u"&&Fibers.le()))}}:D;return I}(),L=function(){var x=L,I=D=>H=>D(H)>>>0,R=D=>()=>D()>>>0;return(x=Object.assign({},x)).Cb=I(x.Cb),x.fc=R(x.fc),x.ic=I(x.ic),x.vc=I(x.vc),x.wc=R(x.wc),x.Ac=I(x.Ac),x}(),ur.push(L.jc),A=y,G(),L}P++;var d=te();if(i.instantiateWasm)return new Promise(m=>{i.instantiateWasm(d,(y,x)=>{o(y,x),m(y.exports)})});if(c)return new Promise(m=>{Ut=y=>{var x=new WebAssembly.Instance(y,te());m(o(x,y))}});z??(z=i.locateFile?i.locateFile?i.locateFile("ort-wasm-simd-threaded.jsep.wasm",S):S+"ort-wasm-simd-threaded.jsep.wasm":new URL("/assets/ort-wasm-simd-threaded.jsep-D5Jk56-t.wasm",import.meta.url).href);try{var p=await async function(m){var y=z;if(!ue&&typeof WebAssembly.instantiateStreaming=="function"&&!Ae(y))try{var x=fetch(y,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(x,m)}catch(I){T(`wasm streaming compile failed: ${I}`),T("falling back to ArrayBuffer instantiation")}return async function(I,R){try{var D=await async function(H){if(!ue)try{var re=await g(H);return new Uint8Array(re)}catch{}if(H==z&&ue)H=new Uint8Array(ue);else{if(!_)throw"both async and sync fetching of the wasm failed";H=_(H)}return H}(I);return await WebAssembly.instantiate(D,R)}catch(H){T(`failed to asynchronously prepare wasm: ${H}`),F(H)}}(y,m)}(d);return o(p.instance,p.module)}catch(m){return a(m),Promise.reject(m)}})();var Bl=o=>(Bl=L.Cb)(o),Dl=()=>(Dl=L.Db)();i._OrtInit=(o,d)=>(i._OrtInit=L.Eb)(o,d),i._OrtGetLastError=(o,d)=>(i._OrtGetLastError=L.Fb)(o,d),i._OrtCreateSessionOptions=(o,d,p,m,y,x,I,R,D,H)=>(i._OrtCreateSessionOptions=L.Gb)(o,d,p,m,y,x,I,R,D,H),i._OrtAppendExecutionProvider=(o,d)=>(i._OrtAppendExecutionProvider=L.Hb)(o,d),i._OrtAddFreeDimensionOverride=(o,d,p)=>(i._OrtAddFreeDimensionOverride=L.Ib)(o,d,p),i._OrtAddSessionConfigEntry=(o,d,p)=>(i._OrtAddSessionConfigEntry=L.Jb)(o,d,p),i._OrtReleaseSessionOptions=o=>(i._OrtReleaseSessionOptions=L.Kb)(o),i._OrtCreateSession=(o,d,p)=>(i._OrtCreateSession=L.Lb)(o,d,p),i._OrtReleaseSession=o=>(i._OrtReleaseSession=L.Mb)(o),i._OrtGetInputOutputCount=(o,d,p)=>(i._OrtGetInputOutputCount=L.Nb)(o,d,p),i._OrtGetInputName=(o,d)=>(i._OrtGetInputName=L.Ob)(o,d),i._OrtGetOutputName=(o,d)=>(i._OrtGetOutputName=L.Pb)(o,d),i._OrtFree=o=>(i._OrtFree=L.Qb)(o),i._OrtCreateTensor=(o,d,p,m,y,x)=>(i._OrtCreateTensor=L.Rb)(o,d,p,m,y,x),i._OrtGetTensorData=(o,d,p,m,y)=>(i._OrtGetTensorData=L.Sb)(o,d,p,m,y),i._OrtReleaseTensor=o=>(i._OrtReleaseTensor=L.Tb)(o),i._OrtCreateRunOptions=(o,d,p,m)=>(i._OrtCreateRunOptions=L.Ub)(o,d,p,m),i._OrtAddRunConfigEntry=(o,d,p)=>(i._OrtAddRunConfigEntry=L.Vb)(o,d,p),i._OrtReleaseRunOptions=o=>(i._OrtReleaseRunOptions=L.Wb)(o),i._OrtCreateBinding=o=>(i._OrtCreateBinding=L.Xb)(o),i._OrtBindInput=(o,d,p)=>(i._OrtBindInput=L.Yb)(o,d,p),i._OrtBindOutput=(o,d,p,m)=>(i._OrtBindOutput=L.Zb)(o,d,p,m),i._OrtClearBoundOutputs=o=>(i._OrtClearBoundOutputs=L._b)(o),i._OrtReleaseBinding=o=>(i._OrtReleaseBinding=L.$b)(o),i._OrtRunWithBinding=(o,d,p,m,y)=>(i._OrtRunWithBinding=L.ac)(o,d,p,m,y),i._OrtRun=(o,d,p,m,y,x,I,R)=>(i._OrtRun=L.bc)(o,d,p,m,y,x,I,R),i._OrtEndProfiling=o=>(i._OrtEndProfiling=L.cc)(o),i._JsepOutput=(o,d,p)=>(i._JsepOutput=L.dc)(o,d,p),i._JsepGetNodeName=o=>(i._JsepGetNodeName=L.ec)(o);var rn=()=>(rn=L.fc)(),qt=i._free=o=>(qt=i._free=L.gc)(o),nn=i._malloc=o=>(nn=i._malloc=L.ic)(o),pa=(o,d,p,m,y,x)=>(pa=L.kc)(o,d,p,m,y,x),Nl=()=>(Nl=L.lc)(),Pl=(o,d,p,m,y)=>(Pl=L.mc)(o,d,p,m,y),Ul=o=>(Ul=L.nc)(o),fa=o=>(fa=L.oc)(o),Wl=(o,d)=>(Wl=L.pc)(o,d),Ll=()=>(Ll=L.qc)(),$e=(o,d)=>($e=L.rc)(o,d),pi=o=>(pi=L.sc)(o),Vl=(o,d)=>(Vl=L.tc)(o,d),be=o=>(be=L.uc)(o),ha=o=>(ha=L.vc)(o),ve=()=>(ve=L.wc)(),ql=o=>(ql=L.xc)(o),Fl=o=>(Fl=L.yc)(o),Hl=(o,d,p)=>(Hl=L.zc)(o,d,p),Gl=o=>(Gl=L.Ac)(o),jl=i.dynCall_iii=(o,d,p)=>(jl=i.dynCall_iii=L.Bc)(o,d,p),Kl=i.dynCall_vi=(o,d)=>(Kl=i.dynCall_vi=L.Cc)(o,d),ma=i.dynCall_ii=(o,d)=>(ma=i.dynCall_ii=L.Dc)(o,d),Ql=i.dynCall_vii=(o,d,p)=>(Ql=i.dynCall_vii=L.Ec)(o,d,p),Zl=i.dynCall_iiii=(o,d,p,m)=>(Zl=i.dynCall_iiii=L.Fc)(o,d,p,m),Xl=i.dynCall_viii=(o,d,p,m)=>(Xl=i.dynCall_viii=L.Gc)(o,d,p,m),Jl=i.dynCall_iiiii=(o,d,p,m,y)=>(Jl=i.dynCall_iiiii=L.Hc)(o,d,p,m,y),Yl=i.dynCall_viiii=(o,d,p,m,y)=>(Yl=i.dynCall_viiii=L.Ic)(o,d,p,m,y),eu=i.dynCall_viiiiii=(o,d,p,m,y,x,I)=>(eu=i.dynCall_viiiiii=L.Jc)(o,d,p,m,y,x,I),tu=i.dynCall_viiiiiii=(o,d,p,m,y,x,I,R)=>(tu=i.dynCall_viiiiiii=L.Kc)(o,d,p,m,y,x,I,R),ru=i.dynCall_ji=(o,d)=>(ru=i.dynCall_ji=L.Lc)(o,d),iu=i.dynCall_v=o=>(iu=i.dynCall_v=L.Mc)(o),nu=i.dynCall_viiiii=(o,d,p,m,y,x)=>(nu=i.dynCall_viiiii=L.Nc)(o,d,p,m,y,x),au=i.dynCall_i=o=>(au=i.dynCall_i=L.Oc)(o),su=i.dynCall_fii=(o,d,p)=>(su=i.dynCall_fii=L.Pc)(o,d,p),ou=i.dynCall_viiiiiiii=(o,d,p,m,y,x,I,R,D)=>(ou=i.dynCall_viiiiiiii=L.Qc)(o,d,p,m,y,x,I,R,D),lu=i.dynCall_viiiiiiiiii=(o,d,p,m,y,x,I,R,D,H,re)=>(lu=i.dynCall_viiiiiiiiii=L.Rc)(o,d,p,m,y,x,I,R,D,H,re),uu=i.dynCall_jiii=(o,d,p,m)=>(uu=i.dynCall_jiii=L.Sc)(o,d,p,m),du=i.dynCall_dii=(o,d,p)=>(du=i.dynCall_dii=L.Tc)(o,d,p),cu=i.dynCall_viiiiiiiii=(o,d,p,m,y,x,I,R,D,H)=>(cu=i.dynCall_viiiiiiiii=L.Uc)(o,d,p,m,y,x,I,R,D,H),pu=i.dynCall_viiiiiiiiiii=(o,d,p,m,y,x,I,R,D,H,re,de)=>(pu=i.dynCall_viiiiiiiiiii=L.Vc)(o,d,p,m,y,x,I,R,D,H,re,de),fu=i.dynCall_iiiiii=(o,d,p,m,y,x)=>(fu=i.dynCall_iiiiii=L.Wc)(o,d,p,m,y,x),hu=i.dynCall_iij=(o,d,p)=>(hu=i.dynCall_iij=L.Xc)(o,d,p),mu=i.dynCall_iiiiiiiiii=(o,d,p,m,y,x,I,R,D,H)=>(mu=i.dynCall_iiiiiiiiii=L.Yc)(o,d,p,m,y,x,I,R,D,H),gu=i.dynCall_iiiiiiiiiii=(o,d,p,m,y,x,I,R,D,H,re)=>(gu=i.dynCall_iiiiiiiiiii=L.Zc)(o,d,p,m,y,x,I,R,D,H,re),yu=i.dynCall_vij=(o,d,p)=>(yu=i.dynCall_vij=L._c)(o,d,p),_u=i.dynCall_iiif=(o,d,p,m)=>(_u=i.dynCall_iiif=L.$c)(o,d,p,m),bu=i.dynCall_iiij=(o,d,p,m)=>(bu=i.dynCall_iiij=L.ad)(o,d,p,m),wu=i.dynCall_fiii=(o,d,p,m)=>(wu=i.dynCall_fiii=L.bd)(o,d,p,m),vu=i.dynCall_viiiiiiiiiiiii=(o,d,p,m,y,x,I,R,D,H,re,de,xe,Le)=>(vu=i.dynCall_viiiiiiiiiiiii=L.cd)(o,d,p,m,y,x,I,R,D,H,re,de,xe,Le),$u=i.dynCall_vjiii=(o,d,p,m,y)=>($u=i.dynCall_vjiii=L.dd)(o,d,p,m,y),xu=i.dynCall_vif=(o,d,p)=>(xu=i.dynCall_vif=L.ed)(o,d,p),Su=i.dynCall_iiiiiii=(o,d,p,m,y,x,I)=>(Su=i.dynCall_iiiiiii=L.fd)(o,d,p,m,y,x,I),Tu=i.dynCall_iiiij=(o,d,p,m,y)=>(Tu=i.dynCall_iiiij=L.gd)(o,d,p,m,y),Cu=i.dynCall_iiiiiiii=(o,d,p,m,y,x,I,R)=>(Cu=i.dynCall_iiiiiiii=L.hd)(o,d,p,m,y,x,I,R),ku=i.dynCall_viiiiiiiiiiii=(o,d,p,m,y,x,I,R,D,H,re,de,xe)=>(ku=i.dynCall_viiiiiiiiiiii=L.id)(o,d,p,m,y,x,I,R,D,H,re,de,xe),Iu=i.dynCall_diii=(o,d,p,m)=>(Iu=i.dynCall_diii=L.jd)(o,d,p,m),Eu=i.dynCall_jiiii=(o,d,p,m,y)=>(Eu=i.dynCall_jiiii=L.kd)(o,d,p,m,y),zu=i.dynCall_viiij=(o,d,p,m,y)=>(zu=i.dynCall_viiij=L.ld)(o,d,p,m,y),Au=i.dynCall_fiiii=(o,d,p,m,y)=>(Au=i.dynCall_fiiii=L.md)(o,d,p,m,y),Ou=i.dynCall_viiif=(o,d,p,m,y)=>(Ou=i.dynCall_viiif=L.nd)(o,d,p,m,y),Ru=i.dynCall_diiii=(o,d,p,m,y)=>(Ru=i.dynCall_diiii=L.od)(o,d,p,m,y),Mu=i.dynCall_viiid=(o,d,p,m,y)=>(Mu=i.dynCall_viiid=L.pd)(o,d,p,m,y),Bu=i.dynCall_iiiijii=(o,d,p,m,y,x,I)=>(Bu=i.dynCall_iiiijii=L.qd)(o,d,p,m,y,x,I),Du=i.dynCall_iiiiiij=(o,d,p,m,y,x,I)=>(Du=i.dynCall_iiiiiij=L.rd)(o,d,p,m,y,x,I),Nu=o=>(Nu=L.sd)(o),Pu=()=>(Pu=L.td)(),Uu=o=>(Uu=L.ud)(o),Wu=()=>(Wu=L.vd)();function ib(o,d,p){var m=ve();try{Ql(o,d,p)}catch(y){if(be(m),y!==y+0)throw y;$e(1,0)}}function nb(o,d,p){var m=ve();try{return jl(o,d,p)}catch(y){if(be(m),y!==y+0)throw y;$e(1,0)}}function ab(o,d){var p=ve();try{Kl(o,d)}catch(m){if(be(p),m!==m+0)throw m;$e(1,0)}}function sb(o,d){var p=ve();try{return ma(o,d)}catch(m){if(be(p),m!==m+0)throw m;$e(1,0)}}function ob(o,d,p,m){var y=ve();try{return Zl(o,d,p,m)}catch(x){if(be(y),x!==x+0)throw x;$e(1,0)}}function lb(o,d,p,m,y){var x=ve();try{Yl(o,d,p,m,y)}catch(I){if(be(x),I!==I+0)throw I;$e(1,0)}}function ub(o,d,p,m,y){var x=ve();try{return Jl(o,d,p,m,y)}catch(I){if(be(x),I!==I+0)throw I;$e(1,0)}}function db(o,d,p,m){var y=ve();try{Xl(o,d,p,m)}catch(x){if(be(y),x!==x+0)throw x;$e(1,0)}}function cb(o,d,p,m,y,x,I){var R=ve();try{return Su(o,d,p,m,y,x,I)}catch(D){if(be(R),D!==D+0)throw D;$e(1,0)}}function pb(o){var d=ve();try{iu(o)}catch(p){if(be(d),p!==p+0)throw p;$e(1,0)}}function fb(o,d,p){var m=ve();try{return hu(o,d,p)}catch(y){if(be(m),y!==y+0)throw y;$e(1,0)}}function hb(o,d,p,m,y,x){var I=ve();try{nu(o,d,p,m,y,x)}catch(R){if(be(I),R!==R+0)throw R;$e(1,0)}}function mb(o,d,p){var m=ve();try{yu(o,d,p)}catch(y){if(be(m),y!==y+0)throw y;$e(1,0)}}function gb(o,d,p,m,y,x,I){var R=ve();try{eu(o,d,p,m,y,x,I)}catch(D){if(be(R),D!==D+0)throw D;$e(1,0)}}function yb(o,d,p,m,y,x,I,R){var D=ve();try{tu(o,d,p,m,y,x,I,R)}catch(H){if(be(D),H!==H+0)throw H;$e(1,0)}}function _b(o,d,p,m,y,x){var I=ve();try{return fu(o,d,p,m,y,x)}catch(R){if(be(I),R!==R+0)throw R;$e(1,0)}}function bb(o,d,p,m,y,x,I,R){var D=ve();try{return Cu(o,d,p,m,y,x,I,R)}catch(H){if(be(D),H!==H+0)throw H;$e(1,0)}}function wb(o,d,p,m,y,x,I,R,D,H){var re=ve();try{cu(o,d,p,m,y,x,I,R,D,H)}catch(de){if(be(re),de!==de+0)throw de;$e(1,0)}}function vb(o,d,p,m,y,x,I,R,D){var H=ve();try{ou(o,d,p,m,y,x,I,R,D)}catch(re){if(be(H),re!==re+0)throw re;$e(1,0)}}function $b(o){var d=ve();try{return au(o)}catch(p){if(be(d),p!==p+0)throw p;$e(1,0)}}function xb(o,d,p,m,y,x,I,R,D,H){var re=ve();try{return mu(o,d,p,m,y,x,I,R,D,H)}catch(de){if(be(re),de!==de+0)throw de;$e(1,0)}}function Sb(o,d,p){var m=ve();try{return su(o,d,p)}catch(y){if(be(m),y!==y+0)throw y;$e(1,0)}}function Tb(o,d,p,m){var y=ve();try{return uu(o,d,p,m)}catch(x){if(be(y),x!==x+0)throw x;return $e(1,0),0n}}function Cb(o,d,p){var m=ve();try{return du(o,d,p)}catch(y){if(be(m),y!==y+0)throw y;$e(1,0)}}function kb(o,d,p,m,y,x,I,R,D,H,re,de){var xe=ve();try{pu(o,d,p,m,y,x,I,R,D,H,re,de)}catch(Le){if(be(xe),Le!==Le+0)throw Le;$e(1,0)}}function Ib(o,d,p,m,y,x,I,R,D,H,re){var de=ve();try{lu(o,d,p,m,y,x,I,R,D,H,re)}catch(xe){if(be(de),xe!==xe+0)throw xe;$e(1,0)}}function Eb(o,d,p,m,y,x,I,R,D,H,re){var de=ve();try{return gu(o,d,p,m,y,x,I,R,D,H,re)}catch(xe){if(be(de),xe!==xe+0)throw xe;$e(1,0)}}function zb(o,d,p,m){var y=ve();try{return _u(o,d,p,m)}catch(x){if(be(y),x!==x+0)throw x;$e(1,0)}}function Ab(o,d,p,m){var y=ve();try{return bu(o,d,p,m)}catch(x){if(be(y),x!==x+0)throw x;$e(1,0)}}function Ob(o,d,p,m){var y=ve();try{return wu(o,d,p,m)}catch(x){if(be(y),x!==x+0)throw x;$e(1,0)}}function Rb(o,d,p,m,y,x,I,R,D,H,re,de,xe,Le){var kt=ve();try{vu(o,d,p,m,y,x,I,R,D,H,re,de,xe,Le)}catch(fi){if(be(kt),fi!==fi+0)throw fi;$e(1,0)}}function Mb(o,d,p,m,y){var x=ve();try{$u(o,d,p,m,y)}catch(I){if(be(x),I!==I+0)throw I;$e(1,0)}}function Bb(o,d,p){var m=ve();try{xu(o,d,p)}catch(y){if(be(m),y!==y+0)throw y;$e(1,0)}}function Db(o,d){var p=ve();try{return ru(o,d)}catch(m){if(be(p),m!==m+0)throw m;return $e(1,0),0n}}function Nb(o,d,p,m,y){var x=ve();try{return Tu(o,d,p,m,y)}catch(I){if(be(x),I!==I+0)throw I;$e(1,0)}}function Pb(o,d,p,m,y,x,I,R,D,H,re,de,xe){var Le=ve();try{ku(o,d,p,m,y,x,I,R,D,H,re,de,xe)}catch(kt){if(be(Le),kt!==kt+0)throw kt;$e(1,0)}}function Ub(o,d,p,m){var y=ve();try{return Iu(o,d,p,m)}catch(x){if(be(y),x!==x+0)throw x;$e(1,0)}}function Wb(o,d,p,m,y){var x=ve();try{return Eu(o,d,p,m,y)}catch(I){if(be(x),I!==I+0)throw I;return $e(1,0),0n}}function Lb(o,d,p,m,y){var x=ve();try{zu(o,d,p,m,y)}catch(I){if(be(x),I!==I+0)throw I;$e(1,0)}}function Vb(o,d,p,m,y){var x=ve();try{return Au(o,d,p,m,y)}catch(I){if(be(x),I!==I+0)throw I;$e(1,0)}}function qb(o,d,p,m,y){var x=ve();try{Ou(o,d,p,m,y)}catch(I){if(be(x),I!==I+0)throw I;$e(1,0)}}function Fb(o,d,p,m,y){var x=ve();try{return Ru(o,d,p,m,y)}catch(I){if(be(x),I!==I+0)throw I;$e(1,0)}}function Hb(o,d,p,m,y){var x=ve();try{Mu(o,d,p,m,y)}catch(I){if(be(x),I!==I+0)throw I;$e(1,0)}}function Gb(o,d,p,m,y,x,I){var R=ve();try{return Bu(o,d,p,m,y,x,I)}catch(D){if(be(R),D!==D+0)throw D;$e(1,0)}}function jb(o,d,p,m,y,x,I){var R=ve();try{return Du(o,d,p,m,y,x,I)}catch(D){if(be(R),D!==D+0)throw D;$e(1,0)}}return i.stackSave=()=>ve(),i.stackRestore=o=>be(o),i.stackAlloc=o=>ha(o),i.setValue=function(o,d,p="i8"){switch(p.endsWith("*")&&(p="*"),p){case"i1":case"i8":N()[o>>>0]=d;break;case"i16":Ce()[o>>>1>>>0]=d;break;case"i32":W()[o>>>2>>>0]=d;break;case"i64":fe[o>>>3]=BigInt(d);break;case"float":it()[o>>>2>>>0]=d;break;case"double":et()[o>>>3>>>0]=d;break;case"*":Ee()[o>>>2>>>0]=d;break;default:F(`invalid type for setValue: ${p}`)}},i.getValue=function(o,d="i8"){switch(d.endsWith("*")&&(d="*"),d){case"i1":case"i8":return N()[o>>>0];case"i16":return Ce()[o>>>1>>>0];case"i32":return W()[o>>>2>>>0];case"i64":return fe[o>>>3];case"float":return it()[o>>>2>>>0];case"double":return et()[o>>>3>>>0];case"*":return Ee()[o>>>2>>>0];default:F(`invalid type for getValue: ${d}`)}},i.UTF8ToString=Qe,i.stringToUTF8=jr,i.lengthBytesUTF8=Xo,function o(){if(0<P)j=o;else if(c)n(i),E();else{for(;0<pe.length;)pe.shift()(i);0<P?j=o:(i.calledRun=!0,ee||(E(),n(i)))}}(),i.PTR_SIZE=4,s}),vm=Ma,yd=(t=(e=globalThis.self)==null?void 0:e.name)==null?void 0:t.startsWith("em-pthread"),yd&&Ma()}),Ba,_d,wt,$m,un,bd,wd,Da,vd,Na,xm,Pa,Sm,_o=K(()=>{yo(),Ba=typeof location>"u"?void 0:location.origin,_d=()=>{var e;return(e=import.meta.url)!=null&&e.startsWith("file:")?new URL(new URL("/assets/ort.bundle.min-OfoG_cy9.mjs",import.meta.url).href,Ba).href:import.meta.url},wt=_d(),$m=()=>{if(wt&&!wt.startsWith("blob:"))return wt.substring(0,wt.lastIndexOf("/")+1)},un=(e,t)=>{try{let r=t??wt;return(r?new URL(e,r):new URL(e)).origin===Ba}catch{return!1}},bd=(e,t)=>{let r=t??wt;try{return(r?new URL(e,r):new URL(e)).href}catch{return}},wd=(e,t)=>`${t??"./"}${e}`,Da=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},vd=async e=>(await import(e)).default,Na=(q$(),Mn(_m)).default,xm=async()=>{if(!wt)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(un(wt))return[void 0,Na()];let e=await Da(wt);return[e,Na(e)]},Pa=(F$(),Mn(wm)).default,Sm=async(e,t,r)=>{if(!e&&!t&&Pa&&wt&&un(wt))return[void 0,Pa];{let n="ort-wasm-simd-threaded.jsep.mjs",a=e??bd(n,t),i=r&&a&&!un(a,t),s=i?await Da(a):a??wd(n,t);return[i?s:void 0,await vd(s)]}}}),Ua,dn,yi,Wa,$d,xd,bo,Je,Fr=K(()=>{_o(),dn=!1,yi=!1,Wa=!1,$d=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},xd=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},bo=async e=>{if(dn)return Promise.resolve();if(yi)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(Wa)throw new Error("previous call to 'initializeWebAssembly()' failed.");yi=!0;let t=e.initTimeout,r=e.numThreads;if(!xd())throw new Error("WebAssembly SIMD is not supported in the current environment.");let n=$d();r>1&&!n&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+r+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=r=1);let a=e.wasmPaths,i=typeof a=="string"?a:void 0,s=a==null?void 0:a.mjs,l=(s==null?void 0:s.href)??s,u=a==null?void 0:a.wasm,c=(u==null?void 0:u.href)??u,f=e.wasmBinary,[h,g]=await Sm(l,i,r>1),_=!1,b=[];if(t>0&&b.push(new Promise(w=>{setTimeout(()=>{_=!0,w()},t)})),b.push(new Promise((w,S)=>{let $={numThreads:r};if(f)$.wasmBinary=f;else if(c||i)$.locateFile=v=>c??i+v;else if(l&&l.indexOf("blob:")!==0)$.locateFile=v=>new URL(v,l).href;else if(h){let v=$m();v&&($.locateFile=C=>v+C)}g($).then(v=>{yi=!1,dn=!0,Ua=v,w(),h&&URL.revokeObjectURL(h)},v=>{yi=!1,Wa=!0,S(v)})})),await Promise.race(b),_)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},Je=()=>{if(dn&&Ua)return Ua;throw new Error("WebAssembly is not initialized yet.")}}),nt,Dn,Be,wo=K(()=>{Fr(),nt=(e,t)=>{let r=Je(),n=r.lengthBytesUTF8(e)+1,a=r._malloc(n);return r.stringToUTF8(e,a,n),t.push(a),a},Dn=(e,t,r,n)=>{if(typeof e=="object"&&e!==null){if(r.has(e))throw new Error("Circular reference in options");r.add(e)}Object.entries(e).forEach(([a,i])=>{let s=t?t+a:a;if(typeof i=="object")Dn(i,s+".",r,n);else if(typeof i=="string"||typeof i=="number")n(s,i.toString());else if(typeof i=="boolean")n(s,i?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof i}`)})},Be=e=>{let t=Je(),r=t.stackSave();try{let n=t.PTR_SIZE,a=t.stackAlloc(2*n);t._OrtGetLastError(a,a+n);let i=Number(t.getValue(a,n===4?"i32":"i64")),s=t.getValue(a+n,"*"),l=s?t.UTF8ToString(s):"";throw new Error(`${e} ERROR_CODE: ${i}, ERROR_MESSAGE: ${l}`)}finally{t.stackRestore(r)}}}),Tm,H$=K(()=>{Fr(),wo(),Tm=e=>{let t=Je(),r=0,n=[],a=e||{};try{if((e==null?void 0:e.logSeverityLevel)===void 0)a.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log serverity level is not valid: ${e.logSeverityLevel}`);if((e==null?void 0:e.logVerbosityLevel)===void 0)a.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);(e==null?void 0:e.terminate)===void 0&&(a.terminate=!1);let i=0;return(e==null?void 0:e.tag)!==void 0&&(i=nt(e.tag,n)),r=t._OrtCreateRunOptions(a.logSeverityLevel,a.logVerbosityLevel,!!a.terminate,i),r===0&&Be("Can't create run options."),(e==null?void 0:e.extra)!==void 0&&Dn(e.extra,"",new WeakSet,(s,l)=>{let u=nt(s,n),c=nt(l,n);t._OrtAddRunConfigEntry(r,u,c)!==0&&Be(`Can't set a run config entry: ${s} - ${l}.`)}),[r,n]}catch(i){throw r!==0&&t._OrtReleaseRunOptions(r),n.forEach(s=>t._free(s)),i}}}),Sd,Td,Cd,kd,Cm,G$=K(()=>{Fr(),wo(),Sd=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},Td=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},Cd=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(r=>(typeof r=="string"?r:r.name)==="webgpu")&&(e.enableMemPattern=!1)},kd=(e,t,r)=>{for(let n of t){let a=typeof n=="string"?n:n.name;switch(a){case"webnn":if(a="WEBNN",typeof n!="string"){let s=n==null?void 0:n.deviceType;if(s){let l=nt("deviceType",r),u=nt(s,r);Je()._OrtAddSessionConfigEntry(e,l,u)!==0&&Be(`Can't set a session config entry: 'deviceType' - ${s}.`)}}break;case"webgpu":if(a="JS",typeof n!="string"){let s=n;if(s!=null&&s.preferredLayout){if(s.preferredLayout!=="NCHW"&&s.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${s.preferredLayout}`);let l=nt("preferredLayout",r),u=nt(s.preferredLayout,r);Je()._OrtAddSessionConfigEntry(e,l,u)!==0&&Be(`Can't set a session config entry: 'preferredLayout' - ${s.preferredLayout}.`)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${a}`)}let i=nt(a,r);Je()._OrtAppendExecutionProvider(e,i)!==0&&Be(`Can't append execution provider: ${a}.`)}},Cm=e=>{let t=Je(),r=0,n=[],a=e||{};Cd(a);try{let i=Sd(a.graphOptimizationLevel??"all"),s=Td(a.executionMode??"sequential"),l=typeof a.logId=="string"?nt(a.logId,n):0,u=a.logSeverityLevel??2;if(!Number.isInteger(u)||u<0||u>4)throw new Error(`log serverity level is not valid: ${u}`);let c=a.logVerbosityLevel??0;if(!Number.isInteger(c)||c<0||c>4)throw new Error(`log verbosity level is not valid: ${c}`);let f=typeof a.optimizedModelFilePath=="string"?nt(a.optimizedModelFilePath,n):0;if(r=t._OrtCreateSessionOptions(i,!!a.enableCpuMemArena,!!a.enableMemPattern,s,!!a.enableProfiling,0,l,u,c,f),r===0&&Be("Can't create session options."),a.executionProviders&&kd(r,a.executionProviders,n),a.enableGraphCapture!==void 0){if(typeof a.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${a.enableGraphCapture}`);let h=nt("enableGraphCapture",n),g=nt(a.enableGraphCapture.toString(),n);t._OrtAddSessionConfigEntry(r,h,g)!==0&&Be(`Can't set a session config entry: 'enableGraphCapture' - ${a.enableGraphCapture}.`)}if(a.freeDimensionOverrides)for(let[h,g]of Object.entries(a.freeDimensionOverrides)){if(typeof h!="string")throw new Error(`free dimension override name must be a string: ${h}`);if(typeof g!="number"||!Number.isInteger(g)||g<0)throw new Error(`free dimension override value must be a non-negative integer: ${g}`);let _=nt(h,n);t._OrtAddFreeDimensionOverride(r,_,g)!==0&&Be(`Can't set a free dimension override: ${h} - ${g}.`)}return a.extra!==void 0&&Dn(a.extra,"",new WeakSet,(h,g)=>{let _=nt(h,n),b=nt(g,n);t._OrtAddSessionConfigEntry(r,_,b)!==0&&Be(`Can't set a session config entry: ${h} - ${g}.`)}),[r,n]}catch(i){throw r!==0&&t._OrtReleaseSessionOptions(r)!==0&&Be("Can't release session options."),n.forEach(s=>t._free(s)),i}}}),Xr,Br,Dr,vo,Nn,$o,xo,Ms,_e=K(()=>{Xr=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},Br=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},Dr=(e,t)=>{let r=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],n=typeof t=="number"?t:t.reduce((a,i)=>a*i,1);return r>0?Math.ceil(n*r):void 0},vo=e=>{switch(e){case"float16":return typeof Float16Array<"u"&&Float16Array.from?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},Nn=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},$o=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",xo=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Ms=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),So,km=K(()=>{yo(),So=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let r=t.headers.get("Content-Length"),n=r?parseInt(r,10):0;if(n<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let a=t.body.getReader(),i;try{i=new ArrayBuffer(n)}catch(l){if(l instanceof RangeError){let u=Math.ceil(n/65536);i=new WebAssembly.Memory({initial:u,maximum:u}).buffer}else throw l}let s=0;for(;;){let{done:l,value:u}=await a.read();if(l)break;let c=u.byteLength;new Uint8Array(i,s,c).set(u),s+=c}return new Uint8Array(i,0,n)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),Id,Ed,zd,Ad,To,Od,Oe,lr=K(()=>{_e(),Id=["V","I","W","E","F"],Ed=(e,t)=>{console.log(`[${Id[e]},${new Date().toISOString()}]${t}`)},To=(e,t)=>{zd=e,Ad=t},Od=(e,t)=>{let r=Nn(e),n=Nn(zd);r>=n&&Ed(r,typeof t=="function"?t():t)},Oe=(...e)=>{Ad&&Od(...e)}}),Co,Im=K(()=>{_e(),Co=(e,t)=>new(vo(t))(e)}),ko=K(()=>{}),La,cn,pn,Rd,Md,Va,Bs,Bd,Em,j$=K(()=>{lr(),ko(),La=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),cn=[],pn=e=>Math.ceil(Number(e)/16)*16,Rd=e=>{for(let t=0;t<cn.length;t++){let r=cn[t];if(e<=r)return r}return Math.ceil(e/16)*16},Md=1,Va=()=>Md++,Bs=async(e,t,r,n)=>{let a=pn(r),i=e.device.createBuffer({size:a,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let s=e.getCommandEncoder();e.endComputePass(),s.copyBufferToBuffer(t,0,i,0,a),e.flush(),await i.mapAsync(GPUMapMode.READ);let l=i.getMappedRange();if(n){let u=n();return u.set(new Uint8Array(l,0,r)),u}else return new Uint8Array(l.slice(0,r))}finally{i.destroy()}},Bd=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of La)cn.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let r=t.buffer,n=t.byteOffset,a=t.byteLength,i=pn(a),s=this.storageCache.get(e);if(!s)throw new Error("gpu data for uploading does not exist");if(Number(s.originalSize)!==a)throw new Error(`inconsistent data size. gpu data size=${s.originalSize}, data size=${a}`);let l=this.backend.device.createBuffer({mappedAtCreation:!0,size:i,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),u=l.getMappedRange();new Uint8Array(u).set(new Uint8Array(r,n,a)),l.unmap();let c=this.backend.device.createCommandEncoder();c.copyBufferToBuffer(l,0,s.gpuData.buffer,0,i),this.backend.device.queue.submit([c.finish()]),l.destroy(),Oe("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let r=this.storageCache.get(e);if(!r)throw new Error("source gpu data for memcpy does not exist");let n=this.storageCache.get(t);if(!n)throw new Error("destination gpu data for memcpy does not exist");if(r.originalSize!==n.originalSize)throw new Error("inconsistent source and destination gpu data size");let a=pn(r.originalSize),i=this.backend.getCommandEncoder();this.backend.endComputePass(),i.copyBufferToBuffer(r.gpuData.buffer,0,n.gpuData.buffer,0,a)}registerExternalBuffer(e,t,r){let n;if(r){if(n=r[0],e===r[1])return Oe("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${n}, buffer is the same, skip.`),n;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else n=Va();return this.storageCache.set(n,{gpuData:{id:n,type:0,buffer:e},originalSize:t}),Oe("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${n}, registered.`),n}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),Oe("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let r=Rd(e),n,a=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,i=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(a||i){let l=(a?this.freeBuffers:this.freeUniformBuffers).get(r);l?l.length>0?n=l.pop():n=this.backend.device.createBuffer({size:r,usage:t}):n=this.backend.device.createBuffer({size:r,usage:t})}else n=this.backend.device.createBuffer({size:r,usage:t});let s={id:Va(),type:0,buffer:n};return this.storageCache.set(s.id,{gpuData:s,originalSize:Number(e)}),Oe("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${s.id}`),s}get(e){var t;return(t=this.storageCache.get(e))==null?void 0:t.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,r=this.storageCache.get(t);if(!r){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return Oe("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${r.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(r.gpuData.buffer),r.originalSize}async download(e,t){let r=this.storageCache.get(Number(e));if(!r)throw new Error("data does not exist");await Bs(this.backend,r.gpuData.buffer,r.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=La.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let r=this.freeBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let r=this.freeUniformBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(r=>{r.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(Oe("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(r=>{r.gpuData.buffer.destroy()}),this.storageCache=new Map)}},Em=(...e)=>new Bd(...e)}),Dd,Ne,Ke=K(()=>{Dd=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},Ne=e=>new Dd(e)}),Nd,oi,M,Pn,zm,Am,Om,Se=K(()=>{Nd=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},oi=class{static calcShape(e,t,r=!1){let n=e.length,a=t.length;if(n===0)return t;if(a===0)return e;let i=Math.max(e.length,t.length),s=new Array(i);if(r){if(n<2||a<2)return;let l=Nd.calcMatMulShape([e[n-2],e[n-1]],[t[a-2],t[a-1]]);if(l===void 0)return;[s[i-2],s[i-1]]=l}for(let l=r?3:1;l<=i;l++){let u=n-l<0?1:e[n-l],c=a-l<0?1:t[a-l];if(u!==c&&u>1&&c>1)return;let f=Math.max(u,c);if(u&&c)s[i-l]=Math.max(u,c);else{if(f>1)return;s[i-l]=0}}return s}static isValidBroadcast(e,t){let r=e.length,n=t.length;if(r>n)return!1;for(let a=1;a<=r;a++)if(e[r-a]!==1&&e[r-a]!==t[n-a])return!1;return!0}},M=class Cn{static size(t){return Cn.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,r=4){let n=t.length;if(n===0)return[];let a=new Array(n),i=n-1;for(;i>=0;){if(t[i]%r===0){a[i]=t[i]/r;break}if(r%t[i]!==0)throw new Error("cannot convert shape");a[i]=1,r/=t[i],i--}for(i--;i>=0;i--)a[i]=t[i];return a}static sizeFromDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return Cn.getSizeFromDimensionRange(t,r,t.length)}static sizeToDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeToDimension as Tensor has ${t.length} dimensions.`);return Cn.getSizeFromDimensionRange(t,0,r)}static getSizeFromDimensionRange(t,r,n){let a=1;for(let i=r;i<n;i++){if(t[i]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");a*=Number(t[i])}return a}static computeStrides(t){let r=t.length;if(r===0)return[];if(r===1)return[1];let n=new Array(r);n[r-1]=1,n[r-2]=t[r-1];for(let a=r-3;a>=0;--a)n[a]=n[a+1]*t[a+1];return n}static normalizeAxis(t,r){if(t<-r&&t>=r)throw new Error("unsupported axis for this operation.");return t<0?t+r:t}static normalizeAxes(t,r){return t.map(n=>this.normalizeAxis(n,r??t.length))}static sortBasedOnPerm(t,r){return r?r.map(n=>t[n]):t.slice().reverse()}static padShape(t,r){let n=t.length;return t.map((a,i)=>a+r[i]+r[i+n])}static areEqual(t,r){return t.length!==r.length?!1:t.every((n,a)=>n===r[a])}},Pn=class Ii{static adjustPoolAttributes(t,r,n,a,i,s){if(!t&&n.length!==r.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let l=0;l<r.length-2;l++)l>=n.length?n.push(r[l+2]):n[l]=r[l+2];for(let l=0;l<n.length;l++)if(l<a.length){if(a[l]<0)throw new Error("strides should be greater than or equal to 1")}else a.push(1);for(let l=0;l<n.length;l++)if(l<i.length){if(i[l]<0)throw new Error("dilations should be greater than or equal to 1")}else i.push(1);for(let l=0;l<n.length*2;l++)if(l<s.length){if(s[l]<0)throw new Error("pad should be greater than or equal to 1")}else s.push(0);for(let l=0;l<n.length;l++){if(n[l]<=0)throw new Error("kernel shapes need to be greater than 0");if(s[l]>=n[l]||s[l+n.length]>=n[l])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,r,n,a,i,s,l){if(l){if(i.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(r.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(a.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let u=0;u<t.length-2;u++)Ii.adjustPadAndReturnShape(t[u+(s?1:2)],r[u],n[u],a[u],i,u,u+t.length-2,l)}}static computePoolOutputShape(t,r,n,a,i,s,l){if(r.length<=0)throw new Error("input shape must be of size greater than 0");let u=[r[0],r[1]];return Ii.computeShapeHelper(t,r,u,n,a,i,s,l),u}static computeConvOutputShape(t,r,n,a,i,s,l){if(t.length<=0||r.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let u=[t[0],r[0]];return Ii.computeShapeHelper(!1,t,u,n,a,i,s,l),u}static computeShapeHelper(t,r,n,a,i,s,l,u){if(t)for(let c=0;c<r.length-2;c++)n.push(1);else for(let c=0;c<r.length-2;c++)n.push(Ii.adjustPadAndReturnShape(r[c+2],a[c],i[c],s[c],l,c,c+r.length-2,u))}static adjustPadAndReturnShape(t,r,n,a,i,s,l,u){let c=n*(a-1)+1;if(u&&u!=="NOTSET")switch(u){case"VALID":return i[s]=0,i[l]=0,Math.floor((t-c)/r+1);case"SAME_LOWER":case"SAME_UPPER":if(n!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let f=((t+r-1)/r-1)*r+a-t;return i[s]=Math.floor(u==="SAME_LOWER"?(f+1)/2:f/2),i[l]=f-i[s],Math.floor((t+f-a)/r+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+i[s]+i[l]-c)/r+1)}},zm=class{static getShapeOfGemmResult(e,t,r,n,a){if(e.length!==2||r.length!==2)throw new Error("shape need to be of size 2");let i,s,l;t?(i=e[1],s=e[0]):(i=e[0],s=e[1]);let u=-1;if(n?(l=r[0],u=1):(l=r[1],u=0),r[u]!==s)throw new Error("dimension mismatch");if(i<=0||l<=0||s<=0)throw new Error("invalid shape specified");if(a&&!oi.isValidBroadcast(a,[i,l]))throw new Error("gemm: invalid bias shape for broadcast");return[i,l,s]}},Am=-34028234663852886e22,Om=34028234663852886e22}),li,fn,Ye,lt,oe,Ge,Ds,ei,$r,ae,_i,U,ne,Rm,Io,Pd,Mm,Te=K(()=>{_e(),Se(),li=64,fn=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},Ye=(e,t=1)=>{let r=fn(e,t);return typeof r=="string"?r:r[0]},lt=(e,t=1)=>{let r=fn(e,t);return typeof r=="string"?r:r[1]},oe=(...e)=>{let t=[];return e.forEach(r=>{r.length!==0&&t.push({type:12,data:r},{type:12,data:M.computeStrides(r)})}),t},Ge=e=>e%4===0?4:e%2===0?2:1,Ds=(e="f32",t,r="0")=>!t||t===1?`${e}(${r})`:`vec${t}<${e}>(${r})`,ei=(e,t,r)=>e==="f32"?r:t===1?`f32(${r})`:`vec${t}<f32>(${r})`,$r=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,ae=(e,t,r,n)=>e.startsWith("uniforms.")&&r>4?typeof t=="string"?n==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:n==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:r>1?`${e}[${t}]`:e,_i=(e,t,r,n,a)=>{let i=typeof r=="number",s=i?r:r.length,l=[...new Array(s).keys()],u=s<2?"u32":s<=4?`vec${s}<u32>`:`array<u32, ${s}>`,c=fn(t,a),f=typeof c=="string"?c:c[1],h=typeof c=="string"?c:c[0],g={indices:u,value:f,storage:h,tensor:t},_=N=>typeof N=="string"?N:`${N}u`,b={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},w=i?"uniforms.":"",S=`${w}${e}_shape`,$=`${w}${e}_strides`,v="";for(let N=0;N<s-1;N++)v+=`
    let dim${N} = current / ${ae($,N,s)};
    let rest${N} = current % ${ae($,N,s)};
    indices[${N}] = dim${N};
    current = rest${N};
    `;v+=`indices[${s-1}] = current;`;let C=s<2?"":`
  fn o2i_${e}(offset: u32) -> ${g.indices} {
    var indices: ${g.indices};
    var current = offset;
    ${v}
    return indices;
  }`,T=N=>(b.offsetToIndices=!0,s<2?N:`o2i_${e}(${N})`),k=[];if(s>=2)for(let N=s-1;N>=0;N--)k.push(`${ae($,N,s)} * (indices[${N}])`);let A=s<2?"":`
  fn i2o_${e}(indices: ${g.indices}) -> u32 {
    return ${k.join("+")};
  }`,O=N=>(b.indicesToOffset=!0,s<2?N:`i2o_${e}(${N})`),B=(...N)=>s===0?"0u":`${g.indices}(${N.map(_).join(",")})`,q=(N,V)=>s<2?`${N}`:`${ae(N,V,s)}`,X=(N,V,Ce)=>s<2?`${N}=${Ce};`:`${ae(N,V,s)}=${Ce};`,ce={},ge=(N,V)=>{b.broadcastedIndicesToOffset=!0;let Ce=`${V.name}broadcastedIndicesTo${e}Offset`;if(Ce in ce)return`${Ce}(${N})`;let We=[];for(let W=s-1;W>=0;W--){let Ee=V.indicesGet("outputIndices",W+V.rank-s);We.push(`${q($,W)} * (${Ee} % ${q(S,W)})`)}return ce[Ce]=`fn ${Ce}(outputIndices: ${V.type.indices}) -> u32 {
             return ${We.length>0?We.join("+"):"0u"};
           }`,`${Ce}(${N})`},se=(N,V)=>(()=>{if(g.storage===g.value)return`${e}[${N}]=${V};`;if(g.storage==="vec2<u32>"&&g.value==="i32")return`${e}[${N}]=vec2<u32>(u32(${V}), select(0u, 0xFFFFFFFFu, ${V} < 0));`;if(g.storage==="vec2<u32>"&&g.value==="u32")return`${e}[${N}]=vec2<u32>(u32(${V}), 0u);`;if(g.storage==="u32"&&g.value==="vec4<bool>")return`${e}[${N}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${V}));`;throw new Error(`not supported combination of storage type ${g.storage} and value type ${g.value} yet`)})(),he=N=>(()=>{if(g.storage===g.value)return`${e}[${N}]`;if(g.storage==="vec2<u32>"&&g.value==="i32")return`i32(${e}[${N}].x)`;if(g.storage==="vec2<u32>"&&g.value==="u32")return`u32(${e}[${N}].x)`;if(g.storage==="u32"&&g.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${N}] & 0xFFu), bool(${e}[${N}] & 0xFF00u), bool(${e}[${N}] & 0xFF0000u), bool(${e}[${N}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${g.storage} and value type ${g.value} yet`)})(),fe=s<2?"":`
  fn get_${e}ByIndices(indices: ${g.indices}) -> ${f} {
    return ${he(`i2o_${e}(indices)`)};
  }`,Q=s<2?"":(()=>{let N=l.map(Ce=>`d${Ce}: u32`).join(", "),V=l.map(Ce=>`d${Ce}`).join(", ");return`
  fn get_${e}(${N}) -> ${f} {
    return get_${e}ByIndices(${B(V)});
  }`})(),le=(...N)=>{if(N.length!==s)throw new Error(`indices length must be ${s}`);let V=N.map(_).join(",");return s===0?he("0u"):s===1?he(V[0]):(b.get=!0,b.getByIndices=!0,b.indicesToOffset=!0,`get_${e}(${V})`)},ue=N=>s<2?he(N):(b.getByIndices=!0,b.indicesToOffset=!0,`get_${e}ByIndices(${N})`),ee=s<2?"":`
  fn set_${e}ByIndices(indices: ${g.indices}, value: ${f}) {
    ${se(`i2o_${e}(indices)`,"value")}
  }`,Ae=s<2?"":(()=>{let N=l.map(Ce=>`d${Ce}: u32`).join(", "),V=l.map(Ce=>`d${Ce}`).join(", ");return`
  fn set_${e}(${N}, value: ${f}) {
    set_${e}ByIndices(${B(V)}, value);
  }`})();return{impl:()=>{let N=[],V=!1;return b.offsetToIndices&&(N.push(C),V=!0),b.indicesToOffset&&(N.push(A),V=!0),b.broadcastedIndicesToOffset&&(Object.values(ce).forEach(Ce=>N.push(Ce)),V=!0),b.set&&(N.push(Ae),V=!0),b.setByIndices&&(N.push(ee),V=!0),b.get&&(N.push(Q),V=!0),b.getByIndices&&(N.push(fe),V=!0),!i&&V&&N.unshift(`const ${S} = ${g.indices}(${r.join(",")});`,`const ${$} = ${g.indices}(${M.computeStrides(r).join(",")});`),N.join(`
`)},type:g,offsetToIndices:T,indicesToOffset:O,broadcastedIndicesToOffset:ge,indices:B,indicesGet:q,indicesSet:X,set:(...N)=>{if(N.length!==s+1)throw new Error(`indices length must be ${s}`);let V=N[s];if(typeof V!="string")throw new Error("value must be string");let Ce=N.slice(0,s).map(_).join(",");return s===0?se("0u",V):s===1?se(Ce[0],V):(b.set=!0,b.setByIndices=!0,b.indicesToOffset=!0,`set_${e}(${Ce}, ${V})`)},setByOffset:se,setByIndices:(N,V)=>s<2?se(N,V):(b.setByIndices=!0,b.indicesToOffset=!0,`set_${e}ByIndices(${N}, ${V});`),get:le,getByOffset:he,getByIndices:ue,usage:n,name:e,strides:$,shape:S,rank:s}},U=(e,t,r,n=1)=>_i(e,t,r,"input",n),ne=(e,t,r,n=1)=>_i(e,t,r,"output",n),Rm=(e,t,r)=>_i(e,t,r,"atomicOutput",1),Io=(e,t,r,n=1)=>_i(e,t,r,"internal",n),Pd=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=li){let t=typeof e=="number"?e:e[0],r=typeof e=="number"?1:e[1],n=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||r>this.limits.maxComputeWorkgroupSizeY||n>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${r}, ${n}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*r*n>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${r}, ${n}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let a=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,i=a?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`,s=a?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${t*r*n}u + local_idx;`;return`@compute @workgroup_size(${t}, ${r}, ${n})
  fn main(${i}) {
    ${s}
  `}appendVariableUniforms(e){e.rank!==0&&(e.shape.startsWith("uniforms.")&&this.uniforms.push({name:e.shape.replace("uniforms.",""),type:"u32",length:e.rank}),e.strides.startsWith("uniforms.")&&this.uniforms.push({name:e.strides.replace("uniforms.",""),type:"u32",length:e.rank}))}declareVariable(e,t){if(e.usage==="internal")throw new Error("cannot use internal variable with declareVariable(). use registerInternalVariables() instead.");this.variables.push(e),this.appendVariableUniforms(e);let r=e.usage==="input"?"read":"read_write",n=e.usage==="atomicOutput"?"atomic<i32>":e.type.storage;return`@group(0) @binding(${t}) var<storage, ${r}> ${e.name}: array<${n}>;`}declareVariables(...e){return e.map(t=>this.declareVariable(t,this.variableIndex++)).join(`
`)}registerInternalVariable(e){if(e.usage!=="internal")throw new Error("cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.");this.internalVariables.push(e),this.appendVariableUniforms(e)}registerInternalVariables(...e){return e.forEach(t=>this.registerInternalVariable(t)),this}registerUniform(e,t,r=1){return this.uniforms.push({name:e,type:t,length:r}),this}registerUniforms(e){return this.uniforms=this.uniforms.concat(e),this}uniformDeclaration(){if(this.uniforms.length===0)return"";let e=[];for(let{name:t,type:r,length:n}of this.uniforms)if(n&&n>4)r==="f16"?e.push(`@align(16) ${t}:array<mat2x4<${r}>, ${Math.ceil(n/8)}>`):e.push(`${t}:array<vec4<${r}>, ${Math.ceil(n/4)}>`);else{let a=n==null||n===1?r:`vec${n}<${r}>`;e.push(`${t}:${a}`)}return`
      struct Uniforms { ${e.join(", ")} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(e=>e.impl()).join(`
`)+this.internalVariables.map(e=>e.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},Mm=(e,t)=>new Pd(e,t)}),Ud,qa,Wd,Ld,Vd,qd,Tt,Bm,Dm,Cr=K(()=>{_e(),Se(),Ke(),Te(),Ud=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},qa=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),Wd=(e,t)=>M.sortBasedOnPerm(e,qa(e.length,t)),Ld=(e,t,r,n)=>{let a=`fn perm(i: ${n.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`;for(let i=0;i<t;++i)a+=`a[${e[i]}]=i[${i}];`;return a+="return a;}"},Vd=(e,t)=>{let r=[],n=[];for(let a=0;a<e.length;++a)e[a]!==1&&r.push(e[a]),e[t[a]]!==1&&n.push(t[a]);return{newShape:r,newPerm:n}},qd=(e,t)=>{let r=0;for(let n=0;n<e.length;++n)if(t[e[n]]!==1){if(e[n]<r)return!1;r=e[n]}return!0},Tt=(e,t)=>{let r=e.dataType,n=e.dims.length,a=qa(n,t),i=Wd(e.dims,a),s=e.dims,l=i,u=n<2||qd(a,e.dims),c;if(u)return c=b=>{let w=U("input",r,s,4),S=ne("output",r,l,4);return`
  ${b.registerUniform("output_size","u32").declareVariables(w,S)}
  ${b.mainStart()}
    ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let b=M.size(i);return{outputs:[{dims:i,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(b/64/4)},programUniforms:[{type:12,data:Math.ceil(b/4)}]}},getShaderSource:c};let{newShape:f,newPerm:h}=Vd(e.dims,a),g=M.areEqual(h,[2,3,1]),_=M.areEqual(h,[3,1,2]);if(f.length===2||g||_){s=g?[f[0],f[1]*f[2]]:_?[f[0]*f[1],f[2]]:f,l=[s[1],s[0]];let b=16;return c=w=>{let S=U("a",r,s.length),$=ne("output",r,l.length);return`
  ${w.registerUniform("output_size","u32").declareVariables(S,$)}
  var<workgroup> tile : array<array<${$.type.value}, ${b+1}>, ${b}>;
  ${w.mainStart([b,b,1])}
    let stride = (uniforms.output_shape[1] - 1) / ${b} + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * ${b}u + local_id.x;
    let input_row = workgroup_id_x * ${b}u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${S.getByIndices(`${S.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * ${b}u + local_id.x;
    let output_row = workgroup_id_y * ${b}u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${$.setByIndices(`${$.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let w=M.size(i);return{outputs:[{dims:i,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(l[1]/b),y:Math.ceil(l[0]/b)},programUniforms:[{type:12,data:w},...oe(s,l)]}},getShaderSource:c}}return c=b=>{let w=U("a",r,s.length),S=ne("output",r,l.length);return`
  ${b.registerUniform("output_size","u32").declareVariables(w,S)}

  ${Ld(a,n,w,S)}

  ${b.mainStart()}
    ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${S.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${S.setByOffset("global_idx",w.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let b=M.size(i);return{outputs:[{dims:i,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(b/64)},programUniforms:[{type:12,data:b},...oe(s,l)]}},getShaderSource:c}},Bm=(e,t)=>{Ud(e.inputs,t.perm),e.compute(Tt(e.inputs[0],t.perm))},Dm=e=>Ne({perm:e.perm})}),Fd,Hd,Gd,jd,Kd,Qd,Zd,Xd,Jd,Yd,zt,Nm,Pm,Um,Wm,Lm,Vm,qm,Fm,Hm,Gm,K$=K(()=>{_e(),Se(),Te(),Eo(),Cr(),Fd={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},Hd={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},Gd={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},jd={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},Kd=(e,t)=>{let r=[];for(let n=t-e;n<t;++n)r.push(n);return r},Qd=(e,t)=>{let r=[],n=e.length;for(let i=0;i<n;i++)t.indexOf(i)===-1&&r.push(e[i]);let a=t.map(i=>e[i]);return[r,a]},Zd=(e,t)=>{let r=e.length+t.length,n=[],a=0;for(let i=0;i<r;i++)t.indexOf(i)===-1?n.push(e[a++]):n.push(1);return n},Xd=(e,t)=>{for(let r=0;r<e.length;++r)if(e[e.length-r-1]!==t-1-r)return!1;return!0},Jd=(e,t)=>{let r=[];if(!Xd(e,t)){for(let n=0;n<t;++n)e.indexOf(n)===-1&&r.push(n);e.forEach(n=>r.push(n))}return r},Yd=(e,t,r,n,a,i,s)=>{let l=r[0].dims,u=M.size(i),c=M.size(s),f=U("_A",r[0].dataType,l),h=ne("output",a,i),g=64;u===1&&(g=256);let _=`
          var<workgroup> aBestValues : array<f32, ${g}>;
       `,b=w=>`
        ${w.registerUniform("reduceSize","u32").declareVariables(f,h)}
        ${_}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${w.mainStart(g)}

          let outputIndex = global_idx / ${g};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${Gd[n]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${g}) {
           let candidate = f32(${f.getByOffset("offset + k")});
           bestValue = ${Fd[n]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${g}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${Hd[n]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${h.setByOffset("outputIndex",`${n==="mean"?`${h.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${h.type.storage}(${jd[n]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${g}`,inputDependencies:["type"]},getShaderSource:b,getRunData:()=>({outputs:[{dims:i,dataType:a}],dispatchGroup:{x:u},programUniforms:[{type:12,data:c}]})}},zt=(e,t,r,n)=>{let a=e.inputs.length===1?r:Ns(e.inputs,r),i=a.axes;i.length===0&&!a.noopWithEmptyAxes&&(i=e.inputs[0].dims.map((_,b)=>b));let s=M.normalizeAxes(i,e.inputs[0].dims.length),l=s,u=e.inputs[0],c=Jd(l,e.inputs[0].dims.length);c.length>0&&(u=e.compute(Tt(e.inputs[0],c),{inputs:[0],outputs:[-1]})[0],l=Kd(l.length,u.dims.length));let[f,h]=Qd(u.dims,l),g=f;a.keepDims&&(g=Zd(f,s)),e.compute(Yd(t,a.cacheKey,[u],n,e.inputs[0].dataType,g,h),{inputs:[u]})},Nm=(e,t)=>{zt(e,"ReduceMeanShared",t,"mean")},Pm=(e,t)=>{zt(e,"ReduceL1Shared",t,"l1")},Um=(e,t)=>{zt(e,"ReduceL2Shared",t,"l2")},Wm=(e,t)=>{zt(e,"ReduceLogSumExpShared",t,"logSumExp")},Lm=(e,t)=>{zt(e,"ReduceMaxShared",t,"max")},Vm=(e,t)=>{zt(e,"ReduceMinShared",t,"min")},qm=(e,t)=>{zt(e,"ReduceProdShared",t,"prod")},Fm=(e,t)=>{zt(e,"ReduceSumShared",t,"sum")},Hm=(e,t)=>{zt(e,"ReduceSumSquareShared",t,"sumSquare")},Gm=(e,t)=>{zt(e,"ReduceLogSumShared",t,"logSum")}}),At,ec,Un,Ns,Ot,tc,rc,ic,nc,ac,sc,oc,lc,uc,dc,Rt,jm,Km,Qm,Zm,Xm,Jm,Ym,eg,tg,rg,Eo=K(()=>{_e(),Se(),Ke(),Te(),K$(),At=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},ec=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],Un=(e,t,r,n,a,i,s=!1,l=!1)=>{let u=[],c=r[0].dims,f=c.length,h=M.normalizeAxes(a,f),g=!l&&h.length===0;c.forEach((w,S)=>{g||h.indexOf(S)>=0?s&&u.push(1):u.push(w)});let _=u.length,b=M.size(u);return{name:e,shaderCache:t,getShaderSource:w=>{let S=[],$=U("_A",r[0].dataType,f),v=ne("output",i,_),C=n($,v,h),T=C[2];for(let k=0,A=0;k<f;k++)g||h.indexOf(k)>=0?(s&&A++,T=`for(var j${k}: u32 = 0; j${k} < ${c[k]}; j${k}++) {
                  ${C[2].includes("last_index")?`let last_index = j${k};`:""}
                  ${$.indicesSet("input_indices",k,`j${k}`)}
                  ${T}
                }`):(S.push(`${$.indicesSet("input_indices",k,v.indicesGet("output_indices",A))};`),A++);return`

        ${w.registerUniform("output_size","u32").declareVariables($,v)}

        ${w.mainStart()}
          ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${$.type.indices};
          let output_indices = ${v.offsetToIndices("global_idx")};

          ${S.join(`
`)}
          ${C[0]}       // init ops for reduce max/min
          ${C[1]}
          ${T}
          ${C[3]}
          ${C.length===4?v.setByOffset("global_idx","value"):C.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:u,dataType:i}],dispatchGroup:{x:Math.ceil(b/64)},programUniforms:[{type:12,data:b},...oe(c,u)]})}},Ns=(e,t)=>{let r=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(n=>r.push(Number(n))),Ne({axes:r,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},Ot=(e,t,r,n)=>{let a=e.inputs,i=a.length===1?r:Ns(a,r);e.compute(Un(t,{hint:i.cacheKey,inputDependencies:["rank"]},[a[0]],i.noopWithEmptyAxes&&i.axes.length===0?ec:n,i.axes,a[0].dataType,i.keepDims,i.noopWithEmptyAxes),{inputs:[0]})},tc=(e,t)=>{At(e.inputs),Ot(e,"ReduceLogSum",t,(r,n)=>[`var value = ${n.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,"value = log(value);"])},rc=(e,t)=>{At(e.inputs),Ot(e,"ReduceL1",t,(r,n)=>[`var value = ${n.type.storage}(0);`,"",`value += abs(${r.getByIndices("input_indices")});`,""])},ic=(e,t)=>{At(e.inputs),Ot(e,"ReduceL2",t,(r,n)=>[`var t = ${n.type.value}(0); var value = ${n.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},nc=(e,t)=>{At(e.inputs),Ot(e,"ReduceLogSumExp",t,(r,n)=>[`var value = ${n.type.storage}(0);`,"",`value += exp(${r.getByIndices("input_indices")});`,"value = log(value);"])},ac=(e,t)=>{At(e.inputs),Ot(e,"ReduceMax",t,(r,n,a)=>{let i=[];for(let s=0;s<r.rank;s++)(a.indexOf(s)>=0||a.length===0)&&i.push(r.indicesSet("input_indices",s,0));return[`${i.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = max(value, ${r.getByIndices("input_indices")});`,""]})},sc=(e,t)=>{At(e.inputs),Ot(e,"ReduceMean",t,(r,n,a)=>{let i=1;for(let s=0;s<r.rank;s++)(a.indexOf(s)>=0||a.length===0)&&(i*=e.inputs[0].dims[s]);return["var sum = f32(0);","",`sum += f32(${r.getByIndices("input_indices")});`,`let value = ${n.type.value}(sum / ${i});`]})},oc=(e,t)=>{At(e.inputs),Ot(e,"ReduceMin",t,(r,n,a)=>{let i=[];for(let s=0;s<r.rank;s++)(a.indexOf(s)>=0||a.length===0)&&i.push(`input_indices[${s}] = 0;`);return[`${i.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = min(value, ${r.getByIndices("input_indices")});`,""]})},lc=(e,t)=>{At(e.inputs),Ot(e,"ReduceProd",t,(r,n)=>[`var value = ${n.type.storage}(1);`,"",`value *= ${r.getByIndices("input_indices")};`,""])},uc=(e,t)=>{At(e.inputs),Ot(e,"ReduceSum",t,(r,n)=>[`var value = ${n.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,""])},dc=(e,t)=>{At(e.inputs),Ot(e,"ReduceSumSquare",t,(r,n)=>[`var t = ${n.type.value}(0); var value = ${n.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += t * t;`,""])},Rt=(e,t,r)=>{if(t.length===0)return r;let n=1,a=1;for(let i=0;i<t.length;i++)t.indexOf(i)===-1?n*=e[i]:a*=e[i];return a<32&&n>1024},jm=(e,t)=>{Rt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?sc(e,t):Nm(e,t)},Km=(e,t)=>{Rt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?rc(e,t):Pm(e,t)},Qm=(e,t)=>{Rt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?ic(e,t):Um(e,t)},Zm=(e,t)=>{Rt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?nc(e,t):Wm(e,t)},Xm=(e,t)=>{Rt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?ac(e,t):Lm(e,t)},Jm=(e,t)=>{Rt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?oc(e,t):Vm(e,t)},Ym=(e,t)=>{Rt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?lc(e,t):qm(e,t)},eg=(e,t)=>{Rt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?uc(e,t):Fm(e,t)},tg=(e,t)=>{Rt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?dc(e,t):Hm(e,t)},rg=(e,t)=>{Rt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?tc(e,t):Gm(e,t)}}),Fa,ig,ng,Ps,Q$=K(()=>{_e(),Ke(),Eo(),Fa=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},ig=(e,t)=>{Fa(e.inputs);let r=(n,a,i)=>{let s=[];for(let l=0;l<n.rank;l++)(i.indexOf(l)>=0||i.length===0)&&s.push(`input_indices[${l}] = 0;`);return[`${s.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${n.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${n.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",a.setByOffset("global_idx","best_index")]};e.compute(Un("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},ng=(e,t)=>{Fa(e.inputs);let r=(n,a,i)=>{let s=[];for(let l=0;l<n.rank;l++)(i.indexOf(l)>=0||i.length===0)&&s.push(`input_indices[${l}] = 0;`);return[`${s.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${n.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${n.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",a.setByOffset("global_idx","best_index")]};e.compute(Un("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},Ps=e=>Ne(e)}),cc,hn,pc,fc,hc,qi,mc,ag,zo=K(()=>{_e(),Se(),ko(),Te(),cc=(e,t)=>{let r=e[0],n=e[1],a=e[2],i=e[3],s=e[4],l=e[5];if(s&&l)throw new Error("Attention cannot have both past and attention_bias");if(r.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let u=r.dims[0],c=r.dims[1],f=r.dims[2];if(a.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(n.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(n.dims[0]!==f)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(a.dims[0]!==n.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let h=a.dims[0]/3,g=h,_=g;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let C of t.qkvHiddenSizes)if(C%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");h=t.qkvHiddenSizes[0],g=t.qkvHiddenSizes[1],_=t.qkvHiddenSizes[2]}let b=c;if(h!==g)throw new Error("qkv_hidden_sizes first element should be same as the second");if(a.dims[0]!==h+g+_)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let w=0;if(s){if(g!==_)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(s.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(s.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(s.dims[1]!==u)throw new Error('Input "past" second dimension must be batch_size');if(s.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(s.dims[4]!==g/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(w=s.dims[3])}let S=b+w,$=-1,v=0;if(i)throw new Error("Mask not supported");if(s)throw new Error("past is not supported");if(l){if(l.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(l.dims[0]!==u||l.dims[1]!==t.numHeads||l.dims[2]!==c||l.dims[3]!==S)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:u,sequenceLength:c,pastSequenceLength:w,kvSequenceLength:b,totalSequenceLength:S,maxSequenceLength:$,inputHiddenSize:f,hiddenSize:h,vHiddenSize:_,headSize:Math.floor(h/t.numHeads),vHeadSize:Math.floor(_/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:v,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},hn=(e,t,r)=>t&&e?`
      let total_sequence_length_input = u32(${t.getByOffset("0")});
      let present_sequence_length = max(total_sequence_length_input, uniforms.past_sequence_length);
      let is_subsequent_prompt: bool = sequence_length > 1 && sequence_length != total_sequence_length_input;
      let is_first_prompt: bool = is_subsequent_prompt == false && sequence_length == total_sequence_length_input;
      total_sequence_length = u32(${e==null?void 0:e.getByOffset("batchIdx")}) + 1;
      var past_sequence_length: u32 = 0;
      if (is_first_prompt == false) {
        past_sequence_length = total_sequence_length - sequence_length;
      }
       `:`
    ${r?"let past_sequence_length = uniforms.past_sequence_length":""};
    let present_sequence_length = total_sequence_length;
    `,pc=(e,t,r,n,a,i,s,l)=>{let u=Ge(s?1:i),c=64,f=i/u;f<c&&(c=32);let h=Math.ceil(i/u/c),g=[{type:12,data:t},{type:12,data:r},{type:12,data:n},{type:12,data:a},{type:12,data:f},{type:12,data:h}],_=Ye(e.dataType,u),b=lt(1,u),w=["type"];s&&w.push("type"),l&&w.push("type");let S=$=>{let v=ne("x",e.dataType,e.dims,u),C=[v],T=s?U("seq_lens",s.dataType,s.dims):void 0;T&&C.push(T);let k=l?U("total_sequence_length_input",l.dataType,l.dims):void 0;k&&C.push(k);let A=lt(e.dataType),O=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${c}>;
  var<workgroup> thread_sum: array<f32, ${c}>;
  ${$.registerUniforms(O).declareVariables(...C)}
  ${$.mainStart([c,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${hn(T,k,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${c}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${s?"u32(past_sequence_length + workgroup_id.y + 1)":"total_sequence_length"};
    var thread_max_vector = ${b}(-3.402823e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      thread_max_vector = max(${b}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(u){case 1:return"thread_max_vector";case 2:return"max(thread_max_vector.x, thread_max_vector.y)";case 4:return"max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))";default:throw new Error(`Unsupported components: ${u}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.402823e+38f);
    for (var i = 0u; i < ${c}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${b}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      sum_vector += exp(${b}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(u){case 1:return"sum_vector";case 2:return"sum_vector.x + sum_vector.y";case 4:return"sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w";default:throw new Error(`Unsupported components: ${u}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${c}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        x[offset + i] = ${v.type.value}(${A}(1.0) / ${A}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${b}(x[offset + i]);
        x[offset + i] = ${v.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${s?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${v.type.value}(${A}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${c};${_};${u}`,inputDependencies:w},getShaderSource:S,getRunData:()=>({outputs:[],dispatchGroup:{x:Math.ceil(i/c),y:a,z:t*r},programUniforms:g})}},fc=(e,t,r,n,a,i,s,l,u)=>{let c=s+i.kvSequenceLength,f=[i.batchSize,i.numHeads,i.sequenceLength,c],h=e>1&&n,g=i.kvNumHeads?i.kvNumHeads:i.numHeads,_=h?[i.batchSize,g,c,i.headSize]:void 0,b=i.nReps?i.nReps:1,w=i.scale===0?1/Math.sqrt(i.headSize):i.scale,S=Ge(i.headSize),$=i.headSize/S,v=12,C={x:Math.ceil(c/v),y:Math.ceil(i.sequenceLength/v),z:i.batchSize*i.numHeads},T=[{type:12,data:i.sequenceLength},{type:12,data:$},{type:12,data:c},{type:12,data:i.numHeads},{type:12,data:i.headSize},{type:1,data:w},{type:12,data:s},{type:12,data:i.kvSequenceLength},{type:12,data:b}],k=h&&n&&M.size(n.dims)>0,A=["type","type"];k&&A.push("type"),a&&A.push("type"),l&&A.push("type"),u&&A.push("type");let O=[{dims:f,dataType:t.dataType,gpuDataType:0}];h&&O.push({dims:_,dataType:t.dataType,gpuDataType:0});let B=q=>{let X=U("q",t.dataType,t.dims,S),ce=U("key",r.dataType,r.dims,S),ge=[X,ce];if(k){let ee=U("past_key",n.dataType,n.dims,S);ge.push(ee)}a&&ge.push(U("attention_bias",a.dataType,a.dims));let se=l?U("seq_lens",l.dataType,l.dims):void 0;se&&ge.push(se);let he=u?U("total_sequence_length_input",u.dataType,u.dims):void 0;he&&ge.push(he);let fe=ne("output",t.dataType,f),Q=[fe];h&&Q.push(ne("present_key",t.dataType,_,S));let le=lt(1,S),ue=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${v}u;

  var<workgroup> tileQ: array<${X.type.storage}, ${v*v}>;
  var<workgroup> tileK: array<${X.type.storage}, ${v*v}>;
  ${q.registerUniforms(ue).declareVariables(...ge,...Q)}
  ${q.mainStart([v,v,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${b===1?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${b===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${hn(se,he,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${k&&h?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${h?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${le}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${k&&h?`
              if (n + local_id.y < past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else if (n + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
                tileK[idx] = key[kOffset + (n + local_id.y - past_sequence_length) * uniforms.K + w + local_id.x];
              }`:`
          if (n + local_id.y < uniforms.kv_sequence_length) {
            tileK[idx] = key[kOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
          }`}
      ${h?`if (n + local_id.y < present_sequence_length) {
        present_key[presentKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x] = tileK[idx];
      }`:""}
      }
      workgroupBarrier();

      for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
          value += ${le}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(S){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${S}`)}})()};
        output[outputIdx] = ${fe.type.value} (sum * uniforms.alpha) + ${a?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${S};${a!==void 0};${n!==void 0};${e}`,inputDependencies:A},getRunData:()=>({outputs:O,dispatchGroup:C,programUniforms:T}),getShaderSource:B}},hc=(e,t,r,n,a,i,s=void 0,l=void 0)=>{let u=i+a.kvSequenceLength,c=a.nReps?a.nReps:1,f=a.vHiddenSize*c,h=e>1&&n,g=a.kvNumHeads?a.kvNumHeads:a.numHeads,_=h?[a.batchSize,g,u,a.headSize]:void 0,b=[a.batchSize,a.sequenceLength,f],w=12,S={x:Math.ceil(a.vHeadSize/w),y:Math.ceil(a.sequenceLength/w),z:a.batchSize*a.numHeads},$=[{type:12,data:a.sequenceLength},{type:12,data:u},{type:12,data:a.vHeadSize},{type:12,data:a.numHeads},{type:12,data:a.headSize},{type:12,data:f},{type:12,data:i},{type:12,data:a.kvSequenceLength},{type:12,data:c}],v=h&&n&&M.size(n.dims)>0,C=["type","type"];v&&C.push("type"),s&&C.push("type"),l&&C.push("type");let T=[{dims:b,dataType:t.dataType,gpuDataType:0}];h&&T.push({dims:_,dataType:t.dataType,gpuDataType:0});let k=A=>{let O=U("probs",t.dataType,t.dims),B=U("v",r.dataType,r.dims),q=[O,B];v&&q.push(U("past_value",n.dataType,n.dims));let X=s?U("seq_lens",s.dataType,s.dims):void 0;s&&q.push(X);let ce=l?U("total_sequence_length_input",l.dataType,l.dims):void 0;l&&q.push(ce);let ge=[ne("output",t.dataType,b)];h&&ge.push(ne("present_value",t.dataType,_));let se=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${w}u;
  var<workgroup> tileQ: array<${O.type.value}, ${w*w}>;
  var<workgroup> tileV: array<${O.type.value}, ${w*w}>;
  ${A.registerUniforms(se).declareVariables(...q,...ge)}
  ${A.mainStart([w,w,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${c===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${c===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${hn(X,ce,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${v&&h?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${h?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${O.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${v&&h?`
        if (w + local_id.y < past_sequence_length) {
          tileV[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else if (w + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
          tileV[idx] = v[vOffset + (w + local_id.y - past_sequence_length) * uniforms.N];
        }
      `:`
            if (w + local_id.y < uniforms.kv_sequence_length) {
              tileV[idx] = v[vOffset + (w + local_id.y) * uniforms.N];
            }`}
        ${h?`
            if (w + local_id.y < present_sequence_length) {
          present_value[presentValueOffset + (w + local_id.y) * uniforms.N] = tileV[idx];
        }`:""}
      }
     workgroupBarrier();
     for (var k: u32 = 0u; k < TILE_SIZE && w+k < total_sequence_length; k++) {
       value += tileQ[TILE_SIZE * local_id.y + k] * tileV[TILE_SIZE * k + local_id.x];
     }
     workgroupBarrier();
   }

   // we need to transpose output from BNSH_v to BSND_v
   if (m < uniforms.M && n < uniforms.N) {
     let outputIdx = batchIdx * uniforms.M * uniforms.v_hidden_size + m * uniforms.v_hidden_size
       + headIdx * uniforms.N + n;
     output[outputIdx] = value;
   }
  }`};return{name:"AttentionScore",shaderCache:{hint:`${n!==void 0};${e}`,inputDependencies:C},getRunData:()=>({outputs:T,dispatchGroup:S,programUniforms:$}),getShaderSource:k}},qi=(e,t,r,n,a,i,s,l,u,c,f=void 0,h=void 0)=>{let g=Math.min(e.outputCount,1+(s?1:0)+(l?1:0)),_=g>1?c.pastSequenceLength:0,b=_+c.kvSequenceLength,w=u&&M.size(u.dims)>0?u:void 0,S=[t,r];g>1&&s&&M.size(s.dims)>0&&S.push(s),w&&S.push(w),f&&S.push(f),h&&S.push(h);let $=e.compute(fc(g,t,r,s,w,c,_,f,h),{inputs:S,outputs:g>1?[-1,1]:[-1]})[0];e.compute(pc($,c.batchSize,c.numHeads,_,c.sequenceLength,b,f,h),{inputs:f&&h?[$,f,h]:[$],outputs:[]});let v=[$,n];g>1&&l&&M.size(l.dims)>0&&v.push(l),f&&v.push(f),h&&v.push(h),e.compute(hc(g,$,n,l,c,_,f,h),{inputs:v,outputs:g>1?[0,2]:[0]})},mc=(e,t)=>{let r=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],n=t.sequenceLength,a=t.inputHiddenSize,i=t.headSize,s=12,l={x:Math.ceil(t.headSize/s),y:Math.ceil(t.sequenceLength/s),z:t.batchSize*t.numHeads},u=[e.inputs[0],e.inputs[1],e.inputs[2]],c=[{type:12,data:n},{type:12,data:a},{type:12,data:i},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],f=h=>{let g=ne("output_q",u[0].dataType,r),_=ne("output_k",u[0].dataType,r),b=ne("output_v",u[0].dataType,r),w=U("input",u[0].dataType,u[0].dims),S=U("weight",u[1].dataType,u[1].dims),$=U("bias",u[2].dataType,u[2].dims),v=w.type.storage,C=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${s}u;
  var<workgroup> tileInput: array<${v}, ${s*s}>;
  var<workgroup> tileWeightQ: array<${v}, ${s*s}>;
  var<workgroup> tileWeightK: array<${v}, ${s*s}>;
  var<workgroup> tileWeightV: array<${v}, ${s*s}>;
  ${h.registerUniforms(C).declareVariables(w,S,$,g,_,b)}
  ${h.mainStart([s,s,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${v}(0);
    var valueK = ${v}(0);
    var valueV = ${v}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileInput[TILE_SIZE * local_id.y + local_id.x] = input[inputOffset + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        let offset = n + (w + local_id.y) * uniforms.ldb;
        tileWeightQ[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetQ + offset];
        tileWeightK[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetK + offset];
        tileWeightV[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetV + offset];
      }
      workgroupBarrier();
      for (var k: u32 = 0u; k<TILE_SIZE && w+k < uniforms.K; k++) {
        let inputTileOffset = TILE_SIZE * local_id.y + k;
        let weightTileOffset = TILE_SIZE * k + local_id.x;
        valueQ += tileInput[inputTileOffset] * tileWeightQ[weightTileOffset];
        valueK += tileInput[inputTileOffset] * tileWeightK[weightTileOffset];
        valueV += tileInput[inputTileOffset] * tileWeightV[weightTileOffset];
      }

      workgroupBarrier();
    }

    let headOffset = (m * uniforms.N + n) % uniforms.head_size;
    valueQ += bias[headOffset + biasOffsetQ];
    valueK += bias[headOffset + biasOffsetK];
    valueV += bias[headOffset + biasOffsetV];

    let offset = workgroup_id.z * uniforms.M * uniforms.N;
    if (m < uniforms.M && n < uniforms.N) {
      let outputIdx = offset + m * uniforms.N + n;
      output_q[outputIdx] = valueQ;
      output_k[outputIdx] = valueK;
      output_v[outputIdx] = valueV;
    }
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:l,programUniforms:c}),getShaderSource:f},{inputs:u,outputs:[-1,-1,-1]})},ag=(e,t)=>{let r=cc(e.inputs,t),[n,a,i]=mc(e,r);return qi(e,n,a,i,e.inputs[4],void 0,void 0,void 0,e.inputs[5],r)}}),gc,yc,_c,sg,Z$=K(()=>{Pt(),_e(),Se(),Ke(),Te(),gc=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let r=(n,a,i)=>{let s=a.length;if(s!==n.length)throw new Error(`${i}: num dimensions != ${s}`);a.forEach((l,u)=>{if(l!==n[u])throw new Error(`${i}: dim[${u}] do not match`)})};if(e[0].dims.length>1){let n=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);r(e[1].dims,n,"Invalid input scale"),r(e[2].dims,n,"Invalid input B"),r(e[3].dims,n,"Invalid input mean"),r(e[4].dims,n,"Invalid input var")}else r(e[1].dims,[1],"Invalid input scale"),r(e[2].dims,[1],"Invalid input B"),r(e[3].dims,[1],"Invalid input mean"),r(e[4].dims,[1],"Invalid input var")},yc=(e,t)=>{let{epsilon:r,spatial:n,format:a}=t,i=e[0].dims,s=n?Ge(i[i.length-1]):1,l=a==="NHWC"&&i.length>1?s:1,u=M.size(i)/s,c=n,f=c?i.length:i,h=U("x",e[0].dataType,e[0].dims,s),g=U("scale",e[1].dataType,e[1].dims,l),_=U("bias",e[2].dataType,e[2].dims,l),b=U("inputMean",e[3].dataType,e[3].dims,l),w=U("inputVar",e[4].dataType,e[4].dims,l),S=ne("y",e[0].dataType,f,s),$=()=>{let C="";if(n)C=`let cOffset = ${i.length===1?"0u":a==="NHWC"?`outputIndices[${i.length-1}] / ${s}`:"outputIndices[1]"};`;else if(a==="NCHW")C=`
            ${S.indicesSet("outputIndices","0","0")}
            let cOffset = ${S.indicesToOffset("outputIndices")};`;else{C=`var cIndices = ${g.type.indices}(0);
                       cIndices[0] = outputIndices[${i.length-1}];`;for(let T=1;T<g.rank;T++)C+=`cIndices[${T}] = outputIndices[${T}];`;C+=`let cOffset = ${g.indicesToOffset("cIndices")};`}return C},v=C=>`
  const epsilon = ${r};
  ${C.registerUniform("outputSize","u32").declareVariables(h,g,_,b,w,S)}
  ${C.mainStart()}
  ${C.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${S.offsetToIndices(`global_idx * ${s}`)};
    ${$()}
    let scale = ${g.getByOffset("cOffset")};
    let bias = ${_.getByOffset("cOffset")};
    let inputMean = ${b.getByOffset("cOffset")};
    let inputVar = ${w.getByOffset("cOffset")};
    let x = ${h.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${S.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${n}_${s}`,inputDependencies:c?["rank","type","type","type","type"]:void 0},getShaderSource:v,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:c?[{type:12,data:u},...oe(i)]:[{type:12,data:u}]})}},_c=e=>Ne(e),sg=(e,t)=>{let{inputs:r,outputCount:n}=e,a=_c({...t,outputCount:n});if(Fe.webgpu.validateInputContent&&gc(r,a),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(yc(r,a))}}),bc,wc,og,X$=K(()=>{Se(),Te(),bc=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},wc=e=>{let t=e[0].dims,r=e[0].dims[2],n=M.size(t)/4,a=e[0].dataType,i=U("input",a,t,4),s=U("bias",a,[r],4),l=U("residual",a,t,4),u=ne("output",a,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(n/64)}}),getShaderSource:c=>`
  const channels = ${r}u / 4;
  ${c.declareVariables(i,s,l,u)}

  ${c.mainStart()}
    ${c.guardAgainstOutOfBoundsWorkgroupSizes(n)}
    let value = ${i.getByOffset("global_idx")}
      + ${s.getByOffset("global_idx % channels")} + ${l.getByOffset("global_idx")};
    ${u.setByOffset("global_idx","value")}
  }`}},og=e=>{bc(e.inputs),e.compute(wc(e.inputs))}}),vc,Re,lg,ug,dg,cg,pg,fg,hg,mg,gg,$c,yg,_g,bg,wg,Ei,vg,kn,$g,xg,Sg,Tg,Cg,kg,Ig,Eg,zg,Ag,Og,Rg,Mg,Bg,Dg,Ng,Ha,Pg,Us,Ws,Ug,Wg,Lg,xc,Sc,Vg,Ao=K(()=>{_e(),Se(),Ke(),Te(),vc=(e,t,r,n,a,i,s)=>{let l=Math.ceil(t/4),u="";typeof a=="string"?u=`${a}(a)`:u=a("a");let c=U("inputData",r,[l],4),f=ne("outputData",n,[l],4),h=[{name:"vec_size",type:"u32"}];return s&&h.push(...s),`
      ${e.registerUniforms(h).declareVariables(c,f)}

  ${i??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${c.getByOffset("global_idx")};
    ${f.setByOffset("global_idx",u)}
  }`},Re=(e,t,r,n,a,i=e.dataType,s,l)=>{let u=[{type:12,data:Math.ceil(M.size(e.dims)/4)}];return s&&u.push(...s),{name:t,shaderCache:{hint:a,inputDependencies:["type"]},getShaderSource:c=>vc(c,M.size(e.dims),e.dataType,i,r,n,l),getRunData:c=>({outputs:[{dims:e.dims,dataType:i}],dispatchGroup:{x:Math.ceil(M.size(c[0].dims)/64/4)},programUniforms:u})}},lg=e=>{e.compute(Re(e.inputs[0],"Abs","abs"))},ug=e=>{e.compute(Re(e.inputs[0],"Acos","acos"))},dg=e=>{e.compute(Re(e.inputs[0],"Acosh","acosh"))},cg=e=>{e.compute(Re(e.inputs[0],"Asin","asin"))},pg=e=>{e.compute(Re(e.inputs[0],"Asinh","asinh"))},fg=e=>{e.compute(Re(e.inputs[0],"Atan","atan"))},hg=e=>{e.compute(Re(e.inputs[0],"Atanh","atanh"))},mg=e=>Ne(e),gg=(e,t)=>{let r;switch(t.to){case 10:r="vec4<f16>";break;case 1:r="vec4<f32>";break;case 12:r="vec4<u32>";break;case 6:r="vec4<i32>";break;case 9:r="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(Re(e.inputs[0],"Cast",r,void 0,t.cacheKey,t.to))},$c=e=>{let t,r,n=e.length>=2&&e[1].data!==0,a=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=n?e[1].getFloat32Array()[0]:-34028234663852886e22,r=a?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=n?e[1].getUint16Array()[0]:64511,r=a?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return Ne({min:t,max:r})},yg=(e,t)=>{let r=t||$c(e.inputs),n=lt(e.inputs[0].dataType);e.compute(Re(e.inputs[0],"Clip",a=>`clamp(${a}, vec4<${n}>(uniforms.min), vec4<${n}>(uniforms.max))`,void 0,r.cacheKey,void 0,[{type:e.inputs[0].dataType,data:r.min},{type:e.inputs[0].dataType,data:r.max}],[{name:"min",type:n},{name:"max",type:n}]),{inputs:[0]})},_g=e=>{e.compute(Re(e.inputs[0],"Ceil","ceil"))},bg=e=>{e.compute(Re(e.inputs[0],"Cos","cos"))},wg=e=>{e.compute(Re(e.inputs[0],"Cosh","cosh"))},Ei=e=>Ne(e),vg=(e,t)=>{let r=lt(e.inputs[0].dataType);e.compute(Re(e.inputs[0],"Elu",n=>`elu_vf32(${n})`,`
  const elu_alpha_ = ${r}(${t.alpha});

  fn elu_f32(a: ${r}) -> ${r} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${r}>) -> vec4<${r}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},kn=(e="f32")=>`
const r0: ${e} = 0.3275911;
const r1: ${e} = 0.254829592;
const r2: ${e} = -0.284496736;
const r3: ${e} = 1.421413741;
const r4: ${e} = -1.453152027;
const r5: ${e} = 1.061405429;

fn erf_vf32(v: vec4<${e}>) -> vec4<${e}> {
  let absv = abs(v);
  let x = 1.0 / (1.0 + r0 * absv);
  return sign(v) * (1.0 - ((((r5 * x + r4) * x + r3) * x + r2) * x + r1) * x * exp(-absv * absv));
}`,$g=e=>{let t=lt(e.inputs[0].dataType);e.compute(Re(e.inputs[0],"Erf",r=>`erf_vf32(${r})`,kn(t)))},xg=e=>{e.compute(Re(e.inputs[0],"Exp","exp"))},Sg=e=>{e.compute(Re(e.inputs[0],"Floor","floor"))},Tg=e=>{let t=lt(e.inputs[0].dataType);e.compute(Re(e.inputs[0],"Gelu",r=>`0.5 * ${r} * (1.0 + erf_vf32(${r} * 0.7071067811865475))`,kn(t)))},Cg=(e,t)=>{let r=lt(e.inputs[0].dataType);e.compute(Re(e.inputs[0],"LeakyRelu",n=>`select(leaky_relu_alpha_ * ${n}, ${n}, ${n} >= vec4<${r}>(0.0))`,`const leaky_relu_alpha_ = ${r}(${t.alpha});`,t.cacheKey))},kg=e=>{e.compute(Re(e.inputs[0],"Not",t=>`!${t}`))},Ig=e=>{e.compute(Re(e.inputs[0],"Neg",t=>`-${t}`))},Eg=e=>{e.compute(Re(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},zg=e=>{let t=lt(e.inputs[0].dataType);e.compute(Re(e.inputs[0],"Relu",r=>`select(vec4<${t}>(0.0), ${r}, ${r} > vec4<${t}>(0.0))`))},Ag=e=>{e.compute(Re(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},Og=e=>Ne(e),Rg=(e,t)=>{let r=lt(e.inputs[0].dataType);e.compute(Re(e.inputs[0],"HardSigmoid",n=>`max(vec4<${r}>(0.0), min(vec4<${r}>(1.0), ${t.alpha} * ${n} + vec4<${r}>(${t.beta})))`,void 0,t.cacheKey))},Mg=e=>{e.compute(Re(e.inputs[0],"Sin","sin"))},Bg=e=>{e.compute(Re(e.inputs[0],"Sinh","sinh"))},Dg=e=>{e.compute(Re(e.inputs[0],"Sqrt","sqrt"))},Ng=e=>{e.compute(Re(e.inputs[0],"Tan","tan"))},Ha=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,Pg=e=>{e.compute(Re(e.inputs[0],"Tanh",Ha))},Us=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${Ha("v")};
}
`,Ws=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,Ug=e=>{let t=lt(e.inputs[0].dataType);e.compute(Re(e.inputs[0],"FastGelu",Ws,Us(t),void 0,e.inputs[0].dataType))},Wg=(e,t)=>{let r=lt(e.inputs[0].dataType);return e.compute(Re(e.inputs[0],"ThresholdedRelu",n=>`select(vec4<${r}>(0.0), ${n}, ${n} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${r}>(${t.alpha});`,t.cacheKey)),0},Lg=e=>{e.compute(Re(e.inputs[0],"Log","log"))},xc=(e,t)=>`
const alpha = vec4<${e}>(${t});
const one = ${e}(1.0);
const zero = ${e}(0.0);

fn quick_gelu_impl(x: vec4<${e}>) -> vec4<${e}> {
  let v = x *alpha;
  var x1 : vec4<${e}>;
  for (var i = 0; i < 4; i = i + 1) {
    if (v[i] >= zero) {
      x1[i] = one / (one + exp(-v[i]));
    } else {
      x1[i] = one - one / (one + exp(v[i]));
    }
  }
  return x * x1;
}
`,Sc=e=>`quick_gelu_impl(${e})`,Vg=(e,t)=>{let r=lt(e.inputs[0].dataType);e.compute(Re(e.inputs[0],"QuickGelu",Sc,xc(r,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),Tc,Cc,qg,J$=K(()=>{Se(),Te(),Ao(),Tc=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Cc=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let r=U("input",e[0].dataType,e[0].dims,4),n=U("bias",e[0].dataType,[e[0].dims[2]],4),a=ne("output",e[0].dataType,t,4),i=M.size(t)/4,s=Ye(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(i/64)}}),getShaderSource:l=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${l.declareVariables(r,n,a)}

  ${kn(s)}

  ${l.mainStart()}
    ${l.guardAgainstOutOfBoundsWorkgroupSizes(i)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${a.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},qg=e=>{Tc(e.inputs),e.compute(Cc(e.inputs))}}),kc,Ic,Mt,Fg,Hg,Gg,jg,Kg,Qg,Zg,Xg,Jg,Yg,Y$=K(()=>{_e(),Se(),Te(),kc=(e,t,r,n,a,i,s,l,u,c,f,h)=>{let g,_;typeof l=="string"?g=_=(v,C)=>`${l}((${v}),(${C}))`:typeof l=="function"?g=_=l:(g=l.scalar,_=l.vector);let b=ne("outputData",f,n.length,4),w=U("aData",u,t.length,4),S=U("bData",c,r.length,4),$;if(a)if(i){let v=M.size(t)===1,C=M.size(r)===1,T=t.length>0&&t[t.length-1]%4===0,k=r.length>0&&r[r.length-1]%4===0;v||C?$=b.setByOffset("global_idx",_(v?`${w.type.value}(${w.getByOffset("0")}.x)`:w.getByOffset("global_idx"),C?`${S.type.value}(${S.getByOffset("0")}.x)`:S.getByOffset("global_idx"))):$=`
            let outputIndices = ${b.offsetToIndices("global_idx * 4u")};
            let offsetA = ${w.broadcastedIndicesToOffset("outputIndices",b)};
            let offsetB = ${S.broadcastedIndicesToOffset("outputIndices",b)};
            ${b.setByOffset("global_idx",_(s||T?w.getByOffset("offsetA / 4u"):`${w.type.value}(${w.getByOffset("offsetA / 4u")}[offsetA % 4u])`,s||k?S.getByOffset("offsetB / 4u"):`${S.type.value}(${S.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else $=b.setByOffset("global_idx",_(w.getByOffset("global_idx"),S.getByOffset("global_idx")));else{if(!i)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let v=(C,T,k="")=>{let A=`aData[indexA${T}][componentA${T}]`,O=`bData[indexB${T}][componentB${T}]`;return`
            let outputIndices${T} = ${b.offsetToIndices(`global_idx * 4u + ${T}u`)};
            let offsetA${T} = ${w.broadcastedIndicesToOffset(`outputIndices${T}`,b)};
            let offsetB${T} = ${S.broadcastedIndicesToOffset(`outputIndices${T}`,b)};
            let indexA${T} = offsetA${T} / 4u;
            let indexB${T} = offsetB${T} / 4u;
            let componentA${T} = offsetA${T} % 4u;
            let componentB${T} = offsetB${T} % 4u;
            ${C}[${T}] = ${k}(${g(A,O)});
          `};f===9?$=`
            var data = vec4<u32>(0);
            ${v("data",0,"u32")}
            ${v("data",1,"u32")}
            ${v("data",2,"u32")}
            ${v("data",3,"u32")}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:$=`
            ${v("outputData[global_idx]",0)}
            ${v("outputData[global_idx]",1)}
            ${v("outputData[global_idx]",2)}
            ${v("outputData[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(w,S,b)}

        ${h??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${$}
      }`},Ic=(e,t,r,n,a,i,s=r.dataType)=>{let l=r.dims.map(w=>Number(w)??1),u=n.dims.map(w=>Number(w)??1),c=!M.areEqual(l,u),f=l,h=M.size(l),g=!1,_=!1,b=[c];if(c){let w=oi.calcShape(l,u,!1);if(!w)throw new Error("Can't perform binary op on the given tensors");f=w.slice(),h=M.size(f);let S=M.size(l)===1,$=M.size(u)===1,v=l.length>0&&l[l.length-1]%4===0,C=u.length>0&&u[u.length-1]%4===0;b.push(S),b.push($),b.push(v),b.push(C);let T=1;for(let k=1;k<f.length;k++){let A=l[l.length-k],O=u[u.length-k];if(A===O)T*=A;else break}T%4===0?(_=!0,g=!0):(S||$||v||C)&&(g=!0)}else g=!0;return b.push(g),{name:e,shaderCache:{hint:t+b.map(w=>w.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:w=>kc(w,l,u,f,g,c,_,a,r.dataType,n.dataType,s,i),getRunData:()=>({outputs:[{dims:f,dataType:s}],dispatchGroup:{x:Math.ceil(h/64/4)},programUniforms:[{type:12,data:Math.ceil(M.size(f)/4)},...oe(l,u,f)]})}},Mt=(e,t,r,n,a,i)=>{e.compute(Ic(t,a??"",e.inputs[0],e.inputs[1],r,n,i))},Fg=e=>{Mt(e,"Add",(t,r)=>`${t}+${r}`)},Hg=e=>{Mt(e,"Div",(t,r)=>`${t}/${r}`)},Gg=e=>{Mt(e,"Equal",{scalar:(t,r)=>`u32(${t}==${r})`,vector:(t,r)=>`vec4<u32>(${t}==${r})`},void 0,void 0,9)},jg=e=>{Mt(e,"Mul",(t,r)=>`${t}*${r}`)},Kg=e=>{let t=U("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;Mt(e,"Pow",{scalar:(r,n)=>`pow_custom(${r},${n})`,vector:(r,n)=>`pow_vector_custom(${r},${n})`},`
    fn pow_custom(a : ${t}, b : ${t}) -> ${t} {
      if (b == ${t}(0.0)) {
        return ${t}(1.0);
      } else if (a < ${t}(0.0) && f32(b) != floor(f32(b))) {
        return ${t}(pow(f32(a), f32(b))); // NaN
      }
      return select(sign(a), ${t}(1.0), round(f32(abs(b) % ${t}(2.0))) != 1.0) * ${t}(${t==="i32"?"round":""}(pow(f32(abs(a)), f32(b))));
    }
    fn pow_vector_custom(a : vec4<${t}>, b : vec4<${t}>) -> vec4<${t}> {
      // TODO: implement vectorized pow
      return vec4<${t}>(pow_custom(a.x, b.x), pow_custom(a.y, b.y), pow_custom(a.z, b.z), pow_custom(a.w, b.w));
    }
      `)},Qg=e=>{Mt(e,"Sub",(t,r)=>`${t}-${r}`)},Zg=e=>{Mt(e,"Greater",{scalar:(t,r)=>`u32(${t}>${r})`,vector:(t,r)=>`vec4<u32>(${t}>${r})`},void 0,void 0,9)},Xg=e=>{Mt(e,"Less",{scalar:(t,r)=>`u32(${t}<${r})`,vector:(t,r)=>`vec4<u32>(${t}<${r})`},void 0,void 0,9)},Jg=e=>{Mt(e,"GreaterOrEqual",{scalar:(t,r)=>`u32(${t}>=${r})`,vector:(t,r)=>`vec4<u32>(${t}>=${r})`},void 0,void 0,9)},Yg=e=>{Mt(e,"LessOrEqual",{scalar:(t,r)=>`u32(${t}<=${r})`,vector:(t,r)=>`vec4<u32>(${t}<=${r})`},void 0,void 0,9)}}),Ec,zc,Ac,Oc,ey,ty,e1=K(()=>{_e(),Se(),Ke(),Te(),Ec=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let r=0,n=e[r],a=n.dataType,i=n.dims.length;e.forEach((s,l)=>{if(l!==r){if(s.dataType!==a)throw new Error("input tensors should be one type");if(s.dims.length!==i)throw new Error("input tensors should have the same shape");s.dims.forEach((u,c)=>{if(c!==t&&u!==n.dims[c])throw new Error("non concat dimensions must match")})}})},zc=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,Ac=(e,t)=>{let r=e.length,n=[];for(let a=0;a<r;++a){let i=t.setByOffset("global_idx",e[a].getByIndices("indices"));r===1?n.push(i):a===0?n.push(`if (inputIndex == ${a}u) { ${i} }`):a===r-1?n.push(`else { ${i} }`):n.push(`else if (inputIndex == ${a}) { ${i} }`)}return n.join(`
`)},Oc=(e,t,r,n)=>{let a=M.size(r),i=new Array(e.length),s=new Array(e.length),l=0,u=[],c=[],f=[{type:12,data:a}];for(let w=0;w<e.length;++w)l+=e[w].dims[t],i[w]=l,c.push(e[w].dims.length),s[w]=U(`input${w}`,n,c[w]),u.push("rank"),f.push({type:12,data:i[w]});for(let w=0;w<e.length;++w)f.push(...oe(e[w].dims));f.push(...oe(r));let h=ne("output",n,r.length),g=h.indicesGet("indices",t),_=Array.from(Array(i.length).keys()).map(w=>`uniforms.sizeInConcatAxis${w}`).join(","),b=w=>`

  ${(()=>{w.registerUniform("outputSize","u32");for(let S=0;S<e.length;S++)w.registerUniform(`sizeInConcatAxis${S}`,"u32");return w.declareVariables(...s,h)})()}

  ${zc(i.length,_)}

  ${w.mainStart()}
    ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${h.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${g});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${i.length}u>(${_});
      ${g} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${Ac(s,h)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:u},getRunData:()=>({outputs:[{dims:r,dataType:n}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:f}),getShaderSource:b}},ey=(e,t)=>{let r=e.inputs,n=r[0].dims,a=M.normalizeAxis(t.axis,n.length);Ec(r,a);let i=n.slice();i[a]=r.reduce((l,u)=>l+(u.dims.length>a?u.dims[a]:0),0);let s=r.filter(l=>M.size(l.dims)>0);e.compute(Oc(s,a,i,r[0].dataType),{inputs:s})},ty=e=>Ne({axis:e.axis})}),Wr,Lr,Vr,Oo,Hr=K(()=>{_e(),Se(),Wr=(e,t,r="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${r}(uniforms.clip_min)), ${t}(${r}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${r}(uniforms.alpha) * value + ${r}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${r}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},Lr=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},Vr=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},Oo=e=>{let t=(e==null?void 0:e.activation)||"";if(t==="HardSigmoid"){let[r,n]=(e==null?void 0:e.activation_params)||[.2,.5];return{activation:t,alpha:r,beta:n}}else if(t==="Clip"){let[r,n]=(e==null?void 0:e.activation_params)||[Am,Om];return{activation:t,clipMax:n,clipMin:r}}else if(t==="LeakyRelu"){let[r]=(e==null?void 0:e.activation_params)||[.01];return{activation:t,alpha:r}}return{activation:t}}}),rt,ry,Ro=K(()=>{rt=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},ry=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),iy,t1=K(()=>{iy=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),Ni,Mo,Bo=K(()=>{_e(),Se(),Te(),Hr(),Ni=(e,t,r,n,a)=>{let i=n-r;return`
      ${Array.from({length:r}).map((s,l)=>`
      if (${ae(t.shape,l,t.rank)} != 1) {
        ${t.indicesSet(e,l,ae(a,l+i,n))}
      } else {
        ${t.indicesSet(e,l,0)}
      }`).join("")}
`},Mo=(e,t,r,n,a=!1,i)=>{let s=e[0].dims,l=e[1].dims,u=s[s.length-2],c=l[l.length-1],f=s[s.length-1],h=Ge(c),g=Ge(f),_=Ge(u),b=M.size(r)/h/_,w=e.length>2,S=n?n.slice(0,-2):r.slice(0,-2),$=[M.size(S),u,c],v=[{type:12,data:b},{type:12,data:u},{type:12,data:c},{type:12,data:f}];Lr(t,v),v.push(...oe(S,s,l)),w&&v.push(...oe(e[2].dims)),v.push(...oe($));let C=T=>{let k=Io("batch_dims",e[0].dataType,S.length),A=U("a",e[0].dataType,s.length,g),O=U("b",e[1].dataType,l.length,h),B=ne("output",e[0].dataType,$.length,h),q=Ye(B.type.tensor),X=Wr(t,B.type.value,q),ce=[A,O],ge="";if(w){let fe=a?h:1;ce.push(U("bias",e[2].dataType,e[2].dims.length,fe)),ge=`${a?`value += bias[col / ${fe}];`:`value += ${B.type.value}(bias[row + i]);`}`}let se=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];Vr(t,se);let he=()=>{let fe=`var a_data: ${A.type.value};`;for(let Q=0;Q<g;Q++)fe+=`
              let b_data${Q} = b[(b_offset + (k + ${Q}) * uniforms.N + col) / ${h}];`;for(let Q=0;Q<_;Q++){fe+=`a_data = a[(a_offset + (row + ${Q}) * uniforms.K + k) / ${g}];`;for(let le=0;le<g;le++)fe+=`
            values[${Q}] = fma(${O.type.value}(a_data${g===1?"":`[${le}]`}), b_data${le}, values[${Q}]);
`}return fe};return`
  ${T.registerUniforms(se).registerInternalVariables(k).declareVariables(...ce,B)}
  ${T.mainStart()}
    ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${h})) * ${h};
    var index1 = global_idx / (uniforms.N / ${h});
    let stride1 = uniforms.M / ${_};
    let row = (index1 % stride1) * ${_};
    let batch = index1 / stride1;

    ${r.length===2?"":`let batch_indices = ${k.offsetToIndices("batch")};`}

    var a_indices: ${A.type.indices};
    ${Ni("a_indices",A,A.rank-2,k.rank,"batch_indices")}
    ${A.indicesSet("a_indices",A.rank-2,0)}
    ${A.indicesSet("a_indices",A.rank-1,0)}
    let a_offset = ${A.indicesToOffset("a_indices")};

    var b_indices: ${O.type.indices};
    ${Ni("b_indices",O,O.rank-2,k.rank,"batch_indices")}
    ${O.indicesSet("b_indices",O.rank-2,0)}
    ${O.indicesSet("b_indices",O.rank-1,0)}
    let b_offset = ${O.indicesToOffset("b_indices")};
    var values: array<${B.type.value}, ${_}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${g}) {
      ${he()}
    }
    for (var i = 0u; i < ${_}u; i++) {
      var value = values[i];
      ${ge}
      ${X}
      let cur_indices = ${B.type.indices}(batch, row + i, col);
      let offset = ${B.indicesToOffset("cur_indices")};
      ${B.setByOffset(`offset / ${h}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${h};${g};${_};${a}`,inputDependencies:w?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(b/64)},programUniforms:v}),getShaderSource:C}}}),Rc,Mc,Ls,Ga,Bc,Vs,Dc,Wn,Do=K(()=>{_e(),Se(),Te(),Hr(),Bo(),Ro(),Rc=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,Mc=(e,t)=>e?`
        let ACached0 = mm_Asub[k * innerElementSize][localRow];
        let ACached1 = mm_Asub[k * innerElementSize + 1][localRow];
        let ACached2 = mm_Asub[k * innerElementSize + 2][localRow];
        ${t===3?"":"let ACached3 = mm_Asub[k * innerElementSize + 3][localRow];"}
        for (var i = 0; i < rowPerThread; i = i + 1) {
          acc[i] = BCached0 * ACached0[i] + acc[i];
          acc[i] = BCached1 * ACached1[i] + acc[i];
          acc[i] = BCached2 * ACached2[i] + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached3[i] + acc[i];"}
        }`:`
        for (var i = 0; i < rowPerThread; i = i + 1) {
          let ACached = mm_Asub[tileRow + i][k];
          acc[i] = BCached0 * ACached.x + acc[i];
          acc[i] = BCached1 * ACached.y + acc[i];
          acc[i] = BCached2 * ACached.z + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached.w + acc[i];"}
        }`,Ls=(e,t,r="f32",n,a=!1,i=32,s=!1,l=32)=>{let u=t[1]*e[1],c=t[0]*e[0],f=a?u:i,h=a?i:u,g=f/t[0],_=i/t[1];if(!((a&&g===4&&e[1]===4||!a&&(g===3||g===4))&&f%t[0]===0&&i%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${a} is true, innerElementSize ${g} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${g} must be 3 or 4.
  tileAWidth ${f} must be divisible by workgroupSize[0]${t[0]}. tileInner ${i} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${g}<${r}>, ${f/g}>, ${h}>;
var<workgroup> mm_Bsub: array<array<vec4<${r}>, ${c/e[0]}>, ${i}>;

const rowPerThread = ${e[1]};
const colPerThread = ${e[0]};
const innerElementSize = ${g};
const tileInner = ${i};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
  let localRow = i32(localId.y);
  let tileRow = localRow * rowPerThread;
  let tileCol = i32(localId.x);

  let globalRow =i32(globalId.y) * rowPerThread;
  let globalCol = i32(globalId.x);
  let batch = ${s?"0":"i32(globalId.z)"};
  ${n?`let batchIndices = ${n.offsetToIndices("u32(batch)")};`:""}
  let globalRowStart = i32(workgroupId.y) * ${u};

  let num_tiles = ${s?`${Math.ceil(l/i)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
  var kStart = ${s?`i32(globalId.z) * ${l}`:"0"};

  var acc: array<vec4<${r}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${_};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${Rc(a,n)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${_}; innerRow = innerRow + 1) {
          let inputRow = tileRowB + innerRow;
          let inputCol = tileCol;
          mm_Bsub[inputRow][inputCol] = mm_readB(batch, kStart + inputRow, globalCol${n?", batchIndices":""});
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      for (var k = 0; k < tileInner / innerElementSize; k = k + 1) {
          let BCached0 = mm_Bsub[k * innerElementSize][tileCol];
          let BCached1 = mm_Bsub[k * innerElementSize + 1][tileCol];
          let BCached2 = mm_Bsub[k * innerElementSize + 2][tileCol];
          ${g===3?"":"let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];"}

          ${Mc(a,g)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},Ga=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,Bc=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",Vs=(e,t,r="f32",n,a=!1,i=32,s=!1,l=32,u=!1)=>{let c=e[1]*t[1],f=e[0]*t[0],h=a?c:i,g=a?i:c;if(!(g%t[1]===0&&h%t[0]===0&&i%t[1]===0))throw new Error(`tileAHight ${g} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${h} must be divisible by workgroupSize[0]${t[0]}, tileInner ${i} must be divisible by workgroupSize[1]${t[1]}`);let _=g/t[1],b=h/t[0],w=i/t[1],S=u?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${c};
    let globalColStart = i32(workgroupId.x) * ${f};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${g}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${h}; inputCol = inputCol + ${t[0]}) {
          ${Ga(a,n)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${i}; inputRow = inputRow + ${t[1]}) {
            for (var inputCol = localCol; inputCol < ${f}; inputCol = inputCol + ${t[0]}) {
          mm_Bsub[inputRow][inputCol] = mm_readB(batch,
            kStart + inputRow,
            globalColStart + inputCol${n?", batchIndices":""});
        }
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      var BCached : array<${r}, colPerThread>;
      for (var k = 0; k < tileInner; k = k + 1) {
        for (var inner = 0; inner < colPerThread; inner = inner + 1) {
          BCached[inner] = mm_Bsub[k][localCol + inner * ${t[0]}];
        }
        for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let ACached = ${a?`mm_Asub[k][localRow + innerRow * ${t[1]}];`:`mm_Asub[localRow + innerRow * ${t[1]}][k];`}
          for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
            acc[innerRow][innerCol] = acc[innerRow][innerCol] +
                ACached * BCached[innerCol];
          }
        }
      }
      workgroupBarrier();
    }
    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      let gRow = globalRowStart + localRow + innerRow * ${t[1]};
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        let gCol = globalColStart + localCol + innerCol * ${t[0]};
        mm_write(batch, gRow, gCol, acc[innerRow][innerCol]);
      }
    }
    `:`
let tileRow = i32(localId.y) * rowPerThread;
let tileCol = i32(localId.x) * colPerThread;

let globalRow = i32(globalId.y) * rowPerThread;
let globalCol = i32(globalId.x) * colPerThread;
let globalRowStart = i32(workgroupId.y) * ${c};

let tileRowA = i32(localId.y) * ${_};
let tileColA = i32(localId.x) * ${b};
let tileRowB = i32(localId.y) * ${w};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${_}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${b}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${Ga(a,n)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${w}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
      let inputRow = tileRowB + innerRow;
      let inputCol = tileCol + innerCol;
      mm_Bsub[inputRow][inputCol] = mm_readB(batch,
        kStart + inputRow,
        globalCol + innerCol${n?", batchIndices":""});
    }
  }
  kStart = kStart + tileInner;
  workgroupBarrier();

  // Compute acc values for a single thread.
  var BCached : array<${r}, colPerThread>;
  for (var k = 0; k < tileInner; k = k + 1) {
    for (var inner = 0; inner < colPerThread; inner = inner + 1) {
      BCached[inner] = mm_Bsub[k][tileCol + inner];
    }

    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      ${Bc(a)}
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        acc[innerRow][innerCol] = acc[innerRow][innerCol] + ACached * BCached[innerCol];
      }
    }
  }

  workgroupBarrier();
}

for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
  for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
    mm_write(batch, globalRow + innerRow, globalCol + innerCol,
        acc[innerRow][innerCol]);
  }
}
`;return`
  var<workgroup> mm_Asub : array<array<${r}, ${h}>, ${g}>;
  var<workgroup> mm_Bsub : array<array<${r}, ${f}>, ${i}>;
  const rowPerThread = ${e[1]};
  const colPerThread = ${e[0]};
  const tileInner = ${i};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${s?"0":"i32(globalId.z)"};
    ${n?`let batchIndices = ${n.offsetToIndices("u32(batch)")};`:""}
    let num_tiles = ${s?`${Math.ceil(l/i)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
    var kStart = ${s?`i32(globalId.z) * ${l}`:"0"};

    var acc : array<array<${r}, colPerThread>, rowPerThread>;
    ${S}
  }
`},Dc=(e,t,r,n,a=!1)=>{let[i,s,l,u]=n,c=Ye(n[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${i.type.indices}) -> ${rt(e,c)} {
      var value = ${rt(e,c)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${s.type.indices};
        ${Ni("aIndices",s,s.rank-2,i.rank,"batchIndices")}
        ${s.indicesSet("aIndices",s.rank-2,"u32(row)")}
        ${s.indicesSet("aIndices",s.rank-1,"u32(colIn)")}
        value = ${s.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${i.type.indices}) -> ${rt(e,c)} {
      var value = ${rt(e,c)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${l.type.indices};
        ${Ni("bIndices",l,l.rank-2,i.rank,"batchIndices")}
        ${l.indicesSet("bIndices",l.rank-2,"u32(row)")}
        ${l.indicesSet("bIndices",l.rank-1,"u32(colIn)")}
        value = ${l.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${rt(e,c)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${a?"bias[colIn]":`${rt(e,c)}(bias[row])`};`:""}
        ${r}
        ${u.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},Wn=(e,t,r,n,a=!1,i)=>{let s=e[0].dims,l=e[1].dims,u=s.slice(0,-2),c=l.slice(0,-2),f=n?n.slice(0,-2):r.slice(0,-2),h=M.size(f),g=s[s.length-2],_=s[s.length-1],b=l[l.length-1],w=_%4===0&&b%4===0,S=g<=8?[4,1,1]:[4,4,1],$=[8,8,1],v=[Math.ceil(b/$[0]/S[0]),Math.ceil(g/$[1]/S[1]),Math.ceil(h/$[2]/S[2])],C=w?4:1,T=[...u,g,_/C],k=T.length,A=[...c,_,b/C],O=A.length,B=[h,g,b/C],q=[{type:6,data:g},{type:6,data:b},{type:6,data:_}];Lr(t,q),q.push(...oe(f,T,A));let X=["rank","rank"],ce=e.length>2;ce&&(q.push(...oe(e[2].dims)),X.push("rank")),q.push(...oe(B));let ge=se=>{let he=f.length,fe=Io("batchDims",e[0].dataType,he,1),Q=Ye(e[0].dataType),le=U("a",e[0].dataType,k,C),ue=U("b",e[1].dataType,O,C),ee=ne("result",e[0].dataType,B.length,C),Ae=[le,ue];if(ce){let W=a?C:1;Ae.push(U("bias",e[2].dataType,e[2].dims.length,W))}let N=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];Vr(t,N);let V=Ye(ee.type.tensor),Ce=Wr(t,ee.type.value,V),We=Dc(C,ce,Ce,[fe,le,ue,ee],a);return`
  ${se.registerUniforms(N).registerInternalVariables(fe).declareVariables(...Ae,ee)}
  ${We}
  ${w?Ls(S,$,Q,fe):Vs(S,$,Q,fe)}
                   `};return{name:"MatMul",shaderCache:{hint:`${S};${t.activation};${w};${a}`,inputDependencies:X},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:v[0],y:v[1],z:v[2]},programUniforms:q}),getShaderSource:ge}}}),Nc,ny,r1=K(()=>{_e(),lr(),Te(),Hr(),Ro(),t1(),Do(),Nc=(e,t,r,n,a=!1,i,s=4,l=4,u=4,c="f32")=>{let f=q=>{switch(q){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${c}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${q} is not supported.`)}},h=q=>{switch(q){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${q} is not supported.`)}},g=e?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,_=e?`
    let coords = vec4<i32>(
      batch,
      row / outWidth,
      row % outWidth,
      col);
    `:`
    let coords = vec4<i32>(
      batch,
      row,
      col / outWidth,
      col % outWidth);
    `,b=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",w=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",S=e?"row":"col",$=e?"col":"row",v=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${S} / outWidth;
    let outCol = ${S} % outWidth;

    let WRow = ${$} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${$} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${$} % inChannels;
    var resData = ${rt(s,c)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${b} && xCol >= 0 && xCol < ${w}) {
      ${g}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${f(s)}
    }
    return resData;`,C=e?t&&n?`
    let col = colIn * ${s};
    ${v}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${v}
    }
    return ${rt(s,c)}(0.0);`:n&&r?`
    let col = colIn * ${s};
    ${v}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${v}
    }
    return ${rt(s,c)}(0.0);`,T=e?n&&r?h(l):`
    let col = colIn * ${l};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${h(l)}
    }
    return ${rt(l,c)}(0.0);`:`
    let col = colIn * ${l};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${h(l)}
    }
    return ${rt(l,c)}(0.0);`,k=rt(u,c),A=rt(e?s:l,c),O=rt(e?l:s,c),B=Wr(i,k,c);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${A} {
      ${e?C:T}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${O} {
      ${e?T:C}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${k}) {
      let col = colIn * ${u};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${_}
      ${ry(a)}
      ${B}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},ny=(e,t,r,n,a,i,s,l,u)=>{let c=t.format==="NHWC",f=c?e[0].dims[3]:e[0].dims[1],h=r[0],g=c?r[2]:r[3],_=c?r[1]:r[2],b=c?r[3]:r[1],w=c&&(f%4===0||f%3===0)&&b%4===0,S=c?b:g*_,$=c?g*_:b,v=[8,8,1],C=n<=8?[4,1,1]:[4,4,1],T=[Math.ceil(S/v[0]/C[0]),Math.ceil($/v[1]/C[1]),Math.ceil(h/v[2]/C[2])];Oe("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${T}`);let k=w?c&&f%4!==0?3:4:1,A=v[1]*C[1],O=v[0]*C[0],B=Math.max(v[0]*k,v[1]),q=n%A===0,X=a%O===0,ce=i%B===0,ge=w?[k,4,4]:[1,1,1],se=[{type:6,data:n},{type:6,data:a},{type:6,data:i},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];Lr(t,se),se.push(...oe(e[0].dims,e[1].dims));let he=["rank","rank"];s&&(se.push(...oe(e[2].dims)),he.push("rank")),se.push(...oe(r));let fe=Q=>{let le=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];Vr(t,le);let ue=w?4:1,ee=Ye(e[0].dataType),Ae=`
      fn setOutputAtIndex(flatIndex : i32, value : ${w?`vec4<${ee}>`:ee}) {
        result[flatIndex] = ${w?`vec4<${ee}>`:ee}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${w?`vec4<${ee}>`:ee}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${w?"/ 4":""}, value);
      }`,N=U("x",e[0].dataType,e[0].dims.length,k===3?1:k),V=U("w",e[1].dataType,e[1].dims.length,ue),Ce=[N,V],We=ne("result",e[0].dataType,r.length,ue);if(s){let W=U("bias",e[2].dataType,e[2].dims.length,ue);Ce.push(W),Ae+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${w?`vec4<${ee}>`:ee} {
          return bias[coords.${c?"w":"y"}${w?"/ 4":""}];
        }`}return`
        ${iy("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${Q.registerUniforms(le).declareVariables(...Ce,We)}
        ${Ae}
        ${Nc(c,q,X,ce,s,t,ge[0],ge[1],ge[2],ee)}
        ${w?Ls(C,v,ee,void 0,!c,B):Vs(C,v,ee,void 0,!c,B,!1,void 0,l)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${k};${w};${q};${X};${ce};${A};${O};${B}`,inputDependencies:he},getRunData:()=>({outputs:[{dims:u?u(r):r,dataType:e[0].dataType}],dispatchGroup:{x:T[0],y:T[1],z:T[2]},programUniforms:se}),getShaderSource:fe}}}),Pc,ja,bi,Uc,Ka,Wc,ay,sy,i1=K(()=>{_e(),lr(),Se(),Te(),Hr(),Ro(),Pc=e=>{let t=1;for(let r=0;r<e.length;r++)t*=e[r];return t},ja=e=>typeof e=="number"?[e,e,e]:e,bi=(e,t)=>t<=1?e:e+(e-1)*(t-1),Uc=(e,t,r,n=1)=>{let a=bi(t,n);return Math.floor((e[0]*(r-1)-r+a)/2)},Ka=(e,t,r,n,a)=>{a==null&&(a=Uc(e,t[0],n[0]));let i=[0,0,0,r];for(let s=0;s<3;s++)e[s]+2*a>=t[s]&&(i[s]=Math.trunc((e[s]-t[s]+2*a)/n[s]+1));return i},Wc=(e,t,r,n,a,i,s,l,u,c)=>{let f,h,g,_;if(e==="VALID"&&(e=0),typeof e=="number"){f={top:e,bottom:e,left:e,right:e,front:e,back:e};let b=Ka([t,r,n,1],[l,u,c],1,[a,i,s],e);h=b[0],g=b[1],_=b[2]}else if(Array.isArray(e)){if(!e.every((w,S,$)=>w===$[0]))throw Error(`Unsupported padding parameter: ${e}`);f={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let b=Ka([t,r,n,1],[l,u,c],1,[a,i,s],e[0]);h=b[0],g=b[1],_=b[2]}else if(e==="SAME_UPPER"){h=Math.ceil(t/a),g=Math.ceil(r/i),_=Math.ceil(n/s);let b=(h-1)*a+l-t,w=(g-1)*i+u-r,S=(_-1)*s+c-n,$=Math.floor(b/2),v=b-$,C=Math.floor(w/2),T=w-C,k=Math.floor(S/2),A=S-k;f={top:C,bottom:T,left:k,right:A,front:$,back:v}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:f,outDepth:h,outHeight:g,outWidth:_}},ay=(e,t,r,n,a,i=!1,s="channelsLast")=>{let l,u,c,f,h;if(s==="channelsLast")[l,u,c,f,h]=e;else if(s==="channelsFirst")[l,h,u,c,f]=e;else throw new Error(`Unknown dataFormat ${s}`);let[g,,_,b,w]=t,[S,$,v]=ja(r),[C,T,k]=ja(n),A=bi(_,C),O=bi(b,T),B=bi(w,k),{padInfo:q,outDepth:X,outHeight:ce,outWidth:ge}=Wc(a,u,c,f,S,$,v,A,O,B),se=i?g*h:g,he=[0,0,0,0,0];return s==="channelsFirst"?he=[l,se,X,ce,ge]:s==="channelsLast"&&(he=[l,X,ce,ge,se]),{batchSize:l,dataFormat:s,inDepth:u,inHeight:c,inWidth:f,inChannels:h,outDepth:X,outHeight:ce,outWidth:ge,outChannels:se,padInfo:q,strideDepth:S,strideHeight:$,strideWidth:v,filterDepth:_,filterHeight:b,filterWidth:w,effectiveFilterDepth:A,effectiveFilterHeight:O,effectiveFilterWidth:B,dilationDepth:C,dilationHeight:T,dilationWidth:k,inShape:e,outShape:he,filterShape:t}},sy=(e,t,r,n,a,i)=>{let s=i==="channelsLast";s?e[0].dims[3]:e[0].dims[1];let l=[64,1,1],u={x:r.map((S,$)=>$)},c=[Math.ceil(Pc(u.x.map(S=>r[S]))/l[0]),1,1];Oe("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${c}`);let f=1,h=M.size(r),g=[{type:12,data:h},{type:12,data:n},{type:12,data:a},{type:12,data:t.strides},{type:12,data:t.dilations}];Lr(t,g),g.push(...oe(e[0].dims,e[1].dims));let _=["rank","rank"],b=e.length===3;b&&(g.push(...oe(e[2].dims)),_.push("rank")),g.push(...oe(r));let w=S=>{let $=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:n.length},{name:"pads",type:"u32",length:a.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];Vr(t,$);let v=1,C=Ye(e[0].dataType),T=U("x",e[0].dataType,e[0].dims.length,f),k=U("W",e[1].dataType,e[1].dims.length,v),A=[T,k],O=ne("result",e[0].dataType,r.length,v),B="";if(b){let ce=U("bias",e[2].dataType,e[2].dims.length,v);A.push(ce),B+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${C} {
          return bias[${s?ae("coords",4,5):ae("coords",1,5)}];
        }`}let q=rt(f,C),X=Wr(t,q,C);return`
            ${B}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${T.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${k.getByIndices("aIndices")};
            }
          ${S.registerUniforms($).declareVariables(...A,O)}
          ${S.mainStart()}
          ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${O.offsetToIndices("global_idx")};
              let batch = ${ae("coords",0,T.rank)};
              let d2 = ${s?ae("coords",T.rank-1,T.rank):ae("coords",1,T.rank)};
              let xFRCCorner = vec3<u32>(${s?ae("coords",1,T.rank):ae("coords",2,T.rank)},
              ${s?ae("coords",2,T.rank):ae("coords",3,T.rank)},
              ${s?ae("coords",3,T.rank):ae("coords",4,T.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${s?ae("uniforms.x_shape",1,T.rank):ae("uniforms.x_shape",2,T.rank)};
              let xShapeZ = ${s?ae("uniforms.x_shape",2,T.rank):ae("uniforms.x_shape",3,T.rank)};
              let xShapeW = ${s?ae("uniforms.x_shape",3,T.rank):ae("uniforms.x_shape",4,T.rank)};
              let xShapeU = ${s?ae("uniforms.x_shape",4,T.rank):ae("uniforms.x_shape",1,T.rank)};
              let inputDepthNearestVec4 = (xShapeU / 4) * 4;
              let inputDepthVec4Remainder = xShapeU % 4;

              var value = 0.0;
              for (var wF = 0u; wF < uniforms.filter_dims[0]; wF++) {
                let xF = xFCorner + wF * uniforms.dilations[0];
                if (xF < 0 || xF >= xShapeY) {
                  continue;
                }

                for (var wR = 0u; wR < uniforms.filter_dims[1]; wR++) {
                  let xR = xRCorner + wR * uniforms.dilations[1];
                  if (xR < 0 || xR >= xShapeZ) {
                    continue;
                  }

                  for (var wC = 0u; wC < uniforms.filter_dims[2]; wC++) {
                    let xC = xCCorner + wC * uniforms.dilations[2];
                    if (xC < 0 || xC >= xShapeW) {
                      continue;
                    }

                    for (var d1 = 0u; d1 < inputDepthNearestVec4; d1 += 4) {
                      ${s?`let xValues = vec4<f32>(
                               getX(batch, xF, xR, xC, d1),
                               getX(batch, xF, xR, xC, d1 + 1),
                               getX(batch, xF, xR, xC, d1 + 2),
                               getX(batch, xF, xR, xC, d1 + 3));
                            `:`let xValues = vec4<f32>(
                               getX(batch, d1, xF, xR, xC),
                               getX(batch, d1 + 1, xF, xR, xC),
                               getX(batch, d1 + 2, xF, xR, xC),
                               getX(batch, d1 + 3, xF, xR, xC));
                            `}
                            let wValues = vec4<f32>(
                              getW(d2, d1, wF, wR, wC),
                              getW(d2, d1 + 1, wF, wR, wC),
                              getW(d2, d1 + 2, wF, wR, wC),
                              getW(d2, d1 + 3, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                    if (inputDepthVec4Remainder == 1) {
                        ${s?`value += getX(batch, xF, xR, xC, inputDepthNearestVec4)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`:`value += getX(batch, inputDepthNearestVec4, xF, xR, xC)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`}
                    } else if (inputDepthVec4Remainder == 2) {
                      ${s?`let xValues = vec2<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1));
                      `:`let xValues = vec2<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC));
                    `}
                    let wValues = vec2<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC));
                      value += dot(xValues, wValues);
                    } else if (inputDepthVec4Remainder == 3) {
                      ${s?`let xValues = vec3<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 2));
                      `:`let xValues = vec3<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 2, xF, xR, xC));
                    `}
                    let wValues = vec3<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 2, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                  }
                }
              }
              ${b?"value = value + getBiasByOutputCoords(coords)":""};
              ${X}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${s};${f};${b}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:c[0],y:c[1],z:c[2]},programUniforms:g}),getShaderSource:w}}}),oy,ly,n1=K(()=>{_e(),Se(),Te(),Hr(),oy=(e,t,r,n)=>{let a=e.length>2,i=a?"value += b[output_channel];":"",s=e[0].dims,l=e[1].dims,u=t.format==="NHWC",c=u?r[3]:r[1],f=c/t.group,h=u&&f>=4?Ge(c):1,g=M.size(r)/h,_=[{type:12,data:g},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:f}];Lr(t,_),_.push(...oe(s,[l[0],l[1],l[2],l[3]/h]));let b=a?["rank","rank","rank"]:["rank","rank"];_.push(...oe([r[0],r[1],r[2],r[3]/h]));let w=S=>{let $=ne("output",e[0].dataType,r.length,h),v=Ye($.type.tensor),C=Wr(t,$.type.value,v),T=U("x",e[0].dataType,s.length),k=U("w",e[1].dataType,l.length,h),A=[T,k];a&&A.push(U("b",e[2].dataType,e[2].dims,h));let O=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];Vr(t,O);let B=u?`
      for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[0]; wHeight++) {
        let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

        if (xHeight < 0u || xHeight >= uniforms.x_shape[1]) {
          continue;
        }

        for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[1]; wWidth++) {
          let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
          if (xWidth < 0u || xWidth >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[2]; wInChannel++) {
            let input_channel = in_channel_offset + wInChannel;
            let xVal = ${T.get("batch","xHeight","xWidth","input_channel")};
            let wVal = ${k.get("wHeight","wWidth","wInChannel","output_channel")};
            value += xVal * wVal;
          }
        }
      }
      `:`
      for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[1]; wInChannel++) {
        let input_channel = in_channel_offset + wInChannel;
        for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[2]; wHeight++) {
          let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

          if (xHeight < 0u || xHeight >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[3]; wWidth++) {
            let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
            if (xWidth < 0u || xWidth >= uniforms.x_shape[3]) {
              continue;
            }

            let xVal = ${T.get("batch","input_channel","xHeight","xWidth")};
            let wVal = ${k.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${S.registerUniforms(O).declareVariables(...A,$)}

  ${S.mainStart()}
    ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${$.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${u?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${u?1:2}], outputIndices[${u?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${h} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${u?2:1}];

    var value: ${$.type.value} = ${$.type.value}(0);
    ${B}
    ${i}
    ${C}
    ${$.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${h}`,inputDependencies:b},getRunData:()=>({outputs:[{dims:n?n(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:_}),getShaderSource:w}},ly=(e,t,r,n)=>{let a=e.length>2,i=Ge(r[3]),s=Ge(r[2]),l=M.size(r)/i/s,u=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/i],c=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/i],f=[r[0],r[1],r[2],r[3]/i],h=[{type:12,data:l},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];Lr(t,h),h.push(...oe(u,c,f));let g=(s-1)*t.strides[1]+c[1],_=b=>{let w=ne("output",e[0].dataType,f.length,i),S=Ye(w.type.tensor),$=Wr(t,w.type.value,S),v=U("x",e[0].dataType,u.length,i),C=U("w",e[1].dataType,c.length,i),T=[v,C];a&&T.push(U("b",e[2].dataType,e[2].dims,i));let k=a?"value += b[output_channel];":"",A=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return Vr(t,A),`
  ${b.registerUniforms(A).declareVariables(...T,w)}
  ${b.mainStart()}
    ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${s}u;
    let col = (index1 % width1) * ${s}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${v.type.value}, ${g}>;
    var values: array<${w.type.value}, ${s}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${c[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${g}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${v.get("batch","u32(x_height)","u32(x_width)","input_channel")};
          } else {
            x_vals[i] = ${v.type.value}(0);
          }
        }
        for (var w_width: u32 = 0u; w_width < ${c[1]}; w_width++) {
          let w_val = ${C.get("w_height","w_width","0","output_channel")};
          for (var i = 0u; i < ${s}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${s}u; i++) {
      var value = values[i];
      ${k}
      ${$}
      ${w.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${i};${s};${g};${c[0]};${c[1]}`,inputDependencies:a?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:n?n(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:h}),getShaderSource:_}}}),Lc,mn,Vc,gn,qs,Qa,qc,Fc,Fs,a1=K(()=>{Se(),r1(),i1(),Do(),n1(),Hr(),Bo(),Cr(),Lc=(e,t,r,n,a,i)=>{let s=e[0],l=e.slice(i?1:2,i?3:4),u=l.length,c=t[0],f=t.slice(2).map((g,_)=>g+(g-1)*(r[_]-1)),h=l.map((g,_)=>g+n[_]+n[_+u]).map((g,_)=>Math.floor((g-f[_]+a[_])/a[_]));return h.splice(0,0,s),h.splice(i?3:1,0,c),h},mn=[2,3,1,0],Vc=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],n=e[1].dims[1]*t.group;if(r!==n)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let a=e[0].dims.length-2;if(t.dilations.length!==a)throw new Error(`dilations should be ${a}D`);if(t.strides.length!==a)throw new Error(`strides should be ${a}D`);if(t.pads.length!==a*2)throw new Error(`pads should be ${a*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},gn=(e,t)=>{let r=e.kernelShape.slice();r.length<t[1].dims.length-2&&r.push(...Array(t[1].dims.length-2-r.length).fill(0));for(let i=2;i<t[1].dims.length;++i)r[i-2]===0&&(r[i-2]=t[1].dims[i]);let n=e.pads.slice();Pn.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,r,n,e.format==="NHWC",e.autoPad);let a=Object.assign({},e);return Object.assign(a,{kernelShape:r,pads:n}),a},qs=e=>{let t=Oo(e),r=e.format,n=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],a=e.dilations,i=e.group,s=e.kernel_shape,l=e.pads,u=e.strides,c=e.w_is_const();return{autoPad:n,format:r,dilations:a,group:i,kernelShape:s,pads:l,strides:u,wIsConst:c,...t,cacheKey:`${e.format};${t.activation};`}},Qa=(e,t,r,n)=>{let a=r.format==="NHWC",i=Lc(t[0].dims,t[1].dims,r.dilations,r.pads,r.strides,a);if(r.group!==1){let A=[t[0]];if(a){let O=e.kernelCustomData.wT??e.compute(Tt(t[1],mn),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=O),A.push(O)}else A.push(t[1]);t.length===3&&A.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&a&&t[1].dims[0]===r.group&&t[1].dims[1]===1&&r.dilations[0]===1&&r.dilations[1]===1?e.compute(ly(A,r,i,n),{inputs:A}):e.compute(oy(A,r,i,n),{inputs:A});return}let s=t.length===3,l=t[0].dims[a?1:2],u=t[0].dims[a?2:3],c=t[0].dims[a?3:1],f=t[1].dims[2],h=t[1].dims[3],g=i[a?1:2],_=i[a?2:3],b=i[a?3:1],w=a&&f===l&&h===u&&r.pads[0]===0&&r.pads[1]===0;if(w||f===1&&h===1&&r.dilations[0]===1&&r.dilations[1]===1&&r.strides[0]===1&&r.strides[1]===1&&r.pads[0]===0&&r.pads[1]===0){let A=i[0],O,B,q,X=[];if(a){let se=e.kernelCustomData.wT??e.compute(Tt(t[1],mn),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];if(r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=se),w){let he=l*u*c;O=t[0].reshape([1,A,he]),B=se.reshape([1,he,b]),q=[1,A,b]}else O=t[0].reshape([A,l*u,c]),B=se.reshape([1,c,b]),q=[A,g*_,b];X.push(O),X.push(B)}else O=t[0].reshape([A,c,l*u]),B=t[1].reshape([1,b,c]),q=[A,b,g*_],X.push(B),X.push(O);s&&X.push(t[2]);let ce=q[2],ge=X[0].dims[X[0].dims.length-1];ce<8&&ge<8?e.compute(Mo(X,r,i,q,a,n),{inputs:X}):e.compute(Wn(X,r,i,q,a,n),{inputs:X});return}let S=!0,$=e.kernelCustomData.wT??e.compute(Tt(t[1],mn),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=$);let v=[t[0],$];s&&v.push(t[2]);let C=a?g*_:b,T=a?b:g*_,k=f*h*c;e.compute(ny(v,r,i,C,T,k,s,S,n),{inputs:v})},qc=(e,t)=>{let r=t.format==="NHWC",n=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&n.push(e.inputs[2]);let a=[0,t.pads[0],0,t.pads[1]],i=[1].concat(t.strides),s=[1].concat(t.dilations),l=[1].concat(t.kernelShape),u=gn({...t,pads:a,strides:i,dilations:s,kernelShape:l},n);Qa(e,n,u,c=>r?[c[0],c[2],c[3]]:[c[0],c[1],c[3]])},Fc=(e,t,r)=>{let n=r.format==="NHWC"?"channelsLast":"channelsFirst",a=gn(r,t),i=r.autoPad==="NOTSET"?r.pads:r.autoPad,s=ay(t[0].dims,t[1].dims,r.strides,r.dilations,i,!1,n);e.compute(sy(t,a,s.outShape,[s.filterDepth,s.filterHeight,s.filterWidth],[s.padInfo.front,s.padInfo.top,s.padInfo.left],n))},Fs=(e,t)=>{if(Vc(e.inputs,t),e.inputs[0].dims.length===3)qc(e,t);else if(e.inputs[0].dims.length===5)Fc(e,e.inputs,t);else{let r=gn(t,e.inputs);Qa(e,e.inputs,r)}}}),uy,s1=K(()=>{_e(),lr(),Se(),Te(),uy=(e,t,r)=>{let n=e.length>2,a=t.outputShape,i=t.format==="NHWC",s=t.group,l=e[1].dims,u=l[2]/s,c=l[3],f=i?Ge(u):1,h=i?Ge(c):1,g=i?c===1?f:h:1,_=M.size(a)/h,b=[Math.ceil(_/64),1,1];Oe("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${b}`);let w=["rank","rank"],S=[t.strides[0],t.strides[1]],$=[t.kernelShape[i?1:2],t.kernelShape[i?2:3]],v=[t.dilations[0],t.dilations[1]],C=[$[0]+(t.dilations[0]<=1?0:(t.kernelShape[i?1:2]-1)*(t.dilations[0]-1)),$[1]+(t.dilations[1]<=1?0:(t.kernelShape[i?2:3]-1)*(t.dilations[1]-1))],T=[C[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),C[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],k=[{type:12,data:_},{type:12,data:S},{type:12,data:$},{type:12,data:v},{type:12,data:C},{type:6,data:T},{type:12,data:u},{type:12,data:c},...oe(e[0].dims,e[1].dims)];n&&(k.push(...oe(e[2].dims)),w.push("rank")),k.push(...oe(a));let A=O=>{let B=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:S.length},{name:"filter_dims",type:"u32",length:$.length},{name:"dilations",type:"u32",length:$.length},{name:"effective_filter_dims",type:"u32",length:C.length},{name:"pads",type:"i32",length:T.length},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],q=Ye(e[0].dataType),X=i?1:2,ce=i?2:3,ge=i?3:1,se=U("W",e[1].dataType,e[1].dims.length,g),he=U("Dy",e[0].dataType,e[0].dims.length,f),fe=[he,se];n&&fe.push(U("bias",e[2].dataType,[a[ge]].length,h));let Q=ne("result",e[0].dataType,a.length,h),le=()=>{let ee="";if(f===1)ee+=`
        let w_offset = ${se.indicesToOffset(`${se.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
        let wValue = ${se.getByOffset(`w_offset / ${g}`)};
        dotProd = dotProd + xValue * wValue;`;else if(c===1)ee+=`
          let wValue = ${se.getByOffset(`${se.indicesToOffset(`${se.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)} / ${g}`)};
          dotProd = dotProd + dot(xValue, wValue);`;else for(let Ae=0;Ae<f;Ae++)ee+=`
            let wValue${Ae} = ${se.getByOffset(`${se.indicesToOffset(`${se.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${Ae}, wOutChannel)`)} / ${g}`)};
            dotProd = dotProd + xValue[${Ae}] * wValue${Ae};`;return ee},ue=`
            let outputIndices = ${Q.offsetToIndices(`global_idx * ${h}`)};
            let batch = ${Q.indicesGet("outputIndices",0)};
            let d1 = ${Q.indicesGet("outputIndices",ge)};
            let r = ${Q.indicesGet("outputIndices",X)};
            let c = ${Q.indicesGet("outputIndices",ce)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${Q.type.value}(0.0);
            var wR: u32 = 0;
            if (uniforms.dilations.x == 1) {
              // Minimum wR >= 0 that satisfies (dyRCorner + wR) % (uniforms.strides.x) == 0
              wR = u32(((dyRCorner + i32(uniforms.strides.x) - 1) / i32(uniforms.strides.x)) * i32(uniforms.strides.x) - dyRCorner);
            }
            for (; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
              if (wR % uniforms.dilations.x != 0) {
                continue;
              }
              let dyR = (${q}(dyRCorner) + ${q}(wR)) / ${q}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${q}(uniforms.Dy_shape[${X}]) || fract(dyR) > 0.0 ||
                  wRPerm < 0) {
                continue;
              }
              let idyR: u32 = u32(dyR);
              var wC: u32 = 0;
              if (uniforms.dilations.y == 1) {
                // Minimum wC >= 0 that satisfies (dyCCorner + wC) % (uniforms.strides.y) == 0
                wC = u32(((dyCCorner + i32(uniforms.strides.y) - 1) / i32(uniforms.strides.y)) * i32(uniforms.strides.y) - dyCCorner);
              }

              for (; wC < uniforms.effective_filter_dims.y; wC = wC + 1) {
                if (wC % uniforms.dilations.y != 0) {
                  continue;
                }
                let dyC = (${q}(dyCCorner) + ${q}(wC)) / ${q}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${q}(uniforms.Dy_shape[${ce}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group; d2 = d2 + ${f}) {
                  let xValue = ${i?he.getByOffset(`${he.indicesToOffset(`${he.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${f}`):he.get("batch","inputChannel","idyR","idyC")};
                  ${le()}
                  inputChannel = inputChannel + ${f};
                }
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${n?` + bias[d1 / ${h}]`:""};
            ${Q.setByOffset("global_idx","value")};
          `;return`
    ${O.registerUniforms(B).declareVariables(...fe,Q)}
      ${O.mainStart()}
      ${O.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${ue}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${f}${g}${h}${c===1}`,inputDependencies:w},getRunData:()=>({dispatchGroup:{x:b[0],y:b[1],z:b[2]},outputs:[{dims:r?r(a):a,dataType:e[0].dataType}],programUniforms:k}),getShaderSource:A}}}),Hc,Gc,jc,Za,dy,Kc,Xa,Qc,cy,o1=K(()=>{s1(),Hr(),Cr(),Hc=(e,t,r,n,a,i)=>(e-1)*t+r+(n-1)*a+1-i,Gc=(e,t,r,n,a)=>{let i=Math.floor(e/2);t==="SAME_UPPER"?(r[n]=i,r[a]=e-i):t==="SAME_LOWER"&&(r[n]=e-i,r[a]=i)},jc=(e,t,r,n,a,i,s,l,u,c)=>{let f=e.length-2,h=c.length===0;u.length<f&&u.push(...Array(f-u.length).fill(0));let g=e[0],_=t[l?3:1]*a;for(let b=0,w=e.length-f-(l?1:0);b<f;++b,++w){let S=e[w],$=h?S*s[b]:c[b],v=Hc(S,s[b],i[b],t[w],r[b],$);Gc(v,n,i,b,b+f),h&&c.push(s[b]*(S-1)+u[b]+(t[w]-1)*r[b]+1-i[b]-i[b+f])}c.splice(0,0,g),c.splice(l?3:1,0,_)},Za=(e,t)=>{let r=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((h,g)=>h*g,1)===0){r.length=0;for(let h=2;h<t[1].dims.length;++h)r.push(t[1].dims[h])}let n=e.format==="NHWC";r.splice(0,0,t[1].dims[0]),r.splice(n?3:1,0,t[1].dims[1]);let a=e.pads.slice(),i=e.outputShape.slice(),s=e.outputPadding.slice(),l=t[0].dims,u=e.dilations.slice();if(u.reduce((h,g)=>h+g,0)===0){let h=t[0].dims.length-2;u=new Array(h).fill(1)}let c=e.strides.slice();if(c.reduce((h,g)=>h+g,0)===0){let h=t[0].dims.length-2;c=new Array(h).fill(1)}jc(l,r,u,e.autoPad,e.group,a,c,n,s,i);let f=Object.assign({},e);return Object.assign(f,{kernelShape:r,pads:a,outputPadding:s,outputShape:i,dilations:u,strides:c}),f},dy=e=>{let t=Oo(e),r=e.format,n=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],a=e.dilations,i=e.group,s=e.kernelShape,l=e.pads,u=e.strides,c=e.wIsConst(),f=e.outputPadding,h=e.outputShape;return{autoPad:n,format:r,dilations:a,group:i,kernelShape:s,outputPadding:f,outputShape:h,pads:l,strides:u,wIsConst:c,...t,cacheKey:`${e.format};${t.activation};`}},Kc=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],n=e[1].dims[0];if(r!==n)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let a=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==a))throw new Error("invalid bias");let i=e[0].dims.length-2;if(t.dilations.reduce((s,l)=>s+l,0)>0&&t.dilations.length!==i)throw new Error(`dilations should be ${i}D`);if(t.strides.reduce((s,l)=>s+l,0)>0&&t.strides.length!==i)throw new Error(`strides should be ${i}D`);if(t.pads.reduce((s,l)=>s+l,0)>0&&t.pads.length!==i*2)throw new Error(`pads should be ${i*2}D`);if(t.outputPadding.length!==i&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${i}D`);if(t.kernelShape.reduce((s,l)=>s+l,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},Xa=(e,t,r,n)=>{let a=e.kernelCustomData.wT??e.compute(Tt(t[1],[2,3,0,1]),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=a);let i=[t[0],a];t.length===3&&i.push(t[2]),e.compute(uy(i,r,n),{inputs:i})},Qc=(e,t)=>{let r=t.format==="NHWC",n=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&n.push(e.inputs[2]);let a=t.kernelShape;(a.length===0||a[0]===0)&&(a=[e.inputs[1].dims[2]]);let i=t.dilations;(i.length===0||i[0]===0)&&(i=[1]);let s=t.strides;(s.length===0||s[0]===0)&&(s=[1]);let l=t.pads;l.length===0&&(l=[0,0]),l=[0,l[0],0,l[1]],s=[1].concat(s),i=[1].concat(i),a=[1].concat(a);let u=t.outputPadding;u=[0].concat(u);let c=Za({...t,pads:l,strides:s,dilations:i,kernelShape:a,outputPadding:u},n);Xa(e,n,c,f=>r?[f[0],f[2],f[3]]:[f[0],f[1],f[3]])},cy=(e,t)=>{if(Kc(e.inputs,t),e.inputs[0].dims.length===3)Qc(e,t);else{let r=Za(t,e.inputs);Xa(e,e.inputs,r)}}}),Zc,py,fy,l1=K(()=>{_e(),Se(),Ke(),Te(),Zc=(e,t,r,n)=>{let a=M.size(t),i=t.length,s=U("input",e,i),l=ne("output",e,i),u=r.dataType===6?r.getInt32Array()[0]:Number(r.getBigInt64Array()[0]),c=M.normalizeAxis(u,i),f=h=>{let g=` i32(${s.indicesGet("inputIndices","uniforms.axis")}) `,_=ae("uniforms.input_shape","uniforms.axis",i),b=n.reverse?g+(n.exclusive?" + 1":""):"0",w=n.reverse?_:g+(n.exclusive?"":" + 1");return`
                ${h.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(s,l)}
                ${h.mainStart()}
                  ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${l.offsetToIndices("global_idx")};
                  var sum = ${l.type.value}(0);
                  let first : i32 = ${b};
                  let last : i32 = ${w};
                  for (var i : i32 = first; i < last; i++) {
                    ${s.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${s.getByIndices("inputIndices")};
                  }
                  ${l.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:n.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:[{type:12,data:a},{type:12,data:c},...oe(t,t)]}),getShaderSource:f}},py=(e,t)=>{let r=e.inputs[0].dims,n=e.inputs[0].dataType,a=e.inputs[1];e.compute(Zc(n,r,a,t),{inputs:[0]})},fy=e=>{let t=e.exclusive===1,r=e.reverse===1;return Ne({exclusive:t,reverse:r})}}),Xc,Jc,Yc,hy,my,u1=K(()=>{_e(),Se(),Ke(),Te(),Xc=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},Jc=(e,t,r,n)=>{let a=[];a.push(`fn perm(i: ${n.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`);for(let i=0;i<t;++i)a.push(r.indicesSet("a",e[i],`i[${i}]`));return a.push("return a;}"),a.join(`
`)},Yc=(e,t)=>{let r,n,a,i,s,l,u=t.format==="NHWC",c=t.blocksize,f=t.mode==="DCR";u?([r,n,a,i]=e.dims,s=f?[r,n,a,c,c,i/c**2]:[r,n,a,i/c**2,c,c],l=f?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([r,n,a,i]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],s=f?[r,c,c,i/c**2,n,a]:[r,i/c**2,c,c,n,a],l=f?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let h=e.reshape(s),g=h.dims.length,_=e.dataType,b=U("a",_,g),w=ne("output",_,g),S=$=>`
  ${$.registerUniform("output_size","u32").declareVariables(b,w)}

  ${Jc(l,g,b,w)}

  ${$.mainStart()}
    ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${w.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${w.setByOffset("global_idx",b.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:$=>{let v=u?[r,n*c,a*c,i/c**2]:[r,i/c**2,n*c,a*c],C=M.size(v),T=h.dims,k=M.sortBasedOnPerm(T,l);return{outputs:[{dims:v,dataType:$[0].dataType}],dispatchGroup:{x:Math.ceil(C/64)},programUniforms:[{type:12,data:C},...oe(T,k)]}},getShaderSource:S}},hy=(e,t)=>{Xc(e.inputs),e.compute(Yc(e.inputs[0],t))},my=e=>Ne({blocksize:e.blocksize,mode:e.mode,format:e.format})}),yn,wi,Ja,ep,tp,rp,ip,Ya,np,gy,yy,d1=K(()=>{_e(),Se(),Ke(),Te(),yn="[a-zA-Z]|\\.\\.\\.",wi="("+yn+")+",Ja="^"+wi+"$",ep="("+wi+",)*"+wi,tp="^"+ep+"$",rp=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let r=this.symbolToIndices.get(e);r===void 0?r=[t]:r.push(t),this.symbolToIndices.set(e,r)}},ip=class{constructor(e,t){var a;this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[r,n]=t.includes("->")?t.split("->",2):[t,""];if(!r.match(RegExp(tp)))throw new Error("Invalid LHS term");if(r.split(",").forEach((i,s)=>{let l=e[s].dims.slice();if(!i.match(RegExp(Ja)))throw new Error("Invalid LHS term");let u=this.processTerm(i,!0,l,s);this.lhs.push(u)}),n==="")n+=[...this.symbolToInfo.entries()].filter(([i,s])=>s.count===1||i==="...").map(([i])=>i).join("");else if(!n.match(RegExp(wi)))throw new Error("Invalid RHS");(a=n.match(RegExp(yn,"g")))==null||a.forEach(i=>{if(i==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let s=this.symbolToInfo.get(i);if(s===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(s.dimValue)}}),this.rhs=this.processTerm(n,!1,this.outputDims)}addSymbol(e,t,r){let n=this.symbolToInfo.get(e);if(n!==void 0){if(n.dimValue!==t&&n.count!==1)throw new Error("Dimension mismatch");n.count++,n.inputIndices.push(r)}else n={count:1,dimValue:t,inputIndices:[r]};this.symbolToInfo.set(e,n)}processTerm(e,t,r,n=-1){let a=r.length,i=!1,s=[],l=0;if(!e.match(RegExp(Ja))&&!t&&e!=="")throw new Error("Invalid LHS term");let u=e.match(RegExp(yn,"g")),c=new rp(n);return u==null||u.forEach((f,h)=>{if(f==="..."){if(i)throw new Error("Only one ellipsis is allowed per input term");i=!0;let g=a-u.length+1;if(g<0)throw new Error("Ellipsis out of bounds");if(s=r.slice(l,l+g),this.hasEllipsis){if(this.ellipsisDims.length!==s.length||this.ellipsisDims.toString()!==s.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=s;else throw new Error("Ellipsis must be specified in the LHS");for(let _=0;_<s.length;_++){let b=String.fromCharCode(48+_);c.addSymbol(b,h+_),this.addSymbol(b,r[l++],n)}}else c.addSymbol(f,h+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(f,r[l++],n)}),c}},Ya=e=>e+"_max",np=(e,t,r,n)=>{let a=e.map(c=>c.length).map((c,f)=>U(`input${f}`,t,c)),i=M.size(n),s=ne("output",t,n.length),l=[...r.symbolToInfo.keys()].filter(c=>!r.rhs.symbolToIndices.has(c)),u=c=>{let f=[],h="var prod = 1.0;",g="var sum = 0.0;",_="sum += prod;",b=[],w=[],S=[],$=[],v=r.symbolToInfo.size===r.rhs.symbolToIndices.size;r.symbolToInfo.forEach((T,k)=>{var A;if(r.rhs.symbolToIndices.has(k)){let O=(A=r.rhs.symbolToIndices.get(k))==null?void 0:A[0];O!==void 0&&r.lhs.forEach((B,q)=>{if(T.inputIndices.includes(q)){let X=B.symbolToIndices.get(k);if(X===void 0)throw new Error("Invalid symbol error");X.forEach(ce=>{f.push(`${a[q].indicesSet(`input${q}Indices`,ce,s.indicesGet("outputIndices",O))}`)})}})}else r.lhs.forEach((O,B)=>{if(T.inputIndices.includes(B)){let q=O.symbolToIndices.get(k);if(q===void 0)throw new Error("Invalid symbol error");q.forEach(X=>{b.push(`${a[B].indicesSet(`input${B}Indices`,X,`${k}`)}`)}),$.push(`prod *= ${a[B].getByIndices(`input${B}Indices`)};`)}}),w.push(`for(var ${k}: u32 = 0; ${k} < uniforms.${Ya(k)}; ${k}++) {`),S.push("}")});let C=v?[...f,`let sum = ${a.map((T,k)=>T.getByIndices(`input${k}Indices`)).join(" * ")};`]:[...f,g,...w,...b,h,...$,_,...S];return`
            ${c.registerUniforms(l.map(T=>({name:`${Ya(T)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...a,s)}

            ${c.mainStart()}
            ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${s.offsetToIndices("global_idx")};
            ${a.map((T,k)=>`var input${k}Indices: ${a[k].type.indices};`).join(`
`)}
            ${C.join(`
`)};
            ${s.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:r.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let c=l.filter(h=>r.symbolToInfo.has(h)).map(h=>{var g;return{type:12,data:((g=r.symbolToInfo.get(h))==null?void 0:g.dimValue)||0}});c.push({type:12,data:i});let f=e.map((h,g)=>[...oe(h)]).reduce((h,g)=>h.concat(g),c);return f.push(...oe(n)),{outputs:[{dims:n,dataType:t}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:f}},getShaderSource:u}},gy=(e,t)=>{let r=new ip(e.inputs,t.equation),n=r.outputDims,a=e.inputs.map((i,s)=>i.dims);e.compute(np(a,e.inputs[0].dataType,r,n))},yy=e=>{let t=e.equation.replace(/\s+/g,"");return Ne({equation:t})}}),ap,es,sp,op,_y,c1=K(()=>{_e(),Se(),Te(),ap=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),n=r.length<t.length?0:r.length-t.length,a=t.length<r.length?0:t.length-r.length;for(;n<r.length&&a<t.length;++n,++a)if(r[n]!==t[a]&&r[n]!==1&&t[a]!==1)throw new Error("Expand requires shape to be broadcastable to input")},es=(e,t)=>{let r=e.length-t.length,n=[];for(let a=0;a<r;++a)n.push(e[a]);for(let a=0;a<t.length;++a)n.push(t[a]===1?e[a+r]:t[a]);return n},sp=(e,t)=>e.length>t.length?es(e,t):es(t,e),op=e=>{let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),n=sp(t,r),a=e[0].dataType,i=a===9||M.size(t)===1,s=a===9||t.length>0&&t[t.length-1]%4===0?4:1,l=i||n.length>0&&n[n.length-1]%4===0?4:1,u=Math.ceil(M.size(n)/l),c=h=>{let g=U("input",a,t.length,s),_=ne("output",a,n.length,l),b;if(a===9){let w=(S,$,v="")=>`
          let outputIndices${$} = ${_.offsetToIndices(`outputOffset + ${$}u`)};
          let offset${$} = ${g.broadcastedIndicesToOffset(`outputIndices${$}`,_)};
          let index${$} = offset${$} / 4u;
          let component${$} = offset${$} % 4u;
          ${S}[${$}] = ${v}(${g.getByOffset(`index${$}`)}[component${$}]);
        `;b=`
        let outputOffset = global_idx * ${l};
        var data = vec4<u32>(0);
        ${w("data",0,"u32")}
        ${w("data",1,"u32")}
        ${w("data",2,"u32")}
        ${w("data",3,"u32")}
        ${_.setByOffset("global_idx","data")}
      }`}else b=`
        let outputIndices = ${_.offsetToIndices(`global_idx * ${l}`)};
        let inputOffset = ${g.broadcastedIndicesToOffset("outputIndices",_)};
        let data = ${_.type.value}(${g.getByOffset(`inputOffset / ${s}`)});
        ${_.setByOffset("global_idx","data")}
      }`;return`
    ${h.registerUniform("vec_size","u32").declareVariables(g,_)}
    ${h.mainStart()}
    ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${b}`},f=[{type:12,data:u},...oe(t,n)];return{name:"Expand",shaderCache:{hint:`${n.length};${s}${l}`,inputDependencies:["rank"]},getShaderSource:c,getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:f})}},_y=e=>{ap(e.inputs),e.compute(op(e.inputs),{inputs:[0]})}}),lp,by,p1=K(()=>{_e(),Se(),Te(),Ao(),lp=e=>{let t=e[0].dataType,r=M.size(e[0].dims),n=M.size(e[1].dims),a=n%4===0,i=s=>{let l=U("x",t,[1],4),u=U("bias",t,[1],4),c=ne("y",t,[1],4),f=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],h=_=>`
      let bias${_}_offset: u32 = (global_idx * 4 + ${_}) % uniforms.bias_size;
      let bias${_} = ${u.getByOffset(`bias${_}_offset / 4`)}[bias${_}_offset % 4];`,g=a?`
      let bias = ${u.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${h(0)}${h(1)}${h(2)}${h(3)}
      let bias = ${l.type.value}(bias0, bias1, bias2, bias3);`;return`${s.registerUniforms(f).declareVariables(l,u,c)}

    ${Us(lt(t))}

    ${s.mainStart(li)}
      ${s.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${l.getByOffset("global_idx")};
      ${g}
      let x_in = x + bias;
      ${c.setByOffset("global_idx",Ws("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${a}`,inputDependencies:["type","type"]},getShaderSource:i,getRunData:s=>({outputs:[{dims:s[0].dims,dataType:s[0].dataType}],programUniforms:[{type:12,data:Math.ceil(r/4)},{type:12,data:n}],dispatchGroup:{x:Math.ceil(r/li/4)}})}},by=e=>{e.inputs.length<2||M.size(e.inputs[1].dims)===0?Ug(e):e.compute(lp(e.inputs))}}),up,dp,wy,vy,f1=K(()=>{_e(),Se(),Ke(),Te(),up=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},dp=(e,t)=>{let r=e[0].dims,n=e[1].dims,a=r.length,i=M.normalizeAxis(t.axis,a),s=r.slice(0);s.splice(i,1,...n);let l=r[i],u=e[0].dataType===9?4:1,c=Math.ceil(M.size(s)/u),f=[{type:12,data:c},{type:6,data:l},{type:12,data:i},...oe(e[0].dims,e[1].dims,s)],h=g=>{let _=U("data",e[0].dataType,e[0].dims.length,u),b=U("inputIndices",e[1].dataType,e[1].dims.length),w=ne("output",e[0].dataType,s.length,u),S=v=>{let C=n.length,T=`var indicesIndices${v}  = ${b.type.indices}(0);`;for(let k=0;k<C;k++)T+=`${C>1?`indicesIndices${v}[${k}]`:`indicesIndices${v}`} = ${s.length>1?`outputIndices${v}[uniforms.axis + ${k}]`:`outputIndices${v}`};`;T+=`
          var idx${v} = ${b.getByIndices(`indicesIndices${v}`)};
          if (idx${v} < 0) {
            idx${v} = idx${v} + uniforms.axisDimLimit;
          }
          var dataIndices${v} : ${_.type.indices};
        `;for(let k=0,A=0;k<a;k++)k===i?(T+=`${a>1?`dataIndices${v}[${k}]`:`dataIndices${v}`} = u32(idx${v});`,A+=C):(T+=`${a>1?`dataIndices${v}[${k}]`:`dataIndices${v}`} = ${s.length>1?`outputIndices${v}[${A}]`:`outputIndices${v}`};`,A++);return T},$;if(e[0].dataType===9){let v=(C,T,k="")=>`
          let outputIndices${T} = ${w.offsetToIndices(`outputOffset + ${T}u`)};
          ${S(T)};
          let offset${T} = ${_.indicesToOffset(`dataIndices${T}`)};
          let index${T} = offset${T} / 4u;
          let component${T} = offset${T} % 4u;
          ${C}[${T}] = ${k}(${_.getByOffset(`index${T}`)}[component${T}]);
        `;$=`
        let outputOffset = global_idx * ${u};
        var value = vec4<u32>(0);
        ${v("value",0,"u32")}
        ${v("value",1,"u32")}
        ${v("value",2,"u32")}
        ${v("value",3,"u32")}
        ${w.setByOffset("global_idx","value")}
      `}else $=`
      let outputIndices = ${w.offsetToIndices("global_idx")};
      ${S("")};
      let value = ${_.getByIndices("dataIndices")};
      ${w.setByOffset("global_idx","value")};
      `;return`
      ${g.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(_,b,w)}
      ${g.mainStart()}
        ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${$}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:f}),getShaderSource:h}},wy=e=>Ne({axis:e.axis}),vy=(e,t)=>{let r=e.inputs;up(r),e.compute(dp(e.inputs,t))}}),cp,$y,xy,h1=K(()=>{_e(),Se(),Te(),cp=(e,t,r,n,a,i,s,l,u)=>{let c=[{type:12,data:i},{type:12,data:n},{type:12,data:a},{type:12,data:r},{type:12,data:s},{type:12,data:l},{type:12,data:u}],f=[i];c.push(...oe(t.dims,f));let h=g=>{let _=U("indices_data",t.dataType,t.dims.length),b=ne("input_slice_offsets_data",12,1,1),w=[_,b],S=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:a.length},{name:"sizes_from_slice_dims_data",type:"u32",length:r.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
  ${g.registerUniforms(S).declareVariables(...w)}
  ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let batch_idx = global_idx / uniforms.num_slices_per_batch;
    let base_offset = batch_idx * uniforms.input_batch_stride;

    let slice_indices_base_offset = global_idx * uniforms.num_slice_dims;
    var relative_slice_offset = 0;
    for (var dim_idx = 0u; dim_idx < uniforms.num_slice_dims; dim_idx ++) {
      var index = i32(indices_data[dim_idx + slice_indices_base_offset].x);
      let input_dim_idx = uniforms.batch_dims + dim_idx;
      if (index < 0) {
        ${a.length===1?"index += i32(uniforms.input_dims);":"index += i32(uniforms.input_dims[input_dim_idx]);"}
      }
      ${r.length===1?"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data);":"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data[dim_idx]);"}
    }

    input_slice_offsets_data[global_idx] =  base_offset + u32(relative_slice_offset);
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${a.length}_${r.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:f,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:c}),getShaderSource:h},{inputs:[t],outputs:[-1]})[0]},$y=(e,t)=>{let r=e.inputs,n=r[0].dims,a=r[0].dataType,i=r[1].dims,s=i[i.length-1],l=M.sizeToDimension(i,i.length-1),u=M.sizeFromDimension(n,t.batchDims+s),c=M.sizeToDimension(n,t.batchDims),f=M.sizeFromDimension(n,t.batchDims),h=l/c,g=new Array(s),_=u;for(let T=0;T<s;++T)g[s-1-T]=_,_*=n[t.batchDims+s-1-T];let b=cp(e,r[1],g,t.batchDims,n,l,h,f,s),w=t.batchDims+s;if(w>n.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let S=i.slice(0,-1).concat(n.slice(w)),$=M.size(S),v=[{type:12,data:$},{type:12,data:u},...oe(r[0].dims,b.dims,S)],C=T=>{let k=U("data",r[0].dataType,r[0].dims.length),A=U("slice_offsets",12,b.dims.length),O=ne("output",r[0].dataType,S.length);return`
          ${T.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(k,A,O)}
            ${T.mainStart()}
            ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:S,dataType:a}],dispatchGroup:{x:Math.ceil($/64)},programUniforms:v}),getShaderSource:C},{inputs:[r[0],b]})},xy=e=>({batchDims:e.batch_dims,cacheKey:""})}),pp,fp,Sy,Ty,m1=K(()=>{_e(),Se(),Ke(),Te(),pp=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let r=M.normalizeAxis(t.quantizeAxis,e[0].dims.length),n=t.blockSize,a=e[0],i=e[2],s=e.length===4?e[3]:void 0;if(i.dims.length!==a.dims.length||!a.dims.map((l,u)=>u===r?Math.ceil(l/n)===i.dims[u]:l===i.dims[u]).reduce((l,u)=>l&&u,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(s){if(s.dataType!==a.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(s.dims.length!==i.dims.length||!s.dims.map((l,u)=>l===i.dims[u]).reduce((l,u)=>l&&u,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},fp=(e,t)=>{let r=e[0].dims,n=e[1].dims,a=r.length,i=M.normalizeAxis(t.gatherAxis,a),s=M.normalizeAxis(t.quantizeAxis,a),l=r.slice(0);l.splice(i,1,...n);let u=M.size(l),c=e[2].dataType,f=e[0].dataType===22,h=[{type:12,data:u},{type:12,data:s},{type:12,data:i},{type:12,data:t.blockSize},...oe(...e.map((_,b)=>_.dims),l)],g=_=>{let b=U("data",e[0].dataType,e[0].dims.length),w=U("inputIndices",e[1].dataType,e[1].dims.length),S=U("scales",e[2].dataType,e[2].dims.length),$=e.length>3?U("zeroPoint",e[3].dataType,e[3].dims.length):void 0,v=ne("output",c,l.length),C=[b,w,S];$&&C.push($);let T=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${_.registerUniforms(T).declareVariables(...C,v)}
        ${_.mainStart()}
        let output_indices = ${v.offsetToIndices("global_idx")};
        var indices_indices = ${w.type.indices}(0);
        ${n.length>1?`
          for (var i: u32 = 0; i < ${n.length}; i++) {
            let index = ${v.indicesGet("output_indices","uniforms.gather_axis + i")};
            ${w.indicesSet("indices_indices","i","index")};
          }`:`indices_indices = ${v.indicesGet("output_indices","uniforms.gather_axis")};`};
        var data_indices = ${b.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${v.indicesGet("output_indices","i")};
          ${b.indicesSet("data_indices","i","index")};
        }
        var index_from_indices = ${w.getByIndices("indices_indices")};
        if (index_from_indices < 0) {
          index_from_indices += ${r[i]};
        }
        ${b.indicesSet("data_indices","uniforms.gather_axis","u32(index_from_indices)")};
        for (var i = uniforms.gather_axis + 1; i < ${l.length}; i++) {
          let index = ${v.indicesGet("output_indices",`i + ${n.length} - 1`)};
          ${b.indicesSet("data_indices","i","index")};
        }
        let data_offset = ${b.indicesToOffset("data_indices")};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${b.getByOffset("data_offset / 8")};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${f?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${S.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${S.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${S.getByIndices("scale_indices")};
        ${$?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${$.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${$.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${f?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${lt(c)}(quantized_data - zero_point) * scale;
        ${v.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((_,b)=>b!==1).map(_=>_.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(_,b)=>"rank")},getRunData:()=>({outputs:[{dims:l,dataType:c}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:h}),getShaderSource:g}},Sy=(e,t)=>{let r=e.inputs;pp(r,t),e.compute(fp(e.inputs,t))},Ty=e=>Ne({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),hp,mp,Cy,ky,g1=K(()=>{_e(),Se(),Ke(),Te(),hp=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},mp=(e,t)=>{let r=e[0].dims,n=e[0].dataType,a=r.length,i=e[1].dims,s=e[1].dataType,l=M.normalizeAxis(t.axis,a),u=r[l],c=i.slice(0),f=M.size(c),h=U("input",n,a),g=U("indicesInput",s,i.length),_=ne("output",n,c.length),b=[{type:12,data:f},{type:6,data:u},{type:12,data:l}];return b.push(...oe(r,i,c)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:c,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:b}),getShaderSource:w=>`
      ${w.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(h,g,_)}
      ${w.mainStart()}
      ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${_.offsetToIndices("global_idx")};

      var idx = ${g.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${h.type.indices}(outputIndices);
      ${h.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${h.getByIndices("inputIndices")};

      ${_.setByOffset("global_idx","value")};
  }`}},Cy=e=>Ne({axis:e.axis}),ky=(e,t)=>{let r=e.inputs;hp(r),e.compute(mp(e.inputs,t))}}),gp,yp,Iy,Ey,y1=K(()=>{_e(),Se(),Te(),gp=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},yp=(e,t)=>{let r=e[0].dims.slice(),n=e[1].dims.slice(),[a,i,s]=zm.getShapeOfGemmResult(r,t.transA,n,t.transB,e.length===3?e[2].dims:void 0),l=[a,i];if(!l)throw new Error("Can't use gemm on the given tensors");let u=16,c=Math.ceil(i/u),f=Math.ceil(a/u),h=!0,g=M.size(l),_=[{type:12,data:h?c:g},{type:12,data:a},{type:12,data:i},{type:12,data:s},{type:1,data:t.alpha},{type:1,data:t.beta}],b=["type","type"];e.length===3&&(_.push(...oe(e[2].dims)),b.push("rank")),_.push(...oe(l));let w=$=>{let v="";t.transA&&t.transB?v="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?v="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?v="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&(v="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let C=t.alpha===1?"":"value *= uniforms.alpha;",T=U("a",e[0].dataType,e[0].dims),k=U("b",e[1].dataType,e[1].dims),A=T.type.value,O=null,B=[T,k];e.length===3&&(O=U("c",e[2].dataType,e[2].dims.length),B.push(O));let q=ne("output",e[0].dataType,l.length);B.push(q);let X=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${$.registerUniforms(X).declareVariables(...B)}

  ${$.mainStart()}
    ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${A}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${v}
    }

    ${C}
    ${O!=null?`let cOffset = ${O.broadcastedIndicesToOffset("vec2(m, n)",q)}; value += ${A}(uniforms.beta) * ${O.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},S=$=>{let v=U("a",e[0].dataType,e[0].dims),C=U("b",e[1].dataType,e[1].dims),T=null,k=[v,C];e.length===3&&(T=U("c",e[2].dataType,e[2].dims.length),k.push(T));let A=ne("output",e[0].dataType,l.length);k.push(A);let O=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],B="",q="";t.transA&&t.transB?(q=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${v.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${C.type.value}(0);
      }
      `,B="value += tile_a[k][local_id.y] * tile_b[local_id.x][k];"):t.transA&&!t.transB?(q=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${v.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${C.type.value}(0);
      }
      `,B="value += tile_a[k][local_id.y] * tile_b[k][local_id.x];"):!t.transA&&t.transB?(q=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${v.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${C.type.value}(0);
      }
      `,B="value += tile_a[local_id.y][k] * tile_b[local_id.x][k];"):!t.transA&&!t.transB&&(q=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${v.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${C.type.value}(0);
      }
      `,B="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let X=t.alpha===1?"":"value *= uniforms.alpha;";return`
  ${$.registerUniforms(O).declareVariables(...k)}
  var<workgroup> tile_a: array<array<${v.type.storage}, ${u}>, ${u}>;
  var<workgroup> tile_b: array<array<${C.type.storage}, ${u}>, ${u}>;
  ${$.mainStart([u,u,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * ${u};
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * ${u};
    let num_tiles = (uniforms.K - 1) / ${u} + 1;
    var k_start = 0u;
    var value = ${A.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${q}
      k_start = k_start + ${u};
      workgroupBarrier();

      for (var k: u32 = 0u; k < ${u}; k++) {
        ${B}
      }
      workgroupBarrier();
    }

    ${X}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${T!=null?`let cOffset = ${T.broadcastedIndicesToOffset("vec2(m, n)",A)}; value += ${A.type.value}(uniforms.beta) * ${T.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return h?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:b},getRunData:()=>({outputs:[{dims:l,dataType:e[0].dataType}],dispatchGroup:{x:c*f},programUniforms:_}),getShaderSource:S}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:b},getRunData:()=>({outputs:[{dims:l,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:_}),getShaderSource:w}},Iy=e=>{let t=e.transA,r=e.transB,n=e.alpha,a=e.beta;return{transA:t,transB:r,alpha:n,beta:a,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},Ey=(e,t)=>{gp(e.inputs),e.compute(yp(e.inputs,t))}}),Ht,nr,Er,zr,_p,bp,wp,vp,$p,xp,Sp,Tp,zy,Ay,_1=K(()=>{_e(),Se(),Ke(),Te(),[Ht,nr,Er,zr]=[0,1,2,3],_p=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},bp=`
  fn gs_get_cubic_coeffs(x: f32) -> vec4<f32> {
    let cubic_alpha = -0.75f;
    let x_abs = abs(x);
    var coeffs: vec4<f32>;
    coeffs[0] = (((cubic_alpha * (x_abs + 1) - 5 * cubic_alpha) * (x_abs + 1) + 8 * cubic_alpha) * (x_abs + 1) - 4 * cubic_alpha);
    coeffs[1] = (((cubic_alpha + 2) * x_abs - (cubic_alpha + 3)) * x_abs * x_abs + 1);
    coeffs[2] = (((cubic_alpha + 2) * (1 - x_abs) - (cubic_alpha + 3)) * (1 - x_abs) * (1 - x_abs) + 1);
    coeffs[3] = (((cubic_alpha * (2 - x_abs) - 5 * cubic_alpha) * (2 - x_abs) + 8 * cubic_alpha) * (2 - x_abs) - 4 * cubic_alpha);
    return coeffs;
  }
`,wp=e=>`
  fn gs_bicubic_interpolate(p: mat4x4<${e}>, x: f32, y: f32) -> ${e} {
    var v: vec4<f32>;
    var coeffs = gs_get_cubic_coeffs(x);
    for (var i = 0; i < 4; i++) {
      v[i] = coeffs[0] * p[i][0] + coeffs[1] * p[i][1] + coeffs[2] * p[i][2] + coeffs[3] * p[i][3];
    }
    coeffs = gs_get_cubic_coeffs(y);
    let pixel = ${e}(coeffs[0] * v[0] + coeffs[1] * v[1] + coeffs[2] * v[2] + coeffs[3] * v[3]);
    return pixel;
  }
`,vp=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,$p=e=>`
  ${e.paddingMode==="reflection"?`
      fn gs_reflect(x: i32, x_min: f32, x_max: f32) -> u32 {
        var dx = 0.0;
        var fx = f32(x);
        let range = x_max - x_min;
        if (fx < x_min) {
          dx = x_min - fx;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_min + r;
          } else {
            fx = x_max - r;
          }
        } else if (fx > x_max) {
          dx = fx - x_max;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_max - r;
          } else {
            fx = x_min + r;
          }
        }
        return u32(fx);
      }`:""}
`,xp=(e,t,r)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${Ht}] = batch;
     indices[${nr}] = channel;`+(()=>{switch(r.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${Er}] = u32(r);
            indices[${zr}] = u32(c);
          }
        `;case"border":return`
          indices[${Er}] = u32(clamp(r, 0, H - 1));
          indices[${zr}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${Er}] = gs_reflect(r, border[1], border[3]);
          indices[${zr}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${r.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices("indices")};
  }
`,Sp=(e,t,r)=>(()=>{switch(r.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${Ht}], indices[${nr}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${Ht}], indices[${nr}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${Ht}], indices[${nr}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${Ht}], indices[${nr}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${Ht}], indices[${nr}], border);

          let dx2 = ${t}(f32(x2) - x);
          let dx1 = ${t}(x - f32(x1));
          let dy2 = ${t}(f32(y2) - y);
          let dy1 = ${t}(y - f32(y1));
          let result = dy2 * (dx2 * p11 + dx1 * p12) + dy1 * (dx2 * p21 + dx1 * p22);
        `;case"bicubic":return`
          let x0 = i32(floor(x)) - 1;
          let y0 = i32(floor(y)) - 1;
          var p: mat4x4<${t}>;
          for (var h = 0; h < 4; h++) {
            for (var w = 0; w < 4; w++) {
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${Ht}], indices[${nr}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${r.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,Tp=(e,t)=>{let r=U("x",e[0].dataType,e[0].dims.length),n=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],a=U("grid",e[1].dataType,n.length,2),i=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(i=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[Ht,nr,Er,zr]=[0,3,1,2]);let s=ne("output",e[0].dataType,i.length),l=r.type.value,u=M.size(i),c=[{type:12,data:u},...oe(e[0].dims,n,i)],f=h=>`
  ${h.registerUniform("output_size","u32").declareVariables(r,a,s)}
  ${bp}
  ${wp(l)}
  ${vp(t)}
  ${$p(t)}
  ${xp(r,l,t)}

  ${h.mainStart()}
    ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${Er}]);
      let W_in = i32(uniforms.x_shape[${zr}]);

      ${t.alignCorners===0?`
      let x_min = -0.5;
      let x_max = f32(W_in) - 0.5;
      let y_min = -0.5;
      let y_max = f32(H_in) - 0.5;
      `:`
      let x_min = 0.0;
      let x_max = f32(W_in) - 1.0;
      let y_min = 0.0;
      let y_max = f32(H_in) - 1.0;
      `};
      let border = vec4<f32>(x_min, y_min, x_max, y_max);

      let indices = ${s.offsetToIndices("global_idx")};
      var grid_indices = vec3<u32>(indices[${Ht}], indices[${Er}], indices[${zr}]);
      let nxy = ${a.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${Sp(s,l,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:h=>{let g=M.size(i);return{outputs:[{dims:i,dataType:h[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:c}},getShaderSource:f}},zy=(e,t)=>{_p(e.inputs),e.compute(Tp(e.inputs,t))},Ay=e=>Ne({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),pt,Cp,Oy,ts,kp,zi,Ry,My=K(()=>{_e(),Se(),Ke(),ko(),zo(),Te(),Cr(),pt=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,Cp=(e,t)=>{let r=e[0],n=pt(e,1),a=pt(e,2),i=pt(e,3),s=pt(e,4),l=pt(e,5),u=pt(e,6),c=pt(e,7);if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let f=r.dims[0],h=r.dims[1],g=r.dims.length===3?r.dims[2]:t.numHeads*r.dims[4],_=h,b=0,w=0,S=Math.floor(g/t.numHeads);if(u&&c&&M.size(u.dims)&&M.size(c.dims)){if(u.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(u.dims[0]!==f||u.dims[1]!==t.numHeads||u.dims[3]!==S)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(c.dims[0]!==f||c.dims[1]!==t.numHeads||c.dims[3]!==S)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(u.dims[2]!==c.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(c.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');b=u.dims[2],w=u.dims[2]}else if(u&&M.size(u.dims)||c&&M.size(c.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let $;if(n&&M.size(n.dims)>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(n.dims.length<3||n.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==n.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(n.dims.length===3){if(n.dims[2]!==r.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');$=2,_=n.dims[1]}else if(n.dims.length===5){if(n.dims[2]!==t.numHeads||n.dims[3]!==2||n.dims[4]!==S)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(a)throw new Error('Expect "value" be none when "key" has packed kv format.');$=5,_=n.dims[1]}else{if(n.dims[1]!==t.numHeads||n.dims[3]!==S)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');$=0,_=n.dims[2]}}else{if(r.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(r.dims[2]!==t.numHeads||r.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');$=3}if(i&&M.size(i.dims)>0){if(i.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(n&&n.dims.length===5&&n.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let v=b+_,C=0;if(s&&M.size(s.dims)>0){C=8;let O=s.dims;throw O.length===1?O[0]===f?C=1:O[0]===3*f+2&&(C=3):O.length===2&&O[0]===f&&O[1]===v&&(C=5),C===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let T=!1,k=g;if(a&&M.size(a.dims)>0){if(a.dims.length!==3&&a.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==a.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(a.dims.length===3){if(_!==a.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');k=a.dims[2]}else{if(_!==a.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');k=a.dims[1]*a.dims[3],T=!0}}let A=!1;if(s&&M.size(s.dims)>0)throw new Error("Key padding mask is not supported");if(l&&M.size(l.dims)>0){if(l.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(l.dims[0]!==f||l.dims[1]!==t.numHeads||l.dims[2]!==h||l.dims[3]!==v)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:f,sequenceLength:h,pastSequenceLength:b,kvSequenceLength:_,totalSequenceLength:v,maxSequenceLength:w,inputHiddenSize:0,hiddenSize:g,vHiddenSize:k,headSize:S,vHeadSize:Math.floor(k/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:C,scale:t.scale,broadcastResPosBias:A,passPastInKv:T,qkvFormat:$}},Oy=e=>Ne({...e}),ts=Ne({perm:[0,2,1,3]}),kp=(e,t,r,n,a,i,s)=>{let l=[n,a,i],u=M.size(l),c=[{type:12,data:u},{type:12,data:s},{type:12,data:i}],f=h=>{let g=ne("qkv_with_bias",t.dataType,l),_=U("qkv",t.dataType,l),b=U("bias",r.dataType,l),w=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${h.registerUniforms(w).declareVariables(_,b,g)}
  ${h.mainStart()}
    ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:l,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:c}),getShaderSource:f},{inputs:[t,r],outputs:[-1]})[0]},zi=(e,t,r,n,a,i,s,l)=>{let u=i;if(s&&M.size(s.dims)>0){if(n===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return u=kp(e,i,s,t,n,r*a,l),u=u.reshape([t,n,r,a]),r===1||n===1?u:e.compute(Tt(u,ts.perm),{inputs:[u],outputs:[-1]})[0]}else return i.dims.length===3&&(u=i.reshape([t,n,r,a])),r===1||n===1?u:e.compute(Tt(u,ts.perm),{inputs:[u],outputs:[-1]})[0]},Ry=(e,t)=>{let r=Cp(e.inputs,t),n=e.inputs[0],a=pt(e.inputs,1),i=pt(e.inputs,2),s=pt(e.inputs,3),l=pt(e.inputs,4),u=pt(e.inputs,5),c=pt(e.inputs,6),f=pt(e.inputs,7);if(n.dims.length===5)throw new Error("Packed QKV is not implemented");if((a==null?void 0:a.dims.length)===5)throw new Error("Packed KV is not implemented");let h=a&&i&&a.dims.length===4&&i.dims.length===4,g=zi(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,n,s,0);if(h)return qi(e,g,a,i,l,void 0,c,f,u,r);if(!a||!i)throw new Error("key and value must be provided");let _=zi(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.headSize,a,s,r.hiddenSize),b=zi(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.vHeadSize,i,s,2*r.hiddenSize);qi(e,g,_,b,l,void 0,c,f,u,r)}}),Ip,Ep,zp,Ap,Hs,By,Dy,Ny=K(()=>{_e(),Se(),Ke(),Te(),Ip=e=>{if(!e||e.length<1)throw new Error("too few inputs")},Ep=(e,t)=>{let r=[],n=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(a=>r.push(Number(a))),n=r.length),Ne({numOutputs:n,axis:t.axis,splitSizes:r})},zp=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${ae("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,Ap=e=>{let t=e.length,r=[];for(let n=0;n<t;++n){let a=e[n].setByIndices("indices","input[global_idx]");t===1?r.push(a):n===0?r.push(`if (output_number == ${n}u) { ${a} }`):n===t-1?r.push(`else { ${a} }`):r.push(`else if (output_number == ${n}) { ${a} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${r.join(`
`)}
      }`},Hs=(e,t)=>{let r=e[0].dims,n=M.size(r),a=e[0].dataType,i=M.normalizeAxis(t.axis,r.length),s=new Array(t.numOutputs),l=U("input",a,r.length),u=new Array(t.numOutputs),c=[],f=[],h=0,g=[{type:12,data:n}];for(let b=0;b<t.numOutputs;b++){h+=t.splitSizes[b],u[b]=h;let w=r.slice();w[i]=t.splitSizes[b],f.push(w),s[b]=ne(`output${b}`,a,w.length),c.push({dims:f[b],dataType:e[0].dataType})}g.push({type:12,data:u},...oe(r,...f));let _=b=>`
  ${b.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",u.length).declareVariables(l,...s)}
  ${zp(u.length)}
  ${Ap(s)}

  ${b.mainStart()}
    ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${l.offsetToIndices("global_idx")};
    var index = ${l.indicesGet("indices",i)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${ae("uniforms.size_in_split_axis","output_number - 1u",u.length)};
      ${l.indicesSet("indices",i,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:_,getRunData:()=>({outputs:c,dispatchGroup:{x:Math.ceil(n/64)},programUniforms:g})}},By=(e,t)=>{Ip(e.inputs);let r=e.inputs.length===1?t:Ep(e.inputs,t);e.compute(Hs(e.inputs,r),{inputs:[0]})},Dy=e=>{let t=e.axis,r=e.splitSizes,n=e.numOutputs<0?r.length:e.numOutputs;if(n!==r.length)throw new Error("numOutputs and splitSizes lengh must be equal");return Ne({axis:t,numOutputs:n,splitSizes:r})}}),Op,Rp,rs,Py,b1=K(()=>{Ke(),zo(),My(),Ny(),Cr(),Op=(e,t)=>{if(t.doRotary)throw new Error("GroupQuerryAttention do_rotary attribute is not supported");if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let r=e[0],n=e[1],a=e[2],i=e[3],s=e[4];if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let l=!1,u=r.dims[0],c=r.dims[1],f=r.dims.length===3?l?r.dims[2]/3:r.dims[2]:t.numHeads*r.dims[4],h=c,g=0,_=!n||n.dims.length===0,b=Math.floor(_?f/(t.numHeads+2*t.kvNumHeads):f/t.numHeads);_&&(f=b*t.numHeads);let w=i&&i.dims.length!==0,S=s&&s.dims.length!==0;if(w&&i.dims.length===4&&i.dims[0]===u&&i.dims[1]!==t.kvNumHeads&&i.dims[2]===t.kvNumHeads&&i.dims[3]===b)throw new Error("BSNH pastKey/pastValue is not supported");if(w&&S){if(i.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(s.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');g=i.dims[2]}else if(w||S)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let $=1;if(n&&n.dims.length>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(n.dims.length<3||n.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==n.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(n.dims.length===3){if(r.dims[2]%n.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');h=n.dims[1]}else if(n.dims.length===5){if(n.dims[2]!==t.numHeads||n.dims[3]!==2||n.dims[4]!==b)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(a)throw new Error('Expect "value" be none when "key" has packed kv format.');h=n.dims[1]}else{if(n.dims[1]!==t.numHeads||n.dims[3]!==b)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');h=n.dims[2]}}else{if(r.dims.length!==3&&r.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(r.dims.length===5&&(r.dims[2]!==t.numHeads||r.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');$=3}let v=0,C=!1,T=t.kvNumHeads?b*t.kvNumHeads:f;if(a&&a.dims.length>0){if(a.dims.length!==3&&a.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==a.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(a.dims.length===3){if(h!==a.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');T=a.dims[2]}else{if(h!==a.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');T=a.dims[1]*a.dims[3],C=!0}}let k=e.length>4?e[5]:void 0;if(k&&k.dims.length!==1&&k.dims[0]!==u)throw new Error('Input "seqlens" is expected to have 1 dimension and the same dim 0 as batch_size');return{batchSize:u,sequenceLength:c,pastSequenceLength:g,kvSequenceLength:h,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:f,vHiddenSize:T,headSize:b,vHeadSize:Math.floor(T/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:v,scale:t.scale,broadcastResPosBias:!1,passPastInKv:C,qkvFormat:$}},Rp=Ne({perm:[0,2,1,3]}),rs=(e,t,r)=>{let n=t,a=r.kvNumHeads;return t.dims.length===3&&r.kvSequenceLength!==0&&(n=t.reshape([r.batchSize,r.kvSequenceLength,a,r.headSize]),n=e.compute(Tt(n,Rp.perm),{inputs:[n],outputs:[-1]})[0]),n},Py=(e,t)=>{var S;let r=Op(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(((S=e.inputs[1])==null?void 0:S.dims.length)===5)throw new Error("Packed KV is not implemented");let n=e.inputs[0],a=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,i=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,s=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,l=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,u=e.inputs.length>4?e.inputs[5]:void 0,c=e.inputs.length>5?e.inputs[6]:void 0,f=r.kvNumHeads?r.kvNumHeads:r.numHeads,h=Ne({axis:2,numOutputs:3,splitSizes:[r.numHeads*r.headSize,f*r.headSize,f*r.headSize]}),[g,_,b]=!a&&!i?e.compute(Hs([n],h),{inputs:[n],outputs:[-1,-1,-1]}):[n,a,i],w=zi(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,g,void 0,0);qi(e,w,rs(e,_,r),rs(e,b,r),void 0,void 0,s,l,void 0,r,u,c)}}),is,Mp,Bp,Uy,w1=K(()=>{_e(),Se(),Cr(),Te(),is=(e,t,r,n,a,i,s,l)=>{let u=Ge(i),c=u===1?"f32":`vec${u}f`,f=u===1?"vec2f":`mat2x${u}f`,h=a*s,g=64;h===1&&(g=256);let _=[a,s,i/u],b=[a,s,2],w=["rank","type","type"],S=[];S.push(...oe(_,b));let $=v=>{let C=U("x",t.dataType,3,u),T=U("scale",r.dataType,r.dims),k=U("bias",n.dataType,n.dims),A=ne("output",1,3,2),O=[C,T,k,A];return`
  var<workgroup> workgroup_shared : array<${f}, ${g}>;
  const workgroup_size = ${g}u;
  ${v.declareVariables(...O)}
  ${v.mainStart(g)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${c}(0);
    var squared_sum = ${c}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${c}(${C.get("batch","channel","h")});
      sum += value;
      squared_sum += value * value;
    }
    workgroup_shared[local_idx] = ${f}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${$r("workgroup_shared[0][0]",u)} / f32(hight * ${u});
      let squared_sum_final = ${$r("workgroup_shared[0][1]",u)} / f32(hight * ${u});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${l}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${u};${l};${g}`,inputDependencies:w},getRunData:()=>({outputs:[{dims:b,dataType:1}],dispatchGroup:{x:h},programUniforms:S}),getShaderSource:$},{inputs:[t,r,n],outputs:[-1]})[0]},Mp=(e,t,r)=>{let n=t[0].dims,a=n,i=2,s=n[0],l=n[1],u=M.sizeFromDimension(n,i),c=Ge(u),f=M.size(a)/c,h=is(e,t[0],t[1],t[2],s,u,l,r.epsilon),g=[s,l,u/c],_=[s,l],b=["type","none"],w=S=>{let $=U("x",t[0].dataType,g.length,c),v=U("scale_shift",1,_.length,2),C=ne("output",t[0].dataType,g.length,c),T=[$,v,C];return`
  ${S.registerUniform("output_size","u32").declareVariables(...T)}
  ${S.mainStart()}
  ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${C.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${v.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${$.getByOffset("global_idx")} * ${C.type.value}(scale_shift.x) + ${C.type.value}(scale_shift.y);
      ${C.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${c}`,inputDependencies:b},getRunData:()=>({outputs:[{dims:a,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:[{type:12,data:f},...oe(g,_,g)]}),getShaderSource:w},{inputs:[t[0],h]})},Bp=(e,t,r)=>{let n=t[0].dims,a=n,i=n[0],s=n[n.length-1],l=M.sizeFromDimension(n,1)/s,u=Ge(s),c=M.size(a)/u,f=[{type:12,data:l},{type:12,data:Math.floor(s/u)}],h=["type","type"],g=!1,_=[0,n.length-1];for(let $=0;$<n.length-2;$++)g=g||n[$+1]!==1,_.push($+1);g=g&&n[n.length-1]!==1;let b=g?e.compute(Tt(e.inputs[0],_),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:n.length},($,v)=>n[_[v]])),w=is(e,b,t[1],t[2],i,l,s,r.epsilon),S=$=>{let v=Ye(t[0].dataType),C=u===1?"vec2f":`mat${u}x2f`,T=O=>{let B=O===0?"x":"y",q=u===1?"f32":`vec${u}f`;switch(u){case 1:return`${v}(${q}(scale.${B}))`;case 2:return`vec2<${v}>(${q}(scale[0].${B}, scale[1].${B}))`;case 4:return`vec4<${v}>(${q}(scale[0].${B}, scale[1].${B}, scale[2].${B}, scale[3].${B}))`;default:throw new Error(`Not supported compoents ${u}`)}},k=U("input",t[0].dataType,t[0].dims,u),A=ne("output",t[0].dataType,a,u);return`
  @group(0) @binding(0) var<storage, read> input : array<${k.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${C}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${A.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${$.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${T(0)}, ${T(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${u}`,inputDependencies:h},getRunData:()=>({outputs:[{dims:a,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:f}),getShaderSource:S},{inputs:[t[0],w]})},Uy=(e,t)=>{t.format==="NHWC"?Bp(e,e.inputs,t):Mp(e,e.inputs,t)}}),Dp,Np,Wy,v1=K(()=>{_e(),Se(),Te(),Dp=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},Np=(e,t,r)=>{let n=t.simplified,a=e[0].dims,i=e[1],s=!n&&e[2],l=a,u=M.normalizeAxis(t.axis,a.length),c=M.sizeToDimension(a,u),f=M.sizeFromDimension(a,u),h=M.size(i.dims),g=s?M.size(s.dims):0;if(h!==f||s&&g!==f)throw new Error(`Size of X.shape()[axis:] == ${f}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${h} and bias size of ${g}`);let _=[];for(let k=0;k<a.length;++k)k<u?_.push(a[k]):_.push(1);let b=Ge(f),w=["type","type"],S=[{type:12,data:c},{type:1,data:f},{type:12,data:Math.floor(f/b)},{type:1,data:t.epsilon}];s&&w.push("type");let $=r>1,v=r>2,C=k=>{let A=Ye(e[0].dataType),O=[U("x",e[0].dataType,e[0].dims,b),U("scale",i.dataType,i.dims,b)];s&&O.push(U("bias",s.dataType,s.dims,b)),O.push(ne("output",e[0].dataType,l,b)),$&&O.push(ne("mean_data_output",1,_)),v&&O.push(ne("inv_std_output",1,_));let B=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${k.registerUniforms(B).declareVariables(...O)}
  ${k.mainStart()}
    ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${Ds("f32",b)};
    var mean_square_vector = ${Ds("f32",b)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${ei(A,b,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${$r("mean_vector",b)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${$r("mean_square_vector",b)} / uniforms.norm_size ${n?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${ei(A,b,"x[j + offset]")};
      let f32scale = ${ei(A,b,"scale[j]")};
      output[j + offset] = ${O[0].type.value}((f32input ${n?"":"- mean"}) * inv_std_dev * f32scale
        ${s?`+ ${ei(A,b,"bias[j]")}`:""}
      );
    }

    ${$?"mean_data_output[global_idx] = mean":""};
    ${v?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},T=[{dims:l,dataType:e[0].dataType}];return $&&T.push({dims:_,dataType:1}),v&&T.push({dims:_,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${b};${r};${n}`,inputDependencies:w},getRunData:()=>({outputs:T,dispatchGroup:{x:Math.ceil(c/64)},programUniforms:S}),getShaderSource:C}},Wy=(e,t)=>{Dp(e.inputs),e.compute(Np(e.inputs,t,e.outputCount))}}),Pp,Ly,$1=K(()=>{Se(),Bo(),Do(),Pp=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},Ly=e=>{Pp(e.inputs);let t=oi.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let r=t[t.length-1],n=e.inputs[0].dims[e.inputs[0].dims.length-1];if(r<8&&n<8)e.compute(Mo(e.inputs,{activation:""},t));else{let a=t[t.length-2],i=M.size(e.inputs[0].dims.slice(0,-2)),s=M.size(e.inputs[1].dims.slice(0,-2));if(i!==1&&a===1&&s===1){let l=e.inputs[0].reshape([1,i,n]),u=e.inputs[1].reshape([1,n,r]),c=[1,i,r],f=[l,u];e.compute(Wn(f,{activation:""},t,c),{inputs:f})}else e.compute(Wn(e.inputs,{activation:""},t))}}}),Up,Wp,Lp,Vy,qy,x1=K(()=>{_e(),Se(),Ke(),Te(),Up=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let r=e[0],n=r.dims.length;if(r.dims[n-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let a=Math.floor((t.k+t.blockSize-1)/t.blockSize),i=t.blockSize/8*t.bits,s=e[1];if(!M.areEqual(s.dims,[t.n,a,i]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let l=e[2].dims;if(M.size(l)!==t.n*a)throw new Error("scales input size error.");if(e.length===4){let u=e[3].dims,c=t.bits>4?t.n*a:t.n*Math.floor((a+1)/2);if(M.size(u)!==c)throw new Error("zeroPoints input size error.")}},Wp=(e,t)=>{let r=e[0].dims,n=r.length,a=r[n-2],i=t.k,s=t.n,l=r.slice(0,n-2),u=M.size(l),c=e[1].dims[2]/4,f=e[0].dataType,h=Ge(t.k),g=Ge(c),_=Ge(s),b=l.concat([a,s]),w=a>1&&s/_%2===0?2:1,S=M.size(b)/_/w,$=64,v=[],C=[u,a,i/h],T=M.convertShape(e[1].dims).slice();T.splice(-1,1,c/g),v.push(...oe(C)),v.push(...oe(T)),v.push(...oe(e[2].dims)),e.length===4&&v.push(...oe(M.convertShape(e[3].dims)));let k=[u,a,s/_];v.push(...oe(k));let A=O=>{let B=C.length,q=U("a",e[0].dataType,B,h),X=U("b",12,T.length,g),ce=U("scales",e[2].dataType,e[2].dims.length),ge=[q,X,ce],se=e.length===4?U("zero_points",12,e[3].dims.length):void 0;se&&ge.push(se);let he=k.length,fe=ne("output",e[0].dataType,he,_),Q=Ye(e[0].dataType),le=(()=>{switch(h){case 1:return`array<${Q}, 8>`;case 2:return`mat4x2<${Q}>`;case 4:return`mat2x4<${Q}>`;default:throw new Error(`${h}-component is not supported.`)}})(),ue=()=>{let N=`
          // reuse a data
            var input_offset = ${q.indicesToOffset(`${q.type.indices}(batch, row, word_offset)`)};
            var a_data: ${le};
            for (var j: u32 = 0; j < ${8/h}; j++) {
              a_data[j] = ${q.getByOffset("input_offset")};
              input_offset++;
            }
          `;for(let V=0;V<_*w;V++)N+=`
            b_value = ${g===1?`b${V}_data`:`b${V}_data[i]`};
            b_value_lower = unpack4xU8(b_value & b_mask);
            b_value_upper = unpack4xU8((b_value >> 4) & b_mask);
            b_quantized_values = ${le}(${Array.from({length:4},(Ce,We)=>`${Q}(b_value_lower[${We}]), ${Q}(b_value_upper[${We}])`).join(", ")});
            b_dequantized_values = ${h===1?`${le}(${Array.from({length:8},(Ce,We)=>`(b_quantized_values[${We}] - ${se?`zero_point${V}`:"zero_point"}) * scale${V}`).join(", ")});`:`(b_quantized_values - ${le}(${Array(8).fill(`${se?`zero_point${V}`:"zero_point"}`).join(",")})) * scale${V};`};
            workgroup_shared[local_id.x * ${w} + ${Math.floor(V/_)}]${_>1?`[${V%_}]`:""} += ${Array.from({length:8/h},(Ce,We)=>`${h===1?`a_data[${We}] * b_dequantized_values[${We}]`:`dot(a_data[${We}], b_dequantized_values[${We}])`}`).join(" + ")};
          `;return N},ee=()=>{let N=`
            var col_index = col * ${_};
            ${se?`
            let zero_point_bytes_per_col = (nBlocksPerCol + 1) / 2;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${Q}(8);`}
            `;for(let V=0;V<_*w;V++)N+=`
            let scale${V} = ${ce.getByOffset("col_index * nBlocksPerCol + block")};
            ${se?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block >> 0x1u);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            zero_point_word = ${se.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${V} = ${Q}((zero_point_word) & 0xFu);`:""}
            col_index += 1;`;return N},Ae=()=>{let N=`col_index = col * ${_};`;for(let V=0;V<_*w;V++)N+=`
            let b${V}_data = ${X.getByIndices(`${X.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return N+=`
            var b_value: u32;
            let b_mask: u32 = 0x0F0F0F0Fu;
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${le};
            var b_dequantized_values: ${le};`,N};return`
        var<workgroup> workgroup_shared: array<${fe.type.value}, ${w*$}>;
        ${O.declareVariables(...ge,fe)}
        ${O.mainStart([$,1,1])}
          let output_indices = ${fe.offsetToIndices(`(global_idx / ${$}) * ${w}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${$}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/h};
            ${ee()}
            for (var word: u32 = 0; word < ${c}; word += ${g}) {
              ${Ae()}
              for (var i: u32 = 0; i < ${g}; i++) {
                ${ue()}
                word_offset += ${8/h};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${w}) {
            var output_value: ${fe.type.value} = ${fe.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${$}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${w};
            }
            ${fe.setByIndices(`${fe.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${h};${g};${_};${w};${$}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:b,dataType:f}],dispatchGroup:{x:S},programUniforms:v}),getShaderSource:A}},Lp=(e,t)=>{let r=e[0].dims,n=r.length,a=r[n-2],i=t.k,s=t.n,l=r.slice(0,n-2),u=M.size(l),c=e[1].dims[2]/4,f=e[0].dataType,h=Ge(t.k),g=Ge(c),_=l.concat([a,s]),b=128,w=s%8===0?8:s%4===0?4:1,S=b/w,$=S*g*8,v=$/h,C=$/t.blockSize,T=M.size(_)/w,k=[],A=[u,a,i/h],O=M.convertShape(e[1].dims).slice();O.splice(-1,1,c/g),k.push(...oe(A)),k.push(...oe(O)),k.push(...oe(e[2].dims)),e.length===4&&k.push(...oe(M.convertShape(e[3].dims)));let B=[u,a,s];k.push(...oe(B));let q=X=>{let ce=A.length,ge=U("a",e[0].dataType,ce,h),se=U("b",12,O.length,g),he=U("scales",e[2].dataType,e[2].dims.length),fe=[ge,se,he],Q=e.length===4?U("zero_points",12,e[3].dims.length):void 0;Q&&fe.push(Q);let le=B.length,ue=ne("output",e[0].dataType,le),ee=Ye(e[0].dataType),Ae=()=>{switch(h){case 1:return`
          let a_data0 = vec4<${ee}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${ee}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${ee}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${ee}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${h}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${ge.type.value}, ${v}>;
        var<workgroup> inter_results: array<array<${ue.type.value}, ${S}>, ${w}>;
        ${X.declareVariables(...fe,ue)}
        ${X.mainStart([S,w,1])}
          let output_indices = ${ue.offsetToIndices(`workgroup_index * ${w}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${C} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${v};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${v}; a_offset += ${b})
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${ge.getByIndices(`${ge.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${ge.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${C} + local_id.x;
            ${Q?`
            let zero_point_bytes_per_col = (n_blocks_per_col + 1) / 2;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block >> 0x1u);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            let zero_point_word = ${Q.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${ee}((zero_point_word) & 0xFu);`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${ee}(8);`}
            let scale = ${he.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${se.getByIndices(`${se.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/h};
            for (var i: u32 = 0; i < ${g}; i++) {
              ${Ae()}
              let b_value = ${g===1?"b_data":"b_data[i]"};
              let b_value_lower = unpack4xU8(b_value & 0x0F0F0F0Fu);
              let b_value_upper = unpack4xU8((b_value >> 4) & 0x0F0F0F0Fu);
              let b_quantized_values = mat2x4<${ee}>(${Array.from({length:4},(N,V)=>`${ee}(b_value_lower[${V}]), ${ee}(b_value_upper[${V}])`).join(", ")});
              let b_dequantized_values = (b_quantized_values - mat2x4<${ee}>(${Array(8).fill("zero_point").join(",")})) * scale;
              inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(N,V)=>`${`dot(a_data${V}, b_dequantized_values[${V}])`}`).join(" + ")};
              word_offset += ${8/h};
            }
            workgroupBarrier();
          }

          if (local_idx < ${w}) {
            var output_value: ${ue.type.value} = ${ue.type.value}(0);
            for (var b = 0u; b < ${S}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${ue.setByIndices(`${ue.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${h};${g};${S};${w}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:_,dataType:f}],dispatchGroup:{x:T},programUniforms:k}),getShaderSource:q}},Vy=(e,t)=>{Up(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(Lp(e.inputs,t)):e.compute(Wp(e.inputs,t))},qy=e=>Ne(e)}),Vp,qp,Fp,Hp,Gp,jp,Kp,Qp,Fy,S1=K(()=>{_e(),Se(),Te(),Vp=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},qp=(e,t,r)=>{let n="";for(let a=t-1;a>=0;--a)n+=`
            k = i32(${e.indicesGet("indices",a)}) - ${ae("uniforms.pads",a,r)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${ae("uniforms.x_shape",a,t)})) {
              break;
            }
            offset += k * i32(${ae("uniforms.x_strides",a,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${n}
            value = x[offset];
          }
      `},Fp=(e,t,r)=>{let n="";for(let a=t-1;a>=0;--a)n+=`
                k = i32(${e.indicesGet("indices",a)}) - ${ae("uniforms.pads",a,r)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${ae("uniforms.x_shape",a,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${ae("uniforms.x_shape",a,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${ae("uniforms.x_strides",a,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${n}
              value = x[offset];
          `},Hp=(e,t,r)=>{let n="";for(let a=t-1;a>=0;--a)n+=`
                k = i32(${e.indicesGet("indices",a)}) - ${ae("uniforms.pads",a,r)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${ae("uniforms.x_shape",a,t)})) {
                  k = i32(${ae("uniforms.x_shape",a,t)}) - 1;
                }
                offset += k * i32(${ae("uniforms.x_strides",a,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${n}
              value = x[offset];
          `},Gp=(e,t,r)=>{let n="";for(let a=t-1;a>=0;--a)n+=`
                k = i32(${e.indicesGet("indices",a)}) - ${ae("uniforms.pads",a,r)};
                if (k < 0)  {
                  k += i32(${ae("uniforms.x_shape",a,t)}]);
                }
                if (k >= i32(${ae("uniforms.x_shape",a,t)})) {
                  k -= i32(${ae("uniforms.x_shape",a,t)});
                }
                offset += k * i32(${ae("uniforms.x_strides",a,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${n}
              value = x[offset];
          `},jp=(e,t,r)=>{switch(r.mode){case 0:return qp(e,t,r.pads.length);case 1:return Fp(e,t,r.pads.length);case 2:return Hp(e,t,r.pads.length);case 3:return Gp(e,t,r.pads.length);default:throw new Error("Invalid mode")}},Kp=(e,t)=>{let r=M.padShape(e[0].dims.slice(),t.pads),n=e[0].dims,a=M.size(r),i=[{type:12,data:a},{type:6,data:t.pads}],s=e.length>=3&&e[2].data;t.mode===0&&i.push({type:s?e[2].dataType:1,data:t.value}),i.push(...oe(e[0].dims,r));let l=["rank"],u=c=>{let f=ne("output",e[0].dataType,r.length),h=U("x",e[0].dataType,n.length),g=h.type.value,_=jp(f,n.length,t),b=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&b.push({name:"constant_value",type:s?g:"f32"}),`
            ${c.registerUniforms(b).declareVariables(h,f)}
            ${c.mainStart()}
            ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${f.offsetToIndices("global_idx")};

            var value = ${g}(0);
            ${_}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${s}`,inputDependencies:l},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(M.size(r)/64)},programUniforms:i}),getShaderSource:u}},Qp=(e,t)=>{if(e.length>1){let r=e[1].getBigInt64Array(),n=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,a=e[0].dims.length,i=new Int32Array(2*a).fill(0);if(e.length>=4){let l=e[3].getBigInt64Array();for(let u=0;u<l.length;u++)i[Number(l[u])]=Number(r[u]),i[Number(l[u])+a]=Number(r[u+l.length])}else r.forEach((l,u)=>i[Number(u)]=Number(l));let s=[];return i.forEach(l=>s.push(l)),{mode:t.mode,value:n,pads:s}}else return t},Fy=(e,t)=>{Vp(e.inputs);let r=Qp(e.inputs,t);e.compute(Kp(e.inputs,r),{inputs:[0]})}}),vi,ns,as,ss,os,Zp,Xp,ls,us,Hy,Gy,ds,jy,Ky,cs,Qy,Zy,Xy,Jy,T1=K(()=>{Pt(),_e(),Se(),Te(),vi=e=>{if(Fe.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},ns=(e,t,r)=>{let n=t.format==="NHWC",a=e.dims.slice();n&&a.splice(1,0,a.pop());let i=Object.hasOwnProperty.call(t,"dilations"),s=t.kernelShape.slice(),l=t.strides.slice(),u=i?t.dilations.slice():[],c=t.pads.slice();Pn.adjustPoolAttributes(r,a,s,l,u,c);let f=Pn.computePoolOutputShape(r,a,l,u,s,c,t.autoPad),h=Object.assign({},t);i?Object.assign(h,{kernelShape:s,strides:l,pads:c,dilations:u,cacheKey:t.cacheKey}):Object.assign(h,{kernelShape:s,strides:l,pads:c,cacheKey:t.cacheKey});let g=f.slice();return g.push(g.splice(1,1)[0]),[h,n?g:f]},as=(e,t)=>{let r=t.format==="NHWC",n=M.size(e),a=M.size(t.kernelShape),i=[{type:12,data:n},{type:12,data:a}],s=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let l=t.kernelShape[t.kernelShape.length-1],u=t.strides[t.strides.length-1],c=t.pads[t.pads.length/2-1],f=t.pads[t.pads.length-1],h=!!(c+f);i.push({type:12,data:l},{type:12,data:u},{type:12,data:c},{type:12,data:f}),s.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let g=!1;if(t.kernelShape.length===2){let _=t.kernelShape[t.kernelShape.length-2],b=t.strides[t.strides.length-2],w=t.pads[t.pads.length/2-2],S=t.pads[t.pads.length-2];g=!!(w+S),i.push({type:12,data:_},{type:12,data:b},{type:12,data:w},{type:12,data:S}),s.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[i,s,!0,h,g]}else{if(r)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let l=M.computeStrides(t.kernelShape);i.push({type:12,data:l},{type:12,data:t.pads},{type:12,data:t.strides}),s.push({name:"kernelStrides",type:"u32",length:l.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let u=t.pads.reduce((c,f)=>c+f);return[i,s,!!u,!1,!1]}},ss=(e,t,r,n,a,i,s,l,u,c,f,h)=>{let g=a.format==="NHWC",_=t.type.value,b=ne("output",t.type.tensor,n);if(a.kernelShape.length<=2){let w="",S="",$="",v=r-(g?2:1);if(f?w=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${v}] = indices[${v}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${v}] < 0 || xIndices[${v}]
                      >= uniforms.x_shape[${v}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${i}
                }`:w=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${v}] = indices[${v}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${i}
                }`,a.kernelShape.length===2){let C=r-(g?3:2);h?S=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${C}] = indices[${C}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${C}] < 0 || xIndices[${C}] >= uniforms.x_shape[${C}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:S=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${C}] = indices[${C}] * uniforms.sh - uniforms.phStart + j;
                `,$=`
              }
            `}return`
            ${e.registerUniforms(u).declareVariables(t,b)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

              let indices = ${b.offsetToIndices("global_idx")};
              var xIndices = ${b.offsetToIndices("global_idx")};

              var value = ${_}(${l});
              var pad = 0;
              ${S}
              ${w}
              ${$}
              ${s}

              output[global_idx] = value;
            }`}else{if(g)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let w=a.kernelShape.length,S=a.pads.length,$="";return c?$=`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${t.indicesToOffset("xIndices")}];
                ${i}
              }`:$=`
              }
              let x_val = x[${t.indicesToOffset("xIndices")}];
              ${i}
            `,`
            ${e.registerUniforms(u).declareVariables(t,b)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
              let indices = ${b.offsetToIndices("global_idx")};
              var xIndices = ${b.offsetToIndices("global_idx")};

              var offsets: array<u32, ${w}>;

              var value = ${_}(${l});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${w-1}u; j++) {
                  offsets[j] = offset / ${ae("uniforms.kernelStrides","j",w)};
                  offset -= offsets[j] * ${ae("uniforms.kernelStrides","j",w)};
                }
                offsets[${w-1}] = offset;

                isPad = false;
                for (var j = ${r-w}u; j < ${r}u; j++) {
                  xIndices[j] = indices[j] * ${ae("uniforms.strides",`j - ${r-w}u`,w)}
                    + offsets[j - ${r-w}u] - ${ae("uniforms.pads","j - 2u",S)};
                  ${$}
              }
              ${s}

              output[global_idx] = value;
            }`}},os=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,Zp=e=>`${os(e)};${e.countIncludePad}`,Xp=e=>`${os(e)};${e.storageOrder};${e.dilations}`,ls=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),us=(e,t,r,n)=>{let[a,i]=ns(t,n,r),s=U("x",t.dataType,t.dims.length),l=s.type.value,u="value += x_val;",c="";a.countIncludePad?c+=`value /= ${l}(uniforms.kernelSize);`:c+=`value /= ${l}(i32(uniforms.kernelSize) - pad);`;let[f,h,g,_,b]=as(i,a);f.push(...oe(t.dims,i));let w=["rank"];return{name:e,shaderCache:{hint:`${n.cacheKey};${g};${_};${b}`,inputDependencies:w},getRunData:()=>({outputs:[{dims:i,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(M.size(i)/64)},programUniforms:f}),getShaderSource:S=>ss(S,s,t.dims.length,i.length,a,u,c,0,h,g,_,b)}},Hy=e=>{let t=e.count_include_pad!==0,r=ls(e);if(r.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let n={countIncludePad:t,...r,cacheKey:""};return{...n,cacheKey:Zp(n)}},Gy=(e,t)=>{vi(e.inputs),e.compute(us("AveragePool",e.inputs[0],!1,t))},ds={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},jy=e=>{let t=e.format;return{format:t,...ds,cacheKey:t}},Ky=(e,t)=>{vi(e.inputs),e.compute(us("GlobalAveragePool",e.inputs[0],!0,t))},cs=(e,t,r,n)=>{let[a,i]=ns(t,n,r),s=`
      value = max(x_val, value);
    `,l="",u=U("x",t.dataType,t.dims.length),c=["rank"],[f,h,g,_,b]=as(i,a);return f.push(...oe(t.dims,i)),{name:e,shaderCache:{hint:`${n.cacheKey};${g};${_};${b}`,inputDependencies:c},getRunData:()=>({outputs:[{dims:i,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(M.size(i)/64)},programUniforms:f}),getShaderSource:w=>ss(w,u,t.dims.length,i.length,a,s,l,t.dataType===10?-65504:-1e5,h,g,_,b)}},Qy=(e,t)=>{vi(e.inputs),e.compute(cs("MaxPool",e.inputs[0],!1,t))},Zy=e=>{let t=e.storage_order,r=e.dilations,n=ls(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(n.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let a={storageOrder:t,dilations:r,...n,cacheKey:""};return{...a,cacheKey:Xp(a)}},Xy=e=>{let t=e.format;return{format:t,...ds,cacheKey:t}},Jy=(e,t)=>{vi(e.inputs),e.compute(cs("GlobalMaxPool",e.inputs[0],!0,t))}}),Jp,Yp,Yy,e_,C1=K(()=>{_e(),Se(),Ke(),Te(),Jp=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[0].dataType===6&&e.length>2)throw new Error("In the case of dequantizing int32 there is no zero point.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((r,n)=>r===e[2].dims[n]).reduce((r,n)=>r&&n,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((a,i)=>i===t.axis||a===e[0].dims[i]).reduce((a,i)=>a&&i,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let r=e[0].dims[t.axis],n=e[1].dims[t.axis];if(t.blockSize<Math.ceil(r/n)||t.blockSize>Math.ceil(r/(n-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},Yp=(e,t)=>{let r=M.normalizeAxis(t.axis,e[0].dims.length),n=e[0].dataType,a=n===3,i=e[0].dims,s=e[1].dataType,l=M.size(i),u=n===3||n===2,c=u?[Math.ceil(M.size(e[0].dims)/4)]:e[0].dims,f=e[1].dims,h=e.length>2?e[2]:void 0,g=h?u?[Math.ceil(M.size(h.dims)/4)]:h.dims:void 0,_=f.length===0||f.length===1&&f[0]===1,b=_===!1&&f.length===1,w=Ge(l),S=_&&(!u||w===4),$=S?w:1,v=S&&!u?w:1,C=U("input",u?12:n,c.length,v),T=U("scale",s,f.length),k=h?U("zero_point",u?12:n,g.length):void 0,A=ne("output",s,i.length,$),O=[C,T];k&&O.push(k);let B=[c,f];h&&B.push(g);let q=[{type:12,data:l/$},{type:12,data:r},{type:12,data:t.blockSize},...oe(...B,i)],X=ce=>{let ge=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${ce.registerUniforms(ge).declareVariables(...O,A)}
      ${ce.mainStart()}
          ${ce.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${A.offsetToIndices("global_idx")};

          // Set input x
          ${u?`
            let input = ${C.getByOffset("global_idx / 4")};
            let x_vec = ${a?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${$===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${C.getByOffset("global_idx")};`};

          // Set scale input
          ${_?`let scale_value= ${T.getByOffset("0")}`:b?`
            let scale_index = ${A.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${T.getByOffset("scale_index")};`:`
            var scale_indices: ${T.type.indices} = output_indices;
            let index = ${T.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${T.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${T.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${k?_?u?`
                let zero_point_input = ${k.getByOffset("0")};
                let zero_point_vec =  ${a?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${k.getByOffset("0")}`:b?u?`
                let zero_point_index = ${A.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${k.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${a?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${A.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${k.getByOffset("zero_point_index")};`:u?`
                let zero_point_offset = ${T.indicesToOffset("scale_indices")};
                let zero_point_input = ${k.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${a?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${k.getByIndices("scale_indices")};`:`let zero_point_value = ${u?a?"i32":"u32":C.type.value}(0);`};
      // Compute and write output
      ${A.setByOffset("global_idx",`${A.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:k?["rank","rank","rank"]:["rank","rank"]},getShaderSource:X,getRunData:()=>({outputs:[{dims:i,dataType:s}],dispatchGroup:{x:Math.ceil(l/$/64),y:1,z:1},programUniforms:q})}},Yy=(e,t)=>{Jp(e.inputs,t),e.compute(Yp(e.inputs,t))},e_=e=>Ne({axis:e.axis,blockSize:e.blockSize})}),ef,tf,t_,k1=K(()=>{Pt(),_e(),Te(),ef=(e,t,r)=>{let n=e===t,a=e<t&&r<0,i=e>t&&r>0;if(n||a||i)throw new Error("Range these inputs' contents are invalid.")},tf=(e,t,r,n)=>{let a=Math.abs(Math.ceil((t-e)/r)),i=[a],s=a,l=[{type:12,data:s},{type:n,data:e},{type:n,data:r},...oe(i)],u=c=>{let f=ne("output",n,i.length),h=f.type.value,g=[{name:"outputSize",type:"u32"},{name:"start",type:h},{name:"delta",type:h}];return`
        ${c.registerUniforms(g).declareVariables(f)}
        ${c.mainStart()}
        ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${h}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${n}`},getShaderSource:u,getRunData:()=>({outputs:[{dims:i,dataType:n}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:l})}},t_=e=>{let t=0,r=0,n=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],r=e.inputs[1].getInt32Array()[0],n=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],r=e.inputs[1].getFloat32Array()[0],n=e.inputs[2].getFloat32Array()[0]),Fe.webgpu.validateInputContent&&ef(t,r,n),e.compute(tf(t,r,n,e.inputs[0].dataType),{inputs:[]})}}),rf,nf,r_,i_,I1=K(()=>{_e(),Se(),Ke(),Te(),rf=(e,t,r,n)=>{if(e!=="none"&&n!=="i32"&&n!=="u32"&&n!=="f32")throw new Error(`Input ${n} is not supported with reduction ${e}.`);let a=`{
                var oldValue = 0;
                loop {
                  let newValueF32 =`,i=`;
                  let newValue = bitcast<i32>(newValueF32);
                  let res = atomicCompareExchangeWeak(&${t}, oldValue, newValue);
                  if res.exchanged {
                    break;
                  }
                  oldValue = res.old_value;
                }
              }`;switch(e){case"none":return`${t}=${r};`;case"add":return n==="i32"||n==="u32"?`atomicAdd(&${t}, bitcast<${n}>(${r}));`:`
              ${a}bitcast<${n}>(oldValue) + (${r})${i}`;case"max":return n==="i32"||n==="u32"?`atomicMax(&${t}, bitcast<${n}>(${r}));`:`
                ${a}max(bitcast<f32>(oldValue), (${r}))${i}`;case"min":return n==="i32"||n==="u32"?`atomicMin(&${t}, bitcast<${n}>(${r}));`:`${a}min(bitcast<${n}>(oldValue), (${r}))${i}`;case"mul":return`${a}(bitcast<${n}>(oldValue) * (${r}))${i}`;default:throw new Error(`Reduction ${e} is not supported.`)}},nf=(e,t)=>{let r=e[0].dims,n=e[1].dims,a=r,i=1,s=Math.ceil(M.size(n)/i),l=n[n.length-1],u=M.sizeFromDimension(r,l),c=[{type:12,data:s},{type:12,data:l},{type:12,data:u},...oe(e[1].dims,e[2].dims,a)],f=h=>{let g=U("indices",e[1].dataType,e[1].dims.length),_=U("updates",e[2].dataType,e[2].dims.length,i),b=t.reduction!=="none"&&t.reduction!==""?Rm("output",e[0].dataType,a.length):ne("output",e[0].dataType,a.length,i);return`
      ${h.registerUniform("output_size","u32").registerUniform("last_index_dimension","u32").registerUniform("num_updates_elements","u32").declareVariables(g,_,b)}
      ${h.mainStart()}
        ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
  var hasDuplicates = false;
  if (${t.reduction==="none"}) {
    let n = ${M.size(n)};
    for (var i = 0; i < n; i = i + 1) {
      for (var j = i + 1; j < n; j = j + 1) {
        var index_i = i32(indices[i].x);
        var index_j = i32(indices[j].x);
        if (index_i == index_j) {
          hasDuplicates = true;
          break;
        }
      }
      if (hasDuplicates) {
        break;
      }
    }
  }

  var data_offset = 0u;
  var indices_start = uniforms.last_index_dimension * global_idx;
  if (${t.reduction==="none"} && hasDuplicates) {
    if (global_idx != 0u) {
      return;
    }
    indices_start = 0u;
  }
  let indices_end = indices_start + uniforms.last_index_dimension;
  for (var i = indices_start; i < indices_end; i++) {
    var index = i32(indices[i].x);
    ${e[0].dims.length===1?`
    let element_count_dim = uniforms.output_strides;
    let dim_value = uniforms.output_shape;`:`
    let element_count_dim = uniforms.output_strides[i - indices_start];
    let dim_value = uniforms.output_shape[i - indices_start + uniforms.last_index_dimension];`}
    if (index >= 0) {
      if (index >= i32(dim_value)) {
        index = i32(dim_value - 1);
      }
    } else {
      if (index < -i32(dim_value)) {
        index = 0;
      } else {
        index += i32(dim_value);
      }
    }
    data_offset += u32((u32(index) * element_count_dim));
  }

  for (var i = 0u; i < uniforms.num_updates_elements; i++) {
    let value = updates[uniforms.num_updates_elements * global_idx + i];
    ${rf(t.reduction,"output[data_offset + i]","value",b.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:c}),getShaderSource:f}},r_=e=>Ne({reduction:e.reduction}),i_=(e,t)=>{e.compute(nf(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),af,sf,of,ps,lf,uf,df,cf,pf,ff,hf,mf,fs,gf,yf,_f,bf,wf,n_,a_,E1=K(()=>{_e(),Se(),Ke(),Te(),af=(e,t)=>{if(e.every(r=>r>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},sf=(e,t,r)=>{t.every(a=>a>=0&&a<r||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let n=new Array(r).fill(1);return t.forEach((a,i)=>n[a]=e[i]),n},of=(e,t,r,n,a,i)=>{let[s,l,u]=r>10?[1,2,3]:[-1,e.length>1?1:-1,-1],c=e[0].dims.length;if(s>0&&e.length>s&&e[s].dims.length>0)e[s].getFloat32Array().forEach(f=>i.push(f));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(l>0&&e.length>l&&e[l].dims.length===1&&e[l].dims[0]>0){if(e[l].getFloat32Array().forEach(f=>n.push(f)),n.length!==0&&n.length!==c&&r>=18&&n.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");af(n,t),t.axes.length>0&&sf(n,t.axes,c).forEach((f,h)=>n[h]=f)}if(u>0&&e.length>u&&e[u].dims.length===1&&e[u].dims[0]>0&&(e[u].getBigInt64Array().forEach(f=>a.push(Number(f))),a.length!==0&&a.length!==c&&r>=18&&a.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(n.length!==0&&n.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(a.length!==0&&a.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof n<"u"&&typeof a<"u"&&n.length>0&&a.length>c)throw new Error("Resize requires only of scales or sizes to be specified")},ps=(e,t,r,n)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${n}(big / (${r}));
  let fract = ${n}(big % (${r})) / ${n}(${r});
  return whole + fract;
`,lf=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${ps("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${ps("xResized","lengthOriginal - 1","lengthResized - 1",t)}
                  }`;case"tf_crop_and_resize":return`if (lengthResized > 1) {
                    return ${t}(roiStart) * ${t}(lengthOriginal - 1) +
                        (${t}(xResized) * ${t}(roiEnd - roiStart) * ${t}(lengthOriginal - 1)) /
                        ${t}(lengthResized - 1);
                  } else {
                    return 0.5 * ${t}(roiStart + roiEnd) * ${t}(lengthOriginal - 1);
                  }`;case"half_pixel_symmetric":return`const outputWidth = ${t}xScale * ${t}(lengthResized);
                  const adjustment = ${t}(lengthResized) / outputWidth;
                  const center = ${t}(lengthOriginal) / 2;
                  const offset = center * (1 - adjustment);
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",uf=(e,t,r)=>`fn getNearestPixelFromOriginal(xOriginal: ${r}, isDownSample: bool) -> ${r} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";case"simple":default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",df=(e,t,r)=>{let n=new Array(r).fill(0).concat(new Array(r).fill(1)),a=e.length===0?n:e.slice();return t.length>0?(t.forEach((i,s)=>{n[i]=a[s],n[s+r]=a[t.length+s]}),n):a},cf=(e,t,r,n)=>{let a=[];if(r.length>0)if(n.length>0){if(e.forEach(i=>a.push(i)),Math.max(...n)>e.length)throw new Error("axes is out of bound");n.forEach((i,s)=>a[i]=r[s])}else r.forEach(i=>a.push(i));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");a=e.map((i,s)=>Math.round(i*t[s]))}return a},pf=(e,t,r)=>{let n=(()=>{switch(r.keepAspectRatioPolicy){case"not_larger":return r.axes.length>0?Math.min(...r.axes.map(i=>t[i]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return r.axes.length>0?Math.max(...r.axes.map(i=>t[i]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${r.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let a=e.slice();return r.axes.length>0?(r.axes.forEach(i=>t[i]=n),r.axes.forEach(i=>a[i]=Math.round(e[i]*t[i]))):(t.fill(n,0,t.length),a.forEach((i,s)=>a[s]=Math.round(i*t[s]))),a},ff=(e,t,r,n,a)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${r.length}> {
      var original_indices: array<${e.type.value}, ${r.length}>;
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${ae("uniforms.scales","i",n)};
        var roi_low = ${ae("uniforms.roi","i",a)};
        var roi_hi = ${ae("uniforms.roi",`i + ${t.length}`,a)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${ae("uniforms.input_shape","i",t.length)};
          var output_shape_i = ${ae("uniforms.output_shape","i",r.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,hf=(e,t,r,n,a,i,s)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${n.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${ae("uniforms.scales","i",a)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${ae("uniforms.roi","i",i)};
          var roi_hi = ${ae("uniforms.roi",`i + ${r.length}`,i)};
          var input_shape_i = ${ae("uniforms.input_shape","i",r.length)};
          var output_shape_i = ${ae("uniforms.output_shape","i",n.length)};
          var original_idx = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                        input_shape_i, roi_low, roi_hi);
          if (!${s} || (original_idx >= 0 && original_idx < ${t.type.value}(input_shape_i))) {
            if (original_idx < 0) {
              input_index = 0;
            } else if (original_idx > ${t.type.value}(input_shape_i - 1)) {
              input_index = input_shape_i - 1;
            } else {
              input_index = u32(getNearestPixelFromOriginal(original_idx, scale < 1));
            }
          } else {
            input_index = u32(original_idx);
          }
        }
        ${e.indicesSet("input_indices","i","input_index")}
      }
      return input_indices;
    }`,mf=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${ae("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,fs=(e,t,r,n)=>e.rank>n?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",r,"batch")};
`:"",gf=(e,t,r,n,a)=>{let[i,s,l,u]=r.length===2?[-1,0,1,-1]:[0,2,3,1],c=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${c} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(row, ${r[s]} - 1))`)};
      ${e.indicesSet("input_indices",l,`max(0, min(col, ${r[l]} - 1))`)};
      ${fs(e,u,i,2)}
      return ${e.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${t.type.indices}) -> ${c} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${c} = originalIndices[${s}];
      var col:${c} = originalIndices[${l}];
      ${n?`if (row < 0 || row > (${r[s]} - 1) || col < 0 || col > (${r[l]} - 1)) {
        return ${a};
      }`:""};
      row = max(0, min(row, ${r[s]} - 1));
      col = max(0, min(col, ${r[l]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${r.length>2?`u32(originalIndices[${u}])`:"0"};
      var batch: u32 =  ${r.length>2?`u32(originalIndices[${i}])`:"0"};
      var x11: ${c} = getInputValue(batch, channel, row1, col1);
      var x12: ${c} = getInputValue(batch, channel, row1, col2);
      var x21: ${c} = getInputValue(batch, channel, row2, col1);
      var x22: ${c} = getInputValue(batch, channel, row2, col2);
      var dx1: ${c} = abs(row - ${c}(row1));
      var dx2: ${c} = abs(${c}(row2) - row);
      var dy1: ${c} = abs(col - ${c}(col1));
      var dy2: ${c} = abs(${c}(col2) - col);
      if (row1 == row2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (col1 == col2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      return (x11 * dx2 * dy2 + x12 * dx2 * dy1 + x21 * dx1 * dy2 + x22 * dx1 * dy1);
    }`},yf=(e,t,r,n,a,i,s,l,u,c)=>{let f=r.length===2,[h,g]=f?[0,1]:[2,3],_=e.type.value,b=w=>{let S=w===h?"row":"col";return`
      fn ${S}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${_} {
        var output_index = ${t.indicesGet("output_indices",w)};
        var originalIdx: ${_} = getOriginalCoordinateFromResizedCoordinate(output_index, ${a[w]},
        ${n[w]}, ${r[w]}, ${i[w]}, ${i[w]} + ${r.length});
        var fractOriginalIdx: ${_} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${l} && (originalIdx < 0 || originalIdx > (${r[w]} - 1))) {
          return ${u};
        }
        var data: array<${_}, 4> = array<${_}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${S}: ${_} = originalIdx + ${_}(i);
          if (${S} < 0 || ${S} >= ${r[w]}) {
            ${c?`coefs[i + 1] = 0.0;
                        continue;`:l?`return ${u};`:`${S} = max(0, min(${S}, ${r[w]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet("input_indices_copy",w,`u32(${S})`)};
          data[i + 1] = ${w===h?e.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${b(h)};
    ${b(g)};
  fn getCubicInterpolationCoefs(s: ${_}) -> array<${_}, 4> {
    var absS = abs(s);
    var coeffs: array<${_}, 4> = array<${_}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${_} = 1.0 - absS;
    var twoMinusAbsS: ${_} = 2.0 - absS;
    var onePlusAbsS: ${_} = 1.0 + absS;
    coeffs[0] = ((${s} * onePlusAbsS - 5 * ${s}) * onePlusAbsS + 8 * ${s}) * onePlusAbsS - 4 * ${s};
    coeffs[1] = ((${s} + 2) * absS - (${s} + 3)) * absS * absS + 1;
    coeffs[2] = ((${s} + 2) * oneMinusAbsS - (${s} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${s} * twoMinusAbsS - 5 * ${s}) * twoMinusAbsS + 8 * ${s}) * twoMinusAbsS - 4 * ${s};
    return coeffs;
  }

  fn cubicInterpolation1D(x: array<${_}, 4>, coefs: array<${_}, 4>) -> ${_} {
    var coefsSum: ${_} = coefs[0] + coefs[1] + coefs[2] + coefs[3];
    return (x[0] * coefs[0] + x[1] * coefs[1]+ x[2] * coefs[2]+ x[3] * coefs[3]) / coefsSum;
  }

  fn bicubicInterpolation(output_indices: ${t.type.indices}) -> ${_} {
    var input_indices: ${e.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `},_f=(e,t,r,n,a)=>{let[i,s,l,u,c]=r.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],f=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${f} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(depth, ${r[s]} - 1))`)};
      ${e.indicesSet("input_indices",l,`max(0, min(height, ${r[l]} - 1))`)};
      ${e.indicesSet("input_indices",u,`max(0, min(width, ${r[u]} - 1))`)};
      ${fs(e,c,i,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${f} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${f} = originalIndices[${s}];
      var height:${f} = originalIndices[${l}];
      var width:${f} = originalIndices[${u}];
      ${n?`if (depth < 0 || depth > (${r[s]} - 1) || height < 0 || height > (${r[l]} - 1) || width < 0 || (width > ${r[u]} - 1)) {
      return ${a};
        }`:""};

    depth = max(0, min(depth, ${r[s]} - 1));
      height = max(0, min(height, ${r[l]} - 1));
      width = max(0, min(width, ${r[u]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${r.length>3?`u32(originalIndices[${c}])`:"0"};
      var batch: u32 =  ${r.length>3?`u32(originalIndices[${i}])`:"0"};

      var x111: ${f} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${f} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${f} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${f} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${f} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${f} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${f} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${f} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${f} = abs(depth - ${f}(depth1));
      var dx2: ${f} = abs(${f}(depth2) - depth);
      var dy1: ${f} = abs(height - ${f}(height1));
      var dy2: ${f} = abs(${f}(height2) - height);
      var dz1: ${f} = abs(width - ${f}(width1));
      var dz2: ${f} = abs(${f}(width2) - width);
      if (depth1 == depth2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (height1 == height2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      if (width1 == width2) {
        dz1 = 0.5;
        dz2 = 0.5;
      }
      return (x111 * dx2 * dy2 * dz2 + x112 * dx2 * dy2 * dz1 + x121 * dx2 * dy1 *dz2 + x122 * dx2 * dy1 * dz1 +
              x211 * dx1 * dy2 * dz2 + x212 * dx1 * dy2 * dz1 + x221 * dx1 * dy1 *dz2 + x222 * dx1 * dy1 * dz1);
    }`},bf=(e,t,r,n,a,i)=>{let s=e.dims,l=df(i,t.axes,s.length),u=cf(s,n,a,t.axes),c=n.slice();n.length===0&&(c=s.map((v,C)=>v===0?1:u[C]/v),t.keepAspectRatioPolicy!=="stretch"&&(u=pf(s,c,t)));let f=ne("output",e.dataType,u.length),h=U("input",e.dataType,s.length),g=M.size(u),_=s.length===u.length&&s.every((v,C)=>v===u[C]),b=t.coordinateTransformMode==="tf_crop_and_resize",w=t.extrapolationValue,S=h.type.value,$=v=>`
      ${_?"":`
      ${lf(t.coordinateTransformMode,S)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${mf(h,s)};
              ${uf(t.nearestMode,r,S)};
              ${hf(h,f,s,u,c.length,l.length,b)};
              `;case"linear":return`
              ${ff(f,s,u,c.length,l.length)};
              ${(()=>{if(s.length===2||s.length===4)return`${gf(h,f,s,b,w)}`;if(s.length===3||s.length===5)return`${_f(h,f,s,b,w)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(s.length===2||s.length===4)return`${yf(h,f,s,u,c,l,t.cubicCoeffA,b,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${v.registerUniform("output_size","u32").registerUniform("scales","f32",c.length).registerUniform("roi","f32",l.length).declareVariables(h,f)}
      ${v.mainStart()}
        ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${_?"output[global_idx] = input[global_idx];":`
        let output_indices = ${f.offsetToIndices("global_idx")};
        var input_indices: ${h.type.indices};
        ${(()=>{switch(t.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${h.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${s.length===2||s.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${r}|${c.length>0?t.mode==="cubic"?c:c.length:""}|${a.length>0?a:""}|${l.length>0?l:""}|${_}|${t.mode==="nearest"?s.length:s}`,inputDependencies:["rank"]},getShaderSource:$,getRunData:()=>({outputs:[{dims:u,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:[{type:12,data:g},{type:1,data:c},{type:1,data:l},...oe(s,u)]})}},wf=e=>{let t=e.customDataBuffer;return new Uint32Array(t,t.byteOffset,1)[0]},n_=(e,t)=>{let r=[],n=[],a=[],i=wf(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");of(e.inputs,t,i,r,n,a),e.compute(bf(e.inputs[0],t,i,r,n,a),{inputs:[0]})},a_=e=>{let t=e.antialias,r=e.axes,n=e.coordinateTransformMode,a=e.cubicCoeffA,i=e.excludeOutside!==0,s=e.extrapolationValue,l=e.keepAspectRatioPolicy,u=e.mode,c=e.nearestMode===""?"simple":e.nearestMode;return Ne({antialias:t,axes:r,coordinateTransformMode:n,cubicCoeffA:a,excludeOutside:i,extrapolationValue:s,keepAspectRatioPolicy:l,mode:u,nearestMode:c})}}),vf,$f,s_,z1=K(()=>{_e(),Se(),Ke(),Te(),vf=(e,t)=>{let[r,n,a,i]=e,{numHeads:s,rotaryEmbeddingDim:l}=t;if(r.dims.length!==3&&r.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${r.dims.length}`);if(!M.areEqual(n.dims,[])&&!M.areEqual(n.dims,[1])&&n.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${n.dims.length}`);if(a.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${a.dims.length}`);if(i.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${i.dims.length}`);if(!M.areEqual(a.dims,i.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(l>0&&s===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let u=r.dims[0],c=r.dims[r.dims.length-2],f=a.dims[0],h=M.sizeFromDimension(r.dims,1)/c,g=l===0?a.dims[1]*2:h/s;if(l>g)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(n.dims.length===2){if(u!==n.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${n.dims[0]}`);if(c!==n.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${n.dims[1]}`)}if(g/2!==a.dims[1]&&l/2!==a.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${a.dims[1]}`);if(c>f)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported")},$f=(e,t)=>{let{interleaved:r,numHeads:n,rotaryEmbeddingDim:a,scale:i}=t,s=e[0].dims[0],l=M.sizeFromDimension(e[0].dims,1),u=e[0].dims[e[0].dims.length-2],c=l/u,f=e[2].dims[1],h=a===0?f*2:c/n,g=new Array(s,u,c/h,h-f),_=M.computeStrides(g),b=[{type:1,data:i},{type:12,data:g},{type:12,data:_},...e[0].dims.length===3?new Array({type:12,data:[l,c,h,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[l,h,u*h,1]}):[],...oe(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],w=S=>{let $=U("input",e[0].dataType,e[0].dims.length),v=U("position_ids",e[1].dataType,e[1].dims.length),C=U("cos_cache",e[2].dataType,e[2].dims.length),T=U("sin_cache",e[3].dataType,e[3].dims.length),k=ne("output",e[0].dataType,e[0].dims.length);return S.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:g.length},{name:"global_strides",type:"u32",length:_.length},{name:"input_output_strides",type:"u32",length:_.length}]),`
        ${S.declareVariables($,v,C,T,k)}

        ${S.mainStart(li)}
          let half_rotary_emb_dim = uniforms.${C.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${S.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${v.broadcastedIndicesToOffset("bsnh.xy",ne("",v.type.tensor,2))};
            let position_id =
                u32(${v.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${r});
            let j = i + select(half_rotary_emb_dim, 1, ${r});
            let re = ${$.getByOffset("i")} * ${C.get("position_id","bsnh[3]")} -
                ${$.getByOffset("j")} * ${T.get("position_id","bsnh[3]")};
            ${k.setByOffset("i","re")}
            let im = ${$.getByOffset("i")} * ${T.get("position_id","bsnh[3]")} +
                ${$.getByOffset("j")} * ${C.get("position_id","bsnh[3]")};
            ${k.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${k.setByOffset("k",$.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:Ne({interleaved:r}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:w,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(M.size(g)/li)},programUniforms:b})}},s_=(e,t)=>{vf(e.inputs,t),e.compute($f(e.inputs,t))}}),xf,Sf,o_,A1=K(()=>{_e(),Se(),Te(),xf=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],r=e[1],n=e[2];if(t.dataType!==r.dataType||t.dataType!==n.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(r.dims.length!==3&&r.dims.length!==2)throw new Error("Skip must be 2D or 3D");let a=t.dims[t.dims.length-1],i=t.dims[t.dims.length-2];if(r.dims[r.dims.length-1]!==a)throw new Error("Skip must have the same hidden size as input");if(r.dims[r.dims.length-2]!==i)throw new Error("Skip must have the same sequence length as input");if(n.dims.length!==1)throw new Error("Gamma must be 1D");if(n.dims[n.dims.length-1]!==a)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let s=e[3];if(s.dims.length!==1)throw new Error("Beta must be 1D");if(s.dims[s.dims.length-1]!==a)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let s=e[4];if(s.dims.length!==1)throw new Error("Bias must be 1D");if(s.dims[s.dims.length-1]!==a)throw new Error("Bias must have the same hidden size as input")}},Sf=(e,t,r,n)=>{let a=t.simplified,i=e[0].dims,s=M.size(i),l=i,u=s,c=i.slice(-1)[0],f=n?i.slice(0,-1).concat(1):[],h=!a&&e.length>3,g=e.length>4,_=n&&r>1,b=n&&r>2,w=r>3,S=64,$=Ge(c),v=[{type:12,data:u},{type:12,data:$},{type:12,data:c},{type:1,data:t.epsilon}],C=k=>{let A=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],O=[U("x",e[0].dataType,e[0].dims,$),U("skip",e[1].dataType,e[1].dims,$),U("gamma",e[2].dataType,e[2].dims,$)];h&&O.push(U("beta",e[3].dataType,e[3].dims,$)),g&&O.push(U("bias",e[4].dataType,e[4].dims,$)),O.push(ne("output",e[0].dataType,l,$)),_&&O.push(ne("mean_output",1,f)),b&&O.push(ne("inv_std_output",1,f)),w&&O.push(ne("input_skip_bias_sum",e[0].dataType,l,$));let B=Ye(e[0].dataType),q=Ye(1,$);return`

      ${k.registerUniforms(A).declareVariables(...O)}
      var<workgroup> sum_shared : array<${q}, ${S}>;
      var<workgroup> sum_squared_shared : array<${q}, ${S}>;

      ${k.mainStart([S,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / ${S};

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / ${S};
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == ${S-1}) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${g?"bias[offset1d + i]":B+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${w?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${ei(B,$,"value")};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = ${S};
        for (var curr_size = reduce_size >> 1;  curr_size > 0; curr_size = reduce_size >> 1) {
          reduce_size = curr_size + (reduce_size & 1);
          if (ix < curr_size) {
            sum_shared[ix] += sum_shared[ix + reduce_size];
            sum_squared_shared[ix] += sum_squared_shared[ix + reduce_size];
          }
          workgroupBarrier();
        }

        let sum = sum_shared[0];
        let square_sum = sum_squared_shared[0];
        let mean = ${$r("sum",$)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${$r("square_sum",$)} / f32(uniforms.hidden_size) ${a?"":"- mean * mean"} + uniforms.epsilon);
        ${_?"mean_output[global_idx] = mean;":""}
        ${b?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${a?"":`- ${B}(mean)`}) *
            ${B}(inv_std_dev) * gamma[offset1d + i]
            ${h?"+ beta[offset1d + i]":""};
        }
      }`},T=[{dims:l,dataType:e[0].dataType}];return r>1&&T.push({dims:f,dataType:1}),r>2&&T.push({dims:f,dataType:1}),r>3&&T.push({dims:i,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${$};${_};${b};${w}`,inputDependencies:e.map((k,A)=>"type")},getShaderSource:C,getRunData:()=>({outputs:T,dispatchGroup:{x:Math.ceil(u/c)},programUniforms:v})}},o_=(e,t)=>{xf(e.inputs);let r=[0];e.outputCount>1&&r.push(-3),e.outputCount>2&&r.push(-3),e.outputCount>3&&r.push(3),e.compute(Sf(e.inputs,t,e.outputCount,!1),{outputs:r})}}),Tf,$i,Cf,hs,kf,If,l_,u_,O1=K(()=>{_e(),Se(),Ke(),Te(),Tf=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((r,n)=>{if(e[n+1].dataType!==6&&e[n+1].dataType!==7)throw new Error(`Input ${n} must be an array of int32 or int64`)})},$i=(e,t)=>{let r=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(n=>r.push(Number(n)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(n=>r.push(Number(n)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return r},Cf=(e,t)=>{if(e.length>1){let r=$i(e,1),n=$i(e,2),a=$i(e,3);return a.length===0&&(a=[...Array(e[0].dims.length).keys()]),Ne({starts:r,ends:n,axes:a})}else return t},hs=(e,t,r,n,a)=>{let i=e;return e<0&&(i+=r[n[t]]),a[t]<0?Math.max(0,Math.min(i,r[n[t]]-1)):Math.max(0,Math.min(i,r[n[t]]))},kf=(e,t,r)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${r.length}; i >= 0; i--) {
            let input_shape_i = ${ae("uniforms.input_shape","i",r.length)};
            let steps_i = ${ae("uniforms.steps","i",r.length)};
            let signs_i = ${ae("uniforms.signs","i",r.length)};
            let starts_i = ${ae("uniforms.starts","i",r.length)};
            var output_index = ${t.indicesGet("output_indices","i")};
            var input_index = output_index * steps_i + starts_i + carry;
            carry = input_index / input_shape_i;
            input_index = input_index % input_shape_i;
            if (signs_i < 0) {
              input_index = input_shape_i - input_index - 1u + starts_i;
            }
            ${e.indicesSet("input_indices","i","input_index")};
          }
          return input_indices;
      }`,If=(e,t)=>{let r=e[0].dims,n=M.size(r),a=t.axes.length>0?M.normalizeAxes(t.axes,r.length):[...Array(r.length).keys()],i=$i(e,4);i.forEach($=>$!==0||(()=>{throw new Error("step cannot be 0")})),i.length===0&&(i=Array(a.length).fill(1));let s=t.starts.map(($,v)=>hs($,v,r,a,i)),l=t.ends.map(($,v)=>hs($,v,r,a,i));if(a.length!==s.length||a.length!==l.length)throw new Error("start, ends and axes should have the same number of elements");if(a.length!==r.length)for(let $=0;$<r.length;++$)a.includes($)||(s.splice($,0,0),l.splice($,0,r[$]),i.splice($,0,1));let u=i.map($=>Math.sign($));i.forEach(($,v,C)=>{if($<0){let T=(l[v]-s[v])/$,k=s[v],A=k+T*i[v];s[v]=A,l[v]=k,C[v]=-$}});let c=r.slice(0);a.forEach(($,v)=>{c[$]=Math.ceil((l[$]-s[$])/i[$])});let f={dims:c,dataType:e[0].dataType},h=ne("output",e[0].dataType,c.length),g=U("input",e[0].dataType,e[0].dims.length),_=M.size(c),b=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:s.length},{name:"signs",type:"i32",length:u.length},{name:"steps",type:"u32",length:i.length}],w=[{type:12,data:_},{type:12,data:s},{type:6,data:u},{type:12,data:i},...oe(e[0].dims,c)],S=$=>`
      ${$.registerUniforms(b).declareVariables(g,h)}
        ${kf(g,h,r)}
        ${$.mainStart()}
          ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${h.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${h.setByOffset("global_idx",g.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${u.length}_${s.length}_${i.length}`,inputDependencies:["rank"]},getShaderSource:S,getRunData:()=>({outputs:[f],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:w})}},l_=(e,t)=>{Tf(e.inputs,t);let r=Cf(e.inputs,t);e.compute(If(e.inputs,r),{inputs:[0]})},u_=e=>{let t=e.starts,r=e.ends,n=e.axes;return Ne({starts:t,ends:r,axes:n})}}),Ef,zf,d_,c_,R1=K(()=>{_e(),Se(),Ke(),Cr(),Te(),Ef=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},zf=(e,t)=>{let r=e.inputs[0],n=r.dims,a=M.size(n),i=n.length,s=M.normalizeAxis(t.axis,i),l=s<n.length-1,u,c=[];l?(c=Array.from({length:i},(O,B)=>B),c[s]=i-1,c[i-1]=s,u=e.compute(Tt(r,c),{inputs:[r],outputs:[-1]})[0]):u=r;let f=u.dims,h=f[i-1],g=a/h,_=Ge(h),b=h/_,w=64;g===1&&(w=256);let S=(O,B)=>B===4?`max(max(${O}.x, ${O}.y), max(${O}.z, ${O}.w))`:B===2?`max(${O}.x, ${O}.y)`:B===3?`max(max(${O}.x, ${O}.y), ${O}.z)`:O,$=U("x",u.dataType,u.dims,_),v=ne("result",u.dataType,u.dims,_),C=$.type.value,T=Ye(u.dataType)==="f32"?`var threadMax = ${C}(-3.402823e+38f);`:`var threadMax = ${C}(-65504.0h);`,k=O=>`
      var<workgroup> rowMaxShared : ${C};
      var<workgroup> rowSumShared : ${C};
      var<workgroup> threadShared : array<${C}, ${w}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${C} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${C}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${O.registerUniform("packedCols","i32").declareVariables($,v)}
      ${O.mainStart(w)}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${w};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${T}
        for (var col = lindex; col < cols; col += wg) {
          let value = getValue(row, col, row_stride);
          threadMax = max(threadMax, value);
        }
        if (lindex < cols) {
          threadShared[lindex] = threadMax;
        }
        workgroupBarrier();

        var reduceSize = min(cols, wg);
        for (var currSize = reduceSize >> 1;  currSize > 0; currSize = reduceSize >> 1) {
          reduceSize = currSize + (reduceSize & 1);
          if (lindex < currSize) {
            threadShared[lindex] = max(threadShared[lindex], threadShared[lindex + reduceSize]);
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowMaxShared = ${C}(${S("threadShared[0]",_)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${C}(0.0);
        for (var col = lindex; col < cols; col += wg) {
          let subExp = exp(getValue(row, col, row_stride) - rowMaxShared);
          threadSum += subExp;
        }
        threadShared[lindex] = threadSum;
        workgroupBarrier();

        for (var currSize = wg >> 1;  currSize > 0; currSize = currSize >> 1) {
          if (lindex < currSize) {
            threadShared[lindex] = threadShared[lindex] + threadShared[lindex + currSize];
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowSumShared = ${C}(${$r("threadShared[0]",_)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          let value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          setValue(row, col, row_stride, value);
        }
      }`,A=e.compute({name:"Softmax",shaderCache:{hint:`${_};${w}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:f,dataType:u.dataType}],dispatchGroup:{x:g},programUniforms:[{type:6,data:b}]}),getShaderSource:k},{inputs:[u],outputs:[l?-1:0]})[0];l&&e.compute(Tt(A,c),{inputs:[A]})},d_=(e,t)=>{Ef(e.inputs),zf(e,t)},c_=e=>Ne({axis:e.axis})}),ms,Af,Of,Rf,p_,M1=K(()=>{_e(),Se(),Te(),ms=e=>Array.from(e.getBigInt64Array(),Number),Af=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(ms(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},Of=(e,t)=>{let r=[];for(let n=0;n<e.length;++n)r.push(e[n]*t[n]);return r},Rf=(e,t)=>{let r=e[0].dims,n=t??ms(e[1]),a=Of(r,n),i=M.size(a),s=e[0].dataType,l=U("input",s,r.length),u=ne("output",s,a.length),c=f=>`
      const inputShape = ${l.indices(...r)};
      ${f.registerUniform("output_size","u32").declareVariables(l,u)}
      ${f.mainStart()}
      ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${u.offsetToIndices("global_idx")};
      var input_indices: ${l.type.indices};
      for (var i = 0; i < ${r.length}; i++) {
        let input_dim_i = ${l.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${u.indicesGet("output_indices","i")}  % input_dim_i;

        ${l.indicesSet("input_indices","i","input_dim_value")}
      }
      ${u.setByOffset("global_idx",l.getByIndices("input_indices"))}
    }`;return{name:"Tile",shaderCache:{hint:`${n}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:[{type:12,data:i},...oe(e[0].dims,a)]}),getShaderSource:c}},p_=e=>{Af(e.inputs),e.compute(Rf(e.inputs),{inputs:[0]})}}),Mf,Bf,f_,B1=K(()=>{_e(),Se(),Te(),Mf=(e,t,r,n,a)=>{let i=ne("output_data",a,r.length,4),s=U("a_data",t[1].dataType,t[1].dims.length,4),l=U("b_data",t[2].dataType,t[2].dims.length,4),u=U("c_data",t[0].dataType,t[0].dims.length,4),c,f=(h,g,_)=>`select(${g}, ${h}, ${_})`;if(!n)c=i.setByOffset("global_idx",f(s.getByOffset("global_idx"),l.getByOffset("global_idx"),u.getByOffset("global_idx")));else{let h=(g,_,b="")=>{let w=`a_data[index_a${_}][component_a${_}]`,S=`b_data[index_b${_}][component_b${_}]`,$=`bool(c_data[index_c${_}] & (0xffu << (component_c${_} * 8)))`;return`
            let output_indices${_} = ${i.offsetToIndices(`global_idx * 4u + ${_}u`)};
            let offset_a${_} = ${s.broadcastedIndicesToOffset(`output_indices${_}`,i)};
            let offset_b${_} = ${l.broadcastedIndicesToOffset(`output_indices${_}`,i)};
            let offset_c${_} = ${u.broadcastedIndicesToOffset(`output_indices${_}`,i)};
            let index_a${_} = offset_a${_} / 4u;
            let index_b${_} = offset_b${_} / 4u;
            let index_c${_} = offset_c${_} / 4u;
            let component_a${_} = offset_a${_} % 4u;
            let component_b${_} = offset_b${_} % 4u;
            let component_c${_} = offset_c${_} % 4u;
            ${g}[${_}] = ${b}(${f(w,S,$)});
          `};a===9?c=`
            var data = vec4<u32>(0);
            ${h("data",0,"u32")}
            ${h("data",1,"u32")}
            ${h("data",2,"u32")}
            ${h("data",3,"u32")}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:c=`
            ${h("output_data[global_idx]",0)}
            ${h("output_data[global_idx]",1)}
            ${h("output_data[global_idx]",2)}
            ${h("output_data[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(u,s,l,i)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${c}
      }`},Bf=e=>{let t=e[1].dims,r=e[2].dims,n=e[0].dims,a=e[1].dataType,i=!(M.areEqual(t,r)&&M.areEqual(r,n)),s=t,l=M.size(t);if(i){let c=oi.calcShape(oi.calcShape(t,r,!1),n,!1);if(!c)throw new Error("Can't perform where op on the given tensors");s=c,l=M.size(s)}let u=Math.ceil(l/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:c=>Mf(c,e,s,i,a),getRunData:()=>({outputs:[{dims:s,dataType:a}],dispatchGroup:{x:Math.ceil(l/64/4)},programUniforms:[{type:12,data:u},...oe(n,t,r,s)]})}},f_=e=>{e.compute(Bf(e.inputs))}}),h_,D1=K(()=>{Q$(),zo(),Z$(),X$(),J$(),Y$(),e1(),a1(),o1(),l1(),u1(),d1(),c1(),p1(),f1(),h1(),m1(),g1(),y1(),_1(),b1(),w1(),v1(),$1(),x1(),My(),S1(),T1(),C1(),k1(),I1(),Eo(),E1(),z1(),A1(),O1(),R1(),Ny(),M1(),Cr(),Ao(),B1(),h_=new Map([["Abs",[lg]],["Acos",[ug]],["Acosh",[dg]],["Add",[Fg]],["ArgMax",[ng,Ps]],["ArgMin",[ig,Ps]],["Asin",[cg]],["Asinh",[pg]],["Atan",[fg]],["Atanh",[hg]],["Attention",[ag]],["AveragePool",[Gy,Hy]],["BatchNormalization",[sg]],["BiasAdd",[og]],["BiasSplitGelu",[qg]],["Cast",[gg,mg]],["Ceil",[_g]],["Clip",[yg]],["Concat",[ey,ty]],["Conv",[Fs,qs]],["ConvTranspose",[cy,dy]],["Cos",[bg]],["Cosh",[wg]],["CumSum",[py,fy]],["DepthToSpace",[hy,my]],["DequantizeLinear",[Yy,e_]],["Div",[Hg]],["Einsum",[gy,yy]],["Elu",[vg,Ei]],["Equal",[Gg]],["Erf",[$g]],["Exp",[xg]],["Expand",[_y]],["FastGelu",[by]],["Floor",[Sg]],["FusedConv",[Fs,qs]],["Gather",[vy,wy]],["GatherElements",[ky,Cy]],["GatherBlockQuantized",[Sy,Ty]],["GatherND",[$y,xy]],["Gelu",[Tg]],["Gemm",[Ey,Iy]],["GlobalAveragePool",[Ky,jy]],["GlobalMaxPool",[Jy,Xy]],["Greater",[Zg]],["GreaterOrEqual",[Jg]],["GridSample",[zy,Ay]],["GroupQueryAttention",[Py]],["HardSigmoid",[Rg,Og]],["InstanceNormalization",[Uy]],["LayerNormalization",[Wy]],["LeakyRelu",[Cg,Ei]],["Less",[Xg]],["LessOrEqual",[Yg]],["Log",[Lg]],["MatMul",[Ly]],["MatMulNBits",[Vy,qy]],["MaxPool",[Qy,Zy]],["Mul",[jg]],["MultiHeadAttention",[Ry,Oy]],["Neg",[Ig]],["Not",[kg]],["Pad",[Fy]],["Pow",[Kg]],["QuickGelu",[Vg,Ei]],["Range",[t_]],["Reciprocal",[Eg]],["ReduceMin",[Jm]],["ReduceMean",[jm]],["ReduceMax",[Xm]],["ReduceSum",[eg]],["ReduceProd",[Ym]],["ReduceL1",[Km]],["ReduceL2",[Qm]],["ReduceLogSum",[rg]],["ReduceLogSumExp",[Zm]],["ReduceSumSquare",[tg]],["Relu",[zg]],["Resize",[n_,a_]],["RotaryEmbedding",[s_]],["ScatterND",[i_,r_]],["Sigmoid",[Ag]],["Sin",[Mg]],["Sinh",[Bg]],["Slice",[l_,u_]],["SkipLayerNormalization",[o_]],["Split",[By,Dy]],["Sqrt",[Dg]],["Softmax",[d_,c_]],["Sub",[Qg]],["Tan",[Ng]],["Tanh",[Pg]],["ThresholdedRelu",[Wg,Ei]],["Tile",[p_]],["Transpose",[Bm,Dm]],["Where",[f_]]])}),m_,N1=K(()=>{Pt(),lr(),Te(),m_=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,r,n,a){er(e.programInfo.name);let i=this.backend.device,s=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let l=[];for(let c of t)l.push({binding:l.length,resource:{buffer:c.buffer}});for(let c of r)l.push({binding:l.length,resource:{buffer:c.buffer}});a&&l.push({binding:l.length,resource:a});let u=i.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:l,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let c={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:u,dispatchGroup:n};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(c)}s.setPipeline(e.computePipeline),s.setBindGroup(0,u),s.dispatchWorkgroups(...n),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),Nt(e.programInfo.name)}dispose(){}build(e,t){er(e.name);let r=this.backend.device,n=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"},{feature:"subgroups-f16",extension:"subgroups_f16"}].forEach(c=>{r.features.has(c.feature)&&n.push(`enable ${c.extension};`)});let a=Mm(t,this.backend.device.limits),i=e.getShaderSource(a),s=`${n.join(`
`)}
${a.additionalImplementations}
${i}`,l=r.createShaderModule({code:s,label:e.name});Oe("verbose",()=>`[WebGPU] ${e.name} shader code: ${s}`);let u=r.createComputePipeline({compute:{module:l,entryPoint:"main"},layout:"auto",label:e.name});return Nt(e.name),{programInfo:e,computePipeline:u,uniformVariablesInfo:a.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,r=typeof e=="number"?1:e.y||1,n=typeof e=="number"?1:e.z||1,a=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=a&&r<=a&&n<=a)return[t,r,n];let i=t*r*n,s=Math.ceil(Math.sqrt(i));if(s>a){if(s=Math.ceil(Math.cbrt(i)),s>a)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[s,s,s]}else return[s,s,1]}}}),Df,Nf,Pf,Uf,g_,P1=K(()=>{Pt(),_e(),lr(),Im(),j$(),D1(),N1(),Df=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let r=[];for(let n=0;n<e.length;++n){let a=e[n].dataType;switch(t[n]){case"none":{r.push("");break}case"type":{r.push(`${a}`);break}case"rank":{let i=e[n].dims.length;r.push(`${a};${i}`);break}case"dims":{let i=e[n].dims.join(",");r.push(`${a};${i}`);break}default:throw new Error(`unsupported input dependency: ${t[n]}`)}}return r.join("|")},Nf=(e,t,r)=>{var a,i;let n=e.name;return(a=e.shaderCache)!=null&&a.hint&&(n+="["+e.shaderCache.hint+"]"),n+=":"+r+`:${Df(t,((i=e.shaderCache)==null?void 0:i.inputDependencies)??new Array(t.length).fill("dims"))}`,n},Pf=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},Uf=class{constructor(e){this.subgroupsSupported=e.features.has("subgroups"),this.subgroupsF16Supported=e.features.has("subgroups");let t=e.limits;!this.subgroupsSupported||!t.minSubgroupSize||!t.maxSubgroupSize?this.subgroupSizeRange=void 0:this.subgroupSizeRange=[t.minSubgroupSize,t.maxSubgroupSize]}},g_=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let r=[],n={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:r},a=i=>t.features.has(i)&&r.push(i)&&!0;a("chromium-experimental-timestamp-query-inside-passes")||a("timestamp-query"),a("shader-f16"),a("subgroups")&&a("subgroups-f16"),this.device=await t.requestDevice(n),this.deviceInfo=new Uf(this.device),this.adapterInfo=new Pf(t.info||await t.requestAdapterInfo()),this.gpuDataManager=Em(this),this.programManager=new m_(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,To(e.logLevel,!!e.debug),this.device.onuncapturederror=i=>{i.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${i.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!1}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose()}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;er(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{var n;let t=new BigUint64Array(e.getMappedRange()),r=this.pendingQueries.get(e);for(let a=0;a<t.length/2;a++){let i=r[a],s=i.kernelId,l=this.kernels.get(s),u=l.kernelType,c=l.kernelName,f=i.programName,h=i.inputTensorViews,g=i.outputTensorViews,_=t[a*2],b=t[a*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=_);let w=Number(_-this.queryTimeBase),S=Number(b-this.queryTimeBase);if(!Number.isSafeInteger(w)||!Number.isSafeInteger(S))throw new RangeError("incorrect timestamp range");if((n=this.env.webgpu.profiling)!=null&&n.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:h.map($=>({dims:$.dims,dataType:Br($.dataType)})),outputsMetadata:g.map($=>({dims:$.dims,dataType:Br($.dataType)})),kernelId:s,kernelType:u,kernelName:c,programName:f,startTime:w,endTime:S});else{let $="";h.forEach((C,T)=>{$+=`input[${T}]: [${C.dims}] | ${Br(C.dataType)}, `});let v="";g.forEach((C,T)=>{v+=`output[${T}]: [${C.dims}] | ${Br(C.dataType)}, `}),console.log(`[profiling] kernel "${s}|${u}|${c}|${f}" ${$}${v}execution time: ${S-w} ns`)}Bn("GPU",`${f}::${_}::${b}`)}e.unmap(),this.pendingQueries.delete(e)}),Nt()}run(e,t,r,n,a,i){er(e.name);let s=[];for(let v=0;v<t.length;++v){let C=t[v].data;if(C===0)continue;let T=this.gpuDataManager.get(C);if(!T)throw new Error(`no GPU data for input: ${C}`);s.push(T)}let{outputs:l,dispatchGroup:u,programUniforms:c}=e.getRunData(t),f=r.length===0?l.map((v,C)=>C):r;if(f.length!==l.length)throw new Error(`Output size ${f.length} must be equal to ${l.length}.`);let h=[],g=[];for(let v=0;v<l.length;++v){if(!Number.isInteger(f[v])||f[v]<-3||f[v]>=i)throw new Error(`Invalid output index: ${f[v]}`);if(f[v]===-3)continue;let C=f[v]===-1,T=f[v]===-2,k=C||T?a(l[v].dataType,l[v].dims):n(f[v],l[v].dataType,l[v].dims);if(h.push(k),k.data===0)continue;let A=this.gpuDataManager.get(k.data);if(!A)throw new Error(`no GPU data for output: ${k.data}`);if(C&&this.temporaryData.push(A),T){let O=this.kernelPersistentData.get(this.currentKernelId);O||(O=[],this.kernelPersistentData.set(this.currentKernelId,O)),O.push(A)}g.push(A)}if(s.length!==t.length||g.length!==h.length){if(g.length===0)return Nt(e.name),h;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let _;if(c){let v=0,C=[];c.forEach(O=>{let B=typeof O.data=="number"?[O.data]:O.data;if(B.length===0)return;let q=O.type===10?2:4,X,ce;O.type===10?(ce=B.length>4?16:B.length>2?8:B.length*q,X=B.length>4?16:q*B.length):(ce=B.length<=2?B.length*q:16,X=16),v=Math.ceil(v/ce)*ce,C.push(v);let ge=O.type===10?8:4;v+=B.length>4?Math.ceil(B.length/ge)*X:B.length*q});let T=16;v=Math.ceil(v/T)*T;let k=new ArrayBuffer(v);c.forEach((O,B)=>{let q=C[B],X=typeof O.data=="number"?[O.data]:O.data;if(O.type===6)new Int32Array(k,q,X.length).set(X);else if(O.type===12)new Uint32Array(k,q,X.length).set(X);else if(O.type===10)new Uint16Array(k,q,X.length).set(X);else if(O.type===1)new Float32Array(k,q,X.length).set(X);else throw new Error(`Unsupported uniform type: ${Br(O.type)}`)});let A=this.gpuDataManager.create(v,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(A.buffer,0,k,0,v),this.gpuDataManager.release(A.id),_={offset:0,size:v,buffer:A.buffer}}let b=this.programManager.normalizeDispatchGroupSize(u),w=b[1]===1&&b[2]===1,S=Nf(e,t,w),$=this.programManager.getArtifact(S);if($||($=this.programManager.build(e,b),this.programManager.setArtifact(S,$),Oe("info",()=>`[artifact] key: ${S}, programName: ${e.name}`)),c&&$.uniformVariablesInfo){if(c.length!==$.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${$.uniformVariablesInfo.length}, got ${c.length} in program "${$.programInfo.name}".`);for(let v=0;v<c.length;v++){let C=c[v],T=C.type,k=typeof C.data=="number"?1:C.data.length,[A,O]=$.uniformVariablesInfo[v];if(T!==A||k!==O)throw new Error(`Uniform variable ${v} mismatch: expect type ${A} with size ${O}, got type ${T} with size ${k} in program "${$.programInfo.name}".`)}}if(Oe("info",()=>`[ProgramManager] run "${e.name}" (key=${S}) with ${b[0]}x${b[1]}x${b[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let v={kernelId:this.currentKernelId,programName:$.programInfo.name,inputTensorViews:t,outputTensorViews:h};this.pendingKernels.push(v),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(v)}return this.programManager.run($,s,g,b,_),Nt(e.name),h}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,r,n){let a=h_.get(e);if(!a)throw new Error(`kernel not implemented: ${e}`);let i={kernelType:e,kernelName:n,kernelEntry:a[0],attributes:[a[1],r]};this.kernels.set(t,i)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let r of t)this.gpuDataManager.release(r.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,r){let n=this.kernels.get(e);if(!n)throw new Error(`kernel not created: ${e}`);let a=n.kernelType,i=n.kernelName,s=n.kernelEntry,l=n.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${a}] ${i}" is not allowed to be called recursively`);this.currentKernelId=e,l[0]&&(l[1]=l[0](l[1]),l[0]=void 0),Oe("info",()=>`[WebGPU] Start to run kernel "[${a}] ${i}"...`);let u=this.env.debug;this.temporaryData=[];try{return u&&this.device.pushErrorScope("validation"),s(t,l[1]),0}catch(c){return r.push(Promise.resolve(`[WebGPU] Kernel "[${a}] ${i}" failed. ${c}`)),1}finally{u&&r.push(this.device.popErrorScope().then(c=>c?`GPU validation error for kernel "[${a}] ${i}": ${c.message}`:null));for(let c of this.temporaryData)this.gpuDataManager.release(c.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,r,n){let a=this.sessionExternalDataMapping.get(e);a||(a=new Map,this.sessionExternalDataMapping.set(e,a));let i=a.get(t),s=this.gpuDataManager.registerExternalBuffer(r,n,i);return a.set(t,[s,r]),s}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(r=>this.gpuDataManager.unregisterExternalBuffer(r[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,r){return async()=>{let n=await Bs(this,e,t);return Co(n.buffer,r)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){var e;this.queryType="none",(((e=this.env.webgpu.profiling)==null?void 0:e.mode)==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){Oe("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){Oe("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){Oe("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),r=e.length;this.pendingKernels=[];for(let n=0;n<r;n++){let a=this.getComputePassEncoder(),i=e[n];this.writeTimestamp(this.pendingDispatchNumber*2),a.setPipeline(i.computePipeline),a.setBindGroup(0,i.bindGroup),a.dispatchWorkgroups(...i.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[n]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),Wf,gs,Lf,ys,_s,bs,Vf,y_,U1=K(()=>{lr(),Wf=1,gs=()=>Wf++,Lf=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),ys=(e,t)=>{let r=Lf.get(e);if(!r)throw new Error("Unsupported data type.");return t.length>0?Math.ceil(t.reduce((n,a)=>n*a)*r/8):0},_s=class{constructor(e){this.sessionId=e.sessionId,this.mlContext=e.context,this.mlTensor=e.tensor,this.dataType=e.dataType,this.tensorShape=e.shape}get tensor(){return this.mlTensor}get type(){return this.dataType}get shape(){return this.tensorShape}get byteLength(){return ys(this.dataType,this.tensorShape)}destroy(){Oe("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,r){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===r.length&&this.tensorShape.every((n,a)=>n===r[a])}},bs=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,r,n){let a=this.tensorManager.getMLContext(e);if(this.wrapper){if(this.wrapper.canReuseTensor(a,t,r))return this.wrapper.tensor;if(n){if(this.wrapper.byteLength!==ys(t,r))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let i=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,r,i,!0,!0),n&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){if(this.wrapper)if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(e);return}else Oe("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor();this.activeUpload?this.activeUpload.set(e):this.activeUpload=new Uint8Array(e)}async download(e){if(this.activeUpload)if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(this.activeUpload):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(this.activeUpload);return}else return this.activeUpload.buffer;if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},Vf=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw new Error("MLContext not found for session.");return t}reserveTensorId(){let e=gs();return this.tensorTrackersById.set(e,new bs(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,r,n,a){Oe("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${r}, shape: ${n}, copyOld: ${a}}`);let i=this.tensorTrackersById.get(t);if(!i)throw new Error("Tensor not found.");return i.ensureTensor(e,r,n,a)}upload(e,t){let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");r.upload(t)}async download(e,t){Oe("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t==null?void 0:t.byteLength}}`);let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");return r.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,r,n){let a=this.getMLContext(e),i=gs(),s=new _s({sessionId:e,context:a,tensor:t,dataType:r,shape:n});return this.tensorTrackersById.set(i,new bs(this,s)),this.externalTensors.add(s),i}async getCachedTensor(e,t,r,n,a,i){let s=this.getMLContext(e);for(let[u,c]of this.freeTensors.entries())if(c.canReuseTensor(s,t,r)){Oe("verbose",()=>`[WebNN] Reusing tensor {dataType: ${t}, shape: ${r}}`);let f=this.freeTensors.splice(u,1)[0];return f.sessionId=e,f}Oe("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${t}, shape: ${r}}`);let l=await s.createTensor({dataType:t,shape:r,dimensions:r,usage:n,writable:a,readable:i});return new _s({sessionId:e,context:s,tensor:l,dataType:t,shape:r})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},y_=(...e)=>new Vf(...e)}),_n,qf,__,W1=K(()=>{_e(),Fr(),Im(),U1(),lr(),_n=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),qf=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let r=Object.keys(e).sort(),n=Object.keys(t).sort();return r.length===n.length&&r.every((a,i)=>a===n[i]&&e[a]===t[a])},__=class{constructor(e){this.tensorManager=y_(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.temporaryGraphInputs=[],this.temporarySessionTensorIds=new Map,To(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){Oe("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){Oe("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let r of t)Oe("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${r}}`),this.tensorManager.releaseTensorId(r);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let r=this.mlContextCache.findIndex(n=>n.gpuDevice===e);if(r!==-1)return this.mlContextCache[r].mlContext;{let n=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:n}),n}}else if(e===void 0){let r=this.mlContextCache.findIndex(n=>n.options===void 0&&n.gpuDevice===void 0);if(r!==-1)return this.mlContextCache[r].mlContext;{let n=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:n}),n}}let t=this.mlContextCache.findIndex(r=>qf(r.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let r=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:r}),r}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let r=this.sessionIdsByMLContext.get(t);r||(r=new Set,this.sessionIdsByMLContext.set(t,r)),r.add(e),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e);let r=this.sessionIdsByMLContext.get(t);if(r.delete(e),r.size===0){this.sessionIdsByMLContext.delete(t);let n=this.mlContextCache.findIndex(a=>a.mlContext===t);n!==-1&&this.mlContextCache.splice(n,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){Oe("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,r,n,a){let i=_n.get(r);if(!i)throw new Error(`Unsupported ONNX data type: ${r}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,i,n,a)}async createTemporaryTensor(e,t,r){Oe("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${r}}`);let n=_n.get(t);if(!n)throw new Error(`Unsupported ONNX data type: ${t}`);let a=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,a,n,r,!1);let i=this.temporarySessionTensorIds.get(e);return i?i.push(a):this.temporarySessionTensorIds.set(e,[a]),a}uploadTensor(e,t){if(!Je().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");Oe("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let r=await this.tensorManager.download(e);return Co(r,t)}}registerMLTensor(e,t,r,n){let a=_n.get(r);if(!a)throw new Error(`Unsupported ONNX data type: ${r}`);let i=this.tensorManager.registerTensor(e,t,a,n);return Oe("verbose",()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${a}, dimensions: ${n}} -> {tensorId: ${i}}`),i}registerMLConstant(e,t,r,n,a,i){if(!i)throw new Error("External mounted files are not available.");let s=e;e.startsWith("./")&&(s=e.substring(2));let l=i.get(s);if(!l)throw new Error(`File with name ${s} not found in preloaded files.`);if(t+r>l.byteLength)throw new Error("Out of bounds: data offset and length exceed the external file data size.");let u=l.slice(t,t+r).buffer,c;switch(a.dataType){case"float32":c=new Float32Array(u);break;case"float16":c=new Uint16Array(u);break;case"int32":c=new Int32Array(u);break;case"uint32":c=new Uint32Array(u);break;case"int64":c=new BigInt64Array(u);break;case"uint64":c=new BigUint64Array(u);break;case"int8":c=new Int8Array(u);break;case"int4":case"uint4":case"uint8":c=new Uint8Array(u);break;default:throw new Error(`Unsupported data type: ${a.dataType} in creating WebNN Constant from external data.`)}return Oe("verbose",()=>`[WebNN] registerMLConstant {dataType: ${a.dataType}, shape: ${a.shape}}}`),n.constant(a,c)}registerGraphInput(e){this.temporaryGraphInputs.push(e)}isGraphInput(e,t){let r=this.sessionGraphInputs.get(e);return r?r.includes(t):!1}flush(){}}}),b_={};Gi(b_,{init:()=>w_});var bn,Ff,w_,L1=K(()=>{_e(),P1(),lr(),Se(),W1(),bn=class v_{constructor(t,r,n,a){this.module=t,this.dataType=r,this.data=n,this.dims=a}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=M.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=M.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=M.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=M.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(M.size(t)!==M.size(this.dims))throw new Error("Invalid new shape");return new v_(this.module,this.dataType,this.data,t)}},Ff=class{constructor(e,t,r){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo,this.deviceInfo=t.deviceInfo;let n=e.PTR_SIZE,a=r/e.PTR_SIZE,i=n===4?"i32":"i64";this.opKernelContext=Number(e.getValue(n*a++,i));let s=Number(e.getValue(n*a++,i));this.outputCount=Number(e.getValue(n*a++,i)),this.customDataOffset=Number(e.getValue(n*a++,"*")),this.customDataSize=Number(e.getValue(n*a++,i));let l=[];for(let u=0;u<s;u++){let c=Number(e.getValue(n*a++,i)),f=Number(e.getValue(n*a++,"*")),h=Number(e.getValue(n*a++,i)),g=[];for(let _=0;_<h;_++)g.push(Number(e.getValue(n*a++,i)));l.push(new bn(e,c,f,g))}this.inputs=l}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){var s;let r=((s=t==null?void 0:t.inputs)==null?void 0:s.map(l=>typeof l=="number"?this.inputs[l]:l))??this.inputs,n=(t==null?void 0:t.outputs)??[],a=(l,u,c)=>new bn(this.module,u,this.output(l,c),c),i=(l,u)=>{let c=Dr(l,u);if(!c)throw new Error(`Unsupported data type: ${l}`);let f=c>0?this.backend.gpuDataManager.create(c).id:0;return new bn(this.module,l,f,u)};return this.backend.run(e,r,n,a,i,this.outputCount)}output(e,t){let r=this.module.stackSave();try{let n=this.module.PTR_SIZE,a=n===4?"i32":"i64",i=this.module.stackAlloc((1+t.length)*n);this.module.setValue(i,t.length,a);for(let s=0;s<t.length;s++)this.module.setValue(i+n*(s+1),t[s],a);return this.module._JsepOutput(this.opKernelContext,e,i)}catch(n){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${n}`)}finally{this.module.stackRestore(r)}}},w_=async(e,t,r,n)=>{let a=t.jsepInit;if(!a)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let i=new g_;await i.initialize(r,n),a("webgpu",[i,s=>i.alloc(Number(s)),s=>i.free(s),(s,l,u,c=!1)=>{if(c)Oe("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(s)}, dst=${Number(l)}, size=${Number(u)}`),i.memcpy(Number(s),Number(l));else{Oe("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(s)}, gpuDataId=${Number(l)}, size=${Number(u)}`);let f=t.HEAPU8.subarray(Number(s>>>0),Number(s>>>0)+Number(u));i.upload(Number(l),f)}},async(s,l,u)=>{Oe("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${s}, dataOffset=${l}, size=${u}`),await i.download(Number(s),()=>t.HEAPU8.subarray(Number(l)>>>0,Number(l+u)>>>0))},(s,l,u)=>i.createKernel(s,Number(l),u,t.UTF8ToString(t._JsepGetNodeName(Number(l)))),s=>i.releaseKernel(s),(s,l,u,c)=>{Oe("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${u}, kernel=${s}, contextDataOffset=${l}`);let f=new Ff(t,i,Number(l));return i.computeKernel(Number(s),f,c)},()=>i.captureBegin(),()=>i.captureEnd(),()=>i.replay()])}else{let i=new __(r);a("webnn",[i,()=>i.reserveTensorId(),s=>i.releaseTensorId(s),async(s,l,u,c,f)=>i.ensureTensor(s,l,u,c,f),(s,l)=>{i.uploadTensor(s,l)},async(s,l)=>i.downloadTensor(s,l)])}}}),Hf,No,Po,hr,Gf,Ln,Uo,Wo,ws,Lo,Vo,qo,$_=K(()=>{H$(),G$(),_e(),Fr(),wo(),km(),Hf=(e,t)=>{Je()._OrtInit(e,t)!==0&&Be("Can't initialize onnxruntime.")},No=async e=>{Hf(e.wasm.numThreads,Nn(e.logLevel))},Po=async(e,t)=>{{let r=(L1(),Mn(b_)).init;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");let n=e.webgpu.adapter;if(n){if(typeof n.limits!="object"||typeof n.features!="object"||typeof n.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let a=e.webgpu.powerPreference;if(a!==void 0&&a!=="low-power"&&a!=="high-performance")throw new Error(`Invalid powerPreference setting: "${a}"`);let i=e.webgpu.forceFallbackAdapter;if(i!==void 0&&typeof i!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${i}"`);if(n=await navigator.gpu.requestAdapter({powerPreference:a,forceFallbackAdapter:i}),!n)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}await r("webgpu",Je(),e,n)}if(t==="webnn"){if(typeof navigator>"u"||!navigator.ml)throw new Error("WebNN is not supported in current environment");await r("webnn",Je(),e)}}},hr=new Map,Gf=e=>{let t=Je(),r=t.stackSave();try{let n=t.PTR_SIZE,a=t.stackAlloc(2*n);t._OrtGetInputOutputCount(e,a,a+n)!==0&&Be("Can't get session input/output count.");let i=n===4?"i32":"i64";return[Number(t.getValue(a,i)),Number(t.getValue(a+n,i))]}finally{t.stackRestore(r)}},Ln=e=>{let t=Je(),r=t._malloc(e.byteLength);if(r===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,r),[r,e.byteLength]},Uo=async(e,t)=>{var h,g,_;let r,n,a=Je();Array.isArray(e)?[r,n]=e:e.buffer===a.HEAPU8.buffer?[r,n]=[e.byteOffset,e.byteLength]:[r,n]=Ln(e);let i=0,s=0,l=0,u=[],c=[],f=[];try{if([s,u]=Cm(t),(t==null?void 0:t.externalData)&&a.mountExternalData){let k=[];for(let A of t.externalData){let O=typeof A=="string"?A:A.path;k.push(So(typeof A=="string"?A:A.data).then(B=>{a.mountExternalData(O,B)}))}await Promise.all(k)}for(let k of(t==null?void 0:t.executionProviders)??[])if((typeof k=="string"?k:k.name)==="webnn"){if(a.shouldTransferToMLTensor=!1,typeof k!="string"){let A=k,O=A==null?void 0:A.context,B=A==null?void 0:A.gpuDevice,q=A==null?void 0:A.deviceType,X=A==null?void 0:A.powerPreference;O?a.currentContext=O:B?a.currentContext=await a.jsepCreateMLContext(B):a.currentContext=await a.jsepCreateMLContext({deviceType:q,powerPreference:X})}else a.currentContext=await a.jsepCreateMLContext();break}i=await a._OrtCreateSession(r,n,s),i===0&&Be("Can't create a session."),(h=a.jsepOnCreateSession)==null||h.call(a),a.currentContext&&(a.jsepRegisterMLContext(i,a.currentContext),a.currentContext=void 0,a.shouldTransferToMLTensor=!0);let[b,w]=Gf(i),S=!!(t!=null&&t.enableGraphCapture),$=[],v=[],C=[];for(let k=0;k<b;k++){let A=a._OrtGetInputName(i,k);A===0&&Be("Can't get an input name."),c.push(A),$.push(a.UTF8ToString(A))}for(let k=0;k<w;k++){let A=a._OrtGetOutputName(i,k);A===0&&Be("Can't get an output name."),f.push(A);let O=a.UTF8ToString(A);v.push(O);{if(S&&(t==null?void 0:t.preferredOutputLocation)===void 0){C.push("gpu-buffer");continue}let B=typeof(t==null?void 0:t.preferredOutputLocation)=="string"?t.preferredOutputLocation:((g=t==null?void 0:t.preferredOutputLocation)==null?void 0:g[O])??"cpu";if(B!=="cpu"&&B!=="cpu-pinned"&&B!=="gpu-buffer"&&B!=="ml-tensor")throw new Error(`Not supported preferred output location: ${B}.`);if(S&&B!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${B}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);C.push(B)}}let T=null;return C.some(k=>k==="gpu-buffer"||k==="ml-tensor")&&(l=a._OrtCreateBinding(i),l===0&&Be("Can't create IO binding."),T={handle:l,outputPreferredLocations:C,outputPreferredLocationsEncoded:C.map(k=>Ms(k))}),hr.set(i,[i,c,f,T,S,!1]),[i,$,v]}catch(b){throw c.forEach(w=>a._OrtFree(w)),f.forEach(w=>a._OrtFree(w)),l!==0&&a._OrtReleaseBinding(l)!==0&&Be("Can't release IO binding."),i!==0&&a._OrtReleaseSession(i)!==0&&Be("Can't release session."),b}finally{a._free(r),s!==0&&a._OrtReleaseSessionOptions(s)!==0&&Be("Can't release session options."),u.forEach(b=>a._free(b)),(_=a.unmountExternalData)==null||_.call(a)}},Wo=e=>{var u;let t=Je(),r=hr.get(e);if(!r)throw new Error(`cannot release session. invalid session id: ${e}`);let[n,a,i,s,l]=r;s&&(l&&t._OrtClearBoundOutputs(s.handle)!==0&&Be("Can't clear bound outputs."),t._OrtReleaseBinding(s.handle)!==0&&Be("Can't release IO binding.")),(u=t.jsepOnReleaseSession)==null||u.call(t,e),a.forEach(c=>t._OrtFree(c)),i.forEach(c=>t._OrtFree(c)),t._OrtReleaseSession(n)!==0&&Be("Can't release session."),hr.delete(e)},ws=async(e,t,r,n,a,i=!1)=>{if(!e){t.push(0);return}let s=Je(),l=s.PTR_SIZE,u=e[0],c=e[1],f=e[3],h=f,g,_;if(u==="string"&&(f==="gpu-buffer"||f==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(i&&f!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${a} when enableGraphCapture is true.`);if(f==="gpu-buffer"){let S=e[2].gpuBuffer;_=Dr(Xr(u),c);let $=s.jsepRegisterBuffer;if(!$)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');g=$(n,a,S,_)}else if(f==="ml-tensor"){let S=e[2].mlTensor;_=Dr(Xr(u),c);let $=s.jsepRegisterMLTensor;if(!$)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');g=$(n,S,Xr(u),c)}else{let S=e[2];if(Array.isArray(S)){_=l*S.length,g=s._malloc(_),r.push(g);for(let $=0;$<S.length;$++){if(typeof S[$]!="string")throw new TypeError(`tensor data at index ${$} is not a string`);s.setValue(g+$*l,nt(S[$],r),"*")}}else{let $=s.jsepIsGraphInput;if(u!=="string"&&$){let v=s._OrtGetInputName(n,a),C=s.UTF8ToString(v);if($(n,C)){let T=Xr(u);_=Dr(T,c),h="ml-tensor";let k=s.jsepCreateTemporaryTensor,A=s.jsepUploadTensor;if(!k||!A)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let O=await k(n,T,c);A(O,new Uint8Array(S.buffer,S.byteOffset,S.byteLength)),g=O}else _=S.byteLength,g=s._malloc(_),r.push(g),s.HEAPU8.set(new Uint8Array(S.buffer,S.byteOffset,_),g)}else _=S.byteLength,g=s._malloc(_),r.push(g),s.HEAPU8.set(new Uint8Array(S.buffer,S.byteOffset,_),g)}}let b=s.stackSave(),w=s.stackAlloc(4*c.length);try{c.forEach(($,v)=>s.setValue(w+v*l,$,l===4?"i32":"i64"));let S=s._OrtCreateTensor(Xr(u),g,_,w,c.length,Ms(h));S===0&&Be(`Can't create tensor for input/output. session=${n}, index=${a}.`),t.push(S)}finally{s.stackRestore(b)}},Lo=async(e,t,r,n,a,i)=>{var ce,ge,se;let s=Je(),l=s.PTR_SIZE,u=hr.get(e);if(!u)throw new Error(`cannot run inference. invalid session id: ${e}`);let c=u[0],f=u[1],h=u[2],g=u[3],_=u[4],b=u[5],w=t.length,S=n.length,$=0,v=[],C=[],T=[],k=[],A=s.stackSave(),O=s.stackAlloc(w*l),B=s.stackAlloc(w*l),q=s.stackAlloc(S*l),X=s.stackAlloc(S*l);try{[$,v]=Tm(i);for(let Q=0;Q<w;Q++)await ws(r[Q],C,k,e,t[Q],_);for(let Q=0;Q<S;Q++)await ws(a[Q],T,k,e,w+n[Q],_);for(let Q=0;Q<w;Q++)s.setValue(O+Q*l,C[Q],"*"),s.setValue(B+Q*l,f[t[Q]],"*");for(let Q=0;Q<S;Q++)s.setValue(q+Q*l,T[Q],"*"),s.setValue(X+Q*l,h[n[Q]],"*");if(g&&!b){let{handle:Q,outputPreferredLocations:le,outputPreferredLocationsEncoded:ue}=g;if(f.length!==w)throw new Error(`input count from feeds (${w}) is expected to be always equal to model's input count (${f.length}).`);for(let ee=0;ee<w;ee++){let Ae=t[ee];await s._OrtBindInput(Q,f[Ae],C[ee])!==0&&Be(`Can't bind input[${ee}] for session=${e}.`)}for(let ee=0;ee<S;ee++){let Ae=n[ee];(ce=a[ee])!=null&&ce[3]?s._OrtBindOutput(Q,h[Ae],T[ee],0)!==0&&Be(`Can't bind pre-allocated output[${ee}] for session=${e}.`):s._OrtBindOutput(Q,h[Ae],0,ue[Ae])!==0&&Be(`Can't bind output[${ee}] to ${le[ee]} for session=${e}.`)}hr.set(e,[c,f,h,g,_,!0])}(ge=s.jsepOnRunStart)==null||ge.call(s,c);let he;g?he=await s._OrtRunWithBinding(c,g.handle,S,q,$):he=await s._OrtRun(c,B,O,w,X,S,q,$),he!==0&&Be("failed to call OrtRun().");let fe=[];for(let Q=0;Q<S;Q++){let le=Number(s.getValue(q+Q*l,"*"));if(le===T[Q]){fe.push(a[Q]);continue}let ue=s.stackSave(),ee=s.stackAlloc(4*l),Ae=!1,N,V=0;try{s._OrtGetTensorData(le,ee,ee+l,ee+2*l,ee+3*l)!==0&&Be(`Can't access output tensor data on index ${Q}.`);let Ce=l===4?"i32":"i64",We=Number(s.getValue(ee,Ce));V=s.getValue(ee+l,"*");let W=s.getValue(ee+l*2,"*"),Ee=Number(s.getValue(ee+l*3,Ce)),it=[];for(let Ve=0;Ve<Ee;Ve++)it.push(Number(s.getValue(W+Ve*l,Ce)));s._OrtFree(W)!==0&&Be("Can't free memory for tensor dims.");let et=it.reduce((Ve,De)=>Ve*De,1);N=Br(We);let Ut=g==null?void 0:g.outputPreferredLocations[n[Q]];if(N==="string"){if(Ut==="gpu-buffer"||Ut==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let Ve=[];for(let De=0;De<et;De++){let E=s.getValue(V+De*l,"*"),z=s.getValue(V+(De+1)*l,"*"),P=De===et-1?void 0:z-E;Ve.push(s.UTF8ToString(E,P))}fe.push([N,it,Ve,"cpu"])}else if(Ut==="gpu-buffer"&&et>0){let Ve=s.jsepGetBuffer;if(!Ve)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let De=Ve(V),E=Dr(We,et);if(E===void 0||!$o(N))throw new Error(`Unsupported data type: ${N}`);Ae=!0,fe.push([N,it,{gpuBuffer:De,download:s.jsepCreateDownloader(De,E,N),dispose:()=>{s._OrtReleaseTensor(le)!==0&&Be("Can't release tensor.")}},"gpu-buffer"])}else if(Ut==="ml-tensor"&&et>0){let Ve=s.jsepEnsureTensor;if(!Ve)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(Dr(We,et)===void 0||!xo(N))throw new Error(`Unsupported data type: ${N}`);let De=await Ve(e,V,We,it,!1);Ae=!0,fe.push([N,it,{mlTensor:De,download:s.jsepCreateMLTensorDownloader(V,N),dispose:()=>{s.jsepReleaseTensorId(V),s._OrtReleaseTensor(le)}},"ml-tensor"])}else{let Ve=vo(N),De=new Ve(et);new Uint8Array(De.buffer,De.byteOffset,De.byteLength).set(s.HEAPU8.subarray(V,V+De.byteLength)),fe.push([N,it,De,"cpu"])}}finally{s.stackRestore(ue),N==="string"&&V&&s._free(V),Ae||s._OrtReleaseTensor(le),(se=s.jsepOnRunEnd)==null||se.call(s,c)}}return g&&!_&&(s._OrtClearBoundOutputs(g.handle)!==0&&Be("Can't clear bound outputs."),hr.set(e,[c,f,h,g,_,!1])),fe}finally{s.stackRestore(A),C.forEach(he=>s._OrtReleaseTensor(he)),T.forEach(he=>s._OrtReleaseTensor(he)),k.forEach(he=>s._free(he)),$!==0&&s._OrtReleaseRunOptions($),v.forEach(he=>s._free(he))}},Vo=e=>{let t=Je(),r=hr.get(e);if(!r)throw new Error("invalid session id");let n=r[0],a=t._OrtEndProfiling(n);a===0&&Be("Can't get an profile file name."),t._OrtFree(a)},qo=e=>{let t=[];for(let r of e){let n=r[2];!Array.isArray(n)&&"buffer"in n&&t.push(n.buffer)}return t}}),mr,yt,Qr,xi,Si,wn,vs,vn,Ar,Or,jf,x_,S_,T_,C_,k_,I_,E_,z_=K(()=>{Pt(),$_(),Fr(),_o(),mr=()=>!!Fe.wasm.proxy&&typeof document<"u",Qr=!1,xi=!1,Si=!1,vn=new Map,Ar=(e,t)=>{let r=vn.get(e);r?r.push(t):vn.set(e,[t])},Or=()=>{if(Qr||!xi||Si||!yt)throw new Error("worker not ready")},jf=e=>{switch(e.data.type){case"init-wasm":Qr=!1,e.data.err?(Si=!0,vs[1](e.data.err)):(xi=!0,vs[0]()),wn&&(URL.revokeObjectURL(wn),wn=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=vn.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}}},x_=async()=>{if(!xi){if(Qr)throw new Error("multiple calls to 'initWasm()' detected.");if(Si)throw new Error("previous call to 'initWasm()' failed.");if(Qr=!0,mr())return new Promise((e,t)=>{yt==null||yt.terminate(),xm().then(([r,n])=>{var a;try{yt=n,yt.onerror=s=>t(s),yt.onmessage=jf,vs=[e,t];let i={type:"init-wasm",in:Fe};!i.in.wasm.wasmPaths&&(r||(a=import.meta.url)!=null&&a.startsWith("file:"))&&(i.in.wasm.wasmPaths={wasm:new URL("/assets/ort-wasm-simd-threaded.jsep-D5Jk56-t.wasm",import.meta.url).href}),yt.postMessage(i),wn=r}catch(i){t(i)}},t)});try{await bo(Fe.wasm),await No(Fe),xi=!0}catch(e){throw Si=!0,e}finally{Qr=!1}}},S_=async e=>{if(mr())return Or(),new Promise((t,r)=>{Ar("init-ep",[t,r]);let n={type:"init-ep",in:{epName:e,env:Fe}};yt.postMessage(n)});await Po(Fe,e)},T_=async e=>mr()?(Or(),new Promise((t,r)=>{Ar("copy-from",[t,r]);let n={type:"copy-from",in:{buffer:e}};yt.postMessage(n,[e.buffer])})):Ln(e),C_=async(e,t)=>{if(mr()){if(t!=null&&t.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return Or(),new Promise((r,n)=>{Ar("create",[r,n]);let a={type:"create",in:{model:e,options:{...t}}},i=[];e instanceof Uint8Array&&i.push(e.buffer),yt.postMessage(a,i)})}else return Uo(e,t)},k_=async e=>{if(mr())return Or(),new Promise((t,r)=>{Ar("release",[t,r]);let n={type:"release",in:e};yt.postMessage(n)});Wo(e)},I_=async(e,t,r,n,a,i)=>{if(mr()){if(r.some(s=>s[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(a.some(s=>s))throw new Error("pre-allocated output tensor is not supported for proxy.");return Or(),new Promise((s,l)=>{Ar("run",[s,l]);let u=r,c={type:"run",in:{sessionId:e,inputIndices:t,inputs:u,outputIndices:n,options:i}};yt.postMessage(c,qo(u))})}else return Lo(e,t,r,n,a,i)},E_=async e=>{if(mr())return Or(),new Promise((t,r)=>{Ar("end-profiling",[t,r]);let n={type:"end-profiling",in:e};yt.postMessage(n)});Vo(e)}}),$s,Kf,A_,V1=K(()=>{Pt(),z_(),_e(),yo(),km(),$s=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},Kf=e=>{switch(e[3]){case"cpu":return new Bt(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!$o(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:r,download:n,dispose:a}=e[2];return Bt.fromGpuBuffer(r,{dataType:t,dims:e[1],download:n,dispose:a})}case"ml-tensor":{let t=e[0];if(!xo(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:r,download:n,dispose:a}=e[2];return Bt.fromMLTensor(r,{dataType:t,dims:e[1],download:n,dispose:a})}default:throw new Error(`invalid data location: ${e[3]}`)}},A_=class{async fetchModelAndCopyToWasmMemory(e){return T_(await So(e))}async loadModel(e,t){er();let r;typeof e=="string"?r=await this.fetchModelAndCopyToWasmMemory(e):r=e,[this.sessionId,this.inputNames,this.outputNames]=await C_(r,t),Nt()}async dispose(){return k_(this.sessionId)}async run(e,t,r){er();let n=[],a=[];Object.entries(e).forEach(h=>{let g=h[0],_=h[1],b=this.inputNames.indexOf(g);if(b===-1)throw new Error(`invalid input '${g}'`);n.push(_),a.push(b)});let i=[],s=[];Object.entries(t).forEach(h=>{let g=h[0],_=h[1],b=this.outputNames.indexOf(g);if(b===-1)throw new Error(`invalid output '${g}'`);i.push(_),s.push(b)});let l=n.map((h,g)=>$s(h,()=>`input "${this.inputNames[a[g]]}"`)),u=i.map((h,g)=>h?$s(h,()=>`output "${this.outputNames[s[g]]}"`):null),c=await I_(this.sessionId,a,l,s,u,r),f={};for(let h=0;h<c.length;h++)f[this.outputNames[s[h]]]=i[h]??Kf(c[h]);return Nt(),f}startProfiling(){}endProfiling(){E_(this.sessionId)}}}),O_={};Gi(O_,{OnnxruntimeWebAssemblyBackend:()=>js,initializeFlags:()=>Gs,wasmBackend:()=>R_});var Gs,js,R_,q1=K(()=>{Pt(),z_(),V1(),Gs=()=>{if((typeof Fe.wasm.initTimeout!="number"||Fe.wasm.initTimeout<0)&&(Fe.wasm.initTimeout=0),Fe.wasm.simd===!1&&console.warn('Deprecated property "env.wasm.simd" is set to false. non-SIMD build is no longer provided, and this setting will be ignored.'),typeof Fe.wasm.proxy!="boolean"&&(Fe.wasm.proxy=!1),typeof Fe.wasm.trace!="boolean"&&(Fe.wasm.trace=!1),typeof Fe.wasm.numThreads!="number"||!Number.isInteger(Fe.wasm.numThreads)||Fe.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)Fe.wasm.numThreads=1;else{let e=typeof navigator>"u"?k$("node:os").cpus().length:navigator.hardwareConcurrency;Fe.wasm.numThreads=Math.min(4,Math.ceil((e||1)/2))}},js=class{async init(e){Gs(),await x_(),await S_(e)}async createInferenceSessionHandler(e,t){let r=new A_;return await r.loadModel(e,t),Promise.resolve(r)}},R_=new js});Pt();Pt();Pt();var F1="1.21.0";{let e=(q1(),Mn(O_)).wasmBackend;Yr("webgpu",e,5),Yr("webnn",e,5),Yr("cpu",e,10),Yr("wasm",e,10)}Object.defineProperty(Fe.versions,"web",{value:F1,enumerable:!0});/**
* @license
* Copyright 2021 Google LLC. All Rights Reserved.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
* =============================================================================
*//**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const H1={class:"app-container"},G1={key:0,class:"prediction-result"},j1={class:"logits-panel"},K1={class:"logit-label"},Q1={class:"logit-value"},Z1={__name:"App",setup(e){Fe.wasm.wasmPaths="/src/assets/";const t=jt(new Array(28*28).fill(0)),r=jt(null),n=jt(null),a=jt(new Array(10).fill(0));uo(async()=>{try{n.value=await go.create("/models/mnist_cnn.onnx")}catch(u){console.error("Failed to load model:",u),alert("Failed to load the model.")}});const i=u=>{t.value=u,s()},s=async()=>{if(!n.value){console.error("Model not loaded yet!");return}if(t.value.every(c=>c===0)){r.value=null,a.value=new Array(10).fill(0);return}const u=new Bt("float32",t.value,[1,1,28,28]);try{const f=(await n.value.run({[n.value.inputNames[0]]:u}))[n.value.outputNames[0]],h=f.data.indexOf(Math.max(...f.data));r.value=h;const g=f.data.map(w=>Math.exp(w)),_=g.reduce((w,S)=>w+S,0),b=g.map(w=>w/_);a.value=b}catch(c){console.error("Inference error:",c),alert("Prediction failed.")}},l=()=>{r.value=null,a.value=new Array(10).fill(0)};return(u,c)=>(Jr(),Ci("div",H1,[Jt(x$,{"onUpdate:imageData":i,onClearPrediction:l}),r.value!==null?(Jr(),Ci("div",G1," Prediction: "+$n(r.value),1)):Pv("",!0),br("div",j1,[(Jr(!0),Ci(Kt,null,iv(a.value,(f,h)=>(Jr(),Ci("div",{key:h,class:"logit-bar-container"},[br("div",K1,$n(h),1),br("div",{class:"logit-bar",style:Gn({width:`${f*100}%`,backgroundColor:h===r.value?"lightgreen":"skyblue"})},null,4),br("div",Q1,$n((f*100).toFixed(2))+"%",1)]))),128))])]))}},X1=Yh(Z1,[["__scopeId","data-v-461ca3d7"]]);_$(X1).mount("#app");
