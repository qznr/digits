var Jb=Object.defineProperty;var ew=(e,t,r)=>t in e?Jb(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var Hu=(e,t,r)=>ew(e,typeof t!="symbol"?t+"":t,r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=r(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Ja(e){const t=Object.create(null);for(const r of e.split(","))t[r]=1;return r=>r in t}const Ve={},ii=[],Yt=()=>{},tw=()=>!1,Fn=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),eo=e=>e.startsWith("onUpdate:"),gt=Object.assign,to=(e,t)=>{const r=e.indexOf(t);r>-1&&e.splice(r,1)},rw=Object.prototype.hasOwnProperty,Ue=(e,t)=>rw.call(e,t),Ce=Array.isArray,ni=e=>Hn(e)==="[object Map]",eh=e=>Hn(e)==="[object Set]",Ee=e=>typeof e=="function",Ze=e=>typeof e=="string",Sr=e=>typeof e=="symbol",je=e=>e!==null&&typeof e=="object",th=e=>(je(e)||Ee(e))&&Ee(e.then)&&Ee(e.catch),rh=Object.prototype.toString,Hn=e=>rh.call(e),iw=e=>Hn(e).slice(8,-1),ih=e=>Hn(e)==="[object Object]",ro=e=>Ze(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Ri=Ja(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Gn=e=>{const t=Object.create(null);return r=>t[r]||(t[r]=e(r))},nw=/-(\w)/g,$r=Gn(e=>e.replace(nw,(t,r)=>r?r.toUpperCase():"")),sw=/\B([A-Z])/g,Hr=Gn(e=>e.replace(sw,"-$1").toLowerCase()),nh=Gn(e=>e.charAt(0).toUpperCase()+e.slice(1)),ws=Gn(e=>e?`on${nh(e)}`:""),vr=(e,t)=>!Object.is(e,t),Sn=(e,...t)=>{for(let r=0;r<e.length;r++)e[r](...t)},sh=(e,t,r,n=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:n,value:r})},ka=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Gu;const jn=()=>Gu||(Gu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Kn(e){if(Ce(e)){const t={};for(let r=0;r<e.length;r++){const n=e[r],s=Ze(n)?uw(n):Kn(n);if(s)for(const i in s)t[i]=s[i]}return t}else if(Ze(e)||je(e))return e}const aw=/;(?![^(]*\))/g,ow=/:([^]+)/,lw=/\/\*[^]*?\*\//g;function uw(e){const t={};return e.replace(lw,"").split(aw).forEach(r=>{if(r){const n=r.split(ow);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function Qn(e){let t="";if(Ze(e))t=e;else if(Ce(e))for(let r=0;r<e.length;r++){const n=Qn(e[r]);n&&(t+=n+" ")}else if(je(e))for(const r in e)e[r]&&(t+=r+" ");return t.trim()}const dw="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",cw=Ja(dw);function ah(e){return!!e||e===""}const oh=e=>!!(e&&e.__v_isRef===!0),si=e=>Ze(e)?e:e==null?"":Ce(e)||je(e)&&(e.toString===rh||!Ee(e.toString))?oh(e)?si(e.value):JSON.stringify(e,lh,2):String(e),lh=(e,t)=>oh(t)?lh(e,t.value):ni(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((r,[n,s],i)=>(r[vs(n,i)+" =>"]=s,r),{})}:eh(t)?{[`Set(${t.size})`]:[...t.values()].map(r=>vs(r))}:Sr(t)?vs(t):je(t)&&!Ce(t)&&!ih(t)?String(t):t,vs=(e,t="")=>{var r;return Sr(e)?`Symbol(${(r=e.description)!=null?r:t})`:e};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let $t;class pw{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=$t,!t&&$t&&(this.index=($t.scopes||($t.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,r;if(this.scopes)for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].pause();for(t=0,r=this.effects.length;t<r;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,r;if(this.scopes)for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].resume();for(t=0,r=this.effects.length;t<r;t++)this.effects[t].resume()}}run(t){if(this._active){const r=$t;try{return $t=this,t()}finally{$t=r}}}on(){$t=this}off(){$t=this.parent}stop(t){if(this._active){this._active=!1;let r,n;for(r=0,n=this.effects.length;r<n;r++)this.effects[r].stop();for(this.effects.length=0,r=0,n=this.cleanups.length;r<n;r++)this.cleanups[r]();if(this.cleanups.length=0,this.scopes){for(r=0,n=this.scopes.length;r<n;r++)this.scopes[r].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function fw(){return $t}let Fe;const $s=new WeakSet;class uh{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,$t&&$t.active&&$t.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,$s.has(this)&&($s.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ch(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ju(this),ph(this);const t=Fe,r=Wt;Fe=this,Wt=!0;try{return this.fn()}finally{fh(this),Fe=t,Wt=r,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)so(t);this.deps=this.depsTail=void 0,ju(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?$s.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ia(this)&&this.run()}get dirty(){return Ia(this)}}let dh=0,Mi,Bi;function ch(e,t=!1){if(e.flags|=8,t){e.next=Bi,Bi=e;return}e.next=Mi,Mi=e}function io(){dh++}function no(){if(--dh>0)return;if(Bi){let t=Bi;for(Bi=void 0;t;){const r=t.next;t.next=void 0,t.flags&=-9,t=r}}let e;for(;Mi;){let t=Mi;for(Mi=void 0;t;){const r=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(n){e||(e=n)}t=r}}if(e)throw e}function ph(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function fh(e){let t,r=e.depsTail,n=r;for(;n;){const s=n.prevDep;n.version===-1?(n===r&&(r=s),so(n),hw(n)):t=n,n.dep.activeLink=n.prevActiveLink,n.prevActiveLink=void 0,n=s}e.deps=t,e.depsTail=r}function Ia(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(hh(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function hh(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Wi))return;e.globalVersion=Wi;const t=e.dep;if(e.flags|=2,t.version>0&&!e.isSSR&&e.deps&&!Ia(e)){e.flags&=-3;return}const r=Fe,n=Wt;Fe=e,Wt=!0;try{ph(e);const s=e.fn(e._value);(t.version===0||vr(s,e._value))&&(e._value=s,t.version++)}catch(s){throw t.version++,s}finally{Fe=r,Wt=n,fh(e),e.flags&=-3}}function so(e,t=!1){const{dep:r,prevSub:n,nextSub:s}=e;if(n&&(n.nextSub=s,e.prevSub=void 0),s&&(s.prevSub=n,e.nextSub=void 0),r.subs===e&&(r.subs=n,!n&&r.computed)){r.computed.flags&=-5;for(let i=r.computed.deps;i;i=i.nextDep)so(i,!0)}!t&&!--r.sc&&r.map&&r.map.delete(r.key)}function hw(e){const{prevDep:t,nextDep:r}=e;t&&(t.nextDep=r,e.prevDep=void 0),r&&(r.prevDep=t,e.nextDep=void 0)}let Wt=!0;const mh=[];function Tr(){mh.push(Wt),Wt=!1}function Cr(){const e=mh.pop();Wt=e===void 0?!0:e}function ju(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const r=Fe;Fe=void 0;try{t()}finally{Fe=r}}}let Wi=0;class mw{constructor(t,r){this.sub=t,this.dep=r,this.version=r.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ao{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(t){if(!Fe||!Wt||Fe===this.computed)return;let r=this.activeLink;if(r===void 0||r.sub!==Fe)r=this.activeLink=new mw(Fe,this),Fe.deps?(r.prevDep=Fe.depsTail,Fe.depsTail.nextDep=r,Fe.depsTail=r):Fe.deps=Fe.depsTail=r,gh(r);else if(r.version===-1&&(r.version=this.version,r.nextDep)){const n=r.nextDep;n.prevDep=r.prevDep,r.prevDep&&(r.prevDep.nextDep=n),r.prevDep=Fe.depsTail,r.nextDep=void 0,Fe.depsTail.nextDep=r,Fe.depsTail=r,Fe.deps===r&&(Fe.deps=n)}return r}trigger(t){this.version++,Wi++,this.notify(t)}notify(t){io();try{for(let r=this.subs;r;r=r.prevSub)r.sub.notify()&&r.sub.dep.notify()}finally{no()}}}function gh(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let n=t.deps;n;n=n.nextDep)gh(n)}const r=e.dep.subs;r!==e&&(e.prevSub=r,r&&(r.nextSub=e)),e.dep.subs=e}}const Ea=new WeakMap,Ur=Symbol(""),za=Symbol(""),Li=Symbol("");function ut(e,t,r){if(Wt&&Fe){let n=Ea.get(e);n||Ea.set(e,n=new Map);let s=n.get(r);s||(n.set(r,s=new ao),s.map=n,s.key=r),s.track()}}function or(e,t,r,n,s,i){const a=Ea.get(e);if(!a){Wi++;return}const l=u=>{u&&u.trigger()};if(io(),t==="clear")a.forEach(l);else{const u=Ce(e),c=u&&ro(r);if(u&&r==="length"){const f=Number(n);a.forEach((h,g)=>{(g==="length"||g===Li||!Sr(g)&&g>=f)&&l(h)})}else switch((r!==void 0||a.has(void 0))&&l(a.get(r)),c&&l(a.get(Li)),t){case"add":u?c&&l(a.get("length")):(l(a.get(Ur)),ni(e)&&l(a.get(za)));break;case"delete":u||(l(a.get(Ur)),ni(e)&&l(a.get(za)));break;case"set":ni(e)&&l(a.get(Ur));break}}no()}function Zr(e){const t=Pe(e);return t===e?t:(ut(t,"iterate",Li),Ot(e)?t:t.map(dt))}function Zn(e){return ut(e=Pe(e),"iterate",Li),e}const gw={__proto__:null,[Symbol.iterator](){return xs(this,Symbol.iterator,dt)},concat(...e){return Zr(this).concat(...e.map(t=>Ce(t)?Zr(t):t))},entries(){return xs(this,"entries",e=>(e[1]=dt(e[1]),e))},every(e,t){return nr(this,"every",e,t,void 0,arguments)},filter(e,t){return nr(this,"filter",e,t,r=>r.map(dt),arguments)},find(e,t){return nr(this,"find",e,t,dt,arguments)},findIndex(e,t){return nr(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return nr(this,"findLast",e,t,dt,arguments)},findLastIndex(e,t){return nr(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return nr(this,"forEach",e,t,void 0,arguments)},includes(...e){return Ss(this,"includes",e)},indexOf(...e){return Ss(this,"indexOf",e)},join(e){return Zr(this).join(e)},lastIndexOf(...e){return Ss(this,"lastIndexOf",e)},map(e,t){return nr(this,"map",e,t,void 0,arguments)},pop(){return yi(this,"pop")},push(...e){return yi(this,"push",e)},reduce(e,...t){return Ku(this,"reduce",e,t)},reduceRight(e,...t){return Ku(this,"reduceRight",e,t)},shift(){return yi(this,"shift")},some(e,t){return nr(this,"some",e,t,void 0,arguments)},splice(...e){return yi(this,"splice",e)},toReversed(){return Zr(this).toReversed()},toSorted(e){return Zr(this).toSorted(e)},toSpliced(...e){return Zr(this).toSpliced(...e)},unshift(...e){return yi(this,"unshift",e)},values(){return xs(this,"values",dt)}};function xs(e,t,r){const n=Zn(e),s=n[t]();return n!==e&&!Ot(e)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=r(i.value)),i}),s}const yw=Array.prototype;function nr(e,t,r,n,s,i){const a=Zn(e),l=a!==e&&!Ot(e),u=a[t];if(u!==yw[t]){const h=u.apply(e,i);return l?dt(h):h}let c=r;a!==e&&(l?c=function(h,g){return r.call(this,dt(h),g,e)}:r.length>2&&(c=function(h,g){return r.call(this,h,g,e)}));const f=u.call(a,c,n);return l&&s?s(f):f}function Ku(e,t,r,n){const s=Zn(e);let i=r;return s!==e&&(Ot(e)?r.length>3&&(i=function(a,l,u){return r.call(this,a,l,u,e)}):i=function(a,l,u){return r.call(this,a,dt(l),u,e)}),s[t](i,...n)}function Ss(e,t,r){const n=Pe(e);ut(n,"iterate",Li);const s=n[t](...r);return(s===-1||s===!1)&&co(r[0])?(r[0]=Pe(r[0]),n[t](...r)):s}function yi(e,t,r=[]){Tr(),io();const n=Pe(e)[t].apply(e,r);return no(),Cr(),n}const _w=Ja("__proto__,__v_isRef,__isVue"),yh=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Sr));function bw(e){Sr(e)||(e=String(e));const t=Pe(this);return ut(t,"has",e),t.hasOwnProperty(e)}class _h{constructor(t=!1,r=!1){this._isReadonly=t,this._isShallow=r}get(t,r,n){if(r==="__v_skip")return t.__v_skip;const s=this._isReadonly,i=this._isShallow;if(r==="__v_isReactive")return!s;if(r==="__v_isReadonly")return s;if(r==="__v_isShallow")return i;if(r==="__v_raw")return n===(s?i?Ew:$h:i?vh:wh).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(n)?t:void 0;const a=Ce(t);if(!s){let u;if(a&&(u=gw[r]))return u;if(r==="hasOwnProperty")return bw}const l=Reflect.get(t,r,ct(t)?t:n);return(Sr(r)?yh.has(r):_w(r))||(s||ut(t,"get",r),i)?l:ct(l)?a&&ro(r)?l:l.value:je(l)?s?xh(l):lo(l):l}}class bh extends _h{constructor(t=!1){super(!1,t)}set(t,r,n,s){let i=t[r];if(!this._isShallow){const u=Wr(i);if(!Ot(n)&&!Wr(n)&&(i=Pe(i),n=Pe(n)),!Ce(t)&&ct(i)&&!ct(n))return u?!1:(i.value=n,!0)}const a=Ce(t)&&ro(r)?Number(r)<t.length:Ue(t,r),l=Reflect.set(t,r,n,ct(t)?t:s);return t===Pe(s)&&(a?vr(n,i)&&or(t,"set",r,n):or(t,"add",r,n)),l}deleteProperty(t,r){const n=Ue(t,r);t[r];const s=Reflect.deleteProperty(t,r);return s&&n&&or(t,"delete",r,void 0),s}has(t,r){const n=Reflect.has(t,r);return(!Sr(r)||!yh.has(r))&&ut(t,"has",r),n}ownKeys(t){return ut(t,"iterate",Ce(t)?"length":Ur),Reflect.ownKeys(t)}}class ww extends _h{constructor(t=!1){super(!0,t)}set(t,r){return!0}deleteProperty(t,r){return!0}}const vw=new bh,$w=new ww,xw=new bh(!0);const Aa=e=>e,on=e=>Reflect.getPrototypeOf(e);function Sw(e,t,r){return function(...n){const s=this.__v_raw,i=Pe(s),a=ni(i),l=e==="entries"||e===Symbol.iterator&&a,u=e==="keys"&&a,c=s[e](...n),f=r?Aa:t?Oa:dt;return!t&&ut(i,"iterate",u?za:Ur),{next(){const{value:h,done:g}=c.next();return g?{value:h,done:g}:{value:l?[f(h[0]),f(h[1])]:f(h),done:g}},[Symbol.iterator](){return this}}}}function ln(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Tw(e,t){const r={get(s){const i=this.__v_raw,a=Pe(i),l=Pe(s);e||(vr(s,l)&&ut(a,"get",s),ut(a,"get",l));const{has:u}=on(a),c=t?Aa:e?Oa:dt;if(u.call(a,s))return c(i.get(s));if(u.call(a,l))return c(i.get(l));i!==a&&i.get(s)},get size(){const s=this.__v_raw;return!e&&ut(Pe(s),"iterate",Ur),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,a=Pe(i),l=Pe(s);return e||(vr(s,l)&&ut(a,"has",s),ut(a,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const a=this,l=a.__v_raw,u=Pe(l),c=t?Aa:e?Oa:dt;return!e&&ut(u,"iterate",Ur),l.forEach((f,h)=>s.call(i,c(f),c(h),a))}};return gt(r,e?{add:ln("add"),set:ln("set"),delete:ln("delete"),clear:ln("clear")}:{add(s){!t&&!Ot(s)&&!Wr(s)&&(s=Pe(s));const i=Pe(this);return on(i).has.call(i,s)||(i.add(s),or(i,"add",s,s)),this},set(s,i){!t&&!Ot(i)&&!Wr(i)&&(i=Pe(i));const a=Pe(this),{has:l,get:u}=on(a);let c=l.call(a,s);c||(s=Pe(s),c=l.call(a,s));const f=u.call(a,s);return a.set(s,i),c?vr(i,f)&&or(a,"set",s,i):or(a,"add",s,i),this},delete(s){const i=Pe(this),{has:a,get:l}=on(i);let u=a.call(i,s);u||(s=Pe(s),u=a.call(i,s)),l&&l.call(i,s);const c=i.delete(s);return u&&or(i,"delete",s,void 0),c},clear(){const s=Pe(this),i=s.size!==0,a=s.clear();return i&&or(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{r[s]=Sw(s,e,t)}),r}function oo(e,t){const r=Tw(e,t);return(n,s,i)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?n:Reflect.get(Ue(r,s)&&s in n?r:n,s,i)}const Cw={get:oo(!1,!1)},kw={get:oo(!1,!0)},Iw={get:oo(!0,!1)};const wh=new WeakMap,vh=new WeakMap,$h=new WeakMap,Ew=new WeakMap;function zw(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Aw(e){return e.__v_skip||!Object.isExtensible(e)?0:zw(iw(e))}function lo(e){return Wr(e)?e:uo(e,!1,vw,Cw,wh)}function Ow(e){return uo(e,!1,xw,kw,vh)}function xh(e){return uo(e,!0,$w,Iw,$h)}function uo(e,t,r,n,s){if(!je(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=s.get(e);if(i)return i;const a=Aw(e);if(a===0)return e;const l=new Proxy(e,a===2?n:r);return s.set(e,l),l}function ai(e){return Wr(e)?ai(e.__v_raw):!!(e&&e.__v_isReactive)}function Wr(e){return!!(e&&e.__v_isReadonly)}function Ot(e){return!!(e&&e.__v_isShallow)}function co(e){return e?!!e.__v_raw:!1}function Pe(e){const t=e&&e.__v_raw;return t?Pe(t):e}function Rw(e){return!Ue(e,"__v_skip")&&Object.isExtensible(e)&&sh(e,"__v_skip",!0),e}const dt=e=>je(e)?lo(e):e,Oa=e=>je(e)?xh(e):e;function ct(e){return e?e.__v_isRef===!0:!1}function xt(e){return Mw(e,!1)}function Mw(e,t){return ct(e)?e:new Bw(e,t)}class Bw{constructor(t,r){this.dep=new ao,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=r?t:Pe(t),this._value=r?t:dt(t),this.__v_isShallow=r}get value(){return this.dep.track(),this._value}set value(t){const r=this._rawValue,n=this.__v_isShallow||Ot(t)||Wr(t);t=n?t:Pe(t),vr(t,r)&&(this._rawValue=t,this._value=n?t:dt(t),this.dep.trigger())}}function Dw(e){return ct(e)?e.value:e}const Nw={get:(e,t,r)=>t==="__v_raw"?e:Dw(Reflect.get(e,t,r)),set:(e,t,r,n)=>{const s=e[t];return ct(s)&&!ct(r)?(s.value=r,!0):Reflect.set(e,t,r,n)}};function Sh(e){return ai(e)?e:new Proxy(e,Nw)}class Pw{constructor(t,r,n){this.fn=t,this.setter=r,this._value=void 0,this.dep=new ao(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Wi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!r,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&Fe!==this)return ch(this,!0),!0}get value(){const t=this.dep.track();return hh(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Uw(e,t,r=!1){let n,s;return Ee(e)?n=e:(n=e.get,s=e.set),new Pw(n,s,r)}const un={},zn=new WeakMap;let Mr;function Ww(e,t=!1,r=Mr){if(r){let n=zn.get(r);n||zn.set(r,n=[]),n.push(e)}}function Lw(e,t,r=Ve){const{immediate:n,deep:s,once:i,scheduler:a,augmentJob:l,call:u}=r,c=x=>s?x:Ot(x)||s===!1||s===0?lr(x,1):lr(x);let f,h,g,_,b=!1,w=!1;if(ct(e)?(h=()=>e.value,b=Ot(e)):ai(e)?(h=()=>c(e),b=!0):Ce(e)?(w=!0,b=e.some(x=>ai(x)||Ot(x)),h=()=>e.map(x=>{if(ct(x))return x.value;if(ai(x))return c(x);if(Ee(x))return u?u(x,2):x()})):Ee(e)?t?h=u?()=>u(e,2):e:h=()=>{if(g){Tr();try{g()}finally{Cr()}}const x=Mr;Mr=f;try{return u?u(e,3,[_]):e(_)}finally{Mr=x}}:h=Yt,t&&s){const x=h,C=s===!0?1/0:s;h=()=>lr(x(),C)}const T=fw(),v=()=>{f.stop(),T&&T.active&&to(T.effects,f)};if(i&&t){const x=t;t=(...C)=>{x(...C),v()}}let $=w?new Array(e.length).fill(un):un;const k=x=>{if(!(!(f.flags&1)||!f.dirty&&!x))if(t){const C=f.run();if(s||b||(w?C.some((z,O)=>vr(z,$[O])):vr(C,$))){g&&g();const z=Mr;Mr=f;try{const O=[C,$===un?void 0:w&&$[0]===un?[]:$,_];u?u(t,3,O):t(...O),$=C}finally{Mr=z}}}else f.run()};return l&&l(k),f=new uh(h),f.scheduler=a?()=>a(k,!1):k,_=x=>Ww(x,!1,f),g=f.onStop=()=>{const x=zn.get(f);if(x){if(u)u(x,4);else for(const C of x)C();zn.delete(f)}},t?n?k(!0):$=f.run():a?a(k.bind(null,!0),!0):f.run(),v.pause=f.pause.bind(f),v.resume=f.resume.bind(f),v.stop=v,v}function lr(e,t=1/0,r){if(t<=0||!je(e)||e.__v_skip||(r=r||new Set,r.has(e)))return e;if(r.add(e),t--,ct(e))lr(e.value,t,r);else if(Ce(e))for(let n=0;n<e.length;n++)lr(e[n],t,r);else if(eh(e)||ni(e))e.forEach(n=>{lr(n,t,r)});else if(ih(e)){for(const n in e)lr(e[n],t,r);for(const n of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,n)&&lr(e[n],t,r)}return e}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Gi(e,t,r,n){try{return n?e(...n):e()}catch(s){Xn(s,t,r)}}function er(e,t,r,n){if(Ee(e)){const s=Gi(e,t,r,n);return s&&th(s)&&s.catch(i=>{Xn(i,t,r)}),s}if(Ce(e)){const s=[];for(let i=0;i<e.length;i++)s.push(er(e[i],t,r,n));return s}}function Xn(e,t,r,n=!0){const s=t?t.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:a}=t&&t.appContext.config||Ve;if(t){let l=t.parent;const u=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${r}`;for(;l;){const f=l.ec;if(f){for(let h=0;h<f.length;h++)if(f[h](e,u,c)===!1)return}l=l.parent}if(i){Tr(),Gi(i,null,10,[e,u,c]),Cr();return}}Vw(e,r,s,n,a)}function Vw(e,t,r,n=!0,s=!1){if(s)throw e;console.error(e)}const ht=[];let Zt=-1;const oi=[];let _r=null,Yr=0;const Th=Promise.resolve();let An=null;function qw(e){const t=An||Th;return e?t.then(this?e.bind(this):e):t}function Fw(e){let t=Zt+1,r=ht.length;for(;t<r;){const n=t+r>>>1,s=ht[n],i=Vi(s);i<e||i===e&&s.flags&2?t=n+1:r=n}return t}function po(e){if(!(e.flags&1)){const t=Vi(e),r=ht[ht.length-1];!r||!(e.flags&2)&&t>=Vi(r)?ht.push(e):ht.splice(Fw(t),0,e),e.flags|=1,Ch()}}function Ch(){An||(An=Th.then(Ih))}function Hw(e){Ce(e)?oi.push(...e):_r&&e.id===-1?_r.splice(Yr+1,0,e):e.flags&1||(oi.push(e),e.flags|=1),Ch()}function Qu(e,t,r=Zt+1){for(;r<ht.length;r++){const n=ht[r];if(n&&n.flags&2){if(e&&n.id!==e.uid)continue;ht.splice(r,1),r--,n.flags&4&&(n.flags&=-2),n(),n.flags&4||(n.flags&=-2)}}}function kh(e){if(oi.length){const t=[...new Set(oi)].sort((r,n)=>Vi(r)-Vi(n));if(oi.length=0,_r){_r.push(...t);return}for(_r=t,Yr=0;Yr<_r.length;Yr++){const r=_r[Yr];r.flags&4&&(r.flags&=-2),r.flags&8||r(),r.flags&=-2}_r=null,Yr=0}}const Vi=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Ih(e){try{for(Zt=0;Zt<ht.length;Zt++){const t=ht[Zt];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Gi(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Zt<ht.length;Zt++){const t=ht[Zt];t&&(t.flags&=-2)}Zt=-1,ht.length=0,kh(),An=null,(ht.length||oi.length)&&Ih()}}let At=null,Eh=null;function On(e){const t=At;return At=e,Eh=e&&e.type.__scopeId||null,t}function Gw(e,t=At,r){if(!t||e._n)return e;const n=(...s)=>{n._d&&nd(-1);const i=On(t);let a;try{a=e(...s)}finally{On(i),n._d&&nd(1)}return a};return n._n=!0,n._c=!0,n._d=!0,n}function jw(e,t){if(At===null)return e;const r=ts(At),n=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[i,a,l,u=Ve]=t[s];i&&(Ee(i)&&(i={mounted:i,updated:i}),i.deep&&lr(a),n.push({dir:i,instance:r,value:a,oldValue:void 0,arg:l,modifiers:u}))}return e}function Ir(e,t,r,n){const s=e.dirs,i=t&&t.dirs;for(let a=0;a<s.length;a++){const l=s[a];i&&(l.oldValue=i[a].value);let u=l.dir[n];u&&(Tr(),er(u,r,8,[e.el,l,e,t]),Cr())}}const Kw=Symbol("_vte"),Qw=e=>e.__isTeleport;function fo(e,t){e.shapeFlag&6&&e.component?(e.transition=t,fo(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function zh(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Rn(e,t,r,n,s=!1){if(Ce(e)){e.forEach((b,w)=>Rn(b,t&&(Ce(t)?t[w]:t),r,n,s));return}if(Di(n)&&!s){n.shapeFlag&512&&n.type.__asyncResolved&&n.component.subTree.component&&Rn(e,t,r,n.component.subTree);return}const i=n.shapeFlag&4?ts(n.component):n.el,a=s?null:i,{i:l,r:u}=e,c=t&&t.r,f=l.refs===Ve?l.refs={}:l.refs,h=l.setupState,g=Pe(h),_=h===Ve?()=>!1:b=>Ue(g,b);if(c!=null&&c!==u&&(Ze(c)?(f[c]=null,_(c)&&(h[c]=null)):ct(c)&&(c.value=null)),Ee(u))Gi(u,l,12,[a,f]);else{const b=Ze(u),w=ct(u);if(b||w){const T=()=>{if(e.f){const v=b?_(u)?h[u]:f[u]:u.value;s?Ce(v)&&to(v,i):Ce(v)?v.includes(i)||v.push(i):b?(f[u]=[i],_(u)&&(h[u]=f[u])):(u.value=[i],e.k&&(f[e.k]=u.value))}else b?(f[u]=a,_(u)&&(h[u]=a)):w&&(u.value=a,e.k&&(f[e.k]=a))};a?(T.id=-1,vt(T,r)):T()}}}jn().requestIdleCallback;jn().cancelIdleCallback;const Di=e=>!!e.type.__asyncLoader,Ah=e=>e.type.__isKeepAlive;function Zw(e,t){Oh(e,"a",t)}function Xw(e,t){Oh(e,"da",t)}function Oh(e,t,r=mt){const n=e.__wdc||(e.__wdc=()=>{let s=r;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(Yn(t,n,r),r){let s=r.parent;for(;s&&s.parent;)Ah(s.parent.vnode)&&Yw(n,t,r,s),s=s.parent}}function Yw(e,t,r,n){const s=Yn(t,e,n,!0);Rh(()=>{to(n[t],s)},r)}function Yn(e,t,r=mt,n=!1){if(r){const s=r[e]||(r[e]=[]),i=t.__weh||(t.__weh=(...a)=>{Tr();const l=ji(r),u=er(t,r,e,a);return l(),Cr(),u});return n?s.unshift(i):s.push(i),i}}const ur=e=>(t,r=mt)=>{(!Fi||e==="sp")&&Yn(e,(...n)=>t(...n),r)},Jw=ur("bm"),ho=ur("m"),ev=ur("bu"),tv=ur("u"),rv=ur("bum"),Rh=ur("um"),iv=ur("sp"),nv=ur("rtg"),sv=ur("rtc");function av(e,t=mt){Yn("ec",e,t)}const ov=Symbol.for("v-ndc");function lv(e,t,r,n){let s;const i=r,a=Ce(e);if(a||Ze(e)){const l=a&&ai(e);let u=!1;l&&(u=!Ot(e),e=Zn(e)),s=new Array(e.length);for(let c=0,f=e.length;c<f;c++)s[c]=t(u?dt(e[c]):e[c],c,void 0,i)}else if(typeof e=="number"){s=new Array(e);for(let l=0;l<e;l++)s[l]=t(l+1,l,void 0,i)}else if(je(e))if(e[Symbol.iterator])s=Array.from(e,(l,u)=>t(l,u,void 0,i));else{const l=Object.keys(e);s=new Array(l.length);for(let u=0,c=l.length;u<c;u++){const f=l[u];s[u]=t(e[f],f,u,i)}}else s=[];return s}const Ra=e=>e?tm(e)?ts(e):Ra(e.parent):null,Ni=gt(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Ra(e.parent),$root:e=>Ra(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Bh(e),$forceUpdate:e=>e.f||(e.f=()=>{po(e.update)}),$nextTick:e=>e.n||(e.n=qw.bind(e.proxy)),$watch:e=>zv.bind(e)}),Ts=(e,t)=>e!==Ve&&!e.__isScriptSetup&&Ue(e,t),uv={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:r,setupState:n,data:s,props:i,accessCache:a,type:l,appContext:u}=e;let c;if(t[0]!=="$"){const _=a[t];if(_!==void 0)switch(_){case 1:return n[t];case 2:return s[t];case 4:return r[t];case 3:return i[t]}else{if(Ts(n,t))return a[t]=1,n[t];if(s!==Ve&&Ue(s,t))return a[t]=2,s[t];if((c=e.propsOptions[0])&&Ue(c,t))return a[t]=3,i[t];if(r!==Ve&&Ue(r,t))return a[t]=4,r[t];Ma&&(a[t]=0)}}const f=Ni[t];let h,g;if(f)return t==="$attrs"&&ut(e.attrs,"get",""),f(e);if((h=l.__cssModules)&&(h=h[t]))return h;if(r!==Ve&&Ue(r,t))return a[t]=4,r[t];if(g=u.config.globalProperties,Ue(g,t))return g[t]},set({_:e},t,r){const{data:n,setupState:s,ctx:i}=e;return Ts(s,t)?(s[t]=r,!0):n!==Ve&&Ue(n,t)?(n[t]=r,!0):Ue(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=r,!0)},has({_:{data:e,setupState:t,accessCache:r,ctx:n,appContext:s,propsOptions:i}},a){let l;return!!r[a]||e!==Ve&&Ue(e,a)||Ts(t,a)||(l=i[0])&&Ue(l,a)||Ue(n,a)||Ue(Ni,a)||Ue(s.config.globalProperties,a)},defineProperty(e,t,r){return r.get!=null?e._.accessCache[t]=0:Ue(r,"value")&&this.set(e,t,r.value,null),Reflect.defineProperty(e,t,r)}};function Zu(e){return Ce(e)?e.reduce((t,r)=>(t[r]=null,t),{}):e}let Ma=!0;function dv(e){const t=Bh(e),r=e.proxy,n=e.ctx;Ma=!1,t.beforeCreate&&Xu(t.beforeCreate,e,"bc");const{data:s,computed:i,methods:a,watch:l,provide:u,inject:c,created:f,beforeMount:h,mounted:g,beforeUpdate:_,updated:b,activated:w,deactivated:T,beforeDestroy:v,beforeUnmount:$,destroyed:k,unmounted:x,render:C,renderTracked:z,renderTriggered:O,errorCaptured:B,serverPrefetch:V,expose:X,inheritAttrs:ue,components:ge,directives:ae,filters:he}=t;if(c&&cv(c,n,null),a)for(const le in a){const de=a[le];Ee(de)&&(n[le]=de.bind(r))}if(s){const le=s.call(r,r);je(le)&&(e.data=lo(le))}if(Ma=!0,i)for(const le in i){const de=i[le],ee=Ee(de)?de.bind(r,r):Ee(de.get)?de.get.bind(r,r):Yt,Ae=!Ee(de)&&Ee(de.set)?de.set.bind(r):Yt,N=Jv({get:ee,set:Ae});Object.defineProperty(n,le,{enumerable:!0,configurable:!0,get:()=>N.value,set:q=>N.value=q})}if(l)for(const le in l)Mh(l[le],n,r,le);if(u){const le=Ee(u)?u.call(r):u;Reflect.ownKeys(le).forEach(de=>{yv(de,le[de])})}f&&Xu(f,e,"c");function Q(le,de){Ce(de)?de.forEach(ee=>le(ee.bind(r))):de&&le(de.bind(r))}if(Q(Jw,h),Q(ho,g),Q(ev,_),Q(tv,b),Q(Zw,w),Q(Xw,T),Q(av,B),Q(sv,z),Q(nv,O),Q(rv,$),Q(Rh,x),Q(iv,V),Ce(X))if(X.length){const le=e.exposed||(e.exposed={});X.forEach(de=>{Object.defineProperty(le,de,{get:()=>r[de],set:ee=>r[de]=ee})})}else e.exposed||(e.exposed={});C&&e.render===Yt&&(e.render=C),ue!=null&&(e.inheritAttrs=ue),ge&&(e.components=ge),ae&&(e.directives=ae),V&&zh(e)}function cv(e,t,r=Yt){Ce(e)&&(e=Ba(e));for(const n in e){const s=e[n];let i;je(s)?"default"in s?i=Tn(s.from||n,s.default,!0):i=Tn(s.from||n):i=Tn(s),ct(i)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):t[n]=i}}function Xu(e,t,r){er(Ce(e)?e.map(n=>n.bind(t.proxy)):e.bind(t.proxy),t,r)}function Mh(e,t,r,n){let s=n.includes(".")?Qh(r,n):()=>r[n];if(Ze(e)){const i=t[e];Ee(i)&&ks(s,i)}else if(Ee(e))ks(s,e.bind(r));else if(je(e))if(Ce(e))e.forEach(i=>Mh(i,t,r,n));else{const i=Ee(e.handler)?e.handler.bind(r):t[e.handler];Ee(i)&&ks(s,i,e)}}function Bh(e){const t=e.type,{mixins:r,extends:n}=t,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=e.appContext,l=i.get(t);let u;return l?u=l:!s.length&&!r&&!n?u=t:(u={},s.length&&s.forEach(c=>Mn(u,c,a,!0)),Mn(u,t,a)),je(t)&&i.set(t,u),u}function Mn(e,t,r,n=!1){const{mixins:s,extends:i}=t;i&&Mn(e,i,r,!0),s&&s.forEach(a=>Mn(e,a,r,!0));for(const a in t)if(!(n&&a==="expose")){const l=pv[a]||r&&r[a];e[a]=l?l(e[a],t[a]):t[a]}return e}const pv={data:Yu,props:Ju,emits:Ju,methods:Ii,computed:Ii,beforeCreate:ft,created:ft,beforeMount:ft,mounted:ft,beforeUpdate:ft,updated:ft,beforeDestroy:ft,beforeUnmount:ft,destroyed:ft,unmounted:ft,activated:ft,deactivated:ft,errorCaptured:ft,serverPrefetch:ft,components:Ii,directives:Ii,watch:hv,provide:Yu,inject:fv};function Yu(e,t){return t?e?function(){return gt(Ee(e)?e.call(this,this):e,Ee(t)?t.call(this,this):t)}:t:e}function fv(e,t){return Ii(Ba(e),Ba(t))}function Ba(e){if(Ce(e)){const t={};for(let r=0;r<e.length;r++)t[e[r]]=e[r];return t}return e}function ft(e,t){return e?[...new Set([].concat(e,t))]:t}function Ii(e,t){return e?gt(Object.create(null),e,t):t}function Ju(e,t){return e?Ce(e)&&Ce(t)?[...new Set([...e,...t])]:gt(Object.create(null),Zu(e),Zu(t??{})):t}function hv(e,t){if(!e)return t;if(!t)return e;const r=gt(Object.create(null),e);for(const n in t)r[n]=ft(e[n],t[n]);return r}function Dh(){return{app:null,config:{isNativeTag:tw,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let mv=0;function gv(e,t){return function(n,s=null){Ee(n)||(n=gt({},n)),s!=null&&!je(s)&&(s=null);const i=Dh(),a=new WeakSet,l=[];let u=!1;const c=i.app={_uid:mv++,_component:n,_props:s,_container:null,_context:i,_instance:null,version:e$,get config(){return i.config},set config(f){},use(f,...h){return a.has(f)||(f&&Ee(f.install)?(a.add(f),f.install(c,...h)):Ee(f)&&(a.add(f),f(c,...h))),c},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),c},component(f,h){return h?(i.components[f]=h,c):i.components[f]},directive(f,h){return h?(i.directives[f]=h,c):i.directives[f]},mount(f,h,g){if(!u){const _=c._ceVNode||Jt(n,s);return _.appContext=i,g===!0?g="svg":g===!1&&(g=void 0),e(_,f,g),u=!0,c._container=f,f.__vue_app__=c,ts(_.component)}},onUnmount(f){l.push(f)},unmount(){u&&(er(l,c._instance,16),e(null,c._container),delete c._container.__vue_app__)},provide(f,h){return i.provides[f]=h,c},runWithContext(f){const h=li;li=c;try{return f()}finally{li=h}}};return c}}let li=null;function yv(e,t){if(mt){let r=mt.provides;const n=mt.parent&&mt.parent.provides;n===r&&(r=mt.provides=Object.create(n)),r[e]=t}}function Tn(e,t,r=!1){const n=mt||At;if(n||li){const s=li?li._context.provides:n?n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return r&&Ee(t)?t.call(n&&n.proxy):t}}const Nh={},Ph=()=>Object.create(Nh),Uh=e=>Object.getPrototypeOf(e)===Nh;function _v(e,t,r,n=!1){const s={},i=Ph();e.propsDefaults=Object.create(null),Wh(e,t,s,i);for(const a in e.propsOptions[0])a in s||(s[a]=void 0);r?e.props=n?s:Ow(s):e.type.props?e.props=s:e.props=i,e.attrs=i}function bv(e,t,r,n){const{props:s,attrs:i,vnode:{patchFlag:a}}=e,l=Pe(s),[u]=e.propsOptions;let c=!1;if((n||a>0)&&!(a&16)){if(a&8){const f=e.vnode.dynamicProps;for(let h=0;h<f.length;h++){let g=f[h];if(Jn(e.emitsOptions,g))continue;const _=t[g];if(u)if(Ue(i,g))_!==i[g]&&(i[g]=_,c=!0);else{const b=$r(g);s[b]=Da(u,l,b,_,e,!1)}else _!==i[g]&&(i[g]=_,c=!0)}}}else{Wh(e,t,s,i)&&(c=!0);let f;for(const h in l)(!t||!Ue(t,h)&&((f=Hr(h))===h||!Ue(t,f)))&&(u?r&&(r[h]!==void 0||r[f]!==void 0)&&(s[h]=Da(u,l,h,void 0,e,!0)):delete s[h]);if(i!==l)for(const h in i)(!t||!Ue(t,h))&&(delete i[h],c=!0)}c&&or(e.attrs,"set","")}function Wh(e,t,r,n){const[s,i]=e.propsOptions;let a=!1,l;if(t)for(let u in t){if(Ri(u))continue;const c=t[u];let f;s&&Ue(s,f=$r(u))?!i||!i.includes(f)?r[f]=c:(l||(l={}))[f]=c:Jn(e.emitsOptions,u)||(!(u in n)||c!==n[u])&&(n[u]=c,a=!0)}if(i){const u=Pe(r),c=l||Ve;for(let f=0;f<i.length;f++){const h=i[f];r[h]=Da(s,u,h,c[h],e,!Ue(c,h))}}return a}function Da(e,t,r,n,s,i){const a=e[r];if(a!=null){const l=Ue(a,"default");if(l&&n===void 0){const u=a.default;if(a.type!==Function&&!a.skipFactory&&Ee(u)){const{propsDefaults:c}=s;if(r in c)n=c[r];else{const f=ji(s);n=c[r]=u.call(null,t),f()}}else n=u;s.ce&&s.ce._setProp(r,n)}a[0]&&(i&&!l?n=!1:a[1]&&(n===""||n===Hr(r))&&(n=!0))}return n}const wv=new WeakMap;function Lh(e,t,r=!1){const n=r?wv:t.propsCache,s=n.get(e);if(s)return s;const i=e.props,a={},l=[];let u=!1;if(!Ee(e)){const f=h=>{u=!0;const[g,_]=Lh(h,t,!0);gt(a,g),_&&l.push(..._)};!r&&t.mixins.length&&t.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}if(!i&&!u)return je(e)&&n.set(e,ii),ii;if(Ce(i))for(let f=0;f<i.length;f++){const h=$r(i[f]);ed(h)&&(a[h]=Ve)}else if(i)for(const f in i){const h=$r(f);if(ed(h)){const g=i[f],_=a[h]=Ce(g)||Ee(g)?{type:g}:gt({},g),b=_.type;let w=!1,T=!0;if(Ce(b))for(let v=0;v<b.length;++v){const $=b[v],k=Ee($)&&$.name;if(k==="Boolean"){w=!0;break}else k==="String"&&(T=!1)}else w=Ee(b)&&b.name==="Boolean";_[0]=w,_[1]=T,(w||Ue(_,"default"))&&l.push(h)}}const c=[a,l];return je(e)&&n.set(e,c),c}function ed(e){return e[0]!=="$"&&!Ri(e)}const Vh=e=>e[0]==="_"||e==="$stable",mo=e=>Ce(e)?e.map(Xt):[Xt(e)],vv=(e,t,r)=>{if(t._n)return t;const n=Gw((...s)=>mo(t(...s)),r);return n._c=!1,n},qh=(e,t,r)=>{const n=e._ctx;for(const s in e){if(Vh(s))continue;const i=e[s];if(Ee(i))t[s]=vv(s,i,n);else if(i!=null){const a=mo(i);t[s]=()=>a}}},Fh=(e,t)=>{const r=mo(t);e.slots.default=()=>r},Hh=(e,t,r)=>{for(const n in t)(r||n!=="_")&&(e[n]=t[n])},$v=(e,t,r)=>{const n=e.slots=Ph();if(e.vnode.shapeFlag&32){const s=t._;s?(Hh(n,t,r),r&&sh(n,"_",s,!0)):qh(t,n)}else t&&Fh(e,t)},xv=(e,t,r)=>{const{vnode:n,slots:s}=e;let i=!0,a=Ve;if(n.shapeFlag&32){const l=t._;l?r&&l===1?i=!1:Hh(s,t,r):(i=!t.$stable,qh(t,s)),a=t}else t&&(Fh(e,t),a={default:1});if(i)for(const l in s)!Vh(l)&&a[l]==null&&delete s[l]},vt=Nv;function Sv(e){return Tv(e)}function Tv(e,t){const r=jn();r.__VUE__=!0;const{insert:n,remove:s,patchProp:i,createElement:a,createText:l,createComment:u,setText:c,setElementText:f,parentNode:h,nextSibling:g,setScopeId:_=Yt,insertStaticContent:b}=e,w=(E,A,P,j=null,G=null,F=null,te=void 0,Y=null,J=!!A.dynamicChildren)=>{if(E===A)return;E&&!_i(E,A)&&(j=it(E),q(E,G,F,!0),E=null),A.patchFlag===-2&&(J=!1,A.dynamicChildren=null);const{type:Z,ref:me,shapeFlag:ie}=A;switch(Z){case es:T(E,A,P,j);break;case Lr:v(E,A,P,j);break;case Is:E==null&&$(A,P,j,te);break;case Pt:ge(E,A,P,j,G,F,te,Y,J);break;default:ie&1?C(E,A,P,j,G,F,te,Y,J):ie&6?ae(E,A,P,j,G,F,te,Y,J):(ie&64||ie&128)&&Z.process(E,A,P,j,G,F,te,Y,J,qe)}me!=null&&G&&Rn(me,E&&E.ref,F,A||E,!A)},T=(E,A,P,j)=>{if(E==null)n(A.el=l(A.children),P,j);else{const G=A.el=E.el;A.children!==E.children&&c(G,A.children)}},v=(E,A,P,j)=>{E==null?n(A.el=u(A.children||""),P,j):A.el=E.el},$=(E,A,P,j)=>{[E.el,E.anchor]=b(E.children,A,P,j,E.el,E.anchor)},k=({el:E,anchor:A},P,j)=>{let G;for(;E&&E!==A;)G=g(E),n(E,P,j),E=G;n(A,P,j)},x=({el:E,anchor:A})=>{let P;for(;E&&E!==A;)P=g(E),s(E),E=P;s(A)},C=(E,A,P,j,G,F,te,Y,J)=>{A.type==="svg"?te="svg":A.type==="math"&&(te="mathml"),E==null?z(A,P,j,G,F,te,Y,J):V(E,A,G,F,te,Y,J)},z=(E,A,P,j,G,F,te,Y)=>{let J,Z;const{props:me,shapeFlag:ie,transition:pe,dirs:we}=E;if(J=E.el=a(E.type,F,me&&me.is,me),ie&8?f(J,E.children):ie&16&&B(E.children,J,null,j,G,Cs(E,F),te,Y),we&&Ir(E,null,j,"created"),O(J,E,E.scopeId,te,j),me){for(const ye in me)ye!=="value"&&!Ri(ye)&&i(J,ye,null,me[ye],F,j);"value"in me&&i(J,"value",null,me.value,F),(Z=me.onVnodeBeforeMount)&&Kt(Z,j,E)}we&&Ir(E,null,j,"beforeMount");const Ie=Cv(G,pe);Ie&&pe.beforeEnter(J),n(J,A,P),((Z=me&&me.onVnodeMounted)||Ie||we)&&vt(()=>{Z&&Kt(Z,j,E),Ie&&pe.enter(J),we&&Ir(E,null,j,"mounted")},G)},O=(E,A,P,j,G)=>{if(P&&_(E,P),j)for(let F=0;F<j.length;F++)_(E,j[F]);if(G){let F=G.subTree;if(A===F||Xh(F.type)&&(F.ssContent===A||F.ssFallback===A)){const te=G.vnode;O(E,te,te.scopeId,te.slotScopeIds,G.parent)}}},B=(E,A,P,j,G,F,te,Y,J=0)=>{for(let Z=J;Z<E.length;Z++){const me=E[Z]=Y?wr(E[Z]):Xt(E[Z]);w(null,me,A,P,j,G,F,te,Y)}},V=(E,A,P,j,G,F,te)=>{const Y=A.el=E.el;let{patchFlag:J,dynamicChildren:Z,dirs:me}=A;J|=E.patchFlag&16;const ie=E.props||Ve,pe=A.props||Ve;let we;if(P&&Er(P,!1),(we=pe.onVnodeBeforeUpdate)&&Kt(we,P,A,E),me&&Ir(A,E,P,"beforeUpdate"),P&&Er(P,!0),(ie.innerHTML&&pe.innerHTML==null||ie.textContent&&pe.textContent==null)&&f(Y,""),Z?X(E.dynamicChildren,Z,Y,P,j,Cs(A,G),F):te||de(E,A,Y,null,P,j,Cs(A,G),F,!1),J>0){if(J&16)ue(Y,ie,pe,P,G);else if(J&2&&ie.class!==pe.class&&i(Y,"class",null,pe.class,G),J&4&&i(Y,"style",ie.style,pe.style,G),J&8){const Ie=A.dynamicProps;for(let ye=0;ye<Ie.length;ye++){const Me=Ie[ye],st=ie[Me],tt=pe[Me];(tt!==st||Me==="value")&&i(Y,Me,st,tt,G,P)}}J&1&&E.children!==A.children&&f(Y,A.children)}else!te&&Z==null&&ue(Y,ie,pe,P,G);((we=pe.onVnodeUpdated)||me)&&vt(()=>{we&&Kt(we,P,A,E),me&&Ir(A,E,P,"updated")},j)},X=(E,A,P,j,G,F,te)=>{for(let Y=0;Y<A.length;Y++){const J=E[Y],Z=A[Y],me=J.el&&(J.type===Pt||!_i(J,Z)||J.shapeFlag&70)?h(J.el):P;w(J,Z,me,null,j,G,F,te,!0)}},ue=(E,A,P,j,G)=>{if(A!==P){if(A!==Ve)for(const F in A)!Ri(F)&&!(F in P)&&i(E,F,A[F],null,G,j);for(const F in P){if(Ri(F))continue;const te=P[F],Y=A[F];te!==Y&&F!=="value"&&i(E,F,Y,te,G,j)}"value"in P&&i(E,"value",A.value,P.value,G)}},ge=(E,A,P,j,G,F,te,Y,J)=>{const Z=A.el=E?E.el:l(""),me=A.anchor=E?E.anchor:l("");let{patchFlag:ie,dynamicChildren:pe,slotScopeIds:we}=A;we&&(Y=Y?Y.concat(we):we),E==null?(n(Z,P,j),n(me,P,j),B(A.children||[],P,me,G,F,te,Y,J)):ie>0&&ie&64&&pe&&E.dynamicChildren?(X(E.dynamicChildren,pe,P,G,F,te,Y),(A.key!=null||G&&A===G.subTree)&&Gh(E,A,!0)):de(E,A,P,me,G,F,te,Y,J)},ae=(E,A,P,j,G,F,te,Y,J)=>{A.slotScopeIds=Y,E==null?A.shapeFlag&512?G.ctx.activate(A,P,j,te,J):he(A,P,j,G,F,te,J):fe(E,A,J)},he=(E,A,P,j,G,F,te)=>{const Y=E.component=jv(E,j,G);if(Ah(E)&&(Y.ctx.renderer=qe),Kv(Y,!1,te),Y.asyncDep){if(G&&G.registerDep(Y,Q,te),!E.el){const J=Y.subTree=Jt(Lr);v(null,J,A,P)}}else Q(Y,E,A,P,G,F,te)},fe=(E,A,P)=>{const j=A.component=E.component;if(Bv(E,A,P))if(j.asyncDep&&!j.asyncResolved){le(j,A,P);return}else j.next=A,j.update();else A.el=E.el,j.vnode=A},Q=(E,A,P,j,G,F,te)=>{const Y=()=>{if(E.isMounted){let{next:ie,bu:pe,u:we,parent:Ie,vnode:ye}=E;{const at=jh(E);if(at){ie&&(ie.el=ye.el,le(E,ie,te)),at.asyncDep.then(()=>{E.isUnmounted||Y()});return}}let Me=ie,st;Er(E,!1),ie?(ie.el=ye.el,le(E,ie,te)):ie=ye,pe&&Sn(pe),(st=ie.props&&ie.props.onVnodeBeforeUpdate)&&Kt(st,Ie,ie,ye),Er(E,!0);const tt=rd(E),Xe=E.subTree;E.subTree=tt,w(Xe,tt,h(Xe.el),it(Xe),E,G,F),ie.el=tt.el,Me===null&&Dv(E,tt.el),we&&vt(we,G),(st=ie.props&&ie.props.onVnodeUpdated)&&vt(()=>Kt(st,Ie,ie,ye),G)}else{let ie;const{el:pe,props:we}=A,{bm:Ie,m:ye,parent:Me,root:st,type:tt}=E,Xe=Di(A);Er(E,!1),Ie&&Sn(Ie),!Xe&&(ie=we&&we.onVnodeBeforeMount)&&Kt(ie,Me,A),Er(E,!0);{st.ce&&st.ce._injectChildStyle(tt);const at=E.subTree=rd(E);w(null,at,P,j,E,G,F),A.el=at.el}if(ye&&vt(ye,G),!Xe&&(ie=we&&we.onVnodeMounted)){const at=A;vt(()=>Kt(ie,Me,at),G)}(A.shapeFlag&256||Me&&Di(Me.vnode)&&Me.vnode.shapeFlag&256)&&E.a&&vt(E.a,G),E.isMounted=!0,A=P=j=null}};E.scope.on();const J=E.effect=new uh(Y);E.scope.off();const Z=E.update=J.run.bind(J),me=E.job=J.runIfDirty.bind(J);me.i=E,me.id=E.uid,J.scheduler=()=>po(me),Er(E,!0),Z()},le=(E,A,P)=>{A.component=E;const j=E.vnode.props;E.vnode=A,E.next=null,bv(E,A.props,j,P),xv(E,A.children,P),Tr(),Qu(E),Cr()},de=(E,A,P,j,G,F,te,Y,J=!1)=>{const Z=E&&E.children,me=E?E.shapeFlag:0,ie=A.children,{patchFlag:pe,shapeFlag:we}=A;if(pe>0){if(pe&128){Ae(Z,ie,P,j,G,F,te,Y,J);return}else if(pe&256){ee(Z,ie,P,j,G,F,te,Y,J);return}}we&8?(me&16&&ze(Z,G,F),ie!==Z&&f(P,ie)):me&16?we&16?Ae(Z,ie,P,j,G,F,te,Y,J):ze(Z,G,F,!0):(me&8&&f(P,""),we&16&&B(ie,P,j,G,F,te,Y,J))},ee=(E,A,P,j,G,F,te,Y,J)=>{E=E||ii,A=A||ii;const Z=E.length,me=A.length,ie=Math.min(Z,me);let pe;for(pe=0;pe<ie;pe++){const we=A[pe]=J?wr(A[pe]):Xt(A[pe]);w(E[pe],we,P,null,G,F,te,Y,J)}Z>me?ze(E,G,F,!0,!1,ie):B(A,P,j,G,F,te,Y,J,ie)},Ae=(E,A,P,j,G,F,te,Y,J)=>{let Z=0;const me=A.length;let ie=E.length-1,pe=me-1;for(;Z<=ie&&Z<=pe;){const we=E[Z],Ie=A[Z]=J?wr(A[Z]):Xt(A[Z]);if(_i(we,Ie))w(we,Ie,P,null,G,F,te,Y,J);else break;Z++}for(;Z<=ie&&Z<=pe;){const we=E[ie],Ie=A[pe]=J?wr(A[pe]):Xt(A[pe]);if(_i(we,Ie))w(we,Ie,P,null,G,F,te,Y,J);else break;ie--,pe--}if(Z>ie){if(Z<=pe){const we=pe+1,Ie=we<me?A[we].el:j;for(;Z<=pe;)w(null,A[Z]=J?wr(A[Z]):Xt(A[Z]),P,Ie,G,F,te,Y,J),Z++}}else if(Z>pe)for(;Z<=ie;)q(E[Z],G,F,!0),Z++;else{const we=Z,Ie=Z,ye=new Map;for(Z=Ie;Z<=pe;Z++){const ot=A[Z]=J?wr(A[Z]):Xt(A[Z]);ot.key!=null&&ye.set(ot.key,Z)}let Me,st=0;const tt=pe-Ie+1;let Xe=!1,at=0;const cr=new Array(tt);for(Z=0;Z<tt;Z++)cr[Z]=0;for(Z=we;Z<=ie;Z++){const ot=E[Z];if(st>=tt){q(ot,G,F,!0);continue}let _t;if(ot.key!=null)_t=ye.get(ot.key);else for(Me=Ie;Me<=pe;Me++)if(cr[Me-Ie]===0&&_i(ot,A[Me])){_t=Me;break}_t===void 0?q(ot,G,F,!0):(cr[_t-Ie]=Z+1,_t>=at?at=_t:Xe=!0,w(ot,A[_t],P,null,G,F,te,Y,J),st++)}const Ft=Xe?kv(cr):ii;for(Me=Ft.length-1,Z=tt-1;Z>=0;Z--){const ot=Ie+Z,_t=A[ot],pi=ot+1<me?A[ot+1].el:j;cr[Z]===0?w(null,_t,P,pi,G,F,te,Y,J):Xe&&(Me<0||Z!==Ft[Me]?N(_t,P,pi,2):Me--)}}},N=(E,A,P,j,G=null)=>{const{el:F,type:te,transition:Y,children:J,shapeFlag:Z}=E;if(Z&6){N(E.component.subTree,A,P,j);return}if(Z&128){E.suspense.move(A,P,j);return}if(Z&64){te.move(E,A,P,qe);return}if(te===Pt){n(F,A,P);for(let ie=0;ie<J.length;ie++)N(J[ie],A,P,j);n(E.anchor,A,P);return}if(te===Is){k(E,A,P);return}if(j!==2&&Z&1&&Y)if(j===0)Y.beforeEnter(F),n(F,A,P),vt(()=>Y.enter(F),G);else{const{leave:ie,delayLeave:pe,afterLeave:we}=Y,Ie=()=>n(F,A,P),ye=()=>{ie(F,()=>{Ie(),we&&we()})};pe?pe(F,Ie,ye):ye()}else n(F,A,P)},q=(E,A,P,j=!1,G=!1)=>{const{type:F,props:te,ref:Y,children:J,dynamicChildren:Z,shapeFlag:me,patchFlag:ie,dirs:pe,cacheIndex:we}=E;if(ie===-2&&(G=!1),Y!=null&&Rn(Y,null,P,E,!0),we!=null&&(A.renderCache[we]=void 0),me&256){A.ctx.deactivate(E);return}const Ie=me&1&&pe,ye=!Di(E);let Me;if(ye&&(Me=te&&te.onVnodeBeforeUnmount)&&Kt(Me,A,E),me&6)W(E.component,P,j);else{if(me&128){E.suspense.unmount(P,j);return}Ie&&Ir(E,null,A,"beforeUnmount"),me&64?E.type.remove(E,A,P,qe,j):Z&&!Z.hasOnce&&(F!==Pt||ie>0&&ie&64)?ze(Z,A,P,!1,!0):(F===Pt&&ie&384||!G&&me&16)&&ze(J,A,P),j&&ke(E)}(ye&&(Me=te&&te.onVnodeUnmounted)||Ie)&&vt(()=>{Me&&Kt(Me,A,E),Ie&&Ir(E,null,A,"unmounted")},P)},ke=E=>{const{type:A,el:P,anchor:j,transition:G}=E;if(A===Pt){We(P,j);return}if(A===Is){x(E);return}const F=()=>{s(P),G&&!G.persisted&&G.afterLeave&&G.afterLeave()};if(E.shapeFlag&1&&G&&!G.persisted){const{leave:te,delayLeave:Y}=G,J=()=>te(P,F);Y?Y(E.el,F,J):J()}else F()},We=(E,A)=>{let P;for(;E!==A;)P=g(E),s(E),E=P;s(A)},W=(E,A,P)=>{const{bum:j,scope:G,job:F,subTree:te,um:Y,m:J,a:Z}=E;td(J),td(Z),j&&Sn(j),G.stop(),F&&(F.flags|=8,q(te,E,A,P)),Y&&vt(Y,A),vt(()=>{E.isUnmounted=!0},A),A&&A.pendingBranch&&!A.isUnmounted&&E.asyncDep&&!E.asyncResolved&&E.suspenseId===A.pendingId&&(A.deps--,A.deps===0&&A.resolve())},ze=(E,A,P,j=!1,G=!1,F=0)=>{for(let te=F;te<E.length;te++)q(E[te],A,P,j,G)},it=E=>{if(E.shapeFlag&6)return it(E.component.subTree);if(E.shapeFlag&128)return E.suspense.next();const A=g(E.anchor||E.el),P=A&&A[Kw];return P?g(P):A};let et=!1;const qt=(E,A,P)=>{E==null?A._vnode&&q(A._vnode,null,null,!0):w(A._vnode||null,E,A,null,null,null,P),A._vnode=E,et||(et=!0,Qu(),kh(),et=!1)},qe={p:w,um:q,m:N,r:ke,mt:he,mc:B,pc:de,pbc:X,n:it,o:e};return{render:qt,hydrate:void 0,createApp:gv(qt)}}function Cs({type:e,props:t},r){return r==="svg"&&e==="foreignObject"||r==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:r}function Er({effect:e,job:t},r){r?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Cv(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Gh(e,t,r=!1){const n=e.children,s=t.children;if(Ce(n)&&Ce(s))for(let i=0;i<n.length;i++){const a=n[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=wr(s[i]),l.el=a.el),!r&&l.patchFlag!==-2&&Gh(a,l)),l.type===es&&(l.el=a.el)}}function kv(e){const t=e.slice(),r=[0];let n,s,i,a,l;const u=e.length;for(n=0;n<u;n++){const c=e[n];if(c!==0){if(s=r[r.length-1],e[s]<c){t[n]=s,r.push(n);continue}for(i=0,a=r.length-1;i<a;)l=i+a>>1,e[r[l]]<c?i=l+1:a=l;c<e[r[i]]&&(i>0&&(t[n]=r[i-1]),r[i]=n)}}for(i=r.length,a=r[i-1];i-- >0;)r[i]=a,a=t[a];return r}function jh(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:jh(t)}function td(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const Iv=Symbol.for("v-scx"),Ev=()=>Tn(Iv);function ks(e,t,r){return Kh(e,t,r)}function Kh(e,t,r=Ve){const{immediate:n,deep:s,flush:i,once:a}=r,l=gt({},r),u=t&&n||!t&&i!=="post";let c;if(Fi){if(i==="sync"){const _=Ev();c=_.__watcherHandles||(_.__watcherHandles=[])}else if(!u){const _=()=>{};return _.stop=Yt,_.resume=Yt,_.pause=Yt,_}}const f=mt;l.call=(_,b,w)=>er(_,f,b,w);let h=!1;i==="post"?l.scheduler=_=>{vt(_,f&&f.suspense)}:i!=="sync"&&(h=!0,l.scheduler=(_,b)=>{b?_():po(_)}),l.augmentJob=_=>{t&&(_.flags|=4),h&&(_.flags|=2,f&&(_.id=f.uid,_.i=f))};const g=Lw(e,t,l);return Fi&&(c?c.push(g):u&&g()),g}function zv(e,t,r){const n=this.proxy,s=Ze(e)?e.includes(".")?Qh(n,e):()=>n[e]:e.bind(n,n);let i;Ee(t)?i=t:(i=t.handler,r=t);const a=ji(this),l=Kh(s,i.bind(n),r);return a(),l}function Qh(e,t){const r=t.split(".");return()=>{let n=e;for(let s=0;s<r.length&&n;s++)n=n[r[s]];return n}}const Av=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${$r(t)}Modifiers`]||e[`${Hr(t)}Modifiers`];function Ov(e,t,...r){if(e.isUnmounted)return;const n=e.vnode.props||Ve;let s=r;const i=t.startsWith("update:"),a=i&&Av(n,t.slice(7));a&&(a.trim&&(s=r.map(f=>Ze(f)?f.trim():f)),a.number&&(s=r.map(ka)));let l,u=n[l=ws(t)]||n[l=ws($r(t))];!u&&i&&(u=n[l=ws(Hr(t))]),u&&er(u,e,6,s);const c=n[l+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,er(c,e,6,s)}}function Zh(e,t,r=!1){const n=t.emitsCache,s=n.get(e);if(s!==void 0)return s;const i=e.emits;let a={},l=!1;if(!Ee(e)){const u=c=>{const f=Zh(c,t,!0);f&&(l=!0,gt(a,f))};!r&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}return!i&&!l?(je(e)&&n.set(e,null),null):(Ce(i)?i.forEach(u=>a[u]=null):gt(a,i),je(e)&&n.set(e,a),a)}function Jn(e,t){return!e||!Fn(t)?!1:(t=t.slice(2).replace(/Once$/,""),Ue(e,t[0].toLowerCase()+t.slice(1))||Ue(e,Hr(t))||Ue(e,t))}function rd(e){const{type:t,vnode:r,proxy:n,withProxy:s,propsOptions:[i],slots:a,attrs:l,emit:u,render:c,renderCache:f,props:h,data:g,setupState:_,ctx:b,inheritAttrs:w}=e,T=On(e);let v,$;try{if(r.shapeFlag&4){const x=s||n,C=x;v=Xt(c.call(C,x,f,h,_,g,b)),$=l}else{const x=t;v=Xt(x.length>1?x(h,{attrs:l,slots:a,emit:u}):x(h,null)),$=t.props?l:Rv(l)}}catch(x){Pi.length=0,Xn(x,e,1),v=Jt(Lr)}let k=v;if($&&w!==!1){const x=Object.keys($),{shapeFlag:C}=k;x.length&&C&7&&(i&&x.some(eo)&&($=Mv($,i)),k=ui(k,$,!1,!0))}return r.dirs&&(k=ui(k,null,!1,!0),k.dirs=k.dirs?k.dirs.concat(r.dirs):r.dirs),r.transition&&fo(k,r.transition),v=k,On(T),v}const Rv=e=>{let t;for(const r in e)(r==="class"||r==="style"||Fn(r))&&((t||(t={}))[r]=e[r]);return t},Mv=(e,t)=>{const r={};for(const n in e)(!eo(n)||!(n.slice(9)in t))&&(r[n]=e[n]);return r};function Bv(e,t,r){const{props:n,children:s,component:i}=e,{props:a,children:l,patchFlag:u}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(r&&u>=0){if(u&1024)return!0;if(u&16)return n?id(n,a,c):!!a;if(u&8){const f=t.dynamicProps;for(let h=0;h<f.length;h++){const g=f[h];if(a[g]!==n[g]&&!Jn(c,g))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:n===a?!1:n?a?id(n,a,c):!0:!!a;return!1}function id(e,t,r){const n=Object.keys(t);if(n.length!==Object.keys(e).length)return!0;for(let s=0;s<n.length;s++){const i=n[s];if(t[i]!==e[i]&&!Jn(r,i))return!0}return!1}function Dv({vnode:e,parent:t},r){for(;t;){const n=t.subTree;if(n.suspense&&n.suspense.activeBranch===e&&(n.el=e.el),n===e)(e=t.vnode).el=r,t=t.parent;else break}}const Xh=e=>e.__isSuspense;function Nv(e,t){t&&t.pendingBranch?Ce(e)?t.effects.push(...e):t.effects.push(e):Hw(e)}const Pt=Symbol.for("v-fgt"),es=Symbol.for("v-txt"),Lr=Symbol.for("v-cmt"),Is=Symbol.for("v-stc"),Pi=[];let Ct=null;function br(e=!1){Pi.push(Ct=e?null:[])}function Pv(){Pi.pop(),Ct=Pi[Pi.length-1]||null}let qi=1;function nd(e,t=!1){qi+=e,e<0&&Ct&&t&&(Ct.hasOnce=!0)}function Yh(e){return e.dynamicChildren=qi>0?Ct||ii:null,Pv(),qi>0&&Ct&&Ct.push(e),e}function Br(e,t,r,n,s,i){return Yh(St(e,t,r,n,s,i,!0))}function Uv(e,t,r,n,s){return Yh(Jt(e,t,r,n,s,!0))}function Jh(e){return e?e.__v_isVNode===!0:!1}function _i(e,t){return e.type===t.type&&e.key===t.key}const em=({key:e})=>e??null,Cn=({ref:e,ref_key:t,ref_for:r})=>(typeof e=="number"&&(e=""+e),e!=null?Ze(e)||ct(e)||Ee(e)?{i:At,r:e,k:t,f:!!r}:e:null);function St(e,t=null,r=null,n=0,s=null,i=e===Pt?0:1,a=!1,l=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&em(t),ref:t&&Cn(t),scopeId:Eh,slotScopeIds:null,children:r,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:n,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:At};return l?(go(u,r),i&128&&e.normalize(u)):r&&(u.shapeFlag|=Ze(r)?8:16),qi>0&&!a&&Ct&&(u.patchFlag>0||i&6)&&u.patchFlag!==32&&Ct.push(u),u}const Jt=Wv;function Wv(e,t=null,r=null,n=0,s=null,i=!1){if((!e||e===ov)&&(e=Lr),Jh(e)){const l=ui(e,t,!0);return r&&go(l,r),qi>0&&!i&&Ct&&(l.shapeFlag&6?Ct[Ct.indexOf(e)]=l:Ct.push(l)),l.patchFlag=-2,l}if(Yv(e)&&(e=e.__vccOpts),t){t=Lv(t);let{class:l,style:u}=t;l&&!Ze(l)&&(t.class=Qn(l)),je(u)&&(co(u)&&!Ce(u)&&(u=gt({},u)),t.style=Kn(u))}const a=Ze(e)?1:Xh(e)?128:Qw(e)?64:je(e)?4:Ee(e)?2:0;return St(e,t,r,n,s,a,i,!0)}function Lv(e){return e?co(e)||Uh(e)?gt({},e):e:null}function ui(e,t,r=!1,n=!1){const{props:s,ref:i,patchFlag:a,children:l,transition:u}=e,c=t?Fv(s||{},t):s,f={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&em(c),ref:t&&t.ref?r&&i?Ce(i)?i.concat(Cn(t)):[i,Cn(t)]:Cn(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Pt?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:u,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&ui(e.ssContent),ssFallback:e.ssFallback&&ui(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return u&&n&&fo(f,u.clone(f)),f}function Vv(e=" ",t=0){return Jt(es,null,e,t)}function qv(e="",t=!1){return t?(br(),Uv(Lr,null,e)):Jt(Lr,null,e)}function Xt(e){return e==null||typeof e=="boolean"?Jt(Lr):Ce(e)?Jt(Pt,null,e.slice()):Jh(e)?wr(e):Jt(es,null,String(e))}function wr(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:ui(e)}function go(e,t){let r=0;const{shapeFlag:n}=e;if(t==null)t=null;else if(Ce(t))r=16;else if(typeof t=="object")if(n&65){const s=t.default;s&&(s._c&&(s._d=!1),go(e,s()),s._c&&(s._d=!0));return}else{r=32;const s=t._;!s&&!Uh(t)?t._ctx=At:s===3&&At&&(At.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else Ee(t)?(t={default:t,_ctx:At},r=32):(t=String(t),n&64?(r=16,t=[Vv(t)]):r=8);e.children=t,e.shapeFlag|=r}function Fv(...e){const t={};for(let r=0;r<e.length;r++){const n=e[r];for(const s in n)if(s==="class")t.class!==n.class&&(t.class=Qn([t.class,n.class]));else if(s==="style")t.style=Kn([t.style,n.style]);else if(Fn(s)){const i=t[s],a=n[s];a&&i!==a&&!(Ce(i)&&i.includes(a))&&(t[s]=i?[].concat(i,a):a)}else s!==""&&(t[s]=n[s])}return t}function Kt(e,t,r,n=null){er(e,t,7,[r,n])}const Hv=Dh();let Gv=0;function jv(e,t,r){const n=e.type,s=(t?t.appContext:e.appContext)||Hv,i={uid:Gv++,vnode:e,type:n,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new pw(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Lh(n,s),emitsOptions:Zh(n,s),emit:null,emitted:null,propsDefaults:Ve,inheritAttrs:n.inheritAttrs,ctx:Ve,data:Ve,props:Ve,attrs:Ve,slots:Ve,refs:Ve,setupState:Ve,setupContext:null,suspense:r,suspenseId:r?r.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Ov.bind(null,i),e.ce&&e.ce(i),i}let mt=null,Bn,Na;{const e=jn(),t=(r,n)=>{let s;return(s=e[r])||(s=e[r]=[]),s.push(n),i=>{s.length>1?s.forEach(a=>a(i)):s[0](i)}};Bn=t("__VUE_INSTANCE_SETTERS__",r=>mt=r),Na=t("__VUE_SSR_SETTERS__",r=>Fi=r)}const ji=e=>{const t=mt;return Bn(e),e.scope.on(),()=>{e.scope.off(),Bn(t)}},sd=()=>{mt&&mt.scope.off(),Bn(null)};function tm(e){return e.vnode.shapeFlag&4}let Fi=!1;function Kv(e,t=!1,r=!1){t&&Na(t);const{props:n,children:s}=e.vnode,i=tm(e);_v(e,n,i,t),$v(e,s,r);const a=i?Qv(e,t):void 0;return t&&Na(!1),a}function Qv(e,t){const r=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,uv);const{setup:n}=r;if(n){Tr();const s=e.setupContext=n.length>1?Xv(e):null,i=ji(e),a=Gi(n,e,0,[e.props,s]),l=th(a);if(Cr(),i(),(l||e.sp)&&!Di(e)&&zh(e),l){if(a.then(sd,sd),t)return a.then(u=>{ad(e,u)}).catch(u=>{Xn(u,e,0)});e.asyncDep=a}else ad(e,a)}else rm(e)}function ad(e,t,r){Ee(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:je(t)&&(e.setupState=Sh(t)),rm(e)}function rm(e,t,r){const n=e.type;e.render||(e.render=n.render||Yt);{const s=ji(e);Tr();try{dv(e)}finally{Cr(),s()}}}const Zv={get(e,t){return ut(e,"get",""),e[t]}};function Xv(e){const t=r=>{e.exposed=r||{}};return{attrs:new Proxy(e.attrs,Zv),slots:e.slots,emit:e.emit,expose:t}}function ts(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Sh(Rw(e.exposed)),{get(t,r){if(r in t)return t[r];if(r in Ni)return Ni[r](e)},has(t,r){return r in t||r in Ni}})):e.proxy}function Yv(e){return Ee(e)&&"__vccOpts"in e}const Jv=(e,t)=>Uw(e,t,Fi),e$="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Pa;const od=typeof window<"u"&&window.trustedTypes;if(od)try{Pa=od.createPolicy("vue",{createHTML:e=>e})}catch{}const im=Pa?e=>Pa.createHTML(e):e=>e,t$="http://www.w3.org/2000/svg",r$="http://www.w3.org/1998/Math/MathML",ar=typeof document<"u"?document:null,ld=ar&&ar.createElement("template"),i$={insert:(e,t,r)=>{t.insertBefore(e,r||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,r,n)=>{const s=t==="svg"?ar.createElementNS(t$,e):t==="mathml"?ar.createElementNS(r$,e):r?ar.createElement(e,{is:r}):ar.createElement(e);return e==="select"&&n&&n.multiple!=null&&s.setAttribute("multiple",n.multiple),s},createText:e=>ar.createTextNode(e),createComment:e=>ar.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ar.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,r,n,s,i){const a=r?r.previousSibling:t.lastChild;if(s&&(s===i||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),r),!(s===i||!(s=s.nextSibling)););else{ld.innerHTML=im(n==="svg"?`<svg>${e}</svg>`:n==="mathml"?`<math>${e}</math>`:e);const l=ld.content;if(n==="svg"||n==="mathml"){const u=l.firstChild;for(;u.firstChild;)l.appendChild(u.firstChild);l.removeChild(u)}t.insertBefore(l,r)}return[a?a.nextSibling:t.firstChild,r?r.previousSibling:t.lastChild]}},n$=Symbol("_vtc");function s$(e,t,r){const n=e[n$];n&&(t=(t?[t,...n]:[...n]).join(" ")),t==null?e.removeAttribute("class"):r?e.setAttribute("class",t):e.className=t}const ud=Symbol("_vod"),a$=Symbol("_vsh"),o$=Symbol(""),l$=/(^|;)\s*display\s*:/;function u$(e,t,r){const n=e.style,s=Ze(r);let i=!1;if(r&&!s){if(t)if(Ze(t))for(const a of t.split(";")){const l=a.slice(0,a.indexOf(":")).trim();r[l]==null&&kn(n,l,"")}else for(const a in t)r[a]==null&&kn(n,a,"");for(const a in r)a==="display"&&(i=!0),kn(n,a,r[a])}else if(s){if(t!==r){const a=n[o$];a&&(r+=";"+a),n.cssText=r,i=l$.test(r)}}else t&&e.removeAttribute("style");ud in e&&(e[ud]=i?n.display:"",e[a$]&&(n.display="none"))}const dd=/\s*!important$/;function kn(e,t,r){if(Ce(r))r.forEach(n=>kn(e,t,n));else if(r==null&&(r=""),t.startsWith("--"))e.setProperty(t,r);else{const n=d$(e,t);dd.test(r)?e.setProperty(Hr(n),r.replace(dd,""),"important"):e[n]=r}}const cd=["Webkit","Moz","ms"],Es={};function d$(e,t){const r=Es[t];if(r)return r;let n=$r(t);if(n!=="filter"&&n in e)return Es[t]=n;n=nh(n);for(let s=0;s<cd.length;s++){const i=cd[s]+n;if(i in e)return Es[t]=i}return t}const pd="http://www.w3.org/1999/xlink";function fd(e,t,r,n,s,i=cw(t)){n&&t.startsWith("xlink:")?r==null?e.removeAttributeNS(pd,t.slice(6,t.length)):e.setAttributeNS(pd,t,r):r==null||i&&!ah(r)?e.removeAttribute(t):e.setAttribute(t,i?"":Sr(r)?String(r):r)}function hd(e,t,r,n,s){if(t==="innerHTML"||t==="textContent"){r!=null&&(e[t]=t==="innerHTML"?im(r):r);return}const i=e.tagName;if(t==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?e.getAttribute("value")||"":e.value,u=r==null?e.type==="checkbox"?"on":"":String(r);(l!==u||!("_value"in e))&&(e.value=u),r==null&&e.removeAttribute(t),e._value=r;return}let a=!1;if(r===""||r==null){const l=typeof e[t];l==="boolean"?r=ah(r):r==null&&l==="string"?(r="",a=!0):l==="number"&&(r=0,a=!0)}try{e[t]=r}catch{}a&&e.removeAttribute(s||t)}function Jr(e,t,r,n){e.addEventListener(t,r,n)}function c$(e,t,r,n){e.removeEventListener(t,r,n)}const md=Symbol("_vei");function p$(e,t,r,n,s=null){const i=e[md]||(e[md]={}),a=i[t];if(n&&a)a.value=n;else{const[l,u]=f$(t);if(n){const c=i[t]=g$(n,s);Jr(e,l,c,u)}else a&&(c$(e,l,a,u),i[t]=void 0)}}const gd=/(?:Once|Passive|Capture)$/;function f$(e){let t;if(gd.test(e)){t={};let n;for(;n=e.match(gd);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Hr(e.slice(2)),t]}let zs=0;const h$=Promise.resolve(),m$=()=>zs||(h$.then(()=>zs=0),zs=Date.now());function g$(e,t){const r=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=r.attached)return;er(y$(n,r.value),t,5,[n])};return r.value=e,r.attached=m$(),r}function y$(e,t){if(Ce(t)){const r=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{r.call(e),e._stopped=!0},t.map(n=>s=>!s._stopped&&n&&n(s))}else return t}const yd=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,_$=(e,t,r,n,s,i)=>{const a=s==="svg";t==="class"?s$(e,n,a):t==="style"?u$(e,r,n):Fn(t)?eo(t)||p$(e,t,r,n,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):b$(e,t,n,a))?(hd(e,t,n),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&fd(e,t,n,a,i,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!Ze(n))?hd(e,$r(t),n,i,t):(t==="true-value"?e._trueValue=n:t==="false-value"&&(e._falseValue=n),fd(e,t,n,a))};function b$(e,t,r,n){if(n)return!!(t==="innerHTML"||t==="textContent"||t in e&&yd(t)&&Ee(r));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return yd(t)&&Ze(r)?!1:t in e}const _d=e=>{const t=e.props["onUpdate:modelValue"]||!1;return Ce(t)?r=>Sn(t,r):t};function w$(e){e.target.composing=!0}function bd(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const As=Symbol("_assign"),v$={created(e,{modifiers:{lazy:t,trim:r,number:n}},s){e[As]=_d(s);const i=n||s.props&&s.props.type==="number";Jr(e,t?"change":"input",a=>{if(a.target.composing)return;let l=e.value;r&&(l=l.trim()),i&&(l=ka(l)),e[As](l)}),r&&Jr(e,"change",()=>{e.value=e.value.trim()}),t||(Jr(e,"compositionstart",w$),Jr(e,"compositionend",bd),Jr(e,"change",bd))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:r,modifiers:{lazy:n,trim:s,number:i}},a){if(e[As]=_d(a),e.composing)return;const l=(i||e.type==="number")&&!/^0\d/.test(e.value)?ka(e.value):e.value,u=t??"";l!==u&&(document.activeElement===e&&e.type!=="range"&&(n&&t===r||s&&e.value.trim()===u)||(e.value=u))}},$$=gt({patchProp:_$},i$);let wd;function x$(){return wd||(wd=Sv($$))}const S$=(...e)=>{const t=x$().createApp(...e),{mount:r}=t;return t.mount=n=>{const s=C$(n);if(!s)return;const i=t._component;!Ee(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=r(s,!1,T$(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},t};function T$(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function C$(e){return Ze(e)?document.querySelector(e):e}const nm=(e,t)=>{const r=e.__vccOpts||e;for(const[n,s]of t)r[n]=s;return r},k$={class:"canvas-container"},I$={class:"controls"},E$={class:"brush-size-controls"},z$={for:"brush-size"},A$={__name:"Canvas",emits:["update:imageData","clear-prediction"],setup(e,{emit:t}){const r=xt(null),n=xt(!1),s=xt(!1),i=xt(0),a=xt(0),l=xt(null),u=xt(new Array(28*28).fill(0)),c=xt(2),f=t;ho(()=>{r.value&&(l.value=r.value.getContext("2d"),l.value.fillStyle="black",l.value.fillRect(0,0,28,28),v())});const h=()=>{s.value=!s.value},g=x=>{n.value=!0,x.type.startsWith("touch")&&x.preventDefault(),[i.value,a.value]=w(x),k()},_=x=>{if(!n.value)return;x.type.startsWith("touch")&&x.preventDefault();const[C,z]=w(x);T(i.value,a.value,C,z),i.value=C,a.value=z,k()},b=()=>{n.value=!1},w=x=>{const C=r.value.getBoundingClientRect();let z,O;x.type.startsWith("touch")?(z=x.touches[0].clientX,O=x.touches[0].clientY):(z=x.clientX,O=x.clientY);const B=Math.floor((z-C.left)/(C.width/28)),V=Math.floor((O-C.top)/(C.height/28)),X=Math.max(0,Math.min(B,27)),ue=Math.max(0,Math.min(V,27));return[X,ue]},T=(x,C,z,O)=>{l.value.beginPath(),l.value.moveTo(x+.5,C+.5),l.value.lineTo(z+.5,O+.5),l.value.strokeStyle=s.value?"black":"white",l.value.lineWidth=c.value,l.value.lineCap="round",l.value.stroke()},v=()=>{l.value.fillStyle="black",l.value.fillRect(0,0,28,28),u.value=new Array(28*28).fill(0),f("update:imageData",u.value),f("clear-prediction")},$=()=>{},k=()=>{const x=l.value.getImageData(0,0,28,28),C=[];for(let z=0;z<x.data.length;z+=4){const O=(x.data[z]+x.data[z+1]+x.data[z+2])/3;C.push(O/255)}u.value=C,f("update:imageData",u.value)};return(x,C)=>(br(),Br("div",k$,[St("canvas",{ref_key:"canvasRef",ref:r,width:"28",height:"28",onMousedown:g,onMousemove:_,onMouseup:b,onMouseleave:b,onTouchstart:g,onTouchmove:_,onTouchend:b,onTouchcancel:b,"aria-label":"Drawing Canvas"},null,544),St("div",I$,[St("button",{onClick:v,class:"clear-button"},"Clear"),St("button",{onClick:h,class:Qn({"erase-button":!0,active:s.value})},si(s.value?"Draw":"Erase"),3),St("div",E$,[St("label",z$,"Brush Size: "+si(c.value),1),jw(St("input",{type:"range",id:"brush-size",min:"1",max:"3","onUpdate:modelValue":C[0]||(C[0]=z=>c.value=z),onChange:$},null,544),[[v$,c.value,void 0,{number:!0}]])])])]))}},O$=nm(A$,[["__scopeId","data-v-4e40e569"]]);/*!
 * ONNX Runtime Web v1.21.0
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */var yo=Object.defineProperty,R$=Object.getOwnPropertyDescriptor,M$=Object.getOwnPropertyNames,B$=Object.prototype.hasOwnProperty,D$=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof require<"u"?require:t)[r]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),K=(e,t)=>()=>(e&&(t=e(e=0)),t),Ki=(e,t)=>{for(var r in t)yo(e,r,{get:t[r],enumerable:!0})},N$=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of M$(t))!B$.call(e,s)&&s!==r&&yo(e,s,{get:()=>t[s],enumerable:!(n=R$(t,s))||n.enumerable});return e},Dn=e=>N$(yo({},"__esModule",{value:!0}),e),bi,mr,ti,vd,sm,am=K(()=>{bi=new Map,mr=[],ti=(e,t,r)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let n=bi.get(e);if(n===void 0)bi.set(e,{backend:t,priority:r});else{if(n.priority>r)return;if(n.priority===r&&n.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${r}`)}if(r>=0){let s=mr.indexOf(e);s!==-1&&mr.splice(s,1);for(let i=0;i<mr.length;i++)if(bi.get(mr[i]).priority<=r){mr.splice(i,0,e);return}mr.push(e)}return}throw new TypeError("not a valid backend")},vd=async e=>{let t=bi.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let r=!!t.initPromise;try{return r||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(n){return r||(t.error=`${n}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},sm=async e=>{let t=e.executionProviders||[],r=t.map(u=>typeof u=="string"?u:u.name),n=r.length===0?mr:r,s,i=[],a=new Set;for(let u of n){let c=await vd(u);typeof c=="string"?i.push({name:u,err:c}):(s||(s=c),s===c&&a.add(u))}if(!s)throw new Error(`no available backend found. ERR: ${i.map(u=>`[${u.name}] ${u.err}`).join(", ")}`);for(let{name:u,err:c}of i)r.includes(u)&&console.warn(`removing requested execution provider "${u}" from session options because it is not available: ${c}`);let l=t.filter(u=>a.has(typeof u=="string"?u:u.name));return[s,new Proxy(e,{get:(u,c)=>c==="executionProviders"?l:Reflect.get(u,c)})]}}),P$=K(()=>{am()}),om,U$=K(()=>{om="1.21.0"}),Os,zt,lm=K(()=>{U$(),Os="warning",zt={wasm:{},webgl:{},webgpu:{},versions:{common:om},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);Os=e}},get logLevel(){return Os}},Object.defineProperty(zt,"logLevel",{enumerable:!0})}),He,W$=K(()=>{lm(),He=zt}),um,dm,L$=K(()=>{um=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);r.width=e.dims[3],r.height=e.dims[2];let n=r.getContext("2d");if(n!=null){let s,i;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(s=e.dims[2],i=e.dims[3]):(s=e.dims[3],i=e.dims[2]);let a=(t==null?void 0:t.format)!==void 0?t.format:"RGB",l=t==null?void 0:t.norm,u,c;l===void 0||l.mean===void 0?u=[255,255,255,255]:typeof l.mean=="number"?u=[l.mean,l.mean,l.mean,l.mean]:(u=[l.mean[0],l.mean[1],l.mean[2],0],l.mean[3]!==void 0&&(u[3]=l.mean[3])),l===void 0||l.bias===void 0?c=[0,0,0,0]:typeof l.bias=="number"?c=[l.bias,l.bias,l.bias,l.bias]:(c=[l.bias[0],l.bias[1],l.bias[2],0],l.bias[3]!==void 0&&(c[3]=l.bias[3]));let f=i*s,h=0,g=f,_=f*2,b=-1;a==="RGBA"?(h=0,g=f,_=f*2,b=f*3):a==="RGB"?(h=0,g=f,_=f*2):a==="RBG"&&(h=0,_=f,g=f*2);for(let w=0;w<i;w++)for(let T=0;T<s;T++){let v=(e.data[h++]-c[0])*u[0],$=(e.data[g++]-c[1])*u[1],k=(e.data[_++]-c[2])*u[2],x=b===-1?255:(e.data[b++]-c[3])*u[3];n.fillStyle="rgba("+v+","+$+","+k+","+x+")",n.fillRect(T,w,1,1)}if("toDataURL"in r)return r.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},dm=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),n;if(r!=null){let s,i,a;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(s=e.dims[2],i=e.dims[1],a=e.dims[3]):(s=e.dims[3],i=e.dims[2],a=e.dims[1]);let l=t!==void 0&&t.format!==void 0?t.format:"RGB",u=t==null?void 0:t.norm,c,f;u===void 0||u.mean===void 0?c=[255,255,255,255]:typeof u.mean=="number"?c=[u.mean,u.mean,u.mean,u.mean]:(c=[u.mean[0],u.mean[1],u.mean[2],255],u.mean[3]!==void 0&&(c[3]=u.mean[3])),u===void 0||u.bias===void 0?f=[0,0,0,0]:typeof u.bias=="number"?f=[u.bias,u.bias,u.bias,u.bias]:(f=[u.bias[0],u.bias[1],u.bias[2],0],u.bias[3]!==void 0&&(f[3]=u.bias[3]));let h=i*s;if(t!==void 0&&(t.format!==void 0&&a===4&&t.format!=="RGBA"||a===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let g=4,_=0,b=1,w=2,T=3,v=0,$=h,k=h*2,x=-1;l==="RGBA"?(v=0,$=h,k=h*2,x=h*3):l==="RGB"?(v=0,$=h,k=h*2):l==="RBG"&&(v=0,k=h,$=h*2),n=r.createImageData(s,i);for(let C=0;C<i*s;_+=g,b+=g,w+=g,T+=g,C++)n.data[_]=(e.data[v++]-f[0])*c[0],n.data[b]=(e.data[$++]-f[1])*c[1],n.data[w]=(e.data[k++]-f[2])*c[2],n.data[T]=x===-1?255:(e.data[x++]-f[3])*c[3]}else throw new Error("Can not access image data");return n}}),dn,cm,pm,fm,hm,mm,V$=K(()=>{_o(),dn=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:r,width:n}=t,s=t.norm??{mean:255,bias:0},i,a;typeof s.mean=="number"?i=[s.mean,s.mean,s.mean,s.mean]:i=[s.mean[0],s.mean[1],s.mean[2],s.mean[3]??255],typeof s.bias=="number"?a=[s.bias,s.bias,s.bias,s.bias]:a=[s.bias[0],s.bias[1],s.bias[2],s.bias[3]??0];let l=t.format!==void 0?t.format:"RGBA",u=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",c=r*n,f=u==="RGBA"?new Float32Array(c*4):new Float32Array(c*3),h=4,g=0,_=1,b=2,w=3,T=0,v=c,$=c*2,k=-1;l==="RGB"&&(h=3,g=0,_=1,b=2,w=-1),u==="RGBA"?k=c*3:u==="RBG"?(T=0,$=c,v=c*2):u==="BGR"&&($=0,v=c,T=c*2);for(let x=0;x<c;x++,g+=h,b+=h,_+=h,w+=h)f[T++]=(e[g]+a[0])/i[0],f[v++]=(e[_]+a[1])/i[1],f[$++]=(e[b]+a[2])/i[2],k!==-1&&w!==-1&&(f[k++]=(e[w]+a[3])/i[3]);return u==="RGBA"?new Tt("float32",f,[1,4,r,n]):new Tt("float32",f,[1,3,r,n])},cm=async(e,t)=>{let r=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,n=typeof ImageData<"u"&&e instanceof ImageData,s=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,i=typeof e=="string",a,l=t??{},u=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},c=f=>typeof HTMLCanvasElement<"u"&&f instanceof HTMLCanvasElement||f instanceof OffscreenCanvas?f.getContext("2d"):null;if(r){let f=u();f.width=e.width,f.height=e.height;let h=c(f);if(h!=null){let g=e.height,_=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(g=t.resizedHeight,_=t.resizedWidth),t!==void 0){if(l=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");l.tensorFormat="RGBA",l.height=g,l.width=_}else l.tensorFormat="RGBA",l.height=g,l.width=_;h.drawImage(e,0,0),a=h.getImageData(0,0,_,g).data}else throw new Error("Can not access image data")}else if(n){let f,h;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(f=t.resizedHeight,h=t.resizedWidth):(f=e.height,h=e.width),t!==void 0&&(l=t),l.format="RGBA",l.height=f,l.width=h,t!==void 0){let g=u();g.width=h,g.height=f;let _=c(g);if(_!=null)_.putImageData(e,0,0),a=_.getImageData(0,0,h,f).data;else throw new Error("Can not access image data")}else a=e.data}else if(s){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let f=u();f.width=e.width,f.height=e.height;let h=c(f);if(h!=null){let g=e.height,_=e.width;return h.drawImage(e,0,0,_,g),a=h.getImageData(0,0,_,g).data,l.height=g,l.width=_,dn(a,l)}else throw new Error("Can not access image data")}else{if(i)return new Promise((f,h)=>{let g=u(),_=c(g);if(!e||!_)return h();let b=new Image;b.crossOrigin="Anonymous",b.src=e,b.onload=()=>{g.width=b.width,g.height=b.height,_.drawImage(b,0,0,g.width,g.height);let w=_.getImageData(0,0,g.width,g.height);l.height=g.height,l.width=g.width,f(dn(w.data,l))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(a!==void 0)return dn(a,l);throw new Error("Input data provided is not supported - aborted tensor creation")},pm=(e,t)=>{let{width:r,height:n,download:s,dispose:i}=t,a=[1,n,r,4];return new Tt({location:"texture",type:"float32",texture:e,dims:a,download:s,dispose:i})},fm=(e,t)=>{let{dataType:r,dims:n,download:s,dispose:i}=t;return new Tt({location:"gpu-buffer",type:r??"float32",gpuBuffer:e,dims:n,download:s,dispose:i})},hm=(e,t)=>{let{dataType:r,dims:n,download:s,dispose:i}=t;return new Tt({location:"ml-tensor",type:r??"float32",mlTensor:e,dims:n,download:s,dispose:i})},mm=(e,t,r)=>new Tt({location:"cpu-pinned",type:e,data:t,dims:r??[t.length]})}),Dr,Ei,Rs,gm,q$=K(()=>{Dr=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),Ei=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),Rs=!1,gm=()=>{if(!Rs){Rs=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,r=globalThis.Float16Array,n=typeof r<"u"&&r.from;e&&(Dr.set("int64",BigInt64Array),Ei.set(BigInt64Array,"int64")),t&&(Dr.set("uint64",BigUint64Array),Ei.set(BigUint64Array,"uint64")),n?(Dr.set("float16",r),Ei.set(r,"float16")):Dr.set("float16",Uint16Array)}}}),ym,_m,F$=K(()=>{_o(),ym=e=>{let t=1;for(let r=0;r<e.length;r++){let n=e[r];if(typeof n!="number"||!Number.isSafeInteger(n))throw new TypeError(`dims[${r}] must be an integer, got: ${n}`);if(n<0)throw new RangeError(`dims[${r}] must be a non-negative integer, got: ${n}`);t*=n}return t},_m=(e,t)=>{switch(e.location){case"cpu":return new Tt(e.type,e.data,t);case"cpu-pinned":return new Tt({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new Tt({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new Tt({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new Tt({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),Tt,_o=K(()=>{L$(),V$(),q$(),F$(),Tt=class{constructor(e,t,r){gm();let n,s;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,n=e.type,s=e.dims,e.location){case"cpu-pinned":{let a=Dr.get(n);if(!a)throw new TypeError(`unsupported type "${n}" to create tensor from pinned buffer`);if(!(e.data instanceof a))throw new TypeError(`buffer should be of type ${a.name}`);this.cpuData=e.data;break}case"texture":{if(n!=="float32")throw new TypeError(`unsupported type "${n}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(n!=="float32"&&n!=="float16"&&n!=="int32"&&n!=="int64"&&n!=="uint32"&&n!=="uint8"&&n!=="bool"&&n!=="uint4"&&n!=="int4")throw new TypeError(`unsupported type "${n}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(n!=="float32"&&n!=="float16"&&n!=="int32"&&n!=="int64"&&n!=="uint32"&&n!=="uint64"&&n!=="int8"&&n!=="uint8"&&n!=="bool"&&n!=="uint4"&&n!=="int4")throw new TypeError(`unsupported type "${n}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let a,l;if(typeof e=="string")if(n=e,l=r,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");a=t}else{let u=Dr.get(e);if(u===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&u===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${u.name} as data.`);e==="uint64"||e==="int64"?a=u.from(t,BigInt):a=u.from(t)}else if(t instanceof u)a=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")a=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&t instanceof Uint16Array&&u!==Uint16Array)a=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw new TypeError(`A ${n} tensor's data must be type of ${u}`)}else if(l=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let u=typeof e[0];if(u==="string")n="string",a=e;else if(u==="boolean")n="bool",a=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${u}.`)}else if(e instanceof Uint8ClampedArray)n="uint8",a=Uint8Array.from(e);else{let u=Ei.get(e.constructor);if(u===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);n=u,a=e}if(l===void 0)l=[a.length];else if(!Array.isArray(l))throw new TypeError("A tensor's dims must be a number array");s=l,this.cpuData=a,this.dataLocation="cpu"}let i=ym(s);if(this.cpuData&&i!==this.cpuData.length&&!((n==="uint4"||n==="int4")&&Math.ceil(i/2)===this.cpuData.length))throw new Error(`Tensor's size(${i}) does not match data length(${this.cpuData.length}).`);this.type=n,this.dims=s,this.size=i}static async fromImage(e,t){return cm(e,t)}static fromTexture(e,t){return pm(e,t)}static fromGpuBuffer(e,t){return fm(e,t)}static fromMLTensor(e,t){return hm(e,t)}static fromPinnedBuffer(e,t,r){return mm(e,t,r)}toDataURL(e){return um(this,e)}toImageData(e){return dm(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return _m(this,e)}}}),Ut,bm=K(()=>{_o(),Ut=Tt}),Nn,Ms,tr,Lt,wm=K(()=>{lm(),Nn=(e,t)=>{(typeof zt.trace>"u"?!zt.wasm.trace:!zt.trace)||console.timeStamp(`${e}::ORT::${t}`)},Ms=(e,t)=>{var s;let r=((s=new Error().stack)==null?void 0:s.split(/\r\n|\r|\n/g))||[],n=!1;for(let i=0;i<r.length;i++){if(n&&!r[i].includes("TRACE_FUNC")){let a=`FUNC_${e}::${r[i].trim().split(" ")[1]}`;t&&(a+=`::${t}`),Nn("CPU",a);return}r[i].includes("TRACE_FUNC")&&(n=!0)}},tr=e=>{(typeof zt.trace>"u"?!zt.wasm.trace:!zt.trace)||Ms("BEGIN",e)},Lt=e=>{(typeof zt.trace>"u"?!zt.wasm.trace:!zt.trace)||Ms("END",e)}}),vm,H$=K(()=>{am(),bm(),wm(),vm=class $m{constructor(t){this.handler=t}async run(t,r,n){tr();let s={},i={};if(typeof t!="object"||t===null||t instanceof Ut||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let a=!0;if(typeof r=="object"){if(r===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(r instanceof Ut)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(r)){if(r.length===0)throw new TypeError("'fetches' cannot be an empty array.");a=!1;for(let c of r){if(typeof c!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(c)===-1)throw new RangeError(`'fetches' contains invalid output name: ${c}.`);s[c]=null}if(typeof n=="object"&&n!==null)i=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else{let c=!1,f=Object.getOwnPropertyNames(r);for(let h of this.outputNames)if(f.indexOf(h)!==-1){let g=r[h];(g===null||g instanceof Ut)&&(c=!0,a=!1,s[h]=g)}if(c){if(typeof n=="object"&&n!==null)i=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else i=r}}else if(typeof r<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let c of this.inputNames)if(typeof t[c]>"u")throw new Error(`input '${c}' is missing in 'feeds'.`);if(a)for(let c of this.outputNames)s[c]=null;let l=await this.handler.run(t,s,i),u={};for(let c in l)if(Object.hasOwnProperty.call(l,c)){let f=l[c];f instanceof Ut?u[c]=f:u[c]=new Ut(f.type,f.data,f.dims)}return Lt(),u}async release(){return this.handler.dispose()}static async create(t,r,n,s){tr();let i,a={};if(typeof t=="string"){if(i=t,typeof r=="object"&&r!==null)a=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(i=t,typeof r=="object"&&r!==null)a=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let f=t,h=0,g=t.byteLength;if(typeof r=="object"&&r!==null)a=r;else if(typeof r=="number"){if(h=r,!Number.isSafeInteger(h))throw new RangeError("'byteOffset' must be an integer.");if(h<0||h>=f.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${f.byteLength}).`);if(g=t.byteLength-h,typeof n=="number"){if(g=n,!Number.isSafeInteger(g))throw new RangeError("'byteLength' must be an integer.");if(g<=0||h+g>f.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${f.byteLength-h}].`);if(typeof s=="object"&&s!==null)a=s;else if(typeof s<"u")throw new TypeError("'options' must be an object.")}else if(typeof n<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof r<"u")throw new TypeError("'options' must be an object.");i=new Uint8Array(f,h,g)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[l,u]=await sm(a),c=await l.createInferenceSessionHandler(i,u);return Lt(),new $m(c)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}}}),bo,G$=K(()=>{H$(),bo=vm}),j$=K(()=>{}),K$=K(()=>{}),Q$=K(()=>{}),Z$=K(()=>{}),X$={};Ki(X$,{InferenceSession:()=>bo,TRACE:()=>Nn,TRACE_FUNC_BEGIN:()=>tr,TRACE_FUNC_END:()=>Lt,Tensor:()=>Ut,env:()=>He,registerBackend:()=>ti});var Vt=K(()=>{P$(),W$(),G$(),bm(),j$(),K$(),wm(),Q$(),Z$()}),wo=K(()=>{}),xm={};Ki(xm,{default:()=>Sm});var Bs,Ds,Sm,Y$=K(()=>{var e;k_(),Gr(),vo(),Bs="ort-wasm-proxy-worker",Ds=((e=globalThis.self)==null?void 0:e.name)===Bs,Ds&&(self.onmessage=t=>{let{type:r,in:n}=t.data;try{switch(r){case"init-wasm":$o(n.wasm).then(()=>{Wo(n).then(()=>{postMessage({type:r})},s=>{postMessage({type:r,err:s})})},s=>{postMessage({type:r,err:s})});break;case"init-ep":{let{epName:s,env:i}=n;Lo(i,s).then(()=>{postMessage({type:r})},a=>{postMessage({type:r,err:a})});break}case"copy-from":{let{buffer:s}=n,i=qn(s);postMessage({type:r,out:i});break}case"create":{let{model:s,options:i}=n;Vo(s,i).then(a=>{postMessage({type:r,out:a})},a=>{postMessage({type:r,err:a})});break}case"release":qo(n),postMessage({type:r});break;case"run":{let{sessionId:s,inputIndices:i,inputs:a,outputIndices:l,options:u}=n;Fo(s,i,a,l,new Array(l.length).fill(null),u).then(c=>{c.some(f=>f[3]!=="cpu")?postMessage({type:r,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:r,out:c},Go([...a,...c]))},c=>{postMessage({type:r,err:c})});break}case"end-profiling":Ho(n),postMessage({type:r});break;default:}}catch(s){postMessage({type:r,err:s})}}),Sm=Ds?null:t=>new Worker(t??wt,{type:"module",name:Bs})}),Tm={};Ki(Tm,{default:()=>Cm});var Ns,Ps,Cm,$d,J$=K(()=>{var e,t;Ps=(Ns=import.meta.url,async function(r={}){var Fu;var n,s,i=r,a=new Promise((o,d)=>{n=o,s=d}),l=typeof window=="object",u=typeof WorkerGlobalScope<"u",c=u&&((Fu=self.name)==null?void 0:Fu.startsWith("em-pthread"));i.mountExternalData=(o,d)=>{o.startsWith("./")&&(o=o.substring(2)),(i.Bd||(i.Bd=new Map)).set(o,d)},i.unmountExternalData=()=>{delete i.Bd};var f=globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let h=()=>{let o=(p,m,y)=>(...S)=>{let I=Gt,R=m==null?void 0:m();S=p(...S);let D=m==null?void 0:m();return R!==D&&(p=D,y(R),m=y=null),Gt!=I?new Promise((H,re)=>{ps={resolve:H,reject:re}}):S},d=p=>async(...m)=>{var y;try{if(i.Cd)throw Error("Session already started");let S=i.Cd={be:m[0],errors:[]},I=await p(...m);if(i.Cd!==S)throw Error("Session mismatch");(y=i.Dd)==null||y.flush();let R=S.errors;if(0<R.length){let D=await Promise.all(R);if(D=D.filter(H=>H),0<D.length)throw Error(D.join(`
`))}return I}finally{i.Cd=null}};i._OrtCreateSession=o(i._OrtCreateSession,()=>i._OrtCreateSession,p=>i._OrtCreateSession=p),i._OrtRun=d(o(i._OrtRun,()=>i._OrtRun,p=>i._OrtRun=p)),i._OrtRunWithBinding=d(o(i._OrtRunWithBinding,()=>i._OrtRunWithBinding,p=>i._OrtRunWithBinding=p)),i._OrtBindInput=o(i._OrtBindInput,()=>i._OrtBindInput,p=>i._OrtBindInput=p),h=void 0};i.jsepInit=(o,d)=>{if(h==null||h(),o==="webgpu"){[i.Dd,i.Rd,i.Vd,i.Hd,i.Ud,i.hc,i.Wd,i.Zd,i.Sd,i.Td,i.Xd]=d;let p=i.Dd;i.jsepRegisterBuffer=(m,y,S,I)=>p.registerBuffer(m,y,S,I),i.jsepGetBuffer=m=>p.getBuffer(m),i.jsepCreateDownloader=(m,y,S)=>p.createDownloader(m,y,S),i.jsepOnCreateSession=m=>{p.onCreateSession(m)},i.jsepOnReleaseSession=m=>{p.onReleaseSession(m)},i.jsepOnRunStart=m=>p.onRunStart(m),i.$d=(m,y)=>{p.upload(m,y)}}else if(o==="webnn"){[i.Dd,i.Yd,i.Id,i.jsepEnsureTensor,i.Jd,i.jsepDownloadTensor]=d,i.jsepReleaseTensorId=i.Id,i.jsepUploadTensor=i.Jd;let p=i.Dd;i.jsepOnRunStart=m=>p.onRunStart(m),i.jsepOnRunEnd=p.onRunEnd.bind(p),i.jsepRegisterMLContext=(m,y)=>{p.registerMLContext(m,y)},i.jsepOnReleaseSession=m=>{p.onReleaseSession(m)},i.jsepCreateMLTensorDownloader=(m,y)=>p.createMLTensorDownloader(m,y),i.jsepRegisterMLTensor=(m,y,S,I)=>p.registerMLTensor(m,y,S,I),i.jsepCreateMLContext=m=>p.createMLContext(m),i.jsepRegisterMLConstant=(m,y,S,I,R)=>p.registerMLConstant(m,y,S,I,R,i.Bd),i.jsepRegisterGraphInput=p.registerGraphInput.bind(p),i.jsepIsGraphInput=p.isGraphInput.bind(p),i.jsepCreateTemporaryTensor=p.createTemporaryTensor.bind(p)}};var g,_,b=Object.assign({},i),w=(o,d)=>{throw d},T="";(l||u)&&(u?T=self.location.href:typeof document<"u"&&document.currentScript&&(T=document.currentScript.src),Ns&&(T=Ns),T=T.startsWith("blob:")?"":T.slice(0,T.replace(/[?#].*/,"").lastIndexOf("/")+1),u&&(_=o=>{var d=new XMLHttpRequest;return d.open("GET",o,!1),d.responseType="arraybuffer",d.send(null),new Uint8Array(d.response)}),g=async o=>{if(Ae(o))return new Promise((p,m)=>{var y=new XMLHttpRequest;y.open("GET",o,!0),y.responseType="arraybuffer",y.onload=()=>{y.status==200||y.status==0&&y.response?p(y.response):m(y.status)},y.onerror=m,y.send(null)});var d=await fetch(o,{credentials:"same-origin"});if(d.ok)return d.arrayBuffer();throw Error(d.status+" : "+d.url)});var v=console.log.bind(console),$=console.error.bind(console),k=v,x=$;Object.assign(i,b),b=null;var C,z,O,B,V,X,ue,ge,ae,he,fe,Q,le,de=i.wasmBinary,ee=!1,Ae=o=>o.startsWith("file://");function N(){return C.buffer!=B.buffer&&De(),B}function q(){return C.buffer!=B.buffer&&De(),V}function ke(){return C.buffer!=B.buffer&&De(),X}function We(){return C.buffer!=B.buffer&&De(),ue}function W(){return C.buffer!=B.buffer&&De(),ge}function ze(){return C.buffer!=B.buffer&&De(),ae}function it(){return C.buffer!=B.buffer&&De(),he}function et(){return C.buffer!=B.buffer&&De(),le}if(c){let o=function(d){try{var p=d.data,m=p.yd;if(m==="load"){let y=[];self.onmessage=S=>y.push(S),self.startWorker=()=>{postMessage({yd:"loaded"});for(let S of y)o(S);self.onmessage=o};for(let S of p.Od)i[S]&&!i[S].proxy||(i[S]=(...I)=>{postMessage({yd:"callHandler",Nd:S,args:I})},S=="print"&&(k=i[S]),S=="printErr"&&(x=i[S]));C=p.he,De(),qt(p.ie)}else if(m==="run"){U_(p.xd),gs(p.xd,0,0,1,0,0),_t(),ds(p.xd),qe||(Ul(),qe=!0);try{W_(p.de,p.Fd)}catch(y){if(y!="unwind")throw y}}else p.target!=="setimmediate"&&(m==="checkMailbox"?qe&&Zi():m&&(x(`worker: received unknown command ${m}`),x(p)))}catch(y){throw Wl(),y}};var qt,qe=!1;x=function(...d){d=d.join(" "),console.error(d)},self.alert=function(...d){postMessage({yd:"alert",text:d.join(" "),fe:sn()})},self.onunhandledrejection=d=>{throw d.reason||d},self.onmessage=o}function De(){var o=C.buffer;i.HEAP8=B=new Int8Array(o),i.HEAP16=X=new Int16Array(o),i.HEAPU8=V=new Uint8Array(o),i.HEAPU16=ue=new Uint16Array(o),i.HEAP32=ge=new Int32Array(o),i.HEAPU32=ae=new Uint32Array(o),i.HEAPF32=he=new Float32Array(o),i.HEAPF64=le=new Float64Array(o),i.HEAP64=fe=new BigInt64Array(o),i.HEAPU64=Q=new BigUint64Array(o)}function E(){c?startWorker(i):L.Bb()}c||(C=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),De());var A,P=0,j=null;function G(){if(--P==0&&j){var o=j;j=null,o()}}function F(o){throw x(o="Aborted("+o+")"),ee=!0,o=new WebAssembly.RuntimeError(o+". Build with -sASSERTIONS for more info."),s(o),o}function te(){return{a:{Ta:Z,Va:J,W:L_,la:V_,b:F_,u:H_,R:G_,Za:j_,d:K_,pb:Qo,g:q_,T:Yo,Ga:Jo,lb:tl,nb:rl,Ha:il,Ea:nl,wb:sl,Da:al,pa:ol,mb:ll,jb:ul,Fa:dl,kb:cl,Ma:Q_,za:Z_,eb:X_,cb:J_,ya:t0,V:r0,N:i0,db:n0,ma:c0,fb:p0,zb:f0,hb:h0,qb:m0,ab:g0,Aa:y0,yb:ds,Ja:_0,S:b0,Wa:w0,$:x0,G:S0,E:C0,m:os,H:k0,B:z0,X:A0,J:O0,v:R0,O:M0,D:B0,t:D0,A:N0,z:P0,w:U0,r:W0,tb:L0,ub:V0,vb:q0,rb:Tl,sb:Cl,bb:kl,Oa:H0,La:j0,y:K0,ja:Q0,Ba:Z0,Ka:G0,qa:X0,Ia:Y0,ib:J0,U:F0,fa:eb,Sa:tb,gb:rb,Qa:ib,Pa:nb,Ab:Al,Ca:Ol,ob:tt,aa:Rl,oa:Ml,xb:Bl,na:Dl,$a:Ab,ia:Fb,sa:Qb,ga:Eb,da:Nb,ua:jb,p:kb,e:cb,c:ub,ea:Bb,f:pb,n:hb,k:xb,Y:gb,ka:Sb,j:Ib,wa:Mb,Ra:Yb,ca:Vb,Ua:Xb,P:Db,K:_b,_:Lb,Q:zb,Z:Hb,x:yb,l:db,va:Wb,i:lb,h:mb,ra:Zb,ta:Kb,o:fb,q:bb,s:vb,I:$b,C:Cb,L:Tb,xa:Rb,_a:Ob,F:qb,Ya:Pb,ba:Gb,M:wb,Xa:Ub,ha:ab,a:C,Na:Me}}}var Y={1319426:()=>typeof wasmOffsetConverter<"u",1319483:(o,d,p,m,y)=>{if(i===void 0||!i.Bd)return 1;if((o=Qe(Number(o>>>0))).startsWith("./")&&(o=o.substring(2)),!(o=i.Bd.get(o)))return 2;if(d=Number(d>>>0),p=Number(p>>>0),m=Number(m>>>0),d+p>o.byteLength)return 3;try{let S=o.subarray(d,d+p);switch(y){case 0:q().set(S,m>>>0);break;case 1:i.$d(m,S);break;default:return 4}return 0}catch{return 4}},1320198:(o,d,p)=>{i.Jd(o,q().subarray(d>>>0,d+p>>>0))},1320261:()=>i.Yd(),1320302:o=>{i.Id(o)},1320338:()=>{i.Sd()},1320369:()=>{i.Td()},1320398:()=>{i.Xd()},1320423:o=>i.Rd(o),1320456:o=>i.Vd(o),1320488:(o,d,p)=>{i.Hd(Number(o),Number(d),Number(p),!0)},1320551:(o,d,p)=>{i.Hd(Number(o),Number(d),Number(p))},1320608:o=>{i.hc("Abs",o,void 0)},1320659:o=>{i.hc("Neg",o,void 0)},1320710:o=>{i.hc("Floor",o,void 0)},1320763:o=>{i.hc("Ceil",o,void 0)},1320815:o=>{i.hc("Reciprocal",o,void 0)},1320873:o=>{i.hc("Sqrt",o,void 0)},1320925:o=>{i.hc("Exp",o,void 0)},1320976:o=>{i.hc("Erf",o,void 0)},1321027:o=>{i.hc("Sigmoid",o,void 0)},1321082:(o,d,p)=>{i.hc("HardSigmoid",o,{alpha:d,beta:p})},1321161:o=>{i.hc("Log",o,void 0)},1321212:o=>{i.hc("Sin",o,void 0)},1321263:o=>{i.hc("Cos",o,void 0)},1321314:o=>{i.hc("Tan",o,void 0)},1321365:o=>{i.hc("Asin",o,void 0)},1321417:o=>{i.hc("Acos",o,void 0)},1321469:o=>{i.hc("Atan",o,void 0)},1321521:o=>{i.hc("Sinh",o,void 0)},1321573:o=>{i.hc("Cosh",o,void 0)},1321625:o=>{i.hc("Asinh",o,void 0)},1321678:o=>{i.hc("Acosh",o,void 0)},1321731:o=>{i.hc("Atanh",o,void 0)},1321784:o=>{i.hc("Tanh",o,void 0)},1321836:o=>{i.hc("Not",o,void 0)},1321887:(o,d,p)=>{i.hc("Clip",o,{min:d,max:p})},1321956:o=>{i.hc("Clip",o,void 0)},1322008:(o,d)=>{i.hc("Elu",o,{alpha:d})},1322066:o=>{i.hc("Gelu",o,void 0)},1322118:o=>{i.hc("Relu",o,void 0)},1322170:(o,d)=>{i.hc("LeakyRelu",o,{alpha:d})},1322234:(o,d)=>{i.hc("ThresholdedRelu",o,{alpha:d})},1322304:(o,d)=>{i.hc("Cast",o,{to:d})},1322362:o=>{i.hc("Add",o,void 0)},1322413:o=>{i.hc("Sub",o,void 0)},1322464:o=>{i.hc("Mul",o,void 0)},1322515:o=>{i.hc("Div",o,void 0)},1322566:o=>{i.hc("Pow",o,void 0)},1322617:o=>{i.hc("Equal",o,void 0)},1322670:o=>{i.hc("Greater",o,void 0)},1322725:o=>{i.hc("GreaterOrEqual",o,void 0)},1322787:o=>{i.hc("Less",o,void 0)},1322839:o=>{i.hc("LessOrEqual",o,void 0)},1322898:(o,d,p,m,y)=>{i.hc("ReduceMean",o,{keepDims:!!d,noopWithEmptyAxes:!!p,axes:m?Array.from(W().subarray(Number(m)>>>0,Number(y)>>>0)):[]})},1323073:(o,d,p,m,y)=>{i.hc("ReduceMax",o,{keepDims:!!d,noopWithEmptyAxes:!!p,axes:m?Array.from(W().subarray(Number(m)>>>0,Number(y)>>>0)):[]})},1323247:(o,d,p,m,y)=>{i.hc("ReduceMin",o,{keepDims:!!d,noopWithEmptyAxes:!!p,axes:m?Array.from(W().subarray(Number(m)>>>0,Number(y)>>>0)):[]})},1323421:(o,d,p,m,y)=>{i.hc("ReduceProd",o,{keepDims:!!d,noopWithEmptyAxes:!!p,axes:m?Array.from(W().subarray(Number(m)>>>0,Number(y)>>>0)):[]})},1323596:(o,d,p,m,y)=>{i.hc("ReduceSum",o,{keepDims:!!d,noopWithEmptyAxes:!!p,axes:m?Array.from(W().subarray(Number(m)>>>0,Number(y)>>>0)):[]})},1323770:(o,d,p,m,y)=>{i.hc("ReduceL1",o,{keepDims:!!d,noopWithEmptyAxes:!!p,axes:m?Array.from(W().subarray(Number(m)>>>0,Number(y)>>>0)):[]})},1323943:(o,d,p,m,y)=>{i.hc("ReduceL2",o,{keepDims:!!d,noopWithEmptyAxes:!!p,axes:m?Array.from(W().subarray(Number(m)>>>0,Number(y)>>>0)):[]})},1324116:(o,d,p,m,y)=>{i.hc("ReduceLogSum",o,{keepDims:!!d,noopWithEmptyAxes:!!p,axes:m?Array.from(W().subarray(Number(m)>>>0,Number(y)>>>0)):[]})},1324293:(o,d,p,m,y)=>{i.hc("ReduceSumSquare",o,{keepDims:!!d,noopWithEmptyAxes:!!p,axes:m?Array.from(W().subarray(Number(m)>>>0,Number(y)>>>0)):[]})},1324473:(o,d,p,m,y)=>{i.hc("ReduceLogSumExp",o,{keepDims:!!d,noopWithEmptyAxes:!!p,axes:m?Array.from(W().subarray(Number(m)>>>0,Number(y)>>>0)):[]})},1324653:o=>{i.hc("Where",o,void 0)},1324706:(o,d,p)=>{i.hc("Transpose",o,{perm:d?Array.from(W().subarray(Number(d)>>>0,Number(p)>>>0)):[]})},1324830:(o,d,p,m)=>{i.hc("DepthToSpace",o,{blocksize:d,mode:Qe(p),format:m?"NHWC":"NCHW"})},1324963:(o,d,p,m)=>{i.hc("DepthToSpace",o,{blocksize:d,mode:Qe(p),format:m?"NHWC":"NCHW"})},1325096:(o,d,p,m,y,S,I,R,D,H,re,ce,xe,Le,Et)=>{i.hc("ConvTranspose",o,{format:D?"NHWC":"NCHW",autoPad:d,dilations:[p],group:m,kernelShape:[y],pads:[S,I],strides:[R],wIsConst:()=>!!N()[H>>>0],outputPadding:re?Array.from(W().subarray(Number(re)>>>0,Number(ce)>>>0)):[],outputShape:xe?Array.from(W().subarray(Number(xe)>>>0,Number(Le)>>>0)):[],activation:Qe(Et)})},1325529:(o,d,p,m,y,S,I,R,D,H,re,ce,xe,Le)=>{i.hc("ConvTranspose",o,{format:R?"NHWC":"NCHW",autoPad:d,dilations:Array.from(W().subarray(Number(p)>>>0,2+(Number(p)>>>0)>>>0)),group:m,kernelShape:Array.from(W().subarray(Number(y)>>>0,2+(Number(y)>>>0)>>>0)),pads:Array.from(W().subarray(Number(S)>>>0,4+(Number(S)>>>0)>>>0)),strides:Array.from(W().subarray(Number(I)>>>0,2+(Number(I)>>>0)>>>0)),wIsConst:()=>!!N()[D>>>0],outputPadding:H?Array.from(W().subarray(Number(H)>>>0,Number(re)>>>0)):[],outputShape:ce?Array.from(W().subarray(Number(ce)>>>0,Number(xe)>>>0)):[],activation:Qe(Le)})},1326190:(o,d,p,m,y,S,I,R,D,H,re,ce,xe,Le,Et)=>{i.hc("ConvTranspose",o,{format:D?"NHWC":"NCHW",autoPad:d,dilations:[p],group:m,kernelShape:[y],pads:[S,I],strides:[R],wIsConst:()=>!!N()[H>>>0],outputPadding:re?Array.from(W().subarray(Number(re)>>>0,Number(ce)>>>0)):[],outputShape:xe?Array.from(W().subarray(Number(xe)>>>0,Number(Le)>>>0)):[],activation:Qe(Et)})},1326623:(o,d,p,m,y,S,I,R,D,H,re,ce,xe,Le)=>{i.hc("ConvTranspose",o,{format:R?"NHWC":"NCHW",autoPad:d,dilations:Array.from(W().subarray(Number(p)>>>0,2+(Number(p)>>>0)>>>0)),group:m,kernelShape:Array.from(W().subarray(Number(y)>>>0,2+(Number(y)>>>0)>>>0)),pads:Array.from(W().subarray(Number(S)>>>0,4+(Number(S)>>>0)>>>0)),strides:Array.from(W().subarray(Number(I)>>>0,2+(Number(I)>>>0)>>>0)),wIsConst:()=>!!N()[D>>>0],outputPadding:H?Array.from(W().subarray(Number(H)>>>0,Number(re)>>>0)):[],outputShape:ce?Array.from(W().subarray(Number(ce)>>>0,Number(xe)>>>0)):[],activation:Qe(Le)})},1327284:(o,d)=>{i.hc("GlobalAveragePool",o,{format:d?"NHWC":"NCHW"})},1327375:(o,d,p,m,y,S,I,R,D,H,re,ce,xe,Le)=>{i.hc("AveragePool",o,{format:Le?"NHWC":"NCHW",auto_pad:d,ceil_mode:p,count_include_pad:m,storage_order:y,dilations:S?Array.from(W().subarray(Number(S)>>>0,Number(I)>>>0)):[],kernel_shape:R?Array.from(W().subarray(Number(R)>>>0,Number(D)>>>0)):[],pads:H?Array.from(W().subarray(Number(H)>>>0,Number(re)>>>0)):[],strides:ce?Array.from(W().subarray(Number(ce)>>>0,Number(xe)>>>0)):[]})},1327854:(o,d)=>{i.hc("GlobalAveragePool",o,{format:d?"NHWC":"NCHW"})},1327945:(o,d,p,m,y,S,I,R,D,H,re,ce,xe,Le)=>{i.hc("AveragePool",o,{format:Le?"NHWC":"NCHW",auto_pad:d,ceil_mode:p,count_include_pad:m,storage_order:y,dilations:S?Array.from(W().subarray(Number(S)>>>0,Number(I)>>>0)):[],kernel_shape:R?Array.from(W().subarray(Number(R)>>>0,Number(D)>>>0)):[],pads:H?Array.from(W().subarray(Number(H)>>>0,Number(re)>>>0)):[],strides:ce?Array.from(W().subarray(Number(ce)>>>0,Number(xe)>>>0)):[]})},1328424:(o,d)=>{i.hc("GlobalMaxPool",o,{format:d?"NHWC":"NCHW"})},1328511:(o,d,p,m,y,S,I,R,D,H,re,ce,xe,Le)=>{i.hc("MaxPool",o,{format:Le?"NHWC":"NCHW",auto_pad:d,ceil_mode:p,count_include_pad:m,storage_order:y,dilations:S?Array.from(W().subarray(Number(S)>>>0,Number(I)>>>0)):[],kernel_shape:R?Array.from(W().subarray(Number(R)>>>0,Number(D)>>>0)):[],pads:H?Array.from(W().subarray(Number(H)>>>0,Number(re)>>>0)):[],strides:ce?Array.from(W().subarray(Number(ce)>>>0,Number(xe)>>>0)):[]})},1328986:(o,d)=>{i.hc("GlobalMaxPool",o,{format:d?"NHWC":"NCHW"})},1329073:(o,d,p,m,y,S,I,R,D,H,re,ce,xe,Le)=>{i.hc("MaxPool",o,{format:Le?"NHWC":"NCHW",auto_pad:d,ceil_mode:p,count_include_pad:m,storage_order:y,dilations:S?Array.from(W().subarray(Number(S)>>>0,Number(I)>>>0)):[],kernel_shape:R?Array.from(W().subarray(Number(R)>>>0,Number(D)>>>0)):[],pads:H?Array.from(W().subarray(Number(H)>>>0,Number(re)>>>0)):[],strides:ce?Array.from(W().subarray(Number(ce)>>>0,Number(xe)>>>0)):[]})},1329548:(o,d,p,m,y)=>{i.hc("Gemm",o,{alpha:d,beta:p,transA:m,transB:y})},1329652:o=>{i.hc("MatMul",o,void 0)},1329706:(o,d,p,m)=>{i.hc("ArgMax",o,{keepDims:!!d,selectLastIndex:!!p,axis:m})},1329814:(o,d,p,m)=>{i.hc("ArgMin",o,{keepDims:!!d,selectLastIndex:!!p,axis:m})},1329922:(o,d)=>{i.hc("Softmax",o,{axis:d})},1329985:(o,d)=>{i.hc("Concat",o,{axis:d})},1330045:(o,d,p,m,y)=>{i.hc("Split",o,{axis:d,numOutputs:p,splitSizes:m?Array.from(W().subarray(Number(m)>>>0,Number(y)>>>0)):[]})},1330201:o=>{i.hc("Expand",o,void 0)},1330255:(o,d)=>{i.hc("Gather",o,{axis:Number(d)})},1330326:(o,d)=>{i.hc("GatherElements",o,{axis:Number(d)})},1330405:(o,d)=>{i.hc("GatherND",o,{batch_dims:Number(d)})},1330484:(o,d,p,m,y,S,I,R,D,H,re)=>{i.hc("Resize",o,{antialias:d,axes:p?Array.from(W().subarray(Number(p)>>>0,Number(m)>>>0)):[],coordinateTransformMode:Qe(y),cubicCoeffA:S,excludeOutside:I,extrapolationValue:R,keepAspectRatioPolicy:Qe(D),mode:Qe(H),nearestMode:Qe(re)})},1330846:(o,d,p,m,y,S,I)=>{i.hc("Slice",o,{starts:d?Array.from(W().subarray(Number(d)>>>0,Number(p)>>>0)):[],ends:m?Array.from(W().subarray(Number(m)>>>0,Number(y)>>>0)):[],axes:S?Array.from(W().subarray(Number(S)>>>0,Number(I)>>>0)):[]})},1331110:o=>{i.hc("Tile",o,void 0)},1331162:(o,d,p)=>{i.hc("InstanceNormalization",o,{epsilon:d,format:p?"NHWC":"NCHW"})},1331276:(o,d,p)=>{i.hc("InstanceNormalization",o,{epsilon:d,format:p?"NHWC":"NCHW"})},1331390:o=>{i.hc("Range",o,void 0)},1331443:(o,d)=>{i.hc("Einsum",o,{equation:Qe(d)})},1331524:(o,d,p,m,y)=>{i.hc("Pad",o,{mode:d,value:p,pads:m?Array.from(W().subarray(Number(m)>>>0,Number(y)>>>0)):[]})},1331667:(o,d,p,m,y,S)=>{i.hc("BatchNormalization",o,{epsilon:d,momentum:p,spatial:!!y,trainingMode:!!m,format:S?"NHWC":"NCHW"})},1331836:(o,d,p,m,y,S)=>{i.hc("BatchNormalization",o,{epsilon:d,momentum:p,spatial:!!y,trainingMode:!!m,format:S?"NHWC":"NCHW"})},1332005:(o,d,p)=>{i.hc("CumSum",o,{exclusive:Number(d),reverse:Number(p)})},1332102:(o,d,p)=>{i.hc("DequantizeLinear",o,{axis:d,blockSize:p})},1332192:(o,d,p,m,y)=>{i.hc("GridSample",o,{align_corners:d,mode:Qe(p),padding_mode:Qe(m),format:y?"NHWC":"NCHW"})},1332362:(o,d,p,m,y)=>{i.hc("GridSample",o,{align_corners:d,mode:Qe(p),padding_mode:Qe(m),format:y?"NHWC":"NCHW"})},1332532:(o,d)=>{i.hc("ScatterND",o,{reduction:Qe(d)})},1332617:(o,d,p,m,y,S,I,R,D)=>{i.hc("Attention",o,{numHeads:d,isUnidirectional:p,maskFilterValue:m,scale:y,doRotary:S,qkvHiddenSizes:I?Array.from(W().subarray(Number(R)>>>0,Number(R)+I>>>0)):[],pastPresentShareBuffer:!!D})},1332889:o=>{i.hc("BiasAdd",o,void 0)},1332944:o=>{i.hc("BiasSplitGelu",o,void 0)},1333005:o=>{i.hc("FastGelu",o,void 0)},1333061:(o,d,p,m,y,S,I,R,D,H,re,ce,xe,Le,Et,gi)=>{i.hc("Conv",o,{format:ce?"NHWC":"NCHW",auto_pad:d,dilations:p?Array.from(W().subarray(Number(p)>>>0,Number(m)>>>0)):[],group:y,kernel_shape:S?Array.from(W().subarray(Number(S)>>>0,Number(I)>>>0)):[],pads:R?Array.from(W().subarray(Number(R)>>>0,Number(D)>>>0)):[],strides:H?Array.from(W().subarray(Number(H)>>>0,Number(re)>>>0)):[],w_is_const:()=>!!N()[Number(xe)>>>0],activation:Qe(Le),activation_params:Et?Array.from(it().subarray(Number(Et)>>>0,Number(gi)>>>0)):[]})},1333645:o=>{i.hc("Gelu",o,void 0)},1333697:(o,d,p,m,y,S,I,R,D)=>{i.hc("GroupQueryAttention",o,{numHeads:d,kvNumHeads:p,scale:m,softcap:y,doRotary:S,rotaryInterleaved:I,smoothSoftmax:R,localWindowSize:D})},1333914:(o,d,p,m)=>{i.hc("LayerNormalization",o,{axis:d,epsilon:p,simplified:!!m})},1334025:(o,d,p,m)=>{i.hc("LayerNormalization",o,{axis:d,epsilon:p,simplified:!!m})},1334136:(o,d,p,m,y,S)=>{i.hc("MatMulNBits",o,{k:d,n:p,accuracyLevel:m,bits:y,blockSize:S})},1334263:(o,d,p,m,y,S)=>{i.hc("MultiHeadAttention",o,{numHeads:d,isUnidirectional:p,maskFilterValue:m,scale:y,doRotary:S})},1334422:(o,d)=>{i.hc("QuickGelu",o,{alpha:d})},1334486:(o,d,p,m,y)=>{i.hc("RotaryEmbedding",o,{interleaved:!!d,numHeads:p,rotaryEmbeddingDim:m,scale:y})},1334625:(o,d,p)=>{i.hc("SkipLayerNormalization",o,{epsilon:d,simplified:!!p})},1334727:(o,d,p)=>{i.hc("SkipLayerNormalization",o,{epsilon:d,simplified:!!p})},1334829:(o,d,p,m)=>{i.hc("GatherBlockQuantized",o,{gatherAxis:d,quantizeAxis:p,blockSize:m})},1334950:o=>{i.Wd(o)},1334984:(o,d)=>i.Zd(Number(o),Number(d),i.Cd.be,i.Cd.errors)};function J(o,d,p){return bl(async()=>{await i.Ud(Number(o),Number(d),Number(p))})}function Z(){return typeof wasmOffsetConverter<"u"}class me{constructor(d){Hu(this,"name","ExitStatus");this.message=`Program terminated with exit(${d})`,this.status=d}}var ie=o=>{o.terminate(),o.onmessage=()=>{}},pe=[],we=o=>{Xe.length==0&&(jo(),pi(Xe[0]));var d=Xe.pop();if(!d)return 6;at.push(d),Ft[o.xd]=d,d.xd=o.xd;var p={yd:"run",de:o.ce,Fd:o.Fd,xd:o.xd};return d.postMessage(p,o.Ld),0},Ie=0,ye=(o,d,...p)=>{for(var m=2*p.length,y=ve(),S=_s(8*m),I=S>>>3,R=0;R<p.length;R++){var D=p[R];typeof D=="bigint"?(fe[I+2*R]=1n,fe[I+2*R+1]=D):(fe[I+2*R]=0n,et()[I+2*R+1>>>0]=D)}return o=Ll(o,0,m,S,d),be(y),o};function Me(o){if(c)return ye(0,1,o);if(O=o,!(0<Ie)){for(var d of at)ie(d);for(d of Xe)ie(d);Xe=[],at=[],Ft={},ee=!0}w(0,new me(o))}function st(o){if(c)return ye(1,0,o);tt(o)}var tt=o=>{if(O=o,c)throw st(o),"unwind";Me(o)},Xe=[],at=[],cr=[],Ft={},ot=o=>{var d=o.xd;delete Ft[d],Xe.push(o),at.splice(at.indexOf(o),1),o.xd=0,Vl(d)};function _t(){cr.forEach(o=>o())}var pi=o=>new Promise(d=>{o.onmessage=y=>{var S=(y=y.data).yd;if(y.Ed&&y.Ed!=sn()){var I=Ft[y.Ed];I?I.postMessage(y,y.Ld):x(`Internal error! Worker sent a message "${S}" to target pthread ${y.Ed}, but that thread no longer exists!`)}else S==="checkMailbox"?Zi():S==="spawnThread"?we(y):S==="cleanupThread"?ot(Ft[y.ee]):S==="loaded"?(o.loaded=!0,d(o)):S==="alert"?alert(`Thread ${y.fe}: ${y.text}`):y.target==="setimmediate"?o.postMessage(y):S==="callHandler"?i[y.Nd](...y.args):S&&x(`worker sent an unknown command ${S}`)},o.onerror=y=>{throw x(`worker sent an error! ${y.filename}:${y.lineno}: ${y.message}`),y};var p,m=[];for(p of[])i.propertyIsEnumerable(p)&&m.push(p);o.postMessage({yd:"load",Od:m,he:C,ie:z})});function jo(){var o=new Worker(import.meta.url.startsWith("file:")?new URL("/assets/ort.bundle.min-OfoG_cy9.mjs",import.meta.url):new URL(import.meta.url),{type:"module",workerData:"em-pthread",name:"em-pthread"});Xe.push(o)}var U_=o=>{De();var d=ze()[o+52>>>2>>>0];o=ze()[o+56>>>2>>>0],Hl(d,d-o),be(d)},W_=(o,d)=>{Ie=0,o=bs(o,d),0<Ie?O=o:ys(o)},Qi=[];function L_(o){var d=new rs(o>>>=0);if(N()[d.wd+12>>>0]==0){var p=1;N()[d.wd+12>>>0]=p}return p=0,N()[d.wd+13>>>0]=p,Qi.push(d),jl(o),Ql(o)}var Kr=0,V_=()=>{$e(0,0);var o=Qi.pop();Gl(o.Gd),Kr=0};class rs{constructor(d){this.Gd=d,this.wd=d-24}}function q_(o){throw Kr||(Kr=o>>>0),Kr}var is=o=>{var d=Kr;if(!d)return mi(0),0;var p=new rs(d);ze()[p.wd+16>>>2>>>0]=d;var m=ze()[p.wd+4>>>2>>>0];if(!m)return mi(0),d;for(var y of o){if(y===0||y===m)break;if(Kl(y,m,p.wd+16))return mi(y),d}return mi(m),d};function F_(){return is([])}function H_(o){return is([o>>>0])}function G_(o,d){return is([o>>>0,d>>>0])}var j_=()=>{var o=Qi.pop();o||F("no exception to throw");var d=o.Gd;if(N()[o.wd+13>>>0]==0){Qi.push(o);var p=1;N()[o.wd+13>>>0]=p,p=0,N()[o.wd+12>>>0]=p}throw Kr=d};function K_(o,d,p){var m=new rs(o>>>=0);throw d>>>=0,p>>>=0,ze()[m.wd+16>>>2>>>0]=0,ze()[m.wd+4>>>2>>>0]=d,ze()[m.wd+8>>>2>>>0]=p,Kr=o}function Ko(o,d,p,m){return c?ye(2,1,o,d,p,m):Qo(o,d,p,m)}function Qo(o,d,p,m){if(o>>>=0,p>>>=0,m>>>=0,f===void 0)return 6;var y=[];return c&&y.length===0?Ko(o,d>>>=0,p,m):(o={ce:p,xd:o,Fd:m,Ld:y},c?(o.yd="spawnThread",postMessage(o,y),0):we(o))}var Zo=typeof TextDecoder<"u"?new TextDecoder:void 0,Xo=(o,d=0,p=NaN)=>{var m=(d>>>=0)+p;for(p=d;o[p]&&!(p>=m);)++p;if(16<p-d&&o.buffer&&Zo)return Zo.decode(o.buffer instanceof ArrayBuffer?o.subarray(d,p):o.slice(d,p));for(m="";d<p;){var y=o[d++];if(128&y){var S=63&o[d++];if((224&y)==192)m+=String.fromCharCode((31&y)<<6|S);else{var I=63&o[d++];65536>(y=(240&y)==224?(15&y)<<12|S<<6|I:(7&y)<<18|S<<12|I<<6|63&o[d++])?m+=String.fromCharCode(y):(y-=65536,m+=String.fromCharCode(55296|y>>10,56320|1023&y))}}else m+=String.fromCharCode(y)}return m},Qe=(o,d)=>(o>>>=0)?Xo(q(),o,d):"";function Yo(o,d,p){return c?ye(3,1,o,d,p):0}function Jo(o,d){if(c)return ye(4,1,o,d)}var el=o=>{for(var d=0,p=0;p<o.length;++p){var m=o.charCodeAt(p);127>=m?d++:2047>=m?d+=2:55296<=m&&57343>=m?(d+=4,++p):d+=3}return d},Qr=(o,d,p)=>{var m=q();if(d>>>=0,0<p){var y=d;p=d+p-1;for(var S=0;S<o.length;++S){var I=o.charCodeAt(S);if(55296<=I&&57343>=I&&(I=65536+((1023&I)<<10)|1023&o.charCodeAt(++S)),127>=I){if(d>=p)break;m[d++>>>0]=I}else{if(2047>=I){if(d+1>=p)break;m[d++>>>0]=192|I>>6}else{if(65535>=I){if(d+2>=p)break;m[d++>>>0]=224|I>>12}else{if(d+3>=p)break;m[d++>>>0]=240|I>>18,m[d++>>>0]=128|I>>12&63}m[d++>>>0]=128|I>>6&63}m[d++>>>0]=128|63&I}}m[d>>>0]=0,o=d-y}else o=0;return o};function tl(o,d){if(c)return ye(5,1,o,d)}function rl(o,d,p){if(c)return ye(6,1,o,d,p)}function il(o,d,p){return c?ye(7,1,o,d,p):0}function nl(o,d){if(c)return ye(8,1,o,d)}function sl(o,d,p){if(c)return ye(9,1,o,d,p)}function al(o,d,p,m){if(c)return ye(10,1,o,d,p,m)}function ol(o,d,p,m){if(c)return ye(11,1,o,d,p,m)}function ll(o,d,p,m){if(c)return ye(12,1,o,d,p,m)}function ul(o){if(c)return ye(13,1,o)}function dl(o,d){if(c)return ye(14,1,o,d)}function cl(o,d,p){if(c)return ye(15,1,o,d,p)}var pl,pr,Q_=()=>F(""),Ht=o=>{for(var d="";q()[o>>>0];)d+=pl[q()[o++>>>0]];return d},ns={},ss={};function rr(o,d,p={}){return function(m,y,S={}){var I=y.name;if(!m)throw new pr(`type "${I}" must have a positive integer typeid pointer`);if(ss.hasOwnProperty(m)){if(S.Pd)return;throw new pr(`Cannot register type '${I}' twice`)}ss[m]=y,ns.hasOwnProperty(m)&&(y=ns[m],delete ns[m],y.forEach(R=>R()))}(o,d,p)}var fl=(o,d,p)=>{switch(d){case 1:return p?m=>N()[m>>>0]:m=>q()[m>>>0];case 2:return p?m=>ke()[m>>>1>>>0]:m=>We()[m>>>1>>>0];case 4:return p?m=>W()[m>>>2>>>0]:m=>ze()[m>>>2>>>0];case 8:return p?m=>fe[m>>>3]:m=>Q[m>>>3];default:throw new TypeError(`invalid integer width (${d}): ${o}`)}};function Z_(o,d,p){p>>>=0,rr(o>>>=0,{name:d=Ht(d>>>0),fromWireType:m=>m,toWireType:function(m,y){if(typeof y!="bigint"&&typeof y!="number")throw y=y===null?"null":(m=typeof y)=="object"||m==="array"||m==="function"?y.toString():""+y,new TypeError(`Cannot convert "${y}" to ${this.name}`);return typeof y=="number"&&(y=BigInt(y)),y},zd:fr,readValueFromPointer:fl(d,p,d.indexOf("u")==-1),Ad:null})}var fr=8;function X_(o,d,p,m){rr(o>>>=0,{name:d=Ht(d>>>0),fromWireType:function(y){return!!y},toWireType:function(y,S){return S?p:m},zd:fr,readValueFromPointer:function(y){return this.fromWireType(q()[y>>>0])},Ad:null})}var as=[],ir=[];function os(o){9<(o>>>=0)&&--ir[o+1]==0&&(ir[o]=void 0,as.push(o))}var bt=o=>{if(!o)throw new pr("Cannot use deleted val. handle = "+o);return ir[o]},It=o=>{switch(o){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let d=as.pop()||ir.length;return ir[d]=o,ir[d+1]=1,d}};function ls(o){return this.fromWireType(ze()[o>>>2>>>0])}var Y_={name:"emscripten::val",fromWireType:o=>{var d=bt(o);return os(o),d},toWireType:(o,d)=>It(d),zd:fr,readValueFromPointer:ls,Ad:null};function J_(o){return rr(o>>>0,Y_)}var e0=(o,d)=>{switch(d){case 4:return function(p){return this.fromWireType(it()[p>>>2>>>0])};case 8:return function(p){return this.fromWireType(et()[p>>>3>>>0])};default:throw new TypeError(`invalid float width (${d}): ${o}`)}};function t0(o,d,p){p>>>=0,rr(o>>>=0,{name:d=Ht(d>>>0),fromWireType:m=>m,toWireType:(m,y)=>y,zd:fr,readValueFromPointer:e0(d,p),Ad:null})}function r0(o,d,p,m,y){if(o>>>=0,p>>>=0,d=Ht(d>>>0),y===-1&&(y=4294967295),y=R=>R,m===0){var S=32-8*p;y=R=>R<<S>>>S}var I=d.includes("unsigned")?function(R,D){return D>>>0}:function(R,D){return D};rr(o,{name:d,fromWireType:y,toWireType:I,zd:fr,readValueFromPointer:fl(d,p,m!==0),Ad:null})}function i0(o,d,p){function m(S){var I=ze()[S>>>2>>>0];return S=ze()[S+4>>>2>>>0],new y(N().buffer,S,I)}var y=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][d];rr(o>>>=0,{name:p=Ht(p>>>0),fromWireType:m,zd:fr,readValueFromPointer:m},{Pd:!0})}function n0(o,d){rr(o>>>=0,{name:d=Ht(d>>>0),fromWireType:function(p){for(var m,y=ze()[p>>>2>>>0],S=p+4,I=S,R=0;R<=y;++R){var D=S+R;R!=y&&q()[D>>>0]!=0||(I=Qe(I,D-I),m===void 0?m=I:(m+="\0",m+=I),I=D+1)}return jt(p),m},toWireType:function(p,m){m instanceof ArrayBuffer&&(m=new Uint8Array(m));var y=typeof m=="string";if(!(y||m instanceof Uint8Array||m instanceof Uint8ClampedArray||m instanceof Int8Array))throw new pr("Cannot pass non-string to std::string");var S=y?el(m):m.length,I=an(4+S+1),R=I+4;if(ze()[I>>>2>>>0]=S,y)Qr(m,R,S+1);else if(y)for(y=0;y<S;++y){var D=m.charCodeAt(y);if(255<D)throw jt(I),new pr("String has UTF-16 code units that do not fit in 8 bits");q()[R+y>>>0]=D}else for(y=0;y<S;++y)q()[R+y>>>0]=m[y];return p!==null&&p.push(jt,I),I},zd:fr,readValueFromPointer:ls,Ad(p){jt(p)}})}var hl=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,s0=(o,d)=>{for(var p=o>>1,m=p+d/2;!(p>=m)&&We()[p>>>0];)++p;if(32<(p<<=1)-o&&hl)return hl.decode(q().slice(o,p));for(p="",m=0;!(m>=d/2);++m){var y=ke()[o+2*m>>>1>>>0];if(y==0)break;p+=String.fromCharCode(y)}return p},a0=(o,d,p)=>{if(p??(p=2147483647),2>p)return 0;var m=d;p=(p-=2)<2*o.length?p/2:o.length;for(var y=0;y<p;++y){var S=o.charCodeAt(y);ke()[d>>>1>>>0]=S,d+=2}return ke()[d>>>1>>>0]=0,d-m},o0=o=>2*o.length,l0=(o,d)=>{for(var p=0,m="";!(p>=d/4);){var y=W()[o+4*p>>>2>>>0];if(y==0)break;++p,65536<=y?(y-=65536,m+=String.fromCharCode(55296|y>>10,56320|1023&y)):m+=String.fromCharCode(y)}return m},u0=(o,d,p)=>{if(d>>>=0,p??(p=2147483647),4>p)return 0;var m=d;p=m+p-4;for(var y=0;y<o.length;++y){var S=o.charCodeAt(y);if(55296<=S&&57343>=S&&(S=65536+((1023&S)<<10)|1023&o.charCodeAt(++y)),W()[d>>>2>>>0]=S,(d+=4)+4>p)break}return W()[d>>>2>>>0]=0,d-m},d0=o=>{for(var d=0,p=0;p<o.length;++p){var m=o.charCodeAt(p);55296<=m&&57343>=m&&++p,d+=4}return d};function c0(o,d,p){if(o>>>=0,d>>>=0,p=Ht(p>>>=0),d===2)var m=s0,y=a0,S=o0,I=R=>We()[R>>>1>>>0];else d===4&&(m=l0,y=u0,S=d0,I=R=>ze()[R>>>2>>>0]);rr(o,{name:p,fromWireType:R=>{for(var D,H=ze()[R>>>2>>>0],re=R+4,ce=0;ce<=H;++ce){var xe=R+4+ce*d;ce!=H&&I(xe)!=0||(re=m(re,xe-re),D===void 0?D=re:(D+="\0",D+=re),re=xe+d)}return jt(R),D},toWireType:(R,D)=>{if(typeof D!="string")throw new pr(`Cannot pass non-string to C++ string type ${p}`);var H=S(D),re=an(4+H+d);return ze()[re>>>2>>>0]=H/d,y(D,re+4,H+d),R!==null&&R.push(jt,re),re},zd:fr,readValueFromPointer:ls,Ad(R){jt(R)}})}function p0(o,d){rr(o>>>=0,{Qd:!0,name:d=Ht(d>>>0),zd:0,fromWireType:()=>{},toWireType:()=>{}})}function f0(o){gs(o>>>0,!u,1,!l,131072,!1),_t()}var us=o=>{if(!ee)try{if(o(),!(0<Ie))try{c?ys(O):tt(O)}catch(d){d instanceof me||d=="unwind"||w(0,d)}}catch(d){d instanceof me||d=="unwind"||w(0,d)}};function ds(o){o>>>=0,typeof Atomics.ge=="function"&&(Atomics.ge(W(),o>>>2,o).value.then(Zi),o+=128,Atomics.store(W(),o>>>2,1))}var Zi=()=>{var o=sn();o&&(ds(o),us(Fl))};function h0(o,d){(o>>>=0)==d>>>0?setTimeout(Zi):c?postMessage({Ed:o,yd:"checkMailbox"}):(o=Ft[o])&&o.postMessage({yd:"checkMailbox"})}var cs=[];function m0(o,d,p,m,y){for(d>>>=0,m/=2,cs.length=m,p=y>>>0>>>3,y=0;y<m;y++)cs[y]=fe[p+2*y]?fe[p+2*y+1]:et()[p+2*y+1>>>0];return(d?Y[d]:ob[o])(...cs)}var g0=()=>{Ie=0};function y0(o){o>>>=0,c?postMessage({yd:"cleanupThread",ee:o}):ot(Ft[o])}function _0(o){}var Xi=(o,d)=>{var p=ss[o];if(p===void 0)throw o=Pl(o),p=Ht(o),jt(o),new pr(`${d} has unknown type ${p}`);return p},ml=(o,d,p)=>{var m=[];return o=o.toWireType(m,p),m.length&&(ze()[d>>>2>>>0]=It(m)),o};function b0(o,d,p){return d>>>=0,p>>>=0,o=bt(o>>>0),d=Xi(d,"emval::as"),ml(d,p,o)}function w0(o,d){return d>>>=0,o=bt(o>>>0),(d=Xi(d,"emval::as")).toWireType(null,o)}var Yi=o=>{try{o()}catch(d){F(d)}},hr=0,Gt=null,gl=0,Ji=[],yl={},_l={},v0=0,ps=null,$0=[];function bl(o){return function(d){if(!ee){if(hr===0){var p=!1,m=!1;d((y=0)=>{if(!ee&&(gl=y,p=!0,m)){hr=2,Yi(()=>Vu(Gt)),typeof MainLoop<"u"&&MainLoop.Md&&MainLoop.resume(),y=!1;try{var S=function(){var D=W()[Gt+8>>>2>>>0];return D=L[_l[D]],--Ie,D()}()}catch(D){S=D,y=!0}var I=!1;if(!Gt){var R=ps;R&&(ps=null,(y?R.reject:R.resolve)(S),I=!0)}if(y&&!I)throw S}}),m=!0,p||(hr=1,Gt=function(){var y=an(65548),S=y+12;ze()[y>>>2>>>0]=S,ze()[y+4>>>2>>>0]=S+65536,S=Ji[0];var I=yl[S];return I===void 0&&(I=v0++,yl[S]=I,_l[I]=S),S=I,W()[y+8>>>2>>>0]=S,y}(),typeof MainLoop<"u"&&MainLoop.Md&&MainLoop.pause(),Yi(()=>Wu(Gt)))}else hr===2?(hr=0,Yi(qu),jt(Gt),Gt=null,$0.forEach(us)):F(`invalid state: ${hr}`);return gl}}(d=>{o().then(d)})}function x0(o){return o>>>=0,bl(async()=>{var d=await bt(o);return It(d)})}var en=[];function S0(o,d,p,m){return p>>>=0,m>>>=0,(o=en[o>>>0])(null,d=bt(d>>>0),p,m)}var T0={},tn=o=>{var d=T0[o];return d===void 0?Ht(o):d};function C0(o,d,p,m,y){return p>>>=0,m>>>=0,y>>>=0,(o=en[o>>>0])(d=bt(d>>>0),d[p=tn(p)],m,y)}var wl=()=>typeof globalThis=="object"?globalThis:Function("return this")();function k0(o){return(o>>>=0)==0?It(wl()):(o=tn(o),It(wl()[o]))}var I0=o=>{var d=en.length;return en.push(o),d},E0=(o,d)=>{for(var p=Array(o),m=0;m<o;++m)p[m]=Xi(ze()[d+4*m>>>2>>>0],"parameter "+m);return p},vl=(o,d)=>Object.defineProperty(d,"name",{value:o});function z0(o,d,p){var m=(d=E0(o,d>>>0)).shift();o--;var y=`return function (obj, func, destructorsRef, args) {
`,S=0,I=[];p===0&&I.push("obj");for(var R=["retType"],D=[m],H=0;H<o;++H)I.push("arg"+H),R.push("argType"+H),D.push(d[H]),y+=`  var arg${H} = argType${H}.readValueFromPointer(args${S?"+"+S:""});
`,S+=d[H].zd;return y+=`  var rv = ${p===1?"new func":"func.call"}(${I.join(", ")});
`,m.Qd||(R.push("emval_returnValue"),D.push(ml),y+=`  return emval_returnValue(retType, destructorsRef, rv);
`),R.push(y+`};
`),o=function(re){var ce=Function;if(!(ce instanceof Function))throw new TypeError(`new_ called with constructor type ${typeof ce} which is not a function`);var xe=vl(ce.name||"unknownFunctionName",function(){});return xe.prototype=ce.prototype,xe=new xe,(re=ce.apply(xe,re))instanceof Object?re:xe}(R)(...D),p=`methodCaller<(${d.map(re=>re.name).join(", ")}) => ${m.name}>`,I0(vl(p,o))}function A0(o){return o=tn(o>>>0),It(i[o])}function O0(o,d){return d>>>=0,o=bt(o>>>0),d=bt(d),It(o[d])}function R0(o){9<(o>>>=0)&&(ir[o+1]+=1)}function M0(){return It([])}function B0(o){o=bt(o>>>0);for(var d=Array(o.length),p=0;p<o.length;p++)d[p]=o[p];return It(d)}function D0(o){return It(tn(o>>>0))}function N0(){return It({})}function P0(o){for(var d=bt(o>>>=0);d.length;){var p=d.pop();d.pop()(p)}os(o)}function U0(o,d,p){d>>>=0,p>>>=0,o=bt(o>>>0),d=bt(d),p=bt(p),o[d]=p}function W0(o,d){return d>>>=0,o=(o=Xi(o>>>0,"_emval_take_value")).readValueFromPointer(d),It(o)}function L0(o,d){o=-9007199254740992>o||9007199254740992<o?NaN:Number(o),d>>>=0,o=new Date(1e3*o),W()[d>>>2>>>0]=o.getUTCSeconds(),W()[d+4>>>2>>>0]=o.getUTCMinutes(),W()[d+8>>>2>>>0]=o.getUTCHours(),W()[d+12>>>2>>>0]=o.getUTCDate(),W()[d+16>>>2>>>0]=o.getUTCMonth(),W()[d+20>>>2>>>0]=o.getUTCFullYear()-1900,W()[d+24>>>2>>>0]=o.getUTCDay(),o=(o.getTime()-Date.UTC(o.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,W()[d+28>>>2>>>0]=o}var $l=o=>o%4==0&&(o%100!=0||o%400==0),xl=[0,31,60,91,121,152,182,213,244,274,305,335],Sl=[0,31,59,90,120,151,181,212,243,273,304,334];function V0(o,d){o=-9007199254740992>o||9007199254740992<o?NaN:Number(o),d>>>=0,o=new Date(1e3*o),W()[d>>>2>>>0]=o.getSeconds(),W()[d+4>>>2>>>0]=o.getMinutes(),W()[d+8>>>2>>>0]=o.getHours(),W()[d+12>>>2>>>0]=o.getDate(),W()[d+16>>>2>>>0]=o.getMonth(),W()[d+20>>>2>>>0]=o.getFullYear()-1900,W()[d+24>>>2>>>0]=o.getDay();var p=($l(o.getFullYear())?xl:Sl)[o.getMonth()]+o.getDate()-1|0;W()[d+28>>>2>>>0]=p,W()[d+36>>>2>>>0]=-60*o.getTimezoneOffset(),p=new Date(o.getFullYear(),6,1).getTimezoneOffset();var m=new Date(o.getFullYear(),0,1).getTimezoneOffset();o=0|(p!=m&&o.getTimezoneOffset()==Math.min(m,p)),W()[d+32>>>2>>>0]=o}function q0(o){o>>>=0;var d=new Date(W()[o+20>>>2>>>0]+1900,W()[o+16>>>2>>>0],W()[o+12>>>2>>>0],W()[o+8>>>2>>>0],W()[o+4>>>2>>>0],W()[o>>>2>>>0],0),p=W()[o+32>>>2>>>0],m=d.getTimezoneOffset(),y=new Date(d.getFullYear(),6,1).getTimezoneOffset(),S=new Date(d.getFullYear(),0,1).getTimezoneOffset(),I=Math.min(S,y);return 0>p?W()[o+32>>>2>>>0]=+(y!=S&&I==m):0<p!=(I==m)&&(y=Math.max(S,y),d.setTime(d.getTime()+6e4*((0<p?I:y)-m))),W()[o+24>>>2>>>0]=d.getDay(),p=($l(d.getFullYear())?xl:Sl)[d.getMonth()]+d.getDate()-1|0,W()[o+28>>>2>>>0]=p,W()[o>>>2>>>0]=d.getSeconds(),W()[o+4>>>2>>>0]=d.getMinutes(),W()[o+8>>>2>>>0]=d.getHours(),W()[o+12>>>2>>>0]=d.getDate(),W()[o+16>>>2>>>0]=d.getMonth(),W()[o+20>>>2>>>0]=d.getYear(),o=d.getTime(),BigInt(isNaN(o)?-1:o/1e3)}function Tl(o,d,p,m,y,S,I){return c?ye(16,1,o,d,p,m,y,S,I):-52}function Cl(o,d,p,m,y,S){if(c)return ye(17,1,o,d,p,m,y,S)}var fi={},F0=()=>performance.timeOrigin+performance.now();function kl(o,d){if(c)return ye(18,1,o,d);if(fi[o]&&(clearTimeout(fi[o].id),delete fi[o]),!d)return 0;var p=setTimeout(()=>{delete fi[o],us(()=>ql(o,performance.timeOrigin+performance.now()))},d);return fi[o]={id:p,ke:d},0}function H0(o,d,p,m){o>>>=0,d>>>=0,p>>>=0,m>>>=0;var y=new Date().getFullYear(),S=new Date(y,0,1).getTimezoneOffset();y=new Date(y,6,1).getTimezoneOffset();var I=Math.max(S,y);ze()[o>>>2>>>0]=60*I,W()[d>>>2>>>0]=+(S!=y),o=(d=R=>{var D=Math.abs(R);return`UTC${0<=R?"-":"+"}${String(Math.floor(D/60)).padStart(2,"0")}${String(D%60).padStart(2,"0")}`})(S),d=d(y),y<S?(Qr(o,p,17),Qr(d,m,17)):(Qr(o,m,17),Qr(d,p,17))}var G0=()=>Date.now();function j0(o,d,p){return 0<=o&&3>=o?(o===0?o=Date.now():o=performance.timeOrigin+performance.now(),fe[p>>>0>>>3]=BigInt(Math.round(1e6*o)),0):28}var fs=[],Il=(o,d)=>{fs.length=0;for(var p;p=q()[o++>>>0];){var m=p!=105;d+=(m&=p!=112)&&d%8?4:0,fs.push(p==112?ze()[d>>>2>>>0]:p==106?fe[d>>>3]:p==105?W()[d>>>2>>>0]:et()[d>>>3>>>0]),d+=m?8:4}return fs};function K0(o,d,p){return o>>>=0,d=Il(d>>>0,p>>>0),Y[o](...d)}function Q0(o,d,p){return o>>>=0,d=Il(d>>>0,p>>>0),Y[o](...d)}var Z0=()=>{};function X0(o,d){return x(Qe(o>>>0,d>>>0))}var Y0=()=>{throw Ie+=1,"unwind"};function J0(){return 4294901760}var eb=()=>navigator.hardwareConcurrency;function tb(){return F("Cannot use emscripten_pc_get_function without -sUSE_OFFSET_CONVERTER"),0}function rb(o){o>>>=0;var d=q().length;if(o<=d||4294901760<o)return!1;for(var p=1;4>=p;p*=2){var m=d*(1+.2/p);m=Math.min(m,o+100663296);e:{m=(Math.min(4294901760,65536*Math.ceil(Math.max(o,m)/65536))-C.buffer.byteLength+65535)/65536|0;try{C.grow(m),De();var y=1;break e}catch{}y=void 0}if(y)return!0}return!1}var rn=()=>(F("Cannot use convertFrameToPC (needed by __builtin_return_address) without -sUSE_OFFSET_CONVERTER"),0),hi={},El=o=>{o.forEach(d=>{rn()})};function ib(){var o=Error().stack.toString().split(`
`);return o[0]=="Error"&&o.shift(),El(o),hi.Kd=rn(),hi.ae=o,hi.Kd}function nb(o,d,p){if(o>>>=0,d>>>=0,hi.Kd==o)var m=hi.ae;else(m=Error().stack.toString().split(`
`))[0]=="Error"&&m.shift(),El(m);for(var y=3;m[y]&&rn()!=o;)++y;for(o=0;o<p&&m[o+y];++o)W()[d+4*o>>>2>>>0]=rn();return o}var hs,ms={},zl=()=>{if(!hs){var o,d={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:"./this.program"};for(o in ms)ms[o]===void 0?delete d[o]:d[o]=ms[o];var p=[];for(o in d)p.push(`${o}=${d[o]}`);hs=p}return hs};function Al(o,d){if(c)return ye(19,1,o,d);o>>>=0,d>>>=0;var p=0;return zl().forEach((m,y)=>{var S=d+p;for(y=ze()[o+4*y>>>2>>>0]=S,S=0;S<m.length;++S)N()[y++>>>0]=m.charCodeAt(S);N()[y>>>0]=0,p+=m.length+1}),0}function Ol(o,d){if(c)return ye(20,1,o,d);o>>>=0,d>>>=0;var p=zl();ze()[o>>>2>>>0]=p.length;var m=0;return p.forEach(y=>m+=y.length+1),ze()[d>>>2>>>0]=m,0}function Rl(o){return c?ye(21,1,o):52}function Ml(o,d,p,m){return c?ye(22,1,o,d,p,m):52}function Bl(o,d,p,m){return c?ye(23,1,o,d,p,m):70}var sb=[null,[],[]];function Dl(o,d,p,m){if(c)return ye(24,1,o,d,p,m);d>>>=0,p>>>=0,m>>>=0;for(var y=0,S=0;S<p;S++){var I=ze()[d>>>2>>>0],R=ze()[d+4>>>2>>>0];d+=8;for(var D=0;D<R;D++){var H=q()[I+D>>>0],re=sb[o];H===0||H===10?((o===1?k:x)(Xo(re)),re.length=0):re.push(H)}y+=R}return ze()[m>>>2>>>0]=y,0}function ab(o){return o>>>0}c||function(){for(var o=i.numThreads-1;o--;)jo();pe.unshift(()=>{P++,function(d){c?d():Promise.all(Xe.map(pi)).then(d)}(()=>G())})}();for(var Nl=Array(256),nn=0;256>nn;++nn)Nl[nn]=String.fromCharCode(nn);pl=Nl,pr=i.BindingError=class extends Error{constructor(o){super(o),this.name="BindingError"}},i.InternalError=class extends Error{constructor(o){super(o),this.name="InternalError"}},ir.push(0,1,void 0,1,null,1,!0,1,!1,1),i.count_emval_handles=()=>ir.length/2-5-as.length;var L,ob=[Me,st,Ko,Yo,Jo,tl,rl,il,nl,sl,al,ol,ll,ul,dl,cl,Tl,Cl,kl,Al,Ol,Rl,Ml,Bl,Dl];(async function(){function o(m,y){return L=m.exports,L=function(){var S=L,I={};for(let[R,D]of Object.entries(S))I[R]=typeof D=="function"?(...H)=>{Ji.push(R);try{return D(...H)}finally{ee||(Ji.pop(),Gt&&hr===1&&Ji.length===0&&(hr=0,Ie+=1,Yi(Lu),typeof Fibers<"u"&&Fibers.le()))}}:D;return I}(),L=function(){var S=L,I=D=>H=>D(H)>>>0,R=D=>()=>D()>>>0;return(S=Object.assign({},S)).Cb=I(S.Cb),S.fc=R(S.fc),S.ic=I(S.ic),S.vc=I(S.vc),S.wc=R(S.wc),S.Ac=I(S.Ac),S}(),cr.push(L.jc),z=y,G(),L}P++;var d=te();if(i.instantiateWasm)return new Promise(m=>{i.instantiateWasm(d,(y,S)=>{o(y,S),m(y.exports)})});if(c)return new Promise(m=>{qt=y=>{var S=new WebAssembly.Instance(y,te());m(o(S,y))}});A??(A=i.locateFile?i.locateFile?i.locateFile("ort-wasm-simd-threaded.jsep.wasm",T):T+"ort-wasm-simd-threaded.jsep.wasm":new URL("/assets/ort-wasm-simd-threaded.jsep-D5Jk56-t.wasm",import.meta.url).href);try{var p=await async function(m){var y=A;if(!de&&typeof WebAssembly.instantiateStreaming=="function"&&!Ae(y))try{var S=fetch(y,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(S,m)}catch(I){x(`wasm streaming compile failed: ${I}`),x("falling back to ArrayBuffer instantiation")}return async function(I,R){try{var D=await async function(H){if(!de)try{var re=await g(H);return new Uint8Array(re)}catch{}if(H==A&&de)H=new Uint8Array(de);else{if(!_)throw"both async and sync fetching of the wasm failed";H=_(H)}return H}(I);return await WebAssembly.instantiate(D,R)}catch(H){x(`failed to asynchronously prepare wasm: ${H}`),F(H)}}(y,m)}(d);return o(p.instance,p.module)}catch(m){return s(m),Promise.reject(m)}})();var Pl=o=>(Pl=L.Cb)(o),Ul=()=>(Ul=L.Db)();i._OrtInit=(o,d)=>(i._OrtInit=L.Eb)(o,d),i._OrtGetLastError=(o,d)=>(i._OrtGetLastError=L.Fb)(o,d),i._OrtCreateSessionOptions=(o,d,p,m,y,S,I,R,D,H)=>(i._OrtCreateSessionOptions=L.Gb)(o,d,p,m,y,S,I,R,D,H),i._OrtAppendExecutionProvider=(o,d)=>(i._OrtAppendExecutionProvider=L.Hb)(o,d),i._OrtAddFreeDimensionOverride=(o,d,p)=>(i._OrtAddFreeDimensionOverride=L.Ib)(o,d,p),i._OrtAddSessionConfigEntry=(o,d,p)=>(i._OrtAddSessionConfigEntry=L.Jb)(o,d,p),i._OrtReleaseSessionOptions=o=>(i._OrtReleaseSessionOptions=L.Kb)(o),i._OrtCreateSession=(o,d,p)=>(i._OrtCreateSession=L.Lb)(o,d,p),i._OrtReleaseSession=o=>(i._OrtReleaseSession=L.Mb)(o),i._OrtGetInputOutputCount=(o,d,p)=>(i._OrtGetInputOutputCount=L.Nb)(o,d,p),i._OrtGetInputName=(o,d)=>(i._OrtGetInputName=L.Ob)(o,d),i._OrtGetOutputName=(o,d)=>(i._OrtGetOutputName=L.Pb)(o,d),i._OrtFree=o=>(i._OrtFree=L.Qb)(o),i._OrtCreateTensor=(o,d,p,m,y,S)=>(i._OrtCreateTensor=L.Rb)(o,d,p,m,y,S),i._OrtGetTensorData=(o,d,p,m,y)=>(i._OrtGetTensorData=L.Sb)(o,d,p,m,y),i._OrtReleaseTensor=o=>(i._OrtReleaseTensor=L.Tb)(o),i._OrtCreateRunOptions=(o,d,p,m)=>(i._OrtCreateRunOptions=L.Ub)(o,d,p,m),i._OrtAddRunConfigEntry=(o,d,p)=>(i._OrtAddRunConfigEntry=L.Vb)(o,d,p),i._OrtReleaseRunOptions=o=>(i._OrtReleaseRunOptions=L.Wb)(o),i._OrtCreateBinding=o=>(i._OrtCreateBinding=L.Xb)(o),i._OrtBindInput=(o,d,p)=>(i._OrtBindInput=L.Yb)(o,d,p),i._OrtBindOutput=(o,d,p,m)=>(i._OrtBindOutput=L.Zb)(o,d,p,m),i._OrtClearBoundOutputs=o=>(i._OrtClearBoundOutputs=L._b)(o),i._OrtReleaseBinding=o=>(i._OrtReleaseBinding=L.$b)(o),i._OrtRunWithBinding=(o,d,p,m,y)=>(i._OrtRunWithBinding=L.ac)(o,d,p,m,y),i._OrtRun=(o,d,p,m,y,S,I,R)=>(i._OrtRun=L.bc)(o,d,p,m,y,S,I,R),i._OrtEndProfiling=o=>(i._OrtEndProfiling=L.cc)(o),i._JsepOutput=(o,d,p)=>(i._JsepOutput=L.dc)(o,d,p),i._JsepGetNodeName=o=>(i._JsepGetNodeName=L.ec)(o);var sn=()=>(sn=L.fc)(),jt=i._free=o=>(jt=i._free=L.gc)(o),an=i._malloc=o=>(an=i._malloc=L.ic)(o),gs=(o,d,p,m,y,S)=>(gs=L.kc)(o,d,p,m,y,S),Wl=()=>(Wl=L.lc)(),Ll=(o,d,p,m,y)=>(Ll=L.mc)(o,d,p,m,y),Vl=o=>(Vl=L.nc)(o),ys=o=>(ys=L.oc)(o),ql=(o,d)=>(ql=L.pc)(o,d),Fl=()=>(Fl=L.qc)(),$e=(o,d)=>($e=L.rc)(o,d),mi=o=>(mi=L.sc)(o),Hl=(o,d)=>(Hl=L.tc)(o,d),be=o=>(be=L.uc)(o),_s=o=>(_s=L.vc)(o),ve=()=>(ve=L.wc)(),Gl=o=>(Gl=L.xc)(o),jl=o=>(jl=L.yc)(o),Kl=(o,d,p)=>(Kl=L.zc)(o,d,p),Ql=o=>(Ql=L.Ac)(o),Zl=i.dynCall_iii=(o,d,p)=>(Zl=i.dynCall_iii=L.Bc)(o,d,p),Xl=i.dynCall_vi=(o,d)=>(Xl=i.dynCall_vi=L.Cc)(o,d),bs=i.dynCall_ii=(o,d)=>(bs=i.dynCall_ii=L.Dc)(o,d),Yl=i.dynCall_vii=(o,d,p)=>(Yl=i.dynCall_vii=L.Ec)(o,d,p),Jl=i.dynCall_iiii=(o,d,p,m)=>(Jl=i.dynCall_iiii=L.Fc)(o,d,p,m),eu=i.dynCall_viii=(o,d,p,m)=>(eu=i.dynCall_viii=L.Gc)(o,d,p,m),tu=i.dynCall_iiiii=(o,d,p,m,y)=>(tu=i.dynCall_iiiii=L.Hc)(o,d,p,m,y),ru=i.dynCall_viiii=(o,d,p,m,y)=>(ru=i.dynCall_viiii=L.Ic)(o,d,p,m,y),iu=i.dynCall_viiiiii=(o,d,p,m,y,S,I)=>(iu=i.dynCall_viiiiii=L.Jc)(o,d,p,m,y,S,I),nu=i.dynCall_viiiiiii=(o,d,p,m,y,S,I,R)=>(nu=i.dynCall_viiiiiii=L.Kc)(o,d,p,m,y,S,I,R),su=i.dynCall_ji=(o,d)=>(su=i.dynCall_ji=L.Lc)(o,d),au=i.dynCall_v=o=>(au=i.dynCall_v=L.Mc)(o),ou=i.dynCall_viiiii=(o,d,p,m,y,S)=>(ou=i.dynCall_viiiii=L.Nc)(o,d,p,m,y,S),lu=i.dynCall_i=o=>(lu=i.dynCall_i=L.Oc)(o),uu=i.dynCall_fii=(o,d,p)=>(uu=i.dynCall_fii=L.Pc)(o,d,p),du=i.dynCall_viiiiiiii=(o,d,p,m,y,S,I,R,D)=>(du=i.dynCall_viiiiiiii=L.Qc)(o,d,p,m,y,S,I,R,D),cu=i.dynCall_viiiiiiiiii=(o,d,p,m,y,S,I,R,D,H,re)=>(cu=i.dynCall_viiiiiiiiii=L.Rc)(o,d,p,m,y,S,I,R,D,H,re),pu=i.dynCall_jiii=(o,d,p,m)=>(pu=i.dynCall_jiii=L.Sc)(o,d,p,m),fu=i.dynCall_dii=(o,d,p)=>(fu=i.dynCall_dii=L.Tc)(o,d,p),hu=i.dynCall_viiiiiiiii=(o,d,p,m,y,S,I,R,D,H)=>(hu=i.dynCall_viiiiiiiii=L.Uc)(o,d,p,m,y,S,I,R,D,H),mu=i.dynCall_viiiiiiiiiii=(o,d,p,m,y,S,I,R,D,H,re,ce)=>(mu=i.dynCall_viiiiiiiiiii=L.Vc)(o,d,p,m,y,S,I,R,D,H,re,ce),gu=i.dynCall_iiiiii=(o,d,p,m,y,S)=>(gu=i.dynCall_iiiiii=L.Wc)(o,d,p,m,y,S),yu=i.dynCall_iij=(o,d,p)=>(yu=i.dynCall_iij=L.Xc)(o,d,p),_u=i.dynCall_iiiiiiiiii=(o,d,p,m,y,S,I,R,D,H)=>(_u=i.dynCall_iiiiiiiiii=L.Yc)(o,d,p,m,y,S,I,R,D,H),bu=i.dynCall_iiiiiiiiiii=(o,d,p,m,y,S,I,R,D,H,re)=>(bu=i.dynCall_iiiiiiiiiii=L.Zc)(o,d,p,m,y,S,I,R,D,H,re),wu=i.dynCall_vij=(o,d,p)=>(wu=i.dynCall_vij=L._c)(o,d,p),vu=i.dynCall_iiif=(o,d,p,m)=>(vu=i.dynCall_iiif=L.$c)(o,d,p,m),$u=i.dynCall_iiij=(o,d,p,m)=>($u=i.dynCall_iiij=L.ad)(o,d,p,m),xu=i.dynCall_fiii=(o,d,p,m)=>(xu=i.dynCall_fiii=L.bd)(o,d,p,m),Su=i.dynCall_viiiiiiiiiiiii=(o,d,p,m,y,S,I,R,D,H,re,ce,xe,Le)=>(Su=i.dynCall_viiiiiiiiiiiii=L.cd)(o,d,p,m,y,S,I,R,D,H,re,ce,xe,Le),Tu=i.dynCall_vjiii=(o,d,p,m,y)=>(Tu=i.dynCall_vjiii=L.dd)(o,d,p,m,y),Cu=i.dynCall_vif=(o,d,p)=>(Cu=i.dynCall_vif=L.ed)(o,d,p),ku=i.dynCall_iiiiiii=(o,d,p,m,y,S,I)=>(ku=i.dynCall_iiiiiii=L.fd)(o,d,p,m,y,S,I),Iu=i.dynCall_iiiij=(o,d,p,m,y)=>(Iu=i.dynCall_iiiij=L.gd)(o,d,p,m,y),Eu=i.dynCall_iiiiiiii=(o,d,p,m,y,S,I,R)=>(Eu=i.dynCall_iiiiiiii=L.hd)(o,d,p,m,y,S,I,R),zu=i.dynCall_viiiiiiiiiiii=(o,d,p,m,y,S,I,R,D,H,re,ce,xe)=>(zu=i.dynCall_viiiiiiiiiiii=L.id)(o,d,p,m,y,S,I,R,D,H,re,ce,xe),Au=i.dynCall_diii=(o,d,p,m)=>(Au=i.dynCall_diii=L.jd)(o,d,p,m),Ou=i.dynCall_jiiii=(o,d,p,m,y)=>(Ou=i.dynCall_jiiii=L.kd)(o,d,p,m,y),Ru=i.dynCall_viiij=(o,d,p,m,y)=>(Ru=i.dynCall_viiij=L.ld)(o,d,p,m,y),Mu=i.dynCall_fiiii=(o,d,p,m,y)=>(Mu=i.dynCall_fiiii=L.md)(o,d,p,m,y),Bu=i.dynCall_viiif=(o,d,p,m,y)=>(Bu=i.dynCall_viiif=L.nd)(o,d,p,m,y),Du=i.dynCall_diiii=(o,d,p,m,y)=>(Du=i.dynCall_diiii=L.od)(o,d,p,m,y),Nu=i.dynCall_viiid=(o,d,p,m,y)=>(Nu=i.dynCall_viiid=L.pd)(o,d,p,m,y),Pu=i.dynCall_iiiijii=(o,d,p,m,y,S,I)=>(Pu=i.dynCall_iiiijii=L.qd)(o,d,p,m,y,S,I),Uu=i.dynCall_iiiiiij=(o,d,p,m,y,S,I)=>(Uu=i.dynCall_iiiiiij=L.rd)(o,d,p,m,y,S,I),Wu=o=>(Wu=L.sd)(o),Lu=()=>(Lu=L.td)(),Vu=o=>(Vu=L.ud)(o),qu=()=>(qu=L.vd)();function lb(o,d,p){var m=ve();try{Yl(o,d,p)}catch(y){if(be(m),y!==y+0)throw y;$e(1,0)}}function ub(o,d,p){var m=ve();try{return Zl(o,d,p)}catch(y){if(be(m),y!==y+0)throw y;$e(1,0)}}function db(o,d){var p=ve();try{Xl(o,d)}catch(m){if(be(p),m!==m+0)throw m;$e(1,0)}}function cb(o,d){var p=ve();try{return bs(o,d)}catch(m){if(be(p),m!==m+0)throw m;$e(1,0)}}function pb(o,d,p,m){var y=ve();try{return Jl(o,d,p,m)}catch(S){if(be(y),S!==S+0)throw S;$e(1,0)}}function fb(o,d,p,m,y){var S=ve();try{ru(o,d,p,m,y)}catch(I){if(be(S),I!==I+0)throw I;$e(1,0)}}function hb(o,d,p,m,y){var S=ve();try{return tu(o,d,p,m,y)}catch(I){if(be(S),I!==I+0)throw I;$e(1,0)}}function mb(o,d,p,m){var y=ve();try{eu(o,d,p,m)}catch(S){if(be(y),S!==S+0)throw S;$e(1,0)}}function gb(o,d,p,m,y,S,I){var R=ve();try{return ku(o,d,p,m,y,S,I)}catch(D){if(be(R),D!==D+0)throw D;$e(1,0)}}function yb(o){var d=ve();try{au(o)}catch(p){if(be(d),p!==p+0)throw p;$e(1,0)}}function _b(o,d,p){var m=ve();try{return yu(o,d,p)}catch(y){if(be(m),y!==y+0)throw y;$e(1,0)}}function bb(o,d,p,m,y,S){var I=ve();try{ou(o,d,p,m,y,S)}catch(R){if(be(I),R!==R+0)throw R;$e(1,0)}}function wb(o,d,p){var m=ve();try{wu(o,d,p)}catch(y){if(be(m),y!==y+0)throw y;$e(1,0)}}function vb(o,d,p,m,y,S,I){var R=ve();try{iu(o,d,p,m,y,S,I)}catch(D){if(be(R),D!==D+0)throw D;$e(1,0)}}function $b(o,d,p,m,y,S,I,R){var D=ve();try{nu(o,d,p,m,y,S,I,R)}catch(H){if(be(D),H!==H+0)throw H;$e(1,0)}}function xb(o,d,p,m,y,S){var I=ve();try{return gu(o,d,p,m,y,S)}catch(R){if(be(I),R!==R+0)throw R;$e(1,0)}}function Sb(o,d,p,m,y,S,I,R){var D=ve();try{return Eu(o,d,p,m,y,S,I,R)}catch(H){if(be(D),H!==H+0)throw H;$e(1,0)}}function Tb(o,d,p,m,y,S,I,R,D,H){var re=ve();try{hu(o,d,p,m,y,S,I,R,D,H)}catch(ce){if(be(re),ce!==ce+0)throw ce;$e(1,0)}}function Cb(o,d,p,m,y,S,I,R,D){var H=ve();try{du(o,d,p,m,y,S,I,R,D)}catch(re){if(be(H),re!==re+0)throw re;$e(1,0)}}function kb(o){var d=ve();try{return lu(o)}catch(p){if(be(d),p!==p+0)throw p;$e(1,0)}}function Ib(o,d,p,m,y,S,I,R,D,H){var re=ve();try{return _u(o,d,p,m,y,S,I,R,D,H)}catch(ce){if(be(re),ce!==ce+0)throw ce;$e(1,0)}}function Eb(o,d,p){var m=ve();try{return uu(o,d,p)}catch(y){if(be(m),y!==y+0)throw y;$e(1,0)}}function zb(o,d,p,m){var y=ve();try{return pu(o,d,p,m)}catch(S){if(be(y),S!==S+0)throw S;return $e(1,0),0n}}function Ab(o,d,p){var m=ve();try{return fu(o,d,p)}catch(y){if(be(m),y!==y+0)throw y;$e(1,0)}}function Ob(o,d,p,m,y,S,I,R,D,H,re,ce){var xe=ve();try{mu(o,d,p,m,y,S,I,R,D,H,re,ce)}catch(Le){if(be(xe),Le!==Le+0)throw Le;$e(1,0)}}function Rb(o,d,p,m,y,S,I,R,D,H,re){var ce=ve();try{cu(o,d,p,m,y,S,I,R,D,H,re)}catch(xe){if(be(ce),xe!==xe+0)throw xe;$e(1,0)}}function Mb(o,d,p,m,y,S,I,R,D,H,re){var ce=ve();try{return bu(o,d,p,m,y,S,I,R,D,H,re)}catch(xe){if(be(ce),xe!==xe+0)throw xe;$e(1,0)}}function Bb(o,d,p,m){var y=ve();try{return vu(o,d,p,m)}catch(S){if(be(y),S!==S+0)throw S;$e(1,0)}}function Db(o,d,p,m){var y=ve();try{return $u(o,d,p,m)}catch(S){if(be(y),S!==S+0)throw S;$e(1,0)}}function Nb(o,d,p,m){var y=ve();try{return xu(o,d,p,m)}catch(S){if(be(y),S!==S+0)throw S;$e(1,0)}}function Pb(o,d,p,m,y,S,I,R,D,H,re,ce,xe,Le){var Et=ve();try{Su(o,d,p,m,y,S,I,R,D,H,re,ce,xe,Le)}catch(gi){if(be(Et),gi!==gi+0)throw gi;$e(1,0)}}function Ub(o,d,p,m,y){var S=ve();try{Tu(o,d,p,m,y)}catch(I){if(be(S),I!==I+0)throw I;$e(1,0)}}function Wb(o,d,p){var m=ve();try{Cu(o,d,p)}catch(y){if(be(m),y!==y+0)throw y;$e(1,0)}}function Lb(o,d){var p=ve();try{return su(o,d)}catch(m){if(be(p),m!==m+0)throw m;return $e(1,0),0n}}function Vb(o,d,p,m,y){var S=ve();try{return Iu(o,d,p,m,y)}catch(I){if(be(S),I!==I+0)throw I;$e(1,0)}}function qb(o,d,p,m,y,S,I,R,D,H,re,ce,xe){var Le=ve();try{zu(o,d,p,m,y,S,I,R,D,H,re,ce,xe)}catch(Et){if(be(Le),Et!==Et+0)throw Et;$e(1,0)}}function Fb(o,d,p,m){var y=ve();try{return Au(o,d,p,m)}catch(S){if(be(y),S!==S+0)throw S;$e(1,0)}}function Hb(o,d,p,m,y){var S=ve();try{return Ou(o,d,p,m,y)}catch(I){if(be(S),I!==I+0)throw I;return $e(1,0),0n}}function Gb(o,d,p,m,y){var S=ve();try{Ru(o,d,p,m,y)}catch(I){if(be(S),I!==I+0)throw I;$e(1,0)}}function jb(o,d,p,m,y){var S=ve();try{return Mu(o,d,p,m,y)}catch(I){if(be(S),I!==I+0)throw I;$e(1,0)}}function Kb(o,d,p,m,y){var S=ve();try{Bu(o,d,p,m,y)}catch(I){if(be(S),I!==I+0)throw I;$e(1,0)}}function Qb(o,d,p,m,y){var S=ve();try{return Du(o,d,p,m,y)}catch(I){if(be(S),I!==I+0)throw I;$e(1,0)}}function Zb(o,d,p,m,y){var S=ve();try{Nu(o,d,p,m,y)}catch(I){if(be(S),I!==I+0)throw I;$e(1,0)}}function Xb(o,d,p,m,y,S,I){var R=ve();try{return Pu(o,d,p,m,y,S,I)}catch(D){if(be(R),D!==D+0)throw D;$e(1,0)}}function Yb(o,d,p,m,y,S,I){var R=ve();try{return Uu(o,d,p,m,y,S,I)}catch(D){if(be(R),D!==D+0)throw D;$e(1,0)}}return i.stackSave=()=>ve(),i.stackRestore=o=>be(o),i.stackAlloc=o=>_s(o),i.setValue=function(o,d,p="i8"){switch(p.endsWith("*")&&(p="*"),p){case"i1":case"i8":N()[o>>>0]=d;break;case"i16":ke()[o>>>1>>>0]=d;break;case"i32":W()[o>>>2>>>0]=d;break;case"i64":fe[o>>>3]=BigInt(d);break;case"float":it()[o>>>2>>>0]=d;break;case"double":et()[o>>>3>>>0]=d;break;case"*":ze()[o>>>2>>>0]=d;break;default:F(`invalid type for setValue: ${p}`)}},i.getValue=function(o,d="i8"){switch(d.endsWith("*")&&(d="*"),d){case"i1":case"i8":return N()[o>>>0];case"i16":return ke()[o>>>1>>>0];case"i32":return W()[o>>>2>>>0];case"i64":return fe[o>>>3];case"float":return it()[o>>>2>>>0];case"double":return et()[o>>>3>>>0];case"*":return ze()[o>>>2>>>0];default:F(`invalid type for getValue: ${d}`)}},i.UTF8ToString=Qe,i.stringToUTF8=Qr,i.lengthBytesUTF8=el,function o(){if(0<P)j=o;else if(c)n(i),E();else{for(;0<pe.length;)pe.shift()(i);0<P?j=o:(i.calledRun=!0,ee||(E(),n(i)))}}(),i.PTR_SIZE=4,a}),Cm=Ps,$d=(t=(e=globalThis.self)==null?void 0:e.name)==null?void 0:t.startsWith("em-pthread"),$d&&Ps()}),Us,xd,wt,km,cn,Sd,Td,Ws,Cd,Ls,Im,Vs,Em,vo=K(()=>{wo(),Us=typeof location>"u"?void 0:location.origin,xd=()=>{var e;return(e=import.meta.url)!=null&&e.startsWith("file:")?new URL(new URL("/assets/ort.bundle.min-OfoG_cy9.mjs",import.meta.url).href,Us).href:import.meta.url},wt=xd(),km=()=>{if(wt&&!wt.startsWith("blob:"))return wt.substring(0,wt.lastIndexOf("/")+1)},cn=(e,t)=>{try{let r=t??wt;return(r?new URL(e,r):new URL(e)).origin===Us}catch{return!1}},Sd=(e,t)=>{let r=t??wt;try{return(r?new URL(e,r):new URL(e)).href}catch{return}},Td=(e,t)=>`${t??"./"}${e}`,Ws=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},Cd=async e=>(await import(e)).default,Ls=(Y$(),Dn(xm)).default,Im=async()=>{if(!wt)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(cn(wt))return[void 0,Ls()];let e=await Ws(wt);return[e,Ls(e)]},Vs=(J$(),Dn(Tm)).default,Em=async(e,t,r)=>{if(!e&&!t&&Vs&&wt&&cn(wt))return[void 0,Vs];{let n="ort-wasm-simd-threaded.jsep.mjs",s=e??Sd(n,t),i=r&&s&&!cn(s,t),a=i?await Ws(s):s??Td(n,t);return[i?a:void 0,await Cd(a)]}}}),qs,pn,wi,Fs,kd,Id,$o,Ye,Gr=K(()=>{vo(),pn=!1,wi=!1,Fs=!1,kd=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},Id=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},$o=async e=>{if(pn)return Promise.resolve();if(wi)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(Fs)throw new Error("previous call to 'initializeWebAssembly()' failed.");wi=!0;let t=e.initTimeout,r=e.numThreads;if(!Id())throw new Error("WebAssembly SIMD is not supported in the current environment.");let n=kd();r>1&&!n&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+r+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=r=1);let s=e.wasmPaths,i=typeof s=="string"?s:void 0,a=s==null?void 0:s.mjs,l=(a==null?void 0:a.href)??a,u=s==null?void 0:s.wasm,c=(u==null?void 0:u.href)??u,f=e.wasmBinary,[h,g]=await Em(l,i,r>1),_=!1,b=[];if(t>0&&b.push(new Promise(w=>{setTimeout(()=>{_=!0,w()},t)})),b.push(new Promise((w,T)=>{let v={numThreads:r};if(f)v.wasmBinary=f;else if(c||i)v.locateFile=$=>c??i+$;else if(l&&l.indexOf("blob:")!==0)v.locateFile=$=>new URL($,l).href;else if(h){let $=km();$&&(v.locateFile=k=>$+k)}g(v).then($=>{wi=!1,pn=!0,qs=$,w(),h&&URL.revokeObjectURL(h)},$=>{wi=!1,Fs=!0,T($)})})),await Promise.race(b),_)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},Ye=()=>{if(pn&&qs)return qs;throw new Error("WebAssembly is not initialized yet.")}}),nt,Pn,Be,xo=K(()=>{Gr(),nt=(e,t)=>{let r=Ye(),n=r.lengthBytesUTF8(e)+1,s=r._malloc(n);return r.stringToUTF8(e,s,n),t.push(s),s},Pn=(e,t,r,n)=>{if(typeof e=="object"&&e!==null){if(r.has(e))throw new Error("Circular reference in options");r.add(e)}Object.entries(e).forEach(([s,i])=>{let a=t?t+s:s;if(typeof i=="object")Pn(i,a+".",r,n);else if(typeof i=="string"||typeof i=="number")n(a,i.toString());else if(typeof i=="boolean")n(a,i?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof i}`)})},Be=e=>{let t=Ye(),r=t.stackSave();try{let n=t.PTR_SIZE,s=t.stackAlloc(2*n);t._OrtGetLastError(s,s+n);let i=Number(t.getValue(s,n===4?"i32":"i64")),a=t.getValue(s+n,"*"),l=a?t.UTF8ToString(a):"";throw new Error(`${e} ERROR_CODE: ${i}, ERROR_MESSAGE: ${l}`)}finally{t.stackRestore(r)}}}),zm,e1=K(()=>{Gr(),xo(),zm=e=>{let t=Ye(),r=0,n=[],s=e||{};try{if((e==null?void 0:e.logSeverityLevel)===void 0)s.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log serverity level is not valid: ${e.logSeverityLevel}`);if((e==null?void 0:e.logVerbosityLevel)===void 0)s.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);(e==null?void 0:e.terminate)===void 0&&(s.terminate=!1);let i=0;return(e==null?void 0:e.tag)!==void 0&&(i=nt(e.tag,n)),r=t._OrtCreateRunOptions(s.logSeverityLevel,s.logVerbosityLevel,!!s.terminate,i),r===0&&Be("Can't create run options."),(e==null?void 0:e.extra)!==void 0&&Pn(e.extra,"",new WeakSet,(a,l)=>{let u=nt(a,n),c=nt(l,n);t._OrtAddRunConfigEntry(r,u,c)!==0&&Be(`Can't set a run config entry: ${a} - ${l}.`)}),[r,n]}catch(i){throw r!==0&&t._OrtReleaseRunOptions(r),n.forEach(a=>t._free(a)),i}}}),Ed,zd,Ad,Od,Am,t1=K(()=>{Gr(),xo(),Ed=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},zd=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},Ad=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(r=>(typeof r=="string"?r:r.name)==="webgpu")&&(e.enableMemPattern=!1)},Od=(e,t,r)=>{for(let n of t){let s=typeof n=="string"?n:n.name;switch(s){case"webnn":if(s="WEBNN",typeof n!="string"){let a=n==null?void 0:n.deviceType;if(a){let l=nt("deviceType",r),u=nt(a,r);Ye()._OrtAddSessionConfigEntry(e,l,u)!==0&&Be(`Can't set a session config entry: 'deviceType' - ${a}.`)}}break;case"webgpu":if(s="JS",typeof n!="string"){let a=n;if(a!=null&&a.preferredLayout){if(a.preferredLayout!=="NCHW"&&a.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${a.preferredLayout}`);let l=nt("preferredLayout",r),u=nt(a.preferredLayout,r);Ye()._OrtAddSessionConfigEntry(e,l,u)!==0&&Be(`Can't set a session config entry: 'preferredLayout' - ${a.preferredLayout}.`)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${s}`)}let i=nt(s,r);Ye()._OrtAppendExecutionProvider(e,i)!==0&&Be(`Can't append execution provider: ${s}.`)}},Am=e=>{let t=Ye(),r=0,n=[],s=e||{};Ad(s);try{let i=Ed(s.graphOptimizationLevel??"all"),a=zd(s.executionMode??"sequential"),l=typeof s.logId=="string"?nt(s.logId,n):0,u=s.logSeverityLevel??2;if(!Number.isInteger(u)||u<0||u>4)throw new Error(`log serverity level is not valid: ${u}`);let c=s.logVerbosityLevel??0;if(!Number.isInteger(c)||c<0||c>4)throw new Error(`log verbosity level is not valid: ${c}`);let f=typeof s.optimizedModelFilePath=="string"?nt(s.optimizedModelFilePath,n):0;if(r=t._OrtCreateSessionOptions(i,!!s.enableCpuMemArena,!!s.enableMemPattern,a,!!s.enableProfiling,0,l,u,c,f),r===0&&Be("Can't create session options."),s.executionProviders&&Od(r,s.executionProviders,n),s.enableGraphCapture!==void 0){if(typeof s.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${s.enableGraphCapture}`);let h=nt("enableGraphCapture",n),g=nt(s.enableGraphCapture.toString(),n);t._OrtAddSessionConfigEntry(r,h,g)!==0&&Be(`Can't set a session config entry: 'enableGraphCapture' - ${s.enableGraphCapture}.`)}if(s.freeDimensionOverrides)for(let[h,g]of Object.entries(s.freeDimensionOverrides)){if(typeof h!="string")throw new Error(`free dimension override name must be a string: ${h}`);if(typeof g!="number"||!Number.isInteger(g)||g<0)throw new Error(`free dimension override value must be a non-negative integer: ${g}`);let _=nt(h,n);t._OrtAddFreeDimensionOverride(r,_,g)!==0&&Be(`Can't set a free dimension override: ${h} - ${g}.`)}return s.extra!==void 0&&Pn(s.extra,"",new WeakSet,(h,g)=>{let _=nt(h,n),b=nt(g,n);t._OrtAddSessionConfigEntry(r,_,b)!==0&&Be(`Can't set a session config entry: ${h} - ${g}.`)}),[r,n]}catch(i){throw r!==0&&t._OrtReleaseSessionOptions(r)!==0&&Be("Can't release session options."),n.forEach(a=>t._free(a)),i}}}),ei,Nr,Pr,So,Un,To,Co,Ua,_e=K(()=>{ei=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},Nr=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},Pr=(e,t)=>{let r=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],n=typeof t=="number"?t:t.reduce((s,i)=>s*i,1);return r>0?Math.ceil(n*r):void 0},So=e=>{switch(e){case"float16":return typeof Float16Array<"u"&&Float16Array.from?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},Un=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},To=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Co=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Ua=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),ko,Om=K(()=>{wo(),ko=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let r=t.headers.get("Content-Length"),n=r?parseInt(r,10):0;if(n<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let s=t.body.getReader(),i;try{i=new ArrayBuffer(n)}catch(l){if(l instanceof RangeError){let u=Math.ceil(n/65536);i=new WebAssembly.Memory({initial:u,maximum:u}).buffer}else throw l}let a=0;for(;;){let{done:l,value:u}=await s.read();if(l)break;let c=u.byteLength;new Uint8Array(i,a,c).set(u),a+=c}return new Uint8Array(i,0,n)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),Rd,Md,Bd,Dd,Io,Nd,Oe,dr=K(()=>{_e(),Rd=["V","I","W","E","F"],Md=(e,t)=>{console.log(`[${Rd[e]},${new Date().toISOString()}]${t}`)},Io=(e,t)=>{Bd=e,Dd=t},Nd=(e,t)=>{let r=Un(e),n=Un(Bd);r>=n&&Md(r,typeof t=="function"?t():t)},Oe=(...e)=>{Dd&&Nd(...e)}}),Eo,Rm=K(()=>{_e(),Eo=(e,t)=>new(So(t))(e)}),zo=K(()=>{}),Hs,fn,hn,Pd,Ud,Gs,Wa,Wd,Mm,r1=K(()=>{dr(),zo(),Hs=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),fn=[],hn=e=>Math.ceil(Number(e)/16)*16,Pd=e=>{for(let t=0;t<fn.length;t++){let r=fn[t];if(e<=r)return r}return Math.ceil(e/16)*16},Ud=1,Gs=()=>Ud++,Wa=async(e,t,r,n)=>{let s=hn(r),i=e.device.createBuffer({size:s,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let a=e.getCommandEncoder();e.endComputePass(),a.copyBufferToBuffer(t,0,i,0,s),e.flush(),await i.mapAsync(GPUMapMode.READ);let l=i.getMappedRange();if(n){let u=n();return u.set(new Uint8Array(l,0,r)),u}else return new Uint8Array(l.slice(0,r))}finally{i.destroy()}},Wd=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of Hs)fn.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let r=t.buffer,n=t.byteOffset,s=t.byteLength,i=hn(s),a=this.storageCache.get(e);if(!a)throw new Error("gpu data for uploading does not exist");if(Number(a.originalSize)!==s)throw new Error(`inconsistent data size. gpu data size=${a.originalSize}, data size=${s}`);let l=this.backend.device.createBuffer({mappedAtCreation:!0,size:i,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),u=l.getMappedRange();new Uint8Array(u).set(new Uint8Array(r,n,s)),l.unmap();let c=this.backend.device.createCommandEncoder();c.copyBufferToBuffer(l,0,a.gpuData.buffer,0,i),this.backend.device.queue.submit([c.finish()]),l.destroy(),Oe("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let r=this.storageCache.get(e);if(!r)throw new Error("source gpu data for memcpy does not exist");let n=this.storageCache.get(t);if(!n)throw new Error("destination gpu data for memcpy does not exist");if(r.originalSize!==n.originalSize)throw new Error("inconsistent source and destination gpu data size");let s=hn(r.originalSize),i=this.backend.getCommandEncoder();this.backend.endComputePass(),i.copyBufferToBuffer(r.gpuData.buffer,0,n.gpuData.buffer,0,s)}registerExternalBuffer(e,t,r){let n;if(r){if(n=r[0],e===r[1])return Oe("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${n}, buffer is the same, skip.`),n;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else n=Gs();return this.storageCache.set(n,{gpuData:{id:n,type:0,buffer:e},originalSize:t}),Oe("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${n}, registered.`),n}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),Oe("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let r=Pd(e),n,s=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,i=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(s||i){let l=(s?this.freeBuffers:this.freeUniformBuffers).get(r);l?l.length>0?n=l.pop():n=this.backend.device.createBuffer({size:r,usage:t}):n=this.backend.device.createBuffer({size:r,usage:t})}else n=this.backend.device.createBuffer({size:r,usage:t});let a={id:Gs(),type:0,buffer:n};return this.storageCache.set(a.id,{gpuData:a,originalSize:Number(e)}),Oe("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${a.id}`),a}get(e){var t;return(t=this.storageCache.get(e))==null?void 0:t.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,r=this.storageCache.get(t);if(!r){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return Oe("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${r.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(r.gpuData.buffer),r.originalSize}async download(e,t){let r=this.storageCache.get(Number(e));if(!r)throw new Error("data does not exist");await Wa(this.backend,r.gpuData.buffer,r.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=Hs.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let r=this.freeBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let r=this.freeUniformBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(r=>{r.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(Oe("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(r=>{r.gpuData.buffer.destroy()}),this.storageCache=new Map)}},Mm=(...e)=>new Wd(...e)}),Ld,Ne,Ke=K(()=>{Ld=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},Ne=e=>new Ld(e)}),Vd,di,M,Wn,Bm,Dm,Nm,Se=K(()=>{Vd=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},di=class{static calcShape(e,t,r=!1){let n=e.length,s=t.length;if(n===0)return t;if(s===0)return e;let i=Math.max(e.length,t.length),a=new Array(i);if(r){if(n<2||s<2)return;let l=Vd.calcMatMulShape([e[n-2],e[n-1]],[t[s-2],t[s-1]]);if(l===void 0)return;[a[i-2],a[i-1]]=l}for(let l=r?3:1;l<=i;l++){let u=n-l<0?1:e[n-l],c=s-l<0?1:t[s-l];if(u!==c&&u>1&&c>1)return;let f=Math.max(u,c);if(u&&c)a[i-l]=Math.max(u,c);else{if(f>1)return;a[i-l]=0}}return a}static isValidBroadcast(e,t){let r=e.length,n=t.length;if(r>n)return!1;for(let s=1;s<=r;s++)if(e[r-s]!==1&&e[r-s]!==t[n-s])return!1;return!0}},M=class In{static size(t){return In.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,r=4){let n=t.length;if(n===0)return[];let s=new Array(n),i=n-1;for(;i>=0;){if(t[i]%r===0){s[i]=t[i]/r;break}if(r%t[i]!==0)throw new Error("cannot convert shape");s[i]=1,r/=t[i],i--}for(i--;i>=0;i--)s[i]=t[i];return s}static sizeFromDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return In.getSizeFromDimensionRange(t,r,t.length)}static sizeToDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeToDimension as Tensor has ${t.length} dimensions.`);return In.getSizeFromDimensionRange(t,0,r)}static getSizeFromDimensionRange(t,r,n){let s=1;for(let i=r;i<n;i++){if(t[i]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");s*=Number(t[i])}return s}static computeStrides(t){let r=t.length;if(r===0)return[];if(r===1)return[1];let n=new Array(r);n[r-1]=1,n[r-2]=t[r-1];for(let s=r-3;s>=0;--s)n[s]=n[s+1]*t[s+1];return n}static normalizeAxis(t,r){if(t<-r&&t>=r)throw new Error("unsupported axis for this operation.");return t<0?t+r:t}static normalizeAxes(t,r){return t.map(n=>this.normalizeAxis(n,r??t.length))}static sortBasedOnPerm(t,r){return r?r.map(n=>t[n]):t.slice().reverse()}static padShape(t,r){let n=t.length;return t.map((s,i)=>s+r[i]+r[i+n])}static areEqual(t,r){return t.length!==r.length?!1:t.every((n,s)=>n===r[s])}},Wn=class zi{static adjustPoolAttributes(t,r,n,s,i,a){if(!t&&n.length!==r.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let l=0;l<r.length-2;l++)l>=n.length?n.push(r[l+2]):n[l]=r[l+2];for(let l=0;l<n.length;l++)if(l<s.length){if(s[l]<0)throw new Error("strides should be greater than or equal to 1")}else s.push(1);for(let l=0;l<n.length;l++)if(l<i.length){if(i[l]<0)throw new Error("dilations should be greater than or equal to 1")}else i.push(1);for(let l=0;l<n.length*2;l++)if(l<a.length){if(a[l]<0)throw new Error("pad should be greater than or equal to 1")}else a.push(0);for(let l=0;l<n.length;l++){if(n[l]<=0)throw new Error("kernel shapes need to be greater than 0");if(a[l]>=n[l]||a[l+n.length]>=n[l])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,r,n,s,i,a,l){if(l){if(i.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(r.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(s.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let u=0;u<t.length-2;u++)zi.adjustPadAndReturnShape(t[u+(a?1:2)],r[u],n[u],s[u],i,u,u+t.length-2,l)}}static computePoolOutputShape(t,r,n,s,i,a,l){if(r.length<=0)throw new Error("input shape must be of size greater than 0");let u=[r[0],r[1]];return zi.computeShapeHelper(t,r,u,n,s,i,a,l),u}static computeConvOutputShape(t,r,n,s,i,a,l){if(t.length<=0||r.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let u=[t[0],r[0]];return zi.computeShapeHelper(!1,t,u,n,s,i,a,l),u}static computeShapeHelper(t,r,n,s,i,a,l,u){if(t)for(let c=0;c<r.length-2;c++)n.push(1);else for(let c=0;c<r.length-2;c++)n.push(zi.adjustPadAndReturnShape(r[c+2],s[c],i[c],a[c],l,c,c+r.length-2,u))}static adjustPadAndReturnShape(t,r,n,s,i,a,l,u){let c=n*(s-1)+1;if(u&&u!=="NOTSET")switch(u){case"VALID":return i[a]=0,i[l]=0,Math.floor((t-c)/r+1);case"SAME_LOWER":case"SAME_UPPER":if(n!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let f=((t+r-1)/r-1)*r+s-t;return i[a]=Math.floor(u==="SAME_LOWER"?(f+1)/2:f/2),i[l]=f-i[a],Math.floor((t+f-s)/r+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+i[a]+i[l]-c)/r+1)}},Bm=class{static getShapeOfGemmResult(e,t,r,n,s){if(e.length!==2||r.length!==2)throw new Error("shape need to be of size 2");let i,a,l;t?(i=e[1],a=e[0]):(i=e[0],a=e[1]);let u=-1;if(n?(l=r[0],u=1):(l=r[1],u=0),r[u]!==a)throw new Error("dimension mismatch");if(i<=0||l<=0||a<=0)throw new Error("invalid shape specified");if(s&&!di.isValidBroadcast(s,[i,l]))throw new Error("gemm: invalid bias shape for broadcast");return[i,l,a]}},Dm=-34028234663852886e22,Nm=34028234663852886e22}),ci,mn,Je,lt,oe,Ge,La,ri,xr,se,vi,U,ne,Pm,Ao,qd,Um,Te=K(()=>{_e(),Se(),ci=64,mn=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},Je=(e,t=1)=>{let r=mn(e,t);return typeof r=="string"?r:r[0]},lt=(e,t=1)=>{let r=mn(e,t);return typeof r=="string"?r:r[1]},oe=(...e)=>{let t=[];return e.forEach(r=>{r.length!==0&&t.push({type:12,data:r},{type:12,data:M.computeStrides(r)})}),t},Ge=e=>e%4===0?4:e%2===0?2:1,La=(e="f32",t,r="0")=>!t||t===1?`${e}(${r})`:`vec${t}<${e}>(${r})`,ri=(e,t,r)=>e==="f32"?r:t===1?`f32(${r})`:`vec${t}<f32>(${r})`,xr=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,se=(e,t,r,n)=>e.startsWith("uniforms.")&&r>4?typeof t=="string"?n==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:n==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:r>1?`${e}[${t}]`:e,vi=(e,t,r,n,s)=>{let i=typeof r=="number",a=i?r:r.length,l=[...new Array(a).keys()],u=a<2?"u32":a<=4?`vec${a}<u32>`:`array<u32, ${a}>`,c=mn(t,s),f=typeof c=="string"?c:c[1],h=typeof c=="string"?c:c[0],g={indices:u,value:f,storage:h,tensor:t},_=N=>typeof N=="string"?N:`${N}u`,b={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},w=i?"uniforms.":"",T=`${w}${e}_shape`,v=`${w}${e}_strides`,$="";for(let N=0;N<a-1;N++)$+=`
    let dim${N} = current / ${se(v,N,a)};
    let rest${N} = current % ${se(v,N,a)};
    indices[${N}] = dim${N};
    current = rest${N};
    `;$+=`indices[${a-1}] = current;`;let k=a<2?"":`
  fn o2i_${e}(offset: u32) -> ${g.indices} {
    var indices: ${g.indices};
    var current = offset;
    ${$}
    return indices;
  }`,x=N=>(b.offsetToIndices=!0,a<2?N:`o2i_${e}(${N})`),C=[];if(a>=2)for(let N=a-1;N>=0;N--)C.push(`${se(v,N,a)} * (indices[${N}])`);let z=a<2?"":`
  fn i2o_${e}(indices: ${g.indices}) -> u32 {
    return ${C.join("+")};
  }`,O=N=>(b.indicesToOffset=!0,a<2?N:`i2o_${e}(${N})`),B=(...N)=>a===0?"0u":`${g.indices}(${N.map(_).join(",")})`,V=(N,q)=>a<2?`${N}`:`${se(N,q,a)}`,X=(N,q,ke)=>a<2?`${N}=${ke};`:`${se(N,q,a)}=${ke};`,ue={},ge=(N,q)=>{b.broadcastedIndicesToOffset=!0;let ke=`${q.name}broadcastedIndicesTo${e}Offset`;if(ke in ue)return`${ke}(${N})`;let We=[];for(let W=a-1;W>=0;W--){let ze=q.indicesGet("outputIndices",W+q.rank-a);We.push(`${V(v,W)} * (${ze} % ${V(T,W)})`)}return ue[ke]=`fn ${ke}(outputIndices: ${q.type.indices}) -> u32 {
             return ${We.length>0?We.join("+"):"0u"};
           }`,`${ke}(${N})`},ae=(N,q)=>(()=>{if(g.storage===g.value)return`${e}[${N}]=${q};`;if(g.storage==="vec2<u32>"&&g.value==="i32")return`${e}[${N}]=vec2<u32>(u32(${q}), select(0u, 0xFFFFFFFFu, ${q} < 0));`;if(g.storage==="vec2<u32>"&&g.value==="u32")return`${e}[${N}]=vec2<u32>(u32(${q}), 0u);`;if(g.storage==="u32"&&g.value==="vec4<bool>")return`${e}[${N}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${q}));`;throw new Error(`not supported combination of storage type ${g.storage} and value type ${g.value} yet`)})(),he=N=>(()=>{if(g.storage===g.value)return`${e}[${N}]`;if(g.storage==="vec2<u32>"&&g.value==="i32")return`i32(${e}[${N}].x)`;if(g.storage==="vec2<u32>"&&g.value==="u32")return`u32(${e}[${N}].x)`;if(g.storage==="u32"&&g.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${N}] & 0xFFu), bool(${e}[${N}] & 0xFF00u), bool(${e}[${N}] & 0xFF0000u), bool(${e}[${N}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${g.storage} and value type ${g.value} yet`)})(),fe=a<2?"":`
  fn get_${e}ByIndices(indices: ${g.indices}) -> ${f} {
    return ${he(`i2o_${e}(indices)`)};
  }`,Q=a<2?"":(()=>{let N=l.map(ke=>`d${ke}: u32`).join(", "),q=l.map(ke=>`d${ke}`).join(", ");return`
  fn get_${e}(${N}) -> ${f} {
    return get_${e}ByIndices(${B(q)});
  }`})(),le=(...N)=>{if(N.length!==a)throw new Error(`indices length must be ${a}`);let q=N.map(_).join(",");return a===0?he("0u"):a===1?he(q[0]):(b.get=!0,b.getByIndices=!0,b.indicesToOffset=!0,`get_${e}(${q})`)},de=N=>a<2?he(N):(b.getByIndices=!0,b.indicesToOffset=!0,`get_${e}ByIndices(${N})`),ee=a<2?"":`
  fn set_${e}ByIndices(indices: ${g.indices}, value: ${f}) {
    ${ae(`i2o_${e}(indices)`,"value")}
  }`,Ae=a<2?"":(()=>{let N=l.map(ke=>`d${ke}: u32`).join(", "),q=l.map(ke=>`d${ke}`).join(", ");return`
  fn set_${e}(${N}, value: ${f}) {
    set_${e}ByIndices(${B(q)}, value);
  }`})();return{impl:()=>{let N=[],q=!1;return b.offsetToIndices&&(N.push(k),q=!0),b.indicesToOffset&&(N.push(z),q=!0),b.broadcastedIndicesToOffset&&(Object.values(ue).forEach(ke=>N.push(ke)),q=!0),b.set&&(N.push(Ae),q=!0),b.setByIndices&&(N.push(ee),q=!0),b.get&&(N.push(Q),q=!0),b.getByIndices&&(N.push(fe),q=!0),!i&&q&&N.unshift(`const ${T} = ${g.indices}(${r.join(",")});`,`const ${v} = ${g.indices}(${M.computeStrides(r).join(",")});`),N.join(`
`)},type:g,offsetToIndices:x,indicesToOffset:O,broadcastedIndicesToOffset:ge,indices:B,indicesGet:V,indicesSet:X,set:(...N)=>{if(N.length!==a+1)throw new Error(`indices length must be ${a}`);let q=N[a];if(typeof q!="string")throw new Error("value must be string");let ke=N.slice(0,a).map(_).join(",");return a===0?ae("0u",q):a===1?ae(ke[0],q):(b.set=!0,b.setByIndices=!0,b.indicesToOffset=!0,`set_${e}(${ke}, ${q})`)},setByOffset:ae,setByIndices:(N,q)=>a<2?ae(N,q):(b.setByIndices=!0,b.indicesToOffset=!0,`set_${e}ByIndices(${N}, ${q});`),get:le,getByOffset:he,getByIndices:de,usage:n,name:e,strides:v,shape:T,rank:a}},U=(e,t,r,n=1)=>vi(e,t,r,"input",n),ne=(e,t,r,n=1)=>vi(e,t,r,"output",n),Pm=(e,t,r)=>vi(e,t,r,"atomicOutput",1),Ao=(e,t,r,n=1)=>vi(e,t,r,"internal",n),qd=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=ci){let t=typeof e=="number"?e:e[0],r=typeof e=="number"?1:e[1],n=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||r>this.limits.maxComputeWorkgroupSizeY||n>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${r}, ${n}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*r*n>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${r}, ${n}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let s=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,i=s?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`,a=s?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${t*r*n}u + local_idx;`;return`@compute @workgroup_size(${t}, ${r}, ${n})
  fn main(${i}) {
    ${a}
  `}appendVariableUniforms(e){e.rank!==0&&(e.shape.startsWith("uniforms.")&&this.uniforms.push({name:e.shape.replace("uniforms.",""),type:"u32",length:e.rank}),e.strides.startsWith("uniforms.")&&this.uniforms.push({name:e.strides.replace("uniforms.",""),type:"u32",length:e.rank}))}declareVariable(e,t){if(e.usage==="internal")throw new Error("cannot use internal variable with declareVariable(). use registerInternalVariables() instead.");this.variables.push(e),this.appendVariableUniforms(e);let r=e.usage==="input"?"read":"read_write",n=e.usage==="atomicOutput"?"atomic<i32>":e.type.storage;return`@group(0) @binding(${t}) var<storage, ${r}> ${e.name}: array<${n}>;`}declareVariables(...e){return e.map(t=>this.declareVariable(t,this.variableIndex++)).join(`
`)}registerInternalVariable(e){if(e.usage!=="internal")throw new Error("cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.");this.internalVariables.push(e),this.appendVariableUniforms(e)}registerInternalVariables(...e){return e.forEach(t=>this.registerInternalVariable(t)),this}registerUniform(e,t,r=1){return this.uniforms.push({name:e,type:t,length:r}),this}registerUniforms(e){return this.uniforms=this.uniforms.concat(e),this}uniformDeclaration(){if(this.uniforms.length===0)return"";let e=[];for(let{name:t,type:r,length:n}of this.uniforms)if(n&&n>4)r==="f16"?e.push(`@align(16) ${t}:array<mat2x4<${r}>, ${Math.ceil(n/8)}>`):e.push(`${t}:array<vec4<${r}>, ${Math.ceil(n/4)}>`);else{let s=n==null||n===1?r:`vec${n}<${r}>`;e.push(`${t}:${s}`)}return`
      struct Uniforms { ${e.join(", ")} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(e=>e.impl()).join(`
`)+this.internalVariables.map(e=>e.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},Um=(e,t)=>new qd(e,t)}),Fd,js,Hd,Gd,jd,Kd,kt,Wm,Lm,kr=K(()=>{_e(),Se(),Ke(),Te(),Fd=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},js=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),Hd=(e,t)=>M.sortBasedOnPerm(e,js(e.length,t)),Gd=(e,t,r,n)=>{let s=`fn perm(i: ${n.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`;for(let i=0;i<t;++i)s+=`a[${e[i]}]=i[${i}];`;return s+="return a;}"},jd=(e,t)=>{let r=[],n=[];for(let s=0;s<e.length;++s)e[s]!==1&&r.push(e[s]),e[t[s]]!==1&&n.push(t[s]);return{newShape:r,newPerm:n}},Kd=(e,t)=>{let r=0;for(let n=0;n<e.length;++n)if(t[e[n]]!==1){if(e[n]<r)return!1;r=e[n]}return!0},kt=(e,t)=>{let r=e.dataType,n=e.dims.length,s=js(n,t),i=Hd(e.dims,s),a=e.dims,l=i,u=n<2||Kd(s,e.dims),c;if(u)return c=b=>{let w=U("input",r,a,4),T=ne("output",r,l,4);return`
  ${b.registerUniform("output_size","u32").declareVariables(w,T)}
  ${b.mainStart()}
    ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let b=M.size(i);return{outputs:[{dims:i,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(b/64/4)},programUniforms:[{type:12,data:Math.ceil(b/4)}]}},getShaderSource:c};let{newShape:f,newPerm:h}=jd(e.dims,s),g=M.areEqual(h,[2,3,1]),_=M.areEqual(h,[3,1,2]);if(f.length===2||g||_){a=g?[f[0],f[1]*f[2]]:_?[f[0]*f[1],f[2]]:f,l=[a[1],a[0]];let b=16;return c=w=>{let T=U("a",r,a.length),v=ne("output",r,l.length);return`
  ${w.registerUniform("output_size","u32").declareVariables(T,v)}
  var<workgroup> tile : array<array<${v.type.value}, ${b+1}>, ${b}>;
  ${w.mainStart([b,b,1])}
    let stride = (uniforms.output_shape[1] - 1) / ${b} + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * ${b}u + local_id.x;
    let input_row = workgroup_id_x * ${b}u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${T.getByIndices(`${T.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * ${b}u + local_id.x;
    let output_row = workgroup_id_y * ${b}u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${v.setByIndices(`${v.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let w=M.size(i);return{outputs:[{dims:i,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(l[1]/b),y:Math.ceil(l[0]/b)},programUniforms:[{type:12,data:w},...oe(a,l)]}},getShaderSource:c}}return c=b=>{let w=U("a",r,a.length),T=ne("output",r,l.length);return`
  ${b.registerUniform("output_size","u32").declareVariables(w,T)}

  ${Gd(s,n,w,T)}

  ${b.mainStart()}
    ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${T.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${T.setByOffset("global_idx",w.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let b=M.size(i);return{outputs:[{dims:i,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(b/64)},programUniforms:[{type:12,data:b},...oe(a,l)]}},getShaderSource:c}},Wm=(e,t)=>{Fd(e.inputs,t.perm),e.compute(kt(e.inputs[0],t.perm))},Lm=e=>Ne({perm:e.perm})}),Qd,Zd,Xd,Yd,Jd,ec,tc,rc,ic,nc,Rt,Vm,qm,Fm,Hm,Gm,jm,Km,Qm,Zm,Xm,i1=K(()=>{_e(),Se(),Te(),Oo(),kr(),Qd={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},Zd={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},Xd={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},Yd={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},Jd=(e,t)=>{let r=[];for(let n=t-e;n<t;++n)r.push(n);return r},ec=(e,t)=>{let r=[],n=e.length;for(let i=0;i<n;i++)t.indexOf(i)===-1&&r.push(e[i]);let s=t.map(i=>e[i]);return[r,s]},tc=(e,t)=>{let r=e.length+t.length,n=[],s=0;for(let i=0;i<r;i++)t.indexOf(i)===-1?n.push(e[s++]):n.push(1);return n},rc=(e,t)=>{for(let r=0;r<e.length;++r)if(e[e.length-r-1]!==t-1-r)return!1;return!0},ic=(e,t)=>{let r=[];if(!rc(e,t)){for(let n=0;n<t;++n)e.indexOf(n)===-1&&r.push(n);e.forEach(n=>r.push(n))}return r},nc=(e,t,r,n,s,i,a)=>{let l=r[0].dims,u=M.size(i),c=M.size(a),f=U("_A",r[0].dataType,l),h=ne("output",s,i),g=64;u===1&&(g=256);let _=`
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

          var bestValue = f32(${Xd[n]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${g}) {
           let candidate = f32(${f.getByOffset("offset + k")});
           bestValue = ${Qd[n]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${g}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${Zd[n]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${h.setByOffset("outputIndex",`${n==="mean"?`${h.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${h.type.storage}(${Yd[n]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${g}`,inputDependencies:["type"]},getShaderSource:b,getRunData:()=>({outputs:[{dims:i,dataType:s}],dispatchGroup:{x:u},programUniforms:[{type:12,data:c}]})}},Rt=(e,t,r,n)=>{let s=e.inputs.length===1?r:Va(e.inputs,r),i=s.axes;i.length===0&&!s.noopWithEmptyAxes&&(i=e.inputs[0].dims.map((_,b)=>b));let a=M.normalizeAxes(i,e.inputs[0].dims.length),l=a,u=e.inputs[0],c=ic(l,e.inputs[0].dims.length);c.length>0&&(u=e.compute(kt(e.inputs[0],c),{inputs:[0],outputs:[-1]})[0],l=Jd(l.length,u.dims.length));let[f,h]=ec(u.dims,l),g=f;s.keepDims&&(g=tc(f,a)),e.compute(nc(t,s.cacheKey,[u],n,e.inputs[0].dataType,g,h),{inputs:[u]})},Vm=(e,t)=>{Rt(e,"ReduceMeanShared",t,"mean")},qm=(e,t)=>{Rt(e,"ReduceL1Shared",t,"l1")},Fm=(e,t)=>{Rt(e,"ReduceL2Shared",t,"l2")},Hm=(e,t)=>{Rt(e,"ReduceLogSumExpShared",t,"logSumExp")},Gm=(e,t)=>{Rt(e,"ReduceMaxShared",t,"max")},jm=(e,t)=>{Rt(e,"ReduceMinShared",t,"min")},Km=(e,t)=>{Rt(e,"ReduceProdShared",t,"prod")},Qm=(e,t)=>{Rt(e,"ReduceSumShared",t,"sum")},Zm=(e,t)=>{Rt(e,"ReduceSumSquareShared",t,"sumSquare")},Xm=(e,t)=>{Rt(e,"ReduceLogSumShared",t,"logSum")}}),Mt,sc,Ln,Va,Bt,ac,oc,lc,uc,dc,cc,pc,fc,hc,mc,Dt,Ym,Jm,eg,tg,rg,ig,ng,sg,ag,og,Oo=K(()=>{_e(),Se(),Ke(),Te(),i1(),Mt=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},sc=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],Ln=(e,t,r,n,s,i,a=!1,l=!1)=>{let u=[],c=r[0].dims,f=c.length,h=M.normalizeAxes(s,f),g=!l&&h.length===0;c.forEach((w,T)=>{g||h.indexOf(T)>=0?a&&u.push(1):u.push(w)});let _=u.length,b=M.size(u);return{name:e,shaderCache:t,getShaderSource:w=>{let T=[],v=U("_A",r[0].dataType,f),$=ne("output",i,_),k=n(v,$,h),x=k[2];for(let C=0,z=0;C<f;C++)g||h.indexOf(C)>=0?(a&&z++,x=`for(var j${C}: u32 = 0; j${C} < ${c[C]}; j${C}++) {
                  ${k[2].includes("last_index")?`let last_index = j${C};`:""}
                  ${v.indicesSet("input_indices",C,`j${C}`)}
                  ${x}
                }`):(T.push(`${v.indicesSet("input_indices",C,$.indicesGet("output_indices",z))};`),z++);return`

        ${w.registerUniform("output_size","u32").declareVariables(v,$)}

        ${w.mainStart()}
          ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${v.type.indices};
          let output_indices = ${$.offsetToIndices("global_idx")};

          ${T.join(`
`)}
          ${k[0]}       // init ops for reduce max/min
          ${k[1]}
          ${x}
          ${k[3]}
          ${k.length===4?$.setByOffset("global_idx","value"):k.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:u,dataType:i}],dispatchGroup:{x:Math.ceil(b/64)},programUniforms:[{type:12,data:b},...oe(c,u)]})}},Va=(e,t)=>{let r=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(n=>r.push(Number(n))),Ne({axes:r,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},Bt=(e,t,r,n)=>{let s=e.inputs,i=s.length===1?r:Va(s,r);e.compute(Ln(t,{hint:i.cacheKey,inputDependencies:["rank"]},[s[0]],i.noopWithEmptyAxes&&i.axes.length===0?sc:n,i.axes,s[0].dataType,i.keepDims,i.noopWithEmptyAxes),{inputs:[0]})},ac=(e,t)=>{Mt(e.inputs),Bt(e,"ReduceLogSum",t,(r,n)=>[`var value = ${n.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,"value = log(value);"])},oc=(e,t)=>{Mt(e.inputs),Bt(e,"ReduceL1",t,(r,n)=>[`var value = ${n.type.storage}(0);`,"",`value += abs(${r.getByIndices("input_indices")});`,""])},lc=(e,t)=>{Mt(e.inputs),Bt(e,"ReduceL2",t,(r,n)=>[`var t = ${n.type.value}(0); var value = ${n.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},uc=(e,t)=>{Mt(e.inputs),Bt(e,"ReduceLogSumExp",t,(r,n)=>[`var value = ${n.type.storage}(0);`,"",`value += exp(${r.getByIndices("input_indices")});`,"value = log(value);"])},dc=(e,t)=>{Mt(e.inputs),Bt(e,"ReduceMax",t,(r,n,s)=>{let i=[];for(let a=0;a<r.rank;a++)(s.indexOf(a)>=0||s.length===0)&&i.push(r.indicesSet("input_indices",a,0));return[`${i.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = max(value, ${r.getByIndices("input_indices")});`,""]})},cc=(e,t)=>{Mt(e.inputs),Bt(e,"ReduceMean",t,(r,n,s)=>{let i=1;for(let a=0;a<r.rank;a++)(s.indexOf(a)>=0||s.length===0)&&(i*=e.inputs[0].dims[a]);return["var sum = f32(0);","",`sum += f32(${r.getByIndices("input_indices")});`,`let value = ${n.type.value}(sum / ${i});`]})},pc=(e,t)=>{Mt(e.inputs),Bt(e,"ReduceMin",t,(r,n,s)=>{let i=[];for(let a=0;a<r.rank;a++)(s.indexOf(a)>=0||s.length===0)&&i.push(`input_indices[${a}] = 0;`);return[`${i.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = min(value, ${r.getByIndices("input_indices")});`,""]})},fc=(e,t)=>{Mt(e.inputs),Bt(e,"ReduceProd",t,(r,n)=>[`var value = ${n.type.storage}(1);`,"",`value *= ${r.getByIndices("input_indices")};`,""])},hc=(e,t)=>{Mt(e.inputs),Bt(e,"ReduceSum",t,(r,n)=>[`var value = ${n.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,""])},mc=(e,t)=>{Mt(e.inputs),Bt(e,"ReduceSumSquare",t,(r,n)=>[`var t = ${n.type.value}(0); var value = ${n.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += t * t;`,""])},Dt=(e,t,r)=>{if(t.length===0)return r;let n=1,s=1;for(let i=0;i<t.length;i++)t.indexOf(i)===-1?n*=e[i]:s*=e[i];return s<32&&n>1024},Ym=(e,t)=>{Dt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?cc(e,t):Vm(e,t)},Jm=(e,t)=>{Dt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?oc(e,t):qm(e,t)},eg=(e,t)=>{Dt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?lc(e,t):Fm(e,t)},tg=(e,t)=>{Dt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?uc(e,t):Hm(e,t)},rg=(e,t)=>{Dt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?dc(e,t):Gm(e,t)},ig=(e,t)=>{Dt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?pc(e,t):jm(e,t)},ng=(e,t)=>{Dt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?fc(e,t):Km(e,t)},sg=(e,t)=>{Dt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?hc(e,t):Qm(e,t)},ag=(e,t)=>{Dt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?mc(e,t):Zm(e,t)},og=(e,t)=>{Dt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?ac(e,t):Xm(e,t)}}),Ks,lg,ug,qa,n1=K(()=>{_e(),Ke(),Oo(),Ks=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},lg=(e,t)=>{Ks(e.inputs);let r=(n,s,i)=>{let a=[];for(let l=0;l<n.rank;l++)(i.indexOf(l)>=0||i.length===0)&&a.push(`input_indices[${l}] = 0;`);return[`${a.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${n.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${n.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",s.setByOffset("global_idx","best_index")]};e.compute(Ln("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},ug=(e,t)=>{Ks(e.inputs);let r=(n,s,i)=>{let a=[];for(let l=0;l<n.rank;l++)(i.indexOf(l)>=0||i.length===0)&&a.push(`input_indices[${l}] = 0;`);return[`${a.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${n.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${n.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",s.setByOffset("global_idx","best_index")]};e.compute(Ln("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},qa=e=>Ne(e)}),gc,gn,yc,_c,bc,Hi,wc,dg,Ro=K(()=>{_e(),Se(),zo(),Te(),gc=(e,t)=>{let r=e[0],n=e[1],s=e[2],i=e[3],a=e[4],l=e[5];if(a&&l)throw new Error("Attention cannot have both past and attention_bias");if(r.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let u=r.dims[0],c=r.dims[1],f=r.dims[2];if(s.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(n.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(n.dims[0]!==f)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(s.dims[0]!==n.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let h=s.dims[0]/3,g=h,_=g;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let k of t.qkvHiddenSizes)if(k%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");h=t.qkvHiddenSizes[0],g=t.qkvHiddenSizes[1],_=t.qkvHiddenSizes[2]}let b=c;if(h!==g)throw new Error("qkv_hidden_sizes first element should be same as the second");if(s.dims[0]!==h+g+_)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let w=0;if(a){if(g!==_)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(a.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(a.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(a.dims[1]!==u)throw new Error('Input "past" second dimension must be batch_size');if(a.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(a.dims[4]!==g/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(w=a.dims[3])}let T=b+w,v=-1,$=0;if(i)throw new Error("Mask not supported");if(a)throw new Error("past is not supported");if(l){if(l.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(l.dims[0]!==u||l.dims[1]!==t.numHeads||l.dims[2]!==c||l.dims[3]!==T)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:u,sequenceLength:c,pastSequenceLength:w,kvSequenceLength:b,totalSequenceLength:T,maxSequenceLength:v,inputHiddenSize:f,hiddenSize:h,vHiddenSize:_,headSize:Math.floor(h/t.numHeads),vHeadSize:Math.floor(_/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:$,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},gn=(e,t,r)=>t&&e?`
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
    `,yc=(e,t,r,n,s,i,a,l)=>{let u=Ge(a?1:i),c=64,f=i/u;f<c&&(c=32);let h=Math.ceil(i/u/c),g=[{type:12,data:t},{type:12,data:r},{type:12,data:n},{type:12,data:s},{type:12,data:f},{type:12,data:h}],_=Je(e.dataType,u),b=lt(1,u),w=["type"];a&&w.push("type"),l&&w.push("type");let T=v=>{let $=ne("x",e.dataType,e.dims,u),k=[$],x=a?U("seq_lens",a.dataType,a.dims):void 0;x&&k.push(x);let C=l?U("total_sequence_length_input",l.dataType,l.dims):void 0;C&&k.push(C);let z=lt(e.dataType),O=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${c}>;
  var<workgroup> thread_sum: array<f32, ${c}>;
  ${v.registerUniforms(O).declareVariables(...k)}
  ${v.mainStart([c,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${gn(x,C,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${c}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${a?"u32(past_sequence_length + workgroup_id.y + 1)":"total_sequence_length"};
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
        x[offset + i] = ${$.type.value}(${z}(1.0) / ${z}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${b}(x[offset + i]);
        x[offset + i] = ${$.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${a?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${$.type.value}(${z}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${c};${_};${u}`,inputDependencies:w},getShaderSource:T,getRunData:()=>({outputs:[],dispatchGroup:{x:Math.ceil(i/c),y:s,z:t*r},programUniforms:g})}},_c=(e,t,r,n,s,i,a,l,u)=>{let c=a+i.kvSequenceLength,f=[i.batchSize,i.numHeads,i.sequenceLength,c],h=e>1&&n,g=i.kvNumHeads?i.kvNumHeads:i.numHeads,_=h?[i.batchSize,g,c,i.headSize]:void 0,b=i.nReps?i.nReps:1,w=i.scale===0?1/Math.sqrt(i.headSize):i.scale,T=Ge(i.headSize),v=i.headSize/T,$=12,k={x:Math.ceil(c/$),y:Math.ceil(i.sequenceLength/$),z:i.batchSize*i.numHeads},x=[{type:12,data:i.sequenceLength},{type:12,data:v},{type:12,data:c},{type:12,data:i.numHeads},{type:12,data:i.headSize},{type:1,data:w},{type:12,data:a},{type:12,data:i.kvSequenceLength},{type:12,data:b}],C=h&&n&&M.size(n.dims)>0,z=["type","type"];C&&z.push("type"),s&&z.push("type"),l&&z.push("type"),u&&z.push("type");let O=[{dims:f,dataType:t.dataType,gpuDataType:0}];h&&O.push({dims:_,dataType:t.dataType,gpuDataType:0});let B=V=>{let X=U("q",t.dataType,t.dims,T),ue=U("key",r.dataType,r.dims,T),ge=[X,ue];if(C){let ee=U("past_key",n.dataType,n.dims,T);ge.push(ee)}s&&ge.push(U("attention_bias",s.dataType,s.dims));let ae=l?U("seq_lens",l.dataType,l.dims):void 0;ae&&ge.push(ae);let he=u?U("total_sequence_length_input",u.dataType,u.dims):void 0;he&&ge.push(he);let fe=ne("output",t.dataType,f),Q=[fe];h&&Q.push(ne("present_key",t.dataType,_,T));let le=lt(1,T),de=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${$}u;

  var<workgroup> tileQ: array<${X.type.storage}, ${$*$}>;
  var<workgroup> tileK: array<${X.type.storage}, ${$*$}>;
  ${V.registerUniforms(de).declareVariables(...ge,...Q)}
  ${V.mainStart([$,$,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${b===1?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${b===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${gn(ae,he,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${C&&h?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${h?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${le}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${C&&h?`
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
      var sum: f32 = ${(()=>{switch(T){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${T}`)}})()};
        output[outputIdx] = ${fe.type.value} (sum * uniforms.alpha) + ${s?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${T};${s!==void 0};${n!==void 0};${e}`,inputDependencies:z},getRunData:()=>({outputs:O,dispatchGroup:k,programUniforms:x}),getShaderSource:B}},bc=(e,t,r,n,s,i,a=void 0,l=void 0)=>{let u=i+s.kvSequenceLength,c=s.nReps?s.nReps:1,f=s.vHiddenSize*c,h=e>1&&n,g=s.kvNumHeads?s.kvNumHeads:s.numHeads,_=h?[s.batchSize,g,u,s.headSize]:void 0,b=[s.batchSize,s.sequenceLength,f],w=12,T={x:Math.ceil(s.vHeadSize/w),y:Math.ceil(s.sequenceLength/w),z:s.batchSize*s.numHeads},v=[{type:12,data:s.sequenceLength},{type:12,data:u},{type:12,data:s.vHeadSize},{type:12,data:s.numHeads},{type:12,data:s.headSize},{type:12,data:f},{type:12,data:i},{type:12,data:s.kvSequenceLength},{type:12,data:c}],$=h&&n&&M.size(n.dims)>0,k=["type","type"];$&&k.push("type"),a&&k.push("type"),l&&k.push("type");let x=[{dims:b,dataType:t.dataType,gpuDataType:0}];h&&x.push({dims:_,dataType:t.dataType,gpuDataType:0});let C=z=>{let O=U("probs",t.dataType,t.dims),B=U("v",r.dataType,r.dims),V=[O,B];$&&V.push(U("past_value",n.dataType,n.dims));let X=a?U("seq_lens",a.dataType,a.dims):void 0;a&&V.push(X);let ue=l?U("total_sequence_length_input",l.dataType,l.dims):void 0;l&&V.push(ue);let ge=[ne("output",t.dataType,b)];h&&ge.push(ne("present_value",t.dataType,_));let ae=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${w}u;
  var<workgroup> tileQ: array<${O.type.value}, ${w*w}>;
  var<workgroup> tileV: array<${O.type.value}, ${w*w}>;
  ${z.registerUniforms(ae).declareVariables(...V,...ge)}
  ${z.mainStart([w,w,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${c===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${c===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${gn(X,ue,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${$&&h?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${h?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${O.type.storage}(0);
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
  }`};return{name:"AttentionScore",shaderCache:{hint:`${n!==void 0};${e}`,inputDependencies:k},getRunData:()=>({outputs:x,dispatchGroup:T,programUniforms:v}),getShaderSource:C}},Hi=(e,t,r,n,s,i,a,l,u,c,f=void 0,h=void 0)=>{let g=Math.min(e.outputCount,1+(a?1:0)+(l?1:0)),_=g>1?c.pastSequenceLength:0,b=_+c.kvSequenceLength,w=u&&M.size(u.dims)>0?u:void 0,T=[t,r];g>1&&a&&M.size(a.dims)>0&&T.push(a),w&&T.push(w),f&&T.push(f),h&&T.push(h);let v=e.compute(_c(g,t,r,a,w,c,_,f,h),{inputs:T,outputs:g>1?[-1,1]:[-1]})[0];e.compute(yc(v,c.batchSize,c.numHeads,_,c.sequenceLength,b,f,h),{inputs:f&&h?[v,f,h]:[v],outputs:[]});let $=[v,n];g>1&&l&&M.size(l.dims)>0&&$.push(l),f&&$.push(f),h&&$.push(h),e.compute(bc(g,v,n,l,c,_,f,h),{inputs:$,outputs:g>1?[0,2]:[0]})},wc=(e,t)=>{let r=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],n=t.sequenceLength,s=t.inputHiddenSize,i=t.headSize,a=12,l={x:Math.ceil(t.headSize/a),y:Math.ceil(t.sequenceLength/a),z:t.batchSize*t.numHeads},u=[e.inputs[0],e.inputs[1],e.inputs[2]],c=[{type:12,data:n},{type:12,data:s},{type:12,data:i},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],f=h=>{let g=ne("output_q",u[0].dataType,r),_=ne("output_k",u[0].dataType,r),b=ne("output_v",u[0].dataType,r),w=U("input",u[0].dataType,u[0].dims),T=U("weight",u[1].dataType,u[1].dims),v=U("bias",u[2].dataType,u[2].dims),$=w.type.storage,k=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${a}u;
  var<workgroup> tileInput: array<${$}, ${a*a}>;
  var<workgroup> tileWeightQ: array<${$}, ${a*a}>;
  var<workgroup> tileWeightK: array<${$}, ${a*a}>;
  var<workgroup> tileWeightV: array<${$}, ${a*a}>;
  ${h.registerUniforms(k).declareVariables(w,T,v,g,_,b)}
  ${h.mainStart([a,a,1])}
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
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:l,programUniforms:c}),getShaderSource:f},{inputs:u,outputs:[-1,-1,-1]})},dg=(e,t)=>{let r=gc(e.inputs,t),[n,s,i]=wc(e,r);return Hi(e,n,s,i,e.inputs[4],void 0,void 0,void 0,e.inputs[5],r)}}),vc,$c,xc,cg,s1=K(()=>{Vt(),_e(),Se(),Ke(),Te(),vc=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let r=(n,s,i)=>{let a=s.length;if(a!==n.length)throw new Error(`${i}: num dimensions != ${a}`);s.forEach((l,u)=>{if(l!==n[u])throw new Error(`${i}: dim[${u}] do not match`)})};if(e[0].dims.length>1){let n=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);r(e[1].dims,n,"Invalid input scale"),r(e[2].dims,n,"Invalid input B"),r(e[3].dims,n,"Invalid input mean"),r(e[4].dims,n,"Invalid input var")}else r(e[1].dims,[1],"Invalid input scale"),r(e[2].dims,[1],"Invalid input B"),r(e[3].dims,[1],"Invalid input mean"),r(e[4].dims,[1],"Invalid input var")},$c=(e,t)=>{let{epsilon:r,spatial:n,format:s}=t,i=e[0].dims,a=n?Ge(i[i.length-1]):1,l=s==="NHWC"&&i.length>1?a:1,u=M.size(i)/a,c=n,f=c?i.length:i,h=U("x",e[0].dataType,e[0].dims,a),g=U("scale",e[1].dataType,e[1].dims,l),_=U("bias",e[2].dataType,e[2].dims,l),b=U("inputMean",e[3].dataType,e[3].dims,l),w=U("inputVar",e[4].dataType,e[4].dims,l),T=ne("y",e[0].dataType,f,a),v=()=>{let k="";if(n)k=`let cOffset = ${i.length===1?"0u":s==="NHWC"?`outputIndices[${i.length-1}] / ${a}`:"outputIndices[1]"};`;else if(s==="NCHW")k=`
            ${T.indicesSet("outputIndices","0","0")}
            let cOffset = ${T.indicesToOffset("outputIndices")};`;else{k=`var cIndices = ${g.type.indices}(0);
                       cIndices[0] = outputIndices[${i.length-1}];`;for(let x=1;x<g.rank;x++)k+=`cIndices[${x}] = outputIndices[${x}];`;k+=`let cOffset = ${g.indicesToOffset("cIndices")};`}return k},$=k=>`
  const epsilon = ${r};
  ${k.registerUniform("outputSize","u32").declareVariables(h,g,_,b,w,T)}
  ${k.mainStart()}
  ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${T.offsetToIndices(`global_idx * ${a}`)};
    ${v()}
    let scale = ${g.getByOffset("cOffset")};
    let bias = ${_.getByOffset("cOffset")};
    let inputMean = ${b.getByOffset("cOffset")};
    let inputVar = ${w.getByOffset("cOffset")};
    let x = ${h.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${T.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${n}_${a}`,inputDependencies:c?["rank","type","type","type","type"]:void 0},getShaderSource:$,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:c?[{type:12,data:u},...oe(i)]:[{type:12,data:u}]})}},xc=e=>Ne(e),cg=(e,t)=>{let{inputs:r,outputCount:n}=e,s=xc({...t,outputCount:n});if(He.webgpu.validateInputContent&&vc(r,s),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute($c(r,s))}}),Sc,Tc,pg,a1=K(()=>{Se(),Te(),Sc=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Tc=e=>{let t=e[0].dims,r=e[0].dims[2],n=M.size(t)/4,s=e[0].dataType,i=U("input",s,t,4),a=U("bias",s,[r],4),l=U("residual",s,t,4),u=ne("output",s,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(n/64)}}),getShaderSource:c=>`
  const channels = ${r}u / 4;
  ${c.declareVariables(i,a,l,u)}

  ${c.mainStart()}
    ${c.guardAgainstOutOfBoundsWorkgroupSizes(n)}
    let value = ${i.getByOffset("global_idx")}
      + ${a.getByOffset("global_idx % channels")} + ${l.getByOffset("global_idx")};
    ${u.setByOffset("global_idx","value")}
  }`}},pg=e=>{Sc(e.inputs),e.compute(Tc(e.inputs))}}),Cc,Re,fg,hg,mg,gg,yg,_g,bg,wg,vg,kc,$g,xg,Sg,Tg,Ai,Cg,En,kg,Ig,Eg,zg,Ag,Og,Rg,Mg,Bg,Dg,Ng,Pg,Ug,Wg,Lg,Vg,Qs,qg,Fa,Ha,Fg,Hg,Gg,Ic,Ec,jg,Mo=K(()=>{_e(),Se(),Ke(),Te(),Cc=(e,t,r,n,s,i,a)=>{let l=Math.ceil(t/4),u="";typeof s=="string"?u=`${s}(a)`:u=s("a");let c=U("inputData",r,[l],4),f=ne("outputData",n,[l],4),h=[{name:"vec_size",type:"u32"}];return a&&h.push(...a),`
      ${e.registerUniforms(h).declareVariables(c,f)}

  ${i??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${c.getByOffset("global_idx")};
    ${f.setByOffset("global_idx",u)}
  }`},Re=(e,t,r,n,s,i=e.dataType,a,l)=>{let u=[{type:12,data:Math.ceil(M.size(e.dims)/4)}];return a&&u.push(...a),{name:t,shaderCache:{hint:s,inputDependencies:["type"]},getShaderSource:c=>Cc(c,M.size(e.dims),e.dataType,i,r,n,l),getRunData:c=>({outputs:[{dims:e.dims,dataType:i}],dispatchGroup:{x:Math.ceil(M.size(c[0].dims)/64/4)},programUniforms:u})}},fg=e=>{e.compute(Re(e.inputs[0],"Abs","abs"))},hg=e=>{e.compute(Re(e.inputs[0],"Acos","acos"))},mg=e=>{e.compute(Re(e.inputs[0],"Acosh","acosh"))},gg=e=>{e.compute(Re(e.inputs[0],"Asin","asin"))},yg=e=>{e.compute(Re(e.inputs[0],"Asinh","asinh"))},_g=e=>{e.compute(Re(e.inputs[0],"Atan","atan"))},bg=e=>{e.compute(Re(e.inputs[0],"Atanh","atanh"))},wg=e=>Ne(e),vg=(e,t)=>{let r;switch(t.to){case 10:r="vec4<f16>";break;case 1:r="vec4<f32>";break;case 12:r="vec4<u32>";break;case 6:r="vec4<i32>";break;case 9:r="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(Re(e.inputs[0],"Cast",r,void 0,t.cacheKey,t.to))},kc=e=>{let t,r,n=e.length>=2&&e[1].data!==0,s=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=n?e[1].getFloat32Array()[0]:-34028234663852886e22,r=s?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=n?e[1].getUint16Array()[0]:64511,r=s?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return Ne({min:t,max:r})},$g=(e,t)=>{let r=t||kc(e.inputs),n=lt(e.inputs[0].dataType);e.compute(Re(e.inputs[0],"Clip",s=>`clamp(${s}, vec4<${n}>(uniforms.min), vec4<${n}>(uniforms.max))`,void 0,r.cacheKey,void 0,[{type:e.inputs[0].dataType,data:r.min},{type:e.inputs[0].dataType,data:r.max}],[{name:"min",type:n},{name:"max",type:n}]),{inputs:[0]})},xg=e=>{e.compute(Re(e.inputs[0],"Ceil","ceil"))},Sg=e=>{e.compute(Re(e.inputs[0],"Cos","cos"))},Tg=e=>{e.compute(Re(e.inputs[0],"Cosh","cosh"))},Ai=e=>Ne(e),Cg=(e,t)=>{let r=lt(e.inputs[0].dataType);e.compute(Re(e.inputs[0],"Elu",n=>`elu_vf32(${n})`,`
  const elu_alpha_ = ${r}(${t.alpha});

  fn elu_f32(a: ${r}) -> ${r} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${r}>) -> vec4<${r}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},En=(e="f32")=>`
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
}`,kg=e=>{let t=lt(e.inputs[0].dataType);e.compute(Re(e.inputs[0],"Erf",r=>`erf_vf32(${r})`,En(t)))},Ig=e=>{e.compute(Re(e.inputs[0],"Exp","exp"))},Eg=e=>{e.compute(Re(e.inputs[0],"Floor","floor"))},zg=e=>{let t=lt(e.inputs[0].dataType);e.compute(Re(e.inputs[0],"Gelu",r=>`0.5 * ${r} * (1.0 + erf_vf32(${r} * 0.7071067811865475))`,En(t)))},Ag=(e,t)=>{let r=lt(e.inputs[0].dataType);e.compute(Re(e.inputs[0],"LeakyRelu",n=>`select(leaky_relu_alpha_ * ${n}, ${n}, ${n} >= vec4<${r}>(0.0))`,`const leaky_relu_alpha_ = ${r}(${t.alpha});`,t.cacheKey))},Og=e=>{e.compute(Re(e.inputs[0],"Not",t=>`!${t}`))},Rg=e=>{e.compute(Re(e.inputs[0],"Neg",t=>`-${t}`))},Mg=e=>{e.compute(Re(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},Bg=e=>{let t=lt(e.inputs[0].dataType);e.compute(Re(e.inputs[0],"Relu",r=>`select(vec4<${t}>(0.0), ${r}, ${r} > vec4<${t}>(0.0))`))},Dg=e=>{e.compute(Re(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},Ng=e=>Ne(e),Pg=(e,t)=>{let r=lt(e.inputs[0].dataType);e.compute(Re(e.inputs[0],"HardSigmoid",n=>`max(vec4<${r}>(0.0), min(vec4<${r}>(1.0), ${t.alpha} * ${n} + vec4<${r}>(${t.beta})))`,void 0,t.cacheKey))},Ug=e=>{e.compute(Re(e.inputs[0],"Sin","sin"))},Wg=e=>{e.compute(Re(e.inputs[0],"Sinh","sinh"))},Lg=e=>{e.compute(Re(e.inputs[0],"Sqrt","sqrt"))},Vg=e=>{e.compute(Re(e.inputs[0],"Tan","tan"))},Qs=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,qg=e=>{e.compute(Re(e.inputs[0],"Tanh",Qs))},Fa=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${Qs("v")};
}
`,Ha=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,Fg=e=>{let t=lt(e.inputs[0].dataType);e.compute(Re(e.inputs[0],"FastGelu",Ha,Fa(t),void 0,e.inputs[0].dataType))},Hg=(e,t)=>{let r=lt(e.inputs[0].dataType);return e.compute(Re(e.inputs[0],"ThresholdedRelu",n=>`select(vec4<${r}>(0.0), ${n}, ${n} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${r}>(${t.alpha});`,t.cacheKey)),0},Gg=e=>{e.compute(Re(e.inputs[0],"Log","log"))},Ic=(e,t)=>`
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
`,Ec=e=>`quick_gelu_impl(${e})`,jg=(e,t)=>{let r=lt(e.inputs[0].dataType);e.compute(Re(e.inputs[0],"QuickGelu",Ec,Ic(r,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),zc,Ac,Kg,o1=K(()=>{Se(),Te(),Mo(),zc=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Ac=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let r=U("input",e[0].dataType,e[0].dims,4),n=U("bias",e[0].dataType,[e[0].dims[2]],4),s=ne("output",e[0].dataType,t,4),i=M.size(t)/4,a=Je(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(i/64)}}),getShaderSource:l=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${l.declareVariables(r,n,s)}

  ${En(a)}

  ${l.mainStart()}
    ${l.guardAgainstOutOfBoundsWorkgroupSizes(i)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${s.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},Kg=e=>{zc(e.inputs),e.compute(Ac(e.inputs))}}),Oc,Rc,Nt,Qg,Zg,Xg,Yg,Jg,ey,ty,ry,iy,ny,l1=K(()=>{_e(),Se(),Te(),Oc=(e,t,r,n,s,i,a,l,u,c,f,h)=>{let g,_;typeof l=="string"?g=_=($,k)=>`${l}((${$}),(${k}))`:typeof l=="function"?g=_=l:(g=l.scalar,_=l.vector);let b=ne("outputData",f,n.length,4),w=U("aData",u,t.length,4),T=U("bData",c,r.length,4),v;if(s)if(i){let $=M.size(t)===1,k=M.size(r)===1,x=t.length>0&&t[t.length-1]%4===0,C=r.length>0&&r[r.length-1]%4===0;$||k?v=b.setByOffset("global_idx",_($?`${w.type.value}(${w.getByOffset("0")}.x)`:w.getByOffset("global_idx"),k?`${T.type.value}(${T.getByOffset("0")}.x)`:T.getByOffset("global_idx"))):v=`
            let outputIndices = ${b.offsetToIndices("global_idx * 4u")};
            let offsetA = ${w.broadcastedIndicesToOffset("outputIndices",b)};
            let offsetB = ${T.broadcastedIndicesToOffset("outputIndices",b)};
            ${b.setByOffset("global_idx",_(a||x?w.getByOffset("offsetA / 4u"):`${w.type.value}(${w.getByOffset("offsetA / 4u")}[offsetA % 4u])`,a||C?T.getByOffset("offsetB / 4u"):`${T.type.value}(${T.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else v=b.setByOffset("global_idx",_(w.getByOffset("global_idx"),T.getByOffset("global_idx")));else{if(!i)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let $=(k,x,C="")=>{let z=`aData[indexA${x}][componentA${x}]`,O=`bData[indexB${x}][componentB${x}]`;return`
            let outputIndices${x} = ${b.offsetToIndices(`global_idx * 4u + ${x}u`)};
            let offsetA${x} = ${w.broadcastedIndicesToOffset(`outputIndices${x}`,b)};
            let offsetB${x} = ${T.broadcastedIndicesToOffset(`outputIndices${x}`,b)};
            let indexA${x} = offsetA${x} / 4u;
            let indexB${x} = offsetB${x} / 4u;
            let componentA${x} = offsetA${x} % 4u;
            let componentB${x} = offsetB${x} % 4u;
            ${k}[${x}] = ${C}(${g(z,O)});
          `};f===9?v=`
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
        ${e.registerUniform("vec_size","u32").declareVariables(w,T,b)}

        ${h??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${v}
      }`},Rc=(e,t,r,n,s,i,a=r.dataType)=>{let l=r.dims.map(w=>Number(w)??1),u=n.dims.map(w=>Number(w)??1),c=!M.areEqual(l,u),f=l,h=M.size(l),g=!1,_=!1,b=[c];if(c){let w=di.calcShape(l,u,!1);if(!w)throw new Error("Can't perform binary op on the given tensors");f=w.slice(),h=M.size(f);let T=M.size(l)===1,v=M.size(u)===1,$=l.length>0&&l[l.length-1]%4===0,k=u.length>0&&u[u.length-1]%4===0;b.push(T),b.push(v),b.push($),b.push(k);let x=1;for(let C=1;C<f.length;C++){let z=l[l.length-C],O=u[u.length-C];if(z===O)x*=z;else break}x%4===0?(_=!0,g=!0):(T||v||$||k)&&(g=!0)}else g=!0;return b.push(g),{name:e,shaderCache:{hint:t+b.map(w=>w.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:w=>Oc(w,l,u,f,g,c,_,s,r.dataType,n.dataType,a,i),getRunData:()=>({outputs:[{dims:f,dataType:a}],dispatchGroup:{x:Math.ceil(h/64/4)},programUniforms:[{type:12,data:Math.ceil(M.size(f)/4)},...oe(l,u,f)]})}},Nt=(e,t,r,n,s,i)=>{e.compute(Rc(t,s??"",e.inputs[0],e.inputs[1],r,n,i))},Qg=e=>{Nt(e,"Add",(t,r)=>`${t}+${r}`)},Zg=e=>{Nt(e,"Div",(t,r)=>`${t}/${r}`)},Xg=e=>{Nt(e,"Equal",{scalar:(t,r)=>`u32(${t}==${r})`,vector:(t,r)=>`vec4<u32>(${t}==${r})`},void 0,void 0,9)},Yg=e=>{Nt(e,"Mul",(t,r)=>`${t}*${r}`)},Jg=e=>{let t=U("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;Nt(e,"Pow",{scalar:(r,n)=>`pow_custom(${r},${n})`,vector:(r,n)=>`pow_vector_custom(${r},${n})`},`
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
      `)},ey=e=>{Nt(e,"Sub",(t,r)=>`${t}-${r}`)},ty=e=>{Nt(e,"Greater",{scalar:(t,r)=>`u32(${t}>${r})`,vector:(t,r)=>`vec4<u32>(${t}>${r})`},void 0,void 0,9)},ry=e=>{Nt(e,"Less",{scalar:(t,r)=>`u32(${t}<${r})`,vector:(t,r)=>`vec4<u32>(${t}<${r})`},void 0,void 0,9)},iy=e=>{Nt(e,"GreaterOrEqual",{scalar:(t,r)=>`u32(${t}>=${r})`,vector:(t,r)=>`vec4<u32>(${t}>=${r})`},void 0,void 0,9)},ny=e=>{Nt(e,"LessOrEqual",{scalar:(t,r)=>`u32(${t}<=${r})`,vector:(t,r)=>`vec4<u32>(${t}<=${r})`},void 0,void 0,9)}}),Mc,Bc,Dc,Nc,sy,ay,u1=K(()=>{_e(),Se(),Ke(),Te(),Mc=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let r=0,n=e[r],s=n.dataType,i=n.dims.length;e.forEach((a,l)=>{if(l!==r){if(a.dataType!==s)throw new Error("input tensors should be one type");if(a.dims.length!==i)throw new Error("input tensors should have the same shape");a.dims.forEach((u,c)=>{if(c!==t&&u!==n.dims[c])throw new Error("non concat dimensions must match")})}})},Bc=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,Dc=(e,t)=>{let r=e.length,n=[];for(let s=0;s<r;++s){let i=t.setByOffset("global_idx",e[s].getByIndices("indices"));r===1?n.push(i):s===0?n.push(`if (inputIndex == ${s}u) { ${i} }`):s===r-1?n.push(`else { ${i} }`):n.push(`else if (inputIndex == ${s}) { ${i} }`)}return n.join(`
`)},Nc=(e,t,r,n)=>{let s=M.size(r),i=new Array(e.length),a=new Array(e.length),l=0,u=[],c=[],f=[{type:12,data:s}];for(let w=0;w<e.length;++w)l+=e[w].dims[t],i[w]=l,c.push(e[w].dims.length),a[w]=U(`input${w}`,n,c[w]),u.push("rank"),f.push({type:12,data:i[w]});for(let w=0;w<e.length;++w)f.push(...oe(e[w].dims));f.push(...oe(r));let h=ne("output",n,r.length),g=h.indicesGet("indices",t),_=Array.from(Array(i.length).keys()).map(w=>`uniforms.sizeInConcatAxis${w}`).join(","),b=w=>`

  ${(()=>{w.registerUniform("outputSize","u32");for(let T=0;T<e.length;T++)w.registerUniform(`sizeInConcatAxis${T}`,"u32");return w.declareVariables(...a,h)})()}

  ${Bc(i.length,_)}

  ${w.mainStart()}
    ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${h.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${g});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${i.length}u>(${_});
      ${g} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${Dc(a,h)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:u},getRunData:()=>({outputs:[{dims:r,dataType:n}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:f}),getShaderSource:b}},sy=(e,t)=>{let r=e.inputs,n=r[0].dims,s=M.normalizeAxis(t.axis,n.length);Mc(r,s);let i=n.slice();i[s]=r.reduce((l,u)=>l+(u.dims.length>s?u.dims[s]:0),0);let a=r.filter(l=>M.size(l.dims)>0);e.compute(Nc(a,s,i,r[0].dataType),{inputs:a})},ay=e=>Ne({axis:e.axis})}),Vr,qr,Fr,Bo,jr=K(()=>{_e(),Se(),Vr=(e,t,r="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${r}(uniforms.clip_min)), ${t}(${r}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${r}(uniforms.alpha) * value + ${r}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${r}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},qr=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},Fr=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},Bo=e=>{let t=(e==null?void 0:e.activation)||"";if(t==="HardSigmoid"){let[r,n]=(e==null?void 0:e.activation_params)||[.2,.5];return{activation:t,alpha:r,beta:n}}else if(t==="Clip"){let[r,n]=(e==null?void 0:e.activation_params)||[Dm,Nm];return{activation:t,clipMax:n,clipMin:r}}else if(t==="LeakyRelu"){let[r]=(e==null?void 0:e.activation_params)||[.01];return{activation:t,alpha:r}}return{activation:t}}}),rt,oy,Do=K(()=>{rt=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},oy=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),ly,d1=K(()=>{ly=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),Ui,No,Po=K(()=>{_e(),Se(),Te(),jr(),Ui=(e,t,r,n,s)=>{let i=n-r;return`
      ${Array.from({length:r}).map((a,l)=>`
      if (${se(t.shape,l,t.rank)} != 1) {
        ${t.indicesSet(e,l,se(s,l+i,n))}
      } else {
        ${t.indicesSet(e,l,0)}
      }`).join("")}
`},No=(e,t,r,n,s=!1,i)=>{let a=e[0].dims,l=e[1].dims,u=a[a.length-2],c=l[l.length-1],f=a[a.length-1],h=Ge(c),g=Ge(f),_=Ge(u),b=M.size(r)/h/_,w=e.length>2,T=n?n.slice(0,-2):r.slice(0,-2),v=[M.size(T),u,c],$=[{type:12,data:b},{type:12,data:u},{type:12,data:c},{type:12,data:f}];qr(t,$),$.push(...oe(T,a,l)),w&&$.push(...oe(e[2].dims)),$.push(...oe(v));let k=x=>{let C=Ao("batch_dims",e[0].dataType,T.length),z=U("a",e[0].dataType,a.length,g),O=U("b",e[1].dataType,l.length,h),B=ne("output",e[0].dataType,v.length,h),V=Je(B.type.tensor),X=Vr(t,B.type.value,V),ue=[z,O],ge="";if(w){let fe=s?h:1;ue.push(U("bias",e[2].dataType,e[2].dims.length,fe)),ge=`${s?`value += bias[col / ${fe}];`:`value += ${B.type.value}(bias[row + i]);`}`}let ae=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];Fr(t,ae);let he=()=>{let fe=`var a_data: ${z.type.value};`;for(let Q=0;Q<g;Q++)fe+=`
              let b_data${Q} = b[(b_offset + (k + ${Q}) * uniforms.N + col) / ${h}];`;for(let Q=0;Q<_;Q++){fe+=`a_data = a[(a_offset + (row + ${Q}) * uniforms.K + k) / ${g}];`;for(let le=0;le<g;le++)fe+=`
            values[${Q}] = fma(${O.type.value}(a_data${g===1?"":`[${le}]`}), b_data${le}, values[${Q}]);
`}return fe};return`
  ${x.registerUniforms(ae).registerInternalVariables(C).declareVariables(...ue,B)}
  ${x.mainStart()}
    ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${h})) * ${h};
    var index1 = global_idx / (uniforms.N / ${h});
    let stride1 = uniforms.M / ${_};
    let row = (index1 % stride1) * ${_};
    let batch = index1 / stride1;

    ${r.length===2?"":`let batch_indices = ${C.offsetToIndices("batch")};`}

    var a_indices: ${z.type.indices};
    ${Ui("a_indices",z,z.rank-2,C.rank,"batch_indices")}
    ${z.indicesSet("a_indices",z.rank-2,0)}
    ${z.indicesSet("a_indices",z.rank-1,0)}
    let a_offset = ${z.indicesToOffset("a_indices")};

    var b_indices: ${O.type.indices};
    ${Ui("b_indices",O,O.rank-2,C.rank,"batch_indices")}
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
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${h};${g};${_};${s}`,inputDependencies:w?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(b/64)},programUniforms:$}),getShaderSource:k}}}),Pc,Uc,Ga,Zs,Wc,ja,Lc,Vn,Uo=K(()=>{_e(),Se(),Te(),jr(),Po(),Do(),Pc=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,Uc=(e,t)=>e?`
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
        }`,Ga=(e,t,r="f32",n,s=!1,i=32,a=!1,l=32)=>{let u=t[1]*e[1],c=t[0]*e[0],f=s?u:i,h=s?i:u,g=f/t[0],_=i/t[1];if(!((s&&g===4&&e[1]===4||!s&&(g===3||g===4))&&f%t[0]===0&&i%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${s} is true, innerElementSize ${g} and workPerThread[1] ${e[1]} must be 4.
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
  let batch = ${a?"0":"i32(globalId.z)"};
  ${n?`let batchIndices = ${n.offsetToIndices("u32(batch)")};`:""}
  let globalRowStart = i32(workgroupId.y) * ${u};

  let num_tiles = ${a?`${Math.ceil(l/i)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
  var kStart = ${a?`i32(globalId.z) * ${l}`:"0"};

  var acc: array<vec4<${r}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${_};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${Pc(s,n)}
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

          ${Uc(s,g)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},Zs=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,Wc=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",ja=(e,t,r="f32",n,s=!1,i=32,a=!1,l=32,u=!1)=>{let c=e[1]*t[1],f=e[0]*t[0],h=s?c:i,g=s?i:c;if(!(g%t[1]===0&&h%t[0]===0&&i%t[1]===0))throw new Error(`tileAHight ${g} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${h} must be divisible by workgroupSize[0]${t[0]}, tileInner ${i} must be divisible by workgroupSize[1]${t[1]}`);let _=g/t[1],b=h/t[0],w=i/t[1],T=u?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${c};
    let globalColStart = i32(workgroupId.x) * ${f};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${g}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${h}; inputCol = inputCol + ${t[0]}) {
          ${Zs(s,n)}
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
          let ACached = ${s?`mm_Asub[k][localRow + innerRow * ${t[1]}];`:`mm_Asub[localRow + innerRow * ${t[1]}][k];`}
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
      ${Zs(s,n)}
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
      ${Wc(s)}
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
    let batch = ${a?"0":"i32(globalId.z)"};
    ${n?`let batchIndices = ${n.offsetToIndices("u32(batch)")};`:""}
    let num_tiles = ${a?`${Math.ceil(l/i)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
    var kStart = ${a?`i32(globalId.z) * ${l}`:"0"};

    var acc : array<array<${r}, colPerThread>, rowPerThread>;
    ${T}
  }
`},Lc=(e,t,r,n,s=!1)=>{let[i,a,l,u]=n,c=Je(n[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${i.type.indices}) -> ${rt(e,c)} {
      var value = ${rt(e,c)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${a.type.indices};
        ${Ui("aIndices",a,a.rank-2,i.rank,"batchIndices")}
        ${a.indicesSet("aIndices",a.rank-2,"u32(row)")}
        ${a.indicesSet("aIndices",a.rank-1,"u32(colIn)")}
        value = ${a.getByIndices("aIndices")};
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
        ${t?`value = value + ${s?"bias[colIn]":`${rt(e,c)}(bias[row])`};`:""}
        ${r}
        ${u.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},Vn=(e,t,r,n,s=!1,i)=>{let a=e[0].dims,l=e[1].dims,u=a.slice(0,-2),c=l.slice(0,-2),f=n?n.slice(0,-2):r.slice(0,-2),h=M.size(f),g=a[a.length-2],_=a[a.length-1],b=l[l.length-1],w=_%4===0&&b%4===0,T=g<=8?[4,1,1]:[4,4,1],v=[8,8,1],$=[Math.ceil(b/v[0]/T[0]),Math.ceil(g/v[1]/T[1]),Math.ceil(h/v[2]/T[2])],k=w?4:1,x=[...u,g,_/k],C=x.length,z=[...c,_,b/k],O=z.length,B=[h,g,b/k],V=[{type:6,data:g},{type:6,data:b},{type:6,data:_}];qr(t,V),V.push(...oe(f,x,z));let X=["rank","rank"],ue=e.length>2;ue&&(V.push(...oe(e[2].dims)),X.push("rank")),V.push(...oe(B));let ge=ae=>{let he=f.length,fe=Ao("batchDims",e[0].dataType,he,1),Q=Je(e[0].dataType),le=U("a",e[0].dataType,C,k),de=U("b",e[1].dataType,O,k),ee=ne("result",e[0].dataType,B.length,k),Ae=[le,de];if(ue){let W=s?k:1;Ae.push(U("bias",e[2].dataType,e[2].dims.length,W))}let N=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];Fr(t,N);let q=Je(ee.type.tensor),ke=Vr(t,ee.type.value,q),We=Lc(k,ue,ke,[fe,le,de,ee],s);return`
  ${ae.registerUniforms(N).registerInternalVariables(fe).declareVariables(...Ae,ee)}
  ${We}
  ${w?Ga(T,v,Q,fe):ja(T,v,Q,fe)}
                   `};return{name:"MatMul",shaderCache:{hint:`${T};${t.activation};${w};${s}`,inputDependencies:X},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:$[0],y:$[1],z:$[2]},programUniforms:V}),getShaderSource:ge}}}),Vc,uy,c1=K(()=>{_e(),dr(),Te(),jr(),Do(),d1(),Uo(),Vc=(e,t,r,n,s=!1,i,a=4,l=4,u=4,c="f32")=>{let f=V=>{switch(V){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${c}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${V} is not supported.`)}},h=V=>{switch(V){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${V} is not supported.`)}},g=e?`
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
    `,b=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",w=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",T=e?"row":"col",v=e?"col":"row",$=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${T} / outWidth;
    let outCol = ${T} % outWidth;

    let WRow = ${v} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${v} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${v} % inChannels;
    var resData = ${rt(a,c)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${b} && xCol >= 0 && xCol < ${w}) {
      ${g}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${f(a)}
    }
    return resData;`,k=e?t&&n?`
    let col = colIn * ${a};
    ${$}`:`
    let col = colIn * ${a};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${$}
    }
    return ${rt(a,c)}(0.0);`:n&&r?`
    let col = colIn * ${a};
    ${$}`:`
    let col = colIn * ${a};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${$}
    }
    return ${rt(a,c)}(0.0);`,x=e?n&&r?h(l):`
    let col = colIn * ${l};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${h(l)}
    }
    return ${rt(l,c)}(0.0);`:`
    let col = colIn * ${l};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${h(l)}
    }
    return ${rt(l,c)}(0.0);`,C=rt(u,c),z=rt(e?a:l,c),O=rt(e?l:a,c),B=Vr(i,C,c);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${z} {
      ${e?k:x}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${O} {
      ${e?x:k}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${C}) {
      let col = colIn * ${u};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${_}
      ${oy(s)}
      ${B}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},uy=(e,t,r,n,s,i,a,l,u)=>{let c=t.format==="NHWC",f=c?e[0].dims[3]:e[0].dims[1],h=r[0],g=c?r[2]:r[3],_=c?r[1]:r[2],b=c?r[3]:r[1],w=c&&(f%4===0||f%3===0)&&b%4===0,T=c?b:g*_,v=c?g*_:b,$=[8,8,1],k=n<=8?[4,1,1]:[4,4,1],x=[Math.ceil(T/$[0]/k[0]),Math.ceil(v/$[1]/k[1]),Math.ceil(h/$[2]/k[2])];Oe("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${x}`);let C=w?c&&f%4!==0?3:4:1,z=$[1]*k[1],O=$[0]*k[0],B=Math.max($[0]*C,$[1]),V=n%z===0,X=s%O===0,ue=i%B===0,ge=w?[C,4,4]:[1,1,1],ae=[{type:6,data:n},{type:6,data:s},{type:6,data:i},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];qr(t,ae),ae.push(...oe(e[0].dims,e[1].dims));let he=["rank","rank"];a&&(ae.push(...oe(e[2].dims)),he.push("rank")),ae.push(...oe(r));let fe=Q=>{let le=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];Fr(t,le);let de=w?4:1,ee=Je(e[0].dataType),Ae=`
      fn setOutputAtIndex(flatIndex : i32, value : ${w?`vec4<${ee}>`:ee}) {
        result[flatIndex] = ${w?`vec4<${ee}>`:ee}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${w?`vec4<${ee}>`:ee}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${w?"/ 4":""}, value);
      }`,N=U("x",e[0].dataType,e[0].dims.length,C===3?1:C),q=U("w",e[1].dataType,e[1].dims.length,de),ke=[N,q],We=ne("result",e[0].dataType,r.length,de);if(a){let W=U("bias",e[2].dataType,e[2].dims.length,de);ke.push(W),Ae+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${w?`vec4<${ee}>`:ee} {
          return bias[coords.${c?"w":"y"}${w?"/ 4":""}];
        }`}return`
        ${ly("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${Q.registerUniforms(le).declareVariables(...ke,We)}
        ${Ae}
        ${Vc(c,V,X,ue,a,t,ge[0],ge[1],ge[2],ee)}
        ${w?Ga(k,$,ee,void 0,!c,B):ja(k,$,ee,void 0,!c,B,!1,void 0,l)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${C};${w};${V};${X};${ue};${z};${O};${B}`,inputDependencies:he},getRunData:()=>({outputs:[{dims:u?u(r):r,dataType:e[0].dataType}],dispatchGroup:{x:x[0],y:x[1],z:x[2]},programUniforms:ae}),getShaderSource:fe}}}),qc,Xs,$i,Fc,Ys,Hc,dy,cy,p1=K(()=>{_e(),dr(),Se(),Te(),jr(),Do(),qc=e=>{let t=1;for(let r=0;r<e.length;r++)t*=e[r];return t},Xs=e=>typeof e=="number"?[e,e,e]:e,$i=(e,t)=>t<=1?e:e+(e-1)*(t-1),Fc=(e,t,r,n=1)=>{let s=$i(t,n);return Math.floor((e[0]*(r-1)-r+s)/2)},Ys=(e,t,r,n,s)=>{s==null&&(s=Fc(e,t[0],n[0]));let i=[0,0,0,r];for(let a=0;a<3;a++)e[a]+2*s>=t[a]&&(i[a]=Math.trunc((e[a]-t[a]+2*s)/n[a]+1));return i},Hc=(e,t,r,n,s,i,a,l,u,c)=>{let f,h,g,_;if(e==="VALID"&&(e=0),typeof e=="number"){f={top:e,bottom:e,left:e,right:e,front:e,back:e};let b=Ys([t,r,n,1],[l,u,c],1,[s,i,a],e);h=b[0],g=b[1],_=b[2]}else if(Array.isArray(e)){if(!e.every((w,T,v)=>w===v[0]))throw Error(`Unsupported padding parameter: ${e}`);f={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let b=Ys([t,r,n,1],[l,u,c],1,[s,i,a],e[0]);h=b[0],g=b[1],_=b[2]}else if(e==="SAME_UPPER"){h=Math.ceil(t/s),g=Math.ceil(r/i),_=Math.ceil(n/a);let b=(h-1)*s+l-t,w=(g-1)*i+u-r,T=(_-1)*a+c-n,v=Math.floor(b/2),$=b-v,k=Math.floor(w/2),x=w-k,C=Math.floor(T/2),z=T-C;f={top:k,bottom:x,left:C,right:z,front:v,back:$}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:f,outDepth:h,outHeight:g,outWidth:_}},dy=(e,t,r,n,s,i=!1,a="channelsLast")=>{let l,u,c,f,h;if(a==="channelsLast")[l,u,c,f,h]=e;else if(a==="channelsFirst")[l,h,u,c,f]=e;else throw new Error(`Unknown dataFormat ${a}`);let[g,,_,b,w]=t,[T,v,$]=Xs(r),[k,x,C]=Xs(n),z=$i(_,k),O=$i(b,x),B=$i(w,C),{padInfo:V,outDepth:X,outHeight:ue,outWidth:ge}=Hc(s,u,c,f,T,v,$,z,O,B),ae=i?g*h:g,he=[0,0,0,0,0];return a==="channelsFirst"?he=[l,ae,X,ue,ge]:a==="channelsLast"&&(he=[l,X,ue,ge,ae]),{batchSize:l,dataFormat:a,inDepth:u,inHeight:c,inWidth:f,inChannels:h,outDepth:X,outHeight:ue,outWidth:ge,outChannels:ae,padInfo:V,strideDepth:T,strideHeight:v,strideWidth:$,filterDepth:_,filterHeight:b,filterWidth:w,effectiveFilterDepth:z,effectiveFilterHeight:O,effectiveFilterWidth:B,dilationDepth:k,dilationHeight:x,dilationWidth:C,inShape:e,outShape:he,filterShape:t}},cy=(e,t,r,n,s,i)=>{let a=i==="channelsLast";a?e[0].dims[3]:e[0].dims[1];let l=[64,1,1],u={x:r.map((T,v)=>v)},c=[Math.ceil(qc(u.x.map(T=>r[T]))/l[0]),1,1];Oe("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${c}`);let f=1,h=M.size(r),g=[{type:12,data:h},{type:12,data:n},{type:12,data:s},{type:12,data:t.strides},{type:12,data:t.dilations}];qr(t,g),g.push(...oe(e[0].dims,e[1].dims));let _=["rank","rank"],b=e.length===3;b&&(g.push(...oe(e[2].dims)),_.push("rank")),g.push(...oe(r));let w=T=>{let v=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:n.length},{name:"pads",type:"u32",length:s.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];Fr(t,v);let $=1,k=Je(e[0].dataType),x=U("x",e[0].dataType,e[0].dims.length,f),C=U("W",e[1].dataType,e[1].dims.length,$),z=[x,C],O=ne("result",e[0].dataType,r.length,$),B="";if(b){let ue=U("bias",e[2].dataType,e[2].dims.length,$);z.push(ue),B+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${k} {
          return bias[${a?se("coords",4,5):se("coords",1,5)}];
        }`}let V=rt(f,k),X=Vr(t,V,k);return`
            ${B}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${x.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${C.getByIndices("aIndices")};
            }
          ${T.registerUniforms(v).declareVariables(...z,O)}
          ${T.mainStart()}
          ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${O.offsetToIndices("global_idx")};
              let batch = ${se("coords",0,x.rank)};
              let d2 = ${a?se("coords",x.rank-1,x.rank):se("coords",1,x.rank)};
              let xFRCCorner = vec3<u32>(${a?se("coords",1,x.rank):se("coords",2,x.rank)},
              ${a?se("coords",2,x.rank):se("coords",3,x.rank)},
              ${a?se("coords",3,x.rank):se("coords",4,x.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${a?se("uniforms.x_shape",1,x.rank):se("uniforms.x_shape",2,x.rank)};
              let xShapeZ = ${a?se("uniforms.x_shape",2,x.rank):se("uniforms.x_shape",3,x.rank)};
              let xShapeW = ${a?se("uniforms.x_shape",3,x.rank):se("uniforms.x_shape",4,x.rank)};
              let xShapeU = ${a?se("uniforms.x_shape",4,x.rank):se("uniforms.x_shape",1,x.rank)};
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
                      ${a?`let xValues = vec4<f32>(
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
                        ${a?`value += getX(batch, xF, xR, xC, inputDepthNearestVec4)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`:`value += getX(batch, inputDepthNearestVec4, xF, xR, xC)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`}
                    } else if (inputDepthVec4Remainder == 2) {
                      ${a?`let xValues = vec2<f32>(
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
                      ${a?`let xValues = vec3<f32>(
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
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${a};${f};${b}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:c[0],y:c[1],z:c[2]},programUniforms:g}),getShaderSource:w}}}),py,fy,f1=K(()=>{_e(),Se(),Te(),jr(),py=(e,t,r,n)=>{let s=e.length>2,i=s?"value += b[output_channel];":"",a=e[0].dims,l=e[1].dims,u=t.format==="NHWC",c=u?r[3]:r[1],f=c/t.group,h=u&&f>=4?Ge(c):1,g=M.size(r)/h,_=[{type:12,data:g},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:f}];qr(t,_),_.push(...oe(a,[l[0],l[1],l[2],l[3]/h]));let b=s?["rank","rank","rank"]:["rank","rank"];_.push(...oe([r[0],r[1],r[2],r[3]/h]));let w=T=>{let v=ne("output",e[0].dataType,r.length,h),$=Je(v.type.tensor),k=Vr(t,v.type.value,$),x=U("x",e[0].dataType,a.length),C=U("w",e[1].dataType,l.length,h),z=[x,C];s&&z.push(U("b",e[2].dataType,e[2].dims,h));let O=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];Fr(t,O);let B=u?`
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
            let xVal = ${x.get("batch","xHeight","xWidth","input_channel")};
            let wVal = ${C.get("wHeight","wWidth","wInChannel","output_channel")};
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

            let xVal = ${x.get("batch","input_channel","xHeight","xWidth")};
            let wVal = ${C.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${T.registerUniforms(O).declareVariables(...z,v)}

  ${T.mainStart()}
    ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${v.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${u?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${u?1:2}], outputIndices[${u?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${h} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${u?2:1}];

    var value: ${v.type.value} = ${v.type.value}(0);
    ${B}
    ${i}
    ${k}
    ${v.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${h}`,inputDependencies:b},getRunData:()=>({outputs:[{dims:n?n(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:_}),getShaderSource:w}},fy=(e,t,r,n)=>{let s=e.length>2,i=Ge(r[3]),a=Ge(r[2]),l=M.size(r)/i/a,u=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/i],c=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/i],f=[r[0],r[1],r[2],r[3]/i],h=[{type:12,data:l},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];qr(t,h),h.push(...oe(u,c,f));let g=(a-1)*t.strides[1]+c[1],_=b=>{let w=ne("output",e[0].dataType,f.length,i),T=Je(w.type.tensor),v=Vr(t,w.type.value,T),$=U("x",e[0].dataType,u.length,i),k=U("w",e[1].dataType,c.length,i),x=[$,k];s&&x.push(U("b",e[2].dataType,e[2].dims,i));let C=s?"value += b[output_channel];":"",z=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return Fr(t,z),`
  ${b.registerUniforms(z).declareVariables(...x,w)}
  ${b.mainStart()}
    ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${a}u;
    let col = (index1 % width1) * ${a}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${$.type.value}, ${g}>;
    var values: array<${w.type.value}, ${a}>;
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
          let w_val = ${k.get("w_height","w_width","0","output_channel")};
          for (var i = 0u; i < ${a}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${a}u; i++) {
      var value = values[i];
      ${C}
      ${v}
      ${w.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${i};${a};${g};${c[0]};${c[1]}`,inputDependencies:s?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:n?n(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:h}),getShaderSource:_}}}),Gc,yn,jc,_n,Ka,Js,Kc,Qc,Qa,h1=K(()=>{Se(),c1(),p1(),Uo(),f1(),jr(),Po(),kr(),Gc=(e,t,r,n,s,i)=>{let a=e[0],l=e.slice(i?1:2,i?3:4),u=l.length,c=t[0],f=t.slice(2).map((g,_)=>g+(g-1)*(r[_]-1)),h=l.map((g,_)=>g+n[_]+n[_+u]).map((g,_)=>Math.floor((g-f[_]+s[_])/s[_]));return h.splice(0,0,a),h.splice(i?3:1,0,c),h},yn=[2,3,1,0],jc=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],n=e[1].dims[1]*t.group;if(r!==n)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let s=e[0].dims.length-2;if(t.dilations.length!==s)throw new Error(`dilations should be ${s}D`);if(t.strides.length!==s)throw new Error(`strides should be ${s}D`);if(t.pads.length!==s*2)throw new Error(`pads should be ${s*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},_n=(e,t)=>{let r=e.kernelShape.slice();r.length<t[1].dims.length-2&&r.push(...Array(t[1].dims.length-2-r.length).fill(0));for(let i=2;i<t[1].dims.length;++i)r[i-2]===0&&(r[i-2]=t[1].dims[i]);let n=e.pads.slice();Wn.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,r,n,e.format==="NHWC",e.autoPad);let s=Object.assign({},e);return Object.assign(s,{kernelShape:r,pads:n}),s},Ka=e=>{let t=Bo(e),r=e.format,n=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],s=e.dilations,i=e.group,a=e.kernel_shape,l=e.pads,u=e.strides,c=e.w_is_const();return{autoPad:n,format:r,dilations:s,group:i,kernelShape:a,pads:l,strides:u,wIsConst:c,...t,cacheKey:`${e.format};${t.activation};`}},Js=(e,t,r,n)=>{let s=r.format==="NHWC",i=Gc(t[0].dims,t[1].dims,r.dilations,r.pads,r.strides,s);if(r.group!==1){let z=[t[0]];if(s){let O=e.kernelCustomData.wT??e.compute(kt(t[1],yn),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=O),z.push(O)}else z.push(t[1]);t.length===3&&z.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&s&&t[1].dims[0]===r.group&&t[1].dims[1]===1&&r.dilations[0]===1&&r.dilations[1]===1?e.compute(fy(z,r,i,n),{inputs:z}):e.compute(py(z,r,i,n),{inputs:z});return}let a=t.length===3,l=t[0].dims[s?1:2],u=t[0].dims[s?2:3],c=t[0].dims[s?3:1],f=t[1].dims[2],h=t[1].dims[3],g=i[s?1:2],_=i[s?2:3],b=i[s?3:1],w=s&&f===l&&h===u&&r.pads[0]===0&&r.pads[1]===0;if(w||f===1&&h===1&&r.dilations[0]===1&&r.dilations[1]===1&&r.strides[0]===1&&r.strides[1]===1&&r.pads[0]===0&&r.pads[1]===0){let z=i[0],O,B,V,X=[];if(s){let ae=e.kernelCustomData.wT??e.compute(kt(t[1],yn),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];if(r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=ae),w){let he=l*u*c;O=t[0].reshape([1,z,he]),B=ae.reshape([1,he,b]),V=[1,z,b]}else O=t[0].reshape([z,l*u,c]),B=ae.reshape([1,c,b]),V=[z,g*_,b];X.push(O),X.push(B)}else O=t[0].reshape([z,c,l*u]),B=t[1].reshape([1,b,c]),V=[z,b,g*_],X.push(B),X.push(O);a&&X.push(t[2]);let ue=V[2],ge=X[0].dims[X[0].dims.length-1];ue<8&&ge<8?e.compute(No(X,r,i,V,s,n),{inputs:X}):e.compute(Vn(X,r,i,V,s,n),{inputs:X});return}let T=!0,v=e.kernelCustomData.wT??e.compute(kt(t[1],yn),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=v);let $=[t[0],v];a&&$.push(t[2]);let k=s?g*_:b,x=s?b:g*_,C=f*h*c;e.compute(uy($,r,i,k,x,C,a,T,n),{inputs:$})},Kc=(e,t)=>{let r=t.format==="NHWC",n=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&n.push(e.inputs[2]);let s=[0,t.pads[0],0,t.pads[1]],i=[1].concat(t.strides),a=[1].concat(t.dilations),l=[1].concat(t.kernelShape),u=_n({...t,pads:s,strides:i,dilations:a,kernelShape:l},n);Js(e,n,u,c=>r?[c[0],c[2],c[3]]:[c[0],c[1],c[3]])},Qc=(e,t,r)=>{let n=r.format==="NHWC"?"channelsLast":"channelsFirst",s=_n(r,t),i=r.autoPad==="NOTSET"?r.pads:r.autoPad,a=dy(t[0].dims,t[1].dims,r.strides,r.dilations,i,!1,n);e.compute(cy(t,s,a.outShape,[a.filterDepth,a.filterHeight,a.filterWidth],[a.padInfo.front,a.padInfo.top,a.padInfo.left],n))},Qa=(e,t)=>{if(jc(e.inputs,t),e.inputs[0].dims.length===3)Kc(e,t);else if(e.inputs[0].dims.length===5)Qc(e,e.inputs,t);else{let r=_n(t,e.inputs);Js(e,e.inputs,r)}}}),hy,m1=K(()=>{_e(),dr(),Se(),Te(),hy=(e,t,r)=>{let n=e.length>2,s=t.outputShape,i=t.format==="NHWC",a=t.group,l=e[1].dims,u=l[2]/a,c=l[3],f=i?Ge(u):1,h=i?Ge(c):1,g=i?c===1?f:h:1,_=M.size(s)/h,b=[Math.ceil(_/64),1,1];Oe("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${b}`);let w=["rank","rank"],T=[t.strides[0],t.strides[1]],v=[t.kernelShape[i?1:2],t.kernelShape[i?2:3]],$=[t.dilations[0],t.dilations[1]],k=[v[0]+(t.dilations[0]<=1?0:(t.kernelShape[i?1:2]-1)*(t.dilations[0]-1)),v[1]+(t.dilations[1]<=1?0:(t.kernelShape[i?2:3]-1)*(t.dilations[1]-1))],x=[k[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),k[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],C=[{type:12,data:_},{type:12,data:T},{type:12,data:v},{type:12,data:$},{type:12,data:k},{type:6,data:x},{type:12,data:u},{type:12,data:c},...oe(e[0].dims,e[1].dims)];n&&(C.push(...oe(e[2].dims)),w.push("rank")),C.push(...oe(s));let z=O=>{let B=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:T.length},{name:"filter_dims",type:"u32",length:v.length},{name:"dilations",type:"u32",length:v.length},{name:"effective_filter_dims",type:"u32",length:k.length},{name:"pads",type:"i32",length:x.length},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],V=Je(e[0].dataType),X=i?1:2,ue=i?2:3,ge=i?3:1,ae=U("W",e[1].dataType,e[1].dims.length,g),he=U("Dy",e[0].dataType,e[0].dims.length,f),fe=[he,ae];n&&fe.push(U("bias",e[2].dataType,[s[ge]].length,h));let Q=ne("result",e[0].dataType,s.length,h),le=()=>{let ee="";if(f===1)ee+=`
        let w_offset = ${ae.indicesToOffset(`${ae.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
        let wValue = ${ae.getByOffset(`w_offset / ${g}`)};
        dotProd = dotProd + xValue * wValue;`;else if(c===1)ee+=`
          let wValue = ${ae.getByOffset(`${ae.indicesToOffset(`${ae.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)} / ${g}`)};
          dotProd = dotProd + dot(xValue, wValue);`;else for(let Ae=0;Ae<f;Ae++)ee+=`
            let wValue${Ae} = ${ae.getByOffset(`${ae.indicesToOffset(`${ae.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${Ae}, wOutChannel)`)} / ${g}`)};
            dotProd = dotProd + xValue[${Ae}] * wValue${Ae};`;return ee},de=`
            let outputIndices = ${Q.offsetToIndices(`global_idx * ${h}`)};
            let batch = ${Q.indicesGet("outputIndices",0)};
            let d1 = ${Q.indicesGet("outputIndices",ge)};
            let r = ${Q.indicesGet("outputIndices",X)};
            let c = ${Q.indicesGet("outputIndices",ue)};
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
              let dyR = (${V}(dyRCorner) + ${V}(wR)) / ${V}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${V}(uniforms.Dy_shape[${X}]) || fract(dyR) > 0.0 ||
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
                let dyC = (${V}(dyCCorner) + ${V}(wC)) / ${V}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${V}(uniforms.Dy_shape[${ue}]) ||
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
    ${de}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${f}${g}${h}${c===1}`,inputDependencies:w},getRunData:()=>({dispatchGroup:{x:b[0],y:b[1],z:b[2]},outputs:[{dims:r?r(s):s,dataType:e[0].dataType}],programUniforms:C}),getShaderSource:z}}}),Zc,Xc,Yc,ea,my,Jc,ta,ep,gy,g1=K(()=>{m1(),jr(),kr(),Zc=(e,t,r,n,s,i)=>(e-1)*t+r+(n-1)*s+1-i,Xc=(e,t,r,n,s)=>{let i=Math.floor(e/2);t==="SAME_UPPER"?(r[n]=i,r[s]=e-i):t==="SAME_LOWER"&&(r[n]=e-i,r[s]=i)},Yc=(e,t,r,n,s,i,a,l,u,c)=>{let f=e.length-2,h=c.length===0;u.length<f&&u.push(...Array(f-u.length).fill(0));let g=e[0],_=t[l?3:1]*s;for(let b=0,w=e.length-f-(l?1:0);b<f;++b,++w){let T=e[w],v=h?T*a[b]:c[b],$=Zc(T,a[b],i[b],t[w],r[b],v);Xc($,n,i,b,b+f),h&&c.push(a[b]*(T-1)+u[b]+(t[w]-1)*r[b]+1-i[b]-i[b+f])}c.splice(0,0,g),c.splice(l?3:1,0,_)},ea=(e,t)=>{let r=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((h,g)=>h*g,1)===0){r.length=0;for(let h=2;h<t[1].dims.length;++h)r.push(t[1].dims[h])}let n=e.format==="NHWC";r.splice(0,0,t[1].dims[0]),r.splice(n?3:1,0,t[1].dims[1]);let s=e.pads.slice(),i=e.outputShape.slice(),a=e.outputPadding.slice(),l=t[0].dims,u=e.dilations.slice();if(u.reduce((h,g)=>h+g,0)===0){let h=t[0].dims.length-2;u=new Array(h).fill(1)}let c=e.strides.slice();if(c.reduce((h,g)=>h+g,0)===0){let h=t[0].dims.length-2;c=new Array(h).fill(1)}Yc(l,r,u,e.autoPad,e.group,s,c,n,a,i);let f=Object.assign({},e);return Object.assign(f,{kernelShape:r,pads:s,outputPadding:a,outputShape:i,dilations:u,strides:c}),f},my=e=>{let t=Bo(e),r=e.format,n=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],s=e.dilations,i=e.group,a=e.kernelShape,l=e.pads,u=e.strides,c=e.wIsConst(),f=e.outputPadding,h=e.outputShape;return{autoPad:n,format:r,dilations:s,group:i,kernelShape:a,outputPadding:f,outputShape:h,pads:l,strides:u,wIsConst:c,...t,cacheKey:`${e.format};${t.activation};`}},Jc=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],n=e[1].dims[0];if(r!==n)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let s=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==s))throw new Error("invalid bias");let i=e[0].dims.length-2;if(t.dilations.reduce((a,l)=>a+l,0)>0&&t.dilations.length!==i)throw new Error(`dilations should be ${i}D`);if(t.strides.reduce((a,l)=>a+l,0)>0&&t.strides.length!==i)throw new Error(`strides should be ${i}D`);if(t.pads.reduce((a,l)=>a+l,0)>0&&t.pads.length!==i*2)throw new Error(`pads should be ${i*2}D`);if(t.outputPadding.length!==i&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${i}D`);if(t.kernelShape.reduce((a,l)=>a+l,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},ta=(e,t,r,n)=>{let s=e.kernelCustomData.wT??e.compute(kt(t[1],[2,3,0,1]),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=s);let i=[t[0],s];t.length===3&&i.push(t[2]),e.compute(hy(i,r,n),{inputs:i})},ep=(e,t)=>{let r=t.format==="NHWC",n=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&n.push(e.inputs[2]);let s=t.kernelShape;(s.length===0||s[0]===0)&&(s=[e.inputs[1].dims[2]]);let i=t.dilations;(i.length===0||i[0]===0)&&(i=[1]);let a=t.strides;(a.length===0||a[0]===0)&&(a=[1]);let l=t.pads;l.length===0&&(l=[0,0]),l=[0,l[0],0,l[1]],a=[1].concat(a),i=[1].concat(i),s=[1].concat(s);let u=t.outputPadding;u=[0].concat(u);let c=ea({...t,pads:l,strides:a,dilations:i,kernelShape:s,outputPadding:u},n);ta(e,n,c,f=>r?[f[0],f[2],f[3]]:[f[0],f[1],f[3]])},gy=(e,t)=>{if(Jc(e.inputs,t),e.inputs[0].dims.length===3)ep(e,t);else{let r=ea(t,e.inputs);ta(e,e.inputs,r)}}}),tp,yy,_y,y1=K(()=>{_e(),Se(),Ke(),Te(),tp=(e,t,r,n)=>{let s=M.size(t),i=t.length,a=U("input",e,i),l=ne("output",e,i),u=r.dataType===6?r.getInt32Array()[0]:Number(r.getBigInt64Array()[0]),c=M.normalizeAxis(u,i),f=h=>{let g=` i32(${a.indicesGet("inputIndices","uniforms.axis")}) `,_=se("uniforms.input_shape","uniforms.axis",i),b=n.reverse?g+(n.exclusive?" + 1":""):"0",w=n.reverse?_:g+(n.exclusive?"":" + 1");return`
                ${h.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(a,l)}
                ${h.mainStart()}
                  ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${l.offsetToIndices("global_idx")};
                  var sum = ${l.type.value}(0);
                  let first : i32 = ${b};
                  let last : i32 = ${w};
                  for (var i : i32 = first; i < last; i++) {
                    ${a.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${a.getByIndices("inputIndices")};
                  }
                  ${l.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:n.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:[{type:12,data:s},{type:12,data:c},...oe(t,t)]}),getShaderSource:f}},yy=(e,t)=>{let r=e.inputs[0].dims,n=e.inputs[0].dataType,s=e.inputs[1];e.compute(tp(n,r,s,t),{inputs:[0]})},_y=e=>{let t=e.exclusive===1,r=e.reverse===1;return Ne({exclusive:t,reverse:r})}}),rp,ip,np,by,wy,_1=K(()=>{_e(),Se(),Ke(),Te(),rp=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},ip=(e,t,r,n)=>{let s=[];s.push(`fn perm(i: ${n.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`);for(let i=0;i<t;++i)s.push(r.indicesSet("a",e[i],`i[${i}]`));return s.push("return a;}"),s.join(`
`)},np=(e,t)=>{let r,n,s,i,a,l,u=t.format==="NHWC",c=t.blocksize,f=t.mode==="DCR";u?([r,n,s,i]=e.dims,a=f?[r,n,s,c,c,i/c**2]:[r,n,s,i/c**2,c,c],l=f?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([r,n,s,i]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],a=f?[r,c,c,i/c**2,n,s]:[r,i/c**2,c,c,n,s],l=f?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let h=e.reshape(a),g=h.dims.length,_=e.dataType,b=U("a",_,g),w=ne("output",_,g),T=v=>`
  ${v.registerUniform("output_size","u32").declareVariables(b,w)}

  ${ip(l,g,b,w)}

  ${v.mainStart()}
    ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${w.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${w.setByOffset("global_idx",b.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:v=>{let $=u?[r,n*c,s*c,i/c**2]:[r,i/c**2,n*c,s*c],k=M.size($),x=h.dims,C=M.sortBasedOnPerm(x,l);return{outputs:[{dims:$,dataType:v[0].dataType}],dispatchGroup:{x:Math.ceil(k/64)},programUniforms:[{type:12,data:k},...oe(x,C)]}},getShaderSource:T}},by=(e,t)=>{rp(e.inputs),e.compute(np(e.inputs[0],t))},wy=e=>Ne({blocksize:e.blocksize,mode:e.mode,format:e.format})}),bn,xi,ra,sp,ap,op,lp,ia,up,vy,$y,b1=K(()=>{_e(),Se(),Ke(),Te(),bn="[a-zA-Z]|\\.\\.\\.",xi="("+bn+")+",ra="^"+xi+"$",sp="("+xi+",)*"+xi,ap="^"+sp+"$",op=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let r=this.symbolToIndices.get(e);r===void 0?r=[t]:r.push(t),this.symbolToIndices.set(e,r)}},lp=class{constructor(e,t){var s;this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[r,n]=t.includes("->")?t.split("->",2):[t,""];if(!r.match(RegExp(ap)))throw new Error("Invalid LHS term");if(r.split(",").forEach((i,a)=>{let l=e[a].dims.slice();if(!i.match(RegExp(ra)))throw new Error("Invalid LHS term");let u=this.processTerm(i,!0,l,a);this.lhs.push(u)}),n==="")n+=[...this.symbolToInfo.entries()].filter(([i,a])=>a.count===1||i==="...").map(([i])=>i).join("");else if(!n.match(RegExp(xi)))throw new Error("Invalid RHS");(s=n.match(RegExp(bn,"g")))==null||s.forEach(i=>{if(i==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let a=this.symbolToInfo.get(i);if(a===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(a.dimValue)}}),this.rhs=this.processTerm(n,!1,this.outputDims)}addSymbol(e,t,r){let n=this.symbolToInfo.get(e);if(n!==void 0){if(n.dimValue!==t&&n.count!==1)throw new Error("Dimension mismatch");n.count++,n.inputIndices.push(r)}else n={count:1,dimValue:t,inputIndices:[r]};this.symbolToInfo.set(e,n)}processTerm(e,t,r,n=-1){let s=r.length,i=!1,a=[],l=0;if(!e.match(RegExp(ra))&&!t&&e!=="")throw new Error("Invalid LHS term");let u=e.match(RegExp(bn,"g")),c=new op(n);return u==null||u.forEach((f,h)=>{if(f==="..."){if(i)throw new Error("Only one ellipsis is allowed per input term");i=!0;let g=s-u.length+1;if(g<0)throw new Error("Ellipsis out of bounds");if(a=r.slice(l,l+g),this.hasEllipsis){if(this.ellipsisDims.length!==a.length||this.ellipsisDims.toString()!==a.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=a;else throw new Error("Ellipsis must be specified in the LHS");for(let _=0;_<a.length;_++){let b=String.fromCharCode(48+_);c.addSymbol(b,h+_),this.addSymbol(b,r[l++],n)}}else c.addSymbol(f,h+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(f,r[l++],n)}),c}},ia=e=>e+"_max",up=(e,t,r,n)=>{let s=e.map(c=>c.length).map((c,f)=>U(`input${f}`,t,c)),i=M.size(n),a=ne("output",t,n.length),l=[...r.symbolToInfo.keys()].filter(c=>!r.rhs.symbolToIndices.has(c)),u=c=>{let f=[],h="var prod = 1.0;",g="var sum = 0.0;",_="sum += prod;",b=[],w=[],T=[],v=[],$=r.symbolToInfo.size===r.rhs.symbolToIndices.size;r.symbolToInfo.forEach((x,C)=>{var z;if(r.rhs.symbolToIndices.has(C)){let O=(z=r.rhs.symbolToIndices.get(C))==null?void 0:z[0];O!==void 0&&r.lhs.forEach((B,V)=>{if(x.inputIndices.includes(V)){let X=B.symbolToIndices.get(C);if(X===void 0)throw new Error("Invalid symbol error");X.forEach(ue=>{f.push(`${s[V].indicesSet(`input${V}Indices`,ue,a.indicesGet("outputIndices",O))}`)})}})}else r.lhs.forEach((O,B)=>{if(x.inputIndices.includes(B)){let V=O.symbolToIndices.get(C);if(V===void 0)throw new Error("Invalid symbol error");V.forEach(X=>{b.push(`${s[B].indicesSet(`input${B}Indices`,X,`${C}`)}`)}),v.push(`prod *= ${s[B].getByIndices(`input${B}Indices`)};`)}}),w.push(`for(var ${C}: u32 = 0; ${C} < uniforms.${ia(C)}; ${C}++) {`),T.push("}")});let k=$?[...f,`let sum = ${s.map((x,C)=>x.getByIndices(`input${C}Indices`)).join(" * ")};`]:[...f,g,...w,...b,h,...v,_,...T];return`
            ${c.registerUniforms(l.map(x=>({name:`${ia(x)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...s,a)}

            ${c.mainStart()}
            ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${a.offsetToIndices("global_idx")};
            ${s.map((x,C)=>`var input${C}Indices: ${s[C].type.indices};`).join(`
`)}
            ${k.join(`
`)};
            ${a.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:r.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let c=l.filter(h=>r.symbolToInfo.has(h)).map(h=>{var g;return{type:12,data:((g=r.symbolToInfo.get(h))==null?void 0:g.dimValue)||0}});c.push({type:12,data:i});let f=e.map((h,g)=>[...oe(h)]).reduce((h,g)=>h.concat(g),c);return f.push(...oe(n)),{outputs:[{dims:n,dataType:t}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:f}},getShaderSource:u}},vy=(e,t)=>{let r=new lp(e.inputs,t.equation),n=r.outputDims,s=e.inputs.map((i,a)=>i.dims);e.compute(up(s,e.inputs[0].dataType,r,n))},$y=e=>{let t=e.equation.replace(/\s+/g,"");return Ne({equation:t})}}),dp,na,cp,pp,xy,w1=K(()=>{_e(),Se(),Te(),dp=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),n=r.length<t.length?0:r.length-t.length,s=t.length<r.length?0:t.length-r.length;for(;n<r.length&&s<t.length;++n,++s)if(r[n]!==t[s]&&r[n]!==1&&t[s]!==1)throw new Error("Expand requires shape to be broadcastable to input")},na=(e,t)=>{let r=e.length-t.length,n=[];for(let s=0;s<r;++s)n.push(e[s]);for(let s=0;s<t.length;++s)n.push(t[s]===1?e[s+r]:t[s]);return n},cp=(e,t)=>e.length>t.length?na(e,t):na(t,e),pp=e=>{let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),n=cp(t,r),s=e[0].dataType,i=s===9||M.size(t)===1,a=s===9||t.length>0&&t[t.length-1]%4===0?4:1,l=i||n.length>0&&n[n.length-1]%4===0?4:1,u=Math.ceil(M.size(n)/l),c=h=>{let g=U("input",s,t.length,a),_=ne("output",s,n.length,l),b;if(s===9){let w=(T,v,$="")=>`
          let outputIndices${v} = ${_.offsetToIndices(`outputOffset + ${v}u`)};
          let offset${v} = ${g.broadcastedIndicesToOffset(`outputIndices${v}`,_)};
          let index${v} = offset${v} / 4u;
          let component${v} = offset${v} % 4u;
          ${T}[${v}] = ${$}(${g.getByOffset(`index${v}`)}[component${v}]);
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
        let data = ${_.type.value}(${g.getByOffset(`inputOffset / ${a}`)});
        ${_.setByOffset("global_idx","data")}
      }`;return`
    ${h.registerUniform("vec_size","u32").declareVariables(g,_)}
    ${h.mainStart()}
    ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${b}`},f=[{type:12,data:u},...oe(t,n)];return{name:"Expand",shaderCache:{hint:`${n.length};${a}${l}`,inputDependencies:["rank"]},getShaderSource:c,getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:f})}},xy=e=>{dp(e.inputs),e.compute(pp(e.inputs),{inputs:[0]})}}),fp,Sy,v1=K(()=>{_e(),Se(),Te(),Mo(),fp=e=>{let t=e[0].dataType,r=M.size(e[0].dims),n=M.size(e[1].dims),s=n%4===0,i=a=>{let l=U("x",t,[1],4),u=U("bias",t,[1],4),c=ne("y",t,[1],4),f=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],h=_=>`
      let bias${_}_offset: u32 = (global_idx * 4 + ${_}) % uniforms.bias_size;
      let bias${_} = ${u.getByOffset(`bias${_}_offset / 4`)}[bias${_}_offset % 4];`,g=s?`
      let bias = ${u.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${h(0)}${h(1)}${h(2)}${h(3)}
      let bias = ${l.type.value}(bias0, bias1, bias2, bias3);`;return`${a.registerUniforms(f).declareVariables(l,u,c)}

    ${Fa(lt(t))}

    ${a.mainStart(ci)}
      ${a.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${l.getByOffset("global_idx")};
      ${g}
      let x_in = x + bias;
      ${c.setByOffset("global_idx",Ha("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${s}`,inputDependencies:["type","type"]},getShaderSource:i,getRunData:a=>({outputs:[{dims:a[0].dims,dataType:a[0].dataType}],programUniforms:[{type:12,data:Math.ceil(r/4)},{type:12,data:n}],dispatchGroup:{x:Math.ceil(r/ci/4)}})}},Sy=e=>{e.inputs.length<2||M.size(e.inputs[1].dims)===0?Fg(e):e.compute(fp(e.inputs))}}),hp,mp,Ty,Cy,$1=K(()=>{_e(),Se(),Ke(),Te(),hp=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},mp=(e,t)=>{let r=e[0].dims,n=e[1].dims,s=r.length,i=M.normalizeAxis(t.axis,s),a=r.slice(0);a.splice(i,1,...n);let l=r[i],u=e[0].dataType===9?4:1,c=Math.ceil(M.size(a)/u),f=[{type:12,data:c},{type:6,data:l},{type:12,data:i},...oe(e[0].dims,e[1].dims,a)],h=g=>{let _=U("data",e[0].dataType,e[0].dims.length,u),b=U("inputIndices",e[1].dataType,e[1].dims.length),w=ne("output",e[0].dataType,a.length,u),T=$=>{let k=n.length,x=`var indicesIndices${$}  = ${b.type.indices}(0);`;for(let C=0;C<k;C++)x+=`${k>1?`indicesIndices${$}[${C}]`:`indicesIndices${$}`} = ${a.length>1?`outputIndices${$}[uniforms.axis + ${C}]`:`outputIndices${$}`};`;x+=`
          var idx${$} = ${b.getByIndices(`indicesIndices${$}`)};
          if (idx${$} < 0) {
            idx${$} = idx${$} + uniforms.axisDimLimit;
          }
          var dataIndices${$} : ${_.type.indices};
        `;for(let C=0,z=0;C<s;C++)C===i?(x+=`${s>1?`dataIndices${$}[${C}]`:`dataIndices${$}`} = u32(idx${$});`,z+=k):(x+=`${s>1?`dataIndices${$}[${C}]`:`dataIndices${$}`} = ${a.length>1?`outputIndices${$}[${z}]`:`outputIndices${$}`};`,z++);return x},v;if(e[0].dataType===9){let $=(k,x,C="")=>`
          let outputIndices${x} = ${w.offsetToIndices(`outputOffset + ${x}u`)};
          ${T(x)};
          let offset${x} = ${_.indicesToOffset(`dataIndices${x}`)};
          let index${x} = offset${x} / 4u;
          let component${x} = offset${x} % 4u;
          ${k}[${x}] = ${C}(${_.getByOffset(`index${x}`)}[component${x}]);
        `;v=`
        let outputOffset = global_idx * ${u};
        var value = vec4<u32>(0);
        ${$("value",0,"u32")}
        ${$("value",1,"u32")}
        ${$("value",2,"u32")}
        ${$("value",3,"u32")}
        ${w.setByOffset("global_idx","value")}
      `}else v=`
      let outputIndices = ${w.offsetToIndices("global_idx")};
      ${T("")};
      let value = ${_.getByIndices("dataIndices")};
      ${w.setByOffset("global_idx","value")};
      `;return`
      ${g.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(_,b,w)}
      ${g.mainStart()}
        ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${v}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:f}),getShaderSource:h}},Ty=e=>Ne({axis:e.axis}),Cy=(e,t)=>{let r=e.inputs;hp(r),e.compute(mp(e.inputs,t))}}),gp,ky,Iy,x1=K(()=>{_e(),Se(),Te(),gp=(e,t,r,n,s,i,a,l,u)=>{let c=[{type:12,data:i},{type:12,data:n},{type:12,data:s},{type:12,data:r},{type:12,data:a},{type:12,data:l},{type:12,data:u}],f=[i];c.push(...oe(t.dims,f));let h=g=>{let _=U("indices_data",t.dataType,t.dims.length),b=ne("input_slice_offsets_data",12,1,1),w=[_,b],T=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:s.length},{name:"sizes_from_slice_dims_data",type:"u32",length:r.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
  ${g.registerUniforms(T).declareVariables(...w)}
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
        ${s.length===1?"index += i32(uniforms.input_dims);":"index += i32(uniforms.input_dims[input_dim_idx]);"}
      }
      ${r.length===1?"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data);":"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data[dim_idx]);"}
    }

    input_slice_offsets_data[global_idx] =  base_offset + u32(relative_slice_offset);
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${s.length}_${r.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:f,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:c}),getShaderSource:h},{inputs:[t],outputs:[-1]})[0]},ky=(e,t)=>{let r=e.inputs,n=r[0].dims,s=r[0].dataType,i=r[1].dims,a=i[i.length-1],l=M.sizeToDimension(i,i.length-1),u=M.sizeFromDimension(n,t.batchDims+a),c=M.sizeToDimension(n,t.batchDims),f=M.sizeFromDimension(n,t.batchDims),h=l/c,g=new Array(a),_=u;for(let x=0;x<a;++x)g[a-1-x]=_,_*=n[t.batchDims+a-1-x];let b=gp(e,r[1],g,t.batchDims,n,l,h,f,a),w=t.batchDims+a;if(w>n.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let T=i.slice(0,-1).concat(n.slice(w)),v=M.size(T),$=[{type:12,data:v},{type:12,data:u},...oe(r[0].dims,b.dims,T)],k=x=>{let C=U("data",r[0].dataType,r[0].dims.length),z=U("slice_offsets",12,b.dims.length),O=ne("output",r[0].dataType,T.length);return`
          ${x.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(C,z,O)}
            ${x.mainStart()}
            ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:T,dataType:s}],dispatchGroup:{x:Math.ceil(v/64)},programUniforms:$}),getShaderSource:k},{inputs:[r[0],b]})},Iy=e=>({batchDims:e.batch_dims,cacheKey:""})}),yp,_p,Ey,zy,S1=K(()=>{_e(),Se(),Ke(),Te(),yp=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let r=M.normalizeAxis(t.quantizeAxis,e[0].dims.length),n=t.blockSize,s=e[0],i=e[2],a=e.length===4?e[3]:void 0;if(i.dims.length!==s.dims.length||!s.dims.map((l,u)=>u===r?Math.ceil(l/n)===i.dims[u]:l===i.dims[u]).reduce((l,u)=>l&&u,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(a){if(a.dataType!==s.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(a.dims.length!==i.dims.length||!a.dims.map((l,u)=>l===i.dims[u]).reduce((l,u)=>l&&u,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},_p=(e,t)=>{let r=e[0].dims,n=e[1].dims,s=r.length,i=M.normalizeAxis(t.gatherAxis,s),a=M.normalizeAxis(t.quantizeAxis,s),l=r.slice(0);l.splice(i,1,...n);let u=M.size(l),c=e[2].dataType,f=e[0].dataType===22,h=[{type:12,data:u},{type:12,data:a},{type:12,data:i},{type:12,data:t.blockSize},...oe(...e.map((_,b)=>_.dims),l)],g=_=>{let b=U("data",e[0].dataType,e[0].dims.length),w=U("inputIndices",e[1].dataType,e[1].dims.length),T=U("scales",e[2].dataType,e[2].dims.length),v=e.length>3?U("zeroPoint",e[3].dataType,e[3].dims.length):void 0,$=ne("output",c,l.length),k=[b,w,T];v&&k.push(v);let x=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${_.registerUniforms(x).declareVariables(...k,$)}
        ${_.mainStart()}
        let output_indices = ${$.offsetToIndices("global_idx")};
        var indices_indices = ${w.type.indices}(0);
        ${n.length>1?`
          for (var i: u32 = 0; i < ${n.length}; i++) {
            let index = ${$.indicesGet("output_indices","uniforms.gather_axis + i")};
            ${w.indicesSet("indices_indices","i","index")};
          }`:`indices_indices = ${$.indicesGet("output_indices","uniforms.gather_axis")};`};
        var data_indices = ${b.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${$.indicesGet("output_indices","i")};
          ${b.indicesSet("data_indices","i","index")};
        }
        var index_from_indices = ${w.getByIndices("indices_indices")};
        if (index_from_indices < 0) {
          index_from_indices += ${r[i]};
        }
        ${b.indicesSet("data_indices","uniforms.gather_axis","u32(index_from_indices)")};
        for (var i = uniforms.gather_axis + 1; i < ${l.length}; i++) {
          let index = ${$.indicesGet("output_indices",`i + ${n.length} - 1`)};
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
        let quantize_axis_index = ${T.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${T.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${T.getByIndices("scale_indices")};
        ${v?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${v.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${v.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${f?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${lt(c)}(quantized_data - zero_point) * scale;
        ${$.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((_,b)=>b!==1).map(_=>_.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(_,b)=>"rank")},getRunData:()=>({outputs:[{dims:l,dataType:c}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:h}),getShaderSource:g}},Ey=(e,t)=>{let r=e.inputs;yp(r,t),e.compute(_p(e.inputs,t))},zy=e=>Ne({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),bp,wp,Ay,Oy,T1=K(()=>{_e(),Se(),Ke(),Te(),bp=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},wp=(e,t)=>{let r=e[0].dims,n=e[0].dataType,s=r.length,i=e[1].dims,a=e[1].dataType,l=M.normalizeAxis(t.axis,s),u=r[l],c=i.slice(0),f=M.size(c),h=U("input",n,s),g=U("indicesInput",a,i.length),_=ne("output",n,c.length),b=[{type:12,data:f},{type:6,data:u},{type:12,data:l}];return b.push(...oe(r,i,c)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:c,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:b}),getShaderSource:w=>`
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
  }`}},Ay=e=>Ne({axis:e.axis}),Oy=(e,t)=>{let r=e.inputs;bp(r),e.compute(wp(e.inputs,t))}}),vp,$p,Ry,My,C1=K(()=>{_e(),Se(),Te(),vp=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},$p=(e,t)=>{let r=e[0].dims.slice(),n=e[1].dims.slice(),[s,i,a]=Bm.getShapeOfGemmResult(r,t.transA,n,t.transB,e.length===3?e[2].dims:void 0),l=[s,i];if(!l)throw new Error("Can't use gemm on the given tensors");let u=16,c=Math.ceil(i/u),f=Math.ceil(s/u),h=!0,g=M.size(l),_=[{type:12,data:h?c:g},{type:12,data:s},{type:12,data:i},{type:12,data:a},{type:1,data:t.alpha},{type:1,data:t.beta}],b=["type","type"];e.length===3&&(_.push(...oe(e[2].dims)),b.push("rank")),_.push(...oe(l));let w=v=>{let $="";t.transA&&t.transB?$="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?$="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?$="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&($="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let k=t.alpha===1?"":"value *= uniforms.alpha;",x=U("a",e[0].dataType,e[0].dims),C=U("b",e[1].dataType,e[1].dims),z=x.type.value,O=null,B=[x,C];e.length===3&&(O=U("c",e[2].dataType,e[2].dims.length),B.push(O));let V=ne("output",e[0].dataType,l.length);B.push(V);let X=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${v.registerUniforms(X).declareVariables(...B)}

  ${v.mainStart()}
    ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${z}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${$}
    }

    ${k}
    ${O!=null?`let cOffset = ${O.broadcastedIndicesToOffset("vec2(m, n)",V)}; value += ${z}(uniforms.beta) * ${O.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},T=v=>{let $=U("a",e[0].dataType,e[0].dims),k=U("b",e[1].dataType,e[1].dims),x=null,C=[$,k];e.length===3&&(x=U("c",e[2].dataType,e[2].dims.length),C.push(x));let z=ne("output",e[0].dataType,l.length);C.push(z);let O=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],B="",V="";t.transA&&t.transB?(V=`
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
        tile_b[local_id.y][local_id.x] = ${k.type.value}(0);
      }
      `,B="value += tile_a[k][local_id.y] * tile_b[local_id.x][k];"):t.transA&&!t.transB?(V=`
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
        tile_b[local_id.y][local_id.x] = ${k.type.value}(0);
      }
      `,B="value += tile_a[k][local_id.y] * tile_b[k][local_id.x];"):!t.transA&&t.transB?(V=`
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
        tile_b[local_id.y][local_id.x] = ${k.type.value}(0);
      }
      `,B="value += tile_a[local_id.y][k] * tile_b[local_id.x][k];"):!t.transA&&!t.transB&&(V=`
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
        tile_b[local_id.y][local_id.x] = ${k.type.value}(0);
      }
      `,B="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let X=t.alpha===1?"":"value *= uniforms.alpha;";return`
  ${v.registerUniforms(O).declareVariables(...C)}
  var<workgroup> tile_a: array<array<${$.type.storage}, ${u}>, ${u}>;
  var<workgroup> tile_b: array<array<${k.type.storage}, ${u}>, ${u}>;
  ${v.mainStart([u,u,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * ${u};
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * ${u};
    let num_tiles = (uniforms.K - 1) / ${u} + 1;
    var k_start = 0u;
    var value = ${z.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${V}
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
    ${x!=null?`let cOffset = ${x.broadcastedIndicesToOffset("vec2(m, n)",z)}; value += ${z.type.value}(uniforms.beta) * ${x.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return h?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:b},getRunData:()=>({outputs:[{dims:l,dataType:e[0].dataType}],dispatchGroup:{x:c*f},programUniforms:_}),getShaderSource:T}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:b},getRunData:()=>({outputs:[{dims:l,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:_}),getShaderSource:w}},Ry=e=>{let t=e.transA,r=e.transB,n=e.alpha,s=e.beta;return{transA:t,transB:r,alpha:n,beta:s,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},My=(e,t)=>{vp(e.inputs),e.compute($p(e.inputs,t))}}),Qt,sr,zr,Ar,xp,Sp,Tp,Cp,kp,Ip,Ep,zp,By,Dy,k1=K(()=>{_e(),Se(),Ke(),Te(),[Qt,sr,zr,Ar]=[0,1,2,3],xp=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},Sp=`
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
`,Tp=e=>`
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
`,Cp=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,kp=e=>`
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
`,Ip=(e,t,r)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${Qt}] = batch;
     indices[${sr}] = channel;`+(()=>{switch(r.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${zr}] = u32(r);
            indices[${Ar}] = u32(c);
          }
        `;case"border":return`
          indices[${zr}] = u32(clamp(r, 0, H - 1));
          indices[${Ar}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${zr}] = gs_reflect(r, border[1], border[3]);
          indices[${Ar}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${r.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices("indices")};
  }
`,Ep=(e,t,r)=>(()=>{switch(r.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${Qt}], indices[${sr}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${Qt}], indices[${sr}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${Qt}], indices[${sr}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${Qt}], indices[${sr}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${Qt}], indices[${sr}], border);

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
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${Qt}], indices[${sr}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${r.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,zp=(e,t)=>{let r=U("x",e[0].dataType,e[0].dims.length),n=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],s=U("grid",e[1].dataType,n.length,2),i=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(i=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[Qt,sr,zr,Ar]=[0,3,1,2]);let a=ne("output",e[0].dataType,i.length),l=r.type.value,u=M.size(i),c=[{type:12,data:u},...oe(e[0].dims,n,i)],f=h=>`
  ${h.registerUniform("output_size","u32").declareVariables(r,s,a)}
  ${Sp}
  ${Tp(l)}
  ${Cp(t)}
  ${kp(t)}
  ${Ip(r,l,t)}

  ${h.mainStart()}
    ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${zr}]);
      let W_in = i32(uniforms.x_shape[${Ar}]);

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

      let indices = ${a.offsetToIndices("global_idx")};
      var grid_indices = vec3<u32>(indices[${Qt}], indices[${zr}], indices[${Ar}]);
      let nxy = ${s.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${Ep(a,l,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:h=>{let g=M.size(i);return{outputs:[{dims:i,dataType:h[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:c}},getShaderSource:f}},By=(e,t)=>{xp(e.inputs),e.compute(zp(e.inputs,t))},Dy=e=>Ne({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),pt,Ap,Ny,sa,Op,Oi,Py,Uy=K(()=>{_e(),Se(),Ke(),zo(),Ro(),Te(),kr(),pt=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,Ap=(e,t)=>{let r=e[0],n=pt(e,1),s=pt(e,2),i=pt(e,3),a=pt(e,4),l=pt(e,5),u=pt(e,6),c=pt(e,7);if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let f=r.dims[0],h=r.dims[1],g=r.dims.length===3?r.dims[2]:t.numHeads*r.dims[4],_=h,b=0,w=0,T=Math.floor(g/t.numHeads);if(u&&c&&M.size(u.dims)&&M.size(c.dims)){if(u.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(u.dims[0]!==f||u.dims[1]!==t.numHeads||u.dims[3]!==T)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(c.dims[0]!==f||c.dims[1]!==t.numHeads||c.dims[3]!==T)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(u.dims[2]!==c.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(c.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');b=u.dims[2],w=u.dims[2]}else if(u&&M.size(u.dims)||c&&M.size(c.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let v;if(n&&M.size(n.dims)>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(n.dims.length<3||n.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==n.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(n.dims.length===3){if(n.dims[2]!==r.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');v=2,_=n.dims[1]}else if(n.dims.length===5){if(n.dims[2]!==t.numHeads||n.dims[3]!==2||n.dims[4]!==T)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(s)throw new Error('Expect "value" be none when "key" has packed kv format.');v=5,_=n.dims[1]}else{if(n.dims[1]!==t.numHeads||n.dims[3]!==T)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');v=0,_=n.dims[2]}}else{if(r.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(r.dims[2]!==t.numHeads||r.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');v=3}if(i&&M.size(i.dims)>0){if(i.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(n&&n.dims.length===5&&n.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let $=b+_,k=0;if(a&&M.size(a.dims)>0){k=8;let O=a.dims;throw O.length===1?O[0]===f?k=1:O[0]===3*f+2&&(k=3):O.length===2&&O[0]===f&&O[1]===$&&(k=5),k===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let x=!1,C=g;if(s&&M.size(s.dims)>0){if(s.dims.length!==3&&s.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==s.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(s.dims.length===3){if(_!==s.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');C=s.dims[2]}else{if(_!==s.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');C=s.dims[1]*s.dims[3],x=!0}}let z=!1;if(a&&M.size(a.dims)>0)throw new Error("Key padding mask is not supported");if(l&&M.size(l.dims)>0){if(l.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(l.dims[0]!==f||l.dims[1]!==t.numHeads||l.dims[2]!==h||l.dims[3]!==$)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:f,sequenceLength:h,pastSequenceLength:b,kvSequenceLength:_,totalSequenceLength:$,maxSequenceLength:w,inputHiddenSize:0,hiddenSize:g,vHiddenSize:C,headSize:T,vHeadSize:Math.floor(C/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:k,scale:t.scale,broadcastResPosBias:z,passPastInKv:x,qkvFormat:v}},Ny=e=>Ne({...e}),sa=Ne({perm:[0,2,1,3]}),Op=(e,t,r,n,s,i,a)=>{let l=[n,s,i],u=M.size(l),c=[{type:12,data:u},{type:12,data:a},{type:12,data:i}],f=h=>{let g=ne("qkv_with_bias",t.dataType,l),_=U("qkv",t.dataType,l),b=U("bias",r.dataType,l),w=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${h.registerUniforms(w).declareVariables(_,b,g)}
  ${h.mainStart()}
    ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:l,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:c}),getShaderSource:f},{inputs:[t,r],outputs:[-1]})[0]},Oi=(e,t,r,n,s,i,a,l)=>{let u=i;if(a&&M.size(a.dims)>0){if(n===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return u=Op(e,i,a,t,n,r*s,l),u=u.reshape([t,n,r,s]),r===1||n===1?u:e.compute(kt(u,sa.perm),{inputs:[u],outputs:[-1]})[0]}else return i.dims.length===3&&(u=i.reshape([t,n,r,s])),r===1||n===1?u:e.compute(kt(u,sa.perm),{inputs:[u],outputs:[-1]})[0]},Py=(e,t)=>{let r=Ap(e.inputs,t),n=e.inputs[0],s=pt(e.inputs,1),i=pt(e.inputs,2),a=pt(e.inputs,3),l=pt(e.inputs,4),u=pt(e.inputs,5),c=pt(e.inputs,6),f=pt(e.inputs,7);if(n.dims.length===5)throw new Error("Packed QKV is not implemented");if((s==null?void 0:s.dims.length)===5)throw new Error("Packed KV is not implemented");let h=s&&i&&s.dims.length===4&&i.dims.length===4,g=Oi(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,n,a,0);if(h)return Hi(e,g,s,i,l,void 0,c,f,u,r);if(!s||!i)throw new Error("key and value must be provided");let _=Oi(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.headSize,s,a,r.hiddenSize),b=Oi(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.vHeadSize,i,a,2*r.hiddenSize);Hi(e,g,_,b,l,void 0,c,f,u,r)}}),Rp,Mp,Bp,Dp,Za,Wy,Ly,Vy=K(()=>{_e(),Se(),Ke(),Te(),Rp=e=>{if(!e||e.length<1)throw new Error("too few inputs")},Mp=(e,t)=>{let r=[],n=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(s=>r.push(Number(s))),n=r.length),Ne({numOutputs:n,axis:t.axis,splitSizes:r})},Bp=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${se("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,Dp=e=>{let t=e.length,r=[];for(let n=0;n<t;++n){let s=e[n].setByIndices("indices","input[global_idx]");t===1?r.push(s):n===0?r.push(`if (output_number == ${n}u) { ${s} }`):n===t-1?r.push(`else { ${s} }`):r.push(`else if (output_number == ${n}) { ${s} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${r.join(`
`)}
      }`},Za=(e,t)=>{let r=e[0].dims,n=M.size(r),s=e[0].dataType,i=M.normalizeAxis(t.axis,r.length),a=new Array(t.numOutputs),l=U("input",s,r.length),u=new Array(t.numOutputs),c=[],f=[],h=0,g=[{type:12,data:n}];for(let b=0;b<t.numOutputs;b++){h+=t.splitSizes[b],u[b]=h;let w=r.slice();w[i]=t.splitSizes[b],f.push(w),a[b]=ne(`output${b}`,s,w.length),c.push({dims:f[b],dataType:e[0].dataType})}g.push({type:12,data:u},...oe(r,...f));let _=b=>`
  ${b.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",u.length).declareVariables(l,...a)}
  ${Bp(u.length)}
  ${Dp(a)}

  ${b.mainStart()}
    ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${l.offsetToIndices("global_idx")};
    var index = ${l.indicesGet("indices",i)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${se("uniforms.size_in_split_axis","output_number - 1u",u.length)};
      ${l.indicesSet("indices",i,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:_,getRunData:()=>({outputs:c,dispatchGroup:{x:Math.ceil(n/64)},programUniforms:g})}},Wy=(e,t)=>{Rp(e.inputs);let r=e.inputs.length===1?t:Mp(e.inputs,t);e.compute(Za(e.inputs,r),{inputs:[0]})},Ly=e=>{let t=e.axis,r=e.splitSizes,n=e.numOutputs<0?r.length:e.numOutputs;if(n!==r.length)throw new Error("numOutputs and splitSizes lengh must be equal");return Ne({axis:t,numOutputs:n,splitSizes:r})}}),Np,Pp,aa,qy,I1=K(()=>{Ke(),Ro(),Uy(),Vy(),kr(),Np=(e,t)=>{if(t.doRotary)throw new Error("GroupQuerryAttention do_rotary attribute is not supported");if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let r=e[0],n=e[1],s=e[2],i=e[3],a=e[4];if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let l=!1,u=r.dims[0],c=r.dims[1],f=r.dims.length===3?l?r.dims[2]/3:r.dims[2]:t.numHeads*r.dims[4],h=c,g=0,_=!n||n.dims.length===0,b=Math.floor(_?f/(t.numHeads+2*t.kvNumHeads):f/t.numHeads);_&&(f=b*t.numHeads);let w=i&&i.dims.length!==0,T=a&&a.dims.length!==0;if(w&&i.dims.length===4&&i.dims[0]===u&&i.dims[1]!==t.kvNumHeads&&i.dims[2]===t.kvNumHeads&&i.dims[3]===b)throw new Error("BSNH pastKey/pastValue is not supported");if(w&&T){if(i.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(a.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');g=i.dims[2]}else if(w||T)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let v=1;if(n&&n.dims.length>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(n.dims.length<3||n.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==n.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(n.dims.length===3){if(r.dims[2]%n.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');h=n.dims[1]}else if(n.dims.length===5){if(n.dims[2]!==t.numHeads||n.dims[3]!==2||n.dims[4]!==b)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(s)throw new Error('Expect "value" be none when "key" has packed kv format.');h=n.dims[1]}else{if(n.dims[1]!==t.numHeads||n.dims[3]!==b)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');h=n.dims[2]}}else{if(r.dims.length!==3&&r.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(r.dims.length===5&&(r.dims[2]!==t.numHeads||r.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');v=3}let $=0,k=!1,x=t.kvNumHeads?b*t.kvNumHeads:f;if(s&&s.dims.length>0){if(s.dims.length!==3&&s.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==s.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(s.dims.length===3){if(h!==s.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');x=s.dims[2]}else{if(h!==s.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');x=s.dims[1]*s.dims[3],k=!0}}let C=e.length>4?e[5]:void 0;if(C&&C.dims.length!==1&&C.dims[0]!==u)throw new Error('Input "seqlens" is expected to have 1 dimension and the same dim 0 as batch_size');return{batchSize:u,sequenceLength:c,pastSequenceLength:g,kvSequenceLength:h,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:f,vHiddenSize:x,headSize:b,vHeadSize:Math.floor(x/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:$,scale:t.scale,broadcastResPosBias:!1,passPastInKv:k,qkvFormat:v}},Pp=Ne({perm:[0,2,1,3]}),aa=(e,t,r)=>{let n=t,s=r.kvNumHeads;return t.dims.length===3&&r.kvSequenceLength!==0&&(n=t.reshape([r.batchSize,r.kvSequenceLength,s,r.headSize]),n=e.compute(kt(n,Pp.perm),{inputs:[n],outputs:[-1]})[0]),n},qy=(e,t)=>{var T;let r=Np(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(((T=e.inputs[1])==null?void 0:T.dims.length)===5)throw new Error("Packed KV is not implemented");let n=e.inputs[0],s=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,i=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,a=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,l=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,u=e.inputs.length>4?e.inputs[5]:void 0,c=e.inputs.length>5?e.inputs[6]:void 0,f=r.kvNumHeads?r.kvNumHeads:r.numHeads,h=Ne({axis:2,numOutputs:3,splitSizes:[r.numHeads*r.headSize,f*r.headSize,f*r.headSize]}),[g,_,b]=!s&&!i?e.compute(Za([n],h),{inputs:[n],outputs:[-1,-1,-1]}):[n,s,i],w=Oi(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,g,void 0,0);Hi(e,w,aa(e,_,r),aa(e,b,r),void 0,void 0,a,l,void 0,r,u,c)}}),oa,Up,Wp,Fy,E1=K(()=>{_e(),Se(),kr(),Te(),oa=(e,t,r,n,s,i,a,l)=>{let u=Ge(i),c=u===1?"f32":`vec${u}f`,f=u===1?"vec2f":`mat2x${u}f`,h=s*a,g=64;h===1&&(g=256);let _=[s,a,i/u],b=[s,a,2],w=["rank","type","type"],T=[];T.push(...oe(_,b));let v=$=>{let k=U("x",t.dataType,3,u),x=U("scale",r.dataType,r.dims),C=U("bias",n.dataType,n.dims),z=ne("output",1,3,2),O=[k,x,C,z];return`
  var<workgroup> workgroup_shared : array<${f}, ${g}>;
  const workgroup_size = ${g}u;
  ${$.declareVariables(...O)}
  ${$.mainStart(g)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${c}(0);
    var squared_sum = ${c}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${c}(${k.get("batch","channel","h")});
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
      let sum_final = ${xr("workgroup_shared[0][0]",u)} / f32(hight * ${u});
      let squared_sum_final = ${xr("workgroup_shared[0][1]",u)} / f32(hight * ${u});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${l}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${u};${l};${g}`,inputDependencies:w},getRunData:()=>({outputs:[{dims:b,dataType:1}],dispatchGroup:{x:h},programUniforms:T}),getShaderSource:v},{inputs:[t,r,n],outputs:[-1]})[0]},Up=(e,t,r)=>{let n=t[0].dims,s=n,i=2,a=n[0],l=n[1],u=M.sizeFromDimension(n,i),c=Ge(u),f=M.size(s)/c,h=oa(e,t[0],t[1],t[2],a,u,l,r.epsilon),g=[a,l,u/c],_=[a,l],b=["type","none"],w=T=>{let v=U("x",t[0].dataType,g.length,c),$=U("scale_shift",1,_.length,2),k=ne("output",t[0].dataType,g.length,c),x=[v,$,k];return`
  ${T.registerUniform("output_size","u32").declareVariables(...x)}
  ${T.mainStart()}
  ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${k.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${$.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${v.getByOffset("global_idx")} * ${k.type.value}(scale_shift.x) + ${k.type.value}(scale_shift.y);
      ${k.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${c}`,inputDependencies:b},getRunData:()=>({outputs:[{dims:s,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:[{type:12,data:f},...oe(g,_,g)]}),getShaderSource:w},{inputs:[t[0],h]})},Wp=(e,t,r)=>{let n=t[0].dims,s=n,i=n[0],a=n[n.length-1],l=M.sizeFromDimension(n,1)/a,u=Ge(a),c=M.size(s)/u,f=[{type:12,data:l},{type:12,data:Math.floor(a/u)}],h=["type","type"],g=!1,_=[0,n.length-1];for(let v=0;v<n.length-2;v++)g=g||n[v+1]!==1,_.push(v+1);g=g&&n[n.length-1]!==1;let b=g?e.compute(kt(e.inputs[0],_),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:n.length},(v,$)=>n[_[$]])),w=oa(e,b,t[1],t[2],i,l,a,r.epsilon),T=v=>{let $=Je(t[0].dataType),k=u===1?"vec2f":`mat${u}x2f`,x=O=>{let B=O===0?"x":"y",V=u===1?"f32":`vec${u}f`;switch(u){case 1:return`${$}(${V}(scale.${B}))`;case 2:return`vec2<${$}>(${V}(scale[0].${B}, scale[1].${B}))`;case 4:return`vec4<${$}>(${V}(scale[0].${B}, scale[1].${B}, scale[2].${B}, scale[3].${B}))`;default:throw new Error(`Not supported compoents ${u}`)}},C=U("input",t[0].dataType,t[0].dims,u),z=ne("output",t[0].dataType,s,u);return`
  @group(0) @binding(0) var<storage, read> input : array<${C.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${k}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${z.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${v.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${x(0)}, ${x(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${u}`,inputDependencies:h},getRunData:()=>({outputs:[{dims:s,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:f}),getShaderSource:T},{inputs:[t[0],w]})},Fy=(e,t)=>{t.format==="NHWC"?Wp(e,e.inputs,t):Up(e,e.inputs,t)}}),Lp,Vp,Hy,z1=K(()=>{_e(),Se(),Te(),Lp=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},Vp=(e,t,r)=>{let n=t.simplified,s=e[0].dims,i=e[1],a=!n&&e[2],l=s,u=M.normalizeAxis(t.axis,s.length),c=M.sizeToDimension(s,u),f=M.sizeFromDimension(s,u),h=M.size(i.dims),g=a?M.size(a.dims):0;if(h!==f||a&&g!==f)throw new Error(`Size of X.shape()[axis:] == ${f}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${h} and bias size of ${g}`);let _=[];for(let C=0;C<s.length;++C)C<u?_.push(s[C]):_.push(1);let b=Ge(f),w=["type","type"],T=[{type:12,data:c},{type:1,data:f},{type:12,data:Math.floor(f/b)},{type:1,data:t.epsilon}];a&&w.push("type");let v=r>1,$=r>2,k=C=>{let z=Je(e[0].dataType),O=[U("x",e[0].dataType,e[0].dims,b),U("scale",i.dataType,i.dims,b)];a&&O.push(U("bias",a.dataType,a.dims,b)),O.push(ne("output",e[0].dataType,l,b)),v&&O.push(ne("mean_data_output",1,_)),$&&O.push(ne("inv_std_output",1,_));let B=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${C.registerUniforms(B).declareVariables(...O)}
  ${C.mainStart()}
    ${C.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${La("f32",b)};
    var mean_square_vector = ${La("f32",b)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${ri(z,b,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${xr("mean_vector",b)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${xr("mean_square_vector",b)} / uniforms.norm_size ${n?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${ri(z,b,"x[j + offset]")};
      let f32scale = ${ri(z,b,"scale[j]")};
      output[j + offset] = ${O[0].type.value}((f32input ${n?"":"- mean"}) * inv_std_dev * f32scale
        ${a?`+ ${ri(z,b,"bias[j]")}`:""}
      );
    }

    ${v?"mean_data_output[global_idx] = mean":""};
    ${$?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},x=[{dims:l,dataType:e[0].dataType}];return v&&x.push({dims:_,dataType:1}),$&&x.push({dims:_,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${b};${r};${n}`,inputDependencies:w},getRunData:()=>({outputs:x,dispatchGroup:{x:Math.ceil(c/64)},programUniforms:T}),getShaderSource:k}},Hy=(e,t)=>{Lp(e.inputs),e.compute(Vp(e.inputs,t,e.outputCount))}}),qp,Gy,A1=K(()=>{Se(),Po(),Uo(),qp=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},Gy=e=>{qp(e.inputs);let t=di.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let r=t[t.length-1],n=e.inputs[0].dims[e.inputs[0].dims.length-1];if(r<8&&n<8)e.compute(No(e.inputs,{activation:""},t));else{let s=t[t.length-2],i=M.size(e.inputs[0].dims.slice(0,-2)),a=M.size(e.inputs[1].dims.slice(0,-2));if(i!==1&&s===1&&a===1){let l=e.inputs[0].reshape([1,i,n]),u=e.inputs[1].reshape([1,n,r]),c=[1,i,r],f=[l,u];e.compute(Vn(f,{activation:""},t,c),{inputs:f})}else e.compute(Vn(e.inputs,{activation:""},t))}}}),Fp,Hp,Gp,jy,Ky,O1=K(()=>{_e(),Se(),Ke(),Te(),Fp=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let r=e[0],n=r.dims.length;if(r.dims[n-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let s=Math.floor((t.k+t.blockSize-1)/t.blockSize),i=t.blockSize/8*t.bits,a=e[1];if(!M.areEqual(a.dims,[t.n,s,i]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let l=e[2].dims;if(M.size(l)!==t.n*s)throw new Error("scales input size error.");if(e.length===4){let u=e[3].dims,c=t.bits>4?t.n*s:t.n*Math.floor((s+1)/2);if(M.size(u)!==c)throw new Error("zeroPoints input size error.")}},Hp=(e,t)=>{let r=e[0].dims,n=r.length,s=r[n-2],i=t.k,a=t.n,l=r.slice(0,n-2),u=M.size(l),c=e[1].dims[2]/4,f=e[0].dataType,h=Ge(t.k),g=Ge(c),_=Ge(a),b=l.concat([s,a]),w=s>1&&a/_%2===0?2:1,T=M.size(b)/_/w,v=64,$=[],k=[u,s,i/h],x=M.convertShape(e[1].dims).slice();x.splice(-1,1,c/g),$.push(...oe(k)),$.push(...oe(x)),$.push(...oe(e[2].dims)),e.length===4&&$.push(...oe(M.convertShape(e[3].dims)));let C=[u,s,a/_];$.push(...oe(C));let z=O=>{let B=k.length,V=U("a",e[0].dataType,B,h),X=U("b",12,x.length,g),ue=U("scales",e[2].dataType,e[2].dims.length),ge=[V,X,ue],ae=e.length===4?U("zero_points",12,e[3].dims.length):void 0;ae&&ge.push(ae);let he=C.length,fe=ne("output",e[0].dataType,he,_),Q=Je(e[0].dataType),le=(()=>{switch(h){case 1:return`array<${Q}, 8>`;case 2:return`mat4x2<${Q}>`;case 4:return`mat2x4<${Q}>`;default:throw new Error(`${h}-component is not supported.`)}})(),de=()=>{let N=`
          // reuse a data
            var input_offset = ${V.indicesToOffset(`${V.type.indices}(batch, row, word_offset)`)};
            var a_data: ${le};
            for (var j: u32 = 0; j < ${8/h}; j++) {
              a_data[j] = ${V.getByOffset("input_offset")};
              input_offset++;
            }
          `;for(let q=0;q<_*w;q++)N+=`
            b_value = ${g===1?`b${q}_data`:`b${q}_data[i]`};
            b_value_lower = unpack4xU8(b_value & b_mask);
            b_value_upper = unpack4xU8((b_value >> 4) & b_mask);
            b_quantized_values = ${le}(${Array.from({length:4},(ke,We)=>`${Q}(b_value_lower[${We}]), ${Q}(b_value_upper[${We}])`).join(", ")});
            b_dequantized_values = ${h===1?`${le}(${Array.from({length:8},(ke,We)=>`(b_quantized_values[${We}] - ${ae?`zero_point${q}`:"zero_point"}) * scale${q}`).join(", ")});`:`(b_quantized_values - ${le}(${Array(8).fill(`${ae?`zero_point${q}`:"zero_point"}`).join(",")})) * scale${q};`};
            workgroup_shared[local_id.x * ${w} + ${Math.floor(q/_)}]${_>1?`[${q%_}]`:""} += ${Array.from({length:8/h},(ke,We)=>`${h===1?`a_data[${We}] * b_dequantized_values[${We}]`:`dot(a_data[${We}], b_dequantized_values[${We}])`}`).join(" + ")};
          `;return N},ee=()=>{let N=`
            var col_index = col * ${_};
            ${ae?`
            let zero_point_bytes_per_col = (nBlocksPerCol + 1) / 2;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${Q}(8);`}
            `;for(let q=0;q<_*w;q++)N+=`
            let scale${q} = ${ue.getByOffset("col_index * nBlocksPerCol + block")};
            ${ae?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block >> 0x1u);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            zero_point_word = ${ae.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${q} = ${Q}((zero_point_word) & 0xFu);`:""}
            col_index += 1;`;return N},Ae=()=>{let N=`col_index = col * ${_};`;for(let q=0;q<_*w;q++)N+=`
            let b${q}_data = ${X.getByIndices(`${X.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return N+=`
            var b_value: u32;
            let b_mask: u32 = 0x0F0F0F0Fu;
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${le};
            var b_dequantized_values: ${le};`,N};return`
        var<workgroup> workgroup_shared: array<${fe.type.value}, ${w*v}>;
        ${O.declareVariables(...ge,fe)}
        ${O.mainStart([v,1,1])}
          let output_indices = ${fe.offsetToIndices(`(global_idx / ${v}) * ${w}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${v}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/h};
            ${ee()}
            for (var word: u32 = 0; word < ${c}; word += ${g}) {
              ${Ae()}
              for (var i: u32 = 0; i < ${g}; i++) {
                ${de()}
                word_offset += ${8/h};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${w}) {
            var output_value: ${fe.type.value} = ${fe.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${v}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${w};
            }
            ${fe.setByIndices(`${fe.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${h};${g};${_};${w};${v}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:b,dataType:f}],dispatchGroup:{x:T},programUniforms:$}),getShaderSource:z}},Gp=(e,t)=>{let r=e[0].dims,n=r.length,s=r[n-2],i=t.k,a=t.n,l=r.slice(0,n-2),u=M.size(l),c=e[1].dims[2]/4,f=e[0].dataType,h=Ge(t.k),g=Ge(c),_=l.concat([s,a]),b=128,w=a%8===0?8:a%4===0?4:1,T=b/w,v=T*g*8,$=v/h,k=v/t.blockSize,x=M.size(_)/w,C=[],z=[u,s,i/h],O=M.convertShape(e[1].dims).slice();O.splice(-1,1,c/g),C.push(...oe(z)),C.push(...oe(O)),C.push(...oe(e[2].dims)),e.length===4&&C.push(...oe(M.convertShape(e[3].dims)));let B=[u,s,a];C.push(...oe(B));let V=X=>{let ue=z.length,ge=U("a",e[0].dataType,ue,h),ae=U("b",12,O.length,g),he=U("scales",e[2].dataType,e[2].dims.length),fe=[ge,ae,he],Q=e.length===4?U("zero_points",12,e[3].dims.length):void 0;Q&&fe.push(Q);let le=B.length,de=ne("output",e[0].dataType,le),ee=Je(e[0].dataType),Ae=()=>{switch(h){case 1:return`
          let a_data0 = vec4<${ee}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${ee}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${ee}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${ee}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${h}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${ge.type.value}, ${$}>;
        var<workgroup> inter_results: array<array<${de.type.value}, ${T}>, ${w}>;
        ${X.declareVariables(...fe,de)}
        ${X.mainStart([T,w,1])}
          let output_indices = ${de.offsetToIndices(`workgroup_index * ${w}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${k} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${$};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${$}; a_offset += ${b})
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
            let block = tile * ${k} + local_id.x;
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
            let b_data = ${ae.getByIndices(`${ae.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/h};
            for (var i: u32 = 0; i < ${g}; i++) {
              ${Ae()}
              let b_value = ${g===1?"b_data":"b_data[i]"};
              let b_value_lower = unpack4xU8(b_value & 0x0F0F0F0Fu);
              let b_value_upper = unpack4xU8((b_value >> 4) & 0x0F0F0F0Fu);
              let b_quantized_values = mat2x4<${ee}>(${Array.from({length:4},(N,q)=>`${ee}(b_value_lower[${q}]), ${ee}(b_value_upper[${q}])`).join(", ")});
              let b_dequantized_values = (b_quantized_values - mat2x4<${ee}>(${Array(8).fill("zero_point").join(",")})) * scale;
              inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(N,q)=>`${`dot(a_data${q}, b_dequantized_values[${q}])`}`).join(" + ")};
              word_offset += ${8/h};
            }
            workgroupBarrier();
          }

          if (local_idx < ${w}) {
            var output_value: ${de.type.value} = ${de.type.value}(0);
            for (var b = 0u; b < ${T}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${de.setByIndices(`${de.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${h};${g};${T};${w}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:_,dataType:f}],dispatchGroup:{x},programUniforms:C}),getShaderSource:V}},jy=(e,t)=>{Fp(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(Gp(e.inputs,t)):e.compute(Hp(e.inputs,t))},Ky=e=>Ne(e)}),jp,Kp,Qp,Zp,Xp,Yp,Jp,ef,Qy,R1=K(()=>{_e(),Se(),Te(),jp=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},Kp=(e,t,r)=>{let n="";for(let s=t-1;s>=0;--s)n+=`
            k = i32(${e.indicesGet("indices",s)}) - ${se("uniforms.pads",s,r)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${se("uniforms.x_shape",s,t)})) {
              break;
            }
            offset += k * i32(${se("uniforms.x_strides",s,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${n}
            value = x[offset];
          }
      `},Qp=(e,t,r)=>{let n="";for(let s=t-1;s>=0;--s)n+=`
                k = i32(${e.indicesGet("indices",s)}) - ${se("uniforms.pads",s,r)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${se("uniforms.x_shape",s,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${se("uniforms.x_shape",s,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${se("uniforms.x_strides",s,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${n}
              value = x[offset];
          `},Zp=(e,t,r)=>{let n="";for(let s=t-1;s>=0;--s)n+=`
                k = i32(${e.indicesGet("indices",s)}) - ${se("uniforms.pads",s,r)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${se("uniforms.x_shape",s,t)})) {
                  k = i32(${se("uniforms.x_shape",s,t)}) - 1;
                }
                offset += k * i32(${se("uniforms.x_strides",s,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${n}
              value = x[offset];
          `},Xp=(e,t,r)=>{let n="";for(let s=t-1;s>=0;--s)n+=`
                k = i32(${e.indicesGet("indices",s)}) - ${se("uniforms.pads",s,r)};
                if (k < 0)  {
                  k += i32(${se("uniforms.x_shape",s,t)}]);
                }
                if (k >= i32(${se("uniforms.x_shape",s,t)})) {
                  k -= i32(${se("uniforms.x_shape",s,t)});
                }
                offset += k * i32(${se("uniforms.x_strides",s,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${n}
              value = x[offset];
          `},Yp=(e,t,r)=>{switch(r.mode){case 0:return Kp(e,t,r.pads.length);case 1:return Qp(e,t,r.pads.length);case 2:return Zp(e,t,r.pads.length);case 3:return Xp(e,t,r.pads.length);default:throw new Error("Invalid mode")}},Jp=(e,t)=>{let r=M.padShape(e[0].dims.slice(),t.pads),n=e[0].dims,s=M.size(r),i=[{type:12,data:s},{type:6,data:t.pads}],a=e.length>=3&&e[2].data;t.mode===0&&i.push({type:a?e[2].dataType:1,data:t.value}),i.push(...oe(e[0].dims,r));let l=["rank"],u=c=>{let f=ne("output",e[0].dataType,r.length),h=U("x",e[0].dataType,n.length),g=h.type.value,_=Yp(f,n.length,t),b=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&b.push({name:"constant_value",type:a?g:"f32"}),`
            ${c.registerUniforms(b).declareVariables(h,f)}
            ${c.mainStart()}
            ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${f.offsetToIndices("global_idx")};

            var value = ${g}(0);
            ${_}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${a}`,inputDependencies:l},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(M.size(r)/64)},programUniforms:i}),getShaderSource:u}},ef=(e,t)=>{if(e.length>1){let r=e[1].getBigInt64Array(),n=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,s=e[0].dims.length,i=new Int32Array(2*s).fill(0);if(e.length>=4){let l=e[3].getBigInt64Array();for(let u=0;u<l.length;u++)i[Number(l[u])]=Number(r[u]),i[Number(l[u])+s]=Number(r[u+l.length])}else r.forEach((l,u)=>i[Number(u)]=Number(l));let a=[];return i.forEach(l=>a.push(l)),{mode:t.mode,value:n,pads:a}}else return t},Qy=(e,t)=>{jp(e.inputs);let r=ef(e.inputs,t);e.compute(Jp(e.inputs,r),{inputs:[0]})}}),Si,la,ua,da,ca,tf,rf,pa,fa,Zy,Xy,ha,Yy,Jy,ma,e_,t_,r_,i_,M1=K(()=>{Vt(),_e(),Se(),Te(),Si=e=>{if(He.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},la=(e,t,r)=>{let n=t.format==="NHWC",s=e.dims.slice();n&&s.splice(1,0,s.pop());let i=Object.hasOwnProperty.call(t,"dilations"),a=t.kernelShape.slice(),l=t.strides.slice(),u=i?t.dilations.slice():[],c=t.pads.slice();Wn.adjustPoolAttributes(r,s,a,l,u,c);let f=Wn.computePoolOutputShape(r,s,l,u,a,c,t.autoPad),h=Object.assign({},t);i?Object.assign(h,{kernelShape:a,strides:l,pads:c,dilations:u,cacheKey:t.cacheKey}):Object.assign(h,{kernelShape:a,strides:l,pads:c,cacheKey:t.cacheKey});let g=f.slice();return g.push(g.splice(1,1)[0]),[h,n?g:f]},ua=(e,t)=>{let r=t.format==="NHWC",n=M.size(e),s=M.size(t.kernelShape),i=[{type:12,data:n},{type:12,data:s}],a=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let l=t.kernelShape[t.kernelShape.length-1],u=t.strides[t.strides.length-1],c=t.pads[t.pads.length/2-1],f=t.pads[t.pads.length-1],h=!!(c+f);i.push({type:12,data:l},{type:12,data:u},{type:12,data:c},{type:12,data:f}),a.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let g=!1;if(t.kernelShape.length===2){let _=t.kernelShape[t.kernelShape.length-2],b=t.strides[t.strides.length-2],w=t.pads[t.pads.length/2-2],T=t.pads[t.pads.length-2];g=!!(w+T),i.push({type:12,data:_},{type:12,data:b},{type:12,data:w},{type:12,data:T}),a.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[i,a,!0,h,g]}else{if(r)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let l=M.computeStrides(t.kernelShape);i.push({type:12,data:l},{type:12,data:t.pads},{type:12,data:t.strides}),a.push({name:"kernelStrides",type:"u32",length:l.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let u=t.pads.reduce((c,f)=>c+f);return[i,a,!!u,!1,!1]}},da=(e,t,r,n,s,i,a,l,u,c,f,h)=>{let g=s.format==="NHWC",_=t.type.value,b=ne("output",t.type.tensor,n);if(s.kernelShape.length<=2){let w="",T="",v="",$=r-(g?2:1);if(f?w=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${$}] = indices[${$}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${$}] < 0 || xIndices[${$}]
                      >= uniforms.x_shape[${$}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${i}
                }`:w=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${$}] = indices[${$}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${i}
                }`,s.kernelShape.length===2){let k=r-(g?3:2);h?T=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${k}] = indices[${k}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${k}] < 0 || xIndices[${k}] >= uniforms.x_shape[${k}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:T=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${k}] = indices[${k}] * uniforms.sh - uniforms.phStart + j;
                `,v=`
              }
            `}return`
            ${e.registerUniforms(u).declareVariables(t,b)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

              let indices = ${b.offsetToIndices("global_idx")};
              var xIndices = ${b.offsetToIndices("global_idx")};

              var value = ${_}(${l});
              var pad = 0;
              ${T}
              ${w}
              ${v}
              ${a}

              output[global_idx] = value;
            }`}else{if(g)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let w=s.kernelShape.length,T=s.pads.length,v="";return c?v=`
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
                  offsets[j] = offset / ${se("uniforms.kernelStrides","j",w)};
                  offset -= offsets[j] * ${se("uniforms.kernelStrides","j",w)};
                }
                offsets[${w-1}] = offset;

                isPad = false;
                for (var j = ${r-w}u; j < ${r}u; j++) {
                  xIndices[j] = indices[j] * ${se("uniforms.strides",`j - ${r-w}u`,w)}
                    + offsets[j - ${r-w}u] - ${se("uniforms.pads","j - 2u",T)};
                  ${v}
              }
              ${a}

              output[global_idx] = value;
            }`}},ca=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,tf=e=>`${ca(e)};${e.countIncludePad}`,rf=e=>`${ca(e)};${e.storageOrder};${e.dilations}`,pa=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),fa=(e,t,r,n)=>{let[s,i]=la(t,n,r),a=U("x",t.dataType,t.dims.length),l=a.type.value,u="value += x_val;",c="";s.countIncludePad?c+=`value /= ${l}(uniforms.kernelSize);`:c+=`value /= ${l}(i32(uniforms.kernelSize) - pad);`;let[f,h,g,_,b]=ua(i,s);f.push(...oe(t.dims,i));let w=["rank"];return{name:e,shaderCache:{hint:`${n.cacheKey};${g};${_};${b}`,inputDependencies:w},getRunData:()=>({outputs:[{dims:i,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(M.size(i)/64)},programUniforms:f}),getShaderSource:T=>da(T,a,t.dims.length,i.length,s,u,c,0,h,g,_,b)}},Zy=e=>{let t=e.count_include_pad!==0,r=pa(e);if(r.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let n={countIncludePad:t,...r,cacheKey:""};return{...n,cacheKey:tf(n)}},Xy=(e,t)=>{Si(e.inputs),e.compute(fa("AveragePool",e.inputs[0],!1,t))},ha={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},Yy=e=>{let t=e.format;return{format:t,...ha,cacheKey:t}},Jy=(e,t)=>{Si(e.inputs),e.compute(fa("GlobalAveragePool",e.inputs[0],!0,t))},ma=(e,t,r,n)=>{let[s,i]=la(t,n,r),a=`
      value = max(x_val, value);
    `,l="",u=U("x",t.dataType,t.dims.length),c=["rank"],[f,h,g,_,b]=ua(i,s);return f.push(...oe(t.dims,i)),{name:e,shaderCache:{hint:`${n.cacheKey};${g};${_};${b}`,inputDependencies:c},getRunData:()=>({outputs:[{dims:i,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(M.size(i)/64)},programUniforms:f}),getShaderSource:w=>da(w,u,t.dims.length,i.length,s,a,l,t.dataType===10?-65504:-1e5,h,g,_,b)}},e_=(e,t)=>{Si(e.inputs),e.compute(ma("MaxPool",e.inputs[0],!1,t))},t_=e=>{let t=e.storage_order,r=e.dilations,n=pa(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(n.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let s={storageOrder:t,dilations:r,...n,cacheKey:""};return{...s,cacheKey:rf(s)}},r_=e=>{let t=e.format;return{format:t,...ha,cacheKey:t}},i_=(e,t)=>{Si(e.inputs),e.compute(ma("GlobalMaxPool",e.inputs[0],!0,t))}}),nf,sf,n_,s_,B1=K(()=>{_e(),Se(),Ke(),Te(),nf=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[0].dataType===6&&e.length>2)throw new Error("In the case of dequantizing int32 there is no zero point.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((r,n)=>r===e[2].dims[n]).reduce((r,n)=>r&&n,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((s,i)=>i===t.axis||s===e[0].dims[i]).reduce((s,i)=>s&&i,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let r=e[0].dims[t.axis],n=e[1].dims[t.axis];if(t.blockSize<Math.ceil(r/n)||t.blockSize>Math.ceil(r/(n-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},sf=(e,t)=>{let r=M.normalizeAxis(t.axis,e[0].dims.length),n=e[0].dataType,s=n===3,i=e[0].dims,a=e[1].dataType,l=M.size(i),u=n===3||n===2,c=u?[Math.ceil(M.size(e[0].dims)/4)]:e[0].dims,f=e[1].dims,h=e.length>2?e[2]:void 0,g=h?u?[Math.ceil(M.size(h.dims)/4)]:h.dims:void 0,_=f.length===0||f.length===1&&f[0]===1,b=_===!1&&f.length===1,w=Ge(l),T=_&&(!u||w===4),v=T?w:1,$=T&&!u?w:1,k=U("input",u?12:n,c.length,$),x=U("scale",a,f.length),C=h?U("zero_point",u?12:n,g.length):void 0,z=ne("output",a,i.length,v),O=[k,x];C&&O.push(C);let B=[c,f];h&&B.push(g);let V=[{type:12,data:l/v},{type:12,data:r},{type:12,data:t.blockSize},...oe(...B,i)],X=ue=>{let ge=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${ue.registerUniforms(ge).declareVariables(...O,z)}
      ${ue.mainStart()}
          ${ue.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${z.offsetToIndices("global_idx")};

          // Set input x
          ${u?`
            let input = ${k.getByOffset("global_idx / 4")};
            let x_vec = ${s?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${v===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${k.getByOffset("global_idx")};`};

          // Set scale input
          ${_?`let scale_value= ${x.getByOffset("0")}`:b?`
            let scale_index = ${z.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${x.getByOffset("scale_index")};`:`
            var scale_indices: ${x.type.indices} = output_indices;
            let index = ${x.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${x.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${x.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${C?_?u?`
                let zero_point_input = ${C.getByOffset("0")};
                let zero_point_vec =  ${s?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${C.getByOffset("0")}`:b?u?`
                let zero_point_index = ${z.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${C.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${s?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${z.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${C.getByOffset("zero_point_index")};`:u?`
                let zero_point_offset = ${x.indicesToOffset("scale_indices")};
                let zero_point_input = ${C.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${s?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${C.getByIndices("scale_indices")};`:`let zero_point_value = ${u?s?"i32":"u32":k.type.value}(0);`};
      // Compute and write output
      ${z.setByOffset("global_idx",`${z.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:C?["rank","rank","rank"]:["rank","rank"]},getShaderSource:X,getRunData:()=>({outputs:[{dims:i,dataType:a}],dispatchGroup:{x:Math.ceil(l/v/64),y:1,z:1},programUniforms:V})}},n_=(e,t)=>{nf(e.inputs,t),e.compute(sf(e.inputs,t))},s_=e=>Ne({axis:e.axis,blockSize:e.blockSize})}),af,of,a_,D1=K(()=>{Vt(),_e(),Te(),af=(e,t,r)=>{let n=e===t,s=e<t&&r<0,i=e>t&&r>0;if(n||s||i)throw new Error("Range these inputs' contents are invalid.")},of=(e,t,r,n)=>{let s=Math.abs(Math.ceil((t-e)/r)),i=[s],a=s,l=[{type:12,data:a},{type:n,data:e},{type:n,data:r},...oe(i)],u=c=>{let f=ne("output",n,i.length),h=f.type.value,g=[{name:"outputSize",type:"u32"},{name:"start",type:h},{name:"delta",type:h}];return`
        ${c.registerUniforms(g).declareVariables(f)}
        ${c.mainStart()}
        ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${h}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${n}`},getShaderSource:u,getRunData:()=>({outputs:[{dims:i,dataType:n}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:l})}},a_=e=>{let t=0,r=0,n=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],r=e.inputs[1].getInt32Array()[0],n=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],r=e.inputs[1].getFloat32Array()[0],n=e.inputs[2].getFloat32Array()[0]),He.webgpu.validateInputContent&&af(t,r,n),e.compute(of(t,r,n,e.inputs[0].dataType),{inputs:[]})}}),lf,uf,o_,l_,N1=K(()=>{_e(),Se(),Ke(),Te(),lf=(e,t,r,n)=>{if(e!=="none"&&n!=="i32"&&n!=="u32"&&n!=="f32")throw new Error(`Input ${n} is not supported with reduction ${e}.`);let s=`{
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
              ${s}bitcast<${n}>(oldValue) + (${r})${i}`;case"max":return n==="i32"||n==="u32"?`atomicMax(&${t}, bitcast<${n}>(${r}));`:`
                ${s}max(bitcast<f32>(oldValue), (${r}))${i}`;case"min":return n==="i32"||n==="u32"?`atomicMin(&${t}, bitcast<${n}>(${r}));`:`${s}min(bitcast<${n}>(oldValue), (${r}))${i}`;case"mul":return`${s}(bitcast<${n}>(oldValue) * (${r}))${i}`;default:throw new Error(`Reduction ${e} is not supported.`)}},uf=(e,t)=>{let r=e[0].dims,n=e[1].dims,s=r,i=1,a=Math.ceil(M.size(n)/i),l=n[n.length-1],u=M.sizeFromDimension(r,l),c=[{type:12,data:a},{type:12,data:l},{type:12,data:u},...oe(e[1].dims,e[2].dims,s)],f=h=>{let g=U("indices",e[1].dataType,e[1].dims.length),_=U("updates",e[2].dataType,e[2].dims.length,i),b=t.reduction!=="none"&&t.reduction!==""?Pm("output",e[0].dataType,s.length):ne("output",e[0].dataType,s.length,i);return`
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
    ${lf(t.reduction,"output[data_offset + i]","value",b.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:c}),getShaderSource:f}},o_=e=>Ne({reduction:e.reduction}),l_=(e,t)=>{e.compute(uf(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),df,cf,pf,ga,ff,hf,mf,gf,yf,_f,bf,wf,ya,vf,$f,xf,Sf,Tf,u_,d_,P1=K(()=>{_e(),Se(),Ke(),Te(),df=(e,t)=>{if(e.every(r=>r>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},cf=(e,t,r)=>{t.every(s=>s>=0&&s<r||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let n=new Array(r).fill(1);return t.forEach((s,i)=>n[s]=e[i]),n},pf=(e,t,r,n,s,i)=>{let[a,l,u]=r>10?[1,2,3]:[-1,e.length>1?1:-1,-1],c=e[0].dims.length;if(a>0&&e.length>a&&e[a].dims.length>0)e[a].getFloat32Array().forEach(f=>i.push(f));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(l>0&&e.length>l&&e[l].dims.length===1&&e[l].dims[0]>0){if(e[l].getFloat32Array().forEach(f=>n.push(f)),n.length!==0&&n.length!==c&&r>=18&&n.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");df(n,t),t.axes.length>0&&cf(n,t.axes,c).forEach((f,h)=>n[h]=f)}if(u>0&&e.length>u&&e[u].dims.length===1&&e[u].dims[0]>0&&(e[u].getBigInt64Array().forEach(f=>s.push(Number(f))),s.length!==0&&s.length!==c&&r>=18&&s.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(n.length!==0&&n.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(s.length!==0&&s.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof n<"u"&&typeof s<"u"&&n.length>0&&s.length>c)throw new Error("Resize requires only of scales or sizes to be specified")},ga=(e,t,r,n)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${n}(big / (${r}));
  let fract = ${n}(big % (${r})) / ${n}(${r});
  return whole + fract;
`,ff=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${ga("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${ga("xResized","lengthOriginal - 1","lengthResized - 1",t)}
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
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",hf=(e,t,r)=>`fn getNearestPixelFromOriginal(xOriginal: ${r}, isDownSample: bool) -> ${r} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";case"simple":default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",mf=(e,t,r)=>{let n=new Array(r).fill(0).concat(new Array(r).fill(1)),s=e.length===0?n:e.slice();return t.length>0?(t.forEach((i,a)=>{n[i]=s[a],n[a+r]=s[t.length+a]}),n):s},gf=(e,t,r,n)=>{let s=[];if(r.length>0)if(n.length>0){if(e.forEach(i=>s.push(i)),Math.max(...n)>e.length)throw new Error("axes is out of bound");n.forEach((i,a)=>s[i]=r[a])}else r.forEach(i=>s.push(i));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");s=e.map((i,a)=>Math.round(i*t[a]))}return s},yf=(e,t,r)=>{let n=(()=>{switch(r.keepAspectRatioPolicy){case"not_larger":return r.axes.length>0?Math.min(...r.axes.map(i=>t[i]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return r.axes.length>0?Math.max(...r.axes.map(i=>t[i]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${r.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let s=e.slice();return r.axes.length>0?(r.axes.forEach(i=>t[i]=n),r.axes.forEach(i=>s[i]=Math.round(e[i]*t[i]))):(t.fill(n,0,t.length),s.forEach((i,a)=>s[a]=Math.round(i*t[a]))),s},_f=(e,t,r,n,s)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${r.length}> {
      var original_indices: array<${e.type.value}, ${r.length}>;
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${se("uniforms.scales","i",n)};
        var roi_low = ${se("uniforms.roi","i",s)};
        var roi_hi = ${se("uniforms.roi",`i + ${t.length}`,s)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${se("uniforms.input_shape","i",t.length)};
          var output_shape_i = ${se("uniforms.output_shape","i",r.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,bf=(e,t,r,n,s,i,a)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${n.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${se("uniforms.scales","i",s)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${se("uniforms.roi","i",i)};
          var roi_hi = ${se("uniforms.roi",`i + ${r.length}`,i)};
          var input_shape_i = ${se("uniforms.input_shape","i",r.length)};
          var output_shape_i = ${se("uniforms.output_shape","i",n.length)};
          var original_idx = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                        input_shape_i, roi_low, roi_hi);
          if (!${a} || (original_idx >= 0 && original_idx < ${t.type.value}(input_shape_i))) {
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
    }`,wf=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${se("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,ya=(e,t,r,n)=>e.rank>n?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",r,"batch")};
`:"",vf=(e,t,r,n,s)=>{let[i,a,l,u]=r.length===2?[-1,0,1,-1]:[0,2,3,1],c=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${c} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",a,`max(0, min(row, ${r[a]} - 1))`)};
      ${e.indicesSet("input_indices",l,`max(0, min(col, ${r[l]} - 1))`)};
      ${ya(e,u,i,2)}
      return ${e.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${t.type.indices}) -> ${c} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${c} = originalIndices[${a}];
      var col:${c} = originalIndices[${l}];
      ${n?`if (row < 0 || row > (${r[a]} - 1) || col < 0 || col > (${r[l]} - 1)) {
        return ${s};
      }`:""};
      row = max(0, min(row, ${r[a]} - 1));
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
    }`},$f=(e,t,r,n,s,i,a,l,u,c)=>{let f=r.length===2,[h,g]=f?[0,1]:[2,3],_=e.type.value,b=w=>{let T=w===h?"row":"col";return`
      fn ${T}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${_} {
        var output_index = ${t.indicesGet("output_indices",w)};
        var originalIdx: ${_} = getOriginalCoordinateFromResizedCoordinate(output_index, ${s[w]},
        ${n[w]}, ${r[w]}, ${i[w]}, ${i[w]} + ${r.length});
        var fractOriginalIdx: ${_} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${l} && (originalIdx < 0 || originalIdx > (${r[w]} - 1))) {
          return ${u};
        }
        var data: array<${_}, 4> = array<${_}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${T}: ${_} = originalIdx + ${_}(i);
          if (${T} < 0 || ${T} >= ${r[w]}) {
            ${c?`coefs[i + 1] = 0.0;
                        continue;`:l?`return ${u};`:`${T} = max(0, min(${T}, ${r[w]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet("input_indices_copy",w,`u32(${T})`)};
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
    coeffs[0] = ((${a} * onePlusAbsS - 5 * ${a}) * onePlusAbsS + 8 * ${a}) * onePlusAbsS - 4 * ${a};
    coeffs[1] = ((${a} + 2) * absS - (${a} + 3)) * absS * absS + 1;
    coeffs[2] = ((${a} + 2) * oneMinusAbsS - (${a} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${a} * twoMinusAbsS - 5 * ${a}) * twoMinusAbsS + 8 * ${a}) * twoMinusAbsS - 4 * ${a};
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
    `},xf=(e,t,r,n,s)=>{let[i,a,l,u,c]=r.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],f=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${f} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",a,`max(0, min(depth, ${r[a]} - 1))`)};
      ${e.indicesSet("input_indices",l,`max(0, min(height, ${r[l]} - 1))`)};
      ${e.indicesSet("input_indices",u,`max(0, min(width, ${r[u]} - 1))`)};
      ${ya(e,c,i,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${f} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${f} = originalIndices[${a}];
      var height:${f} = originalIndices[${l}];
      var width:${f} = originalIndices[${u}];
      ${n?`if (depth < 0 || depth > (${r[a]} - 1) || height < 0 || height > (${r[l]} - 1) || width < 0 || (width > ${r[u]} - 1)) {
      return ${s};
        }`:""};

    depth = max(0, min(depth, ${r[a]} - 1));
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
    }`},Sf=(e,t,r,n,s,i)=>{let a=e.dims,l=mf(i,t.axes,a.length),u=gf(a,n,s,t.axes),c=n.slice();n.length===0&&(c=a.map(($,k)=>$===0?1:u[k]/$),t.keepAspectRatioPolicy!=="stretch"&&(u=yf(a,c,t)));let f=ne("output",e.dataType,u.length),h=U("input",e.dataType,a.length),g=M.size(u),_=a.length===u.length&&a.every(($,k)=>$===u[k]),b=t.coordinateTransformMode==="tf_crop_and_resize",w=t.extrapolationValue,T=h.type.value,v=$=>`
      ${_?"":`
      ${ff(t.coordinateTransformMode,T)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${wf(h,a)};
              ${hf(t.nearestMode,r,T)};
              ${bf(h,f,a,u,c.length,l.length,b)};
              `;case"linear":return`
              ${_f(f,a,u,c.length,l.length)};
              ${(()=>{if(a.length===2||a.length===4)return`${vf(h,f,a,b,w)}`;if(a.length===3||a.length===5)return`${xf(h,f,a,b,w)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(a.length===2||a.length===4)return`${$f(h,f,a,u,c,l,t.cubicCoeffA,b,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${$.registerUniform("output_size","u32").registerUniform("scales","f32",c.length).registerUniform("roi","f32",l.length).declareVariables(h,f)}
      ${$.mainStart()}
        ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${_?"output[global_idx] = input[global_idx];":`
        let output_indices = ${f.offsetToIndices("global_idx")};
        var input_indices: ${h.type.indices};
        ${(()=>{switch(t.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${h.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${a.length===2||a.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${r}|${c.length>0?t.mode==="cubic"?c:c.length:""}|${s.length>0?s:""}|${l.length>0?l:""}|${_}|${t.mode==="nearest"?a.length:a}`,inputDependencies:["rank"]},getShaderSource:v,getRunData:()=>({outputs:[{dims:u,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:[{type:12,data:g},{type:1,data:c},{type:1,data:l},...oe(a,u)]})}},Tf=e=>{let t=e.customDataBuffer;return new Uint32Array(t,t.byteOffset,1)[0]},u_=(e,t)=>{let r=[],n=[],s=[],i=Tf(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");pf(e.inputs,t,i,r,n,s),e.compute(Sf(e.inputs[0],t,i,r,n,s),{inputs:[0]})},d_=e=>{let t=e.antialias,r=e.axes,n=e.coordinateTransformMode,s=e.cubicCoeffA,i=e.excludeOutside!==0,a=e.extrapolationValue,l=e.keepAspectRatioPolicy,u=e.mode,c=e.nearestMode===""?"simple":e.nearestMode;return Ne({antialias:t,axes:r,coordinateTransformMode:n,cubicCoeffA:s,excludeOutside:i,extrapolationValue:a,keepAspectRatioPolicy:l,mode:u,nearestMode:c})}}),Cf,kf,c_,U1=K(()=>{_e(),Se(),Ke(),Te(),Cf=(e,t)=>{let[r,n,s,i]=e,{numHeads:a,rotaryEmbeddingDim:l}=t;if(r.dims.length!==3&&r.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${r.dims.length}`);if(!M.areEqual(n.dims,[])&&!M.areEqual(n.dims,[1])&&n.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${n.dims.length}`);if(s.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${s.dims.length}`);if(i.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${i.dims.length}`);if(!M.areEqual(s.dims,i.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(l>0&&a===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let u=r.dims[0],c=r.dims[r.dims.length-2],f=s.dims[0],h=M.sizeFromDimension(r.dims,1)/c,g=l===0?s.dims[1]*2:h/a;if(l>g)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(n.dims.length===2){if(u!==n.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${n.dims[0]}`);if(c!==n.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${n.dims[1]}`)}if(g/2!==s.dims[1]&&l/2!==s.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${s.dims[1]}`);if(c>f)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported")},kf=(e,t)=>{let{interleaved:r,numHeads:n,rotaryEmbeddingDim:s,scale:i}=t,a=e[0].dims[0],l=M.sizeFromDimension(e[0].dims,1),u=e[0].dims[e[0].dims.length-2],c=l/u,f=e[2].dims[1],h=s===0?f*2:c/n,g=new Array(a,u,c/h,h-f),_=M.computeStrides(g),b=[{type:1,data:i},{type:12,data:g},{type:12,data:_},...e[0].dims.length===3?new Array({type:12,data:[l,c,h,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[l,h,u*h,1]}):[],...oe(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],w=T=>{let v=U("input",e[0].dataType,e[0].dims.length),$=U("position_ids",e[1].dataType,e[1].dims.length),k=U("cos_cache",e[2].dataType,e[2].dims.length),x=U("sin_cache",e[3].dataType,e[3].dims.length),C=ne("output",e[0].dataType,e[0].dims.length);return T.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:g.length},{name:"global_strides",type:"u32",length:_.length},{name:"input_output_strides",type:"u32",length:_.length}]),`
        ${T.declareVariables(v,$,k,x,C)}

        ${T.mainStart(ci)}
          let half_rotary_emb_dim = uniforms.${k.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${T.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${$.broadcastedIndicesToOffset("bsnh.xy",ne("",$.type.tensor,2))};
            let position_id =
                u32(${$.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${r});
            let j = i + select(half_rotary_emb_dim, 1, ${r});
            let re = ${v.getByOffset("i")} * ${k.get("position_id","bsnh[3]")} -
                ${v.getByOffset("j")} * ${x.get("position_id","bsnh[3]")};
            ${C.setByOffset("i","re")}
            let im = ${v.getByOffset("i")} * ${x.get("position_id","bsnh[3]")} +
                ${v.getByOffset("j")} * ${k.get("position_id","bsnh[3]")};
            ${C.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${C.setByOffset("k",v.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:Ne({interleaved:r}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:w,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(M.size(g)/ci)},programUniforms:b})}},c_=(e,t)=>{Cf(e.inputs,t),e.compute(kf(e.inputs,t))}}),If,Ef,p_,W1=K(()=>{_e(),Se(),Te(),If=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],r=e[1],n=e[2];if(t.dataType!==r.dataType||t.dataType!==n.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(r.dims.length!==3&&r.dims.length!==2)throw new Error("Skip must be 2D or 3D");let s=t.dims[t.dims.length-1],i=t.dims[t.dims.length-2];if(r.dims[r.dims.length-1]!==s)throw new Error("Skip must have the same hidden size as input");if(r.dims[r.dims.length-2]!==i)throw new Error("Skip must have the same sequence length as input");if(n.dims.length!==1)throw new Error("Gamma must be 1D");if(n.dims[n.dims.length-1]!==s)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let a=e[3];if(a.dims.length!==1)throw new Error("Beta must be 1D");if(a.dims[a.dims.length-1]!==s)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let a=e[4];if(a.dims.length!==1)throw new Error("Bias must be 1D");if(a.dims[a.dims.length-1]!==s)throw new Error("Bias must have the same hidden size as input")}},Ef=(e,t,r,n)=>{let s=t.simplified,i=e[0].dims,a=M.size(i),l=i,u=a,c=i.slice(-1)[0],f=n?i.slice(0,-1).concat(1):[],h=!s&&e.length>3,g=e.length>4,_=n&&r>1,b=n&&r>2,w=r>3,T=64,v=Ge(c),$=[{type:12,data:u},{type:12,data:v},{type:12,data:c},{type:1,data:t.epsilon}],k=C=>{let z=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],O=[U("x",e[0].dataType,e[0].dims,v),U("skip",e[1].dataType,e[1].dims,v),U("gamma",e[2].dataType,e[2].dims,v)];h&&O.push(U("beta",e[3].dataType,e[3].dims,v)),g&&O.push(U("bias",e[4].dataType,e[4].dims,v)),O.push(ne("output",e[0].dataType,l,v)),_&&O.push(ne("mean_output",1,f)),b&&O.push(ne("inv_std_output",1,f)),w&&O.push(ne("input_skip_bias_sum",e[0].dataType,l,v));let B=Je(e[0].dataType),V=Je(1,v);return`

      ${C.registerUniforms(z).declareVariables(...O)}
      var<workgroup> sum_shared : array<${V}, ${T}>;
      var<workgroup> sum_squared_shared : array<${V}, ${T}>;

      ${C.mainStart([T,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / ${T};

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / ${T};
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == ${T-1}) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${g?"bias[offset1d + i]":B+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${w?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${ri(B,v,"value")};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = ${T};
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
        let mean = ${xr("sum",v)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${xr("square_sum",v)} / f32(uniforms.hidden_size) ${s?"":"- mean * mean"} + uniforms.epsilon);
        ${_?"mean_output[global_idx] = mean;":""}
        ${b?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${s?"":`- ${B}(mean)`}) *
            ${B}(inv_std_dev) * gamma[offset1d + i]
            ${h?"+ beta[offset1d + i]":""};
        }
      }`},x=[{dims:l,dataType:e[0].dataType}];return r>1&&x.push({dims:f,dataType:1}),r>2&&x.push({dims:f,dataType:1}),r>3&&x.push({dims:i,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${v};${_};${b};${w}`,inputDependencies:e.map((C,z)=>"type")},getShaderSource:k,getRunData:()=>({outputs:x,dispatchGroup:{x:Math.ceil(u/c)},programUniforms:$})}},p_=(e,t)=>{If(e.inputs);let r=[0];e.outputCount>1&&r.push(-3),e.outputCount>2&&r.push(-3),e.outputCount>3&&r.push(3),e.compute(Ef(e.inputs,t,e.outputCount,!1),{outputs:r})}}),zf,Ti,Af,_a,Of,Rf,f_,h_,L1=K(()=>{_e(),Se(),Ke(),Te(),zf=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((r,n)=>{if(e[n+1].dataType!==6&&e[n+1].dataType!==7)throw new Error(`Input ${n} must be an array of int32 or int64`)})},Ti=(e,t)=>{let r=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(n=>r.push(Number(n)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(n=>r.push(Number(n)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return r},Af=(e,t)=>{if(e.length>1){let r=Ti(e,1),n=Ti(e,2),s=Ti(e,3);return s.length===0&&(s=[...Array(e[0].dims.length).keys()]),Ne({starts:r,ends:n,axes:s})}else return t},_a=(e,t,r,n,s)=>{let i=e;return e<0&&(i+=r[n[t]]),s[t]<0?Math.max(0,Math.min(i,r[n[t]]-1)):Math.max(0,Math.min(i,r[n[t]]))},Of=(e,t,r)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${r.length}; i >= 0; i--) {
            let input_shape_i = ${se("uniforms.input_shape","i",r.length)};
            let steps_i = ${se("uniforms.steps","i",r.length)};
            let signs_i = ${se("uniforms.signs","i",r.length)};
            let starts_i = ${se("uniforms.starts","i",r.length)};
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
      }`,Rf=(e,t)=>{let r=e[0].dims,n=M.size(r),s=t.axes.length>0?M.normalizeAxes(t.axes,r.length):[...Array(r.length).keys()],i=Ti(e,4);i.forEach(v=>v!==0||(()=>{throw new Error("step cannot be 0")})),i.length===0&&(i=Array(s.length).fill(1));let a=t.starts.map((v,$)=>_a(v,$,r,s,i)),l=t.ends.map((v,$)=>_a(v,$,r,s,i));if(s.length!==a.length||s.length!==l.length)throw new Error("start, ends and axes should have the same number of elements");if(s.length!==r.length)for(let v=0;v<r.length;++v)s.includes(v)||(a.splice(v,0,0),l.splice(v,0,r[v]),i.splice(v,0,1));let u=i.map(v=>Math.sign(v));i.forEach((v,$,k)=>{if(v<0){let x=(l[$]-a[$])/v,C=a[$],z=C+x*i[$];a[$]=z,l[$]=C,k[$]=-v}});let c=r.slice(0);s.forEach((v,$)=>{c[v]=Math.ceil((l[v]-a[v])/i[v])});let f={dims:c,dataType:e[0].dataType},h=ne("output",e[0].dataType,c.length),g=U("input",e[0].dataType,e[0].dims.length),_=M.size(c),b=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:a.length},{name:"signs",type:"i32",length:u.length},{name:"steps",type:"u32",length:i.length}],w=[{type:12,data:_},{type:12,data:a},{type:6,data:u},{type:12,data:i},...oe(e[0].dims,c)],T=v=>`
      ${v.registerUniforms(b).declareVariables(g,h)}
        ${Of(g,h,r)}
        ${v.mainStart()}
          ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${h.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${h.setByOffset("global_idx",g.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${u.length}_${a.length}_${i.length}`,inputDependencies:["rank"]},getShaderSource:T,getRunData:()=>({outputs:[f],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:w})}},f_=(e,t)=>{zf(e.inputs,t);let r=Af(e.inputs,t);e.compute(Rf(e.inputs,r),{inputs:[0]})},h_=e=>{let t=e.starts,r=e.ends,n=e.axes;return Ne({starts:t,ends:r,axes:n})}}),Mf,Bf,m_,g_,V1=K(()=>{_e(),Se(),Ke(),kr(),Te(),Mf=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},Bf=(e,t)=>{let r=e.inputs[0],n=r.dims,s=M.size(n),i=n.length,a=M.normalizeAxis(t.axis,i),l=a<n.length-1,u,c=[];l?(c=Array.from({length:i},(O,B)=>B),c[a]=i-1,c[i-1]=a,u=e.compute(kt(r,c),{inputs:[r],outputs:[-1]})[0]):u=r;let f=u.dims,h=f[i-1],g=s/h,_=Ge(h),b=h/_,w=64;g===1&&(w=256);let T=(O,B)=>B===4?`max(max(${O}.x, ${O}.y), max(${O}.z, ${O}.w))`:B===2?`max(${O}.x, ${O}.y)`:B===3?`max(max(${O}.x, ${O}.y), ${O}.z)`:O,v=U("x",u.dataType,u.dims,_),$=ne("result",u.dataType,u.dims,_),k=v.type.value,x=Je(u.dataType)==="f32"?`var threadMax = ${k}(-3.402823e+38f);`:`var threadMax = ${k}(-65504.0h);`,C=O=>`
      var<workgroup> rowMaxShared : ${k};
      var<workgroup> rowSumShared : ${k};
      var<workgroup> threadShared : array<${k}, ${w}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${k} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${k}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${O.registerUniform("packedCols","i32").declareVariables(v,$)}
      ${O.mainStart(w)}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${w};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${x}
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
          rowMaxShared = ${k}(${T("threadShared[0]",_)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${k}(0.0);
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
          rowSumShared = ${k}(${xr("threadShared[0]",_)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          let value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          setValue(row, col, row_stride, value);
        }
      }`,z=e.compute({name:"Softmax",shaderCache:{hint:`${_};${w}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:f,dataType:u.dataType}],dispatchGroup:{x:g},programUniforms:[{type:6,data:b}]}),getShaderSource:C},{inputs:[u],outputs:[l?-1:0]})[0];l&&e.compute(kt(z,c),{inputs:[z]})},m_=(e,t)=>{Mf(e.inputs),Bf(e,t)},g_=e=>Ne({axis:e.axis})}),ba,Df,Nf,Pf,y_,q1=K(()=>{_e(),Se(),Te(),ba=e=>Array.from(e.getBigInt64Array(),Number),Df=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(ba(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},Nf=(e,t)=>{let r=[];for(let n=0;n<e.length;++n)r.push(e[n]*t[n]);return r},Pf=(e,t)=>{let r=e[0].dims,n=t??ba(e[1]),s=Nf(r,n),i=M.size(s),a=e[0].dataType,l=U("input",a,r.length),u=ne("output",a,s.length),c=f=>`
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
    }`;return{name:"Tile",shaderCache:{hint:`${n}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:[{type:12,data:i},...oe(e[0].dims,s)]}),getShaderSource:c}},y_=e=>{Df(e.inputs),e.compute(Pf(e.inputs),{inputs:[0]})}}),Uf,Wf,__,F1=K(()=>{_e(),Se(),Te(),Uf=(e,t,r,n,s)=>{let i=ne("output_data",s,r.length,4),a=U("a_data",t[1].dataType,t[1].dims.length,4),l=U("b_data",t[2].dataType,t[2].dims.length,4),u=U("c_data",t[0].dataType,t[0].dims.length,4),c,f=(h,g,_)=>`select(${g}, ${h}, ${_})`;if(!n)c=i.setByOffset("global_idx",f(a.getByOffset("global_idx"),l.getByOffset("global_idx"),u.getByOffset("global_idx")));else{let h=(g,_,b="")=>{let w=`a_data[index_a${_}][component_a${_}]`,T=`b_data[index_b${_}][component_b${_}]`,v=`bool(c_data[index_c${_}] & (0xffu << (component_c${_} * 8)))`;return`
            let output_indices${_} = ${i.offsetToIndices(`global_idx * 4u + ${_}u`)};
            let offset_a${_} = ${a.broadcastedIndicesToOffset(`output_indices${_}`,i)};
            let offset_b${_} = ${l.broadcastedIndicesToOffset(`output_indices${_}`,i)};
            let offset_c${_} = ${u.broadcastedIndicesToOffset(`output_indices${_}`,i)};
            let index_a${_} = offset_a${_} / 4u;
            let index_b${_} = offset_b${_} / 4u;
            let index_c${_} = offset_c${_} / 4u;
            let component_a${_} = offset_a${_} % 4u;
            let component_b${_} = offset_b${_} % 4u;
            let component_c${_} = offset_c${_} % 4u;
            ${g}[${_}] = ${b}(${f(w,T,v)});
          `};s===9?c=`
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
        ${e.registerUniform("vec_size","u32").declareVariables(u,a,l,i)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${c}
      }`},Wf=e=>{let t=e[1].dims,r=e[2].dims,n=e[0].dims,s=e[1].dataType,i=!(M.areEqual(t,r)&&M.areEqual(r,n)),a=t,l=M.size(t);if(i){let c=di.calcShape(di.calcShape(t,r,!1),n,!1);if(!c)throw new Error("Can't perform where op on the given tensors");a=c,l=M.size(a)}let u=Math.ceil(l/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:c=>Uf(c,e,a,i,s),getRunData:()=>({outputs:[{dims:a,dataType:s}],dispatchGroup:{x:Math.ceil(l/64/4)},programUniforms:[{type:12,data:u},...oe(n,t,r,a)]})}},__=e=>{e.compute(Wf(e.inputs))}}),b_,H1=K(()=>{n1(),Ro(),s1(),a1(),o1(),l1(),u1(),h1(),g1(),y1(),_1(),b1(),w1(),v1(),$1(),x1(),S1(),T1(),C1(),k1(),I1(),E1(),z1(),A1(),O1(),Uy(),R1(),M1(),B1(),D1(),N1(),Oo(),P1(),U1(),W1(),L1(),V1(),Vy(),q1(),kr(),Mo(),F1(),b_=new Map([["Abs",[fg]],["Acos",[hg]],["Acosh",[mg]],["Add",[Qg]],["ArgMax",[ug,qa]],["ArgMin",[lg,qa]],["Asin",[gg]],["Asinh",[yg]],["Atan",[_g]],["Atanh",[bg]],["Attention",[dg]],["AveragePool",[Xy,Zy]],["BatchNormalization",[cg]],["BiasAdd",[pg]],["BiasSplitGelu",[Kg]],["Cast",[vg,wg]],["Ceil",[xg]],["Clip",[$g]],["Concat",[sy,ay]],["Conv",[Qa,Ka]],["ConvTranspose",[gy,my]],["Cos",[Sg]],["Cosh",[Tg]],["CumSum",[yy,_y]],["DepthToSpace",[by,wy]],["DequantizeLinear",[n_,s_]],["Div",[Zg]],["Einsum",[vy,$y]],["Elu",[Cg,Ai]],["Equal",[Xg]],["Erf",[kg]],["Exp",[Ig]],["Expand",[xy]],["FastGelu",[Sy]],["Floor",[Eg]],["FusedConv",[Qa,Ka]],["Gather",[Cy,Ty]],["GatherElements",[Oy,Ay]],["GatherBlockQuantized",[Ey,zy]],["GatherND",[ky,Iy]],["Gelu",[zg]],["Gemm",[My,Ry]],["GlobalAveragePool",[Jy,Yy]],["GlobalMaxPool",[i_,r_]],["Greater",[ty]],["GreaterOrEqual",[iy]],["GridSample",[By,Dy]],["GroupQueryAttention",[qy]],["HardSigmoid",[Pg,Ng]],["InstanceNormalization",[Fy]],["LayerNormalization",[Hy]],["LeakyRelu",[Ag,Ai]],["Less",[ry]],["LessOrEqual",[ny]],["Log",[Gg]],["MatMul",[Gy]],["MatMulNBits",[jy,Ky]],["MaxPool",[e_,t_]],["Mul",[Yg]],["MultiHeadAttention",[Py,Ny]],["Neg",[Rg]],["Not",[Og]],["Pad",[Qy]],["Pow",[Jg]],["QuickGelu",[jg,Ai]],["Range",[a_]],["Reciprocal",[Mg]],["ReduceMin",[ig]],["ReduceMean",[Ym]],["ReduceMax",[rg]],["ReduceSum",[sg]],["ReduceProd",[ng]],["ReduceL1",[Jm]],["ReduceL2",[eg]],["ReduceLogSum",[og]],["ReduceLogSumExp",[tg]],["ReduceSumSquare",[ag]],["Relu",[Bg]],["Resize",[u_,d_]],["RotaryEmbedding",[c_]],["ScatterND",[l_,o_]],["Sigmoid",[Dg]],["Sin",[Ug]],["Sinh",[Wg]],["Slice",[f_,h_]],["SkipLayerNormalization",[p_]],["Split",[Wy,Ly]],["Sqrt",[Lg]],["Softmax",[m_,g_]],["Sub",[ey]],["Tan",[Vg]],["Tanh",[qg]],["ThresholdedRelu",[Hg,Ai]],["Tile",[y_]],["Transpose",[Wm,Lm]],["Where",[__]]])}),w_,G1=K(()=>{Vt(),dr(),Te(),w_=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,r,n,s){tr(e.programInfo.name);let i=this.backend.device,a=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let l=[];for(let c of t)l.push({binding:l.length,resource:{buffer:c.buffer}});for(let c of r)l.push({binding:l.length,resource:{buffer:c.buffer}});s&&l.push({binding:l.length,resource:s});let u=i.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:l,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let c={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:u,dispatchGroup:n};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(c)}a.setPipeline(e.computePipeline),a.setBindGroup(0,u),a.dispatchWorkgroups(...n),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),Lt(e.programInfo.name)}dispose(){}build(e,t){tr(e.name);let r=this.backend.device,n=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"},{feature:"subgroups-f16",extension:"subgroups_f16"}].forEach(c=>{r.features.has(c.feature)&&n.push(`enable ${c.extension};`)});let s=Um(t,this.backend.device.limits),i=e.getShaderSource(s),a=`${n.join(`
`)}
${s.additionalImplementations}
${i}`,l=r.createShaderModule({code:a,label:e.name});Oe("verbose",()=>`[WebGPU] ${e.name} shader code: ${a}`);let u=r.createComputePipeline({compute:{module:l,entryPoint:"main"},layout:"auto",label:e.name});return Lt(e.name),{programInfo:e,computePipeline:u,uniformVariablesInfo:s.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,r=typeof e=="number"?1:e.y||1,n=typeof e=="number"?1:e.z||1,s=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=s&&r<=s&&n<=s)return[t,r,n];let i=t*r*n,a=Math.ceil(Math.sqrt(i));if(a>s){if(a=Math.ceil(Math.cbrt(i)),a>s)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[a,a,a]}else return[a,a,1]}}}),Lf,Vf,qf,Ff,v_,j1=K(()=>{Vt(),_e(),dr(),Rm(),r1(),H1(),G1(),Lf=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let r=[];for(let n=0;n<e.length;++n){let s=e[n].dataType;switch(t[n]){case"none":{r.push("");break}case"type":{r.push(`${s}`);break}case"rank":{let i=e[n].dims.length;r.push(`${s};${i}`);break}case"dims":{let i=e[n].dims.join(",");r.push(`${s};${i}`);break}default:throw new Error(`unsupported input dependency: ${t[n]}`)}}return r.join("|")},Vf=(e,t,r)=>{var s,i;let n=e.name;return(s=e.shaderCache)!=null&&s.hint&&(n+="["+e.shaderCache.hint+"]"),n+=":"+r+`:${Lf(t,((i=e.shaderCache)==null?void 0:i.inputDependencies)??new Array(t.length).fill("dims"))}`,n},qf=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},Ff=class{constructor(e){this.subgroupsSupported=e.features.has("subgroups"),this.subgroupsF16Supported=e.features.has("subgroups");let t=e.limits;!this.subgroupsSupported||!t.minSubgroupSize||!t.maxSubgroupSize?this.subgroupSizeRange=void 0:this.subgroupSizeRange=[t.minSubgroupSize,t.maxSubgroupSize]}},v_=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let r=[],n={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:r},s=i=>t.features.has(i)&&r.push(i)&&!0;s("chromium-experimental-timestamp-query-inside-passes")||s("timestamp-query"),s("shader-f16"),s("subgroups")&&s("subgroups-f16"),this.device=await t.requestDevice(n),this.deviceInfo=new Ff(this.device),this.adapterInfo=new qf(t.info||await t.requestAdapterInfo()),this.gpuDataManager=Mm(this),this.programManager=new w_(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,Io(e.logLevel,!!e.debug),this.device.onuncapturederror=i=>{i.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${i.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!1}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose()}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;tr(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{var n;let t=new BigUint64Array(e.getMappedRange()),r=this.pendingQueries.get(e);for(let s=0;s<t.length/2;s++){let i=r[s],a=i.kernelId,l=this.kernels.get(a),u=l.kernelType,c=l.kernelName,f=i.programName,h=i.inputTensorViews,g=i.outputTensorViews,_=t[s*2],b=t[s*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=_);let w=Number(_-this.queryTimeBase),T=Number(b-this.queryTimeBase);if(!Number.isSafeInteger(w)||!Number.isSafeInteger(T))throw new RangeError("incorrect timestamp range");if((n=this.env.webgpu.profiling)!=null&&n.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:h.map(v=>({dims:v.dims,dataType:Nr(v.dataType)})),outputsMetadata:g.map(v=>({dims:v.dims,dataType:Nr(v.dataType)})),kernelId:a,kernelType:u,kernelName:c,programName:f,startTime:w,endTime:T});else{let v="";h.forEach((k,x)=>{v+=`input[${x}]: [${k.dims}] | ${Nr(k.dataType)}, `});let $="";g.forEach((k,x)=>{$+=`output[${x}]: [${k.dims}] | ${Nr(k.dataType)}, `}),console.log(`[profiling] kernel "${a}|${u}|${c}|${f}" ${v}${$}execution time: ${T-w} ns`)}Nn("GPU",`${f}::${_}::${b}`)}e.unmap(),this.pendingQueries.delete(e)}),Lt()}run(e,t,r,n,s,i){tr(e.name);let a=[];for(let $=0;$<t.length;++$){let k=t[$].data;if(k===0)continue;let x=this.gpuDataManager.get(k);if(!x)throw new Error(`no GPU data for input: ${k}`);a.push(x)}let{outputs:l,dispatchGroup:u,programUniforms:c}=e.getRunData(t),f=r.length===0?l.map(($,k)=>k):r;if(f.length!==l.length)throw new Error(`Output size ${f.length} must be equal to ${l.length}.`);let h=[],g=[];for(let $=0;$<l.length;++$){if(!Number.isInteger(f[$])||f[$]<-3||f[$]>=i)throw new Error(`Invalid output index: ${f[$]}`);if(f[$]===-3)continue;let k=f[$]===-1,x=f[$]===-2,C=k||x?s(l[$].dataType,l[$].dims):n(f[$],l[$].dataType,l[$].dims);if(h.push(C),C.data===0)continue;let z=this.gpuDataManager.get(C.data);if(!z)throw new Error(`no GPU data for output: ${C.data}`);if(k&&this.temporaryData.push(z),x){let O=this.kernelPersistentData.get(this.currentKernelId);O||(O=[],this.kernelPersistentData.set(this.currentKernelId,O)),O.push(z)}g.push(z)}if(a.length!==t.length||g.length!==h.length){if(g.length===0)return Lt(e.name),h;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let _;if(c){let $=0,k=[];c.forEach(O=>{let B=typeof O.data=="number"?[O.data]:O.data;if(B.length===0)return;let V=O.type===10?2:4,X,ue;O.type===10?(ue=B.length>4?16:B.length>2?8:B.length*V,X=B.length>4?16:V*B.length):(ue=B.length<=2?B.length*V:16,X=16),$=Math.ceil($/ue)*ue,k.push($);let ge=O.type===10?8:4;$+=B.length>4?Math.ceil(B.length/ge)*X:B.length*V});let x=16;$=Math.ceil($/x)*x;let C=new ArrayBuffer($);c.forEach((O,B)=>{let V=k[B],X=typeof O.data=="number"?[O.data]:O.data;if(O.type===6)new Int32Array(C,V,X.length).set(X);else if(O.type===12)new Uint32Array(C,V,X.length).set(X);else if(O.type===10)new Uint16Array(C,V,X.length).set(X);else if(O.type===1)new Float32Array(C,V,X.length).set(X);else throw new Error(`Unsupported uniform type: ${Nr(O.type)}`)});let z=this.gpuDataManager.create($,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(z.buffer,0,C,0,$),this.gpuDataManager.release(z.id),_={offset:0,size:$,buffer:z.buffer}}let b=this.programManager.normalizeDispatchGroupSize(u),w=b[1]===1&&b[2]===1,T=Vf(e,t,w),v=this.programManager.getArtifact(T);if(v||(v=this.programManager.build(e,b),this.programManager.setArtifact(T,v),Oe("info",()=>`[artifact] key: ${T}, programName: ${e.name}`)),c&&v.uniformVariablesInfo){if(c.length!==v.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${v.uniformVariablesInfo.length}, got ${c.length} in program "${v.programInfo.name}".`);for(let $=0;$<c.length;$++){let k=c[$],x=k.type,C=typeof k.data=="number"?1:k.data.length,[z,O]=v.uniformVariablesInfo[$];if(x!==z||C!==O)throw new Error(`Uniform variable ${$} mismatch: expect type ${z} with size ${O}, got type ${x} with size ${C} in program "${v.programInfo.name}".`)}}if(Oe("info",()=>`[ProgramManager] run "${e.name}" (key=${T}) with ${b[0]}x${b[1]}x${b[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let $={kernelId:this.currentKernelId,programName:v.programInfo.name,inputTensorViews:t,outputTensorViews:h};this.pendingKernels.push($),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push($)}return this.programManager.run(v,a,g,b,_),Lt(e.name),h}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,r,n){let s=b_.get(e);if(!s)throw new Error(`kernel not implemented: ${e}`);let i={kernelType:e,kernelName:n,kernelEntry:s[0],attributes:[s[1],r]};this.kernels.set(t,i)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let r of t)this.gpuDataManager.release(r.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,r){let n=this.kernels.get(e);if(!n)throw new Error(`kernel not created: ${e}`);let s=n.kernelType,i=n.kernelName,a=n.kernelEntry,l=n.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${s}] ${i}" is not allowed to be called recursively`);this.currentKernelId=e,l[0]&&(l[1]=l[0](l[1]),l[0]=void 0),Oe("info",()=>`[WebGPU] Start to run kernel "[${s}] ${i}"...`);let u=this.env.debug;this.temporaryData=[];try{return u&&this.device.pushErrorScope("validation"),a(t,l[1]),0}catch(c){return r.push(Promise.resolve(`[WebGPU] Kernel "[${s}] ${i}" failed. ${c}`)),1}finally{u&&r.push(this.device.popErrorScope().then(c=>c?`GPU validation error for kernel "[${s}] ${i}": ${c.message}`:null));for(let c of this.temporaryData)this.gpuDataManager.release(c.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,r,n){let s=this.sessionExternalDataMapping.get(e);s||(s=new Map,this.sessionExternalDataMapping.set(e,s));let i=s.get(t),a=this.gpuDataManager.registerExternalBuffer(r,n,i);return s.set(t,[a,r]),a}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(r=>this.gpuDataManager.unregisterExternalBuffer(r[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,r){return async()=>{let n=await Wa(this,e,t);return Eo(n.buffer,r)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){var e;this.queryType="none",(((e=this.env.webgpu.profiling)==null?void 0:e.mode)==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){Oe("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){Oe("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){Oe("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),r=e.length;this.pendingKernels=[];for(let n=0;n<r;n++){let s=this.getComputePassEncoder(),i=e[n];this.writeTimestamp(this.pendingDispatchNumber*2),s.setPipeline(i.computePipeline),s.setBindGroup(0,i.bindGroup),s.dispatchWorkgroups(...i.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[n]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),Hf,wa,Gf,va,$a,xa,jf,$_,K1=K(()=>{dr(),Hf=1,wa=()=>Hf++,Gf=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),va=(e,t)=>{let r=Gf.get(e);if(!r)throw new Error("Unsupported data type.");return t.length>0?Math.ceil(t.reduce((n,s)=>n*s)*r/8):0},$a=class{constructor(e){this.sessionId=e.sessionId,this.mlContext=e.context,this.mlTensor=e.tensor,this.dataType=e.dataType,this.tensorShape=e.shape}get tensor(){return this.mlTensor}get type(){return this.dataType}get shape(){return this.tensorShape}get byteLength(){return va(this.dataType,this.tensorShape)}destroy(){Oe("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,r){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===r.length&&this.tensorShape.every((n,s)=>n===r[s])}},xa=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,r,n){let s=this.tensorManager.getMLContext(e);if(this.wrapper){if(this.wrapper.canReuseTensor(s,t,r))return this.wrapper.tensor;if(n){if(this.wrapper.byteLength!==va(t,r))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let i=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,r,i,!0,!0),n&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){if(this.wrapper)if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(e);return}else Oe("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor();this.activeUpload?this.activeUpload.set(e):this.activeUpload=new Uint8Array(e)}async download(e){if(this.activeUpload)if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(this.activeUpload):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(this.activeUpload);return}else return this.activeUpload.buffer;if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},jf=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw new Error("MLContext not found for session.");return t}reserveTensorId(){let e=wa();return this.tensorTrackersById.set(e,new xa(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,r,n,s){Oe("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${r}, shape: ${n}, copyOld: ${s}}`);let i=this.tensorTrackersById.get(t);if(!i)throw new Error("Tensor not found.");return i.ensureTensor(e,r,n,s)}upload(e,t){let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");r.upload(t)}async download(e,t){Oe("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t==null?void 0:t.byteLength}}`);let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");return r.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,r,n){let s=this.getMLContext(e),i=wa(),a=new $a({sessionId:e,context:s,tensor:t,dataType:r,shape:n});return this.tensorTrackersById.set(i,new xa(this,a)),this.externalTensors.add(a),i}async getCachedTensor(e,t,r,n,s,i){let a=this.getMLContext(e);for(let[u,c]of this.freeTensors.entries())if(c.canReuseTensor(a,t,r)){Oe("verbose",()=>`[WebNN] Reusing tensor {dataType: ${t}, shape: ${r}}`);let f=this.freeTensors.splice(u,1)[0];return f.sessionId=e,f}Oe("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${t}, shape: ${r}}`);let l=await a.createTensor({dataType:t,shape:r,dimensions:r,usage:n,writable:s,readable:i});return new $a({sessionId:e,context:a,tensor:l,dataType:t,shape:r})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},$_=(...e)=>new jf(...e)}),wn,Kf,x_,Q1=K(()=>{_e(),Gr(),Rm(),K1(),dr(),wn=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),Kf=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let r=Object.keys(e).sort(),n=Object.keys(t).sort();return r.length===n.length&&r.every((s,i)=>s===n[i]&&e[s]===t[s])},x_=class{constructor(e){this.tensorManager=$_(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.temporaryGraphInputs=[],this.temporarySessionTensorIds=new Map,Io(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){Oe("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){Oe("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let r of t)Oe("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${r}}`),this.tensorManager.releaseTensorId(r);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let r=this.mlContextCache.findIndex(n=>n.gpuDevice===e);if(r!==-1)return this.mlContextCache[r].mlContext;{let n=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:n}),n}}else if(e===void 0){let r=this.mlContextCache.findIndex(n=>n.options===void 0&&n.gpuDevice===void 0);if(r!==-1)return this.mlContextCache[r].mlContext;{let n=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:n}),n}}let t=this.mlContextCache.findIndex(r=>Kf(r.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let r=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:r}),r}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let r=this.sessionIdsByMLContext.get(t);r||(r=new Set,this.sessionIdsByMLContext.set(t,r)),r.add(e),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e);let r=this.sessionIdsByMLContext.get(t);if(r.delete(e),r.size===0){this.sessionIdsByMLContext.delete(t);let n=this.mlContextCache.findIndex(s=>s.mlContext===t);n!==-1&&this.mlContextCache.splice(n,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){Oe("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,r,n,s){let i=wn.get(r);if(!i)throw new Error(`Unsupported ONNX data type: ${r}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,i,n,s)}async createTemporaryTensor(e,t,r){Oe("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${r}}`);let n=wn.get(t);if(!n)throw new Error(`Unsupported ONNX data type: ${t}`);let s=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,s,n,r,!1);let i=this.temporarySessionTensorIds.get(e);return i?i.push(s):this.temporarySessionTensorIds.set(e,[s]),s}uploadTensor(e,t){if(!Ye().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");Oe("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let r=await this.tensorManager.download(e);return Eo(r,t)}}registerMLTensor(e,t,r,n){let s=wn.get(r);if(!s)throw new Error(`Unsupported ONNX data type: ${r}`);let i=this.tensorManager.registerTensor(e,t,s,n);return Oe("verbose",()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${s}, dimensions: ${n}} -> {tensorId: ${i}}`),i}registerMLConstant(e,t,r,n,s,i){if(!i)throw new Error("External mounted files are not available.");let a=e;e.startsWith("./")&&(a=e.substring(2));let l=i.get(a);if(!l)throw new Error(`File with name ${a} not found in preloaded files.`);if(t+r>l.byteLength)throw new Error("Out of bounds: data offset and length exceed the external file data size.");let u=l.slice(t,t+r).buffer,c;switch(s.dataType){case"float32":c=new Float32Array(u);break;case"float16":c=new Uint16Array(u);break;case"int32":c=new Int32Array(u);break;case"uint32":c=new Uint32Array(u);break;case"int64":c=new BigInt64Array(u);break;case"uint64":c=new BigUint64Array(u);break;case"int8":c=new Int8Array(u);break;case"int4":case"uint4":case"uint8":c=new Uint8Array(u);break;default:throw new Error(`Unsupported data type: ${s.dataType} in creating WebNN Constant from external data.`)}return Oe("verbose",()=>`[WebNN] registerMLConstant {dataType: ${s.dataType}, shape: ${s.shape}}}`),n.constant(s,c)}registerGraphInput(e){this.temporaryGraphInputs.push(e)}isGraphInput(e,t){let r=this.sessionGraphInputs.get(e);return r?r.includes(t):!1}flush(){}}}),S_={};Ki(S_,{init:()=>T_});var vn,Qf,T_,Z1=K(()=>{_e(),j1(),dr(),Se(),Q1(),vn=class C_{constructor(t,r,n,s){this.module=t,this.dataType=r,this.data=n,this.dims=s}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=M.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=M.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=M.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=M.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(M.size(t)!==M.size(this.dims))throw new Error("Invalid new shape");return new C_(this.module,this.dataType,this.data,t)}},Qf=class{constructor(e,t,r){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo,this.deviceInfo=t.deviceInfo;let n=e.PTR_SIZE,s=r/e.PTR_SIZE,i=n===4?"i32":"i64";this.opKernelContext=Number(e.getValue(n*s++,i));let a=Number(e.getValue(n*s++,i));this.outputCount=Number(e.getValue(n*s++,i)),this.customDataOffset=Number(e.getValue(n*s++,"*")),this.customDataSize=Number(e.getValue(n*s++,i));let l=[];for(let u=0;u<a;u++){let c=Number(e.getValue(n*s++,i)),f=Number(e.getValue(n*s++,"*")),h=Number(e.getValue(n*s++,i)),g=[];for(let _=0;_<h;_++)g.push(Number(e.getValue(n*s++,i)));l.push(new vn(e,c,f,g))}this.inputs=l}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){var a;let r=((a=t==null?void 0:t.inputs)==null?void 0:a.map(l=>typeof l=="number"?this.inputs[l]:l))??this.inputs,n=(t==null?void 0:t.outputs)??[],s=(l,u,c)=>new vn(this.module,u,this.output(l,c),c),i=(l,u)=>{let c=Pr(l,u);if(!c)throw new Error(`Unsupported data type: ${l}`);let f=c>0?this.backend.gpuDataManager.create(c).id:0;return new vn(this.module,l,f,u)};return this.backend.run(e,r,n,s,i,this.outputCount)}output(e,t){let r=this.module.stackSave();try{let n=this.module.PTR_SIZE,s=n===4?"i32":"i64",i=this.module.stackAlloc((1+t.length)*n);this.module.setValue(i,t.length,s);for(let a=0;a<t.length;a++)this.module.setValue(i+n*(a+1),t[a],s);return this.module._JsepOutput(this.opKernelContext,e,i)}catch(n){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${n}`)}finally{this.module.stackRestore(r)}}},T_=async(e,t,r,n)=>{let s=t.jsepInit;if(!s)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let i=new v_;await i.initialize(r,n),s("webgpu",[i,a=>i.alloc(Number(a)),a=>i.free(a),(a,l,u,c=!1)=>{if(c)Oe("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(a)}, dst=${Number(l)}, size=${Number(u)}`),i.memcpy(Number(a),Number(l));else{Oe("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(a)}, gpuDataId=${Number(l)}, size=${Number(u)}`);let f=t.HEAPU8.subarray(Number(a>>>0),Number(a>>>0)+Number(u));i.upload(Number(l),f)}},async(a,l,u)=>{Oe("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${a}, dataOffset=${l}, size=${u}`),await i.download(Number(a),()=>t.HEAPU8.subarray(Number(l)>>>0,Number(l+u)>>>0))},(a,l,u)=>i.createKernel(a,Number(l),u,t.UTF8ToString(t._JsepGetNodeName(Number(l)))),a=>i.releaseKernel(a),(a,l,u,c)=>{Oe("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${u}, kernel=${a}, contextDataOffset=${l}`);let f=new Qf(t,i,Number(l));return i.computeKernel(Number(a),f,c)},()=>i.captureBegin(),()=>i.captureEnd(),()=>i.replay()])}else{let i=new x_(r);s("webnn",[i,()=>i.reserveTensorId(),a=>i.releaseTensorId(a),async(a,l,u,c,f)=>i.ensureTensor(a,l,u,c,f),(a,l)=>{i.uploadTensor(a,l)},async(a,l)=>i.downloadTensor(a,l)])}}}),Zf,Wo,Lo,gr,Xf,qn,Vo,qo,Sa,Fo,Ho,Go,k_=K(()=>{e1(),t1(),_e(),Gr(),xo(),Om(),Zf=(e,t)=>{Ye()._OrtInit(e,t)!==0&&Be("Can't initialize onnxruntime.")},Wo=async e=>{Zf(e.wasm.numThreads,Un(e.logLevel))},Lo=async(e,t)=>{{let r=(Z1(),Dn(S_)).init;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");let n=e.webgpu.adapter;if(n){if(typeof n.limits!="object"||typeof n.features!="object"||typeof n.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let s=e.webgpu.powerPreference;if(s!==void 0&&s!=="low-power"&&s!=="high-performance")throw new Error(`Invalid powerPreference setting: "${s}"`);let i=e.webgpu.forceFallbackAdapter;if(i!==void 0&&typeof i!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${i}"`);if(n=await navigator.gpu.requestAdapter({powerPreference:s,forceFallbackAdapter:i}),!n)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}await r("webgpu",Ye(),e,n)}if(t==="webnn"){if(typeof navigator>"u"||!navigator.ml)throw new Error("WebNN is not supported in current environment");await r("webnn",Ye(),e)}}},gr=new Map,Xf=e=>{let t=Ye(),r=t.stackSave();try{let n=t.PTR_SIZE,s=t.stackAlloc(2*n);t._OrtGetInputOutputCount(e,s,s+n)!==0&&Be("Can't get session input/output count.");let i=n===4?"i32":"i64";return[Number(t.getValue(s,i)),Number(t.getValue(s+n,i))]}finally{t.stackRestore(r)}},qn=e=>{let t=Ye(),r=t._malloc(e.byteLength);if(r===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,r),[r,e.byteLength]},Vo=async(e,t)=>{var h,g,_;let r,n,s=Ye();Array.isArray(e)?[r,n]=e:e.buffer===s.HEAPU8.buffer?[r,n]=[e.byteOffset,e.byteLength]:[r,n]=qn(e);let i=0,a=0,l=0,u=[],c=[],f=[];try{if([a,u]=Am(t),(t==null?void 0:t.externalData)&&s.mountExternalData){let C=[];for(let z of t.externalData){let O=typeof z=="string"?z:z.path;C.push(ko(typeof z=="string"?z:z.data).then(B=>{s.mountExternalData(O,B)}))}await Promise.all(C)}for(let C of(t==null?void 0:t.executionProviders)??[])if((typeof C=="string"?C:C.name)==="webnn"){if(s.shouldTransferToMLTensor=!1,typeof C!="string"){let z=C,O=z==null?void 0:z.context,B=z==null?void 0:z.gpuDevice,V=z==null?void 0:z.deviceType,X=z==null?void 0:z.powerPreference;O?s.currentContext=O:B?s.currentContext=await s.jsepCreateMLContext(B):s.currentContext=await s.jsepCreateMLContext({deviceType:V,powerPreference:X})}else s.currentContext=await s.jsepCreateMLContext();break}i=await s._OrtCreateSession(r,n,a),i===0&&Be("Can't create a session."),(h=s.jsepOnCreateSession)==null||h.call(s),s.currentContext&&(s.jsepRegisterMLContext(i,s.currentContext),s.currentContext=void 0,s.shouldTransferToMLTensor=!0);let[b,w]=Xf(i),T=!!(t!=null&&t.enableGraphCapture),v=[],$=[],k=[];for(let C=0;C<b;C++){let z=s._OrtGetInputName(i,C);z===0&&Be("Can't get an input name."),c.push(z),v.push(s.UTF8ToString(z))}for(let C=0;C<w;C++){let z=s._OrtGetOutputName(i,C);z===0&&Be("Can't get an output name."),f.push(z);let O=s.UTF8ToString(z);$.push(O);{if(T&&(t==null?void 0:t.preferredOutputLocation)===void 0){k.push("gpu-buffer");continue}let B=typeof(t==null?void 0:t.preferredOutputLocation)=="string"?t.preferredOutputLocation:((g=t==null?void 0:t.preferredOutputLocation)==null?void 0:g[O])??"cpu";if(B!=="cpu"&&B!=="cpu-pinned"&&B!=="gpu-buffer"&&B!=="ml-tensor")throw new Error(`Not supported preferred output location: ${B}.`);if(T&&B!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${B}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);k.push(B)}}let x=null;return k.some(C=>C==="gpu-buffer"||C==="ml-tensor")&&(l=s._OrtCreateBinding(i),l===0&&Be("Can't create IO binding."),x={handle:l,outputPreferredLocations:k,outputPreferredLocationsEncoded:k.map(C=>Ua(C))}),gr.set(i,[i,c,f,x,T,!1]),[i,v,$]}catch(b){throw c.forEach(w=>s._OrtFree(w)),f.forEach(w=>s._OrtFree(w)),l!==0&&s._OrtReleaseBinding(l)!==0&&Be("Can't release IO binding."),i!==0&&s._OrtReleaseSession(i)!==0&&Be("Can't release session."),b}finally{s._free(r),a!==0&&s._OrtReleaseSessionOptions(a)!==0&&Be("Can't release session options."),u.forEach(b=>s._free(b)),(_=s.unmountExternalData)==null||_.call(s)}},qo=e=>{var u;let t=Ye(),r=gr.get(e);if(!r)throw new Error(`cannot release session. invalid session id: ${e}`);let[n,s,i,a,l]=r;a&&(l&&t._OrtClearBoundOutputs(a.handle)!==0&&Be("Can't clear bound outputs."),t._OrtReleaseBinding(a.handle)!==0&&Be("Can't release IO binding.")),(u=t.jsepOnReleaseSession)==null||u.call(t,e),s.forEach(c=>t._OrtFree(c)),i.forEach(c=>t._OrtFree(c)),t._OrtReleaseSession(n)!==0&&Be("Can't release session."),gr.delete(e)},Sa=async(e,t,r,n,s,i=!1)=>{if(!e){t.push(0);return}let a=Ye(),l=a.PTR_SIZE,u=e[0],c=e[1],f=e[3],h=f,g,_;if(u==="string"&&(f==="gpu-buffer"||f==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(i&&f!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${s} when enableGraphCapture is true.`);if(f==="gpu-buffer"){let T=e[2].gpuBuffer;_=Pr(ei(u),c);let v=a.jsepRegisterBuffer;if(!v)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');g=v(n,s,T,_)}else if(f==="ml-tensor"){let T=e[2].mlTensor;_=Pr(ei(u),c);let v=a.jsepRegisterMLTensor;if(!v)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');g=v(n,T,ei(u),c)}else{let T=e[2];if(Array.isArray(T)){_=l*T.length,g=a._malloc(_),r.push(g);for(let v=0;v<T.length;v++){if(typeof T[v]!="string")throw new TypeError(`tensor data at index ${v} is not a string`);a.setValue(g+v*l,nt(T[v],r),"*")}}else{let v=a.jsepIsGraphInput;if(u!=="string"&&v){let $=a._OrtGetInputName(n,s),k=a.UTF8ToString($);if(v(n,k)){let x=ei(u);_=Pr(x,c),h="ml-tensor";let C=a.jsepCreateTemporaryTensor,z=a.jsepUploadTensor;if(!C||!z)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let O=await C(n,x,c);z(O,new Uint8Array(T.buffer,T.byteOffset,T.byteLength)),g=O}else _=T.byteLength,g=a._malloc(_),r.push(g),a.HEAPU8.set(new Uint8Array(T.buffer,T.byteOffset,_),g)}else _=T.byteLength,g=a._malloc(_),r.push(g),a.HEAPU8.set(new Uint8Array(T.buffer,T.byteOffset,_),g)}}let b=a.stackSave(),w=a.stackAlloc(4*c.length);try{c.forEach((v,$)=>a.setValue(w+$*l,v,l===4?"i32":"i64"));let T=a._OrtCreateTensor(ei(u),g,_,w,c.length,Ua(h));T===0&&Be(`Can't create tensor for input/output. session=${n}, index=${s}.`),t.push(T)}finally{a.stackRestore(b)}},Fo=async(e,t,r,n,s,i)=>{var ue,ge,ae;let a=Ye(),l=a.PTR_SIZE,u=gr.get(e);if(!u)throw new Error(`cannot run inference. invalid session id: ${e}`);let c=u[0],f=u[1],h=u[2],g=u[3],_=u[4],b=u[5],w=t.length,T=n.length,v=0,$=[],k=[],x=[],C=[],z=a.stackSave(),O=a.stackAlloc(w*l),B=a.stackAlloc(w*l),V=a.stackAlloc(T*l),X=a.stackAlloc(T*l);try{[v,$]=zm(i);for(let Q=0;Q<w;Q++)await Sa(r[Q],k,C,e,t[Q],_);for(let Q=0;Q<T;Q++)await Sa(s[Q],x,C,e,w+n[Q],_);for(let Q=0;Q<w;Q++)a.setValue(O+Q*l,k[Q],"*"),a.setValue(B+Q*l,f[t[Q]],"*");for(let Q=0;Q<T;Q++)a.setValue(V+Q*l,x[Q],"*"),a.setValue(X+Q*l,h[n[Q]],"*");if(g&&!b){let{handle:Q,outputPreferredLocations:le,outputPreferredLocationsEncoded:de}=g;if(f.length!==w)throw new Error(`input count from feeds (${w}) is expected to be always equal to model's input count (${f.length}).`);for(let ee=0;ee<w;ee++){let Ae=t[ee];await a._OrtBindInput(Q,f[Ae],k[ee])!==0&&Be(`Can't bind input[${ee}] for session=${e}.`)}for(let ee=0;ee<T;ee++){let Ae=n[ee];(ue=s[ee])!=null&&ue[3]?a._OrtBindOutput(Q,h[Ae],x[ee],0)!==0&&Be(`Can't bind pre-allocated output[${ee}] for session=${e}.`):a._OrtBindOutput(Q,h[Ae],0,de[Ae])!==0&&Be(`Can't bind output[${ee}] to ${le[ee]} for session=${e}.`)}gr.set(e,[c,f,h,g,_,!0])}(ge=a.jsepOnRunStart)==null||ge.call(a,c);let he;g?he=await a._OrtRunWithBinding(c,g.handle,T,V,v):he=await a._OrtRun(c,B,O,w,X,T,V,v),he!==0&&Be("failed to call OrtRun().");let fe=[];for(let Q=0;Q<T;Q++){let le=Number(a.getValue(V+Q*l,"*"));if(le===x[Q]){fe.push(s[Q]);continue}let de=a.stackSave(),ee=a.stackAlloc(4*l),Ae=!1,N,q=0;try{a._OrtGetTensorData(le,ee,ee+l,ee+2*l,ee+3*l)!==0&&Be(`Can't access output tensor data on index ${Q}.`);let ke=l===4?"i32":"i64",We=Number(a.getValue(ee,ke));q=a.getValue(ee+l,"*");let W=a.getValue(ee+l*2,"*"),ze=Number(a.getValue(ee+l*3,ke)),it=[];for(let qe=0;qe<ze;qe++)it.push(Number(a.getValue(W+qe*l,ke)));a._OrtFree(W)!==0&&Be("Can't free memory for tensor dims.");let et=it.reduce((qe,De)=>qe*De,1);N=Nr(We);let qt=g==null?void 0:g.outputPreferredLocations[n[Q]];if(N==="string"){if(qt==="gpu-buffer"||qt==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let qe=[];for(let De=0;De<et;De++){let E=a.getValue(q+De*l,"*"),A=a.getValue(q+(De+1)*l,"*"),P=De===et-1?void 0:A-E;qe.push(a.UTF8ToString(E,P))}fe.push([N,it,qe,"cpu"])}else if(qt==="gpu-buffer"&&et>0){let qe=a.jsepGetBuffer;if(!qe)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let De=qe(q),E=Pr(We,et);if(E===void 0||!To(N))throw new Error(`Unsupported data type: ${N}`);Ae=!0,fe.push([N,it,{gpuBuffer:De,download:a.jsepCreateDownloader(De,E,N),dispose:()=>{a._OrtReleaseTensor(le)!==0&&Be("Can't release tensor.")}},"gpu-buffer"])}else if(qt==="ml-tensor"&&et>0){let qe=a.jsepEnsureTensor;if(!qe)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(Pr(We,et)===void 0||!Co(N))throw new Error(`Unsupported data type: ${N}`);let De=await qe(e,q,We,it,!1);Ae=!0,fe.push([N,it,{mlTensor:De,download:a.jsepCreateMLTensorDownloader(q,N),dispose:()=>{a.jsepReleaseTensorId(q),a._OrtReleaseTensor(le)}},"ml-tensor"])}else{let qe=So(N),De=new qe(et);new Uint8Array(De.buffer,De.byteOffset,De.byteLength).set(a.HEAPU8.subarray(q,q+De.byteLength)),fe.push([N,it,De,"cpu"])}}finally{a.stackRestore(de),N==="string"&&q&&a._free(q),Ae||a._OrtReleaseTensor(le),(ae=a.jsepOnRunEnd)==null||ae.call(a,c)}}return g&&!_&&(a._OrtClearBoundOutputs(g.handle)!==0&&Be("Can't clear bound outputs."),gr.set(e,[c,f,h,g,_,!1])),fe}finally{a.stackRestore(z),k.forEach(he=>a._OrtReleaseTensor(he)),x.forEach(he=>a._OrtReleaseTensor(he)),C.forEach(he=>a._free(he)),v!==0&&a._OrtReleaseRunOptions(v),$.forEach(he=>a._free(he))}},Ho=e=>{let t=Ye(),r=gr.get(e);if(!r)throw new Error("invalid session id");let n=r[0],s=t._OrtEndProfiling(n);s===0&&Be("Can't get an profile file name."),t._OrtFree(s)},Go=e=>{let t=[];for(let r of e){let n=r[2];!Array.isArray(n)&&"buffer"in n&&t.push(n.buffer)}return t}}),yr,yt,Xr,Ci,ki,$n,Ta,xn,Or,Rr,Yf,I_,E_,z_,A_,O_,R_,M_,B_=K(()=>{Vt(),k_(),Gr(),vo(),yr=()=>!!He.wasm.proxy&&typeof document<"u",Xr=!1,Ci=!1,ki=!1,xn=new Map,Or=(e,t)=>{let r=xn.get(e);r?r.push(t):xn.set(e,[t])},Rr=()=>{if(Xr||!Ci||ki||!yt)throw new Error("worker not ready")},Yf=e=>{switch(e.data.type){case"init-wasm":Xr=!1,e.data.err?(ki=!0,Ta[1](e.data.err)):(Ci=!0,Ta[0]()),$n&&(URL.revokeObjectURL($n),$n=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=xn.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}}},I_=async()=>{if(!Ci){if(Xr)throw new Error("multiple calls to 'initWasm()' detected.");if(ki)throw new Error("previous call to 'initWasm()' failed.");if(Xr=!0,yr())return new Promise((e,t)=>{yt==null||yt.terminate(),Im().then(([r,n])=>{var s;try{yt=n,yt.onerror=a=>t(a),yt.onmessage=Yf,Ta=[e,t];let i={type:"init-wasm",in:He};!i.in.wasm.wasmPaths&&(r||(s=import.meta.url)!=null&&s.startsWith("file:"))&&(i.in.wasm.wasmPaths={wasm:new URL("/assets/ort-wasm-simd-threaded.jsep-D5Jk56-t.wasm",import.meta.url).href}),yt.postMessage(i),$n=r}catch(i){t(i)}},t)});try{await $o(He.wasm),await Wo(He),Ci=!0}catch(e){throw ki=!0,e}finally{Xr=!1}}},E_=async e=>{if(yr())return Rr(),new Promise((t,r)=>{Or("init-ep",[t,r]);let n={type:"init-ep",in:{epName:e,env:He}};yt.postMessage(n)});await Lo(He,e)},z_=async e=>yr()?(Rr(),new Promise((t,r)=>{Or("copy-from",[t,r]);let n={type:"copy-from",in:{buffer:e}};yt.postMessage(n,[e.buffer])})):qn(e),A_=async(e,t)=>{if(yr()){if(t!=null&&t.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return Rr(),new Promise((r,n)=>{Or("create",[r,n]);let s={type:"create",in:{model:e,options:{...t}}},i=[];e instanceof Uint8Array&&i.push(e.buffer),yt.postMessage(s,i)})}else return Vo(e,t)},O_=async e=>{if(yr())return Rr(),new Promise((t,r)=>{Or("release",[t,r]);let n={type:"release",in:e};yt.postMessage(n)});qo(e)},R_=async(e,t,r,n,s,i)=>{if(yr()){if(r.some(a=>a[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(s.some(a=>a))throw new Error("pre-allocated output tensor is not supported for proxy.");return Rr(),new Promise((a,l)=>{Or("run",[a,l]);let u=r,c={type:"run",in:{sessionId:e,inputIndices:t,inputs:u,outputIndices:n,options:i}};yt.postMessage(c,Go(u))})}else return Fo(e,t,r,n,s,i)},M_=async e=>{if(yr())return Rr(),new Promise((t,r)=>{Or("end-profiling",[t,r]);let n={type:"end-profiling",in:e};yt.postMessage(n)});Ho(e)}}),Ca,Jf,D_,X1=K(()=>{Vt(),B_(),_e(),wo(),Om(),Ca=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},Jf=e=>{switch(e[3]){case"cpu":return new Ut(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!To(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:r,download:n,dispose:s}=e[2];return Ut.fromGpuBuffer(r,{dataType:t,dims:e[1],download:n,dispose:s})}case"ml-tensor":{let t=e[0];if(!Co(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:r,download:n,dispose:s}=e[2];return Ut.fromMLTensor(r,{dataType:t,dims:e[1],download:n,dispose:s})}default:throw new Error(`invalid data location: ${e[3]}`)}},D_=class{async fetchModelAndCopyToWasmMemory(e){return z_(await ko(e))}async loadModel(e,t){tr();let r;typeof e=="string"?r=await this.fetchModelAndCopyToWasmMemory(e):r=e,[this.sessionId,this.inputNames,this.outputNames]=await A_(r,t),Lt()}async dispose(){return O_(this.sessionId)}async run(e,t,r){tr();let n=[],s=[];Object.entries(e).forEach(h=>{let g=h[0],_=h[1],b=this.inputNames.indexOf(g);if(b===-1)throw new Error(`invalid input '${g}'`);n.push(_),s.push(b)});let i=[],a=[];Object.entries(t).forEach(h=>{let g=h[0],_=h[1],b=this.outputNames.indexOf(g);if(b===-1)throw new Error(`invalid output '${g}'`);i.push(_),a.push(b)});let l=n.map((h,g)=>Ca(h,()=>`input "${this.inputNames[s[g]]}"`)),u=i.map((h,g)=>h?Ca(h,()=>`output "${this.outputNames[a[g]]}"`):null),c=await R_(this.sessionId,s,l,a,u,r),f={};for(let h=0;h<c.length;h++)f[this.outputNames[a[h]]]=i[h]??Jf(c[h]);return Lt(),f}startProfiling(){}endProfiling(){M_(this.sessionId)}}}),N_={};Ki(N_,{OnnxruntimeWebAssemblyBackend:()=>Ya,initializeFlags:()=>Xa,wasmBackend:()=>P_});var Xa,Ya,P_,Y1=K(()=>{Vt(),B_(),X1(),Xa=()=>{if((typeof He.wasm.initTimeout!="number"||He.wasm.initTimeout<0)&&(He.wasm.initTimeout=0),He.wasm.simd===!1&&console.warn('Deprecated property "env.wasm.simd" is set to false. non-SIMD build is no longer provided, and this setting will be ignored.'),typeof He.wasm.proxy!="boolean"&&(He.wasm.proxy=!1),typeof He.wasm.trace!="boolean"&&(He.wasm.trace=!1),typeof He.wasm.numThreads!="number"||!Number.isInteger(He.wasm.numThreads)||He.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)He.wasm.numThreads=1;else{let e=typeof navigator>"u"?D$("node:os").cpus().length:navigator.hardwareConcurrency;He.wasm.numThreads=Math.min(4,Math.ceil((e||1)/2))}},Ya=class{async init(e){Xa(),await I_(),await E_(e)}async createInferenceSessionHandler(e,t){let r=new D_;return await r.loadModel(e,t),Promise.resolve(r)}},P_=new Ya});Vt();Vt();Vt();var J1="1.21.0";{let e=(Y1(),Dn(N_)).wasmBackend;ti("webgpu",e,5),ti("webnn",e,5),ti("cpu",e,10),ti("wasm",e,10)}Object.defineProperty(He.versions,"web",{value:J1,enumerable:!0});/**
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
 */const e2={class:"app-container"},t2={key:0,class:"loading-message"},r2={key:0,class:"prediction-result"},i2={class:"logits-panel"},n2={class:"logit-label"},s2={class:"logit-value"},a2={__name:"App",setup(e){const t=xt(new Array(784).fill(0)),r=xt(null),n=xt(null),s=xt(new Array(11).fill(0)),i=xt(!0);ho(async()=>{try{n.value=await bo.create("/models/mnist_cnn_ood_v4.onnx"),i.value=!1}catch(c){console.error("Failed to load model:",c),alert("Failed to load the model."),i.value=!1}});const a=c=>{t.value=c,l()},l=async()=>{if(!n.value){console.error("Model not loaded yet!");return}if(t.value.every(f=>f===0)){r.value=null,s.value=new Array(11).fill(0);return}const c=new Ut("float32",t.value,[1,1,28,28]);try{const g=(await n.value.run({[n.value.inputNames[0]]:c}))[n.value.outputNames[0]].data.map(T=>{const v=Math.exp(T);return Number.isFinite(v)?v:0}),_=g.reduce((T,v)=>T+v,0),b=_===0?new Array(11).fill(0):g.map(T=>T/_);s.value=b;const w=s.value.indexOf(Math.max(...s.value));r.value=w}catch(f){console.error("Inference error:",f),alert("Prediction failed.")}},u=()=>{r.value=null,s.value=new Array(11).fill(0)};return(c,f)=>(br(),Br("div",e2,[i.value?(br(),Br("div",t2,"Loading model...")):(br(),Br(Pt,{key:1},[Jt(O$,{"onUpdate:imageData":a,onClearPrediction:u}),r.value!==null?(br(),Br("div",r2," Prediction: "+si(r.value===10?"Not a Number":r.value),1)):qv("",!0),St("div",i2,[(br(!0),Br(Pt,null,lv(s.value,(h,g)=>(br(),Br("div",{key:g,class:"logit-bar-container"},[St("div",n2,si(g===10?"NaN":g),1),St("div",{class:"logit-bar",style:Kn({width:`${h*100}%`,backgroundColor:g===r.value?"lightgreen":"skyblue"})},null,4),St("div",s2,si((h*100).toFixed(2))+"%",1)]))),128))])],64))]))}},o2=nm(a2,[["__scopeId","data-v-1f4f00da"]]);S$(o2).mount("#app");
