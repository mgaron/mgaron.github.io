var gp=Object.defineProperty;var _p=(n,e,t)=>e in n?gp(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var de=(n,e,t)=>_p(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Sc(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const ht={},$i=[],Vn=()=>{},hf=()=>!1,Jo=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Zo=n=>n.startsWith("onUpdate:"),At=Object.assign,bc=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},vp=Object.prototype.hasOwnProperty,tt=(n,e)=>vp.call(n,e),Be=Array.isArray,Ti=n=>Nr(n)==="[object Map]",ns=n=>Nr(n)==="[object Set]",vh=n=>Nr(n)==="[object Date]",qe=n=>typeof n=="function",Mt=n=>typeof n=="string",Xn=n=>typeof n=="symbol",ct=n=>n!==null&&typeof n=="object",uf=n=>(ct(n)||qe(n))&&qe(n.then)&&qe(n.catch),ff=Object.prototype.toString,Nr=n=>ff.call(n),xp=n=>Nr(n).slice(8,-1),df=n=>Nr(n)==="[object Object]",Ec=n=>Mt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,cr=Sc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Qo=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},yp=/-\w/g,Cn=Qo(n=>n.replace(yp,e=>e.slice(1).toUpperCase())),Mp=/\B([A-Z])/g,as=Qo(n=>n.replace(Mp,"-$1").toLowerCase()),pf=Qo(n=>n.charAt(0).toUpperCase()+n.slice(1)),va=Qo(n=>n?`on${pf(n)}`:""),Hn=(n,e)=>!Object.is(n,e),Eo=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},mf=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Or=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let xh;const ea=()=>xh||(xh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ei(n){if(Be(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=Mt(i)?wp(i):Ei(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Mt(n)||ct(n))return n}const Sp=/;(?![^(]*\))/g,bp=/:([^]+)/,Ep=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function wp(n){const e={};return n.replace(Ep,t=>t.startsWith("/*")?"":t).split(Sp).forEach(t=>{if(t){const i=t.split(bp);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Un(n){let e="";if(Mt(n))e=n;else if(Be(n))for(let t=0;t<n.length;t++){const i=Un(n[t]);i&&(e+=i+" ")}else if(ct(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Tp="itemscope,allowfullscreen,disablepictureinpicture,disableremoteplayback,formnovalidate,ismap,nomodule,novalidate,playsinline,readonly",Ap=Sc(Tp);function gf(n){return!!n||n===""}function Rp(n,e,t){if(n.length!==e.length)return!1;let i=!0;for(let s=0;i&&s<n.length;s++)i=Pi(n[s],e[s],t);return i}function yh(n,e,t){if(n.size!==e.size)return!1;const i=Array.from(e),s=new Uint8Array(i.length);for(const r of n){let o=-1;for(let a=0;a<i.length;a++)if(!s[a]&&Pi(r,i[a],t)){o=a;break}if(o<0)return!1;s[o]=1}return!0}function Cp(n,e,t){let i=Ti(n),s=Ti(e);if(i||s||(i=ns(n),s=ns(e),i||s))return i&&s?yh(n,e,t):!1;const r=Object.keys(n).length,o=Object.keys(e).length;if(r!==o)return!1;for(const a in n){const l=n.hasOwnProperty(a),c=e.hasOwnProperty(a);if(l&&!c||!l&&c||!Pi(n[a],e[a],t))return!1}return String(n)===String(e)}function Mh(n,e,t,i){t||(t=[new Map,new Map]);const[s,r]=t;if(s.has(n)||r.has(e))return s.get(n)===e&&r.get(e)===n;s.set(n,e),r.set(e,n);const o=i(n,e,t);return s.delete(n),r.delete(e),o}function Pi(n,e,t){if(n===e)return!0;let i=vh(n),s=vh(e);return i||s?i&&s?n.getTime()===e.getTime():!1:(i=Xn(n),s=Xn(e),i||s?n===e:(i=Be(n),s=Be(e),i||s?i&&s?Mh(n,e,t,Rp):!1:(i=ct(n),s=ct(e),i||s?!i||!s?!1:Mh(n,e,t,Cp):String(n)===String(e))))}function Pp(n,e){return n.findIndex(t=>Pi(t,e))}const _f=n=>!!(n&&n.__v_isRef===!0),Ie=n=>Mt(n)?n:n==null?"":Be(n)||ct(n)&&(n.toString===ff||!qe(n.toString))?_f(n)?Ie(n.value):JSON.stringify(n,vf,2):String(n),vf=(n,e)=>_f(e)?vf(n,e.value):Ti(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s],r)=>(t[xa(i,r)+" =>"]=s,t),{})}:ns(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>xa(t))}:Xn(e)?xa(e):ct(e)&&!Be(e)&&!df(e)?String(e):e,xa=(n,e="")=>{var t;return Xn(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ut;class xf{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&Ut&&(Ut.active?(this.parent=Ut,this.index=(Ut.scopes||(Ut.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes){const i=this.scopes.slice();for(e=0,t=i.length;e<t;e++)i[e].pause()}for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes){const s=this.scopes.slice();for(e=0,t=s.length;e<t;e++)s[e].resume()}const i=this.effects.slice();for(e=0,t=i.length;e<t;e++)i[e].resume()}}run(e){if(this._active){const t=Ut;try{return Ut=this,e()}finally{Ut=t}}}on(){++this._on===1&&(this.prevScope=Ut,Ut=this)}off(){if(this._on>0&&--this._on===0){if(Ut===this)Ut=this.prevScope;else{let e=Ut;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){const s=this.scopes.slice();for(t=0,i=s.length;t<i;t++)s[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Lp(n){return new xf(n)}function Ip(){return Ut}let ut;const ya=new WeakSet;class yf{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ut&&(Ut.active?Ut.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ya.has(this)&&(ya.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Sf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Sh(this),bf(this);const e=ut,t=Pn;ut=this,Pn=!0;try{return this.fn()}finally{Ef(this),ut=e,Pn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ac(e);this.deps=this.depsTail=void 0,Sh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ya.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){xl(this)&&this.run()}get dirty(){return xl(this)}}let Mf=0,hr,ur;function Sf(n,e=!1){if(n.flags|=8,e){n.next=ur,ur=n;return}n.next=hr,hr=n}function wc(){Mf++}function Tc(){if(--Mf>0)return;if(ur){let e=ur;for(ur=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;hr;){let e=hr;for(hr=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function bf(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Ef(n){let e,t=n.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),Ac(i),Dp(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=e,n.depsTail=t}function xl(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(wf(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function wf(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===br)||(n.globalVersion=br,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!xl(n))))return;n.flags|=2;const e=n.dep,t=ut,i=Pn;ut=n,Pn=!0;try{bf(n);const s=n.fn(n._value);(e.version===0||Hn(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{ut=t,Pn=i,Ef(n),n.flags&=-3}}function Ac(n,e=!1){const{dep:t,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)Ac(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Dp(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Pn=!0;const Tf=[];function Yn(){Tf.push(Pn),Pn=!1}function qn(){const n=Tf.pop();Pn=n===void 0?!0:n}function Sh(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=ut;ut=void 0;try{e()}finally{ut=t}}}let br=0;class Up{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Rc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!ut||!Pn||ut===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==ut)t=this.activeLink=new Up(ut,this),ut.deps?(t.prevDep=ut.depsTail,ut.depsTail.nextDep=t,ut.depsTail=t):ut.deps=ut.depsTail=t,Af(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=ut.depsTail,t.nextDep=void 0,ut.depsTail.nextDep=t,ut.depsTail=t,ut.deps===t&&(ut.deps=i)}return t}trigger(e){this.version++,br++,this.notify(e)}notify(e){wc();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Tc()}}}function Af(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Af(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const yl=new WeakMap,es=Symbol(""),Ml=Symbol(""),Er=Symbol("");function Bt(n,e,t){if(Pn&&ut){let i=yl.get(n);i||yl.set(n,i=new Map);let s=i.get(t);s||(i.set(t,s=new Rc),s.map=i,s.key=t),s.track()}}function ci(n,e,t,i,s,r){const o=yl.get(n);if(!o){br++;return}const a=l=>{l&&l.trigger()};if(wc(),e==="clear")o.forEach(a);else{const l=Be(n),c=l&&Ec(t);if(l&&t==="length"){const h=Number(i);o.forEach((f,u)=>{(u==="length"||u===Er||!Xn(u)&&u>=h)&&a(f)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(Er)),e){case"add":l?c&&a(o.get("length")):(a(o.get(es)),Ti(n)&&a(o.get(Ml)));break;case"delete":l||(a(o.get(es)),Ti(n)&&a(o.get(Ml)));break;case"set":Ti(n)&&a(o.get(es));break}}Tc()}function us(n){const e=st(n);return e===n||(Bt(e,"iterate",Er),vn(n))?e:jn(n)?Ai(n)?e.map(t=>Li(xn(t))):e.map(Li):e.map(xn)}function ta(n){return Bt(n=st(n),"iterate",Er),n}function On(n,e){return jn(n)?Li(Ai(n)?xn(e):e):xn(e)}const Np={__proto__:null,[Symbol.iterator](){return Ma(this,Symbol.iterator,n=>On(this,n))},concat(...n){return us(this).concat(...n.map(e=>Be(e)?us(e):e))},entries(){return Ma(this,"entries",n=>(n[1]=On(this,n[1]),n))},every(n,e){return Zn(this,"every",n,e,void 0,arguments)},filter(n,e){return Zn(this,"filter",n,e,t=>t.map(i=>On(this,i)),arguments)},find(n,e){return Zn(this,"find",n,e,t=>On(this,t),arguments)},findIndex(n,e){return Zn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Zn(this,"findLast",n,e,t=>On(this,t),arguments)},findLastIndex(n,e){return Zn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Zn(this,"forEach",n,e,void 0,arguments)},includes(...n){return Sa(this,"includes",n)},indexOf(...n){return Sa(this,"indexOf",n)},join(n){return us(this).join(n)},lastIndexOf(...n){return Sa(this,"lastIndexOf",n)},map(n,e){return Zn(this,"map",n,e,void 0,arguments)},pop(){return Ks(this,"pop")},push(...n){return Ks(this,"push",n)},reduce(n,...e){return Eh(this,"reduce",n,e)},reduceRight(n,...e){return Eh(this,"reduceRight",n,e)},shift(){return Ks(this,"shift")},some(n,e){return Zn(this,"some",n,e,void 0,arguments)},splice(...n){return Ks(this,"splice",n)},toReversed(){return us(this).toReversed()},toSorted(n){return us(this).toSorted(n)},toSpliced(...n){return us(this).toSpliced(...n)},unshift(...n){return Ks(this,"unshift",n)},values(){return Ma(this,"values",n=>On(this,n))}};function Ma(n,e,t){const i=ta(n),s=i[e],r=s.call(i);if(i!==n&&!vn(n)){if(r[Symbol.toStringTag]==="Array Iterator"){const o=Object.create(Object.getPrototypeOf(r));return o.next=()=>bh(r.next(),t),s!==Rf[e]&&Object.defineProperties(o,{return:{get(){const a=r.return;return typeof a=="function"?a.bind(r):a}},throw:{get(){const a=r.throw;return typeof a=="function"?a.bind(r):a}}}),o}r._next=r.next,r.next=()=>bh(r._next(),t)}return r}function bh(n,e){return n.done||(n.value=e(n.value)),n}const Rf=Array.prototype;function Zn(n,e,t,i,s,r){const o=ta(n),a=o!==n&&!vn(n),l=o[e];if(l!==Rf[e]){const f=l.apply(n,r);return a?xn(f):f}let c=t;o!==n&&(a?c=function(f,u){return t.call(this,On(n,f),u,n)}:t.length>2&&(c=function(f,u){return t.call(this,f,u,n)}));const h=l.call(o,c,i);return a&&s?s(h):h}function Eh(n,e,t,i){const s=ta(n),r=s!==n&&!vn(n);let o=t,a=!1;s!==n&&(r?(a=i.length===0,o=function(c,h,f){return a&&(a=!1,c=On(n,c)),t.call(this,c,On(n,h),f,n)}):t.length>3&&(o=function(c,h,f){return t.call(this,c,h,f,n)}));const l=s[e](o,...i);return a?On(n,l):l}function Sa(n,e,t){const i=st(n);Bt(i,"iterate",Er);const s=i[e](...t);return(s===-1||s===!1)&&Ic(t[0])?(t[0]=st(t[0]),i[e](...t)):s}function Ks(n,e,t=[]){Yn(),wc();const i=st(n)[e].apply(n,t);return Tc(),qn(),i}const Op=Sc("__proto__,__v_isRef,__isVue"),Cf=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Xn));function Fp(n){Xn(n)||(n=String(n));const e=st(this);return Bt(e,"has",n),e.hasOwnProperty(n)}class Pf{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?qp:Uf:r?Df:If).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Be(e);if(!s){let l;if(o&&(l=Np[t]))return l;if(t==="hasOwnProperty")return Fp}const a=Reflect.get(e,t,zt(e)?e:i);if((Xn(t)?Cf.has(t):Op(t))||(s||Bt(e,"get",t),r))return a;if(zt(a)){const l=o&&Ec(t)?a:a.value;return s&&ct(l)?bl(l):l}return ct(a)?s?bl(a):Pc(a):a}}class Lf extends Pf{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];const o=Be(e)&&Ec(t);if(!this._isShallow){const c=jn(r);if(!vn(i)&&!jn(i)&&(r=st(r),i=st(i)),!o&&zt(r)&&!zt(i))return c||(r.value=i),!0}const a=o?Number(t)<e.length:tt(e,t),l=Reflect.set(e,t,i,zt(e)?e:s);return e===st(s)&&l&&(a?Hn(i,r)&&ci(e,"set",t,i):ci(e,"add",t,i)),l}deleteProperty(e,t){const i=tt(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&ci(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!Xn(t)||!Cf.has(t))&&Bt(e,"has",t),i}ownKeys(e){return Bt(e,"iterate",Be(e)?"length":es),Reflect.ownKeys(e)}}class Bp extends Pf{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const kp=new Lf,zp=new Bp,Hp=new Lf(!0);const Sl=n=>n,Xr=n=>Reflect.getPrototypeOf(n);function Vp(n,e,t){return function(...i){const s=this.__v_raw,r=st(s),o=Ti(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),h=t?Sl:e?Li:xn;return!e&&Bt(r,"iterate",l?Ml:es),At(Object.create(c),{next(){const{value:f,done:u}=c.next();return u?{value:f,done:u}:{value:a?[h(f[0]),h(f[1])]:h(f),done:u}}})}}function Yr(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Gp(n,e){const t={get(s){const r=this.__v_raw,o=st(r),a=st(s);n||(Hn(s,a)&&Bt(o,"get",s),Bt(o,"get",a));const{has:l}=Xr(o),c=e?Sl:n?Li:xn;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&Bt(st(s),"iterate",es),s.size},has(s){const r=this.__v_raw,o=st(r),a=st(s);return n||(Hn(s,a)&&Bt(o,"has",s),Bt(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=st(a),c=e?Sl:n?Li:xn;return!n&&Bt(l,"iterate",es),a.forEach((h,f)=>s.call(r,c(h),c(f),o))}};return At(t,n?{add:Yr("add"),set:Yr("set"),delete:Yr("delete"),clear:Yr("clear")}:{add(s){const r=st(this),o=Xr(r),a=st(s),l=!e&&!vn(s)&&!jn(s)?a:s;return o.has.call(r,l)||Hn(s,l)&&o.has.call(r,s)||Hn(a,l)&&o.has.call(r,a)||(r.add(l),ci(r,"add",l,l)),this},set(s,r){!e&&!vn(r)&&!jn(r)&&(r=st(r));const o=st(this),{has:a,get:l}=Xr(o);let c=a.call(o,s);c||(s=st(s),c=a.call(o,s));const h=l.call(o,s);return o.set(s,r),c?Hn(r,h)&&ci(o,"set",s,r):ci(o,"add",s,r),this},delete(s){const r=st(this),{has:o,get:a}=Xr(r);let l=o.call(r,s);l||(s=st(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&ci(r,"delete",s,void 0),c},clear(){const s=st(this),r=s.size!==0,o=s.clear();return r&&ci(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=Vp(s,n,e)}),t}function Cc(n,e){const t=Gp(n,e);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_isShallow"?e:s==="__v_raw"?i:Reflect.get(tt(t,s)&&s in i?t:i,s,r)}const Wp={get:Cc(!1,!1)},Xp={get:Cc(!1,!0)},Yp={get:Cc(!0,!1)};const If=new WeakMap,Df=new WeakMap,Uf=new WeakMap,qp=new WeakMap;function jp(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Pc(n){return jn(n)?n:Lc(n,!1,kp,Wp,If)}function Kp(n){return Lc(n,!1,Hp,Xp,Df)}function bl(n){return Lc(n,!0,zp,Yp,Uf)}function Lc(n,e,t,i,s){if(!ct(n)||n.__v_raw&&!(e&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const r=s.get(n);if(r)return r;const o=jp(xp(n));if(o===0)return n;const a=new Proxy(n,o===2?i:t);return s.set(n,a),a}function Ai(n){return jn(n)?Ai(n.__v_raw):!!(n&&n.__v_isReactive)}function jn(n){return!!(n&&n.__v_isReadonly)}function vn(n){return!!(n&&n.__v_isShallow)}function Ic(n){return n?!!n.__v_raw:!1}function st(n){const e=n&&n.__v_raw;return e?st(e):n}function Nf(n){return!tt(n,"__v_skip")&&Object.isExtensible(n)&&mf(n,"__v_skip",!0),n}const xn=n=>ct(n)?Pc(n):n,Li=n=>ct(n)?bl(n):n;function zt(n){return n?n.__v_isRef===!0:!1}function Tt(n){return $p(n,!1)}function $p(n,e){return zt(n)?n:new Jp(n,e)}class Jp{constructor(e,t){this.dep=new Rc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:st(e),this._value=t?e:xn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||vn(e)||jn(e);e=i?e:st(e),Hn(e,t)&&(this._rawValue=e,this._value=i?e:xn(e),this.dep.trigger())}}function _t(n){return zt(n)?n.value:n}const Zp={get:(n,e,t)=>e==="__v_raw"?n:_t(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return zt(s)&&!zt(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function Of(n){return Ai(n)?n:new Proxy(n,Zp)}class Qp{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Rc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=br-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&ut!==this)return Sf(this,!0),!0}get value(){const e=this.dep.track();return wf(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function em(n,e,t=!1){let i,s;return qe(n)?i=n:(i=n.get,s=n.set),new Qp(i,s,t)}const qr={},No=new WeakMap;let Wi;function tm(n,e=!1,t=Wi){if(t){let i=No.get(t);i||No.set(t,i=[]),i.push(n)}}function nm(n,e,t=ht){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=t,c=b=>s?b:vn(b)||s===!1||s===0?hi(b,1):hi(b);let h,f,u,d,g=!1,_=!1;if(zt(n)?(f=()=>n.value,g=vn(n)):Ai(n)?(f=()=>c(n),g=!0):Be(n)?(_=!0,g=n.some(b=>Ai(b)||vn(b)),f=()=>n.map(b=>{if(zt(b))return b.value;if(Ai(b))return c(b);if(qe(b))return l?l(b,2):b()})):qe(n)?e?f=l?()=>l(n,2):n:f=()=>{if(u){Yn();try{u()}finally{qn()}}const b=Wi;Wi=h;try{return l?l(n,3,[d]):n(d)}finally{Wi=b}}:f=Vn,e&&s){const b=f,O=s===!0?1/0:s;f=()=>hi(b(),O)}const m=Ip(),p=()=>{h.stop(),m&&m.active&&bc(m.effects,h)};if(r&&e){const b=e;e=(...O)=>{try{return b(...O)}finally{p()}}}let T=_?new Array(n.length).fill(qr):qr;const M=b=>{if(!(!(h.flags&1)||!h.dirty&&!b))if(e){const O=h.run();if(b||s||g||(_?O.some((R,P)=>Hn(R,T[P])):Hn(O,T))){const R=Wi;Yn();try{u&&u(),Wi=h;const P=[O,T===qr?void 0:_&&T[0]===qr?[]:T,d];T=O,l?l(e,3,P):e(...P)}finally{Wi=R,qn()}}}else h.run()};return a&&a(M),h=new yf(f),h.scheduler=o?()=>o(M,!1):M,d=b=>tm(b,!1,h),u=h.onStop=()=>{const b=No.get(h);if(b){if(l)l(b,4);else for(const O of b)O();No.delete(h)}},e?i?M(!0):T=h.run():o?o(M.bind(null,!0),!0):h.run(),p.pause=h.pause.bind(h),p.resume=h.resume.bind(h),p.stop=p,p}function hi(n,e=1/0,t){if(e<=0||!ct(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,zt(n))hi(n.value,e,t);else if(Be(n))for(let i=0;i<n.length;i++)hi(n[i],e,t);else if(ns(n)||Ti(n))n.forEach(i=>{hi(i,e,t)});else if(df(n)){for(const i in n)hi(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&hi(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Fr(n,e,t,i){try{return i?n(...i):n()}catch(s){na(s,e,t)}}function Ln(n,e,t,i){if(qe(n)){const s=Fr(n,e,t,i);return s&&uf(s)&&s.catch(r=>{na(r,e,t,void 0,!0)}),s}if(Be(n)){const s=[];for(let r=0;r<n.length;r++)s.push(Ln(n[r],e,t,i));return s}}function na(n,e,t,i=!0,s=!1){const r=e?e.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||ht;if(e){let l=e.parent;const c=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${t}`;for(;l;){const f=l.ec;if(f&&!l.isUnmounted&&(!s||l.scope.active)){for(let u=0;u<f.length;u++)if(f[u](n,c,h)===!1)return}l=l.parent}if(o){Yn(),Fr(o,null,10,[n,c,h]),qn();return}}im(n,t,r,i,a)}function im(n,e,t,i=!0,s=!1){if(s)throw n;console.error(n)}const Wt=[];let En=-1;const Fn=[];let Si=null,Ts=0;const Ff=Promise.resolve();let Oo=null;function Dc(n){const e=Oo||Ff;return n?e.then(this?n.bind(this):n):e}function sm(n){let e=En+1,t=Wt.length;for(;e<t;){const i=e+t>>>1,s=Wt[i],r=wr(s);r<n||r===n&&s.flags&2?e=i+1:t=i}return e}function Uc(n){if(!(n.flags&1)){const e=wr(n),t=Wt[Wt.length-1];!t||!(n.flags&2)&&e>=wr(t)?Wt.push(n):Wt.splice(sm(e),0,n),n.flags|=1,Bf()}}function Bf(){Oo||(Oo=Ff.then(Hf))}function rm(n){if(!Be(n))Si&&n.id===-1?Si.splice(Ts+1,0,n):n.flags&1||(Fn.push(n),n.flags|=1);else for(let e=0;e<n.length;e++)Fn.push(n[e]);Bf()}function kf(n,e,t,i=En+1){for(;i<Wt.length;i++){const s=Wt[i];if(s&&s.flags&2){if(n&&s.id!==n.uid||e!==void 0&&!(s.id>=e))continue;Wt.splice(i,1),i=n?i-1:En,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function zf(n,e,t=0){if(Fn.length){let i=Fn,s=0;if(e){i=[];for(let o=0;o<Fn.length;o++){const a=Fn[o];(a.i!==void 0?!a.i||a.i.uid<t:e.has(a))?Fn[s++]=a:i.push(a)}}const r=[...new Set(i)].sort((o,a)=>wr(o)-wr(a));if(Fn.length=s,Si){for(let o=0;o<r.length;o++)Si.push(r[o]);return}for(Si=r,Ts=0;Ts<Si.length;Ts++){const o=Si[Ts];o.flags&4&&(o.flags&=-2),o.flags&8||o(),o.flags&=-2}Si=null,Ts=0}}let ba=!1;function om(n,e){if(ba){n();return}const t=e===void 0?void 0:new Set(Fn);n(),ba=!0;try{kf(void 0,e),zf(void 0,t,e)}finally{ba=!1}}const wr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Hf(n){try{for(En=0;En<Wt.length;En++){const e=Wt[En];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Fr(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;En<Wt.length;En++){const e=Wt[En];e&&(e.flags&=-2)}En=-1,Wt.length=0,zf(),Oo=null,(Wt.length||Fn.length)&&Hf()}}let _n=null,Vf=null;function Fo(n){const e=_n;return _n=n,Vf=n&&n.type.__scopeId||null,e}function am(n,e=_n,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&Nh(-1);const r=Fo(e),o=ts.length;let a;try{a=n(...s)}finally{for(let l=ts.length;l>o;l--)dd();Fo(r),i._d&&Nh(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function As(n,e){if(_n===null)return n;const t=oa(_n),i=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=ht]=e[s];r&&(qe(r)&&(r={mounted:r,updated:r}),r.deep&&hi(o),i.push({dir:r,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function Oi(n,e,t,i){let s=n;if(i==="beforeMount")n._mount=n;else if(i==="beforeUpdate"){const a=e&&e._mount;a&&(a._latest=n,n._mount=a)}else if(i==="mounted"){const a=n._latest;n._mount=n._latest=void 0,a&&(s=a,a._mount=void 0)}const r=s.dirs,o=e&&e.dirs;for(let a=0;a<r.length;a++){let l=r[a];o?l.oldValue=o[a].value:i==="mounted"&&l.oldValue!==void 0&&(l=At({},l,{oldValue:void 0}));let c=l.dir[i];c&&(Yn(),Ln(c,t,8,[n.el,l,s,e]),qn())}}function lm(n,e){if(Xt){let t=Xt.provides;const i=Xt.parent&&Xt.parent.provides;i===t&&(t=Xt.provides=Object.create(i)),t[n]=e}}function wo(n,e,t=!1){const i=o0();if(i||Ls){let s=Ls?Ls._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&qe(e)?e.call(i&&i.proxy):e}}const cm=Symbol.for("v-scx"),hm=()=>wo(cm);function fr(n,e,t){return Gf(n,e,t)}function Gf(n,e,t=ht){const{immediate:i,deep:s,flush:r,once:o}=t,a=At({},t),l=e&&i||!e&&r!=="post";let c;if(Cr){if(r==="sync"){const d=hm();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=Vn,d.resume=Vn,d.pause=Vn,d}}const h=Xt;a.call=(d,g,_)=>Ln(d,h,g,_);let f=!1;r==="post"?a.scheduler=d=>{d.i=h,Vt(d,h&&h.suspense)}:r!=="sync"&&(f=!0,a.scheduler=(d,g)=>{g?d():Uc(d)}),a.augmentJob=d=>{e&&(d.flags|=4),f&&(d.flags|=2,h&&(d.id=h.uid,d.i=h))};const u=nm(n,e,a);return Cr&&(c?c.push(u):l&&u()),u}function um(n,e,t){const i=this.proxy,s=Mt(n)?n.includes(".")?Wf(i,n):()=>i[n]:n.bind(i,i);let r;qe(e)?r=e:(r=e.handler,t=e);const o=Br(this),a=Gf(s,r.bind(i),t);return o(),a}function Wf(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}const fm=Symbol("_vte"),ia=n=>n.__isTeleport,Ea=Symbol("_leaveCb");function dm(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==In){e=t;break}}return e}function Xf(n){if(!Nc(n))return ia(n.type)&&n.children?dm(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&qe(t.default))return t.default()}}function dr(n,e){if(n.shapeFlag&6&&n.component){n.transition=e;const t=n.component.subTree;dr(ia(t.type)&&Xf(t)||t,e)}else if(n.shapeFlag&128){const t=n.suspense;if(t){const i=t.isHydrating?t.pendingBranch:t.activeBranch;i&&dr(i,e.clone(i))}else n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)}else if(n.transition=e,n.type===vt&&Be(n.children)){const t=ed(n.children,!1);t&&dr(t,e)}}function El(n){if(n.component)return El(n.component.subTree);if(n.type===vt){const e=Be(n.children)&&ed(n.children,!1);return e?El(e):void 0}if(n.type!==In)return n}function Yf(n,e){return qe(n)?At({name:n.name},e,{setup:n}):n}function qf(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function wh(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const Bo=new WeakMap;function pr(n,e,t,i,s=!1){if(Be(n)){n.forEach((_,m)=>pr(_,e&&(Be(e)?e[m]:e),t,i,s));return}if(mr(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&pr(n,e,t,i.component.subTree);return}const r=i.shapeFlag&4?oa(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=e&&e.r,h=a.refs===ht?a.refs={}:a.refs,f=a.setupState,u=st(f),d=f===ht?hf:_=>wh(h,_)?!1:tt(u,_),g=(_,m)=>!(m&&wh(h,m));if(c!=null&&c!==l){if(Th(e),Mt(c))h[c]=null,d(c)&&(f[c]=null);else if(zt(c)){const _=e;g(c,_.k)&&(c.value=null),_.k&&(h[_.k]=null)}}if(qe(l))Fr(l,a,12,[o,h]);else{const _=Mt(l),m=zt(l);if(_||m){const p=()=>{if(n.f){const T=_?d(l)?f[l]:h[l]:g()||!n.k?l.value:h[n.k];if(s)Be(T)&&bc(T,r);else if(Be(T))T.includes(r)||T.push(r);else if(_)h[l]=[r],d(l)&&(f[l]=h[l]);else{const M=[r];g(l,n.k)&&(l.value=M),n.k&&(h[n.k]=M)}}else _?(h[l]=o,d(l)&&(f[l]=o)):m&&(g(l,n.k)&&(l.value=o),n.k&&(h[n.k]=o))};if(o){const T=()=>{p(),Bo.delete(n)};T.id=-1,Bo.set(n,T),Vt(T,t)}else Th(n),p()}}}function Th(n){const e=Bo.get(n);e&&(e.flags|=8,Bo.delete(n))}ea().requestIdleCallback;ea().cancelIdleCallback;const mr=n=>!!n.type.__asyncLoader,Nc=n=>n.type.__isKeepAlive;function pm(n,e){jf(n,"a",e)}function mm(n,e){jf(n,"da",e)}function jf(n,e,t=Xt){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Tr(e,i,t),t){let s=t.parent;for(;s&&s.parent;)Nc(s.parent.vnode)&&gm(i,e,t,s),s=s.parent}}function gm(n,e,t,i){const s=Tr(e,n,i,!0),r=Tr("um",()=>bc(i[e],s),t);r.flags=16}function Tr(n,e,t=Xt,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...o)=>{Yn();const a=Br(t),l=Ln(e,t,n,o);return a(),qn(),l});return i?s.unshift(r):s.push(r),r}}const pi=n=>(e,t=Xt)=>{(!Cr||n==="sp")&&Tr(n,(...i)=>e(...i),t)},_m=pi("bm"),Kf=pi("m"),vm=pi("bu"),xm=pi("u"),Oc=pi("bum"),ym=pi("um"),Mm=pi("sp"),Sm=pi("rtg"),bm=pi("rtc");function Em(n,e=Xt){Tr("ec",n,e)}const wm=Symbol.for("v-ndc");function Qn(n,e,t,i){let s;const r=t,o=Be(n);if(o||Mt(n)){const a=o&&Ai(n);let l=!1,c=!1;a&&(l=!vn(n),c=jn(n),n=ta(n)),s=new Array(n.length);for(let h=0,f=n.length;h<f;h++)s[h]=e(l?c?Li(xn(n[h])):xn(n[h]):n[h],h,void 0,r)}else if(typeof n=="number")if(!Number.isInteger(n)||n<0)s=[];else{s=new Array(n);for(let a=0;a<n;a++)s[a]=e(a+1,a,void 0,r)}else if(ct(n))if(n[Symbol.iterator])s=Array.from(n,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(n);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const h=a[l];s[l]=e(n[h],h,l,r)}}else s=[];return s}const wl=n=>n?_d(n)?oa(n):wl(n.parent):null,gr=At(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>wl(n.parent),$root:n=>wl(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Jf(n),$forceUpdate:n=>n.f||(n.f=()=>{Uc(n.update)}),$nextTick:n=>n.n||(n.n=Dc.bind(n.proxy)),$watch:n=>um.bind(n)}),wa=(n,e)=>n!==ht&&!n.__isScriptSetup&&tt(n,e),Tm={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;if(e[0]!=="$"){const u=o[e];if(u!==void 0)switch(u){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(wa(i,e))return o[e]=1,i[e];if(s!==ht&&tt(s,e))return o[e]=2,s[e];if(tt(r,e))return o[e]=3,r[e];if(t!==ht&&tt(t,e))return o[e]=4,t[e];Tl&&(o[e]=0)}}const c=gr[e];let h,f;if(c)return e==="$attrs"&&Bt(n.attrs,"get",""),c(n);if((h=a.__cssModules)&&(h=h[e]))return h;if(t!==ht&&tt(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,tt(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return wa(s,e)?(s[e]=t,!0):i!==ht&&tt(i,e)?(i[e]=t,!0):tt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,props:r,type:o}},a){let l;return!!(t[a]||n!==ht&&a[0]!=="$"&&tt(n,a)||wa(e,a)||tt(r,a)||tt(i,a)||tt(gr,a)||tt(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:tt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Ah(n){return Be(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Tl=!0;function Am(n){const e=Jf(n),t=n.proxy,i=n.ctx;Tl=!1,e.beforeCreate&&Rh(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:h,beforeMount:f,mounted:u,beforeUpdate:d,updated:g,activated:_,deactivated:m,beforeDestroy:p,beforeUnmount:T,destroyed:M,unmounted:b,render:O,renderTracked:R,renderTriggered:P,errorCaptured:F,serverPrefetch:ie,expose:x,inheritAttrs:E,components:W,directives:X,filters:Z}=e;if(c&&Rm(c,i,null),o)for(const se in o){const V=o[se];qe(V)&&(i[se]=V.bind(t))}if(s){const se=s.call(t,t);ct(se)&&(n.data=Pc(se))}if(Tl=!0,r)for(const se in r){const V=r[se],ve=qe(V)?V.bind(t,t):qe(V.get)?V.get.bind(t,t):Vn,Se=!qe(V)&&qe(V.set)?V.set.bind(t):Vn,be=an({get:ve,set:Se});Object.defineProperty(i,se,{enumerable:!0,configurable:!0,get:()=>be.value,set:ke=>be.value=ke})}if(a)for(const se in a)$f(a[se],i,t,se);if(l){const se=qe(l)?l.call(t):l;Reflect.ownKeys(se).forEach(V=>{lm(V,se[V])})}h&&Rh(h,n,"c");function H(se,V){Be(V)?V.forEach(ve=>se(ve.bind(t))):V&&se(V.bind(t))}if(H(_m,f),H(Kf,u),H(vm,d),H(xm,g),H(pm,_),H(mm,m),H(Em,F),H(bm,R),H(Sm,P),H(Oc,T),H(ym,b),H(Mm,ie),Be(x))if(x.length){const se=n.exposed||(n.exposed={});x.forEach(V=>{Object.defineProperty(se,V,{get:()=>t[V],set:ve=>t[V]=ve,enumerable:!0})})}else n.exposed||(n.exposed={});O&&n.render===Vn&&(n.render=O),E!=null&&(n.inheritAttrs=E),W&&(n.components=W),X&&(n.directives=X),ie&&qf(n)}function Rm(n,e,t=Vn){Be(n)&&(n=Al(n));for(const i in n){const s=n[i];let r;ct(s)?"default"in s?r=wo(s.from||i,s.default,!0):r=wo(s.from||i):r=wo(s),zt(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function Rh(n,e,t){Ln(Be(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function $f(n,e,t,i){let s=i.includes(".")?Wf(t,i):()=>t[i];if(Mt(n)){const r=e[n];qe(r)&&fr(s,r)}else if(qe(n))fr(s,n.bind(t));else if(ct(n))if(Be(n))n.forEach(r=>$f(r,e,t,i));else{const r=qe(n.handler)?n.handler.bind(t):e[n.handler];qe(r)&&fr(s,r,n)}}function Jf(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>ko(l,c,o,!0)),ko(l,e,o)),ct(e)&&r.set(e,l),l}function ko(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&ko(n,r,t,!0),s&&s.forEach(o=>ko(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=Cm[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const Cm={data:Ch,props:Ph,emits:Ph,methods:or,computed:or,beforeCreate:Ht,created:Ht,beforeMount:Ht,mounted:Ht,beforeUpdate:Ht,updated:Ht,beforeDestroy:Ht,beforeUnmount:Ht,destroyed:Ht,unmounted:Ht,activated:Ht,deactivated:Ht,errorCaptured:Ht,serverPrefetch:Ht,components:or,directives:or,watch:Lm,provide:Ch,inject:Pm};function Ch(n,e){return e?n?function(){return At(qe(n)?n.call(this,this):n,qe(e)?e.call(this,this):e)}:e:n}function Pm(n,e){return or(Al(n),Al(e))}function Al(n){if(Be(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Ht(n,e){return n?[...new Set([].concat(n,e))]:e}function or(n,e){return n?At(Object.create(null),n,e):e}function Ph(n,e){return n?Be(n)&&Be(e)?[...new Set([...n,...e])]:At(Object.create(null),Ah(n),Ah(e??{})):e}function Lm(n,e){if(!n)return e;if(!e)return n;const t=At(Object.create(null),n);for(const i in e)t[i]=Ht(n[i],e[i]);return t}function Zf(){return{app:null,config:{isNativeTag:hf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Im=0;function Dm(n,e){return function(i,s=null){qe(i)||(i=At({},i)),s!=null&&!ct(s)&&(s=null);const r=Zf(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:Im++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:f0,get config(){return r.config},set config(h){},use(h,...f){return o.has(h)||(h&&qe(h.install)?(o.add(h),h.install(c,...f)):qe(h)&&(o.add(h),h(c,...f))),c},mixin(h){return r.mixins.includes(h)||r.mixins.push(h),c},component(h,f){return f?(r.components[h]=f,c):r.components[h]},directive(h,f){return f?(r.directives[h]=f,c):r.directives[h]},mount(h,f,u){if(!l){const d=c._ceVNode||Gn(i,s);return d.appContext=r,u===!0?u="svg":u===!1&&(u=void 0),n(d,h,u),l=!0,c._container=h,h.__vue_app__=c,oa(d.component)}},onUnmount(h){a.push(h)},unmount(){l&&(Ln(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(h,f){return r.provides[h]=f,c},runWithContext(h){const f=Ls;Ls=c;try{return h()}finally{Ls=f}}};return c}}let Ls=null;const Um=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Cn(e)}Modifiers`]||n[`${as(e)}Modifiers`];function Nm(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||ht;let s=t;const r=e.startsWith("update:"),o=r&&Um(i,e.slice(7));o&&(o.trim&&(s=t.map(h=>Mt(h)?h.trim():h)),o.number&&(s=s.map(Or)));let a,l=i[a=va(e)]||i[a=va(Cn(e))];!l&&r&&(l=i[a=va(as(e))]),l&&Ln(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Ln(c,n,6,s)}}const Om=new WeakMap;function Qf(n,e,t=!1){const i=t?Om:e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!qe(n)){const l=c=>{const h=Qf(c,e,!0);h&&(a=!0,At(o,h))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(ct(n)&&i.set(n,null),null):(Be(r)?r.forEach(l=>o[l]=null):At(o,r),ct(n)&&i.set(n,o),o)}function sa(n,e){return!n||!Jo(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),tt(n,e[0].toLowerCase()+e.slice(1))||tt(n,as(e))||tt(n,e))}function Lh(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:h,props:f,data:u,setupState:d,ctx:g,inheritAttrs:_}=n,m=Fo(n);let p,T;try{if(t.shapeFlag&4){const b=s||i,O=b;p=Bn(c.call(O,b,h,f,d,u,g)),T=a}else{const b=e;p=Bn(b.length>1?b(f,{attrs:a,slots:o,emit:l}):b(f,null)),T=e.props?a:Fm(a)}}catch(b){ts.length=0,na(b,n,1),p=Gn(In)}let M=p;if(T&&_!==!1){const b=Object.keys(T),{shapeFlag:O}=M;b.length&&O&7&&(r&&b.some(Zo)&&(T=Bm(T,r)),M=Fs(M,T,!1,!0))}if(t.dirs&&(M=Fs(M,null,!1,!0),M.dirs=M.dirs?M.dirs.concat(t.dirs):t.dirs),t.transition){const b=ia(M.type)&&Xf(M)||M;dr(b,t.transition)}return p=M,Fo(m),p}function ed(n,e=!0){let t;for(let i=0;i<n.length;i++){const s=n[i];if(kc(s)){if(s.type!==In||s.children==="v-if"){if(t)return;t=s}}else return}return t}const Fm=n=>{let e;for(const t in n)(t==="class"||t==="style"||Jo(t))&&((e||(e={}))[t]=n[t]);return e},Bm=(n,e)=>{const t={};for(const i in n)(!Zo(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function km(n,e,t){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Ih(i,o,c):!!o;if(l&8){const h=e.dynamicProps;for(let f=0;f<h.length;f++){const u=h[f];if(td(o,i,u)&&!sa(c,u))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Ih(i,o,c):!0:!!o;return!1}function Ih(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(!tt(n,r)||td(e,n,r)&&!sa(t,r))return!0}return!1}function td(n,e,t){const i=n[t],s=e[t];return t==="style"&&ct(i)&&ct(s)?!Pi(i,s):i!==s}function zm({vnode:n,parent:e,suspense:t},i){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.suspense.vnode.el=s.el=i,n=s),s===n)(n=e.vnode).el=i,e=e.parent;else break}t&&t.activeBranch===n&&(t.vnode.el=i)}const nd={},id=()=>Object.create(nd),sd=n=>Object.getPrototypeOf(n)===nd;function Hm(n,e,t,i=!1){const s={},r=id();n.propsDefaults=Object.create(null),rd(n,e,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=i?s:Kp(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function Vm(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=st(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const h=n.vnode.dynamicProps;for(let f=0;f<h.length;f++){let u=h[f];if(sa(n.emitsOptions,u))continue;const d=e[u];if(l)if(tt(r,u))d!==r[u]&&(r[u]=d,c=!0);else{const g=Cn(u);s[g]=Rl(l,a,g,d,n,!1)}else d!==r[u]&&(r[u]=d,c=!0)}}}else{rd(n,e,s,r)&&(c=!0);let h;for(const f in a)(!e||!tt(e,f)&&((h=as(f))===f||!tt(e,h)))&&(l?t&&(t[f]!==void 0||t[h]!==void 0)&&(s[f]=Rl(l,a,f,void 0,n,!0)):delete s[f]);if(r!==a)for(const f in r)(!e||!tt(e,f))&&(delete r[f],c=!0)}c&&ci(n.attrs,"set","")}function rd(n,e,t,i){const[s,r]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(cr(l))continue;const c=e[l];let h;s&&tt(s,h=Cn(l))?!r||!r.includes(h)?t[h]=c:(a||(a={}))[h]=c:sa(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=st(t),c=a||ht;for(let h=0;h<r.length;h++){const f=r[h];t[f]=Rl(s,l,f,c[f],n,!tt(c,f))}}return o}function Rl(n,e,t,i,s,r){const o=n[t];if(o!=null){const a=tt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&qe(l)){const{propsDefaults:c}=s;if(t in c)i=c[t];else{const h=Br(s);i=c[t]=l.call(null,e),h()}}else i=l;s.ce&&s.ce._setProp(t,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===as(t))&&(i=!0))}return i}const Gm=new WeakMap;function od(n,e,t=!1){const i=t?Gm:e.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!qe(n)){const h=f=>{l=!0;const[u,d]=od(f,e,!0);At(o,u),d&&a.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(h),n.extends&&h(n.extends),n.mixins&&n.mixins.forEach(h)}if(!r&&!l)return ct(n)&&i.set(n,$i),$i;if(Be(r))for(let h=0;h<r.length;h++){const f=Cn(r[h]);Dh(f)&&(o[f]=ht)}else if(r)for(const h in r){const f=Cn(h);if(Dh(f)){const u=r[h],d=o[f]=Be(u)||qe(u)?{type:u}:At({},u),g=d.type;let _=!1,m=!0;if(Be(g))for(let p=0;p<g.length;++p){const T=g[p],M=qe(T)&&T.name;if(M==="Boolean"){_=!0;break}else M==="String"&&(m=!1)}else _=qe(g)&&g.name==="Boolean";d[0]=_,d[1]=m,(_||tt(d,"default"))&&a.push(f)}}const c=[o,a];return ct(n)&&i.set(n,c),c}function Dh(n){return n[0]!=="$"&&!cr(n)}const Fc=n=>n==="_"||n==="_ctx"||n==="$stable",Bc=n=>Be(n)?n.map(Bn):[Bn(n)],Wm=(n,e,t)=>{if(e._n)return e;const i=am((...s)=>Bc(e(...s)),t);return i._c=!1,i},ad=(n,e,t)=>{const i=n._ctx;for(const s in n){if(Fc(s))continue;const r=n[s];if(qe(r))e[s]=Wm(s,r,i);else if(r!=null){const o=Bc(r);e[s]=()=>o}}},ld=(n,e)=>{const t=Bc(e);n.slots.default=()=>t},cd=(n,e,t)=>{for(const i in e)(t||!Fc(i))&&(n[i]=e[i])},Xm=(n,e,t)=>{const i=n.slots=id();if(n.vnode.shapeFlag&32){const s=e._;s?(cd(i,e,t),t&&mf(i,"_",s,!0)):ad(e,i)}else e&&ld(n,e)},Ym=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,o=ht;if(i.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:cd(s,e,t):(r=!e.$stable,ad(e,s)),o=e}else e&&(ld(n,e),o={default:1});if(r)for(const a in s)!Fc(a)&&o[a]==null&&delete s[a]},Vt=Zm;function qm(n){return jm(n)}function jm(n,e){const t=ea();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:h,parentNode:f,nextSibling:u,setScopeId:d=Vn,insertStaticContent:g}=n,_=(A,L,S,re=null,j=null,J=null,te=void 0,ae=null,Q=!!L.dynamicChildren)=>{if(A===L)return;A&&!$s(A,L)&&(re=xe(A),ke(A,j,J,!0),A=null),L.patchFlag===-2&&(Q=!1,L.dynamicChildren=null),L.dynamicChildren&&A&&A.dynamicChildren&&A.dynamicChildren.hasOnce&&(L.dynamicChildren===$i&&(L.dynamicChildren=[]),L.dynamicChildren.hasOnce=!0);const{type:y,ref:v,shapeFlag:I}=L;switch(y){case ra:m(A,L,S,re);break;case In:p(A,L,S,re);break;case Aa:A==null&&T(L,S,re,te);break;case vt:W(A,L,S,re,j,J,te,ae,Q);break;default:I&1?O(A,L,S,re,j,J,te,ae,Q):I&6?X(A,L,S,re,j,J,te,ae,Q):(I&64||I&128)&&y.process(A,L,S,re,j,J,te,ae,Q,oe)}v!=null&&j?pr(v,A&&A.ref,J,L||A,!L):v==null&&A&&A.ref!=null&&pr(A.ref,null,J,A,!0)},m=(A,L,S,re)=>{if(A==null)i(L.el=a(L.children),S,re);else{const j=L.el=A.el;L.children!==A.children&&c(j,L.children)}},p=(A,L,S,re)=>{A==null?i(L.el=l(L.children||""),S,re):L.el=A.el},T=(A,L,S,re)=>{[A.el,A.anchor]=g(A.children,L,S,re,A.el,A.anchor)},M=({el:A,anchor:L},S,re)=>{let j;for(;A&&A!==L;)j=u(A),i(A,S,re),A=j;i(L,S,re)},b=({el:A,anchor:L})=>{let S;for(;A&&A!==L;)S=u(A),s(A),A=S;s(L)},O=(A,L,S,re,j,J,te,ae,Q)=>{if(L.type==="svg"?te="svg":L.type==="math"&&(te="mathml"),A==null)R(L,S,re,j,J,te,ae,Q);else{const y=A.el&&A.el._isVueCE?A.el:null;try{y&&y._beginPatch(),ie(A,L,j,J,te,ae,Q)}finally{y&&y._endPatch()}}},R=(A,L,S,re,j,J,te,ae)=>{let Q,y;const{props:v,shapeFlag:I,transition:k,dirs:$}=A;if(Q=A.el=o(A.type,J,v&&v.is,v),I&8?h(Q,A.children):I&16&&F(A.children,Q,null,re,j,Ta(A,J),te,ae),$&&Oi(A,null,re,"created"),P(Q,A,A.scopeId,te,re),v){for(const pe in v)pe!=="value"&&!cr(pe)&&r(Q,pe,null,v[pe],J,re);"value"in v&&r(Q,"value",null,v.value,J),(y=v.onVnodeBeforeMount)&&Dn(y,re,A)}$&&Oi(A,null,re,"beforeMount");const q=Km(j,k);q?k.beforeEnter(Q):k&&!k.persisted&&(Q[Jm]=!0),i(Q,L,S),((y=v&&v.onVnodeMounted)||q||$)&&Vt(()=>{try{y&&Dn(y,re,A),q&&k.enter(Q),$&&Oi(A,null,re,"mounted")}finally{}},j)},P=(A,L,S,re,j)=>{if(S&&d(A,S),re)for(let J=0;J<re.length;J++)d(A,re[J]);if(j){let J=j.subTree;if(L===J||fd(J.type)&&(J.ssContent===L||J.ssFallback===L)){const te=j.vnode;P(A,te,te.scopeId,te.slotScopeIds,j.parent)}}},F=(A,L,S,re,j,J,te,ae,Q=0)=>{for(let y=Q;y<A.length;y++){const v=A[y]=ae?li(A[y]):Bn(A[y]);_(null,v,L,S,re,j,J,te,ae)}},ie=(A,L,S,re,j,J,te)=>{const ae=L.el=A.el;let{patchFlag:Q,dynamicChildren:y,dirs:v}=L;Q|=A.patchFlag&16;const I=A.props||ht,k=L.props||ht;let $;if(S&&Fi(S,!1),($=k.onVnodeBeforeUpdate)&&Dn($,S,L,A),v&&Oi(L,A,S,"beforeUpdate"),S&&Fi(S,!0),y&&(!A.dynamicChildren||A.dynamicChildren.length!==y.length)&&(Q=0,te=!1,y=null),(I.innerHTML&&k.innerHTML==null||I.textContent&&k.textContent==null)&&h(ae,""),y?x(A.dynamicChildren,y,ae,S,re,Ta(L,j),J):te||V(A,L,ae,null,S,re,Ta(L,j),J,!1),Q>0){if(Q&16)E(ae,I,k,S,j);else if(Q&2&&I.class!==k.class&&r(ae,"class",null,k.class,j),Q&4&&r(ae,"style",I.style,k.style,j),Q&8){const q=L.dynamicProps;for(let pe=0;pe<q.length;pe++){const he=q[pe],fe=I[he],Fe=k[he];(Fe!==fe||he==="value")&&r(ae,he,fe,Fe,j,S)}}Q&1&&A.children!==L.children&&h(ae,L.children)}else!te&&y==null&&E(ae,I,k,S,j);(($=k.onVnodeUpdated)||v)&&Vt(()=>{$&&Dn($,S,L,A),v&&Oi(L,A,S,"updated")},re)},x=(A,L,S,re,j,J,te)=>{for(let ae=0;ae<L.length;ae++){const Q=A[ae],y=L[ae],v=Q.el||_r(Q),I=v&&(Q.type===vt||!$s(Q,y)||Q.shapeFlag&198)?f(v):S;_(Q,y,I,null,re,j,J,te,!0)}},E=(A,L,S,re,j)=>{if(L!==S){if(L!==ht)for(const J in L)!cr(J)&&!(J in S)&&r(A,J,L[J],null,j,re);for(const J in S){if(cr(J))continue;const te=S[J],ae=L[J];te!==ae&&J!=="value"&&r(A,J,ae,te,j,re)}"value"in S&&r(A,"value",L.value,S.value,j)}},W=(A,L,S,re,j,J,te,ae,Q)=>{const y=L.el=A?A.el:a(""),v=L.anchor=A?A.anchor:a("");let{patchFlag:I,dynamicChildren:k,slotScopeIds:$}=L;$&&(ae=ae?ae.concat($):$),A==null?(i(y,S,re),i(v,S,re),F(L.children||[],S,v,j,J,te,ae,Q)):I>0&&I&64&&k&&A.dynamicChildren&&A.dynamicChildren.length===k.length?(x(A.dynamicChildren,k,S,j,J,te,ae),(L.key!=null||j&&L===j.subTree)&&hd(A,L,!0)):V(A,L,S,v,j,J,te,ae,Q)},X=(A,L,S,re,j,J,te,ae,Q)=>{L.slotScopeIds=ae,A==null?L.shapeFlag&512?j.ctx.activate(L,S,re,te,Q):Z(L,S,re,j,J,te,Q):ce(A,L,Q)},Z=(A,L,S,re,j,J,te)=>{const ae=A.component=r0(A,re,j);if(Nc(A)&&(ae.ctx.renderer=oe),a0(ae,!1,te),ae.asyncDep){if(j&&j.registerDep(ae,H,te,J),!A.el){const Q=ae.subTree=Gn(In);p(null,Q,L,S),A.placeholder=Q.el}}else H(ae,A,L,S,j,J,te)},ce=(A,L,S)=>{const re=L.component=A.component;if(km(A,L,S))if(re.asyncDep&&!re.asyncResolved){L.el=A.el,L.placeholder=A.placeholder,se(re,L,S);return}else re.next=L,re.update();else L.el=A.el,L.placeholder=A.placeholder,re.vnode=L},H=(A,L,S,re,j,J,te)=>{const ae=()=>{if(A.isMounted){let{next:I,bu:k,u:$,parent:q,vnode:pe}=A;{const Me=ud(A);if(Me){I&&(I.el=pe.el,se(A,I,te)),Me.asyncDep.then(()=>{const De=()=>{A.job.flags&8||(j&&j.pendingBranch?Vt(De,j):y())};De.flags=48,Vt(De,j)});return}}let he=I,fe;Fi(A,!1),I?(I.el=pe.el,se(A,I,te)):I=pe,k&&Eo(k),(fe=I.props&&I.props.onVnodeBeforeUpdate)&&Dn(fe,q,I,pe),Fi(A,!0);const Fe=Lh(A),ue=A.subTree;A.subTree=Fe,_(ue,Fe,f(ue.el||_r(ue)),xe(ue),A,j,J),I.el=Fe.el,he===null&&zm(A,Fe.el),$&&Vt($,j),(fe=I.props&&I.props.onVnodeUpdated)&&Vt(()=>Dn(fe,q,I,pe),j)}else{let I;const{el:k,props:$}=L,{bm:q,m:pe,parent:he,root:fe,type:Fe}=A,ue=mr(L);Fi(A,!1),q&&Eo(q),!ue&&(I=$&&$.onVnodeBeforeMount)&&Dn(I,he,L),Fi(A,!0);{fe.ce&&fe.ce._hasShadowRoot()&&fe.ce._injectChildStyle(Fe,A.parent?A.parent.type:void 0);const Me=A.subTree=Lh(A);_(null,Me,S,re,A,j,J),L.el=Me.el}if(pe&&Vt(pe,j),!ue&&(I=$&&$.onVnodeMounted)){const Me=L;Vt(()=>Dn(I,he,Me),j)}(L.shapeFlag&256||he&&mr(he.vnode)&&he.vnode.shapeFlag&256)&&A.a&&Vt(A.a,j),A.isMounted=!0,L=S=re=null}};A.scope.on();const Q=A.effect=new yf(ae);A.scope.off();const y=A.update=Q.run.bind(Q),v=A.job=Q.runIfDirty.bind(Q);v.i=A,v.id=A.uid,Q.scheduler=()=>Uc(v),Fi(A,!0),y()},se=(A,L,S)=>{L.component=A;const re=A.vnode.props;A.vnode=L,A.next=null,Vm(A,L.props,re,S),Ym(A,L.children,S),Yn(),kf(A),qn()},V=(A,L,S,re,j,J,te,ae,Q=!1)=>{const y=A&&A.children,v=A?A.shapeFlag:0,I=L.children,{patchFlag:k,shapeFlag:$}=L;if(k>0){if(k&128){Se(y,I,S,re,j,J,te,ae,Q);return}else if(k&256){ve(y,I,S,re,j,J,te,ae,Q);return}}$&8?(v&16&&ge(y,j,J),I!==y&&h(S,I)):v&16?$&16?Se(y,I,S,re,j,J,te,ae,Q):ge(y,j,J,!0):(v&8&&h(S,""),$&16&&F(I,S,re,j,J,te,ae,Q))},ve=(A,L,S,re,j,J,te,ae,Q)=>{A=A||$i,L=L||$i;const y=A.length,v=L.length,I=Math.min(y,v);let k;for(k=0;k<I;k++){const $=L[k]=Q?li(L[k]):Bn(L[k]);_(A[k],$,S,null,j,J,te,ae,Q)}y>v?ge(A,j,J,!0,!1,I):F(L,S,re,j,J,te,ae,Q,I)},Se=(A,L,S,re,j,J,te,ae,Q)=>{let y=0;const v=L.length;let I=A.length-1,k=v-1;for(;y<=I&&y<=k;){const $=A[y],q=L[y]=Q?li(L[y]):Bn(L[y]);if($s($,q))_($,q,S,null,j,J,te,ae,Q);else break;y++}for(;y<=I&&y<=k;){const $=A[I],q=L[k]=Q?li(L[k]):Bn(L[k]);if($s($,q))_($,q,S,null,j,J,te,ae,Q);else break;I--,k--}if(y>I){if(y<=k){const $=k+1,q=$<v?L[$].el:re;for(;y<=k;)_(null,L[y]=Q?li(L[y]):Bn(L[y]),S,q,j,J,te,ae,Q),y++}}else if(y>k)for(;y<=I;)ke(A[y],j,J,!0),y++;else{const $=y,q=y,pe=new Map;for(y=q;y<=k;y++){const _e=L[y]=Q?li(L[y]):Bn(L[y]);_e.key!=null&&pe.set(_e.key,y)}let he,fe=0;const Fe=k-q+1;let ue=!1,Me=0;const De=new Array(Fe);for(y=0;y<Fe;y++)De[y]=0;for(y=$;y<=I;y++){const _e=A[y];if(fe>=Fe){ke(_e,j,J,!0);continue}let We;if(_e.key!=null)We=pe.get(_e.key);else for(he=q;he<=k;he++)if(De[he-q]===0&&$s(_e,L[he])){We=he;break}We===void 0?ke(_e,j,J,!0):(De[We-q]=y+1,We>=Me?Me=We:ue=!0,_(_e,L[We],S,null,j,J,te,ae,Q),fe++)}const ze=ue?$m(De):$i;for(he=ze.length-1,y=Fe-1;y>=0;y--){const _e=q+y,We=L[_e],Xe=L[_e+1],ot=_e+1<v?Xe.el||_r(Xe):re;De[y]===0?_(null,We,S,ot,j,J,te,ae,Q):ue&&(he<0||y!==ze[he]?be(We,S,ot,2):he--)}}},be=(A,L,S,re,j=null)=>{const{el:J,type:te,transition:ae,children:Q,shapeFlag:y}=A;if(y&6){be(A.component.subTree,L,S,re);return}if(y&128){A.suspense.move(L,S,re);return}if(y&64){te.move(A,L,S,oe);return}if(te===vt){i(J,L,S);for(let I=0;I<Q.length;I++)be(Q[I],L,S,re);i(A.anchor,L,S);return}if(te===Aa){M(A,L,S);return}if(re!==2&&y&1&&ae)if(re===0)ae.persisted&&!J[Ea]?i(J,L,S):(ae.beforeEnter(J),i(J,L,S),Vt(()=>ae.enter(J),j));else{const{leave:I,delayLeave:k,afterLeave:$}=ae,q=()=>{A.ctx.isUnmounted?s(J):i(J,L,S)},pe=()=>{const he=J._isLeaving||!!J[Ea];J._isLeaving&&J[Ea](!0),ae.persisted&&!he?q():I(J,()=>{q(),$&&$()})};k?k(J,q,pe):pe()}else i(J,L,S)},ke=(A,L,S,re=!1,j=!1)=>{const{type:J,props:te,ref:ae,children:Q,dynamicChildren:y,shapeFlag:v,patchFlag:I,dirs:k,cacheIndex:$,memo:q}=A;if((I===-2||y&&y.hasOnce)&&(j=!1),ae!=null&&(Yn(),pr(ae,null,S,A,!0),qn()),$!=null&&(!A.ctx||A.ctx===L)&&(L.renderCache[$]=void 0),v&256&&L.ctx.deactivate(A))return;const pe=v&1&&k,he=!mr(A);let fe;if(he&&(fe=te&&te.onVnodeBeforeUnmount)&&Dn(fe,L,A),v&6)C(A.component,S,re);else{if(v&128){A.suspense.unmount(S,re);return}pe&&Oi(A,null,L,"beforeUnmount"),v&64?A.type.remove(A,L,S,oe,re):y&&!y.hasOnce&&(J!==vt||I>0&&I&64)?ge(y,L,S,!1,!0):(J===vt&&I&384||!j&&v&16)&&ge(Q,L,S),re&&Je(A)}const Fe=q!=null&&$==null;(he&&(fe=te&&te.onVnodeUnmounted)||pe||Fe)&&Vt(()=>{fe&&Dn(fe,L,A),pe&&Oi(A,null,L,"unmounted"),Fe&&(A.el=null)},S)},Je=A=>{const{type:L,el:S,anchor:re,transition:j}=A,J=L===vt;if(J&&!j){G(S,re);return}if(L===Aa){b(A),j&&!j.persisted&&j.afterLeave&&j.afterLeave();return}const te=J?El(A):A,ae=()=>{J?f(S)&&G(S,re):s(S),j&&!j.persisted&&j.afterLeave&&j.afterLeave()};if(te&&te.shapeFlag&1&&j&&!j.persisted){const{leave:Q,delayLeave:y}=j,v=te.el,I=()=>Q(v,ae);y?y(v,ae,I):I()}else ae()},G=(A,L)=>{let S;for(;A!==L;)S=u(A),s(A),A=S;s(L)},C=(A,L,S)=>{const{bum:re,scope:j,job:J,subTree:te,um:ae,m:Q,a:y}=A;Uh(Q),Uh(y),re&&Eo(re),j.stop(),J?(J.flags|=8,ke(te,A,L,S)):te&&(te.transition=A.vnode.transition,ke(te,A,L,S)),ae&&Vt(ae,L);const v=()=>{A.isUnmounted=!0};v.flags=16,Vt(v,L)},ge=(A,L,S,re=!1,j=!1,J=0)=>{for(let te=J;te<A.length;te++)ke(A[te],L,S,re,j)},xe=A=>{if(A.shapeFlag&6)return xe(A.component.subTree);if(A.shapeFlag&128)return A.suspense.next();const L=u(A.anchor||A.el),S=L&&L[fm];return S?u(S):L},ne=(A,L,S)=>{const re=A&&L._vnode?void 0:A&&A.component?A.component.uid:s0();om(()=>{A==null?L._vnode&&ke(L._vnode,null,null,!0):_(L._vnode||null,A,L,null,null,null,S),L._vnode=A},re)},oe={p:_,um:ke,m:be,r:Je,mt:Z,mc:F,pc:V,pbc:x,n:xe,o:n};return{render:ne,hydrate:void 0,createApp:Dm(ne)}}function Ta({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Fi({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Km(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function hd(n,e,t=!1){const i=n.children,s=e.children;if(Be(i)&&Be(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=li(s[r]),a.el=o.el),!t&&a.patchFlag!==-2&&hd(o,a)),a.type===ra&&(a.patchFlag===-1&&(a=s[r]=li(a)),a.el=o.el),a.type===In&&!a.el&&(a.el=o.el)}}function $m(n){const e=n.slice(),t=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,n[t[a]]<c?r=a+1:o=a;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}function ud(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:ud(e)}function Uh(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function _r(n){if(n.placeholder)return n.placeholder;const e=n.component;if(e)return _r(e.subTree);const t=n.suspense;return t&&t.activeBranch?_r(t.activeBranch):null}const fd=n=>n.__isSuspense,Jm=Symbol("_deferredEnter");function Zm(n,e){e&&e.pendingBranch?Be(n)?e.effects.push(...n):e.effects.push(n):rm(n)}const vt=Symbol.for("v-fgt"),ra=Symbol.for("v-txt"),In=Symbol.for("v-cmt"),Aa=Symbol.for("v-stc"),ts=[];let cn=null;function Ne(n=!1){ts.push(cn=n?null:[])}function dd(){ts.pop(),cn=ts[ts.length-1]||null}let Ar=1;function Nh(n,e=!1){Ar+=n,n<0&&cn&&e&&(cn.hasOnce=!0)}function pd(n){return n.dynamicChildren=Ar>0?cn||$i:null,dd(),Ar>0&&cn&&cn.push(n),n}function Oe(n,e,t,i,s,r){return pd(z(n,e,t,i,s,r,!0))}function Qm(n,e,t,i,s){return pd(Gn(n,e,t,i,s,!0))}function kc(n){return n?n.__v_isVNode===!0:!1}function $s(n,e){return n.type===e.type&&n.key===e.key}const md=({key:n})=>n??null,To=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Mt(n)||zt(n)||qe(n)?{i:_n,r:n,k:e,f:!!t}:n:null);function z(n,e=null,t=null,i=0,s=null,r=n===vt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&md(e),ref:e&&To(e),scopeId:Vf,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:_n};return a?(zo(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=Mt(t)?8:16),Ar>0&&!o&&cn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&cn.push(l),l}const Gn=e0;function e0(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===wm)&&(n=In),kc(n)){const a=Fs(n,e,!0);return t&&zo(a,t),Ar>0&&!r&&cn&&(a.shapeFlag&6?cn[cn.indexOf(n)]=a:cn.push(a)),a.patchFlag=-2,a}if(u0(n)&&(n=n.__vccOpts),e){e=t0(e);let{class:a,style:l}=e;a&&!Mt(a)&&(e.class=Un(a)),ct(l)&&(Ic(l)&&!Be(l)&&(l=At({},l)),e.style=Ei(l))}const o=Mt(n)?1:fd(n)?128:ia(n)?64:ct(n)?4:qe(n)?2:0;return z(n,e,t,i,s,o,r,!0)}function t0(n){return n?Ic(n)?At({},n):sd(n)?At({},n[xd]||n):n:null}function Fs(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=e?n0(s||{},e):s,h={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&md(c),ref:e&&e.ref?t&&r?Be(r)?r.concat(To(e)):[r,To(e)]:To(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==vt?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Fs(n.ssContent),ssFallback:n.ssFallback&&Fs(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce,cacheIndex:n.cacheIndex};return l&&i&&dr(h,l.clone(h)),h}function et(n=" ",e=0){return Gn(ra,null,n,e)}function mt(n="",e=!1){return e?(Ne(),Qm(In,null,n)):Gn(In,null,n)}function Bn(n){return n==null||typeof n=="boolean"?Gn(In):Be(n)?Gn(vt,null,n.slice()):kc(n)?li(n):Gn(ra,null,String(n))}function li(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Fs(n)}function zo(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Be(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),zo(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!sd(e)?e._ctx=_n:s===3&&_n&&(_n.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else if(qe(e)){if(i&65){zo(n,{default:e});return}e={default:e,_ctx:_n},t=32}else e=String(e),i&64?(t=16,e=[et(e)]):t=8;n.children=e,n.shapeFlag|=t}function n0(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Un([e.class,i.class]));else if(s==="style")e.style=Ei([e.style,i.style]);else if(Jo(s)){const r=e[s],o=i[s];o&&r!==o&&!(Be(r)&&r.includes(o))?e[s]=r?[].concat(r,o):o:o==null&&r==null&&!Zo(s)&&(e[s]=o)}else s!==""&&(e[s]=i[s])}return e}function Dn(n,e,t,i=null){Ln(n,e,7,[t,i])}const i0=Zf();let gd=0;function s0(){return gd}function r0(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||i0,r={uid:gd++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new xf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:od(i,s),emitsOptions:Qf(i,s),emit:null,emitted:null,propsDefaults:ht,inheritAttrs:i.inheritAttrs,ctx:ht,data:ht,props:ht,attrs:ht,slots:ht,refs:ht,setupState:ht,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Nm.bind(null,r),n.ce&&n.ce(r),r}let Xt=null;const o0=()=>Xt||_n;let Ho,Rr;{const n=ea(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};Ho=e("__VUE_INSTANCE_SETTERS__",t=>Xt=t),Rr=e("__VUE_SSR_SETTERS__",t=>Cr=t)}const Br=n=>{const e=Xt;return Ho(n),n.scope.on(),()=>{n.scope.off(),Ho(e)}},Oh=()=>{Xt&&Xt.scope.off(),Ho(null)};function _d(n){return n.vnode.shapeFlag&4}let Cr=!1;function a0(n,e=!1,t=!1){e&&Rr(e);const{props:i,children:s}=n.vnode,r=_d(n);Hm(n,i,r,e),Xm(n,s,t||e);const o=r?l0(n,e):void 0;return e&&Rr(!1),o}function l0(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Tm);const{setup:i}=t;if(i){Yn();const s=n.setupContext=i.length>1?h0(n):null,r=Br(n),o=Fr(i,n,0,[n.props,s]),a=uf(o);if(qn(),r(),(a||n.sp)&&!mr(n)&&qf(n),a){if(o.then(Oh,Oh),e)return o.then(l=>{Rr(!0);try{Fh(n,l,e)}finally{Rr(!1)}}).catch(l=>{na(l,n,0,void 0,!0),n.ssrRender=(c,h)=>h("<!---->")});n.asyncDep=o}else Fh(n,o)}else vd(n)}function Fh(n,e,t){qe(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:ct(e)&&(n.setupState=Of(e)),vd(n)}function vd(n,e,t){const i=n.type;n.render||(n.render=i.render||Vn);{const s=Br(n);Yn();try{Am(n)}finally{qn(),s()}}}const xd=Symbol(),c0={get(n,e){return Bt(n,"get",""),e===xd?n:n[e]}};function h0(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,c0),slots:n.slots,emit:n.emit,expose:e}}function oa(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Of(Nf(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in gr)return gr[t](n)},has(e,t){return t in e||t in gr}})):n.proxy}function u0(n){return qe(n)&&"__vccOpts"in n}const an=(n,e)=>em(n,e,Cr),f0="3.5.45";/**
* @vue/runtime-dom v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Cl;const Bh=typeof window<"u"&&window.trustedTypes;if(Bh)try{Cl=Bh.createPolicy("vue",{createHTML:n=>n})}catch{}const yd=Cl?n=>Cl.createHTML(n):n=>n,d0="http://www.w3.org/2000/svg",p0="http://www.w3.org/1998/Math/MathML",oi=typeof document<"u"?document:null,kh=oi&&oi.createElement("template"),m0={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?oi.createElementNS(d0,n):e==="mathml"?oi.createElementNS(p0,n):t?oi.createElement(n,{is:t}):oi.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>oi.createTextNode(n),createComment:n=>oi.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>oi.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{kh.innerHTML=yd(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=kh.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},g0=Symbol("_vtc");function _0(n,e,t){const i=n[g0];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Vo=Symbol("_vod"),Md=Symbol("_vsh"),v0={name:"show",beforeMount(n,{value:e},{transition:t}){n[Vo]=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):Js(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:i}){!e!=!t&&(i?e?(i.beforeEnter(n),Js(n,!0),i.enter(n)):i.leave(n,()=>{Js(n,!1)}):Js(n,e))},beforeUnmount(n,{value:e}){Js(n,e)}};function Js(n,e){n.style.display=e?n[Vo]:"none",n[Md]=!e}const x0=Symbol(""),y0=/(?:^|;)\s*display\s*:/;function M0(n,e,t){const i=n.style,s=Mt(t);let r=!1;if(t&&!s){if(e)if(Mt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&ar(i,a,"")}else for(const o in e)t[o]==null&&ar(i,o,"");for(const o in t){o==="display"&&(r=!0);const a=t[o];a!=null?b0(n,o,!Mt(e)&&e?e[o]:void 0,a)||ar(i,o,a):ar(i,o,"")}}else if(s){if(e!==t){const o=i[x0];o&&(t+=";"+o),i.cssText=t,r=y0.test(t)}}else e&&n.removeAttribute("style");Vo in n&&((!s||e!==t)&&(n[Vo]=r?i.display:""),n[Md]&&(i.display="none"))}const jr=/\s*!important$/;function ar(n,e,t){if(Be(t))t.forEach(i=>ar(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))jr.test(t)?n.setProperty(e,t.replace(jr,""),"important"):n.setProperty(e,t);else{const i=S0(n,e);jr.test(t)?n.setProperty(as(i),t.replace(jr,""),"important"):n[i]=t}}const zh=["Webkit","Moz","ms"],Ra={};function S0(n,e){const t=Ra[e];if(t)return t;let i=Cn(e);if(i!=="filter"&&i in n)return Ra[e]=i;i=pf(i);for(let s=0;s<zh.length;s++){const r=zh[s]+i;if(r in n)return Ra[e]=r}return e}function b0(n,e,t,i){return n.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&Mt(i)&&t===i}const Hh="http://www.w3.org/1999/xlink";function Vh(n,e,t,i,s,r=Ap(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Hh,e.slice(6,e.length)):n.setAttributeNS(Hh,e,t):t==null||r&&!gf(t)?n.removeAttribute(e):n.setAttribute(e,r?"":Xn(t)?String(t):t)}function Gh(n,e,t,i,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?yd(t):t);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=gf(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(s||e)}function Yi(n,e,t,i){n.addEventListener(e,t,i)}function E0(n,e,t,i){n.removeEventListener(e,t,i)}const Wh=Symbol("_vei");function w0(n,e,t,i,s=null){const r=n[Wh]||(n[Wh]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=R0(e);if(i){const c=r[e]=L0(i,s);Yi(n,a,c,l)}else o&&(E0(n,a,o,l),r[e]=void 0)}}const T0=/(Once|Passive|Capture)$/,A0=/^on:?(?:Once|Passive|Capture)$/;function R0(n){let e,t;for(;(t=n.match(T0))&&!A0.test(n);)e||(e={}),n=n.slice(0,n.length-t[1].length),e[t[1].toLowerCase()]=!0;return[n[2]===":"?n.slice(3):as(n.slice(2)),e]}let Ca=0;const C0=Promise.resolve(),P0=()=>Ca||(C0.then(()=>Ca=0),Ca=Date.now());function L0(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;const s=t.value;if(Be(s)){const r=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{r.call(i),i._stopped=!0};const o=s.slice(),a=[i];for(let l=0;l<o.length&&!i._stopped;l++){const c=o[l];c&&Ln(c,e,5,a)}}else Ln(s,e,5,[i])};return t.value=n,t.attached=P0(),t}const Xh=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,I0=(n,e,t,i,s,r)=>{const o=s==="svg";e==="class"?_0(n,i,o):e==="style"?M0(n,t,i):Jo(e)?Zo(e)||w0(n,e,t,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):D0(n,e,i,o))?(Gh(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Vh(n,e,i,o,r,e!=="value")):n._isVueCE&&(U0(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!Mt(i)))?Gh(n,Cn(e),i,r,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Vh(n,e,i,o))};function D0(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Xh(e)&&qe(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Xh(e)&&Mt(t)?!1:e in n}function U0(n,e){const t=n._def.props;if(!t)return!1;const i=Cn(e);return Array.isArray(t)?t.some(s=>Cn(s)===i):Object.keys(t).some(s=>Cn(s)===i)}const Go=n=>{const e=n.props["onUpdate:modelValue"]||!1;return Be(e)?t=>Eo(e,t):e};function N0(n){n.target.composing=!0}function Yh(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ji=Symbol("_assign"),Kr=Symbol("_initialValue");function Pa(n,e,t){return e&&(n=n.trim()),t&&(n=Or(n)),n}const O0={created(n,{modifiers:{lazy:e,trim:t,number:i}},s){n.parentNode&&(n.type==="text"?n[Kr]=n.defaultValue.replace(/[\r\n]/g,""):n.type==="textarea"&&(n[Kr]=n.defaultValue.replace(/\r\n?/g,`
`))),n[Ji]=Go(s);const r=i||s.props&&s.props.type==="number";Yi(n,e?"change":"input",o=>{o.target.composing||n[Ji](Pa(n.value,t,r))}),(t||r)&&Yi(n,"change",()=>{n.value=Pa(n.value,t,r)}),e||(Yi(n,"compositionstart",N0),Yi(n,"compositionend",Yh),Yi(n,"change",Yh))},mounted(n,{value:e,modifiers:{trim:t,number:i}}){const s=e??"",r=n[Kr];delete n[Kr],r!==void 0&&(n.type==="text"||n.type==="textarea")&&n.value!==r?n[Ji](Pa(n.value,t,i)):n.value=s},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:s,number:r}},o){if(n[Ji]=Go(o),n.composing)return;const a=(r||n.type==="number")&&!/^0\d/.test(n.value)?Or(n.value):n.value,l=e??"";if(a===l)return;const c=n.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===n&&n.type!=="range"&&(i&&e===t||s&&n.value.trim()===l)||(n.value=l)}},$r={deep:!0,created(n,{value:e,modifiers:{number:t}},i){n._modelValue=e,Yi(n,"change",()=>{const s=Array.prototype.filter.call(n.options,l=>l.selected).map(l=>t?Or(Wo(l)):Wo(l)),r=n.multiple,o=r?ns(n._modelValue)?new Set(s):s:s[0],a=n._pendingValue=[r,r?Be(o)?s.slice():s:o];try{n[Ji](o)}finally{Dc(()=>{n._pendingValue===a&&(n._pendingValue=void 0)})}}),n[Ji]=Go(i)},mounted(n,{value:e,modifiers:{number:t}}){qh(n,e,t)},beforeUpdate(n,{value:e},t){n._modelValue=e,n[Ji]=Go(t)},updated(n,{value:e,modifiers:{number:t}}){const i=n._pendingValue;n._pendingValue=void 0,(!i||i[0]!==n.multiple||!F0(e,i[1],i[0]))&&qh(n,e,t)}};function F0(n,e,t){if(!t||Be(n))return Pi(n,e);if(ns(n)){if(n.size!==e.length)return!1;for(const i of e)if(!n.has(i))return!1;return!0}return!1}function qh(n,e,t=!1){const i=n.multiple,s=Be(e);if(!(i&&!s&&!ns(e))){for(let r=0,o=n.options.length;r<o;r++){const a=n.options[r],l=Wo(a);if(i)if(s){const c=typeof l;c==="string"||c==="number"?a.selected=e.some(h=>String(h)===String(l)):a.selected=Pp(e,l)>-1}else a.selected=e.has(l)||t&&typeof l=="string"&&e.has(Or(l));else if(Pi(Wo(a),e)){n.selectedIndex!==r&&(n.selectedIndex=r);return}}!i&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function Wo(n){return"_value"in n?n._value:n.value}const B0=At({patchProp:I0},m0);let jh;function k0(){return jh||(jh=qm(B0))}const z0=((...n)=>{const e=k0().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=V0(i);if(!s)return;const r=e._component;!qe(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=t(s,!1,H0(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e});function H0(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function V0(n){return Mt(n)?document.querySelector(n):n}/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const G0=Symbol();var Kh;(function(n){n.direct="direct",n.patchObject="patch object",n.patchFunction="patch function"})(Kh||(Kh={}));function W0(){const n=Lp(!0),e=n.run(()=>Tt({}));let t=[],i=[];const s=Nf({install(r){s._a=r,r.provide(G0,s),r.config.globalProperties.$pinia=s,i.forEach(o=>t.push(o)),i=[]},use(r){return this._a?t.push(r):i.push(r),this},_p:t,_a:null,_e:n,_s:new Map,state:e});return s}const X0="modulepreload",Y0=function(n){return"/game/royale/"+n},$h={},q0=function(e,t,i){let s=Promise.resolve();if(t&&t.length>0){let o=function(c){return Promise.all(c.map(h=>Promise.resolve(h).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=o(t.map(c=>{if(c=Y0(c),c in $h)return;$h[c]=!0;const h=c.endsWith(".css"),f=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${f}`))return;const u=document.createElement("link");if(u.rel=h?"stylesheet":X0,h||(u.as="script"),u.crossOrigin="",u.href=c,l&&u.setAttribute("nonce",l),document.head.appendChild(u),h)return new Promise((d,g)=>{u.addEventListener("load",d),u.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return e().catch(r)})},j0=["hoarder","bomber","charger","coward"],K0={hoarder:"LOOT GOBLIN",bomber:"BAD DELIVERY",charger:"NO BRAKES",coward:"ABSOLUTELY NOT"},Sd={cart:"CART CHARGE",recoil:"RECOIL BOOTS",skates:"SLIPPERY SKATES"},Jh=["cart","recoil","skates"],$0={cart:300,recoil:360,skates:360},Zs={shank:45,axe:90,shotgun:70,smg:60,laser:40,flamethrower:50,body:0},aa={gender:0,skin:2,hair:2,hairColor:0,clothes:0,color:0},kr=["#f4ceae","#dca47a","#b87953","#925739","#603c2f","#3b2b26"],Bs=["#e9bb22","#d43163","#2b9c96","#4d63cb","#d46a27","#b1aca0"],la=["#242028","#653b23","#d7ad52","#dd457b"],Is=[{id:"gas",name:"LAST STOP GAS",tag:"PREMIUM FUEL. SUBSTANDARD DECISIONS."},{id:"rest",name:"REST IN PIECES",tag:"TAKE A BREAK. LEAVE A PART."},{id:"motel",name:"MOTEL NO-TELL",tag:"VACANCIES CREATED DAILY."}],ln=["torso","head","armL","armR","forearmL","forearmR","handL","handR","thighL","thighR","shinL","shinR","footL","footR"],is={torso:{x:0,y:1.65,w:.85,h:.9,hp:120,parent:null},head:{x:0,y:2.45,w:.6,h:.65,hp:34,parent:"torso"},armL:{x:-.57,y:1.85,w:.28,h:.5,hp:30,parent:"torso"},armR:{x:.57,y:1.85,w:.28,h:.5,hp:30,parent:"torso"},forearmL:{x:-.59,y:1.38,w:.25,h:.48,hp:24,parent:"armL"},forearmR:{x:.59,y:1.38,w:.25,h:.48,hp:24,parent:"armR"},handL:{x:-.6,y:1.08,w:.27,h:.25,hp:15,parent:"forearmL"},handR:{x:.6,y:1.08,w:.27,h:.25,hp:15,parent:"forearmR"},thighL:{x:-.25,y:.95,w:.34,h:.55,hp:36,parent:"torso"},thighR:{x:.25,y:.95,w:.34,h:.55,hp:36,parent:"torso"},shinL:{x:-.25,y:.48,w:.29,h:.5,hp:26,parent:"thighL"},shinR:{x:.25,y:.48,w:.29,h:.5,hp:26,parent:"thighR"},footL:{x:-.31,y:.12,w:.45,h:.24,hp:17,parent:"shinL"},footR:{x:.31,y:.12,w:.45,h:.24,hp:17,parent:"shinR"}},qi=(n=aa)=>({move:0,aimX:1,aimY:0,attack:!1,jump:0,grab:0,pickup:0,cycle:0,reload:0,ready:0,rematch:0,venue:0,venueChange:0,look:{...n}});function zc(n){const e=n&&typeof n=="object"?n:{},t={gender:3,skin:kr.length,hair:5,hairColor:la.length,clothes:3,color:Bs.length},i={...aa};for(const s of Object.keys(t)){const r=Number(e[s]);Number.isInteger(r)&&r>=0&&r<t[s]&&(i[s]=r)}return i}function J0(n){const e=n&&typeof n=="object"?n:{},t=qi(zc(e.look));for(const i of["jump","grab","pickup","cycle","reload","ready","rematch","venueChange"]){const s=Number(e[i]);t[i]=Number.isSafeInteger(s)&&s>=0?Math.min(s,1e7):0}return t.move=Math.max(-1,Math.min(1,Number(e.move)||0)),t.aimX=Math.max(-1,Math.min(1,Number(e.aimX)||0)),t.aimY=Math.max(-1,Math.min(1,Number(e.aimY)||0)),t.attack=e.attack===!0,t.venue=Math.max(0,Math.min(2,Math.floor(Number(e.venue)||0))),t}function Ds(n){return+(n.parts.thighL>0&&n.parts.shinL>0)+ +(n.parts.thighR>0&&n.parts.shinR>0)}function Zh(n,e){const t=is[e];return Ds(n)>0?{x:t.x,y:t.y,w:t.w,h:t.h,rotation:0,length:t.h}:e.startsWith("thigh")?{x:t.x*1.5,y:.22,w:t.h,h:t.w,rotation:e.endsWith("L")?Math.PI/2:-Math.PI/2,length:t.h}:{x:t.x,y:Math.max(t.h/2+.04,t.y-1.16),w:t.w,h:t.h,rotation:0,length:t.h}}function pn(n,e){const t=Zh(n,e),i=eg(n);if(!i||n.weapons[n.slot]==="body"&&!n.carrying||!n.parts.armL&&!n.parts.armR)return t;const s=i.endsWith("L")?"L":"R",r=Rs(n);if(e===i)return{...t,x:r.x,y:r.y,rotation:r.angle-Math.PI/2};if(e!==`arm${s}`&&e!==`forearm${s}`)return t;const o=Zh(n,`arm${s}`),a=o.x,l=o.y+.25,c=(a+r.x)/2-r.dy*.13,h=(l+r.y)/2+r.dx*.13,f=e.startsWith("forearm")?{x:c,y:h}:{x:a,y:l},u=e.startsWith("forearm")?r:{x:c,y:h},d=u.x-f.x,g=u.y-f.y,_=Math.hypot(d,g),m=Math.atan2(g,d)-Math.PI/2,p=is[e].w;return{x:(f.x+u.x)/2,y:(f.y+u.y)/2,w:Math.abs(Math.cos(m))*p+Math.abs(Math.sin(m))*_,h:Math.abs(Math.sin(m))*p+Math.abs(Math.cos(m))*_,rotation:m,length:_}}const Z0=1.1;function Q0(n){if(n.weapons[n.slot]!=="shank"||n.attacking<=0)return 0;const e=(10-n.attacking)/10;return .23*Math.max(0,e<.25?e/.25:(1-e)/.75)}function ai(n){return Ds(n)===0?.39:1.55}function Nn(n){return Math.max(...ln.filter(e=>n.parts[e]>0).map(e=>{const t=pn(n,e);return t.y+t.h/2}),.5)}function Rs(n){const e=Math.hypot(n.aimX,n.aimY),t=e>.01?n.aimX/e:n.face,i=e>.01?n.aimY/e:0,s=!n.carrying&&n.weapons[n.slot]==="shank"?.42+Q0(n):.85;return{x:t*s,y:ai(n)+i*s,angle:Math.atan2(i,t),dx:t,dy:i}}function eg(n){const e=n.aimX<0?"handL":"handR",t=e==="handL"?"handR":"handL";return n.parts[e]>0?e:n.parts[t]>0?t:null}function La(n){return[["armL","forearmL","handL"],["armR","forearmR","handR"],["thighL","shinL","footL"],["thighR","shinR","footR"]].filter(e=>e.some(t=>n.parts[t]<=0)).length}function tg(n,e){const t=[];function i(s,r,o,a,l,c,h,f=[],u=0){const d={id:e(),kind:s,x:r,y:o,w:a,h:l,material:c,hp:h,maxHp:h,fuel:c==="fuel"?1:c==="wood"||c==="fabric"?.5:0,burn:0,supports:f,falling:!1,vy:0,exploded:!1,solid:s!=="floor"&&s!=="glass"&&s!=="railing",color:u};return t.push(d),d.id}for(let s=-60;s<64;s+=8)i("floor",s,0,8,.45,"concrete",240);if(n==="gas"){for(const r of[-40,-28,-16])i("pump",r,1.7,1.8,3.4,"fuel",75);const s=[i("post",-46,3,.5,6,"metal",80),i("post",-10,3,.5,6,"metal",80)];for(let r=-43;r<-9;r+=6)i("roof",r,6.4,6,.7,"metal",100,s);for(const r of[-35,-19,27])i("can",r,.6,.7,1.2,"fuel",20);i("car",5,1.1,7,2.2,"fuel",120),i("car",45,1.1,6.5,2.2,"fuel",120),i("counter",23,1,6,2,"wood",70),i("fridge",33,1.8,2.8,3.6,"metal",85),i("glass",23,3.6,7,2.3,"glass",22),i("door",17,1.6,1.5,3.2,"wood",40),i("sign",-51,7.5,5,3,"metal",55,[i("pole",-51,3.6,.5,7.2,"metal",65)]);for(const r of[12,39,40])i("tire",r,.6,1.1,1.2,"fabric",25)}else if(n==="rest"){for(const r of[-42,-15,18])i("table",r,1,5.5,2,"wood",70),i("bench",r+5,.55,3,1.1,"wood",35);for(const r of[-30,8])i("vending",r,1.8,2.4,3.6,"metal",85);for(const r of[-50,-3,35])i("bin",r,.85,1.2,1.7,"metal",45);i("truck",44,1.7,10,3.4,"fuel",180),i("car",-4,1.1,6,2.2,"fuel",120);for(const r of[-49,27])i("sign",r,7,5,2.4,"metal",55,[i("pole",r,3.5,.45,7,"metal",60)]);i("barrier",-24,.6,4,1.2,"concrete",80),i("door",27,1.6,1.6,3.2,"wood",45);const s=[i("post",-5,2.5,.5,5,"metal",65),i("post",8,2.5,.5,5,"metal",65)];i("roof",1.5,5.2,14,.5,"metal",95,s)}else{for(const r of[-45,-23,-1,21,43]){const o=i("post",r-4.5,2.5,.5,5,"wood",60);i("balcony",r,5,11,.6,"concrete",100,[o]),i("railing",r,5.9,10.5,1.2,"metal",30),i("door",r-2,1.7,1.5,3.4,"wood",40),i("glass",r+2,2.6,2.5,1.8,"glass",20),i("mattress",r+3,.65,3.5,1.3,"fabric",40),i("tv",r,.65,1.1,1.3,"glass",25),i("ac",r+3,7,2,1.2,"metal",35,[o]),i("door",r-2,6.8,1.5,3.4,"wood",40)}i("ice",49,1.3,2.8,2.6,"metal",70);const s=i("pole",-53,5,.5,10,"metal",65);i("sign",-53,10,6.5,3.5,"metal",70,[s])}return t}const Ia=.5,ng=.5,Dt=1/60,Da=27,fn=[-57,57,-20,-5,13,20,-9,8],ig=18,sg=["YOU","GUEST","BAD CREDIT","ROOM SERVICE","UNLEADED","NO REFUNDS","LAST CALL","MILD CONCERN"];class bd{constructor(e=1){de(this,"state");this.state={version:1,thrown:[],boosts:[],frame:0,round:0,seed:77191,id:0,phase:"lobby",phaseFrame:0,venue:"gas",actors:[],props:[],shots:[],debris:[],blood:[],fires:[],pickups:[],events:[],winner:null,zoneLeft:-64,zoneRight:64,humans:Math.max(1,Math.min(2,e)),venueNonce:0,eventSeq:0},this.makeActors(),this.makeWorld()}next(){return++this.state.id}random(){let e=this.state.seed|0;return e^=e<<13,e^=e>>>17,e^=e<<5,this.state.seed=e>>>0,(e>>>0)/4294967296}makeActors(){this.state.actors=[];for(let e=0;e<8;e++){const t={...aa,gender:e%3,skin:e%6,hair:e%5,color:e%6},i=qi(t);this.state.actors.push({id:e,name:e<this.state.humans?this.state.humans===1?"YOU":`PLAYER ${e+1}`:sg[e],human:e<this.state.humans,pendingSpawn:e>=this.state.humans,personality:e>=this.state.humans?j0[(e-this.state.humans)%4]:void 0,look:t,x:fn[e],y:1,vx:0,vy:0,face:e%2?-1:1,hp:100,parts:Object.fromEntries(ln.map(s=>[s,is[s].hp])),weapons:["shank"],durability:{...Zs},slot:0,specialAmmo:{laser:0,flamethrower:0},ammo:0,magazines:{shotgun:6,smg:30},reserve:90,cooldown:0,reloading:0,grounded:!1,ready:!1,last:i,drift:0,driftAt:0,death:null,deathFrame:-1,bleedOutAt:null,bleedOwner:-1,aimX:e%2?-1:1,aimY:0,attacking:0,kills:0})}}openingSpawnProtected(e){const t=this.state.actors.filter(i=>!i.human&&i.hp>0);return this.state.actors.filter(i=>i.human&&i.hp>0).some(i=>{const s=[...t].sort((r,o)=>Math.abs(fn[r.id]-fn[i.id])-Math.abs(fn[o.id]-fn[i.id]))[0];return s!==void 0&&Math.abs(e-fn[s.id])<ig})}makeWorld(){this.state.thrown=[],this.state.boosts=[],delete this.state.chaosAt,delete this.state.nextMajorAt,delete this.state.major,this.state.props=tg(this.state.venue,()=>this.next()),this.state.shots=[],this.state.debris=[],this.state.blood=[],this.state.fires=[],this.state.pickups=[];for(const i of this.state.actors.filter(s=>s.human)){const s=fn[i.id]+(fn[i.id]<0?3:-3),r=this.next();for(let o=0;o<2;o++)this.state.props.push({id:o===0?r:this.next(),kind:"crate",trainingFor:i.id,x:s,y:.225+.55+o*1.1,w:1.5,h:1.1,hp:18,maxHp:18,material:"wood",fuel:.5,burn:0,supports:o===1?[r]:[],falling:!1,vy:0,exploded:!1,solid:!0,color:o})}const e=[-1,-.5,0,.5,1];let t=0;for(let i=0;i<9;i++){const s=-52+i*13,r=this.openingSpawnProtected(s)?e[t++%e.length]:s,o=["axe","shotgun","smg"][i%3];this.state.pickups.push({id:this.next(),x:r,y:1,weapon:o,hp:Zs[o]})}for(const i of this.state.actors.filter(s=>s.human)){const s=fn[i.id]+(fn[i.id]<0?-1:1);this.state.pickups.push({id:this.next(),x:s,y:1,weapon:"smg",hp:Zs.smg,reservedFor:i.id,reservedUntil:600})}}releaseEnemies(){const e=this.state.actors.some(i=>i.pendingSpawn)&&this.state.chaosAt===void 0,t=this.state.actors.filter(i=>i.human&&i.hp>0);for(const i of this.state.actors.filter(s=>s.pendingSpawn)){const s=o=>Math.min(...t.map(a=>Math.abs(a.x-o)));if(s(i.x)<34){const o=Array.from({length:121},(a,l)=>l-60);o.sort((a,l)=>s(l)-s(a)||Math.abs(a-fn[i.id])-Math.abs(l-fn[i.id])),i.x=o[0]}const r=this.floorAt(i.x,100,-100);i.y=r>-50?r:1,i.vx=i.vy=0,i.pendingSpawn=!1}if(e){this.state.chaosAt=this.state.frame,this.state.nextMajorAt=this.state.frame+1200;for(const i of t)for(let s=0;s<3;s++){const r=Math.max(-61,Math.min(61,i.x+(i.x<0?1:-1)*(5+s*6))),o=this.floorAt(r,100,-100);o>-50&&this.state.boosts.push({id:this.next(),x:r,y:o+.6,kind:Jh[s],hp:20,expires:this.state.frame+1800})}}}snapshot(){return JSON.parse(JSON.stringify(this.state))}restore(e){if(e.version!==1)throw new Error("Incompatible Royale state");this.state=JSON.parse(JSON.stringify(e))}event(e,t,i,s=-1,r={}){this.state.events.push({id:`${this.state.round}:${this.state.frame}:${++this.state.eventSeq}`,frame:this.state.frame,kind:e,x:t,y:i,actor:s,...r}),this.state.events.length>180&&this.state.events.shift()}startRound(){const e=this.state.actors.map(s=>({...s.look})),t=this.state.actors.map(s=>s.last),i=this.state.round+1;this.makeActors(),this.state.actors.forEach((s,r)=>{s.look=e[r],s.last=t[r],s.y=this.floorAt(s.x,100,-1)>-50?this.floorAt(s.x,100,-1):1}),this.makeWorld(),this.state.round=i,this.state.phase="match",this.state.phaseFrame=0,this.state.winner=null,this.state.zoneLeft=-64,this.state.zoneRight=64}lobby(e){for(const s of this.state.actors.filter(r=>r.human)){const r=e[s.id]??qi(s.look);JSON.stringify(s.look)!==JSON.stringify(r.look)&&(s.look={...r.look},s.ready=!1),r.ready!==s.last.ready&&(s.ready=!s.ready),s.last={...r}}const t=e[0];t&&t.venueChange!==this.state.venueNonce&&(this.state.venueNonce=t.venueChange,this.state.venue=Is[t.venue].id,this.makeWorld(),this.state.actors.forEach(s=>s.ready=!1));const i=this.state.actors.filter(s=>s.human).every(s=>s.ready);this.state.phase==="lobby"&&i?(this.state.phase="countdown",this.state.phaseFrame=0):this.state.phase==="countdown"&&!i&&(this.state.phase="lobby",this.state.phaseFrame=0),this.state.phase==="countdown"&&this.state.phaseFrame>=180&&this.startRound()}rematch(e){if(this.state.actors.filter(t=>t.human).every(t=>{var i;return(((i=e[t.id])==null?void 0:i.rematch)??0)>t.last.rematch})){this.state.venue=Is[(Is.findIndex(i=>i.id===this.state.venue)+1)%3].id,this.state.phase="lobby",this.state.phaseFrame=0;const t=this.state.actors.map(i=>({...i.look}));this.makeActors(),this.state.actors.forEach((i,s)=>{i.look=t[s],i.human&&(i.last=e[i.id]),i.ready=!1}),this.makeWorld()}}weapon(e){return!e.parts.armL&&!e.parts.armR?"body":e.weapons[e.slot]??"shank"}handling(e){return(e.parts.handL>0?1:0)+(e.parts.handR>0?1:0)}movement(e){const t=Ds(e),i=+(e.parts.footL>0)+ +(e.parts.footR>0);return Math.max(.24,(t===2?1:t===1?.65:.29)*(i===2?1:i===1?.85:.7))}detach(e,t,i=-1){const s=e.parts.head>0,r=La(e),o=Object.fromEntries(ln.map(c=>[c,pn(e,c)])),a=c=>{if(e.parts[c]<=0)return;e.parts[c]=0;const h=o[c];this.state.debris.length<120&&this.state.debris.push({id:this.next(),x:e.x+h.x,y:e.y+h.y,vx:(this.random()-.5)*12,vy:3+this.random()*5,life:900,part:c,look:{...e.look},color:0,hp:14,w:h.w,h:h.h}),this.event("detach",e.x+h.x,e.y+h.y,e.id,{part:c,severed:c===t&&t!=="torso"});for(const f of ln)is[f].parent===c&&a(f)};a(t);const l=La(e);if(l===1&&r!==1&&e.hp>0&&e.parts.head>0?(e.distressAt=this.state.frame,e.distressCount=0):(l!==1||e.hp<=0||e.parts.head<=0)&&(delete e.distressAt,delete e.distressCount),e.hp>0&&!e.pendingSpawn&&e.parts.torso>0){const c=Ds(e)===0,h=t==="head"&&s&&e.parts.head<=0,f=c?360:h?600:null;f!==null&&(e.bleedOutAt===null||this.state.frame+f<e.bleedOutAt)&&(e.bleedOutAt=this.state.frame+f,e.bleedOwner=i,e.bleedCause=c?"bleedout":"head_bleedout",e.bleedRate=c?100/360*(e.human?Ia:1):e.hp/600)}if(!e.parts.armL&&!e.parts.armR){for(const c of e.weapons)c!=="shank"&&c!=="body"&&e.durability[c]>0&&this.state.pickups.push({id:this.next(),x:e.x,y:e.y+.5,weapon:c,hp:e.durability[c],charges:c==="laser"||c==="flamethrower"?e.specialAmmo[c]:void 0});e.weapons=["body"],e.slot=0}}incomingDamage(e,t,i){const s=this.state.actors[i];return t*(e.human&&s&&!s.human?ng:1)}damage(e,t,i,s,r=-1){if(e.pendingSpawn||e.hp<=0||e.parts[t]<=0)return;i=this.incomingDamage(e,i,r);const o=!["fire","fuel_fire","zone"].includes(s),a=e.human?Ia:1,l=Math.min(e.parts[t],i*(t==="torso"?(o?.45:1)*a:1));if(t==="torso"&&o){const h=e.id%2===0?"L":"R",f=h==="L"?"R":"L",d=[`thigh${h}`,`arm${h}`,`thigh${f}`,`arm${f}`,"head"].find(g=>e.parts[g]>0);if(d){const g=i*.8;e.parts[d]<=g?this.detach(e,d,r):e.parts[d]-=g}}e.parts[t]<=l?this.detach(e,t,r):e.parts[t]-=l;const c=t==="torso"?l:l*.08*a;e.hp=Math.max(0,e.hp-c),this.event("hit",e.x+pn(e,t).x,e.y+pn(e,t).y,e.id,{part:t}),(e.hp<=0||e.parts.torso<=0)&&this.kill(e,s,r)}kill(e,t,i=-1){if(!e.death){if(e.carrying&&this.throwObject(e,!0),!e.human&&!e.pendingSpawn&&this.state.chaosAt!==void 0&&this.state.boosts.length<16){const s=this.floorAt(e.x,e.y+.5,-100);s>-50&&this.state.boosts.push({id:this.next(),x:e.x,y:s+.6,kind:Jh[e.id%3],hp:20,expires:this.state.frame+900})}e.hp=0,e.death=t,e.deathFrame=this.state.frame,(t==="bleedout"||t==="head_bleedout")&&this.bloodSplatter(e),this.event("death",e.x,e.y+1,e.id,{cause:t}),i>=0&&i!==e.id&&this.state.actors[i].kills++,this.detach(e,"torso")}}bloodSplatter(e){const t=this.floorAt(e.x,e.y+.3,-100);if(t<=-50)return;const i=this.state.props.find(s=>s.hp>0&&!s.falling&&Math.abs(s.y+s.h/2-t)<.001&&Math.abs(e.x-s.x)<s.w/2+.25);i&&(this.state.blood.push({id:this.next(),x:e.x,y:t+.018,surface:i.id}),this.state.blood.length>8&&this.state.blood.shift())}hitPart(e,t,i){if(e.pendingSpawn)return null;let s=null,r=1/0;for(const o of ln){if(e.parts[o]<=0)continue;const a=pn(e,o),l=Math.abs(t-e.x-a.x),c=Math.abs(i-e.y-a.y);l<a.w/2+.14&&c<a.h/2+.14&&l+c<r&&(r=l+c,s=o)}return s}floorAt(e,t,i){let s=-100;for(const r of this.state.props){if(r.hp<=0||r.falling||!(r.kind==="floor"||r.kind==="crate"||r.kind==="roof"||r.kind==="balcony"||r.kind==="table"||r.kind==="car"||r.kind==="truck"||r.kind==="barrier"))continue;const o=r.y+r.h/2;Math.abs(e-r.x)<r.w/2+.25&&t>=o-.2&&i<=o&&o>s&&(s=o)}return s}damagePickup(e,t){e.hp-=t,e.hp<=0&&(this.event("break",e.x,e.y),this.state.debris.length<120&&this.state.debris.push({id:this.next(),x:e.x,y:e.y,vx:(this.random()-.5)*5,vy:3,life:450,part:null,look:null,color:4,hp:8,w:.4,h:.15}),this.state.pickups=this.state.pickups.filter(i=>i.id!==e.id))}damageBoost(e,t){e.hp-=t,e.hp<=0&&(this.event("break",e.x,e.y),this.state.boosts=this.state.boosts.filter(i=>i.id!==e.id))}damageWeapon(e,t,i=-1){if(e.pendingSpawn)return;if(t=this.incomingDamage(e,t,i),e.carrying){if(e.carrying.hp-=t,e.carrying.hp<=0){const r=e.carrying.kind;delete e.carrying,this.event("break",e.x,e.y+1,i),r==="can"&&this.state.fires.length<32&&this.state.fires.push({id:this.next(),x:e.x,y:e.y+.5,radius:1.5,until:this.state.frame+180,owner:i,cause:"fire"})}return}const s=this.weapon(e);s!=="body"&&(e.durability[s]=Math.max(0,e.durability[s]-t),e.durability[s]||(this.event("break",e.x,e.y+ai(e),e.id),e.weapons=e.weapons.filter(r=>r!==s),e.weapons.length||(e.weapons=["body"]),e.slot=0,e.reloading=0))}canPickup(e,t){return!e.pendingSpawn&&(t.expires===void 0||t.expires>this.state.frame)&&(t.reservedFor===void 0||t.reservedFor===e.id||this.state.phaseFrame>=(t.reservedUntil??0))}pickup(e){if(!e.pendingSpawn&&this.state.chaosAt!==void 0){const i=this.state.boosts.filter(s=>s.expires>this.state.frame&&Math.hypot(s.x-e.x,s.y-e.y-.5)<2.5).sort((s,r)=>Math.abs(s.x-e.x)-Math.abs(r.x-e.x))[0];if(i){e.boost={kind:i.kind,until:this.state.frame+$0[i.kind]},this.state.boosts=this.state.boosts.filter(s=>s.id!==i.id),this.event("pickup",e.x,e.y+1,e.id);return}}if(!e.parts.armL&&!e.parts.armR)return;const t=this.state.pickups.filter(i=>this.canPickup(e,i)&&Math.hypot(i.x-e.x,i.y-e.y-1)<3).sort((i,s)=>Math.abs(i.x-e.x)-Math.abs(s.x-e.x))[0];if(t){if(!e.weapons.includes(t.weapon))if(e.weapons.length<2)e.weapons.push(t.weapon);else{const i=e.weapons[1];e.weapons[1]=t.weapon,this.state.pickups.push({id:this.next(),x:e.x-1,y:e.y+.6,weapon:i,hp:e.durability[i],charges:i==="laser"||i==="flamethrower"?e.specialAmmo[i]:void 0})}(t.weapon==="laser"||t.weapon==="flamethrower")&&(e.specialAmmo[t.weapon]=t.charges??(t.weapon==="laser"?2:24)),e.durability[t.weapon]=t.hp,e.slot=Math.max(0,e.weapons.indexOf(t.weapon)),e.reloading=0,this.state.pickups=this.state.pickups.filter(i=>i.id!==t.id),e.ammo=this.clip(e),this.event("pickup",e.x,e.y+1,e.id)}}clip(e){const t=this.weapon(e);return t==="laser"||t==="flamethrower"?e.specialAmmo[t]:t==="shotgun"||t==="smg"?e.magazines[t]:0}reload(e){const t=this.weapon(e);if(e.reloading||e.reserve<=0||!(t==="smg"||t==="shotgun"))return;const i=t==="smg"?30:6;e.magazines[t]>=i||(this.event("reload",e.x,e.y+1,e.id),e.reloading=Math.round((t==="smg"?110:40)*(this.handling(e)<2?1.5:1)))}attack(e){if(e.pendingSpawn||e.cooldown>0)return;if(e.carrying){this.throwObject(e);return}const t=this.weapon(e),i=t==="shotgun"||t==="smg",s=Rs(e);if(t==="laser"||t==="flamethrower"){if(e.specialAmmo[t]<=0){this.spendSpecial(e,t);return}if(t==="flamethrower"&&this.state.shots.length>117)return;e.specialAmmo[t]--,e.cooldown=t==="laser"?24:6;const r=e.x+s.x+s.dx*.4,o=e.y+s.y+s.dy*.4;if(t==="laser"){let a=r,l=o,c=!1;for(let h=0;h<=160&&!c;h++){a=r+s.dx*h*.15,l=o+s.dy*h*.15;for(const f of this.state.props)if(f.hp>0&&Math.abs(a-f.x)<f.w/2&&Math.abs(l-f.y)<f.h/2){this.damageProp(f,65,e.id),c=!0;break}if(!c)for(const f of this.state.actors){if(f.id===e.id||f.hp<=0||f.pendingSpawn)continue;const u=this.hitPart(f,a,l);if(u){this.damage(f,u,50,"laser",e.id),c=!0;break}}}this.recoilBoost(e,s.dx,s.dy,!1),this.event("shot",r,o,e.id,{weapon:t,endX:a,endY:l})}else{for(let a=-1;a<=1;a++){const l=s.angle+a*.13;this.state.shots.push({id:this.next(),owner:e.id,x:r,y:o,vx:Math.cos(l)*20,vy:Math.sin(l)*20,life:15,damage:1,weapon:t})}this.event("shot",r,o,e.id,{weapon:t})}this.spendSpecial(e,t),e.ammo=this.clip(e);return}if(t==="axe"){if(this.state.shots.length>=120)return;this.state.shots.push({id:this.next(),owner:e.id,x:e.x+s.x+s.dx*.35,y:e.y+s.y+s.dy*.35,vx:s.dx*18,vy:s.dy*18,life:22,damage:30,weapon:"axe",durability:e.durability.axe}),this.event("shot",e.x+s.x,e.y+s.y,e.id,{weapon:t}),e.weapons=e.weapons.filter(r=>r!=="axe"),e.weapons.length||(e.weapons=["body"]),e.slot=0,e.cooldown=43,e.attacking=10,e.reloading=0;return}if(i){if(e.reloading&&!(t==="shotgun"&&e.magazines.shotgun>0))return;if(e.magazines[t]<=0){this.reload(e);return}e.reloading=0,e.magazines[t]--,e.cooldown=t==="smg"?6:45;const r=Math.atan2(e.aimY,e.aimX),o=t==="shotgun"?7:1;for(let a=0;a<o&&this.state.shots.length<120;a++){const l=(this.random()-.5)*(t==="shotgun"?.38:.09)+(e.parts.head?0:(this.random()-.5)*.65),c=r+l;this.state.shots.push({id:this.next(),owner:e.id,x:e.x+s.x+s.dx*.35,y:e.y+s.y+s.dy*.35,vx:Math.cos(c)*48,vy:Math.sin(c)*48,life:t==="shotgun"?20:60,damage:t==="shotgun"?9:8,weapon:t})}this.recoilBoost(e,s.dx,s.dy,t==="shotgun"),this.event("shot",e.x,e.y+ai(e),e.id,{weapon:t})}else{e.cooldown=t==="body"?32:18,e.attacking=10;const r=(t==="shank"?Z0:1.1)*(this.handling(e)<2?.85:1),o=t==="body"?8:13;if(this.event("melee",e.x,e.y+ai(e),e.id,{weapon:t}),t==="shank"){let a=!1;for(let l=1;l<=12&&!a;l++){const c=r*l/12,h=e.x+s.dx*c,f=e.y+ai(e)+s.dy*c;for(const u of this.state.props)if(u.hp>0&&Math.abs(h-u.x)<u.w/2&&Math.abs(f-u.y)<u.h/2){this.damageProp(u,o*.7,e.id),a=!0;break}if(a)break;for(const u of this.state.actors){if(u.id===e.id||u.hp<=0||u.pendingSpawn||Math.hypot(u.x-e.x,u.y-e.y)>r+.25)continue;const d=this.hitPart(u,h,f);if(d){this.damage(u,d,o,"shank",e.id),a=!0;break}}}return}for(const a of this.state.actors){if(a.id===e.id||a.hp<=0||a.pendingSpawn||Math.abs(a.y-e.y)>2.3)continue;const l=a.x-e.x;if(Math.sign(l)!==e.face||Math.abs(l)>r)continue;const c=e.y+ai(e)+e.aimY*1.5,h=ln.filter(f=>a.parts[f]>0).sort((f,u)=>Math.abs(a.y+pn(a,f).y-c)-Math.abs(a.y+pn(a,u).y-c));h[0]&&this.damage(a,h[0],o,t,e.id)}for(const a of this.state.props)if(a.hp>0&&Math.abs(a.x-e.x)<r+a.w/2&&Math.abs(a.y-e.y-ai(e)-e.aimY*1.1)<a.h/2+1){const l=a.x-e.x;(Math.sign(l)===e.face||Math.abs(l)<.6)&&this.damageProp(a,o*.7,e.id)}}e.ammo=this.clip(e)}spendSpecial(e,t){e.specialAmmo[t]>0||(e.weapons=e.weapons.filter(i=>i!==t),e.weapons.length||(e.weapons=["body"]),e.slot=0)}dropLoot(e){if(this.state.pickups.length>=32)return;const t=this.floorAt(e.x,e.y+e.h/2+.1,-100);if(t<=-50)return;const i=e.trainingFor!==void 0||this.state.phaseFrame<600&&this.openingSpawnProtected(e.x)?"shank":this.random()<.5?"laser":"flamethrower";this.state.pickups.push({id:this.next(),x:e.x,y:t+.55,weapon:i,hp:Zs[i],charges:i==="laser"?2:i==="flamethrower"?24:void 0,expires:this.state.frame+600})}damageProp(e,t,i=-1){if(!(e.hp<=0)&&(e.hp=Math.max(0,e.hp-t),e.material==="fuel"&&e.hp<e.maxHp*.5&&(e.burn=Math.max(e.burn,1),this.ignite(e,this.state.frame+360,"fuel_fire",i)),e.hp<=0)){this.event("break",e.x,e.y,i,{prop:e.kind}),e.kind==="pump"&&!this.state.fires.some(s=>s.id===e.id)&&this.state.fires.push({id:e.id,x:e.x,y:Math.max(.4,e.y-e.h/2+.5),radius:3,until:this.state.frame+480,owner:i,cause:"fuel_fire"});for(let s=0;s<4&&this.state.debris.length<120;s++)this.state.debris.push({id:this.next(),x:e.x+(this.random()-.5)*e.w,y:e.y,vx:(this.random()-.5)*8,vy:2+this.random()*5,life:600,part:null,look:null,color:e.material==="glass"?2:e.material==="metal"?4:5,hp:12,w:Math.min(1,e.w/4),h:Math.min(.7,e.h/3)});if(e.material==="fuel"&&!e.exploded){e.exploded=!0,this.event("explosion",e.x,e.y,i);const s=e.kind==="can"?4:7;for(const r of this.state.actors)if(r.hp>0&&!r.pendingSpawn){const o=Math.hypot(r.x-e.x,r.y+1-e.y);o<s&&(this.damage(r,"torso",Math.max(12,55*(1-o/s)),"blast",i),r.vx+=(r.x>e.x?1:-1)*10,r.vy+=5)}for(const r of[...this.state.pickups])Math.hypot(r.x-e.x,r.y-e.y)<s&&this.damagePickup(r,50);for(const r of this.state.props)r!==e&&r.hp>0&&Math.hypot(r.x-e.x,r.y-e.y)<s&&(r.fuel>0&&(r.burn=1,this.ignite(r,this.state.frame+240,"fuel_fire",i)),r.hp=Math.max(1,r.hp-22))}this.dropLoot(e)}}ignite(e,t,i,s,r=0){var a;if(r>2||e.onFire&&e.onFire.until>this.state.frame)return;const o=this.state.actors.find(l=>l===e);o&&(o.hp<=0||o.pendingSpawn)||((a=this.state.major)==null?void 0:a.kind)==="foam"&&this.state.major.started&&this.state.frame<this.state.major.until&&Math.abs(e.x-this.state.major.x)<8||(this.event("ignite",e.x,e.y+(o?Nn(o)*.5:0),(o==null?void 0:o.id)??-1),e.onFire={until:Math.min(t,this.state.frame+240),cause:i,owner:s,depth:r})}burning(){const e=this.state,t=e.frame;e.fires=e.fires.filter(r=>r.until>t);for(const r of e.props)r.hp>0&&r.burn&&!r.onFire&&this.ignite(r,t+240,r.material==="fuel"?"fuel_fire":"fire",-1);const i=[...e.actors.filter(r=>r.hp>0&&!r.pendingSpawn).map(r=>({object:r,x:r.x,y:r.y+Nn(r)/2,w:.9,h:Nn(r)})),...e.props.filter(r=>r.hp>0).map(r=>({object:r,x:r.x,y:r.y,w:r.w,h:r.h})),...e.debris.filter(r=>r.hp>0).map(r=>({object:r,x:r.x,y:r.y,w:r.w,h:r.h})),...e.pickups.filter(r=>r.hp>0).map(r=>({object:r,x:r.x,y:r.y,w:.6,h:.4})),...e.boosts.filter(r=>r.hp>0).map(r=>({object:r,x:r.x,y:r.y,w:.8,h:.6}))],s=[...e.fires.map(r=>({...r,object:null})),...i.filter(r=>r.object.onFire&&r.object.onFire.until>t&&(r.object.onFire.depth??0)<2&&(!("material"in r.object)||["wood","fabric","fuel"].includes(r.object.material))).map(r=>({...r.object.onFire,object:r.object,x:r.x,y:r.y,radius:.75}))];for(const r of s)for(const o of i){if(r.object===o.object)continue;const a=Math.max(0,Math.abs(o.x-r.x)-o.w/2),l=Math.max(0,Math.abs(o.y-r.y)-o.h/2);Math.hypot(a,l)<=r.radius&&this.ignite(o.object,r.until,r.cause,r.owner,(r.depth??0)+1)}for(const r of i){const o=r.object.onFire;o&&o.until<=t&&(delete r.object.onFire,"burn"in r.object&&(r.object.burn=0))}if(t%15===0){for(const r of e.actors)r.hp>0&&!r.pendingSpawn&&r.onFire&&this.damage(r,"torso",2,r.onFire.cause,r.onFire.owner);for(const r of e.props)r.hp>0&&r.onFire&&this.damageProp(r,3,r.onFire.owner);for(const r of e.debris)r.hp>0&&r.onFire&&(r.hp-=2);for(const r of[...e.pickups])r.hp>0&&r.onFire&&this.damagePickup(r,2);for(const r of[...e.boosts])r.hp>0&&r.onFire&&this.damageBoost(r,2)}}grabOrThrow(e){if(this.state.chaosAt===void 0||e.pendingSpawn||e.hp<=0||(e.stunUntil??0)>this.state.frame||!e.parts.armL&&!e.parts.armR)return;if(e.carrying){this.throwObject(e);return}const t=this.state.props.filter(i=>i.hp>0&&!i.falling&&["tire","tv","can"].includes(i.kind)&&Math.hypot(i.x-e.x,i.y-e.y-1)<2.8).sort((i,s)=>Math.abs(i.x-e.x)-Math.abs(s.x-e.x))[0];if(t)e.carrying={kind:t.kind,hp:t.hp},this.state.props=this.state.props.filter(i=>i.id!==t.id);else{const i=this.state.debris.find(s=>s.part&&s.look&&Math.hypot(s.x-e.x,s.y-e.y-1)<2.8);i&&(e.carrying={kind:"limb",hp:i.hp,part:i.part,look:i.look},this.state.debris=this.state.debris.filter(s=>s.id!==i.id))}e.carrying&&this.event("pickup",e.x,e.y+1,e.id)}throwObject(e,t=!1){if(!e.carrying||this.state.thrown.length>=24)return;const i=Rs(e),s=e.carrying;delete e.carrying,this.state.thrown.push({...s,id:this.next(),owner:e.id,x:e.x+i.x,y:e.y+i.y,vx:t?0:i.dx*18,vy:t?0:i.dy*18+4,angle:0,life:180,bounces:0,hit:[]}),e.cooldown=24,this.event("throw",e.x,e.y+1,e.id)}recoilBoost(e,t,i,s){var r;((r=e.boost)==null?void 0:r.kind)!=="recoil"||e.boost.until<=this.state.frame||(e.vx-=t*(s?8:3),e.vy=Math.max(e.vy,s?9:3)-i*(s?5:2),e.grounded=!1)}thrownObjects(){const e=this.state;for(const t of e.thrown){t.life--;const i=t.y;if(t.vy-=24*Dt,t.x+=t.vx*Dt,t.y+=t.vy*Dt,t.angle+=t.vx*Dt*.8,t.hp<=0&&(t.life=0),t.kind==="can"&&t.life>0&&e.frame%12===0&&e.fires.length<32&&e.fires.push({id:this.next(),x:t.x,y:t.y,radius:.65,until:e.frame+90,owner:t.owner,cause:"fire"}),t.life>0&&(Math.abs(t.vx)>1||Math.abs(t.vy)>1))for(const o of e.actors)o.id===t.owner||o.hp<=0||o.pendingSpawn||t.hit.includes(o.id)||Math.abs(o.x-t.x)<.75&&t.y>o.y&&t.y<o.y+Nn(o)&&(t.hit.push(o.id),this.damage(o,"torso",t.kind==="tv"?22:16,"thrown",t.owner),t.kind==="tv"&&(o.stunUntil=e.frame+45),o.vx+=Math.sign(t.vx)*6,t.kind!=="tire"&&(t.life=0));let s=!1;for(const o of e.props)if(o.hp>0&&!["floor","roof","balcony","tire"].includes(o.kind)&&Math.abs(t.x-o.x)<o.w/2+.2&&Math.abs(t.y-o.y)<o.h/2+.2){this.damageProp(o,12,t.owner),t.vx*=-.65,t.bounces++,s=!0,t.kind!=="tire"&&(t.life=0);break}const r=this.floorAt(t.x,i-.25,t.y-.25);t.vy<0&&r>-50&&(t.y=r+.25,t.kind==="tire"&&t.bounces<3&&t.hp>0?(t.vy=Math.max(3,Math.abs(t.vy)*.65),t.vx*=.85,t.bounces++):t.life=0),s&&t.bounces>6&&(t.life=0),(t.y<-15||Math.abs(t.x)>70)&&(t.life=0),t.life<=0&&(t.kind==="can"&&t.y>-10?(e.fires.length<32&&e.fires.push({id:this.next(),x:t.x,y:t.y,radius:1.5,until:e.frame+180,owner:t.owner,cause:"fire"}),this.event("explosion",t.x,t.y,t.owner)):t.kind==="tire"&&t.hp>0&&r>-50?e.props.push({id:this.next(),kind:"tire",x:t.x,y:r+.6,w:1.1,h:1.2,hp:t.hp,maxHp:25,material:"fabric",fuel:.5,burn:0,supports:[],falling:!1,vy:0,exploded:!1,solid:!0,color:0}):e.debris.length<120&&t.y>-10&&e.debris.push({id:this.next(),x:t.x,y:t.y,vx:t.vx*.2,vy:1,life:450,part:t.part??null,look:t.look??null,color:3,hp:Math.max(1,t.hp),w:.5,h:.3}))}e.thrown=e.thrown.filter(t=>t.life>0)}majorEvents(){var i;const e=this.state;if(e.chaosAt===void 0)return;let t=e.major;if(!t){if(e.frame<(e.nextMajorAt??1/0))return;const s=e.actors.find(o=>o.human&&o.hp>0),r=Math.max(-48,Math.min(48,((s==null?void 0:s.x)??0)+6));this.event("warning",r,1),e.major={kind:e.venue==="rest"?"truck":e.venue==="motel"?"collapse":"foam",x:r,activeAt:e.frame+120,until:e.frame+600,started:!1};return}if(e.frame>=t.until){if(t.kind==="truck"){const s=e.props.find(r=>r.id===t.propId);s&&s.hp>0&&this.damageProp(s,s.hp)}delete e.major,e.nextMajorAt=e.frame+1800;return}if(!(e.frame<t.activeAt)){if(!t.started&&(t.started=!0,t.kind!=="foam")){const s=this.next(),r=t.kind==="truck";e.props.push({id:s,kind:r?"truck":"ac",x:r?-64:t.x,y:r?1.7:11,w:r?7:2,h:r?2.6:1.3,hp:r?90:35,maxHp:r?90:35,material:"metal",fuel:0,burn:0,supports:[],falling:!r,vy:r?0:-1,exploded:!1,solid:!0,color:0}),t.propId=s}if(t.kind==="foam"){e.fires=e.fires.filter(s=>Math.abs(s.x-t.x)>8);for(const s of e.actors)Math.abs(s.x-t.x)<8&&delete s.onFire;for(const s of e.props)Math.abs(s.x-t.x)<8&&(delete s.onFire,s.burn=0);for(const s of[...e.pickups,...e.debris,...e.boosts])Math.abs(s.x-t.x)<8&&delete s.onFire}else if(t.kind==="truck"){const s=e.props.find(o=>o.id===t.propId);if(!s||s.hp<=0){t.until=e.frame;return}s.x+=16*Dt,t.x=s.x;const r=e.props.find(o=>o.kind==="floor"&&o.hp>0&&Math.abs(o.x-s.x)<o.w/2);s.y=(r?r.y+r.h/2:0)+1.3;for(const o of e.actors)o.hp>0&&!o.pendingSpawn&&!((i=s.hitActors)!=null&&i.includes(o.id))&&Math.abs(o.x-s.x)<4&&o.y<s.y+1.3&&o.y+Nn(o)>s.y-1.3&&((s.hitActors??(s.hitActors=[])).push(o.id),this.damage(o,"torso",32,"traffic"),o.vx=12,o.vy=5)}}}bot(e){if(e.pendingSpawn)return qi(e.look);const t=qi(e.look),i=this.state.actors.filter(R=>R.hp>0&&!R.pendingSpawn&&R.id!==e.id),s=this.state.chaosAt!==void 0&&this.state.frame-this.state.chaosAt<720,r=i.filter(R=>R.human),o=(s&&r.length?r:i).sort((R,P)=>Math.abs(R.x-e.x)-Math.abs(P.x-e.x)),a=o[0];if(!a)return t;const l=this.weapon(e),c=l==="smg"||l==="shotgun"||l==="laser"||l==="flamethrower",h=l==="axe",f=Math.abs(a.x-e.x),u=this.state.chaosAt===void 0?void 0:e.personality,d=this.state.pickups.filter(R=>this.canPickup(e,R)&&R.weapon!=="shank"&&Math.abs(R.x-e.x)<(u==="hoarder"?22:14)).sort((R,P)=>Math.abs(R.x-e.x)-Math.abs(P.x-e.x))[0];(e.weapons.length<2||u==="hoarder")&&d?(t.move=Math.sign(d.x-e.x),Math.abs(d.x-e.x)<2&&(t.pickup=e.last.pickup+1)):t.move=f>(l==="flamethrower"?3:c?9:h?4:1.4)?Math.sign(a.x-e.x):c&&f<4?-Math.sign(a.x-e.x):0,e.x<this.state.zoneLeft+3&&(t.move=1),e.x>this.state.zoneRight-3&&(t.move=-1);const g=ln.filter(R=>a.parts[R]>0)[(Math.floor(this.state.frame/47)+e.id)%ln.filter(R=>a.parts[R]>0).length]??"torso",_=a.x+pn(a,g).x-e.x,m=a.y+pn(a,g).y-(e.y+ai(e)),p=Math.max(.1,Math.hypot(_,m));if(t.aimX=_/p,t.aimY=m/p,t.attack=f<(l==="flamethrower"?5:c?23:h?6:2.3)&&Math.abs(a.y-e.y)<(c?9:2.3),u==="charger"&&(t.move=f>1.1?Math.sign(a.x-e.x):0),u==="bomber")if(e.carrying)t.move=f>10?Math.sign(a.x-e.x):f<4?-Math.sign(a.x-e.x):0,t.attack=f<13&&e.cooldown===0;else{const R=this.state.props.filter(P=>P.hp>0&&["can","tv","tire"].includes(P.kind)&&Math.abs(P.x-e.x)<14).sort((P,F)=>+(F.kind==="can")-+(P.kind==="can")||Math.abs(P.x-e.x)-Math.abs(F.x-e.x))[0];R&&(t.move=Math.sign(R.x-e.x),Math.abs(R.x-e.x)<2&&(t.grab=e.last.grab+1))}u==="coward"&&e.onFire&&(t.move=-Math.sign(a.x-e.x),t.attack=!1,e.grounded&&this.state.frame%45===0&&(t.jump=e.last.jump+1)),this.state.boosts.find(R=>Math.abs(R.x-e.x)<2)&&!e.boost&&(t.pickup=e.last.pickup+1);const M=this.state.props.find(R=>R.hp>0&&R.solid&&R.y-R.h/2<e.y+2.7&&R.y+R.h/2>e.y+.4&&Math.abs(R.x-e.x-t.move*1.4)<R.w/2+.6),b=this.state.fires.some(R=>Math.abs(R.x-e.x-t.move*2)<R.radius+1)||this.state.props.some(R=>R.hp>0&&(R.burn||R.onFire)&&Math.abs(R.x-e.x-t.move*2)<R.w/2+1),O=this.floorAt(e.x+t.move*2,e.y+.5,e.y-1)<-50;return e.grounded&&(M||b||O||(this.state.frame+e.id*37)%113===0)&&(t.jump=e.last.jump+1),M&&(t.attack=!0,this.state.frame%20<12&&(t.aimX=t.move,t.aimY=0)),(l==="smg"||l==="shotgun")&&this.clip(e)===0&&(e.reserve>0?t.reload=e.last.reload+1:t.cycle=e.last.cycle+1),t}move(e,t){var u,d;if(e.pendingSpawn)return;if(e.bleedOutAt!==null){if(this.state.frame>=e.bleedOutAt){this.kill(e,e.bleedCause??"bleedout",e.bleedOwner);return}e.hp=Math.max(.01,e.hp-(e.bleedRate??100/360*(e.human?Ia:1)))}if(e.distressAt!==void 0&&this.state.frame>=e.distressAt&&La(e)===1&&e.parts.head>0){const g=e.distressCount??0;this.event(g%2===0?"scream":"cry",e.x,e.y+pn(e,"head").y,e.id),e.distressCount=g+1,e.distressAt=this.state.frame+150+(e.id*31+g*17)%90}if(e.cooldown=Math.max(0,e.cooldown-1),e.attacking=Math.max(0,e.attacking-1),e.reloading>0&&(e.reloading--,!e.reloading)){const g=this.weapon(e);if(g==="smg"){const _=Math.min(e.reserve,30-e.magazines.smg);e.magazines.smg+=_,e.reserve-=_}else g==="shotgun"&&e.reserve>0&&(e.magazines.shotgun++,e.reserve--,e.magazines.shotgun<6&&this.reload(e))}t.cycle!==e.last.cycle&&(this.event("swap",e.x,e.y+1,e.id),e.slot=(e.slot+1)%e.weapons.length,e.reloading=0),t.grab!==e.last.grab&&this.grabOrThrow(e),t.pickup!==e.last.pickup&&this.pickup(e),t.reload!==e.last.reload&&this.reload(e),!e.parts.head&&this.state.frame>=e.driftAt&&(e.drift=(this.random()*2-1)*5.5,e.driftAt=this.state.frame+15+Math.floor(this.random()*15)),e.boost&&e.boost.until<=this.state.frame&&delete e.boost;const i=(u=e.boost)==null?void 0:u.kind,s=(e.stunUntil??0)>this.state.frame,r=i==="skates"||((d=this.state.major)==null?void 0:d.kind)==="foam"&&this.state.major.started&&Math.abs(e.x-this.state.major.x)<8,o=7*this.movement(e)*(i==="cart"?2.1:i==="skates"?1.65:1),a=s?0:t.move,l=s?0:e.parts.head?a*o:a*o*.25+e.drift;e.vx+=((r&&a===0?e.vx*.985:l)-e.vx)*(r?.055:i==="cart"?.12:.2),Math.abs(t.aimX)>.05&&(e.face=Math.sign(t.aimX)),e.aimX=t.aimX,e.aimY=t.aimY,t.jump!==e.last.jump&&e.grounded&&Ds(e)>0&&!s&&(this.event("jump",e.x,e.y,e.id),e.vy=14*Math.max(.4,this.movement(e)),e.grounded=!1),e.vy-=Da*Dt;const c=e.x,h=e.y;e.x=Math.max(-63,Math.min(63,e.x+e.vx*Dt)),e.y+=e.vy*Dt,e.grounded=!1;const f=this.floorAt(e.x,h,e.y);e.vy<=0&&f>-50&&(e.vy<-5&&this.event("land",e.x,f,e.id),e.y=f,e.vy=0,e.grounded=!0);for(const g of this.state.props)g.hp<=0||!g.solid||g.falling||g.kind==="floor"||g.kind==="roof"||g.kind==="balcony"||Math.abs(e.x-g.x)<g.w/2+.4&&e.y+Nn(e)>g.y-g.h/2+.1&&e.y<g.y+g.h/2-.1&&Math.abs(c-g.x)>=g.w/2+.35&&(i==="cart"&&Math.abs(e.vx)>5&&this.state.frame>=(e.ramAt??0)&&(this.damageProp(g,45,e.id),e.ramAt=this.state.frame+30),g.hp>0&&(e.x=c,e.vx=i==="cart"?-e.vx*.25:0));if(e.carrying&&!e.parts.armL&&!e.parts.armR&&this.throwObject(e,!0),i==="cart"&&Math.abs(e.vx)>5&&this.state.frame>=(e.ramAt??0)){const g=this.state.actors.find(_=>_.id!==e.id&&_.hp>0&&!_.pendingSpawn&&Math.abs(_.x-e.x)<1.3&&Math.abs(_.y-e.y)<1.5);g&&(this.damage(g,"torso",18,"body",e.id),g.vx=Math.sign(e.vx)*12,g.vy=5,e.ramAt=this.state.frame+45)}t.attack&&!s&&this.attack(e),e.ammo=this.clip(e),e.y<-12&&this.kill(e,"fall"),this.state.phaseFrame%30===0&&(e.x<this.state.zoneLeft||e.x>this.state.zoneRight)&&this.damage(e,"torso",this.state.phaseFrame>10800?20:5,"zone"),this.state.phaseFrame>14400&&this.state.phaseFrame%60===0&&this.damage(e,"torso",8,"zone"),e.last={...t}}step(e=[]){var a,l;const t=this.state;t.frame++,t.phaseFrame++,t.eventSeq=0;const i=e.map(J0);if(t.phase==="lobby"||t.phase==="countdown"){this.lobby(i);return}if(t.phase==="results"){this.rematch(i);return}if(t.actors.some(c=>c.pendingSpawn)){const c=t.actors.filter(f=>f.human&&f.hp>0);t.props.some(f=>f.trainingFor!==void 0&&f.hp>0&&c.some(u=>u.id===f.trainingFor))?t.phaseFrame=0:this.releaseEnemies()}this.majorEvents();const s=t.phaseFrame/60,r=Math.max(0,s-30)*.27;t.zoneLeft=Math.min(-1,-64+r),t.zoneRight=Math.max(1,64-r);for(const c of t.actors)c.hp>0&&!c.pendingSpawn&&this.move(c,c.human?i[c.id]??qi(c.look):this.bot(c));for(const c of t.shots){c.life--,c.weapon==="axe"&&(c.vy-=18*Dt);const h=c.x,f=c.y;c.x+=c.vx*Dt,c.y+=c.vy*Dt;const u=Math.max(1,Math.ceil(Math.hypot(c.x-h,c.y-f)/.18));for(let d=1;d<=u&&c.life>0;d++){const g=h+(c.x-h)*d/u,_=f+(c.y-f)*d/u;let m=!1;for(const p of t.actors)if(p.hp>0&&!p.pendingSpawn&&p.id!==c.owner){if(c.weapon!=="flamethrower"&&(p.carrying||this.weapon(p)!=="body")&&Math.abs(g-p.x-Rs(p).x)<.35&&Math.abs(_-p.y-Rs(p).y)<.16){this.damageWeapon(p,c.damage,c.owner),m=!0;break}const T=this.hitPart(p,g,_);if(T){this.damage(p,T,c.damage,c.weapon==="flamethrower"?"fire":c.weapon,c.owner),c.weapon==="flamethrower"&&this.ignite(p,t.frame+240,"fire",c.owner),m=!0;break}}if(!m){for(const p of t.props)if(p.hp>0&&Math.abs(g-p.x)<p.w/2&&Math.abs(_-p.y)<p.h/2){this.damageProp(p,c.damage*(c.weapon==="axe"?1.6:.65),c.owner),c.weapon==="flamethrower"&&p.hp>0&&this.ignite(p,t.frame+240,"fire",c.owner),m=!0;break}}if(!m){for(const p of[...t.boosts])if(Math.abs(g-p.x)<.5&&Math.abs(_-p.y)<.4){this.damageBoost(p,c.damage),c.weapon==="flamethrower"&&this.ignite(p,t.frame+240,"fire",c.owner),m=!0;break}}if(!m){for(const p of t.thrown)if(Math.abs(g-p.x)<.5&&Math.abs(_-p.y)<.5){p.hp-=c.damage,m=!0;break}}if(!m){for(const p of[...t.pickups])if(Math.abs(g-p.x)<.6&&Math.abs(_-p.y)<.35){this.damagePickup(p,c.damage),c.weapon==="flamethrower"&&this.ignite(p,t.frame+240,"fire",c.owner),m=!0;break}}if(!m){for(const p of t.debris)if(p.hp>0&&Math.abs(g-p.x)<p.w/2&&Math.abs(_-p.y)<p.h/2){p.hp-=c.damage,c.weapon==="flamethrower"&&this.ignite(p,t.frame+240,"fire",c.owner),p.vx+=c.vx*.1,p.settled=!1,p.groundTicks=0,m=!0;break}}m&&(c.life=0,c.x=g,c.y=_)}}for(const c of t.shots)if(c.weapon==="axe"&&c.life<=0){const h=this.floorAt(c.x,c.y+.5,-100);h>-50&&c.y>-12&&this.state.pickups.push({id:this.next(),x:c.x,y:h+.55,weapon:"axe",hp:c.durability??Zs.axe})}t.shots=t.shots.filter(c=>c.life>0),this.thrownObjects(),t.boosts=t.boosts.filter(c=>c.expires>t.frame);for(const c of t.props)if(!(c.hp<=0)&&(c.supports.some(h=>{var f;return((f=t.props.find(u=>u.id===h))==null?void 0:f.hp)===0})&&(c.falling=!0),c.falling)){const h=c.y;c.vy-=Da*Dt,c.y+=c.vy*Dt;for(const f of t.actors)f.hp>0&&!f.pendingSpawn&&!((a=c.hitActors)!=null&&a.includes(f.id))&&Math.abs(f.x-c.x)<c.w/2+.5&&f.y+Nn(f)>c.y-c.h/2&&f.y<h+c.h/2&&((c.hitActors??(c.hitActors=[])).push(f.id),this.damage(f,"torso",32,c.kind==="roof"?"canopy":"collapse"));if(c.y-c.h/2<.4){c.y=.4+c.h/2,c.falling=!1,this.damageProp(c,c.maxHp);continue}}this.burning(),t.pickups=t.pickups.filter(c=>c.expires===void 0||c.expires>t.frame);for(const c of t.debris){c.life--;const h=c.y-c.h/2;if(c.settled){const d=this.floorAt(c.x,h+.05,h-.08);if(d>-50&&Math.abs(d-h)<.1)continue;c.settled=!1,c.groundTicks=0}c.vy-=Da*Dt;const f=h;c.x+=c.vx*Dt,c.y+=c.vy*Dt,c.angle=(c.angle??0)+c.vx*.15*Dt;const u=this.floorAt(c.x,f,c.y-c.h/2);c.vy<0&&u>-50?(c.y=u+c.h/2,c.vy=Math.abs(c.vy)<1?0:c.vy*-.2,c.vx*=.85,c.groundTicks=Math.abs(c.vy)<.2&&Math.abs(c.vx)<.15?(c.groundTicks??0)+1:0,c.groundTicks>=45&&(c.settled=!0,c.vx=0,c.vy=0)):c.groundTicks=0}t.debris=t.debris.filter(c=>c.life>0&&c.hp>0&&c.y>-15);const o=t.actors.filter(c=>c.hp>0);o.length<=1&&(t.phase="results",t.phaseFrame=0,t.winner=((l=o[0])==null?void 0:l.id)??null)}}const Xo={thrown:{title:"Someone weaponized the furniture.",hint:"Red-marked flying objects hurt. TVs also stun; gas cans leave fire."},traffic:{title:"The truck did not yield.",hint:"The red lane warning gives you two seconds. Get above or out of its path."},laser:{title:"The warranty did not cover laser surgery.",hint:"Loot lasers have two shots. Break line of sight before the second."},head_bleedout:{title:"You quit while you were a head.",hint:"Head loss gives you ten seconds before bleeding out. Your remaining aim and movement are unreliable."},bleedout:{title:"You have run out of legs. And blood.",hint:"Losing both legs starts a six-second bleed-out. Make your last shots count."},fuel_fire:{title:"Turns out you are flammable.",hint:"Fuel leaks are not a shortcut. Break the chain and leave the flames."},fire:{title:"Your outfit was not fireproof.",hint:"Burning fabric spreads fire. Find an unlit route."},canopy:{title:"The roof was not emotionally supportive.",hint:"Broken canopy posts mean incoming metal. Move away from the shadow."},collapse:{title:"Structural integrity was more of a suggestion.",hint:"Watch the supports. Loose objects land with consequences."},shotgun:{title:"You brought personal space to a shotgun fight.",hint:"Leave the pellet cone. Reloading opponents are easier company."},axe:{title:"You have been downsized.",hint:"Dodge the chop, then punish the recovery."},shank:{title:"That was a very local problem.",hint:"Stay outside the blade’s reach. Backpedal and use cover."},smg:{title:"Standing still simplified their paperwork.",hint:"Break line of sight and avoid trading sustained bursts."},blast:{title:"The explosion had a wider social circle.",hint:"Fuel containers detonate once. Make sure you are elsewhere."},fall:{title:"Gravity remains undefeated.",hint:"Floor panels can disappear. Jump to intact ground."},zone:{title:"The map asked you to leave.",hint:"Watch the yellow boundary and move before the next contraction."},body:{title:"You lost an argument with a torso.",hint:"Even unarmed opponents can body-check. Keep a little distance."}};class rg{constructor(){de(this,"seen",new Set);try{for(const e of JSON.parse(localStorage.getItem("royale.advice")??"[]"))Object.hasOwn(Xo,e)&&this.seen.add(e)}catch{}}discover(e){if(this.seen.has(e))return null;this.seen.add(e);try{localStorage.setItem("royale.advice",JSON.stringify([...this.seen]))}catch{}return Xo[e]}}class og{constructor(){de(this,"seen",new Set)}collect(e,t){const i=e.filter(s=>s.frame<=t&&!this.seen.has(s.id));for(const s of i)this.seen.add(s.id);if(this.seen.size>6e3){const s=new Set(e.map(r=>r.id));this.seen=new Set([...this.seen].filter(r=>s.has(r)))}return i}reset(){this.seen.clear()}}function ag(n,e){if(!Number.isFinite(n)||!Number.isFinite(e))return{gain:0,pan:0};const t=Math.max(0,Math.abs(n)-.85,Math.abs(e)-.85);return{gain:1/(1+12*t+24*t*t),pan:Math.max(-.92,Math.min(.92,n*.8))}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Hc="169",lg=0,Qh=1,cg=2,Vc=1,hg=2,ri=3,Ii=0,tn=1,en=2,Ri=0,Us=1,eu=2,tu=3,nu=4,ug=5,ji=100,fg=101,dg=102,pg=103,mg=104,gg=200,_g=201,vg=202,xg=203,Pl=204,Ll=205,yg=206,Mg=207,Sg=208,bg=209,Eg=210,wg=211,Tg=212,Ag=213,Rg=214,Il=0,Dl=1,Ul=2,ks=3,Nl=4,Ol=5,Fl=6,Bl=7,Ed=0,Cg=1,Pg=2,Ci=0,Lg=1,Ig=2,Dg=3,wd=4,Ug=5,Ng=6,Og=7,Td=300,zs=301,Hs=302,kl=303,zl=304,ca=306,Hl=1e3,Zi=1001,Vl=1002,Yt=1003,Fg=1004,Jr=1005,wn=1006,Ua=1007,Qi=1008,di=1009,Ad=1010,Rd=1011,Pr=1012,Gc=1013,ss=1014,ui=1015,zr=1016,Wc=1017,Xc=1018,Vs=1020,Cd=35902,Pd=1021,Ld=1022,An=1023,Id=1024,Dd=1025,Ns=1026,Gs=1027,Ud=1028,Yc=1029,Nd=1030,qc=1031,jc=1033,Ao=33776,Ro=33777,Co=33778,Po=33779,Gl=35840,Wl=35841,Xl=35842,Yl=35843,ql=36196,jl=37492,Kl=37496,$l=37808,Jl=37809,Zl=37810,Ql=37811,ec=37812,tc=37813,nc=37814,ic=37815,sc=37816,rc=37817,oc=37818,ac=37819,lc=37820,cc=37821,Lo=36492,hc=36494,uc=36495,Od=36283,fc=36284,dc=36285,pc=36286,Bg=3200,kg=3201,Fd=0,zg=1,wi="",Qt="srgb",Ui="srgb-linear",Kc="display-p3",ha="display-p3-linear",Yo="linear",gt="srgb",qo="rec709",jo="p3",fs=7680,iu=519,Hg=512,Vg=513,Gg=514,Bd=515,Wg=516,Xg=517,Yg=518,qg=519,su=35044,Na=35048,ru="300 es",fi=2e3,Ko=2001;class Ys{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Oa=Math.PI/180,mc=180/Math.PI;function qs(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ot[n&255]+Ot[n>>8&255]+Ot[n>>16&255]+Ot[n>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[t&63|128]+Ot[t>>8&255]+"-"+Ot[t>>16&255]+Ot[t>>24&255]+Ot[i&255]+Ot[i>>8&255]+Ot[i>>16&255]+Ot[i>>24&255]).toLowerCase()}function kt(n,e,t){return Math.max(e,Math.min(t,n))}function jg(n,e){return(n%e+e)%e}function Fa(n,e,t){return(1-t)*n+t*e}function Qs(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Jt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Re{constructor(e=0,t=0){Re.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ke{constructor(e,t,i,s,r,o,a,l,c){Ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],f=i[7],u=i[2],d=i[5],g=i[8],_=s[0],m=s[3],p=s[6],T=s[1],M=s[4],b=s[7],O=s[2],R=s[5],P=s[8];return r[0]=o*_+a*T+l*O,r[3]=o*m+a*M+l*R,r[6]=o*p+a*b+l*P,r[1]=c*_+h*T+f*O,r[4]=c*m+h*M+f*R,r[7]=c*p+h*b+f*P,r[2]=u*_+d*T+g*O,r[5]=u*m+d*M+g*R,r[8]=u*p+d*b+g*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=h*o-a*c,u=a*l-h*r,d=c*r-o*l,g=t*f+i*u+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(s*c-h*i)*_,e[2]=(a*i-s*o)*_,e[3]=u*_,e[4]=(h*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=d*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ba.makeScale(e,t)),this}rotate(e){return this.premultiply(Ba.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ba.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ba=new Ke;function kd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function $o(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Kg(){const n=$o("canvas");return n.style.display="block",n}const ou={};function Io(n){n in ou||(ou[n]=!0,console.warn(n))}function $g(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function Jg(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Zg(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const au=new Ke().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),lu=new Ke().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),er={[Ui]:{transfer:Yo,primaries:qo,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[Qt]:{transfer:gt,primaries:qo,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[ha]:{transfer:Yo,primaries:jo,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(lu),fromReference:n=>n.applyMatrix3(au)},[Kc]:{transfer:gt,primaries:jo,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(lu),fromReference:n=>n.applyMatrix3(au).convertLinearToSRGB()}},Qg=new Set([Ui,ha]),rt={enabled:!0,_workingColorSpace:Ui,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Qg.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=er[e].toReference,s=er[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return er[n].primaries},getTransfer:function(n){return n===wi?Yo:er[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(er[e].luminanceCoefficients)}};function Os(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ka(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ds;class e_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ds===void 0&&(ds=$o("canvas")),ds.width=e.width,ds.height=e.height;const i=ds.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ds}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=$o("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Os(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Os(t[i]/255)*255):t[i]=Os(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let t_=0;class zd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:t_++}),this.uuid=qs(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(za(s[o].image)):r.push(za(s[o]))}else r=za(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function za(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?e_.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let n_=0;class qt extends Ys{constructor(e=qt.DEFAULT_IMAGE,t=qt.DEFAULT_MAPPING,i=Zi,s=Zi,r=wn,o=Qi,a=An,l=di,c=qt.DEFAULT_ANISOTROPY,h=wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:n_++}),this.uuid=qs(),this.name="",this.source=new zd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Re(0,0),this.repeat=new Re(1,1),this.center=new Re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Td)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Hl:e.x=e.x-Math.floor(e.x);break;case Zi:e.x=e.x<0?0:1;break;case Vl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Hl:e.y=e.y-Math.floor(e.y);break;case Zi:e.y=e.y<0?0:1;break;case Vl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}qt.DEFAULT_IMAGE=null;qt.DEFAULT_MAPPING=Td;qt.DEFAULT_ANISOTROPY=1;class lt{constructor(e=0,t=0,i=0,s=1){lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,b=(d+1)/2,O=(p+1)/2,R=(h+u)/4,P=(f+_)/4,F=(g+m)/4;return M>b&&M>O?M<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(M),s=R/i,r=P/i):b>O?b<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),i=R/s,r=F/s):O<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(O),i=P/r,s=F/r),this.set(i,s,r,t),this}let T=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(u-h)*(u-h));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(f-_)/T,this.z=(u-h)/T,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class i_ extends Ys{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new qt(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new zd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class rs extends i_{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Hd extends qt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class s_ extends qt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hr{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],f=i[s+3];const u=r[o+0],d=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f;return}if(a===1){e[t+0]=u,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(f!==_||l!==u||c!==d||h!==g){let m=1-a;const p=l*u+c*d+h*g+f*_,T=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const O=Math.sqrt(M),R=Math.atan2(O,p*T);m=Math.sin(m*R)/O,a=Math.sin(a*R)/O}const b=a*T;if(l=l*m+u*b,c=c*m+d*b,h=h*m+g*b,f=f*m+_*b,m===1-a){const O=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=O,c*=O,h*=O,f*=O}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],f=r[o],u=r[o+1],d=r[o+2],g=r[o+3];return e[t]=a*g+h*f+l*d-c*u,e[t+1]=l*g+h*u+c*f-a*d,e[t+2]=c*g+h*d+a*u-l*f,e[t+3]=h*g-a*f-l*u-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),f=a(r/2),u=l(i/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=u*h*f+c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f-u*d*g;break;case"YXZ":this._x=u*h*f+c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f+u*d*g;break;case"ZXY":this._x=u*h*f-c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f-u*d*g;break;case"ZYX":this._x=u*h*f-c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f+u*d*g;break;case"YZX":this._x=u*h*f+c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f-u*d*g;break;case"XZY":this._x=u*h*f-c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f+u*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],f=t[10],u=i+a+f;if(u>0){const d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(i>a&&i>f){const d=2*Math.sqrt(1+i-a-f);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-i-f);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+f-i-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(kt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*i+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),f=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=o*f+this._w*u,this._x=i*f+this._x*u,this._y=s*f+this._y*u,this._z=r*f+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,i=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(cu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(cu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),f=2*(r*i-o*t);return this.x=t+l*c+o*f-a*h,this.y=i+l*h+a*c-r*f,this.z=s+l*f+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ha.copy(this).projectOnVector(e),this.sub(Ha)}reflect(e){return this.sub(Ha.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ha=new D,cu=new Hr;class Vr{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Mn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Mn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Mn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Mn):Mn.fromBufferAttribute(r,o),Mn.applyMatrix4(e.matrixWorld),this.expandByPoint(Mn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Zr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Zr.copy(i.boundingBox)),Zr.applyMatrix4(e.matrixWorld),this.union(Zr)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Mn),Mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(tr),Qr.subVectors(this.max,tr),ps.subVectors(e.a,tr),ms.subVectors(e.b,tr),gs.subVectors(e.c,tr),gi.subVectors(ms,ps),_i.subVectors(gs,ms),Bi.subVectors(ps,gs);let t=[0,-gi.z,gi.y,0,-_i.z,_i.y,0,-Bi.z,Bi.y,gi.z,0,-gi.x,_i.z,0,-_i.x,Bi.z,0,-Bi.x,-gi.y,gi.x,0,-_i.y,_i.x,0,-Bi.y,Bi.x,0];return!Va(t,ps,ms,gs,Qr)||(t=[1,0,0,0,1,0,0,0,1],!Va(t,ps,ms,gs,Qr))?!1:(eo.crossVectors(gi,_i),t=[eo.x,eo.y,eo.z],Va(t,ps,ms,gs,Qr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ei),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ei=[new D,new D,new D,new D,new D,new D,new D,new D],Mn=new D,Zr=new Vr,ps=new D,ms=new D,gs=new D,gi=new D,_i=new D,Bi=new D,tr=new D,Qr=new D,eo=new D,ki=new D;function Va(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){ki.fromArray(n,r);const a=s.x*Math.abs(ki.x)+s.y*Math.abs(ki.y)+s.z*Math.abs(ki.z),l=e.dot(ki),c=t.dot(ki),h=i.dot(ki);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const r_=new Vr,nr=new D,Ga=new D;class ua{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):r_.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;nr.subVectors(e,this.center);const t=nr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(nr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ga.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(nr.copy(e.center).add(Ga)),this.expandByPoint(nr.copy(e.center).sub(Ga))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ti=new D,Wa=new D,to=new D,vi=new D,Xa=new D,no=new D,Ya=new D;class $c{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ti)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ti.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ti.copy(this.origin).addScaledVector(this.direction,t),ti.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Wa.copy(e).add(t).multiplyScalar(.5),to.copy(t).sub(e).normalize(),vi.copy(this.origin).sub(Wa);const r=e.distanceTo(t)*.5,o=-this.direction.dot(to),a=vi.dot(this.direction),l=-vi.dot(to),c=vi.lengthSq(),h=Math.abs(1-o*o);let f,u,d,g;if(h>0)if(f=o*l-a,u=o*a-l,g=r*h,f>=0)if(u>=-g)if(u<=g){const _=1/h;f*=_,u*=_,d=f*(f+o*u+2*a)+u*(o*f+u+2*l)+c}else u=r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;else u<=-g?(f=Math.max(0,-(-o*r+a)),u=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c):u<=g?(f=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(f=Math.max(0,-(o*r+a)),u=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c);else u=o>0?-r:r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Wa).addScaledVector(to,u),d}intersectSphere(e,t){ti.subVectors(e.center,this.origin);const i=ti.dot(this.direction),s=ti.dot(ti)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-u.z)*f,l=(e.max.z-u.z)*f):(a=(e.max.z-u.z)*f,l=(e.min.z-u.z)*f),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,ti)!==null}intersectTriangle(e,t,i,s,r){Xa.subVectors(t,e),no.subVectors(i,e),Ya.crossVectors(Xa,no);let o=this.direction.dot(Ya),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;vi.subVectors(this.origin,e);const l=a*this.direction.dot(no.crossVectors(vi,no));if(l<0)return null;const c=a*this.direction.dot(Xa.cross(vi));if(c<0||l+c>o)return null;const h=-a*vi.dot(Ya);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class dt{constructor(e,t,i,s,r,o,a,l,c,h,f,u,d,g,_,m){dt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,f,u,d,g,_,m)}set(e,t,i,s,r,o,a,l,c,h,f,u,d,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=f,p[14]=u,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new dt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/_s.setFromMatrixColumn(e,0).length(),r=1/_s.setFromMatrixColumn(e,1).length(),o=1/_s.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const u=o*h,d=o*f,g=a*h,_=a*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=d+g*c,t[5]=u-_*c,t[9]=-a*l,t[2]=_-u*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const u=l*h,d=l*f,g=c*h,_=c*f;t[0]=u+_*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*f,t[5]=o*h,t[9]=-a,t[2]=d*a-g,t[6]=_+u*a,t[10]=o*l}else if(e.order==="ZXY"){const u=l*h,d=l*f,g=c*h,_=c*f;t[0]=u-_*a,t[4]=-o*f,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*h,t[9]=_-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const u=o*h,d=o*f,g=a*h,_=a*f;t[0]=l*h,t[4]=g*c-d,t[8]=u*c+_,t[1]=l*f,t[5]=_*c+u,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const u=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=_-u*f,t[8]=g*f+d,t[1]=f,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=d*f+g,t[10]=u-_*f}else if(e.order==="XZY"){const u=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=u*f+_,t[5]=o*h,t[9]=d*f-g,t[2]=g*f-d,t[6]=a*h,t[10]=_*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(o_,e,a_)}lookAt(e,t,i){const s=this.elements;return rn.subVectors(e,t),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),xi.crossVectors(i,rn),xi.lengthSq()===0&&(Math.abs(i.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),xi.crossVectors(i,rn)),xi.normalize(),io.crossVectors(rn,xi),s[0]=xi.x,s[4]=io.x,s[8]=rn.x,s[1]=xi.y,s[5]=io.y,s[9]=rn.y,s[2]=xi.z,s[6]=io.z,s[10]=rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],f=i[5],u=i[9],d=i[13],g=i[2],_=i[6],m=i[10],p=i[14],T=i[3],M=i[7],b=i[11],O=i[15],R=s[0],P=s[4],F=s[8],ie=s[12],x=s[1],E=s[5],W=s[9],X=s[13],Z=s[2],ce=s[6],H=s[10],se=s[14],V=s[3],ve=s[7],Se=s[11],be=s[15];return r[0]=o*R+a*x+l*Z+c*V,r[4]=o*P+a*E+l*ce+c*ve,r[8]=o*F+a*W+l*H+c*Se,r[12]=o*ie+a*X+l*se+c*be,r[1]=h*R+f*x+u*Z+d*V,r[5]=h*P+f*E+u*ce+d*ve,r[9]=h*F+f*W+u*H+d*Se,r[13]=h*ie+f*X+u*se+d*be,r[2]=g*R+_*x+m*Z+p*V,r[6]=g*P+_*E+m*ce+p*ve,r[10]=g*F+_*W+m*H+p*Se,r[14]=g*ie+_*X+m*se+p*be,r[3]=T*R+M*x+b*Z+O*V,r[7]=T*P+M*E+b*ce+O*ve,r[11]=T*F+M*W+b*H+O*Se,r[15]=T*ie+M*X+b*se+O*be,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],f=e[6],u=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*l*f-s*c*f-r*a*u+i*c*u+s*a*d-i*l*d)+_*(+t*l*d-t*c*u+r*o*u-s*o*d+s*c*h-r*l*h)+m*(+t*c*f-t*a*d-r*o*f+i*o*d+r*a*h-i*c*h)+p*(-s*a*h-t*l*f+t*a*u+s*o*f-i*o*u+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=e[9],u=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],T=f*m*c-_*u*c+_*l*d-a*m*d-f*l*p+a*u*p,M=g*u*c-h*m*c-g*l*d+o*m*d+h*l*p-o*u*p,b=h*_*c-g*f*c+g*a*d-o*_*d-h*a*p+o*f*p,O=g*f*l-h*_*l-g*a*u+o*_*u+h*a*m-o*f*m,R=t*T+i*M+s*b+r*O;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/R;return e[0]=T*P,e[1]=(_*u*r-f*m*r-_*s*d+i*m*d+f*s*p-i*u*p)*P,e[2]=(a*m*r-_*l*r+_*s*c-i*m*c-a*s*p+i*l*p)*P,e[3]=(f*l*r-a*u*r-f*s*c+i*u*c+a*s*d-i*l*d)*P,e[4]=M*P,e[5]=(h*m*r-g*u*r+g*s*d-t*m*d-h*s*p+t*u*p)*P,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*p-t*l*p)*P,e[7]=(o*u*r-h*l*r+h*s*c-t*u*c-o*s*d+t*l*d)*P,e[8]=b*P,e[9]=(g*f*r-h*_*r-g*i*d+t*_*d+h*i*p-t*f*p)*P,e[10]=(o*_*r-g*a*r+g*i*c-t*_*c-o*i*p+t*a*p)*P,e[11]=(h*a*r-o*f*r-h*i*c+t*f*c+o*i*d-t*a*d)*P,e[12]=O*P,e[13]=(h*_*s-g*f*s+g*i*u-t*_*u-h*i*m+t*f*m)*P,e[14]=(g*a*s-o*_*s-g*i*l+t*_*l+o*i*m-t*a*m)*P,e[15]=(o*f*s-h*a*s+h*i*l-t*f*l-o*i*u+t*a*u)*P,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,f=a+a,u=r*c,d=r*h,g=r*f,_=o*h,m=o*f,p=a*f,T=l*c,M=l*h,b=l*f,O=i.x,R=i.y,P=i.z;return s[0]=(1-(_+p))*O,s[1]=(d+b)*O,s[2]=(g-M)*O,s[3]=0,s[4]=(d-b)*R,s[5]=(1-(u+p))*R,s[6]=(m+T)*R,s[7]=0,s[8]=(g+M)*P,s[9]=(m-T)*P,s[10]=(1-(u+_))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=_s.set(s[0],s[1],s[2]).length();const o=_s.set(s[4],s[5],s[6]).length(),a=_s.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Sn.copy(this);const c=1/r,h=1/o,f=1/a;return Sn.elements[0]*=c,Sn.elements[1]*=c,Sn.elements[2]*=c,Sn.elements[4]*=h,Sn.elements[5]*=h,Sn.elements[6]*=h,Sn.elements[8]*=f,Sn.elements[9]*=f,Sn.elements[10]*=f,t.setFromRotationMatrix(Sn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=fi){const l=this.elements,c=2*r/(t-e),h=2*r/(i-s),f=(t+e)/(t-e),u=(i+s)/(i-s);let d,g;if(a===fi)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Ko)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=fi){const l=this.elements,c=1/(t-e),h=1/(i-s),f=1/(o-r),u=(t+e)*c,d=(i+s)*h;let g,_;if(a===fi)g=(o+r)*f,_=-2*f;else if(a===Ko)g=r*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const _s=new D,Sn=new dt,o_=new D(0,0,0),a_=new D(1,1,1),xi=new D,io=new D,rn=new D,hu=new dt,uu=new Hr;class Kn{constructor(e=0,t=0,i=0,s=Kn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(kt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-kt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return hu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return uu.setFromEuler(this),this.setFromQuaternion(uu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Kn.DEFAULT_ORDER="XYZ";class Jc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let l_=0;const fu=new D,vs=new Hr,ni=new dt,so=new D,ir=new D,c_=new D,h_=new Hr,du=new D(1,0,0),pu=new D(0,1,0),mu=new D(0,0,1),gu={type:"added"},u_={type:"removed"},xs={type:"childadded",child:null},qa={type:"childremoved",child:null};class Lt extends Ys{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:l_++}),this.uuid=qs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Lt.DEFAULT_UP.clone();const e=new D,t=new Kn,i=new Hr,s=new D(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new dt},normalMatrix:{value:new Ke}}),this.matrix=new dt,this.matrixWorld=new dt,this.matrixAutoUpdate=Lt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Jc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return vs.setFromAxisAngle(e,t),this.quaternion.multiply(vs),this}rotateOnWorldAxis(e,t){return vs.setFromAxisAngle(e,t),this.quaternion.premultiply(vs),this}rotateX(e){return this.rotateOnAxis(du,e)}rotateY(e){return this.rotateOnAxis(pu,e)}rotateZ(e){return this.rotateOnAxis(mu,e)}translateOnAxis(e,t){return fu.copy(e).applyQuaternion(this.quaternion),this.position.add(fu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(du,e)}translateY(e){return this.translateOnAxis(pu,e)}translateZ(e){return this.translateOnAxis(mu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ni.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?so.copy(e):so.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),ir.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ni.lookAt(ir,so,this.up):ni.lookAt(so,ir,this.up),this.quaternion.setFromRotationMatrix(ni),s&&(ni.extractRotation(s.matrixWorld),vs.setFromRotationMatrix(ni),this.quaternion.premultiply(vs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(gu),xs.child=e,this.dispatchEvent(xs),xs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(u_),qa.child=e,this.dispatchEvent(qa),qa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ni.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ni.multiply(e.parent.matrixWorld)),e.applyMatrix4(ni),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(gu),xs.child=e,this.dispatchEvent(xs),xs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ir,e,c_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ir,h_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),f=o(e.shapes),u=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),u.length>0&&(i.skeletons=u),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Lt.DEFAULT_UP=new D(0,1,0);Lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const bn=new D,ii=new D,ja=new D,si=new D,ys=new D,Ms=new D,_u=new D,Ka=new D,$a=new D,Ja=new D,Za=new lt,Qa=new lt,el=new lt;class Tn{constructor(e=new D,t=new D,i=new D){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),bn.subVectors(e,t),s.cross(bn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){bn.subVectors(s,t),ii.subVectors(i,t),ja.subVectors(e,t);const o=bn.dot(bn),a=bn.dot(ii),l=bn.dot(ja),c=ii.dot(ii),h=ii.dot(ja),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;const u=1/f,d=(c*l-a*h)*u,g=(o*h-a*l)*u;return r.set(1-d-g,g,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,si)===null?!1:si.x>=0&&si.y>=0&&si.x+si.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,si)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,si.x),l.addScaledVector(o,si.y),l.addScaledVector(a,si.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return Za.setScalar(0),Qa.setScalar(0),el.setScalar(0),Za.fromBufferAttribute(e,t),Qa.fromBufferAttribute(e,i),el.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Za,r.x),o.addScaledVector(Qa,r.y),o.addScaledVector(el,r.z),o}static isFrontFacing(e,t,i,s){return bn.subVectors(i,t),ii.subVectors(e,t),bn.cross(ii).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bn.subVectors(this.c,this.b),ii.subVectors(this.a,this.b),bn.cross(ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Tn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Tn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Tn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Tn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Tn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;ys.subVectors(s,i),Ms.subVectors(r,i),Ka.subVectors(e,i);const l=ys.dot(Ka),c=Ms.dot(Ka);if(l<=0&&c<=0)return t.copy(i);$a.subVectors(e,s);const h=ys.dot($a),f=Ms.dot($a);if(h>=0&&f<=h)return t.copy(s);const u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(ys,o);Ja.subVectors(e,r);const d=ys.dot(Ja),g=Ms.dot(Ja);if(g>=0&&d<=g)return t.copy(r);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Ms,a);const m=h*g-d*f;if(m<=0&&f-h>=0&&d-g>=0)return _u.subVectors(r,s),a=(f-h)/(f-h+(d-g)),t.copy(s).addScaledVector(_u,a);const p=1/(m+_+u);return o=_*p,a=u*p,t.copy(i).addScaledVector(ys,o).addScaledVector(Ms,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Vd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yi={h:0,s:0,l:0},ro={h:0,s:0,l:0};function tl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class $e{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=rt.workingColorSpace){return this.r=e,this.g=t,this.b=i,rt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=rt.workingColorSpace){if(e=jg(e,1),t=kt(t,0,1),i=kt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=tl(o,r,e+1/3),this.g=tl(o,r,e),this.b=tl(o,r,e-1/3)}return rt.toWorkingColorSpace(this,s),this}setStyle(e,t=Qt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Qt){const i=Vd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Os(e.r),this.g=Os(e.g),this.b=Os(e.b),this}copyLinearToSRGB(e){return this.r=ka(e.r),this.g=ka(e.g),this.b=ka(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qt){return rt.fromWorkingColorSpace(Ft.copy(this),e),Math.round(kt(Ft.r*255,0,255))*65536+Math.round(kt(Ft.g*255,0,255))*256+Math.round(kt(Ft.b*255,0,255))}getHexString(e=Qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rt.workingColorSpace){rt.fromWorkingColorSpace(Ft.copy(this),t);const i=Ft.r,s=Ft.g,r=Ft.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=rt.workingColorSpace){return rt.fromWorkingColorSpace(Ft.copy(this),t),e.r=Ft.r,e.g=Ft.g,e.b=Ft.b,e}getStyle(e=Qt){rt.fromWorkingColorSpace(Ft.copy(this),e);const t=Ft.r,i=Ft.g,s=Ft.b;return e!==Qt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(yi),this.setHSL(yi.h+e,yi.s+t,yi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(yi),e.getHSL(ro);const i=Fa(yi.h,ro.h,t),s=Fa(yi.s,ro.s,t),r=Fa(yi.l,ro.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ft=new $e;$e.NAMES=Vd;let f_=0;class ls extends Ys{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:f_++}),this.uuid=qs(),this.name="",this.type="Material",this.blending=Us,this.side=Ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pl,this.blendDst=Ll,this.blendEquation=ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=iu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fs,this.stencilZFail=fs,this.stencilZPass=fs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Us&&(i.blending=this.blending),this.side!==Ii&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Pl&&(i.blendSrc=this.blendSrc),this.blendDst!==Ll&&(i.blendDst=this.blendDst),this.blendEquation!==ji&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ks&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==iu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==fs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==fs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class mn extends ls{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.combine=Ed,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wt=new D,oo=new Re;class hn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=su,this.updateRanges=[],this.gpuType=ui,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)oo.fromBufferAttribute(this,t),oo.applyMatrix3(e),this.setXY(t,oo.x,oo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix3(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Qs(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Jt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Qs(t,this.array)),t}setX(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Qs(t,this.array)),t}setY(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Qs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Qs(t,this.array)),t}setW(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Jt(t,this.array),i=Jt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Jt(t,this.array),i=Jt(i,this.array),s=Jt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Jt(t,this.array),i=Jt(i,this.array),s=Jt(s,this.array),r=Jt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==su&&(e.usage=this.usage),e}}class Gd extends hn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Wd extends hn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class St extends hn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let d_=0;const dn=new dt,nl=new Lt,Ss=new D,on=new Vr,sr=new Vr,Pt=new D;class jt extends Ys{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:d_++}),this.uuid=qs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(kd(e)?Wd:Gd)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ke().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return dn.makeRotationFromQuaternion(e),this.applyMatrix4(dn),this}rotateX(e){return dn.makeRotationX(e),this.applyMatrix4(dn),this}rotateY(e){return dn.makeRotationY(e),this.applyMatrix4(dn),this}rotateZ(e){return dn.makeRotationZ(e),this.applyMatrix4(dn),this}translate(e,t,i){return dn.makeTranslation(e,t,i),this.applyMatrix4(dn),this}scale(e,t,i){return dn.makeScale(e,t,i),this.applyMatrix4(dn),this}lookAt(e){return nl.lookAt(e),nl.updateMatrix(),this.applyMatrix4(nl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ss).negate(),this.translate(Ss.x,Ss.y,Ss.z),this}setFromPoints(e){const t=[];for(let i=0,s=e.length;i<s;i++){const r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new St(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];on.setFromBufferAttribute(r),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ua);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const i=this.boundingSphere.center;if(on.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];sr.setFromBufferAttribute(a),this.morphTargetsRelative?(Pt.addVectors(on.min,sr.min),on.expandByPoint(Pt),Pt.addVectors(on.max,sr.max),on.expandByPoint(Pt)):(on.expandByPoint(sr.min),on.expandByPoint(sr.max))}on.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Pt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Pt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Pt.fromBufferAttribute(a,c),l&&(Ss.fromBufferAttribute(e,c),Pt.add(Ss)),s=Math.max(s,i.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let F=0;F<i.count;F++)a[F]=new D,l[F]=new D;const c=new D,h=new D,f=new D,u=new Re,d=new Re,g=new Re,_=new D,m=new D;function p(F,ie,x){c.fromBufferAttribute(i,F),h.fromBufferAttribute(i,ie),f.fromBufferAttribute(i,x),u.fromBufferAttribute(r,F),d.fromBufferAttribute(r,ie),g.fromBufferAttribute(r,x),h.sub(c),f.sub(c),d.sub(u),g.sub(u);const E=1/(d.x*g.y-g.x*d.y);isFinite(E)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(E),m.copy(f).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(E),a[F].add(_),a[ie].add(_),a[x].add(_),l[F].add(m),l[ie].add(m),l[x].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let F=0,ie=T.length;F<ie;++F){const x=T[F],E=x.start,W=x.count;for(let X=E,Z=E+W;X<Z;X+=3)p(e.getX(X+0),e.getX(X+1),e.getX(X+2))}const M=new D,b=new D,O=new D,R=new D;function P(F){O.fromBufferAttribute(s,F),R.copy(O);const ie=a[F];M.copy(ie),M.sub(O.multiplyScalar(O.dot(ie))).normalize(),b.crossVectors(R,ie);const E=b.dot(l[F])<0?-1:1;o.setXYZW(F,M.x,M.y,M.z,E)}for(let F=0,ie=T.length;F<ie;++F){const x=T[F],E=x.start,W=x.count;for(let X=E,Z=E+W;X<Z;X+=3)P(e.getX(X+0)),P(e.getX(X+1)),P(e.getX(X+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new hn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,d=i.count;u<d;u++)i.setXYZ(u,0,0,0);const s=new D,r=new D,o=new D,a=new D,l=new D,c=new D,h=new D,f=new D;if(e)for(let u=0,d=e.count;u<d;u+=3){const g=e.getX(u+0),_=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,d=t.count;u<d;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Pt.fromBufferAttribute(e,t),Pt.normalize(),e.setXYZ(t,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,f=a.normalized,u=new c.constructor(l.length*h);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*h;for(let p=0;p<h;p++)u[g++]=c[d++]}return new hn(u,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new jt,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,f=c.length;h<f;h++){const u=c[h],d=e(u,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){const d=c[f];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],f=r[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const vu=new dt,zi=new $c,ao=new ua,xu=new D,lo=new D,co=new D,ho=new D,il=new D,uo=new D,yu=new D,fo=new D;class ft extends Lt{constructor(e=new jt,t=new mn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){uo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],f=r[l];h!==0&&(il.fromBufferAttribute(f,e),o?uo.addScaledVector(il,h):uo.addScaledVector(il.sub(t),h))}t.add(uo)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ao.copy(i.boundingSphere),ao.applyMatrix4(r),zi.copy(e.ray).recast(e.near),!(ao.containsPoint(zi.origin)===!1&&(zi.intersectSphere(ao,xu)===null||zi.origin.distanceToSquared(xu)>(e.far-e.near)**2))&&(vu.copy(r).invert(),zi.copy(e.ray).applyMatrix4(vu),!(i.boundingBox!==null&&zi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,zi)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){const m=u[g],p=o[m.materialIndex],T=Math.max(m.start,d.start),M=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let b=T,O=M;b<O;b+=3){const R=a.getX(b),P=a.getX(b+1),F=a.getX(b+2);s=po(this,p,e,i,c,h,f,R,P,F),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const T=a.getX(m),M=a.getX(m+1),b=a.getX(m+2);s=po(this,o,e,i,c,h,f,T,M,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){const m=u[g],p=o[m.materialIndex],T=Math.max(m.start,d.start),M=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let b=T,O=M;b<O;b+=3){const R=b,P=b+1,F=b+2;s=po(this,p,e,i,c,h,f,R,P,F),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const T=m,M=m+1,b=m+2;s=po(this,o,e,i,c,h,f,T,M,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function p_(n,e,t,i,s,r,o,a){let l;if(e.side===tn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Ii,a),l===null)return null;fo.copy(a),fo.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(fo);return c<t.near||c>t.far?null:{distance:c,point:fo.clone(),object:n}}function po(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,lo),n.getVertexPosition(l,co),n.getVertexPosition(c,ho);const h=p_(n,e,t,i,lo,co,ho,yu);if(h){const f=new D;Tn.getBarycoord(yu,lo,co,ho,f),s&&(h.uv=Tn.getInterpolatedAttribute(s,a,l,c,f,new Re)),r&&(h.uv1=Tn.getInterpolatedAttribute(r,a,l,c,f,new Re)),o&&(h.normal=Tn.getInterpolatedAttribute(o,a,l,c,f,new D),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new D,materialIndex:0};Tn.getNormal(lo,co,ho,u.normal),h.face=u,h.barycoord=f}return h}class Wn extends jt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],f=[];let u=0,d=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new St(c,3)),this.setAttribute("normal",new St(h,3)),this.setAttribute("uv",new St(f,2));function g(_,m,p,T,M,b,O,R,P,F,ie){const x=b/P,E=O/F,W=b/2,X=O/2,Z=R/2,ce=P+1,H=F+1;let se=0,V=0;const ve=new D;for(let Se=0;Se<H;Se++){const be=Se*E-X;for(let ke=0;ke<ce;ke++){const Je=ke*x-W;ve[_]=Je*T,ve[m]=be*M,ve[p]=Z,c.push(ve.x,ve.y,ve.z),ve[_]=0,ve[m]=0,ve[p]=R>0?1:-1,h.push(ve.x,ve.y,ve.z),f.push(ke/P),f.push(1-Se/F),se+=1}}for(let Se=0;Se<F;Se++)for(let be=0;be<P;be++){const ke=u+be+ce*Se,Je=u+be+ce*(Se+1),G=u+(be+1)+ce*(Se+1),C=u+(be+1)+ce*Se;l.push(ke,Je,C),l.push(Je,G,C),V+=6}a.addGroup(d,V,ie),d+=V,u+=se}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ws(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Gt(n){const e={};for(let t=0;t<n.length;t++){const i=Ws(n[t]);for(const s in i)e[s]=i[s]}return e}function m_(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Xd(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rt.workingColorSpace}const g_={clone:Ws,merge:Gt};var __=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,v_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Di extends ls{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=__,this.fragmentShader=v_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ws(e.uniforms),this.uniformsGroups=m_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Yd extends Lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dt,this.projectionMatrix=new dt,this.projectionMatrixInverse=new dt,this.coordinateSystem=fi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Mi=new D,Mu=new Re,Su=new Re;class gn extends Yd{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=mc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Oa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return mc*2*Math.atan(Math.tan(Oa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Mi.x,Mi.y).multiplyScalar(-e/Mi.z),Mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Mi.x,Mi.y).multiplyScalar(-e/Mi.z)}getViewSize(e,t){return this.getViewBounds(e,Mu,Su),t.subVectors(Su,Mu)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Oa*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const bs=-90,Es=1;class x_ extends Lt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new gn(bs,Es,e,t);s.layers=this.layers,this.add(s);const r=new gn(bs,Es,e,t);r.layers=this.layers,this.add(r);const o=new gn(bs,Es,e,t);o.layers=this.layers,this.add(o);const a=new gn(bs,Es,e,t);a.layers=this.layers,this.add(a);const l=new gn(bs,Es,e,t);l.layers=this.layers,this.add(l);const c=new gn(bs,Es,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===fi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ko)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(f,u,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class qd extends qt{constructor(e,t,i,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:zs,super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class y_ extends rs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new qd(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:wn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Wn(5,5,5),r=new Di({name:"CubemapFromEquirect",uniforms:Ws(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:tn,blending:Ri});r.uniforms.tEquirect.value=t;const o=new ft(s,r),a=t.minFilter;return t.minFilter===Qi&&(t.minFilter=wn),new x_(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}const sl=new D,M_=new D,S_=new Ke;class bi{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=sl.subVectors(i,t).cross(M_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(sl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||S_.getNormalMatrix(e),s=this.coplanarPoint(sl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hi=new ua,mo=new D;class Zc{constructor(e=new bi,t=new bi,i=new bi,s=new bi,r=new bi,o=new bi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=fi){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],f=s[6],u=s[7],d=s[8],g=s[9],_=s[10],m=s[11],p=s[12],T=s[13],M=s[14],b=s[15];if(i[0].setComponents(l-r,u-c,m-d,b-p).normalize(),i[1].setComponents(l+r,u+c,m+d,b+p).normalize(),i[2].setComponents(l+o,u+h,m+g,b+T).normalize(),i[3].setComponents(l-o,u-h,m-g,b-T).normalize(),i[4].setComponents(l-a,u-f,m-_,b-M).normalize(),t===fi)i[5].setComponents(l+a,u+f,m+_,b+M).normalize();else if(t===Ko)i[5].setComponents(a,f,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Hi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hi)}intersectsSprite(e){return Hi.center.set(0,0,0),Hi.radius=.7071067811865476,Hi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hi)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(mo.x=s.normal.x>0?e.max.x:e.min.x,mo.y=s.normal.y>0?e.max.y:e.min.y,mo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(mo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function jd(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function b_(n){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,f=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const h=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,h);else{f.sort((d,g)=>d.start-g.start);let u=0;for(let d=1;d<f.length;d++){const g=f[u],_=f[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,f[u]=_)}f.length=u+1;for(let d=0,g=f.length;d<g;d++){const _=f[d];n.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class cs extends jt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,f=e/a,u=t/l,d=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const T=p*u-o;for(let M=0;M<c;M++){const b=M*f-r;g.push(b,-T,0),_.push(0,0,1),m.push(M/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let T=0;T<a;T++){const M=T+c*p,b=T+c*(p+1),O=T+1+c*(p+1),R=T+1+c*p;d.push(M,b,R),d.push(b,O,R)}this.setIndex(d),this.setAttribute("position",new St(g,3)),this.setAttribute("normal",new St(_,3)),this.setAttribute("uv",new St(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cs(e.width,e.height,e.widthSegments,e.heightSegments)}}var E_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,w_=`#ifdef USE_ALPHAHASH
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
#endif`,T_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,A_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,R_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,C_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,P_=`#ifdef USE_AOMAP
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
#endif`,L_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,I_=`#ifdef USE_BATCHING
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
#endif`,D_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,U_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,N_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,O_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,F_=`#ifdef USE_IRIDESCENCE
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
#endif`,B_=`#ifdef USE_BUMPMAP
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
#endif`,k_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,z_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,H_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,V_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,G_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,W_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,X_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Y_=`#if defined( USE_COLOR_ALPHA )
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
#endif`,q_=`#define PI 3.141592653589793
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
} // validated`,j_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,K_=`vec3 transformedNormal = objectNormal;
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
#endif`,$_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,J_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Z_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Q_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ev="gl_FragColor = linearToOutputTexel( gl_FragColor );",tv=`
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
}`,nv=`#ifdef USE_ENVMAP
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
#endif`,iv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,sv=`#ifdef USE_ENVMAP
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
#endif`,rv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ov=`#ifdef USE_ENVMAP
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
#endif`,av=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,uv=`#ifdef USE_GRADIENTMAP
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
}`,fv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mv=`uniform bool receiveShadow;
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
#endif`,gv=`#ifdef USE_ENVMAP
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
#endif`,_v=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Mv=`PhysicalMaterial material;
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
#endif`,Sv=`struct PhysicalMaterial {
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
}`,bv=`
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
#endif`,Ev=`#if defined( RE_IndirectDiffuse )
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
#endif`,wv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Tv=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Av=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rv=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cv=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Pv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Lv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Iv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Dv=`#if defined( USE_POINTS_UV )
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
#endif`,Uv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Nv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ov=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Fv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Bv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kv=`#ifdef USE_MORPHTARGETS
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
#endif`,zv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Vv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Gv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Yv=`#ifdef USE_NORMALMAP
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
#endif`,qv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Kv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$v=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Jv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Qv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ex=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ix=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ox=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ax=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,lx=`float getShadowMask() {
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
}`,cx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hx=`#ifdef USE_SKINNING
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
#endif`,ux=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fx=`#ifdef USE_SKINNING
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
#endif`,dx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,px=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,_x=`#ifdef USE_TRANSMISSION
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
#endif`,vx=`#ifdef USE_TRANSMISSION
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
#endif`,xx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ex=`uniform sampler2D t2D;
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
}`,wx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ax=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cx=`#include <common>
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
}`,Px=`#if DEPTH_PACKING == 3200
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
}`,Lx=`#define DISTANCE
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
}`,Ix=`#define DISTANCE
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
}`,Dx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ux=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nx=`uniform float scale;
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
}`,Ox=`uniform vec3 diffuse;
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
}`,Fx=`#include <common>
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
}`,Bx=`uniform vec3 diffuse;
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
}`,kx=`#define LAMBERT
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
}`,zx=`#define LAMBERT
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
}`,Hx=`#define MATCAP
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
}`,Vx=`#define MATCAP
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
}`,Gx=`#define NORMAL
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
}`,Wx=`#define NORMAL
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
}`,Xx=`#define PHONG
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
}`,Yx=`#define PHONG
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
}`,qx=`#define STANDARD
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
}`,jx=`#define STANDARD
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
}`,Kx=`#define TOON
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
}`,$x=`#define TOON
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
}`,Jx=`uniform float size;
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
}`,Zx=`uniform vec3 diffuse;
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
}`,Qx=`#include <common>
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
}`,ey=`uniform vec3 color;
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
}`,ty=`uniform float rotation;
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
}`,ny=`uniform vec3 diffuse;
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
}`,je={alphahash_fragment:E_,alphahash_pars_fragment:w_,alphamap_fragment:T_,alphamap_pars_fragment:A_,alphatest_fragment:R_,alphatest_pars_fragment:C_,aomap_fragment:P_,aomap_pars_fragment:L_,batching_pars_vertex:I_,batching_vertex:D_,begin_vertex:U_,beginnormal_vertex:N_,bsdfs:O_,iridescence_fragment:F_,bumpmap_pars_fragment:B_,clipping_planes_fragment:k_,clipping_planes_pars_fragment:z_,clipping_planes_pars_vertex:H_,clipping_planes_vertex:V_,color_fragment:G_,color_pars_fragment:W_,color_pars_vertex:X_,color_vertex:Y_,common:q_,cube_uv_reflection_fragment:j_,defaultnormal_vertex:K_,displacementmap_pars_vertex:$_,displacementmap_vertex:J_,emissivemap_fragment:Z_,emissivemap_pars_fragment:Q_,colorspace_fragment:ev,colorspace_pars_fragment:tv,envmap_fragment:nv,envmap_common_pars_fragment:iv,envmap_pars_fragment:sv,envmap_pars_vertex:rv,envmap_physical_pars_fragment:gv,envmap_vertex:ov,fog_vertex:av,fog_pars_vertex:lv,fog_fragment:cv,fog_pars_fragment:hv,gradientmap_pars_fragment:uv,lightmap_pars_fragment:fv,lights_lambert_fragment:dv,lights_lambert_pars_fragment:pv,lights_pars_begin:mv,lights_toon_fragment:_v,lights_toon_pars_fragment:vv,lights_phong_fragment:xv,lights_phong_pars_fragment:yv,lights_physical_fragment:Mv,lights_physical_pars_fragment:Sv,lights_fragment_begin:bv,lights_fragment_maps:Ev,lights_fragment_end:wv,logdepthbuf_fragment:Tv,logdepthbuf_pars_fragment:Av,logdepthbuf_pars_vertex:Rv,logdepthbuf_vertex:Cv,map_fragment:Pv,map_pars_fragment:Lv,map_particle_fragment:Iv,map_particle_pars_fragment:Dv,metalnessmap_fragment:Uv,metalnessmap_pars_fragment:Nv,morphinstance_vertex:Ov,morphcolor_vertex:Fv,morphnormal_vertex:Bv,morphtarget_pars_vertex:kv,morphtarget_vertex:zv,normal_fragment_begin:Hv,normal_fragment_maps:Vv,normal_pars_fragment:Gv,normal_pars_vertex:Wv,normal_vertex:Xv,normalmap_pars_fragment:Yv,clearcoat_normal_fragment_begin:qv,clearcoat_normal_fragment_maps:jv,clearcoat_pars_fragment:Kv,iridescence_pars_fragment:$v,opaque_fragment:Jv,packing:Zv,premultiplied_alpha_fragment:Qv,project_vertex:ex,dithering_fragment:tx,dithering_pars_fragment:nx,roughnessmap_fragment:ix,roughnessmap_pars_fragment:sx,shadowmap_pars_fragment:rx,shadowmap_pars_vertex:ox,shadowmap_vertex:ax,shadowmask_pars_fragment:lx,skinbase_vertex:cx,skinning_pars_vertex:hx,skinning_vertex:ux,skinnormal_vertex:fx,specularmap_fragment:dx,specularmap_pars_fragment:px,tonemapping_fragment:mx,tonemapping_pars_fragment:gx,transmission_fragment:_x,transmission_pars_fragment:vx,uv_pars_fragment:xx,uv_pars_vertex:yx,uv_vertex:Mx,worldpos_vertex:Sx,background_vert:bx,background_frag:Ex,backgroundCube_vert:wx,backgroundCube_frag:Tx,cube_vert:Ax,cube_frag:Rx,depth_vert:Cx,depth_frag:Px,distanceRGBA_vert:Lx,distanceRGBA_frag:Ix,equirect_vert:Dx,equirect_frag:Ux,linedashed_vert:Nx,linedashed_frag:Ox,meshbasic_vert:Fx,meshbasic_frag:Bx,meshlambert_vert:kx,meshlambert_frag:zx,meshmatcap_vert:Hx,meshmatcap_frag:Vx,meshnormal_vert:Gx,meshnormal_frag:Wx,meshphong_vert:Xx,meshphong_frag:Yx,meshphysical_vert:qx,meshphysical_frag:jx,meshtoon_vert:Kx,meshtoon_frag:$x,points_vert:Jx,points_frag:Zx,shadow_vert:Qx,shadow_frag:ey,sprite_vert:ty,sprite_frag:ny},ye={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new Re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new Re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},kn={basic:{uniforms:Gt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:Gt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new $e(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:Gt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:Gt([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:Gt([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new $e(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:Gt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:Gt([ye.points,ye.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:Gt([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:Gt([ye.common,ye.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:Gt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:Gt([ye.sprite,ye.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:Gt([ye.common,ye.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:Gt([ye.lights,ye.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};kn.physical={uniforms:Gt([kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new Re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new Re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new Re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const go={r:0,b:0,g:0},Vi=new Kn,iy=new dt;function sy(n,e,t,i,s,r,o){const a=new $e(0);let l=r===!0?0:1,c,h,f=null,u=0,d=null;function g(T){let M=T.isScene===!0?T.background:null;return M&&M.isTexture&&(M=(T.backgroundBlurriness>0?t:e).get(M)),M}function _(T){let M=!1;const b=g(T);b===null?p(a,l):b&&b.isColor&&(p(b,1),M=!0);const O=n.xr.getEnvironmentBlendMode();O==="additive"?i.buffers.color.setClear(0,0,0,1,o):O==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(T,M){const b=g(M);b&&(b.isCubeTexture||b.mapping===ca)?(h===void 0&&(h=new ft(new Wn(1,1,1),new Di({name:"BackgroundCubeMaterial",uniforms:Ws(kn.backgroundCube.uniforms),vertexShader:kn.backgroundCube.vertexShader,fragmentShader:kn.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(O,R,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Vi.copy(M.backgroundRotation),Vi.x*=-1,Vi.y*=-1,Vi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Vi.y*=-1,Vi.z*=-1),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(iy.makeRotationFromEuler(Vi)),h.material.toneMapped=rt.getTransfer(b.colorSpace)!==gt,(f!==b||u!==b.version||d!==n.toneMapping)&&(h.material.needsUpdate=!0,f=b,u=b.version,d=n.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new ft(new cs(2,2),new Di({name:"BackgroundMaterial",uniforms:Ws(kn.background.uniforms),vertexShader:kn.background.vertexShader,fragmentShader:kn.background.fragmentShader,side:Ii,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=rt.getTransfer(b.colorSpace)!==gt,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(f!==b||u!==b.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,f=b,u=b.version,d=n.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function p(T,M){T.getRGB(go,Xd(n)),i.buffers.color.setClear(go.r,go.g,go.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(T,M=1){a.set(T),l=M,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,p(a,l)},render:_,addToRenderList:m}}function ry(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null);let r=s,o=!1;function a(x,E,W,X,Z){let ce=!1;const H=f(X,W,E);r!==H&&(r=H,c(r.object)),ce=d(x,X,W,Z),ce&&g(x,X,W,Z),Z!==null&&e.update(Z,n.ELEMENT_ARRAY_BUFFER),(ce||o)&&(o=!1,b(x,E,W,X),Z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function l(){return n.createVertexArray()}function c(x){return n.bindVertexArray(x)}function h(x){return n.deleteVertexArray(x)}function f(x,E,W){const X=W.wireframe===!0;let Z=i[x.id];Z===void 0&&(Z={},i[x.id]=Z);let ce=Z[E.id];ce===void 0&&(ce={},Z[E.id]=ce);let H=ce[X];return H===void 0&&(H=u(l()),ce[X]=H),H}function u(x){const E=[],W=[],X=[];for(let Z=0;Z<t;Z++)E[Z]=0,W[Z]=0,X[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:W,attributeDivisors:X,object:x,attributes:{},index:null}}function d(x,E,W,X){const Z=r.attributes,ce=E.attributes;let H=0;const se=W.getAttributes();for(const V in se)if(se[V].location>=0){const Se=Z[V];let be=ce[V];if(be===void 0&&(V==="instanceMatrix"&&x.instanceMatrix&&(be=x.instanceMatrix),V==="instanceColor"&&x.instanceColor&&(be=x.instanceColor)),Se===void 0||Se.attribute!==be||be&&Se.data!==be.data)return!0;H++}return r.attributesNum!==H||r.index!==X}function g(x,E,W,X){const Z={},ce=E.attributes;let H=0;const se=W.getAttributes();for(const V in se)if(se[V].location>=0){let Se=ce[V];Se===void 0&&(V==="instanceMatrix"&&x.instanceMatrix&&(Se=x.instanceMatrix),V==="instanceColor"&&x.instanceColor&&(Se=x.instanceColor));const be={};be.attribute=Se,Se&&Se.data&&(be.data=Se.data),Z[V]=be,H++}r.attributes=Z,r.attributesNum=H,r.index=X}function _(){const x=r.newAttributes;for(let E=0,W=x.length;E<W;E++)x[E]=0}function m(x){p(x,0)}function p(x,E){const W=r.newAttributes,X=r.enabledAttributes,Z=r.attributeDivisors;W[x]=1,X[x]===0&&(n.enableVertexAttribArray(x),X[x]=1),Z[x]!==E&&(n.vertexAttribDivisor(x,E),Z[x]=E)}function T(){const x=r.newAttributes,E=r.enabledAttributes;for(let W=0,X=E.length;W<X;W++)E[W]!==x[W]&&(n.disableVertexAttribArray(W),E[W]=0)}function M(x,E,W,X,Z,ce,H){H===!0?n.vertexAttribIPointer(x,E,W,Z,ce):n.vertexAttribPointer(x,E,W,X,Z,ce)}function b(x,E,W,X){_();const Z=X.attributes,ce=W.getAttributes(),H=E.defaultAttributeValues;for(const se in ce){const V=ce[se];if(V.location>=0){let ve=Z[se];if(ve===void 0&&(se==="instanceMatrix"&&x.instanceMatrix&&(ve=x.instanceMatrix),se==="instanceColor"&&x.instanceColor&&(ve=x.instanceColor)),ve!==void 0){const Se=ve.normalized,be=ve.itemSize,ke=e.get(ve);if(ke===void 0)continue;const Je=ke.buffer,G=ke.type,C=ke.bytesPerElement,ge=G===n.INT||G===n.UNSIGNED_INT||ve.gpuType===Gc;if(ve.isInterleavedBufferAttribute){const xe=ve.data,ne=xe.stride,oe=ve.offset;if(xe.isInstancedInterleavedBuffer){for(let Ye=0;Ye<V.locationSize;Ye++)p(V.location+Ye,xe.meshPerAttribute);x.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let Ye=0;Ye<V.locationSize;Ye++)m(V.location+Ye);n.bindBuffer(n.ARRAY_BUFFER,Je);for(let Ye=0;Ye<V.locationSize;Ye++)M(V.location+Ye,be/V.locationSize,G,Se,ne*C,(oe+be/V.locationSize*Ye)*C,ge)}else{if(ve.isInstancedBufferAttribute){for(let xe=0;xe<V.locationSize;xe++)p(V.location+xe,ve.meshPerAttribute);x.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let xe=0;xe<V.locationSize;xe++)m(V.location+xe);n.bindBuffer(n.ARRAY_BUFFER,Je);for(let xe=0;xe<V.locationSize;xe++)M(V.location+xe,be/V.locationSize,G,Se,be*C,be/V.locationSize*xe*C,ge)}}else if(H!==void 0){const Se=H[se];if(Se!==void 0)switch(Se.length){case 2:n.vertexAttrib2fv(V.location,Se);break;case 3:n.vertexAttrib3fv(V.location,Se);break;case 4:n.vertexAttrib4fv(V.location,Se);break;default:n.vertexAttrib1fv(V.location,Se)}}}}T()}function O(){F();for(const x in i){const E=i[x];for(const W in E){const X=E[W];for(const Z in X)h(X[Z].object),delete X[Z];delete E[W]}delete i[x]}}function R(x){if(i[x.id]===void 0)return;const E=i[x.id];for(const W in E){const X=E[W];for(const Z in X)h(X[Z].object),delete X[Z];delete E[W]}delete i[x.id]}function P(x){for(const E in i){const W=i[E];if(W[x.id]===void 0)continue;const X=W[x.id];for(const Z in X)h(X[Z].object),delete X[Z];delete W[x.id]}}function F(){ie(),o=!0,r!==s&&(r=s,c(r.object))}function ie(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:F,resetDefaultState:ie,dispose:O,releaseStatesOfGeometry:R,releaseStatesOfProgram:P,initAttributes:_,enableAttribute:m,disableUnusedAttributes:T}}function oy(n,e,t){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function o(c,h,f){f!==0&&(n.drawArraysInstanced(i,c,h,f),t.update(h,i,f))}function a(c,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,f);let d=0;for(let g=0;g<f;g++)d+=h[g];t.update(d,i,1)}function l(c,h,f,u){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],h[g],u[g]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,h,0,u,0,f);let g=0;for(let _=0;_<f;_++)g+=h[_];for(let _=0;_<u.length;_++)t.update(g,i,u[_])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function ay(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==An&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const F=P===zr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==di&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==ui&&!F)}function l(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=t.logarithmicDepthBuffer===!0,u=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(u===!0){const P=e.get("EXT_clip_control");P.clipControlEXT(P.LOWER_LEFT_EXT,P.ZERO_TO_ONE_EXT)}const d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),O=g>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:u,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:T,maxVaryings:M,maxFragmentUniforms:b,vertexTextures:O,maxSamples:R}}function ly(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new bi,a=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const d=f.length!==0||u||i!==0||s;return s=u,i=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){t=h(f,u,0)},this.setState=function(f,u,d){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const T=r?0:i,M=T*4;let b=p.clippingState||null;l.value=b,b=h(g,u,M,d);for(let O=0;O!==M;++O)b[O]=t[O];p.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(f,u,d,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,T=u.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,b=d;M!==_;++M,b+=4)o.copy(f[M]).applyMatrix4(T,a),o.normal.toArray(m,b),m[b+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function cy(n){let e=new WeakMap;function t(o,a){return a===kl?o.mapping=zs:a===zl&&(o.mapping=Hs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===kl||a===zl)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new y_(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class Qc extends Yd{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Cs=4,bu=[.125,.215,.35,.446,.526,.582],Ki=20,rl=new Qc,Eu=new $e;let ol=null,al=0,ll=0,cl=!1;const Xi=(1+Math.sqrt(5))/2,ws=1/Xi,wu=[new D(-Xi,ws,0),new D(Xi,ws,0),new D(-ws,0,Xi),new D(ws,0,Xi),new D(0,Xi,-ws),new D(0,Xi,ws),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class Tu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){ol=this._renderer.getRenderTarget(),al=this._renderer.getActiveCubeFace(),ll=this._renderer.getActiveMipmapLevel(),cl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ru(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ol,al,ll),this._renderer.xr.enabled=cl,e.scissorTest=!1,_o(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===zs||e.mapping===Hs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ol=this._renderer.getRenderTarget(),al=this._renderer.getActiveCubeFace(),ll=this._renderer.getActiveMipmapLevel(),cl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:wn,minFilter:wn,generateMipmaps:!1,type:zr,format:An,colorSpace:Ui,depthBuffer:!1},s=Au(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Au(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=hy(r)),this._blurMaterial=uy(r,e,t)}return s}_compileMaterial(e){const t=new ft(this._lodPlanes[0],e);this._renderer.compile(t,rl)}_sceneToCubeUV(e,t,i,s){const a=new gn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,u=h.toneMapping;h.getClearColor(Eu),h.toneMapping=Ci,h.autoClear=!1;const d=new mn({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1}),g=new ft(new Wn,d);let _=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,_=!0):(d.color.copy(Eu),_=!0);for(let p=0;p<6;p++){const T=p%3;T===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):T===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const M=this._cubeSize;_o(s,T*M,p>2?M:0,M,M),h.setRenderTarget(s),_&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=f,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===zs||e.mapping===Hs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ru());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new ft(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;_o(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,rl)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=wu[(s-r-1)%wu.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new ft(this._lodPlanes[s],c),u=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Ki-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Ki;m>Ki&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ki}`);const p=[];let T=0;for(let P=0;P<Ki;++P){const F=P/_,ie=Math.exp(-F*F/2);p.push(ie),P===0?T+=ie:P<m&&(T+=2*ie)}for(let P=0;P<p.length;P++)p[P]=p[P]/T;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:M}=this;u.dTheta.value=g,u.mipInt.value=M-i;const b=this._sizeLods[s],O=3*b*(s>M-Cs?s-M+Cs:0),R=4*(this._cubeSize-b);_o(t,O,R,3*b,2*b),l.setRenderTarget(t),l.render(f,rl)}}function hy(n){const e=[],t=[],i=[];let s=n;const r=n-Cs+1+bu.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-Cs?l=bu[o-n+Cs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,f=1+c,u=[h,h,f,h,f,f,h,h,f,f,h,f],d=6,g=6,_=3,m=2,p=1,T=new Float32Array(_*g*d),M=new Float32Array(m*g*d),b=new Float32Array(p*g*d);for(let R=0;R<d;R++){const P=R%3*2/3-1,F=R>2?0:-1,ie=[P,F,0,P+2/3,F,0,P+2/3,F+1,0,P,F,0,P+2/3,F+1,0,P,F+1,0];T.set(ie,_*g*R),M.set(u,m*g*R);const x=[R,R,R,R,R,R];b.set(x,p*g*R)}const O=new jt;O.setAttribute("position",new hn(T,_)),O.setAttribute("uv",new hn(M,m)),O.setAttribute("faceIndex",new hn(b,p)),e.push(O),s>Cs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Au(n,e,t){const i=new rs(n,e,t);return i.texture.mapping=ca,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function _o(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function uy(n,e,t){const i=new Float32Array(Ki),s=new D(0,1,0);return new Di({name:"SphericalGaussianBlur",defines:{n:Ki,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:eh(),fragmentShader:`

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
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function Ru(){return new Di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:eh(),fragmentShader:`

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
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function Cu(){return new Di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:eh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function eh(){return`

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
	`}function fy(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===kl||l===zl,h=l===zs||l===Hs;if(c||h){let f=e.get(a);const u=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return t===null&&(t=new Tu(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const d=a.image;return c&&d&&d.height>0||h&&d&&s(d)?(t===null&&(t=new Tu(n)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function dy(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Io("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function py(n,e,t,i){const s={},r=new WeakMap;function o(f){const u=f.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);for(const g in u.morphAttributes){const _=u.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}u.removeEventListener("dispose",o),delete s[u.id];const d=r.get(u);d&&(e.remove(d),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(f,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,t.memory.geometries++),u}function l(f){const u=f.attributes;for(const g in u)e.update(u[g],n.ARRAY_BUFFER);const d=f.morphAttributes;for(const g in d){const _=d[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],n.ARRAY_BUFFER)}}function c(f){const u=[],d=f.index,g=f.attributes.position;let _=0;if(d!==null){const T=d.array;_=d.version;for(let M=0,b=T.length;M<b;M+=3){const O=T[M+0],R=T[M+1],P=T[M+2];u.push(O,R,R,P,P,O)}}else if(g!==void 0){const T=g.array;_=g.version;for(let M=0,b=T.length/3-1;M<b;M+=3){const O=M+0,R=M+1,P=M+2;u.push(O,R,R,P,P,O)}}else return;const m=new(kd(u)?Wd:Gd)(u,1);m.version=_;const p=r.get(f);p&&e.remove(p),r.set(f,m)}function h(f){const u=r.get(f);if(u){const d=f.index;d!==null&&u.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function my(n,e,t){let i;function s(u){i=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,d){n.drawElements(i,d,r,u*o),t.update(d,i,1)}function c(u,d,g){g!==0&&(n.drawElementsInstanced(i,d,r,u*o,g),t.update(d,i,g))}function h(u,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,u,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,i,1)}function f(u,d,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)c(u[p]/o,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,r,u,0,_,0,g);let p=0;for(let T=0;T<g;T++)p+=d[T];for(let T=0;T<_.length;T++)t.update(p,i,_[T])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function gy(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function _y(n,e,t){const i=new WeakMap,s=new lt;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0;let u=i.get(a);if(u===void 0||u.count!==f){let ie=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",ie)};u!==void 0&&u.texture.dispose();const d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],T=a.morphAttributes.color||[];let M=0;d===!0&&(M=1),g===!0&&(M=2),_===!0&&(M=3);let b=a.attributes.position.count*M,O=1;b>e.maxTextureSize&&(O=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const R=new Float32Array(b*O*4*f),P=new Hd(R,b,O,f);P.type=ui,P.needsUpdate=!0;const F=M*4;for(let x=0;x<f;x++){const E=m[x],W=p[x],X=T[x],Z=b*O*4*x;for(let ce=0;ce<E.count;ce++){const H=ce*F;d===!0&&(s.fromBufferAttribute(E,ce),R[Z+H+0]=s.x,R[Z+H+1]=s.y,R[Z+H+2]=s.z,R[Z+H+3]=0),g===!0&&(s.fromBufferAttribute(W,ce),R[Z+H+4]=s.x,R[Z+H+5]=s.y,R[Z+H+6]=s.z,R[Z+H+7]=0),_===!0&&(s.fromBufferAttribute(X,ce),R[Z+H+8]=s.x,R[Z+H+9]=s.y,R[Z+H+10]=s.z,R[Z+H+11]=X.itemSize===4?s.w:1)}}u={count:f,texture:P,size:new Re(b,O)},i.set(a,u),a.addEventListener("dispose",ie)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];const g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function vy(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,h=l.geometry,f=e.get(l,h);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return f}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class Kd extends qt{constructor(e,t,i,s,r,o,a,l,c,h=Ns){if(h!==Ns&&h!==Gs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Ns&&(i=ss),i===void 0&&h===Gs&&(i=Vs),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Yt,this.minFilter=l!==void 0?l:Yt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const $d=new qt,Pu=new Kd(1,1),Jd=new Hd,Zd=new s_,Qd=new qd,Lu=[],Iu=[],Du=new Float32Array(16),Uu=new Float32Array(9),Nu=new Float32Array(4);function js(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Lu[s];if(r===void 0&&(r=new Float32Array(s),Lu[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Rt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ct(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function fa(n,e){let t=Iu[e];t===void 0&&(t=new Int32Array(e),Iu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function xy(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function yy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;n.uniform2fv(this.addr,e),Ct(t,e)}}function My(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Rt(t,e))return;n.uniform3fv(this.addr,e),Ct(t,e)}}function Sy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;n.uniform4fv(this.addr,e),Ct(t,e)}}function by(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,i))return;Nu.set(i),n.uniformMatrix2fv(this.addr,!1,Nu),Ct(t,i)}}function Ey(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,i))return;Uu.set(i),n.uniformMatrix3fv(this.addr,!1,Uu),Ct(t,i)}}function wy(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,i))return;Du.set(i),n.uniformMatrix4fv(this.addr,!1,Du),Ct(t,i)}}function Ty(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Ay(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;n.uniform2iv(this.addr,e),Ct(t,e)}}function Ry(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;n.uniform3iv(this.addr,e),Ct(t,e)}}function Cy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;n.uniform4iv(this.addr,e),Ct(t,e)}}function Py(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Ly(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;n.uniform2uiv(this.addr,e),Ct(t,e)}}function Iy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;n.uniform3uiv(this.addr,e),Ct(t,e)}}function Dy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;n.uniform4uiv(this.addr,e),Ct(t,e)}}function Uy(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Pu.compareFunction=Bd,r=Pu):r=$d,t.setTexture2D(e||r,s)}function Ny(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Zd,s)}function Oy(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Qd,s)}function Fy(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Jd,s)}function By(n){switch(n){case 5126:return xy;case 35664:return yy;case 35665:return My;case 35666:return Sy;case 35674:return by;case 35675:return Ey;case 35676:return wy;case 5124:case 35670:return Ty;case 35667:case 35671:return Ay;case 35668:case 35672:return Ry;case 35669:case 35673:return Cy;case 5125:return Py;case 36294:return Ly;case 36295:return Iy;case 36296:return Dy;case 35678:case 36198:case 36298:case 36306:case 35682:return Uy;case 35679:case 36299:case 36307:return Ny;case 35680:case 36300:case 36308:case 36293:return Oy;case 36289:case 36303:case 36311:case 36292:return Fy}}function ky(n,e){n.uniform1fv(this.addr,e)}function zy(n,e){const t=js(e,this.size,2);n.uniform2fv(this.addr,t)}function Hy(n,e){const t=js(e,this.size,3);n.uniform3fv(this.addr,t)}function Vy(n,e){const t=js(e,this.size,4);n.uniform4fv(this.addr,t)}function Gy(n,e){const t=js(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Wy(n,e){const t=js(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Xy(n,e){const t=js(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Yy(n,e){n.uniform1iv(this.addr,e)}function qy(n,e){n.uniform2iv(this.addr,e)}function jy(n,e){n.uniform3iv(this.addr,e)}function Ky(n,e){n.uniform4iv(this.addr,e)}function $y(n,e){n.uniform1uiv(this.addr,e)}function Jy(n,e){n.uniform2uiv(this.addr,e)}function Zy(n,e){n.uniform3uiv(this.addr,e)}function Qy(n,e){n.uniform4uiv(this.addr,e)}function eM(n,e,t){const i=this.cache,s=e.length,r=fa(t,s);Rt(i,r)||(n.uniform1iv(this.addr,r),Ct(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||$d,r[o])}function tM(n,e,t){const i=this.cache,s=e.length,r=fa(t,s);Rt(i,r)||(n.uniform1iv(this.addr,r),Ct(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Zd,r[o])}function nM(n,e,t){const i=this.cache,s=e.length,r=fa(t,s);Rt(i,r)||(n.uniform1iv(this.addr,r),Ct(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Qd,r[o])}function iM(n,e,t){const i=this.cache,s=e.length,r=fa(t,s);Rt(i,r)||(n.uniform1iv(this.addr,r),Ct(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Jd,r[o])}function sM(n){switch(n){case 5126:return ky;case 35664:return zy;case 35665:return Hy;case 35666:return Vy;case 35674:return Gy;case 35675:return Wy;case 35676:return Xy;case 5124:case 35670:return Yy;case 35667:case 35671:return qy;case 35668:case 35672:return jy;case 35669:case 35673:return Ky;case 5125:return $y;case 36294:return Jy;case 36295:return Zy;case 36296:return Qy;case 35678:case 36198:case 36298:case 36306:case 35682:return eM;case 35679:case 36299:case 36307:return tM;case 35680:case 36300:case 36308:case 36293:return nM;case 36289:case 36303:case 36311:case 36292:return iM}}class rM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=By(t.type)}}class oM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=sM(t.type)}}class aM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const hl=/(\w+)(\])?(\[|\.)?/g;function Ou(n,e){n.seq.push(e),n.map[e.id]=e}function lM(n,e,t){const i=n.name,s=i.length;for(hl.lastIndex=0;;){const r=hl.exec(i),o=hl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Ou(t,c===void 0?new rM(a,n,e):new oM(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new aM(a),Ou(t,f)),t=f}}}class Do{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);lM(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function Fu(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const cM=37297;let hM=0;function uM(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function fM(n){const e=rt.getPrimaries(rt.workingColorSpace),t=rt.getPrimaries(n);let i;switch(e===t?i="":e===jo&&t===qo?i="LinearDisplayP3ToLinearSRGB":e===qo&&t===jo&&(i="LinearSRGBToLinearDisplayP3"),n){case Ui:case ha:return[i,"LinearTransferOETF"];case Qt:case Kc:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Bu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+uM(n.getShaderSource(e),o)}else return s}function dM(n,e){const t=fM(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function pM(n,e){let t;switch(e){case Lg:t="Linear";break;case Ig:t="Reinhard";break;case Dg:t="Cineon";break;case wd:t="ACESFilmic";break;case Ng:t="AgX";break;case Og:t="Neutral";break;case Ug:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const vo=new D;function mM(){rt.getLuminanceCoefficients(vo);const n=vo.x.toFixed(4),e=vo.y.toFixed(4),t=vo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(lr).join(`
`)}function _M(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function vM(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function lr(n){return n!==""}function ku(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function zu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const xM=/^[ \t]*#include +<([\w\d./]+)>/gm;function gc(n){return n.replace(xM,MM)}const yM=new Map;function MM(n,e){let t=je[e];if(t===void 0){const i=yM.get(e);if(i!==void 0)t=je[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return gc(t)}const SM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hu(n){return n.replace(SM,bM)}function bM(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Vu(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function EM(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Vc?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===hg?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ri&&(e="SHADOWMAP_TYPE_VSM"),e}function wM(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case zs:case Hs:e="ENVMAP_TYPE_CUBE";break;case ca:e="ENVMAP_TYPE_CUBE_UV";break}return e}function TM(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Hs:e="ENVMAP_MODE_REFRACTION";break}return e}function AM(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Ed:e="ENVMAP_BLENDING_MULTIPLY";break;case Cg:e="ENVMAP_BLENDING_MIX";break;case Pg:e="ENVMAP_BLENDING_ADD";break}return e}function RM(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function CM(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=EM(t),c=wM(t),h=TM(t),f=AM(t),u=RM(t),d=gM(t),g=_M(r),_=s.createProgram();let m,p,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(lr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(lr).join(`
`),p.length>0&&(p+=`
`)):(m=[Vu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(lr).join(`
`),p=[Vu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ci?"#define TONE_MAPPING":"",t.toneMapping!==Ci?je.tonemapping_pars_fragment:"",t.toneMapping!==Ci?pM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,dM("linearToOutputTexel",t.outputColorSpace),mM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(lr).join(`
`)),o=gc(o),o=ku(o,t),o=zu(o,t),a=gc(a),a=ku(a,t),a=zu(a,t),o=Hu(o),a=Hu(a),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===ru?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ru?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=T+m+o,b=T+p+a,O=Fu(s,s.VERTEX_SHADER,M),R=Fu(s,s.FRAGMENT_SHADER,b);s.attachShader(_,O),s.attachShader(_,R),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function P(E){if(n.debug.checkShaderErrors){const W=s.getProgramInfoLog(_).trim(),X=s.getShaderInfoLog(O).trim(),Z=s.getShaderInfoLog(R).trim();let ce=!0,H=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(ce=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,O,R);else{const se=Bu(s,O,"vertex"),V=Bu(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+W+`
`+se+`
`+V)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(X===""||Z==="")&&(H=!1);H&&(E.diagnostics={runnable:ce,programLog:W,vertexShader:{log:X,prefix:m},fragmentShader:{log:Z,prefix:p}})}s.deleteShader(O),s.deleteShader(R),F=new Do(s,_),ie=vM(s,_)}let F;this.getUniforms=function(){return F===void 0&&P(this),F};let ie;this.getAttributes=function(){return ie===void 0&&P(this),ie};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(_,cM)),x},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=hM++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=O,this.fragmentShader=R,this}let PM=0;class LM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new IM(e),t.set(e,i)),i}}class IM{constructor(e){this.id=PM++,this.code=e,this.usedTimes=0}}function DM(n,e,t,i,s,r,o){const a=new Jc,l=new LM,c=new Set,h=[],f=s.logarithmicDepthBuffer,u=s.reverseDepthBuffer,d=s.vertexTextures;let g=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return c.add(x),x===0?"uv":`uv${x}`}function p(x,E,W,X,Z){const ce=X.fog,H=Z.geometry,se=x.isMeshStandardMaterial?X.environment:null,V=(x.isMeshStandardMaterial?t:e).get(x.envMap||se),ve=V&&V.mapping===ca?V.image.height:null,Se=_[x.type];x.precision!==null&&(g=s.getMaxPrecision(x.precision),g!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",g,"instead."));const be=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ke=be!==void 0?be.length:0;let Je=0;H.morphAttributes.position!==void 0&&(Je=1),H.morphAttributes.normal!==void 0&&(Je=2),H.morphAttributes.color!==void 0&&(Je=3);let G,C,ge,xe;if(Se){const $t=kn[Se];G=$t.vertexShader,C=$t.fragmentShader}else G=x.vertexShader,C=x.fragmentShader,l.update(x),ge=l.getVertexShaderID(x),xe=l.getFragmentShaderID(x);const ne=n.getRenderTarget(),oe=Z.isInstancedMesh===!0,Ye=Z.isBatchedMesh===!0,A=!!x.map,L=!!x.matcap,S=!!V,re=!!x.aoMap,j=!!x.lightMap,J=!!x.bumpMap,te=!!x.normalMap,ae=!!x.displacementMap,Q=!!x.emissiveMap,y=!!x.metalnessMap,v=!!x.roughnessMap,I=x.anisotropy>0,k=x.clearcoat>0,$=x.dispersion>0,q=x.iridescence>0,pe=x.sheen>0,he=x.transmission>0,fe=I&&!!x.anisotropyMap,Fe=k&&!!x.clearcoatMap,ue=k&&!!x.clearcoatNormalMap,Me=k&&!!x.clearcoatRoughnessMap,De=q&&!!x.iridescenceMap,ze=q&&!!x.iridescenceThicknessMap,_e=pe&&!!x.sheenColorMap,We=pe&&!!x.sheenRoughnessMap,Xe=!!x.specularMap,ot=!!x.specularColorMap,U=!!x.specularIntensityMap,Te=he&&!!x.transmissionMap,ee=he&&!!x.thicknessMap,le=!!x.gradientMap,Ee=!!x.alphaMap,Ae=x.alphaTest>0,Ze=!!x.alphaHash,Et=!!x.extensions;let Kt=Ci;x.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Kt=n.toneMapping);const Qe={shaderID:Se,shaderType:x.type,shaderName:x.name,vertexShader:G,fragmentShader:C,defines:x.defines,customVertexShaderID:ge,customFragmentShaderID:xe,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:g,batching:Ye,batchingColor:Ye&&Z._colorsTexture!==null,instancing:oe,instancingColor:oe&&Z.instanceColor!==null,instancingMorph:oe&&Z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ne===null?n.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Ui,alphaToCoverage:!!x.alphaToCoverage,map:A,matcap:L,envMap:S,envMapMode:S&&V.mapping,envMapCubeUVHeight:ve,aoMap:re,lightMap:j,bumpMap:J,normalMap:te,displacementMap:d&&ae,emissiveMap:Q,normalMapObjectSpace:te&&x.normalMapType===zg,normalMapTangentSpace:te&&x.normalMapType===Fd,metalnessMap:y,roughnessMap:v,anisotropy:I,anisotropyMap:fe,clearcoat:k,clearcoatMap:Fe,clearcoatNormalMap:ue,clearcoatRoughnessMap:Me,dispersion:$,iridescence:q,iridescenceMap:De,iridescenceThicknessMap:ze,sheen:pe,sheenColorMap:_e,sheenRoughnessMap:We,specularMap:Xe,specularColorMap:ot,specularIntensityMap:U,transmission:he,transmissionMap:Te,thicknessMap:ee,gradientMap:le,opaque:x.transparent===!1&&x.blending===Us&&x.alphaToCoverage===!1,alphaMap:Ee,alphaTest:Ae,alphaHash:Ze,combine:x.combine,mapUv:A&&m(x.map.channel),aoMapUv:re&&m(x.aoMap.channel),lightMapUv:j&&m(x.lightMap.channel),bumpMapUv:J&&m(x.bumpMap.channel),normalMapUv:te&&m(x.normalMap.channel),displacementMapUv:ae&&m(x.displacementMap.channel),emissiveMapUv:Q&&m(x.emissiveMap.channel),metalnessMapUv:y&&m(x.metalnessMap.channel),roughnessMapUv:v&&m(x.roughnessMap.channel),anisotropyMapUv:fe&&m(x.anisotropyMap.channel),clearcoatMapUv:Fe&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:ue&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&m(x.clearcoatRoughnessMap.channel),iridescenceMapUv:De&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:ze&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:We&&m(x.sheenRoughnessMap.channel),specularMapUv:Xe&&m(x.specularMap.channel),specularColorMapUv:ot&&m(x.specularColorMap.channel),specularIntensityMapUv:U&&m(x.specularIntensityMap.channel),transmissionMapUv:Te&&m(x.transmissionMap.channel),thicknessMapUv:ee&&m(x.thicknessMap.channel),alphaMapUv:Ee&&m(x.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(te||I),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!H.attributes.uv&&(A||Ee),fog:!!ce,useFog:x.fog===!0,fogExp2:!!ce&&ce.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:u,skinning:Z.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:ke,morphTextureStride:Je,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&W.length>0,shadowMapType:n.shadowMap.type,toneMapping:Kt,decodeVideoTexture:A&&x.map.isVideoTexture===!0&&rt.getTransfer(x.map.colorSpace)===gt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===en,flipSided:x.side===tn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Et&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Et&&x.extensions.multiDraw===!0||Ye)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Qe.vertexUv1s=c.has(1),Qe.vertexUv2s=c.has(2),Qe.vertexUv3s=c.has(3),c.clear(),Qe}function T(x){const E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(const W in x.defines)E.push(W),E.push(x.defines[W]);return x.isRawShaderMaterial===!1&&(M(E,x),b(E,x),E.push(n.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function M(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function b(x,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),x.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.alphaToCoverage&&a.enable(20),x.push(a.mask)}function O(x){const E=_[x.type];let W;if(E){const X=kn[E];W=g_.clone(X.uniforms)}else W=x.uniforms;return W}function R(x,E){let W;for(let X=0,Z=h.length;X<Z;X++){const ce=h[X];if(ce.cacheKey===E){W=ce,++W.usedTimes;break}}return W===void 0&&(W=new CM(n,E,x,r),h.push(W)),W}function P(x){if(--x.usedTimes===0){const E=h.indexOf(x);h[E]=h[h.length-1],h.pop(),x.destroy()}}function F(x){l.remove(x)}function ie(){l.dispose()}return{getParameters:p,getProgramCacheKey:T,getUniforms:O,acquireProgram:R,releaseProgram:P,releaseShaderCache:F,programs:h,dispose:ie}}function UM(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function NM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Gu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Wu(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(f,u,d,g,_,m){let p=n[e];return p===void 0?(p={id:f.id,object:f,geometry:u,material:d,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},n[e]=p):(p.id=f.id,p.object=f,p.geometry=u,p.material=d,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=_,p.group=m),e++,p}function a(f,u,d,g,_,m){const p=o(f,u,d,g,_,m);d.transmission>0?i.push(p):d.transparent===!0?s.push(p):t.push(p)}function l(f,u,d,g,_,m){const p=o(f,u,d,g,_,m);d.transmission>0?i.unshift(p):d.transparent===!0?s.unshift(p):t.unshift(p)}function c(f,u){t.length>1&&t.sort(f||NM),i.length>1&&i.sort(u||Gu),s.length>1&&s.sort(u||Gu)}function h(){for(let f=e,u=n.length;f<u;f++){const d=n[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function OM(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new Wu,n.set(i,[o])):s>=r.length?(o=new Wu,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function FM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new $e};break;case"SpotLight":t={position:new D,direction:new D,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new D,halfWidth:new D,halfHeight:new D};break}return n[e.id]=t,t}}}function BM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let kM=0;function zM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function HM(n){const e=new FM,t=BM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new D);const s=new D,r=new dt,o=new dt;function a(c){let h=0,f=0,u=0;for(let ie=0;ie<9;ie++)i.probe[ie].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,T=0,M=0,b=0,O=0,R=0,P=0;c.sort(zM);for(let ie=0,x=c.length;ie<x;ie++){const E=c[ie],W=E.color,X=E.intensity,Z=E.distance,ce=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)h+=W.r*X,f+=W.g*X,u+=W.b*X;else if(E.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(E.sh.coefficients[H],X);P++}else if(E.isDirectionalLight){const H=e.get(E);if(H.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const se=E.shadow,V=t.get(E);V.shadowIntensity=se.intensity,V.shadowBias=se.bias,V.shadowNormalBias=se.normalBias,V.shadowRadius=se.radius,V.shadowMapSize=se.mapSize,i.directionalShadow[d]=V,i.directionalShadowMap[d]=ce,i.directionalShadowMatrix[d]=E.shadow.matrix,T++}i.directional[d]=H,d++}else if(E.isSpotLight){const H=e.get(E);H.position.setFromMatrixPosition(E.matrixWorld),H.color.copy(W).multiplyScalar(X),H.distance=Z,H.coneCos=Math.cos(E.angle),H.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),H.decay=E.decay,i.spot[_]=H;const se=E.shadow;if(E.map&&(i.spotLightMap[O]=E.map,O++,se.updateMatrices(E),E.castShadow&&R++),i.spotLightMatrix[_]=se.matrix,E.castShadow){const V=t.get(E);V.shadowIntensity=se.intensity,V.shadowBias=se.bias,V.shadowNormalBias=se.normalBias,V.shadowRadius=se.radius,V.shadowMapSize=se.mapSize,i.spotShadow[_]=V,i.spotShadowMap[_]=ce,b++}_++}else if(E.isRectAreaLight){const H=e.get(E);H.color.copy(W).multiplyScalar(X),H.halfWidth.set(E.width*.5,0,0),H.halfHeight.set(0,E.height*.5,0),i.rectArea[m]=H,m++}else if(E.isPointLight){const H=e.get(E);if(H.color.copy(E.color).multiplyScalar(E.intensity),H.distance=E.distance,H.decay=E.decay,E.castShadow){const se=E.shadow,V=t.get(E);V.shadowIntensity=se.intensity,V.shadowBias=se.bias,V.shadowNormalBias=se.normalBias,V.shadowRadius=se.radius,V.shadowMapSize=se.mapSize,V.shadowCameraNear=se.camera.near,V.shadowCameraFar=se.camera.far,i.pointShadow[g]=V,i.pointShadowMap[g]=ce,i.pointShadowMatrix[g]=E.shadow.matrix,M++}i.point[g]=H,g++}else if(E.isHemisphereLight){const H=e.get(E);H.skyColor.copy(E.color).multiplyScalar(X),H.groundColor.copy(E.groundColor).multiplyScalar(X),i.hemi[p]=H,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ye.LTC_FLOAT_1,i.rectAreaLTC2=ye.LTC_FLOAT_2):(i.rectAreaLTC1=ye.LTC_HALF_1,i.rectAreaLTC2=ye.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=u;const F=i.hash;(F.directionalLength!==d||F.pointLength!==g||F.spotLength!==_||F.rectAreaLength!==m||F.hemiLength!==p||F.numDirectionalShadows!==T||F.numPointShadows!==M||F.numSpotShadows!==b||F.numSpotMaps!==O||F.numLightProbes!==P)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=b+O-R,i.spotLightMap.length=O,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=P,F.directionalLength=d,F.pointLength=g,F.spotLength=_,F.rectAreaLength=m,F.hemiLength=p,F.numDirectionalShadows=T,F.numPointShadows=M,F.numSpotShadows=b,F.numSpotMaps=O,F.numLightProbes=P,i.version=kM++)}function l(c,h){let f=0,u=0,d=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,T=c.length;p<T;p++){const M=c[p];if(M.isDirectionalLight){const b=i.directional[f];b.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),f++}else if(M.isSpotLight){const b=i.spot[d];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),d++}else if(M.isRectAreaLight){const b=i.rectArea[g];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),b.halfWidth.set(M.width*.5,0,0),b.halfHeight.set(0,M.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){const b=i.point[u];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(m),u++}else if(M.isHemisphereLight){const b=i.hemi[_];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function Xu(n){const e=new HM(n),t=[],i=[];function s(h){c.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function o(h){i.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function VM(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Xu(n),e.set(s,[a])):r>=o.length?(a=new Xu(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class GM extends ls{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class WM extends ls{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const XM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,YM=`uniform sampler2D shadow_pass;
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
}`;function qM(n,e,t){let i=new Zc;const s=new Re,r=new Re,o=new lt,a=new GM({depthPacking:kg}),l=new WM,c={},h=t.maxTextureSize,f={[Ii]:tn,[tn]:Ii,[en]:en},u=new Di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Re},radius:{value:4}},vertexShader:XM,fragmentShader:YM}),d=u.clone();d.defines.HORIZONTAL_PASS=1;const g=new jt;g.setAttribute("position",new hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ft(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vc;let p=this.type;this.render=function(R,P,F){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const ie=n.getRenderTarget(),x=n.getActiveCubeFace(),E=n.getActiveMipmapLevel(),W=n.state;W.setBlending(Ri),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const X=p!==ri&&this.type===ri,Z=p===ri&&this.type!==ri;for(let ce=0,H=R.length;ce<H;ce++){const se=R[ce],V=se.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",se,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const ve=V.getFrameExtents();if(s.multiply(ve),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ve.x),s.x=r.x*ve.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ve.y),s.y=r.y*ve.y,V.mapSize.y=r.y)),V.map===null||X===!0||Z===!0){const be=this.type!==ri?{minFilter:Yt,magFilter:Yt}:{};V.map!==null&&V.map.dispose(),V.map=new rs(s.x,s.y,be),V.map.texture.name=se.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();const Se=V.getViewportCount();for(let be=0;be<Se;be++){const ke=V.getViewport(be);o.set(r.x*ke.x,r.y*ke.y,r.x*ke.z,r.y*ke.w),W.viewport(o),V.updateMatrices(se,be),i=V.getFrustum(),b(P,F,V.camera,se,this.type)}V.isPointLightShadow!==!0&&this.type===ri&&T(V,F),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(ie,x,E)};function T(R,P){const F=e.update(_);u.defines.VSM_SAMPLES!==R.blurSamples&&(u.defines.VSM_SAMPLES=R.blurSamples,d.defines.VSM_SAMPLES=R.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new rs(s.x,s.y)),u.uniforms.shadow_pass.value=R.map.texture,u.uniforms.resolution.value=R.mapSize,u.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(P,null,F,u,_,null),d.uniforms.shadow_pass.value=R.mapPass.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(P,null,F,d,_,null)}function M(R,P,F,ie){let x=null;const E=F.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(E!==void 0)x=E;else if(x=F.isPointLight===!0?l:a,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const W=x.uuid,X=P.uuid;let Z=c[W];Z===void 0&&(Z={},c[W]=Z);let ce=Z[X];ce===void 0&&(ce=x.clone(),Z[X]=ce,P.addEventListener("dispose",O)),x=ce}if(x.visible=P.visible,x.wireframe=P.wireframe,ie===ri?x.side=P.shadowSide!==null?P.shadowSide:P.side:x.side=P.shadowSide!==null?P.shadowSide:f[P.side],x.alphaMap=P.alphaMap,x.alphaTest=P.alphaTest,x.map=P.map,x.clipShadows=P.clipShadows,x.clippingPlanes=P.clippingPlanes,x.clipIntersection=P.clipIntersection,x.displacementMap=P.displacementMap,x.displacementScale=P.displacementScale,x.displacementBias=P.displacementBias,x.wireframeLinewidth=P.wireframeLinewidth,x.linewidth=P.linewidth,F.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const W=n.properties.get(x);W.light=F}return x}function b(R,P,F,ie,x){if(R.visible===!1)return;if(R.layers.test(P.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&x===ri)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,R.matrixWorld);const X=e.update(R),Z=R.material;if(Array.isArray(Z)){const ce=X.groups;for(let H=0,se=ce.length;H<se;H++){const V=ce[H],ve=Z[V.materialIndex];if(ve&&ve.visible){const Se=M(R,ve,ie,x);R.onBeforeShadow(n,R,P,F,X,Se,V),n.renderBufferDirect(F,null,X,Se,R,V),R.onAfterShadow(n,R,P,F,X,Se,V)}}}else if(Z.visible){const ce=M(R,Z,ie,x);R.onBeforeShadow(n,R,P,F,X,ce,null),n.renderBufferDirect(F,null,X,ce,R,null),R.onAfterShadow(n,R,P,F,X,ce,null)}}const W=R.children;for(let X=0,Z=W.length;X<Z;X++)b(W[X],P,F,ie,x)}function O(R){R.target.removeEventListener("dispose",O);for(const F in c){const ie=c[F],x=R.target.uuid;x in ie&&(ie[x].dispose(),delete ie[x])}}}const jM={[Il]:Dl,[Ul]:Fl,[Nl]:Bl,[ks]:Ol,[Dl]:Il,[Fl]:Ul,[Bl]:Nl,[Ol]:ks};function KM(n){function e(){let U=!1;const Te=new lt;let ee=null;const le=new lt(0,0,0,0);return{setMask:function(Ee){ee!==Ee&&!U&&(n.colorMask(Ee,Ee,Ee,Ee),ee=Ee)},setLocked:function(Ee){U=Ee},setClear:function(Ee,Ae,Ze,Et,Kt){Kt===!0&&(Ee*=Et,Ae*=Et,Ze*=Et),Te.set(Ee,Ae,Ze,Et),le.equals(Te)===!1&&(n.clearColor(Ee,Ae,Ze,Et),le.copy(Te))},reset:function(){U=!1,ee=null,le.set(-1,0,0,0)}}}function t(){let U=!1,Te=!1,ee=null,le=null,Ee=null;return{setReversed:function(Ae){Te=Ae},setTest:function(Ae){Ae?ge(n.DEPTH_TEST):xe(n.DEPTH_TEST)},setMask:function(Ae){ee!==Ae&&!U&&(n.depthMask(Ae),ee=Ae)},setFunc:function(Ae){if(Te&&(Ae=jM[Ae]),le!==Ae){switch(Ae){case Il:n.depthFunc(n.NEVER);break;case Dl:n.depthFunc(n.ALWAYS);break;case Ul:n.depthFunc(n.LESS);break;case ks:n.depthFunc(n.LEQUAL);break;case Nl:n.depthFunc(n.EQUAL);break;case Ol:n.depthFunc(n.GEQUAL);break;case Fl:n.depthFunc(n.GREATER);break;case Bl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}le=Ae}},setLocked:function(Ae){U=Ae},setClear:function(Ae){Ee!==Ae&&(n.clearDepth(Ae),Ee=Ae)},reset:function(){U=!1,ee=null,le=null,Ee=null}}}function i(){let U=!1,Te=null,ee=null,le=null,Ee=null,Ae=null,Ze=null,Et=null,Kt=null;return{setTest:function(Qe){U||(Qe?ge(n.STENCIL_TEST):xe(n.STENCIL_TEST))},setMask:function(Qe){Te!==Qe&&!U&&(n.stencilMask(Qe),Te=Qe)},setFunc:function(Qe,$t,Jn){(ee!==Qe||le!==$t||Ee!==Jn)&&(n.stencilFunc(Qe,$t,Jn),ee=Qe,le=$t,Ee=Jn)},setOp:function(Qe,$t,Jn){(Ae!==Qe||Ze!==$t||Et!==Jn)&&(n.stencilOp(Qe,$t,Jn),Ae=Qe,Ze=$t,Et=Jn)},setLocked:function(Qe){U=Qe},setClear:function(Qe){Kt!==Qe&&(n.clearStencil(Qe),Kt=Qe)},reset:function(){U=!1,Te=null,ee=null,le=null,Ee=null,Ae=null,Ze=null,Et=null,Kt=null}}}const s=new e,r=new t,o=new i,a=new WeakMap,l=new WeakMap;let c={},h={},f=new WeakMap,u=[],d=null,g=!1,_=null,m=null,p=null,T=null,M=null,b=null,O=null,R=new $e(0,0,0),P=0,F=!1,ie=null,x=null,E=null,W=null,X=null;const Z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ce=!1,H=0;const se=n.getParameter(n.VERSION);se.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(se)[1]),ce=H>=1):se.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(se)[1]),ce=H>=2);let V=null,ve={};const Se=n.getParameter(n.SCISSOR_BOX),be=n.getParameter(n.VIEWPORT),ke=new lt().fromArray(Se),Je=new lt().fromArray(be);function G(U,Te,ee,le){const Ee=new Uint8Array(4),Ae=n.createTexture();n.bindTexture(U,Ae),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ze=0;Ze<ee;Ze++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(Te,0,n.RGBA,1,1,le,0,n.RGBA,n.UNSIGNED_BYTE,Ee):n.texImage2D(Te+Ze,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ee);return Ae}const C={};C[n.TEXTURE_2D]=G(n.TEXTURE_2D,n.TEXTURE_2D,1),C[n.TEXTURE_CUBE_MAP]=G(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),C[n.TEXTURE_2D_ARRAY]=G(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),C[n.TEXTURE_3D]=G(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),ge(n.DEPTH_TEST),r.setFunc(ks),j(!1),J(Qh),ge(n.CULL_FACE),S(Ri);function ge(U){c[U]!==!0&&(n.enable(U),c[U]=!0)}function xe(U){c[U]!==!1&&(n.disable(U),c[U]=!1)}function ne(U,Te){return h[U]!==Te?(n.bindFramebuffer(U,Te),h[U]=Te,U===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=Te),U===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=Te),!0):!1}function oe(U,Te){let ee=u,le=!1;if(U){ee=f.get(Te),ee===void 0&&(ee=[],f.set(Te,ee));const Ee=U.textures;if(ee.length!==Ee.length||ee[0]!==n.COLOR_ATTACHMENT0){for(let Ae=0,Ze=Ee.length;Ae<Ze;Ae++)ee[Ae]=n.COLOR_ATTACHMENT0+Ae;ee.length=Ee.length,le=!0}}else ee[0]!==n.BACK&&(ee[0]=n.BACK,le=!0);le&&n.drawBuffers(ee)}function Ye(U){return d!==U?(n.useProgram(U),d=U,!0):!1}const A={[ji]:n.FUNC_ADD,[fg]:n.FUNC_SUBTRACT,[dg]:n.FUNC_REVERSE_SUBTRACT};A[pg]=n.MIN,A[mg]=n.MAX;const L={[gg]:n.ZERO,[_g]:n.ONE,[vg]:n.SRC_COLOR,[Pl]:n.SRC_ALPHA,[Eg]:n.SRC_ALPHA_SATURATE,[Sg]:n.DST_COLOR,[yg]:n.DST_ALPHA,[xg]:n.ONE_MINUS_SRC_COLOR,[Ll]:n.ONE_MINUS_SRC_ALPHA,[bg]:n.ONE_MINUS_DST_COLOR,[Mg]:n.ONE_MINUS_DST_ALPHA,[wg]:n.CONSTANT_COLOR,[Tg]:n.ONE_MINUS_CONSTANT_COLOR,[Ag]:n.CONSTANT_ALPHA,[Rg]:n.ONE_MINUS_CONSTANT_ALPHA};function S(U,Te,ee,le,Ee,Ae,Ze,Et,Kt,Qe){if(U===Ri){g===!0&&(xe(n.BLEND),g=!1);return}if(g===!1&&(ge(n.BLEND),g=!0),U!==ug){if(U!==_||Qe!==F){if((m!==ji||M!==ji)&&(n.blendEquation(n.FUNC_ADD),m=ji,M=ji),Qe)switch(U){case Us:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case eu:n.blendFunc(n.ONE,n.ONE);break;case tu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case nu:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Us:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case eu:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case tu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case nu:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}p=null,T=null,b=null,O=null,R.set(0,0,0),P=0,_=U,F=Qe}return}Ee=Ee||Te,Ae=Ae||ee,Ze=Ze||le,(Te!==m||Ee!==M)&&(n.blendEquationSeparate(A[Te],A[Ee]),m=Te,M=Ee),(ee!==p||le!==T||Ae!==b||Ze!==O)&&(n.blendFuncSeparate(L[ee],L[le],L[Ae],L[Ze]),p=ee,T=le,b=Ae,O=Ze),(Et.equals(R)===!1||Kt!==P)&&(n.blendColor(Et.r,Et.g,Et.b,Kt),R.copy(Et),P=Kt),_=U,F=!1}function re(U,Te){U.side===en?xe(n.CULL_FACE):ge(n.CULL_FACE);let ee=U.side===tn;Te&&(ee=!ee),j(ee),U.blending===Us&&U.transparent===!1?S(Ri):S(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),r.setFunc(U.depthFunc),r.setTest(U.depthTest),r.setMask(U.depthWrite),s.setMask(U.colorWrite);const le=U.stencilWrite;o.setTest(le),le&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),ae(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ge(n.SAMPLE_ALPHA_TO_COVERAGE):xe(n.SAMPLE_ALPHA_TO_COVERAGE)}function j(U){ie!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),ie=U)}function J(U){U!==lg?(ge(n.CULL_FACE),U!==x&&(U===Qh?n.cullFace(n.BACK):U===cg?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):xe(n.CULL_FACE),x=U}function te(U){U!==E&&(ce&&n.lineWidth(U),E=U)}function ae(U,Te,ee){U?(ge(n.POLYGON_OFFSET_FILL),(W!==Te||X!==ee)&&(n.polygonOffset(Te,ee),W=Te,X=ee)):xe(n.POLYGON_OFFSET_FILL)}function Q(U){U?ge(n.SCISSOR_TEST):xe(n.SCISSOR_TEST)}function y(U){U===void 0&&(U=n.TEXTURE0+Z-1),V!==U&&(n.activeTexture(U),V=U)}function v(U,Te,ee){ee===void 0&&(V===null?ee=n.TEXTURE0+Z-1:ee=V);let le=ve[ee];le===void 0&&(le={type:void 0,texture:void 0},ve[ee]=le),(le.type!==U||le.texture!==Te)&&(V!==ee&&(n.activeTexture(ee),V=ee),n.bindTexture(U,Te||C[U]),le.type=U,le.texture=Te)}function I(){const U=ve[V];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function k(){try{n.compressedTexImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function $(){try{n.compressedTexImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function q(){try{n.texSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function pe(){try{n.texSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function he(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function fe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Fe(){try{n.texStorage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ue(){try{n.texStorage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Me(){try{n.texImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function De(){try{n.texImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ze(U){ke.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),ke.copy(U))}function _e(U){Je.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),Je.copy(U))}function We(U,Te){let ee=l.get(Te);ee===void 0&&(ee=new WeakMap,l.set(Te,ee));let le=ee.get(U);le===void 0&&(le=n.getUniformBlockIndex(Te,U.name),ee.set(U,le))}function Xe(U,Te){const le=l.get(Te).get(U);a.get(Te)!==le&&(n.uniformBlockBinding(Te,le,U.__bindingPointIndex),a.set(Te,le))}function ot(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},V=null,ve={},h={},f=new WeakMap,u=[],d=null,g=!1,_=null,m=null,p=null,T=null,M=null,b=null,O=null,R=new $e(0,0,0),P=0,F=!1,ie=null,x=null,E=null,W=null,X=null,ke.set(0,0,n.canvas.width,n.canvas.height),Je.set(0,0,n.canvas.width,n.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:ge,disable:xe,bindFramebuffer:ne,drawBuffers:oe,useProgram:Ye,setBlending:S,setMaterial:re,setFlipSided:j,setCullFace:J,setLineWidth:te,setPolygonOffset:ae,setScissorTest:Q,activeTexture:y,bindTexture:v,unbindTexture:I,compressedTexImage2D:k,compressedTexImage3D:$,texImage2D:Me,texImage3D:De,updateUBOMapping:We,uniformBlockBinding:Xe,texStorage2D:Fe,texStorage3D:ue,texSubImage2D:q,texSubImage3D:pe,compressedTexSubImage2D:he,compressedTexSubImage3D:fe,scissor:ze,viewport:_e,reset:ot}}function Yu(n,e,t,i){const s=$M(i);switch(t){case Pd:return n*e;case Id:return n*e;case Dd:return n*e*2;case Ud:return n*e/s.components*s.byteLength;case Yc:return n*e/s.components*s.byteLength;case Nd:return n*e*2/s.components*s.byteLength;case qc:return n*e*2/s.components*s.byteLength;case Ld:return n*e*3/s.components*s.byteLength;case An:return n*e*4/s.components*s.byteLength;case jc:return n*e*4/s.components*s.byteLength;case Ao:case Ro:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Co:case Po:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Wl:case Yl:return Math.max(n,16)*Math.max(e,8)/4;case Gl:case Xl:return Math.max(n,8)*Math.max(e,8)/2;case ql:case jl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Kl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case $l:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Jl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Zl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Ql:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case ec:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case tc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case nc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case ic:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case sc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case rc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case oc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case ac:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case lc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case cc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Lo:case hc:case uc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Od:case fc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case dc:case pc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function $M(n){switch(n){case di:case Ad:return{byteLength:1,components:1};case Pr:case Rd:case zr:return{byteLength:2,components:1};case Wc:case Xc:return{byteLength:2,components:4};case ss:case Gc:case ui:return{byteLength:4,components:1};case Cd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function JM(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Re,h=new WeakMap;let f;const u=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(y,v){return d?new OffscreenCanvas(y,v):$o("canvas")}function _(y,v,I){let k=1;const $=Q(y);if(($.width>I||$.height>I)&&(k=I/Math.max($.width,$.height)),k<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const q=Math.floor(k*$.width),pe=Math.floor(k*$.height);f===void 0&&(f=g(q,pe));const he=v?g(q,pe):f;return he.width=q,he.height=pe,he.getContext("2d").drawImage(y,0,0,q,pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+q+"x"+pe+")."),he}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),y;return y}function m(y){return y.generateMipmaps&&y.minFilter!==Yt&&y.minFilter!==wn}function p(y){n.generateMipmap(y)}function T(y,v,I,k,$=!1){if(y!==null){if(n[y]!==void 0)return n[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let q=v;if(v===n.RED&&(I===n.FLOAT&&(q=n.R32F),I===n.HALF_FLOAT&&(q=n.R16F),I===n.UNSIGNED_BYTE&&(q=n.R8)),v===n.RED_INTEGER&&(I===n.UNSIGNED_BYTE&&(q=n.R8UI),I===n.UNSIGNED_SHORT&&(q=n.R16UI),I===n.UNSIGNED_INT&&(q=n.R32UI),I===n.BYTE&&(q=n.R8I),I===n.SHORT&&(q=n.R16I),I===n.INT&&(q=n.R32I)),v===n.RG&&(I===n.FLOAT&&(q=n.RG32F),I===n.HALF_FLOAT&&(q=n.RG16F),I===n.UNSIGNED_BYTE&&(q=n.RG8)),v===n.RG_INTEGER&&(I===n.UNSIGNED_BYTE&&(q=n.RG8UI),I===n.UNSIGNED_SHORT&&(q=n.RG16UI),I===n.UNSIGNED_INT&&(q=n.RG32UI),I===n.BYTE&&(q=n.RG8I),I===n.SHORT&&(q=n.RG16I),I===n.INT&&(q=n.RG32I)),v===n.RGB_INTEGER&&(I===n.UNSIGNED_BYTE&&(q=n.RGB8UI),I===n.UNSIGNED_SHORT&&(q=n.RGB16UI),I===n.UNSIGNED_INT&&(q=n.RGB32UI),I===n.BYTE&&(q=n.RGB8I),I===n.SHORT&&(q=n.RGB16I),I===n.INT&&(q=n.RGB32I)),v===n.RGBA_INTEGER&&(I===n.UNSIGNED_BYTE&&(q=n.RGBA8UI),I===n.UNSIGNED_SHORT&&(q=n.RGBA16UI),I===n.UNSIGNED_INT&&(q=n.RGBA32UI),I===n.BYTE&&(q=n.RGBA8I),I===n.SHORT&&(q=n.RGBA16I),I===n.INT&&(q=n.RGBA32I)),v===n.RGB&&I===n.UNSIGNED_INT_5_9_9_9_REV&&(q=n.RGB9_E5),v===n.RGBA){const pe=$?Yo:rt.getTransfer(k);I===n.FLOAT&&(q=n.RGBA32F),I===n.HALF_FLOAT&&(q=n.RGBA16F),I===n.UNSIGNED_BYTE&&(q=pe===gt?n.SRGB8_ALPHA8:n.RGBA8),I===n.UNSIGNED_SHORT_4_4_4_4&&(q=n.RGBA4),I===n.UNSIGNED_SHORT_5_5_5_1&&(q=n.RGB5_A1)}return(q===n.R16F||q===n.R32F||q===n.RG16F||q===n.RG32F||q===n.RGBA16F||q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function M(y,v){let I;return y?v===null||v===ss||v===Vs?I=n.DEPTH24_STENCIL8:v===ui?I=n.DEPTH32F_STENCIL8:v===Pr&&(I=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===ss||v===Vs?I=n.DEPTH_COMPONENT24:v===ui?I=n.DEPTH_COMPONENT32F:v===Pr&&(I=n.DEPTH_COMPONENT16),I}function b(y,v){return m(y)===!0||y.isFramebufferTexture&&y.minFilter!==Yt&&y.minFilter!==wn?Math.log2(Math.max(v.width,v.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?v.mipmaps.length:1}function O(y){const v=y.target;v.removeEventListener("dispose",O),P(v),v.isVideoTexture&&h.delete(v)}function R(y){const v=y.target;v.removeEventListener("dispose",R),ie(v)}function P(y){const v=i.get(y);if(v.__webglInit===void 0)return;const I=y.source,k=u.get(I);if(k){const $=k[v.__cacheKey];$.usedTimes--,$.usedTimes===0&&F(y),Object.keys(k).length===0&&u.delete(I)}i.remove(y)}function F(y){const v=i.get(y);n.deleteTexture(v.__webglTexture);const I=y.source,k=u.get(I);delete k[v.__cacheKey],o.memory.textures--}function ie(y){const v=i.get(y);if(y.depthTexture&&y.depthTexture.dispose(),y.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(v.__webglFramebuffer[k]))for(let $=0;$<v.__webglFramebuffer[k].length;$++)n.deleteFramebuffer(v.__webglFramebuffer[k][$]);else n.deleteFramebuffer(v.__webglFramebuffer[k]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[k])}else{if(Array.isArray(v.__webglFramebuffer))for(let k=0;k<v.__webglFramebuffer.length;k++)n.deleteFramebuffer(v.__webglFramebuffer[k]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let k=0;k<v.__webglColorRenderbuffer.length;k++)v.__webglColorRenderbuffer[k]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[k]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const I=y.textures;for(let k=0,$=I.length;k<$;k++){const q=i.get(I[k]);q.__webglTexture&&(n.deleteTexture(q.__webglTexture),o.memory.textures--),i.remove(I[k])}i.remove(y)}let x=0;function E(){x=0}function W(){const y=x;return y>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+s.maxTextures),x+=1,y}function X(y){const v=[];return v.push(y.wrapS),v.push(y.wrapT),v.push(y.wrapR||0),v.push(y.magFilter),v.push(y.minFilter),v.push(y.anisotropy),v.push(y.internalFormat),v.push(y.format),v.push(y.type),v.push(y.generateMipmaps),v.push(y.premultiplyAlpha),v.push(y.flipY),v.push(y.unpackAlignment),v.push(y.colorSpace),v.join()}function Z(y,v){const I=i.get(y);if(y.isVideoTexture&&te(y),y.isRenderTargetTexture===!1&&y.version>0&&I.__version!==y.version){const k=y.image;if(k===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Je(I,y,v);return}}t.bindTexture(n.TEXTURE_2D,I.__webglTexture,n.TEXTURE0+v)}function ce(y,v){const I=i.get(y);if(y.version>0&&I.__version!==y.version){Je(I,y,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,I.__webglTexture,n.TEXTURE0+v)}function H(y,v){const I=i.get(y);if(y.version>0&&I.__version!==y.version){Je(I,y,v);return}t.bindTexture(n.TEXTURE_3D,I.__webglTexture,n.TEXTURE0+v)}function se(y,v){const I=i.get(y);if(y.version>0&&I.__version!==y.version){G(I,y,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+v)}const V={[Hl]:n.REPEAT,[Zi]:n.CLAMP_TO_EDGE,[Vl]:n.MIRRORED_REPEAT},ve={[Yt]:n.NEAREST,[Fg]:n.NEAREST_MIPMAP_NEAREST,[Jr]:n.NEAREST_MIPMAP_LINEAR,[wn]:n.LINEAR,[Ua]:n.LINEAR_MIPMAP_NEAREST,[Qi]:n.LINEAR_MIPMAP_LINEAR},Se={[Hg]:n.NEVER,[qg]:n.ALWAYS,[Vg]:n.LESS,[Bd]:n.LEQUAL,[Gg]:n.EQUAL,[Yg]:n.GEQUAL,[Wg]:n.GREATER,[Xg]:n.NOTEQUAL};function be(y,v){if(v.type===ui&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===wn||v.magFilter===Ua||v.magFilter===Jr||v.magFilter===Qi||v.minFilter===wn||v.minFilter===Ua||v.minFilter===Jr||v.minFilter===Qi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(y,n.TEXTURE_WRAP_S,V[v.wrapS]),n.texParameteri(y,n.TEXTURE_WRAP_T,V[v.wrapT]),(y===n.TEXTURE_3D||y===n.TEXTURE_2D_ARRAY)&&n.texParameteri(y,n.TEXTURE_WRAP_R,V[v.wrapR]),n.texParameteri(y,n.TEXTURE_MAG_FILTER,ve[v.magFilter]),n.texParameteri(y,n.TEXTURE_MIN_FILTER,ve[v.minFilter]),v.compareFunction&&(n.texParameteri(y,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(y,n.TEXTURE_COMPARE_FUNC,Se[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Yt||v.minFilter!==Jr&&v.minFilter!==Qi||v.type===ui&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const I=e.get("EXT_texture_filter_anisotropic");n.texParameterf(y,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function ke(y,v){let I=!1;y.__webglInit===void 0&&(y.__webglInit=!0,v.addEventListener("dispose",O));const k=v.source;let $=u.get(k);$===void 0&&($={},u.set(k,$));const q=X(v);if(q!==y.__cacheKey){$[q]===void 0&&($[q]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,I=!0),$[q].usedTimes++;const pe=$[y.__cacheKey];pe!==void 0&&($[y.__cacheKey].usedTimes--,pe.usedTimes===0&&F(v)),y.__cacheKey=q,y.__webglTexture=$[q].texture}return I}function Je(y,v,I){let k=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(k=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(k=n.TEXTURE_3D);const $=ke(y,v),q=v.source;t.bindTexture(k,y.__webglTexture,n.TEXTURE0+I);const pe=i.get(q);if(q.version!==pe.__version||$===!0){t.activeTexture(n.TEXTURE0+I);const he=rt.getPrimaries(rt.workingColorSpace),fe=v.colorSpace===wi?null:rt.getPrimaries(v.colorSpace),Fe=v.colorSpace===wi||he===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);let ue=_(v.image,!1,s.maxTextureSize);ue=ae(v,ue);const Me=r.convert(v.format,v.colorSpace),De=r.convert(v.type);let ze=T(v.internalFormat,Me,De,v.colorSpace,v.isVideoTexture);be(k,v);let _e;const We=v.mipmaps,Xe=v.isVideoTexture!==!0,ot=pe.__version===void 0||$===!0,U=q.dataReady,Te=b(v,ue);if(v.isDepthTexture)ze=M(v.format===Gs,v.type),ot&&(Xe?t.texStorage2D(n.TEXTURE_2D,1,ze,ue.width,ue.height):t.texImage2D(n.TEXTURE_2D,0,ze,ue.width,ue.height,0,Me,De,null));else if(v.isDataTexture)if(We.length>0){Xe&&ot&&t.texStorage2D(n.TEXTURE_2D,Te,ze,We[0].width,We[0].height);for(let ee=0,le=We.length;ee<le;ee++)_e=We[ee],Xe?U&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,_e.width,_e.height,Me,De,_e.data):t.texImage2D(n.TEXTURE_2D,ee,ze,_e.width,_e.height,0,Me,De,_e.data);v.generateMipmaps=!1}else Xe?(ot&&t.texStorage2D(n.TEXTURE_2D,Te,ze,ue.width,ue.height),U&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ue.width,ue.height,Me,De,ue.data)):t.texImage2D(n.TEXTURE_2D,0,ze,ue.width,ue.height,0,Me,De,ue.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Xe&&ot&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Te,ze,We[0].width,We[0].height,ue.depth);for(let ee=0,le=We.length;ee<le;ee++)if(_e=We[ee],v.format!==An)if(Me!==null)if(Xe){if(U)if(v.layerUpdates.size>0){const Ee=Yu(_e.width,_e.height,v.format,v.type);for(const Ae of v.layerUpdates){const Ze=_e.data.subarray(Ae*Ee/_e.data.BYTES_PER_ELEMENT,(Ae+1)*Ee/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,Ae,_e.width,_e.height,1,Me,Ze,0,0)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,0,_e.width,_e.height,ue.depth,Me,_e.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ee,ze,_e.width,_e.height,ue.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xe?U&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,0,_e.width,_e.height,ue.depth,Me,De,_e.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ee,ze,_e.width,_e.height,ue.depth,0,Me,De,_e.data)}else{Xe&&ot&&t.texStorage2D(n.TEXTURE_2D,Te,ze,We[0].width,We[0].height);for(let ee=0,le=We.length;ee<le;ee++)_e=We[ee],v.format!==An?Me!==null?Xe?U&&t.compressedTexSubImage2D(n.TEXTURE_2D,ee,0,0,_e.width,_e.height,Me,_e.data):t.compressedTexImage2D(n.TEXTURE_2D,ee,ze,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?U&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,_e.width,_e.height,Me,De,_e.data):t.texImage2D(n.TEXTURE_2D,ee,ze,_e.width,_e.height,0,Me,De,_e.data)}else if(v.isDataArrayTexture)if(Xe){if(ot&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Te,ze,ue.width,ue.height,ue.depth),U)if(v.layerUpdates.size>0){const ee=Yu(ue.width,ue.height,v.format,v.type);for(const le of v.layerUpdates){const Ee=ue.data.subarray(le*ee/ue.data.BYTES_PER_ELEMENT,(le+1)*ee/ue.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,le,ue.width,ue.height,1,Me,De,Ee)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,Me,De,ue.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ze,ue.width,ue.height,ue.depth,0,Me,De,ue.data);else if(v.isData3DTexture)Xe?(ot&&t.texStorage3D(n.TEXTURE_3D,Te,ze,ue.width,ue.height,ue.depth),U&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,Me,De,ue.data)):t.texImage3D(n.TEXTURE_3D,0,ze,ue.width,ue.height,ue.depth,0,Me,De,ue.data);else if(v.isFramebufferTexture){if(ot)if(Xe)t.texStorage2D(n.TEXTURE_2D,Te,ze,ue.width,ue.height);else{let ee=ue.width,le=ue.height;for(let Ee=0;Ee<Te;Ee++)t.texImage2D(n.TEXTURE_2D,Ee,ze,ee,le,0,Me,De,null),ee>>=1,le>>=1}}else if(We.length>0){if(Xe&&ot){const ee=Q(We[0]);t.texStorage2D(n.TEXTURE_2D,Te,ze,ee.width,ee.height)}for(let ee=0,le=We.length;ee<le;ee++)_e=We[ee],Xe?U&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,Me,De,_e):t.texImage2D(n.TEXTURE_2D,ee,ze,Me,De,_e);v.generateMipmaps=!1}else if(Xe){if(ot){const ee=Q(ue);t.texStorage2D(n.TEXTURE_2D,Te,ze,ee.width,ee.height)}U&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Me,De,ue)}else t.texImage2D(n.TEXTURE_2D,0,ze,Me,De,ue);m(v)&&p(k),pe.__version=q.version,v.onUpdate&&v.onUpdate(v)}y.__version=v.version}function G(y,v,I){if(v.image.length!==6)return;const k=ke(y,v),$=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,y.__webglTexture,n.TEXTURE0+I);const q=i.get($);if($.version!==q.__version||k===!0){t.activeTexture(n.TEXTURE0+I);const pe=rt.getPrimaries(rt.workingColorSpace),he=v.colorSpace===wi?null:rt.getPrimaries(v.colorSpace),fe=v.colorSpace===wi||pe===he?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const Fe=v.isCompressedTexture||v.image[0].isCompressedTexture,ue=v.image[0]&&v.image[0].isDataTexture,Me=[];for(let le=0;le<6;le++)!Fe&&!ue?Me[le]=_(v.image[le],!0,s.maxCubemapSize):Me[le]=ue?v.image[le].image:v.image[le],Me[le]=ae(v,Me[le]);const De=Me[0],ze=r.convert(v.format,v.colorSpace),_e=r.convert(v.type),We=T(v.internalFormat,ze,_e,v.colorSpace),Xe=v.isVideoTexture!==!0,ot=q.__version===void 0||k===!0,U=$.dataReady;let Te=b(v,De);be(n.TEXTURE_CUBE_MAP,v);let ee;if(Fe){Xe&&ot&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Te,We,De.width,De.height);for(let le=0;le<6;le++){ee=Me[le].mipmaps;for(let Ee=0;Ee<ee.length;Ee++){const Ae=ee[Ee];v.format!==An?ze!==null?Xe?U&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ee,0,0,Ae.width,Ae.height,ze,Ae.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ee,We,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xe?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ee,0,0,Ae.width,Ae.height,ze,_e,Ae.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ee,We,Ae.width,Ae.height,0,ze,_e,Ae.data)}}}else{if(ee=v.mipmaps,Xe&&ot){ee.length>0&&Te++;const le=Q(Me[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Te,We,le.width,le.height)}for(let le=0;le<6;le++)if(ue){Xe?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Me[le].width,Me[le].height,ze,_e,Me[le].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,We,Me[le].width,Me[le].height,0,ze,_e,Me[le].data);for(let Ee=0;Ee<ee.length;Ee++){const Ze=ee[Ee].image[le].image;Xe?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ee+1,0,0,Ze.width,Ze.height,ze,_e,Ze.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ee+1,We,Ze.width,Ze.height,0,ze,_e,Ze.data)}}else{Xe?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,ze,_e,Me[le]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,We,ze,_e,Me[le]);for(let Ee=0;Ee<ee.length;Ee++){const Ae=ee[Ee];Xe?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ee+1,0,0,ze,_e,Ae.image[le]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ee+1,We,ze,_e,Ae.image[le])}}}m(v)&&p(n.TEXTURE_CUBE_MAP),q.__version=$.version,v.onUpdate&&v.onUpdate(v)}y.__version=v.version}function C(y,v,I,k,$,q){const pe=r.convert(I.format,I.colorSpace),he=r.convert(I.type),fe=T(I.internalFormat,pe,he,I.colorSpace);if(!i.get(v).__hasExternalTextures){const ue=Math.max(1,v.width>>q),Me=Math.max(1,v.height>>q);$===n.TEXTURE_3D||$===n.TEXTURE_2D_ARRAY?t.texImage3D($,q,fe,ue,Me,v.depth,0,pe,he,null):t.texImage2D($,q,fe,ue,Me,0,pe,he,null)}t.bindFramebuffer(n.FRAMEBUFFER,y),J(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,k,$,i.get(I).__webglTexture,0,j(v)):($===n.TEXTURE_2D||$>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,k,$,i.get(I).__webglTexture,q),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ge(y,v,I){if(n.bindRenderbuffer(n.RENDERBUFFER,y),v.depthBuffer){const k=v.depthTexture,$=k&&k.isDepthTexture?k.type:null,q=M(v.stencilBuffer,$),pe=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=j(v);J(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,he,q,v.width,v.height):I?n.renderbufferStorageMultisample(n.RENDERBUFFER,he,q,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,q,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,pe,n.RENDERBUFFER,y)}else{const k=v.textures;for(let $=0;$<k.length;$++){const q=k[$],pe=r.convert(q.format,q.colorSpace),he=r.convert(q.type),fe=T(q.internalFormat,pe,he,q.colorSpace),Fe=j(v);I&&J(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Fe,fe,v.width,v.height):J(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Fe,fe,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,fe,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function xe(y,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,y),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Z(v.depthTexture,0);const k=i.get(v.depthTexture).__webglTexture,$=j(v);if(v.depthTexture.format===Ns)J(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,k,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,k,0);else if(v.depthTexture.format===Gs)J(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,k,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,k,0);else throw new Error("Unknown depthTexture format")}function ne(y){const v=i.get(y),I=y.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==y.depthTexture){const k=y.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),k){const $=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,k.removeEventListener("dispose",$)};k.addEventListener("dispose",$),v.__depthDisposeCallback=$}v.__boundDepthTexture=k}if(y.depthTexture&&!v.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");xe(v.__webglFramebuffer,y)}else if(I){v.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[k]),v.__webglDepthbuffer[k]===void 0)v.__webglDepthbuffer[k]=n.createRenderbuffer(),ge(v.__webglDepthbuffer[k],y,!1);else{const $=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=v.__webglDepthbuffer[k];n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,q)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),ge(v.__webglDepthbuffer,y,!1);else{const k=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,$),n.framebufferRenderbuffer(n.FRAMEBUFFER,k,n.RENDERBUFFER,$)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function oe(y,v,I){const k=i.get(y);v!==void 0&&C(k.__webglFramebuffer,y,y.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),I!==void 0&&ne(y)}function Ye(y){const v=y.texture,I=i.get(y),k=i.get(v);y.addEventListener("dispose",R);const $=y.textures,q=y.isWebGLCubeRenderTarget===!0,pe=$.length>1;if(pe||(k.__webglTexture===void 0&&(k.__webglTexture=n.createTexture()),k.__version=v.version,o.memory.textures++),q){I.__webglFramebuffer=[];for(let he=0;he<6;he++)if(v.mipmaps&&v.mipmaps.length>0){I.__webglFramebuffer[he]=[];for(let fe=0;fe<v.mipmaps.length;fe++)I.__webglFramebuffer[he][fe]=n.createFramebuffer()}else I.__webglFramebuffer[he]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){I.__webglFramebuffer=[];for(let he=0;he<v.mipmaps.length;he++)I.__webglFramebuffer[he]=n.createFramebuffer()}else I.__webglFramebuffer=n.createFramebuffer();if(pe)for(let he=0,fe=$.length;he<fe;he++){const Fe=i.get($[he]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=n.createTexture(),o.memory.textures++)}if(y.samples>0&&J(y)===!1){I.__webglMultisampledFramebuffer=n.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let he=0;he<$.length;he++){const fe=$[he];I.__webglColorRenderbuffer[he]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,I.__webglColorRenderbuffer[he]);const Fe=r.convert(fe.format,fe.colorSpace),ue=r.convert(fe.type),Me=T(fe.internalFormat,Fe,ue,fe.colorSpace,y.isXRRenderTarget===!0),De=j(y);n.renderbufferStorageMultisample(n.RENDERBUFFER,De,Me,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,I.__webglColorRenderbuffer[he])}n.bindRenderbuffer(n.RENDERBUFFER,null),y.depthBuffer&&(I.__webglDepthRenderbuffer=n.createRenderbuffer(),ge(I.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(q){t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture),be(n.TEXTURE_CUBE_MAP,v);for(let he=0;he<6;he++)if(v.mipmaps&&v.mipmaps.length>0)for(let fe=0;fe<v.mipmaps.length;fe++)C(I.__webglFramebuffer[he][fe],y,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,fe);else C(I.__webglFramebuffer[he],y,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);m(v)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(pe){for(let he=0,fe=$.length;he<fe;he++){const Fe=$[he],ue=i.get(Fe);t.bindTexture(n.TEXTURE_2D,ue.__webglTexture),be(n.TEXTURE_2D,Fe),C(I.__webglFramebuffer,y,Fe,n.COLOR_ATTACHMENT0+he,n.TEXTURE_2D,0),m(Fe)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let he=n.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(he=y.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(he,k.__webglTexture),be(he,v),v.mipmaps&&v.mipmaps.length>0)for(let fe=0;fe<v.mipmaps.length;fe++)C(I.__webglFramebuffer[fe],y,v,n.COLOR_ATTACHMENT0,he,fe);else C(I.__webglFramebuffer,y,v,n.COLOR_ATTACHMENT0,he,0);m(v)&&p(he),t.unbindTexture()}y.depthBuffer&&ne(y)}function A(y){const v=y.textures;for(let I=0,k=v.length;I<k;I++){const $=v[I];if(m($)){const q=y.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,pe=i.get($).__webglTexture;t.bindTexture(q,pe),p(q),t.unbindTexture()}}}const L=[],S=[];function re(y){if(y.samples>0){if(J(y)===!1){const v=y.textures,I=y.width,k=y.height;let $=n.COLOR_BUFFER_BIT;const q=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=i.get(y),he=v.length>1;if(he)for(let fe=0;fe<v.length;fe++)t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let fe=0;fe<v.length;fe++){if(y.resolveDepthBuffer&&(y.depthBuffer&&($|=n.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&($|=n.STENCIL_BUFFER_BIT)),he){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,pe.__webglColorRenderbuffer[fe]);const Fe=i.get(v[fe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Fe,0)}n.blitFramebuffer(0,0,I,k,0,0,I,k,$,n.NEAREST),l===!0&&(L.length=0,S.length=0,L.push(n.COLOR_ATTACHMENT0+fe),y.depthBuffer&&y.resolveDepthBuffer===!1&&(L.push(q),S.push(q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,S)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,L))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),he)for(let fe=0;fe<v.length;fe++){t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,pe.__webglColorRenderbuffer[fe]);const Fe=i.get(v[fe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,Fe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.resolveDepthBuffer===!1&&l){const v=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function j(y){return Math.min(s.maxSamples,y.samples)}function J(y){const v=i.get(y);return y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function te(y){const v=o.render.frame;h.get(y)!==v&&(h.set(y,v),y.update())}function ae(y,v){const I=y.colorSpace,k=y.format,$=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||I!==Ui&&I!==wi&&(rt.getTransfer(I)===gt?(k!==An||$!==di)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),v}function Q(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(c.width=y.naturalWidth||y.width,c.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(c.width=y.displayWidth,c.height=y.displayHeight):(c.width=y.width,c.height=y.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=E,this.setTexture2D=Z,this.setTexture2DArray=ce,this.setTexture3D=H,this.setTextureCube=se,this.rebindTextures=oe,this.setupRenderTarget=Ye,this.updateRenderTargetMipmap=A,this.updateMultisampleRenderTarget=re,this.setupDepthRenderbuffer=ne,this.setupFrameBufferTexture=C,this.useMultisampledRTT=J}function ZM(n,e){function t(i,s=wi){let r;const o=rt.getTransfer(s);if(i===di)return n.UNSIGNED_BYTE;if(i===Wc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Xc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Cd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Ad)return n.BYTE;if(i===Rd)return n.SHORT;if(i===Pr)return n.UNSIGNED_SHORT;if(i===Gc)return n.INT;if(i===ss)return n.UNSIGNED_INT;if(i===ui)return n.FLOAT;if(i===zr)return n.HALF_FLOAT;if(i===Pd)return n.ALPHA;if(i===Ld)return n.RGB;if(i===An)return n.RGBA;if(i===Id)return n.LUMINANCE;if(i===Dd)return n.LUMINANCE_ALPHA;if(i===Ns)return n.DEPTH_COMPONENT;if(i===Gs)return n.DEPTH_STENCIL;if(i===Ud)return n.RED;if(i===Yc)return n.RED_INTEGER;if(i===Nd)return n.RG;if(i===qc)return n.RG_INTEGER;if(i===jc)return n.RGBA_INTEGER;if(i===Ao||i===Ro||i===Co||i===Po)if(o===gt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ao)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ro)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Co)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Po)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ao)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ro)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Co)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Po)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Gl||i===Wl||i===Xl||i===Yl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Gl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Wl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Xl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Yl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ql||i===jl||i===Kl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ql||i===jl)return o===gt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Kl)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===$l||i===Jl||i===Zl||i===Ql||i===ec||i===tc||i===nc||i===ic||i===sc||i===rc||i===oc||i===ac||i===lc||i===cc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===$l)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Jl)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Zl)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ql)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ec)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===tc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===nc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ic)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===sc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===rc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===oc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ac)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===lc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===cc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Lo||i===hc||i===uc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Lo)return o===gt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===hc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===uc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Od||i===fc||i===dc||i===pc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Lo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===fc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===dc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===pc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Vs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class QM extends gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Nt extends Lt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const eS={type:"move"};class ul{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Nt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Nt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Nt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&u>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(eS)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Nt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const tS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,nS=`
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

}`;class iS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new qt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Di({vertexShader:tS,fragmentShader:nS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ft(new cs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class sS extends Ys{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,g=null;const _=new iS,m=t.getContextAttributes();let p=null,T=null;const M=[],b=[],O=new Re;let R=null;const P=new gn;P.layers.enable(1),P.viewport=new lt;const F=new gn;F.layers.enable(2),F.viewport=new lt;const ie=[P,F],x=new QM;x.layers.enable(1),x.layers.enable(2);let E=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let C=M[G];return C===void 0&&(C=new ul,M[G]=C),C.getTargetRaySpace()},this.getControllerGrip=function(G){let C=M[G];return C===void 0&&(C=new ul,M[G]=C),C.getGripSpace()},this.getHand=function(G){let C=M[G];return C===void 0&&(C=new ul,M[G]=C),C.getHandSpace()};function X(G){const C=b.indexOf(G.inputSource);if(C===-1)return;const ge=M[C];ge!==void 0&&(ge.update(G.inputSource,G.frame,c||o),ge.dispatchEvent({type:G.type,data:G.inputSource}))}function Z(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",Z),s.removeEventListener("inputsourceschange",ce);for(let G=0;G<M.length;G++){const C=b[G];C!==null&&(b[G]=null,M[G].disconnect(C))}E=null,W=null,_.reset(),e.setRenderTarget(p),d=null,u=null,f=null,s=null,T=null,Je.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(O.width,O.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(G){if(s=G,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",Z),s.addEventListener("inputsourceschange",ce),m.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(O),s.renderState.layers===void 0){const C={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,C),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),T=new rs(d.framebufferWidth,d.framebufferHeight,{format:An,type:di,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let C=null,ge=null,xe=null;m.depth&&(xe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,C=m.stencil?Gs:Ns,ge=m.stencil?Vs:ss);const ne={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:r};f=new XRWebGLBinding(s,t),u=f.createProjectionLayer(ne),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),T=new rs(u.textureWidth,u.textureHeight,{format:An,type:di,depthTexture:new Kd(u.textureWidth,u.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,C),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Je.setContext(s),Je.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function ce(G){for(let C=0;C<G.removed.length;C++){const ge=G.removed[C],xe=b.indexOf(ge);xe>=0&&(b[xe]=null,M[xe].disconnect(ge))}for(let C=0;C<G.added.length;C++){const ge=G.added[C];let xe=b.indexOf(ge);if(xe===-1){for(let oe=0;oe<M.length;oe++)if(oe>=b.length){b.push(ge),xe=oe;break}else if(b[oe]===null){b[oe]=ge,xe=oe;break}if(xe===-1)break}const ne=M[xe];ne&&ne.connect(ge)}}const H=new D,se=new D;function V(G,C,ge){H.setFromMatrixPosition(C.matrixWorld),se.setFromMatrixPosition(ge.matrixWorld);const xe=H.distanceTo(se),ne=C.projectionMatrix.elements,oe=ge.projectionMatrix.elements,Ye=ne[14]/(ne[10]-1),A=ne[14]/(ne[10]+1),L=(ne[9]+1)/ne[5],S=(ne[9]-1)/ne[5],re=(ne[8]-1)/ne[0],j=(oe[8]+1)/oe[0],J=Ye*re,te=Ye*j,ae=xe/(-re+j),Q=ae*-re;if(C.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Q),G.translateZ(ae),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),ne[10]===-1)G.projectionMatrix.copy(C.projectionMatrix),G.projectionMatrixInverse.copy(C.projectionMatrixInverse);else{const y=Ye+ae,v=A+ae,I=J-Q,k=te+(xe-Q),$=L*A/v*y,q=S*A/v*y;G.projectionMatrix.makePerspective(I,k,$,q,y,v),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function ve(G,C){C===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(C.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(s===null)return;let C=G.near,ge=G.far;_.texture!==null&&(_.depthNear>0&&(C=_.depthNear),_.depthFar>0&&(ge=_.depthFar)),x.near=F.near=P.near=C,x.far=F.far=P.far=ge,(E!==x.near||W!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),E=x.near,W=x.far);const xe=G.parent,ne=x.cameras;ve(x,xe);for(let oe=0;oe<ne.length;oe++)ve(ne[oe],xe);ne.length===2?V(x,P,F):x.projectionMatrix.copy(P.projectionMatrix),Se(G,x,xe)};function Se(G,C,ge){ge===null?G.matrix.copy(C.matrixWorld):(G.matrix.copy(ge.matrixWorld),G.matrix.invert(),G.matrix.multiply(C.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(C.projectionMatrix),G.projectionMatrixInverse.copy(C.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=mc*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(G){l=G,u!==null&&(u.fixedFoveation=G),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=G)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let be=null;function ke(G,C){if(h=C.getViewerPose(c||o),g=C,h!==null){const ge=h.views;d!==null&&(e.setRenderTargetFramebuffer(T,d.framebuffer),e.setRenderTarget(T));let xe=!1;ge.length!==x.cameras.length&&(x.cameras.length=0,xe=!0);for(let oe=0;oe<ge.length;oe++){const Ye=ge[oe];let A=null;if(d!==null)A=d.getViewport(Ye);else{const S=f.getViewSubImage(u,Ye);A=S.viewport,oe===0&&(e.setRenderTargetTextures(T,S.colorTexture,u.ignoreDepthValues?void 0:S.depthStencilTexture),e.setRenderTarget(T))}let L=ie[oe];L===void 0&&(L=new gn,L.layers.enable(oe),L.viewport=new lt,ie[oe]=L),L.matrix.fromArray(Ye.transform.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale),L.projectionMatrix.fromArray(Ye.projectionMatrix),L.projectionMatrixInverse.copy(L.projectionMatrix).invert(),L.viewport.set(A.x,A.y,A.width,A.height),oe===0&&(x.matrix.copy(L.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),xe===!0&&x.cameras.push(L)}const ne=s.enabledFeatures;if(ne&&ne.includes("depth-sensing")){const oe=f.getDepthInformation(ge[0]);oe&&oe.isValid&&oe.texture&&_.init(e,oe,s.renderState)}}for(let ge=0;ge<M.length;ge++){const xe=b[ge],ne=M[ge];xe!==null&&ne!==void 0&&ne.update(xe,C,c||o)}be&&be(G,C),C.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:C}),g=null}const Je=new jd;Je.setAnimationLoop(ke),this.setAnimationLoop=function(G){be=G},this.dispose=function(){}}}const Gi=new Kn,rS=new dt;function oS(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Xd(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,T,M,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&d(m,p,b)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,T,M):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===tn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===tn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const T=e.get(p),M=T.envMap,b=T.envMapRotation;M&&(m.envMap.value=M,Gi.copy(b),Gi.x*=-1,Gi.y*=-1,Gi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Gi.y*=-1,Gi.z*=-1),m.envMapRotation.value.setFromMatrix4(rS.makeRotationFromEuler(Gi)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,T,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*T,m.scale.value=M*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,T){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===tn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const T=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function aS(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,M){const b=M.program;i.uniformBlockBinding(T,b)}function c(T,M){let b=s[T.id];b===void 0&&(g(T),b=h(T),s[T.id]=b,T.addEventListener("dispose",m));const O=M.program;i.updateUBOMapping(T,O);const R=e.render.frame;r[T.id]!==R&&(u(T),r[T.id]=R)}function h(T){const M=f();T.__bindingPointIndex=M;const b=n.createBuffer(),O=T.__size,R=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,O,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,b),b}function f(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(T){const M=s[T.id],b=T.uniforms,O=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let R=0,P=b.length;R<P;R++){const F=Array.isArray(b[R])?b[R]:[b[R]];for(let ie=0,x=F.length;ie<x;ie++){const E=F[ie];if(d(E,R,ie,O)===!0){const W=E.__offset,X=Array.isArray(E.value)?E.value:[E.value];let Z=0;for(let ce=0;ce<X.length;ce++){const H=X[ce],se=_(H);typeof H=="number"||typeof H=="boolean"?(E.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,W+Z,E.__data)):H.isMatrix3?(E.__data[0]=H.elements[0],E.__data[1]=H.elements[1],E.__data[2]=H.elements[2],E.__data[3]=0,E.__data[4]=H.elements[3],E.__data[5]=H.elements[4],E.__data[6]=H.elements[5],E.__data[7]=0,E.__data[8]=H.elements[6],E.__data[9]=H.elements[7],E.__data[10]=H.elements[8],E.__data[11]=0):(H.toArray(E.__data,Z),Z+=se.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,W,E.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(T,M,b,O){const R=T.value,P=M+"_"+b;if(O[P]===void 0)return typeof R=="number"||typeof R=="boolean"?O[P]=R:O[P]=R.clone(),!0;{const F=O[P];if(typeof R=="number"||typeof R=="boolean"){if(F!==R)return O[P]=R,!0}else if(F.equals(R)===!1)return F.copy(R),!0}return!1}function g(T){const M=T.uniforms;let b=0;const O=16;for(let P=0,F=M.length;P<F;P++){const ie=Array.isArray(M[P])?M[P]:[M[P]];for(let x=0,E=ie.length;x<E;x++){const W=ie[x],X=Array.isArray(W.value)?W.value:[W.value];for(let Z=0,ce=X.length;Z<ce;Z++){const H=X[Z],se=_(H),V=b%O,ve=V%se.boundary,Se=V+ve;b+=ve,Se!==0&&O-Se<se.storage&&(b+=O-Se),W.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=b,b+=se.storage}}}const R=b%O;return R>0&&(b+=O-R),T.__size=b,T.__cache={},this}function _(T){const M={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(M.boundary=4,M.storage=4):T.isVector2?(M.boundary=8,M.storage=8):T.isVector3||T.isColor?(M.boundary=16,M.storage=12):T.isVector4?(M.boundary=16,M.storage=16):T.isMatrix3?(M.boundary=48,M.storage=48):T.isMatrix4?(M.boundary=64,M.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),M}function m(T){const M=T.target;M.removeEventListener("dispose",m);const b=o.indexOf(M.__bindingPointIndex);o.splice(b,1),n.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function p(){for(const T in s)n.deleteBuffer(s[T]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class lS{constructor(e={}){const{canvas:t=Kg(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let u;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=i.getContextAttributes().alpha}else u=o;const d=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const p=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Qt,this.toneMapping=Ci,this.toneMappingExposure=1;const M=this;let b=!1,O=0,R=0,P=null,F=-1,ie=null;const x=new lt,E=new lt;let W=null;const X=new $e(0);let Z=0,ce=t.width,H=t.height,se=1,V=null,ve=null;const Se=new lt(0,0,ce,H),be=new lt(0,0,ce,H);let ke=!1;const Je=new Zc;let G=!1,C=!1;const ge=new dt,xe=new dt,ne=new D,oe=new lt,Ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let A=!1;function L(){return P===null?se:1}let S=i;function re(w,N){return t.getContext(w,N)}try{const w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Hc}`),t.addEventListener("webglcontextlost",le,!1),t.addEventListener("webglcontextrestored",Ee,!1),t.addEventListener("webglcontextcreationerror",Ae,!1),S===null){const N="webgl2";if(S=re(N,w),S===null)throw re(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let j,J,te,ae,Q,y,v,I,k,$,q,pe,he,fe,Fe,ue,Me,De,ze,_e,We,Xe,ot,U;function Te(){j=new dy(S),j.init(),Xe=new ZM(S,j),J=new ay(S,j,e,Xe),te=new KM(S),J.reverseDepthBuffer&&te.buffers.depth.setReversed(!0),ae=new gy(S),Q=new UM,y=new JM(S,j,te,Q,J,Xe,ae),v=new cy(M),I=new fy(M),k=new b_(S),ot=new ry(S,k),$=new py(S,k,ae,ot),q=new vy(S,$,k,ae),ze=new _y(S,J,y),ue=new ly(Q),pe=new DM(M,v,I,j,J,ot,ue),he=new oS(M,Q),fe=new OM,Fe=new VM(j),De=new sy(M,v,I,te,q,u,l),Me=new qM(M,q,J),U=new aS(S,ae,J,te),_e=new oy(S,j,ae),We=new my(S,j,ae),ae.programs=pe.programs,M.capabilities=J,M.extensions=j,M.properties=Q,M.renderLists=fe,M.shadowMap=Me,M.state=te,M.info=ae}Te();const ee=new sS(M,S);this.xr=ee,this.getContext=function(){return S},this.getContextAttributes=function(){return S.getContextAttributes()},this.forceContextLoss=function(){const w=j.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=j.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return se},this.setPixelRatio=function(w){w!==void 0&&(se=w,this.setSize(ce,H,!1))},this.getSize=function(w){return w.set(ce,H)},this.setSize=function(w,N,Y=!0){if(ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ce=w,H=N,t.width=Math.floor(w*se),t.height=Math.floor(N*se),Y===!0&&(t.style.width=w+"px",t.style.height=N+"px"),this.setViewport(0,0,w,N)},this.getDrawingBufferSize=function(w){return w.set(ce*se,H*se).floor()},this.setDrawingBufferSize=function(w,N,Y){ce=w,H=N,se=Y,t.width=Math.floor(w*Y),t.height=Math.floor(N*Y),this.setViewport(0,0,w,N)},this.getCurrentViewport=function(w){return w.copy(x)},this.getViewport=function(w){return w.copy(Se)},this.setViewport=function(w,N,Y,K){w.isVector4?Se.set(w.x,w.y,w.z,w.w):Se.set(w,N,Y,K),te.viewport(x.copy(Se).multiplyScalar(se).round())},this.getScissor=function(w){return w.copy(be)},this.setScissor=function(w,N,Y,K){w.isVector4?be.set(w.x,w.y,w.z,w.w):be.set(w,N,Y,K),te.scissor(E.copy(be).multiplyScalar(se).round())},this.getScissorTest=function(){return ke},this.setScissorTest=function(w){te.setScissorTest(ke=w)},this.setOpaqueSort=function(w){V=w},this.setTransparentSort=function(w){ve=w},this.getClearColor=function(w){return w.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor.apply(De,arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha.apply(De,arguments)},this.clear=function(w=!0,N=!0,Y=!0){let K=0;if(w){let B=!1;if(P!==null){const me=P.texture.format;B=me===jc||me===qc||me===Yc}if(B){const me=P.texture.type,we=me===di||me===ss||me===Pr||me===Vs||me===Wc||me===Xc,Ce=De.getClearColor(),Pe=De.getClearAlpha(),He=Ce.r,Ve=Ce.g,Le=Ce.b;we?(d[0]=He,d[1]=Ve,d[2]=Le,d[3]=Pe,S.clearBufferuiv(S.COLOR,0,d)):(g[0]=He,g[1]=Ve,g[2]=Le,g[3]=Pe,S.clearBufferiv(S.COLOR,0,g))}else K|=S.COLOR_BUFFER_BIT}N&&(K|=S.DEPTH_BUFFER_BIT,S.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),Y&&(K|=S.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),S.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",le,!1),t.removeEventListener("webglcontextrestored",Ee,!1),t.removeEventListener("webglcontextcreationerror",Ae,!1),fe.dispose(),Fe.dispose(),Q.dispose(),v.dispose(),I.dispose(),q.dispose(),ot.dispose(),U.dispose(),pe.dispose(),ee.dispose(),ee.removeEventListener("sessionstart",hh),ee.removeEventListener("sessionend",uh),Ni.stop()};function le(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function Ee(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const w=ae.autoReset,N=Me.enabled,Y=Me.autoUpdate,K=Me.needsUpdate,B=Me.type;Te(),ae.autoReset=w,Me.enabled=N,Me.autoUpdate=Y,Me.needsUpdate=K,Me.type=B}function Ae(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ze(w){const N=w.target;N.removeEventListener("dispose",Ze),Et(N)}function Et(w){Kt(w),Q.remove(w)}function Kt(w){const N=Q.get(w).programs;N!==void 0&&(N.forEach(function(Y){pe.releaseProgram(Y)}),w.isShaderMaterial&&pe.releaseShaderCache(w))}this.renderBufferDirect=function(w,N,Y,K,B,me){N===null&&(N=Ye);const we=B.isMesh&&B.matrixWorld.determinant()<0,Ce=fp(w,N,Y,K,B);te.setMaterial(K,we);let Pe=Y.index,He=1;if(K.wireframe===!0){if(Pe=$.getWireframeAttribute(Y),Pe===void 0)return;He=2}const Ve=Y.drawRange,Le=Y.attributes.position;let at=Ve.start*He,pt=(Ve.start+Ve.count)*He;me!==null&&(at=Math.max(at,me.start*He),pt=Math.min(pt,(me.start+me.count)*He)),Pe!==null?(at=Math.max(at,0),pt=Math.min(pt,Pe.count)):Le!=null&&(at=Math.max(at,0),pt=Math.min(pt,Le.count));const yt=pt-at;if(yt<0||yt===1/0)return;ot.setup(B,K,Ce,Y,Pe);let nn,nt=_e;if(Pe!==null&&(nn=k.get(Pe),nt=We,nt.setIndex(nn)),B.isMesh)K.wireframe===!0?(te.setLineWidth(K.wireframeLinewidth*L()),nt.setMode(S.LINES)):nt.setMode(S.TRIANGLES);else if(B.isLine){let Ue=K.linewidth;Ue===void 0&&(Ue=1),te.setLineWidth(Ue*L()),B.isLineSegments?nt.setMode(S.LINES):B.isLineLoop?nt.setMode(S.LINE_LOOP):nt.setMode(S.LINE_STRIP)}else B.isPoints?nt.setMode(S.POINTS):B.isSprite&&nt.setMode(S.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)nt.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(j.get("WEBGL_multi_draw"))nt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Ue=B._multiDrawStarts,It=B._multiDrawCounts,it=B._multiDrawCount,yn=Pe?k.get(Pe).bytesPerElement:1,hs=Q.get(K).currentProgram.getUniforms();for(let sn=0;sn<it;sn++)hs.setValue(S,"_gl_DrawID",sn),nt.render(Ue[sn]/yn,It[sn])}else if(B.isInstancedMesh)nt.renderInstances(at,yt,B.count);else if(Y.isInstancedBufferGeometry){const Ue=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,It=Math.min(Y.instanceCount,Ue);nt.renderInstances(at,yt,It)}else nt.render(at,yt)};function Qe(w,N,Y){w.transparent===!0&&w.side===en&&w.forceSinglePass===!1?(w.side=tn,w.needsUpdate=!0,Wr(w,N,Y),w.side=Ii,w.needsUpdate=!0,Wr(w,N,Y),w.side=en):Wr(w,N,Y)}this.compile=function(w,N,Y=null){Y===null&&(Y=w),m=Fe.get(Y),m.init(N),T.push(m),Y.traverseVisible(function(B){B.isLight&&B.layers.test(N.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),w!==Y&&w.traverseVisible(function(B){B.isLight&&B.layers.test(N.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),m.setupLights();const K=new Set;return w.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const me=B.material;if(me)if(Array.isArray(me))for(let we=0;we<me.length;we++){const Ce=me[we];Qe(Ce,Y,B),K.add(Ce)}else Qe(me,Y,B),K.add(me)}),T.pop(),m=null,K},this.compileAsync=function(w,N,Y=null){const K=this.compile(w,N,Y);return new Promise(B=>{function me(){if(K.forEach(function(we){Q.get(we).currentProgram.isReady()&&K.delete(we)}),K.size===0){B(w);return}setTimeout(me,10)}j.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let $t=null;function Jn(w){$t&&$t(w)}function hh(){Ni.stop()}function uh(){Ni.start()}const Ni=new jd;Ni.setAnimationLoop(Jn),typeof self<"u"&&Ni.setContext(self),this.setAnimationLoop=function(w){$t=w,ee.setAnimationLoop(w),w===null?Ni.stop():Ni.start()},ee.addEventListener("sessionstart",hh),ee.addEventListener("sessionend",uh),this.render=function(w,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),ee.enabled===!0&&ee.isPresenting===!0&&(ee.cameraAutoUpdate===!0&&ee.updateCamera(N),N=ee.getCamera()),w.isScene===!0&&w.onBeforeRender(M,w,N,P),m=Fe.get(w,T.length),m.init(N),T.push(m),xe.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Je.setFromProjectionMatrix(xe),C=this.localClippingEnabled,G=ue.init(this.clippingPlanes,C),_=fe.get(w,p.length),_.init(),p.push(_),ee.enabled===!0&&ee.isPresenting===!0){const me=M.xr.getDepthSensingMesh();me!==null&&pa(me,N,-1/0,M.sortObjects)}pa(w,N,0,M.sortObjects),_.finish(),M.sortObjects===!0&&_.sort(V,ve),A=ee.enabled===!1||ee.isPresenting===!1||ee.hasDepthSensing()===!1,A&&De.addToRenderList(_,w),this.info.render.frame++,G===!0&&ue.beginShadows();const Y=m.state.shadowsArray;Me.render(Y,w,N),G===!0&&ue.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=_.opaque,B=_.transmissive;if(m.setupLights(),N.isArrayCamera){const me=N.cameras;if(B.length>0)for(let we=0,Ce=me.length;we<Ce;we++){const Pe=me[we];dh(K,B,w,Pe)}A&&De.render(w);for(let we=0,Ce=me.length;we<Ce;we++){const Pe=me[we];fh(_,w,Pe,Pe.viewport)}}else B.length>0&&dh(K,B,w,N),A&&De.render(w),fh(_,w,N);P!==null&&(y.updateMultisampleRenderTarget(P),y.updateRenderTargetMipmap(P)),w.isScene===!0&&w.onAfterRender(M,w,N),ot.resetDefaultState(),F=-1,ie=null,T.pop(),T.length>0?(m=T[T.length-1],G===!0&&ue.setGlobalState(M.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function pa(w,N,Y,K){if(w.visible===!1)return;if(w.layers.test(N.layers)){if(w.isGroup)Y=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(N);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Je.intersectsSprite(w)){K&&oe.setFromMatrixPosition(w.matrixWorld).applyMatrix4(xe);const we=q.update(w),Ce=w.material;Ce.visible&&_.push(w,we,Ce,Y,oe.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Je.intersectsObject(w))){const we=q.update(w),Ce=w.material;if(K&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),oe.copy(w.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),oe.copy(we.boundingSphere.center)),oe.applyMatrix4(w.matrixWorld).applyMatrix4(xe)),Array.isArray(Ce)){const Pe=we.groups;for(let He=0,Ve=Pe.length;He<Ve;He++){const Le=Pe[He],at=Ce[Le.materialIndex];at&&at.visible&&_.push(w,we,at,Y,oe.z,Le)}}else Ce.visible&&_.push(w,we,Ce,Y,oe.z,null)}}const me=w.children;for(let we=0,Ce=me.length;we<Ce;we++)pa(me[we],N,Y,K)}function fh(w,N,Y,K){const B=w.opaque,me=w.transmissive,we=w.transparent;m.setupLightsView(Y),G===!0&&ue.setGlobalState(M.clippingPlanes,Y),K&&te.viewport(x.copy(K)),B.length>0&&Gr(B,N,Y),me.length>0&&Gr(me,N,Y),we.length>0&&Gr(we,N,Y),te.buffers.depth.setTest(!0),te.buffers.depth.setMask(!0),te.buffers.color.setMask(!0),te.setPolygonOffset(!1)}function dh(w,N,Y,K){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[K.id]===void 0&&(m.state.transmissionRenderTarget[K.id]=new rs(1,1,{generateMipmaps:!0,type:j.has("EXT_color_buffer_half_float")||j.has("EXT_color_buffer_float")?zr:di,minFilter:Qi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:rt.workingColorSpace}));const me=m.state.transmissionRenderTarget[K.id],we=K.viewport||x;me.setSize(we.z,we.w);const Ce=M.getRenderTarget();M.setRenderTarget(me),M.getClearColor(X),Z=M.getClearAlpha(),Z<1&&M.setClearColor(16777215,.5),M.clear(),A&&De.render(Y);const Pe=M.toneMapping;M.toneMapping=Ci;const He=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),m.setupLightsView(K),G===!0&&ue.setGlobalState(M.clippingPlanes,K),Gr(w,Y,K),y.updateMultisampleRenderTarget(me),y.updateRenderTargetMipmap(me),j.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let Le=0,at=N.length;Le<at;Le++){const pt=N[Le],yt=pt.object,nn=pt.geometry,nt=pt.material,Ue=pt.group;if(nt.side===en&&yt.layers.test(K.layers)){const It=nt.side;nt.side=tn,nt.needsUpdate=!0,ph(yt,Y,K,nn,nt,Ue),nt.side=It,nt.needsUpdate=!0,Ve=!0}}Ve===!0&&(y.updateMultisampleRenderTarget(me),y.updateRenderTargetMipmap(me))}M.setRenderTarget(Ce),M.setClearColor(X,Z),He!==void 0&&(K.viewport=He),M.toneMapping=Pe}function Gr(w,N,Y){const K=N.isScene===!0?N.overrideMaterial:null;for(let B=0,me=w.length;B<me;B++){const we=w[B],Ce=we.object,Pe=we.geometry,He=K===null?we.material:K,Ve=we.group;Ce.layers.test(Y.layers)&&ph(Ce,N,Y,Pe,He,Ve)}}function ph(w,N,Y,K,B,me){w.onBeforeRender(M,N,Y,K,B,me),w.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),B.onBeforeRender(M,N,Y,K,w,me),B.transparent===!0&&B.side===en&&B.forceSinglePass===!1?(B.side=tn,B.needsUpdate=!0,M.renderBufferDirect(Y,N,K,B,w,me),B.side=Ii,B.needsUpdate=!0,M.renderBufferDirect(Y,N,K,B,w,me),B.side=en):M.renderBufferDirect(Y,N,K,B,w,me),w.onAfterRender(M,N,Y,K,B,me)}function Wr(w,N,Y){N.isScene!==!0&&(N=Ye);const K=Q.get(w),B=m.state.lights,me=m.state.shadowsArray,we=B.state.version,Ce=pe.getParameters(w,B.state,me,N,Y),Pe=pe.getProgramCacheKey(Ce);let He=K.programs;K.environment=w.isMeshStandardMaterial?N.environment:null,K.fog=N.fog,K.envMap=(w.isMeshStandardMaterial?I:v).get(w.envMap||K.environment),K.envMapRotation=K.environment!==null&&w.envMap===null?N.environmentRotation:w.envMapRotation,He===void 0&&(w.addEventListener("dispose",Ze),He=new Map,K.programs=He);let Ve=He.get(Pe);if(Ve!==void 0){if(K.currentProgram===Ve&&K.lightsStateVersion===we)return gh(w,Ce),Ve}else Ce.uniforms=pe.getUniforms(w),w.onBeforeCompile(Ce,M),Ve=pe.acquireProgram(Ce,Pe),He.set(Pe,Ve),K.uniforms=Ce.uniforms;const Le=K.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Le.clippingPlanes=ue.uniform),gh(w,Ce),K.needsLights=pp(w),K.lightsStateVersion=we,K.needsLights&&(Le.ambientLightColor.value=B.state.ambient,Le.lightProbe.value=B.state.probe,Le.directionalLights.value=B.state.directional,Le.directionalLightShadows.value=B.state.directionalShadow,Le.spotLights.value=B.state.spot,Le.spotLightShadows.value=B.state.spotShadow,Le.rectAreaLights.value=B.state.rectArea,Le.ltc_1.value=B.state.rectAreaLTC1,Le.ltc_2.value=B.state.rectAreaLTC2,Le.pointLights.value=B.state.point,Le.pointLightShadows.value=B.state.pointShadow,Le.hemisphereLights.value=B.state.hemi,Le.directionalShadowMap.value=B.state.directionalShadowMap,Le.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Le.spotShadowMap.value=B.state.spotShadowMap,Le.spotLightMatrix.value=B.state.spotLightMatrix,Le.spotLightMap.value=B.state.spotLightMap,Le.pointShadowMap.value=B.state.pointShadowMap,Le.pointShadowMatrix.value=B.state.pointShadowMatrix),K.currentProgram=Ve,K.uniformsList=null,Ve}function mh(w){if(w.uniformsList===null){const N=w.currentProgram.getUniforms();w.uniformsList=Do.seqWithValue(N.seq,w.uniforms)}return w.uniformsList}function gh(w,N){const Y=Q.get(w);Y.outputColorSpace=N.outputColorSpace,Y.batching=N.batching,Y.batchingColor=N.batchingColor,Y.instancing=N.instancing,Y.instancingColor=N.instancingColor,Y.instancingMorph=N.instancingMorph,Y.skinning=N.skinning,Y.morphTargets=N.morphTargets,Y.morphNormals=N.morphNormals,Y.morphColors=N.morphColors,Y.morphTargetsCount=N.morphTargetsCount,Y.numClippingPlanes=N.numClippingPlanes,Y.numIntersection=N.numClipIntersection,Y.vertexAlphas=N.vertexAlphas,Y.vertexTangents=N.vertexTangents,Y.toneMapping=N.toneMapping}function fp(w,N,Y,K,B){N.isScene!==!0&&(N=Ye),y.resetTextureUnits();const me=N.fog,we=K.isMeshStandardMaterial?N.environment:null,Ce=P===null?M.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Ui,Pe=(K.isMeshStandardMaterial?I:v).get(K.envMap||we),He=K.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Ve=!!Y.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Le=!!Y.morphAttributes.position,at=!!Y.morphAttributes.normal,pt=!!Y.morphAttributes.color;let yt=Ci;K.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(yt=M.toneMapping);const nn=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,nt=nn!==void 0?nn.length:0,Ue=Q.get(K),It=m.state.lights;if(G===!0&&(C===!0||w!==ie)){const un=w===ie&&K.id===F;ue.setState(K,w,un)}let it=!1;K.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==It.state.version||Ue.outputColorSpace!==Ce||B.isBatchedMesh&&Ue.batching===!1||!B.isBatchedMesh&&Ue.batching===!0||B.isBatchedMesh&&Ue.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Ue.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Ue.instancing===!1||!B.isInstancedMesh&&Ue.instancing===!0||B.isSkinnedMesh&&Ue.skinning===!1||!B.isSkinnedMesh&&Ue.skinning===!0||B.isInstancedMesh&&Ue.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Ue.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Ue.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Ue.instancingMorph===!1&&B.morphTexture!==null||Ue.envMap!==Pe||K.fog===!0&&Ue.fog!==me||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==ue.numPlanes||Ue.numIntersection!==ue.numIntersection)||Ue.vertexAlphas!==He||Ue.vertexTangents!==Ve||Ue.morphTargets!==Le||Ue.morphNormals!==at||Ue.morphColors!==pt||Ue.toneMapping!==yt||Ue.morphTargetsCount!==nt)&&(it=!0):(it=!0,Ue.__version=K.version);let yn=Ue.currentProgram;it===!0&&(yn=Wr(K,N,B));let hs=!1,sn=!1,ma=!1;const bt=yn.getUniforms(),mi=Ue.uniforms;if(te.useProgram(yn.program)&&(hs=!0,sn=!0,ma=!0),K.id!==F&&(F=K.id,sn=!0),hs||ie!==w){J.reverseDepthBuffer?(ge.copy(w.projectionMatrix),Jg(ge),Zg(ge),bt.setValue(S,"projectionMatrix",ge)):bt.setValue(S,"projectionMatrix",w.projectionMatrix),bt.setValue(S,"viewMatrix",w.matrixWorldInverse);const un=bt.map.cameraPosition;un!==void 0&&un.setValue(S,ne.setFromMatrixPosition(w.matrixWorld)),J.logarithmicDepthBuffer&&bt.setValue(S,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&bt.setValue(S,"isOrthographic",w.isOrthographicCamera===!0),ie!==w&&(ie=w,sn=!0,ma=!0)}if(B.isSkinnedMesh){bt.setOptional(S,B,"bindMatrix"),bt.setOptional(S,B,"bindMatrixInverse");const un=B.skeleton;un&&(un.boneTexture===null&&un.computeBoneTexture(),bt.setValue(S,"boneTexture",un.boneTexture,y))}B.isBatchedMesh&&(bt.setOptional(S,B,"batchingTexture"),bt.setValue(S,"batchingTexture",B._matricesTexture,y),bt.setOptional(S,B,"batchingIdTexture"),bt.setValue(S,"batchingIdTexture",B._indirectTexture,y),bt.setOptional(S,B,"batchingColorTexture"),B._colorsTexture!==null&&bt.setValue(S,"batchingColorTexture",B._colorsTexture,y));const ga=Y.morphAttributes;if((ga.position!==void 0||ga.normal!==void 0||ga.color!==void 0)&&ze.update(B,Y,yn),(sn||Ue.receiveShadow!==B.receiveShadow)&&(Ue.receiveShadow=B.receiveShadow,bt.setValue(S,"receiveShadow",B.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(mi.envMap.value=Pe,mi.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&N.environment!==null&&(mi.envMapIntensity.value=N.environmentIntensity),sn&&(bt.setValue(S,"toneMappingExposure",M.toneMappingExposure),Ue.needsLights&&dp(mi,ma),me&&K.fog===!0&&he.refreshFogUniforms(mi,me),he.refreshMaterialUniforms(mi,K,se,H,m.state.transmissionRenderTarget[w.id]),Do.upload(S,mh(Ue),mi,y)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Do.upload(S,mh(Ue),mi,y),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&bt.setValue(S,"center",B.center),bt.setValue(S,"modelViewMatrix",B.modelViewMatrix),bt.setValue(S,"normalMatrix",B.normalMatrix),bt.setValue(S,"modelMatrix",B.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const un=K.uniformsGroups;for(let _a=0,mp=un.length;_a<mp;_a++){const _h=un[_a];U.update(_h,yn),U.bind(_h,yn)}}return yn}function dp(w,N){w.ambientLightColor.needsUpdate=N,w.lightProbe.needsUpdate=N,w.directionalLights.needsUpdate=N,w.directionalLightShadows.needsUpdate=N,w.pointLights.needsUpdate=N,w.pointLightShadows.needsUpdate=N,w.spotLights.needsUpdate=N,w.spotLightShadows.needsUpdate=N,w.rectAreaLights.needsUpdate=N,w.hemisphereLights.needsUpdate=N}function pp(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(w,N,Y){Q.get(w.texture).__webglTexture=N,Q.get(w.depthTexture).__webglTexture=Y;const K=Q.get(w);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=Y===void 0,K.__autoAllocateDepthBuffer||j.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,N){const Y=Q.get(w);Y.__webglFramebuffer=N,Y.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(w,N=0,Y=0){P=w,O=N,R=Y;let K=!0,B=null,me=!1,we=!1;if(w){const Pe=Q.get(w);if(Pe.__useDefaultFramebuffer!==void 0)te.bindFramebuffer(S.FRAMEBUFFER,null),K=!1;else if(Pe.__webglFramebuffer===void 0)y.setupRenderTarget(w);else if(Pe.__hasExternalTextures)y.rebindTextures(w,Q.get(w.texture).__webglTexture,Q.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Le=w.depthTexture;if(Pe.__boundDepthTexture!==Le){if(Le!==null&&Q.has(Le)&&(w.width!==Le.image.width||w.height!==Le.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");y.setupDepthRenderbuffer(w)}}const He=w.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(we=!0);const Ve=Q.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ve[N])?B=Ve[N][Y]:B=Ve[N],me=!0):w.samples>0&&y.useMultisampledRTT(w)===!1?B=Q.get(w).__webglMultisampledFramebuffer:Array.isArray(Ve)?B=Ve[Y]:B=Ve,x.copy(w.viewport),E.copy(w.scissor),W=w.scissorTest}else x.copy(Se).multiplyScalar(se).floor(),E.copy(be).multiplyScalar(se).floor(),W=ke;if(te.bindFramebuffer(S.FRAMEBUFFER,B)&&K&&te.drawBuffers(w,B),te.viewport(x),te.scissor(E),te.setScissorTest(W),me){const Pe=Q.get(w.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_CUBE_MAP_POSITIVE_X+N,Pe.__webglTexture,Y)}else if(we){const Pe=Q.get(w.texture),He=N||0;S.framebufferTextureLayer(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,Pe.__webglTexture,Y||0,He)}F=-1},this.readRenderTargetPixels=function(w,N,Y,K,B,me,we){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=Q.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&we!==void 0&&(Ce=Ce[we]),Ce){te.bindFramebuffer(S.FRAMEBUFFER,Ce);try{const Pe=w.texture,He=Pe.format,Ve=Pe.type;if(!J.textureFormatReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!J.textureTypeReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=w.width-K&&Y>=0&&Y<=w.height-B&&S.readPixels(N,Y,K,B,Xe.convert(He),Xe.convert(Ve),me)}finally{const Pe=P!==null?Q.get(P).__webglFramebuffer:null;te.bindFramebuffer(S.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(w,N,Y,K,B,me,we){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=Q.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&we!==void 0&&(Ce=Ce[we]),Ce){const Pe=w.texture,He=Pe.format,Ve=Pe.type;if(!J.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!J.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=w.width-K&&Y>=0&&Y<=w.height-B){te.bindFramebuffer(S.FRAMEBUFFER,Ce);const Le=S.createBuffer();S.bindBuffer(S.PIXEL_PACK_BUFFER,Le),S.bufferData(S.PIXEL_PACK_BUFFER,me.byteLength,S.STREAM_READ),S.readPixels(N,Y,K,B,Xe.convert(He),Xe.convert(Ve),0);const at=P!==null?Q.get(P).__webglFramebuffer:null;te.bindFramebuffer(S.FRAMEBUFFER,at);const pt=S.fenceSync(S.SYNC_GPU_COMMANDS_COMPLETE,0);return S.flush(),await $g(S,pt,4),S.bindBuffer(S.PIXEL_PACK_BUFFER,Le),S.getBufferSubData(S.PIXEL_PACK_BUFFER,0,me),S.deleteBuffer(Le),S.deleteSync(pt),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,N=null,Y=0){w.isTexture!==!0&&(Io("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,w=arguments[1]);const K=Math.pow(2,-Y),B=Math.floor(w.image.width*K),me=Math.floor(w.image.height*K),we=N!==null?N.x:0,Ce=N!==null?N.y:0;y.setTexture2D(w,0),S.copyTexSubImage2D(S.TEXTURE_2D,Y,0,0,we,Ce,B,me),te.unbindTexture()},this.copyTextureToTexture=function(w,N,Y=null,K=null,B=0){w.isTexture!==!0&&(Io("WebGLRenderer: copyTextureToTexture function signature has changed."),K=arguments[0]||null,w=arguments[1],N=arguments[2],B=arguments[3]||0,Y=null);let me,we,Ce,Pe,He,Ve;Y!==null?(me=Y.max.x-Y.min.x,we=Y.max.y-Y.min.y,Ce=Y.min.x,Pe=Y.min.y):(me=w.image.width,we=w.image.height,Ce=0,Pe=0),K!==null?(He=K.x,Ve=K.y):(He=0,Ve=0);const Le=Xe.convert(N.format),at=Xe.convert(N.type);y.setTexture2D(N,0),S.pixelStorei(S.UNPACK_FLIP_Y_WEBGL,N.flipY),S.pixelStorei(S.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),S.pixelStorei(S.UNPACK_ALIGNMENT,N.unpackAlignment);const pt=S.getParameter(S.UNPACK_ROW_LENGTH),yt=S.getParameter(S.UNPACK_IMAGE_HEIGHT),nn=S.getParameter(S.UNPACK_SKIP_PIXELS),nt=S.getParameter(S.UNPACK_SKIP_ROWS),Ue=S.getParameter(S.UNPACK_SKIP_IMAGES),It=w.isCompressedTexture?w.mipmaps[B]:w.image;S.pixelStorei(S.UNPACK_ROW_LENGTH,It.width),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,It.height),S.pixelStorei(S.UNPACK_SKIP_PIXELS,Ce),S.pixelStorei(S.UNPACK_SKIP_ROWS,Pe),w.isDataTexture?S.texSubImage2D(S.TEXTURE_2D,B,He,Ve,me,we,Le,at,It.data):w.isCompressedTexture?S.compressedTexSubImage2D(S.TEXTURE_2D,B,He,Ve,It.width,It.height,Le,It.data):S.texSubImage2D(S.TEXTURE_2D,B,He,Ve,me,we,Le,at,It),S.pixelStorei(S.UNPACK_ROW_LENGTH,pt),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,yt),S.pixelStorei(S.UNPACK_SKIP_PIXELS,nn),S.pixelStorei(S.UNPACK_SKIP_ROWS,nt),S.pixelStorei(S.UNPACK_SKIP_IMAGES,Ue),B===0&&N.generateMipmaps&&S.generateMipmap(S.TEXTURE_2D),te.unbindTexture()},this.copyTextureToTexture3D=function(w,N,Y=null,K=null,B=0){w.isTexture!==!0&&(Io("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Y=arguments[0]||null,K=arguments[1]||null,w=arguments[2],N=arguments[3],B=arguments[4]||0);let me,we,Ce,Pe,He,Ve,Le,at,pt;const yt=w.isCompressedTexture?w.mipmaps[B]:w.image;Y!==null?(me=Y.max.x-Y.min.x,we=Y.max.y-Y.min.y,Ce=Y.max.z-Y.min.z,Pe=Y.min.x,He=Y.min.y,Ve=Y.min.z):(me=yt.width,we=yt.height,Ce=yt.depth,Pe=0,He=0,Ve=0),K!==null?(Le=K.x,at=K.y,pt=K.z):(Le=0,at=0,pt=0);const nn=Xe.convert(N.format),nt=Xe.convert(N.type);let Ue;if(N.isData3DTexture)y.setTexture3D(N,0),Ue=S.TEXTURE_3D;else if(N.isDataArrayTexture||N.isCompressedArrayTexture)y.setTexture2DArray(N,0),Ue=S.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}S.pixelStorei(S.UNPACK_FLIP_Y_WEBGL,N.flipY),S.pixelStorei(S.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),S.pixelStorei(S.UNPACK_ALIGNMENT,N.unpackAlignment);const It=S.getParameter(S.UNPACK_ROW_LENGTH),it=S.getParameter(S.UNPACK_IMAGE_HEIGHT),yn=S.getParameter(S.UNPACK_SKIP_PIXELS),hs=S.getParameter(S.UNPACK_SKIP_ROWS),sn=S.getParameter(S.UNPACK_SKIP_IMAGES);S.pixelStorei(S.UNPACK_ROW_LENGTH,yt.width),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,yt.height),S.pixelStorei(S.UNPACK_SKIP_PIXELS,Pe),S.pixelStorei(S.UNPACK_SKIP_ROWS,He),S.pixelStorei(S.UNPACK_SKIP_IMAGES,Ve),w.isDataTexture||w.isData3DTexture?S.texSubImage3D(Ue,B,Le,at,pt,me,we,Ce,nn,nt,yt.data):N.isCompressedArrayTexture?S.compressedTexSubImage3D(Ue,B,Le,at,pt,me,we,Ce,nn,yt.data):S.texSubImage3D(Ue,B,Le,at,pt,me,we,Ce,nn,nt,yt),S.pixelStorei(S.UNPACK_ROW_LENGTH,It),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,it),S.pixelStorei(S.UNPACK_SKIP_PIXELS,yn),S.pixelStorei(S.UNPACK_SKIP_ROWS,hs),S.pixelStorei(S.UNPACK_SKIP_IMAGES,sn),B===0&&N.generateMipmaps&&S.generateMipmap(Ue),te.unbindTexture()},this.initRenderTarget=function(w){Q.get(w).__webglFramebuffer===void 0&&y.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?y.setTextureCube(w,0):w.isData3DTexture?y.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?y.setTexture2DArray(w,0):y.setTexture2D(w,0),te.unbindTexture()},this.resetState=function(){O=0,R=0,P=null,te.reset(),ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Kc?"display-p3":"srgb",t.unpackColorSpace=rt.workingColorSpace===ha?"display-p3":"srgb"}}class th{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new $e(e),this.near=t,this.far=i}clone(){return new th(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}let cS=class extends Lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Kn,this.environmentIntensity=1,this.environmentRotation=new Kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};class _c extends ls{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new $e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const qu=new dt,vc=new $c,xo=new ua,yo=new D;class fl extends Lt{constructor(e=new jt,t=new _c){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),xo.copy(i.boundingSphere),xo.applyMatrix4(s),xo.radius+=r,e.ray.intersectsSphere(xo)===!1)return;qu.copy(s).invert(),vc.copy(e.ray).applyMatrix4(qu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const u=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=u,_=d;g<_;g++){const m=c.getX(g);yo.fromBufferAttribute(f,m),ju(yo,m,l,s,e,t,this)}}else{const u=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let g=u,_=d;g<_;g++)yo.fromBufferAttribute(f,g),ju(yo,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ju(n,e,t,i,s,r,o){const a=vc.distanceSqToPoint(n);if(a<t){const l=new D;vc.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class nh extends qt{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class $n{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let s=0;const r=i.length;let o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);const h=i[s],u=i[s+1]-h,d=(o-h)/u;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new Re:new D);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new D,s=[],r=[],o=[],a=new D,l=new dt;for(let d=0;d<=e;d++){const g=d/e;s[d]=this.getTangentAt(g,new D)}r[0]=new D,o[0]=new D;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),u<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(kt(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(kt(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class ih extends $n{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Re){const i=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*h-d*f+this.aX,c=u*f+d*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class hS extends ih{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function sh(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,f){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+f)+(l-a)/f;u*=h,d*=h,s(o,a,u,d)},calc:function(r){const o=r*r,a=o*r;return n+e*r+t*o+i*a}}}const Mo=new D,dl=new sh,pl=new sh,ml=new sh;class uS extends $n{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new D){const i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Mo.subVectors(s[0],s[1]).add(s[0]),c=Mo);const f=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Mo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Mo),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(f),d),_=Math.pow(f.distanceToSquared(u),d),m=Math.pow(u.distanceToSquared(h),d);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),dl.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,g,_,m),pl.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,g,_,m),ml.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(dl.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),pl.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),ml.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return i.set(dl.calc(l),pl.calc(l),ml.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new D().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Ku(n,e,t,i,s){const r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function fS(n,e){const t=1-n;return t*t*e}function dS(n,e){return 2*(1-n)*n*e}function pS(n,e){return n*n*e}function vr(n,e,t,i){return fS(n,e)+dS(n,t)+pS(n,i)}function mS(n,e){const t=1-n;return t*t*t*e}function gS(n,e){const t=1-n;return 3*t*t*n*e}function _S(n,e){return 3*(1-n)*n*n*e}function vS(n,e){return n*n*n*e}function xr(n,e,t,i,s){return mS(n,e)+gS(n,t)+_S(n,i)+vS(n,s)}class ep extends $n{constructor(e=new Re,t=new Re,i=new Re,s=new Re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new Re){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(xr(e,s.x,r.x,o.x,a.x),xr(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class xS extends $n{constructor(e=new D,t=new D,i=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new D){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(xr(e,s.x,r.x,o.x,a.x),xr(e,s.y,r.y,o.y,a.y),xr(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class tp extends $n{constructor(e=new Re,t=new Re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Re){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Re){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class yS extends $n{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class np extends $n{constructor(e=new Re,t=new Re,i=new Re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Re){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(vr(e,s.x,r.x,o.x),vr(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class MS extends $n{constructor(e=new D,t=new D,i=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new D){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(vr(e,s.x,r.x,o.x),vr(e,s.y,r.y,o.y),vr(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ip extends $n{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Re){const i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return i.set(Ku(a,l.x,c.x,h.x,f.x),Ku(a,l.y,c.y,h.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new Re().fromArray(s))}return this}}var $u=Object.freeze({__proto__:null,ArcCurve:hS,CatmullRomCurve3:uS,CubicBezierCurve:ep,CubicBezierCurve3:xS,EllipseCurve:ih,LineCurve:tp,LineCurve3:yS,QuadraticBezierCurve:np,QuadraticBezierCurve3:MS,SplineCurve:ip});class SS extends $n{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new $u[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(new $u[s.type]().fromJSON(s))}return this}}class Ju extends SS{constructor(e){super(),this.type="Path",this.currentPoint=new Re,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new tp(this.currentPoint.clone(),new Re(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){const r=new np(this.currentPoint.clone(),new Re(e,t),new Re(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){const a=new ep(this.currentPoint.clone(),new Re(e,t),new Re(i,s),new Re(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new ip(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){const c=new ih(e,t,i,s,r,o,a,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class rh extends jt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],l=[],c=new D,h=new Re;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,u=3;f<=t;f++,u+=3){const d=i+f/t*s;c.x=e*Math.cos(d),c.y=e*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/e+1)/2,h.y=(o[u+1]/e+1)/2,l.push(h.x,h.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new St(o,3)),this.setAttribute("normal",new St(a,3)),this.setAttribute("uv",new St(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rh(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class oh extends jt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],f=[],u=[],d=[];let g=0;const _=[],m=i/2;let p=0;T(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new St(f,3)),this.setAttribute("normal",new St(u,3)),this.setAttribute("uv",new St(d,2));function T(){const b=new D,O=new D;let R=0;const P=(t-e)/i;for(let F=0;F<=r;F++){const ie=[],x=F/r,E=x*(t-e)+e;for(let W=0;W<=s;W++){const X=W/s,Z=X*l+a,ce=Math.sin(Z),H=Math.cos(Z);O.x=E*ce,O.y=-x*i+m,O.z=E*H,f.push(O.x,O.y,O.z),b.set(ce,P,H).normalize(),u.push(b.x,b.y,b.z),d.push(X,1-x),ie.push(g++)}_.push(ie)}for(let F=0;F<s;F++)for(let ie=0;ie<r;ie++){const x=_[ie][F],E=_[ie+1][F],W=_[ie+1][F+1],X=_[ie][F+1];e>0&&(h.push(x,E,X),R+=3),t>0&&(h.push(E,W,X),R+=3)}c.addGroup(p,R,0),p+=R}function M(b){const O=g,R=new Re,P=new D;let F=0;const ie=b===!0?e:t,x=b===!0?1:-1;for(let W=1;W<=s;W++)f.push(0,m*x,0),u.push(0,x,0),d.push(.5,.5),g++;const E=g;for(let W=0;W<=s;W++){const Z=W/s*l+a,ce=Math.cos(Z),H=Math.sin(Z);P.x=ie*H,P.y=m*x,P.z=ie*ce,f.push(P.x,P.y,P.z),u.push(0,x,0),R.x=ce*.5+.5,R.y=H*.5*x+.5,d.push(R.x,R.y),g++}for(let W=0;W<s;W++){const X=O+W,Z=E+W;b===!0?h.push(Z,Z+1,X):h.push(Z+1,Z,X),F+=3}c.addGroup(p,F,b===!0?1:2),p+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oh(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class sp extends Ju{constructor(e){super(e),this.uuid=qs(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(new Ju().fromJSON(s))}return this}}const bS={triangulate:function(n,e,t=2){const i=e&&e.length,s=i?e[0]*t:n.length;let r=rp(n,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,f,u,d;if(i&&(r=RS(n,e,r,t)),n.length>80*t){a=c=n[0],l=h=n[1];for(let g=t;g<s;g+=t)f=n[g],u=n[g+1],f<a&&(a=f),u<l&&(l=u),f>c&&(c=f),u>h&&(h=u);d=Math.max(c-a,h-l),d=d!==0?32767/d:0}return Lr(r,o,t,a,l,d,0),o}};function rp(n,e,t,i,s){let r,o;if(s===kS(n,e,t,i)>0)for(r=e;r<t;r+=i)o=Zu(r,n[r],n[r+1],o);else for(r=t-i;r>=e;r-=i)o=Zu(r,n[r],n[r+1],o);return o&&da(o,o.next)&&(Dr(o),o=o.next),o}function os(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(da(t,t.next)||xt(t.prev,t,t.next)===0)){if(Dr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Lr(n,e,t,i,s,r,o){if(!n)return;!o&&r&&DS(n,i,s,r);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?wS(n,i,s,r):ES(n)){e.push(l.i/t|0),e.push(n.i/t|0),e.push(c.i/t|0),Dr(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=TS(os(n),e,t),Lr(n,e,t,i,s,r,2)):o===2&&AS(n,e,t,i,s,r):Lr(os(n),e,t,i,s,r,1);break}}}function ES(n){const e=n.prev,t=n,i=n.next;if(xt(e,t,i)>=0)return!1;const s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,h=s<r?s<o?s:o:r<o?r:o,f=a<l?a<c?a:c:l<c?l:c,u=s>r?s>o?s:o:r>o?r:o,d=a>l?a>c?a:c:l>c?l:c;let g=i.next;for(;g!==e;){if(g.x>=h&&g.x<=u&&g.y>=f&&g.y<=d&&Ps(s,a,r,l,o,c,g.x,g.y)&&xt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function wS(n,e,t,i){const s=n.prev,r=n,o=n.next;if(xt(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,h=s.y,f=r.y,u=o.y,d=a<l?a<c?a:c:l<c?l:c,g=h<f?h<u?h:u:f<u?f:u,_=a>l?a>c?a:c:l>c?l:c,m=h>f?h>u?h:u:f>u?f:u,p=xc(d,g,e,t,i),T=xc(_,m,e,t,i);let M=n.prevZ,b=n.nextZ;for(;M&&M.z>=p&&b&&b.z<=T;){if(M.x>=d&&M.x<=_&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&Ps(a,h,l,f,c,u,M.x,M.y)&&xt(M.prev,M,M.next)>=0||(M=M.prevZ,b.x>=d&&b.x<=_&&b.y>=g&&b.y<=m&&b!==s&&b!==o&&Ps(a,h,l,f,c,u,b.x,b.y)&&xt(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;M&&M.z>=p;){if(M.x>=d&&M.x<=_&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&Ps(a,h,l,f,c,u,M.x,M.y)&&xt(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;b&&b.z<=T;){if(b.x>=d&&b.x<=_&&b.y>=g&&b.y<=m&&b!==s&&b!==o&&Ps(a,h,l,f,c,u,b.x,b.y)&&xt(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function TS(n,e,t){let i=n;do{const s=i.prev,r=i.next.next;!da(s,r)&&op(s,i,i.next,r)&&Ir(s,r)&&Ir(r,s)&&(e.push(s.i/t|0),e.push(i.i/t|0),e.push(r.i/t|0),Dr(i),Dr(i.next),i=n=r),i=i.next}while(i!==n);return os(i)}function AS(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&OS(o,a)){let l=ap(o,a);o=os(o,o.next),l=os(l,l.next),Lr(o,e,t,i,s,r,0),Lr(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function RS(n,e,t,i){const s=[];let r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=rp(n,a,l,i,!1),c===c.next&&(c.steiner=!0),s.push(NS(c));for(s.sort(CS),r=0;r<s.length;r++)t=PS(s[r],t);return t}function CS(n,e){return n.x-e.x}function PS(n,e){const t=LS(n,e);if(!t)return e;const i=ap(t,n);return os(i,i.next),os(t,t.next)}function LS(n,e){let t=e,i=-1/0,s;const r=n.x,o=n.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const u=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=r&&u>i&&(i=u,s=t.x<t.next.x?t:t.next,u===r))return s}t=t.next}while(t!==e);if(!s)return null;const a=s,l=s.x,c=s.y;let h=1/0,f;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&Ps(o<c?r:i,o,l,c,o<c?i:r,o,t.x,t.y)&&(f=Math.abs(o-t.y)/(r-t.x),Ir(t,n)&&(f<h||f===h&&(t.x>s.x||t.x===s.x&&IS(s,t)))&&(s=t,h=f)),t=t.next;while(t!==a);return s}function IS(n,e){return xt(n.prev,n,e.prev)<0&&xt(e.next,n,n.next)<0}function DS(n,e,t,i){let s=n;do s.z===0&&(s.z=xc(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,US(s)}function US(n){let e,t,i,s,r,o,a,l,c=1;do{for(t=n,n=null,r=null,o=0;t;){for(o++,i=t,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||t.z<=i.z)?(s=t,t=t.nextZ,a--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;t=i}r.nextZ=null,c*=2}while(o>1);return n}function xc(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function NS(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Ps(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function OS(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!FS(n,e)&&(Ir(n,e)&&Ir(e,n)&&BS(n,e)&&(xt(n.prev,n,e.prev)||xt(n,e.prev,e))||da(n,e)&&xt(n.prev,n,n.next)>0&&xt(e.prev,e,e.next)>0)}function xt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function da(n,e){return n.x===e.x&&n.y===e.y}function op(n,e,t,i){const s=bo(xt(n,e,t)),r=bo(xt(n,e,i)),o=bo(xt(t,i,n)),a=bo(xt(t,i,e));return!!(s!==r&&o!==a||s===0&&So(n,t,e)||r===0&&So(n,i,e)||o===0&&So(t,n,i)||a===0&&So(t,e,i))}function So(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function bo(n){return n>0?1:n<0?-1:0}function FS(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&op(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Ir(n,e){return xt(n.prev,n,n.next)<0?xt(n,e,n.next)>=0&&xt(n,n.prev,e)>=0:xt(n,e,n.prev)<0||xt(n,n.next,e)<0}function BS(n,e){let t=n,i=!1;const s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function ap(n,e){const t=new yc(n.i,n.x,n.y),i=new yc(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Zu(n,e,t,i){const s=new yc(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Dr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function yc(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function kS(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class yr{static area(e){const t=e.length;let i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return yr.area(e)<0}static triangulateShape(e,t){const i=[],s=[],r=[];Qu(e),ef(i,e);let o=e.length;t.forEach(Qu);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,ef(i,t[l]);const a=bS.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Qu(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function ef(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class Ur extends jt{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);const a=[],l=[],c=[],h=[];let f=e;const u=(t-e)/s,d=new D,g=new Re;for(let _=0;_<=s;_++){for(let m=0;m<=i;m++){const p=r+m/i*o;d.x=f*Math.cos(p),d.y=f*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/t+1)/2,g.y=(d.y/t+1)/2,h.push(g.x,g.y)}f+=u}for(let _=0;_<s;_++){const m=_*(i+1);for(let p=0;p<i;p++){const T=p+m,M=T,b=T+i+1,O=T+i+2,R=T+1;a.push(M,b,R),a.push(b,O,R)}}this.setIndex(a),this.setAttribute("position",new St(l,3)),this.setAttribute("normal",new St(c,3)),this.setAttribute("uv",new St(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ur(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ah extends jt{constructor(e=new sp([new Re(0,.5),new Re(-.5,-.5),new Re(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],s=[],r=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new St(s,3)),this.setAttribute("normal",new St(r,3)),this.setAttribute("uv",new St(o,2));function c(h){const f=s.length/3,u=h.extractPoints(t);let d=u.shape;const g=u.holes;yr.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=g.length;m<p;m++){const T=g[m];yr.isClockWise(T)===!0&&(g[m]=T.reverse())}const _=yr.triangulateShape(d,g);for(let m=0,p=g.length;m<p;m++){const T=g[m];d=d.concat(T)}for(let m=0,p=d.length;m<p;m++){const T=d[m];s.push(T.x,T.y,0),r.push(0,0,1),o.push(T.x,T.y)}for(let m=0,p=_.length;m<p;m++){const T=_[m],M=T[0]+f,b=T[1]+f,O=T[2]+f;i.push(M,b,O),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return zS(t,e)}static fromJSON(e,t){const i=[];for(let s=0,r=e.shapes.length;s<r;s++){const o=t[e.shapes[s]];i.push(o)}return new ah(i,e.curveSegments)}}function zS(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){const s=n[t];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e}class lh extends jt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const o=[],a=[],l=[],c=[],h=new D,f=new D,u=new D;for(let d=0;d<=i;d++)for(let g=0;g<=s;g++){const _=g/s*r,m=d/i*Math.PI*2;f.x=(e+t*Math.cos(m))*Math.cos(_),f.y=(e+t*Math.cos(m))*Math.sin(_),f.z=t*Math.sin(m),a.push(f.x,f.y,f.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),u.subVectors(f,h).normalize(),l.push(u.x,u.y,u.z),c.push(g/s),c.push(d/i)}for(let d=1;d<=i;d++)for(let g=1;g<=s;g++){const _=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,p=(s+1)*(d-1)+g,T=(s+1)*d+g;o.push(_,m,T),o.push(m,p,T)}this.setIndex(o),this.setAttribute("position",new St(a,3)),this.setAttribute("normal",new St(l,3)),this.setAttribute("uv",new St(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lh(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class lp extends ls{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new $e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fd,this.normalScale=new Re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ch extends Lt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class HS extends ch{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new $e(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const gl=new dt,tf=new D,nf=new D;class cp{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Re(512,512),this.map=null,this.mapPass=null,this.matrix=new dt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zc,this._frameExtents=new Re(1,1),this._viewportCount=1,this._viewports=[new lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;tf.setFromMatrixPosition(e.matrixWorld),t.position.copy(tf),nf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(nf),t.updateMatrixWorld(),gl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(gl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const sf=new dt,rr=new D,_l=new D;class VS extends cp{constructor(){super(new gn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Re(4,2),this._viewportCount=6,this._viewports=[new lt(2,1,1,1),new lt(0,1,1,1),new lt(3,1,1,1),new lt(1,1,1,1),new lt(3,0,1,1),new lt(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),rr.setFromMatrixPosition(e.matrixWorld),i.position.copy(rr),_l.copy(i.position),_l.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(_l),i.updateMatrixWorld(),s.makeTranslation(-rr.x,-rr.y,-rr.z),sf.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sf)}}class rf extends ch{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new VS}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class GS extends cp{constructor(){super(new Qc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class WS extends ch{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.shadow=new GS}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const of=new dt;class XS{constructor(e,t,i=0,s=1/0){this.ray=new $c(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Jc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return of.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(of),this}intersectObject(e,t=!0,i=[]){return Mc(e,this,i,t),i.sort(af),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Mc(e[s],this,i,t);return i.sort(af),i}}function af(n,e){return n.distance-e.distance}function Mc(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)Mc(r[o],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Hc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Hc);class YS{constructor(){de(this,"geometry");de(this,"materials",["#ed4326","#ff931f","#ffe77b"].map(e=>new mn({color:e,side:en,toneMapped:!1,depthWrite:!1})));const e=new sp;e.moveTo(0,0),e.bezierCurveTo(-.5,-.02,-.65,.35,-.38,.75),e.bezierCurveTo(-.4,.48,-.1,.49,-.18,.89),e.bezierCurveTo(-.24,1.16,.15,1.27,.13,1.6),e.bezierCurveTo(.62,1.23,.18,.94,.38,.65),e.bezierCurveTo(.43,.82,.64,.89,.59,1.05),e.bezierCurveTo(.97,.53,.75,.03,.15,0),e.closePath(),this.geometry=new ah(e,16)}create(e=!1){const t=new Nt;for(let i=0;i<3;i++){const s=new ft(e?this.geometry.clone():this.geometry,this.materials[i]);s.scale.set(i===0?1:i===1?.69:.36,i===0?1:i===1?.73:.46,1),s.position.set(i*.035,.015*i,.012*i),s.renderOrder=1+i,t.add(s)}return t}dispose(){this.geometry.dispose();for(const e of this.materials)e.dispose()}}class qS{constructor(e=Math.random){de(this,"drops",[]);de(this,"wounds",[]);this.random=e}clear(){this.drops.length=0,this.wounds.length=0}get emitterCount(){return this.wounds.length}burst(e,t,i,s,r=!1){for(let o=0;o<i&&this.drops.length<600;o++)this.drops.push({x:e,y:t,z:1.1+(this.random()-.5)*.3,vx:(this.random()-.5)*(s?4:5),vy:s?7+this.random()*6:r?-1-this.random()*3:(this.random()-.35)*5,vz:(this.random()-.5)*1.8,life:1.6+this.random()*.6,settled:!1})}event(e,t=!1){if(e.kind==="hit"&&this.burst(e.x,e.y,t?7:30,!1),e.kind!=="detach"||!e.part||!e.severed)return;const i=e.part==="head";this.burst(e.x,e.y,t?16:i?80:50,i,!i),this.wounds.length<32&&this.wounds.push({actor:e.actor,part:e.part,x:e.x,y:e.y,life:3,carry:0,up:i})}update(e,t,i=!1){for(let s=this.wounds.length-1;s>=0;s--){const r=this.wounds[s];if(r.life-=e,r.life<=0){this.wounds.splice(s,1);continue}const o=t.actors[r.actor];if(o&&o.hp>0){const l=pn(o,r.part);r.x=o.x+l.x,r.y=o.y+l.y+(r.up?-.2:l.h*.35)}r.carry+=e*(i?10:36);const a=Math.floor(r.carry);r.carry-=a,this.burst(r.x,r.y,a,r.up,!r.up)}for(let s=this.drops.length-1;s>=0;s--){const r=this.drops[s];if(r.life-=e,r.life<=0||r.y<-15){this.drops.splice(s,1);continue}if(r.settled)continue;const o=r.y;if(r.x+=r.vx*e,r.y+=r.vy*e,r.z+=r.vz*e,r.vy-=17*e,r.vy>=0)continue;let a=-1/0;for(const l of t.props){if(l.hp<=0||l.falling||!["crate","floor","roof","balcony","table","car","truck","barrier"].includes(l.kind))continue;const c=l.y+l.h/2;Math.abs(r.x-l.x)<=l.w/2&&o>=c&&r.y<=c&&(a=Math.max(a,c))}a>-1/0&&(r.y=a+.025,r.settled=!0,r.vx=r.vy=r.vz=0,r.life=1.2)}}}const Mr=new Map;let zn;function jS(){if(zn)return zn;const n=document.createElement("canvas");n.width=128,n.height=128;const e=n.getContext("2d");e.fillStyle="#ededeb",e.fillRect(0,0,128,128);let t=719;const i=()=>(t=Math.imul(t,1664525)+1013904223|0,(t>>>0)/4294967296);for(let s=0;s<2e3;s++)e.fillStyle=`rgba(24,19,31,${i()*.15})`,e.fillRect(i()*128,i()*128,1+i()*3,1+i()*2);for(let s=0;s<14;s++)e.fillStyle="#231c3014",e.fillRect(i()*128,i()*128,1+i()*6,i()*28);return zn=new nh(n),zn.colorSpace=Qt,zn.magFilter=Yt,zn}function Uo(n){return Mr.has(n)||Mr.set(n,new lp({color:n,roughness:.88,flatShading:!0,map:kr.includes(n)||la.includes(n)?null:jS()})),Mr.get(n)}function Xs(n,e,t,i){const s=new ft(new Wn(n,e,t),Uo(i));return s.castShadow=!0,s.receiveShadow=!0,s}function Ge(n,e,t,i,s,r,o,a){const l=Xs(e,t,i,a);return l.position.set(s,r,o),n.add(l),l}const Sr=new Map;function Rn(n,e,t,i="#f7d438",s="#241e33"){const r=n+i+s;if(!Sr.has(r)){const o=document.createElement("canvas");o.width=512,o.height=192;const a=o.getContext("2d");a.fillStyle=s,a.fillRect(0,0,512,192),a.strokeStyle=i,a.lineWidth=7,a.strokeRect(10,10,492,172);const l=n.split(`
`);a.fillStyle=i,a.textAlign="center",a.textBaseline="middle",a.font=`900 ${l.length>1?54:72}px Impact, sans-serif`,l.forEach((h,f)=>a.fillText(h,256,96+(f-(l.length-1)/2)*65,470));const c=new nh(o);c.colorSpace=Qt,c.magFilter=Yt,Sr.set(r,new mn({map:c}))}return new ft(new cs(e,t),Sr.get(r))}function KS(n){const e=new Nt;e.userData.look=JSON.stringify(n);for(const t of ln){const i=is[t],s=kr[n.skin],r=Bs[n.color],a=t==="head"||t.startsWith("hand")||t.startsWith("forearm")||n.clothes===1&&t.startsWith("arm")?s:t.startsWith("foot")?"#272530":t.startsWith("thigh")||t.startsWith("shin")?n.clothes===2?r:"#333346":r,l=Xs(i.w,i.h,.5,a);if(l.name=t,l.position.set(i.x,i.y,0),e.add(l),t==="torso"&&(n.clothes===0?(Ge(l,.06,.75,.025,0,0,.27,"#292635"),Ge(l,.16,.13,.03,.2,.05,.27,"#eed5a0")):n.clothes===2&&(Ge(l,.6,.12,.025,0,-.15,.27,"#c7c8c0"),Ge(l,.08,.7,.03,-.2,0,.27,"#a9a9a0")),n.gender===1&&Ge(l,.35,.23,.025,0,.08,.27,"#cfcccc"),n.gender===2&&(Ge(l,.04,.3,.04,-.23,.27,.27,"#f3dc7d"),Ge(l,.04,.3,.04,.23,.27,.27,"#f3dc7d"))),t==="head"){Ge(l,.12,.07,.035,-.15,.05,.27,"#26212e"),Ge(l,.12,.07,.035,.15,.05,.27,"#26212e"),Ge(l,.15,.035,.035,0,-.14,.28,"#6b353b");const c=la[n.hairColor];if(n.hair!==4){if(Ge(l,n.hair===2?.18:.64,n.hair===2?.35:.19,.54,0,.36,0,c),n.hair===1)for(const h of[-.21,0,.21])Ge(l,.23,.22,.6,h,.4,0,c);n.hair===3&&(Ge(l,.14,.65,.53,-.31,0,0,c),Ge(l,.14,.65,.53,.31,0,0,c))}}}return e}function vl(n){const e=new Nt;if(n==="laser")Ge(e,.85,.25,.23,.05,0,0,"#334052"),Ge(e,.3,.12,.3,.55,0,0,"#66ffff"),Ge(e,.12,.35,.14,-.2,-.2,0,"#6c40a8");else if(n==="flamethrower")Ge(e,.8,.25,.25,.1,0,0,"#795536"),Ge(e,.3,.3,.3,.55,0,0,"#ff7735"),Ge(e,.35,.6,.3,-.25,-.1,0,"#ba332b");else if(n==="axe")Ge(e,.12,.95,.12,0,0,0,"#865d3d"),Ge(e,.55,.4,.16,.16,.35,0,"#b9bec3");else if(n==="shank"){Ge(e,.14,.35,.14,0,-.12,0,"#3d3545");const t=Ge(e,.12,.5,.05,0,.27,0,"#e0e4df");t.rotation.z=-.07}else n==="shotgun"?(Ge(e,1,.12,.14,.2,0,0,"#9296a0"),Ge(e,.48,.22,.21,-.4,-.05,0,"#906445"),Ge(e,.23,.23,.22,.07,-.06,0,"#69503c")):n==="smg"&&(Ge(e,.8,.25,.2,0,0,0,"#4b5160"),Ge(e,.12,.4,.12,-.1,-.25,0,"#343645"),Ge(e,.35,.1,.11,.5,.07,0,"#9b9fa8"));return e}function hp(n,e){const t=new Nt,i=n.w,s=n.h,o={metal:"#68737c",wood:"#7f665c",glass:"#3c929c",fuel:"#c7444f",concrete:"#5d5c6a",fabric:"#837e78"}[n.material],a=(l,c,h,f,u,d,g)=>Ge(t,l,c,h,f,u,d,g);switch(n.kind){case"crate":{a(i,s,1,0,0,0,n.color?"#bd6944":"#9f7c45");for(const u of[-i*.43,i*.43])a(.12,s,.08,u,0,.54,"#e0b979");for(const u of[-s*.43,s*.43])a(i,.1,.08,0,u,.55,"#e0b979");const h=new ft(new Ur(.16,.22,16),Uo("#ffe17b"));h.position.set(0,.12,.57),t.add(h);const f=Rn(n.color?"AIM HIGH":"AIM LOW",1.1,.27,"#ffe17b");f.position.set(0,-.31,.58),t.add(f);break}case"floor":a(i,s,8,0,0,-1,"#454353"),a(i*.4,.025,.12,0,s/2+.035,-1.5,"#a69a70"),a(i,.04,.12,0,s/2+.02,2.9,"#9c8958");break;case"pump":a(i,s,1.35,0,0,-.6,"#bd364f"),a(i*.9,s*.4,1.5,0,.45,-.55,"#d3cebc"),a(i*.65,.6,.07,0,.65,.23,"#152d31");const l=Rn("9.99",i*.6,.45,"#a4e8ab","#13272b");l.position.set(0,.7,.29),t.add(l),a(.1,s*.7,.1,i*.57,-.3,-.1,"#1a1728");break;case"car":case"truck":a(i,s*.55,2,0,-s*.1,0,n.kind==="car"?"#b6a46c":"#527a78"),a(i*.48,s*.5,1.7,-i*.1,s*.34,0,n.kind==="car"?"#537c81":"#9b8174"),a(i*.4,s*.3,.06,-i*.1,s*.33,.89,"#243b4c"),a(i,.18,2.1,0,-s*.36,0,"#393442");for(const h of[-i*.34,i*.34]){const f=new ft(new oh(.52,.52,2.1,10),Uo("#26232d"));f.rotation.x=Math.PI/2,f.position.set(h,-s*.35,0),t.add(f)}a(.25,.25,.04,i*.43,0,1.03,"#e7d68f");break;case"post":case"pole":a(i,s,.6,0,0,-2,o),a(i*1.5,.2,.9,0,-s/2,-2,"#8f8b8f");break;case"roof":case"balcony":a(i,s,5,0,0,-1.2,e==="motel"?"#857587":"#b54b72"),a(i,.14,.15,0,0,1.35,"#f1b638");break;case"glass":const c=new ft(new Wn(i,s,.09),new lp({color:"#488894",transparent:!0,opacity:.6,roughness:.3}));c.position.z=-1.2,c.userData.ownedMaterial=!0,t.add(c),a(i,.07,.13,0,-s/2,-1.15,"#c8b7a0");break;case"sign":{const h=e==="gas"?`LAST STOP
GAS`:e==="rest"?`REST AREA
1 MILE`:`NO-TELL
VACANCY`;a(i,s,.35,0,0,-1.8,"#382e48");const f=Rn(h,i*.94,s*.93,e==="motel"?"#ff8bad":"#f6d23a");f.position.z=-1.59,t.add(f);break}case"can":a(i,s,.6,0,0,0,"#d7ad3a"),a(i*.5,.15,.18,0,s/2,0,"#33303b");break;case"door":a(i,s,.2,0,0,-1.9,"#694761"),a(.09,.09,.1,i*.3,0,-1.73,"#ead176");break;case"table":case"bench":a(i,.24,1.6,0,s*.35,0,o);for(const h of[-i*.36,i*.36])a(.15,s,.8,h,0,0,"#514353");break;case"mattress":a(i,s,1.8,0,0,0,"#aea291");for(let h=-i*.4;h<i*.5;h+=.45)a(.04,s*1.01,1.81,h,0,0,"#857887");break;case"tire":{const h=new ft(new lh(i*.36,i*.16,6,12),Uo("#292735"));t.add(h);break}case"railing":a(i,.09,.12,0,s/2,-.1,"#bcaabb");for(let h=-i/2;h<i/2;h+=.8)a(.06,s,.1,h,0,-.1,"#bcaabb");break;default:if(a(i,s,1.35,0,0,0,o),["fridge","vending","ice","tv"].includes(n.kind)){a(i*.8,s*.7,.07,0,s*.05,.71,"#243745");const h=Rn(n.kind==="vending"?`BAD
IDEA`:n.kind==="ice"?"ICE":n.kind==="tv"?"NO SIGNAL":"COLD",i*.7,s*.45,n.kind==="tv"?"#b99bbb":"#b9cfa2","#1e3040");h.position.set(0,.1,.76),t.add(h)}if(n.kind==="ac")for(let h=-i*.4;h<i*.4;h+=.22)a(.06,s*.65,.05,h,0,.73,"#383b4b")}return t}function $S(n){const e=new Nt,t=document.createElement("canvas");t.width=2048,t.height=512;const i=t.getContext("2d");i.fillStyle=n==="motel"?"#261f37":n==="rest"?"#263339":"#2b263a",i.fillRect(0,0,2048,512);for(let a=0;a<90;a++){const l=a*25,c=130+a*73%150;i.fillStyle=["#343246","#3f364b","#2e3446"][a%3],i.fillRect(l,c,30+a%6*9,512-c),i.fillStyle=a%2?"#927652":"#486577";for(let h=0;h<5;h++)i.fillRect(l+8,c+20+h*36,7,10)}const s=new nh(t);s.colorSpace=Qt,s.magFilter=Yt;const r=new ft(new cs(190,35),new mn({map:s}));r.position.set(0,12,-18),r.userData.ownedTexture=!0,e.add(r);const o=new Nt;if(n==="gas"){Ge(o,31,8,1,24,3,-5,"#675d73"),Ge(o,31,.5,1.4,24,7,-4.8,"#b95b74");for(let l=13;l<38;l+=6)Ge(o,4.8,3.5,.06,l,2.4,-4.43,"#273c4c");const a=Rn("CHEAP THRILLS / OPEN 24H",27,1.4,"#f0c32f","#33283e");a.position.set(24,6,-4.4),o.add(a)}else if(n==="motel"){Ge(o,118,10,1,0,4.5,-4.5,"#66576c"),Ge(o,119,.6,1.4,0,9.5,-4.2,"#9d617e");for(let a=-50;a<55;a+=11)for(const l of[2,7]){Ge(o,4.2,3.4,.05,a,l,-3.94,"#302b3d");const c=Rn(String(101+Math.floor((a+50)/11)+(l>3?10:0)),1.2,.5,"#cca881","#372d40");c.position.set(a,l+1.1,-3.88),o.add(c)}}else{Ge(o,25,6,1,27,2.7,-5,"#656c73");const a=Rn("RESTROOMS / NO GUARANTEES",24,1.2,"#94c6bd","#263c45");a.position.set(27,5,-4.4),o.add(a)}return e.add(o),e}function Zt(n){n.traverse(e=>{var t;if(e instanceof ft&&(e.geometry.dispose(),e.userData.ownedMaterial&&e.material.dispose(),e.userData.ownedTexture)){const i=e.material;(t=i.map)==null||t.dispose(),i.dispose()}})}function JS(){zn==null||zn.dispose(),zn=void 0,Mr.forEach(n=>n.dispose()),Mr.clear(),Sr.forEach(n=>{var e;(e=n.map)==null||e.dispose(),n.dispose()}),Sr.clear()}function up(n,e){return n==="head"||n.startsWith("hand")||n.startsWith("forearm")?kr[e.skin]:n.startsWith("foot")?"#292735":Bs[e.color]}function lf(n){if(n.kind==="limb"){const e=new Nt,t=n.part??"forearmL",i=is[t];return e.add(Xs(i.w,i.h,.35,n.look?up(t,n.look):"#b87953")),e}return hp({kind:n.kind,w:n.kind==="tire"?1.1:n.kind==="can"?.7:1.1,h:n.kind==="tire"||n.kind==="can"?1.2:1.3,hp:n.hp,maxHp:n.hp,material:n.kind==="can"?"fuel":n.kind==="tv"?"glass":"fabric",color:0},"gas")}function cf(n){const e=new Nt;if(n==="cart"){Ge(e,1,.12,.65,0,-.12,0,"#75d8bf"),Ge(e,.1,.7,.65,.45,.2,0,"#75d8bf"),Ge(e,.8,.3,.08,0,.1,.3,"#b7ecda"),Ge(e,.8,.3,.08,0,.1,-.3,"#b7ecda");for(const t of[-.35,.35])for(const i of[-.25,.25]){const s=Xs(.18,.18,.12,"#26232d");s.position.set(t,-.34,i),e.add(s)}}else for(const t of[-.25,.25])if(Ge(e,.35,.3,.35,t,0,0,n==="recoil"?"#af83f2":"#75d8bf"),Ge(e,.5,.13,.4,t+.08,-.2,0,"#d2f6da"),n==="skates")for(const i of[-.13,.13])Ge(e,.13,.13,.42,t+i,-.33,0,"#ffe17b");else Ge(e,.2,.12,.25,t,-.34,0,"#ffb255");return e}class ZS{constructor(e,t,i){de(this,"renderer");de(this,"scene",new cS);de(this,"camera",new Qc);de(this,"actors",new Map);de(this,"props",new Map);de(this,"blood",new Map);de(this,"debris",new Map);de(this,"shots",new Map);de(this,"pickups",new Map);de(this,"environment",new Nt);de(this,"venue","");de(this,"flames",new Map);de(this,"flameStyle",new YS);de(this,"thrownModels",new Map);de(this,"boostModels",new Map);de(this,"majorModel");de(this,"bloodParticles",new qS);de(this,"bloodGeometry",new jt);de(this,"bloodPositions",new Float32Array(600*3));de(this,"bloodPoints",new fl(this.bloodGeometry,new _c({size:6,sizeAttenuation:!1,color:"#f52e48",transparent:!0,opacity:1,depthWrite:!1,toneMapped:!1,fog:!1})));de(this,"bloodRound",-1);de(this,"beams",[]);de(this,"frame",0);de(this,"last",0);de(this,"center",0);de(this,"width",1);de(this,"height",1);de(this,"observer");de(this,"focused",0);de(this,"particleGeometry",new jt);de(this,"positions",new Float32Array(500*3));de(this,"colors",new Float32Array(500*3));de(this,"particles",[]);de(this,"points");de(this,"sun");de(this,"left",new ft(new cs(1,30),new mn({color:"#c83f62",transparent:!0,opacity:.22,side:en,depthWrite:!1})));de(this,"right",this.left.clone());de(this,"reducedEffects",!1);de(this,"resize",()=>{this.width=Math.max(1,this.host.clientWidth),this.height=Math.max(1,this.host.clientHeight),this.renderer.setSize(this.width,this.height);const e=this.width/this.height,t=e<.8?12:9;this.camera.left=-t*e,this.camera.right=t*e,this.camera.top=t,this.camera.bottom=-t,this.camera.near=.1,this.camera.far=150,this.camera.updateProjectionMatrix()});de(this,"animate",e=>{const t=Math.min(.08,(e-this.last)/1e3||0);this.last=e,this.render(this.state(),t,e/1e3),this.frame=requestAnimationFrame(this.animate)});this.host=e,this.state=t,this.localId=i,this.renderer=new lS({antialias:!1,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,1.4)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Vc,this.renderer.outputColorSpace=Qt,this.renderer.toneMapping=wd,this.renderer.toneMappingExposure=1.28,e.appendChild(this.renderer.domElement),this.scene.background=new $e("#211b32"),this.scene.fog=new th("#211b32",40,105),this.scene.add(new HS("#b7a8d8","#43424a",2.5)),this.sun=new WS("#edd6a5",3),this.sun.position.set(-10,16,14),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(1024,1024),Object.assign(this.sun.shadow.camera,{left:-24,right:24,top:20,bottom:-15,far:70}),this.sun.shadow.normalBias=.05,this.scene.add(this.sun,this.sun.target);const s=new rf("#ed2867",160,33);s.position.set(-27,8,6);const r=new rf("#26c6c1",120,33);r.position.set(25,7,5),this.scene.add(s,r),this.scene.add(this.environment,this.left,this.right),this.left.position.z=3.5,this.right.position.z=3.5,this.particleGeometry.setAttribute("position",new hn(this.positions,3).setUsage(Na)),this.particleGeometry.setAttribute("color",new hn(this.colors,3).setUsage(Na)),this.particleGeometry.setDrawRange(0,0),this.points=new fl(this.particleGeometry,new _c({size:3,sizeAttenuation:!1,toneMapped:!1,vertexColors:!0,transparent:!0,opacity:.95,depthWrite:!1})),this.points.frustumCulled=!1,this.scene.add(this.points),this.bloodGeometry.setAttribute("position",new hn(this.bloodPositions,3).setUsage(Na)),this.bloodGeometry.setDrawRange(0,0),this.bloodPoints.frustumCulled=!1,this.bloodPoints.renderOrder=3,this.scene.add(this.bloodPoints),this.observer=new ResizeObserver(this.resize),this.observer.observe(e),this.resize(),this.frame=requestAnimationFrame(this.animate)}get canvas(){return this.renderer.domElement}soundPosition(e,t){const i=new D(e,t,.7).project(this.camera);return ag(i.x,i.y)}setSpectator(e){this.focused=e}aim(e,t){const i=this.host.getBoundingClientRect(),s=new Re((e-i.left)/i.width*2-1,-(t-i.top)/i.height*2+1),r=new XS;r.setFromCamera(s,this.camera);const o=new D;if(r.ray.intersectPlane(new bi(new D(0,0,1),0),o)){const a=this.state().actors[this.localId()],l=o.x-a.x,c=o.y-a.y-ai(a),h=Math.max(.01,Math.hypot(l,c));return{x:Math.round(l/h*1024)/1024,y:Math.round(c/h*1024)/1024}}return{x:1,y:0}}present(e){this.bloodRound!==this.state().round&&(this.bloodParticles.clear(),this.bloodRound=this.state().round);for(const t of e){if(this.bloodParticles.event(t,this.reducedEffects),t.kind==="hit"||t.kind==="detach")continue;if(t.weapon==="laser"&&t.endX!==void 0&&t.endY!==void 0){const r=t.endX-t.x,o=t.endY-t.y,a=new ft(new Wn(Math.max(.01,Math.hypot(r,o)),.085,.085),new mn({color:"#8cffff",transparent:!0,opacity:1,depthWrite:!1}));a.position.set((t.x+t.endX)/2,(t.y+t.endY)/2,.8),a.rotation.z=Math.atan2(o,r),this.scene.add(a),this.beams.push({mesh:a,life:.16})}if(["ignite","jump","land","swap","reload"].includes(t.kind))continue;const i=new $e(t.kind==="scream"||t.kind==="cry"?"#80cde1":t.kind==="explosion"?"#f9a349":t.kind==="break"?"#d2c3a4":"#f9de5e"),s=this.reducedEffects?2:t.kind==="explosion"?35:t.kind==="shot"?4:10;for(let r=0;r<s&&this.particles.length<500;r++)this.particles.push({x:t.x,y:t.y,z:1,vx:(Math.random()-.5)*(t.kind==="explosion"?12:6),vy:Math.random()*7,life:t.kind==="shot"?.08:.3+Math.random()*.4,color:i})}}chaosEffects(e,t){for(const[s,r]of this.thrownModels)e.thrown.some(o=>o.id===s)||(this.scene.remove(r),Zt(r),this.thrownModels.delete(s));for(const s of e.thrown){let r=this.thrownModels.get(s.id);if(!r){r=lf(s);const o=new ft(new Ur(.65,.71,20),new mn({color:"#ff345f",side:en,toneMapped:!1}));o.position.z=1.2,o.userData.ownedMaterial=!0,r.add(o),this.thrownModels.set(s.id,r),this.scene.add(r)}r.position.set(s.x,s.y,.8),r.rotation.z=s.angle}for(const[s,r]of this.boostModels)e.boosts.some(o=>o.id===s)||(this.scene.remove(r),Zt(r),this.boostModels.delete(s));for(const s of e.boosts){let r=this.boostModels.get(s.id);if(!r){r=cf(s.kind);const o=Rn(Sd[s.kind],2.5,.4,"#a9f5d7");o.position.set(0,.85,.3),r.add(o),this.boostModels.set(s.id,r),this.scene.add(r)}r.position.set(s.x,s.y+Math.sin(t*3)*.1,1),r.rotation.y=Math.sin(t)*.15}const i=e.major;if(this.majorModel&&(!i||i.kind!==this.majorModel.kind)&&(this.scene.remove(this.majorModel.group),Zt(this.majorModel.group),this.majorModel=void 0),i){const s=i.kind==="foam",r=i.kind==="truck"?128:s?16:4;if(!this.majorModel){const l=new Nt,c=s?"#78e9cf":"#ff345f",h=Rn(s?"FOAM / NO DAMAGE":i.kind==="truck"?"DANGER / TRUCK →":"DANGER / FALLING AC",4,.6,c);h.name="warning",l.add(h);const f=i.kind==="truck"?48:12;for(let u=0;u<f;u++){const d=new ft(new Wn(r/f*.6,.035,2.8),new mn({color:c,transparent:!0,opacity:.6,toneMapped:!1,depthWrite:!1}));d.userData.ownedMaterial=!0,d.position.set((u/(f-1)-.5)*r,.28,.8),d.rotation.y=.3,l.add(d)}this.scene.add(l),this.majorModel={kind:i.kind,group:l}}const o=this.majorModel.group;o.position.x=i.kind==="truck"?0:i.x;const a=o.getObjectByName("warning");if(a.position.set(i.kind==="truck"?Math.max(this.center-8,Math.min(this.center+8,i.x)):0,3.7,2),a.scale.setScalar(.98+Math.sin(t*6)*.025),s&&i.started&&this.particles.length<470)for(let l=0;l<2;l++)this.particles.push({x:i.x+(Math.random()-.5)*16,y:6,z:1,vx:.4,vy:-3,life:1.5,color:new $e("#acf5e3")})}}burningEffects(e,t,i){const s=[...e.fires.map(r=>({key:`f${r.id}`,x:r.x,y:r.y-.3,w:r.radius*1.6,h:1.8})),...e.actors.filter(r=>r.hp>0&&r.onFire).map(r=>({key:`a${r.id}`,x:r.x,y:r.y+.15,w:1,h:Nn(r)})),...e.props.filter(r=>r.hp>0&&r.onFire).map(r=>({key:`p${r.id}`,x:r.x,y:r.y-r.h/2,w:Math.min(5,r.w),h:Math.min(3,r.h)})),...e.debris.filter(r=>r.hp>0&&r.onFire).map(r=>({key:`d${r.id}`,x:r.x,y:r.y-r.h/2,w:r.w,h:.5})),...e.boosts.filter(r=>r.onFire).map(r=>({key:`b${r.id}`,x:r.x,y:r.y,w:.8,h:.6})),...e.pickups.filter(r=>r.onFire).map(r=>({key:`i${r.id}`,x:r.x,y:r.y,w:.6,h:.6}))].filter(r=>Math.abs(r.x-this.center)<30).slice(0,96);for(const[r,o]of this.flames)s.some(a=>a.key===r)||(this.scene.remove(o),this.flames.delete(r));for(const r of s){let o=this.flames.get(r.key);if(!o){o=new Nt;for(let a=0;a<5;a++){const l=this.flameStyle.create();o.add(l)}this.flames.set(r.key,o),this.scene.add(o)}o.position.set(r.x,r.y,.75),o.quaternion.copy(this.camera.quaternion),o.children.forEach((a,l)=>{const c=.86+Math.sin(t*10+l*2+r.x)*.13+Math.sin(t*17+l)*.06,h=Math.max(.45,r.h)*c;a.position.set((l/4-.5)*r.w+Math.sin(t*7+l)*.045,0,l*.035),a.scale.set((r.w/4+.3)*(1.05-Math.sin(t*10+l)*.08),h*.7,1),a.rotation.z=Math.sin(t*8+l)*.055}),!this.reducedEffects&&this.particles.length<480&&Math.random()<i*8&&this.particles.push({x:r.x,y:r.y+r.h,z:.5,vx:.3,vy:1.6,life:.8,color:new $e("#57505c")})}}render(e,t,i){var h,f;if(e.venue!==this.venue){this.scene.remove(this.environment),Zt(this.environment),this.environment=$S(e.venue),this.scene.add(this.environment),this.venue=e.venue;for(const u of this.props.values())this.scene.remove(u),Zt(u);this.props.clear()}const s=e.phase==="lobby"||e.phase==="countdown",r=e.actors[this.localId()],o=r.hp>0?r:((h=e.actors[this.focused])==null?void 0:h.hp)>0&&!e.actors[this.focused].pendingSpawn?e.actors[this.focused]:e.actors.find(u=>u.hp>0&&!u.pendingSpawn)??r,a=s?-25:o.x;this.center+=(a-this.center)*(1-Math.exp(-t*7)||1);const l=s?4:Math.max(4,o.y+2);this.camera.position.set(this.center+3.5,l+4,30),this.camera.lookAt(this.center,l,0),this.camera.updateMatrixWorld(),this.sun.position.set(this.center-12,16,14),this.sun.target.position.set(this.center,0,0),this.left.visible=this.right.visible=e.phase==="match",this.left.position.x=e.zoneLeft-50,this.left.scale.x=100,this.left.position.y=8,this.right.position.x=e.zoneRight+50,this.right.scale.x=100,this.right.position.y=8;for(const u of e.actors){let d=this.actors.get(u.id);if(d&&d.userData.look!==JSON.stringify(u.look)&&(this.scene.remove(d),Zt(d),this.actors.delete(u.id),d=void 0),d||(d=KS(u.look),this.scene.add(d),this.actors.set(u.id,d)),!u.human&&u.personality&&!d.getObjectByName("personality")){const E=Rn(K0[u.personality],2.3,.32,"#eacb79");E.name="personality",d.add(E)}const g=d.getObjectByName("personality");g&&g.position.set(0,Nn(u)+.5,.5),d.visible=s?u.id===this.localId():u.hp>0&&!u.pendingSpawn,d.scale.setScalar(s?2:1),d.position.set(s?-20:u.x,s?1.1:u.y,s?6:0);const _=Ds(u);!s&&_===1&&u.grounded&&(d.position.y+=Math.abs(Math.sin(i*10))*.22*Math.min(1,Math.abs(u.vx)/2));const m=Math.sin(i*14)*Math.min(1,Math.abs(u.vx)/5);for(const E of ln){const W=d.getObjectByName(E);W.visible=s||u.parts[E]>0;const X=pn(u,E);if(W.position.set(X.x,X.y,0),W.scale.y=X.length/is[E].h,W.rotation.z=X.rotation+(_>0&&(E.startsWith("thigh")||E.startsWith("shin"))?(E.endsWith("L")?1:-1)*m*.22:E==="torso"&&!u.parts.head?Math.sin(i*8)*.12:0),!s&&_===0&&u.grounded){const Z=Math.sin(i*11)*Math.min(1,Math.abs(u.vx)/1.5);E==="torso"&&(W.rotation.z+=Z*.035)}}const p=!u.parts.armL&&!u.parts.armR?"body":u.weapons[u.slot]??"shank";let T=d.getObjectByName("weapon");(T==null?void 0:T.userData.weapon)!==p&&(T&&(d.remove(T),Zt(T)),T=vl(p),T.name="weapon",T.userData.weapon=p,d.add(T));const M=Rs(u),b=p==="shank"||p==="axe",O=p==="axe"?.35:p==="shank"?.09:0;T.position.set(M.x+M.dx*O,M.y+M.dy*O,.4),T.rotation.z=M.angle-(b?Math.PI/2:0),T.scale.setScalar(p==="shank"?.75:1),T.visible=!u.carrying;let R=d.getObjectByName("carried");const P=u.carrying?JSON.stringify(u.carrying):"";R&&R.userData.signature!==P&&(d.remove(R),Zt(R),R=void 0),u.carrying&&!R&&(R=lf(u.carrying),R.name="carried",R.userData.signature=P,d.add(R)),R&&(R.position.set(M.x,M.y,.7),R.rotation.z=M.angle*.3,R.scale.setScalar(.65));let F=d.getObjectByName("charge-cart");((f=u.boost)==null?void 0:f.kind)==="cart"&&u.boost.until>e.frame?(F||(F=cf("cart"),F.name="charge-cart",d.add(F)),F.position.set(u.face*.45,.4,.4)):F&&(d.remove(F),Zt(F));let ie=d.getObjectByName("stun-stars");if((u.stunUntil??0)>e.frame){if(!ie){ie=new Nt,ie.name="stun-stars";for(let E=0;E<3;E++){const W=Xs(.12,.12,.12,"#ffe17b");W.position.set(Math.cos(E*Math.PI*2/3)*.55,0,Math.sin(E*Math.PI*2/3)*.55),ie.add(W)}d.add(ie)}ie.position.y=Nn(u)+.25,ie.rotation.y=i*5}else ie&&(d.remove(ie),Zt(ie));const x=d.getObjectByName("torso");x.rotation.z+=u.attacking>0?u.face*.08:0}for(const[u,d]of this.props)e.props.some(g=>g.id===u&&g.hp>0)||(this.scene.remove(d),Zt(d),this.props.delete(u));for(const u of e.props){if(u.hp<=0)continue;let d=this.props.get(u.id);d||(d=hp(u,e.venue),this.props.set(u.id,d),this.scene.add(d)),d.position.set(u.x,u.y,0),d.rotation.z=u.falling?Math.sin(i*3)*.08:0,u.burn&&u.fuel>0&&this.particles.length<480&&Math.random()<t*(this.reducedEffects?3:22)&&this.particles.push({x:u.x+(Math.random()-.5)*u.w,y:u.y+u.h*.3,z:1,vx:Math.random()-.5,vy:3+Math.random()*2,life:.6,color:new $e(Math.random()>.5?"#ef6b32":"#efbf3b")})}const c=e.blood.filter(u=>e.props.some(d=>d.id===u.surface&&d.hp>0&&!d.falling));for(const[u,d]of this.blood)c.some(g=>g.id===u)||(this.scene.remove(d),Zt(d),this.blood.delete(u));for(const u of c){let d=this.blood.get(u.id);if(!d){d=new Nt;for(let g=0;g<10;g++){const _=new ft(new rh(g===0?1:.08+g%3*.035,12),new mn({color:g%2?"#8b1738":"#63152c",side:en,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1}));_.userData.ownedMaterial=!0,_.rotation.x=-Math.PI/2,_.scale.set(g===0?1.25:1,g===0?.55:1,1),g>0&&_.position.set(Math.cos(g*2.4+u.id)*(.5+g*.11),.001*g,Math.sin(g*2.4+u.id)*(.3+g*.06)),d.add(_)}this.blood.set(u.id,d),this.scene.add(d)}d.position.set(u.x,u.y,.4),d.visible=!s}for(const[u,d]of this.debris)e.debris.some(g=>g.id===u)||(this.scene.remove(d),d.geometry.dispose(),this.debris.delete(u));for(const u of e.debris){let d=this.debris.get(u.id);d||(d=Xs(u.w,u.h,.35,u.part&&u.look?up(u.part,u.look):Bs[u.color%Bs.length]),this.debris.set(u.id,d),this.scene.add(d)),d.position.set(u.x,u.y,1),d.rotation.z=u.angle??0}for(const[u,d]of this.shots)e.shots.some(g=>g.id===u)||(this.scene.remove(d),Zt(d),this.shots.delete(u));for(const u of e.shots){let d=this.shots.get(u.id);d||(u.weapon==="axe"?d=vl("axe"):u.weapon==="flamethrower"?d=this.flameStyle.create(!0):(d=new ft(new Wn(u.weapon==="shotgun"?.16:.45,.06,.06),new mn({color:u.owner===this.localId()?"#ffdd3f":"#ff675d"})),d.userData.ownedMaterial=!0),this.shots.set(u.id,d),this.scene.add(d)),d.position.set(u.x,u.y,.65),d.rotation.z=u.weapon==="axe"?(22-u.life)*.55:Math.atan2(u.vy,u.vx)-(u.weapon==="flamethrower"?Math.PI/2:0),u.weapon==="flamethrower"&&(d.quaternion.copy(this.camera.quaternion),d.rotateZ(Math.atan2(u.vy,u.vx)-Math.PI/2),d.scale.setScalar(.22+(15-u.life)*.018))}for(const[u,d]of this.pickups)e.pickups.some(g=>g.id===u)||(this.scene.remove(d),Zt(d),this.pickups.delete(u));for(const u of e.pickups){let d=this.pickups.get(u.id);if(!d){if(d=vl(u.weapon),u.weapon==="laser"||u.weapon==="flamethrower"){const _=Rn(u.weapon==="laser"?"2 SHOTS":"FIRE SALE",1.7,.45,"#8cffff");_.position.set(0,.85,.1),d.add(_)}const g=new ft(new Ur(.6,.67,20),new mn({color:"#f0d432",side:en}));g.userData.ownedMaterial=!0,d.add(g),this.scene.add(d),this.pickups.set(u.id,d)}d.position.set(u.x,u.y+Math.sin(i*3)*.15,1),d.rotation.z=Math.sin(i)*.1}for(let u=this.particles.length-1;u>=0;u--){const d=this.particles[u];if(d.life-=t,d.life<=0){this.particles.splice(u,1);continue}d.x+=d.vx*t,d.y+=d.vy*t,d.vy-=t*9}this.particles.forEach((u,d)=>{this.positions.set([u.x,u.y,u.z],d*3),this.colors.set([u.color.r,u.color.g,u.color.b],d*3)}),this.particleGeometry.setDrawRange(0,this.particles.length),this.particleGeometry.attributes.position.needsUpdate=!0,this.particleGeometry.attributes.color.needsUpdate=!0;for(let u=this.beams.length-1;u>=0;u--){const d=this.beams[u];d.life-=t,d.life<=0?(this.scene.remove(d.mesh),d.mesh.geometry.dispose(),d.mesh.material.dispose(),this.beams.splice(u,1)):d.mesh.material.opacity=d.life/.16}(this.bloodRound!==e.round||s)&&(this.bloodParticles.clear(),this.bloodRound=e.round),this.bloodParticles.update(t,e,this.reducedEffects),this.bloodParticles.drops.forEach((u,d)=>this.bloodPositions.set([u.x,u.y,u.z],d*3)),this.bloodGeometry.setDrawRange(0,this.bloodParticles.drops.length),this.bloodGeometry.attributes.position.needsUpdate=!0,this.chaosEffects(e,i),this.burningEffects(e,i,t),this.renderer.render(this.scene,this.camera)}dispose(){for(const e of this.beams)e.mesh.material.dispose();cancelAnimationFrame(this.frame),this.observer.disconnect(),this.scene.traverse(e=>{(e instanceof ft||e instanceof fl)&&e.geometry.dispose()}),this.points.material instanceof ls&&this.points.material.dispose(),this.bloodPoints.material.dispose(),this.bloodGeometry.dispose(),this.flameStyle.dispose(),JS(),this.renderer.dispose(),this.renderer.domElement.remove()}}function QS(n){return n.kind==="ignite"&&n.actor>=0?"catchfire":n.kind==="shot"||n.kind==="melee"?n.weapon??"body":n.kind}function eb(n){const e={};if(!n||typeof n!="object")return e;const t=n;if(t.version!==1||!t.cues||typeof t.cues!="object")return e;for(const[i,s]of Object.entries(t.cues))!/^[a-z]+$/.test(i)||!Array.isArray(s)||(e[i]=s.filter(r=>typeof r=="string"&&/^[a-z]+--[0-9]+\.wav$/.test(r)).slice(0,20));return e}class tb{constructor(){de(this,"buffers",new Map);de(this,"started",!1);de(this,"abort",new AbortController)}async load(e){if(this.started)return;this.started=!0;const t="/game/royale/audio/royale/";try{const i=await fetch(t+"manifest.json",{signal:this.abort.signal});if(!i.ok)return;const s=eb(await i.json());await Promise.all(Object.entries(s).map(async([r,o])=>{const a=[];for(const l of o)try{const c=await fetch(t+l,{signal:this.abort.signal});c.ok&&a.push(await e.decodeAudioData(await c.arrayBuffer()))}catch{}a.length&&this.buffers.set(r,a)}))}catch{}}get(e){const t=this.buffers.get(e);return t==null?void 0:t[Math.floor(Math.random()*t.length)]}dispose(){this.abort.abort(),this.buffers.clear()}}function nb(n,e=Math.random()){return n&&e<.25}class ib{constructor(e=()=>({gain:1,pan:0})){de(this,"channels",new Set);de(this,"routing");de(this,"enabled",!1);de(this,"bank",new tb);de(this,"context");de(this,"master");de(this,"active",new Set);de(this,"last",new Map);this.locate=e}enable(e){if(this.enabled=e,e)try{if(this.context??(this.context=new AudioContext),!this.master){this.master=this.context.createGain();const t=this.context.createDynamicsCompressor();this.master.connect(t),t.connect(this.context.destination)}this.master.gain.value=.55,this.context.resume(),this.bank.load(this.context)}catch{this.enabled=!1}else{this.master&&(this.master.gain.value=0);for(const t of this.active)try{t.stop()}catch{}}}updateView(){if(this.context)for(const e of this.channels){const t=this.locate(e.event);e.gain.gain.setTargetAtTime(t.gain,this.context.currentTime,.06),e.pan.pan.setTargetAtTime(t.pan,this.context.currentTime,.06)}}release(e){e.gain.disconnect(),e.pan.disconnect(),this.channels.delete(e)}start(e,t,i,s,r){e.connect(r??t),r&&r.connect(t);const o=this.routing;t.connect((o==null?void 0:o.gain)??this.master),o&&o.sources++,this.active.add(e),e.onended=()=>{this.active.delete(e),e.disconnect(),r==null||r.disconnect(),t.disconnect(),o&&--o.sources===0&&this.release(o)},e.start(i),e.stop(i+s)}envelope(e,t,i){const s=this.context.createGain();return s.gain.setValueAtTime(1e-4,e),s.gain.linearRampToValueAtTime(i,e+.003),s.gain.exponentialRampToValueAtTime(1e-4,e+t),s}tone(e,t,i,s,r,o="sine"){const a=this.context.createOscillator();a.type=o,a.frequency.setValueAtTime(t,e),a.frequency.exponentialRampToValueAtTime(i,e+s),this.start(a,this.envelope(e,s,r),e,s)}noise(e,t,i,s,r="lowpass"){const o=this.context,a=o.createBuffer(1,Math.ceil(o.sampleRate*t),o.sampleRate),l=a.getChannelData(0);for(let f=0;f<l.length;f++)l[f]=Math.random()*2-1;const c=o.createBufferSource(),h=o.createBiquadFilter();c.buffer=a,h.type=r,h.frequency.value=s,h.Q.value=.7,this.start(c,this.envelope(e,t,i),e,t,h)}cry(e,t){const i=this.context,s=t?.7:.9,r=t?1:3;for(let o=0;o<r;o++){const a=e+o*.25,l=t?s:.24,c=i.createOscillator(),h=i.createBiquadFilter(),f=i.createOscillator(),u=i.createGain();c.type="sawtooth",c.frequency.setValueAtTime(t?430:240,a),c.frequency.exponentialRampToValueAtTime(t?270:155,a+l),f.frequency.value=t?9:6,u.gain.value=t?22:15,f.connect(u),u.connect(c.frequency),h.type="bandpass",h.frequency.value=t?1250:750,h.Q.value=.9,this.start(c,this.envelope(a,l,t?.12:.09),a,l,h),this.active.add(f),f.onended=()=>{this.active.delete(f),f.disconnect(),u.disconnect()},f.start(a),f.stop(a+l)}this.noise(e,s,.025,1600,"bandpass")}play(e){if(!this.enabled||!this.context)return;const t=QS(e),i=this.context.currentTime;if(this.active.size>=(t==="catchfire"?48:36))return;const s=this.locate(e);if(s.gain<.01)return;const r=`${t}:${e.actor>=0?e.actor:Math.round(e.x/6)}`;if(i-(this.last.get(r)??-1)<(t==="smg"?.045:.07))return;this.last.set(r,i);const o={event:{...e},gain:this.context.createGain(),pan:this.context.createStereoPanner(),sources:0};o.gain.gain.value=s.gain,o.pan.pan.value=s.pan,o.gain.connect(o.pan),o.pan.connect(this.master),this.channels.add(o),this.routing=o;try{const a=this.bank.get(t);if(nb(!!a)){const l=this.context.createBufferSource();l.buffer=a,l.playbackRate.value=.97+Math.random()*.06;const c=a.duration/l.playbackRate.value,h=this.envelope(i,c,.8);h.gain.cancelScheduledValues(i),h.gain.setValueAtTime(0,i),h.gain.linearRampToValueAtTime(.8,i+.005),h.gain.setValueAtTime(.8,i+Math.max(.005,c-.01)),h.gain.linearRampToValueAtTime(0,i+c),this.start(l,h,i,c);return}switch(t){case"throw":this.noise(i,.16,.09,800,"bandpass");break;case"warning":this.tone(i,720,720,.12,.07,"triangle"),this.tone(i+.18,960,960,.14,.07,"triangle");break;case"scream":this.cry(i,!0);break;case"cry":this.cry(i,!1);break;case"catchfire":this.noise(i,.55,.22,1100),this.noise(i+.05,.3,.07,3500,"highpass"),this.cry(i+.04,!0);break;case"ignite":this.noise(i,.5,.12,850),this.noise(i+.05,.3,.045,3500,"highpass");break;case"laser":this.tone(i,1800,140,.22,.1,"sawtooth"),this.tone(i,3200,700,.12,.045,"sine");break;case"flamethrower":this.noise(i,.18,.15,900),this.noise(i,.12,.045,3200,"highpass");break;case"smg":this.noise(i,.065,.19,3200,"highpass"),this.tone(i,145,48,.085,.11);break;case"shotgun":this.noise(i,.24,.35,2200),this.tone(i,125,32,.28,.24),this.noise(i+.075,.1,.08,4200,"highpass");break;case"explosion":this.noise(i,.8,.4,700),this.tone(i,65,22,.65,.3),this.noise(i+.1,.4,.08,2400);break;case"shank":this.noise(i,.055,.075,2400,"highpass"),this.tone(i,1600,650,.045,.025,"triangle");break;case"axe":this.noise(i,.22,.13,650,"bandpass"),this.tone(i,220,90,.17,.025,"triangle");break;case"body":case"hit":this.noise(i,.075,.1,950),this.tone(i,110,40,.12,.13);break;case"detach":this.noise(i,.13,.14,700),this.tone(i,210,65,.11,.08);break;case"land":this.noise(i,.09,.09,600),this.tone(i,80,30,.12,.07);break;case"jump":this.noise(i,.08,.045,1500,"bandpass");break;case"reload":this.noise(i,.035,.11,4e3,"highpass"),this.noise(i+.12,.04,.08,2100,"highpass"),this.tone(i+.14,650,280,.04,.04,"triangle");break;case"swap":this.noise(i,.045,.07,2800,"highpass"),this.tone(i,900,450,.035,.025,"triangle");break;case"pickup":this.tone(i,660,660,.1,.055,"triangle"),this.tone(i+.07,990,990,.17,.05,"triangle");break;case"break":this.noise(i,.22,.16,3700,"highpass"),this.tone(i,740,160,.14,.035,"triangle"),this.noise(i+.05,.14,.07,1800);break;case"death":this.tone(i,280,65,.5,.06,"triangle"),this.noise(i,.16,.07,600);break;default:this.noise(i,.12,.05,1e3)}}finally{this.routing=void 0,o.sources===0&&this.release(o)}}dispose(){var e;this.enable(!1);for(const t of this.channels)this.release(t);this.bank.dispose(),(e=this.context)==null||e.close()}}class sb{constructor(e,t,i){de(this,"practiceSim",new bd(1));de(this,"session");de(this,"scene");de(this,"sound");de(this,"journal",new rg);de(this,"ledger",new og);de(this,"input");de(this,"keys",new Set);de(this,"mouseDown",!1);de(this,"touchAttack",!1);de(this,"frame",0);de(this,"last",0);de(this,"accumulator",0);de(this,"reportTime",0);de(this,"advice",null);de(this,"mode","practice");de(this,"paused",!1);de(this,"touchMove",0);de(this,"network",{status:"offline",invite:"",message:"Practice — one human, seven bots.",localId:0,ping:0});de(this,"down",e=>{e.target instanceof HTMLElement&&e.target.matches("input,select,textarea")||(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(e.code)&&e.preventDefault(),this.keys.add(e.code),!e.repeat&&((e.code==="Space"||e.code==="KeyW"||e.code==="ArrowUp")&&this.command("jump"),e.code==="KeyG"&&this.command("grab"),e.code==="KeyE"&&this.command("pickup"),(e.code==="KeyQ"||e.code==="ShiftLeft"||e.code==="ShiftRight")&&this.command("cycle"),e.code==="KeyR"&&this.command("reload"),e.code==="Escape"&&this.mode==="practice"&&this.state.phase==="match"&&(this.paused=!this.paused)))});de(this,"up",e=>{this.keys.delete(e.code)});de(this,"blur",()=>{this.keys.clear(),this.mouseDown=!1,this.touchAttack=!1,this.touchMove=0,this.mode==="practice"&&this.state.phase==="match"&&(this.paused=!0)});de(this,"pointerDown",e=>{e.pointerType!=="touch"&&(this.mouseDown=!0,this.pointerMove(e))});de(this,"pointerUp",()=>{this.mouseDown=!1});de(this,"pointerMove",e=>{if(e.pointerType==="touch")return;const t=this.scene.aim(e.clientX,e.clientY);this.input.aimX=t.x,this.input.aimY=t.y});de(this,"animate",e=>{var t,i,s,r,o;try{const a=Math.min(.08,(e-this.last)/1e3||0);if(this.last=e,this.mode==="online")(t=this.session)==null||t.advance(a);else if(!this.paused)for(this.accumulator+=a;this.accumulator>=1/60;)this.practiceSim.step([this.poll()]),this.accumulator-=1/60;const l=(s=(i=this.session)==null?void 0:i.wrapper)==null?void 0:s.rollbackNetcode,c=this.mode==="online"?((r=l==null?void 0:l.history[0])==null?void 0:r.frame)??-1:this.state.frame,h=this.ledger.collect(this.state.events,c);this.sound.updateView(),this.scene.present(h);for(const u of h)this.sound.play(u),u.kind==="death"&&u.actor===this.localId&&u.cause&&(this.advice=this.journal.discover(u.cause));const f=this.state.actors[this.localId];if(f.death&&f.deathFrame<=c&&!this.advice&&(this.advice=this.journal.discover(f.death)),this.reportTime+=a,this.reportTime>.08){this.reportTime=0;const u=this.state,d=JSON.parse(JSON.stringify(u));d.phase==="results"&&this.mode==="online"&&c<d.frame-d.phaseFrame&&(d.phase="match"),this.changed({state:d,localId:this.localId,network:{...this.network},advice:this.advice,known:[...this.journal.seen],paused:this.paused})}}catch(a){(o=this.session)==null||o.dispose(!1),this.network={...this.network,status:"failed",message:`Simulation error: ${a instanceof Error?a.message:String(a)}`},this.changed({state:this.practiceSim.snapshot(),localId:0,network:{...this.network},advice:null,known:[...this.journal.seen],paused:!1})}this.frame=requestAnimationFrame(this.animate)});this.changed=i,this.input=qi(t),this.scene=new ZS(e,()=>this.state,()=>this.localId),this.sound=new ib(s=>this.scene.soundPosition(s.x,s.y)),window.addEventListener("keydown",this.down),window.addEventListener("keyup",this.up),window.addEventListener("blur",this.blur),this.scene.canvas.addEventListener("pointerdown",this.pointerDown),window.addEventListener("pointerup",this.pointerUp),this.scene.canvas.addEventListener("pointermove",this.pointerMove),this.frame=requestAnimationFrame(this.animate)}get localId(){return this.mode==="online"?this.network.localId:0}get state(){var e;return this.mode==="online"&&((e=this.session)!=null&&e.simulation)?this.session.simulation.state:this.practiceSim.state}setLook(e){this.input.look=zc(e)}setVenue(e){this.input.venue=Math.max(0,Math.min(2,e)),this.input.venueChange++}ready(){this.input.ready++}rematch(){this.input.rematch++,this.advice=null}spectator(e){this.scene.setSpectator(e)}command(e){this.input[e]++}touchFire(e,t,i){if(this.touchAttack=e,t!==void 0&&i!==void 0){const s=Math.max(.01,Math.hypot(t,i));this.input.aimX=t/s,this.input.aimY=-i/s}}setSound(e){this.sound.enable(e)}async online(e="",t=""){if(!this.session){this.paused=!1,this.mode="online",this.input.ready=0,this.ledger.reset(),this.advice=null;try{const{Session:i}=await q0(async()=>{const{Session:s}=await import("./session-B5wL_Tp4.js");return{Session:s}},[]);this.session=new i(()=>this.poll(),s=>{this.network=s}),await this.session.connect(e,t)}catch(i){this.network={...this.network,status:"failed",message:i instanceof Error?i.message:"Could not load multiplayer support."}}}}practice(){if(this.session){this.session.dispose(),location.assign(location.href.split("#")[0]);return}this.mode="practice",this.paused=!1}leave(){var e;(e=this.session)==null||e.dispose(),location.assign(location.href.split("#")[0])}poll(){return this.input.move=Math.max(-1,Math.min(1,Number(this.keys.has("KeyD")||this.keys.has("ArrowRight"))-Number(this.keys.has("KeyA")||this.keys.has("ArrowLeft"))+this.touchMove)),this.input.attack=this.mouseDown||this.touchAttack||this.keys.has("KeyJ"),JSON.parse(JSON.stringify(this.input))}dispose(){var e;cancelAnimationFrame(this.frame),(e=this.session)==null||e.dispose(),this.scene.dispose(),this.sound.dispose(),window.removeEventListener("keydown",this.down),window.removeEventListener("keyup",this.up),window.removeEventListener("blur",this.blur),window.removeEventListener("pointerup",this.pointerUp),this.scene.canvas.removeEventListener("pointerdown",this.pointerDown),this.scene.canvas.removeEventListener("pointermove",this.pointerMove)}}function rb(){try{return zc(JSON.parse(localStorage.getItem("royale.look")??"null"))}catch{return{...aa}}}function ob(n){try{localStorage.setItem("royale.look",JSON.stringify(n))}catch{}}const ab={class:"turn-access",role:"status","aria-live":"polite"},lb=Yf({__name:"TurnAccess",setup(n,{expose:e}){const t=Tt(),i=Tt(!1);let s,r,o,a;function l(){return window.turnstile?Promise.resolve():s||(s=new Promise((u,d)=>{const g=document.createElement("script");g.src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit",g.async=!0,g.defer=!0,g.onload=()=>u(),g.onerror=()=>{g.remove(),s=void 0,d(new Error("Connection verification could not load. Please try again."))},document.head.appendChild(g)}),s)}function c(){clearTimeout(a),r&&window.turnstile&&window.turnstile.remove(r),r=void 0,i.value=!1}function h(){o==null||o(new Error("Connection verification cancelled.")),o=void 0,c()}async function f(){h(),i.value=!0;const u=new Promise((d,g)=>{o=g});try{if(await Promise.race([u,l(),new Promise((g,_)=>{a=setTimeout(()=>_(new Error("Connection verification timed out. Please try again.")),15e3)})]),clearTimeout(a),await Dc(),!window.turnstile||!t.value)throw new Error("Connection verification is unavailable.");const d="0x4AAAAAAGMk6Wc3ZfdCo5t5";return await Promise.race([u,new Promise((g,_)=>{a=setTimeout(()=>_(new Error("Connection verification timed out. Please try again.")),12e4),r=window.turnstile.render(t.value,{sitekey:d,action:"royale-turn",theme:"dark",callback:g,"error-callback":()=>_(new Error("Connection verification failed. Please try again.")),"expired-callback":()=>_(new Error("Connection verification expired. Please try again."))})})])}finally{o=void 0,c()}}return Oc(h),e({verify:f,cancel:h}),(u,d)=>As((Ne(),Oe("div",ab,[d[0]||(d[0]=z("p",null,"CHECKING YOUR ONLINE CONNECTION…",-1)),z("div",{ref_key:"container",ref:t},null,512),z("button",{class:"secondary",onClick:h},"CANCEL")],512)),[[v0,i.value]])}}),cb=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},hb=cb(lb,[["__scopeId","data-v-95de6459"]]),ub={class:"header-venue"},fb={class:"header-tools"},db={key:0,class:"network-pill"},pb={key:0,class:"lobby"},mb={class:"customize"},gb=["value"],_b=["disabled"],vb=["value"],xb={class:"swatch-row"},yb=["onClick","aria-label"],Mb=["onClick","aria-label"],Sb={class:"swatch-row clothes-colors"},bb=["onClick","aria-label"],Eb={key:0,class:"mode-buttons"},wb=["disabled"],Tb={class:"join-box"},Ab=["disabled"],Rb={key:1,class:"smallprint",role:"alert"},Cb={key:2,class:"connection-card"},Pb=["value"],Lb={class:"roster-status"},Ib={key:0},Db={key:1},Ub=["disabled"],Nb={class:"smallprint"},Ob={key:1,class:"specimen"},Fb={class:"match-top"},Bb={class:"match-clock"},kb={key:0,class:"chaos-tools"},zb={key:0},Hb={key:1},Vb={key:2},Gb={class:"player-hud"},Wb={class:"health-heading"},Xb={class:"health-bar"},Yb={class:"body-status"},qb={key:0},jb={key:1},Kb={class:"weapon-readout"},$b={key:0},Jb={key:1},Zb={key:2},Qb={class:"body-panel"},eE={key:2,class:"death-overlay"},tE={class:"spectator-buttons"},nE=["onClick"],iE={class:"touch-controls"},sE={class:"touch-actions"},rE={class:"eyebrow"},oE={key:0,class:"result-advice"},aE={class:"result-stat"},lE={key:0},cE={key:4},hE={key:0},uE={key:5,class:"modal-backdrop"},fE={class:"pause-card"},dE={key:6,class:"modal-backdrop"},pE={class:"pause-card"},mE={key:7,class:"modal-backdrop"},gE={class:"journal"},_E={key:0},vE={key:1,class:"modal-backdrop"},xE={class:"pause-card"},yE=Yf({__name:"App",setup(n){const e=Tt(),t=Tt(rb()),i=Tt(0),s=Tt(!1),r=Tt(!1),o=Tt(!1),a=Tt("COPY INVITE"),l=Tt(""),c=Tt(new URLSearchParams(location.hash.slice(1)).get("room")??""),h=Tt({state:new bd().state,localId:0,network:{status:"offline",invite:"",message:"Practice — one human, seven bots.",localId:0,ping:0},advice:null,known:[],paused:!1}),f=Tt(),u=Tt(!1),d=Tt("");let g;const _=an(()=>h.value.state),m=an(()=>_.value.actors[h.value.localId]),p=an(()=>_.value.phase==="lobby"||_.value.phase==="countdown"),T=an(()=>h.value.network.status!=="offline"),M=an(()=>h.value.network.status==="connected"),b=an(()=>_.value.actors.filter(G=>G.hp>0&&!G.pendingSpawn)),O=an(()=>!m.value.parts.armL&&!m.value.parts.armR?"body":m.value.weapons[m.value.slot]),R=an(()=>ln.filter(G=>m.value.parts[G]>0).length),P=an(()=>Is.find(G=>G.id===_.value.venue)),F=an(()=>["failed","closed"].includes(h.value.network.status)),ie=an(()=>{const G=_.value.phase==="match"?Math.floor(_.value.phaseFrame/60):0;return`${String(Math.floor(G/60)).padStart(2,"0")}:${String(G%60).padStart(2,"0")}`}),x=an(()=>m.value.ready);fr(()=>h.value.state.venue,G=>{i.value=Is.findIndex(C=>C.id===G)});function E(){c.value=new URLSearchParams(location.hash.slice(1)).get("room")??""}function W(){g==null||g.setVenue(i.value)}function X(){s.value=!s.value,g==null||g.setSound(s.value)}function Z(){r.value=!r.value,g&&(g.scene.reducedEffects=r.value)}async function ce(G=""){var C;if(!u.value){u.value=!0,d.value="";try{const ge=await((C=f.value)==null?void 0:C.verify());await(g==null?void 0:g.online(G,ge??""))}catch(ge){d.value=ge instanceof Error?ge.message:"Could not verify the connection."}finally{u.value=!1}}}async function H(){await ce()}async function se(){const G=c.value.match(/room=([a-f\d-]{36})/i);await ce((G==null?void 0:G[1])??c.value.trim())}async function V(){try{await navigator.clipboard.writeText(h.value.network.invite),a.value="COPIED"}catch{a.value="SELECT LINK BELOW"}}fr(t,G=>{ob(G),g==null||g.setLook(G)},{deep:!0});const ve=Tt(null),Se=Tt(null),be=Tt({x:0,y:0});function ke(G,C){if(!g)return;const ge=C==="move"?ve:Se,xe=G.currentTarget;if(G.type==="pointerdown"){if(ge.value!==null)return;ge.value=G.pointerId,xe.setPointerCapture(G.pointerId)}if(ge.value!==G.pointerId)return;const ne=xe.getBoundingClientRect(),oe=(G.clientX-ne.left-ne.width/2)/32,Ye=(G.clientY-ne.top-ne.height/2)/32,A=Math.max(1,Math.hypot(oe,Ye));C==="move"?(g.touchMove=oe/A,be.value={x:oe/A,y:Ye/A}):g.touchFire(!0,oe/A,Ye/A)}function Je(G,C){if(!g)return;const ge=C==="move"?ve:Se;ge.value===G.pointerId&&(ge.value=null,C==="move"?(g.touchMove=0,be.value={x:0,y:0}):g.touchFire(!1))}return Kf(()=>{window.addEventListener("hashchange",E);try{g=new sb(e.value,t.value,G=>h.value=G)}catch(G){l.value=G instanceof Error?G.message:"WebGL could not start."}}),Oc(()=>{window.removeEventListener("hashchange",E),g==null||g.dispose()}),(G,C)=>{var ge,xe;return Ne(),Oe("div",{class:Un(["royale",{"in-lobby":p.value}])},[z("div",{ref_key:"viewport",ref:e,class:"viewport"},null,512),C[73]||(C[73]=z("div",{class:"vignette"},null,-1)),C[74]||(C[74]=z("div",{class:"scanlines","aria-hidden":"true"},null,-1)),z("header",null,[C[28]||(C[28]=z("a",{class:"logo",href:"./"},[et("R"),z("span",null,"®")],-1)),z("span",ub,[et(Ie(P.value.name)+" ",1),C[26]||(C[26]=z("i",null,"/",-1)),C[27]||(C[27]=et(" EST. BAD IDEA",-1))]),z("div",fb,[M.value?(Ne(),Oe("span",db,Ie(h.value.network.route==="relay"?"P2P / RELAY":"P2P")+" · "+Ie(h.value.network.ping)+" MS",1)):mt("",!0),z("button",{onClick:X},"SOUND "+Ie(s.value?"ON":"OFF"),1),z("button",{onClick:Z},"FX "+Ie(r.value?"LOW":"FULL"),1),T.value?(Ne(),Oe("button",{key:1,onClick:C[0]||(C[0]=ne=>{var oe;return(oe=_t(g))==null?void 0:oe.leave()})},"LEAVE P2P")):mt("",!0),z("button",{onClick:C[1]||(C[1]=ne=>o.value=!o.value)},"DEATH NOTES "+Ie(h.value.known.length),1)])]),l.value?(Ne(),Oe("div",vE,[z("section",xE,[C[71]||(C[71]=z("h2",null,[et("THE WORLD"),z("br"),et("DIDN’T LOAD.")],-1)),z("p",null,Ie(l.value),1),C[72]||(C[72]=z("p",null,"A WebGL-capable browser is required.",-1))])])):(Ne(),Oe(vt,{key:0},[p.value?(Ne(),Oe("section",pb,[C[42]||(C[42]=z("p",{class:"eyebrow"},[z("span"),et(" SOME ASSEMBLY REQUIRED.")],-1)),C[43]||(C[43]=z("h1",null,[et("ROYALE"),z("span",null,".")],-1)),C[44]||(C[44]=z("p",{class:"tagline"},[et("LAST ONE STANDING."),z("br"),et("OR WHATEVER’S LEFT.")],-1)),C[45]||(C[45]=z("div",{class:"lobby-rule"},[z("b",null,"01 / CHECK YOURSELF IN"),z("span",null,"8 ENTER. MOSTLY.")],-1)),z("div",mb,[z("label",null,[C[30]||(C[30]=et("GENDER",-1)),As(z("select",{"onUpdate:modelValue":C[2]||(C[2]=ne=>t.value.gender=ne)},[...C[29]||(C[29]=[z("option",{value:0},"WOMAN",-1),z("option",{value:1},"MAN",-1),z("option",{value:2},"NONBINARY",-1)])],512),[[$r,t.value.gender,void 0,{number:!0}]])]),z("label",null,[C[31]||(C[31]=et("HAIR",-1)),As(z("select",{"onUpdate:modelValue":C[3]||(C[3]=ne=>t.value.hair=ne)},[(Ne(),Oe(vt,null,Qn(["CROPPED","CURLS","MOHAWK","LONG","SHAVED"],(ne,oe)=>z("option",{key:ne,value:oe},Ie(ne),9,gb)),64))],512),[[$r,t.value.hair,void 0,{number:!0}]])]),z("label",null,[C[33]||(C[33]=et("CLOTHING",-1)),As(z("select",{"onUpdate:modelValue":C[4]||(C[4]=ne=>t.value.clothes=ne)},[...C[32]||(C[32]=[z("option",{value:0},"JACKET",-1),z("option",{value:1},"TANK TOP",-1),z("option",{value:2},"COVERALLS",-1)])],512),[[$r,t.value.clothes,void 0,{number:!0}]])]),z("label",null,[C[34]||(C[34]=et("VENUE",-1)),As(z("select",{"onUpdate:modelValue":C[5]||(C[5]=ne=>i.value=ne),disabled:M.value&&h.value.localId!==0,onChange:W},[(Ne(!0),Oe(vt,null,Qn(_t(Is),(ne,oe)=>(Ne(),Oe("option",{key:ne.id,value:oe},Ie(ne.name),9,vb))),128))],40,_b),[[$r,i.value,void 0,{number:!0}]])])]),z("div",xb,[C[35]||(C[35]=z("span",null,"SKIN",-1)),(Ne(!0),Oe(vt,null,Qn(_t(kr),(ne,oe)=>(Ne(),Oe("button",{key:ne,class:Un({chosen:t.value.skin===oe}),style:Ei({background:ne}),onClick:Ye=>t.value.skin=oe,"aria-label":`Skin tone ${oe+1}`},null,14,yb))),128)),C[36]||(C[36]=z("span",{class:"hair-label"},"HAIR",-1)),(Ne(!0),Oe(vt,null,Qn(_t(la),(ne,oe)=>(Ne(),Oe("button",{key:ne,style:Ei({background:ne}),class:Un({chosen:t.value.hairColor===oe}),onClick:Ye=>t.value.hairColor=oe,"aria-label":`Hair color ${oe+1}`},null,14,Mb))),128))]),z("div",Sb,[C[37]||(C[37]=z("span",null,"THREADS",-1)),(Ne(!0),Oe(vt,null,Qn(_t(Bs),(ne,oe)=>(Ne(),Oe("button",{key:ne,style:Ei({background:ne}),class:Un({chosen:t.value.color===oe}),onClick:Ye=>t.value.color=oe,"aria-label":`Clothing color ${oe+1}`},null,14,bb))),128)),C[38]||(C[38]=z("small",null,"ALL LOOKS. NO STAT BOOSTS.",-1))]),T.value?mt("",!0):(Ne(),Oe("div",Eb,[z("button",{class:"secondary",disabled:u.value,onClick:H},[et(Ie(u.value?"CONNECTING…":"HOST P2P")+" ",1),C[39]||(C[39]=z("span",null,"↗",-1))],8,wb),z("div",Tb,[As(z("input",{"onUpdate:modelValue":C[6]||(C[6]=ne=>c.value=ne),"aria-label":"Invite link or room ID",placeholder:"INVITE LINK / ROOM ID"},null,512),[[O0,c.value]]),z("button",{onClick:se,disabled:u.value||!c.value.trim()},"JOIN",8,Ab)])])),Gn(hb,{ref_key:"turnAccess",ref:f},null,512),d.value?(Ne(),Oe("p",Rb,Ie(d.value),1)):mt("",!0),T.value&&!M.value?(Ne(),Oe("div",Cb,[z("b",null,Ie(h.value.network.status.toUpperCase()),1),z("p",null,Ie(h.value.network.message),1),h.value.network.invite?(Ne(),Oe(vt,{key:0},[z("button",{onClick:V},Ie(a.value)+" ↗",1),z("input",{value:h.value.network.invite,readonly:"","aria-label":"P2P invite link"},null,8,Pb)],64)):mt("",!0),z("button",{class:"cancel-host",onClick:C[7]||(C[7]=ne=>{var oe;return(oe=_t(g))==null?void 0:oe.leave()})},"CANCEL / PRACTICE")])):mt("",!0),z("div",Lb,[C[40]||(C[40]=z("span",{class:"tiny-dot"},null,-1)),z("b",null,Ie(M.value?"2 HUMANS / 6 BOTS":T.value?"WAITING FOR A HUMAN":"PRACTICE / 7 BOTS"),1),M.value?(Ne(),Oe("span",Ib,Ie(_.value.actors.filter(ne=>ne.human&&ne.ready).length)+" / 2 READY",1)):(Ne(),Oe("span",Db,"NO CREDIT CARD REQUIRED"))]),z("button",{class:"primary",disabled:u.value||T.value&&!M.value,onClick:C[8]||(C[8]=ne=>{var oe;return(oe=_t(g))==null?void 0:oe.ready()})},[et(Ie(_.value.phase==="countdown"?`BAD DECISIONS IN ${Math.max(1,3-Math.floor(_.value.phaseFrame/60))}…`:x.value?"READY. UNFORTUNATELY.":M.value?"READY TO FALL APART":"PRACTICE BAD DECISIONS")+" ",1),C[41]||(C[41]=z("span",null,"↗",-1))],8,Ub),z("p",Nb,Ie(M.value?"BOTH HUMANS MUST READY UP. COSMETIC CHANGES RESET READINESS.":"P2P: TWO HUMANS + SIX BOTS. PRACTICE WORKS OFFLINE."),1)])):mt("",!0),p.value?(Ne(),Oe("div",Ob,[...C[46]||(C[46]=[z("span",null,[et("YOUR FUTURE"),z("br"),et("FORMER SELF.")],-1),z("i",null,null,-1),z("small",null,[et("100% ORIGINAL PARTS"),z("br"),et("FOR NOW.")],-1)])])):mt("",!0),_.value.phase==="match"?(Ne(),Oe(vt,{key:2},[z("div",Fb,[z("div",null,[C[48]||(C[48]=z("small",null,"STILL TECHNICALLY ALIVE",-1)),z("b",null,[et(Ie(b.value.length),1),C[47]||(C[47]=z("span",null,"/ 8",-1))])]),z("div",Bb,[et(Ie(ie.value),1),z("small",null,Ie(_.value.actors.some(ne=>ne.pendingSpawn)?"DESTROY BOTH CRATES":_.value.phaseFrame<=1800?"SAFE AREA HOLDING":"SAFE AREA CONTRACTING"),1)])]),_.value.chaosAt!==void 0?(Ne(),Oe("div",kb,[C[49]||(C[49]=z("span",null,"G GRAB / THROW · E MOVEMENT LOOT",-1)),m.value.carrying?(Ne(),Oe("b",zb,"HOLDING "+Ie(m.value.carrying.kind.toUpperCase())+" — AIM + ATTACK TO THROW",1)):mt("",!0),(m.value.stunUntil??0)>_.value.frame?(Ne(),Oe("b",Hb,"TV STUN · "+Ie(Math.ceil(((m.value.stunUntil??0)-_.value.frame)/60))+"s",1)):mt("",!0),m.value.boost?(Ne(),Oe("b",Vb,Ie(_t(Sd)[m.value.boost.kind])+" · "+Ie(Math.max(0,Math.ceil((m.value.boost.until-_.value.frame)/60)))+"s",1)):mt("",!0)])):mt("",!0),_.value.major?(Ne(),Oe("div",{key:1,class:Un(["event-banner",{helpful:_.value.major.kind==="foam"}])},[z("b",null,Ie(_.value.major.kind==="foam"?"FOAM SPRINKLER — SLIPPERY, NO DAMAGE":_.value.major.kind==="truck"?"DANGER: RUNAWAY TRUCK — JUMP OR GET CLEAR":"DANGER: FALLING AIR CONDITIONER — CLEAR THE RED ZONE"),1),z("span",null,Ie(_.value.frame<_.value.major.activeAt?"STARTS IN "+Math.ceil((_.value.major.activeAt-_.value.frame)/60)+"s":"ACTIVE"),1)],2)):mt("",!0),z("div",Gb,[z("div",Wb,[z("b",null,[et(Ie(Math.ceil(m.value.hp)),1),C[50]||(C[50]=z("span",null,"%",-1))]),z("span",null,Ie(m.value.bleedOutAt!==null?(m.value.parts.head?"BLEEDING OUT / ":"HEADLESS — BLEEDING OUT / ")+Math.max(0,Math.ceil((m.value.bleedOutAt-_.value.frame)/60))+"s":m.value.parts.head?"VITALITY":"HEADLESS / MOSTLY GUESSWORK"),1)]),z("div",Xb,[z("i",{style:Ei({width:m.value.hp+"%"})},null,4)]),z("div",Yb,[z("span",null,"PARTS "+Ie(R.value)+" / "+Ie(_t(ln).length),1),R.value<_t(ln).length?(Ne(),Oe("span",qb,"SOME ASSEMBLY LOST")):(Ne(),Oe("span",jb,"FACTORY CONDITION"))]),z("div",Kb,[z("b",null,Ie(O.value.toUpperCase()),1),O.value==="smg"||O.value==="shotgun"?(Ne(),Oe("span",$b,Ie(m.value.ammo)+" / "+Ie(m.value.reserve),1)):O.value==="laser"||O.value==="flamethrower"?(Ne(),Oe("span",Jb,Ie(m.value.ammo)+" "+Ie(O.value==="laser"?"SHOTS":"FUEL"),1)):(Ne(),Oe("span",Zb,Ie(O.value==="body"?"LIMITED DIGNITY":"UNLIMITED REGRETS"),1))]),z("small",null,Ie(m.value.reloading?"RELOADING…":"E PICKUP · Q / SHIFT SWAP · R RELOAD"),1)]),z("div",Qb,[C[51]||(C[51]=z("small",null,"INVENTORY OF YOU",-1)),(Ne(),Oe(vt,null,Qn([["head"],["armL","armR"],["handL","handR"],["thighL","thighR"],["footL","footR"]],ne=>z("div",{key:ne.join()},[z("span",null,Ie(ne[0].startsWith("thigh")?"LEGS":ne[0].replace(/[LR]$/,"").toUpperCase()),1),(Ne(!0),Oe(vt,null,Qn(ne,oe=>(Ne(),Oe("i",{key:oe,class:Un({lost:m.value.parts[oe]<=0})},null,2))),128))])),64))]),m.value.hp<=0?(Ne(),Oe("div",eE,[C[52]||(C[52]=z("p",{class:"eyebrow"},"YOU HAVE BEEN DISCONTINUED.",-1)),z("h2",null,Ie(((ge=h.value.advice)==null?void 0:ge.title)??"The warranty did not cover that."),1),z("p",null,Ie(((xe=h.value.advice)==null?void 0:xe.hint)??"A familiar lesson. Still not a pleasant one."),1),z("small",null,"SPECTATING — "+Ie(b.value.length)+" REMAIN",1),z("div",tE,[(Ne(!0),Oe(vt,null,Qn(b.value,ne=>(Ne(),Oe("button",{key:ne.id,onClick:oe=>{var Ye;return(Ye=_t(g))==null?void 0:Ye.spectator(ne.id)}},Ie(ne.name),9,nE))),128))])])):mt("",!0),z("div",iE,[z("div",{class:"stick",onPointerdown:C[9]||(C[9]=ne=>ke(ne,"move")),onPointermove:C[10]||(C[10]=ne=>ke(ne,"move")),onPointerup:C[11]||(C[11]=ne=>Je(ne,"move")),onPointercancel:C[12]||(C[12]=ne=>Je(ne,"move"))},[z("i",{style:Ei({transform:`translate(${be.value.x*25}px,${be.value.y*25}px)`})},null,4),C[53]||(C[53]=z("small",null,"MOVE",-1))],32),z("div",sE,[z("button",{onClick:C[13]||(C[13]=ne=>{var oe;return(oe=_t(g))==null?void 0:oe.command("jump")})},"JUMP"),z("button",{onClick:C[14]||(C[14]=ne=>{var oe;return(oe=_t(g))==null?void 0:oe.command("pickup")})},"PICK UP"),_.value.chaosAt!==void 0?(Ne(),Oe("button",{key:0,onClick:C[15]||(C[15]=ne=>{var oe;return(oe=_t(g))==null?void 0:oe.command("grab")})},"GRAB / THROW")):mt("",!0),z("button",{onClick:C[16]||(C[16]=ne=>{var oe;return(oe=_t(g))==null?void 0:oe.command("cycle")})},"SWAP"),z("button",{onClick:C[17]||(C[17]=ne=>{var oe;return(oe=_t(g))==null?void 0:oe.command("reload")})},"RELOAD")]),z("div",{class:"stick fire-stick",onPointerdown:C[18]||(C[18]=ne=>ke(ne,"aim")),onPointermove:C[19]||(C[19]=ne=>ke(ne,"aim")),onPointerup:C[20]||(C[20]=ne=>Je(ne,"aim")),onPointercancel:C[21]||(C[21]=ne=>Je(ne,"aim"))},[...C[54]||(C[54]=[z("i",null,null,-1),z("small",null,"AIM / FIRE",-1)])],32)])],64)):mt("",!0),_.value.phase==="results"?(Ne(),Oe("section",{key:3,class:Un(["result-card",{"is-victory":_.value.winner===h.value.localId}])},[z("p",rE,Ie(_.value.winner===h.value.localId?"VICTORY / YOU SURVIVED":"ROUND OVER"),1),z("h2",null,Ie(_.value.winner===null?"NO SURVIVORS.":_.value.winner===h.value.localId?"YOU WON.":"YOU WERE ELIMINATED."),1),z("p",null,Ie(_.value.winner===null?"A draw. Nobody survived the round.":_.value.winner===h.value.localId?"Victory — you are the last player standing.":`${_.value.actors[_.value.winner].name} won the round.`),1),h.value.advice?(Ne(),Oe("div",oE,[z("b",null,Ie(h.value.advice.title),1),z("span",null,Ie(h.value.advice.hint),1)])):mt("",!0),z("div",aE,[_.value.winner===h.value.localId?(Ne(),Oe("span",lE,[C[55]||(C[55]=et("HEALTH ",-1)),z("b",null,Ie(Math.ceil(m.value.hp))+"%",1)])):mt("",!0),z("span",null,[C[56]||(C[56]=et("ELIMINATIONS ",-1)),z("b",null,Ie(m.value.kills),1)]),z("span",null,[C[57]||(C[57]=et("PARTS LEFT ",-1)),z("b",null,Ie(R.value),1)])]),z("button",{class:"primary",onClick:C[22]||(C[22]=ne=>{var oe;return(oe=_t(g))==null?void 0:oe.rematch()})},[...C[58]||(C[58]=[et("ANOTHER TERRIBLE IDEA ",-1),z("span",null,"↗",-1)])]),z("small",null,Ie(M.value?"BOTH HUMANS MUST REQUEST A REMATCH.":"NEXT ROUND ROTATES TO A NEW VENUE."),1)],2)):mt("",!0),_.value.phase!=="results"?(Ne(),Oe("footer",cE,[C[59]||(C[59]=z("span",null,"A / D · ← / → MOVE",-1)),C[60]||(C[60]=z("span",null,"SPACE JUMP",-1)),C[61]||(C[61]=z("span",null,"MOUSE / J ATTACK",-1)),C[62]||(C[62]=z("span",null,"E PICKUP",-1)),_.value.chaosAt!==void 0?(Ne(),Oe("span",hE,"G GRAB / THROW")):mt("",!0),C[63]||(C[63]=z("span",null,"Q / SHIFT WEAPON",-1)),C[64]||(C[64]=z("span",null,"R RELOAD",-1))])):mt("",!0),h.value.paused?(Ne(),Oe("div",uE,[z("section",fE,[C[65]||(C[65]=z("p",{class:"eyebrow"},"PRACTICE / HOLDING IT TOGETHER",-1)),C[66]||(C[66]=z("h2",null,[et("TAKE A BREATHER."),z("br"),et("WHILE YOU HAVE LUNGS.")],-1)),z("button",{class:"primary",onClick:C[23]||(C[23]=ne=>_t(g)&&(_t(g).paused=!1))},"BACK TO IT ↗")])])):mt("",!0),F.value?(Ne(),Oe("div",dE,[z("section",pE,[C[67]||(C[67]=z("p",{class:"eyebrow"},"CONNECTION ENDED",-1)),C[68]||(C[68]=z("h2",null,[et("TECHNICAL"),z("br"),et("DIFFICULTIES.")],-1)),z("p",null,Ie(h.value.network.message),1),z("button",{class:"primary",onClick:C[24]||(C[24]=ne=>{var oe;return(oe=_t(g))==null?void 0:oe.leave()})},"RETURN TO LOBBY ↗")])])):mt("",!0),o.value?(Ne(),Oe("div",mE,[z("section",gE,[z("button",{class:"close",onClick:C[25]||(C[25]=ne=>o.value=!1)},"CLOSE ×"),C[69]||(C[69]=z("p",{class:"eyebrow"},"LEARNING, APPARENTLY.",-1)),C[70]||(C[70]=z("h2",null,"DEATH NOTES.",-1)),h.value.known.length?mt("",!0):(Ne(),Oe("p",_E,"Discover new ways to die. Receive unsolicited advice.")),(Ne(!0),Oe(vt,null,Qn(h.value.known,ne=>(Ne(),Oe("article",{key:ne},[z("b",null,Ie(_t(Xo)[ne].title),1),z("p",null,Ie(_t(Xo)[ne].hint),1)]))),128))])])):mt("",!0)],64))],2)}}});z0(yE).use(W0()).mount("#app");export{bd as S,qi as e,J0 as v};
