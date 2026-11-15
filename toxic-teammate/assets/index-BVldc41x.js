var Id=Object.defineProperty;var Ud=(n,t,e)=>t in n?Id(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var gt=(n,t,e)=>Ud(n,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function $l(n){const t=Object.create(null);for(const e of n.split(","))t[e]=1;return e=>e in t}const se={},ps=[],Pn=()=>{},Dh=()=>!1,Co=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Ro=n=>n.startsWith("onUpdate:"),Le=Object.assign,jl=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},Nd=Object.prototype.hasOwnProperty,Qt=(n,t)=>Nd.call(n,t),Vt=Array.isArray,ms=n=>fr(n)==="[object Map]",Ih=n=>fr(n)==="[object Set]",Hc=n=>fr(n)==="[object Date]",Gt=n=>typeof n=="function",de=n=>typeof n=="string",Ln=n=>typeof n=="symbol",ie=n=>n!==null&&typeof n=="object",Uh=n=>(ie(n)||Gt(n))&&Gt(n.then)&&Gt(n.catch),Nh=Object.prototype.toString,fr=n=>Nh.call(n),Od=n=>fr(n).slice(8,-1),Oh=n=>fr(n)==="[object Object]",Jl=n=>de(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,ks=$l(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Po=n=>{const t=Object.create(null);return(e=>t[e]||(t[e]=n(e)))},Fd=/-\w/g,vn=Po(n=>n.replace(Fd,t=>t.slice(1).toUpperCase())),Bd=/\B([A-Z])/g,Wi=Po(n=>n.replace(Bd,"-$1").toLowerCase()),Fh=Po(n=>n.charAt(0).toUpperCase()+n.slice(1)),Jo=Po(n=>n?`on${Fh(n)}`:""),Rn=(n,t)=>!Object.is(n,t),eo=(n,...t)=>{for(let e=0;e<n.length;e++)n[e](...t)},Bh=(n,t,e,i=!1)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,writable:i,value:e})},Zl=n=>{const t=parseFloat(n);return isNaN(t)?n:t};let Vc;const Lo=()=>Vc||(Vc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ui(n){if(Vt(n)){const t={};for(let e=0;e<n.length;e++){const i=n[e],s=de(i)?Gd(i):Ui(i);if(s)for(const r in s)t[r]=s[r]}return t}else if(de(n)||ie(n))return n}const zd=/;(?![^(]*\))/g,Hd=/:([^]+)/,Vd=/\/\*[^]*?\*\//g;function Gd(n){const t={};return n.replace(Vd,"").split(zd).forEach(e=>{if(e){const i=e.split(Hd);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function Do(n){let t="";if(de(n))t=n;else if(Vt(n))for(let e=0;e<n.length;e++){const i=Do(n[e]);i&&(t+=i+" ")}else if(ie(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}const kd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Wd=$l(kd);function zh(n){return!!n||n===""}function Xd(n,t){if(n.length!==t.length)return!1;let e=!0;for(let i=0;e&&i<n.length;i++)e=Ql(n[i],t[i]);return e}function Ql(n,t){if(n===t)return!0;let e=Hc(n),i=Hc(t);if(e||i)return e&&i?n.getTime()===t.getTime():!1;if(e=Ln(n),i=Ln(t),e||i)return n===t;if(e=Vt(n),i=Vt(t),e||i)return e&&i?Xd(n,t):!1;if(e=ie(n),i=ie(t),e||i){if(!e||!i)return!1;const s=Object.keys(n).length,r=Object.keys(t).length;if(s!==r)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=t.hasOwnProperty(o);if(a&&!l||!a&&l||!Ql(n[o],t[o]))return!1}}return String(n)===String(t)}const Hh=n=>!!(n&&n.__v_isRef===!0),me=n=>de(n)?n:n==null?"":Vt(n)||ie(n)&&(n.toString===Nh||!Gt(n.toString))?Hh(n)?me(n.value):JSON.stringify(n,Vh,2):String(n),Vh=(n,t)=>Hh(t)?Vh(n,t.value):ms(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[i,s],r)=>(e[Zo(i,r)+" =>"]=s,e),{})}:Ih(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>Zo(e))}:Ln(t)?Zo(t):ie(t)&&!Vt(t)&&!Oh(t)?String(t):t,Zo=(n,t="")=>{var e;return Ln(n)?`Symbol(${(e=n.description)!=null?e:t})`:n};/**
* @vue/reactivity v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Re;class Gh{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&Re&&(Re.active?(this.parent=Re,this.index=(Re.scopes||(Re.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,e;if(this.scopes){const i=this.scopes.slice();for(t=0,e=i.length;t<e;t++)i[t].pause()}for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,e;if(this.scopes){const s=this.scopes.slice();for(t=0,e=s.length;t<e;t++)s[t].resume()}const i=this.effects.slice();for(t=0,e=i.length;t<e;t++)i[t].resume()}}run(t){if(this._active){const e=Re;try{return Re=this,t()}finally{Re=e}}}on(){++this._on===1&&(this.prevScope=Re,Re=this)}off(){if(this._on>0&&--this._on===0){if(Re===this)Re=this.prevScope;else{let t=Re;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let e,i;for(e=0,i=this.effects.length;e<i;e++)this.effects[e].stop();for(this.effects.length=0,e=0,i=this.cleanups.length;e<i;e++)this.cleanups[e]();if(this.cleanups.length=0,this.scopes){const s=this.scopes.slice();for(e=0,i=s.length;e<i;e++)s[e].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function qd(n){return new Gh(n)}function Yd(){return Re}let re;const Qo=new WeakSet;class kh{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Re&&(Re.active?Re.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Qo.has(this)&&(Qo.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Xh(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Gc(this),qh(this);const t=re,e=xn;re=this,xn=!0;try{return this.fn()}finally{Yh(this),re=t,xn=e,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)nc(t);this.deps=this.depsTail=void 0,Gc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Qo.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){qa(this)&&this.run()}get dirty(){return qa(this)}}let Wh=0,Ws,Xs;function Xh(n,t=!1){if(n.flags|=8,t){n.next=Xs,Xs=n;return}n.next=Ws,Ws=n}function tc(){Wh++}function ec(){if(--Wh>0)return;if(Xs){let t=Xs;for(Xs=void 0;t;){const e=t.next;t.next=void 0,t.flags&=-9,t=e}}let n;for(;Ws;){let t=Ws;for(Ws=void 0;t;){const e=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){n||(n=i)}t=e}}if(n)throw n}function qh(n){for(let t=n.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Yh(n){let t,e=n.depsTail,i=e;for(;i;){const s=i.prevDep;i.version===-1?(i===e&&(e=s),nc(i),Kd(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=t,n.depsTail=e}function qa(n){for(let t=n.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Kh(t.dep.computed)||t.dep.version!==t.version))return!0;return!!n._dirty}function Kh(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===tr)||(n.globalVersion=tr,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!qa(n))))return;n.flags|=2;const t=n.dep,e=re,i=xn;re=n,xn=!0;try{qh(n);const s=n.fn(n._value);(t.version===0||Rn(s,n._value))&&(n.flags|=128,n._value=s,t.version++)}catch(s){throw t.version++,s}finally{re=e,xn=i,Yh(n),n.flags&=-3}}function nc(n,t=!1){const{dep:e,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),e.subs===n&&(e.subs=i,!i&&e.computed)){e.computed.flags&=-5;for(let r=e.computed.deps;r;r=r.nextDep)nc(r,!0)}!t&&!--e.sc&&e.map&&e.map.delete(e.key)}function Kd(n){const{prevDep:t,nextDep:e}=n;t&&(t.nextDep=e,n.prevDep=void 0),e&&(e.prevDep=t,n.nextDep=void 0)}let xn=!0;const $h=[];function jn(){$h.push(xn),xn=!1}function Jn(){const n=$h.pop();xn=n===void 0?!0:n}function Gc(n){const{cleanup:t}=n;if(n.cleanup=void 0,t){const e=re;re=void 0;try{t()}finally{re=e}}}let tr=0;class $d{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ic{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!re||!xn||re===this.computed)return;let e=this.activeLink;if(e===void 0||e.sub!==re)e=this.activeLink=new $d(re,this),re.deps?(e.prevDep=re.depsTail,re.depsTail.nextDep=e,re.depsTail=e):re.deps=re.depsTail=e,jh(e);else if(e.version===-1&&(e.version=this.version,e.nextDep)){const i=e.nextDep;i.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=i),e.prevDep=re.depsTail,e.nextDep=void 0,re.depsTail.nextDep=e,re.depsTail=e,re.deps===e&&(re.deps=i)}return e}trigger(t){this.version++,tr++,this.notify(t)}notify(t){tc();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{ec()}}}function jh(n){if(n.dep.sc++,n.sub.flags&4){const t=n.dep.computed;if(t&&!n.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)jh(i)}const e=n.dep.subs;e!==n&&(n.prevSub=e,e&&(e.nextSub=n)),n.dep.subs=n}}const Ya=new WeakMap,Fi=Symbol(""),Ka=Symbol(""),er=Symbol("");function Ne(n,t,e){if(xn&&re){let i=Ya.get(n);i||Ya.set(n,i=new Map);let s=i.get(e);s||(i.set(e,s=new ic),s.map=i,s.key=e),s.track()}}function Xn(n,t,e,i,s,r){const o=Ya.get(n);if(!o){tr++;return}const a=l=>{l&&l.trigger()};if(tc(),t==="clear")o.forEach(a);else{const l=Vt(n),c=l&&Jl(e);if(l&&e==="length"){const h=Number(i);o.forEach((f,u)=>{(u==="length"||u===er||!Ln(u)&&u>=h)&&a(f)})}else switch((e!==void 0||o.has(void 0))&&a(o.get(e)),c&&a(o.get(er)),t){case"add":l?c&&a(o.get("length")):(a(o.get(Fi)),ms(n)&&a(o.get(Ka)));break;case"delete":l||(a(o.get(Fi)),ms(n)&&a(o.get(Ka)));break;case"set":ms(n)&&a(o.get(Fi));break}}ec()}function Ki(n){const t=Zt(n);return t===n?t:(Ne(t,"iterate",er),on(n)?t:t.map(Mn))}function Io(n){return Ne(n=Zt(n),"iterate",er),n}function Tn(n,t){return Zn(n)?ys(Bi(n)?Mn(t):t):Mn(t)}const jd={__proto__:null,[Symbol.iterator](){return ta(this,Symbol.iterator,n=>Tn(this,n))},concat(...n){return Ki(this).concat(...n.map(t=>Vt(t)?Ki(t):t))},entries(){return ta(this,"entries",n=>(n[1]=Tn(this,n[1]),n))},every(n,t){return Nn(this,"every",n,t,void 0,arguments)},filter(n,t){return Nn(this,"filter",n,t,e=>e.map(i=>Tn(this,i)),arguments)},find(n,t){return Nn(this,"find",n,t,e=>Tn(this,e),arguments)},findIndex(n,t){return Nn(this,"findIndex",n,t,void 0,arguments)},findLast(n,t){return Nn(this,"findLast",n,t,e=>Tn(this,e),arguments)},findLastIndex(n,t){return Nn(this,"findLastIndex",n,t,void 0,arguments)},forEach(n,t){return Nn(this,"forEach",n,t,void 0,arguments)},includes(...n){return ea(this,"includes",n)},indexOf(...n){return ea(this,"indexOf",n)},join(n){return Ki(this).join(n)},lastIndexOf(...n){return ea(this,"lastIndexOf",n)},map(n,t){return Nn(this,"map",n,t,void 0,arguments)},pop(){return Ds(this,"pop")},push(...n){return Ds(this,"push",n)},reduce(n,...t){return kc(this,"reduce",n,t)},reduceRight(n,...t){return kc(this,"reduceRight",n,t)},shift(){return Ds(this,"shift")},some(n,t){return Nn(this,"some",n,t,void 0,arguments)},splice(...n){return Ds(this,"splice",n)},toReversed(){return Ki(this).toReversed()},toSorted(n){return Ki(this).toSorted(n)},toSpliced(...n){return Ki(this).toSpliced(...n)},unshift(...n){return Ds(this,"unshift",n)},values(){return ta(this,"values",n=>Tn(this,n))}};function ta(n,t,e){const i=Io(n),s=i[t]();return i!==n&&!on(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=e(r.value)),r}),s}const Jd=Array.prototype;function Nn(n,t,e,i,s,r){const o=Io(n),a=o!==n&&!on(n),l=o[t];if(l!==Jd[t]){const f=l.apply(n,r);return a?Mn(f):f}let c=e;o!==n&&(a?c=function(f,u){return e.call(this,Tn(n,f),u,n)}:e.length>2&&(c=function(f,u){return e.call(this,f,u,n)}));const h=l.call(o,c,i);return a&&s?s(h):h}function kc(n,t,e,i){const s=Io(n),r=s!==n&&!on(n);let o=e,a=!1;s!==n&&(r?(a=i.length===0,o=function(c,h,f){return a&&(a=!1,c=Tn(n,c)),e.call(this,c,Tn(n,h),f,n)}):e.length>3&&(o=function(c,h,f){return e.call(this,c,h,f,n)}));const l=s[t](o,...i);return a?Tn(n,l):l}function ea(n,t,e){const i=Zt(n);Ne(i,"iterate",er);const s=i[t](...e);return(s===-1||s===!1)&&ac(e[0])?(e[0]=Zt(e[0]),i[t](...e)):s}function Ds(n,t,e=[]){jn(),tc();const i=Zt(n)[t].apply(n,e);return ec(),Jn(),i}const Zd=$l("__proto__,__v_isRef,__isVue"),Jh=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Ln));function Qd(n){Ln(n)||(n=String(n));const t=Zt(this);return Ne(t,"has",n),t.hasOwnProperty(n)}class Zh{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,i){if(e==="__v_skip")return t.__v_skip;const s=this._isReadonly,r=this._isShallow;if(e==="__v_isReactive")return!s;if(e==="__v_isReadonly")return s;if(e==="__v_isShallow")return r;if(e==="__v_raw")return i===(s?r?cp:nf:r?ef:tf).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const o=Vt(t);if(!s){let l;if(o&&(l=jd[e]))return l;if(e==="hasOwnProperty")return Qd}const a=Reflect.get(t,e,Oe(t)?t:i);if((Ln(e)?Jh.has(e):Zd(e))||(s||Ne(t,"get",e),r))return a;if(Oe(a)){const l=o&&Jl(e)?a:a.value;return s&&ie(l)?ja(l):l}return ie(a)?s?ja(a):rc(a):a}}class Qh extends Zh{constructor(t=!1){super(!1,t)}set(t,e,i,s){let r=t[e];const o=Vt(t)&&Jl(e);if(!this._isShallow){const c=Zn(r);if(!on(i)&&!Zn(i)&&(r=Zt(r),i=Zt(i)),!o&&Oe(r)&&!Oe(i))return c||(r.value=i),!0}const a=o?Number(e)<t.length:Qt(t,e),l=Reflect.set(t,e,i,Oe(t)?t:s);return t===Zt(s)&&l&&(a?Rn(i,r)&&Xn(t,"set",e,i):Xn(t,"add",e,i)),l}deleteProperty(t,e){const i=Qt(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&i&&Xn(t,"delete",e,void 0),s}has(t,e){const i=Reflect.has(t,e);return(!Ln(e)||!Jh.has(e))&&Ne(t,"has",e),i}ownKeys(t){return Ne(t,"iterate",Vt(t)?"length":Fi),Reflect.ownKeys(t)}}class tp extends Zh{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const ep=new Qh,np=new tp,ip=new Qh(!0);const $a=n=>n,Sr=n=>Reflect.getPrototypeOf(n);function sp(n,t,e){return function(...i){const s=this.__v_raw,r=Zt(s),o=ms(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),h=e?$a:t?ys:Mn;return!t&&Ne(r,"iterate",l?Ka:Fi),Le(Object.create(c),{next(){const{value:f,done:u}=c.next();return u?{value:f,done:u}:{value:a?[h(f[0]),h(f[1])]:h(f),done:u}}})}}function yr(n){return function(...t){return n==="delete"?!1:n==="clear"?void 0:this}}function rp(n,t){const e={get(s){const r=this.__v_raw,o=Zt(r),a=Zt(s);n||(Rn(s,a)&&Ne(o,"get",s),Ne(o,"get",a));const{has:l}=Sr(o),c=t?$a:n?ys:Mn;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&Ne(Zt(s),"iterate",Fi),s.size},has(s){const r=this.__v_raw,o=Zt(r),a=Zt(s);return n||(Rn(s,a)&&Ne(o,"has",s),Ne(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=Zt(a),c=t?$a:n?ys:Mn;return!n&&Ne(l,"iterate",Fi),a.forEach((h,f)=>s.call(r,c(h),c(f),o))}};return Le(e,n?{add:yr("add"),set:yr("set"),delete:yr("delete"),clear:yr("clear")}:{add(s){const r=Zt(this),o=Sr(r),a=Zt(s),l=!t&&!on(s)&&!Zn(s)?a:s;return o.has.call(r,l)||Rn(s,l)&&o.has.call(r,s)||Rn(a,l)&&o.has.call(r,a)||(r.add(l),Xn(r,"add",l,l)),this},set(s,r){!t&&!on(r)&&!Zn(r)&&(r=Zt(r));const o=Zt(this),{has:a,get:l}=Sr(o);let c=a.call(o,s);c||(s=Zt(s),c=a.call(o,s));const h=l.call(o,s);return o.set(s,r),c?Rn(r,h)&&Xn(o,"set",s,r):Xn(o,"add",s,r),this},delete(s){const r=Zt(this),{has:o,get:a}=Sr(r);let l=o.call(r,s);l||(s=Zt(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&Xn(r,"delete",s,void 0),c},clear(){const s=Zt(this),r=s.size!==0,o=s.clear();return r&&Xn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=sp(s,n,t)}),e}function sc(n,t){const e=rp(n,t);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(Qt(e,s)&&s in i?e:i,s,r)}const op={get:sc(!1,!1)},ap={get:sc(!1,!0)},lp={get:sc(!0,!1)};const tf=new WeakMap,ef=new WeakMap,nf=new WeakMap,cp=new WeakMap;function up(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function rc(n){return Zn(n)?n:oc(n,!1,ep,op,tf)}function hp(n){return oc(n,!1,ip,ap,ef)}function ja(n){return oc(n,!0,np,lp,nf)}function oc(n,t,e,i,s){if(!ie(n)||n.__v_raw&&!(t&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const r=s.get(n);if(r)return r;const o=up(Od(n));if(o===0)return n;const a=new Proxy(n,o===2?i:e);return s.set(n,a),a}function Bi(n){return Zn(n)?Bi(n.__v_raw):!!(n&&n.__v_isReactive)}function Zn(n){return!!(n&&n.__v_isReadonly)}function on(n){return!!(n&&n.__v_isShallow)}function ac(n){return n?!!n.__v_raw:!1}function Zt(n){const t=n&&n.__v_raw;return t?Zt(t):n}function sf(n){return!Qt(n,"__v_skip")&&Object.isExtensible(n)&&Bh(n,"__v_skip",!0),n}const Mn=n=>ie(n)?rc(n):n,ys=n=>ie(n)?ja(n):n;function Oe(n){return n?n.__v_isRef===!0:!1}function Ri(n){return fp(n,!1)}function fp(n,t){return Oe(n)?n:new dp(n,t)}class dp{constructor(t,e){this.dep=new ic,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=e?t:Zt(t),this._value=e?t:Mn(t),this.__v_isShallow=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,i=this.__v_isShallow||on(t)||Zn(t);t=i?t:Zt(t),Rn(t,e)&&(this._rawValue=t,this._value=i?t:Mn(t),this.dep.trigger())}}function fn(n){return Oe(n)?n.value:n}const pp={get:(n,t,e)=>t==="__v_raw"?n:fn(Reflect.get(n,t,e)),set:(n,t,e,i)=>{const s=n[t];return Oe(s)&&!Oe(e)?(s.value=e,!0):Reflect.set(n,t,e,i)}};function rf(n){return Bi(n)?n:new Proxy(n,pp)}class mp{constructor(t,e,i){this.fn=t,this.setter=e,this._value=void 0,this.dep=new ic(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=tr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!e,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&re!==this)return Xh(this,!0),!0}get value(){const t=this.dep.track();return Kh(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function gp(n,t,e=!1){let i,s;return Gt(n)?i=n:(i=n.get,s=n.set),new mp(i,s,e)}const Er={},fo=new WeakMap;let Pi;function _p(n,t=!1,e=Pi){if(e){let i=fo.get(e);i||fo.set(e,i=[]),i.push(n)}}function vp(n,t,e=se){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=e,c=E=>s?E:on(E)||s===!1||s===0?qn(E,1):qn(E);let h,f,u,d,g=!1,x=!1;if(Oe(n)?(f=()=>n.value,g=on(n)):Bi(n)?(f=()=>c(n),g=!0):Vt(n)?(x=!0,g=n.some(E=>Bi(E)||on(E)),f=()=>n.map(E=>{if(Oe(E))return E.value;if(Bi(E))return c(E);if(Gt(E))return l?l(E,2):E()})):Gt(n)?t?f=l?()=>l(n,2):n:f=()=>{if(u){jn();try{u()}finally{Jn()}}const E=Pi;Pi=h;try{return l?l(n,3,[d]):n(d)}finally{Pi=E}}:f=Pn,t&&s){const E=f,O=s===!0?1/0:s;f=()=>qn(E(),O)}const p=Yd(),m=()=>{h.stop(),p&&p.active&&jl(p.effects,h)};if(r&&t){const E=t;t=(...O)=>{const R=E(...O);return m(),R}}let w=x?new Array(n.length).fill(Er):Er;const y=E=>{if(!(!(h.flags&1)||!h.dirty&&!E))if(t){const O=h.run();if(E||s||g||(x?O.some((R,C)=>Rn(R,w[C])):Rn(O,w))){u&&u();const R=Pi;Pi=h;try{const C=[O,w===Er?void 0:x&&w[0]===Er?[]:w,d];w=O,l?l(t,3,C):t(...C)}finally{Pi=R}}}else h.run()};return a&&a(y),h=new kh(f),h.scheduler=o?()=>o(y,!1):y,d=E=>_p(E,!1,h),u=h.onStop=()=>{const E=fo.get(h);if(E){if(l)l(E,4);else for(const O of E)O();fo.delete(h)}},t?i?y(!0):w=h.run():o?o(y.bind(null,!0),!0):h.run(),m.pause=h.pause.bind(h),m.resume=h.resume.bind(h),m.stop=m,m}function qn(n,t=1/0,e){if(t<=0||!ie(n)||n.__v_skip||(e=e||new Map,(e.get(n)||0)>=t))return n;if(e.set(n,t),t--,Oe(n))qn(n.value,t,e);else if(Vt(n))for(let i=0;i<n.length;i++)qn(n[i],t,e);else if(Ih(n)||ms(n))n.forEach(i=>{qn(i,t,e)});else if(Oh(n)){for(const i in n)qn(n[i],t,e);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&qn(n[i],t,e)}return n}/**
* @vue/runtime-core v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function dr(n,t,e,i){try{return i?n(...i):n()}catch(s){Uo(s,t,e)}}function Sn(n,t,e,i){if(Gt(n)){const s=dr(n,t,e,i);return s&&Uh(s)&&s.catch(r=>{Uo(r,t,e)}),s}if(Vt(n)){const s=[];for(let r=0;r<n.length;r++)s.push(Sn(n[r],t,e,i));return s}}function Uo(n,t,e,i=!0){const s=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||se;if(t){let a=t.parent;const l=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${e}`;for(;a;){const h=a.ec;if(h){for(let f=0;f<h.length;f++)if(h[f](n,l,c)===!1)return}a=a.parent}if(r){jn(),dr(r,null,10,[n,l,c]),Jn();return}}xp(n,e,s,i,o)}function xp(n,t,e,i=!0,s=!1){if(s)throw n;console.error(n)}const He=[];let En=-1;const gs=[];let ci=null,cs=0;const of=Promise.resolve();let po=null;function Mp(n){const t=po||of;return n?t.then(this?n.bind(this):n):t}function Sp(n){let t=En+1,e=He.length;for(;t<e;){const i=t+e>>>1,s=He[i],r=nr(s);r<n||r===n&&s.flags&2?t=i+1:e=i}return t}function lc(n){if(!(n.flags&1)){const t=nr(n),e=He[He.length-1];!e||!(n.flags&2)&&t>=nr(e)?He.push(n):He.splice(Sp(t),0,n),n.flags|=1,af()}}function af(){po||(po=of.then(cf))}function yp(n){if(!Vt(n))ci&&n.id===-1?ci.splice(cs+1,0,n):n.flags&1||(gs.push(n),n.flags|=1);else for(let t=0;t<n.length;t++)gs.push(n[t]);af()}function Wc(n,t,e=En+1){for(;e<He.length;e++){const i=He[e];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;He.splice(e,1),e--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function lf(n){if(gs.length){const t=[...new Set(gs)].sort((e,i)=>nr(e)-nr(i));if(gs.length=0,ci){for(let e=0;e<t.length;e++)ci.push(t[e]);return}for(ci=t,cs=0;cs<ci.length;cs++){const e=ci[cs];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}ci=null,cs=0}}const nr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function cf(n){try{for(En=0;En<He.length;En++){const t=He[En];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),dr(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;En<He.length;En++){const t=He[En];t&&(t.flags&=-2)}En=-1,He.length=0,lf(),po=null,(He.length||gs.length)&&cf()}}let sn=null,uf=null;function mo(n){const t=sn;return sn=n,uf=n&&n.type.__scopeId||null,t}function Ep(n,t=sn,e){if(!t||n._n)return n;const i=(...s)=>{i._d&&nu(-1);const r=mo(t),o=zi.length;let a;try{a=n(...s)}finally{for(let l=zi.length;l>o;l--)Of();mo(r),i._d&&nu(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function bp(n,t){if(sn===null)return n;const e=zo(sn),i=n.dirs||(n.dirs=[]);for(let s=0;s<t.length;s++){let[r,o,a,l=se]=t[s];r&&(Gt(r)&&(r={mounted:r,updated:r}),r.deep&&qn(o),i.push({dir:r,instance:e,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function xi(n,t,e,i){const s=n.dirs,r=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(jn(),Sn(l,e,8,[n.el,a,n,t]),Jn())}}function Tp(n,t){if(Ve){let e=Ve.provides;const i=Ve.parent&&Ve.parent.provides;i===e&&(e=Ve.provides=Object.create(i)),e[n]=t}}function no(n,t,e=!1){const i=ym();if(i||_s){let s=_s?_s._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return e&&Gt(t)?t.call(i&&i.proxy):t}}const Ap=Symbol.for("v-scx"),wp=()=>no(Ap);function na(n,t,e){return hf(n,t,e)}function hf(n,t,e=se){const{immediate:i,deep:s,flush:r,once:o}=e,a=Le({},e),l=t&&i||!t&&r!=="post";let c;if(rr){if(r==="sync"){const d=wp();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=Pn,d.resume=Pn,d.pause=Pn,d}}const h=Ve;a.call=(d,g,x)=>Sn(d,h,g,x);let f=!1;r==="post"?a.scheduler=d=>{We(d,h&&h.suspense)}:r!=="sync"&&(f=!0,a.scheduler=(d,g)=>{g?d():lc(d)}),a.augmentJob=d=>{t&&(d.flags|=4),f&&(d.flags|=2,h&&(d.id=h.uid,d.i=h))};const u=vp(n,t,a);return rr&&(c?c.push(u):l&&u()),u}function Cp(n,t,e){const i=this.proxy,s=de(n)?n.includes(".")?ff(i,n):()=>i[n]:n.bind(i,i);let r;Gt(t)?r=t:(r=t.handler,e=t);const o=pr(this),a=hf(s,r.bind(i),e);return o(),a}function ff(n,t){const e=t.split(".");return()=>{let i=n;for(let s=0;s<e.length&&i;s++)i=i[e[s]];return i}}const Rp=Symbol("_vte"),No=n=>n.__isTeleport,ia=Symbol("_leaveCb");function Pp(n){let t=n[0];if(n.length>1){for(const e of n)if(e.type!==Qn){t=e;break}}return t}function df(n){if(!uc(n))return No(n.type)&&n.children?Pp(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:t,children:e}=n;if(e){if(t&16)return e[0];if(t&32&&Gt(e.default))return e.default()}}function cc(n,t){if(n.shapeFlag&6&&n.component){n.transition=t;const e=n.component.subTree;cc(No(e.type)&&df(e)||e,t)}else n.shapeFlag&128?(n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback)):n.transition=t}function Lp(n,t){return Gt(n)?Le({name:n.name},t,{setup:n}):n}function pf(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Xc(n,t){let e;return!!((e=Object.getOwnPropertyDescriptor(n,t))&&!e.configurable)}const go=new WeakMap;function qs(n,t,e,i,s=!1){if(Vt(n)){n.forEach((x,p)=>qs(x,t&&(Vt(t)?t[p]:t),e,i,s));return}if(Ys(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&qs(n,t,e,i.component.subTree);return}const r=i.shapeFlag&4?zo(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=t&&t.r,h=a.refs===se?a.refs={}:a.refs,f=a.setupState,u=Zt(f),d=f===se?Dh:x=>Xc(h,x)?!1:Qt(u,x),g=(x,p)=>!(p&&Xc(h,p));if(c!=null&&c!==l){if(qc(t),de(c))h[c]=null,d(c)&&(f[c]=null);else if(Oe(c)){const x=t;g(c,x.k)&&(c.value=null),x.k&&(h[x.k]=null)}}if(Gt(l))dr(l,a,12,[o,h]);else{const x=de(l),p=Oe(l);if(x||p){const m=()=>{if(n.f){const w=x?d(l)?f[l]:h[l]:g()||!n.k?l.value:h[n.k];if(s)Vt(w)&&jl(w,r);else if(Vt(w))w.includes(r)||w.push(r);else if(x)h[l]=[r],d(l)&&(f[l]=h[l]);else{const y=[r];g(l,n.k)&&(l.value=y),n.k&&(h[n.k]=y)}}else x?(h[l]=o,d(l)&&(f[l]=o)):p&&(g(l,n.k)&&(l.value=o),n.k&&(h[n.k]=o))};if(o){const w=()=>{m(),go.delete(n)};w.id=-1,go.set(n,w),We(w,e)}else qc(n),m()}}}function qc(n){const t=go.get(n);t&&(t.flags|=8,go.delete(n))}Lo().requestIdleCallback;Lo().cancelIdleCallback;const Ys=n=>!!n.type.__asyncLoader,uc=n=>n.type.__isKeepAlive;function Dp(n,t){mf(n,"a",t)}function Ip(n,t){mf(n,"da",t)}function mf(n,t,e=Ve){const i=n.__wdc||(n.__wdc=()=>{let s=e;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Oo(t,i,e),e){let s=e.parent;for(;s&&s.parent;)uc(s.parent.vnode)&&Up(i,t,e,s),s=s.parent}}function Up(n,t,e,i){const s=Oo(t,n,i,!0);vf(()=>{jl(i[t],s)},e)}function Oo(n,t,e=Ve,i=!1){if(e){const s=e[n]||(e[n]=[]),r=t.__weh||(t.__weh=(...o)=>{jn();const a=pr(e),l=Sn(t,e,n,o);return a(),Jn(),l});return i?s.unshift(r):s.push(r),r}}const ei=n=>(t,e=Ve)=>{(!rr||n==="sp")&&Oo(n,(...i)=>t(...i),e)},Np=ei("bm"),gf=ei("m"),Op=ei("bu"),Fp=ei("u"),_f=ei("bum"),vf=ei("um"),Bp=ei("sp"),zp=ei("rtg"),Hp=ei("rtc");function Vp(n,t=Ve){Oo("ec",n,t)}const Gp=Symbol.for("v-ndc");function Yc(n,t,e,i){let s;const r=e,o=Vt(n);if(o||de(n)){const a=o&&Bi(n);let l=!1,c=!1;a&&(l=!on(n),c=Zn(n),n=Io(n)),s=new Array(n.length);for(let h=0,f=n.length;h<f;h++)s[h]=t(l?c?ys(Mn(n[h])):Mn(n[h]):n[h],h,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let a=0;a<n;a++)s[a]=t(a+1,a,void 0,r)}else if(ie(n))if(n[Symbol.iterator])s=Array.from(n,(a,l)=>t(a,l,void 0,r));else{const a=Object.keys(n);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const h=a[l];s[l]=t(n[h],h,l,r)}}else s=[];return s}const Ja=n=>n?Hf(n)?zo(n):Ja(n.parent):null,Ks=Le(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Ja(n.parent),$root:n=>Ja(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Mf(n),$forceUpdate:n=>n.f||(n.f=()=>{lc(n.update)}),$nextTick:n=>n.n||(n.n=Mp.bind(n.proxy)),$watch:n=>Cp.bind(n)}),sa=(n,t)=>n!==se&&!n.__isScriptSetup&&Qt(n,t),kp={get({_:n},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;if(t[0]!=="$"){const u=o[t];if(u!==void 0)switch(u){case 1:return i[t];case 2:return s[t];case 4:return e[t];case 3:return r[t]}else{if(sa(i,t))return o[t]=1,i[t];if(s!==se&&Qt(s,t))return o[t]=2,s[t];if(Qt(r,t))return o[t]=3,r[t];if(e!==se&&Qt(e,t))return o[t]=4,e[t];Za&&(o[t]=0)}}const c=Ks[t];let h,f;if(c)return t==="$attrs"&&Ne(n.attrs,"get",""),c(n);if((h=a.__cssModules)&&(h=h[t]))return h;if(e!==se&&Qt(e,t))return o[t]=4,e[t];if(f=l.config.globalProperties,Qt(f,t))return f[t]},set({_:n},t,e){const{data:i,setupState:s,ctx:r}=n;return sa(s,t)?(s[t]=e,!0):i!==se&&Qt(i,t)?(i[t]=e,!0):Qt(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(r[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:i,appContext:s,props:r,type:o}},a){let l;return!!(e[a]||n!==se&&a[0]!=="$"&&Qt(n,a)||sa(t,a)||Qt(r,a)||Qt(i,a)||Qt(Ks,a)||Qt(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:Qt(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};function Kc(n){return Vt(n)?n.reduce((t,e)=>(t[e]=null,t),{}):n}let Za=!0;function Wp(n){const t=Mf(n),e=n.proxy,i=n.ctx;Za=!1,t.beforeCreate&&$c(t.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:h,beforeMount:f,mounted:u,beforeUpdate:d,updated:g,activated:x,deactivated:p,beforeDestroy:m,beforeUnmount:w,destroyed:y,unmounted:E,render:O,renderTracked:R,renderTriggered:C,errorCaptured:H,serverPrefetch:ot,expose:M,inheritAttrs:T,components:j,directives:q,filters:J}=t;if(c&&Xp(c,i,null),o)for(const tt in o){const X=o[tt];Gt(X)&&(i[tt]=X.bind(e))}if(s){const tt=s.call(e,e);ie(tt)&&(n.data=rc(tt))}if(Za=!0,r)for(const tt in r){const X=r[tt],dt=Gt(X)?X.bind(e,e):Gt(X.get)?X.get.bind(e,e):Pn,xt=!Gt(X)&&Gt(X.set)?X.set.bind(e):Pn,mt=Cm({get:dt,set:xt});Object.defineProperty(i,tt,{enumerable:!0,configurable:!0,get:()=>mt.value,set:Bt=>mt.value=Bt})}if(a)for(const tt in a)xf(a[tt],i,e,tt);if(l){const tt=Gt(l)?l.call(e):l;Reflect.ownKeys(tt).forEach(X=>{Tp(X,tt[X])})}h&&$c(h,n,"c");function W(tt,X){Vt(X)?X.forEach(dt=>tt(dt.bind(e))):X&&tt(X.bind(e))}if(W(Np,f),W(gf,u),W(Op,d),W(Fp,g),W(Dp,x),W(Ip,p),W(Vp,H),W(Hp,R),W(zp,C),W(_f,w),W(vf,E),W(Bp,ot),Vt(M))if(M.length){const tt=n.exposed||(n.exposed={});M.forEach(X=>{Object.defineProperty(tt,X,{get:()=>e[X],set:dt=>e[X]=dt,enumerable:!0})})}else n.exposed||(n.exposed={});O&&n.render===Pn&&(n.render=O),T!=null&&(n.inheritAttrs=T),j&&(n.components=j),q&&(n.directives=q),ot&&pf(n)}function Xp(n,t,e=Pn){Vt(n)&&(n=Qa(n));for(const i in n){const s=n[i];let r;ie(s)?"default"in s?r=no(s.from||i,s.default,!0):r=no(s.from||i):r=no(s),Oe(r)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):t[i]=r}}function $c(n,t,e){Sn(Vt(n)?n.map(i=>i.bind(t.proxy)):n.bind(t.proxy),t,e)}function xf(n,t,e,i){let s=i.includes(".")?ff(e,i):()=>e[i];if(de(n)){const r=t[n];Gt(r)&&na(s,r)}else if(Gt(n))na(s,n.bind(e));else if(ie(n))if(Vt(n))n.forEach(r=>xf(r,t,e,i));else{const r=Gt(n.handler)?n.handler.bind(e):t[n.handler];Gt(r)&&na(s,r,n)}}function Mf(n){const t=n.type,{mixins:e,extends:i}=t,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(t);let l;return a?l=a:!s.length&&!e&&!i?l=t:(l={},s.length&&s.forEach(c=>_o(l,c,o,!0)),_o(l,t,o)),ie(t)&&r.set(t,l),l}function _o(n,t,e,i=!1){const{mixins:s,extends:r}=t;r&&_o(n,r,e,!0),s&&s.forEach(o=>_o(n,o,e,!0));for(const o in t)if(!(i&&o==="expose")){const a=qp[o]||e&&e[o];n[o]=a?a(n[o],t[o]):t[o]}return n}const qp={data:jc,props:Jc,emits:Jc,methods:Hs,computed:Hs,beforeCreate:Fe,created:Fe,beforeMount:Fe,mounted:Fe,beforeUpdate:Fe,updated:Fe,beforeDestroy:Fe,beforeUnmount:Fe,destroyed:Fe,unmounted:Fe,activated:Fe,deactivated:Fe,errorCaptured:Fe,serverPrefetch:Fe,components:Hs,directives:Hs,watch:Kp,provide:jc,inject:Yp};function jc(n,t){return t?n?function(){return Le(Gt(n)?n.call(this,this):n,Gt(t)?t.call(this,this):t)}:t:n}function Yp(n,t){return Hs(Qa(n),Qa(t))}function Qa(n){if(Vt(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function Fe(n,t){return n?[...new Set([].concat(n,t))]:t}function Hs(n,t){return n?Le(Object.create(null),n,t):t}function Jc(n,t){return n?Vt(n)&&Vt(t)?[...new Set([...n,...t])]:Le(Object.create(null),Kc(n),Kc(t??{})):t}function Kp(n,t){if(!n)return t;if(!t)return n;const e=Le(Object.create(null),n);for(const i in t)e[i]=Fe(n[i],t[i]);return e}function Sf(){return{app:null,config:{isNativeTag:Dh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let $p=0;function jp(n,t){return function(i,s=null){Gt(i)||(i=Le({},i)),s!=null&&!ie(s)&&(s=null);const r=Sf(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:$p++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:Rm,get config(){return r.config},set config(h){},use(h,...f){return o.has(h)||(h&&Gt(h.install)?(o.add(h),h.install(c,...f)):Gt(h)&&(o.add(h),h(c,...f))),c},mixin(h){return r.mixins.includes(h)||r.mixins.push(h),c},component(h,f){return f?(r.components[h]=f,c):r.components[h]},directive(h,f){return f?(r.directives[h]=f,c):r.directives[h]},mount(h,f,u){if(!l){const d=c._ceVNode||$n(i,s);return d.appContext=r,u===!0?u="svg":u===!1&&(u=void 0),n(d,h,u),l=!0,c._container=h,h.__vue_app__=c,zo(d.component)}},onUnmount(h){a.push(h)},unmount(){l&&(Sn(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(h,f){return r.provides[h]=f,c},runWithContext(h){const f=_s;_s=c;try{return h()}finally{_s=f}}};return c}}let _s=null;const Jp=(n,t)=>t==="modelValue"||t==="model-value"?n.modelModifiers:n[`${t}Modifiers`]||n[`${vn(t)}Modifiers`]||n[`${Wi(t)}Modifiers`];function Zp(n,t,...e){if(n.isUnmounted)return;const i=n.vnode.props||se;let s=e;const r=t.startsWith("update:"),o=r&&Jp(i,t.slice(7));o&&(o.trim&&(s=e.map(h=>de(h)?h.trim():h)),o.number&&(s=e.map(Zl)));let a,l=i[a=Jo(t)]||i[a=Jo(vn(t))];!l&&r&&(l=i[a=Jo(Wi(t))]),l&&Sn(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Sn(c,n,6,s)}}const Qp=new WeakMap;function yf(n,t,e=!1){const i=e?Qp:t.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!Gt(n)){const l=c=>{const h=yf(c,t,!0);h&&(a=!0,Le(o,h))};!e&&t.mixins.length&&t.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(ie(n)&&i.set(n,null),null):(Vt(r)?r.forEach(l=>o[l]=null):Le(o,r),ie(n)&&i.set(n,o),o)}function Fo(n,t){return!n||!Co(t)?!1:(t=t.slice(2),t=t==="Once"?t:t.replace(/Once$/,""),Qt(n,t[0].toLowerCase()+t.slice(1))||Qt(n,Wi(t))||Qt(n,t))}function Zc(n){const{type:t,vnode:e,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:h,props:f,data:u,setupState:d,ctx:g,inheritAttrs:x}=n,p=mo(n);let m,w;try{if(e.shapeFlag&4){const E=s||i,O=E;m=An(c.call(O,E,h,f,d,u,g)),w=a}else{const E=t;m=An(E.length>1?E(f,{attrs:a,slots:o,emit:l}):E(f,null)),w=t.props?a:tm(a)}}catch(E){zi.length=0,Uo(E,n,1),m=$n(Qn)}let y=m;if(w&&x!==!1){const E=Object.keys(w),{shapeFlag:O}=y;E.length&&O&7&&(r&&E.some(Ro)&&(w=em(w,r)),y=Es(y,w,!1,!0))}if(e.dirs&&(y=Es(y,null,!1,!0),y.dirs=y.dirs?y.dirs.concat(e.dirs):e.dirs),e.transition){const E=No(y.type)&&df(y)||y;cc(E,e.transition)}return m=y,mo(p),m}const tm=n=>{let t;for(const e in n)(e==="class"||e==="style"||Co(e))&&((t||(t={}))[e]=n[e]);return t},em=(n,t)=>{const e={};for(const i in n)(!Ro(i)||!(i.slice(9)in t))&&(e[i]=n[i]);return e};function nm(n,t,e){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=t,c=r.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return i?Qc(i,o,c):!!o;if(l&8){const h=t.dynamicProps;for(let f=0;f<h.length;f++){const u=h[f];if(Ef(o,i,u)&&!Fo(c,u))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Qc(i,o,c):!0:!!o;return!1}function Qc(n,t,e){const i=Object.keys(t);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(Ef(t,n,r)&&!Fo(e,r))return!0}return!1}function Ef(n,t,e){const i=n[e],s=t[e];return e==="style"&&ie(i)&&ie(s)?!Ql(i,s):i!==s}function im({vnode:n,parent:t,suspense:e},i){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.suspense.vnode.el=s.el=i,n=s),s===n)(n=t.vnode).el=i,t=t.parent;else break}e&&e.activeBranch===n&&(e.vnode.el=i)}const bf={},Tf=()=>Object.create(bf),Af=n=>Object.getPrototypeOf(n)===bf;function sm(n,t,e,i=!1){const s={},r=Tf();n.propsDefaults=Object.create(null),wf(n,t,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);e?n.props=i?s:hp(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function rm(n,t,e,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=Zt(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const h=n.vnode.dynamicProps;for(let f=0;f<h.length;f++){let u=h[f];if(Fo(n.emitsOptions,u))continue;const d=t[u];if(l)if(Qt(r,u))d!==r[u]&&(r[u]=d,c=!0);else{const g=vn(u);s[g]=tl(l,a,g,d,n,!1)}else d!==r[u]&&(r[u]=d,c=!0)}}}else{wf(n,t,s,r)&&(c=!0);let h;for(const f in a)(!t||!Qt(t,f)&&((h=Wi(f))===f||!Qt(t,h)))&&(l?e&&(e[f]!==void 0||e[h]!==void 0)&&(s[f]=tl(l,a,f,void 0,n,!0)):delete s[f]);if(r!==a)for(const f in r)(!t||!Qt(t,f))&&(delete r[f],c=!0)}c&&Xn(n.attrs,"set","")}function wf(n,t,e,i){const[s,r]=n.propsOptions;let o=!1,a;if(t)for(let l in t){if(ks(l))continue;const c=t[l];let h;s&&Qt(s,h=vn(l))?!r||!r.includes(h)?e[h]=c:(a||(a={}))[h]=c:Fo(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=Zt(e),c=a||se;for(let h=0;h<r.length;h++){const f=r[h];e[f]=tl(s,l,f,c[f],n,!Qt(c,f))}}return o}function tl(n,t,e,i,s,r){const o=n[e];if(o!=null){const a=Qt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Gt(l)){const{propsDefaults:c}=s;if(e in c)i=c[e];else{const h=pr(s);i=c[e]=l.call(null,t),h()}}else i=l;s.ce&&s.ce._setProp(e,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Wi(e))&&(i=!0))}return i}const om=new WeakMap;function Cf(n,t,e=!1){const i=e?om:t.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!Gt(n)){const h=f=>{l=!0;const[u,d]=Cf(f,t,!0);Le(o,u),d&&a.push(...d)};!e&&t.mixins.length&&t.mixins.forEach(h),n.extends&&h(n.extends),n.mixins&&n.mixins.forEach(h)}if(!r&&!l)return ie(n)&&i.set(n,ps),ps;if(Vt(r))for(let h=0;h<r.length;h++){const f=vn(r[h]);tu(f)&&(o[f]=se)}else if(r)for(const h in r){const f=vn(h);if(tu(f)){const u=r[h],d=o[f]=Vt(u)||Gt(u)?{type:u}:Le({},u),g=d.type;let x=!1,p=!0;if(Vt(g))for(let m=0;m<g.length;++m){const w=g[m],y=Gt(w)&&w.name;if(y==="Boolean"){x=!0;break}else y==="String"&&(p=!1)}else x=Gt(g)&&g.name==="Boolean";d[0]=x,d[1]=p,(x||Qt(d,"default"))&&a.push(f)}}const c=[o,a];return ie(n)&&i.set(n,c),c}function tu(n){return n[0]!=="$"&&!ks(n)}const hc=n=>n==="_"||n==="_ctx"||n==="$stable",fc=n=>Vt(n)?n.map(An):[An(n)],am=(n,t,e)=>{if(t._n)return t;const i=Ep((...s)=>fc(t(...s)),e);return i._c=!1,i},Rf=(n,t,e)=>{const i=n._ctx;for(const s in n){if(hc(s))continue;const r=n[s];if(Gt(r))t[s]=am(s,r,i);else if(r!=null){const o=fc(r);t[s]=()=>o}}},Pf=(n,t)=>{const e=fc(t);n.slots.default=()=>e},Lf=(n,t,e)=>{for(const i in t)(e||!hc(i))&&(n[i]=t[i])},lm=(n,t,e)=>{const i=n.slots=Tf();if(n.vnode.shapeFlag&32){const s=t._;s?(Lf(i,t,e),e&&Bh(i,"_",s,!0)):Rf(t,i)}else t&&Pf(n,t)},cm=(n,t,e)=>{const{vnode:i,slots:s}=n;let r=!0,o=se;if(i.shapeFlag&32){const a=t._;a?e&&a===1?r=!1:Lf(s,t,e):(r=!t.$stable,Rf(t,s)),o=t}else t&&(Pf(n,t),o={default:1});if(r)for(const a in s)!hc(a)&&o[a]==null&&delete s[a]},We=pm;function um(n){return hm(n)}function hm(n,t){const e=Lo();e.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:h,parentNode:f,nextSibling:u,setScopeId:d=Pn,insertStaticContent:g}=n,x=(b,v,L,z=null,I=null,F=null,Z=void 0,Y=null,S=!!v.dynamicChildren)=>{if(b===v)return;b&&!Is(b,v)&&(z=ht(b),Bt(b,I,F,!0),b=null),v.patchFlag===-2&&(S=!1,v.dynamicChildren=null);const{type:_,ref:P,shapeFlag:N}=v;switch(_){case Bo:p(b,v,L,z);break;case Qn:m(b,v,L,z);break;case oa:b==null&&w(v,L,z,Z);break;case Ue:j(b,v,L,z,I,F,Z,Y,S);break;default:N&1?O(b,v,L,z,I,F,Z,Y,S):N&6?q(b,v,L,z,I,F,Z,Y,S):(N&64||N&128)&&_.process(b,v,L,z,I,F,Z,Y,S,Ot)}P!=null&&I?qs(P,b&&b.ref,F,v||b,!v):P==null&&b&&b.ref!=null&&qs(b.ref,null,F,b,!0)},p=(b,v,L,z)=>{if(b==null)i(v.el=a(v.children),L,z);else{const I=v.el=b.el;v.children!==b.children&&c(I,v.children)}},m=(b,v,L,z)=>{b==null?i(v.el=l(v.children||""),L,z):v.el=b.el},w=(b,v,L,z)=>{[b.el,b.anchor]=g(b.children,v,L,z,b.el,b.anchor)},y=({el:b,anchor:v},L,z)=>{let I;for(;b&&b!==v;)I=u(b),i(b,L,z),b=I;i(v,L,z)},E=({el:b,anchor:v})=>{let L;for(;b&&b!==v;)L=u(b),s(b),b=L;s(v)},O=(b,v,L,z,I,F,Z,Y,S)=>{if(v.type==="svg"?Z="svg":v.type==="math"&&(Z="mathml"),b==null)R(v,L,z,I,F,Z,Y,S);else{const _=b.el&&b.el._isVueCE?b.el:null;try{_&&_._beginPatch(),ot(b,v,I,F,Z,Y,S)}finally{_&&_._endPatch()}}},R=(b,v,L,z,I,F,Z,Y)=>{let S,_;const{props:P,shapeFlag:N,transition:k,dirs:G}=b;if(S=b.el=o(b.type,F,P&&P.is,P),N&8?h(S,b.children):N&16&&H(b.children,S,null,z,I,ra(b,F),Z,Y),G&&xi(b,null,z,"created"),C(S,b,b.scopeId,Z,z),P){for(const rt in P)rt!=="value"&&!ks(rt)&&r(S,rt,null,P[rt],F,z);"value"in P&&r(S,"value",null,P.value,F),(_=P.onVnodeBeforeMount)&&yn(_,z,b)}G&&xi(b,null,z,"beforeMount");const lt=fm(I,k);lt&&k.beforeEnter(S),i(S,v,L),((_=P&&P.onVnodeMounted)||lt||G)&&We(()=>{try{_&&yn(_,z,b),lt&&k.enter(S),G&&xi(b,null,z,"mounted")}finally{}},I)},C=(b,v,L,z,I)=>{if(L&&d(b,L),z)for(let F=0;F<z.length;F++)d(b,z[F]);if(I){let F=I.subTree;if(v===F||Nf(F.type)&&(F.ssContent===v||F.ssFallback===v)){const Z=I.vnode;C(b,Z,Z.scopeId,Z.slotScopeIds,I.parent)}}},H=(b,v,L,z,I,F,Z,Y,S=0)=>{for(let _=S;_<b.length;_++){const P=b[_]=Y?kn(b[_]):An(b[_]);x(null,P,v,L,z,I,F,Z,Y)}},ot=(b,v,L,z,I,F,Z)=>{const Y=v.el=b.el;let{patchFlag:S,dynamicChildren:_,dirs:P}=v;S|=b.patchFlag&16;const N=b.props||se,k=v.props||se;let G;if(L&&Mi(L,!1),(G=k.onVnodeBeforeUpdate)&&yn(G,L,v,b),P&&xi(v,b,L,"beforeUpdate"),L&&Mi(L,!0),_&&(!b.dynamicChildren||b.dynamicChildren.length!==_.length)&&(S=0,Z=!1,_=null),(N.innerHTML&&k.innerHTML==null||N.textContent&&k.textContent==null)&&h(Y,""),_?M(b.dynamicChildren,_,Y,L,z,ra(v,I),F):Z||X(b,v,Y,null,L,z,ra(v,I),F,!1),S>0){if(S&16)T(Y,N,k,L,I);else if(S&2&&N.class!==k.class&&r(Y,"class",null,k.class,I),S&4&&r(Y,"style",N.style,k.style,I),S&8){const lt=v.dynamicProps;for(let rt=0;rt<lt.length;rt++){const at=lt[rt],Pt=N[at],it=k[at];(it!==Pt||at==="value")&&r(Y,at,Pt,it,I,L)}}S&1&&b.children!==v.children&&h(Y,v.children)}else!Z&&_==null&&T(Y,N,k,L,I);((G=k.onVnodeUpdated)||P)&&We(()=>{G&&yn(G,L,v,b),P&&xi(v,b,L,"updated")},z)},M=(b,v,L,z,I,F,Z)=>{for(let Y=0;Y<v.length;Y++){const S=b[Y],_=v[Y],P=S.el&&(S.type===Ue||!Is(S,_)||S.shapeFlag&198)?f(S.el):L;x(S,_,P,null,z,I,F,Z,!0)}},T=(b,v,L,z,I)=>{if(v!==L){if(v!==se)for(const F in v)!ks(F)&&!(F in L)&&r(b,F,v[F],null,I,z);for(const F in L){if(ks(F))continue;const Z=L[F],Y=v[F];Z!==Y&&F!=="value"&&r(b,F,Y,Z,I,z)}"value"in L&&r(b,"value",v.value,L.value,I)}},j=(b,v,L,z,I,F,Z,Y,S)=>{const _=v.el=b?b.el:a(""),P=v.anchor=b?b.anchor:a("");let{patchFlag:N,dynamicChildren:k,slotScopeIds:G}=v;G&&(Y=Y?Y.concat(G):G),b==null?(i(_,L,z),i(P,L,z),H(v.children||[],L,P,I,F,Z,Y,S)):N>0&&N&64&&k&&b.dynamicChildren&&b.dynamicChildren.length===k.length?(M(b.dynamicChildren,k,L,I,F,Z,Y),(v.key!=null||I&&v===I.subTree)&&Df(b,v,!0)):X(b,v,L,P,I,F,Z,Y,S)},q=(b,v,L,z,I,F,Z,Y,S)=>{v.slotScopeIds=Y,b==null?v.shapeFlag&512?I.ctx.activate(v,L,z,Z,S):J(v,L,z,I,F,Z,S):nt(b,v,S)},J=(b,v,L,z,I,F,Z)=>{const Y=b.component=Sm(b,z,I);if(uc(b)&&(Y.ctx.renderer=Ot),Em(Y,!1,Z),Y.asyncDep){if(I&&I.registerDep(Y,W,Z),!b.el){const S=Y.subTree=$n(Qn);m(null,S,v,L),b.placeholder=S.el}}else W(Y,b,v,L,I,F,Z)},nt=(b,v,L)=>{const z=v.component=b.component;if(nm(b,v,L))if(z.asyncDep&&!z.asyncResolved){tt(z,v,L);return}else z.next=v,z.update();else v.el=b.el,z.vnode=v},W=(b,v,L,z,I,F,Z)=>{const Y=()=>{if(b.isMounted){let{next:N,bu:k,u:G,parent:lt,vnode:rt}=b;{const Ct=If(b);if(Ct){N&&(N.el=rt.el,tt(b,N,Z)),Ct.asyncDep.then(()=>{We(()=>{b.isUnmounted||_()},I)});return}}let at=N,Pt;Mi(b,!1),N?(N.el=rt.el,tt(b,N,Z)):N=rt,k&&eo(k),(Pt=N.props&&N.props.onVnodeBeforeUpdate)&&yn(Pt,lt,N,rt),Mi(b,!0);const it=Zc(b),pt=b.subTree;b.subTree=it,x(pt,it,f(pt.el),ht(pt),b,I,F),N.el=it.el,at===null&&im(b,it.el),G&&We(G,I),(Pt=N.props&&N.props.onVnodeUpdated)&&We(()=>yn(Pt,lt,N,rt),I)}else{let N;const{el:k,props:G}=v,{bm:lt,m:rt,parent:at,root:Pt,type:it}=b,pt=Ys(v);Mi(b,!1),lt&&eo(lt),!pt&&(N=G&&G.onVnodeBeforeMount)&&yn(N,at,v),Mi(b,!0);{Pt.ce&&Pt.ce._hasShadowRoot()&&Pt.ce._injectChildStyle(it,b.parent?b.parent.type:void 0);const Ct=b.subTree=Zc(b);x(null,Ct,L,z,b,I,F),v.el=Ct.el}if(rt&&We(rt,I),!pt&&(N=G&&G.onVnodeMounted)){const Ct=v;We(()=>yn(N,at,Ct),I)}(v.shapeFlag&256||at&&Ys(at.vnode)&&at.vnode.shapeFlag&256)&&b.a&&We(b.a,I),b.isMounted=!0,v=L=z=null}};b.scope.on();const S=b.effect=new kh(Y);b.scope.off();const _=b.update=S.run.bind(S),P=b.job=S.runIfDirty.bind(S);P.i=b,P.id=b.uid,S.scheduler=()=>lc(P),Mi(b,!0),_()},tt=(b,v,L)=>{v.component=b;const z=b.vnode.props;b.vnode=v,b.next=null,rm(b,v.props,z,L),cm(b,v.children,L),jn(),Wc(b),Jn()},X=(b,v,L,z,I,F,Z,Y,S=!1)=>{const _=b&&b.children,P=b?b.shapeFlag:0,N=v.children,{patchFlag:k,shapeFlag:G}=v;if(k>0){if(k&128){xt(_,N,L,z,I,F,Z,Y,S);return}else if(k&256){dt(_,N,L,z,I,F,Z,Y,S);return}}G&8?(P&16&&Mt(_,I,F),N!==_&&h(L,N)):P&16?G&16?xt(_,N,L,z,I,F,Z,Y,S):Mt(_,I,F,!0):(P&8&&h(L,""),G&16&&H(N,L,z,I,F,Z,Y,S))},dt=(b,v,L,z,I,F,Z,Y,S)=>{b=b||ps,v=v||ps;const _=b.length,P=v.length,N=Math.min(_,P);let k;for(k=0;k<N;k++){const G=v[k]=S?kn(v[k]):An(v[k]);x(b[k],G,L,null,I,F,Z,Y,S)}_>P?Mt(b,I,F,!0,!1,N):H(v,L,z,I,F,Z,Y,S,N)},xt=(b,v,L,z,I,F,Z,Y,S)=>{let _=0;const P=v.length;let N=b.length-1,k=P-1;for(;_<=N&&_<=k;){const G=b[_],lt=v[_]=S?kn(v[_]):An(v[_]);if(Is(G,lt))x(G,lt,L,null,I,F,Z,Y,S);else break;_++}for(;_<=N&&_<=k;){const G=b[N],lt=v[k]=S?kn(v[k]):An(v[k]);if(Is(G,lt))x(G,lt,L,null,I,F,Z,Y,S);else break;N--,k--}if(_>N){if(_<=k){const G=k+1,lt=G<P?v[G].el:z;for(;_<=k;)x(null,v[_]=S?kn(v[_]):An(v[_]),L,lt,I,F,Z,Y,S),_++}}else if(_>k)for(;_<=N;)Bt(b[_],I,F,!0),_++;else{const G=_,lt=_,rt=new Map;for(_=lt;_<=k;_++){const Ft=v[_]=S?kn(v[_]):An(v[_]);Ft.key!=null&&rt.set(Ft.key,_)}let at,Pt=0;const it=k-lt+1;let pt=!1,Ct=0;const Nt=new Array(it);for(_=0;_<it;_++)Nt[_]=0;for(_=G;_<=N;_++){const Ft=b[_];if(Pt>=it){Bt(Ft,I,F,!0);continue}let Dt;if(Ft.key!=null)Dt=rt.get(Ft.key);else for(at=lt;at<=k;at++)if(Nt[at-lt]===0&&Is(Ft,v[at])){Dt=at;break}Dt===void 0?Bt(Ft,I,F,!0):(Nt[Dt-lt]=_+1,Dt>=Ct?Ct=Dt:pt=!0,x(Ft,v[Dt],L,null,I,F,Z,Y,S),Pt++)}const Tt=pt?dm(Nt):ps;for(at=Tt.length-1,_=it-1;_>=0;_--){const Ft=lt+_,Dt=v[Ft],ee=v[Ft+1],U=Ft+1<P?ee.el||Uf(ee):z;Nt[_]===0?x(null,Dt,L,U,I,F,Z,Y,S):pt&&(at<0||_!==Tt[at]?mt(Dt,L,U,2):at--)}}},mt=(b,v,L,z,I=null)=>{const{el:F,type:Z,transition:Y,children:S,shapeFlag:_}=b;if(_&6){mt(b.component.subTree,v,L,z);return}if(_&128){b.suspense.move(v,L,z);return}if(_&64){Z.move(b,v,L,Ot);return}if(Z===Ue){i(F,v,L);for(let N=0;N<S.length;N++)mt(S[N],v,L,z);i(b.anchor,v,L);return}if(Z===oa){y(b,v,L);return}if(z!==2&&_&1&&Y)if(z===0)Y.persisted&&!F[ia]?i(F,v,L):(Y.beforeEnter(F),i(F,v,L),We(()=>Y.enter(F),I));else{const{leave:N,delayLeave:k,afterLeave:G}=Y,lt=()=>{b.ctx.isUnmounted?s(F):i(F,v,L)},rt=()=>{const at=F._isLeaving||!!F[ia];F._isLeaving&&F[ia](!0),Y.persisted&&!at?lt():N(F,()=>{lt(),G&&G()})};k?k(F,lt,rt):rt()}else i(F,v,L)},Bt=(b,v,L,z=!1,I=!1)=>{const{type:F,props:Z,ref:Y,children:S,dynamicChildren:_,shapeFlag:P,patchFlag:N,dirs:k,cacheIndex:G,memo:lt}=b;if(N===-2&&(I=!1),Y!=null&&(jn(),qs(Y,null,L,b,!0),Jn()),G!=null&&(v.renderCache[G]=void 0),P&256){v.ctx.deactivate(b);return}const rt=P&1&&k,at=!Ys(b);let Pt;if(at&&(Pt=Z&&Z.onVnodeBeforeUnmount)&&yn(Pt,v,b),P&6)ct(b.component,L,z);else{if(P&128){b.suspense.unmount(L,z);return}rt&&xi(b,null,v,"beforeUnmount"),P&64?b.type.remove(b,v,L,Ot,z):_&&!_.hasOnce&&(F!==Ue||N>0&&N&64)?Mt(_,v,L,!1,!0):(F===Ue&&N&384||!I&&P&16)&&Mt(S,v,L),z&&Yt(b)}const it=lt!=null&&G==null;(at&&(Pt=Z&&Z.onVnodeUnmounted)||rt||it)&&We(()=>{Pt&&yn(Pt,v,b),rt&&xi(b,null,v,"unmounted"),it&&(b.el=null)},L)},Yt=b=>{const{type:v,el:L,anchor:z,transition:I}=b;if(v===Ue){et(L,z);return}if(v===oa){E(b);return}const F=()=>{s(L),I&&!I.persisted&&I.afterLeave&&I.afterLeave()};if(b.shapeFlag&1&&I&&!I.persisted){const{leave:Z,delayLeave:Y}=I,S=()=>Z(L,F);Y?Y(b.el,F,S):S()}else F()},et=(b,v)=>{let L;for(;b!==v;)L=u(b),s(b),b=L;s(v)},ct=(b,v,L)=>{const{bum:z,scope:I,job:F,subTree:Z,um:Y,m:S,a:_}=b;eu(S),eu(_),z&&eo(z),I.stop(),F&&(F.flags|=8,Bt(Z,b,v,L)),Y&&We(Y,v),We(()=>{b.isUnmounted=!0},v)},Mt=(b,v,L,z=!1,I=!1,F=0)=>{for(let Z=F;Z<b.length;Z++)Bt(b[Z],v,L,z,I)},ht=b=>{if(b.shapeFlag&6)return ht(b.component.subTree);if(b.shapeFlag&128)return b.suspense.next();const v=u(b.anchor||b.el),L=v&&v[Rp];return L?u(L):v};let It=!1;const Ut=(b,v,L)=>{let z;b==null?v._vnode&&(Bt(v._vnode,null,null,!0),z=v._vnode.component):x(v._vnode||null,b,v,null,null,null,L),v._vnode=b,It||(It=!0,Wc(z),lf(),It=!1)},Ot={p:x,um:Bt,m:mt,r:Yt,mt:J,mc:H,pc:X,pbc:M,n:ht,o:n};return{render:Ut,hydrate:void 0,createApp:jp(Ut)}}function ra({type:n,props:t},e){return e==="svg"&&n==="foreignObject"||e==="mathml"&&n==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function Mi({effect:n,job:t},e){e?(n.flags|=32,t.flags|=4):(n.flags&=-33,t.flags&=-5)}function fm(n,t){return(!n||n&&!n.pendingBranch)&&t&&!t.persisted}function Df(n,t,e=!1){const i=n.children,s=t.children;if(Vt(i)&&Vt(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=kn(s[r]),a.el=o.el),!e&&a.patchFlag!==-2&&Df(o,a)),a.type===Bo&&(a.patchFlag===-1&&(a=s[r]=kn(a)),a.el=o.el),a.type===Qn&&!a.el&&(a.el=o.el)}}function dm(n){const t=n.slice(),e=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=e[e.length-1],n[s]<c){t[i]=s,e.push(i);continue}for(r=0,o=e.length-1;r<o;)a=r+o>>1,n[e[a]]<c?r=a+1:o=a;c<n[e[r]]&&(r>0&&(t[i]=e[r-1]),e[r]=i)}}for(r=e.length,o=e[r-1];r-- >0;)e[r]=o,o=t[o];return e}function If(n){const t=n.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:If(t)}function eu(n){if(n)for(let t=0;t<n.length;t++)n[t].flags|=8}function Uf(n){if(n.placeholder)return n.placeholder;const t=n.component;return t?Uf(t.subTree):null}const Nf=n=>n.__isSuspense;function pm(n,t){t&&t.pendingBranch?Vt(n)?t.effects.push(...n):t.effects.push(n):yp(n)}const Ue=Symbol.for("v-fgt"),Bo=Symbol.for("v-txt"),Qn=Symbol.for("v-cmt"),oa=Symbol.for("v-stc"),zi=[];let Qe=null;function Te(n=!1){zi.push(Qe=n?null:[])}function Of(){zi.pop(),Qe=zi[zi.length-1]||null}let ir=1;function nu(n,t=!1){ir+=n,n<0&&Qe&&t&&(Qe.hasOnce=!0)}function Ff(n){return n.dynamicChildren=ir>0?Qe||ps:null,Of(),ir>0&&Qe&&Qe.push(n),n}function Ce(n,t,e,i,s,r){return Ff(_t(n,t,e,i,s,r,!0))}function mm(n,t,e,i,s){return Ff($n(n,t,e,i,s,!0))}function Bf(n){return n?n.__v_isVNode===!0:!1}function Is(n,t){return n.type===t.type&&n.key===t.key}const zf=({key:n})=>n??null,io=({ref:n,ref_key:t,ref_for:e})=>(typeof n=="number"&&(n=""+n),n!=null?de(n)||Oe(n)||Gt(n)?{i:sn,r:n,k:t,f:!!e}:n:null);function _t(n,t=null,e=null,i=0,s=null,r=n===Ue?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&zf(t),ref:t&&io(t),scopeId:uf,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:sn};return a?(vo(l,e),r&128&&n.normalize(l)):e&&(l.shapeFlag|=de(e)?8:16),ir>0&&!o&&Qe&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Qe.push(l),l}const $n=gm;function gm(n,t=null,e=null,i=0,s=null,r=!1){if((!n||n===Gp)&&(n=Qn),Bf(n)){const a=Es(n,t,!0);return e&&vo(a,e),ir>0&&!r&&Qe&&(a.shapeFlag&6?Qe[Qe.indexOf(n)]=a:Qe.push(a)),a.patchFlag=-2,a}if(wm(n)&&(n=n.__vccOpts),t){t=_m(t);let{class:a,style:l}=t;a&&!de(a)&&(t.class=Do(a)),ie(l)&&(ac(l)&&!Vt(l)&&(l=Le({},l)),t.style=Ui(l))}const o=de(n)?1:Nf(n)?128:No(n)?64:ie(n)?4:Gt(n)?2:0;return _t(n,t,e,i,s,o,r,!0)}function _m(n){return n?ac(n)||Af(n)?Le({},n):n:null}function Es(n,t,e=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=t?vm(s||{},t):s,h={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&zf(c),ref:t&&t.ref?e&&r?Vt(r)?r.concat(io(t)):[r,io(t)]:io(t):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==Ue?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Es(n.ssContent),ssFallback:n.ssFallback&&Es(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&cc(h,l.clone(h)),h}function xe(n=" ",t=0){return $n(Bo,null,n,t)}function Si(n="",t=!1){return t?(Te(),mm(Qn,null,n)):$n(Qn,null,n)}function An(n){return n==null||typeof n=="boolean"?$n(Qn):Vt(n)?$n(Ue,null,n.slice()):Bf(n)?kn(n):$n(Bo,null,String(n))}function kn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Es(n)}function vo(n,t){let e=0;const{shapeFlag:i}=n;if(t==null)t=null;else if(Vt(t))e=16;else if(typeof t=="object")if(i&65){const s=t.default;s&&(s._c&&(s._d=!1),vo(n,s()),s._c&&(s._d=!0));return}else{e=32;const s=t._;!s&&!Af(t)?t._ctx=sn:s===3&&sn&&(sn.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else if(Gt(t)){if(i&65){vo(n,{default:t});return}t={default:t,_ctx:sn},e=32}else t=String(t),i&64?(e=16,t=[xe(t)]):e=8;n.children=t,n.shapeFlag|=e}function vm(...n){const t={};for(let e=0;e<n.length;e++){const i=n[e];for(const s in i)if(s==="class")t.class!==i.class&&(t.class=Do([t.class,i.class]));else if(s==="style")t.style=Ui([t.style,i.style]);else if(Co(s)){const r=t[s],o=i[s];o&&r!==o&&!(Vt(r)&&r.includes(o))?t[s]=r?[].concat(r,o):o:o==null&&r==null&&!Ro(s)&&(t[s]=o)}else s!==""&&(t[s]=i[s])}return t}function yn(n,t,e,i=null){Sn(n,t,7,[e,i])}const xm=Sf();let Mm=0;function Sm(n,t,e){const i=n.type,s=(t?t.appContext:n.appContext)||xm,r={uid:Mm++,vnode:n,type:i,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Gh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Cf(i,s),emitsOptions:yf(i,s),emit:null,emitted:null,propsDefaults:se,inheritAttrs:i.inheritAttrs,ctx:se,data:se,props:se,attrs:se,slots:se,refs:se,setupState:se,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=Zp.bind(null,r),n.ce&&n.ce(r),r}let Ve=null;const ym=()=>Ve||sn;let xo,sr;{const n=Lo(),t=(e,i)=>{let s;return(s=n[e])||(s=n[e]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};xo=t("__VUE_INSTANCE_SETTERS__",e=>Ve=e),sr=t("__VUE_SSR_SETTERS__",e=>rr=e)}const pr=n=>{const t=Ve;return xo(n),n.scope.on(),()=>{n.scope.off(),xo(t)}},iu=()=>{Ve&&Ve.scope.off(),xo(null)};function Hf(n){return n.vnode.shapeFlag&4}let rr=!1;function Em(n,t=!1,e=!1){t&&sr(t);const{props:i,children:s}=n.vnode,r=Hf(n);sm(n,i,r,t),lm(n,s,e||t);const o=r?bm(n,t):void 0;return t&&sr(!1),o}function bm(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,kp);const{setup:i}=e;if(i){jn();const s=n.setupContext=i.length>1?Am(n):null,r=pr(n),o=dr(i,n,0,[n.props,s]),a=Uh(o);if(Jn(),r(),(a||n.sp)&&!Ys(n)&&pf(n),a){if(o.then(iu,iu),t)return o.then(l=>{sr(!0);try{su(n,l,t)}finally{sr(!1)}}).catch(l=>{Uo(l,n,0)});n.asyncDep=o}else su(n,o)}else Vf(n)}function su(n,t,e){Gt(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:ie(t)&&(n.setupState=rf(t)),Vf(n)}function Vf(n,t,e){const i=n.type;n.render||(n.render=i.render||Pn);{const s=pr(n);jn();try{Wp(n)}finally{Jn(),s()}}}const Tm={get(n,t){return Ne(n,"get",""),n[t]}};function Am(n){const t=e=>{n.exposed=e||{}};return{attrs:new Proxy(n.attrs,Tm),slots:n.slots,emit:n.emit,expose:t}}function zo(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(rf(sf(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in Ks)return Ks[e](n)},has(t,e){return e in t||e in Ks}})):n.proxy}function wm(n){return Gt(n)&&"__vccOpts"in n}const Cm=(n,t)=>gp(n,t,rr),Rm="3.5.41";/**
* @vue/runtime-dom v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let el;const ru=typeof window<"u"&&window.trustedTypes;if(ru)try{el=ru.createPolicy("vue",{createHTML:n=>n})}catch{}const Gf=el?n=>el.createHTML(n):n=>n,Pm="http://www.w3.org/2000/svg",Lm="http://www.w3.org/1998/Math/MathML",Gn=typeof document<"u"?document:null,ou=Gn&&Gn.createElement("template"),Dm={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,i)=>{const s=t==="svg"?Gn.createElementNS(Pm,n):t==="mathml"?Gn.createElementNS(Lm,n):e?Gn.createElement(n,{is:e}):Gn.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>Gn.createTextNode(n),createComment:n=>Gn.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Gn.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,i,s,r){const o=e?e.previousSibling:t.lastChild;if(s&&(s===r||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),e),!(s===r||!(s=s.nextSibling)););else{ou.innerHTML=Gf(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=ou.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,e)}return[o?o.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},Im=Symbol("_vtc");function Um(n,t,e){const i=n[Im];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}const au=Symbol("_vod"),Nm=Symbol("_vsh"),Om=Symbol(""),Fm=/(?:^|;)\s*display\s*:/;function Bm(n,t,e){const i=n.style,s=de(e);let r=!1;if(e&&!s){if(t)if(de(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();e[a]==null&&Vs(i,a,"")}else for(const o in t)e[o]==null&&Vs(i,o,"");for(const o in e){o==="display"&&(r=!0);const a=e[o];a!=null?Hm(n,o,!de(t)&&t?t[o]:void 0,a)||Vs(i,o,a):Vs(i,o,"")}}else if(s){if(t!==e){const o=i[Om];o&&(e+=";"+o),i.cssText=e,r=Fm.test(e)}}else t&&n.removeAttribute("style");au in n&&(n[au]=r?i.display:"",n[Nm]&&(i.display="none"))}const lu=/\s*!important$/;function Vs(n,t,e){if(Vt(e))e.forEach(i=>Vs(n,t,i));else if(e==null&&(e=""),t.startsWith("--"))n.setProperty(t,e);else{const i=zm(n,t);lu.test(e)?n.setProperty(Wi(i),e.replace(lu,""),"important"):n[i]=e}}const cu=["Webkit","Moz","ms"],aa={};function zm(n,t){const e=aa[t];if(e)return e;let i=vn(t);if(i!=="filter"&&i in n)return aa[t]=i;i=Fh(i);for(let s=0;s<cu.length;s++){const r=cu[s]+i;if(r in n)return aa[t]=r}return t}function Hm(n,t,e,i){return n.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&de(i)&&e===i}const uu="http://www.w3.org/1999/xlink";function hu(n,t,e,i,s,r=Wd(t)){i&&t.startsWith("xlink:")?e==null?n.removeAttributeNS(uu,t.slice(6,t.length)):n.setAttributeNS(uu,t,e):e==null||r&&!zh(e)?n.removeAttribute(t):n.setAttribute(t,r?"":Ln(e)?String(e):e)}function fu(n,t,e,i,s){if(t==="innerHTML"||t==="textContent"){e!=null&&(n[t]=t==="innerHTML"?Gf(e):e);return}const r=n.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=e==null?n.type==="checkbox"?"on":"":String(e);(a!==l||!("_value"in n))&&(n.value=l),e==null&&n.removeAttribute(t),n._value=e;return}let o=!1;if(e===""||e==null){const a=typeof n[t];a==="boolean"?e=zh(e):e==null&&a==="string"?(e="",o=!0):a==="number"&&(e=0,o=!0)}try{n[t]=e}catch{}o&&n.removeAttribute(s||t)}function us(n,t,e,i){n.addEventListener(t,e,i)}function Vm(n,t,e,i){n.removeEventListener(t,e,i)}const du=Symbol("_vei");function Gm(n,t,e,i,s=null){const r=n[du]||(n[du]={}),o=r[t];if(i&&o)o.value=i;else{const[a,l]=Xm(t);if(i){const c=r[t]=Km(i,s);us(n,a,c,l)}else o&&(Vm(n,a,o,l),r[t]=void 0)}}const km=/(Once|Passive|Capture)$/,Wm=/^on:?(?:Once|Passive|Capture)$/;function Xm(n){let t,e;for(;(e=n.match(km))&&!Wm.test(n);)t||(t={}),n=n.slice(0,n.length-e[1].length),t[e[1].toLowerCase()]=!0;return[n[2]===":"?n.slice(3):Wi(n.slice(2)),t]}let la=0;const qm=Promise.resolve(),Ym=()=>la||(qm.then(()=>la=0),la=Date.now());function Km(n,t){const e=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=e.attached)return;const s=e.value;if(Vt(s)){const r=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{r.call(i),i._stopped=!0};const o=s.slice(),a=[i];for(let l=0;l<o.length&&!i._stopped;l++){const c=o[l];c&&Sn(c,t,5,a)}}else Sn(s,t,5,[i])};return e.value=n,e.attached=Ym(),e}const pu=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,$m=(n,t,e,i,s,r)=>{const o=s==="svg";t==="class"?Um(n,i,o):t==="style"?Bm(n,e,i):Co(t)?Ro(t)||Gm(n,t,e,i,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):jm(n,t,i,o))?(fu(n,t,i),!n.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&hu(n,t,i,o,r,t!=="value")):n._isVueCE&&(Jm(n,t)||n._def.__asyncLoader&&(/[A-Z]/.test(t)||!de(i)))?fu(n,vn(t),i,r,t):(t==="true-value"?n._trueValue=i:t==="false-value"&&(n._falseValue=i),hu(n,t,i,o))};function jm(n,t,e,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in n&&pu(t)&&Gt(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&n.tagName==="IFRAME"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return pu(t)&&de(e)?!1:t in n}function Jm(n,t){const e=n._def.props;if(!e)return!1;const i=vn(t);return Array.isArray(e)?e.some(s=>vn(s)===i):Object.keys(e).some(s=>vn(s)===i)}const mu=n=>{const t=n.props["onUpdate:modelValue"]||!1;return Vt(t)?e=>eo(t,e):t};function Zm(n){n.target.composing=!0}function gu(n){const t=n.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const br=Symbol("_assign"),Tr=Symbol("_initialValue");function ca(n,t,e){return t&&(n=n.trim()),e&&(n=Zl(n)),n}const Qm={created(n,{modifiers:{lazy:t,trim:e,number:i}},s){n.parentNode&&(n.type==="text"?n[Tr]=n.defaultValue.replace(/[\r\n]/g,""):n.type==="textarea"&&(n[Tr]=n.defaultValue.replace(/\r\n?/g,`
`))),n[br]=mu(s);const r=i||s.props&&s.props.type==="number";us(n,t?"change":"input",o=>{o.target.composing||n[br](ca(n.value,e,r))}),(e||r)&&us(n,"change",()=>{n.value=ca(n.value,e,r)}),t||(us(n,"compositionstart",Zm),us(n,"compositionend",gu),us(n,"change",gu))},mounted(n,{value:t,modifiers:{trim:e,number:i}}){const s=t??"",r=n[Tr];delete n[Tr],r!==void 0&&(n.type==="text"||n.type==="textarea")&&n.value!==r?n[br](ca(n.value,e,i)):n.value=s},beforeUpdate(n,{value:t,oldValue:e,modifiers:{lazy:i,trim:s,number:r}},o){if(n[br]=mu(o),n.composing)return;const a=(r||n.type==="number")&&!/^0\d/.test(n.value)?Zl(n.value):n.value,l=t??"";if(a===l)return;const c=n.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===n&&n.type!=="range"&&(i&&t===e||s&&n.value.trim()===l)||(n.value=l)}},tg=Le({patchProp:$m},Dm);let _u;function eg(){return _u||(_u=um(tg))}const ng=((...n)=>{const t=eg().createApp(...n),{mount:e}=t;return t.mount=i=>{const s=sg(i);if(!s)return;const r=t._component;!Gt(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=e(s,!1,ig(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t});function ig(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function sg(n){return de(n)?document.querySelector(n):n}/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const rg=Symbol();var vu;(function(n){n.direct="direct",n.patchObject="patch object",n.patchFunction="patch function"})(vu||(vu={}));function og(){const n=qd(!0),t=n.run(()=>Ri({}));let e=[],i=[];const s=sf({install(r){s._a=r,r.provide(rg,s),r.config.globalProperties.$pinia=s,i.forEach(o=>e.push(o)),i=[]},use(r){return this._a?e.push(r):i.push(r),this},_p:e,_a:null,_e:n,_s:new Map,state:t});return s}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const dc="169",ag=0,xu=1,lg=2,kf=1,Wf=2,Vn=3,mi=0,Xe=1,Ze=2,fi=0,vs=1,Mu=2,Su=3,yu=4,cg=5,Di=100,ug=101,hg=102,fg=103,dg=104,pg=200,mg=201,gg=202,_g=203,nl=204,il=205,vg=206,xg=207,Mg=208,Sg=209,yg=210,Eg=211,bg=212,Tg=213,Ag=214,sl=0,rl=1,ol=2,bs=3,al=4,ll=5,cl=6,ul=7,Xf=0,wg=1,Cg=2,di=0,Rg=1,Pg=2,Lg=3,Dg=4,Ig=5,Ug=6,Ng=7,qf=300,Ts=301,As=302,hl=303,fl=304,Ho=306,dl=1e3,Ni=1001,pl=1002,rn=1003,Og=1004,Ar=1005,mn=1006,ua=1007,Oi=1008,ti=1009,Yf=1010,Kf=1011,or=1012,pc=1013,Vi=1014,Yn=1015,mr=1016,mc=1017,gc=1018,ws=1020,$f=35902,jf=1021,Jf=1022,_n=1023,Zf=1024,Qf=1025,xs=1026,Cs=1027,td=1028,_c=1029,ed=1030,vc=1031,xc=1033,so=33776,ro=33777,oo=33778,ao=33779,ml=35840,gl=35841,_l=35842,vl=35843,xl=36196,Ml=37492,Sl=37496,yl=37808,El=37809,bl=37810,Tl=37811,Al=37812,wl=37813,Cl=37814,Rl=37815,Pl=37816,Ll=37817,Dl=37818,Il=37819,Ul=37820,Nl=37821,lo=36492,Ol=36494,Fl=36495,nd=36283,Bl=36284,zl=36285,Hl=36286,Fg=3200,Bg=3201,id=0,zg=1,hi="",bn="srgb",_i="srgb-linear",Mc="display-p3",Vo="display-p3-linear",Mo="linear",le="srgb",So="rec709",yo="p3",$i=7680,Eu=519,Hg=512,Vg=513,Gg=514,sd=515,kg=516,Wg=517,Xg=518,qg=519,bu=35044,Tu=35048,Au="300 es",Kn=2e3,Eo=2001;class Ps{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const De=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let wu=1234567;const $s=Math.PI/180,ar=180/Math.PI;function Xi(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(De[n&255]+De[n>>8&255]+De[n>>16&255]+De[n>>24&255]+"-"+De[t&255]+De[t>>8&255]+"-"+De[t>>16&15|64]+De[t>>24&255]+"-"+De[e&63|128]+De[e>>8&255]+"-"+De[e>>16&255]+De[e>>24&255]+De[i&255]+De[i>>8&255]+De[i>>16&255]+De[i>>24&255]).toLowerCase()}function Pe(n,t,e){return Math.max(t,Math.min(e,n))}function Sc(n,t){return(n%t+t)%t}function Yg(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function Kg(n,t,e){return n!==t?(e-n)/(t-n):0}function js(n,t,e){return(1-e)*n+e*t}function $g(n,t,e,i){return js(n,t,1-Math.exp(-e*i))}function jg(n,t=1){return t-Math.abs(Sc(n,t*2)-t)}function Jg(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Zg(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Qg(n,t){return n+Math.floor(Math.random()*(t-n+1))}function t_(n,t){return n+Math.random()*(t-n)}function e_(n){return n*(.5-Math.random())}function n_(n){n!==void 0&&(wu=n);let t=wu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function i_(n){return n*$s}function s_(n){return n*ar}function r_(n){return(n&n-1)===0&&n!==0}function o_(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function a_(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function l_(n,t,e,i,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+i)/2),h=o((t+i)/2),f=r((t-i)/2),u=o((t-i)/2),d=r((i-t)/2),g=o((i-t)/2);switch(s){case"XYX":n.set(a*h,l*f,l*u,a*c);break;case"YZY":n.set(l*u,a*h,l*f,a*c);break;case"ZXZ":n.set(l*f,l*u,a*h,a*c);break;case"XZX":n.set(a*h,l*g,l*d,a*c);break;case"YXY":n.set(l*d,a*h,l*g,a*c);break;case"ZYZ":n.set(l*g,l*d,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function hs(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Be(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const ha={DEG2RAD:$s,RAD2DEG:ar,generateUUID:Xi,clamp:Pe,euclideanModulo:Sc,mapLinear:Yg,inverseLerp:Kg,lerp:js,damp:$g,pingpong:jg,smoothstep:Jg,smootherstep:Zg,randInt:Qg,randFloat:t_,randFloatSpread:e_,seededRandom:n_,degToRad:i_,radToDeg:s_,isPowerOfTwo:r_,ceilPowerOfTwo:o_,floorPowerOfTwo:a_,setQuaternionFromProperEuler:l_,normalize:Be,denormalize:hs};class ft{constructor(t=0,e=0){ft.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Pe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Wt{constructor(t,e,i,s,r,o,a,l,c){Wt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],f=i[7],u=i[2],d=i[5],g=i[8],x=s[0],p=s[3],m=s[6],w=s[1],y=s[4],E=s[7],O=s[2],R=s[5],C=s[8];return r[0]=o*x+a*w+l*O,r[3]=o*p+a*y+l*R,r[6]=o*m+a*E+l*C,r[1]=c*x+h*w+f*O,r[4]=c*p+h*y+f*R,r[7]=c*m+h*E+f*C,r[2]=u*x+d*w+g*O,r[5]=u*p+d*y+g*R,r[8]=u*m+d*E+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=h*o-a*c,u=a*l-h*r,d=c*r-o*l,g=e*f+i*u+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=f*x,t[1]=(s*c-h*i)*x,t[2]=(a*i-s*o)*x,t[3]=u*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=d*x,t[7]=(i*l-c*e)*x,t[8]=(o*e-i*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(fa.makeScale(t,e)),this}rotate(t){return this.premultiply(fa.makeRotation(-t)),this}translate(t,e){return this.premultiply(fa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const fa=new Wt;function rd(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function bo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function c_(){const n=bo("canvas");return n.style.display="block",n}const Cu={};function co(n){n in Cu||(Cu[n]=!0,console.warn(n))}function u_(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function h_(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function f_(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Ru=new Wt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Pu=new Wt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Us={[_i]:{transfer:Mo,primaries:So,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[bn]:{transfer:le,primaries:So,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Vo]:{transfer:Mo,primaries:yo,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(Pu),fromReference:n=>n.applyMatrix3(Ru)},[Mc]:{transfer:le,primaries:yo,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(Pu),fromReference:n=>n.applyMatrix3(Ru).convertLinearToSRGB()}},d_=new Set([_i,Vo]),te={enabled:!0,_workingColorSpace:_i,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!d_.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;const i=Us[t].toReference,s=Us[e].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return Us[n].primaries},getTransfer:function(n){return n===hi?Mo:Us[n].transfer},getLuminanceCoefficients:function(n,t=this._workingColorSpace){return n.fromArray(Us[t].luminanceCoefficients)}};function Ms(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function da(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ji;class p_{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ji===void 0&&(ji=bo("canvas")),ji.width=t.width,ji.height=t.height;const i=ji.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=ji}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=bo("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ms(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Ms(e[i]/255)*255):e[i]=Ms(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let m_=0;class od{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:m_++}),this.uuid=Xi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(pa(s[o].image)):r.push(pa(s[o]))}else r=pa(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function pa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?p_.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let g_=0;class qe extends Ps{constructor(t=qe.DEFAULT_IMAGE,e=qe.DEFAULT_MAPPING,i=Ni,s=Ni,r=mn,o=Oi,a=_n,l=ti,c=qe.DEFAULT_ANISOTROPY,h=hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:g_++}),this.uuid=Xi(),this.name="",this.source=new od(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==qf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case dl:t.x=t.x-Math.floor(t.x);break;case Ni:t.x=t.x<0?0:1;break;case pl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case dl:t.y=t.y-Math.floor(t.y);break;case Ni:t.y=t.y<0?0:1;break;case pl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}qe.DEFAULT_IMAGE=null;qe.DEFAULT_MAPPING=qf;qe.DEFAULT_ANISOTROPY=1;class fe{constructor(t=0,e=0,i=0,s=1){fe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],g=l[9],x=l[2],p=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+x)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,E=(d+1)/2,O=(m+1)/2,R=(h+u)/4,C=(f+x)/4,H=(g+p)/4;return y>E&&y>O?y<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(y),s=R/i,r=C/i):E>O?E<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),i=R/s,r=H/s):O<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(O),i=C/r,s=H/r),this.set(i,s,r,e),this}let w=Math.sqrt((p-g)*(p-g)+(f-x)*(f-x)+(u-h)*(u-h));return Math.abs(w)<.001&&(w=1),this.x=(p-g)/w,this.y=(f-x)/w,this.z=(u-h)/w,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class __ extends Ps{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new fe(0,0,t,e),this.scissorTest=!1,this.viewport=new fe(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new qe(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new od(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gi extends __{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class ad extends qe{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=rn,this.minFilter=rn,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class v_ extends qe{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=rn,this.minFilter=rn,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gr{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],f=i[s+3];const u=r[o+0],d=r[o+1],g=r[o+2],x=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f;return}if(a===1){t[e+0]=u,t[e+1]=d,t[e+2]=g,t[e+3]=x;return}if(f!==x||l!==u||c!==d||h!==g){let p=1-a;const m=l*u+c*d+h*g+f*x,w=m>=0?1:-1,y=1-m*m;if(y>Number.EPSILON){const O=Math.sqrt(y),R=Math.atan2(O,m*w);p=Math.sin(p*R)/O,a=Math.sin(a*R)/O}const E=a*w;if(l=l*p+u*E,c=c*p+d*E,h=h*p+g*E,f=f*p+x*E,p===1-a){const O=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=O,c*=O,h*=O,f*=O}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],f=r[o],u=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+h*f+l*d-c*u,t[e+1]=l*g+h*u+c*f-a*d,t[e+2]=c*g+h*d+a*u-l*f,t[e+3]=h*g-a*f-l*u-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),f=a(r/2),u=l(i/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=u*h*f+c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f-u*d*g;break;case"YXZ":this._x=u*h*f+c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f+u*d*g;break;case"ZXY":this._x=u*h*f-c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f-u*d*g;break;case"ZYX":this._x=u*h*f-c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f+u*d*g;break;case"YZX":this._x=u*h*f+c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f-u*d*g;break;case"XZY":this._x=u*h*f-c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f+u*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],f=e[10],u=i+a+f;if(u>0){const d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(i>a&&i>f){const d=2*Math.sqrt(1+i-a-f);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-i-f);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+f-i-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Pe(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*i+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),f=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=o*f+this._w*u,this._x=i*f+this._x*u,this._y=s*f+this._y*u,this._z=r*f+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(t=0,e=0,i=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Lu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Lu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),h=2*(a*e-r*s),f=2*(r*i-o*e);return this.x=e+l*c+o*f-a*h,this.y=i+l*h+a*c-r*f,this.z=s+l*f+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return ma.copy(this).projectOnVector(t),this.sub(ma)}reflect(t){return this.sub(ma.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Pe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ma=new D,Lu=new gr;class _r{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(cn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(cn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=cn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,cn):cn.fromBufferAttribute(r,o),cn.applyMatrix4(t.matrixWorld),this.expandByPoint(cn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),wr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),wr.copy(i.boundingBox)),wr.applyMatrix4(t.matrixWorld),this.union(wr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,cn),cn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ns),Cr.subVectors(this.max,Ns),Ji.subVectors(t.a,Ns),Zi.subVectors(t.b,Ns),Qi.subVectors(t.c,Ns),ii.subVectors(Zi,Ji),si.subVectors(Qi,Zi),yi.subVectors(Ji,Qi);let e=[0,-ii.z,ii.y,0,-si.z,si.y,0,-yi.z,yi.y,ii.z,0,-ii.x,si.z,0,-si.x,yi.z,0,-yi.x,-ii.y,ii.x,0,-si.y,si.x,0,-yi.y,yi.x,0];return!ga(e,Ji,Zi,Qi,Cr)||(e=[1,0,0,0,1,0,0,0,1],!ga(e,Ji,Zi,Qi,Cr))?!1:(Rr.crossVectors(ii,si),e=[Rr.x,Rr.y,Rr.z],ga(e,Ji,Zi,Qi,Cr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,cn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(cn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(On[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),On[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),On[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),On[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),On[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),On[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),On[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),On[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(On),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const On=[new D,new D,new D,new D,new D,new D,new D,new D],cn=new D,wr=new _r,Ji=new D,Zi=new D,Qi=new D,ii=new D,si=new D,yi=new D,Ns=new D,Cr=new D,Rr=new D,Ei=new D;function ga(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ei.fromArray(n,r);const a=s.x*Math.abs(Ei.x)+s.y*Math.abs(Ei.y)+s.z*Math.abs(Ei.z),l=t.dot(Ei),c=e.dot(Ei),h=i.dot(Ei);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const x_=new _r,Os=new D,_a=new D;class vr{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):x_.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Os.subVectors(t,this.center);const e=Os.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Os,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(_a.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Os.copy(t.center).add(_a)),this.expandByPoint(Os.copy(t.center).sub(_a))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Fn=new D,va=new D,Pr=new D,ri=new D,xa=new D,Lr=new D,Ma=new D;class Go{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Fn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Fn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Fn.copy(this.origin).addScaledVector(this.direction,e),Fn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){va.copy(t).add(e).multiplyScalar(.5),Pr.copy(e).sub(t).normalize(),ri.copy(this.origin).sub(va);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Pr),a=ri.dot(this.direction),l=-ri.dot(Pr),c=ri.lengthSq(),h=Math.abs(1-o*o);let f,u,d,g;if(h>0)if(f=o*l-a,u=o*a-l,g=r*h,f>=0)if(u>=-g)if(u<=g){const x=1/h;f*=x,u*=x,d=f*(f+o*u+2*a)+u*(o*f+u+2*l)+c}else u=r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;else u<=-g?(f=Math.max(0,-(-o*r+a)),u=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c):u<=g?(f=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(f=Math.max(0,-(o*r+a)),u=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c);else u=o>0?-r:r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(va).addScaledVector(Pr,u),d}intersectSphere(t,e){Fn.subVectors(t.center,this.origin);const i=Fn.dot(this.direction),s=Fn.dot(Fn)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-u.z)*f,l=(t.max.z-u.z)*f):(a=(t.max.z-u.z)*f,l=(t.min.z-u.z)*f),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Fn)!==null}intersectTriangle(t,e,i,s,r){xa.subVectors(e,t),Lr.subVectors(i,t),Ma.crossVectors(xa,Lr);let o=this.direction.dot(Ma),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ri.subVectors(this.origin,t);const l=a*this.direction.dot(Lr.crossVectors(ri,Lr));if(l<0)return null;const c=a*this.direction.dot(xa.cross(ri));if(c<0||l+c>o)return null;const h=-a*ri.dot(Ma);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class oe{constructor(t,e,i,s,r,o,a,l,c,h,f,u,d,g,x,p){oe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,h,f,u,d,g,x,p)}set(t,e,i,s,r,o,a,l,c,h,f,u,d,g,x,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=f,m[14]=u,m[3]=d,m[7]=g,m[11]=x,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new oe().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/ts.setFromMatrixColumn(t,0).length(),r=1/ts.setFromMatrixColumn(t,1).length(),o=1/ts.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const u=o*h,d=o*f,g=a*h,x=a*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=d+g*c,e[5]=u-x*c,e[9]=-a*l,e[2]=x-u*c,e[6]=g+d*c,e[10]=o*l}else if(t.order==="YXZ"){const u=l*h,d=l*f,g=c*h,x=c*f;e[0]=u+x*a,e[4]=g*a-d,e[8]=o*c,e[1]=o*f,e[5]=o*h,e[9]=-a,e[2]=d*a-g,e[6]=x+u*a,e[10]=o*l}else if(t.order==="ZXY"){const u=l*h,d=l*f,g=c*h,x=c*f;e[0]=u-x*a,e[4]=-o*f,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*h,e[9]=x-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const u=o*h,d=o*f,g=a*h,x=a*f;e[0]=l*h,e[4]=g*c-d,e[8]=u*c+x,e[1]=l*f,e[5]=x*c+u,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const u=o*l,d=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=x-u*f,e[8]=g*f+d,e[1]=f,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*f+g,e[10]=u-x*f}else if(t.order==="XZY"){const u=o*l,d=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=u*f+x,e[5]=o*h,e[9]=d*f-g,e[2]=g*f-d,e[6]=a*h,e[10]=x*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(M_,t,S_)}lookAt(t,e,i){const s=this.elements;return $e.subVectors(t,e),$e.lengthSq()===0&&($e.z=1),$e.normalize(),oi.crossVectors(i,$e),oi.lengthSq()===0&&(Math.abs(i.z)===1?$e.x+=1e-4:$e.z+=1e-4,$e.normalize(),oi.crossVectors(i,$e)),oi.normalize(),Dr.crossVectors($e,oi),s[0]=oi.x,s[4]=Dr.x,s[8]=$e.x,s[1]=oi.y,s[5]=Dr.y,s[9]=$e.y,s[2]=oi.z,s[6]=Dr.z,s[10]=$e.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],f=i[5],u=i[9],d=i[13],g=i[2],x=i[6],p=i[10],m=i[14],w=i[3],y=i[7],E=i[11],O=i[15],R=s[0],C=s[4],H=s[8],ot=s[12],M=s[1],T=s[5],j=s[9],q=s[13],J=s[2],nt=s[6],W=s[10],tt=s[14],X=s[3],dt=s[7],xt=s[11],mt=s[15];return r[0]=o*R+a*M+l*J+c*X,r[4]=o*C+a*T+l*nt+c*dt,r[8]=o*H+a*j+l*W+c*xt,r[12]=o*ot+a*q+l*tt+c*mt,r[1]=h*R+f*M+u*J+d*X,r[5]=h*C+f*T+u*nt+d*dt,r[9]=h*H+f*j+u*W+d*xt,r[13]=h*ot+f*q+u*tt+d*mt,r[2]=g*R+x*M+p*J+m*X,r[6]=g*C+x*T+p*nt+m*dt,r[10]=g*H+x*j+p*W+m*xt,r[14]=g*ot+x*q+p*tt+m*mt,r[3]=w*R+y*M+E*J+O*X,r[7]=w*C+y*T+E*nt+O*dt,r[11]=w*H+y*j+E*W+O*xt,r[15]=w*ot+y*q+E*tt+O*mt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],f=t[6],u=t[10],d=t[14],g=t[3],x=t[7],p=t[11],m=t[15];return g*(+r*l*f-s*c*f-r*a*u+i*c*u+s*a*d-i*l*d)+x*(+e*l*d-e*c*u+r*o*u-s*o*d+s*c*h-r*l*h)+p*(+e*c*f-e*a*d-r*o*f+i*o*d+r*a*h-i*c*h)+m*(-s*a*h-e*l*f+e*a*u+s*o*f-i*o*u+i*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=t[9],u=t[10],d=t[11],g=t[12],x=t[13],p=t[14],m=t[15],w=f*p*c-x*u*c+x*l*d-a*p*d-f*l*m+a*u*m,y=g*u*c-h*p*c-g*l*d+o*p*d+h*l*m-o*u*m,E=h*x*c-g*f*c+g*a*d-o*x*d-h*a*m+o*f*m,O=g*f*l-h*x*l-g*a*u+o*x*u+h*a*p-o*f*p,R=e*w+i*y+s*E+r*O;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/R;return t[0]=w*C,t[1]=(x*u*r-f*p*r-x*s*d+i*p*d+f*s*m-i*u*m)*C,t[2]=(a*p*r-x*l*r+x*s*c-i*p*c-a*s*m+i*l*m)*C,t[3]=(f*l*r-a*u*r-f*s*c+i*u*c+a*s*d-i*l*d)*C,t[4]=y*C,t[5]=(h*p*r-g*u*r+g*s*d-e*p*d-h*s*m+e*u*m)*C,t[6]=(g*l*r-o*p*r-g*s*c+e*p*c+o*s*m-e*l*m)*C,t[7]=(o*u*r-h*l*r+h*s*c-e*u*c-o*s*d+e*l*d)*C,t[8]=E*C,t[9]=(g*f*r-h*x*r-g*i*d+e*x*d+h*i*m-e*f*m)*C,t[10]=(o*x*r-g*a*r+g*i*c-e*x*c-o*i*m+e*a*m)*C,t[11]=(h*a*r-o*f*r-h*i*c+e*f*c+o*i*d-e*a*d)*C,t[12]=O*C,t[13]=(h*x*s-g*f*s+g*i*u-e*x*u-h*i*p+e*f*p)*C,t[14]=(g*a*s-o*x*s-g*i*l+e*x*l+o*i*p-e*a*p)*C,t[15]=(o*f*s-h*a*s+h*i*l-e*f*l-o*i*u+e*a*u)*C,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,f=a+a,u=r*c,d=r*h,g=r*f,x=o*h,p=o*f,m=a*f,w=l*c,y=l*h,E=l*f,O=i.x,R=i.y,C=i.z;return s[0]=(1-(x+m))*O,s[1]=(d+E)*O,s[2]=(g-y)*O,s[3]=0,s[4]=(d-E)*R,s[5]=(1-(u+m))*R,s[6]=(p+w)*R,s[7]=0,s[8]=(g+y)*C,s[9]=(p-w)*C,s[10]=(1-(u+x))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=ts.set(s[0],s[1],s[2]).length();const o=ts.set(s[4],s[5],s[6]).length(),a=ts.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],un.copy(this);const c=1/r,h=1/o,f=1/a;return un.elements[0]*=c,un.elements[1]*=c,un.elements[2]*=c,un.elements[4]*=h,un.elements[5]*=h,un.elements[6]*=h,un.elements[8]*=f,un.elements[9]*=f,un.elements[10]*=f,e.setFromRotationMatrix(un),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=Kn){const l=this.elements,c=2*r/(e-t),h=2*r/(i-s),f=(e+t)/(e-t),u=(i+s)/(i-s);let d,g;if(a===Kn)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Eo)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Kn){const l=this.elements,c=1/(e-t),h=1/(i-s),f=1/(o-r),u=(e+t)*c,d=(i+s)*h;let g,x;if(a===Kn)g=(o+r)*f,x=-2*f;else if(a===Eo)g=r*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const ts=new D,un=new oe,M_=new D(0,0,0),S_=new D(1,1,1),oi=new D,Dr=new D,$e=new D,Du=new oe,Iu=new gr;class Dn{constructor(t=0,e=0,i=0,s=Dn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Pe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Pe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Pe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Pe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Pe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Pe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Du.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Du,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Iu.setFromEuler(this),this.setFromQuaternion(Iu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Dn.DEFAULT_ORDER="XYZ";class yc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let y_=0;const Uu=new D,es=new gr,Bn=new oe,Ir=new D,Fs=new D,E_=new D,b_=new gr,Nu=new D(1,0,0),Ou=new D(0,1,0),Fu=new D(0,0,1),Bu={type:"added"},T_={type:"removed"},ns={type:"childadded",child:null},Sa={type:"childremoved",child:null};class Me extends Ps{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:y_++}),this.uuid=Xi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Me.DEFAULT_UP.clone();const t=new D,e=new Dn,i=new gr,s=new D(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new oe},normalMatrix:{value:new Wt}}),this.matrix=new oe,this.matrixWorld=new oe,this.matrixAutoUpdate=Me.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return es.setFromAxisAngle(t,e),this.quaternion.multiply(es),this}rotateOnWorldAxis(t,e){return es.setFromAxisAngle(t,e),this.quaternion.premultiply(es),this}rotateX(t){return this.rotateOnAxis(Nu,t)}rotateY(t){return this.rotateOnAxis(Ou,t)}rotateZ(t){return this.rotateOnAxis(Fu,t)}translateOnAxis(t,e){return Uu.copy(t).applyQuaternion(this.quaternion),this.position.add(Uu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Nu,t)}translateY(t){return this.translateOnAxis(Ou,t)}translateZ(t){return this.translateOnAxis(Fu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Bn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Ir.copy(t):Ir.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Fs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bn.lookAt(Fs,Ir,this.up):Bn.lookAt(Ir,Fs,this.up),this.quaternion.setFromRotationMatrix(Bn),s&&(Bn.extractRotation(s.matrixWorld),es.setFromRotationMatrix(Bn),this.quaternion.premultiply(es.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Bu),ns.child=t,this.dispatchEvent(ns),ns.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(T_),Sa.child=t,this.dispatchEvent(Sa),Sa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Bn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Bn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Bn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Bu),ns.child=t,this.dispatchEvent(ns),ns.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,t,E_),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,b_,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),f=o(t.shapes),u=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),u.length>0&&(i.skeletons=u),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Me.DEFAULT_UP=new D(0,1,0);Me.DEFAULT_MATRIX_AUTO_UPDATE=!0;Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hn=new D,zn=new D,ya=new D,Hn=new D,is=new D,ss=new D,zu=new D,Ea=new D,ba=new D,Ta=new D,Aa=new fe,wa=new fe,Ca=new fe;class gn{constructor(t=new D,e=new D,i=new D){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),hn.subVectors(t,e),s.cross(hn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){hn.subVectors(s,e),zn.subVectors(i,e),ya.subVectors(t,e);const o=hn.dot(hn),a=hn.dot(zn),l=hn.dot(ya),c=zn.dot(zn),h=zn.dot(ya),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;const u=1/f,d=(c*l-a*h)*u,g=(o*h-a*l)*u;return r.set(1-d-g,g,d)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Hn)===null?!1:Hn.x>=0&&Hn.y>=0&&Hn.x+Hn.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,Hn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Hn.x),l.addScaledVector(o,Hn.y),l.addScaledVector(a,Hn.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return Aa.setScalar(0),wa.setScalar(0),Ca.setScalar(0),Aa.fromBufferAttribute(t,e),wa.fromBufferAttribute(t,i),Ca.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Aa,r.x),o.addScaledVector(wa,r.y),o.addScaledVector(Ca,r.z),o}static isFrontFacing(t,e,i,s){return hn.subVectors(i,e),zn.subVectors(t,e),hn.cross(zn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return hn.subVectors(this.c,this.b),zn.subVectors(this.a,this.b),hn.cross(zn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return gn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return gn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return gn.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return gn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return gn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;is.subVectors(s,i),ss.subVectors(r,i),Ea.subVectors(t,i);const l=is.dot(Ea),c=ss.dot(Ea);if(l<=0&&c<=0)return e.copy(i);ba.subVectors(t,s);const h=is.dot(ba),f=ss.dot(ba);if(h>=0&&f<=h)return e.copy(s);const u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(i).addScaledVector(is,o);Ta.subVectors(t,r);const d=is.dot(Ta),g=ss.dot(Ta);if(g>=0&&d<=g)return e.copy(r);const x=d*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(ss,a);const p=h*g-d*f;if(p<=0&&f-h>=0&&d-g>=0)return zu.subVectors(r,s),a=(f-h)/(f-h+(d-g)),e.copy(s).addScaledVector(zu,a);const m=1/(p+x+u);return o=x*m,a=u*m,e.copy(i).addScaledVector(is,o).addScaledVector(ss,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const ld={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ai={h:0,s:0,l:0},Ur={h:0,s:0,l:0};function Ra(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class qt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=bn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=te.workingColorSpace){return this.r=t,this.g=e,this.b=i,te.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=te.workingColorSpace){if(t=Sc(t,1),e=Pe(e,0,1),i=Pe(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Ra(o,r,t+1/3),this.g=Ra(o,r,t),this.b=Ra(o,r,t-1/3)}return te.toWorkingColorSpace(this,s),this}setStyle(t,e=bn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=bn){const i=ld[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ms(t.r),this.g=Ms(t.g),this.b=Ms(t.b),this}copyLinearToSRGB(t){return this.r=da(t.r),this.g=da(t.g),this.b=da(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=bn){return te.fromWorkingColorSpace(Ie.copy(this),t),Math.round(Pe(Ie.r*255,0,255))*65536+Math.round(Pe(Ie.g*255,0,255))*256+Math.round(Pe(Ie.b*255,0,255))}getHexString(t=bn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.fromWorkingColorSpace(Ie.copy(this),e);const i=Ie.r,s=Ie.g,r=Ie.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=te.workingColorSpace){return te.fromWorkingColorSpace(Ie.copy(this),e),t.r=Ie.r,t.g=Ie.g,t.b=Ie.b,t}getStyle(t=bn){te.fromWorkingColorSpace(Ie.copy(this),t);const e=Ie.r,i=Ie.g,s=Ie.b;return t!==bn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(ai),this.setHSL(ai.h+t,ai.s+e,ai.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(ai),t.getHSL(Ur);const i=js(ai.h,Ur.h,e),s=js(ai.s,Ur.s,e),r=js(ai.l,Ur.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ie=new qt;qt.NAMES=ld;let A_=0;class qi extends Ps{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:A_++}),this.uuid=Xi(),this.name="",this.type="Material",this.blending=vs,this.side=mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nl,this.blendDst=il,this.blendEquation=Di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qt(0,0,0),this.blendAlpha=0,this.depthFunc=bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Eu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$i,this.stencilZFail=$i,this.stencilZPass=$i,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==vs&&(i.blending=this.blending),this.side!==mi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==nl&&(i.blendSrc=this.blendSrc),this.blendDst!==il&&(i.blendDst=this.blendDst),this.blendEquation!==Di&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==bs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Eu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$i&&(i.stencilFail=this.stencilFail),this.stencilZFail!==$i&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==$i&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Hi extends qi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.combine=Xf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ve=new D,Nr=new ft;class an{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=bu,this.updateRanges=[],this.gpuType=Yn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Nr.fromBufferAttribute(this,e),Nr.applyMatrix3(t),this.setXY(e,Nr.x,Nr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix3(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix4(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ve.fromBufferAttribute(this,e),ve.applyNormalMatrix(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ve.fromBufferAttribute(this,e),ve.transformDirection(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=hs(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Be(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=hs(e,this.array)),e}setX(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=hs(e,this.array)),e}setY(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=hs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=hs(e,this.array)),e}setW(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Be(e,this.array),i=Be(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Be(e,this.array),i=Be(i,this.array),s=Be(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Be(e,this.array),i=Be(i,this.array),s=Be(s,this.array),r=Be(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==bu&&(t.usage=this.usage),t}}class cd extends an{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class ud extends an{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class ce extends an{constructor(t,e,i){super(new Float32Array(t),e,i)}}let w_=0;const en=new oe,Pa=new Me,rs=new D,je=new _r,Bs=new _r,be=new D;class Se extends Ps{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:w_++}),this.uuid=Xi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(rd(t)?ud:cd)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Wt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return en.makeRotationFromQuaternion(t),this.applyMatrix4(en),this}rotateX(t){return en.makeRotationX(t),this.applyMatrix4(en),this}rotateY(t){return en.makeRotationY(t),this.applyMatrix4(en),this}rotateZ(t){return en.makeRotationZ(t),this.applyMatrix4(en),this}translate(t,e,i){return en.makeTranslation(t,e,i),this.applyMatrix4(en),this}scale(t,e,i){return en.makeScale(t,e,i),this.applyMatrix4(en),this}lookAt(t){return Pa.lookAt(t),Pa.updateMatrix(),this.applyMatrix4(Pa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rs).negate(),this.translate(rs.x,rs.y,rs.z),this}setFromPoints(t){const e=[];for(let i=0,s=t.length;i<s;i++){const r=t[i];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ce(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _r);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];je.setFromBufferAttribute(r),this.morphTargetsRelative?(be.addVectors(this.boundingBox.min,je.min),this.boundingBox.expandByPoint(be),be.addVectors(this.boundingBox.max,je.max),this.boundingBox.expandByPoint(be)):(this.boundingBox.expandByPoint(je.min),this.boundingBox.expandByPoint(je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){const i=this.boundingSphere.center;if(je.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Bs.setFromBufferAttribute(a),this.morphTargetsRelative?(be.addVectors(je.min,Bs.min),je.expandByPoint(be),be.addVectors(je.max,Bs.max),je.expandByPoint(be)):(je.expandByPoint(Bs.min),je.expandByPoint(Bs.max))}je.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)be.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(be));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)be.fromBufferAttribute(a,c),l&&(rs.fromBufferAttribute(t,c),be.add(rs)),s=Math.max(s,i.distanceToSquared(be))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new an(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let H=0;H<i.count;H++)a[H]=new D,l[H]=new D;const c=new D,h=new D,f=new D,u=new ft,d=new ft,g=new ft,x=new D,p=new D;function m(H,ot,M){c.fromBufferAttribute(i,H),h.fromBufferAttribute(i,ot),f.fromBufferAttribute(i,M),u.fromBufferAttribute(r,H),d.fromBufferAttribute(r,ot),g.fromBufferAttribute(r,M),h.sub(c),f.sub(c),d.sub(u),g.sub(u);const T=1/(d.x*g.y-g.x*d.y);isFinite(T)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(T),p.copy(f).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(T),a[H].add(x),a[ot].add(x),a[M].add(x),l[H].add(p),l[ot].add(p),l[M].add(p))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let H=0,ot=w.length;H<ot;++H){const M=w[H],T=M.start,j=M.count;for(let q=T,J=T+j;q<J;q+=3)m(t.getX(q+0),t.getX(q+1),t.getX(q+2))}const y=new D,E=new D,O=new D,R=new D;function C(H){O.fromBufferAttribute(s,H),R.copy(O);const ot=a[H];y.copy(ot),y.sub(O.multiplyScalar(O.dot(ot))).normalize(),E.crossVectors(R,ot);const T=E.dot(l[H])<0?-1:1;o.setXYZW(H,y.x,y.y,y.z,T)}for(let H=0,ot=w.length;H<ot;++H){const M=w[H],T=M.start,j=M.count;for(let q=T,J=T+j;q<J;q+=3)C(t.getX(q+0)),C(t.getX(q+1)),C(t.getX(q+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new an(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,d=i.count;u<d;u++)i.setXYZ(u,0,0,0);const s=new D,r=new D,o=new D,a=new D,l=new D,c=new D,h=new D,f=new D;if(t)for(let u=0,d=t.count;u<d;u+=3){const g=t.getX(u+0),x=t.getX(u+1),p=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,p),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,p),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,d=e.count;u<d;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)be.fromBufferAttribute(t,e),be.normalize(),t.setXYZ(e,be.x,be.y,be.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,f=a.normalized,u=new c.constructor(l.length*h);let d=0,g=0;for(let x=0,p=l.length;x<p;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*h;for(let m=0;m<h;m++)u[g++]=c[d++]}return new an(u,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Se,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,i);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,f=c.length;h<f;h++){const u=c[h],d=t(u,i);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){const d=c[f];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],f=r[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Hu=new oe,bi=new Go,Or=new vr,Vu=new D,Fr=new D,Br=new D,zr=new D,La=new D,Hr=new D,Gu=new D,Vr=new D;class ge extends Me{constructor(t=new Se,e=new Hi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Hr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],f=r[l];h!==0&&(La.fromBufferAttribute(f,t),o?Hr.addScaledVector(La,h):Hr.addScaledVector(La.sub(e),h))}e.add(Hr)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Or.copy(i.boundingSphere),Or.applyMatrix4(r),bi.copy(t.ray).recast(t.near),!(Or.containsPoint(bi.origin)===!1&&(bi.intersectSphere(Or,Vu)===null||bi.origin.distanceToSquared(Vu)>(t.far-t.near)**2))&&(Hu.copy(r).invert(),bi.copy(t.ray).applyMatrix4(Hu),!(i.boundingBox!==null&&bi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,bi)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=u.length;g<x;g++){const p=u[g],m=o[p.materialIndex],w=Math.max(p.start,d.start),y=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let E=w,O=y;E<O;E+=3){const R=a.getX(E),C=a.getX(E+1),H=a.getX(E+2);s=Gr(this,m,t,i,c,h,f,R,C,H),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let p=g,m=x;p<m;p+=3){const w=a.getX(p),y=a.getX(p+1),E=a.getX(p+2);s=Gr(this,o,t,i,c,h,f,w,y,E),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=u.length;g<x;g++){const p=u[g],m=o[p.materialIndex],w=Math.max(p.start,d.start),y=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let E=w,O=y;E<O;E+=3){const R=E,C=E+1,H=E+2;s=Gr(this,m,t,i,c,h,f,R,C,H),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let p=g,m=x;p<m;p+=3){const w=p,y=p+1,E=p+2;s=Gr(this,o,t,i,c,h,f,w,y,E),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function C_(n,t,e,i,s,r,o,a){let l;if(t.side===Xe?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===mi,a),l===null)return null;Vr.copy(a),Vr.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Vr);return c<e.near||c>e.far?null:{distance:c,point:Vr.clone(),object:n}}function Gr(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,Fr),n.getVertexPosition(l,Br),n.getVertexPosition(c,zr);const h=C_(n,t,e,i,Fr,Br,zr,Gu);if(h){const f=new D;gn.getBarycoord(Gu,Fr,Br,zr,f),s&&(h.uv=gn.getInterpolatedAttribute(s,a,l,c,f,new ft)),r&&(h.uv1=gn.getInterpolatedAttribute(r,a,l,c,f,new ft)),o&&(h.normal=gn.getInterpolatedAttribute(o,a,l,c,f,new D),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new D,materialIndex:0};gn.getNormal(Fr,Br,zr,u.normal),h.face=u,h.barycoord=f}return h}class nn extends Se{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],f=[];let u=0,d=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ce(c,3)),this.setAttribute("normal",new ce(h,3)),this.setAttribute("uv",new ce(f,2));function g(x,p,m,w,y,E,O,R,C,H,ot){const M=E/C,T=O/H,j=E/2,q=O/2,J=R/2,nt=C+1,W=H+1;let tt=0,X=0;const dt=new D;for(let xt=0;xt<W;xt++){const mt=xt*T-q;for(let Bt=0;Bt<nt;Bt++){const Yt=Bt*M-j;dt[x]=Yt*w,dt[p]=mt*y,dt[m]=J,c.push(dt.x,dt.y,dt.z),dt[x]=0,dt[p]=0,dt[m]=R>0?1:-1,h.push(dt.x,dt.y,dt.z),f.push(Bt/C),f.push(1-xt/H),tt+=1}}for(let xt=0;xt<H;xt++)for(let mt=0;mt<C;mt++){const Bt=u+mt+nt*xt,Yt=u+mt+nt*(xt+1),et=u+(mt+1)+nt*(xt+1),ct=u+(mt+1)+nt*xt;l.push(Bt,Yt,ct),l.push(Yt,et,ct),X+=6}a.addGroup(d,X,ot),d+=X,u+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Rs(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function ze(n){const t={};for(let e=0;e<n.length;e++){const i=Rs(n[e]);for(const s in i)t[s]=i[s]}return t}function R_(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function hd(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}const P_={clone:Rs,merge:ze};var L_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,D_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gi extends qi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=L_,this.fragmentShader=D_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Rs(t.uniforms),this.uniformsGroups=R_(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class fd extends Me{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oe,this.projectionMatrix=new oe,this.projectionMatrixInverse=new oe,this.coordinateSystem=Kn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const li=new D,ku=new ft,Wu=new ft;class dn extends fd{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ar*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan($s*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ar*2*Math.atan(Math.tan($s*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(li.x,li.y).multiplyScalar(-t/li.z),li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(li.x,li.y).multiplyScalar(-t/li.z)}getViewSize(t,e){return this.getViewBounds(t,ku,Wu),e.subVectors(Wu,ku)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan($s*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const os=-90,as=1;class I_ extends Me{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new dn(os,as,t,e);s.layers=this.layers,this.add(s);const r=new dn(os,as,t,e);r.layers=this.layers,this.add(r);const o=new dn(os,as,t,e);o.layers=this.layers,this.add(o);const a=new dn(os,as,t,e);a.layers=this.layers,this.add(a);const l=new dn(os,as,t,e);l.layers=this.layers,this.add(l);const c=new dn(os,as,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Kn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Eo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(f,u,d),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class dd extends qe{constructor(t,e,i,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Ts,super(t,e,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class U_ extends Gi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new dd(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:mn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new nn(5,5,5),r=new gi({name:"CubemapFromEquirect",uniforms:Rs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Xe,blending:fi});r.uniforms.tEquirect.value=e;const o=new ge(s,r),a=e.minFilter;return e.minFilter===Oi&&(e.minFilter=mn),new I_(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}const Da=new D,N_=new D,O_=new Wt;class ui{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=Da.subVectors(i,e).cross(N_.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Da),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||O_.getNormalMatrix(t),s=this.coplanarPoint(Da).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ti=new vr,kr=new D;class Ec{constructor(t=new ui,e=new ui,i=new ui,s=new ui,r=new ui,o=new ui){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Kn){const i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],f=s[6],u=s[7],d=s[8],g=s[9],x=s[10],p=s[11],m=s[12],w=s[13],y=s[14],E=s[15];if(i[0].setComponents(l-r,u-c,p-d,E-m).normalize(),i[1].setComponents(l+r,u+c,p+d,E+m).normalize(),i[2].setComponents(l+o,u+h,p+g,E+w).normalize(),i[3].setComponents(l-o,u-h,p-g,E-w).normalize(),i[4].setComponents(l-a,u-f,p-x,E-y).normalize(),e===Kn)i[5].setComponents(l+a,u+f,p+x,E+y).normalize();else if(e===Eo)i[5].setComponents(a,f,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ti.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ti.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ti)}intersectsSprite(t){return Ti.center.set(0,0,0),Ti.radius=.7071067811865476,Ti.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ti)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(kr.x=s.normal.x>0?t.max.x:t.min.x,kr.y=s.normal.y>0?t.max.y:t.min.y,kr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(kr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function pd(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function F_(n){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,f=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const h=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,h);else{f.sort((d,g)=>d.start-g.start);let u=0;for(let d=1;d<f.length;d++){const g=f[u],x=f[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++u,f[u]=x)}f.length=u+1;for(let d=0,g=f.length;d<g;d++){const x=f[d];n.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class ko extends Se{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,f=t/a,u=e/l,d=[],g=[],x=[],p=[];for(let m=0;m<h;m++){const w=m*u-o;for(let y=0;y<c;y++){const E=y*f-r;g.push(E,-w,0),x.push(0,0,1),p.push(y/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let w=0;w<a;w++){const y=w+c*m,E=w+c*(m+1),O=w+1+c*(m+1),R=w+1+c*m;d.push(y,E,R),d.push(E,O,R)}this.setIndex(d),this.setAttribute("position",new ce(g,3)),this.setAttribute("normal",new ce(x,3)),this.setAttribute("uv",new ce(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ko(t.width,t.height,t.widthSegments,t.heightSegments)}}var B_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,z_=`#ifdef USE_ALPHAHASH
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
#endif`,H_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,V_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,G_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,k_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,W_=`#ifdef USE_AOMAP
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
#endif`,X_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,q_=`#ifdef USE_BATCHING
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
#endif`,Y_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,K_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,j_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,J_=`#ifdef USE_IRIDESCENCE
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
#endif`,Z_=`#ifdef USE_BUMPMAP
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
#endif`,Q_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,t0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,e0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,n0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,i0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,s0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,r0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,o0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,a0=`#define PI 3.141592653589793
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
} // validated`,l0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,c0=`vec3 transformedNormal = objectNormal;
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
#endif`,u0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,h0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,f0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,d0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,p0="gl_FragColor = linearToOutputTexel( gl_FragColor );",m0=`
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
}`,g0=`#ifdef USE_ENVMAP
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
#endif`,_0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,v0=`#ifdef USE_ENVMAP
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
#endif`,x0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,M0=`#ifdef USE_ENVMAP
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
#endif`,S0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,y0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,E0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,b0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,T0=`#ifdef USE_GRADIENTMAP
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
}`,A0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,w0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,C0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,R0=`uniform bool receiveShadow;
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
#endif`,P0=`#ifdef USE_ENVMAP
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
#endif`,L0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,D0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,I0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,U0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,N0=`PhysicalMaterial material;
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
#endif`,O0=`struct PhysicalMaterial {
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
}`,F0=`
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
#endif`,B0=`#if defined( RE_IndirectDiffuse )
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
#endif`,z0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,H0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,V0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,G0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,k0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,W0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,X0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,q0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Y0=`#if defined( USE_POINTS_UV )
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
#endif`,K0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,j0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,J0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Z0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Q0=`#ifdef USE_MORPHTARGETS
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
#endif`,tv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ev=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,nv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,iv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ov=`#ifdef USE_NORMALMAP
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
#endif`,av=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,uv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,dv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_v=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Mv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Sv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,yv=`float getShadowMask() {
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
}`,Ev=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bv=`#ifdef USE_SKINNING
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
#endif`,Tv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Av=`#ifdef USE_SKINNING
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
#endif`,wv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Cv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Rv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Pv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Lv=`#ifdef USE_TRANSMISSION
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
#endif`,Dv=`#ifdef USE_TRANSMISSION
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
#endif`,Iv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Uv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ov=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Fv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Bv=`uniform sampler2D t2D;
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
}`,zv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Vv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kv=`#include <common>
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
}`,Wv=`#if DEPTH_PACKING == 3200
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
}`,Xv=`#define DISTANCE
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
}`,qv=`#define DISTANCE
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
}`,Yv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Kv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$v=`uniform float scale;
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
}`,jv=`uniform vec3 diffuse;
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
}`,Jv=`#include <common>
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
}`,Zv=`uniform vec3 diffuse;
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
}`,Qv=`#define LAMBERT
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
}`,tx=`#define LAMBERT
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
}`,ex=`#define MATCAP
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
}`,nx=`#define MATCAP
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
}`,ix=`#define NORMAL
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
}`,sx=`#define NORMAL
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
}`,rx=`#define PHONG
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
}`,ox=`#define PHONG
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
}`,ax=`#define STANDARD
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
}`,lx=`#define STANDARD
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
}`,cx=`#define TOON
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
}`,ux=`#define TOON
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
}`,hx=`uniform float size;
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
}`,fx=`uniform vec3 diffuse;
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
}`,dx=`#include <common>
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
}`,px=`uniform vec3 color;
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
}`,mx=`uniform float rotation;
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
}`,gx=`uniform vec3 diffuse;
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
}`,kt={alphahash_fragment:B_,alphahash_pars_fragment:z_,alphamap_fragment:H_,alphamap_pars_fragment:V_,alphatest_fragment:G_,alphatest_pars_fragment:k_,aomap_fragment:W_,aomap_pars_fragment:X_,batching_pars_vertex:q_,batching_vertex:Y_,begin_vertex:K_,beginnormal_vertex:$_,bsdfs:j_,iridescence_fragment:J_,bumpmap_pars_fragment:Z_,clipping_planes_fragment:Q_,clipping_planes_pars_fragment:t0,clipping_planes_pars_vertex:e0,clipping_planes_vertex:n0,color_fragment:i0,color_pars_fragment:s0,color_pars_vertex:r0,color_vertex:o0,common:a0,cube_uv_reflection_fragment:l0,defaultnormal_vertex:c0,displacementmap_pars_vertex:u0,displacementmap_vertex:h0,emissivemap_fragment:f0,emissivemap_pars_fragment:d0,colorspace_fragment:p0,colorspace_pars_fragment:m0,envmap_fragment:g0,envmap_common_pars_fragment:_0,envmap_pars_fragment:v0,envmap_pars_vertex:x0,envmap_physical_pars_fragment:P0,envmap_vertex:M0,fog_vertex:S0,fog_pars_vertex:y0,fog_fragment:E0,fog_pars_fragment:b0,gradientmap_pars_fragment:T0,lightmap_pars_fragment:A0,lights_lambert_fragment:w0,lights_lambert_pars_fragment:C0,lights_pars_begin:R0,lights_toon_fragment:L0,lights_toon_pars_fragment:D0,lights_phong_fragment:I0,lights_phong_pars_fragment:U0,lights_physical_fragment:N0,lights_physical_pars_fragment:O0,lights_fragment_begin:F0,lights_fragment_maps:B0,lights_fragment_end:z0,logdepthbuf_fragment:H0,logdepthbuf_pars_fragment:V0,logdepthbuf_pars_vertex:G0,logdepthbuf_vertex:k0,map_fragment:W0,map_pars_fragment:X0,map_particle_fragment:q0,map_particle_pars_fragment:Y0,metalnessmap_fragment:K0,metalnessmap_pars_fragment:$0,morphinstance_vertex:j0,morphcolor_vertex:J0,morphnormal_vertex:Z0,morphtarget_pars_vertex:Q0,morphtarget_vertex:tv,normal_fragment_begin:ev,normal_fragment_maps:nv,normal_pars_fragment:iv,normal_pars_vertex:sv,normal_vertex:rv,normalmap_pars_fragment:ov,clearcoat_normal_fragment_begin:av,clearcoat_normal_fragment_maps:lv,clearcoat_pars_fragment:cv,iridescence_pars_fragment:uv,opaque_fragment:hv,packing:fv,premultiplied_alpha_fragment:dv,project_vertex:pv,dithering_fragment:mv,dithering_pars_fragment:gv,roughnessmap_fragment:_v,roughnessmap_pars_fragment:vv,shadowmap_pars_fragment:xv,shadowmap_pars_vertex:Mv,shadowmap_vertex:Sv,shadowmask_pars_fragment:yv,skinbase_vertex:Ev,skinning_pars_vertex:bv,skinning_vertex:Tv,skinnormal_vertex:Av,specularmap_fragment:wv,specularmap_pars_fragment:Cv,tonemapping_fragment:Rv,tonemapping_pars_fragment:Pv,transmission_fragment:Lv,transmission_pars_fragment:Dv,uv_pars_fragment:Iv,uv_pars_vertex:Uv,uv_vertex:Nv,worldpos_vertex:Ov,background_vert:Fv,background_frag:Bv,backgroundCube_vert:zv,backgroundCube_frag:Hv,cube_vert:Vv,cube_frag:Gv,depth_vert:kv,depth_frag:Wv,distanceRGBA_vert:Xv,distanceRGBA_frag:qv,equirect_vert:Yv,equirect_frag:Kv,linedashed_vert:$v,linedashed_frag:jv,meshbasic_vert:Jv,meshbasic_frag:Zv,meshlambert_vert:Qv,meshlambert_frag:tx,meshmatcap_vert:ex,meshmatcap_frag:nx,meshnormal_vert:ix,meshnormal_frag:sx,meshphong_vert:rx,meshphong_frag:ox,meshphysical_vert:ax,meshphysical_frag:lx,meshtoon_vert:cx,meshtoon_frag:ux,points_vert:hx,points_frag:fx,shadow_vert:dx,shadow_frag:px,sprite_vert:mx,sprite_frag:gx},vt={common:{diffuse:{value:new qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Wt}},envmap:{envMap:{value:null},envMapRotation:{value:new Wt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Wt},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new qt(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}}},wn={basic:{uniforms:ze([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.fog]),vertexShader:kt.meshbasic_vert,fragmentShader:kt.meshbasic_frag},lambert:{uniforms:ze([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new qt(0)}}]),vertexShader:kt.meshlambert_vert,fragmentShader:kt.meshlambert_frag},phong:{uniforms:ze([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new qt(0)},specular:{value:new qt(1118481)},shininess:{value:30}}]),vertexShader:kt.meshphong_vert,fragmentShader:kt.meshphong_frag},standard:{uniforms:ze([vt.common,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.roughnessmap,vt.metalnessmap,vt.fog,vt.lights,{emissive:{value:new qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag},toon:{uniforms:ze([vt.common,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.gradientmap,vt.fog,vt.lights,{emissive:{value:new qt(0)}}]),vertexShader:kt.meshtoon_vert,fragmentShader:kt.meshtoon_frag},matcap:{uniforms:ze([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,{matcap:{value:null}}]),vertexShader:kt.meshmatcap_vert,fragmentShader:kt.meshmatcap_frag},points:{uniforms:ze([vt.points,vt.fog]),vertexShader:kt.points_vert,fragmentShader:kt.points_frag},dashed:{uniforms:ze([vt.common,vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:kt.linedashed_vert,fragmentShader:kt.linedashed_frag},depth:{uniforms:ze([vt.common,vt.displacementmap]),vertexShader:kt.depth_vert,fragmentShader:kt.depth_frag},normal:{uniforms:ze([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,{opacity:{value:1}}]),vertexShader:kt.meshnormal_vert,fragmentShader:kt.meshnormal_frag},sprite:{uniforms:ze([vt.sprite,vt.fog]),vertexShader:kt.sprite_vert,fragmentShader:kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:kt.background_vert,fragmentShader:kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Wt}},vertexShader:kt.backgroundCube_vert,fragmentShader:kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:kt.cube_vert,fragmentShader:kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:kt.equirect_vert,fragmentShader:kt.equirect_frag},distanceRGBA:{uniforms:ze([vt.common,vt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:kt.distanceRGBA_vert,fragmentShader:kt.distanceRGBA_frag},shadow:{uniforms:ze([vt.lights,vt.fog,{color:{value:new qt(0)},opacity:{value:1}}]),vertexShader:kt.shadow_vert,fragmentShader:kt.shadow_frag}};wn.physical={uniforms:ze([wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Wt},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Wt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Wt},sheen:{value:0},sheenColor:{value:new qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Wt},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Wt},attenuationDistance:{value:0},attenuationColor:{value:new qt(0)},specularColor:{value:new qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Wt},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Wt}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag};const Wr={r:0,b:0,g:0},Ai=new Dn,_x=new oe;function vx(n,t,e,i,s,r,o){const a=new qt(0);let l=r===!0?0:1,c,h,f=null,u=0,d=null;function g(w){let y=w.isScene===!0?w.background:null;return y&&y.isTexture&&(y=(w.backgroundBlurriness>0?e:t).get(y)),y}function x(w){let y=!1;const E=g(w);E===null?m(a,l):E&&E.isColor&&(m(E,1),y=!0);const O=n.xr.getEnvironmentBlendMode();O==="additive"?i.buffers.color.setClear(0,0,0,1,o):O==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(w,y){const E=g(y);E&&(E.isCubeTexture||E.mapping===Ho)?(h===void 0&&(h=new ge(new nn(1,1,1),new gi({name:"BackgroundCubeMaterial",uniforms:Rs(wn.backgroundCube.uniforms),vertexShader:wn.backgroundCube.vertexShader,fragmentShader:wn.backgroundCube.fragmentShader,side:Xe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(O,R,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ai.copy(y.backgroundRotation),Ai.x*=-1,Ai.y*=-1,Ai.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Ai.y*=-1,Ai.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(_x.makeRotationFromEuler(Ai)),h.material.toneMapped=te.getTransfer(E.colorSpace)!==le,(f!==E||u!==E.version||d!==n.toneMapping)&&(h.material.needsUpdate=!0,f=E,u=E.version,d=n.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new ge(new ko(2,2),new gi({name:"BackgroundMaterial",uniforms:Rs(wn.background.uniforms),vertexShader:wn.background.vertexShader,fragmentShader:wn.background.fragmentShader,side:mi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=te.getTransfer(E.colorSpace)!==le,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(f!==E||u!==E.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,f=E,u=E.version,d=n.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function m(w,y){w.getRGB(Wr,hd(n)),i.buffers.color.setClear(Wr.r,Wr.g,Wr.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(w,y=1){a.set(w),l=y,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,m(a,l)},render:x,addToRenderList:p}}function xx(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null);let r=s,o=!1;function a(M,T,j,q,J){let nt=!1;const W=f(q,j,T);r!==W&&(r=W,c(r.object)),nt=d(M,q,j,J),nt&&g(M,q,j,J),J!==null&&t.update(J,n.ELEMENT_ARRAY_BUFFER),(nt||o)&&(o=!1,E(M,T,j,q),J!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(J).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function h(M){return n.deleteVertexArray(M)}function f(M,T,j){const q=j.wireframe===!0;let J=i[M.id];J===void 0&&(J={},i[M.id]=J);let nt=J[T.id];nt===void 0&&(nt={},J[T.id]=nt);let W=nt[q];return W===void 0&&(W=u(l()),nt[q]=W),W}function u(M){const T=[],j=[],q=[];for(let J=0;J<e;J++)T[J]=0,j[J]=0,q[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:j,attributeDivisors:q,object:M,attributes:{},index:null}}function d(M,T,j,q){const J=r.attributes,nt=T.attributes;let W=0;const tt=j.getAttributes();for(const X in tt)if(tt[X].location>=0){const xt=J[X];let mt=nt[X];if(mt===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(mt=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(mt=M.instanceColor)),xt===void 0||xt.attribute!==mt||mt&&xt.data!==mt.data)return!0;W++}return r.attributesNum!==W||r.index!==q}function g(M,T,j,q){const J={},nt=T.attributes;let W=0;const tt=j.getAttributes();for(const X in tt)if(tt[X].location>=0){let xt=nt[X];xt===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(xt=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(xt=M.instanceColor));const mt={};mt.attribute=xt,xt&&xt.data&&(mt.data=xt.data),J[X]=mt,W++}r.attributes=J,r.attributesNum=W,r.index=q}function x(){const M=r.newAttributes;for(let T=0,j=M.length;T<j;T++)M[T]=0}function p(M){m(M,0)}function m(M,T){const j=r.newAttributes,q=r.enabledAttributes,J=r.attributeDivisors;j[M]=1,q[M]===0&&(n.enableVertexAttribArray(M),q[M]=1),J[M]!==T&&(n.vertexAttribDivisor(M,T),J[M]=T)}function w(){const M=r.newAttributes,T=r.enabledAttributes;for(let j=0,q=T.length;j<q;j++)T[j]!==M[j]&&(n.disableVertexAttribArray(j),T[j]=0)}function y(M,T,j,q,J,nt,W){W===!0?n.vertexAttribIPointer(M,T,j,J,nt):n.vertexAttribPointer(M,T,j,q,J,nt)}function E(M,T,j,q){x();const J=q.attributes,nt=j.getAttributes(),W=T.defaultAttributeValues;for(const tt in nt){const X=nt[tt];if(X.location>=0){let dt=J[tt];if(dt===void 0&&(tt==="instanceMatrix"&&M.instanceMatrix&&(dt=M.instanceMatrix),tt==="instanceColor"&&M.instanceColor&&(dt=M.instanceColor)),dt!==void 0){const xt=dt.normalized,mt=dt.itemSize,Bt=t.get(dt);if(Bt===void 0)continue;const Yt=Bt.buffer,et=Bt.type,ct=Bt.bytesPerElement,Mt=et===n.INT||et===n.UNSIGNED_INT||dt.gpuType===pc;if(dt.isInterleavedBufferAttribute){const ht=dt.data,It=ht.stride,Ut=dt.offset;if(ht.isInstancedInterleavedBuffer){for(let Ot=0;Ot<X.locationSize;Ot++)m(X.location+Ot,ht.meshPerAttribute);M.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let Ot=0;Ot<X.locationSize;Ot++)p(X.location+Ot);n.bindBuffer(n.ARRAY_BUFFER,Yt);for(let Ot=0;Ot<X.locationSize;Ot++)y(X.location+Ot,mt/X.locationSize,et,xt,It*ct,(Ut+mt/X.locationSize*Ot)*ct,Mt)}else{if(dt.isInstancedBufferAttribute){for(let ht=0;ht<X.locationSize;ht++)m(X.location+ht,dt.meshPerAttribute);M.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let ht=0;ht<X.locationSize;ht++)p(X.location+ht);n.bindBuffer(n.ARRAY_BUFFER,Yt);for(let ht=0;ht<X.locationSize;ht++)y(X.location+ht,mt/X.locationSize,et,xt,mt*ct,mt/X.locationSize*ht*ct,Mt)}}else if(W!==void 0){const xt=W[tt];if(xt!==void 0)switch(xt.length){case 2:n.vertexAttrib2fv(X.location,xt);break;case 3:n.vertexAttrib3fv(X.location,xt);break;case 4:n.vertexAttrib4fv(X.location,xt);break;default:n.vertexAttrib1fv(X.location,xt)}}}}w()}function O(){H();for(const M in i){const T=i[M];for(const j in T){const q=T[j];for(const J in q)h(q[J].object),delete q[J];delete T[j]}delete i[M]}}function R(M){if(i[M.id]===void 0)return;const T=i[M.id];for(const j in T){const q=T[j];for(const J in q)h(q[J].object),delete q[J];delete T[j]}delete i[M.id]}function C(M){for(const T in i){const j=i[T];if(j[M.id]===void 0)continue;const q=j[M.id];for(const J in q)h(q[J].object),delete q[J];delete j[M.id]}}function H(){ot(),o=!0,r!==s&&(r=s,c(r.object))}function ot(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:H,resetDefaultState:ot,dispose:O,releaseStatesOfGeometry:R,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:p,disableUnusedAttributes:w}}function Mx(n,t,e){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),e.update(h,i,1)}function o(c,h,f){f!==0&&(n.drawArraysInstanced(i,c,h,f),e.update(h,i,f))}function a(c,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,f);let d=0;for(let g=0;g<f;g++)d+=h[g];e.update(d,i,1)}function l(c,h,f,u){if(f===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],h[g],u[g]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,h,0,u,0,f);let g=0;for(let x=0;x<f;x++)g+=h[x];for(let x=0;x<u.length;x++)e.update(g,i,u[x])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Sx(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==_n&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const H=C===mr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==ti&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Yn&&!H)}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(u===!0){const C=t.get("EXT_clip_control");C.clipControlEXT(C.LOWER_LEFT_EXT,C.ZERO_TO_ONE_EXT)}const d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),O=g>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:u,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:w,maxVaryings:y,maxFragmentUniforms:E,vertexTextures:O,maxSamples:R}}function yx(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new ui,a=new Wt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const d=f.length!==0||u||i!==0||s;return s=u,i=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,d){const g=f.clippingPlanes,x=f.clipIntersection,p=f.clipShadows,m=n.get(f);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{const w=r?0:i,y=w*4;let E=m.clippingState||null;l.value=E,E=h(g,u,y,d);for(let O=0;O!==y;++O)E[O]=e[O];m.clippingState=E,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(f,u,d,g){const x=f!==null?f.length:0;let p=null;if(x!==0){if(p=l.value,g!==!0||p===null){const m=d+x*4,w=u.matrixWorldInverse;a.getNormalMatrix(w),(p===null||p.length<m)&&(p=new Float32Array(m));for(let y=0,E=d;y!==x;++y,E+=4)o.copy(f[y]).applyMatrix4(w,a),o.normal.toArray(p,E),p[E+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,p}}function Ex(n){let t=new WeakMap;function e(o,a){return a===hl?o.mapping=Ts:a===fl&&(o.mapping=As),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===hl||a===fl)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new U_(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class bc extends fd{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const fs=4,Xu=[.125,.215,.35,.446,.526,.582],Ii=20,Ia=new bc,qu=new qt;let Ua=null,Na=0,Oa=0,Fa=!1;const Li=(1+Math.sqrt(5))/2,ls=1/Li,Yu=[new D(-Li,ls,0),new D(Li,ls,0),new D(-ls,0,Li),new D(ls,0,Li),new D(0,Li,-ls),new D(0,Li,ls),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class Ku{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){Ua=this._renderer.getRenderTarget(),Na=this._renderer.getActiveCubeFace(),Oa=this._renderer.getActiveMipmapLevel(),Fa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ju(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ju(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ua,Na,Oa),this._renderer.xr.enabled=Fa,t.scissorTest=!1,Xr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ts||t.mapping===As?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ua=this._renderer.getRenderTarget(),Na=this._renderer.getActiveCubeFace(),Oa=this._renderer.getActiveMipmapLevel(),Fa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:mn,minFilter:mn,generateMipmaps:!1,type:mr,format:_n,colorSpace:_i,depthBuffer:!1},s=$u(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$u(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=bx(r)),this._blurMaterial=Tx(r,t,e)}return s}_compileMaterial(t){const e=new ge(this._lodPlanes[0],t);this._renderer.compile(e,Ia)}_sceneToCubeUV(t,e,i,s){const a=new dn(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,u=h.toneMapping;h.getClearColor(qu),h.toneMapping=di,h.autoClear=!1;const d=new Hi({name:"PMREM.Background",side:Xe,depthWrite:!1,depthTest:!1}),g=new ge(new nn,d);let x=!1;const p=t.background;p?p.isColor&&(d.color.copy(p),t.background=null,x=!0):(d.color.copy(qu),x=!0);for(let m=0;m<6;m++){const w=m%3;w===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):w===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const y=this._cubeSize;Xr(s,w*y,m>2?y:0,y,y),h.setRenderTarget(s),x&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=f,t.background=p}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===Ts||t.mapping===As;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ju()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ju());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new ge(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Xr(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Ia)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Yu[(s-r-1)%Yu.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new ge(this._lodPlanes[s],c),u=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Ii-1),x=r/g,p=isFinite(r)?1+Math.floor(h*x):Ii;p>Ii&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ii}`);const m=[];let w=0;for(let C=0;C<Ii;++C){const H=C/x,ot=Math.exp(-H*H/2);m.push(ot),C===0?w+=ot:C<p&&(w+=2*ot)}for(let C=0;C<m.length;C++)m[C]=m[C]/w;u.envMap.value=t.texture,u.samples.value=p,u.weights.value=m,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:y}=this;u.dTheta.value=g,u.mipInt.value=y-i;const E=this._sizeLods[s],O=3*E*(s>y-fs?s-y+fs:0),R=4*(this._cubeSize-E);Xr(e,O,R,3*E,2*E),l.setRenderTarget(e),l.render(f,Ia)}}function bx(n){const t=[],e=[],i=[];let s=n;const r=n-fs+1+Xu.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>n-fs?l=Xu[o-n+fs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,f=1+c,u=[h,h,f,h,f,f,h,h,f,f,h,f],d=6,g=6,x=3,p=2,m=1,w=new Float32Array(x*g*d),y=new Float32Array(p*g*d),E=new Float32Array(m*g*d);for(let R=0;R<d;R++){const C=R%3*2/3-1,H=R>2?0:-1,ot=[C,H,0,C+2/3,H,0,C+2/3,H+1,0,C,H,0,C+2/3,H+1,0,C,H+1,0];w.set(ot,x*g*R),y.set(u,p*g*R);const M=[R,R,R,R,R,R];E.set(M,m*g*R)}const O=new Se;O.setAttribute("position",new an(w,x)),O.setAttribute("uv",new an(y,p)),O.setAttribute("faceIndex",new an(E,m)),t.push(O),s>fs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function $u(n,t,e){const i=new Gi(n,t,e);return i.texture.mapping=Ho,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Xr(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Tx(n,t,e){const i=new Float32Array(Ii),s=new D(0,1,0);return new gi({name:"SphericalGaussianBlur",defines:{n:Ii,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Tc(),fragmentShader:`

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
		`,blending:fi,depthTest:!1,depthWrite:!1})}function ju(){return new gi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Tc(),fragmentShader:`

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
		`,blending:fi,depthTest:!1,depthWrite:!1})}function Ju(){return new gi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Tc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function Tc(){return`

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
	`}function Ax(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===hl||l===fl,h=l===Ts||l===As;if(c||h){let f=t.get(a);const u=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new Ku(n)),f=c?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{const d=a.image;return c&&d&&d.height>0||h&&d&&s(d)?(e===null&&(e=new Ku(n)),f=c?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function wx(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&co("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Cx(n,t,e,i){const s={},r=new WeakMap;function o(f){const u=f.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);for(const g in u.morphAttributes){const x=u.morphAttributes[g];for(let p=0,m=x.length;p<m;p++)t.remove(x[p])}u.removeEventListener("dispose",o),delete s[u.id];const d=r.get(u);d&&(t.remove(d),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(f,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function l(f){const u=f.attributes;for(const g in u)t.update(u[g],n.ARRAY_BUFFER);const d=f.morphAttributes;for(const g in d){const x=d[g];for(let p=0,m=x.length;p<m;p++)t.update(x[p],n.ARRAY_BUFFER)}}function c(f){const u=[],d=f.index,g=f.attributes.position;let x=0;if(d!==null){const w=d.array;x=d.version;for(let y=0,E=w.length;y<E;y+=3){const O=w[y+0],R=w[y+1],C=w[y+2];u.push(O,R,R,C,C,O)}}else if(g!==void 0){const w=g.array;x=g.version;for(let y=0,E=w.length/3-1;y<E;y+=3){const O=y+0,R=y+1,C=y+2;u.push(O,R,R,C,C,O)}}else return;const p=new(rd(u)?ud:cd)(u,1);p.version=x;const m=r.get(f);m&&t.remove(m),r.set(f,p)}function h(f){const u=r.get(f);if(u){const d=f.index;d!==null&&u.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function Rx(n,t,e){let i;function s(u){i=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,d){n.drawElements(i,d,r,u*o),e.update(d,i,1)}function c(u,d,g){g!==0&&(n.drawElementsInstanced(i,d,r,u*o,g),e.update(d,i,g))}function h(u,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,u,0,g);let p=0;for(let m=0;m<g;m++)p+=d[m];e.update(p,i,1)}function f(u,d,g,x){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<u.length;m++)c(u[m]/o,d[m],x[m]);else{p.multiDrawElementsInstancedWEBGL(i,d,0,r,u,0,x,0,g);let m=0;for(let w=0;w<g;w++)m+=d[w];for(let w=0;w<x.length;w++)e.update(m,i,x[w])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function Px(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Lx(n,t,e){const i=new WeakMap,s=new fe;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0;let u=i.get(a);if(u===void 0||u.count!==f){let M=function(){H.dispose(),i.delete(a),a.removeEventListener("dispose",M)};var d=M;u!==void 0&&u.texture.dispose();const g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],w=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let E=0;g===!0&&(E=1),x===!0&&(E=2),p===!0&&(E=3);let O=a.attributes.position.count*E,R=1;O>t.maxTextureSize&&(R=Math.ceil(O/t.maxTextureSize),O=t.maxTextureSize);const C=new Float32Array(O*R*4*f),H=new ad(C,O,R,f);H.type=Yn,H.needsUpdate=!0;const ot=E*4;for(let T=0;T<f;T++){const j=m[T],q=w[T],J=y[T],nt=O*R*4*T;for(let W=0;W<j.count;W++){const tt=W*ot;g===!0&&(s.fromBufferAttribute(j,W),C[nt+tt+0]=s.x,C[nt+tt+1]=s.y,C[nt+tt+2]=s.z,C[nt+tt+3]=0),x===!0&&(s.fromBufferAttribute(q,W),C[nt+tt+4]=s.x,C[nt+tt+5]=s.y,C[nt+tt+6]=s.z,C[nt+tt+7]=0),p===!0&&(s.fromBufferAttribute(J,W),C[nt+tt+8]=s.x,C[nt+tt+9]=s.y,C[nt+tt+10]=s.z,C[nt+tt+11]=J.itemSize===4?s.w:1)}}u={count:f,texture:H,size:new ft(O,R)},i.set(a,u),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const x=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",x),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function Dx(n,t,e,i){let s=new WeakMap;function r(l){const c=i.render.frame,h=l.geometry,f=t.get(l,h);if(s.get(f)!==c&&(t.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return f}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class md extends qe{constructor(t,e,i,s,r,o,a,l,c,h=xs){if(h!==xs&&h!==Cs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===xs&&(i=Vi),i===void 0&&h===Cs&&(i=ws),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:rn,this.minFilter=l!==void 0?l:rn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const gd=new qe,Zu=new md(1,1),_d=new ad,vd=new v_,xd=new dd,Qu=[],th=[],eh=new Float32Array(16),nh=new Float32Array(9),ih=new Float32Array(4);function Ls(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=Qu[s];if(r===void 0&&(r=new Float32Array(s),Qu[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function ye(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ee(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Wo(n,t){let e=th[t];e===void 0&&(e=new Int32Array(t),th[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Ix(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Ux(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;n.uniform2fv(this.addr,t),Ee(e,t)}}function Nx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ye(e,t))return;n.uniform3fv(this.addr,t),Ee(e,t)}}function Ox(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;n.uniform4fv(this.addr,t),Ee(e,t)}}function Fx(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ye(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ee(e,t)}else{if(ye(e,i))return;ih.set(i),n.uniformMatrix2fv(this.addr,!1,ih),Ee(e,i)}}function Bx(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ye(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ee(e,t)}else{if(ye(e,i))return;nh.set(i),n.uniformMatrix3fv(this.addr,!1,nh),Ee(e,i)}}function zx(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ye(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ee(e,t)}else{if(ye(e,i))return;eh.set(i),n.uniformMatrix4fv(this.addr,!1,eh),Ee(e,i)}}function Hx(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Vx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;n.uniform2iv(this.addr,t),Ee(e,t)}}function Gx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;n.uniform3iv(this.addr,t),Ee(e,t)}}function kx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;n.uniform4iv(this.addr,t),Ee(e,t)}}function Wx(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Xx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;n.uniform2uiv(this.addr,t),Ee(e,t)}}function qx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;n.uniform3uiv(this.addr,t),Ee(e,t)}}function Yx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;n.uniform4uiv(this.addr,t),Ee(e,t)}}function Kx(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Zu.compareFunction=sd,r=Zu):r=gd,e.setTexture2D(t||r,s)}function $x(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||vd,s)}function jx(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||xd,s)}function Jx(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||_d,s)}function Zx(n){switch(n){case 5126:return Ix;case 35664:return Ux;case 35665:return Nx;case 35666:return Ox;case 35674:return Fx;case 35675:return Bx;case 35676:return zx;case 5124:case 35670:return Hx;case 35667:case 35671:return Vx;case 35668:case 35672:return Gx;case 35669:case 35673:return kx;case 5125:return Wx;case 36294:return Xx;case 36295:return qx;case 36296:return Yx;case 35678:case 36198:case 36298:case 36306:case 35682:return Kx;case 35679:case 36299:case 36307:return $x;case 35680:case 36300:case 36308:case 36293:return jx;case 36289:case 36303:case 36311:case 36292:return Jx}}function Qx(n,t){n.uniform1fv(this.addr,t)}function tM(n,t){const e=Ls(t,this.size,2);n.uniform2fv(this.addr,e)}function eM(n,t){const e=Ls(t,this.size,3);n.uniform3fv(this.addr,e)}function nM(n,t){const e=Ls(t,this.size,4);n.uniform4fv(this.addr,e)}function iM(n,t){const e=Ls(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function sM(n,t){const e=Ls(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function rM(n,t){const e=Ls(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function oM(n,t){n.uniform1iv(this.addr,t)}function aM(n,t){n.uniform2iv(this.addr,t)}function lM(n,t){n.uniform3iv(this.addr,t)}function cM(n,t){n.uniform4iv(this.addr,t)}function uM(n,t){n.uniform1uiv(this.addr,t)}function hM(n,t){n.uniform2uiv(this.addr,t)}function fM(n,t){n.uniform3uiv(this.addr,t)}function dM(n,t){n.uniform4uiv(this.addr,t)}function pM(n,t,e){const i=this.cache,s=t.length,r=Wo(e,s);ye(i,r)||(n.uniform1iv(this.addr,r),Ee(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||gd,r[o])}function mM(n,t,e){const i=this.cache,s=t.length,r=Wo(e,s);ye(i,r)||(n.uniform1iv(this.addr,r),Ee(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||vd,r[o])}function gM(n,t,e){const i=this.cache,s=t.length,r=Wo(e,s);ye(i,r)||(n.uniform1iv(this.addr,r),Ee(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||xd,r[o])}function _M(n,t,e){const i=this.cache,s=t.length,r=Wo(e,s);ye(i,r)||(n.uniform1iv(this.addr,r),Ee(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||_d,r[o])}function vM(n){switch(n){case 5126:return Qx;case 35664:return tM;case 35665:return eM;case 35666:return nM;case 35674:return iM;case 35675:return sM;case 35676:return rM;case 5124:case 35670:return oM;case 35667:case 35671:return aM;case 35668:case 35672:return lM;case 35669:case 35673:return cM;case 5125:return uM;case 36294:return hM;case 36295:return fM;case 36296:return dM;case 35678:case 36198:case 36298:case 36306:case 35682:return pM;case 35679:case 36299:case 36307:return mM;case 35680:case 36300:case 36308:case 36293:return gM;case 36289:case 36303:case 36311:case 36292:return _M}}class xM{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Zx(e.type)}}class MM{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=vM(e.type)}}class SM{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const Ba=/(\w+)(\])?(\[|\.)?/g;function sh(n,t){n.seq.push(t),n.map[t.id]=t}function yM(n,t,e){const i=n.name,s=i.length;for(Ba.lastIndex=0;;){const r=Ba.exec(i),o=Ba.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){sh(e,c===void 0?new xM(a,n,t):new MM(a,n,t));break}else{let f=e.map[a];f===void 0&&(f=new SM(a),sh(e,f)),e=f}}}class uo{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);yM(r,o,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function rh(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const EM=37297;let bM=0;function TM(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}function AM(n){const t=te.getPrimaries(te.workingColorSpace),e=te.getPrimaries(n);let i;switch(t===e?i="":t===yo&&e===So?i="LinearDisplayP3ToLinearSRGB":t===So&&e===yo&&(i="LinearSRGBToLinearDisplayP3"),n){case _i:case Vo:return[i,"LinearTransferOETF"];case bn:case Mc:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function oh(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+TM(n.getShaderSource(t),o)}else return s}function wM(n,t){const e=AM(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function CM(n,t){let e;switch(t){case Rg:e="Linear";break;case Pg:e="Reinhard";break;case Lg:e="Cineon";break;case Dg:e="ACESFilmic";break;case Ug:e="AgX";break;case Ng:e="Neutral";break;case Ig:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const qr=new D;function RM(){te.getLuminanceCoefficients(qr);const n=qr.x.toFixed(4),t=qr.y.toFixed(4),e=qr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function PM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gs).join(`
`)}function LM(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function DM(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Gs(n){return n!==""}function ah(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function lh(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const IM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vl(n){return n.replace(IM,NM)}const UM=new Map;function NM(n,t){let e=kt[t];if(e===void 0){const i=UM.get(t);if(i!==void 0)e=kt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Vl(e)}const OM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ch(n){return n.replace(OM,FM)}function FM(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function uh(n){let t=`precision ${n.precision} float;
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
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function BM(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===kf?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Wf?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Vn&&(t="SHADOWMAP_TYPE_VSM"),t}function zM(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ts:case As:t="ENVMAP_TYPE_CUBE";break;case Ho:t="ENVMAP_TYPE_CUBE_UV";break}return t}function HM(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case As:t="ENVMAP_MODE_REFRACTION";break}return t}function VM(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Xf:t="ENVMAP_BLENDING_MULTIPLY";break;case wg:t="ENVMAP_BLENDING_MIX";break;case Cg:t="ENVMAP_BLENDING_ADD";break}return t}function GM(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function kM(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=BM(e),c=zM(e),h=HM(e),f=VM(e),u=GM(e),d=PM(e),g=LM(r),x=s.createProgram();let p,m,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Gs).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Gs).join(`
`),m.length>0&&(m+=`
`)):(p=[uh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gs).join(`
`),m=[uh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==di?"#define TONE_MAPPING":"",e.toneMapping!==di?kt.tonemapping_pars_fragment:"",e.toneMapping!==di?CM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",kt.colorspace_pars_fragment,wM("linearToOutputTexel",e.outputColorSpace),RM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Gs).join(`
`)),o=Vl(o),o=ah(o,e),o=lh(o,e),a=Vl(a),a=ah(a,e),a=lh(a,e),o=ch(o),a=ch(a),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===Au?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Au?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const y=w+p+o,E=w+m+a,O=rh(s,s.VERTEX_SHADER,y),R=rh(s,s.FRAGMENT_SHADER,E);s.attachShader(x,O),s.attachShader(x,R),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function C(T){if(n.debug.checkShaderErrors){const j=s.getProgramInfoLog(x).trim(),q=s.getShaderInfoLog(O).trim(),J=s.getShaderInfoLog(R).trim();let nt=!0,W=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(nt=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,O,R);else{const tt=oh(s,O,"vertex"),X=oh(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+j+`
`+tt+`
`+X)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(q===""||J==="")&&(W=!1);W&&(T.diagnostics={runnable:nt,programLog:j,vertexShader:{log:q,prefix:p},fragmentShader:{log:J,prefix:m}})}s.deleteShader(O),s.deleteShader(R),H=new uo(s,x),ot=DM(s,x)}let H;this.getUniforms=function(){return H===void 0&&C(this),H};let ot;this.getAttributes=function(){return ot===void 0&&C(this),ot};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(x,EM)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=bM++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=O,this.fragmentShader=R,this}let WM=0;class XM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new qM(t),e.set(t,i)),i}}class qM{constructor(t){this.id=WM++,this.code=t,this.usedTimes=0}}function YM(n,t,e,i,s,r,o){const a=new yc,l=new XM,c=new Set,h=[],f=s.logarithmicDepthBuffer,u=s.reverseDepthBuffer,d=s.vertexTextures;let g=s.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,T,j,q,J){const nt=q.fog,W=J.geometry,tt=M.isMeshStandardMaterial?q.environment:null,X=(M.isMeshStandardMaterial?e:t).get(M.envMap||tt),dt=X&&X.mapping===Ho?X.image.height:null,xt=x[M.type];M.precision!==null&&(g=s.getMaxPrecision(M.precision),g!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",g,"instead."));const mt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Bt=mt!==void 0?mt.length:0;let Yt=0;W.morphAttributes.position!==void 0&&(Yt=1),W.morphAttributes.normal!==void 0&&(Yt=2),W.morphAttributes.color!==void 0&&(Yt=3);let et,ct,Mt,ht;if(xt){const ke=wn[xt];et=ke.vertexShader,ct=ke.fragmentShader}else et=M.vertexShader,ct=M.fragmentShader,l.update(M),Mt=l.getVertexShaderID(M),ht=l.getFragmentShaderID(M);const It=n.getRenderTarget(),Ut=J.isInstancedMesh===!0,Ot=J.isBatchedMesh===!0,Xt=!!M.map,b=!!M.matcap,v=!!X,L=!!M.aoMap,z=!!M.lightMap,I=!!M.bumpMap,F=!!M.normalMap,Z=!!M.displacementMap,Y=!!M.emissiveMap,S=!!M.metalnessMap,_=!!M.roughnessMap,P=M.anisotropy>0,N=M.clearcoat>0,k=M.dispersion>0,G=M.iridescence>0,lt=M.sheen>0,rt=M.transmission>0,at=P&&!!M.anisotropyMap,Pt=N&&!!M.clearcoatMap,it=N&&!!M.clearcoatNormalMap,pt=N&&!!M.clearcoatRoughnessMap,Ct=G&&!!M.iridescenceMap,Nt=G&&!!M.iridescenceThicknessMap,Tt=lt&&!!M.sheenColorMap,Ft=lt&&!!M.sheenRoughnessMap,Dt=!!M.specularMap,ee=!!M.specularColorMap,U=!!M.specularIntensityMap,Et=rt&&!!M.transmissionMap,Q=rt&&!!M.thicknessMap,st=!!M.gradientMap,St=!!M.alphaMap,bt=M.alphaTest>0,Kt=!!M.alphaHash,_e=!!M.extensions;let Ge=di;M.toneMapped&&(It===null||It.isXRRenderTarget===!0)&&(Ge=n.toneMapping);const $t={shaderID:xt,shaderType:M.type,shaderName:M.name,vertexShader:et,fragmentShader:ct,defines:M.defines,customVertexShaderID:Mt,customFragmentShaderID:ht,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:g,batching:Ot,batchingColor:Ot&&J._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&J.instanceColor!==null,instancingMorph:Ut&&J.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:It===null?n.outputColorSpace:It.isXRRenderTarget===!0?It.texture.colorSpace:_i,alphaToCoverage:!!M.alphaToCoverage,map:Xt,matcap:b,envMap:v,envMapMode:v&&X.mapping,envMapCubeUVHeight:dt,aoMap:L,lightMap:z,bumpMap:I,normalMap:F,displacementMap:d&&Z,emissiveMap:Y,normalMapObjectSpace:F&&M.normalMapType===zg,normalMapTangentSpace:F&&M.normalMapType===id,metalnessMap:S,roughnessMap:_,anisotropy:P,anisotropyMap:at,clearcoat:N,clearcoatMap:Pt,clearcoatNormalMap:it,clearcoatRoughnessMap:pt,dispersion:k,iridescence:G,iridescenceMap:Ct,iridescenceThicknessMap:Nt,sheen:lt,sheenColorMap:Tt,sheenRoughnessMap:Ft,specularMap:Dt,specularColorMap:ee,specularIntensityMap:U,transmission:rt,transmissionMap:Et,thicknessMap:Q,gradientMap:st,opaque:M.transparent===!1&&M.blending===vs&&M.alphaToCoverage===!1,alphaMap:St,alphaTest:bt,alphaHash:Kt,combine:M.combine,mapUv:Xt&&p(M.map.channel),aoMapUv:L&&p(M.aoMap.channel),lightMapUv:z&&p(M.lightMap.channel),bumpMapUv:I&&p(M.bumpMap.channel),normalMapUv:F&&p(M.normalMap.channel),displacementMapUv:Z&&p(M.displacementMap.channel),emissiveMapUv:Y&&p(M.emissiveMap.channel),metalnessMapUv:S&&p(M.metalnessMap.channel),roughnessMapUv:_&&p(M.roughnessMap.channel),anisotropyMapUv:at&&p(M.anisotropyMap.channel),clearcoatMapUv:Pt&&p(M.clearcoatMap.channel),clearcoatNormalMapUv:it&&p(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pt&&p(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Ct&&p(M.iridescenceMap.channel),iridescenceThicknessMapUv:Nt&&p(M.iridescenceThicknessMap.channel),sheenColorMapUv:Tt&&p(M.sheenColorMap.channel),sheenRoughnessMapUv:Ft&&p(M.sheenRoughnessMap.channel),specularMapUv:Dt&&p(M.specularMap.channel),specularColorMapUv:ee&&p(M.specularColorMap.channel),specularIntensityMapUv:U&&p(M.specularIntensityMap.channel),transmissionMapUv:Et&&p(M.transmissionMap.channel),thicknessMapUv:Q&&p(M.thicknessMap.channel),alphaMapUv:St&&p(M.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(F||P),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!W.attributes.uv&&(Xt||St),fog:!!nt,useFog:M.fog===!0,fogExp2:!!nt&&nt.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:u,skinning:J.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:Bt,morphTextureStride:Yt,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&j.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ge,decodeVideoTexture:Xt&&M.map.isVideoTexture===!0&&te.getTransfer(M.map.colorSpace)===le,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Ze,flipSided:M.side===Xe,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:_e&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_e&&M.extensions.multiDraw===!0||Ot)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return $t.vertexUv1s=c.has(1),$t.vertexUv2s=c.has(2),$t.vertexUv3s=c.has(3),c.clear(),$t}function w(M){const T=[];if(M.shaderID?T.push(M.shaderID):(T.push(M.customVertexShaderID),T.push(M.customFragmentShaderID)),M.defines!==void 0)for(const j in M.defines)T.push(j),T.push(M.defines[j]);return M.isRawShaderMaterial===!1&&(y(T,M),E(T,M),T.push(n.outputColorSpace)),T.push(M.customProgramCacheKey),T.join()}function y(M,T){M.push(T.precision),M.push(T.outputColorSpace),M.push(T.envMapMode),M.push(T.envMapCubeUVHeight),M.push(T.mapUv),M.push(T.alphaMapUv),M.push(T.lightMapUv),M.push(T.aoMapUv),M.push(T.bumpMapUv),M.push(T.normalMapUv),M.push(T.displacementMapUv),M.push(T.emissiveMapUv),M.push(T.metalnessMapUv),M.push(T.roughnessMapUv),M.push(T.anisotropyMapUv),M.push(T.clearcoatMapUv),M.push(T.clearcoatNormalMapUv),M.push(T.clearcoatRoughnessMapUv),M.push(T.iridescenceMapUv),M.push(T.iridescenceThicknessMapUv),M.push(T.sheenColorMapUv),M.push(T.sheenRoughnessMapUv),M.push(T.specularMapUv),M.push(T.specularColorMapUv),M.push(T.specularIntensityMapUv),M.push(T.transmissionMapUv),M.push(T.thicknessMapUv),M.push(T.combine),M.push(T.fogExp2),M.push(T.sizeAttenuation),M.push(T.morphTargetsCount),M.push(T.morphAttributeCount),M.push(T.numDirLights),M.push(T.numPointLights),M.push(T.numSpotLights),M.push(T.numSpotLightMaps),M.push(T.numHemiLights),M.push(T.numRectAreaLights),M.push(T.numDirLightShadows),M.push(T.numPointLightShadows),M.push(T.numSpotLightShadows),M.push(T.numSpotLightShadowsWithMaps),M.push(T.numLightProbes),M.push(T.shadowMapType),M.push(T.toneMapping),M.push(T.numClippingPlanes),M.push(T.numClipIntersection),M.push(T.depthPacking)}function E(M,T){a.disableAll(),T.supportsVertexTextures&&a.enable(0),T.instancing&&a.enable(1),T.instancingColor&&a.enable(2),T.instancingMorph&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),T.dispersion&&a.enable(20),T.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reverseDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.alphaToCoverage&&a.enable(20),M.push(a.mask)}function O(M){const T=x[M.type];let j;if(T){const q=wn[T];j=P_.clone(q.uniforms)}else j=M.uniforms;return j}function R(M,T){let j;for(let q=0,J=h.length;q<J;q++){const nt=h[q];if(nt.cacheKey===T){j=nt,++j.usedTimes;break}}return j===void 0&&(j=new kM(n,T,M,r),h.push(j)),j}function C(M){if(--M.usedTimes===0){const T=h.indexOf(M);h[T]=h[h.length-1],h.pop(),M.destroy()}}function H(M){l.remove(M)}function ot(){l.dispose()}return{getParameters:m,getProgramCacheKey:w,getUniforms:O,acquireProgram:R,releaseProgram:C,releaseShaderCache:H,programs:h,dispose:ot}}function KM(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function $M(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function hh(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function fh(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(f,u,d,g,x,p){let m=n[t];return m===void 0?(m={id:f.id,object:f,geometry:u,material:d,groupOrder:g,renderOrder:f.renderOrder,z:x,group:p},n[t]=m):(m.id=f.id,m.object=f,m.geometry=u,m.material=d,m.groupOrder=g,m.renderOrder=f.renderOrder,m.z=x,m.group=p),t++,m}function a(f,u,d,g,x,p){const m=o(f,u,d,g,x,p);d.transmission>0?i.push(m):d.transparent===!0?s.push(m):e.push(m)}function l(f,u,d,g,x,p){const m=o(f,u,d,g,x,p);d.transmission>0?i.unshift(m):d.transparent===!0?s.unshift(m):e.unshift(m)}function c(f,u){e.length>1&&e.sort(f||$M),i.length>1&&i.sort(u||hh),s.length>1&&s.sort(u||hh)}function h(){for(let f=t,u=n.length;f<u;f++){const d=n[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function jM(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new fh,n.set(i,[o])):s>=r.length?(o=new fh,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function JM(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new qt};break;case"SpotLight":e={position:new D,direction:new D,color:new qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new qt,groundColor:new qt};break;case"RectAreaLight":e={color:new qt,position:new D,halfWidth:new D,halfHeight:new D};break}return n[t.id]=e,e}}}function ZM(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let QM=0;function tS(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function eS(n){const t=new JM,e=ZM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new D);const s=new D,r=new oe,o=new oe;function a(c){let h=0,f=0,u=0;for(let ot=0;ot<9;ot++)i.probe[ot].set(0,0,0);let d=0,g=0,x=0,p=0,m=0,w=0,y=0,E=0,O=0,R=0,C=0;c.sort(tS);for(let ot=0,M=c.length;ot<M;ot++){const T=c[ot],j=T.color,q=T.intensity,J=T.distance,nt=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)h+=j.r*q,f+=j.g*q,u+=j.b*q;else if(T.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(T.sh.coefficients[W],q);C++}else if(T.isDirectionalLight){const W=t.get(T);if(W.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const tt=T.shadow,X=e.get(T);X.shadowIntensity=tt.intensity,X.shadowBias=tt.bias,X.shadowNormalBias=tt.normalBias,X.shadowRadius=tt.radius,X.shadowMapSize=tt.mapSize,i.directionalShadow[d]=X,i.directionalShadowMap[d]=nt,i.directionalShadowMatrix[d]=T.shadow.matrix,w++}i.directional[d]=W,d++}else if(T.isSpotLight){const W=t.get(T);W.position.setFromMatrixPosition(T.matrixWorld),W.color.copy(j).multiplyScalar(q),W.distance=J,W.coneCos=Math.cos(T.angle),W.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),W.decay=T.decay,i.spot[x]=W;const tt=T.shadow;if(T.map&&(i.spotLightMap[O]=T.map,O++,tt.updateMatrices(T),T.castShadow&&R++),i.spotLightMatrix[x]=tt.matrix,T.castShadow){const X=e.get(T);X.shadowIntensity=tt.intensity,X.shadowBias=tt.bias,X.shadowNormalBias=tt.normalBias,X.shadowRadius=tt.radius,X.shadowMapSize=tt.mapSize,i.spotShadow[x]=X,i.spotShadowMap[x]=nt,E++}x++}else if(T.isRectAreaLight){const W=t.get(T);W.color.copy(j).multiplyScalar(q),W.halfWidth.set(T.width*.5,0,0),W.halfHeight.set(0,T.height*.5,0),i.rectArea[p]=W,p++}else if(T.isPointLight){const W=t.get(T);if(W.color.copy(T.color).multiplyScalar(T.intensity),W.distance=T.distance,W.decay=T.decay,T.castShadow){const tt=T.shadow,X=e.get(T);X.shadowIntensity=tt.intensity,X.shadowBias=tt.bias,X.shadowNormalBias=tt.normalBias,X.shadowRadius=tt.radius,X.shadowMapSize=tt.mapSize,X.shadowCameraNear=tt.camera.near,X.shadowCameraFar=tt.camera.far,i.pointShadow[g]=X,i.pointShadowMap[g]=nt,i.pointShadowMatrix[g]=T.shadow.matrix,y++}i.point[g]=W,g++}else if(T.isHemisphereLight){const W=t.get(T);W.skyColor.copy(T.color).multiplyScalar(q),W.groundColor.copy(T.groundColor).multiplyScalar(q),i.hemi[m]=W,m++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=vt.LTC_FLOAT_1,i.rectAreaLTC2=vt.LTC_FLOAT_2):(i.rectAreaLTC1=vt.LTC_HALF_1,i.rectAreaLTC2=vt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=u;const H=i.hash;(H.directionalLength!==d||H.pointLength!==g||H.spotLength!==x||H.rectAreaLength!==p||H.hemiLength!==m||H.numDirectionalShadows!==w||H.numPointShadows!==y||H.numSpotShadows!==E||H.numSpotMaps!==O||H.numLightProbes!==C)&&(i.directional.length=d,i.spot.length=x,i.rectArea.length=p,i.point.length=g,i.hemi.length=m,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=E+O-R,i.spotLightMap.length=O,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=C,H.directionalLength=d,H.pointLength=g,H.spotLength=x,H.rectAreaLength=p,H.hemiLength=m,H.numDirectionalShadows=w,H.numPointShadows=y,H.numSpotShadows=E,H.numSpotMaps=O,H.numLightProbes=C,i.version=QM++)}function l(c,h){let f=0,u=0,d=0,g=0,x=0;const p=h.matrixWorldInverse;for(let m=0,w=c.length;m<w;m++){const y=c[m];if(y.isDirectionalLight){const E=i.directional[f];E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),f++}else if(y.isSpotLight){const E=i.spot[d];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),d++}else if(y.isRectAreaLight){const E=i.rectArea[g];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(p),o.identity(),r.copy(y.matrixWorld),r.premultiply(p),o.extractRotation(r),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const E=i.point[u];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(p),u++}else if(y.isHemisphereLight){const E=i.hemi[x];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(p),x++}}}return{setup:a,setupView:l,state:i}}function dh(n){const t=new eS(n),e=[],i=[];function s(h){c.camera=h,e.length=0,i.length=0}function r(h){e.push(h)}function o(h){i.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function nS(n){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new dh(n),t.set(s,[a])):r>=o.length?(a=new dh(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class iS extends qi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Fg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class sS extends qi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const rS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,oS=`uniform sampler2D shadow_pass;
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
}`;function aS(n,t,e){let i=new Ec;const s=new ft,r=new ft,o=new fe,a=new iS({depthPacking:Bg}),l=new sS,c={},h=e.maxTextureSize,f={[mi]:Xe,[Xe]:mi,[Ze]:Ze},u=new gi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:rS,fragmentShader:oS}),d=u.clone();d.defines.HORIZONTAL_PASS=1;const g=new Se;g.setAttribute("position",new an(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new ge(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kf;let m=this.type;this.render=function(R,C,H){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;const ot=n.getRenderTarget(),M=n.getActiveCubeFace(),T=n.getActiveMipmapLevel(),j=n.state;j.setBlending(fi),j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const q=m!==Vn&&this.type===Vn,J=m===Vn&&this.type!==Vn;for(let nt=0,W=R.length;nt<W;nt++){const tt=R[nt],X=tt.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",tt,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);const dt=X.getFrameExtents();if(s.multiply(dt),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/dt.x),s.x=r.x*dt.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/dt.y),s.y=r.y*dt.y,X.mapSize.y=r.y)),X.map===null||q===!0||J===!0){const mt=this.type!==Vn?{minFilter:rn,magFilter:rn}:{};X.map!==null&&X.map.dispose(),X.map=new Gi(s.x,s.y,mt),X.map.texture.name=tt.name+".shadowMap",X.camera.updateProjectionMatrix()}n.setRenderTarget(X.map),n.clear();const xt=X.getViewportCount();for(let mt=0;mt<xt;mt++){const Bt=X.getViewport(mt);o.set(r.x*Bt.x,r.y*Bt.y,r.x*Bt.z,r.y*Bt.w),j.viewport(o),X.updateMatrices(tt,mt),i=X.getFrustum(),E(C,H,X.camera,tt,this.type)}X.isPointLightShadow!==!0&&this.type===Vn&&w(X,H),X.needsUpdate=!1}m=this.type,p.needsUpdate=!1,n.setRenderTarget(ot,M,T)};function w(R,C){const H=t.update(x);u.defines.VSM_SAMPLES!==R.blurSamples&&(u.defines.VSM_SAMPLES=R.blurSamples,d.defines.VSM_SAMPLES=R.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Gi(s.x,s.y)),u.uniforms.shadow_pass.value=R.map.texture,u.uniforms.resolution.value=R.mapSize,u.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(C,null,H,u,x,null),d.uniforms.shadow_pass.value=R.mapPass.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(C,null,H,d,x,null)}function y(R,C,H,ot){let M=null;const T=H.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(T!==void 0)M=T;else if(M=H.isPointLight===!0?l:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const j=M.uuid,q=C.uuid;let J=c[j];J===void 0&&(J={},c[j]=J);let nt=J[q];nt===void 0&&(nt=M.clone(),J[q]=nt,C.addEventListener("dispose",O)),M=nt}if(M.visible=C.visible,M.wireframe=C.wireframe,ot===Vn?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:f[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,H.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const j=n.properties.get(M);j.light=H}return M}function E(R,C,H,ot,M){if(R.visible===!1)return;if(R.layers.test(C.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&M===Vn)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,R.matrixWorld);const q=t.update(R),J=R.material;if(Array.isArray(J)){const nt=q.groups;for(let W=0,tt=nt.length;W<tt;W++){const X=nt[W],dt=J[X.materialIndex];if(dt&&dt.visible){const xt=y(R,dt,ot,M);R.onBeforeShadow(n,R,C,H,q,xt,X),n.renderBufferDirect(H,null,q,xt,R,X),R.onAfterShadow(n,R,C,H,q,xt,X)}}}else if(J.visible){const nt=y(R,J,ot,M);R.onBeforeShadow(n,R,C,H,q,nt,null),n.renderBufferDirect(H,null,q,nt,R,null),R.onAfterShadow(n,R,C,H,q,nt,null)}}const j=R.children;for(let q=0,J=j.length;q<J;q++)E(j[q],C,H,ot,M)}function O(R){R.target.removeEventListener("dispose",O);for(const H in c){const ot=c[H],M=R.target.uuid;M in ot&&(ot[M].dispose(),delete ot[M])}}}const lS={[sl]:rl,[ol]:cl,[al]:ul,[bs]:ll,[rl]:sl,[cl]:ol,[ul]:al,[ll]:bs};function cS(n){function t(){let U=!1;const Et=new fe;let Q=null;const st=new fe(0,0,0,0);return{setMask:function(St){Q!==St&&!U&&(n.colorMask(St,St,St,St),Q=St)},setLocked:function(St){U=St},setClear:function(St,bt,Kt,_e,Ge){Ge===!0&&(St*=_e,bt*=_e,Kt*=_e),Et.set(St,bt,Kt,_e),st.equals(Et)===!1&&(n.clearColor(St,bt,Kt,_e),st.copy(Et))},reset:function(){U=!1,Q=null,st.set(-1,0,0,0)}}}function e(){let U=!1,Et=!1,Q=null,st=null,St=null;return{setReversed:function(bt){Et=bt},setTest:function(bt){bt?Mt(n.DEPTH_TEST):ht(n.DEPTH_TEST)},setMask:function(bt){Q!==bt&&!U&&(n.depthMask(bt),Q=bt)},setFunc:function(bt){if(Et&&(bt=lS[bt]),st!==bt){switch(bt){case sl:n.depthFunc(n.NEVER);break;case rl:n.depthFunc(n.ALWAYS);break;case ol:n.depthFunc(n.LESS);break;case bs:n.depthFunc(n.LEQUAL);break;case al:n.depthFunc(n.EQUAL);break;case ll:n.depthFunc(n.GEQUAL);break;case cl:n.depthFunc(n.GREATER);break;case ul:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}st=bt}},setLocked:function(bt){U=bt},setClear:function(bt){St!==bt&&(n.clearDepth(bt),St=bt)},reset:function(){U=!1,Q=null,st=null,St=null}}}function i(){let U=!1,Et=null,Q=null,st=null,St=null,bt=null,Kt=null,_e=null,Ge=null;return{setTest:function($t){U||($t?Mt(n.STENCIL_TEST):ht(n.STENCIL_TEST))},setMask:function($t){Et!==$t&&!U&&(n.stencilMask($t),Et=$t)},setFunc:function($t,ke,Un){(Q!==$t||st!==ke||St!==Un)&&(n.stencilFunc($t,ke,Un),Q=$t,st=ke,St=Un)},setOp:function($t,ke,Un){(bt!==$t||Kt!==ke||_e!==Un)&&(n.stencilOp($t,ke,Un),bt=$t,Kt=ke,_e=Un)},setLocked:function($t){U=$t},setClear:function($t){Ge!==$t&&(n.clearStencil($t),Ge=$t)},reset:function(){U=!1,Et=null,Q=null,st=null,St=null,bt=null,Kt=null,_e=null,Ge=null}}}const s=new t,r=new e,o=new i,a=new WeakMap,l=new WeakMap;let c={},h={},f=new WeakMap,u=[],d=null,g=!1,x=null,p=null,m=null,w=null,y=null,E=null,O=null,R=new qt(0,0,0),C=0,H=!1,ot=null,M=null,T=null,j=null,q=null;const J=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let nt=!1,W=0;const tt=n.getParameter(n.VERSION);tt.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(tt)[1]),nt=W>=1):tt.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(tt)[1]),nt=W>=2);let X=null,dt={};const xt=n.getParameter(n.SCISSOR_BOX),mt=n.getParameter(n.VIEWPORT),Bt=new fe().fromArray(xt),Yt=new fe().fromArray(mt);function et(U,Et,Q,st){const St=new Uint8Array(4),bt=n.createTexture();n.bindTexture(U,bt),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Kt=0;Kt<Q;Kt++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(Et,0,n.RGBA,1,1,st,0,n.RGBA,n.UNSIGNED_BYTE,St):n.texImage2D(Et+Kt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,St);return bt}const ct={};ct[n.TEXTURE_2D]=et(n.TEXTURE_2D,n.TEXTURE_2D,1),ct[n.TEXTURE_CUBE_MAP]=et(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ct[n.TEXTURE_2D_ARRAY]=et(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ct[n.TEXTURE_3D]=et(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),Mt(n.DEPTH_TEST),r.setFunc(bs),z(!1),I(xu),Mt(n.CULL_FACE),v(fi);function Mt(U){c[U]!==!0&&(n.enable(U),c[U]=!0)}function ht(U){c[U]!==!1&&(n.disable(U),c[U]=!1)}function It(U,Et){return h[U]!==Et?(n.bindFramebuffer(U,Et),h[U]=Et,U===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=Et),U===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=Et),!0):!1}function Ut(U,Et){let Q=u,st=!1;if(U){Q=f.get(Et),Q===void 0&&(Q=[],f.set(Et,Q));const St=U.textures;if(Q.length!==St.length||Q[0]!==n.COLOR_ATTACHMENT0){for(let bt=0,Kt=St.length;bt<Kt;bt++)Q[bt]=n.COLOR_ATTACHMENT0+bt;Q.length=St.length,st=!0}}else Q[0]!==n.BACK&&(Q[0]=n.BACK,st=!0);st&&n.drawBuffers(Q)}function Ot(U){return d!==U?(n.useProgram(U),d=U,!0):!1}const Xt={[Di]:n.FUNC_ADD,[ug]:n.FUNC_SUBTRACT,[hg]:n.FUNC_REVERSE_SUBTRACT};Xt[fg]=n.MIN,Xt[dg]=n.MAX;const b={[pg]:n.ZERO,[mg]:n.ONE,[gg]:n.SRC_COLOR,[nl]:n.SRC_ALPHA,[yg]:n.SRC_ALPHA_SATURATE,[Mg]:n.DST_COLOR,[vg]:n.DST_ALPHA,[_g]:n.ONE_MINUS_SRC_COLOR,[il]:n.ONE_MINUS_SRC_ALPHA,[Sg]:n.ONE_MINUS_DST_COLOR,[xg]:n.ONE_MINUS_DST_ALPHA,[Eg]:n.CONSTANT_COLOR,[bg]:n.ONE_MINUS_CONSTANT_COLOR,[Tg]:n.CONSTANT_ALPHA,[Ag]:n.ONE_MINUS_CONSTANT_ALPHA};function v(U,Et,Q,st,St,bt,Kt,_e,Ge,$t){if(U===fi){g===!0&&(ht(n.BLEND),g=!1);return}if(g===!1&&(Mt(n.BLEND),g=!0),U!==cg){if(U!==x||$t!==H){if((p!==Di||y!==Di)&&(n.blendEquation(n.FUNC_ADD),p=Di,y=Di),$t)switch(U){case vs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Mu:n.blendFunc(n.ONE,n.ONE);break;case Su:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case yu:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case vs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Mu:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Su:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case yu:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}m=null,w=null,E=null,O=null,R.set(0,0,0),C=0,x=U,H=$t}return}St=St||Et,bt=bt||Q,Kt=Kt||st,(Et!==p||St!==y)&&(n.blendEquationSeparate(Xt[Et],Xt[St]),p=Et,y=St),(Q!==m||st!==w||bt!==E||Kt!==O)&&(n.blendFuncSeparate(b[Q],b[st],b[bt],b[Kt]),m=Q,w=st,E=bt,O=Kt),(_e.equals(R)===!1||Ge!==C)&&(n.blendColor(_e.r,_e.g,_e.b,Ge),R.copy(_e),C=Ge),x=U,H=!1}function L(U,Et){U.side===Ze?ht(n.CULL_FACE):Mt(n.CULL_FACE);let Q=U.side===Xe;Et&&(Q=!Q),z(Q),U.blending===vs&&U.transparent===!1?v(fi):v(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),r.setFunc(U.depthFunc),r.setTest(U.depthTest),r.setMask(U.depthWrite),s.setMask(U.colorWrite);const st=U.stencilWrite;o.setTest(st),st&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Z(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?Mt(n.SAMPLE_ALPHA_TO_COVERAGE):ht(n.SAMPLE_ALPHA_TO_COVERAGE)}function z(U){ot!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),ot=U)}function I(U){U!==ag?(Mt(n.CULL_FACE),U!==M&&(U===xu?n.cullFace(n.BACK):U===lg?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ht(n.CULL_FACE),M=U}function F(U){U!==T&&(nt&&n.lineWidth(U),T=U)}function Z(U,Et,Q){U?(Mt(n.POLYGON_OFFSET_FILL),(j!==Et||q!==Q)&&(n.polygonOffset(Et,Q),j=Et,q=Q)):ht(n.POLYGON_OFFSET_FILL)}function Y(U){U?Mt(n.SCISSOR_TEST):ht(n.SCISSOR_TEST)}function S(U){U===void 0&&(U=n.TEXTURE0+J-1),X!==U&&(n.activeTexture(U),X=U)}function _(U,Et,Q){Q===void 0&&(X===null?Q=n.TEXTURE0+J-1:Q=X);let st=dt[Q];st===void 0&&(st={type:void 0,texture:void 0},dt[Q]=st),(st.type!==U||st.texture!==Et)&&(X!==Q&&(n.activeTexture(Q),X=Q),n.bindTexture(U,Et||ct[U]),st.type=U,st.texture=Et)}function P(){const U=dt[X];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function N(){try{n.compressedTexImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function k(){try{n.compressedTexImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function G(){try{n.texSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function lt(){try{n.texSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function rt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function at(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Pt(){try{n.texStorage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function it(){try{n.texStorage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function pt(){try{n.texImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ct(){try{n.texImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Nt(U){Bt.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),Bt.copy(U))}function Tt(U){Yt.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),Yt.copy(U))}function Ft(U,Et){let Q=l.get(Et);Q===void 0&&(Q=new WeakMap,l.set(Et,Q));let st=Q.get(U);st===void 0&&(st=n.getUniformBlockIndex(Et,U.name),Q.set(U,st))}function Dt(U,Et){const st=l.get(Et).get(U);a.get(Et)!==st&&(n.uniformBlockBinding(Et,st,U.__bindingPointIndex),a.set(Et,st))}function ee(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},X=null,dt={},h={},f=new WeakMap,u=[],d=null,g=!1,x=null,p=null,m=null,w=null,y=null,E=null,O=null,R=new qt(0,0,0),C=0,H=!1,ot=null,M=null,T=null,j=null,q=null,Bt.set(0,0,n.canvas.width,n.canvas.height),Yt.set(0,0,n.canvas.width,n.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:Mt,disable:ht,bindFramebuffer:It,drawBuffers:Ut,useProgram:Ot,setBlending:v,setMaterial:L,setFlipSided:z,setCullFace:I,setLineWidth:F,setPolygonOffset:Z,setScissorTest:Y,activeTexture:S,bindTexture:_,unbindTexture:P,compressedTexImage2D:N,compressedTexImage3D:k,texImage2D:pt,texImage3D:Ct,updateUBOMapping:Ft,uniformBlockBinding:Dt,texStorage2D:Pt,texStorage3D:it,texSubImage2D:G,texSubImage3D:lt,compressedTexSubImage2D:rt,compressedTexSubImage3D:at,scissor:Nt,viewport:Tt,reset:ee}}function ph(n,t,e,i){const s=uS(i);switch(e){case jf:return n*t;case Zf:return n*t;case Qf:return n*t*2;case td:return n*t/s.components*s.byteLength;case _c:return n*t/s.components*s.byteLength;case ed:return n*t*2/s.components*s.byteLength;case vc:return n*t*2/s.components*s.byteLength;case Jf:return n*t*3/s.components*s.byteLength;case _n:return n*t*4/s.components*s.byteLength;case xc:return n*t*4/s.components*s.byteLength;case so:case ro:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case oo:case ao:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case gl:case vl:return Math.max(n,16)*Math.max(t,8)/4;case ml:case _l:return Math.max(n,8)*Math.max(t,8)/2;case xl:case Ml:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Sl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case yl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case El:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case bl:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Tl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Al:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case wl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Cl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Rl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Pl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Ll:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Dl:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Il:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Ul:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Nl:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case lo:case Ol:case Fl:return Math.ceil(n/4)*Math.ceil(t/4)*16;case nd:case Bl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case zl:case Hl:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function uS(n){switch(n){case ti:case Yf:return{byteLength:1,components:1};case or:case Kf:case mr:return{byteLength:2,components:1};case mc:case gc:return{byteLength:2,components:4};case Vi:case pc:case Yn:return{byteLength:4,components:1};case $f:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function hS(n,t,e,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ft,h=new WeakMap;let f;const u=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(S,_){return d?new OffscreenCanvas(S,_):bo("canvas")}function x(S,_,P){let N=1;const k=Y(S);if((k.width>P||k.height>P)&&(N=P/Math.max(k.width,k.height)),N<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){const G=Math.floor(N*k.width),lt=Math.floor(N*k.height);f===void 0&&(f=g(G,lt));const rt=_?g(G,lt):f;return rt.width=G,rt.height=lt,rt.getContext("2d").drawImage(S,0,0,G,lt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+k.width+"x"+k.height+") to ("+G+"x"+lt+")."),rt}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+k.width+"x"+k.height+")."),S;return S}function p(S){return S.generateMipmaps&&S.minFilter!==rn&&S.minFilter!==mn}function m(S){n.generateMipmap(S)}function w(S,_,P,N,k=!1){if(S!==null){if(n[S]!==void 0)return n[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let G=_;if(_===n.RED&&(P===n.FLOAT&&(G=n.R32F),P===n.HALF_FLOAT&&(G=n.R16F),P===n.UNSIGNED_BYTE&&(G=n.R8)),_===n.RED_INTEGER&&(P===n.UNSIGNED_BYTE&&(G=n.R8UI),P===n.UNSIGNED_SHORT&&(G=n.R16UI),P===n.UNSIGNED_INT&&(G=n.R32UI),P===n.BYTE&&(G=n.R8I),P===n.SHORT&&(G=n.R16I),P===n.INT&&(G=n.R32I)),_===n.RG&&(P===n.FLOAT&&(G=n.RG32F),P===n.HALF_FLOAT&&(G=n.RG16F),P===n.UNSIGNED_BYTE&&(G=n.RG8)),_===n.RG_INTEGER&&(P===n.UNSIGNED_BYTE&&(G=n.RG8UI),P===n.UNSIGNED_SHORT&&(G=n.RG16UI),P===n.UNSIGNED_INT&&(G=n.RG32UI),P===n.BYTE&&(G=n.RG8I),P===n.SHORT&&(G=n.RG16I),P===n.INT&&(G=n.RG32I)),_===n.RGB_INTEGER&&(P===n.UNSIGNED_BYTE&&(G=n.RGB8UI),P===n.UNSIGNED_SHORT&&(G=n.RGB16UI),P===n.UNSIGNED_INT&&(G=n.RGB32UI),P===n.BYTE&&(G=n.RGB8I),P===n.SHORT&&(G=n.RGB16I),P===n.INT&&(G=n.RGB32I)),_===n.RGBA_INTEGER&&(P===n.UNSIGNED_BYTE&&(G=n.RGBA8UI),P===n.UNSIGNED_SHORT&&(G=n.RGBA16UI),P===n.UNSIGNED_INT&&(G=n.RGBA32UI),P===n.BYTE&&(G=n.RGBA8I),P===n.SHORT&&(G=n.RGBA16I),P===n.INT&&(G=n.RGBA32I)),_===n.RGB&&P===n.UNSIGNED_INT_5_9_9_9_REV&&(G=n.RGB9_E5),_===n.RGBA){const lt=k?Mo:te.getTransfer(N);P===n.FLOAT&&(G=n.RGBA32F),P===n.HALF_FLOAT&&(G=n.RGBA16F),P===n.UNSIGNED_BYTE&&(G=lt===le?n.SRGB8_ALPHA8:n.RGBA8),P===n.UNSIGNED_SHORT_4_4_4_4&&(G=n.RGBA4),P===n.UNSIGNED_SHORT_5_5_5_1&&(G=n.RGB5_A1)}return(G===n.R16F||G===n.R32F||G===n.RG16F||G===n.RG32F||G===n.RGBA16F||G===n.RGBA32F)&&t.get("EXT_color_buffer_float"),G}function y(S,_){let P;return S?_===null||_===Vi||_===ws?P=n.DEPTH24_STENCIL8:_===Yn?P=n.DEPTH32F_STENCIL8:_===or&&(P=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Vi||_===ws?P=n.DEPTH_COMPONENT24:_===Yn?P=n.DEPTH_COMPONENT32F:_===or&&(P=n.DEPTH_COMPONENT16),P}function E(S,_){return p(S)===!0||S.isFramebufferTexture&&S.minFilter!==rn&&S.minFilter!==mn?Math.log2(Math.max(_.width,_.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?_.mipmaps.length:1}function O(S){const _=S.target;_.removeEventListener("dispose",O),C(_),_.isVideoTexture&&h.delete(_)}function R(S){const _=S.target;_.removeEventListener("dispose",R),ot(_)}function C(S){const _=i.get(S);if(_.__webglInit===void 0)return;const P=S.source,N=u.get(P);if(N){const k=N[_.__cacheKey];k.usedTimes--,k.usedTimes===0&&H(S),Object.keys(N).length===0&&u.delete(P)}i.remove(S)}function H(S){const _=i.get(S);n.deleteTexture(_.__webglTexture);const P=S.source,N=u.get(P);delete N[_.__cacheKey],o.memory.textures--}function ot(S){const _=i.get(S);if(S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let N=0;N<6;N++){if(Array.isArray(_.__webglFramebuffer[N]))for(let k=0;k<_.__webglFramebuffer[N].length;k++)n.deleteFramebuffer(_.__webglFramebuffer[N][k]);else n.deleteFramebuffer(_.__webglFramebuffer[N]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[N])}else{if(Array.isArray(_.__webglFramebuffer))for(let N=0;N<_.__webglFramebuffer.length;N++)n.deleteFramebuffer(_.__webglFramebuffer[N]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let N=0;N<_.__webglColorRenderbuffer.length;N++)_.__webglColorRenderbuffer[N]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[N]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const P=S.textures;for(let N=0,k=P.length;N<k;N++){const G=i.get(P[N]);G.__webglTexture&&(n.deleteTexture(G.__webglTexture),o.memory.textures--),i.remove(P[N])}i.remove(S)}let M=0;function T(){M=0}function j(){const S=M;return S>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+s.maxTextures),M+=1,S}function q(S){const _=[];return _.push(S.wrapS),_.push(S.wrapT),_.push(S.wrapR||0),_.push(S.magFilter),_.push(S.minFilter),_.push(S.anisotropy),_.push(S.internalFormat),_.push(S.format),_.push(S.type),_.push(S.generateMipmaps),_.push(S.premultiplyAlpha),_.push(S.flipY),_.push(S.unpackAlignment),_.push(S.colorSpace),_.join()}function J(S,_){const P=i.get(S);if(S.isVideoTexture&&F(S),S.isRenderTargetTexture===!1&&S.version>0&&P.__version!==S.version){const N=S.image;if(N===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(N.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Yt(P,S,_);return}}e.bindTexture(n.TEXTURE_2D,P.__webglTexture,n.TEXTURE0+_)}function nt(S,_){const P=i.get(S);if(S.version>0&&P.__version!==S.version){Yt(P,S,_);return}e.bindTexture(n.TEXTURE_2D_ARRAY,P.__webglTexture,n.TEXTURE0+_)}function W(S,_){const P=i.get(S);if(S.version>0&&P.__version!==S.version){Yt(P,S,_);return}e.bindTexture(n.TEXTURE_3D,P.__webglTexture,n.TEXTURE0+_)}function tt(S,_){const P=i.get(S);if(S.version>0&&P.__version!==S.version){et(P,S,_);return}e.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+_)}const X={[dl]:n.REPEAT,[Ni]:n.CLAMP_TO_EDGE,[pl]:n.MIRRORED_REPEAT},dt={[rn]:n.NEAREST,[Og]:n.NEAREST_MIPMAP_NEAREST,[Ar]:n.NEAREST_MIPMAP_LINEAR,[mn]:n.LINEAR,[ua]:n.LINEAR_MIPMAP_NEAREST,[Oi]:n.LINEAR_MIPMAP_LINEAR},xt={[Hg]:n.NEVER,[qg]:n.ALWAYS,[Vg]:n.LESS,[sd]:n.LEQUAL,[Gg]:n.EQUAL,[Xg]:n.GEQUAL,[kg]:n.GREATER,[Wg]:n.NOTEQUAL};function mt(S,_){if(_.type===Yn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===mn||_.magFilter===ua||_.magFilter===Ar||_.magFilter===Oi||_.minFilter===mn||_.minFilter===ua||_.minFilter===Ar||_.minFilter===Oi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(S,n.TEXTURE_WRAP_S,X[_.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,X[_.wrapT]),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,X[_.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,dt[_.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,dt[_.minFilter]),_.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,xt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===rn||_.minFilter!==Ar&&_.minFilter!==Oi||_.type===Yn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const P=t.get("EXT_texture_filter_anisotropic");n.texParameterf(S,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function Bt(S,_){let P=!1;S.__webglInit===void 0&&(S.__webglInit=!0,_.addEventListener("dispose",O));const N=_.source;let k=u.get(N);k===void 0&&(k={},u.set(N,k));const G=q(_);if(G!==S.__cacheKey){k[G]===void 0&&(k[G]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,P=!0),k[G].usedTimes++;const lt=k[S.__cacheKey];lt!==void 0&&(k[S.__cacheKey].usedTimes--,lt.usedTimes===0&&H(_)),S.__cacheKey=G,S.__webglTexture=k[G].texture}return P}function Yt(S,_,P){let N=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(N=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(N=n.TEXTURE_3D);const k=Bt(S,_),G=_.source;e.bindTexture(N,S.__webglTexture,n.TEXTURE0+P);const lt=i.get(G);if(G.version!==lt.__version||k===!0){e.activeTexture(n.TEXTURE0+P);const rt=te.getPrimaries(te.workingColorSpace),at=_.colorSpace===hi?null:te.getPrimaries(_.colorSpace),Pt=_.colorSpace===hi||rt===at?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);let it=x(_.image,!1,s.maxTextureSize);it=Z(_,it);const pt=r.convert(_.format,_.colorSpace),Ct=r.convert(_.type);let Nt=w(_.internalFormat,pt,Ct,_.colorSpace,_.isVideoTexture);mt(N,_);let Tt;const Ft=_.mipmaps,Dt=_.isVideoTexture!==!0,ee=lt.__version===void 0||k===!0,U=G.dataReady,Et=E(_,it);if(_.isDepthTexture)Nt=y(_.format===Cs,_.type),ee&&(Dt?e.texStorage2D(n.TEXTURE_2D,1,Nt,it.width,it.height):e.texImage2D(n.TEXTURE_2D,0,Nt,it.width,it.height,0,pt,Ct,null));else if(_.isDataTexture)if(Ft.length>0){Dt&&ee&&e.texStorage2D(n.TEXTURE_2D,Et,Nt,Ft[0].width,Ft[0].height);for(let Q=0,st=Ft.length;Q<st;Q++)Tt=Ft[Q],Dt?U&&e.texSubImage2D(n.TEXTURE_2D,Q,0,0,Tt.width,Tt.height,pt,Ct,Tt.data):e.texImage2D(n.TEXTURE_2D,Q,Nt,Tt.width,Tt.height,0,pt,Ct,Tt.data);_.generateMipmaps=!1}else Dt?(ee&&e.texStorage2D(n.TEXTURE_2D,Et,Nt,it.width,it.height),U&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,it.width,it.height,pt,Ct,it.data)):e.texImage2D(n.TEXTURE_2D,0,Nt,it.width,it.height,0,pt,Ct,it.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Dt&&ee&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Et,Nt,Ft[0].width,Ft[0].height,it.depth);for(let Q=0,st=Ft.length;Q<st;Q++)if(Tt=Ft[Q],_.format!==_n)if(pt!==null)if(Dt){if(U)if(_.layerUpdates.size>0){const St=ph(Tt.width,Tt.height,_.format,_.type);for(const bt of _.layerUpdates){const Kt=Tt.data.subarray(bt*St/Tt.data.BYTES_PER_ELEMENT,(bt+1)*St/Tt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,bt,Tt.width,Tt.height,1,pt,Kt,0,0)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,Tt.width,Tt.height,it.depth,pt,Tt.data,0,0)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Q,Nt,Tt.width,Tt.height,it.depth,0,Tt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Dt?U&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,Tt.width,Tt.height,it.depth,pt,Ct,Tt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,Q,Nt,Tt.width,Tt.height,it.depth,0,pt,Ct,Tt.data)}else{Dt&&ee&&e.texStorage2D(n.TEXTURE_2D,Et,Nt,Ft[0].width,Ft[0].height);for(let Q=0,st=Ft.length;Q<st;Q++)Tt=Ft[Q],_.format!==_n?pt!==null?Dt?U&&e.compressedTexSubImage2D(n.TEXTURE_2D,Q,0,0,Tt.width,Tt.height,pt,Tt.data):e.compressedTexImage2D(n.TEXTURE_2D,Q,Nt,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Dt?U&&e.texSubImage2D(n.TEXTURE_2D,Q,0,0,Tt.width,Tt.height,pt,Ct,Tt.data):e.texImage2D(n.TEXTURE_2D,Q,Nt,Tt.width,Tt.height,0,pt,Ct,Tt.data)}else if(_.isDataArrayTexture)if(Dt){if(ee&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Et,Nt,it.width,it.height,it.depth),U)if(_.layerUpdates.size>0){const Q=ph(it.width,it.height,_.format,_.type);for(const st of _.layerUpdates){const St=it.data.subarray(st*Q/it.data.BYTES_PER_ELEMENT,(st+1)*Q/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,st,it.width,it.height,1,pt,Ct,St)}_.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,pt,Ct,it.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Nt,it.width,it.height,it.depth,0,pt,Ct,it.data);else if(_.isData3DTexture)Dt?(ee&&e.texStorage3D(n.TEXTURE_3D,Et,Nt,it.width,it.height,it.depth),U&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,pt,Ct,it.data)):e.texImage3D(n.TEXTURE_3D,0,Nt,it.width,it.height,it.depth,0,pt,Ct,it.data);else if(_.isFramebufferTexture){if(ee)if(Dt)e.texStorage2D(n.TEXTURE_2D,Et,Nt,it.width,it.height);else{let Q=it.width,st=it.height;for(let St=0;St<Et;St++)e.texImage2D(n.TEXTURE_2D,St,Nt,Q,st,0,pt,Ct,null),Q>>=1,st>>=1}}else if(Ft.length>0){if(Dt&&ee){const Q=Y(Ft[0]);e.texStorage2D(n.TEXTURE_2D,Et,Nt,Q.width,Q.height)}for(let Q=0,st=Ft.length;Q<st;Q++)Tt=Ft[Q],Dt?U&&e.texSubImage2D(n.TEXTURE_2D,Q,0,0,pt,Ct,Tt):e.texImage2D(n.TEXTURE_2D,Q,Nt,pt,Ct,Tt);_.generateMipmaps=!1}else if(Dt){if(ee){const Q=Y(it);e.texStorage2D(n.TEXTURE_2D,Et,Nt,Q.width,Q.height)}U&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,pt,Ct,it)}else e.texImage2D(n.TEXTURE_2D,0,Nt,pt,Ct,it);p(_)&&m(N),lt.__version=G.version,_.onUpdate&&_.onUpdate(_)}S.__version=_.version}function et(S,_,P){if(_.image.length!==6)return;const N=Bt(S,_),k=_.source;e.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+P);const G=i.get(k);if(k.version!==G.__version||N===!0){e.activeTexture(n.TEXTURE0+P);const lt=te.getPrimaries(te.workingColorSpace),rt=_.colorSpace===hi?null:te.getPrimaries(_.colorSpace),at=_.colorSpace===hi||lt===rt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,at);const Pt=_.isCompressedTexture||_.image[0].isCompressedTexture,it=_.image[0]&&_.image[0].isDataTexture,pt=[];for(let st=0;st<6;st++)!Pt&&!it?pt[st]=x(_.image[st],!0,s.maxCubemapSize):pt[st]=it?_.image[st].image:_.image[st],pt[st]=Z(_,pt[st]);const Ct=pt[0],Nt=r.convert(_.format,_.colorSpace),Tt=r.convert(_.type),Ft=w(_.internalFormat,Nt,Tt,_.colorSpace),Dt=_.isVideoTexture!==!0,ee=G.__version===void 0||N===!0,U=k.dataReady;let Et=E(_,Ct);mt(n.TEXTURE_CUBE_MAP,_);let Q;if(Pt){Dt&&ee&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Et,Ft,Ct.width,Ct.height);for(let st=0;st<6;st++){Q=pt[st].mipmaps;for(let St=0;St<Q.length;St++){const bt=Q[St];_.format!==_n?Nt!==null?Dt?U&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,St,0,0,bt.width,bt.height,Nt,bt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,St,Ft,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Dt?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,St,0,0,bt.width,bt.height,Nt,Tt,bt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,St,Ft,bt.width,bt.height,0,Nt,Tt,bt.data)}}}else{if(Q=_.mipmaps,Dt&&ee){Q.length>0&&Et++;const st=Y(pt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Et,Ft,st.width,st.height)}for(let st=0;st<6;st++)if(it){Dt?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,pt[st].width,pt[st].height,Nt,Tt,pt[st].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Ft,pt[st].width,pt[st].height,0,Nt,Tt,pt[st].data);for(let St=0;St<Q.length;St++){const Kt=Q[St].image[st].image;Dt?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,St+1,0,0,Kt.width,Kt.height,Nt,Tt,Kt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,St+1,Ft,Kt.width,Kt.height,0,Nt,Tt,Kt.data)}}else{Dt?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Nt,Tt,pt[st]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Ft,Nt,Tt,pt[st]);for(let St=0;St<Q.length;St++){const bt=Q[St];Dt?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,St+1,0,0,Nt,Tt,bt.image[st]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,St+1,Ft,Nt,Tt,bt.image[st])}}}p(_)&&m(n.TEXTURE_CUBE_MAP),G.__version=k.version,_.onUpdate&&_.onUpdate(_)}S.__version=_.version}function ct(S,_,P,N,k,G){const lt=r.convert(P.format,P.colorSpace),rt=r.convert(P.type),at=w(P.internalFormat,lt,rt,P.colorSpace);if(!i.get(_).__hasExternalTextures){const it=Math.max(1,_.width>>G),pt=Math.max(1,_.height>>G);k===n.TEXTURE_3D||k===n.TEXTURE_2D_ARRAY?e.texImage3D(k,G,at,it,pt,_.depth,0,lt,rt,null):e.texImage2D(k,G,at,it,pt,0,lt,rt,null)}e.bindFramebuffer(n.FRAMEBUFFER,S),I(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,N,k,i.get(P).__webglTexture,0,z(_)):(k===n.TEXTURE_2D||k>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&k<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,N,k,i.get(P).__webglTexture,G),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Mt(S,_,P){if(n.bindRenderbuffer(n.RENDERBUFFER,S),_.depthBuffer){const N=_.depthTexture,k=N&&N.isDepthTexture?N.type:null,G=y(_.stencilBuffer,k),lt=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,rt=z(_);I(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,rt,G,_.width,_.height):P?n.renderbufferStorageMultisample(n.RENDERBUFFER,rt,G,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,G,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,lt,n.RENDERBUFFER,S)}else{const N=_.textures;for(let k=0;k<N.length;k++){const G=N[k],lt=r.convert(G.format,G.colorSpace),rt=r.convert(G.type),at=w(G.internalFormat,lt,rt,G.colorSpace),Pt=z(_);P&&I(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Pt,at,_.width,_.height):I(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Pt,at,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,at,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ht(S,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,S),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),J(_.depthTexture,0);const N=i.get(_.depthTexture).__webglTexture,k=z(_);if(_.depthTexture.format===xs)I(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,N,0,k):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,N,0);else if(_.depthTexture.format===Cs)I(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,N,0,k):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,N,0);else throw new Error("Unknown depthTexture format")}function It(S){const _=i.get(S),P=S.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==S.depthTexture){const N=S.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),N){const k=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,N.removeEventListener("dispose",k)};N.addEventListener("dispose",k),_.__depthDisposeCallback=k}_.__boundDepthTexture=N}if(S.depthTexture&&!_.__autoAllocateDepthBuffer){if(P)throw new Error("target.depthTexture not supported in Cube render targets");ht(_.__webglFramebuffer,S)}else if(P){_.__webglDepthbuffer=[];for(let N=0;N<6;N++)if(e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[N]),_.__webglDepthbuffer[N]===void 0)_.__webglDepthbuffer[N]=n.createRenderbuffer(),Mt(_.__webglDepthbuffer[N],S,!1);else{const k=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,G=_.__webglDepthbuffer[N];n.bindRenderbuffer(n.RENDERBUFFER,G),n.framebufferRenderbuffer(n.FRAMEBUFFER,k,n.RENDERBUFFER,G)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),Mt(_.__webglDepthbuffer,S,!1);else{const N=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,k=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,k),n.framebufferRenderbuffer(n.FRAMEBUFFER,N,n.RENDERBUFFER,k)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ut(S,_,P){const N=i.get(S);_!==void 0&&ct(N.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),P!==void 0&&It(S)}function Ot(S){const _=S.texture,P=i.get(S),N=i.get(_);S.addEventListener("dispose",R);const k=S.textures,G=S.isWebGLCubeRenderTarget===!0,lt=k.length>1;if(lt||(N.__webglTexture===void 0&&(N.__webglTexture=n.createTexture()),N.__version=_.version,o.memory.textures++),G){P.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(_.mipmaps&&_.mipmaps.length>0){P.__webglFramebuffer[rt]=[];for(let at=0;at<_.mipmaps.length;at++)P.__webglFramebuffer[rt][at]=n.createFramebuffer()}else P.__webglFramebuffer[rt]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){P.__webglFramebuffer=[];for(let rt=0;rt<_.mipmaps.length;rt++)P.__webglFramebuffer[rt]=n.createFramebuffer()}else P.__webglFramebuffer=n.createFramebuffer();if(lt)for(let rt=0,at=k.length;rt<at;rt++){const Pt=i.get(k[rt]);Pt.__webglTexture===void 0&&(Pt.__webglTexture=n.createTexture(),o.memory.textures++)}if(S.samples>0&&I(S)===!1){P.__webglMultisampledFramebuffer=n.createFramebuffer(),P.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let rt=0;rt<k.length;rt++){const at=k[rt];P.__webglColorRenderbuffer[rt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,P.__webglColorRenderbuffer[rt]);const Pt=r.convert(at.format,at.colorSpace),it=r.convert(at.type),pt=w(at.internalFormat,Pt,it,at.colorSpace,S.isXRRenderTarget===!0),Ct=z(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ct,pt,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+rt,n.RENDERBUFFER,P.__webglColorRenderbuffer[rt])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(P.__webglDepthRenderbuffer=n.createRenderbuffer(),Mt(P.__webglDepthRenderbuffer,S,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(G){e.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture),mt(n.TEXTURE_CUBE_MAP,_);for(let rt=0;rt<6;rt++)if(_.mipmaps&&_.mipmaps.length>0)for(let at=0;at<_.mipmaps.length;at++)ct(P.__webglFramebuffer[rt][at],S,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,at);else ct(P.__webglFramebuffer[rt],S,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);p(_)&&m(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(lt){for(let rt=0,at=k.length;rt<at;rt++){const Pt=k[rt],it=i.get(Pt);e.bindTexture(n.TEXTURE_2D,it.__webglTexture),mt(n.TEXTURE_2D,Pt),ct(P.__webglFramebuffer,S,Pt,n.COLOR_ATTACHMENT0+rt,n.TEXTURE_2D,0),p(Pt)&&m(n.TEXTURE_2D)}e.unbindTexture()}else{let rt=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(rt=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(rt,N.__webglTexture),mt(rt,_),_.mipmaps&&_.mipmaps.length>0)for(let at=0;at<_.mipmaps.length;at++)ct(P.__webglFramebuffer[at],S,_,n.COLOR_ATTACHMENT0,rt,at);else ct(P.__webglFramebuffer,S,_,n.COLOR_ATTACHMENT0,rt,0);p(_)&&m(rt),e.unbindTexture()}S.depthBuffer&&It(S)}function Xt(S){const _=S.textures;for(let P=0,N=_.length;P<N;P++){const k=_[P];if(p(k)){const G=S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,lt=i.get(k).__webglTexture;e.bindTexture(G,lt),m(G),e.unbindTexture()}}}const b=[],v=[];function L(S){if(S.samples>0){if(I(S)===!1){const _=S.textures,P=S.width,N=S.height;let k=n.COLOR_BUFFER_BIT;const G=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,lt=i.get(S),rt=_.length>1;if(rt)for(let at=0;at<_.length;at++)e.bindFramebuffer(n.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+at,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,lt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+at,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,lt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,lt.__webglFramebuffer);for(let at=0;at<_.length;at++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(k|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(k|=n.STENCIL_BUFFER_BIT)),rt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,lt.__webglColorRenderbuffer[at]);const Pt=i.get(_[at]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Pt,0)}n.blitFramebuffer(0,0,P,N,0,0,P,N,k,n.NEAREST),l===!0&&(b.length=0,v.length=0,b.push(n.COLOR_ATTACHMENT0+at),S.depthBuffer&&S.resolveDepthBuffer===!1&&(b.push(G),v.push(G),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,v)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,b))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),rt)for(let at=0;at<_.length;at++){e.bindFramebuffer(n.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+at,n.RENDERBUFFER,lt.__webglColorRenderbuffer[at]);const Pt=i.get(_[at]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,lt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+at,n.TEXTURE_2D,Pt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,lt.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&l){const _=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function z(S){return Math.min(s.maxSamples,S.samples)}function I(S){const _=i.get(S);return S.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function F(S){const _=o.render.frame;h.get(S)!==_&&(h.set(S,_),S.update())}function Z(S,_){const P=S.colorSpace,N=S.format,k=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||P!==_i&&P!==hi&&(te.getTransfer(P)===le?(N!==_n||k!==ti)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",P)),_}function Y(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(c.width=S.naturalWidth||S.width,c.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(c.width=S.displayWidth,c.height=S.displayHeight):(c.width=S.width,c.height=S.height),c}this.allocateTextureUnit=j,this.resetTextureUnits=T,this.setTexture2D=J,this.setTexture2DArray=nt,this.setTexture3D=W,this.setTextureCube=tt,this.rebindTextures=Ut,this.setupRenderTarget=Ot,this.updateRenderTargetMipmap=Xt,this.updateMultisampleRenderTarget=L,this.setupDepthRenderbuffer=It,this.setupFrameBufferTexture=ct,this.useMultisampledRTT=I}function fS(n,t){function e(i,s=hi){let r;const o=te.getTransfer(s);if(i===ti)return n.UNSIGNED_BYTE;if(i===mc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===gc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===$f)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Yf)return n.BYTE;if(i===Kf)return n.SHORT;if(i===or)return n.UNSIGNED_SHORT;if(i===pc)return n.INT;if(i===Vi)return n.UNSIGNED_INT;if(i===Yn)return n.FLOAT;if(i===mr)return n.HALF_FLOAT;if(i===jf)return n.ALPHA;if(i===Jf)return n.RGB;if(i===_n)return n.RGBA;if(i===Zf)return n.LUMINANCE;if(i===Qf)return n.LUMINANCE_ALPHA;if(i===xs)return n.DEPTH_COMPONENT;if(i===Cs)return n.DEPTH_STENCIL;if(i===td)return n.RED;if(i===_c)return n.RED_INTEGER;if(i===ed)return n.RG;if(i===vc)return n.RG_INTEGER;if(i===xc)return n.RGBA_INTEGER;if(i===so||i===ro||i===oo||i===ao)if(o===le)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===so)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ro)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===oo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ao)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===so)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ro)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===oo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ao)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ml||i===gl||i===_l||i===vl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ml)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===gl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===_l)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===vl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===xl||i===Ml||i===Sl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===xl||i===Ml)return o===le?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Sl)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===yl||i===El||i===bl||i===Tl||i===Al||i===wl||i===Cl||i===Rl||i===Pl||i===Ll||i===Dl||i===Il||i===Ul||i===Nl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===yl)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===El)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===bl)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Tl)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Al)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===wl)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Cl)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Rl)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Pl)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ll)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Dl)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Il)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ul)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Nl)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===lo||i===Ol||i===Fl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===lo)return o===le?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ol)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Fl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===nd||i===Bl||i===zl||i===Hl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===lo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Bl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===zl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Hl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ws?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class dS extends dn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Cn extends Me{constructor(){super(),this.isGroup=!0,this.type="Group"}}const pS={type:"move"};class za{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Cn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Cn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Cn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const x of t.hand.values()){const p=e.getJointPose(x,i),m=this._getHandJoint(c,x);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&u>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(pS)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Cn;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const mS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gS=`
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

}`;class _S{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new qe,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new gi({vertexShader:mS,fragmentShader:gS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ge(new ko(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class vS extends Ps{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,g=null;const x=new _S,p=e.getContextAttributes();let m=null,w=null;const y=[],E=[],O=new ft;let R=null;const C=new dn;C.layers.enable(1),C.viewport=new fe;const H=new dn;H.layers.enable(2),H.viewport=new fe;const ot=[C,H],M=new dS;M.layers.enable(1),M.layers.enable(2);let T=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(et){let ct=y[et];return ct===void 0&&(ct=new za,y[et]=ct),ct.getTargetRaySpace()},this.getControllerGrip=function(et){let ct=y[et];return ct===void 0&&(ct=new za,y[et]=ct),ct.getGripSpace()},this.getHand=function(et){let ct=y[et];return ct===void 0&&(ct=new za,y[et]=ct),ct.getHandSpace()};function q(et){const ct=E.indexOf(et.inputSource);if(ct===-1)return;const Mt=y[ct];Mt!==void 0&&(Mt.update(et.inputSource,et.frame,c||o),Mt.dispatchEvent({type:et.type,data:et.inputSource}))}function J(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",nt);for(let et=0;et<y.length;et++){const ct=E[et];ct!==null&&(E[et]=null,y[et].disconnect(ct))}T=null,j=null,x.reset(),t.setRenderTarget(m),d=null,u=null,f=null,s=null,w=null,Yt.stop(),i.isPresenting=!1,t.setPixelRatio(R),t.setSize(O.width,O.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(et){r=et,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(et){a=et,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(et){c=et},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(et){if(s=et,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",J),s.addEventListener("inputsourceschange",nt),p.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(O),s.renderState.layers===void 0){const ct={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,ct),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),w=new Gi(d.framebufferWidth,d.framebufferHeight,{format:_n,type:ti,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let ct=null,Mt=null,ht=null;p.depth&&(ht=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ct=p.stencil?Cs:xs,Mt=p.stencil?ws:Vi);const It={colorFormat:e.RGBA8,depthFormat:ht,scaleFactor:r};f=new XRWebGLBinding(s,e),u=f.createProjectionLayer(It),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),w=new Gi(u.textureWidth,u.textureHeight,{format:_n,type:ti,depthTexture:new md(u.textureWidth,u.textureHeight,Mt,void 0,void 0,void 0,void 0,void 0,void 0,ct),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Yt.setContext(s),Yt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function nt(et){for(let ct=0;ct<et.removed.length;ct++){const Mt=et.removed[ct],ht=E.indexOf(Mt);ht>=0&&(E[ht]=null,y[ht].disconnect(Mt))}for(let ct=0;ct<et.added.length;ct++){const Mt=et.added[ct];let ht=E.indexOf(Mt);if(ht===-1){for(let Ut=0;Ut<y.length;Ut++)if(Ut>=E.length){E.push(Mt),ht=Ut;break}else if(E[Ut]===null){E[Ut]=Mt,ht=Ut;break}if(ht===-1)break}const It=y[ht];It&&It.connect(Mt)}}const W=new D,tt=new D;function X(et,ct,Mt){W.setFromMatrixPosition(ct.matrixWorld),tt.setFromMatrixPosition(Mt.matrixWorld);const ht=W.distanceTo(tt),It=ct.projectionMatrix.elements,Ut=Mt.projectionMatrix.elements,Ot=It[14]/(It[10]-1),Xt=It[14]/(It[10]+1),b=(It[9]+1)/It[5],v=(It[9]-1)/It[5],L=(It[8]-1)/It[0],z=(Ut[8]+1)/Ut[0],I=Ot*L,F=Ot*z,Z=ht/(-L+z),Y=Z*-L;if(ct.matrixWorld.decompose(et.position,et.quaternion,et.scale),et.translateX(Y),et.translateZ(Z),et.matrixWorld.compose(et.position,et.quaternion,et.scale),et.matrixWorldInverse.copy(et.matrixWorld).invert(),It[10]===-1)et.projectionMatrix.copy(ct.projectionMatrix),et.projectionMatrixInverse.copy(ct.projectionMatrixInverse);else{const S=Ot+Z,_=Xt+Z,P=I-Y,N=F+(ht-Y),k=b*Xt/_*S,G=v*Xt/_*S;et.projectionMatrix.makePerspective(P,N,k,G,S,_),et.projectionMatrixInverse.copy(et.projectionMatrix).invert()}}function dt(et,ct){ct===null?et.matrixWorld.copy(et.matrix):et.matrixWorld.multiplyMatrices(ct.matrixWorld,et.matrix),et.matrixWorldInverse.copy(et.matrixWorld).invert()}this.updateCamera=function(et){if(s===null)return;let ct=et.near,Mt=et.far;x.texture!==null&&(x.depthNear>0&&(ct=x.depthNear),x.depthFar>0&&(Mt=x.depthFar)),M.near=H.near=C.near=ct,M.far=H.far=C.far=Mt,(T!==M.near||j!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),T=M.near,j=M.far);const ht=et.parent,It=M.cameras;dt(M,ht);for(let Ut=0;Ut<It.length;Ut++)dt(It[Ut],ht);It.length===2?X(M,C,H):M.projectionMatrix.copy(C.projectionMatrix),xt(et,M,ht)};function xt(et,ct,Mt){Mt===null?et.matrix.copy(ct.matrixWorld):(et.matrix.copy(Mt.matrixWorld),et.matrix.invert(),et.matrix.multiply(ct.matrixWorld)),et.matrix.decompose(et.position,et.quaternion,et.scale),et.updateMatrixWorld(!0),et.projectionMatrix.copy(ct.projectionMatrix),et.projectionMatrixInverse.copy(ct.projectionMatrixInverse),et.isPerspectiveCamera&&(et.fov=ar*2*Math.atan(1/et.projectionMatrix.elements[5]),et.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(et){l=et,u!==null&&(u.fixedFoveation=et),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=et)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(M)};let mt=null;function Bt(et,ct){if(h=ct.getViewerPose(c||o),g=ct,h!==null){const Mt=h.views;d!==null&&(t.setRenderTargetFramebuffer(w,d.framebuffer),t.setRenderTarget(w));let ht=!1;Mt.length!==M.cameras.length&&(M.cameras.length=0,ht=!0);for(let Ut=0;Ut<Mt.length;Ut++){const Ot=Mt[Ut];let Xt=null;if(d!==null)Xt=d.getViewport(Ot);else{const v=f.getViewSubImage(u,Ot);Xt=v.viewport,Ut===0&&(t.setRenderTargetTextures(w,v.colorTexture,u.ignoreDepthValues?void 0:v.depthStencilTexture),t.setRenderTarget(w))}let b=ot[Ut];b===void 0&&(b=new dn,b.layers.enable(Ut),b.viewport=new fe,ot[Ut]=b),b.matrix.fromArray(Ot.transform.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale),b.projectionMatrix.fromArray(Ot.projectionMatrix),b.projectionMatrixInverse.copy(b.projectionMatrix).invert(),b.viewport.set(Xt.x,Xt.y,Xt.width,Xt.height),Ut===0&&(M.matrix.copy(b.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ht===!0&&M.cameras.push(b)}const It=s.enabledFeatures;if(It&&It.includes("depth-sensing")){const Ut=f.getDepthInformation(Mt[0]);Ut&&Ut.isValid&&Ut.texture&&x.init(t,Ut,s.renderState)}}for(let Mt=0;Mt<y.length;Mt++){const ht=E[Mt],It=y[Mt];ht!==null&&It!==void 0&&It.update(ht,ct,c||o)}mt&&mt(et,ct),ct.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ct}),g=null}const Yt=new pd;Yt.setAnimationLoop(Bt),this.setAnimationLoop=function(et){mt=et},this.dispose=function(){}}}const wi=new Dn,xS=new oe;function MS(n,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,hd(n)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,w,y,E){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),f(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m)):m.isMeshStandardMaterial?(r(p,m),u(p,m),m.isMeshPhysicalMaterial&&d(p,m,E)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),x(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,w,y):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Xe&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Xe&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const w=t.get(m),y=w.envMap,E=w.envMapRotation;y&&(p.envMap.value=y,wi.copy(E),wi.x*=-1,wi.y*=-1,wi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(wi.y*=-1,wi.z*=-1),p.envMapRotation.value.setFromMatrix4(xS.makeRotationFromEuler(wi)),p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,w,y){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*w,p.scale.value=y*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function f(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,w){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Xe&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=w.texture,p.transmissionSamplerSize.value.set(w.width,w.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function x(p,m){const w=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(w.matrixWorld),p.nearDistance.value=w.shadow.camera.near,p.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function SS(n,t,e,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,y){const E=y.program;i.uniformBlockBinding(w,E)}function c(w,y){let E=s[w.id];E===void 0&&(g(w),E=h(w),s[w.id]=E,w.addEventListener("dispose",p));const O=y.program;i.updateUBOMapping(w,O);const R=t.render.frame;r[w.id]!==R&&(u(w),r[w.id]=R)}function h(w){const y=f();w.__bindingPointIndex=y;const E=n.createBuffer(),O=w.__size,R=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,O,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,E),E}function f(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(w){const y=s[w.id],E=w.uniforms,O=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let R=0,C=E.length;R<C;R++){const H=Array.isArray(E[R])?E[R]:[E[R]];for(let ot=0,M=H.length;ot<M;ot++){const T=H[ot];if(d(T,R,ot,O)===!0){const j=T.__offset,q=Array.isArray(T.value)?T.value:[T.value];let J=0;for(let nt=0;nt<q.length;nt++){const W=q[nt],tt=x(W);typeof W=="number"||typeof W=="boolean"?(T.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,j+J,T.__data)):W.isMatrix3?(T.__data[0]=W.elements[0],T.__data[1]=W.elements[1],T.__data[2]=W.elements[2],T.__data[3]=0,T.__data[4]=W.elements[3],T.__data[5]=W.elements[4],T.__data[6]=W.elements[5],T.__data[7]=0,T.__data[8]=W.elements[6],T.__data[9]=W.elements[7],T.__data[10]=W.elements[8],T.__data[11]=0):(W.toArray(T.__data,J),J+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,j,T.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(w,y,E,O){const R=w.value,C=y+"_"+E;if(O[C]===void 0)return typeof R=="number"||typeof R=="boolean"?O[C]=R:O[C]=R.clone(),!0;{const H=O[C];if(typeof R=="number"||typeof R=="boolean"){if(H!==R)return O[C]=R,!0}else if(H.equals(R)===!1)return H.copy(R),!0}return!1}function g(w){const y=w.uniforms;let E=0;const O=16;for(let C=0,H=y.length;C<H;C++){const ot=Array.isArray(y[C])?y[C]:[y[C]];for(let M=0,T=ot.length;M<T;M++){const j=ot[M],q=Array.isArray(j.value)?j.value:[j.value];for(let J=0,nt=q.length;J<nt;J++){const W=q[J],tt=x(W),X=E%O,dt=X%tt.boundary,xt=X+dt;E+=dt,xt!==0&&O-xt<tt.storage&&(E+=O-xt),j.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=E,E+=tt.storage}}}const R=E%O;return R>0&&(E+=O-R),w.__size=E,w.__cache={},this}function x(w){const y={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(y.boundary=4,y.storage=4):w.isVector2?(y.boundary=8,y.storage=8):w.isVector3||w.isColor?(y.boundary=16,y.storage=12):w.isVector4?(y.boundary=16,y.storage=16):w.isMatrix3?(y.boundary=48,y.storage=48):w.isMatrix4?(y.boundary=64,y.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),y}function p(w){const y=w.target;y.removeEventListener("dispose",p);const E=o.indexOf(y.__bindingPointIndex);o.splice(E,1),n.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function m(){for(const w in s)n.deleteBuffer(s[w]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}class yS{constructor(t={}){const{canvas:e=c_(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=t;this.isWebGLRenderer=!0;let u;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=i.getContextAttributes().alpha}else u=o;const d=new Uint32Array(4),g=new Int32Array(4);let x=null,p=null;const m=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=bn,this.toneMapping=di,this.toneMappingExposure=1;const y=this;let E=!1,O=0,R=0,C=null,H=-1,ot=null;const M=new fe,T=new fe;let j=null;const q=new qt(0);let J=0,nt=e.width,W=e.height,tt=1,X=null,dt=null;const xt=new fe(0,0,nt,W),mt=new fe(0,0,nt,W);let Bt=!1;const Yt=new Ec;let et=!1,ct=!1;const Mt=new oe,ht=new oe,It=new D,Ut=new fe,Ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xt=!1;function b(){return C===null?tt:1}let v=i;function L(A,B){return e.getContext(A,B)}try{const A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${dc}`),e.addEventListener("webglcontextlost",st,!1),e.addEventListener("webglcontextrestored",St,!1),e.addEventListener("webglcontextcreationerror",bt,!1),v===null){const B="webgl2";if(v=L(B,A),v===null)throw L(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let z,I,F,Z,Y,S,_,P,N,k,G,lt,rt,at,Pt,it,pt,Ct,Nt,Tt,Ft,Dt,ee,U;function Et(){z=new wx(v),z.init(),Dt=new fS(v,z),I=new Sx(v,z,t,Dt),F=new cS(v),I.reverseDepthBuffer&&F.buffers.depth.setReversed(!0),Z=new Px(v),Y=new KM,S=new hS(v,z,F,Y,I,Dt,Z),_=new Ex(y),P=new Ax(y),N=new F_(v),ee=new xx(v,N),k=new Cx(v,N,Z,ee),G=new Dx(v,k,N,Z),Nt=new Lx(v,I,S),it=new yx(Y),lt=new YM(y,_,P,z,I,ee,it),rt=new MS(y,Y),at=new jM,Pt=new nS(z),Ct=new vx(y,_,P,F,G,u,l),pt=new aS(y,G,I),U=new SS(v,Z,I,F),Tt=new Mx(v,z,Z),Ft=new Rx(v,z,Z),Z.programs=lt.programs,y.capabilities=I,y.extensions=z,y.properties=Y,y.renderLists=at,y.shadowMap=pt,y.state=F,y.info=Z}Et();const Q=new vS(y,v);this.xr=Q,this.getContext=function(){return v},this.getContextAttributes=function(){return v.getContextAttributes()},this.forceContextLoss=function(){const A=z.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=z.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return tt},this.setPixelRatio=function(A){A!==void 0&&(tt=A,this.setSize(nt,W,!1))},this.getSize=function(A){return A.set(nt,W)},this.setSize=function(A,B,K=!0){if(Q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}nt=A,W=B,e.width=Math.floor(A*tt),e.height=Math.floor(B*tt),K===!0&&(e.style.width=A+"px",e.style.height=B+"px"),this.setViewport(0,0,A,B)},this.getDrawingBufferSize=function(A){return A.set(nt*tt,W*tt).floor()},this.setDrawingBufferSize=function(A,B,K){nt=A,W=B,tt=K,e.width=Math.floor(A*K),e.height=Math.floor(B*K),this.setViewport(0,0,A,B)},this.getCurrentViewport=function(A){return A.copy(M)},this.getViewport=function(A){return A.copy(xt)},this.setViewport=function(A,B,K,$){A.isVector4?xt.set(A.x,A.y,A.z,A.w):xt.set(A,B,K,$),F.viewport(M.copy(xt).multiplyScalar(tt).round())},this.getScissor=function(A){return A.copy(mt)},this.setScissor=function(A,B,K,$){A.isVector4?mt.set(A.x,A.y,A.z,A.w):mt.set(A,B,K,$),F.scissor(T.copy(mt).multiplyScalar(tt).round())},this.getScissorTest=function(){return Bt},this.setScissorTest=function(A){F.setScissorTest(Bt=A)},this.setOpaqueSort=function(A){X=A},this.setTransparentSort=function(A){dt=A},this.getClearColor=function(A){return A.copy(Ct.getClearColor())},this.setClearColor=function(){Ct.setClearColor.apply(Ct,arguments)},this.getClearAlpha=function(){return Ct.getClearAlpha()},this.setClearAlpha=function(){Ct.setClearAlpha.apply(Ct,arguments)},this.clear=function(A=!0,B=!0,K=!0){let $=0;if(A){let V=!1;if(C!==null){const ut=C.texture.format;V=ut===xc||ut===vc||ut===_c}if(V){const ut=C.texture.type,yt=ut===ti||ut===Vi||ut===or||ut===ws||ut===mc||ut===gc,At=Ct.getClearColor(),wt=Ct.getClearAlpha(),zt=At.r,Ht=At.g,Rt=At.b;yt?(d[0]=zt,d[1]=Ht,d[2]=Rt,d[3]=wt,v.clearBufferuiv(v.COLOR,0,d)):(g[0]=zt,g[1]=Ht,g[2]=Rt,g[3]=wt,v.clearBufferiv(v.COLOR,0,g))}else $|=v.COLOR_BUFFER_BIT}B&&($|=v.DEPTH_BUFFER_BIT,v.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),K&&($|=v.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),v.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",st,!1),e.removeEventListener("webglcontextrestored",St,!1),e.removeEventListener("webglcontextcreationerror",bt,!1),at.dispose(),Pt.dispose(),Y.dispose(),_.dispose(),P.dispose(),G.dispose(),ee.dispose(),U.dispose(),lt.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",Dc),Q.removeEventListener("sessionend",Ic),vi.stop()};function st(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function St(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const A=Z.autoReset,B=pt.enabled,K=pt.autoUpdate,$=pt.needsUpdate,V=pt.type;Et(),Z.autoReset=A,pt.enabled=B,pt.autoUpdate=K,pt.needsUpdate=$,pt.type=V}function bt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Kt(A){const B=A.target;B.removeEventListener("dispose",Kt),_e(B)}function _e(A){Ge(A),Y.remove(A)}function Ge(A){const B=Y.get(A).programs;B!==void 0&&(B.forEach(function(K){lt.releaseProgram(K)}),A.isShaderMaterial&&lt.releaseShaderCache(A))}this.renderBufferDirect=function(A,B,K,$,V,ut){B===null&&(B=Ot);const yt=V.isMesh&&V.matrixWorld.determinant()<0,At=Rd(A,B,K,$,V);F.setMaterial($,yt);let wt=K.index,zt=1;if($.wireframe===!0){if(wt=k.getWireframeAttribute(K),wt===void 0)return;zt=2}const Ht=K.drawRange,Rt=K.attributes.position;let ne=Ht.start*zt,ae=(Ht.start+Ht.count)*zt;ut!==null&&(ne=Math.max(ne,ut.start*zt),ae=Math.min(ae,(ut.start+ut.count)*zt)),wt!==null?(ne=Math.max(ne,0),ae=Math.min(ae,wt.count)):Rt!=null&&(ne=Math.max(ne,0),ae=Math.min(ae,Rt.count));const he=ae-ne;if(he<0||he===1/0)return;ee.setup(V,$,At,K,wt);let Ye,jt=Tt;if(wt!==null&&(Ye=N.get(wt),jt=Ft,jt.setIndex(Ye)),V.isMesh)$.wireframe===!0?(F.setLineWidth($.wireframeLinewidth*b()),jt.setMode(v.LINES)):jt.setMode(v.TRIANGLES);else if(V.isLine){let Lt=$.linewidth;Lt===void 0&&(Lt=1),F.setLineWidth(Lt*b()),V.isLineSegments?jt.setMode(v.LINES):V.isLineLoop?jt.setMode(v.LINE_LOOP):jt.setMode(v.LINE_STRIP)}else V.isPoints?jt.setMode(v.POINTS):V.isSprite&&jt.setMode(v.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)jt.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(z.get("WEBGL_multi_draw"))jt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Lt=V._multiDrawStarts,we=V._multiDrawCounts,Jt=V._multiDrawCount,ln=wt?N.get(wt).bytesPerElement:1,Yi=Y.get($).currentProgram.getUniforms();for(let Ke=0;Ke<Jt;Ke++)Yi.setValue(v,"_gl_DrawID",Ke),jt.render(Lt[Ke]/ln,we[Ke])}else if(V.isInstancedMesh)jt.renderInstances(ne,he,V.count);else if(K.isInstancedBufferGeometry){const Lt=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,we=Math.min(K.instanceCount,Lt);jt.renderInstances(ne,he,we)}else jt.render(ne,he)};function $t(A,B,K){A.transparent===!0&&A.side===Ze&&A.forceSinglePass===!1?(A.side=Xe,A.needsUpdate=!0,Mr(A,B,K),A.side=mi,A.needsUpdate=!0,Mr(A,B,K),A.side=Ze):Mr(A,B,K)}this.compile=function(A,B,K=null){K===null&&(K=A),p=Pt.get(K),p.init(B),w.push(p),K.traverseVisible(function(V){V.isLight&&V.layers.test(B.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),A!==K&&A.traverseVisible(function(V){V.isLight&&V.layers.test(B.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),p.setupLights();const $=new Set;return A.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const ut=V.material;if(ut)if(Array.isArray(ut))for(let yt=0;yt<ut.length;yt++){const At=ut[yt];$t(At,K,V),$.add(At)}else $t(ut,K,V),$.add(ut)}),w.pop(),p=null,$},this.compileAsync=function(A,B,K=null){const $=this.compile(A,B,K);return new Promise(V=>{function ut(){if($.forEach(function(yt){Y.get(yt).currentProgram.isReady()&&$.delete(yt)}),$.size===0){V(A);return}setTimeout(ut,10)}z.get("KHR_parallel_shader_compile")!==null?ut():setTimeout(ut,10)})};let ke=null;function Un(A){ke&&ke(A)}function Dc(){vi.stop()}function Ic(){vi.start()}const vi=new pd;vi.setAnimationLoop(Un),typeof self<"u"&&vi.setContext(self),this.setAnimationLoop=function(A){ke=A,Q.setAnimationLoop(A),A===null?vi.stop():vi.start()},Q.addEventListener("sessionstart",Dc),Q.addEventListener("sessionend",Ic),this.render=function(A,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(Q.cameraAutoUpdate===!0&&Q.updateCamera(B),B=Q.getCamera()),A.isScene===!0&&A.onBeforeRender(y,A,B,C),p=Pt.get(A,w.length),p.init(B),w.push(p),ht.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Yt.setFromProjectionMatrix(ht),ct=this.localClippingEnabled,et=it.init(this.clippingPlanes,ct),x=at.get(A,m.length),x.init(),m.push(x),Q.enabled===!0&&Q.isPresenting===!0){const ut=y.xr.getDepthSensingMesh();ut!==null&&Yo(ut,B,-1/0,y.sortObjects)}Yo(A,B,0,y.sortObjects),x.finish(),y.sortObjects===!0&&x.sort(X,dt),Xt=Q.enabled===!1||Q.isPresenting===!1||Q.hasDepthSensing()===!1,Xt&&Ct.addToRenderList(x,A),this.info.render.frame++,et===!0&&it.beginShadows();const K=p.state.shadowsArray;pt.render(K,A,B),et===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=x.opaque,V=x.transmissive;if(p.setupLights(),B.isArrayCamera){const ut=B.cameras;if(V.length>0)for(let yt=0,At=ut.length;yt<At;yt++){const wt=ut[yt];Nc($,V,A,wt)}Xt&&Ct.render(A);for(let yt=0,At=ut.length;yt<At;yt++){const wt=ut[yt];Uc(x,A,wt,wt.viewport)}}else V.length>0&&Nc($,V,A,B),Xt&&Ct.render(A),Uc(x,A,B);C!==null&&(S.updateMultisampleRenderTarget(C),S.updateRenderTargetMipmap(C)),A.isScene===!0&&A.onAfterRender(y,A,B),ee.resetDefaultState(),H=-1,ot=null,w.pop(),w.length>0?(p=w[w.length-1],et===!0&&it.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?x=m[m.length-1]:x=null};function Yo(A,B,K,$){if(A.visible===!1)return;if(A.layers.test(B.layers)){if(A.isGroup)K=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(B);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Yt.intersectsSprite(A)){$&&Ut.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ht);const yt=G.update(A),At=A.material;At.visible&&x.push(A,yt,At,K,Ut.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Yt.intersectsObject(A))){const yt=G.update(A),At=A.material;if($&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ut.copy(A.boundingSphere.center)):(yt.boundingSphere===null&&yt.computeBoundingSphere(),Ut.copy(yt.boundingSphere.center)),Ut.applyMatrix4(A.matrixWorld).applyMatrix4(ht)),Array.isArray(At)){const wt=yt.groups;for(let zt=0,Ht=wt.length;zt<Ht;zt++){const Rt=wt[zt],ne=At[Rt.materialIndex];ne&&ne.visible&&x.push(A,yt,ne,K,Ut.z,Rt)}}else At.visible&&x.push(A,yt,At,K,Ut.z,null)}}const ut=A.children;for(let yt=0,At=ut.length;yt<At;yt++)Yo(ut[yt],B,K,$)}function Uc(A,B,K,$){const V=A.opaque,ut=A.transmissive,yt=A.transparent;p.setupLightsView(K),et===!0&&it.setGlobalState(y.clippingPlanes,K),$&&F.viewport(M.copy($)),V.length>0&&xr(V,B,K),ut.length>0&&xr(ut,B,K),yt.length>0&&xr(yt,B,K),F.buffers.depth.setTest(!0),F.buffers.depth.setMask(!0),F.buffers.color.setMask(!0),F.setPolygonOffset(!1)}function Nc(A,B,K,$){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[$.id]===void 0&&(p.state.transmissionRenderTarget[$.id]=new Gi(1,1,{generateMipmaps:!0,type:z.has("EXT_color_buffer_half_float")||z.has("EXT_color_buffer_float")?mr:ti,minFilter:Oi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:te.workingColorSpace}));const ut=p.state.transmissionRenderTarget[$.id],yt=$.viewport||M;ut.setSize(yt.z,yt.w);const At=y.getRenderTarget();y.setRenderTarget(ut),y.getClearColor(q),J=y.getClearAlpha(),J<1&&y.setClearColor(16777215,.5),y.clear(),Xt&&Ct.render(K);const wt=y.toneMapping;y.toneMapping=di;const zt=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),p.setupLightsView($),et===!0&&it.setGlobalState(y.clippingPlanes,$),xr(A,K,$),S.updateMultisampleRenderTarget(ut),S.updateRenderTargetMipmap(ut),z.has("WEBGL_multisampled_render_to_texture")===!1){let Ht=!1;for(let Rt=0,ne=B.length;Rt<ne;Rt++){const ae=B[Rt],he=ae.object,Ye=ae.geometry,jt=ae.material,Lt=ae.group;if(jt.side===Ze&&he.layers.test($.layers)){const we=jt.side;jt.side=Xe,jt.needsUpdate=!0,Oc(he,K,$,Ye,jt,Lt),jt.side=we,jt.needsUpdate=!0,Ht=!0}}Ht===!0&&(S.updateMultisampleRenderTarget(ut),S.updateRenderTargetMipmap(ut))}y.setRenderTarget(At),y.setClearColor(q,J),zt!==void 0&&($.viewport=zt),y.toneMapping=wt}function xr(A,B,K){const $=B.isScene===!0?B.overrideMaterial:null;for(let V=0,ut=A.length;V<ut;V++){const yt=A[V],At=yt.object,wt=yt.geometry,zt=$===null?yt.material:$,Ht=yt.group;At.layers.test(K.layers)&&Oc(At,B,K,wt,zt,Ht)}}function Oc(A,B,K,$,V,ut){A.onBeforeRender(y,B,K,$,V,ut),A.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),V.onBeforeRender(y,B,K,$,A,ut),V.transparent===!0&&V.side===Ze&&V.forceSinglePass===!1?(V.side=Xe,V.needsUpdate=!0,y.renderBufferDirect(K,B,$,V,A,ut),V.side=mi,V.needsUpdate=!0,y.renderBufferDirect(K,B,$,V,A,ut),V.side=Ze):y.renderBufferDirect(K,B,$,V,A,ut),A.onAfterRender(y,B,K,$,V,ut)}function Mr(A,B,K){B.isScene!==!0&&(B=Ot);const $=Y.get(A),V=p.state.lights,ut=p.state.shadowsArray,yt=V.state.version,At=lt.getParameters(A,V.state,ut,B,K),wt=lt.getProgramCacheKey(At);let zt=$.programs;$.environment=A.isMeshStandardMaterial?B.environment:null,$.fog=B.fog,$.envMap=(A.isMeshStandardMaterial?P:_).get(A.envMap||$.environment),$.envMapRotation=$.environment!==null&&A.envMap===null?B.environmentRotation:A.envMapRotation,zt===void 0&&(A.addEventListener("dispose",Kt),zt=new Map,$.programs=zt);let Ht=zt.get(wt);if(Ht!==void 0){if($.currentProgram===Ht&&$.lightsStateVersion===yt)return Bc(A,At),Ht}else At.uniforms=lt.getUniforms(A),A.onBeforeCompile(At,y),Ht=lt.acquireProgram(At,wt),zt.set(wt,Ht),$.uniforms=At.uniforms;const Rt=$.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Rt.clippingPlanes=it.uniform),Bc(A,At),$.needsLights=Ld(A),$.lightsStateVersion=yt,$.needsLights&&(Rt.ambientLightColor.value=V.state.ambient,Rt.lightProbe.value=V.state.probe,Rt.directionalLights.value=V.state.directional,Rt.directionalLightShadows.value=V.state.directionalShadow,Rt.spotLights.value=V.state.spot,Rt.spotLightShadows.value=V.state.spotShadow,Rt.rectAreaLights.value=V.state.rectArea,Rt.ltc_1.value=V.state.rectAreaLTC1,Rt.ltc_2.value=V.state.rectAreaLTC2,Rt.pointLights.value=V.state.point,Rt.pointLightShadows.value=V.state.pointShadow,Rt.hemisphereLights.value=V.state.hemi,Rt.directionalShadowMap.value=V.state.directionalShadowMap,Rt.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Rt.spotShadowMap.value=V.state.spotShadowMap,Rt.spotLightMatrix.value=V.state.spotLightMatrix,Rt.spotLightMap.value=V.state.spotLightMap,Rt.pointShadowMap.value=V.state.pointShadowMap,Rt.pointShadowMatrix.value=V.state.pointShadowMatrix),$.currentProgram=Ht,$.uniformsList=null,Ht}function Fc(A){if(A.uniformsList===null){const B=A.currentProgram.getUniforms();A.uniformsList=uo.seqWithValue(B.seq,A.uniforms)}return A.uniformsList}function Bc(A,B){const K=Y.get(A);K.outputColorSpace=B.outputColorSpace,K.batching=B.batching,K.batchingColor=B.batchingColor,K.instancing=B.instancing,K.instancingColor=B.instancingColor,K.instancingMorph=B.instancingMorph,K.skinning=B.skinning,K.morphTargets=B.morphTargets,K.morphNormals=B.morphNormals,K.morphColors=B.morphColors,K.morphTargetsCount=B.morphTargetsCount,K.numClippingPlanes=B.numClippingPlanes,K.numIntersection=B.numClipIntersection,K.vertexAlphas=B.vertexAlphas,K.vertexTangents=B.vertexTangents,K.toneMapping=B.toneMapping}function Rd(A,B,K,$,V){B.isScene!==!0&&(B=Ot),S.resetTextureUnits();const ut=B.fog,yt=$.isMeshStandardMaterial?B.environment:null,At=C===null?y.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:_i,wt=($.isMeshStandardMaterial?P:_).get($.envMap||yt),zt=$.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Ht=!!K.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Rt=!!K.morphAttributes.position,ne=!!K.morphAttributes.normal,ae=!!K.morphAttributes.color;let he=di;$.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(he=y.toneMapping);const Ye=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,jt=Ye!==void 0?Ye.length:0,Lt=Y.get($),we=p.state.lights;if(et===!0&&(ct===!0||A!==ot)){const tn=A===ot&&$.id===H;it.setState($,A,tn)}let Jt=!1;$.version===Lt.__version?(Lt.needsLights&&Lt.lightsStateVersion!==we.state.version||Lt.outputColorSpace!==At||V.isBatchedMesh&&Lt.batching===!1||!V.isBatchedMesh&&Lt.batching===!0||V.isBatchedMesh&&Lt.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Lt.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Lt.instancing===!1||!V.isInstancedMesh&&Lt.instancing===!0||V.isSkinnedMesh&&Lt.skinning===!1||!V.isSkinnedMesh&&Lt.skinning===!0||V.isInstancedMesh&&Lt.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Lt.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Lt.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Lt.instancingMorph===!1&&V.morphTexture!==null||Lt.envMap!==wt||$.fog===!0&&Lt.fog!==ut||Lt.numClippingPlanes!==void 0&&(Lt.numClippingPlanes!==it.numPlanes||Lt.numIntersection!==it.numIntersection)||Lt.vertexAlphas!==zt||Lt.vertexTangents!==Ht||Lt.morphTargets!==Rt||Lt.morphNormals!==ne||Lt.morphColors!==ae||Lt.toneMapping!==he||Lt.morphTargetsCount!==jt)&&(Jt=!0):(Jt=!0,Lt.__version=$.version);let ln=Lt.currentProgram;Jt===!0&&(ln=Mr($,B,V));let Yi=!1,Ke=!1,Ko=!1;const pe=ln.getUniforms(),ni=Lt.uniforms;if(F.useProgram(ln.program)&&(Yi=!0,Ke=!0,Ko=!0),$.id!==H&&(H=$.id,Ke=!0),Yi||ot!==A){I.reverseDepthBuffer?(Mt.copy(A.projectionMatrix),h_(Mt),f_(Mt),pe.setValue(v,"projectionMatrix",Mt)):pe.setValue(v,"projectionMatrix",A.projectionMatrix),pe.setValue(v,"viewMatrix",A.matrixWorldInverse);const tn=pe.map.cameraPosition;tn!==void 0&&tn.setValue(v,It.setFromMatrixPosition(A.matrixWorld)),I.logarithmicDepthBuffer&&pe.setValue(v,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&pe.setValue(v,"isOrthographic",A.isOrthographicCamera===!0),ot!==A&&(ot=A,Ke=!0,Ko=!0)}if(V.isSkinnedMesh){pe.setOptional(v,V,"bindMatrix"),pe.setOptional(v,V,"bindMatrixInverse");const tn=V.skeleton;tn&&(tn.boneTexture===null&&tn.computeBoneTexture(),pe.setValue(v,"boneTexture",tn.boneTexture,S))}V.isBatchedMesh&&(pe.setOptional(v,V,"batchingTexture"),pe.setValue(v,"batchingTexture",V._matricesTexture,S),pe.setOptional(v,V,"batchingIdTexture"),pe.setValue(v,"batchingIdTexture",V._indirectTexture,S),pe.setOptional(v,V,"batchingColorTexture"),V._colorsTexture!==null&&pe.setValue(v,"batchingColorTexture",V._colorsTexture,S));const $o=K.morphAttributes;if(($o.position!==void 0||$o.normal!==void 0||$o.color!==void 0)&&Nt.update(V,K,ln),(Ke||Lt.receiveShadow!==V.receiveShadow)&&(Lt.receiveShadow=V.receiveShadow,pe.setValue(v,"receiveShadow",V.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(ni.envMap.value=wt,ni.flipEnvMap.value=wt.isCubeTexture&&wt.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&B.environment!==null&&(ni.envMapIntensity.value=B.environmentIntensity),Ke&&(pe.setValue(v,"toneMappingExposure",y.toneMappingExposure),Lt.needsLights&&Pd(ni,Ko),ut&&$.fog===!0&&rt.refreshFogUniforms(ni,ut),rt.refreshMaterialUniforms(ni,$,tt,W,p.state.transmissionRenderTarget[A.id]),uo.upload(v,Fc(Lt),ni,S)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(uo.upload(v,Fc(Lt),ni,S),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&pe.setValue(v,"center",V.center),pe.setValue(v,"modelViewMatrix",V.modelViewMatrix),pe.setValue(v,"normalMatrix",V.normalMatrix),pe.setValue(v,"modelMatrix",V.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const tn=$.uniformsGroups;for(let jo=0,Dd=tn.length;jo<Dd;jo++){const zc=tn[jo];U.update(zc,ln),U.bind(zc,ln)}}return ln}function Pd(A,B){A.ambientLightColor.needsUpdate=B,A.lightProbe.needsUpdate=B,A.directionalLights.needsUpdate=B,A.directionalLightShadows.needsUpdate=B,A.pointLights.needsUpdate=B,A.pointLightShadows.needsUpdate=B,A.spotLights.needsUpdate=B,A.spotLightShadows.needsUpdate=B,A.rectAreaLights.needsUpdate=B,A.hemisphereLights.needsUpdate=B}function Ld(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(A,B,K){Y.get(A.texture).__webglTexture=B,Y.get(A.depthTexture).__webglTexture=K;const $=Y.get(A);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=K===void 0,$.__autoAllocateDepthBuffer||z.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,B){const K=Y.get(A);K.__webglFramebuffer=B,K.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(A,B=0,K=0){C=A,O=B,R=K;let $=!0,V=null,ut=!1,yt=!1;if(A){const wt=Y.get(A);if(wt.__useDefaultFramebuffer!==void 0)F.bindFramebuffer(v.FRAMEBUFFER,null),$=!1;else if(wt.__webglFramebuffer===void 0)S.setupRenderTarget(A);else if(wt.__hasExternalTextures)S.rebindTextures(A,Y.get(A.texture).__webglTexture,Y.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Rt=A.depthTexture;if(wt.__boundDepthTexture!==Rt){if(Rt!==null&&Y.has(Rt)&&(A.width!==Rt.image.width||A.height!==Rt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");S.setupDepthRenderbuffer(A)}}const zt=A.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(yt=!0);const Ht=Y.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ht[B])?V=Ht[B][K]:V=Ht[B],ut=!0):A.samples>0&&S.useMultisampledRTT(A)===!1?V=Y.get(A).__webglMultisampledFramebuffer:Array.isArray(Ht)?V=Ht[K]:V=Ht,M.copy(A.viewport),T.copy(A.scissor),j=A.scissorTest}else M.copy(xt).multiplyScalar(tt).floor(),T.copy(mt).multiplyScalar(tt).floor(),j=Bt;if(F.bindFramebuffer(v.FRAMEBUFFER,V)&&$&&F.drawBuffers(A,V),F.viewport(M),F.scissor(T),F.setScissorTest(j),ut){const wt=Y.get(A.texture);v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_CUBE_MAP_POSITIVE_X+B,wt.__webglTexture,K)}else if(yt){const wt=Y.get(A.texture),zt=B||0;v.framebufferTextureLayer(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,wt.__webglTexture,K||0,zt)}H=-1},this.readRenderTargetPixels=function(A,B,K,$,V,ut,yt){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=Y.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&yt!==void 0&&(At=At[yt]),At){F.bindFramebuffer(v.FRAMEBUFFER,At);try{const wt=A.texture,zt=wt.format,Ht=wt.type;if(!I.textureFormatReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!I.textureTypeReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=A.width-$&&K>=0&&K<=A.height-V&&v.readPixels(B,K,$,V,Dt.convert(zt),Dt.convert(Ht),ut)}finally{const wt=C!==null?Y.get(C).__webglFramebuffer:null;F.bindFramebuffer(v.FRAMEBUFFER,wt)}}},this.readRenderTargetPixelsAsync=async function(A,B,K,$,V,ut,yt){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=Y.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&yt!==void 0&&(At=At[yt]),At){const wt=A.texture,zt=wt.format,Ht=wt.type;if(!I.textureFormatReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!I.textureTypeReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=A.width-$&&K>=0&&K<=A.height-V){F.bindFramebuffer(v.FRAMEBUFFER,At);const Rt=v.createBuffer();v.bindBuffer(v.PIXEL_PACK_BUFFER,Rt),v.bufferData(v.PIXEL_PACK_BUFFER,ut.byteLength,v.STREAM_READ),v.readPixels(B,K,$,V,Dt.convert(zt),Dt.convert(Ht),0);const ne=C!==null?Y.get(C).__webglFramebuffer:null;F.bindFramebuffer(v.FRAMEBUFFER,ne);const ae=v.fenceSync(v.SYNC_GPU_COMMANDS_COMPLETE,0);return v.flush(),await u_(v,ae,4),v.bindBuffer(v.PIXEL_PACK_BUFFER,Rt),v.getBufferSubData(v.PIXEL_PACK_BUFFER,0,ut),v.deleteBuffer(Rt),v.deleteSync(ae),ut}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,B=null,K=0){A.isTexture!==!0&&(co("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,A=arguments[1]);const $=Math.pow(2,-K),V=Math.floor(A.image.width*$),ut=Math.floor(A.image.height*$),yt=B!==null?B.x:0,At=B!==null?B.y:0;S.setTexture2D(A,0),v.copyTexSubImage2D(v.TEXTURE_2D,K,0,0,yt,At,V,ut),F.unbindTexture()},this.copyTextureToTexture=function(A,B,K=null,$=null,V=0){A.isTexture!==!0&&(co("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,A=arguments[1],B=arguments[2],V=arguments[3]||0,K=null);let ut,yt,At,wt,zt,Ht;K!==null?(ut=K.max.x-K.min.x,yt=K.max.y-K.min.y,At=K.min.x,wt=K.min.y):(ut=A.image.width,yt=A.image.height,At=0,wt=0),$!==null?(zt=$.x,Ht=$.y):(zt=0,Ht=0);const Rt=Dt.convert(B.format),ne=Dt.convert(B.type);S.setTexture2D(B,0),v.pixelStorei(v.UNPACK_FLIP_Y_WEBGL,B.flipY),v.pixelStorei(v.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),v.pixelStorei(v.UNPACK_ALIGNMENT,B.unpackAlignment);const ae=v.getParameter(v.UNPACK_ROW_LENGTH),he=v.getParameter(v.UNPACK_IMAGE_HEIGHT),Ye=v.getParameter(v.UNPACK_SKIP_PIXELS),jt=v.getParameter(v.UNPACK_SKIP_ROWS),Lt=v.getParameter(v.UNPACK_SKIP_IMAGES),we=A.isCompressedTexture?A.mipmaps[V]:A.image;v.pixelStorei(v.UNPACK_ROW_LENGTH,we.width),v.pixelStorei(v.UNPACK_IMAGE_HEIGHT,we.height),v.pixelStorei(v.UNPACK_SKIP_PIXELS,At),v.pixelStorei(v.UNPACK_SKIP_ROWS,wt),A.isDataTexture?v.texSubImage2D(v.TEXTURE_2D,V,zt,Ht,ut,yt,Rt,ne,we.data):A.isCompressedTexture?v.compressedTexSubImage2D(v.TEXTURE_2D,V,zt,Ht,we.width,we.height,Rt,we.data):v.texSubImage2D(v.TEXTURE_2D,V,zt,Ht,ut,yt,Rt,ne,we),v.pixelStorei(v.UNPACK_ROW_LENGTH,ae),v.pixelStorei(v.UNPACK_IMAGE_HEIGHT,he),v.pixelStorei(v.UNPACK_SKIP_PIXELS,Ye),v.pixelStorei(v.UNPACK_SKIP_ROWS,jt),v.pixelStorei(v.UNPACK_SKIP_IMAGES,Lt),V===0&&B.generateMipmaps&&v.generateMipmap(v.TEXTURE_2D),F.unbindTexture()},this.copyTextureToTexture3D=function(A,B,K=null,$=null,V=0){A.isTexture!==!0&&(co("WebGLRenderer: copyTextureToTexture3D function signature has changed."),K=arguments[0]||null,$=arguments[1]||null,A=arguments[2],B=arguments[3],V=arguments[4]||0);let ut,yt,At,wt,zt,Ht,Rt,ne,ae;const he=A.isCompressedTexture?A.mipmaps[V]:A.image;K!==null?(ut=K.max.x-K.min.x,yt=K.max.y-K.min.y,At=K.max.z-K.min.z,wt=K.min.x,zt=K.min.y,Ht=K.min.z):(ut=he.width,yt=he.height,At=he.depth,wt=0,zt=0,Ht=0),$!==null?(Rt=$.x,ne=$.y,ae=$.z):(Rt=0,ne=0,ae=0);const Ye=Dt.convert(B.format),jt=Dt.convert(B.type);let Lt;if(B.isData3DTexture)S.setTexture3D(B,0),Lt=v.TEXTURE_3D;else if(B.isDataArrayTexture||B.isCompressedArrayTexture)S.setTexture2DArray(B,0),Lt=v.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}v.pixelStorei(v.UNPACK_FLIP_Y_WEBGL,B.flipY),v.pixelStorei(v.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),v.pixelStorei(v.UNPACK_ALIGNMENT,B.unpackAlignment);const we=v.getParameter(v.UNPACK_ROW_LENGTH),Jt=v.getParameter(v.UNPACK_IMAGE_HEIGHT),ln=v.getParameter(v.UNPACK_SKIP_PIXELS),Yi=v.getParameter(v.UNPACK_SKIP_ROWS),Ke=v.getParameter(v.UNPACK_SKIP_IMAGES);v.pixelStorei(v.UNPACK_ROW_LENGTH,he.width),v.pixelStorei(v.UNPACK_IMAGE_HEIGHT,he.height),v.pixelStorei(v.UNPACK_SKIP_PIXELS,wt),v.pixelStorei(v.UNPACK_SKIP_ROWS,zt),v.pixelStorei(v.UNPACK_SKIP_IMAGES,Ht),A.isDataTexture||A.isData3DTexture?v.texSubImage3D(Lt,V,Rt,ne,ae,ut,yt,At,Ye,jt,he.data):B.isCompressedArrayTexture?v.compressedTexSubImage3D(Lt,V,Rt,ne,ae,ut,yt,At,Ye,he.data):v.texSubImage3D(Lt,V,Rt,ne,ae,ut,yt,At,Ye,jt,he),v.pixelStorei(v.UNPACK_ROW_LENGTH,we),v.pixelStorei(v.UNPACK_IMAGE_HEIGHT,Jt),v.pixelStorei(v.UNPACK_SKIP_PIXELS,ln),v.pixelStorei(v.UNPACK_SKIP_ROWS,Yi),v.pixelStorei(v.UNPACK_SKIP_IMAGES,Ke),V===0&&B.generateMipmaps&&v.generateMipmap(Lt),F.unbindTexture()},this.initRenderTarget=function(A){Y.get(A).__webglFramebuffer===void 0&&S.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?S.setTextureCube(A,0):A.isData3DTexture?S.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?S.setTexture2DArray(A,0):S.setTexture2D(A,0),F.unbindTexture()},this.resetState=function(){O=0,R=0,C=null,F.reset(),ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Mc?"display-p3":"srgb",e.unpackColorSpace=te.workingColorSpace===Vo?"display-p3":"srgb"}}class Ac{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new qt(t),this.near=e,this.far=i}clone(){return new Ac(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class ES extends Me{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Dn,this.environmentIntensity=1,this.environmentRotation=new Dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Gl extends qi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const To=new D,Ao=new D,mh=new oe,zs=new Go,Yr=new vr,Ha=new D,gh=new D;class _h extends Me{constructor(t=new Se,e=new Gl){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)To.fromBufferAttribute(e,s-1),Ao.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=To.distanceTo(Ao);t.setAttribute("lineDistance",new ce(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Yr.copy(i.boundingSphere),Yr.applyMatrix4(s),Yr.radius+=r,t.ray.intersectsSphere(Yr)===!1)return;mh.copy(s).invert(),zs.copy(t.ray).applyMatrix4(mh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){const d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=d,p=g-1;x<p;x+=c){const m=h.getX(x),w=h.getX(x+1),y=Kr(this,t,zs,l,m,w);y&&e.push(y)}if(this.isLineLoop){const x=h.getX(g-1),p=h.getX(d),m=Kr(this,t,zs,l,x,p);m&&e.push(m)}}else{const d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let x=d,p=g-1;x<p;x+=c){const m=Kr(this,t,zs,l,x,x+1);m&&e.push(m)}if(this.isLineLoop){const x=Kr(this,t,zs,l,g-1,d);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Kr(n,t,e,i,s,r){const o=n.geometry.attributes.position;if(To.fromBufferAttribute(o,s),Ao.fromBufferAttribute(o,r),e.distanceSqToSegment(To,Ao,Ha,gh)>i)return;Ha.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Ha);if(!(l<t.near||l>t.far))return{distance:l,point:gh.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}class Md extends qi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new qt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const vh=new oe,kl=new Go,$r=new vr,jr=new D;class bS extends Me{constructor(t=new Se,e=new Md){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),$r.copy(i.boundingSphere),$r.applyMatrix4(s),$r.radius+=r,t.ray.intersectsSphere($r)===!1)return;vh.copy(s).invert(),kl.copy(t.ray).applyMatrix4(vh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const u=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=u,x=d;g<x;g++){const p=c.getX(g);jr.fromBufferAttribute(f,p),xh(jr,p,l,s,t,e,this)}}else{const u=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let g=u,x=d;g<x;g++)jr.fromBufferAttribute(f,g),xh(jr,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function xh(n,t,e,i,s,r,o){const a=kl.distanceSqToPoint(n);if(a<e){const l=new D;kl.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class In{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let s=0;const r=i.length;let o;e?o=e:o=t*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);const h=i[s],u=i[s+1]-h,d=(o-h)/u;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new ft:new D);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new D,s=[],r=[],o=[],a=new D,l=new oe;for(let d=0;d<=t;d++){const g=d/t;s[d]=this.getTangentAt(g,new D)}r[0]=new D,o[0]=new D;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),u<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Pe(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(Pe(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class wc extends In{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new ft){const i=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*h-d*f+this.aX,c=u*f+d*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class TS extends wc{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Cc(){let n=0,t=0,e=0,i=0;function s(r,o,a,l){n=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,f){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+f)+(l-a)/f;u*=h,d*=h,s(o,a,u,d)},calc:function(r){const o=r*r,a=o*r;return n+t*r+e*o+i*a}}}const Jr=new D,Va=new Cc,Ga=new Cc,ka=new Cc;class AS extends In{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new D){const i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Jr.subVectors(s[0],s[1]).add(s[0]),c=Jr);const f=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Jr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Jr),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(f),d),x=Math.pow(f.distanceToSquared(u),d),p=Math.pow(u.distanceToSquared(h),d);x<1e-4&&(x=1),g<1e-4&&(g=x),p<1e-4&&(p=x),Va.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,g,x,p),Ga.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,g,x,p),ka.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,g,x,p)}else this.curveType==="catmullrom"&&(Va.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),Ga.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),ka.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return i.set(Va.calc(l),Ga.calc(l),ka.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new D().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Mh(n,t,e,i,s){const r=(i-t)*.5,o=(s-e)*.5,a=n*n,l=n*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*n+e}function wS(n,t){const e=1-n;return e*e*t}function CS(n,t){return 2*(1-n)*n*t}function RS(n,t){return n*n*t}function Js(n,t,e,i){return wS(n,t)+CS(n,e)+RS(n,i)}function PS(n,t){const e=1-n;return e*e*e*t}function LS(n,t){const e=1-n;return 3*e*e*n*t}function DS(n,t){return 3*(1-n)*n*n*t}function IS(n,t){return n*n*n*t}function Zs(n,t,e,i,s){return PS(n,t)+LS(n,e)+DS(n,i)+IS(n,s)}class Sd extends In{constructor(t=new ft,e=new ft,i=new ft,s=new ft){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new ft){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Zs(t,s.x,r.x,o.x,a.x),Zs(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class US extends In{constructor(t=new D,e=new D,i=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new D){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Zs(t,s.x,r.x,o.x,a.x),Zs(t,s.y,r.y,o.y,a.y),Zs(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class yd extends In{constructor(t=new ft,e=new ft){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ft){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ft){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class NS extends In{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ed extends In{constructor(t=new ft,e=new ft,i=new ft){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new ft){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Js(t,s.x,r.x,o.x),Js(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class OS extends In{constructor(t=new D,e=new D,i=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new D){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Js(t,s.x,r.x,o.x),Js(t,s.y,r.y,o.y),Js(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class bd extends In{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ft){const i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return i.set(Mh(a,l.x,c.x,h.x,f.x),Mh(a,l.y,c.y,h.y,f.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new ft().fromArray(s))}return this}}var Wl=Object.freeze({__proto__:null,ArcCurve:TS,CatmullRomCurve3:AS,CubicBezierCurve:Sd,CubicBezierCurve3:US,EllipseCurve:wc,LineCurve:yd,LineCurve3:NS,QuadraticBezierCurve:Ed,QuadraticBezierCurve3:OS,SplineCurve:bd});class FS extends In{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Wl[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(new Wl[s.type]().fromJSON(s))}return this}}class Sh extends FS{constructor(t){super(),this.type="Path",this.currentPoint=new ft,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new yd(this.currentPoint.clone(),new ft(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){const r=new Ed(this.currentPoint.clone(),new ft(t,e),new ft(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){const a=new Sd(this.currentPoint.clone(),new ft(t,e),new ft(i,s),new ft(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new bd(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,s,r,o,a,l),this}absellipse(t,e,i,s,r,o,a,l){const c=new wc(t,e,i,s,r,o,a,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Ss extends Se{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],f=[],u=[],d=[];let g=0;const x=[],p=i/2;let m=0;w(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new ce(f,3)),this.setAttribute("normal",new ce(u,3)),this.setAttribute("uv",new ce(d,2));function w(){const E=new D,O=new D;let R=0;const C=(e-t)/i;for(let H=0;H<=r;H++){const ot=[],M=H/r,T=M*(e-t)+t;for(let j=0;j<=s;j++){const q=j/s,J=q*l+a,nt=Math.sin(J),W=Math.cos(J);O.x=T*nt,O.y=-M*i+p,O.z=T*W,f.push(O.x,O.y,O.z),E.set(nt,C,W).normalize(),u.push(E.x,E.y,E.z),d.push(q,1-M),ot.push(g++)}x.push(ot)}for(let H=0;H<s;H++)for(let ot=0;ot<r;ot++){const M=x[ot][H],T=x[ot+1][H],j=x[ot+1][H+1],q=x[ot][H+1];t>0&&(h.push(M,T,q),R+=3),e>0&&(h.push(T,j,q),R+=3)}c.addGroup(m,R,0),m+=R}function y(E){const O=g,R=new ft,C=new D;let H=0;const ot=E===!0?t:e,M=E===!0?1:-1;for(let j=1;j<=s;j++)f.push(0,p*M,0),u.push(0,M,0),d.push(.5,.5),g++;const T=g;for(let j=0;j<=s;j++){const J=j/s*l+a,nt=Math.cos(J),W=Math.sin(J);C.x=ot*W,C.y=p*M,C.z=ot*nt,f.push(C.x,C.y,C.z),u.push(0,M,0),R.x=nt*.5+.5,R.y=W*.5*M+.5,d.push(R.x,R.y),g++}for(let j=0;j<s;j++){const q=O+j,J=T+j;E===!0?h.push(J,J+1,q):h.push(J+1,J,q),H+=3}c.addGroup(m,H,E===!0?1:2),m+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ss(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Rc extends Ss{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Rc(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Qs extends Sh{constructor(t){super(t),this.uuid=Xi(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(new Sh().fromJSON(s))}return this}}const BS={triangulate:function(n,t,e=2){const i=t&&t.length,s=i?t[0]*e:n.length;let r=Td(n,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,f,u,d;if(i&&(r=kS(n,t,r,e)),n.length>80*e){a=c=n[0],l=h=n[1];for(let g=e;g<s;g+=e)f=n[g],u=n[g+1],f<a&&(a=f),u<l&&(l=u),f>c&&(c=f),u>h&&(h=u);d=Math.max(c-a,h-l),d=d!==0?32767/d:0}return lr(r,o,e,a,l,d,0),o}};function Td(n,t,e,i,s){let r,o;if(s===ty(n,t,e,i)>0)for(r=t;r<e;r+=i)o=yh(r,n[r],n[r+1],o);else for(r=e-i;r>=t;r-=i)o=yh(r,n[r],n[r+1],o);return o&&Xo(o,o.next)&&(ur(o),o=o.next),o}function ki(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Xo(e,e.next)||ue(e.prev,e,e.next)===0)){if(ur(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function lr(n,t,e,i,s,r,o){if(!n)return;!o&&r&&KS(n,i,s,r);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?HS(n,i,s,r):zS(n)){t.push(l.i/e|0),t.push(n.i/e|0),t.push(c.i/e|0),ur(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=VS(ki(n),t,e),lr(n,t,e,i,s,r,2)):o===2&&GS(n,t,e,i,s,r):lr(ki(n),t,e,i,s,r,1);break}}}function zS(n){const t=n.prev,e=n,i=n.next;if(ue(t,e,i)>=0)return!1;const s=t.x,r=e.x,o=i.x,a=t.y,l=e.y,c=i.y,h=s<r?s<o?s:o:r<o?r:o,f=a<l?a<c?a:c:l<c?l:c,u=s>r?s>o?s:o:r>o?r:o,d=a>l?a>c?a:c:l>c?l:c;let g=i.next;for(;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=f&&g.y<=d&&ds(s,a,r,l,o,c,g.x,g.y)&&ue(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function HS(n,t,e,i){const s=n.prev,r=n,o=n.next;if(ue(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,h=s.y,f=r.y,u=o.y,d=a<l?a<c?a:c:l<c?l:c,g=h<f?h<u?h:u:f<u?f:u,x=a>l?a>c?a:c:l>c?l:c,p=h>f?h>u?h:u:f>u?f:u,m=Xl(d,g,t,e,i),w=Xl(x,p,t,e,i);let y=n.prevZ,E=n.nextZ;for(;y&&y.z>=m&&E&&E.z<=w;){if(y.x>=d&&y.x<=x&&y.y>=g&&y.y<=p&&y!==s&&y!==o&&ds(a,h,l,f,c,u,y.x,y.y)&&ue(y.prev,y,y.next)>=0||(y=y.prevZ,E.x>=d&&E.x<=x&&E.y>=g&&E.y<=p&&E!==s&&E!==o&&ds(a,h,l,f,c,u,E.x,E.y)&&ue(E.prev,E,E.next)>=0))return!1;E=E.nextZ}for(;y&&y.z>=m;){if(y.x>=d&&y.x<=x&&y.y>=g&&y.y<=p&&y!==s&&y!==o&&ds(a,h,l,f,c,u,y.x,y.y)&&ue(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;E&&E.z<=w;){if(E.x>=d&&E.x<=x&&E.y>=g&&E.y<=p&&E!==s&&E!==o&&ds(a,h,l,f,c,u,E.x,E.y)&&ue(E.prev,E,E.next)>=0)return!1;E=E.nextZ}return!0}function VS(n,t,e){let i=n;do{const s=i.prev,r=i.next.next;!Xo(s,r)&&Ad(s,i,i.next,r)&&cr(s,r)&&cr(r,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(r.i/e|0),ur(i),ur(i.next),i=n=r),i=i.next}while(i!==n);return ki(i)}function GS(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&JS(o,a)){let l=wd(o,a);o=ki(o,o.next),l=ki(l,l.next),lr(o,t,e,i,s,r,0),lr(l,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function kS(n,t,e,i){const s=[];let r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*i,l=r<o-1?t[r+1]*i:n.length,c=Td(n,a,l,i,!1),c===c.next&&(c.steiner=!0),s.push(jS(c));for(s.sort(WS),r=0;r<s.length;r++)e=XS(s[r],e);return e}function WS(n,t){return n.x-t.x}function XS(n,t){const e=qS(n,t);if(!e)return t;const i=wd(e,n);return ki(i,i.next),ki(e,e.next)}function qS(n,t){let e=t,i=-1/0,s;const r=n.x,o=n.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const u=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=r&&u>i&&(i=u,s=e.x<e.next.x?e:e.next,u===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,l=s.x,c=s.y;let h=1/0,f;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&ds(o<c?r:i,o,l,c,o<c?i:r,o,e.x,e.y)&&(f=Math.abs(o-e.y)/(r-e.x),cr(e,n)&&(f<h||f===h&&(e.x>s.x||e.x===s.x&&YS(s,e)))&&(s=e,h=f)),e=e.next;while(e!==a);return s}function YS(n,t){return ue(n.prev,n,t.prev)<0&&ue(t.next,n,n.next)<0}function KS(n,t,e,i){let s=n;do s.z===0&&(s.z=Xl(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,$S(s)}function $S(n){let t,e,i,s,r,o,a,l,c=1;do{for(e=n,n=null,r=null,o=0;e;){for(o++,i=e,a=0,t=0;t<c&&(a++,i=i.nextZ,!!i);t++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,a--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;e=i}r.nextZ=null,c*=2}while(o>1);return n}function Xl(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function jS(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function ds(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function JS(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!ZS(n,t)&&(cr(n,t)&&cr(t,n)&&QS(n,t)&&(ue(n.prev,n,t.prev)||ue(n,t.prev,t))||Xo(n,t)&&ue(n.prev,n,n.next)>0&&ue(t.prev,t,t.next)>0)}function ue(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Xo(n,t){return n.x===t.x&&n.y===t.y}function Ad(n,t,e,i){const s=Qr(ue(n,t,e)),r=Qr(ue(n,t,i)),o=Qr(ue(e,i,n)),a=Qr(ue(e,i,t));return!!(s!==r&&o!==a||s===0&&Zr(n,e,t)||r===0&&Zr(n,i,t)||o===0&&Zr(e,n,i)||a===0&&Zr(e,t,i))}function Zr(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Qr(n){return n>0?1:n<0?-1:0}function ZS(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Ad(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function cr(n,t){return ue(n.prev,n,n.next)<0?ue(n,t,n.next)>=0&&ue(n,n.prev,t)>=0:ue(n,t,n.prev)<0||ue(n,n.next,t)<0}function QS(n,t){let e=n,i=!1;const s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function wd(n,t){const e=new ql(n.i,n.x,n.y),i=new ql(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function yh(n,t,e,i){const s=new ql(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function ur(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function ql(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function ty(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class pi{static area(t){const e=t.length;let i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return pi.area(t)<0}static triangulateShape(t,e){const i=[],s=[],r=[];Eh(t),bh(i,t);let o=t.length;e.forEach(Eh);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,bh(i,e[l]);const a=BS.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Eh(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function bh(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class wo extends Se{constructor(t=new Qs([new ft(.5,.5),new ft(-.5,.5),new ft(-.5,-.5),new ft(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new ce(s,3)),this.setAttribute("uv",new ce(r,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1;let u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3;const m=e.extrudePath,w=e.UVGenerator!==void 0?e.UVGenerator:ey;let y,E=!1,O,R,C,H;m&&(y=m.getSpacedPoints(h),E=!0,u=!1,O=m.computeFrenetFrames(h,!1),R=new D,C=new D,H=new D),u||(p=0,d=0,g=0,x=0);const ot=a.extractPoints(c);let M=ot.shape;const T=ot.holes;if(!pi.isClockWise(M)){M=M.reverse();for(let b=0,v=T.length;b<v;b++){const L=T[b];pi.isClockWise(L)&&(T[b]=L.reverse())}}const q=pi.triangulateShape(M,T),J=M;for(let b=0,v=T.length;b<v;b++){const L=T[b];M=M.concat(L)}function nt(b,v,L){return v||console.error("THREE.ExtrudeGeometry: vec does not exist"),b.clone().addScaledVector(v,L)}const W=M.length,tt=q.length;function X(b,v,L){let z,I,F;const Z=b.x-v.x,Y=b.y-v.y,S=L.x-b.x,_=L.y-b.y,P=Z*Z+Y*Y,N=Z*_-Y*S;if(Math.abs(N)>Number.EPSILON){const k=Math.sqrt(P),G=Math.sqrt(S*S+_*_),lt=v.x-Y/k,rt=v.y+Z/k,at=L.x-_/G,Pt=L.y+S/G,it=((at-lt)*_-(Pt-rt)*S)/(Z*_-Y*S);z=lt+Z*it-b.x,I=rt+Y*it-b.y;const pt=z*z+I*I;if(pt<=2)return new ft(z,I);F=Math.sqrt(pt/2)}else{let k=!1;Z>Number.EPSILON?S>Number.EPSILON&&(k=!0):Z<-Number.EPSILON?S<-Number.EPSILON&&(k=!0):Math.sign(Y)===Math.sign(_)&&(k=!0),k?(z=-Y,I=Z,F=Math.sqrt(P)):(z=Z,I=Y,F=Math.sqrt(P/2))}return new ft(z/F,I/F)}const dt=[];for(let b=0,v=J.length,L=v-1,z=b+1;b<v;b++,L++,z++)L===v&&(L=0),z===v&&(z=0),dt[b]=X(J[b],J[L],J[z]);const xt=[];let mt,Bt=dt.concat();for(let b=0,v=T.length;b<v;b++){const L=T[b];mt=[];for(let z=0,I=L.length,F=I-1,Z=z+1;z<I;z++,F++,Z++)F===I&&(F=0),Z===I&&(Z=0),mt[z]=X(L[z],L[F],L[Z]);xt.push(mt),Bt=Bt.concat(mt)}for(let b=0;b<p;b++){const v=b/p,L=d*Math.cos(v*Math.PI/2),z=g*Math.sin(v*Math.PI/2)+x;for(let I=0,F=J.length;I<F;I++){const Z=nt(J[I],dt[I],z);ht(Z.x,Z.y,-L)}for(let I=0,F=T.length;I<F;I++){const Z=T[I];mt=xt[I];for(let Y=0,S=Z.length;Y<S;Y++){const _=nt(Z[Y],mt[Y],z);ht(_.x,_.y,-L)}}}const Yt=g+x;for(let b=0;b<W;b++){const v=u?nt(M[b],Bt[b],Yt):M[b];E?(C.copy(O.normals[0]).multiplyScalar(v.x),R.copy(O.binormals[0]).multiplyScalar(v.y),H.copy(y[0]).add(C).add(R),ht(H.x,H.y,H.z)):ht(v.x,v.y,0)}for(let b=1;b<=h;b++)for(let v=0;v<W;v++){const L=u?nt(M[v],Bt[v],Yt):M[v];E?(C.copy(O.normals[b]).multiplyScalar(L.x),R.copy(O.binormals[b]).multiplyScalar(L.y),H.copy(y[b]).add(C).add(R),ht(H.x,H.y,H.z)):ht(L.x,L.y,f/h*b)}for(let b=p-1;b>=0;b--){const v=b/p,L=d*Math.cos(v*Math.PI/2),z=g*Math.sin(v*Math.PI/2)+x;for(let I=0,F=J.length;I<F;I++){const Z=nt(J[I],dt[I],z);ht(Z.x,Z.y,f+L)}for(let I=0,F=T.length;I<F;I++){const Z=T[I];mt=xt[I];for(let Y=0,S=Z.length;Y<S;Y++){const _=nt(Z[Y],mt[Y],z);E?ht(_.x,_.y+y[h-1].y,y[h-1].x+L):ht(_.x,_.y,f+L)}}}et(),ct();function et(){const b=s.length/3;if(u){let v=0,L=W*v;for(let z=0;z<tt;z++){const I=q[z];It(I[2]+L,I[1]+L,I[0]+L)}v=h+p*2,L=W*v;for(let z=0;z<tt;z++){const I=q[z];It(I[0]+L,I[1]+L,I[2]+L)}}else{for(let v=0;v<tt;v++){const L=q[v];It(L[2],L[1],L[0])}for(let v=0;v<tt;v++){const L=q[v];It(L[0]+W*h,L[1]+W*h,L[2]+W*h)}}i.addGroup(b,s.length/3-b,0)}function ct(){const b=s.length/3;let v=0;Mt(J,v),v+=J.length;for(let L=0,z=T.length;L<z;L++){const I=T[L];Mt(I,v),v+=I.length}i.addGroup(b,s.length/3-b,1)}function Mt(b,v){let L=b.length;for(;--L>=0;){const z=L;let I=L-1;I<0&&(I=b.length-1);for(let F=0,Z=h+p*2;F<Z;F++){const Y=W*F,S=W*(F+1),_=v+z+Y,P=v+I+Y,N=v+I+S,k=v+z+S;Ut(_,P,N,k)}}}function ht(b,v,L){l.push(b),l.push(v),l.push(L)}function It(b,v,L){Ot(b),Ot(v),Ot(L);const z=s.length/3,I=w.generateTopUV(i,s,z-3,z-2,z-1);Xt(I[0]),Xt(I[1]),Xt(I[2])}function Ut(b,v,L,z){Ot(b),Ot(v),Ot(z),Ot(v),Ot(L),Ot(z);const I=s.length/3,F=w.generateSideWallUV(i,s,I-6,I-3,I-2,I-1);Xt(F[0]),Xt(F[1]),Xt(F[3]),Xt(F[1]),Xt(F[2]),Xt(F[3])}function Ot(b){s.push(l[b*3+0]),s.push(l[b*3+1]),s.push(l[b*3+2])}function Xt(b){r.push(b.x),r.push(b.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return ny(e,i,t)}static fromJSON(t,e){const i=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];i.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Wl[s.type]().fromJSON(s)),new wo(i,t.options)}}const ey={generateTopUV:function(n,t,e,i,s){const r=t[e*3],o=t[e*3+1],a=t[i*3],l=t[i*3+1],c=t[s*3],h=t[s*3+1];return[new ft(r,o),new ft(a,l),new ft(c,h)]},generateSideWallUV:function(n,t,e,i,s,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[i*3],h=t[i*3+1],f=t[i*3+2],u=t[s*3],d=t[s*3+1],g=t[s*3+2],x=t[r*3],p=t[r*3+1],m=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new ft(o,1-l),new ft(c,1-f),new ft(u,1-g),new ft(x,1-m)]:[new ft(a,1-l),new ft(h,1-f),new ft(d,1-g),new ft(p,1-m)]}};function ny(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class hr extends Se{constructor(t=.5,e=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);const a=[],l=[],c=[],h=[];let f=t;const u=(e-t)/s,d=new D,g=new ft;for(let x=0;x<=s;x++){for(let p=0;p<=i;p++){const m=r+p/i*o;d.x=f*Math.cos(m),d.y=f*Math.sin(m),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,h.push(g.x,g.y)}f+=u}for(let x=0;x<s;x++){const p=x*(i+1);for(let m=0;m<i;m++){const w=m+p,y=w,E=w+i+1,O=w+i+2,R=w+1;a.push(y,E,R),a.push(E,O,R)}}this.setIndex(a),this.setAttribute("position",new ce(l,3)),this.setAttribute("normal",new ce(c,3)),this.setAttribute("uv",new ce(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hr(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Pc extends Se{constructor(t=new Qs([new ft(0,.5),new ft(-.5,-.5),new ft(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const i=[],s=[],r=[],o=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new ce(s,3)),this.setAttribute("normal",new ce(r,3)),this.setAttribute("uv",new ce(o,2));function c(h){const f=s.length/3,u=h.extractPoints(e);let d=u.shape;const g=u.holes;pi.isClockWise(d)===!1&&(d=d.reverse());for(let p=0,m=g.length;p<m;p++){const w=g[p];pi.isClockWise(w)===!0&&(g[p]=w.reverse())}const x=pi.triangulateShape(d,g);for(let p=0,m=g.length;p<m;p++){const w=g[p];d=d.concat(w)}for(let p=0,m=d.length;p<m;p++){const w=d[p];s.push(w.x,w.y,0),r.push(0,0,1),o.push(w.x,w.y)}for(let p=0,m=x.length;p<m;p++){const w=x[p],y=w[0]+f,E=w[1]+f,O=w[2]+f;i.push(y,E,O),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return iy(e,t)}static fromJSON(t,e){const i=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];i.push(o)}return new Pc(i,t.curveSegments)}}function iy(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,i=n.length;e<i;e++){const s=n[e];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t}class qo extends Se{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const h=[],f=new D,u=new D,d=[],g=[],x=[],p=[];for(let m=0;m<=i;m++){const w=[],y=m/i;let E=0;m===0&&o===0?E=.5/e:m===i&&l===Math.PI&&(E=-.5/e);for(let O=0;O<=e;O++){const R=O/e;f.x=-t*Math.cos(s+R*r)*Math.sin(o+y*a),f.y=t*Math.cos(o+y*a),f.z=t*Math.sin(s+R*r)*Math.sin(o+y*a),g.push(f.x,f.y,f.z),u.copy(f).normalize(),x.push(u.x,u.y,u.z),p.push(R+E,1-y),w.push(c++)}h.push(w)}for(let m=0;m<i;m++)for(let w=0;w<e;w++){const y=h[m][w+1],E=h[m][w],O=h[m+1][w],R=h[m+1][w+1];(m!==0||o>0)&&d.push(y,E,R),(m!==i-1||l<Math.PI)&&d.push(E,O,R)}this.setIndex(d),this.setAttribute("position",new ce(g,3)),this.setAttribute("normal",new ce(x,3)),this.setAttribute("uv",new ce(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qo(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Lc extends Se{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const o=[],a=[],l=[],c=[],h=new D,f=new D,u=new D;for(let d=0;d<=i;d++)for(let g=0;g<=s;g++){const x=g/s*r,p=d/i*Math.PI*2;f.x=(t+e*Math.cos(p))*Math.cos(x),f.y=(t+e*Math.cos(p))*Math.sin(x),f.z=e*Math.sin(p),a.push(f.x,f.y,f.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),u.subVectors(f,h).normalize(),l.push(u.x,u.y,u.z),c.push(g/s),c.push(d/i)}for(let d=1;d<=i;d++)for(let g=1;g<=s;g++){const x=(s+1)*d+g-1,p=(s+1)*(d-1)+g-1,m=(s+1)*(d-1)+g,w=(s+1)*d+g;o.push(x,p,w),o.push(p,m,w)}this.setIndex(o),this.setAttribute("position",new ce(a,3)),this.setAttribute("normal",new ce(l,3)),this.setAttribute("uv",new ce(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Lc(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Yl extends qi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=id,this.normalScale=new ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Cd extends Me{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new qt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class sy extends Cd{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Wa=new oe,Th=new D,Ah=new D;class ry{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ft(512,512),this.map=null,this.mapPass=null,this.matrix=new oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ec,this._frameExtents=new ft(1,1),this._viewportCount=1,this._viewports=[new fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Th.setFromMatrixPosition(t.matrixWorld),e.position.copy(Th),Ah.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ah),e.updateMatrixWorld(),Wa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wa),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Wa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class oy extends ry{constructor(){super(new bc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ay extends Cd{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.target=new Me,this.shadow=new oy}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const wh=new oe;class ly{constructor(t,e,i=0,s=1/0){this.ray=new Go(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new yc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return wh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(wh),this}intersectObject(t,e=!0,i=[]){return Kl(t,this,i,e),i.sort(Ch),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)Kl(t[s],this,i,e);return i.sort(Ch),i}}function Ch(n,t){return n.distance-t.distance}function Kl(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)Kl(r[o],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:dc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=dc);const Wn={round:{color:"#b54060",radius:.13,speed:4.6,damage:10,life:5},machine:{color:"#ff8540",radius:.09,speed:8.5,damage:7,life:3.8},saw:{color:"#72dfd6",radius:.38,speed:3.8,damage:16,life:6},axe:{color:"#bca0ff",radius:.32,speed:4.8,damage:18,life:5},swipe:{color:"#ffdb72",radius:.58,speed:5.6,damage:15,life:.65},laser:{color:"#fa436d",radius:.16,speed:0,damage:22,life:.95}};function Rh(n,t=Wn[n].color){let e;if(n==="saw"){const i=new Qs;for(let s=0;s<32;s++){const r=s/32*Math.PI*2,o=s%2?.24:.4;s?i.lineTo(Math.cos(r)*o,Math.sin(r)*o):i.moveTo(Math.cos(r)*o,Math.sin(r)*o)}i.closePath(),e=new wo(i,{depth:.07,bevelEnabled:!1}),e.rotateX(-Math.PI/2)}else if(n==="axe"){const i=new Qs;i.moveTo(-.05,-.42),i.lineTo(.05,-.42),i.lineTo(.05,.12),i.lineTo(.35,.06),i.quadraticCurveTo(.5,.4,.05,.42),i.lineTo(-.05,.42),i.closePath(),e=new wo(i,{depth:.08,bevelEnabled:!1}),e.rotateX(-Math.PI/2)}else if(n==="swipe"){const i=new Qs;i.absarc(0,0,.67,-1.2,1.2,!1),i.absarc(0,0,.45,1.2,-1.2,!0),i.closePath(),e=new Pc(i),e.rotateX(-Math.PI/2)}else n==="laser"?e=new nn(1,.055,1):n==="machine"?e=new nn(.1,.1,.48):e=new qo(.13,6,4);return new ge(e,new Hi({color:t,side:Ze,transparent:n==="laser",opacity:n==="laser"?.22:1}))}function Ci(n){return{quota:n===6?17:14+n*7+n*n,spawnInterval:Math.max(.24,.94-n*.115),health:26+n*7,fireRate:Math.max(.48,1-n*.075),bulletSpeed:1+n*.055}}function Xa(n,t,e,i,s,r){const o=s-e,a=r-i,l=o*o+a*a,c=l?Math.max(0,Math.min(1,((n-e)*o+(t-i)*a)/l)):0;return Math.hypot(n-e-c*o,t-i-c*a)}const cy={round:{frequency:640,end:150,duration:.09,wave:"square",noise:.3},machine:{frequency:240,end:65,duration:.065,wave:"sawtooth",noise:.75},saw:{frequency:150,end:430,duration:.23,wave:"sawtooth",noise:.4},axe:{frequency:330,end:70,duration:.2,wave:"triangle",noise:.65},swipe:{frequency:1100,end:160,duration:.16,wave:"triangle",noise:.9},laser:{frequency:190,end:1500,duration:.25,wave:"sawtooth",noise:.12}};class uy{constructor(t){gt(this,"particles",[]);gt(this,"rings",[]);gt(this,"flashes",new Map);gt(this,"shake",0);gt(this,"time",0);gt(this,"positions",new Float32Array(480*3));gt(this,"colors",new Float32Array(480*3));gt(this,"geometry",new Se);gt(this,"points");gt(this,"audio");gt(this,"master");gt(this,"noise");gt(this,"voices",0);gt(this,"lastSound",new Map);this.scene=t,this.geometry.setAttribute("position",new an(this.positions,3).setUsage(Tu)),this.geometry.setAttribute("color",new an(this.colors,3).setUsage(Tu)),this.geometry.setDrawRange(0,0),this.points=new bS(this.geometry,new Md({size:.12,vertexColors:!0,transparent:!0,opacity:.9,depthWrite:!1})),this.points.frustumCulled=!1,t.add(this.points)}burst(t,e,i,s){for(let r=0;r<i&&this.particles.length<480;r++){const o=Math.random()*Math.PI*2,a=(.3+Math.random())*s,l=.12+Math.random()*.32;this.particles.push({p:t.clone(),v:new D(Math.cos(o)*a,Math.random()*s*.6,Math.sin(o)*a),life:l,max:l,color:new qt(e)})}}ring(t,e,i,s=.24){if(this.rings.length>=24)return;const r=new ge(new hr(.8,1,24),new Hi({color:e,transparent:!0,opacity:.8,side:Ze,depthWrite:!1}));r.rotation.x=-Math.PI/2,r.position.copy(t),this.scene.add(r),this.rings.push({mesh:r,life:s,max:s,size:i})}shot(t,e,i,s,r){const o=t.clone();o.y+=.7,o.addScaledVector(e.clone().normalize(),.45);const a=s?Wn[i].color:"#fff0a0";this.burst(o,a,i==="machine"?3:i==="laser"?10:5,i==="swipe"?4:2.5),(i==="saw"||i==="swipe")&&this.ring(o,a,i==="swipe"?1.1:.55,.18),r&&this.sound(i)}laser(t,e){this.burst(t,"#ffb9d0",14,4),this.ring(t,"#fa436d",1,.18),this.shake=Math.max(this.shake,.055),e&&this.sound("discharge")}hit(t,e,i,s){const r=t.clone();r.y+=.7,this.burst(r,i?"#ff695d":"#fff2cf",i?24:12,i?4.5:3),this.ring(r,i?"#ff695d":"#ffda8b",i?1.2:.65),this.flashes.set(e,.09),this.shake=Math.max(this.shake,i?.2:.035),s&&this.sound(i?"hurt":"hit")}death(t,e){const i=t.clone();i.y+=.7,this.burst(i,"#e5a0b9",30,5),this.ring(i,"#fff4ce",1.6,.35),this.shake=Math.max(this.shake,.07),e&&this.sound("death")}trail(t,e){this.burst(t,Wn[e].color,1,.35)}update(t){this.time+=t,this.shake=Math.max(0,this.shake-t*.9);for(let e=this.particles.length-1;e>=0;e--){const i=this.particles[e];if(i.life-=t,i.life<=0){this.particles.splice(e,1);continue}i.p.addScaledVector(i.v,t),i.v.y-=t*5}this.particles.forEach((e,i)=>{this.positions.set(e.p.toArray(),i*3);const s=e.life/e.max;this.colors.set([e.color.r*s,e.color.g*s,e.color.b*s],i*3)}),this.geometry.setDrawRange(0,this.particles.length),this.geometry.attributes.position.needsUpdate=!0,this.geometry.attributes.color.needsUpdate=!0;for(let e=this.rings.length-1;e>=0;e--){const i=this.rings[e];i.life-=t,i.mesh.scale.setScalar(i.size*(1-i.life/i.max)+.1),i.mesh.material.opacity=Math.max(0,i.life/i.max)*.65,i.life<=0&&(this.scene.remove(i.mesh),i.mesh.geometry.dispose(),i.mesh.material.dispose(),this.rings.splice(e,1))}for(const[e,i]of this.flashes){const s=i-t;e.traverse(r=>{r instanceof ge&&r.material instanceof Yl&&(r.material.emissive.set(s>0?"#fff2dd":"#000000"),r.material.emissiveIntensity=s>0?1:0)}),s<=0?this.flashes.delete(e):this.flashes.set(e,s)}}context(){if(this.audio??(this.audio=new AudioContext),!this.master){this.master=this.audio.createDynamicsCompressor(),this.master.threshold.value=-24,this.master.ratio.value=8;const t=this.audio.createGain();t.gain.value=.24,this.master.connect(t),t.connect(this.audio.destination),this.noise=this.audio.createBuffer(1,this.audio.sampleRate*.4,this.audio.sampleRate);const e=this.noise.getChannelData(0);for(let i=0;i<e.length;i++)e[i]=Math.random()*2-1}return this.audio.state==="suspended"&&this.audio.resume(),this.audio}tone(t,e){this.play("tone",t,t*.7,e,"triangle",0)}sound(t){if(t==="hit")this.play(t,450,90,.09,"triangle",.7);else if(t==="hurt")this.play(t,140,35,.24,"sawtooth",.85);else if(t==="death")this.play(t,210,30,.3,"square",1);else if(t==="discharge")this.play(t,1700,150,.2,"sawtooth",.4);else{const e=cy[t];this.play(t,e.frequency,e.end,e.duration,e.wave,e.noise)}}play(t,e,i,s,r,o){try{const a=this.context(),l=a.currentTime;if(this.voices>=18||l-(this.lastSound.get(t)??-1)<(t==="machine"?.045:.065))return;this.lastSound.set(t,l),this.voices++;const c=a.createGain();c.gain.setValueAtTime(.001,l),c.gain.linearRampToValueAtTime(.15,l+.004),c.gain.exponentialRampToValueAtTime(.001,l+s),c.connect(this.master);const h=a.createOscillator();if(h.type=r,h.frequency.setValueAtTime(e*(.94+Math.random()*.12),l),h.frequency.exponentialRampToValueAtTime(i,l+s),h.connect(c),h.start(),h.stop(l+s),h.onended=()=>{h.disconnect(),c.disconnect(),this.voices--},o&&this.noise){const f=a.createBufferSource(),u=a.createBiquadFilter(),d=a.createGain();f.buffer=this.noise,u.type="highpass",u.frequency.value=t==="swipe"?1300:500,d.gain.value=o,f.connect(u),u.connect(d),d.connect(c),f.start(),f.stop(l+s),f.onended=()=>{f.disconnect(),u.disconnect(),d.disconnect()}}}catch{}}reset(){for(const[t]of this.flashes)t.traverse(e=>{e instanceof ge&&e.material instanceof Yl&&e.material.emissive.set("#000000")});this.flashes.clear(),this.particles=[];for(const t of this.rings)this.scene.remove(t.mesh),t.mesh.geometry.dispose(),t.mesh.material.dispose();this.rings=[],this.geometry.setDrawRange(0,0),this.shake=0}dispose(){var t;this.reset(),this.scene.remove(this.points),this.geometry.dispose(),this.points.material.dispose(),(t=this.audio)==null||t.close()}}const Ae=1.2,Ph=8.45*Ae;function Lh(n,t){return Math.abs(n)<=Ph&&Math.abs(t)<=Ph&&!(Math.abs(n)>6.4*Ae&&Math.abs(t)>6.4*Ae)}function ho(n){return()=>{n|=0,n=n+1831565813|0;let t=Math.imul(n^n>>>15,1|n);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function hy(n){const t=ho(n),e=[];for(let o=-9;o<=9;o++)for(let a=-9;a<=9;a++){if(Math.abs(o)>6&&Math.abs(a)>6&&t()<.65)continue;const l=Math.max(0,Math.abs(o)-3)*.16+Math.max(0,Math.abs(a)-5)*.12;e.push({x:o,z:a,h:l})}const i=new Set(e.map(o=>`${o.x},${o.z}`)),s=new Set,r=["0,0"];for(;r.length;){const o=r.pop();if(s.has(o)||!i.has(o))continue;s.add(o);const[a,l]=o.split(",").map(Number);r.push(`${a+1},${l}`,`${a-1},${l}`,`${a},${l+1}`,`${a},${l-1}`)}return e.filter(o=>s.has(`${o.x},${o.z}`)).map(o=>({x:o.x*Ae,z:o.z*Ae,h:o.h}))}function Je(n,t){return Math.max(0,Math.abs(n/Ae)-3)*.16+Math.max(0,Math.abs(t/Ae)-5)*.12}function to(n,t,e=4.6){const i=t.x-n.x,s=t.z-n.z,r=Math.hypot(i,s);return r>e&&(t.x=n.x+i/r*e,t.z=n.z+s/r*e),r}function fy(n,t,e=!1){const i=Math.max(1,n)/Math.max(1,t),s=e||n<=950,r=s?i<1?6.2/i:7.5:Math.max(15*Ae,13*Ae/i);return{follow:s,span:r,aspect:i}}const pn=[{name:"Bob",role:"THE DEAD WEIGHT",color:"#dc8a61",description:"Means well. Shoots poorly. Falls often. Keep a little distance — friendly fire is still fire."},{name:"Devin",role:"THE SYNERGIST",color:"#8c9ab5",description:"His corporate aura slows everyone down. Keep enemies close to him, and yourself just far enough away."},{name:"Kara",role:"THE MAIN CHARACTER",color:"#c67c9b",description:"All eyes on her. All loot, too. Fast, magnetic, and increasingly full of herself. Don’t get too close."},{name:"Sunny",role:"THE TEAM LEAD",color:"#d8b451",description:"Big on motivation. Small on participation. Somehow you’re always between her and the bullets."}],dy=[["I think I helped!","Oops. Was that you?","Just need a quick lie down."],["Let’s circle back.","Let’s synergize on this.","Can we take this offline?"],["You’re welcome.","I deserve this one.","Try keeping up with me."],["We’re all in this together!","Give it 110 percent!","I’m empowering you to lead."]];class py{constructor(t,e,i){gt(this,"extras",[]);gt(this,"expansionChecked",!1);gt(this,"levelStartKills",0);gt(this,"announcementTime",0);gt(this,"scene",new ES);gt(this,"camera",new bc);gt(this,"renderer");gt(this,"root",new Cn);gt(this,"actors",new Cn);gt(this,"player");gt(this,"mate");gt(this,"rope");gt(this,"aura");gt(this,"exit");gt(this,"cameraTarget",new D);gt(this,"followCamera",!1);gt(this,"cameraSpan",18);gt(this,"resizeObserver");gt(this,"effects",new uy(this.scene));gt(this,"p",new D(-1,0,0));gt(this,"m",new D(2,0,0));gt(this,"enemies",[]);gt(this,"bullets",[]);gt(this,"boxes",[]);gt(this,"keys",new Set);gt(this,"touch",{x:0,y:0});gt(this,"pointer",new ft);gt(this,"aiming",!1);gt(this,"firing",!1);gt(this,"paused",!0);gt(this,"sound",!0);gt(this,"state",{hp:100,level:1,kills:0,time:0,loot:[],tension:0,quote:"",stolen:0,team:[],announcement:""});gt(this,"selected",0);gt(this,"seed",1);gt(this,"rng",ho(1));gt(this,"clock",0);gt(this,"shot",0);gt(this,"mateShot",0);gt(this,"spawn",0);gt(this,"wave",0);gt(this,"quota",0);gt(this,"quoteClock",0);gt(this,"invulnerable",0);gt(this,"dashTime",0);gt(this,"dashCooldown",0);gt(this,"frame",0);gt(this,"last",0);gt(this,"accumulator",0);gt(this,"reportClock",0);gt(this,"size",new ft);gt(this,"ray",new ly);gt(this,"aim",new D);gt(this,"resize",()=>{const t=Math.max(1,this.host.clientWidth),e=Math.max(1,this.host.clientHeight);this.renderer.setSize(t,e);const i=fy(t,e,typeof matchMedia=="function"&&matchMedia("(pointer: coarse)").matches);this.followCamera=i.follow,this.cameraSpan=i.span,this.camera.left=-i.span*i.aspect,this.camera.right=i.span*i.aspect,this.camera.top=i.span,this.camera.bottom=-i.span,this.camera.near=.1,this.camera.far=150,this.camera.updateProjectionMatrix(),this.updateCamera(0,!0)});gt(this,"keyDown",t=>{["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(t.code)&&t.preventDefault(),this.keys.add(t.code),t.code==="Space"&&this.dash()});gt(this,"keyUp",t=>{this.keys.delete(t.code)});gt(this,"blur",()=>{this.keys.clear(),this.firing=!1,this.touch={x:0,y:0},this.paused||(this.paused=!0,this.finish("pause"))});gt(this,"pointerMove",t=>{const e=this.renderer.domElement.getBoundingClientRect();this.pointer.set((t.clientX-e.left)/e.width*2-1,-(t.clientY-e.top)/e.height*2+1),this.aiming=t.pointerType!=="touch"});gt(this,"pointerDown",t=>{t.pointerType!=="touch"&&(this.firing=!0)});gt(this,"pointerUp",()=>{this.firing=!1});gt(this,"animate",t=>{const e=Math.min(.1,(t-this.last)/1e3||0);if(this.last=t,this.paused)this.state.time===0&&(this.player.position.set(-1,0,0),this.mate.position.set(2,0,0));else for(this.accumulator+=e;this.accumulator>=1/60&&(this.tick(1/60),this.accumulator-=1/60,!this.paused););this.updateCamera(e),this.drawTether(this.rope,this.m);for(const s of this.extras)this.drawTether(s.rope,s.p);this.exit.rotation.y+=e;const i=this.camera.position.clone();if(!this.paused){const s=this.effects.shake;this.camera.position.x+=Math.sin(t*.09)*s,this.camera.position.y+=Math.cos(t*.12)*s*.6}this.renderer.render(this.scene,this.camera),this.camera.position.copy(i),this.reportClock+=e,this.reportClock>.1&&(this.reportClock=0,this.report({...this.state,loot:[...this.state.loot]})),this.frame=requestAnimationFrame(this.animate)});this.host=t,this.report=e,this.finish=i,this.renderer=new yS({antialias:!0,alpha:!1}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,1.7)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Wf,t.appendChild(this.renderer.domElement),this.scene.background=new qt("#eee9df"),this.scene.fog=new Ac("#eee9df",42,85),this.scene.add(new sy("#fff7e7","#9299ab",2.7));const s=new ay("#fff4de",3);s.position.set(-12,24,10),s.castShadow=!0,s.shadow.mapSize.set(2048,2048),Object.assign(s.shadow.camera,{left:-22,right:22,top:22,bottom:-22}),s.shadow.bias=-.001,this.scene.add(s,this.root,this.actors),this.player=this.character("#447f7a"),this.mate=this.character(pn[0].color),this.actors.add(this.player,this.mate),this.rope=new _h(new Se,new Gl({color:"#be7658"})),this.scene.add(this.rope),this.aura=new ge(new hr(2.8,3,64),new Hi({color:"#aab9d0",transparent:!0,opacity:.45,side:Ze})),this.aura.rotation.x=-Math.PI/2,this.scene.add(this.aura),this.exit=new Cn,this.root.add(this.exit),this.level(1),this.resize(),typeof ResizeObserver<"u"&&(this.resizeObserver=new ResizeObserver(this.resize),this.resizeObserver.observe(t)),window.addEventListener("resize",this.resize),window.addEventListener("keydown",this.keyDown),window.addEventListener("keyup",this.keyUp),window.addEventListener("blur",this.blur),t.addEventListener("pointermove",this.pointerMove),t.addEventListener("pointerdown",this.pointerDown),window.addEventListener("pointerup",this.pointerUp),this.frame=requestAnimationFrame(this.animate)}mesh(t,e){const i=new ge(t,new Yl({color:e,roughness:.85}));return i.castShadow=!0,i.receiveShadow=!0,i}character(t){const e=new Cn,i=this.mesh(new Ss(.28,.36,.68,7),t);i.position.y=.55;const s=this.mesh(new qo(.24,12,8),"#fae8cf");s.position.y=1.04;const r=this.mesh(new Ss(.3,.3,.18,7),t);r.position.y=1.24;const o=this.mesh(new nn(.13,.13,.6),"#3c5052");return o.position.set(.26,.7,.3),e.add(i,s,r,o),e}clear(t){for(const e of[...t.children])t.remove(e),e.traverse(i=>{i instanceof ge&&(i.geometry.dispose(),(Array.isArray(i.material)?i.material:[i.material]).forEach(r=>r.dispose()))})}level(t){this.effects.reset(),this.clear(this.root);for(const s of this.enemies)this.actors.remove(s.mesh),s.mesh.traverse(r=>{r instanceof ge&&(r.geometry.dispose(),r.material.dispose())});for(const s of this.bullets)this.scene.remove(s.mesh),s.mesh.geometry.dispose(),s.mesh.material.dispose();this.enemies=[],this.bullets=[],this.boxes=[],this.state.level=t,this.rng=ho(this.seed+t*7919),this.p.set(-1,0,0),this.m.set(2,0,0),this.wave=0,this.quota=Ci(t).quota,this.spawn=1,this.clock=0,this.expansionChecked=!1,this.levelStartKills=this.state.kills,this.state.announcement="",this.announcementTime=0;for(const[s,r]of this.extras.entries())r.p.set(-2-s,0,1.5),r.shot=0;const e=["#d9b8a3","#a9c9c1","#b8b4d0","#d4c78f","#c5a5ae","#90b5b4"];for(const s of hy(this.seed+t)){const r=this.mesh(new nn(.99*Ae,2+s.h,.99*Ae),e[t-1]);r.position.set(s.x,-1+s.h/2,s.z),this.root.add(r)}for(const s of[-13.2,13.2])for(const r of[-9.6,9.6]){const o=this.mesh(new nn(1.7,4+this.rng()*4,1.7),"#dfd6c9");o.position.set(s,0,r),this.root.add(o);const a=this.mesh(new Rc(1.35,1.6,4),"#7eaaa6");a.position.set(s,4,r),a.rotation.y=Math.PI/4,this.root.add(a)}for(let s=0;s<4;s++){const r=new Cn;r.add(this.mesh(new nn(.65,.65,.65),"#f0c95c"));const o=this.mesh(new nn(.72,.12,.72),"#fff3ba");r.add(o),r.position.set((s%2?1:-1)*(4+this.rng()*2)*Ae,0,(s<2?1:-1)*(3+this.rng()*3)*Ae),this.root.add(r),this.boxes.push(r)}this.exit=new Cn;const i=new ge(new Lc(.9,.13,8,32),new Hi({color:"#faffdf"}));i.position.y=1.3,this.exit.add(i),this.exit.position.set(0,0,-7*Ae),this.exit.visible=!1,this.root.add(this.exit)}start(t,e){this.removeExtras(),this.selected=t,this.seed=e,this.state={hp:100,level:1,kills:0,time:0,loot:[],tension:0,quote:"",stolen:0,team:[],announcement:""},this.clear(this.mate);const i=this.character(pn[t].color);this.mate.add(i),this.mate.scale.setScalar(1),this.level(1),this.paused=!1,this.shot=0,this.mateShot=0,this.quoteClock=2,this.invulnerable=0,this.dashCooldown=0,this.dashTime=0,this.keys.clear(),this.touch={x:0,y:0},this.firing=!1,this.updateCamera(0,!0),this.report({...this.state})}updateCamera(t,e=!1){const s=this.followCamera&&(!this.paused||this.state.time>0)?new D(this.p.x,Je(this.p.x,this.p.z)-this.cameraSpan*.12,this.p.z):new D;this.cameraTarget.lerp(s,e?1:1-Math.exp(-t*10)),this.camera.position.copy(this.cameraTarget).add(new D(24,30,24)),this.camera.lookAt(this.cameraTarget),this.camera.updateMatrixWorld()}dash(){this.paused||this.dashCooldown>0||(this.dashTime=.19,this.dashCooldown=1.6,this.invulnerable=.25,this.beep(420,.08))}move(t,e,i){const s=t.x+e,r=t.z+i;Lh(s,r)&&(t.x=s,t.z=r)}damage(t){this.invulnerable>0||(this.state.hp=Math.max(0,this.state.hp-t*(this.has("Golden parachute")?.7:1)),this.invulnerable=.45,this.effects.hit(this.p,this.player,!0,this.sound),this.state.hp<=0&&(this.paused=!0,this.finish("dead")))}beep(t,e){this.sound&&this.effects.tone(t,e)}fire(t,e,i=!1,s=10,r=9,o=0,a="round"){const l=!i&&s===10&&this.has("Split decision")?3:1;for(let c=0;c<l;c++){const h=e.clone();h.y=0,h.normalize().applyAxisAngle(new D(0,1,0),(c-(l-1)/2)*.22+o);const f=Rh(a,i?Wn[a].color:this.has("Rose-colored glasses")?"#ee80bd":"#fff3ad"),u=t.clone();u.y=Je(u.x,u.z)+.65;const d=Math.atan2(h.x,h.z);f.position.copy(u),f.rotation.y=d;const g=a==="laser";g&&(f.scale.set(.07,1,22),f.position.addScaledVector(h,11)),this.scene.add(f),this.bullets.push({p:u,v:h.multiplyScalar(r),mesh:f,life:i?Wn[a].life:3,hostile:i,damage:s,pierce:this.has("Through the ranks")&&!i?2:0,hit:new Set,kind:a,radius:Wn[a].radius,arming:g?.72:0,length:g?22:0,heading:d})}this.effects.shot(t,e,a,i,this.sound)}enemyShot(t,e,i=0){const s=Wn[e];this.fire(t.p,this.p.clone().sub(t.p),!0,s.damage,s.speed*Ci(this.state.level).bulletSpeed,i,e)}has(t){return this.state.loot.includes(t)}spawnEnemy(){let t=(this.rng()-.5)*12*Ae,e=(this.rng()-.5)*12*Ae;this.rng()>.5?t=(this.rng()>.5?8:-8)*Ae:e=(this.rng()>.5?8:-8)*Ae;const i=this.state.level,s=i===1?[0,1,2]:i===2?[0,1,2,3,7]:i===3?[1,2,3,5,7]:[1,2,3,5,6,7],r=i===6&&this.wave===0?4:s[Math.floor(this.rng()*s.length)],o=this.character(["#b5636c","#e18449","#47a9a3","#9473bc","#654b76","#d45178","#4c729d","#c8a44f"][r]);if(r===4&&o.scale.setScalar(2.8),r===6){const c=this.mesh(new Ss(.65,.8,.25,8),"#3c5368");c.position.y=.15,o.add(c),o.scale.setScalar(1.25)}const a=Rh(r===2?"saw":r===3?"axe":r===7?"swipe":r===5?"laser":"machine");a.position.set(.35,.8,.45),r===5&&a.scale.set(.16,3,.85),o.add(a);const l=new D(t,0,e);this.enemies.push({p:l,mesh:o,hp:r===4?1100:r===6?Ci(i).health*1.7:Ci(i).health,type:r,clock:-this.rng()*.65}),this.actors.add(o),this.wave++}loot(t,e){if(this.root.remove(t),t.traverse(i=>{i instanceof ge&&(i.geometry.dispose(),i.material.dispose())}),this.boxes.splice(this.boxes.indexOf(t),1),e)this.state.stolen++,this.state.quote="Obviously, this was meant for me.";else{const s=["Split decision","Through the ranks","Rapid promotion","Hostile takeover","Rose-colored glasses","Golden parachute"].filter(r=>!this.has(r));if(s.length){const r=s[Math.floor(this.rng()*s.length)];this.state.loot=[...this.state.loot,r]}else this.state.hp=Math.min(100,this.state.hp+20);this.beep(880,.15)}}removeExtras(){for(const t of this.extras)this.actors.remove(t.mesh),this.clear(t.mesh),this.scene.remove(t.rope,t.aura),t.rope.geometry.dispose(),t.rope.material.dispose(),t.aura.geometry.dispose(),t.aura.material.dispose();this.extras=[]}checkExpansion(){if(this.expansionChecked||this.state.kills-this.levelStartKills<Math.ceil(this.quota*.45)||this.state.hp<=0)return;this.expansionChecked=!0;const t=ho(this.seed+this.state.level*104729+31337);if(t()>=.1)return;const e=pn.map((i,s)=>s).filter(i=>i!==this.selected&&!this.extras.some(s=>s.id===i));e.length&&this.recruit(e[Math.floor(t()*e.length)])}recruit(t){if(t===this.selected||this.extras.some(o=>o.id===t))return;const e=this.character(pn[t].color),i=this.p.clone();for(const[o,a]of[[-2,0],[2,0],[0,2],[0,-2]])if(Lh(this.p.x+o,this.p.z+a)){i.set(this.p.x+o,0,this.p.z+a);break}e.position.set(i.x,Je(i.x,i.z),i.z);const s=new _h(new Se,new Gl({color:pn[t].color})),r=new ge(new hr(2.8,3,64),new Hi({color:"#aab9d0",transparent:!0,opacity:.45,side:Ze}));r.rotation.x=-Math.PI/2,r.visible=t===1,this.actors.add(e),this.scene.add(s,r),this.extras.push({id:t,p:i,mesh:e,rope:s,aura:r,shot:1,stolen:0}),this.state.team=this.extras.map(o=>o.id),this.state.announcement=`Congratulations on your bigger team! ${pn[t].name} has joined. More teamwork. Same paycheck.`,this.announcementTime=7,this.beep(1046,.2)}updateExtra(t,e){const{id:i,p:s,mesh:r}=t,o=s.distanceTo(this.p),a=i===0&&this.clock%12>9;let l=this.p.clone().add(new D(-1.6,0,1.6));i===2&&this.boxes.length?l=this.boxes.reduce((f,u)=>f.position.distanceTo(s)<u.position.distanceTo(s)?f:u).position.clone():i===3&&this.enemies.length&&(l=this.p.clone().add(this.p.clone().sub(this.enemies[0].p).normalize().multiplyScalar(2.5)));const c=l.sub(s);if(c.length()>.4&&!a&&(c.normalize().multiplyScalar(e*(i===2?5.1:3)),this.move(s,c.x,c.z)),i===2){if(o<3&&o>.01){const f=s.clone().sub(this.p).normalize().multiplyScalar(.55*e);this.move(this.p,f.x,f.z)}if(o<.95&&this.damage(7),o>4.6){const f=s.clone().sub(this.p).normalize().multiplyScalar((o-4.6)*.8);this.move(this.p,f.x,f.z)}}to(this.p,s),this.state.tension=Math.max(this.state.tension,Math.min(1,o/4.6)),t.shot-=e;const h=this.enemies.reduce((f,u)=>!f||u.p.distanceTo(s)<f.p.distanceTo(s)?u:f,void 0);if(t.shot<=0&&h&&i!==1){t.shot=i===2?.35:i===3?5:1.4;const f=i===0&&o<1.8,u=f?this.p:h.p;this.fire(s,u.clone().sub(s),f,i===2?18:5,8,(this.rng()-.5)*.35),r.rotation.y=Math.atan2(u.x-s.x,u.z-s.z)}if(i===2)for(const f of[...this.boxes])Math.hypot(f.position.x-s.x,f.position.z-s.z)<.85&&(this.loot(f,!0),t.stolen++);r.rotation.z=a?1.3:0,r.scale.setScalar(i===2?Math.min(2,1+t.stolen*.17):1),r.position.set(s.x,Je(s.x,s.z),s.z),t.aura.position.set(s.x,Je(s.x,s.z)+.04,s.z)}drawTether(t,e){const i=[];for(let s=0;s<=16;s++){const r=s/16;i.push(new D(ha.lerp(this.p.x,e.x,r),ha.lerp(Je(this.p.x,this.p.z),Je(e.x,e.z),r)+.55-Math.sin(r*Math.PI)*.25,ha.lerp(this.p.z,e.z,r)))}t.geometry.dispose(),t.geometry=new Se().setFromPoints(i)}tick(t){this.effects.update(t),this.clock+=t,this.state.time+=t,this.invulnerable-=t,this.dashTime-=t,this.dashCooldown-=t,this.shot-=t,this.mateShot-=t,this.quoteClock-=t,this.announcementTime-=t,this.announcementTime<=0&&(this.state.announcement=""),this.quoteClock<0&&(this.state.quote=dy[this.selected][Math.floor(this.rng()*3)],this.quoteClock=9),this.quoteClock<5&&(this.state.quote="");const e=Number(this.keys.has("KeyD")||this.keys.has("ArrowRight"))-Number(this.keys.has("KeyA")||this.keys.has("ArrowLeft"))+this.touch.x,i=Number(this.keys.has("KeyS")||this.keys.has("ArrowDown"))-Number(this.keys.has("KeyW")||this.keys.has("ArrowUp"))+this.touch.y,s=this.p.distanceTo(this.m),r=this.selected===0&&this.clock%12>9;let o=4.1;this.selected===1&&(o*=Math.max(.3,Math.min(1,s/3))),r&&s>3.8&&(o*=.4);for(const u of this.extras){const d=this.p.distanceTo(u.p);u.id===1&&(o*=Math.max(.3,Math.min(1,d/3))),u.id===0&&this.clock%12>9&&d>3.8&&(o*=.4)}this.dashTime>0&&(o*=3);const a=Math.max(1,Math.hypot(e,i));this.move(this.p,(e+i)*.707/a*o*t,(i-e)*.707/a*o*t);let l=this.p.clone();if(this.selected===2&&this.boxes.length)l=this.boxes.reduce((u,d)=>u.position.distanceTo(this.m)<d.position.distanceTo(this.m)?u:d).position.clone();else if(this.selected===3&&this.enemies.length){const u=this.enemies[0].p;l=this.p.clone().add(this.p.clone().sub(u).normalize().multiplyScalar(2.5))}else l.add(new D(1.6,0,1.6));const c=l.sub(this.m);if(c.length()>.4&&!r&&(c.normalize().multiplyScalar(t*(this.selected===2?5.1:3)),this.move(this.m,c.x,c.z)),this.selected===2){if(s<3&&s>.01){const u=this.m.clone().sub(this.p).normalize().multiplyScalar(.55*t);this.move(this.p,u.x,u.z)}if(s<.95&&this.damage(7),s>4.6){const u=this.m.clone().sub(this.p).normalize().multiplyScalar((s-4.6)*.8);this.move(this.p,u.x,u.z)}}to(this.p,this.m),this.state.tension=Math.min(1,s/4.6),this.aura.visible=this.selected===1,this.aura.position.set(this.m.x,Je(this.m.x,this.m.z)+.04,this.m.z),this.mate.rotation.z=r?1.3:0,this.mate.scale.setScalar(this.selected===2?Math.min(2,1+this.state.stolen*.17):1),this.spawn-=t,this.spawn<=0&&this.wave<this.quota&&(this.spawn=Ci(this.state.level).spawnInterval,this.spawnEnemy());const h=this.enemies.reduce((u,d)=>!u||d.p.distanceTo(this.p)<u.p.distanceTo(this.p)?d:u,void 0);let f=new D(0,0,-1);if(this.aiming&&this.firing?(this.ray.setFromCamera(this.pointer,this.camera),this.ray.ray.intersectPlane(new ui(new D(0,1,0),-.65),this.aim),f=this.aim.clone().sub(this.p),f.y=0):h&&(f=h.p.clone().sub(this.p)),this.shot<=0&&(h||this.firing)&&(this.fire(this.p,f,!1,10,this.has("Rapid promotion")?13:10),this.shot=this.has("Rapid promotion")?.13:.23),this.player.rotation.y=Math.atan2(f.x,f.z),this.mateShot<=0&&h&&(this.mateShot=this.selected===2?.35:this.selected===3?5:1.4,this.selected!==1)){const u=this.selected===0&&s<1.8?this.p:h.p;this.fire(this.m,u.clone().sub(this.m),this.selected===0&&s<1.8,this.selected===2?18:5,8,(this.rng()-.5)*.35)}for(const u of this.extras)this.updateExtra(u,t);to(this.p,this.m);for(const u of this.extras)to(this.p,u.p);for(const u of this.enemies){u.clock+=t;const d=this.extras.find(E=>E.id===2),g=this.selected===2?this.m:d?d.p:this.p,x=g.clone().sub(u.p),p=x.length();x.normalize();let m=u.type===3||u.type===7?2.7+this.state.level*.16:u.type===4?.8:1.45+this.state.level*.14;(this.selected===1&&u.p.distanceTo(this.m)<3||this.extras.some(E=>E.id===1&&u.p.distanceTo(E.p)<3))&&(m*=.3),u.type!==6&&(!(u.type===1||u.type===5)||p>5.5)&&this.move(u.p,x.x*m*t,x.z*m*t),u.p.distanceTo(this.p)<(u.type===4?1.3:.65)&&this.damage(12+this.state.level);const w=Ci(this.state.level).fireRate,y={0:1.8,1:1.55,2:1.9,3:1.65,4:1.1,5:2.4,6:1.7,7:1.2}[u.type]*w;if(u.clock>=y)if(u.clock=0,u.type===1)u.burst=5+this.state.level,u.burstClock=0;else if(u.type===5)this.enemyShot(u,"laser");else if(u.type===2)for(let E=-1;E<=1;E++)this.enemyShot(u,"saw",E*.4);else if(u.type===3)for(let E=-1;E<=1;E++)this.enemyShot(u,"axe",E*.26);else if(u.type===7)p<4?this.enemyShot(u,"swipe"):this.enemyShot(u,"axe");else if(u.type===6||u.type===4){const E=u.type===4?24:12;for(let O=0;O<E;O++){const R=O/E*Math.PI*2+this.clock*.6,C=u.type===4&&O%3===0?"saw":"round";this.fire(u.p,new D(Math.cos(R),0,Math.sin(R)),!0,Wn[C].damage,Wn[C].speed*Ci(this.state.level).bulletSpeed,0,C)}u.type===4&&(this.enemyShot(u,"laser",.25),this.enemyShot(u,"laser",-.25))}else this.enemyShot(u,"round");u.burst&&(u.burstClock=(u.burstClock??0)-t,u.burstClock<=0&&(this.enemyShot(u,"machine",(this.rng()-.5)*.12),u.burst--,u.burstClock=.075)),u.mesh.position.set(u.p.x,Je(u.p.x,u.p.z),u.p.z),u.mesh.rotation.y=Math.atan2(x.x,x.z)}for(const u of this.bullets){u.life-=t;const d=u.p.clone();if(u.arming-=t,u.kind==="laser"){const g=u.arming<=0;g&&u.arming+t>0&&this.effects.laser(u.p,this.sound);const x=u.mesh.material;if(x.opacity=g?.95:.15+Math.sin(this.clock*26)*.08,u.mesh.scale.x=g?.32:.07,g){const p=u.p.x+Math.sin(u.heading)*u.length,m=u.p.z+Math.cos(u.heading)*u.length;Xa(this.p.x,this.p.z,u.p.x,u.p.z,p,m)<.28+u.radius&&this.damage(u.damage)}continue}if(u.p.addScaledVector(u.v,t),u.p.y=Je(u.p.x,u.p.z)+.65,u.mesh.position.copy(u.p),u.trailClock=(u.trailClock??0)-t,u.hostile&&u.kind!=="round"&&u.trailClock<=0&&(u.trailClock=.07,this.effects.trail(u.p,u.kind)),(u.kind==="saw"||u.kind==="axe")&&(u.mesh.rotation.y+=t*(u.kind==="saw"?15:9)),u.kind==="swipe"&&(u.mesh.rotation.y+=t*6),u.hostile)Xa(this.p.x,this.p.z,d.x,d.z,u.p.x,u.p.z)<.28+u.radius&&(this.damage(u.damage),u.kind!=="swipe"&&(u.life=0));else for(const g of this.enemies)if(!u.hit.has(g)&&Xa(g.p.x,g.p.z,d.x,d.z,u.p.x,u.p.z)<(g.type===4?.95:.45)){if(u.hit.add(g),g.hp-=u.damage,this.effects.hit(g.p,g.mesh,!1,this.sound),this.has("Hostile takeover"))for(const x of this.enemies)x!==g&&x.p.distanceTo(g.p)<1.7&&(x.hp-=5,this.effects.hit(x.p,x.mesh,!1,this.sound));u.pierce--<=0&&(u.life=0);break}}for(let u=this.bullets.length-1;u>=0;u--)if(this.bullets[u].life<=0){const d=this.bullets[u];this.scene.remove(d.mesh),d.mesh.geometry.dispose(),d.mesh.material.dispose(),this.bullets.splice(u,1)}for(let u=this.enemies.length-1;u>=0;u--)if(this.enemies[u].hp<=0){const d=this.enemies[u];this.effects.death(d.p,this.sound),this.actors.remove(d.mesh),d.mesh.traverse(g=>{g instanceof ge&&(g.geometry.dispose(),g.material.dispose())}),this.enemies.splice(u,1),this.state.kills++}for(const u of[...this.boxes])u.position.y=Je(u.position.x,u.position.z)+.6+Math.sin(this.clock*2)*.12,u.rotation.y+=t*.7,Math.hypot(u.position.x-this.p.x,u.position.z-this.p.z)<.8?this.loot(u,!1):this.selected===2&&Math.hypot(u.position.x-this.m.x,u.position.z-this.m.z)<.85&&this.loot(u,!0);this.checkExpansion(),this.wave>=this.quota&&!this.enemies.length&&(this.state.level===6?(this.paused=!0,this.finish("won")):(this.exit.visible=!0,this.p.distanceTo(this.exit.position)<1.4&&(this.state.hp=Math.min(100,this.state.hp+18),this.level(this.state.level+1)))),this.player.position.set(this.p.x,Je(this.p.x,this.p.z),this.p.z),this.mate.position.set(this.m.x,Je(this.m.x,this.m.z),this.m.z),this.player.visible=this.invulnerable<=0||Math.floor(this.clock*20)%2===0}dispose(){var t;(t=this.resizeObserver)==null||t.disconnect(),this.removeExtras(),cancelAnimationFrame(this.frame),window.removeEventListener("resize",this.resize),window.removeEventListener("keydown",this.keyDown),window.removeEventListener("keyup",this.keyUp),window.removeEventListener("blur",this.blur),window.removeEventListener("pointerup",this.pointerUp),this.host.removeEventListener("pointermove",this.pointerMove),this.host.removeEventListener("pointerdown",this.pointerDown),this.clear(this.root),this.clear(this.actors),this.effects.dispose(),this.renderer.dispose()}}const my={key:0,class:"menu"},gy={class:"roster"},_y=["onClick"],vy={class:"choice"},xy={class:"description"},My={class:"launch"},Sy={class:"hud"},yy={class:"health"},Ey={class:"level"},by={class:"partner"},Ty={class:"tension"},Ay={key:0,class:"team-announcement",role:"status"},wy={key:1,class:"speech"},Cy={class:"inventory"},Ry={key:0},Py={class:"progress"},Ly={class:"touch-controls"},Dy={key:2,class:"overlay"},Iy={class:"modal"},Uy={class:"eyebrow"},Ny={key:3},Oy=Lp({__name:"App",setup(n){const t=Ri(),e=Ri(0),i=Ri("menu"),s=Ri(String(Math.floor(Math.random()*999999))),r=Ri(!0),o=Ri({hp:100,level:1,kills:0,time:0,loot:[],tension:0,quote:"",stolen:0,team:[],announcement:""});let a;function l(){a.start(e.value,Number(s.value)||1),i.value="play"}function c(){i.value==="play"?(a.paused=!0,i.value="pause"):i.value==="pause"&&(a.paused=!1,i.value="play")}function h(u){u.code==="Escape"&&c()}function f(u){const d=u.currentTarget;d.setPointerCapture(u.pointerId);const g=d.getBoundingClientRect();a.touch.x=Math.max(-1,Math.min(1,(u.clientX-g.x-g.width/2)/45)),a.touch.y=Math.max(-1,Math.min(1,(u.clientY-g.y-g.height/2)/45))}return gf(()=>{a=new py(t.value,u=>o.value=u,u=>i.value=u),window.addEventListener("keydown",h)}),_f(()=>{a==null||a.dispose(),window.removeEventListener("keydown",h)}),(u,d)=>(Te(),Ce(Ue,null,[_t("div",{ref_key:"host",ref:t,class:"world"},null,512),_t("header",null,[d[7]||(d[7]=_t("a",{class:"wordmark",href:"./"},[xe("TT"),_t("span",null,"TOXIC TEAMMATE")],-1)),d[8]||(d[8]=_t("div",{class:"edition"},"A LITTLE TEAMWORK. A LOT OF DAMAGE.",-1)),_t("button",{onClick:d[0]||(d[0]=g=>{r.value=!r.value,fn(a).sound=r.value})},"SOUND "+me(r.value?"ON":"OFF"),1)]),i.value==="menu"?(Te(),Ce("main",my,[d[12]||(d[12]=_t("div",{class:"eyebrow"},"SURVIVAL / QUESTIONABLE COMPANY",-1)),d[13]||(d[13]=_t("h1",null,[xe("Better off"),_t("br"),xe("together"),_t("span",null,"?")],-1)),d[14]||(d[14]=_t("p",{class:"intro"},[xe("Dodge the chaos. Collect the good stuff."),_t("br"),xe("Try not to let your teammate kill you.")],-1)),d[15]||(d[15]=_t("div",{class:"select-label"},"01 — CHOOSE YOUR BAGGAGE",-1)),_t("div",gy,[(Te(!0),Ce(Ue,null,Yc(fn(pn),(g,x)=>(Te(),Ce("button",{key:g.name,class:Do({selected:e.value===x}),onClick:p=>e.value=x},[_t("span",{class:"portrait",style:Ui({"--mate":g.color})},[...d[9]||(d[9]=[_t("i",null,null,-1)])],4),_t("strong",null,me(g.name),1),_t("small",null,me(g.role),1),_t("span",vy,me(e.value===x?"↗":"+"),1)],10,_y))),128))]),_t("p",xy,me(fn(pn)[e.value].description),1),_t("div",My,[_t("button",{class:"primary",onClick:l},[...d[10]||(d[10]=[xe("LET’S MAKE THIS WORK ",-1),_t("span",null,"↗",-1)])]),_t("label",null,[d[11]||(d[11]=xe("RUN SEED ",-1)),bp(_t("input",{"onUpdate:modelValue":d[1]||(d[1]=g=>s.value=g),inputmode:"numeric","aria-label":"Run seed"},null,512),[[Qm,s.value]])])]),d[16]||(d[16]=_t("div",{class:"instructions"},[_t("span",null,[_t("b",null,"W A S D"),xe(" MOVE")]),_t("span",null,[_t("b",null,"MOUSE"),xe(" AIM · HOLD TO FIRE")]),_t("span",null,[_t("b",null,"SPACE"),xe(" DASH")]),_t("span",null,"AUTO-FIRE WHEN NOT AIMING")],-1))])):Si("",!0),i.value==="play"||i.value==="pause"?(Te(),Ce(Ue,{key:1},[_t("div",Sy,[_t("div",null,[d[18]||(d[18]=_t("small",null,"YOUR REMAINING PATIENCE",-1)),_t("div",yy,[_t("i",{style:Ui({width:o.value.hp+"%"})},null,4)]),_t("strong",null,[xe(me(Math.ceil(o.value.hp))+" ",1),d[17]||(d[17]=_t("small",null,"/ 100",-1))])]),_t("div",Ey,[_t("small",null,me(o.value.level===6?"FINAL REVIEW":"PERFORMANCE REVIEW"),1),_t("strong",null,[xe(me(String(o.value.level).padStart(2,"0"))+" ",1),d[19]||(d[19]=_t("small",null,"/ 06",-1))])]),_t("button",{onClick:c},"Ⅱ")]),_t("div",by,[_t("span",{class:"dot",style:Ui({background:fn(pn)[e.value].color})},null,4),_t("b",null,me([e.value,...o.value.team].map(g=>fn(pn)[g].name).join(" + ")),1),_t("span",null,me(o.value.tension>.85?"PULLING YOUR WEIGHT":"ATTACHED, UNFORTUNATELY"),1),_t("div",Ty,[_t("i",{style:Ui({width:Math.min(100,o.value.tension*100)+"%"})},null,4)])]),o.value.announcement?(Te(),Ce("div",Ay,[d[20]||(d[20]=_t("small",null,"TEAM EXPANSION ↗",-1)),d[21]||(d[21]=_t("strong",null,"Congratulations!",-1)),_t("p",null,me(o.value.announcement),1)])):Si("",!0),o.value.quote?(Te(),Ce("div",wy,[xe("“"+me(o.value.quote)+"”",1),_t("small",null,"— "+me(fn(pn)[e.value].name)+me(o.value.stolen?" · "+o.value.stolen+" boxes claimed":""),1)])):Si("",!0),_t("div",Cy,[d[22]||(d[22]=_t("small",null,"FRINGE BENEFITS",-1)),o.value.loot.length?Si("",!0):(Te(),Ce("span",Ry,"Find the glowing loot boxes ↗")),(Te(!0),Ce(Ue,null,Yc(o.value.loot,g=>(Te(),Ce("span",{key:g},me(g),1))),128))]),_t("div",Py,[_t("span",null,me(o.value.kills)+" ELIMINATED",1),_t("span",null,me(Math.floor(o.value.time))+"s SURVIVED",1),_t("span",null,me(o.value.level===6?"DEFEAT THE DIRECTOR":"CLEAR THE WAVE → FIND THE EXIT"),1)]),_t("div",Ly,[_t("div",{class:"stick",onPointerdown:f,onPointermove:d[2]||(d[2]=g=>{g.buttons&&f(g)}),onPointerup:d[3]||(d[3]=g=>fn(a).touch={x:0,y:0}),onPointercancel:d[4]||(d[4]=g=>fn(a).touch={x:0,y:0})},"MOVE",32),_t("button",{onPointerdown:d[5]||(d[5]=g=>fn(a).dash())},"DASH ↗",32)])],64)):Si("",!0),["pause","dead","won"].includes(i.value)?(Te(),Ce("div",Dy,[_t("div",Iy,[_t("div",Uy,me(i.value==="pause"?"MANDATORY BREAK":"PERFORMANCE REVIEW COMPLETE"),1),_t("h2",null,[i.value==="pause"?(Te(),Ce(Ue,{key:0},[xe("Circle back?")],64)):i.value==="won"?(Te(),Ce(Ue,{key:1},[d[23]||(d[23]=xe("You carried",-1)),d[24]||(d[24]=_t("br",null,null,-1)),d[25]||(d[25]=xe("the team.",-1))],64)):(Te(),Ce(Ue,{key:2},[d[26]||(d[26]=xe("Let’s call it",-1)),d[27]||(d[27]=_t("br",null,null,-1)),d[28]||(d[28]=xe("a learning.",-1))],64))]),_t("p",null,me(i.value==="pause"?"Your teammate can wait.":`${o.value.kills} enemies eliminated. ${Math.floor(o.value.time)} seconds of teamwork. Level ${o.value.level} reached.`),1),i.value==="pause"?(Te(),Ce("button",{key:0,class:"primary",onClick:c},"BACK TO WORK ↗")):(Te(),Ce("button",{key:1,class:"primary",onClick:l},"SAME TEAM, ANOTHER TRY ↗")),_t("button",{class:"text-button",onClick:d[6]||(d[6]=g=>{fn(a).paused=!0,i.value="menu"})},"CHOOSE ANOTHER TEAMMATE")])])):Si("",!0),i.value==="menu"?(Te(),Ce("footer",Ny,[...d[29]||(d[29]=[_t("span",null,"AN EXERCISE IN MANAGING EXPECTATIONS",-1),_t("span",null,"6 LEVELS · 4 LIABILITIES · 1 YOU",-1)])])):Si("",!0)],64))}});ng(Oy).use(og()).mount("#app");
