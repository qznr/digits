var Xw=Object.defineProperty;var Yw=(e,t,r)=>t in e?Xw(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var Fu=(e,t,r)=>Yw(e,typeof t!="symbol"?t+"":t,r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(a){if(a.ep)return;a.ep=!0;const i=r(a);fetch(a.href,i)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Qs(e){const t=Object.create(null);for(const r of e.split(","))t[r]=1;return r=>r in t}const Ve={},ei=[],Xt=()=>{},Jw=()=>!1,Vn=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Xs=e=>e.startsWith("onUpdate:"),ht=Object.assign,Ys=(e,t)=>{const r=e.indexOf(t);r>-1&&e.splice(r,1)},eb=Object.prototype.hasOwnProperty,Ue=(e,t)=>eb.call(e,t),Ie=Array.isArray,ti=e=>Hn(e)==="[object Map]",Xf=e=>Hn(e)==="[object Set]",ze=e=>typeof e=="function",Ye=e=>typeof e=="string",$r=e=>typeof e=="symbol",Ke=e=>e!==null&&typeof e=="object",Yf=e=>(Ke(e)||ze(e))&&ze(e.then)&&ze(e.catch),Jf=Object.prototype.toString,Hn=e=>Jf.call(e),tb=e=>Hn(e).slice(8,-1),eh=e=>Hn(e)==="[object Object]",Js=e=>Ye(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Ri=Qs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Fn=e=>{const t=Object.create(null);return r=>t[r]||(t[r]=e(r))},rb=/-(\w)/g,br=Fn(e=>e.replace(rb,(t,r)=>r?r.toUpperCase():"")),ib=/\B([A-Z])/g,qr=Fn(e=>e.replace(ib,"-$1").toLowerCase()),th=Fn(e=>e.charAt(0).toUpperCase()+e.slice(1)),ya=Fn(e=>e?`on${th(e)}`:""),wr=(e,t)=>!Object.is(e,t),_a=(e,...t)=>{for(let r=0;r<e.length;r++)e[r](...t)},rh=(e,t,r,n=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:n,value:r})},nb=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Gu;const Gn=()=>Gu||(Gu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function jn(e){if(Ie(e)){const t={};for(let r=0;r<e.length;r++){const n=e[r],a=Ye(n)?lb(n):jn(n);if(a)for(const i in a)t[i]=a[i]}return t}else if(Ye(e)||Ke(e))return e}const ab=/;(?![^(]*\))/g,sb=/:([^]+)/,ob=/\/\*[^]*?\*\//g;function lb(e){const t={};return e.replace(ob,"").split(ab).forEach(r=>{if(r){const n=r.split(sb);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function eo(e){let t="";if(Ye(e))t=e;else if(Ie(e))for(let r=0;r<e.length;r++){const n=eo(e[r]);n&&(t+=n+" ")}else if(Ke(e))for(const r in e)e[r]&&(t+=r+" ");return t.trim()}const ub="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",db=Qs(ub);function ih(e){return!!e||e===""}const nh=e=>!!(e&&e.__v_isRef===!0),Sn=e=>Ye(e)?e:e==null?"":Ie(e)||Ke(e)&&(e.toString===Jf||!ze(e.toString))?nh(e)?Sn(e.value):JSON.stringify(e,ah,2):String(e),ah=(e,t)=>nh(t)?ah(e,t.value):ti(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((r,[n,a],i)=>(r[wa(n,i)+" =>"]=a,r),{})}:Xf(t)?{[`Set(${t.size})`]:[...t.values()].map(r=>wa(r))}:$r(t)?wa(t):Ke(t)&&!Ie(t)&&!eh(t)?String(t):t,wa=(e,t="")=>{var r;return $r(e)?`Symbol(${(r=e.description)!=null?r:t})`:e};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let $t;class cb{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=$t,!t&&$t&&(this.index=($t.scopes||($t.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,r;if(this.scopes)for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].pause();for(t=0,r=this.effects.length;t<r;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,r;if(this.scopes)for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].resume();for(t=0,r=this.effects.length;t<r;t++)this.effects[t].resume()}}run(t){if(this._active){const r=$t;try{return $t=this,t()}finally{$t=r}}}on(){$t=this}off(){$t=this.parent}stop(t){if(this._active){this._active=!1;let r,n;for(r=0,n=this.effects.length;r<n;r++)this.effects[r].stop();for(this.effects.length=0,r=0,n=this.cleanups.length;r<n;r++)this.cleanups[r]();if(this.cleanups.length=0,this.scopes){for(r=0,n=this.scopes.length;r<n;r++)this.scopes[r].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0}}}function pb(){return $t}let qe;const ba=new WeakSet;class sh{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,$t&&$t.active&&$t.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ba.has(this)&&(ba.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||lh(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ju(this),uh(this);const t=qe,r=Pt;qe=this,Pt=!0;try{return this.fn()}finally{dh(this),qe=t,Pt=r,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)io(t);this.deps=this.depsTail=void 0,ju(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ba.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ss(this)&&this.run()}get dirty(){return Ss(this)}}let oh=0,Bi,Mi;function lh(e,t=!1){if(e.flags|=8,t){e.next=Mi,Mi=e;return}e.next=Bi,Bi=e}function to(){oh++}function ro(){if(--oh>0)return;if(Mi){let t=Mi;for(Mi=void 0;t;){const r=t.next;t.next=void 0,t.flags&=-9,t=r}}let e;for(;Bi;){let t=Bi;for(Bi=void 0;t;){const r=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(n){e||(e=n)}t=r}}if(e)throw e}function uh(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function dh(e){let t,r=e.depsTail,n=r;for(;n;){const a=n.prevDep;n.version===-1?(n===r&&(r=a),io(n),fb(n)):t=n,n.dep.activeLink=n.prevActiveLink,n.prevActiveLink=void 0,n=a}e.deps=t,e.depsTail=r}function Ss(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(ch(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function ch(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Wi))return;e.globalVersion=Wi;const t=e.dep;if(e.flags|=2,t.version>0&&!e.isSSR&&e.deps&&!Ss(e)){e.flags&=-3;return}const r=qe,n=Pt;qe=e,Pt=!0;try{uh(e);const a=e.fn(e._value);(t.version===0||wr(a,e._value))&&(e._value=a,t.version++)}catch(a){throw t.version++,a}finally{qe=r,Pt=n,dh(e),e.flags&=-3}}function io(e,t=!1){const{dep:r,prevSub:n,nextSub:a}=e;if(n&&(n.nextSub=a,e.prevSub=void 0),a&&(a.prevSub=n,e.nextSub=void 0),r.subs===e&&(r.subs=n,!n&&r.computed)){r.computed.flags&=-5;for(let i=r.computed.deps;i;i=i.nextDep)io(i,!0)}!t&&!--r.sc&&r.map&&r.map.delete(r.key)}function fb(e){const{prevDep:t,nextDep:r}=e;t&&(t.nextDep=r,e.prevDep=void 0),r&&(r.prevDep=t,e.nextDep=void 0)}let Pt=!0;const ph=[];function xr(){ph.push(Pt),Pt=!1}function Sr(){const e=ph.pop();Pt=e===void 0?!0:e}function ju(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const r=qe;qe=void 0;try{t()}finally{qe=r}}}let Wi=0;class hb{constructor(t,r){this.sub=t,this.dep=r,this.version=r.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class no{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(t){if(!qe||!Pt||qe===this.computed)return;let r=this.activeLink;if(r===void 0||r.sub!==qe)r=this.activeLink=new hb(qe,this),qe.deps?(r.prevDep=qe.depsTail,qe.depsTail.nextDep=r,qe.depsTail=r):qe.deps=qe.depsTail=r,fh(r);else if(r.version===-1&&(r.version=this.version,r.nextDep)){const n=r.nextDep;n.prevDep=r.prevDep,r.prevDep&&(r.prevDep.nextDep=n),r.prevDep=qe.depsTail,r.nextDep=void 0,qe.depsTail.nextDep=r,qe.depsTail=r,qe.deps===r&&(qe.deps=n)}return r}trigger(t){this.version++,Wi++,this.notify(t)}notify(t){to();try{for(let r=this.subs;r;r=r.prevSub)r.sub.notify()&&r.sub.dep.notify()}finally{ro()}}}function fh(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let n=t.deps;n;n=n.nextDep)fh(n)}const r=e.dep.subs;r!==e&&(e.prevSub=r,r&&(r.nextSub=e)),e.dep.subs=e}}const Ts=new WeakMap,Dr=Symbol(""),Cs=Symbol(""),Li=Symbol("");function ot(e,t,r){if(Pt&&qe){let n=Ts.get(e);n||Ts.set(e,n=new Map);let a=n.get(r);a||(n.set(r,a=new no),a.map=n,a.key=r),a.track()}}function sr(e,t,r,n,a,i){const s=Ts.get(e);if(!s){Wi++;return}const l=u=>{u&&u.trigger()};if(to(),t==="clear")s.forEach(l);else{const u=Ie(e),c=u&&Js(r);if(u&&r==="length"){const p=Number(n);s.forEach((h,g)=>{(g==="length"||g===Li||!$r(g)&&g>=p)&&l(h)})}else switch((r!==void 0||s.has(void 0))&&l(s.get(r)),c&&l(s.get(Li)),t){case"add":u?c&&l(s.get("length")):(l(s.get(Dr)),ti(e)&&l(s.get(Cs)));break;case"delete":u||(l(s.get(Dr)),ti(e)&&l(s.get(Cs)));break;case"set":ti(e)&&l(s.get(Dr));break}}ro()}function jr(e){const t=Pe(e);return t===e?t:(ot(t,"iterate",Li),It(e)?t:t.map(lt))}function Kn(e){return ot(e=Pe(e),"iterate",Li),e}const mb={__proto__:null,[Symbol.iterator](){return va(this,Symbol.iterator,lt)},concat(...e){return jr(this).concat(...e.map(t=>Ie(t)?jr(t):t))},entries(){return va(this,"entries",e=>(e[1]=lt(e[1]),e))},every(e,t){return ir(this,"every",e,t,void 0,arguments)},filter(e,t){return ir(this,"filter",e,t,r=>r.map(lt),arguments)},find(e,t){return ir(this,"find",e,t,lt,arguments)},findIndex(e,t){return ir(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return ir(this,"findLast",e,t,lt,arguments)},findLastIndex(e,t){return ir(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return ir(this,"forEach",e,t,void 0,arguments)},includes(...e){return $a(this,"includes",e)},indexOf(...e){return $a(this,"indexOf",e)},join(e){return jr(this).join(e)},lastIndexOf(...e){return $a(this,"lastIndexOf",e)},map(e,t){return ir(this,"map",e,t,void 0,arguments)},pop(){return mi(this,"pop")},push(...e){return mi(this,"push",e)},reduce(e,...t){return Ku(this,"reduce",e,t)},reduceRight(e,...t){return Ku(this,"reduceRight",e,t)},shift(){return mi(this,"shift")},some(e,t){return ir(this,"some",e,t,void 0,arguments)},splice(...e){return mi(this,"splice",e)},toReversed(){return jr(this).toReversed()},toSorted(e){return jr(this).toSorted(e)},toSpliced(...e){return jr(this).toSpliced(...e)},unshift(...e){return mi(this,"unshift",e)},values(){return va(this,"values",lt)}};function va(e,t,r){const n=Kn(e),a=n[t]();return n!==e&&!It(e)&&(a._next=a.next,a.next=()=>{const i=a._next();return i.value&&(i.value=r(i.value)),i}),a}const gb=Array.prototype;function ir(e,t,r,n,a,i){const s=Kn(e),l=s!==e&&!It(e),u=s[t];if(u!==gb[t]){const h=u.apply(e,i);return l?lt(h):h}let c=r;s!==e&&(l?c=function(h,g){return r.call(this,lt(h),g,e)}:r.length>2&&(c=function(h,g){return r.call(this,h,g,e)}));const p=u.call(s,c,n);return l&&a?a(p):p}function Ku(e,t,r,n){const a=Kn(e);let i=r;return a!==e&&(It(e)?r.length>3&&(i=function(s,l,u){return r.call(this,s,l,u,e)}):i=function(s,l,u){return r.call(this,s,lt(l),u,e)}),a[t](i,...n)}function $a(e,t,r){const n=Pe(e);ot(n,"iterate",Li);const a=n[t](...r);return(a===-1||a===!1)&&lo(r[0])?(r[0]=Pe(r[0]),n[t](...r)):a}function mi(e,t,r=[]){xr(),to();const n=Pe(e)[t].apply(e,r);return ro(),Sr(),n}const yb=Qs("__proto__,__v_isRef,__isVue"),hh=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter($r));function _b(e){$r(e)||(e=String(e));const t=Pe(this);return ot(t,"has",e),t.hasOwnProperty(e)}class mh{constructor(t=!1,r=!1){this._isReadonly=t,this._isShallow=r}get(t,r,n){if(r==="__v_skip")return t.__v_skip;const a=this._isReadonly,i=this._isShallow;if(r==="__v_isReactive")return!a;if(r==="__v_isReadonly")return a;if(r==="__v_isShallow")return i;if(r==="__v_raw")return n===(a?i?Eb:wh:i?_h:yh).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(n)?t:void 0;const s=Ie(t);if(!a){let u;if(s&&(u=mb[r]))return u;if(r==="hasOwnProperty")return _b}const l=Reflect.get(t,r,ut(t)?t:n);return($r(r)?hh.has(r):yb(r))||(a||ot(t,"get",r),i)?l:ut(l)?s&&Js(r)?l:l.value:Ke(l)?a?bh(l):so(l):l}}class gh extends mh{constructor(t=!1){super(!1,t)}set(t,r,n,a){let i=t[r];if(!this._isShallow){const u=Nr(i);if(!It(n)&&!Nr(n)&&(i=Pe(i),n=Pe(n)),!Ie(t)&&ut(i)&&!ut(n))return u?!1:(i.value=n,!0)}const s=Ie(t)&&Js(r)?Number(r)<t.length:Ue(t,r),l=Reflect.set(t,r,n,ut(t)?t:a);return t===Pe(a)&&(s?wr(n,i)&&sr(t,"set",r,n):sr(t,"add",r,n)),l}deleteProperty(t,r){const n=Ue(t,r);t[r];const a=Reflect.deleteProperty(t,r);return a&&n&&sr(t,"delete",r,void 0),a}has(t,r){const n=Reflect.has(t,r);return(!$r(r)||!hh.has(r))&&ot(t,"has",r),n}ownKeys(t){return ot(t,"iterate",Ie(t)?"length":Dr),Reflect.ownKeys(t)}}class wb extends mh{constructor(t=!1){super(!0,t)}set(t,r){return!0}deleteProperty(t,r){return!0}}const bb=new gh,vb=new wb,$b=new gh(!0);const ks=e=>e,on=e=>Reflect.getPrototypeOf(e);function xb(e,t,r){return function(...n){const a=this.__v_raw,i=Pe(a),s=ti(i),l=e==="entries"||e===Symbol.iterator&&s,u=e==="keys"&&s,c=a[e](...n),p=r?ks:t?Es:lt;return!t&&ot(i,"iterate",u?Cs:Dr),{next(){const{value:h,done:g}=c.next();return g?{value:h,done:g}:{value:l?[p(h[0]),p(h[1])]:p(h),done:g}},[Symbol.iterator](){return this}}}}function ln(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Sb(e,t){const r={get(a){const i=this.__v_raw,s=Pe(i),l=Pe(a);e||(wr(a,l)&&ot(s,"get",a),ot(s,"get",l));const{has:u}=on(s),c=t?ks:e?Es:lt;if(u.call(s,a))return c(i.get(a));if(u.call(s,l))return c(i.get(l));i!==s&&i.get(a)},get size(){const a=this.__v_raw;return!e&&ot(Pe(a),"iterate",Dr),Reflect.get(a,"size",a)},has(a){const i=this.__v_raw,s=Pe(i),l=Pe(a);return e||(wr(a,l)&&ot(s,"has",a),ot(s,"has",l)),a===l?i.has(a):i.has(a)||i.has(l)},forEach(a,i){const s=this,l=s.__v_raw,u=Pe(l),c=t?ks:e?Es:lt;return!e&&ot(u,"iterate",Dr),l.forEach((p,h)=>a.call(i,c(p),c(h),s))}};return ht(r,e?{add:ln("add"),set:ln("set"),delete:ln("delete"),clear:ln("clear")}:{add(a){!t&&!It(a)&&!Nr(a)&&(a=Pe(a));const i=Pe(this);return on(i).has.call(i,a)||(i.add(a),sr(i,"add",a,a)),this},set(a,i){!t&&!It(i)&&!Nr(i)&&(i=Pe(i));const s=Pe(this),{has:l,get:u}=on(s);let c=l.call(s,a);c||(a=Pe(a),c=l.call(s,a));const p=u.call(s,a);return s.set(a,i),c?wr(i,p)&&sr(s,"set",a,i):sr(s,"add",a,i),this},delete(a){const i=Pe(this),{has:s,get:l}=on(i);let u=s.call(i,a);u||(a=Pe(a),u=s.call(i,a)),l&&l.call(i,a);const c=i.delete(a);return u&&sr(i,"delete",a,void 0),c},clear(){const a=Pe(this),i=a.size!==0,s=a.clear();return i&&sr(a,"clear",void 0,void 0),s}}),["keys","values","entries",Symbol.iterator].forEach(a=>{r[a]=xb(a,e,t)}),r}function ao(e,t){const r=Sb(e,t);return(n,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?n:Reflect.get(Ue(r,a)&&a in n?r:n,a,i)}const Tb={get:ao(!1,!1)},Cb={get:ao(!1,!0)},kb={get:ao(!0,!1)};const yh=new WeakMap,_h=new WeakMap,wh=new WeakMap,Eb=new WeakMap;function Ib(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function zb(e){return e.__v_skip||!Object.isExtensible(e)?0:Ib(tb(e))}function so(e){return Nr(e)?e:oo(e,!1,bb,Tb,yh)}function Ab(e){return oo(e,!1,$b,Cb,_h)}function bh(e){return oo(e,!0,vb,kb,wh)}function oo(e,t,r,n,a){if(!Ke(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const s=zb(e);if(s===0)return e;const l=new Proxy(e,s===2?n:r);return a.set(e,l),l}function ri(e){return Nr(e)?ri(e.__v_raw):!!(e&&e.__v_isReactive)}function Nr(e){return!!(e&&e.__v_isReadonly)}function It(e){return!!(e&&e.__v_isShallow)}function lo(e){return e?!!e.__v_raw:!1}function Pe(e){const t=e&&e.__v_raw;return t?Pe(t):e}function Ob(e){return!Ue(e,"__v_skip")&&Object.isExtensible(e)&&rh(e,"__v_skip",!0),e}const lt=e=>Ke(e)?so(e):e,Es=e=>Ke(e)?bh(e):e;function ut(e){return e?e.__v_isRef===!0:!1}function jt(e){return Rb(e,!1)}function Rb(e,t){return ut(e)?e:new Bb(e,t)}class Bb{constructor(t,r){this.dep=new no,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=r?t:Pe(t),this._value=r?t:lt(t),this.__v_isShallow=r}get value(){return this.dep.track(),this._value}set value(t){const r=this._rawValue,n=this.__v_isShallow||It(t)||Nr(t);t=n?t:Pe(t),wr(t,r)&&(this._rawValue=t,this._value=n?t:lt(t),this.dep.trigger())}}function Mb(e){return ut(e)?e.value:e}const Db={get:(e,t,r)=>t==="__v_raw"?e:Mb(Reflect.get(e,t,r)),set:(e,t,r,n)=>{const a=e[t];return ut(a)&&!ut(r)?(a.value=r,!0):Reflect.set(e,t,r,n)}};function vh(e){return ri(e)?e:new Proxy(e,Db)}class Nb{constructor(t,r,n){this.fn=t,this.setter=r,this._value=void 0,this.dep=new no(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Wi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!r,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&qe!==this)return lh(this,!0),!0}get value(){const t=this.dep.track();return ch(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Pb(e,t,r=!1){let n,a;return ze(e)?n=e:(n=e.get,a=e.set),new Nb(n,a,r)}const un={},zn=new WeakMap;let Or;function Ub(e,t=!1,r=Or){if(r){let n=zn.get(r);n||zn.set(r,n=[]),n.push(e)}}function Wb(e,t,r=Ve){const{immediate:n,deep:a,once:i,scheduler:s,augmentJob:l,call:u}=r,c=T=>a?T:It(T)||a===!1||a===0?yr(T,1):yr(T);let p,h,g,_,w=!1,b=!1;if(ut(e)?(h=()=>e.value,w=It(e)):ri(e)?(h=()=>c(e),w=!0):Ie(e)?(b=!0,w=e.some(T=>ri(T)||It(T)),h=()=>e.map(T=>{if(ut(T))return T.value;if(ri(T))return c(T);if(ze(T))return u?u(T,2):T()})):ze(e)?t?h=u?()=>u(e,2):e:h=()=>{if(g){xr();try{g()}finally{Sr()}}const T=Or;Or=p;try{return u?u(e,3,[_]):e(_)}finally{Or=T}}:h=Xt,t&&a){const T=h,I=a===!0?1/0:a;h=()=>yr(T(),I)}const S=pb(),v=()=>{p.stop(),S&&S.active&&Ys(S.effects,p)};if(i&&t){const T=t;t=(...I)=>{T(...I),v()}}let $=b?new Array(e.length).fill(un):un;const C=T=>{if(!(!(p.flags&1)||!p.dirty&&!T))if(t){const I=p.run();if(a||w||(b?I.some((O,A)=>wr(O,$[A])):wr(I,$))){g&&g();const O=Or;Or=p;try{const A=[I,$===un?void 0:b&&$[0]===un?[]:$,_];u?u(t,3,A):t(...A),$=I}finally{Or=O}}}else p.run()};return l&&l(C),p=new sh(h),p.scheduler=s?()=>s(C,!1):C,_=T=>Ub(T,!1,p),g=p.onStop=()=>{const T=zn.get(p);if(T){if(u)u(T,4);else for(const I of T)I();zn.delete(p)}},t?n?C(!0):$=p.run():s?s(C.bind(null,!0),!0):p.run(),v.pause=p.pause.bind(p),v.resume=p.resume.bind(p),v.stop=v,v}function yr(e,t=1/0,r){if(t<=0||!Ke(e)||e.__v_skip||(r=r||new Set,r.has(e)))return e;if(r.add(e),t--,ut(e))yr(e.value,t,r);else if(Ie(e))for(let n=0;n<e.length;n++)yr(e[n],t,r);else if(Xf(e)||ti(e))e.forEach(n=>{yr(n,t,r)});else if(eh(e)){for(const n in e)yr(e[n],t,r);for(const n of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,n)&&yr(e[n],t,r)}return e}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ji(e,t,r,n){try{return n?e(...n):e()}catch(a){Zn(a,t,r)}}function Jt(e,t,r,n){if(ze(e)){const a=ji(e,t,r,n);return a&&Yf(a)&&a.catch(i=>{Zn(i,t,r)}),a}if(Ie(e)){const a=[];for(let i=0;i<e.length;i++)a.push(Jt(e[i],t,r,n));return a}}function Zn(e,t,r,n=!0){const a=t?t.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:s}=t&&t.appContext.config||Ve;if(t){let l=t.parent;const u=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${r}`;for(;l;){const p=l.ec;if(p){for(let h=0;h<p.length;h++)if(p[h](e,u,c)===!1)return}l=l.parent}if(i){xr(),ji(i,null,10,[e,u,c]),Sr();return}}Lb(e,r,a,n,s)}function Lb(e,t,r,n=!0,a=!1){if(a)throw e;console.error(e)}const pt=[];let Gt=-1;const ii=[];let mr=null,Zr=0;const $h=Promise.resolve();let An=null;function qb(e){const t=An||$h;return e?t.then(this?e.bind(this):e):t}function Vb(e){let t=Gt+1,r=pt.length;for(;t<r;){const n=t+r>>>1,a=pt[n],i=qi(a);i<e||i===e&&a.flags&2?t=n+1:r=n}return t}function uo(e){if(!(e.flags&1)){const t=qi(e),r=pt[pt.length-1];!r||!(e.flags&2)&&t>=qi(r)?pt.push(e):pt.splice(Vb(t),0,e),e.flags|=1,xh()}}function xh(){An||(An=$h.then(Th))}function Hb(e){Ie(e)?ii.push(...e):mr&&e.id===-1?mr.splice(Zr+1,0,e):e.flags&1||(ii.push(e),e.flags|=1),xh()}function Zu(e,t,r=Gt+1){for(;r<pt.length;r++){const n=pt[r];if(n&&n.flags&2){if(e&&n.id!==e.uid)continue;pt.splice(r,1),r--,n.flags&4&&(n.flags&=-2),n(),n.flags&4||(n.flags&=-2)}}}function Sh(e){if(ii.length){const t=[...new Set(ii)].sort((r,n)=>qi(r)-qi(n));if(ii.length=0,mr){mr.push(...t);return}for(mr=t,Zr=0;Zr<mr.length;Zr++){const r=mr[Zr];r.flags&4&&(r.flags&=-2),r.flags&8||r(),r.flags&=-2}mr=null,Zr=0}}const qi=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Th(e){try{for(Gt=0;Gt<pt.length;Gt++){const t=pt[Gt];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),ji(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Gt<pt.length;Gt++){const t=pt[Gt];t&&(t.flags&=-2)}Gt=-1,pt.length=0,Sh(),An=null,(pt.length||ii.length)&&Th()}}let Qt=null,Ch=null;function On(e){const t=Qt;return Qt=e,Ch=e&&e.type.__scopeId||null,t}function Fb(e,t=Qt,r){if(!t||e._n)return e;const n=(...a)=>{n._d&&nd(-1);const i=On(t);let s;try{s=e(...a)}finally{On(i),n._d&&nd(1)}return s};return n._n=!0,n._c=!0,n._d=!0,n}function Cr(e,t,r,n){const a=e.dirs,i=t&&t.dirs;for(let s=0;s<a.length;s++){const l=a[s];i&&(l.oldValue=i[s].value);let u=l.dir[n];u&&(xr(),Jt(u,r,8,[e.el,l,e,t]),Sr())}}const Gb=Symbol("_vte"),jb=e=>e.__isTeleport;function co(e,t){e.shapeFlag&6&&e.component?(e.transition=t,co(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function kh(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Rn(e,t,r,n,a=!1){if(Ie(e)){e.forEach((w,b)=>Rn(w,t&&(Ie(t)?t[b]:t),r,n,a));return}if(Di(n)&&!a){n.shapeFlag&512&&n.type.__asyncResolved&&n.component.subTree.component&&Rn(e,t,r,n.component.subTree);return}const i=n.shapeFlag&4?mo(n.component):n.el,s=a?null:i,{i:l,r:u}=e,c=t&&t.r,p=l.refs===Ve?l.refs={}:l.refs,h=l.setupState,g=Pe(h),_=h===Ve?()=>!1:w=>Ue(g,w);if(c!=null&&c!==u&&(Ye(c)?(p[c]=null,_(c)&&(h[c]=null)):ut(c)&&(c.value=null)),ze(u))ji(u,l,12,[s,p]);else{const w=Ye(u),b=ut(u);if(w||b){const S=()=>{if(e.f){const v=w?_(u)?h[u]:p[u]:u.value;a?Ie(v)&&Ys(v,i):Ie(v)?v.includes(i)||v.push(i):w?(p[u]=[i],_(u)&&(h[u]=p[u])):(u.value=[i],e.k&&(p[e.k]=u.value))}else w?(p[u]=s,_(u)&&(h[u]=s)):b&&(u.value=s,e.k&&(p[e.k]=s))};s?(S.id=-1,vt(S,r)):S()}}}Gn().requestIdleCallback;Gn().cancelIdleCallback;const Di=e=>!!e.type.__asyncLoader,Eh=e=>e.type.__isKeepAlive;function Kb(e,t){Ih(e,"a",t)}function Zb(e,t){Ih(e,"da",t)}function Ih(e,t,r=ft){const n=e.__wdc||(e.__wdc=()=>{let a=r;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(Qn(t,n,r),r){let a=r.parent;for(;a&&a.parent;)Eh(a.parent.vnode)&&Qb(n,t,r,a),a=a.parent}}function Qb(e,t,r,n){const a=Qn(t,e,n,!0);zh(()=>{Ys(n[t],a)},r)}function Qn(e,t,r=ft,n=!1){if(r){const a=r[e]||(r[e]=[]),i=t.__weh||(t.__weh=(...s)=>{xr();const l=Ki(r),u=Jt(t,r,e,s);return l(),Sr(),u});return n?a.unshift(i):a.push(i),i}}const or=e=>(t,r=ft)=>{(!Hi||e==="sp")&&Qn(e,(...n)=>t(...n),r)},Xb=or("bm"),po=or("m"),Yb=or("bu"),Jb=or("u"),ev=or("bum"),zh=or("um"),tv=or("sp"),rv=or("rtg"),iv=or("rtc");function nv(e,t=ft){Qn("ec",e,t)}const av=Symbol.for("v-ndc");function sv(e,t,r,n){let a;const i=r,s=Ie(e);if(s||Ye(e)){const l=s&&ri(e);let u=!1;l&&(u=!It(e),e=Kn(e)),a=new Array(e.length);for(let c=0,p=e.length;c<p;c++)a[c]=t(u?lt(e[c]):e[c],c,void 0,i)}else if(typeof e=="number"){a=new Array(e);for(let l=0;l<e;l++)a[l]=t(l+1,l,void 0,i)}else if(Ke(e))if(e[Symbol.iterator])a=Array.from(e,(l,u)=>t(l,u,void 0,i));else{const l=Object.keys(e);a=new Array(l.length);for(let u=0,c=l.length;u<c;u++){const p=l[u];a[u]=t(e[p],p,u,i)}}else a=[];return a}const Is=e=>e?Yh(e)?mo(e):Is(e.parent):null,Ni=ht(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Is(e.parent),$root:e=>Is(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Oh(e),$forceUpdate:e=>e.f||(e.f=()=>{uo(e.update)}),$nextTick:e=>e.n||(e.n=qb.bind(e.proxy)),$watch:e=>Ev.bind(e)}),xa=(e,t)=>e!==Ve&&!e.__isScriptSetup&&Ue(e,t),ov={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:r,setupState:n,data:a,props:i,accessCache:s,type:l,appContext:u}=e;let c;if(t[0]!=="$"){const _=s[t];if(_!==void 0)switch(_){case 1:return n[t];case 2:return a[t];case 4:return r[t];case 3:return i[t]}else{if(xa(n,t))return s[t]=1,n[t];if(a!==Ve&&Ue(a,t))return s[t]=2,a[t];if((c=e.propsOptions[0])&&Ue(c,t))return s[t]=3,i[t];if(r!==Ve&&Ue(r,t))return s[t]=4,r[t];zs&&(s[t]=0)}}const p=Ni[t];let h,g;if(p)return t==="$attrs"&&ot(e.attrs,"get",""),p(e);if((h=l.__cssModules)&&(h=h[t]))return h;if(r!==Ve&&Ue(r,t))return s[t]=4,r[t];if(g=u.config.globalProperties,Ue(g,t))return g[t]},set({_:e},t,r){const{data:n,setupState:a,ctx:i}=e;return xa(a,t)?(a[t]=r,!0):n!==Ve&&Ue(n,t)?(n[t]=r,!0):Ue(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=r,!0)},has({_:{data:e,setupState:t,accessCache:r,ctx:n,appContext:a,propsOptions:i}},s){let l;return!!r[s]||e!==Ve&&Ue(e,s)||xa(t,s)||(l=i[0])&&Ue(l,s)||Ue(n,s)||Ue(Ni,s)||Ue(a.config.globalProperties,s)},defineProperty(e,t,r){return r.get!=null?e._.accessCache[t]=0:Ue(r,"value")&&this.set(e,t,r.value,null),Reflect.defineProperty(e,t,r)}};function Qu(e){return Ie(e)?e.reduce((t,r)=>(t[r]=null,t),{}):e}let zs=!0;function lv(e){const t=Oh(e),r=e.proxy,n=e.ctx;zs=!1,t.beforeCreate&&Xu(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:s,watch:l,provide:u,inject:c,created:p,beforeMount:h,mounted:g,beforeUpdate:_,updated:w,activated:b,deactivated:S,beforeDestroy:v,beforeUnmount:$,destroyed:C,unmounted:T,render:I,renderTracked:O,renderTriggered:A,errorCaptured:M,serverPrefetch:W,expose:X,inheritAttrs:de,components:ue,directives:fe,filters:_e}=t;if(c&&uv(c,n,null),s)for(const re in s){const pe=s[re];ze(pe)&&(n[re]=pe.bind(r))}if(a){const re=a.call(r,r);Ke(re)&&(e.data=so(re))}if(zs=!0,i)for(const re in i){const pe=i[re],te=ze(pe)?pe.bind(r,r):ze(pe.get)?pe.get.bind(r,r):Xt,Oe=!ze(pe)&&ze(pe.set)?pe.set.bind(r):Xt,U=Xv({get:te,set:Oe});Object.defineProperty(n,re,{enumerable:!0,configurable:!0,get:()=>U.value,set:q=>U.value=q})}if(l)for(const re in l)Ah(l[re],n,r,re);if(u){const re=ze(u)?u.call(r):u;Reflect.ownKeys(re).forEach(pe=>{mv(pe,re[pe])})}p&&Xu(p,e,"c");function L(re,pe){Ie(pe)?pe.forEach(te=>re(te.bind(r))):pe&&re(pe.bind(r))}if(L(Xb,h),L(po,g),L(Yb,_),L(Jb,w),L(Kb,b),L(Zb,S),L(nv,M),L(iv,O),L(rv,A),L(ev,$),L(zh,T),L(tv,W),Ie(X))if(X.length){const re=e.exposed||(e.exposed={});X.forEach(pe=>{Object.defineProperty(re,pe,{get:()=>r[pe],set:te=>r[pe]=te})})}else e.exposed||(e.exposed={});I&&e.render===Xt&&(e.render=I),de!=null&&(e.inheritAttrs=de),ue&&(e.components=ue),fe&&(e.directives=fe),W&&kh(e)}function uv(e,t,r=Xt){Ie(e)&&(e=As(e));for(const n in e){const a=e[n];let i;Ke(a)?"default"in a?i=Tn(a.from||n,a.default,!0):i=Tn(a.from||n):i=Tn(a),ut(i)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>i.value,set:s=>i.value=s}):t[n]=i}}function Xu(e,t,r){Jt(Ie(e)?e.map(n=>n.bind(t.proxy)):e.bind(t.proxy),t,r)}function Ah(e,t,r,n){let a=n.includes(".")?Gh(r,n):()=>r[n];if(Ye(e)){const i=t[e];ze(i)&&Ta(a,i)}else if(ze(e))Ta(a,e.bind(r));else if(Ke(e))if(Ie(e))e.forEach(i=>Ah(i,t,r,n));else{const i=ze(e.handler)?e.handler.bind(r):t[e.handler];ze(i)&&Ta(a,i,e)}}function Oh(e){const t=e.type,{mixins:r,extends:n}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:s}}=e.appContext,l=i.get(t);let u;return l?u=l:!a.length&&!r&&!n?u=t:(u={},a.length&&a.forEach(c=>Bn(u,c,s,!0)),Bn(u,t,s)),Ke(t)&&i.set(t,u),u}function Bn(e,t,r,n=!1){const{mixins:a,extends:i}=t;i&&Bn(e,i,r,!0),a&&a.forEach(s=>Bn(e,s,r,!0));for(const s in t)if(!(n&&s==="expose")){const l=dv[s]||r&&r[s];e[s]=l?l(e[s],t[s]):t[s]}return e}const dv={data:Yu,props:Ju,emits:Ju,methods:ki,computed:ki,beforeCreate:ct,created:ct,beforeMount:ct,mounted:ct,beforeUpdate:ct,updated:ct,beforeDestroy:ct,beforeUnmount:ct,destroyed:ct,unmounted:ct,activated:ct,deactivated:ct,errorCaptured:ct,serverPrefetch:ct,components:ki,directives:ki,watch:pv,provide:Yu,inject:cv};function Yu(e,t){return t?e?function(){return ht(ze(e)?e.call(this,this):e,ze(t)?t.call(this,this):t)}:t:e}function cv(e,t){return ki(As(e),As(t))}function As(e){if(Ie(e)){const t={};for(let r=0;r<e.length;r++)t[e[r]]=e[r];return t}return e}function ct(e,t){return e?[...new Set([].concat(e,t))]:t}function ki(e,t){return e?ht(Object.create(null),e,t):t}function Ju(e,t){return e?Ie(e)&&Ie(t)?[...new Set([...e,...t])]:ht(Object.create(null),Qu(e),Qu(t??{})):t}function pv(e,t){if(!e)return t;if(!t)return e;const r=ht(Object.create(null),e);for(const n in t)r[n]=ct(e[n],t[n]);return r}function Rh(){return{app:null,config:{isNativeTag:Jw,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let fv=0;function hv(e,t){return function(n,a=null){ze(n)||(n=ht({},n)),a!=null&&!Ke(a)&&(a=null);const i=Rh(),s=new WeakSet,l=[];let u=!1;const c=i.app={_uid:fv++,_component:n,_props:a,_container:null,_context:i,_instance:null,version:Yv,get config(){return i.config},set config(p){},use(p,...h){return s.has(p)||(p&&ze(p.install)?(s.add(p),p.install(c,...h)):ze(p)&&(s.add(p),p(c,...h))),c},mixin(p){return i.mixins.includes(p)||i.mixins.push(p),c},component(p,h){return h?(i.components[p]=h,c):i.components[p]},directive(p,h){return h?(i.directives[p]=h,c):i.directives[p]},mount(p,h,g){if(!u){const _=c._ceVNode||Yt(n,a);return _.appContext=i,g===!0?g="svg":g===!1&&(g=void 0),e(_,p,g),u=!0,c._container=p,p.__vue_app__=c,mo(_.component)}},onUnmount(p){l.push(p)},unmount(){u&&(Jt(l,c._instance,16),e(null,c._container),delete c._container.__vue_app__)},provide(p,h){return i.provides[p]=h,c},runWithContext(p){const h=ni;ni=c;try{return p()}finally{ni=h}}};return c}}let ni=null;function mv(e,t){if(ft){let r=ft.provides;const n=ft.parent&&ft.parent.provides;n===r&&(r=ft.provides=Object.create(n)),r[e]=t}}function Tn(e,t,r=!1){const n=ft||Qt;if(n||ni){const a=ni?ni._context.provides:n?n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:void 0;if(a&&e in a)return a[e];if(arguments.length>1)return r&&ze(t)?t.call(n&&n.proxy):t}}const Bh={},Mh=()=>Object.create(Bh),Dh=e=>Object.getPrototypeOf(e)===Bh;function gv(e,t,r,n=!1){const a={},i=Mh();e.propsDefaults=Object.create(null),Nh(e,t,a,i);for(const s in e.propsOptions[0])s in a||(a[s]=void 0);r?e.props=n?a:Ab(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function yv(e,t,r,n){const{props:a,attrs:i,vnode:{patchFlag:s}}=e,l=Pe(a),[u]=e.propsOptions;let c=!1;if((n||s>0)&&!(s&16)){if(s&8){const p=e.vnode.dynamicProps;for(let h=0;h<p.length;h++){let g=p[h];if(Xn(e.emitsOptions,g))continue;const _=t[g];if(u)if(Ue(i,g))_!==i[g]&&(i[g]=_,c=!0);else{const w=br(g);a[w]=Os(u,l,w,_,e,!1)}else _!==i[g]&&(i[g]=_,c=!0)}}}else{Nh(e,t,a,i)&&(c=!0);let p;for(const h in l)(!t||!Ue(t,h)&&((p=qr(h))===h||!Ue(t,p)))&&(u?r&&(r[h]!==void 0||r[p]!==void 0)&&(a[h]=Os(u,l,h,void 0,e,!0)):delete a[h]);if(i!==l)for(const h in i)(!t||!Ue(t,h))&&(delete i[h],c=!0)}c&&sr(e.attrs,"set","")}function Nh(e,t,r,n){const[a,i]=e.propsOptions;let s=!1,l;if(t)for(let u in t){if(Ri(u))continue;const c=t[u];let p;a&&Ue(a,p=br(u))?!i||!i.includes(p)?r[p]=c:(l||(l={}))[p]=c:Xn(e.emitsOptions,u)||(!(u in n)||c!==n[u])&&(n[u]=c,s=!0)}if(i){const u=Pe(r),c=l||Ve;for(let p=0;p<i.length;p++){const h=i[p];r[h]=Os(a,u,h,c[h],e,!Ue(c,h))}}return s}function Os(e,t,r,n,a,i){const s=e[r];if(s!=null){const l=Ue(s,"default");if(l&&n===void 0){const u=s.default;if(s.type!==Function&&!s.skipFactory&&ze(u)){const{propsDefaults:c}=a;if(r in c)n=c[r];else{const p=Ki(a);n=c[r]=u.call(null,t),p()}}else n=u;a.ce&&a.ce._setProp(r,n)}s[0]&&(i&&!l?n=!1:s[1]&&(n===""||n===qr(r))&&(n=!0))}return n}const _v=new WeakMap;function Ph(e,t,r=!1){const n=r?_v:t.propsCache,a=n.get(e);if(a)return a;const i=e.props,s={},l=[];let u=!1;if(!ze(e)){const p=h=>{u=!0;const[g,_]=Ph(h,t,!0);ht(s,g),_&&l.push(..._)};!r&&t.mixins.length&&t.mixins.forEach(p),e.extends&&p(e.extends),e.mixins&&e.mixins.forEach(p)}if(!i&&!u)return Ke(e)&&n.set(e,ei),ei;if(Ie(i))for(let p=0;p<i.length;p++){const h=br(i[p]);ed(h)&&(s[h]=Ve)}else if(i)for(const p in i){const h=br(p);if(ed(h)){const g=i[p],_=s[h]=Ie(g)||ze(g)?{type:g}:ht({},g),w=_.type;let b=!1,S=!0;if(Ie(w))for(let v=0;v<w.length;++v){const $=w[v],C=ze($)&&$.name;if(C==="Boolean"){b=!0;break}else C==="String"&&(S=!1)}else b=ze(w)&&w.name==="Boolean";_[0]=b,_[1]=S,(b||Ue(_,"default"))&&l.push(h)}}const c=[s,l];return Ke(e)&&n.set(e,c),c}function ed(e){return e[0]!=="$"&&!Ri(e)}const Uh=e=>e[0]==="_"||e==="$stable",fo=e=>Ie(e)?e.map(Zt):[Zt(e)],wv=(e,t,r)=>{if(t._n)return t;const n=Fb((...a)=>fo(t(...a)),r);return n._c=!1,n},Wh=(e,t,r)=>{const n=e._ctx;for(const a in e){if(Uh(a))continue;const i=e[a];if(ze(i))t[a]=wv(a,i,n);else if(i!=null){const s=fo(i);t[a]=()=>s}}},Lh=(e,t)=>{const r=fo(t);e.slots.default=()=>r},qh=(e,t,r)=>{for(const n in t)(r||n!=="_")&&(e[n]=t[n])},bv=(e,t,r)=>{const n=e.slots=Mh();if(e.vnode.shapeFlag&32){const a=t._;a?(qh(n,t,r),r&&rh(n,"_",a,!0)):Wh(t,n)}else t&&Lh(e,t)},vv=(e,t,r)=>{const{vnode:n,slots:a}=e;let i=!0,s=Ve;if(n.shapeFlag&32){const l=t._;l?r&&l===1?i=!1:qh(a,t,r):(i=!t.$stable,Wh(t,a)),s=t}else t&&(Lh(e,t),s={default:1});if(i)for(const l in a)!Uh(l)&&s[l]==null&&delete a[l]},vt=Mv;function $v(e){return xv(e)}function xv(e,t){const r=Gn();r.__VUE__=!0;const{insert:n,remove:a,patchProp:i,createElement:s,createText:l,createComment:u,setText:c,setElementText:p,parentNode:h,nextSibling:g,setScopeId:_=Xt,insertStaticContent:w}=e,b=(k,z,D,j=null,F=null,Z=null,J=void 0,ee=null,Y=!!z.dynamicChildren)=>{if(k===z)return;k&&!gi(k,z)&&(j=Ee(k),q(k,F,Z,!0),k=null),z.patchFlag===-2&&(Y=!1,z.dynamicChildren=null);const{type:Q,ref:ye,shapeFlag:ie}=z;switch(Q){case Yn:S(k,z,D,j);break;case Pr:v(k,z,D,j);break;case Ca:k==null&&$(z,D,j,J);break;case Kt:ue(k,z,D,j,F,Z,J,ee,Y);break;default:ie&1?I(k,z,D,j,F,Z,J,ee,Y):ie&6?fe(k,z,D,j,F,Z,J,ee,Y):(ie&64||ie&128)&&Q.process(k,z,D,j,F,Z,J,ee,Y,He)}ye!=null&&F&&Rn(ye,k&&k.ref,Z,z||k,!z)},S=(k,z,D,j)=>{if(k==null)n(z.el=l(z.children),D,j);else{const F=z.el=k.el;z.children!==k.children&&c(F,z.children)}},v=(k,z,D,j)=>{k==null?n(z.el=u(z.children||""),D,j):z.el=k.el},$=(k,z,D,j)=>{[k.el,k.anchor]=w(k.children,z,D,j,k.el,k.anchor)},C=({el:k,anchor:z},D,j)=>{let F;for(;k&&k!==z;)F=g(k),n(k,D,j),k=F;n(z,D,j)},T=({el:k,anchor:z})=>{let D;for(;k&&k!==z;)D=g(k),a(k),k=D;a(z)},I=(k,z,D,j,F,Z,J,ee,Y)=>{z.type==="svg"?J="svg":z.type==="math"&&(J="mathml"),k==null?O(z,D,j,F,Z,J,ee,Y):W(k,z,F,Z,J,ee,Y)},O=(k,z,D,j,F,Z,J,ee)=>{let Y,Q;const{props:ye,shapeFlag:ie,transition:he,dirs:we}=k;if(Y=k.el=s(k.type,Z,ye&&ye.is,ye),ie&8?p(Y,k.children):ie&16&&M(k.children,Y,null,j,F,Sa(k,Z),J,ee),we&&Cr(k,null,j,"created"),A(Y,k,k.scopeId,J,j),ye){for(const Be in ye)Be!=="value"&&!Ri(Be)&&i(Y,Be,null,ye[Be],Z,j);"value"in ye&&i(Y,"value",null,ye.value,Z),(Q=ye.onVnodeBeforeMount)&&Ht(Q,j,k)}we&&Cr(k,null,j,"beforeMount");const Ae=Sv(F,he);Ae&&he.beforeEnter(Y),n(Y,z,D),((Q=ye&&ye.onVnodeMounted)||Ae||we)&&vt(()=>{Q&&Ht(Q,j,k),Ae&&he.enter(Y),we&&Cr(k,null,j,"mounted")},F)},A=(k,z,D,j,F)=>{if(D&&_(k,D),j)for(let Z=0;Z<j.length;Z++)_(k,j[Z]);if(F){let Z=F.subTree;if(z===Z||Kh(Z.type)&&(Z.ssContent===z||Z.ssFallback===z)){const J=F.vnode;A(k,J,J.scopeId,J.slotScopeIds,F.parent)}}},M=(k,z,D,j,F,Z,J,ee,Y=0)=>{for(let Q=Y;Q<k.length;Q++){const ye=k[Q]=ee?gr(k[Q]):Zt(k[Q]);b(null,ye,z,D,j,F,Z,J,ee)}},W=(k,z,D,j,F,Z,J)=>{const ee=z.el=k.el;let{patchFlag:Y,dynamicChildren:Q,dirs:ye}=z;Y|=k.patchFlag&16;const ie=k.props||Ve,he=z.props||Ve;let we;if(D&&kr(D,!1),(we=he.onVnodeBeforeUpdate)&&Ht(we,D,z,k),ye&&Cr(z,k,D,"beforeUpdate"),D&&kr(D,!0),(ie.innerHTML&&he.innerHTML==null||ie.textContent&&he.textContent==null)&&p(ee,""),Q?X(k.dynamicChildren,Q,ee,D,j,Sa(z,F),Z):J||pe(k,z,ee,null,D,j,Sa(z,F),Z,!1),Y>0){if(Y&16)de(ee,ie,he,D,F);else if(Y&2&&ie.class!==he.class&&i(ee,"class",null,he.class,F),Y&4&&i(ee,"style",ie.style,he.style,F),Y&8){const Ae=z.dynamicProps;for(let Be=0;Be<Ae.length;Be++){const me=Ae[Be],it=ie[me],nt=he[me];(nt!==it||me==="value")&&i(ee,me,it,nt,F,D)}}Y&1&&k.children!==z.children&&p(ee,z.children)}else!J&&Q==null&&de(ee,ie,he,D,F);((we=he.onVnodeUpdated)||ye)&&vt(()=>{we&&Ht(we,D,z,k),ye&&Cr(z,k,D,"updated")},j)},X=(k,z,D,j,F,Z,J)=>{for(let ee=0;ee<z.length;ee++){const Y=k[ee],Q=z[ee],ye=Y.el&&(Y.type===Kt||!gi(Y,Q)||Y.shapeFlag&70)?h(Y.el):D;b(Y,Q,ye,null,j,F,Z,J,!0)}},de=(k,z,D,j,F)=>{if(z!==D){if(z!==Ve)for(const Z in z)!Ri(Z)&&!(Z in D)&&i(k,Z,z[Z],null,F,j);for(const Z in D){if(Ri(Z))continue;const J=D[Z],ee=z[Z];J!==ee&&Z!=="value"&&i(k,Z,ee,J,F,j)}"value"in D&&i(k,"value",z.value,D.value,F)}},ue=(k,z,D,j,F,Z,J,ee,Y)=>{const Q=z.el=k?k.el:l(""),ye=z.anchor=k?k.anchor:l("");let{patchFlag:ie,dynamicChildren:he,slotScopeIds:we}=z;we&&(ee=ee?ee.concat(we):we),k==null?(n(Q,D,j),n(ye,D,j),M(z.children||[],D,ye,F,Z,J,ee,Y)):ie>0&&ie&64&&he&&k.dynamicChildren?(X(k.dynamicChildren,he,D,F,Z,J,ee),(z.key!=null||F&&z===F.subTree)&&Vh(k,z,!0)):pe(k,z,D,ye,F,Z,J,ee,Y)},fe=(k,z,D,j,F,Z,J,ee,Y)=>{z.slotScopeIds=ee,k==null?z.shapeFlag&512?F.ctx.activate(z,D,j,J,Y):_e(z,D,j,F,Z,J,Y):Te(k,z,Y)},_e=(k,z,D,j,F,Z,J)=>{const ee=k.component=Fv(k,j,F);if(Eh(k)&&(ee.ctx.renderer=He),Gv(ee,!1,J),ee.asyncDep){if(F&&F.registerDep(ee,L,J),!k.el){const Y=ee.subTree=Yt(Pr);v(null,Y,z,D)}}else L(ee,k,z,D,F,Z,J)},Te=(k,z,D)=>{const j=z.component=k.component;if(Rv(k,z,D))if(j.asyncDep&&!j.asyncResolved){re(j,z,D);return}else j.next=z,j.update();else z.el=k.el,j.vnode=z},L=(k,z,D,j,F,Z,J)=>{const ee=()=>{if(k.isMounted){let{next:ie,bu:he,u:we,parent:Ae,vnode:Be}=k;{const Je=Hh(k);if(Je){ie&&(ie.el=Be.el,re(k,ie,J)),Je.asyncDep.then(()=>{k.isUnmounted||ee()});return}}let me=ie,it;kr(k,!1),ie?(ie.el=Be.el,re(k,ie,J)):ie=Be,he&&_a(he),(it=ie.props&&ie.props.onVnodeBeforeUpdate)&&Ht(it,Ae,ie,Be),kr(k,!0);const nt=rd(k),gt=k.subTree;k.subTree=nt,b(gt,nt,h(gt.el),Ee(gt),k,F,Z),ie.el=nt.el,me===null&&Bv(k,nt.el),we&&vt(we,F),(it=ie.props&&ie.props.onVnodeUpdated)&&vt(()=>Ht(it,Ae,ie,Be),F)}else{let ie;const{el:he,props:we}=z,{bm:Ae,m:Be,parent:me,root:it,type:nt}=k,gt=Di(z);kr(k,!1),Ae&&_a(Ae),!gt&&(ie=we&&we.onVnodeBeforeMount)&&Ht(ie,me,z),kr(k,!0);{it.ce&&it.ce._injectChildStyle(nt);const Je=k.subTree=rd(k);b(null,Je,D,j,k,F,Z),z.el=Je.el}if(Be&&vt(Be,F),!gt&&(ie=we&&we.onVnodeMounted)){const Je=z;vt(()=>Ht(ie,me,Je),F)}(z.shapeFlag&256||me&&Di(me.vnode)&&me.vnode.shapeFlag&256)&&k.a&&vt(k.a,F),k.isMounted=!0,z=D=j=null}};k.scope.on();const Y=k.effect=new sh(ee);k.scope.off();const Q=k.update=Y.run.bind(Y),ye=k.job=Y.runIfDirty.bind(Y);ye.i=k,ye.id=k.uid,Y.scheduler=()=>uo(ye),kr(k,!0),Q()},re=(k,z,D)=>{z.component=k;const j=k.vnode.props;k.vnode=z,k.next=null,yv(k,z.props,j,D),vv(k,z.children,D),xr(),Zu(k),Sr()},pe=(k,z,D,j,F,Z,J,ee,Y=!1)=>{const Q=k&&k.children,ye=k?k.shapeFlag:0,ie=z.children,{patchFlag:he,shapeFlag:we}=z;if(he>0){if(he&128){Oe(Q,ie,D,j,F,Z,J,ee,Y);return}else if(he&256){te(Q,ie,D,j,F,Z,J,ee,Y);return}}we&8?(ye&16&&V(Q,F,Z),ie!==Q&&p(D,ie)):ye&16?we&16?Oe(Q,ie,D,j,F,Z,J,ee,Y):V(Q,F,Z,!0):(ye&8&&p(D,""),we&16&&M(ie,D,j,F,Z,J,ee,Y))},te=(k,z,D,j,F,Z,J,ee,Y)=>{k=k||ei,z=z||ei;const Q=k.length,ye=z.length,ie=Math.min(Q,ye);let he;for(he=0;he<ie;he++){const we=z[he]=Y?gr(z[he]):Zt(z[he]);b(k[he],we,D,null,F,Z,J,ee,Y)}Q>ye?V(k,F,Z,!0,!1,ie):M(z,D,j,F,Z,J,ee,Y,ie)},Oe=(k,z,D,j,F,Z,J,ee,Y)=>{let Q=0;const ye=z.length;let ie=k.length-1,he=ye-1;for(;Q<=ie&&Q<=he;){const we=k[Q],Ae=z[Q]=Y?gr(z[Q]):Zt(z[Q]);if(gi(we,Ae))b(we,Ae,D,null,F,Z,J,ee,Y);else break;Q++}for(;Q<=ie&&Q<=he;){const we=k[ie],Ae=z[he]=Y?gr(z[he]):Zt(z[he]);if(gi(we,Ae))b(we,Ae,D,null,F,Z,J,ee,Y);else break;ie--,he--}if(Q>ie){if(Q<=he){const we=he+1,Ae=we<ye?z[we].el:j;for(;Q<=he;)b(null,z[Q]=Y?gr(z[Q]):Zt(z[Q]),D,Ae,F,Z,J,ee,Y),Q++}}else if(Q>he)for(;Q<=ie;)q(k[Q],F,Z,!0),Q++;else{const we=Q,Ae=Q,Be=new Map;for(Q=Ae;Q<=he;Q++){const Qe=z[Q]=Y?gr(z[Q]):Zt(z[Q]);Qe.key!=null&&Be.set(Qe.key,Q)}let me,it=0;const nt=he-Ae+1;let gt=!1,Je=0;const zt=new Array(nt);for(Q=0;Q<nt;Q++)zt[Q]=0;for(Q=we;Q<=ie;Q++){const Qe=k[Q];if(it>=nt){q(Qe,F,Z,!0);continue}let _t;if(Qe.key!=null)_t=Be.get(Qe.key);else for(me=Ae;me<=he;me++)if(zt[me-Ae]===0&&gi(Qe,z[me])){_t=me;break}_t===void 0?q(Qe,F,Z,!0):(zt[_t-Ae]=Q+1,_t>=Je?Je=_t:gt=!0,b(Qe,z[_t],D,null,F,Z,J,ee,Y),it++)}const ui=gt?Tv(zt):ei;for(me=ui.length-1,Q=nt-1;Q>=0;Q--){const Qe=Ae+Q,_t=z[Qe],di=Qe+1<ye?z[Qe+1].el:j;zt[Q]===0?b(null,_t,D,di,F,Z,J,ee,Y):gt&&(me<0||Q!==ui[me]?U(_t,D,di,2):me--)}}},U=(k,z,D,j,F=null)=>{const{el:Z,type:J,transition:ee,children:Y,shapeFlag:Q}=k;if(Q&6){U(k.component.subTree,z,D,j);return}if(Q&128){k.suspense.move(z,D,j);return}if(Q&64){J.move(k,z,D,He);return}if(J===Kt){n(Z,z,D);for(let ie=0;ie<Y.length;ie++)U(Y[ie],z,D,j);n(k.anchor,z,D);return}if(J===Ca){C(k,z,D);return}if(j!==2&&Q&1&&ee)if(j===0)ee.beforeEnter(Z),n(Z,z,D),vt(()=>ee.enter(Z),F);else{const{leave:ie,delayLeave:he,afterLeave:we}=ee,Ae=()=>n(Z,z,D),Be=()=>{ie(Z,()=>{Ae(),we&&we()})};he?he(Z,Ae,Be):Be()}else n(Z,z,D)},q=(k,z,D,j=!1,F=!1)=>{const{type:Z,props:J,ref:ee,children:Y,dynamicChildren:Q,shapeFlag:ye,patchFlag:ie,dirs:he,cacheIndex:we}=k;if(ie===-2&&(F=!1),ee!=null&&Rn(ee,null,D,k,!0),we!=null&&(z.renderCache[we]=void 0),ye&256){z.ctx.deactivate(k);return}const Ae=ye&1&&he,Be=!Di(k);let me;if(Be&&(me=J&&J.onVnodeBeforeUnmount)&&Ht(me,z,k),ye&6)tt(k.component,D,j);else{if(ye&128){k.suspense.unmount(D,j);return}Ae&&Cr(k,null,z,"beforeUnmount"),ye&64?k.type.remove(k,z,D,He,j):Q&&!Q.hasOnce&&(Z!==Kt||ie>0&&ie&64)?V(Q,z,D,!1,!0):(Z===Kt&&ie&384||!F&&ye&16)&&V(Y,z,D),j&&ae(k)}(Be&&(me=J&&J.onVnodeUnmounted)||Ae)&&vt(()=>{me&&Ht(me,z,k),Ae&&Cr(k,null,z,"unmounted")},D)},ae=k=>{const{type:z,el:D,anchor:j,transition:F}=k;if(z===Kt){ke(D,j);return}if(z===Ca){T(k);return}const Z=()=>{a(D),F&&!F.persisted&&F.afterLeave&&F.afterLeave()};if(k.shapeFlag&1&&F&&!F.persisted){const{leave:J,delayLeave:ee}=F,Y=()=>J(D,Z);ee?ee(k.el,Z,Y):Y()}else Z()},ke=(k,z)=>{let D;for(;k!==z;)D=g(k),a(k),k=D;a(z)},tt=(k,z,D)=>{const{bum:j,scope:F,job:Z,subTree:J,um:ee,m:Y,a:Q}=k;td(Y),td(Q),j&&_a(j),F.stop(),Z&&(Z.flags|=8,q(J,k,z,D)),ee&&vt(ee,z),vt(()=>{k.isUnmounted=!0},z),z&&z.pendingBranch&&!z.isUnmounted&&k.asyncDep&&!k.asyncResolved&&k.suspenseId===z.pendingId&&(z.deps--,z.deps===0&&z.resolve())},V=(k,z,D,j=!1,F=!1,Z=0)=>{for(let J=Z;J<k.length;J++)q(k[J],z,D,j,F)},Ee=k=>{if(k.shapeFlag&6)return Ee(k.component.subTree);if(k.shapeFlag&128)return k.suspense.next();const z=g(k.anchor||k.el),D=z&&z[Gb];return D?g(D):z};let at=!1;const mt=(k,z,D)=>{k==null?z._vnode&&q(z._vnode,null,null,!0):b(z._vnode||null,k,z,null,null,null,D),z._vnode=k,at||(at=!0,Zu(),Sh(),at=!1)},He={p:b,um:q,m:U,r:ae,mt:_e,mc:M,pc:pe,pbc:X,n:Ee,o:e};return{render:mt,hydrate:void 0,createApp:hv(mt)}}function Sa({type:e,props:t},r){return r==="svg"&&e==="foreignObject"||r==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:r}function kr({effect:e,job:t},r){r?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Sv(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Vh(e,t,r=!1){const n=e.children,a=t.children;if(Ie(n)&&Ie(a))for(let i=0;i<n.length;i++){const s=n[i];let l=a[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=a[i]=gr(a[i]),l.el=s.el),!r&&l.patchFlag!==-2&&Vh(s,l)),l.type===Yn&&(l.el=s.el)}}function Tv(e){const t=e.slice(),r=[0];let n,a,i,s,l;const u=e.length;for(n=0;n<u;n++){const c=e[n];if(c!==0){if(a=r[r.length-1],e[a]<c){t[n]=a,r.push(n);continue}for(i=0,s=r.length-1;i<s;)l=i+s>>1,e[r[l]]<c?i=l+1:s=l;c<e[r[i]]&&(i>0&&(t[n]=r[i-1]),r[i]=n)}}for(i=r.length,s=r[i-1];i-- >0;)r[i]=s,s=t[s];return r}function Hh(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Hh(t)}function td(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const Cv=Symbol.for("v-scx"),kv=()=>Tn(Cv);function Ta(e,t,r){return Fh(e,t,r)}function Fh(e,t,r=Ve){const{immediate:n,deep:a,flush:i,once:s}=r,l=ht({},r),u=t&&n||!t&&i!=="post";let c;if(Hi){if(i==="sync"){const _=kv();c=_.__watcherHandles||(_.__watcherHandles=[])}else if(!u){const _=()=>{};return _.stop=Xt,_.resume=Xt,_.pause=Xt,_}}const p=ft;l.call=(_,w,b)=>Jt(_,p,w,b);let h=!1;i==="post"?l.scheduler=_=>{vt(_,p&&p.suspense)}:i!=="sync"&&(h=!0,l.scheduler=(_,w)=>{w?_():uo(_)}),l.augmentJob=_=>{t&&(_.flags|=4),h&&(_.flags|=2,p&&(_.id=p.uid,_.i=p))};const g=Wb(e,t,l);return Hi&&(c?c.push(g):u&&g()),g}function Ev(e,t,r){const n=this.proxy,a=Ye(e)?e.includes(".")?Gh(n,e):()=>n[e]:e.bind(n,n);let i;ze(t)?i=t:(i=t.handler,r=t);const s=Ki(this),l=Fh(a,i.bind(n),r);return s(),l}function Gh(e,t){const r=t.split(".");return()=>{let n=e;for(let a=0;a<r.length&&n;a++)n=n[r[a]];return n}}const Iv=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${br(t)}Modifiers`]||e[`${qr(t)}Modifiers`];function zv(e,t,...r){if(e.isUnmounted)return;const n=e.vnode.props||Ve;let a=r;const i=t.startsWith("update:"),s=i&&Iv(n,t.slice(7));s&&(s.trim&&(a=r.map(p=>Ye(p)?p.trim():p)),s.number&&(a=r.map(nb)));let l,u=n[l=ya(t)]||n[l=ya(br(t))];!u&&i&&(u=n[l=ya(qr(t))]),u&&Jt(u,e,6,a);const c=n[l+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,Jt(c,e,6,a)}}function jh(e,t,r=!1){const n=t.emitsCache,a=n.get(e);if(a!==void 0)return a;const i=e.emits;let s={},l=!1;if(!ze(e)){const u=c=>{const p=jh(c,t,!0);p&&(l=!0,ht(s,p))};!r&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}return!i&&!l?(Ke(e)&&n.set(e,null),null):(Ie(i)?i.forEach(u=>s[u]=null):ht(s,i),Ke(e)&&n.set(e,s),s)}function Xn(e,t){return!e||!Vn(t)?!1:(t=t.slice(2).replace(/Once$/,""),Ue(e,t[0].toLowerCase()+t.slice(1))||Ue(e,qr(t))||Ue(e,t))}function rd(e){const{type:t,vnode:r,proxy:n,withProxy:a,propsOptions:[i],slots:s,attrs:l,emit:u,render:c,renderCache:p,props:h,data:g,setupState:_,ctx:w,inheritAttrs:b}=e,S=On(e);let v,$;try{if(r.shapeFlag&4){const T=a||n,I=T;v=Zt(c.call(I,T,p,h,_,g,w)),$=l}else{const T=t;v=Zt(T.length>1?T(h,{attrs:l,slots:s,emit:u}):T(h,null)),$=t.props?l:Av(l)}}catch(T){Pi.length=0,Zn(T,e,1),v=Yt(Pr)}let C=v;if($&&b!==!1){const T=Object.keys($),{shapeFlag:I}=C;T.length&&I&7&&(i&&T.some(Xs)&&($=Ov($,i)),C=ai(C,$,!1,!0))}return r.dirs&&(C=ai(C,null,!1,!0),C.dirs=C.dirs?C.dirs.concat(r.dirs):r.dirs),r.transition&&co(C,r.transition),v=C,On(S),v}const Av=e=>{let t;for(const r in e)(r==="class"||r==="style"||Vn(r))&&((t||(t={}))[r]=e[r]);return t},Ov=(e,t)=>{const r={};for(const n in e)(!Xs(n)||!(n.slice(9)in t))&&(r[n]=e[n]);return r};function Rv(e,t,r){const{props:n,children:a,component:i}=e,{props:s,children:l,patchFlag:u}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(r&&u>=0){if(u&1024)return!0;if(u&16)return n?id(n,s,c):!!s;if(u&8){const p=t.dynamicProps;for(let h=0;h<p.length;h++){const g=p[h];if(s[g]!==n[g]&&!Xn(c,g))return!0}}}else return(a||l)&&(!l||!l.$stable)?!0:n===s?!1:n?s?id(n,s,c):!0:!!s;return!1}function id(e,t,r){const n=Object.keys(t);if(n.length!==Object.keys(e).length)return!0;for(let a=0;a<n.length;a++){const i=n[a];if(t[i]!==e[i]&&!Xn(r,i))return!0}return!1}function Bv({vnode:e,parent:t},r){for(;t;){const n=t.subTree;if(n.suspense&&n.suspense.activeBranch===e&&(n.el=e.el),n===e)(e=t.vnode).el=r,t=t.parent;else break}}const Kh=e=>e.__isSuspense;function Mv(e,t){t&&t.pendingBranch?Ie(e)?t.effects.push(...e):t.effects.push(e):Hb(e)}const Kt=Symbol.for("v-fgt"),Yn=Symbol.for("v-txt"),Pr=Symbol.for("v-cmt"),Ca=Symbol.for("v-stc"),Pi=[];let St=null;function Xr(e=!1){Pi.push(St=e?null:[])}function Dv(){Pi.pop(),St=Pi[Pi.length-1]||null}let Vi=1;function nd(e,t=!1){Vi+=e,e<0&&St&&t&&(St.hasOnce=!0)}function Zh(e){return e.dynamicChildren=Vi>0?St||ei:null,Dv(),Vi>0&&St&&St.push(e),e}function Ei(e,t,r,n,a,i){return Zh(_r(e,t,r,n,a,i,!0))}function Nv(e,t,r,n,a){return Zh(Yt(e,t,r,n,a,!0))}function Qh(e){return e?e.__v_isVNode===!0:!1}function gi(e,t){return e.type===t.type&&e.key===t.key}const Xh=({key:e})=>e??null,Cn=({ref:e,ref_key:t,ref_for:r})=>(typeof e=="number"&&(e=""+e),e!=null?Ye(e)||ut(e)||ze(e)?{i:Qt,r:e,k:t,f:!!r}:e:null);function _r(e,t=null,r=null,n=0,a=null,i=e===Kt?0:1,s=!1,l=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Xh(t),ref:t&&Cn(t),scopeId:Ch,slotScopeIds:null,children:r,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:n,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:Qt};return l?(ho(u,r),i&128&&e.normalize(u)):r&&(u.shapeFlag|=Ye(r)?8:16),Vi>0&&!s&&St&&(u.patchFlag>0||i&6)&&u.patchFlag!==32&&St.push(u),u}const Yt=Pv;function Pv(e,t=null,r=null,n=0,a=null,i=!1){if((!e||e===av)&&(e=Pr),Qh(e)){const l=ai(e,t,!0);return r&&ho(l,r),Vi>0&&!i&&St&&(l.shapeFlag&6?St[St.indexOf(e)]=l:St.push(l)),l.patchFlag=-2,l}if(Qv(e)&&(e=e.__vccOpts),t){t=Uv(t);let{class:l,style:u}=t;l&&!Ye(l)&&(t.class=eo(l)),Ke(u)&&(lo(u)&&!Ie(u)&&(u=ht({},u)),t.style=jn(u))}const s=Ye(e)?1:Kh(e)?128:jb(e)?64:Ke(e)?4:ze(e)?2:0;return _r(e,t,r,n,a,s,i,!0)}function Uv(e){return e?lo(e)||Dh(e)?ht({},e):e:null}function ai(e,t,r=!1,n=!1){const{props:a,ref:i,patchFlag:s,children:l,transition:u}=e,c=t?qv(a||{},t):a,p={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&Xh(c),ref:t&&t.ref?r&&i?Ie(i)?i.concat(Cn(t)):[i,Cn(t)]:Cn(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Kt?s===-1?16:s|16:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:u,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&ai(e.ssContent),ssFallback:e.ssFallback&&ai(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return u&&n&&co(p,u.clone(p)),p}function Wv(e=" ",t=0){return Yt(Yn,null,e,t)}function Lv(e="",t=!1){return t?(Xr(),Nv(Pr,null,e)):Yt(Pr,null,e)}function Zt(e){return e==null||typeof e=="boolean"?Yt(Pr):Ie(e)?Yt(Kt,null,e.slice()):Qh(e)?gr(e):Yt(Yn,null,String(e))}function gr(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:ai(e)}function ho(e,t){let r=0;const{shapeFlag:n}=e;if(t==null)t=null;else if(Ie(t))r=16;else if(typeof t=="object")if(n&65){const a=t.default;a&&(a._c&&(a._d=!1),ho(e,a()),a._c&&(a._d=!0));return}else{r=32;const a=t._;!a&&!Dh(t)?t._ctx=Qt:a===3&&Qt&&(Qt.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else ze(t)?(t={default:t,_ctx:Qt},r=32):(t=String(t),n&64?(r=16,t=[Wv(t)]):r=8);e.children=t,e.shapeFlag|=r}function qv(...e){const t={};for(let r=0;r<e.length;r++){const n=e[r];for(const a in n)if(a==="class")t.class!==n.class&&(t.class=eo([t.class,n.class]));else if(a==="style")t.style=jn([t.style,n.style]);else if(Vn(a)){const i=t[a],s=n[a];s&&i!==s&&!(Ie(i)&&i.includes(s))&&(t[a]=i?[].concat(i,s):s)}else a!==""&&(t[a]=n[a])}return t}function Ht(e,t,r,n=null){Jt(e,t,7,[r,n])}const Vv=Rh();let Hv=0;function Fv(e,t,r){const n=e.type,a=(t?t.appContext:e.appContext)||Vv,i={uid:Hv++,vnode:e,type:n,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new cb(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ph(n,a),emitsOptions:jh(n,a),emit:null,emitted:null,propsDefaults:Ve,inheritAttrs:n.inheritAttrs,ctx:Ve,data:Ve,props:Ve,attrs:Ve,slots:Ve,refs:Ve,setupState:Ve,setupContext:null,suspense:r,suspenseId:r?r.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=zv.bind(null,i),e.ce&&e.ce(i),i}let ft=null,Mn,Rs;{const e=Gn(),t=(r,n)=>{let a;return(a=e[r])||(a=e[r]=[]),a.push(n),i=>{a.length>1?a.forEach(s=>s(i)):a[0](i)}};Mn=t("__VUE_INSTANCE_SETTERS__",r=>ft=r),Rs=t("__VUE_SSR_SETTERS__",r=>Hi=r)}const Ki=e=>{const t=ft;return Mn(e),e.scope.on(),()=>{e.scope.off(),Mn(t)}},ad=()=>{ft&&ft.scope.off(),Mn(null)};function Yh(e){return e.vnode.shapeFlag&4}let Hi=!1;function Gv(e,t=!1,r=!1){t&&Rs(t);const{props:n,children:a}=e.vnode,i=Yh(e);gv(e,n,i,t),bv(e,a,r);const s=i?jv(e,t):void 0;return t&&Rs(!1),s}function jv(e,t){const r=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,ov);const{setup:n}=r;if(n){xr();const a=e.setupContext=n.length>1?Zv(e):null,i=Ki(e),s=ji(n,e,0,[e.props,a]),l=Yf(s);if(Sr(),i(),(l||e.sp)&&!Di(e)&&kh(e),l){if(s.then(ad,ad),t)return s.then(u=>{sd(e,u)}).catch(u=>{Zn(u,e,0)});e.asyncDep=s}else sd(e,s)}else Jh(e)}function sd(e,t,r){ze(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Ke(t)&&(e.setupState=vh(t)),Jh(e)}function Jh(e,t,r){const n=e.type;e.render||(e.render=n.render||Xt);{const a=Ki(e);xr();try{lv(e)}finally{Sr(),a()}}}const Kv={get(e,t){return ot(e,"get",""),e[t]}};function Zv(e){const t=r=>{e.exposed=r||{}};return{attrs:new Proxy(e.attrs,Kv),slots:e.slots,emit:e.emit,expose:t}}function mo(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(vh(Ob(e.exposed)),{get(t,r){if(r in t)return t[r];if(r in Ni)return Ni[r](e)},has(t,r){return r in t||r in Ni}})):e.proxy}function Qv(e){return ze(e)&&"__vccOpts"in e}const Xv=(e,t)=>Pb(e,t,Hi),Yv="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Bs;const od=typeof window<"u"&&window.trustedTypes;if(od)try{Bs=od.createPolicy("vue",{createHTML:e=>e})}catch{}const em=Bs?e=>Bs.createHTML(e):e=>e,Jv="http://www.w3.org/2000/svg",e$="http://www.w3.org/1998/Math/MathML",ar=typeof document<"u"?document:null,ld=ar&&ar.createElement("template"),t$={insert:(e,t,r)=>{t.insertBefore(e,r||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,r,n)=>{const a=t==="svg"?ar.createElementNS(Jv,e):t==="mathml"?ar.createElementNS(e$,e):r?ar.createElement(e,{is:r}):ar.createElement(e);return e==="select"&&n&&n.multiple!=null&&a.setAttribute("multiple",n.multiple),a},createText:e=>ar.createTextNode(e),createComment:e=>ar.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ar.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,r,n,a,i){const s=r?r.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),r),!(a===i||!(a=a.nextSibling)););else{ld.innerHTML=em(n==="svg"?`<svg>${e}</svg>`:n==="mathml"?`<math>${e}</math>`:e);const l=ld.content;if(n==="svg"||n==="mathml"){const u=l.firstChild;for(;u.firstChild;)l.appendChild(u.firstChild);l.removeChild(u)}t.insertBefore(l,r)}return[s?s.nextSibling:t.firstChild,r?r.previousSibling:t.lastChild]}},r$=Symbol("_vtc");function i$(e,t,r){const n=e[r$];n&&(t=(t?[t,...n]:[...n]).join(" ")),t==null?e.removeAttribute("class"):r?e.setAttribute("class",t):e.className=t}const ud=Symbol("_vod"),n$=Symbol("_vsh"),a$=Symbol(""),s$=/(^|;)\s*display\s*:/;function o$(e,t,r){const n=e.style,a=Ye(r);let i=!1;if(r&&!a){if(t)if(Ye(t))for(const s of t.split(";")){const l=s.slice(0,s.indexOf(":")).trim();r[l]==null&&kn(n,l,"")}else for(const s in t)r[s]==null&&kn(n,s,"");for(const s in r)s==="display"&&(i=!0),kn(n,s,r[s])}else if(a){if(t!==r){const s=n[a$];s&&(r+=";"+s),n.cssText=r,i=s$.test(r)}}else t&&e.removeAttribute("style");ud in e&&(e[ud]=i?n.display:"",e[n$]&&(n.display="none"))}const dd=/\s*!important$/;function kn(e,t,r){if(Ie(r))r.forEach(n=>kn(e,t,n));else if(r==null&&(r=""),t.startsWith("--"))e.setProperty(t,r);else{const n=l$(e,t);dd.test(r)?e.setProperty(qr(n),r.replace(dd,""),"important"):e[n]=r}}const cd=["Webkit","Moz","ms"],ka={};function l$(e,t){const r=ka[t];if(r)return r;let n=br(t);if(n!=="filter"&&n in e)return ka[t]=n;n=th(n);for(let a=0;a<cd.length;a++){const i=cd[a]+n;if(i in e)return ka[t]=i}return t}const pd="http://www.w3.org/1999/xlink";function fd(e,t,r,n,a,i=db(t)){n&&t.startsWith("xlink:")?r==null?e.removeAttributeNS(pd,t.slice(6,t.length)):e.setAttributeNS(pd,t,r):r==null||i&&!ih(r)?e.removeAttribute(t):e.setAttribute(t,i?"":$r(r)?String(r):r)}function hd(e,t,r,n,a){if(t==="innerHTML"||t==="textContent"){r!=null&&(e[t]=t==="innerHTML"?em(r):r);return}const i=e.tagName;if(t==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?e.getAttribute("value")||"":e.value,u=r==null?e.type==="checkbox"?"on":"":String(r);(l!==u||!("_value"in e))&&(e.value=u),r==null&&e.removeAttribute(t),e._value=r;return}let s=!1;if(r===""||r==null){const l=typeof e[t];l==="boolean"?r=ih(r):r==null&&l==="string"?(r="",s=!0):l==="number"&&(r=0,s=!0)}try{e[t]=r}catch{}s&&e.removeAttribute(a||t)}function u$(e,t,r,n){e.addEventListener(t,r,n)}function d$(e,t,r,n){e.removeEventListener(t,r,n)}const md=Symbol("_vei");function c$(e,t,r,n,a=null){const i=e[md]||(e[md]={}),s=i[t];if(n&&s)s.value=n;else{const[l,u]=p$(t);if(n){const c=i[t]=m$(n,a);u$(e,l,c,u)}else s&&(d$(e,l,s,u),i[t]=void 0)}}const gd=/(?:Once|Passive|Capture)$/;function p$(e){let t;if(gd.test(e)){t={};let n;for(;n=e.match(gd);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):qr(e.slice(2)),t]}let Ea=0;const f$=Promise.resolve(),h$=()=>Ea||(f$.then(()=>Ea=0),Ea=Date.now());function m$(e,t){const r=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=r.attached)return;Jt(g$(n,r.value),t,5,[n])};return r.value=e,r.attached=h$(),r}function g$(e,t){if(Ie(t)){const r=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{r.call(e),e._stopped=!0},t.map(n=>a=>!a._stopped&&n&&n(a))}else return t}const yd=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,y$=(e,t,r,n,a,i)=>{const s=a==="svg";t==="class"?i$(e,n,s):t==="style"?o$(e,r,n):Vn(t)?Xs(t)||c$(e,t,r,n,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):_$(e,t,n,s))?(hd(e,t,n),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&fd(e,t,n,s,i,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!Ye(n))?hd(e,br(t),n,i,t):(t==="true-value"?e._trueValue=n:t==="false-value"&&(e._falseValue=n),fd(e,t,n,s))};function _$(e,t,r,n){if(n)return!!(t==="innerHTML"||t==="textContent"||t in e&&yd(t)&&ze(r));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const a=e.tagName;if(a==="IMG"||a==="VIDEO"||a==="CANVAS"||a==="SOURCE")return!1}return yd(t)&&Ye(r)?!1:t in e}const w$=ht({patchProp:y$},t$);let _d;function b$(){return _d||(_d=$v(w$))}const v$=(...e)=>{const t=b$().createApp(...e),{mount:r}=t;return t.mount=n=>{const a=x$(n);if(!a)return;const i=t._component;!ze(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.nodeType===1&&(a.textContent="");const s=r(a,!1,$$(a));return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),s},t};function $$(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function x$(e){return Ye(e)?document.querySelector(e):e}const tm=(e,t)=>{const r=e.__vccOpts||e;for(const[n,a]of t)r[n]=a;return r},S$={class:"canvas-container"},T$={__name:"Canvas",emits:["update:imageData","clear-prediction"],setup(e,{emit:t}){const r=jt(null),n=jt(!1),a=jt(0),i=jt(0),s=jt(null),l=jt(new Array(28*28).fill(0)),u=t;po(()=>{r.value&&(s.value=r.value.getContext("2d"),s.value.fillStyle="black",s.value.fillRect(0,0,28,28),b())});const c=v=>{n.value=!0,[a.value,i.value]=g(v),w(a.value,i.value),S()},p=v=>{if(!n.value)return;const[$,C]=g(v);_(a.value,i.value,$,C),a.value=$,i.value=C,S()},h=()=>{n.value=!1},g=v=>{const $=r.value.getBoundingClientRect(),C=Math.floor((v.clientX-$.left)/($.width/28)),T=Math.floor((v.clientY-$.top)/($.height/28)),I=Math.max(0,Math.min(C,27)),O=Math.max(0,Math.min(T,27));return[I,O]},_=(v,$,C,T)=>{s.value.beginPath(),s.value.moveTo(v+.5,$+.5),s.value.lineTo(C+.5,T+.5),s.value.strokeStyle="white",s.value.lineWidth=2,s.value.lineCap="round",s.value.stroke(),w(v,$),w(C,T)},w=(v,$)=>{const C=$*28+v;l.value[C]=1,s.value.fillStyle="white",s.value.fillRect(v,$,1,1)},b=()=>{s.value.fillStyle="black",s.value.fillRect(0,0,28,28),l.value=new Array(28*28).fill(0),u("update:imageData",l.value),u("clear-prediction")},S=()=>{const v=s.value.getImageData(0,0,28,28),$=[];for(let C=0;C<v.data.length;C+=4){const T=(v.data[C]+v.data[C+1]+v.data[C+2])/3;$.push(T/255)}l.value=$,u("update:imageData",l.value)};return(v,$)=>(Xr(),Ei("div",S$,[_r("canvas",{ref_key:"canvasRef",ref:r,width:"28",height:"28",onMousedown:c,onMousemove:p,onMouseup:h,onMouseleave:h,"aria-label":"Drawing Canvas"},null,544),_r("button",{onClick:b,class:"clear-button"},"Clear")]))}},C$=tm(T$,[["__scopeId","data-v-a44cced1"]]);/*!
 * ONNX Runtime Web v1.22.0-dev.20250310-fe7634eb6f
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */var go=Object.defineProperty,k$=Object.getOwnPropertyDescriptor,E$=Object.getOwnPropertyNames,I$=Object.prototype.hasOwnProperty,z$=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof require<"u"?require:t)[r]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),K=(e,t)=>()=>(e&&(t=e(e=0)),t),li=(e,t)=>{for(var r in t)go(e,r,{get:t[r],enumerable:!0})},A$=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of E$(t))!I$.call(e,a)&&a!==r&&go(e,a,{get:()=>t[a],enumerable:!(n=k$(t,a))||n.enumerable});return e},Fi=e=>A$(go({},"__esModule",{value:!0}),e),yi,pr,Yr,wd,rm,im=K(()=>{yi=new Map,pr=[],Yr=(e,t,r)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let n=yi.get(e);if(n===void 0)yi.set(e,{backend:t,priority:r});else{if(n.priority>r)return;if(n.priority===r&&n.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${r}`)}if(r>=0){let a=pr.indexOf(e);a!==-1&&pr.splice(a,1);for(let i=0;i<pr.length;i++)if(yi.get(pr[i]).priority<=r){pr.splice(i,0,e);return}pr.push(e)}return}throw new TypeError("not a valid backend")},wd=async e=>{let t=yi.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let r=!!t.initPromise;try{return r||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(n){return r||(t.error=`${n}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},rm=async e=>{let t=e.executionProviders||[],r=t.map(u=>typeof u=="string"?u:u.name),n=r.length===0?pr:r,a,i=[],s=new Set;for(let u of n){let c=await wd(u);typeof c=="string"?i.push({name:u,err:c}):(a||(a=c),a===c&&s.add(u))}if(!a)throw new Error(`no available backend found. ERR: ${i.map(u=>`[${u.name}] ${u.err}`).join(", ")}`);for(let{name:u,err:c}of i)r.includes(u)&&console.warn(`removing requested execution provider "${u}" from session options because it is not available: ${c}`);let l=t.filter(u=>s.has(typeof u=="string"?u:u.name));return[a,new Proxy(e,{get:(u,c)=>c==="executionProviders"?l:Reflect.get(u,c)})]}}),O$=K(()=>{im()}),nm,R$=K(()=>{nm="1.22.0-dev.20250306-aafa8d170a"}),Ia,Et,am=K(()=>{R$(),Ia="warning",Et={wasm:{},webgl:{},webgpu:{},versions:{common:nm},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);Ia=e}},get logLevel(){return Ia}},Object.defineProperty(Et,"logLevel",{enumerable:!0})}),Fe,B$=K(()=>{am(),Fe=Et}),sm,om,M$=K(()=>{sm=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);r.width=e.dims[3],r.height=e.dims[2];let n=r.getContext("2d");if(n!=null){let a,i;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(a=e.dims[2],i=e.dims[3]):(a=e.dims[3],i=e.dims[2]);let s=(t==null?void 0:t.format)!==void 0?t.format:"RGB",l=t==null?void 0:t.norm,u,c;l===void 0||l.mean===void 0?u=[255,255,255,255]:typeof l.mean=="number"?u=[l.mean,l.mean,l.mean,l.mean]:(u=[l.mean[0],l.mean[1],l.mean[2],0],l.mean[3]!==void 0&&(u[3]=l.mean[3])),l===void 0||l.bias===void 0?c=[0,0,0,0]:typeof l.bias=="number"?c=[l.bias,l.bias,l.bias,l.bias]:(c=[l.bias[0],l.bias[1],l.bias[2],0],l.bias[3]!==void 0&&(c[3]=l.bias[3]));let p=i*a,h=0,g=p,_=p*2,w=-1;s==="RGBA"?(h=0,g=p,_=p*2,w=p*3):s==="RGB"?(h=0,g=p,_=p*2):s==="RBG"&&(h=0,_=p,g=p*2);for(let b=0;b<i;b++)for(let S=0;S<a;S++){let v=(e.data[h++]-c[0])*u[0],$=(e.data[g++]-c[1])*u[1],C=(e.data[_++]-c[2])*u[2],T=w===-1?255:(e.data[w++]-c[3])*u[3];n.fillStyle="rgba("+v+","+$+","+C+","+T+")",n.fillRect(S,b,1,1)}if("toDataURL"in r)return r.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},om=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),n;if(r!=null){let a,i,s;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(a=e.dims[2],i=e.dims[1],s=e.dims[3]):(a=e.dims[3],i=e.dims[2],s=e.dims[1]);let l=t!==void 0&&t.format!==void 0?t.format:"RGB",u=t==null?void 0:t.norm,c,p;u===void 0||u.mean===void 0?c=[255,255,255,255]:typeof u.mean=="number"?c=[u.mean,u.mean,u.mean,u.mean]:(c=[u.mean[0],u.mean[1],u.mean[2],255],u.mean[3]!==void 0&&(c[3]=u.mean[3])),u===void 0||u.bias===void 0?p=[0,0,0,0]:typeof u.bias=="number"?p=[u.bias,u.bias,u.bias,u.bias]:(p=[u.bias[0],u.bias[1],u.bias[2],0],u.bias[3]!==void 0&&(p[3]=u.bias[3]));let h=i*a;if(t!==void 0&&(t.format!==void 0&&s===4&&t.format!=="RGBA"||s===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let g=4,_=0,w=1,b=2,S=3,v=0,$=h,C=h*2,T=-1;l==="RGBA"?(v=0,$=h,C=h*2,T=h*3):l==="RGB"?(v=0,$=h,C=h*2):l==="RBG"&&(v=0,C=h,$=h*2),n=r.createImageData(a,i);for(let I=0;I<i*a;_+=g,w+=g,b+=g,S+=g,I++)n.data[_]=(e.data[v++]-p[0])*c[0],n.data[w]=(e.data[$++]-p[1])*c[1],n.data[b]=(e.data[C++]-p[2])*c[2],n.data[S]=T===-1?255:(e.data[T++]-p[3])*c[3]}else throw new Error("Can not access image data");return n}}),dn,lm,um,dm,cm,pm,D$=K(()=>{yo(),dn=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:r,width:n}=t,a=t.norm??{mean:255,bias:0},i,s;typeof a.mean=="number"?i=[a.mean,a.mean,a.mean,a.mean]:i=[a.mean[0],a.mean[1],a.mean[2],a.mean[3]??255],typeof a.bias=="number"?s=[a.bias,a.bias,a.bias,a.bias]:s=[a.bias[0],a.bias[1],a.bias[2],a.bias[3]??0];let l=t.format!==void 0?t.format:"RGBA",u=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",c=r*n,p=u==="RGBA"?new Float32Array(c*4):new Float32Array(c*3),h=4,g=0,_=1,w=2,b=3,S=0,v=c,$=c*2,C=-1;l==="RGB"&&(h=3,g=0,_=1,w=2,b=-1),u==="RGBA"?C=c*3:u==="RBG"?(S=0,$=c,v=c*2):u==="BGR"&&($=0,v=c,S=c*2);for(let T=0;T<c;T++,g+=h,w+=h,_+=h,b+=h)p[S++]=(e[g]+s[0])/i[0],p[v++]=(e[_]+s[1])/i[1],p[$++]=(e[w]+s[2])/i[2],C!==-1&&b!==-1&&(p[C++]=(e[b]+s[3])/i[3]);return u==="RGBA"?new xt("float32",p,[1,4,r,n]):new xt("float32",p,[1,3,r,n])},lm=async(e,t)=>{let r=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,n=typeof ImageData<"u"&&e instanceof ImageData,a=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,i=typeof e=="string",s,l=t??{},u=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},c=p=>typeof HTMLCanvasElement<"u"&&p instanceof HTMLCanvasElement||p instanceof OffscreenCanvas?p.getContext("2d"):null;if(r){let p=u();p.width=e.width,p.height=e.height;let h=c(p);if(h!=null){let g=e.height,_=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(g=t.resizedHeight,_=t.resizedWidth),t!==void 0){if(l=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");l.tensorFormat="RGBA",l.height=g,l.width=_}else l.tensorFormat="RGBA",l.height=g,l.width=_;h.drawImage(e,0,0),s=h.getImageData(0,0,_,g).data}else throw new Error("Can not access image data")}else if(n){let p,h;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(p=t.resizedHeight,h=t.resizedWidth):(p=e.height,h=e.width),t!==void 0&&(l=t),l.format="RGBA",l.height=p,l.width=h,t!==void 0){let g=u();g.width=h,g.height=p;let _=c(g);if(_!=null)_.putImageData(e,0,0),s=_.getImageData(0,0,h,p).data;else throw new Error("Can not access image data")}else s=e.data}else if(a){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let p=u();p.width=e.width,p.height=e.height;let h=c(p);if(h!=null){let g=e.height,_=e.width;return h.drawImage(e,0,0,_,g),s=h.getImageData(0,0,_,g).data,l.height=g,l.width=_,dn(s,l)}else throw new Error("Can not access image data")}else{if(i)return new Promise((p,h)=>{let g=u(),_=c(g);if(!e||!_)return h();let w=new Image;w.crossOrigin="Anonymous",w.src=e,w.onload=()=>{g.width=w.width,g.height=w.height,_.drawImage(w,0,0,g.width,g.height);let b=_.getImageData(0,0,g.width,g.height);l.height=g.height,l.width=g.width,p(dn(b.data,l))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(s!==void 0)return dn(s,l);throw new Error("Input data provided is not supported - aborted tensor creation")},um=(e,t)=>{let{width:r,height:n,download:a,dispose:i}=t,s=[1,n,r,4];return new xt({location:"texture",type:"float32",texture:e,dims:s,download:a,dispose:i})},dm=(e,t)=>{let{dataType:r,dims:n,download:a,dispose:i}=t;return new xt({location:"gpu-buffer",type:r??"float32",gpuBuffer:e,dims:n,download:a,dispose:i})},cm=(e,t)=>{let{dataType:r,dims:n,download:a,dispose:i}=t;return new xt({location:"ml-tensor",type:r??"float32",mlTensor:e,dims:n,download:a,dispose:i})},pm=(e,t,r)=>new xt({location:"cpu-pinned",type:e,data:t,dims:r??[t.length]})}),Rr,Ii,za,fm,N$=K(()=>{Rr=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),Ii=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),za=!1,fm=()=>{if(!za){za=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,r=globalThis.Float16Array,n=typeof r<"u"&&r.from;e&&(Rr.set("int64",BigInt64Array),Ii.set(BigInt64Array,"int64")),t&&(Rr.set("uint64",BigUint64Array),Ii.set(BigUint64Array,"uint64")),n?(Rr.set("float16",r),Ii.set(r,"float16")):Rr.set("float16",Uint16Array)}}}),hm,mm,P$=K(()=>{yo(),hm=e=>{let t=1;for(let r=0;r<e.length;r++){let n=e[r];if(typeof n!="number"||!Number.isSafeInteger(n))throw new TypeError(`dims[${r}] must be an integer, got: ${n}`);if(n<0)throw new RangeError(`dims[${r}] must be a non-negative integer, got: ${n}`);t*=n}return t},mm=(e,t)=>{switch(e.location){case"cpu":return new xt(e.type,e.data,t);case"cpu-pinned":return new xt({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new xt({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new xt({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new xt({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),xt,yo=K(()=>{M$(),D$(),N$(),P$(),xt=class{constructor(e,t,r){fm();let n,a;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,n=e.type,a=e.dims,e.location){case"cpu-pinned":{let s=Rr.get(n);if(!s)throw new TypeError(`unsupported type "${n}" to create tensor from pinned buffer`);if(!(e.data instanceof s))throw new TypeError(`buffer should be of type ${s.name}`);this.cpuData=e.data;break}case"texture":{if(n!=="float32")throw new TypeError(`unsupported type "${n}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(n!=="float32"&&n!=="float16"&&n!=="int32"&&n!=="int64"&&n!=="uint32"&&n!=="uint8"&&n!=="bool"&&n!=="uint4"&&n!=="int4")throw new TypeError(`unsupported type "${n}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(n!=="float32"&&n!=="float16"&&n!=="int32"&&n!=="int64"&&n!=="uint32"&&n!=="uint64"&&n!=="int8"&&n!=="uint8"&&n!=="bool"&&n!=="uint4"&&n!=="int4")throw new TypeError(`unsupported type "${n}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let s,l;if(typeof e=="string")if(n=e,l=r,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");s=t}else{let u=Rr.get(e);if(u===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&u===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${u.name} as data.`);e==="uint64"||e==="int64"?s=u.from(t,BigInt):s=u.from(t)}else if(t instanceof u)s=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")s=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&t instanceof Uint16Array&&u!==Uint16Array)s=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw new TypeError(`A ${n} tensor's data must be type of ${u}`)}else if(l=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let u=typeof e[0];if(u==="string")n="string",s=e;else if(u==="boolean")n="bool",s=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${u}.`)}else if(e instanceof Uint8ClampedArray)n="uint8",s=Uint8Array.from(e);else{let u=Ii.get(e.constructor);if(u===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);n=u,s=e}if(l===void 0)l=[s.length];else if(!Array.isArray(l))throw new TypeError("A tensor's dims must be a number array");a=l,this.cpuData=s,this.dataLocation="cpu"}let i=hm(a);if(this.cpuData&&i!==this.cpuData.length&&!((n==="uint4"||n==="int4")&&Math.ceil(i/2)===this.cpuData.length))throw new Error(`Tensor's size(${i}) does not match data length(${this.cpuData.length}).`);this.type=n,this.dims=a,this.size=i}static async fromImage(e,t){return lm(e,t)}static fromTexture(e,t){return um(e,t)}static fromGpuBuffer(e,t){return dm(e,t)}static fromMLTensor(e,t){return cm(e,t)}static fromPinnedBuffer(e,t,r){return pm(e,t,r)}toDataURL(e){return sm(this,e)}toImageData(e){return om(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return mm(this,e)}}}),Nt,gm=K(()=>{yo(),Nt=xt}),Dn,Aa,er,Ut,ym=K(()=>{am(),Dn=(e,t)=>{(typeof Et.trace>"u"?!Et.wasm.trace:!Et.trace)||console.timeStamp(`${e}::ORT::${t}`)},Aa=(e,t)=>{var a;let r=((a=new Error().stack)==null?void 0:a.split(/\r\n|\r|\n/g))||[],n=!1;for(let i=0;i<r.length;i++){if(n&&!r[i].includes("TRACE_FUNC")){let s=`FUNC_${e}::${r[i].trim().split(" ")[1]}`;t&&(s+=`::${t}`),Dn("CPU",s);return}r[i].includes("TRACE_FUNC")&&(n=!0)}},er=e=>{(typeof Et.trace>"u"?!Et.wasm.trace:!Et.trace)||Aa("BEGIN",e)},Ut=e=>{(typeof Et.trace>"u"?!Et.wasm.trace:!Et.trace)||Aa("END",e)}}),_m,U$=K(()=>{im(),gm(),ym(),_m=class wm{constructor(t){this.handler=t}async run(t,r,n){er();let a={},i={};if(typeof t!="object"||t===null||t instanceof Nt||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let s=!0;if(typeof r=="object"){if(r===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(r instanceof Nt)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(r)){if(r.length===0)throw new TypeError("'fetches' cannot be an empty array.");s=!1;for(let c of r){if(typeof c!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(c)===-1)throw new RangeError(`'fetches' contains invalid output name: ${c}.`);a[c]=null}if(typeof n=="object"&&n!==null)i=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else{let c=!1,p=Object.getOwnPropertyNames(r);for(let h of this.outputNames)if(p.indexOf(h)!==-1){let g=r[h];(g===null||g instanceof Nt)&&(c=!0,s=!1,a[h]=g)}if(c){if(typeof n=="object"&&n!==null)i=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else i=r}}else if(typeof r<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let c of this.inputNames)if(typeof t[c]>"u")throw new Error(`input '${c}' is missing in 'feeds'.`);if(s)for(let c of this.outputNames)a[c]=null;let l=await this.handler.run(t,a,i),u={};for(let c in l)if(Object.hasOwnProperty.call(l,c)){let p=l[c];p instanceof Nt?u[c]=p:u[c]=new Nt(p.type,p.data,p.dims)}return Ut(),u}async release(){return this.handler.dispose()}static async create(t,r,n,a){er();let i,s={};if(typeof t=="string"){if(i=t,typeof r=="object"&&r!==null)s=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(i=t,typeof r=="object"&&r!==null)s=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let p=t,h=0,g=t.byteLength;if(typeof r=="object"&&r!==null)s=r;else if(typeof r=="number"){if(h=r,!Number.isSafeInteger(h))throw new RangeError("'byteOffset' must be an integer.");if(h<0||h>=p.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${p.byteLength}).`);if(g=t.byteLength-h,typeof n=="number"){if(g=n,!Number.isSafeInteger(g))throw new RangeError("'byteLength' must be an integer.");if(g<=0||h+g>p.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${p.byteLength-h}].`);if(typeof a=="object"&&a!==null)s=a;else if(typeof a<"u")throw new TypeError("'options' must be an object.")}else if(typeof n<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof r<"u")throw new TypeError("'options' must be an object.");i=new Uint8Array(p,h,g)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[l,u]=await rm(s),c=await l.createInferenceSessionHandler(i,u);return Ut(),new wm(c)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}}}),_o,W$=K(()=>{U$(),_o=_m}),L$=K(()=>{}),q$=K(()=>{}),V$=K(()=>{}),H$=K(()=>{}),F$={};li(F$,{InferenceSession:()=>_o,TRACE:()=>Dn,TRACE_FUNC_BEGIN:()=>er,TRACE_FUNC_END:()=>Ut,Tensor:()=>Nt,env:()=>Fe,registerBackend:()=>Yr});var Wt=K(()=>{O$(),B$(),W$(),gm(),L$(),q$(),ym(),V$(),H$()}),wo=K(()=>{}),bm={};li(bm,{default:()=>vm});var Oa,Ra,vm,G$=K(()=>{var e;T_(),Vr(),bo(),Oa="ort-wasm-proxy-worker",Ra=((e=globalThis.self)==null?void 0:e.name)===Oa,Ra&&(self.onmessage=t=>{let{type:r,in:n}=t.data;try{switch(r){case"init-wasm":vo(n.wasm).then(()=>{Uo(n).then(()=>{postMessage({type:r})},a=>{postMessage({type:r,err:a})})},a=>{postMessage({type:r,err:a})});break;case"init-ep":{let{epName:a,env:i}=n;Wo(i,a).then(()=>{postMessage({type:r})},s=>{postMessage({type:r,err:s})});break}case"copy-from":{let{buffer:a}=n,i=qn(a);postMessage({type:r,out:i});break}case"create":{let{model:a,options:i}=n;Lo(a,i).then(s=>{postMessage({type:r,out:s})},s=>{postMessage({type:r,err:s})});break}case"release":qo(n),postMessage({type:r});break;case"run":{let{sessionId:a,inputIndices:i,inputs:s,outputIndices:l,options:u}=n;Vo(a,i,s,l,new Array(l.length).fill(null),u).then(c=>{c.some(p=>p[3]!=="cpu")?postMessage({type:r,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:r,out:c},Fo([...s,...c]))},c=>{postMessage({type:r,err:c})});break}case"end-profiling":Ho(n),postMessage({type:r});break;default:}}catch(a){postMessage({type:r,err:a})}}),vm=Ra?null:t=>new Worker(t??bt,{type:"module",name:Oa})}),$m={};li($m,{default:()=>xm});var Ba,Ma,xm,bd,j$=K(()=>{var e,t;Ma=(Ba=import.meta.url,async function(r={}){var Hu;var n,a,i=r,s=new Promise((o,d)=>{n=o,a=d}),l=typeof window=="object",u=typeof WorkerGlobalScope<"u",c=u&&((Hu=self.name)==null?void 0:Hu.startsWith("em-pthread"));i.mountExternalData=(o,d)=>{o.startsWith("./")&&(o=o.substring(2)),(i.Bd||(i.Bd=new Map)).set(o,d)},i.unmountExternalData=()=>{delete i.Bd};var p=globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,le:!0}).buffer.constructor;let h=o=>async(...d)=>{var f;try{if(i.Cd)throw Error("Session already started");let m=i.Cd={be:d[0],errors:[]},y=await o(...d);if(i.Cd!==m)throw Error("Session mismatch");(f=i.Dd)==null||f.flush();let x=m.errors;if(0<x.length){let E=await Promise.all(x);if(E=E.filter(R=>R),0<E.length)throw Error(E.join(`
`))}return y}finally{i.Cd=null}};i.jsepInit=(o,d)=>{if(o==="webgpu"){[i.Dd,i.Rd,i.Vd,i.Hd,i.Ud,i.hc,i.Wd,i.Zd,i.Sd,i.Td,i.Xd]=d;let f=i.Dd;i.jsepRegisterBuffer=(m,y,x,E)=>f.registerBuffer(m,y,x,E),i.jsepGetBuffer=m=>f.getBuffer(m),i.jsepCreateDownloader=(m,y,x)=>f.createDownloader(m,y,x),i.jsepOnCreateSession=m=>{f.onCreateSession(m)},i.jsepOnReleaseSession=m=>{f.onReleaseSession(m)},i.jsepOnRunStart=m=>f.onRunStart(m),i.$d=(m,y)=>{f.upload(m,y)}}else if(o==="webnn"){[i.Dd,i.Yd,i.Id,i.jsepEnsureTensor,i.Jd,i.jsepDownloadTensor]=d,i.jsepReleaseTensorId=i.Id,i.jsepUploadTensor=i.Jd;let f=i.Dd;i.jsepOnRunStart=m=>f.onRunStart(m),i.jsepOnRunEnd=f.onRunEnd.bind(f),i.jsepRegisterMLContext=(m,y)=>{f.registerMLContext(m,y)},i.jsepOnReleaseSession=m=>{f.onReleaseSession(m)},i.jsepCreateMLTensorDownloader=(m,y)=>f.createMLTensorDownloader(m,y),i.jsepRegisterMLTensor=(m,y,x,E)=>f.registerMLTensor(m,y,x,E),i.jsepCreateMLContext=m=>f.createMLContext(m),i.jsepRegisterMLConstant=(m,y,x,E,R)=>f.registerMLConstant(m,y,x,E,R,i.Bd),i.jsepRegisterGraphInput=f.registerGraphInput.bind(f),i.jsepIsGraphInput=f.isGraphInput.bind(f),i.jsepCreateTemporaryTensor=f.createTemporaryTensor.bind(f)}};let g=()=>{let o=(d,f,m)=>(...y)=>{let x=qt,E=f==null?void 0:f();y=d(...y);let R=f==null?void 0:f();return E!==R&&(d=R,m(E),f=m=null),qt!=x?new Promise((N,G)=>{ua={resolve:N,reject:G}}):y};(()=>{for(let d of["_OrtAppendExecutionProvider","_OrtCreateSession","_OrtRun","_OrtRunWithBinding","_OrtBindInput"])i[d]=o(i[d],()=>i[d],f=>i[d]=f)})(),h!==void 0&&(i._OrtRun=h(i._OrtRun),i._OrtRunWithBinding=h(i._OrtRunWithBinding)),g=void 0};i.asyncInit=()=>{g==null||g()};var _,w,b=Object.assign({},i),S=(o,d)=>{throw d},v="";(l||u)&&(u?v=self.location.href:typeof document<"u"&&document.currentScript&&(v=document.currentScript.src),Ba&&(v=Ba),v=v.startsWith("blob:")?"":v.slice(0,v.replace(/[?#].*/,"").lastIndexOf("/")+1),u&&(w=o=>{var d=new XMLHttpRequest;return d.open("GET",o,!1),d.responseType="arraybuffer",d.send(null),new Uint8Array(d.response)}),_=async o=>{if(U(o))return new Promise((f,m)=>{var y=new XMLHttpRequest;y.open("GET",o,!0),y.responseType="arraybuffer",y.onload=()=>{y.status==200||y.status==0&&y.response?f(y.response):m(y.status)},y.onerror=m,y.send(null)});var d=await fetch(o,{credentials:"same-origin"});if(d.ok)return d.arrayBuffer();throw Error(d.status+" : "+d.url)});var $=console.log.bind(console),C=console.error.bind(console),T=$,I=C;Object.assign(i,b),b=null;var O,A,M,W,X,de,ue,fe,_e,Te,L,re,pe,te=i.wasmBinary,Oe=!1,U=o=>o.startsWith("file://");function q(){return O.buffer!=W.buffer&&k(),W}function ae(){return O.buffer!=W.buffer&&k(),X}function ke(){return O.buffer!=W.buffer&&k(),de}function tt(){return O.buffer!=W.buffer&&k(),ue}function V(){return O.buffer!=W.buffer&&k(),fe}function Ee(){return O.buffer!=W.buffer&&k(),_e}function at(){return O.buffer!=W.buffer&&k(),Te}function mt(){return O.buffer!=W.buffer&&k(),pe}if(c){let o=function(d){try{var f=d.data,m=f.yd;if(m==="load"){let y=[];self.onmessage=x=>y.push(x),self.startWorker=()=>{postMessage({yd:"loaded"});for(let x of y)o(x);self.onmessage=o};for(let x of f.Od)i[x]&&!i[x].proxy||(i[x]=(...E)=>{postMessage({yd:"callHandler",Nd:x,args:E})},x=="print"&&(T=i[x]),x=="printErr"&&(I=i[x]));O=f.he,k(),He(f.ie)}else if(m==="run"){N_(f.xd),fa(f.xd,0,0,1,0,0),di(),oa(f.xd),je||(Ul(),je=!0);try{P_(f.de,f.Fd)}catch(y){if(y!="unwind")throw y}}else f.target!=="setimmediate"&&(m==="checkMailbox"?je&&Qi():m&&(I(`worker: received unknown command ${m}`),I(f)))}catch(y){throw Wl(),y}};var He,je=!1;I=function(...d){d=d.join(" "),console.error(d)},self.alert=function(...d){postMessage({yd:"alert",text:d.join(" "),fe:an()})},self.onunhandledrejection=d=>{throw d.reason||d},self.onmessage=o}function k(){var o=O.buffer;i.HEAP8=W=new Int8Array(o),i.HEAP16=de=new Int16Array(o),i.HEAPU8=X=new Uint8Array(o),i.HEAPU16=ue=new Uint16Array(o),i.HEAP32=fe=new Int32Array(o),i.HEAPU32=_e=new Uint32Array(o),i.HEAPF32=Te=new Float32Array(o),i.HEAPF64=pe=new Float64Array(o),i.HEAP64=L=new BigInt64Array(o),i.HEAPU64=re=new BigUint64Array(o)}function z(){c?startWorker(i):H.Bb()}c||(O=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),k());var D,j=0,F=null;function Z(){if(--j==0&&F){var o=F;F=null,o()}}function J(o){throw I(o="Aborted("+o+")"),Oe=!0,o=new WebAssembly.RuntimeError(o+". Build with -sASSERTIONS for more info."),a(o),o}function ee(){return{a:{Ta:ye,Va:Q,W:U_,la:W_,b:q_,u:V_,R:H_,Za:F_,d:G_,pb:Zo,g:L_,T:Yo,Ga:Jo,lb:tl,nb:rl,Ha:il,Ea:nl,wb:al,Da:sl,pa:ol,mb:ll,jb:ul,Fa:dl,kb:cl,Ma:j_,za:K_,eb:Z_,cb:X_,ya:J_,V:e0,N:t0,db:r0,ma:u0,fb:d0,zb:c0,hb:p0,qb:f0,ab:h0,Aa:m0,yb:oa,Ja:g0,S:y0,Wa:_0,$:v0,H:$0,E:S0,l:na,F:T0,B:E0,X:I0,J:z0,v:A0,O:O0,D:R0,t:B0,A:M0,z:D0,w:N0,r:P0,tb:U0,ub:W0,vb:L0,rb:Tl,sb:Cl,bb:kl,Oa:V0,La:F0,y:G0,ja:j0,Ba:K0,Ka:H0,qa:Z0,Ia:Q0,ib:X0,U:q0,fa:Y0,Sa:J0,gb:ew,Qa:tw,Pa:rw,Ab:Al,Ca:Ol,ob:gt,aa:Rl,oa:Bl,xb:Ml,na:Dl,$a:Iw,ia:qw,sa:jw,ga:kw,da:Mw,ua:Fw,p:Tw,e:uw,c:ow,ea:Rw,f:dw,n:pw,k:vw,Y:hw,ka:$w,j:Cw,wa:Ow,Ra:Qw,ca:Ww,Ua:Zw,P:Bw,K:gw,_:Uw,Q:Ew,Z:Vw,x:mw,m:lw,va:Pw,i:sw,h:fw,ra:Kw,ta:Gw,o:cw,q:yw,s:ww,I:bw,C:Sw,L:xw,xa:Aw,_a:zw,G:Lw,Ya:Dw,ba:Hw,M:_w,Xa:Nw,ha:nw,a:O,Na:it}}}var Y={1321266:()=>typeof wasmOffsetConverter<"u",1321323:(o,d,f,m,y)=>{if(i===void 0||!i.Bd)return 1;if((o=Xe(Number(o>>>0))).startsWith("./")&&(o=o.substring(2)),!(o=i.Bd.get(o)))return 2;if(d=Number(d>>>0),f=Number(f>>>0),m=Number(m>>>0),d+f>o.byteLength)return 3;try{let x=o.subarray(d,d+f);switch(y){case 0:ae().set(x,m>>>0);break;case 1:i.je?i.je(m,x):i.$d(m,x);break;default:return 4}return 0}catch{return 4}},1322147:(o,d,f)=>{i.Jd(o,ae().subarray(d>>>0,d+f>>>0))},1322210:()=>i.Yd(),1322251:o=>{i.Id(o)},1322287:()=>{i.Sd()},1322318:()=>{i.Td()},1322347:()=>{i.Xd()},1322372:o=>i.Rd(o),1322405:o=>i.Vd(o),1322437:(o,d,f)=>{i.Hd(Number(o),Number(d),Number(f),!0)},1322500:(o,d,f)=>{i.Hd(Number(o),Number(d),Number(f))},1322557:o=>{i.hc("Abs",o,void 0)},1322608:o=>{i.hc("Neg",o,void 0)},1322659:o=>{i.hc("Floor",o,void 0)},1322712:o=>{i.hc("Ceil",o,void 0)},1322764:o=>{i.hc("Reciprocal",o,void 0)},1322822:o=>{i.hc("Sqrt",o,void 0)},1322874:o=>{i.hc("Exp",o,void 0)},1322925:o=>{i.hc("Erf",o,void 0)},1322976:o=>{i.hc("Sigmoid",o,void 0)},1323031:(o,d,f)=>{i.hc("HardSigmoid",o,{alpha:d,beta:f})},1323110:o=>{i.hc("Log",o,void 0)},1323161:o=>{i.hc("Sin",o,void 0)},1323212:o=>{i.hc("Cos",o,void 0)},1323263:o=>{i.hc("Tan",o,void 0)},1323314:o=>{i.hc("Asin",o,void 0)},1323366:o=>{i.hc("Acos",o,void 0)},1323418:o=>{i.hc("Atan",o,void 0)},1323470:o=>{i.hc("Sinh",o,void 0)},1323522:o=>{i.hc("Cosh",o,void 0)},1323574:o=>{i.hc("Asinh",o,void 0)},1323627:o=>{i.hc("Acosh",o,void 0)},1323680:o=>{i.hc("Atanh",o,void 0)},1323733:o=>{i.hc("Tanh",o,void 0)},1323785:o=>{i.hc("Not",o,void 0)},1323836:(o,d,f)=>{i.hc("Clip",o,{min:d,max:f})},1323905:o=>{i.hc("Clip",o,void 0)},1323957:(o,d)=>{i.hc("Elu",o,{alpha:d})},1324015:o=>{i.hc("Gelu",o,void 0)},1324067:o=>{i.hc("Relu",o,void 0)},1324119:(o,d)=>{i.hc("LeakyRelu",o,{alpha:d})},1324183:(o,d)=>{i.hc("ThresholdedRelu",o,{alpha:d})},1324253:(o,d)=>{i.hc("Cast",o,{to:d})},1324311:o=>{i.hc("Add",o,void 0)},1324362:o=>{i.hc("Sub",o,void 0)},1324413:o=>{i.hc("Mul",o,void 0)},1324464:o=>{i.hc("Div",o,void 0)},1324515:o=>{i.hc("Pow",o,void 0)},1324566:o=>{i.hc("Equal",o,void 0)},1324619:o=>{i.hc("Greater",o,void 0)},1324674:o=>{i.hc("GreaterOrEqual",o,void 0)},1324736:o=>{i.hc("Less",o,void 0)},1324788:o=>{i.hc("LessOrEqual",o,void 0)},1324847:(o,d,f,m,y)=>{i.hc("ReduceMean",o,{keepDims:!!d,noopWithEmptyAxes:!!f,axes:m?Array.from(V().subarray(Number(m)>>>0,Number(y)>>>0)):[]})},1325022:(o,d,f,m,y)=>{i.hc("ReduceMax",o,{keepDims:!!d,noopWithEmptyAxes:!!f,axes:m?Array.from(V().subarray(Number(m)>>>0,Number(y)>>>0)):[]})},1325196:(o,d,f,m,y)=>{i.hc("ReduceMin",o,{keepDims:!!d,noopWithEmptyAxes:!!f,axes:m?Array.from(V().subarray(Number(m)>>>0,Number(y)>>>0)):[]})},1325370:(o,d,f,m,y)=>{i.hc("ReduceProd",o,{keepDims:!!d,noopWithEmptyAxes:!!f,axes:m?Array.from(V().subarray(Number(m)>>>0,Number(y)>>>0)):[]})},1325545:(o,d,f,m,y)=>{i.hc("ReduceSum",o,{keepDims:!!d,noopWithEmptyAxes:!!f,axes:m?Array.from(V().subarray(Number(m)>>>0,Number(y)>>>0)):[]})},1325719:(o,d,f,m,y)=>{i.hc("ReduceL1",o,{keepDims:!!d,noopWithEmptyAxes:!!f,axes:m?Array.from(V().subarray(Number(m)>>>0,Number(y)>>>0)):[]})},1325892:(o,d,f,m,y)=>{i.hc("ReduceL2",o,{keepDims:!!d,noopWithEmptyAxes:!!f,axes:m?Array.from(V().subarray(Number(m)>>>0,Number(y)>>>0)):[]})},1326065:(o,d,f,m,y)=>{i.hc("ReduceLogSum",o,{keepDims:!!d,noopWithEmptyAxes:!!f,axes:m?Array.from(V().subarray(Number(m)>>>0,Number(y)>>>0)):[]})},1326242:(o,d,f,m,y)=>{i.hc("ReduceSumSquare",o,{keepDims:!!d,noopWithEmptyAxes:!!f,axes:m?Array.from(V().subarray(Number(m)>>>0,Number(y)>>>0)):[]})},1326422:(o,d,f,m,y)=>{i.hc("ReduceLogSumExp",o,{keepDims:!!d,noopWithEmptyAxes:!!f,axes:m?Array.from(V().subarray(Number(m)>>>0,Number(y)>>>0)):[]})},1326602:o=>{i.hc("Where",o,void 0)},1326655:(o,d,f)=>{i.hc("Transpose",o,{perm:d?Array.from(V().subarray(Number(d)>>>0,Number(f)>>>0)):[]})},1326779:(o,d,f,m)=>{i.hc("DepthToSpace",o,{blocksize:d,mode:Xe(f),format:m?"NHWC":"NCHW"})},1326912:(o,d,f,m)=>{i.hc("DepthToSpace",o,{blocksize:d,mode:Xe(f),format:m?"NHWC":"NCHW"})},1327045:(o,d,f,m,y,x,E,R,N,G,ne,ce,xe,We,kt)=>{i.hc("ConvTranspose",o,{format:N?"NHWC":"NCHW",autoPad:d,dilations:[f],group:m,kernelShape:[y],pads:[x,E],strides:[R],wIsConst:()=>!!q()[G>>>0],outputPadding:ne?Array.from(V().subarray(Number(ne)>>>0,Number(ce)>>>0)):[],outputShape:xe?Array.from(V().subarray(Number(xe)>>>0,Number(We)>>>0)):[],activation:Xe(kt)})},1327478:(o,d,f,m,y,x,E,R,N,G,ne,ce,xe,We)=>{i.hc("ConvTranspose",o,{format:R?"NHWC":"NCHW",autoPad:d,dilations:Array.from(V().subarray(Number(f)>>>0,2+(Number(f)>>>0)>>>0)),group:m,kernelShape:Array.from(V().subarray(Number(y)>>>0,2+(Number(y)>>>0)>>>0)),pads:Array.from(V().subarray(Number(x)>>>0,4+(Number(x)>>>0)>>>0)),strides:Array.from(V().subarray(Number(E)>>>0,2+(Number(E)>>>0)>>>0)),wIsConst:()=>!!q()[N>>>0],outputPadding:G?Array.from(V().subarray(Number(G)>>>0,Number(ne)>>>0)):[],outputShape:ce?Array.from(V().subarray(Number(ce)>>>0,Number(xe)>>>0)):[],activation:Xe(We)})},1328139:(o,d,f,m,y,x,E,R,N,G,ne,ce,xe,We,kt)=>{i.hc("ConvTranspose",o,{format:N?"NHWC":"NCHW",autoPad:d,dilations:[f],group:m,kernelShape:[y],pads:[x,E],strides:[R],wIsConst:()=>!!q()[G>>>0],outputPadding:ne?Array.from(V().subarray(Number(ne)>>>0,Number(ce)>>>0)):[],outputShape:xe?Array.from(V().subarray(Number(xe)>>>0,Number(We)>>>0)):[],activation:Xe(kt)})},1328572:(o,d,f,m,y,x,E,R,N,G,ne,ce,xe,We)=>{i.hc("ConvTranspose",o,{format:R?"NHWC":"NCHW",autoPad:d,dilations:Array.from(V().subarray(Number(f)>>>0,2+(Number(f)>>>0)>>>0)),group:m,kernelShape:Array.from(V().subarray(Number(y)>>>0,2+(Number(y)>>>0)>>>0)),pads:Array.from(V().subarray(Number(x)>>>0,4+(Number(x)>>>0)>>>0)),strides:Array.from(V().subarray(Number(E)>>>0,2+(Number(E)>>>0)>>>0)),wIsConst:()=>!!q()[N>>>0],outputPadding:G?Array.from(V().subarray(Number(G)>>>0,Number(ne)>>>0)):[],outputShape:ce?Array.from(V().subarray(Number(ce)>>>0,Number(xe)>>>0)):[],activation:Xe(We)})},1329233:(o,d)=>{i.hc("GlobalAveragePool",o,{format:d?"NHWC":"NCHW"})},1329324:(o,d,f,m,y,x,E,R,N,G,ne,ce,xe,We)=>{i.hc("AveragePool",o,{format:We?"NHWC":"NCHW",auto_pad:d,ceil_mode:f,count_include_pad:m,storage_order:y,dilations:x?Array.from(V().subarray(Number(x)>>>0,Number(E)>>>0)):[],kernel_shape:R?Array.from(V().subarray(Number(R)>>>0,Number(N)>>>0)):[],pads:G?Array.from(V().subarray(Number(G)>>>0,Number(ne)>>>0)):[],strides:ce?Array.from(V().subarray(Number(ce)>>>0,Number(xe)>>>0)):[]})},1329803:(o,d)=>{i.hc("GlobalAveragePool",o,{format:d?"NHWC":"NCHW"})},1329894:(o,d,f,m,y,x,E,R,N,G,ne,ce,xe,We)=>{i.hc("AveragePool",o,{format:We?"NHWC":"NCHW",auto_pad:d,ceil_mode:f,count_include_pad:m,storage_order:y,dilations:x?Array.from(V().subarray(Number(x)>>>0,Number(E)>>>0)):[],kernel_shape:R?Array.from(V().subarray(Number(R)>>>0,Number(N)>>>0)):[],pads:G?Array.from(V().subarray(Number(G)>>>0,Number(ne)>>>0)):[],strides:ce?Array.from(V().subarray(Number(ce)>>>0,Number(xe)>>>0)):[]})},1330373:(o,d)=>{i.hc("GlobalMaxPool",o,{format:d?"NHWC":"NCHW"})},1330460:(o,d,f,m,y,x,E,R,N,G,ne,ce,xe,We)=>{i.hc("MaxPool",o,{format:We?"NHWC":"NCHW",auto_pad:d,ceil_mode:f,count_include_pad:m,storage_order:y,dilations:x?Array.from(V().subarray(Number(x)>>>0,Number(E)>>>0)):[],kernel_shape:R?Array.from(V().subarray(Number(R)>>>0,Number(N)>>>0)):[],pads:G?Array.from(V().subarray(Number(G)>>>0,Number(ne)>>>0)):[],strides:ce?Array.from(V().subarray(Number(ce)>>>0,Number(xe)>>>0)):[]})},1330935:(o,d)=>{i.hc("GlobalMaxPool",o,{format:d?"NHWC":"NCHW"})},1331022:(o,d,f,m,y,x,E,R,N,G,ne,ce,xe,We)=>{i.hc("MaxPool",o,{format:We?"NHWC":"NCHW",auto_pad:d,ceil_mode:f,count_include_pad:m,storage_order:y,dilations:x?Array.from(V().subarray(Number(x)>>>0,Number(E)>>>0)):[],kernel_shape:R?Array.from(V().subarray(Number(R)>>>0,Number(N)>>>0)):[],pads:G?Array.from(V().subarray(Number(G)>>>0,Number(ne)>>>0)):[],strides:ce?Array.from(V().subarray(Number(ce)>>>0,Number(xe)>>>0)):[]})},1331497:(o,d,f,m,y)=>{i.hc("Gemm",o,{alpha:d,beta:f,transA:m,transB:y})},1331601:o=>{i.hc("MatMul",o,void 0)},1331655:(o,d,f,m)=>{i.hc("ArgMax",o,{keepDims:!!d,selectLastIndex:!!f,axis:m})},1331763:(o,d,f,m)=>{i.hc("ArgMin",o,{keepDims:!!d,selectLastIndex:!!f,axis:m})},1331871:(o,d)=>{i.hc("Softmax",o,{axis:d})},1331934:(o,d)=>{i.hc("Concat",o,{axis:d})},1331994:(o,d,f,m,y)=>{i.hc("Split",o,{axis:d,numOutputs:f,splitSizes:m?Array.from(V().subarray(Number(m)>>>0,Number(y)>>>0)):[]})},1332150:o=>{i.hc("Expand",o,void 0)},1332204:(o,d)=>{i.hc("Gather",o,{axis:Number(d)})},1332275:(o,d)=>{i.hc("GatherElements",o,{axis:Number(d)})},1332354:(o,d)=>{i.hc("GatherND",o,{batch_dims:Number(d)})},1332433:(o,d,f,m,y,x,E,R,N,G,ne)=>{i.hc("Resize",o,{antialias:d,axes:f?Array.from(V().subarray(Number(f)>>>0,Number(m)>>>0)):[],coordinateTransformMode:Xe(y),cubicCoeffA:x,excludeOutside:E,extrapolationValue:R,keepAspectRatioPolicy:Xe(N),mode:Xe(G),nearestMode:Xe(ne)})},1332795:(o,d,f,m,y,x,E)=>{i.hc("Slice",o,{starts:d?Array.from(V().subarray(Number(d)>>>0,Number(f)>>>0)):[],ends:m?Array.from(V().subarray(Number(m)>>>0,Number(y)>>>0)):[],axes:x?Array.from(V().subarray(Number(x)>>>0,Number(E)>>>0)):[]})},1333059:o=>{i.hc("Tile",o,void 0)},1333111:(o,d,f)=>{i.hc("InstanceNormalization",o,{epsilon:d,format:f?"NHWC":"NCHW"})},1333225:(o,d,f)=>{i.hc("InstanceNormalization",o,{epsilon:d,format:f?"NHWC":"NCHW"})},1333339:o=>{i.hc("Range",o,void 0)},1333392:(o,d)=>{i.hc("Einsum",o,{equation:Xe(d)})},1333473:(o,d,f,m,y)=>{i.hc("Pad",o,{mode:d,value:f,pads:m?Array.from(V().subarray(Number(m)>>>0,Number(y)>>>0)):[]})},1333616:(o,d,f,m,y,x)=>{i.hc("BatchNormalization",o,{epsilon:d,momentum:f,spatial:!!y,trainingMode:!!m,format:x?"NHWC":"NCHW"})},1333785:(o,d,f,m,y,x)=>{i.hc("BatchNormalization",o,{epsilon:d,momentum:f,spatial:!!y,trainingMode:!!m,format:x?"NHWC":"NCHW"})},1333954:(o,d,f)=>{i.hc("CumSum",o,{exclusive:Number(d),reverse:Number(f)})},1334051:(o,d,f)=>{i.hc("DequantizeLinear",o,{axis:d,blockSize:f})},1334141:(o,d,f,m,y)=>{i.hc("GridSample",o,{align_corners:d,mode:Xe(f),padding_mode:Xe(m),format:y?"NHWC":"NCHW"})},1334311:(o,d,f,m,y)=>{i.hc("GridSample",o,{align_corners:d,mode:Xe(f),padding_mode:Xe(m),format:y?"NHWC":"NCHW"})},1334481:(o,d)=>{i.hc("ScatterND",o,{reduction:Xe(d)})},1334566:(o,d,f,m,y,x,E,R,N)=>{i.hc("Attention",o,{numHeads:d,isUnidirectional:f,maskFilterValue:m,scale:y,doRotary:x,qkvHiddenSizes:E?Array.from(V().subarray(Number(R)>>>0,Number(R)+E>>>0)):[],pastPresentShareBuffer:!!N})},1334838:o=>{i.hc("BiasAdd",o,void 0)},1334893:o=>{i.hc("BiasSplitGelu",o,void 0)},1334954:o=>{i.hc("FastGelu",o,void 0)},1335010:(o,d,f,m,y,x,E,R,N,G,ne,ce,xe,We,kt,hi)=>{i.hc("Conv",o,{format:ce?"NHWC":"NCHW",auto_pad:d,dilations:f?Array.from(V().subarray(Number(f)>>>0,Number(m)>>>0)):[],group:y,kernel_shape:x?Array.from(V().subarray(Number(x)>>>0,Number(E)>>>0)):[],pads:R?Array.from(V().subarray(Number(R)>>>0,Number(N)>>>0)):[],strides:G?Array.from(V().subarray(Number(G)>>>0,Number(ne)>>>0)):[],w_is_const:()=>!!q()[Number(xe)>>>0],activation:Xe(We),activation_params:kt?Array.from(at().subarray(Number(kt)>>>0,Number(hi)>>>0)):[]})},1335594:o=>{i.hc("Gelu",o,void 0)},1335646:(o,d,f,m,y,x,E,R,N)=>{i.hc("GroupQueryAttention",o,{numHeads:d,kvNumHeads:f,scale:m,softcap:y,doRotary:x,rotaryInterleaved:E,smoothSoftmax:R,localWindowSize:N})},1335863:(o,d,f,m)=>{i.hc("LayerNormalization",o,{axis:d,epsilon:f,simplified:!!m})},1335974:(o,d,f,m)=>{i.hc("LayerNormalization",o,{axis:d,epsilon:f,simplified:!!m})},1336085:(o,d,f,m,y,x)=>{i.hc("MatMulNBits",o,{k:d,n:f,accuracyLevel:m,bits:y,blockSize:x})},1336212:(o,d,f,m,y,x)=>{i.hc("MultiHeadAttention",o,{numHeads:d,isUnidirectional:f,maskFilterValue:m,scale:y,doRotary:x})},1336371:(o,d)=>{i.hc("QuickGelu",o,{alpha:d})},1336435:(o,d,f,m,y)=>{i.hc("RotaryEmbedding",o,{interleaved:!!d,numHeads:f,rotaryEmbeddingDim:m,scale:y})},1336574:(o,d,f)=>{i.hc("SkipLayerNormalization",o,{epsilon:d,simplified:!!f})},1336676:(o,d,f)=>{i.hc("SkipLayerNormalization",o,{epsilon:d,simplified:!!f})},1336778:(o,d,f,m)=>{i.hc("GatherBlockQuantized",o,{gatherAxis:d,quantizeAxis:f,blockSize:m})},1336899:o=>{i.Wd(o)},1336933:(o,d)=>i.Zd(Number(o),Number(d),i.Cd.be,i.Cd.errors)};function Q(o,d,f){return wl(async()=>{await i.Ud(Number(o),Number(d),Number(f))})}function ye(){return typeof wasmOffsetConverter<"u"}class ie{constructor(d){Fu(this,"name","ExitStatus");this.message=`Program terminated with exit(${d})`,this.status=d}}var he=o=>{o.terminate(),o.onmessage=()=>{}},we=[],Ae=o=>{Je.length==0&&(jo(),Go(Je[0]));var d=Je.pop();if(!d)return 6;zt.push(d),Qe[o.xd]=d,d.xd=o.xd;var f={yd:"run",de:o.ce,Fd:o.Fd,xd:o.xd};return d.postMessage(f,o.Ld),0},Be=0,me=(o,d,...f)=>{for(var m=2*f.length,y=ve(),x=ma(8*m),E=x>>>3,R=0;R<f.length;R++){var N=f[R];typeof N=="bigint"?(L[E+2*R]=1n,L[E+2*R+1]=N):(L[E+2*R]=0n,mt()[E+2*R+1>>>0]=N)}return o=Ll(o,0,m,x,d),be(y),o};function it(o){if(c)return me(0,1,o);if(M=o,!(0<Be)){for(var d of zt)he(d);for(d of Je)he(d);Je=[],zt=[],Qe={},Oe=!0}S(0,new ie(o))}function nt(o){if(c)return me(1,0,o);gt(o)}var gt=o=>{if(M=o,c)throw nt(o),"unwind";it(o)},Je=[],zt=[],ui=[],Qe={},_t=o=>{var d=o.xd;delete Qe[d],Je.push(o),zt.splice(zt.indexOf(o),1),o.xd=0,ql(d)};function di(){ui.forEach(o=>o())}var Go=o=>new Promise(d=>{o.onmessage=y=>{var x=(y=y.data).yd;if(y.Ed&&y.Ed!=an()){var E=Qe[y.Ed];E?E.postMessage(y,y.Ld):I(`Internal error! Worker sent a message "${x}" to target pthread ${y.Ed}, but that thread no longer exists!`)}else x==="checkMailbox"?Qi():x==="spawnThread"?Ae(y):x==="cleanupThread"?_t(Qe[y.ee]):x==="loaded"?(o.loaded=!0,d(o)):x==="alert"?alert(`Thread ${y.fe}: ${y.text}`):y.target==="setimmediate"?o.postMessage(y):x==="callHandler"?i[y.Nd](...y.args):x&&I(`worker sent an unknown command ${x}`)},o.onerror=y=>{throw I(`worker sent an error! ${y.filename}:${y.lineno}: ${y.message}`),y};var f,m=[];for(f of[])i.propertyIsEnumerable(f)&&m.push(f);o.postMessage({yd:"load",Od:m,he:O,ie:A})});function jo(){var o=new Worker((()=>{let d=URL;return import.meta.url>"file:"&&import.meta.url<"file;"?new d("ort.bundle.min.mjs",import.meta.url):new URL(import.meta.url)})(),{type:"module",workerData:"em-pthread",name:"em-pthread"});Je.push(o)}var N_=o=>{k();var d=Ee()[o+52>>>2>>>0];o=Ee()[o+56>>>2>>>0],Fl(d,d-o),be(d)},P_=(o,d)=>{Be=0,o=ga(o,d),0<Be?M=o:ha(o)},Zi=[];function U_(o){var d=new Jn(o>>>=0);if(q()[d.wd+12>>>0]==0){var f=1;q()[d.wd+12>>>0]=f}return f=0,q()[d.wd+13>>>0]=f,Zi.push(d),jl(o),Zl(o)}var Fr=0,W_=()=>{$e(0,0);var o=Zi.pop();Gl(o.Gd),Fr=0};class Jn{constructor(d){this.Gd=d,this.wd=d-24}}function L_(o){throw Fr||(Fr=o>>>0),Fr}var ea=o=>{var d=Fr;if(!d)return fi(0),0;var f=new Jn(d);Ee()[f.wd+16>>>2>>>0]=d;var m=Ee()[f.wd+4>>>2>>>0];if(!m)return fi(0),d;for(var y of o){if(y===0||y===m)break;if(Kl(y,m,f.wd+16))return fi(y),d}return fi(m),d};function q_(){return ea([])}function V_(o){return ea([o>>>0])}function H_(o,d){return ea([o>>>0,d>>>0])}var F_=()=>{var o=Zi.pop();o||J("no exception to throw");var d=o.Gd;if(q()[o.wd+13>>>0]==0){Zi.push(o);var f=1;q()[o.wd+13>>>0]=f,f=0,q()[o.wd+12>>>0]=f}throw Fr=d};function G_(o,d,f){var m=new Jn(o>>>=0);throw d>>>=0,f>>>=0,Ee()[m.wd+16>>>2>>>0]=0,Ee()[m.wd+4>>>2>>>0]=d,Ee()[m.wd+8>>>2>>>0]=f,Fr=o}function Ko(o,d,f,m){return c?me(2,1,o,d,f,m):Zo(o,d,f,m)}function Zo(o,d,f,m){if(o>>>=0,f>>>=0,m>>>=0,p===void 0)return 6;var y=[];return c&&y.length===0?Ko(o,d>>>=0,f,m):(o={ce:f,xd:o,Fd:m,Ld:y},c?(o.yd="spawnThread",postMessage(o,y),0):Ae(o))}var Qo=typeof TextDecoder<"u"?new TextDecoder:void 0,Xo=(o,d=0,f=NaN)=>{var m=(d>>>=0)+f;for(f=d;o[f]&&!(f>=m);)++f;if(16<f-d&&o.buffer&&Qo)return Qo.decode(o.buffer instanceof ArrayBuffer?o.subarray(d,f):o.slice(d,f));for(m="";d<f;){var y=o[d++];if(128&y){var x=63&o[d++];if((224&y)==192)m+=String.fromCharCode((31&y)<<6|x);else{var E=63&o[d++];65536>(y=(240&y)==224?(15&y)<<12|x<<6|E:(7&y)<<18|x<<12|E<<6|63&o[d++])?m+=String.fromCharCode(y):(y-=65536,m+=String.fromCharCode(55296|y>>10,56320|1023&y))}}else m+=String.fromCharCode(y)}return m},Xe=(o,d)=>(o>>>=0)?Xo(ae(),o,d):"";function Yo(o,d,f){return c?me(3,1,o,d,f):0}function Jo(o,d){if(c)return me(4,1,o,d)}var el=o=>{for(var d=0,f=0;f<o.length;++f){var m=o.charCodeAt(f);127>=m?d++:2047>=m?d+=2:55296<=m&&57343>=m?(d+=4,++f):d+=3}return d},Gr=(o,d,f)=>{var m=ae();if(d>>>=0,0<f){var y=d;f=d+f-1;for(var x=0;x<o.length;++x){var E=o.charCodeAt(x);if(55296<=E&&57343>=E&&(E=65536+((1023&E)<<10)|1023&o.charCodeAt(++x)),127>=E){if(d>=f)break;m[d++>>>0]=E}else{if(2047>=E){if(d+1>=f)break;m[d++>>>0]=192|E>>6}else{if(65535>=E){if(d+2>=f)break;m[d++>>>0]=224|E>>12}else{if(d+3>=f)break;m[d++>>>0]=240|E>>18,m[d++>>>0]=128|E>>12&63}m[d++>>>0]=128|E>>6&63}m[d++>>>0]=128|63&E}}m[d>>>0]=0,o=d-y}else o=0;return o};function tl(o,d){if(c)return me(5,1,o,d)}function rl(o,d,f){if(c)return me(6,1,o,d,f)}function il(o,d,f){return c?me(7,1,o,d,f):0}function nl(o,d){if(c)return me(8,1,o,d)}function al(o,d,f){if(c)return me(9,1,o,d,f)}function sl(o,d,f,m){if(c)return me(10,1,o,d,f,m)}function ol(o,d,f,m){if(c)return me(11,1,o,d,f,m)}function ll(o,d,f,m){if(c)return me(12,1,o,d,f,m)}function ul(o){if(c)return me(13,1,o)}function dl(o,d){if(c)return me(14,1,o,d)}function cl(o,d,f){if(c)return me(15,1,o,d,f)}var pl,ur,j_=()=>J(""),Lt=o=>{for(var d="";ae()[o>>>0];)d+=pl[ae()[o++>>>0]];return d},ta={},ra={};function tr(o,d,f={}){return function(m,y,x={}){var E=y.name;if(!m)throw new ur(`type "${E}" must have a positive integer typeid pointer`);if(ra.hasOwnProperty(m)){if(x.Pd)return;throw new ur(`Cannot register type '${E}' twice`)}ra[m]=y,ta.hasOwnProperty(m)&&(y=ta[m],delete ta[m],y.forEach(R=>R()))}(o,d,f)}var fl=(o,d,f)=>{switch(d){case 1:return f?m=>q()[m>>>0]:m=>ae()[m>>>0];case 2:return f?m=>ke()[m>>>1>>>0]:m=>tt()[m>>>1>>>0];case 4:return f?m=>V()[m>>>2>>>0]:m=>Ee()[m>>>2>>>0];case 8:return f?m=>L[m>>>3]:m=>re[m>>>3];default:throw new TypeError(`invalid integer width (${d}): ${o}`)}};function K_(o,d,f){f>>>=0,tr(o>>>=0,{name:d=Lt(d>>>0),fromWireType:m=>m,toWireType:function(m,y){if(typeof y!="bigint"&&typeof y!="number")throw y=y===null?"null":(m=typeof y)=="object"||m==="array"||m==="function"?y.toString():""+y,new TypeError(`Cannot convert "${y}" to ${this.name}`);return typeof y=="number"&&(y=BigInt(y)),y},zd:dr,readValueFromPointer:fl(d,f,d.indexOf("u")==-1),Ad:null})}var dr=8;function Z_(o,d,f,m){tr(o>>>=0,{name:d=Lt(d>>>0),fromWireType:function(y){return!!y},toWireType:function(y,x){return x?f:m},zd:dr,readValueFromPointer:function(y){return this.fromWireType(ae()[y>>>0])},Ad:null})}var ia=[],rr=[];function na(o){9<(o>>>=0)&&--rr[o+1]==0&&(rr[o]=void 0,ia.push(o))}var wt=o=>{if(!o)throw new ur("Cannot use deleted val. handle = "+o);return rr[o]},Ct=o=>{switch(o){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let d=ia.pop()||rr.length;return rr[d]=o,rr[d+1]=1,d}};function aa(o){return this.fromWireType(Ee()[o>>>2>>>0])}var Q_={name:"emscripten::val",fromWireType:o=>{var d=wt(o);return na(o),d},toWireType:(o,d)=>Ct(d),zd:dr,readValueFromPointer:aa,Ad:null};function X_(o){return tr(o>>>0,Q_)}var Y_=(o,d)=>{switch(d){case 4:return function(f){return this.fromWireType(at()[f>>>2>>>0])};case 8:return function(f){return this.fromWireType(mt()[f>>>3>>>0])};default:throw new TypeError(`invalid float width (${d}): ${o}`)}};function J_(o,d,f){f>>>=0,tr(o>>>=0,{name:d=Lt(d>>>0),fromWireType:m=>m,toWireType:(m,y)=>y,zd:dr,readValueFromPointer:Y_(d,f),Ad:null})}function e0(o,d,f,m,y){if(o>>>=0,f>>>=0,d=Lt(d>>>0),y===-1&&(y=4294967295),y=R=>R,m===0){var x=32-8*f;y=R=>R<<x>>>x}var E=d.includes("unsigned")?function(R,N){return N>>>0}:function(R,N){return N};tr(o,{name:d,fromWireType:y,toWireType:E,zd:dr,readValueFromPointer:fl(d,f,m!==0),Ad:null})}function t0(o,d,f){function m(x){var E=Ee()[x>>>2>>>0];return x=Ee()[x+4>>>2>>>0],new y(q().buffer,x,E)}var y=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][d];tr(o>>>=0,{name:f=Lt(f>>>0),fromWireType:m,zd:dr,readValueFromPointer:m},{Pd:!0})}function r0(o,d){tr(o>>>=0,{name:d=Lt(d>>>0),fromWireType:function(f){for(var m,y=Ee()[f>>>2>>>0],x=f+4,E=x,R=0;R<=y;++R){var N=x+R;R!=y&&ae()[N>>>0]!=0||(E=Xe(E,N-E),m===void 0?m=E:(m+="\0",m+=E),E=N+1)}return Vt(f),m},toWireType:function(f,m){m instanceof ArrayBuffer&&(m=new Uint8Array(m));var y=typeof m=="string";if(!(y||m instanceof Uint8Array||m instanceof Uint8ClampedArray||m instanceof Int8Array))throw new ur("Cannot pass non-string to std::string");var x=y?el(m):m.length,E=sn(4+x+1),R=E+4;if(Ee()[E>>>2>>>0]=x,y)Gr(m,R,x+1);else if(y)for(y=0;y<x;++y){var N=m.charCodeAt(y);if(255<N)throw Vt(E),new ur("String has UTF-16 code units that do not fit in 8 bits");ae()[R+y>>>0]=N}else for(y=0;y<x;++y)ae()[R+y>>>0]=m[y];return f!==null&&f.push(Vt,E),E},zd:dr,readValueFromPointer:aa,Ad(f){Vt(f)}})}var hl=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,i0=(o,d)=>{for(var f=o>>1,m=f+d/2;!(f>=m)&&tt()[f>>>0];)++f;if(32<(f<<=1)-o&&hl)return hl.decode(ae().slice(o,f));for(f="",m=0;!(m>=d/2);++m){var y=ke()[o+2*m>>>1>>>0];if(y==0)break;f+=String.fromCharCode(y)}return f},n0=(o,d,f)=>{if(f??(f=2147483647),2>f)return 0;var m=d;f=(f-=2)<2*o.length?f/2:o.length;for(var y=0;y<f;++y){var x=o.charCodeAt(y);ke()[d>>>1>>>0]=x,d+=2}return ke()[d>>>1>>>0]=0,d-m},a0=o=>2*o.length,s0=(o,d)=>{for(var f=0,m="";!(f>=d/4);){var y=V()[o+4*f>>>2>>>0];if(y==0)break;++f,65536<=y?(y-=65536,m+=String.fromCharCode(55296|y>>10,56320|1023&y)):m+=String.fromCharCode(y)}return m},o0=(o,d,f)=>{if(d>>>=0,f??(f=2147483647),4>f)return 0;var m=d;f=m+f-4;for(var y=0;y<o.length;++y){var x=o.charCodeAt(y);if(55296<=x&&57343>=x&&(x=65536+((1023&x)<<10)|1023&o.charCodeAt(++y)),V()[d>>>2>>>0]=x,(d+=4)+4>f)break}return V()[d>>>2>>>0]=0,d-m},l0=o=>{for(var d=0,f=0;f<o.length;++f){var m=o.charCodeAt(f);55296<=m&&57343>=m&&++f,d+=4}return d};function u0(o,d,f){if(o>>>=0,d>>>=0,f=Lt(f>>>=0),d===2)var m=i0,y=n0,x=a0,E=R=>tt()[R>>>1>>>0];else d===4&&(m=s0,y=o0,x=l0,E=R=>Ee()[R>>>2>>>0]);tr(o,{name:f,fromWireType:R=>{for(var N,G=Ee()[R>>>2>>>0],ne=R+4,ce=0;ce<=G;++ce){var xe=R+4+ce*d;ce!=G&&E(xe)!=0||(ne=m(ne,xe-ne),N===void 0?N=ne:(N+="\0",N+=ne),ne=xe+d)}return Vt(R),N},toWireType:(R,N)=>{if(typeof N!="string")throw new ur(`Cannot pass non-string to C++ string type ${f}`);var G=x(N),ne=sn(4+G+d);return Ee()[ne>>>2>>>0]=G/d,y(N,ne+4,G+d),R!==null&&R.push(Vt,ne),ne},zd:dr,readValueFromPointer:aa,Ad(R){Vt(R)}})}function d0(o,d){tr(o>>>=0,{Qd:!0,name:d=Lt(d>>>0),zd:0,fromWireType:()=>{},toWireType:()=>{}})}function c0(o){fa(o>>>0,!u,1,!l,131072,!1),di()}var sa=o=>{if(!Oe)try{if(o(),!(0<Be))try{c?ha(M):gt(M)}catch(d){d instanceof ie||d=="unwind"||S(0,d)}}catch(d){d instanceof ie||d=="unwind"||S(0,d)}};function oa(o){o>>>=0,typeof Atomics.ge=="function"&&(Atomics.ge(V(),o>>>2,o).value.then(Qi),o+=128,Atomics.store(V(),o>>>2,1))}var Qi=()=>{var o=an();o&&(oa(o),sa(Hl))};function p0(o,d){(o>>>=0)==d>>>0?setTimeout(Qi):c?postMessage({Ed:o,yd:"checkMailbox"}):(o=Qe[o])&&o.postMessage({yd:"checkMailbox"})}var la=[];function f0(o,d,f,m,y){for(d>>>=0,m/=2,la.length=m,f=y>>>0>>>3,y=0;y<m;y++)la[y]=L[f+2*y]?L[f+2*y+1]:mt()[f+2*y+1>>>0];return(d?Y[d]:aw[o])(...la)}var h0=()=>{Be=0};function m0(o){o>>>=0,c?postMessage({yd:"cleanupThread",ee:o}):_t(Qe[o])}function g0(o){}var Xi=(o,d)=>{var f=ra[o];if(f===void 0)throw o=Pl(o),f=Lt(o),Vt(o),new ur(`${d} has unknown type ${f}`);return f},ml=(o,d,f)=>{var m=[];return o=o.toWireType(m,f),m.length&&(Ee()[d>>>2>>>0]=Ct(m)),o};function y0(o,d,f){return d>>>=0,f>>>=0,o=wt(o>>>0),d=Xi(d,"emval::as"),ml(d,f,o)}function _0(o,d){return d>>>=0,o=wt(o>>>0),(d=Xi(d,"emval::as")).toWireType(null,o)}var Yi=o=>{try{o()}catch(d){J(d)}},cr=0,qt=null,gl=0,Ji=[],yl={},_l={},w0=0,ua=null,b0=[];function wl(o){return function(d){if(!Oe){if(cr===0){var f=!1,m=!1;d((y=0)=>{if(!Oe&&(gl=y,f=!0,m)){cr=2,Yi(()=>qu(qt)),typeof MainLoop<"u"&&MainLoop.Md&&MainLoop.resume(),y=!1;try{var x=function(){var N=V()[qt+8>>>2>>>0];return N=H[_l[N]],--Be,N()}()}catch(N){x=N,y=!0}var E=!1;if(!qt){var R=ua;R&&(ua=null,(y?R.reject:R.resolve)(x),E=!0)}if(y&&!E)throw x}}),m=!0,f||(cr=1,qt=function(){var y=sn(65548),x=y+12;Ee()[y>>>2>>>0]=x,Ee()[y+4>>>2>>>0]=x+65536,x=Ji[0];var E=yl[x];return E===void 0&&(E=w0++,yl[x]=E,_l[E]=x),x=E,V()[y+8>>>2>>>0]=x,y}(),typeof MainLoop<"u"&&MainLoop.Md&&MainLoop.pause(),Yi(()=>Wu(qt)))}else cr===2?(cr=0,Yi(Vu),Vt(qt),qt=null,b0.forEach(sa)):J(`invalid state: ${cr}`);return gl}}(d=>{o().then(d)})}function v0(o){return o>>>=0,wl(async()=>{var d=await wt(o);return Ct(d)})}var en=[];function $0(o,d,f,m){return f>>>=0,m>>>=0,(o=en[o>>>0])(null,d=wt(d>>>0),f,m)}var x0={},tn=o=>{var d=x0[o];return d===void 0?Lt(o):d};function S0(o,d,f,m,y){return f>>>=0,m>>>=0,y>>>=0,(o=en[o>>>0])(d=wt(d>>>0),d[f=tn(f)],m,y)}var bl=()=>typeof globalThis=="object"?globalThis:Function("return this")();function T0(o){return(o>>>=0)==0?Ct(bl()):(o=tn(o),Ct(bl()[o]))}var C0=o=>{var d=en.length;return en.push(o),d},k0=(o,d)=>{for(var f=Array(o),m=0;m<o;++m)f[m]=Xi(Ee()[d+4*m>>>2>>>0],"parameter "+m);return f},vl=(o,d)=>Object.defineProperty(d,"name",{value:o});function E0(o,d,f){var m=(d=k0(o,d>>>0)).shift();o--;var y=`return function (obj, func, destructorsRef, args) {
`,x=0,E=[];f===0&&E.push("obj");for(var R=["retType"],N=[m],G=0;G<o;++G)E.push("arg"+G),R.push("argType"+G),N.push(d[G]),y+=`  var arg${G} = argType${G}.readValueFromPointer(args${x?"+"+x:""});
`,x+=d[G].zd;return y+=`  var rv = ${f===1?"new func":"func.call"}(${E.join(", ")});
`,m.Qd||(R.push("emval_returnValue"),N.push(ml),y+=`  return emval_returnValue(retType, destructorsRef, rv);
`),R.push(y+`};
`),o=function(ne){var ce=Function;if(!(ce instanceof Function))throw new TypeError(`new_ called with constructor type ${typeof ce} which is not a function`);var xe=vl(ce.name||"unknownFunctionName",function(){});return xe.prototype=ce.prototype,xe=new xe,(ne=ce.apply(xe,ne))instanceof Object?ne:xe}(R)(...N),f=`methodCaller<(${d.map(ne=>ne.name).join(", ")}) => ${m.name}>`,C0(vl(f,o))}function I0(o){return o=tn(o>>>0),Ct(i[o])}function z0(o,d){return d>>>=0,o=wt(o>>>0),d=wt(d),Ct(o[d])}function A0(o){9<(o>>>=0)&&(rr[o+1]+=1)}function O0(){return Ct([])}function R0(o){o=wt(o>>>0);for(var d=Array(o.length),f=0;f<o.length;f++)d[f]=o[f];return Ct(d)}function B0(o){return Ct(tn(o>>>0))}function M0(){return Ct({})}function D0(o){for(var d=wt(o>>>=0);d.length;){var f=d.pop();d.pop()(f)}na(o)}function N0(o,d,f){d>>>=0,f>>>=0,o=wt(o>>>0),d=wt(d),f=wt(f),o[d]=f}function P0(o,d){return d>>>=0,o=(o=Xi(o>>>0,"_emval_take_value")).readValueFromPointer(d),Ct(o)}function U0(o,d){o=-9007199254740992>o||9007199254740992<o?NaN:Number(o),d>>>=0,o=new Date(1e3*o),V()[d>>>2>>>0]=o.getUTCSeconds(),V()[d+4>>>2>>>0]=o.getUTCMinutes(),V()[d+8>>>2>>>0]=o.getUTCHours(),V()[d+12>>>2>>>0]=o.getUTCDate(),V()[d+16>>>2>>>0]=o.getUTCMonth(),V()[d+20>>>2>>>0]=o.getUTCFullYear()-1900,V()[d+24>>>2>>>0]=o.getUTCDay(),o=(o.getTime()-Date.UTC(o.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,V()[d+28>>>2>>>0]=o}var $l=o=>o%4==0&&(o%100!=0||o%400==0),xl=[0,31,60,91,121,152,182,213,244,274,305,335],Sl=[0,31,59,90,120,151,181,212,243,273,304,334];function W0(o,d){o=-9007199254740992>o||9007199254740992<o?NaN:Number(o),d>>>=0,o=new Date(1e3*o),V()[d>>>2>>>0]=o.getSeconds(),V()[d+4>>>2>>>0]=o.getMinutes(),V()[d+8>>>2>>>0]=o.getHours(),V()[d+12>>>2>>>0]=o.getDate(),V()[d+16>>>2>>>0]=o.getMonth(),V()[d+20>>>2>>>0]=o.getFullYear()-1900,V()[d+24>>>2>>>0]=o.getDay();var f=($l(o.getFullYear())?xl:Sl)[o.getMonth()]+o.getDate()-1|0;V()[d+28>>>2>>>0]=f,V()[d+36>>>2>>>0]=-60*o.getTimezoneOffset(),f=new Date(o.getFullYear(),6,1).getTimezoneOffset();var m=new Date(o.getFullYear(),0,1).getTimezoneOffset();o=0|(f!=m&&o.getTimezoneOffset()==Math.min(m,f)),V()[d+32>>>2>>>0]=o}function L0(o){o>>>=0;var d=new Date(V()[o+20>>>2>>>0]+1900,V()[o+16>>>2>>>0],V()[o+12>>>2>>>0],V()[o+8>>>2>>>0],V()[o+4>>>2>>>0],V()[o>>>2>>>0],0),f=V()[o+32>>>2>>>0],m=d.getTimezoneOffset(),y=new Date(d.getFullYear(),6,1).getTimezoneOffset(),x=new Date(d.getFullYear(),0,1).getTimezoneOffset(),E=Math.min(x,y);return 0>f?V()[o+32>>>2>>>0]=+(y!=x&&E==m):0<f!=(E==m)&&(y=Math.max(x,y),d.setTime(d.getTime()+6e4*((0<f?E:y)-m))),V()[o+24>>>2>>>0]=d.getDay(),f=($l(d.getFullYear())?xl:Sl)[d.getMonth()]+d.getDate()-1|0,V()[o+28>>>2>>>0]=f,V()[o>>>2>>>0]=d.getSeconds(),V()[o+4>>>2>>>0]=d.getMinutes(),V()[o+8>>>2>>>0]=d.getHours(),V()[o+12>>>2>>>0]=d.getDate(),V()[o+16>>>2>>>0]=d.getMonth(),V()[o+20>>>2>>>0]=d.getYear(),o=d.getTime(),BigInt(isNaN(o)?-1:o/1e3)}function Tl(o,d,f,m,y,x,E){return c?me(16,1,o,d,f,m,y,x,E):-52}function Cl(o,d,f,m,y,x){if(c)return me(17,1,o,d,f,m,y,x)}var ci={},q0=()=>performance.timeOrigin+performance.now();function kl(o,d){if(c)return me(18,1,o,d);if(ci[o]&&(clearTimeout(ci[o].id),delete ci[o]),!d)return 0;var f=setTimeout(()=>{delete ci[o],sa(()=>Vl(o,performance.timeOrigin+performance.now()))},d);return ci[o]={id:f,me:d},0}function V0(o,d,f,m){o>>>=0,d>>>=0,f>>>=0,m>>>=0;var y=new Date().getFullYear(),x=new Date(y,0,1).getTimezoneOffset();y=new Date(y,6,1).getTimezoneOffset();var E=Math.max(x,y);Ee()[o>>>2>>>0]=60*E,V()[d>>>2>>>0]=+(x!=y),o=(d=R=>{var N=Math.abs(R);return`UTC${0<=R?"-":"+"}${String(Math.floor(N/60)).padStart(2,"0")}${String(N%60).padStart(2,"0")}`})(x),d=d(y),y<x?(Gr(o,f,17),Gr(d,m,17)):(Gr(o,m,17),Gr(d,f,17))}var H0=()=>Date.now();function F0(o,d,f){return 0<=o&&3>=o?(o===0?o=Date.now():o=performance.timeOrigin+performance.now(),L[f>>>0>>>3]=BigInt(Math.round(1e6*o)),0):28}var da=[],El=(o,d)=>{da.length=0;for(var f;f=ae()[o++>>>0];){var m=f!=105;d+=(m&=f!=112)&&d%8?4:0,da.push(f==112?Ee()[d>>>2>>>0]:f==106?L[d>>>3]:f==105?V()[d>>>2>>>0]:mt()[d>>>3>>>0]),d+=m?8:4}return da};function G0(o,d,f){return o>>>=0,d=El(d>>>0,f>>>0),Y[o](...d)}function j0(o,d,f){return o>>>=0,d=El(d>>>0,f>>>0),Y[o](...d)}var K0=()=>{};function Z0(o,d){return I(Xe(o>>>0,d>>>0))}var Q0=()=>{throw Be+=1,"unwind"};function X0(){return 4294901760}var Y0=()=>navigator.hardwareConcurrency;function J0(){return J("Cannot use emscripten_pc_get_function without -sUSE_OFFSET_CONVERTER"),0}function ew(o){o>>>=0;var d=ae().length;if(o<=d||4294901760<o)return!1;for(var f=1;4>=f;f*=2){var m=d*(1+.2/f);m=Math.min(m,o+100663296);e:{m=(Math.min(4294901760,65536*Math.ceil(Math.max(o,m)/65536))-O.buffer.byteLength+65535)/65536|0;try{O.grow(m),k();var y=1;break e}catch{}y=void 0}if(y)return!0}return!1}var rn=()=>(J("Cannot use convertFrameToPC (needed by __builtin_return_address) without -sUSE_OFFSET_CONVERTER"),0),pi={},Il=o=>{o.forEach(d=>{rn()})};function tw(){var o=Error().stack.toString().split(`
`);return o[0]=="Error"&&o.shift(),Il(o),pi.Kd=rn(),pi.ae=o,pi.Kd}function rw(o,d,f){if(o>>>=0,d>>>=0,pi.Kd==o)var m=pi.ae;else(m=Error().stack.toString().split(`
`))[0]=="Error"&&m.shift(),Il(m);for(var y=3;m[y]&&rn()!=o;)++y;for(o=0;o<f&&m[o+y];++o)V()[d+4*o>>>2>>>0]=rn();return o}var ca,pa={},zl=()=>{if(!ca){var o,d={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:"./this.program"};for(o in pa)pa[o]===void 0?delete d[o]:d[o]=pa[o];var f=[];for(o in d)f.push(`${o}=${d[o]}`);ca=f}return ca};function Al(o,d){if(c)return me(19,1,o,d);o>>>=0,d>>>=0;var f=0;return zl().forEach((m,y)=>{var x=d+f;for(y=Ee()[o+4*y>>>2>>>0]=x,x=0;x<m.length;++x)q()[y++>>>0]=m.charCodeAt(x);q()[y>>>0]=0,f+=m.length+1}),0}function Ol(o,d){if(c)return me(20,1,o,d);o>>>=0,d>>>=0;var f=zl();Ee()[o>>>2>>>0]=f.length;var m=0;return f.forEach(y=>m+=y.length+1),Ee()[d>>>2>>>0]=m,0}function Rl(o){return c?me(21,1,o):52}function Bl(o,d,f,m){return c?me(22,1,o,d,f,m):52}function Ml(o,d,f,m){return c?me(23,1,o,d,f,m):70}var iw=[null,[],[]];function Dl(o,d,f,m){if(c)return me(24,1,o,d,f,m);d>>>=0,f>>>=0,m>>>=0;for(var y=0,x=0;x<f;x++){var E=Ee()[d>>>2>>>0],R=Ee()[d+4>>>2>>>0];d+=8;for(var N=0;N<R;N++){var G=ae()[E+N>>>0],ne=iw[o];G===0||G===10?((o===1?T:I)(Xo(ne)),ne.length=0):ne.push(G)}y+=R}return Ee()[m>>>2>>>0]=y,0}function nw(o){return o>>>0}c||function(){for(var o=i.numThreads-1;o--;)jo();we.unshift(()=>{j++,function(d){c?d():Promise.all(Je.map(Go)).then(d)}(()=>Z())})}();for(var Nl=Array(256),nn=0;256>nn;++nn)Nl[nn]=String.fromCharCode(nn);pl=Nl,ur=i.BindingError=class extends Error{constructor(o){super(o),this.name="BindingError"}},i.InternalError=class extends Error{constructor(o){super(o),this.name="InternalError"}},rr.push(0,1,void 0,1,null,1,!0,1,!1,1),i.count_emval_handles=()=>rr.length/2-5-ia.length;var H,aw=[it,nt,Ko,Yo,Jo,tl,rl,il,nl,al,sl,ol,ll,ul,dl,cl,Tl,Cl,kl,Al,Ol,Rl,Bl,Ml,Dl];(async function(){function o(m,y){return H=m.exports,H=function(){var x=H,E={};for(let[R,N]of Object.entries(x))E[R]=typeof N=="function"?(...G)=>{Ji.push(R);try{return N(...G)}finally{Oe||(Ji.pop(),qt&&cr===1&&Ji.length===0&&(cr=0,Be+=1,Yi(Lu),typeof Fibers<"u"&&Fibers.ne()))}}:N;return E}(),H=function(){var x=H,E=N=>G=>N(G)>>>0,R=N=>()=>N()>>>0;return(x=Object.assign({},x)).Cb=E(x.Cb),x.fc=R(x.fc),x.ic=E(x.ic),x.vc=E(x.vc),x.wc=R(x.wc),x.Ac=E(x.Ac),x}(),ui.push(H.jc),A=y,Z(),H}j++;var d=ee();if(i.instantiateWasm)return new Promise(m=>{i.instantiateWasm(d,(y,x)=>{o(y,x),m(y.exports)})});if(c)return new Promise(m=>{He=y=>{var x=new WebAssembly.Instance(y,ee());m(o(x,y))}});D??(D=i.locateFile?i.locateFile?i.locateFile("ort-wasm-simd-threaded.jsep.wasm",v):v+"ort-wasm-simd-threaded.jsep.wasm":new URL("/digits/assets/ort-wasm-simd-threaded.jsep-BghxtcAU.wasm",import.meta.url).href);try{var f=await async function(m){var y=D;if(!te&&typeof WebAssembly.instantiateStreaming=="function"&&!U(y))try{var x=fetch(y,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(x,m)}catch(E){I(`wasm streaming compile failed: ${E}`),I("falling back to ArrayBuffer instantiation")}return async function(E,R){try{var N=await async function(G){if(!te)try{var ne=await _(G);return new Uint8Array(ne)}catch{}if(G==D&&te)G=new Uint8Array(te);else{if(!w)throw"both async and sync fetching of the wasm failed";G=w(G)}return G}(E);return await WebAssembly.instantiate(N,R)}catch(G){I(`failed to asynchronously prepare wasm: ${G}`),J(G)}}(y,m)}(d);return o(f.instance,f.module)}catch(m){return a(m),Promise.reject(m)}})();var Pl=o=>(Pl=H.Cb)(o),Ul=()=>(Ul=H.Db)();i._OrtInit=(o,d)=>(i._OrtInit=H.Eb)(o,d),i._OrtGetLastError=(o,d)=>(i._OrtGetLastError=H.Fb)(o,d),i._OrtCreateSessionOptions=(o,d,f,m,y,x,E,R,N,G)=>(i._OrtCreateSessionOptions=H.Gb)(o,d,f,m,y,x,E,R,N,G),i._OrtAppendExecutionProvider=(o,d,f,m,y)=>(i._OrtAppendExecutionProvider=H.Hb)(o,d,f,m,y),i._OrtAddFreeDimensionOverride=(o,d,f)=>(i._OrtAddFreeDimensionOverride=H.Ib)(o,d,f),i._OrtAddSessionConfigEntry=(o,d,f)=>(i._OrtAddSessionConfigEntry=H.Jb)(o,d,f),i._OrtReleaseSessionOptions=o=>(i._OrtReleaseSessionOptions=H.Kb)(o),i._OrtCreateSession=(o,d,f)=>(i._OrtCreateSession=H.Lb)(o,d,f),i._OrtReleaseSession=o=>(i._OrtReleaseSession=H.Mb)(o),i._OrtGetInputOutputCount=(o,d,f)=>(i._OrtGetInputOutputCount=H.Nb)(o,d,f),i._OrtGetInputName=(o,d)=>(i._OrtGetInputName=H.Ob)(o,d),i._OrtGetOutputName=(o,d)=>(i._OrtGetOutputName=H.Pb)(o,d),i._OrtFree=o=>(i._OrtFree=H.Qb)(o),i._OrtCreateTensor=(o,d,f,m,y,x)=>(i._OrtCreateTensor=H.Rb)(o,d,f,m,y,x),i._OrtGetTensorData=(o,d,f,m,y)=>(i._OrtGetTensorData=H.Sb)(o,d,f,m,y),i._OrtReleaseTensor=o=>(i._OrtReleaseTensor=H.Tb)(o),i._OrtCreateRunOptions=(o,d,f,m)=>(i._OrtCreateRunOptions=H.Ub)(o,d,f,m),i._OrtAddRunConfigEntry=(o,d,f)=>(i._OrtAddRunConfigEntry=H.Vb)(o,d,f),i._OrtReleaseRunOptions=o=>(i._OrtReleaseRunOptions=H.Wb)(o),i._OrtCreateBinding=o=>(i._OrtCreateBinding=H.Xb)(o),i._OrtBindInput=(o,d,f)=>(i._OrtBindInput=H.Yb)(o,d,f),i._OrtBindOutput=(o,d,f,m)=>(i._OrtBindOutput=H.Zb)(o,d,f,m),i._OrtClearBoundOutputs=o=>(i._OrtClearBoundOutputs=H._b)(o),i._OrtReleaseBinding=o=>(i._OrtReleaseBinding=H.$b)(o),i._OrtRunWithBinding=(o,d,f,m,y)=>(i._OrtRunWithBinding=H.ac)(o,d,f,m,y),i._OrtRun=(o,d,f,m,y,x,E,R)=>(i._OrtRun=H.bc)(o,d,f,m,y,x,E,R),i._OrtEndProfiling=o=>(i._OrtEndProfiling=H.cc)(o),i._JsepOutput=(o,d,f)=>(i._JsepOutput=H.dc)(o,d,f),i._JsepGetNodeName=o=>(i._JsepGetNodeName=H.ec)(o);var an=()=>(an=H.fc)(),Vt=i._free=o=>(Vt=i._free=H.gc)(o),sn=i._malloc=o=>(sn=i._malloc=H.ic)(o),fa=(o,d,f,m,y,x)=>(fa=H.kc)(o,d,f,m,y,x),Wl=()=>(Wl=H.lc)(),Ll=(o,d,f,m,y)=>(Ll=H.mc)(o,d,f,m,y),ql=o=>(ql=H.nc)(o),ha=o=>(ha=H.oc)(o),Vl=(o,d)=>(Vl=H.pc)(o,d),Hl=()=>(Hl=H.qc)(),$e=(o,d)=>($e=H.rc)(o,d),fi=o=>(fi=H.sc)(o),Fl=(o,d)=>(Fl=H.tc)(o,d),be=o=>(be=H.uc)(o),ma=o=>(ma=H.vc)(o),ve=()=>(ve=H.wc)(),Gl=o=>(Gl=H.xc)(o),jl=o=>(jl=H.yc)(o),Kl=(o,d,f)=>(Kl=H.zc)(o,d,f),Zl=o=>(Zl=H.Ac)(o),Ql=i.dynCall_iii=(o,d,f)=>(Ql=i.dynCall_iii=H.Bc)(o,d,f),Xl=i.dynCall_vi=(o,d)=>(Xl=i.dynCall_vi=H.Cc)(o,d),ga=i.dynCall_ii=(o,d)=>(ga=i.dynCall_ii=H.Dc)(o,d),Yl=i.dynCall_vii=(o,d,f)=>(Yl=i.dynCall_vii=H.Ec)(o,d,f),Jl=i.dynCall_iiii=(o,d,f,m)=>(Jl=i.dynCall_iiii=H.Fc)(o,d,f,m),eu=i.dynCall_viii=(o,d,f,m)=>(eu=i.dynCall_viii=H.Gc)(o,d,f,m),tu=i.dynCall_iiiii=(o,d,f,m,y)=>(tu=i.dynCall_iiiii=H.Hc)(o,d,f,m,y),ru=i.dynCall_viiii=(o,d,f,m,y)=>(ru=i.dynCall_viiii=H.Ic)(o,d,f,m,y),iu=i.dynCall_viiiiii=(o,d,f,m,y,x,E)=>(iu=i.dynCall_viiiiii=H.Jc)(o,d,f,m,y,x,E),nu=i.dynCall_viiiiiii=(o,d,f,m,y,x,E,R)=>(nu=i.dynCall_viiiiiii=H.Kc)(o,d,f,m,y,x,E,R),au=i.dynCall_ji=(o,d)=>(au=i.dynCall_ji=H.Lc)(o,d),su=i.dynCall_v=o=>(su=i.dynCall_v=H.Mc)(o),ou=i.dynCall_viiiii=(o,d,f,m,y,x)=>(ou=i.dynCall_viiiii=H.Nc)(o,d,f,m,y,x),lu=i.dynCall_i=o=>(lu=i.dynCall_i=H.Oc)(o),uu=i.dynCall_fii=(o,d,f)=>(uu=i.dynCall_fii=H.Pc)(o,d,f),du=i.dynCall_viiiiiiii=(o,d,f,m,y,x,E,R,N)=>(du=i.dynCall_viiiiiiii=H.Qc)(o,d,f,m,y,x,E,R,N),cu=i.dynCall_viiiiiiiiii=(o,d,f,m,y,x,E,R,N,G,ne)=>(cu=i.dynCall_viiiiiiiiii=H.Rc)(o,d,f,m,y,x,E,R,N,G,ne),pu=i.dynCall_jiii=(o,d,f,m)=>(pu=i.dynCall_jiii=H.Sc)(o,d,f,m),fu=i.dynCall_dii=(o,d,f)=>(fu=i.dynCall_dii=H.Tc)(o,d,f),hu=i.dynCall_viiiiiiiii=(o,d,f,m,y,x,E,R,N,G)=>(hu=i.dynCall_viiiiiiiii=H.Uc)(o,d,f,m,y,x,E,R,N,G),mu=i.dynCall_viiiiiiiiiii=(o,d,f,m,y,x,E,R,N,G,ne,ce)=>(mu=i.dynCall_viiiiiiiiiii=H.Vc)(o,d,f,m,y,x,E,R,N,G,ne,ce),gu=i.dynCall_iiiiii=(o,d,f,m,y,x)=>(gu=i.dynCall_iiiiii=H.Wc)(o,d,f,m,y,x),yu=i.dynCall_iij=(o,d,f)=>(yu=i.dynCall_iij=H.Xc)(o,d,f),_u=i.dynCall_iiiiiiiiii=(o,d,f,m,y,x,E,R,N,G)=>(_u=i.dynCall_iiiiiiiiii=H.Yc)(o,d,f,m,y,x,E,R,N,G),wu=i.dynCall_iiiiiiiiiii=(o,d,f,m,y,x,E,R,N,G,ne)=>(wu=i.dynCall_iiiiiiiiiii=H.Zc)(o,d,f,m,y,x,E,R,N,G,ne),bu=i.dynCall_vij=(o,d,f)=>(bu=i.dynCall_vij=H._c)(o,d,f),vu=i.dynCall_iiif=(o,d,f,m)=>(vu=i.dynCall_iiif=H.$c)(o,d,f,m),$u=i.dynCall_iiij=(o,d,f,m)=>($u=i.dynCall_iiij=H.ad)(o,d,f,m),xu=i.dynCall_fiii=(o,d,f,m)=>(xu=i.dynCall_fiii=H.bd)(o,d,f,m),Su=i.dynCall_viiiiiiiiiiiii=(o,d,f,m,y,x,E,R,N,G,ne,ce,xe,We)=>(Su=i.dynCall_viiiiiiiiiiiii=H.cd)(o,d,f,m,y,x,E,R,N,G,ne,ce,xe,We),Tu=i.dynCall_vjiii=(o,d,f,m,y)=>(Tu=i.dynCall_vjiii=H.dd)(o,d,f,m,y),Cu=i.dynCall_vif=(o,d,f)=>(Cu=i.dynCall_vif=H.ed)(o,d,f),ku=i.dynCall_iiiiiii=(o,d,f,m,y,x,E)=>(ku=i.dynCall_iiiiiii=H.fd)(o,d,f,m,y,x,E),Eu=i.dynCall_iiiij=(o,d,f,m,y)=>(Eu=i.dynCall_iiiij=H.gd)(o,d,f,m,y),Iu=i.dynCall_iiiiiiii=(o,d,f,m,y,x,E,R)=>(Iu=i.dynCall_iiiiiiii=H.hd)(o,d,f,m,y,x,E,R),zu=i.dynCall_viiiiiiiiiiii=(o,d,f,m,y,x,E,R,N,G,ne,ce,xe)=>(zu=i.dynCall_viiiiiiiiiiii=H.id)(o,d,f,m,y,x,E,R,N,G,ne,ce,xe),Au=i.dynCall_diii=(o,d,f,m)=>(Au=i.dynCall_diii=H.jd)(o,d,f,m),Ou=i.dynCall_jiiii=(o,d,f,m,y)=>(Ou=i.dynCall_jiiii=H.kd)(o,d,f,m,y),Ru=i.dynCall_viiij=(o,d,f,m,y)=>(Ru=i.dynCall_viiij=H.ld)(o,d,f,m,y),Bu=i.dynCall_fiiii=(o,d,f,m,y)=>(Bu=i.dynCall_fiiii=H.md)(o,d,f,m,y),Mu=i.dynCall_viiif=(o,d,f,m,y)=>(Mu=i.dynCall_viiif=H.nd)(o,d,f,m,y),Du=i.dynCall_diiii=(o,d,f,m,y)=>(Du=i.dynCall_diiii=H.od)(o,d,f,m,y),Nu=i.dynCall_viiid=(o,d,f,m,y)=>(Nu=i.dynCall_viiid=H.pd)(o,d,f,m,y),Pu=i.dynCall_iiiijii=(o,d,f,m,y,x,E)=>(Pu=i.dynCall_iiiijii=H.qd)(o,d,f,m,y,x,E),Uu=i.dynCall_iiiiiij=(o,d,f,m,y,x,E)=>(Uu=i.dynCall_iiiiiij=H.rd)(o,d,f,m,y,x,E),Wu=o=>(Wu=H.sd)(o),Lu=()=>(Lu=H.td)(),qu=o=>(qu=H.ud)(o),Vu=()=>(Vu=H.vd)();function sw(o,d,f){var m=ve();try{Yl(o,d,f)}catch(y){if(be(m),y!==y+0)throw y;$e(1,0)}}function ow(o,d,f){var m=ve();try{return Ql(o,d,f)}catch(y){if(be(m),y!==y+0)throw y;$e(1,0)}}function lw(o,d){var f=ve();try{Xl(o,d)}catch(m){if(be(f),m!==m+0)throw m;$e(1,0)}}function uw(o,d){var f=ve();try{return ga(o,d)}catch(m){if(be(f),m!==m+0)throw m;$e(1,0)}}function dw(o,d,f,m){var y=ve();try{return Jl(o,d,f,m)}catch(x){if(be(y),x!==x+0)throw x;$e(1,0)}}function cw(o,d,f,m,y){var x=ve();try{ru(o,d,f,m,y)}catch(E){if(be(x),E!==E+0)throw E;$e(1,0)}}function pw(o,d,f,m,y){var x=ve();try{return tu(o,d,f,m,y)}catch(E){if(be(x),E!==E+0)throw E;$e(1,0)}}function fw(o,d,f,m){var y=ve();try{eu(o,d,f,m)}catch(x){if(be(y),x!==x+0)throw x;$e(1,0)}}function hw(o,d,f,m,y,x,E){var R=ve();try{return ku(o,d,f,m,y,x,E)}catch(N){if(be(R),N!==N+0)throw N;$e(1,0)}}function mw(o){var d=ve();try{su(o)}catch(f){if(be(d),f!==f+0)throw f;$e(1,0)}}function gw(o,d,f){var m=ve();try{return yu(o,d,f)}catch(y){if(be(m),y!==y+0)throw y;$e(1,0)}}function yw(o,d,f,m,y,x){var E=ve();try{ou(o,d,f,m,y,x)}catch(R){if(be(E),R!==R+0)throw R;$e(1,0)}}function _w(o,d,f){var m=ve();try{bu(o,d,f)}catch(y){if(be(m),y!==y+0)throw y;$e(1,0)}}function ww(o,d,f,m,y,x,E){var R=ve();try{iu(o,d,f,m,y,x,E)}catch(N){if(be(R),N!==N+0)throw N;$e(1,0)}}function bw(o,d,f,m,y,x,E,R){var N=ve();try{nu(o,d,f,m,y,x,E,R)}catch(G){if(be(N),G!==G+0)throw G;$e(1,0)}}function vw(o,d,f,m,y,x){var E=ve();try{return gu(o,d,f,m,y,x)}catch(R){if(be(E),R!==R+0)throw R;$e(1,0)}}function $w(o,d,f,m,y,x,E,R){var N=ve();try{return Iu(o,d,f,m,y,x,E,R)}catch(G){if(be(N),G!==G+0)throw G;$e(1,0)}}function xw(o,d,f,m,y,x,E,R,N,G){var ne=ve();try{hu(o,d,f,m,y,x,E,R,N,G)}catch(ce){if(be(ne),ce!==ce+0)throw ce;$e(1,0)}}function Sw(o,d,f,m,y,x,E,R,N){var G=ve();try{du(o,d,f,m,y,x,E,R,N)}catch(ne){if(be(G),ne!==ne+0)throw ne;$e(1,0)}}function Tw(o){var d=ve();try{return lu(o)}catch(f){if(be(d),f!==f+0)throw f;$e(1,0)}}function Cw(o,d,f,m,y,x,E,R,N,G){var ne=ve();try{return _u(o,d,f,m,y,x,E,R,N,G)}catch(ce){if(be(ne),ce!==ce+0)throw ce;$e(1,0)}}function kw(o,d,f){var m=ve();try{return uu(o,d,f)}catch(y){if(be(m),y!==y+0)throw y;$e(1,0)}}function Ew(o,d,f,m){var y=ve();try{return pu(o,d,f,m)}catch(x){if(be(y),x!==x+0)throw x;return $e(1,0),0n}}function Iw(o,d,f){var m=ve();try{return fu(o,d,f)}catch(y){if(be(m),y!==y+0)throw y;$e(1,0)}}function zw(o,d,f,m,y,x,E,R,N,G,ne,ce){var xe=ve();try{mu(o,d,f,m,y,x,E,R,N,G,ne,ce)}catch(We){if(be(xe),We!==We+0)throw We;$e(1,0)}}function Aw(o,d,f,m,y,x,E,R,N,G,ne){var ce=ve();try{cu(o,d,f,m,y,x,E,R,N,G,ne)}catch(xe){if(be(ce),xe!==xe+0)throw xe;$e(1,0)}}function Ow(o,d,f,m,y,x,E,R,N,G,ne){var ce=ve();try{return wu(o,d,f,m,y,x,E,R,N,G,ne)}catch(xe){if(be(ce),xe!==xe+0)throw xe;$e(1,0)}}function Rw(o,d,f,m){var y=ve();try{return vu(o,d,f,m)}catch(x){if(be(y),x!==x+0)throw x;$e(1,0)}}function Bw(o,d,f,m){var y=ve();try{return $u(o,d,f,m)}catch(x){if(be(y),x!==x+0)throw x;$e(1,0)}}function Mw(o,d,f,m){var y=ve();try{return xu(o,d,f,m)}catch(x){if(be(y),x!==x+0)throw x;$e(1,0)}}function Dw(o,d,f,m,y,x,E,R,N,G,ne,ce,xe,We){var kt=ve();try{Su(o,d,f,m,y,x,E,R,N,G,ne,ce,xe,We)}catch(hi){if(be(kt),hi!==hi+0)throw hi;$e(1,0)}}function Nw(o,d,f,m,y){var x=ve();try{Tu(o,d,f,m,y)}catch(E){if(be(x),E!==E+0)throw E;$e(1,0)}}function Pw(o,d,f){var m=ve();try{Cu(o,d,f)}catch(y){if(be(m),y!==y+0)throw y;$e(1,0)}}function Uw(o,d){var f=ve();try{return au(o,d)}catch(m){if(be(f),m!==m+0)throw m;return $e(1,0),0n}}function Ww(o,d,f,m,y){var x=ve();try{return Eu(o,d,f,m,y)}catch(E){if(be(x),E!==E+0)throw E;$e(1,0)}}function Lw(o,d,f,m,y,x,E,R,N,G,ne,ce,xe){var We=ve();try{zu(o,d,f,m,y,x,E,R,N,G,ne,ce,xe)}catch(kt){if(be(We),kt!==kt+0)throw kt;$e(1,0)}}function qw(o,d,f,m){var y=ve();try{return Au(o,d,f,m)}catch(x){if(be(y),x!==x+0)throw x;$e(1,0)}}function Vw(o,d,f,m,y){var x=ve();try{return Ou(o,d,f,m,y)}catch(E){if(be(x),E!==E+0)throw E;return $e(1,0),0n}}function Hw(o,d,f,m,y){var x=ve();try{Ru(o,d,f,m,y)}catch(E){if(be(x),E!==E+0)throw E;$e(1,0)}}function Fw(o,d,f,m,y){var x=ve();try{return Bu(o,d,f,m,y)}catch(E){if(be(x),E!==E+0)throw E;$e(1,0)}}function Gw(o,d,f,m,y){var x=ve();try{Mu(o,d,f,m,y)}catch(E){if(be(x),E!==E+0)throw E;$e(1,0)}}function jw(o,d,f,m,y){var x=ve();try{return Du(o,d,f,m,y)}catch(E){if(be(x),E!==E+0)throw E;$e(1,0)}}function Kw(o,d,f,m,y){var x=ve();try{Nu(o,d,f,m,y)}catch(E){if(be(x),E!==E+0)throw E;$e(1,0)}}function Zw(o,d,f,m,y,x,E){var R=ve();try{return Pu(o,d,f,m,y,x,E)}catch(N){if(be(R),N!==N+0)throw N;$e(1,0)}}function Qw(o,d,f,m,y,x,E){var R=ve();try{return Uu(o,d,f,m,y,x,E)}catch(N){if(be(R),N!==N+0)throw N;$e(1,0)}}return i.stackSave=()=>ve(),i.stackRestore=o=>be(o),i.stackAlloc=o=>ma(o),i.setValue=function(o,d,f="i8"){switch(f.endsWith("*")&&(f="*"),f){case"i1":case"i8":q()[o>>>0]=d;break;case"i16":ke()[o>>>1>>>0]=d;break;case"i32":V()[o>>>2>>>0]=d;break;case"i64":L[o>>>3]=BigInt(d);break;case"float":at()[o>>>2>>>0]=d;break;case"double":mt()[o>>>3>>>0]=d;break;case"*":Ee()[o>>>2>>>0]=d;break;default:J(`invalid type for setValue: ${f}`)}},i.getValue=function(o,d="i8"){switch(d.endsWith("*")&&(d="*"),d){case"i1":case"i8":return q()[o>>>0];case"i16":return ke()[o>>>1>>>0];case"i32":return V()[o>>>2>>>0];case"i64":return L[o>>>3];case"float":return at()[o>>>2>>>0];case"double":return mt()[o>>>3>>>0];case"*":return Ee()[o>>>2>>>0];default:J(`invalid type for getValue: ${d}`)}},i.UTF8ToString=Xe,i.stringToUTF8=Gr,i.lengthBytesUTF8=el,function o(){if(0<j)F=o;else if(c)n(i),z();else{for(;0<we.length;)we.shift()(i);0<j?F=o:(i.calledRun=!0,Oe||(z(),n(i)))}}(),i.PTR_SIZE=4,s}),xm=Ma,bd=(t=(e=globalThis.self)==null?void 0:e.name)==null?void 0:t.startsWith("em-pthread"),bd&&Ma()}),Da,Ms,vd,bt,Sm,cn,$d,xd,Na,Sd,Pa,Tm,Ua,Cm,bo=K(()=>{wo(),Da=typeof location>"u"?void 0:location.origin,Ms=import.meta.url>"file:"&&import.meta.url<"file;",vd=()=>{{if(Ms){let e=URL;return new URL(new e("ort.bundle.min.mjs",import.meta.url).href,Da).href}return import.meta.url}},bt=vd(),Sm=()=>{if(bt&&!bt.startsWith("blob:"))return bt.substring(0,bt.lastIndexOf("/")+1)},cn=(e,t)=>{try{let r=t??bt;return(r?new URL(e,r):new URL(e)).origin===Da}catch{return!1}},$d=(e,t)=>{let r=t??bt;try{return(r?new URL(e,r):new URL(e)).href}catch{return}},xd=(e,t)=>`${t??"./"}${e}`,Na=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},Sd=async e=>(await import(e)).default,Pa=(G$(),Fi(bm)).default,Tm=async()=>{if(!bt)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(cn(bt))return[void 0,Pa()];let e=await Na(bt);return[e,Pa(e)]},Ua=(j$(),Fi($m)).default,Cm=async(e,t,r)=>{if(!e&&!t&&Ua&&bt&&cn(bt))return[void 0,Ua];{let n="ort-wasm-simd-threaded.jsep.mjs",a=e??$d(n,t),i=r&&a&&!cn(a,t),s=i?await Na(a):a??xd(n,t);return[i?s:void 0,await Sd(s)]}}}),Wa,pn,_i,La,Td,Cd,vo,Le,Vr=K(()=>{bo(),pn=!1,_i=!1,La=!1,Td=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},Cd=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},vo=async e=>{if(pn)return Promise.resolve();if(_i)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(La)throw new Error("previous call to 'initializeWebAssembly()' failed.");_i=!0;let t=e.initTimeout,r=e.numThreads;if(!Cd())throw new Error("WebAssembly SIMD is not supported in the current environment.");let n=Td();r>1&&!n&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+r+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=r=1);let a=e.wasmPaths,i=typeof a=="string"?a:void 0,s=a==null?void 0:a.mjs,l=(s==null?void 0:s.href)??s,u=a==null?void 0:a.wasm,c=(u==null?void 0:u.href)??u,p=e.wasmBinary,[h,g]=await Cm(l,i,r>1),_=!1,w=[];if(t>0&&w.push(new Promise(b=>{setTimeout(()=>{_=!0,b()},t)})),w.push(new Promise((b,S)=>{let v={numThreads:r};if(p)v.wasmBinary=p;else if(c||i)v.locateFile=$=>c??i+$;else if(l&&l.indexOf("blob:")!==0)v.locateFile=$=>new URL($,l).href;else if(h){let $=Sm();$&&(v.locateFile=C=>$+C)}g(v).then($=>{_i=!1,pn=!0,Wa=$,b(),h&&URL.revokeObjectURL(h)},$=>{_i=!1,La=!0,S($)})})),await Promise.race(w),_)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},Le=()=>{if(pn&&Wa)return Wa;throw new Error("WebAssembly is not initialized yet.")}}),Dt,Nn,Ne,$o=K(()=>{Vr(),Dt=(e,t)=>{let r=Le(),n=r.lengthBytesUTF8(e)+1,a=r._malloc(n);return r.stringToUTF8(e,a,n),t.push(a),a},Nn=(e,t,r,n)=>{if(typeof e=="object"&&e!==null){if(r.has(e))throw new Error("Circular reference in options");r.add(e)}Object.entries(e).forEach(([a,i])=>{let s=t?t+a:a;if(typeof i=="object")Nn(i,s+".",r,n);else if(typeof i=="string"||typeof i=="number")n(s,i.toString());else if(typeof i=="boolean")n(s,i?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof i}`)})},Ne=e=>{let t=Le(),r=t.stackSave();try{let n=t.PTR_SIZE,a=t.stackAlloc(2*n);t._OrtGetLastError(a,a+n);let i=Number(t.getValue(a,n===4?"i32":"i64")),s=t.getValue(a+n,"*"),l=s?t.UTF8ToString(s):"";throw new Error(`${e} ERROR_CODE: ${i}, ERROR_MESSAGE: ${l}`)}finally{t.stackRestore(r)}}}),km,K$=K(()=>{Vr(),$o(),km=e=>{let t=Le(),r=0,n=[],a=e||{};try{if((e==null?void 0:e.logSeverityLevel)===void 0)a.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log serverity level is not valid: ${e.logSeverityLevel}`);if((e==null?void 0:e.logVerbosityLevel)===void 0)a.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);(e==null?void 0:e.terminate)===void 0&&(a.terminate=!1);let i=0;return(e==null?void 0:e.tag)!==void 0&&(i=Dt(e.tag,n)),r=t._OrtCreateRunOptions(a.logSeverityLevel,a.logVerbosityLevel,!!a.terminate,i),r===0&&Ne("Can't create run options."),(e==null?void 0:e.extra)!==void 0&&Nn(e.extra,"",new WeakSet,(s,l)=>{let u=Dt(s,n),c=Dt(l,n);t._OrtAddRunConfigEntry(r,u,c)!==0&&Ne(`Can't set a run config entry: ${s} - ${l}.`)}),[r,n]}catch(i){throw r!==0&&t._OrtReleaseRunOptions(r),n.forEach(s=>t._free(s)),i}}}),kd,Ed,Id,wi,zd,Em,Z$=K(()=>{Vr(),$o(),kd=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},Ed=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},Id=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(r=>(typeof r=="string"?r:r.name)==="webgpu")&&(e.enableMemPattern=!1)},wi=(e,t,r,n)=>{let a=Dt(t,n),i=Dt(r,n);Le()._OrtAddSessionConfigEntry(e,a,i)!==0&&Ne(`Can't set a session config entry: ${t} - ${r}.`)},zd=async(e,t,r)=>{for(let n of t){let a=typeof n=="string"?n:n.name,i=[];switch(a){case"webnn":if(a="WEBNN",typeof n!="string"){let p=n==null?void 0:n.deviceType;p&&wi(e,"deviceType",p,r)}break;case"webgpu":if(a="JS",typeof n!="string"){let p=n;if(p!=null&&p.preferredLayout){if(p.preferredLayout!=="NCHW"&&p.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${p.preferredLayout}`);wi(e,"preferredLayout",p.preferredLayout,r)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${a}`)}let s=Dt(a,r),l=i.length,u=0,c=0;if(l>0){u=Le()._malloc(l*Le().PTR_SIZE),r.push(u),c=Le()._malloc(l*Le().PTR_SIZE),r.push(c);for(let p=0;p<l;p++)Le().setValue(u+p*Le().PTR_SIZE,i[p][0],"*"),Le().setValue(c+p*Le().PTR_SIZE,i[p][1],"*")}await Le()._OrtAppendExecutionProvider(e,s,u,c,l)!==0&&Ne(`Can't append execution provider: ${a}.`)}},Em=async e=>{let t=Le(),r=0,n=[],a=e||{};Id(a);try{let i=kd(a.graphOptimizationLevel??"all"),s=Ed(a.executionMode??"sequential"),l=typeof a.logId=="string"?Dt(a.logId,n):0,u=a.logSeverityLevel??2;if(!Number.isInteger(u)||u<0||u>4)throw new Error(`log serverity level is not valid: ${u}`);let c=a.logVerbosityLevel??0;if(!Number.isInteger(c)||c<0||c>4)throw new Error(`log verbosity level is not valid: ${c}`);let p=typeof a.optimizedModelFilePath=="string"?Dt(a.optimizedModelFilePath,n):0;if(r=t._OrtCreateSessionOptions(i,!!a.enableCpuMemArena,!!a.enableMemPattern,s,!!a.enableProfiling,0,l,u,c,p),r===0&&Ne("Can't create session options."),a.executionProviders&&await zd(r,a.executionProviders,n),a.enableGraphCapture!==void 0){if(typeof a.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${a.enableGraphCapture}`);wi(r,"enableGraphCapture",a.enableGraphCapture.toString(),n)}if(a.freeDimensionOverrides)for(let[h,g]of Object.entries(a.freeDimensionOverrides)){if(typeof h!="string")throw new Error(`free dimension override name must be a string: ${h}`);if(typeof g!="number"||!Number.isInteger(g)||g<0)throw new Error(`free dimension override value must be a non-negative integer: ${g}`);let _=Dt(h,n);t._OrtAddFreeDimensionOverride(r,_,g)!==0&&Ne(`Can't set a free dimension override: ${h} - ${g}.`)}return a.extra!==void 0&&Nn(a.extra,"",new WeakSet,(h,g)=>{wi(r,h,g,n)}),[r,n]}catch(i){throw r!==0&&t._OrtReleaseSessionOptions(r)!==0&&Ne("Can't release session options."),n.forEach(s=>t._free(s)),i}}}),Qr,Br,Mr,xo,Pn,So,To,Ds,ge=K(()=>{Qr=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},Br=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},Mr=(e,t)=>{let r=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],n=typeof t=="number"?t:t.reduce((a,i)=>a*i,1);return r>0?Math.ceil(n*r):void 0},xo=e=>{switch(e){case"float16":return typeof Float16Array<"u"&&Float16Array.from?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},Pn=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},So=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",To=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Ds=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),Co,Im=K(()=>{wo(),Co=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let r=t.headers.get("Content-Length"),n=r?parseInt(r,10):0;if(n<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let a=t.body.getReader(),i;try{i=new ArrayBuffer(n)}catch(l){if(l instanceof RangeError){let u=Math.ceil(n/65536);i=new WebAssembly.Memory({initial:u,maximum:u}).buffer}else throw l}let s=0;for(;;){let{done:l,value:u}=await a.read();if(l)break;let c=u.byteLength;new Uint8Array(i,s,c).set(u),s+=c}return new Uint8Array(i,0,n)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),Ad,Od,Rd,Bd,ko,Md,Re,lr=K(()=>{ge(),Ad=["V","I","W","E","F"],Od=(e,t)=>{console.log(`[${Ad[e]},${new Date().toISOString()}]${t}`)},ko=(e,t)=>{Rd=e,Bd=t},Md=(e,t)=>{let r=Pn(e),n=Pn(Rd);r>=n&&Od(r,typeof t=="function"?t():t)},Re=(...e)=>{Bd&&Md(...e)}}),Dd,si,B,Un,zm,Am,Om,Se=K(()=>{Dd=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},si=class{static calcShape(e,t,r=!1){let n=e.length,a=t.length;if(n===0)return t;if(a===0)return e;let i=Math.max(e.length,t.length),s=new Array(i);if(r){if(n<2||a<2)return;let l=Dd.calcMatMulShape([e[n-2],e[n-1]],[t[a-2],t[a-1]]);if(l===void 0)return;[s[i-2],s[i-1]]=l}for(let l=r?3:1;l<=i;l++){let u=n-l<0?1:e[n-l],c=a-l<0?1:t[a-l];if(u!==c&&u>1&&c>1)return;let p=Math.max(u,c);if(u&&c)s[i-l]=Math.max(u,c);else{if(p>1)return;s[i-l]=0}}return s}static isValidBroadcast(e,t){let r=e.length,n=t.length;if(r>n)return!1;for(let a=1;a<=r;a++)if(e[r-a]!==1&&e[r-a]!==t[n-a])return!1;return!0}},B=class En{static size(t){return En.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,r=4){let n=t.length;if(n===0)return[];let a=new Array(n),i=n-1;for(;i>=0;){if(t[i]%r===0){a[i]=t[i]/r;break}if(r%t[i]!==0)throw new Error("cannot convert shape");a[i]=1,r/=t[i],i--}for(i--;i>=0;i--)a[i]=t[i];return a}static sizeFromDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return En.getSizeFromDimensionRange(t,r,t.length)}static sizeToDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeToDimension as Tensor has ${t.length} dimensions.`);return En.getSizeFromDimensionRange(t,0,r)}static getSizeFromDimensionRange(t,r,n){let a=1;for(let i=r;i<n;i++){if(t[i]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");a*=Number(t[i])}return a}static computeStrides(t){let r=t.length;if(r===0)return[];if(r===1)return[1];let n=new Array(r);n[r-1]=1,n[r-2]=t[r-1];for(let a=r-3;a>=0;--a)n[a]=n[a+1]*t[a+1];return n}static normalizeAxis(t,r){if(t<-r&&t>=r)throw new Error("unsupported axis for this operation.");return t<0?t+r:t}static normalizeAxes(t,r){return t.map(n=>this.normalizeAxis(n,r??t.length))}static sortBasedOnPerm(t,r){return r?r.map(n=>t[n]):t.slice().reverse()}static padShape(t,r){let n=t.length;return t.map((a,i)=>a+r[i]+r[i+n])}static areEqual(t,r){return t.length!==r.length?!1:t.every((n,a)=>n===r[a])}},Un=class zi{static adjustPoolAttributes(t,r,n,a,i,s){if(!t&&n.length!==r.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let l=0;l<r.length-2;l++)l>=n.length?n.push(r[l+2]):n[l]=r[l+2];for(let l=0;l<n.length;l++)if(l<a.length){if(a[l]<0)throw new Error("strides should be greater than or equal to 1")}else a.push(1);for(let l=0;l<n.length;l++)if(l<i.length){if(i[l]<0)throw new Error("dilations should be greater than or equal to 1")}else i.push(1);for(let l=0;l<n.length*2;l++)if(l<s.length){if(s[l]<0)throw new Error("pad should be greater than or equal to 1")}else s.push(0);for(let l=0;l<n.length;l++){if(n[l]<=0)throw new Error("kernel shapes need to be greater than 0");if(s[l]>=n[l]||s[l+n.length]>=n[l])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,r,n,a,i,s,l){if(l){if(i.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(r.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(a.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let u=0;u<t.length-2;u++)zi.adjustPadAndReturnShape(t[u+(s?1:2)],r[u],n[u],a[u],i,u,u+t.length-2,l)}}static computePoolOutputShape(t,r,n,a,i,s,l){if(r.length<=0)throw new Error("input shape must be of size greater than 0");let u=[r[0],r[1]];return zi.computeShapeHelper(t,r,u,n,a,i,s,l),u}static computeConvOutputShape(t,r,n,a,i,s,l){if(t.length<=0||r.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let u=[t[0],r[0]];return zi.computeShapeHelper(!1,t,u,n,a,i,s,l),u}static computeShapeHelper(t,r,n,a,i,s,l,u){if(t)for(let c=0;c<r.length-2;c++)n.push(1);else for(let c=0;c<r.length-2;c++)n.push(zi.adjustPadAndReturnShape(r[c+2],a[c],i[c],s[c],l,c,c+r.length-2,u))}static adjustPadAndReturnShape(t,r,n,a,i,s,l,u){let c=n*(a-1)+1;if(u&&u!=="NOTSET")switch(u){case"VALID":return i[s]=0,i[l]=0,Math.floor((t-c)/r+1);case"SAME_LOWER":case"SAME_UPPER":if(n!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let p=((t+r-1)/r-1)*r+a-t;return i[s]=Math.floor(u==="SAME_LOWER"?(p+1)/2:p/2),i[l]=p-i[s],Math.floor((t+p-a)/r+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+i[s]+i[l]-c)/r+1)}},zm=class{static getShapeOfGemmResult(e,t,r,n,a){if(e.length!==2||r.length!==2)throw new Error("shape need to be of size 2");let i,s,l;t?(i=e[1],s=e[0]):(i=e[0],s=e[1]);let u=-1;if(n?(l=r[0],u=1):(l=r[1],u=0),r[u]!==s)throw new Error("dimension mismatch");if(i<=0||l<=0||s<=0)throw new Error("invalid shape specified");if(a&&!si.isValidBroadcast(a,[i,l]))throw new Error("gemm: invalid bias shape for broadcast");return[i,l,s]}},Am=-34028234663852886e22,Om=34028234663852886e22}),Eo,Rm=K(()=>{ge(),Eo=(e,t)=>new(xo(t))(e)}),Nd,qa,Pd,Va,Ha,Fa,Ud,Bm,Q$=K(()=>{lr(),Nd=1,qa=()=>Nd++,Pd=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),Va=(e,t)=>{let r=Pd.get(e);if(!r)throw new Error("Unsupported data type.");return t.length>0?Math.ceil(t.reduce((n,a)=>n*a)*r/8):0},Ha=class{constructor(e){this.sessionId=e.sessionId,this.mlContext=e.context,this.mlTensor=e.tensor,this.dataType=e.dataType,this.tensorShape=e.shape}get tensor(){return this.mlTensor}get type(){return this.dataType}get shape(){return this.tensorShape}get byteLength(){return Va(this.dataType,this.tensorShape)}destroy(){Re("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,r){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===r.length&&this.tensorShape.every((n,a)=>n===r[a])}},Fa=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,r,n){let a=this.tensorManager.getMLContext(e);if(this.wrapper){if(this.wrapper.canReuseTensor(a,t,r))return this.wrapper.tensor;if(n){if(this.wrapper.byteLength!==Va(t,r))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let i=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,r,i,!0,!0),n&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){if(this.wrapper)if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(e);return}else Re("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor();this.activeUpload?this.activeUpload.set(e):this.activeUpload=new Uint8Array(e)}async download(e){if(this.activeUpload)if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(this.activeUpload):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(this.activeUpload);return}else return this.activeUpload.buffer;if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},Ud=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw new Error("MLContext not found for session.");return t}reserveTensorId(){let e=qa();return this.tensorTrackersById.set(e,new Fa(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,r,n,a){Re("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${r}, shape: ${n}, copyOld: ${a}}`);let i=this.tensorTrackersById.get(t);if(!i)throw new Error("Tensor not found.");return i.ensureTensor(e,r,n,a)}upload(e,t){let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");r.upload(t)}async download(e,t){Re("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t==null?void 0:t.byteLength}}`);let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");return r.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,r,n){let a=this.getMLContext(e),i=qa(),s=new Ha({sessionId:e,context:a,tensor:t,dataType:r,shape:n});return this.tensorTrackersById.set(i,new Fa(this,s)),this.externalTensors.add(s),i}async getCachedTensor(e,t,r,n,a,i){let s=this.getMLContext(e);for(let[u,c]of this.freeTensors.entries())if(c.canReuseTensor(s,t,r)){Re("verbose",()=>`[WebNN] Reusing tensor {dataType: ${t}, shape: ${r}}`);let p=this.freeTensors.splice(u,1)[0];return p.sessionId=e,p}Re("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${t}, shape: ${r}}`);let l=await s.createTensor({dataType:t,shape:r,dimensions:r,usage:n,writable:a,readable:i});return new Ha({sessionId:e,context:s,tensor:l,dataType:t,shape:r})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},Bm=(...e)=>new Ud(...e)}),fn,Wd,Mm,X$=K(()=>{ge(),Vr(),Rm(),Q$(),lr(),fn=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),Wd=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let r=Object.keys(e).sort(),n=Object.keys(t).sort();return r.length===n.length&&r.every((a,i)=>a===n[i]&&e[a]===t[a])},Mm=class{constructor(e){this.tensorManager=Bm(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.temporaryGraphInputs=[],this.temporarySessionTensorIds=new Map,ko(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){Re("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){Re("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let r of t)Re("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${r}}`),this.tensorManager.releaseTensorId(r);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let r=this.mlContextCache.findIndex(n=>n.gpuDevice===e);if(r!==-1)return this.mlContextCache[r].mlContext;{let n=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:n}),n}}else if(e===void 0){let r=this.mlContextCache.findIndex(n=>n.options===void 0&&n.gpuDevice===void 0);if(r!==-1)return this.mlContextCache[r].mlContext;{let n=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:n}),n}}let t=this.mlContextCache.findIndex(r=>Wd(r.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let r=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:r}),r}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let r=this.sessionIdsByMLContext.get(t);r||(r=new Set,this.sessionIdsByMLContext.set(t,r)),r.add(e),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e);let r=this.sessionIdsByMLContext.get(t);if(r.delete(e),r.size===0){this.sessionIdsByMLContext.delete(t);let n=this.mlContextCache.findIndex(a=>a.mlContext===t);n!==-1&&this.mlContextCache.splice(n,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){Re("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,r,n,a){let i=fn.get(r);if(!i)throw new Error(`Unsupported ONNX data type: ${r}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,i,n,a)}async createTemporaryTensor(e,t,r){Re("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${r}}`);let n=fn.get(t);if(!n)throw new Error(`Unsupported ONNX data type: ${t}`);let a=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,a,n,r,!1);let i=this.temporarySessionTensorIds.get(e);return i?i.push(a):this.temporarySessionTensorIds.set(e,[a]),a}uploadTensor(e,t){if(!Le().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");Re("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let r=await this.tensorManager.download(e);return Eo(r,t)}}registerMLTensor(e,t,r,n){let a=fn.get(r);if(!a)throw new Error(`Unsupported ONNX data type: ${r}`);let i=this.tensorManager.registerTensor(e,t,a,n);return Re("verbose",()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${a}, dimensions: ${n}} -> {tensorId: ${i}}`),i}registerMLConstant(e,t,r,n,a,i){if(!i)throw new Error("External mounted files are not available.");let s=e;e.startsWith("./")&&(s=e.substring(2));let l=i.get(s);if(!l)throw new Error(`File with name ${s} not found in preloaded files.`);if(t+r>l.byteLength)throw new Error("Out of bounds: data offset and length exceed the external file data size.");let u=l.slice(t,t+r).buffer,c;switch(a.dataType){case"float32":c=new Float32Array(u);break;case"float16":c=typeof Float16Array<"u"&&Float16Array.from?new Float16Array(u):new Uint16Array(u);break;case"int32":c=new Int32Array(u);break;case"uint32":c=new Uint32Array(u);break;case"int64":c=new BigInt64Array(u);break;case"uint64":c=new BigUint64Array(u);break;case"int8":c=new Int8Array(u);break;case"int4":case"uint4":case"uint8":c=new Uint8Array(u);break;default:throw new Error(`Unsupported data type: ${a.dataType} in creating WebNN Constant from external data.`)}return Re("verbose",()=>`[WebNN] registerMLConstant {dataType: ${a.dataType}, shape: ${a.shape}}}`),n.constant(a,c)}registerGraphInput(e){this.temporaryGraphInputs.push(e)}isGraphInput(e,t){let r=this.sessionGraphInputs.get(e);return r?r.includes(t):!1}flush(){}}}),Io=K(()=>{}),Ga,hn,mn,Ld,qd,ja,Ns,Vd,Dm,Y$=K(()=>{lr(),Io(),Ga=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),hn=[],mn=e=>Math.ceil(Number(e)/16)*16,Ld=e=>{for(let t=0;t<hn.length;t++){let r=hn[t];if(e<=r)return r}return Math.ceil(e/16)*16},qd=1,ja=()=>qd++,Ns=async(e,t,r,n)=>{let a=mn(r),i=e.device.createBuffer({size:a,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let s=e.getCommandEncoder();e.endComputePass(),s.copyBufferToBuffer(t,0,i,0,a),e.flush(),await i.mapAsync(GPUMapMode.READ);let l=i.getMappedRange();if(n){let u=n();return u.set(new Uint8Array(l,0,r)),u}else return new Uint8Array(l.slice(0,r))}finally{i.destroy()}},Vd=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of Ga)hn.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let r=t.buffer,n=t.byteOffset,a=t.byteLength,i=mn(a),s=this.storageCache.get(e);if(!s)throw new Error("gpu data for uploading does not exist");if(Number(s.originalSize)!==a)throw new Error(`inconsistent data size. gpu data size=${s.originalSize}, data size=${a}`);let l=this.backend.device.createBuffer({mappedAtCreation:!0,size:i,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),u=l.getMappedRange();new Uint8Array(u).set(new Uint8Array(r,n,a)),l.unmap();let c=this.backend.device.createCommandEncoder();c.copyBufferToBuffer(l,0,s.gpuData.buffer,0,i),this.backend.device.queue.submit([c.finish()]),l.destroy(),Re("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let r=this.storageCache.get(e);if(!r)throw new Error("source gpu data for memcpy does not exist");let n=this.storageCache.get(t);if(!n)throw new Error("destination gpu data for memcpy does not exist");if(r.originalSize!==n.originalSize)throw new Error("inconsistent source and destination gpu data size");let a=mn(r.originalSize),i=this.backend.getCommandEncoder();this.backend.endComputePass(),i.copyBufferToBuffer(r.gpuData.buffer,0,n.gpuData.buffer,0,a)}registerExternalBuffer(e,t,r){let n;if(r){if(n=r[0],e===r[1])return Re("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${n}, buffer is the same, skip.`),n;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else n=ja();return this.storageCache.set(n,{gpuData:{id:n,type:0,buffer:e},originalSize:t}),Re("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${n}, registered.`),n}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),Re("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let r=Ld(e),n,a=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,i=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(a||i){let l=(a?this.freeBuffers:this.freeUniformBuffers).get(r);l?l.length>0?n=l.pop():n=this.backend.device.createBuffer({size:r,usage:t}):n=this.backend.device.createBuffer({size:r,usage:t})}else n=this.backend.device.createBuffer({size:r,usage:t});let s={id:ja(),type:0,buffer:n};return this.storageCache.set(s.id,{gpuData:s,originalSize:Number(e)}),Re("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${s.id}`),s}get(e){var t;return(t=this.storageCache.get(e))==null?void 0:t.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,r=this.storageCache.get(t);if(!r){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return Re("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${r.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(r.gpuData.buffer),r.originalSize}async download(e,t){let r=this.storageCache.get(Number(e));if(!r)throw new Error("data does not exist");await Ns(this.backend,r.gpuData.buffer,r.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=Ga.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let r=this.freeBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let r=this.freeUniformBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(r=>{r.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(Re("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(r=>{r.gpuData.buffer.destroy()}),this.storageCache=new Map)}},Dm=(...e)=>new Vd(...e)}),Hd,De,Ze=K(()=>{Hd=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},De=e=>new Hd(e)}),oi,gn,et,st,le,Ge,Ps,Jr,vr,oe,bi,P,se,Nm,zo,Fd,Pm,Ce=K(()=>{ge(),Se(),oi=64,gn=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},et=(e,t=1)=>{let r=gn(e,t);return typeof r=="string"?r:r[0]},st=(e,t=1)=>{let r=gn(e,t);return typeof r=="string"?r:r[1]},le=(...e)=>{let t=[];return e.forEach(r=>{r.length!==0&&t.push({type:12,data:r},{type:12,data:B.computeStrides(r)})}),t},Ge=e=>e%4===0?4:e%2===0?2:1,Ps=(e="f32",t,r="0")=>!t||t===1?`${e}(${r})`:`vec${t}<${e}>(${r})`,Jr=(e,t,r)=>e==="f32"?r:t===1?`f32(${r})`:`vec${t}<f32>(${r})`,vr=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,oe=(e,t,r,n)=>e.startsWith("uniforms.")&&r>4?typeof t=="string"?n==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:n==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:r>1?`${e}[${t}]`:e,bi=(e,t,r,n,a)=>{let i=typeof r=="number",s=i?r:r.length,l=[...new Array(s).keys()],u=s<2?"u32":s<=4?`vec${s}<u32>`:`array<u32, ${s}>`,c=gn(t,a),p=typeof c=="string"?c:c[1],h=typeof c=="string"?c:c[0],g={indices:u,value:p,storage:h,tensor:t},_=U=>typeof U=="string"?U:`${U}u`,w={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},b=i?"uniforms.":"",S=`${b}${e}_shape`,v=`${b}${e}_strides`,$="";for(let U=0;U<s-1;U++)$+=`
    let dim${U} = current / ${oe(v,U,s)};
    let rest${U} = current % ${oe(v,U,s)};
    indices[${U}] = dim${U};
    current = rest${U};
    `;$+=`indices[${s-1}] = current;`;let C=s<2?"":`
  fn o2i_${e}(offset: u32) -> ${g.indices} {
    var indices: ${g.indices};
    var current = offset;
    ${$}
    return indices;
  }`,T=U=>(w.offsetToIndices=!0,s<2?U:`o2i_${e}(${U})`),I=[];if(s>=2)for(let U=s-1;U>=0;U--)I.push(`${oe(v,U,s)} * (indices[${U}])`);let O=s<2?"":`
  fn i2o_${e}(indices: ${g.indices}) -> u32 {
    return ${I.join("+")};
  }`,A=U=>(w.indicesToOffset=!0,s<2?U:`i2o_${e}(${U})`),M=(...U)=>s===0?"0u":`${g.indices}(${U.map(_).join(",")})`,W=(U,q)=>s<2?`${U}`:`${oe(U,q,s)}`,X=(U,q,ae)=>s<2?`${U}=${ae};`:`${oe(U,q,s)}=${ae};`,de={},ue=(U,q)=>{w.broadcastedIndicesToOffset=!0;let ae=`${q.name}broadcastedIndicesTo${e}Offset`;if(ae in de)return`${ae}(${U})`;let ke=[];for(let tt=s-1;tt>=0;tt--){let V=q.indicesGet("outputIndices",tt+q.rank-s);ke.push(`${W(v,tt)} * (${V} % ${W(S,tt)})`)}return de[ae]=`fn ${ae}(outputIndices: ${q.type.indices}) -> u32 {
             return ${ke.length>0?ke.join("+"):"0u"};
           }`,`${ae}(${U})`},fe=(U,q)=>(()=>{if(g.storage===g.value)return`${e}[${U}]=${q};`;if(g.storage==="vec2<u32>"&&g.value==="i32")return`${e}[${U}]=vec2<u32>(u32(${q}), select(0u, 0xFFFFFFFFu, ${q} < 0));`;if(g.storage==="vec2<u32>"&&g.value==="u32")return`${e}[${U}]=vec2<u32>(u32(${q}), 0u);`;if(g.storage==="u32"&&g.value==="vec4<bool>")return`${e}[${U}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${q}));`;throw new Error(`not supported combination of storage type ${g.storage} and value type ${g.value} yet`)})(),_e=U=>(()=>{if(g.storage===g.value)return`${e}[${U}]`;if(g.storage==="vec2<u32>"&&g.value==="i32")return`i32(${e}[${U}].x)`;if(g.storage==="vec2<u32>"&&g.value==="u32")return`u32(${e}[${U}].x)`;if(g.storage==="u32"&&g.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${U}] & 0xFFu), bool(${e}[${U}] & 0xFF00u), bool(${e}[${U}] & 0xFF0000u), bool(${e}[${U}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${g.storage} and value type ${g.value} yet`)})(),Te=s<2?"":`
  fn get_${e}ByIndices(indices: ${g.indices}) -> ${p} {
    return ${_e(`i2o_${e}(indices)`)};
  }`,L=s<2?"":(()=>{let U=l.map(ae=>`d${ae}: u32`).join(", "),q=l.map(ae=>`d${ae}`).join(", ");return`
  fn get_${e}(${U}) -> ${p} {
    return get_${e}ByIndices(${M(q)});
  }`})(),re=(...U)=>{if(U.length!==s)throw new Error(`indices length must be ${s}`);let q=U.map(_).join(",");return s===0?_e("0u"):s===1?_e(q[0]):(w.get=!0,w.getByIndices=!0,w.indicesToOffset=!0,`get_${e}(${q})`)},pe=U=>s<2?_e(U):(w.getByIndices=!0,w.indicesToOffset=!0,`get_${e}ByIndices(${U})`),te=s<2?"":`
  fn set_${e}ByIndices(indices: ${g.indices}, value: ${p}) {
    ${fe(`i2o_${e}(indices)`,"value")}
  }`,Oe=s<2?"":(()=>{let U=l.map(ae=>`d${ae}: u32`).join(", "),q=l.map(ae=>`d${ae}`).join(", ");return`
  fn set_${e}(${U}, value: ${p}) {
    set_${e}ByIndices(${M(q)}, value);
  }`})();return{impl:()=>{let U=[],q=!1;return w.offsetToIndices&&(U.push(C),q=!0),w.indicesToOffset&&(U.push(O),q=!0),w.broadcastedIndicesToOffset&&(Object.values(de).forEach(ae=>U.push(ae)),q=!0),w.set&&(U.push(Oe),q=!0),w.setByIndices&&(U.push(te),q=!0),w.get&&(U.push(L),q=!0),w.getByIndices&&(U.push(Te),q=!0),!i&&q&&U.unshift(`const ${S} = ${g.indices}(${r.join(",")});`,`const ${v} = ${g.indices}(${B.computeStrides(r).join(",")});`),U.join(`
`)},type:g,offsetToIndices:T,indicesToOffset:A,broadcastedIndicesToOffset:ue,indices:M,indicesGet:W,indicesSet:X,set:(...U)=>{if(U.length!==s+1)throw new Error(`indices length must be ${s}`);let q=U[s];if(typeof q!="string")throw new Error("value must be string");let ae=U.slice(0,s).map(_).join(",");return s===0?fe("0u",q):s===1?fe(ae[0],q):(w.set=!0,w.setByIndices=!0,w.indicesToOffset=!0,`set_${e}(${ae}, ${q})`)},setByOffset:fe,setByIndices:(U,q)=>s<2?fe(U,q):(w.setByIndices=!0,w.indicesToOffset=!0,`set_${e}ByIndices(${U}, ${q});`),get:re,getByOffset:_e,getByIndices:pe,usage:n,name:e,strides:v,shape:S,rank:s}},P=(e,t,r,n=1)=>bi(e,t,r,"input",n),se=(e,t,r,n=1)=>bi(e,t,r,"output",n),Nm=(e,t,r)=>bi(e,t,r,"atomicOutput",1),zo=(e,t,r,n=1)=>bi(e,t,r,"internal",n),Fd=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=oi){let t=typeof e=="number"?e:e[0],r=typeof e=="number"?1:e[1],n=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||r>this.limits.maxComputeWorkgroupSizeY||n>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${r}, ${n}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*r*n>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${r}, ${n}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let a=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,i=a?`@builtin(global_invocation_id) global_id : vec3<u32>,
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
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},Pm=(e,t)=>new Fd(e,t)}),Gd,Ka,jd,Kd,Zd,Qd,Tt,Um,Wm,Tr=K(()=>{ge(),Se(),Ze(),Ce(),Gd=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},Ka=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),jd=(e,t)=>B.sortBasedOnPerm(e,Ka(e.length,t)),Kd=(e,t,r,n)=>{let a=`fn perm(i: ${n.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`;for(let i=0;i<t;++i)a+=`a[${e[i]}]=i[${i}];`;return a+="return a;}"},Zd=(e,t)=>{let r=[],n=[];for(let a=0;a<e.length;++a)e[a]!==1&&r.push(e[a]),e[t[a]]!==1&&n.push(t[a]);return{newShape:r,newPerm:n}},Qd=(e,t)=>{let r=0;for(let n=0;n<e.length;++n)if(t[e[n]]!==1){if(e[n]<r)return!1;r=e[n]}return!0},Tt=(e,t)=>{let r=e.dataType,n=e.dims.length,a=Ka(n,t),i=jd(e.dims,a),s=e.dims,l=i,u=n<2||Qd(a,e.dims),c;if(u)return c=w=>{let b=P("input",r,s,4),S=se("output",r,l,4);return`
  ${w.registerUniform("output_size","u32").declareVariables(b,S)}
  ${w.mainStart()}
    ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let w=B.size(i);return{outputs:[{dims:i,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(w/64/4)},programUniforms:[{type:12,data:Math.ceil(w/4)}]}},getShaderSource:c};let{newShape:p,newPerm:h}=Zd(e.dims,a),g=B.areEqual(h,[2,3,1]),_=B.areEqual(h,[3,1,2]);if(p.length===2||g||_){s=g?[p[0],p[1]*p[2]]:_?[p[0]*p[1],p[2]]:p,l=[s[1],s[0]];let w=16;return c=b=>{let S=P("a",r,s.length),v=se("output",r,l.length);return`
  ${b.registerUniform("output_size","u32").declareVariables(S,v)}
  var<workgroup> tile : array<array<${v.type.value}, ${w+1}>, ${w}>;
  ${b.mainStart([w,w,1])}
    let stride = (uniforms.output_shape[1] - 1) / ${w} + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * ${w}u + local_id.x;
    let input_row = workgroup_id_x * ${w}u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${S.getByIndices(`${S.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * ${w}u + local_id.x;
    let output_row = workgroup_id_y * ${w}u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${v.setByIndices(`${v.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let b=B.size(i);return{outputs:[{dims:i,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(l[1]/w),y:Math.ceil(l[0]/w)},programUniforms:[{type:12,data:b},...le(s,l)]}},getShaderSource:c}}return c=w=>{let b=P("a",r,s.length),S=se("output",r,l.length);return`
  ${w.registerUniform("output_size","u32").declareVariables(b,S)}

  ${Kd(a,n,b,S)}

  ${w.mainStart()}
    ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${S.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${S.setByOffset("global_idx",b.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let w=B.size(i);return{outputs:[{dims:i,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(w/64)},programUniforms:[{type:12,data:w},...le(s,l)]}},getShaderSource:c}},Um=(e,t)=>{Gd(e.inputs,t.perm),e.compute(Tt(e.inputs[0],t.perm))},Wm=e=>De({perm:e.perm})}),Xd,Yd,Jd,ec,tc,rc,ic,nc,ac,sc,At,Lm,qm,Vm,Hm,Fm,Gm,jm,Km,Zm,Qm,J$=K(()=>{ge(),Se(),Ce(),Ao(),Tr(),Xd={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},Yd={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},Jd={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},ec={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},tc=(e,t)=>{let r=[];for(let n=t-e;n<t;++n)r.push(n);return r},rc=(e,t)=>{let r=[],n=e.length;for(let i=0;i<n;i++)t.indexOf(i)===-1&&r.push(e[i]);let a=t.map(i=>e[i]);return[r,a]},ic=(e,t)=>{let r=e.length+t.length,n=[],a=0;for(let i=0;i<r;i++)t.indexOf(i)===-1?n.push(e[a++]):n.push(1);return n},nc=(e,t)=>{for(let r=0;r<e.length;++r)if(e[e.length-r-1]!==t-1-r)return!1;return!0},ac=(e,t)=>{let r=[];if(!nc(e,t)){for(let n=0;n<t;++n)e.indexOf(n)===-1&&r.push(n);e.forEach(n=>r.push(n))}return r},sc=(e,t,r,n,a,i,s)=>{let l=r[0].dims,u=B.size(i),c=B.size(s),p=P("_A",r[0].dataType,l),h=se("output",a,i),g=64;u===1&&(g=256);let _=`
          var<workgroup> aBestValues : array<f32, ${g}>;
       `,w=b=>`
        ${b.registerUniform("reduceSize","u32").declareVariables(p,h)}
        ${_}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${b.mainStart(g)}

          let outputIndex = global_idx / ${g};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${Jd[n]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${g}) {
           let candidate = f32(${p.getByOffset("offset + k")});
           bestValue = ${Xd[n]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${g}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${Yd[n]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${h.setByOffset("outputIndex",`${n==="mean"?`${h.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${h.type.storage}(${ec[n]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${g}`,inputDependencies:["type"]},getShaderSource:w,getRunData:()=>({outputs:[{dims:i,dataType:a}],dispatchGroup:{x:u},programUniforms:[{type:12,data:c}]})}},At=(e,t,r,n)=>{let a=e.inputs.length===1?r:Us(e.inputs,r),i=a.axes;i.length===0&&!a.noopWithEmptyAxes&&(i=e.inputs[0].dims.map((_,w)=>w));let s=B.normalizeAxes(i,e.inputs[0].dims.length),l=s,u=e.inputs[0],c=ac(l,e.inputs[0].dims.length);c.length>0&&(u=e.compute(Tt(e.inputs[0],c),{inputs:[0],outputs:[-1]})[0],l=tc(l.length,u.dims.length));let[p,h]=rc(u.dims,l),g=p;a.keepDims&&(g=ic(p,s)),e.compute(sc(t,a.cacheKey,[u],n,e.inputs[0].dataType,g,h),{inputs:[u]})},Lm=(e,t)=>{At(e,"ReduceMeanShared",t,"mean")},qm=(e,t)=>{At(e,"ReduceL1Shared",t,"l1")},Vm=(e,t)=>{At(e,"ReduceL2Shared",t,"l2")},Hm=(e,t)=>{At(e,"ReduceLogSumExpShared",t,"logSumExp")},Fm=(e,t)=>{At(e,"ReduceMaxShared",t,"max")},Gm=(e,t)=>{At(e,"ReduceMinShared",t,"min")},jm=(e,t)=>{At(e,"ReduceProdShared",t,"prod")},Km=(e,t)=>{At(e,"ReduceSumShared",t,"sum")},Zm=(e,t)=>{At(e,"ReduceSumSquareShared",t,"sumSquare")},Qm=(e,t)=>{At(e,"ReduceLogSumShared",t,"logSum")}}),Ot,oc,Wn,Us,Rt,lc,uc,dc,cc,pc,fc,hc,mc,gc,yc,Bt,Xm,Ym,Jm,eg,tg,rg,ig,ng,ag,sg,Ao=K(()=>{ge(),Se(),Ze(),Ce(),J$(),Ot=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},oc=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],Wn=(e,t,r,n,a,i,s=!1,l=!1)=>{let u=[],c=r[0].dims,p=c.length,h=B.normalizeAxes(a,p),g=!l&&h.length===0;c.forEach((b,S)=>{g||h.indexOf(S)>=0?s&&u.push(1):u.push(b)});let _=u.length,w=B.size(u);return{name:e,shaderCache:t,getShaderSource:b=>{let S=[],v=P("_A",r[0].dataType,p),$=se("output",i,_),C=n(v,$,h),T=C[2];for(let I=0,O=0;I<p;I++)g||h.indexOf(I)>=0?(s&&O++,T=`for(var j${I}: u32 = 0; j${I} < ${c[I]}; j${I}++) {
                  ${C[2].includes("last_index")?`let last_index = j${I};`:""}
                  ${v.indicesSet("input_indices",I,`j${I}`)}
                  ${T}
                }`):(S.push(`${v.indicesSet("input_indices",I,$.indicesGet("output_indices",O))};`),O++);return`

        ${b.registerUniform("output_size","u32").declareVariables(v,$)}

        ${b.mainStart()}
          ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${v.type.indices};
          let output_indices = ${$.offsetToIndices("global_idx")};

          ${S.join(`
`)}
          ${C[0]}       // init ops for reduce max/min
          ${C[1]}
          ${T}
          ${C[3]}
          ${C.length===4?$.setByOffset("global_idx","value"):C.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:u,dataType:i}],dispatchGroup:{x:Math.ceil(w/64)},programUniforms:[{type:12,data:w},...le(c,u)]})}},Us=(e,t)=>{let r=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(n=>r.push(Number(n))),De({axes:r,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},Rt=(e,t,r,n)=>{let a=e.inputs,i=a.length===1?r:Us(a,r);e.compute(Wn(t,{hint:i.cacheKey,inputDependencies:["rank"]},[a[0]],i.noopWithEmptyAxes&&i.axes.length===0?oc:n,i.axes,a[0].dataType,i.keepDims,i.noopWithEmptyAxes),{inputs:[0]})},lc=(e,t)=>{Ot(e.inputs),Rt(e,"ReduceLogSum",t,(r,n)=>[`var value = ${n.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,"value = log(value);"])},uc=(e,t)=>{Ot(e.inputs),Rt(e,"ReduceL1",t,(r,n)=>[`var value = ${n.type.storage}(0);`,"",`value += abs(${r.getByIndices("input_indices")});`,""])},dc=(e,t)=>{Ot(e.inputs),Rt(e,"ReduceL2",t,(r,n)=>[`var t = ${n.type.value}(0); var value = ${n.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},cc=(e,t)=>{Ot(e.inputs),Rt(e,"ReduceLogSumExp",t,(r,n)=>[`var value = ${n.type.storage}(0);`,"",`value += exp(${r.getByIndices("input_indices")});`,"value = log(value);"])},pc=(e,t)=>{Ot(e.inputs),Rt(e,"ReduceMax",t,(r,n,a)=>{let i=[];for(let s=0;s<r.rank;s++)(a.indexOf(s)>=0||a.length===0)&&i.push(r.indicesSet("input_indices",s,0));return[`${i.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = max(value, ${r.getByIndices("input_indices")});`,""]})},fc=(e,t)=>{Ot(e.inputs),Rt(e,"ReduceMean",t,(r,n,a)=>{let i=1;for(let s=0;s<r.rank;s++)(a.indexOf(s)>=0||a.length===0)&&(i*=e.inputs[0].dims[s]);return["var sum = f32(0);","",`sum += f32(${r.getByIndices("input_indices")});`,`let value = ${n.type.value}(sum / ${i});`]})},hc=(e,t)=>{Ot(e.inputs),Rt(e,"ReduceMin",t,(r,n,a)=>{let i=[];for(let s=0;s<r.rank;s++)(a.indexOf(s)>=0||a.length===0)&&i.push(`input_indices[${s}] = 0;`);return[`${i.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = min(value, ${r.getByIndices("input_indices")});`,""]})},mc=(e,t)=>{Ot(e.inputs),Rt(e,"ReduceProd",t,(r,n)=>[`var value = ${n.type.storage}(1);`,"",`value *= ${r.getByIndices("input_indices")};`,""])},gc=(e,t)=>{Ot(e.inputs),Rt(e,"ReduceSum",t,(r,n)=>[`var value = ${n.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,""])},yc=(e,t)=>{Ot(e.inputs),Rt(e,"ReduceSumSquare",t,(r,n)=>[`var t = ${n.type.value}(0); var value = ${n.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += t * t;`,""])},Bt=(e,t,r)=>{if(t.length===0)return r;let n=1,a=1;for(let i=0;i<t.length;i++)t.indexOf(i)===-1?n*=e[i]:a*=e[i];return a<32&&n>1024},Xm=(e,t)=>{Bt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?fc(e,t):Lm(e,t)},Ym=(e,t)=>{Bt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?uc(e,t):qm(e,t)},Jm=(e,t)=>{Bt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?dc(e,t):Vm(e,t)},eg=(e,t)=>{Bt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?cc(e,t):Hm(e,t)},tg=(e,t)=>{Bt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?pc(e,t):Fm(e,t)},rg=(e,t)=>{Bt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?hc(e,t):Gm(e,t)},ig=(e,t)=>{Bt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?mc(e,t):jm(e,t)},ng=(e,t)=>{Bt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?gc(e,t):Km(e,t)},ag=(e,t)=>{Bt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?yc(e,t):Zm(e,t)},sg=(e,t)=>{Bt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?lc(e,t):Qm(e,t)}}),Za,og,lg,Ws,e1=K(()=>{ge(),Ze(),Ao(),Za=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},og=(e,t)=>{Za(e.inputs);let r=(n,a,i)=>{let s=[];for(let l=0;l<n.rank;l++)(i.indexOf(l)>=0||i.length===0)&&s.push(`input_indices[${l}] = 0;`);return[`${s.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${n.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${n.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",a.setByOffset("global_idx","best_index")]};e.compute(Wn("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},lg=(e,t)=>{Za(e.inputs);let r=(n,a,i)=>{let s=[];for(let l=0;l<n.rank;l++)(i.indexOf(l)>=0||i.length===0)&&s.push(`input_indices[${l}] = 0;`);return[`${s.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${n.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${n.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",a.setByOffset("global_idx","best_index")]};e.compute(Wn("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},Ws=e=>De(e)}),_c,yn,wc,bc,vc,Gi,$c,ug,Oo=K(()=>{ge(),Se(),Io(),Ce(),_c=(e,t)=>{let r=e[0],n=e[1],a=e[2],i=e[3],s=e[4],l=e[5];if(s&&l)throw new Error("Attention cannot have both past and attention_bias");if(r.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let u=r.dims[0],c=r.dims[1],p=r.dims[2];if(a.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(n.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(n.dims[0]!==p)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(a.dims[0]!==n.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let h=a.dims[0]/3,g=h,_=g;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let C of t.qkvHiddenSizes)if(C%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");h=t.qkvHiddenSizes[0],g=t.qkvHiddenSizes[1],_=t.qkvHiddenSizes[2]}let w=c;if(h!==g)throw new Error("qkv_hidden_sizes first element should be same as the second");if(a.dims[0]!==h+g+_)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let b=0;if(s){if(g!==_)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(s.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(s.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(s.dims[1]!==u)throw new Error('Input "past" second dimension must be batch_size');if(s.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(s.dims[4]!==g/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(b=s.dims[3])}let S=w+b,v=-1,$=0;if(i)throw new Error("Mask not supported");if(s)throw new Error("past is not supported");if(l){if(l.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(l.dims[0]!==u||l.dims[1]!==t.numHeads||l.dims[2]!==c||l.dims[3]!==S)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:u,sequenceLength:c,pastSequenceLength:b,kvSequenceLength:w,totalSequenceLength:S,maxSequenceLength:v,inputHiddenSize:p,hiddenSize:h,vHiddenSize:_,headSize:Math.floor(h/t.numHeads),vHeadSize:Math.floor(_/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:$,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},yn=(e,t,r)=>t&&e?`
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
    `,wc=(e,t,r,n,a,i,s,l)=>{let u=Ge(s?1:i),c=64,p=i/u;p<c&&(c=32);let h=Math.ceil(i/u/c),g=[{type:12,data:t},{type:12,data:r},{type:12,data:n},{type:12,data:a},{type:12,data:p},{type:12,data:h}],_=et(e.dataType,u),w=st(1,u),b=["type"];s&&b.push("type"),l&&b.push("type");let S=v=>{let $=se("x",e.dataType,e.dims,u),C=[$],T=s?P("seq_lens",s.dataType,s.dims):void 0;T&&C.push(T);let I=l?P("total_sequence_length_input",l.dataType,l.dims):void 0;I&&C.push(I);let O=st(e.dataType),A=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${c}>;
  var<workgroup> thread_sum: array<f32, ${c}>;
  ${v.registerUniforms(A).declareVariables(...C)}
  ${v.mainStart([c,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${yn(T,I,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${c}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${s?"u32(past_sequence_length + workgroup_id.y + 1)":"total_sequence_length"};
    var thread_max_vector = ${w}(-3.402823e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      thread_max_vector = max(${w}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(u){case 1:return"thread_max_vector";case 2:return"max(thread_max_vector.x, thread_max_vector.y)";case 4:return"max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))";default:throw new Error(`Unsupported components: ${u}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.402823e+38f);
    for (var i = 0u; i < ${c}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${w}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      sum_vector += exp(${w}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(u){case 1:return"sum_vector";case 2:return"sum_vector.x + sum_vector.y";case 4:return"sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w";default:throw new Error(`Unsupported components: ${u}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${c}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        x[offset + i] = ${$.type.value}(${O}(1.0) / ${O}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${w}(x[offset + i]);
        x[offset + i] = ${$.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${s?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${$.type.value}(${O}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${c};${_};${u}`,inputDependencies:b},getShaderSource:S,getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:a,z:t*r},programUniforms:g})}},bc=(e,t,r,n,a,i,s,l,u)=>{let c=s+i.kvSequenceLength,p=[i.batchSize,i.numHeads,i.sequenceLength,c],h=e>1&&n,g=i.kvNumHeads?i.kvNumHeads:i.numHeads,_=h?[i.batchSize,g,c,i.headSize]:void 0,w=i.nReps?i.nReps:1,b=i.scale===0?1/Math.sqrt(i.headSize):i.scale,S=Ge(i.headSize),v=i.headSize/S,$=12,C={x:Math.ceil(c/$),y:Math.ceil(i.sequenceLength/$),z:i.batchSize*i.numHeads},T=[{type:12,data:i.sequenceLength},{type:12,data:v},{type:12,data:c},{type:12,data:i.numHeads},{type:12,data:i.headSize},{type:1,data:b},{type:12,data:s},{type:12,data:i.kvSequenceLength},{type:12,data:w}],I=h&&n&&B.size(n.dims)>0,O=["type","type"];I&&O.push("type"),a&&O.push("type"),l&&O.push("type"),u&&O.push("type");let A=[{dims:p,dataType:t.dataType,gpuDataType:0}];h&&A.push({dims:_,dataType:t.dataType,gpuDataType:0});let M=W=>{let X=P("q",t.dataType,t.dims,S),de=P("key",r.dataType,r.dims,S),ue=[X,de];if(I){let te=P("past_key",n.dataType,n.dims,S);ue.push(te)}a&&ue.push(P("attention_bias",a.dataType,a.dims));let fe=l?P("seq_lens",l.dataType,l.dims):void 0;fe&&ue.push(fe);let _e=u?P("total_sequence_length_input",u.dataType,u.dims):void 0;_e&&ue.push(_e);let Te=se("output",t.dataType,p),L=[Te];h&&L.push(se("present_key",t.dataType,_,S));let re=st(1,S),pe=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${$}u;

  var<workgroup> tileQ: array<${X.type.storage}, ${$*$}>;
  var<workgroup> tileK: array<${X.type.storage}, ${$*$}>;
  ${W.registerUniforms(pe).declareVariables(...ue,...L)}
  ${W.mainStart([$,$,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${w===1?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${w===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${yn(fe,_e,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${I&&h?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${h?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${re}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${I&&h?`
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
          value += ${re}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(S){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${S}`)}})()};
        output[outputIdx] = ${Te.type.value} (sum * uniforms.alpha) + ${a?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${S};${a!==void 0};${n!==void 0};${e}`,inputDependencies:O},getRunData:()=>({outputs:A,dispatchGroup:C,programUniforms:T}),getShaderSource:M}},vc=(e,t,r,n,a,i,s=void 0,l=void 0)=>{let u=i+a.kvSequenceLength,c=a.nReps?a.nReps:1,p=a.vHiddenSize*c,h=e>1&&n,g=a.kvNumHeads?a.kvNumHeads:a.numHeads,_=h?[a.batchSize,g,u,a.headSize]:void 0,w=[a.batchSize,a.sequenceLength,p],b=12,S={x:Math.ceil(a.vHeadSize/b),y:Math.ceil(a.sequenceLength/b),z:a.batchSize*a.numHeads},v=[{type:12,data:a.sequenceLength},{type:12,data:u},{type:12,data:a.vHeadSize},{type:12,data:a.numHeads},{type:12,data:a.headSize},{type:12,data:p},{type:12,data:i},{type:12,data:a.kvSequenceLength},{type:12,data:c}],$=h&&n&&B.size(n.dims)>0,C=["type","type"];$&&C.push("type"),s&&C.push("type"),l&&C.push("type");let T=[{dims:w,dataType:t.dataType,gpuDataType:0}];h&&T.push({dims:_,dataType:t.dataType,gpuDataType:0});let I=O=>{let A=P("probs",t.dataType,t.dims),M=P("v",r.dataType,r.dims),W=[A,M];$&&W.push(P("past_value",n.dataType,n.dims));let X=s?P("seq_lens",s.dataType,s.dims):void 0;s&&W.push(X);let de=l?P("total_sequence_length_input",l.dataType,l.dims):void 0;l&&W.push(de);let ue=[se("output",t.dataType,w)];h&&ue.push(se("present_value",t.dataType,_));let fe=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${b}u;
  var<workgroup> tileQ: array<${A.type.value}, ${b*b}>;
  var<workgroup> tileV: array<${A.type.value}, ${b*b}>;
  ${O.registerUniforms(fe).declareVariables(...W,...ue)}
  ${O.mainStart([b,b,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${c===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${c===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${yn(X,de,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${$&&h?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${h?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${A.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${$&&h?`
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
  }`};return{name:"AttentionScore",shaderCache:{hint:`${n!==void 0};${e}`,inputDependencies:C},getRunData:()=>({outputs:T,dispatchGroup:S,programUniforms:v}),getShaderSource:I}},Gi=(e,t,r,n,a,i,s,l,u,c,p=void 0,h=void 0)=>{let g=Math.min(e.outputCount,1+(s?1:0)+(l?1:0)),_=g>1?c.pastSequenceLength:0,w=_+c.kvSequenceLength,b=u&&B.size(u.dims)>0?u:void 0,S=[t,r];g>1&&s&&B.size(s.dims)>0&&S.push(s),b&&S.push(b),p&&S.push(p),h&&S.push(h);let v=e.compute(bc(g,t,r,s,b,c,_,p,h),{inputs:S,outputs:g>1?[-1,1]:[-1]})[0];e.compute(wc(v,c.batchSize,c.numHeads,_,c.sequenceLength,w,p,h),{inputs:p&&h?[v,p,h]:[v],outputs:[]});let $=[v,n];g>1&&l&&B.size(l.dims)>0&&$.push(l),p&&$.push(p),h&&$.push(h),e.compute(vc(g,v,n,l,c,_,p,h),{inputs:$,outputs:g>1?[0,2]:[0]})},$c=(e,t)=>{let r=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],n=t.sequenceLength,a=t.inputHiddenSize,i=t.headSize,s=12,l={x:Math.ceil(t.headSize/s),y:Math.ceil(t.sequenceLength/s),z:t.batchSize*t.numHeads},u=[e.inputs[0],e.inputs[1],e.inputs[2]],c=[{type:12,data:n},{type:12,data:a},{type:12,data:i},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],p=h=>{let g=se("output_q",u[0].dataType,r),_=se("output_k",u[0].dataType,r),w=se("output_v",u[0].dataType,r),b=P("input",u[0].dataType,u[0].dims),S=P("weight",u[1].dataType,u[1].dims),v=P("bias",u[2].dataType,u[2].dims),$=b.type.storage,C=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${s}u;
  var<workgroup> tileInput: array<${$}, ${s*s}>;
  var<workgroup> tileWeightQ: array<${$}, ${s*s}>;
  var<workgroup> tileWeightK: array<${$}, ${s*s}>;
  var<workgroup> tileWeightV: array<${$}, ${s*s}>;
  ${h.registerUniforms(C).declareVariables(b,S,v,g,_,w)}
  ${h.mainStart([s,s,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${$}(0);
    var valueK = ${$}(0);
    var valueV = ${$}(0);
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
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:l,programUniforms:c}),getShaderSource:p},{inputs:u,outputs:[-1,-1,-1]})},ug=(e,t)=>{let r=_c(e.inputs,t),[n,a,i]=$c(e,r);return Gi(e,n,a,i,e.inputs[4],void 0,void 0,void 0,e.inputs[5],r)}}),xc,Sc,Tc,dg,t1=K(()=>{Wt(),ge(),Se(),Ze(),Ce(),xc=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let r=(n,a,i)=>{let s=a.length;if(s!==n.length)throw new Error(`${i}: num dimensions != ${s}`);a.forEach((l,u)=>{if(l!==n[u])throw new Error(`${i}: dim[${u}] do not match`)})};if(e[0].dims.length>1){let n=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);r(e[1].dims,n,"Invalid input scale"),r(e[2].dims,n,"Invalid input B"),r(e[3].dims,n,"Invalid input mean"),r(e[4].dims,n,"Invalid input var")}else r(e[1].dims,[1],"Invalid input scale"),r(e[2].dims,[1],"Invalid input B"),r(e[3].dims,[1],"Invalid input mean"),r(e[4].dims,[1],"Invalid input var")},Sc=(e,t)=>{let{epsilon:r,spatial:n,format:a}=t,i=e[0].dims,s=n?Ge(i[i.length-1]):1,l=a==="NHWC"&&i.length>1?s:1,u=B.size(i)/s,c=n,p=c?i.length:i,h=P("x",e[0].dataType,e[0].dims,s),g=P("scale",e[1].dataType,e[1].dims,l),_=P("bias",e[2].dataType,e[2].dims,l),w=P("inputMean",e[3].dataType,e[3].dims,l),b=P("inputVar",e[4].dataType,e[4].dims,l),S=se("y",e[0].dataType,p,s),v=()=>{let C="";if(n)C=`let cOffset = ${i.length===1?"0u":a==="NHWC"?`outputIndices[${i.length-1}] / ${s}`:"outputIndices[1]"};`;else if(a==="NCHW")C=`
            ${S.indicesSet("outputIndices","0","0")}
            let cOffset = ${S.indicesToOffset("outputIndices")};`;else{C=`var cIndices = ${g.type.indices}(0);
                       cIndices[0] = outputIndices[${i.length-1}];`;for(let T=1;T<g.rank;T++)C+=`cIndices[${T}] = outputIndices[${T}];`;C+=`let cOffset = ${g.indicesToOffset("cIndices")};`}return C},$=C=>`
  const epsilon = ${r};
  ${C.registerUniform("outputSize","u32").declareVariables(h,g,_,w,b,S)}
  ${C.mainStart()}
  ${C.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${S.offsetToIndices(`global_idx * ${s}`)};
    ${v()}
    let scale = ${g.getByOffset("cOffset")};
    let bias = ${_.getByOffset("cOffset")};
    let inputMean = ${w.getByOffset("cOffset")};
    let inputVar = ${b.getByOffset("cOffset")};
    let x = ${h.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${S.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${n}_${s}`,inputDependencies:c?["rank","type","type","type","type"]:void 0},getShaderSource:$,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:c?[{type:12,data:u},...le(i)]:[{type:12,data:u}]})}},Tc=e=>De(e),dg=(e,t)=>{let{inputs:r,outputCount:n}=e,a=Tc({...t,outputCount:n});if(Fe.webgpu.validateInputContent&&xc(r,a),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(Sc(r,a))}}),Cc,kc,cg,r1=K(()=>{Se(),Ce(),Cc=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},kc=e=>{let t=e[0].dims,r=e[0].dims[2],n=B.size(t)/4,a=e[0].dataType,i=P("input",a,t,4),s=P("bias",a,[r],4),l=P("residual",a,t,4),u=se("output",a,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(n/64)}}),getShaderSource:c=>`
  const channels = ${r}u / 4;
  ${c.declareVariables(i,s,l,u)}

  ${c.mainStart()}
    ${c.guardAgainstOutOfBoundsWorkgroupSizes(n)}
    let value = ${i.getByOffset("global_idx")}
      + ${s.getByOffset("global_idx % channels")} + ${l.getByOffset("global_idx")};
    ${u.setByOffset("global_idx","value")}
  }`}},cg=e=>{Cc(e.inputs),e.compute(kc(e.inputs))}}),Ec,Me,pg,fg,hg,mg,gg,yg,_g,wg,bg,Ic,vg,$g,xg,Sg,Ai,Tg,In,Cg,kg,Eg,Ig,zg,Ag,Og,Rg,Bg,Mg,Dg,Ng,Pg,Ug,Wg,Lg,Qa,qg,Ls,qs,Vg,Hg,Fg,zc,Ac,Gg,Ro=K(()=>{ge(),Se(),Ze(),Ce(),Ec=(e,t,r,n,a,i,s)=>{let l=Math.ceil(t/4),u="";typeof a=="string"?u=`${a}(a)`:u=a("a");let c=P("inputData",r,[l],4),p=se("outputData",n,[l],4),h=[{name:"vec_size",type:"u32"}];return s&&h.push(...s),`
      ${e.registerUniforms(h).declareVariables(c,p)}

  ${i??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${c.getByOffset("global_idx")};
    ${p.setByOffset("global_idx",u)}
  }`},Me=(e,t,r,n,a,i=e.dataType,s,l)=>{let u=[{type:12,data:Math.ceil(B.size(e.dims)/4)}];return s&&u.push(...s),{name:t,shaderCache:{hint:a,inputDependencies:["type"]},getShaderSource:c=>Ec(c,B.size(e.dims),e.dataType,i,r,n,l),getRunData:c=>({outputs:[{dims:e.dims,dataType:i}],dispatchGroup:{x:Math.ceil(B.size(c[0].dims)/64/4)},programUniforms:u})}},pg=e=>{e.compute(Me(e.inputs[0],"Abs","abs"))},fg=e=>{e.compute(Me(e.inputs[0],"Acos","acos"))},hg=e=>{e.compute(Me(e.inputs[0],"Acosh","acosh"))},mg=e=>{e.compute(Me(e.inputs[0],"Asin","asin"))},gg=e=>{e.compute(Me(e.inputs[0],"Asinh","asinh"))},yg=e=>{e.compute(Me(e.inputs[0],"Atan","atan"))},_g=e=>{e.compute(Me(e.inputs[0],"Atanh","atanh"))},wg=e=>De(e),bg=(e,t)=>{let r;switch(t.to){case 10:r="vec4<f16>";break;case 1:r="vec4<f32>";break;case 12:r="vec4<u32>";break;case 6:r="vec4<i32>";break;case 9:r="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(Me(e.inputs[0],"Cast",r,void 0,t.cacheKey,t.to))},Ic=e=>{let t,r,n=e.length>=2&&e[1].data!==0,a=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=n?e[1].getFloat32Array()[0]:-34028234663852886e22,r=a?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=n?e[1].getUint16Array()[0]:64511,r=a?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return De({min:t,max:r})},vg=(e,t)=>{let r=t||Ic(e.inputs),n=st(e.inputs[0].dataType);e.compute(Me(e.inputs[0],"Clip",a=>`clamp(${a}, vec4<${n}>(uniforms.min), vec4<${n}>(uniforms.max))`,void 0,r.cacheKey,void 0,[{type:e.inputs[0].dataType,data:r.min},{type:e.inputs[0].dataType,data:r.max}],[{name:"min",type:n},{name:"max",type:n}]),{inputs:[0]})},$g=e=>{e.compute(Me(e.inputs[0],"Ceil","ceil"))},xg=e=>{e.compute(Me(e.inputs[0],"Cos","cos"))},Sg=e=>{e.compute(Me(e.inputs[0],"Cosh","cosh"))},Ai=e=>De(e),Tg=(e,t)=>{let r=st(e.inputs[0].dataType);e.compute(Me(e.inputs[0],"Elu",n=>`elu_vf32(${n})`,`
  const elu_alpha_ = ${r}(${t.alpha});

  fn elu_f32(a: ${r}) -> ${r} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${r}>) -> vec4<${r}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},In=(e="f32")=>`
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
}`,Cg=e=>{let t=st(e.inputs[0].dataType);e.compute(Me(e.inputs[0],"Erf",r=>`erf_vf32(${r})`,In(t)))},kg=e=>{e.compute(Me(e.inputs[0],"Exp","exp"))},Eg=e=>{e.compute(Me(e.inputs[0],"Floor","floor"))},Ig=e=>{let t=st(e.inputs[0].dataType);e.compute(Me(e.inputs[0],"Gelu",r=>`0.5 * ${r} * (1.0 + erf_vf32(${r} * 0.7071067811865475))`,In(t)))},zg=(e,t)=>{let r=st(e.inputs[0].dataType);e.compute(Me(e.inputs[0],"LeakyRelu",n=>`select(leaky_relu_alpha_ * ${n}, ${n}, ${n} >= vec4<${r}>(0.0))`,`const leaky_relu_alpha_ = ${r}(${t.alpha});`,t.cacheKey))},Ag=e=>{e.compute(Me(e.inputs[0],"Not",t=>`!${t}`))},Og=e=>{e.compute(Me(e.inputs[0],"Neg",t=>`-${t}`))},Rg=e=>{e.compute(Me(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},Bg=e=>{let t=st(e.inputs[0].dataType);e.compute(Me(e.inputs[0],"Relu",r=>`select(vec4<${t}>(0.0), ${r}, ${r} > vec4<${t}>(0.0))`))},Mg=e=>{e.compute(Me(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},Dg=e=>De(e),Ng=(e,t)=>{let r=st(e.inputs[0].dataType);e.compute(Me(e.inputs[0],"HardSigmoid",n=>`max(vec4<${r}>(0.0), min(vec4<${r}>(1.0), ${t.alpha} * ${n} + vec4<${r}>(${t.beta})))`,void 0,t.cacheKey))},Pg=e=>{e.compute(Me(e.inputs[0],"Sin","sin"))},Ug=e=>{e.compute(Me(e.inputs[0],"Sinh","sinh"))},Wg=e=>{e.compute(Me(e.inputs[0],"Sqrt","sqrt"))},Lg=e=>{e.compute(Me(e.inputs[0],"Tan","tan"))},Qa=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,qg=e=>{e.compute(Me(e.inputs[0],"Tanh",Qa))},Ls=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${Qa("v")};
}
`,qs=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,Vg=e=>{let t=st(e.inputs[0].dataType);e.compute(Me(e.inputs[0],"FastGelu",qs,Ls(t),void 0,e.inputs[0].dataType))},Hg=(e,t)=>{let r=st(e.inputs[0].dataType);return e.compute(Me(e.inputs[0],"ThresholdedRelu",n=>`select(vec4<${r}>(0.0), ${n}, ${n} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${r}>(${t.alpha});`,t.cacheKey)),0},Fg=e=>{e.compute(Me(e.inputs[0],"Log","log"))},zc=(e,t)=>`
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
`,Ac=e=>`quick_gelu_impl(${e})`,Gg=(e,t)=>{let r=st(e.inputs[0].dataType);e.compute(Me(e.inputs[0],"QuickGelu",Ac,zc(r,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),Oc,Rc,jg,i1=K(()=>{Se(),Ce(),Ro(),Oc=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Rc=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let r=P("input",e[0].dataType,e[0].dims,4),n=P("bias",e[0].dataType,[e[0].dims[2]],4),a=se("output",e[0].dataType,t,4),i=B.size(t)/4,s=et(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(i/64)}}),getShaderSource:l=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${l.declareVariables(r,n,a)}

  ${In(s)}

  ${l.mainStart()}
    ${l.guardAgainstOutOfBoundsWorkgroupSizes(i)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${a.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},jg=e=>{Oc(e.inputs),e.compute(Rc(e.inputs))}}),Bc,Mc,Mt,Kg,Zg,Qg,Xg,Yg,Jg,ey,ty,ry,iy,n1=K(()=>{ge(),Se(),Ce(),Bc=(e,t,r,n,a,i,s,l,u,c,p,h)=>{let g,_;typeof l=="string"?g=_=($,C)=>`${l}((${$}),(${C}))`:typeof l=="function"?g=_=l:(g=l.scalar,_=l.vector);let w=se("outputData",p,n.length,4),b=P("aData",u,t.length,4),S=P("bData",c,r.length,4),v;if(a)if(i){let $=B.size(t)===1,C=B.size(r)===1,T=t.length>0&&t[t.length-1]%4===0,I=r.length>0&&r[r.length-1]%4===0;$||C?v=w.setByOffset("global_idx",_($?`${b.type.value}(${b.getByOffset("0")}.x)`:b.getByOffset("global_idx"),C?`${S.type.value}(${S.getByOffset("0")}.x)`:S.getByOffset("global_idx"))):v=`
            let outputIndices = ${w.offsetToIndices("global_idx * 4u")};
            let offsetA = ${b.broadcastedIndicesToOffset("outputIndices",w)};
            let offsetB = ${S.broadcastedIndicesToOffset("outputIndices",w)};
            ${w.setByOffset("global_idx",_(s||T?b.getByOffset("offsetA / 4u"):`${b.type.value}(${b.getByOffset("offsetA / 4u")}[offsetA % 4u])`,s||I?S.getByOffset("offsetB / 4u"):`${S.type.value}(${S.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else v=w.setByOffset("global_idx",_(b.getByOffset("global_idx"),S.getByOffset("global_idx")));else{if(!i)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let $=(C,T,I="")=>{let O=`aData[indexA${T}][componentA${T}]`,A=`bData[indexB${T}][componentB${T}]`;return`
            let outputIndices${T} = ${w.offsetToIndices(`global_idx * 4u + ${T}u`)};
            let offsetA${T} = ${b.broadcastedIndicesToOffset(`outputIndices${T}`,w)};
            let offsetB${T} = ${S.broadcastedIndicesToOffset(`outputIndices${T}`,w)};
            let indexA${T} = offsetA${T} / 4u;
            let indexB${T} = offsetB${T} / 4u;
            let componentA${T} = offsetA${T} % 4u;
            let componentB${T} = offsetB${T} % 4u;
            ${C}[${T}] = ${I}(${g(O,A)});
          `};p===9?v=`
            var data = vec4<u32>(0);
            ${$("data",0,"u32")}
            ${$("data",1,"u32")}
            ${$("data",2,"u32")}
            ${$("data",3,"u32")}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:v=`
            ${$("outputData[global_idx]",0)}
            ${$("outputData[global_idx]",1)}
            ${$("outputData[global_idx]",2)}
            ${$("outputData[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(b,S,w)}

        ${h??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${v}
      }`},Mc=(e,t,r,n,a,i,s=r.dataType)=>{let l=r.dims.map(b=>Number(b)??1),u=n.dims.map(b=>Number(b)??1),c=!B.areEqual(l,u),p=l,h=B.size(l),g=!1,_=!1,w=[c];if(c){let b=si.calcShape(l,u,!1);if(!b)throw new Error("Can't perform binary op on the given tensors");p=b.slice(),h=B.size(p);let S=B.size(l)===1,v=B.size(u)===1,$=l.length>0&&l[l.length-1]%4===0,C=u.length>0&&u[u.length-1]%4===0;w.push(S),w.push(v),w.push($),w.push(C);let T=1;for(let I=1;I<p.length;I++){let O=l[l.length-I],A=u[u.length-I];if(O===A)T*=O;else break}T%4===0?(_=!0,g=!0):(S||v||$||C)&&(g=!0)}else g=!0;return w.push(g),{name:e,shaderCache:{hint:t+w.map(b=>b.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:b=>Bc(b,l,u,p,g,c,_,a,r.dataType,n.dataType,s,i),getRunData:()=>({outputs:[{dims:p,dataType:s}],dispatchGroup:{x:Math.ceil(h/64/4)},programUniforms:[{type:12,data:Math.ceil(B.size(p)/4)},...le(l,u,p)]})}},Mt=(e,t,r,n,a,i)=>{e.compute(Mc(t,a??"",e.inputs[0],e.inputs[1],r,n,i))},Kg=e=>{Mt(e,"Add",(t,r)=>`${t}+${r}`)},Zg=e=>{Mt(e,"Div",(t,r)=>`${t}/${r}`)},Qg=e=>{Mt(e,"Equal",{scalar:(t,r)=>`u32(${t}==${r})`,vector:(t,r)=>`vec4<u32>(${t}==${r})`},void 0,void 0,9)},Xg=e=>{Mt(e,"Mul",(t,r)=>`${t}*${r}`)},Yg=e=>{let t=P("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;Mt(e,"Pow",{scalar:(r,n)=>`pow_custom(${r},${n})`,vector:(r,n)=>`pow_vector_custom(${r},${n})`},`
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
      `)},Jg=e=>{Mt(e,"Sub",(t,r)=>`${t}-${r}`)},ey=e=>{Mt(e,"Greater",{scalar:(t,r)=>`u32(${t}>${r})`,vector:(t,r)=>`vec4<u32>(${t}>${r})`},void 0,void 0,9)},ty=e=>{Mt(e,"Less",{scalar:(t,r)=>`u32(${t}<${r})`,vector:(t,r)=>`vec4<u32>(${t}<${r})`},void 0,void 0,9)},ry=e=>{Mt(e,"GreaterOrEqual",{scalar:(t,r)=>`u32(${t}>=${r})`,vector:(t,r)=>`vec4<u32>(${t}>=${r})`},void 0,void 0,9)},iy=e=>{Mt(e,"LessOrEqual",{scalar:(t,r)=>`u32(${t}<=${r})`,vector:(t,r)=>`vec4<u32>(${t}<=${r})`},void 0,void 0,9)}}),Dc,Nc,Pc,Uc,ny,ay,a1=K(()=>{ge(),Se(),Ze(),Ce(),Dc=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let r=0,n=e[r],a=n.dataType,i=n.dims.length;e.forEach((s,l)=>{if(l!==r){if(s.dataType!==a)throw new Error("input tensors should be one type");if(s.dims.length!==i)throw new Error("input tensors should have the same shape");s.dims.forEach((u,c)=>{if(c!==t&&u!==n.dims[c])throw new Error("non concat dimensions must match")})}})},Nc=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,Pc=(e,t)=>{let r=e.length,n=[];for(let a=0;a<r;++a){let i=t.setByOffset("global_idx",e[a].getByIndices("indices"));r===1?n.push(i):a===0?n.push(`if (inputIndex == ${a}u) { ${i} }`):a===r-1?n.push(`else { ${i} }`):n.push(`else if (inputIndex == ${a}) { ${i} }`)}return n.join(`
`)},Uc=(e,t,r,n)=>{let a=B.size(r),i=new Array(e.length),s=new Array(e.length),l=0,u=[],c=[],p=[{type:12,data:a}];for(let b=0;b<e.length;++b)l+=e[b].dims[t],i[b]=l,c.push(e[b].dims.length),s[b]=P(`input${b}`,n,c[b]),u.push("rank"),p.push({type:12,data:i[b]});for(let b=0;b<e.length;++b)p.push(...le(e[b].dims));p.push(...le(r));let h=se("output",n,r.length),g=h.indicesGet("indices",t),_=Array.from(Array(i.length).keys()).map(b=>`uniforms.sizeInConcatAxis${b}`).join(","),w=b=>`

  ${(()=>{b.registerUniform("outputSize","u32");for(let S=0;S<e.length;S++)b.registerUniform(`sizeInConcatAxis${S}`,"u32");return b.declareVariables(...s,h)})()}

  ${Nc(i.length,_)}

  ${b.mainStart()}
    ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${h.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${g});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${i.length}u>(${_});
      ${g} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${Pc(s,h)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:u},getRunData:()=>({outputs:[{dims:r,dataType:n}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:p}),getShaderSource:w}},ny=(e,t)=>{let r=e.inputs,n=r[0].dims,a=B.normalizeAxis(t.axis,n.length);Dc(r,a);let i=n.slice();i[a]=r.reduce((l,u)=>l+(u.dims.length>a?u.dims[a]:0),0);let s=r.filter(l=>B.size(l.dims)>0);e.compute(Uc(s,a,i,r[0].dataType),{inputs:s})},ay=e=>De({axis:e.axis})}),Ur,Wr,Lr,Bo,Hr=K(()=>{ge(),Se(),Ur=(e,t,r="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${r}(uniforms.clip_min)), ${t}(${r}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${r}(uniforms.alpha) * value + ${r}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${r}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},Wr=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},Lr=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},Bo=e=>{let t=(e==null?void 0:e.activation)||"";if(t==="HardSigmoid"){let[r,n]=(e==null?void 0:e.activation_params)||[.2,.5];return{activation:t,alpha:r,beta:n}}else if(t==="Clip"){let[r,n]=(e==null?void 0:e.activation_params)||[Am,Om];return{activation:t,clipMax:n,clipMin:r}}else if(t==="LeakyRelu"){let[r]=(e==null?void 0:e.activation_params)||[.01];return{activation:t,alpha:r}}return{activation:t}}}),rt,sy,Mo=K(()=>{rt=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},sy=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),oy,s1=K(()=>{oy=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),Ui,Do,No=K(()=>{ge(),Se(),Ce(),Hr(),Ui=(e,t,r,n,a)=>{let i=n-r;return`
      ${Array.from({length:r}).map((s,l)=>`
      if (${oe(t.shape,l,t.rank)} != 1) {
        ${t.indicesSet(e,l,oe(a,l+i,n))}
      } else {
        ${t.indicesSet(e,l,0)}
      }`).join("")}
`},Do=(e,t,r,n,a=!1,i)=>{let s=e[0].dims,l=e[1].dims,u=s[s.length-2],c=l[l.length-1],p=s[s.length-1],h=Ge(c),g=Ge(p),_=Ge(u),w=B.size(r)/h/_,b=e.length>2,S=n?n.slice(0,-2):r.slice(0,-2),v=[B.size(S),u,c],$=[{type:12,data:w},{type:12,data:u},{type:12,data:c},{type:12,data:p}];Wr(t,$),$.push(...le(S,s,l)),b&&$.push(...le(e[2].dims)),$.push(...le(v));let C=T=>{let I=zo("batch_dims",e[0].dataType,S.length),O=P("a",e[0].dataType,s.length,g),A=P("b",e[1].dataType,l.length,h),M=se("output",e[0].dataType,v.length,h),W=et(M.type.tensor),X=Ur(t,M.type.value,W),de=[O,A],ue="";if(b){let Te=a?h:1;de.push(P("bias",e[2].dataType,e[2].dims.length,Te)),ue=`${a?`value += bias[col / ${Te}];`:`value += ${M.type.value}(bias[row + i]);`}`}let fe=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];Lr(t,fe);let _e=()=>{let Te=`var a_data: ${O.type.value};`;for(let L=0;L<g;L++)Te+=`
              let b_data${L} = b[(b_offset + (k + ${L}) * uniforms.N + col) / ${h}];`;for(let L=0;L<_;L++){Te+=`a_data = a[(a_offset + (row + ${L}) * uniforms.K + k) / ${g}];`;for(let re=0;re<g;re++)Te+=`
            values[${L}] = fma(${A.type.value}(a_data${g===1?"":`[${re}]`}), b_data${re}, values[${L}]);
`}return Te};return`
  ${T.registerUniforms(fe).registerInternalVariables(I).declareVariables(...de,M)}
  ${T.mainStart()}
    ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${h})) * ${h};
    var index1 = global_idx / (uniforms.N / ${h});
    let stride1 = uniforms.M / ${_};
    let row = (index1 % stride1) * ${_};
    let batch = index1 / stride1;

    ${r.length===2?"":`let batch_indices = ${I.offsetToIndices("batch")};`}

    var a_indices: ${O.type.indices};
    ${Ui("a_indices",O,O.rank-2,I.rank,"batch_indices")}
    ${O.indicesSet("a_indices",O.rank-2,0)}
    ${O.indicesSet("a_indices",O.rank-1,0)}
    let a_offset = ${O.indicesToOffset("a_indices")};

    var b_indices: ${A.type.indices};
    ${Ui("b_indices",A,A.rank-2,I.rank,"batch_indices")}
    ${A.indicesSet("b_indices",A.rank-2,0)}
    ${A.indicesSet("b_indices",A.rank-1,0)}
    let b_offset = ${A.indicesToOffset("b_indices")};
    var values: array<${M.type.value}, ${_}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${g}) {
      ${_e()}
    }
    for (var i = 0u; i < ${_}u; i++) {
      var value = values[i];
      ${ue}
      ${X}
      let cur_indices = ${M.type.indices}(batch, row + i, col);
      let offset = ${M.indicesToOffset("cur_indices")};
      ${M.setByOffset(`offset / ${h}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${h};${g};${_};${a}`,inputDependencies:b?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(w/64)},programUniforms:$}),getShaderSource:C}}}),Wc,Lc,Vs,Xa,qc,Hs,Vc,Ln,Po=K(()=>{ge(),Se(),Ce(),Hr(),No(),Mo(),Wc=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,Lc=(e,t)=>e?`
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
        }`,Vs=(e,t,r="f32",n,a=!1,i=32,s=!1,l=32)=>{let u=t[1]*e[1],c=t[0]*e[0],p=a?u:i,h=a?i:u,g=p/t[0],_=i/t[1];if(!((a&&g===4&&e[1]===4||!a&&(g===3||g===4))&&p%t[0]===0&&i%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${a} is true, innerElementSize ${g} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${g} must be 3 or 4.
  tileAWidth ${p} must be divisible by workgroupSize[0]${t[0]}. tileInner ${i} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${g}<${r}>, ${p/g}>, ${h}>;
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
          ${Wc(a,n)}
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

          ${Lc(a,g)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},Xa=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,qc=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",Hs=(e,t,r="f32",n,a=!1,i=32,s=!1,l=32,u=!1)=>{let c=e[1]*t[1],p=e[0]*t[0],h=a?c:i,g=a?i:c;if(!(g%t[1]===0&&h%t[0]===0&&i%t[1]===0))throw new Error(`tileAHight ${g} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${h} must be divisible by workgroupSize[0]${t[0]}, tileInner ${i} must be divisible by workgroupSize[1]${t[1]}`);let _=g/t[1],w=h/t[0],b=i/t[1],S=u?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${c};
    let globalColStart = i32(workgroupId.x) * ${p};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${g}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${h}; inputCol = inputCol + ${t[0]}) {
          ${Xa(a,n)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${i}; inputRow = inputRow + ${t[1]}) {
            for (var inputCol = localCol; inputCol < ${p}; inputCol = inputCol + ${t[0]}) {
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
let tileColA = i32(localId.x) * ${w};
let tileRowB = i32(localId.y) * ${b};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${_}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${w}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${Xa(a,n)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${b}; innerRow = innerRow + 1) {
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
      ${qc(a)}
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
  var<workgroup> mm_Bsub : array<array<${r}, ${p}>, ${i}>;
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
`},Vc=(e,t,r,n,a=!1)=>{let[i,s,l,u]=n,c=et(n[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${i.type.indices}) -> ${rt(e,c)} {
      var value = ${rt(e,c)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${s.type.indices};
        ${Ui("aIndices",s,s.rank-2,i.rank,"batchIndices")}
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
        ${Ui("bIndices",l,l.rank-2,i.rank,"batchIndices")}
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
    `},Ln=(e,t,r,n,a=!1,i)=>{let s=e[0].dims,l=e[1].dims,u=s.slice(0,-2),c=l.slice(0,-2),p=n?n.slice(0,-2):r.slice(0,-2),h=B.size(p),g=s[s.length-2],_=s[s.length-1],w=l[l.length-1],b=_%4===0&&w%4===0,S=g<=8?[4,1,1]:[4,4,1],v=[8,8,1],$=[Math.ceil(w/v[0]/S[0]),Math.ceil(g/v[1]/S[1]),Math.ceil(h/v[2]/S[2])],C=b?4:1,T=[...u,g,_/C],I=T.length,O=[...c,_,w/C],A=O.length,M=[h,g,w/C],W=[{type:6,data:g},{type:6,data:w},{type:6,data:_}];Wr(t,W),W.push(...le(p,T,O));let X=["rank","rank"],de=e.length>2;de&&(W.push(...le(e[2].dims)),X.push("rank")),W.push(...le(M));let ue=fe=>{let _e=p.length,Te=zo("batchDims",e[0].dataType,_e,1),L=et(e[0].dataType),re=P("a",e[0].dataType,I,C),pe=P("b",e[1].dataType,A,C),te=se("result",e[0].dataType,M.length,C),Oe=[re,pe];if(de){let tt=a?C:1;Oe.push(P("bias",e[2].dataType,e[2].dims.length,tt))}let U=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];Lr(t,U);let q=et(te.type.tensor),ae=Ur(t,te.type.value,q),ke=Vc(C,de,ae,[Te,re,pe,te],a);return`
  ${fe.registerUniforms(U).registerInternalVariables(Te).declareVariables(...Oe,te)}
  ${ke}
  ${b?Vs(S,v,L,Te):Hs(S,v,L,Te)}
                   `};return{name:"MatMul",shaderCache:{hint:`${S};${t.activation};${b};${a}`,inputDependencies:X},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:$[0],y:$[1],z:$[2]},programUniforms:W}),getShaderSource:ue}}}),Hc,ly,o1=K(()=>{ge(),lr(),Ce(),Hr(),Mo(),s1(),Po(),Hc=(e,t,r,n,a=!1,i,s=4,l=4,u=4,c="f32")=>{let p=W=>{switch(W){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${c}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${W} is not supported.`)}},h=W=>{switch(W){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${W} is not supported.`)}},g=e?`
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
    `,w=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",b=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",S=e?"row":"col",v=e?"col":"row",$=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${S} / outWidth;
    let outCol = ${S} % outWidth;

    let WRow = ${v} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${v} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${v} % inChannels;
    var resData = ${rt(s,c)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${w} && xCol >= 0 && xCol < ${b}) {
      ${g}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${p(s)}
    }
    return resData;`,C=e?t&&n?`
    let col = colIn * ${s};
    ${$}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${$}
    }
    return ${rt(s,c)}(0.0);`:n&&r?`
    let col = colIn * ${s};
    ${$}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${$}
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
    return ${rt(l,c)}(0.0);`,I=rt(u,c),O=rt(e?s:l,c),A=rt(e?l:s,c),M=Ur(i,I,c);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${O} {
      ${e?C:T}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${A} {
      ${e?T:C}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${I}) {
      let col = colIn * ${u};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${_}
      ${sy(a)}
      ${M}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},ly=(e,t,r,n,a,i,s,l,u)=>{let c=t.format==="NHWC",p=c?e[0].dims[3]:e[0].dims[1],h=r[0],g=c?r[2]:r[3],_=c?r[1]:r[2],w=c?r[3]:r[1],b=c&&(p%4===0||p%3===0)&&w%4===0,S=c?w:g*_,v=c?g*_:w,$=[8,8,1],C=n<=8?[4,1,1]:[4,4,1],T=[Math.ceil(S/$[0]/C[0]),Math.ceil(v/$[1]/C[1]),Math.ceil(h/$[2]/C[2])];Re("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${T}`);let I=b?c&&p%4!==0?3:4:1,O=$[1]*C[1],A=$[0]*C[0],M=Math.max($[0]*I,$[1]),W=n%O===0,X=a%A===0,de=i%M===0,ue=b?[I,4,4]:[1,1,1],fe=[{type:6,data:n},{type:6,data:a},{type:6,data:i},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];Wr(t,fe),fe.push(...le(e[0].dims,e[1].dims));let _e=["rank","rank"];s&&(fe.push(...le(e[2].dims)),_e.push("rank")),fe.push(...le(r));let Te=L=>{let re=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];Lr(t,re);let pe=b?4:1,te=et(e[0].dataType),Oe=`
      fn setOutputAtIndex(flatIndex : i32, value : ${b?`vec4<${te}>`:te}) {
        result[flatIndex] = ${b?`vec4<${te}>`:te}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${b?`vec4<${te}>`:te}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${b?"/ 4":""}, value);
      }`,U=P("x",e[0].dataType,e[0].dims.length,I===3?1:I),q=P("w",e[1].dataType,e[1].dims.length,pe),ae=[U,q],ke=se("result",e[0].dataType,r.length,pe);if(s){let tt=P("bias",e[2].dataType,e[2].dims.length,pe);ae.push(tt),Oe+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${b?`vec4<${te}>`:te} {
          return bias[coords.${c?"w":"y"}${b?"/ 4":""}];
        }`}return`
        ${oy("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${L.registerUniforms(re).declareVariables(...ae,ke)}
        ${Oe}
        ${Hc(c,W,X,de,s,t,ue[0],ue[1],ue[2],te)}
        ${b?Vs(C,$,te,void 0,!c,M):Hs(C,$,te,void 0,!c,M,!1,void 0,l)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${I};${b};${W};${X};${de};${O};${A};${M}`,inputDependencies:_e},getRunData:()=>({outputs:[{dims:u?u(r):r,dataType:e[0].dataType}],dispatchGroup:{x:T[0],y:T[1],z:T[2]},programUniforms:fe}),getShaderSource:Te}}}),Fc,Ya,vi,Gc,Ja,jc,uy,dy,l1=K(()=>{ge(),lr(),Se(),Ce(),Hr(),Mo(),Fc=e=>{let t=1;for(let r=0;r<e.length;r++)t*=e[r];return t},Ya=e=>typeof e=="number"?[e,e,e]:e,vi=(e,t)=>t<=1?e:e+(e-1)*(t-1),Gc=(e,t,r,n=1)=>{let a=vi(t,n);return Math.floor((e[0]*(r-1)-r+a)/2)},Ja=(e,t,r,n,a)=>{a==null&&(a=Gc(e,t[0],n[0]));let i=[0,0,0,r];for(let s=0;s<3;s++)e[s]+2*a>=t[s]&&(i[s]=Math.trunc((e[s]-t[s]+2*a)/n[s]+1));return i},jc=(e,t,r,n,a,i,s,l,u,c)=>{let p,h,g,_;if(e==="VALID"&&(e=0),typeof e=="number"){p={top:e,bottom:e,left:e,right:e,front:e,back:e};let w=Ja([t,r,n,1],[l,u,c],1,[a,i,s],e);h=w[0],g=w[1],_=w[2]}else if(Array.isArray(e)){if(!e.every((b,S,v)=>b===v[0]))throw Error(`Unsupported padding parameter: ${e}`);p={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let w=Ja([t,r,n,1],[l,u,c],1,[a,i,s],e[0]);h=w[0],g=w[1],_=w[2]}else if(e==="SAME_UPPER"){h=Math.ceil(t/a),g=Math.ceil(r/i),_=Math.ceil(n/s);let w=(h-1)*a+l-t,b=(g-1)*i+u-r,S=(_-1)*s+c-n,v=Math.floor(w/2),$=w-v,C=Math.floor(b/2),T=b-C,I=Math.floor(S/2),O=S-I;p={top:C,bottom:T,left:I,right:O,front:v,back:$}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:p,outDepth:h,outHeight:g,outWidth:_}},uy=(e,t,r,n,a,i=!1,s="channelsLast")=>{let l,u,c,p,h;if(s==="channelsLast")[l,u,c,p,h]=e;else if(s==="channelsFirst")[l,h,u,c,p]=e;else throw new Error(`Unknown dataFormat ${s}`);let[g,,_,w,b]=t,[S,v,$]=Ya(r),[C,T,I]=Ya(n),O=vi(_,C),A=vi(w,T),M=vi(b,I),{padInfo:W,outDepth:X,outHeight:de,outWidth:ue}=jc(a,u,c,p,S,v,$,O,A,M),fe=i?g*h:g,_e=[0,0,0,0,0];return s==="channelsFirst"?_e=[l,fe,X,de,ue]:s==="channelsLast"&&(_e=[l,X,de,ue,fe]),{batchSize:l,dataFormat:s,inDepth:u,inHeight:c,inWidth:p,inChannels:h,outDepth:X,outHeight:de,outWidth:ue,outChannels:fe,padInfo:W,strideDepth:S,strideHeight:v,strideWidth:$,filterDepth:_,filterHeight:w,filterWidth:b,effectiveFilterDepth:O,effectiveFilterHeight:A,effectiveFilterWidth:M,dilationDepth:C,dilationHeight:T,dilationWidth:I,inShape:e,outShape:_e,filterShape:t}},dy=(e,t,r,n,a,i)=>{let s=i==="channelsLast";s?e[0].dims[3]:e[0].dims[1];let l=[64,1,1],u={x:r.map((S,v)=>v)},c=[Math.ceil(Fc(u.x.map(S=>r[S]))/l[0]),1,1];Re("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${c}`);let p=1,h=B.size(r),g=[{type:12,data:h},{type:12,data:n},{type:12,data:a},{type:12,data:t.strides},{type:12,data:t.dilations}];Wr(t,g),g.push(...le(e[0].dims,e[1].dims));let _=["rank","rank"],w=e.length===3;w&&(g.push(...le(e[2].dims)),_.push("rank")),g.push(...le(r));let b=S=>{let v=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:n.length},{name:"pads",type:"u32",length:a.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];Lr(t,v);let $=1,C=et(e[0].dataType),T=P("x",e[0].dataType,e[0].dims.length,p),I=P("W",e[1].dataType,e[1].dims.length,$),O=[T,I],A=se("result",e[0].dataType,r.length,$),M="";if(w){let de=P("bias",e[2].dataType,e[2].dims.length,$);O.push(de),M+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${C} {
          return bias[${s?oe("coords",4,5):oe("coords",1,5)}];
        }`}let W=rt(p,C),X=Ur(t,W,C);return`
            ${M}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${T.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${I.getByIndices("aIndices")};
            }
          ${S.registerUniforms(v).declareVariables(...O,A)}
          ${S.mainStart()}
          ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${A.offsetToIndices("global_idx")};
              let batch = ${oe("coords",0,T.rank)};
              let d2 = ${s?oe("coords",T.rank-1,T.rank):oe("coords",1,T.rank)};
              let xFRCCorner = vec3<u32>(${s?oe("coords",1,T.rank):oe("coords",2,T.rank)},
              ${s?oe("coords",2,T.rank):oe("coords",3,T.rank)},
              ${s?oe("coords",3,T.rank):oe("coords",4,T.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${s?oe("uniforms.x_shape",1,T.rank):oe("uniforms.x_shape",2,T.rank)};
              let xShapeZ = ${s?oe("uniforms.x_shape",2,T.rank):oe("uniforms.x_shape",3,T.rank)};
              let xShapeW = ${s?oe("uniforms.x_shape",3,T.rank):oe("uniforms.x_shape",4,T.rank)};
              let xShapeU = ${s?oe("uniforms.x_shape",4,T.rank):oe("uniforms.x_shape",1,T.rank)};
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
              ${w?"value = value + getBiasByOutputCoords(coords)":""};
              ${X}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${s};${p};${w}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:c[0],y:c[1],z:c[2]},programUniforms:g}),getShaderSource:b}}}),cy,py,u1=K(()=>{ge(),Se(),Ce(),Hr(),cy=(e,t,r,n)=>{let a=e.length>2,i=a?"value += b[output_channel];":"",s=e[0].dims,l=e[1].dims,u=t.format==="NHWC",c=u?r[3]:r[1],p=c/t.group,h=u&&p>=4?Ge(c):1,g=B.size(r)/h,_=[{type:12,data:g},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:p}];Wr(t,_),_.push(...le(s,[l[0],l[1],l[2],l[3]/h]));let w=a?["rank","rank","rank"]:["rank","rank"];_.push(...le([r[0],r[1],r[2],r[3]/h]));let b=S=>{let v=se("output",e[0].dataType,r.length,h),$=et(v.type.tensor),C=Ur(t,v.type.value,$),T=P("x",e[0].dataType,s.length),I=P("w",e[1].dataType,l.length,h),O=[T,I];a&&O.push(P("b",e[2].dataType,e[2].dims,h));let A=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];Lr(t,A);let M=u?`
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
            let wVal = ${I.get("wHeight","wWidth","wInChannel","output_channel")};
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
            let wVal = ${I.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${S.registerUniforms(A).declareVariables(...O,v)}

  ${S.mainStart()}
    ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${v.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${u?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${u?1:2}], outputIndices[${u?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${h} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${u?2:1}];

    var value: ${v.type.value} = ${v.type.value}(0);
    ${M}
    ${i}
    ${C}
    ${v.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${h}`,inputDependencies:w},getRunData:()=>({outputs:[{dims:n?n(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:_}),getShaderSource:b}},py=(e,t,r,n)=>{let a=e.length>2,i=Ge(r[3]),s=Ge(r[2]),l=B.size(r)/i/s,u=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/i],c=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/i],p=[r[0],r[1],r[2],r[3]/i],h=[{type:12,data:l},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];Wr(t,h),h.push(...le(u,c,p));let g=(s-1)*t.strides[1]+c[1],_=w=>{let b=se("output",e[0].dataType,p.length,i),S=et(b.type.tensor),v=Ur(t,b.type.value,S),$=P("x",e[0].dataType,u.length,i),C=P("w",e[1].dataType,c.length,i),T=[$,C];a&&T.push(P("b",e[2].dataType,e[2].dims,i));let I=a?"value += b[output_channel];":"",O=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return Lr(t,O),`
  ${w.registerUniforms(O).declareVariables(...T,b)}
  ${w.mainStart()}
    ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${s}u;
    let col = (index1 % width1) * ${s}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${$.type.value}, ${g}>;
    var values: array<${b.type.value}, ${s}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${c[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${g}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${$.get("batch","u32(x_height)","u32(x_width)","input_channel")};
          } else {
            x_vals[i] = ${$.type.value}(0);
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
      ${I}
      ${v}
      ${b.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${i};${s};${g};${c[0]};${c[1]}`,inputDependencies:a?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:n?n(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:h}),getShaderSource:_}}}),Kc,_n,Zc,wn,Fs,es,Qc,Xc,Gs,d1=K(()=>{Se(),o1(),l1(),Po(),u1(),Hr(),No(),Tr(),Kc=(e,t,r,n,a,i)=>{let s=e[0],l=e.slice(i?1:2,i?3:4),u=l.length,c=t[0],p=t.slice(2).map((g,_)=>g+(g-1)*(r[_]-1)),h=l.map((g,_)=>g+n[_]+n[_+u]).map((g,_)=>Math.floor((g-p[_]+a[_])/a[_]));return h.splice(0,0,s),h.splice(i?3:1,0,c),h},_n=[2,3,1,0],Zc=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],n=e[1].dims[1]*t.group;if(r!==n)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let a=e[0].dims.length-2;if(t.dilations.length!==a)throw new Error(`dilations should be ${a}D`);if(t.strides.length!==a)throw new Error(`strides should be ${a}D`);if(t.pads.length!==a*2)throw new Error(`pads should be ${a*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},wn=(e,t)=>{let r=e.kernelShape.slice();r.length<t[1].dims.length-2&&r.push(...Array(t[1].dims.length-2-r.length).fill(0));for(let i=2;i<t[1].dims.length;++i)r[i-2]===0&&(r[i-2]=t[1].dims[i]);let n=e.pads.slice();Un.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,r,n,e.format==="NHWC",e.autoPad);let a=Object.assign({},e);return Object.assign(a,{kernelShape:r,pads:n}),a},Fs=e=>{let t=Bo(e),r=e.format,n=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],a=e.dilations,i=e.group,s=e.kernel_shape,l=e.pads,u=e.strides,c=e.w_is_const();return{autoPad:n,format:r,dilations:a,group:i,kernelShape:s,pads:l,strides:u,wIsConst:c,...t,cacheKey:`${e.format};${t.activation};`}},es=(e,t,r,n)=>{let a=r.format==="NHWC",i=Kc(t[0].dims,t[1].dims,r.dilations,r.pads,r.strides,a);if(r.group!==1){let O=[t[0]];if(a){let A=e.kernelCustomData.wT??e.compute(Tt(t[1],_n),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=A),O.push(A)}else O.push(t[1]);t.length===3&&O.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&a&&t[1].dims[0]===r.group&&t[1].dims[1]===1&&r.dilations[0]===1&&r.dilations[1]===1?e.compute(py(O,r,i,n),{inputs:O}):e.compute(cy(O,r,i,n),{inputs:O});return}let s=t.length===3,l=t[0].dims[a?1:2],u=t[0].dims[a?2:3],c=t[0].dims[a?3:1],p=t[1].dims[2],h=t[1].dims[3],g=i[a?1:2],_=i[a?2:3],w=i[a?3:1],b=a&&p===l&&h===u&&r.pads[0]===0&&r.pads[1]===0;if(b||p===1&&h===1&&r.dilations[0]===1&&r.dilations[1]===1&&r.strides[0]===1&&r.strides[1]===1&&r.pads[0]===0&&r.pads[1]===0){let O=i[0],A,M,W,X=[];if(a){let fe=e.kernelCustomData.wT??e.compute(Tt(t[1],_n),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];if(r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=fe),b){let _e=l*u*c;A=t[0].reshape([1,O,_e]),M=fe.reshape([1,_e,w]),W=[1,O,w]}else A=t[0].reshape([O,l*u,c]),M=fe.reshape([1,c,w]),W=[O,g*_,w];X.push(A),X.push(M)}else A=t[0].reshape([O,c,l*u]),M=t[1].reshape([1,w,c]),W=[O,w,g*_],X.push(M),X.push(A);s&&X.push(t[2]);let de=W[2],ue=X[0].dims[X[0].dims.length-1];de<8&&ue<8?e.compute(Do(X,r,i,W,a,n),{inputs:X}):e.compute(Ln(X,r,i,W,a,n),{inputs:X});return}let S=!0,v=e.kernelCustomData.wT??e.compute(Tt(t[1],_n),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=v);let $=[t[0],v];s&&$.push(t[2]);let C=a?g*_:w,T=a?w:g*_,I=p*h*c;e.compute(ly($,r,i,C,T,I,s,S,n),{inputs:$})},Qc=(e,t)=>{let r=t.format==="NHWC",n=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&n.push(e.inputs[2]);let a=[0,t.pads[0],0,t.pads[1]],i=[1].concat(t.strides),s=[1].concat(t.dilations),l=[1].concat(t.kernelShape),u=wn({...t,pads:a,strides:i,dilations:s,kernelShape:l},n);es(e,n,u,c=>r?[c[0],c[2],c[3]]:[c[0],c[1],c[3]])},Xc=(e,t,r)=>{let n=r.format==="NHWC"?"channelsLast":"channelsFirst",a=wn(r,t),i=r.autoPad==="NOTSET"?r.pads:r.autoPad,s=uy(t[0].dims,t[1].dims,r.strides,r.dilations,i,!1,n);e.compute(dy(t,a,s.outShape,[s.filterDepth,s.filterHeight,s.filterWidth],[s.padInfo.front,s.padInfo.top,s.padInfo.left],n))},Gs=(e,t)=>{if(Zc(e.inputs,t),e.inputs[0].dims.length===3)Qc(e,t);else if(e.inputs[0].dims.length===5)Xc(e,e.inputs,t);else{let r=wn(t,e.inputs);es(e,e.inputs,r)}}}),fy,c1=K(()=>{ge(),lr(),Se(),Ce(),fy=(e,t,r)=>{let n=e.length>2,a=t.outputShape,i=t.format==="NHWC",s=t.group,l=e[1].dims,u=l[2]/s,c=l[3],p=i?Ge(u):1,h=i&&c===1&&u>=4,g=h?Math.floor(u/4)*4:Math.floor(u/p)*p,_=u-g,w=i?Ge(c):1,b=i?c===1?p:w:1,S=B.size(a)/w,v=[Math.ceil(S/64),1,1];Re("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${v}`);let $=["rank","rank"],C=[t.strides[0],t.strides[1]],T=[t.kernelShape[i?1:2],t.kernelShape[i?2:3]],I=[t.dilations[0],t.dilations[1]],O=[T[0]+(t.dilations[0]<=1?0:(t.kernelShape[i?1:2]-1)*(t.dilations[0]-1)),T[1]+(t.dilations[1]<=1?0:(t.kernelShape[i?2:3]-1)*(t.dilations[1]-1))],A=[O[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),O[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],M=[{type:12,data:S},{type:12,data:C},{type:12,data:T},{type:12,data:I},{type:12,data:O},{type:6,data:A},{type:12,data:g},{type:12,data:u},{type:12,data:c},...le(e[0].dims,e[1].dims)];n&&(M.push(...le(e[2].dims)),$.push("rank")),M.push(...le(a));let W=X=>{let de=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:C.length},{name:"filter_dims",type:"u32",length:T.length},{name:"dilations",type:"u32",length:T.length},{name:"effective_filter_dims",type:"u32",length:O.length},{name:"pads",type:"i32",length:A.length},{name:"input_channels_per_group_int",type:"u32"},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],ue=et(e[0].dataType),fe=i?1:2,_e=i?2:3,Te=i?3:1,L=P("W",e[1].dataType,e[1].dims.length,b),re=P("Dy",e[0].dataType,e[0].dims.length,p),pe=[re,L];n&&pe.push(P("bias",e[2].dataType,[a[Te]].length,w));let te=se("result",e[0].dataType,a.length,w),Oe=()=>{let ae="";if(h)p===4?ae+=`
        let xValue = ${re.getByOffset("x_offset")};
        let wValue = ${L.getByOffset("w_offset")};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:p===2?ae+=`
          dotProd = dotProd + dot(vec4<${ue}>(${re.getByOffset("x_offset")}, ${re.getByOffset("x_offset + 1u")}), vec4<${ue}>(${L.getByOffset("w_offset")}, ${L.getByOffset("w_offset + 1u")}));
          x_offset += 2u;
          w_offset += 2u;`:p===1&&(ae+=`
          dotProd = dotProd + dot(vec4<${ue}>(${re.getByOffset("x_offset")}, ${re.getByOffset("x_offset + 1u")}, ${re.getByOffset("x_offset + 2u")}, ${re.getByOffset("x_offset + 3u")}), vec4<${ue}>(${L.getByOffset("w_offset")}, ${L.getByOffset("w_offset + 1u")}, ${L.getByOffset("w_offset + 2u")}, ${L.getByOffset("w_offset + 3u")}));
          x_offset += 4u;
          w_offset += 4u;`);else if(ae+=`
                  let xValue = ${i?re.getByOffset(`${re.indicesToOffset(`${re.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${p}`):re.get("batch","inputChannel","idyR","idyC")};
        `,p===1)ae+=`
          let w_offset = ${L.indicesToOffset(`${L.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${L.getByOffset(`w_offset / ${b}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let ke=0;ke<p;ke++)ae+=`
            let wValue${ke} = ${L.getByOffset(`${L.indicesToOffset(`${L.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${ke}, wOutChannel)`)} / ${b}`)};
            dotProd = dotProd + xValue[${ke}] * wValue${ke};`;return ae},U=()=>{if(_===0)return"";if(!h)throw new Error(`packInputAs4 ${h} is not true.`);let ae="";if(p===1){ae+="dotProd = dotProd";for(let ke=0;ke<_;ke++)ae+=`
            + ${re.getByOffset(`x_offset + ${ke}`)} * ${L.getByOffset(`w_offset + ${ke}`)}`;ae+=";"}else if(p===2){if(_!==2)throw new Error(`Invalid inputChannelsRemainder ${_}.`);ae+=`
          let xValue = ${re.getByOffset("x_offset")};
          let wValue = ${L.getByOffset("w_offset")};
          dotProd = dotProd + dot(xValue, wValue);`}return ae},q=`
            let outputIndices = ${te.offsetToIndices(`global_idx * ${w}`)};
            let batch = ${te.indicesGet("outputIndices",0)};
            let d1 = ${te.indicesGet("outputIndices",Te)};
            let r = ${te.indicesGet("outputIndices",fe)};
            let c = ${te.indicesGet("outputIndices",_e)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${te.type.value}(0.0);
            var wR: u32 = 0;
            if (uniforms.dilations.x == 1) {
              // Minimum wR >= 0 that satisfies (dyRCorner + wR) % (uniforms.strides.x) == 0
              wR = u32(((dyRCorner + i32(uniforms.strides.x) - 1) / i32(uniforms.strides.x)) * i32(uniforms.strides.x) - dyRCorner);
            }
            for (; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
              if (wR % uniforms.dilations.x != 0) {
                continue;
              }
              let dyR = (${ue}(dyRCorner) + ${ue}(wR)) / ${ue}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${ue}(uniforms.Dy_shape[${fe}]) || fract(dyR) > 0.0 ||
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
                let dyC = (${ue}(dyCCorner) + ${ue}(wC)) / ${ue}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${ue}(uniforms.Dy_shape[${_e}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                ${h?`
                var x_offset = ${re.indicesToOffset(`${re.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${p};
                var w_offset = ${L.indicesToOffset(`${L.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${b};
                  `:""}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${h?4:p}) {
                  ${Oe()}
                  inputChannel = inputChannel + ${h?4:p};
                }
                ${U()}
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${n?` + bias[d1 / ${w}]`:""};
            ${te.setByOffset("global_idx","value")};
          `;return`
    ${X.registerUniforms(de).declareVariables(...pe,te)}
      ${X.mainStart()}
      ${X.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${q}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${p}${b}${w}${h}${_}`,inputDependencies:$},getRunData:()=>({dispatchGroup:{x:v[0],y:v[1],z:v[2]},outputs:[{dims:r?r(a):a,dataType:e[0].dataType}],programUniforms:M}),getShaderSource:W}}}),Yc,Jc,ep,ts,hy,tp,rs,rp,my,p1=K(()=>{c1(),Hr(),Tr(),Yc=(e,t,r,n,a,i)=>(e-1)*t+r+(n-1)*a+1-i,Jc=(e,t,r,n,a)=>{let i=Math.floor(e/2);t==="SAME_UPPER"?(r[n]=i,r[a]=e-i):t==="SAME_LOWER"&&(r[n]=e-i,r[a]=i)},ep=(e,t,r,n,a,i,s,l,u,c)=>{let p=e.length-2,h=c.length===0;u.length<p&&u.push(...Array(p-u.length).fill(0));let g=e[0],_=t[l?3:1]*a;for(let w=0,b=e.length-p-(l?1:0);w<p;++w,++b){let S=e[b],v=h?S*s[w]:c[w],$=Yc(S,s[w],i[w],t[b],r[w],v);Jc($,n,i,w,w+p),h&&c.push(s[w]*(S-1)+u[w]+(t[b]-1)*r[w]+1-i[w]-i[w+p])}c.splice(0,0,g),c.splice(l?3:1,0,_)},ts=(e,t)=>{let r=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((h,g)=>h*g,1)===0){r.length=0;for(let h=2;h<t[1].dims.length;++h)r.push(t[1].dims[h])}let n=e.format==="NHWC";r.splice(0,0,t[1].dims[0]),r.splice(n?3:1,0,t[1].dims[1]);let a=e.pads.slice(),i=e.outputShape.slice(),s=e.outputPadding.slice(),l=t[0].dims,u=e.dilations.slice();if(u.reduce((h,g)=>h+g,0)===0){let h=t[0].dims.length-2;u=new Array(h).fill(1)}let c=e.strides.slice();if(c.reduce((h,g)=>h+g,0)===0){let h=t[0].dims.length-2;c=new Array(h).fill(1)}ep(l,r,u,e.autoPad,e.group,a,c,n,s,i);let p=Object.assign({},e);return Object.assign(p,{kernelShape:r,pads:a,outputPadding:s,outputShape:i,dilations:u,strides:c}),p},hy=e=>{let t=Bo(e),r=e.format,n=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],a=e.dilations,i=e.group,s=e.kernelShape,l=e.pads,u=e.strides,c=e.wIsConst(),p=e.outputPadding,h=e.outputShape;return{autoPad:n,format:r,dilations:a,group:i,kernelShape:s,outputPadding:p,outputShape:h,pads:l,strides:u,wIsConst:c,...t,cacheKey:`${e.format};${t.activation};`}},tp=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],n=e[1].dims[0];if(r!==n)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let a=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==a))throw new Error("invalid bias");let i=e[0].dims.length-2;if(t.dilations.reduce((s,l)=>s+l,0)>0&&t.dilations.length!==i)throw new Error(`dilations should be ${i}D`);if(t.strides.reduce((s,l)=>s+l,0)>0&&t.strides.length!==i)throw new Error(`strides should be ${i}D`);if(t.pads.reduce((s,l)=>s+l,0)>0&&t.pads.length!==i*2)throw new Error(`pads should be ${i*2}D`);if(t.outputPadding.length!==i&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${i}D`);if(t.kernelShape.reduce((s,l)=>s+l,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},rs=(e,t,r,n)=>{let a=e.kernelCustomData.wT??e.compute(Tt(t[1],[2,3,0,1]),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=a);let i=[t[0],a];t.length===3&&i.push(t[2]),e.compute(fy(i,r,n),{inputs:i})},rp=(e,t)=>{let r=t.format==="NHWC",n=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&n.push(e.inputs[2]);let a=t.kernelShape;(a.length===0||a[0]===0)&&(a=[e.inputs[1].dims[2]]);let i=t.dilations;(i.length===0||i[0]===0)&&(i=[1]);let s=t.strides;(s.length===0||s[0]===0)&&(s=[1]);let l=t.pads;l.length===0&&(l=[0,0]),l=[0,l[0],0,l[1]],s=[1].concat(s),i=[1].concat(i),a=[1].concat(a);let u=t.outputPadding;u=[0].concat(u);let c=ts({...t,pads:l,strides:s,dilations:i,kernelShape:a,outputPadding:u},n);rs(e,n,c,p=>r?[p[0],p[2],p[3]]:[p[0],p[1],p[3]])},my=(e,t)=>{if(tp(e.inputs,t),e.inputs[0].dims.length===3)rp(e,t);else{let r=ts(t,e.inputs);rs(e,e.inputs,r)}}}),ip,gy,yy,f1=K(()=>{ge(),Se(),Ze(),Ce(),ip=(e,t,r,n)=>{let a=B.size(t),i=t.length,s=P("input",e,i),l=se("output",e,i),u=r.dataType===6?r.getInt32Array()[0]:Number(r.getBigInt64Array()[0]),c=B.normalizeAxis(u,i),p=h=>{let g=` i32(${s.indicesGet("inputIndices","uniforms.axis")}) `,_=oe("uniforms.input_shape","uniforms.axis",i),w=n.reverse?g+(n.exclusive?" + 1":""):"0",b=n.reverse?_:g+(n.exclusive?"":" + 1");return`
                ${h.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(s,l)}
                ${h.mainStart()}
                  ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${l.offsetToIndices("global_idx")};
                  var sum = ${l.type.value}(0);
                  let first : i32 = ${w};
                  let last : i32 = ${b};
                  for (var i : i32 = first; i < last; i++) {
                    ${s.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${s.getByIndices("inputIndices")};
                  }
                  ${l.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:n.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:[{type:12,data:a},{type:12,data:c},...le(t,t)]}),getShaderSource:p}},gy=(e,t)=>{let r=e.inputs[0].dims,n=e.inputs[0].dataType,a=e.inputs[1];e.compute(ip(n,r,a,t),{inputs:[0]})},yy=e=>{let t=e.exclusive===1,r=e.reverse===1;return De({exclusive:t,reverse:r})}}),np,ap,sp,_y,wy,h1=K(()=>{ge(),Se(),Ze(),Ce(),np=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},ap=(e,t,r,n)=>{let a=[];a.push(`fn perm(i: ${n.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`);for(let i=0;i<t;++i)a.push(r.indicesSet("a",e[i],`i[${i}]`));return a.push("return a;}"),a.join(`
`)},sp=(e,t)=>{let r,n,a,i,s,l,u=t.format==="NHWC",c=t.blocksize,p=t.mode==="DCR";u?([r,n,a,i]=e.dims,s=p?[r,n,a,c,c,i/c**2]:[r,n,a,i/c**2,c,c],l=p?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([r,n,a,i]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],s=p?[r,c,c,i/c**2,n,a]:[r,i/c**2,c,c,n,a],l=p?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let h=e.reshape(s),g=h.dims.length,_=e.dataType,w=P("a",_,g),b=se("output",_,g),S=v=>`
  ${v.registerUniform("output_size","u32").declareVariables(w,b)}

  ${ap(l,g,w,b)}

  ${v.mainStart()}
    ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${b.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${b.setByOffset("global_idx",w.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:v=>{let $=u?[r,n*c,a*c,i/c**2]:[r,i/c**2,n*c,a*c],C=B.size($),T=h.dims,I=B.sortBasedOnPerm(T,l);return{outputs:[{dims:$,dataType:v[0].dataType}],dispatchGroup:{x:Math.ceil(C/64)},programUniforms:[{type:12,data:C},...le(T,I)]}},getShaderSource:S}},_y=(e,t)=>{np(e.inputs),e.compute(sp(e.inputs[0],t))},wy=e=>De({blocksize:e.blocksize,mode:e.mode,format:e.format})}),bn,$i,is,op,lp,up,dp,ns,cp,by,vy,m1=K(()=>{ge(),Se(),Ze(),Ce(),bn="[a-zA-Z]|\\.\\.\\.",$i="("+bn+")+",is="^"+$i+"$",op="("+$i+",)*"+$i,lp="^"+op+"$",up=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let r=this.symbolToIndices.get(e);r===void 0?r=[t]:r.push(t),this.symbolToIndices.set(e,r)}},dp=class{constructor(e,t){var a;this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[r,n]=t.includes("->")?t.split("->",2):[t,""];if(!r.match(RegExp(lp)))throw new Error("Invalid LHS term");if(r.split(",").forEach((i,s)=>{let l=e[s].dims.slice();if(!i.match(RegExp(is)))throw new Error("Invalid LHS term");let u=this.processTerm(i,!0,l,s);this.lhs.push(u)}),n==="")n+=[...this.symbolToInfo.entries()].filter(([i,s])=>s.count===1||i==="...").map(([i])=>i).join("");else if(!n.match(RegExp($i)))throw new Error("Invalid RHS");(a=n.match(RegExp(bn,"g")))==null||a.forEach(i=>{if(i==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let s=this.symbolToInfo.get(i);if(s===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(s.dimValue)}}),this.rhs=this.processTerm(n,!1,this.outputDims)}addSymbol(e,t,r){let n=this.symbolToInfo.get(e);if(n!==void 0){if(n.dimValue!==t&&n.count!==1)throw new Error("Dimension mismatch");n.count++,n.inputIndices.push(r)}else n={count:1,dimValue:t,inputIndices:[r]};this.symbolToInfo.set(e,n)}processTerm(e,t,r,n=-1){let a=r.length,i=!1,s=[],l=0;if(!e.match(RegExp(is))&&!t&&e!=="")throw new Error("Invalid LHS term");let u=e.match(RegExp(bn,"g")),c=new up(n);return u==null||u.forEach((p,h)=>{if(p==="..."){if(i)throw new Error("Only one ellipsis is allowed per input term");i=!0;let g=a-u.length+1;if(g<0)throw new Error("Ellipsis out of bounds");if(s=r.slice(l,l+g),this.hasEllipsis){if(this.ellipsisDims.length!==s.length||this.ellipsisDims.toString()!==s.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=s;else throw new Error("Ellipsis must be specified in the LHS");for(let _=0;_<s.length;_++){let w=String.fromCharCode(48+_);c.addSymbol(w,h+_),this.addSymbol(w,r[l++],n)}}else c.addSymbol(p,h+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(p,r[l++],n)}),c}},ns=e=>e+"_max",cp=(e,t,r,n)=>{let a=e.map(c=>c.length).map((c,p)=>P(`input${p}`,t,c)),i=B.size(n),s=se("output",t,n.length),l=[...r.symbolToInfo.keys()].filter(c=>!r.rhs.symbolToIndices.has(c)),u=c=>{let p=[],h="var prod = 1.0;",g="var sum = 0.0;",_="sum += prod;",w=[],b=[],S=[],v=[],$=r.symbolToInfo.size===r.rhs.symbolToIndices.size;r.symbolToInfo.forEach((T,I)=>{var O;if(r.rhs.symbolToIndices.has(I)){let A=(O=r.rhs.symbolToIndices.get(I))==null?void 0:O[0];A!==void 0&&r.lhs.forEach((M,W)=>{if(T.inputIndices.includes(W)){let X=M.symbolToIndices.get(I);if(X===void 0)throw new Error("Invalid symbol error");X.forEach(de=>{p.push(`${a[W].indicesSet(`input${W}Indices`,de,s.indicesGet("outputIndices",A))}`)})}})}else r.lhs.forEach((A,M)=>{if(T.inputIndices.includes(M)){let W=A.symbolToIndices.get(I);if(W===void 0)throw new Error("Invalid symbol error");W.forEach(X=>{w.push(`${a[M].indicesSet(`input${M}Indices`,X,`${I}`)}`)}),v.push(`prod *= ${a[M].getByIndices(`input${M}Indices`)};`)}}),b.push(`for(var ${I}: u32 = 0; ${I} < uniforms.${ns(I)}; ${I}++) {`),S.push("}")});let C=$?[...p,`let sum = ${a.map((T,I)=>T.getByIndices(`input${I}Indices`)).join(" * ")};`]:[...p,g,...b,...w,h,...v,_,...S];return`
            ${c.registerUniforms(l.map(T=>({name:`${ns(T)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...a,s)}

            ${c.mainStart()}
            ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${s.offsetToIndices("global_idx")};
            ${a.map((T,I)=>`var input${I}Indices: ${a[I].type.indices};`).join(`
`)}
            ${C.join(`
`)};
            ${s.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:r.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let c=l.filter(h=>r.symbolToInfo.has(h)).map(h=>{var g;return{type:12,data:((g=r.symbolToInfo.get(h))==null?void 0:g.dimValue)||0}});c.push({type:12,data:i});let p=e.map((h,g)=>[...le(h)]).reduce((h,g)=>h.concat(g),c);return p.push(...le(n)),{outputs:[{dims:n,dataType:t}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:p}},getShaderSource:u}},by=(e,t)=>{let r=new dp(e.inputs,t.equation),n=r.outputDims,a=e.inputs.map((i,s)=>i.dims);e.compute(cp(a,e.inputs[0].dataType,r,n))},vy=e=>{let t=e.equation.replace(/\s+/g,"");return De({equation:t})}}),pp,as,fp,hp,$y,g1=K(()=>{ge(),Se(),Ce(),pp=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),n=r.length<t.length?0:r.length-t.length,a=t.length<r.length?0:t.length-r.length;for(;n<r.length&&a<t.length;++n,++a)if(r[n]!==t[a]&&r[n]!==1&&t[a]!==1)throw new Error("Expand requires shape to be broadcastable to input")},as=(e,t)=>{let r=e.length-t.length,n=[];for(let a=0;a<r;++a)n.push(e[a]);for(let a=0;a<t.length;++a)n.push(t[a]===1?e[a+r]:t[a]);return n},fp=(e,t)=>e.length>t.length?as(e,t):as(t,e),hp=e=>{let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),n=fp(t,r),a=e[0].dataType,i=a===9||B.size(t)===1,s=a===9||t.length>0&&t[t.length-1]%4===0?4:1,l=i||n.length>0&&n[n.length-1]%4===0?4:1,u=Math.ceil(B.size(n)/l),c=h=>{let g=P("input",a,t.length,s),_=se("output",a,n.length,l),w;if(a===9){let b=(S,v,$="")=>`
          let outputIndices${v} = ${_.offsetToIndices(`outputOffset + ${v}u`)};
          let offset${v} = ${g.broadcastedIndicesToOffset(`outputIndices${v}`,_)};
          let index${v} = offset${v} / 4u;
          let component${v} = offset${v} % 4u;
          ${S}[${v}] = ${$}(${g.getByOffset(`index${v}`)}[component${v}]);
        `;w=`
        let outputOffset = global_idx * ${l};
        var data = vec4<u32>(0);
        ${b("data",0,"u32")}
        ${b("data",1,"u32")}
        ${b("data",2,"u32")}
        ${b("data",3,"u32")}
        ${_.setByOffset("global_idx","data")}
      }`}else w=`
        let outputIndices = ${_.offsetToIndices(`global_idx * ${l}`)};
        let inputOffset = ${g.broadcastedIndicesToOffset("outputIndices",_)};
        let data = ${_.type.value}(${g.getByOffset(`inputOffset / ${s}`)});
        ${_.setByOffset("global_idx","data")}
      }`;return`
    ${h.registerUniform("vec_size","u32").declareVariables(g,_)}
    ${h.mainStart()}
    ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${w}`},p=[{type:12,data:u},...le(t,n)];return{name:"Expand",shaderCache:{hint:`${n.length};${s}${l}`,inputDependencies:["rank"]},getShaderSource:c,getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:p})}},$y=e=>{pp(e.inputs),e.compute(hp(e.inputs),{inputs:[0]})}}),mp,xy,y1=K(()=>{ge(),Se(),Ce(),Ro(),mp=e=>{let t=e[0].dataType,r=B.size(e[0].dims),n=B.size(e[1].dims),a=n%4===0,i=s=>{let l=P("x",t,[1],4),u=P("bias",t,[1],4),c=se("y",t,[1],4),p=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],h=_=>`
      let bias${_}_offset: u32 = (global_idx * 4 + ${_}) % uniforms.bias_size;
      let bias${_} = ${u.getByOffset(`bias${_}_offset / 4`)}[bias${_}_offset % 4];`,g=a?`
      let bias = ${u.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${h(0)}${h(1)}${h(2)}${h(3)}
      let bias = ${l.type.value}(bias0, bias1, bias2, bias3);`;return`${s.registerUniforms(p).declareVariables(l,u,c)}

    ${Ls(st(t))}

    ${s.mainStart(oi)}
      ${s.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${l.getByOffset("global_idx")};
      ${g}
      let x_in = x + bias;
      ${c.setByOffset("global_idx",qs("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${a}`,inputDependencies:["type","type"]},getShaderSource:i,getRunData:s=>({outputs:[{dims:s[0].dims,dataType:s[0].dataType}],programUniforms:[{type:12,data:Math.ceil(r/4)},{type:12,data:n}],dispatchGroup:{x:Math.ceil(r/oi/4)}})}},xy=e=>{e.inputs.length<2||B.size(e.inputs[1].dims)===0?Vg(e):e.compute(mp(e.inputs))}}),gp,yp,Sy,Ty,_1=K(()=>{ge(),Se(),Ze(),Ce(),gp=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},yp=(e,t)=>{let r=e[0].dims,n=e[1].dims,a=r.length,i=B.normalizeAxis(t.axis,a),s=r.slice(0);s.splice(i,1,...n);let l=r[i],u=e[0].dataType===9?4:1,c=Math.ceil(B.size(s)/u),p=[{type:12,data:c},{type:6,data:l},{type:12,data:i},...le(e[0].dims,e[1].dims,s)],h=g=>{let _=P("data",e[0].dataType,e[0].dims.length,u),w=P("inputIndices",e[1].dataType,e[1].dims.length),b=se("output",e[0].dataType,s.length,u),S=$=>{let C=n.length,T=`var indicesIndices${$}  = ${w.type.indices}(0);`;for(let I=0;I<C;I++)T+=`${C>1?`indicesIndices${$}[${I}]`:`indicesIndices${$}`} = ${s.length>1?`outputIndices${$}[uniforms.axis + ${I}]`:`outputIndices${$}`};`;T+=`
          var idx${$} = ${w.getByIndices(`indicesIndices${$}`)};
          if (idx${$} < 0) {
            idx${$} = idx${$} + uniforms.axisDimLimit;
          }
          var dataIndices${$} : ${_.type.indices};
        `;for(let I=0,O=0;I<a;I++)I===i?(T+=`${a>1?`dataIndices${$}[${I}]`:`dataIndices${$}`} = u32(idx${$});`,O+=C):(T+=`${a>1?`dataIndices${$}[${I}]`:`dataIndices${$}`} = ${s.length>1?`outputIndices${$}[${O}]`:`outputIndices${$}`};`,O++);return T},v;if(e[0].dataType===9){let $=(C,T,I="")=>`
          let outputIndices${T} = ${b.offsetToIndices(`outputOffset + ${T}u`)};
          ${S(T)};
          let offset${T} = ${_.indicesToOffset(`dataIndices${T}`)};
          let index${T} = offset${T} / 4u;
          let component${T} = offset${T} % 4u;
          ${C}[${T}] = ${I}(${_.getByOffset(`index${T}`)}[component${T}]);
        `;v=`
        let outputOffset = global_idx * ${u};
        var value = vec4<u32>(0);
        ${$("value",0,"u32")}
        ${$("value",1,"u32")}
        ${$("value",2,"u32")}
        ${$("value",3,"u32")}
        ${b.setByOffset("global_idx","value")}
      `}else v=`
      let outputIndices = ${b.offsetToIndices("global_idx")};
      ${S("")};
      let value = ${_.getByIndices("dataIndices")};
      ${b.setByOffset("global_idx","value")};
      `;return`
      ${g.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(_,w,b)}
      ${g.mainStart()}
        ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${v}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:p}),getShaderSource:h}},Sy=e=>De({axis:e.axis}),Ty=(e,t)=>{let r=e.inputs;gp(r),e.compute(yp(e.inputs,t))}}),_p,Cy,ky,w1=K(()=>{ge(),Se(),Ce(),_p=(e,t,r,n,a,i,s,l,u)=>{let c=[{type:12,data:i},{type:12,data:n},{type:12,data:a},{type:12,data:r},{type:12,data:s},{type:12,data:l},{type:12,data:u}],p=[i];c.push(...le(t.dims,p));let h=g=>{let _=P("indices_data",t.dataType,t.dims.length),w=se("input_slice_offsets_data",12,1,1),b=[_,w],S=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:a.length},{name:"sizes_from_slice_dims_data",type:"u32",length:r.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
  ${g.registerUniforms(S).declareVariables(...b)}
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
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${a.length}_${r.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:p,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:c}),getShaderSource:h},{inputs:[t],outputs:[-1]})[0]},Cy=(e,t)=>{let r=e.inputs,n=r[0].dims,a=r[0].dataType,i=r[1].dims,s=i[i.length-1],l=B.sizeToDimension(i,i.length-1),u=B.sizeFromDimension(n,t.batchDims+s),c=B.sizeToDimension(n,t.batchDims),p=B.sizeFromDimension(n,t.batchDims),h=l/c,g=new Array(s),_=u;for(let T=0;T<s;++T)g[s-1-T]=_,_*=n[t.batchDims+s-1-T];let w=_p(e,r[1],g,t.batchDims,n,l,h,p,s),b=t.batchDims+s;if(b>n.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let S=i.slice(0,-1).concat(n.slice(b)),v=B.size(S),$=[{type:12,data:v},{type:12,data:u},...le(r[0].dims,w.dims,S)],C=T=>{let I=P("data",r[0].dataType,r[0].dims.length),O=P("slice_offsets",12,w.dims.length),A=se("output",r[0].dataType,S.length);return`
          ${T.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(I,O,A)}
            ${T.mainStart()}
            ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:S,dataType:a}],dispatchGroup:{x:Math.ceil(v/64)},programUniforms:$}),getShaderSource:C},{inputs:[r[0],w]})},ky=e=>({batchDims:e.batch_dims,cacheKey:""})}),wp,bp,Ey,Iy,b1=K(()=>{ge(),Se(),Ze(),Ce(),wp=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let r=B.normalizeAxis(t.quantizeAxis,e[0].dims.length),n=t.blockSize,a=e[0],i=e[2],s=e.length===4?e[3]:void 0;if(i.dims.length!==a.dims.length||!a.dims.map((l,u)=>u===r?Math.ceil(l/n)===i.dims[u]:l===i.dims[u]).reduce((l,u)=>l&&u,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(s){if(s.dataType!==a.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(s.dims.length!==i.dims.length||!s.dims.map((l,u)=>l===i.dims[u]).reduce((l,u)=>l&&u,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},bp=(e,t)=>{let r=e[0].dims,n=e[1].dims,a=r.length,i=B.normalizeAxis(t.gatherAxis,a),s=B.normalizeAxis(t.quantizeAxis,a),l=r.slice(0);l.splice(i,1,...n);let u=B.size(l),c=e[2].dataType,p=e[0].dataType===22,h=[{type:12,data:u},{type:12,data:s},{type:12,data:i},{type:12,data:t.blockSize},...le(...e.map((_,w)=>_.dims),l)],g=_=>{let w=P("data",e[0].dataType,e[0].dims.length),b=P("inputIndices",e[1].dataType,e[1].dims.length),S=P("scales",e[2].dataType,e[2].dims.length),v=e.length>3?P("zeroPoint",e[3].dataType,e[3].dims.length):void 0,$=se("output",c,l.length),C=[w,b,S];v&&C.push(v);let T=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${_.registerUniforms(T).declareVariables(...C,$)}
        ${_.mainStart()}
        let output_indices = ${$.offsetToIndices("global_idx")};
        var indices_indices = ${b.type.indices}(0);
        ${n.length>1?`
          for (var i: u32 = 0; i < ${n.length}; i++) {
            let index = ${$.indicesGet("output_indices","uniforms.gather_axis + i")};
            ${b.indicesSet("indices_indices","i","index")};
          }`:`indices_indices = ${$.indicesGet("output_indices","uniforms.gather_axis")};`};
        var data_indices = ${w.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${$.indicesGet("output_indices","i")};
          ${w.indicesSet("data_indices","i","index")};
        }
        var index_from_indices = ${b.getByIndices("indices_indices")};
        if (index_from_indices < 0) {
          index_from_indices += ${r[i]};
        }
        ${w.indicesSet("data_indices","uniforms.gather_axis","u32(index_from_indices)")};
        for (var i = uniforms.gather_axis + 1; i < ${l.length}; i++) {
          let index = ${$.indicesGet("output_indices",`i + ${n.length} - 1`)};
          ${w.indicesSet("data_indices","i","index")};
        }
        let data_offset = ${w.indicesToOffset("data_indices")};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${w.getByOffset("data_offset / 8")};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${p?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${S.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${S.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${S.getByIndices("scale_indices")};
        ${v?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${v.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${v.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${p?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${st(c)}(quantized_data - zero_point) * scale;
        ${$.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((_,w)=>w!==1).map(_=>_.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(_,w)=>"rank")},getRunData:()=>({outputs:[{dims:l,dataType:c}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:h}),getShaderSource:g}},Ey=(e,t)=>{let r=e.inputs;wp(r,t),e.compute(bp(e.inputs,t))},Iy=e=>De({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),vp,$p,zy,Ay,v1=K(()=>{ge(),Se(),Ze(),Ce(),vp=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},$p=(e,t)=>{let r=e[0].dims,n=e[0].dataType,a=r.length,i=e[1].dims,s=e[1].dataType,l=B.normalizeAxis(t.axis,a),u=r[l],c=i.slice(0),p=B.size(c),h=P("input",n,a),g=P("indicesInput",s,i.length),_=se("output",n,c.length),w=[{type:12,data:p},{type:6,data:u},{type:12,data:l}];return w.push(...le(r,i,c)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:c,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:w}),getShaderSource:b=>`
      ${b.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(h,g,_)}
      ${b.mainStart()}
      ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${_.offsetToIndices("global_idx")};

      var idx = ${g.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${h.type.indices}(outputIndices);
      ${h.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${h.getByIndices("inputIndices")};

      ${_.setByOffset("global_idx","value")};
  }`}},zy=e=>De({axis:e.axis}),Ay=(e,t)=>{let r=e.inputs;vp(r),e.compute($p(e.inputs,t))}}),xp,Sp,Oy,Ry,$1=K(()=>{ge(),Se(),Ce(),xp=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},Sp=(e,t)=>{let r=e[0].dims.slice(),n=e[1].dims.slice(),[a,i,s]=zm.getShapeOfGemmResult(r,t.transA,n,t.transB,e.length===3?e[2].dims:void 0),l=[a,i];if(!l)throw new Error("Can't use gemm on the given tensors");let u=16,c=Math.ceil(i/u),p=Math.ceil(a/u),h=!0,g=B.size(l),_=[{type:12,data:h?c:g},{type:12,data:a},{type:12,data:i},{type:12,data:s},{type:1,data:t.alpha},{type:1,data:t.beta}],w=["type","type"];e.length===3&&(_.push(...le(e[2].dims)),w.push("rank")),_.push(...le(l));let b=v=>{let $="";t.transA&&t.transB?$="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?$="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?$="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&($="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let C=t.alpha===1?"":"value *= uniforms.alpha;",T=P("a",e[0].dataType,e[0].dims),I=P("b",e[1].dataType,e[1].dims),O=T.type.value,A=null,M=[T,I];e.length===3&&(A=P("c",e[2].dataType,e[2].dims.length),M.push(A));let W=se("output",e[0].dataType,l.length);M.push(W);let X=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${v.registerUniforms(X).declareVariables(...M)}

  ${v.mainStart()}
    ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${O}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${$}
    }

    ${C}
    ${A!=null?`let cOffset = ${A.broadcastedIndicesToOffset("vec2(m, n)",W)}; value += ${O}(uniforms.beta) * ${A.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},S=v=>{let $=P("a",e[0].dataType,e[0].dims),C=P("b",e[1].dataType,e[1].dims),T=null,I=[$,C];e.length===3&&(T=P("c",e[2].dataType,e[2].dims.length),I.push(T));let O=se("output",e[0].dataType,l.length);I.push(O);let A=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],M="",W="";t.transA&&t.transB?(W=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${$.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${C.type.value}(0);
      }
      `,M="value += tile_a[k][local_id.y] * tile_b[local_id.x][k];"):t.transA&&!t.transB?(W=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${$.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${C.type.value}(0);
      }
      `,M="value += tile_a[k][local_id.y] * tile_b[k][local_id.x];"):!t.transA&&t.transB?(W=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${$.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${C.type.value}(0);
      }
      `,M="value += tile_a[local_id.y][k] * tile_b[local_id.x][k];"):!t.transA&&!t.transB&&(W=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${$.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${C.type.value}(0);
      }
      `,M="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let X=t.alpha===1?"":"value *= uniforms.alpha;";return`
  ${v.registerUniforms(A).declareVariables(...I)}
  var<workgroup> tile_a: array<array<${$.type.storage}, ${u}>, ${u}>;
  var<workgroup> tile_b: array<array<${C.type.storage}, ${u}>, ${u}>;
  ${v.mainStart([u,u,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * ${u};
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * ${u};
    let num_tiles = (uniforms.K - 1) / ${u} + 1;
    var k_start = 0u;
    var value = ${O.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${W}
      k_start = k_start + ${u};
      workgroupBarrier();

      for (var k: u32 = 0u; k < ${u}; k++) {
        ${M}
      }
      workgroupBarrier();
    }

    ${X}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${T!=null?`let cOffset = ${T.broadcastedIndicesToOffset("vec2(m, n)",O)}; value += ${O.type.value}(uniforms.beta) * ${T.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return h?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:w},getRunData:()=>({outputs:[{dims:l,dataType:e[0].dataType}],dispatchGroup:{x:c*p},programUniforms:_}),getShaderSource:S}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:w},getRunData:()=>({outputs:[{dims:l,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:_}),getShaderSource:b}},Oy=e=>{let t=e.transA,r=e.transB,n=e.alpha,a=e.beta;return{transA:t,transB:r,alpha:n,beta:a,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},Ry=(e,t)=>{xp(e.inputs),e.compute(Sp(e.inputs,t))}}),Ft,nr,Er,Ir,Tp,Cp,kp,Ep,Ip,zp,Ap,Op,By,My,x1=K(()=>{ge(),Se(),Ze(),Ce(),[Ft,nr,Er,Ir]=[0,1,2,3],Tp=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},Cp=`
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
`,kp=e=>`
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
`,Ep=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,Ip=e=>`
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
`,zp=(e,t,r)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${Ft}] = batch;
     indices[${nr}] = channel;`+(()=>{switch(r.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${Er}] = u32(r);
            indices[${Ir}] = u32(c);
          }
        `;case"border":return`
          indices[${Er}] = u32(clamp(r, 0, H - 1));
          indices[${Ir}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${Er}] = gs_reflect(r, border[1], border[3]);
          indices[${Ir}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${r.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices("indices")};
  }
`,Ap=(e,t,r)=>(()=>{switch(r.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${Ft}], indices[${nr}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${Ft}], indices[${nr}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${Ft}], indices[${nr}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${Ft}], indices[${nr}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${Ft}], indices[${nr}], border);

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
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${Ft}], indices[${nr}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${r.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,Op=(e,t)=>{let r=P("x",e[0].dataType,e[0].dims.length),n=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],a=P("grid",e[1].dataType,n.length,2),i=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(i=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[Ft,nr,Er,Ir]=[0,3,1,2]);let s=se("output",e[0].dataType,i.length),l=r.type.value,u=B.size(i),c=[{type:12,data:u},...le(e[0].dims,n,i)],p=h=>`
  ${h.registerUniform("output_size","u32").declareVariables(r,a,s)}
  ${Cp}
  ${kp(l)}
  ${Ep(t)}
  ${Ip(t)}
  ${zp(r,l,t)}

  ${h.mainStart()}
    ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${Er}]);
      let W_in = i32(uniforms.x_shape[${Ir}]);

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
      var grid_indices = vec3<u32>(indices[${Ft}], indices[${Er}], indices[${Ir}]);
      let nxy = ${a.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${Ap(s,l,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:h=>{let g=B.size(i);return{outputs:[{dims:i,dataType:h[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:c}},getShaderSource:p}},By=(e,t)=>{Tp(e.inputs),e.compute(Op(e.inputs,t))},My=e=>De({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),dt,Rp,Dy,ss,Bp,Oi,Ny,Py=K(()=>{ge(),Se(),Ze(),Io(),Oo(),Ce(),Tr(),dt=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,Rp=(e,t)=>{let r=e[0],n=dt(e,1),a=dt(e,2),i=dt(e,3),s=dt(e,4),l=dt(e,5),u=dt(e,6),c=dt(e,7);if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let p=r.dims[0],h=r.dims[1],g=r.dims.length===3?r.dims[2]:t.numHeads*r.dims[4],_=h,w=0,b=0,S=Math.floor(g/t.numHeads);if(u&&c&&B.size(u.dims)&&B.size(c.dims)){if(u.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(u.dims[0]!==p||u.dims[1]!==t.numHeads||u.dims[3]!==S)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(c.dims[0]!==p||c.dims[1]!==t.numHeads||c.dims[3]!==S)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(u.dims[2]!==c.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(c.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');w=u.dims[2],b=u.dims[2]}else if(u&&B.size(u.dims)||c&&B.size(c.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let v;if(n&&B.size(n.dims)>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(n.dims.length<3||n.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==n.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(n.dims.length===3){if(n.dims[2]!==r.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');v=2,_=n.dims[1]}else if(n.dims.length===5){if(n.dims[2]!==t.numHeads||n.dims[3]!==2||n.dims[4]!==S)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(a)throw new Error('Expect "value" be none when "key" has packed kv format.');v=5,_=n.dims[1]}else{if(n.dims[1]!==t.numHeads||n.dims[3]!==S)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');v=0,_=n.dims[2]}}else{if(r.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(r.dims[2]!==t.numHeads||r.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');v=3}if(i&&B.size(i.dims)>0){if(i.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(n&&n.dims.length===5&&n.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let $=w+_,C=0;if(s&&B.size(s.dims)>0){C=8;let A=s.dims;throw A.length===1?A[0]===p?C=1:A[0]===3*p+2&&(C=3):A.length===2&&A[0]===p&&A[1]===$&&(C=5),C===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let T=!1,I=g;if(a&&B.size(a.dims)>0){if(a.dims.length!==3&&a.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==a.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(a.dims.length===3){if(_!==a.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');I=a.dims[2]}else{if(_!==a.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');I=a.dims[1]*a.dims[3],T=!0}}let O=!1;if(s&&B.size(s.dims)>0)throw new Error("Key padding mask is not supported");if(l&&B.size(l.dims)>0){if(l.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(l.dims[0]!==p||l.dims[1]!==t.numHeads||l.dims[2]!==h||l.dims[3]!==$)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:p,sequenceLength:h,pastSequenceLength:w,kvSequenceLength:_,totalSequenceLength:$,maxSequenceLength:b,inputHiddenSize:0,hiddenSize:g,vHiddenSize:I,headSize:S,vHeadSize:Math.floor(I/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:C,scale:t.scale,broadcastResPosBias:O,passPastInKv:T,qkvFormat:v}},Dy=e=>De({...e}),ss=De({perm:[0,2,1,3]}),Bp=(e,t,r,n,a,i,s)=>{let l=[n,a,i],u=B.size(l),c=[{type:12,data:u},{type:12,data:s},{type:12,data:i}],p=h=>{let g=se("qkv_with_bias",t.dataType,l),_=P("qkv",t.dataType,l),w=P("bias",r.dataType,l),b=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${h.registerUniforms(b).declareVariables(_,w,g)}
  ${h.mainStart()}
    ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:l,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:c}),getShaderSource:p},{inputs:[t,r],outputs:[-1]})[0]},Oi=(e,t,r,n,a,i,s,l)=>{let u=i;if(s&&B.size(s.dims)>0){if(n===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return u=Bp(e,i,s,t,n,r*a,l),u=u.reshape([t,n,r,a]),r===1||n===1?u:e.compute(Tt(u,ss.perm),{inputs:[u],outputs:[-1]})[0]}else return i.dims.length===3&&(u=i.reshape([t,n,r,a])),r===1||n===1?u:e.compute(Tt(u,ss.perm),{inputs:[u],outputs:[-1]})[0]},Ny=(e,t)=>{let r=Rp(e.inputs,t),n=e.inputs[0],a=dt(e.inputs,1),i=dt(e.inputs,2),s=dt(e.inputs,3),l=dt(e.inputs,4),u=dt(e.inputs,5),c=dt(e.inputs,6),p=dt(e.inputs,7);if(n.dims.length===5)throw new Error("Packed QKV is not implemented");if((a==null?void 0:a.dims.length)===5)throw new Error("Packed KV is not implemented");let h=a&&i&&a.dims.length===4&&i.dims.length===4,g=Oi(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,n,s,0);if(h)return Gi(e,g,a,i,l,void 0,c,p,u,r);if(!a||!i)throw new Error("key and value must be provided");let _=Oi(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.headSize,a,s,r.hiddenSize),w=Oi(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.vHeadSize,i,s,2*r.hiddenSize);Gi(e,g,_,w,l,void 0,c,p,u,r)}}),Mp,Dp,Np,Pp,js,Uy,Wy,Ly=K(()=>{ge(),Se(),Ze(),Ce(),Mp=e=>{if(!e||e.length<1)throw new Error("too few inputs")},Dp=(e,t)=>{let r=[],n=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(a=>r.push(Number(a))),n=r.length),De({numOutputs:n,axis:t.axis,splitSizes:r})},Np=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${oe("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,Pp=e=>{let t=e.length,r=[];for(let n=0;n<t;++n){let a=e[n].setByIndices("indices","input[global_idx]");t===1?r.push(a):n===0?r.push(`if (output_number == ${n}u) { ${a} }`):n===t-1?r.push(`else { ${a} }`):r.push(`else if (output_number == ${n}) { ${a} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${r.join(`
`)}
      }`},js=(e,t)=>{let r=e[0].dims,n=B.size(r),a=e[0].dataType,i=B.normalizeAxis(t.axis,r.length),s=new Array(t.numOutputs),l=P("input",a,r.length),u=new Array(t.numOutputs),c=[],p=[],h=0,g=[{type:12,data:n}];for(let w=0;w<t.numOutputs;w++){h+=t.splitSizes[w],u[w]=h;let b=r.slice();b[i]=t.splitSizes[w],p.push(b),s[w]=se(`output${w}`,a,b.length),c.push({dims:p[w],dataType:e[0].dataType})}g.push({type:12,data:u},...le(r,...p));let _=w=>`
  ${w.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",u.length).declareVariables(l,...s)}
  ${Np(u.length)}
  ${Pp(s)}

  ${w.mainStart()}
    ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${l.offsetToIndices("global_idx")};
    var index = ${l.indicesGet("indices",i)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${oe("uniforms.size_in_split_axis","output_number - 1u",u.length)};
      ${l.indicesSet("indices",i,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:_,getRunData:()=>({outputs:c,dispatchGroup:{x:Math.ceil(n/64)},programUniforms:g})}},Uy=(e,t)=>{Mp(e.inputs);let r=e.inputs.length===1?t:Dp(e.inputs,t);e.compute(js(e.inputs,r),{inputs:[0]})},Wy=e=>{let t=e.axis,r=e.splitSizes,n=e.numOutputs<0?r.length:e.numOutputs;if(n!==r.length)throw new Error("numOutputs and splitSizes lengh must be equal");return De({axis:t,numOutputs:n,splitSizes:r})}}),Up,Wp,os,qy,S1=K(()=>{Ze(),Oo(),Py(),Ly(),Tr(),Up=(e,t)=>{if(t.doRotary)throw new Error("GroupQuerryAttention do_rotary attribute is not supported");if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let r=e[0],n=e[1],a=e[2],i=e[3],s=e[4];if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let l=!1,u=r.dims[0],c=r.dims[1],p=r.dims.length===3?l?r.dims[2]/3:r.dims[2]:t.numHeads*r.dims[4],h=c,g=0,_=!n||n.dims.length===0,w=Math.floor(_?p/(t.numHeads+2*t.kvNumHeads):p/t.numHeads);_&&(p=w*t.numHeads);let b=i&&i.dims.length!==0,S=s&&s.dims.length!==0;if(b&&i.dims.length===4&&i.dims[0]===u&&i.dims[1]!==t.kvNumHeads&&i.dims[2]===t.kvNumHeads&&i.dims[3]===w)throw new Error("BSNH pastKey/pastValue is not supported");if(b&&S){if(i.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(s.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');g=i.dims[2]}else if(b||S)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let v=1;if(n&&n.dims.length>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(n.dims.length<3||n.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==n.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(n.dims.length===3){if(r.dims[2]%n.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');h=n.dims[1]}else if(n.dims.length===5){if(n.dims[2]!==t.numHeads||n.dims[3]!==2||n.dims[4]!==w)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(a)throw new Error('Expect "value" be none when "key" has packed kv format.');h=n.dims[1]}else{if(n.dims[1]!==t.numHeads||n.dims[3]!==w)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');h=n.dims[2]}}else{if(r.dims.length!==3&&r.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(r.dims.length===5&&(r.dims[2]!==t.numHeads||r.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');v=3}let $=0,C=!1,T=t.kvNumHeads?w*t.kvNumHeads:p;if(a&&a.dims.length>0){if(a.dims.length!==3&&a.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==a.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(a.dims.length===3){if(h!==a.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');T=a.dims[2]}else{if(h!==a.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');T=a.dims[1]*a.dims[3],C=!0}}let I=e.length>4?e[5]:void 0;if(I&&I.dims.length!==1&&I.dims[0]!==u)throw new Error('Input "seqlens" is expected to have 1 dimension and the same dim 0 as batch_size');return{batchSize:u,sequenceLength:c,pastSequenceLength:g,kvSequenceLength:h,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:p,vHiddenSize:T,headSize:w,vHeadSize:Math.floor(T/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:$,scale:t.scale,broadcastResPosBias:!1,passPastInKv:C,qkvFormat:v}},Wp=De({perm:[0,2,1,3]}),os=(e,t,r)=>{let n=t,a=r.kvNumHeads;return t.dims.length===3&&r.kvSequenceLength!==0&&(n=t.reshape([r.batchSize,r.kvSequenceLength,a,r.headSize]),n=e.compute(Tt(n,Wp.perm),{inputs:[n],outputs:[-1]})[0]),n},qy=(e,t)=>{var S;let r=Up(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(((S=e.inputs[1])==null?void 0:S.dims.length)===5)throw new Error("Packed KV is not implemented");let n=e.inputs[0],a=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,i=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,s=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,l=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,u=e.inputs.length>4?e.inputs[5]:void 0,c=e.inputs.length>5?e.inputs[6]:void 0,p=r.kvNumHeads?r.kvNumHeads:r.numHeads,h=De({axis:2,numOutputs:3,splitSizes:[r.numHeads*r.headSize,p*r.headSize,p*r.headSize]}),[g,_,w]=!a&&!i?e.compute(js([n],h),{inputs:[n],outputs:[-1,-1,-1]}):[n,a,i],b=Oi(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,g,void 0,0);Gi(e,b,os(e,_,r),os(e,w,r),void 0,void 0,s,l,void 0,r,u,c)}}),ls,Lp,qp,Vy,T1=K(()=>{ge(),Se(),Tr(),Ce(),ls=(e,t,r,n,a,i,s,l)=>{let u=Ge(i),c=u===1?"f32":`vec${u}f`,p=u===1?"vec2f":`mat2x${u}f`,h=a*s,g=64;h===1&&(g=256);let _=[a,s,i/u],w=[a,s,2],b=["rank","type","type"],S=[];S.push(...le(_,w));let v=$=>{let C=P("x",t.dataType,3,u),T=P("scale",r.dataType,r.dims),I=P("bias",n.dataType,n.dims),O=se("output",1,3,2),A=[C,T,I,O];return`
  var<workgroup> workgroup_shared : array<${p}, ${g}>;
  const workgroup_size = ${g}u;
  ${$.declareVariables(...A)}
  ${$.mainStart(g)}
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
    workgroup_shared[local_idx] = ${p}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${vr("workgroup_shared[0][0]",u)} / f32(hight * ${u});
      let squared_sum_final = ${vr("workgroup_shared[0][1]",u)} / f32(hight * ${u});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${l}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${u};${l};${g}`,inputDependencies:b},getRunData:()=>({outputs:[{dims:w,dataType:1}],dispatchGroup:{x:h},programUniforms:S}),getShaderSource:v},{inputs:[t,r,n],outputs:[-1]})[0]},Lp=(e,t,r)=>{let n=t[0].dims,a=n,i=2,s=n[0],l=n[1],u=B.sizeFromDimension(n,i),c=Ge(u),p=B.size(a)/c,h=ls(e,t[0],t[1],t[2],s,u,l,r.epsilon),g=[s,l,u/c],_=[s,l],w=["type","none"],b=S=>{let v=P("x",t[0].dataType,g.length,c),$=P("scale_shift",1,_.length,2),C=se("output",t[0].dataType,g.length,c),T=[v,$,C];return`
  ${S.registerUniform("output_size","u32").declareVariables(...T)}
  ${S.mainStart()}
  ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${C.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${$.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${v.getByOffset("global_idx")} * ${C.type.value}(scale_shift.x) + ${C.type.value}(scale_shift.y);
      ${C.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${c}`,inputDependencies:w},getRunData:()=>({outputs:[{dims:a,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:[{type:12,data:p},...le(g,_,g)]}),getShaderSource:b},{inputs:[t[0],h]})},qp=(e,t,r)=>{let n=t[0].dims,a=n,i=n[0],s=n[n.length-1],l=B.sizeFromDimension(n,1)/s,u=Ge(s),c=B.size(a)/u,p=[{type:12,data:l},{type:12,data:Math.floor(s/u)}],h=["type","type"],g=!1,_=[0,n.length-1];for(let v=0;v<n.length-2;v++)g=g||n[v+1]!==1,_.push(v+1);g=g&&n[n.length-1]!==1;let w=g?e.compute(Tt(e.inputs[0],_),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:n.length},(v,$)=>n[_[$]])),b=ls(e,w,t[1],t[2],i,l,s,r.epsilon),S=v=>{let $=et(t[0].dataType),C=u===1?"vec2f":`mat${u}x2f`,T=A=>{let M=A===0?"x":"y",W=u===1?"f32":`vec${u}f`;switch(u){case 1:return`${$}(${W}(scale.${M}))`;case 2:return`vec2<${$}>(${W}(scale[0].${M}, scale[1].${M}))`;case 4:return`vec4<${$}>(${W}(scale[0].${M}, scale[1].${M}, scale[2].${M}, scale[3].${M}))`;default:throw new Error(`Not supported compoents ${u}`)}},I=P("input",t[0].dataType,t[0].dims,u),O=se("output",t[0].dataType,a,u);return`
  @group(0) @binding(0) var<storage, read> input : array<${I.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${C}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${O.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${v.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${T(0)}, ${T(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${u}`,inputDependencies:h},getRunData:()=>({outputs:[{dims:a,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:p}),getShaderSource:S},{inputs:[t[0],b]})},Vy=(e,t)=>{t.format==="NHWC"?qp(e,e.inputs,t):Lp(e,e.inputs,t)}}),Vp,Hp,Hy,C1=K(()=>{ge(),Se(),Ce(),Vp=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},Hp=(e,t,r)=>{let n=t.simplified,a=e[0].dims,i=e[1],s=!n&&e[2],l=a,u=B.normalizeAxis(t.axis,a.length),c=B.sizeToDimension(a,u),p=B.sizeFromDimension(a,u),h=B.size(i.dims),g=s?B.size(s.dims):0;if(h!==p||s&&g!==p)throw new Error(`Size of X.shape()[axis:] == ${p}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${h} and bias size of ${g}`);let _=[];for(let I=0;I<a.length;++I)I<u?_.push(a[I]):_.push(1);let w=Ge(p),b=["type","type"],S=[{type:12,data:c},{type:1,data:p},{type:12,data:Math.floor(p/w)},{type:1,data:t.epsilon}];s&&b.push("type");let v=r>1,$=r>2,C=I=>{let O=et(e[0].dataType),A=[P("x",e[0].dataType,e[0].dims,w),P("scale",i.dataType,i.dims,w)];s&&A.push(P("bias",s.dataType,s.dims,w)),A.push(se("output",e[0].dataType,l,w)),v&&A.push(se("mean_data_output",1,_)),$&&A.push(se("inv_std_output",1,_));let M=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${I.registerUniforms(M).declareVariables(...A)}
  ${I.mainStart()}
    ${I.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${Ps("f32",w)};
    var mean_square_vector = ${Ps("f32",w)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${Jr(O,w,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${vr("mean_vector",w)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${vr("mean_square_vector",w)} / uniforms.norm_size ${n?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${Jr(O,w,"x[j + offset]")};
      let f32scale = ${Jr(O,w,"scale[j]")};
      output[j + offset] = ${A[0].type.value}((f32input ${n?"":"- mean"}) * inv_std_dev * f32scale
        ${s?`+ ${Jr(O,w,"bias[j]")}`:""}
      );
    }

    ${v?"mean_data_output[global_idx] = mean":""};
    ${$?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},T=[{dims:l,dataType:e[0].dataType}];return v&&T.push({dims:_,dataType:1}),$&&T.push({dims:_,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${w};${r};${n}`,inputDependencies:b},getRunData:()=>({outputs:T,dispatchGroup:{x:Math.ceil(c/64)},programUniforms:S}),getShaderSource:C}},Hy=(e,t)=>{Vp(e.inputs),e.compute(Hp(e.inputs,t,e.outputCount))}}),Fp,Fy,k1=K(()=>{Se(),No(),Po(),Fp=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},Fy=e=>{Fp(e.inputs);let t=si.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let r=t[t.length-1],n=e.inputs[0].dims[e.inputs[0].dims.length-1];if(r<8&&n<8)e.compute(Do(e.inputs,{activation:""},t));else{let a=t[t.length-2],i=B.size(e.inputs[0].dims.slice(0,-2)),s=B.size(e.inputs[1].dims.slice(0,-2));if(i!==1&&a===1&&s===1){let l=e.inputs[0].reshape([1,i,n]),u=e.inputs[1].reshape([1,n,r]),c=[1,i,r],p=[l,u];e.compute(Ln(p,{activation:""},t,c),{inputs:p})}else e.compute(Ln(e.inputs,{activation:""},t))}}}),Gp,jp,Kp,Gy,jy,E1=K(()=>{ge(),Se(),Ze(),Ce(),Gp=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let r=e[0],n=r.dims.length;if(r.dims[n-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let a=Math.floor((t.k+t.blockSize-1)/t.blockSize),i=t.blockSize/8*t.bits,s=e[1];if(!B.areEqual(s.dims,[t.n,a,i]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let l=e[2].dims;if(B.size(l)!==t.n*a)throw new Error("scales input size error.");if(e.length===4){let u=e[3].dims,c=t.bits>4?t.n*a:t.n*Math.floor((a+1)/2);if(B.size(u)!==c)throw new Error("zeroPoints input size error.")}},jp=(e,t)=>{let r=e[0].dims,n=r.length,a=r[n-2],i=t.k,s=t.n,l=r.slice(0,n-2),u=B.size(l),c=e[1].dims[2]/4,p=e[0].dataType,h=Ge(t.k),g=Ge(c),_=Ge(s),w=l.concat([a,s]),b=a>1&&s/_%2===0?2:1,S=B.size(w)/_/b,v=64,$=[],C=[u,a,i/h],T=B.convertShape(e[1].dims).slice();T.splice(-1,1,c/g),$.push(...le(C)),$.push(...le(T)),$.push(...le(e[2].dims)),e.length===4&&$.push(...le(B.convertShape(e[3].dims)));let I=[u,a,s/_];$.push(...le(I));let O=A=>{let M=C.length,W=P("a",e[0].dataType,M,h),X=P("b",12,T.length,g),de=P("scales",e[2].dataType,e[2].dims.length),ue=[W,X,de],fe=e.length===4?P("zero_points",12,e[3].dims.length):void 0;fe&&ue.push(fe);let _e=I.length,Te=se("output",e[0].dataType,_e,_),L=et(e[0].dataType),re=(()=>{switch(h){case 1:return`array<${L}, 8>`;case 2:return`mat4x2<${L}>`;case 4:return`mat2x4<${L}>`;default:throw new Error(`${h}-component is not supported.`)}})(),pe=()=>{let U=`
          // reuse a data
            var input_offset = ${W.indicesToOffset(`${W.type.indices}(batch, row, word_offset)`)};
            var a_data: ${re};
            for (var j: u32 = 0; j < ${8/h}; j++) {
              a_data[j] = ${W.getByOffset("input_offset")};
              input_offset++;
            }
          `;for(let q=0;q<_*b;q++)U+=`
            b_value = ${g===1?`b${q}_data`:`b${q}_data[i]`};
            b_value_lower = unpack4xU8(b_value & b_mask);
            b_value_upper = unpack4xU8((b_value >> 4) & b_mask);
            b_quantized_values = ${re}(${Array.from({length:4},(ae,ke)=>`${L}(b_value_lower[${ke}]), ${L}(b_value_upper[${ke}])`).join(", ")});
            b_dequantized_values = ${h===1?`${re}(${Array.from({length:8},(ae,ke)=>`(b_quantized_values[${ke}] - ${fe?`zero_point${q}`:"zero_point"}) * scale${q}`).join(", ")});`:`(b_quantized_values - ${re}(${Array(8).fill(`${fe?`zero_point${q}`:"zero_point"}`).join(",")})) * scale${q};`};
            workgroup_shared[local_id.x * ${b} + ${Math.floor(q/_)}]${_>1?`[${q%_}]`:""} += ${Array.from({length:8/h},(ae,ke)=>`${h===1?`a_data[${ke}] * b_dequantized_values[${ke}]`:`dot(a_data[${ke}], b_dequantized_values[${ke}])`}`).join(" + ")};
          `;return U},te=()=>{let U=`
            var col_index = col * ${_};
            ${fe?`
            let zero_point_bytes_per_col = (nBlocksPerCol + 1) / 2;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${L}(8);`}
            `;for(let q=0;q<_*b;q++)U+=`
            let scale${q} = ${de.getByOffset("col_index * nBlocksPerCol + block")};
            ${fe?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block >> 0x1u);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            zero_point_word = ${fe.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${q} = ${L}((zero_point_word) & 0xFu);`:""}
            col_index += 1;`;return U},Oe=()=>{let U=`col_index = col * ${_};`;for(let q=0;q<_*b;q++)U+=`
            let b${q}_data = ${X.getByIndices(`${X.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return U+=`
            var b_value: u32;
            let b_mask: u32 = 0x0F0F0F0Fu;
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${re};
            var b_dequantized_values: ${re};`,U};return`
        var<workgroup> workgroup_shared: array<${Te.type.value}, ${b*v}>;
        ${A.declareVariables(...ue,Te)}
        ${A.mainStart([v,1,1])}
          let output_indices = ${Te.offsetToIndices(`(global_idx / ${v}) * ${b}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${v}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/h};
            ${te()}
            for (var word: u32 = 0; word < ${c}; word += ${g}) {
              ${Oe()}
              for (var i: u32 = 0; i < ${g}; i++) {
                ${pe()}
                word_offset += ${8/h};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${b}) {
            var output_value: ${Te.type.value} = ${Te.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${v}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${b};
            }
            ${Te.setByIndices(`${Te.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${h};${g};${_};${b};${v}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:w,dataType:p}],dispatchGroup:{x:S},programUniforms:$}),getShaderSource:O}},Kp=(e,t)=>{let r=e[0].dims,n=r.length,a=r[n-2],i=t.k,s=t.n,l=r.slice(0,n-2),u=B.size(l),c=e[1].dims[2]/4,p=e[0].dataType,h=Ge(t.k),g=Ge(c),_=l.concat([a,s]),w=128,b=s%8===0?8:s%4===0?4:1,S=w/b,v=S*g*8,$=v/h,C=v/t.blockSize,T=B.size(_)/b,I=[],O=[u,a,i/h],A=B.convertShape(e[1].dims).slice();A.splice(-1,1,c/g),I.push(...le(O)),I.push(...le(A)),I.push(...le(e[2].dims)),e.length===4&&I.push(...le(B.convertShape(e[3].dims)));let M=[u,a,s];I.push(...le(M));let W=X=>{let de=O.length,ue=P("a",e[0].dataType,de,h),fe=P("b",12,A.length,g),_e=P("scales",e[2].dataType,e[2].dims.length),Te=[ue,fe,_e],L=e.length===4?P("zero_points",12,e[3].dims.length):void 0;L&&Te.push(L);let re=M.length,pe=se("output",e[0].dataType,re),te=et(e[0].dataType),Oe=()=>{switch(h){case 1:return`
          let a_data0 = vec4<${te}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${te}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${te}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${te}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${h}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${ue.type.value}, ${$}>;
        var<workgroup> inter_results: array<array<${pe.type.value}, ${S}>, ${b}>;
        ${X.declareVariables(...Te,pe)}
        ${X.mainStart([S,b,1])}
          let output_indices = ${pe.offsetToIndices(`workgroup_index * ${b}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${C} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${$};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${$}; a_offset += ${w})
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${ue.getByIndices(`${ue.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${ue.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${C} + local_id.x;
            ${L?`
            let zero_point_bytes_per_col = (n_blocks_per_col + 1) / 2;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block >> 0x1u);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            let zero_point_word = ${L.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${te}((zero_point_word) & 0xFu);`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${te}(8);`}
            let scale = ${_e.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${fe.getByIndices(`${fe.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/h};
            for (var i: u32 = 0; i < ${g}; i++) {
              ${Oe()}
              let b_value = ${g===1?"b_data":"b_data[i]"};
              let b_value_lower = unpack4xU8(b_value & 0x0F0F0F0Fu);
              let b_value_upper = unpack4xU8((b_value >> 4) & 0x0F0F0F0Fu);
              let b_quantized_values = mat2x4<${te}>(${Array.from({length:4},(U,q)=>`${te}(b_value_lower[${q}]), ${te}(b_value_upper[${q}])`).join(", ")});
              let b_dequantized_values = (b_quantized_values - mat2x4<${te}>(${Array(8).fill("zero_point").join(",")})) * scale;
              inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(U,q)=>`${`dot(a_data${q}, b_dequantized_values[${q}])`}`).join(" + ")};
              word_offset += ${8/h};
            }
            workgroupBarrier();
          }

          if (local_idx < ${b}) {
            var output_value: ${pe.type.value} = ${pe.type.value}(0);
            for (var b = 0u; b < ${S}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${pe.setByIndices(`${pe.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${h};${g};${S};${b}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:_,dataType:p}],dispatchGroup:{x:T},programUniforms:I}),getShaderSource:W}},Gy=(e,t)=>{Gp(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(Kp(e.inputs,t)):e.compute(jp(e.inputs,t))},jy=e=>De(e)}),Zp,Qp,Xp,Yp,Jp,ef,tf,rf,Ky,I1=K(()=>{ge(),Se(),Ce(),Zp=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},Qp=(e,t,r)=>{let n="";for(let a=t-1;a>=0;--a)n+=`
            k = i32(${e.indicesGet("indices",a)}) - ${oe("uniforms.pads",a,r)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${oe("uniforms.x_shape",a,t)})) {
              break;
            }
            offset += k * i32(${oe("uniforms.x_strides",a,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${n}
            value = x[offset];
          }
      `},Xp=(e,t,r)=>{let n="";for(let a=t-1;a>=0;--a)n+=`
                k = i32(${e.indicesGet("indices",a)}) - ${oe("uniforms.pads",a,r)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${oe("uniforms.x_shape",a,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${oe("uniforms.x_shape",a,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${oe("uniforms.x_strides",a,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${n}
              value = x[offset];
          `},Yp=(e,t,r)=>{let n="";for(let a=t-1;a>=0;--a)n+=`
                k = i32(${e.indicesGet("indices",a)}) - ${oe("uniforms.pads",a,r)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${oe("uniforms.x_shape",a,t)})) {
                  k = i32(${oe("uniforms.x_shape",a,t)}) - 1;
                }
                offset += k * i32(${oe("uniforms.x_strides",a,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${n}
              value = x[offset];
          `},Jp=(e,t,r)=>{let n="";for(let a=t-1;a>=0;--a)n+=`
                k = i32(${e.indicesGet("indices",a)}) - ${oe("uniforms.pads",a,r)};
                if (k < 0)  {
                  k += i32(${oe("uniforms.x_shape",a,t)}]);
                }
                if (k >= i32(${oe("uniforms.x_shape",a,t)})) {
                  k -= i32(${oe("uniforms.x_shape",a,t)});
                }
                offset += k * i32(${oe("uniforms.x_strides",a,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${n}
              value = x[offset];
          `},ef=(e,t,r)=>{switch(r.mode){case 0:return Qp(e,t,r.pads.length);case 1:return Xp(e,t,r.pads.length);case 2:return Yp(e,t,r.pads.length);case 3:return Jp(e,t,r.pads.length);default:throw new Error("Invalid mode")}},tf=(e,t)=>{let r=B.padShape(e[0].dims.slice(),t.pads),n=e[0].dims,a=B.size(r),i=[{type:12,data:a},{type:6,data:t.pads}],s=e.length>=3&&e[2].data;t.mode===0&&i.push({type:s?e[2].dataType:1,data:t.value}),i.push(...le(e[0].dims,r));let l=["rank"],u=c=>{let p=se("output",e[0].dataType,r.length),h=P("x",e[0].dataType,n.length),g=h.type.value,_=ef(p,n.length,t),w=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&w.push({name:"constant_value",type:s?g:"f32"}),`
            ${c.registerUniforms(w).declareVariables(h,p)}
            ${c.mainStart()}
            ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${p.offsetToIndices("global_idx")};

            var value = ${g}(0);
            ${_}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${s}`,inputDependencies:l},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(B.size(r)/64)},programUniforms:i}),getShaderSource:u}},rf=(e,t)=>{if(e.length>1){let r=e[1].getBigInt64Array(),n=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,a=e[0].dims.length,i=new Int32Array(2*a).fill(0);if(e.length>=4){let l=e[3].getBigInt64Array();for(let u=0;u<l.length;u++)i[Number(l[u])]=Number(r[u]),i[Number(l[u])+a]=Number(r[u+l.length])}else r.forEach((l,u)=>i[Number(u)]=Number(l));let s=[];return i.forEach(l=>s.push(l)),{mode:t.mode,value:n,pads:s}}else return t},Ky=(e,t)=>{Zp(e.inputs);let r=rf(e.inputs,t);e.compute(tf(e.inputs,r),{inputs:[0]})}}),xi,us,ds,cs,ps,nf,af,fs,hs,Zy,Qy,ms,Xy,Yy,gs,Jy,e_,t_,r_,z1=K(()=>{Wt(),ge(),Se(),Ce(),xi=e=>{if(Fe.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},us=(e,t,r)=>{let n=t.format==="NHWC",a=e.dims.slice();n&&a.splice(1,0,a.pop());let i=Object.hasOwnProperty.call(t,"dilations"),s=t.kernelShape.slice(),l=t.strides.slice(),u=i?t.dilations.slice():[],c=t.pads.slice();Un.adjustPoolAttributes(r,a,s,l,u,c);let p=Un.computePoolOutputShape(r,a,l,u,s,c,t.autoPad),h=Object.assign({},t);i?Object.assign(h,{kernelShape:s,strides:l,pads:c,dilations:u,cacheKey:t.cacheKey}):Object.assign(h,{kernelShape:s,strides:l,pads:c,cacheKey:t.cacheKey});let g=p.slice();return g.push(g.splice(1,1)[0]),[h,n?g:p]},ds=(e,t)=>{let r=t.format==="NHWC",n=B.size(e),a=B.size(t.kernelShape),i=[{type:12,data:n},{type:12,data:a}],s=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let l=t.kernelShape[t.kernelShape.length-1],u=t.strides[t.strides.length-1],c=t.pads[t.pads.length/2-1],p=t.pads[t.pads.length-1],h=!!(c+p);i.push({type:12,data:l},{type:12,data:u},{type:12,data:c},{type:12,data:p}),s.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let g=!1;if(t.kernelShape.length===2){let _=t.kernelShape[t.kernelShape.length-2],w=t.strides[t.strides.length-2],b=t.pads[t.pads.length/2-2],S=t.pads[t.pads.length-2];g=!!(b+S),i.push({type:12,data:_},{type:12,data:w},{type:12,data:b},{type:12,data:S}),s.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[i,s,!0,h,g]}else{if(r)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let l=B.computeStrides(t.kernelShape);i.push({type:12,data:l},{type:12,data:t.pads},{type:12,data:t.strides}),s.push({name:"kernelStrides",type:"u32",length:l.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let u=t.pads.reduce((c,p)=>c+p);return[i,s,!!u,!1,!1]}},cs=(e,t,r,n,a,i,s,l,u,c,p,h)=>{let g=a.format==="NHWC",_=t.type.value,w=se("output",t.type.tensor,n);if(a.kernelShape.length<=2){let b="",S="",v="",$=r-(g?2:1);if(p?b=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${$}] = indices[${$}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${$}] < 0 || xIndices[${$}]
                      >= uniforms.x_shape[${$}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${i}
                }`:b=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${$}] = indices[${$}] * uniforms.sw - uniforms.pwStart + i;
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
                `,v=`
              }
            `}return`
            ${e.registerUniforms(u).declareVariables(t,w)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

              let indices = ${w.offsetToIndices("global_idx")};
              var xIndices = ${w.offsetToIndices("global_idx")};

              var value = ${_}(${l});
              var pad = 0;
              ${S}
              ${b}
              ${v}
              ${s}

              output[global_idx] = value;
            }`}else{if(g)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let b=a.kernelShape.length,S=a.pads.length,v="";return c?v=`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${t.indicesToOffset("xIndices")}];
                ${i}
              }`:v=`
              }
              let x_val = x[${t.indicesToOffset("xIndices")}];
              ${i}
            `,`
            ${e.registerUniforms(u).declareVariables(t,w)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
              let indices = ${w.offsetToIndices("global_idx")};
              var xIndices = ${w.offsetToIndices("global_idx")};

              var offsets: array<u32, ${b}>;

              var value = ${_}(${l});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${b-1}u; j++) {
                  offsets[j] = offset / ${oe("uniforms.kernelStrides","j",b)};
                  offset -= offsets[j] * ${oe("uniforms.kernelStrides","j",b)};
                }
                offsets[${b-1}] = offset;

                isPad = false;
                for (var j = ${r-b}u; j < ${r}u; j++) {
                  xIndices[j] = indices[j] * ${oe("uniforms.strides",`j - ${r-b}u`,b)}
                    + offsets[j - ${r-b}u] - ${oe("uniforms.pads","j - 2u",S)};
                  ${v}
              }
              ${s}

              output[global_idx] = value;
            }`}},ps=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,nf=e=>`${ps(e)};${e.countIncludePad}`,af=e=>`${ps(e)};${e.storageOrder};${e.dilations}`,fs=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),hs=(e,t,r,n)=>{let[a,i]=us(t,n,r),s=P("x",t.dataType,t.dims.length),l=s.type.value,u="value += x_val;",c="";a.countIncludePad?c+=`value /= ${l}(uniforms.kernelSize);`:c+=`value /= ${l}(i32(uniforms.kernelSize) - pad);`;let[p,h,g,_,w]=ds(i,a);p.push(...le(t.dims,i));let b=["rank"];return{name:e,shaderCache:{hint:`${n.cacheKey};${g};${_};${w}`,inputDependencies:b},getRunData:()=>({outputs:[{dims:i,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(B.size(i)/64)},programUniforms:p}),getShaderSource:S=>cs(S,s,t.dims.length,i.length,a,u,c,0,h,g,_,w)}},Zy=e=>{let t=e.count_include_pad!==0,r=fs(e);if(r.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let n={countIncludePad:t,...r,cacheKey:""};return{...n,cacheKey:nf(n)}},Qy=(e,t)=>{xi(e.inputs),e.compute(hs("AveragePool",e.inputs[0],!1,t))},ms={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},Xy=e=>{let t=e.format;return{format:t,...ms,cacheKey:t}},Yy=(e,t)=>{xi(e.inputs),e.compute(hs("GlobalAveragePool",e.inputs[0],!0,t))},gs=(e,t,r,n)=>{let[a,i]=us(t,n,r),s=`
      value = max(x_val, value);
    `,l="",u=P("x",t.dataType,t.dims.length),c=["rank"],[p,h,g,_,w]=ds(i,a);return p.push(...le(t.dims,i)),{name:e,shaderCache:{hint:`${n.cacheKey};${g};${_};${w}`,inputDependencies:c},getRunData:()=>({outputs:[{dims:i,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(B.size(i)/64)},programUniforms:p}),getShaderSource:b=>cs(b,u,t.dims.length,i.length,a,s,l,t.dataType===10?-65504:-1e5,h,g,_,w)}},Jy=(e,t)=>{xi(e.inputs),e.compute(gs("MaxPool",e.inputs[0],!1,t))},e_=e=>{let t=e.storage_order,r=e.dilations,n=fs(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(n.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let a={storageOrder:t,dilations:r,...n,cacheKey:""};return{...a,cacheKey:af(a)}},t_=e=>{let t=e.format;return{format:t,...ms,cacheKey:t}},r_=(e,t)=>{xi(e.inputs),e.compute(gs("GlobalMaxPool",e.inputs[0],!0,t))}}),sf,of,i_,n_,A1=K(()=>{ge(),Se(),Ze(),Ce(),sf=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[0].dataType===6&&e.length>2)throw new Error("In the case of dequantizing int32 there is no zero point.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((r,n)=>r===e[2].dims[n]).reduce((r,n)=>r&&n,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((a,i)=>i===t.axis||a===e[0].dims[i]).reduce((a,i)=>a&&i,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let r=e[0].dims[t.axis],n=e[1].dims[t.axis];if(t.blockSize<Math.ceil(r/n)||t.blockSize>Math.ceil(r/(n-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},of=(e,t)=>{let r=B.normalizeAxis(t.axis,e[0].dims.length),n=e[0].dataType,a=n===3,i=e[0].dims,s=e[1].dataType,l=B.size(i),u=n===3||n===2,c=u?[Math.ceil(B.size(e[0].dims)/4)]:e[0].dims,p=e[1].dims,h=e.length>2?e[2]:void 0,g=h?u?[Math.ceil(B.size(h.dims)/4)]:h.dims:void 0,_=p.length===0||p.length===1&&p[0]===1,w=_===!1&&p.length===1,b=Ge(l),S=_&&(!u||b===4),v=S?b:1,$=S&&!u?b:1,C=P("input",u?12:n,c.length,$),T=P("scale",s,p.length),I=h?P("zero_point",u?12:n,g.length):void 0,O=se("output",s,i.length,v),A=[C,T];I&&A.push(I);let M=[c,p];h&&M.push(g);let W=[{type:12,data:l/v},{type:12,data:r},{type:12,data:t.blockSize},...le(...M,i)],X=de=>{let ue=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${de.registerUniforms(ue).declareVariables(...A,O)}
      ${de.mainStart()}
          ${de.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${O.offsetToIndices("global_idx")};

          // Set input x
          ${u?`
            let input = ${C.getByOffset("global_idx / 4")};
            let x_vec = ${a?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${v===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${C.getByOffset("global_idx")};`};

          // Set scale input
          ${_?`let scale_value= ${T.getByOffset("0")}`:w?`
            let scale_index = ${O.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${T.getByOffset("scale_index")};`:`
            var scale_indices: ${T.type.indices} = output_indices;
            let index = ${T.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${T.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${T.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${I?_?u?`
                let zero_point_input = ${I.getByOffset("0")};
                let zero_point_vec =  ${a?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${I.getByOffset("0")}`:w?u?`
                let zero_point_index = ${O.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${I.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${a?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${O.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${I.getByOffset("zero_point_index")};`:u?`
                let zero_point_offset = ${T.indicesToOffset("scale_indices")};
                let zero_point_input = ${I.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${a?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${I.getByIndices("scale_indices")};`:`let zero_point_value = ${u?a?"i32":"u32":C.type.value}(0);`};
      // Compute and write output
      ${O.setByOffset("global_idx",`${O.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:I?["rank","rank","rank"]:["rank","rank"]},getShaderSource:X,getRunData:()=>({outputs:[{dims:i,dataType:s}],dispatchGroup:{x:Math.ceil(l/v/64),y:1,z:1},programUniforms:W})}},i_=(e,t)=>{sf(e.inputs,t),e.compute(of(e.inputs,t))},n_=e=>De({axis:e.axis,blockSize:e.blockSize})}),lf,uf,a_,O1=K(()=>{Wt(),ge(),Ce(),lf=(e,t,r)=>{let n=e===t,a=e<t&&r<0,i=e>t&&r>0;if(n||a||i)throw new Error("Range these inputs' contents are invalid.")},uf=(e,t,r,n)=>{let a=Math.abs(Math.ceil((t-e)/r)),i=[a],s=a,l=[{type:12,data:s},{type:n,data:e},{type:n,data:r},...le(i)],u=c=>{let p=se("output",n,i.length),h=p.type.value,g=[{name:"outputSize",type:"u32"},{name:"start",type:h},{name:"delta",type:h}];return`
        ${c.registerUniforms(g).declareVariables(p)}
        ${c.mainStart()}
        ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${h}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${n}`},getShaderSource:u,getRunData:()=>({outputs:[{dims:i,dataType:n}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:l})}},a_=e=>{let t=0,r=0,n=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],r=e.inputs[1].getInt32Array()[0],n=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],r=e.inputs[1].getFloat32Array()[0],n=e.inputs[2].getFloat32Array()[0]),Fe.webgpu.validateInputContent&&lf(t,r,n),e.compute(uf(t,r,n,e.inputs[0].dataType),{inputs:[]})}}),df,cf,s_,o_,R1=K(()=>{ge(),Se(),Ze(),Ce(),df=(e,t,r,n)=>{if(e!=="none"&&n!=="i32"&&n!=="u32"&&n!=="f32")throw new Error(`Input ${n} is not supported with reduction ${e}.`);let a=`{
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
                ${a}max(bitcast<f32>(oldValue), (${r}))${i}`;case"min":return n==="i32"||n==="u32"?`atomicMin(&${t}, bitcast<${n}>(${r}));`:`${a}min(bitcast<${n}>(oldValue), (${r}))${i}`;case"mul":return`${a}(bitcast<${n}>(oldValue) * (${r}))${i}`;default:throw new Error(`Reduction ${e} is not supported.`)}},cf=(e,t)=>{let r=e[0].dims,n=e[1].dims,a=r,i=1,s=Math.ceil(B.size(n)/i),l=n[n.length-1],u=B.sizeFromDimension(r,l),c=[{type:12,data:s},{type:12,data:l},{type:12,data:u},...le(e[1].dims,e[2].dims,a)],p=h=>{let g=P("indices",e[1].dataType,e[1].dims.length),_=P("updates",e[2].dataType,e[2].dims.length,i),w=t.reduction!=="none"&&t.reduction!==""?Nm("output",e[0].dataType,a.length):se("output",e[0].dataType,a.length,i);return`
      ${h.registerUniform("output_size","u32").registerUniform("last_index_dimension","u32").registerUniform("num_updates_elements","u32").declareVariables(g,_,w)}
      ${h.mainStart()}
        ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
  var hasDuplicates = false;
  if (${t.reduction==="none"}) {
    let n = ${B.size(n)};
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
    ${df(t.reduction,"output[data_offset + i]","value",w.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:c}),getShaderSource:p}},s_=e=>De({reduction:e.reduction}),o_=(e,t)=>{e.compute(cf(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),pf,ff,hf,ys,mf,gf,yf,_f,wf,bf,vf,$f,_s,xf,Sf,Tf,Cf,kf,l_,u_,B1=K(()=>{ge(),Se(),Ze(),Ce(),pf=(e,t)=>{if(e.every(r=>r>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},ff=(e,t,r)=>{t.every(a=>a>=0&&a<r||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let n=new Array(r).fill(1);return t.forEach((a,i)=>n[a]=e[i]),n},hf=(e,t,r,n,a,i)=>{let[s,l,u]=r>10?[1,2,3]:[-1,e.length>1?1:-1,-1],c=e[0].dims.length;if(s>0&&e.length>s&&e[s].dims.length>0)e[s].getFloat32Array().forEach(p=>i.push(p));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(l>0&&e.length>l&&e[l].dims.length===1&&e[l].dims[0]>0){if(e[l].getFloat32Array().forEach(p=>n.push(p)),n.length!==0&&n.length!==c&&r>=18&&n.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");pf(n,t),t.axes.length>0&&ff(n,t.axes,c).forEach((p,h)=>n[h]=p)}if(u>0&&e.length>u&&e[u].dims.length===1&&e[u].dims[0]>0&&(e[u].getBigInt64Array().forEach(p=>a.push(Number(p))),a.length!==0&&a.length!==c&&r>=18&&a.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(n.length!==0&&n.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(a.length!==0&&a.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof n<"u"&&typeof a<"u"&&n.length>0&&a.length>c)throw new Error("Resize requires only of scales or sizes to be specified")},ys=(e,t,r,n)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${n}(big / (${r}));
  let fract = ${n}(big % (${r})) / ${n}(${r});
  return whole + fract;
`,mf=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${ys("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${ys("xResized","lengthOriginal - 1","lengthResized - 1",t)}
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
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",gf=(e,t,r)=>`fn getNearestPixelFromOriginal(xOriginal: ${r}, isDownSample: bool) -> ${r} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";case"simple":default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",yf=(e,t,r)=>{let n=new Array(r).fill(0).concat(new Array(r).fill(1)),a=e.length===0?n:e.slice();return t.length>0?(t.forEach((i,s)=>{n[i]=a[s],n[s+r]=a[t.length+s]}),n):a},_f=(e,t,r,n)=>{let a=[];if(r.length>0)if(n.length>0){if(e.forEach(i=>a.push(i)),Math.max(...n)>e.length)throw new Error("axes is out of bound");n.forEach((i,s)=>a[i]=r[s])}else r.forEach(i=>a.push(i));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");a=e.map((i,s)=>Math.round(i*t[s]))}return a},wf=(e,t,r)=>{let n=(()=>{switch(r.keepAspectRatioPolicy){case"not_larger":return r.axes.length>0?Math.min(...r.axes.map(i=>t[i]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return r.axes.length>0?Math.max(...r.axes.map(i=>t[i]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${r.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let a=e.slice();return r.axes.length>0?(r.axes.forEach(i=>t[i]=n),r.axes.forEach(i=>a[i]=Math.round(e[i]*t[i]))):(t.fill(n,0,t.length),a.forEach((i,s)=>a[s]=Math.round(i*t[s]))),a},bf=(e,t,r,n,a)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${r.length}> {
      var original_indices: array<${e.type.value}, ${r.length}>;
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${oe("uniforms.scales","i",n)};
        var roi_low = ${oe("uniforms.roi","i",a)};
        var roi_hi = ${oe("uniforms.roi",`i + ${t.length}`,a)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${oe("uniforms.input_shape","i",t.length)};
          var output_shape_i = ${oe("uniforms.output_shape","i",r.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,vf=(e,t,r,n,a,i,s)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${n.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${oe("uniforms.scales","i",a)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${oe("uniforms.roi","i",i)};
          var roi_hi = ${oe("uniforms.roi",`i + ${r.length}`,i)};
          var input_shape_i = ${oe("uniforms.input_shape","i",r.length)};
          var output_shape_i = ${oe("uniforms.output_shape","i",n.length)};
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
    }`,$f=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${oe("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,_s=(e,t,r,n)=>e.rank>n?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",r,"batch")};
`:"",xf=(e,t,r,n,a)=>{let[i,s,l,u]=r.length===2?[-1,0,1,-1]:[0,2,3,1],c=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${c} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(row, ${r[s]} - 1))`)};
      ${e.indicesSet("input_indices",l,`max(0, min(col, ${r[l]} - 1))`)};
      ${_s(e,u,i,2)}
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
    }`},Sf=(e,t,r,n,a,i,s,l,u,c)=>{let p=r.length===2,[h,g]=p?[0,1]:[2,3],_=e.type.value,w=b=>{let S=b===h?"row":"col";return`
      fn ${S}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${_} {
        var output_index = ${t.indicesGet("output_indices",b)};
        var originalIdx: ${_} = getOriginalCoordinateFromResizedCoordinate(output_index, ${a[b]},
        ${n[b]}, ${r[b]}, ${i[b]}, ${i[b]} + ${r.length});
        var fractOriginalIdx: ${_} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${l} && (originalIdx < 0 || originalIdx > (${r[b]} - 1))) {
          return ${u};
        }
        var data: array<${_}, 4> = array<${_}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${S}: ${_} = originalIdx + ${_}(i);
          if (${S} < 0 || ${S} >= ${r[b]}) {
            ${c?`coefs[i + 1] = 0.0;
                        continue;`:l?`return ${u};`:`${S} = max(0, min(${S}, ${r[b]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet("input_indices_copy",b,`u32(${S})`)};
          data[i + 1] = ${b===h?e.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${w(h)};
    ${w(g)};
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
    `},Tf=(e,t,r,n,a)=>{let[i,s,l,u,c]=r.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],p=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${p} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(depth, ${r[s]} - 1))`)};
      ${e.indicesSet("input_indices",l,`max(0, min(height, ${r[l]} - 1))`)};
      ${e.indicesSet("input_indices",u,`max(0, min(width, ${r[u]} - 1))`)};
      ${_s(e,c,i,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${p} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${p} = originalIndices[${s}];
      var height:${p} = originalIndices[${l}];
      var width:${p} = originalIndices[${u}];
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

      var x111: ${p} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${p} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${p} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${p} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${p} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${p} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${p} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${p} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${p} = abs(depth - ${p}(depth1));
      var dx2: ${p} = abs(${p}(depth2) - depth);
      var dy1: ${p} = abs(height - ${p}(height1));
      var dy2: ${p} = abs(${p}(height2) - height);
      var dz1: ${p} = abs(width - ${p}(width1));
      var dz2: ${p} = abs(${p}(width2) - width);
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
    }`},Cf=(e,t,r,n,a,i)=>{let s=e.dims,l=yf(i,t.axes,s.length),u=_f(s,n,a,t.axes),c=n.slice();n.length===0&&(c=s.map(($,C)=>$===0?1:u[C]/$),t.keepAspectRatioPolicy!=="stretch"&&(u=wf(s,c,t)));let p=se("output",e.dataType,u.length),h=P("input",e.dataType,s.length),g=B.size(u),_=s.length===u.length&&s.every(($,C)=>$===u[C]),w=t.coordinateTransformMode==="tf_crop_and_resize",b=t.extrapolationValue,S=h.type.value,v=$=>`
      ${_?"":`
      ${mf(t.coordinateTransformMode,S)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${$f(h,s)};
              ${gf(t.nearestMode,r,S)};
              ${vf(h,p,s,u,c.length,l.length,w)};
              `;case"linear":return`
              ${bf(p,s,u,c.length,l.length)};
              ${(()=>{if(s.length===2||s.length===4)return`${xf(h,p,s,w,b)}`;if(s.length===3||s.length===5)return`${Tf(h,p,s,w,b)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(s.length===2||s.length===4)return`${Sf(h,p,s,u,c,l,t.cubicCoeffA,w,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${$.registerUniform("output_size","u32").registerUniform("scales","f32",c.length).registerUniform("roi","f32",l.length).declareVariables(h,p)}
      ${$.mainStart()}
        ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${_?"output[global_idx] = input[global_idx];":`
        let output_indices = ${p.offsetToIndices("global_idx")};
        var input_indices: ${h.type.indices};
        ${(()=>{switch(t.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${h.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${s.length===2||s.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${r}|${c.length>0?t.mode==="cubic"?c:c.length:""}|${a.length>0?a:""}|${l.length>0?l:""}|${_}|${t.mode==="nearest"?s.length:s}`,inputDependencies:["rank"]},getShaderSource:v,getRunData:()=>({outputs:[{dims:u,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:[{type:12,data:g},{type:1,data:c},{type:1,data:l},...le(s,u)]})}},kf=e=>{let t=e.customDataBuffer;return new Uint32Array(t,t.byteOffset,1)[0]},l_=(e,t)=>{let r=[],n=[],a=[],i=kf(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");hf(e.inputs,t,i,r,n,a),e.compute(Cf(e.inputs[0],t,i,r,n,a),{inputs:[0]})},u_=e=>{let t=e.antialias,r=e.axes,n=e.coordinateTransformMode,a=e.cubicCoeffA,i=e.excludeOutside!==0,s=e.extrapolationValue,l=e.keepAspectRatioPolicy,u=e.mode,c=e.nearestMode===""?"simple":e.nearestMode;return De({antialias:t,axes:r,coordinateTransformMode:n,cubicCoeffA:a,excludeOutside:i,extrapolationValue:s,keepAspectRatioPolicy:l,mode:u,nearestMode:c})}}),Ef,If,d_,M1=K(()=>{ge(),Se(),Ze(),Ce(),Ef=(e,t)=>{let[r,n,a,i]=e,{numHeads:s,rotaryEmbeddingDim:l}=t;if(r.dims.length!==3&&r.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${r.dims.length}`);if(!B.areEqual(n.dims,[])&&!B.areEqual(n.dims,[1])&&n.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${n.dims.length}`);if(a.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${a.dims.length}`);if(i.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${i.dims.length}`);if(!B.areEqual(a.dims,i.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(l>0&&s===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let u=r.dims[0],c=r.dims[r.dims.length-2],p=a.dims[0],h=B.sizeFromDimension(r.dims,1)/c,g=l===0?a.dims[1]*2:h/s;if(l>g)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(n.dims.length===2){if(u!==n.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${n.dims[0]}`);if(c!==n.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${n.dims[1]}`)}if(g/2!==a.dims[1]&&l/2!==a.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${a.dims[1]}`);if(c>p)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported")},If=(e,t)=>{let{interleaved:r,numHeads:n,rotaryEmbeddingDim:a,scale:i}=t,s=e[0].dims[0],l=B.sizeFromDimension(e[0].dims,1),u=e[0].dims[e[0].dims.length-2],c=l/u,p=e[2].dims[1],h=a===0?p*2:c/n,g=new Array(s,u,c/h,h-p),_=B.computeStrides(g),w=[{type:1,data:i},{type:12,data:g},{type:12,data:_},...e[0].dims.length===3?new Array({type:12,data:[l,c,h,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[l,h,u*h,1]}):[],...le(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],b=S=>{let v=P("input",e[0].dataType,e[0].dims.length),$=P("position_ids",e[1].dataType,e[1].dims.length),C=P("cos_cache",e[2].dataType,e[2].dims.length),T=P("sin_cache",e[3].dataType,e[3].dims.length),I=se("output",e[0].dataType,e[0].dims.length);return S.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:g.length},{name:"global_strides",type:"u32",length:_.length},{name:"input_output_strides",type:"u32",length:_.length}]),`
        ${S.declareVariables(v,$,C,T,I)}

        ${S.mainStart(oi)}
          let half_rotary_emb_dim = uniforms.${C.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${S.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${$.broadcastedIndicesToOffset("bsnh.xy",se("",$.type.tensor,2))};
            let position_id =
                u32(${$.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${r});
            let j = i + select(half_rotary_emb_dim, 1, ${r});
            let re = ${v.getByOffset("i")} * ${C.get("position_id","bsnh[3]")} -
                ${v.getByOffset("j")} * ${T.get("position_id","bsnh[3]")};
            ${I.setByOffset("i","re")}
            let im = ${v.getByOffset("i")} * ${T.get("position_id","bsnh[3]")} +
                ${v.getByOffset("j")} * ${C.get("position_id","bsnh[3]")};
            ${I.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${I.setByOffset("k",v.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:De({interleaved:r}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:b,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(B.size(g)/oi)},programUniforms:w})}},d_=(e,t)=>{Ef(e.inputs,t),e.compute(If(e.inputs,t))}}),zf,Af,c_,D1=K(()=>{ge(),Se(),Ce(),zf=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],r=e[1],n=e[2];if(t.dataType!==r.dataType||t.dataType!==n.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(r.dims.length!==3&&r.dims.length!==2)throw new Error("Skip must be 2D or 3D");let a=t.dims[t.dims.length-1],i=t.dims[t.dims.length-2];if(r.dims[r.dims.length-1]!==a)throw new Error("Skip must have the same hidden size as input");if(r.dims[r.dims.length-2]!==i)throw new Error("Skip must have the same sequence length as input");if(n.dims.length!==1)throw new Error("Gamma must be 1D");if(n.dims[n.dims.length-1]!==a)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let s=e[3];if(s.dims.length!==1)throw new Error("Beta must be 1D");if(s.dims[s.dims.length-1]!==a)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let s=e[4];if(s.dims.length!==1)throw new Error("Bias must be 1D");if(s.dims[s.dims.length-1]!==a)throw new Error("Bias must have the same hidden size as input")}},Af=(e,t,r,n)=>{let a=t.simplified,i=e[0].dims,s=B.size(i),l=i,u=s,c=i.slice(-1)[0],p=n?i.slice(0,-1).concat(1):[],h=!a&&e.length>3,g=e.length>4,_=n&&r>1,w=n&&r>2,b=r>3,S=64,v=Ge(c),$=[{type:12,data:u},{type:12,data:v},{type:12,data:c},{type:1,data:t.epsilon}],C=I=>{let O=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],A=[P("x",e[0].dataType,e[0].dims,v),P("skip",e[1].dataType,e[1].dims,v),P("gamma",e[2].dataType,e[2].dims,v)];h&&A.push(P("beta",e[3].dataType,e[3].dims,v)),g&&A.push(P("bias",e[4].dataType,e[4].dims,v)),A.push(se("output",e[0].dataType,l,v)),_&&A.push(se("mean_output",1,p)),w&&A.push(se("inv_std_output",1,p)),b&&A.push(se("input_skip_bias_sum",e[0].dataType,l,v));let M=et(e[0].dataType),W=et(1,v);return`

      ${I.registerUniforms(O).declareVariables(...A)}
      var<workgroup> sum_shared : array<${W}, ${S}>;
      var<workgroup> sum_squared_shared : array<${W}, ${S}>;

      ${I.mainStart([S,1,1])}
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
          let bias_value = ${g?"bias[offset1d + i]":M+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${b?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${Jr(M,v,"value")};
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
        let mean = ${vr("sum",v)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${vr("square_sum",v)} / f32(uniforms.hidden_size) ${a?"":"- mean * mean"} + uniforms.epsilon);
        ${_?"mean_output[global_idx] = mean;":""}
        ${w?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${a?"":`- ${M}(mean)`}) *
            ${M}(inv_std_dev) * gamma[offset1d + i]
            ${h?"+ beta[offset1d + i]":""};
        }
      }`},T=[{dims:l,dataType:e[0].dataType}];return r>1&&T.push({dims:p,dataType:1}),r>2&&T.push({dims:p,dataType:1}),r>3&&T.push({dims:i,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${v};${_};${w};${b}`,inputDependencies:e.map((I,O)=>"type")},getShaderSource:C,getRunData:()=>({outputs:T,dispatchGroup:{x:Math.ceil(u/c)},programUniforms:$})}},c_=(e,t)=>{zf(e.inputs);let r=[0];e.outputCount>1&&r.push(-3),e.outputCount>2&&r.push(-3),e.outputCount>3&&r.push(3),e.compute(Af(e.inputs,t,e.outputCount,!1),{outputs:r})}}),Of,Si,Rf,ws,Bf,Mf,p_,f_,N1=K(()=>{ge(),Se(),Ze(),Ce(),Of=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((r,n)=>{if(e[n+1].dataType!==6&&e[n+1].dataType!==7)throw new Error(`Input ${n} must be an array of int32 or int64`)})},Si=(e,t)=>{let r=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(n=>r.push(Number(n)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(n=>r.push(Number(n)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return r},Rf=(e,t)=>{if(e.length>1){let r=Si(e,1),n=Si(e,2),a=Si(e,3);return a.length===0&&(a=[...Array(e[0].dims.length).keys()]),De({starts:r,ends:n,axes:a})}else return t},ws=(e,t,r,n,a)=>{let i=e;return e<0&&(i+=r[n[t]]),a[t]<0?Math.max(0,Math.min(i,r[n[t]]-1)):Math.max(0,Math.min(i,r[n[t]]))},Bf=(e,t,r)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${r.length}; i >= 0; i--) {
            let input_shape_i = ${oe("uniforms.input_shape","i",r.length)};
            let steps_i = ${oe("uniforms.steps","i",r.length)};
            let signs_i = ${oe("uniforms.signs","i",r.length)};
            let starts_i = ${oe("uniforms.starts","i",r.length)};
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
      }`,Mf=(e,t)=>{let r=e[0].dims,n=B.size(r),a=t.axes.length>0?B.normalizeAxes(t.axes,r.length):[...Array(r.length).keys()],i=Si(e,4);i.forEach(v=>v!==0||(()=>{throw new Error("step cannot be 0")})),i.length===0&&(i=Array(a.length).fill(1));let s=t.starts.map((v,$)=>ws(v,$,r,a,i)),l=t.ends.map((v,$)=>ws(v,$,r,a,i));if(a.length!==s.length||a.length!==l.length)throw new Error("start, ends and axes should have the same number of elements");if(a.length!==r.length)for(let v=0;v<r.length;++v)a.includes(v)||(s.splice(v,0,0),l.splice(v,0,r[v]),i.splice(v,0,1));let u=i.map(v=>Math.sign(v));i.forEach((v,$,C)=>{if(v<0){let T=(l[$]-s[$])/v,I=s[$],O=I+T*i[$];s[$]=O,l[$]=I,C[$]=-v}});let c=r.slice(0);a.forEach((v,$)=>{c[v]=Math.ceil((l[v]-s[v])/i[v])});let p={dims:c,dataType:e[0].dataType},h=se("output",e[0].dataType,c.length),g=P("input",e[0].dataType,e[0].dims.length),_=B.size(c),w=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:s.length},{name:"signs",type:"i32",length:u.length},{name:"steps",type:"u32",length:i.length}],b=[{type:12,data:_},{type:12,data:s},{type:6,data:u},{type:12,data:i},...le(e[0].dims,c)],S=v=>`
      ${v.registerUniforms(w).declareVariables(g,h)}
        ${Bf(g,h,r)}
        ${v.mainStart()}
          ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${h.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${h.setByOffset("global_idx",g.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${u.length}_${s.length}_${i.length}`,inputDependencies:["rank"]},getShaderSource:S,getRunData:()=>({outputs:[p],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:b})}},p_=(e,t)=>{Of(e.inputs,t);let r=Rf(e.inputs,t);e.compute(Mf(e.inputs,r),{inputs:[0]})},f_=e=>{let t=e.starts,r=e.ends,n=e.axes;return De({starts:t,ends:r,axes:n})}}),Df,Nf,h_,m_,P1=K(()=>{ge(),Se(),Ze(),Tr(),Ce(),Df=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},Nf=(e,t)=>{let r=e.inputs[0],n=r.dims,a=B.size(n),i=n.length,s=B.normalizeAxis(t.axis,i),l=s<n.length-1,u,c=[];l?(c=Array.from({length:i},(A,M)=>M),c[s]=i-1,c[i-1]=s,u=e.compute(Tt(r,c),{inputs:[r],outputs:[-1]})[0]):u=r;let p=u.dims,h=p[i-1],g=a/h,_=Ge(h),w=h/_,b=64;g===1&&(b=256);let S=(A,M)=>M===4?`max(max(${A}.x, ${A}.y), max(${A}.z, ${A}.w))`:M===2?`max(${A}.x, ${A}.y)`:M===3?`max(max(${A}.x, ${A}.y), ${A}.z)`:A,v=P("x",u.dataType,u.dims,_),$=se("result",u.dataType,u.dims,_),C=v.type.value,T=et(u.dataType)==="f32"?`var threadMax = ${C}(-3.402823e+38f);`:`var threadMax = ${C}(-65504.0h);`,I=A=>`
      var<workgroup> rowMaxShared : ${C};
      var<workgroup> rowSumShared : ${C};
      var<workgroup> threadShared : array<${C}, ${b}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${C} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${C}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${A.registerUniform("packedCols","i32").declareVariables(v,$)}
      ${A.mainStart(b)}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${b};
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
          rowSumShared = ${C}(${vr("threadShared[0]",_)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          let value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          setValue(row, col, row_stride, value);
        }
      }`,O=e.compute({name:"Softmax",shaderCache:{hint:`${_};${b}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:p,dataType:u.dataType}],dispatchGroup:{x:g},programUniforms:[{type:6,data:w}]}),getShaderSource:I},{inputs:[u],outputs:[l?-1:0]})[0];l&&e.compute(Tt(O,c),{inputs:[O]})},h_=(e,t)=>{Df(e.inputs),Nf(e,t)},m_=e=>De({axis:e.axis})}),bs,Pf,Uf,Wf,g_,U1=K(()=>{ge(),Se(),Ce(),bs=e=>Array.from(e.getBigInt64Array(),Number),Pf=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(bs(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},Uf=(e,t)=>{let r=[];for(let n=0;n<e.length;++n)r.push(e[n]*t[n]);return r},Wf=(e,t)=>{let r=e[0].dims,n=t??bs(e[1]),a=Uf(r,n),i=B.size(a),s=e[0].dataType,l=P("input",s,r.length),u=se("output",s,a.length),c=p=>`
      const inputShape = ${l.indices(...r)};
      ${p.registerUniform("output_size","u32").declareVariables(l,u)}
      ${p.mainStart()}
      ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${u.offsetToIndices("global_idx")};
      var input_indices: ${l.type.indices};
      for (var i = 0; i < ${r.length}; i++) {
        let input_dim_i = ${l.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${u.indicesGet("output_indices","i")}  % input_dim_i;

        ${l.indicesSet("input_indices","i","input_dim_value")}
      }
      ${u.setByOffset("global_idx",l.getByIndices("input_indices"))}
    }`;return{name:"Tile",shaderCache:{hint:`${n}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:[{type:12,data:i},...le(e[0].dims,a)]}),getShaderSource:c}},g_=e=>{Pf(e.inputs),e.compute(Wf(e.inputs),{inputs:[0]})}}),Lf,qf,y_,W1=K(()=>{ge(),Se(),Ce(),Lf=(e,t,r,n,a)=>{let i=se("output_data",a,r.length,4),s=P("a_data",t[1].dataType,t[1].dims.length,4),l=P("b_data",t[2].dataType,t[2].dims.length,4),u=P("c_data",t[0].dataType,t[0].dims.length,4),c,p=(h,g,_)=>`select(${g}, ${h}, ${_})`;if(!n)c=i.setByOffset("global_idx",p(s.getByOffset("global_idx"),l.getByOffset("global_idx"),u.getByOffset("global_idx")));else{let h=(g,_,w="")=>{let b=`a_data[index_a${_}][component_a${_}]`,S=`b_data[index_b${_}][component_b${_}]`,v=`bool(c_data[index_c${_}] & (0xffu << (component_c${_} * 8)))`;return`
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
            ${g}[${_}] = ${w}(${p(b,S,v)});
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
      }`},qf=e=>{let t=e[1].dims,r=e[2].dims,n=e[0].dims,a=e[1].dataType,i=!(B.areEqual(t,r)&&B.areEqual(r,n)),s=t,l=B.size(t);if(i){let c=si.calcShape(si.calcShape(t,r,!1),n,!1);if(!c)throw new Error("Can't perform where op on the given tensors");s=c,l=B.size(s)}let u=Math.ceil(l/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:c=>Lf(c,e,s,i,a),getRunData:()=>({outputs:[{dims:s,dataType:a}],dispatchGroup:{x:Math.ceil(l/64/4)},programUniforms:[{type:12,data:u},...le(n,t,r,s)]})}},y_=e=>{e.compute(qf(e.inputs))}}),__,L1=K(()=>{e1(),Oo(),t1(),r1(),i1(),n1(),a1(),d1(),p1(),f1(),h1(),m1(),g1(),y1(),_1(),w1(),b1(),v1(),$1(),x1(),S1(),T1(),C1(),k1(),E1(),Py(),I1(),z1(),A1(),O1(),R1(),Ao(),B1(),M1(),D1(),N1(),P1(),Ly(),U1(),Tr(),Ro(),W1(),__=new Map([["Abs",[pg]],["Acos",[fg]],["Acosh",[hg]],["Add",[Kg]],["ArgMax",[lg,Ws]],["ArgMin",[og,Ws]],["Asin",[mg]],["Asinh",[gg]],["Atan",[yg]],["Atanh",[_g]],["Attention",[ug]],["AveragePool",[Qy,Zy]],["BatchNormalization",[dg]],["BiasAdd",[cg]],["BiasSplitGelu",[jg]],["Cast",[bg,wg]],["Ceil",[$g]],["Clip",[vg]],["Concat",[ny,ay]],["Conv",[Gs,Fs]],["ConvTranspose",[my,hy]],["Cos",[xg]],["Cosh",[Sg]],["CumSum",[gy,yy]],["DepthToSpace",[_y,wy]],["DequantizeLinear",[i_,n_]],["Div",[Zg]],["Einsum",[by,vy]],["Elu",[Tg,Ai]],["Equal",[Qg]],["Erf",[Cg]],["Exp",[kg]],["Expand",[$y]],["FastGelu",[xy]],["Floor",[Eg]],["FusedConv",[Gs,Fs]],["Gather",[Ty,Sy]],["GatherElements",[Ay,zy]],["GatherBlockQuantized",[Ey,Iy]],["GatherND",[Cy,ky]],["Gelu",[Ig]],["Gemm",[Ry,Oy]],["GlobalAveragePool",[Yy,Xy]],["GlobalMaxPool",[r_,t_]],["Greater",[ey]],["GreaterOrEqual",[ry]],["GridSample",[By,My]],["GroupQueryAttention",[qy]],["HardSigmoid",[Ng,Dg]],["InstanceNormalization",[Vy]],["LayerNormalization",[Hy]],["LeakyRelu",[zg,Ai]],["Less",[ty]],["LessOrEqual",[iy]],["Log",[Fg]],["MatMul",[Fy]],["MatMulNBits",[Gy,jy]],["MaxPool",[Jy,e_]],["Mul",[Xg]],["MultiHeadAttention",[Ny,Dy]],["Neg",[Og]],["Not",[Ag]],["Pad",[Ky]],["Pow",[Yg]],["QuickGelu",[Gg,Ai]],["Range",[a_]],["Reciprocal",[Rg]],["ReduceMin",[rg]],["ReduceMean",[Xm]],["ReduceMax",[tg]],["ReduceSum",[ng]],["ReduceProd",[ig]],["ReduceL1",[Ym]],["ReduceL2",[Jm]],["ReduceLogSum",[sg]],["ReduceLogSumExp",[eg]],["ReduceSumSquare",[ag]],["Relu",[Bg]],["Resize",[l_,u_]],["RotaryEmbedding",[d_]],["ScatterND",[o_,s_]],["Sigmoid",[Mg]],["Sin",[Pg]],["Sinh",[Ug]],["Slice",[p_,f_]],["SkipLayerNormalization",[c_]],["Split",[Uy,Wy]],["Sqrt",[Wg]],["Softmax",[h_,m_]],["Sub",[Jg]],["Tan",[Lg]],["Tanh",[qg]],["ThresholdedRelu",[Hg,Ai]],["Tile",[g_]],["Transpose",[Um,Wm]],["Where",[y_]]])}),w_,q1=K(()=>{Wt(),lr(),Ce(),w_=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,r,n,a){er(e.programInfo.name);let i=this.backend.device,s=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let l=[];for(let c of t)l.push({binding:l.length,resource:{buffer:c.buffer}});for(let c of r)l.push({binding:l.length,resource:{buffer:c.buffer}});a&&l.push({binding:l.length,resource:a});let u=i.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:l,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let c={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:u,dispatchGroup:n};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(c)}s.setPipeline(e.computePipeline),s.setBindGroup(0,u),s.dispatchWorkgroups(...n),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),Ut(e.programInfo.name)}dispose(){}build(e,t){er(e.name);let r=this.backend.device,n=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"}].forEach(c=>{r.features.has(c.feature)&&n.push(`enable ${c.extension};`)});let a=Pm(t,this.backend.device.limits),i=e.getShaderSource(a),s=`${n.join(`
`)}
${a.additionalImplementations}
${i}`,l=r.createShaderModule({code:s,label:e.name});Re("verbose",()=>`[WebGPU] ${e.name} shader code: ${s}`);let u=r.createComputePipeline({compute:{module:l,entryPoint:"main"},layout:"auto",label:e.name});return Ut(e.name),{programInfo:e,computePipeline:u,uniformVariablesInfo:a.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,r=typeof e=="number"?1:e.y||1,n=typeof e=="number"?1:e.z||1,a=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=a&&r<=a&&n<=a)return[t,r,n];let i=t*r*n,s=Math.ceil(Math.sqrt(i));if(s>a){if(s=Math.ceil(Math.cbrt(i)),s>a)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[s,s,s]}else return[s,s,1]}}}),b_={};li(b_,{WebGpuBackend:()=>v_});var Vf,Hf,Ff,v_,V1=K(()=>{Wt(),ge(),lr(),Rm(),Y$(),L1(),q1(),Vf=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let r=[];for(let n=0;n<e.length;++n){let a=e[n].dataType;switch(t[n]){case"none":{r.push("");break}case"type":{r.push(`${a}`);break}case"rank":{let i=e[n].dims.length;r.push(`${a};${i}`);break}case"dims":{let i=e[n].dims.join(",");r.push(`${a};${i}`);break}default:throw new Error(`unsupported input dependency: ${t[n]}`)}}return r.join("|")},Hf=(e,t,r)=>{var a,i;let n=e.name;return(a=e.shaderCache)!=null&&a.hint&&(n+="["+e.shaderCache.hint+"]"),n+=":"+r+`:${Vf(t,((i=e.shaderCache)==null?void 0:i.inputDependencies)??new Array(t.length).fill("dims"))}`,n},Ff=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},v_=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let r=[],n={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:r},a=i=>t.features.has(i)&&r.push(i)&&!0;a("chromium-experimental-timestamp-query-inside-passes")||a("timestamp-query"),a("shader-f16"),a("subgroups"),this.device=await t.requestDevice(n),this.adapterInfo=new Ff(t.info||await t.requestAdapterInfo()),this.gpuDataManager=Dm(this),this.programManager=new w_(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,ko(e.logLevel,!!e.debug),this.device.onuncapturederror=i=>{i.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${i.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!1}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose()}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;er(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{var n;let t=new BigUint64Array(e.getMappedRange()),r=this.pendingQueries.get(e);for(let a=0;a<t.length/2;a++){let i=r[a],s=i.kernelId,l=this.kernels.get(s),u=l.kernelType,c=l.kernelName,p=i.programName,h=i.inputTensorViews,g=i.outputTensorViews,_=t[a*2],w=t[a*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=_);let b=Number(_-this.queryTimeBase),S=Number(w-this.queryTimeBase);if(!Number.isSafeInteger(b)||!Number.isSafeInteger(S))throw new RangeError("incorrect timestamp range");if((n=this.env.webgpu.profiling)!=null&&n.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:h.map(v=>({dims:v.dims,dataType:Br(v.dataType)})),outputsMetadata:g.map(v=>({dims:v.dims,dataType:Br(v.dataType)})),kernelId:s,kernelType:u,kernelName:c,programName:p,startTime:b,endTime:S});else{let v="";h.forEach((C,T)=>{v+=`input[${T}]: [${C.dims}] | ${Br(C.dataType)}, `});let $="";g.forEach((C,T)=>{$+=`output[${T}]: [${C.dims}] | ${Br(C.dataType)}, `}),console.log(`[profiling] kernel "${s}|${u}|${c}|${p}" ${v}${$}execution time: ${S-b} ns`)}Dn("GPU",`${p}::${_}::${w}`)}e.unmap(),this.pendingQueries.delete(e)}),Ut()}run(e,t,r,n,a,i){er(e.name);let s=[];for(let $=0;$<t.length;++$){let C=t[$].data;if(C===0)continue;let T=this.gpuDataManager.get(C);if(!T)throw new Error(`no GPU data for input: ${C}`);s.push(T)}let{outputs:l,dispatchGroup:u,programUniforms:c}=e.getRunData(t),p=r.length===0?l.map(($,C)=>C):r;if(p.length!==l.length)throw new Error(`Output size ${p.length} must be equal to ${l.length}.`);let h=[],g=[];for(let $=0;$<l.length;++$){if(!Number.isInteger(p[$])||p[$]<-3||p[$]>=i)throw new Error(`Invalid output index: ${p[$]}`);if(p[$]===-3)continue;let C=p[$]===-1,T=p[$]===-2,I=C||T?a(l[$].dataType,l[$].dims):n(p[$],l[$].dataType,l[$].dims);if(h.push(I),I.data===0)continue;let O=this.gpuDataManager.get(I.data);if(!O)throw new Error(`no GPU data for output: ${I.data}`);if(C&&this.temporaryData.push(O),T){let A=this.kernelPersistentData.get(this.currentKernelId);A||(A=[],this.kernelPersistentData.set(this.currentKernelId,A)),A.push(O)}g.push(O)}if(s.length!==t.length||g.length!==h.length){if(g.length===0)return Ut(e.name),h;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let _;if(c){let $=0,C=[];c.forEach(A=>{let M=typeof A.data=="number"?[A.data]:A.data;if(M.length===0)return;let W=A.type===10?2:4,X,de;A.type===10?(de=M.length>4?16:M.length>2?8:M.length*W,X=M.length>4?16:W*M.length):(de=M.length<=2?M.length*W:16,X=16),$=Math.ceil($/de)*de,C.push($);let ue=A.type===10?8:4;$+=M.length>4?Math.ceil(M.length/ue)*X:M.length*W});let T=16;$=Math.ceil($/T)*T;let I=new ArrayBuffer($);c.forEach((A,M)=>{let W=C[M],X=typeof A.data=="number"?[A.data]:A.data;if(A.type===6)new Int32Array(I,W,X.length).set(X);else if(A.type===12)new Uint32Array(I,W,X.length).set(X);else if(A.type===10)new Uint16Array(I,W,X.length).set(X);else if(A.type===1)new Float32Array(I,W,X.length).set(X);else throw new Error(`Unsupported uniform type: ${Br(A.type)}`)});let O=this.gpuDataManager.create($,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(O.buffer,0,I,0,$),this.gpuDataManager.release(O.id),_={offset:0,size:$,buffer:O.buffer}}let w=this.programManager.normalizeDispatchGroupSize(u),b=w[1]===1&&w[2]===1,S=Hf(e,t,b),v=this.programManager.getArtifact(S);if(v||(v=this.programManager.build(e,w),this.programManager.setArtifact(S,v),Re("info",()=>`[artifact] key: ${S}, programName: ${e.name}`)),c&&v.uniformVariablesInfo){if(c.length!==v.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${v.uniformVariablesInfo.length}, got ${c.length} in program "${v.programInfo.name}".`);for(let $=0;$<c.length;$++){let C=c[$],T=C.type,I=typeof C.data=="number"?1:C.data.length,[O,A]=v.uniformVariablesInfo[$];if(T!==O||I!==A)throw new Error(`Uniform variable ${$} mismatch: expect type ${O} with size ${A}, got type ${T} with size ${I} in program "${v.programInfo.name}".`)}}if(Re("info",()=>`[ProgramManager] run "${e.name}" (key=${S}) with ${w[0]}x${w[1]}x${w[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let $={kernelId:this.currentKernelId,programName:v.programInfo.name,inputTensorViews:t,outputTensorViews:h};this.pendingKernels.push($),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push($)}return this.programManager.run(v,s,g,w,_),Ut(e.name),h}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,r,n){let a=__.get(e);if(!a)throw new Error(`kernel not implemented: ${e}`);let i={kernelType:e,kernelName:n,kernelEntry:a[0],attributes:[a[1],r]};this.kernels.set(t,i)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let r of t)this.gpuDataManager.release(r.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,r){let n=this.kernels.get(e);if(!n)throw new Error(`kernel not created: ${e}`);let a=n.kernelType,i=n.kernelName,s=n.kernelEntry,l=n.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${a}] ${i}" is not allowed to be called recursively`);this.currentKernelId=e,l[0]&&(l[1]=l[0](l[1]),l[0]=void 0),Re("info",()=>`[WebGPU] Start to run kernel "[${a}] ${i}"...`);let u=this.env.debug;this.temporaryData=[];try{return u&&this.device.pushErrorScope("validation"),s(t,l[1]),0}catch(c){return r.push(Promise.resolve(`[WebGPU] Kernel "[${a}] ${i}" failed. ${c}`)),1}finally{u&&r.push(this.device.popErrorScope().then(c=>c?`GPU validation error for kernel "[${a}] ${i}": ${c.message}`:null));for(let c of this.temporaryData)this.gpuDataManager.release(c.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,r,n){let a=this.sessionExternalDataMapping.get(e);a||(a=new Map,this.sessionExternalDataMapping.set(e,a));let i=a.get(t),s=this.gpuDataManager.registerExternalBuffer(r,n,i);return a.set(t,[s,r]),s}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(r=>this.gpuDataManager.unregisterExternalBuffer(r[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,r){return async()=>{let n=await Ns(this,e,t);return Eo(n.buffer,r)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){var e;this.queryType="none",(((e=this.env.webgpu.profiling)==null?void 0:e.mode)==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){Re("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){Re("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){Re("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),r=e.length;this.pendingKernels=[];for(let n=0;n<r;n++){let a=this.getComputePassEncoder(),i=e[n];this.writeTimestamp(this.pendingDispatchNumber*2),a.setPipeline(i.computePipeline),a.setBindGroup(0,i.bindGroup),a.dispatchWorkgroups(...i.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[n]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),$_={};li($_,{init:()=>x_});var vn,Gf,x_,H1=K(()=>{ge(),lr(),Se(),X$(),vn=class S_{constructor(t,r,n,a){this.module=t,this.dataType=r,this.data=n,this.dims=a}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=B.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=B.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=B.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=B.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(B.size(t)!==B.size(this.dims))throw new Error("Invalid new shape");return new S_(this.module,this.dataType,this.data,t)}},Gf=class{constructor(e,t,r){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo;let n=e.PTR_SIZE,a=r/e.PTR_SIZE,i=n===4?"i32":"i64";this.opKernelContext=Number(e.getValue(n*a++,i));let s=Number(e.getValue(n*a++,i));this.outputCount=Number(e.getValue(n*a++,i)),this.customDataOffset=Number(e.getValue(n*a++,"*")),this.customDataSize=Number(e.getValue(n*a++,i));let l=[];for(let u=0;u<s;u++){let c=Number(e.getValue(n*a++,i)),p=Number(e.getValue(n*a++,"*")),h=Number(e.getValue(n*a++,i)),g=[];for(let _=0;_<h;_++)g.push(Number(e.getValue(n*a++,i)));l.push(new vn(e,c,p,g))}this.inputs=l}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){var s;let r=((s=t==null?void 0:t.inputs)==null?void 0:s.map(l=>typeof l=="number"?this.inputs[l]:l))??this.inputs,n=(t==null?void 0:t.outputs)??[],a=(l,u,c)=>new vn(this.module,u,this.output(l,c),c),i=(l,u)=>{let c=Mr(l,u);if(!c)throw new Error(`Unsupported data type: ${l}`);let p=c>0?this.backend.gpuDataManager.create(c).id:0;return new vn(this.module,l,p,u)};return this.backend.run(e,r,n,a,i,this.outputCount)}output(e,t){let r=this.module.stackSave();try{let n=this.module.PTR_SIZE,a=n===4?"i32":"i64",i=this.module.stackAlloc((1+t.length)*n);this.module.setValue(i,t.length,a);for(let s=0;s<t.length;s++)this.module.setValue(i+n*(s+1),t[s],a);return this.module._JsepOutput(this.opKernelContext,e,i)}catch(n){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${n}`)}finally{this.module.stackRestore(r)}}},x_=async(e,t,r,n)=>{let a=t.jsepInit;if(!a)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let i=(V1(),Fi(b_)).WebGpuBackend,s=new i;await s.initialize(r,n),a("webgpu",[s,l=>s.alloc(Number(l)),l=>s.free(l),(l,u,c,p=!1)=>{if(p)Re("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(l)}, dst=${Number(u)}, size=${Number(c)}`),s.memcpy(Number(l),Number(u));else{Re("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(l)}, gpuDataId=${Number(u)}, size=${Number(c)}`);let h=t.HEAPU8.subarray(Number(l>>>0),Number(l>>>0)+Number(c));s.upload(Number(u),h)}},async(l,u,c)=>{Re("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${l}, dataOffset=${u}, size=${c}`),await s.download(Number(l),()=>t.HEAPU8.subarray(Number(u)>>>0,Number(u+c)>>>0))},(l,u,c)=>s.createKernel(l,Number(u),c,t.UTF8ToString(t._JsepGetNodeName(Number(u)))),l=>s.releaseKernel(l),(l,u,c,p)=>{Re("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${c}, kernel=${l}, contextDataOffset=${u}`);let h=new Gf(t,s,Number(u));return s.computeKernel(Number(l),h,p)},()=>s.captureBegin(),()=>s.captureEnd(),()=>s.replay()])}else{let i=new Mm(r);a("webnn",[i,()=>i.reserveTensorId(),s=>i.releaseTensorId(s),async(s,l,u,c,p)=>i.ensureTensor(s,l,u,c,p),(s,l)=>{i.uploadTensor(s,l)},async(s,l)=>i.downloadTensor(s,l)])}}}),jf,Uo,Wo,fr,Kf,qn,Lo,qo,vs,Vo,Ho,Fo,T_=K(()=>{K$(),Z$(),ge(),Vr(),$o(),Im(),jf=(e,t)=>{Le()._OrtInit(e,t)!==0&&Ne("Can't initialize onnxruntime.")},Uo=async e=>{jf(e.wasm.numThreads,Pn(e.logLevel))},Wo=async(e,t)=>{var r,n;(n=(r=Le()).asyncInit)==null||n.call(r);{let a=(H1(),Fi($_)).init;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");let i=e.webgpu.adapter;if(i){if(typeof i.limits!="object"||typeof i.features!="object"||typeof i.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let s=e.webgpu.powerPreference;if(s!==void 0&&s!=="low-power"&&s!=="high-performance")throw new Error(`Invalid powerPreference setting: "${s}"`);let l=e.webgpu.forceFallbackAdapter;if(l!==void 0&&typeof l!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${l}"`);if(i=await navigator.gpu.requestAdapter({powerPreference:s,forceFallbackAdapter:l}),!i)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}await a("webgpu",Le(),e,i)}if(t==="webnn"){if(typeof navigator>"u"||!navigator.ml)throw new Error("WebNN is not supported in current environment");await a("webnn",Le(),e)}}},fr=new Map,Kf=e=>{let t=Le(),r=t.stackSave();try{let n=t.PTR_SIZE,a=t.stackAlloc(2*n);t._OrtGetInputOutputCount(e,a,a+n)!==0&&Ne("Can't get session input/output count.");let i=n===4?"i32":"i64";return[Number(t.getValue(a,i)),Number(t.getValue(a+n,i))]}finally{t.stackRestore(r)}},qn=e=>{let t=Le(),r=t._malloc(e.byteLength);if(r===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,r),[r,e.byteLength]},Lo=async(e,t)=>{var h,g,_,w;let r,n,a=Le();Array.isArray(e)?[r,n]=e:e.buffer===a.HEAPU8.buffer?[r,n]=[e.byteOffset,e.byteLength]:[r,n]=qn(e);let i=0,s=0,l=0,u=[],c=[],p=[];try{if([s,u]=await Em(t),(t==null?void 0:t.externalData)&&a.mountExternalData){let O=[];for(let A of t.externalData){let M=typeof A=="string"?A:A.path;O.push(Co(typeof A=="string"?A:A.data).then(W=>{a.mountExternalData(M,W)}))}await Promise.all(O)}for(let O of(t==null?void 0:t.executionProviders)??[])if((typeof O=="string"?O:O.name)==="webnn"){if(a.shouldTransferToMLTensor=!1,typeof O!="string"){let A=O,M=A==null?void 0:A.context,W=A==null?void 0:A.gpuDevice,X=A==null?void 0:A.deviceType,de=A==null?void 0:A.powerPreference;M?a.currentContext=M:W?a.currentContext=await a.jsepCreateMLContext(W):a.currentContext=await a.jsepCreateMLContext({deviceType:X,powerPreference:de})}else a.currentContext=await a.jsepCreateMLContext();break}i=await a._OrtCreateSession(r,n,s),(h=a.webgpuOnCreateSession)==null||h.call(a,i),i===0&&Ne("Can't create a session."),(g=a.jsepOnCreateSession)==null||g.call(a),a.currentContext&&(a.jsepRegisterMLContext(i,a.currentContext),a.currentContext=void 0,a.shouldTransferToMLTensor=!0);let[b,S]=Kf(i),v=!!(t!=null&&t.enableGraphCapture),$=[],C=[],T=[];for(let O=0;O<b;O++){let A=a._OrtGetInputName(i,O);A===0&&Ne("Can't get an input name."),c.push(A),$.push(a.UTF8ToString(A))}for(let O=0;O<S;O++){let A=a._OrtGetOutputName(i,O);A===0&&Ne("Can't get an output name."),p.push(A);let M=a.UTF8ToString(A);C.push(M);{if(v&&(t==null?void 0:t.preferredOutputLocation)===void 0){T.push("gpu-buffer");continue}let W=typeof(t==null?void 0:t.preferredOutputLocation)=="string"?t.preferredOutputLocation:((_=t==null?void 0:t.preferredOutputLocation)==null?void 0:_[M])??"cpu";if(W!=="cpu"&&W!=="cpu-pinned"&&W!=="gpu-buffer"&&W!=="ml-tensor")throw new Error(`Not supported preferred output location: ${W}.`);if(v&&W!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${W}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);T.push(W)}}let I=null;return T.some(O=>O==="gpu-buffer"||O==="ml-tensor")&&(l=a._OrtCreateBinding(i),l===0&&Ne("Can't create IO binding."),I={handle:l,outputPreferredLocations:T,outputPreferredLocationsEncoded:T.map(O=>Ds(O))}),fr.set(i,[i,c,p,I,v,!1]),[i,$,C]}catch(b){throw c.forEach(S=>a._OrtFree(S)),p.forEach(S=>a._OrtFree(S)),l!==0&&a._OrtReleaseBinding(l)!==0&&Ne("Can't release IO binding."),i!==0&&a._OrtReleaseSession(i)!==0&&Ne("Can't release session."),b}finally{a._free(r),s!==0&&a._OrtReleaseSessionOptions(s)!==0&&Ne("Can't release session options."),u.forEach(b=>a._free(b)),(w=a.unmountExternalData)==null||w.call(a)}},qo=e=>{var u,c;let t=Le(),r=fr.get(e);if(!r)throw new Error(`cannot release session. invalid session id: ${e}`);let[n,a,i,s,l]=r;s&&(l&&t._OrtClearBoundOutputs(s.handle)!==0&&Ne("Can't clear bound outputs."),t._OrtReleaseBinding(s.handle)!==0&&Ne("Can't release IO binding.")),(u=t.jsepOnReleaseSession)==null||u.call(t,e),(c=t.webgpuOnReleaseSession)==null||c.call(t,e),a.forEach(p=>t._OrtFree(p)),i.forEach(p=>t._OrtFree(p)),t._OrtReleaseSession(n)!==0&&Ne("Can't release session."),fr.delete(e)},vs=async(e,t,r,n,a,i=!1)=>{if(!e){t.push(0);return}let s=Le(),l=s.PTR_SIZE,u=e[0],c=e[1],p=e[3],h=p,g,_;if(u==="string"&&(p==="gpu-buffer"||p==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(i&&p!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${a} when enableGraphCapture is true.`);if(p==="gpu-buffer"){let S=e[2].gpuBuffer;_=Mr(Qr(u),c);{let v=s.jsepRegisterBuffer;if(!v)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');g=v(n,a,S,_)}}else if(p==="ml-tensor"){let S=e[2].mlTensor;_=Mr(Qr(u),c);let v=s.jsepRegisterMLTensor;if(!v)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');g=v(n,S,Qr(u),c)}else{let S=e[2];if(Array.isArray(S)){_=l*S.length,g=s._malloc(_),r.push(g);for(let v=0;v<S.length;v++){if(typeof S[v]!="string")throw new TypeError(`tensor data at index ${v} is not a string`);s.setValue(g+v*l,Dt(S[v],r),"*")}}else{let v=s.jsepIsGraphInput;if(u!=="string"&&v){let $=s._OrtGetInputName(n,a),C=s.UTF8ToString($);if(v(n,C)){let T=Qr(u);_=Mr(T,c),h="ml-tensor";let I=s.jsepCreateTemporaryTensor,O=s.jsepUploadTensor;if(!I||!O)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let A=await I(n,T,c);O(A,new Uint8Array(S.buffer,S.byteOffset,S.byteLength)),g=A}else _=S.byteLength,g=s._malloc(_),r.push(g),s.HEAPU8.set(new Uint8Array(S.buffer,S.byteOffset,_),g)}else _=S.byteLength,g=s._malloc(_),r.push(g),s.HEAPU8.set(new Uint8Array(S.buffer,S.byteOffset,_),g)}}let w=s.stackSave(),b=s.stackAlloc(4*c.length);try{c.forEach((v,$)=>s.setValue(b+$*l,v,l===4?"i32":"i64"));let S=s._OrtCreateTensor(Qr(u),g,_,b,c.length,Ds(h));S===0&&Ne(`Can't create tensor for input/output. session=${n}, index=${a}.`),t.push(S)}finally{s.stackRestore(w)}},Vo=async(e,t,r,n,a,i)=>{var de,ue,fe;let s=Le(),l=s.PTR_SIZE,u=fr.get(e);if(!u)throw new Error(`cannot run inference. invalid session id: ${e}`);let c=u[0],p=u[1],h=u[2],g=u[3],_=u[4],w=u[5],b=t.length,S=n.length,v=0,$=[],C=[],T=[],I=[],O=s.stackSave(),A=s.stackAlloc(b*l),M=s.stackAlloc(b*l),W=s.stackAlloc(S*l),X=s.stackAlloc(S*l);try{[v,$]=km(i);for(let L=0;L<b;L++)await vs(r[L],C,I,e,t[L],_);for(let L=0;L<S;L++)await vs(a[L],T,I,e,b+n[L],_);for(let L=0;L<b;L++)s.setValue(A+L*l,C[L],"*"),s.setValue(M+L*l,p[t[L]],"*");for(let L=0;L<S;L++)s.setValue(W+L*l,T[L],"*"),s.setValue(X+L*l,h[n[L]],"*");if(g&&!w){let{handle:L,outputPreferredLocations:re,outputPreferredLocationsEncoded:pe}=g;if(p.length!==b)throw new Error(`input count from feeds (${b}) is expected to be always equal to model's input count (${p.length}).`);for(let te=0;te<b;te++){let Oe=t[te];await s._OrtBindInput(L,p[Oe],C[te])!==0&&Ne(`Can't bind input[${te}] for session=${e}.`)}for(let te=0;te<S;te++){let Oe=n[te];(de=a[te])!=null&&de[3]?s._OrtBindOutput(L,h[Oe],T[te],0)!==0&&Ne(`Can't bind pre-allocated output[${te}] for session=${e}.`):s._OrtBindOutput(L,h[Oe],0,pe[Oe])!==0&&Ne(`Can't bind output[${te}] to ${re[te]} for session=${e}.`)}fr.set(e,[c,p,h,g,_,!0])}(ue=s.jsepOnRunStart)==null||ue.call(s,c);let _e;g?_e=await s._OrtRunWithBinding(c,g.handle,S,W,v):_e=await s._OrtRun(c,M,A,b,X,S,W,v),_e!==0&&Ne("failed to call OrtRun().");let Te=[];for(let L=0;L<S;L++){let re=Number(s.getValue(W+L*l,"*"));if(re===T[L]){Te.push(a[L]);continue}let pe=s.stackSave(),te=s.stackAlloc(4*l),Oe=!1,U,q=0;try{s._OrtGetTensorData(re,te,te+l,te+2*l,te+3*l)!==0&&Ne(`Can't access output tensor data on index ${L}.`);let ae=l===4?"i32":"i64",ke=Number(s.getValue(te,ae));q=s.getValue(te+l,"*");let tt=s.getValue(te+l*2,"*"),V=Number(s.getValue(te+l*3,ae)),Ee=[];for(let He=0;He<V;He++)Ee.push(Number(s.getValue(tt+He*l,ae)));s._OrtFree(tt)!==0&&Ne("Can't free memory for tensor dims.");let at=Ee.reduce((He,je)=>He*je,1);U=Br(ke);let mt=g==null?void 0:g.outputPreferredLocations[n[L]];if(U==="string"){if(mt==="gpu-buffer"||mt==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let He=[];for(let je=0;je<at;je++){let k=s.getValue(q+je*l,"*"),z=s.getValue(q+(je+1)*l,"*"),D=je===at-1?void 0:z-k;He.push(s.UTF8ToString(k,D))}Te.push([U,Ee,He,"cpu"])}else if(mt==="gpu-buffer"&&at>0){let He=s.jsepGetBuffer;if(!He)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let je=He(q),k=Mr(ke,at);if(k===void 0||!So(U))throw new Error(`Unsupported data type: ${U}`);Oe=!0,Te.push([U,Ee,{gpuBuffer:je,download:s.jsepCreateDownloader(je,k,U),dispose:()=>{s._OrtReleaseTensor(re)!==0&&Ne("Can't release tensor.")}},"gpu-buffer"])}else if(mt==="ml-tensor"&&at>0){let He=s.jsepEnsureTensor;if(!He)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(Mr(ke,at)===void 0||!To(U))throw new Error(`Unsupported data type: ${U}`);let je=await He(e,q,ke,Ee,!1);Oe=!0,Te.push([U,Ee,{mlTensor:je,download:s.jsepCreateMLTensorDownloader(q,U),dispose:()=>{s.jsepReleaseTensorId(q),s._OrtReleaseTensor(re)}},"ml-tensor"])}else{let He=xo(U),je=new He(at);new Uint8Array(je.buffer,je.byteOffset,je.byteLength).set(s.HEAPU8.subarray(q,q+je.byteLength)),Te.push([U,Ee,je,"cpu"])}}finally{s.stackRestore(pe),U==="string"&&q&&s._free(q),Oe||s._OrtReleaseTensor(re),(fe=s.jsepOnRunEnd)==null||fe.call(s,c)}}return g&&!_&&(s._OrtClearBoundOutputs(g.handle)!==0&&Ne("Can't clear bound outputs."),fr.set(e,[c,p,h,g,_,!1])),Te}finally{s.stackRestore(O),C.forEach(_e=>s._OrtReleaseTensor(_e)),T.forEach(_e=>s._OrtReleaseTensor(_e)),I.forEach(_e=>s._free(_e)),v!==0&&s._OrtReleaseRunOptions(v),$.forEach(_e=>s._free(_e))}},Ho=e=>{let t=Le(),r=fr.get(e);if(!r)throw new Error("invalid session id");let n=r[0],a=t._OrtEndProfiling(n);a===0&&Ne("Can't get an profile file name."),t._OrtFree(a)},Fo=e=>{let t=[];for(let r of e){let n=r[2];!Array.isArray(n)&&"buffer"in n&&t.push(n.buffer)}return t}}),hr,yt,Kr,Ti,Ci,$n,$s,xn,zr,Ar,Zf,C_,k_,E_,I_,z_,A_,O_,R_=K(()=>{Wt(),T_(),Vr(),bo(),hr=()=>!!Fe.wasm.proxy&&typeof document<"u",Kr=!1,Ti=!1,Ci=!1,xn=new Map,zr=(e,t)=>{let r=xn.get(e);r?r.push(t):xn.set(e,[t])},Ar=()=>{if(Kr||!Ti||Ci||!yt)throw new Error("worker not ready")},Zf=e=>{switch(e.data.type){case"init-wasm":Kr=!1,e.data.err?(Ci=!0,$s[1](e.data.err)):(Ti=!0,$s[0]()),$n&&(URL.revokeObjectURL($n),$n=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=xn.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}}},C_=async()=>{if(!Ti){if(Kr)throw new Error("multiple calls to 'initWasm()' detected.");if(Ci)throw new Error("previous call to 'initWasm()' failed.");if(Kr=!0,hr())return new Promise((e,t)=>{yt==null||yt.terminate(),Tm().then(([r,n])=>{try{yt=n,yt.onerror=i=>t(i),yt.onmessage=Zf,$s=[e,t];let a={type:"init-wasm",in:Fe};!a.in.wasm.wasmPaths&&(r||Ms)&&(a.in.wasm.wasmPaths={wasm:new URL("/digits/assets/ort-wasm-simd-threaded.jsep-BghxtcAU.wasm",import.meta.url).href}),yt.postMessage(a),$n=r}catch(a){t(a)}},t)});try{await vo(Fe.wasm),await Uo(Fe),Ti=!0}catch(e){throw Ci=!0,e}finally{Kr=!1}}},k_=async e=>{if(hr())return Ar(),new Promise((t,r)=>{zr("init-ep",[t,r]);let n={type:"init-ep",in:{epName:e,env:Fe}};yt.postMessage(n)});await Wo(Fe,e)},E_=async e=>hr()?(Ar(),new Promise((t,r)=>{zr("copy-from",[t,r]);let n={type:"copy-from",in:{buffer:e}};yt.postMessage(n,[e.buffer])})):qn(e),I_=async(e,t)=>{if(hr()){if(t!=null&&t.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return Ar(),new Promise((r,n)=>{zr("create",[r,n]);let a={type:"create",in:{model:e,options:{...t}}},i=[];e instanceof Uint8Array&&i.push(e.buffer),yt.postMessage(a,i)})}else return Lo(e,t)},z_=async e=>{if(hr())return Ar(),new Promise((t,r)=>{zr("release",[t,r]);let n={type:"release",in:e};yt.postMessage(n)});qo(e)},A_=async(e,t,r,n,a,i)=>{if(hr()){if(r.some(s=>s[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(a.some(s=>s))throw new Error("pre-allocated output tensor is not supported for proxy.");return Ar(),new Promise((s,l)=>{zr("run",[s,l]);let u=r,c={type:"run",in:{sessionId:e,inputIndices:t,inputs:u,outputIndices:n,options:i}};yt.postMessage(c,Fo(u))})}else return Vo(e,t,r,n,a,i)},O_=async e=>{if(hr())return Ar(),new Promise((t,r)=>{zr("end-profiling",[t,r]);let n={type:"end-profiling",in:e};yt.postMessage(n)});Ho(e)}}),xs,Qf,B_,F1=K(()=>{Wt(),R_(),ge(),wo(),Im(),xs=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},Qf=e=>{switch(e[3]){case"cpu":return new Nt(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!So(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:r,download:n,dispose:a}=e[2];return Nt.fromGpuBuffer(r,{dataType:t,dims:e[1],download:n,dispose:a})}case"ml-tensor":{let t=e[0];if(!To(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:r,download:n,dispose:a}=e[2];return Nt.fromMLTensor(r,{dataType:t,dims:e[1],download:n,dispose:a})}default:throw new Error(`invalid data location: ${e[3]}`)}},B_=class{async fetchModelAndCopyToWasmMemory(e){return E_(await Co(e))}async loadModel(e,t){er();let r;typeof e=="string"?r=await this.fetchModelAndCopyToWasmMemory(e):r=e,[this.sessionId,this.inputNames,this.outputNames]=await I_(r,t),Ut()}async dispose(){return z_(this.sessionId)}async run(e,t,r){er();let n=[],a=[];Object.entries(e).forEach(h=>{let g=h[0],_=h[1],w=this.inputNames.indexOf(g);if(w===-1)throw new Error(`invalid input '${g}'`);n.push(_),a.push(w)});let i=[],s=[];Object.entries(t).forEach(h=>{let g=h[0],_=h[1],w=this.outputNames.indexOf(g);if(w===-1)throw new Error(`invalid output '${g}'`);i.push(_),s.push(w)});let l=n.map((h,g)=>xs(h,()=>`input "${this.inputNames[a[g]]}"`)),u=i.map((h,g)=>h?xs(h,()=>`output "${this.outputNames[s[g]]}"`):null),c=await A_(this.sessionId,a,l,s,u,r),p={};for(let h=0;h<c.length;h++)p[this.outputNames[s[h]]]=i[h]??Qf(c[h]);return Ut(),p}startProfiling(){}endProfiling(){O_(this.sessionId)}}}),M_={};li(M_,{OnnxruntimeWebAssemblyBackend:()=>Zs,initializeFlags:()=>Ks,wasmBackend:()=>D_});var Ks,Zs,D_,G1=K(()=>{Wt(),R_(),F1(),Ks=()=>{if((typeof Fe.wasm.initTimeout!="number"||Fe.wasm.initTimeout<0)&&(Fe.wasm.initTimeout=0),Fe.wasm.simd===!1&&console.warn('Deprecated property "env.wasm.simd" is set to false. non-SIMD build is no longer provided, and this setting will be ignored.'),typeof Fe.wasm.proxy!="boolean"&&(Fe.wasm.proxy=!1),typeof Fe.wasm.trace!="boolean"&&(Fe.wasm.trace=!1),typeof Fe.wasm.numThreads!="number"||!Number.isInteger(Fe.wasm.numThreads)||Fe.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)Fe.wasm.numThreads=1;else{let e=typeof navigator>"u"?z$("node:os").cpus().length:navigator.hardwareConcurrency;Fe.wasm.numThreads=Math.min(4,Math.ceil((e||1)/2))}},Zs=class{async init(e){Ks(),await C_(),await k_(e)}async createInferenceSessionHandler(e,t){let r=new B_;return await r.loadModel(e,t),Promise.resolve(r)}},D_=new Zs});Wt();Wt();Wt();var j1="1.22.0-dev.20250310-fe7634eb6f";{let e=(G1(),Fi(M_)).wasmBackend;Yr("webgpu",e,5),Yr("webnn",e,5),Yr("cpu",e,10),Yr("wasm",e,10)}Object.defineProperty(Fe.versions,"web",{value:j1,enumerable:!0});/**
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
 */const K1={class:"app-container"},Z1={key:0,class:"prediction-result"},Q1={class:"logits-panel"},X1={class:"logit-label"},Y1={class:"logit-value"},J1={__name:"App",setup(e){const t=jt(new Array(784).fill(0)),r=jt(null),n=jt(null),a=jt(new Array(10).fill(0));po(async()=>{try{n.value=await _o.create("/digits/models/mnist_cnn.onnx")}catch(u){console.error("Failed to load model:",u),alert("Failed to load the model.")}});const i=u=>{t.value=u,s()},s=async()=>{if(!n.value){console.error("Model not loaded yet!");return}if(t.value.every(c=>c===0)){r.value=null,a.value=new Array(10).fill(0);return}const u=new Nt("float32",t.value,[1,1,28,28]);try{const p=(await n.value.run({[n.value.inputNames[0]]:u}))[n.value.outputNames[0]],h=p.data.indexOf(Math.max(...p.data));r.value=h;const g=p.data.map(b=>Math.exp(b)),_=g.reduce((b,S)=>b+S,0),w=g.map(b=>b/_);a.value=w}catch(c){console.error("Inference error:",c),alert("Prediction failed.")}},l=()=>{r.value=null,a.value=new Array(10).fill(0)};return(u,c)=>(Xr(),Ei("div",K1,[Yt(C$,{"onUpdate:imageData":i,onClearPrediction:l}),r.value!==null?(Xr(),Ei("div",Z1," Prediction: "+Sn(r.value),1)):Lv("",!0),_r("div",Q1,[(Xr(!0),Ei(Kt,null,sv(a.value,(p,h)=>(Xr(),Ei("div",{key:h,class:"logit-bar-container"},[_r("div",X1,Sn(h),1),_r("div",{class:"logit-bar",style:jn({width:`${p*100}%`,backgroundColor:h===r.value?"lightgreen":"skyblue"})},null,4),_r("div",Y1,Sn((p*100).toFixed(2))+"%",1)]))),128))])]))}},e2=tm(J1,[["__scopeId","data-v-bfe10b6c"]]);v$(e2).mount("#app");
