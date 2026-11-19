var ap=Object.defineProperty;var lp=(n,t,e)=>t in n?ap(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var mt=(n,t,e)=>lp(n,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function vc(n){const t=Object.create(null);for(const e of n.split(","))t[e]=1;return e=>e in t}const ue={},Ki=[],Bn=()=>{},sf=()=>!1,qo=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),$o=n=>n.startsWith("onUpdate:"),we=Object.assign,xc=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},cp=Object.prototype.hasOwnProperty,ee=(n,t)=>cp.call(n,t),Nt=Array.isArray,wi=n=>Ir(n)==="[object Map]",es=n=>Ir(n)==="[object Set]",du=n=>Ir(n)==="[object Date]",Xt=n=>typeof n=="function",xe=n=>typeof n=="string",kn=n=>typeof n=="symbol",ce=n=>n!==null&&typeof n=="object",rf=n=>(ce(n)||Xt(n))&&Xt(n.then)&&Xt(n.catch),of=Object.prototype.toString,Ir=n=>of.call(n),up=n=>Ir(n).slice(8,-1),af=n=>Ir(n)==="[object Object]",yc=n=>xe(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,rr=vc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ko=n=>{const t=Object.create(null);return(e=>t[e]||(t[e]=n(e)))},hp=/-\w/g,Tn=Ko(n=>n.replace(hp,t=>t.slice(1).toUpperCase())),fp=/\B([A-Z])/g,rs=Ko(n=>n.replace(fp,"-$1").toLowerCase()),lf=Ko(n=>n.charAt(0).toUpperCase()+n.slice(1)),ma=Ko(n=>n?`on${lf(n)}`:""),On=(n,t)=>!Object.is(n,t),Mo=(n,...t)=>{for(let e=0;e<n.length;e++)n[e](...t)},cf=(n,t,e,i=!1)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,writable:i,value:e})},Dr=n=>{const t=parseFloat(n);return isNaN(t)?n:t};let pu;const jo=()=>pu||(pu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Si(n){if(Nt(n)){const t={};for(let e=0;e<n.length;e++){const i=n[e],s=xe(i)?gp(i):Si(i);if(s)for(const r in s)t[r]=s[r]}return t}else if(xe(n)||ce(n))return n}const dp=/;(?![^(]*\))/g,pp=/:([^]+)/,mp=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function gp(n){const t={};return n.replace(mp,e=>e.startsWith("/*")?"":e).split(dp).forEach(e=>{if(e){const i=e.split(pp);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function ni(n){let t="";if(xe(n))t=n;else if(Nt(n))for(let e=0;e<n.length;e++){const i=ni(n[e]);i&&(t+=i+" ")}else if(ce(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}const _p="itemscope,allowfullscreen,disablepictureinpicture,disableremoteplayback,formnovalidate,ismap,nomodule,novalidate,playsinline,readonly",vp=vc(_p);function uf(n){return!!n||n===""}function xp(n,t,e){if(n.length!==t.length)return!1;let i=!0;for(let s=0;i&&s<n.length;s++)i=Ci(n[s],t[s],e);return i}function mu(n,t,e){if(n.size!==t.size)return!1;const i=Array.from(t),s=new Uint8Array(i.length);for(const r of n){let o=-1;for(let a=0;a<i.length;a++)if(!s[a]&&Ci(r,i[a],e)){o=a;break}if(o<0)return!1;s[o]=1}return!0}function yp(n,t,e){let i=wi(n),s=wi(t);if(i||s||(i=es(n),s=es(t),i||s))return i&&s?mu(n,t,e):!1;const r=Object.keys(n).length,o=Object.keys(t).length;if(r!==o)return!1;for(const a in n){const l=n.hasOwnProperty(a),c=t.hasOwnProperty(a);if(l&&!c||!l&&c||!Ci(n[a],t[a],e))return!1}return String(n)===String(t)}function gu(n,t,e,i){e||(e=[new Map,new Map]);const[s,r]=e;if(s.has(n)||r.has(t))return s.get(n)===t&&r.get(t)===n;s.set(n,t),r.set(t,n);const o=i(n,t,e);return s.delete(n),r.delete(t),o}function Ci(n,t,e){if(n===t)return!0;let i=du(n),s=du(t);return i||s?i&&s?n.getTime()===t.getTime():!1:(i=kn(n),s=kn(t),i||s?n===t:(i=Nt(n),s=Nt(t),i||s?i&&s?gu(n,t,e,xp):!1:(i=ce(n),s=ce(t),i||s?!i||!s?!1:gu(n,t,e,yp):String(n)===String(t))))}function Mp(n,t){return n.findIndex(e=>Ci(e,t))}const hf=n=>!!(n&&n.__v_isRef===!0),Bt=n=>xe(n)?n:n==null?"":Nt(n)||ce(n)&&(n.toString===of||!Xt(n.toString))?hf(n)?Bt(n.value):JSON.stringify(n,ff,2):String(n),ff=(n,t)=>hf(t)?ff(n,t.value):wi(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[i,s],r)=>(e[ga(i,r)+" =>"]=s,e),{})}:es(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>ga(e))}:kn(t)?ga(t):ce(t)&&!Nt(t)&&!af(t)?String(t):t,ga=(n,t="")=>{var e;return kn(n)?`Symbol(${(e=n.description)!=null?e:t})`:n};/**
* @vue/reactivity v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ie;class df{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&Ie&&(Ie.active?(this.parent=Ie,this.index=(Ie.scopes||(Ie.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,e;if(this.scopes){const i=this.scopes.slice();for(t=0,e=i.length;t<e;t++)i[t].pause()}for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,e;if(this.scopes){const s=this.scopes.slice();for(t=0,e=s.length;t<e;t++)s[t].resume()}const i=this.effects.slice();for(t=0,e=i.length;t<e;t++)i[t].resume()}}run(t){if(this._active){const e=Ie;try{return Ie=this,t()}finally{Ie=e}}}on(){++this._on===1&&(this.prevScope=Ie,Ie=this)}off(){if(this._on>0&&--this._on===0){if(Ie===this)Ie=this.prevScope;else{let t=Ie;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let e,i;for(e=0,i=this.effects.length;e<i;e++)this.effects[e].stop();for(this.effects.length=0,e=0,i=this.cleanups.length;e<i;e++)this.cleanups[e]();if(this.cleanups.length=0,this.scopes){const s=this.scopes.slice();for(e=0,i=s.length;e<i;e++)s[e].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Sp(n){return new df(n)}function Ep(){return Ie}let he;const _a=new WeakSet;class pf{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ie&&(Ie.active?Ie.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,_a.has(this)&&(_a.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||gf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,_u(this),_f(this);const t=he,e=An;he=this,An=!0;try{return this.fn()}finally{vf(this),he=t,An=e,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Ec(t);this.deps=this.depsTail=void 0,_u(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?_a.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ml(this)&&this.run()}get dirty(){return ml(this)}}let mf=0,or,ar;function gf(n,t=!1){if(n.flags|=8,t){n.next=ar,ar=n;return}n.next=or,or=n}function Mc(){mf++}function Sc(){if(--mf>0)return;if(ar){let t=ar;for(ar=void 0;t;){const e=t.next;t.next=void 0,t.flags&=-9,t=e}}let n;for(;or;){let t=or;for(or=void 0;t;){const e=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){n||(n=i)}t=e}}if(n)throw n}function _f(n){for(let t=n.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function vf(n){let t,e=n.depsTail,i=e;for(;i;){const s=i.prevDep;i.version===-1?(i===e&&(e=s),Ec(i),bp(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=t,n.depsTail=e}function ml(n){for(let t=n.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(xf(t.dep.computed)||t.dep.version!==t.version))return!0;return!!n._dirty}function xf(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===yr)||(n.globalVersion=yr,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!ml(n))))return;n.flags|=2;const t=n.dep,e=he,i=An;he=n,An=!0;try{_f(n);const s=n.fn(n._value);(t.version===0||On(s,n._value))&&(n.flags|=128,n._value=s,t.version++)}catch(s){throw t.version++,s}finally{he=e,An=i,vf(n),n.flags&=-3}}function Ec(n,t=!1){const{dep:e,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),e.subs===n&&(e.subs=i,!i&&e.computed)){e.computed.flags&=-5;for(let r=e.computed.deps;r;r=r.nextDep)Ec(r,!0)}!t&&!--e.sc&&e.map&&e.map.delete(e.key)}function bp(n){const{prevDep:t,nextDep:e}=n;t&&(t.nextDep=e,n.prevDep=void 0),e&&(e.prevDep=t,n.nextDep=void 0)}let An=!0;const yf=[];function zn(){yf.push(An),An=!1}function Hn(){const n=yf.pop();An=n===void 0?!0:n}function _u(n){const{cleanup:t}=n;if(n.cleanup=void 0,t){const e=he;he=void 0;try{t()}finally{he=e}}}let yr=0;class wp{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class bc{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!he||!An||he===this.computed)return;let e=this.activeLink;if(e===void 0||e.sub!==he)e=this.activeLink=new wp(he,this),he.deps?(e.prevDep=he.depsTail,he.depsTail.nextDep=e,he.depsTail=e):he.deps=he.depsTail=e,Mf(e);else if(e.version===-1&&(e.version=this.version,e.nextDep)){const i=e.nextDep;i.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=i),e.prevDep=he.depsTail,e.nextDep=void 0,he.depsTail.nextDep=e,he.depsTail=e,he.deps===e&&(he.deps=i)}return e}trigger(t){this.version++,yr++,this.notify(t)}notify(t){Mc();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{Sc()}}}function Mf(n){if(n.dep.sc++,n.sub.flags&4){const t=n.dep.computed;if(t&&!n.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)Mf(i)}const e=n.dep.subs;e!==n&&(n.prevSub=e,e&&(e.nextSub=n)),n.dep.subs=n}}const gl=new WeakMap,Qi=Symbol(""),_l=Symbol(""),Mr=Symbol("");function Ne(n,t,e){if(An&&he){let i=gl.get(n);i||gl.set(n,i=new Map);let s=i.get(e);s||(i.set(e,s=new bc),s.map=i,s.key=e),s.track()}}function si(n,t,e,i,s,r){const o=gl.get(n);if(!o){yr++;return}const a=l=>{l&&l.trigger()};if(Mc(),t==="clear")o.forEach(a);else{const l=Nt(n),c=l&&yc(e);if(l&&e==="length"){const h=Number(i);o.forEach((u,f)=>{(f==="length"||f===Mr||!kn(f)&&f>=h)&&a(u)})}else switch((e!==void 0||o.has(void 0))&&a(o.get(e)),c&&a(o.get(Mr)),t){case"add":l?c&&a(o.get("length")):(a(o.get(Qi)),wi(n)&&a(o.get(_l)));break;case"delete":l||(a(o.get(Qi)),wi(n)&&a(o.get(_l)));break;case"set":wi(n)&&a(o.get(Qi));break}}Sc()}function cs(n){const t=se(n);return t===n||(Ne(t,"iterate",Mr),gn(n))?t:Vn(n)?Ti(n)?t.map(e=>Pi(_n(e))):t.map(Pi):t.map(_n)}function Jo(n){return Ne(n=se(n),"iterate",Mr),n}function Ln(n,t){return Vn(n)?Pi(Ti(n)?_n(t):t):_n(t)}const Tp={__proto__:null,[Symbol.iterator](){return va(this,Symbol.iterator,n=>Ln(this,n))},concat(...n){return cs(this).concat(...n.map(t=>Nt(t)?cs(t):t))},entries(){return va(this,"entries",n=>(n[1]=Ln(this,n[1]),n))},every(n,t){return Yn(this,"every",n,t,void 0,arguments)},filter(n,t){return Yn(this,"filter",n,t,e=>e.map(i=>Ln(this,i)),arguments)},find(n,t){return Yn(this,"find",n,t,e=>Ln(this,e),arguments)},findIndex(n,t){return Yn(this,"findIndex",n,t,void 0,arguments)},findLast(n,t){return Yn(this,"findLast",n,t,e=>Ln(this,e),arguments)},findLastIndex(n,t){return Yn(this,"findLastIndex",n,t,void 0,arguments)},forEach(n,t){return Yn(this,"forEach",n,t,void 0,arguments)},includes(...n){return xa(this,"includes",n)},indexOf(...n){return xa(this,"indexOf",n)},join(n){return cs(this).join(n)},lastIndexOf(...n){return xa(this,"lastIndexOf",n)},map(n,t){return Yn(this,"map",n,t,void 0,arguments)},pop(){return Xs(this,"pop")},push(...n){return Xs(this,"push",n)},reduce(n,...t){return xu(this,"reduce",n,t)},reduceRight(n,...t){return xu(this,"reduceRight",n,t)},shift(){return Xs(this,"shift")},some(n,t){return Yn(this,"some",n,t,void 0,arguments)},splice(...n){return Xs(this,"splice",n)},toReversed(){return cs(this).toReversed()},toSorted(n){return cs(this).toSorted(n)},toSpliced(...n){return cs(this).toSpliced(...n)},unshift(...n){return Xs(this,"unshift",n)},values(){return va(this,"values",n=>Ln(this,n))}};function va(n,t,e){const i=Jo(n),s=i[t],r=s.call(i);if(i!==n&&!gn(n)){if(r[Symbol.toStringTag]==="Array Iterator"){const o=Object.create(Object.getPrototypeOf(r));return o.next=()=>vu(r.next(),e),s!==Sf[t]&&Object.defineProperties(o,{return:{get(){const a=r.return;return typeof a=="function"?a.bind(r):a}},throw:{get(){const a=r.throw;return typeof a=="function"?a.bind(r):a}}}),o}r._next=r.next,r.next=()=>vu(r._next(),e)}return r}function vu(n,t){return n.done||(n.value=t(n.value)),n}const Sf=Array.prototype;function Yn(n,t,e,i,s,r){const o=Jo(n),a=o!==n&&!gn(n),l=o[t];if(l!==Sf[t]){const u=l.apply(n,r);return a?_n(u):u}let c=e;o!==n&&(a?c=function(u,f){return e.call(this,Ln(n,u),f,n)}:e.length>2&&(c=function(u,f){return e.call(this,u,f,n)}));const h=l.call(o,c,i);return a&&s?s(h):h}function xu(n,t,e,i){const s=Jo(n),r=s!==n&&!gn(n);let o=e,a=!1;s!==n&&(r?(a=i.length===0,o=function(c,h,u){return a&&(a=!1,c=Ln(n,c)),e.call(this,c,Ln(n,h),u,n)}):e.length>3&&(o=function(c,h,u){return e.call(this,c,h,u,n)}));const l=s[t](o,...i);return a?Ln(n,l):l}function xa(n,t,e){const i=se(n);Ne(i,"iterate",Mr);const s=i[t](...e);return(s===-1||s===!1)&&Rc(e[0])?(e[0]=se(e[0]),i[t](...e)):s}function Xs(n,t,e=[]){zn(),Mc();const i=se(n)[t].apply(n,e);return Sc(),Hn(),i}const Ap=vc("__proto__,__v_isRef,__isVue"),Ef=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(kn));function Rp(n){kn(n)||(n=String(n));const t=se(this);return Ne(t,"has",n),t.hasOwnProperty(n)}class bf{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,i){if(e==="__v_skip")return t.__v_skip;const s=this._isReadonly,r=this._isShallow;if(e==="__v_isReactive")return!s;if(e==="__v_isReadonly")return s;if(e==="__v_isShallow")return r;if(e==="__v_raw")return i===(s?r?Bp:Rf:r?Af:Tf).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const o=Nt(t);if(!s){let l;if(o&&(l=Tp[e]))return l;if(e==="hasOwnProperty")return Rp}const a=Reflect.get(t,e,Fe(t)?t:i);if((kn(e)?Ef.has(e):Ap(e))||(s||Ne(t,"get",e),r))return a;if(Fe(a)){const l=o&&yc(e)?a:a.value;return s&&ce(l)?xl(l):l}return ce(a)?s?xl(a):Tc(a):a}}class wf extends bf{constructor(t=!1){super(!1,t)}set(t,e,i,s){let r=t[e];const o=Nt(t)&&yc(e);if(!this._isShallow){const c=Vn(r);if(!gn(i)&&!Vn(i)&&(r=se(r),i=se(i)),!o&&Fe(r)&&!Fe(i))return c||(r.value=i),!0}const a=o?Number(e)<t.length:ee(t,e),l=Reflect.set(t,e,i,Fe(t)?t:s);return t===se(s)&&l&&(a?On(i,r)&&si(t,"set",e,i):si(t,"add",e,i)),l}deleteProperty(t,e){const i=ee(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&i&&si(t,"delete",e,void 0),s}has(t,e){const i=Reflect.has(t,e);return(!kn(e)||!Ef.has(e))&&Ne(t,"has",e),i}ownKeys(t){return Ne(t,"iterate",Nt(t)?"length":Qi),Reflect.ownKeys(t)}}class Cp extends bf{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const Pp=new wf,Lp=new Cp,Ip=new wf(!0);const vl=n=>n,Vr=n=>Reflect.getPrototypeOf(n);function Dp(n,t,e){return function(...i){const s=this.__v_raw,r=se(s),o=wi(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),h=e?vl:t?Pi:_n;return!t&&Ne(r,"iterate",l?_l:Qi),we(Object.create(c),{next(){const{value:u,done:f}=c.next();return f?{value:u,done:f}:{value:a?[h(u[0]),h(u[1])]:h(u),done:f}}})}}function Gr(n){return function(...t){return n==="delete"?!1:n==="clear"?void 0:this}}function Up(n,t){const e={get(s){const r=this.__v_raw,o=se(r),a=se(s);n||(On(s,a)&&Ne(o,"get",s),Ne(o,"get",a));const{has:l}=Vr(o),c=t?vl:n?Pi:_n;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&Ne(se(s),"iterate",Qi),s.size},has(s){const r=this.__v_raw,o=se(r),a=se(s);return n||(On(s,a)&&Ne(o,"has",s),Ne(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=se(a),c=t?vl:n?Pi:_n;return!n&&Ne(l,"iterate",Qi),a.forEach((h,u)=>s.call(r,c(h),c(u),o))}};return we(e,n?{add:Gr("add"),set:Gr("set"),delete:Gr("delete"),clear:Gr("clear")}:{add(s){const r=se(this),o=Vr(r),a=se(s),l=!t&&!gn(s)&&!Vn(s)?a:s;return o.has.call(r,l)||On(s,l)&&o.has.call(r,s)||On(a,l)&&o.has.call(r,a)||(r.add(l),si(r,"add",l,l)),this},set(s,r){!t&&!gn(r)&&!Vn(r)&&(r=se(r));const o=se(this),{has:a,get:l}=Vr(o);let c=a.call(o,s);c||(s=se(s),c=a.call(o,s));const h=l.call(o,s);return o.set(s,r),c?On(r,h)&&si(o,"set",s,r):si(o,"add",s,r),this},delete(s){const r=se(this),{has:o,get:a}=Vr(r);let l=o.call(r,s);l||(s=se(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&si(r,"delete",s,void 0),c},clear(){const s=se(this),r=s.size!==0,o=s.clear();return r&&si(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=Dp(s,n,t)}),e}function wc(n,t){const e=Up(n,t);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_isShallow"?t:s==="__v_raw"?i:Reflect.get(ee(e,s)&&s in i?e:i,s,r)}const Np={get:wc(!1,!1)},Op={get:wc(!1,!0)},Fp={get:wc(!0,!1)};const Tf=new WeakMap,Af=new WeakMap,Rf=new WeakMap,Bp=new WeakMap;function kp(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Tc(n){return Vn(n)?n:Ac(n,!1,Pp,Np,Tf)}function zp(n){return Ac(n,!1,Ip,Op,Af)}function xl(n){return Ac(n,!0,Lp,Fp,Rf)}function Ac(n,t,e,i,s){if(!ce(n)||n.__v_raw&&!(t&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const r=s.get(n);if(r)return r;const o=kp(up(n));if(o===0)return n;const a=new Proxy(n,o===2?i:e);return s.set(n,a),a}function Ti(n){return Vn(n)?Ti(n.__v_raw):!!(n&&n.__v_isReactive)}function Vn(n){return!!(n&&n.__v_isReadonly)}function gn(n){return!!(n&&n.__v_isShallow)}function Rc(n){return n?!!n.__v_raw:!1}function se(n){const t=n&&n.__v_raw;return t?se(t):n}function Cf(n){return!ee(n,"__v_skip")&&Object.isExtensible(n)&&cf(n,"__v_skip",!0),n}const _n=n=>ce(n)?Tc(n):n,Pi=n=>ce(n)?xl(n):n;function Fe(n){return n?n.__v_isRef===!0:!1}function Ke(n){return Hp(n,!1)}function Hp(n,t){return Fe(n)?n:new Vp(n,t)}class Vp{constructor(t,e){this.dep=new bc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=e?t:se(t),this._value=e?t:_n(t),this.__v_isShallow=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,i=this.__v_isShallow||gn(t)||Vn(t);t=i?t:se(t),On(t,e)&&(this._rawValue=t,this._value=i?t:_n(t),this.dep.trigger())}}function Se(n){return Fe(n)?n.value:n}const Gp={get:(n,t,e)=>t==="__v_raw"?n:Se(Reflect.get(n,t,e)),set:(n,t,e,i)=>{const s=n[t];return Fe(s)&&!Fe(e)?(s.value=e,!0):Reflect.set(n,t,e,i)}};function Pf(n){return Ti(n)?n:new Proxy(n,Gp)}class Wp{constructor(t,e,i){this.fn=t,this.setter=e,this._value=void 0,this.dep=new bc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=yr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!e,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&he!==this)return gf(this,!0),!0}get value(){const t=this.dep.track();return xf(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Xp(n,t,e=!1){let i,s;return Xt(n)?i=n:(i=n.get,s=n.set),new Wp(i,s,e)}const Wr={},Io=new WeakMap;let Gi;function Yp(n,t=!1,e=Gi){if(e){let i=Io.get(e);i||Io.set(e,i=[]),i.push(n)}}function qp(n,t,e=ue){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=e,c=E=>s?E:gn(E)||s===!1||s===0?ri(E,1):ri(E);let h,u,f,d,g=!1,v=!1;if(Fe(n)?(u=()=>n.value,g=gn(n)):Ti(n)?(u=()=>c(n),g=!0):Nt(n)?(v=!0,g=n.some(E=>Ti(E)||gn(E)),u=()=>n.map(E=>{if(Fe(E))return E.value;if(Ti(E))return c(E);if(Xt(E))return l?l(E,2):E()})):Xt(n)?t?u=l?()=>l(n,2):n:u=()=>{if(f){zn();try{f()}finally{Hn()}}const E=Gi;Gi=h;try{return l?l(n,3,[d]):n(d)}finally{Gi=E}}:u=Bn,t&&s){const E=u,F=s===!0?1/0:s;u=()=>ri(E(),F)}const m=Ep(),p=()=>{h.stop(),m&&m.active&&xc(m.effects,h)};if(r&&t){const E=t;t=(...F)=>{try{return E(...F)}finally{p()}}}let T=v?new Array(n.length).fill(Wr):Wr;const M=E=>{if(!(!(h.flags&1)||!h.dirty&&!E))if(t){const F=h.run();if(E||s||g||(v?F.some((I,R)=>On(I,T[R])):On(F,T))){const I=Gi;zn();try{f&&f(),Gi=h;const R=[F,T===Wr?void 0:v&&T[0]===Wr?[]:T,d];T=F,l?l(t,3,R):t(...R)}finally{Gi=I,Hn()}}}else h.run()};return a&&a(M),h=new pf(u),h.scheduler=o?()=>o(M,!1):M,d=E=>Yp(E,!1,h),f=h.onStop=()=>{const E=Io.get(h);if(E){if(l)l(E,4);else for(const F of E)F();Io.delete(h)}},t?i?M(!0):T=h.run():o?o(M.bind(null,!0),!0):h.run(),p.pause=h.pause.bind(h),p.resume=h.resume.bind(h),p.stop=p,p}function ri(n,t=1/0,e){if(t<=0||!ce(n)||n.__v_skip||(e=e||new Map,(e.get(n)||0)>=t))return n;if(e.set(n,t),t--,Fe(n))ri(n.value,t,e);else if(Nt(n))for(let i=0;i<n.length;i++)ri(n[i],t,e);else if(es(n)||wi(n))n.forEach(i=>{ri(i,t,e)});else if(af(n)){for(const i in n)ri(n[i],t,e);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&ri(n[i],t,e)}return n}/**
* @vue/runtime-core v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ur(n,t,e,i){try{return i?n(...i):n()}catch(s){Zo(s,t,e)}}function Rn(n,t,e,i){if(Xt(n)){const s=Ur(n,t,e,i);return s&&rf(s)&&s.catch(r=>{Zo(r,t,e,void 0,!0)}),s}if(Nt(n)){const s=[];for(let r=0;r<n.length;r++)s.push(Rn(n[r],t,e,i));return s}}function Zo(n,t,e,i=!0,s=!1){const r=t?t.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:a}=t&&t.appContext.config||ue;if(t){let l=t.parent;const c=t.proxy,h=`https://vuejs.org/error-reference/#runtime-${e}`;for(;l;){const u=l.ec;if(u&&!l.isUnmounted&&(!s||l.scope.active)){for(let f=0;f<u.length;f++)if(u[f](n,c,h)===!1)return}l=l.parent}if(o){zn(),Ur(o,null,10,[n,c,h]),Hn();return}}$p(n,e,r,i,a)}function $p(n,t,e,i=!0,s=!1){if(s)throw n;console.error(n)}const He=[];let Sn=-1;const In=[];let yi=null,bs=0;const Lf=Promise.resolve();let Do=null;function If(n){const t=Do||Lf;return n?t.then(this?n.bind(this):n):t}function Kp(n){let t=Sn+1,e=He.length;for(;t<e;){const i=t+e>>>1,s=He[i],r=Sr(s);r<n||r===n&&s.flags&2?t=i+1:e=i}return t}function Cc(n){if(!(n.flags&1)){const t=Sr(n),e=He[He.length-1];!e||!(n.flags&2)&&t>=Sr(e)?He.push(n):He.splice(Kp(t),0,n),n.flags|=1,Df()}}function Df(){Do||(Do=Lf.then(Of))}function jp(n){if(!Nt(n))yi&&n.id===-1?yi.splice(bs+1,0,n):n.flags&1||(In.push(n),n.flags|=1);else for(let t=0;t<n.length;t++)In.push(n[t]);Df()}function Uf(n,t,e,i=Sn+1){for(;i<He.length;i++){const s=He[i];if(s&&s.flags&2){if(n&&s.id!==n.uid||t!==void 0&&!(s.id>=t))continue;He.splice(i,1),i=n?i-1:Sn,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function Nf(n,t,e=0){if(In.length){let i=In,s=0;if(t){i=[];for(let o=0;o<In.length;o++){const a=In[o];(a.i!==void 0?!a.i||a.i.uid<e:t.has(a))?In[s++]=a:i.push(a)}}const r=[...new Set(i)].sort((o,a)=>Sr(o)-Sr(a));if(In.length=s,yi){for(let o=0;o<r.length;o++)yi.push(r[o]);return}for(yi=r,bs=0;bs<yi.length;bs++){const o=yi[bs];o.flags&4&&(o.flags&=-2),o.flags&8||o(),o.flags&=-2}yi=null,bs=0}}let ya=!1;function Jp(n,t){if(ya){n();return}const e=t===void 0?void 0:new Set(In);n(),ya=!0;try{Uf(void 0,t),Nf(void 0,e,t)}finally{ya=!1}}const Sr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Of(n){try{for(Sn=0;Sn<He.length;Sn++){const t=He[Sn];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Ur(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Sn<He.length;Sn++){const t=He[Sn];t&&(t.flags&=-2)}Sn=-1,He.length=0,Nf(),Do=null,(He.length||In.length)&&Of()}}let mn=null,Ff=null;function Uo(n){const t=mn;return mn=n,Ff=n&&n.type.__scopeId||null,t}function Zp(n,t=mn,e){if(!t||n._n)return n;const i=(...s)=>{i._d&&Pu(-1);const r=Uo(t),o=ts.length;let a;try{a=n(...s)}finally{for(let l=ts.length;l>o;l--)ld();Uo(r),i._d&&Pu(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function Ys(n,t){if(mn===null)return n;const e=na(mn),i=n.dirs||(n.dirs=[]);for(let s=0;s<t.length;s++){let[r,o,a,l=ue]=t[s];r&&(Xt(r)&&(r={mounted:r,updated:r}),r.deep&&ri(o),i.push({dir:r,instance:e,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function Ni(n,t,e,i){let s=n;if(i==="beforeMount")n._mount=n;else if(i==="beforeUpdate"){const a=t&&t._mount;a&&(a._latest=n,n._mount=a)}else if(i==="mounted"){const a=n._latest;n._mount=n._latest=void 0,a&&(s=a,a._mount=void 0)}const r=s.dirs,o=t&&t.dirs;for(let a=0;a<r.length;a++){let l=r[a];o?l.oldValue=o[a].value:i==="mounted"&&l.oldValue!==void 0&&(l=we({},l,{oldValue:void 0}));let c=l.dir[i];c&&(zn(),Rn(c,e,8,[n.el,l,s,t]),Hn())}}function Qp(n,t){if(Ve){let e=Ve.provides;const i=Ve.parent&&Ve.parent.provides;i===e&&(e=Ve.provides=Object.create(i)),e[n]=t}}function So(n,t,e=!1){const i=Zm();if(i||Rs){let s=Rs?Rs._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return e&&Xt(t)?t.call(i&&i.proxy):t}}const tm=Symbol.for("v-scx"),em=()=>So(tm);function lr(n,t,e){return Bf(n,t,e)}function Bf(n,t,e=ue){const{immediate:i,deep:s,flush:r,once:o}=e,a=we({},e),l=t&&i||!t&&r!=="post";let c;if(Tr){if(r==="sync"){const d=em();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=Bn,d.resume=Bn,d.pause=Bn,d}}const h=Ve;a.call=(d,g,v)=>Rn(d,h,g,v);let u=!1;r==="post"?a.scheduler=d=>{d.i=h,ke(d,h&&h.suspense)}:r!=="sync"&&(u=!0,a.scheduler=(d,g)=>{g?d():Cc(d)}),a.augmentJob=d=>{t&&(d.flags|=4),u&&(d.flags|=2,h&&(d.id=h.uid,d.i=h))};const f=qp(n,t,a);return Tr&&(c?c.push(f):l&&f()),f}function nm(n,t,e){const i=this.proxy,s=xe(n)?n.includes(".")?kf(i,n):()=>i[n]:n.bind(i,i);let r;Xt(t)?r=t:(r=t.handler,e=t);const o=Nr(this),a=Bf(s,r.bind(i),e);return o(),a}function kf(n,t){const e=t.split(".");return()=>{let i=n;for(let s=0;s<e.length&&i;s++)i=i[e[s]];return i}}const im=Symbol("_vte"),Qo=n=>n.__isTeleport,Ma=Symbol("_leaveCb");function sm(n){let t=n[0];if(n.length>1){for(const e of n)if(e.type!==Cn){t=e;break}}return t}function zf(n){if(!Pc(n))return Qo(n.type)&&n.children?sm(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:t,children:e}=n;if(e){if(t&16)return e[0];if(t&32&&Xt(e.default))return e.default()}}function cr(n,t){if(n.shapeFlag&6&&n.component){n.transition=t;const e=n.component.subTree;cr(Qo(e.type)&&zf(e)||e,t)}else if(n.shapeFlag&128){const e=n.suspense;if(e){const i=e.isHydrating?e.pendingBranch:e.activeBranch;i&&cr(i,t.clone(i))}else n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback)}else if(n.transition=t,n.type===ge&&Nt(n.children)){const e=Kf(n.children,!1);e&&cr(e,t)}}function yl(n){if(n.component)return yl(n.component.subTree);if(n.type===ge){const t=Nt(n.children)&&Kf(n.children,!1);return t?yl(t):void 0}if(n.type!==Cn)return n}function rm(n,t){return Xt(n)?we({name:n.name},t,{setup:n}):n}function Hf(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function yu(n,t){let e;return!!((e=Object.getOwnPropertyDescriptor(n,t))&&!e.configurable)}const No=new WeakMap;function ur(n,t,e,i,s=!1){if(Nt(n)){n.forEach((v,m)=>ur(v,t&&(Nt(t)?t[m]:t),e,i,s));return}if(hr(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&ur(n,t,e,i.component.subTree);return}const r=i.shapeFlag&4?na(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=t&&t.r,h=a.refs===ue?a.refs={}:a.refs,u=a.setupState,f=se(u),d=u===ue?sf:v=>yu(h,v)?!1:ee(f,v),g=(v,m)=>!(m&&yu(h,m));if(c!=null&&c!==l){if(Mu(t),xe(c))h[c]=null,d(c)&&(u[c]=null);else if(Fe(c)){const v=t;g(c,v.k)&&(c.value=null),v.k&&(h[v.k]=null)}}if(Xt(l))Ur(l,a,12,[o,h]);else{const v=xe(l),m=Fe(l);if(v||m){const p=()=>{if(n.f){const T=v?d(l)?u[l]:h[l]:g()||!n.k?l.value:h[n.k];if(s)Nt(T)&&xc(T,r);else if(Nt(T))T.includes(r)||T.push(r);else if(v)h[l]=[r],d(l)&&(u[l]=h[l]);else{const M=[r];g(l,n.k)&&(l.value=M),n.k&&(h[n.k]=M)}}else v?(h[l]=o,d(l)&&(u[l]=o)):m&&(g(l,n.k)&&(l.value=o),n.k&&(h[n.k]=o))};if(o){const T=()=>{p(),No.delete(n)};T.id=-1,No.set(n,T),ke(T,e)}else Mu(n),p()}}}function Mu(n){const t=No.get(n);t&&(t.flags|=8,No.delete(n))}jo().requestIdleCallback;jo().cancelIdleCallback;const hr=n=>!!n.type.__asyncLoader,Pc=n=>n.type.__isKeepAlive;function om(n,t){Vf(n,"a",t)}function am(n,t){Vf(n,"da",t)}function Vf(n,t,e=Ve){const i=n.__wdc||(n.__wdc=()=>{let s=e;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Er(t,i,e),e){let s=e.parent;for(;s&&s.parent;)Pc(s.parent.vnode)&&lm(i,t,e,s),s=s.parent}}function lm(n,t,e,i){const s=Er(t,n,i,!0),r=Er("um",()=>xc(i[t],s),e);r.flags=16}function Er(n,t,e=Ve,i=!1){if(e){const s=e[n]||(e[n]=[]),r=t.__weh||(t.__weh=(...o)=>{zn();const a=Nr(e),l=Rn(t,e,n,o);return a(),Hn(),l});return i?s.unshift(r):s.push(r),r}}const hi=n=>(t,e=Ve)=>{(!Tr||n==="sp")&&Er(n,(...i)=>t(...i),e)},cm=hi("bm"),Gf=hi("m"),um=hi("bu"),hm=hi("u"),Wf=hi("bum"),fm=hi("um"),dm=hi("sp"),pm=hi("rtg"),mm=hi("rtc");function gm(n,t=Ve){Er("ec",n,t)}const _m=Symbol.for("v-ndc");function qn(n,t,e,i){let s;const r=e,o=Nt(n);if(o||xe(n)){const a=o&&Ti(n);let l=!1,c=!1;a&&(l=!gn(n),c=Vn(n),n=Jo(n)),s=new Array(n.length);for(let h=0,u=n.length;h<u;h++)s[h]=t(l?c?Pi(_n(n[h])):_n(n[h]):n[h],h,void 0,r)}else if(typeof n=="number")if(!Number.isInteger(n)||n<0)s=[];else{s=new Array(n);for(let a=0;a<n;a++)s[a]=t(a+1,a,void 0,r)}else if(ce(n))if(n[Symbol.iterator])s=Array.from(n,(a,l)=>t(a,l,void 0,r));else{const a=Object.keys(n);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const h=a[l];s[l]=t(n[h],h,l,r)}}else s=[];return s}const Ml=n=>n?fd(n)?na(n):Ml(n.parent):null,fr=we(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Ml(n.parent),$root:n=>Ml(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Yf(n),$forceUpdate:n=>n.f||(n.f=()=>{Cc(n.update)}),$nextTick:n=>n.n||(n.n=If.bind(n.proxy)),$watch:n=>nm.bind(n)}),Sa=(n,t)=>n!==ue&&!n.__isScriptSetup&&ee(n,t),vm={get({_:n},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;if(t[0]!=="$"){const f=o[t];if(f!==void 0)switch(f){case 1:return i[t];case 2:return s[t];case 4:return e[t];case 3:return r[t]}else{if(Sa(i,t))return o[t]=1,i[t];if(s!==ue&&ee(s,t))return o[t]=2,s[t];if(ee(r,t))return o[t]=3,r[t];if(e!==ue&&ee(e,t))return o[t]=4,e[t];Sl&&(o[t]=0)}}const c=fr[t];let h,u;if(c)return t==="$attrs"&&Ne(n.attrs,"get",""),c(n);if((h=a.__cssModules)&&(h=h[t]))return h;if(e!==ue&&ee(e,t))return o[t]=4,e[t];if(u=l.config.globalProperties,ee(u,t))return u[t]},set({_:n},t,e){const{data:i,setupState:s,ctx:r}=n;return Sa(s,t)?(s[t]=e,!0):i!==ue&&ee(i,t)?(i[t]=e,!0):ee(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(r[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:i,appContext:s,props:r,type:o}},a){let l;return!!(e[a]||n!==ue&&a[0]!=="$"&&ee(n,a)||Sa(t,a)||ee(r,a)||ee(i,a)||ee(fr,a)||ee(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:ee(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};function Su(n){return Nt(n)?n.reduce((t,e)=>(t[e]=null,t),{}):n}let Sl=!0;function xm(n){const t=Yf(n),e=n.proxy,i=n.ctx;Sl=!1,t.beforeCreate&&Eu(t.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:h,beforeMount:u,mounted:f,beforeUpdate:d,updated:g,activated:v,deactivated:m,beforeDestroy:p,beforeUnmount:T,destroyed:M,unmounted:E,render:F,renderTracked:I,renderTriggered:R,errorCaptured:z,serverPrefetch:ct,expose:x,inheritAttrs:w,components:K,directives:Y,filters:Q}=t;if(c&&ym(c,i,null),o)for(const it in o){const H=o[it];Xt(H)&&(i[it]=H.bind(e))}if(s){const it=s.call(e,e);ce(it)&&(n.data=Tc(it))}if(Sl=!0,r)for(const it in r){const H=r[it],gt=Xt(H)?H.bind(e,e):Xt(H.get)?H.get.bind(e,e):Bn,ot=!Xt(H)&&Xt(H.set)?H.set.bind(e):Bn,L=nn({get:gt,set:ot});Object.defineProperty(i,it,{enumerable:!0,configurable:!0,get:()=>L.value,set:It=>L.value=It})}if(a)for(const it in a)Xf(a[it],i,e,it);if(l){const it=Xt(l)?l.call(e):l;Reflect.ownKeys(it).forEach(H=>{Qp(H,it[H])})}h&&Eu(h,n,"c");function V(it,H){Nt(H)?H.forEach(gt=>it(gt.bind(e))):H&&it(H.bind(e))}if(V(cm,u),V(Gf,f),V(um,d),V(hm,g),V(om,v),V(am,m),V(gm,z),V(mm,I),V(pm,R),V(Wf,T),V(fm,E),V(dm,ct),Nt(x))if(x.length){const it=n.exposed||(n.exposed={});x.forEach(H=>{Object.defineProperty(it,H,{get:()=>e[H],set:gt=>e[H]=gt,enumerable:!0})})}else n.exposed||(n.exposed={});F&&n.render===Bn&&(n.render=F),w!=null&&(n.inheritAttrs=w),K&&(n.components=K),Y&&(n.directives=Y),ct&&Hf(n)}function ym(n,t,e=Bn){Nt(n)&&(n=El(n));for(const i in n){const s=n[i];let r;ce(s)?"default"in s?r=So(s.from||i,s.default,!0):r=So(s.from||i):r=So(s),Fe(r)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):t[i]=r}}function Eu(n,t,e){Rn(Nt(n)?n.map(i=>i.bind(t.proxy)):n.bind(t.proxy),t,e)}function Xf(n,t,e,i){let s=i.includes(".")?kf(e,i):()=>e[i];if(xe(n)){const r=t[n];Xt(r)&&lr(s,r)}else if(Xt(n))lr(s,n.bind(e));else if(ce(n))if(Nt(n))n.forEach(r=>Xf(r,t,e,i));else{const r=Xt(n.handler)?n.handler.bind(e):t[n.handler];Xt(r)&&lr(s,r,n)}}function Yf(n){const t=n.type,{mixins:e,extends:i}=t,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(t);let l;return a?l=a:!s.length&&!e&&!i?l=t:(l={},s.length&&s.forEach(c=>Oo(l,c,o,!0)),Oo(l,t,o)),ce(t)&&r.set(t,l),l}function Oo(n,t,e,i=!1){const{mixins:s,extends:r}=t;r&&Oo(n,r,e,!0),s&&s.forEach(o=>Oo(n,o,e,!0));for(const o in t)if(!(i&&o==="expose")){const a=Mm[o]||e&&e[o];n[o]=a?a(n[o],t[o]):t[o]}return n}const Mm={data:bu,props:wu,emits:wu,methods:nr,computed:nr,beforeCreate:Be,created:Be,beforeMount:Be,mounted:Be,beforeUpdate:Be,updated:Be,beforeDestroy:Be,beforeUnmount:Be,destroyed:Be,unmounted:Be,activated:Be,deactivated:Be,errorCaptured:Be,serverPrefetch:Be,components:nr,directives:nr,watch:Em,provide:bu,inject:Sm};function bu(n,t){return t?n?function(){return we(Xt(n)?n.call(this,this):n,Xt(t)?t.call(this,this):t)}:t:n}function Sm(n,t){return nr(El(n),El(t))}function El(n){if(Nt(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function Be(n,t){return n?[...new Set([].concat(n,t))]:t}function nr(n,t){return n?we(Object.create(null),n,t):t}function wu(n,t){return n?Nt(n)&&Nt(t)?[...new Set([...n,...t])]:we(Object.create(null),Su(n),Su(t??{})):t}function Em(n,t){if(!n)return t;if(!t)return n;const e=we(Object.create(null),n);for(const i in t)e[i]=Be(n[i],t[i]);return e}function qf(){return{app:null,config:{isNativeTag:sf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let bm=0;function wm(n,t){return function(i,s=null){Xt(i)||(i=we({},i)),s!=null&&!ce(s)&&(s=null);const r=qf(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:bm++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:sg,get config(){return r.config},set config(h){},use(h,...u){return o.has(h)||(h&&Xt(h.install)?(o.add(h),h.install(c,...u)):Xt(h)&&(o.add(h),h(c,...u))),c},mixin(h){return r.mixins.includes(h)||r.mixins.push(h),c},component(h,u){return u?(r.components[h]=u,c):r.components[h]},directive(h,u){return u?(r.directives[h]=u,c):r.directives[h]},mount(h,u,f){if(!l){const d=c._ceVNode||li(i,s);return d.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),n(d,h,f),l=!0,c._container=h,h.__vue_app__=c,na(d.component)}},onUnmount(h){a.push(h)},unmount(){l&&(Rn(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(h,u){return r.provides[h]=u,c},runWithContext(h){const u=Rs;Rs=c;try{return h()}finally{Rs=u}}};return c}}let Rs=null;const Tm=(n,t)=>t==="modelValue"||t==="model-value"?n.modelModifiers:n[`${t}Modifiers`]||n[`${Tn(t)}Modifiers`]||n[`${rs(t)}Modifiers`];function Am(n,t,...e){if(n.isUnmounted)return;const i=n.vnode.props||ue;let s=e;const r=t.startsWith("update:"),o=r&&Tm(i,t.slice(7));o&&(o.trim&&(s=e.map(h=>xe(h)?h.trim():h)),o.number&&(s=s.map(Dr)));let a,l=i[a=ma(t)]||i[a=ma(Tn(t))];!l&&r&&(l=i[a=ma(rs(t))]),l&&Rn(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Rn(c,n,6,s)}}const Rm=new WeakMap;function $f(n,t,e=!1){const i=e?Rm:t.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!Xt(n)){const l=c=>{const h=$f(c,t,!0);h&&(a=!0,we(o,h))};!e&&t.mixins.length&&t.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(ce(n)&&i.set(n,null),null):(Nt(r)?r.forEach(l=>o[l]=null):we(o,r),ce(n)&&i.set(n,o),o)}function ta(n,t){return!n||!qo(t)?!1:(t=t.slice(2),t=t==="Once"?t:t.replace(/Once$/,""),ee(n,t[0].toLowerCase()+t.slice(1))||ee(n,rs(t))||ee(n,t))}function Tu(n){const{type:t,vnode:e,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:h,props:u,data:f,setupState:d,ctx:g,inheritAttrs:v}=n,m=Uo(n);let p,T;try{if(e.shapeFlag&4){const E=s||i,F=E;p=Dn(c.call(F,E,h,u,d,f,g)),T=a}else{const E=t;p=Dn(E.length>1?E(u,{attrs:a,slots:o,emit:l}):E(u,null)),T=t.props?a:Cm(a)}}catch(E){ts.length=0,Zo(E,n,1),p=li(Cn)}let M=p;if(T&&v!==!1){const E=Object.keys(T),{shapeFlag:F}=M;E.length&&F&7&&(r&&E.some($o)&&(T=Pm(T,r)),M=Ds(M,T,!1,!0))}if(e.dirs&&(M=Ds(M,null,!1,!0),M.dirs=M.dirs?M.dirs.concat(e.dirs):e.dirs),e.transition){const E=Qo(M.type)&&zf(M)||M;cr(E,e.transition)}return p=M,Uo(m),p}function Kf(n,t=!0){let e;for(let i=0;i<n.length;i++){const s=n[i];if(Dc(s)){if(s.type!==Cn||s.children==="v-if"){if(e)return;e=s}}else return}return e}const Cm=n=>{let t;for(const e in n)(e==="class"||e==="style"||qo(e))&&((t||(t={}))[e]=n[e]);return t},Pm=(n,t)=>{const e={};for(const i in n)(!$o(i)||!(i.slice(9)in t))&&(e[i]=n[i]);return e};function Lm(n,t,e){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=t,c=r.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return i?Au(i,o,c):!!o;if(l&8){const h=t.dynamicProps;for(let u=0;u<h.length;u++){const f=h[u];if(jf(o,i,f)&&!ta(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Au(i,o,c):!0:!!o;return!1}function Au(n,t,e){const i=Object.keys(t);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(!ee(n,r)||jf(t,n,r)&&!ta(e,r))return!0}return!1}function jf(n,t,e){const i=n[e],s=t[e];return e==="style"&&ce(i)&&ce(s)?!Ci(i,s):i!==s}function Im({vnode:n,parent:t,suspense:e},i){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.suspense.vnode.el=s.el=i,n=s),s===n)(n=t.vnode).el=i,t=t.parent;else break}e&&e.activeBranch===n&&(e.vnode.el=i)}const Jf={},Zf=()=>Object.create(Jf),Qf=n=>Object.getPrototypeOf(n)===Jf;function Dm(n,t,e,i=!1){const s={},r=Zf();n.propsDefaults=Object.create(null),td(n,t,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);e?n.props=i?s:zp(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function Um(n,t,e,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=se(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const h=n.vnode.dynamicProps;for(let u=0;u<h.length;u++){let f=h[u];if(ta(n.emitsOptions,f))continue;const d=t[f];if(l)if(ee(r,f))d!==r[f]&&(r[f]=d,c=!0);else{const g=Tn(f);s[g]=bl(l,a,g,d,n,!1)}else d!==r[f]&&(r[f]=d,c=!0)}}}else{td(n,t,s,r)&&(c=!0);let h;for(const u in a)(!t||!ee(t,u)&&((h=rs(u))===u||!ee(t,h)))&&(l?e&&(e[u]!==void 0||e[h]!==void 0)&&(s[u]=bl(l,a,u,void 0,n,!0)):delete s[u]);if(r!==a)for(const u in r)(!t||!ee(t,u))&&(delete r[u],c=!0)}c&&si(n.attrs,"set","")}function td(n,t,e,i){const[s,r]=n.propsOptions;let o=!1,a;if(t)for(let l in t){if(rr(l))continue;const c=t[l];let h;s&&ee(s,h=Tn(l))?!r||!r.includes(h)?e[h]=c:(a||(a={}))[h]=c:ta(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=se(e),c=a||ue;for(let h=0;h<r.length;h++){const u=r[h];e[u]=bl(s,l,u,c[u],n,!ee(c,u))}}return o}function bl(n,t,e,i,s,r){const o=n[e];if(o!=null){const a=ee(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Xt(l)){const{propsDefaults:c}=s;if(e in c)i=c[e];else{const h=Nr(s);i=c[e]=l.call(null,t),h()}}else i=l;s.ce&&s.ce._setProp(e,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===rs(e))&&(i=!0))}return i}const Nm=new WeakMap;function ed(n,t,e=!1){const i=e?Nm:t.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!Xt(n)){const h=u=>{l=!0;const[f,d]=ed(u,t,!0);we(o,f),d&&a.push(...d)};!e&&t.mixins.length&&t.mixins.forEach(h),n.extends&&h(n.extends),n.mixins&&n.mixins.forEach(h)}if(!r&&!l)return ce(n)&&i.set(n,Ki),Ki;if(Nt(r))for(let h=0;h<r.length;h++){const u=Tn(r[h]);Ru(u)&&(o[u]=ue)}else if(r)for(const h in r){const u=Tn(h);if(Ru(u)){const f=r[h],d=o[u]=Nt(f)||Xt(f)?{type:f}:we({},f),g=d.type;let v=!1,m=!0;if(Nt(g))for(let p=0;p<g.length;++p){const T=g[p],M=Xt(T)&&T.name;if(M==="Boolean"){v=!0;break}else M==="String"&&(m=!1)}else v=Xt(g)&&g.name==="Boolean";d[0]=v,d[1]=m,(v||ee(d,"default"))&&a.push(u)}}const c=[o,a];return ce(n)&&i.set(n,c),c}function Ru(n){return n[0]!=="$"&&!rr(n)}const Lc=n=>n==="_"||n==="_ctx"||n==="$stable",Ic=n=>Nt(n)?n.map(Dn):[Dn(n)],Om=(n,t,e)=>{if(t._n)return t;const i=Zp((...s)=>Ic(t(...s)),e);return i._c=!1,i},nd=(n,t,e)=>{const i=n._ctx;for(const s in n){if(Lc(s))continue;const r=n[s];if(Xt(r))t[s]=Om(s,r,i);else if(r!=null){const o=Ic(r);t[s]=()=>o}}},id=(n,t)=>{const e=Ic(t);n.slots.default=()=>e},sd=(n,t,e)=>{for(const i in t)(e||!Lc(i))&&(n[i]=t[i])},Fm=(n,t,e)=>{const i=n.slots=Zf();if(n.vnode.shapeFlag&32){const s=t._;s?(sd(i,t,e),e&&cf(i,"_",s,!0)):nd(t,i)}else t&&id(n,t)},Bm=(n,t,e)=>{const{vnode:i,slots:s}=n;let r=!0,o=ue;if(i.shapeFlag&32){const a=t._;a?e&&a===1?r=!1:sd(s,t,e):(r=!t.$stable,nd(t,s)),o=t}else t&&(id(n,t),o={default:1});if(r)for(const a in s)!Lc(a)&&o[a]==null&&delete s[a]},ke=Wm;function km(n){return zm(n)}function zm(n,t){const e=jo();e.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:h,parentNode:u,nextSibling:f,setScopeId:d=Bn,insertStaticContent:g}=n,v=(A,C,S,st=null,q=null,Z=null,nt=void 0,rt=null,tt=!!C.dynamicChildren)=>{if(A===C)return;A&&!qs(A,C)&&(st=xt(A),It(A,q,Z,!0),A=null),C.patchFlag===-2&&(tt=!1,C.dynamicChildren=null),C.dynamicChildren&&A&&A.dynamicChildren&&A.dynamicChildren.hasOnce&&(C.dynamicChildren===Ki&&(C.dynamicChildren=[]),C.dynamicChildren.hasOnce=!0);const{type:y,ref:_,shapeFlag:P}=C;switch(y){case ea:m(A,C,S,st);break;case Cn:p(A,C,S,st);break;case ba:A==null&&T(C,S,st,nt);break;case ge:K(A,C,S,st,q,Z,nt,rt,tt);break;default:P&1?F(A,C,S,st,q,Z,nt,rt,tt):P&6?Y(A,C,S,st,q,Z,nt,rt,tt):(P&64||P&128)&&y.process(A,C,S,st,q,Z,nt,rt,tt,Dt)}_!=null&&q?ur(_,A&&A.ref,Z,C||A,!C):_==null&&A&&A.ref!=null&&ur(A.ref,null,Z,A,!0)},m=(A,C,S,st)=>{if(A==null)i(C.el=a(C.children),S,st);else{const q=C.el=A.el;C.children!==A.children&&c(q,C.children)}},p=(A,C,S,st)=>{A==null?i(C.el=l(C.children||""),S,st):C.el=A.el},T=(A,C,S,st)=>{[A.el,A.anchor]=g(A.children,C,S,st,A.el,A.anchor)},M=({el:A,anchor:C},S,st)=>{let q;for(;A&&A!==C;)q=f(A),i(A,S,st),A=q;i(C,S,st)},E=({el:A,anchor:C})=>{let S;for(;A&&A!==C;)S=f(A),s(A),A=S;s(C)},F=(A,C,S,st,q,Z,nt,rt,tt)=>{if(C.type==="svg"?nt="svg":C.type==="math"&&(nt="mathml"),A==null)I(C,S,st,q,Z,nt,rt,tt);else{const y=A.el&&A.el._isVueCE?A.el:null;try{y&&y._beginPatch(),ct(A,C,q,Z,nt,rt,tt)}finally{y&&y._endPatch()}}},I=(A,C,S,st,q,Z,nt,rt)=>{let tt,y;const{props:_,shapeFlag:P,transition:k,dirs:J}=A;if(tt=A.el=o(A.type,Z,_&&_.is,_),P&8?h(tt,A.children):P&16&&z(A.children,tt,null,st,q,Ea(A,Z),nt,rt),J&&Ni(A,null,st,"created"),R(tt,A,A.scopeId,nt,st),_){for(const dt in _)dt!=="value"&&!rr(dt)&&r(tt,dt,null,_[dt],Z,st);"value"in _&&r(tt,"value",null,_.value,Z),(y=_.onVnodeBeforeMount)&&Pn(y,st,A)}J&&Ni(A,null,st,"beforeMount");const X=Hm(q,k);X?k.beforeEnter(tt):k&&!k.persisted&&(tt[Gm]=!0),i(tt,C,S),((y=_&&_.onVnodeMounted)||X||J)&&ke(()=>{try{y&&Pn(y,st,A),X&&k.enter(tt),J&&Ni(A,null,st,"mounted")}finally{}},q)},R=(A,C,S,st,q)=>{if(S&&d(A,S),st)for(let Z=0;Z<st.length;Z++)d(A,st[Z]);if(q){let Z=q.subTree;if(C===Z||ad(Z.type)&&(Z.ssContent===C||Z.ssFallback===C)){const nt=q.vnode;R(A,nt,nt.scopeId,nt.slotScopeIds,q.parent)}}},z=(A,C,S,st,q,Z,nt,rt,tt=0)=>{for(let y=tt;y<A.length;y++){const _=A[y]=rt?ii(A[y]):Dn(A[y]);v(null,_,C,S,st,q,Z,nt,rt)}},ct=(A,C,S,st,q,Z,nt)=>{const rt=C.el=A.el;let{patchFlag:tt,dynamicChildren:y,dirs:_}=C;tt|=A.patchFlag&16;const P=A.props||ue,k=C.props||ue;let J;if(S&&Oi(S,!1),(J=k.onVnodeBeforeUpdate)&&Pn(J,S,C,A),_&&Ni(C,A,S,"beforeUpdate"),S&&Oi(S,!0),y&&(!A.dynamicChildren||A.dynamicChildren.length!==y.length)&&(tt=0,nt=!1,y=null),(P.innerHTML&&k.innerHTML==null||P.textContent&&k.textContent==null)&&h(rt,""),y?x(A.dynamicChildren,y,rt,S,st,Ea(C,q),Z):nt||H(A,C,rt,null,S,st,Ea(C,q),Z,!1),tt>0){if(tt&16)w(rt,P,k,S,q);else if(tt&2&&P.class!==k.class&&r(rt,"class",null,k.class,q),tt&4&&r(rt,"style",P.style,k.style,q),tt&8){const X=C.dynamicProps;for(let dt=0;dt<X.length;dt++){const ut=X[dt],ft=P[ut],Ut=k[ut];(Ut!==ft||ut==="value")&&r(rt,ut,ft,Ut,q,S)}}tt&1&&A.children!==C.children&&h(rt,C.children)}else!nt&&y==null&&w(rt,P,k,S,q);((J=k.onVnodeUpdated)||_)&&ke(()=>{J&&Pn(J,S,C,A),_&&Ni(C,A,S,"updated")},st)},x=(A,C,S,st,q,Z,nt)=>{for(let rt=0;rt<C.length;rt++){const tt=A[rt],y=C[rt],_=tt.el||dr(tt),P=_&&(tt.type===ge||!qs(tt,y)||tt.shapeFlag&198)?u(_):S;v(tt,y,P,null,st,q,Z,nt,!0)}},w=(A,C,S,st,q)=>{if(C!==S){if(C!==ue)for(const Z in C)!rr(Z)&&!(Z in S)&&r(A,Z,C[Z],null,q,st);for(const Z in S){if(rr(Z))continue;const nt=S[Z],rt=C[Z];nt!==rt&&Z!=="value"&&r(A,Z,rt,nt,q,st)}"value"in S&&r(A,"value",C.value,S.value,q)}},K=(A,C,S,st,q,Z,nt,rt,tt)=>{const y=C.el=A?A.el:a(""),_=C.anchor=A?A.anchor:a("");let{patchFlag:P,dynamicChildren:k,slotScopeIds:J}=C;J&&(rt=rt?rt.concat(J):J),A==null?(i(y,S,st),i(_,S,st),z(C.children||[],S,_,q,Z,nt,rt,tt)):P>0&&P&64&&k&&A.dynamicChildren&&A.dynamicChildren.length===k.length?(x(A.dynamicChildren,k,S,q,Z,nt,rt),(C.key!=null||q&&C===q.subTree)&&rd(A,C,!0)):H(A,C,S,_,q,Z,nt,rt,tt)},Y=(A,C,S,st,q,Z,nt,rt,tt)=>{C.slotScopeIds=rt,A==null?C.shapeFlag&512?q.ctx.activate(C,S,st,nt,tt):Q(C,S,st,q,Z,nt,tt):lt(A,C,tt)},Q=(A,C,S,st,q,Z,nt)=>{const rt=A.component=Jm(A,st,q);if(Pc(A)&&(rt.ctx.renderer=Dt),Qm(rt,!1,nt),rt.asyncDep){if(q&&q.registerDep(rt,V,nt,Z),!A.el){const tt=rt.subTree=li(Cn);p(null,tt,C,S),A.placeholder=tt.el}}else V(rt,A,C,S,q,Z,nt)},lt=(A,C,S)=>{const st=C.component=A.component;if(Lm(A,C,S))if(st.asyncDep&&!st.asyncResolved){C.el=A.el,C.placeholder=A.placeholder,it(st,C,S);return}else st.next=C,st.update();else C.el=A.el,C.placeholder=A.placeholder,st.vnode=C},V=(A,C,S,st,q,Z,nt)=>{const rt=()=>{if(A.isMounted){let{next:P,bu:k,u:J,parent:X,vnode:dt}=A;{const Mt=od(A);if(Mt){P&&(P.el=dt.el,it(A,P,nt)),Mt.asyncDep.then(()=>{const Pt=()=>{A.job.flags&8||(q&&q.pendingBranch?ke(Pt,q):y())};Pt.flags=48,ke(Pt,q)});return}}let ut=P,ft;Oi(A,!1),P?(P.el=dt.el,it(A,P,nt)):P=dt,k&&Mo(k),(ft=P.props&&P.props.onVnodeBeforeUpdate)&&Pn(ft,X,P,dt),Oi(A,!0);const Ut=Tu(A),ht=A.subTree;A.subTree=Ut,v(ht,Ut,u(ht.el||dr(ht)),xt(ht),A,q,Z),P.el=Ut.el,ut===null&&Im(A,Ut.el),J&&ke(J,q),(ft=P.props&&P.props.onVnodeUpdated)&&ke(()=>Pn(ft,X,P,dt),q)}else{let P;const{el:k,props:J}=C,{bm:X,m:dt,parent:ut,root:ft,type:Ut}=A,ht=hr(C);Oi(A,!1),X&&Mo(X),!ht&&(P=J&&J.onVnodeBeforeMount)&&Pn(P,ut,C),Oi(A,!0);{ft.ce&&ft.ce._hasShadowRoot()&&ft.ce._injectChildStyle(Ut,A.parent?A.parent.type:void 0);const Mt=A.subTree=Tu(A);v(null,Mt,S,st,A,q,Z),C.el=Mt.el}if(dt&&ke(dt,q),!ht&&(P=J&&J.onVnodeMounted)){const Mt=C;ke(()=>Pn(P,ut,Mt),q)}(C.shapeFlag&256||ut&&hr(ut.vnode)&&ut.vnode.shapeFlag&256)&&A.a&&ke(A.a,q),A.isMounted=!0,C=S=st=null}};A.scope.on();const tt=A.effect=new pf(rt);A.scope.off();const y=A.update=tt.run.bind(tt),_=A.job=tt.runIfDirty.bind(tt);_.i=A,_.id=A.uid,tt.scheduler=()=>Cc(_),Oi(A,!0),y()},it=(A,C,S)=>{C.component=A;const st=A.vnode.props;A.vnode=C,A.next=null,Um(A,C.props,st,S),Bm(A,C.children,S),zn(),Uf(A),Hn()},H=(A,C,S,st,q,Z,nt,rt,tt=!1)=>{const y=A&&A.children,_=A?A.shapeFlag:0,P=C.children,{patchFlag:k,shapeFlag:J}=C;if(k>0){if(k&128){ot(y,P,S,st,q,Z,nt,rt,tt);return}else if(k&256){gt(y,P,S,st,q,Z,nt,rt,tt);return}}J&8?(_&16&&vt(y,q,Z),P!==y&&h(S,P)):_&16?J&16?ot(y,P,S,st,q,Z,nt,rt,tt):vt(y,q,Z,!0):(_&8&&h(S,""),J&16&&z(P,S,st,q,Z,nt,rt,tt))},gt=(A,C,S,st,q,Z,nt,rt,tt)=>{A=A||Ki,C=C||Ki;const y=A.length,_=C.length,P=Math.min(y,_);let k;for(k=0;k<P;k++){const J=C[k]=tt?ii(C[k]):Dn(C[k]);v(A[k],J,S,null,q,Z,nt,rt,tt)}y>_?vt(A,q,Z,!0,!1,P):z(C,S,st,q,Z,nt,rt,tt,P)},ot=(A,C,S,st,q,Z,nt,rt,tt)=>{let y=0;const _=C.length;let P=A.length-1,k=_-1;for(;y<=P&&y<=k;){const J=A[y],X=C[y]=tt?ii(C[y]):Dn(C[y]);if(qs(J,X))v(J,X,S,null,q,Z,nt,rt,tt);else break;y++}for(;y<=P&&y<=k;){const J=A[P],X=C[k]=tt?ii(C[k]):Dn(C[k]);if(qs(J,X))v(J,X,S,null,q,Z,nt,rt,tt);else break;P--,k--}if(y>P){if(y<=k){const J=k+1,X=J<_?C[J].el:st;for(;y<=k;)v(null,C[y]=tt?ii(C[y]):Dn(C[y]),S,X,q,Z,nt,rt,tt),y++}}else if(y>k)for(;y<=P;)It(A[y],q,Z,!0),y++;else{const J=y,X=y,dt=new Map;for(y=X;y<=k;y++){const _t=C[y]=tt?ii(C[y]):Dn(C[y]);_t.key!=null&&dt.set(_t.key,y)}let ut,ft=0;const Ut=k-X+1;let ht=!1,Mt=0;const Pt=new Array(Ut);for(y=0;y<Ut;y++)Pt[y]=0;for(y=J;y<=P;y++){const _t=A[y];if(ft>=Ut){It(_t,q,Z,!0);continue}let Ht;if(_t.key!=null)Ht=dt.get(_t.key);else for(ut=X;ut<=k;ut++)if(Pt[ut-X]===0&&qs(_t,C[ut])){Ht=ut;break}Ht===void 0?It(_t,q,Z,!0):(Pt[Ht-X]=y+1,Ht>=Mt?Mt=Ht:ht=!0,v(_t,C[Ht],S,null,q,Z,nt,rt,tt),ft++)}const Ot=ht?Vm(Pt):Ki;for(ut=Ot.length-1,y=Ut-1;y>=0;y--){const _t=X+y,Ht=C[_t],Vt=C[_t+1],oe=_t+1<_?Vt.el||dr(Vt):st;Pt[y]===0?v(null,Ht,S,oe,q,Z,nt,rt,tt):ht&&(ut<0||y!==Ot[ut]?L(Ht,S,oe,2):ut--)}}},L=(A,C,S,st,q=null)=>{const{el:Z,type:nt,transition:rt,children:tt,shapeFlag:y}=A;if(y&6){L(A.component.subTree,C,S,st);return}if(y&128){A.suspense.move(C,S,st);return}if(y&64){nt.move(A,C,S,Dt);return}if(nt===ge){i(Z,C,S);for(let P=0;P<tt.length;P++)L(tt[P],C,S,st);i(A.anchor,C,S);return}if(nt===ba){M(A,C,S);return}if(st!==2&&y&1&&rt)if(st===0)rt.persisted&&!Z[Ma]?i(Z,C,S):(rt.beforeEnter(Z),i(Z,C,S),ke(()=>rt.enter(Z),q));else{const{leave:P,delayLeave:k,afterLeave:J}=rt,X=()=>{A.ctx.isUnmounted?s(Z):i(Z,C,S)},dt=()=>{const ut=Z._isLeaving||!!Z[Ma];Z._isLeaving&&Z[Ma](!0),rt.persisted&&!ut?X():P(Z,()=>{X(),J&&J()})};k?k(Z,X,dt):dt()}else i(Z,C,S)},It=(A,C,S,st=!1,q=!1)=>{const{type:Z,props:nt,ref:rt,children:tt,dynamicChildren:y,shapeFlag:_,patchFlag:P,dirs:k,cacheIndex:J,memo:X}=A;if((P===-2||y&&y.hasOnce)&&(q=!1),rt!=null&&(zn(),ur(rt,null,S,A,!0),Hn()),J!=null&&(!A.ctx||A.ctx===C)&&(C.renderCache[J]=void 0),_&256&&C.ctx.deactivate(A))return;const dt=_&1&&k,ut=!hr(A);let ft;if(ut&&(ft=nt&&nt.onVnodeBeforeUnmount)&&Pn(ft,C,A),_&6)j(A.component,S,st);else{if(_&128){A.suspense.unmount(S,st);return}dt&&Ni(A,null,C,"beforeUnmount"),_&64?A.type.remove(A,C,S,Dt,st):y&&!y.hasOnce&&(Z!==ge||P>0&&P&64)?vt(y,C,S,!1,!0):(Z===ge&&P&384||!q&&_&16)&&vt(tt,C,S),st&&$t(A)}const Ut=X!=null&&J==null;(ut&&(ft=nt&&nt.onVnodeUnmounted)||dt||Ut)&&ke(()=>{ft&&Pn(ft,C,A),dt&&Ni(A,null,C,"unmounted"),Ut&&(A.el=null)},S)},$t=A=>{const{type:C,el:S,anchor:st,transition:q}=A,Z=C===ge;if(Z&&!q){D(S,st);return}if(C===ba){E(A),q&&!q.persisted&&q.afterLeave&&q.afterLeave();return}const nt=Z?yl(A):A,rt=()=>{Z?u(S)&&D(S,st):s(S),q&&!q.persisted&&q.afterLeave&&q.afterLeave()};if(nt&&nt.shapeFlag&1&&q&&!q.persisted){const{leave:tt,delayLeave:y}=q,_=nt.el,P=()=>tt(_,rt);y?y(_,rt,P):P()}else rt()},D=(A,C)=>{let S;for(;A!==C;)S=f(A),s(A),A=S;s(C)},j=(A,C,S)=>{const{bum:st,scope:q,job:Z,subTree:nt,um:rt,m:tt,a:y}=A;Cu(tt),Cu(y),st&&Mo(st),q.stop(),Z?(Z.flags|=8,It(nt,A,C,S)):nt&&(nt.transition=A.vnode.transition,It(nt,A,C,S)),rt&&ke(rt,C);const _=()=>{A.isUnmounted=!0};_.flags=16,ke(_,C)},vt=(A,C,S,st=!1,q=!1,Z=0)=>{for(let nt=Z;nt<A.length;nt++)It(A[nt],C,S,st,q)},xt=A=>{if(A.shapeFlag&6)return xt(A.component.subTree);if(A.shapeFlag&128)return A.suspense.next();const C=f(A.anchor||A.el),S=C&&C[im];return S?f(S):C},zt=(A,C,S)=>{const st=A&&C._vnode?void 0:A&&A.component?A.component.uid:jm();Jp(()=>{A==null?C._vnode&&It(C._vnode,null,null,!0):v(C._vnode||null,A,C,null,null,null,S),C._vnode=A},st)},Dt={p:v,um:It,m:L,r:$t,mt:Q,mc:z,pc:H,pbc:x,n:xt,o:n};return{render:zt,hydrate:void 0,createApp:wm(zt)}}function Ea({type:n,props:t},e){return e==="svg"&&n==="foreignObject"||e==="mathml"&&n==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function Oi({effect:n,job:t},e){e?(n.flags|=32,t.flags|=4):(n.flags&=-33,t.flags&=-5)}function Hm(n,t){return(!n||n&&!n.pendingBranch)&&t&&!t.persisted}function rd(n,t,e=!1){const i=n.children,s=t.children;if(Nt(i)&&Nt(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=ii(s[r]),a.el=o.el),!e&&a.patchFlag!==-2&&rd(o,a)),a.type===ea&&(a.patchFlag===-1&&(a=s[r]=ii(a)),a.el=o.el),a.type===Cn&&!a.el&&(a.el=o.el)}}function Vm(n){const t=n.slice(),e=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=e[e.length-1],n[s]<c){t[i]=s,e.push(i);continue}for(r=0,o=e.length-1;r<o;)a=r+o>>1,n[e[a]]<c?r=a+1:o=a;c<n[e[r]]&&(r>0&&(t[i]=e[r-1]),e[r]=i)}}for(r=e.length,o=e[r-1];r-- >0;)e[r]=o,o=t[o];return e}function od(n){const t=n.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:od(t)}function Cu(n){if(n)for(let t=0;t<n.length;t++)n[t].flags|=8}function dr(n){if(n.placeholder)return n.placeholder;const t=n.component;if(t)return dr(t.subTree);const e=n.suspense;return e&&e.activeBranch?dr(e.activeBranch):null}const ad=n=>n.__isSuspense,Gm=Symbol("_deferredEnter");function Wm(n,t){t&&t.pendingBranch?Nt(n)?t.effects.push(...n):t.effects.push(n):jp(n)}const ge=Symbol.for("v-fgt"),ea=Symbol.for("v-txt"),Cn=Symbol.for("v-cmt"),ba=Symbol.for("v-stc"),ts=[];let on=null;function Gt(n=!1){ts.push(on=n?null:[])}function ld(){ts.pop(),on=ts[ts.length-1]||null}let br=1;function Pu(n,t=!1){br+=n,n<0&&on&&t&&(on.hasOnce=!0)}function cd(n){return n.dynamicChildren=br>0?on||Ki:null,ld(),br>0&&on&&on.push(n),n}function Wt(n,t,e,i,s,r){return cd(G(n,t,e,i,s,r,!0))}function Xm(n,t,e,i,s){return cd(li(n,t,e,i,s,!0))}function Dc(n){return n?n.__v_isVNode===!0:!1}function qs(n,t){return n.type===t.type&&n.key===t.key}const ud=({key:n})=>n??null,Eo=({ref:n,ref_key:t,ref_for:e})=>(typeof n=="number"&&(n=""+n),n!=null?xe(n)||Fe(n)||Xt(n)?{i:mn,r:n,k:t,f:!!e}:n:null);function G(n,t=null,e=null,i=0,s=null,r=n===ge?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&ud(t),ref:t&&Eo(t),scopeId:Ff,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:mn};return a?(Fo(l,e),r&128&&n.normalize(l)):e&&(l.shapeFlag|=xe(e)?8:16),br>0&&!o&&on&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&on.push(l),l}const li=Ym;function Ym(n,t=null,e=null,i=0,s=null,r=!1){if((!n||n===_m)&&(n=Cn),Dc(n)){const a=Ds(n,t,!0);return e&&Fo(a,e),br>0&&!r&&on&&(a.shapeFlag&6?on[on.indexOf(n)]=a:on.push(a)),a.patchFlag=-2,a}if(ig(n)&&(n=n.__vccOpts),t){t=qm(t);let{class:a,style:l}=t;a&&!xe(a)&&(t.class=ni(a)),ce(l)&&(Rc(l)&&!Nt(l)&&(l=we({},l)),t.style=Si(l))}const o=xe(n)?1:ad(n)?128:Qo(n)?64:ce(n)?4:Xt(n)?2:0;return G(n,t,e,i,s,o,r,!0)}function qm(n){return n?Rc(n)?we({},n):Qf(n)?we({},n[pd]||n):n:null}function Ds(n,t,e=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=t?$m(s||{},t):s,h={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&ud(c),ref:t&&t.ref?e&&r?Nt(r)?r.concat(Eo(t)):[r,Eo(t)]:Eo(t):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==ge?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Ds(n.ssContent),ssFallback:n.ssFallback&&Ds(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce,cacheIndex:n.cacheIndex};return l&&i&&cr(h,l.clone(h)),h}function te(n=" ",t=0){return li(ea,null,n,t)}function Le(n="",t=!1){return t?(Gt(),Xm(Cn,null,n)):li(Cn,null,n)}function Dn(n){return n==null||typeof n=="boolean"?li(Cn):Nt(n)?li(ge,null,n.slice()):Dc(n)?ii(n):li(ea,null,String(n))}function ii(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Ds(n)}function Fo(n,t){let e=0;const{shapeFlag:i}=n;if(t==null)t=null;else if(Nt(t))e=16;else if(typeof t=="object")if(i&65){const s=t.default;s&&(s._c&&(s._d=!1),Fo(n,s()),s._c&&(s._d=!0));return}else{e=32;const s=t._;!s&&!Qf(t)?t._ctx=mn:s===3&&mn&&(mn.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else if(Xt(t)){if(i&65){Fo(n,{default:t});return}t={default:t,_ctx:mn},e=32}else t=String(t),i&64?(e=16,t=[te(t)]):e=8;n.children=t,n.shapeFlag|=e}function $m(...n){const t={};for(let e=0;e<n.length;e++){const i=n[e];for(const s in i)if(s==="class")t.class!==i.class&&(t.class=ni([t.class,i.class]));else if(s==="style")t.style=Si([t.style,i.style]);else if(qo(s)){const r=t[s],o=i[s];o&&r!==o&&!(Nt(r)&&r.includes(o))?t[s]=r?[].concat(r,o):o:o==null&&r==null&&!$o(s)&&(t[s]=o)}else s!==""&&(t[s]=i[s])}return t}function Pn(n,t,e,i=null){Rn(n,t,7,[e,i])}const Km=qf();let hd=0;function jm(){return hd}function Jm(n,t,e){const i=n.type,s=(t?t.appContext:n.appContext)||Km,r={uid:hd++,vnode:n,type:i,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new df(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ed(i,s),emitsOptions:$f(i,s),emit:null,emitted:null,propsDefaults:ue,inheritAttrs:i.inheritAttrs,ctx:ue,data:ue,props:ue,attrs:ue,slots:ue,refs:ue,setupState:ue,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=Am.bind(null,r),n.ce&&n.ce(r),r}let Ve=null;const Zm=()=>Ve||mn;let Bo,wr;{const n=jo(),t=(e,i)=>{let s;return(s=n[e])||(s=n[e]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};Bo=t("__VUE_INSTANCE_SETTERS__",e=>Ve=e),wr=t("__VUE_SSR_SETTERS__",e=>Tr=e)}const Nr=n=>{const t=Ve;return Bo(n),n.scope.on(),()=>{n.scope.off(),Bo(t)}},Lu=()=>{Ve&&Ve.scope.off(),Bo(null)};function fd(n){return n.vnode.shapeFlag&4}let Tr=!1;function Qm(n,t=!1,e=!1){t&&wr(t);const{props:i,children:s}=n.vnode,r=fd(n);Dm(n,i,r,t),Fm(n,s,e||t);const o=r?tg(n,t):void 0;return t&&wr(!1),o}function tg(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,vm);const{setup:i}=e;if(i){zn();const s=n.setupContext=i.length>1?ng(n):null,r=Nr(n),o=Ur(i,n,0,[n.props,s]),a=rf(o);if(Hn(),r(),(a||n.sp)&&!hr(n)&&Hf(n),a){if(o.then(Lu,Lu),t)return o.then(l=>{wr(!0);try{Iu(n,l,t)}finally{wr(!1)}}).catch(l=>{Zo(l,n,0,void 0,!0),n.ssrRender=(c,h)=>h("<!---->")});n.asyncDep=o}else Iu(n,o)}else dd(n)}function Iu(n,t,e){Xt(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:ce(t)&&(n.setupState=Pf(t)),dd(n)}function dd(n,t,e){const i=n.type;n.render||(n.render=i.render||Bn);{const s=Nr(n);zn();try{xm(n)}finally{Hn(),s()}}}const pd=Symbol(),eg={get(n,t){return Ne(n,"get",""),t===pd?n:n[t]}};function ng(n){const t=e=>{n.exposed=e||{}};return{attrs:new Proxy(n.attrs,eg),slots:n.slots,emit:n.emit,expose:t}}function na(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Pf(Cf(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in fr)return fr[e](n)},has(t,e){return e in t||e in fr}})):n.proxy}function ig(n){return Xt(n)&&"__vccOpts"in n}const nn=(n,t)=>Xp(n,t,Tr),sg="3.5.45";/**
* @vue/runtime-dom v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let wl;const Du=typeof window<"u"&&window.trustedTypes;if(Du)try{wl=Du.createPolicy("vue",{createHTML:n=>n})}catch{}const md=wl?n=>wl.createHTML(n):n=>n,rg="http://www.w3.org/2000/svg",og="http://www.w3.org/1998/Math/MathML",ti=typeof document<"u"?document:null,Uu=ti&&ti.createElement("template"),ag={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,i)=>{const s=t==="svg"?ti.createElementNS(rg,n):t==="mathml"?ti.createElementNS(og,n):e?ti.createElement(n,{is:e}):ti.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>ti.createTextNode(n),createComment:n=>ti.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>ti.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,i,s,r){const o=e?e.previousSibling:t.lastChild;if(s&&(s===r||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),e),!(s===r||!(s=s.nextSibling)););else{Uu.innerHTML=md(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Uu.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,e)}return[o?o.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},lg=Symbol("_vtc");function cg(n,t,e){const i=n[lg];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}const Nu=Symbol("_vod"),ug=Symbol("_vsh"),hg=Symbol(""),fg=/(?:^|;)\s*display\s*:/;function dg(n,t,e){const i=n.style,s=xe(e);let r=!1;if(e&&!s){if(t)if(xe(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();e[a]==null&&ir(i,a,"")}else for(const o in t)e[o]==null&&ir(i,o,"");for(const o in e){o==="display"&&(r=!0);const a=e[o];a!=null?mg(n,o,!xe(t)&&t?t[o]:void 0,a)||ir(i,o,a):ir(i,o,"")}}else if(s){if(t!==e){const o=i[hg];o&&(e+=";"+o),i.cssText=e,r=fg.test(e)}}else t&&n.removeAttribute("style");Nu in n&&((!s||t!==e)&&(n[Nu]=r?i.display:""),n[ug]&&(i.display="none"))}const Xr=/\s*!important$/;function ir(n,t,e){if(Nt(e))e.forEach(i=>ir(n,t,i));else if(e==null&&(e=""),t.startsWith("--"))Xr.test(e)?n.setProperty(t,e.replace(Xr,""),"important"):n.setProperty(t,e);else{const i=pg(n,t);Xr.test(e)?n.setProperty(rs(i),e.replace(Xr,""),"important"):n[i]=e}}const Ou=["Webkit","Moz","ms"],wa={};function pg(n,t){const e=wa[t];if(e)return e;let i=Tn(t);if(i!=="filter"&&i in n)return wa[t]=i;i=lf(i);for(let s=0;s<Ou.length;s++){const r=Ou[s]+i;if(r in n)return wa[t]=r}return t}function mg(n,t,e,i){return n.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&xe(i)&&e===i}const Fu="http://www.w3.org/1999/xlink";function Bu(n,t,e,i,s,r=vp(t)){i&&t.startsWith("xlink:")?e==null?n.removeAttributeNS(Fu,t.slice(6,t.length)):n.setAttributeNS(Fu,t,e):e==null||r&&!uf(e)?n.removeAttribute(t):n.setAttribute(t,r?"":kn(e)?String(e):e)}function ku(n,t,e,i,s){if(t==="innerHTML"||t==="textContent"){e!=null&&(n[t]=t==="innerHTML"?md(e):e);return}const r=n.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=e==null?n.type==="checkbox"?"on":"":String(e);(a!==l||!("_value"in n))&&(n.value=l),e==null&&n.removeAttribute(t),n._value=e;return}let o=!1;if(e===""||e==null){const a=typeof n[t];a==="boolean"?e=uf(e):e==null&&a==="string"?(e="",o=!0):a==="number"&&(e=0,o=!0)}try{n[t]=e}catch{}o&&n.removeAttribute(s||t)}function Xi(n,t,e,i){n.addEventListener(t,e,i)}function gg(n,t,e,i){n.removeEventListener(t,e,i)}const zu=Symbol("_vei");function _g(n,t,e,i,s=null){const r=n[zu]||(n[zu]={}),o=r[t];if(i&&o)o.value=i;else{const[a,l]=yg(t);if(i){const c=r[t]=Eg(i,s);Xi(n,a,c,l)}else o&&(gg(n,a,o,l),r[t]=void 0)}}const vg=/(Once|Passive|Capture)$/,xg=/^on:?(?:Once|Passive|Capture)$/;function yg(n){let t,e;for(;(e=n.match(vg))&&!xg.test(n);)t||(t={}),n=n.slice(0,n.length-e[1].length),t[e[1].toLowerCase()]=!0;return[n[2]===":"?n.slice(3):rs(n.slice(2)),t]}let Ta=0;const Mg=Promise.resolve(),Sg=()=>Ta||(Mg.then(()=>Ta=0),Ta=Date.now());function Eg(n,t){const e=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=e.attached)return;const s=e.value;if(Nt(s)){const r=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{r.call(i),i._stopped=!0};const o=s.slice(),a=[i];for(let l=0;l<o.length&&!i._stopped;l++){const c=o[l];c&&Rn(c,t,5,a)}}else Rn(s,t,5,[i])};return e.value=n,e.attached=Sg(),e}const Hu=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,bg=(n,t,e,i,s,r)=>{const o=s==="svg";t==="class"?cg(n,i,o):t==="style"?dg(n,e,i):qo(t)?$o(t)||_g(n,t,e,i,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):wg(n,t,i,o))?(ku(n,t,i),!n.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Bu(n,t,i,o,r,t!=="value")):n._isVueCE&&(Tg(n,t)||n._def.__asyncLoader&&(/[A-Z]/.test(t)||!xe(i)))?ku(n,Tn(t),i,r,t):(t==="true-value"?n._trueValue=i:t==="false-value"&&(n._falseValue=i),Bu(n,t,i,o))};function wg(n,t,e,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in n&&Hu(t)&&Xt(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&n.tagName==="IFRAME"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Hu(t)&&xe(e)?!1:t in n}function Tg(n,t){const e=n._def.props;if(!e)return!1;const i=Tn(t);return Array.isArray(e)?e.some(s=>Tn(s)===i):Object.keys(e).some(s=>Tn(s)===i)}const ko=n=>{const t=n.props["onUpdate:modelValue"]||!1;return Nt(t)?e=>Mo(t,e):t};function Ag(n){n.target.composing=!0}function Vu(n){const t=n.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const ji=Symbol("_assign"),Yr=Symbol("_initialValue");function Aa(n,t,e){return t&&(n=n.trim()),e&&(n=Dr(n)),n}const Rg={created(n,{modifiers:{lazy:t,trim:e,number:i}},s){n.parentNode&&(n.type==="text"?n[Yr]=n.defaultValue.replace(/[\r\n]/g,""):n.type==="textarea"&&(n[Yr]=n.defaultValue.replace(/\r\n?/g,`
`))),n[ji]=ko(s);const r=i||s.props&&s.props.type==="number";Xi(n,t?"change":"input",o=>{o.target.composing||n[ji](Aa(n.value,e,r))}),(e||r)&&Xi(n,"change",()=>{n.value=Aa(n.value,e,r)}),t||(Xi(n,"compositionstart",Ag),Xi(n,"compositionend",Vu),Xi(n,"change",Vu))},mounted(n,{value:t,modifiers:{trim:e,number:i}}){const s=t??"",r=n[Yr];delete n[Yr],r!==void 0&&(n.type==="text"||n.type==="textarea")&&n.value!==r?n[ji](Aa(n.value,e,i)):n.value=s},beforeUpdate(n,{value:t,oldValue:e,modifiers:{lazy:i,trim:s,number:r}},o){if(n[ji]=ko(o),n.composing)return;const a=(r||n.type==="number")&&!/^0\d/.test(n.value)?Dr(n.value):n.value,l=t??"";if(a===l)return;const c=n.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===n&&n.type!=="range"&&(i&&t===e||s&&n.value.trim()===l)||(n.value=l)}},qr={deep:!0,created(n,{value:t,modifiers:{number:e}},i){n._modelValue=t,Xi(n,"change",()=>{const s=Array.prototype.filter.call(n.options,l=>l.selected).map(l=>e?Dr(zo(l)):zo(l)),r=n.multiple,o=r?es(n._modelValue)?new Set(s):s:s[0],a=n._pendingValue=[r,r?Nt(o)?s.slice():s:o];try{n[ji](o)}finally{If(()=>{n._pendingValue===a&&(n._pendingValue=void 0)})}}),n[ji]=ko(i)},mounted(n,{value:t,modifiers:{number:e}}){Gu(n,t,e)},beforeUpdate(n,{value:t},e){n._modelValue=t,n[ji]=ko(e)},updated(n,{value:t,modifiers:{number:e}}){const i=n._pendingValue;n._pendingValue=void 0,(!i||i[0]!==n.multiple||!Cg(t,i[1],i[0]))&&Gu(n,t,e)}};function Cg(n,t,e){if(!e||Nt(n))return Ci(n,t);if(es(n)){if(n.size!==t.length)return!1;for(const i of t)if(!n.has(i))return!1;return!0}return!1}function Gu(n,t,e=!1){const i=n.multiple,s=Nt(t);if(!(i&&!s&&!es(t))){for(let r=0,o=n.options.length;r<o;r++){const a=n.options[r],l=zo(a);if(i)if(s){const c=typeof l;c==="string"||c==="number"?a.selected=t.some(h=>String(h)===String(l)):a.selected=Mp(t,l)>-1}else a.selected=t.has(l)||e&&typeof l=="string"&&t.has(Dr(l));else if(Ci(zo(a),t)){n.selectedIndex!==r&&(n.selectedIndex=r);return}}!i&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function zo(n){return"_value"in n?n._value:n.value}const Pg=we({patchProp:bg},ag);let Wu;function Lg(){return Wu||(Wu=km(Pg))}const Ig=((...n)=>{const t=Lg().createApp(...n),{mount:e}=t;return t.mount=i=>{const s=Ug(i);if(!s)return;const r=t._component;!Xt(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=e(s,!1,Dg(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t});function Dg(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Ug(n){return xe(n)?document.querySelector(n):n}/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const Ng=Symbol();var Xu;(function(n){n.direct="direct",n.patchObject="patch object",n.patchFunction="patch function"})(Xu||(Xu={}));function Og(){const n=Sp(!0),t=n.run(()=>Ke({}));let e=[],i=[];const s=Cf({install(r){s._a=r,r.provide(Ng,s),r.config.globalProperties.$pinia=s,i.forEach(o=>e.push(o)),i=[]},use(r){return this._a?e.push(r):i.push(r),this},_p:e,_a:null,_e:n,_s:new Map,state:t});return s}const Fg="modulepreload",Bg=function(n){return"/game/royale/"+n},Yu={},kg=function(t,e,i){let s=Promise.resolve();if(e&&e.length>0){let o=function(c){return Promise.all(c.map(h=>Promise.resolve(h).then(u=>({status:"fulfilled",value:u}),u=>({status:"rejected",reason:u}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=o(e.map(c=>{if(c=Bg(c),c in Yu)return;Yu[c]=!0;const h=c.endsWith(".css"),u=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${u}`))return;const f=document.createElement("link");if(f.rel=h?"stylesheet":Fg,h||(f.as="script"),f.crossOrigin="",f.href=c,l&&f.setAttribute("nonce",l),document.head.appendChild(f),h)return new Promise((d,g)=>{f.addEventListener("load",d),f.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return t().catch(r)})},$s={shank:45,axe:90,shotgun:70,smg:60,laser:40,flamethrower:50,body:0},ia={gender:0,skin:2,hair:2,hairColor:0,clothes:0,color:0},Or=["#f4ceae","#dca47a","#b87953","#925739","#603c2f","#3b2b26"],Us=["#e9bb22","#d43163","#2b9c96","#4d63cb","#d46a27","#b1aca0"],sa=["#242028","#653b23","#d7ad52","#dd457b"],Cs=[{id:"gas",name:"LAST STOP GAS",tag:"PREMIUM FUEL. SUBSTANDARD DECISIONS."},{id:"rest",name:"REST IN PIECES",tag:"TAKE A BREAK. LEAVE A PART."},{id:"motel",name:"MOTEL NO-TELL",tag:"VACANCIES CREATED DAILY."}],sn=["torso","head","armL","armR","forearmL","forearmR","handL","handR","thighL","thighR","shinL","shinR","footL","footR"],Ns={torso:{x:0,y:1.65,w:.85,h:.9,hp:120,parent:null},head:{x:0,y:2.45,w:.6,h:.65,hp:34,parent:"torso"},armL:{x:-.57,y:1.85,w:.28,h:.5,hp:30,parent:"torso"},armR:{x:.57,y:1.85,w:.28,h:.5,hp:30,parent:"torso"},forearmL:{x:-.59,y:1.38,w:.25,h:.48,hp:24,parent:"armL"},forearmR:{x:.59,y:1.38,w:.25,h:.48,hp:24,parent:"armR"},handL:{x:-.6,y:1.08,w:.27,h:.25,hp:15,parent:"forearmL"},handR:{x:.6,y:1.08,w:.27,h:.25,hp:15,parent:"forearmR"},thighL:{x:-.25,y:.95,w:.34,h:.55,hp:36,parent:"torso"},thighR:{x:.25,y:.95,w:.34,h:.55,hp:36,parent:"torso"},shinL:{x:-.25,y:.48,w:.29,h:.5,hp:26,parent:"thighL"},shinR:{x:.25,y:.48,w:.29,h:.5,hp:26,parent:"thighR"},footL:{x:-.31,y:.12,w:.45,h:.24,hp:17,parent:"shinL"},footR:{x:.31,y:.12,w:.45,h:.24,hp:17,parent:"shinR"}},Yi=(n=ia)=>({move:0,aimX:1,aimY:0,attack:!1,jump:0,pickup:0,cycle:0,reload:0,ready:0,rematch:0,venue:0,venueChange:0,look:{...n}});function Uc(n){const t=n&&typeof n=="object"?n:{},e={gender:3,skin:Or.length,hair:5,hairColor:sa.length,clothes:3,color:Us.length},i={...ia};for(const s of Object.keys(e)){const r=Number(t[s]);Number.isInteger(r)&&r>=0&&r<e[s]&&(i[s]=r)}return i}function zg(n){const t=n&&typeof n=="object"?n:{},e=Yi(Uc(t.look));for(const i of["jump","pickup","cycle","reload","ready","rematch","venueChange"]){const s=Number(t[i]);e[i]=Number.isSafeInteger(s)&&s>=0?Math.min(s,1e7):0}return e.move=Math.max(-1,Math.min(1,Number(t.move)||0)),e.aimX=Math.max(-1,Math.min(1,Number(t.aimX)||0)),e.aimY=Math.max(-1,Math.min(1,Number(t.aimY)||0)),e.attack=t.attack===!0,e.venue=Math.max(0,Math.min(2,Math.floor(Number(t.venue)||0))),e}function Ar(n){return+(n.parts.thighL>0&&n.parts.shinL>0)+ +(n.parts.thighR>0&&n.parts.shinR>0)}function qu(n,t){const e=Ns[t];return Ar(n)>0?{x:e.x,y:e.y,w:e.w,h:e.h,rotation:0,length:e.h}:t.startsWith("thigh")?{x:e.x*1.5,y:.22,w:e.h,h:e.w,rotation:t.endsWith("L")?Math.PI/2:-Math.PI/2,length:e.h}:{x:e.x,y:Math.max(e.h/2+.04,e.y-1.16),w:e.w,h:e.h,rotation:0,length:e.h}}function dn(n,t){const e=qu(n,t),i=Gg(n);if(!i||n.weapons[n.slot]==="body"||!n.parts.armL&&!n.parts.armR)return e;const s=i.endsWith("L")?"L":"R",r=pr(n);if(t===i)return{...e,x:r.x,y:r.y,rotation:r.angle-Math.PI/2};if(t!==`arm${s}`&&t!==`forearm${s}`)return e;const o=qu(n,`arm${s}`),a=o.x,l=o.y+.25,c=(a+r.x)/2-r.dy*.13,h=(l+r.y)/2+r.dx*.13,u=t.startsWith("forearm")?{x:c,y:h}:{x:a,y:l},f=t.startsWith("forearm")?r:{x:c,y:h},d=f.x-u.x,g=f.y-u.y,v=Math.hypot(d,g),m=Math.atan2(g,d)-Math.PI/2,p=Ns[t].w;return{x:(u.x+f.x)/2,y:(u.y+f.y)/2,w:Math.abs(Math.cos(m))*p+Math.abs(Math.sin(m))*v,h:Math.abs(Math.sin(m))*p+Math.abs(Math.cos(m))*v,rotation:m,length:v}}const Hg=1.1;function Vg(n){if(n.weapons[n.slot]!=="shank"||n.attacking<=0)return 0;const t=(10-n.attacking)/10;return .23*Math.max(0,t<.25?t/.25:(1-t)/.75)}function ei(n){return Ar(n)===0?.39:1.55}function ws(n){return Math.max(...sn.filter(t=>n.parts[t]>0).map(t=>{const e=dn(n,t);return e.y+e.h/2}),.5)}function pr(n){const t=Math.hypot(n.aimX,n.aimY),e=t>.01?n.aimX/t:n.face,i=t>.01?n.aimY/t:0,s=n.weapons[n.slot]==="shank"?.42+Vg(n):.85;return{x:e*s,y:ei(n)+i*s,angle:Math.atan2(i,e),dx:e,dy:i}}function Gg(n){const t=n.aimX<0?"handL":"handR",e=t==="handL"?"handR":"handL";return n.parts[t]>0?t:n.parts[e]>0?e:null}function Ra(n){return[["armL","forearmL","handL"],["armR","forearmR","handR"],["thighL","shinL","footL"],["thighR","shinR","footR"]].filter(t=>t.some(e=>n.parts[e]<=0)).length}function Wg(n,t){const e=[];function i(s,r,o,a,l,c,h,u=[],f=0){const d={id:t(),kind:s,x:r,y:o,w:a,h:l,material:c,hp:h,maxHp:h,fuel:c==="fuel"?1:c==="wood"||c==="fabric"?.5:0,burn:0,supports:u,falling:!1,vy:0,exploded:!1,solid:s!=="floor"&&s!=="glass"&&s!=="railing",color:f};return e.push(d),d.id}for(let s=-60;s<64;s+=8)i("floor",s,0,8,.45,"concrete",240);if(n==="gas"){for(const r of[-40,-28,-16])i("pump",r,1.7,1.8,3.4,"fuel",75);const s=[i("post",-46,3,.5,6,"metal",80),i("post",-10,3,.5,6,"metal",80)];for(let r=-43;r<-9;r+=6)i("roof",r,6.4,6,.7,"metal",100,s);for(const r of[-35,-19,27])i("can",r,.6,.7,1.2,"fuel",20);i("car",5,1.1,7,2.2,"fuel",120),i("car",45,1.1,6.5,2.2,"fuel",120),i("counter",23,1,6,2,"wood",70),i("fridge",33,1.8,2.8,3.6,"metal",85),i("glass",23,3.6,7,2.3,"glass",22),i("door",17,1.6,1.5,3.2,"wood",40),i("sign",-51,7.5,5,3,"metal",55,[i("pole",-51,3.6,.5,7.2,"metal",65)]);for(const r of[12,39,40])i("tire",r,.6,1.1,1.2,"fabric",25)}else if(n==="rest"){for(const r of[-42,-15,18])i("table",r,1,5.5,2,"wood",70),i("bench",r+5,.55,3,1.1,"wood",35);for(const r of[-30,8])i("vending",r,1.8,2.4,3.6,"metal",85);for(const r of[-50,-3,35])i("bin",r,.85,1.2,1.7,"metal",45);i("truck",44,1.7,10,3.4,"fuel",180),i("car",-4,1.1,6,2.2,"fuel",120);for(const r of[-49,27])i("sign",r,7,5,2.4,"metal",55,[i("pole",r,3.5,.45,7,"metal",60)]);i("barrier",-24,.6,4,1.2,"concrete",80),i("door",27,1.6,1.6,3.2,"wood",45);const s=[i("post",-5,2.5,.5,5,"metal",65),i("post",8,2.5,.5,5,"metal",65)];i("roof",1.5,5.2,14,.5,"metal",95,s)}else{for(const r of[-45,-23,-1,21,43]){const o=i("post",r-4.5,2.5,.5,5,"wood",60);i("balcony",r,5,11,.6,"concrete",100,[o]),i("railing",r,5.9,10.5,1.2,"metal",30),i("door",r-2,1.7,1.5,3.4,"wood",40),i("glass",r+2,2.6,2.5,1.8,"glass",20),i("mattress",r+3,.65,3.5,1.3,"fabric",40),i("tv",r,.65,1.1,1.3,"glass",25),i("ac",r+3,7,2,1.2,"metal",35,[o]),i("door",r-2,6.8,1.5,3.4,"wood",40)}i("ice",49,1.3,2.8,2.6,"metal",70);const s=i("pole",-53,5,.5,10,"metal",65);i("sign",-53,10,6.5,3.5,"metal",70,[s])}return e}const $u=.5,Xg=.5,un=1/60,Ca=27,hn=[-57,57,-20,-5,13,20,-9,8],Yg=18,qg=["YOU","GUEST","BAD CREDIT","ROOM SERVICE","UNLEADED","NO REFUNDS","LAST CALL","MILD CONCERN"];class gd{constructor(t=1){mt(this,"state");this.state={version:1,frame:0,round:0,seed:77191,id:0,phase:"lobby",phaseFrame:0,venue:"gas",actors:[],props:[],shots:[],debris:[],blood:[],fires:[],pickups:[],events:[],winner:null,zoneLeft:-64,zoneRight:64,humans:Math.max(1,Math.min(2,t)),venueNonce:0,eventSeq:0},this.makeActors(),this.makeWorld()}next(){return++this.state.id}random(){let t=this.state.seed|0;return t^=t<<13,t^=t>>>17,t^=t<<5,this.state.seed=t>>>0,(t>>>0)/4294967296}makeActors(){this.state.actors=[];for(let t=0;t<8;t++){const e={...ia,gender:t%3,skin:t%6,hair:t%5,color:t%6},i=Yi(e);this.state.actors.push({id:t,name:t<this.state.humans?this.state.humans===1?"YOU":`PLAYER ${t+1}`:qg[t],human:t<this.state.humans,pendingSpawn:t>=this.state.humans,look:e,x:hn[t],y:1,vx:0,vy:0,face:t%2?-1:1,hp:100,parts:Object.fromEntries(sn.map(s=>[s,Ns[s].hp])),weapons:["shank"],durability:{...$s},slot:0,specialAmmo:{laser:0,flamethrower:0},ammo:0,magazines:{shotgun:6,smg:30},reserve:90,cooldown:0,reloading:0,grounded:!1,ready:!1,last:i,drift:0,driftAt:0,death:null,deathFrame:-1,bleedOutAt:null,bleedOwner:-1,aimX:t%2?-1:1,aimY:0,attacking:0,kills:0})}}openingSpawnProtected(t){const e=this.state.actors.filter(i=>!i.human&&i.hp>0);return this.state.actors.filter(i=>i.human&&i.hp>0).some(i=>{const s=[...e].sort((r,o)=>Math.abs(hn[r.id]-hn[i.id])-Math.abs(hn[o.id]-hn[i.id]))[0];return s!==void 0&&Math.abs(t-hn[s.id])<Yg})}makeWorld(){this.state.props=Wg(this.state.venue,()=>this.next()),this.state.shots=[],this.state.debris=[],this.state.blood=[],this.state.fires=[],this.state.pickups=[];for(const i of this.state.actors.filter(s=>s.human)){const s=hn[i.id]+(hn[i.id]<0?3:-3),r=this.next();for(let o=0;o<2;o++)this.state.props.push({id:o===0?r:this.next(),kind:"crate",trainingFor:i.id,x:s,y:.225+.55+o*1.1,w:1.5,h:1.1,hp:18,maxHp:18,material:"wood",fuel:.5,burn:0,supports:o===1?[r]:[],falling:!1,vy:0,exploded:!1,solid:!0,color:o})}const t=[-1,-.5,0,.5,1];let e=0;for(let i=0;i<9;i++){const s=-52+i*13,r=this.openingSpawnProtected(s)?t[e++%t.length]:s,o=["axe","shotgun","smg"][i%3];this.state.pickups.push({id:this.next(),x:r,y:1,weapon:o,hp:$s[o]})}for(const i of this.state.actors.filter(s=>s.human)){const s=hn[i.id]+(hn[i.id]<0?-1:1);this.state.pickups.push({id:this.next(),x:s,y:1,weapon:"smg",hp:$s.smg,reservedFor:i.id,reservedUntil:600})}}releaseEnemies(){const t=this.state.actors.filter(e=>e.human&&e.hp>0);for(const e of this.state.actors.filter(i=>i.pendingSpawn)){const i=r=>Math.min(...t.map(o=>Math.abs(o.x-r)));if(i(e.x)<34){const r=Array.from({length:121},(o,a)=>a-60);r.sort((o,a)=>i(a)-i(o)||Math.abs(o-hn[e.id])-Math.abs(a-hn[e.id])),e.x=r[0]}const s=this.floorAt(e.x,100,-100);e.y=s>-50?s:1,e.vx=e.vy=0,e.pendingSpawn=!1}}snapshot(){return JSON.parse(JSON.stringify(this.state))}restore(t){if(t.version!==1)throw new Error("Incompatible Royale state");this.state=JSON.parse(JSON.stringify(t))}event(t,e,i,s=-1,r={}){this.state.events.push({id:`${this.state.round}:${this.state.frame}:${++this.state.eventSeq}`,frame:this.state.frame,kind:t,x:e,y:i,actor:s,...r}),this.state.events.length>180&&this.state.events.shift()}startRound(){const t=this.state.actors.map(s=>({...s.look})),e=this.state.actors.map(s=>s.last),i=this.state.round+1;this.makeActors(),this.state.actors.forEach((s,r)=>{s.look=t[r],s.last=e[r],s.y=this.floorAt(s.x,100,-1)>-50?this.floorAt(s.x,100,-1):1}),this.makeWorld(),this.state.round=i,this.state.phase="match",this.state.phaseFrame=0,this.state.winner=null,this.state.zoneLeft=-64,this.state.zoneRight=64}lobby(t){for(const s of this.state.actors.filter(r=>r.human)){const r=t[s.id]??Yi(s.look);JSON.stringify(s.look)!==JSON.stringify(r.look)&&(s.look={...r.look},s.ready=!1),r.ready!==s.last.ready&&(s.ready=!s.ready),s.last={...r}}const e=t[0];e&&e.venueChange!==this.state.venueNonce&&(this.state.venueNonce=e.venueChange,this.state.venue=Cs[e.venue].id,this.makeWorld(),this.state.actors.forEach(s=>s.ready=!1));const i=this.state.actors.filter(s=>s.human).every(s=>s.ready);this.state.phase==="lobby"&&i?(this.state.phase="countdown",this.state.phaseFrame=0):this.state.phase==="countdown"&&!i&&(this.state.phase="lobby",this.state.phaseFrame=0),this.state.phase==="countdown"&&this.state.phaseFrame>=180&&this.startRound()}rematch(t){if(this.state.actors.filter(e=>e.human).every(e=>{var i;return(((i=t[e.id])==null?void 0:i.rematch)??0)>e.last.rematch})){this.state.venue=Cs[(Cs.findIndex(i=>i.id===this.state.venue)+1)%3].id,this.state.phase="lobby",this.state.phaseFrame=0;const e=this.state.actors.map(i=>({...i.look}));this.makeActors(),this.state.actors.forEach((i,s)=>{i.look=e[s],i.human&&(i.last=t[i.id]),i.ready=!1}),this.makeWorld()}}weapon(t){return!t.parts.armL&&!t.parts.armR?"body":t.weapons[t.slot]??"shank"}handling(t){return(t.parts.handL>0?1:0)+(t.parts.handR>0?1:0)}movement(t){const e=Ar(t),i=+(t.parts.footL>0)+ +(t.parts.footR>0);return Math.max(.24,(e===2?1:e===1?.65:.29)*(i===2?1:i===1?.85:.7))}detach(t,e,i=-1){const s=Ra(t),r=Object.fromEntries(sn.map(l=>[l,dn(t,l)])),o=l=>{if(t.parts[l]<=0)return;t.parts[l]=0;const c=r[l];this.state.debris.length<120&&this.state.debris.push({id:this.next(),x:t.x+c.x,y:t.y+c.y,vx:(this.random()-.5)*12,vy:3+this.random()*5,life:900,part:l,look:{...t.look},color:0,hp:14,w:c.w,h:c.h}),this.event("detach",t.x+c.x,t.y+c.y,t.id,{part:l,severed:l===e&&e!=="torso"});for(const h of sn)Ns[h].parent===l&&o(h)};o(e);const a=Ra(t);if(a===1&&s!==1&&t.hp>0&&t.parts.head>0?(t.distressAt=this.state.frame,t.distressCount=0):(a!==1||t.hp<=0||t.parts.head<=0)&&(delete t.distressAt,delete t.distressCount),t.hp>0&&!t.pendingSpawn&&t.parts.torso>0&&t.bleedOutAt===null&&!(t.parts.thighL>0&&t.parts.shinL>0)&&!(t.parts.thighR>0&&t.parts.shinR>0)&&(t.bleedOutAt=this.state.frame+360,t.bleedOwner=i),!t.parts.armL&&!t.parts.armR){for(const l of t.weapons)l!=="shank"&&l!=="body"&&t.durability[l]>0&&this.state.pickups.push({id:this.next(),x:t.x,y:t.y+.5,weapon:l,hp:t.durability[l],charges:l==="laser"||l==="flamethrower"?t.specialAmmo[l]:void 0});t.weapons=["body"],t.slot=0}}incomingDamage(t,e,i){const s=this.state.actors[i];return e*(t.human&&s&&!s.human?Xg:1)}damage(t,e,i,s,r=-1){if(t.pendingSpawn||t.hp<=0||t.parts[e]<=0)return;i=this.incomingDamage(t,i,r);const o=!["fire","fuel_fire","zone"].includes(s),a=t.human?$u:1,l=Math.min(t.parts[e],i*(e==="torso"?(o?.45:1)*a:1));if(e==="torso"&&o){const h=t.id%2===0?"L":"R",u=h==="L"?"R":"L",d=[`thigh${h}`,`arm${h}`,`thigh${u}`,`arm${u}`,"head"].find(g=>t.parts[g]>0);if(d){const g=i*.8;t.parts[d]<=g?this.detach(t,d,r):t.parts[d]-=g}}t.parts[e]<=l?this.detach(t,e,r):t.parts[e]-=l;const c=e==="torso"?l:l*.08*a;t.hp=Math.max(0,t.hp-c),this.event("hit",t.x+dn(t,e).x,t.y+dn(t,e).y,t.id,{part:e}),(t.hp<=0||t.parts.torso<=0)&&this.kill(t,s,r)}kill(t,e,i=-1){t.death||(t.hp=0,t.death=e,t.deathFrame=this.state.frame,e==="bleedout"&&this.bloodSplatter(t),this.event("death",t.x,t.y+1,t.id,{cause:e}),i>=0&&i!==t.id&&this.state.actors[i].kills++,this.detach(t,"torso"))}bloodSplatter(t){const e=this.floorAt(t.x,t.y+.3,-100);if(e<=-50)return;const i=this.state.props.find(s=>s.hp>0&&!s.falling&&Math.abs(s.y+s.h/2-e)<.001&&Math.abs(t.x-s.x)<s.w/2+.25);i&&(this.state.blood.push({id:this.next(),x:t.x,y:e+.018,surface:i.id}),this.state.blood.length>8&&this.state.blood.shift())}hitPart(t,e,i){if(t.pendingSpawn)return null;let s=null,r=1/0;for(const o of sn){if(t.parts[o]<=0)continue;const a=dn(t,o),l=Math.abs(e-t.x-a.x),c=Math.abs(i-t.y-a.y);l<a.w/2+.14&&c<a.h/2+.14&&l+c<r&&(r=l+c,s=o)}return s}floorAt(t,e,i){let s=-100;for(const r of this.state.props){if(r.hp<=0||r.falling||!(r.kind==="floor"||r.kind==="crate"||r.kind==="roof"||r.kind==="balcony"||r.kind==="table"||r.kind==="car"||r.kind==="truck"||r.kind==="barrier"))continue;const o=r.y+r.h/2;Math.abs(t-r.x)<r.w/2+.25&&e>=o-.2&&i<=o&&o>s&&(s=o)}return s}damagePickup(t,e){t.hp-=e,t.hp<=0&&(this.event("break",t.x,t.y),this.state.debris.length<120&&this.state.debris.push({id:this.next(),x:t.x,y:t.y,vx:(this.random()-.5)*5,vy:3,life:450,part:null,look:null,color:4,hp:8,w:.4,h:.15}),this.state.pickups=this.state.pickups.filter(i=>i.id!==t.id))}damageWeapon(t,e,i=-1){if(t.pendingSpawn)return;e=this.incomingDamage(t,e,i);const s=this.weapon(t);s!=="body"&&(t.durability[s]=Math.max(0,t.durability[s]-e),t.durability[s]||(this.event("break",t.x,t.y+ei(t),t.id),t.weapons=t.weapons.filter(r=>r!==s),t.weapons.length||(t.weapons=["body"]),t.slot=0,t.reloading=0))}canPickup(t,e){return!t.pendingSpawn&&(e.expires===void 0||e.expires>this.state.frame)&&(e.reservedFor===void 0||e.reservedFor===t.id||this.state.phaseFrame>=(e.reservedUntil??0))}pickup(t){if(!t.parts.armL&&!t.parts.armR)return;const e=this.state.pickups.filter(i=>this.canPickup(t,i)&&Math.hypot(i.x-t.x,i.y-t.y-1)<3).sort((i,s)=>Math.abs(i.x-t.x)-Math.abs(s.x-t.x))[0];if(e){if(!t.weapons.includes(e.weapon))if(t.weapons.length<2)t.weapons.push(e.weapon);else{const i=t.weapons[1];t.weapons[1]=e.weapon,this.state.pickups.push({id:this.next(),x:t.x-1,y:t.y+.6,weapon:i,hp:t.durability[i],charges:i==="laser"||i==="flamethrower"?t.specialAmmo[i]:void 0})}(e.weapon==="laser"||e.weapon==="flamethrower")&&(t.specialAmmo[e.weapon]=e.charges??(e.weapon==="laser"?2:24)),t.durability[e.weapon]=e.hp,t.slot=Math.max(0,t.weapons.indexOf(e.weapon)),t.reloading=0,this.state.pickups=this.state.pickups.filter(i=>i.id!==e.id),t.ammo=this.clip(t),this.event("pickup",t.x,t.y+1,t.id)}}clip(t){const e=this.weapon(t);return e==="laser"||e==="flamethrower"?t.specialAmmo[e]:e==="shotgun"||e==="smg"?t.magazines[e]:0}reload(t){const e=this.weapon(t);if(t.reloading||t.reserve<=0||!(e==="smg"||e==="shotgun"))return;const i=e==="smg"?30:6;t.magazines[e]>=i||(this.event("reload",t.x,t.y+1,t.id),t.reloading=Math.round((e==="smg"?110:40)*(this.handling(t)<2?1.5:1)))}attack(t){if(t.pendingSpawn||t.cooldown>0)return;const e=this.weapon(t),i=e==="shotgun"||e==="smg",s=pr(t);if(e==="laser"||e==="flamethrower"){if(t.specialAmmo[e]<=0){this.spendSpecial(t,e);return}if(e==="flamethrower"&&this.state.shots.length>117)return;t.specialAmmo[e]--,t.cooldown=e==="laser"?24:6;const r=t.x+s.x+s.dx*.4,o=t.y+s.y+s.dy*.4;if(e==="laser"){let a=r,l=o,c=!1;for(let h=0;h<=160&&!c;h++){a=r+s.dx*h*.15,l=o+s.dy*h*.15;for(const u of this.state.props)if(u.hp>0&&Math.abs(a-u.x)<u.w/2&&Math.abs(l-u.y)<u.h/2){this.damageProp(u,65,t.id),c=!0;break}if(!c)for(const u of this.state.actors){if(u.id===t.id||u.hp<=0||u.pendingSpawn)continue;const f=this.hitPart(u,a,l);if(f){this.damage(u,f,50,"laser",t.id),c=!0;break}}}this.event("shot",r,o,t.id,{weapon:e,endX:a,endY:l})}else{for(let a=-1;a<=1;a++){const l=s.angle+a*.13;this.state.shots.push({id:this.next(),owner:t.id,x:r,y:o,vx:Math.cos(l)*20,vy:Math.sin(l)*20,life:15,damage:1,weapon:e})}this.event("shot",r,o,t.id,{weapon:e})}this.spendSpecial(t,e),t.ammo=this.clip(t);return}if(e==="axe"){if(this.state.shots.length>=120)return;this.state.shots.push({id:this.next(),owner:t.id,x:t.x+s.x+s.dx*.35,y:t.y+s.y+s.dy*.35,vx:s.dx*18,vy:s.dy*18,life:22,damage:30,weapon:"axe",durability:t.durability.axe}),this.event("shot",t.x+s.x,t.y+s.y,t.id,{weapon:e}),t.weapons=t.weapons.filter(r=>r!=="axe"),t.weapons.length||(t.weapons=["body"]),t.slot=0,t.cooldown=43,t.attacking=10,t.reloading=0;return}if(i){if(t.reloading&&!(e==="shotgun"&&t.magazines.shotgun>0))return;if(t.magazines[e]<=0){this.reload(t);return}t.reloading=0,t.magazines[e]--,t.cooldown=e==="smg"?6:45;const r=Math.atan2(t.aimY,t.aimX),o=e==="shotgun"?7:1;for(let a=0;a<o&&this.state.shots.length<120;a++){const l=(this.random()-.5)*(e==="shotgun"?.38:.09)+(t.parts.head?0:(this.random()-.5)*.65),c=r+l;this.state.shots.push({id:this.next(),owner:t.id,x:t.x+s.x+s.dx*.35,y:t.y+s.y+s.dy*.35,vx:Math.cos(c)*48,vy:Math.sin(c)*48,life:e==="shotgun"?20:60,damage:e==="shotgun"?9:8,weapon:e})}this.event("shot",t.x,t.y+ei(t),t.id,{weapon:e})}else{t.cooldown=e==="body"?32:18,t.attacking=10;const r=(e==="shank"?Hg:1.1)*(this.handling(t)<2?.85:1),o=e==="body"?8:13;if(this.event("melee",t.x,t.y+ei(t),t.id,{weapon:e}),e==="shank"){let a=!1;for(let l=1;l<=12&&!a;l++){const c=r*l/12,h=t.x+s.dx*c,u=t.y+ei(t)+s.dy*c;for(const f of this.state.props)if(f.hp>0&&Math.abs(h-f.x)<f.w/2&&Math.abs(u-f.y)<f.h/2){this.damageProp(f,o*.7,t.id),a=!0;break}if(a)break;for(const f of this.state.actors){if(f.id===t.id||f.hp<=0||f.pendingSpawn||Math.hypot(f.x-t.x,f.y-t.y)>r+.25)continue;const d=this.hitPart(f,h,u);if(d){this.damage(f,d,o,"shank",t.id),a=!0;break}}}return}for(const a of this.state.actors){if(a.id===t.id||a.hp<=0||a.pendingSpawn||Math.abs(a.y-t.y)>2.3)continue;const l=a.x-t.x;if(Math.sign(l)!==t.face||Math.abs(l)>r)continue;const c=t.y+ei(t)+t.aimY*1.5,h=sn.filter(u=>a.parts[u]>0).sort((u,f)=>Math.abs(a.y+dn(a,u).y-c)-Math.abs(a.y+dn(a,f).y-c));h[0]&&this.damage(a,h[0],o,e,t.id)}for(const a of this.state.props)if(a.hp>0&&Math.abs(a.x-t.x)<r+a.w/2&&Math.abs(a.y-t.y-ei(t)-t.aimY*1.1)<a.h/2+1){const l=a.x-t.x;(Math.sign(l)===t.face||Math.abs(l)<.6)&&this.damageProp(a,o*.7,t.id)}}t.ammo=this.clip(t)}spendSpecial(t,e){t.specialAmmo[e]>0||(t.weapons=t.weapons.filter(i=>i!==e),t.weapons.length||(t.weapons=["body"]),t.slot=0)}dropLoot(t){if(this.state.pickups.length>=32)return;const e=this.floorAt(t.x,t.y+t.h/2+.1,-100);if(e<=-50)return;const i=this.state.phaseFrame<600&&this.openingSpawnProtected(t.x)?"shank":this.random()<.5?"laser":"flamethrower";this.state.pickups.push({id:this.next(),x:t.x,y:e+.55,weapon:i,hp:$s[i],charges:i==="laser"?2:i==="flamethrower"?24:void 0,expires:this.state.frame+600})}damageProp(t,e,i=-1){if(!(t.hp<=0)&&(t.hp=Math.max(0,t.hp-e),t.material==="fuel"&&t.hp<t.maxHp*.5&&(t.burn=Math.max(t.burn,1),this.ignite(t,this.state.frame+360,"fuel_fire",i)),t.hp<=0)){this.event("break",t.x,t.y,i,{prop:t.kind}),t.kind==="pump"&&!this.state.fires.some(s=>s.id===t.id)&&this.state.fires.push({id:t.id,x:t.x,y:Math.max(.4,t.y-t.h/2+.5),radius:3,until:this.state.frame+480,owner:i,cause:"fuel_fire"});for(let s=0;s<4&&this.state.debris.length<120;s++)this.state.debris.push({id:this.next(),x:t.x+(this.random()-.5)*t.w,y:t.y,vx:(this.random()-.5)*8,vy:2+this.random()*5,life:600,part:null,look:null,color:t.material==="glass"?2:t.material==="metal"?4:5,hp:12,w:Math.min(1,t.w/4),h:Math.min(.7,t.h/3)});if(t.material==="fuel"&&!t.exploded){t.exploded=!0,this.event("explosion",t.x,t.y,i);const s=t.kind==="can"?4:7;for(const r of this.state.actors)if(r.hp>0&&!r.pendingSpawn){const o=Math.hypot(r.x-t.x,r.y+1-t.y);o<s&&(this.damage(r,"torso",Math.max(12,55*(1-o/s)),"blast",i),r.vx+=(r.x>t.x?1:-1)*10,r.vy+=5)}for(const r of[...this.state.pickups])Math.hypot(r.x-t.x,r.y-t.y)<s&&this.damagePickup(r,50);for(const r of this.state.props)r!==t&&r.hp>0&&Math.hypot(r.x-t.x,r.y-t.y)<s&&(r.fuel>0&&(r.burn=1,this.ignite(r,this.state.frame+240,"fuel_fire",i)),r.hp=Math.max(1,r.hp-22))}this.dropLoot(t)}}ignite(t,e,i,s){if(t.onFire&&t.onFire.until>this.state.frame)return;const r=this.state.actors.find(o=>o===t);r&&(r.hp<=0||r.pendingSpawn)||(this.event("ignite",t.x,t.y+(r?ws(r)*.5:0),(r==null?void 0:r.id)??-1),t.onFire={until:Math.min(e,this.state.frame+240),cause:i,owner:s})}burning(){const t=this.state,e=t.frame;t.fires=t.fires.filter(r=>r.until>e);for(const r of t.props)r.hp>0&&r.burn&&!r.onFire&&this.ignite(r,e+240,r.material==="fuel"?"fuel_fire":"fire",-1);const i=[...t.actors.filter(r=>r.hp>0&&!r.pendingSpawn).map(r=>({object:r,x:r.x,y:r.y+ws(r)/2,w:.9,h:ws(r)})),...t.props.filter(r=>r.hp>0).map(r=>({object:r,x:r.x,y:r.y,w:r.w,h:r.h})),...t.debris.filter(r=>r.hp>0).map(r=>({object:r,x:r.x,y:r.y,w:r.w,h:r.h})),...t.pickups.filter(r=>r.hp>0).map(r=>({object:r,x:r.x,y:r.y,w:.6,h:.4}))],s=[...t.fires.map(r=>({...r,object:null})),...i.filter(r=>r.object.onFire&&r.object.onFire.until>e).map(r=>({...r.object.onFire,object:r.object,x:r.x,y:r.y,radius:.75}))];for(const r of s)for(const o of i){if(r.object===o.object)continue;const a=Math.max(0,Math.abs(o.x-r.x)-o.w/2),l=Math.max(0,Math.abs(o.y-r.y)-o.h/2);Math.hypot(a,l)<=r.radius&&this.ignite(o.object,r.until,r.cause,r.owner)}for(const r of i){const o=r.object.onFire;o&&o.until<=e&&(delete r.object.onFire,"burn"in r.object&&(r.object.burn=0))}if(e%15===0){for(const r of t.actors)r.hp>0&&!r.pendingSpawn&&r.onFire&&this.damage(r,"torso",2,r.onFire.cause,r.onFire.owner);for(const r of t.props)r.hp>0&&r.onFire&&this.damageProp(r,3,r.onFire.owner);for(const r of t.debris)r.hp>0&&r.onFire&&(r.hp-=2);for(const r of[...t.pickups])r.hp>0&&r.onFire&&this.damagePickup(r,2)}}bot(t){if(t.pendingSpawn)return Yi(t.look);const e=Yi(t.look),i=this.state.actors.filter(p=>p.hp>0&&!p.pendingSpawn&&p.id!==t.id).sort((p,T)=>Math.abs(p.x-t.x)-Math.abs(T.x-t.x)),s=i[0];if(!s)return e;const r=this.weapon(t),o=r==="smg"||r==="shotgun"||r==="laser"||r==="flamethrower",a=r==="axe",l=Math.abs(s.x-t.x),c=this.state.pickups.filter(p=>this.canPickup(t,p)&&p.weapon!=="shank"&&Math.abs(p.x-t.x)<14).sort((p,T)=>Math.abs(p.x-t.x)-Math.abs(T.x-t.x))[0];t.weapons.length<2&&c?(e.move=Math.sign(c.x-t.x),Math.abs(c.x-t.x)<2&&(e.pickup=t.last.pickup+1)):e.move=l>(r==="flamethrower"?3:o?9:a?4:1.4)?Math.sign(s.x-t.x):o&&l<4?-Math.sign(s.x-t.x):0,t.x<this.state.zoneLeft+3&&(e.move=1),t.x>this.state.zoneRight-3&&(e.move=-1);const h=sn.filter(p=>s.parts[p]>0)[(Math.floor(this.state.frame/47)+t.id)%sn.filter(p=>s.parts[p]>0).length]??"torso",u=s.x+dn(s,h).x-t.x,f=s.y+dn(s,h).y-(t.y+ei(t)),d=Math.max(.1,Math.hypot(u,f));e.aimX=u/d,e.aimY=f/d,e.attack=l<(r==="flamethrower"?5:o?23:a?6:2.3)&&Math.abs(s.y-t.y)<(o?9:2.3);const g=this.state.props.find(p=>p.hp>0&&p.solid&&p.y-p.h/2<t.y+2.7&&p.y+p.h/2>t.y+.4&&Math.abs(p.x-t.x-e.move*1.4)<p.w/2+.6),v=this.state.fires.some(p=>Math.abs(p.x-t.x-e.move*2)<p.radius+1)||this.state.props.some(p=>p.hp>0&&(p.burn||p.onFire)&&Math.abs(p.x-t.x-e.move*2)<p.w/2+1),m=this.floorAt(t.x+e.move*2,t.y+.5,t.y-1)<-50;return t.grounded&&(g||v||m||(this.state.frame+t.id*37)%113===0)&&(e.jump=t.last.jump+1),g&&(e.attack=!0,this.state.frame%20<12&&(e.aimX=e.move,e.aimY=0)),(r==="smg"||r==="shotgun")&&this.clip(t)===0&&(t.reserve>0?e.reload=t.last.reload+1:e.cycle=t.last.cycle+1),e}move(t,e){if(t.pendingSpawn)return;if(t.bleedOutAt!==null){if(this.state.frame>=t.bleedOutAt){this.kill(t,"bleedout",t.bleedOwner);return}t.hp=Math.max(.01,t.hp-100/360*(t.human?$u:1))}if(t.distressAt!==void 0&&this.state.frame>=t.distressAt&&Ra(t)===1&&t.parts.head>0){const l=t.distressCount??0;this.event(l%2===0?"scream":"cry",t.x,t.y+dn(t,"head").y,t.id),t.distressCount=l+1,t.distressAt=this.state.frame+150+(t.id*31+l*17)%90}if(t.cooldown=Math.max(0,t.cooldown-1),t.attacking=Math.max(0,t.attacking-1),t.reloading>0&&(t.reloading--,!t.reloading)){const l=this.weapon(t);if(l==="smg"){const c=Math.min(t.reserve,30-t.magazines.smg);t.magazines.smg+=c,t.reserve-=c}else l==="shotgun"&&t.reserve>0&&(t.magazines.shotgun++,t.reserve--,t.magazines.shotgun<6&&this.reload(t))}e.cycle!==t.last.cycle&&(this.event("swap",t.x,t.y+1,t.id),t.slot=(t.slot+1)%t.weapons.length,t.reloading=0),e.pickup!==t.last.pickup&&this.pickup(t),e.reload!==t.last.reload&&this.reload(t),!t.parts.head&&this.state.frame>=t.driftAt&&(t.drift=(this.random()*2-1)*5.5,t.driftAt=this.state.frame+15+Math.floor(this.random()*15));const i=7*this.movement(t),s=t.parts.head?e.move*i:e.move*i*.25+t.drift;t.vx+=(s-t.vx)*.2,Math.abs(e.aimX)>.05&&(t.face=Math.sign(e.aimX)),t.aimX=e.aimX,t.aimY=e.aimY,e.jump!==t.last.jump&&t.grounded&&Ar(t)>0&&(this.event("jump",t.x,t.y,t.id),t.vy=14*Math.max(.4,this.movement(t)),t.grounded=!1),t.vy-=Ca*un;const r=t.x,o=t.y;t.x=Math.max(-63,Math.min(63,t.x+t.vx*un)),t.y+=t.vy*un,t.grounded=!1;const a=this.floorAt(t.x,o,t.y);t.vy<=0&&a>-50&&(t.vy<-5&&this.event("land",t.x,a,t.id),t.y=a,t.vy=0,t.grounded=!0);for(const l of this.state.props)l.hp<=0||!l.solid||l.falling||l.kind==="floor"||l.kind==="roof"||l.kind==="balcony"||Math.abs(t.x-l.x)<l.w/2+.4&&t.y+ws(t)>l.y-l.h/2+.1&&t.y<l.y+l.h/2-.1&&Math.abs(r-l.x)>=l.w/2+.35&&(t.x=r,t.vx=0);e.attack&&this.attack(t),t.ammo=this.clip(t),t.y<-12&&this.kill(t,"fall"),this.state.phaseFrame%30===0&&(t.x<this.state.zoneLeft||t.x>this.state.zoneRight)&&this.damage(t,"torso",this.state.phaseFrame>10800?20:5,"zone"),this.state.phaseFrame>14400&&this.state.phaseFrame%60===0&&this.damage(t,"torso",8,"zone"),t.last={...e}}step(t=[]){var a,l;const e=this.state;e.frame++,e.phaseFrame++,e.eventSeq=0;const i=t.map(zg);if(e.phase==="lobby"||e.phase==="countdown"){this.lobby(i);return}if(e.phase==="results"){this.rematch(i);return}if(e.actors.some(c=>c.pendingSpawn)){const c=e.actors.filter(u=>u.human&&u.hp>0);e.props.some(u=>u.trainingFor!==void 0&&u.hp>0&&c.some(f=>f.id===u.trainingFor))?e.phaseFrame=0:this.releaseEnemies()}const s=e.phaseFrame/60,r=Math.max(0,s-30)*.27;e.zoneLeft=Math.min(-1,-64+r),e.zoneRight=Math.max(1,64-r);for(const c of e.actors)c.hp>0&&!c.pendingSpawn&&this.move(c,c.human?i[c.id]??Yi(c.look):this.bot(c));for(const c of e.shots){c.life--,c.weapon==="axe"&&(c.vy-=18*un);const h=c.x,u=c.y;c.x+=c.vx*un,c.y+=c.vy*un;const f=Math.max(1,Math.ceil(Math.hypot(c.x-h,c.y-u)/.18));for(let d=1;d<=f&&c.life>0;d++){const g=h+(c.x-h)*d/f,v=u+(c.y-u)*d/f;let m=!1;for(const p of e.actors)if(p.hp>0&&!p.pendingSpawn&&p.id!==c.owner){if(c.weapon!=="flamethrower"&&this.weapon(p)!=="body"&&Math.abs(g-p.x-pr(p).x)<.35&&Math.abs(v-p.y-pr(p).y)<.16){this.damageWeapon(p,c.damage,c.owner),m=!0;break}const T=this.hitPart(p,g,v);if(T){this.damage(p,T,c.damage,c.weapon==="flamethrower"?"fire":c.weapon,c.owner),c.weapon==="flamethrower"&&this.ignite(p,e.frame+240,"fire",c.owner),m=!0;break}}if(!m){for(const p of e.props)if(p.hp>0&&Math.abs(g-p.x)<p.w/2&&Math.abs(v-p.y)<p.h/2){this.damageProp(p,c.damage*(c.weapon==="axe"?1.6:.65),c.owner),c.weapon==="flamethrower"&&p.hp>0&&this.ignite(p,e.frame+240,"fire",c.owner),m=!0;break}}if(!m){for(const p of[...e.pickups])if(Math.abs(g-p.x)<.6&&Math.abs(v-p.y)<.35){this.damagePickup(p,c.damage),c.weapon==="flamethrower"&&this.ignite(p,e.frame+240,"fire",c.owner),m=!0;break}}if(!m){for(const p of e.debris)if(p.hp>0&&Math.abs(g-p.x)<p.w/2&&Math.abs(v-p.y)<p.h/2){p.hp-=c.damage,c.weapon==="flamethrower"&&this.ignite(p,e.frame+240,"fire",c.owner),p.vx+=c.vx*.1,p.settled=!1,p.groundTicks=0,m=!0;break}}m&&(c.life=0,c.x=g,c.y=v)}}for(const c of e.shots)if(c.weapon==="axe"&&c.life<=0){const h=this.floorAt(c.x,c.y+.5,-100);h>-50&&c.y>-12&&this.state.pickups.push({id:this.next(),x:c.x,y:h+.55,weapon:"axe",hp:c.durability??$s.axe})}e.shots=e.shots.filter(c=>c.life>0);for(const c of e.props)if(!(c.hp<=0)&&(c.supports.some(h=>{var u;return((u=e.props.find(f=>f.id===h))==null?void 0:u.hp)===0})&&(c.falling=!0),c.falling)){const h=c.y;c.vy-=Ca*un,c.y+=c.vy*un;for(const u of e.actors)u.hp>0&&!u.pendingSpawn&&!((a=c.hitActors)!=null&&a.includes(u.id))&&Math.abs(u.x-c.x)<c.w/2+.5&&u.y+ws(u)>c.y-c.h/2&&u.y<h+c.h/2&&((c.hitActors??(c.hitActors=[])).push(u.id),this.damage(u,"torso",32,c.kind==="roof"?"canopy":"collapse"));if(c.y-c.h/2<.4){c.y=.4+c.h/2,c.falling=!1,this.damageProp(c,c.maxHp);continue}}this.burning(),e.pickups=e.pickups.filter(c=>c.expires===void 0||c.expires>e.frame);for(const c of e.debris){c.life--;const h=c.y-c.h/2;if(c.settled){const d=this.floorAt(c.x,h+.05,h-.08);if(d>-50&&Math.abs(d-h)<.1)continue;c.settled=!1,c.groundTicks=0}c.vy-=Ca*un;const u=h;c.x+=c.vx*un,c.y+=c.vy*un,c.angle=(c.angle??0)+c.vx*.15*un;const f=this.floorAt(c.x,u,c.y-c.h/2);c.vy<0&&f>-50?(c.y=f+c.h/2,c.vy=Math.abs(c.vy)<1?0:c.vy*-.2,c.vx*=.85,c.groundTicks=Math.abs(c.vy)<.2&&Math.abs(c.vx)<.15?(c.groundTicks??0)+1:0,c.groundTicks>=45&&(c.settled=!0,c.vx=0,c.vy=0)):c.groundTicks=0}e.debris=e.debris.filter(c=>c.life>0&&c.hp>0&&c.y>-15);const o=e.actors.filter(c=>c.hp>0);o.length<=1&&(e.phase="results",e.phaseFrame=0,e.winner=((l=o[0])==null?void 0:l.id)??null)}}const Ho={laser:{title:"The warranty did not cover laser surgery.",hint:"Loot lasers have two shots. Break line of sight before the second."},bleedout:{title:"You have run out of legs. And blood.",hint:"Losing both legs starts a six-second bleed-out. Make your last shots count."},fuel_fire:{title:"Turns out you are flammable.",hint:"Fuel leaks are not a shortcut. Break the chain and leave the flames."},fire:{title:"Your outfit was not fireproof.",hint:"Burning fabric spreads fire. Find an unlit route."},canopy:{title:"The roof was not emotionally supportive.",hint:"Broken canopy posts mean incoming metal. Move away from the shadow."},collapse:{title:"Structural integrity was more of a suggestion.",hint:"Watch the supports. Loose objects land with consequences."},shotgun:{title:"You brought personal space to a shotgun fight.",hint:"Leave the pellet cone. Reloading opponents are easier company."},axe:{title:"You have been downsized.",hint:"Dodge the chop, then punish the recovery."},shank:{title:"That was a very local problem.",hint:"Stay outside the blade’s reach. Backpedal and use cover."},smg:{title:"Standing still simplified their paperwork.",hint:"Break line of sight and avoid trading sustained bursts."},blast:{title:"The explosion had a wider social circle.",hint:"Fuel containers detonate once. Make sure you are elsewhere."},fall:{title:"Gravity remains undefeated.",hint:"Floor panels can disappear. Jump to intact ground."},zone:{title:"The map asked you to leave.",hint:"Watch the yellow boundary and move before the next contraction."},body:{title:"You lost an argument with a torso.",hint:"Even unarmed opponents can body-check. Keep a little distance."}};class $g{constructor(){mt(this,"seen",new Set);try{for(const t of JSON.parse(localStorage.getItem("royale.advice")??"[]"))Object.hasOwn(Ho,t)&&this.seen.add(t)}catch{}}discover(t){if(this.seen.has(t))return null;this.seen.add(t);try{localStorage.setItem("royale.advice",JSON.stringify([...this.seen]))}catch{}return Ho[t]}}class Kg{constructor(){mt(this,"seen",new Set)}collect(t,e){const i=t.filter(s=>s.frame<=e&&!this.seen.has(s.id));for(const s of i)this.seen.add(s.id);if(this.seen.size>6e3){const s=new Set(t.map(r=>r.id));this.seen=new Set([...this.seen].filter(r=>s.has(r)))}return i}reset(){this.seen.clear()}}function jg(n,t){if(!Number.isFinite(n)||!Number.isFinite(t))return{gain:0,pan:0};const e=Math.max(0,Math.abs(n)-.85,Math.abs(t)-.85);return{gain:1/(1+12*e+24*e*e),pan:Math.max(-.92,Math.min(.92,n*.8))}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Nc="169",Jg=0,Ku=1,Zg=2,Oc=1,Qg=2,Qn=3,Li=0,Je=1,rn=2,Ai=0,Ps=1,ju=2,Ju=3,Zu=4,t0=5,qi=100,e0=101,n0=102,i0=103,s0=104,r0=200,o0=201,a0=202,l0=203,Tl=204,Al=205,c0=206,u0=207,h0=208,f0=209,d0=210,p0=211,m0=212,g0=213,_0=214,Rl=0,Cl=1,Pl=2,Os=3,Ll=4,Il=5,Dl=6,Ul=7,_d=0,v0=1,x0=2,Ri=0,y0=1,M0=2,S0=3,vd=4,E0=5,b0=6,w0=7,xd=300,Fs=301,Bs=302,Nl=303,Ol=304,ra=306,Fl=1e3,Ji=1001,Bl=1002,Ge=1003,T0=1004,$r=1005,En=1006,Pa=1007,Zi=1008,ci=1009,yd=1010,Md=1011,Rr=1012,Fc=1013,ns=1014,oi=1015,Fr=1016,Bc=1017,kc=1018,ks=1020,Sd=35902,Ed=1021,bd=1022,wn=1023,wd=1024,Td=1025,Ls=1026,zs=1027,Ad=1028,zc=1029,Rd=1030,Hc=1031,Vc=1033,bo=33776,wo=33777,To=33778,Ao=33779,kl=35840,zl=35841,Hl=35842,Vl=35843,Gl=36196,Wl=37492,Xl=37496,Yl=37808,ql=37809,$l=37810,Kl=37811,jl=37812,Jl=37813,Zl=37814,Ql=37815,tc=37816,ec=37817,nc=37818,ic=37819,sc=37820,rc=37821,Ro=36492,oc=36494,ac=36495,Cd=36283,lc=36284,cc=36285,uc=36286,A0=3200,R0=3201,Pd=0,C0=1,Ei="",je="srgb",Di="srgb-linear",Gc="display-p3",oa="display-p3-linear",Vo="linear",pe="srgb",Go="rec709",Wo="p3",us=7680,Qu=519,P0=512,L0=513,I0=514,Ld=515,D0=516,U0=517,N0=518,O0=519,th=35044,La=35048,eh="300 es",ai=2e3,Xo=2001;class Vs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const De=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ia=Math.PI/180,hc=180/Math.PI;function Gs(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(De[n&255]+De[n>>8&255]+De[n>>16&255]+De[n>>24&255]+"-"+De[t&255]+De[t>>8&255]+"-"+De[t>>16&15|64]+De[t>>24&255]+"-"+De[e&63|128]+De[e>>8&255]+"-"+De[e>>16&255]+De[e>>24&255]+De[i&255]+De[i>>8&255]+De[i>>16&255]+De[i>>24&255]).toLowerCase()}function Oe(n,t,e){return Math.max(t,Math.min(e,n))}function F0(n,t){return(n%t+t)%t}function Da(n,t,e){return(1-e)*n+e*t}function Ks(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function $e(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Tt{constructor(t=0,e=0){Tt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Oe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qt{constructor(t,e,i,s,r,o,a,l,c){qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],f=i[2],d=i[5],g=i[8],v=s[0],m=s[3],p=s[6],T=s[1],M=s[4],E=s[7],F=s[2],I=s[5],R=s[8];return r[0]=o*v+a*T+l*F,r[3]=o*m+a*M+l*I,r[6]=o*p+a*E+l*R,r[1]=c*v+h*T+u*F,r[4]=c*m+h*M+u*I,r[7]=c*p+h*E+u*R,r[2]=f*v+d*T+g*F,r[5]=f*m+d*M+g*I,r[8]=f*p+d*E+g*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,g=e*u+i*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=u*v,t[1]=(s*c-h*i)*v,t[2]=(a*i-s*o)*v,t[3]=f*v,t[4]=(h*e-s*l)*v,t[5]=(s*r-a*e)*v,t[6]=d*v,t[7]=(i*l-c*e)*v,t[8]=(o*e-i*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ua.makeScale(t,e)),this}rotate(t){return this.premultiply(Ua.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ua.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ua=new qt;function Id(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Yo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function B0(){const n=Yo("canvas");return n.style.display="block",n}const nh={};function Co(n){n in nh||(nh[n]=!0,console.warn(n))}function k0(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function z0(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function H0(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ih=new qt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),sh=new qt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),js={[Di]:{transfer:Vo,primaries:Go,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[je]:{transfer:pe,primaries:Go,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[oa]:{transfer:Vo,primaries:Wo,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(sh),fromReference:n=>n.applyMatrix3(ih)},[Gc]:{transfer:pe,primaries:Wo,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(sh),fromReference:n=>n.applyMatrix3(ih).convertLinearToSRGB()}},V0=new Set([Di,oa]),re={enabled:!0,_workingColorSpace:Di,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!V0.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;const i=js[t].toReference,s=js[e].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return js[n].primaries},getTransfer:function(n){return n===Ei?Vo:js[n].transfer},getLuminanceCoefficients:function(n,t=this._workingColorSpace){return n.fromArray(js[t].luminanceCoefficients)}};function Is(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Na(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let hs;class G0{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{hs===void 0&&(hs=Yo("canvas")),hs.width=t.width,hs.height=t.height;const i=hs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=hs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Yo("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Is(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Is(e[i]/255)*255):e[i]=Is(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let W0=0;class Dd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:W0++}),this.uuid=Gs(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Oa(s[o].image)):r.push(Oa(s[o]))}else r=Oa(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function Oa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?G0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let X0=0;class We extends Vs{constructor(t=We.DEFAULT_IMAGE,e=We.DEFAULT_MAPPING,i=Ji,s=Ji,r=En,o=Zi,a=wn,l=ci,c=We.DEFAULT_ANISOTROPY,h=Ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:X0++}),this.uuid=Gs(),this.name="",this.source=new Dd(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Tt(0,0),this.repeat=new Tt(1,1),this.center=new Tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==xd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Fl:t.x=t.x-Math.floor(t.x);break;case Ji:t.x=t.x<0?0:1;break;case Bl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Fl:t.y=t.y-Math.floor(t.y);break;case Ji:t.y=t.y<0?0:1;break;case Bl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}We.DEFAULT_IMAGE=null;We.DEFAULT_MAPPING=xd;We.DEFAULT_ANISOTROPY=1;class le{constructor(t=0,e=0,i=0,s=1){le.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(c+1)/2,E=(d+1)/2,F=(p+1)/2,I=(h+f)/4,R=(u+v)/4,z=(g+m)/4;return M>E&&M>F?M<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(M),s=I/i,r=R/i):E>F?E<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),i=I/s,r=z/s):F<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(F),i=R/r,s=z/r),this.set(i,s,r,e),this}let T=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(f-h)*(f-h));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(u-v)/T,this.z=(f-h)/T,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Y0 extends Vs{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new le(0,0,t,e),this.scissorTest=!1,this.viewport=new le(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:En,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new We(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Dd(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class is extends Y0{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Ud extends We{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=Ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class q0 extends We{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=Ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Br{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3];const f=r[o+0],d=r[o+1],g=r[o+2],v=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=v;return}if(u!==v||l!==f||c!==d||h!==g){let m=1-a;const p=l*f+c*d+h*g+u*v,T=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const F=Math.sqrt(M),I=Math.atan2(F,p*T);m=Math.sin(m*I)/F,a=Math.sin(a*I)/F}const E=a*T;if(l=l*m+f*E,c=c*m+d*E,h=h*m+g*E,u=u*m+v*E,m===1-a){const F=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=F,c*=F,h*=F,u*=F}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*d-c*f,t[e+1]=l*g+h*f+c*u-a*d,t[e+2]=c*g+h*d+a*f-l*u,t[e+3]=h*g-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),f=l(i/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=i+a+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(i>a&&i>u){const d=2*Math.sqrt(1+i-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>u){const d=2*Math.sqrt(1+a-i-u);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-i-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Oe(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*i+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*u+this._w*f,this._x=i*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(t=0,e=0,i=0){U.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(rh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(rh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),h=2*(a*e-r*s),u=2*(r*i-o*e);return this.x=e+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Fa.copy(this).projectOnVector(t),this.sub(Fa)}reflect(t){return this.sub(Fa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Oe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Fa=new U,rh=new Br;class kr{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(xn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(xn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=xn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,xn):xn.fromBufferAttribute(r,o),xn.applyMatrix4(t.matrixWorld),this.expandByPoint(xn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Kr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Kr.copy(i.boundingBox)),Kr.applyMatrix4(t.matrixWorld),this.union(Kr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,xn),xn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Js),jr.subVectors(this.max,Js),fs.subVectors(t.a,Js),ds.subVectors(t.b,Js),ps.subVectors(t.c,Js),di.subVectors(ds,fs),pi.subVectors(ps,ds),Fi.subVectors(fs,ps);let e=[0,-di.z,di.y,0,-pi.z,pi.y,0,-Fi.z,Fi.y,di.z,0,-di.x,pi.z,0,-pi.x,Fi.z,0,-Fi.x,-di.y,di.x,0,-pi.y,pi.x,0,-Fi.y,Fi.x,0];return!Ba(e,fs,ds,ps,jr)||(e=[1,0,0,0,1,0,0,0,1],!Ba(e,fs,ds,ps,jr))?!1:(Jr.crossVectors(di,pi),e=[Jr.x,Jr.y,Jr.z],Ba(e,fs,ds,ps,jr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,xn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(xn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:($n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),$n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),$n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),$n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),$n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),$n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),$n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),$n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints($n),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const $n=[new U,new U,new U,new U,new U,new U,new U,new U],xn=new U,Kr=new kr,fs=new U,ds=new U,ps=new U,di=new U,pi=new U,Fi=new U,Js=new U,jr=new U,Jr=new U,Bi=new U;function Ba(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Bi.fromArray(n,r);const a=s.x*Math.abs(Bi.x)+s.y*Math.abs(Bi.y)+s.z*Math.abs(Bi.z),l=t.dot(Bi),c=e.dot(Bi),h=i.dot(Bi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const $0=new kr,Zs=new U,ka=new U;class aa{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):$0.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Zs.subVectors(t,this.center);const e=Zs.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Zs,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ka.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Zs.copy(t.center).add(ka)),this.expandByPoint(Zs.copy(t.center).sub(ka))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Kn=new U,za=new U,Zr=new U,mi=new U,Ha=new U,Qr=new U,Va=new U;class Wc{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Kn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Kn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Kn.copy(this.origin).addScaledVector(this.direction,e),Kn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){za.copy(t).add(e).multiplyScalar(.5),Zr.copy(e).sub(t).normalize(),mi.copy(this.origin).sub(za);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Zr),a=mi.dot(this.direction),l=-mi.dot(Zr),c=mi.lengthSq(),h=Math.abs(1-o*o);let u,f,d,g;if(h>0)if(u=o*l-a,f=o*a-l,g=r*h,u>=0)if(f>=-g)if(f<=g){const v=1/h;u*=v,f*=v,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(za).addScaledVector(Zr,f),d}intersectSphere(t,e){Kn.subVectors(t.center,this.origin);const i=Kn.dot(this.direction),s=Kn.dot(Kn)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Kn)!==null}intersectTriangle(t,e,i,s,r){Ha.subVectors(e,t),Qr.subVectors(i,t),Va.crossVectors(Ha,Qr);let o=this.direction.dot(Va),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;mi.subVectors(this.origin,t);const l=a*this.direction.dot(Qr.crossVectors(mi,Qr));if(l<0)return null;const c=a*this.direction.dot(Ha.cross(mi));if(c<0||l+c>o)return null;const h=-a*mi.dot(Va);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class fe{constructor(t,e,i,s,r,o,a,l,c,h,u,f,d,g,v,m){fe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,h,u,f,d,g,v,m)}set(t,e,i,s,r,o,a,l,c,h,u,f,d,g,v,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fe().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/ms.setFromMatrixColumn(t,0).length(),r=1/ms.setFromMatrixColumn(t,1).length(),o=1/ms.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=o*h,d=o*u,g=a*h,v=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+g*c,e[5]=f-v*c,e[9]=-a*l,e[2]=v-f*c,e[6]=g+d*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*h,d=l*u,g=c*h,v=c*u;e[0]=f+v*a,e[4]=g*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-g,e[6]=v+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*h,d=l*u,g=c*h,v=c*u;e[0]=f-v*a,e[4]=-o*u,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*h,e[9]=v-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*h,d=o*u,g=a*h,v=a*u;e[0]=l*h,e[4]=g*c-d,e[8]=f*c+v,e[1]=l*u,e[5]=v*c+f,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,d=o*c,g=a*l,v=a*c;e[0]=l*h,e[4]=v-f*u,e[8]=g*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+g,e[10]=f-v*u}else if(t.order==="XZY"){const f=o*l,d=o*c,g=a*l,v=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+v,e[5]=o*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=a*h,e[10]=v*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(K0,t,j0)}lookAt(t,e,i){const s=this.elements;return tn.subVectors(t,e),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),gi.crossVectors(i,tn),gi.lengthSq()===0&&(Math.abs(i.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),gi.crossVectors(i,tn)),gi.normalize(),to.crossVectors(tn,gi),s[0]=gi.x,s[4]=to.x,s[8]=tn.x,s[1]=gi.y,s[5]=to.y,s[9]=tn.y,s[2]=gi.z,s[6]=to.z,s[10]=tn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],f=i[9],d=i[13],g=i[2],v=i[6],m=i[10],p=i[14],T=i[3],M=i[7],E=i[11],F=i[15],I=s[0],R=s[4],z=s[8],ct=s[12],x=s[1],w=s[5],K=s[9],Y=s[13],Q=s[2],lt=s[6],V=s[10],it=s[14],H=s[3],gt=s[7],ot=s[11],L=s[15];return r[0]=o*I+a*x+l*Q+c*H,r[4]=o*R+a*w+l*lt+c*gt,r[8]=o*z+a*K+l*V+c*ot,r[12]=o*ct+a*Y+l*it+c*L,r[1]=h*I+u*x+f*Q+d*H,r[5]=h*R+u*w+f*lt+d*gt,r[9]=h*z+u*K+f*V+d*ot,r[13]=h*ct+u*Y+f*it+d*L,r[2]=g*I+v*x+m*Q+p*H,r[6]=g*R+v*w+m*lt+p*gt,r[10]=g*z+v*K+m*V+p*ot,r[14]=g*ct+v*Y+m*it+p*L,r[3]=T*I+M*x+E*Q+F*H,r[7]=T*R+M*w+E*lt+F*gt,r[11]=T*z+M*K+E*V+F*ot,r[15]=T*ct+M*Y+E*it+F*L,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],v=t[7],m=t[11],p=t[15];return g*(+r*l*u-s*c*u-r*a*f+i*c*f+s*a*d-i*l*d)+v*(+e*l*d-e*c*f+r*o*f-s*o*d+s*c*h-r*l*h)+m*(+e*c*u-e*a*d-r*o*u+i*o*d+r*a*h-i*c*h)+p*(-s*a*h-e*l*u+e*a*f+s*o*u-i*o*f+i*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],v=t[13],m=t[14],p=t[15],T=u*m*c-v*f*c+v*l*d-a*m*d-u*l*p+a*f*p,M=g*f*c-h*m*c-g*l*d+o*m*d+h*l*p-o*f*p,E=h*v*c-g*u*c+g*a*d-o*v*d-h*a*p+o*u*p,F=g*u*l-h*v*l-g*a*f+o*v*f+h*a*m-o*u*m,I=e*T+i*M+s*E+r*F;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/I;return t[0]=T*R,t[1]=(v*f*r-u*m*r-v*s*d+i*m*d+u*s*p-i*f*p)*R,t[2]=(a*m*r-v*l*r+v*s*c-i*m*c-a*s*p+i*l*p)*R,t[3]=(u*l*r-a*f*r-u*s*c+i*f*c+a*s*d-i*l*d)*R,t[4]=M*R,t[5]=(h*m*r-g*f*r+g*s*d-e*m*d-h*s*p+e*f*p)*R,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*p-e*l*p)*R,t[7]=(o*f*r-h*l*r+h*s*c-e*f*c-o*s*d+e*l*d)*R,t[8]=E*R,t[9]=(g*u*r-h*v*r-g*i*d+e*v*d+h*i*p-e*u*p)*R,t[10]=(o*v*r-g*a*r+g*i*c-e*v*c-o*i*p+e*a*p)*R,t[11]=(h*a*r-o*u*r-h*i*c+e*u*c+o*i*d-e*a*d)*R,t[12]=F*R,t[13]=(h*v*s-g*u*s+g*i*f-e*v*f-h*i*m+e*u*m)*R,t[14]=(g*a*s-o*v*s-g*i*l+e*v*l+o*i*m-e*a*m)*R,t[15]=(o*u*s-h*a*s+h*i*l-e*u*l-o*i*f+e*a*f)*R,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,g=r*u,v=o*h,m=o*u,p=a*u,T=l*c,M=l*h,E=l*u,F=i.x,I=i.y,R=i.z;return s[0]=(1-(v+p))*F,s[1]=(d+E)*F,s[2]=(g-M)*F,s[3]=0,s[4]=(d-E)*I,s[5]=(1-(f+p))*I,s[6]=(m+T)*I,s[7]=0,s[8]=(g+M)*R,s[9]=(m-T)*R,s[10]=(1-(f+v))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=ms.set(s[0],s[1],s[2]).length();const o=ms.set(s[4],s[5],s[6]).length(),a=ms.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],yn.copy(this);const c=1/r,h=1/o,u=1/a;return yn.elements[0]*=c,yn.elements[1]*=c,yn.elements[2]*=c,yn.elements[4]*=h,yn.elements[5]*=h,yn.elements[6]*=h,yn.elements[8]*=u,yn.elements[9]*=u,yn.elements[10]*=u,e.setFromRotationMatrix(yn),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=ai){const l=this.elements,c=2*r/(e-t),h=2*r/(i-s),u=(e+t)/(e-t),f=(i+s)/(i-s);let d,g;if(a===ai)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Xo)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=ai){const l=this.elements,c=1/(e-t),h=1/(i-s),u=1/(o-r),f=(e+t)*c,d=(i+s)*h;let g,v;if(a===ai)g=(o+r)*u,v=-2*u;else if(a===Xo)g=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const ms=new U,yn=new fe,K0=new U(0,0,0),j0=new U(1,1,1),gi=new U,to=new U,tn=new U,oh=new fe,ah=new Br;class Gn{constructor(t=0,e=0,i=0,s=Gn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Oe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Oe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Oe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Oe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Oe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Oe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return oh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(oh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ah.setFromEuler(this),this.setFromQuaternion(ah,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gn.DEFAULT_ORDER="XYZ";class Xc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let J0=0;const lh=new U,gs=new Br,jn=new fe,eo=new U,Qs=new U,Z0=new U,Q0=new Br,ch=new U(1,0,0),uh=new U(0,1,0),hh=new U(0,0,1),fh={type:"added"},t_={type:"removed"},_s={type:"childadded",child:null},Ga={type:"childremoved",child:null};class Ce extends Vs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:J0++}),this.uuid=Gs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ce.DEFAULT_UP.clone();const t=new U,e=new Gn,i=new Br,s=new U(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new fe},normalMatrix:{value:new qt}}),this.matrix=new fe,this.matrixWorld=new fe,this.matrixAutoUpdate=Ce.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return gs.setFromAxisAngle(t,e),this.quaternion.multiply(gs),this}rotateOnWorldAxis(t,e){return gs.setFromAxisAngle(t,e),this.quaternion.premultiply(gs),this}rotateX(t){return this.rotateOnAxis(ch,t)}rotateY(t){return this.rotateOnAxis(uh,t)}rotateZ(t){return this.rotateOnAxis(hh,t)}translateOnAxis(t,e){return lh.copy(t).applyQuaternion(this.quaternion),this.position.add(lh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ch,t)}translateY(t){return this.translateOnAxis(uh,t)}translateZ(t){return this.translateOnAxis(hh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(jn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?eo.copy(t):eo.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?jn.lookAt(Qs,eo,this.up):jn.lookAt(eo,Qs,this.up),this.quaternion.setFromRotationMatrix(jn),s&&(jn.extractRotation(s.matrixWorld),gs.setFromRotationMatrix(jn),this.quaternion.premultiply(gs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(fh),_s.child=t,this.dispatchEvent(_s),_s.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(t_),Ga.child=t,this.dispatchEvent(Ga),Ga.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),jn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),jn.multiply(t.parent.matrixWorld)),t.applyMatrix4(jn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(fh),_s.child=t,this.dispatchEvent(_s),_s.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,t,Z0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,Q0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Ce.DEFAULT_UP=new U(0,1,0);Ce.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Mn=new U,Jn=new U,Wa=new U,Zn=new U,vs=new U,xs=new U,dh=new U,Xa=new U,Ya=new U,qa=new U,$a=new le,Ka=new le,ja=new le;class bn{constructor(t=new U,e=new U,i=new U){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Mn.subVectors(t,e),s.cross(Mn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Mn.subVectors(s,e),Jn.subVectors(i,e),Wa.subVectors(t,e);const o=Mn.dot(Mn),a=Mn.dot(Jn),l=Mn.dot(Wa),c=Jn.dot(Jn),h=Jn.dot(Wa),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Zn)===null?!1:Zn.x>=0&&Zn.y>=0&&Zn.x+Zn.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,Zn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Zn.x),l.addScaledVector(o,Zn.y),l.addScaledVector(a,Zn.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return $a.setScalar(0),Ka.setScalar(0),ja.setScalar(0),$a.fromBufferAttribute(t,e),Ka.fromBufferAttribute(t,i),ja.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector($a,r.x),o.addScaledVector(Ka,r.y),o.addScaledVector(ja,r.z),o}static isFrontFacing(t,e,i,s){return Mn.subVectors(i,e),Jn.subVectors(t,e),Mn.cross(Jn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Mn.subVectors(this.c,this.b),Jn.subVectors(this.a,this.b),Mn.cross(Jn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return bn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return bn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return bn.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return bn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return bn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;vs.subVectors(s,i),xs.subVectors(r,i),Xa.subVectors(t,i);const l=vs.dot(Xa),c=xs.dot(Xa);if(l<=0&&c<=0)return e.copy(i);Ya.subVectors(t,s);const h=vs.dot(Ya),u=xs.dot(Ya);if(h>=0&&u<=h)return e.copy(s);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(i).addScaledVector(vs,o);qa.subVectors(t,r);const d=vs.dot(qa),g=xs.dot(qa);if(g>=0&&d<=g)return e.copy(r);const v=d*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(xs,a);const m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return dh.subVectors(r,s),a=(u-h)/(u-h+(d-g)),e.copy(s).addScaledVector(dh,a);const p=1/(m+v+f);return o=v*p,a=f*p,e.copy(i).addScaledVector(vs,o).addScaledVector(xs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Nd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_i={h:0,s:0,l:0},no={h:0,s:0,l:0};function Ja(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class jt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=je){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,re.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=re.workingColorSpace){return this.r=t,this.g=e,this.b=i,re.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=re.workingColorSpace){if(t=F0(t,1),e=Oe(e,0,1),i=Oe(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Ja(o,r,t+1/3),this.g=Ja(o,r,t),this.b=Ja(o,r,t-1/3)}return re.toWorkingColorSpace(this,s),this}setStyle(t,e=je){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=je){const i=Nd[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Is(t.r),this.g=Is(t.g),this.b=Is(t.b),this}copyLinearToSRGB(t){return this.r=Na(t.r),this.g=Na(t.g),this.b=Na(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=je){return re.fromWorkingColorSpace(Ue.copy(this),t),Math.round(Oe(Ue.r*255,0,255))*65536+Math.round(Oe(Ue.g*255,0,255))*256+Math.round(Oe(Ue.b*255,0,255))}getHexString(t=je){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=re.workingColorSpace){re.fromWorkingColorSpace(Ue.copy(this),e);const i=Ue.r,s=Ue.g,r=Ue.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=re.workingColorSpace){return re.fromWorkingColorSpace(Ue.copy(this),e),t.r=Ue.r,t.g=Ue.g,t.b=Ue.b,t}getStyle(t=je){re.fromWorkingColorSpace(Ue.copy(this),t);const e=Ue.r,i=Ue.g,s=Ue.b;return t!==je?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(_i),this.setHSL(_i.h+t,_i.s+e,_i.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(_i),t.getHSL(no);const i=Da(_i.h,no.h,e),s=Da(_i.s,no.s,e),r=Da(_i.l,no.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ue=new jt;jt.NAMES=Nd;let e_=0;class os extends Vs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:e_++}),this.uuid=Gs(),this.name="",this.type="Material",this.blending=Ps,this.side=Li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Tl,this.blendDst=Al,this.blendEquation=qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new jt(0,0,0),this.blendAlpha=0,this.depthFunc=Os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=us,this.stencilZFail=us,this.stencilZPass=us,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ps&&(i.blending=this.blending),this.side!==Li&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Tl&&(i.blendSrc=this.blendSrc),this.blendDst!==Al&&(i.blendDst=this.blendDst),this.blendEquation!==qi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Os&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Qu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==us&&(i.stencilFail=this.stencilFail),this.stencilZFail!==us&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==us&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Fn extends os{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.combine=_d,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const be=new U,io=new Tt;class ln{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=th,this.updateRanges=[],this.gpuType=oi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)io.fromBufferAttribute(this,e),io.applyMatrix3(t),this.setXY(e,io.x,io.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)be.fromBufferAttribute(this,e),be.applyMatrix3(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)be.fromBufferAttribute(this,e),be.applyMatrix4(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)be.fromBufferAttribute(this,e),be.applyNormalMatrix(t),this.setXYZ(e,be.x,be.y,be.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)be.fromBufferAttribute(this,e),be.transformDirection(t),this.setXYZ(e,be.x,be.y,be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Ks(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=$e(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ks(e,this.array)),e}setX(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ks(e,this.array)),e}setY(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ks(e,this.array)),e}setZ(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ks(e,this.array)),e}setW(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=$e(e,this.array),i=$e(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=$e(e,this.array),i=$e(i,this.array),s=$e(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=$e(e,this.array),i=$e(i,this.array),s=$e(s,this.array),r=$e(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==th&&(t.usage=this.usage),t}}class Od extends ln{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Fd extends ln{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class ye extends ln{constructor(t,e,i){super(new Float32Array(t),e,i)}}let n_=0;const fn=new fe,Za=new Ce,ys=new U,en=new kr,tr=new kr,Re=new U;class Xe extends Vs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:n_++}),this.uuid=Gs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Id(t)?Fd:Od)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new qt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return fn.makeRotationFromQuaternion(t),this.applyMatrix4(fn),this}rotateX(t){return fn.makeRotationX(t),this.applyMatrix4(fn),this}rotateY(t){return fn.makeRotationY(t),this.applyMatrix4(fn),this}rotateZ(t){return fn.makeRotationZ(t),this.applyMatrix4(fn),this}translate(t,e,i){return fn.makeTranslation(t,e,i),this.applyMatrix4(fn),this}scale(t,e,i){return fn.makeScale(t,e,i),this.applyMatrix4(fn),this}lookAt(t){return Za.lookAt(t),Za.updateMatrix(),this.applyMatrix4(Za.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ys).negate(),this.translate(ys.x,ys.y,ys.z),this}setFromPoints(t){const e=[];for(let i=0,s=t.length;i<s;i++){const r=t[i];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ye(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new kr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];en.setFromBufferAttribute(r),this.morphTargetsRelative?(Re.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(Re),Re.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(Re)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new aa);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){const i=this.boundingSphere.center;if(en.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];tr.setFromBufferAttribute(a),this.morphTargetsRelative?(Re.addVectors(en.min,tr.min),en.expandByPoint(Re),Re.addVectors(en.max,tr.max),en.expandByPoint(Re)):(en.expandByPoint(tr.min),en.expandByPoint(tr.max))}en.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Re.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Re));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Re.fromBufferAttribute(a,c),l&&(ys.fromBufferAttribute(t,c),Re.add(ys)),s=Math.max(s,i.distanceToSquared(Re))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ln(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let z=0;z<i.count;z++)a[z]=new U,l[z]=new U;const c=new U,h=new U,u=new U,f=new Tt,d=new Tt,g=new Tt,v=new U,m=new U;function p(z,ct,x){c.fromBufferAttribute(i,z),h.fromBufferAttribute(i,ct),u.fromBufferAttribute(i,x),f.fromBufferAttribute(r,z),d.fromBufferAttribute(r,ct),g.fromBufferAttribute(r,x),h.sub(c),u.sub(c),d.sub(f),g.sub(f);const w=1/(d.x*g.y-g.x*d.y);isFinite(w)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(w),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(w),a[z].add(v),a[ct].add(v),a[x].add(v),l[z].add(m),l[ct].add(m),l[x].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let z=0,ct=T.length;z<ct;++z){const x=T[z],w=x.start,K=x.count;for(let Y=w,Q=w+K;Y<Q;Y+=3)p(t.getX(Y+0),t.getX(Y+1),t.getX(Y+2))}const M=new U,E=new U,F=new U,I=new U;function R(z){F.fromBufferAttribute(s,z),I.copy(F);const ct=a[z];M.copy(ct),M.sub(F.multiplyScalar(F.dot(ct))).normalize(),E.crossVectors(I,ct);const w=E.dot(l[z])<0?-1:1;o.setXYZW(z,M.x,M.y,M.z,w)}for(let z=0,ct=T.length;z<ct;++z){const x=T[z],w=x.start,K=x.count;for(let Y=w,Q=w+K;Y<Q;Y+=3)R(t.getX(Y+0)),R(t.getX(Y+1)),R(t.getX(Y+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ln(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const s=new U,r=new U,o=new U,a=new U,l=new U,c=new U,h=new U,u=new U;if(t)for(let f=0,d=t.count;f<d;f+=3){const g=t.getX(f+0),v=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Re.fromBufferAttribute(t,e),Re.normalize(),t.setXYZ(e,Re.x,Re.y,Re.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h);let d=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?d=l[v]*a.data.stride+a.offset:d=l[v]*h;for(let p=0;p<h;p++)f[g++]=c[d++]}return new ln(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Xe,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,i);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const f=c[h],d=t(f,i);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ph=new fe,ki=new Wc,so=new aa,mh=new U,ro=new U,oo=new U,ao=new U,Qa=new U,lo=new U,gh=new U,co=new U;class me extends Ce{constructor(t=new Xe,e=new Fn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){lo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(Qa.fromBufferAttribute(u,t),o?lo.addScaledVector(Qa,h):lo.addScaledVector(Qa.sub(e),h))}e.add(lo)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),so.copy(i.boundingSphere),so.applyMatrix4(r),ki.copy(t.ray).recast(t.near),!(so.containsPoint(ki.origin)===!1&&(ki.intersectSphere(so,mh)===null||ki.origin.distanceToSquared(mh)>(t.far-t.near)**2))&&(ph.copy(r).invert(),ki.copy(t.ray).applyMatrix4(ph),!(i.boundingBox!==null&&ki.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,ki)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const m=f[g],p=o[m.materialIndex],T=Math.max(m.start,d.start),M=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let E=T,F=M;E<F;E+=3){const I=a.getX(E),R=a.getX(E+1),z=a.getX(E+2);s=uo(this,p,t,i,c,h,u,I,R,z),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),v=Math.min(a.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){const T=a.getX(m),M=a.getX(m+1),E=a.getX(m+2);s=uo(this,o,t,i,c,h,u,T,M,E),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const m=f[g],p=o[m.materialIndex],T=Math.max(m.start,d.start),M=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let E=T,F=M;E<F;E+=3){const I=E,R=E+1,z=E+2;s=uo(this,p,t,i,c,h,u,I,R,z),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){const T=m,M=m+1,E=m+2;s=uo(this,o,t,i,c,h,u,T,M,E),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function i_(n,t,e,i,s,r,o,a){let l;if(t.side===Je?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===Li,a),l===null)return null;co.copy(a),co.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(co);return c<e.near||c>e.far?null:{distance:c,point:co.clone(),object:n}}function uo(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,ro),n.getVertexPosition(l,oo),n.getVertexPosition(c,ao);const h=i_(n,t,e,i,ro,oo,ao,gh);if(h){const u=new U;bn.getBarycoord(gh,ro,oo,ao,u),s&&(h.uv=bn.getInterpolatedAttribute(s,a,l,c,u,new Tt)),r&&(h.uv1=bn.getInterpolatedAttribute(r,a,l,c,u,new Tt)),o&&(h.normal=bn.getInterpolatedAttribute(o,a,l,c,u,new U),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new U,materialIndex:0};bn.getNormal(ro,oo,ao,f.normal),h.face=f,h.barycoord=u}return h}class ui extends Xe{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let f=0,d=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ye(c,3)),this.setAttribute("normal",new ye(h,3)),this.setAttribute("uv",new ye(u,2));function g(v,m,p,T,M,E,F,I,R,z,ct){const x=E/R,w=F/z,K=E/2,Y=F/2,Q=I/2,lt=R+1,V=z+1;let it=0,H=0;const gt=new U;for(let ot=0;ot<V;ot++){const L=ot*w-Y;for(let It=0;It<lt;It++){const $t=It*x-K;gt[v]=$t*T,gt[m]=L*M,gt[p]=Q,c.push(gt.x,gt.y,gt.z),gt[v]=0,gt[m]=0,gt[p]=I>0?1:-1,h.push(gt.x,gt.y,gt.z),u.push(It/R),u.push(1-ot/z),it+=1}}for(let ot=0;ot<z;ot++)for(let L=0;L<R;L++){const It=f+L+lt*ot,$t=f+L+lt*(ot+1),D=f+(L+1)+lt*(ot+1),j=f+(L+1)+lt*ot;l.push(It,$t,j),l.push($t,D,j),H+=6}a.addGroup(d,H,ct),d+=H,f+=it}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ui(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Hs(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function ze(n){const t={};for(let e=0;e<n.length;e++){const i=Hs(n[e]);for(const s in i)t[s]=i[s]}return t}function s_(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Bd(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:re.workingColorSpace}const r_={clone:Hs,merge:ze};var o_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,a_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ii extends os{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=o_,this.fragmentShader=a_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Hs(t.uniforms),this.uniformsGroups=s_(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class kd extends Ce{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fe,this.projectionMatrix=new fe,this.projectionMatrixInverse=new fe,this.coordinateSystem=ai}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const vi=new U,_h=new Tt,vh=new Tt;class pn extends kd{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=hc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ia*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return hc*2*Math.atan(Math.tan(Ia*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(vi.x,vi.y).multiplyScalar(-t/vi.z),vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(vi.x,vi.y).multiplyScalar(-t/vi.z)}getViewSize(t,e){return this.getViewBounds(t,_h,vh),e.subVectors(vh,_h)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ia*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ms=-90,Ss=1;class l_ extends Ce{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new pn(Ms,Ss,t,e);s.layers=this.layers,this.add(s);const r=new pn(Ms,Ss,t,e);r.layers=this.layers,this.add(r);const o=new pn(Ms,Ss,t,e);o.layers=this.layers,this.add(o);const a=new pn(Ms,Ss,t,e);a.layers=this.layers,this.add(a);const l=new pn(Ms,Ss,t,e);l.layers=this.layers,this.add(l);const c=new pn(Ms,Ss,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===ai)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Xo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class zd extends We{constructor(t,e,i,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Fs,super(t,e,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class c_ extends is{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new zd(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:En}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ui(5,5,5),r=new Ii({name:"CubemapFromEquirect",uniforms:Hs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Je,blending:Ai});r.uniforms.tEquirect.value=e;const o=new me(s,r),a=e.minFilter;return e.minFilter===Zi&&(e.minFilter=En),new l_(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}const tl=new U,u_=new U,h_=new qt;class Mi{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=tl.subVectors(i,e).cross(u_.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(tl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||h_.getNormalMatrix(t),s=this.coplanarPoint(tl).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zi=new aa,ho=new U;class Yc{constructor(t=new Mi,e=new Mi,i=new Mi,s=new Mi,r=new Mi,o=new Mi){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=ai){const i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],d=s[8],g=s[9],v=s[10],m=s[11],p=s[12],T=s[13],M=s[14],E=s[15];if(i[0].setComponents(l-r,f-c,m-d,E-p).normalize(),i[1].setComponents(l+r,f+c,m+d,E+p).normalize(),i[2].setComponents(l+o,f+h,m+g,E+T).normalize(),i[3].setComponents(l-o,f-h,m-g,E-T).normalize(),i[4].setComponents(l-a,f-u,m-v,E-M).normalize(),e===ai)i[5].setComponents(l+a,f+u,m+v,E+M).normalize();else if(e===Xo)i[5].setComponents(a,u,v,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),zi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),zi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(zi)}intersectsSprite(t){return zi.center.set(0,0,0),zi.radius=.7071067811865476,zi.applyMatrix4(t.matrixWorld),this.intersectsSphere(zi)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(ho.x=s.normal.x>0?t.max.x:t.min.x,ho.y=s.normal.y>0?t.max.y:t.min.y,ho.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ho)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Hd(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function f_(n){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){const h=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){const g=u[f],v=u[d];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,u[f]=v)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){const v=u[d];n.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class as extends Xe{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=t/a,f=e/l,d=[],g=[],v=[],m=[];for(let p=0;p<h;p++){const T=p*f-o;for(let M=0;M<c;M++){const E=M*u-r;g.push(E,-T,0),v.push(0,0,1),m.push(M/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let T=0;T<a;T++){const M=T+c*p,E=T+c*(p+1),F=T+1+c*(p+1),I=T+1+c*p;d.push(M,E,I),d.push(E,F,I)}this.setIndex(d),this.setAttribute("position",new ye(g,3)),this.setAttribute("normal",new ye(v,3)),this.setAttribute("uv",new ye(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new as(t.width,t.height,t.widthSegments,t.heightSegments)}}var d_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,p_=`#ifdef USE_ALPHAHASH
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
#endif`,m_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,g_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,__=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,v_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,x_=`#ifdef USE_AOMAP
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
#endif`,y_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,M_=`#ifdef USE_BATCHING
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
#endif`,S_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,E_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,b_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,w_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,T_=`#ifdef USE_IRIDESCENCE
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
#endif`,A_=`#ifdef USE_BUMPMAP
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
#endif`,R_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,C_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,P_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,L_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,I_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,D_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,U_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,N_=`#if defined( USE_COLOR_ALPHA )
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
#endif`,O_=`#define PI 3.141592653589793
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
} // validated`,F_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,B_=`vec3 transformedNormal = objectNormal;
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
#endif`,k_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,z_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,H_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,V_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,G_="gl_FragColor = linearToOutputTexel( gl_FragColor );",W_=`
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
}`,X_=`#ifdef USE_ENVMAP
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
#endif`,Y_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,q_=`#ifdef USE_ENVMAP
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
#endif`,$_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,K_=`#ifdef USE_ENVMAP
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
#endif`,j_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,J_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Z_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Q_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tv=`#ifdef USE_GRADIENTMAP
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
}`,ev=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,iv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sv=`uniform bool receiveShadow;
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
#endif`,rv=`#ifdef USE_ENVMAP
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
#endif`,ov=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,av=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,uv=`PhysicalMaterial material;
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
#endif`,hv=`struct PhysicalMaterial {
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
}`,fv=`
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
#endif`,dv=`#if defined( RE_IndirectDiffuse )
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
#endif`,pv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mv=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gv=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_v=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vv=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Mv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Sv=`#if defined( USE_POINTS_UV )
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
#endif`,Ev=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Tv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Av=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rv=`#ifdef USE_MORPHTARGETS
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
#endif`,Cv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Lv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Iv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Uv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Nv=`#ifdef USE_NORMALMAP
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
#endif`,Ov=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Fv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Bv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Vv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Yv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$v=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Kv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Jv=`float getShadowMask() {
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
}`,Zv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qv=`#ifdef USE_SKINNING
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
#endif`,tx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ex=`#ifdef USE_SKINNING
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
#endif`,nx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ix=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ox=`#ifdef USE_TRANSMISSION
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
#endif`,ax=`#ifdef USE_TRANSMISSION
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
#endif`,lx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ux=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const fx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dx=`uniform sampler2D t2D;
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
}`,px=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,gx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_x=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vx=`#include <common>
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
}`,xx=`#if DEPTH_PACKING == 3200
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
}`,yx=`#define DISTANCE
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
}`,Mx=`#define DISTANCE
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
}`,Sx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ex=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bx=`uniform float scale;
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
}`,wx=`uniform vec3 diffuse;
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
}`,Tx=`#include <common>
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
}`,Ax=`uniform vec3 diffuse;
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
}`,Rx=`#define LAMBERT
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
}`,Cx=`#define LAMBERT
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
}`,Px=`#define MATCAP
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
}`,Lx=`#define MATCAP
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
}`,Ix=`#define NORMAL
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
}`,Dx=`#define NORMAL
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
}`,Ux=`#define PHONG
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
}`,Nx=`#define PHONG
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
}`,Ox=`#define STANDARD
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
}`,Fx=`#define STANDARD
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
}`,Bx=`#define TOON
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
}`,kx=`#define TOON
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
}`,zx=`uniform float size;
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
}`,Hx=`uniform vec3 diffuse;
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
}`,Vx=`#include <common>
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
}`,Gx=`uniform vec3 color;
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
}`,Wx=`uniform float rotation;
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
}`,Xx=`uniform vec3 diffuse;
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
}`,Yt={alphahash_fragment:d_,alphahash_pars_fragment:p_,alphamap_fragment:m_,alphamap_pars_fragment:g_,alphatest_fragment:__,alphatest_pars_fragment:v_,aomap_fragment:x_,aomap_pars_fragment:y_,batching_pars_vertex:M_,batching_vertex:S_,begin_vertex:E_,beginnormal_vertex:b_,bsdfs:w_,iridescence_fragment:T_,bumpmap_pars_fragment:A_,clipping_planes_fragment:R_,clipping_planes_pars_fragment:C_,clipping_planes_pars_vertex:P_,clipping_planes_vertex:L_,color_fragment:I_,color_pars_fragment:D_,color_pars_vertex:U_,color_vertex:N_,common:O_,cube_uv_reflection_fragment:F_,defaultnormal_vertex:B_,displacementmap_pars_vertex:k_,displacementmap_vertex:z_,emissivemap_fragment:H_,emissivemap_pars_fragment:V_,colorspace_fragment:G_,colorspace_pars_fragment:W_,envmap_fragment:X_,envmap_common_pars_fragment:Y_,envmap_pars_fragment:q_,envmap_pars_vertex:$_,envmap_physical_pars_fragment:rv,envmap_vertex:K_,fog_vertex:j_,fog_pars_vertex:J_,fog_fragment:Z_,fog_pars_fragment:Q_,gradientmap_pars_fragment:tv,lightmap_pars_fragment:ev,lights_lambert_fragment:nv,lights_lambert_pars_fragment:iv,lights_pars_begin:sv,lights_toon_fragment:ov,lights_toon_pars_fragment:av,lights_phong_fragment:lv,lights_phong_pars_fragment:cv,lights_physical_fragment:uv,lights_physical_pars_fragment:hv,lights_fragment_begin:fv,lights_fragment_maps:dv,lights_fragment_end:pv,logdepthbuf_fragment:mv,logdepthbuf_pars_fragment:gv,logdepthbuf_pars_vertex:_v,logdepthbuf_vertex:vv,map_fragment:xv,map_pars_fragment:yv,map_particle_fragment:Mv,map_particle_pars_fragment:Sv,metalnessmap_fragment:Ev,metalnessmap_pars_fragment:bv,morphinstance_vertex:wv,morphcolor_vertex:Tv,morphnormal_vertex:Av,morphtarget_pars_vertex:Rv,morphtarget_vertex:Cv,normal_fragment_begin:Pv,normal_fragment_maps:Lv,normal_pars_fragment:Iv,normal_pars_vertex:Dv,normal_vertex:Uv,normalmap_pars_fragment:Nv,clearcoat_normal_fragment_begin:Ov,clearcoat_normal_fragment_maps:Fv,clearcoat_pars_fragment:Bv,iridescence_pars_fragment:kv,opaque_fragment:zv,packing:Hv,premultiplied_alpha_fragment:Vv,project_vertex:Gv,dithering_fragment:Wv,dithering_pars_fragment:Xv,roughnessmap_fragment:Yv,roughnessmap_pars_fragment:qv,shadowmap_pars_fragment:$v,shadowmap_pars_vertex:Kv,shadowmap_vertex:jv,shadowmask_pars_fragment:Jv,skinbase_vertex:Zv,skinning_pars_vertex:Qv,skinning_vertex:tx,skinnormal_vertex:ex,specularmap_fragment:nx,specularmap_pars_fragment:ix,tonemapping_fragment:sx,tonemapping_pars_fragment:rx,transmission_fragment:ox,transmission_pars_fragment:ax,uv_pars_fragment:lx,uv_pars_vertex:cx,uv_vertex:ux,worldpos_vertex:hx,background_vert:fx,background_frag:dx,backgroundCube_vert:px,backgroundCube_frag:mx,cube_vert:gx,cube_frag:_x,depth_vert:vx,depth_frag:xx,distanceRGBA_vert:yx,distanceRGBA_frag:Mx,equirect_vert:Sx,equirect_frag:Ex,linedashed_vert:bx,linedashed_frag:wx,meshbasic_vert:Tx,meshbasic_frag:Ax,meshlambert_vert:Rx,meshlambert_frag:Cx,meshmatcap_vert:Px,meshmatcap_frag:Lx,meshnormal_vert:Ix,meshnormal_frag:Dx,meshphong_vert:Ux,meshphong_frag:Nx,meshphysical_vert:Ox,meshphysical_frag:Fx,meshtoon_vert:Bx,meshtoon_frag:kx,points_vert:zx,points_frag:Hx,shadow_vert:Vx,shadow_frag:Gx,sprite_vert:Wx,sprite_frag:Xx},yt={common:{diffuse:{value:new jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},envMapRotation:{value:new qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new Tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new jt(16777215)},opacity:{value:1},center:{value:new Tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},Un={basic:{uniforms:ze([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:ze([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new jt(0)}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:ze([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new jt(0)},specular:{value:new jt(1118481)},shininess:{value:30}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:ze([yt.common,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.roughnessmap,yt.metalnessmap,yt.fog,yt.lights,{emissive:{value:new jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:ze([yt.common,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.gradientmap,yt.fog,yt.lights,{emissive:{value:new jt(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:ze([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:ze([yt.points,yt.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:ze([yt.common,yt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:ze([yt.common,yt.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:ze([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:ze([yt.sprite,yt.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qt}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distanceRGBA:{uniforms:ze([yt.common,yt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distanceRGBA_vert,fragmentShader:Yt.distanceRGBA_frag},shadow:{uniforms:ze([yt.lights,yt.fog,{color:{value:new jt(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};Un.physical={uniforms:ze([Un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new Tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new Tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new jt(0)},specularColor:{value:new jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new Tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};const fo={r:0,b:0,g:0},Hi=new Gn,Yx=new fe;function qx(n,t,e,i,s,r,o){const a=new jt(0);let l=r===!0?0:1,c,h,u=null,f=0,d=null;function g(T){let M=T.isScene===!0?T.background:null;return M&&M.isTexture&&(M=(T.backgroundBlurriness>0?e:t).get(M)),M}function v(T){let M=!1;const E=g(T);E===null?p(a,l):E&&E.isColor&&(p(E,1),M=!0);const F=n.xr.getEnvironmentBlendMode();F==="additive"?i.buffers.color.setClear(0,0,0,1,o):F==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(T,M){const E=g(M);E&&(E.isCubeTexture||E.mapping===ra)?(h===void 0&&(h=new me(new ui(1,1,1),new Ii({name:"BackgroundCubeMaterial",uniforms:Hs(Un.backgroundCube.uniforms),vertexShader:Un.backgroundCube.vertexShader,fragmentShader:Un.backgroundCube.fragmentShader,side:Je,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(F,I,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Hi.copy(M.backgroundRotation),Hi.x*=-1,Hi.y*=-1,Hi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Hi.y*=-1,Hi.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Yx.makeRotationFromEuler(Hi)),h.material.toneMapped=re.getTransfer(E.colorSpace)!==pe,(u!==E||f!==E.version||d!==n.toneMapping)&&(h.material.needsUpdate=!0,u=E,f=E.version,d=n.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new me(new as(2,2),new Ii({name:"BackgroundMaterial",uniforms:Hs(Un.background.uniforms),vertexShader:Un.background.vertexShader,fragmentShader:Un.background.fragmentShader,side:Li,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=re.getTransfer(E.colorSpace)!==pe,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||f!==E.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,u=E,f=E.version,d=n.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function p(T,M){T.getRGB(fo,Bd(n)),i.buffers.color.setClear(fo.r,fo.g,fo.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(T,M=1){a.set(T),l=M,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,p(a,l)},render:v,addToRenderList:m}}function $x(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(x,w,K,Y,Q){let lt=!1;const V=u(Y,K,w);r!==V&&(r=V,c(r.object)),lt=d(x,Y,K,Q),lt&&g(x,Y,K,Q),Q!==null&&t.update(Q,n.ELEMENT_ARRAY_BUFFER),(lt||o)&&(o=!1,E(x,w,K,Y),Q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(Q).buffer))}function l(){return n.createVertexArray()}function c(x){return n.bindVertexArray(x)}function h(x){return n.deleteVertexArray(x)}function u(x,w,K){const Y=K.wireframe===!0;let Q=i[x.id];Q===void 0&&(Q={},i[x.id]=Q);let lt=Q[w.id];lt===void 0&&(lt={},Q[w.id]=lt);let V=lt[Y];return V===void 0&&(V=f(l()),lt[Y]=V),V}function f(x){const w=[],K=[],Y=[];for(let Q=0;Q<e;Q++)w[Q]=0,K[Q]=0,Y[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:K,attributeDivisors:Y,object:x,attributes:{},index:null}}function d(x,w,K,Y){const Q=r.attributes,lt=w.attributes;let V=0;const it=K.getAttributes();for(const H in it)if(it[H].location>=0){const ot=Q[H];let L=lt[H];if(L===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(L=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(L=x.instanceColor)),ot===void 0||ot.attribute!==L||L&&ot.data!==L.data)return!0;V++}return r.attributesNum!==V||r.index!==Y}function g(x,w,K,Y){const Q={},lt=w.attributes;let V=0;const it=K.getAttributes();for(const H in it)if(it[H].location>=0){let ot=lt[H];ot===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(ot=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(ot=x.instanceColor));const L={};L.attribute=ot,ot&&ot.data&&(L.data=ot.data),Q[H]=L,V++}r.attributes=Q,r.attributesNum=V,r.index=Y}function v(){const x=r.newAttributes;for(let w=0,K=x.length;w<K;w++)x[w]=0}function m(x){p(x,0)}function p(x,w){const K=r.newAttributes,Y=r.enabledAttributes,Q=r.attributeDivisors;K[x]=1,Y[x]===0&&(n.enableVertexAttribArray(x),Y[x]=1),Q[x]!==w&&(n.vertexAttribDivisor(x,w),Q[x]=w)}function T(){const x=r.newAttributes,w=r.enabledAttributes;for(let K=0,Y=w.length;K<Y;K++)w[K]!==x[K]&&(n.disableVertexAttribArray(K),w[K]=0)}function M(x,w,K,Y,Q,lt,V){V===!0?n.vertexAttribIPointer(x,w,K,Q,lt):n.vertexAttribPointer(x,w,K,Y,Q,lt)}function E(x,w,K,Y){v();const Q=Y.attributes,lt=K.getAttributes(),V=w.defaultAttributeValues;for(const it in lt){const H=lt[it];if(H.location>=0){let gt=Q[it];if(gt===void 0&&(it==="instanceMatrix"&&x.instanceMatrix&&(gt=x.instanceMatrix),it==="instanceColor"&&x.instanceColor&&(gt=x.instanceColor)),gt!==void 0){const ot=gt.normalized,L=gt.itemSize,It=t.get(gt);if(It===void 0)continue;const $t=It.buffer,D=It.type,j=It.bytesPerElement,vt=D===n.INT||D===n.UNSIGNED_INT||gt.gpuType===Fc;if(gt.isInterleavedBufferAttribute){const xt=gt.data,zt=xt.stride,Dt=gt.offset;if(xt.isInstancedInterleavedBuffer){for(let Jt=0;Jt<H.locationSize;Jt++)p(H.location+Jt,xt.meshPerAttribute);x.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let Jt=0;Jt<H.locationSize;Jt++)m(H.location+Jt);n.bindBuffer(n.ARRAY_BUFFER,$t);for(let Jt=0;Jt<H.locationSize;Jt++)M(H.location+Jt,L/H.locationSize,D,ot,zt*j,(Dt+L/H.locationSize*Jt)*j,vt)}else{if(gt.isInstancedBufferAttribute){for(let xt=0;xt<H.locationSize;xt++)p(H.location+xt,gt.meshPerAttribute);x.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let xt=0;xt<H.locationSize;xt++)m(H.location+xt);n.bindBuffer(n.ARRAY_BUFFER,$t);for(let xt=0;xt<H.locationSize;xt++)M(H.location+xt,L/H.locationSize,D,ot,L*j,L/H.locationSize*xt*j,vt)}}else if(V!==void 0){const ot=V[it];if(ot!==void 0)switch(ot.length){case 2:n.vertexAttrib2fv(H.location,ot);break;case 3:n.vertexAttrib3fv(H.location,ot);break;case 4:n.vertexAttrib4fv(H.location,ot);break;default:n.vertexAttrib1fv(H.location,ot)}}}}T()}function F(){z();for(const x in i){const w=i[x];for(const K in w){const Y=w[K];for(const Q in Y)h(Y[Q].object),delete Y[Q];delete w[K]}delete i[x]}}function I(x){if(i[x.id]===void 0)return;const w=i[x.id];for(const K in w){const Y=w[K];for(const Q in Y)h(Y[Q].object),delete Y[Q];delete w[K]}delete i[x.id]}function R(x){for(const w in i){const K=i[w];if(K[x.id]===void 0)continue;const Y=K[x.id];for(const Q in Y)h(Y[Q].object),delete Y[Q];delete K[x.id]}}function z(){ct(),o=!0,r!==s&&(r=s,c(r.object))}function ct(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:z,resetDefaultState:ct,dispose:F,releaseStatesOfGeometry:I,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:m,disableUnusedAttributes:T}}function Kx(n,t,e){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),e.update(h,i,1)}function o(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),e.update(h,i,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];e.update(d,i,1)}function l(c,h,u,f){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v];for(let v=0;v<f.length;v++)e.update(g,i,f[v])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function jx(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==wn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const z=R===Fr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==ci&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==oi&&!z)}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(f===!0){const R=t.get("EXT_clip_control");R.clipControlEXT(R.LOWER_LEFT_EXT,R.ZERO_TO_ONE_EXT)}const d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),F=g>0,I=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:T,maxVaryings:M,maxFragmentUniforms:E,vertexTextures:F,maxSamples:I}}function Jx(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new Mi,a=new qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||i!==0||s;return s=f,i=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=n.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const T=r?0:i,M=T*4;let E=p.clippingState||null;l.value=E,E=h(g,f,M,d);for(let F=0;F!==M;++F)E[F]=e[F];p.clippingState=E,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,f,d,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=d+v*4,T=f.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,E=d;M!==v;++M,E+=4)o.copy(u[M]).applyMatrix4(T,a),o.normal.toArray(m,E),m[E+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function Zx(n){let t=new WeakMap;function e(o,a){return a===Nl?o.mapping=Fs:a===Ol&&(o.mapping=Bs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Nl||a===Ol)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new c_(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class qc extends kd{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ts=4,xh=[.125,.215,.35,.446,.526,.582],$i=20,el=new qc,yh=new jt;let nl=null,il=0,sl=0,rl=!1;const Wi=(1+Math.sqrt(5))/2,Es=1/Wi,Mh=[new U(-Wi,Es,0),new U(Wi,Es,0),new U(-Es,0,Wi),new U(Es,0,Wi),new U(0,Wi,-Es),new U(0,Wi,Es),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)];class Sh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){nl=this._renderer.getRenderTarget(),il=this._renderer.getActiveCubeFace(),sl=this._renderer.getActiveMipmapLevel(),rl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(nl,il,sl),this._renderer.xr.enabled=rl,t.scissorTest=!1,po(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Fs||t.mapping===Bs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),nl=this._renderer.getRenderTarget(),il=this._renderer.getActiveCubeFace(),sl=this._renderer.getActiveMipmapLevel(),rl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:En,minFilter:En,generateMipmaps:!1,type:Fr,format:wn,colorSpace:Di,depthBuffer:!1},s=Eh(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Eh(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Qx(r)),this._blurMaterial=ty(r,t,e)}return s}_compileMaterial(t){const e=new me(this._lodPlanes[0],t);this._renderer.compile(e,el)}_sceneToCubeUV(t,e,i,s){const a=new pn(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(yh),h.toneMapping=Ri,h.autoClear=!1;const d=new Fn({name:"PMREM.Background",side:Je,depthWrite:!1,depthTest:!1}),g=new me(new ui,d);let v=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,v=!0):(d.color.copy(yh),v=!0);for(let p=0;p<6;p++){const T=p%3;T===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):T===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const M=this._cubeSize;po(s,T*M,p>2?M:0,M,M),h.setRenderTarget(s),v&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===Fs||t.mapping===Bs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=wh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new me(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;po(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,el)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Mh[(s-r-1)%Mh.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new me(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*$i-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):$i;m>$i&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${$i}`);const p=[];let T=0;for(let R=0;R<$i;++R){const z=R/v,ct=Math.exp(-z*z/2);p.push(ct),R===0?T+=ct:R<m&&(T+=2*ct)}for(let R=0;R<p.length;R++)p[R]=p[R]/T;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:M}=this;f.dTheta.value=g,f.mipInt.value=M-i;const E=this._sizeLods[s],F=3*E*(s>M-Ts?s-M+Ts:0),I=4*(this._cubeSize-E);po(e,F,I,3*E,2*E),l.setRenderTarget(e),l.render(u,el)}}function Qx(n){const t=[],e=[],i=[];let s=n;const r=n-Ts+1+xh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>n-Ts?l=xh[o-n+Ts-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,v=3,m=2,p=1,T=new Float32Array(v*g*d),M=new Float32Array(m*g*d),E=new Float32Array(p*g*d);for(let I=0;I<d;I++){const R=I%3*2/3-1,z=I>2?0:-1,ct=[R,z,0,R+2/3,z,0,R+2/3,z+1,0,R,z,0,R+2/3,z+1,0,R,z+1,0];T.set(ct,v*g*I),M.set(f,m*g*I);const x=[I,I,I,I,I,I];E.set(x,p*g*I)}const F=new Xe;F.setAttribute("position",new ln(T,v)),F.setAttribute("uv",new ln(M,m)),F.setAttribute("faceIndex",new ln(E,p)),t.push(F),s>Ts&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Eh(n,t,e){const i=new is(n,t,e);return i.texture.mapping=ra,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function po(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function ty(n,t,e){const i=new Float32Array($i),s=new U(0,1,0);return new Ii({name:"SphericalGaussianBlur",defines:{n:$i,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:$c(),fragmentShader:`

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
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function bh(){return new Ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$c(),fragmentShader:`

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
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function wh(){return new Ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$c(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function $c(){return`

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
	`}function ey(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Nl||l===Ol,h=l===Fs||l===Bs;if(c||h){let u=t.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Sh(n)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const d=a.image;return c&&d&&d.height>0||h&&d&&s(d)?(e===null&&(e=new Sh(n)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function ny(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&Co("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function iy(n,t,e,i){const s={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const v=f.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)t.remove(v[m])}f.removeEventListener("dispose",o),delete s[f.id];const d=r.get(f);d&&(t.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(u){const f=u.attributes;for(const g in f)t.update(f[g],n.ARRAY_BUFFER);const d=u.morphAttributes;for(const g in d){const v=d[g];for(let m=0,p=v.length;m<p;m++)t.update(v[m],n.ARRAY_BUFFER)}}function c(u){const f=[],d=u.index,g=u.attributes.position;let v=0;if(d!==null){const T=d.array;v=d.version;for(let M=0,E=T.length;M<E;M+=3){const F=T[M+0],I=T[M+1],R=T[M+2];f.push(F,I,I,R,R,F)}}else if(g!==void 0){const T=g.array;v=g.version;for(let M=0,E=T.length/3-1;M<E;M+=3){const F=M+0,I=M+1,R=M+2;f.push(F,I,I,R,R,F)}}else return;const m=new(Id(f)?Fd:Od)(f,1);m.version=v;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function sy(n,t,e){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){n.drawElements(i,d,r,f*o),e.update(d,i,1)}function c(f,d,g){g!==0&&(n.drawElementsInstanced(i,d,r,f*o,g),e.update(d,i,g))}function h(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,i,1)}function u(f,d,g,v){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,r,f,0,v,0,g);let p=0;for(let T=0;T<g;T++)p+=d[T];for(let T=0;T<v.length;T++)e.update(p,i,v[T])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function ry(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function oy(n,t,e){const i=new WeakMap,s=new le;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=i.get(a);if(f===void 0||f.count!==u){let ct=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",ct)};f!==void 0&&f.texture.dispose();const d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],T=a.morphAttributes.color||[];let M=0;d===!0&&(M=1),g===!0&&(M=2),v===!0&&(M=3);let E=a.attributes.position.count*M,F=1;E>t.maxTextureSize&&(F=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);const I=new Float32Array(E*F*4*u),R=new Ud(I,E,F,u);R.type=oi,R.needsUpdate=!0;const z=M*4;for(let x=0;x<u;x++){const w=m[x],K=p[x],Y=T[x],Q=E*F*4*x;for(let lt=0;lt<w.count;lt++){const V=lt*z;d===!0&&(s.fromBufferAttribute(w,lt),I[Q+V+0]=s.x,I[Q+V+1]=s.y,I[Q+V+2]=s.z,I[Q+V+3]=0),g===!0&&(s.fromBufferAttribute(K,lt),I[Q+V+4]=s.x,I[Q+V+5]=s.y,I[Q+V+6]=s.z,I[Q+V+7]=0),v===!0&&(s.fromBufferAttribute(Y,lt),I[Q+V+8]=s.x,I[Q+V+9]=s.y,I[Q+V+10]=s.z,I[Q+V+11]=Y.itemSize===4?s.w:1)}}f={count:u,texture:R,size:new Tt(E,F)},i.set(a,f),a.addEventListener("dispose",ct)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let d=0;for(let v=0;v<c.length;v++)d+=c[v];const g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function ay(n,t,e,i){let s=new WeakMap;function r(l){const c=i.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class Vd extends We{constructor(t,e,i,s,r,o,a,l,c,h=Ls){if(h!==Ls&&h!==zs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Ls&&(i=ns),i===void 0&&h===zs&&(i=ks),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ge,this.minFilter=l!==void 0?l:Ge,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Gd=new We,Th=new Vd(1,1),Wd=new Ud,Xd=new q0,Yd=new zd,Ah=[],Rh=[],Ch=new Float32Array(16),Ph=new Float32Array(9),Lh=new Float32Array(4);function Ws(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=Ah[s];if(r===void 0&&(r=new Float32Array(s),Ah[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Te(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ae(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function la(n,t){let e=Rh[t];e===void 0&&(e=new Int32Array(t),Rh[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function ly(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function cy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;n.uniform2fv(this.addr,t),Ae(e,t)}}function uy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Te(e,t))return;n.uniform3fv(this.addr,t),Ae(e,t)}}function hy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;n.uniform4fv(this.addr,t),Ae(e,t)}}function fy(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Te(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ae(e,t)}else{if(Te(e,i))return;Lh.set(i),n.uniformMatrix2fv(this.addr,!1,Lh),Ae(e,i)}}function dy(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Te(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ae(e,t)}else{if(Te(e,i))return;Ph.set(i),n.uniformMatrix3fv(this.addr,!1,Ph),Ae(e,i)}}function py(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Te(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ae(e,t)}else{if(Te(e,i))return;Ch.set(i),n.uniformMatrix4fv(this.addr,!1,Ch),Ae(e,i)}}function my(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function gy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;n.uniform2iv(this.addr,t),Ae(e,t)}}function _y(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Te(e,t))return;n.uniform3iv(this.addr,t),Ae(e,t)}}function vy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;n.uniform4iv(this.addr,t),Ae(e,t)}}function xy(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function yy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;n.uniform2uiv(this.addr,t),Ae(e,t)}}function My(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Te(e,t))return;n.uniform3uiv(this.addr,t),Ae(e,t)}}function Sy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;n.uniform4uiv(this.addr,t),Ae(e,t)}}function Ey(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Th.compareFunction=Ld,r=Th):r=Gd,e.setTexture2D(t||r,s)}function by(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Xd,s)}function wy(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Yd,s)}function Ty(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Wd,s)}function Ay(n){switch(n){case 5126:return ly;case 35664:return cy;case 35665:return uy;case 35666:return hy;case 35674:return fy;case 35675:return dy;case 35676:return py;case 5124:case 35670:return my;case 35667:case 35671:return gy;case 35668:case 35672:return _y;case 35669:case 35673:return vy;case 5125:return xy;case 36294:return yy;case 36295:return My;case 36296:return Sy;case 35678:case 36198:case 36298:case 36306:case 35682:return Ey;case 35679:case 36299:case 36307:return by;case 35680:case 36300:case 36308:case 36293:return wy;case 36289:case 36303:case 36311:case 36292:return Ty}}function Ry(n,t){n.uniform1fv(this.addr,t)}function Cy(n,t){const e=Ws(t,this.size,2);n.uniform2fv(this.addr,e)}function Py(n,t){const e=Ws(t,this.size,3);n.uniform3fv(this.addr,e)}function Ly(n,t){const e=Ws(t,this.size,4);n.uniform4fv(this.addr,e)}function Iy(n,t){const e=Ws(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Dy(n,t){const e=Ws(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Uy(n,t){const e=Ws(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Ny(n,t){n.uniform1iv(this.addr,t)}function Oy(n,t){n.uniform2iv(this.addr,t)}function Fy(n,t){n.uniform3iv(this.addr,t)}function By(n,t){n.uniform4iv(this.addr,t)}function ky(n,t){n.uniform1uiv(this.addr,t)}function zy(n,t){n.uniform2uiv(this.addr,t)}function Hy(n,t){n.uniform3uiv(this.addr,t)}function Vy(n,t){n.uniform4uiv(this.addr,t)}function Gy(n,t,e){const i=this.cache,s=t.length,r=la(e,s);Te(i,r)||(n.uniform1iv(this.addr,r),Ae(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Gd,r[o])}function Wy(n,t,e){const i=this.cache,s=t.length,r=la(e,s);Te(i,r)||(n.uniform1iv(this.addr,r),Ae(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Xd,r[o])}function Xy(n,t,e){const i=this.cache,s=t.length,r=la(e,s);Te(i,r)||(n.uniform1iv(this.addr,r),Ae(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Yd,r[o])}function Yy(n,t,e){const i=this.cache,s=t.length,r=la(e,s);Te(i,r)||(n.uniform1iv(this.addr,r),Ae(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Wd,r[o])}function qy(n){switch(n){case 5126:return Ry;case 35664:return Cy;case 35665:return Py;case 35666:return Ly;case 35674:return Iy;case 35675:return Dy;case 35676:return Uy;case 5124:case 35670:return Ny;case 35667:case 35671:return Oy;case 35668:case 35672:return Fy;case 35669:case 35673:return By;case 5125:return ky;case 36294:return zy;case 36295:return Hy;case 36296:return Vy;case 35678:case 36198:case 36298:case 36306:case 35682:return Gy;case 35679:case 36299:case 36307:return Wy;case 35680:case 36300:case 36308:case 36293:return Xy;case 36289:case 36303:case 36311:case 36292:return Yy}}class $y{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Ay(e.type)}}class Ky{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=qy(e.type)}}class jy{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const ol=/(\w+)(\])?(\[|\.)?/g;function Ih(n,t){n.seq.push(t),n.map[t.id]=t}function Jy(n,t,e){const i=n.name,s=i.length;for(ol.lastIndex=0;;){const r=ol.exec(i),o=ol.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Ih(e,c===void 0?new $y(a,n,t):new Ky(a,n,t));break}else{let u=e.map[a];u===void 0&&(u=new jy(a),Ih(e,u)),e=u}}}class Po{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Jy(r,o,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function Dh(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const Zy=37297;let Qy=0;function tM(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}function eM(n){const t=re.getPrimaries(re.workingColorSpace),e=re.getPrimaries(n);let i;switch(t===e?i="":t===Wo&&e===Go?i="LinearDisplayP3ToLinearSRGB":t===Go&&e===Wo&&(i="LinearSRGBToLinearDisplayP3"),n){case Di:case oa:return[i,"LinearTransferOETF"];case je:case Gc:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Uh(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+tM(n.getShaderSource(t),o)}else return s}function nM(n,t){const e=eM(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function iM(n,t){let e;switch(t){case y0:e="Linear";break;case M0:e="Reinhard";break;case S0:e="Cineon";break;case vd:e="ACESFilmic";break;case b0:e="AgX";break;case w0:e="Neutral";break;case E0:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const mo=new U;function sM(){re.getLuminanceCoefficients(mo);const n=mo.x.toFixed(4),t=mo.y.toFixed(4),e=mo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function rM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(sr).join(`
`)}function oM(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function aM(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function sr(n){return n!==""}function Nh(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Oh(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const lM=/^[ \t]*#include +<([\w\d./]+)>/gm;function fc(n){return n.replace(lM,uM)}const cM=new Map;function uM(n,t){let e=Yt[t];if(e===void 0){const i=cM.get(t);if(i!==void 0)e=Yt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return fc(e)}const hM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fh(n){return n.replace(hM,fM)}function fM(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Bh(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function dM(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Oc?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Qg?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Qn&&(t="SHADOWMAP_TYPE_VSM"),t}function pM(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Fs:case Bs:t="ENVMAP_TYPE_CUBE";break;case ra:t="ENVMAP_TYPE_CUBE_UV";break}return t}function mM(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Bs:t="ENVMAP_MODE_REFRACTION";break}return t}function gM(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case _d:t="ENVMAP_BLENDING_MULTIPLY";break;case v0:t="ENVMAP_BLENDING_MIX";break;case x0:t="ENVMAP_BLENDING_ADD";break}return t}function _M(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function vM(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=dM(e),c=pM(e),h=mM(e),u=gM(e),f=_M(e),d=rM(e),g=oM(r),v=s.createProgram();let m,p,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(sr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(sr).join(`
`),p.length>0&&(p+=`
`)):(m=[Bh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sr).join(`
`),p=[Bh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ri?"#define TONE_MAPPING":"",e.toneMapping!==Ri?Yt.tonemapping_pars_fragment:"",e.toneMapping!==Ri?iM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,nM("linearToOutputTexel",e.outputColorSpace),sM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(sr).join(`
`)),o=fc(o),o=Nh(o,e),o=Oh(o,e),a=fc(a),a=Nh(a,e),a=Oh(a,e),o=Fh(o),a=Fh(a),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===eh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===eh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=T+m+o,E=T+p+a,F=Dh(s,s.VERTEX_SHADER,M),I=Dh(s,s.FRAGMENT_SHADER,E);s.attachShader(v,F),s.attachShader(v,I),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function R(w){if(n.debug.checkShaderErrors){const K=s.getProgramInfoLog(v).trim(),Y=s.getShaderInfoLog(F).trim(),Q=s.getShaderInfoLog(I).trim();let lt=!0,V=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(lt=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,F,I);else{const it=Uh(s,F,"vertex"),H=Uh(s,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+K+`
`+it+`
`+H)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(Y===""||Q==="")&&(V=!1);V&&(w.diagnostics={runnable:lt,programLog:K,vertexShader:{log:Y,prefix:m},fragmentShader:{log:Q,prefix:p}})}s.deleteShader(F),s.deleteShader(I),z=new Po(s,v),ct=aM(s,v)}let z;this.getUniforms=function(){return z===void 0&&R(this),z};let ct;this.getAttributes=function(){return ct===void 0&&R(this),ct};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(v,Zy)),x},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Qy++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=F,this.fragmentShader=I,this}let xM=0;class yM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new MM(t),e.set(t,i)),i}}class MM{constructor(t){this.id=xM++,this.code=t,this.usedTimes=0}}function SM(n,t,e,i,s,r,o){const a=new Xc,l=new yM,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.reverseDepthBuffer,d=s.vertexTextures;let g=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return c.add(x),x===0?"uv":`uv${x}`}function p(x,w,K,Y,Q){const lt=Y.fog,V=Q.geometry,it=x.isMeshStandardMaterial?Y.environment:null,H=(x.isMeshStandardMaterial?e:t).get(x.envMap||it),gt=H&&H.mapping===ra?H.image.height:null,ot=v[x.type];x.precision!==null&&(g=s.getMaxPrecision(x.precision),g!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",g,"instead."));const L=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,It=L!==void 0?L.length:0;let $t=0;V.morphAttributes.position!==void 0&&($t=1),V.morphAttributes.normal!==void 0&&($t=2),V.morphAttributes.color!==void 0&&($t=3);let D,j,vt,xt;if(ot){const qe=Un[ot];D=qe.vertexShader,j=qe.fragmentShader}else D=x.vertexShader,j=x.fragmentShader,l.update(x),vt=l.getVertexShaderID(x),xt=l.getFragmentShaderID(x);const zt=n.getRenderTarget(),Dt=Q.isInstancedMesh===!0,Jt=Q.isBatchedMesh===!0,A=!!x.map,C=!!x.matcap,S=!!H,st=!!x.aoMap,q=!!x.lightMap,Z=!!x.bumpMap,nt=!!x.normalMap,rt=!!x.displacementMap,tt=!!x.emissiveMap,y=!!x.metalnessMap,_=!!x.roughnessMap,P=x.anisotropy>0,k=x.clearcoat>0,J=x.dispersion>0,X=x.iridescence>0,dt=x.sheen>0,ut=x.transmission>0,ft=P&&!!x.anisotropyMap,Ut=k&&!!x.clearcoatMap,ht=k&&!!x.clearcoatNormalMap,Mt=k&&!!x.clearcoatRoughnessMap,Pt=X&&!!x.iridescenceMap,Ot=X&&!!x.iridescenceThicknessMap,_t=dt&&!!x.sheenColorMap,Ht=dt&&!!x.sheenRoughnessMap,Vt=!!x.specularMap,oe=!!x.specularColorMap,N=!!x.specularIntensityMap,bt=ut&&!!x.transmissionMap,et=ut&&!!x.thicknessMap,at=!!x.gradientMap,St=!!x.alphaMap,wt=x.alphaTest>0,Zt=!!x.alphaHash,Ee=!!x.extensions;let Ye=Ri;x.toneMapped&&(zt===null||zt.isXRRenderTarget===!0)&&(Ye=n.toneMapping);const Qt={shaderID:ot,shaderType:x.type,shaderName:x.name,vertexShader:D,fragmentShader:j,defines:x.defines,customVertexShaderID:vt,customFragmentShaderID:xt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:g,batching:Jt,batchingColor:Jt&&Q._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&Q.instanceColor!==null,instancingMorph:Dt&&Q.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:zt===null?n.outputColorSpace:zt.isXRRenderTarget===!0?zt.texture.colorSpace:Di,alphaToCoverage:!!x.alphaToCoverage,map:A,matcap:C,envMap:S,envMapMode:S&&H.mapping,envMapCubeUVHeight:gt,aoMap:st,lightMap:q,bumpMap:Z,normalMap:nt,displacementMap:d&&rt,emissiveMap:tt,normalMapObjectSpace:nt&&x.normalMapType===C0,normalMapTangentSpace:nt&&x.normalMapType===Pd,metalnessMap:y,roughnessMap:_,anisotropy:P,anisotropyMap:ft,clearcoat:k,clearcoatMap:Ut,clearcoatNormalMap:ht,clearcoatRoughnessMap:Mt,dispersion:J,iridescence:X,iridescenceMap:Pt,iridescenceThicknessMap:Ot,sheen:dt,sheenColorMap:_t,sheenRoughnessMap:Ht,specularMap:Vt,specularColorMap:oe,specularIntensityMap:N,transmission:ut,transmissionMap:bt,thicknessMap:et,gradientMap:at,opaque:x.transparent===!1&&x.blending===Ps&&x.alphaToCoverage===!1,alphaMap:St,alphaTest:wt,alphaHash:Zt,combine:x.combine,mapUv:A&&m(x.map.channel),aoMapUv:st&&m(x.aoMap.channel),lightMapUv:q&&m(x.lightMap.channel),bumpMapUv:Z&&m(x.bumpMap.channel),normalMapUv:nt&&m(x.normalMap.channel),displacementMapUv:rt&&m(x.displacementMap.channel),emissiveMapUv:tt&&m(x.emissiveMap.channel),metalnessMapUv:y&&m(x.metalnessMap.channel),roughnessMapUv:_&&m(x.roughnessMap.channel),anisotropyMapUv:ft&&m(x.anisotropyMap.channel),clearcoatMapUv:Ut&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:ht&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Mt&&m(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Pt&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:Ot&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:_t&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:Ht&&m(x.sheenRoughnessMap.channel),specularMapUv:Vt&&m(x.specularMap.channel),specularColorMapUv:oe&&m(x.specularColorMap.channel),specularIntensityMapUv:N&&m(x.specularIntensityMap.channel),transmissionMapUv:bt&&m(x.transmissionMap.channel),thicknessMapUv:et&&m(x.thicknessMap.channel),alphaMapUv:St&&m(x.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(nt||P),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!V.attributes.uv&&(A||St),fog:!!lt,useFog:x.fog===!0,fogExp2:!!lt&&lt.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:f,skinning:Q.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:It,morphTextureStride:$t,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&K.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ye,decodeVideoTexture:A&&x.map.isVideoTexture===!0&&re.getTransfer(x.map.colorSpace)===pe,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===rn,flipSided:x.side===Je,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Ee&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ee&&x.extensions.multiDraw===!0||Jt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Qt.vertexUv1s=c.has(1),Qt.vertexUv2s=c.has(2),Qt.vertexUv3s=c.has(3),c.clear(),Qt}function T(x){const w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(const K in x.defines)w.push(K),w.push(x.defines[K]);return x.isRawShaderMaterial===!1&&(M(w,x),E(w,x),w.push(n.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function M(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function E(x,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),x.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reverseDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.alphaToCoverage&&a.enable(20),x.push(a.mask)}function F(x){const w=v[x.type];let K;if(w){const Y=Un[w];K=r_.clone(Y.uniforms)}else K=x.uniforms;return K}function I(x,w){let K;for(let Y=0,Q=h.length;Y<Q;Y++){const lt=h[Y];if(lt.cacheKey===w){K=lt,++K.usedTimes;break}}return K===void 0&&(K=new vM(n,w,x,r),h.push(K)),K}function R(x){if(--x.usedTimes===0){const w=h.indexOf(x);h[w]=h[h.length-1],h.pop(),x.destroy()}}function z(x){l.remove(x)}function ct(){l.dispose()}return{getParameters:p,getProgramCacheKey:T,getUniforms:F,acquireProgram:I,releaseProgram:R,releaseShaderCache:z,programs:h,dispose:ct}}function EM(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function bM(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function kh(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function zh(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(u,f,d,g,v,m){let p=n[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},n[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=v,p.group=m),t++,p}function a(u,f,d,g,v,m){const p=o(u,f,d,g,v,m);d.transmission>0?i.push(p):d.transparent===!0?s.push(p):e.push(p)}function l(u,f,d,g,v,m){const p=o(u,f,d,g,v,m);d.transmission>0?i.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,f){e.length>1&&e.sort(u||bM),i.length>1&&i.sort(f||kh),s.length>1&&s.sort(f||kh)}function h(){for(let u=t,f=n.length;u<f;u++){const d=n[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function wM(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new zh,n.set(i,[o])):s>=r.length?(o=new zh,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function TM(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new jt};break;case"SpotLight":e={position:new U,direction:new U,color:new jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new jt,groundColor:new jt};break;case"RectAreaLight":e={color:new jt,position:new U,halfWidth:new U,halfHeight:new U};break}return n[t.id]=e,e}}}function AM(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let RM=0;function CM(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function PM(n){const t=new TM,e=AM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new U);const s=new U,r=new fe,o=new fe;function a(c){let h=0,u=0,f=0;for(let ct=0;ct<9;ct++)i.probe[ct].set(0,0,0);let d=0,g=0,v=0,m=0,p=0,T=0,M=0,E=0,F=0,I=0,R=0;c.sort(CM);for(let ct=0,x=c.length;ct<x;ct++){const w=c[ct],K=w.color,Y=w.intensity,Q=w.distance,lt=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)h+=K.r*Y,u+=K.g*Y,f+=K.b*Y;else if(w.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(w.sh.coefficients[V],Y);R++}else if(w.isDirectionalLight){const V=t.get(w);if(V.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const it=w.shadow,H=e.get(w);H.shadowIntensity=it.intensity,H.shadowBias=it.bias,H.shadowNormalBias=it.normalBias,H.shadowRadius=it.radius,H.shadowMapSize=it.mapSize,i.directionalShadow[d]=H,i.directionalShadowMap[d]=lt,i.directionalShadowMatrix[d]=w.shadow.matrix,T++}i.directional[d]=V,d++}else if(w.isSpotLight){const V=t.get(w);V.position.setFromMatrixPosition(w.matrixWorld),V.color.copy(K).multiplyScalar(Y),V.distance=Q,V.coneCos=Math.cos(w.angle),V.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),V.decay=w.decay,i.spot[v]=V;const it=w.shadow;if(w.map&&(i.spotLightMap[F]=w.map,F++,it.updateMatrices(w),w.castShadow&&I++),i.spotLightMatrix[v]=it.matrix,w.castShadow){const H=e.get(w);H.shadowIntensity=it.intensity,H.shadowBias=it.bias,H.shadowNormalBias=it.normalBias,H.shadowRadius=it.radius,H.shadowMapSize=it.mapSize,i.spotShadow[v]=H,i.spotShadowMap[v]=lt,E++}v++}else if(w.isRectAreaLight){const V=t.get(w);V.color.copy(K).multiplyScalar(Y),V.halfWidth.set(w.width*.5,0,0),V.halfHeight.set(0,w.height*.5,0),i.rectArea[m]=V,m++}else if(w.isPointLight){const V=t.get(w);if(V.color.copy(w.color).multiplyScalar(w.intensity),V.distance=w.distance,V.decay=w.decay,w.castShadow){const it=w.shadow,H=e.get(w);H.shadowIntensity=it.intensity,H.shadowBias=it.bias,H.shadowNormalBias=it.normalBias,H.shadowRadius=it.radius,H.shadowMapSize=it.mapSize,H.shadowCameraNear=it.camera.near,H.shadowCameraFar=it.camera.far,i.pointShadow[g]=H,i.pointShadowMap[g]=lt,i.pointShadowMatrix[g]=w.shadow.matrix,M++}i.point[g]=V,g++}else if(w.isHemisphereLight){const V=t.get(w);V.skyColor.copy(w.color).multiplyScalar(Y),V.groundColor.copy(w.groundColor).multiplyScalar(Y),i.hemi[p]=V,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=yt.LTC_FLOAT_1,i.rectAreaLTC2=yt.LTC_FLOAT_2):(i.rectAreaLTC1=yt.LTC_HALF_1,i.rectAreaLTC2=yt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;const z=i.hash;(z.directionalLength!==d||z.pointLength!==g||z.spotLength!==v||z.rectAreaLength!==m||z.hemiLength!==p||z.numDirectionalShadows!==T||z.numPointShadows!==M||z.numSpotShadows!==E||z.numSpotMaps!==F||z.numLightProbes!==R)&&(i.directional.length=d,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=E+F-I,i.spotLightMap.length=F,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=R,z.directionalLength=d,z.pointLength=g,z.spotLength=v,z.rectAreaLength=m,z.hemiLength=p,z.numDirectionalShadows=T,z.numPointShadows=M,z.numSpotShadows=E,z.numSpotMaps=F,z.numLightProbes=R,i.version=RM++)}function l(c,h){let u=0,f=0,d=0,g=0,v=0;const m=h.matrixWorldInverse;for(let p=0,T=c.length;p<T;p++){const M=c[p];if(M.isDirectionalLight){const E=i.directional[u];E.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),u++}else if(M.isSpotLight){const E=i.spot[d];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),d++}else if(M.isRectAreaLight){const E=i.rectArea[g];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),E.halfWidth.set(M.width*.5,0,0),E.halfHeight.set(0,M.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){const E=i.point[f];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(m),f++}else if(M.isHemisphereLight){const E=i.hemi[v];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:i}}function Hh(n){const t=new PM(n),e=[],i=[];function s(h){c.camera=h,e.length=0,i.length=0}function r(h){e.push(h)}function o(h){i.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function LM(n){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Hh(n),t.set(s,[a])):r>=o.length?(a=new Hh(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class IM extends os{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=A0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class DM extends os{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const UM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,NM=`uniform sampler2D shadow_pass;
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
}`;function OM(n,t,e){let i=new Yc;const s=new Tt,r=new Tt,o=new le,a=new IM({depthPacking:R0}),l=new DM,c={},h=e.maxTextureSize,u={[Li]:Je,[Je]:Li,[rn]:rn},f=new Ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Tt},radius:{value:4}},vertexShader:UM,fragmentShader:NM}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Xe;g.setAttribute("position",new ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new me(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Oc;let p=this.type;this.render=function(I,R,z){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||I.length===0)return;const ct=n.getRenderTarget(),x=n.getActiveCubeFace(),w=n.getActiveMipmapLevel(),K=n.state;K.setBlending(Ai),K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const Y=p!==Qn&&this.type===Qn,Q=p===Qn&&this.type!==Qn;for(let lt=0,V=I.length;lt<V;lt++){const it=I[lt],H=it.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",it,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const gt=H.getFrameExtents();if(s.multiply(gt),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/gt.x),s.x=r.x*gt.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/gt.y),s.y=r.y*gt.y,H.mapSize.y=r.y)),H.map===null||Y===!0||Q===!0){const L=this.type!==Qn?{minFilter:Ge,magFilter:Ge}:{};H.map!==null&&H.map.dispose(),H.map=new is(s.x,s.y,L),H.map.texture.name=it.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();const ot=H.getViewportCount();for(let L=0;L<ot;L++){const It=H.getViewport(L);o.set(r.x*It.x,r.y*It.y,r.x*It.z,r.y*It.w),K.viewport(o),H.updateMatrices(it,L),i=H.getFrustum(),E(R,z,H.camera,it,this.type)}H.isPointLightShadow!==!0&&this.type===Qn&&T(H,z),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(ct,x,w)};function T(I,R){const z=t.update(v);f.defines.VSM_SAMPLES!==I.blurSamples&&(f.defines.VSM_SAMPLES=I.blurSamples,d.defines.VSM_SAMPLES=I.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new is(s.x,s.y)),f.uniforms.shadow_pass.value=I.map.texture,f.uniforms.resolution.value=I.mapSize,f.uniforms.radius.value=I.radius,n.setRenderTarget(I.mapPass),n.clear(),n.renderBufferDirect(R,null,z,f,v,null),d.uniforms.shadow_pass.value=I.mapPass.texture,d.uniforms.resolution.value=I.mapSize,d.uniforms.radius.value=I.radius,n.setRenderTarget(I.map),n.clear(),n.renderBufferDirect(R,null,z,d,v,null)}function M(I,R,z,ct){let x=null;const w=z.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(w!==void 0)x=w;else if(x=z.isPointLight===!0?l:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const K=x.uuid,Y=R.uuid;let Q=c[K];Q===void 0&&(Q={},c[K]=Q);let lt=Q[Y];lt===void 0&&(lt=x.clone(),Q[Y]=lt,R.addEventListener("dispose",F)),x=lt}if(x.visible=R.visible,x.wireframe=R.wireframe,ct===Qn?x.side=R.shadowSide!==null?R.shadowSide:R.side:x.side=R.shadowSide!==null?R.shadowSide:u[R.side],x.alphaMap=R.alphaMap,x.alphaTest=R.alphaTest,x.map=R.map,x.clipShadows=R.clipShadows,x.clippingPlanes=R.clippingPlanes,x.clipIntersection=R.clipIntersection,x.displacementMap=R.displacementMap,x.displacementScale=R.displacementScale,x.displacementBias=R.displacementBias,x.wireframeLinewidth=R.wireframeLinewidth,x.linewidth=R.linewidth,z.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const K=n.properties.get(x);K.light=z}return x}function E(I,R,z,ct,x){if(I.visible===!1)return;if(I.layers.test(R.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&x===Qn)&&(!I.frustumCulled||i.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,I.matrixWorld);const Y=t.update(I),Q=I.material;if(Array.isArray(Q)){const lt=Y.groups;for(let V=0,it=lt.length;V<it;V++){const H=lt[V],gt=Q[H.materialIndex];if(gt&&gt.visible){const ot=M(I,gt,ct,x);I.onBeforeShadow(n,I,R,z,Y,ot,H),n.renderBufferDirect(z,null,Y,ot,I,H),I.onAfterShadow(n,I,R,z,Y,ot,H)}}}else if(Q.visible){const lt=M(I,Q,ct,x);I.onBeforeShadow(n,I,R,z,Y,lt,null),n.renderBufferDirect(z,null,Y,lt,I,null),I.onAfterShadow(n,I,R,z,Y,lt,null)}}const K=I.children;for(let Y=0,Q=K.length;Y<Q;Y++)E(K[Y],R,z,ct,x)}function F(I){I.target.removeEventListener("dispose",F);for(const z in c){const ct=c[z],x=I.target.uuid;x in ct&&(ct[x].dispose(),delete ct[x])}}}const FM={[Rl]:Cl,[Pl]:Dl,[Ll]:Ul,[Os]:Il,[Cl]:Rl,[Dl]:Pl,[Ul]:Ll,[Il]:Os};function BM(n){function t(){let N=!1;const bt=new le;let et=null;const at=new le(0,0,0,0);return{setMask:function(St){et!==St&&!N&&(n.colorMask(St,St,St,St),et=St)},setLocked:function(St){N=St},setClear:function(St,wt,Zt,Ee,Ye){Ye===!0&&(St*=Ee,wt*=Ee,Zt*=Ee),bt.set(St,wt,Zt,Ee),at.equals(bt)===!1&&(n.clearColor(St,wt,Zt,Ee),at.copy(bt))},reset:function(){N=!1,et=null,at.set(-1,0,0,0)}}}function e(){let N=!1,bt=!1,et=null,at=null,St=null;return{setReversed:function(wt){bt=wt},setTest:function(wt){wt?vt(n.DEPTH_TEST):xt(n.DEPTH_TEST)},setMask:function(wt){et!==wt&&!N&&(n.depthMask(wt),et=wt)},setFunc:function(wt){if(bt&&(wt=FM[wt]),at!==wt){switch(wt){case Rl:n.depthFunc(n.NEVER);break;case Cl:n.depthFunc(n.ALWAYS);break;case Pl:n.depthFunc(n.LESS);break;case Os:n.depthFunc(n.LEQUAL);break;case Ll:n.depthFunc(n.EQUAL);break;case Il:n.depthFunc(n.GEQUAL);break;case Dl:n.depthFunc(n.GREATER);break;case Ul:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}at=wt}},setLocked:function(wt){N=wt},setClear:function(wt){St!==wt&&(n.clearDepth(wt),St=wt)},reset:function(){N=!1,et=null,at=null,St=null}}}function i(){let N=!1,bt=null,et=null,at=null,St=null,wt=null,Zt=null,Ee=null,Ye=null;return{setTest:function(Qt){N||(Qt?vt(n.STENCIL_TEST):xt(n.STENCIL_TEST))},setMask:function(Qt){bt!==Qt&&!N&&(n.stencilMask(Qt),bt=Qt)},setFunc:function(Qt,qe,Xn){(et!==Qt||at!==qe||St!==Xn)&&(n.stencilFunc(Qt,qe,Xn),et=Qt,at=qe,St=Xn)},setOp:function(Qt,qe,Xn){(wt!==Qt||Zt!==qe||Ee!==Xn)&&(n.stencilOp(Qt,qe,Xn),wt=Qt,Zt=qe,Ee=Xn)},setLocked:function(Qt){N=Qt},setClear:function(Qt){Ye!==Qt&&(n.clearStencil(Qt),Ye=Qt)},reset:function(){N=!1,bt=null,et=null,at=null,St=null,wt=null,Zt=null,Ee=null,Ye=null}}}const s=new t,r=new e,o=new i,a=new WeakMap,l=new WeakMap;let c={},h={},u=new WeakMap,f=[],d=null,g=!1,v=null,m=null,p=null,T=null,M=null,E=null,F=null,I=new jt(0,0,0),R=0,z=!1,ct=null,x=null,w=null,K=null,Y=null;const Q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let lt=!1,V=0;const it=n.getParameter(n.VERSION);it.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(it)[1]),lt=V>=1):it.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(it)[1]),lt=V>=2);let H=null,gt={};const ot=n.getParameter(n.SCISSOR_BOX),L=n.getParameter(n.VIEWPORT),It=new le().fromArray(ot),$t=new le().fromArray(L);function D(N,bt,et,at){const St=new Uint8Array(4),wt=n.createTexture();n.bindTexture(N,wt),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Zt=0;Zt<et;Zt++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(bt,0,n.RGBA,1,1,at,0,n.RGBA,n.UNSIGNED_BYTE,St):n.texImage2D(bt+Zt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,St);return wt}const j={};j[n.TEXTURE_2D]=D(n.TEXTURE_2D,n.TEXTURE_2D,1),j[n.TEXTURE_CUBE_MAP]=D(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[n.TEXTURE_2D_ARRAY]=D(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),j[n.TEXTURE_3D]=D(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),vt(n.DEPTH_TEST),r.setFunc(Os),q(!1),Z(Ku),vt(n.CULL_FACE),S(Ai);function vt(N){c[N]!==!0&&(n.enable(N),c[N]=!0)}function xt(N){c[N]!==!1&&(n.disable(N),c[N]=!1)}function zt(N,bt){return h[N]!==bt?(n.bindFramebuffer(N,bt),h[N]=bt,N===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=bt),N===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=bt),!0):!1}function Dt(N,bt){let et=f,at=!1;if(N){et=u.get(bt),et===void 0&&(et=[],u.set(bt,et));const St=N.textures;if(et.length!==St.length||et[0]!==n.COLOR_ATTACHMENT0){for(let wt=0,Zt=St.length;wt<Zt;wt++)et[wt]=n.COLOR_ATTACHMENT0+wt;et.length=St.length,at=!0}}else et[0]!==n.BACK&&(et[0]=n.BACK,at=!0);at&&n.drawBuffers(et)}function Jt(N){return d!==N?(n.useProgram(N),d=N,!0):!1}const A={[qi]:n.FUNC_ADD,[e0]:n.FUNC_SUBTRACT,[n0]:n.FUNC_REVERSE_SUBTRACT};A[i0]=n.MIN,A[s0]=n.MAX;const C={[r0]:n.ZERO,[o0]:n.ONE,[a0]:n.SRC_COLOR,[Tl]:n.SRC_ALPHA,[d0]:n.SRC_ALPHA_SATURATE,[h0]:n.DST_COLOR,[c0]:n.DST_ALPHA,[l0]:n.ONE_MINUS_SRC_COLOR,[Al]:n.ONE_MINUS_SRC_ALPHA,[f0]:n.ONE_MINUS_DST_COLOR,[u0]:n.ONE_MINUS_DST_ALPHA,[p0]:n.CONSTANT_COLOR,[m0]:n.ONE_MINUS_CONSTANT_COLOR,[g0]:n.CONSTANT_ALPHA,[_0]:n.ONE_MINUS_CONSTANT_ALPHA};function S(N,bt,et,at,St,wt,Zt,Ee,Ye,Qt){if(N===Ai){g===!0&&(xt(n.BLEND),g=!1);return}if(g===!1&&(vt(n.BLEND),g=!0),N!==t0){if(N!==v||Qt!==z){if((m!==qi||M!==qi)&&(n.blendEquation(n.FUNC_ADD),m=qi,M=qi),Qt)switch(N){case Ps:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ju:n.blendFunc(n.ONE,n.ONE);break;case Ju:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Zu:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Ps:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ju:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Ju:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Zu:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}p=null,T=null,E=null,F=null,I.set(0,0,0),R=0,v=N,z=Qt}return}St=St||bt,wt=wt||et,Zt=Zt||at,(bt!==m||St!==M)&&(n.blendEquationSeparate(A[bt],A[St]),m=bt,M=St),(et!==p||at!==T||wt!==E||Zt!==F)&&(n.blendFuncSeparate(C[et],C[at],C[wt],C[Zt]),p=et,T=at,E=wt,F=Zt),(Ee.equals(I)===!1||Ye!==R)&&(n.blendColor(Ee.r,Ee.g,Ee.b,Ye),I.copy(Ee),R=Ye),v=N,z=!1}function st(N,bt){N.side===rn?xt(n.CULL_FACE):vt(n.CULL_FACE);let et=N.side===Je;bt&&(et=!et),q(et),N.blending===Ps&&N.transparent===!1?S(Ai):S(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),r.setFunc(N.depthFunc),r.setTest(N.depthTest),r.setMask(N.depthWrite),s.setMask(N.colorWrite);const at=N.stencilWrite;o.setTest(at),at&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),rt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?vt(n.SAMPLE_ALPHA_TO_COVERAGE):xt(n.SAMPLE_ALPHA_TO_COVERAGE)}function q(N){ct!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),ct=N)}function Z(N){N!==Jg?(vt(n.CULL_FACE),N!==x&&(N===Ku?n.cullFace(n.BACK):N===Zg?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):xt(n.CULL_FACE),x=N}function nt(N){N!==w&&(lt&&n.lineWidth(N),w=N)}function rt(N,bt,et){N?(vt(n.POLYGON_OFFSET_FILL),(K!==bt||Y!==et)&&(n.polygonOffset(bt,et),K=bt,Y=et)):xt(n.POLYGON_OFFSET_FILL)}function tt(N){N?vt(n.SCISSOR_TEST):xt(n.SCISSOR_TEST)}function y(N){N===void 0&&(N=n.TEXTURE0+Q-1),H!==N&&(n.activeTexture(N),H=N)}function _(N,bt,et){et===void 0&&(H===null?et=n.TEXTURE0+Q-1:et=H);let at=gt[et];at===void 0&&(at={type:void 0,texture:void 0},gt[et]=at),(at.type!==N||at.texture!==bt)&&(H!==et&&(n.activeTexture(et),H=et),n.bindTexture(N,bt||j[N]),at.type=N,at.texture=bt)}function P(){const N=gt[H];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function k(){try{n.compressedTexImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function J(){try{n.compressedTexImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function X(){try{n.texSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function dt(){try{n.texSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ut(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ft(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ut(){try{n.texStorage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ht(){try{n.texStorage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Mt(){try{n.texImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Pt(){try{n.texImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ot(N){It.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),It.copy(N))}function _t(N){$t.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),$t.copy(N))}function Ht(N,bt){let et=l.get(bt);et===void 0&&(et=new WeakMap,l.set(bt,et));let at=et.get(N);at===void 0&&(at=n.getUniformBlockIndex(bt,N.name),et.set(N,at))}function Vt(N,bt){const at=l.get(bt).get(N);a.get(bt)!==at&&(n.uniformBlockBinding(bt,at,N.__bindingPointIndex),a.set(bt,at))}function oe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},H=null,gt={},h={},u=new WeakMap,f=[],d=null,g=!1,v=null,m=null,p=null,T=null,M=null,E=null,F=null,I=new jt(0,0,0),R=0,z=!1,ct=null,x=null,w=null,K=null,Y=null,It.set(0,0,n.canvas.width,n.canvas.height),$t.set(0,0,n.canvas.width,n.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:vt,disable:xt,bindFramebuffer:zt,drawBuffers:Dt,useProgram:Jt,setBlending:S,setMaterial:st,setFlipSided:q,setCullFace:Z,setLineWidth:nt,setPolygonOffset:rt,setScissorTest:tt,activeTexture:y,bindTexture:_,unbindTexture:P,compressedTexImage2D:k,compressedTexImage3D:J,texImage2D:Mt,texImage3D:Pt,updateUBOMapping:Ht,uniformBlockBinding:Vt,texStorage2D:Ut,texStorage3D:ht,texSubImage2D:X,texSubImage3D:dt,compressedTexSubImage2D:ut,compressedTexSubImage3D:ft,scissor:Ot,viewport:_t,reset:oe}}function Vh(n,t,e,i){const s=kM(i);switch(e){case Ed:return n*t;case wd:return n*t;case Td:return n*t*2;case Ad:return n*t/s.components*s.byteLength;case zc:return n*t/s.components*s.byteLength;case Rd:return n*t*2/s.components*s.byteLength;case Hc:return n*t*2/s.components*s.byteLength;case bd:return n*t*3/s.components*s.byteLength;case wn:return n*t*4/s.components*s.byteLength;case Vc:return n*t*4/s.components*s.byteLength;case bo:case wo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case To:case Ao:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case zl:case Vl:return Math.max(n,16)*Math.max(t,8)/4;case kl:case Hl:return Math.max(n,8)*Math.max(t,8)/2;case Gl:case Wl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Xl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Yl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ql:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case $l:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Kl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case jl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Jl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Zl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Ql:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case tc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case ec:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case nc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case ic:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case sc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case rc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Ro:case oc:case ac:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Cd:case lc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case cc:case uc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function kM(n){switch(n){case ci:case yd:return{byteLength:1,components:1};case Rr:case Md:case Fr:return{byteLength:2,components:1};case Bc:case kc:return{byteLength:2,components:4};case ns:case Fc:case oi:return{byteLength:4,components:1};case Sd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function zM(n,t,e,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Tt,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(y,_){return d?new OffscreenCanvas(y,_):Yo("canvas")}function v(y,_,P){let k=1;const J=tt(y);if((J.width>P||J.height>P)&&(k=P/Math.max(J.width,J.height)),k<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const X=Math.floor(k*J.width),dt=Math.floor(k*J.height);u===void 0&&(u=g(X,dt));const ut=_?g(X,dt):u;return ut.width=X,ut.height=dt,ut.getContext("2d").drawImage(y,0,0,X,dt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+X+"x"+dt+")."),ut}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),y;return y}function m(y){return y.generateMipmaps&&y.minFilter!==Ge&&y.minFilter!==En}function p(y){n.generateMipmap(y)}function T(y,_,P,k,J=!1){if(y!==null){if(n[y]!==void 0)return n[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let X=_;if(_===n.RED&&(P===n.FLOAT&&(X=n.R32F),P===n.HALF_FLOAT&&(X=n.R16F),P===n.UNSIGNED_BYTE&&(X=n.R8)),_===n.RED_INTEGER&&(P===n.UNSIGNED_BYTE&&(X=n.R8UI),P===n.UNSIGNED_SHORT&&(X=n.R16UI),P===n.UNSIGNED_INT&&(X=n.R32UI),P===n.BYTE&&(X=n.R8I),P===n.SHORT&&(X=n.R16I),P===n.INT&&(X=n.R32I)),_===n.RG&&(P===n.FLOAT&&(X=n.RG32F),P===n.HALF_FLOAT&&(X=n.RG16F),P===n.UNSIGNED_BYTE&&(X=n.RG8)),_===n.RG_INTEGER&&(P===n.UNSIGNED_BYTE&&(X=n.RG8UI),P===n.UNSIGNED_SHORT&&(X=n.RG16UI),P===n.UNSIGNED_INT&&(X=n.RG32UI),P===n.BYTE&&(X=n.RG8I),P===n.SHORT&&(X=n.RG16I),P===n.INT&&(X=n.RG32I)),_===n.RGB_INTEGER&&(P===n.UNSIGNED_BYTE&&(X=n.RGB8UI),P===n.UNSIGNED_SHORT&&(X=n.RGB16UI),P===n.UNSIGNED_INT&&(X=n.RGB32UI),P===n.BYTE&&(X=n.RGB8I),P===n.SHORT&&(X=n.RGB16I),P===n.INT&&(X=n.RGB32I)),_===n.RGBA_INTEGER&&(P===n.UNSIGNED_BYTE&&(X=n.RGBA8UI),P===n.UNSIGNED_SHORT&&(X=n.RGBA16UI),P===n.UNSIGNED_INT&&(X=n.RGBA32UI),P===n.BYTE&&(X=n.RGBA8I),P===n.SHORT&&(X=n.RGBA16I),P===n.INT&&(X=n.RGBA32I)),_===n.RGB&&P===n.UNSIGNED_INT_5_9_9_9_REV&&(X=n.RGB9_E5),_===n.RGBA){const dt=J?Vo:re.getTransfer(k);P===n.FLOAT&&(X=n.RGBA32F),P===n.HALF_FLOAT&&(X=n.RGBA16F),P===n.UNSIGNED_BYTE&&(X=dt===pe?n.SRGB8_ALPHA8:n.RGBA8),P===n.UNSIGNED_SHORT_4_4_4_4&&(X=n.RGBA4),P===n.UNSIGNED_SHORT_5_5_5_1&&(X=n.RGB5_A1)}return(X===n.R16F||X===n.R32F||X===n.RG16F||X===n.RG32F||X===n.RGBA16F||X===n.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function M(y,_){let P;return y?_===null||_===ns||_===ks?P=n.DEPTH24_STENCIL8:_===oi?P=n.DEPTH32F_STENCIL8:_===Rr&&(P=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===ns||_===ks?P=n.DEPTH_COMPONENT24:_===oi?P=n.DEPTH_COMPONENT32F:_===Rr&&(P=n.DEPTH_COMPONENT16),P}function E(y,_){return m(y)===!0||y.isFramebufferTexture&&y.minFilter!==Ge&&y.minFilter!==En?Math.log2(Math.max(_.width,_.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?_.mipmaps.length:1}function F(y){const _=y.target;_.removeEventListener("dispose",F),R(_),_.isVideoTexture&&h.delete(_)}function I(y){const _=y.target;_.removeEventListener("dispose",I),ct(_)}function R(y){const _=i.get(y);if(_.__webglInit===void 0)return;const P=y.source,k=f.get(P);if(k){const J=k[_.__cacheKey];J.usedTimes--,J.usedTimes===0&&z(y),Object.keys(k).length===0&&f.delete(P)}i.remove(y)}function z(y){const _=i.get(y);n.deleteTexture(_.__webglTexture);const P=y.source,k=f.get(P);delete k[_.__cacheKey],o.memory.textures--}function ct(y){const _=i.get(y);if(y.depthTexture&&y.depthTexture.dispose(),y.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(_.__webglFramebuffer[k]))for(let J=0;J<_.__webglFramebuffer[k].length;J++)n.deleteFramebuffer(_.__webglFramebuffer[k][J]);else n.deleteFramebuffer(_.__webglFramebuffer[k]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[k])}else{if(Array.isArray(_.__webglFramebuffer))for(let k=0;k<_.__webglFramebuffer.length;k++)n.deleteFramebuffer(_.__webglFramebuffer[k]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let k=0;k<_.__webglColorRenderbuffer.length;k++)_.__webglColorRenderbuffer[k]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[k]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const P=y.textures;for(let k=0,J=P.length;k<J;k++){const X=i.get(P[k]);X.__webglTexture&&(n.deleteTexture(X.__webglTexture),o.memory.textures--),i.remove(P[k])}i.remove(y)}let x=0;function w(){x=0}function K(){const y=x;return y>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+s.maxTextures),x+=1,y}function Y(y){const _=[];return _.push(y.wrapS),_.push(y.wrapT),_.push(y.wrapR||0),_.push(y.magFilter),_.push(y.minFilter),_.push(y.anisotropy),_.push(y.internalFormat),_.push(y.format),_.push(y.type),_.push(y.generateMipmaps),_.push(y.premultiplyAlpha),_.push(y.flipY),_.push(y.unpackAlignment),_.push(y.colorSpace),_.join()}function Q(y,_){const P=i.get(y);if(y.isVideoTexture&&nt(y),y.isRenderTargetTexture===!1&&y.version>0&&P.__version!==y.version){const k=y.image;if(k===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$t(P,y,_);return}}e.bindTexture(n.TEXTURE_2D,P.__webglTexture,n.TEXTURE0+_)}function lt(y,_){const P=i.get(y);if(y.version>0&&P.__version!==y.version){$t(P,y,_);return}e.bindTexture(n.TEXTURE_2D_ARRAY,P.__webglTexture,n.TEXTURE0+_)}function V(y,_){const P=i.get(y);if(y.version>0&&P.__version!==y.version){$t(P,y,_);return}e.bindTexture(n.TEXTURE_3D,P.__webglTexture,n.TEXTURE0+_)}function it(y,_){const P=i.get(y);if(y.version>0&&P.__version!==y.version){D(P,y,_);return}e.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+_)}const H={[Fl]:n.REPEAT,[Ji]:n.CLAMP_TO_EDGE,[Bl]:n.MIRRORED_REPEAT},gt={[Ge]:n.NEAREST,[T0]:n.NEAREST_MIPMAP_NEAREST,[$r]:n.NEAREST_MIPMAP_LINEAR,[En]:n.LINEAR,[Pa]:n.LINEAR_MIPMAP_NEAREST,[Zi]:n.LINEAR_MIPMAP_LINEAR},ot={[P0]:n.NEVER,[O0]:n.ALWAYS,[L0]:n.LESS,[Ld]:n.LEQUAL,[I0]:n.EQUAL,[N0]:n.GEQUAL,[D0]:n.GREATER,[U0]:n.NOTEQUAL};function L(y,_){if(_.type===oi&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===En||_.magFilter===Pa||_.magFilter===$r||_.magFilter===Zi||_.minFilter===En||_.minFilter===Pa||_.minFilter===$r||_.minFilter===Zi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(y,n.TEXTURE_WRAP_S,H[_.wrapS]),n.texParameteri(y,n.TEXTURE_WRAP_T,H[_.wrapT]),(y===n.TEXTURE_3D||y===n.TEXTURE_2D_ARRAY)&&n.texParameteri(y,n.TEXTURE_WRAP_R,H[_.wrapR]),n.texParameteri(y,n.TEXTURE_MAG_FILTER,gt[_.magFilter]),n.texParameteri(y,n.TEXTURE_MIN_FILTER,gt[_.minFilter]),_.compareFunction&&(n.texParameteri(y,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(y,n.TEXTURE_COMPARE_FUNC,ot[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Ge||_.minFilter!==$r&&_.minFilter!==Zi||_.type===oi&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const P=t.get("EXT_texture_filter_anisotropic");n.texParameterf(y,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function It(y,_){let P=!1;y.__webglInit===void 0&&(y.__webglInit=!0,_.addEventListener("dispose",F));const k=_.source;let J=f.get(k);J===void 0&&(J={},f.set(k,J));const X=Y(_);if(X!==y.__cacheKey){J[X]===void 0&&(J[X]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,P=!0),J[X].usedTimes++;const dt=J[y.__cacheKey];dt!==void 0&&(J[y.__cacheKey].usedTimes--,dt.usedTimes===0&&z(_)),y.__cacheKey=X,y.__webglTexture=J[X].texture}return P}function $t(y,_,P){let k=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(k=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(k=n.TEXTURE_3D);const J=It(y,_),X=_.source;e.bindTexture(k,y.__webglTexture,n.TEXTURE0+P);const dt=i.get(X);if(X.version!==dt.__version||J===!0){e.activeTexture(n.TEXTURE0+P);const ut=re.getPrimaries(re.workingColorSpace),ft=_.colorSpace===Ei?null:re.getPrimaries(_.colorSpace),Ut=_.colorSpace===Ei||ut===ft?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ut);let ht=v(_.image,!1,s.maxTextureSize);ht=rt(_,ht);const Mt=r.convert(_.format,_.colorSpace),Pt=r.convert(_.type);let Ot=T(_.internalFormat,Mt,Pt,_.colorSpace,_.isVideoTexture);L(k,_);let _t;const Ht=_.mipmaps,Vt=_.isVideoTexture!==!0,oe=dt.__version===void 0||J===!0,N=X.dataReady,bt=E(_,ht);if(_.isDepthTexture)Ot=M(_.format===zs,_.type),oe&&(Vt?e.texStorage2D(n.TEXTURE_2D,1,Ot,ht.width,ht.height):e.texImage2D(n.TEXTURE_2D,0,Ot,ht.width,ht.height,0,Mt,Pt,null));else if(_.isDataTexture)if(Ht.length>0){Vt&&oe&&e.texStorage2D(n.TEXTURE_2D,bt,Ot,Ht[0].width,Ht[0].height);for(let et=0,at=Ht.length;et<at;et++)_t=Ht[et],Vt?N&&e.texSubImage2D(n.TEXTURE_2D,et,0,0,_t.width,_t.height,Mt,Pt,_t.data):e.texImage2D(n.TEXTURE_2D,et,Ot,_t.width,_t.height,0,Mt,Pt,_t.data);_.generateMipmaps=!1}else Vt?(oe&&e.texStorage2D(n.TEXTURE_2D,bt,Ot,ht.width,ht.height),N&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ht.width,ht.height,Mt,Pt,ht.data)):e.texImage2D(n.TEXTURE_2D,0,Ot,ht.width,ht.height,0,Mt,Pt,ht.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Vt&&oe&&e.texStorage3D(n.TEXTURE_2D_ARRAY,bt,Ot,Ht[0].width,Ht[0].height,ht.depth);for(let et=0,at=Ht.length;et<at;et++)if(_t=Ht[et],_.format!==wn)if(Mt!==null)if(Vt){if(N)if(_.layerUpdates.size>0){const St=Vh(_t.width,_t.height,_.format,_.type);for(const wt of _.layerUpdates){const Zt=_t.data.subarray(wt*St/_t.data.BYTES_PER_ELEMENT,(wt+1)*St/_t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,et,0,0,wt,_t.width,_t.height,1,Mt,Zt,0,0)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,et,0,0,0,_t.width,_t.height,ht.depth,Mt,_t.data,0,0)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,et,Ot,_t.width,_t.height,ht.depth,0,_t.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Vt?N&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,et,0,0,0,_t.width,_t.height,ht.depth,Mt,Pt,_t.data):e.texImage3D(n.TEXTURE_2D_ARRAY,et,Ot,_t.width,_t.height,ht.depth,0,Mt,Pt,_t.data)}else{Vt&&oe&&e.texStorage2D(n.TEXTURE_2D,bt,Ot,Ht[0].width,Ht[0].height);for(let et=0,at=Ht.length;et<at;et++)_t=Ht[et],_.format!==wn?Mt!==null?Vt?N&&e.compressedTexSubImage2D(n.TEXTURE_2D,et,0,0,_t.width,_t.height,Mt,_t.data):e.compressedTexImage2D(n.TEXTURE_2D,et,Ot,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Vt?N&&e.texSubImage2D(n.TEXTURE_2D,et,0,0,_t.width,_t.height,Mt,Pt,_t.data):e.texImage2D(n.TEXTURE_2D,et,Ot,_t.width,_t.height,0,Mt,Pt,_t.data)}else if(_.isDataArrayTexture)if(Vt){if(oe&&e.texStorage3D(n.TEXTURE_2D_ARRAY,bt,Ot,ht.width,ht.height,ht.depth),N)if(_.layerUpdates.size>0){const et=Vh(ht.width,ht.height,_.format,_.type);for(const at of _.layerUpdates){const St=ht.data.subarray(at*et/ht.data.BYTES_PER_ELEMENT,(at+1)*et/ht.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,at,ht.width,ht.height,1,Mt,Pt,St)}_.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ht.width,ht.height,ht.depth,Mt,Pt,ht.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Ot,ht.width,ht.height,ht.depth,0,Mt,Pt,ht.data);else if(_.isData3DTexture)Vt?(oe&&e.texStorage3D(n.TEXTURE_3D,bt,Ot,ht.width,ht.height,ht.depth),N&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ht.width,ht.height,ht.depth,Mt,Pt,ht.data)):e.texImage3D(n.TEXTURE_3D,0,Ot,ht.width,ht.height,ht.depth,0,Mt,Pt,ht.data);else if(_.isFramebufferTexture){if(oe)if(Vt)e.texStorage2D(n.TEXTURE_2D,bt,Ot,ht.width,ht.height);else{let et=ht.width,at=ht.height;for(let St=0;St<bt;St++)e.texImage2D(n.TEXTURE_2D,St,Ot,et,at,0,Mt,Pt,null),et>>=1,at>>=1}}else if(Ht.length>0){if(Vt&&oe){const et=tt(Ht[0]);e.texStorage2D(n.TEXTURE_2D,bt,Ot,et.width,et.height)}for(let et=0,at=Ht.length;et<at;et++)_t=Ht[et],Vt?N&&e.texSubImage2D(n.TEXTURE_2D,et,0,0,Mt,Pt,_t):e.texImage2D(n.TEXTURE_2D,et,Ot,Mt,Pt,_t);_.generateMipmaps=!1}else if(Vt){if(oe){const et=tt(ht);e.texStorage2D(n.TEXTURE_2D,bt,Ot,et.width,et.height)}N&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Mt,Pt,ht)}else e.texImage2D(n.TEXTURE_2D,0,Ot,Mt,Pt,ht);m(_)&&p(k),dt.__version=X.version,_.onUpdate&&_.onUpdate(_)}y.__version=_.version}function D(y,_,P){if(_.image.length!==6)return;const k=It(y,_),J=_.source;e.bindTexture(n.TEXTURE_CUBE_MAP,y.__webglTexture,n.TEXTURE0+P);const X=i.get(J);if(J.version!==X.__version||k===!0){e.activeTexture(n.TEXTURE0+P);const dt=re.getPrimaries(re.workingColorSpace),ut=_.colorSpace===Ei?null:re.getPrimaries(_.colorSpace),ft=_.colorSpace===Ei||dt===ut?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);const Ut=_.isCompressedTexture||_.image[0].isCompressedTexture,ht=_.image[0]&&_.image[0].isDataTexture,Mt=[];for(let at=0;at<6;at++)!Ut&&!ht?Mt[at]=v(_.image[at],!0,s.maxCubemapSize):Mt[at]=ht?_.image[at].image:_.image[at],Mt[at]=rt(_,Mt[at]);const Pt=Mt[0],Ot=r.convert(_.format,_.colorSpace),_t=r.convert(_.type),Ht=T(_.internalFormat,Ot,_t,_.colorSpace),Vt=_.isVideoTexture!==!0,oe=X.__version===void 0||k===!0,N=J.dataReady;let bt=E(_,Pt);L(n.TEXTURE_CUBE_MAP,_);let et;if(Ut){Vt&&oe&&e.texStorage2D(n.TEXTURE_CUBE_MAP,bt,Ht,Pt.width,Pt.height);for(let at=0;at<6;at++){et=Mt[at].mipmaps;for(let St=0;St<et.length;St++){const wt=et[St];_.format!==wn?Ot!==null?Vt?N&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,St,0,0,wt.width,wt.height,Ot,wt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,St,Ht,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Vt?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,St,0,0,wt.width,wt.height,Ot,_t,wt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,St,Ht,wt.width,wt.height,0,Ot,_t,wt.data)}}}else{if(et=_.mipmaps,Vt&&oe){et.length>0&&bt++;const at=tt(Mt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,bt,Ht,at.width,at.height)}for(let at=0;at<6;at++)if(ht){Vt?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,Mt[at].width,Mt[at].height,Ot,_t,Mt[at].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,Ht,Mt[at].width,Mt[at].height,0,Ot,_t,Mt[at].data);for(let St=0;St<et.length;St++){const Zt=et[St].image[at].image;Vt?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,St+1,0,0,Zt.width,Zt.height,Ot,_t,Zt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,St+1,Ht,Zt.width,Zt.height,0,Ot,_t,Zt.data)}}else{Vt?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,Ot,_t,Mt[at]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,Ht,Ot,_t,Mt[at]);for(let St=0;St<et.length;St++){const wt=et[St];Vt?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,St+1,0,0,Ot,_t,wt.image[at]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,St+1,Ht,Ot,_t,wt.image[at])}}}m(_)&&p(n.TEXTURE_CUBE_MAP),X.__version=J.version,_.onUpdate&&_.onUpdate(_)}y.__version=_.version}function j(y,_,P,k,J,X){const dt=r.convert(P.format,P.colorSpace),ut=r.convert(P.type),ft=T(P.internalFormat,dt,ut,P.colorSpace);if(!i.get(_).__hasExternalTextures){const ht=Math.max(1,_.width>>X),Mt=Math.max(1,_.height>>X);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?e.texImage3D(J,X,ft,ht,Mt,_.depth,0,dt,ut,null):e.texImage2D(J,X,ft,ht,Mt,0,dt,ut,null)}e.bindFramebuffer(n.FRAMEBUFFER,y),Z(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,k,J,i.get(P).__webglTexture,0,q(_)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,k,J,i.get(P).__webglTexture,X),e.bindFramebuffer(n.FRAMEBUFFER,null)}function vt(y,_,P){if(n.bindRenderbuffer(n.RENDERBUFFER,y),_.depthBuffer){const k=_.depthTexture,J=k&&k.isDepthTexture?k.type:null,X=M(_.stencilBuffer,J),dt=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ut=q(_);Z(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ut,X,_.width,_.height):P?n.renderbufferStorageMultisample(n.RENDERBUFFER,ut,X,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,X,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,dt,n.RENDERBUFFER,y)}else{const k=_.textures;for(let J=0;J<k.length;J++){const X=k[J],dt=r.convert(X.format,X.colorSpace),ut=r.convert(X.type),ft=T(X.internalFormat,dt,ut,X.colorSpace),Ut=q(_);P&&Z(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ut,ft,_.width,_.height):Z(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ut,ft,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,ft,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function xt(y,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,y),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),Q(_.depthTexture,0);const k=i.get(_.depthTexture).__webglTexture,J=q(_);if(_.depthTexture.format===Ls)Z(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,k,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,k,0);else if(_.depthTexture.format===zs)Z(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,k,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,k,0);else throw new Error("Unknown depthTexture format")}function zt(y){const _=i.get(y),P=y.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==y.depthTexture){const k=y.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),k){const J=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,k.removeEventListener("dispose",J)};k.addEventListener("dispose",J),_.__depthDisposeCallback=J}_.__boundDepthTexture=k}if(y.depthTexture&&!_.__autoAllocateDepthBuffer){if(P)throw new Error("target.depthTexture not supported in Cube render targets");xt(_.__webglFramebuffer,y)}else if(P){_.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[k]),_.__webglDepthbuffer[k]===void 0)_.__webglDepthbuffer[k]=n.createRenderbuffer(),vt(_.__webglDepthbuffer[k],y,!1);else{const J=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,X=_.__webglDepthbuffer[k];n.bindRenderbuffer(n.RENDERBUFFER,X),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,X)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),vt(_.__webglDepthbuffer,y,!1);else{const k=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,k,n.RENDERBUFFER,J)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Dt(y,_,P){const k=i.get(y);_!==void 0&&j(k.__webglFramebuffer,y,y.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),P!==void 0&&zt(y)}function Jt(y){const _=y.texture,P=i.get(y),k=i.get(_);y.addEventListener("dispose",I);const J=y.textures,X=y.isWebGLCubeRenderTarget===!0,dt=J.length>1;if(dt||(k.__webglTexture===void 0&&(k.__webglTexture=n.createTexture()),k.__version=_.version,o.memory.textures++),X){P.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(_.mipmaps&&_.mipmaps.length>0){P.__webglFramebuffer[ut]=[];for(let ft=0;ft<_.mipmaps.length;ft++)P.__webglFramebuffer[ut][ft]=n.createFramebuffer()}else P.__webglFramebuffer[ut]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){P.__webglFramebuffer=[];for(let ut=0;ut<_.mipmaps.length;ut++)P.__webglFramebuffer[ut]=n.createFramebuffer()}else P.__webglFramebuffer=n.createFramebuffer();if(dt)for(let ut=0,ft=J.length;ut<ft;ut++){const Ut=i.get(J[ut]);Ut.__webglTexture===void 0&&(Ut.__webglTexture=n.createTexture(),o.memory.textures++)}if(y.samples>0&&Z(y)===!1){P.__webglMultisampledFramebuffer=n.createFramebuffer(),P.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let ut=0;ut<J.length;ut++){const ft=J[ut];P.__webglColorRenderbuffer[ut]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,P.__webglColorRenderbuffer[ut]);const Ut=r.convert(ft.format,ft.colorSpace),ht=r.convert(ft.type),Mt=T(ft.internalFormat,Ut,ht,ft.colorSpace,y.isXRRenderTarget===!0),Pt=q(y);n.renderbufferStorageMultisample(n.RENDERBUFFER,Pt,Mt,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.RENDERBUFFER,P.__webglColorRenderbuffer[ut])}n.bindRenderbuffer(n.RENDERBUFFER,null),y.depthBuffer&&(P.__webglDepthRenderbuffer=n.createRenderbuffer(),vt(P.__webglDepthRenderbuffer,y,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(X){e.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture),L(n.TEXTURE_CUBE_MAP,_);for(let ut=0;ut<6;ut++)if(_.mipmaps&&_.mipmaps.length>0)for(let ft=0;ft<_.mipmaps.length;ft++)j(P.__webglFramebuffer[ut][ft],y,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,ft);else j(P.__webglFramebuffer[ut],y,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);m(_)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(dt){for(let ut=0,ft=J.length;ut<ft;ut++){const Ut=J[ut],ht=i.get(Ut);e.bindTexture(n.TEXTURE_2D,ht.__webglTexture),L(n.TEXTURE_2D,Ut),j(P.__webglFramebuffer,y,Ut,n.COLOR_ATTACHMENT0+ut,n.TEXTURE_2D,0),m(Ut)&&p(n.TEXTURE_2D)}e.unbindTexture()}else{let ut=n.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(ut=y.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ut,k.__webglTexture),L(ut,_),_.mipmaps&&_.mipmaps.length>0)for(let ft=0;ft<_.mipmaps.length;ft++)j(P.__webglFramebuffer[ft],y,_,n.COLOR_ATTACHMENT0,ut,ft);else j(P.__webglFramebuffer,y,_,n.COLOR_ATTACHMENT0,ut,0);m(_)&&p(ut),e.unbindTexture()}y.depthBuffer&&zt(y)}function A(y){const _=y.textures;for(let P=0,k=_.length;P<k;P++){const J=_[P];if(m(J)){const X=y.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,dt=i.get(J).__webglTexture;e.bindTexture(X,dt),p(X),e.unbindTexture()}}}const C=[],S=[];function st(y){if(y.samples>0){if(Z(y)===!1){const _=y.textures,P=y.width,k=y.height;let J=n.COLOR_BUFFER_BIT;const X=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,dt=i.get(y),ut=_.length>1;if(ut)for(let ft=0;ft<_.length;ft++)e.bindFramebuffer(n.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,dt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,dt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,dt.__webglFramebuffer);for(let ft=0;ft<_.length;ft++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),ut){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,dt.__webglColorRenderbuffer[ft]);const Ut=i.get(_[ft]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ut,0)}n.blitFramebuffer(0,0,P,k,0,0,P,k,J,n.NEAREST),l===!0&&(C.length=0,S.length=0,C.push(n.COLOR_ATTACHMENT0+ft),y.depthBuffer&&y.resolveDepthBuffer===!1&&(C.push(X),S.push(X),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,S)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,C))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ut)for(let ft=0;ft<_.length;ft++){e.bindFramebuffer(n.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.RENDERBUFFER,dt.__webglColorRenderbuffer[ft]);const Ut=i.get(_[ft]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,dt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.TEXTURE_2D,Ut,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,dt.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.resolveDepthBuffer===!1&&l){const _=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function q(y){return Math.min(s.maxSamples,y.samples)}function Z(y){const _=i.get(y);return y.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function nt(y){const _=o.render.frame;h.get(y)!==_&&(h.set(y,_),y.update())}function rt(y,_){const P=y.colorSpace,k=y.format,J=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||P!==Di&&P!==Ei&&(re.getTransfer(P)===pe?(k!==wn||J!==ci)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",P)),_}function tt(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(c.width=y.naturalWidth||y.width,c.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(c.width=y.displayWidth,c.height=y.displayHeight):(c.width=y.width,c.height=y.height),c}this.allocateTextureUnit=K,this.resetTextureUnits=w,this.setTexture2D=Q,this.setTexture2DArray=lt,this.setTexture3D=V,this.setTextureCube=it,this.rebindTextures=Dt,this.setupRenderTarget=Jt,this.updateRenderTargetMipmap=A,this.updateMultisampleRenderTarget=st,this.setupDepthRenderbuffer=zt,this.setupFrameBufferTexture=j,this.useMultisampledRTT=Z}function HM(n,t){function e(i,s=Ei){let r;const o=re.getTransfer(s);if(i===ci)return n.UNSIGNED_BYTE;if(i===Bc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===kc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Sd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===yd)return n.BYTE;if(i===Md)return n.SHORT;if(i===Rr)return n.UNSIGNED_SHORT;if(i===Fc)return n.INT;if(i===ns)return n.UNSIGNED_INT;if(i===oi)return n.FLOAT;if(i===Fr)return n.HALF_FLOAT;if(i===Ed)return n.ALPHA;if(i===bd)return n.RGB;if(i===wn)return n.RGBA;if(i===wd)return n.LUMINANCE;if(i===Td)return n.LUMINANCE_ALPHA;if(i===Ls)return n.DEPTH_COMPONENT;if(i===zs)return n.DEPTH_STENCIL;if(i===Ad)return n.RED;if(i===zc)return n.RED_INTEGER;if(i===Rd)return n.RG;if(i===Hc)return n.RG_INTEGER;if(i===Vc)return n.RGBA_INTEGER;if(i===bo||i===wo||i===To||i===Ao)if(o===pe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===bo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===wo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===To)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ao)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===bo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===wo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===To)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ao)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===kl||i===zl||i===Hl||i===Vl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===kl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===zl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Hl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Vl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Gl||i===Wl||i===Xl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Gl||i===Wl)return o===pe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Xl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Yl||i===ql||i===$l||i===Kl||i===jl||i===Jl||i===Zl||i===Ql||i===tc||i===ec||i===nc||i===ic||i===sc||i===rc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Yl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ql)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===$l)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Kl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===jl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Jl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Zl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ql)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===tc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ec)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===nc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ic)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===sc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===rc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ro||i===oc||i===ac)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Ro)return o===pe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===oc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ac)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Cd||i===lc||i===cc||i===uc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ro)return r.COMPRESSED_RED_RGTC1_EXT;if(i===lc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===cc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===uc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ks?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class VM extends pn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class an extends Ce{constructor(){super(),this.isGroup=!0,this.type="Group"}}const GM={type:"move"};class al{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new an,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new an,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new an,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,i),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(GM)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new an;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const WM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,XM=`
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

}`;class YM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new We,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Ii({vertexShader:WM,fragmentShader:XM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new me(new as(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class qM extends Vs{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null;const v=new YM,m=e.getContextAttributes();let p=null,T=null;const M=[],E=[],F=new Tt;let I=null;const R=new pn;R.layers.enable(1),R.viewport=new le;const z=new pn;z.layers.enable(2),z.viewport=new le;const ct=[R,z],x=new VM;x.layers.enable(1),x.layers.enable(2);let w=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(D){let j=M[D];return j===void 0&&(j=new al,M[D]=j),j.getTargetRaySpace()},this.getControllerGrip=function(D){let j=M[D];return j===void 0&&(j=new al,M[D]=j),j.getGripSpace()},this.getHand=function(D){let j=M[D];return j===void 0&&(j=new al,M[D]=j),j.getHandSpace()};function Y(D){const j=E.indexOf(D.inputSource);if(j===-1)return;const vt=M[j];vt!==void 0&&(vt.update(D.inputSource,D.frame,c||o),vt.dispatchEvent({type:D.type,data:D.inputSource}))}function Q(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",Q),s.removeEventListener("inputsourceschange",lt);for(let D=0;D<M.length;D++){const j=E[D];j!==null&&(E[D]=null,M[D].disconnect(j))}w=null,K=null,v.reset(),t.setRenderTarget(p),d=null,f=null,u=null,s=null,T=null,$t.stop(),i.isPresenting=!1,t.setPixelRatio(I),t.setSize(F.width,F.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(D){r=D,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(D){a=D,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(D){c=D},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(D){if(s=D,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",Q),s.addEventListener("inputsourceschange",lt),m.xrCompatible!==!0&&await e.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(F),s.renderState.layers===void 0){const j={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,j),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),T=new is(d.framebufferWidth,d.framebufferHeight,{format:wn,type:ci,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let j=null,vt=null,xt=null;m.depth&&(xt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,j=m.stencil?zs:Ls,vt=m.stencil?ks:ns);const zt={colorFormat:e.RGBA8,depthFormat:xt,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(zt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),T=new is(f.textureWidth,f.textureHeight,{format:wn,type:ci,depthTexture:new Vd(f.textureWidth,f.textureHeight,vt,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),$t.setContext(s),$t.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function lt(D){for(let j=0;j<D.removed.length;j++){const vt=D.removed[j],xt=E.indexOf(vt);xt>=0&&(E[xt]=null,M[xt].disconnect(vt))}for(let j=0;j<D.added.length;j++){const vt=D.added[j];let xt=E.indexOf(vt);if(xt===-1){for(let Dt=0;Dt<M.length;Dt++)if(Dt>=E.length){E.push(vt),xt=Dt;break}else if(E[Dt]===null){E[Dt]=vt,xt=Dt;break}if(xt===-1)break}const zt=M[xt];zt&&zt.connect(vt)}}const V=new U,it=new U;function H(D,j,vt){V.setFromMatrixPosition(j.matrixWorld),it.setFromMatrixPosition(vt.matrixWorld);const xt=V.distanceTo(it),zt=j.projectionMatrix.elements,Dt=vt.projectionMatrix.elements,Jt=zt[14]/(zt[10]-1),A=zt[14]/(zt[10]+1),C=(zt[9]+1)/zt[5],S=(zt[9]-1)/zt[5],st=(zt[8]-1)/zt[0],q=(Dt[8]+1)/Dt[0],Z=Jt*st,nt=Jt*q,rt=xt/(-st+q),tt=rt*-st;if(j.matrixWorld.decompose(D.position,D.quaternion,D.scale),D.translateX(tt),D.translateZ(rt),D.matrixWorld.compose(D.position,D.quaternion,D.scale),D.matrixWorldInverse.copy(D.matrixWorld).invert(),zt[10]===-1)D.projectionMatrix.copy(j.projectionMatrix),D.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const y=Jt+rt,_=A+rt,P=Z-tt,k=nt+(xt-tt),J=C*A/_*y,X=S*A/_*y;D.projectionMatrix.makePerspective(P,k,J,X,y,_),D.projectionMatrixInverse.copy(D.projectionMatrix).invert()}}function gt(D,j){j===null?D.matrixWorld.copy(D.matrix):D.matrixWorld.multiplyMatrices(j.matrixWorld,D.matrix),D.matrixWorldInverse.copy(D.matrixWorld).invert()}this.updateCamera=function(D){if(s===null)return;let j=D.near,vt=D.far;v.texture!==null&&(v.depthNear>0&&(j=v.depthNear),v.depthFar>0&&(vt=v.depthFar)),x.near=z.near=R.near=j,x.far=z.far=R.far=vt,(w!==x.near||K!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),w=x.near,K=x.far);const xt=D.parent,zt=x.cameras;gt(x,xt);for(let Dt=0;Dt<zt.length;Dt++)gt(zt[Dt],xt);zt.length===2?H(x,R,z):x.projectionMatrix.copy(R.projectionMatrix),ot(D,x,xt)};function ot(D,j,vt){vt===null?D.matrix.copy(j.matrixWorld):(D.matrix.copy(vt.matrixWorld),D.matrix.invert(),D.matrix.multiply(j.matrixWorld)),D.matrix.decompose(D.position,D.quaternion,D.scale),D.updateMatrixWorld(!0),D.projectionMatrix.copy(j.projectionMatrix),D.projectionMatrixInverse.copy(j.projectionMatrixInverse),D.isPerspectiveCamera&&(D.fov=hc*2*Math.atan(1/D.projectionMatrix.elements[5]),D.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(D){l=D,f!==null&&(f.fixedFoveation=D),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=D)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(x)};let L=null;function It(D,j){if(h=j.getViewerPose(c||o),g=j,h!==null){const vt=h.views;d!==null&&(t.setRenderTargetFramebuffer(T,d.framebuffer),t.setRenderTarget(T));let xt=!1;vt.length!==x.cameras.length&&(x.cameras.length=0,xt=!0);for(let Dt=0;Dt<vt.length;Dt++){const Jt=vt[Dt];let A=null;if(d!==null)A=d.getViewport(Jt);else{const S=u.getViewSubImage(f,Jt);A=S.viewport,Dt===0&&(t.setRenderTargetTextures(T,S.colorTexture,f.ignoreDepthValues?void 0:S.depthStencilTexture),t.setRenderTarget(T))}let C=ct[Dt];C===void 0&&(C=new pn,C.layers.enable(Dt),C.viewport=new le,ct[Dt]=C),C.matrix.fromArray(Jt.transform.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale),C.projectionMatrix.fromArray(Jt.projectionMatrix),C.projectionMatrixInverse.copy(C.projectionMatrix).invert(),C.viewport.set(A.x,A.y,A.width,A.height),Dt===0&&(x.matrix.copy(C.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),xt===!0&&x.cameras.push(C)}const zt=s.enabledFeatures;if(zt&&zt.includes("depth-sensing")){const Dt=u.getDepthInformation(vt[0]);Dt&&Dt.isValid&&Dt.texture&&v.init(t,Dt,s.renderState)}}for(let vt=0;vt<M.length;vt++){const xt=E[vt],zt=M[vt];xt!==null&&zt!==void 0&&zt.update(xt,j,c||o)}L&&L(D,j),j.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:j}),g=null}const $t=new Hd;$t.setAnimationLoop(It),this.setAnimationLoop=function(D){L=D},this.dispose=function(){}}}const Vi=new Gn,$M=new fe;function KM(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Bd(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,T,M,E){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,E)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,T,M):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Je&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Je&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const T=t.get(p),M=T.envMap,E=T.envMapRotation;M&&(m.envMap.value=M,Vi.copy(E),Vi.x*=-1,Vi.y*=-1,Vi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Vi.y*=-1,Vi.z*=-1),m.envMapRotation.value.setFromMatrix4($M.makeRotationFromEuler(Vi)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,T,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*T,m.scale.value=M*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,T){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Je&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const T=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function jM(n,t,e,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,M){const E=M.program;i.uniformBlockBinding(T,E)}function c(T,M){let E=s[T.id];E===void 0&&(g(T),E=h(T),s[T.id]=E,T.addEventListener("dispose",m));const F=M.program;i.updateUBOMapping(T,F);const I=t.render.frame;r[T.id]!==I&&(f(T),r[T.id]=I)}function h(T){const M=u();T.__bindingPointIndex=M;const E=n.createBuffer(),F=T.__size,I=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,F,I),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,E),E}function u(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(T){const M=s[T.id],E=T.uniforms,F=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let I=0,R=E.length;I<R;I++){const z=Array.isArray(E[I])?E[I]:[E[I]];for(let ct=0,x=z.length;ct<x;ct++){const w=z[ct];if(d(w,I,ct,F)===!0){const K=w.__offset,Y=Array.isArray(w.value)?w.value:[w.value];let Q=0;for(let lt=0;lt<Y.length;lt++){const V=Y[lt],it=v(V);typeof V=="number"||typeof V=="boolean"?(w.__data[0]=V,n.bufferSubData(n.UNIFORM_BUFFER,K+Q,w.__data)):V.isMatrix3?(w.__data[0]=V.elements[0],w.__data[1]=V.elements[1],w.__data[2]=V.elements[2],w.__data[3]=0,w.__data[4]=V.elements[3],w.__data[5]=V.elements[4],w.__data[6]=V.elements[5],w.__data[7]=0,w.__data[8]=V.elements[6],w.__data[9]=V.elements[7],w.__data[10]=V.elements[8],w.__data[11]=0):(V.toArray(w.__data,Q),Q+=it.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,K,w.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(T,M,E,F){const I=T.value,R=M+"_"+E;if(F[R]===void 0)return typeof I=="number"||typeof I=="boolean"?F[R]=I:F[R]=I.clone(),!0;{const z=F[R];if(typeof I=="number"||typeof I=="boolean"){if(z!==I)return F[R]=I,!0}else if(z.equals(I)===!1)return z.copy(I),!0}return!1}function g(T){const M=T.uniforms;let E=0;const F=16;for(let R=0,z=M.length;R<z;R++){const ct=Array.isArray(M[R])?M[R]:[M[R]];for(let x=0,w=ct.length;x<w;x++){const K=ct[x],Y=Array.isArray(K.value)?K.value:[K.value];for(let Q=0,lt=Y.length;Q<lt;Q++){const V=Y[Q],it=v(V),H=E%F,gt=H%it.boundary,ot=H+gt;E+=gt,ot!==0&&F-ot<it.storage&&(E+=F-ot),K.__data=new Float32Array(it.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=E,E+=it.storage}}}const I=E%F;return I>0&&(E+=F-I),T.__size=E,T.__cache={},this}function v(T){const M={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(M.boundary=4,M.storage=4):T.isVector2?(M.boundary=8,M.storage=8):T.isVector3||T.isColor?(M.boundary=16,M.storage=12):T.isVector4?(M.boundary=16,M.storage=16):T.isMatrix3?(M.boundary=48,M.storage=48):T.isMatrix4?(M.boundary=64,M.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),M}function m(T){const M=T.target;M.removeEventListener("dispose",m);const E=o.indexOf(M.__bindingPointIndex);o.splice(E,1),n.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function p(){for(const T in s)n.deleteBuffer(s[T]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class JM{constructor(t={}){const{canvas:e=B0(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const d=new Uint32Array(4),g=new Int32Array(4);let v=null,m=null;const p=[],T=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=je,this.toneMapping=Ri,this.toneMappingExposure=1;const M=this;let E=!1,F=0,I=0,R=null,z=-1,ct=null;const x=new le,w=new le;let K=null;const Y=new jt(0);let Q=0,lt=e.width,V=e.height,it=1,H=null,gt=null;const ot=new le(0,0,lt,V),L=new le(0,0,lt,V);let It=!1;const $t=new Yc;let D=!1,j=!1;const vt=new fe,xt=new fe,zt=new U,Dt=new le,Jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let A=!1;function C(){return R===null?it:1}let S=i;function st(b,O){return e.getContext(b,O)}try{const b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Nc}`),e.addEventListener("webglcontextlost",at,!1),e.addEventListener("webglcontextrestored",St,!1),e.addEventListener("webglcontextcreationerror",wt,!1),S===null){const O="webgl2";if(S=st(O,b),S===null)throw st(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let q,Z,nt,rt,tt,y,_,P,k,J,X,dt,ut,ft,Ut,ht,Mt,Pt,Ot,_t,Ht,Vt,oe,N;function bt(){q=new ny(S),q.init(),Vt=new HM(S,q),Z=new jx(S,q,t,Vt),nt=new BM(S),Z.reverseDepthBuffer&&nt.buffers.depth.setReversed(!0),rt=new ry(S),tt=new EM,y=new zM(S,q,nt,tt,Z,Vt,rt),_=new Zx(M),P=new ey(M),k=new f_(S),oe=new $x(S,k),J=new iy(S,k,rt,oe),X=new ay(S,J,k,rt),Ot=new oy(S,Z,y),ht=new Jx(tt),dt=new SM(M,_,P,q,Z,oe,ht),ut=new KM(M,tt),ft=new wM,Ut=new LM(q),Pt=new qx(M,_,P,nt,X,f,l),Mt=new OM(M,X,Z),N=new jM(S,rt,Z,nt),_t=new Kx(S,q,rt),Ht=new sy(S,q,rt),rt.programs=dt.programs,M.capabilities=Z,M.extensions=q,M.properties=tt,M.renderLists=ft,M.shadowMap=Mt,M.state=nt,M.info=rt}bt();const et=new qM(M,S);this.xr=et,this.getContext=function(){return S},this.getContextAttributes=function(){return S.getContextAttributes()},this.forceContextLoss=function(){const b=q.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=q.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return it},this.setPixelRatio=function(b){b!==void 0&&(it=b,this.setSize(lt,V,!1))},this.getSize=function(b){return b.set(lt,V)},this.setSize=function(b,O,W=!0){if(et.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}lt=b,V=O,e.width=Math.floor(b*it),e.height=Math.floor(O*it),W===!0&&(e.style.width=b+"px",e.style.height=O+"px"),this.setViewport(0,0,b,O)},this.getDrawingBufferSize=function(b){return b.set(lt*it,V*it).floor()},this.setDrawingBufferSize=function(b,O,W){lt=b,V=O,it=W,e.width=Math.floor(b*W),e.height=Math.floor(O*W),this.setViewport(0,0,b,O)},this.getCurrentViewport=function(b){return b.copy(x)},this.getViewport=function(b){return b.copy(ot)},this.setViewport=function(b,O,W,$){b.isVector4?ot.set(b.x,b.y,b.z,b.w):ot.set(b,O,W,$),nt.viewport(x.copy(ot).multiplyScalar(it).round())},this.getScissor=function(b){return b.copy(L)},this.setScissor=function(b,O,W,$){b.isVector4?L.set(b.x,b.y,b.z,b.w):L.set(b,O,W,$),nt.scissor(w.copy(L).multiplyScalar(it).round())},this.getScissorTest=function(){return It},this.setScissorTest=function(b){nt.setScissorTest(It=b)},this.setOpaqueSort=function(b){H=b},this.setTransparentSort=function(b){gt=b},this.getClearColor=function(b){return b.copy(Pt.getClearColor())},this.setClearColor=function(){Pt.setClearColor.apply(Pt,arguments)},this.getClearAlpha=function(){return Pt.getClearAlpha()},this.setClearAlpha=function(){Pt.setClearAlpha.apply(Pt,arguments)},this.clear=function(b=!0,O=!0,W=!0){let $=0;if(b){let B=!1;if(R!==null){const pt=R.texture.format;B=pt===Vc||pt===Hc||pt===zc}if(B){const pt=R.texture.type,Et=pt===ci||pt===ns||pt===Rr||pt===ks||pt===Bc||pt===kc,At=Pt.getClearColor(),Rt=Pt.getClearAlpha(),Ft=At.r,kt=At.g,Ct=At.b;Et?(d[0]=Ft,d[1]=kt,d[2]=Ct,d[3]=Rt,S.clearBufferuiv(S.COLOR,0,d)):(g[0]=Ft,g[1]=kt,g[2]=Ct,g[3]=Rt,S.clearBufferiv(S.COLOR,0,g))}else $|=S.COLOR_BUFFER_BIT}O&&($|=S.DEPTH_BUFFER_BIT,S.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),W&&($|=S.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),S.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",at,!1),e.removeEventListener("webglcontextrestored",St,!1),e.removeEventListener("webglcontextcreationerror",wt,!1),ft.dispose(),Ut.dispose(),tt.dispose(),_.dispose(),P.dispose(),X.dispose(),oe.dispose(),N.dispose(),dt.dispose(),et.dispose(),et.removeEventListener("sessionstart",ru),et.removeEventListener("sessionend",ou),Ui.stop()};function at(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function St(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const b=rt.autoReset,O=Mt.enabled,W=Mt.autoUpdate,$=Mt.needsUpdate,B=Mt.type;bt(),rt.autoReset=b,Mt.enabled=O,Mt.autoUpdate=W,Mt.needsUpdate=$,Mt.type=B}function wt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Zt(b){const O=b.target;O.removeEventListener("dispose",Zt),Ee(O)}function Ee(b){Ye(b),tt.remove(b)}function Ye(b){const O=tt.get(b).programs;O!==void 0&&(O.forEach(function(W){dt.releaseProgram(W)}),b.isShaderMaterial&&dt.releaseShaderCache(b))}this.renderBufferDirect=function(b,O,W,$,B,pt){O===null&&(O=Jt);const Et=B.isMesh&&B.matrixWorld.determinant()<0,At=ip(b,O,W,$,B);nt.setMaterial($,Et);let Rt=W.index,Ft=1;if($.wireframe===!0){if(Rt=J.getWireframeAttribute(W),Rt===void 0)return;Ft=2}const kt=W.drawRange,Ct=W.attributes.position;let ae=kt.start*Ft,de=(kt.start+kt.count)*Ft;pt!==null&&(ae=Math.max(ae,pt.start*Ft),de=Math.min(de,(pt.start+pt.count)*Ft)),Rt!==null?(ae=Math.max(ae,0),de=Math.min(de,Rt.count)):Ct!=null&&(ae=Math.max(ae,0),de=Math.min(de,Ct.count));const ve=de-ae;if(ve<0||ve===1/0)return;oe.setup(B,$,At,W,Rt);let Ze,ne=_t;if(Rt!==null&&(Ze=k.get(Rt),ne=Ht,ne.setIndex(Ze)),B.isMesh)$.wireframe===!0?(nt.setLineWidth($.wireframeLinewidth*C()),ne.setMode(S.LINES)):ne.setMode(S.TRIANGLES);else if(B.isLine){let Lt=$.linewidth;Lt===void 0&&(Lt=1),nt.setLineWidth(Lt*C()),B.isLineSegments?ne.setMode(S.LINES):B.isLineLoop?ne.setMode(S.LINE_LOOP):ne.setMode(S.LINE_STRIP)}else B.isPoints?ne.setMode(S.POINTS):B.isSprite&&ne.setMode(S.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)ne.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(q.get("WEBGL_multi_draw"))ne.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Lt=B._multiDrawStarts,Pe=B._multiDrawCounts,ie=B._multiDrawCount,vn=Rt?k.get(Rt).bytesPerElement:1,ls=tt.get($).currentProgram.getUniforms();for(let Qe=0;Qe<ie;Qe++)ls.setValue(S,"_gl_DrawID",Qe),ne.render(Lt[Qe]/vn,Pe[Qe])}else if(B.isInstancedMesh)ne.renderInstances(ae,ve,B.count);else if(W.isInstancedBufferGeometry){const Lt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Pe=Math.min(W.instanceCount,Lt);ne.renderInstances(ae,ve,Pe)}else ne.render(ae,ve)};function Qt(b,O,W){b.transparent===!0&&b.side===rn&&b.forceSinglePass===!1?(b.side=Je,b.needsUpdate=!0,Hr(b,O,W),b.side=Li,b.needsUpdate=!0,Hr(b,O,W),b.side=rn):Hr(b,O,W)}this.compile=function(b,O,W=null){W===null&&(W=b),m=Ut.get(W),m.init(O),T.push(m),W.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),b!==W&&b.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),m.setupLights();const $=new Set;return b.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const pt=B.material;if(pt)if(Array.isArray(pt))for(let Et=0;Et<pt.length;Et++){const At=pt[Et];Qt(At,W,B),$.add(At)}else Qt(pt,W,B),$.add(pt)}),T.pop(),m=null,$},this.compileAsync=function(b,O,W=null){const $=this.compile(b,O,W);return new Promise(B=>{function pt(){if($.forEach(function(Et){tt.get(Et).currentProgram.isReady()&&$.delete(Et)}),$.size===0){B(b);return}setTimeout(pt,10)}q.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let qe=null;function Xn(b){qe&&qe(b)}function ru(){Ui.stop()}function ou(){Ui.start()}const Ui=new Hd;Ui.setAnimationLoop(Xn),typeof self<"u"&&Ui.setContext(self),this.setAnimationLoop=function(b){qe=b,et.setAnimationLoop(b),b===null?Ui.stop():Ui.start()},et.addEventListener("sessionstart",ru),et.addEventListener("sessionend",ou),this.render=function(b,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),et.enabled===!0&&et.isPresenting===!0&&(et.cameraAutoUpdate===!0&&et.updateCamera(O),O=et.getCamera()),b.isScene===!0&&b.onBeforeRender(M,b,O,R),m=Ut.get(b,T.length),m.init(O),T.push(m),xt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),$t.setFromProjectionMatrix(xt),j=this.localClippingEnabled,D=ht.init(this.clippingPlanes,j),v=ft.get(b,p.length),v.init(),p.push(v),et.enabled===!0&&et.isPresenting===!0){const pt=M.xr.getDepthSensingMesh();pt!==null&&ha(pt,O,-1/0,M.sortObjects)}ha(b,O,0,M.sortObjects),v.finish(),M.sortObjects===!0&&v.sort(H,gt),A=et.enabled===!1||et.isPresenting===!1||et.hasDepthSensing()===!1,A&&Pt.addToRenderList(v,b),this.info.render.frame++,D===!0&&ht.beginShadows();const W=m.state.shadowsArray;Mt.render(W,b,O),D===!0&&ht.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=v.opaque,B=v.transmissive;if(m.setupLights(),O.isArrayCamera){const pt=O.cameras;if(B.length>0)for(let Et=0,At=pt.length;Et<At;Et++){const Rt=pt[Et];lu($,B,b,Rt)}A&&Pt.render(b);for(let Et=0,At=pt.length;Et<At;Et++){const Rt=pt[Et];au(v,b,Rt,Rt.viewport)}}else B.length>0&&lu($,B,b,O),A&&Pt.render(b),au(v,b,O);R!==null&&(y.updateMultisampleRenderTarget(R),y.updateRenderTargetMipmap(R)),b.isScene===!0&&b.onAfterRender(M,b,O),oe.resetDefaultState(),z=-1,ct=null,T.pop(),T.length>0?(m=T[T.length-1],D===!0&&ht.setGlobalState(M.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function ha(b,O,W,$){if(b.visible===!1)return;if(b.layers.test(O.layers)){if(b.isGroup)W=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(O);else if(b.isLight)m.pushLight(b),b.castShadow&&m.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||$t.intersectsSprite(b)){$&&Dt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(xt);const Et=X.update(b),At=b.material;At.visible&&v.push(b,Et,At,W,Dt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||$t.intersectsObject(b))){const Et=X.update(b),At=b.material;if($&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Dt.copy(b.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),Dt.copy(Et.boundingSphere.center)),Dt.applyMatrix4(b.matrixWorld).applyMatrix4(xt)),Array.isArray(At)){const Rt=Et.groups;for(let Ft=0,kt=Rt.length;Ft<kt;Ft++){const Ct=Rt[Ft],ae=At[Ct.materialIndex];ae&&ae.visible&&v.push(b,Et,ae,W,Dt.z,Ct)}}else At.visible&&v.push(b,Et,At,W,Dt.z,null)}}const pt=b.children;for(let Et=0,At=pt.length;Et<At;Et++)ha(pt[Et],O,W,$)}function au(b,O,W,$){const B=b.opaque,pt=b.transmissive,Et=b.transparent;m.setupLightsView(W),D===!0&&ht.setGlobalState(M.clippingPlanes,W),$&&nt.viewport(x.copy($)),B.length>0&&zr(B,O,W),pt.length>0&&zr(pt,O,W),Et.length>0&&zr(Et,O,W),nt.buffers.depth.setTest(!0),nt.buffers.depth.setMask(!0),nt.buffers.color.setMask(!0),nt.setPolygonOffset(!1)}function lu(b,O,W,$){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[$.id]===void 0&&(m.state.transmissionRenderTarget[$.id]=new is(1,1,{generateMipmaps:!0,type:q.has("EXT_color_buffer_half_float")||q.has("EXT_color_buffer_float")?Fr:ci,minFilter:Zi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:re.workingColorSpace}));const pt=m.state.transmissionRenderTarget[$.id],Et=$.viewport||x;pt.setSize(Et.z,Et.w);const At=M.getRenderTarget();M.setRenderTarget(pt),M.getClearColor(Y),Q=M.getClearAlpha(),Q<1&&M.setClearColor(16777215,.5),M.clear(),A&&Pt.render(W);const Rt=M.toneMapping;M.toneMapping=Ri;const Ft=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),m.setupLightsView($),D===!0&&ht.setGlobalState(M.clippingPlanes,$),zr(b,W,$),y.updateMultisampleRenderTarget(pt),y.updateRenderTargetMipmap(pt),q.has("WEBGL_multisampled_render_to_texture")===!1){let kt=!1;for(let Ct=0,ae=O.length;Ct<ae;Ct++){const de=O[Ct],ve=de.object,Ze=de.geometry,ne=de.material,Lt=de.group;if(ne.side===rn&&ve.layers.test($.layers)){const Pe=ne.side;ne.side=Je,ne.needsUpdate=!0,cu(ve,W,$,Ze,ne,Lt),ne.side=Pe,ne.needsUpdate=!0,kt=!0}}kt===!0&&(y.updateMultisampleRenderTarget(pt),y.updateRenderTargetMipmap(pt))}M.setRenderTarget(At),M.setClearColor(Y,Q),Ft!==void 0&&($.viewport=Ft),M.toneMapping=Rt}function zr(b,O,W){const $=O.isScene===!0?O.overrideMaterial:null;for(let B=0,pt=b.length;B<pt;B++){const Et=b[B],At=Et.object,Rt=Et.geometry,Ft=$===null?Et.material:$,kt=Et.group;At.layers.test(W.layers)&&cu(At,O,W,Rt,Ft,kt)}}function cu(b,O,W,$,B,pt){b.onBeforeRender(M,O,W,$,B,pt),b.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),B.onBeforeRender(M,O,W,$,b,pt),B.transparent===!0&&B.side===rn&&B.forceSinglePass===!1?(B.side=Je,B.needsUpdate=!0,M.renderBufferDirect(W,O,$,B,b,pt),B.side=Li,B.needsUpdate=!0,M.renderBufferDirect(W,O,$,B,b,pt),B.side=rn):M.renderBufferDirect(W,O,$,B,b,pt),b.onAfterRender(M,O,W,$,B,pt)}function Hr(b,O,W){O.isScene!==!0&&(O=Jt);const $=tt.get(b),B=m.state.lights,pt=m.state.shadowsArray,Et=B.state.version,At=dt.getParameters(b,B.state,pt,O,W),Rt=dt.getProgramCacheKey(At);let Ft=$.programs;$.environment=b.isMeshStandardMaterial?O.environment:null,$.fog=O.fog,$.envMap=(b.isMeshStandardMaterial?P:_).get(b.envMap||$.environment),$.envMapRotation=$.environment!==null&&b.envMap===null?O.environmentRotation:b.envMapRotation,Ft===void 0&&(b.addEventListener("dispose",Zt),Ft=new Map,$.programs=Ft);let kt=Ft.get(Rt);if(kt!==void 0){if($.currentProgram===kt&&$.lightsStateVersion===Et)return hu(b,At),kt}else At.uniforms=dt.getUniforms(b),b.onBeforeCompile(At,M),kt=dt.acquireProgram(At,Rt),Ft.set(Rt,kt),$.uniforms=At.uniforms;const Ct=$.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ct.clippingPlanes=ht.uniform),hu(b,At),$.needsLights=rp(b),$.lightsStateVersion=Et,$.needsLights&&(Ct.ambientLightColor.value=B.state.ambient,Ct.lightProbe.value=B.state.probe,Ct.directionalLights.value=B.state.directional,Ct.directionalLightShadows.value=B.state.directionalShadow,Ct.spotLights.value=B.state.spot,Ct.spotLightShadows.value=B.state.spotShadow,Ct.rectAreaLights.value=B.state.rectArea,Ct.ltc_1.value=B.state.rectAreaLTC1,Ct.ltc_2.value=B.state.rectAreaLTC2,Ct.pointLights.value=B.state.point,Ct.pointLightShadows.value=B.state.pointShadow,Ct.hemisphereLights.value=B.state.hemi,Ct.directionalShadowMap.value=B.state.directionalShadowMap,Ct.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ct.spotShadowMap.value=B.state.spotShadowMap,Ct.spotLightMatrix.value=B.state.spotLightMatrix,Ct.spotLightMap.value=B.state.spotLightMap,Ct.pointShadowMap.value=B.state.pointShadowMap,Ct.pointShadowMatrix.value=B.state.pointShadowMatrix),$.currentProgram=kt,$.uniformsList=null,kt}function uu(b){if(b.uniformsList===null){const O=b.currentProgram.getUniforms();b.uniformsList=Po.seqWithValue(O.seq,b.uniforms)}return b.uniformsList}function hu(b,O){const W=tt.get(b);W.outputColorSpace=O.outputColorSpace,W.batching=O.batching,W.batchingColor=O.batchingColor,W.instancing=O.instancing,W.instancingColor=O.instancingColor,W.instancingMorph=O.instancingMorph,W.skinning=O.skinning,W.morphTargets=O.morphTargets,W.morphNormals=O.morphNormals,W.morphColors=O.morphColors,W.morphTargetsCount=O.morphTargetsCount,W.numClippingPlanes=O.numClippingPlanes,W.numIntersection=O.numClipIntersection,W.vertexAlphas=O.vertexAlphas,W.vertexTangents=O.vertexTangents,W.toneMapping=O.toneMapping}function ip(b,O,W,$,B){O.isScene!==!0&&(O=Jt),y.resetTextureUnits();const pt=O.fog,Et=$.isMeshStandardMaterial?O.environment:null,At=R===null?M.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Di,Rt=($.isMeshStandardMaterial?P:_).get($.envMap||Et),Ft=$.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,kt=!!W.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ct=!!W.morphAttributes.position,ae=!!W.morphAttributes.normal,de=!!W.morphAttributes.color;let ve=Ri;$.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(ve=M.toneMapping);const Ze=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ne=Ze!==void 0?Ze.length:0,Lt=tt.get($),Pe=m.state.lights;if(D===!0&&(j===!0||b!==ct)){const cn=b===ct&&$.id===z;ht.setState($,b,cn)}let ie=!1;$.version===Lt.__version?(Lt.needsLights&&Lt.lightsStateVersion!==Pe.state.version||Lt.outputColorSpace!==At||B.isBatchedMesh&&Lt.batching===!1||!B.isBatchedMesh&&Lt.batching===!0||B.isBatchedMesh&&Lt.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Lt.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Lt.instancing===!1||!B.isInstancedMesh&&Lt.instancing===!0||B.isSkinnedMesh&&Lt.skinning===!1||!B.isSkinnedMesh&&Lt.skinning===!0||B.isInstancedMesh&&Lt.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Lt.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Lt.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Lt.instancingMorph===!1&&B.morphTexture!==null||Lt.envMap!==Rt||$.fog===!0&&Lt.fog!==pt||Lt.numClippingPlanes!==void 0&&(Lt.numClippingPlanes!==ht.numPlanes||Lt.numIntersection!==ht.numIntersection)||Lt.vertexAlphas!==Ft||Lt.vertexTangents!==kt||Lt.morphTargets!==Ct||Lt.morphNormals!==ae||Lt.morphColors!==de||Lt.toneMapping!==ve||Lt.morphTargetsCount!==ne)&&(ie=!0):(ie=!0,Lt.__version=$.version);let vn=Lt.currentProgram;ie===!0&&(vn=Hr($,O,B));let ls=!1,Qe=!1,fa=!1;const Me=vn.getUniforms(),fi=Lt.uniforms;if(nt.useProgram(vn.program)&&(ls=!0,Qe=!0,fa=!0),$.id!==z&&(z=$.id,Qe=!0),ls||ct!==b){Z.reverseDepthBuffer?(vt.copy(b.projectionMatrix),z0(vt),H0(vt),Me.setValue(S,"projectionMatrix",vt)):Me.setValue(S,"projectionMatrix",b.projectionMatrix),Me.setValue(S,"viewMatrix",b.matrixWorldInverse);const cn=Me.map.cameraPosition;cn!==void 0&&cn.setValue(S,zt.setFromMatrixPosition(b.matrixWorld)),Z.logarithmicDepthBuffer&&Me.setValue(S,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Me.setValue(S,"isOrthographic",b.isOrthographicCamera===!0),ct!==b&&(ct=b,Qe=!0,fa=!0)}if(B.isSkinnedMesh){Me.setOptional(S,B,"bindMatrix"),Me.setOptional(S,B,"bindMatrixInverse");const cn=B.skeleton;cn&&(cn.boneTexture===null&&cn.computeBoneTexture(),Me.setValue(S,"boneTexture",cn.boneTexture,y))}B.isBatchedMesh&&(Me.setOptional(S,B,"batchingTexture"),Me.setValue(S,"batchingTexture",B._matricesTexture,y),Me.setOptional(S,B,"batchingIdTexture"),Me.setValue(S,"batchingIdTexture",B._indirectTexture,y),Me.setOptional(S,B,"batchingColorTexture"),B._colorsTexture!==null&&Me.setValue(S,"batchingColorTexture",B._colorsTexture,y));const da=W.morphAttributes;if((da.position!==void 0||da.normal!==void 0||da.color!==void 0)&&Ot.update(B,W,vn),(Qe||Lt.receiveShadow!==B.receiveShadow)&&(Lt.receiveShadow=B.receiveShadow,Me.setValue(S,"receiveShadow",B.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(fi.envMap.value=Rt,fi.flipEnvMap.value=Rt.isCubeTexture&&Rt.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&O.environment!==null&&(fi.envMapIntensity.value=O.environmentIntensity),Qe&&(Me.setValue(S,"toneMappingExposure",M.toneMappingExposure),Lt.needsLights&&sp(fi,fa),pt&&$.fog===!0&&ut.refreshFogUniforms(fi,pt),ut.refreshMaterialUniforms(fi,$,it,V,m.state.transmissionRenderTarget[b.id]),Po.upload(S,uu(Lt),fi,y)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Po.upload(S,uu(Lt),fi,y),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Me.setValue(S,"center",B.center),Me.setValue(S,"modelViewMatrix",B.modelViewMatrix),Me.setValue(S,"normalMatrix",B.normalMatrix),Me.setValue(S,"modelMatrix",B.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const cn=$.uniformsGroups;for(let pa=0,op=cn.length;pa<op;pa++){const fu=cn[pa];N.update(fu,vn),N.bind(fu,vn)}}return vn}function sp(b,O){b.ambientLightColor.needsUpdate=O,b.lightProbe.needsUpdate=O,b.directionalLights.needsUpdate=O,b.directionalLightShadows.needsUpdate=O,b.pointLights.needsUpdate=O,b.pointLightShadows.needsUpdate=O,b.spotLights.needsUpdate=O,b.spotLightShadows.needsUpdate=O,b.rectAreaLights.needsUpdate=O,b.hemisphereLights.needsUpdate=O}function rp(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(b,O,W){tt.get(b.texture).__webglTexture=O,tt.get(b.depthTexture).__webglTexture=W;const $=tt.get(b);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=W===void 0,$.__autoAllocateDepthBuffer||q.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,O){const W=tt.get(b);W.__webglFramebuffer=O,W.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(b,O=0,W=0){R=b,F=O,I=W;let $=!0,B=null,pt=!1,Et=!1;if(b){const Rt=tt.get(b);if(Rt.__useDefaultFramebuffer!==void 0)nt.bindFramebuffer(S.FRAMEBUFFER,null),$=!1;else if(Rt.__webglFramebuffer===void 0)y.setupRenderTarget(b);else if(Rt.__hasExternalTextures)y.rebindTextures(b,tt.get(b.texture).__webglTexture,tt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Ct=b.depthTexture;if(Rt.__boundDepthTexture!==Ct){if(Ct!==null&&tt.has(Ct)&&(b.width!==Ct.image.width||b.height!==Ct.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");y.setupDepthRenderbuffer(b)}}const Ft=b.texture;(Ft.isData3DTexture||Ft.isDataArrayTexture||Ft.isCompressedArrayTexture)&&(Et=!0);const kt=tt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(kt[O])?B=kt[O][W]:B=kt[O],pt=!0):b.samples>0&&y.useMultisampledRTT(b)===!1?B=tt.get(b).__webglMultisampledFramebuffer:Array.isArray(kt)?B=kt[W]:B=kt,x.copy(b.viewport),w.copy(b.scissor),K=b.scissorTest}else x.copy(ot).multiplyScalar(it).floor(),w.copy(L).multiplyScalar(it).floor(),K=It;if(nt.bindFramebuffer(S.FRAMEBUFFER,B)&&$&&nt.drawBuffers(b,B),nt.viewport(x),nt.scissor(w),nt.setScissorTest(K),pt){const Rt=tt.get(b.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_CUBE_MAP_POSITIVE_X+O,Rt.__webglTexture,W)}else if(Et){const Rt=tt.get(b.texture),Ft=O||0;S.framebufferTextureLayer(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,Rt.__webglTexture,W||0,Ft)}z=-1},this.readRenderTargetPixels=function(b,O,W,$,B,pt,Et){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=tt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Et!==void 0&&(At=At[Et]),At){nt.bindFramebuffer(S.FRAMEBUFFER,At);try{const Rt=b.texture,Ft=Rt.format,kt=Rt.type;if(!Z.textureFormatReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Z.textureTypeReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=b.width-$&&W>=0&&W<=b.height-B&&S.readPixels(O,W,$,B,Vt.convert(Ft),Vt.convert(kt),pt)}finally{const Rt=R!==null?tt.get(R).__webglFramebuffer:null;nt.bindFramebuffer(S.FRAMEBUFFER,Rt)}}},this.readRenderTargetPixelsAsync=async function(b,O,W,$,B,pt,Et){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=tt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Et!==void 0&&(At=At[Et]),At){const Rt=b.texture,Ft=Rt.format,kt=Rt.type;if(!Z.textureFormatReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Z.textureTypeReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=b.width-$&&W>=0&&W<=b.height-B){nt.bindFramebuffer(S.FRAMEBUFFER,At);const Ct=S.createBuffer();S.bindBuffer(S.PIXEL_PACK_BUFFER,Ct),S.bufferData(S.PIXEL_PACK_BUFFER,pt.byteLength,S.STREAM_READ),S.readPixels(O,W,$,B,Vt.convert(Ft),Vt.convert(kt),0);const ae=R!==null?tt.get(R).__webglFramebuffer:null;nt.bindFramebuffer(S.FRAMEBUFFER,ae);const de=S.fenceSync(S.SYNC_GPU_COMMANDS_COMPLETE,0);return S.flush(),await k0(S,de,4),S.bindBuffer(S.PIXEL_PACK_BUFFER,Ct),S.getBufferSubData(S.PIXEL_PACK_BUFFER,0,pt),S.deleteBuffer(Ct),S.deleteSync(de),pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,O=null,W=0){b.isTexture!==!0&&(Co("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,b=arguments[1]);const $=Math.pow(2,-W),B=Math.floor(b.image.width*$),pt=Math.floor(b.image.height*$),Et=O!==null?O.x:0,At=O!==null?O.y:0;y.setTexture2D(b,0),S.copyTexSubImage2D(S.TEXTURE_2D,W,0,0,Et,At,B,pt),nt.unbindTexture()},this.copyTextureToTexture=function(b,O,W=null,$=null,B=0){b.isTexture!==!0&&(Co("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,b=arguments[1],O=arguments[2],B=arguments[3]||0,W=null);let pt,Et,At,Rt,Ft,kt;W!==null?(pt=W.max.x-W.min.x,Et=W.max.y-W.min.y,At=W.min.x,Rt=W.min.y):(pt=b.image.width,Et=b.image.height,At=0,Rt=0),$!==null?(Ft=$.x,kt=$.y):(Ft=0,kt=0);const Ct=Vt.convert(O.format),ae=Vt.convert(O.type);y.setTexture2D(O,0),S.pixelStorei(S.UNPACK_FLIP_Y_WEBGL,O.flipY),S.pixelStorei(S.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),S.pixelStorei(S.UNPACK_ALIGNMENT,O.unpackAlignment);const de=S.getParameter(S.UNPACK_ROW_LENGTH),ve=S.getParameter(S.UNPACK_IMAGE_HEIGHT),Ze=S.getParameter(S.UNPACK_SKIP_PIXELS),ne=S.getParameter(S.UNPACK_SKIP_ROWS),Lt=S.getParameter(S.UNPACK_SKIP_IMAGES),Pe=b.isCompressedTexture?b.mipmaps[B]:b.image;S.pixelStorei(S.UNPACK_ROW_LENGTH,Pe.width),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,Pe.height),S.pixelStorei(S.UNPACK_SKIP_PIXELS,At),S.pixelStorei(S.UNPACK_SKIP_ROWS,Rt),b.isDataTexture?S.texSubImage2D(S.TEXTURE_2D,B,Ft,kt,pt,Et,Ct,ae,Pe.data):b.isCompressedTexture?S.compressedTexSubImage2D(S.TEXTURE_2D,B,Ft,kt,Pe.width,Pe.height,Ct,Pe.data):S.texSubImage2D(S.TEXTURE_2D,B,Ft,kt,pt,Et,Ct,ae,Pe),S.pixelStorei(S.UNPACK_ROW_LENGTH,de),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,ve),S.pixelStorei(S.UNPACK_SKIP_PIXELS,Ze),S.pixelStorei(S.UNPACK_SKIP_ROWS,ne),S.pixelStorei(S.UNPACK_SKIP_IMAGES,Lt),B===0&&O.generateMipmaps&&S.generateMipmap(S.TEXTURE_2D),nt.unbindTexture()},this.copyTextureToTexture3D=function(b,O,W=null,$=null,B=0){b.isTexture!==!0&&(Co("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,$=arguments[1]||null,b=arguments[2],O=arguments[3],B=arguments[4]||0);let pt,Et,At,Rt,Ft,kt,Ct,ae,de;const ve=b.isCompressedTexture?b.mipmaps[B]:b.image;W!==null?(pt=W.max.x-W.min.x,Et=W.max.y-W.min.y,At=W.max.z-W.min.z,Rt=W.min.x,Ft=W.min.y,kt=W.min.z):(pt=ve.width,Et=ve.height,At=ve.depth,Rt=0,Ft=0,kt=0),$!==null?(Ct=$.x,ae=$.y,de=$.z):(Ct=0,ae=0,de=0);const Ze=Vt.convert(O.format),ne=Vt.convert(O.type);let Lt;if(O.isData3DTexture)y.setTexture3D(O,0),Lt=S.TEXTURE_3D;else if(O.isDataArrayTexture||O.isCompressedArrayTexture)y.setTexture2DArray(O,0),Lt=S.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}S.pixelStorei(S.UNPACK_FLIP_Y_WEBGL,O.flipY),S.pixelStorei(S.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),S.pixelStorei(S.UNPACK_ALIGNMENT,O.unpackAlignment);const Pe=S.getParameter(S.UNPACK_ROW_LENGTH),ie=S.getParameter(S.UNPACK_IMAGE_HEIGHT),vn=S.getParameter(S.UNPACK_SKIP_PIXELS),ls=S.getParameter(S.UNPACK_SKIP_ROWS),Qe=S.getParameter(S.UNPACK_SKIP_IMAGES);S.pixelStorei(S.UNPACK_ROW_LENGTH,ve.width),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,ve.height),S.pixelStorei(S.UNPACK_SKIP_PIXELS,Rt),S.pixelStorei(S.UNPACK_SKIP_ROWS,Ft),S.pixelStorei(S.UNPACK_SKIP_IMAGES,kt),b.isDataTexture||b.isData3DTexture?S.texSubImage3D(Lt,B,Ct,ae,de,pt,Et,At,Ze,ne,ve.data):O.isCompressedArrayTexture?S.compressedTexSubImage3D(Lt,B,Ct,ae,de,pt,Et,At,Ze,ve.data):S.texSubImage3D(Lt,B,Ct,ae,de,pt,Et,At,Ze,ne,ve),S.pixelStorei(S.UNPACK_ROW_LENGTH,Pe),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,ie),S.pixelStorei(S.UNPACK_SKIP_PIXELS,vn),S.pixelStorei(S.UNPACK_SKIP_ROWS,ls),S.pixelStorei(S.UNPACK_SKIP_IMAGES,Qe),B===0&&O.generateMipmaps&&S.generateMipmap(Lt),nt.unbindTexture()},this.initRenderTarget=function(b){tt.get(b).__webglFramebuffer===void 0&&y.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?y.setTextureCube(b,0):b.isData3DTexture?y.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?y.setTexture2DArray(b,0):y.setTexture2D(b,0),nt.unbindTexture()},this.resetState=function(){F=0,I=0,R=null,nt.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Gc?"display-p3":"srgb",e.unpackColorSpace=re.workingColorSpace===oa?"display-p3":"srgb"}}class Kc{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new jt(t),this.near=e,this.far=i}clone(){return new Kc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}let ZM=class extends Ce{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gn,this.environmentIntensity=1,this.environmentRotation=new Gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};class dc extends os{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new jt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Gh=new fe,pc=new Wc,go=new aa,_o=new U;class ll extends Ce{constructor(t=new Xe,e=new dc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),go.copy(i.boundingSphere),go.applyMatrix4(s),go.radius+=r,t.ray.intersectsSphere(go)===!1)return;Gh.copy(s).invert(),pc.copy(t.ray).applyMatrix4(Gh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,u=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,v=d;g<v;g++){const m=c.getX(g);_o.fromBufferAttribute(u,m),Wh(_o,m,l,s,t,e,this)}}else{const f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let g=f,v=d;g<v;g++)_o.fromBufferAttribute(u,g),Wh(_o,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Wh(n,t,e,i,s,r,o){const a=pc.distanceSqToPoint(n);if(a<e){const l=new U;pc.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class jc extends We{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Wn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let s=0;const r=i.length;let o;e?o=e:o=t*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);const h=i[s],f=i[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new Tt:new U);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new U,s=[],r=[],o=[],a=new U,l=new fe;for(let d=0;d<=t;d++){const g=d/t;s[d]=this.getTangentAt(g,new U)}r[0]=new U,o[0]=new U;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Oe(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(Oe(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Jc extends Wn{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Tt){const i=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class QM extends Jc{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Zc(){let n=0,t=0,e=0,i=0;function s(r,o,a,l){n=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){const o=r*r,a=o*r;return n+t*r+e*o+i*a}}}const vo=new U,cl=new Zc,ul=new Zc,hl=new Zc;class tS extends Wn{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new U){const i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(vo.subVectors(s[0],s[1]).add(s[0]),c=vo);const u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(vo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=vo),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),d),v=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),cl.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,v,m),ul.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,v,m),hl.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(cl.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),ul.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),hl.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return i.set(cl.calc(l),ul.calc(l),hl.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new U().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Xh(n,t,e,i,s){const r=(i-t)*.5,o=(s-e)*.5,a=n*n,l=n*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*n+e}function eS(n,t){const e=1-n;return e*e*t}function nS(n,t){return 2*(1-n)*n*t}function iS(n,t){return n*n*t}function mr(n,t,e,i){return eS(n,t)+nS(n,e)+iS(n,i)}function sS(n,t){const e=1-n;return e*e*e*t}function rS(n,t){const e=1-n;return 3*e*e*n*t}function oS(n,t){return 3*(1-n)*n*n*t}function aS(n,t){return n*n*n*t}function gr(n,t,e,i,s){return sS(n,t)+rS(n,e)+oS(n,i)+aS(n,s)}class qd extends Wn{constructor(t=new Tt,e=new Tt,i=new Tt,s=new Tt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new Tt){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(gr(t,s.x,r.x,o.x,a.x),gr(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class lS extends Wn{constructor(t=new U,e=new U,i=new U,s=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new U){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(gr(t,s.x,r.x,o.x,a.x),gr(t,s.y,r.y,o.y,a.y),gr(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class $d extends Wn{constructor(t=new Tt,e=new Tt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Tt){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Tt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class cS extends Wn{constructor(t=new U,e=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new U){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new U){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Kd extends Wn{constructor(t=new Tt,e=new Tt,i=new Tt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new Tt){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(mr(t,s.x,r.x,o.x),mr(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class uS extends Wn{constructor(t=new U,e=new U,i=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new U){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(mr(t,s.x,r.x,o.x),mr(t,s.y,r.y,o.y),mr(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class jd extends Wn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Tt){const i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(Xh(a,l.x,c.x,h.x,u.x),Xh(a,l.y,c.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new Tt().fromArray(s))}return this}}var Yh=Object.freeze({__proto__:null,ArcCurve:QM,CatmullRomCurve3:tS,CubicBezierCurve:qd,CubicBezierCurve3:lS,EllipseCurve:Jc,LineCurve:$d,LineCurve3:cS,QuadraticBezierCurve:Kd,QuadraticBezierCurve3:uS,SplineCurve:jd});class hS extends Wn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Yh[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(new Yh[s.type]().fromJSON(s))}return this}}class qh extends hS{constructor(t){super(),this.type="Path",this.currentPoint=new Tt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new $d(this.currentPoint.clone(),new Tt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){const r=new Kd(this.currentPoint.clone(),new Tt(t,e),new Tt(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){const a=new qd(this.currentPoint.clone(),new Tt(t,e),new Tt(i,s),new Tt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new jd(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,s,r,o,a,l),this}absellipse(t,e,i,s,r,o,a,l){const c=new Jc(t,e,i,s,r,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Qc extends Xe{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new U,h=new Tt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const d=i+u/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ye(o,3)),this.setAttribute("normal",new ye(a,3)),this.setAttribute("uv",new ye(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qc(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class tu extends Xe{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],f=[],d=[];let g=0;const v=[],m=i/2;let p=0;T(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new ye(u,3)),this.setAttribute("normal",new ye(f,3)),this.setAttribute("uv",new ye(d,2));function T(){const E=new U,F=new U;let I=0;const R=(e-t)/i;for(let z=0;z<=r;z++){const ct=[],x=z/r,w=x*(e-t)+t;for(let K=0;K<=s;K++){const Y=K/s,Q=Y*l+a,lt=Math.sin(Q),V=Math.cos(Q);F.x=w*lt,F.y=-x*i+m,F.z=w*V,u.push(F.x,F.y,F.z),E.set(lt,R,V).normalize(),f.push(E.x,E.y,E.z),d.push(Y,1-x),ct.push(g++)}v.push(ct)}for(let z=0;z<s;z++)for(let ct=0;ct<r;ct++){const x=v[ct][z],w=v[ct+1][z],K=v[ct+1][z+1],Y=v[ct][z+1];t>0&&(h.push(x,w,Y),I+=3),e>0&&(h.push(w,K,Y),I+=3)}c.addGroup(p,I,0),p+=I}function M(E){const F=g,I=new Tt,R=new U;let z=0;const ct=E===!0?t:e,x=E===!0?1:-1;for(let K=1;K<=s;K++)u.push(0,m*x,0),f.push(0,x,0),d.push(.5,.5),g++;const w=g;for(let K=0;K<=s;K++){const Q=K/s*l+a,lt=Math.cos(Q),V=Math.sin(Q);R.x=ct*V,R.y=m*x,R.z=ct*lt,u.push(R.x,R.y,R.z),f.push(0,x,0),I.x=lt*.5+.5,I.y=V*.5*x+.5,d.push(I.x,I.y),g++}for(let K=0;K<s;K++){const Y=F+K,Q=w+K;E===!0?h.push(Q,Q+1,Y):h.push(Q+1,Q,Y),z+=3}c.addGroup(p,z,E===!0?1:2),p+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new tu(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Jd extends qh{constructor(t){super(t),this.uuid=Gs(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(new qh().fromJSON(s))}return this}}const fS={triangulate:function(n,t,e=2){const i=t&&t.length,s=i?t[0]*e:n.length;let r=Zd(n,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,f,d;if(i&&(r=_S(n,t,r,e)),n.length>80*e){a=c=n[0],l=h=n[1];for(let g=e;g<s;g+=e)u=n[g],f=n[g+1],u<a&&(a=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);d=Math.max(c-a,h-l),d=d!==0?32767/d:0}return Cr(r,o,e,a,l,d,0),o}};function Zd(n,t,e,i,s){let r,o;if(s===RS(n,t,e,i)>0)for(r=t;r<e;r+=i)o=$h(r,n[r],n[r+1],o);else for(r=e-i;r>=t;r-=i)o=$h(r,n[r],n[r+1],o);return o&&ca(o,o.next)&&(Lr(o),o=o.next),o}function ss(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(ca(e,e.next)||_e(e.prev,e,e.next)===0)){if(Lr(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Cr(n,t,e,i,s,r,o){if(!n)return;!o&&r&&SS(n,i,s,r);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?pS(n,i,s,r):dS(n)){t.push(l.i/e|0),t.push(n.i/e|0),t.push(c.i/e|0),Lr(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=mS(ss(n),t,e),Cr(n,t,e,i,s,r,2)):o===2&&gS(n,t,e,i,s,r):Cr(ss(n),t,e,i,s,r,1);break}}}function dS(n){const t=n.prev,e=n,i=n.next;if(_e(t,e,i)>=0)return!1;const s=t.x,r=e.x,o=i.x,a=t.y,l=e.y,c=i.y,h=s<r?s<o?s:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,f=s>r?s>o?s:o:r>o?r:o,d=a>l?a>c?a:c:l>c?l:c;let g=i.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&As(s,a,r,l,o,c,g.x,g.y)&&_e(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function pS(n,t,e,i){const s=n.prev,r=n,o=n.next;if(_e(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,f=o.y,d=a<l?a<c?a:c:l<c?l:c,g=h<u?h<f?h:f:u<f?u:f,v=a>l?a>c?a:c:l>c?l:c,m=h>u?h>f?h:f:u>f?u:f,p=mc(d,g,t,e,i),T=mc(v,m,t,e,i);let M=n.prevZ,E=n.nextZ;for(;M&&M.z>=p&&E&&E.z<=T;){if(M.x>=d&&M.x<=v&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&As(a,h,l,u,c,f,M.x,M.y)&&_e(M.prev,M,M.next)>=0||(M=M.prevZ,E.x>=d&&E.x<=v&&E.y>=g&&E.y<=m&&E!==s&&E!==o&&As(a,h,l,u,c,f,E.x,E.y)&&_e(E.prev,E,E.next)>=0))return!1;E=E.nextZ}for(;M&&M.z>=p;){if(M.x>=d&&M.x<=v&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&As(a,h,l,u,c,f,M.x,M.y)&&_e(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;E&&E.z<=T;){if(E.x>=d&&E.x<=v&&E.y>=g&&E.y<=m&&E!==s&&E!==o&&As(a,h,l,u,c,f,E.x,E.y)&&_e(E.prev,E,E.next)>=0)return!1;E=E.nextZ}return!0}function mS(n,t,e){let i=n;do{const s=i.prev,r=i.next.next;!ca(s,r)&&Qd(s,i,i.next,r)&&Pr(s,r)&&Pr(r,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(r.i/e|0),Lr(i),Lr(i.next),i=n=r),i=i.next}while(i!==n);return ss(i)}function gS(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&wS(o,a)){let l=tp(o,a);o=ss(o,o.next),l=ss(l,l.next),Cr(o,t,e,i,s,r,0),Cr(l,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function _S(n,t,e,i){const s=[];let r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*i,l=r<o-1?t[r+1]*i:n.length,c=Zd(n,a,l,i,!1),c===c.next&&(c.steiner=!0),s.push(bS(c));for(s.sort(vS),r=0;r<s.length;r++)e=xS(s[r],e);return e}function vS(n,t){return n.x-t.x}function xS(n,t){const e=yS(n,t);if(!e)return t;const i=tp(e,n);return ss(i,i.next),ss(e,e.next)}function yS(n,t){let e=t,i=-1/0,s;const r=n.x,o=n.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>i&&(i=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,l=s.x,c=s.y;let h=1/0,u;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&As(o<c?r:i,o,l,c,o<c?i:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),Pr(e,n)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&MS(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function MS(n,t){return _e(n.prev,n,t.prev)<0&&_e(t.next,n,n.next)<0}function SS(n,t,e,i){let s=n;do s.z===0&&(s.z=mc(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,ES(s)}function ES(n){let t,e,i,s,r,o,a,l,c=1;do{for(e=n,n=null,r=null,o=0;e;){for(o++,i=e,a=0,t=0;t<c&&(a++,i=i.nextZ,!!i);t++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,a--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;e=i}r.nextZ=null,c*=2}while(o>1);return n}function mc(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function bS(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function As(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function wS(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!TS(n,t)&&(Pr(n,t)&&Pr(t,n)&&AS(n,t)&&(_e(n.prev,n,t.prev)||_e(n,t.prev,t))||ca(n,t)&&_e(n.prev,n,n.next)>0&&_e(t.prev,t,t.next)>0)}function _e(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function ca(n,t){return n.x===t.x&&n.y===t.y}function Qd(n,t,e,i){const s=yo(_e(n,t,e)),r=yo(_e(n,t,i)),o=yo(_e(e,i,n)),a=yo(_e(e,i,t));return!!(s!==r&&o!==a||s===0&&xo(n,e,t)||r===0&&xo(n,i,t)||o===0&&xo(e,n,i)||a===0&&xo(e,t,i))}function xo(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function yo(n){return n>0?1:n<0?-1:0}function TS(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Qd(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Pr(n,t){return _e(n.prev,n,n.next)<0?_e(n,t,n.next)>=0&&_e(n,n.prev,t)>=0:_e(n,t,n.prev)<0||_e(n,n.next,t)<0}function AS(n,t){let e=n,i=!1;const s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function tp(n,t){const e=new gc(n.i,n.x,n.y),i=new gc(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function $h(n,t,e,i){const s=new gc(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Lr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function gc(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function RS(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class _r{static area(t){const e=t.length;let i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return _r.area(t)<0}static triangulateShape(t,e){const i=[],s=[],r=[];Kh(t),jh(i,t);let o=t.length;e.forEach(Kh);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,jh(i,e[l]);const a=fS.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Kh(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function jh(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class ua extends Xe{constructor(t=.5,e=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);const a=[],l=[],c=[],h=[];let u=t;const f=(e-t)/s,d=new U,g=new Tt;for(let v=0;v<=s;v++){for(let m=0;m<=i;m++){const p=r+m/i*o;d.x=u*Math.cos(p),d.y=u*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,h.push(g.x,g.y)}u+=f}for(let v=0;v<s;v++){const m=v*(i+1);for(let p=0;p<i;p++){const T=p+m,M=T,E=T+i+1,F=T+i+2,I=T+1;a.push(M,E,I),a.push(E,F,I)}}this.setIndex(a),this.setAttribute("position",new ye(l,3)),this.setAttribute("normal",new ye(c,3)),this.setAttribute("uv",new ye(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ua(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class eu extends Xe{constructor(t=new Jd([new Tt(0,.5),new Tt(-.5,-.5),new Tt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const i=[],s=[],r=[],o=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new ye(s,3)),this.setAttribute("normal",new ye(r,3)),this.setAttribute("uv",new ye(o,2));function c(h){const u=s.length/3,f=h.extractPoints(e);let d=f.shape;const g=f.holes;_r.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=g.length;m<p;m++){const T=g[m];_r.isClockWise(T)===!0&&(g[m]=T.reverse())}const v=_r.triangulateShape(d,g);for(let m=0,p=g.length;m<p;m++){const T=g[m];d=d.concat(T)}for(let m=0,p=d.length;m<p;m++){const T=d[m];s.push(T.x,T.y,0),r.push(0,0,1),o.push(T.x,T.y)}for(let m=0,p=v.length;m<p;m++){const T=v[m],M=T[0]+u,E=T[1]+u,F=T[2]+u;i.push(M,E,F),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return CS(e,t)}static fromJSON(t,e){const i=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];i.push(o)}return new eu(i,t.curveSegments)}}function CS(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,i=n.length;e<i;e++){const s=n[e];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t}class nu extends Xe{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const o=[],a=[],l=[],c=[],h=new U,u=new U,f=new U;for(let d=0;d<=i;d++)for(let g=0;g<=s;g++){const v=g/s*r,m=d/i*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(v),u.y=(t+e*Math.cos(m))*Math.sin(v),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/s),c.push(d/i)}for(let d=1;d<=i;d++)for(let g=1;g<=s;g++){const v=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,p=(s+1)*(d-1)+g,T=(s+1)*d+g;o.push(v,m,T),o.push(m,p,T)}this.setIndex(o),this.setAttribute("position",new ye(a,3)),this.setAttribute("normal",new ye(l,3)),this.setAttribute("uv",new ye(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nu(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class ep extends os{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new jt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pd,this.normalScale=new Tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class iu extends Ce{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new jt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class PS extends iu{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.groundColor=new jt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const fl=new fe,Jh=new U,Zh=new U;class np{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Tt(512,512),this.map=null,this.mapPass=null,this.matrix=new fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yc,this._frameExtents=new Tt(1,1),this._viewportCount=1,this._viewports=[new le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Jh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Jh),Zh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Zh),e.updateMatrixWorld(),fl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(fl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Qh=new fe,er=new U,dl=new U;class LS extends np{constructor(){super(new pn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Tt(4,2),this._viewportCount=6,this._viewports=[new le(2,1,1,1),new le(0,1,1,1),new le(3,1,1,1),new le(1,1,1,1),new le(3,0,1,1),new le(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,s=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),er.setFromMatrixPosition(t.matrixWorld),i.position.copy(er),dl.copy(i.position),dl.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(dl),i.updateMatrixWorld(),s.makeTranslation(-er.x,-er.y,-er.z),Qh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qh)}}class tf extends iu{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new LS}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class IS extends np{constructor(){super(new qc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class DS extends iu{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.target=new Ce,this.shadow=new IS}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const ef=new fe;class US{constructor(t,e,i=0,s=1/0){this.ray=new Wc(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new Xc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return ef.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ef),this}intersectObject(t,e=!0,i=[]){return _c(t,this,i,e),i.sort(nf),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)_c(t[s],this,i,e);return i.sort(nf),i}}function nf(n,t){return n.distance-t.distance}function _c(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)_c(r[o],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Nc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Nc);class NS{constructor(){mt(this,"geometry");mt(this,"materials",["#ed4326","#ff931f","#ffe77b"].map(t=>new Fn({color:t,side:rn,toneMapped:!1,depthWrite:!1})));const t=new Jd;t.moveTo(0,0),t.bezierCurveTo(-.5,-.02,-.65,.35,-.38,.75),t.bezierCurveTo(-.4,.48,-.1,.49,-.18,.89),t.bezierCurveTo(-.24,1.16,.15,1.27,.13,1.6),t.bezierCurveTo(.62,1.23,.18,.94,.38,.65),t.bezierCurveTo(.43,.82,.64,.89,.59,1.05),t.bezierCurveTo(.97,.53,.75,.03,.15,0),t.closePath(),this.geometry=new eu(t,16)}create(t=!1){const e=new an;for(let i=0;i<3;i++){const s=new me(t?this.geometry.clone():this.geometry,this.materials[i]);s.scale.set(i===0?1:i===1?.69:.36,i===0?1:i===1?.73:.46,1),s.position.set(i*.035,.015*i,.012*i),s.renderOrder=1+i,e.add(s)}return e}dispose(){this.geometry.dispose();for(const t of this.materials)t.dispose()}}class OS{constructor(t=Math.random){mt(this,"drops",[]);mt(this,"wounds",[]);this.random=t}clear(){this.drops.length=0,this.wounds.length=0}get emitterCount(){return this.wounds.length}burst(t,e,i,s,r=!1){for(let o=0;o<i&&this.drops.length<600;o++)this.drops.push({x:t,y:e,z:1.1+(this.random()-.5)*.3,vx:(this.random()-.5)*(s?4:5),vy:s?7+this.random()*6:r?-1-this.random()*3:(this.random()-.35)*5,vz:(this.random()-.5)*1.8,life:1.6+this.random()*.6,settled:!1})}event(t,e=!1){if(t.kind==="hit"&&this.burst(t.x,t.y,e?7:30,!1),t.kind!=="detach"||!t.part||!t.severed)return;const i=t.part==="head";this.burst(t.x,t.y,e?16:i?80:50,i,!i),this.wounds.length<32&&this.wounds.push({actor:t.actor,part:t.part,x:t.x,y:t.y,life:3,carry:0,up:i})}update(t,e,i=!1){for(let s=this.wounds.length-1;s>=0;s--){const r=this.wounds[s];if(r.life-=t,r.life<=0){this.wounds.splice(s,1);continue}const o=e.actors[r.actor];if(o&&o.hp>0){const l=dn(o,r.part);r.x=o.x+l.x,r.y=o.y+l.y+(r.up?-.2:l.h*.35)}r.carry+=t*(i?10:36);const a=Math.floor(r.carry);r.carry-=a,this.burst(r.x,r.y,a,r.up,!r.up)}for(let s=this.drops.length-1;s>=0;s--){const r=this.drops[s];if(r.life-=t,r.life<=0||r.y<-15){this.drops.splice(s,1);continue}if(r.settled)continue;const o=r.y;if(r.x+=r.vx*t,r.y+=r.vy*t,r.z+=r.vz*t,r.vy-=17*t,r.vy>=0)continue;let a=-1/0;for(const l of e.props){if(l.hp<=0||l.falling||!["crate","floor","roof","balcony","table","car","truck","barrier"].includes(l.kind))continue;const c=l.y+l.h/2;Math.abs(r.x-l.x)<=l.w/2&&o>=c&&r.y<=c&&(a=Math.max(a,c))}a>-1/0&&(r.y=a+.025,r.settled=!0,r.vx=r.vy=r.vz=0,r.life=1.2)}}}const vr=new Map;let Nn;function FS(){if(Nn)return Nn;const n=document.createElement("canvas");n.width=128,n.height=128;const t=n.getContext("2d");t.fillStyle="#ededeb",t.fillRect(0,0,128,128);let e=719;const i=()=>(e=Math.imul(e,1664525)+1013904223|0,(e>>>0)/4294967296);for(let s=0;s<2e3;s++)t.fillStyle=`rgba(24,19,31,${i()*.15})`,t.fillRect(i()*128,i()*128,1+i()*3,1+i()*2);for(let s=0;s<14;s++)t.fillStyle="#231c3014",t.fillRect(i()*128,i()*128,1+i()*6,i()*28);return Nn=new jc(n),Nn.colorSpace=je,Nn.magFilter=Ge,Nn}function Lo(n){return vr.has(n)||vr.set(n,new ep({color:n,roughness:.88,flatShading:!0,map:Or.includes(n)||sa.includes(n)?null:FS()})),vr.get(n)}function su(n,t,e,i){const s=new me(new ui(n,t,e),Lo(i));return s.castShadow=!0,s.receiveShadow=!0,s}function Kt(n,t,e,i,s,r,o,a){const l=su(t,e,i,a);return l.position.set(s,r,o),n.add(l),l}const xr=new Map;function bi(n,t,e,i="#f7d438",s="#241e33"){const r=n+i+s;if(!xr.has(r)){const o=document.createElement("canvas");o.width=512,o.height=192;const a=o.getContext("2d");a.fillStyle=s,a.fillRect(0,0,512,192),a.strokeStyle=i,a.lineWidth=7,a.strokeRect(10,10,492,172);const l=n.split(`
`);a.fillStyle=i,a.textAlign="center",a.textBaseline="middle",a.font=`900 ${l.length>1?54:72}px Impact, sans-serif`,l.forEach((h,u)=>a.fillText(h,256,96+(u-(l.length-1)/2)*65,470));const c=new jc(o);c.colorSpace=je,c.magFilter=Ge,xr.set(r,new Fn({map:c}))}return new me(new as(t,e),xr.get(r))}function BS(n){const t=new an;t.userData.look=JSON.stringify(n);for(const e of sn){const i=Ns[e],s=Or[n.skin],r=Us[n.color],a=e==="head"||e.startsWith("hand")||e.startsWith("forearm")||n.clothes===1&&e.startsWith("arm")?s:e.startsWith("foot")?"#272530":e.startsWith("thigh")||e.startsWith("shin")?n.clothes===2?r:"#333346":r,l=su(i.w,i.h,.5,a);if(l.name=e,l.position.set(i.x,i.y,0),t.add(l),e==="torso"&&(n.clothes===0?(Kt(l,.06,.75,.025,0,0,.27,"#292635"),Kt(l,.16,.13,.03,.2,.05,.27,"#eed5a0")):n.clothes===2&&(Kt(l,.6,.12,.025,0,-.15,.27,"#c7c8c0"),Kt(l,.08,.7,.03,-.2,0,.27,"#a9a9a0")),n.gender===1&&Kt(l,.35,.23,.025,0,.08,.27,"#cfcccc"),n.gender===2&&(Kt(l,.04,.3,.04,-.23,.27,.27,"#f3dc7d"),Kt(l,.04,.3,.04,.23,.27,.27,"#f3dc7d"))),e==="head"){Kt(l,.12,.07,.035,-.15,.05,.27,"#26212e"),Kt(l,.12,.07,.035,.15,.05,.27,"#26212e"),Kt(l,.15,.035,.035,0,-.14,.28,"#6b353b");const c=sa[n.hairColor];if(n.hair!==4){if(Kt(l,n.hair===2?.18:.64,n.hair===2?.35:.19,.54,0,.36,0,c),n.hair===1)for(const h of[-.21,0,.21])Kt(l,.23,.22,.6,h,.4,0,c);n.hair===3&&(Kt(l,.14,.65,.53,-.31,0,0,c),Kt(l,.14,.65,.53,.31,0,0,c))}}}return t}function pl(n){const t=new an;if(n==="laser")Kt(t,.85,.25,.23,.05,0,0,"#334052"),Kt(t,.3,.12,.3,.55,0,0,"#66ffff"),Kt(t,.12,.35,.14,-.2,-.2,0,"#6c40a8");else if(n==="flamethrower")Kt(t,.8,.25,.25,.1,0,0,"#795536"),Kt(t,.3,.3,.3,.55,0,0,"#ff7735"),Kt(t,.35,.6,.3,-.25,-.1,0,"#ba332b");else if(n==="axe")Kt(t,.12,.95,.12,0,0,0,"#865d3d"),Kt(t,.55,.4,.16,.16,.35,0,"#b9bec3");else if(n==="shank"){Kt(t,.14,.35,.14,0,-.12,0,"#3d3545");const e=Kt(t,.12,.5,.05,0,.27,0,"#e0e4df");e.rotation.z=-.07}else n==="shotgun"?(Kt(t,1,.12,.14,.2,0,0,"#9296a0"),Kt(t,.48,.22,.21,-.4,-.05,0,"#906445"),Kt(t,.23,.23,.22,.07,-.06,0,"#69503c")):n==="smg"&&(Kt(t,.8,.25,.2,0,0,0,"#4b5160"),Kt(t,.12,.4,.12,-.1,-.25,0,"#343645"),Kt(t,.35,.1,.11,.5,.07,0,"#9b9fa8"));return t}function kS(n,t){const e=new an,i=n.w,s=n.h,o={metal:"#68737c",wood:"#7f665c",glass:"#3c929c",fuel:"#c7444f",concrete:"#5d5c6a",fabric:"#837e78"}[n.material],a=(l,c,h,u,f,d,g)=>Kt(e,l,c,h,u,f,d,g);switch(n.kind){case"crate":{a(i,s,1,0,0,0,n.color?"#bd6944":"#9f7c45");for(const f of[-i*.43,i*.43])a(.12,s,.08,f,0,.54,"#e0b979");for(const f of[-s*.43,s*.43])a(i,.1,.08,0,f,.55,"#e0b979");const h=new me(new ua(.16,.22,16),Lo("#ffe17b"));h.position.set(0,.12,.57),e.add(h);const u=bi(n.color?"AIM HIGH":"AIM LOW",1.1,.27,"#ffe17b");u.position.set(0,-.31,.58),e.add(u);break}case"floor":a(i,s,8,0,0,-1,"#454353"),a(i*.4,.025,.12,0,s/2+.035,-1.5,"#a69a70"),a(i,.04,.12,0,s/2+.02,2.9,"#9c8958");break;case"pump":a(i,s,1.35,0,0,-.6,"#bd364f"),a(i*.9,s*.4,1.5,0,.45,-.55,"#d3cebc"),a(i*.65,.6,.07,0,.65,.23,"#152d31");const l=bi("9.99",i*.6,.45,"#a4e8ab","#13272b");l.position.set(0,.7,.29),e.add(l),a(.1,s*.7,.1,i*.57,-.3,-.1,"#1a1728");break;case"car":case"truck":a(i,s*.55,2,0,-s*.1,0,n.kind==="car"?"#b6a46c":"#527a78"),a(i*.48,s*.5,1.7,-i*.1,s*.34,0,n.kind==="car"?"#537c81":"#9b8174"),a(i*.4,s*.3,.06,-i*.1,s*.33,.89,"#243b4c"),a(i,.18,2.1,0,-s*.36,0,"#393442");for(const h of[-i*.34,i*.34]){const u=new me(new tu(.52,.52,2.1,10),Lo("#26232d"));u.rotation.x=Math.PI/2,u.position.set(h,-s*.35,0),e.add(u)}a(.25,.25,.04,i*.43,0,1.03,"#e7d68f");break;case"post":case"pole":a(i,s,.6,0,0,-2,o),a(i*1.5,.2,.9,0,-s/2,-2,"#8f8b8f");break;case"roof":case"balcony":a(i,s,5,0,0,-1.2,t==="motel"?"#857587":"#b54b72"),a(i,.14,.15,0,0,1.35,"#f1b638");break;case"glass":const c=new me(new ui(i,s,.09),new ep({color:"#488894",transparent:!0,opacity:.6,roughness:.3}));c.position.z=-1.2,c.userData.ownedMaterial=!0,e.add(c),a(i,.07,.13,0,-s/2,-1.15,"#c8b7a0");break;case"sign":{const h=t==="gas"?`LAST STOP
GAS`:t==="rest"?`REST AREA
1 MILE`:`NO-TELL
VACANCY`;a(i,s,.35,0,0,-1.8,"#382e48");const u=bi(h,i*.94,s*.93,t==="motel"?"#ff8bad":"#f6d23a");u.position.z=-1.59,e.add(u);break}case"can":a(i,s,.6,0,0,0,"#d7ad3a"),a(i*.5,.15,.18,0,s/2,0,"#33303b");break;case"door":a(i,s,.2,0,0,-1.9,"#694761"),a(.09,.09,.1,i*.3,0,-1.73,"#ead176");break;case"table":case"bench":a(i,.24,1.6,0,s*.35,0,o);for(const h of[-i*.36,i*.36])a(.15,s,.8,h,0,0,"#514353");break;case"mattress":a(i,s,1.8,0,0,0,"#aea291");for(let h=-i*.4;h<i*.5;h+=.45)a(.04,s*1.01,1.81,h,0,0,"#857887");break;case"tire":{const h=new me(new nu(i*.36,i*.16,6,12),Lo("#292735"));e.add(h);break}case"railing":a(i,.09,.12,0,s/2,-.1,"#bcaabb");for(let h=-i/2;h<i/2;h+=.8)a(.06,s,.1,h,0,-.1,"#bcaabb");break;default:if(a(i,s,1.35,0,0,0,o),["fridge","vending","ice","tv"].includes(n.kind)){a(i*.8,s*.7,.07,0,s*.05,.71,"#243745");const h=bi(n.kind==="vending"?`BAD
IDEA`:n.kind==="ice"?"ICE":n.kind==="tv"?"NO SIGNAL":"COLD",i*.7,s*.45,n.kind==="tv"?"#b99bbb":"#b9cfa2","#1e3040");h.position.set(0,.1,.76),e.add(h)}if(n.kind==="ac")for(let h=-i*.4;h<i*.4;h+=.22)a(.06,s*.65,.05,h,0,.73,"#383b4b")}return e}function zS(n){const t=new an,e=document.createElement("canvas");e.width=2048,e.height=512;const i=e.getContext("2d");i.fillStyle=n==="motel"?"#261f37":n==="rest"?"#263339":"#2b263a",i.fillRect(0,0,2048,512);for(let a=0;a<90;a++){const l=a*25,c=130+a*73%150;i.fillStyle=["#343246","#3f364b","#2e3446"][a%3],i.fillRect(l,c,30+a%6*9,512-c),i.fillStyle=a%2?"#927652":"#486577";for(let h=0;h<5;h++)i.fillRect(l+8,c+20+h*36,7,10)}const s=new jc(e);s.colorSpace=je,s.magFilter=Ge;const r=new me(new as(190,35),new Fn({map:s}));r.position.set(0,12,-18),r.userData.ownedTexture=!0,t.add(r);const o=new an;if(n==="gas"){Kt(o,31,8,1,24,3,-5,"#675d73"),Kt(o,31,.5,1.4,24,7,-4.8,"#b95b74");for(let l=13;l<38;l+=6)Kt(o,4.8,3.5,.06,l,2.4,-4.43,"#273c4c");const a=bi("CHEAP THRILLS / OPEN 24H",27,1.4,"#f0c32f","#33283e");a.position.set(24,6,-4.4),o.add(a)}else if(n==="motel"){Kt(o,118,10,1,0,4.5,-4.5,"#66576c"),Kt(o,119,.6,1.4,0,9.5,-4.2,"#9d617e");for(let a=-50;a<55;a+=11)for(const l of[2,7]){Kt(o,4.2,3.4,.05,a,l,-3.94,"#302b3d");const c=bi(String(101+Math.floor((a+50)/11)+(l>3?10:0)),1.2,.5,"#cca881","#372d40");c.position.set(a,l+1.1,-3.88),o.add(c)}}else{Kt(o,25,6,1,27,2.7,-5,"#656c73");const a=bi("RESTROOMS / NO GUARANTEES",24,1.2,"#94c6bd","#263c45");a.position.set(27,5,-4.4),o.add(a)}return t.add(o),t}function xi(n){n.traverse(t=>{var e;if(t instanceof me&&(t.geometry.dispose(),t.userData.ownedMaterial&&t.material.dispose(),t.userData.ownedTexture)){const i=t.material;(e=i.map)==null||e.dispose(),i.dispose()}})}function HS(){Nn==null||Nn.dispose(),Nn=void 0,vr.forEach(n=>n.dispose()),vr.clear(),xr.forEach(n=>{var t;(t=n.map)==null||t.dispose(),n.dispose()}),xr.clear()}function VS(n,t){return n==="head"||n.startsWith("hand")||n.startsWith("forearm")?Or[t.skin]:n.startsWith("foot")?"#292735":Us[t.color]}class GS{constructor(t,e,i){mt(this,"renderer");mt(this,"scene",new ZM);mt(this,"camera",new qc);mt(this,"actors",new Map);mt(this,"props",new Map);mt(this,"blood",new Map);mt(this,"debris",new Map);mt(this,"shots",new Map);mt(this,"pickups",new Map);mt(this,"environment",new an);mt(this,"venue","");mt(this,"flames",new Map);mt(this,"flameStyle",new NS);mt(this,"bloodParticles",new OS);mt(this,"bloodGeometry",new Xe);mt(this,"bloodPositions",new Float32Array(600*3));mt(this,"bloodPoints",new ll(this.bloodGeometry,new dc({size:6,sizeAttenuation:!1,color:"#f52e48",transparent:!0,opacity:1,depthWrite:!1,toneMapped:!1,fog:!1})));mt(this,"bloodRound",-1);mt(this,"beams",[]);mt(this,"frame",0);mt(this,"last",0);mt(this,"center",0);mt(this,"width",1);mt(this,"height",1);mt(this,"observer");mt(this,"focused",0);mt(this,"particleGeometry",new Xe);mt(this,"positions",new Float32Array(500*3));mt(this,"colors",new Float32Array(500*3));mt(this,"particles",[]);mt(this,"points");mt(this,"sun");mt(this,"left",new me(new as(1,30),new Fn({color:"#c83f62",transparent:!0,opacity:.22,side:rn,depthWrite:!1})));mt(this,"right",this.left.clone());mt(this,"reducedEffects",!1);mt(this,"resize",()=>{this.width=Math.max(1,this.host.clientWidth),this.height=Math.max(1,this.host.clientHeight),this.renderer.setSize(this.width,this.height);const t=this.width/this.height,e=t<.8?12:9;this.camera.left=-e*t,this.camera.right=e*t,this.camera.top=e,this.camera.bottom=-e,this.camera.near=.1,this.camera.far=150,this.camera.updateProjectionMatrix()});mt(this,"animate",t=>{const e=Math.min(.08,(t-this.last)/1e3||0);this.last=t,this.render(this.state(),e,t/1e3),this.frame=requestAnimationFrame(this.animate)});this.host=t,this.state=e,this.localId=i,this.renderer=new JM({antialias:!1,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,1.4)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Oc,this.renderer.outputColorSpace=je,this.renderer.toneMapping=vd,this.renderer.toneMappingExposure=1.28,t.appendChild(this.renderer.domElement),this.scene.background=new jt("#211b32"),this.scene.fog=new Kc("#211b32",40,105),this.scene.add(new PS("#b7a8d8","#43424a",2.5)),this.sun=new DS("#edd6a5",3),this.sun.position.set(-10,16,14),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(1024,1024),Object.assign(this.sun.shadow.camera,{left:-24,right:24,top:20,bottom:-15,far:70}),this.sun.shadow.normalBias=.05,this.scene.add(this.sun,this.sun.target);const s=new tf("#ed2867",160,33);s.position.set(-27,8,6);const r=new tf("#26c6c1",120,33);r.position.set(25,7,5),this.scene.add(s,r),this.scene.add(this.environment,this.left,this.right),this.left.position.z=3.5,this.right.position.z=3.5,this.particleGeometry.setAttribute("position",new ln(this.positions,3).setUsage(La)),this.particleGeometry.setAttribute("color",new ln(this.colors,3).setUsage(La)),this.particleGeometry.setDrawRange(0,0),this.points=new ll(this.particleGeometry,new dc({size:.16,vertexColors:!0,transparent:!0,opacity:.95,depthWrite:!1})),this.points.frustumCulled=!1,this.scene.add(this.points),this.bloodGeometry.setAttribute("position",new ln(this.bloodPositions,3).setUsage(La)),this.bloodGeometry.setDrawRange(0,0),this.bloodPoints.frustumCulled=!1,this.bloodPoints.renderOrder=3,this.scene.add(this.bloodPoints),this.observer=new ResizeObserver(this.resize),this.observer.observe(t),this.resize(),this.frame=requestAnimationFrame(this.animate)}get canvas(){return this.renderer.domElement}soundPosition(t,e){const i=new U(t,e,.7).project(this.camera);return jg(i.x,i.y)}setSpectator(t){this.focused=t}aim(t,e){const i=this.host.getBoundingClientRect(),s=new Tt((t-i.left)/i.width*2-1,-(e-i.top)/i.height*2+1),r=new US;r.setFromCamera(s,this.camera);const o=new U;if(r.ray.intersectPlane(new Mi(new U(0,0,1),0),o)){const a=this.state().actors[this.localId()],l=o.x-a.x,c=o.y-a.y-ei(a),h=Math.max(.01,Math.hypot(l,c));return{x:Math.round(l/h*1024)/1024,y:Math.round(c/h*1024)/1024}}return{x:1,y:0}}present(t){this.bloodRound!==this.state().round&&(this.bloodParticles.clear(),this.bloodRound=this.state().round);for(const e of t){if(this.bloodParticles.event(e,this.reducedEffects),e.kind==="hit"||e.kind==="detach")continue;if(e.weapon==="laser"&&e.endX!==void 0&&e.endY!==void 0){const r=e.endX-e.x,o=e.endY-e.y,a=new me(new ui(Math.max(.01,Math.hypot(r,o)),.085,.085),new Fn({color:"#8cffff",transparent:!0,opacity:1,depthWrite:!1}));a.position.set((e.x+e.endX)/2,(e.y+e.endY)/2,.8),a.rotation.z=Math.atan2(o,r),this.scene.add(a),this.beams.push({mesh:a,life:.16})}if(["ignite","jump","land","swap","reload"].includes(e.kind))continue;const i=new jt(e.kind==="scream"||e.kind==="cry"?"#80cde1":e.kind==="explosion"?"#f9a349":e.kind==="break"?"#d2c3a4":"#f9de5e"),s=this.reducedEffects?2:e.kind==="explosion"?35:e.kind==="shot"?4:10;for(let r=0;r<s&&this.particles.length<500;r++)this.particles.push({x:e.x,y:e.y,z:1,vx:(Math.random()-.5)*(e.kind==="explosion"?12:6),vy:Math.random()*7,life:e.kind==="shot"?.08:.3+Math.random()*.4,color:i})}}burningEffects(t,e,i){const s=[...t.fires.map(r=>({key:`f${r.id}`,x:r.x,y:r.y-.3,w:r.radius*1.6,h:1.8})),...t.actors.filter(r=>r.hp>0&&r.onFire).map(r=>({key:`a${r.id}`,x:r.x,y:r.y+.15,w:1,h:ws(r)})),...t.props.filter(r=>r.hp>0&&r.onFire).map(r=>({key:`p${r.id}`,x:r.x,y:r.y-r.h/2,w:Math.min(5,r.w),h:Math.min(3,r.h)})),...t.debris.filter(r=>r.hp>0&&r.onFire).map(r=>({key:`d${r.id}`,x:r.x,y:r.y-r.h/2,w:r.w,h:.5})),...t.pickups.filter(r=>r.onFire).map(r=>({key:`i${r.id}`,x:r.x,y:r.y,w:.6,h:.6}))].filter(r=>Math.abs(r.x-this.center)<30).slice(0,96);for(const[r,o]of this.flames)s.some(a=>a.key===r)||(this.scene.remove(o),this.flames.delete(r));for(const r of s){let o=this.flames.get(r.key);if(!o){o=new an;for(let a=0;a<5;a++){const l=this.flameStyle.create();o.add(l)}this.flames.set(r.key,o),this.scene.add(o)}o.position.set(r.x,r.y,.75),o.quaternion.copy(this.camera.quaternion),o.children.forEach((a,l)=>{const c=.86+Math.sin(e*10+l*2+r.x)*.13+Math.sin(e*17+l)*.06,h=Math.max(.45,r.h)*c;a.position.set((l/4-.5)*r.w+Math.sin(e*7+l)*.045,0,l*.035),a.scale.set((r.w/4+.3)*(1.05-Math.sin(e*10+l)*.08),h*.7,1),a.rotation.z=Math.sin(e*8+l)*.055}),!this.reducedEffects&&this.particles.length<480&&Math.random()<i*8&&this.particles.push({x:r.x,y:r.y+r.h,z:.5,vx:.3,vy:1.6,life:.8,color:new jt("#57505c")})}}render(t,e,i){var h;if(t.venue!==this.venue){this.scene.remove(this.environment),xi(this.environment),this.environment=zS(t.venue),this.scene.add(this.environment),this.venue=t.venue;for(const u of this.props.values())this.scene.remove(u),xi(u);this.props.clear()}const s=t.phase==="lobby"||t.phase==="countdown",r=t.actors[this.localId()],o=r.hp>0?r:((h=t.actors[this.focused])==null?void 0:h.hp)>0&&!t.actors[this.focused].pendingSpawn?t.actors[this.focused]:t.actors.find(u=>u.hp>0&&!u.pendingSpawn)??r,a=s?-25:o.x;this.center+=(a-this.center)*(1-Math.exp(-e*7)||1);const l=s?4:Math.max(4,o.y+2);this.camera.position.set(this.center+3.5,l+4,30),this.camera.lookAt(this.center,l,0),this.camera.updateMatrixWorld(),this.sun.position.set(this.center-12,16,14),this.sun.target.position.set(this.center,0,0),this.left.visible=this.right.visible=t.phase==="match",this.left.position.x=t.zoneLeft-50,this.left.scale.x=100,this.left.position.y=8,this.right.position.x=t.zoneRight+50,this.right.scale.x=100,this.right.position.y=8;for(const u of t.actors){let f=this.actors.get(u.id);f&&f.userData.look!==JSON.stringify(u.look)&&(this.scene.remove(f),xi(f),this.actors.delete(u.id),f=void 0),f||(f=BS(u.look),this.scene.add(f),this.actors.set(u.id,f)),f.visible=s?u.id===this.localId():u.hp>0&&!u.pendingSpawn,f.scale.setScalar(s?2:1),f.position.set(s?-20:u.x,s?1.1:u.y,s?6:0);const d=Ar(u);!s&&d===1&&u.grounded&&(f.position.y+=Math.abs(Math.sin(i*10))*.22*Math.min(1,Math.abs(u.vx)/2));const g=Math.sin(i*14)*Math.min(1,Math.abs(u.vx)/5);for(const F of sn){const I=f.getObjectByName(F);I.visible=s||u.parts[F]>0;const R=dn(u,F);if(I.position.set(R.x,R.y,0),I.scale.y=R.length/Ns[F].h,I.rotation.z=R.rotation+(d>0&&(F.startsWith("thigh")||F.startsWith("shin"))?(F.endsWith("L")?1:-1)*g*.22:F==="torso"&&!u.parts.head?Math.sin(i*8)*.12:0),!s&&d===0&&u.grounded){const z=Math.sin(i*11)*Math.min(1,Math.abs(u.vx)/1.5);F==="torso"&&(I.rotation.z+=z*.035)}}const v=!u.parts.armL&&!u.parts.armR?"body":u.weapons[u.slot]??"shank";let m=f.getObjectByName("weapon");(m==null?void 0:m.userData.weapon)!==v&&(m&&(f.remove(m),xi(m)),m=pl(v),m.name="weapon",m.userData.weapon=v,f.add(m));const p=pr(u),T=v==="shank"||v==="axe",M=v==="axe"?.35:v==="shank"?.09:0;m.position.set(p.x+p.dx*M,p.y+p.dy*M,.4),m.rotation.z=p.angle-(T?Math.PI/2:0),m.scale.setScalar(v==="shank"?.75:1);const E=f.getObjectByName("torso");E.rotation.z+=u.attacking>0?u.face*.08:0}for(const[u,f]of this.props)t.props.some(d=>d.id===u&&d.hp>0)||(this.scene.remove(f),xi(f),this.props.delete(u));for(const u of t.props){if(u.hp<=0)continue;let f=this.props.get(u.id);f||(f=kS(u,t.venue),this.props.set(u.id,f),this.scene.add(f)),f.position.set(u.x,u.y,0),f.rotation.z=u.falling?Math.sin(i*3)*.08:0,u.burn&&u.fuel>0&&this.particles.length<480&&Math.random()<e*(this.reducedEffects?3:22)&&this.particles.push({x:u.x+(Math.random()-.5)*u.w,y:u.y+u.h*.3,z:1,vx:Math.random()-.5,vy:3+Math.random()*2,life:.6,color:new jt(Math.random()>.5?"#ef6b32":"#efbf3b")})}const c=t.blood.filter(u=>t.props.some(f=>f.id===u.surface&&f.hp>0&&!f.falling));for(const[u,f]of this.blood)c.some(d=>d.id===u)||(this.scene.remove(f),xi(f),this.blood.delete(u));for(const u of c){let f=this.blood.get(u.id);if(!f){f=new an;for(let d=0;d<10;d++){const g=new me(new Qc(d===0?1:.08+d%3*.035,12),new Fn({color:d%2?"#8b1738":"#63152c",side:rn,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1}));g.userData.ownedMaterial=!0,g.rotation.x=-Math.PI/2,g.scale.set(d===0?1.25:1,d===0?.55:1,1),d>0&&g.position.set(Math.cos(d*2.4+u.id)*(.5+d*.11),.001*d,Math.sin(d*2.4+u.id)*(.3+d*.06)),f.add(g)}this.blood.set(u.id,f),this.scene.add(f)}f.position.set(u.x,u.y,.4),f.visible=!s}for(const[u,f]of this.debris)t.debris.some(d=>d.id===u)||(this.scene.remove(f),f.geometry.dispose(),this.debris.delete(u));for(const u of t.debris){let f=this.debris.get(u.id);f||(f=su(u.w,u.h,.35,u.part&&u.look?VS(u.part,u.look):Us[u.color%Us.length]),this.debris.set(u.id,f),this.scene.add(f)),f.position.set(u.x,u.y,1),f.rotation.z=u.angle??0}for(const[u,f]of this.shots)t.shots.some(d=>d.id===u)||(this.scene.remove(f),xi(f),this.shots.delete(u));for(const u of t.shots){let f=this.shots.get(u.id);f||(u.weapon==="axe"?f=pl("axe"):u.weapon==="flamethrower"?f=this.flameStyle.create(!0):(f=new me(new ui(u.weapon==="shotgun"?.16:.45,.06,.06),new Fn({color:u.owner===this.localId()?"#ffdd3f":"#ff675d"})),f.userData.ownedMaterial=!0),this.shots.set(u.id,f),this.scene.add(f)),f.position.set(u.x,u.y,.65),f.rotation.z=u.weapon==="axe"?(22-u.life)*.55:Math.atan2(u.vy,u.vx)-(u.weapon==="flamethrower"?Math.PI/2:0),u.weapon==="flamethrower"&&(f.quaternion.copy(this.camera.quaternion),f.rotateZ(Math.atan2(u.vy,u.vx)-Math.PI/2),f.scale.setScalar(.22+(15-u.life)*.018))}for(const[u,f]of this.pickups)t.pickups.some(d=>d.id===u)||(this.scene.remove(f),xi(f),this.pickups.delete(u));for(const u of t.pickups){let f=this.pickups.get(u.id);if(!f){if(f=pl(u.weapon),u.weapon==="laser"||u.weapon==="flamethrower"){const g=bi(u.weapon==="laser"?"2 SHOTS":"FIRE SALE",1.7,.45,"#8cffff");g.position.set(0,.85,.1),f.add(g)}const d=new me(new ua(.6,.67,20),new Fn({color:"#f0d432",side:rn}));d.userData.ownedMaterial=!0,f.add(d),this.scene.add(f),this.pickups.set(u.id,f)}f.position.set(u.x,u.y+Math.sin(i*3)*.15,1),f.rotation.z=Math.sin(i)*.1}for(let u=this.particles.length-1;u>=0;u--){const f=this.particles[u];if(f.life-=e,f.life<=0){this.particles.splice(u,1);continue}f.x+=f.vx*e,f.y+=f.vy*e,f.vy-=e*9}this.particles.forEach((u,f)=>{this.positions.set([u.x,u.y,u.z],f*3),this.colors.set([u.color.r,u.color.g,u.color.b],f*3)}),this.particleGeometry.setDrawRange(0,this.particles.length),this.particleGeometry.attributes.position.needsUpdate=!0,this.particleGeometry.attributes.color.needsUpdate=!0;for(let u=this.beams.length-1;u>=0;u--){const f=this.beams[u];f.life-=e,f.life<=0?(this.scene.remove(f.mesh),f.mesh.geometry.dispose(),f.mesh.material.dispose(),this.beams.splice(u,1)):f.mesh.material.opacity=f.life/.16}(this.bloodRound!==t.round||s)&&(this.bloodParticles.clear(),this.bloodRound=t.round),this.bloodParticles.update(e,t,this.reducedEffects),this.bloodParticles.drops.forEach((u,f)=>this.bloodPositions.set([u.x,u.y,u.z],f*3)),this.bloodGeometry.setDrawRange(0,this.bloodParticles.drops.length),this.bloodGeometry.attributes.position.needsUpdate=!0,this.burningEffects(t,i,e),this.renderer.render(this.scene,this.camera)}dispose(){for(const t of this.beams)t.mesh.material.dispose();cancelAnimationFrame(this.frame),this.observer.disconnect(),this.scene.traverse(t=>{(t instanceof me||t instanceof ll)&&t.geometry.dispose()}),this.points.material instanceof os&&this.points.material.dispose(),this.bloodPoints.material.dispose(),this.bloodGeometry.dispose(),this.flameStyle.dispose(),HS(),this.renderer.dispose(),this.renderer.domElement.remove()}}function WS(n){return n.kind==="ignite"&&n.actor>=0?"catchfire":n.kind==="shot"||n.kind==="melee"?n.weapon??"body":n.kind}function XS(n){const t={};if(!n||typeof n!="object")return t;const e=n;if(e.version!==1||!e.cues||typeof e.cues!="object")return t;for(const[i,s]of Object.entries(e.cues))!/^[a-z]+$/.test(i)||!Array.isArray(s)||(t[i]=s.filter(r=>typeof r=="string"&&/^[a-z]+--[0-9]+\.wav$/.test(r)).slice(0,20));return t}class YS{constructor(){mt(this,"buffers",new Map);mt(this,"started",!1);mt(this,"abort",new AbortController)}async load(t){if(this.started)return;this.started=!0;const e="/game/royale/audio/royale/";try{const i=await fetch(e+"manifest.json",{signal:this.abort.signal});if(!i.ok)return;const s=XS(await i.json());await Promise.all(Object.entries(s).map(async([r,o])=>{const a=[];for(const l of o)try{const c=await fetch(e+l,{signal:this.abort.signal});c.ok&&a.push(await t.decodeAudioData(await c.arrayBuffer()))}catch{}a.length&&this.buffers.set(r,a)}))}catch{}}get(t){const e=this.buffers.get(t);return e==null?void 0:e[Math.floor(Math.random()*e.length)]}dispose(){this.abort.abort(),this.buffers.clear()}}function qS(n,t=Math.random()){return n&&t<.25}class $S{constructor(t=()=>({gain:1,pan:0})){mt(this,"channels",new Set);mt(this,"routing");mt(this,"enabled",!1);mt(this,"bank",new YS);mt(this,"context");mt(this,"master");mt(this,"active",new Set);mt(this,"last",new Map);this.locate=t}enable(t){if(this.enabled=t,t)try{if(this.context??(this.context=new AudioContext),!this.master){this.master=this.context.createGain();const e=this.context.createDynamicsCompressor();this.master.connect(e),e.connect(this.context.destination)}this.master.gain.value=.55,this.context.resume(),this.bank.load(this.context)}catch{this.enabled=!1}else{this.master&&(this.master.gain.value=0);for(const e of this.active)try{e.stop()}catch{}}}updateView(){if(this.context)for(const t of this.channels){const e=this.locate(t.event);t.gain.gain.setTargetAtTime(e.gain,this.context.currentTime,.06),t.pan.pan.setTargetAtTime(e.pan,this.context.currentTime,.06)}}release(t){t.gain.disconnect(),t.pan.disconnect(),this.channels.delete(t)}start(t,e,i,s,r){t.connect(r??e),r&&r.connect(e);const o=this.routing;e.connect((o==null?void 0:o.gain)??this.master),o&&o.sources++,this.active.add(t),t.onended=()=>{this.active.delete(t),t.disconnect(),r==null||r.disconnect(),e.disconnect(),o&&--o.sources===0&&this.release(o)},t.start(i),t.stop(i+s)}envelope(t,e,i){const s=this.context.createGain();return s.gain.setValueAtTime(1e-4,t),s.gain.linearRampToValueAtTime(i,t+.003),s.gain.exponentialRampToValueAtTime(1e-4,t+e),s}tone(t,e,i,s,r,o="sine"){const a=this.context.createOscillator();a.type=o,a.frequency.setValueAtTime(e,t),a.frequency.exponentialRampToValueAtTime(i,t+s),this.start(a,this.envelope(t,s,r),t,s)}noise(t,e,i,s,r="lowpass"){const o=this.context,a=o.createBuffer(1,Math.ceil(o.sampleRate*e),o.sampleRate),l=a.getChannelData(0);for(let u=0;u<l.length;u++)l[u]=Math.random()*2-1;const c=o.createBufferSource(),h=o.createBiquadFilter();c.buffer=a,h.type=r,h.frequency.value=s,h.Q.value=.7,this.start(c,this.envelope(t,e,i),t,e,h)}cry(t,e){const i=this.context,s=e?.7:.9,r=e?1:3;for(let o=0;o<r;o++){const a=t+o*.25,l=e?s:.24,c=i.createOscillator(),h=i.createBiquadFilter(),u=i.createOscillator(),f=i.createGain();c.type="sawtooth",c.frequency.setValueAtTime(e?430:240,a),c.frequency.exponentialRampToValueAtTime(e?270:155,a+l),u.frequency.value=e?9:6,f.gain.value=e?22:15,u.connect(f),f.connect(c.frequency),h.type="bandpass",h.frequency.value=e?1250:750,h.Q.value=.9,this.start(c,this.envelope(a,l,e?.12:.09),a,l,h),this.active.add(u),u.onended=()=>{this.active.delete(u),u.disconnect(),f.disconnect()},u.start(a),u.stop(a+l)}this.noise(t,s,.025,1600,"bandpass")}play(t){if(!this.enabled||!this.context)return;const e=WS(t),i=this.context.currentTime;if(this.active.size>=(e==="catchfire"?48:36))return;const s=this.locate(t);if(s.gain<.01)return;const r=`${e}:${t.actor>=0?t.actor:Math.round(t.x/6)}`;if(i-(this.last.get(r)??-1)<(e==="smg"?.045:.07))return;this.last.set(r,i);const o={event:{...t},gain:this.context.createGain(),pan:this.context.createStereoPanner(),sources:0};o.gain.gain.value=s.gain,o.pan.pan.value=s.pan,o.gain.connect(o.pan),o.pan.connect(this.master),this.channels.add(o),this.routing=o;try{const a=this.bank.get(e);if(qS(!!a)){const l=this.context.createBufferSource();l.buffer=a,l.playbackRate.value=.97+Math.random()*.06;const c=a.duration/l.playbackRate.value,h=this.envelope(i,c,.8);h.gain.cancelScheduledValues(i),h.gain.setValueAtTime(0,i),h.gain.linearRampToValueAtTime(.8,i+.005),h.gain.setValueAtTime(.8,i+Math.max(.005,c-.01)),h.gain.linearRampToValueAtTime(0,i+c),this.start(l,h,i,c);return}switch(e){case"scream":this.cry(i,!0);break;case"cry":this.cry(i,!1);break;case"catchfire":this.noise(i,.55,.22,1100),this.noise(i+.05,.3,.07,3500,"highpass"),this.cry(i+.04,!0);break;case"ignite":this.noise(i,.5,.12,850),this.noise(i+.05,.3,.045,3500,"highpass");break;case"laser":this.tone(i,1800,140,.22,.1,"sawtooth"),this.tone(i,3200,700,.12,.045,"sine");break;case"flamethrower":this.noise(i,.18,.15,900),this.noise(i,.12,.045,3200,"highpass");break;case"smg":this.noise(i,.065,.19,3200,"highpass"),this.tone(i,145,48,.085,.11);break;case"shotgun":this.noise(i,.24,.35,2200),this.tone(i,125,32,.28,.24),this.noise(i+.075,.1,.08,4200,"highpass");break;case"explosion":this.noise(i,.8,.4,700),this.tone(i,65,22,.65,.3),this.noise(i+.1,.4,.08,2400);break;case"shank":this.noise(i,.055,.075,2400,"highpass"),this.tone(i,1600,650,.045,.025,"triangle");break;case"axe":this.noise(i,.22,.13,650,"bandpass"),this.tone(i,220,90,.17,.025,"triangle");break;case"body":case"hit":this.noise(i,.075,.1,950),this.tone(i,110,40,.12,.13);break;case"detach":this.noise(i,.13,.14,700),this.tone(i,210,65,.11,.08);break;case"land":this.noise(i,.09,.09,600),this.tone(i,80,30,.12,.07);break;case"jump":this.noise(i,.08,.045,1500,"bandpass");break;case"reload":this.noise(i,.035,.11,4e3,"highpass"),this.noise(i+.12,.04,.08,2100,"highpass"),this.tone(i+.14,650,280,.04,.04,"triangle");break;case"swap":this.noise(i,.045,.07,2800,"highpass"),this.tone(i,900,450,.035,.025,"triangle");break;case"pickup":this.tone(i,660,660,.1,.055,"triangle"),this.tone(i+.07,990,990,.17,.05,"triangle");break;case"break":this.noise(i,.22,.16,3700,"highpass"),this.tone(i,740,160,.14,.035,"triangle"),this.noise(i+.05,.14,.07,1800);break;case"death":this.tone(i,280,65,.5,.06,"triangle"),this.noise(i,.16,.07,600);break;default:this.noise(i,.12,.05,1e3)}}finally{this.routing=void 0,o.sources===0&&this.release(o)}}dispose(){var t;this.enable(!1);for(const e of this.channels)this.release(e);this.bank.dispose(),(t=this.context)==null||t.close()}}class KS{constructor(t,e,i){mt(this,"practiceSim",new gd(1));mt(this,"session");mt(this,"scene");mt(this,"sound");mt(this,"journal",new $g);mt(this,"ledger",new Kg);mt(this,"input");mt(this,"keys",new Set);mt(this,"mouseDown",!1);mt(this,"touchAttack",!1);mt(this,"frame",0);mt(this,"last",0);mt(this,"accumulator",0);mt(this,"reportTime",0);mt(this,"advice",null);mt(this,"mode","practice");mt(this,"paused",!1);mt(this,"touchMove",0);mt(this,"network",{status:"offline",invite:"",message:"Practice — one human, seven bots.",localId:0,ping:0});mt(this,"down",t=>{t.target instanceof HTMLElement&&t.target.matches("input,select,textarea")||(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(t.code)&&t.preventDefault(),this.keys.add(t.code),!t.repeat&&((t.code==="Space"||t.code==="KeyW"||t.code==="ArrowUp")&&this.command("jump"),t.code==="KeyE"&&this.command("pickup"),(t.code==="KeyQ"||t.code==="ShiftLeft"||t.code==="ShiftRight")&&this.command("cycle"),t.code==="KeyR"&&this.command("reload"),t.code==="Escape"&&this.mode==="practice"&&this.state.phase==="match"&&(this.paused=!this.paused)))});mt(this,"up",t=>{this.keys.delete(t.code)});mt(this,"blur",()=>{this.keys.clear(),this.mouseDown=!1,this.touchAttack=!1,this.touchMove=0,this.mode==="practice"&&this.state.phase==="match"&&(this.paused=!0)});mt(this,"pointerDown",t=>{t.pointerType!=="touch"&&(this.mouseDown=!0,this.pointerMove(t))});mt(this,"pointerUp",()=>{this.mouseDown=!1});mt(this,"pointerMove",t=>{if(t.pointerType==="touch")return;const e=this.scene.aim(t.clientX,t.clientY);this.input.aimX=e.x,this.input.aimY=e.y});mt(this,"animate",t=>{var e,i,s,r,o;try{const a=Math.min(.08,(t-this.last)/1e3||0);if(this.last=t,this.mode==="online")(e=this.session)==null||e.advance(a);else if(!this.paused)for(this.accumulator+=a;this.accumulator>=1/60;)this.practiceSim.step([this.poll()]),this.accumulator-=1/60;const l=(s=(i=this.session)==null?void 0:i.wrapper)==null?void 0:s.rollbackNetcode,c=this.mode==="online"?((r=l==null?void 0:l.history[0])==null?void 0:r.frame)??-1:this.state.frame,h=this.ledger.collect(this.state.events,c);this.sound.updateView(),this.scene.present(h);for(const f of h)this.sound.play(f),f.kind==="death"&&f.actor===this.localId&&f.cause&&(this.advice=this.journal.discover(f.cause));const u=this.state.actors[this.localId];if(u.death&&u.deathFrame<=c&&!this.advice&&(this.advice=this.journal.discover(u.death)),this.reportTime+=a,this.reportTime>.08){this.reportTime=0;const f=this.state,d=JSON.parse(JSON.stringify(f));d.phase==="results"&&this.mode==="online"&&c<d.frame-d.phaseFrame&&(d.phase="match"),this.changed({state:d,localId:this.localId,network:{...this.network},advice:this.advice,known:[...this.journal.seen],paused:this.paused})}}catch(a){(o=this.session)==null||o.dispose(!1),this.network={...this.network,status:"failed",message:`Simulation error: ${a instanceof Error?a.message:String(a)}`},this.changed({state:this.practiceSim.snapshot(),localId:0,network:{...this.network},advice:null,known:[...this.journal.seen],paused:!1})}this.frame=requestAnimationFrame(this.animate)});this.changed=i,this.input=Yi(e),this.scene=new GS(t,()=>this.state,()=>this.localId),this.sound=new $S(s=>this.scene.soundPosition(s.x,s.y)),window.addEventListener("keydown",this.down),window.addEventListener("keyup",this.up),window.addEventListener("blur",this.blur),this.scene.canvas.addEventListener("pointerdown",this.pointerDown),window.addEventListener("pointerup",this.pointerUp),this.scene.canvas.addEventListener("pointermove",this.pointerMove),this.frame=requestAnimationFrame(this.animate)}get localId(){return this.mode==="online"?this.network.localId:0}get state(){var t;return this.mode==="online"&&((t=this.session)!=null&&t.simulation)?this.session.simulation.state:this.practiceSim.state}setLook(t){this.input.look=Uc(t)}setVenue(t){this.input.venue=Math.max(0,Math.min(2,t)),this.input.venueChange++}ready(){this.input.ready++}rematch(){this.input.rematch++,this.advice=null}spectator(t){this.scene.setSpectator(t)}command(t){this.input[t]++}touchFire(t,e,i){if(this.touchAttack=t,e!==void 0&&i!==void 0){const s=Math.max(.01,Math.hypot(e,i));this.input.aimX=e/s,this.input.aimY=-i/s}}setSound(t){this.sound.enable(t)}async online(t=""){if(!this.session){this.paused=!1,this.mode="online",this.input.ready=0,this.ledger.reset(),this.advice=null;try{const{Session:e}=await kg(async()=>{const{Session:i}=await import("./session-D2xwEEhH.js");return{Session:i}},[]);this.session=new e(()=>this.poll(),i=>{this.network=i}),await this.session.connect(t)}catch(e){this.network={...this.network,status:"failed",message:e instanceof Error?e.message:"Could not load multiplayer support."}}}}practice(){if(this.session){this.session.dispose(),location.assign(location.href.split("#")[0]);return}this.mode="practice",this.paused=!1}leave(){var t;(t=this.session)==null||t.dispose(),location.assign(location.href.split("#")[0])}poll(){return this.input.move=Math.max(-1,Math.min(1,Number(this.keys.has("KeyD")||this.keys.has("ArrowRight"))-Number(this.keys.has("KeyA")||this.keys.has("ArrowLeft"))+this.touchMove)),this.input.attack=this.mouseDown||this.touchAttack||this.keys.has("KeyJ"),JSON.parse(JSON.stringify(this.input))}dispose(){var t;cancelAnimationFrame(this.frame),(t=this.session)==null||t.dispose(),this.scene.dispose(),this.sound.dispose(),window.removeEventListener("keydown",this.down),window.removeEventListener("keyup",this.up),window.removeEventListener("blur",this.blur),window.removeEventListener("pointerup",this.pointerUp),this.scene.canvas.removeEventListener("pointerdown",this.pointerDown),this.scene.canvas.removeEventListener("pointermove",this.pointerMove)}}function jS(){try{return Uc(JSON.parse(localStorage.getItem("royale.look")??"null"))}catch{return{...ia}}}function JS(n){try{localStorage.setItem("royale.look",JSON.stringify(n))}catch{}}const ZS={class:"header-venue"},QS={class:"header-tools"},tE={key:0,class:"network-pill"},eE={key:0,class:"lobby"},nE={class:"customize"},iE=["value"],sE=["disabled"],rE=["value"],oE={class:"swatch-row"},aE=["onClick","aria-label"],lE=["onClick","aria-label"],cE={class:"swatch-row clothes-colors"},uE=["onClick","aria-label"],hE={key:0,class:"mode-buttons"},fE={class:"join-box"},dE=["disabled"],pE={key:1,class:"connection-card"},mE=["value"],gE={class:"roster-status"},_E={key:0},vE={key:1},xE=["disabled"],yE={class:"smallprint"},ME={key:1,class:"specimen"},SE={class:"match-top"},EE={class:"match-clock"},bE={class:"player-hud"},wE={class:"health-heading"},TE={class:"health-bar"},AE={class:"body-status"},RE={key:0},CE={key:1},PE={class:"weapon-readout"},LE={key:0},IE={key:1},DE={key:2},UE={class:"body-panel"},NE={key:0,class:"death-overlay"},OE={class:"spectator-buttons"},FE=["onClick"],BE={class:"touch-controls"},kE={class:"touch-actions"},zE={class:"eyebrow"},HE={key:0,class:"result-advice"},VE={class:"result-stat"},GE={key:0},WE={key:4},XE={key:5,class:"modal-backdrop"},YE={class:"pause-card"},qE={key:6,class:"modal-backdrop"},$E={class:"pause-card"},KE={key:7,class:"modal-backdrop"},jE={class:"journal"},JE={key:0},ZE={key:1,class:"modal-backdrop"},QE={class:"pause-card"},tb=rm({__name:"App",setup(n){const t=Ke(),e=Ke(jS()),i=Ke(0),s=Ke(!1),r=Ke(!1),o=Ke(!1),a=Ke("COPY INVITE"),l=Ke(""),c=Ke(new URLSearchParams(location.hash.slice(1)).get("room")??""),h=Ke({state:new gd().state,localId:0,network:{status:"offline",invite:"",message:"Practice — one human, seven bots.",localId:0,ping:0},advice:null,known:[],paused:!1});let u;const f=nn(()=>h.value.state),d=nn(()=>f.value.actors[h.value.localId]),g=nn(()=>f.value.phase==="lobby"||f.value.phase==="countdown"),v=nn(()=>h.value.network.status!=="offline"),m=nn(()=>h.value.network.status==="connected"),p=nn(()=>f.value.actors.filter(ot=>ot.hp>0&&!ot.pendingSpawn)),T=nn(()=>!d.value.parts.armL&&!d.value.parts.armR?"body":d.value.weapons[d.value.slot]),M=nn(()=>sn.filter(ot=>d.value.parts[ot]>0).length),E=nn(()=>Cs.find(ot=>ot.id===f.value.venue)),F=nn(()=>["failed","closed"].includes(h.value.network.status)),I=nn(()=>{const ot=f.value.phase==="match"?Math.floor(f.value.phaseFrame/60):0;return`${String(Math.floor(ot/60)).padStart(2,"0")}:${String(ot%60).padStart(2,"0")}`}),R=nn(()=>d.value.ready);lr(()=>h.value.state.venue,ot=>{i.value=Cs.findIndex(L=>L.id===ot)});function z(){c.value=new URLSearchParams(location.hash.slice(1)).get("room")??""}function ct(){u==null||u.setVenue(i.value)}function x(){s.value=!s.value,u==null||u.setSound(s.value)}function w(){r.value=!r.value,u&&(u.scene.reducedEffects=r.value)}async function K(){await(u==null?void 0:u.online())}async function Y(){const ot=c.value.match(/room=([a-f\d-]{36})/i);await(u==null?void 0:u.online((ot==null?void 0:ot[1])??c.value.trim()))}async function Q(){try{await navigator.clipboard.writeText(h.value.network.invite),a.value="COPIED"}catch{a.value="SELECT LINK BELOW"}}lr(e,ot=>{JS(ot),u==null||u.setLook(ot)},{deep:!0});const lt=Ke(null),V=Ke(null),it=Ke({x:0,y:0});function H(ot,L){if(!u)return;const It=L==="move"?lt:V,$t=ot.currentTarget;if(ot.type==="pointerdown"){if(It.value!==null)return;It.value=ot.pointerId,$t.setPointerCapture(ot.pointerId)}if(It.value!==ot.pointerId)return;const D=$t.getBoundingClientRect(),j=(ot.clientX-D.left-D.width/2)/32,vt=(ot.clientY-D.top-D.height/2)/32,xt=Math.max(1,Math.hypot(j,vt));L==="move"?(u.touchMove=j/xt,it.value={x:j/xt,y:vt/xt}):u.touchFire(!0,j/xt,vt/xt)}function gt(ot,L){if(!u)return;const It=L==="move"?lt:V;It.value===ot.pointerId&&(It.value=null,L==="move"?(u.touchMove=0,it.value={x:0,y:0}):u.touchFire(!1))}return Gf(()=>{window.addEventListener("hashchange",z);try{u=new KS(t.value,e.value,ot=>h.value=ot)}catch(ot){l.value=ot instanceof Error?ot.message:"WebGL could not start."}}),Wf(()=>{window.removeEventListener("hashchange",z),u==null||u.dispose()}),(ot,L)=>{var It,$t;return Gt(),Wt("div",{class:ni(["royale",{"in-lobby":g.value}])},[G("div",{ref_key:"viewport",ref:t,class:"viewport"},null,512),L[66]||(L[66]=G("div",{class:"vignette"},null,-1)),L[67]||(L[67]=G("div",{class:"scanlines","aria-hidden":"true"},null,-1)),G("header",null,[L[27]||(L[27]=G("a",{class:"logo",href:"./"},[te("R"),G("span",null,"®")],-1)),G("span",ZS,[te(Bt(E.value.name)+" ",1),L[25]||(L[25]=G("i",null,"/",-1)),L[26]||(L[26]=te(" EST. BAD IDEA",-1))]),G("div",QS,[m.value?(Gt(),Wt("span",tE,"P2P · "+Bt(h.value.network.ping)+" MS",1)):Le("",!0),G("button",{onClick:x},"SOUND "+Bt(s.value?"ON":"OFF"),1),G("button",{onClick:w},"FX "+Bt(r.value?"LOW":"FULL"),1),v.value?(Gt(),Wt("button",{key:1,onClick:L[0]||(L[0]=D=>{var j;return(j=Se(u))==null?void 0:j.leave()})},"LEAVE P2P")):Le("",!0),G("button",{onClick:L[1]||(L[1]=D=>o.value=!o.value)},"DEATH NOTES "+Bt(h.value.known.length),1)])]),l.value?(Gt(),Wt("div",ZE,[G("section",QE,[L[64]||(L[64]=G("h2",null,[te("THE WORLD"),G("br"),te("DIDN’T LOAD.")],-1)),G("p",null,Bt(l.value),1),L[65]||(L[65]=G("p",null,"A WebGL-capable browser is required.",-1))])])):(Gt(),Wt(ge,{key:0},[g.value?(Gt(),Wt("section",eE,[L[41]||(L[41]=G("p",{class:"eyebrow"},[G("span"),te(" SOME ASSEMBLY REQUIRED.")],-1)),L[42]||(L[42]=G("h1",null,[te("ROYALE"),G("span",null,".")],-1)),L[43]||(L[43]=G("p",{class:"tagline"},[te("LAST ONE STANDING."),G("br"),te("OR WHATEVER’S LEFT.")],-1)),L[44]||(L[44]=G("div",{class:"lobby-rule"},[G("b",null,"01 / CHECK YOURSELF IN"),G("span",null,"8 ENTER. MOSTLY.")],-1)),G("div",nE,[G("label",null,[L[29]||(L[29]=te("GENDER",-1)),Ys(G("select",{"onUpdate:modelValue":L[2]||(L[2]=D=>e.value.gender=D)},[...L[28]||(L[28]=[G("option",{value:0},"WOMAN",-1),G("option",{value:1},"MAN",-1),G("option",{value:2},"NONBINARY",-1)])],512),[[qr,e.value.gender,void 0,{number:!0}]])]),G("label",null,[L[30]||(L[30]=te("HAIR",-1)),Ys(G("select",{"onUpdate:modelValue":L[3]||(L[3]=D=>e.value.hair=D)},[(Gt(),Wt(ge,null,qn(["CROPPED","CURLS","MOHAWK","LONG","SHAVED"],(D,j)=>G("option",{key:D,value:j},Bt(D),9,iE)),64))],512),[[qr,e.value.hair,void 0,{number:!0}]])]),G("label",null,[L[32]||(L[32]=te("CLOTHING",-1)),Ys(G("select",{"onUpdate:modelValue":L[4]||(L[4]=D=>e.value.clothes=D)},[...L[31]||(L[31]=[G("option",{value:0},"JACKET",-1),G("option",{value:1},"TANK TOP",-1),G("option",{value:2},"COVERALLS",-1)])],512),[[qr,e.value.clothes,void 0,{number:!0}]])]),G("label",null,[L[33]||(L[33]=te("VENUE",-1)),Ys(G("select",{"onUpdate:modelValue":L[5]||(L[5]=D=>i.value=D),disabled:m.value&&h.value.localId!==0,onChange:ct},[(Gt(!0),Wt(ge,null,qn(Se(Cs),(D,j)=>(Gt(),Wt("option",{key:D.id,value:j},Bt(D.name),9,rE))),128))],40,sE),[[qr,i.value,void 0,{number:!0}]])])]),G("div",oE,[L[34]||(L[34]=G("span",null,"SKIN",-1)),(Gt(!0),Wt(ge,null,qn(Se(Or),(D,j)=>(Gt(),Wt("button",{key:D,class:ni({chosen:e.value.skin===j}),style:Si({background:D}),onClick:vt=>e.value.skin=j,"aria-label":`Skin tone ${j+1}`},null,14,aE))),128)),L[35]||(L[35]=G("span",{class:"hair-label"},"HAIR",-1)),(Gt(!0),Wt(ge,null,qn(Se(sa),(D,j)=>(Gt(),Wt("button",{key:D,style:Si({background:D}),class:ni({chosen:e.value.hairColor===j}),onClick:vt=>e.value.hairColor=j,"aria-label":`Hair color ${j+1}`},null,14,lE))),128))]),G("div",cE,[L[36]||(L[36]=G("span",null,"THREADS",-1)),(Gt(!0),Wt(ge,null,qn(Se(Us),(D,j)=>(Gt(),Wt("button",{key:D,style:Si({background:D}),class:ni({chosen:e.value.color===j}),onClick:vt=>e.value.color=j,"aria-label":`Clothing color ${j+1}`},null,14,uE))),128)),L[37]||(L[37]=G("small",null,"ALL LOOKS. NO STAT BOOSTS.",-1))]),v.value?Le("",!0):(Gt(),Wt("div",hE,[G("button",{class:"secondary",onClick:K},[...L[38]||(L[38]=[te("HOST P2P ",-1),G("span",null,"↗",-1)])]),G("div",fE,[Ys(G("input",{"onUpdate:modelValue":L[6]||(L[6]=D=>c.value=D),"aria-label":"Invite link or room ID",placeholder:"INVITE LINK / ROOM ID"},null,512),[[Rg,c.value]]),G("button",{onClick:Y,disabled:!c.value.trim()},"JOIN",8,dE)])])),v.value&&!m.value?(Gt(),Wt("div",pE,[G("b",null,Bt(h.value.network.status.toUpperCase()),1),G("p",null,Bt(h.value.network.message),1),h.value.network.invite?(Gt(),Wt(ge,{key:0},[G("button",{onClick:Q},Bt(a.value)+" ↗",1),G("input",{value:h.value.network.invite,readonly:"","aria-label":"P2P invite link"},null,8,mE)],64)):Le("",!0),G("button",{class:"cancel-host",onClick:L[7]||(L[7]=D=>{var j;return(j=Se(u))==null?void 0:j.leave()})},"CANCEL / PRACTICE")])):Le("",!0),G("div",gE,[L[39]||(L[39]=G("span",{class:"tiny-dot"},null,-1)),G("b",null,Bt(m.value?"2 HUMANS / 6 BOTS":v.value?"WAITING FOR A HUMAN":"PRACTICE / 7 BOTS"),1),m.value?(Gt(),Wt("span",_E,Bt(f.value.actors.filter(D=>D.human&&D.ready).length)+" / 2 READY",1)):(Gt(),Wt("span",vE,"NO CREDIT CARD REQUIRED"))]),G("button",{class:"primary",disabled:v.value&&!m.value,onClick:L[8]||(L[8]=D=>{var j;return(j=Se(u))==null?void 0:j.ready()})},[te(Bt(f.value.phase==="countdown"?`BAD DECISIONS IN ${Math.max(1,3-Math.floor(f.value.phaseFrame/60))}…`:R.value?"READY. UNFORTUNATELY.":m.value?"READY TO FALL APART":"PRACTICE BAD DECISIONS")+" ",1),L[40]||(L[40]=G("span",null,"↗",-1))],8,xE),G("p",yE,Bt(m.value?"BOTH HUMANS MUST READY UP. COSMETIC CHANGES RESET READINESS.":"P2P: TWO HUMANS + SIX BOTS. PRACTICE WORKS OFFLINE."),1)])):Le("",!0),g.value?(Gt(),Wt("div",ME,[...L[45]||(L[45]=[G("span",null,[te("YOUR FUTURE"),G("br"),te("FORMER SELF.")],-1),G("i",null,null,-1),G("small",null,[te("100% ORIGINAL PARTS"),G("br"),te("FOR NOW.")],-1)])])):Le("",!0),f.value.phase==="match"?(Gt(),Wt(ge,{key:2},[G("div",SE,[G("div",null,[L[47]||(L[47]=G("small",null,"STILL TECHNICALLY ALIVE",-1)),G("b",null,[te(Bt(p.value.length),1),L[46]||(L[46]=G("span",null,"/ 8",-1))])]),G("div",EE,[te(Bt(I.value),1),G("small",null,Bt(f.value.actors.some(D=>D.pendingSpawn)?"DESTROY BOTH CRATES":f.value.phaseFrame<=1800?"SAFE AREA HOLDING":"SAFE AREA CONTRACTING"),1)])]),G("div",bE,[G("div",wE,[G("b",null,[te(Bt(Math.ceil(d.value.hp)),1),L[48]||(L[48]=G("span",null,"%",-1))]),G("span",null,Bt(d.value.bleedOutAt!==null?"BLEEDING OUT / "+Math.max(0,Math.ceil((d.value.bleedOutAt-f.value.frame)/60))+"s":d.value.parts.head?"VITALITY":"HEADLESS / MOSTLY GUESSWORK"),1)]),G("div",TE,[G("i",{style:Si({width:d.value.hp+"%"})},null,4)]),G("div",AE,[G("span",null,"PARTS "+Bt(M.value)+" / "+Bt(Se(sn).length),1),M.value<Se(sn).length?(Gt(),Wt("span",RE,"SOME ASSEMBLY LOST")):(Gt(),Wt("span",CE,"FACTORY CONDITION"))]),G("div",PE,[G("b",null,Bt(T.value.toUpperCase()),1),T.value==="smg"||T.value==="shotgun"?(Gt(),Wt("span",LE,Bt(d.value.ammo)+" / "+Bt(d.value.reserve),1)):T.value==="laser"||T.value==="flamethrower"?(Gt(),Wt("span",IE,Bt(d.value.ammo)+" "+Bt(T.value==="laser"?"SHOTS":"FUEL"),1)):(Gt(),Wt("span",DE,Bt(T.value==="body"?"LIMITED DIGNITY":"UNLIMITED REGRETS"),1))]),G("small",null,Bt(d.value.reloading?"RELOADING…":"E PICKUP · Q / SHIFT SWAP · R RELOAD"),1)]),G("div",UE,[L[49]||(L[49]=G("small",null,"INVENTORY OF YOU",-1)),(Gt(),Wt(ge,null,qn([["head"],["armL","armR"],["handL","handR"],["thighL","thighR"],["footL","footR"]],D=>G("div",{key:D.join()},[G("span",null,Bt(D[0].startsWith("thigh")?"LEGS":D[0].replace(/[LR]$/,"").toUpperCase()),1),(Gt(!0),Wt(ge,null,qn(D,j=>(Gt(),Wt("i",{key:j,class:ni({lost:d.value.parts[j]<=0})},null,2))),128))])),64))]),d.value.hp<=0?(Gt(),Wt("div",NE,[L[50]||(L[50]=G("p",{class:"eyebrow"},"YOU HAVE BEEN DISCONTINUED.",-1)),G("h2",null,Bt(((It=h.value.advice)==null?void 0:It.title)??"The warranty did not cover that."),1),G("p",null,Bt((($t=h.value.advice)==null?void 0:$t.hint)??"A familiar lesson. Still not a pleasant one."),1),G("small",null,"SPECTATING — "+Bt(p.value.length)+" REMAIN",1),G("div",OE,[(Gt(!0),Wt(ge,null,qn(p.value,D=>(Gt(),Wt("button",{key:D.id,onClick:j=>{var vt;return(vt=Se(u))==null?void 0:vt.spectator(D.id)}},Bt(D.name),9,FE))),128))])])):Le("",!0),G("div",BE,[G("div",{class:"stick",onPointerdown:L[9]||(L[9]=D=>H(D,"move")),onPointermove:L[10]||(L[10]=D=>H(D,"move")),onPointerup:L[11]||(L[11]=D=>gt(D,"move")),onPointercancel:L[12]||(L[12]=D=>gt(D,"move"))},[G("i",{style:Si({transform:`translate(${it.value.x*25}px,${it.value.y*25}px)`})},null,4),L[51]||(L[51]=G("small",null,"MOVE",-1))],32),G("div",kE,[G("button",{onClick:L[13]||(L[13]=D=>{var j;return(j=Se(u))==null?void 0:j.command("jump")})},"JUMP"),G("button",{onClick:L[14]||(L[14]=D=>{var j;return(j=Se(u))==null?void 0:j.command("pickup")})},"PICK UP"),G("button",{onClick:L[15]||(L[15]=D=>{var j;return(j=Se(u))==null?void 0:j.command("cycle")})},"SWAP"),G("button",{onClick:L[16]||(L[16]=D=>{var j;return(j=Se(u))==null?void 0:j.command("reload")})},"RELOAD")]),G("div",{class:"stick fire-stick",onPointerdown:L[17]||(L[17]=D=>H(D,"aim")),onPointermove:L[18]||(L[18]=D=>H(D,"aim")),onPointerup:L[19]||(L[19]=D=>gt(D,"aim")),onPointercancel:L[20]||(L[20]=D=>gt(D,"aim"))},[...L[52]||(L[52]=[G("i",null,null,-1),G("small",null,"AIM / FIRE",-1)])],32)])],64)):Le("",!0),f.value.phase==="results"?(Gt(),Wt("section",{key:3,class:ni(["result-card",{"is-victory":f.value.winner===h.value.localId}])},[G("p",zE,Bt(f.value.winner===h.value.localId?"VICTORY / YOU SURVIVED":"ROUND OVER"),1),G("h2",null,Bt(f.value.winner===null?"NO SURVIVORS.":f.value.winner===h.value.localId?"YOU WON.":"YOU WERE ELIMINATED."),1),G("p",null,Bt(f.value.winner===null?"A draw. Nobody survived the round.":f.value.winner===h.value.localId?"Victory — you are the last player standing.":`${f.value.actors[f.value.winner].name} won the round.`),1),h.value.advice?(Gt(),Wt("div",HE,[G("b",null,Bt(h.value.advice.title),1),G("span",null,Bt(h.value.advice.hint),1)])):Le("",!0),G("div",VE,[f.value.winner===h.value.localId?(Gt(),Wt("span",GE,[L[53]||(L[53]=te("HEALTH ",-1)),G("b",null,Bt(Math.ceil(d.value.hp))+"%",1)])):Le("",!0),G("span",null,[L[54]||(L[54]=te("ELIMINATIONS ",-1)),G("b",null,Bt(d.value.kills),1)]),G("span",null,[L[55]||(L[55]=te("PARTS LEFT ",-1)),G("b",null,Bt(M.value),1)])]),G("button",{class:"primary",onClick:L[21]||(L[21]=D=>{var j;return(j=Se(u))==null?void 0:j.rematch()})},[...L[56]||(L[56]=[te("ANOTHER TERRIBLE IDEA ",-1),G("span",null,"↗",-1)])]),G("small",null,Bt(m.value?"BOTH HUMANS MUST REQUEST A REMATCH.":"NEXT ROUND ROTATES TO A NEW VENUE."),1)],2)):Le("",!0),f.value.phase!=="results"?(Gt(),Wt("footer",WE,[...L[57]||(L[57]=[G("span",null,"A / D · ← / → MOVE",-1),G("span",null,"SPACE JUMP",-1),G("span",null,"MOUSE / J ATTACK",-1),G("span",null,"E PICKUP",-1),G("span",null,"Q / SHIFT WEAPON",-1),G("span",null,"R RELOAD",-1)])])):Le("",!0),h.value.paused?(Gt(),Wt("div",XE,[G("section",YE,[L[58]||(L[58]=G("p",{class:"eyebrow"},"PRACTICE / HOLDING IT TOGETHER",-1)),L[59]||(L[59]=G("h2",null,[te("TAKE A BREATHER."),G("br"),te("WHILE YOU HAVE LUNGS.")],-1)),G("button",{class:"primary",onClick:L[22]||(L[22]=D=>Se(u)&&(Se(u).paused=!1))},"BACK TO IT ↗")])])):Le("",!0),F.value?(Gt(),Wt("div",qE,[G("section",$E,[L[60]||(L[60]=G("p",{class:"eyebrow"},"CONNECTION ENDED",-1)),L[61]||(L[61]=G("h2",null,[te("TECHNICAL"),G("br"),te("DIFFICULTIES.")],-1)),G("p",null,Bt(h.value.network.message),1),G("button",{class:"primary",onClick:L[23]||(L[23]=D=>{var j;return(j=Se(u))==null?void 0:j.leave()})},"RETURN TO LOBBY ↗")])])):Le("",!0),o.value?(Gt(),Wt("div",KE,[G("section",jE,[G("button",{class:"close",onClick:L[24]||(L[24]=D=>o.value=!1)},"CLOSE ×"),L[62]||(L[62]=G("p",{class:"eyebrow"},"LEARNING, APPARENTLY.",-1)),L[63]||(L[63]=G("h2",null,"DEATH NOTES.",-1)),h.value.known.length?Le("",!0):(Gt(),Wt("p",JE,"Discover new ways to die. Receive unsolicited advice.")),(Gt(!0),Wt(ge,null,qn(h.value.known,D=>(Gt(),Wt("article",{key:D},[G("b",null,Bt(Se(Ho)[D].title),1),G("p",null,Bt(Se(Ho)[D].hint),1)]))),128))])])):Le("",!0)],64))],2)}}});Ig(tb).use(Og()).mount("#app");export{gd as S,Yi as e,zg as v};
