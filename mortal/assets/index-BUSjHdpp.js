(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ic(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const ht={},Lr=[],kn=()=>{},dh=()=>!1,oa=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),aa=t=>t.startsWith("onUpdate:"),Ut=Object.assign,Uc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Dp=Object.prototype.hasOwnProperty,nt=(t,e)=>Dp.call(t,e),ke=Array.isArray,Dr=t=>Cs(t)==="[object Map]",ph=t=>Cs(t)==="[object Set]",Su=t=>Cs(t)==="[object Date]",ze=t=>typeof t=="function",vt=t=>typeof t=="string",mn=t=>typeof t=="symbol",ft=t=>t!==null&&typeof t=="object",mh=t=>(ft(t)||ze(t))&&ze(t.then)&&ze(t.catch),gh=Object.prototype.toString,Cs=t=>gh.call(t),Ip=t=>Cs(t).slice(8,-1),_h=t=>Cs(t)==="[object Object]",la=t=>vt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,us=Ic(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ca=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},Up=/-\w/g,bn=ca(t=>t.replace(Up,e=>e.slice(1).toUpperCase())),Np=/\B([A-Z])/g,sr=ca(t=>t.replace(Np,"-$1").toLowerCase()),vh=ca(t=>t.charAt(0).toUpperCase()+t.slice(1)),Pa=ca(t=>t?`on${vh(t)}`:""),Fn=(t,e)=>!Object.is(t,e),Eo=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},xh=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},Nc=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Mu;const ua=()=>Mu||(Mu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Qe(t){if(ke(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=vt(i)?kp(i):Qe(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(vt(t)||ft(t))return t}const Op=/;(?![^(]*\))/g,Fp=/:([^]+)/,Bp=/\/\*[^]*?\*\//g;function kp(t){const e={};return t.replace(Bp,"").split(Op).forEach(n=>{if(n){const i=n.split(Fp);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Tt(t){let e="";if(vt(t))e=t;else if(ke(t))for(let n=0;n<t.length;n++){const i=Tt(t[n]);i&&(e+=i+" ")}else if(ft(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Hp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Gp=Ic(Hp);function yh(t){return!!t||t===""}function zp(t,e){if(t.length!==e.length)return!1;let n=!0;for(let i=0;n&&i<t.length;i++)n=Oc(t[i],e[i]);return n}function Oc(t,e){if(t===e)return!0;let n=Su(t),i=Su(e);if(n||i)return n&&i?t.getTime()===e.getTime():!1;if(n=mn(t),i=mn(e),n||i)return t===e;if(n=ke(t),i=ke(e),n||i)return n&&i?zp(t,e):!1;if(n=ft(t),i=ft(e),n||i){if(!n||!i)return!1;const r=Object.keys(t).length,s=Object.keys(e).length;if(r!==s)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Oc(t[o],e[o]))return!1}}return String(t)===String(e)}const Sh=t=>!!(t&&t.__v_isRef===!0),rt=t=>vt(t)?t:t==null?"":ke(t)||ft(t)&&(t.toString===gh||!ze(t.toString))?Sh(t)?rt(t.value):JSON.stringify(t,Mh,2):String(t),Mh=(t,e)=>Sh(e)?Mh(t,e.value):Dr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r],s)=>(n[La(i,s)+" =>"]=r,n),{})}:ph(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>La(n))}:mn(e)?La(e):ft(e)&&!ke(e)&&!_h(e)?String(e):e,La=(t,e="")=>{var n;return mn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Et;class Eh{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&Et&&(Et.active?(this.parent=Et,this.index=(Et.scopes||(Et.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes){const i=this.scopes.slice();for(e=0,n=i.length;e<n;e++)i[e].pause()}for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes){const r=this.scopes.slice();for(e=0,n=r.length;e<n;e++)r[e].resume()}const i=this.effects.slice();for(e=0,n=i.length;e<n;e++)i[e].resume()}}run(e){if(this._active){const n=Et;try{return Et=this,e()}finally{Et=n}}}on(){++this._on===1&&(this.prevScope=Et,Et=this)}off(){if(this._on>0&&--this._on===0){if(Et===this)Et=this.prevScope;else{let e=Et;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){const r=this.scopes.slice();for(n=0,i=r.length;n<i;n++)r[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Th(t){return new Eh(t)}function bh(){return Et}function Vp(t,e=!1){Et&&Et.cleanups.push(t)}let dt;const Da=new WeakSet;class Ah{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Et&&(Et.active?Et.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Da.has(this)&&(Da.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Rh(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Eu(this),Ch(this);const e=dt,n=An;dt=this,An=!0;try{return this.fn()}finally{Ph(this),dt=e,An=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)kc(e);this.deps=this.depsTail=void 0,Eu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Da.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){wl(this)&&this.run()}get dirty(){return wl(this)}}let wh=0,fs,hs;function Rh(t,e=!1){if(t.flags|=8,e){t.next=hs,hs=t;return}t.next=fs,fs=t}function Fc(){wh++}function Bc(){if(--wh>0)return;if(hs){let e=hs;for(hs=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;fs;){let e=fs;for(fs=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function Ch(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Ph(t){let e,n=t.depsTail,i=n;for(;i;){const r=i.prevDep;i.version===-1?(i===n&&(n=r),kc(i),Wp(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}t.deps=e,t.depsTail=n}function wl(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Lh(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Lh(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===xs)||(t.globalVersion=xs,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!wl(t))))return;t.flags|=2;const e=t.dep,n=dt,i=An;dt=t,An=!0;try{Ch(t);const r=t.fn(t._value);(e.version===0||Fn(r,t._value))&&(t.flags|=128,t._value=r,e.version++)}catch(r){throw e.version++,r}finally{dt=n,An=i,Ph(t),t.flags&=-3}}function kc(t,e=!1){const{dep:n,prevSub:i,nextSub:r}=t;if(i&&(i.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let s=n.computed.deps;s;s=s.nextDep)kc(s,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Wp(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let An=!0;const Dh=[];function oi(){Dh.push(An),An=!1}function ai(){const t=Dh.pop();An=t===void 0?!0:t}function Eu(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=dt;dt=void 0;try{e()}finally{dt=n}}}let xs=0;class Xp{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Hc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!dt||!An||dt===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==dt)n=this.activeLink=new Xp(dt,this),dt.deps?(n.prevDep=dt.depsTail,dt.depsTail.nextDep=n,dt.depsTail=n):dt.deps=dt.depsTail=n,Ih(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=dt.depsTail,n.nextDep=void 0,dt.depsTail.nextDep=n,dt.depsTail=n,dt.deps===n&&(dt.deps=i)}return n}trigger(e){this.version++,xs++,this.notify(e)}notify(e){Fc();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Bc()}}}function Ih(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Ih(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Bo=new WeakMap,Ji=Symbol(""),Rl=Symbol(""),ys=Symbol("");function Ft(t,e,n){if(An&&dt){let i=Bo.get(t);i||Bo.set(t,i=new Map);let r=i.get(n);r||(i.set(n,r=new Hc),r.map=i,r.key=n),r.track()}}function ei(t,e,n,i,r,s){const o=Bo.get(t);if(!o){xs++;return}const a=l=>{l&&l.trigger()};if(Fc(),e==="clear")o.forEach(a);else{const l=ke(t),c=l&&la(n);if(l&&n==="length"){const u=Number(i);o.forEach((f,h)=>{(h==="length"||h===ys||!mn(h)&&h>=u)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get(ys)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Ji)),Dr(t)&&a(o.get(Rl)));break;case"delete":l||(a(o.get(Ji)),Dr(t)&&a(o.get(Rl)));break;case"set":Dr(t)&&a(o.get(Ji));break}}Bc()}function qp(t,e){const n=Bo.get(t);return n&&n.get(e)}function lr(t){const e=Ze(t);return e===t?e:(Ft(e,"iterate",ys),on(t)?e:e.map(wn))}function fa(t){return Ft(t=Ze(t),"iterate",ys),t}function Un(t,e){return li(t)?Hr(si(t)?wn(e):e):wn(e)}const $p={__proto__:null,[Symbol.iterator](){return Ia(this,Symbol.iterator,t=>Un(this,t))},concat(...t){return lr(this).concat(...t.map(e=>ke(e)?lr(e):e))},entries(){return Ia(this,"entries",t=>(t[1]=Un(this,t[1]),t))},every(t,e){return Wn(this,"every",t,e,void 0,arguments)},filter(t,e){return Wn(this,"filter",t,e,n=>n.map(i=>Un(this,i)),arguments)},find(t,e){return Wn(this,"find",t,e,n=>Un(this,n),arguments)},findIndex(t,e){return Wn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Wn(this,"findLast",t,e,n=>Un(this,n),arguments)},findLastIndex(t,e){return Wn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Wn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Ua(this,"includes",t)},indexOf(...t){return Ua(this,"indexOf",t)},join(t){return lr(this).join(t)},lastIndexOf(...t){return Ua(this,"lastIndexOf",t)},map(t,e){return Wn(this,"map",t,e,void 0,arguments)},pop(){return Zr(this,"pop")},push(...t){return Zr(this,"push",t)},reduce(t,...e){return Tu(this,"reduce",t,e)},reduceRight(t,...e){return Tu(this,"reduceRight",t,e)},shift(){return Zr(this,"shift")},some(t,e){return Wn(this,"some",t,e,void 0,arguments)},splice(...t){return Zr(this,"splice",t)},toReversed(){return lr(this).toReversed()},toSorted(t){return lr(this).toSorted(t)},toSpliced(...t){return lr(this).toSpliced(...t)},unshift(...t){return Zr(this,"unshift",t)},values(){return Ia(this,"values",t=>Un(this,t))}};function Ia(t,e,n){const i=fa(t),r=i[e]();return i!==t&&!on(t)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=n(s.value)),s}),r}const Kp=Array.prototype;function Wn(t,e,n,i,r,s){const o=fa(t),a=o!==t&&!on(t),l=o[e];if(l!==Kp[e]){const f=l.apply(t,s);return a?wn(f):f}let c=n;o!==t&&(a?c=function(f,h){return n.call(this,Un(t,f),h,t)}:n.length>2&&(c=function(f,h){return n.call(this,f,h,t)}));const u=l.call(o,c,i);return a&&r?r(u):u}function Tu(t,e,n,i){const r=fa(t),s=r!==t&&!on(t);let o=n,a=!1;r!==t&&(s?(a=i.length===0,o=function(c,u,f){return a&&(a=!1,c=Un(t,c)),n.call(this,c,Un(t,u),f,t)}):n.length>3&&(o=function(c,u,f){return n.call(this,c,u,f,t)}));const l=r[e](o,...i);return a?Un(t,l):l}function Ua(t,e,n){const i=Ze(t);Ft(i,"iterate",ys);const r=i[e](...n);return(r===-1||r===!1)&&ha(n[0])?(n[0]=Ze(n[0]),i[e](...n)):r}function Zr(t,e,n=[]){oi(),Fc();const i=Ze(t)[e].apply(t,n);return Bc(),ai(),i}const Yp=Ic("__proto__,__v_isRef,__isVue"),Uh=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(mn));function jp(t){mn(t)||(t=String(t));const e=Ze(this);return Ft(e,"has",t),e.hasOwnProperty(t)}class Nh{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return s;if(n==="__v_raw")return i===(r?s?om:kh:s?Bh:Fh).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=ke(e);if(!r){let l;if(o&&(l=$p[n]))return l;if(n==="hasOwnProperty")return jp}const a=Reflect.get(e,n,xt(e)?e:i);if((mn(n)?Uh.has(n):Yp(n))||(r||Ft(e,"get",n),s))return a;if(xt(a)){const l=o&&la(n)?a:a.value;return r&&ft(l)?Pl(l):l}return ft(a)?r?Pl(a):Ps(a):a}}class Oh extends Nh{constructor(e=!1){super(!1,e)}set(e,n,i,r){let s=e[n];const o=ke(e)&&la(n);if(!this._isShallow){const c=li(s);if(!on(i)&&!li(i)&&(s=Ze(s),i=Ze(i)),!o&&xt(s)&&!xt(i))return c||(s.value=i),!0}const a=o?Number(n)<e.length:nt(e,n),l=Reflect.set(e,n,i,xt(e)?e:r);return e===Ze(r)&&l&&(a?Fn(i,s)&&ei(e,"set",n,i):ei(e,"add",n,i)),l}deleteProperty(e,n){const i=nt(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&i&&ei(e,"delete",n,void 0),r}has(e,n){const i=Reflect.has(e,n);return(!mn(n)||!Uh.has(n))&&Ft(e,"has",n),i}ownKeys(e){return Ft(e,"iterate",ke(e)?"length":Ji),Reflect.ownKeys(e)}}class Zp extends Nh{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Jp=new Oh,Qp=new Zp,em=new Oh(!0);const Cl=t=>t,qs=t=>Reflect.getPrototypeOf(t);function tm(t,e,n){return function(...i){const r=this.__v_raw,s=Ze(r),o=Dr(s),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=r[t](...i),u=n?Cl:e?Hr:wn;return!e&&Ft(s,"iterate",l?Rl:Ji),Ut(Object.create(c),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}}})}}function $s(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function nm(t,e){const n={get(r){const s=this.__v_raw,o=Ze(s),a=Ze(r);t||(Fn(r,a)&&Ft(o,"get",r),Ft(o,"get",a));const{has:l}=qs(o),c=e?Cl:t?Hr:wn;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!t&&Ft(Ze(r),"iterate",Ji),r.size},has(r){const s=this.__v_raw,o=Ze(s),a=Ze(r);return t||(Fn(r,a)&&Ft(o,"has",r),Ft(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=Ze(a),c=e?Cl:t?Hr:wn;return!t&&Ft(l,"iterate",Ji),a.forEach((u,f)=>r.call(s,c(u),c(f),o))}};return Ut(n,t?{add:$s("add"),set:$s("set"),delete:$s("delete"),clear:$s("clear")}:{add(r){const s=Ze(this),o=qs(s),a=Ze(r),l=!e&&!on(r)&&!li(r)?a:r;return o.has.call(s,l)||Fn(r,l)&&o.has.call(s,r)||Fn(a,l)&&o.has.call(s,a)||(s.add(l),ei(s,"add",l,l)),this},set(r,s){!e&&!on(s)&&!li(s)&&(s=Ze(s));const o=Ze(this),{has:a,get:l}=qs(o);let c=a.call(o,r);c||(r=Ze(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?Fn(s,u)&&ei(o,"set",r,s):ei(o,"add",r,s),this},delete(r){const s=Ze(this),{has:o,get:a}=qs(s);let l=o.call(s,r);l||(r=Ze(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&ei(s,"delete",r,void 0),c},clear(){const r=Ze(this),s=r.size!==0,o=r.clear();return s&&ei(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=tm(r,t,e)}),n}function Gc(t,e){const n=nm(t,e);return(i,r,s)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(nt(n,r)&&r in i?n:i,r,s)}const im={get:Gc(!1,!1)},rm={get:Gc(!1,!0)},sm={get:Gc(!0,!1)};const Fh=new WeakMap,Bh=new WeakMap,kh=new WeakMap,om=new WeakMap;function am(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ps(t){return li(t)?t:zc(t,!1,Jp,im,Fh)}function lm(t){return zc(t,!1,em,rm,Bh)}function Pl(t){return zc(t,!0,Qp,sm,kh)}function zc(t,e,n,i,r){if(!ft(t)||t.__v_raw&&!(e&&t.__v_isReactive)||t.__v_skip||!Object.isExtensible(t))return t;const s=r.get(t);if(s)return s;const o=am(Ip(t));if(o===0)return t;const a=new Proxy(t,o===2?i:n);return r.set(t,a),a}function si(t){return li(t)?si(t.__v_raw):!!(t&&t.__v_isReactive)}function li(t){return!!(t&&t.__v_isReadonly)}function on(t){return!!(t&&t.__v_isShallow)}function ha(t){return t?!!t.__v_raw:!1}function Ze(t){const e=t&&t.__v_raw;return e?Ze(e):t}function Vc(t){return!nt(t,"__v_skip")&&Object.isExtensible(t)&&xh(t,"__v_skip",!0),t}const wn=t=>ft(t)?Ps(t):t,Hr=t=>ft(t)?Pl(t):t;function xt(t){return t?t.__v_isRef===!0:!1}function an(t){return cm(t,!1)}function cm(t,e){return xt(t)?t:new um(t,e)}class um{constructor(e,n){this.dep=new Hc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ze(e),this._value=n?e:wn(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||on(e)||li(e);e=i?e:Ze(e),Fn(e,n)&&(this._rawValue=e,this._value=i?e:wn(e),this.dep.trigger())}}function re(t){return xt(t)?t.value:t}const fm={get:(t,e,n)=>e==="__v_raw"?t:re(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return xt(r)&&!xt(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function Hh(t){return si(t)?t:new Proxy(t,fm)}function hm(t){const e=ke(t)?new Array(t.length):{};for(const n in t)e[n]=pm(t,n);return e}class dm{constructor(e,n,i){this._object=e,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0,this._key=mn(n)?n:String(n),this._raw=Ze(e);let r=!0,s=e;if(!ke(e)||mn(this._key)||!la(this._key))do r=!ha(s)||on(s);while(r&&(s=s.__v_raw));this._shallow=r}get value(){let e=this._object[this._key];return this._shallow&&(e=re(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&xt(this._raw[this._key])){const n=this._object[this._key];if(xt(n)){n.value=e;return}}this._object[this._key]=e}get dep(){return qp(this._raw,this._key)}}function pm(t,e,n){return new dm(t,e,n)}class mm{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Hc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=xs-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&dt!==this)return Rh(this,!0),!0}get value(){const e=this.dep.track();return Lh(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function gm(t,e,n=!1){let i,r;return ze(t)?i=t:(i=t.get,r=t.set),new mm(i,r,n)}const Ks={},ko=new WeakMap;let Wi;function _m(t,e=!1,n=Wi){if(n){let i=ko.get(n);i||ko.set(n,i=[]),i.push(t)}}function vm(t,e,n=ht){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=n,c=M=>r?M:on(M)||r===!1||r===0?ti(M,1):ti(M);let u,f,h,d,v=!1,y=!1;if(xt(t)?(f=()=>t.value,v=on(t)):si(t)?(f=()=>c(t),v=!0):ke(t)?(y=!0,v=t.some(M=>si(M)||on(M)),f=()=>t.map(M=>{if(xt(M))return M.value;if(si(M))return c(M);if(ze(M))return l?l(M,2):M()})):ze(t)?e?f=l?()=>l(t,2):t:f=()=>{if(h){oi();try{h()}finally{ai()}}const M=Wi;Wi=u;try{return l?l(t,3,[d]):t(d)}finally{Wi=M}}:f=kn,e&&r){const M=f,P=r===!0?1/0:r;f=()=>ti(M(),P)}const p=bh(),m=()=>{u.stop(),p&&p.active&&Uc(p.effects,u)};if(s&&e){const M=e;e=(...P)=>{const C=M(...P);return m(),C}}let b=y?new Array(t.length).fill(Ks):Ks;const S=M=>{if(!(!(u.flags&1)||!u.dirty&&!M))if(e){const P=u.run();if(M||r||v||(y?P.some((C,R)=>Fn(C,b[R])):Fn(P,b))){h&&h();const C=Wi;Wi=u;try{const R=[P,b===Ks?void 0:y&&b[0]===Ks?[]:b,d];b=P,l?l(e,3,R):e(...R)}finally{Wi=C}}}else u.run()};return a&&a(S),u=new Ah(f),u.scheduler=o?()=>o(S,!1):S,d=M=>_m(M,!1,u),h=u.onStop=()=>{const M=ko.get(u);if(M){if(l)l(M,4);else for(const P of M)P();ko.delete(u)}},e?i?S(!0):b=u.run():o?o(S.bind(null,!0),!0):u.run(),m.pause=u.pause.bind(u),m.resume=u.resume.bind(u),m.stop=m,m}function ti(t,e=1/0,n){if(e<=0||!ft(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,xt(t))ti(t.value,e,n);else if(ke(t))for(let i=0;i<t.length;i++)ti(t[i],e,n);else if(ph(t)||Dr(t))t.forEach(i=>{ti(i,e,n)});else if(_h(t)){for(const i in t)ti(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&ti(t[i],e,n)}return t}/**
* @vue/runtime-core v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ls(t,e,n,i){try{return i?t(...i):t()}catch(r){da(r,e,n)}}function Rn(t,e,n,i){if(ze(t)){const r=Ls(t,e,n,i);return r&&mh(r)&&r.catch(s=>{da(s,e,n)}),r}if(ke(t)){const r=[];for(let s=0;s<t.length;s++)r.push(Rn(t[s],e,n,i));return r}}function da(t,e,n,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||ht;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](t,l,c)===!1)return}a=a.parent}if(s){oi(),Ls(s,null,10,[t,l,c]),ai();return}}xm(t,n,r,i,o)}function xm(t,e,n,i=!0,r=!1){if(r)throw t;console.error(t)}const zt=[];let In=-1;const Ir=[];let Mi=null,br=0;const Gh=Promise.resolve();let Ho=null;function zh(t){const e=Ho||Gh;return t?e.then(this?t.bind(this):t):e}function ym(t){let e=In+1,n=zt.length;for(;e<n;){const i=e+n>>>1,r=zt[i],s=Ss(r);s<t||s===t&&r.flags&2?e=i+1:n=i}return e}function Wc(t){if(!(t.flags&1)){const e=Ss(t),n=zt[zt.length-1];!n||!(t.flags&2)&&e>=Ss(n)?zt.push(t):zt.splice(ym(e),0,t),t.flags|=1,Vh()}}function Vh(){Ho||(Ho=Gh.then(Xh))}function Sm(t){if(!ke(t))Mi&&t.id===-1?Mi.splice(br+1,0,t):t.flags&1||(Ir.push(t),t.flags|=1);else for(let e=0;e<t.length;e++)Ir.push(t[e]);Vh()}function bu(t,e,n=In+1){for(;n<zt.length;n++){const i=zt[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;zt.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Wh(t){if(Ir.length){const e=[...new Set(Ir)].sort((n,i)=>Ss(n)-Ss(i));if(Ir.length=0,Mi){for(let n=0;n<e.length;n++)Mi.push(e[n]);return}for(Mi=e,br=0;br<Mi.length;br++){const n=Mi[br];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Mi=null,br=0}}const Ss=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Xh(t){try{for(In=0;In<zt.length;In++){const e=zt[In];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ls(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;In<zt.length;In++){const e=zt[In];e&&(e.flags&=-2)}In=-1,zt.length=0,Wh(),Ho=null,(zt.length||Ir.length)&&Xh()}}let dn=null,qh=null;function Go(t){const e=dn;return dn=t,qh=t&&t.type.__scopeId||null,e}function Mm(t,e=dn,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&Fu(-1);const s=Go(e),o=er.length;let a;try{a=t(...r)}finally{for(let l=er.length;l>o;l--)md();Go(s),i._d&&Fu(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function Au(t,e){if(dn===null)return t;const n=xa(dn),i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[s,o,a,l=ht]=e[r];s&&(ze(s)&&(s={mounted:s,updated:s}),s.deep&&ti(o),i.push({dir:s,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function Oi(t,e,n,i){const r=t.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(oi(),Rn(l,n,8,[t.el,a,t,e]),ai())}}function Em(t,e){if(Wt){let n=Wt.provides;const i=Wt.parent&&Wt.parent.provides;i===n&&(n=Wt.provides=Object.create(i)),n[t]=e}}function ds(t,e,n=!1){const i=xd();if(i||Qi){let r=Qi?Qi._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&ze(e)?e.call(i&&i.proxy):e}}function Tm(){return!!(xd()||Qi)}const bm=Symbol.for("v-scx"),Am=()=>ds(bm);function Ur(t,e,n){return $h(t,e,n)}function $h(t,e,n=ht){const{immediate:i,deep:r,flush:s,once:o}=n,a=Ut({},n),l=e&&i||!e&&s!=="post";let c;if(Ts){if(s==="sync"){const d=Am();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=kn,d.resume=kn,d.pause=kn,d}}const u=Wt;a.call=(d,v,y)=>Rn(d,u,v,y);let f=!1;s==="post"?a.scheduler=d=>{Kt(d,u&&u.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(d,v)=>{v?d():Wc(d)}),a.augmentJob=d=>{e&&(d.flags|=4),f&&(d.flags|=2,u&&(d.id=u.uid,d.i=u))};const h=vm(t,e,a);return Ts&&(c?c.push(h):l&&h()),h}function wm(t,e,n){const i=this.proxy,r=vt(t)?t.includes(".")?Kh(i,t):()=>i[t]:t.bind(i,i);let s;ze(e)?s=e:(s=e.handler,n=e);const o=Is(this),a=$h(r,s.bind(i),n);return o(),a}function Kh(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}const Rm=Symbol("_vte"),pa=t=>t.__isTeleport,Na=Symbol("_leaveCb");function Cm(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==ci){e=n;break}}return e}function Yh(t){if(!qc(t))return pa(t.type)&&t.children?Cm(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&ze(n.default))return n.default()}}function Xc(t,e){if(t.shapeFlag&6&&t.component){t.transition=e;const n=t.component.subTree;Xc(pa(n.type)&&Yh(n)||n,e)}else t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function or(t,e){return ze(t)?Ut({name:t.name},e,{setup:t}):t}function jh(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function wu(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const zo=new WeakMap;function ps(t,e,n,i,r=!1){if(ke(t)){t.forEach((y,p)=>ps(y,e&&(ke(e)?e[p]:e),n,i,r));return}if(ms(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&ps(t,e,n,i.component.subTree);return}const s=i.shapeFlag&4?xa(i.component):i.el,o=r?null:s,{i:a,r:l}=t,c=e&&e.r,u=a.refs===ht?a.refs={}:a.refs,f=a.setupState,h=Ze(f),d=f===ht?dh:y=>wu(u,y)?!1:nt(h,y),v=(y,p)=>!(p&&wu(u,p));if(c!=null&&c!==l){if(Ru(e),vt(c))u[c]=null,d(c)&&(f[c]=null);else if(xt(c)){const y=e;v(c,y.k)&&(c.value=null),y.k&&(u[y.k]=null)}}if(ze(l))Ls(l,a,12,[o,u]);else{const y=vt(l),p=xt(l);if(y||p){const m=()=>{if(t.f){const b=y?d(l)?f[l]:u[l]:v()||!t.k?l.value:u[t.k];if(r)ke(b)&&Uc(b,s);else if(ke(b))b.includes(s)||b.push(s);else if(y)u[l]=[s],d(l)&&(f[l]=u[l]);else{const S=[s];v(l,t.k)&&(l.value=S),t.k&&(u[t.k]=S)}}else y?(u[l]=o,d(l)&&(f[l]=o)):p&&(v(l,t.k)&&(l.value=o),t.k&&(u[t.k]=o))};if(o){const b=()=>{m(),zo.delete(t)};b.id=-1,zo.set(t,b),Kt(b,n)}else Ru(t),m()}}}function Ru(t){const e=zo.get(t);e&&(e.flags|=8,zo.delete(t))}ua().requestIdleCallback;ua().cancelIdleCallback;const ms=t=>!!t.type.__asyncLoader,qc=t=>t.type.__isKeepAlive;function Pm(t,e){Zh(t,"a",e)}function Lm(t,e){Zh(t,"da",e)}function Zh(t,e,n=Wt){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(ma(e,i,n),n){let r=n.parent;for(;r&&r.parent;)qc(r.parent.vnode)&&Dm(i,e,n,r),r=r.parent}}function Dm(t,e,n,i){const r=ma(e,t,i,!0);$c(()=>{Uc(i[e],r)},n)}function ma(t,e,n=Wt,i=!1){if(n){const r=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{oi();const a=Is(n),l=Rn(e,n,t,o);return a(),ai(),l});return i?r.unshift(s):r.push(s),s}}const fi=t=>(e,n=Wt)=>{(!Ts||t==="sp")&&ma(t,(...i)=>e(...i),n)},Im=fi("bm"),Ds=fi("m"),Um=fi("bu"),Nm=fi("u"),ga=fi("bum"),$c=fi("um"),Om=fi("sp"),Fm=fi("rtg"),Bm=fi("rtc");function km(t,e=Wt){ma("ec",t,e)}const Hm=Symbol.for("v-ndc");function Dn(t,e,n,i){let r;const s=n,o=ke(t);if(o||vt(t)){const a=o&&si(t);let l=!1,c=!1;a&&(l=!on(t),c=li(t),t=fa(t)),r=new Array(t.length);for(let u=0,f=t.length;u<f;u++)r[u]=e(l?c?Hr(wn(t[u])):wn(t[u]):t[u],u,void 0,s)}else if(typeof t=="number"){r=new Array(t);for(let a=0;a<t;a++)r[a]=e(a+1,a,void 0,s)}else if(ft(t))if(t[Symbol.iterator])r=Array.from(t,(a,l)=>e(a,l,void 0,s));else{const a=Object.keys(t);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=e(t[u],u,l,s)}}else r=[];return r}const Ll=t=>t?yd(t)?xa(t):Ll(t.parent):null,gs=Ut(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ll(t.parent),$root:t=>Ll(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Qh(t),$forceUpdate:t=>t.f||(t.f=()=>{Wc(t.update)}),$nextTick:t=>t.n||(t.n=zh.bind(t.proxy)),$watch:t=>wm.bind(t)}),Oa=(t,e)=>t!==ht&&!t.__isScriptSetup&&nt(t,e),Gm={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=t;if(e[0]!=="$"){const h=o[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return s[e]}else{if(Oa(i,e))return o[e]=1,i[e];if(r!==ht&&nt(r,e))return o[e]=2,r[e];if(nt(s,e))return o[e]=3,s[e];if(n!==ht&&nt(n,e))return o[e]=4,n[e];Dl&&(o[e]=0)}}const c=gs[e];let u,f;if(c)return e==="$attrs"&&Ft(t.attrs,"get",""),c(t);if((u=a.__cssModules)&&(u=u[e]))return u;if(n!==ht&&nt(n,e))return o[e]=4,n[e];if(f=l.config.globalProperties,nt(f,e))return f[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:s}=t;return Oa(r,e)?(r[e]=n,!0):i!==ht&&nt(i,e)?(i[e]=n,!0):nt(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,props:s,type:o}},a){let l;return!!(n[a]||t!==ht&&a[0]!=="$"&&nt(t,a)||Oa(e,a)||nt(s,a)||nt(i,a)||nt(gs,a)||nt(r.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:nt(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Cu(t){return ke(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Dl=!0;function zm(t){const e=Qh(t),n=t.proxy,i=t.ctx;Dl=!1,e.beforeCreate&&Pu(e.beforeCreate,t,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:d,updated:v,activated:y,deactivated:p,beforeDestroy:m,beforeUnmount:b,destroyed:S,unmounted:M,render:P,renderTracked:C,renderTriggered:R,errorCaptured:L,serverPrefetch:j,expose:x,inheritAttrs:T,components:$,directives:K,filters:Z}=e;if(c&&Vm(c,i,null),o)for(const Y in o){const k=o[Y];ze(k)&&(i[Y]=k.bind(n))}if(r){const Y=r.call(n,n);ft(Y)&&(t.data=Ps(Y))}if(Dl=!0,s)for(const Y in s){const k=s[Y],ge=ze(k)?k.bind(n,n):ze(k.get)?k.get.bind(n,n):kn,ve=!ze(k)&&ze(k.set)?k.set.bind(n):kn,Se=lt({get:ge,set:ve});Object.defineProperty(i,Y,{enumerable:!0,configurable:!0,get:()=>Se.value,set:Ge=>Se.value=Ge})}if(a)for(const Y in a)Jh(a[Y],i,n,Y);if(l){const Y=ze(l)?l.call(n):l;Reflect.ownKeys(Y).forEach(k=>{Em(k,Y[k])})}u&&Pu(u,t,"c");function z(Y,k){ke(k)?k.forEach(ge=>Y(ge.bind(n))):k&&Y(k.bind(n))}if(z(Im,f),z(Ds,h),z(Um,d),z(Nm,v),z(Pm,y),z(Lm,p),z(km,L),z(Bm,C),z(Fm,R),z(ga,b),z($c,M),z(Om,j),ke(x))if(x.length){const Y=t.exposed||(t.exposed={});x.forEach(k=>{Object.defineProperty(Y,k,{get:()=>n[k],set:ge=>n[k]=ge,enumerable:!0})})}else t.exposed||(t.exposed={});P&&t.render===kn&&(t.render=P),T!=null&&(t.inheritAttrs=T),$&&(t.components=$),K&&(t.directives=K),j&&jh(t)}function Vm(t,e,n=kn){ke(t)&&(t=Il(t));for(const i in t){const r=t[i];let s;ft(r)?"default"in r?s=ds(r.from||i,r.default,!0):s=ds(r.from||i):s=ds(r),xt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function Pu(t,e,n){Rn(ke(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function Jh(t,e,n,i){let r=i.includes(".")?Kh(n,i):()=>n[i];if(vt(t)){const s=e[t];ze(s)&&Ur(r,s)}else if(ze(t))Ur(r,t.bind(n));else if(ft(t))if(ke(t))t.forEach(s=>Jh(s,e,n,i));else{const s=ze(t.handler)?t.handler.bind(n):e[t.handler];ze(s)&&Ur(r,s,t)}}function Qh(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!n&&!i?l=e:(l={},r.length&&r.forEach(c=>Vo(l,c,o,!0)),Vo(l,e,o)),ft(e)&&s.set(e,l),l}function Vo(t,e,n,i=!1){const{mixins:r,extends:s}=e;s&&Vo(t,s,n,!0),r&&r.forEach(o=>Vo(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=Wm[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Wm={data:Lu,props:Du,emits:Du,methods:os,computed:os,beforeCreate:Ht,created:Ht,beforeMount:Ht,mounted:Ht,beforeUpdate:Ht,updated:Ht,beforeDestroy:Ht,beforeUnmount:Ht,destroyed:Ht,unmounted:Ht,activated:Ht,deactivated:Ht,errorCaptured:Ht,serverPrefetch:Ht,components:os,directives:os,watch:qm,provide:Lu,inject:Xm};function Lu(t,e){return e?t?function(){return Ut(ze(t)?t.call(this,this):t,ze(e)?e.call(this,this):e)}:e:t}function Xm(t,e){return os(Il(t),Il(e))}function Il(t){if(ke(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ht(t,e){return t?[...new Set([].concat(t,e))]:e}function os(t,e){return t?Ut(Object.create(null),t,e):e}function Du(t,e){return t?ke(t)&&ke(e)?[...new Set([...t,...e])]:Ut(Object.create(null),Cu(t),Cu(e??{})):e}function qm(t,e){if(!t)return e;if(!e)return t;const n=Ut(Object.create(null),t);for(const i in e)n[i]=Ht(t[i],e[i]);return n}function ed(){return{app:null,config:{isNativeTag:dh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let $m=0;function Km(t,e){return function(i,r=null){ze(i)||(i=Ut({},i)),r!=null&&!ft(r)&&(r=null);const s=ed(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:$m++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Tg,get config(){return s.config},set config(u){},use(u,...f){return o.has(u)||(u&&ze(u.install)?(o.add(u),u.install(c,...f)):ze(u)&&(o.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,h){if(!l){const d=c._ceVNode||jt(i,r);return d.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),t(d,u,h),l=!0,c._container=u,u.__vue_app__=c,xa(d.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Rn(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=Qi;Qi=c;try{return u()}finally{Qi=f}}};return c}}let Qi=null;const Ym=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${bn(e)}Modifiers`]||t[`${sr(e)}Modifiers`];function jm(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||ht;let r=n;const s=e.startsWith("update:"),o=s&&Ym(i,e.slice(7));o&&(o.trim&&(r=n.map(u=>vt(u)?u.trim():u)),o.number&&(r=n.map(Nc)));let a,l=i[a=Pa(e)]||i[a=Pa(bn(e))];!l&&s&&(l=i[a=Pa(sr(e))]),l&&Rn(l,t,6,r);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Rn(c,t,6,r)}}const Zm=new WeakMap;function td(t,e,n=!1){const i=n?Zm:e.emitsCache,r=i.get(t);if(r!==void 0)return r;const s=t.emits;let o={},a=!1;if(!ze(t)){const l=c=>{const u=td(c,e,!0);u&&(a=!0,Ut(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!a?(ft(t)&&i.set(t,null),null):(ke(s)?s.forEach(l=>o[l]=null):Ut(o,s),ft(t)&&i.set(t,o),o)}function _a(t,e){return!t||!oa(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),nt(t,e[0].toLowerCase()+e.slice(1))||nt(t,sr(e))||nt(t,e))}function Iu(t){const{type:e,vnode:n,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:h,setupState:d,ctx:v,inheritAttrs:y}=t,p=Go(t);let m,b;try{if(n.shapeFlag&4){const M=r||i,P=M;m=Nn(c.call(P,M,u,f,d,h,v)),b=a}else{const M=e;m=Nn(M.length>1?M(f,{attrs:a,slots:o,emit:l}):M(f,null)),b=e.props?a:Jm(a)}}catch(M){er.length=0,da(M,t,1),m=jt(ci)}let S=m;if(b&&y!==!1){const M=Object.keys(b),{shapeFlag:P}=S;M.length&&P&7&&(s&&M.some(aa)&&(b=Qm(b,s)),S=Gr(S,b,!1,!0))}if(n.dirs&&(S=Gr(S,null,!1,!0),S.dirs=S.dirs?S.dirs.concat(n.dirs):n.dirs),n.transition){const M=pa(S.type)&&Yh(S)||S;Xc(M,n.transition)}return m=S,Go(p),m}const Jm=t=>{let e;for(const n in t)(n==="class"||n==="style"||oa(n))&&((e||(e={}))[n]=t[n]);return e},Qm=(t,e)=>{const n={};for(const i in t)(!aa(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function eg(t,e,n){const{props:i,children:r,component:s}=t,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?Uu(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(nd(o,i,h)&&!_a(c,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Uu(i,o,c):!0:!!o;return!1}function Uu(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(nd(e,t,s)&&!_a(n,s))return!0}return!1}function nd(t,e,n){const i=t[n],r=e[n];return n==="style"&&ft(i)&&ft(r)?!Oc(i,r):i!==r}function tg({vnode:t,parent:e,suspense:n},i){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.suspense.vnode.el=r.el=i,t=r),r===t)(t=e.vnode).el=i,e=e.parent;else break}n&&n.activeBranch===t&&(n.vnode.el=i)}const id={},rd=()=>Object.create(id),sd=t=>Object.getPrototypeOf(t)===id;function ng(t,e,n,i=!1){const r={},s=rd();t.propsDefaults=Object.create(null),od(t,e,r,s);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=i?r:lm(r):t.type.props?t.props=r:t.props=s,t.attrs=s}function ig(t,e,n,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=t,a=Ze(r),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(_a(t.emitsOptions,h))continue;const d=e[h];if(l)if(nt(s,h))d!==s[h]&&(s[h]=d,c=!0);else{const v=bn(h);r[v]=Ul(l,a,v,d,t,!1)}else d!==s[h]&&(s[h]=d,c=!0)}}}else{od(t,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!nt(e,f)&&((u=sr(f))===f||!nt(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(r[f]=Ul(l,a,f,void 0,t,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!nt(e,f))&&(delete s[f],c=!0)}c&&ei(t.attrs,"set","")}function od(t,e,n,i){const[r,s]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(us(l))continue;const c=e[l];let u;r&&nt(r,u=bn(l))?!s||!s.includes(u)?n[u]=c:(a||(a={}))[u]=c:_a(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=Ze(n),c=a||ht;for(let u=0;u<s.length;u++){const f=s[u];n[f]=Ul(r,l,f,c[f],t,!nt(c,f))}}return o}function Ul(t,e,n,i,r,s){const o=t[n];if(o!=null){const a=nt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ze(l)){const{propsDefaults:c}=r;if(n in c)i=c[n];else{const u=Is(r);i=c[n]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(n,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===sr(n))&&(i=!0))}return i}const rg=new WeakMap;function ad(t,e,n=!1){const i=n?rg:e.propsCache,r=i.get(t);if(r)return r;const s=t.props,o={},a=[];let l=!1;if(!ze(t)){const u=f=>{l=!0;const[h,d]=ad(f,e,!0);Ut(o,h),d&&a.push(...d)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!l)return ft(t)&&i.set(t,Lr),Lr;if(ke(s))for(let u=0;u<s.length;u++){const f=bn(s[u]);Nu(f)&&(o[f]=ht)}else if(s)for(const u in s){const f=bn(u);if(Nu(f)){const h=s[u],d=o[f]=ke(h)||ze(h)?{type:h}:Ut({},h),v=d.type;let y=!1,p=!0;if(ke(v))for(let m=0;m<v.length;++m){const b=v[m],S=ze(b)&&b.name;if(S==="Boolean"){y=!0;break}else S==="String"&&(p=!1)}else y=ze(v)&&v.name==="Boolean";d[0]=y,d[1]=p,(y||nt(d,"default"))&&a.push(f)}}const c=[o,a];return ft(t)&&i.set(t,c),c}function Nu(t){return t[0]!=="$"&&!us(t)}const Kc=t=>t==="_"||t==="_ctx"||t==="$stable",Yc=t=>ke(t)?t.map(Nn):[Nn(t)],sg=(t,e,n)=>{if(e._n)return e;const i=Mm((...r)=>Yc(e(...r)),n);return i._c=!1,i},ld=(t,e,n)=>{const i=t._ctx;for(const r in t){if(Kc(r))continue;const s=t[r];if(ze(s))e[r]=sg(r,s,i);else if(s!=null){const o=Yc(s);e[r]=()=>o}}},cd=(t,e)=>{const n=Yc(e);t.slots.default=()=>n},ud=(t,e,n)=>{for(const i in e)(n||!Kc(i))&&(t[i]=e[i])},og=(t,e,n)=>{const i=t.slots=rd();if(t.vnode.shapeFlag&32){const r=e._;r?(ud(i,e,n),n&&xh(i,"_",r,!0)):ld(e,i)}else e&&cd(t,e)},ag=(t,e,n)=>{const{vnode:i,slots:r}=t;let s=!0,o=ht;if(i.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:ud(r,e,n):(s=!e.$stable,ld(e,r)),o=e}else e&&(cd(t,e),o={default:1});if(s)for(const a in r)!Kc(a)&&o[a]==null&&delete r[a]},Kt=hg;function lg(t){return cg(t)}function cg(t,e){const n=ua();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:d=kn,insertStaticContent:v}=t,y=(w,_,X,Q=null,J=null,H=null,ce=void 0,te=null,E=!!_.dynamicChildren)=>{if(w===_)return;w&&!Jr(w,_)&&(Q=pe(w),Ge(w,J,H,!0),w=null),_.patchFlag===-2&&(E=!1,_.dynamicChildren=null);const{type:g,ref:D,shapeFlag:U}=_;switch(g){case va:p(w,_,X,Q);break;case ci:m(w,_,X,Q);break;case To:w==null&&b(_,X,Q,ce);break;case bt:$(w,_,X,Q,J,H,ce,te,E);break;default:U&1?P(w,_,X,Q,J,H,ce,te,E):U&6?K(w,_,X,Q,J,H,ce,te,E):(U&64||U&128)&&g.process(w,_,X,Q,J,H,ce,te,E,Ve)}D!=null&&J?ps(D,w&&w.ref,H,_||w,!_):D==null&&w&&w.ref!=null&&ps(w.ref,null,H,w,!0)},p=(w,_,X,Q)=>{if(w==null)i(_.el=a(_.children),X,Q);else{const J=_.el=w.el;_.children!==w.children&&c(J,_.children)}},m=(w,_,X,Q)=>{w==null?i(_.el=l(_.children||""),X,Q):_.el=w.el},b=(w,_,X,Q)=>{[w.el,w.anchor]=v(w.children,_,X,Q,w.el,w.anchor)},S=({el:w,anchor:_},X,Q)=>{let J;for(;w&&w!==_;)J=h(w),i(w,X,Q),w=J;i(_,X,Q)},M=({el:w,anchor:_})=>{let X;for(;w&&w!==_;)X=h(w),r(w),w=X;r(_)},P=(w,_,X,Q,J,H,ce,te,E)=>{if(_.type==="svg"?ce="svg":_.type==="math"&&(ce="mathml"),w==null)C(_,X,Q,J,H,ce,te,E);else{const g=w.el&&w.el._isVueCE?w.el:null;try{g&&g._beginPatch(),j(w,_,J,H,ce,te,E)}finally{g&&g._endPatch()}}},C=(w,_,X,Q,J,H,ce,te)=>{let E,g;const{props:D,shapeFlag:U,transition:G,dirs:B}=w;if(E=w.el=o(w.type,H,D&&D.is,D),U&8?u(E,w.children):U&16&&L(w.children,E,null,Q,J,Fa(w,H),ce,te),B&&Oi(w,null,Q,"created"),R(E,w,w.scopeId,ce,Q),D){for(const ue in D)ue!=="value"&&!us(ue)&&s(E,ue,null,D[ue],H,Q);"value"in D&&s(E,"value",null,D.value,H),(g=D.onVnodeBeforeMount)&&Pn(g,Q,w)}B&&Oi(w,null,Q,"beforeMount");const he=ug(J,G);he&&G.beforeEnter(E),i(E,_,X),((g=D&&D.onVnodeMounted)||he||B)&&Kt(()=>{try{g&&Pn(g,Q,w),he&&G.enter(E),B&&Oi(w,null,Q,"mounted")}finally{}},J)},R=(w,_,X,Q,J)=>{if(X&&d(w,X),Q)for(let H=0;H<Q.length;H++)d(w,Q[H]);if(J){let H=J.subTree;if(_===H||pd(H.type)&&(H.ssContent===_||H.ssFallback===_)){const ce=J.vnode;R(w,ce,ce.scopeId,ce.slotScopeIds,J.parent)}}},L=(w,_,X,Q,J,H,ce,te,E=0)=>{for(let g=E;g<w.length;g++){const D=w[g]=te?Qn(w[g]):Nn(w[g]);y(null,D,_,X,Q,J,H,ce,te)}},j=(w,_,X,Q,J,H,ce)=>{const te=_.el=w.el;let{patchFlag:E,dynamicChildren:g,dirs:D}=_;E|=w.patchFlag&16;const U=w.props||ht,G=_.props||ht;let B;if(X&&Fi(X,!1),(B=G.onVnodeBeforeUpdate)&&Pn(B,X,_,w),D&&Oi(_,w,X,"beforeUpdate"),X&&Fi(X,!0),g&&(!w.dynamicChildren||w.dynamicChildren.length!==g.length)&&(E=0,ce=!1,g=null),(U.innerHTML&&G.innerHTML==null||U.textContent&&G.textContent==null)&&u(te,""),g?x(w.dynamicChildren,g,te,X,Q,Fa(_,J),H):ce||k(w,_,te,null,X,Q,Fa(_,J),H,!1),E>0){if(E&16)T(te,U,G,X,J);else if(E&2&&U.class!==G.class&&s(te,"class",null,G.class,J),E&4&&s(te,"style",U.style,G.style,J),E&8){const he=_.dynamicProps;for(let ue=0;ue<he.length;ue++){const fe=he[ue],De=U[fe],le=G[fe];(le!==De||fe==="value")&&s(te,fe,De,le,J,X)}}E&1&&w.children!==_.children&&u(te,_.children)}else!ce&&g==null&&T(te,U,G,X,J);((B=G.onVnodeUpdated)||D)&&Kt(()=>{B&&Pn(B,X,_,w),D&&Oi(_,w,X,"updated")},Q)},x=(w,_,X,Q,J,H,ce)=>{for(let te=0;te<_.length;te++){const E=w[te],g=_[te],D=E.el&&(E.type===bt||!Jr(E,g)||E.shapeFlag&198)?f(E.el):X;y(E,g,D,null,Q,J,H,ce,!0)}},T=(w,_,X,Q,J)=>{if(_!==X){if(_!==ht)for(const H in _)!us(H)&&!(H in X)&&s(w,H,_[H],null,J,Q);for(const H in X){if(us(H))continue;const ce=X[H],te=_[H];ce!==te&&H!=="value"&&s(w,H,te,ce,J,Q)}"value"in X&&s(w,"value",_.value,X.value,J)}},$=(w,_,X,Q,J,H,ce,te,E)=>{const g=_.el=w?w.el:a(""),D=_.anchor=w?w.anchor:a("");let{patchFlag:U,dynamicChildren:G,slotScopeIds:B}=_;B&&(te=te?te.concat(B):B),w==null?(i(g,X,Q),i(D,X,Q),L(_.children||[],X,D,J,H,ce,te,E)):U>0&&U&64&&G&&w.dynamicChildren&&w.dynamicChildren.length===G.length?(x(w.dynamicChildren,G,X,J,H,ce,te),(_.key!=null||J&&_===J.subTree)&&fd(w,_,!0)):k(w,_,X,D,J,H,ce,te,E)},K=(w,_,X,Q,J,H,ce,te,E)=>{_.slotScopeIds=te,w==null?_.shapeFlag&512?J.ctx.activate(_,X,Q,ce,E):Z(_,X,Q,J,H,ce,E):oe(w,_,E)},Z=(w,_,X,Q,J,H,ce)=>{const te=w.component=vg(w,Q,J);if(qc(w)&&(te.ctx.renderer=Ve),xg(te,!1,ce),te.asyncDep){if(J&&J.registerDep(te,z,ce),!w.el){const E=te.subTree=jt(ci);m(null,E,_,X),w.placeholder=E.el}}else z(te,w,_,X,J,H,ce)},oe=(w,_,X)=>{const Q=_.component=w.component;if(eg(w,_,X))if(Q.asyncDep&&!Q.asyncResolved){Y(Q,_,X);return}else Q.next=_,Q.update();else _.el=w.el,Q.vnode=_},z=(w,_,X,Q,J,H,ce)=>{const te=()=>{if(w.isMounted){let{next:U,bu:G,u:B,parent:he,vnode:ue}=w;{const Re=hd(w);if(Re){U&&(U.el=ue.el,Y(w,U,ce)),Re.asyncDep.then(()=>{Kt(()=>{w.isUnmounted||g()},J)});return}}let fe=U,De;Fi(w,!1),U?(U.el=ue.el,Y(w,U,ce)):U=ue,G&&Eo(G),(De=U.props&&U.props.onVnodeBeforeUpdate)&&Pn(De,he,U,ue),Fi(w,!0);const le=Iu(w),_e=w.subTree;w.subTree=le,y(_e,le,f(_e.el),pe(_e),w,J,H),U.el=le.el,fe===null&&tg(w,le.el),B&&Kt(B,J),(De=U.props&&U.props.onVnodeUpdated)&&Kt(()=>Pn(De,he,U,ue),J)}else{let U;const{el:G,props:B}=_,{bm:he,m:ue,parent:fe,root:De,type:le}=w,_e=ms(_);Fi(w,!1),he&&Eo(he),!_e&&(U=B&&B.onVnodeBeforeMount)&&Pn(U,fe,_),Fi(w,!0);{De.ce&&De.ce._hasShadowRoot()&&De.ce._injectChildStyle(le,w.parent?w.parent.type:void 0);const Re=w.subTree=Iu(w);y(null,Re,X,Q,w,J,H),_.el=Re.el}if(ue&&Kt(ue,J),!_e&&(U=B&&B.onVnodeMounted)){const Re=_;Kt(()=>Pn(U,fe,Re),J)}(_.shapeFlag&256||fe&&ms(fe.vnode)&&fe.vnode.shapeFlag&256)&&w.a&&Kt(w.a,J),w.isMounted=!0,_=X=Q=null}};w.scope.on();const E=w.effect=new Ah(te);w.scope.off();const g=w.update=E.run.bind(E),D=w.job=E.runIfDirty.bind(E);D.i=w,D.id=w.uid,E.scheduler=()=>Wc(D),Fi(w,!0),g()},Y=(w,_,X)=>{_.component=w;const Q=w.vnode.props;w.vnode=_,w.next=null,ig(w,_.props,Q,X),ag(w,_.children,X),oi(),bu(w),ai()},k=(w,_,X,Q,J,H,ce,te,E=!1)=>{const g=w&&w.children,D=w?w.shapeFlag:0,U=_.children,{patchFlag:G,shapeFlag:B}=_;if(G>0){if(G&128){ve(g,U,X,Q,J,H,ce,te,E);return}else if(G&256){ge(g,U,X,Q,J,H,ce,te,E);return}}B&8?(D&16&&se(g,J,H),U!==g&&u(X,U)):D&16?B&16?ve(g,U,X,Q,J,H,ce,te,E):se(g,J,H,!0):(D&8&&u(X,""),B&16&&L(U,X,Q,J,H,ce,te,E))},ge=(w,_,X,Q,J,H,ce,te,E)=>{w=w||Lr,_=_||Lr;const g=w.length,D=_.length,U=Math.min(g,D);let G;for(G=0;G<U;G++){const B=_[G]=E?Qn(_[G]):Nn(_[G]);y(w[G],B,X,null,J,H,ce,te,E)}g>D?se(w,J,H,!0,!1,U):L(_,X,Q,J,H,ce,te,E,U)},ve=(w,_,X,Q,J,H,ce,te,E)=>{let g=0;const D=_.length;let U=w.length-1,G=D-1;for(;g<=U&&g<=G;){const B=w[g],he=_[g]=E?Qn(_[g]):Nn(_[g]);if(Jr(B,he))y(B,he,X,null,J,H,ce,te,E);else break;g++}for(;g<=U&&g<=G;){const B=w[U],he=_[G]=E?Qn(_[G]):Nn(_[G]);if(Jr(B,he))y(B,he,X,null,J,H,ce,te,E);else break;U--,G--}if(g>U){if(g<=G){const B=G+1,he=B<D?_[B].el:Q;for(;g<=G;)y(null,_[g]=E?Qn(_[g]):Nn(_[g]),X,he,J,H,ce,te,E),g++}}else if(g>G)for(;g<=U;)Ge(w[g],J,H,!0),g++;else{const B=g,he=g,ue=new Map;for(g=he;g<=G;g++){const Fe=_[g]=E?Qn(_[g]):Nn(_[g]);Fe.key!=null&&ue.set(Fe.key,g)}let fe,De=0;const le=G-he+1;let _e=!1,Re=0;const Ne=new Array(le);for(g=0;g<le;g++)Ne[g]=0;for(g=B;g<=U;g++){const Fe=w[g];if(De>=le){Ge(Fe,J,H,!0);continue}let Ie;if(Fe.key!=null)Ie=ue.get(Fe.key);else for(fe=he;fe<=G;fe++)if(Ne[fe-he]===0&&Jr(Fe,_[fe])){Ie=fe;break}Ie===void 0?Ge(Fe,J,H,!0):(Ne[Ie-he]=g+1,Ie>=Re?Re=Ie:_e=!0,y(Fe,_[Ie],X,null,J,H,ce,te,E),De++)}const Te=_e?fg(Ne):Lr;for(fe=Te.length-1,g=le-1;g>=0;g--){const Fe=he+g,Ie=_[Fe],st=_[Fe+1],I=Fe+1<D?st.el||dd(st):Q;Ne[g]===0?y(null,Ie,X,I,J,H,ce,te,E):_e&&(fe<0||g!==Te[fe]?Se(Ie,X,I,2):fe--)}}},Se=(w,_,X,Q,J=null)=>{const{el:H,type:ce,transition:te,children:E,shapeFlag:g}=w;if(g&6){Se(w.component.subTree,_,X,Q);return}if(g&128){w.suspense.move(_,X,Q);return}if(g&64){ce.move(w,_,X,Ve);return}if(ce===bt){i(H,_,X);for(let U=0;U<E.length;U++)Se(E[U],_,X,Q);i(w.anchor,_,X);return}if(ce===To){S(w,_,X);return}if(Q!==2&&g&1&&te)if(Q===0)te.persisted&&!H[Na]?i(H,_,X):(te.beforeEnter(H),i(H,_,X),Kt(()=>te.enter(H),J));else{const{leave:U,delayLeave:G,afterLeave:B}=te,he=()=>{w.ctx.isUnmounted?r(H):i(H,_,X)},ue=()=>{const fe=H._isLeaving||!!H[Na];H._isLeaving&&H[Na](!0),te.persisted&&!fe?he():U(H,()=>{he(),B&&B()})};G?G(H,he,ue):ue()}else i(H,_,X)},Ge=(w,_,X,Q=!1,J=!1)=>{const{type:H,props:ce,ref:te,children:E,dynamicChildren:g,shapeFlag:D,patchFlag:U,dirs:G,cacheIndex:B,memo:he}=w;if(U===-2&&(J=!1),te!=null&&(oi(),ps(te,null,X,w,!0),ai()),B!=null&&(_.renderCache[B]=void 0),D&256){_.ctx.deactivate(w);return}const ue=D&1&&G,fe=!ms(w);let De;if(fe&&(De=ce&&ce.onVnodeBeforeUnmount)&&Pn(De,_,w),D&6)V(w.component,X,Q);else{if(D&128){w.suspense.unmount(X,Q);return}ue&&Oi(w,null,_,"beforeUnmount"),D&64?w.type.remove(w,_,X,Ve,Q):g&&!g.hasOnce&&(H!==bt||U>0&&U&64)?se(g,_,X,!1,!0):(H===bt&&U&384||!J&&D&16)&&se(E,_,X),Q&&$e(w)}const le=he!=null&&B==null;(fe&&(De=ce&&ce.onVnodeUnmounted)||ue||le)&&Kt(()=>{De&&Pn(De,_,w),ue&&Oi(w,null,_,"unmounted"),le&&(w.el=null)},X)},$e=w=>{const{type:_,el:X,anchor:Q,transition:J}=w;if(_===bt){ie(X,Q);return}if(_===To){M(w);return}const H=()=>{r(X),J&&!J.persisted&&J.afterLeave&&J.afterLeave()};if(w.shapeFlag&1&&J&&!J.persisted){const{leave:ce,delayLeave:te}=J,E=()=>ce(X,H);te?te(w.el,H,E):E()}else H()},ie=(w,_)=>{let X;for(;w!==_;)X=h(w),r(w),w=X;r(_)},V=(w,_,X)=>{const{bum:Q,scope:J,job:H,subTree:ce,um:te,m:E,a:g}=w;Ou(E),Ou(g),Q&&Eo(Q),J.stop(),H&&(H.flags|=8,Ge(ce,w,_,X)),te&&Kt(te,_),Kt(()=>{w.isUnmounted=!0},_)},se=(w,_,X,Q=!1,J=!1,H=0)=>{for(let ce=H;ce<w.length;ce++)Ge(w[ce],_,X,Q,J)},pe=w=>{if(w.shapeFlag&6)return pe(w.component.subTree);if(w.shapeFlag&128)return w.suspense.next();const _=h(w.anchor||w.el),X=_&&_[Rm];return X?h(X):_};let Oe=!1;const Ue=(w,_,X)=>{let Q;w==null?_._vnode&&(Ge(_._vnode,null,null,!0),Q=_._vnode.component):y(_._vnode||null,w,_,null,null,null,X),_._vnode=w,Oe||(Oe=!0,bu(Q),Wh(),Oe=!1)},Ve={p:y,um:Ge,m:Se,r:$e,mt:Z,mc:L,pc:k,pbc:x,n:pe,o:t};return{render:Ue,hydrate:void 0,createApp:Km(Ue)}}function Fa({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Fi({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function ug(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function fd(t,e,n=!1){const i=t.children,r=e.children;if(ke(i)&&ke(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Qn(r[s]),a.el=o.el),!n&&a.patchFlag!==-2&&fd(o,a)),a.type===va&&(a.patchFlag===-1&&(a=r[s]=Qn(a)),a.el=o.el),a.type===ci&&!a.el&&(a.el=o.el)}}function fg(t){const e=t.slice(),n=[0];let i,r,s,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(r=n[n.length-1],t[r]<c){e[i]=r,n.push(i);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[i]=n[s-1]),n[s]=i)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}function hd(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:hd(e)}function Ou(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function dd(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?dd(e.subTree):null}const pd=t=>t.__isSuspense;function hg(t,e){e&&e.pendingBranch?ke(t)?e.effects.push(...t):e.effects.push(t):Sm(t)}const bt=Symbol.for("v-fgt"),va=Symbol.for("v-txt"),ci=Symbol.for("v-cmt"),To=Symbol.for("v-stc"),er=[];let sn=null;function we(t=!1){er.push(sn=t?null:[])}function md(){er.pop(),sn=er[er.length-1]||null}let Ms=1;function Fu(t,e=!1){Ms+=t,t<0&&sn&&e&&(sn.hasOnce=!0)}function gd(t){return t.dynamicChildren=Ms>0?sn||Lr:null,md(),Ms>0&&sn&&sn.push(t),t}function Le(t,e,n,i,r,s){return gd(ne(t,e,n,i,r,s,!0))}function Nl(t,e,n,i,r){return gd(jt(t,e,n,i,r,!0))}function _d(t){return t?t.__v_isVNode===!0:!1}function Jr(t,e){return t.type===e.type&&t.key===e.key}const vd=({key:t})=>t??null,bo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?vt(t)||xt(t)||ze(t)?{i:dn,r:t,k:e,f:!!n}:t:null);function ne(t,e=null,n=null,i=0,r=null,s=t===bt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&vd(e),ref:e&&bo(e),scopeId:qh,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:dn};return a?(Xo(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=vt(n)?8:16),Ms>0&&!o&&sn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&sn.push(l),l}const jt=dg;function dg(t,e=null,n=null,i=0,r=null,s=!1){if((!t||t===Hm)&&(t=ci),_d(t)){const a=Gr(t,e,!0);return n&&Xo(a,n),Ms>0&&!s&&sn&&(a.shapeFlag&6?sn[sn.indexOf(t)]=a:sn.push(a)),a.patchFlag=-2,a}if(Eg(t)&&(t=t.__vccOpts),e){e=pg(e);let{class:a,style:l}=e;a&&!vt(a)&&(e.class=Tt(a)),ft(l)&&(ha(l)&&!ke(l)&&(l=Ut({},l)),e.style=Qe(l))}const o=vt(t)?1:pd(t)?128:pa(t)?64:ft(t)?4:ze(t)?2:0;return ne(t,e,n,i,r,o,s,!0)}function pg(t){return t?ha(t)||sd(t)?Ut({},t):t:null}function Gr(t,e,n=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=t,c=e?mg(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&vd(c),ref:e&&e.ref?n&&s?ke(s)?s.concat(bo(e)):[s,bo(e)]:bo(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==bt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Gr(t.ssContent),ssFallback:t.ssFallback&&Gr(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&i&&Xc(u,l.clone(u)),u}function Wo(t=" ",e=0){return jt(va,null,t,e)}function Ol(t,e){const n=jt(To,null,t);return n.staticCount=e,n}function at(t="",e=!1){return e?(we(),Nl(ci,null,t)):jt(ci,null,t)}function Nn(t){return t==null||typeof t=="boolean"?jt(ci):ke(t)?jt(bt,null,t.slice()):_d(t)?Qn(t):jt(va,null,String(t))}function Qn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Gr(t)}function Xo(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(ke(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Xo(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!sd(e)?e._ctx=dn:r===3&&dn&&(dn.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else if(ze(e)){if(i&65){Xo(t,{default:e});return}e={default:e,_ctx:dn},n=32}else e=String(e),i&64?(n=16,e=[Wo(e)]):n=8;t.children=e,t.shapeFlag|=n}function mg(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Tt([e.class,i.class]));else if(r==="style")e.style=Qe([e.style,i.style]);else if(oa(r)){const s=e[r],o=i[r];o&&s!==o&&!(ke(s)&&s.includes(o))?e[r]=s?[].concat(s,o):o:o==null&&s==null&&!aa(r)&&(e[r]=o)}else r!==""&&(e[r]=i[r])}return e}function Pn(t,e,n,i=null){Rn(t,e,7,[n,i])}const gg=ed();let _g=0;function vg(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||gg,s={uid:_g++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Eh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ad(i,r),emitsOptions:td(i,r),emit:null,emitted:null,propsDefaults:ht,inheritAttrs:i.inheritAttrs,ctx:ht,data:ht,props:ht,attrs:ht,slots:ht,refs:ht,setupState:ht,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=jm.bind(null,s),t.ce&&t.ce(s),s}let Wt=null;const xd=()=>Wt||dn;let qo,Es;{const t=ua(),e=(n,i)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};qo=e("__VUE_INSTANCE_SETTERS__",n=>Wt=n),Es=e("__VUE_SSR_SETTERS__",n=>Ts=n)}const Is=t=>{const e=Wt;return qo(t),t.scope.on(),()=>{t.scope.off(),qo(e)}},Bu=()=>{Wt&&Wt.scope.off(),qo(null)};function yd(t){return t.vnode.shapeFlag&4}let Ts=!1;function xg(t,e=!1,n=!1){e&&Es(e);const{props:i,children:r}=t.vnode,s=yd(t);ng(t,i,s,e),og(t,r,n||e);const o=s?yg(t,e):void 0;return e&&Es(!1),o}function yg(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Gm);const{setup:i}=n;if(i){oi();const r=t.setupContext=i.length>1?Mg(t):null,s=Is(t),o=Ls(i,t,0,[t.props,r]),a=mh(o);if(ai(),s(),(a||t.sp)&&!ms(t)&&jh(t),a){if(o.then(Bu,Bu),e)return o.then(l=>{Es(!0);try{ku(t,l,e)}finally{Es(!1)}}).catch(l=>{da(l,t,0)});t.asyncDep=o}else ku(t,o)}else Sd(t)}function ku(t,e,n){ze(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ft(e)&&(t.setupState=Hh(e)),Sd(t)}function Sd(t,e,n){const i=t.type;t.render||(t.render=i.render||kn);{const r=Is(t);oi();try{zm(t)}finally{ai(),r()}}}const Sg={get(t,e){return Ft(t,"get",""),t[e]}};function Mg(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Sg),slots:t.slots,emit:t.emit,expose:e}}function xa(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Hh(Vc(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in gs)return gs[n](t)},has(e,n){return n in e||n in gs}})):t.proxy}function Eg(t){return ze(t)&&"__vccOpts"in t}const lt=(t,e)=>gm(t,e,Ts),Tg="3.5.41";/**
* @vue/runtime-dom v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Fl;const Hu=typeof window<"u"&&window.trustedTypes;if(Hu)try{Fl=Hu.createPolicy("vue",{createHTML:t=>t})}catch{}const Md=Fl?t=>Fl.createHTML(t):t=>t,bg="http://www.w3.org/2000/svg",Ag="http://www.w3.org/1998/Math/MathML",Jn=typeof document<"u"?document:null,Gu=Jn&&Jn.createElement("template"),wg={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e==="svg"?Jn.createElementNS(bg,t):e==="mathml"?Jn.createElementNS(Ag,t):n?Jn.createElement(t,{is:n}):Jn.createElement(t);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>Jn.createTextNode(t),createComment:t=>Jn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Jn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,s){const o=n?n.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{Gu.innerHTML=Md(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const a=Gu.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Rg=Symbol("_vtc");function Cg(t,e,n){const i=t[Rg];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const zu=Symbol("_vod"),Pg=Symbol("_vsh"),Lg=Symbol(""),Dg=/(?:^|;)\s*display\s*:/;function Ig(t,e,n){const i=t.style,r=vt(n);let s=!1;if(n&&!r){if(e)if(vt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&as(i,a,"")}else for(const o in e)n[o]==null&&as(i,o,"");for(const o in n){o==="display"&&(s=!0);const a=n[o];a!=null?Ng(t,o,!vt(e)&&e?e[o]:void 0,a)||as(i,o,a):as(i,o,"")}}else if(r){if(e!==n){const o=i[Lg];o&&(n+=";"+o),i.cssText=n,s=Dg.test(n)}}else e&&t.removeAttribute("style");zu in t&&(t[zu]=s?i.display:"",t[Pg]&&(i.display="none"))}const Vu=/\s*!important$/;function as(t,e,n){if(ke(n))n.forEach(i=>as(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=Ug(t,e);Vu.test(n)?t.setProperty(sr(i),n.replace(Vu,""),"important"):t[i]=n}}const Wu=["Webkit","Moz","ms"],Ba={};function Ug(t,e){const n=Ba[e];if(n)return n;let i=bn(e);if(i!=="filter"&&i in t)return Ba[e]=i;i=vh(i);for(let r=0;r<Wu.length;r++){const s=Wu[r]+i;if(s in t)return Ba[e]=s}return e}function Ng(t,e,n,i){return t.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&vt(i)&&n===i}const Xu="http://www.w3.org/1999/xlink";function qu(t,e,n,i,r,s=Gp(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Xu,e.slice(6,e.length)):t.setAttributeNS(Xu,e,n):n==null||s&&!yh(n)?t.removeAttribute(e):t.setAttribute(e,s?"":mn(n)?String(n):n)}function $u(t,e,n,i,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Md(n):n);return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=yh(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(r||e)}function Ar(t,e,n,i){t.addEventListener(e,n,i)}function Og(t,e,n,i){t.removeEventListener(e,n,i)}const Ku=Symbol("_vei");function Fg(t,e,n,i,r=null){const s=t[Ku]||(t[Ku]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=Hg(e);if(i){const c=s[e]=Vg(i,r);Ar(t,a,c,l)}else o&&(Og(t,a,o,l),s[e]=void 0)}}const Bg=/(Once|Passive|Capture)$/,kg=/^on:?(?:Once|Passive|Capture)$/;function Hg(t){let e,n;for(;(n=t.match(Bg))&&!kg.test(t);)e||(e={}),t=t.slice(0,t.length-n[1].length),e[n[1].toLowerCase()]=!0;return[t[2]===":"?t.slice(3):sr(t.slice(2)),e]}let ka=0;const Gg=Promise.resolve(),zg=()=>ka||(Gg.then(()=>ka=0),ka=Date.now());function Vg(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;const r=n.value;if(ke(r)){const s=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{s.call(i),i._stopped=!0};const o=r.slice(),a=[i];for(let l=0;l<o.length&&!i._stopped;l++){const c=o[l];c&&Rn(c,e,5,a)}}else Rn(r,e,5,[i])};return n.value=t,n.attached=zg(),n}const Yu=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Wg=(t,e,n,i,r,s)=>{const o=r==="svg";e==="class"?Cg(t,i,o):e==="style"?Ig(t,n,i):oa(e)?aa(e)||Fg(t,e,n,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Xg(t,e,i,o))?($u(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&qu(t,e,i,o,s,e!=="value")):t._isVueCE&&(qg(t,e)||t._def.__asyncLoader&&(/[A-Z]/.test(e)||!vt(i)))?$u(t,bn(e),i,s,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),qu(t,e,i,o))};function Xg(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&Yu(e)&&ze(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Yu(e)&&vt(n)?!1:e in t}function qg(t,e){const n=t._def.props;if(!n)return!1;const i=bn(e);return Array.isArray(n)?n.some(r=>bn(r)===i):Object.keys(n).some(r=>bn(r)===i)}const ju=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ke(e)?n=>Eo(e,n):e};function $g(t){t.target.composing=!0}function Zu(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ys=Symbol("_assign"),js=Symbol("_initialValue");function Ha(t,e,n){return e&&(t=t.trim()),n&&(t=Nc(t)),t}const Ju={created(t,{modifiers:{lazy:e,trim:n,number:i}},r){t.parentNode&&(t.type==="text"?t[js]=t.defaultValue.replace(/[\r\n]/g,""):t.type==="textarea"&&(t[js]=t.defaultValue.replace(/\r\n?/g,`
`))),t[Ys]=ju(r);const s=i||r.props&&r.props.type==="number";Ar(t,e?"change":"input",o=>{o.target.composing||t[Ys](Ha(t.value,n,s))}),(n||s)&&Ar(t,"change",()=>{t.value=Ha(t.value,n,s)}),e||(Ar(t,"compositionstart",$g),Ar(t,"compositionend",Zu),Ar(t,"change",Zu))},mounted(t,{value:e,modifiers:{trim:n,number:i}}){const r=e??"",s=t[js];delete t[js],s!==void 0&&(t.type==="text"||t.type==="textarea")&&t.value!==s?t[Ys](Ha(t.value,n,i)):t.value=r},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:i,trim:r,number:s}},o){if(t[Ys]=ju(o),t.composing)return;const a=(s||t.type==="number")&&!/^0\d/.test(t.value)?Nc(t.value):t.value,l=e??"";if(a===l)return;const c=t.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===t&&t.type!=="range"&&(i&&e===n||r&&t.value.trim()===l)||(t.value=l)}},Kg=["ctrl","shift","alt","meta"],Yg={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Kg.some(n=>t[`${n}Key`]&&!e.includes(n))},ls=(t,e)=>{if(!t)return t;const n=t._withMods||(t._withMods={}),i=e.join(".");return n[i]||(n[i]=((r,...s)=>{for(let o=0;o<e.length;o++){const a=Yg[e[o]];if(a&&a(r,e))return}return t(r,...s)}))},jg=Ut({patchProp:Wg},wg);let Qu;function Zg(){return Qu||(Qu=lg(jg))}const Jg=((...t)=>{const e=Zg().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=e_(i);if(!r)return;const s=e._component;!ze(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,Qg(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e});function Qg(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function e_(t){return vt(t)?document.querySelector(t):t}/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Ed;const ya=t=>Ed=t,Td=Symbol();function Bl(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var _s;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(_s||(_s={}));function t_(){const t=Th(!0),e=t.run(()=>an({}));let n=[],i=[];const r=Vc({install(s){ya(r),r._a=s,s.provide(Td,r),s.config.globalProperties.$pinia=r,i.forEach(o=>n.push(o)),i=[]},use(s){return this._a?n.push(s):i.push(s),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}const bd=()=>{};function ef(t,e,n,i=bd){t.push(e);const r=()=>{const s=t.indexOf(e);s>-1&&(t.splice(s,1),i())};return!n&&bh()&&Vp(r),r}function cr(t,...e){t.slice().forEach(n=>{n(...e)})}const n_=t=>t(),tf=Symbol(),Ga=Symbol();function kl(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,i)=>t.set(i,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const i=e[n],r=t[n];Bl(r)&&Bl(i)&&t.hasOwnProperty(n)&&!xt(i)&&!si(i)?t[n]=kl(r,i):t[n]=i}return t}const i_=Symbol();function r_(t){return!Bl(t)||!t.hasOwnProperty(i_)}const{assign:Si}=Object;function s_(t){return!!(xt(t)&&t.effect)}function o_(t,e,n,i){const{state:r,actions:s,getters:o}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=r?r():{});const u=hm(n.state.value[t]);return Si(u,s,Object.keys(o||{}).reduce((f,h)=>(f[h]=Vc(lt(()=>{ya(n);const d=n._s.get(t);return o[h].call(d,d)})),f),{}))}return l=Ad(t,c,e,n,i,!0),l}function Ad(t,e,n={},i,r,s){let o;const a=Si({actions:{}},n),l={deep:!0};let c,u,f=[],h=[],d;const v=i.state.value[t];!s&&!v&&(i.state.value[t]={});let y;function p(L){let j;c=u=!1,typeof L=="function"?(L(i.state.value[t]),j={type:_s.patchFunction,storeId:t,events:d}):(kl(i.state.value[t],L),j={type:_s.patchObject,payload:L,storeId:t,events:d});const x=y=Symbol();zh().then(()=>{y===x&&(c=!0)}),u=!0,cr(f,j,i.state.value[t])}const m=s?function(){const{state:j}=n,x=j?j():{};this.$patch(T=>{Si(T,x)})}:bd;function b(){o.stop(),f=[],h=[],i._s.delete(t)}const S=(L,j="")=>{if(tf in L)return L[Ga]=j,L;const x=function(){ya(i);const T=Array.from(arguments),$=[],K=[];function Z(Y){$.push(Y)}function oe(Y){K.push(Y)}cr(h,{args:T,name:x[Ga],store:P,after:Z,onError:oe});let z;try{z=L.apply(this&&this.$id===t?this:P,T)}catch(Y){throw cr(K,Y),Y}return z instanceof Promise?z.then(Y=>(cr($,Y),Y)).catch(Y=>(cr(K,Y),Promise.reject(Y))):(cr($,z),z)};return x[tf]=!0,x[Ga]=j,x},M={_p:i,$id:t,$onAction:ef.bind(null,h),$patch:p,$reset:m,$subscribe(L,j={}){const x=ef(f,L,j.detached,()=>T()),T=o.run(()=>Ur(()=>i.state.value[t],$=>{(j.flush==="sync"?u:c)&&L({storeId:t,type:_s.direct,events:d},$)},Si({},l,j)));return x},$dispose:b},P=Ps(M);i._s.set(t,P);const R=(i._a&&i._a.runWithContext||n_)(()=>i._e.run(()=>(o=Th()).run(()=>e({action:S}))));for(const L in R){const j=R[L];if(xt(j)&&!s_(j)||si(j))s||(v&&r_(j)&&(xt(j)?j.value=v[L]:kl(j,v[L])),i.state.value[t][L]=j);else if(typeof j=="function"){const x=S(j,L);R[L]=x,a.actions[L]=j}}return Si(P,R),Si(Ze(P),R),Object.defineProperty(P,"$state",{get:()=>i.state.value[t],set:L=>{p(j=>{Si(j,L)})}}),i._p.forEach(L=>{Si(P,o.run(()=>L({store:P,app:i._a,pinia:i,options:a})))}),v&&s&&n.hydrate&&n.hydrate(P.$state,v),c=!0,u=!0,P}/*! #__NO_SIDE_EFFECTS__ */function a_(t,e,n){let i,r;const s=typeof e=="function";i=t,r=s?n:e;function o(a,l){const c=Tm();return a=a||(c?ds(Td,null):null),a&&ya(a),a=Ed,a._s.has(i)||(s?Ad(i,e,r,a):o_(i,r,a)),a._s.get(i)}return o.$id=i,o}const l_={0:1,20:.88,50:.74,75:.58};function hn(t){const e=t.maxHealth>0?t.health/t.maxHealth:0;return e<=.25?75:e<=.5?50:e<=.8?20:0}function $o(t){return l_[hn(t)]}function Us(t){return t===75?1:t===50?.68:t===20?.32:0}function c_(t){return t===75?{interval:.36,amount:3.8}:t===50?{interval:.82,amount:2.55}:t===20?{interval:1.7,amount:1.6}:null}const wr={asset:"turtle-shell-finisher.png",columns:4,rows:4,width:54,duration:3.85,captureAt:.9,impactAt:2.4,frames:[{at:0,label:"WRIST CATCH"},{at:.16,label:"CAUGHT!"},{at:.32,label:"PULL IN"},{at:.5,label:"SHELL TURN"},{at:.7,label:"TRAPPED"},{at:.9,label:"SHELL GRIP!"},{at:1.15,label:"RETRACT"},{at:1.38,label:"LIFT"},{at:1.65,label:"BRACE YOURSELF"},{at:2.1,label:"DOWNWARD SLAM"},{at:2.4,label:"SHELL SHOCK!"},{at:2.58,label:"CRUSHED"},{at:2.82,label:"RELEASE"},{at:3.04,label:"COLLAPSE"},{at:3.26,label:"SILENCE"},{at:3.5,label:"FINISHED"}],exit:{player:.34,opponent:.73}};function Sa(t,e=wr.frames.map(n=>n.at)){return t.map((n,i)=>({at:e[i],label:n}))}const Ao={asset:"wormy-finisher-retro.png",columns:4,rows:4,width:56,duration:3.85,captureAt:.9,impactAt:2.1,description:"Wormy coils around the player, fires green lightning from his eyes, then uncoils as the player collapses",frames:Sa(["TAIL SNARE","ANKLE LOCK","NO ESCAPE","COILING","TRAPPED","COIL CRUSH!","INCOHERENT RANT","EYES IGNITE","THEY ARE WATCHING","CONSPIRACY SHOCK!","EYE LIGHTNING","OVERLOAD","UNCOIL","COLLAPSE","SILENCE","FINISHED"]),exit:{player:.36,opponent:.74},contact:{capture:{x:.31,y:38},impact:{x:.3,y:40}}},wo={asset:"baxter-finisher.png",columns:4,rows:4,width:54,duration:3.85,captureAt:.9,impactAt:2.1,description:"Baxter grabs the player by the collar, jabs him with a bottle and delivers an overhead bottle strike before releasing him",frames:Sa(["COLLAR GRAB","CAUGHT!","PULL IN","STRUGGLE","BAD BUSINESS","BOTTLE JAB!","WINDED","DRUNKEN STAGGER","LAST ORDERS","LAST CALL!","BOTTLE IMPACT","FOLLOW THROUGH","RELEASE","COLLAPSE","STEADY NOW","BOARDROOM TEARS"]),exit:{player:.32,opponent:.71},contact:{capture:{x:.35,y:36},impact:{x:.31,y:48}}},Hl={asset:"witch-finisher.png",columns:4,rows:4,width:54,duration:3.85,captureAt:.9,impactAt:2.4,description:"The Shadow Witch vanishes, materializes next to the player, catches his chin and slaps him before teleporting away",frames:Sa(["INTO SHADOW","VANISH","THE RIFT","MATERIALIZE","CHIN CATCH","FROZEN","DRAW BACK","BRACE YOURSELF","THE WIND-UP","PALM SWING","SHADOW SLAP!","REELING","DISSOLVE","COLLAPSE","GONE","RETURN FROM SHADOW"]),exit:{player:.34,opponent:.78},contact:{capture:{x:.35,y:47},impact:{x:.32,y:49}}},Gl={asset:"giant-finisher.png",columns:4,rows:4,width:90,duration:3.85,captureAt:.9,impactAt:2.1,nonGraphic:!0,description:"Enormous monster feet surround the player before a sagging diaper drops, hides him, then releases him onto the floor",frames:Sa(["HUGE FOOTSTEPS","BOXED IN","OFF BALANCE","NOWHERE TO GO","KNEES BEND","BRACE!","LOOK OUT BELOW","THE BIG DROP","DESCENDING","DIAPER DISASTER!","GROUND SHAKES","SIT TIGHT","LIFT OFF","SLIDE OUT","FLAT OUT","FINISHED"]),exit:{player:.3,opponent:.6},contact:{capture:{x:.46,y:25},impact:{x:.44,y:12}}},zr={brutus:wr,wormy:Ao,baxter:wo,witch:Hl,giant:Gl};function u_(t,e){let n=0;for(let i=1;i<t.frames.length&&!(e+1e-6<t.frames[i].at);i++)n=i;return{index:n,label:t.frames[n].label,position:`${n%t.columns*100/(t.columns-1)}% ${Math.floor(n/t.columns)*100/(t.rows-1)}%`}}function Ko(t,e){const n=t.width/2;return Math.max(n+1,Math.min(99-n,e-10))}function wd(t){return t.hits.reduce((e,n)=>e+n.damage,0)}const hi={giant:{name:"DIAPER DISASTER",duration:Gl.duration,cooldown:19,initialCooldown:8,range:20,holdGap:12,knockback:18,hits:[{at:Gl.impactAt,damage:60,label:"DIAPER DISASTER!"}],frames:[{at:0,player:"66.667% 100%",opponent:"0 100%",label:"LOOK OUT BELOW"}]},brutus:{name:"SHELL SHOCK",duration:wr.duration,cooldown:13,initialCooldown:5,range:16,holdGap:5,knockback:13,hits:[{at:wr.captureAt,damage:10,label:"SHELL GRIP!"},{at:wr.impactAt,damage:24,label:"SHELL SHOCK!"}],frames:[{at:0,player:"66.667% 100%",opponent:"66.667% 66.667%",label:"CAUGHT!"},{at:.45,player:"66.667% 100%",opponent:"66.667% 33.333%",label:"SHELL GRIP"},{at:1.55,player:"66.667% 100%",opponent:"100% 66.667%",label:"BRACE YOURSELF"},{at:wr.impactAt,player:"100% 100%",opponent:"66.667% 33.333%",label:"SHELL SHOCK!"},{at:2.82,player:"100% 100%",opponent:"0 0",label:"RELEASE"}]},pudger:{name:"VELVET AVALANCHE",duration:2.5,cooldown:15,initialCooldown:6,range:17,holdGap:9,knockback:14,hits:[{at:.9,damage:12,label:"BELLY ROLL!"},{at:1.65,damage:25,label:"CRUSH!"}],frames:[{at:0,player:"66.667% 100%",opponent:"0 33.333%",label:"ROLLING IN"},{at:.5,player:"66.667% 100%",opponent:"33.333% 33.333%",label:"BELLY ROLL"},{at:.9,player:"100% 100%",opponent:"33.333% 33.333%",label:"PINNED!"},{at:1.65,player:"100% 100%",opponent:"0 33.333%",label:"CRUSH!"},{at:2.1,player:"66.667% 100%",opponent:"0 0",label:"RELEASE"}]},wormy:{name:"CONSPIRACY CORKSCREW",duration:Ao.duration,cooldown:22,initialCooldown:8,range:18,holdGap:10,knockback:13,hits:[{at:Ao.captureAt,damage:14,label:"COIL CRUSH!"},{at:Ao.impactAt,damage:25,label:"CONSPIRACY SHOCK!"}],frames:[{at:0,player:"66.667% 100%",opponent:"0 0",label:"BURROWING IN"},{at:.45,player:"66.667% 100%",opponent:"33.333% 0",label:"UNSOLICITED CLAIMS"},{at:.8,player:"33.333% 33.333%",opponent:"33.333% 0",label:"INCOHERENT RANT!"},{at:1.35,player:"33.333% 33.333%",opponent:"66.667% 33.333%",label:"WIGGLE!"},{at:1.8,player:"100% 100%",opponent:"66.667% 33.333%",label:"CORKSCREW CRUSH!"},{at:2.25,player:"100% 100%",opponent:"100% 66.667%",label:"RELEASE"}]},baxter:{name:"BOARDROOM BREAKDOWN",duration:wo.duration,cooldown:17,initialCooldown:7,range:18,holdGap:10,knockback:12,hits:[{at:wo.captureAt,damage:8,label:"BOTTLE JAB!"},{at:wo.impactAt,damage:32,label:"LAST CALL!"}],frames:[{at:0,player:"66.667% 100%",opponent:"66.667% 33.333%",label:"YOU'RE FIRED!"},{at:.7,player:"66.667% 100%",opponent:"100% 33.333%",label:"BOTTLE JAB!"},{at:1.25,player:"66.667% 100%",opponent:"66.667% 66.667%",label:"BOARDROOM RAGE"},{at:2.1,player:"100% 100%",opponent:"100% 33.333%",label:"LAST CALL!"},{at:2.65,player:"100% 100%",opponent:"100% 66.667%",label:"RELEASE"}]},witch:{name:"SHADOW SLAP",duration:Hl.duration,cooldown:19,initialCooldown:8,range:20,holdGap:12,knockback:18,hits:[{at:Hl.impactAt,damage:60,label:"SHADOW SLAP!"}],frames:[{at:0,player:"66.667% 100%",opponent:"0 0",label:"VANISH"},{at:.55,player:"66.667% 100%",opponent:"33.333% 33.333%",label:"TELEPORT"},{at:1.05,player:"33.333% 33.333%",opponent:"66.667% 33.333%",label:"SHADOW SLAP!"},{at:1.55,player:"100% 100%",opponent:"100% 33.333%",label:"VANISH"},{at:2.15,player:"100% 100%",opponent:"100% 66.667%",label:"RELEASE"}]}};function f_(t,e){const n=hi[t].frames;return[...n].reverse().find(i=>e>=i.at)??n[0]}const ni={duration:1.2,cooldown:5,healing:12,sobInterval:1.4},Yo={attackGap:1,projectileGap:1.2,gapVariation:.4};function h_(t){return hn(t)>=50?"HUNGOVER":"DRUNK"}function Ma(t){return(t.phase==="playing"||t.phase==="paused")&&t.opponent.health>0&&t.player.health>0&&t.opponentDrinkCooldown>0&&t.opponentDrinkTimer===0}const Rr={attackDurationScale:1.75,damageScale:.75,attackGap:.95,attackGapVariation:.4,movementScale:.72};function nf(t){const n={"high-punch":.28,"high-kick":.44,"medium-punch":.3,"medium-kick":.42,kick:.42,"low-punch":.32,"low-kick":.46,"body-slam":.58}[t];return n===void 0?void 0:n*Rr.attackDurationScale}const Ti={duration:.6,releaseAt:.18,gruntPitch:.64},rf=.025,d_=.35;function p_(t){if(t.owner!=="player"||(t.launchDelay??0)>0)return[];const e=Math.floor(t.age/rf);return Array.from({length:Math.min(14,e+1)},(n,i)=>{const r=e-i,s=t.age-r*rf,o=Math.sin((t.id*137+r*43)*12.9898);return{id:`${t.id}-${r}`,x:t.x-t.velocityX*s,y:t.y+o*s*24-s*s*36,opacity:Math.max(0,1-s/d_),angle:o*60,size:.65+Math.abs(o)*.65}})}const ln={lifetime:3,effectDuration:3,activationFlash:.3,firstSpawn:10,interval:10,x:30,reach:6,maxHeight:12},za=["soda","beer","mushroom"],m_={soda:"SODA RUSH",beer:"BEER BUZZ",mushroom:"MUSHROOM TRIP"},g_={soda:"+50% ATTACK SPEED",beer:"SWAY • SLOW ATTACKS • −5% DAMAGE TAKEN",mushroom:"COLOR TRIP"};function Rd(t){t.pickup=null,t.pickupSpawnTimer=ln.firstSpawn,t.playerAttackDuration=0}function Ns(t){var e;return(e=t.pickup)!=null&&e.activated&&t.pickup.remaining>0?t.pickup.kind:void 0}function __(t){if(!t||t.remaining<=0)return;if(!t.activated)return{};const e=ln.effectDuration-t.remaining;if(e>=ln.activationFlash-1e-6)return;const n=Math.max(0,e/ln.activationFlash);return{"--pickup-flash-progress":n,"--pickup-flash-opacity":Math.min(1,(1-n)/.7),"--pickup-flash-brightness":1+2*Math.sin(Math.PI*(n*.8+.2))}}function v_(t,e,n=Math.random){if(t.pickupSpawnTimer-=e,t.pickup&&(t.pickup.remaining=Math.max(0,t.pickup.remaining-e),t.pickup.remaining<=1e-6&&(t.pickup=null)),t.pickupSpawnTimer<=1e-6&&!t.pickup&&!t.opponentSpecial){const i=za[Math.min(za.length-1,Math.floor(n()*za.length))];t.pickup={kind:i,x:ln.x,remaining:ln.lifetime,activated:!1},t.pickupSpawnTimer=Math.max(0,t.pickupSpawnTimer+ln.interval)}}function x_(t){const e=t.pickup;!e||e.activated||t.opponentSpecial||t.player.health<=0||Math.abs(t.player.x-e.x)<=ln.reach&&t.player.y<=ln.maxHeight&&(e.activated=!0,e.remaining=ln.effectDuration)}function zl(t){const e=Ns(t);return e==="soda"?1/1.5:e==="beer"?1.5:1}function y_(t){if(Ns(t)!=="beer")return 0;const e=ln.effectDuration-t.pickup.remaining;return Math.sin(e*Math.PI*2)*9}function sf(t){return["jab","backfist","punch","uppercut","hammer","kick","roundhouse","sweep","elbow","throw"].includes(t)}function S_(t){if(Ns(t)!=="mushroom")return;const e=ln.effectDuration-t.pickup.remaining,n=Math.min(1,e/.2,t.pickup.remaining/.5);return{"--trip-hue":`${e*100}deg`,"--trip-opacity":`${n*.26}`,"--trip-x":`${50+Math.sin(e*2)*30}%`,"--trip-y":`${50+Math.cos(e*2.4)*30}%`,"--trip-skew":`${Math.sin(e*4)*.45*n}deg`,"--trip-scale":`${1+.008*n}`}}const Cd=23,vs=76,Ro=10,of=.3,M_=5,E_=5,T_=150,b_=428.57,A_=.7,Nr=[{specialMove:"brutus",name:"TURTLE",epithet:"The Awkward Slow-Mo",accent:"#8fa84e",filter:"none",health:100,aggression:1},{specialMove:"wormy",name:"WORMY",epithet:"The Professional Troll Worm",accent:"#b7df4a",filter:"none",health:118,aggression:1.14},{specialMove:"baxter",name:"BOOZY BAXTER",epithet:"The Boardroom Breakdown",accent:"#ff902e",filter:"none",health:136,aggression:1.28},{specialMove:"witch",name:"SHADOW WITCH",epithet:"The Midnight Hex",accent:"#a16bd4",filter:"none",health:158,aggression:1.42},{specialMove:"giant",name:"BIG BABY",epithet:"The Diaper Disaster",accent:"#a77538",filter:"none",health:158,aggression:1.42}];function jo(t,e){return{x:t,y:0,velocityY:0,health:e,maxHealth:e,pose:"idle",poseTimer:0,cooldown:0,hurtTimer:0,bleedTimer:0,blockTimer:0}}function Lt(t){return{...Nr[(t-1)%Nr.length],health:100+(t-1)*24,aggression:Math.min(2.55,1.18+(t-1)*.2)}}function w_(){const t=Lt(1);return{pickup:null,pickupSpawnTimer:ln.firstSpawn,playerAttackDuration:0,phase:"title",player:jo(Cd,100),opponent:jo(vs,t.health),projectiles:[],effects:[],bloodBursts:[],bloodPools:[],soundEvents:[],level:1,wins:0,timer:60,banner:"ROUND 1",bannerTimer:0,outcome:null,transitionTimer:0,opponentAiTimer:.42,opponentStrategy:"advance",opponentStrategyTimer:.55,lastRightTap:-10,projectileId:0,effectId:0,bloodBurstId:0,bloodPoolId:0,soundEventId:0,screenShake:0,footstepShake:0,playerStepTimer:0,playerBackingUp:!1,playerAttackGap:0,playerAttackChainTime:0,playerAttackChainCount:0,opponentStepTimer:0,combo:0,comboTimer:0,discusSpamCount:0,discusSpamTimer:0,discusCooldownTimer:0,opponentPunishPhase:"none",opponentPunishTimer:0,opponentPunishAttack:"body-slam",opponentSpecial:null,opponentSpecialCooldown:hi[t.specialMove].initialCooldown,opponentDrinkTimer:0,opponentDrinkCooldown:0,opponentCanDrink:!1,opponentCryTimer:0}}function Pd(t){Rd(t);const e=Lt(t.level);Object.assign(t.player,jo(Cd,100)),Object.assign(t.opponent,jo(vs,e.health)),t.projectiles.splice(0),t.effects.splice(0),t.bloodBursts.splice(0),t.soundEvents.splice(0),t.timer=60,t.outcome=null,t.transitionTimer=0,t.opponentAiTimer=.34,t.opponentStrategy=t.level===1?"advance":"rush",t.opponentStrategyTimer=t.level===1?.55:.8,t.lastRightTap=-10,t.footstepShake=0,t.playerStepTimer=0,t.playerBackingUp=!1,t.playerAttackGap=0,t.playerAttackChainTime=0,t.playerAttackChainCount=0,t.opponentStepTimer=0,t.combo=0,t.comboTimer=0,t.discusSpamCount=0,t.discusSpamTimer=0,t.discusCooldownTimer=0,t.opponentPunishPhase="none",t.opponentPunishTimer=0,t.opponentPunishAttack="body-slam",t.opponentSpecial=null,t.opponentSpecialCooldown=hi[e.specialMove].initialCooldown,t.opponentDrinkTimer=0,t.opponentDrinkCooldown=0,t.opponentCanDrink=!1,t.opponentCryTimer=0}function Ld(t,e){!Number.isInteger(e)||e<1||e>Nr.length||(t.level=e,t.wins=0,t.bloodPools.splice(0),Pd(t),t.screenShake=0,t.phase="playing",t.banner=`ROUND ${e} — FIGHT!`,t.bannerTimer=1.8)}function Dd(t){Ld(t,1)}function R_(t){Dd(t)}function C_(t){t.phase==="playing"?t.phase="paused":t.phase==="paused"&&(t.phase="playing")}function At(t,e,n){t.pose=e,t.poseTimer=n}function Co(t,e,n,i){t.effects.push({id:++t.effectId,x:e,y:n,age:0,label:i})}function Id(t){let e=t>>>0;return()=>(e=Math.imul(e,1664525)+1013904223>>>0,e/4294967296)}function P_(t){return t.includes("UPPERCUT")?63:t.includes("HAMMER")||t.includes("CRACK")?58:t.includes("KICK")||t.includes("THUMP")||t.includes("WHOMP")||t.includes("SWEEP")?43:53}function L_(t,e,n,i,r){const s=++t.bloodBurstId,o=Id(s*7919+Math.round(i*100)+n*104729),a=e===t.opponent?1:-1,l=Math.min(8,3+Math.ceil(n/5)+Math.floor(o()*2)),c=e===t.opponent?-1:1,u=Math.max(2,Math.min(98,e.x+c*(.45+o()*.85)+(o()-.5)*.8)),f=P_(r)+e.y+(o()-.5)*8,h=Lt(t.level),d=h.specialMove==="brutus"&&e===t.opponent&&e.maxHealth===h.health,v=h.specialMove==="wormy"&&e===t.opponent&&e.maxHealth===h.health,y=h.specialMove==="witch"&&e===t.opponent&&e.maxHealth===h.health;t.bloodBursts.push({color:e===t.opponent?h.specialMove==="giant"?"brown":h.specialMove==="baxter"?"orange":d?"pink":v?"green":y?"black":"red":"red",id:s,x:u,y:f,age:0,sprites:Array.from({length:l},(p,m)=>({id:m,offsetX:m===0?0:a*(2+o()*12)+(o()-.5)*8,offsetY:m===0?0:6+o()*38,size:m===0?190+n*4.4:95+o()*105+n*2.2,rotation:Math.round((o()-.5)*28),delay:m===0?0:.025+o()*.14,duration:.46+o()*.18+n*.004,flip:o()<.5?a:-a}))})}function D_(t,e,n,i){const r=Lt(t.level).specialMove,s=r==="brutus"&&n==="opponent"&&e.maxHealth===Lt(t.level).health,o=r==="wormy"&&n==="opponent"&&e.maxHealth===Lt(t.level).health,a=r==="witch"&&n==="opponent"&&e.maxHealth===Lt(t.level).health,l=n==="opponent"?r==="giant"?"brown":r==="baxter"?"orange":s?"pink":o?"green":a?"black":"red":"red",c=Id((t.bloodPoolId+1)*15485863+Math.round(e.x*100)),u=n==="opponent"&&r==="giant",f=t.opponentSpecial&&zr[t.opponentSpecial.id],h=u?f&&t.opponentSpecial?Ko(f,t.opponentSpecial.anchorX):e.x+19:e.x,d=Math.max(2,Math.min(98,h+(c()-.5)*2.4)),v=t.bloodPools.findIndex(y=>y.source===n&&y.color===l&&Math.abs(y.x-d)<4.2);if(v>=0){const y=t.bloodPools.splice(v,1)[0];y.x=(y.x*y.size+d*i)/(y.size+i),y.size=Math.min(18,y.size+i*.82),y.stretch=Math.min(1.48,y.stretch+i*.025),y.age=0,y.lifetime=18+c()*5,t.bloodPools.push(y);return}t.bloodPools.push({color:l,id:++t.bloodPoolId,source:n,x:d,size:3.4+i*.9,stretch:.82+c()*.45,rotation:Math.round((c()-.5)*22),age:0,lifetime:18+c()*5}),t.bloodPools.length>48&&t.bloodPools.splice(0,t.bloodPools.length-48)}function Zs(t,e,n,i){const r=n==="opponent"&&Lt(t.level).specialMove==="giant",s=hn(e),o=r?{interval:.48-s*.004,amount:2.2+s*.04}:c_(s);if(!o||e.health<=0){e.bleedTimer=0;return}e.bleedTimer=Math.min(e.bleedTimer,o.interval)-i,!(e.bleedTimer>0)&&(D_(t,e,n,o.amount),e.bleedTimer=o.interval)}function I_(t,e){for(const n of t.bloodPools)n.age+=e;for(let n=t.bloodPools.length-1;n>=0;n-=1)t.bloodPools[n].age>=t.bloodPools[n].lifetime&&t.bloodPools.splice(n,1)}function zn(t,e,n,i,r,s){const o=n==="player"?t.player:t.opponent;t.soundEvents.push({id:++t.soundEventId,kind:e,fighter:n,style:i,intensity:r,duration:s,damageTier:hn(o)}),t.soundEvents.length>32&&t.soundEvents.splice(0,t.soundEvents.length-32)}function Os(t,e,n,i,r){var l;if(e===t.opponent&&t.opponentSpecial||e.hurtTimer>0||t.phase!=="playing")return!1;const s=e.blockTimer>0,a=(s?Math.max(1,Math.ceil(n*.35)):n)*(e===t.player&&!t.opponentSpecial&&Ns(t)==="beer"?.95:1);if(e===t.player&&!t.opponentSpecial&&e.health>0&&a>=e.health&&t.opponent.health>0){const c=hi[Lt(t.level).specialMove];return t.opponent.x=Math.max(17,Math.min(93,t.player.x+c.holdGap)),Od(t),!1}return e===t.opponent&&t.opponentPunishPhase!=="none"?(Co(t,i,56+e.y,"INVINCIBLE"),!1):(e.health=Math.max(0,e.health-a),e===t.opponent&&Lt(t.level).specialMove==="baxter"&&(t.opponentCanDrink=e.health>0,t.opponentDrinkTimer>0&&(t.opponentDrinkTimer=0,t.opponentDrinkCooldown=ni.cooldown,t.opponentCryTimer=0,Co(t,e.x,65,"DRINK INTERRUPTED!"))),s&&e.health>0?(e.hurtTimer=0,At(e,"block",e.blockTimer)):(e.hurtTimer=.28,At(e,e.health<=0?"defeat":"hurt",e.health<=0?3:.28)),t.screenShake=Math.max(t.screenShake,Math.min(1.3,a/14)),Co(t,i,52+e.y,s?"BLOCKED!":r),(!t.opponentSpecial||!((l=zr[t.opponentSpecial.id])!=null&&l.nonGraphic))&&L_(t,e,n,i,r),zn(t,"hit",e===t.player?"player":"opponent",n>=16?"heavy":r.includes("DISCUS")||r==="SPLAT"?"discus":"light",Math.min(1.5,a/12)),e===t.opponent?(t.combo+=1,t.comboTimer=1.2):t.combo=0,!0)}function U_(t){return t==="sweep"||t==="low-punch"||t==="low-kick"?"low":t==="kick"||t==="roundhouse"||t==="hammer"||t==="medium-punch"||t==="medium-kick"?"medium":"high"}function Ud(t,e){return e==="high"?t.pose==="crouch":e==="low"?t.y>12:!1}function Ln(t,e,n,i,r,s){if(t.player.cooldown>0||t.player.y>12)return;s*=zl(t),t.playerAttackDuration=s,At(t.player,e,s),t.player.cooldown=s,(e==="punch"||e==="jab"||e==="backfist"||e==="kick"||e==="roundhouse"||e==="sweep"||e==="uppercut"||e==="hammer")&&(t.playerAttackGap<=0&&(t.playerAttackChainTime=0,t.playerAttackChainCount=0),t.playerAttackGap=.5*Math.max(1,zl(t)),t.playerAttackChainCount+=1,t.playerAttackChainCount>=3&&t.playerAttackChainTime>0&&(t.opponent.blockTimer=Math.max(t.opponent.blockTimer,s+.12),At(t.opponent,"block",t.opponent.blockTimer))),zn(t,"attack","player",i>=16||e.includes("kick")||e==="roundhouse"||e==="hammer"||e==="sweep"?"heavy":"light",i/14),t.opponent.x-t.player.x<=n+E_&&!Ud(t.opponent,U_(e))&&Os(t,t.opponent,i,t.opponent.x-2,r)&&(t.opponent.x=Math.min(91,t.opponent.x+i*.13))}function af(t){if(t.discusCooldownTimer>0)return t.banner=`DISCUS RECHARGING — ${Math.ceil(t.discusCooldownTimer)}s`,t.bannerTimer=.7,!1;t.player.health=Math.min(t.player.maxHealth,t.player.health+3);const e=zl(t);return t.playerAttackDuration=Ti.duration*e,t.player.cooldown=t.playerAttackDuration,At(t.player,"throw",t.playerAttackDuration),zn(t,"attack","player","discus",1.15),t.projectiles.push({id:++t.projectileId,owner:"player",x:t.player.x+6,y:43+t.player.y,velocityX:68,age:0,launchDelay:Ti.releaseAt*e}),t.discusCooldownTimer=M_,t.discusSpamCount=t.discusSpamTimer>0?t.discusSpamCount+1:1,t.discusSpamTimer=18,t.discusSpamCount>3&&t.opponentPunishPhase==="none"&&(t.opponentPunishPhase="charging",t.opponentPunishTimer=1.8,t.opponentPunishAttack=(t.projectileId+t.level)%2===0?"body-slam":"jab",t.opponent.hurtTimer=0,t.opponent.cooldown=0,t.banner="ANTI-SPAM ARMOR!",t.bannerTimer=1.25),!0}function N_(t,e,n){if(t.phase!=="playing"||t.opponentSpecial)return;if(e==="il"){Ln(t,"uppercut",19,16,"UPPERCUT",.4);return}if(e==="ij"){Ln(t,"hammer",21,15,"HAMMER",.36);return}if(e==="kl"){Ln(t,"roundhouse",24,18,"ROUNDHOUSE",.46);return}if(e==="kj"){Ln(t,"sweep",25,15,"SWEEP",.42);return}if(e==="k"){if(t.playerBackingUp&&t.player.cooldown<=0){t.player.blockTimer=.42,t.player.cooldown=.42,At(t.player,"block",.42),zn(t,"attack","player","heavy",.35);return}Ln(t,"kick",22,13,"KICK",.34);return}if(e==="up"){Ln(t,"jab",17,8,"SMACK",.21);return}if(e==="left"){Ln(t,"backfist",19,10,"CRACK",.29);return}if(e==="down"){Ln(t,"kick",22,13,"THUMP",.35);return}if(e==="l"){const r=n-t.lastRightTap;t.lastRightTap=n,r>.045&&r<=of?(t.lastRightTap=-10,af(t)):Ln(t,"punch",17,9,"PUNCH",.22);return}const i=n-t.lastRightTap;t.lastRightTap=n,i>.045&&i<=of?(t.lastRightTap=-10,af(t)):Ln(t,"elbow",15,7,"BONK",.2)}function Va(t,e){t.phase==="playing"&&(Rd(t),t.outcome=e,t.opponentSpecial=null,t.opponentDrinkTimer=0,t.phase="round-over",t.transitionTimer=2.25,t.banner=e==="player"?"VICTORY!":e==="opponent"?"KNOCKED OUT":"DRAW",t.bannerTimer=2.25,At(t.player,e==="player"?"victory":e==="opponent"?"defeat":"idle",3),At(t.opponent,e==="opponent"?"victory":e==="player"?"defeat":"idle",3))}function O_(t,e){if(t.opponentPunishPhase==="none")return!1;const n=t.opponent.x-t.player.x;if(t.opponentPunishPhase==="charging"){if(t.opponentPunishTimer-=e,t.opponent.x=Math.max(t.player.x+13,t.opponent.x-e*46*$o(t.opponent)),t.opponent.pose="walk",n<=17||t.opponentPunishTimer<=0){const i=t.opponentPunishAttack==="body-slam";t.opponentPunishPhase="attacking",t.opponentPunishTimer=i?.64:.38,t.opponent.cooldown=t.opponentPunishTimer;const r=Lt(t.level).specialMove==="giant";if(At(t.opponent,r?"kick":t.opponentPunishAttack,t.opponentPunishTimer),zn(t,"attack","opponent",i?"heavy":"light",i?1.45:1),t.player.hurtTimer=0,Os(t,t.player,i?24+t.level:14+t.level,t.player.x+2,r?"BOOTED!":i?"BODY SLAM!":"COUNTER!"),t.opponentSpecial)return!0;t.player.x=Math.max(7,t.player.x-(i?7:4))}return!0}return t.opponentPunishPhase==="attacking"?(t.opponentPunishTimer-=e,t.opponentPunishTimer<=0&&(t.opponentPunishPhase="retreating",t.opponentPunishTimer=2.2,t.opponent.pose="walk"),!0):(t.opponentPunishTimer-=e,t.opponent.x=Math.min(vs,t.opponent.x+e*38*$o(t.opponent)),t.opponent.pose="walk",(t.opponent.x>=vs||t.opponentPunishTimer<=0)&&(t.opponent.x=vs,t.opponentPunishPhase="none",t.opponentPunishTimer=0,t.opponent.pose="idle",t.opponent.cooldown=.35,t.opponentStrategy=t.level===1?"advance":"rush",t.opponentStrategyTimer=.45,t.discusSpamCount=0,t.discusSpamTimer=0),!0)}function Zo(t,e,n,i){const r=Lt(t.level).specialMove==="brutus"?Rr.movementScale:1;t.opponent.x+=n*i*r*$o(t.opponent)*e,(t.opponent.pose==="idle"||t.opponent.pose==="walk")&&(t.opponent.pose="walk")}function lf(t,e,n){if(e.specialMove==="giant")return;const i=Math.max(.34,.46/e.aggression);At(t.opponent,"throw",i),t.opponent.cooldown=i,t.opponentAiTimer=e.specialMove==="baxter"?Yo.projectileGap+n()*Yo.gapVariation:(.32+n()*.3)/e.aggression,zn(t,"attack","opponent","discus",1),t.projectiles.push({id:++t.projectileId,owner:"opponent",x:t.opponent.x-5,y:47,velocityX:-(48+t.level*4),age:0})}function Nd(t,e,n){const i=e.specialMove==="brutus",r=Math.min(4,t.level),s=n(),o=t.opponent.x-t.player.x,a=e.specialMove==="giant",l=!a&&r>=3&&s>(r>=4?.86:.93),c=Math.floor(n()*6),f=[{pose:"high-punch",height:"high",range:18,damage:8+Math.ceil(t.level*.75),cooldown:.28,label:"HIGH PUNCH!"},{pose:"high-kick",height:"high",range:22,damage:12+t.level,cooldown:.44,label:"HIGH KICK!"},{pose:"medium-punch",height:"medium",range:19,damage:9+t.level,cooldown:.3,label:"MEDIUM PUNCH!"},{pose:"kick",height:"medium",range:22,damage:12+t.level,cooldown:.42,label:"MEDIUM KICK!"},{pose:"low-punch",height:"low",range:19,damage:8+t.level,cooldown:.32,label:"LOW PUNCH!"},{pose:"low-kick",height:"low",range:23,damage:13+t.level,cooldown:.46,label:"LOW KICK!"}][a?[1,3,5][Math.min(2,Math.floor(c/2))]:c],h=l?"body-slam":f.pose,d=l?"low":f.height,v=l?23:f.range,y=l?17+t.level*2:f.damage,p=i?Math.max(1,Math.round(y*Rr.damageScale)):y,m=(l?.58:f.cooldown)*(i?Rr.attackDurationScale:1);return o>v?!1:(At(t.opponent,h,m),t.opponent.cooldown=m,t.opponentAiTimer=i?Rr.attackGap+n()*Rr.attackGapVariation:e.specialMove==="baxter"?Yo.attackGap+n()*Yo.gapVariation:(.25+n()*.34)/e.aggression,zn(t,"attack","opponent",l||f.height!=="high"?"heavy":"light",p/14),!Ud(t.player,d)&&Os(t,t.player,p,t.player.x+2,l?"SLAM!":f.label)&&(t.player.x=Math.max(7,t.player.x-p*(l?.16:.1))),!0)}function F_(t,e,n,i){const r=t.opponent.x-t.player.x;t.opponentStrategyTimer-=e,t.opponentStrategyTimer<=0&&(t.opponentStrategy=i()<.32?"retreat":"advance",t.opponentStrategyTimer=.32+i()*.72),t.opponentStrategy==="retreat"&&r<36?Zo(t,e,1,10.5):r>14&&(t.opponentStrategy="advance",Zo(t,e,-1,12.5)),t.opponentAiTimer<=0&&t.opponent.cooldown<=0&&r<=22&&Nd(t,n,i)&&i()<.58&&(t.opponentStrategy="retreat",t.opponentStrategyTimer=.28+i()*.48)}function B_(t,e,n,i){const r=Math.min(4,t.level),s=t.opponent.x-t.player.x,o=14+r*3.2+n.aggression,a=12+r*2.8,l=r===2?31:r===3?36:28;if(t.opponentStrategyTimer-=e,t.opponentStrategy==="back-off"){s<l&&Zo(t,e,1,a),r>=3&&s>27&&t.opponentAiTimer<=0&&t.opponent.cooldown<=0&&(i()<(r>=4?.58:.4)?lf(t,n,i):t.opponentAiTimer=.12),(t.opponentStrategyTimer<=0||s>=l)&&(t.opponentStrategy="rush",t.opponentStrategyTimer=.9);return}if(t.opponentStrategy="rush",s>15&&Zo(t,e,-1,o),t.opponentAiTimer<=0&&t.opponent.cooldown<=0)if(s<=22){const c=Nd(t,n,i),u=c&&r>=4&&i()<.38;c&&!u&&(t.opponentStrategy="back-off",t.opponentStrategyTimer=r===2?.72:r===3?.56:.34)}else r>=3&&s>31&&i()<.3&&lf(t,n,i)}function k_(t){if(t.phase!=="playing"||t.opponentSpecial||t.opponentSpecialCooldown>0||t.opponentPunishPhase!=="none"||t.opponent.cooldown>0||t.opponent.hurtTimer>0||t.player.y>0||t.player.health<=0||t.opponent.health<=0)return!1;const e=Lt(t.level).specialMove,n=hi[e];if(t.player.health>wd(n))return!1;const i=t.opponent.x-t.player.x;return i<0||i>n.range?!1:(Od(t),!0)}function Od(t){const e=Lt(t.level).specialMove,n=hi[e];if(t.opponentPunishPhase="none",t.opponentPunishTimer=0,t.opponentDrinkTimer=0,t.opponentSpecial={id:e,elapsed:0,nextHit:0,anchorX:t.opponent.x},t.player.x=Math.max(7,t.opponent.x-n.holdGap),t.player.y=0,t.player.velocityY=0,t.player.hurtTimer=0,t.player.blockTimer=0,t.opponent.blockTimer=0,t.lastRightTap=-10,t.projectiles.splice(0),t.footstepShake=0,At(t.player,"hurt",n.duration),At(t.opponent,"body-slam",n.duration),t.player.cooldown=n.duration,t.opponent.cooldown=n.duration,t.banner=n.name,t.bannerTimer=.65,zn(t,"attack","opponent","heavy",1.45),e==="wormy"){const i=t.soundEvents.at(-1);i&&(i.specialMove=e,i.duration=n.duration)}}function H_(t,e){var s;const n=t.opponentSpecial,i=hi[n.id];for(n.elapsed=Math.min(i.duration,n.elapsed+e),t.opponent.x=n.anchorX,t.player.x=Math.max(7,n.anchorX-i.holdGap),t.player.y=0,t.player.velocityY=0;n.nextHit<i.hits.length&&n.elapsed>=i.hits[n.nextHit].at;){const o=i.hits[n.nextHit++];if(t.player.health>0){const a=n.nextHit===i.hits.length,l=a?t.player.health:Math.min(o.damage,Math.max(0,t.player.health-1));if(l>0){t.player.hurtTimer=0,Os(t,t.player,l,t.player.x+2,o.label);const c=zr[n.id];if(c){const u=Ko(c,n.anchorX),f=(s=c.contact)==null?void 0:s[a?"impact":"capture"],h=u+c.width*(((f==null?void 0:f.x)??(a?.34:.46))-.5),d=(f==null?void 0:f.y)??(a?18:42),v=t.bloodBursts.at(-1);v&&!c.nonGraphic&&(v.x=h,v.y=d);const y=t.effects.at(-1);y&&(y.x=h,y.y=d),a&&(t.screenShake=1.3)}}}}if(n.elapsed+1e-6<i.duration)return;t.opponentSpecial=null,t.opponentSpecialCooldown=i.cooldown,t.player.x=Math.max(7,n.anchorX-Ro-i.knockback);const r=zr[n.id];if(r){const o=Ko(r,n.anchorX);t.player.x=o+(r.exit.player-.5)*r.width,t.opponent.x=o+(r.exit.opponent-.5)*r.width}t.player.cooldown=.35,t.player.hurtTimer=.35,At(t.player,t.player.health<=0?"defeat":"hurt",.35),At(t.opponent,"idle",0),t.opponent.cooldown=.7,t.opponentAiTimer=.7}function G_(t,e){if(Lt(t.level).specialMove==="baxter"){if(t.opponentDrinkCooldown=Math.max(0,t.opponentDrinkCooldown-e),t.opponent.health<=0||t.player.health<=0){t.opponentDrinkTimer=0;return}if(t.opponentDrinkTimer>0&&(t.opponentDrinkTimer=Math.max(0,t.opponentDrinkTimer-e),t.opponentDrinkTimer<=1e-6)){t.opponentDrinkTimer=0;const n=Math.min(ni.healing,t.opponent.maxHealth-t.opponent.health);t.opponent.health+=n,t.opponentDrinkCooldown=ni.cooldown,t.opponentCryTimer=0,At(t.opponent,"idle",0),Co(t,t.opponent.x,65,`+${n} HP`)}Ma(t)?(t.opponentCryTimer-=e,t.opponentCryTimer<=0&&(zn(t,"cry","opponent","heavy",1.3,Math.min(1.2,t.opponentDrinkCooldown)),t.opponentCryTimer=ni.sobInterval)):t.opponentCryTimer=0}}function z_(t){return Lt(t.level).specialMove!=="baxter"||!t.opponentCanDrink||t.opponentDrinkCooldown>0||t.opponent.health<=0||t.player.health<=0||t.opponent.health>=t.opponent.maxHealth||t.opponent.cooldown>0?!1:(t.opponentCanDrink=!1,t.opponentDrinkTimer=ni.duration,t.opponentDrinkCooldown=ni.duration+ni.cooldown,t.opponent.cooldown=ni.duration,At(t.opponent,"drink",ni.duration),zn(t,"drink","opponent","light",.8),!0)}function V_(t,e,n){if(t.opponentDrinkTimer>0||O_(t,e)||t.opponent.hurtTimer>0||k_(t)||z_(t))return;const i=Lt(t.level);t.opponentAiTimer-=e,t.level===1?F_(t,e,i,n):B_(t,e,i,n)}function W_(t,e){for(const n of t.projectiles){const i=Math.min(e,n.launchDelay??0);n.launchDelay=Math.max(0,(n.launchDelay??0)-i);const r=e-i;if(r<=0)continue;n.x+=n.velocityX*r,n.age+=r;const s=n.owner==="player"?t.opponent:t.player;if((n.owner==="player"?n.x>=s.x-3:n.x<=s.x+3)&&n.age<2){const a=n.owner==="player"?18:11+t.level,l=Os(t,s,a,s.x,n.owner==="player"?"DISCUS!":"SPLAT");if(t.opponentSpecial)return;n.age=99,l&&(s.x+=n.owner==="player"?3:-3)}}for(let n=t.projectiles.length-1;n>=0;n-=1){const i=t.projectiles[n];(i.age>2||i.x<-5||i.x>105)&&t.projectiles.splice(n,1)}}function cf(t,e){t.cooldown=Math.max(0,t.cooldown-e),t.hurtTimer=Math.max(0,t.hurtTimer-e),t.blockTimer=Math.max(0,t.blockTimer-e),t.poseTimer=Math.max(0,t.poseTimer-e),t.poseTimer===0&&t.y===0&&t.pose!=="walk"&&(t.pose="idle"),(t.y>0||t.velocityY!==0)&&(t.velocityY-=b_*e,t.y=Math.max(0,t.y+t.velocityY*e),t.y===0&&(t.velocityY=0))}function uf(t,e,n,i,r){if(!n){t[e]=0;return}t[e]-=i,t[e]<=0&&(t[e]=r,t.footstepShake=.13)}function X_(t,e,n,i=Math.random){const r=Math.min(e,.05);if(t.phase==="paused"||t.phase==="title"||t.phase==="game-over")return;t.bannerTimer>0&&(t.bannerTimer=Math.max(0,t.bannerTimer-r)),t.screenShake=Math.max(0,t.screenShake-r*3.4),t.footstepShake=Math.max(0,t.footstepShake-r),t.playerBackingUp=n.x<-.55,t.playerAttackGap=Math.max(0,t.playerAttackGap-r),t.playerAttackGap>0?t.playerAttackChainTime+=r:(t.playerAttackChainTime=0,t.playerAttackChainCount=0),t.comboTimer=Math.max(0,t.comboTimer-r),t.comboTimer===0&&(t.combo=0),t.discusSpamTimer=Math.max(0,t.discusSpamTimer-r),t.discusCooldownTimer=t.discusCooldownTimer<=r+1e-6?0:t.discusCooldownTimer-r,t.discusSpamTimer===0&&t.opponentPunishPhase==="none"&&(t.discusSpamCount=0);for(const f of t.effects)f.age+=r;for(let f=t.effects.length-1;f>=0;f-=1)t.effects[f].age>.65&&t.effects.splice(f,1);for(const f of t.bloodBursts)f.age+=r;for(let f=t.bloodBursts.length-1;f>=0;f-=1)t.bloodBursts[f].age>.95&&t.bloodBursts.splice(f,1);if(I_(t,r),t.opponentSpecial||(cf(t.player,r),cf(t.opponent,r)),t.phase==="round-over"){t.transitionTimer-=r,t.transitionTimer<=0&&(t.outcome==="player"?(t.level+=1,t.wins+=1,Pd(t),t.phase="playing",t.banner=`ROUND ${t.level} — FIGHT!`,t.bannerTimer=1.8):t.phase="game-over");return}if(v_(t,r,i),G_(t,r),t.opponentSpecial){H_(t,r),Zs(t,t.player,"player",r),Zs(t,t.opponent,"opponent",r),t.timer=Math.max(0,t.timer-r),t.opponentSpecial||ff(t);return}t.opponentSpecialCooldown=Math.max(0,t.opponentSpecialCooldown-r);const s=y_(t),o=Math.abs(n.x)>.08||Math.abs(s)>.1,a=t.player.x;if(t.player.cooldown<=.12){const f=t.player.x+n.x*20*$o(t.player)*r;t.player.x=Math.max(7,Math.min(t.opponent.x-Ro,f)),n.y>.55&&t.player.y===0?(t.player.velocityY=T_,At(t.player,"jump",A_)):n.y<-.55&&t.player.y===0&&At(t.player,"crouch",.12)}t.player.x=Math.max(7,Math.min(t.opponent.x-Ro,t.player.x+s*r)),x_(t);const l=t.player.y===0&&Math.abs(t.player.x-a)>.005;l&&(t.player.pose==="idle"||t.player.pose==="walk")?t.player.pose="walk":(!o||!l)&&t.player.pose==="walk"&&(t.player.pose="idle"),uf(t,"playerStepTimer",l,r,.27);const c=t.opponent.x;if(V_(t,r,i),t.opponentSpecial)return;const u=t.opponent.y===0&&Math.abs(t.opponent.x-c)>.005;!u&&t.opponent.pose==="walk"&&(t.opponent.pose="idle"),uf(t,"opponentStepTimer",u,r,.34),t.opponent.x=Math.max(t.player.x+Ro,Math.min(93,t.opponent.x)),W_(t,r),!t.opponentSpecial&&(Zs(t,t.player,"player",r),Zs(t,t.opponent,"opponent",r),t.timer=Math.max(0,t.timer-r),ff(t))}function ff(t){if(!t.opponentSpecial){if(t.player.health<=0)Va(t,"opponent");else if(t.opponent.health<=0)Va(t,"player");else if(t.timer<=0){const e=t.player.health/t.player.maxHealth,n=t.opponent.health/t.opponent.maxHealth;Va(t,e===n?"draw":e>n?"player":"opponent")}}}const Fs=a_("mortal-game",()=>{const t=Ps(w_()),e=lt(()=>Lt(t.level)),n=lt(()=>t.player.health/t.player.maxHealth*100),i=lt(()=>t.opponent.health/t.opponent.maxHealth*100);function r(o){N_(t,o,performance.now()/1e3)}function s(o,a){X_(t,o,a)}return{state:t,opponentProfile:e,playerHealthPercent:n,opponentHealthPercent:i,action:r,tick:s,start:()=>Dd(t),selectOpponent:o=>Ld(t,o),restart:()=>R_(t),togglePause:()=>C_(t)}}),q_={class:"pickup-caption"},$_={class:"pickup-icon",viewBox:"0 0 64 64","aria-hidden":"true","shape-rendering":"crispEdges"},K_={key:0,stroke:"#111020","stroke-width":"3","stroke-linejoin":"miter"},Y_={key:1,stroke:"#17121a","stroke-width":"3","stroke-linejoin":"miter"},j_={key:2,stroke:"#1d1332","stroke-width":"3","stroke-linejoin":"miter"},Z_={class:"pickup-clock","aria-hidden":"true"},J_={class:"pickup-seconds","aria-hidden":"true"},Q_=or({__name:"StagePickup",setup(t){const e=Fs(),n=lt(()=>__(e.state.pickup));return(i,r)=>re(e).state.pickup&&n.value?(we(),Le("div",{key:0,class:Tt(["stage-pickup",[re(e).state.pickup.kind,{activated:re(e).state.pickup.activated}]]),style:Qe({left:`${re(e).state.pickup.x}%`,...n.value}),role:"status","aria-live":"polite"},[ne("div",q_,[ne("strong",null,rt(re(e).state.pickup.activated?"✓ ACTIVATED":re(m_)[re(e).state.pickup.kind]),1),ne("span",null,rt(re(e).state.pickup.activated?re(g_)[re(e).state.pickup.kind]:"TOUCH TO COLLECT"),1)]),(we(),Le("svg",$_,[re(e).state.pickup.kind==="soda"?(we(),Le("g",K_,[...r[0]||(r[0]=[Ol('<path fill="#1aa4cf" d="M18 8h28v48H18z"></path><path fill="#f14057" d="M18 24h28v24H18z"></path><path fill="#e6f8ef" d="M17 6h30v7H17zM17 53h30v6H17z"></path><path fill="#fff7bb" stroke="none" d="M34 19 23 36h9l-2 13 12-19h-9z"></path><path stroke="#79e3ed" d="M22 16v7M22 47v4"></path>',5)])])):re(e).state.pickup.kind==="beer"?(we(),Le("g",Y_,[...r[1]||(r[1]=[ne("path",{fill:"#916019",d:"M26 8h12v17l9 9v23H17V34l9-9z"},null,-1),ne("path",{fill:"#edc877",d:"M24 5h16v7H24zM18 37h28v14H18z"},null,-1),ne("path",{stroke:"#f9e5a0",d:"M30 15v14l-8 9M22 53v2"},null,-1),ne("path",{fill:"#a52923",stroke:"none",d:"m32 39 2 3h4l-3 3 1 4-4-2-4 2 1-4-3-3h4z"},null,-1)])])):(we(),Le("g",j_,[...r[2]||(r[2]=[ne("path",{fill:"#fff0ba",d:"M27 31h13l5 25H20z"},null,-1),ne("path",{fill:"#ba4cdc",d:"M9 34V23l9-11h27l10 11v11l-9 7H18z"},null,-1),ne("path",{fill:"#6cebbb",stroke:"none",d:"M18 18h9v8h-9zM37 15h8v8h-8zM31 29h10v7H31zM12 29h8v6h-8z"},null,-1),ne("path",{stroke:"#c49963",d:"M30 43v8"},null,-1)])]))])),ne("div",Z_,[ne("i",{style:Qe({transform:`scaleX(${re(e).state.pickup.remaining/3})`})},null,4)]),ne("span",J_,rt(re(e).state.pickup.remaining.toFixed(1))+"s",1)],6)):at("",!0)}});/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const jc="169",e0=0,hf=1,t0=2,Fd=1,n0=2,jn=3,Pi=0,Zt=1,Bn=2,Ai=0,Or=1,df=2,pf=3,mf=4,i0=5,$i=100,r0=101,s0=102,o0=103,a0=104,l0=200,c0=201,u0=202,f0=203,Vl=204,Wl=205,h0=206,d0=207,p0=208,m0=209,g0=210,_0=211,v0=212,x0=213,y0=214,Xl=0,ql=1,$l=2,Vr=3,Kl=4,Yl=5,jl=6,Zl=7,Bd=0,S0=1,M0=2,wi=0,E0=1,T0=2,b0=3,A0=4,w0=5,R0=6,C0=7,kd=300,Wr=301,Xr=302,Jl=303,Ql=304,Ea=306,ec=1e3,Yi=1001,tc=1002,pn=1003,P0=1004,Js=1005,Mn=1006,Wa=1007,ji=1008,ui=1009,Hd=1010,Gd=1011,bs=1012,Zc=1013,nr=1014,ii=1015,Bs=1016,Jc=1017,Qc=1018,qr=1020,zd=35902,Vd=1021,Wd=1022,Tn=1023,Xd=1024,qd=1025,Fr=1026,$r=1027,$d=1028,eu=1029,Kd=1030,tu=1031,nu=1033,Po=33776,Lo=33777,Do=33778,Io=33779,nc=35840,ic=35841,rc=35842,sc=35843,oc=36196,ac=37492,lc=37496,cc=37808,uc=37809,fc=37810,hc=37811,dc=37812,pc=37813,mc=37814,gc=37815,_c=37816,vc=37817,xc=37818,yc=37819,Sc=37820,Mc=37821,Uo=36492,Ec=36494,Tc=36495,Yd=36283,bc=36284,Ac=36285,wc=36286,L0=3200,D0=3201,jd=0,I0=1,Ei="",Sn="srgb",Di="srgb-linear",iu="display-p3",Ta="display-p3-linear",Jo="linear",mt="srgb",Qo="rec709",ea="p3",ur=7680,gf=519,U0=512,N0=513,O0=514,Zd=515,F0=516,B0=517,k0=518,H0=519,_f=35044,vf="300 es",ri=2e3,ta=2001;class Yr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Nt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Xa=Math.PI/180,Rc=180/Math.PI;function ks(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Nt[t&255]+Nt[t>>8&255]+Nt[t>>16&255]+Nt[t>>24&255]+"-"+Nt[e&255]+Nt[e>>8&255]+"-"+Nt[e>>16&15|64]+Nt[e>>24&255]+"-"+Nt[n&63|128]+Nt[n>>8&255]+"-"+Nt[n>>16&255]+Nt[n>>24&255]+Nt[i&255]+Nt[i>>8&255]+Nt[i>>16&255]+Nt[i>>24&255]).toLowerCase()}function Yt(t,e,n){return Math.max(e,Math.min(n,t))}function G0(t,e){return(t%e+e)%e}function qa(t,e,n){return(1-n)*t+n*e}function Qr(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function $t(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class qe{constructor(e=0,n=0){qe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xe{constructor(e,n,i,r,s,o,a,l,c){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],d=i[5],v=i[8],y=r[0],p=r[3],m=r[6],b=r[1],S=r[4],M=r[7],P=r[2],C=r[5],R=r[8];return s[0]=o*y+a*b+l*P,s[3]=o*p+a*S+l*C,s[6]=o*m+a*M+l*R,s[1]=c*y+u*b+f*P,s[4]=c*p+u*S+f*C,s[7]=c*m+u*M+f*R,s[2]=h*y+d*b+v*P,s[5]=h*p+d*S+v*C,s[8]=h*m+d*M+v*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,d=c*s-o*l,v=n*f+i*h+r*d;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/v;return e[0]=f*y,e[1]=(r*c-u*i)*y,e[2]=(a*i-r*o)*y,e[3]=h*y,e[4]=(u*n-r*l)*y,e[5]=(r*s-a*n)*y,e[6]=d*y,e[7]=(i*l-c*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply($a.makeScale(e,n)),this}rotate(e){return this.premultiply($a.makeRotation(-e)),this}translate(e,n){return this.premultiply($a.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const $a=new Xe;function Jd(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function na(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function z0(){const t=na("canvas");return t.style.display="block",t}const xf={};function No(t){t in xf||(xf[t]=!0,console.warn(t))}function V0(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function W0(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function X0(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const yf=new Xe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Sf=new Xe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),es={[Di]:{transfer:Jo,primaries:Qo,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[Sn]:{transfer:mt,primaries:Qo,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Ta]:{transfer:Jo,primaries:ea,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(Sf),fromReference:t=>t.applyMatrix3(yf)},[iu]:{transfer:mt,primaries:ea,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(Sf),fromReference:t=>t.applyMatrix3(yf).convertLinearToSRGB()}},q0=new Set([Di,Ta]),it={enabled:!0,_workingColorSpace:Di,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!q0.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=es[e].toReference,r=es[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return es[t].primaries},getTransfer:function(t){return t===Ei?Jo:es[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(es[e].luminanceCoefficients)}};function Br(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Ka(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let fr;class $0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{fr===void 0&&(fr=na("canvas")),fr.width=e.width,fr.height=e.height;const i=fr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=fr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=na("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Br(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Br(n[i]/255)*255):n[i]=Br(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let K0=0;class Qd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:K0++}),this.uuid=ks(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ya(r[o].image)):s.push(Ya(r[o]))}else s=Ya(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Ya(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?$0.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Y0=0;class Jt extends Yr{constructor(e=Jt.DEFAULT_IMAGE,n=Jt.DEFAULT_MAPPING,i=Yi,r=Yi,s=Mn,o=ji,a=Tn,l=ui,c=Jt.DEFAULT_ANISOTROPY,u=Ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Y0++}),this.uuid=ks(),this.name="",this.source=new Qd(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==kd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ec:e.x=e.x-Math.floor(e.x);break;case Yi:e.x=e.x<0?0:1;break;case tc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ec:e.y=e.y-Math.floor(e.y);break;case Yi:e.y=e.y<0?0:1;break;case tc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Jt.DEFAULT_IMAGE=null;Jt.DEFAULT_MAPPING=kd;Jt.DEFAULT_ANISOTROPY=1;class ut{constructor(e=0,n=0,i=0,r=1){ut.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],v=l[9],y=l[2],p=l[6],m=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-y)<.01&&Math.abs(v-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+y)<.1&&Math.abs(v+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const S=(c+1)/2,M=(d+1)/2,P=(m+1)/2,C=(u+h)/4,R=(f+y)/4,L=(v+p)/4;return S>M&&S>P?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=C/i,s=R/i):M>P?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=C/r,s=L/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=R/s,r=L/s),this.set(i,r,s,n),this}let b=Math.sqrt((p-v)*(p-v)+(f-y)*(f-y)+(h-u)*(h-u));return Math.abs(b)<.001&&(b=1),this.x=(p-v)/b,this.y=(f-y)/b,this.z=(h-u)/b,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class j0 extends Yr{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new ut(0,0,e,n),this.scissorTest=!1,this.viewport=new ut(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Jt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Qd(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ir extends j0{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class ep extends Jt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=pn,this.minFilter=pn,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Z0 extends Jt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=pn,this.minFilter=pn,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hs{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[o+0],d=s[o+1],v=s[o+2],y=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f;return}if(a===1){e[n+0]=h,e[n+1]=d,e[n+2]=v,e[n+3]=y;return}if(f!==y||l!==h||c!==d||u!==v){let p=1-a;const m=l*h+c*d+u*v+f*y,b=m>=0?1:-1,S=1-m*m;if(S>Number.EPSILON){const P=Math.sqrt(S),C=Math.atan2(P,m*b);p=Math.sin(p*C)/P,a=Math.sin(a*C)/P}const M=a*b;if(l=l*p+h*M,c=c*p+d*M,u=u*p+v*M,f=f*p+y*M,p===1-a){const P=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=P,c*=P,u*=P,f*=P}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],h=s[o+1],d=s[o+2],v=s[o+3];return e[n]=a*v+u*f+l*d-c*h,e[n+1]=l*v+u*h+c*f-a*d,e[n+2]=c*v+u*d+a*h-l*f,e[n+3]=u*v-a*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),h=l(i/2),d=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*d*v,this._y=c*d*f-h*u*v,this._z=c*u*v+h*d*f,this._w=c*u*f-h*d*v;break;case"YXZ":this._x=h*u*f+c*d*v,this._y=c*d*f-h*u*v,this._z=c*u*v-h*d*f,this._w=c*u*f+h*d*v;break;case"ZXY":this._x=h*u*f-c*d*v,this._y=c*d*f+h*u*v,this._z=c*u*v+h*d*f,this._w=c*u*f-h*d*v;break;case"ZYX":this._x=h*u*f-c*d*v,this._y=c*d*f+h*u*v,this._z=c*u*v-h*d*f,this._w=c*u*f+h*d*v;break;case"YZX":this._x=h*u*f+c*d*v,this._y=c*d*f+h*u*v,this._z=c*u*v-h*d*f,this._w=c*u*f-h*d*v;break;case"XZY":this._x=h*u*f-c*d*v,this._y=c*d*f-h*u*v,this._z=c*u*v+h*d*f,this._w=c*u*f+h*d*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],f=n[10],h=i+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(i>a&&i>f){const d=2*Math.sqrt(1+i-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-i-f);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-i-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Yt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-n;return this._w=d*o+n*this._w,this._x=d*i+n*this._x,this._y=d*r+n*this._y,this._z=d*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-n)*u)/c,h=Math.sin(n*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,n=0,i=0){F.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Mf.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Mf.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ja.copy(this).projectOnVector(e),this.sub(ja)}reflect(e){return this.sub(ja.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ja=new F,Mf=new Hs;class Gs{constructor(e=new F(1/0,1/0,1/0),n=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(vn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(vn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=vn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,vn):vn.fromBufferAttribute(s,o),vn.applyMatrix4(e.matrixWorld),this.expandByPoint(vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Qs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Qs.copy(i.boundingBox)),Qs.applyMatrix4(e.matrixWorld),this.union(Qs)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,vn),vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ts),eo.subVectors(this.max,ts),hr.subVectors(e.a,ts),dr.subVectors(e.b,ts),pr.subVectors(e.c,ts),mi.subVectors(dr,hr),gi.subVectors(pr,dr),Bi.subVectors(hr,pr);let n=[0,-mi.z,mi.y,0,-gi.z,gi.y,0,-Bi.z,Bi.y,mi.z,0,-mi.x,gi.z,0,-gi.x,Bi.z,0,-Bi.x,-mi.y,mi.x,0,-gi.y,gi.x,0,-Bi.y,Bi.x,0];return!Za(n,hr,dr,pr,eo)||(n=[1,0,0,0,1,0,0,0,1],!Za(n,hr,dr,pr,eo))?!1:(to.crossVectors(mi,gi),n=[to.x,to.y,to.z],Za(n,hr,dr,pr,eo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Xn=[new F,new F,new F,new F,new F,new F,new F,new F],vn=new F,Qs=new Gs,hr=new F,dr=new F,pr=new F,mi=new F,gi=new F,Bi=new F,ts=new F,eo=new F,to=new F,ki=new F;function Za(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){ki.fromArray(t,s);const a=r.x*Math.abs(ki.x)+r.y*Math.abs(ki.y)+r.z*Math.abs(ki.z),l=e.dot(ki),c=n.dot(ki),u=i.dot(ki);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const J0=new Gs,ns=new F,Ja=new F;class ru{constructor(e=new F,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):J0.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ns.subVectors(e,this.center);const n=ns.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ns,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ja.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ns.copy(e.center).add(Ja)),this.expandByPoint(ns.copy(e.center).sub(Ja))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const qn=new F,Qa=new F,no=new F,_i=new F,el=new F,io=new F,tl=new F;class Q0{constructor(e=new F,n=new F(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=qn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(qn.copy(this.origin).addScaledVector(this.direction,n),qn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Qa.copy(e).add(n).multiplyScalar(.5),no.copy(n).sub(e).normalize(),_i.copy(this.origin).sub(Qa);const s=e.distanceTo(n)*.5,o=-this.direction.dot(no),a=_i.dot(this.direction),l=-_i.dot(no),c=_i.lengthSq(),u=Math.abs(1-o*o);let f,h,d,v;if(u>0)if(f=o*l-a,h=o*a-l,v=s*u,f>=0)if(h>=-v)if(h<=v){const y=1/u;f*=y,h*=y,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-v?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=v?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Qa).addScaledVector(no,h),d}intersectSphere(e,n){qn.subVectors(e.center,this.origin);const i=qn.dot(this.direction),r=qn.dot(qn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,qn)!==null}intersectTriangle(e,n,i,r,s){el.subVectors(n,e),io.subVectors(i,e),tl.crossVectors(el,io);let o=this.direction.dot(tl),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;_i.subVectors(this.origin,e);const l=a*this.direction.dot(io.crossVectors(_i,io));if(l<0)return null;const c=a*this.direction.dot(el.cross(_i));if(c<0||l+c>o)return null;const u=-a*_i.dot(tl);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class gt{constructor(e,n,i,r,s,o,a,l,c,u,f,h,d,v,y,p){gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,f,h,d,v,y,p)}set(e,n,i,r,s,o,a,l,c,u,f,h,d,v,y,p){const m=this.elements;return m[0]=e,m[4]=n,m[8]=i,m[12]=r,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=f,m[14]=h,m[3]=d,m[7]=v,m[11]=y,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/mr.setFromMatrixColumn(e,0).length(),s=1/mr.setFromMatrixColumn(e,1).length(),o=1/mr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,d=o*f,v=a*u,y=a*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=d+v*c,n[5]=h-y*c,n[9]=-a*l,n[2]=y-h*c,n[6]=v+d*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,v=c*u,y=c*f;n[0]=h+y*a,n[4]=v*a-d,n[8]=o*c,n[1]=o*f,n[5]=o*u,n[9]=-a,n[2]=d*a-v,n[6]=y+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,v=c*u,y=c*f;n[0]=h-y*a,n[4]=-o*f,n[8]=v+d*a,n[1]=d+v*a,n[5]=o*u,n[9]=y-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*u,d=o*f,v=a*u,y=a*f;n[0]=l*u,n[4]=v*c-d,n[8]=h*c+y,n[1]=l*f,n[5]=y*c+h,n[9]=d*c-v,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,d=o*c,v=a*l,y=a*c;n[0]=l*u,n[4]=y-h*f,n[8]=v*f+d,n[1]=f,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=d*f+v,n[10]=h-y*f}else if(e.order==="XZY"){const h=o*l,d=o*c,v=a*l,y=a*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=h*f+y,n[5]=o*u,n[9]=d*f-v,n[2]=v*f-d,n[6]=a*u,n[10]=y*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ev,e,tv)}lookAt(e,n,i){const r=this.elements;return tn.subVectors(e,n),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),vi.crossVectors(i,tn),vi.lengthSq()===0&&(Math.abs(i.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),vi.crossVectors(i,tn)),vi.normalize(),ro.crossVectors(tn,vi),r[0]=vi.x,r[4]=ro.x,r[8]=tn.x,r[1]=vi.y,r[5]=ro.y,r[9]=tn.y,r[2]=vi.z,r[6]=ro.z,r[10]=tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],d=i[13],v=i[2],y=i[6],p=i[10],m=i[14],b=i[3],S=i[7],M=i[11],P=i[15],C=r[0],R=r[4],L=r[8],j=r[12],x=r[1],T=r[5],$=r[9],K=r[13],Z=r[2],oe=r[6],z=r[10],Y=r[14],k=r[3],ge=r[7],ve=r[11],Se=r[15];return s[0]=o*C+a*x+l*Z+c*k,s[4]=o*R+a*T+l*oe+c*ge,s[8]=o*L+a*$+l*z+c*ve,s[12]=o*j+a*K+l*Y+c*Se,s[1]=u*C+f*x+h*Z+d*k,s[5]=u*R+f*T+h*oe+d*ge,s[9]=u*L+f*$+h*z+d*ve,s[13]=u*j+f*K+h*Y+d*Se,s[2]=v*C+y*x+p*Z+m*k,s[6]=v*R+y*T+p*oe+m*ge,s[10]=v*L+y*$+p*z+m*ve,s[14]=v*j+y*K+p*Y+m*Se,s[3]=b*C+S*x+M*Z+P*k,s[7]=b*R+S*T+M*oe+P*ge,s[11]=b*L+S*$+M*z+P*ve,s[15]=b*j+S*K+M*Y+P*Se,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],v=e[3],y=e[7],p=e[11],m=e[15];return v*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*d-i*l*d)+y*(+n*l*d-n*c*h+s*o*h-r*o*d+r*c*u-s*l*u)+p*(+n*c*f-n*a*d-s*o*f+i*o*d+s*a*u-i*c*u)+m*(-r*a*u-n*l*f+n*a*h+r*o*f-i*o*h+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],v=e[12],y=e[13],p=e[14],m=e[15],b=f*p*c-y*h*c+y*l*d-a*p*d-f*l*m+a*h*m,S=v*h*c-u*p*c-v*l*d+o*p*d+u*l*m-o*h*m,M=u*y*c-v*f*c+v*a*d-o*y*d-u*a*m+o*f*m,P=v*f*l-u*y*l-v*a*h+o*y*h+u*a*p-o*f*p,C=n*b+i*S+r*M+s*P;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/C;return e[0]=b*R,e[1]=(y*h*s-f*p*s-y*r*d+i*p*d+f*r*m-i*h*m)*R,e[2]=(a*p*s-y*l*s+y*r*c-i*p*c-a*r*m+i*l*m)*R,e[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*d-i*l*d)*R,e[4]=S*R,e[5]=(u*p*s-v*h*s+v*r*d-n*p*d-u*r*m+n*h*m)*R,e[6]=(v*l*s-o*p*s-v*r*c+n*p*c+o*r*m-n*l*m)*R,e[7]=(o*h*s-u*l*s+u*r*c-n*h*c-o*r*d+n*l*d)*R,e[8]=M*R,e[9]=(v*f*s-u*y*s-v*i*d+n*y*d+u*i*m-n*f*m)*R,e[10]=(o*y*s-v*a*s+v*i*c-n*y*c-o*i*m+n*a*m)*R,e[11]=(u*a*s-o*f*s-u*i*c+n*f*c+o*i*d-n*a*d)*R,e[12]=P*R,e[13]=(u*y*r-v*f*r+v*i*h-n*y*h-u*i*p+n*f*p)*R,e[14]=(v*a*r-o*y*r-v*i*l+n*y*l+o*i*p-n*a*p)*R,e[15]=(o*f*r-u*a*r+u*i*l-n*f*l-o*i*h+n*a*h)*R,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,f=a+a,h=s*c,d=s*u,v=s*f,y=o*u,p=o*f,m=a*f,b=l*c,S=l*u,M=l*f,P=i.x,C=i.y,R=i.z;return r[0]=(1-(y+m))*P,r[1]=(d+M)*P,r[2]=(v-S)*P,r[3]=0,r[4]=(d-M)*C,r[5]=(1-(h+m))*C,r[6]=(p+b)*C,r[7]=0,r[8]=(v+S)*R,r[9]=(p-b)*R,r[10]=(1-(h+y))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=mr.set(r[0],r[1],r[2]).length();const o=mr.set(r[4],r[5],r[6]).length(),a=mr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],xn.copy(this);const c=1/s,u=1/o,f=1/a;return xn.elements[0]*=c,xn.elements[1]*=c,xn.elements[2]*=c,xn.elements[4]*=u,xn.elements[5]*=u,xn.elements[6]*=u,xn.elements[8]*=f,xn.elements[9]*=f,xn.elements[10]*=f,n.setFromRotationMatrix(xn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=ri){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),f=(n+e)/(n-e),h=(i+r)/(i-r);let d,v;if(a===ri)d=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===ta)d=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=ri){const l=this.elements,c=1/(n-e),u=1/(i-r),f=1/(o-s),h=(n+e)*c,d=(i+r)*u;let v,y;if(a===ri)v=(o+s)*f,y=-2*f;else if(a===ta)v=s*f,y=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=y,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const mr=new F,xn=new gt,ev=new F(0,0,0),tv=new F(1,1,1),vi=new F,ro=new F,tn=new F,Ef=new gt,Tf=new Hs;class Gn{constructor(e=0,n=0,i=0,r=Gn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],d=r[10];switch(n){case"XYZ":this._y=Math.asin(Yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Yt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Yt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Yt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Yt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Ef.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ef,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Tf.setFromEuler(this),this.setFromQuaternion(Tf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gn.DEFAULT_ORDER="XYZ";class tp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let nv=0;const bf=new F,gr=new Hs,$n=new gt,so=new F,is=new F,iv=new F,rv=new Hs,Af=new F(1,0,0),wf=new F(0,1,0),Rf=new F(0,0,1),Cf={type:"added"},sv={type:"removed"},_r={type:"childadded",child:null},nl={type:"childremoved",child:null};class It extends Yr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nv++}),this.uuid=ks(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=It.DEFAULT_UP.clone();const e=new F,n=new Gn,i=new Hs,r=new F(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new gt},normalMatrix:{value:new Xe}}),this.matrix=new gt,this.matrixWorld=new gt,this.matrixAutoUpdate=It.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return gr.setFromAxisAngle(e,n),this.quaternion.multiply(gr),this}rotateOnWorldAxis(e,n){return gr.setFromAxisAngle(e,n),this.quaternion.premultiply(gr),this}rotateX(e){return this.rotateOnAxis(Af,e)}rotateY(e){return this.rotateOnAxis(wf,e)}rotateZ(e){return this.rotateOnAxis(Rf,e)}translateOnAxis(e,n){return bf.copy(e).applyQuaternion(this.quaternion),this.position.add(bf.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Af,e)}translateY(e){return this.translateOnAxis(wf,e)}translateZ(e){return this.translateOnAxis(Rf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($n.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?so.copy(e):so.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),is.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$n.lookAt(is,so,this.up):$n.lookAt(so,is,this.up),this.quaternion.setFromRotationMatrix($n),r&&($n.extractRotation(r.matrixWorld),gr.setFromRotationMatrix($n),this.quaternion.premultiply(gr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Cf),_r.child=e,this.dispatchEvent(_r),_r.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(sv),nl.child=e,this.dispatchEvent(nl),nl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$n.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$n.multiply(e.parent.matrixWorld)),e.applyMatrix4($n),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Cf),_r.child=e,this.dispatchEvent(_r),_r.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(is,e,iv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(is,rv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),d=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}It.DEFAULT_UP=new F(0,1,0);It.DEFAULT_MATRIX_AUTO_UPDATE=!0;It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yn=new F,Kn=new F,il=new F,Yn=new F,vr=new F,xr=new F,Pf=new F,rl=new F,sl=new F,ol=new F,al=new ut,ll=new ut,cl=new ut;class En{constructor(e=new F,n=new F,i=new F){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),yn.subVectors(e,n),r.cross(yn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){yn.subVectors(r,n),Kn.subVectors(i,n),il.subVectors(e,n);const o=yn.dot(yn),a=yn.dot(Kn),l=yn.dot(il),c=Kn.dot(Kn),u=Kn.dot(il),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,d=(c*l-a*u)*h,v=(o*u-a*l)*h;return s.set(1-d-v,v,d)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Yn)===null?!1:Yn.x>=0&&Yn.y>=0&&Yn.x+Yn.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Yn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Yn.x),l.addScaledVector(o,Yn.y),l.addScaledVector(a,Yn.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return al.setScalar(0),ll.setScalar(0),cl.setScalar(0),al.fromBufferAttribute(e,n),ll.fromBufferAttribute(e,i),cl.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(al,s.x),o.addScaledVector(ll,s.y),o.addScaledVector(cl,s.z),o}static isFrontFacing(e,n,i,r){return yn.subVectors(i,n),Kn.subVectors(e,n),yn.cross(Kn).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yn.subVectors(this.c,this.b),Kn.subVectors(this.a,this.b),yn.cross(Kn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return En.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return En.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return En.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return En.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return En.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;vr.subVectors(r,i),xr.subVectors(s,i),rl.subVectors(e,i);const l=vr.dot(rl),c=xr.dot(rl);if(l<=0&&c<=0)return n.copy(i);sl.subVectors(e,r);const u=vr.dot(sl),f=xr.dot(sl);if(u>=0&&f<=u)return n.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(vr,o);ol.subVectors(e,s);const d=vr.dot(ol),v=xr.dot(ol);if(v>=0&&d<=v)return n.copy(s);const y=d*c-l*v;if(y<=0&&c>=0&&v<=0)return a=c/(c-v),n.copy(i).addScaledVector(xr,a);const p=u*v-d*f;if(p<=0&&f-u>=0&&d-v>=0)return Pf.subVectors(s,r),a=(f-u)/(f-u+(d-v)),n.copy(r).addScaledVector(Pf,a);const m=1/(p+y+h);return o=y*m,a=h*m,n.copy(i).addScaledVector(vr,o).addScaledVector(xr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const np={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xi={h:0,s:0,l:0},oo={h:0,s:0,l:0};function ul(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ke{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Sn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=it.workingColorSpace){return this.r=e,this.g=n,this.b=i,it.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=it.workingColorSpace){if(e=G0(e,1),n=Yt(n,0,1),i=Yt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=ul(o,s,e+1/3),this.g=ul(o,s,e),this.b=ul(o,s,e-1/3)}return it.toWorkingColorSpace(this,r),this}setStyle(e,n=Sn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Sn){const i=np[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Br(e.r),this.g=Br(e.g),this.b=Br(e.b),this}copyLinearToSRGB(e){return this.r=Ka(e.r),this.g=Ka(e.g),this.b=Ka(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Sn){return it.fromWorkingColorSpace(Ot.copy(this),e),Math.round(Yt(Ot.r*255,0,255))*65536+Math.round(Yt(Ot.g*255,0,255))*256+Math.round(Yt(Ot.b*255,0,255))}getHexString(e=Sn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=it.workingColorSpace){it.fromWorkingColorSpace(Ot.copy(this),n);const i=Ot.r,r=Ot.g,s=Ot.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=it.workingColorSpace){return it.fromWorkingColorSpace(Ot.copy(this),n),e.r=Ot.r,e.g=Ot.g,e.b=Ot.b,e}getStyle(e=Sn){it.fromWorkingColorSpace(Ot.copy(this),e);const n=Ot.r,i=Ot.g,r=Ot.b;return e!==Sn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(xi),this.setHSL(xi.h+e,xi.s+n,xi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(xi),e.getHSL(oo);const i=qa(xi.h,oo.h,n),r=qa(xi.s,oo.s,n),s=qa(xi.l,oo.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ot=new Ke;Ke.NAMES=np;let ov=0;class zs extends Yr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ov++}),this.uuid=ks(),this.name="",this.type="Material",this.blending=Or,this.side=Pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vl,this.blendDst=Wl,this.blendEquation=$i,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=Vr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ur,this.stencilZFail=ur,this.stencilZPass=ur,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Or&&(i.blending=this.blending),this.side!==Pi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Vl&&(i.blendSrc=this.blendSrc),this.blendDst!==Wl&&(i.blendDst=this.blendDst),this.blendEquation!==$i&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Vr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ur&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ur&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ur&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ia extends zs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.combine=Bd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Mt=new F,ao=new qe;class Hn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=_f,this.updateRanges=[],this.gpuType=ii,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)ao.fromBufferAttribute(this,n),ao.applyMatrix3(e),this.setXY(n,ao.x,ao.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.applyMatrix3(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.applyMatrix4(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.applyNormalMatrix(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.transformDirection(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Qr(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=$t(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Qr(n,this.array)),n}setX(e,n){return this.normalized&&(n=$t(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Qr(n,this.array)),n}setY(e,n){return this.normalized&&(n=$t(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Qr(n,this.array)),n}setZ(e,n){return this.normalized&&(n=$t(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Qr(n,this.array)),n}setW(e,n){return this.normalized&&(n=$t(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=$t(n,this.array),i=$t(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=$t(n,this.array),i=$t(i,this.array),r=$t(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=$t(n,this.array),i=$t(i,this.array),r=$t(r,this.array),s=$t(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==_f&&(e.usage=this.usage),e}}class ip extends Hn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class rp extends Hn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class cn extends Hn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let av=0;const fn=new gt,fl=new It,yr=new F,nn=new Gs,rs=new Gs,Ct=new F;class di extends Yr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:av++}),this.uuid=ks(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Jd(e)?rp:ip)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Xe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return fn.makeRotationFromQuaternion(e),this.applyMatrix4(fn),this}rotateX(e){return fn.makeRotationX(e),this.applyMatrix4(fn),this}rotateY(e){return fn.makeRotationY(e),this.applyMatrix4(fn),this}rotateZ(e){return fn.makeRotationZ(e),this.applyMatrix4(fn),this}translate(e,n,i){return fn.makeTranslation(e,n,i),this.applyMatrix4(fn),this}scale(e,n,i){return fn.makeScale(e,n,i),this.applyMatrix4(fn),this}lookAt(e){return fl.lookAt(e),fl.updateMatrix(),this.applyMatrix4(fl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yr).negate(),this.translate(yr.x,yr.y,yr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new cn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gs);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];nn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ru);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const i=this.boundingSphere.center;if(nn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];rs.setFromBufferAttribute(a),this.morphTargetsRelative?(Ct.addVectors(nn.min,rs.min),nn.expandByPoint(Ct),Ct.addVectors(nn.max,rs.max),nn.expandByPoint(Ct)):(nn.expandByPoint(rs.min),nn.expandByPoint(rs.max))}nn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ct.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ct));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ct.fromBufferAttribute(a,c),l&&(yr.fromBufferAttribute(e,c),Ct.add(yr)),r=Math.max(r,i.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Hn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<i.count;L++)a[L]=new F,l[L]=new F;const c=new F,u=new F,f=new F,h=new qe,d=new qe,v=new qe,y=new F,p=new F;function m(L,j,x){c.fromBufferAttribute(i,L),u.fromBufferAttribute(i,j),f.fromBufferAttribute(i,x),h.fromBufferAttribute(s,L),d.fromBufferAttribute(s,j),v.fromBufferAttribute(s,x),u.sub(c),f.sub(c),d.sub(h),v.sub(h);const T=1/(d.x*v.y-v.x*d.y);isFinite(T)&&(y.copy(u).multiplyScalar(v.y).addScaledVector(f,-d.y).multiplyScalar(T),p.copy(f).multiplyScalar(d.x).addScaledVector(u,-v.x).multiplyScalar(T),a[L].add(y),a[j].add(y),a[x].add(y),l[L].add(p),l[j].add(p),l[x].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let L=0,j=b.length;L<j;++L){const x=b[L],T=x.start,$=x.count;for(let K=T,Z=T+$;K<Z;K+=3)m(e.getX(K+0),e.getX(K+1),e.getX(K+2))}const S=new F,M=new F,P=new F,C=new F;function R(L){P.fromBufferAttribute(r,L),C.copy(P);const j=a[L];S.copy(j),S.sub(P.multiplyScalar(P.dot(j))).normalize(),M.crossVectors(C,j);const T=M.dot(l[L])<0?-1:1;o.setXYZW(L,S.x,S.y,S.z,T)}for(let L=0,j=b.length;L<j;++L){const x=b[L],T=x.start,$=x.count;for(let K=T,Z=T+$;K<Z;K+=3)R(e.getX(K+0)),R(e.getX(K+1)),R(e.getX(K+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Hn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const r=new F,s=new F,o=new F,a=new F,l=new F,c=new F,u=new F,f=new F;if(e)for(let h=0,d=e.count;h<d;h+=3){const v=e.getX(h+0),y=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,y),o.fromBufferAttribute(n,p),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,p),a.add(u),l.add(u),c.add(u),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,d=n.count;h<d;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ct.fromBufferAttribute(e,n),Ct.normalize(),e.setXYZ(n,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let d=0,v=0;for(let y=0,p=l.length;y<p;y++){a.isInterleavedBufferAttribute?d=l[y]*a.data.stride+a.offset:d=l[y]*u;for(let m=0;m<u;m++)h[v++]=c[d++]}return new Hn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new di,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,i);l.push(d)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Lf=new gt,Hi=new Q0,lo=new ru,Df=new F,co=new F,uo=new F,fo=new F,hl=new F,ho=new F,If=new F,po=new F;class Vt extends It{constructor(e=new di,n=new ia){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){ho.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(hl.fromBufferAttribute(f,e),o?ho.addScaledVector(hl,u):ho.addScaledVector(hl.sub(n),u))}n.add(ho)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),lo.copy(i.boundingSphere),lo.applyMatrix4(s),Hi.copy(e.ray).recast(e.near),!(lo.containsPoint(Hi.origin)===!1&&(Hi.intersectSphere(lo,Df)===null||Hi.origin.distanceToSquared(Df)>(e.far-e.near)**2))&&(Lf.copy(s).invert(),Hi.copy(e.ray).applyMatrix4(Lf),!(i.boundingBox!==null&&Hi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Hi)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,y=h.length;v<y;v++){const p=h[v],m=o[p.materialIndex],b=Math.max(p.start,d.start),S=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let M=b,P=S;M<P;M+=3){const C=a.getX(M),R=a.getX(M+1),L=a.getX(M+2);r=mo(this,m,e,i,c,u,f,C,R,L),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const v=Math.max(0,d.start),y=Math.min(a.count,d.start+d.count);for(let p=v,m=y;p<m;p+=3){const b=a.getX(p),S=a.getX(p+1),M=a.getX(p+2);r=mo(this,o,e,i,c,u,f,b,S,M),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,y=h.length;v<y;v++){const p=h[v],m=o[p.materialIndex],b=Math.max(p.start,d.start),S=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let M=b,P=S;M<P;M+=3){const C=M,R=M+1,L=M+2;r=mo(this,m,e,i,c,u,f,C,R,L),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const v=Math.max(0,d.start),y=Math.min(l.count,d.start+d.count);for(let p=v,m=y;p<m;p+=3){const b=p,S=p+1,M=p+2;r=mo(this,o,e,i,c,u,f,b,S,M),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function lv(t,e,n,i,r,s,o,a){let l;if(e.side===Zt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Pi,a),l===null)return null;po.copy(a),po.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(po);return c<n.near||c>n.far?null:{distance:c,point:po.clone(),object:t}}function mo(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,co),t.getVertexPosition(l,uo),t.getVertexPosition(c,fo);const u=lv(t,e,n,i,co,uo,fo,If);if(u){const f=new F;En.getBarycoord(If,co,uo,fo,f),r&&(u.uv=En.getInterpolatedAttribute(r,a,l,c,f,new qe)),s&&(u.uv1=En.getInterpolatedAttribute(s,a,l,c,f,new qe)),o&&(u.normal=En.getInterpolatedAttribute(o,a,l,c,f,new F),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new F,materialIndex:0};En.getNormal(co,uo,fo,h.normal),u.face=h,u.barycoord=f}return u}class rr extends di{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,d=0;v("z","y","x",-1,-1,i,n,e,o,s,0),v("z","y","x",1,-1,i,n,-e,o,s,1),v("x","z","y",1,1,e,i,n,r,o,2),v("x","z","y",1,-1,e,i,-n,r,o,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new cn(c,3)),this.setAttribute("normal",new cn(u,3)),this.setAttribute("uv",new cn(f,2));function v(y,p,m,b,S,M,P,C,R,L,j){const x=M/R,T=P/L,$=M/2,K=P/2,Z=C/2,oe=R+1,z=L+1;let Y=0,k=0;const ge=new F;for(let ve=0;ve<z;ve++){const Se=ve*T-K;for(let Ge=0;Ge<oe;Ge++){const $e=Ge*x-$;ge[y]=$e*b,ge[p]=Se*S,ge[m]=Z,c.push(ge.x,ge.y,ge.z),ge[y]=0,ge[p]=0,ge[m]=C>0?1:-1,u.push(ge.x,ge.y,ge.z),f.push(Ge/R),f.push(1-ve/L),Y+=1}}for(let ve=0;ve<L;ve++)for(let Se=0;Se<R;Se++){const Ge=h+Se+oe*ve,$e=h+Se+oe*(ve+1),ie=h+(Se+1)+oe*(ve+1),V=h+(Se+1)+oe*ve;l.push(Ge,$e,V),l.push($e,ie,V),k+=6}a.addGroup(d,k,j),d+=k,h+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Kr(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Gt(t){const e={};for(let n=0;n<t.length;n++){const i=Kr(t[n]);for(const r in i)e[r]=i[r]}return e}function cv(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function sp(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}const uv={clone:Kr,merge:Gt};var fv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Li extends zs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fv,this.fragmentShader=hv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Kr(e.uniforms),this.uniformsGroups=cv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class op extends It{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gt,this.projectionMatrix=new gt,this.projectionMatrixInverse=new gt,this.coordinateSystem=ri}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const yi=new F,Uf=new qe,Nf=new qe;class rn extends op{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Rc*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Xa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Rc*2*Math.atan(Math.tan(Xa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(yi.x,yi.y).multiplyScalar(-e/yi.z),yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(yi.x,yi.y).multiplyScalar(-e/yi.z)}getViewSize(e,n){return this.getViewBounds(e,Uf,Nf),n.subVectors(Nf,Uf)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Xa*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Sr=-90,Mr=1;class dv extends It{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new rn(Sr,Mr,e,n);r.layers=this.layers,this.add(r);const s=new rn(Sr,Mr,e,n);s.layers=this.layers,this.add(s);const o=new rn(Sr,Mr,e,n);o.layers=this.layers,this.add(o);const a=new rn(Sr,Mr,e,n);a.layers=this.layers,this.add(a);const l=new rn(Sr,Mr,e,n);l.layers=this.layers,this.add(l);const c=new rn(Sr,Mr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===ri)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ta)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(f,h,d),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class ap extends Jt{constructor(e,n,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:Wr,super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class pv extends ir{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new ap(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Mn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new rr(5,5,5),s=new Li({name:"CubemapFromEquirect",uniforms:Kr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Zt,blending:Ai});s.uniforms.tEquirect.value=n;const o=new Vt(r,s),a=n.minFilter;return n.minFilter===ji&&(n.minFilter=Mn),new dv(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const dl=new F,mv=new F,gv=new Xe;class Xi{constructor(e=new F(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=dl.subVectors(i,n).cross(mv.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(dl),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||gv.getNormalMatrix(e),r=this.coplanarPoint(dl).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gi=new ru,go=new F;class su{constructor(e=new Xi,n=new Xi,i=new Xi,r=new Xi,s=new Xi,o=new Xi){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ri){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],d=r[8],v=r[9],y=r[10],p=r[11],m=r[12],b=r[13],S=r[14],M=r[15];if(i[0].setComponents(l-s,h-c,p-d,M-m).normalize(),i[1].setComponents(l+s,h+c,p+d,M+m).normalize(),i[2].setComponents(l+o,h+u,p+v,M+b).normalize(),i[3].setComponents(l-o,h-u,p-v,M-b).normalize(),i[4].setComponents(l-a,h-f,p-y,M-S).normalize(),n===ri)i[5].setComponents(l+a,h+f,p+y,M+S).normalize();else if(n===ta)i[5].setComponents(a,f,y,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Gi.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gi)}intersectsSprite(e){return Gi.center.set(0,0,0),Gi.radius=.7071067811865476,Gi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gi)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(go.x=r.normal.x>0?e.max.x:e.min.x,go.y=r.normal.y>0?e.max.y:e.min.y,go.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(go)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function lp(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function _v(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=t.HALF_FLOAT:d=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=t.SHORT;else if(c instanceof Uint32Array)d=t.UNSIGNED_INT;else if(c instanceof Int32Array)d=t.INT;else if(c instanceof Int8Array)d=t.BYTE;else if(c instanceof Uint8Array)d=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(t.bindBuffer(c,a),f.length===0)t.bufferSubData(c,0,u);else{f.sort((d,v)=>d.start-v.start);let h=0;for(let d=1;d<f.length;d++){const v=f[h],y=f[d];y.start<=v.start+v.count+1?v.count=Math.max(v.count,y.start+y.count-v.start):(++h,f[h]=y)}f.length=h+1;for(let d=0,v=f.length;d<v;d++){const y=f[d];t.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class Vs extends di{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,h=n/l,d=[],v=[],y=[],p=[];for(let m=0;m<u;m++){const b=m*h-o;for(let S=0;S<c;S++){const M=S*f-s;v.push(M,-b,0),y.push(0,0,1),p.push(S/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let b=0;b<a;b++){const S=b+c*m,M=b+c*(m+1),P=b+1+c*(m+1),C=b+1+c*m;d.push(S,M,C),d.push(M,P,C)}this.setIndex(d),this.setAttribute("position",new cn(v,3)),this.setAttribute("normal",new cn(y,3)),this.setAttribute("uv",new cn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vs(e.width,e.height,e.widthSegments,e.heightSegments)}}var vv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xv=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,yv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Sv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ev=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Tv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,bv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Av=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,wv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Rv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Cv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Pv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Lv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Dv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Iv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Uv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Nv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ov=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Fv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Bv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,kv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Hv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Gv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,zv=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Vv=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Wv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$v=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Kv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Yv=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,jv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Zv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Jv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Qv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ex=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,tx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ix=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ox=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ax=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ux=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,fx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,px=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,gx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,_x=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,vx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,xx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ex=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Tx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ax=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,wx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Cx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Px=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Lx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Dx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ix=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ux=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ox=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Fx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Hx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Gx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Vx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Wx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Xx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,$x=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Kx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Yx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Zx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Jx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Qx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,ey=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ty=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ny=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,iy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ry=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,sy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,oy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ay=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ly=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,uy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,fy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,hy=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,dy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,py=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,my=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,gy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _y=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vy=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yy=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,My=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ey=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ty=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,by=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ay=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,wy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ry=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cy=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Py=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ly=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Dy=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Iy=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Uy=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ny=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Oy=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fy=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,By=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ky=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gy=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,zy=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xy=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,qy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$y=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ky=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Yy=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,We={alphahash_fragment:vv,alphahash_pars_fragment:xv,alphamap_fragment:yv,alphamap_pars_fragment:Sv,alphatest_fragment:Mv,alphatest_pars_fragment:Ev,aomap_fragment:Tv,aomap_pars_fragment:bv,batching_pars_vertex:Av,batching_vertex:wv,begin_vertex:Rv,beginnormal_vertex:Cv,bsdfs:Pv,iridescence_fragment:Lv,bumpmap_pars_fragment:Dv,clipping_planes_fragment:Iv,clipping_planes_pars_fragment:Uv,clipping_planes_pars_vertex:Nv,clipping_planes_vertex:Ov,color_fragment:Fv,color_pars_fragment:Bv,color_pars_vertex:kv,color_vertex:Hv,common:Gv,cube_uv_reflection_fragment:zv,defaultnormal_vertex:Vv,displacementmap_pars_vertex:Wv,displacementmap_vertex:Xv,emissivemap_fragment:qv,emissivemap_pars_fragment:$v,colorspace_fragment:Kv,colorspace_pars_fragment:Yv,envmap_fragment:jv,envmap_common_pars_fragment:Zv,envmap_pars_fragment:Jv,envmap_pars_vertex:Qv,envmap_physical_pars_fragment:ux,envmap_vertex:ex,fog_vertex:tx,fog_pars_vertex:nx,fog_fragment:ix,fog_pars_fragment:rx,gradientmap_pars_fragment:sx,lightmap_pars_fragment:ox,lights_lambert_fragment:ax,lights_lambert_pars_fragment:lx,lights_pars_begin:cx,lights_toon_fragment:fx,lights_toon_pars_fragment:hx,lights_phong_fragment:dx,lights_phong_pars_fragment:px,lights_physical_fragment:mx,lights_physical_pars_fragment:gx,lights_fragment_begin:_x,lights_fragment_maps:vx,lights_fragment_end:xx,logdepthbuf_fragment:yx,logdepthbuf_pars_fragment:Sx,logdepthbuf_pars_vertex:Mx,logdepthbuf_vertex:Ex,map_fragment:Tx,map_pars_fragment:bx,map_particle_fragment:Ax,map_particle_pars_fragment:wx,metalnessmap_fragment:Rx,metalnessmap_pars_fragment:Cx,morphinstance_vertex:Px,morphcolor_vertex:Lx,morphnormal_vertex:Dx,morphtarget_pars_vertex:Ix,morphtarget_vertex:Ux,normal_fragment_begin:Nx,normal_fragment_maps:Ox,normal_pars_fragment:Fx,normal_pars_vertex:Bx,normal_vertex:kx,normalmap_pars_fragment:Hx,clearcoat_normal_fragment_begin:Gx,clearcoat_normal_fragment_maps:zx,clearcoat_pars_fragment:Vx,iridescence_pars_fragment:Wx,opaque_fragment:Xx,packing:qx,premultiplied_alpha_fragment:$x,project_vertex:Kx,dithering_fragment:Yx,dithering_pars_fragment:jx,roughnessmap_fragment:Zx,roughnessmap_pars_fragment:Jx,shadowmap_pars_fragment:Qx,shadowmap_pars_vertex:ey,shadowmap_vertex:ty,shadowmask_pars_fragment:ny,skinbase_vertex:iy,skinning_pars_vertex:ry,skinning_vertex:sy,skinnormal_vertex:oy,specularmap_fragment:ay,specularmap_pars_fragment:ly,tonemapping_fragment:cy,tonemapping_pars_fragment:uy,transmission_fragment:fy,transmission_pars_fragment:hy,uv_pars_fragment:dy,uv_pars_vertex:py,uv_vertex:my,worldpos_vertex:gy,background_vert:_y,background_frag:vy,backgroundCube_vert:xy,backgroundCube_frag:yy,cube_vert:Sy,cube_frag:My,depth_vert:Ey,depth_frag:Ty,distanceRGBA_vert:by,distanceRGBA_frag:Ay,equirect_vert:wy,equirect_frag:Ry,linedashed_vert:Cy,linedashed_frag:Py,meshbasic_vert:Ly,meshbasic_frag:Dy,meshlambert_vert:Iy,meshlambert_frag:Uy,meshmatcap_vert:Ny,meshmatcap_frag:Oy,meshnormal_vert:Fy,meshnormal_frag:By,meshphong_vert:ky,meshphong_frag:Hy,meshphysical_vert:Gy,meshphysical_frag:zy,meshtoon_vert:Vy,meshtoon_frag:Wy,points_vert:Xy,points_frag:qy,shadow_vert:$y,shadow_frag:Ky,sprite_vert:Yy,sprite_frag:jy},me={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},On={basic:{uniforms:Gt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:Gt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Ke(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:Gt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:Gt([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:Gt([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new Ke(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:Gt([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:Gt([me.points,me.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:Gt([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:Gt([me.common,me.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:Gt([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:Gt([me.sprite,me.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:Gt([me.common,me.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:Gt([me.lights,me.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};On.physical={uniforms:Gt([On.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const _o={r:0,b:0,g:0},zi=new Gn,Zy=new gt;function Jy(t,e,n,i,r,s,o){const a=new Ke(0);let l=s===!0?0:1,c,u,f=null,h=0,d=null;function v(b){let S=b.isScene===!0?b.background:null;return S&&S.isTexture&&(S=(b.backgroundBlurriness>0?n:e).get(S)),S}function y(b){let S=!1;const M=v(b);M===null?m(a,l):M&&M.isColor&&(m(M,1),S=!0);const P=t.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function p(b,S){const M=v(S);M&&(M.isCubeTexture||M.mapping===Ea)?(u===void 0&&(u=new Vt(new rr(1,1,1),new Li({name:"BackgroundCubeMaterial",uniforms:Kr(On.backgroundCube.uniforms),vertexShader:On.backgroundCube.vertexShader,fragmentShader:On.backgroundCube.fragmentShader,side:Zt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,C,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),zi.copy(S.backgroundRotation),zi.x*=-1,zi.y*=-1,zi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(zi.y*=-1,zi.z*=-1),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Zy.makeRotationFromEuler(zi)),u.material.toneMapped=it.getTransfer(M.colorSpace)!==mt,(f!==M||h!==M.version||d!==t.toneMapping)&&(u.material.needsUpdate=!0,f=M,h=M.version,d=t.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Vt(new Vs(2,2),new Li({name:"BackgroundMaterial",uniforms:Kr(On.background.uniforms),vertexShader:On.background.vertexShader,fragmentShader:On.background.fragmentShader,side:Pi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=it.getTransfer(M.colorSpace)!==mt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||h!==M.version||d!==t.toneMapping)&&(c.material.needsUpdate=!0,f=M,h=M.version,d=t.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function m(b,S){b.getRGB(_o,sp(t)),i.buffers.color.setClear(_o.r,_o.g,_o.b,S,o)}return{getClearColor:function(){return a},setClearColor:function(b,S=1){a.set(b),l=S,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,m(a,l)},render:y,addToRenderList:p}}function Qy(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(x,T,$,K,Z){let oe=!1;const z=f(K,$,T);s!==z&&(s=z,c(s.object)),oe=d(x,K,$,Z),oe&&v(x,K,$,Z),Z!==null&&e.update(Z,t.ELEMENT_ARRAY_BUFFER),(oe||o)&&(o=!1,M(x,T,$,K),Z!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function l(){return t.createVertexArray()}function c(x){return t.bindVertexArray(x)}function u(x){return t.deleteVertexArray(x)}function f(x,T,$){const K=$.wireframe===!0;let Z=i[x.id];Z===void 0&&(Z={},i[x.id]=Z);let oe=Z[T.id];oe===void 0&&(oe={},Z[T.id]=oe);let z=oe[K];return z===void 0&&(z=h(l()),oe[K]=z),z}function h(x){const T=[],$=[],K=[];for(let Z=0;Z<n;Z++)T[Z]=0,$[Z]=0,K[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:$,attributeDivisors:K,object:x,attributes:{},index:null}}function d(x,T,$,K){const Z=s.attributes,oe=T.attributes;let z=0;const Y=$.getAttributes();for(const k in Y)if(Y[k].location>=0){const ve=Z[k];let Se=oe[k];if(Se===void 0&&(k==="instanceMatrix"&&x.instanceMatrix&&(Se=x.instanceMatrix),k==="instanceColor"&&x.instanceColor&&(Se=x.instanceColor)),ve===void 0||ve.attribute!==Se||Se&&ve.data!==Se.data)return!0;z++}return s.attributesNum!==z||s.index!==K}function v(x,T,$,K){const Z={},oe=T.attributes;let z=0;const Y=$.getAttributes();for(const k in Y)if(Y[k].location>=0){let ve=oe[k];ve===void 0&&(k==="instanceMatrix"&&x.instanceMatrix&&(ve=x.instanceMatrix),k==="instanceColor"&&x.instanceColor&&(ve=x.instanceColor));const Se={};Se.attribute=ve,ve&&ve.data&&(Se.data=ve.data),Z[k]=Se,z++}s.attributes=Z,s.attributesNum=z,s.index=K}function y(){const x=s.newAttributes;for(let T=0,$=x.length;T<$;T++)x[T]=0}function p(x){m(x,0)}function m(x,T){const $=s.newAttributes,K=s.enabledAttributes,Z=s.attributeDivisors;$[x]=1,K[x]===0&&(t.enableVertexAttribArray(x),K[x]=1),Z[x]!==T&&(t.vertexAttribDivisor(x,T),Z[x]=T)}function b(){const x=s.newAttributes,T=s.enabledAttributes;for(let $=0,K=T.length;$<K;$++)T[$]!==x[$]&&(t.disableVertexAttribArray($),T[$]=0)}function S(x,T,$,K,Z,oe,z){z===!0?t.vertexAttribIPointer(x,T,$,Z,oe):t.vertexAttribPointer(x,T,$,K,Z,oe)}function M(x,T,$,K){y();const Z=K.attributes,oe=$.getAttributes(),z=T.defaultAttributeValues;for(const Y in oe){const k=oe[Y];if(k.location>=0){let ge=Z[Y];if(ge===void 0&&(Y==="instanceMatrix"&&x.instanceMatrix&&(ge=x.instanceMatrix),Y==="instanceColor"&&x.instanceColor&&(ge=x.instanceColor)),ge!==void 0){const ve=ge.normalized,Se=ge.itemSize,Ge=e.get(ge);if(Ge===void 0)continue;const $e=Ge.buffer,ie=Ge.type,V=Ge.bytesPerElement,se=ie===t.INT||ie===t.UNSIGNED_INT||ge.gpuType===Zc;if(ge.isInterleavedBufferAttribute){const pe=ge.data,Oe=pe.stride,Ue=ge.offset;if(pe.isInstancedInterleavedBuffer){for(let Ve=0;Ve<k.locationSize;Ve++)m(k.location+Ve,pe.meshPerAttribute);x.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let Ve=0;Ve<k.locationSize;Ve++)p(k.location+Ve);t.bindBuffer(t.ARRAY_BUFFER,$e);for(let Ve=0;Ve<k.locationSize;Ve++)S(k.location+Ve,Se/k.locationSize,ie,ve,Oe*V,(Ue+Se/k.locationSize*Ve)*V,se)}else{if(ge.isInstancedBufferAttribute){for(let pe=0;pe<k.locationSize;pe++)m(k.location+pe,ge.meshPerAttribute);x.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let pe=0;pe<k.locationSize;pe++)p(k.location+pe);t.bindBuffer(t.ARRAY_BUFFER,$e);for(let pe=0;pe<k.locationSize;pe++)S(k.location+pe,Se/k.locationSize,ie,ve,Se*V,Se/k.locationSize*pe*V,se)}}else if(z!==void 0){const ve=z[Y];if(ve!==void 0)switch(ve.length){case 2:t.vertexAttrib2fv(k.location,ve);break;case 3:t.vertexAttrib3fv(k.location,ve);break;case 4:t.vertexAttrib4fv(k.location,ve);break;default:t.vertexAttrib1fv(k.location,ve)}}}}b()}function P(){L();for(const x in i){const T=i[x];for(const $ in T){const K=T[$];for(const Z in K)u(K[Z].object),delete K[Z];delete T[$]}delete i[x]}}function C(x){if(i[x.id]===void 0)return;const T=i[x.id];for(const $ in T){const K=T[$];for(const Z in K)u(K[Z].object),delete K[Z];delete T[$]}delete i[x.id]}function R(x){for(const T in i){const $=i[T];if($[x.id]===void 0)continue;const K=$[x.id];for(const Z in K)u(K[Z].object),delete K[Z];delete $[x.id]}}function L(){j(),o=!0,s!==r&&(s=r,c(s.object))}function j(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:L,resetDefaultState:j,dispose:P,releaseStatesOfGeometry:C,releaseStatesOfProgram:R,initAttributes:y,enableAttribute:p,disableUnusedAttributes:b}}function eS(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,f){f!==0&&(t.drawArraysInstanced(i,c,u,f),n.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let d=0;for(let v=0;v<f;v++)d+=u[v];n.update(d,i,1)}function l(c,u,f,h){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let v=0;v<c.length;v++)o(c[v],u[v],h[v]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let v=0;for(let y=0;y<f;y++)v+=u[y];for(let y=0;y<h.length;y++)n.update(v,i,h[y])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function tS(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==Tn&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const L=R===Bs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==ui&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==ii&&!L)}function l(R){if(R==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=n.logarithmicDepthBuffer===!0,h=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(h===!0){const R=e.get("EXT_clip_control");R.clipControlEXT(R.LOWER_LEFT_EXT,R.ZERO_TO_ONE_EXT)}const d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_TEXTURE_SIZE),p=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),m=t.getParameter(t.MAX_VERTEX_ATTRIBS),b=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),S=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),P=v>0,C=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:d,maxVertexTextures:v,maxTextureSize:y,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:b,maxVaryings:S,maxFragmentUniforms:M,vertexTextures:P,maxSamples:C}}function nS(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Xi,a=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||i!==0||r;return r=h,i=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){n=u(f,h,0)},this.setState=function(f,h,d){const v=f.clippingPlanes,y=f.clipIntersection,p=f.clipShadows,m=t.get(f);if(!r||v===null||v.length===0||s&&!p)s?u(null):c();else{const b=s?0:i,S=b*4;let M=m.clippingState||null;l.value=M,M=u(v,h,S,d);for(let P=0;P!==S;++P)M[P]=n[P];m.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,d,v){const y=f!==null?f.length:0;let p=null;if(y!==0){if(p=l.value,v!==!0||p===null){const m=d+y*4,b=h.matrixWorldInverse;a.getNormalMatrix(b),(p===null||p.length<m)&&(p=new Float32Array(m));for(let S=0,M=d;S!==y;++S,M+=4)o.copy(f[S]).applyMatrix4(b,a),o.normal.toArray(p,M),p[M+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,p}}function iS(t){let e=new WeakMap;function n(o,a){return a===Jl?o.mapping=Wr:a===Ql&&(o.mapping=Xr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Jl||a===Ql)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new pv(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class cp extends op{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Cr=4,Of=[.125,.215,.35,.446,.526,.582],Ki=20,pl=new cp,Ff=new Ke;let ml=null,gl=0,_l=0,vl=!1;const qi=(1+Math.sqrt(5))/2,Er=1/qi,Bf=[new F(-qi,Er,0),new F(qi,Er,0),new F(-Er,0,qi),new F(Er,0,qi),new F(0,qi,-Er),new F(0,qi,Er),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)];class kf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){ml=this._renderer.getRenderTarget(),gl=this._renderer.getActiveCubeFace(),_l=this._renderer.getActiveMipmapLevel(),vl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ml,gl,_l),this._renderer.xr.enabled=vl,e.scissorTest=!1,vo(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Wr||e.mapping===Xr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ml=this._renderer.getRenderTarget(),gl=this._renderer.getActiveCubeFace(),_l=this._renderer.getActiveMipmapLevel(),vl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Mn,minFilter:Mn,generateMipmaps:!1,type:Bs,format:Tn,colorSpace:Di,depthBuffer:!1},r=Hf(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hf(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=rS(s)),this._blurMaterial=sS(s,e,n)}return r}_compileMaterial(e){const n=new Vt(this._lodPlanes[0],e);this._renderer.compile(n,pl)}_sceneToCubeUV(e,n,i,r){const a=new rn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Ff),u.toneMapping=wi,u.autoClear=!1;const d=new ia({name:"PMREM.Background",side:Zt,depthWrite:!1,depthTest:!1}),v=new Vt(new rr,d);let y=!1;const p=e.background;p?p.isColor&&(d.color.copy(p),e.background=null,y=!0):(d.color.copy(Ff),y=!0);for(let m=0;m<6;m++){const b=m%3;b===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):b===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const S=this._cubeSize;vo(r,b*S,m>2?S:0,S,S),u.setRenderTarget(r),y&&u.render(v,a),u.render(e,a)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Wr||e.mapping===Xr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=zf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gf());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Vt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;vo(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,pl)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Bf[(r-s-1)%Bf.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Vt(this._lodPlanes[r],c),h=c.uniforms,d=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Ki-1),y=s/v,p=isFinite(s)?1+Math.floor(u*y):Ki;p>Ki&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ki}`);const m=[];let b=0;for(let R=0;R<Ki;++R){const L=R/y,j=Math.exp(-L*L/2);m.push(j),R===0?b+=j:R<p&&(b+=2*j)}for(let R=0;R<m.length;R++)m[R]=m[R]/b;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=m,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:S}=this;h.dTheta.value=v,h.mipInt.value=S-i;const M=this._sizeLods[r],P=3*M*(r>S-Cr?r-S+Cr:0),C=4*(this._cubeSize-M);vo(n,P,C,3*M,2*M),l.setRenderTarget(n),l.render(f,pl)}}function rS(t){const e=[],n=[],i=[];let r=t;const s=t-Cr+1+Of.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Cr?l=Of[o-t+Cr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,v=6,y=3,p=2,m=1,b=new Float32Array(y*v*d),S=new Float32Array(p*v*d),M=new Float32Array(m*v*d);for(let C=0;C<d;C++){const R=C%3*2/3-1,L=C>2?0:-1,j=[R,L,0,R+2/3,L,0,R+2/3,L+1,0,R,L,0,R+2/3,L+1,0,R,L+1,0];b.set(j,y*v*C),S.set(h,p*v*C);const x=[C,C,C,C,C,C];M.set(x,m*v*C)}const P=new di;P.setAttribute("position",new Hn(b,y)),P.setAttribute("uv",new Hn(S,p)),P.setAttribute("faceIndex",new Hn(M,m)),e.push(P),r>Cr&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Hf(t,e,n){const i=new ir(t,e,n);return i.texture.mapping=Ea,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function vo(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function sS(t,e,n){const i=new Float32Array(Ki),r=new F(0,1,0);return new Li({name:"SphericalGaussianBlur",defines:{n:Ki,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ou(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function Gf(){return new Li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ou(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function zf(){return new Li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ou(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function ou(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function oS(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Jl||l===Ql,u=l===Wr||l===Xr;if(c||u){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return n===null&&(n=new kf(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&r(d)?(n===null&&(n=new kf(t)),f=c?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function aS(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&No("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function lS(t,e,n,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);for(const v in h.morphAttributes){const y=h.morphAttributes[v];for(let p=0,m=y.length;p<m;p++)e.remove(y[p])}h.removeEventListener("dispose",o),delete r[h.id];const d=s.get(h);d&&(e.remove(d),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const v in h)e.update(h[v],t.ARRAY_BUFFER);const d=f.morphAttributes;for(const v in d){const y=d[v];for(let p=0,m=y.length;p<m;p++)e.update(y[p],t.ARRAY_BUFFER)}}function c(f){const h=[],d=f.index,v=f.attributes.position;let y=0;if(d!==null){const b=d.array;y=d.version;for(let S=0,M=b.length;S<M;S+=3){const P=b[S+0],C=b[S+1],R=b[S+2];h.push(P,C,C,R,R,P)}}else if(v!==void 0){const b=v.array;y=v.version;for(let S=0,M=b.length/3-1;S<M;S+=3){const P=S+0,C=S+1,R=S+2;h.push(P,C,C,R,R,P)}}else return;const p=new(Jd(h)?rp:ip)(h,1);p.version=y;const m=s.get(f);m&&e.remove(m),s.set(f,p)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function cS(t,e,n){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,d){t.drawElements(i,d,s,h*o),n.update(d,i,1)}function c(h,d,v){v!==0&&(t.drawElementsInstanced(i,d,s,h*o,v),n.update(d,i,v))}function u(h,d,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,h,0,v);let p=0;for(let m=0;m<v;m++)p+=d[m];n.update(p,i,1)}function f(h,d,v,y){if(v===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<h.length;m++)c(h[m]/o,d[m],y[m]);else{p.multiDrawElementsInstancedWEBGL(i,d,0,s,h,0,y,0,v);let m=0;for(let b=0;b<v;b++)m+=d[b];for(let b=0;b<y.length;b++)n.update(m,i,y[b])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function uS(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function fS(t,e,n){const i=new WeakMap,r=new ut;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let x=function(){L.dispose(),i.delete(a),a.removeEventListener("dispose",x)};var d=x;h!==void 0&&h.texture.dispose();const v=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let M=0;v===!0&&(M=1),y===!0&&(M=2),p===!0&&(M=3);let P=a.attributes.position.count*M,C=1;P>e.maxTextureSize&&(C=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const R=new Float32Array(P*C*4*f),L=new ep(R,P,C,f);L.type=ii,L.needsUpdate=!0;const j=M*4;for(let T=0;T<f;T++){const $=m[T],K=b[T],Z=S[T],oe=P*C*4*T;for(let z=0;z<$.count;z++){const Y=z*j;v===!0&&(r.fromBufferAttribute($,z),R[oe+Y+0]=r.x,R[oe+Y+1]=r.y,R[oe+Y+2]=r.z,R[oe+Y+3]=0),y===!0&&(r.fromBufferAttribute(K,z),R[oe+Y+4]=r.x,R[oe+Y+5]=r.y,R[oe+Y+6]=r.z,R[oe+Y+7]=0),p===!0&&(r.fromBufferAttribute(Z,z),R[oe+Y+8]=r.x,R[oe+Y+9]=r.y,R[oe+Y+10]=r.z,R[oe+Y+11]=Z.itemSize===4?r.w:1)}}h={count:f,texture:L,size:new qe(P,C)},i.set(a,h),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let v=0;for(let p=0;p<c.length;p++)v+=c[p];const y=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(t,"morphTargetBaseInfluence",y),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function hS(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class up extends Jt{constructor(e,n,i,r,s,o,a,l,c,u=Fr){if(u!==Fr&&u!==$r)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Fr&&(i=nr),i===void 0&&u===$r&&(i=qr),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:pn,this.minFilter=l!==void 0?l:pn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const fp=new Jt,Vf=new up(1,1),hp=new ep,dp=new Z0,pp=new ap,Wf=[],Xf=[],qf=new Float32Array(16),$f=new Float32Array(9),Kf=new Float32Array(4);function jr(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Wf[r];if(s===void 0&&(s=new Float32Array(r),Wf[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function wt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Rt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function ba(t,e){let n=Xf[e];n===void 0&&(n=new Int32Array(e),Xf[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function dS(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function pS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(wt(n,e))return;t.uniform2fv(this.addr,e),Rt(n,e)}}function mS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(wt(n,e))return;t.uniform3fv(this.addr,e),Rt(n,e)}}function gS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(wt(n,e))return;t.uniform4fv(this.addr,e),Rt(n,e)}}function _S(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(wt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Rt(n,e)}else{if(wt(n,i))return;Kf.set(i),t.uniformMatrix2fv(this.addr,!1,Kf),Rt(n,i)}}function vS(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(wt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Rt(n,e)}else{if(wt(n,i))return;$f.set(i),t.uniformMatrix3fv(this.addr,!1,$f),Rt(n,i)}}function xS(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(wt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Rt(n,e)}else{if(wt(n,i))return;qf.set(i),t.uniformMatrix4fv(this.addr,!1,qf),Rt(n,i)}}function yS(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function SS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(wt(n,e))return;t.uniform2iv(this.addr,e),Rt(n,e)}}function MS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(wt(n,e))return;t.uniform3iv(this.addr,e),Rt(n,e)}}function ES(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(wt(n,e))return;t.uniform4iv(this.addr,e),Rt(n,e)}}function TS(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function bS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(wt(n,e))return;t.uniform2uiv(this.addr,e),Rt(n,e)}}function AS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(wt(n,e))return;t.uniform3uiv(this.addr,e),Rt(n,e)}}function wS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(wt(n,e))return;t.uniform4uiv(this.addr,e),Rt(n,e)}}function RS(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Vf.compareFunction=Zd,s=Vf):s=fp,n.setTexture2D(e||s,r)}function CS(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||dp,r)}function PS(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||pp,r)}function LS(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||hp,r)}function DS(t){switch(t){case 5126:return dS;case 35664:return pS;case 35665:return mS;case 35666:return gS;case 35674:return _S;case 35675:return vS;case 35676:return xS;case 5124:case 35670:return yS;case 35667:case 35671:return SS;case 35668:case 35672:return MS;case 35669:case 35673:return ES;case 5125:return TS;case 36294:return bS;case 36295:return AS;case 36296:return wS;case 35678:case 36198:case 36298:case 36306:case 35682:return RS;case 35679:case 36299:case 36307:return CS;case 35680:case 36300:case 36308:case 36293:return PS;case 36289:case 36303:case 36311:case 36292:return LS}}function IS(t,e){t.uniform1fv(this.addr,e)}function US(t,e){const n=jr(e,this.size,2);t.uniform2fv(this.addr,n)}function NS(t,e){const n=jr(e,this.size,3);t.uniform3fv(this.addr,n)}function OS(t,e){const n=jr(e,this.size,4);t.uniform4fv(this.addr,n)}function FS(t,e){const n=jr(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function BS(t,e){const n=jr(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function kS(t,e){const n=jr(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function HS(t,e){t.uniform1iv(this.addr,e)}function GS(t,e){t.uniform2iv(this.addr,e)}function zS(t,e){t.uniform3iv(this.addr,e)}function VS(t,e){t.uniform4iv(this.addr,e)}function WS(t,e){t.uniform1uiv(this.addr,e)}function XS(t,e){t.uniform2uiv(this.addr,e)}function qS(t,e){t.uniform3uiv(this.addr,e)}function $S(t,e){t.uniform4uiv(this.addr,e)}function KS(t,e,n){const i=this.cache,r=e.length,s=ba(n,r);wt(i,s)||(t.uniform1iv(this.addr,s),Rt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||fp,s[o])}function YS(t,e,n){const i=this.cache,r=e.length,s=ba(n,r);wt(i,s)||(t.uniform1iv(this.addr,s),Rt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||dp,s[o])}function jS(t,e,n){const i=this.cache,r=e.length,s=ba(n,r);wt(i,s)||(t.uniform1iv(this.addr,s),Rt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||pp,s[o])}function ZS(t,e,n){const i=this.cache,r=e.length,s=ba(n,r);wt(i,s)||(t.uniform1iv(this.addr,s),Rt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||hp,s[o])}function JS(t){switch(t){case 5126:return IS;case 35664:return US;case 35665:return NS;case 35666:return OS;case 35674:return FS;case 35675:return BS;case 35676:return kS;case 5124:case 35670:return HS;case 35667:case 35671:return GS;case 35668:case 35672:return zS;case 35669:case 35673:return VS;case 5125:return WS;case 36294:return XS;case 36295:return qS;case 36296:return $S;case 35678:case 36198:case 36298:case 36306:case 35682:return KS;case 35679:case 36299:case 36307:return YS;case 35680:case 36300:case 36308:case 36293:return jS;case 36289:case 36303:case 36311:case 36292:return ZS}}class QS{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=DS(n.type)}}class eM{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=JS(n.type)}}class tM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const xl=/(\w+)(\])?(\[|\.)?/g;function Yf(t,e){t.seq.push(e),t.map[e.id]=e}function nM(t,e,n){const i=t.name,r=i.length;for(xl.lastIndex=0;;){const s=xl.exec(i),o=xl.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Yf(n,c===void 0?new QS(a,t,e):new eM(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new tM(a),Yf(n,f)),n=f}}}class Oo{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);nM(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function jf(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const iM=37297;let rM=0;function sM(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function oM(t){const e=it.getPrimaries(it.workingColorSpace),n=it.getPrimaries(t);let i;switch(e===n?i="":e===ea&&n===Qo?i="LinearDisplayP3ToLinearSRGB":e===Qo&&n===ea&&(i="LinearSRGBToLinearDisplayP3"),t){case Di:case Ta:return[i,"LinearTransferOETF"];case Sn:case iu:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Zf(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+sM(t.getShaderSource(e),o)}else return r}function aM(t,e){const n=oM(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function lM(t,e){let n;switch(e){case E0:n="Linear";break;case T0:n="Reinhard";break;case b0:n="Cineon";break;case A0:n="ACESFilmic";break;case R0:n="AgX";break;case C0:n="Neutral";break;case w0:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const xo=new F;function cM(){it.getLuminanceCoefficients(xo);const t=xo.x.toFixed(4),e=xo.y.toFixed(4),n=xo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function uM(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(cs).join(`
`)}function fM(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function hM(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function cs(t){return t!==""}function Jf(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Qf(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const dM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cc(t){return t.replace(dM,mM)}const pM=new Map;function mM(t,e){let n=We[e];if(n===void 0){const i=pM.get(e);if(i!==void 0)n=We[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Cc(n)}const gM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function eh(t){return t.replace(gM,_M)}function _M(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function th(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function vM(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Fd?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===n0?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===jn&&(e="SHADOWMAP_TYPE_VSM"),e}function xM(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Wr:case Xr:e="ENVMAP_TYPE_CUBE";break;case Ea:e="ENVMAP_TYPE_CUBE_UV";break}return e}function yM(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Xr:e="ENVMAP_MODE_REFRACTION";break}return e}function SM(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Bd:e="ENVMAP_BLENDING_MULTIPLY";break;case S0:e="ENVMAP_BLENDING_MIX";break;case M0:e="ENVMAP_BLENDING_ADD";break}return e}function MM(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function EM(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=vM(n),c=xM(n),u=yM(n),f=SM(n),h=MM(n),d=uM(n),v=fM(s),y=r.createProgram();let p,m,b=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(cs).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(cs).join(`
`),m.length>0&&(m+=`
`)):(p=[th(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cs).join(`
`),m=[th(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==wi?"#define TONE_MAPPING":"",n.toneMapping!==wi?We.tonemapping_pars_fragment:"",n.toneMapping!==wi?lM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,aM("linearToOutputTexel",n.outputColorSpace),cM(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(cs).join(`
`)),o=Cc(o),o=Jf(o,n),o=Qf(o,n),a=Cc(a),a=Jf(a,n),a=Qf(a,n),o=eh(o),a=eh(a),n.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",n.glslVersion===vf?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===vf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const S=b+p+o,M=b+m+a,P=jf(r,r.VERTEX_SHADER,S),C=jf(r,r.FRAGMENT_SHADER,M);r.attachShader(y,P),r.attachShader(y,C),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function R(T){if(t.debug.checkShaderErrors){const $=r.getProgramInfoLog(y).trim(),K=r.getShaderInfoLog(P).trim(),Z=r.getShaderInfoLog(C).trim();let oe=!0,z=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(oe=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,P,C);else{const Y=Zf(r,P,"vertex"),k=Zf(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+$+`
`+Y+`
`+k)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(K===""||Z==="")&&(z=!1);z&&(T.diagnostics={runnable:oe,programLog:$,vertexShader:{log:K,prefix:p},fragmentShader:{log:Z,prefix:m}})}r.deleteShader(P),r.deleteShader(C),L=new Oo(r,y),j=hM(r,y)}let L;this.getUniforms=function(){return L===void 0&&R(this),L};let j;this.getAttributes=function(){return j===void 0&&R(this),j};let x=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(y,iM)),x},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=rM++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=P,this.fragmentShader=C,this}let TM=0;class bM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new AM(e),n.set(e,i)),i}}class AM{constructor(e){this.id=TM++,this.code=e,this.usedTimes=0}}function wM(t,e,n,i,r,s,o){const a=new tp,l=new bM,c=new Set,u=[],f=r.logarithmicDepthBuffer,h=r.reverseDepthBuffer,d=r.vertexTextures;let v=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return c.add(x),x===0?"uv":`uv${x}`}function m(x,T,$,K,Z){const oe=K.fog,z=Z.geometry,Y=x.isMeshStandardMaterial?K.environment:null,k=(x.isMeshStandardMaterial?n:e).get(x.envMap||Y),ge=k&&k.mapping===Ea?k.image.height:null,ve=y[x.type];x.precision!==null&&(v=r.getMaxPrecision(x.precision),v!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",v,"instead."));const Se=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Ge=Se!==void 0?Se.length:0;let $e=0;z.morphAttributes.position!==void 0&&($e=1),z.morphAttributes.normal!==void 0&&($e=2),z.morphAttributes.color!==void 0&&($e=3);let ie,V,se,pe;if(ve){const qt=On[ve];ie=qt.vertexShader,V=qt.fragmentShader}else ie=x.vertexShader,V=x.fragmentShader,l.update(x),se=l.getVertexShaderID(x),pe=l.getFragmentShaderID(x);const Oe=t.getRenderTarget(),Ue=Z.isInstancedMesh===!0,Ve=Z.isBatchedMesh===!0,je=!!x.map,w=!!x.matcap,_=!!k,X=!!x.aoMap,Q=!!x.lightMap,J=!!x.bumpMap,H=!!x.normalMap,ce=!!x.displacementMap,te=!!x.emissiveMap,E=!!x.metalnessMap,g=!!x.roughnessMap,D=x.anisotropy>0,U=x.clearcoat>0,G=x.dispersion>0,B=x.iridescence>0,he=x.sheen>0,ue=x.transmission>0,fe=D&&!!x.anisotropyMap,De=U&&!!x.clearcoatMap,le=U&&!!x.clearcoatNormalMap,_e=U&&!!x.clearcoatRoughnessMap,Re=B&&!!x.iridescenceMap,Ne=B&&!!x.iridescenceThicknessMap,Te=he&&!!x.sheenColorMap,Fe=he&&!!x.sheenRoughnessMap,Ie=!!x.specularMap,st=!!x.specularColorMap,I=!!x.specularIntensityMap,Me=ue&&!!x.transmissionMap,ee=ue&&!!x.thicknessMap,ae=!!x.gradientMap,xe=!!x.alphaMap,Ee=x.alphaTest>0,Ye=!!x.alphaHash,St=!!x.extensions;let Xt=wi;x.toneMapped&&(Oe===null||Oe.isXRRenderTarget===!0)&&(Xt=t.toneMapping);const Je={shaderID:ve,shaderType:x.type,shaderName:x.name,vertexShader:ie,fragmentShader:V,defines:x.defines,customVertexShaderID:se,customFragmentShaderID:pe,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:v,batching:Ve,batchingColor:Ve&&Z._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&Z.instanceColor!==null,instancingMorph:Ue&&Z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Oe===null?t.outputColorSpace:Oe.isXRRenderTarget===!0?Oe.texture.colorSpace:Di,alphaToCoverage:!!x.alphaToCoverage,map:je,matcap:w,envMap:_,envMapMode:_&&k.mapping,envMapCubeUVHeight:ge,aoMap:X,lightMap:Q,bumpMap:J,normalMap:H,displacementMap:d&&ce,emissiveMap:te,normalMapObjectSpace:H&&x.normalMapType===I0,normalMapTangentSpace:H&&x.normalMapType===jd,metalnessMap:E,roughnessMap:g,anisotropy:D,anisotropyMap:fe,clearcoat:U,clearcoatMap:De,clearcoatNormalMap:le,clearcoatRoughnessMap:_e,dispersion:G,iridescence:B,iridescenceMap:Re,iridescenceThicknessMap:Ne,sheen:he,sheenColorMap:Te,sheenRoughnessMap:Fe,specularMap:Ie,specularColorMap:st,specularIntensityMap:I,transmission:ue,transmissionMap:Me,thicknessMap:ee,gradientMap:ae,opaque:x.transparent===!1&&x.blending===Or&&x.alphaToCoverage===!1,alphaMap:xe,alphaTest:Ee,alphaHash:Ye,combine:x.combine,mapUv:je&&p(x.map.channel),aoMapUv:X&&p(x.aoMap.channel),lightMapUv:Q&&p(x.lightMap.channel),bumpMapUv:J&&p(x.bumpMap.channel),normalMapUv:H&&p(x.normalMap.channel),displacementMapUv:ce&&p(x.displacementMap.channel),emissiveMapUv:te&&p(x.emissiveMap.channel),metalnessMapUv:E&&p(x.metalnessMap.channel),roughnessMapUv:g&&p(x.roughnessMap.channel),anisotropyMapUv:fe&&p(x.anisotropyMap.channel),clearcoatMapUv:De&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:le&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&p(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Re&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:Ne&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&p(x.sheenRoughnessMap.channel),specularMapUv:Ie&&p(x.specularMap.channel),specularColorMapUv:st&&p(x.specularColorMap.channel),specularIntensityMapUv:I&&p(x.specularIntensityMap.channel),transmissionMapUv:Me&&p(x.transmissionMap.channel),thicknessMapUv:ee&&p(x.thicknessMap.channel),alphaMapUv:xe&&p(x.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(H||D),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!z.attributes.uv&&(je||xe),fog:!!oe,useFog:x.fog===!0,fogExp2:!!oe&&oe.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:h,skinning:Z.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Ge,morphTextureStride:$e,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&$.length>0,shadowMapType:t.shadowMap.type,toneMapping:Xt,decodeVideoTexture:je&&x.map.isVideoTexture===!0&&it.getTransfer(x.map.colorSpace)===mt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Bn,flipSided:x.side===Zt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:St&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(St&&x.extensions.multiDraw===!0||Ve)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Je.vertexUv1s=c.has(1),Je.vertexUv2s=c.has(2),Je.vertexUv3s=c.has(3),c.clear(),Je}function b(x){const T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(const $ in x.defines)T.push($),T.push(x.defines[$]);return x.isRawShaderMaterial===!1&&(S(T,x),M(T,x),T.push(t.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function S(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function M(x,T){a.disableAll(),T.supportsVertexTextures&&a.enable(0),T.instancing&&a.enable(1),T.instancingColor&&a.enable(2),T.instancingMorph&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),T.dispersion&&a.enable(20),T.batchingColor&&a.enable(21),x.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reverseDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.alphaToCoverage&&a.enable(20),x.push(a.mask)}function P(x){const T=y[x.type];let $;if(T){const K=On[T];$=uv.clone(K.uniforms)}else $=x.uniforms;return $}function C(x,T){let $;for(let K=0,Z=u.length;K<Z;K++){const oe=u[K];if(oe.cacheKey===T){$=oe,++$.usedTimes;break}}return $===void 0&&($=new EM(t,T,x,s),u.push($)),$}function R(x){if(--x.usedTimes===0){const T=u.indexOf(x);u[T]=u[u.length-1],u.pop(),x.destroy()}}function L(x){l.remove(x)}function j(){l.dispose()}return{getParameters:m,getProgramCacheKey:b,getUniforms:P,acquireProgram:C,releaseProgram:R,releaseShaderCache:L,programs:u,dispose:j}}function RM(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function CM(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function nh(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function ih(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,h,d,v,y,p){let m=t[e];return m===void 0?(m={id:f.id,object:f,geometry:h,material:d,groupOrder:v,renderOrder:f.renderOrder,z:y,group:p},t[e]=m):(m.id=f.id,m.object=f,m.geometry=h,m.material=d,m.groupOrder=v,m.renderOrder=f.renderOrder,m.z=y,m.group=p),e++,m}function a(f,h,d,v,y,p){const m=o(f,h,d,v,y,p);d.transmission>0?i.push(m):d.transparent===!0?r.push(m):n.push(m)}function l(f,h,d,v,y,p){const m=o(f,h,d,v,y,p);d.transmission>0?i.unshift(m):d.transparent===!0?r.unshift(m):n.unshift(m)}function c(f,h){n.length>1&&n.sort(f||CM),i.length>1&&i.sort(h||nh),r.length>1&&r.sort(h||nh)}function u(){for(let f=e,h=t.length;f<h;f++){const d=t[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function PM(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new ih,t.set(i,[o])):r>=s.length?(o=new ih,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function LM(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new F,color:new Ke};break;case"SpotLight":n={position:new F,direction:new F,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new F,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":n={direction:new F,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":n={color:new Ke,position:new F,halfWidth:new F,halfHeight:new F};break}return t[e.id]=n,n}}}function DM(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let IM=0;function UM(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function NM(t){const e=new LM,n=DM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new F);const r=new F,s=new gt,o=new gt;function a(c){let u=0,f=0,h=0;for(let j=0;j<9;j++)i.probe[j].set(0,0,0);let d=0,v=0,y=0,p=0,m=0,b=0,S=0,M=0,P=0,C=0,R=0;c.sort(UM);for(let j=0,x=c.length;j<x;j++){const T=c[j],$=T.color,K=T.intensity,Z=T.distance,oe=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)u+=$.r*K,f+=$.g*K,h+=$.b*K;else if(T.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(T.sh.coefficients[z],K);R++}else if(T.isDirectionalLight){const z=e.get(T);if(z.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const Y=T.shadow,k=n.get(T);k.shadowIntensity=Y.intensity,k.shadowBias=Y.bias,k.shadowNormalBias=Y.normalBias,k.shadowRadius=Y.radius,k.shadowMapSize=Y.mapSize,i.directionalShadow[d]=k,i.directionalShadowMap[d]=oe,i.directionalShadowMatrix[d]=T.shadow.matrix,b++}i.directional[d]=z,d++}else if(T.isSpotLight){const z=e.get(T);z.position.setFromMatrixPosition(T.matrixWorld),z.color.copy($).multiplyScalar(K),z.distance=Z,z.coneCos=Math.cos(T.angle),z.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),z.decay=T.decay,i.spot[y]=z;const Y=T.shadow;if(T.map&&(i.spotLightMap[P]=T.map,P++,Y.updateMatrices(T),T.castShadow&&C++),i.spotLightMatrix[y]=Y.matrix,T.castShadow){const k=n.get(T);k.shadowIntensity=Y.intensity,k.shadowBias=Y.bias,k.shadowNormalBias=Y.normalBias,k.shadowRadius=Y.radius,k.shadowMapSize=Y.mapSize,i.spotShadow[y]=k,i.spotShadowMap[y]=oe,M++}y++}else if(T.isRectAreaLight){const z=e.get(T);z.color.copy($).multiplyScalar(K),z.halfWidth.set(T.width*.5,0,0),z.halfHeight.set(0,T.height*.5,0),i.rectArea[p]=z,p++}else if(T.isPointLight){const z=e.get(T);if(z.color.copy(T.color).multiplyScalar(T.intensity),z.distance=T.distance,z.decay=T.decay,T.castShadow){const Y=T.shadow,k=n.get(T);k.shadowIntensity=Y.intensity,k.shadowBias=Y.bias,k.shadowNormalBias=Y.normalBias,k.shadowRadius=Y.radius,k.shadowMapSize=Y.mapSize,k.shadowCameraNear=Y.camera.near,k.shadowCameraFar=Y.camera.far,i.pointShadow[v]=k,i.pointShadowMap[v]=oe,i.pointShadowMatrix[v]=T.shadow.matrix,S++}i.point[v]=z,v++}else if(T.isHemisphereLight){const z=e.get(T);z.skyColor.copy(T.color).multiplyScalar(K),z.groundColor.copy(T.groundColor).multiplyScalar(K),i.hemi[m]=z,m++}}p>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=me.LTC_FLOAT_1,i.rectAreaLTC2=me.LTC_FLOAT_2):(i.rectAreaLTC1=me.LTC_HALF_1,i.rectAreaLTC2=me.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const L=i.hash;(L.directionalLength!==d||L.pointLength!==v||L.spotLength!==y||L.rectAreaLength!==p||L.hemiLength!==m||L.numDirectionalShadows!==b||L.numPointShadows!==S||L.numSpotShadows!==M||L.numSpotMaps!==P||L.numLightProbes!==R)&&(i.directional.length=d,i.spot.length=y,i.rectArea.length=p,i.point.length=v,i.hemi.length=m,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=M+P-C,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=R,L.directionalLength=d,L.pointLength=v,L.spotLength=y,L.rectAreaLength=p,L.hemiLength=m,L.numDirectionalShadows=b,L.numPointShadows=S,L.numSpotShadows=M,L.numSpotMaps=P,L.numLightProbes=R,i.version=IM++)}function l(c,u){let f=0,h=0,d=0,v=0,y=0;const p=u.matrixWorldInverse;for(let m=0,b=c.length;m<b;m++){const S=c[m];if(S.isDirectionalLight){const M=i.directional[f];M.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),f++}else if(S.isSpotLight){const M=i.spot[d];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),d++}else if(S.isRectAreaLight){const M=i.rectArea[v];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(p),o.identity(),s.copy(S.matrixWorld),s.premultiply(p),o.extractRotation(s),M.halfWidth.set(S.width*.5,0,0),M.halfHeight.set(0,S.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),v++}else if(S.isPointLight){const M=i.point[h];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(p),h++}else if(S.isHemisphereLight){const M=i.hemi[y];M.direction.setFromMatrixPosition(S.matrixWorld),M.direction.transformDirection(p),y++}}}return{setup:a,setupView:l,state:i}}function rh(t){const e=new NM(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function OM(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new rh(t),e.set(r,[a])):s>=o.length?(a=new rh(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class FM extends zs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=L0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class BM extends zs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const kM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,HM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function GM(t,e,n){let i=new su;const r=new qe,s=new qe,o=new ut,a=new FM({depthPacking:D0}),l=new BM,c={},u=n.maxTextureSize,f={[Pi]:Zt,[Zt]:Pi,[Bn]:Bn},h=new Li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:kM,fragmentShader:HM}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const v=new di;v.setAttribute("position",new Hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Vt(v,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fd;let m=this.type;this.render=function(C,R,L){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;const j=t.getRenderTarget(),x=t.getActiveCubeFace(),T=t.getActiveMipmapLevel(),$=t.state;$.setBlending(Ai),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const K=m!==jn&&this.type===jn,Z=m===jn&&this.type!==jn;for(let oe=0,z=C.length;oe<z;oe++){const Y=C[oe],k=Y.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const ge=k.getFrameExtents();if(r.multiply(ge),s.copy(k.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ge.x),r.x=s.x*ge.x,k.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ge.y),r.y=s.y*ge.y,k.mapSize.y=s.y)),k.map===null||K===!0||Z===!0){const Se=this.type!==jn?{minFilter:pn,magFilter:pn}:{};k.map!==null&&k.map.dispose(),k.map=new ir(r.x,r.y,Se),k.map.texture.name=Y.name+".shadowMap",k.camera.updateProjectionMatrix()}t.setRenderTarget(k.map),t.clear();const ve=k.getViewportCount();for(let Se=0;Se<ve;Se++){const Ge=k.getViewport(Se);o.set(s.x*Ge.x,s.y*Ge.y,s.x*Ge.z,s.y*Ge.w),$.viewport(o),k.updateMatrices(Y,Se),i=k.getFrustum(),M(R,L,k.camera,Y,this.type)}k.isPointLightShadow!==!0&&this.type===jn&&b(k,L),k.needsUpdate=!1}m=this.type,p.needsUpdate=!1,t.setRenderTarget(j,x,T)};function b(C,R){const L=e.update(y);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,d.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new ir(r.x,r.y)),h.uniforms.shadow_pass.value=C.map.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(R,null,L,h,y,null),d.uniforms.shadow_pass.value=C.mapPass.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(R,null,L,d,y,null)}function S(C,R,L,j){let x=null;const T=L.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(T!==void 0)x=T;else if(x=L.isPointLight===!0?l:a,t.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const $=x.uuid,K=R.uuid;let Z=c[$];Z===void 0&&(Z={},c[$]=Z);let oe=Z[K];oe===void 0&&(oe=x.clone(),Z[K]=oe,R.addEventListener("dispose",P)),x=oe}if(x.visible=R.visible,x.wireframe=R.wireframe,j===jn?x.side=R.shadowSide!==null?R.shadowSide:R.side:x.side=R.shadowSide!==null?R.shadowSide:f[R.side],x.alphaMap=R.alphaMap,x.alphaTest=R.alphaTest,x.map=R.map,x.clipShadows=R.clipShadows,x.clippingPlanes=R.clippingPlanes,x.clipIntersection=R.clipIntersection,x.displacementMap=R.displacementMap,x.displacementScale=R.displacementScale,x.displacementBias=R.displacementBias,x.wireframeLinewidth=R.wireframeLinewidth,x.linewidth=R.linewidth,L.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const $=t.properties.get(x);$.light=L}return x}function M(C,R,L,j,x){if(C.visible===!1)return;if(C.layers.test(R.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&x===jn)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,C.matrixWorld);const K=e.update(C),Z=C.material;if(Array.isArray(Z)){const oe=K.groups;for(let z=0,Y=oe.length;z<Y;z++){const k=oe[z],ge=Z[k.materialIndex];if(ge&&ge.visible){const ve=S(C,ge,j,x);C.onBeforeShadow(t,C,R,L,K,ve,k),t.renderBufferDirect(L,null,K,ve,C,k),C.onAfterShadow(t,C,R,L,K,ve,k)}}}else if(Z.visible){const oe=S(C,Z,j,x);C.onBeforeShadow(t,C,R,L,K,oe,null),t.renderBufferDirect(L,null,K,oe,C,null),C.onAfterShadow(t,C,R,L,K,oe,null)}}const $=C.children;for(let K=0,Z=$.length;K<Z;K++)M($[K],R,L,j,x)}function P(C){C.target.removeEventListener("dispose",P);for(const L in c){const j=c[L],x=C.target.uuid;x in j&&(j[x].dispose(),delete j[x])}}}const zM={[Xl]:ql,[$l]:jl,[Kl]:Zl,[Vr]:Yl,[ql]:Xl,[jl]:$l,[Zl]:Kl,[Yl]:Vr};function VM(t){function e(){let I=!1;const Me=new ut;let ee=null;const ae=new ut(0,0,0,0);return{setMask:function(xe){ee!==xe&&!I&&(t.colorMask(xe,xe,xe,xe),ee=xe)},setLocked:function(xe){I=xe},setClear:function(xe,Ee,Ye,St,Xt){Xt===!0&&(xe*=St,Ee*=St,Ye*=St),Me.set(xe,Ee,Ye,St),ae.equals(Me)===!1&&(t.clearColor(xe,Ee,Ye,St),ae.copy(Me))},reset:function(){I=!1,ee=null,ae.set(-1,0,0,0)}}}function n(){let I=!1,Me=!1,ee=null,ae=null,xe=null;return{setReversed:function(Ee){Me=Ee},setTest:function(Ee){Ee?se(t.DEPTH_TEST):pe(t.DEPTH_TEST)},setMask:function(Ee){ee!==Ee&&!I&&(t.depthMask(Ee),ee=Ee)},setFunc:function(Ee){if(Me&&(Ee=zM[Ee]),ae!==Ee){switch(Ee){case Xl:t.depthFunc(t.NEVER);break;case ql:t.depthFunc(t.ALWAYS);break;case $l:t.depthFunc(t.LESS);break;case Vr:t.depthFunc(t.LEQUAL);break;case Kl:t.depthFunc(t.EQUAL);break;case Yl:t.depthFunc(t.GEQUAL);break;case jl:t.depthFunc(t.GREATER);break;case Zl:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ae=Ee}},setLocked:function(Ee){I=Ee},setClear:function(Ee){xe!==Ee&&(t.clearDepth(Ee),xe=Ee)},reset:function(){I=!1,ee=null,ae=null,xe=null}}}function i(){let I=!1,Me=null,ee=null,ae=null,xe=null,Ee=null,Ye=null,St=null,Xt=null;return{setTest:function(Je){I||(Je?se(t.STENCIL_TEST):pe(t.STENCIL_TEST))},setMask:function(Je){Me!==Je&&!I&&(t.stencilMask(Je),Me=Je)},setFunc:function(Je,qt,Vn){(ee!==Je||ae!==qt||xe!==Vn)&&(t.stencilFunc(Je,qt,Vn),ee=Je,ae=qt,xe=Vn)},setOp:function(Je,qt,Vn){(Ee!==Je||Ye!==qt||St!==Vn)&&(t.stencilOp(Je,qt,Vn),Ee=Je,Ye=qt,St=Vn)},setLocked:function(Je){I=Je},setClear:function(Je){Xt!==Je&&(t.clearStencil(Je),Xt=Je)},reset:function(){I=!1,Me=null,ee=null,ae=null,xe=null,Ee=null,Ye=null,St=null,Xt=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},f=new WeakMap,h=[],d=null,v=!1,y=null,p=null,m=null,b=null,S=null,M=null,P=null,C=new Ke(0,0,0),R=0,L=!1,j=null,x=null,T=null,$=null,K=null;const Z=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let oe=!1,z=0;const Y=t.getParameter(t.VERSION);Y.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(Y)[1]),oe=z>=1):Y.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),oe=z>=2);let k=null,ge={};const ve=t.getParameter(t.SCISSOR_BOX),Se=t.getParameter(t.VIEWPORT),Ge=new ut().fromArray(ve),$e=new ut().fromArray(Se);function ie(I,Me,ee,ae){const xe=new Uint8Array(4),Ee=t.createTexture();t.bindTexture(I,Ee),t.texParameteri(I,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(I,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ye=0;Ye<ee;Ye++)I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY?t.texImage3D(Me,0,t.RGBA,1,1,ae,0,t.RGBA,t.UNSIGNED_BYTE,xe):t.texImage2D(Me+Ye,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,xe);return Ee}const V={};V[t.TEXTURE_2D]=ie(t.TEXTURE_2D,t.TEXTURE_2D,1),V[t.TEXTURE_CUBE_MAP]=ie(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),V[t.TEXTURE_2D_ARRAY]=ie(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),V[t.TEXTURE_3D]=ie(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),se(t.DEPTH_TEST),s.setFunc(Vr),Q(!1),J(hf),se(t.CULL_FACE),_(Ai);function se(I){c[I]!==!0&&(t.enable(I),c[I]=!0)}function pe(I){c[I]!==!1&&(t.disable(I),c[I]=!1)}function Oe(I,Me){return u[I]!==Me?(t.bindFramebuffer(I,Me),u[I]=Me,I===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=Me),I===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=Me),!0):!1}function Ue(I,Me){let ee=h,ae=!1;if(I){ee=f.get(Me),ee===void 0&&(ee=[],f.set(Me,ee));const xe=I.textures;if(ee.length!==xe.length||ee[0]!==t.COLOR_ATTACHMENT0){for(let Ee=0,Ye=xe.length;Ee<Ye;Ee++)ee[Ee]=t.COLOR_ATTACHMENT0+Ee;ee.length=xe.length,ae=!0}}else ee[0]!==t.BACK&&(ee[0]=t.BACK,ae=!0);ae&&t.drawBuffers(ee)}function Ve(I){return d!==I?(t.useProgram(I),d=I,!0):!1}const je={[$i]:t.FUNC_ADD,[r0]:t.FUNC_SUBTRACT,[s0]:t.FUNC_REVERSE_SUBTRACT};je[o0]=t.MIN,je[a0]=t.MAX;const w={[l0]:t.ZERO,[c0]:t.ONE,[u0]:t.SRC_COLOR,[Vl]:t.SRC_ALPHA,[g0]:t.SRC_ALPHA_SATURATE,[p0]:t.DST_COLOR,[h0]:t.DST_ALPHA,[f0]:t.ONE_MINUS_SRC_COLOR,[Wl]:t.ONE_MINUS_SRC_ALPHA,[m0]:t.ONE_MINUS_DST_COLOR,[d0]:t.ONE_MINUS_DST_ALPHA,[_0]:t.CONSTANT_COLOR,[v0]:t.ONE_MINUS_CONSTANT_COLOR,[x0]:t.CONSTANT_ALPHA,[y0]:t.ONE_MINUS_CONSTANT_ALPHA};function _(I,Me,ee,ae,xe,Ee,Ye,St,Xt,Je){if(I===Ai){v===!0&&(pe(t.BLEND),v=!1);return}if(v===!1&&(se(t.BLEND),v=!0),I!==i0){if(I!==y||Je!==L){if((p!==$i||S!==$i)&&(t.blendEquation(t.FUNC_ADD),p=$i,S=$i),Je)switch(I){case Or:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case df:t.blendFunc(t.ONE,t.ONE);break;case pf:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case mf:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Or:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case df:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case pf:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case mf:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}m=null,b=null,M=null,P=null,C.set(0,0,0),R=0,y=I,L=Je}return}xe=xe||Me,Ee=Ee||ee,Ye=Ye||ae,(Me!==p||xe!==S)&&(t.blendEquationSeparate(je[Me],je[xe]),p=Me,S=xe),(ee!==m||ae!==b||Ee!==M||Ye!==P)&&(t.blendFuncSeparate(w[ee],w[ae],w[Ee],w[Ye]),m=ee,b=ae,M=Ee,P=Ye),(St.equals(C)===!1||Xt!==R)&&(t.blendColor(St.r,St.g,St.b,Xt),C.copy(St),R=Xt),y=I,L=!1}function X(I,Me){I.side===Bn?pe(t.CULL_FACE):se(t.CULL_FACE);let ee=I.side===Zt;Me&&(ee=!ee),Q(ee),I.blending===Or&&I.transparent===!1?_(Ai):_(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),s.setFunc(I.depthFunc),s.setTest(I.depthTest),s.setMask(I.depthWrite),r.setMask(I.colorWrite);const ae=I.stencilWrite;o.setTest(ae),ae&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),ce(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?se(t.SAMPLE_ALPHA_TO_COVERAGE):pe(t.SAMPLE_ALPHA_TO_COVERAGE)}function Q(I){j!==I&&(I?t.frontFace(t.CW):t.frontFace(t.CCW),j=I)}function J(I){I!==e0?(se(t.CULL_FACE),I!==x&&(I===hf?t.cullFace(t.BACK):I===t0?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):pe(t.CULL_FACE),x=I}function H(I){I!==T&&(oe&&t.lineWidth(I),T=I)}function ce(I,Me,ee){I?(se(t.POLYGON_OFFSET_FILL),($!==Me||K!==ee)&&(t.polygonOffset(Me,ee),$=Me,K=ee)):pe(t.POLYGON_OFFSET_FILL)}function te(I){I?se(t.SCISSOR_TEST):pe(t.SCISSOR_TEST)}function E(I){I===void 0&&(I=t.TEXTURE0+Z-1),k!==I&&(t.activeTexture(I),k=I)}function g(I,Me,ee){ee===void 0&&(k===null?ee=t.TEXTURE0+Z-1:ee=k);let ae=ge[ee];ae===void 0&&(ae={type:void 0,texture:void 0},ge[ee]=ae),(ae.type!==I||ae.texture!==Me)&&(k!==ee&&(t.activeTexture(ee),k=ee),t.bindTexture(I,Me||V[I]),ae.type=I,ae.texture=Me)}function D(){const I=ge[k];I!==void 0&&I.type!==void 0&&(t.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function U(){try{t.compressedTexImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function G(){try{t.compressedTexImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function B(){try{t.texSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function he(){try{t.texSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ue(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function fe(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function De(){try{t.texStorage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function le(){try{t.texStorage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function _e(){try{t.texImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Re(){try{t.texImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ne(I){Ge.equals(I)===!1&&(t.scissor(I.x,I.y,I.z,I.w),Ge.copy(I))}function Te(I){$e.equals(I)===!1&&(t.viewport(I.x,I.y,I.z,I.w),$e.copy(I))}function Fe(I,Me){let ee=l.get(Me);ee===void 0&&(ee=new WeakMap,l.set(Me,ee));let ae=ee.get(I);ae===void 0&&(ae=t.getUniformBlockIndex(Me,I.name),ee.set(I,ae))}function Ie(I,Me){const ae=l.get(Me).get(I);a.get(Me)!==ae&&(t.uniformBlockBinding(Me,ae,I.__bindingPointIndex),a.set(Me,ae))}function st(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},k=null,ge={},u={},f=new WeakMap,h=[],d=null,v=!1,y=null,p=null,m=null,b=null,S=null,M=null,P=null,C=new Ke(0,0,0),R=0,L=!1,j=null,x=null,T=null,$=null,K=null,Ge.set(0,0,t.canvas.width,t.canvas.height),$e.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:se,disable:pe,bindFramebuffer:Oe,drawBuffers:Ue,useProgram:Ve,setBlending:_,setMaterial:X,setFlipSided:Q,setCullFace:J,setLineWidth:H,setPolygonOffset:ce,setScissorTest:te,activeTexture:E,bindTexture:g,unbindTexture:D,compressedTexImage2D:U,compressedTexImage3D:G,texImage2D:_e,texImage3D:Re,updateUBOMapping:Fe,uniformBlockBinding:Ie,texStorage2D:De,texStorage3D:le,texSubImage2D:B,texSubImage3D:he,compressedTexSubImage2D:ue,compressedTexSubImage3D:fe,scissor:Ne,viewport:Te,reset:st}}function sh(t,e,n,i){const r=WM(i);switch(n){case Vd:return t*e;case Xd:return t*e;case qd:return t*e*2;case $d:return t*e/r.components*r.byteLength;case eu:return t*e/r.components*r.byteLength;case Kd:return t*e*2/r.components*r.byteLength;case tu:return t*e*2/r.components*r.byteLength;case Wd:return t*e*3/r.components*r.byteLength;case Tn:return t*e*4/r.components*r.byteLength;case nu:return t*e*4/r.components*r.byteLength;case Po:case Lo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Do:case Io:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ic:case sc:return Math.max(t,16)*Math.max(e,8)/4;case nc:case rc:return Math.max(t,8)*Math.max(e,8)/2;case oc:case ac:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case lc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case cc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case uc:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case fc:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case hc:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case dc:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case pc:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case mc:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case gc:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case _c:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case vc:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case xc:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case yc:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Sc:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Mc:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Uo:case Ec:case Tc:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Yd:case bc:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Ac:case wc:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function WM(t){switch(t){case ui:case Hd:return{byteLength:1,components:1};case bs:case Gd:case Bs:return{byteLength:2,components:1};case Jc:case Qc:return{byteLength:2,components:4};case nr:case Zc:case ii:return{byteLength:4,components:1};case zd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function XM(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new qe,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(E,g){return d?new OffscreenCanvas(E,g):na("canvas")}function y(E,g,D){let U=1;const G=te(E);if((G.width>D||G.height>D)&&(U=D/Math.max(G.width,G.height)),U<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const B=Math.floor(U*G.width),he=Math.floor(U*G.height);f===void 0&&(f=v(B,he));const ue=g?v(B,he):f;return ue.width=B,ue.height=he,ue.getContext("2d").drawImage(E,0,0,B,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+G.width+"x"+G.height+") to ("+B+"x"+he+")."),ue}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+G.width+"x"+G.height+")."),E;return E}function p(E){return E.generateMipmaps&&E.minFilter!==pn&&E.minFilter!==Mn}function m(E){t.generateMipmap(E)}function b(E,g,D,U,G=!1){if(E!==null){if(t[E]!==void 0)return t[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let B=g;if(g===t.RED&&(D===t.FLOAT&&(B=t.R32F),D===t.HALF_FLOAT&&(B=t.R16F),D===t.UNSIGNED_BYTE&&(B=t.R8)),g===t.RED_INTEGER&&(D===t.UNSIGNED_BYTE&&(B=t.R8UI),D===t.UNSIGNED_SHORT&&(B=t.R16UI),D===t.UNSIGNED_INT&&(B=t.R32UI),D===t.BYTE&&(B=t.R8I),D===t.SHORT&&(B=t.R16I),D===t.INT&&(B=t.R32I)),g===t.RG&&(D===t.FLOAT&&(B=t.RG32F),D===t.HALF_FLOAT&&(B=t.RG16F),D===t.UNSIGNED_BYTE&&(B=t.RG8)),g===t.RG_INTEGER&&(D===t.UNSIGNED_BYTE&&(B=t.RG8UI),D===t.UNSIGNED_SHORT&&(B=t.RG16UI),D===t.UNSIGNED_INT&&(B=t.RG32UI),D===t.BYTE&&(B=t.RG8I),D===t.SHORT&&(B=t.RG16I),D===t.INT&&(B=t.RG32I)),g===t.RGB_INTEGER&&(D===t.UNSIGNED_BYTE&&(B=t.RGB8UI),D===t.UNSIGNED_SHORT&&(B=t.RGB16UI),D===t.UNSIGNED_INT&&(B=t.RGB32UI),D===t.BYTE&&(B=t.RGB8I),D===t.SHORT&&(B=t.RGB16I),D===t.INT&&(B=t.RGB32I)),g===t.RGBA_INTEGER&&(D===t.UNSIGNED_BYTE&&(B=t.RGBA8UI),D===t.UNSIGNED_SHORT&&(B=t.RGBA16UI),D===t.UNSIGNED_INT&&(B=t.RGBA32UI),D===t.BYTE&&(B=t.RGBA8I),D===t.SHORT&&(B=t.RGBA16I),D===t.INT&&(B=t.RGBA32I)),g===t.RGB&&D===t.UNSIGNED_INT_5_9_9_9_REV&&(B=t.RGB9_E5),g===t.RGBA){const he=G?Jo:it.getTransfer(U);D===t.FLOAT&&(B=t.RGBA32F),D===t.HALF_FLOAT&&(B=t.RGBA16F),D===t.UNSIGNED_BYTE&&(B=he===mt?t.SRGB8_ALPHA8:t.RGBA8),D===t.UNSIGNED_SHORT_4_4_4_4&&(B=t.RGBA4),D===t.UNSIGNED_SHORT_5_5_5_1&&(B=t.RGB5_A1)}return(B===t.R16F||B===t.R32F||B===t.RG16F||B===t.RG32F||B===t.RGBA16F||B===t.RGBA32F)&&e.get("EXT_color_buffer_float"),B}function S(E,g){let D;return E?g===null||g===nr||g===qr?D=t.DEPTH24_STENCIL8:g===ii?D=t.DEPTH32F_STENCIL8:g===bs&&(D=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===nr||g===qr?D=t.DEPTH_COMPONENT24:g===ii?D=t.DEPTH_COMPONENT32F:g===bs&&(D=t.DEPTH_COMPONENT16),D}function M(E,g){return p(E)===!0||E.isFramebufferTexture&&E.minFilter!==pn&&E.minFilter!==Mn?Math.log2(Math.max(g.width,g.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?g.mipmaps.length:1}function P(E){const g=E.target;g.removeEventListener("dispose",P),R(g),g.isVideoTexture&&u.delete(g)}function C(E){const g=E.target;g.removeEventListener("dispose",C),j(g)}function R(E){const g=i.get(E);if(g.__webglInit===void 0)return;const D=E.source,U=h.get(D);if(U){const G=U[g.__cacheKey];G.usedTimes--,G.usedTimes===0&&L(E),Object.keys(U).length===0&&h.delete(D)}i.remove(E)}function L(E){const g=i.get(E);t.deleteTexture(g.__webglTexture);const D=E.source,U=h.get(D);delete U[g.__cacheKey],o.memory.textures--}function j(E){const g=i.get(E);if(E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let U=0;U<6;U++){if(Array.isArray(g.__webglFramebuffer[U]))for(let G=0;G<g.__webglFramebuffer[U].length;G++)t.deleteFramebuffer(g.__webglFramebuffer[U][G]);else t.deleteFramebuffer(g.__webglFramebuffer[U]);g.__webglDepthbuffer&&t.deleteRenderbuffer(g.__webglDepthbuffer[U])}else{if(Array.isArray(g.__webglFramebuffer))for(let U=0;U<g.__webglFramebuffer.length;U++)t.deleteFramebuffer(g.__webglFramebuffer[U]);else t.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&t.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&t.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let U=0;U<g.__webglColorRenderbuffer.length;U++)g.__webglColorRenderbuffer[U]&&t.deleteRenderbuffer(g.__webglColorRenderbuffer[U]);g.__webglDepthRenderbuffer&&t.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const D=E.textures;for(let U=0,G=D.length;U<G;U++){const B=i.get(D[U]);B.__webglTexture&&(t.deleteTexture(B.__webglTexture),o.memory.textures--),i.remove(D[U])}i.remove(E)}let x=0;function T(){x=0}function $(){const E=x;return E>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),x+=1,E}function K(E){const g=[];return g.push(E.wrapS),g.push(E.wrapT),g.push(E.wrapR||0),g.push(E.magFilter),g.push(E.minFilter),g.push(E.anisotropy),g.push(E.internalFormat),g.push(E.format),g.push(E.type),g.push(E.generateMipmaps),g.push(E.premultiplyAlpha),g.push(E.flipY),g.push(E.unpackAlignment),g.push(E.colorSpace),g.join()}function Z(E,g){const D=i.get(E);if(E.isVideoTexture&&H(E),E.isRenderTargetTexture===!1&&E.version>0&&D.__version!==E.version){const U=E.image;if(U===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(U.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$e(D,E,g);return}}n.bindTexture(t.TEXTURE_2D,D.__webglTexture,t.TEXTURE0+g)}function oe(E,g){const D=i.get(E);if(E.version>0&&D.__version!==E.version){$e(D,E,g);return}n.bindTexture(t.TEXTURE_2D_ARRAY,D.__webglTexture,t.TEXTURE0+g)}function z(E,g){const D=i.get(E);if(E.version>0&&D.__version!==E.version){$e(D,E,g);return}n.bindTexture(t.TEXTURE_3D,D.__webglTexture,t.TEXTURE0+g)}function Y(E,g){const D=i.get(E);if(E.version>0&&D.__version!==E.version){ie(D,E,g);return}n.bindTexture(t.TEXTURE_CUBE_MAP,D.__webglTexture,t.TEXTURE0+g)}const k={[ec]:t.REPEAT,[Yi]:t.CLAMP_TO_EDGE,[tc]:t.MIRRORED_REPEAT},ge={[pn]:t.NEAREST,[P0]:t.NEAREST_MIPMAP_NEAREST,[Js]:t.NEAREST_MIPMAP_LINEAR,[Mn]:t.LINEAR,[Wa]:t.LINEAR_MIPMAP_NEAREST,[ji]:t.LINEAR_MIPMAP_LINEAR},ve={[U0]:t.NEVER,[H0]:t.ALWAYS,[N0]:t.LESS,[Zd]:t.LEQUAL,[O0]:t.EQUAL,[k0]:t.GEQUAL,[F0]:t.GREATER,[B0]:t.NOTEQUAL};function Se(E,g){if(g.type===ii&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Mn||g.magFilter===Wa||g.magFilter===Js||g.magFilter===ji||g.minFilter===Mn||g.minFilter===Wa||g.minFilter===Js||g.minFilter===ji)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(E,t.TEXTURE_WRAP_S,k[g.wrapS]),t.texParameteri(E,t.TEXTURE_WRAP_T,k[g.wrapT]),(E===t.TEXTURE_3D||E===t.TEXTURE_2D_ARRAY)&&t.texParameteri(E,t.TEXTURE_WRAP_R,k[g.wrapR]),t.texParameteri(E,t.TEXTURE_MAG_FILTER,ge[g.magFilter]),t.texParameteri(E,t.TEXTURE_MIN_FILTER,ge[g.minFilter]),g.compareFunction&&(t.texParameteri(E,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(E,t.TEXTURE_COMPARE_FUNC,ve[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===pn||g.minFilter!==Js&&g.minFilter!==ji||g.type===ii&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const D=e.get("EXT_texture_filter_anisotropic");t.texParameterf(E,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function Ge(E,g){let D=!1;E.__webglInit===void 0&&(E.__webglInit=!0,g.addEventListener("dispose",P));const U=g.source;let G=h.get(U);G===void 0&&(G={},h.set(U,G));const B=K(g);if(B!==E.__cacheKey){G[B]===void 0&&(G[B]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,D=!0),G[B].usedTimes++;const he=G[E.__cacheKey];he!==void 0&&(G[E.__cacheKey].usedTimes--,he.usedTimes===0&&L(g)),E.__cacheKey=B,E.__webglTexture=G[B].texture}return D}function $e(E,g,D){let U=t.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(U=t.TEXTURE_2D_ARRAY),g.isData3DTexture&&(U=t.TEXTURE_3D);const G=Ge(E,g),B=g.source;n.bindTexture(U,E.__webglTexture,t.TEXTURE0+D);const he=i.get(B);if(B.version!==he.__version||G===!0){n.activeTexture(t.TEXTURE0+D);const ue=it.getPrimaries(it.workingColorSpace),fe=g.colorSpace===Ei?null:it.getPrimaries(g.colorSpace),De=g.colorSpace===Ei||ue===fe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);let le=y(g.image,!1,r.maxTextureSize);le=ce(g,le);const _e=s.convert(g.format,g.colorSpace),Re=s.convert(g.type);let Ne=b(g.internalFormat,_e,Re,g.colorSpace,g.isVideoTexture);Se(U,g);let Te;const Fe=g.mipmaps,Ie=g.isVideoTexture!==!0,st=he.__version===void 0||G===!0,I=B.dataReady,Me=M(g,le);if(g.isDepthTexture)Ne=S(g.format===$r,g.type),st&&(Ie?n.texStorage2D(t.TEXTURE_2D,1,Ne,le.width,le.height):n.texImage2D(t.TEXTURE_2D,0,Ne,le.width,le.height,0,_e,Re,null));else if(g.isDataTexture)if(Fe.length>0){Ie&&st&&n.texStorage2D(t.TEXTURE_2D,Me,Ne,Fe[0].width,Fe[0].height);for(let ee=0,ae=Fe.length;ee<ae;ee++)Te=Fe[ee],Ie?I&&n.texSubImage2D(t.TEXTURE_2D,ee,0,0,Te.width,Te.height,_e,Re,Te.data):n.texImage2D(t.TEXTURE_2D,ee,Ne,Te.width,Te.height,0,_e,Re,Te.data);g.generateMipmaps=!1}else Ie?(st&&n.texStorage2D(t.TEXTURE_2D,Me,Ne,le.width,le.height),I&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,le.width,le.height,_e,Re,le.data)):n.texImage2D(t.TEXTURE_2D,0,Ne,le.width,le.height,0,_e,Re,le.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Ie&&st&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Me,Ne,Fe[0].width,Fe[0].height,le.depth);for(let ee=0,ae=Fe.length;ee<ae;ee++)if(Te=Fe[ee],g.format!==Tn)if(_e!==null)if(Ie){if(I)if(g.layerUpdates.size>0){const xe=sh(Te.width,Te.height,g.format,g.type);for(const Ee of g.layerUpdates){const Ye=Te.data.subarray(Ee*xe/Te.data.BYTES_PER_ELEMENT,(Ee+1)*xe/Te.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ee,0,0,Ee,Te.width,Te.height,1,_e,Ye,0,0)}g.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ee,0,0,0,Te.width,Te.height,le.depth,_e,Te.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ee,Ne,Te.width,Te.height,le.depth,0,Te.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ie?I&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ee,0,0,0,Te.width,Te.height,le.depth,_e,Re,Te.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ee,Ne,Te.width,Te.height,le.depth,0,_e,Re,Te.data)}else{Ie&&st&&n.texStorage2D(t.TEXTURE_2D,Me,Ne,Fe[0].width,Fe[0].height);for(let ee=0,ae=Fe.length;ee<ae;ee++)Te=Fe[ee],g.format!==Tn?_e!==null?Ie?I&&n.compressedTexSubImage2D(t.TEXTURE_2D,ee,0,0,Te.width,Te.height,_e,Te.data):n.compressedTexImage2D(t.TEXTURE_2D,ee,Ne,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?I&&n.texSubImage2D(t.TEXTURE_2D,ee,0,0,Te.width,Te.height,_e,Re,Te.data):n.texImage2D(t.TEXTURE_2D,ee,Ne,Te.width,Te.height,0,_e,Re,Te.data)}else if(g.isDataArrayTexture)if(Ie){if(st&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Me,Ne,le.width,le.height,le.depth),I)if(g.layerUpdates.size>0){const ee=sh(le.width,le.height,g.format,g.type);for(const ae of g.layerUpdates){const xe=le.data.subarray(ae*ee/le.data.BYTES_PER_ELEMENT,(ae+1)*ee/le.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ae,le.width,le.height,1,_e,Re,xe)}g.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,_e,Re,le.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ne,le.width,le.height,le.depth,0,_e,Re,le.data);else if(g.isData3DTexture)Ie?(st&&n.texStorage3D(t.TEXTURE_3D,Me,Ne,le.width,le.height,le.depth),I&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,_e,Re,le.data)):n.texImage3D(t.TEXTURE_3D,0,Ne,le.width,le.height,le.depth,0,_e,Re,le.data);else if(g.isFramebufferTexture){if(st)if(Ie)n.texStorage2D(t.TEXTURE_2D,Me,Ne,le.width,le.height);else{let ee=le.width,ae=le.height;for(let xe=0;xe<Me;xe++)n.texImage2D(t.TEXTURE_2D,xe,Ne,ee,ae,0,_e,Re,null),ee>>=1,ae>>=1}}else if(Fe.length>0){if(Ie&&st){const ee=te(Fe[0]);n.texStorage2D(t.TEXTURE_2D,Me,Ne,ee.width,ee.height)}for(let ee=0,ae=Fe.length;ee<ae;ee++)Te=Fe[ee],Ie?I&&n.texSubImage2D(t.TEXTURE_2D,ee,0,0,_e,Re,Te):n.texImage2D(t.TEXTURE_2D,ee,Ne,_e,Re,Te);g.generateMipmaps=!1}else if(Ie){if(st){const ee=te(le);n.texStorage2D(t.TEXTURE_2D,Me,Ne,ee.width,ee.height)}I&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,_e,Re,le)}else n.texImage2D(t.TEXTURE_2D,0,Ne,_e,Re,le);p(g)&&m(U),he.__version=B.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function ie(E,g,D){if(g.image.length!==6)return;const U=Ge(E,g),G=g.source;n.bindTexture(t.TEXTURE_CUBE_MAP,E.__webglTexture,t.TEXTURE0+D);const B=i.get(G);if(G.version!==B.__version||U===!0){n.activeTexture(t.TEXTURE0+D);const he=it.getPrimaries(it.workingColorSpace),ue=g.colorSpace===Ei?null:it.getPrimaries(g.colorSpace),fe=g.colorSpace===Ei||he===ue?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const De=g.isCompressedTexture||g.image[0].isCompressedTexture,le=g.image[0]&&g.image[0].isDataTexture,_e=[];for(let ae=0;ae<6;ae++)!De&&!le?_e[ae]=y(g.image[ae],!0,r.maxCubemapSize):_e[ae]=le?g.image[ae].image:g.image[ae],_e[ae]=ce(g,_e[ae]);const Re=_e[0],Ne=s.convert(g.format,g.colorSpace),Te=s.convert(g.type),Fe=b(g.internalFormat,Ne,Te,g.colorSpace),Ie=g.isVideoTexture!==!0,st=B.__version===void 0||U===!0,I=G.dataReady;let Me=M(g,Re);Se(t.TEXTURE_CUBE_MAP,g);let ee;if(De){Ie&&st&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Me,Fe,Re.width,Re.height);for(let ae=0;ae<6;ae++){ee=_e[ae].mipmaps;for(let xe=0;xe<ee.length;xe++){const Ee=ee[xe];g.format!==Tn?Ne!==null?Ie?I&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,xe,0,0,Ee.width,Ee.height,Ne,Ee.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,xe,Fe,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ie?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,xe,0,0,Ee.width,Ee.height,Ne,Te,Ee.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,xe,Fe,Ee.width,Ee.height,0,Ne,Te,Ee.data)}}}else{if(ee=g.mipmaps,Ie&&st){ee.length>0&&Me++;const ae=te(_e[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Me,Fe,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(le){Ie?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,_e[ae].width,_e[ae].height,Ne,Te,_e[ae].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Fe,_e[ae].width,_e[ae].height,0,Ne,Te,_e[ae].data);for(let xe=0;xe<ee.length;xe++){const Ye=ee[xe].image[ae].image;Ie?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,xe+1,0,0,Ye.width,Ye.height,Ne,Te,Ye.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,xe+1,Fe,Ye.width,Ye.height,0,Ne,Te,Ye.data)}}else{Ie?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Ne,Te,_e[ae]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Fe,Ne,Te,_e[ae]);for(let xe=0;xe<ee.length;xe++){const Ee=ee[xe];Ie?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,xe+1,0,0,Ne,Te,Ee.image[ae]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,xe+1,Fe,Ne,Te,Ee.image[ae])}}}p(g)&&m(t.TEXTURE_CUBE_MAP),B.__version=G.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function V(E,g,D,U,G,B){const he=s.convert(D.format,D.colorSpace),ue=s.convert(D.type),fe=b(D.internalFormat,he,ue,D.colorSpace);if(!i.get(g).__hasExternalTextures){const le=Math.max(1,g.width>>B),_e=Math.max(1,g.height>>B);G===t.TEXTURE_3D||G===t.TEXTURE_2D_ARRAY?n.texImage3D(G,B,fe,le,_e,g.depth,0,he,ue,null):n.texImage2D(G,B,fe,le,_e,0,he,ue,null)}n.bindFramebuffer(t.FRAMEBUFFER,E),J(g)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,U,G,i.get(D).__webglTexture,0,Q(g)):(G===t.TEXTURE_2D||G>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&G<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,U,G,i.get(D).__webglTexture,B),n.bindFramebuffer(t.FRAMEBUFFER,null)}function se(E,g,D){if(t.bindRenderbuffer(t.RENDERBUFFER,E),g.depthBuffer){const U=g.depthTexture,G=U&&U.isDepthTexture?U.type:null,B=S(g.stencilBuffer,G),he=g.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=Q(g);J(g)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ue,B,g.width,g.height):D?t.renderbufferStorageMultisample(t.RENDERBUFFER,ue,B,g.width,g.height):t.renderbufferStorage(t.RENDERBUFFER,B,g.width,g.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,he,t.RENDERBUFFER,E)}else{const U=g.textures;for(let G=0;G<U.length;G++){const B=U[G],he=s.convert(B.format,B.colorSpace),ue=s.convert(B.type),fe=b(B.internalFormat,he,ue,B.colorSpace),De=Q(g);D&&J(g)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,De,fe,g.width,g.height):J(g)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,De,fe,g.width,g.height):t.renderbufferStorage(t.RENDERBUFFER,fe,g.width,g.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function pe(E,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,E),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(g.depthTexture).__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),Z(g.depthTexture,0);const U=i.get(g.depthTexture).__webglTexture,G=Q(g);if(g.depthTexture.format===Fr)J(g)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,U,0,G):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,U,0);else if(g.depthTexture.format===$r)J(g)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,U,0,G):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,U,0);else throw new Error("Unknown depthTexture format")}function Oe(E){const g=i.get(E),D=E.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==E.depthTexture){const U=E.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),U){const G=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,U.removeEventListener("dispose",G)};U.addEventListener("dispose",G),g.__depthDisposeCallback=G}g.__boundDepthTexture=U}if(E.depthTexture&&!g.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");pe(g.__webglFramebuffer,E)}else if(D){g.__webglDepthbuffer=[];for(let U=0;U<6;U++)if(n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer[U]),g.__webglDepthbuffer[U]===void 0)g.__webglDepthbuffer[U]=t.createRenderbuffer(),se(g.__webglDepthbuffer[U],E,!1);else{const G=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,B=g.__webglDepthbuffer[U];t.bindRenderbuffer(t.RENDERBUFFER,B),t.framebufferRenderbuffer(t.FRAMEBUFFER,G,t.RENDERBUFFER,B)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=t.createRenderbuffer(),se(g.__webglDepthbuffer,E,!1);else{const U=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,G=g.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,G),t.framebufferRenderbuffer(t.FRAMEBUFFER,U,t.RENDERBUFFER,G)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ue(E,g,D){const U=i.get(E);g!==void 0&&V(U.__webglFramebuffer,E,E.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),D!==void 0&&Oe(E)}function Ve(E){const g=E.texture,D=i.get(E),U=i.get(g);E.addEventListener("dispose",C);const G=E.textures,B=E.isWebGLCubeRenderTarget===!0,he=G.length>1;if(he||(U.__webglTexture===void 0&&(U.__webglTexture=t.createTexture()),U.__version=g.version,o.memory.textures++),B){D.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(g.mipmaps&&g.mipmaps.length>0){D.__webglFramebuffer[ue]=[];for(let fe=0;fe<g.mipmaps.length;fe++)D.__webglFramebuffer[ue][fe]=t.createFramebuffer()}else D.__webglFramebuffer[ue]=t.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){D.__webglFramebuffer=[];for(let ue=0;ue<g.mipmaps.length;ue++)D.__webglFramebuffer[ue]=t.createFramebuffer()}else D.__webglFramebuffer=t.createFramebuffer();if(he)for(let ue=0,fe=G.length;ue<fe;ue++){const De=i.get(G[ue]);De.__webglTexture===void 0&&(De.__webglTexture=t.createTexture(),o.memory.textures++)}if(E.samples>0&&J(E)===!1){D.__webglMultisampledFramebuffer=t.createFramebuffer(),D.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let ue=0;ue<G.length;ue++){const fe=G[ue];D.__webglColorRenderbuffer[ue]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,D.__webglColorRenderbuffer[ue]);const De=s.convert(fe.format,fe.colorSpace),le=s.convert(fe.type),_e=b(fe.internalFormat,De,le,fe.colorSpace,E.isXRRenderTarget===!0),Re=Q(E);t.renderbufferStorageMultisample(t.RENDERBUFFER,Re,_e,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,D.__webglColorRenderbuffer[ue])}t.bindRenderbuffer(t.RENDERBUFFER,null),E.depthBuffer&&(D.__webglDepthRenderbuffer=t.createRenderbuffer(),se(D.__webglDepthRenderbuffer,E,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(B){n.bindTexture(t.TEXTURE_CUBE_MAP,U.__webglTexture),Se(t.TEXTURE_CUBE_MAP,g);for(let ue=0;ue<6;ue++)if(g.mipmaps&&g.mipmaps.length>0)for(let fe=0;fe<g.mipmaps.length;fe++)V(D.__webglFramebuffer[ue][fe],E,g,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,fe);else V(D.__webglFramebuffer[ue],E,g,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);p(g)&&m(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(he){for(let ue=0,fe=G.length;ue<fe;ue++){const De=G[ue],le=i.get(De);n.bindTexture(t.TEXTURE_2D,le.__webglTexture),Se(t.TEXTURE_2D,De),V(D.__webglFramebuffer,E,De,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,0),p(De)&&m(t.TEXTURE_2D)}n.unbindTexture()}else{let ue=t.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ue=E.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ue,U.__webglTexture),Se(ue,g),g.mipmaps&&g.mipmaps.length>0)for(let fe=0;fe<g.mipmaps.length;fe++)V(D.__webglFramebuffer[fe],E,g,t.COLOR_ATTACHMENT0,ue,fe);else V(D.__webglFramebuffer,E,g,t.COLOR_ATTACHMENT0,ue,0);p(g)&&m(ue),n.unbindTexture()}E.depthBuffer&&Oe(E)}function je(E){const g=E.textures;for(let D=0,U=g.length;D<U;D++){const G=g[D];if(p(G)){const B=E.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,he=i.get(G).__webglTexture;n.bindTexture(B,he),m(B),n.unbindTexture()}}}const w=[],_=[];function X(E){if(E.samples>0){if(J(E)===!1){const g=E.textures,D=E.width,U=E.height;let G=t.COLOR_BUFFER_BIT;const B=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,he=i.get(E),ue=g.length>1;if(ue)for(let fe=0;fe<g.length;fe++)n.bindFramebuffer(t.FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,he.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let fe=0;fe<g.length;fe++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(G|=t.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(G|=t.STENCIL_BUFFER_BIT)),ue){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,he.__webglColorRenderbuffer[fe]);const De=i.get(g[fe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,De,0)}t.blitFramebuffer(0,0,D,U,0,0,D,U,G,t.NEAREST),l===!0&&(w.length=0,_.length=0,w.push(t.COLOR_ATTACHMENT0+fe),E.depthBuffer&&E.resolveDepthBuffer===!1&&(w.push(B),_.push(B),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,_)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,w))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ue)for(let fe=0;fe<g.length;fe++){n.bindFramebuffer(t.FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,he.__webglColorRenderbuffer[fe]);const De=i.get(g[fe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,he.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,De,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const g=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[g])}}}function Q(E){return Math.min(r.maxSamples,E.samples)}function J(E){const g=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function H(E){const g=o.render.frame;u.get(E)!==g&&(u.set(E,g),E.update())}function ce(E,g){const D=E.colorSpace,U=E.format,G=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||D!==Di&&D!==Ei&&(it.getTransfer(D)===mt?(U!==Tn||G!==ui)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),g}function te(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=$,this.resetTextureUnits=T,this.setTexture2D=Z,this.setTexture2DArray=oe,this.setTexture3D=z,this.setTextureCube=Y,this.rebindTextures=Ue,this.setupRenderTarget=Ve,this.updateRenderTargetMipmap=je,this.updateMultisampleRenderTarget=X,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=V,this.useMultisampledRTT=J}function qM(t,e){function n(i,r=Ei){let s;const o=it.getTransfer(r);if(i===ui)return t.UNSIGNED_BYTE;if(i===Jc)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Qc)return t.UNSIGNED_SHORT_5_5_5_1;if(i===zd)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Hd)return t.BYTE;if(i===Gd)return t.SHORT;if(i===bs)return t.UNSIGNED_SHORT;if(i===Zc)return t.INT;if(i===nr)return t.UNSIGNED_INT;if(i===ii)return t.FLOAT;if(i===Bs)return t.HALF_FLOAT;if(i===Vd)return t.ALPHA;if(i===Wd)return t.RGB;if(i===Tn)return t.RGBA;if(i===Xd)return t.LUMINANCE;if(i===qd)return t.LUMINANCE_ALPHA;if(i===Fr)return t.DEPTH_COMPONENT;if(i===$r)return t.DEPTH_STENCIL;if(i===$d)return t.RED;if(i===eu)return t.RED_INTEGER;if(i===Kd)return t.RG;if(i===tu)return t.RG_INTEGER;if(i===nu)return t.RGBA_INTEGER;if(i===Po||i===Lo||i===Do||i===Io)if(o===mt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Po)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Lo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Do)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Io)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Po)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Lo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Do)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Io)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===nc||i===ic||i===rc||i===sc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===nc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ic)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===rc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===sc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===oc||i===ac||i===lc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===oc||i===ac)return o===mt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===lc)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===cc||i===uc||i===fc||i===hc||i===dc||i===pc||i===mc||i===gc||i===_c||i===vc||i===xc||i===yc||i===Sc||i===Mc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===cc)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===uc)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===fc)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===hc)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===dc)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===pc)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===mc)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===gc)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===_c)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===vc)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===xc)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===yc)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Sc)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Mc)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Uo||i===Ec||i===Tc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Uo)return o===mt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ec)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Tc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Yd||i===bc||i===Ac||i===wc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Uo)return s.COMPRESSED_RED_RGTC1_EXT;if(i===bc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ac)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===wc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===qr?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class $M extends rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class yo extends It{constructor(){super(),this.isGroup=!0,this.type="Group"}}const KM={type:"move"};class yl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const y of e.hand.values()){const p=n.getJointPose(y,i),m=this._getHandJoint(c,y);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,v=.005;c.inputState.pinching&&h>d+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(KM)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new yo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const YM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class ZM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new Jt,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Li({vertexShader:YM,fragmentShader:jM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Vt(new Vs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class JM extends Yr{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,v=null;const y=new ZM,p=n.getContextAttributes();let m=null,b=null;const S=[],M=[],P=new qe;let C=null;const R=new rn;R.layers.enable(1),R.viewport=new ut;const L=new rn;L.layers.enable(2),L.viewport=new ut;const j=[R,L],x=new $M;x.layers.enable(1),x.layers.enable(2);let T=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let V=S[ie];return V===void 0&&(V=new yl,S[ie]=V),V.getTargetRaySpace()},this.getControllerGrip=function(ie){let V=S[ie];return V===void 0&&(V=new yl,S[ie]=V),V.getGripSpace()},this.getHand=function(ie){let V=S[ie];return V===void 0&&(V=new yl,S[ie]=V),V.getHandSpace()};function K(ie){const V=M.indexOf(ie.inputSource);if(V===-1)return;const se=S[V];se!==void 0&&(se.update(ie.inputSource,ie.frame,c||o),se.dispatchEvent({type:ie.type,data:ie.inputSource}))}function Z(){r.removeEventListener("select",K),r.removeEventListener("selectstart",K),r.removeEventListener("selectend",K),r.removeEventListener("squeeze",K),r.removeEventListener("squeezestart",K),r.removeEventListener("squeezeend",K),r.removeEventListener("end",Z),r.removeEventListener("inputsourceschange",oe);for(let ie=0;ie<S.length;ie++){const V=M[ie];V!==null&&(M[ie]=null,S[ie].disconnect(V))}T=null,$=null,y.reset(),e.setRenderTarget(m),d=null,h=null,f=null,r=null,b=null,$e.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){s=ie,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){a=ie,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ie){c=ie},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(ie){if(r=ie,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",K),r.addEventListener("selectstart",K),r.addEventListener("selectend",K),r.addEventListener("squeeze",K),r.addEventListener("squeezestart",K),r.addEventListener("squeezeend",K),r.addEventListener("end",Z),r.addEventListener("inputsourceschange",oe),p.xrCompatible!==!0&&await n.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(P),r.renderState.layers===void 0){const V={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,n,V),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),b=new ir(d.framebufferWidth,d.framebufferHeight,{format:Tn,type:ui,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let V=null,se=null,pe=null;p.depth&&(pe=p.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,V=p.stencil?$r:Fr,se=p.stencil?qr:nr);const Oe={colorFormat:n.RGBA8,depthFormat:pe,scaleFactor:s};f=new XRWebGLBinding(r,n),h=f.createProjectionLayer(Oe),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),b=new ir(h.textureWidth,h.textureHeight,{format:Tn,type:ui,depthTexture:new up(h.textureWidth,h.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,V),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),$e.setContext(r),$e.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function oe(ie){for(let V=0;V<ie.removed.length;V++){const se=ie.removed[V],pe=M.indexOf(se);pe>=0&&(M[pe]=null,S[pe].disconnect(se))}for(let V=0;V<ie.added.length;V++){const se=ie.added[V];let pe=M.indexOf(se);if(pe===-1){for(let Ue=0;Ue<S.length;Ue++)if(Ue>=M.length){M.push(se),pe=Ue;break}else if(M[Ue]===null){M[Ue]=se,pe=Ue;break}if(pe===-1)break}const Oe=S[pe];Oe&&Oe.connect(se)}}const z=new F,Y=new F;function k(ie,V,se){z.setFromMatrixPosition(V.matrixWorld),Y.setFromMatrixPosition(se.matrixWorld);const pe=z.distanceTo(Y),Oe=V.projectionMatrix.elements,Ue=se.projectionMatrix.elements,Ve=Oe[14]/(Oe[10]-1),je=Oe[14]/(Oe[10]+1),w=(Oe[9]+1)/Oe[5],_=(Oe[9]-1)/Oe[5],X=(Oe[8]-1)/Oe[0],Q=(Ue[8]+1)/Ue[0],J=Ve*X,H=Ve*Q,ce=pe/(-X+Q),te=ce*-X;if(V.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(te),ie.translateZ(ce),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),Oe[10]===-1)ie.projectionMatrix.copy(V.projectionMatrix),ie.projectionMatrixInverse.copy(V.projectionMatrixInverse);else{const E=Ve+ce,g=je+ce,D=J-te,U=H+(pe-te),G=w*je/g*E,B=_*je/g*E;ie.projectionMatrix.makePerspective(D,U,G,B,E,g),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function ge(ie,V){V===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(V.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(r===null)return;let V=ie.near,se=ie.far;y.texture!==null&&(y.depthNear>0&&(V=y.depthNear),y.depthFar>0&&(se=y.depthFar)),x.near=L.near=R.near=V,x.far=L.far=R.far=se,(T!==x.near||$!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),T=x.near,$=x.far);const pe=ie.parent,Oe=x.cameras;ge(x,pe);for(let Ue=0;Ue<Oe.length;Ue++)ge(Oe[Ue],pe);Oe.length===2?k(x,R,L):x.projectionMatrix.copy(R.projectionMatrix),ve(ie,x,pe)};function ve(ie,V,se){se===null?ie.matrix.copy(V.matrixWorld):(ie.matrix.copy(se.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(V.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(V.projectionMatrix),ie.projectionMatrixInverse.copy(V.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=Rc*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(ie){l=ie,h!==null&&(h.fixedFoveation=ie),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=ie)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(x)};let Se=null;function Ge(ie,V){if(u=V.getViewerPose(c||o),v=V,u!==null){const se=u.views;d!==null&&(e.setRenderTargetFramebuffer(b,d.framebuffer),e.setRenderTarget(b));let pe=!1;se.length!==x.cameras.length&&(x.cameras.length=0,pe=!0);for(let Ue=0;Ue<se.length;Ue++){const Ve=se[Ue];let je=null;if(d!==null)je=d.getViewport(Ve);else{const _=f.getViewSubImage(h,Ve);je=_.viewport,Ue===0&&(e.setRenderTargetTextures(b,_.colorTexture,h.ignoreDepthValues?void 0:_.depthStencilTexture),e.setRenderTarget(b))}let w=j[Ue];w===void 0&&(w=new rn,w.layers.enable(Ue),w.viewport=new ut,j[Ue]=w),w.matrix.fromArray(Ve.transform.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale),w.projectionMatrix.fromArray(Ve.projectionMatrix),w.projectionMatrixInverse.copy(w.projectionMatrix).invert(),w.viewport.set(je.x,je.y,je.width,je.height),Ue===0&&(x.matrix.copy(w.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),pe===!0&&x.cameras.push(w)}const Oe=r.enabledFeatures;if(Oe&&Oe.includes("depth-sensing")){const Ue=f.getDepthInformation(se[0]);Ue&&Ue.isValid&&Ue.texture&&y.init(e,Ue,r.renderState)}}for(let se=0;se<S.length;se++){const pe=M[se],Oe=S[se];pe!==null&&Oe!==void 0&&Oe.update(pe,V,c||o)}Se&&Se(ie,V),V.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:V}),v=null}const $e=new lp;$e.setAnimationLoop(Ge),this.setAnimationLoop=function(ie){Se=ie},this.dispose=function(){}}}const Vi=new Gn,QM=new gt;function eE(t,e){function n(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,sp(t)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function r(p,m,b,S,M){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),f(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m)):m.isMeshStandardMaterial?(s(p,m),h(p,m),m.isMeshPhysicalMaterial&&d(p,m,M)):m.isMeshMatcapMaterial?(s(p,m),v(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),y(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,b,S):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,n(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,n(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,n(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Zt&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,n(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Zt&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,n(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,n(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,n(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const b=e.get(m),S=b.envMap,M=b.envMapRotation;S&&(p.envMap.value=S,Vi.copy(M),Vi.x*=-1,Vi.y*=-1,Vi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Vi.y*=-1,Vi.z*=-1),p.envMapRotation.value.setFromMatrix4(QM.makeRotationFromEuler(Vi)),p.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,n(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,n(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,n(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,b,S){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*b,p.scale.value=S*.5,m.map&&(p.map.value=m.map,n(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,n(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,n(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,n(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function f(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function h(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,n(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,n(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,b){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,n(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,n(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,n(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,n(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,n(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Zt&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,n(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,n(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,n(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,n(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,n(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,n(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,n(m.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,m){m.matcap&&(p.matcap.value=m.matcap)}function y(p,m){const b=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function tE(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,S){const M=S.program;i.uniformBlockBinding(b,M)}function c(b,S){let M=r[b.id];M===void 0&&(v(b),M=u(b),r[b.id]=M,b.addEventListener("dispose",p));const P=S.program;i.updateUBOMapping(b,P);const C=e.render.frame;s[b.id]!==C&&(h(b),s[b.id]=C)}function u(b){const S=f();b.__bindingPointIndex=S;const M=t.createBuffer(),P=b.__size,C=b.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,P,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,S,M),M}function f(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(b){const S=r[b.id],M=b.uniforms,P=b.__cache;t.bindBuffer(t.UNIFORM_BUFFER,S);for(let C=0,R=M.length;C<R;C++){const L=Array.isArray(M[C])?M[C]:[M[C]];for(let j=0,x=L.length;j<x;j++){const T=L[j];if(d(T,C,j,P)===!0){const $=T.__offset,K=Array.isArray(T.value)?T.value:[T.value];let Z=0;for(let oe=0;oe<K.length;oe++){const z=K[oe],Y=y(z);typeof z=="number"||typeof z=="boolean"?(T.__data[0]=z,t.bufferSubData(t.UNIFORM_BUFFER,$+Z,T.__data)):z.isMatrix3?(T.__data[0]=z.elements[0],T.__data[1]=z.elements[1],T.__data[2]=z.elements[2],T.__data[3]=0,T.__data[4]=z.elements[3],T.__data[5]=z.elements[4],T.__data[6]=z.elements[5],T.__data[7]=0,T.__data[8]=z.elements[6],T.__data[9]=z.elements[7],T.__data[10]=z.elements[8],T.__data[11]=0):(z.toArray(T.__data,Z),Z+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,$,T.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function d(b,S,M,P){const C=b.value,R=S+"_"+M;if(P[R]===void 0)return typeof C=="number"||typeof C=="boolean"?P[R]=C:P[R]=C.clone(),!0;{const L=P[R];if(typeof C=="number"||typeof C=="boolean"){if(L!==C)return P[R]=C,!0}else if(L.equals(C)===!1)return L.copy(C),!0}return!1}function v(b){const S=b.uniforms;let M=0;const P=16;for(let R=0,L=S.length;R<L;R++){const j=Array.isArray(S[R])?S[R]:[S[R]];for(let x=0,T=j.length;x<T;x++){const $=j[x],K=Array.isArray($.value)?$.value:[$.value];for(let Z=0,oe=K.length;Z<oe;Z++){const z=K[Z],Y=y(z),k=M%P,ge=k%Y.boundary,ve=k+ge;M+=ge,ve!==0&&P-ve<Y.storage&&(M+=P-ve),$.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=M,M+=Y.storage}}}const C=M%P;return C>0&&(M+=P-C),b.__size=M,b.__cache={},this}function y(b){const S={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(S.boundary=4,S.storage=4):b.isVector2?(S.boundary=8,S.storage=8):b.isVector3||b.isColor?(S.boundary=16,S.storage=12):b.isVector4?(S.boundary=16,S.storage=16):b.isMatrix3?(S.boundary=48,S.storage=48):b.isMatrix4?(S.boundary=64,S.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),S}function p(b){const S=b.target;S.removeEventListener("dispose",p);const M=o.indexOf(S.__bindingPointIndex);o.splice(M,1),t.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function m(){for(const b in r)t.deleteBuffer(r[b]);o=[],r={},s={}}return{bind:l,update:c,dispose:m}}class nE{constructor(e={}){const{canvas:n=z0(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const d=new Uint32Array(4),v=new Int32Array(4);let y=null,p=null;const m=[],b=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Sn,this.toneMapping=wi,this.toneMappingExposure=1;const S=this;let M=!1,P=0,C=0,R=null,L=-1,j=null;const x=new ut,T=new ut;let $=null;const K=new Ke(0);let Z=0,oe=n.width,z=n.height,Y=1,k=null,ge=null;const ve=new ut(0,0,oe,z),Se=new ut(0,0,oe,z);let Ge=!1;const $e=new su;let ie=!1,V=!1;const se=new gt,pe=new gt,Oe=new F,Ue=new ut,Ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let je=!1;function w(){return R===null?Y:1}let _=i;function X(A,N){return n.getContext(A,N)}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${jc}`),n.addEventListener("webglcontextlost",ae,!1),n.addEventListener("webglcontextrestored",xe,!1),n.addEventListener("webglcontextcreationerror",Ee,!1),_===null){const N="webgl2";if(_=X(N,A),_===null)throw X(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Q,J,H,ce,te,E,g,D,U,G,B,he,ue,fe,De,le,_e,Re,Ne,Te,Fe,Ie,st,I;function Me(){Q=new aS(_),Q.init(),Ie=new qM(_,Q),J=new tS(_,Q,e,Ie),H=new VM(_),J.reverseDepthBuffer&&H.buffers.depth.setReversed(!0),ce=new uS(_),te=new RM,E=new XM(_,Q,H,te,J,Ie,ce),g=new iS(S),D=new oS(S),U=new _v(_),st=new Qy(_,U),G=new lS(_,U,ce,st),B=new hS(_,G,U,ce),Ne=new fS(_,J,E),le=new nS(te),he=new wM(S,g,D,Q,J,st,le),ue=new eE(S,te),fe=new PM,De=new OM(Q),Re=new Jy(S,g,D,H,B,h,l),_e=new GM(S,B,J),I=new tE(_,ce,J,H),Te=new eS(_,Q,ce),Fe=new cS(_,Q,ce),ce.programs=he.programs,S.capabilities=J,S.extensions=Q,S.properties=te,S.renderLists=fe,S.shadowMap=_e,S.state=H,S.info=ce}Me();const ee=new JM(S,_);this.xr=ee,this.getContext=function(){return _},this.getContextAttributes=function(){return _.getContextAttributes()},this.forceContextLoss=function(){const A=Q.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Q.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(A){A!==void 0&&(Y=A,this.setSize(oe,z,!1))},this.getSize=function(A){return A.set(oe,z)},this.setSize=function(A,N,W=!0){if(ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}oe=A,z=N,n.width=Math.floor(A*Y),n.height=Math.floor(N*Y),W===!0&&(n.style.width=A+"px",n.style.height=N+"px"),this.setViewport(0,0,A,N)},this.getDrawingBufferSize=function(A){return A.set(oe*Y,z*Y).floor()},this.setDrawingBufferSize=function(A,N,W){oe=A,z=N,Y=W,n.width=Math.floor(A*W),n.height=Math.floor(N*W),this.setViewport(0,0,A,N)},this.getCurrentViewport=function(A){return A.copy(x)},this.getViewport=function(A){return A.copy(ve)},this.setViewport=function(A,N,W,q){A.isVector4?ve.set(A.x,A.y,A.z,A.w):ve.set(A,N,W,q),H.viewport(x.copy(ve).multiplyScalar(Y).round())},this.getScissor=function(A){return A.copy(Se)},this.setScissor=function(A,N,W,q){A.isVector4?Se.set(A.x,A.y,A.z,A.w):Se.set(A,N,W,q),H.scissor(T.copy(Se).multiplyScalar(Y).round())},this.getScissorTest=function(){return Ge},this.setScissorTest=function(A){H.setScissorTest(Ge=A)},this.setOpaqueSort=function(A){k=A},this.setTransparentSort=function(A){ge=A},this.getClearColor=function(A){return A.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor.apply(Re,arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha.apply(Re,arguments)},this.clear=function(A=!0,N=!0,W=!0){let q=0;if(A){let O=!1;if(R!==null){const de=R.texture.format;O=de===nu||de===tu||de===eu}if(O){const de=R.texture.type,ye=de===ui||de===nr||de===bs||de===qr||de===Jc||de===Qc,be=Re.getClearColor(),Ae=Re.getClearAlpha(),Be=be.r,He=be.g,Ce=be.b;ye?(d[0]=Be,d[1]=He,d[2]=Ce,d[3]=Ae,_.clearBufferuiv(_.COLOR,0,d)):(v[0]=Be,v[1]=He,v[2]=Ce,v[3]=Ae,_.clearBufferiv(_.COLOR,0,v))}else q|=_.COLOR_BUFFER_BIT}N&&(q|=_.DEPTH_BUFFER_BIT,_.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),W&&(q|=_.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),_.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ae,!1),n.removeEventListener("webglcontextrestored",xe,!1),n.removeEventListener("webglcontextcreationerror",Ee,!1),fe.dispose(),De.dispose(),te.dispose(),g.dispose(),D.dispose(),B.dispose(),st.dispose(),I.dispose(),he.dispose(),ee.dispose(),ee.removeEventListener("sessionstart",du),ee.removeEventListener("sessionend",pu),Ni.stop()};function ae(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function xe(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const A=ce.autoReset,N=_e.enabled,W=_e.autoUpdate,q=_e.needsUpdate,O=_e.type;Me(),ce.autoReset=A,_e.enabled=N,_e.autoUpdate=W,_e.needsUpdate=q,_e.type=O}function Ee(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ye(A){const N=A.target;N.removeEventListener("dispose",Ye),St(N)}function St(A){Xt(A),te.remove(A)}function Xt(A){const N=te.get(A).programs;N!==void 0&&(N.forEach(function(W){he.releaseProgram(W)}),A.isShaderMaterial&&he.releaseShaderCache(A))}this.renderBufferDirect=function(A,N,W,q,O,de){N===null&&(N=Ve);const ye=O.isMesh&&O.matrixWorld.determinant()<0,be=Rp(A,N,W,q,O);H.setMaterial(q,ye);let Ae=W.index,Be=1;if(q.wireframe===!0){if(Ae=G.getWireframeAttribute(W),Ae===void 0)return;Be=2}const He=W.drawRange,Ce=W.attributes.position;let ot=He.start*Be,pt=(He.start+He.count)*Be;de!==null&&(ot=Math.max(ot,de.start*Be),pt=Math.min(pt,(de.start+de.count)*Be)),Ae!==null?(ot=Math.max(ot,0),pt=Math.min(pt,Ae.count)):Ce!=null&&(ot=Math.max(ot,0),pt=Math.min(pt,Ce.count));const _t=pt-ot;if(_t<0||_t===1/0)return;st.setup(O,q,be,W,Ae);let Qt,et=Te;if(Ae!==null&&(Qt=U.get(Ae),et=Fe,et.setIndex(Qt)),O.isMesh)q.wireframe===!0?(H.setLineWidth(q.wireframeLinewidth*w()),et.setMode(_.LINES)):et.setMode(_.TRIANGLES);else if(O.isLine){let Pe=q.linewidth;Pe===void 0&&(Pe=1),H.setLineWidth(Pe*w()),O.isLineSegments?et.setMode(_.LINES):O.isLineLoop?et.setMode(_.LINE_LOOP):et.setMode(_.LINE_STRIP)}else O.isPoints?et.setMode(_.POINTS):O.isSprite&&et.setMode(_.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)et.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Q.get("WEBGL_multi_draw"))et.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Pe=O._multiDrawStarts,Dt=O._multiDrawCounts,tt=O._multiDrawCount,_n=Ae?U.get(Ae).bytesPerElement:1,ar=te.get(q).currentProgram.getUniforms();for(let en=0;en<tt;en++)ar.setValue(_,"_gl_DrawID",en),et.render(Pe[en]/_n,Dt[en])}else if(O.isInstancedMesh)et.renderInstances(ot,_t,O.count);else if(W.isInstancedBufferGeometry){const Pe=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Dt=Math.min(W.instanceCount,Pe);et.renderInstances(ot,_t,Dt)}else et.render(ot,_t)};function Je(A,N,W){A.transparent===!0&&A.side===Bn&&A.forceSinglePass===!1?(A.side=Zt,A.needsUpdate=!0,Xs(A,N,W),A.side=Pi,A.needsUpdate=!0,Xs(A,N,W),A.side=Bn):Xs(A,N,W)}this.compile=function(A,N,W=null){W===null&&(W=A),p=De.get(W),p.init(N),b.push(p),W.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),A!==W&&A.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();const q=new Set;return A.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const de=O.material;if(de)if(Array.isArray(de))for(let ye=0;ye<de.length;ye++){const be=de[ye];Je(be,W,O),q.add(be)}else Je(de,W,O),q.add(de)}),b.pop(),p=null,q},this.compileAsync=function(A,N,W=null){const q=this.compile(A,N,W);return new Promise(O=>{function de(){if(q.forEach(function(ye){te.get(ye).currentProgram.isReady()&&q.delete(ye)}),q.size===0){O(A);return}setTimeout(de,10)}Q.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let qt=null;function Vn(A){qt&&qt(A)}function du(){Ni.stop()}function pu(){Ni.start()}const Ni=new lp;Ni.setAnimationLoop(Vn),typeof self<"u"&&Ni.setContext(self),this.setAnimationLoop=function(A){qt=A,ee.setAnimationLoop(A),A===null?Ni.stop():Ni.start()},ee.addEventListener("sessionstart",du),ee.addEventListener("sessionend",pu),this.render=function(A,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),ee.enabled===!0&&ee.isPresenting===!0&&(ee.cameraAutoUpdate===!0&&ee.updateCamera(N),N=ee.getCamera()),A.isScene===!0&&A.onBeforeRender(S,A,N,R),p=De.get(A,b.length),p.init(N),b.push(p),pe.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),$e.setFromProjectionMatrix(pe),V=this.localClippingEnabled,ie=le.init(this.clippingPlanes,V),y=fe.get(A,m.length),y.init(),m.push(y),ee.enabled===!0&&ee.isPresenting===!0){const de=S.xr.getDepthSensingMesh();de!==null&&Aa(de,N,-1/0,S.sortObjects)}Aa(A,N,0,S.sortObjects),y.finish(),S.sortObjects===!0&&y.sort(k,ge),je=ee.enabled===!1||ee.isPresenting===!1||ee.hasDepthSensing()===!1,je&&Re.addToRenderList(y,A),this.info.render.frame++,ie===!0&&le.beginShadows();const W=p.state.shadowsArray;_e.render(W,A,N),ie===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=y.opaque,O=y.transmissive;if(p.setupLights(),N.isArrayCamera){const de=N.cameras;if(O.length>0)for(let ye=0,be=de.length;ye<be;ye++){const Ae=de[ye];gu(q,O,A,Ae)}je&&Re.render(A);for(let ye=0,be=de.length;ye<be;ye++){const Ae=de[ye];mu(y,A,Ae,Ae.viewport)}}else O.length>0&&gu(q,O,A,N),je&&Re.render(A),mu(y,A,N);R!==null&&(E.updateMultisampleRenderTarget(R),E.updateRenderTargetMipmap(R)),A.isScene===!0&&A.onAfterRender(S,A,N),st.resetDefaultState(),L=-1,j=null,b.pop(),b.length>0?(p=b[b.length-1],ie===!0&&le.setGlobalState(S.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?y=m[m.length-1]:y=null};function Aa(A,N,W,q){if(A.visible===!1)return;if(A.layers.test(N.layers)){if(A.isGroup)W=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(N);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||$e.intersectsSprite(A)){q&&Ue.setFromMatrixPosition(A.matrixWorld).applyMatrix4(pe);const ye=B.update(A),be=A.material;be.visible&&y.push(A,ye,be,W,Ue.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||$e.intersectsObject(A))){const ye=B.update(A),be=A.material;if(q&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ue.copy(A.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),Ue.copy(ye.boundingSphere.center)),Ue.applyMatrix4(A.matrixWorld).applyMatrix4(pe)),Array.isArray(be)){const Ae=ye.groups;for(let Be=0,He=Ae.length;Be<He;Be++){const Ce=Ae[Be],ot=be[Ce.materialIndex];ot&&ot.visible&&y.push(A,ye,ot,W,Ue.z,Ce)}}else be.visible&&y.push(A,ye,be,W,Ue.z,null)}}const de=A.children;for(let ye=0,be=de.length;ye<be;ye++)Aa(de[ye],N,W,q)}function mu(A,N,W,q){const O=A.opaque,de=A.transmissive,ye=A.transparent;p.setupLightsView(W),ie===!0&&le.setGlobalState(S.clippingPlanes,W),q&&H.viewport(x.copy(q)),O.length>0&&Ws(O,N,W),de.length>0&&Ws(de,N,W),ye.length>0&&Ws(ye,N,W),H.buffers.depth.setTest(!0),H.buffers.depth.setMask(!0),H.buffers.color.setMask(!0),H.setPolygonOffset(!1)}function gu(A,N,W,q){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[q.id]===void 0&&(p.state.transmissionRenderTarget[q.id]=new ir(1,1,{generateMipmaps:!0,type:Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float")?Bs:ui,minFilter:ji,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:it.workingColorSpace}));const de=p.state.transmissionRenderTarget[q.id],ye=q.viewport||x;de.setSize(ye.z,ye.w);const be=S.getRenderTarget();S.setRenderTarget(de),S.getClearColor(K),Z=S.getClearAlpha(),Z<1&&S.setClearColor(16777215,.5),S.clear(),je&&Re.render(W);const Ae=S.toneMapping;S.toneMapping=wi;const Be=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),p.setupLightsView(q),ie===!0&&le.setGlobalState(S.clippingPlanes,q),Ws(A,W,q),E.updateMultisampleRenderTarget(de),E.updateRenderTargetMipmap(de),Q.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let Ce=0,ot=N.length;Ce<ot;Ce++){const pt=N[Ce],_t=pt.object,Qt=pt.geometry,et=pt.material,Pe=pt.group;if(et.side===Bn&&_t.layers.test(q.layers)){const Dt=et.side;et.side=Zt,et.needsUpdate=!0,_u(_t,W,q,Qt,et,Pe),et.side=Dt,et.needsUpdate=!0,He=!0}}He===!0&&(E.updateMultisampleRenderTarget(de),E.updateRenderTargetMipmap(de))}S.setRenderTarget(be),S.setClearColor(K,Z),Be!==void 0&&(q.viewport=Be),S.toneMapping=Ae}function Ws(A,N,W){const q=N.isScene===!0?N.overrideMaterial:null;for(let O=0,de=A.length;O<de;O++){const ye=A[O],be=ye.object,Ae=ye.geometry,Be=q===null?ye.material:q,He=ye.group;be.layers.test(W.layers)&&_u(be,N,W,Ae,Be,He)}}function _u(A,N,W,q,O,de){A.onBeforeRender(S,N,W,q,O,de),A.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),O.onBeforeRender(S,N,W,q,A,de),O.transparent===!0&&O.side===Bn&&O.forceSinglePass===!1?(O.side=Zt,O.needsUpdate=!0,S.renderBufferDirect(W,N,q,O,A,de),O.side=Pi,O.needsUpdate=!0,S.renderBufferDirect(W,N,q,O,A,de),O.side=Bn):S.renderBufferDirect(W,N,q,O,A,de),A.onAfterRender(S,N,W,q,O,de)}function Xs(A,N,W){N.isScene!==!0&&(N=Ve);const q=te.get(A),O=p.state.lights,de=p.state.shadowsArray,ye=O.state.version,be=he.getParameters(A,O.state,de,N,W),Ae=he.getProgramCacheKey(be);let Be=q.programs;q.environment=A.isMeshStandardMaterial?N.environment:null,q.fog=N.fog,q.envMap=(A.isMeshStandardMaterial?D:g).get(A.envMap||q.environment),q.envMapRotation=q.environment!==null&&A.envMap===null?N.environmentRotation:A.envMapRotation,Be===void 0&&(A.addEventListener("dispose",Ye),Be=new Map,q.programs=Be);let He=Be.get(Ae);if(He!==void 0){if(q.currentProgram===He&&q.lightsStateVersion===ye)return xu(A,be),He}else be.uniforms=he.getUniforms(A),A.onBeforeCompile(be,S),He=he.acquireProgram(be,Ae),Be.set(Ae,He),q.uniforms=be.uniforms;const Ce=q.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ce.clippingPlanes=le.uniform),xu(A,be),q.needsLights=Pp(A),q.lightsStateVersion=ye,q.needsLights&&(Ce.ambientLightColor.value=O.state.ambient,Ce.lightProbe.value=O.state.probe,Ce.directionalLights.value=O.state.directional,Ce.directionalLightShadows.value=O.state.directionalShadow,Ce.spotLights.value=O.state.spot,Ce.spotLightShadows.value=O.state.spotShadow,Ce.rectAreaLights.value=O.state.rectArea,Ce.ltc_1.value=O.state.rectAreaLTC1,Ce.ltc_2.value=O.state.rectAreaLTC2,Ce.pointLights.value=O.state.point,Ce.pointLightShadows.value=O.state.pointShadow,Ce.hemisphereLights.value=O.state.hemi,Ce.directionalShadowMap.value=O.state.directionalShadowMap,Ce.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ce.spotShadowMap.value=O.state.spotShadowMap,Ce.spotLightMatrix.value=O.state.spotLightMatrix,Ce.spotLightMap.value=O.state.spotLightMap,Ce.pointShadowMap.value=O.state.pointShadowMap,Ce.pointShadowMatrix.value=O.state.pointShadowMatrix),q.currentProgram=He,q.uniformsList=null,He}function vu(A){if(A.uniformsList===null){const N=A.currentProgram.getUniforms();A.uniformsList=Oo.seqWithValue(N.seq,A.uniforms)}return A.uniformsList}function xu(A,N){const W=te.get(A);W.outputColorSpace=N.outputColorSpace,W.batching=N.batching,W.batchingColor=N.batchingColor,W.instancing=N.instancing,W.instancingColor=N.instancingColor,W.instancingMorph=N.instancingMorph,W.skinning=N.skinning,W.morphTargets=N.morphTargets,W.morphNormals=N.morphNormals,W.morphColors=N.morphColors,W.morphTargetsCount=N.morphTargetsCount,W.numClippingPlanes=N.numClippingPlanes,W.numIntersection=N.numClipIntersection,W.vertexAlphas=N.vertexAlphas,W.vertexTangents=N.vertexTangents,W.toneMapping=N.toneMapping}function Rp(A,N,W,q,O){N.isScene!==!0&&(N=Ve),E.resetTextureUnits();const de=N.fog,ye=q.isMeshStandardMaterial?N.environment:null,be=R===null?S.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Di,Ae=(q.isMeshStandardMaterial?D:g).get(q.envMap||ye),Be=q.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,He=!!W.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ce=!!W.morphAttributes.position,ot=!!W.morphAttributes.normal,pt=!!W.morphAttributes.color;let _t=wi;q.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(_t=S.toneMapping);const Qt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,et=Qt!==void 0?Qt.length:0,Pe=te.get(q),Dt=p.state.lights;if(ie===!0&&(V===!0||A!==j)){const un=A===j&&q.id===L;le.setState(q,A,un)}let tt=!1;q.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==Dt.state.version||Pe.outputColorSpace!==be||O.isBatchedMesh&&Pe.batching===!1||!O.isBatchedMesh&&Pe.batching===!0||O.isBatchedMesh&&Pe.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Pe.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Pe.instancing===!1||!O.isInstancedMesh&&Pe.instancing===!0||O.isSkinnedMesh&&Pe.skinning===!1||!O.isSkinnedMesh&&Pe.skinning===!0||O.isInstancedMesh&&Pe.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Pe.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Pe.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Pe.instancingMorph===!1&&O.morphTexture!==null||Pe.envMap!==Ae||q.fog===!0&&Pe.fog!==de||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==le.numPlanes||Pe.numIntersection!==le.numIntersection)||Pe.vertexAlphas!==Be||Pe.vertexTangents!==He||Pe.morphTargets!==Ce||Pe.morphNormals!==ot||Pe.morphColors!==pt||Pe.toneMapping!==_t||Pe.morphTargetsCount!==et)&&(tt=!0):(tt=!0,Pe.__version=q.version);let _n=Pe.currentProgram;tt===!0&&(_n=Xs(q,N,O));let ar=!1,en=!1,wa=!1;const yt=_n.getUniforms(),pi=Pe.uniforms;if(H.useProgram(_n.program)&&(ar=!0,en=!0,wa=!0),q.id!==L&&(L=q.id,en=!0),ar||j!==A){J.reverseDepthBuffer?(se.copy(A.projectionMatrix),W0(se),X0(se),yt.setValue(_,"projectionMatrix",se)):yt.setValue(_,"projectionMatrix",A.projectionMatrix),yt.setValue(_,"viewMatrix",A.matrixWorldInverse);const un=yt.map.cameraPosition;un!==void 0&&un.setValue(_,Oe.setFromMatrixPosition(A.matrixWorld)),J.logarithmicDepthBuffer&&yt.setValue(_,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&yt.setValue(_,"isOrthographic",A.isOrthographicCamera===!0),j!==A&&(j=A,en=!0,wa=!0)}if(O.isSkinnedMesh){yt.setOptional(_,O,"bindMatrix"),yt.setOptional(_,O,"bindMatrixInverse");const un=O.skeleton;un&&(un.boneTexture===null&&un.computeBoneTexture(),yt.setValue(_,"boneTexture",un.boneTexture,E))}O.isBatchedMesh&&(yt.setOptional(_,O,"batchingTexture"),yt.setValue(_,"batchingTexture",O._matricesTexture,E),yt.setOptional(_,O,"batchingIdTexture"),yt.setValue(_,"batchingIdTexture",O._indirectTexture,E),yt.setOptional(_,O,"batchingColorTexture"),O._colorsTexture!==null&&yt.setValue(_,"batchingColorTexture",O._colorsTexture,E));const Ra=W.morphAttributes;if((Ra.position!==void 0||Ra.normal!==void 0||Ra.color!==void 0)&&Ne.update(O,W,_n),(en||Pe.receiveShadow!==O.receiveShadow)&&(Pe.receiveShadow=O.receiveShadow,yt.setValue(_,"receiveShadow",O.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(pi.envMap.value=Ae,pi.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&N.environment!==null&&(pi.envMapIntensity.value=N.environmentIntensity),en&&(yt.setValue(_,"toneMappingExposure",S.toneMappingExposure),Pe.needsLights&&Cp(pi,wa),de&&q.fog===!0&&ue.refreshFogUniforms(pi,de),ue.refreshMaterialUniforms(pi,q,Y,z,p.state.transmissionRenderTarget[A.id]),Oo.upload(_,vu(Pe),pi,E)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Oo.upload(_,vu(Pe),pi,E),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&yt.setValue(_,"center",O.center),yt.setValue(_,"modelViewMatrix",O.modelViewMatrix),yt.setValue(_,"normalMatrix",O.normalMatrix),yt.setValue(_,"modelMatrix",O.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const un=q.uniformsGroups;for(let Ca=0,Lp=un.length;Ca<Lp;Ca++){const yu=un[Ca];I.update(yu,_n),I.bind(yu,_n)}}return _n}function Cp(A,N){A.ambientLightColor.needsUpdate=N,A.lightProbe.needsUpdate=N,A.directionalLights.needsUpdate=N,A.directionalLightShadows.needsUpdate=N,A.pointLights.needsUpdate=N,A.pointLightShadows.needsUpdate=N,A.spotLights.needsUpdate=N,A.spotLightShadows.needsUpdate=N,A.rectAreaLights.needsUpdate=N,A.hemisphereLights.needsUpdate=N}function Pp(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(A,N,W){te.get(A.texture).__webglTexture=N,te.get(A.depthTexture).__webglTexture=W;const q=te.get(A);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=W===void 0,q.__autoAllocateDepthBuffer||Q.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,N){const W=te.get(A);W.__webglFramebuffer=N,W.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(A,N=0,W=0){R=A,P=N,C=W;let q=!0,O=null,de=!1,ye=!1;if(A){const Ae=te.get(A);if(Ae.__useDefaultFramebuffer!==void 0)H.bindFramebuffer(_.FRAMEBUFFER,null),q=!1;else if(Ae.__webglFramebuffer===void 0)E.setupRenderTarget(A);else if(Ae.__hasExternalTextures)E.rebindTextures(A,te.get(A.texture).__webglTexture,te.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Ce=A.depthTexture;if(Ae.__boundDepthTexture!==Ce){if(Ce!==null&&te.has(Ce)&&(A.width!==Ce.image.width||A.height!==Ce.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(A)}}const Be=A.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(ye=!0);const He=te.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(He[N])?O=He[N][W]:O=He[N],de=!0):A.samples>0&&E.useMultisampledRTT(A)===!1?O=te.get(A).__webglMultisampledFramebuffer:Array.isArray(He)?O=He[W]:O=He,x.copy(A.viewport),T.copy(A.scissor),$=A.scissorTest}else x.copy(ve).multiplyScalar(Y).floor(),T.copy(Se).multiplyScalar(Y).floor(),$=Ge;if(H.bindFramebuffer(_.FRAMEBUFFER,O)&&q&&H.drawBuffers(A,O),H.viewport(x),H.scissor(T),H.setScissorTest($),de){const Ae=te.get(A.texture);_.framebufferTexture2D(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_CUBE_MAP_POSITIVE_X+N,Ae.__webglTexture,W)}else if(ye){const Ae=te.get(A.texture),Be=N||0;_.framebufferTextureLayer(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,Ae.__webglTexture,W||0,Be)}L=-1},this.readRenderTargetPixels=function(A,N,W,q,O,de,ye){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=te.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ye!==void 0&&(be=be[ye]),be){H.bindFramebuffer(_.FRAMEBUFFER,be);try{const Ae=A.texture,Be=Ae.format,He=Ae.type;if(!J.textureFormatReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!J.textureTypeReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=A.width-q&&W>=0&&W<=A.height-O&&_.readPixels(N,W,q,O,Ie.convert(Be),Ie.convert(He),de)}finally{const Ae=R!==null?te.get(R).__webglFramebuffer:null;H.bindFramebuffer(_.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(A,N,W,q,O,de,ye){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=te.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ye!==void 0&&(be=be[ye]),be){const Ae=A.texture,Be=Ae.format,He=Ae.type;if(!J.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!J.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=A.width-q&&W>=0&&W<=A.height-O){H.bindFramebuffer(_.FRAMEBUFFER,be);const Ce=_.createBuffer();_.bindBuffer(_.PIXEL_PACK_BUFFER,Ce),_.bufferData(_.PIXEL_PACK_BUFFER,de.byteLength,_.STREAM_READ),_.readPixels(N,W,q,O,Ie.convert(Be),Ie.convert(He),0);const ot=R!==null?te.get(R).__webglFramebuffer:null;H.bindFramebuffer(_.FRAMEBUFFER,ot);const pt=_.fenceSync(_.SYNC_GPU_COMMANDS_COMPLETE,0);return _.flush(),await V0(_,pt,4),_.bindBuffer(_.PIXEL_PACK_BUFFER,Ce),_.getBufferSubData(_.PIXEL_PACK_BUFFER,0,de),_.deleteBuffer(Ce),_.deleteSync(pt),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,N=null,W=0){A.isTexture!==!0&&(No("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,A=arguments[1]);const q=Math.pow(2,-W),O=Math.floor(A.image.width*q),de=Math.floor(A.image.height*q),ye=N!==null?N.x:0,be=N!==null?N.y:0;E.setTexture2D(A,0),_.copyTexSubImage2D(_.TEXTURE_2D,W,0,0,ye,be,O,de),H.unbindTexture()},this.copyTextureToTexture=function(A,N,W=null,q=null,O=0){A.isTexture!==!0&&(No("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,A=arguments[1],N=arguments[2],O=arguments[3]||0,W=null);let de,ye,be,Ae,Be,He;W!==null?(de=W.max.x-W.min.x,ye=W.max.y-W.min.y,be=W.min.x,Ae=W.min.y):(de=A.image.width,ye=A.image.height,be=0,Ae=0),q!==null?(Be=q.x,He=q.y):(Be=0,He=0);const Ce=Ie.convert(N.format),ot=Ie.convert(N.type);E.setTexture2D(N,0),_.pixelStorei(_.UNPACK_FLIP_Y_WEBGL,N.flipY),_.pixelStorei(_.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),_.pixelStorei(_.UNPACK_ALIGNMENT,N.unpackAlignment);const pt=_.getParameter(_.UNPACK_ROW_LENGTH),_t=_.getParameter(_.UNPACK_IMAGE_HEIGHT),Qt=_.getParameter(_.UNPACK_SKIP_PIXELS),et=_.getParameter(_.UNPACK_SKIP_ROWS),Pe=_.getParameter(_.UNPACK_SKIP_IMAGES),Dt=A.isCompressedTexture?A.mipmaps[O]:A.image;_.pixelStorei(_.UNPACK_ROW_LENGTH,Dt.width),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,Dt.height),_.pixelStorei(_.UNPACK_SKIP_PIXELS,be),_.pixelStorei(_.UNPACK_SKIP_ROWS,Ae),A.isDataTexture?_.texSubImage2D(_.TEXTURE_2D,O,Be,He,de,ye,Ce,ot,Dt.data):A.isCompressedTexture?_.compressedTexSubImage2D(_.TEXTURE_2D,O,Be,He,Dt.width,Dt.height,Ce,Dt.data):_.texSubImage2D(_.TEXTURE_2D,O,Be,He,de,ye,Ce,ot,Dt),_.pixelStorei(_.UNPACK_ROW_LENGTH,pt),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,_t),_.pixelStorei(_.UNPACK_SKIP_PIXELS,Qt),_.pixelStorei(_.UNPACK_SKIP_ROWS,et),_.pixelStorei(_.UNPACK_SKIP_IMAGES,Pe),O===0&&N.generateMipmaps&&_.generateMipmap(_.TEXTURE_2D),H.unbindTexture()},this.copyTextureToTexture3D=function(A,N,W=null,q=null,O=0){A.isTexture!==!0&&(No("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,q=arguments[1]||null,A=arguments[2],N=arguments[3],O=arguments[4]||0);let de,ye,be,Ae,Be,He,Ce,ot,pt;const _t=A.isCompressedTexture?A.mipmaps[O]:A.image;W!==null?(de=W.max.x-W.min.x,ye=W.max.y-W.min.y,be=W.max.z-W.min.z,Ae=W.min.x,Be=W.min.y,He=W.min.z):(de=_t.width,ye=_t.height,be=_t.depth,Ae=0,Be=0,He=0),q!==null?(Ce=q.x,ot=q.y,pt=q.z):(Ce=0,ot=0,pt=0);const Qt=Ie.convert(N.format),et=Ie.convert(N.type);let Pe;if(N.isData3DTexture)E.setTexture3D(N,0),Pe=_.TEXTURE_3D;else if(N.isDataArrayTexture||N.isCompressedArrayTexture)E.setTexture2DArray(N,0),Pe=_.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}_.pixelStorei(_.UNPACK_FLIP_Y_WEBGL,N.flipY),_.pixelStorei(_.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),_.pixelStorei(_.UNPACK_ALIGNMENT,N.unpackAlignment);const Dt=_.getParameter(_.UNPACK_ROW_LENGTH),tt=_.getParameter(_.UNPACK_IMAGE_HEIGHT),_n=_.getParameter(_.UNPACK_SKIP_PIXELS),ar=_.getParameter(_.UNPACK_SKIP_ROWS),en=_.getParameter(_.UNPACK_SKIP_IMAGES);_.pixelStorei(_.UNPACK_ROW_LENGTH,_t.width),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,_t.height),_.pixelStorei(_.UNPACK_SKIP_PIXELS,Ae),_.pixelStorei(_.UNPACK_SKIP_ROWS,Be),_.pixelStorei(_.UNPACK_SKIP_IMAGES,He),A.isDataTexture||A.isData3DTexture?_.texSubImage3D(Pe,O,Ce,ot,pt,de,ye,be,Qt,et,_t.data):N.isCompressedArrayTexture?_.compressedTexSubImage3D(Pe,O,Ce,ot,pt,de,ye,be,Qt,_t.data):_.texSubImage3D(Pe,O,Ce,ot,pt,de,ye,be,Qt,et,_t),_.pixelStorei(_.UNPACK_ROW_LENGTH,Dt),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,tt),_.pixelStorei(_.UNPACK_SKIP_PIXELS,_n),_.pixelStorei(_.UNPACK_SKIP_ROWS,ar),_.pixelStorei(_.UNPACK_SKIP_IMAGES,en),O===0&&N.generateMipmaps&&_.generateMipmap(Pe),H.unbindTexture()},this.initRenderTarget=function(A){te.get(A).__webglFramebuffer===void 0&&E.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?E.setTextureCube(A,0):A.isData3DTexture?E.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?E.setTexture2DArray(A,0):E.setTexture2D(A,0),H.unbindTexture()},this.resetState=function(){P=0,C=0,R=null,H.reset(),st.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===iu?"display-p3":"srgb",n.unpackColorSpace=it.workingColorSpace===Ta?"display-p3":"srgb"}}class au{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ke(e),this.density=n}clone(){return new au(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class iE extends It{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gn,this.environmentIntensity=1,this.environmentRotation=new Gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class lu extends di{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),c(i),u(),this.setAttribute("position",new cn(s,3)),this.setAttribute("normal",new cn(s.slice(),3)),this.setAttribute("uv",new cn(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(b){const S=new F,M=new F,P=new F;for(let C=0;C<n.length;C+=3)d(n[C+0],S),d(n[C+1],M),d(n[C+2],P),l(S,M,P,b)}function l(b,S,M,P){const C=P+1,R=[];for(let L=0;L<=C;L++){R[L]=[];const j=b.clone().lerp(M,L/C),x=S.clone().lerp(M,L/C),T=C-L;for(let $=0;$<=T;$++)$===0&&L===C?R[L][$]=j:R[L][$]=j.clone().lerp(x,$/T)}for(let L=0;L<C;L++)for(let j=0;j<2*(C-L)-1;j++){const x=Math.floor(j/2);j%2===0?(h(R[L][x+1]),h(R[L+1][x]),h(R[L][x])):(h(R[L][x+1]),h(R[L+1][x+1]),h(R[L+1][x]))}}function c(b){const S=new F;for(let M=0;M<s.length;M+=3)S.x=s[M+0],S.y=s[M+1],S.z=s[M+2],S.normalize().multiplyScalar(b),s[M+0]=S.x,s[M+1]=S.y,s[M+2]=S.z}function u(){const b=new F;for(let S=0;S<s.length;S+=3){b.x=s[S+0],b.y=s[S+1],b.z=s[S+2];const M=p(b)/2/Math.PI+.5,P=m(b)/Math.PI+.5;o.push(M,1-P)}v(),f()}function f(){for(let b=0;b<o.length;b+=6){const S=o[b+0],M=o[b+2],P=o[b+4],C=Math.max(S,M,P),R=Math.min(S,M,P);C>.9&&R<.1&&(S<.2&&(o[b+0]+=1),M<.2&&(o[b+2]+=1),P<.2&&(o[b+4]+=1))}}function h(b){s.push(b.x,b.y,b.z)}function d(b,S){const M=b*3;S.x=e[M+0],S.y=e[M+1],S.z=e[M+2]}function v(){const b=new F,S=new F,M=new F,P=new F,C=new qe,R=new qe,L=new qe;for(let j=0,x=0;j<s.length;j+=9,x+=6){b.set(s[j+0],s[j+1],s[j+2]),S.set(s[j+3],s[j+4],s[j+5]),M.set(s[j+6],s[j+7],s[j+8]),C.set(o[x+0],o[x+1]),R.set(o[x+2],o[x+3]),L.set(o[x+4],o[x+5]),P.copy(b).add(S).add(M).divideScalar(3);const T=p(P);y(C,x+0,b,T),y(R,x+2,S,T),y(L,x+4,M,T)}}function y(b,S,M,P){P<0&&b.x===1&&(o[S]=b.x-1),M.x===0&&M.z===0&&(o[S]=P/2/Math.PI+.5)}function p(b){return Math.atan2(b.z,-b.x)}function m(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lu(e.vertices,e.indices,e.radius,e.details)}}class cu extends lu{constructor(e=1,n=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,n),this.type="OctahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new cu(e.radius,e.detail)}}class uu extends di{constructor(e=.5,n=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],c=[],u=[];let f=e;const h=(n-e)/r,d=new F,v=new qe;for(let y=0;y<=r;y++){for(let p=0;p<=i;p++){const m=s+p/i*o;d.x=f*Math.cos(m),d.y=f*Math.sin(m),l.push(d.x,d.y,d.z),c.push(0,0,1),v.x=(d.x/n+1)/2,v.y=(d.y/n+1)/2,u.push(v.x,v.y)}f+=h}for(let y=0;y<r;y++){const p=y*(i+1);for(let m=0;m<i;m++){const b=m+p,S=b,M=b+i+1,P=b+i+2,C=b+1;a.push(S,M,C),a.push(M,P,C)}}this.setIndex(a),this.setAttribute("position",new cn(l,3)),this.setAttribute("normal",new cn(c,3)),this.setAttribute("uv",new cn(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new uu(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Sl extends zs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jd,this.normalScale=new qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class fu extends It{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ke(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class rE extends fu{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ke(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const Ml=new gt,oh=new F,ah=new F;class mp{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qe(512,512),this.map=null,this.mapPass=null,this.matrix=new gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new su,this._frameExtents=new qe(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;oh.setFromMatrixPosition(e.matrixWorld),n.position.copy(oh),ah.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(ah),n.updateMatrixWorld(),Ml.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ml),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ml)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const lh=new gt,ss=new F,El=new F;class sE extends mp{constructor(){super(new rn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new qe(4,2),this._viewportCount=6,this._viewports=[new ut(2,1,1,1),new ut(0,1,1,1),new ut(3,1,1,1),new ut(1,1,1,1),new ut(3,0,1,1),new ut(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),ss.setFromMatrixPosition(e.matrixWorld),i.position.copy(ss),El.copy(i.position),El.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(El),i.updateMatrixWorld(),r.makeTranslation(-ss.x,-ss.y,-ss.z),lh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lh)}}class oE extends fu{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new sE}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class aE extends mp{constructor(){super(new cp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class lE extends fu{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.shadow=new aE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jc);const cE=or({__name:"ArenaCanvas",props:{accent:{}},setup(t){const e=t,n=an();let i,r,s,o,a=0,l;const c=[];function u(v,y,p,m){const b=new Vt(new rr(v,y,p),new Sl({color:m,roughness:.88,metalness:.08}));return r==null||r.add(b),b}function f(){if(!n.value)return;i=new nE({canvas:n.value,antialias:!1,alpha:!0,powerPreference:"high-performance"}),i.setPixelRatio(Math.min(window.devicePixelRatio,1.35)),i.outputColorSpace=Sn,r=new iE,r.background=new Ke("#100915"),r.fog=new au("#1d101f",.028),s=new rn(42,1,.1,200),s.position.set(0,7.2,19),s.lookAt(0,2.1,-5),r.add(new rE("#5d78aa","#4b180f",1.25));const v=new lE("#d9e8ff",2.4);v.position.set(-8,12,8),r.add(v),l=new oE(e.accent,45,24,1.4),l.position.set(0,5,-4),r.add(l);const y=new Vt(new Vs(36,30,16,10),new Sl({color:"#321b20",roughness:.72,metalness:.05}));y.rotation.x=-Math.PI/2,y.position.set(0,-1.4,-3),r.add(y);const p=new Vt(new uu(4.8,7.6,64),new Sl({color:"#9b6b3c",roughness:1,side:Bn}));p.rotation.x=-Math.PI/2,p.position.set(0,-1.36,.3),r.add(p);for(let S=-6;S<=6;S+=1)u(.12,.04,20,S%2===0?7947816:5976100).position.set(S*1.24,-1.29,-2);for(const S of[-1,1])for(let M=0;M<4;M+=1){const P=u(.72,7.3,.72,3876664);P.position.set(S*(7.4+M*2.6),2.1,-8-M*1.1),u(1.12,.48,1.12,5782095).position.set(P.position.x,5.7,P.position.z)}const m=new ia({color:1117464}),b=new rr(.34,.6,.34);for(let S=0;S<4;S+=1)for(let M=-23;M<=23;M+=1){const P=new Vt(b,m);P.position.set(M*.54,.15+S*.58+Math.sin(M*2.7+S)*.12,-10.5-S),P.scale.y=.65+(M*M+S*7)%9/16,r.add(P),(M+S)%9===0&&c.push(P)}for(const S of[-1,1]){u(.62,.7,.62,2761257).position.set(S*6.5,.1,-4.5);const P=new Vt(new cu(.45,0),new ia({color:S<0?16735268:16761147}));P.position.set(S*6.5,.9,-4.5),r.add(P),c.push(P)}o=new ResizeObserver(()=>h()),o.observe(n.value),h(),d()}function h(){if(!n.value||!i||!s)return;const{clientWidth:v,clientHeight:y}=n.value;i.setSize(v,y,!1),s.aspect=v/Math.max(1,y),s.updateProjectionMatrix()}function d(){if(!i||!r||!s)return;const v=performance.now()*.001;c.forEach((y,p)=>{y.position.y+=Math.sin(v*(2.4+p%4*.25)+p)*.0015,p>=c.length-2&&(y.scale.y=.75+Math.sin(v*7+p)*.24,y.rotation.y+=.018)}),l&&(l.intensity=39+Math.sin(v*2.7)*7),i.render(r,s),a=requestAnimationFrame(d)}return Ur(()=>e.accent,v=>l==null?void 0:l.color.set(v)),Ds(f),ga(()=>{cancelAnimationFrame(a),o==null||o.disconnect(),r==null||r.traverse(v=>{v instanceof Vt&&(v.geometry.dispose(),(Array.isArray(v.material)?v.material:[v.material]).forEach(p=>p.dispose()))}),i==null||i.dispose()}),(v,y)=>(we(),Le("canvas",{ref_key:"canvas",ref:n,class:"arena-canvas","aria-hidden":"true"},null,512))}});function gp(t,e,n=!1){const i=Math.max(360,Math.min(t*.5625,e)),r=e/2+i*.43,s=(r+32)/(n?.34:.5);return{arenaHeight:i,floor:r,size:s,offset:s*.3,gutter:s/32}}function uE(t,e){const i=gp(t,e).size*(162/256)/(274/512)*1.1;return{size:i,gutter:i*16/512}}function fE(t){let e=0;for(let n=0;n<t.length;n+=4){if(t[n+3]===0)continue;const i=t[n],r=t[n+1],s=t[n+2];i>45&&s>45&&i>r*1.6&&s>r*1.6&&Math.abs(i-s)<Math.max(i,s)*.35&&(t[n+3]=0,e++)}return e}const Tl=new Map;function hE(t){const e=Tl.get(t);if(e)return e;const n=(async()=>{const i=new Image;i.src=t,await i.decode();const r=document.createElement("canvas");r.width=i.naturalWidth,r.height=i.naturalHeight;const s=r.getContext("2d");if(!s)throw new Error("Cannot prepare sprite transparency");s.drawImage(i,0,0);const o=s.getImageData(0,0,r.width,r.height);return fE(o.data),s.putImageData(o,0,0),r.toDataURL("image/png")})();return Tl.set(t,n),n.catch(()=>Tl.delete(t)),n}const dE={key:0,class:"held-discus","aria-hidden":"true"},pE=["aria-label"],mE=["data-frame","aria-label"],gE={key:7,class:"special-status",role:"status"},_E=["value","max"],vE={key:8,class:"combo-callout"},xE={key:9,class:"round-banner"},yE={class:"stage-name"},SE="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",ME=or({__name:"FighterStage",setup(t){const e=Fs(),n=lt(()=>e.state.projectiles.filter(V=>(V.launchDelay??0)<=0)),i=lt(()=>e.state.projectiles.flatMap(p_)),r=lt(()=>["idle","walk","throw"].includes(e.state.player.pose)&&(e.state.player.pose!=="throw"||e.state.player.poseTimer>(e.state.playerAttackDuration||Ti.duration)*(1-Ti.releaseAt/Ti.duration))),s={0:"/mortal/fighter-athlete-spritesheet-v4.png",20:"/mortal/fighter-athlete-damage-20.png",50:"/mortal/fighter-athlete-damage-50.png",75:"/mortal/fighter-athlete-damage-75.png"},o={0:"/mortal/fighter-opponent-spritesheet.png",20:"/mortal/fighter-opponent-damage-20.png",50:"/mortal/fighter-opponent-damage-50.png",75:"/mortal/fighter-opponent-damage-75.png"},a={0:"/mortal/fighter-brutus-retro-0.png",20:"/mortal/fighter-brutus-retro-20.png",50:"/mortal/fighter-brutus-retro-50.png",75:"/mortal/fighter-brutus-retro-75.png"},l={0:"/mortal/fighter-wormy-retro-0.png",20:"/mortal/fighter-wormy-retro-20.png",50:"/mortal/fighter-wormy-retro-50.png",75:"/mortal/fighter-wormy-retro-75.png"},c=lt(()=>s[hn(e.state.player)]),u={0:"/mortal/fighter-baxter-retro-0.png",20:"/mortal/fighter-baxter-retro-20.png",50:"/mortal/fighter-baxter-retro-50.png",75:"/mortal/fighter-baxter-retro-75.png"},f=an({}),h={0:"/mortal/fighter-witch-retro-0.png",20:"/mortal/fighter-witch-retro-20.png",50:"/mortal/fighter-witch-retro-50.png",75:"/mortal/fighter-witch-retro-75.png"},d=lt(()=>e.opponentProfile.specialMove==="baxter"),v=lt(()=>e.opponentProfile.specialMove==="brutus"),y=lt(()=>e.opponentProfile.specialMove==="witch"),p=lt(()=>e.opponentProfile.specialMove==="giant"),m="/mortal/fighter-giant-retro-0.png",b=an(),S=an({width:window.innerWidth,height:window.innerHeight}),M=lt(()=>gp(S.value.width,S.value.height,e.state.opponent.pose==="defeat")),P=lt(()=>uE(S.value.width,S.value.height)),C=lt(()=>({"--giant-size":`${M.value.size}px`,"--giant-offset":`${M.value.offset}px`,"--giant-gutter":`${e.state.opponent.pose==="high-kick"?M.value.size*9/256:M.value.gutter}px`,"--giant-leak-distance":`${M.value.size*.325}px`}));let R;const L=lt(()=>d.value&&Ma(e.state)),j=lt(()=>p.value?m:v.value?a[hn(e.state.opponent)]:e.opponentProfile.specialMove==="wormy"?l[hn(e.state.opponent)]:d.value?f.value[hn(e.state.opponent)]??SE:y.value?h[hn(e.state.opponent)]:o[hn(e.state.opponent)]),x="/mortal/blood-splatter-spritesheet-v2.png",T=lt(()=>e.state.opponentSpecial),$=lt(()=>T.value?hi[T.value.id]:null),K=lt(()=>T.value?f_(T.value.id,T.value.elapsed):null),Z=lt(()=>T.value?zr[T.value.id]:void 0),oe=lt(()=>Z.value&&T.value?u_(Z.value,T.value.elapsed):void 0),z=lt(()=>{var se;if(!Z.value||!T.value)return{};const V=P.value.size;return{left:p.value?`calc(${T.value.anchorX}% + ${V*.05}px)`:`${Ko(Z.value,T.value.anchorX)}%`,width:p.value?`${V}px`:`${Z.value.width}%`,bottom:p.value?`calc(7% - ${P.value.gutter}px)`:`calc(7% - ${Z.value.width*16/512}vw)`,backgroundImage:`url(/mortal/${Z.value.asset})`,backgroundPosition:(se=oe.value)==null?void 0:se.position,backgroundSize:`${Z.value.columns*100}% ${Z.value.rows*100}%`}});function Y(V){const se=e.state[V];return{left:`${se.x}%`,bottom:`${7+se.y*.94}%`,filter:V==="opponent"?e.opponentProfile.filter:void 0,animationPlayState:d.value&&V==="opponent"&&e.state.phase==="paused"?"paused":void 0,...V==="player"&&sf(se.pose)?k():{},...ge(V)}}function k(){const V=e.state.playerAttackDuration||Ti.duration,se=Math.max(0,V-e.state.player.poseTimer);return{animationDuration:`${V}s`,animationDelay:`${-se}s`,animationPlayState:"paused","--attack-duration":`${V}s`,"--attack-delay":`${-se}s`}}function ge(V){return!T.value||!$.value?{}:{animationName:`special-${T.value.id}-${V}`,animationDuration:`${$.value.duration}s`,animationDelay:`${-T.value.elapsed}s`,animationTimingFunction:"linear",animationFillMode:"both",animationPlayState:"paused",transition:"none"}}function ve(V){return K.value?{animation:"none",backgroundPosition:V==="player"&&e.state.player.health<=0?"100% 100%":K.value[V]}:V==="player"&&sf(e.state.player.pose)?k():V==="opponent"&&v.value&&e.state.opponentPunishPhase==="none"?{animationDuration:nf(e.state.opponent.pose)===void 0?void 0:`${nf(e.state.opponent.pose)}s`}:{}}Ds(()=>{for(const[V,se]of Object.entries(u))hE(se).then(pe=>{f.value[Number(V)]=pe}).catch(pe=>{console.error("Baxter sprite transparency preparation failed",pe),f.value[Number(V)]=se});R=new ResizeObserver(([V])=>{S.value={width:V.contentRect.width,height:V.contentRect.height}}),b.value&&R.observe(b.value);for(const V of Object.values(zr)){const se=new Image;se.src=`/mortal/${V.asset}`}for(const V of[m,...Object.values(s),...Object.values(o),...Object.values(a),...Object.values(l),...Object.values(u),...Object.values(h)]){const se=new Image;se.src=V}}),$c(()=>R==null?void 0:R.disconnect());function Se(V){const se=Z.value?.5:1;return{"--blood-offset-x":`${V.offsetX*se}px`,"--blood-offset-y":`${V.offsetY*se}px`,"--blood-size":`${V.size*se}px`,"--blood-rotation":`${V.rotation}deg`,"--blood-delay":`${V.delay}s`,"--blood-duration":`${V.duration}s`,"--blood-flip":V.flip,backgroundImage:`url(${x})`}}function Ge(V){return Z.value?`calc(7% + ${(V-7)*.5625}vw)`:`${V}%`}function $e(V){const se=Math.max(0,V.y-7);return{left:`${V.x}%`,bottom:Ge(V.y),"--blood-fall":Z.value?`${se*.5625}vw`:`max(${se*3.6}px, min(${se}dvh, ${se*.5625}vw))`}}function ie(V){const se=Math.min(4,V.lifetime*.3),pe=V.age<=V.lifetime-se?.94:Math.max(0,(V.lifetime-V.age)/se)*.94;return{left:`${V.x}%`,width:`${V.size}%`,opacity:pe,"--pool-stretch":V.stretch,"--pool-rotation":`${V.rotation}deg`}}return(V,se)=>{var pe,Oe,Ue,Ve,je,w;return we(),Le("main",{ref_key:"stageElement",ref:b,class:Tt(["fight-stage",{shaking:re(e).state.screenShake>0,"footstep-shake":re(e).state.footstepShake>0&&re(e).state.screenShake===0}]),style:Qe(p.value?C.value:void 0)},[se[6]||(se[6]=ne("div",{class:"world-extension","aria-hidden":"true"},[ne("div",{class:"upper-ruins"},[ne("i"),ne("i"),ne("i")]),ne("div",{class:"lower-ruins"},[ne("i"),ne("i"),ne("i")])],-1)),p.value&&!Z.value?(we(),Le("div",{key:0,class:Tt(["fighter opponent-fighter giant-fighter giant-extension",[`pose-${re(e).state.opponent.pose}`,{hurt:re(e).state.opponent.hurtTimer>0}]]),style:Qe({...Y("opponent"),bottom:`${S.value.height-M.value.floor}px`}),"aria-hidden":"true"},[ne("div",{class:"fighter-sprite opponent-sprite",style:Qe({backgroundImage:`url(${m})`})},null,4)],6)):at("",!0),p.value&&Z.value?(we(),Le("div",{key:1,class:"finisher-cinematic giant-extension",style:Qe({...z.value,bottom:`${S.value.height-M.value.floor-P.value.gutter}px`}),"aria-hidden":"true"},null,4)):at("",!0),ne("div",{class:Tt(["fight-area",T.value?["special-active",`special-${T.value.id}`]:[]])},[jt(cE,{accent:re(e).opponentProfile.accent},null,8,["accent"]),jt(Q_),se[3]||(se[3]=ne("div",{class:"moon","aria-hidden":"true"},null,-1)),se[4]||(se[4]=ne("div",{class:"mountains","aria-hidden":"true"},null,-1)),se[5]||(se[5]=ne("div",{class:"arena-vignette","aria-hidden":"true"},null,-1)),(we(!0),Le(bt,null,Dn(re(e).state.bloodPools,_=>(we(),Le("i",{key:`pool-${_.id}`,class:Tt(["blood-pool",[_.source,`blood-${_.color}`]]),style:Qe(ie(_)),"aria-hidden":"true"},null,6))),128)),Z.value?at("",!0):(we(),Le("div",{key:0,class:"ground-shadow player-shadow",style:Qe({left:`${re(e).state.player.x}%`,transform:`translateX(-50%) scale(${1-re(e).state.player.y/150})`})},null,4)),Z.value?at("",!0):(we(),Le("div",{key:1,class:"ground-shadow opponent-shadow",style:Qe({left:p.value?`calc(${re(e).state.opponent.x}% + ${M.value.offset}px)`:`${re(e).state.opponent.x}%`,width:p.value?`${M.value.size*.65}px`:void 0})},null,4)),Z.value?at("",!0):(we(),Le("div",{key:2,class:Tt(["fighter player-fighter",[`pose-${re(e).state.player.pose}`,{hurt:re(e).state.player.hurtTimer>0}]]),style:Qe(Y("player"))},[ne("div",{class:"fighter-sprite player-sprite",role:"img","aria-label":"Athletic discus fighter",style:Qe({backgroundImage:`url(${c.value})`,...ve("player")})},[r.value?(we(),Le("i",dE)):at("",!0)],4)],6)),Z.value?at("",!0):(we(),Le("div",{key:3,class:Tt(["fighter opponent-fighter",[`pose-${re(e).state.opponent.pose}`,{hurt:re(e).state.opponent.hurtTimer>0,"wormy-fighter":re(e).opponentProfile.specialMove==="wormy","turtle-fighter":v.value,"baxter-fighter":d.value,"witch-fighter":y.value,"giant-fighter":p.value,hungover:d.value&&re(hn)(re(e).state.opponent)>=50,crying:L.value}]]),style:Qe(Y("opponent"))},[ne("div",{class:"fighter-sprite opponent-sprite",role:"img","aria-label":re(e).opponentProfile.name,style:Qe({backgroundImage:`url(${j.value})`,...ve("opponent")})},null,12,pE),L.value?(we(),Le("div",{key:0,class:Tt(["baxter-tears",{"tears-paused":re(e).state.phase==="paused"}]),"aria-hidden":"true"},[(we(),Le(bt,null,Dn(8,_=>ne("i",{key:_,style:Qe({"--drop":_})},null,4)),64))],2)):at("",!0),p.value&&re(e).state.opponent.health>0?(we(),Le("div",{key:1,class:Tt(["giant-leaks",{"leaks-paused":re(e).state.phase!=="playing"}]),style:Qe({"--leak-cycle":`${.8-re(hn)(re(e).state.opponent)*.006}s`}),"aria-hidden":"true"},[(we(),Le(bt,null,Dn(5,_=>ne("i",{key:_,style:Qe({"--drop":_})},null,4)),64))],6)):at("",!0)],6)),Z.value?(we(),Le("div",{key:4,class:"finisher-cinematic",style:Qe(z.value),"data-frame":(pe=oe.value)==null?void 0:pe.index,role:"img","aria-label":Z.value.description??"Turtle grabs the player, lifts him over his shell, slams him down and releases him"},null,12,mE)):at("",!0),T.value&&!Z.value?(we(),Le("div",{key:5,class:Tt(["special-aura",`aura-${T.value.id}`]),style:Qe({left:`${T.value.id==="wormy"?(re(e).state.player.x+re(e).state.opponent.x)/2:re(e).state.player.x}%`,width:T.value.id==="wormy"?`${Math.max(40,re(e).state.opponent.x-re(e).state.player.x+8)}%`:void 0,"--special-accent":re(e).opponentProfile.accent}),"aria-hidden":"true"},null,6)):at("",!0),((Oe=T.value)==null?void 0:Oe.id)==="wormy"&&!Z.value?(we(),Le(bt,{key:6},Dn(2,_=>ne("i",{key:`wormy-bolt-${_}`,class:Tt(["wormy-eye-lightning",{"wormy-bolt-lower":_===2}]),style:Qe({left:`${re(e).state.player.x}%`,width:`${Math.max(12,re(e).state.opponent.x-re(e).state.player.x)}%`}),"aria-hidden":"true"},null,6)),64)):at("",!0),T.value?(we(),Le("div",gE,[ne("strong",null,rt((Ue=$.value)==null?void 0:Ue.name),1),ne("span",null,rt(((Ve=oe.value)==null?void 0:Ve.label)??((je=K.value)==null?void 0:je.label))+" • FINISHING MOVE",1),ne("progress",{value:T.value.elapsed,max:(w=$.value)==null?void 0:w.duration,"aria-label":"Finishing move progress"},null,8,_E)])):at("",!0),(we(!0),Le(bt,null,Dn(n.value,_=>(we(),Le("div",{key:_.id,class:Tt(["projectile",_.owner]),style:Qe({left:`${_.x}%`,bottom:`${_.y}%`,"--flight-play-state":re(e).state.phase==="playing"?"running":"paused"}),"aria-hidden":"true"},[...se[0]||(se[0]=[ne("span",null,null,-1)])],6))),128)),(we(!0),Le(bt,null,Dn(i.value,_=>(we(),Le("i",{key:_.id,class:"discus-spark","aria-hidden":"true",style:Qe({left:`${_.x}%`,bottom:`${_.y}%`,opacity:_.opacity,transform:`translate(-50%,50%) rotate(${_.angle}deg) scale(${_.size})`})},null,4))),128)),(we(!0),Le(bt,null,Dn(re(e).state.effects,_=>(we(),Le("div",{key:_.id,class:"hit-effect",style:Qe({left:`${_.x}%`,bottom:Ge(_.y),"--effect-age":_.age}),"aria-hidden":"true"},[se[1]||(se[1]=ne("i",null,null,-1)),ne("strong",null,rt(_.label),1)],4))),128)),(we(!0),Le(bt,null,Dn(re(e).state.bloodBursts,_=>(we(),Le("div",{key:`blood-${_.id}`,class:Tt(["blood-splatter",`blood-${_.color}`]),style:Qe($e(_)),"aria-hidden":"true"},[(we(!0),Le(bt,null,Dn(_.sprites,X=>(we(),Le("i",{key:X.id,class:"blood-sprite",style:Qe(Se(X))},null,4))),128))],6))),128)),re(e).state.combo>1?(we(),Le("div",vE,[Wo(rt(re(e).state.combo)+" HIT ",1),se[2]||(se[2]=ne("span",null,"COMBO",-1))])):at("",!0),re(e).state.bannerTimer>0?(we(),Le("div",xE,rt(re(e).state.banner),1)):at("",!0),ne("div",yE,"THE OLYMPIC RUINS • LEVEL "+rt(re(e).state.level),1)],2)],6)}}}),EE={class:"fight-hud","aria-label":"Fight status"},TE={class:"health-side player-health"},bE={class:"health-frame"},AE={key:0,class:"discus-chip"},wE={key:1,class:"discus-chip ready"},RE={class:"round-clock"},CE={class:"round-label"},PE={class:"win-pips","aria-label":"Wins"},LE={class:"health-side opponent-health"},DE={class:"name-row"},IE={key:0,class:"armor-chip"},UE={key:1,class:"drink-chip",role:"status"},NE=or({__name:"GameHud",setup(t){const e=Fs(),n=lt(()=>hi[e.opponentProfile.specialMove]),i=lt(()=>e.state.player.health>0&&e.state.player.health<=wd(n.value));return(r,s)=>(we(),Le("header",EE,[ne("section",TE,[s[0]||(s[0]=ne("div",{class:"name-row"},[ne("strong",null,"THE MAN"),ne("span",null,"THE RINGMASTER")],-1)),ne("div",bE,[ne("div",{class:"health-fill",style:Qe({width:`${re(e).playerHealthPercent}%`})},null,4)]),re(e).state.discusCooldownTimer>0?(we(),Le("span",AE," DISCUS RECHARGE "+rt(Math.ceil(re(e).state.discusCooldownTimer))+"s ",1)):(we(),Le("span",wE,"DISCUS READY"))]),ne("div",RE,[ne("span",CE,"ROUND "+rt(re(e).state.level),1),ne("strong",null,rt(Math.ceil(re(e).state.timer).toString().padStart(2,"0")),1),ne("span",PE,[(we(!0),Le(bt,null,Dn(Math.min(re(e).state.wins,5),o=>(we(),Le("i",{key:o}))),128))])]),ne("section",LE,[ne("div",DE,[ne("strong",null,rt(re(e).opponentProfile.name),1),ne("span",null,rt(re(e).opponentProfile.epithet),1)]),ne("div",{class:Tt(["health-frame",{invincible:re(e).state.opponentPunishPhase!=="none"||re(e).state.opponentSpecial}])},[ne("div",{class:"health-fill",style:Qe({width:`${re(e).opponentHealthPercent}%`,background:`linear-gradient(90deg, ${re(e).opponentProfile.accent}, #ffef8b)`})},null,4)],2),re(e).state.opponentPunishPhase!=="none"?(we(),Le("span",IE,"INVINCIBLE • COUNTERING")):at("",!0),re(e).opponentProfile.specialMove==="baxter"?(we(),Le("span",UE,rt(re(h_)(re(e).state.opponent))+" • "+rt(re(e).state.opponent.health<=0?"LAST ORDERS":re(e).state.opponentDrinkTimer>0?"DRINKING…":re(Ma)(re(e).state)?`SOBBING • DRINK IN ${Math.ceil(re(e).state.opponentDrinkCooldown)}s`:"DRINK READY"),1)):at("",!0),ne("span",{class:Tt(["special-chip",{ready:i.value&&re(e).state.opponentSpecialCooldown===0}])},rt(n.value.name)+" • "+rt(re(e).state.opponentSpecial?"FINISHER":re(e).state.opponentSpecialCooldown>0?`${Math.ceil(re(e).state.opponentSpecialCooldown)}s`:i.value?"FINISHER READY":"FINISHER LOCKED"),3)])]))}}),bi=new Set;let ra={x:0,y:0},bl=!1;const ch={KeyI:"up",KeyJ:"left",KeyK:"k",KeyL:"l"},Tr=new Map,OE=[{codes:["KeyI","KeyL"],action:"il"},{codes:["KeyK","KeyL"],action:"kl"},{codes:["KeyI","KeyJ"],action:"ij"},{codes:["KeyK","KeyJ"],action:"kj"}],FE=new Set(["KeyW","KeyA","KeyS","KeyD","KeyI","KeyJ","KeyK","KeyL","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"]);function BE(t){if(bl||typeof window>"u")return()=>{};bl=!0;const e=r=>{const s=/^(?:Digit|Numpad)([1-9])$/.exec(r.code);if(r.altKey&&!r.ctrlKey&&!r.metaKey&&!r.shiftKey&&s){const o=Number(s[1]);if(o<=t.opponentCount){r.preventDefault(),r.repeat||(i(),Pc(),t.onSelectOpponent(o));return}}if(FE.has(r.code)&&r.preventDefault(),bi.add(r.code),!r.repeat&&ch[r.code]){const o=OE.find(({codes:a})=>a.includes(r.code)&&a.every(l=>bi.has(l)));if(o){for(const a of o.codes){const l=Tr.get(a);l&&clearTimeout(l),Tr.delete(a)}t.onAction(o.action)}else{const a=setTimeout(()=>{Tr.delete(r.code),t.onAction(ch[r.code])},62);Tr.set(r.code,a)}}!r.repeat&&(r.code==="Escape"||r.code==="KeyP")&&t.onPause(),!r.repeat&&r.code==="Enter"&&t.onStart()},n=r=>bi.delete(r.code),i=()=>{bi.clear(),Pc(),Tr.forEach(r=>clearTimeout(r)),Tr.clear()};return window.addEventListener("keydown",e,{passive:!1}),window.addEventListener("keyup",n),window.addEventListener("blur",i),()=>{bl=!1,window.removeEventListener("keydown",e),window.removeEventListener("keyup",n),window.removeEventListener("blur",i),i()}}function uh(t,e){ra={x:Number.isFinite(t)?Math.max(-1,Math.min(1,t)):0,y:Number.isFinite(e)?Math.max(-1,Math.min(1,e)):0}}function Pc(){ra={x:0,y:0}}function kE(){const t=Number(bi.has("KeyD"))-Number(bi.has("KeyA")),e=Number(bi.has("KeyW"))-Number(bi.has("KeyS"));return{x:Math.max(-1,Math.min(1,t+ra.x)),y:Math.max(-1,Math.min(1,e+ra.y))}}function HE(t){let e,n;function i(){const a=e,l=n;e=void 0,n=void 0,uh(0,0),t(0,0),a!==void 0&&(l!=null&&l.hasPointerCapture(a))&&l.releasePointerCapture(a)}function r(a){if(a.pointerId!==e||!n)return;const l=n.getBoundingClientRect();if(!n.isConnected||l.width<=0||l.height<=0){i();return}const c=(a.clientX-l.left-l.width/2)/(l.width*.34),u=(a.clientY-l.top-l.height/2)/(l.height*.34);if(!Number.isFinite(c)||!Number.isFinite(u)){i();return}const f=Math.max(1,Math.hypot(c,u)),h=c/f,d=u/f;t(h,d),uh(h,-d)}function s(a){if(e===void 0){n=a.currentTarget,e=a.pointerId;try{n.setPointerCapture(e)}catch{i();return}r(a)}}function o(a){a.pointerId===e&&i()}return{start:s,move:r,stop:o,reset:i}}function GE(t){const e=n=>{n.cancelable&&n.preventDefault()};return t.addEventListener("touchend",e,{passive:!1}),t.addEventListener("dblclick",e),()=>{t.removeEventListener("touchend",e),t.removeEventListener("dblclick",e)}}const zE={class:"action-pad","aria-label":"Action directional pad"},VE=or({__name:"VirtualControls",setup(t){const e=Fs(),n=an(0),i=an(0),r=an();let s;const o=HE((l,c)=>{n.value=l,i.value=c});Ur(()=>[e.state.phase,e.state.level],o.reset,{flush:"sync"}),Ds(()=>{r.value&&(s=GE(r.value)),o.reset(),window.addEventListener("blur",o.reset),window.addEventListener("resize",o.reset),document.addEventListener("visibilitychange",o.reset)}),ga(()=>{s==null||s(),o.reset(),window.removeEventListener("blur",o.reset),window.removeEventListener("resize",o.reset),document.removeEventListener("visibilitychange",o.reset)});function a(l,c){c.preventDefault(),e.action(l)}return(l,c)=>(we(),Le("div",{ref_key:"controls",ref:r,class:"virtual-controls","aria-label":"Touch controls"},[ne("div",{class:"virtual-stick",role:"application","aria-label":"Movement joystick",onPointerdown:c[0]||(c[0]=ls((...u)=>re(o).start&&re(o).start(...u),["prevent"])),onPointermove:c[1]||(c[1]=ls((...u)=>re(o).move&&re(o).move(...u),["prevent"])),onPointerup:c[2]||(c[2]=ls((...u)=>re(o).stop&&re(o).stop(...u),["prevent"])),onPointercancel:c[3]||(c[3]=ls((...u)=>re(o).stop&&re(o).stop(...u),["prevent"])),onLostpointercapture:c[4]||(c[4]=(...u)=>re(o).stop&&re(o).stop(...u))},[c[11]||(c[11]=ne("span",{class:"stick-ring"},null,-1)),ne("span",{class:"stick-knob",style:Qe({transform:`translate(${n.value*36}px, ${i.value*36}px)`})},null,4)],32),ne("div",zE,[ne("button",{class:"action-key combo-key combo-ij","aria-label":"I plus J hammer strike",onPointerdown:c[5]||(c[5]=u=>a("ij",u))},[...c[12]||(c[12]=[ne("b",null,"I+J",-1),ne("small",null,"HAMMER",-1)])],32),ne("button",{class:"action-key combo-key combo-kj","aria-label":"K plus J low sweep",onPointerdown:c[6]||(c[6]=u=>a("kj",u))},[...c[13]||(c[13]=[ne("b",null,"K+J",-1),ne("small",null,"SWEEP",-1)])],32),ne("button",{class:"action-key key-up","aria-label":"I plus L uppercut",onPointerdown:c[7]||(c[7]=u=>a("il",u))},[...c[14]||(c[14]=[ne("b",null,"I+L",-1),ne("small",null,"UPPERCUT",-1)])],32),ne("button",{class:"action-key key-left","aria-label":"K kick; move backward and press K to block",onPointerdown:c[8]||(c[8]=u=>a("k",u))},[...c[15]||(c[15]=[ne("b",null,"K",-1),ne("small",null,"KICK • BACK + BLOCK",-1)])],32),ne("button",{class:"action-key key-down","aria-label":"K plus L roundhouse",onPointerdown:c[9]||(c[9]=u=>a("kl",u))},[...c[16]||(c[16]=[ne("b",null,"K+L",-1),ne("small",null,"ROUNDHOUSE",-1)])],32),ne("button",{class:"action-key key-right","aria-label":"L punch; double tap to throw discus",onPointerdown:c[10]||(c[10]=u=>a("l",u))},[...c[17]||(c[17]=[ne("b",null,"L",-1),ne("small",null,"PUNCH • ×2 DISCUS",-1)])],32)])],512))}});function WE(t,e=!1){const n=t.createConstantSource(),i=t.createBiquadFilter(),r=t.sampleRate/2;let s=e,o=!1;const a=new Set;return n.offset.value=s?-1200:0,n.start(),i.type="lowpass",i.Q.value=.5,i.frequency.value=s?1600:r,{output:i,attach(l){return o||a.has(l)||(a.add(l),n.connect(l.detune),l.addEventListener("ended",()=>{a.delete(l)&&n.disconnect(l.detune)},{once:!0})),l},setActive(l){if(o||s===l)return;s=l;const c=t.currentTime;n.offset.setTargetAtTime(s?-1200:0,c,.025),i.frequency.setTargetAtTime(s?1600:r,c,.025)},dispose(){o||(o=!0,a.clear(),n.stop(),n.disconnect(),i.disconnect())}}}let hu=!1,Bt;function gn(t){const e=t.createOscillator();return(Bt==null?void 0:Bt.attach(e))??e}function Ii(t){const e=t.createBufferSource();return(Bt==null?void 0:Bt.attach(e))??e}function XE(t){hu=t,Bt==null||Bt.setActive(t)}let ct,Ri,Zi,Pt,Cn,Lc=0,As=.68,ws=.82,Rs=!1,Fo,Dc=0,Zn=0,_p=!1;const sa=new Set,qE={battleCry:"battle-cry.mp3",bodyHitQuick:"body-hit-quick.mp3",hurtGrunt:"hurt-grunt.mp3",effortGrunt:"effort-grunt.mp3",fightGrunt:"fight-grunt.mp3",painGrunt:"pain-grunt.mp3",hardPunch:"hard-punch.mp3",painScream:"pain-scream.mp3",strongPunch:"strong-punch.mp3",punchWhoosh:"punch-whoosh.mp3",shortPainYell:"short-pain-yell.mp3",bodyHitOne:"body-hit-1.mp3",bodyHitTwo:"body-hit-2.mp3",bodyHitThree:"body-hit-3.mp3"};let vp,So;const xp=new Map;function $E(){if(!(typeof window>"u"))try{const t=JSON.parse(window.localStorage.getItem("mortal-audio-settings")??"{}");typeof t.music=="number"&&(As=Math.max(0,Math.min(1,t.music))),typeof t.sfx=="number"&&(ws=Math.max(0,Math.min(1,t.sfx)))}catch{}}$E();function KE(){if(ct||typeof window>"u")return ct;ct=new AudioContext,Bt=WE(ct,hu);const t=ct.createDynamicsCompressor();t.threshold.value=-18,t.knee.value=12,t.ratio.value=6,t.attack.value=.003,t.release.value=.16,t.connect(Bt.output),Bt.output.connect(ct.destination),Ri=ct.createGain(),Ri.gain.value=ws*.52,Ri.connect(t),Zi=ct.createGain(),Zi.gain.value=As*.34,Zi.connect(t),Pt=ct.createGain(),Pt.gain.value=1e-4,Pt.connect(Zi),Cn=ct.createBuffer(1,Math.ceil(ct.sampleRate*.55),ct.sampleRate);const e=Cn.getChannelData(0);for(let n=0;n<e.length;n+=1)e[n]=Math.random()*2-1;return YE(ct),ct}async function yp(){const t=new Map;return await Promise.all(Object.entries(qE).map(async([e,n])=>{try{const i=await fetch(`/mortal/sounds/${n}`);i.ok&&t.set(e,await i.arrayBuffer())}catch{}})),t}function YE(t){return So||(So=(vp??(vp=yp())).then(async e=>{await Promise.all([...e].map(async([n,i])=>{try{xp.set(n,await t.decodeAudioData(i.slice(0)))}catch{}}))}),So)}function jE(){typeof window<"u"&&(vp??(vp=yp()))}function Ui(t,e,n=1){const i=t.createGain();i.gain.value=n;const r=t.createStereoPanner();return r.pan.value=e==="player"?-.34:.34,i.connect(r),r.connect(Ri),i}function kt(t,e,n,i,r){t.setValueAtTime(1e-4,e),t.exponentialRampToValueAtTime(Math.max(2e-4,n),e+i),t.exponentialRampToValueAtTime(1e-4,e+r)}function Ci(t,e){let n=Math.imul(t.id+e,2654435761)>>>0;return n^=n>>>16,n=Math.imul(n,2246822507)>>>0,n^=n>>>13,(n>>>0)/4294967296}function ZE(t,e,n){return e[Math.floor(Ci(t,n)*e.length)]}function tr(t,e,n,i,r,s=0,o=1){const a=xp.get(ZE(e,n,i));if(!a)return!1;const l=Ii(t);l.buffer=a;const c=Us(e.damageTier),u=1+c*(e.kind==="hit"?.1:.055),f=1+(Ci(e,i+2)-.5)*c*.09;return l.playbackRate.value=(e.fighter==="player"?1.04:.91)*(.96+Ci(e,i+1)*.08)*u*f*o,l.connect(Ui(t,e.fighter,r)),l.start(t.currentTime+.008+s),!0}const JE=["effortGrunt","fightGrunt"],QE=["battleCry","fightGrunt","effortGrunt"],eT=["bodyHitQuick","hardPunch","bodyHitOne","bodyHitTwo","bodyHitThree"],tT=["strongPunch","hardPunch","bodyHitOne","bodyHitTwo","bodyHitThree"],Sp=["hurtGrunt","painGrunt","shortPainYell"],nT=["painScream","battleCry","hurtGrunt"],iT={0:JE,20:["effortGrunt","fightGrunt","hurtGrunt"],50:["painGrunt","hurtGrunt","shortPainYell","fightGrunt"],75:["shortPainYell","painScream","hurtGrunt","battleCry"]},rT={0:Sp,20:["hurtGrunt","painGrunt","shortPainYell","battleCry"],50:["shortPainYell","painScream","painGrunt","hurtGrunt"],75:["painScream","shortPainYell","battleCry"]};function sT(t,e){const n=Us(e.damageTier),i=e.damageTier===0&&e.style==="heavy"?QE:iT[e.damageTier],r=tr(t,e,i,11,(e.style==="heavy"?.82:.64)+n*.18);e.damageTier>=50&&tr(t,e,e.damageTier===75?["painGrunt","shortPainYell"]:["hurtGrunt","painGrunt"],19,.24+n*.17,.075+n*.035);const s=tr(t,e,["punchWhoosh"],29,e.style==="discus"?.78:.58,.012);return{voicePlayed:r,motionPlayed:s}}function oT(t,e){const n=Us(e.damageTier),i=e.style==="light"?eT:e.style==="discus"?["strongPunch"]:tT,r=e.damageTier===0?e.style==="light"?Sp:e.style==="discus"?["shortPainYell","painScream"]:nT:rT[e.damageTier],s=tr(t,e,i,43,Math.min(1.05,.68*e.intensity)),o=tr(t,e,r,67,(e.style==="heavy"?.86:.66)+n*.24,.025);return e.damageTier===75&&tr(t,e,["painScream","shortPainYell","painGrunt"],83,.46,.17),{impactPlayed:s,painPlayed:o}}function Mp(t,e){const n=t.createWaveShaper(),i=new Float32Array(256);for(let r=0;r<i.length;r+=1){const s=r*2/(i.length-1)-1;i[r]=Math.tanh(s*e)}return n.curve=i,n.oversample="2x",n}function fh(t,e,n){const i=e.fighter==="player"&&e.style==="discus",r=e.style==="heavy"||i,s=Us(e.damageTier),o=(r?.48:e.style==="discus"?.4:.29)+s*.2,a=.86+Ci(e,17)*.3,l=(e.fighter==="player"?112:76)*(i?Ti.gruntPitch:r?.82:1)*a*(1+s*.12),c=Ui(t,e.fighter,(r?.86:.72)+s*.16),u=t.createGain(),f=t.createBiquadFilter(),h=Mp(t,(r?2.8:2.1)+s*1.7);f.type="lowpass",f.frequency.value=e.fighter==="player"?980:720,f.Q.value=2.6,u.connect(h),h.connect(f),f.connect(c),kt(u.gain,n,Math.min(.55,.34*e.intensity),.018,o);for(const[p,m]of[[.5,.3],[1,1],[2.03,.3],[3.08,.1]]){const b=gn(t),S=t.createGain();b.type=p===1?"sawtooth":p<1?"square":"triangle",b.frequency.setValueAtTime(l*p*.88,n),b.frequency.exponentialRampToValueAtTime(l*p*1.34,n+o*.18),b.frequency.exponentialRampToValueAtTime(l*p*.55,n+o),b.detune.setValueAtTime((Ci(e,121+Math.round(p*10))-.5)*s*35,n),b.detune.linearRampToValueAtTime((Ci(e,131+Math.round(p*10))-.5)*s*90,n+o),S.gain.value=m,b.connect(S),S.connect(u),b.start(n),b.stop(n+o+.02)}const d=Ii(t),v=t.createBiquadFilter(),y=t.createGain();d.buffer=Cn,v.type="bandpass",v.frequency.value=e.fighter==="player"?430:310,v.Q.value=4.2,kt(y.gain,n,r?.2:.12,.012,o*.86),d.connect(v),v.connect(y),y.connect(c),d.start(n),d.stop(n+o)}function aT(t,e,n){const i=e.style==="discus"?.34:e.style==="heavy"?.25:.16,r=Ui(t,e.fighter,e.style==="heavy"?.7:.52),s=Ii(t),o=t.createBiquadFilter(),a=t.createGain();if(s.buffer=Cn,o.type="bandpass",o.Q.value=e.style==="discus"?2.2:.8,o.frequency.setValueAtTime(e.style==="discus"?2400:1650,n),o.frequency.exponentialRampToValueAtTime(e.style==="heavy"?260:430,n+i),kt(a.gain,n,.34*e.intensity,.018,i),s.connect(o),o.connect(a),a.connect(r),s.start(n),s.stop(n+i),e.style==="discus"){const l=gn(t),c=t.createGain();l.type="triangle",l.frequency.setValueAtTime(540,n),l.frequency.exponentialRampToValueAtTime(1320,n+.22),kt(c.gain,n,.12,.015,.28),l.connect(c),c.connect(r),l.start(n),l.stop(n+.3)}}function lT(t,e,n){const i=e.style==="heavy",r=Ui(t,e.fighter,i?.95:.72),s=gn(t),o=t.createGain();s.type="sine",s.frequency.setValueAtTime(i?105:135,n),s.frequency.exponentialRampToValueAtTime(42,n+(i?.22:.14)),kt(o.gain,n,Math.min(.62,.35*e.intensity),.004,i?.24:.16),s.connect(o),o.connect(r),s.start(n),s.stop(n+.26);const a=Ii(t),l=t.createBiquadFilter(),c=t.createGain();a.buffer=Cn,l.type=e.style==="discus"?"highpass":"lowpass",l.frequency.value=e.style==="discus"?1400:i?760:1150,kt(c.gain,n,i?.5:.32,.002,i?.18:.1),a.connect(l),l.connect(c),c.connect(r),a.start(n),a.stop(n+.2)}function cT(t,e,n){const i=e.style==="heavy",r=Us(e.damageTier),s=(i?.92:e.style==="discus"?.76:.58)+r*.62,o=.84+Ci(e,71)*.34,a=(e.fighter==="player"?190:112)*o*(1+r*.16),l=Ui(t,e.fighter,(i?1:.86)+r*.18),c=t.createGain(),u=Mp(t,(i?3.8:2.7)+r*2.2),f=t.createBiquadFilter(),h=t.createBiquadFilter();f.type="bandpass",f.frequency.value=e.fighter==="player"?760:540,f.Q.value=3.4,h.type="bandpass",h.frequency.value=e.fighter==="player"?1560:1120,h.Q.value=4.8,kt(c.gain,n,Math.min(.68,.4*e.intensity),.012,s),c.connect(u),u.connect(f),u.connect(h),f.connect(l),h.connect(l);const d=gn(t),v=t.createGain();d.frequency.value=18+Ci(e,103)*9+r*8,v.gain.value=(i?21:14)+r*18,d.connect(v),d.start(n),d.stop(n+s+.02);for(const[b,S]of[[1,1],[2.01,.24],[.5,.18]]){const M=gn(t),P=t.createGain();M.type=b===1?"sawtooth":b<1?"square":"triangle",M.frequency.setValueAtTime(a*b*1.12,n),M.frequency.exponentialRampToValueAtTime(a*b*(i?2.15:1.82)*(1+r*.14),n+s*.2),M.frequency.exponentialRampToValueAtTime(a*b*(.58-r*.13),n+s),v.connect(M.frequency),P.gain.value=S,M.connect(P),P.connect(c),M.start(n),M.stop(n+s+.02)}const y=Ii(t),p=t.createBiquadFilter(),m=t.createGain();y.buffer=Cn,p.type="bandpass",p.frequency.setValueAtTime(e.fighter==="player"?1850:1280,n),p.frequency.exponentialRampToValueAtTime(620,n+s),p.Q.value=2.2,kt(m.gain,n,i?.26:.16,.02,s*.88),y.connect(p),p.connect(m),m.connect(l),y.start(n),y.stop(n+Math.min(s,.55))}const kr=60/132/4,uT=[73.42,0,73.42,0,58.27,0,65.41,0,73.42,0,87.31,0,65.41,0,58.27,65.41],fT=[293.66,349.23,440,523.25,440,349.23,293.66,261.63,293.66,392,466.16,523.25,466.16,392,349.23,261.63];function hT(t,e){const n=gn(t),i=t.createGain();n.type="sine",n.frequency.setValueAtTime(155,e),n.frequency.exponentialRampToValueAtTime(44,e+.14),kt(i.gain,e,.9,.002,.2),n.connect(i),i.connect(Pt),n.start(e),n.stop(e+.22);const r=Ii(t),s=t.createBiquadFilter(),o=t.createGain();r.buffer=Cn,s.type="highpass",s.frequency.value=3600,kt(o.gain,e,.16,.001,.025),r.connect(s),s.connect(o),o.connect(Pt),r.start(e),r.stop(e+.03)}function dT(t,e,n){const i=Ii(t),r=t.createBiquadFilter(),s=t.createGain();i.buffer=Cn,r.type="highpass",r.frequency.value=n?5600:7200;const o=n?.16:.045;kt(s.gain,e,n?.13:.09,.001,o),i.connect(r),r.connect(s),s.connect(Pt),i.start(e),i.stop(e+o+.01)}function pT(t,e,n){if(!n)return;const i=gn(t),r=t.createBiquadFilter(),s=t.createGain();i.type="sawtooth",i.frequency.value=n,r.type="lowpass",r.frequency.setValueAtTime(520,e),r.frequency.exponentialRampToValueAtTime(150,e+kr*1.7),r.Q.value=6,kt(s.gain,e,.19,.008,kr*1.75),i.connect(r),r.connect(s),s.connect(Pt),i.start(e),i.stop(e+kr*1.8)}function mT(t,e,n,i){const r=gn(t),s=t.createBiquadFilter(),o=t.createGain(),a=t.createStereoPanner();r.type=i%4===1?"square":"triangle",r.frequency.value=n,s.type="bandpass",s.frequency.value=1450+i%4*180,s.Q.value=2.8,kt(o.gain,e,.075,.006,kr*.82),a.pan.value=i%4<2?-.28:.28,r.connect(s),s.connect(o),o.connect(a),a.connect(Pt),r.start(e),r.stop(e+kr*.9)}function hh(){const t=ct;if(!(!t||!Rs||t.state==="closed"))for(Zn<t.currentTime&&(Zn=t.currentTime+.04);Zn<t.currentTime+.28;){const e=Dc%16;e%4===0&&hT(t,Zn),e%2===0&&dT(t,Zn,e===6||e===14),pT(t,Zn,uT[e]),e%2===1&&mT(t,Zn,fT[e],e),Zn+=kr,Dc+=1}}function gT(){const t=ct;!t||t.state==="closed"||Rs||(Rs=!0,Dc=0,Zn=t.currentTime+.06,Pt.gain.cancelScheduledValues(t.currentTime),Pt.gain.setValueAtTime(Math.max(1e-4,Pt.gain.value),t.currentTime),Pt.gain.exponentialRampToValueAtTime(1,t.currentTime+.12),hh(),Fo=window.setInterval(hh,90))}function Ep(){if(Rs&&(Rs=!1,Fo!==void 0&&window.clearInterval(Fo),Fo=void 0,ct&&Pt)){const t=ct.currentTime;Pt.gain.cancelScheduledValues(t),Pt.gain.setValueAtTime(Math.max(1e-4,Pt.gain.value),t),Pt.gain.exponentialRampToValueAtTime(1e-4,t+.09)}}function _T(t,e,n){const i=e.duration??1.2,r=Ui(t,"opponent",1.35),s=t.createGain(),o=t.createBiquadFilter(),a=t.createBiquadFilter();o.type=a.type="bandpass",o.frequency.value=650,a.frequency.value=1350,o.Q.value=a.Q.value=2.4,s.connect(o),s.connect(a),o.connect(r),a.connect(r),s.gain.setValueAtTime(1e-4,n);for(const l of[0,.3,.61])kt(s.gain,n+i*l,.48,i*.08,i*.29);for(const l of[1,2.01]){const c=gn(t);c.type=l===1?"sawtooth":"triangle";for(let u=0;u<=24;u++){const f=u/24,h=Math.sin(f*Math.PI*30)*13,d=160+Math.sin(f*Math.PI)*115+h;c.frequency.linearRampToValueAtTime(d*l,n+i*f)}c.connect(s),sa.add(c),c.onended=()=>{sa.delete(c),c.disconnect()},c.start(n),c.stop(n+i)}}function vT(t,e){for(const n of[0,.3,.6]){const i=gn(t),r=t.createGain();i.type="sine",i.frequency.setValueAtTime(380,e+n),i.frequency.exponentialRampToValueAtTime(95,e+n+.14),kt(r.gain,e+n,.22,.03,.18),i.connect(r),r.connect(Ui(t,"opponent")),i.start(e+n),i.stop(e+n+.19)}}function xT(t,e,n){const i=Math.max(1.8,e.duration??2.7),r=Ui(t,"opponent",1.18),s=[0,-4,3,7,-7,2,-2,5];for(const[l,c]of s.entries()){const u=gn(t),f=t.createGain(),h=t.createBiquadFilter();u.type=l%3===0?"sawtooth":l%3===1?"triangle":"square",u.detune.value=c,h.type="bandpass",h.frequency.value=520+l%4*42,h.Q.value=2.2,u.connect(h),h.connect(f),f.connect(r),f.gain.setValueAtTime(1e-4,n);for(const d of[0,.52,1.04,1.56,2.08]){if(d>=i)continue;const v=n+d,y=Math.min(n+i,v+.38);f.gain.exponentialRampToValueAtTime(.075+l%3*.012,v+.035),f.gain.exponentialRampToValueAtTime(1e-4,y),u.frequency.setValueAtTime(116+l%4*2,v),u.frequency.linearRampToValueAtTime(128+l%3*3,y)}u.start(n),u.stop(n+i+.03)}const o=gn(t),a=t.createGain();o.type="sine",o.frequency.value=58,kt(a.gain,n,.18,.02,i),o.connect(a),a.connect(r),o.start(n),o.stop(n+i+.03)}function Tp(t){if(_p=t,!t){for(const e of sa)e.stop();sa.clear()}}const Mo=new Map;function bp(t,e){const n=ct,i=e?t.filter(r=>r.owner==="player"&&(r.launchDelay??0)<=0):[];for(const[r,s]of Mo){if(i.some(a=>a.id===r))continue;const o=(n==null?void 0:n.currentTime)??0;s.gain.gain.cancelScheduledValues(o),s.gain.gain.setTargetAtTime(1e-4,o,.008),s.noise.stop(o+.04),Mo.delete(r)}if(!(!n||n.state!=="running"||!Cn))for(const r of i){let s=Mo.get(r.id);if(!s){const a=Ii(n),l=n.createBiquadFilter(),c=n.createGain(),u=n.createStereoPanner();a.buffer=Cn,a.loop=!0,l.type="bandpass",l.Q.value=3.2,c.gain.value=1e-4,a.connect(l),l.connect(c),c.connect(u),u.connect(Ri),a.onended=()=>{a.disconnect(),l.disconnect(),c.disconnect(),u.disconnect()},a.start(),s={noise:a,filter:l,gain:c,pan:u},Mo.set(r.id,s)}const o=n.currentTime;s.pan.pan.setTargetAtTime(Math.max(-1,Math.min(1,r.x/50-1)),o,.025),s.filter.frequency.setTargetAtTime(2800+Math.sin(r.age*65)*1600,o,.008),s.gain.gain.setTargetAtTime(.23+Math.sin(r.age*95)*.09,o,.008)}}function yT(t){const e=ct;if(!e||e.state==="closed")return;const n=e.currentTime+.008;if(t.specialMove==="wormy"&&t.kind==="attack")xT(e,t,n);else if(t.kind==="cry")_p&&_T(e,t,n);else if(t.kind==="drink")vT(e,n);else if(t.kind==="attack"&&t.fighter==="player"&&t.style==="discus")tr(e,t,["effortGrunt","fightGrunt"],11,1,0,Ti.gruntPitch)||fh(e,t,n);else if(t.kind==="attack"){const{voicePlayed:i,motionPlayed:r}=sT(e,t);i||fh(e,t,n),r||aT(e,t,n+.018)}else{const{impactPlayed:i,painPlayed:r}=oT(e,t);i||lT(e,t,n),r||cT(e,t,n+.025)}}function Pr(){const t=KE();(t==null?void 0:t.state)==="suspended"&&t.resume()}function ST(t){t?gT():Ep()}function Ap(){return{music:As,sfx:ws}}function wp(){if(!(typeof window>"u"))try{window.localStorage.setItem("mortal-audio-settings",JSON.stringify(Ap()))}catch{}}function MT(t){As=Math.max(0,Math.min(1,t)),ct&&Zi&&Zi.gain.setTargetAtTime(As*.34,ct.currentTime,.02),wp()}function ET(t){ws=Math.max(0,Math.min(1,t)),ct&&Ri&&Ri.gain.setTargetAtTime(ws*.52,ct.currentTime,.02),wp()}function TT(t){for(const e of t)e.id<=Lc||(yT(e),Lc=e.id)}function bT(){bp([],!1),Tp(!1),Ep(),Bt==null||Bt.dispose(),Bt=void 0,hu=!1,ct&&ct.state!=="closed"&&ct.close(),ct=void 0,Ri=void 0,Zi=void 0,Pt=void 0,Cn=void 0,Lc=0}const AT={class:"audio-control"},wT={class:"audio-popup","aria-label":"Audio mixer"},RT=or({__name:"AudioMixer",setup(t){const e=Ap(),n=an(Math.round(e.music*100)),i=an(Math.round(e.sfx*100));function r(){Pr(),MT(n.value/100)}function s(){Pr(),ET(i.value/100)}return(o,a)=>(we(),Le("details",AT,[a[6]||(a[6]=ne("summary",{"aria-label":"Open audio mixer",title:"Audio mixer"},"♫",-1)),ne("section",wT,[a[4]||(a[4]=ne("strong",null,"AUDIO MIXER",-1)),ne("label",null,[ne("span",null,[a[2]||(a[2]=ne("b",null,"MUSIC",-1)),ne("output",null,rt(n.value)+"%",1)]),Au(ne("input",{"onUpdate:modelValue":a[0]||(a[0]=l=>n.value=l),type:"range",min:"0",max:"100",step:"1","aria-label":"Music volume",onInput:r},null,544),[[Ju,n.value,void 0,{number:!0}]])]),ne("label",null,[ne("span",null,[a[3]||(a[3]=ne("b",null,"SOUND FX",-1)),ne("output",null,rt(i.value)+"%",1)]),Au(ne("input",{"onUpdate:modelValue":a[1]||(a[1]=l=>i.value=l),type:"range",min:"0",max:"100",step:"1","aria-label":"Sound effects volume",onInput:s},null,544),[[Ju,i.value,void 0,{number:!0}]])]),a[5]||(a[5]=ne("small",null,"132 BPM • OLYMPIC NIGHT MIX",-1))])]))}});function CT(t,e,n=()=>{}){var R;const i=document,r=window.matchMedia("(orientation: landscape)"),s=window.matchMedia("(pointer: coarse)"),o=window.matchMedia("(display-mode: standalone)"),a=window.matchMedia("(display-mode: fullscreen)"),l=()=>o.matches||a.matches||navigator.standalone===!0,c=/iPhone|iPad|iPod/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,u=t.requestFullscreen?()=>t.requestFullscreen({navigationUI:"hide"}):(R=t.webkitRequestFullscreen)==null?void 0:R.bind(t),f=!!u&&(i.fullscreenEnabled??i.webkitFullscreenEnabled)!==!1,h=()=>i.fullscreenElement??i.webkitFullscreenElement;let d=!1,v=!1,y=!1,p=!1;function m(){e(!p&&!l()&&d&&f&&!h()),n(!p&&c&&!l()&&!f)}async function b(){var L;if(h()===t)try{i.exitFullscreen?await i.exitFullscreen():await((L=i.webkitExitFullscreen)==null?void 0:L.call(i))}catch{}}async function S(){if(!(p||l()||!d||v||!f||h())){v=!0;try{await u(),(p||!r.matches)&&await b()}catch{}finally{v=!1,m()}}}function M(){d=s.matches&&r.matches,d?S():b(),m()}function P(){const L=h()===t;y&&!L&&(d=!1),y=L,y&&(!r.matches||p)&&b(),m()}function C(){S()}return r.addEventListener("change",M),s.addEventListener("change",M),o.addEventListener("change",m),a.addEventListener("change",m),i.addEventListener("fullscreenchange",P),i.addEventListener("webkitfullscreenchange",P),t.addEventListener("pointerup",C,!0),t.addEventListener("click",C,!0),M(),()=>{p=!0,d=!1,r.removeEventListener("change",M),s.removeEventListener("change",M),o.removeEventListener("change",m),a.removeEventListener("change",m),i.removeEventListener("fullscreenchange",P),i.removeEventListener("webkitfullscreenchange",P),t.removeEventListener("pointerup",C,!0),t.removeEventListener("click",C,!0),e(!1),n(!1),b()}}const PT={key:2,class:"game-overlay title-screen"},LT={class:"desktop-controls"},DT={class:"discus-tip"},IT={key:0,class:"home-screen-hint"},UT={key:3,class:"game-overlay pause-screen"},NT={key:0,class:"home-screen-hint"},OT={key:4,class:"game-overlay game-over-screen"},FT=["aria-label"],BT={class:"desktop-key-strip","aria-hidden":"true"},kT={key:6,class:"psychedelic-overlay","aria-hidden":"true"},HT={key:7,class:"fullscreen-prompt","aria-label":"Enter fullscreen"},GT={class:"rotate-device"},zT={key:0,class:"home-screen-hint"},Al="iPhone fullscreen: Share → Add to Home Screen → Open as Web App (if shown). Launch the new icon, then rotate to landscape.",VT=or({__name:"App",setup(t){const e=Fs(),n=lt(()=>S_(e.state));let i=0,r=0,s;const o=an(),a=an(!1),l=an(!1);let c;function u(h){const d=r?(h-r)/1e3:0;r=h,e.tick(d,kE()),XE(Ns(e.state)==="mushroom"),Tp(e.state.phase==="playing"&&Ma(e.state)),bp(e.state.projectiles,e.state.phase==="playing"),TT(e.state.soundEvents),ST(e.state.phase==="playing"||e.state.phase==="round-over"),i=requestAnimationFrame(u)}function f(){(e.state.phase==="title"||e.state.phase==="game-over")&&e.start()}return Ds(()=>{o.value&&(c=CT(o.value,h=>{a.value=h},h=>{l.value=h})),jE(),s=BE({onAction:e.action,onPause:e.togglePause,onStart:f,onSelectOpponent:e.selectOpponent,opponentCount:Nr.length}),window.addEventListener("pointerdown",Pr,{passive:!0}),window.addEventListener("keydown",Pr),i=requestAnimationFrame(u),document.addEventListener("visibilitychange",()=>{document.hidden&&e.state.phase==="playing"&&e.togglePause()})}),ga(()=>{cancelAnimationFrame(i),s==null||s(),c==null||c(),window.removeEventListener("pointerdown",Pr),window.removeEventListener("keydown",Pr),bT(),Pc()}),(h,d)=>(we(),Le("div",{ref_key:"gameShell",ref:o,class:Tt(["game-shell",{"mushroom-trip":!!n.value}]),style:Qe(n.value),onContextmenu:d[4]||(d[4]=ls(()=>{},["prevent"]))},[jt(ME),jt(RT),re(e).state.phase!=="title"?(we(),Nl(NE,{key:0})):at("",!0),re(e).state.phase==="playing"?(we(),Nl(VE,{key:1})):at("",!0),re(e).state.phase==="title"?(we(),Le("section",PT,[d[8]||(d[8]=ne("p",{class:"eyebrow"},"USA DISCUS FEDERATION PRESENTS",-1)),d[9]||(d[9]=ne("h1",null,[ne("span",null,"MORTAL"),Wo(" DISCUS")],-1)),d[10]||(d[10]=ne("p",{class:"tagline"},"STEP INTO THE RING. LET IT FLY.",-1)),ne("button",{class:"arcade-button",onClick:d[0]||(d[0]=(...v)=>re(e).start&&re(e).start(...v))},"ENTER THE RING"),ne("div",LT,[d[7]||(d[7]=Ol('<div><kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd><span>MOVE</span></div><div><kbd>I</kbd><kbd>J</kbd><kbd>K</kbd><kbd>L</kbd><span>ATTACK</span></div><div class="discus-tip"><kbd>L</kbd><kbd>L</kbd><span>DISCUS THROW</span></div>',3)),ne("div",DT,[d[5]||(d[5]=ne("kbd",null,"ALT",-1)),ne("kbd",null,"1–"+rt(re(Nr).length),1),d[6]||(d[6]=ne("span",null,"SELECT OPPONENT",-1))])]),d[11]||(d[11]=ne("p",{class:"tap-hint"},"PRESS ENTER • TAP TO START",-1)),l.value?(we(),Le("p",IT,rt(Al))):at("",!0)])):at("",!0),re(e).state.phase==="paused"?(we(),Le("section",UT,[d[12]||(d[12]=ne("p",{class:"eyebrow"},"MATCH SUSPENDED",-1)),d[13]||(d[13]=ne("h2",null,"PAUSED",-1)),ne("button",{class:"arcade-button",onClick:d[1]||(d[1]=(...v)=>re(e).togglePause&&re(e).togglePause(...v))},"RETURN TO FIGHT"),l.value?(we(),Le("p",NT,rt(Al))):at("",!0)])):at("",!0),re(e).state.phase==="game-over"?(we(),Le("section",OT,[d[14]||(d[14]=ne("p",{class:"eyebrow"},"FINAL RESULT",-1)),ne("h2",null,rt(re(e).state.outcome==="draw"?"DRAW":"OUT OF BOUNDS"),1),ne("p",null,"You cleared "+rt(re(e).state.wins)+" "+rt(re(e).state.wins===1?"opponent":"opponents")+".",1),ne("button",{class:"arcade-button",onClick:d[2]||(d[2]=(...v)=>re(e).restart&&re(e).restart(...v))},"FIGHT AGAIN")])):at("",!0),re(e).state.phase==="playing"||re(e).state.phase==="paused"?(we(),Le("button",{key:5,class:"pause-button","aria-label":re(e).state.phase==="paused"?"Resume game":"Pause game",onClick:d[3]||(d[3]=(...v)=>re(e).togglePause&&re(e).togglePause(...v))},rt(re(e).state.phase==="paused"?"▶":"Ⅱ"),9,FT)):at("",!0),ne("div",BT,[d[16]||(d[16]=Ol("<span><b>WASD</b> MOVE</span><span><b>I+L</b> UPPERCUT</span><span><b>I+J</b> HAMMER</span><span><b>L</b> PUNCH</span><span><b>K+L</b> ROUNDHOUSE</span><span><b>K+J</b> SWEEP</span><span><b>K</b> KICK</span><span><b>L ×2</b> THROW DISCUS</span><span><b>P</b> PAUSE</span>",9)),ne("span",null,[ne("b",null,"ALT+1–"+rt(re(Nr).length),1),d[15]||(d[15]=Wo(" OPPONENT",-1))])]),d[20]||(d[20]=ne("div",{class:"scanlines","aria-hidden":"true"},null,-1)),n.value?(we(),Le("div",kT)):at("",!0),a.value?(we(),Le("button",HT,"⛶ TAP FOR FULLSCREEN")):at("",!0),ne("div",GT,[d[17]||(d[17]=ne("span",null,"↻",-1)),d[18]||(d[18]=ne("strong",null,"ROTATE TO FIGHT",-1)),d[19]||(d[19]=ne("small",null,"Mortal Discus is built for landscape play.",-1)),l.value?(we(),Le("p",zT,rt(Al))):at("",!0)])],38))}});Jg(VT).use(t_()).mount("#app");
