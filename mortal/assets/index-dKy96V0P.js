(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ec(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const ct={},Ar=[],On=()=>{},nh=()=>!1,Jo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Qo=t=>t.startsWith("onUpdate:"),Ut=Object.assign,Tc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Sp=Object.prototype.hasOwnProperty,tt=(t,e)=>Sp.call(t,e),Be=Array.isArray,wr=t=>bs(t)==="[object Map]",ih=t=>bs(t)==="[object Set]",uu=t=>bs(t)==="[object Date]",ze=t=>typeof t=="function",vt=t=>typeof t=="string",hn=t=>typeof t=="symbol",at=t=>t!==null&&typeof t=="object",rh=t=>(at(t)||ze(t))&&ze(t.then)&&ze(t.catch),sh=Object.prototype.toString,bs=t=>sh.call(t),yp=t=>bs(t).slice(8,-1),oh=t=>bs(t)==="[object Object]",ea=t=>vt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,os=Ec(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ta=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},Mp=/-\w/g,yn=ta(t=>t.replace(Mp,e=>e.slice(1).toUpperCase())),Ep=/\B([A-Z])/g,tr=ta(t=>t.replace(Ep,"-$1").toLowerCase()),ah=ta(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ea=ta(t=>t?`on${ah(t)}`:""),Un=(t,e)=>!Object.is(t,e),_o=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},lh=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},bc=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let fu;const na=()=>fu||(fu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function st(t){if(Be(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=vt(i)?wp(i):st(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(vt(t)||at(t))return t}const Tp=/;(?![^(]*\))/g,bp=/:([^]+)/,Ap=/\/\*[^]*?\*\//g;function wp(t){const e={};return t.replace(Ap,"").split(Tp).forEach(n=>{if(n){const i=n.split(bp);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Dt(t){let e="";if(vt(t))e=t;else if(Be(t))for(let n=0;n<t.length;n++){const i=Dt(t[n]);i&&(e+=i+" ")}else if(at(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Rp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Cp=Ec(Rp);function ch(t){return!!t||t===""}function Pp(t,e){if(t.length!==e.length)return!1;let n=!0;for(let i=0;n&&i<t.length;i++)n=Ac(t[i],e[i]);return n}function Ac(t,e){if(t===e)return!0;let n=uu(t),i=uu(e);if(n||i)return n&&i?t.getTime()===e.getTime():!1;if(n=hn(t),i=hn(e),n||i)return t===e;if(n=Be(t),i=Be(e),n||i)return n&&i?Pp(t,e):!1;if(n=at(t),i=at(e),n||i){if(!n||!i)return!1;const r=Object.keys(t).length,s=Object.keys(e).length;if(r!==s)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Ac(t[o],e[o]))return!1}}return String(t)===String(e)}const uh=t=>!!(t&&t.__v_isRef===!0),mt=t=>vt(t)?t:t==null?"":Be(t)||at(t)&&(t.toString===sh||!ze(t.toString))?uh(t)?mt(t.value):JSON.stringify(t,fh,2):String(t),fh=(t,e)=>uh(e)?fh(t,e.value):wr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r],s)=>(n[Ta(i,s)+" =>"]=r,n),{})}:ih(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Ta(n))}:hn(e)?Ta(e):at(e)&&!Be(e)&&!oh(e)?String(e):e,Ta=(t,e="")=>{var n;return hn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Et;class hh{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&Et&&(Et.active?(this.parent=Et,this.index=(Et.scopes||(Et.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes){const i=this.scopes.slice();for(e=0,n=i.length;e<n;e++)i[e].pause()}for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes){const r=this.scopes.slice();for(e=0,n=r.length;e<n;e++)r[e].resume()}const i=this.effects.slice();for(e=0,n=i.length;e<n;e++)i[e].resume()}}run(e){if(this._active){const n=Et;try{return Et=this,e()}finally{Et=n}}}on(){++this._on===1&&(this.prevScope=Et,Et=this)}off(){if(this._on>0&&--this._on===0){if(Et===this)Et=this.prevScope;else{let e=Et;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){const r=this.scopes.slice();for(n=0,i=r.length;n<i;n++)r[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function dh(t){return new hh(t)}function ph(){return Et}function Lp(t,e=!1){Et&&Et.cleanups.push(t)}let ft;const ba=new WeakSet;class mh{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Et&&(Et.active?Et.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ba.has(this)&&(ba.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||_h(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,hu(this),vh(this);const e=ft,n=Mn;ft=this,Mn=!0;try{return this.fn()}finally{xh(this),ft=e,Mn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Cc(e);this.deps=this.depsTail=void 0,hu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ba.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){vl(this)&&this.run()}get dirty(){return vl(this)}}let gh=0,as,ls;function _h(t,e=!1){if(t.flags|=8,e){t.next=ls,ls=t;return}t.next=as,as=t}function wc(){gh++}function Rc(){if(--gh>0)return;if(ls){let e=ls;for(ls=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;as;){let e=as;for(as=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function vh(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function xh(t){let e,n=t.depsTail,i=n;for(;i;){const r=i.prevDep;i.version===-1?(i===n&&(n=r),Cc(i),Dp(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}t.deps=e,t.depsTail=n}function vl(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Sh(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Sh(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===ms)||(t.globalVersion=ms,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!vl(t))))return;t.flags|=2;const e=t.dep,n=ft,i=Mn;ft=t,Mn=!0;try{vh(t);const r=t.fn(t._value);(e.version===0||Un(r,t._value))&&(t.flags|=128,t._value=r,e.version++)}catch(r){throw e.version++,r}finally{ft=n,Mn=i,xh(t),t.flags&=-3}}function Cc(t,e=!1){const{dep:n,prevSub:i,nextSub:r}=t;if(i&&(i.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let s=n.computed.deps;s;s=s.nextDep)Cc(s,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Dp(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Mn=!0;const yh=[];function ri(){yh.push(Mn),Mn=!1}function si(){const t=yh.pop();Mn=t===void 0?!0:t}function hu(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=ft;ft=void 0;try{e()}finally{ft=n}}}let ms=0;class Ip{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Pc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!ft||!Mn||ft===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ft)n=this.activeLink=new Ip(ft,this),ft.deps?(n.prevDep=ft.depsTail,ft.depsTail.nextDep=n,ft.depsTail=n):ft.deps=ft.depsTail=n,Mh(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=ft.depsTail,n.nextDep=void 0,ft.depsTail.nextDep=n,ft.depsTail=n,ft.deps===n&&(ft.deps=i)}return n}trigger(e){this.version++,ms++,this.notify(e)}notify(e){wc();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Rc()}}}function Mh(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Mh(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Lo=new WeakMap,Ki=Symbol(""),xl=Symbol(""),gs=Symbol("");function Ft(t,e,n){if(Mn&&ft){let i=Lo.get(t);i||Lo.set(t,i=new Map);let r=i.get(n);r||(i.set(n,r=new Pc),r.map=i,r.key=n),r.track()}}function Zn(t,e,n,i,r,s){const o=Lo.get(t);if(!o){ms++;return}const a=l=>{l&&l.trigger()};if(wc(),e==="clear")o.forEach(a);else{const l=Be(t),c=l&&ea(n);if(l&&n==="length"){const u=Number(i);o.forEach((f,h)=>{(h==="length"||h===gs||!hn(h)&&h>=u)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get(gs)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Ki)),wr(t)&&a(o.get(xl)));break;case"delete":l||(a(o.get(Ki)),wr(t)&&a(o.get(xl)));break;case"set":wr(t)&&a(o.get(Ki));break}}Rc()}function Up(t,e){const n=Lo.get(t);return n&&n.get(e)}function ir(t){const e=Ze(t);return e===t?e:(Ft(e,"iterate",gs),rn(t)?e:e.map(Tn))}function ia(t){return Ft(t=Ze(t),"iterate",gs),t}function Ln(t,e){return oi(t)?Nr(ii(t)?Tn(e):e):Tn(e)}const Np={__proto__:null,[Symbol.iterator](){return Aa(this,Symbol.iterator,t=>Ln(this,t))},concat(...t){return ir(this).concat(...t.map(e=>Be(e)?ir(e):e))},entries(){return Aa(this,"entries",t=>(t[1]=Ln(this,t[1]),t))},every(t,e){return Gn(this,"every",t,e,void 0,arguments)},filter(t,e){return Gn(this,"filter",t,e,n=>n.map(i=>Ln(this,i)),arguments)},find(t,e){return Gn(this,"find",t,e,n=>Ln(this,n),arguments)},findIndex(t,e){return Gn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Gn(this,"findLast",t,e,n=>Ln(this,n),arguments)},findLastIndex(t,e){return Gn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Gn(this,"forEach",t,e,void 0,arguments)},includes(...t){return wa(this,"includes",t)},indexOf(...t){return wa(this,"indexOf",t)},join(t){return ir(this).join(t)},lastIndexOf(...t){return wa(this,"lastIndexOf",t)},map(t,e){return Gn(this,"map",t,e,void 0,arguments)},pop(){return $r(this,"pop")},push(...t){return $r(this,"push",t)},reduce(t,...e){return du(this,"reduce",t,e)},reduceRight(t,...e){return du(this,"reduceRight",t,e)},shift(){return $r(this,"shift")},some(t,e){return Gn(this,"some",t,e,void 0,arguments)},splice(...t){return $r(this,"splice",t)},toReversed(){return ir(this).toReversed()},toSorted(t){return ir(this).toSorted(t)},toSpliced(...t){return ir(this).toSpliced(...t)},unshift(...t){return $r(this,"unshift",t)},values(){return Aa(this,"values",t=>Ln(this,t))}};function Aa(t,e,n){const i=ia(t),r=i[e]();return i!==t&&!rn(t)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=n(s.value)),s}),r}const Op=Array.prototype;function Gn(t,e,n,i,r,s){const o=ia(t),a=o!==t&&!rn(t),l=o[e];if(l!==Op[e]){const f=l.apply(t,s);return a?Tn(f):f}let c=n;o!==t&&(a?c=function(f,h){return n.call(this,Ln(t,f),h,t)}:n.length>2&&(c=function(f,h){return n.call(this,f,h,t)}));const u=l.call(o,c,i);return a&&r?r(u):u}function du(t,e,n,i){const r=ia(t),s=r!==t&&!rn(t);let o=n,a=!1;r!==t&&(s?(a=i.length===0,o=function(c,u,f){return a&&(a=!1,c=Ln(t,c)),n.call(this,c,Ln(t,u),f,t)}):n.length>3&&(o=function(c,u,f){return n.call(this,c,u,f,t)}));const l=r[e](o,...i);return a?Ln(t,l):l}function wa(t,e,n){const i=Ze(t);Ft(i,"iterate",gs);const r=i[e](...n);return(r===-1||r===!1)&&ra(n[0])?(n[0]=Ze(n[0]),i[e](...n)):r}function $r(t,e,n=[]){ri(),wc();const i=Ze(t)[e].apply(t,n);return Rc(),si(),i}const Fp=Ec("__proto__,__v_isRef,__isVue"),Eh=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(hn));function Bp(t){hn(t)||(t=String(t));const e=Ze(this);return Ft(e,"has",t),e.hasOwnProperty(t)}class Th{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return s;if(n==="__v_raw")return i===(r?s?Kp:Rh:s?wh:Ah).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Be(e);if(!r){let l;if(o&&(l=Np[n]))return l;if(n==="hasOwnProperty")return Bp}const a=Reflect.get(e,n,xt(e)?e:i);if((hn(n)?Eh.has(n):Fp(n))||(r||Ft(e,"get",n),s))return a;if(xt(a)){const l=o&&ea(n)?a:a.value;return r&&at(l)?yl(l):l}return at(a)?r?yl(a):As(a):a}}class bh extends Th{constructor(e=!1){super(!1,e)}set(e,n,i,r){let s=e[n];const o=Be(e)&&ea(n);if(!this._isShallow){const c=oi(s);if(!rn(i)&&!oi(i)&&(s=Ze(s),i=Ze(i)),!o&&xt(s)&&!xt(i))return c||(s.value=i),!0}const a=o?Number(n)<e.length:tt(e,n),l=Reflect.set(e,n,i,xt(e)?e:r);return e===Ze(r)&&l&&(a?Un(i,s)&&Zn(e,"set",n,i):Zn(e,"add",n,i)),l}deleteProperty(e,n){const i=tt(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&i&&Zn(e,"delete",n,void 0),r}has(e,n){const i=Reflect.has(e,n);return(!hn(n)||!Eh.has(n))&&Ft(e,"has",n),i}ownKeys(e){return Ft(e,"iterate",Be(e)?"length":Ki),Reflect.ownKeys(e)}}class kp extends Th{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Hp=new bh,Gp=new kp,zp=new bh(!0);const Sl=t=>t,Hs=t=>Reflect.getPrototypeOf(t);function Vp(t,e,n){return function(...i){const r=this.__v_raw,s=Ze(r),o=wr(s),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=r[t](...i),u=n?Sl:e?Nr:Tn;return!e&&Ft(s,"iterate",l?xl:Ki),Ut(Object.create(c),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}}})}}function Gs(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Wp(t,e){const n={get(r){const s=this.__v_raw,o=Ze(s),a=Ze(r);t||(Un(r,a)&&Ft(o,"get",r),Ft(o,"get",a));const{has:l}=Hs(o),c=e?Sl:t?Nr:Tn;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!t&&Ft(Ze(r),"iterate",Ki),r.size},has(r){const s=this.__v_raw,o=Ze(s),a=Ze(r);return t||(Un(r,a)&&Ft(o,"has",r),Ft(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=Ze(a),c=e?Sl:t?Nr:Tn;return!t&&Ft(l,"iterate",Ki),a.forEach((u,f)=>r.call(s,c(u),c(f),o))}};return Ut(n,t?{add:Gs("add"),set:Gs("set"),delete:Gs("delete"),clear:Gs("clear")}:{add(r){const s=Ze(this),o=Hs(s),a=Ze(r),l=!e&&!rn(r)&&!oi(r)?a:r;return o.has.call(s,l)||Un(r,l)&&o.has.call(s,r)||Un(a,l)&&o.has.call(s,a)||(s.add(l),Zn(s,"add",l,l)),this},set(r,s){!e&&!rn(s)&&!oi(s)&&(s=Ze(s));const o=Ze(this),{has:a,get:l}=Hs(o);let c=a.call(o,r);c||(r=Ze(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?Un(s,u)&&Zn(o,"set",r,s):Zn(o,"add",r,s),this},delete(r){const s=Ze(this),{has:o,get:a}=Hs(s);let l=o.call(s,r);l||(r=Ze(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&Zn(s,"delete",r,void 0),c},clear(){const r=Ze(this),s=r.size!==0,o=r.clear();return s&&Zn(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=Vp(r,t,e)}),n}function Lc(t,e){const n=Wp(t,e);return(i,r,s)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(tt(n,r)&&r in i?n:i,r,s)}const Xp={get:Lc(!1,!1)},qp={get:Lc(!1,!0)},$p={get:Lc(!0,!1)};const Ah=new WeakMap,wh=new WeakMap,Rh=new WeakMap,Kp=new WeakMap;function Yp(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function As(t){return oi(t)?t:Dc(t,!1,Hp,Xp,Ah)}function jp(t){return Dc(t,!1,zp,qp,wh)}function yl(t){return Dc(t,!0,Gp,$p,Rh)}function Dc(t,e,n,i,r){if(!at(t)||t.__v_raw&&!(e&&t.__v_isReactive)||t.__v_skip||!Object.isExtensible(t))return t;const s=r.get(t);if(s)return s;const o=Yp(yp(t));if(o===0)return t;const a=new Proxy(t,o===2?i:n);return r.set(t,a),a}function ii(t){return oi(t)?ii(t.__v_raw):!!(t&&t.__v_isReactive)}function oi(t){return!!(t&&t.__v_isReadonly)}function rn(t){return!!(t&&t.__v_isShallow)}function ra(t){return t?!!t.__v_raw:!1}function Ze(t){const e=t&&t.__v_raw;return e?Ze(e):t}function Ic(t){return!tt(t,"__v_skip")&&Object.isExtensible(t)&&lh(t,"__v_skip",!0),t}const Tn=t=>at(t)?As(t):t,Nr=t=>at(t)?yl(t):t;function xt(t){return t?t.__v_isRef===!0:!1}function En(t){return Zp(t,!1)}function Zp(t,e){return xt(t)?t:new Jp(t,e)}class Jp{constructor(e,n){this.dep=new Pc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ze(e),this._value=n?e:Tn(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||rn(e)||oi(e);e=i?e:Ze(e),Un(e,n)&&(this._rawValue=e,this._value=i?e:Tn(e),this.dep.trigger())}}function ue(t){return xt(t)?t.value:t}const Qp={get:(t,e,n)=>e==="__v_raw"?t:ue(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return xt(r)&&!xt(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function Ch(t){return ii(t)?t:new Proxy(t,Qp)}function em(t){const e=Be(t)?new Array(t.length):{};for(const n in t)e[n]=nm(t,n);return e}class tm{constructor(e,n,i){this._object=e,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0,this._key=hn(n)?n:String(n),this._raw=Ze(e);let r=!0,s=e;if(!Be(e)||hn(this._key)||!ea(this._key))do r=!ra(s)||rn(s);while(r&&(s=s.__v_raw));this._shallow=r}get value(){let e=this._object[this._key];return this._shallow&&(e=ue(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&xt(this._raw[this._key])){const n=this._object[this._key];if(xt(n)){n.value=e;return}}this._object[this._key]=e}get dep(){return Up(this._raw,this._key)}}function nm(t,e,n){return new tm(t,e,n)}class im{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Pc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ms-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&ft!==this)return _h(this,!0),!0}get value(){const e=this.dep.track();return Sh(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function rm(t,e,n=!1){let i,r;return ze(t)?i=t:(i=t.get,r=t.set),new im(i,r,n)}const zs={},Do=new WeakMap;let Hi;function sm(t,e=!1,n=Hi){if(n){let i=Do.get(n);i||Do.set(n,i=[]),i.push(t)}}function om(t,e,n=ct){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=n,c=E=>r?E:rn(E)||r===!1||r===0?Jn(E,1):Jn(E);let u,f,h,m,v=!1,S=!1;if(xt(t)?(f=()=>t.value,v=rn(t)):ii(t)?(f=()=>c(t),v=!0):Be(t)?(S=!0,v=t.some(E=>ii(E)||rn(E)),f=()=>t.map(E=>{if(xt(E))return E.value;if(ii(E))return c(E);if(ze(E))return l?l(E,2):E()})):ze(t)?e?f=l?()=>l(t,2):t:f=()=>{if(h){ri();try{h()}finally{si()}}const E=Hi;Hi=u;try{return l?l(t,3,[m]):t(m)}finally{Hi=E}}:f=On,e&&r){const E=f,P=r===!0?1/0:r;f=()=>Jn(E(),P)}const d=ph(),p=()=>{u.stop(),d&&d.active&&Tc(d.effects,u)};if(s&&e){const E=e;e=(...P)=>{const C=E(...P);return p(),C}}let b=S?new Array(t.length).fill(zs):zs;const y=E=>{if(!(!(u.flags&1)||!u.dirty&&!E))if(e){const P=u.run();if(E||r||v||(S?P.some((C,R)=>Un(C,b[R])):Un(P,b))){h&&h();const C=Hi;Hi=u;try{const R=[P,b===zs?void 0:S&&b[0]===zs?[]:b,m];b=P,l?l(e,3,R):e(...R)}finally{Hi=C}}}else u.run()};return a&&a(y),u=new mh(f),u.scheduler=o?()=>o(y,!1):y,m=E=>sm(E,!1,u),h=u.onStop=()=>{const E=Do.get(u);if(E){if(l)l(E,4);else for(const P of E)P();Do.delete(u)}},e?i?y(!0):b=u.run():o?o(y.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function Jn(t,e=1/0,n){if(e<=0||!at(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,xt(t))Jn(t.value,e,n);else if(Be(t))for(let i=0;i<t.length;i++)Jn(t[i],e,n);else if(ih(t)||wr(t))t.forEach(i=>{Jn(i,e,n)});else if(oh(t)){for(const i in t)Jn(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&Jn(t[i],e,n)}return t}/**
* @vue/runtime-core v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ws(t,e,n,i){try{return i?t(...i):t()}catch(r){sa(r,e,n)}}function bn(t,e,n,i){if(ze(t)){const r=ws(t,e,n,i);return r&&rh(r)&&r.catch(s=>{sa(s,e,n)}),r}if(Be(t)){const r=[];for(let s=0;s<t.length;s++)r.push(bn(t[s],e,n,i));return r}}function sa(t,e,n,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||ct;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](t,l,c)===!1)return}a=a.parent}if(s){ri(),ws(s,null,10,[t,l,c]),si();return}}am(t,n,r,i,o)}function am(t,e,n,i=!0,r=!1){if(r)throw t;console.error(t)}const Gt=[];let Pn=-1;const Rr=[];let Si=null,Sr=0;const Ph=Promise.resolve();let Io=null;function Lh(t){const e=Io||Ph;return t?e.then(this?t.bind(this):t):e}function lm(t){let e=Pn+1,n=Gt.length;for(;e<n;){const i=e+n>>>1,r=Gt[i],s=_s(r);s<t||s===t&&r.flags&2?e=i+1:n=i}return e}function Uc(t){if(!(t.flags&1)){const e=_s(t),n=Gt[Gt.length-1];!n||!(t.flags&2)&&e>=_s(n)?Gt.push(t):Gt.splice(lm(e),0,t),t.flags|=1,Dh()}}function Dh(){Io||(Io=Ph.then(Uh))}function cm(t){if(!Be(t))Si&&t.id===-1?Si.splice(Sr+1,0,t):t.flags&1||(Rr.push(t),t.flags|=1);else for(let e=0;e<t.length;e++)Rr.push(t[e]);Dh()}function pu(t,e,n=Pn+1){for(;n<Gt.length;n++){const i=Gt[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;Gt.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Ih(t){if(Rr.length){const e=[...new Set(Rr)].sort((n,i)=>_s(n)-_s(i));if(Rr.length=0,Si){for(let n=0;n<e.length;n++)Si.push(e[n]);return}for(Si=e,Sr=0;Sr<Si.length;Sr++){const n=Si[Sr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Si=null,Sr=0}}const _s=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Uh(t){try{for(Pn=0;Pn<Gt.length;Pn++){const e=Gt[Pn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ws(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Pn<Gt.length;Pn++){const e=Gt[Pn];e&&(e.flags&=-2)}Pn=-1,Gt.length=0,Ih(),Io=null,(Gt.length||Rr.length)&&Uh()}}let un=null,Nh=null;function Uo(t){const e=un;return un=t,Nh=t&&t.type.__scopeId||null,e}function um(t,e=un,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&Au(-1);const s=Uo(e),o=ji.length;let a;try{a=t(...r)}finally{for(let l=ji.length;l>o;l--)rd();Uo(s),i._d&&Au(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function mu(t,e){if(un===null)return t;const n=fa(un),i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[s,o,a,l=ct]=e[r];s&&(ze(s)&&(s={mounted:s,updated:s}),s.deep&&Jn(o),i.push({dir:s,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function Di(t,e,n,i){const r=t.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(ri(),bn(l,n,8,[t.el,a,t,e]),si())}}function fm(t,e){if(Vt){let n=Vt.provides;const i=Vt.parent&&Vt.parent.provides;i===n&&(n=Vt.provides=Object.create(i)),n[t]=e}}function cs(t,e,n=!1){const i=ld();if(i||Yi){let r=Yi?Yi._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&ze(e)?e.call(i&&i.proxy):e}}function hm(){return!!(ld()||Yi)}const dm=Symbol.for("v-scx"),pm=()=>cs(dm);function Cr(t,e,n){return Oh(t,e,n)}function Oh(t,e,n=ct){const{immediate:i,deep:r,flush:s,once:o}=n,a=Ut({},n),l=e&&i||!e&&s!=="post";let c;if(Ss){if(s==="sync"){const m=pm();c=m.__watcherHandles||(m.__watcherHandles=[])}else if(!l){const m=()=>{};return m.stop=On,m.resume=On,m.pause=On,m}}const u=Vt;a.call=(m,v,S)=>bn(m,u,v,S);let f=!1;s==="post"?a.scheduler=m=>{$t(m,u&&u.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(m,v)=>{v?m():Uc(m)}),a.augmentJob=m=>{e&&(m.flags|=4),f&&(m.flags|=2,u&&(m.id=u.uid,m.i=u))};const h=om(t,e,a);return Ss&&(c?c.push(h):l&&h()),h}function mm(t,e,n){const i=this.proxy,r=vt(t)?t.includes(".")?Fh(i,t):()=>i[t]:t.bind(i,i);let s;ze(e)?s=e:(s=e.handler,n=e);const o=Cs(this),a=Oh(r,s.bind(i),n);return o(),a}function Fh(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}const gm=Symbol("_vte"),oa=t=>t.__isTeleport,Ra=Symbol("_leaveCb");function _m(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==ai){e=n;break}}return e}function Bh(t){if(!Oc(t))return oa(t.type)&&t.children?_m(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&ze(n.default))return n.default()}}function Nc(t,e){if(t.shapeFlag&6&&t.component){t.transition=e;const n=t.component.subTree;Nc(oa(n.type)&&Bh(n)||n,e)}else t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Wr(t,e){return ze(t)?Ut({name:t.name},e,{setup:t}):t}function kh(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function gu(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const No=new WeakMap;function us(t,e,n,i,r=!1){if(Be(t)){t.forEach((S,d)=>us(S,e&&(Be(e)?e[d]:e),n,i,r));return}if(fs(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&us(t,e,n,i.component.subTree);return}const s=i.shapeFlag&4?fa(i.component):i.el,o=r?null:s,{i:a,r:l}=t,c=e&&e.r,u=a.refs===ct?a.refs={}:a.refs,f=a.setupState,h=Ze(f),m=f===ct?nh:S=>gu(u,S)?!1:tt(h,S),v=(S,d)=>!(d&&gu(u,d));if(c!=null&&c!==l){if(_u(e),vt(c))u[c]=null,m(c)&&(f[c]=null);else if(xt(c)){const S=e;v(c,S.k)&&(c.value=null),S.k&&(u[S.k]=null)}}if(ze(l))ws(l,a,12,[o,u]);else{const S=vt(l),d=xt(l);if(S||d){const p=()=>{if(t.f){const b=S?m(l)?f[l]:u[l]:v()||!t.k?l.value:u[t.k];if(r)Be(b)&&Tc(b,s);else if(Be(b))b.includes(s)||b.push(s);else if(S)u[l]=[s],m(l)&&(f[l]=u[l]);else{const y=[s];v(l,t.k)&&(l.value=y),t.k&&(u[t.k]=y)}}else S?(u[l]=o,m(l)&&(f[l]=o)):d&&(v(l,t.k)&&(l.value=o),t.k&&(u[t.k]=o))};if(o){const b=()=>{p(),No.delete(t)};b.id=-1,No.set(t,b),$t(b,n)}else _u(t),p()}}}function _u(t){const e=No.get(t);e&&(e.flags|=8,No.delete(t))}na().requestIdleCallback;na().cancelIdleCallback;const fs=t=>!!t.type.__asyncLoader,Oc=t=>t.type.__isKeepAlive;function vm(t,e){Hh(t,"a",e)}function xm(t,e){Hh(t,"da",e)}function Hh(t,e,n=Vt){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(aa(e,i,n),n){let r=n.parent;for(;r&&r.parent;)Oc(r.parent.vnode)&&Sm(i,e,n,r),r=r.parent}}function Sm(t,e,n,i){const r=aa(e,t,i,!0);Fc(()=>{Tc(i[e],r)},n)}function aa(t,e,n=Vt,i=!1){if(n){const r=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{ri();const a=Cs(n),l=bn(e,n,t,o);return a(),si(),l});return i?r.unshift(s):r.push(s),s}}const ci=t=>(e,n=Vt)=>{(!Ss||t==="sp")&&aa(t,(...i)=>e(...i),n)},ym=ci("bm"),Rs=ci("m"),Mm=ci("bu"),Em=ci("u"),la=ci("bum"),Fc=ci("um"),Tm=ci("sp"),bm=ci("rtg"),Am=ci("rtc");function wm(t,e=Vt){aa("ec",t,e)}const Rm=Symbol.for("v-ndc");function Cn(t,e,n,i){let r;const s=n,o=Be(t);if(o||vt(t)){const a=o&&ii(t);let l=!1,c=!1;a&&(l=!rn(t),c=oi(t),t=ia(t)),r=new Array(t.length);for(let u=0,f=t.length;u<f;u++)r[u]=e(l?c?Nr(Tn(t[u])):Tn(t[u]):t[u],u,void 0,s)}else if(typeof t=="number"){r=new Array(t);for(let a=0;a<t;a++)r[a]=e(a+1,a,void 0,s)}else if(at(t))if(t[Symbol.iterator])r=Array.from(t,(a,l)=>e(a,l,void 0,s));else{const a=Object.keys(t);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=e(t[u],u,l,s)}}else r=[];return r}const Ml=t=>t?cd(t)?fa(t):Ml(t.parent):null,hs=Ut(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ml(t.parent),$root:t=>Ml(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>zh(t),$forceUpdate:t=>t.f||(t.f=()=>{Uc(t.update)}),$nextTick:t=>t.n||(t.n=Lh.bind(t.proxy)),$watch:t=>mm.bind(t)}),Ca=(t,e)=>t!==ct&&!t.__isScriptSetup&&tt(t,e),Cm={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=t;if(e[0]!=="$"){const h=o[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return s[e]}else{if(Ca(i,e))return o[e]=1,i[e];if(r!==ct&&tt(r,e))return o[e]=2,r[e];if(tt(s,e))return o[e]=3,s[e];if(n!==ct&&tt(n,e))return o[e]=4,n[e];El&&(o[e]=0)}}const c=hs[e];let u,f;if(c)return e==="$attrs"&&Ft(t.attrs,"get",""),c(t);if((u=a.__cssModules)&&(u=u[e]))return u;if(n!==ct&&tt(n,e))return o[e]=4,n[e];if(f=l.config.globalProperties,tt(f,e))return f[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:s}=t;return Ca(r,e)?(r[e]=n,!0):i!==ct&&tt(i,e)?(i[e]=n,!0):tt(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,props:s,type:o}},a){let l;return!!(n[a]||t!==ct&&a[0]!=="$"&&tt(t,a)||Ca(e,a)||tt(s,a)||tt(i,a)||tt(hs,a)||tt(r.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:tt(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function vu(t){return Be(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let El=!0;function Pm(t){const e=zh(t),n=t.proxy,i=t.ctx;El=!1,e.beforeCreate&&xu(e.beforeCreate,t,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:m,updated:v,activated:S,deactivated:d,beforeDestroy:p,beforeUnmount:b,destroyed:y,unmounted:E,render:P,renderTracked:C,renderTriggered:R,errorCaptured:D,serverPrefetch:j,expose:x,inheritAttrs:T,components:$,directives:K,filters:Z}=e;if(c&&Lm(c,i,null),o)for(const Y in o){const k=o[Y];ze(k)&&(i[Y]=k.bind(n))}if(r){const Y=r.call(n,n);at(Y)&&(t.data=As(Y))}if(El=!0,s)for(const Y in s){const k=s[Y],ge=ze(k)?k.bind(n,n):ze(k.get)?k.get.bind(n,n):On,ve=!ze(k)&&ze(k.set)?k.set.bind(n):On,ye=ut({get:ge,set:ve});Object.defineProperty(i,Y,{enumerable:!0,configurable:!0,get:()=>ye.value,set:Ge=>ye.value=Ge})}if(a)for(const Y in a)Gh(a[Y],i,n,Y);if(l){const Y=ze(l)?l.call(n):l;Reflect.ownKeys(Y).forEach(k=>{fm(k,Y[k])})}u&&xu(u,t,"c");function z(Y,k){Be(k)?k.forEach(ge=>Y(ge.bind(n))):k&&Y(k.bind(n))}if(z(ym,f),z(Rs,h),z(Mm,m),z(Em,v),z(vm,S),z(xm,d),z(wm,D),z(Am,C),z(bm,R),z(la,b),z(Fc,E),z(Tm,j),Be(x))if(x.length){const Y=t.exposed||(t.exposed={});x.forEach(k=>{Object.defineProperty(Y,k,{get:()=>n[k],set:ge=>n[k]=ge,enumerable:!0})})}else t.exposed||(t.exposed={});P&&t.render===On&&(t.render=P),T!=null&&(t.inheritAttrs=T),$&&(t.components=$),K&&(t.directives=K),j&&kh(t)}function Lm(t,e,n=On){Be(t)&&(t=Tl(t));for(const i in t){const r=t[i];let s;at(r)?"default"in r?s=cs(r.from||i,r.default,!0):s=cs(r.from||i):s=cs(r),xt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function xu(t,e,n){bn(Be(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function Gh(t,e,n,i){let r=i.includes(".")?Fh(n,i):()=>n[i];if(vt(t)){const s=e[t];ze(s)&&Cr(r,s)}else if(ze(t))Cr(r,t.bind(n));else if(at(t))if(Be(t))t.forEach(s=>Gh(s,e,n,i));else{const s=ze(t.handler)?t.handler.bind(n):e[t.handler];ze(s)&&Cr(r,s,t)}}function zh(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!n&&!i?l=e:(l={},r.length&&r.forEach(c=>Oo(l,c,o,!0)),Oo(l,e,o)),at(e)&&s.set(e,l),l}function Oo(t,e,n,i=!1){const{mixins:r,extends:s}=e;s&&Oo(t,s,n,!0),r&&r.forEach(o=>Oo(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=Dm[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Dm={data:Su,props:yu,emits:yu,methods:ns,computed:ns,beforeCreate:kt,created:kt,beforeMount:kt,mounted:kt,beforeUpdate:kt,updated:kt,beforeDestroy:kt,beforeUnmount:kt,destroyed:kt,unmounted:kt,activated:kt,deactivated:kt,errorCaptured:kt,serverPrefetch:kt,components:ns,directives:ns,watch:Um,provide:Su,inject:Im};function Su(t,e){return e?t?function(){return Ut(ze(t)?t.call(this,this):t,ze(e)?e.call(this,this):e)}:e:t}function Im(t,e){return ns(Tl(t),Tl(e))}function Tl(t){if(Be(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function kt(t,e){return t?[...new Set([].concat(t,e))]:e}function ns(t,e){return t?Ut(Object.create(null),t,e):e}function yu(t,e){return t?Be(t)&&Be(e)?[...new Set([...t,...e])]:Ut(Object.create(null),vu(t),vu(e??{})):e}function Um(t,e){if(!t)return e;if(!e)return t;const n=Ut(Object.create(null),t);for(const i in e)n[i]=kt(t[i],e[i]);return n}function Vh(){return{app:null,config:{isNativeTag:nh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Nm=0;function Om(t,e){return function(i,r=null){ze(i)||(i=Ut({},i)),r!=null&&!at(r)&&(r=null);const s=Vh(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:Nm++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:hg,get config(){return s.config},set config(u){},use(u,...f){return o.has(u)||(u&&ze(u.install)?(o.add(u),u.install(c,...f)):ze(u)&&(o.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,h){if(!l){const m=c._ceVNode||sn(i,r);return m.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),t(m,u,h),l=!0,c._container=u,u.__vue_app__=c,fa(m.component)}},onUnmount(u){a.push(u)},unmount(){l&&(bn(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=Yi;Yi=c;try{return u()}finally{Yi=f}}};return c}}let Yi=null;const Fm=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${yn(e)}Modifiers`]||t[`${tr(e)}Modifiers`];function Bm(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||ct;let r=n;const s=e.startsWith("update:"),o=s&&Fm(i,e.slice(7));o&&(o.trim&&(r=n.map(u=>vt(u)?u.trim():u)),o.number&&(r=n.map(bc)));let a,l=i[a=Ea(e)]||i[a=Ea(yn(e))];!l&&s&&(l=i[a=Ea(tr(e))]),l&&bn(l,t,6,r);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,bn(c,t,6,r)}}const km=new WeakMap;function Wh(t,e,n=!1){const i=n?km:e.emitsCache,r=i.get(t);if(r!==void 0)return r;const s=t.emits;let o={},a=!1;if(!ze(t)){const l=c=>{const u=Wh(c,e,!0);u&&(a=!0,Ut(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!a?(at(t)&&i.set(t,null),null):(Be(s)?s.forEach(l=>o[l]=null):Ut(o,s),at(t)&&i.set(t,o),o)}function ca(t,e){return!t||!Jo(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),tt(t,e[0].toLowerCase()+e.slice(1))||tt(t,tr(e))||tt(t,e))}function Mu(t){const{type:e,vnode:n,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:h,setupState:m,ctx:v,inheritAttrs:S}=t,d=Uo(t);let p,b;try{if(n.shapeFlag&4){const E=r||i,P=E;p=Dn(c.call(P,E,u,f,m,h,v)),b=a}else{const E=e;p=Dn(E.length>1?E(f,{attrs:a,slots:o,emit:l}):E(f,null)),b=e.props?a:Hm(a)}}catch(E){ji.length=0,sa(E,t,1),p=sn(ai)}let y=p;if(b&&S!==!1){const E=Object.keys(b),{shapeFlag:P}=y;E.length&&P&7&&(s&&E.some(Qo)&&(b=Gm(b,s)),y=Or(y,b,!1,!0))}if(n.dirs&&(y=Or(y,null,!1,!0),y.dirs=y.dirs?y.dirs.concat(n.dirs):n.dirs),n.transition){const E=oa(y.type)&&Bh(y)||y;Nc(E,n.transition)}return p=y,Uo(d),p}const Hm=t=>{let e;for(const n in t)(n==="class"||n==="style"||Jo(n))&&((e||(e={}))[n]=t[n]);return e},Gm=(t,e)=>{const n={};for(const i in t)(!Qo(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function zm(t,e,n){const{props:i,children:r,component:s}=t,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?Eu(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(Xh(o,i,h)&&!ca(c,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Eu(i,o,c):!0:!!o;return!1}function Eu(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(Xh(e,t,s)&&!ca(n,s))return!0}return!1}function Xh(t,e,n){const i=t[n],r=e[n];return n==="style"&&at(i)&&at(r)?!Ac(i,r):i!==r}function Vm({vnode:t,parent:e,suspense:n},i){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.suspense.vnode.el=r.el=i,t=r),r===t)(t=e.vnode).el=i,e=e.parent;else break}n&&n.activeBranch===t&&(n.vnode.el=i)}const qh={},$h=()=>Object.create(qh),Kh=t=>Object.getPrototypeOf(t)===qh;function Wm(t,e,n,i=!1){const r={},s=$h();t.propsDefaults=Object.create(null),Yh(t,e,r,s);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=i?r:jp(r):t.type.props?t.props=r:t.props=s,t.attrs=s}function Xm(t,e,n,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=t,a=Ze(r),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(ca(t.emitsOptions,h))continue;const m=e[h];if(l)if(tt(s,h))m!==s[h]&&(s[h]=m,c=!0);else{const v=yn(h);r[v]=bl(l,a,v,m,t,!1)}else m!==s[h]&&(s[h]=m,c=!0)}}}else{Yh(t,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!tt(e,f)&&((u=tr(f))===f||!tt(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(r[f]=bl(l,a,f,void 0,t,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!tt(e,f))&&(delete s[f],c=!0)}c&&Zn(t.attrs,"set","")}function Yh(t,e,n,i){const[r,s]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(os(l))continue;const c=e[l];let u;r&&tt(r,u=yn(l))?!s||!s.includes(u)?n[u]=c:(a||(a={}))[u]=c:ca(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=Ze(n),c=a||ct;for(let u=0;u<s.length;u++){const f=s[u];n[f]=bl(r,l,f,c[f],t,!tt(c,f))}}return o}function bl(t,e,n,i,r,s){const o=t[n];if(o!=null){const a=tt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ze(l)){const{propsDefaults:c}=r;if(n in c)i=c[n];else{const u=Cs(r);i=c[n]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(n,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===tr(n))&&(i=!0))}return i}const qm=new WeakMap;function jh(t,e,n=!1){const i=n?qm:e.propsCache,r=i.get(t);if(r)return r;const s=t.props,o={},a=[];let l=!1;if(!ze(t)){const u=f=>{l=!0;const[h,m]=jh(f,e,!0);Ut(o,h),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!l)return at(t)&&i.set(t,Ar),Ar;if(Be(s))for(let u=0;u<s.length;u++){const f=yn(s[u]);Tu(f)&&(o[f]=ct)}else if(s)for(const u in s){const f=yn(u);if(Tu(f)){const h=s[u],m=o[f]=Be(h)||ze(h)?{type:h}:Ut({},h),v=m.type;let S=!1,d=!0;if(Be(v))for(let p=0;p<v.length;++p){const b=v[p],y=ze(b)&&b.name;if(y==="Boolean"){S=!0;break}else y==="String"&&(d=!1)}else S=ze(v)&&v.name==="Boolean";m[0]=S,m[1]=d,(S||tt(m,"default"))&&a.push(f)}}const c=[o,a];return at(t)&&i.set(t,c),c}function Tu(t){return t[0]!=="$"&&!os(t)}const Bc=t=>t==="_"||t==="_ctx"||t==="$stable",kc=t=>Be(t)?t.map(Dn):[Dn(t)],$m=(t,e,n)=>{if(e._n)return e;const i=um((...r)=>kc(e(...r)),n);return i._c=!1,i},Zh=(t,e,n)=>{const i=t._ctx;for(const r in t){if(Bc(r))continue;const s=t[r];if(ze(s))e[r]=$m(r,s,i);else if(s!=null){const o=kc(s);e[r]=()=>o}}},Jh=(t,e)=>{const n=kc(e);t.slots.default=()=>n},Qh=(t,e,n)=>{for(const i in e)(n||!Bc(i))&&(t[i]=e[i])},Km=(t,e,n)=>{const i=t.slots=$h();if(t.vnode.shapeFlag&32){const r=e._;r?(Qh(i,e,n),n&&lh(i,"_",r,!0)):Zh(e,i)}else e&&Jh(t,e)},Ym=(t,e,n)=>{const{vnode:i,slots:r}=t;let s=!0,o=ct;if(i.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:Qh(r,e,n):(s=!e.$stable,Zh(e,r)),o=e}else e&&(Jh(t,e),o={default:1});if(s)for(const a in r)!Bc(a)&&o[a]==null&&delete r[a]},$t=eg;function jm(t){return Zm(t)}function Zm(t,e){const n=na();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:m=On,insertStaticContent:v}=t,S=(w,_,X,Q=null,J=null,H=null,le=void 0,te=null,M=!!_.dynamicChildren)=>{if(w===_)return;w&&!Kr(w,_)&&(Q=pe(w),Ge(w,J,H,!0),w=null),_.patchFlag===-2&&(M=!1,_.dynamicChildren=null);const{type:g,ref:L,shapeFlag:U}=_;switch(g){case ua:d(w,_,X,Q);break;case ai:p(w,_,X,Q);break;case vo:w==null&&b(_,X,Q,le);break;case Tt:$(w,_,X,Q,J,H,le,te,M);break;default:U&1?P(w,_,X,Q,J,H,le,te,M):U&6?K(w,_,X,Q,J,H,le,te,M):(U&64||U&128)&&g.process(w,_,X,Q,J,H,le,te,M,Ve)}L!=null&&J?us(L,w&&w.ref,H,_||w,!_):L==null&&w&&w.ref!=null&&us(w.ref,null,H,w,!0)},d=(w,_,X,Q)=>{if(w==null)i(_.el=a(_.children),X,Q);else{const J=_.el=w.el;_.children!==w.children&&c(J,_.children)}},p=(w,_,X,Q)=>{w==null?i(_.el=l(_.children||""),X,Q):_.el=w.el},b=(w,_,X,Q)=>{[w.el,w.anchor]=v(w.children,_,X,Q,w.el,w.anchor)},y=({el:w,anchor:_},X,Q)=>{let J;for(;w&&w!==_;)J=h(w),i(w,X,Q),w=J;i(_,X,Q)},E=({el:w,anchor:_})=>{let X;for(;w&&w!==_;)X=h(w),r(w),w=X;r(_)},P=(w,_,X,Q,J,H,le,te,M)=>{if(_.type==="svg"?le="svg":_.type==="math"&&(le="mathml"),w==null)C(_,X,Q,J,H,le,te,M);else{const g=w.el&&w.el._isVueCE?w.el:null;try{g&&g._beginPatch(),j(w,_,J,H,le,te,M)}finally{g&&g._endPatch()}}},C=(w,_,X,Q,J,H,le,te)=>{let M,g;const{props:L,shapeFlag:U,transition:G,dirs:B}=w;if(M=w.el=o(w.type,H,L&&L.is,L),U&8?u(M,w.children):U&16&&D(w.children,M,null,Q,J,Pa(w,H),le,te),B&&Di(w,null,Q,"created"),R(M,w,w.scopeId,le,Q),L){for(const ce in L)ce!=="value"&&!os(ce)&&s(M,ce,null,L[ce],H,Q);"value"in L&&s(M,"value",null,L.value,H),(g=L.onVnodeBeforeMount)&&wn(g,Q,w)}B&&Di(w,null,Q,"beforeMount");const he=Jm(J,G);he&&G.beforeEnter(M),i(M,_,X),((g=L&&L.onVnodeMounted)||he||B)&&$t(()=>{try{g&&wn(g,Q,w),he&&G.enter(M),B&&Di(w,null,Q,"mounted")}finally{}},J)},R=(w,_,X,Q,J)=>{if(X&&m(w,X),Q)for(let H=0;H<Q.length;H++)m(w,Q[H]);if(J){let H=J.subTree;if(_===H||id(H.type)&&(H.ssContent===_||H.ssFallback===_)){const le=J.vnode;R(w,le,le.scopeId,le.slotScopeIds,J.parent)}}},D=(w,_,X,Q,J,H,le,te,M=0)=>{for(let g=M;g<w.length;g++){const L=w[g]=te?jn(w[g]):Dn(w[g]);S(null,L,_,X,Q,J,H,le,te)}},j=(w,_,X,Q,J,H,le)=>{const te=_.el=w.el;let{patchFlag:M,dynamicChildren:g,dirs:L}=_;M|=w.patchFlag&16;const U=w.props||ct,G=_.props||ct;let B;if(X&&Ii(X,!1),(B=G.onVnodeBeforeUpdate)&&wn(B,X,_,w),L&&Di(_,w,X,"beforeUpdate"),X&&Ii(X,!0),g&&(!w.dynamicChildren||w.dynamicChildren.length!==g.length)&&(M=0,le=!1,g=null),(U.innerHTML&&G.innerHTML==null||U.textContent&&G.textContent==null)&&u(te,""),g?x(w.dynamicChildren,g,te,X,Q,Pa(_,J),H):le||k(w,_,te,null,X,Q,Pa(_,J),H,!1),M>0){if(M&16)T(te,U,G,X,J);else if(M&2&&U.class!==G.class&&s(te,"class",null,G.class,J),M&4&&s(te,"style",U.style,G.style,J),M&8){const he=_.dynamicProps;for(let ce=0;ce<he.length;ce++){const fe=he[ce],Pe=U[fe],ae=G[fe];(ae!==Pe||fe==="value")&&s(te,fe,Pe,ae,J,X)}}M&1&&w.children!==_.children&&u(te,_.children)}else!le&&g==null&&T(te,U,G,X,J);((B=G.onVnodeUpdated)||L)&&$t(()=>{B&&wn(B,X,_,w),L&&Di(_,w,X,"updated")},Q)},x=(w,_,X,Q,J,H,le)=>{for(let te=0;te<_.length;te++){const M=w[te],g=_[te],L=M.el&&(M.type===Tt||!Kr(M,g)||M.shapeFlag&198)?f(M.el):X;S(M,g,L,null,Q,J,H,le,!0)}},T=(w,_,X,Q,J)=>{if(_!==X){if(_!==ct)for(const H in _)!os(H)&&!(H in X)&&s(w,H,_[H],null,J,Q);for(const H in X){if(os(H))continue;const le=X[H],te=_[H];le!==te&&H!=="value"&&s(w,H,te,le,J,Q)}"value"in X&&s(w,"value",_.value,X.value,J)}},$=(w,_,X,Q,J,H,le,te,M)=>{const g=_.el=w?w.el:a(""),L=_.anchor=w?w.anchor:a("");let{patchFlag:U,dynamicChildren:G,slotScopeIds:B}=_;B&&(te=te?te.concat(B):B),w==null?(i(g,X,Q),i(L,X,Q),D(_.children||[],X,L,J,H,le,te,M)):U>0&&U&64&&G&&w.dynamicChildren&&w.dynamicChildren.length===G.length?(x(w.dynamicChildren,G,X,J,H,le,te),(_.key!=null||J&&_===J.subTree)&&ed(w,_,!0)):k(w,_,X,L,J,H,le,te,M)},K=(w,_,X,Q,J,H,le,te,M)=>{_.slotScopeIds=te,w==null?_.shapeFlag&512?J.ctx.activate(_,X,Q,le,M):Z(_,X,Q,J,H,le,M):se(w,_,M)},Z=(w,_,X,Q,J,H,le)=>{const te=w.component=og(w,Q,J);if(Oc(w)&&(te.ctx.renderer=Ve),ag(te,!1,le),te.asyncDep){if(J&&J.registerDep(te,z,le),!w.el){const M=te.subTree=sn(ai);p(null,M,_,X),w.placeholder=M.el}}else z(te,w,_,X,J,H,le)},se=(w,_,X)=>{const Q=_.component=w.component;if(zm(w,_,X))if(Q.asyncDep&&!Q.asyncResolved){Y(Q,_,X);return}else Q.next=_,Q.update();else _.el=w.el,Q.vnode=_},z=(w,_,X,Q,J,H,le)=>{const te=()=>{if(w.isMounted){let{next:U,bu:G,u:B,parent:he,vnode:ce}=w;{const we=td(w);if(we){U&&(U.el=ce.el,Y(w,U,le)),we.asyncDep.then(()=>{$t(()=>{w.isUnmounted||g()},J)});return}}let fe=U,Pe;Ii(w,!1),U?(U.el=ce.el,Y(w,U,le)):U=ce,G&&_o(G),(Pe=U.props&&U.props.onVnodeBeforeUpdate)&&wn(Pe,he,U,ce),Ii(w,!0);const ae=Mu(w),_e=w.subTree;w.subTree=ae,S(_e,ae,f(_e.el),pe(_e),w,J,H),U.el=ae.el,fe===null&&Vm(w,ae.el),B&&$t(B,J),(Pe=U.props&&U.props.onVnodeUpdated)&&$t(()=>wn(Pe,he,U,ce),J)}else{let U;const{el:G,props:B}=_,{bm:he,m:ce,parent:fe,root:Pe,type:ae}=w,_e=fs(_);Ii(w,!1),he&&_o(he),!_e&&(U=B&&B.onVnodeBeforeMount)&&wn(U,fe,_),Ii(w,!0);{Pe.ce&&Pe.ce._hasShadowRoot()&&Pe.ce._injectChildStyle(ae,w.parent?w.parent.type:void 0);const we=w.subTree=Mu(w);S(null,we,X,Q,w,J,H),_.el=we.el}if(ce&&$t(ce,J),!_e&&(U=B&&B.onVnodeMounted)){const we=_;$t(()=>wn(U,fe,we),J)}(_.shapeFlag&256||fe&&fs(fe.vnode)&&fe.vnode.shapeFlag&256)&&w.a&&$t(w.a,J),w.isMounted=!0,_=X=Q=null}};w.scope.on();const M=w.effect=new mh(te);w.scope.off();const g=w.update=M.run.bind(M),L=w.job=M.runIfDirty.bind(M);L.i=w,L.id=w.uid,M.scheduler=()=>Uc(L),Ii(w,!0),g()},Y=(w,_,X)=>{_.component=w;const Q=w.vnode.props;w.vnode=_,w.next=null,Xm(w,_.props,Q,X),Ym(w,_.children,X),ri(),pu(w),si()},k=(w,_,X,Q,J,H,le,te,M=!1)=>{const g=w&&w.children,L=w?w.shapeFlag:0,U=_.children,{patchFlag:G,shapeFlag:B}=_;if(G>0){if(G&128){ve(g,U,X,Q,J,H,le,te,M);return}else if(G&256){ge(g,U,X,Q,J,H,le,te,M);return}}B&8?(L&16&&re(g,J,H),U!==g&&u(X,U)):L&16?B&16?ve(g,U,X,Q,J,H,le,te,M):re(g,J,H,!0):(L&8&&u(X,""),B&16&&D(U,X,Q,J,H,le,te,M))},ge=(w,_,X,Q,J,H,le,te,M)=>{w=w||Ar,_=_||Ar;const g=w.length,L=_.length,U=Math.min(g,L);let G;for(G=0;G<U;G++){const B=_[G]=M?jn(_[G]):Dn(_[G]);S(w[G],B,X,null,J,H,le,te,M)}g>L?re(w,J,H,!0,!1,U):D(_,X,Q,J,H,le,te,M,U)},ve=(w,_,X,Q,J,H,le,te,M)=>{let g=0;const L=_.length;let U=w.length-1,G=L-1;for(;g<=U&&g<=G;){const B=w[g],he=_[g]=M?jn(_[g]):Dn(_[g]);if(Kr(B,he))S(B,he,X,null,J,H,le,te,M);else break;g++}for(;g<=U&&g<=G;){const B=w[U],he=_[G]=M?jn(_[G]):Dn(_[G]);if(Kr(B,he))S(B,he,X,null,J,H,le,te,M);else break;U--,G--}if(g>U){if(g<=G){const B=G+1,he=B<L?_[B].el:Q;for(;g<=G;)S(null,_[g]=M?jn(_[g]):Dn(_[g]),X,he,J,H,le,te,M),g++}}else if(g>G)for(;g<=U;)Ge(w[g],J,H,!0),g++;else{const B=g,he=g,ce=new Map;for(g=he;g<=G;g++){const Oe=_[g]=M?jn(_[g]):Dn(_[g]);Oe.key!=null&&ce.set(Oe.key,g)}let fe,Pe=0;const ae=G-he+1;let _e=!1,we=0;const Ie=new Array(ae);for(g=0;g<ae;g++)Ie[g]=0;for(g=B;g<=U;g++){const Oe=w[g];if(Pe>=ae){Ge(Oe,J,H,!0);continue}let Le;if(Oe.key!=null)Le=ce.get(Oe.key);else for(fe=he;fe<=G;fe++)if(Ie[fe-he]===0&&Kr(Oe,_[fe])){Le=fe;break}Le===void 0?Ge(Oe,J,H,!0):(Ie[Le-he]=g+1,Le>=we?we=Le:_e=!0,S(Oe,_[Le],X,null,J,H,le,te,M),Pe++)}const Te=_e?Qm(Ie):Ar;for(fe=Te.length-1,g=ae-1;g>=0;g--){const Oe=he+g,Le=_[Oe],it=_[Oe+1],I=Oe+1<L?it.el||nd(it):Q;Ie[g]===0?S(null,Le,X,I,J,H,le,te,M):_e&&(fe<0||g!==Te[fe]?ye(Le,X,I,2):fe--)}}},ye=(w,_,X,Q,J=null)=>{const{el:H,type:le,transition:te,children:M,shapeFlag:g}=w;if(g&6){ye(w.component.subTree,_,X,Q);return}if(g&128){w.suspense.move(_,X,Q);return}if(g&64){le.move(w,_,X,Ve);return}if(le===Tt){i(H,_,X);for(let U=0;U<M.length;U++)ye(M[U],_,X,Q);i(w.anchor,_,X);return}if(le===vo){y(w,_,X);return}if(Q!==2&&g&1&&te)if(Q===0)te.persisted&&!H[Ra]?i(H,_,X):(te.beforeEnter(H),i(H,_,X),$t(()=>te.enter(H),J));else{const{leave:U,delayLeave:G,afterLeave:B}=te,he=()=>{w.ctx.isUnmounted?r(H):i(H,_,X)},ce=()=>{const fe=H._isLeaving||!!H[Ra];H._isLeaving&&H[Ra](!0),te.persisted&&!fe?he():U(H,()=>{he(),B&&B()})};G?G(H,he,ce):ce()}else i(H,_,X)},Ge=(w,_,X,Q=!1,J=!1)=>{const{type:H,props:le,ref:te,children:M,dynamicChildren:g,shapeFlag:L,patchFlag:U,dirs:G,cacheIndex:B,memo:he}=w;if(U===-2&&(J=!1),te!=null&&(ri(),us(te,null,X,w,!0),si()),B!=null&&(_.renderCache[B]=void 0),L&256){_.ctx.deactivate(w);return}const ce=L&1&&G,fe=!fs(w);let Pe;if(fe&&(Pe=le&&le.onVnodeBeforeUnmount)&&wn(Pe,_,w),L&6)W(w.component,X,Q);else{if(L&128){w.suspense.unmount(X,Q);return}ce&&Di(w,null,_,"beforeUnmount"),L&64?w.type.remove(w,_,X,Ve,Q):g&&!g.hasOnce&&(H!==Tt||U>0&&U&64)?re(g,_,X,!1,!0):(H===Tt&&U&384||!J&&L&16)&&re(M,_,X),Q&&$e(w)}const ae=he!=null&&B==null;(fe&&(Pe=le&&le.onVnodeUnmounted)||ce||ae)&&$t(()=>{Pe&&wn(Pe,_,w),ce&&Di(w,null,_,"unmounted"),ae&&(w.el=null)},X)},$e=w=>{const{type:_,el:X,anchor:Q,transition:J}=w;if(_===Tt){ne(X,Q);return}if(_===vo){E(w);return}const H=()=>{r(X),J&&!J.persisted&&J.afterLeave&&J.afterLeave()};if(w.shapeFlag&1&&J&&!J.persisted){const{leave:le,delayLeave:te}=J,M=()=>le(X,H);te?te(w.el,H,M):M()}else H()},ne=(w,_)=>{let X;for(;w!==_;)X=h(w),r(w),w=X;r(_)},W=(w,_,X)=>{const{bum:Q,scope:J,job:H,subTree:le,um:te,m:M,a:g}=w;bu(M),bu(g),Q&&_o(Q),J.stop(),H&&(H.flags|=8,Ge(le,w,_,X)),te&&$t(te,_),$t(()=>{w.isUnmounted=!0},_)},re=(w,_,X,Q=!1,J=!1,H=0)=>{for(let le=H;le<w.length;le++)Ge(w[le],_,X,Q,J)},pe=w=>{if(w.shapeFlag&6)return pe(w.component.subTree);if(w.shapeFlag&128)return w.suspense.next();const _=h(w.anchor||w.el),X=_&&_[gm];return X?h(X):_};let Ue=!1;const De=(w,_,X)=>{let Q;w==null?_._vnode&&(Ge(_._vnode,null,null,!0),Q=_._vnode.component):S(_._vnode||null,w,_,null,null,null,X),_._vnode=w,Ue||(Ue=!0,pu(Q),Ih(),Ue=!1)},Ve={p:S,um:Ge,m:ye,r:$e,mt:Z,mc:D,pc:k,pbc:x,n:pe,o:t};return{render:De,hydrate:void 0,createApp:Om(De)}}function Pa({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Ii({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Jm(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function ed(t,e,n=!1){const i=t.children,r=e.children;if(Be(i)&&Be(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=jn(r[s]),a.el=o.el),!n&&a.patchFlag!==-2&&ed(o,a)),a.type===ua&&(a.patchFlag===-1&&(a=r[s]=jn(a)),a.el=o.el),a.type===ai&&!a.el&&(a.el=o.el)}}function Qm(t){const e=t.slice(),n=[0];let i,r,s,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(r=n[n.length-1],t[r]<c){e[i]=r,n.push(i);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[i]=n[s-1]),n[s]=i)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}function td(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:td(e)}function bu(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function nd(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?nd(e.subTree):null}const id=t=>t.__isSuspense;function eg(t,e){e&&e.pendingBranch?Be(t)?e.effects.push(...t):e.effects.push(t):cm(t)}const Tt=Symbol.for("v-fgt"),ua=Symbol.for("v-txt"),ai=Symbol.for("v-cmt"),vo=Symbol.for("v-stc"),ji=[];let nn=null;function Ne(t=!1){ji.push(nn=t?null:[])}function rd(){ji.pop(),nn=ji[ji.length-1]||null}let vs=1;function Au(t,e=!1){vs+=t,t<0&&nn&&e&&(nn.hasOnce=!0)}function sd(t){return t.dynamicChildren=vs>0?nn||Ar:null,rd(),vs>0&&nn&&nn.push(t),t}function He(t,e,n,i,r,s){return sd(ie(t,e,n,i,r,s,!0))}function Al(t,e,n,i,r){return sd(sn(t,e,n,i,r,!0))}function od(t){return t?t.__v_isVNode===!0:!1}function Kr(t,e){return t.type===e.type&&t.key===e.key}const ad=({key:t})=>t??null,xo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?vt(t)||xt(t)||ze(t)?{i:un,r:t,k:e,f:!!n}:t:null);function ie(t,e=null,n=null,i=0,r=null,s=t===Tt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&ad(e),ref:e&&xo(e),scopeId:Nh,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:un};return a?(Bo(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=vt(n)?8:16),vs>0&&!o&&nn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&nn.push(l),l}const sn=tg;function tg(t,e=null,n=null,i=0,r=null,s=!1){if((!t||t===Rm)&&(t=ai),od(t)){const a=Or(t,e,!0);return n&&Bo(a,n),vs>0&&!s&&nn&&(a.shapeFlag&6?nn[nn.indexOf(t)]=a:nn.push(a)),a.patchFlag=-2,a}if(fg(t)&&(t=t.__vccOpts),e){e=ng(e);let{class:a,style:l}=e;a&&!vt(a)&&(e.class=Dt(a)),at(l)&&(ra(l)&&!Be(l)&&(l=Ut({},l)),e.style=st(l))}const o=vt(t)?1:id(t)?128:oa(t)?64:at(t)?4:ze(t)?2:0;return ie(t,e,n,i,r,o,s,!0)}function ng(t){return t?ra(t)||Kh(t)?Ut({},t):t:null}function Or(t,e,n=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=t,c=e?ig(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&ad(c),ref:e&&e.ref?n&&s?Be(s)?s.concat(xo(e)):[s,xo(e)]:xo(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Tt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Or(t.ssContent),ssFallback:t.ssFallback&&Or(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&i&&Nc(u,l.clone(u)),u}function Fo(t=" ",e=0){return sn(ua,null,t,e)}function wu(t,e){const n=sn(vo,null,t);return n.staticCount=e,n}function pt(t="",e=!1){return e?(Ne(),Al(ai,null,t)):sn(ai,null,t)}function Dn(t){return t==null||typeof t=="boolean"?sn(ai):Be(t)?sn(Tt,null,t.slice()):od(t)?jn(t):sn(ua,null,String(t))}function jn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Or(t)}function Bo(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(Be(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Bo(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!Kh(e)?e._ctx=un:r===3&&un&&(un.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else if(ze(e)){if(i&65){Bo(t,{default:e});return}e={default:e,_ctx:un},n=32}else e=String(e),i&64?(n=16,e=[Fo(e)]):n=8;t.children=e,t.shapeFlag|=n}function ig(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Dt([e.class,i.class]));else if(r==="style")e.style=st([e.style,i.style]);else if(Jo(r)){const s=e[r],o=i[r];o&&s!==o&&!(Be(s)&&s.includes(o))?e[r]=s?[].concat(s,o):o:o==null&&s==null&&!Qo(r)&&(e[r]=o)}else r!==""&&(e[r]=i[r])}return e}function wn(t,e,n,i=null){bn(t,e,7,[n,i])}const rg=Vh();let sg=0;function og(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||rg,s={uid:sg++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new hh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:jh(i,r),emitsOptions:Wh(i,r),emit:null,emitted:null,propsDefaults:ct,inheritAttrs:i.inheritAttrs,ctx:ct,data:ct,props:ct,attrs:ct,slots:ct,refs:ct,setupState:ct,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Bm.bind(null,s),t.ce&&t.ce(s),s}let Vt=null;const ld=()=>Vt||un;let ko,xs;{const t=na(),e=(n,i)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};ko=e("__VUE_INSTANCE_SETTERS__",n=>Vt=n),xs=e("__VUE_SSR_SETTERS__",n=>Ss=n)}const Cs=t=>{const e=Vt;return ko(t),t.scope.on(),()=>{t.scope.off(),ko(e)}},Ru=()=>{Vt&&Vt.scope.off(),ko(null)};function cd(t){return t.vnode.shapeFlag&4}let Ss=!1;function ag(t,e=!1,n=!1){e&&xs(e);const{props:i,children:r}=t.vnode,s=cd(t);Wm(t,i,s,e),Km(t,r,n||e);const o=s?lg(t,e):void 0;return e&&xs(!1),o}function lg(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Cm);const{setup:i}=n;if(i){ri();const r=t.setupContext=i.length>1?ug(t):null,s=Cs(t),o=ws(i,t,0,[t.props,r]),a=rh(o);if(si(),s(),(a||t.sp)&&!fs(t)&&kh(t),a){if(o.then(Ru,Ru),e)return o.then(l=>{xs(!0);try{Cu(t,l,e)}finally{xs(!1)}}).catch(l=>{sa(l,t,0)});t.asyncDep=o}else Cu(t,o)}else ud(t)}function Cu(t,e,n){ze(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:at(e)&&(t.setupState=Ch(e)),ud(t)}function ud(t,e,n){const i=t.type;t.render||(t.render=i.render||On);{const r=Cs(t);ri();try{Pm(t)}finally{si(),r()}}}const cg={get(t,e){return Ft(t,"get",""),t[e]}};function ug(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,cg),slots:t.slots,emit:t.emit,expose:e}}function fa(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Ch(Ic(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in hs)return hs[n](t)},has(e,n){return n in e||n in hs}})):t.proxy}function fg(t){return ze(t)&&"__vccOpts"in t}const ut=(t,e)=>rm(t,e,Ss),hg="3.5.41";/**
* @vue/runtime-dom v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let wl;const Pu=typeof window<"u"&&window.trustedTypes;if(Pu)try{wl=Pu.createPolicy("vue",{createHTML:t=>t})}catch{}const fd=wl?t=>wl.createHTML(t):t=>t,dg="http://www.w3.org/2000/svg",pg="http://www.w3.org/1998/Math/MathML",Yn=typeof document<"u"?document:null,Lu=Yn&&Yn.createElement("template"),mg={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e==="svg"?Yn.createElementNS(dg,t):e==="mathml"?Yn.createElementNS(pg,t):n?Yn.createElement(t,{is:n}):Yn.createElement(t);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>Yn.createTextNode(t),createComment:t=>Yn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Yn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,s){const o=n?n.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{Lu.innerHTML=fd(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const a=Lu.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},gg=Symbol("_vtc");function _g(t,e,n){const i=t[gg];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Du=Symbol("_vod"),vg=Symbol("_vsh"),xg=Symbol(""),Sg=/(?:^|;)\s*display\s*:/;function yg(t,e,n){const i=t.style,r=vt(n);let s=!1;if(n&&!r){if(e)if(vt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&is(i,a,"")}else for(const o in e)n[o]==null&&is(i,o,"");for(const o in n){o==="display"&&(s=!0);const a=n[o];a!=null?Eg(t,o,!vt(e)&&e?e[o]:void 0,a)||is(i,o,a):is(i,o,"")}}else if(r){if(e!==n){const o=i[xg];o&&(n+=";"+o),i.cssText=n,s=Sg.test(n)}}else e&&t.removeAttribute("style");Du in t&&(t[Du]=s?i.display:"",t[vg]&&(i.display="none"))}const Iu=/\s*!important$/;function is(t,e,n){if(Be(n))n.forEach(i=>is(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=Mg(t,e);Iu.test(n)?t.setProperty(tr(i),n.replace(Iu,""),"important"):t[i]=n}}const Uu=["Webkit","Moz","ms"],La={};function Mg(t,e){const n=La[e];if(n)return n;let i=yn(e);if(i!=="filter"&&i in t)return La[e]=i;i=ah(i);for(let r=0;r<Uu.length;r++){const s=Uu[r]+i;if(s in t)return La[e]=s}return e}function Eg(t,e,n,i){return t.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&vt(i)&&n===i}const Nu="http://www.w3.org/1999/xlink";function Ou(t,e,n,i,r,s=Cp(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Nu,e.slice(6,e.length)):t.setAttributeNS(Nu,e,n):n==null||s&&!ch(n)?t.removeAttribute(e):t.setAttribute(e,s?"":hn(n)?String(n):n)}function Fu(t,e,n,i,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?fd(n):n);return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=ch(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(r||e)}function yr(t,e,n,i){t.addEventListener(e,n,i)}function Tg(t,e,n,i){t.removeEventListener(e,n,i)}const Bu=Symbol("_vei");function bg(t,e,n,i,r=null){const s=t[Bu]||(t[Bu]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=Rg(e);if(i){const c=s[e]=Lg(i,r);yr(t,a,c,l)}else o&&(Tg(t,a,o,l),s[e]=void 0)}}const Ag=/(Once|Passive|Capture)$/,wg=/^on:?(?:Once|Passive|Capture)$/;function Rg(t){let e,n;for(;(n=t.match(Ag))&&!wg.test(t);)e||(e={}),t=t.slice(0,t.length-n[1].length),e[n[1].toLowerCase()]=!0;return[t[2]===":"?t.slice(3):tr(t.slice(2)),e]}let Da=0;const Cg=Promise.resolve(),Pg=()=>Da||(Cg.then(()=>Da=0),Da=Date.now());function Lg(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;const r=n.value;if(Be(r)){const s=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{s.call(i),i._stopped=!0};const o=r.slice(),a=[i];for(let l=0;l<o.length&&!i._stopped;l++){const c=o[l];c&&bn(c,e,5,a)}}else bn(r,e,5,[i])};return n.value=t,n.attached=Pg(),n}const ku=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Dg=(t,e,n,i,r,s)=>{const o=r==="svg";e==="class"?_g(t,i,o):e==="style"?yg(t,n,i):Jo(e)?Qo(e)||bg(t,e,n,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Ig(t,e,i,o))?(Fu(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Ou(t,e,i,o,s,e!=="value")):t._isVueCE&&(Ug(t,e)||t._def.__asyncLoader&&(/[A-Z]/.test(e)||!vt(i)))?Fu(t,yn(e),i,s,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),Ou(t,e,i,o))};function Ig(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&ku(e)&&ze(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return ku(e)&&vt(n)?!1:e in t}function Ug(t,e){const n=t._def.props;if(!n)return!1;const i=yn(e);return Array.isArray(n)?n.some(r=>yn(r)===i):Object.keys(n).some(r=>yn(r)===i)}const Hu=t=>{const e=t.props["onUpdate:modelValue"]||!1;return Be(e)?n=>_o(e,n):e};function Ng(t){t.target.composing=!0}function Gu(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Vs=Symbol("_assign"),Ws=Symbol("_initialValue");function Ia(t,e,n){return e&&(t=t.trim()),n&&(t=bc(t)),t}const zu={created(t,{modifiers:{lazy:e,trim:n,number:i}},r){t.parentNode&&(t.type==="text"?t[Ws]=t.defaultValue.replace(/[\r\n]/g,""):t.type==="textarea"&&(t[Ws]=t.defaultValue.replace(/\r\n?/g,`
`))),t[Vs]=Hu(r);const s=i||r.props&&r.props.type==="number";yr(t,e?"change":"input",o=>{o.target.composing||t[Vs](Ia(t.value,n,s))}),(n||s)&&yr(t,"change",()=>{t.value=Ia(t.value,n,s)}),e||(yr(t,"compositionstart",Ng),yr(t,"compositionend",Gu),yr(t,"change",Gu))},mounted(t,{value:e,modifiers:{trim:n,number:i}}){const r=e??"",s=t[Ws];delete t[Ws],s!==void 0&&(t.type==="text"||t.type==="textarea")&&t.value!==s?t[Vs](Ia(t.value,n,i)):t.value=r},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:i,trim:r,number:s}},o){if(t[Vs]=Hu(o),t.composing)return;const a=(s||t.type==="number")&&!/^0\d/.test(t.value)?bc(t.value):t.value,l=e??"";if(a===l)return;const c=t.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===t&&t.type!=="range"&&(i&&e===n||r&&t.value.trim()===l)||(t.value=l)}},Og=["ctrl","shift","alt","meta"],Fg={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Og.some(n=>t[`${n}Key`]&&!e.includes(n))},rs=(t,e)=>{if(!t)return t;const n=t._withMods||(t._withMods={}),i=e.join(".");return n[i]||(n[i]=((r,...s)=>{for(let o=0;o<e.length;o++){const a=Fg[e[o]];if(a&&a(r,e))return}return t(r,...s)}))},Bg=Ut({patchProp:Dg},mg);let Vu;function kg(){return Vu||(Vu=jm(Bg))}const Hg=((...t)=>{const e=kg().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=zg(i);if(!r)return;const s=e._component;!ze(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,Gg(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e});function Gg(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function zg(t){return vt(t)?document.querySelector(t):t}/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let hd;const ha=t=>hd=t,dd=Symbol();function Rl(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var ds;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(ds||(ds={}));function Vg(){const t=dh(!0),e=t.run(()=>En({}));let n=[],i=[];const r=Ic({install(s){ha(r),r._a=s,s.provide(dd,r),s.config.globalProperties.$pinia=r,i.forEach(o=>n.push(o)),i=[]},use(s){return this._a?n.push(s):i.push(s),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}const pd=()=>{};function Wu(t,e,n,i=pd){t.push(e);const r=()=>{const s=t.indexOf(e);s>-1&&(t.splice(s,1),i())};return!n&&ph()&&Lp(r),r}function rr(t,...e){t.slice().forEach(n=>{n(...e)})}const Wg=t=>t(),Xu=Symbol(),Ua=Symbol();function Cl(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,i)=>t.set(i,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const i=e[n],r=t[n];Rl(r)&&Rl(i)&&t.hasOwnProperty(n)&&!xt(i)&&!ii(i)?t[n]=Cl(r,i):t[n]=i}return t}const Xg=Symbol();function qg(t){return!Rl(t)||!t.hasOwnProperty(Xg)}const{assign:xi}=Object;function $g(t){return!!(xt(t)&&t.effect)}function Kg(t,e,n,i){const{state:r,actions:s,getters:o}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=r?r():{});const u=em(n.state.value[t]);return xi(u,s,Object.keys(o||{}).reduce((f,h)=>(f[h]=Ic(ut(()=>{ha(n);const m=n._s.get(t);return o[h].call(m,m)})),f),{}))}return l=md(t,c,e,n,i,!0),l}function md(t,e,n={},i,r,s){let o;const a=xi({actions:{}},n),l={deep:!0};let c,u,f=[],h=[],m;const v=i.state.value[t];!s&&!v&&(i.state.value[t]={});let S;function d(D){let j;c=u=!1,typeof D=="function"?(D(i.state.value[t]),j={type:ds.patchFunction,storeId:t,events:m}):(Cl(i.state.value[t],D),j={type:ds.patchObject,payload:D,storeId:t,events:m});const x=S=Symbol();Lh().then(()=>{S===x&&(c=!0)}),u=!0,rr(f,j,i.state.value[t])}const p=s?function(){const{state:j}=n,x=j?j():{};this.$patch(T=>{xi(T,x)})}:pd;function b(){o.stop(),f=[],h=[],i._s.delete(t)}const y=(D,j="")=>{if(Xu in D)return D[Ua]=j,D;const x=function(){ha(i);const T=Array.from(arguments),$=[],K=[];function Z(Y){$.push(Y)}function se(Y){K.push(Y)}rr(h,{args:T,name:x[Ua],store:P,after:Z,onError:se});let z;try{z=D.apply(this&&this.$id===t?this:P,T)}catch(Y){throw rr(K,Y),Y}return z instanceof Promise?z.then(Y=>(rr($,Y),Y)).catch(Y=>(rr(K,Y),Promise.reject(Y))):(rr($,z),z)};return x[Xu]=!0,x[Ua]=j,x},E={_p:i,$id:t,$onAction:Wu.bind(null,h),$patch:d,$reset:p,$subscribe(D,j={}){const x=Wu(f,D,j.detached,()=>T()),T=o.run(()=>Cr(()=>i.state.value[t],$=>{(j.flush==="sync"?u:c)&&D({storeId:t,type:ds.direct,events:m},$)},xi({},l,j)));return x},$dispose:b},P=As(E);i._s.set(t,P);const R=(i._a&&i._a.runWithContext||Wg)(()=>i._e.run(()=>(o=dh()).run(()=>e({action:y}))));for(const D in R){const j=R[D];if(xt(j)&&!$g(j)||ii(j))s||(v&&qg(j)&&(xt(j)?j.value=v[D]:Cl(j,v[D])),i.state.value[t][D]=j);else if(typeof j=="function"){const x=y(j,D);R[D]=x,a.actions[D]=j}}return xi(P,R),xi(Ze(P),R),Object.defineProperty(P,"$state",{get:()=>i.state.value[t],set:D=>{d(j=>{xi(j,D)})}}),i._p.forEach(D=>{xi(P,o.run(()=>D({store:P,app:i._a,pinia:i,options:a})))}),v&&s&&n.hydrate&&n.hydrate(P.$state,v),c=!0,u=!0,P}/*! #__NO_SIDE_EFFECTS__ */function Yg(t,e,n){let i,r;const s=typeof e=="function";i=t,r=s?n:e;function o(a,l){const c=hm();return a=a||(c?cs(dd,null):null),a&&ha(a),a=hd,a._s.has(i)||(s?md(i,e,r,a):Kg(i,r,a)),a._s.get(i)}return o.$id=i,o}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Hc="169",jg=0,qu=1,Zg=2,gd=1,Jg=2,$n=3,wi=0,Yt=1,Nn=2,Ei=0,Pr=1,$u=2,Ku=3,Yu=4,Qg=5,Vi=100,e_=101,t_=102,n_=103,i_=104,r_=200,s_=201,o_=202,a_=203,Pl=204,Ll=205,l_=206,c_=207,u_=208,f_=209,h_=210,d_=211,p_=212,m_=213,g_=214,Dl=0,Il=1,Ul=2,Fr=3,Nl=4,Ol=5,Fl=6,Bl=7,_d=0,__=1,v_=2,Ti=0,x_=1,S_=2,y_=3,M_=4,E_=5,T_=6,b_=7,vd=300,Br=301,kr=302,kl=303,Hl=304,da=306,Gl=1e3,Xi=1001,zl=1002,fn=1003,A_=1004,Xs=1005,vn=1006,Na=1007,qi=1008,li=1009,xd=1010,Sd=1011,ys=1012,Gc=1013,Ji=1014,ei=1015,Ps=1016,zc=1017,Vc=1018,Hr=1020,yd=35902,Md=1021,Ed=1022,Sn=1023,Td=1024,bd=1025,Lr=1026,Gr=1027,Ad=1028,Wc=1029,wd=1030,Xc=1031,qc=1033,So=33776,yo=33777,Mo=33778,Eo=33779,Vl=35840,Wl=35841,Xl=35842,ql=35843,$l=36196,Kl=37492,Yl=37496,jl=37808,Zl=37809,Jl=37810,Ql=37811,ec=37812,tc=37813,nc=37814,ic=37815,rc=37816,sc=37817,oc=37818,ac=37819,lc=37820,cc=37821,To=36492,uc=36494,fc=36495,Rd=36283,hc=36284,dc=36285,pc=36286,w_=3200,R_=3201,Cd=0,C_=1,yi="",_n="srgb",Ci="srgb-linear",$c="display-p3",pa="display-p3-linear",Ho="linear",dt="srgb",Go="rec709",zo="p3",sr=7680,ju=519,P_=512,L_=513,D_=514,Pd=515,I_=516,U_=517,N_=518,O_=519,Zu=35044,Ju="300 es",ti=2e3,Vo=2001;class Xr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Nt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Oa=Math.PI/180,mc=180/Math.PI;function Ls(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Nt[t&255]+Nt[t>>8&255]+Nt[t>>16&255]+Nt[t>>24&255]+"-"+Nt[e&255]+Nt[e>>8&255]+"-"+Nt[e>>16&15|64]+Nt[e>>24&255]+"-"+Nt[n&63|128]+Nt[n>>8&255]+"-"+Nt[n>>16&255]+Nt[n>>24&255]+Nt[i&255]+Nt[i>>8&255]+Nt[i>>16&255]+Nt[i>>24&255]).toLowerCase()}function Kt(t,e,n){return Math.max(e,Math.min(n,t))}function F_(t,e){return(t%e+e)%e}function Fa(t,e,n){return(1-n)*t+n*e}function Yr(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function qt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class qe{constructor(e=0,n=0){qe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xe{constructor(e,n,i,r,s,o,a,l,c){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],m=i[5],v=i[8],S=r[0],d=r[3],p=r[6],b=r[1],y=r[4],E=r[7],P=r[2],C=r[5],R=r[8];return s[0]=o*S+a*b+l*P,s[3]=o*d+a*y+l*C,s[6]=o*p+a*E+l*R,s[1]=c*S+u*b+f*P,s[4]=c*d+u*y+f*C,s[7]=c*p+u*E+f*R,s[2]=h*S+m*b+v*P,s[5]=h*d+m*y+v*C,s[8]=h*p+m*E+v*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,m=c*s-o*l,v=n*f+i*h+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/v;return e[0]=f*S,e[1]=(r*c-u*i)*S,e[2]=(a*i-r*o)*S,e[3]=h*S,e[4]=(u*n-r*l)*S,e[5]=(r*s-a*n)*S,e[6]=m*S,e[7]=(i*l-c*n)*S,e[8]=(o*n-i*s)*S,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Ba.makeScale(e,n)),this}rotate(e){return this.premultiply(Ba.makeRotation(-e)),this}translate(e,n){return this.premultiply(Ba.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ba=new Xe;function Ld(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Wo(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function B_(){const t=Wo("canvas");return t.style.display="block",t}const Qu={};function bo(t){t in Qu||(Qu[t]=!0,console.warn(t))}function k_(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function H_(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function G_(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const ef=new Xe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),tf=new Xe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),jr={[Ci]:{transfer:Ho,primaries:Go,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[_n]:{transfer:dt,primaries:Go,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[pa]:{transfer:Ho,primaries:zo,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(tf),fromReference:t=>t.applyMatrix3(ef)},[$c]:{transfer:dt,primaries:zo,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(tf),fromReference:t=>t.applyMatrix3(ef).convertLinearToSRGB()}},z_=new Set([Ci,pa]),nt={enabled:!0,_workingColorSpace:Ci,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!z_.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=jr[e].toReference,r=jr[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return jr[t].primaries},getTransfer:function(t){return t===yi?Ho:jr[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(jr[e].luminanceCoefficients)}};function Dr(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function ka(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let or;class V_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{or===void 0&&(or=Wo("canvas")),or.width=e.width,or.height=e.height;const i=or.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=or}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Wo("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Dr(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Dr(n[i]/255)*255):n[i]=Dr(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let W_=0;class Dd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:W_++}),this.uuid=Ls(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ha(r[o].image)):s.push(Ha(r[o]))}else s=Ha(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Ha(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?V_.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let X_=0;class jt extends Xr{constructor(e=jt.DEFAULT_IMAGE,n=jt.DEFAULT_MAPPING,i=Xi,r=Xi,s=vn,o=qi,a=Sn,l=li,c=jt.DEFAULT_ANISOTROPY,u=yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:X_++}),this.uuid=Ls(),this.name="",this.source=new Dd(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==vd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gl:e.x=e.x-Math.floor(e.x);break;case Xi:e.x=e.x<0?0:1;break;case zl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Gl:e.y=e.y-Math.floor(e.y);break;case Xi:e.y=e.y<0?0:1;break;case zl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}jt.DEFAULT_IMAGE=null;jt.DEFAULT_MAPPING=vd;jt.DEFAULT_ANISOTROPY=1;class ot{constructor(e=0,n=0,i=0,r=1){ot.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],m=l[5],v=l[9],S=l[2],d=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-S)<.01&&Math.abs(v-d)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+S)<.1&&Math.abs(v+d)<.1&&Math.abs(c+m+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const y=(c+1)/2,E=(m+1)/2,P=(p+1)/2,C=(u+h)/4,R=(f+S)/4,D=(v+d)/4;return y>E&&y>P?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=C/i,s=R/i):E>P?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=C/r,s=D/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=R/s,r=D/s),this.set(i,r,s,n),this}let b=Math.sqrt((d-v)*(d-v)+(f-S)*(f-S)+(h-u)*(h-u));return Math.abs(b)<.001&&(b=1),this.x=(d-v)/b,this.y=(f-S)/b,this.z=(h-u)/b,this.w=Math.acos((c+m+p-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class q_ extends Xr{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new ot(0,0,e,n),this.scissorTest=!1,this.viewport=new ot(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new jt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Dd(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qi extends q_{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Id extends jt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=fn,this.minFilter=fn,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class $_ extends jt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=fn,this.minFilter=fn,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ds{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[o+0],m=s[o+1],v=s[o+2],S=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f;return}if(a===1){e[n+0]=h,e[n+1]=m,e[n+2]=v,e[n+3]=S;return}if(f!==S||l!==h||c!==m||u!==v){let d=1-a;const p=l*h+c*m+u*v+f*S,b=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const P=Math.sqrt(y),C=Math.atan2(P,p*b);d=Math.sin(d*C)/P,a=Math.sin(a*C)/P}const E=a*b;if(l=l*d+h*E,c=c*d+m*E,u=u*d+v*E,f=f*d+S*E,d===1-a){const P=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=P,c*=P,u*=P,f*=P}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],h=s[o+1],m=s[o+2],v=s[o+3];return e[n]=a*v+u*f+l*m-c*h,e[n+1]=l*v+u*h+c*f-a*m,e[n+2]=c*v+u*m+a*h-l*f,e[n+3]=u*v-a*f-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),h=l(i/2),m=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*m*v,this._y=c*m*f-h*u*v,this._z=c*u*v+h*m*f,this._w=c*u*f-h*m*v;break;case"YXZ":this._x=h*u*f+c*m*v,this._y=c*m*f-h*u*v,this._z=c*u*v-h*m*f,this._w=c*u*f+h*m*v;break;case"ZXY":this._x=h*u*f-c*m*v,this._y=c*m*f+h*u*v,this._z=c*u*v+h*m*f,this._w=c*u*f-h*m*v;break;case"ZYX":this._x=h*u*f-c*m*v,this._y=c*m*f+h*u*v,this._z=c*u*v-h*m*f,this._w=c*u*f+h*m*v;break;case"YZX":this._x=h*u*f+c*m*v,this._y=c*m*f+h*u*v,this._z=c*u*v-h*m*f,this._w=c*u*f-h*m*v;break;case"XZY":this._x=h*u*f-c*m*v,this._y=c*m*f-h*u*v,this._z=c*u*v+h*m*f,this._w=c*u*f+h*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],f=n[10],h=i+a+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(i>a&&i>f){const m=2*Math.sqrt(1+i-a-f);this._w=(u-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>f){const m=2*Math.sqrt(1+a-i-f);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-i-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Kt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-n;return this._w=m*o+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-n)*u)/c,h=Math.sin(n*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,n=0,i=0){F.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(nf.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(nf.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ga.copy(this).projectOnVector(e),this.sub(Ga)}reflect(e){return this.sub(Ga.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ga=new F,nf=new Ds;class Is{constructor(e=new F(1/0,1/0,1/0),n=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(pn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(pn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=pn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,pn):pn.fromBufferAttribute(s,o),pn.applyMatrix4(e.matrixWorld),this.expandByPoint(pn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),qs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),qs.copy(i.boundingBox)),qs.applyMatrix4(e.matrixWorld),this.union(qs)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,pn),pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zr),$s.subVectors(this.max,Zr),ar.subVectors(e.a,Zr),lr.subVectors(e.b,Zr),cr.subVectors(e.c,Zr),di.subVectors(lr,ar),pi.subVectors(cr,lr),Ui.subVectors(ar,cr);let n=[0,-di.z,di.y,0,-pi.z,pi.y,0,-Ui.z,Ui.y,di.z,0,-di.x,pi.z,0,-pi.x,Ui.z,0,-Ui.x,-di.y,di.x,0,-pi.y,pi.x,0,-Ui.y,Ui.x,0];return!za(n,ar,lr,cr,$s)||(n=[1,0,0,0,1,0,0,0,1],!za(n,ar,lr,cr,$s))?!1:(Ks.crossVectors(di,pi),n=[Ks.x,Ks.y,Ks.z],za(n,ar,lr,cr,$s))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const zn=[new F,new F,new F,new F,new F,new F,new F,new F],pn=new F,qs=new Is,ar=new F,lr=new F,cr=new F,di=new F,pi=new F,Ui=new F,Zr=new F,$s=new F,Ks=new F,Ni=new F;function za(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Ni.fromArray(t,s);const a=r.x*Math.abs(Ni.x)+r.y*Math.abs(Ni.y)+r.z*Math.abs(Ni.z),l=e.dot(Ni),c=n.dot(Ni),u=i.dot(Ni);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const K_=new Is,Jr=new F,Va=new F;class Kc{constructor(e=new F,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):K_.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Jr.subVectors(e,this.center);const n=Jr.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Jr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Va.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Jr.copy(e.center).add(Va)),this.expandByPoint(Jr.copy(e.center).sub(Va))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Vn=new F,Wa=new F,Ys=new F,mi=new F,Xa=new F,js=new F,qa=new F;class Y_{constructor(e=new F,n=new F(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Vn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Vn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Vn.copy(this.origin).addScaledVector(this.direction,n),Vn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Wa.copy(e).add(n).multiplyScalar(.5),Ys.copy(n).sub(e).normalize(),mi.copy(this.origin).sub(Wa);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Ys),a=mi.dot(this.direction),l=-mi.dot(Ys),c=mi.lengthSq(),u=Math.abs(1-o*o);let f,h,m,v;if(u>0)if(f=o*l-a,h=o*a-l,v=s*u,f>=0)if(h>=-v)if(h<=v){const S=1/u;f*=S,h*=S,m=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;else h<=-v?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c):h<=v?(f=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Wa).addScaledVector(Ys,h),m}intersectSphere(e,n){Vn.subVectors(e.center,this.origin);const i=Vn.dot(this.direction),r=Vn.dot(Vn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Vn)!==null}intersectTriangle(e,n,i,r,s){Xa.subVectors(n,e),js.subVectors(i,e),qa.crossVectors(Xa,js);let o=this.direction.dot(qa),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;mi.subVectors(this.origin,e);const l=a*this.direction.dot(js.crossVectors(mi,js));if(l<0)return null;const c=a*this.direction.dot(Xa.cross(mi));if(c<0||l+c>o)return null;const u=-a*mi.dot(qa);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class gt{constructor(e,n,i,r,s,o,a,l,c,u,f,h,m,v,S,d){gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,f,h,m,v,S,d)}set(e,n,i,r,s,o,a,l,c,u,f,h,m,v,S,d){const p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=m,p[7]=v,p[11]=S,p[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/ur.setFromMatrixColumn(e,0).length(),s=1/ur.setFromMatrixColumn(e,1).length(),o=1/ur.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,m=o*f,v=a*u,S=a*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=m+v*c,n[5]=h-S*c,n[9]=-a*l,n[2]=S-h*c,n[6]=v+m*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*u,m=l*f,v=c*u,S=c*f;n[0]=h+S*a,n[4]=v*a-m,n[8]=o*c,n[1]=o*f,n[5]=o*u,n[9]=-a,n[2]=m*a-v,n[6]=S+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*u,m=l*f,v=c*u,S=c*f;n[0]=h-S*a,n[4]=-o*f,n[8]=v+m*a,n[1]=m+v*a,n[5]=o*u,n[9]=S-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*u,m=o*f,v=a*u,S=a*f;n[0]=l*u,n[4]=v*c-m,n[8]=h*c+S,n[1]=l*f,n[5]=S*c+h,n[9]=m*c-v,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,m=o*c,v=a*l,S=a*c;n[0]=l*u,n[4]=S-h*f,n[8]=v*f+m,n[1]=f,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=m*f+v,n[10]=h-S*f}else if(e.order==="XZY"){const h=o*l,m=o*c,v=a*l,S=a*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=h*f+S,n[5]=o*u,n[9]=m*f-v,n[2]=v*f-m,n[6]=a*u,n[10]=S*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(j_,e,Z_)}lookAt(e,n,i){const r=this.elements;return Qt.subVectors(e,n),Qt.lengthSq()===0&&(Qt.z=1),Qt.normalize(),gi.crossVectors(i,Qt),gi.lengthSq()===0&&(Math.abs(i.z)===1?Qt.x+=1e-4:Qt.z+=1e-4,Qt.normalize(),gi.crossVectors(i,Qt)),gi.normalize(),Zs.crossVectors(Qt,gi),r[0]=gi.x,r[4]=Zs.x,r[8]=Qt.x,r[1]=gi.y,r[5]=Zs.y,r[9]=Qt.y,r[2]=gi.z,r[6]=Zs.z,r[10]=Qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],m=i[13],v=i[2],S=i[6],d=i[10],p=i[14],b=i[3],y=i[7],E=i[11],P=i[15],C=r[0],R=r[4],D=r[8],j=r[12],x=r[1],T=r[5],$=r[9],K=r[13],Z=r[2],se=r[6],z=r[10],Y=r[14],k=r[3],ge=r[7],ve=r[11],ye=r[15];return s[0]=o*C+a*x+l*Z+c*k,s[4]=o*R+a*T+l*se+c*ge,s[8]=o*D+a*$+l*z+c*ve,s[12]=o*j+a*K+l*Y+c*ye,s[1]=u*C+f*x+h*Z+m*k,s[5]=u*R+f*T+h*se+m*ge,s[9]=u*D+f*$+h*z+m*ve,s[13]=u*j+f*K+h*Y+m*ye,s[2]=v*C+S*x+d*Z+p*k,s[6]=v*R+S*T+d*se+p*ge,s[10]=v*D+S*$+d*z+p*ve,s[14]=v*j+S*K+d*Y+p*ye,s[3]=b*C+y*x+E*Z+P*k,s[7]=b*R+y*T+E*se+P*ge,s[11]=b*D+y*$+E*z+P*ve,s[15]=b*j+y*K+E*Y+P*ye,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],m=e[14],v=e[3],S=e[7],d=e[11],p=e[15];return v*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*m-i*l*m)+S*(+n*l*m-n*c*h+s*o*h-r*o*m+r*c*u-s*l*u)+d*(+n*c*f-n*a*m-s*o*f+i*o*m+s*a*u-i*c*u)+p*(-r*a*u-n*l*f+n*a*h+r*o*f-i*o*h+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],m=e[11],v=e[12],S=e[13],d=e[14],p=e[15],b=f*d*c-S*h*c+S*l*m-a*d*m-f*l*p+a*h*p,y=v*h*c-u*d*c-v*l*m+o*d*m+u*l*p-o*h*p,E=u*S*c-v*f*c+v*a*m-o*S*m-u*a*p+o*f*p,P=v*f*l-u*S*l-v*a*h+o*S*h+u*a*d-o*f*d,C=n*b+i*y+r*E+s*P;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/C;return e[0]=b*R,e[1]=(S*h*s-f*d*s-S*r*m+i*d*m+f*r*p-i*h*p)*R,e[2]=(a*d*s-S*l*s+S*r*c-i*d*c-a*r*p+i*l*p)*R,e[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*m-i*l*m)*R,e[4]=y*R,e[5]=(u*d*s-v*h*s+v*r*m-n*d*m-u*r*p+n*h*p)*R,e[6]=(v*l*s-o*d*s-v*r*c+n*d*c+o*r*p-n*l*p)*R,e[7]=(o*h*s-u*l*s+u*r*c-n*h*c-o*r*m+n*l*m)*R,e[8]=E*R,e[9]=(v*f*s-u*S*s-v*i*m+n*S*m+u*i*p-n*f*p)*R,e[10]=(o*S*s-v*a*s+v*i*c-n*S*c-o*i*p+n*a*p)*R,e[11]=(u*a*s-o*f*s-u*i*c+n*f*c+o*i*m-n*a*m)*R,e[12]=P*R,e[13]=(u*S*r-v*f*r+v*i*h-n*S*h-u*i*d+n*f*d)*R,e[14]=(v*a*r-o*S*r-v*i*l+n*S*l+o*i*d-n*a*d)*R,e[15]=(o*f*r-u*a*r+u*i*l-n*f*l-o*i*h+n*a*h)*R,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,f=a+a,h=s*c,m=s*u,v=s*f,S=o*u,d=o*f,p=a*f,b=l*c,y=l*u,E=l*f,P=i.x,C=i.y,R=i.z;return r[0]=(1-(S+p))*P,r[1]=(m+E)*P,r[2]=(v-y)*P,r[3]=0,r[4]=(m-E)*C,r[5]=(1-(h+p))*C,r[6]=(d+b)*C,r[7]=0,r[8]=(v+y)*R,r[9]=(d-b)*R,r[10]=(1-(h+S))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=ur.set(r[0],r[1],r[2]).length();const o=ur.set(r[4],r[5],r[6]).length(),a=ur.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],mn.copy(this);const c=1/s,u=1/o,f=1/a;return mn.elements[0]*=c,mn.elements[1]*=c,mn.elements[2]*=c,mn.elements[4]*=u,mn.elements[5]*=u,mn.elements[6]*=u,mn.elements[8]*=f,mn.elements[9]*=f,mn.elements[10]*=f,n.setFromRotationMatrix(mn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=ti){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),f=(n+e)/(n-e),h=(i+r)/(i-r);let m,v;if(a===ti)m=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===Vo)m=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=ti){const l=this.elements,c=1/(n-e),u=1/(i-r),f=1/(o-s),h=(n+e)*c,m=(i+r)*u;let v,S;if(a===ti)v=(o+s)*f,S=-2*f;else if(a===Vo)v=s*f,S=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=S,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const ur=new F,mn=new gt,j_=new F(0,0,0),Z_=new F(1,1,1),gi=new F,Zs=new F,Qt=new F,rf=new gt,sf=new Ds;class Bn{constructor(e=0,n=0,i=0,r=Bn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Kt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return rf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(rf,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return sf.setFromEuler(this),this.setFromQuaternion(sf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Bn.DEFAULT_ORDER="XYZ";class Ud{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let J_=0;const of=new F,fr=new Ds,Wn=new gt,Js=new F,Qr=new F,Q_=new F,e0=new Ds,af=new F(1,0,0),lf=new F(0,1,0),cf=new F(0,0,1),uf={type:"added"},t0={type:"removed"},hr={type:"childadded",child:null},$a={type:"childremoved",child:null};class It extends Xr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:J_++}),this.uuid=Ls(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=It.DEFAULT_UP.clone();const e=new F,n=new Bn,i=new Ds,r=new F(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new gt},normalMatrix:{value:new Xe}}),this.matrix=new gt,this.matrixWorld=new gt,this.matrixAutoUpdate=It.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ud,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return fr.setFromAxisAngle(e,n),this.quaternion.multiply(fr),this}rotateOnWorldAxis(e,n){return fr.setFromAxisAngle(e,n),this.quaternion.premultiply(fr),this}rotateX(e){return this.rotateOnAxis(af,e)}rotateY(e){return this.rotateOnAxis(lf,e)}rotateZ(e){return this.rotateOnAxis(cf,e)}translateOnAxis(e,n){return of.copy(e).applyQuaternion(this.quaternion),this.position.add(of.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(af,e)}translateY(e){return this.translateOnAxis(lf,e)}translateZ(e){return this.translateOnAxis(cf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Wn.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Js.copy(e):Js.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Qr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wn.lookAt(Qr,Js,this.up):Wn.lookAt(Js,Qr,this.up),this.quaternion.setFromRotationMatrix(Wn),r&&(Wn.extractRotation(r.matrixWorld),fr.setFromRotationMatrix(Wn),this.quaternion.premultiply(fr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(uf),hr.child=e,this.dispatchEvent(hr),hr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(t0),$a.child=e,this.dispatchEvent($a),$a.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Wn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Wn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Wn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(uf),hr.child=e,this.dispatchEvent(hr),hr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qr,e,Q_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qr,e0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),m=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}It.DEFAULT_UP=new F(0,1,0);It.DEFAULT_MATRIX_AUTO_UPDATE=!0;It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const gn=new F,Xn=new F,Ka=new F,qn=new F,dr=new F,pr=new F,ff=new F,Ya=new F,ja=new F,Za=new F,Ja=new ot,Qa=new ot,el=new ot;class xn{constructor(e=new F,n=new F,i=new F){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),gn.subVectors(e,n),r.cross(gn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){gn.subVectors(r,n),Xn.subVectors(i,n),Ka.subVectors(e,n);const o=gn.dot(gn),a=gn.dot(Xn),l=gn.dot(Ka),c=Xn.dot(Xn),u=Xn.dot(Ka),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,m=(c*l-a*u)*h,v=(o*u-a*l)*h;return s.set(1-m-v,v,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,qn)===null?!1:qn.x>=0&&qn.y>=0&&qn.x+qn.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,qn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,qn.x),l.addScaledVector(o,qn.y),l.addScaledVector(a,qn.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return Ja.setScalar(0),Qa.setScalar(0),el.setScalar(0),Ja.fromBufferAttribute(e,n),Qa.fromBufferAttribute(e,i),el.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Ja,s.x),o.addScaledVector(Qa,s.y),o.addScaledVector(el,s.z),o}static isFrontFacing(e,n,i,r){return gn.subVectors(i,n),Xn.subVectors(e,n),gn.cross(Xn).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gn.subVectors(this.c,this.b),Xn.subVectors(this.a,this.b),gn.cross(Xn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return xn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return xn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return xn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return xn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return xn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;dr.subVectors(r,i),pr.subVectors(s,i),Ya.subVectors(e,i);const l=dr.dot(Ya),c=pr.dot(Ya);if(l<=0&&c<=0)return n.copy(i);ja.subVectors(e,r);const u=dr.dot(ja),f=pr.dot(ja);if(u>=0&&f<=u)return n.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(dr,o);Za.subVectors(e,s);const m=dr.dot(Za),v=pr.dot(Za);if(v>=0&&m<=v)return n.copy(s);const S=m*c-l*v;if(S<=0&&c>=0&&v<=0)return a=c/(c-v),n.copy(i).addScaledVector(pr,a);const d=u*v-m*f;if(d<=0&&f-u>=0&&m-v>=0)return ff.subVectors(s,r),a=(f-u)/(f-u+(m-v)),n.copy(r).addScaledVector(ff,a);const p=1/(d+S+h);return o=S*p,a=h*p,n.copy(i).addScaledVector(dr,o).addScaledVector(pr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Nd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_i={h:0,s:0,l:0},Qs={h:0,s:0,l:0};function tl(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ke{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=_n){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=nt.workingColorSpace){return this.r=e,this.g=n,this.b=i,nt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=nt.workingColorSpace){if(e=F_(e,1),n=Kt(n,0,1),i=Kt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=tl(o,s,e+1/3),this.g=tl(o,s,e),this.b=tl(o,s,e-1/3)}return nt.toWorkingColorSpace(this,r),this}setStyle(e,n=_n){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=_n){const i=Nd[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Dr(e.r),this.g=Dr(e.g),this.b=Dr(e.b),this}copyLinearToSRGB(e){return this.r=ka(e.r),this.g=ka(e.g),this.b=ka(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_n){return nt.fromWorkingColorSpace(Ot.copy(this),e),Math.round(Kt(Ot.r*255,0,255))*65536+Math.round(Kt(Ot.g*255,0,255))*256+Math.round(Kt(Ot.b*255,0,255))}getHexString(e=_n){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=nt.workingColorSpace){nt.fromWorkingColorSpace(Ot.copy(this),n);const i=Ot.r,r=Ot.g,s=Ot.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=nt.workingColorSpace){return nt.fromWorkingColorSpace(Ot.copy(this),n),e.r=Ot.r,e.g=Ot.g,e.b=Ot.b,e}getStyle(e=_n){nt.fromWorkingColorSpace(Ot.copy(this),e);const n=Ot.r,i=Ot.g,r=Ot.b;return e!==_n?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(_i),this.setHSL(_i.h+e,_i.s+n,_i.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(_i),e.getHSL(Qs);const i=Fa(_i.h,Qs.h,n),r=Fa(_i.s,Qs.s,n),s=Fa(_i.l,Qs.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ot=new Ke;Ke.NAMES=Nd;let n0=0;class Us extends Xr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:n0++}),this.uuid=Ls(),this.name="",this.type="Material",this.blending=Pr,this.side=wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pl,this.blendDst=Ll,this.blendEquation=Vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=Fr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ju,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=sr,this.stencilZFail=sr,this.stencilZPass=sr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Pr&&(i.blending=this.blending),this.side!==wi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Pl&&(i.blendSrc=this.blendSrc),this.blendDst!==Ll&&(i.blendDst=this.blendDst),this.blendEquation!==Vi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Fr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ju&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==sr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==sr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==sr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Xo extends Us{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.combine=_d,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Mt=new F,eo=new qe;class Fn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Zu,this.updateRanges=[],this.gpuType=ei,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)eo.fromBufferAttribute(this,n),eo.applyMatrix3(e),this.setXY(n,eo.x,eo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.applyMatrix3(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.applyMatrix4(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.applyNormalMatrix(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.transformDirection(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Yr(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=qt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Yr(n,this.array)),n}setX(e,n){return this.normalized&&(n=qt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Yr(n,this.array)),n}setY(e,n){return this.normalized&&(n=qt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Yr(n,this.array)),n}setZ(e,n){return this.normalized&&(n=qt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Yr(n,this.array)),n}setW(e,n){return this.normalized&&(n=qt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=qt(n,this.array),i=qt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=qt(n,this.array),i=qt(i,this.array),r=qt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=qt(n,this.array),i=qt(i,this.array),r=qt(r,this.array),s=qt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Zu&&(e.usage=this.usage),e}}class Od extends Fn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Fd extends Fn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class on extends Fn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let i0=0;const ln=new gt,nl=new It,mr=new F,en=new Is,es=new Is,Rt=new F;class ui extends Xr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:i0++}),this.uuid=Ls(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ld(e)?Fd:Od)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Xe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ln.makeRotationFromQuaternion(e),this.applyMatrix4(ln),this}rotateX(e){return ln.makeRotationX(e),this.applyMatrix4(ln),this}rotateY(e){return ln.makeRotationY(e),this.applyMatrix4(ln),this}rotateZ(e){return ln.makeRotationZ(e),this.applyMatrix4(ln),this}translate(e,n,i){return ln.makeTranslation(e,n,i),this.applyMatrix4(ln),this}scale(e,n,i){return ln.makeScale(e,n,i),this.applyMatrix4(ln),this}lookAt(e){return nl.lookAt(e),nl.updateMatrix(),this.applyMatrix4(nl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(mr).negate(),this.translate(mr.x,mr.y,mr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new on(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Is);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];en.setFromBufferAttribute(s),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const i=this.boundingSphere.center;if(en.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];es.setFromBufferAttribute(a),this.morphTargetsRelative?(Rt.addVectors(en.min,es.min),en.expandByPoint(Rt),Rt.addVectors(en.max,es.max),en.expandByPoint(Rt)):(en.expandByPoint(es.min),en.expandByPoint(es.max))}en.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Rt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Rt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Rt.fromBufferAttribute(a,c),l&&(mr.fromBufferAttribute(e,c),Rt.add(mr)),r=Math.max(r,i.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Fn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<i.count;D++)a[D]=new F,l[D]=new F;const c=new F,u=new F,f=new F,h=new qe,m=new qe,v=new qe,S=new F,d=new F;function p(D,j,x){c.fromBufferAttribute(i,D),u.fromBufferAttribute(i,j),f.fromBufferAttribute(i,x),h.fromBufferAttribute(s,D),m.fromBufferAttribute(s,j),v.fromBufferAttribute(s,x),u.sub(c),f.sub(c),m.sub(h),v.sub(h);const T=1/(m.x*v.y-v.x*m.y);isFinite(T)&&(S.copy(u).multiplyScalar(v.y).addScaledVector(f,-m.y).multiplyScalar(T),d.copy(f).multiplyScalar(m.x).addScaledVector(u,-v.x).multiplyScalar(T),a[D].add(S),a[j].add(S),a[x].add(S),l[D].add(d),l[j].add(d),l[x].add(d))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let D=0,j=b.length;D<j;++D){const x=b[D],T=x.start,$=x.count;for(let K=T,Z=T+$;K<Z;K+=3)p(e.getX(K+0),e.getX(K+1),e.getX(K+2))}const y=new F,E=new F,P=new F,C=new F;function R(D){P.fromBufferAttribute(r,D),C.copy(P);const j=a[D];y.copy(j),y.sub(P.multiplyScalar(P.dot(j))).normalize(),E.crossVectors(C,j);const T=E.dot(l[D])<0?-1:1;o.setXYZW(D,y.x,y.y,y.z,T)}for(let D=0,j=b.length;D<j;++D){const x=b[D],T=x.start,$=x.count;for(let K=T,Z=T+$;K<Z;K+=3)R(e.getX(K+0)),R(e.getX(K+1)),R(e.getX(K+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Fn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new F,s=new F,o=new F,a=new F,l=new F,c=new F,u=new F,f=new F;if(e)for(let h=0,m=e.count;h<m;h+=3){const v=e.getX(h+0),S=e.getX(h+1),d=e.getX(h+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,S),o.fromBufferAttribute(n,d),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,d),a.add(u),l.add(u),c.add(u),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(d,c.x,c.y,c.z)}else for(let h=0,m=n.count;h<m;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Rt.fromBufferAttribute(e,n),Rt.normalize(),e.setXYZ(n,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let m=0,v=0;for(let S=0,d=l.length;S<d;S++){a.isInterleavedBufferAttribute?m=l[S]*a.data.stride+a.offset:m=l[S]*u;for(let p=0;p<u;p++)h[v++]=c[m++]}return new Fn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ui,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],m=e(h,i);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const m=c[f];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,m=f.length;h<m;h++)u.push(f[h].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const hf=new gt,Oi=new Y_,to=new Kc,df=new F,no=new F,io=new F,ro=new F,il=new F,so=new F,pf=new F,oo=new F;class zt extends It{constructor(e=new ui,n=new Xo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){so.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(il.fromBufferAttribute(f,e),o?so.addScaledVector(il,u):so.addScaledVector(il.sub(n),u))}n.add(so)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),to.copy(i.boundingSphere),to.applyMatrix4(s),Oi.copy(e.ray).recast(e.near),!(to.containsPoint(Oi.origin)===!1&&(Oi.intersectSphere(to,df)===null||Oi.origin.distanceToSquared(df)>(e.far-e.near)**2))&&(hf.copy(s).invert(),Oi.copy(e.ray).applyMatrix4(hf),!(i.boundingBox!==null&&Oi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Oi)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,S=h.length;v<S;v++){const d=h[v],p=o[d.materialIndex],b=Math.max(d.start,m.start),y=Math.min(a.count,Math.min(d.start+d.count,m.start+m.count));for(let E=b,P=y;E<P;E+=3){const C=a.getX(E),R=a.getX(E+1),D=a.getX(E+2);r=ao(this,p,e,i,c,u,f,C,R,D),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=d.materialIndex,n.push(r))}}else{const v=Math.max(0,m.start),S=Math.min(a.count,m.start+m.count);for(let d=v,p=S;d<p;d+=3){const b=a.getX(d),y=a.getX(d+1),E=a.getX(d+2);r=ao(this,o,e,i,c,u,f,b,y,E),r&&(r.faceIndex=Math.floor(d/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,S=h.length;v<S;v++){const d=h[v],p=o[d.materialIndex],b=Math.max(d.start,m.start),y=Math.min(l.count,Math.min(d.start+d.count,m.start+m.count));for(let E=b,P=y;E<P;E+=3){const C=E,R=E+1,D=E+2;r=ao(this,p,e,i,c,u,f,C,R,D),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=d.materialIndex,n.push(r))}}else{const v=Math.max(0,m.start),S=Math.min(l.count,m.start+m.count);for(let d=v,p=S;d<p;d+=3){const b=d,y=d+1,E=d+2;r=ao(this,o,e,i,c,u,f,b,y,E),r&&(r.faceIndex=Math.floor(d/3),n.push(r))}}}}function r0(t,e,n,i,r,s,o,a){let l;if(e.side===Yt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===wi,a),l===null)return null;oo.copy(a),oo.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(oo);return c<n.near||c>n.far?null:{distance:c,point:oo.clone(),object:t}}function ao(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,no),t.getVertexPosition(l,io),t.getVertexPosition(c,ro);const u=r0(t,e,n,i,no,io,ro,pf);if(u){const f=new F;xn.getBarycoord(pf,no,io,ro,f),r&&(u.uv=xn.getInterpolatedAttribute(r,a,l,c,f,new qe)),s&&(u.uv1=xn.getInterpolatedAttribute(s,a,l,c,f,new qe)),o&&(u.normal=xn.getInterpolatedAttribute(o,a,l,c,f,new F),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new F,materialIndex:0};xn.getNormal(no,io,ro,h.normal),u.face=h,u.barycoord=f}return u}class er extends ui{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,m=0;v("z","y","x",-1,-1,i,n,e,o,s,0),v("z","y","x",1,-1,i,n,-e,o,s,1),v("x","z","y",1,1,e,i,n,r,o,2),v("x","z","y",1,-1,e,i,-n,r,o,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new on(c,3)),this.setAttribute("normal",new on(u,3)),this.setAttribute("uv",new on(f,2));function v(S,d,p,b,y,E,P,C,R,D,j){const x=E/R,T=P/D,$=E/2,K=P/2,Z=C/2,se=R+1,z=D+1;let Y=0,k=0;const ge=new F;for(let ve=0;ve<z;ve++){const ye=ve*T-K;for(let Ge=0;Ge<se;Ge++){const $e=Ge*x-$;ge[S]=$e*b,ge[d]=ye*y,ge[p]=Z,c.push(ge.x,ge.y,ge.z),ge[S]=0,ge[d]=0,ge[p]=C>0?1:-1,u.push(ge.x,ge.y,ge.z),f.push(Ge/R),f.push(1-ve/D),Y+=1}}for(let ve=0;ve<D;ve++)for(let ye=0;ye<R;ye++){const Ge=h+ye+se*ve,$e=h+ye+se*(ve+1),ne=h+(ye+1)+se*(ve+1),W=h+(ye+1)+se*ve;l.push(Ge,$e,W),l.push($e,ne,W),k+=6}a.addGroup(m,k,j),m+=k,h+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new er(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function zr(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Ht(t){const e={};for(let n=0;n<t.length;n++){const i=zr(t[n]);for(const r in i)e[r]=i[r]}return e}function s0(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Bd(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}const o0={clone:zr,merge:Ht};var a0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,l0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ri extends Us{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=a0,this.fragmentShader=l0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zr(e.uniforms),this.uniformsGroups=s0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class kd extends It{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gt,this.projectionMatrix=new gt,this.projectionMatrixInverse=new gt,this.coordinateSystem=ti}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const vi=new F,mf=new qe,gf=new qe;class tn extends kd{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=mc*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Oa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return mc*2*Math.atan(Math.tan(Oa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(vi.x,vi.y).multiplyScalar(-e/vi.z),vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(vi.x,vi.y).multiplyScalar(-e/vi.z)}getViewSize(e,n){return this.getViewBounds(e,mf,gf),n.subVectors(gf,mf)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Oa*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const gr=-90,_r=1;class c0 extends It{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new tn(gr,_r,e,n);r.layers=this.layers,this.add(r);const s=new tn(gr,_r,e,n);s.layers=this.layers,this.add(s);const o=new tn(gr,_r,e,n);o.layers=this.layers,this.add(o);const a=new tn(gr,_r,e,n);a.layers=this.layers,this.add(a);const l=new tn(gr,_r,e,n);l.layers=this.layers,this.add(l);const c=new tn(gr,_r,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===ti)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Vo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(f,h,m),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class Hd extends jt{constructor(e,n,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:Br,super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class u0 extends Qi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Hd(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:vn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new er(5,5,5),s=new Ri({name:"CubemapFromEquirect",uniforms:zr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Yt,blending:Ei});s.uniforms.tEquirect.value=n;const o=new zt(r,s),a=n.minFilter;return n.minFilter===qi&&(n.minFilter=vn),new c0(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const rl=new F,f0=new F,h0=new Xe;class Gi{constructor(e=new F(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=rl.subVectors(i,n).cross(f0.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(rl),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||h0.getNormalMatrix(e),r=this.coplanarPoint(rl).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fi=new Kc,lo=new F;class Yc{constructor(e=new Gi,n=new Gi,i=new Gi,r=new Gi,s=new Gi,o=new Gi){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ti){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],m=r[8],v=r[9],S=r[10],d=r[11],p=r[12],b=r[13],y=r[14],E=r[15];if(i[0].setComponents(l-s,h-c,d-m,E-p).normalize(),i[1].setComponents(l+s,h+c,d+m,E+p).normalize(),i[2].setComponents(l+o,h+u,d+v,E+b).normalize(),i[3].setComponents(l-o,h-u,d-v,E-b).normalize(),i[4].setComponents(l-a,h-f,d-S,E-y).normalize(),n===ti)i[5].setComponents(l+a,h+f,d+S,E+y).normalize();else if(n===Vo)i[5].setComponents(a,f,S,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Fi.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fi)}intersectsSprite(e){return Fi.center.set(0,0,0),Fi.radius=.7071067811865476,Fi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fi)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(lo.x=r.normal.x>0?e.max.x:e.min.x,lo.y=r.normal.y>0?e.max.y:e.min.y,lo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(lo)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Gd(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function d0(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,u),a.onUploadCallback();let m;if(c instanceof Float32Array)m=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=t.SHORT;else if(c instanceof Uint32Array)m=t.UNSIGNED_INT;else if(c instanceof Int32Array)m=t.INT;else if(c instanceof Int8Array)m=t.BYTE;else if(c instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(t.bindBuffer(c,a),f.length===0)t.bufferSubData(c,0,u);else{f.sort((m,v)=>m.start-v.start);let h=0;for(let m=1;m<f.length;m++){const v=f[h],S=f[m];S.start<=v.start+v.count+1?v.count=Math.max(v.count,S.start+S.count-v.start):(++h,f[h]=S)}f.length=h+1;for(let m=0,v=f.length;m<v;m++){const S=f[m];t.bufferSubData(c,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class Ns extends ui{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,h=n/l,m=[],v=[],S=[],d=[];for(let p=0;p<u;p++){const b=p*h-o;for(let y=0;y<c;y++){const E=y*f-s;v.push(E,-b,0),S.push(0,0,1),d.push(y/a),d.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<a;b++){const y=b+c*p,E=b+c*(p+1),P=b+1+c*(p+1),C=b+1+c*p;m.push(y,E,C),m.push(E,P,C)}this.setIndex(m),this.setAttribute("position",new on(v,3)),this.setAttribute("normal",new on(S,3)),this.setAttribute("uv",new on(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ns(e.width,e.height,e.widthSegments,e.heightSegments)}}var p0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,m0=`#ifdef USE_ALPHAHASH
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
#endif`,g0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,v0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,x0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,S0=`#ifdef USE_AOMAP
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
#endif`,y0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,M0=`#ifdef USE_BATCHING
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
#endif`,E0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,T0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,b0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,A0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,w0=`#ifdef USE_IRIDESCENCE
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
#endif`,R0=`#ifdef USE_BUMPMAP
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
#endif`,C0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,P0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,L0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,D0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,I0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,U0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,N0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,O0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,F0=`#define PI 3.141592653589793
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
} // validated`,B0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,k0=`vec3 transformedNormal = objectNormal;
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
#endif`,H0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,G0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,z0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,V0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,W0="gl_FragColor = linearToOutputTexel( gl_FragColor );",X0=`
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
}`,q0=`#ifdef USE_ENVMAP
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
#endif`,$0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,K0=`#ifdef USE_ENVMAP
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
#endif`,Y0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,j0=`#ifdef USE_ENVMAP
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
#endif`,Z0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,J0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Q0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ev=`#ifdef USE_FOG
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
}`,nv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,iv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rv=`varying vec3 vViewPosition;
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
#endif`,ov=`#ifdef USE_ENVMAP
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
#endif`,av=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,uv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fv=`PhysicalMaterial material;
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
}`,dv=`
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
#endif`,pv=`#if defined( RE_IndirectDiffuse )
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
#endif`,mv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gv=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_v=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vv=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xv=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Sv=`#ifdef USE_MAP
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
#endif`,Ev=`#if defined( USE_POINTS_UV )
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
#endif`,Tv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Av=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Rv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cv=`#ifdef USE_MORPHTARGETS
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
#endif`,Pv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Dv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Uv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ov=`#ifdef USE_NORMALMAP
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
#endif`,Fv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Bv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,kv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Hv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
#endif`,Wv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$v=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Kv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Yv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
}`,Qv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ex=`#ifdef USE_SKINNING
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
#endif`,nx=`#ifdef USE_SKINNING
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
#endif`,ix=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ox=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ax=`#ifdef USE_TRANSMISSION
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
#endif`,lx=`#ifdef USE_TRANSMISSION
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
#endif`,cx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ux=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`;const dx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,px=`uniform sampler2D t2D;
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
}`,mx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,_x=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xx=`#include <common>
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
}`,Sx=`#if DEPTH_PACKING == 3200
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
}`,Ex=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Tx=`uniform sampler2D tEquirect;
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
}`,Ax=`uniform vec3 diffuse;
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
}`,wx=`#include <common>
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
}`,Rx=`uniform vec3 diffuse;
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
}`,Cx=`#define LAMBERT
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
}`,Px=`#define LAMBERT
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
}`,Lx=`#define MATCAP
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
}`,Dx=`#define MATCAP
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
}`,Ux=`#define NORMAL
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
}`,Nx=`#define PHONG
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
}`,Ox=`#define PHONG
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
}`,Fx=`#define STANDARD
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
}`,Bx=`#define STANDARD
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
}`,kx=`#define TOON
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
}`,Hx=`#define TOON
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
}`,Gx=`uniform float size;
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
}`,zx=`uniform vec3 diffuse;
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
}`,Wx=`uniform vec3 color;
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
}`,Xx=`uniform float rotation;
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
}`,qx=`uniform vec3 diffuse;
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
}`,We={alphahash_fragment:p0,alphahash_pars_fragment:m0,alphamap_fragment:g0,alphamap_pars_fragment:_0,alphatest_fragment:v0,alphatest_pars_fragment:x0,aomap_fragment:S0,aomap_pars_fragment:y0,batching_pars_vertex:M0,batching_vertex:E0,begin_vertex:T0,beginnormal_vertex:b0,bsdfs:A0,iridescence_fragment:w0,bumpmap_pars_fragment:R0,clipping_planes_fragment:C0,clipping_planes_pars_fragment:P0,clipping_planes_pars_vertex:L0,clipping_planes_vertex:D0,color_fragment:I0,color_pars_fragment:U0,color_pars_vertex:N0,color_vertex:O0,common:F0,cube_uv_reflection_fragment:B0,defaultnormal_vertex:k0,displacementmap_pars_vertex:H0,displacementmap_vertex:G0,emissivemap_fragment:z0,emissivemap_pars_fragment:V0,colorspace_fragment:W0,colorspace_pars_fragment:X0,envmap_fragment:q0,envmap_common_pars_fragment:$0,envmap_pars_fragment:K0,envmap_pars_vertex:Y0,envmap_physical_pars_fragment:ov,envmap_vertex:j0,fog_vertex:Z0,fog_pars_vertex:J0,fog_fragment:Q0,fog_pars_fragment:ev,gradientmap_pars_fragment:tv,lightmap_pars_fragment:nv,lights_lambert_fragment:iv,lights_lambert_pars_fragment:rv,lights_pars_begin:sv,lights_toon_fragment:av,lights_toon_pars_fragment:lv,lights_phong_fragment:cv,lights_phong_pars_fragment:uv,lights_physical_fragment:fv,lights_physical_pars_fragment:hv,lights_fragment_begin:dv,lights_fragment_maps:pv,lights_fragment_end:mv,logdepthbuf_fragment:gv,logdepthbuf_pars_fragment:_v,logdepthbuf_pars_vertex:vv,logdepthbuf_vertex:xv,map_fragment:Sv,map_pars_fragment:yv,map_particle_fragment:Mv,map_particle_pars_fragment:Ev,metalnessmap_fragment:Tv,metalnessmap_pars_fragment:bv,morphinstance_vertex:Av,morphcolor_vertex:wv,morphnormal_vertex:Rv,morphtarget_pars_vertex:Cv,morphtarget_vertex:Pv,normal_fragment_begin:Lv,normal_fragment_maps:Dv,normal_pars_fragment:Iv,normal_pars_vertex:Uv,normal_vertex:Nv,normalmap_pars_fragment:Ov,clearcoat_normal_fragment_begin:Fv,clearcoat_normal_fragment_maps:Bv,clearcoat_pars_fragment:kv,iridescence_pars_fragment:Hv,opaque_fragment:Gv,packing:zv,premultiplied_alpha_fragment:Vv,project_vertex:Wv,dithering_fragment:Xv,dithering_pars_fragment:qv,roughnessmap_fragment:$v,roughnessmap_pars_fragment:Kv,shadowmap_pars_fragment:Yv,shadowmap_pars_vertex:jv,shadowmap_vertex:Zv,shadowmask_pars_fragment:Jv,skinbase_vertex:Qv,skinning_pars_vertex:ex,skinning_vertex:tx,skinnormal_vertex:nx,specularmap_fragment:ix,specularmap_pars_fragment:rx,tonemapping_fragment:sx,tonemapping_pars_fragment:ox,transmission_fragment:ax,transmission_pars_fragment:lx,uv_pars_fragment:cx,uv_pars_vertex:ux,uv_vertex:fx,worldpos_vertex:hx,background_vert:dx,background_frag:px,backgroundCube_vert:mx,backgroundCube_frag:gx,cube_vert:_x,cube_frag:vx,depth_vert:xx,depth_frag:Sx,distanceRGBA_vert:yx,distanceRGBA_frag:Mx,equirect_vert:Ex,equirect_frag:Tx,linedashed_vert:bx,linedashed_frag:Ax,meshbasic_vert:wx,meshbasic_frag:Rx,meshlambert_vert:Cx,meshlambert_frag:Px,meshmatcap_vert:Lx,meshmatcap_frag:Dx,meshnormal_vert:Ix,meshnormal_frag:Ux,meshphong_vert:Nx,meshphong_frag:Ox,meshphysical_vert:Fx,meshphysical_frag:Bx,meshtoon_vert:kx,meshtoon_frag:Hx,points_vert:Gx,points_frag:zx,shadow_vert:Vx,shadow_frag:Wx,sprite_vert:Xx,sprite_frag:qx},me={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},In={basic:{uniforms:Ht([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:Ht([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Ke(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:Ht([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:Ht([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:Ht([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new Ke(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:Ht([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:Ht([me.points,me.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:Ht([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:Ht([me.common,me.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:Ht([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:Ht([me.sprite,me.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:Ht([me.common,me.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:Ht([me.lights,me.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};In.physical={uniforms:Ht([In.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const co={r:0,b:0,g:0},Bi=new Bn,$x=new gt;function Kx(t,e,n,i,r,s,o){const a=new Ke(0);let l=s===!0?0:1,c,u,f=null,h=0,m=null;function v(b){let y=b.isScene===!0?b.background:null;return y&&y.isTexture&&(y=(b.backgroundBlurriness>0?n:e).get(y)),y}function S(b){let y=!1;const E=v(b);E===null?p(a,l):E&&E.isColor&&(p(E,1),y=!0);const P=t.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function d(b,y){const E=v(y);E&&(E.isCubeTexture||E.mapping===da)?(u===void 0&&(u=new zt(new er(1,1,1),new Ri({name:"BackgroundCubeMaterial",uniforms:zr(In.backgroundCube.uniforms),vertexShader:In.backgroundCube.vertexShader,fragmentShader:In.backgroundCube.fragmentShader,side:Yt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,C,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Bi.copy(y.backgroundRotation),Bi.x*=-1,Bi.y*=-1,Bi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Bi.y*=-1,Bi.z*=-1),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4($x.makeRotationFromEuler(Bi)),u.material.toneMapped=nt.getTransfer(E.colorSpace)!==dt,(f!==E||h!==E.version||m!==t.toneMapping)&&(u.material.needsUpdate=!0,f=E,h=E.version,m=t.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new zt(new Ns(2,2),new Ri({name:"BackgroundMaterial",uniforms:zr(In.background.uniforms),vertexShader:In.background.vertexShader,fragmentShader:In.background.fragmentShader,side:wi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=nt.getTransfer(E.colorSpace)!==dt,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(f!==E||h!==E.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,f=E,h=E.version,m=t.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,y){b.getRGB(co,Bd(t)),i.buffers.color.setClear(co.r,co.g,co.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(b,y=1){a.set(b),l=y,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(a,l)},render:S,addToRenderList:d}}function Yx(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(x,T,$,K,Z){let se=!1;const z=f(K,$,T);s!==z&&(s=z,c(s.object)),se=m(x,K,$,Z),se&&v(x,K,$,Z),Z!==null&&e.update(Z,t.ELEMENT_ARRAY_BUFFER),(se||o)&&(o=!1,E(x,T,$,K),Z!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function l(){return t.createVertexArray()}function c(x){return t.bindVertexArray(x)}function u(x){return t.deleteVertexArray(x)}function f(x,T,$){const K=$.wireframe===!0;let Z=i[x.id];Z===void 0&&(Z={},i[x.id]=Z);let se=Z[T.id];se===void 0&&(se={},Z[T.id]=se);let z=se[K];return z===void 0&&(z=h(l()),se[K]=z),z}function h(x){const T=[],$=[],K=[];for(let Z=0;Z<n;Z++)T[Z]=0,$[Z]=0,K[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:$,attributeDivisors:K,object:x,attributes:{},index:null}}function m(x,T,$,K){const Z=s.attributes,se=T.attributes;let z=0;const Y=$.getAttributes();for(const k in Y)if(Y[k].location>=0){const ve=Z[k];let ye=se[k];if(ye===void 0&&(k==="instanceMatrix"&&x.instanceMatrix&&(ye=x.instanceMatrix),k==="instanceColor"&&x.instanceColor&&(ye=x.instanceColor)),ve===void 0||ve.attribute!==ye||ye&&ve.data!==ye.data)return!0;z++}return s.attributesNum!==z||s.index!==K}function v(x,T,$,K){const Z={},se=T.attributes;let z=0;const Y=$.getAttributes();for(const k in Y)if(Y[k].location>=0){let ve=se[k];ve===void 0&&(k==="instanceMatrix"&&x.instanceMatrix&&(ve=x.instanceMatrix),k==="instanceColor"&&x.instanceColor&&(ve=x.instanceColor));const ye={};ye.attribute=ve,ve&&ve.data&&(ye.data=ve.data),Z[k]=ye,z++}s.attributes=Z,s.attributesNum=z,s.index=K}function S(){const x=s.newAttributes;for(let T=0,$=x.length;T<$;T++)x[T]=0}function d(x){p(x,0)}function p(x,T){const $=s.newAttributes,K=s.enabledAttributes,Z=s.attributeDivisors;$[x]=1,K[x]===0&&(t.enableVertexAttribArray(x),K[x]=1),Z[x]!==T&&(t.vertexAttribDivisor(x,T),Z[x]=T)}function b(){const x=s.newAttributes,T=s.enabledAttributes;for(let $=0,K=T.length;$<K;$++)T[$]!==x[$]&&(t.disableVertexAttribArray($),T[$]=0)}function y(x,T,$,K,Z,se,z){z===!0?t.vertexAttribIPointer(x,T,$,Z,se):t.vertexAttribPointer(x,T,$,K,Z,se)}function E(x,T,$,K){S();const Z=K.attributes,se=$.getAttributes(),z=T.defaultAttributeValues;for(const Y in se){const k=se[Y];if(k.location>=0){let ge=Z[Y];if(ge===void 0&&(Y==="instanceMatrix"&&x.instanceMatrix&&(ge=x.instanceMatrix),Y==="instanceColor"&&x.instanceColor&&(ge=x.instanceColor)),ge!==void 0){const ve=ge.normalized,ye=ge.itemSize,Ge=e.get(ge);if(Ge===void 0)continue;const $e=Ge.buffer,ne=Ge.type,W=Ge.bytesPerElement,re=ne===t.INT||ne===t.UNSIGNED_INT||ge.gpuType===Gc;if(ge.isInterleavedBufferAttribute){const pe=ge.data,Ue=pe.stride,De=ge.offset;if(pe.isInstancedInterleavedBuffer){for(let Ve=0;Ve<k.locationSize;Ve++)p(k.location+Ve,pe.meshPerAttribute);x.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let Ve=0;Ve<k.locationSize;Ve++)d(k.location+Ve);t.bindBuffer(t.ARRAY_BUFFER,$e);for(let Ve=0;Ve<k.locationSize;Ve++)y(k.location+Ve,ye/k.locationSize,ne,ve,Ue*W,(De+ye/k.locationSize*Ve)*W,re)}else{if(ge.isInstancedBufferAttribute){for(let pe=0;pe<k.locationSize;pe++)p(k.location+pe,ge.meshPerAttribute);x.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let pe=0;pe<k.locationSize;pe++)d(k.location+pe);t.bindBuffer(t.ARRAY_BUFFER,$e);for(let pe=0;pe<k.locationSize;pe++)y(k.location+pe,ye/k.locationSize,ne,ve,ye*W,ye/k.locationSize*pe*W,re)}}else if(z!==void 0){const ve=z[Y];if(ve!==void 0)switch(ve.length){case 2:t.vertexAttrib2fv(k.location,ve);break;case 3:t.vertexAttrib3fv(k.location,ve);break;case 4:t.vertexAttrib4fv(k.location,ve);break;default:t.vertexAttrib1fv(k.location,ve)}}}}b()}function P(){D();for(const x in i){const T=i[x];for(const $ in T){const K=T[$];for(const Z in K)u(K[Z].object),delete K[Z];delete T[$]}delete i[x]}}function C(x){if(i[x.id]===void 0)return;const T=i[x.id];for(const $ in T){const K=T[$];for(const Z in K)u(K[Z].object),delete K[Z];delete T[$]}delete i[x.id]}function R(x){for(const T in i){const $=i[T];if($[x.id]===void 0)continue;const K=$[x.id];for(const Z in K)u(K[Z].object),delete K[Z];delete $[x.id]}}function D(){j(),o=!0,s!==r&&(s=r,c(s.object))}function j(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:D,resetDefaultState:j,dispose:P,releaseStatesOfGeometry:C,releaseStatesOfProgram:R,initAttributes:S,enableAttribute:d,disableUnusedAttributes:b}}function jx(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,f){f!==0&&(t.drawArraysInstanced(i,c,u,f),n.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let m=0;for(let v=0;v<f;v++)m+=u[v];n.update(m,i,1)}function l(c,u,f,h){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<c.length;v++)o(c[v],u[v],h[v]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let v=0;for(let S=0;S<f;S++)v+=u[S];for(let S=0;S<h.length;S++)n.update(v,i,h[S])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Zx(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==Sn&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const D=R===Ps&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==li&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==ei&&!D)}function l(R){if(R==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=n.logarithmicDepthBuffer===!0,h=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(h===!0){const R=e.get("EXT_clip_control");R.clipControlEXT(R.LOWER_LEFT_EXT,R.ZERO_TO_ONE_EXT)}const m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=t.getParameter(t.MAX_TEXTURE_SIZE),d=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),b=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),y=t.getParameter(t.MAX_VARYING_VECTORS),E=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),P=v>0,C=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:m,maxVertexTextures:v,maxTextureSize:S,maxCubemapSize:d,maxAttributes:p,maxVertexUniforms:b,maxVaryings:y,maxFragmentUniforms:E,vertexTextures:P,maxSamples:C}}function Jx(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Gi,a=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const m=f.length!==0||h||i!==0||r;return r=h,i=f.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){n=u(f,h,0)},this.setState=function(f,h,m){const v=f.clippingPlanes,S=f.clipIntersection,d=f.clipShadows,p=t.get(f);if(!r||v===null||v.length===0||s&&!d)s?u(null):c();else{const b=s?0:i,y=b*4;let E=p.clippingState||null;l.value=E,E=u(v,h,y,m);for(let P=0;P!==y;++P)E[P]=n[P];p.clippingState=E,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,m,v){const S=f!==null?f.length:0;let d=null;if(S!==0){if(d=l.value,v!==!0||d===null){const p=m+S*4,b=h.matrixWorldInverse;a.getNormalMatrix(b),(d===null||d.length<p)&&(d=new Float32Array(p));for(let y=0,E=m;y!==S;++y,E+=4)o.copy(f[y]).applyMatrix4(b,a),o.normal.toArray(d,E),d[E+3]=o.constant}l.value=d,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,d}}function Qx(t){let e=new WeakMap;function n(o,a){return a===kl?o.mapping=Br:a===Hl&&(o.mapping=kr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===kl||a===Hl)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new u0(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class zd extends kd{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Mr=4,_f=[.125,.215,.35,.446,.526,.582],Wi=20,sl=new zd,vf=new Ke;let ol=null,al=0,ll=0,cl=!1;const zi=(1+Math.sqrt(5))/2,vr=1/zi,xf=[new F(-zi,vr,0),new F(zi,vr,0),new F(-vr,0,zi),new F(vr,0,zi),new F(0,zi,-vr),new F(0,zi,vr),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)];class Sf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){ol=this._renderer.getRenderTarget(),al=this._renderer.getActiveCubeFace(),ll=this._renderer.getActiveMipmapLevel(),cl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ef(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ol,al,ll),this._renderer.xr.enabled=cl,e.scissorTest=!1,uo(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Br||e.mapping===kr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ol=this._renderer.getRenderTarget(),al=this._renderer.getActiveCubeFace(),ll=this._renderer.getActiveMipmapLevel(),cl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:vn,minFilter:vn,generateMipmaps:!1,type:Ps,format:Sn,colorSpace:Ci,depthBuffer:!1},r=yf(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yf(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=eS(s)),this._blurMaterial=tS(s,e,n)}return r}_compileMaterial(e){const n=new zt(this._lodPlanes[0],e);this._renderer.compile(n,sl)}_sceneToCubeUV(e,n,i,r){const a=new tn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(vf),u.toneMapping=Ti,u.autoClear=!1;const m=new Xo({name:"PMREM.Background",side:Yt,depthWrite:!1,depthTest:!1}),v=new zt(new er,m);let S=!1;const d=e.background;d?d.isColor&&(m.color.copy(d),e.background=null,S=!0):(m.color.copy(vf),S=!0);for(let p=0;p<6;p++){const b=p%3;b===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):b===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const y=this._cubeSize;uo(r,b*y,p>2?y:0,y,y),u.setRenderTarget(r),S&&u.render(v,a),u.render(e,a)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=d}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Br||e.mapping===kr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ef()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mf());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new zt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;uo(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,sl)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=xf[(r-s-1)%xf.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new zt(this._lodPlanes[r],c),h=c.uniforms,m=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Wi-1),S=s/v,d=isFinite(s)?1+Math.floor(u*S):Wi;d>Wi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${Wi}`);const p=[];let b=0;for(let R=0;R<Wi;++R){const D=R/S,j=Math.exp(-D*D/2);p.push(j),R===0?b+=j:R<d&&(b+=2*j)}for(let R=0;R<p.length;R++)p[R]=p[R]/b;h.envMap.value=e.texture,h.samples.value=d,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:y}=this;h.dTheta.value=v,h.mipInt.value=y-i;const E=this._sizeLods[r],P=3*E*(r>y-Mr?r-y+Mr:0),C=4*(this._cubeSize-E);uo(n,P,C,3*E,2*E),l.setRenderTarget(n),l.render(f,sl)}}function eS(t){const e=[],n=[],i=[];let r=t;const s=t-Mr+1+_f.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Mr?l=_f[o-t+Mr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,v=6,S=3,d=2,p=1,b=new Float32Array(S*v*m),y=new Float32Array(d*v*m),E=new Float32Array(p*v*m);for(let C=0;C<m;C++){const R=C%3*2/3-1,D=C>2?0:-1,j=[R,D,0,R+2/3,D,0,R+2/3,D+1,0,R,D,0,R+2/3,D+1,0,R,D+1,0];b.set(j,S*v*C),y.set(h,d*v*C);const x=[C,C,C,C,C,C];E.set(x,p*v*C)}const P=new ui;P.setAttribute("position",new Fn(b,S)),P.setAttribute("uv",new Fn(y,d)),P.setAttribute("faceIndex",new Fn(E,p)),e.push(P),r>Mr&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function yf(t,e,n){const i=new Qi(t,e,n);return i.texture.mapping=da,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function uo(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function tS(t,e,n){const i=new Float32Array(Wi),r=new F(0,1,0);return new Ri({name:"SphericalGaussianBlur",defines:{n:Wi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:jc(),fragmentShader:`

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
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function Mf(){return new Ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jc(),fragmentShader:`

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
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function Ef(){return new Ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function jc(){return`

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
	`}function nS(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===kl||l===Hl,u=l===Br||l===kr;if(c||u){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return n===null&&(n=new Sf(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const m=a.image;return c&&m&&m.height>0||u&&m&&r(m)?(n===null&&(n=new Sf(t)),f=c?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function iS(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&bo("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function rS(t,e,n,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);for(const v in h.morphAttributes){const S=h.morphAttributes[v];for(let d=0,p=S.length;d<p;d++)e.remove(S[d])}h.removeEventListener("dispose",o),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const v in h)e.update(h[v],t.ARRAY_BUFFER);const m=f.morphAttributes;for(const v in m){const S=m[v];for(let d=0,p=S.length;d<p;d++)e.update(S[d],t.ARRAY_BUFFER)}}function c(f){const h=[],m=f.index,v=f.attributes.position;let S=0;if(m!==null){const b=m.array;S=m.version;for(let y=0,E=b.length;y<E;y+=3){const P=b[y+0],C=b[y+1],R=b[y+2];h.push(P,C,C,R,R,P)}}else if(v!==void 0){const b=v.array;S=v.version;for(let y=0,E=b.length/3-1;y<E;y+=3){const P=y+0,C=y+1,R=y+2;h.push(P,C,C,R,R,P)}}else return;const d=new(Ld(h)?Fd:Od)(h,1);d.version=S;const p=s.get(f);p&&e.remove(p),s.set(f,d)}function u(f){const h=s.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function sS(t,e,n){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,m){t.drawElements(i,m,s,h*o),n.update(m,i,1)}function c(h,m,v){v!==0&&(t.drawElementsInstanced(i,m,s,h*o,v),n.update(m,i,v))}function u(h,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,h,0,v);let d=0;for(let p=0;p<v;p++)d+=m[p];n.update(d,i,1)}function f(h,m,v,S){if(v===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<h.length;p++)c(h[p]/o,m[p],S[p]);else{d.multiDrawElementsInstancedWEBGL(i,m,0,s,h,0,S,0,v);let p=0;for(let b=0;b<v;b++)p+=m[b];for(let b=0;b<S.length;b++)n.update(p,i,S[b])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function oS(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function aS(t,e,n){const i=new WeakMap,r=new ot;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let x=function(){D.dispose(),i.delete(a),a.removeEventListener("dispose",x)};var m=x;h!==void 0&&h.texture.dispose();const v=a.morphAttributes.position!==void 0,S=a.morphAttributes.normal!==void 0,d=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let E=0;v===!0&&(E=1),S===!0&&(E=2),d===!0&&(E=3);let P=a.attributes.position.count*E,C=1;P>e.maxTextureSize&&(C=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const R=new Float32Array(P*C*4*f),D=new Id(R,P,C,f);D.type=ei,D.needsUpdate=!0;const j=E*4;for(let T=0;T<f;T++){const $=p[T],K=b[T],Z=y[T],se=P*C*4*T;for(let z=0;z<$.count;z++){const Y=z*j;v===!0&&(r.fromBufferAttribute($,z),R[se+Y+0]=r.x,R[se+Y+1]=r.y,R[se+Y+2]=r.z,R[se+Y+3]=0),S===!0&&(r.fromBufferAttribute(K,z),R[se+Y+4]=r.x,R[se+Y+5]=r.y,R[se+Y+6]=r.z,R[se+Y+7]=0),d===!0&&(r.fromBufferAttribute(Z,z),R[se+Y+8]=r.x,R[se+Y+9]=r.y,R[se+Y+10]=r.z,R[se+Y+11]=Z.itemSize===4?r.w:1)}}h={count:f,texture:D,size:new qe(P,C)},i.set(a,h),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let v=0;for(let d=0;d<c.length;d++)v+=c[d];const S=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(t,"morphTargetBaseInfluence",S),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function lS(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class Vd extends jt{constructor(e,n,i,r,s,o,a,l,c,u=Lr){if(u!==Lr&&u!==Gr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Lr&&(i=Ji),i===void 0&&u===Gr&&(i=Hr),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:fn,this.minFilter=l!==void 0?l:fn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Wd=new jt,Tf=new Vd(1,1),Xd=new Id,qd=new $_,$d=new Hd,bf=[],Af=[],wf=new Float32Array(16),Rf=new Float32Array(9),Cf=new Float32Array(4);function qr(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=bf[r];if(s===void 0&&(s=new Float32Array(r),bf[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function bt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function At(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function ma(t,e){let n=Af[e];n===void 0&&(n=new Int32Array(e),Af[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function cS(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function uS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(bt(n,e))return;t.uniform2fv(this.addr,e),At(n,e)}}function fS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(bt(n,e))return;t.uniform3fv(this.addr,e),At(n,e)}}function hS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(bt(n,e))return;t.uniform4fv(this.addr,e),At(n,e)}}function dS(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(bt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),At(n,e)}else{if(bt(n,i))return;Cf.set(i),t.uniformMatrix2fv(this.addr,!1,Cf),At(n,i)}}function pS(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(bt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),At(n,e)}else{if(bt(n,i))return;Rf.set(i),t.uniformMatrix3fv(this.addr,!1,Rf),At(n,i)}}function mS(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(bt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),At(n,e)}else{if(bt(n,i))return;wf.set(i),t.uniformMatrix4fv(this.addr,!1,wf),At(n,i)}}function gS(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function _S(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(bt(n,e))return;t.uniform2iv(this.addr,e),At(n,e)}}function vS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(bt(n,e))return;t.uniform3iv(this.addr,e),At(n,e)}}function xS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(bt(n,e))return;t.uniform4iv(this.addr,e),At(n,e)}}function SS(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function yS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(bt(n,e))return;t.uniform2uiv(this.addr,e),At(n,e)}}function MS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(bt(n,e))return;t.uniform3uiv(this.addr,e),At(n,e)}}function ES(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(bt(n,e))return;t.uniform4uiv(this.addr,e),At(n,e)}}function TS(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Tf.compareFunction=Pd,s=Tf):s=Wd,n.setTexture2D(e||s,r)}function bS(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||qd,r)}function AS(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||$d,r)}function wS(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Xd,r)}function RS(t){switch(t){case 5126:return cS;case 35664:return uS;case 35665:return fS;case 35666:return hS;case 35674:return dS;case 35675:return pS;case 35676:return mS;case 5124:case 35670:return gS;case 35667:case 35671:return _S;case 35668:case 35672:return vS;case 35669:case 35673:return xS;case 5125:return SS;case 36294:return yS;case 36295:return MS;case 36296:return ES;case 35678:case 36198:case 36298:case 36306:case 35682:return TS;case 35679:case 36299:case 36307:return bS;case 35680:case 36300:case 36308:case 36293:return AS;case 36289:case 36303:case 36311:case 36292:return wS}}function CS(t,e){t.uniform1fv(this.addr,e)}function PS(t,e){const n=qr(e,this.size,2);t.uniform2fv(this.addr,n)}function LS(t,e){const n=qr(e,this.size,3);t.uniform3fv(this.addr,n)}function DS(t,e){const n=qr(e,this.size,4);t.uniform4fv(this.addr,n)}function IS(t,e){const n=qr(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function US(t,e){const n=qr(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function NS(t,e){const n=qr(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function OS(t,e){t.uniform1iv(this.addr,e)}function FS(t,e){t.uniform2iv(this.addr,e)}function BS(t,e){t.uniform3iv(this.addr,e)}function kS(t,e){t.uniform4iv(this.addr,e)}function HS(t,e){t.uniform1uiv(this.addr,e)}function GS(t,e){t.uniform2uiv(this.addr,e)}function zS(t,e){t.uniform3uiv(this.addr,e)}function VS(t,e){t.uniform4uiv(this.addr,e)}function WS(t,e,n){const i=this.cache,r=e.length,s=ma(n,r);bt(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Wd,s[o])}function XS(t,e,n){const i=this.cache,r=e.length,s=ma(n,r);bt(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||qd,s[o])}function qS(t,e,n){const i=this.cache,r=e.length,s=ma(n,r);bt(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||$d,s[o])}function $S(t,e,n){const i=this.cache,r=e.length,s=ma(n,r);bt(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Xd,s[o])}function KS(t){switch(t){case 5126:return CS;case 35664:return PS;case 35665:return LS;case 35666:return DS;case 35674:return IS;case 35675:return US;case 35676:return NS;case 5124:case 35670:return OS;case 35667:case 35671:return FS;case 35668:case 35672:return BS;case 35669:case 35673:return kS;case 5125:return HS;case 36294:return GS;case 36295:return zS;case 36296:return VS;case 35678:case 36198:case 36298:case 36306:case 35682:return WS;case 35679:case 36299:case 36307:return XS;case 35680:case 36300:case 36308:case 36293:return qS;case 36289:case 36303:case 36311:case 36292:return $S}}class YS{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=RS(n.type)}}class jS{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=KS(n.type)}}class ZS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const ul=/(\w+)(\])?(\[|\.)?/g;function Pf(t,e){t.seq.push(e),t.map[e.id]=e}function JS(t,e,n){const i=t.name,r=i.length;for(ul.lastIndex=0;;){const s=ul.exec(i),o=ul.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Pf(n,c===void 0?new YS(a,t,e):new jS(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new ZS(a),Pf(n,f)),n=f}}}class Ao{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);JS(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Lf(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const QS=37297;let ey=0;function ty(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function ny(t){const e=nt.getPrimaries(nt.workingColorSpace),n=nt.getPrimaries(t);let i;switch(e===n?i="":e===zo&&n===Go?i="LinearDisplayP3ToLinearSRGB":e===Go&&n===zo&&(i="LinearSRGBToLinearDisplayP3"),t){case Ci:case pa:return[i,"LinearTransferOETF"];case _n:case $c:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Df(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+ty(t.getShaderSource(e),o)}else return r}function iy(t,e){const n=ny(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function ry(t,e){let n;switch(e){case x_:n="Linear";break;case S_:n="Reinhard";break;case y_:n="Cineon";break;case M_:n="ACESFilmic";break;case T_:n="AgX";break;case b_:n="Neutral";break;case E_:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const fo=new F;function sy(){nt.getLuminanceCoefficients(fo);const t=fo.x.toFixed(4),e=fo.y.toFixed(4),n=fo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function oy(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ss).join(`
`)}function ay(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function ly(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function ss(t){return t!==""}function If(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Uf(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const cy=/^[ \t]*#include +<([\w\d./]+)>/gm;function gc(t){return t.replace(cy,fy)}const uy=new Map;function fy(t,e){let n=We[e];if(n===void 0){const i=uy.get(e);if(i!==void 0)n=We[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return gc(n)}const hy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nf(t){return t.replace(hy,dy)}function dy(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Of(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function py(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===gd?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Jg?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===$n&&(e="SHADOWMAP_TYPE_VSM"),e}function my(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Br:case kr:e="ENVMAP_TYPE_CUBE";break;case da:e="ENVMAP_TYPE_CUBE_UV";break}return e}function gy(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case kr:e="ENVMAP_MODE_REFRACTION";break}return e}function _y(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case _d:e="ENVMAP_BLENDING_MULTIPLY";break;case __:e="ENVMAP_BLENDING_MIX";break;case v_:e="ENVMAP_BLENDING_ADD";break}return e}function vy(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function xy(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=py(n),c=my(n),u=gy(n),f=_y(n),h=vy(n),m=oy(n),v=ay(s),S=r.createProgram();let d,p,b=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(ss).join(`
`),d.length>0&&(d+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(ss).join(`
`),p.length>0&&(p+=`
`)):(d=[Of(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ss).join(`
`),p=[Of(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ti?"#define TONE_MAPPING":"",n.toneMapping!==Ti?We.tonemapping_pars_fragment:"",n.toneMapping!==Ti?ry("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,iy("linearToOutputTexel",n.outputColorSpace),sy(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ss).join(`
`)),o=gc(o),o=If(o,n),o=Uf(o,n),a=gc(a),a=If(a,n),a=Uf(a,n),o=Nf(o),a=Nf(a),n.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,d=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,p=["#define varying in",n.glslVersion===Ju?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Ju?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=b+d+o,E=b+p+a,P=Lf(r,r.VERTEX_SHADER,y),C=Lf(r,r.FRAGMENT_SHADER,E);r.attachShader(S,P),r.attachShader(S,C),n.index0AttributeName!==void 0?r.bindAttribLocation(S,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function R(T){if(t.debug.checkShaderErrors){const $=r.getProgramInfoLog(S).trim(),K=r.getShaderInfoLog(P).trim(),Z=r.getShaderInfoLog(C).trim();let se=!0,z=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(se=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,S,P,C);else{const Y=Df(r,P,"vertex"),k=Df(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+$+`
`+Y+`
`+k)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(K===""||Z==="")&&(z=!1);z&&(T.diagnostics={runnable:se,programLog:$,vertexShader:{log:K,prefix:d},fragmentShader:{log:Z,prefix:p}})}r.deleteShader(P),r.deleteShader(C),D=new Ao(r,S),j=ly(r,S)}let D;this.getUniforms=function(){return D===void 0&&R(this),D};let j;this.getAttributes=function(){return j===void 0&&R(this),j};let x=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(S,QS)),x},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=ey++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=P,this.fragmentShader=C,this}let Sy=0;class yy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new My(e),n.set(e,i)),i}}class My{constructor(e){this.id=Sy++,this.code=e,this.usedTimes=0}}function Ey(t,e,n,i,r,s,o){const a=new Ud,l=new yy,c=new Set,u=[],f=r.logarithmicDepthBuffer,h=r.reverseDepthBuffer,m=r.vertexTextures;let v=r.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(x){return c.add(x),x===0?"uv":`uv${x}`}function p(x,T,$,K,Z){const se=K.fog,z=Z.geometry,Y=x.isMeshStandardMaterial?K.environment:null,k=(x.isMeshStandardMaterial?n:e).get(x.envMap||Y),ge=k&&k.mapping===da?k.image.height:null,ve=S[x.type];x.precision!==null&&(v=r.getMaxPrecision(x.precision),v!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",v,"instead."));const ye=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Ge=ye!==void 0?ye.length:0;let $e=0;z.morphAttributes.position!==void 0&&($e=1),z.morphAttributes.normal!==void 0&&($e=2),z.morphAttributes.color!==void 0&&($e=3);let ne,W,re,pe;if(ve){const Xt=In[ve];ne=Xt.vertexShader,W=Xt.fragmentShader}else ne=x.vertexShader,W=x.fragmentShader,l.update(x),re=l.getVertexShaderID(x),pe=l.getFragmentShaderID(x);const Ue=t.getRenderTarget(),De=Z.isInstancedMesh===!0,Ve=Z.isBatchedMesh===!0,je=!!x.map,w=!!x.matcap,_=!!k,X=!!x.aoMap,Q=!!x.lightMap,J=!!x.bumpMap,H=!!x.normalMap,le=!!x.displacementMap,te=!!x.emissiveMap,M=!!x.metalnessMap,g=!!x.roughnessMap,L=x.anisotropy>0,U=x.clearcoat>0,G=x.dispersion>0,B=x.iridescence>0,he=x.sheen>0,ce=x.transmission>0,fe=L&&!!x.anisotropyMap,Pe=U&&!!x.clearcoatMap,ae=U&&!!x.clearcoatNormalMap,_e=U&&!!x.clearcoatRoughnessMap,we=B&&!!x.iridescenceMap,Ie=B&&!!x.iridescenceThicknessMap,Te=he&&!!x.sheenColorMap,Oe=he&&!!x.sheenRoughnessMap,Le=!!x.specularMap,it=!!x.specularColorMap,I=!!x.specularIntensityMap,Me=ce&&!!x.transmissionMap,ee=ce&&!!x.thicknessMap,oe=!!x.gradientMap,xe=!!x.alphaMap,Ee=x.alphaTest>0,Ye=!!x.alphaHash,yt=!!x.extensions;let Wt=Ti;x.toneMapped&&(Ue===null||Ue.isXRRenderTarget===!0)&&(Wt=t.toneMapping);const Je={shaderID:ve,shaderType:x.type,shaderName:x.name,vertexShader:ne,fragmentShader:W,defines:x.defines,customVertexShaderID:re,customFragmentShaderID:pe,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:v,batching:Ve,batchingColor:Ve&&Z._colorsTexture!==null,instancing:De,instancingColor:De&&Z.instanceColor!==null,instancingMorph:De&&Z.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:Ue===null?t.outputColorSpace:Ue.isXRRenderTarget===!0?Ue.texture.colorSpace:Ci,alphaToCoverage:!!x.alphaToCoverage,map:je,matcap:w,envMap:_,envMapMode:_&&k.mapping,envMapCubeUVHeight:ge,aoMap:X,lightMap:Q,bumpMap:J,normalMap:H,displacementMap:m&&le,emissiveMap:te,normalMapObjectSpace:H&&x.normalMapType===C_,normalMapTangentSpace:H&&x.normalMapType===Cd,metalnessMap:M,roughnessMap:g,anisotropy:L,anisotropyMap:fe,clearcoat:U,clearcoatMap:Pe,clearcoatNormalMap:ae,clearcoatRoughnessMap:_e,dispersion:G,iridescence:B,iridescenceMap:we,iridescenceThicknessMap:Ie,sheen:he,sheenColorMap:Te,sheenRoughnessMap:Oe,specularMap:Le,specularColorMap:it,specularIntensityMap:I,transmission:ce,transmissionMap:Me,thicknessMap:ee,gradientMap:oe,opaque:x.transparent===!1&&x.blending===Pr&&x.alphaToCoverage===!1,alphaMap:xe,alphaTest:Ee,alphaHash:Ye,combine:x.combine,mapUv:je&&d(x.map.channel),aoMapUv:X&&d(x.aoMap.channel),lightMapUv:Q&&d(x.lightMap.channel),bumpMapUv:J&&d(x.bumpMap.channel),normalMapUv:H&&d(x.normalMap.channel),displacementMapUv:le&&d(x.displacementMap.channel),emissiveMapUv:te&&d(x.emissiveMap.channel),metalnessMapUv:M&&d(x.metalnessMap.channel),roughnessMapUv:g&&d(x.roughnessMap.channel),anisotropyMapUv:fe&&d(x.anisotropyMap.channel),clearcoatMapUv:Pe&&d(x.clearcoatMap.channel),clearcoatNormalMapUv:ae&&d(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&d(x.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&d(x.iridescenceMap.channel),iridescenceThicknessMapUv:Ie&&d(x.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&d(x.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&d(x.sheenRoughnessMap.channel),specularMapUv:Le&&d(x.specularMap.channel),specularColorMapUv:it&&d(x.specularColorMap.channel),specularIntensityMapUv:I&&d(x.specularIntensityMap.channel),transmissionMapUv:Me&&d(x.transmissionMap.channel),thicknessMapUv:ee&&d(x.thicknessMap.channel),alphaMapUv:xe&&d(x.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(H||L),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!z.attributes.uv&&(je||xe),fog:!!se,useFog:x.fog===!0,fogExp2:!!se&&se.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:h,skinning:Z.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Ge,morphTextureStride:$e,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&$.length>0,shadowMapType:t.shadowMap.type,toneMapping:Wt,decodeVideoTexture:je&&x.map.isVideoTexture===!0&&nt.getTransfer(x.map.colorSpace)===dt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Nn,flipSided:x.side===Yt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:yt&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(yt&&x.extensions.multiDraw===!0||Ve)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Je.vertexUv1s=c.has(1),Je.vertexUv2s=c.has(2),Je.vertexUv3s=c.has(3),c.clear(),Je}function b(x){const T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(const $ in x.defines)T.push($),T.push(x.defines[$]);return x.isRawShaderMaterial===!1&&(y(T,x),E(T,x),T.push(t.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function y(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function E(x,T){a.disableAll(),T.supportsVertexTextures&&a.enable(0),T.instancing&&a.enable(1),T.instancingColor&&a.enable(2),T.instancingMorph&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),T.dispersion&&a.enable(20),T.batchingColor&&a.enable(21),x.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reverseDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.alphaToCoverage&&a.enable(20),x.push(a.mask)}function P(x){const T=S[x.type];let $;if(T){const K=In[T];$=o0.clone(K.uniforms)}else $=x.uniforms;return $}function C(x,T){let $;for(let K=0,Z=u.length;K<Z;K++){const se=u[K];if(se.cacheKey===T){$=se,++$.usedTimes;break}}return $===void 0&&($=new xy(t,T,x,s),u.push($)),$}function R(x){if(--x.usedTimes===0){const T=u.indexOf(x);u[T]=u[u.length-1],u.pop(),x.destroy()}}function D(x){l.remove(x)}function j(){l.dispose()}return{getParameters:p,getProgramCacheKey:b,getUniforms:P,acquireProgram:C,releaseProgram:R,releaseShaderCache:D,programs:u,dispose:j}}function Ty(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function by(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Ff(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Bf(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,h,m,v,S,d){let p=t[e];return p===void 0?(p={id:f.id,object:f,geometry:h,material:m,groupOrder:v,renderOrder:f.renderOrder,z:S,group:d},t[e]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=m,p.groupOrder=v,p.renderOrder=f.renderOrder,p.z=S,p.group=d),e++,p}function a(f,h,m,v,S,d){const p=o(f,h,m,v,S,d);m.transmission>0?i.push(p):m.transparent===!0?r.push(p):n.push(p)}function l(f,h,m,v,S,d){const p=o(f,h,m,v,S,d);m.transmission>0?i.unshift(p):m.transparent===!0?r.unshift(p):n.unshift(p)}function c(f,h){n.length>1&&n.sort(f||by),i.length>1&&i.sort(h||Ff),r.length>1&&r.sort(h||Ff)}function u(){for(let f=e,h=t.length;f<h;f++){const m=t[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function Ay(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Bf,t.set(i,[o])):r>=s.length?(o=new Bf,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function wy(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new F,color:new Ke};break;case"SpotLight":n={position:new F,direction:new F,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new F,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":n={direction:new F,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":n={color:new Ke,position:new F,halfWidth:new F,halfHeight:new F};break}return t[e.id]=n,n}}}function Ry(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let Cy=0;function Py(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function Ly(t){const e=new wy,n=Ry(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new F);const r=new F,s=new gt,o=new gt;function a(c){let u=0,f=0,h=0;for(let j=0;j<9;j++)i.probe[j].set(0,0,0);let m=0,v=0,S=0,d=0,p=0,b=0,y=0,E=0,P=0,C=0,R=0;c.sort(Py);for(let j=0,x=c.length;j<x;j++){const T=c[j],$=T.color,K=T.intensity,Z=T.distance,se=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)u+=$.r*K,f+=$.g*K,h+=$.b*K;else if(T.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(T.sh.coefficients[z],K);R++}else if(T.isDirectionalLight){const z=e.get(T);if(z.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const Y=T.shadow,k=n.get(T);k.shadowIntensity=Y.intensity,k.shadowBias=Y.bias,k.shadowNormalBias=Y.normalBias,k.shadowRadius=Y.radius,k.shadowMapSize=Y.mapSize,i.directionalShadow[m]=k,i.directionalShadowMap[m]=se,i.directionalShadowMatrix[m]=T.shadow.matrix,b++}i.directional[m]=z,m++}else if(T.isSpotLight){const z=e.get(T);z.position.setFromMatrixPosition(T.matrixWorld),z.color.copy($).multiplyScalar(K),z.distance=Z,z.coneCos=Math.cos(T.angle),z.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),z.decay=T.decay,i.spot[S]=z;const Y=T.shadow;if(T.map&&(i.spotLightMap[P]=T.map,P++,Y.updateMatrices(T),T.castShadow&&C++),i.spotLightMatrix[S]=Y.matrix,T.castShadow){const k=n.get(T);k.shadowIntensity=Y.intensity,k.shadowBias=Y.bias,k.shadowNormalBias=Y.normalBias,k.shadowRadius=Y.radius,k.shadowMapSize=Y.mapSize,i.spotShadow[S]=k,i.spotShadowMap[S]=se,E++}S++}else if(T.isRectAreaLight){const z=e.get(T);z.color.copy($).multiplyScalar(K),z.halfWidth.set(T.width*.5,0,0),z.halfHeight.set(0,T.height*.5,0),i.rectArea[d]=z,d++}else if(T.isPointLight){const z=e.get(T);if(z.color.copy(T.color).multiplyScalar(T.intensity),z.distance=T.distance,z.decay=T.decay,T.castShadow){const Y=T.shadow,k=n.get(T);k.shadowIntensity=Y.intensity,k.shadowBias=Y.bias,k.shadowNormalBias=Y.normalBias,k.shadowRadius=Y.radius,k.shadowMapSize=Y.mapSize,k.shadowCameraNear=Y.camera.near,k.shadowCameraFar=Y.camera.far,i.pointShadow[v]=k,i.pointShadowMap[v]=se,i.pointShadowMatrix[v]=T.shadow.matrix,y++}i.point[v]=z,v++}else if(T.isHemisphereLight){const z=e.get(T);z.skyColor.copy(T.color).multiplyScalar(K),z.groundColor.copy(T.groundColor).multiplyScalar(K),i.hemi[p]=z,p++}}d>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=me.LTC_FLOAT_1,i.rectAreaLTC2=me.LTC_FLOAT_2):(i.rectAreaLTC1=me.LTC_HALF_1,i.rectAreaLTC2=me.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const D=i.hash;(D.directionalLength!==m||D.pointLength!==v||D.spotLength!==S||D.rectAreaLength!==d||D.hemiLength!==p||D.numDirectionalShadows!==b||D.numPointShadows!==y||D.numSpotShadows!==E||D.numSpotMaps!==P||D.numLightProbes!==R)&&(i.directional.length=m,i.spot.length=S,i.rectArea.length=d,i.point.length=v,i.hemi.length=p,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=E+P-C,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=R,D.directionalLength=m,D.pointLength=v,D.spotLength=S,D.rectAreaLength=d,D.hemiLength=p,D.numDirectionalShadows=b,D.numPointShadows=y,D.numSpotShadows=E,D.numSpotMaps=P,D.numLightProbes=R,i.version=Cy++)}function l(c,u){let f=0,h=0,m=0,v=0,S=0;const d=u.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){const y=c[p];if(y.isDirectionalLight){const E=i.directional[f];E.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(d),f++}else if(y.isSpotLight){const E=i.spot[m];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(d),E.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(d),m++}else if(y.isRectAreaLight){const E=i.rectArea[v];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(d),o.identity(),s.copy(y.matrixWorld),s.premultiply(d),o.extractRotation(s),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),v++}else if(y.isPointLight){const E=i.point[h];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(d),h++}else if(y.isHemisphereLight){const E=i.hemi[S];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(d),S++}}}return{setup:a,setupView:l,state:i}}function kf(t){const e=new Ly(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Dy(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new kf(t),e.set(r,[a])):s>=o.length?(a=new kf(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class Iy extends Us{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=w_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Uy extends Us{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ny=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Oy=`uniform sampler2D shadow_pass;
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
}`;function Fy(t,e,n){let i=new Yc;const r=new qe,s=new qe,o=new ot,a=new Iy({depthPacking:R_}),l=new Uy,c={},u=n.maxTextureSize,f={[wi]:Yt,[Yt]:wi,[Nn]:Nn},h=new Ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:Ny,fragmentShader:Oy}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const v=new ui;v.setAttribute("position",new Fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new zt(v,h),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gd;let p=this.type;this.render=function(C,R,D){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||C.length===0)return;const j=t.getRenderTarget(),x=t.getActiveCubeFace(),T=t.getActiveMipmapLevel(),$=t.state;$.setBlending(Ei),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const K=p!==$n&&this.type===$n,Z=p===$n&&this.type!==$n;for(let se=0,z=C.length;se<z;se++){const Y=C[se],k=Y.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const ge=k.getFrameExtents();if(r.multiply(ge),s.copy(k.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ge.x),r.x=s.x*ge.x,k.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ge.y),r.y=s.y*ge.y,k.mapSize.y=s.y)),k.map===null||K===!0||Z===!0){const ye=this.type!==$n?{minFilter:fn,magFilter:fn}:{};k.map!==null&&k.map.dispose(),k.map=new Qi(r.x,r.y,ye),k.map.texture.name=Y.name+".shadowMap",k.camera.updateProjectionMatrix()}t.setRenderTarget(k.map),t.clear();const ve=k.getViewportCount();for(let ye=0;ye<ve;ye++){const Ge=k.getViewport(ye);o.set(s.x*Ge.x,s.y*Ge.y,s.x*Ge.z,s.y*Ge.w),$.viewport(o),k.updateMatrices(Y,ye),i=k.getFrustum(),E(R,D,k.camera,Y,this.type)}k.isPointLightShadow!==!0&&this.type===$n&&b(k,D),k.needsUpdate=!1}p=this.type,d.needsUpdate=!1,t.setRenderTarget(j,x,T)};function b(C,R){const D=e.update(S);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Qi(r.x,r.y)),h.uniforms.shadow_pass.value=C.map.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(R,null,D,h,S,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(R,null,D,m,S,null)}function y(C,R,D,j){let x=null;const T=D.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(T!==void 0)x=T;else if(x=D.isPointLight===!0?l:a,t.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const $=x.uuid,K=R.uuid;let Z=c[$];Z===void 0&&(Z={},c[$]=Z);let se=Z[K];se===void 0&&(se=x.clone(),Z[K]=se,R.addEventListener("dispose",P)),x=se}if(x.visible=R.visible,x.wireframe=R.wireframe,j===$n?x.side=R.shadowSide!==null?R.shadowSide:R.side:x.side=R.shadowSide!==null?R.shadowSide:f[R.side],x.alphaMap=R.alphaMap,x.alphaTest=R.alphaTest,x.map=R.map,x.clipShadows=R.clipShadows,x.clippingPlanes=R.clippingPlanes,x.clipIntersection=R.clipIntersection,x.displacementMap=R.displacementMap,x.displacementScale=R.displacementScale,x.displacementBias=R.displacementBias,x.wireframeLinewidth=R.wireframeLinewidth,x.linewidth=R.linewidth,D.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const $=t.properties.get(x);$.light=D}return x}function E(C,R,D,j,x){if(C.visible===!1)return;if(C.layers.test(R.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&x===$n)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,C.matrixWorld);const K=e.update(C),Z=C.material;if(Array.isArray(Z)){const se=K.groups;for(let z=0,Y=se.length;z<Y;z++){const k=se[z],ge=Z[k.materialIndex];if(ge&&ge.visible){const ve=y(C,ge,j,x);C.onBeforeShadow(t,C,R,D,K,ve,k),t.renderBufferDirect(D,null,K,ve,C,k),C.onAfterShadow(t,C,R,D,K,ve,k)}}}else if(Z.visible){const se=y(C,Z,j,x);C.onBeforeShadow(t,C,R,D,K,se,null),t.renderBufferDirect(D,null,K,se,C,null),C.onAfterShadow(t,C,R,D,K,se,null)}}const $=C.children;for(let K=0,Z=$.length;K<Z;K++)E($[K],R,D,j,x)}function P(C){C.target.removeEventListener("dispose",P);for(const D in c){const j=c[D],x=C.target.uuid;x in j&&(j[x].dispose(),delete j[x])}}}const By={[Dl]:Il,[Ul]:Fl,[Nl]:Bl,[Fr]:Ol,[Il]:Dl,[Fl]:Ul,[Bl]:Nl,[Ol]:Fr};function ky(t){function e(){let I=!1;const Me=new ot;let ee=null;const oe=new ot(0,0,0,0);return{setMask:function(xe){ee!==xe&&!I&&(t.colorMask(xe,xe,xe,xe),ee=xe)},setLocked:function(xe){I=xe},setClear:function(xe,Ee,Ye,yt,Wt){Wt===!0&&(xe*=yt,Ee*=yt,Ye*=yt),Me.set(xe,Ee,Ye,yt),oe.equals(Me)===!1&&(t.clearColor(xe,Ee,Ye,yt),oe.copy(Me))},reset:function(){I=!1,ee=null,oe.set(-1,0,0,0)}}}function n(){let I=!1,Me=!1,ee=null,oe=null,xe=null;return{setReversed:function(Ee){Me=Ee},setTest:function(Ee){Ee?re(t.DEPTH_TEST):pe(t.DEPTH_TEST)},setMask:function(Ee){ee!==Ee&&!I&&(t.depthMask(Ee),ee=Ee)},setFunc:function(Ee){if(Me&&(Ee=By[Ee]),oe!==Ee){switch(Ee){case Dl:t.depthFunc(t.NEVER);break;case Il:t.depthFunc(t.ALWAYS);break;case Ul:t.depthFunc(t.LESS);break;case Fr:t.depthFunc(t.LEQUAL);break;case Nl:t.depthFunc(t.EQUAL);break;case Ol:t.depthFunc(t.GEQUAL);break;case Fl:t.depthFunc(t.GREATER);break;case Bl:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}oe=Ee}},setLocked:function(Ee){I=Ee},setClear:function(Ee){xe!==Ee&&(t.clearDepth(Ee),xe=Ee)},reset:function(){I=!1,ee=null,oe=null,xe=null}}}function i(){let I=!1,Me=null,ee=null,oe=null,xe=null,Ee=null,Ye=null,yt=null,Wt=null;return{setTest:function(Je){I||(Je?re(t.STENCIL_TEST):pe(t.STENCIL_TEST))},setMask:function(Je){Me!==Je&&!I&&(t.stencilMask(Je),Me=Je)},setFunc:function(Je,Xt,Hn){(ee!==Je||oe!==Xt||xe!==Hn)&&(t.stencilFunc(Je,Xt,Hn),ee=Je,oe=Xt,xe=Hn)},setOp:function(Je,Xt,Hn){(Ee!==Je||Ye!==Xt||yt!==Hn)&&(t.stencilOp(Je,Xt,Hn),Ee=Je,Ye=Xt,yt=Hn)},setLocked:function(Je){I=Je},setClear:function(Je){Wt!==Je&&(t.clearStencil(Je),Wt=Je)},reset:function(){I=!1,Me=null,ee=null,oe=null,xe=null,Ee=null,Ye=null,yt=null,Wt=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},f=new WeakMap,h=[],m=null,v=!1,S=null,d=null,p=null,b=null,y=null,E=null,P=null,C=new Ke(0,0,0),R=0,D=!1,j=null,x=null,T=null,$=null,K=null;const Z=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let se=!1,z=0;const Y=t.getParameter(t.VERSION);Y.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(Y)[1]),se=z>=1):Y.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),se=z>=2);let k=null,ge={};const ve=t.getParameter(t.SCISSOR_BOX),ye=t.getParameter(t.VIEWPORT),Ge=new ot().fromArray(ve),$e=new ot().fromArray(ye);function ne(I,Me,ee,oe){const xe=new Uint8Array(4),Ee=t.createTexture();t.bindTexture(I,Ee),t.texParameteri(I,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(I,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ye=0;Ye<ee;Ye++)I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY?t.texImage3D(Me,0,t.RGBA,1,1,oe,0,t.RGBA,t.UNSIGNED_BYTE,xe):t.texImage2D(Me+Ye,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,xe);return Ee}const W={};W[t.TEXTURE_2D]=ne(t.TEXTURE_2D,t.TEXTURE_2D,1),W[t.TEXTURE_CUBE_MAP]=ne(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),W[t.TEXTURE_2D_ARRAY]=ne(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),W[t.TEXTURE_3D]=ne(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),re(t.DEPTH_TEST),s.setFunc(Fr),Q(!1),J(qu),re(t.CULL_FACE),_(Ei);function re(I){c[I]!==!0&&(t.enable(I),c[I]=!0)}function pe(I){c[I]!==!1&&(t.disable(I),c[I]=!1)}function Ue(I,Me){return u[I]!==Me?(t.bindFramebuffer(I,Me),u[I]=Me,I===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=Me),I===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=Me),!0):!1}function De(I,Me){let ee=h,oe=!1;if(I){ee=f.get(Me),ee===void 0&&(ee=[],f.set(Me,ee));const xe=I.textures;if(ee.length!==xe.length||ee[0]!==t.COLOR_ATTACHMENT0){for(let Ee=0,Ye=xe.length;Ee<Ye;Ee++)ee[Ee]=t.COLOR_ATTACHMENT0+Ee;ee.length=xe.length,oe=!0}}else ee[0]!==t.BACK&&(ee[0]=t.BACK,oe=!0);oe&&t.drawBuffers(ee)}function Ve(I){return m!==I?(t.useProgram(I),m=I,!0):!1}const je={[Vi]:t.FUNC_ADD,[e_]:t.FUNC_SUBTRACT,[t_]:t.FUNC_REVERSE_SUBTRACT};je[n_]=t.MIN,je[i_]=t.MAX;const w={[r_]:t.ZERO,[s_]:t.ONE,[o_]:t.SRC_COLOR,[Pl]:t.SRC_ALPHA,[h_]:t.SRC_ALPHA_SATURATE,[u_]:t.DST_COLOR,[l_]:t.DST_ALPHA,[a_]:t.ONE_MINUS_SRC_COLOR,[Ll]:t.ONE_MINUS_SRC_ALPHA,[f_]:t.ONE_MINUS_DST_COLOR,[c_]:t.ONE_MINUS_DST_ALPHA,[d_]:t.CONSTANT_COLOR,[p_]:t.ONE_MINUS_CONSTANT_COLOR,[m_]:t.CONSTANT_ALPHA,[g_]:t.ONE_MINUS_CONSTANT_ALPHA};function _(I,Me,ee,oe,xe,Ee,Ye,yt,Wt,Je){if(I===Ei){v===!0&&(pe(t.BLEND),v=!1);return}if(v===!1&&(re(t.BLEND),v=!0),I!==Qg){if(I!==S||Je!==D){if((d!==Vi||y!==Vi)&&(t.blendEquation(t.FUNC_ADD),d=Vi,y=Vi),Je)switch(I){case Pr:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case $u:t.blendFunc(t.ONE,t.ONE);break;case Ku:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Yu:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Pr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case $u:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Ku:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Yu:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}p=null,b=null,E=null,P=null,C.set(0,0,0),R=0,S=I,D=Je}return}xe=xe||Me,Ee=Ee||ee,Ye=Ye||oe,(Me!==d||xe!==y)&&(t.blendEquationSeparate(je[Me],je[xe]),d=Me,y=xe),(ee!==p||oe!==b||Ee!==E||Ye!==P)&&(t.blendFuncSeparate(w[ee],w[oe],w[Ee],w[Ye]),p=ee,b=oe,E=Ee,P=Ye),(yt.equals(C)===!1||Wt!==R)&&(t.blendColor(yt.r,yt.g,yt.b,Wt),C.copy(yt),R=Wt),S=I,D=!1}function X(I,Me){I.side===Nn?pe(t.CULL_FACE):re(t.CULL_FACE);let ee=I.side===Yt;Me&&(ee=!ee),Q(ee),I.blending===Pr&&I.transparent===!1?_(Ei):_(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),s.setFunc(I.depthFunc),s.setTest(I.depthTest),s.setMask(I.depthWrite),r.setMask(I.colorWrite);const oe=I.stencilWrite;o.setTest(oe),oe&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),le(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?re(t.SAMPLE_ALPHA_TO_COVERAGE):pe(t.SAMPLE_ALPHA_TO_COVERAGE)}function Q(I){j!==I&&(I?t.frontFace(t.CW):t.frontFace(t.CCW),j=I)}function J(I){I!==jg?(re(t.CULL_FACE),I!==x&&(I===qu?t.cullFace(t.BACK):I===Zg?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):pe(t.CULL_FACE),x=I}function H(I){I!==T&&(se&&t.lineWidth(I),T=I)}function le(I,Me,ee){I?(re(t.POLYGON_OFFSET_FILL),($!==Me||K!==ee)&&(t.polygonOffset(Me,ee),$=Me,K=ee)):pe(t.POLYGON_OFFSET_FILL)}function te(I){I?re(t.SCISSOR_TEST):pe(t.SCISSOR_TEST)}function M(I){I===void 0&&(I=t.TEXTURE0+Z-1),k!==I&&(t.activeTexture(I),k=I)}function g(I,Me,ee){ee===void 0&&(k===null?ee=t.TEXTURE0+Z-1:ee=k);let oe=ge[ee];oe===void 0&&(oe={type:void 0,texture:void 0},ge[ee]=oe),(oe.type!==I||oe.texture!==Me)&&(k!==ee&&(t.activeTexture(ee),k=ee),t.bindTexture(I,Me||W[I]),oe.type=I,oe.texture=Me)}function L(){const I=ge[k];I!==void 0&&I.type!==void 0&&(t.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function U(){try{t.compressedTexImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function G(){try{t.compressedTexImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function B(){try{t.texSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function he(){try{t.texSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ce(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function fe(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Pe(){try{t.texStorage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ae(){try{t.texStorage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function _e(){try{t.texImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function we(){try{t.texImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ie(I){Ge.equals(I)===!1&&(t.scissor(I.x,I.y,I.z,I.w),Ge.copy(I))}function Te(I){$e.equals(I)===!1&&(t.viewport(I.x,I.y,I.z,I.w),$e.copy(I))}function Oe(I,Me){let ee=l.get(Me);ee===void 0&&(ee=new WeakMap,l.set(Me,ee));let oe=ee.get(I);oe===void 0&&(oe=t.getUniformBlockIndex(Me,I.name),ee.set(I,oe))}function Le(I,Me){const oe=l.get(Me).get(I);a.get(Me)!==oe&&(t.uniformBlockBinding(Me,oe,I.__bindingPointIndex),a.set(Me,oe))}function it(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},k=null,ge={},u={},f=new WeakMap,h=[],m=null,v=!1,S=null,d=null,p=null,b=null,y=null,E=null,P=null,C=new Ke(0,0,0),R=0,D=!1,j=null,x=null,T=null,$=null,K=null,Ge.set(0,0,t.canvas.width,t.canvas.height),$e.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:re,disable:pe,bindFramebuffer:Ue,drawBuffers:De,useProgram:Ve,setBlending:_,setMaterial:X,setFlipSided:Q,setCullFace:J,setLineWidth:H,setPolygonOffset:le,setScissorTest:te,activeTexture:M,bindTexture:g,unbindTexture:L,compressedTexImage2D:U,compressedTexImage3D:G,texImage2D:_e,texImage3D:we,updateUBOMapping:Oe,uniformBlockBinding:Le,texStorage2D:Pe,texStorage3D:ae,texSubImage2D:B,texSubImage3D:he,compressedTexSubImage2D:ce,compressedTexSubImage3D:fe,scissor:Ie,viewport:Te,reset:it}}function Hf(t,e,n,i){const r=Hy(i);switch(n){case Md:return t*e;case Td:return t*e;case bd:return t*e*2;case Ad:return t*e/r.components*r.byteLength;case Wc:return t*e/r.components*r.byteLength;case wd:return t*e*2/r.components*r.byteLength;case Xc:return t*e*2/r.components*r.byteLength;case Ed:return t*e*3/r.components*r.byteLength;case Sn:return t*e*4/r.components*r.byteLength;case qc:return t*e*4/r.components*r.byteLength;case So:case yo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Mo:case Eo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Wl:case ql:return Math.max(t,16)*Math.max(e,8)/4;case Vl:case Xl:return Math.max(t,8)*Math.max(e,8)/2;case $l:case Kl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Yl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case jl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Zl:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Jl:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Ql:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case ec:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case tc:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case nc:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case ic:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case rc:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case sc:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case oc:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case ac:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case lc:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case cc:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case To:case uc:case fc:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Rd:case hc:return Math.ceil(t/4)*Math.ceil(e/4)*8;case dc:case pc:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Hy(t){switch(t){case li:case xd:return{byteLength:1,components:1};case ys:case Sd:case Ps:return{byteLength:2,components:1};case zc:case Vc:return{byteLength:2,components:4};case Ji:case Gc:case ei:return{byteLength:4,components:1};case yd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function Gy(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new qe,u=new WeakMap;let f;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(M,g){return m?new OffscreenCanvas(M,g):Wo("canvas")}function S(M,g,L){let U=1;const G=te(M);if((G.width>L||G.height>L)&&(U=L/Math.max(G.width,G.height)),U<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){const B=Math.floor(U*G.width),he=Math.floor(U*G.height);f===void 0&&(f=v(B,he));const ce=g?v(B,he):f;return ce.width=B,ce.height=he,ce.getContext("2d").drawImage(M,0,0,B,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+G.width+"x"+G.height+") to ("+B+"x"+he+")."),ce}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+G.width+"x"+G.height+")."),M;return M}function d(M){return M.generateMipmaps&&M.minFilter!==fn&&M.minFilter!==vn}function p(M){t.generateMipmap(M)}function b(M,g,L,U,G=!1){if(M!==null){if(t[M]!==void 0)return t[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let B=g;if(g===t.RED&&(L===t.FLOAT&&(B=t.R32F),L===t.HALF_FLOAT&&(B=t.R16F),L===t.UNSIGNED_BYTE&&(B=t.R8)),g===t.RED_INTEGER&&(L===t.UNSIGNED_BYTE&&(B=t.R8UI),L===t.UNSIGNED_SHORT&&(B=t.R16UI),L===t.UNSIGNED_INT&&(B=t.R32UI),L===t.BYTE&&(B=t.R8I),L===t.SHORT&&(B=t.R16I),L===t.INT&&(B=t.R32I)),g===t.RG&&(L===t.FLOAT&&(B=t.RG32F),L===t.HALF_FLOAT&&(B=t.RG16F),L===t.UNSIGNED_BYTE&&(B=t.RG8)),g===t.RG_INTEGER&&(L===t.UNSIGNED_BYTE&&(B=t.RG8UI),L===t.UNSIGNED_SHORT&&(B=t.RG16UI),L===t.UNSIGNED_INT&&(B=t.RG32UI),L===t.BYTE&&(B=t.RG8I),L===t.SHORT&&(B=t.RG16I),L===t.INT&&(B=t.RG32I)),g===t.RGB_INTEGER&&(L===t.UNSIGNED_BYTE&&(B=t.RGB8UI),L===t.UNSIGNED_SHORT&&(B=t.RGB16UI),L===t.UNSIGNED_INT&&(B=t.RGB32UI),L===t.BYTE&&(B=t.RGB8I),L===t.SHORT&&(B=t.RGB16I),L===t.INT&&(B=t.RGB32I)),g===t.RGBA_INTEGER&&(L===t.UNSIGNED_BYTE&&(B=t.RGBA8UI),L===t.UNSIGNED_SHORT&&(B=t.RGBA16UI),L===t.UNSIGNED_INT&&(B=t.RGBA32UI),L===t.BYTE&&(B=t.RGBA8I),L===t.SHORT&&(B=t.RGBA16I),L===t.INT&&(B=t.RGBA32I)),g===t.RGB&&L===t.UNSIGNED_INT_5_9_9_9_REV&&(B=t.RGB9_E5),g===t.RGBA){const he=G?Ho:nt.getTransfer(U);L===t.FLOAT&&(B=t.RGBA32F),L===t.HALF_FLOAT&&(B=t.RGBA16F),L===t.UNSIGNED_BYTE&&(B=he===dt?t.SRGB8_ALPHA8:t.RGBA8),L===t.UNSIGNED_SHORT_4_4_4_4&&(B=t.RGBA4),L===t.UNSIGNED_SHORT_5_5_5_1&&(B=t.RGB5_A1)}return(B===t.R16F||B===t.R32F||B===t.RG16F||B===t.RG32F||B===t.RGBA16F||B===t.RGBA32F)&&e.get("EXT_color_buffer_float"),B}function y(M,g){let L;return M?g===null||g===Ji||g===Hr?L=t.DEPTH24_STENCIL8:g===ei?L=t.DEPTH32F_STENCIL8:g===ys&&(L=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Ji||g===Hr?L=t.DEPTH_COMPONENT24:g===ei?L=t.DEPTH_COMPONENT32F:g===ys&&(L=t.DEPTH_COMPONENT16),L}function E(M,g){return d(M)===!0||M.isFramebufferTexture&&M.minFilter!==fn&&M.minFilter!==vn?Math.log2(Math.max(g.width,g.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?g.mipmaps.length:1}function P(M){const g=M.target;g.removeEventListener("dispose",P),R(g),g.isVideoTexture&&u.delete(g)}function C(M){const g=M.target;g.removeEventListener("dispose",C),j(g)}function R(M){const g=i.get(M);if(g.__webglInit===void 0)return;const L=M.source,U=h.get(L);if(U){const G=U[g.__cacheKey];G.usedTimes--,G.usedTimes===0&&D(M),Object.keys(U).length===0&&h.delete(L)}i.remove(M)}function D(M){const g=i.get(M);t.deleteTexture(g.__webglTexture);const L=M.source,U=h.get(L);delete U[g.__cacheKey],o.memory.textures--}function j(M){const g=i.get(M);if(M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let U=0;U<6;U++){if(Array.isArray(g.__webglFramebuffer[U]))for(let G=0;G<g.__webglFramebuffer[U].length;G++)t.deleteFramebuffer(g.__webglFramebuffer[U][G]);else t.deleteFramebuffer(g.__webglFramebuffer[U]);g.__webglDepthbuffer&&t.deleteRenderbuffer(g.__webglDepthbuffer[U])}else{if(Array.isArray(g.__webglFramebuffer))for(let U=0;U<g.__webglFramebuffer.length;U++)t.deleteFramebuffer(g.__webglFramebuffer[U]);else t.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&t.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&t.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let U=0;U<g.__webglColorRenderbuffer.length;U++)g.__webglColorRenderbuffer[U]&&t.deleteRenderbuffer(g.__webglColorRenderbuffer[U]);g.__webglDepthRenderbuffer&&t.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const L=M.textures;for(let U=0,G=L.length;U<G;U++){const B=i.get(L[U]);B.__webglTexture&&(t.deleteTexture(B.__webglTexture),o.memory.textures--),i.remove(L[U])}i.remove(M)}let x=0;function T(){x=0}function $(){const M=x;return M>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+r.maxTextures),x+=1,M}function K(M){const g=[];return g.push(M.wrapS),g.push(M.wrapT),g.push(M.wrapR||0),g.push(M.magFilter),g.push(M.minFilter),g.push(M.anisotropy),g.push(M.internalFormat),g.push(M.format),g.push(M.type),g.push(M.generateMipmaps),g.push(M.premultiplyAlpha),g.push(M.flipY),g.push(M.unpackAlignment),g.push(M.colorSpace),g.join()}function Z(M,g){const L=i.get(M);if(M.isVideoTexture&&H(M),M.isRenderTargetTexture===!1&&M.version>0&&L.__version!==M.version){const U=M.image;if(U===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(U.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$e(L,M,g);return}}n.bindTexture(t.TEXTURE_2D,L.__webglTexture,t.TEXTURE0+g)}function se(M,g){const L=i.get(M);if(M.version>0&&L.__version!==M.version){$e(L,M,g);return}n.bindTexture(t.TEXTURE_2D_ARRAY,L.__webglTexture,t.TEXTURE0+g)}function z(M,g){const L=i.get(M);if(M.version>0&&L.__version!==M.version){$e(L,M,g);return}n.bindTexture(t.TEXTURE_3D,L.__webglTexture,t.TEXTURE0+g)}function Y(M,g){const L=i.get(M);if(M.version>0&&L.__version!==M.version){ne(L,M,g);return}n.bindTexture(t.TEXTURE_CUBE_MAP,L.__webglTexture,t.TEXTURE0+g)}const k={[Gl]:t.REPEAT,[Xi]:t.CLAMP_TO_EDGE,[zl]:t.MIRRORED_REPEAT},ge={[fn]:t.NEAREST,[A_]:t.NEAREST_MIPMAP_NEAREST,[Xs]:t.NEAREST_MIPMAP_LINEAR,[vn]:t.LINEAR,[Na]:t.LINEAR_MIPMAP_NEAREST,[qi]:t.LINEAR_MIPMAP_LINEAR},ve={[P_]:t.NEVER,[O_]:t.ALWAYS,[L_]:t.LESS,[Pd]:t.LEQUAL,[D_]:t.EQUAL,[N_]:t.GEQUAL,[I_]:t.GREATER,[U_]:t.NOTEQUAL};function ye(M,g){if(g.type===ei&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===vn||g.magFilter===Na||g.magFilter===Xs||g.magFilter===qi||g.minFilter===vn||g.minFilter===Na||g.minFilter===Xs||g.minFilter===qi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(M,t.TEXTURE_WRAP_S,k[g.wrapS]),t.texParameteri(M,t.TEXTURE_WRAP_T,k[g.wrapT]),(M===t.TEXTURE_3D||M===t.TEXTURE_2D_ARRAY)&&t.texParameteri(M,t.TEXTURE_WRAP_R,k[g.wrapR]),t.texParameteri(M,t.TEXTURE_MAG_FILTER,ge[g.magFilter]),t.texParameteri(M,t.TEXTURE_MIN_FILTER,ge[g.minFilter]),g.compareFunction&&(t.texParameteri(M,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(M,t.TEXTURE_COMPARE_FUNC,ve[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===fn||g.minFilter!==Xs&&g.minFilter!==qi||g.type===ei&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const L=e.get("EXT_texture_filter_anisotropic");t.texParameterf(M,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function Ge(M,g){let L=!1;M.__webglInit===void 0&&(M.__webglInit=!0,g.addEventListener("dispose",P));const U=g.source;let G=h.get(U);G===void 0&&(G={},h.set(U,G));const B=K(g);if(B!==M.__cacheKey){G[B]===void 0&&(G[B]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,L=!0),G[B].usedTimes++;const he=G[M.__cacheKey];he!==void 0&&(G[M.__cacheKey].usedTimes--,he.usedTimes===0&&D(g)),M.__cacheKey=B,M.__webglTexture=G[B].texture}return L}function $e(M,g,L){let U=t.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(U=t.TEXTURE_2D_ARRAY),g.isData3DTexture&&(U=t.TEXTURE_3D);const G=Ge(M,g),B=g.source;n.bindTexture(U,M.__webglTexture,t.TEXTURE0+L);const he=i.get(B);if(B.version!==he.__version||G===!0){n.activeTexture(t.TEXTURE0+L);const ce=nt.getPrimaries(nt.workingColorSpace),fe=g.colorSpace===yi?null:nt.getPrimaries(g.colorSpace),Pe=g.colorSpace===yi||ce===fe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);let ae=S(g.image,!1,r.maxTextureSize);ae=le(g,ae);const _e=s.convert(g.format,g.colorSpace),we=s.convert(g.type);let Ie=b(g.internalFormat,_e,we,g.colorSpace,g.isVideoTexture);ye(U,g);let Te;const Oe=g.mipmaps,Le=g.isVideoTexture!==!0,it=he.__version===void 0||G===!0,I=B.dataReady,Me=E(g,ae);if(g.isDepthTexture)Ie=y(g.format===Gr,g.type),it&&(Le?n.texStorage2D(t.TEXTURE_2D,1,Ie,ae.width,ae.height):n.texImage2D(t.TEXTURE_2D,0,Ie,ae.width,ae.height,0,_e,we,null));else if(g.isDataTexture)if(Oe.length>0){Le&&it&&n.texStorage2D(t.TEXTURE_2D,Me,Ie,Oe[0].width,Oe[0].height);for(let ee=0,oe=Oe.length;ee<oe;ee++)Te=Oe[ee],Le?I&&n.texSubImage2D(t.TEXTURE_2D,ee,0,0,Te.width,Te.height,_e,we,Te.data):n.texImage2D(t.TEXTURE_2D,ee,Ie,Te.width,Te.height,0,_e,we,Te.data);g.generateMipmaps=!1}else Le?(it&&n.texStorage2D(t.TEXTURE_2D,Me,Ie,ae.width,ae.height),I&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ae.width,ae.height,_e,we,ae.data)):n.texImage2D(t.TEXTURE_2D,0,Ie,ae.width,ae.height,0,_e,we,ae.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Le&&it&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Me,Ie,Oe[0].width,Oe[0].height,ae.depth);for(let ee=0,oe=Oe.length;ee<oe;ee++)if(Te=Oe[ee],g.format!==Sn)if(_e!==null)if(Le){if(I)if(g.layerUpdates.size>0){const xe=Hf(Te.width,Te.height,g.format,g.type);for(const Ee of g.layerUpdates){const Ye=Te.data.subarray(Ee*xe/Te.data.BYTES_PER_ELEMENT,(Ee+1)*xe/Te.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ee,0,0,Ee,Te.width,Te.height,1,_e,Ye,0,0)}g.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ee,0,0,0,Te.width,Te.height,ae.depth,_e,Te.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ee,Ie,Te.width,Te.height,ae.depth,0,Te.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Le?I&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ee,0,0,0,Te.width,Te.height,ae.depth,_e,we,Te.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ee,Ie,Te.width,Te.height,ae.depth,0,_e,we,Te.data)}else{Le&&it&&n.texStorage2D(t.TEXTURE_2D,Me,Ie,Oe[0].width,Oe[0].height);for(let ee=0,oe=Oe.length;ee<oe;ee++)Te=Oe[ee],g.format!==Sn?_e!==null?Le?I&&n.compressedTexSubImage2D(t.TEXTURE_2D,ee,0,0,Te.width,Te.height,_e,Te.data):n.compressedTexImage2D(t.TEXTURE_2D,ee,Ie,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?I&&n.texSubImage2D(t.TEXTURE_2D,ee,0,0,Te.width,Te.height,_e,we,Te.data):n.texImage2D(t.TEXTURE_2D,ee,Ie,Te.width,Te.height,0,_e,we,Te.data)}else if(g.isDataArrayTexture)if(Le){if(it&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Me,Ie,ae.width,ae.height,ae.depth),I)if(g.layerUpdates.size>0){const ee=Hf(ae.width,ae.height,g.format,g.type);for(const oe of g.layerUpdates){const xe=ae.data.subarray(oe*ee/ae.data.BYTES_PER_ELEMENT,(oe+1)*ee/ae.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,oe,ae.width,ae.height,1,_e,we,xe)}g.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,_e,we,ae.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ie,ae.width,ae.height,ae.depth,0,_e,we,ae.data);else if(g.isData3DTexture)Le?(it&&n.texStorage3D(t.TEXTURE_3D,Me,Ie,ae.width,ae.height,ae.depth),I&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,_e,we,ae.data)):n.texImage3D(t.TEXTURE_3D,0,Ie,ae.width,ae.height,ae.depth,0,_e,we,ae.data);else if(g.isFramebufferTexture){if(it)if(Le)n.texStorage2D(t.TEXTURE_2D,Me,Ie,ae.width,ae.height);else{let ee=ae.width,oe=ae.height;for(let xe=0;xe<Me;xe++)n.texImage2D(t.TEXTURE_2D,xe,Ie,ee,oe,0,_e,we,null),ee>>=1,oe>>=1}}else if(Oe.length>0){if(Le&&it){const ee=te(Oe[0]);n.texStorage2D(t.TEXTURE_2D,Me,Ie,ee.width,ee.height)}for(let ee=0,oe=Oe.length;ee<oe;ee++)Te=Oe[ee],Le?I&&n.texSubImage2D(t.TEXTURE_2D,ee,0,0,_e,we,Te):n.texImage2D(t.TEXTURE_2D,ee,Ie,_e,we,Te);g.generateMipmaps=!1}else if(Le){if(it){const ee=te(ae);n.texStorage2D(t.TEXTURE_2D,Me,Ie,ee.width,ee.height)}I&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,_e,we,ae)}else n.texImage2D(t.TEXTURE_2D,0,Ie,_e,we,ae);d(g)&&p(U),he.__version=B.version,g.onUpdate&&g.onUpdate(g)}M.__version=g.version}function ne(M,g,L){if(g.image.length!==6)return;const U=Ge(M,g),G=g.source;n.bindTexture(t.TEXTURE_CUBE_MAP,M.__webglTexture,t.TEXTURE0+L);const B=i.get(G);if(G.version!==B.__version||U===!0){n.activeTexture(t.TEXTURE0+L);const he=nt.getPrimaries(nt.workingColorSpace),ce=g.colorSpace===yi?null:nt.getPrimaries(g.colorSpace),fe=g.colorSpace===yi||he===ce?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const Pe=g.isCompressedTexture||g.image[0].isCompressedTexture,ae=g.image[0]&&g.image[0].isDataTexture,_e=[];for(let oe=0;oe<6;oe++)!Pe&&!ae?_e[oe]=S(g.image[oe],!0,r.maxCubemapSize):_e[oe]=ae?g.image[oe].image:g.image[oe],_e[oe]=le(g,_e[oe]);const we=_e[0],Ie=s.convert(g.format,g.colorSpace),Te=s.convert(g.type),Oe=b(g.internalFormat,Ie,Te,g.colorSpace),Le=g.isVideoTexture!==!0,it=B.__version===void 0||U===!0,I=G.dataReady;let Me=E(g,we);ye(t.TEXTURE_CUBE_MAP,g);let ee;if(Pe){Le&&it&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Me,Oe,we.width,we.height);for(let oe=0;oe<6;oe++){ee=_e[oe].mipmaps;for(let xe=0;xe<ee.length;xe++){const Ee=ee[xe];g.format!==Sn?Ie!==null?Le?I&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,xe,0,0,Ee.width,Ee.height,Ie,Ee.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,xe,Oe,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Le?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,xe,0,0,Ee.width,Ee.height,Ie,Te,Ee.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,xe,Oe,Ee.width,Ee.height,0,Ie,Te,Ee.data)}}}else{if(ee=g.mipmaps,Le&&it){ee.length>0&&Me++;const oe=te(_e[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Me,Oe,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(ae){Le?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,_e[oe].width,_e[oe].height,Ie,Te,_e[oe].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,Oe,_e[oe].width,_e[oe].height,0,Ie,Te,_e[oe].data);for(let xe=0;xe<ee.length;xe++){const Ye=ee[xe].image[oe].image;Le?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,xe+1,0,0,Ye.width,Ye.height,Ie,Te,Ye.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,xe+1,Oe,Ye.width,Ye.height,0,Ie,Te,Ye.data)}}else{Le?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Ie,Te,_e[oe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,Oe,Ie,Te,_e[oe]);for(let xe=0;xe<ee.length;xe++){const Ee=ee[xe];Le?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,xe+1,0,0,Ie,Te,Ee.image[oe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,xe+1,Oe,Ie,Te,Ee.image[oe])}}}d(g)&&p(t.TEXTURE_CUBE_MAP),B.__version=G.version,g.onUpdate&&g.onUpdate(g)}M.__version=g.version}function W(M,g,L,U,G,B){const he=s.convert(L.format,L.colorSpace),ce=s.convert(L.type),fe=b(L.internalFormat,he,ce,L.colorSpace);if(!i.get(g).__hasExternalTextures){const ae=Math.max(1,g.width>>B),_e=Math.max(1,g.height>>B);G===t.TEXTURE_3D||G===t.TEXTURE_2D_ARRAY?n.texImage3D(G,B,fe,ae,_e,g.depth,0,he,ce,null):n.texImage2D(G,B,fe,ae,_e,0,he,ce,null)}n.bindFramebuffer(t.FRAMEBUFFER,M),J(g)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,U,G,i.get(L).__webglTexture,0,Q(g)):(G===t.TEXTURE_2D||G>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&G<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,U,G,i.get(L).__webglTexture,B),n.bindFramebuffer(t.FRAMEBUFFER,null)}function re(M,g,L){if(t.bindRenderbuffer(t.RENDERBUFFER,M),g.depthBuffer){const U=g.depthTexture,G=U&&U.isDepthTexture?U.type:null,B=y(g.stencilBuffer,G),he=g.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ce=Q(g);J(g)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ce,B,g.width,g.height):L?t.renderbufferStorageMultisample(t.RENDERBUFFER,ce,B,g.width,g.height):t.renderbufferStorage(t.RENDERBUFFER,B,g.width,g.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,he,t.RENDERBUFFER,M)}else{const U=g.textures;for(let G=0;G<U.length;G++){const B=U[G],he=s.convert(B.format,B.colorSpace),ce=s.convert(B.type),fe=b(B.internalFormat,he,ce,B.colorSpace),Pe=Q(g);L&&J(g)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Pe,fe,g.width,g.height):J(g)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Pe,fe,g.width,g.height):t.renderbufferStorage(t.RENDERBUFFER,fe,g.width,g.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function pe(M,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,M),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(g.depthTexture).__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),Z(g.depthTexture,0);const U=i.get(g.depthTexture).__webglTexture,G=Q(g);if(g.depthTexture.format===Lr)J(g)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,U,0,G):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,U,0);else if(g.depthTexture.format===Gr)J(g)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,U,0,G):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,U,0);else throw new Error("Unknown depthTexture format")}function Ue(M){const g=i.get(M),L=M.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==M.depthTexture){const U=M.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),U){const G=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,U.removeEventListener("dispose",G)};U.addEventListener("dispose",G),g.__depthDisposeCallback=G}g.__boundDepthTexture=U}if(M.depthTexture&&!g.__autoAllocateDepthBuffer){if(L)throw new Error("target.depthTexture not supported in Cube render targets");pe(g.__webglFramebuffer,M)}else if(L){g.__webglDepthbuffer=[];for(let U=0;U<6;U++)if(n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer[U]),g.__webglDepthbuffer[U]===void 0)g.__webglDepthbuffer[U]=t.createRenderbuffer(),re(g.__webglDepthbuffer[U],M,!1);else{const G=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,B=g.__webglDepthbuffer[U];t.bindRenderbuffer(t.RENDERBUFFER,B),t.framebufferRenderbuffer(t.FRAMEBUFFER,G,t.RENDERBUFFER,B)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=t.createRenderbuffer(),re(g.__webglDepthbuffer,M,!1);else{const U=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,G=g.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,G),t.framebufferRenderbuffer(t.FRAMEBUFFER,U,t.RENDERBUFFER,G)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function De(M,g,L){const U=i.get(M);g!==void 0&&W(U.__webglFramebuffer,M,M.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),L!==void 0&&Ue(M)}function Ve(M){const g=M.texture,L=i.get(M),U=i.get(g);M.addEventListener("dispose",C);const G=M.textures,B=M.isWebGLCubeRenderTarget===!0,he=G.length>1;if(he||(U.__webglTexture===void 0&&(U.__webglTexture=t.createTexture()),U.__version=g.version,o.memory.textures++),B){L.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(g.mipmaps&&g.mipmaps.length>0){L.__webglFramebuffer[ce]=[];for(let fe=0;fe<g.mipmaps.length;fe++)L.__webglFramebuffer[ce][fe]=t.createFramebuffer()}else L.__webglFramebuffer[ce]=t.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){L.__webglFramebuffer=[];for(let ce=0;ce<g.mipmaps.length;ce++)L.__webglFramebuffer[ce]=t.createFramebuffer()}else L.__webglFramebuffer=t.createFramebuffer();if(he)for(let ce=0,fe=G.length;ce<fe;ce++){const Pe=i.get(G[ce]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=t.createTexture(),o.memory.textures++)}if(M.samples>0&&J(M)===!1){L.__webglMultisampledFramebuffer=t.createFramebuffer(),L.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let ce=0;ce<G.length;ce++){const fe=G[ce];L.__webglColorRenderbuffer[ce]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,L.__webglColorRenderbuffer[ce]);const Pe=s.convert(fe.format,fe.colorSpace),ae=s.convert(fe.type),_e=b(fe.internalFormat,Pe,ae,fe.colorSpace,M.isXRRenderTarget===!0),we=Q(M);t.renderbufferStorageMultisample(t.RENDERBUFFER,we,_e,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.RENDERBUFFER,L.__webglColorRenderbuffer[ce])}t.bindRenderbuffer(t.RENDERBUFFER,null),M.depthBuffer&&(L.__webglDepthRenderbuffer=t.createRenderbuffer(),re(L.__webglDepthRenderbuffer,M,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(B){n.bindTexture(t.TEXTURE_CUBE_MAP,U.__webglTexture),ye(t.TEXTURE_CUBE_MAP,g);for(let ce=0;ce<6;ce++)if(g.mipmaps&&g.mipmaps.length>0)for(let fe=0;fe<g.mipmaps.length;fe++)W(L.__webglFramebuffer[ce][fe],M,g,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,fe);else W(L.__webglFramebuffer[ce],M,g,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);d(g)&&p(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(he){for(let ce=0,fe=G.length;ce<fe;ce++){const Pe=G[ce],ae=i.get(Pe);n.bindTexture(t.TEXTURE_2D,ae.__webglTexture),ye(t.TEXTURE_2D,Pe),W(L.__webglFramebuffer,M,Pe,t.COLOR_ATTACHMENT0+ce,t.TEXTURE_2D,0),d(Pe)&&p(t.TEXTURE_2D)}n.unbindTexture()}else{let ce=t.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(ce=M.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ce,U.__webglTexture),ye(ce,g),g.mipmaps&&g.mipmaps.length>0)for(let fe=0;fe<g.mipmaps.length;fe++)W(L.__webglFramebuffer[fe],M,g,t.COLOR_ATTACHMENT0,ce,fe);else W(L.__webglFramebuffer,M,g,t.COLOR_ATTACHMENT0,ce,0);d(g)&&p(ce),n.unbindTexture()}M.depthBuffer&&Ue(M)}function je(M){const g=M.textures;for(let L=0,U=g.length;L<U;L++){const G=g[L];if(d(G)){const B=M.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,he=i.get(G).__webglTexture;n.bindTexture(B,he),p(B),n.unbindTexture()}}}const w=[],_=[];function X(M){if(M.samples>0){if(J(M)===!1){const g=M.textures,L=M.width,U=M.height;let G=t.COLOR_BUFFER_BIT;const B=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,he=i.get(M),ce=g.length>1;if(ce)for(let fe=0;fe<g.length;fe++)n.bindFramebuffer(t.FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,he.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let fe=0;fe<g.length;fe++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(G|=t.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(G|=t.STENCIL_BUFFER_BIT)),ce){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,he.__webglColorRenderbuffer[fe]);const Pe=i.get(g[fe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Pe,0)}t.blitFramebuffer(0,0,L,U,0,0,L,U,G,t.NEAREST),l===!0&&(w.length=0,_.length=0,w.push(t.COLOR_ATTACHMENT0+fe),M.depthBuffer&&M.resolveDepthBuffer===!1&&(w.push(B),_.push(B),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,_)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,w))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ce)for(let fe=0;fe<g.length;fe++){n.bindFramebuffer(t.FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,he.__webglColorRenderbuffer[fe]);const Pe=i.get(g[fe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,he.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,Pe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&l){const g=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[g])}}}function Q(M){return Math.min(r.maxSamples,M.samples)}function J(M){const g=i.get(M);return M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function H(M){const g=o.render.frame;u.get(M)!==g&&(u.set(M,g),M.update())}function le(M,g){const L=M.colorSpace,U=M.format,G=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||L!==Ci&&L!==yi&&(nt.getTransfer(L)===dt?(U!==Sn||G!==li)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",L)),g}function te(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(c.width=M.naturalWidth||M.width,c.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(c.width=M.displayWidth,c.height=M.displayHeight):(c.width=M.width,c.height=M.height),c}this.allocateTextureUnit=$,this.resetTextureUnits=T,this.setTexture2D=Z,this.setTexture2DArray=se,this.setTexture3D=z,this.setTextureCube=Y,this.rebindTextures=De,this.setupRenderTarget=Ve,this.updateRenderTargetMipmap=je,this.updateMultisampleRenderTarget=X,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=W,this.useMultisampledRTT=J}function zy(t,e){function n(i,r=yi){let s;const o=nt.getTransfer(r);if(i===li)return t.UNSIGNED_BYTE;if(i===zc)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Vc)return t.UNSIGNED_SHORT_5_5_5_1;if(i===yd)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===xd)return t.BYTE;if(i===Sd)return t.SHORT;if(i===ys)return t.UNSIGNED_SHORT;if(i===Gc)return t.INT;if(i===Ji)return t.UNSIGNED_INT;if(i===ei)return t.FLOAT;if(i===Ps)return t.HALF_FLOAT;if(i===Md)return t.ALPHA;if(i===Ed)return t.RGB;if(i===Sn)return t.RGBA;if(i===Td)return t.LUMINANCE;if(i===bd)return t.LUMINANCE_ALPHA;if(i===Lr)return t.DEPTH_COMPONENT;if(i===Gr)return t.DEPTH_STENCIL;if(i===Ad)return t.RED;if(i===Wc)return t.RED_INTEGER;if(i===wd)return t.RG;if(i===Xc)return t.RG_INTEGER;if(i===qc)return t.RGBA_INTEGER;if(i===So||i===yo||i===Mo||i===Eo)if(o===dt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===So)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===yo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Mo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Eo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===So)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===yo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Mo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Eo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Vl||i===Wl||i===Xl||i===ql)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Vl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Wl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Xl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ql)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===$l||i===Kl||i===Yl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===$l||i===Kl)return o===dt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Yl)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===jl||i===Zl||i===Jl||i===Ql||i===ec||i===tc||i===nc||i===ic||i===rc||i===sc||i===oc||i===ac||i===lc||i===cc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===jl)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Zl)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Jl)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ql)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ec)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===tc)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===nc)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ic)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===rc)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===sc)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===oc)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ac)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===lc)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===cc)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===To||i===uc||i===fc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===To)return o===dt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===uc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===fc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Rd||i===hc||i===dc||i===pc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===To)return s.COMPRESSED_RED_RGTC1_EXT;if(i===hc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===dc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===pc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Hr?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class Vy extends tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ho extends It{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Wy={type:"move"};class fl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ho,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ho,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ho,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const S of e.hand.values()){const d=n.getJointPose(S,i),p=this._getHandJoint(c,S);d!==null&&(p.matrix.fromArray(d.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=d.radius),p.visible=d!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),m=.02,v=.005;c.inputState.pinching&&h>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Wy)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new ho;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const Xy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qy=`
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

}`;class $y{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new jt,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Ri({vertexShader:Xy,fragmentShader:qy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new zt(new Ns(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ky extends Xr{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,m=null,v=null;const S=new $y,d=n.getContextAttributes();let p=null,b=null;const y=[],E=[],P=new qe;let C=null;const R=new tn;R.layers.enable(1),R.viewport=new ot;const D=new tn;D.layers.enable(2),D.viewport=new ot;const j=[R,D],x=new Vy;x.layers.enable(1),x.layers.enable(2);let T=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let W=y[ne];return W===void 0&&(W=new fl,y[ne]=W),W.getTargetRaySpace()},this.getControllerGrip=function(ne){let W=y[ne];return W===void 0&&(W=new fl,y[ne]=W),W.getGripSpace()},this.getHand=function(ne){let W=y[ne];return W===void 0&&(W=new fl,y[ne]=W),W.getHandSpace()};function K(ne){const W=E.indexOf(ne.inputSource);if(W===-1)return;const re=y[W];re!==void 0&&(re.update(ne.inputSource,ne.frame,c||o),re.dispatchEvent({type:ne.type,data:ne.inputSource}))}function Z(){r.removeEventListener("select",K),r.removeEventListener("selectstart",K),r.removeEventListener("selectend",K),r.removeEventListener("squeeze",K),r.removeEventListener("squeezestart",K),r.removeEventListener("squeezeend",K),r.removeEventListener("end",Z),r.removeEventListener("inputsourceschange",se);for(let ne=0;ne<y.length;ne++){const W=E[ne];W!==null&&(E[ne]=null,y[ne].disconnect(W))}T=null,$=null,S.reset(),e.setRenderTarget(p),m=null,h=null,f=null,r=null,b=null,$e.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){s=ne,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){a=ne,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ne){c=ne},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(ne){if(r=ne,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",K),r.addEventListener("selectstart",K),r.addEventListener("selectend",K),r.addEventListener("squeeze",K),r.addEventListener("squeezestart",K),r.addEventListener("squeezeend",K),r.addEventListener("end",Z),r.addEventListener("inputsourceschange",se),d.xrCompatible!==!0&&await n.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(P),r.renderState.layers===void 0){const W={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,W),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new Qi(m.framebufferWidth,m.framebufferHeight,{format:Sn,type:li,colorSpace:e.outputColorSpace,stencilBuffer:d.stencil})}else{let W=null,re=null,pe=null;d.depth&&(pe=d.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,W=d.stencil?Gr:Lr,re=d.stencil?Hr:Ji);const Ue={colorFormat:n.RGBA8,depthFormat:pe,scaleFactor:s};f=new XRWebGLBinding(r,n),h=f.createProjectionLayer(Ue),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),b=new Qi(h.textureWidth,h.textureHeight,{format:Sn,type:li,depthTexture:new Vd(h.textureWidth,h.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,W),stencilBuffer:d.stencil,colorSpace:e.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),$e.setContext(r),$e.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function se(ne){for(let W=0;W<ne.removed.length;W++){const re=ne.removed[W],pe=E.indexOf(re);pe>=0&&(E[pe]=null,y[pe].disconnect(re))}for(let W=0;W<ne.added.length;W++){const re=ne.added[W];let pe=E.indexOf(re);if(pe===-1){for(let De=0;De<y.length;De++)if(De>=E.length){E.push(re),pe=De;break}else if(E[De]===null){E[De]=re,pe=De;break}if(pe===-1)break}const Ue=y[pe];Ue&&Ue.connect(re)}}const z=new F,Y=new F;function k(ne,W,re){z.setFromMatrixPosition(W.matrixWorld),Y.setFromMatrixPosition(re.matrixWorld);const pe=z.distanceTo(Y),Ue=W.projectionMatrix.elements,De=re.projectionMatrix.elements,Ve=Ue[14]/(Ue[10]-1),je=Ue[14]/(Ue[10]+1),w=(Ue[9]+1)/Ue[5],_=(Ue[9]-1)/Ue[5],X=(Ue[8]-1)/Ue[0],Q=(De[8]+1)/De[0],J=Ve*X,H=Ve*Q,le=pe/(-X+Q),te=le*-X;if(W.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(te),ne.translateZ(le),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),Ue[10]===-1)ne.projectionMatrix.copy(W.projectionMatrix),ne.projectionMatrixInverse.copy(W.projectionMatrixInverse);else{const M=Ve+le,g=je+le,L=J-te,U=H+(pe-te),G=w*je/g*M,B=_*je/g*M;ne.projectionMatrix.makePerspective(L,U,G,B,M,g),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function ge(ne,W){W===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(W.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(r===null)return;let W=ne.near,re=ne.far;S.texture!==null&&(S.depthNear>0&&(W=S.depthNear),S.depthFar>0&&(re=S.depthFar)),x.near=D.near=R.near=W,x.far=D.far=R.far=re,(T!==x.near||$!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),T=x.near,$=x.far);const pe=ne.parent,Ue=x.cameras;ge(x,pe);for(let De=0;De<Ue.length;De++)ge(Ue[De],pe);Ue.length===2?k(x,R,D):x.projectionMatrix.copy(R.projectionMatrix),ve(ne,x,pe)};function ve(ne,W,re){re===null?ne.matrix.copy(W.matrixWorld):(ne.matrix.copy(re.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(W.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(W.projectionMatrix),ne.projectionMatrixInverse.copy(W.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=mc*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(ne){l=ne,h!==null&&(h.fixedFoveation=ne),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=ne)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(x)};let ye=null;function Ge(ne,W){if(u=W.getViewerPose(c||o),v=W,u!==null){const re=u.views;m!==null&&(e.setRenderTargetFramebuffer(b,m.framebuffer),e.setRenderTarget(b));let pe=!1;re.length!==x.cameras.length&&(x.cameras.length=0,pe=!0);for(let De=0;De<re.length;De++){const Ve=re[De];let je=null;if(m!==null)je=m.getViewport(Ve);else{const _=f.getViewSubImage(h,Ve);je=_.viewport,De===0&&(e.setRenderTargetTextures(b,_.colorTexture,h.ignoreDepthValues?void 0:_.depthStencilTexture),e.setRenderTarget(b))}let w=j[De];w===void 0&&(w=new tn,w.layers.enable(De),w.viewport=new ot,j[De]=w),w.matrix.fromArray(Ve.transform.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale),w.projectionMatrix.fromArray(Ve.projectionMatrix),w.projectionMatrixInverse.copy(w.projectionMatrix).invert(),w.viewport.set(je.x,je.y,je.width,je.height),De===0&&(x.matrix.copy(w.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),pe===!0&&x.cameras.push(w)}const Ue=r.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")){const De=f.getDepthInformation(re[0]);De&&De.isValid&&De.texture&&S.init(e,De,r.renderState)}}for(let re=0;re<y.length;re++){const pe=E[re],Ue=y[re];pe!==null&&Ue!==void 0&&Ue.update(pe,W,c||o)}ye&&ye(ne,W),W.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:W}),v=null}const $e=new Gd;$e.setAnimationLoop(Ge),this.setAnimationLoop=function(ne){ye=ne},this.dispose=function(){}}}const ki=new Bn,Yy=new gt;function jy(t,e){function n(d,p){d.matrixAutoUpdate===!0&&d.updateMatrix(),p.value.copy(d.matrix)}function i(d,p){p.color.getRGB(d.fogColor.value,Bd(t)),p.isFog?(d.fogNear.value=p.near,d.fogFar.value=p.far):p.isFogExp2&&(d.fogDensity.value=p.density)}function r(d,p,b,y,E){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(d,p):p.isMeshToonMaterial?(s(d,p),f(d,p)):p.isMeshPhongMaterial?(s(d,p),u(d,p)):p.isMeshStandardMaterial?(s(d,p),h(d,p),p.isMeshPhysicalMaterial&&m(d,p,E)):p.isMeshMatcapMaterial?(s(d,p),v(d,p)):p.isMeshDepthMaterial?s(d,p):p.isMeshDistanceMaterial?(s(d,p),S(d,p)):p.isMeshNormalMaterial?s(d,p):p.isLineBasicMaterial?(o(d,p),p.isLineDashedMaterial&&a(d,p)):p.isPointsMaterial?l(d,p,b,y):p.isSpriteMaterial?c(d,p):p.isShadowMaterial?(d.color.value.copy(p.color),d.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(d,p){d.opacity.value=p.opacity,p.color&&d.diffuse.value.copy(p.color),p.emissive&&d.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(d.map.value=p.map,n(p.map,d.mapTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,n(p.alphaMap,d.alphaMapTransform)),p.bumpMap&&(d.bumpMap.value=p.bumpMap,n(p.bumpMap,d.bumpMapTransform),d.bumpScale.value=p.bumpScale,p.side===Yt&&(d.bumpScale.value*=-1)),p.normalMap&&(d.normalMap.value=p.normalMap,n(p.normalMap,d.normalMapTransform),d.normalScale.value.copy(p.normalScale),p.side===Yt&&d.normalScale.value.negate()),p.displacementMap&&(d.displacementMap.value=p.displacementMap,n(p.displacementMap,d.displacementMapTransform),d.displacementScale.value=p.displacementScale,d.displacementBias.value=p.displacementBias),p.emissiveMap&&(d.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,d.emissiveMapTransform)),p.specularMap&&(d.specularMap.value=p.specularMap,n(p.specularMap,d.specularMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);const b=e.get(p),y=b.envMap,E=b.envMapRotation;y&&(d.envMap.value=y,ki.copy(E),ki.x*=-1,ki.y*=-1,ki.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ki.y*=-1,ki.z*=-1),d.envMapRotation.value.setFromMatrix4(Yy.makeRotationFromEuler(ki)),d.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=p.reflectivity,d.ior.value=p.ior,d.refractionRatio.value=p.refractionRatio),p.lightMap&&(d.lightMap.value=p.lightMap,d.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,d.lightMapTransform)),p.aoMap&&(d.aoMap.value=p.aoMap,d.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,d.aoMapTransform))}function o(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,p.map&&(d.map.value=p.map,n(p.map,d.mapTransform))}function a(d,p){d.dashSize.value=p.dashSize,d.totalSize.value=p.dashSize+p.gapSize,d.scale.value=p.scale}function l(d,p,b,y){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.size.value=p.size*b,d.scale.value=y*.5,p.map&&(d.map.value=p.map,n(p.map,d.uvTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,n(p.alphaMap,d.alphaMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest)}function c(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.rotation.value=p.rotation,p.map&&(d.map.value=p.map,n(p.map,d.mapTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,n(p.alphaMap,d.alphaMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest)}function u(d,p){d.specular.value.copy(p.specular),d.shininess.value=Math.max(p.shininess,1e-4)}function f(d,p){p.gradientMap&&(d.gradientMap.value=p.gradientMap)}function h(d,p){d.metalness.value=p.metalness,p.metalnessMap&&(d.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,d.metalnessMapTransform)),d.roughness.value=p.roughness,p.roughnessMap&&(d.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,d.roughnessMapTransform)),p.envMap&&(d.envMapIntensity.value=p.envMapIntensity)}function m(d,p,b){d.ior.value=p.ior,p.sheen>0&&(d.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),d.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(d.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,d.sheenColorMapTransform)),p.sheenRoughnessMap&&(d.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,d.sheenRoughnessMapTransform))),p.clearcoat>0&&(d.clearcoat.value=p.clearcoat,d.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(d.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,d.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(d.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Yt&&d.clearcoatNormalScale.value.negate())),p.dispersion>0&&(d.dispersion.value=p.dispersion),p.iridescence>0&&(d.iridescence.value=p.iridescence,d.iridescenceIOR.value=p.iridescenceIOR,d.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(d.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,d.iridescenceMapTransform)),p.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),p.transmission>0&&(d.transmission.value=p.transmission,d.transmissionSamplerMap.value=b.texture,d.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(d.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,d.transmissionMapTransform)),d.thickness.value=p.thickness,p.thicknessMap&&(d.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=p.attenuationDistance,d.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(d.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(d.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=p.specularIntensity,d.specularColor.value.copy(p.specularColor),p.specularColorMap&&(d.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,d.specularColorMapTransform)),p.specularIntensityMap&&(d.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,d.specularIntensityMapTransform))}function v(d,p){p.matcap&&(d.matcap.value=p.matcap)}function S(d,p){const b=e.get(p).light;d.referencePosition.value.setFromMatrixPosition(b.matrixWorld),d.nearDistance.value=b.shadow.camera.near,d.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Zy(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,y){const E=y.program;i.uniformBlockBinding(b,E)}function c(b,y){let E=r[b.id];E===void 0&&(v(b),E=u(b),r[b.id]=E,b.addEventListener("dispose",d));const P=y.program;i.updateUBOMapping(b,P);const C=e.render.frame;s[b.id]!==C&&(h(b),s[b.id]=C)}function u(b){const y=f();b.__bindingPointIndex=y;const E=t.createBuffer(),P=b.__size,C=b.usage;return t.bindBuffer(t.UNIFORM_BUFFER,E),t.bufferData(t.UNIFORM_BUFFER,P,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,y,E),E}function f(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(b){const y=r[b.id],E=b.uniforms,P=b.__cache;t.bindBuffer(t.UNIFORM_BUFFER,y);for(let C=0,R=E.length;C<R;C++){const D=Array.isArray(E[C])?E[C]:[E[C]];for(let j=0,x=D.length;j<x;j++){const T=D[j];if(m(T,C,j,P)===!0){const $=T.__offset,K=Array.isArray(T.value)?T.value:[T.value];let Z=0;for(let se=0;se<K.length;se++){const z=K[se],Y=S(z);typeof z=="number"||typeof z=="boolean"?(T.__data[0]=z,t.bufferSubData(t.UNIFORM_BUFFER,$+Z,T.__data)):z.isMatrix3?(T.__data[0]=z.elements[0],T.__data[1]=z.elements[1],T.__data[2]=z.elements[2],T.__data[3]=0,T.__data[4]=z.elements[3],T.__data[5]=z.elements[4],T.__data[6]=z.elements[5],T.__data[7]=0,T.__data[8]=z.elements[6],T.__data[9]=z.elements[7],T.__data[10]=z.elements[8],T.__data[11]=0):(z.toArray(T.__data,Z),Z+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,$,T.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(b,y,E,P){const C=b.value,R=y+"_"+E;if(P[R]===void 0)return typeof C=="number"||typeof C=="boolean"?P[R]=C:P[R]=C.clone(),!0;{const D=P[R];if(typeof C=="number"||typeof C=="boolean"){if(D!==C)return P[R]=C,!0}else if(D.equals(C)===!1)return D.copy(C),!0}return!1}function v(b){const y=b.uniforms;let E=0;const P=16;for(let R=0,D=y.length;R<D;R++){const j=Array.isArray(y[R])?y[R]:[y[R]];for(let x=0,T=j.length;x<T;x++){const $=j[x],K=Array.isArray($.value)?$.value:[$.value];for(let Z=0,se=K.length;Z<se;Z++){const z=K[Z],Y=S(z),k=E%P,ge=k%Y.boundary,ve=k+ge;E+=ge,ve!==0&&P-ve<Y.storage&&(E+=P-ve),$.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=E,E+=Y.storage}}}const C=E%P;return C>0&&(E+=P-C),b.__size=E,b.__cache={},this}function S(b){const y={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(y.boundary=4,y.storage=4):b.isVector2?(y.boundary=8,y.storage=8):b.isVector3||b.isColor?(y.boundary=16,y.storage=12):b.isVector4?(y.boundary=16,y.storage=16):b.isMatrix3?(y.boundary=48,y.storage=48):b.isMatrix4?(y.boundary=64,y.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),y}function d(b){const y=b.target;y.removeEventListener("dispose",d);const E=o.indexOf(y.__bindingPointIndex);o.splice(E,1),t.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function p(){for(const b in r)t.deleteBuffer(r[b]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}class Jy{constructor(e={}){const{canvas:n=B_(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const m=new Uint32Array(4),v=new Int32Array(4);let S=null,d=null;const p=[],b=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=_n,this.toneMapping=Ti,this.toneMappingExposure=1;const y=this;let E=!1,P=0,C=0,R=null,D=-1,j=null;const x=new ot,T=new ot;let $=null;const K=new Ke(0);let Z=0,se=n.width,z=n.height,Y=1,k=null,ge=null;const ve=new ot(0,0,se,z),ye=new ot(0,0,se,z);let Ge=!1;const $e=new Yc;let ne=!1,W=!1;const re=new gt,pe=new gt,Ue=new F,De=new ot,Ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let je=!1;function w(){return R===null?Y:1}let _=i;function X(A,N){return n.getContext(A,N)}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Hc}`),n.addEventListener("webglcontextlost",oe,!1),n.addEventListener("webglcontextrestored",xe,!1),n.addEventListener("webglcontextcreationerror",Ee,!1),_===null){const N="webgl2";if(_=X(N,A),_===null)throw X(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Q,J,H,le,te,M,g,L,U,G,B,he,ce,fe,Pe,ae,_e,we,Ie,Te,Oe,Le,it,I;function Me(){Q=new iS(_),Q.init(),Le=new zy(_,Q),J=new Zx(_,Q,e,Le),H=new ky(_),J.reverseDepthBuffer&&H.buffers.depth.setReversed(!0),le=new oS(_),te=new Ty,M=new Gy(_,Q,H,te,J,Le,le),g=new Qx(y),L=new nS(y),U=new d0(_),it=new Yx(_,U),G=new rS(_,U,le,it),B=new lS(_,G,U,le),Ie=new aS(_,J,M),ae=new Jx(te),he=new Ey(y,g,L,Q,J,it,ae),ce=new jy(y,te),fe=new Ay,Pe=new Dy(Q),we=new Kx(y,g,L,H,B,h,l),_e=new Fy(y,B,J),I=new Zy(_,le,J,H),Te=new jx(_,Q,le),Oe=new sS(_,Q,le),le.programs=he.programs,y.capabilities=J,y.extensions=Q,y.properties=te,y.renderLists=fe,y.shadowMap=_e,y.state=H,y.info=le}Me();const ee=new Ky(y,_);this.xr=ee,this.getContext=function(){return _},this.getContextAttributes=function(){return _.getContextAttributes()},this.forceContextLoss=function(){const A=Q.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Q.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(A){A!==void 0&&(Y=A,this.setSize(se,z,!1))},this.getSize=function(A){return A.set(se,z)},this.setSize=function(A,N,V=!0){if(ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}se=A,z=N,n.width=Math.floor(A*Y),n.height=Math.floor(N*Y),V===!0&&(n.style.width=A+"px",n.style.height=N+"px"),this.setViewport(0,0,A,N)},this.getDrawingBufferSize=function(A){return A.set(se*Y,z*Y).floor()},this.setDrawingBufferSize=function(A,N,V){se=A,z=N,Y=V,n.width=Math.floor(A*V),n.height=Math.floor(N*V),this.setViewport(0,0,A,N)},this.getCurrentViewport=function(A){return A.copy(x)},this.getViewport=function(A){return A.copy(ve)},this.setViewport=function(A,N,V,q){A.isVector4?ve.set(A.x,A.y,A.z,A.w):ve.set(A,N,V,q),H.viewport(x.copy(ve).multiplyScalar(Y).round())},this.getScissor=function(A){return A.copy(ye)},this.setScissor=function(A,N,V,q){A.isVector4?ye.set(A.x,A.y,A.z,A.w):ye.set(A,N,V,q),H.scissor(T.copy(ye).multiplyScalar(Y).round())},this.getScissorTest=function(){return Ge},this.setScissorTest=function(A){H.setScissorTest(Ge=A)},this.setOpaqueSort=function(A){k=A},this.setTransparentSort=function(A){ge=A},this.getClearColor=function(A){return A.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor.apply(we,arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha.apply(we,arguments)},this.clear=function(A=!0,N=!0,V=!0){let q=0;if(A){let O=!1;if(R!==null){const de=R.texture.format;O=de===qc||de===Xc||de===Wc}if(O){const de=R.texture.type,Se=de===li||de===Ji||de===ys||de===Hr||de===zc||de===Vc,be=we.getClearColor(),Ae=we.getClearAlpha(),Fe=be.r,ke=be.g,Re=be.b;Se?(m[0]=Fe,m[1]=ke,m[2]=Re,m[3]=Ae,_.clearBufferuiv(_.COLOR,0,m)):(v[0]=Fe,v[1]=ke,v[2]=Re,v[3]=Ae,_.clearBufferiv(_.COLOR,0,v))}else q|=_.COLOR_BUFFER_BIT}N&&(q|=_.DEPTH_BUFFER_BIT,_.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),V&&(q|=_.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),_.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",oe,!1),n.removeEventListener("webglcontextrestored",xe,!1),n.removeEventListener("webglcontextcreationerror",Ee,!1),fe.dispose(),Pe.dispose(),te.dispose(),g.dispose(),L.dispose(),B.dispose(),it.dispose(),I.dispose(),he.dispose(),ee.dispose(),ee.removeEventListener("sessionstart",nu),ee.removeEventListener("sessionend",iu),Li.stop()};function oe(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function xe(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const A=le.autoReset,N=_e.enabled,V=_e.autoUpdate,q=_e.needsUpdate,O=_e.type;Me(),le.autoReset=A,_e.enabled=N,_e.autoUpdate=V,_e.needsUpdate=q,_e.type=O}function Ee(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ye(A){const N=A.target;N.removeEventListener("dispose",Ye),yt(N)}function yt(A){Wt(A),te.remove(A)}function Wt(A){const N=te.get(A).programs;N!==void 0&&(N.forEach(function(V){he.releaseProgram(V)}),A.isShaderMaterial&&he.releaseShaderCache(A))}this.renderBufferDirect=function(A,N,V,q,O,de){N===null&&(N=Ve);const Se=O.isMesh&&O.matrixWorld.determinant()<0,be=gp(A,N,V,q,O);H.setMaterial(q,Se);let Ae=V.index,Fe=1;if(q.wireframe===!0){if(Ae=G.getWireframeAttribute(V),Ae===void 0)return;Fe=2}const ke=V.drawRange,Re=V.attributes.position;let rt=ke.start*Fe,ht=(ke.start+ke.count)*Fe;de!==null&&(rt=Math.max(rt,de.start*Fe),ht=Math.min(ht,(de.start+de.count)*Fe)),Ae!==null?(rt=Math.max(rt,0),ht=Math.min(ht,Ae.count)):Re!=null&&(rt=Math.max(rt,0),ht=Math.min(ht,Re.count));const _t=ht-rt;if(_t<0||_t===1/0)return;it.setup(O,q,be,V,Ae);let Zt,Qe=Te;if(Ae!==null&&(Zt=U.get(Ae),Qe=Oe,Qe.setIndex(Zt)),O.isMesh)q.wireframe===!0?(H.setLineWidth(q.wireframeLinewidth*w()),Qe.setMode(_.LINES)):Qe.setMode(_.TRIANGLES);else if(O.isLine){let Ce=q.linewidth;Ce===void 0&&(Ce=1),H.setLineWidth(Ce*w()),O.isLineSegments?Qe.setMode(_.LINES):O.isLineLoop?Qe.setMode(_.LINE_LOOP):Qe.setMode(_.LINE_STRIP)}else O.isPoints?Qe.setMode(_.POINTS):O.isSprite&&Qe.setMode(_.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Qe.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Q.get("WEBGL_multi_draw"))Qe.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Ce=O._multiDrawStarts,Lt=O._multiDrawCounts,et=O._multiDrawCount,dn=Ae?U.get(Ae).bytesPerElement:1,nr=te.get(q).currentProgram.getUniforms();for(let Jt=0;Jt<et;Jt++)nr.setValue(_,"_gl_DrawID",Jt),Qe.render(Ce[Jt]/dn,Lt[Jt])}else if(O.isInstancedMesh)Qe.renderInstances(rt,_t,O.count);else if(V.isInstancedBufferGeometry){const Ce=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Lt=Math.min(V.instanceCount,Ce);Qe.renderInstances(rt,_t,Lt)}else Qe.render(rt,_t)};function Je(A,N,V){A.transparent===!0&&A.side===Nn&&A.forceSinglePass===!1?(A.side=Yt,A.needsUpdate=!0,ks(A,N,V),A.side=wi,A.needsUpdate=!0,ks(A,N,V),A.side=Nn):ks(A,N,V)}this.compile=function(A,N,V=null){V===null&&(V=A),d=Pe.get(V),d.init(N),b.push(d),V.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(d.pushLight(O),O.castShadow&&d.pushShadow(O))}),A!==V&&A.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(d.pushLight(O),O.castShadow&&d.pushShadow(O))}),d.setupLights();const q=new Set;return A.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const de=O.material;if(de)if(Array.isArray(de))for(let Se=0;Se<de.length;Se++){const be=de[Se];Je(be,V,O),q.add(be)}else Je(de,V,O),q.add(de)}),b.pop(),d=null,q},this.compileAsync=function(A,N,V=null){const q=this.compile(A,N,V);return new Promise(O=>{function de(){if(q.forEach(function(Se){te.get(Se).currentProgram.isReady()&&q.delete(Se)}),q.size===0){O(A);return}setTimeout(de,10)}Q.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let Xt=null;function Hn(A){Xt&&Xt(A)}function nu(){Li.stop()}function iu(){Li.start()}const Li=new Gd;Li.setAnimationLoop(Hn),typeof self<"u"&&Li.setContext(self),this.setAnimationLoop=function(A){Xt=A,ee.setAnimationLoop(A),A===null?Li.stop():Li.start()},ee.addEventListener("sessionstart",nu),ee.addEventListener("sessionend",iu),this.render=function(A,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),ee.enabled===!0&&ee.isPresenting===!0&&(ee.cameraAutoUpdate===!0&&ee.updateCamera(N),N=ee.getCamera()),A.isScene===!0&&A.onBeforeRender(y,A,N,R),d=Pe.get(A,b.length),d.init(N),b.push(d),pe.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),$e.setFromProjectionMatrix(pe),W=this.localClippingEnabled,ne=ae.init(this.clippingPlanes,W),S=fe.get(A,p.length),S.init(),p.push(S),ee.enabled===!0&&ee.isPresenting===!0){const de=y.xr.getDepthSensingMesh();de!==null&&xa(de,N,-1/0,y.sortObjects)}xa(A,N,0,y.sortObjects),S.finish(),y.sortObjects===!0&&S.sort(k,ge),je=ee.enabled===!1||ee.isPresenting===!1||ee.hasDepthSensing()===!1,je&&we.addToRenderList(S,A),this.info.render.frame++,ne===!0&&ae.beginShadows();const V=d.state.shadowsArray;_e.render(V,A,N),ne===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=S.opaque,O=S.transmissive;if(d.setupLights(),N.isArrayCamera){const de=N.cameras;if(O.length>0)for(let Se=0,be=de.length;Se<be;Se++){const Ae=de[Se];su(q,O,A,Ae)}je&&we.render(A);for(let Se=0,be=de.length;Se<be;Se++){const Ae=de[Se];ru(S,A,Ae,Ae.viewport)}}else O.length>0&&su(q,O,A,N),je&&we.render(A),ru(S,A,N);R!==null&&(M.updateMultisampleRenderTarget(R),M.updateRenderTargetMipmap(R)),A.isScene===!0&&A.onAfterRender(y,A,N),it.resetDefaultState(),D=-1,j=null,b.pop(),b.length>0?(d=b[b.length-1],ne===!0&&ae.setGlobalState(y.clippingPlanes,d.state.camera)):d=null,p.pop(),p.length>0?S=p[p.length-1]:S=null};function xa(A,N,V,q){if(A.visible===!1)return;if(A.layers.test(N.layers)){if(A.isGroup)V=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(N);else if(A.isLight)d.pushLight(A),A.castShadow&&d.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||$e.intersectsSprite(A)){q&&De.setFromMatrixPosition(A.matrixWorld).applyMatrix4(pe);const Se=B.update(A),be=A.material;be.visible&&S.push(A,Se,be,V,De.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||$e.intersectsObject(A))){const Se=B.update(A),be=A.material;if(q&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),De.copy(A.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),De.copy(Se.boundingSphere.center)),De.applyMatrix4(A.matrixWorld).applyMatrix4(pe)),Array.isArray(be)){const Ae=Se.groups;for(let Fe=0,ke=Ae.length;Fe<ke;Fe++){const Re=Ae[Fe],rt=be[Re.materialIndex];rt&&rt.visible&&S.push(A,Se,rt,V,De.z,Re)}}else be.visible&&S.push(A,Se,be,V,De.z,null)}}const de=A.children;for(let Se=0,be=de.length;Se<be;Se++)xa(de[Se],N,V,q)}function ru(A,N,V,q){const O=A.opaque,de=A.transmissive,Se=A.transparent;d.setupLightsView(V),ne===!0&&ae.setGlobalState(y.clippingPlanes,V),q&&H.viewport(x.copy(q)),O.length>0&&Bs(O,N,V),de.length>0&&Bs(de,N,V),Se.length>0&&Bs(Se,N,V),H.buffers.depth.setTest(!0),H.buffers.depth.setMask(!0),H.buffers.color.setMask(!0),H.setPolygonOffset(!1)}function su(A,N,V,q){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[q.id]===void 0&&(d.state.transmissionRenderTarget[q.id]=new Qi(1,1,{generateMipmaps:!0,type:Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float")?Ps:li,minFilter:qi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace}));const de=d.state.transmissionRenderTarget[q.id],Se=q.viewport||x;de.setSize(Se.z,Se.w);const be=y.getRenderTarget();y.setRenderTarget(de),y.getClearColor(K),Z=y.getClearAlpha(),Z<1&&y.setClearColor(16777215,.5),y.clear(),je&&we.render(V);const Ae=y.toneMapping;y.toneMapping=Ti;const Fe=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),d.setupLightsView(q),ne===!0&&ae.setGlobalState(y.clippingPlanes,q),Bs(A,V,q),M.updateMultisampleRenderTarget(de),M.updateRenderTargetMipmap(de),Q.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let Re=0,rt=N.length;Re<rt;Re++){const ht=N[Re],_t=ht.object,Zt=ht.geometry,Qe=ht.material,Ce=ht.group;if(Qe.side===Nn&&_t.layers.test(q.layers)){const Lt=Qe.side;Qe.side=Yt,Qe.needsUpdate=!0,ou(_t,V,q,Zt,Qe,Ce),Qe.side=Lt,Qe.needsUpdate=!0,ke=!0}}ke===!0&&(M.updateMultisampleRenderTarget(de),M.updateRenderTargetMipmap(de))}y.setRenderTarget(be),y.setClearColor(K,Z),Fe!==void 0&&(q.viewport=Fe),y.toneMapping=Ae}function Bs(A,N,V){const q=N.isScene===!0?N.overrideMaterial:null;for(let O=0,de=A.length;O<de;O++){const Se=A[O],be=Se.object,Ae=Se.geometry,Fe=q===null?Se.material:q,ke=Se.group;be.layers.test(V.layers)&&ou(be,N,V,Ae,Fe,ke)}}function ou(A,N,V,q,O,de){A.onBeforeRender(y,N,V,q,O,de),A.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),O.onBeforeRender(y,N,V,q,A,de),O.transparent===!0&&O.side===Nn&&O.forceSinglePass===!1?(O.side=Yt,O.needsUpdate=!0,y.renderBufferDirect(V,N,q,O,A,de),O.side=wi,O.needsUpdate=!0,y.renderBufferDirect(V,N,q,O,A,de),O.side=Nn):y.renderBufferDirect(V,N,q,O,A,de),A.onAfterRender(y,N,V,q,O,de)}function ks(A,N,V){N.isScene!==!0&&(N=Ve);const q=te.get(A),O=d.state.lights,de=d.state.shadowsArray,Se=O.state.version,be=he.getParameters(A,O.state,de,N,V),Ae=he.getProgramCacheKey(be);let Fe=q.programs;q.environment=A.isMeshStandardMaterial?N.environment:null,q.fog=N.fog,q.envMap=(A.isMeshStandardMaterial?L:g).get(A.envMap||q.environment),q.envMapRotation=q.environment!==null&&A.envMap===null?N.environmentRotation:A.envMapRotation,Fe===void 0&&(A.addEventListener("dispose",Ye),Fe=new Map,q.programs=Fe);let ke=Fe.get(Ae);if(ke!==void 0){if(q.currentProgram===ke&&q.lightsStateVersion===Se)return lu(A,be),ke}else be.uniforms=he.getUniforms(A),A.onBeforeCompile(be,y),ke=he.acquireProgram(be,Ae),Fe.set(Ae,ke),q.uniforms=be.uniforms;const Re=q.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Re.clippingPlanes=ae.uniform),lu(A,be),q.needsLights=vp(A),q.lightsStateVersion=Se,q.needsLights&&(Re.ambientLightColor.value=O.state.ambient,Re.lightProbe.value=O.state.probe,Re.directionalLights.value=O.state.directional,Re.directionalLightShadows.value=O.state.directionalShadow,Re.spotLights.value=O.state.spot,Re.spotLightShadows.value=O.state.spotShadow,Re.rectAreaLights.value=O.state.rectArea,Re.ltc_1.value=O.state.rectAreaLTC1,Re.ltc_2.value=O.state.rectAreaLTC2,Re.pointLights.value=O.state.point,Re.pointLightShadows.value=O.state.pointShadow,Re.hemisphereLights.value=O.state.hemi,Re.directionalShadowMap.value=O.state.directionalShadowMap,Re.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Re.spotShadowMap.value=O.state.spotShadowMap,Re.spotLightMatrix.value=O.state.spotLightMatrix,Re.spotLightMap.value=O.state.spotLightMap,Re.pointShadowMap.value=O.state.pointShadowMap,Re.pointShadowMatrix.value=O.state.pointShadowMatrix),q.currentProgram=ke,q.uniformsList=null,ke}function au(A){if(A.uniformsList===null){const N=A.currentProgram.getUniforms();A.uniformsList=Ao.seqWithValue(N.seq,A.uniforms)}return A.uniformsList}function lu(A,N){const V=te.get(A);V.outputColorSpace=N.outputColorSpace,V.batching=N.batching,V.batchingColor=N.batchingColor,V.instancing=N.instancing,V.instancingColor=N.instancingColor,V.instancingMorph=N.instancingMorph,V.skinning=N.skinning,V.morphTargets=N.morphTargets,V.morphNormals=N.morphNormals,V.morphColors=N.morphColors,V.morphTargetsCount=N.morphTargetsCount,V.numClippingPlanes=N.numClippingPlanes,V.numIntersection=N.numClipIntersection,V.vertexAlphas=N.vertexAlphas,V.vertexTangents=N.vertexTangents,V.toneMapping=N.toneMapping}function gp(A,N,V,q,O){N.isScene!==!0&&(N=Ve),M.resetTextureUnits();const de=N.fog,Se=q.isMeshStandardMaterial?N.environment:null,be=R===null?y.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Ci,Ae=(q.isMeshStandardMaterial?L:g).get(q.envMap||Se),Fe=q.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,ke=!!V.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Re=!!V.morphAttributes.position,rt=!!V.morphAttributes.normal,ht=!!V.morphAttributes.color;let _t=Ti;q.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(_t=y.toneMapping);const Zt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Qe=Zt!==void 0?Zt.length:0,Ce=te.get(q),Lt=d.state.lights;if(ne===!0&&(W===!0||A!==j)){const an=A===j&&q.id===D;ae.setState(q,A,an)}let et=!1;q.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==Lt.state.version||Ce.outputColorSpace!==be||O.isBatchedMesh&&Ce.batching===!1||!O.isBatchedMesh&&Ce.batching===!0||O.isBatchedMesh&&Ce.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Ce.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Ce.instancing===!1||!O.isInstancedMesh&&Ce.instancing===!0||O.isSkinnedMesh&&Ce.skinning===!1||!O.isSkinnedMesh&&Ce.skinning===!0||O.isInstancedMesh&&Ce.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ce.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ce.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ce.instancingMorph===!1&&O.morphTexture!==null||Ce.envMap!==Ae||q.fog===!0&&Ce.fog!==de||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==ae.numPlanes||Ce.numIntersection!==ae.numIntersection)||Ce.vertexAlphas!==Fe||Ce.vertexTangents!==ke||Ce.morphTargets!==Re||Ce.morphNormals!==rt||Ce.morphColors!==ht||Ce.toneMapping!==_t||Ce.morphTargetsCount!==Qe)&&(et=!0):(et=!0,Ce.__version=q.version);let dn=Ce.currentProgram;et===!0&&(dn=ks(q,N,O));let nr=!1,Jt=!1,Sa=!1;const St=dn.getUniforms(),hi=Ce.uniforms;if(H.useProgram(dn.program)&&(nr=!0,Jt=!0,Sa=!0),q.id!==D&&(D=q.id,Jt=!0),nr||j!==A){J.reverseDepthBuffer?(re.copy(A.projectionMatrix),H_(re),G_(re),St.setValue(_,"projectionMatrix",re)):St.setValue(_,"projectionMatrix",A.projectionMatrix),St.setValue(_,"viewMatrix",A.matrixWorldInverse);const an=St.map.cameraPosition;an!==void 0&&an.setValue(_,Ue.setFromMatrixPosition(A.matrixWorld)),J.logarithmicDepthBuffer&&St.setValue(_,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&St.setValue(_,"isOrthographic",A.isOrthographicCamera===!0),j!==A&&(j=A,Jt=!0,Sa=!0)}if(O.isSkinnedMesh){St.setOptional(_,O,"bindMatrix"),St.setOptional(_,O,"bindMatrixInverse");const an=O.skeleton;an&&(an.boneTexture===null&&an.computeBoneTexture(),St.setValue(_,"boneTexture",an.boneTexture,M))}O.isBatchedMesh&&(St.setOptional(_,O,"batchingTexture"),St.setValue(_,"batchingTexture",O._matricesTexture,M),St.setOptional(_,O,"batchingIdTexture"),St.setValue(_,"batchingIdTexture",O._indirectTexture,M),St.setOptional(_,O,"batchingColorTexture"),O._colorsTexture!==null&&St.setValue(_,"batchingColorTexture",O._colorsTexture,M));const ya=V.morphAttributes;if((ya.position!==void 0||ya.normal!==void 0||ya.color!==void 0)&&Ie.update(O,V,dn),(Jt||Ce.receiveShadow!==O.receiveShadow)&&(Ce.receiveShadow=O.receiveShadow,St.setValue(_,"receiveShadow",O.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(hi.envMap.value=Ae,hi.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&N.environment!==null&&(hi.envMapIntensity.value=N.environmentIntensity),Jt&&(St.setValue(_,"toneMappingExposure",y.toneMappingExposure),Ce.needsLights&&_p(hi,Sa),de&&q.fog===!0&&ce.refreshFogUniforms(hi,de),ce.refreshMaterialUniforms(hi,q,Y,z,d.state.transmissionRenderTarget[A.id]),Ao.upload(_,au(Ce),hi,M)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Ao.upload(_,au(Ce),hi,M),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&St.setValue(_,"center",O.center),St.setValue(_,"modelViewMatrix",O.modelViewMatrix),St.setValue(_,"normalMatrix",O.normalMatrix),St.setValue(_,"modelMatrix",O.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const an=q.uniformsGroups;for(let Ma=0,xp=an.length;Ma<xp;Ma++){const cu=an[Ma];I.update(cu,dn),I.bind(cu,dn)}}return dn}function _p(A,N){A.ambientLightColor.needsUpdate=N,A.lightProbe.needsUpdate=N,A.directionalLights.needsUpdate=N,A.directionalLightShadows.needsUpdate=N,A.pointLights.needsUpdate=N,A.pointLightShadows.needsUpdate=N,A.spotLights.needsUpdate=N,A.spotLightShadows.needsUpdate=N,A.rectAreaLights.needsUpdate=N,A.hemisphereLights.needsUpdate=N}function vp(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(A,N,V){te.get(A.texture).__webglTexture=N,te.get(A.depthTexture).__webglTexture=V;const q=te.get(A);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=V===void 0,q.__autoAllocateDepthBuffer||Q.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,N){const V=te.get(A);V.__webglFramebuffer=N,V.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(A,N=0,V=0){R=A,P=N,C=V;let q=!0,O=null,de=!1,Se=!1;if(A){const Ae=te.get(A);if(Ae.__useDefaultFramebuffer!==void 0)H.bindFramebuffer(_.FRAMEBUFFER,null),q=!1;else if(Ae.__webglFramebuffer===void 0)M.setupRenderTarget(A);else if(Ae.__hasExternalTextures)M.rebindTextures(A,te.get(A.texture).__webglTexture,te.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Re=A.depthTexture;if(Ae.__boundDepthTexture!==Re){if(Re!==null&&te.has(Re)&&(A.width!==Re.image.width||A.height!==Re.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");M.setupDepthRenderbuffer(A)}}const Fe=A.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(Se=!0);const ke=te.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(ke[N])?O=ke[N][V]:O=ke[N],de=!0):A.samples>0&&M.useMultisampledRTT(A)===!1?O=te.get(A).__webglMultisampledFramebuffer:Array.isArray(ke)?O=ke[V]:O=ke,x.copy(A.viewport),T.copy(A.scissor),$=A.scissorTest}else x.copy(ve).multiplyScalar(Y).floor(),T.copy(ye).multiplyScalar(Y).floor(),$=Ge;if(H.bindFramebuffer(_.FRAMEBUFFER,O)&&q&&H.drawBuffers(A,O),H.viewport(x),H.scissor(T),H.setScissorTest($),de){const Ae=te.get(A.texture);_.framebufferTexture2D(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_CUBE_MAP_POSITIVE_X+N,Ae.__webglTexture,V)}else if(Se){const Ae=te.get(A.texture),Fe=N||0;_.framebufferTextureLayer(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,Ae.__webglTexture,V||0,Fe)}D=-1},this.readRenderTargetPixels=function(A,N,V,q,O,de,Se){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=te.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Se!==void 0&&(be=be[Se]),be){H.bindFramebuffer(_.FRAMEBUFFER,be);try{const Ae=A.texture,Fe=Ae.format,ke=Ae.type;if(!J.textureFormatReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!J.textureTypeReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=A.width-q&&V>=0&&V<=A.height-O&&_.readPixels(N,V,q,O,Le.convert(Fe),Le.convert(ke),de)}finally{const Ae=R!==null?te.get(R).__webglFramebuffer:null;H.bindFramebuffer(_.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(A,N,V,q,O,de,Se){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=te.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Se!==void 0&&(be=be[Se]),be){const Ae=A.texture,Fe=Ae.format,ke=Ae.type;if(!J.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!J.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=A.width-q&&V>=0&&V<=A.height-O){H.bindFramebuffer(_.FRAMEBUFFER,be);const Re=_.createBuffer();_.bindBuffer(_.PIXEL_PACK_BUFFER,Re),_.bufferData(_.PIXEL_PACK_BUFFER,de.byteLength,_.STREAM_READ),_.readPixels(N,V,q,O,Le.convert(Fe),Le.convert(ke),0);const rt=R!==null?te.get(R).__webglFramebuffer:null;H.bindFramebuffer(_.FRAMEBUFFER,rt);const ht=_.fenceSync(_.SYNC_GPU_COMMANDS_COMPLETE,0);return _.flush(),await k_(_,ht,4),_.bindBuffer(_.PIXEL_PACK_BUFFER,Re),_.getBufferSubData(_.PIXEL_PACK_BUFFER,0,de),_.deleteBuffer(Re),_.deleteSync(ht),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,N=null,V=0){A.isTexture!==!0&&(bo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,A=arguments[1]);const q=Math.pow(2,-V),O=Math.floor(A.image.width*q),de=Math.floor(A.image.height*q),Se=N!==null?N.x:0,be=N!==null?N.y:0;M.setTexture2D(A,0),_.copyTexSubImage2D(_.TEXTURE_2D,V,0,0,Se,be,O,de),H.unbindTexture()},this.copyTextureToTexture=function(A,N,V=null,q=null,O=0){A.isTexture!==!0&&(bo("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,A=arguments[1],N=arguments[2],O=arguments[3]||0,V=null);let de,Se,be,Ae,Fe,ke;V!==null?(de=V.max.x-V.min.x,Se=V.max.y-V.min.y,be=V.min.x,Ae=V.min.y):(de=A.image.width,Se=A.image.height,be=0,Ae=0),q!==null?(Fe=q.x,ke=q.y):(Fe=0,ke=0);const Re=Le.convert(N.format),rt=Le.convert(N.type);M.setTexture2D(N,0),_.pixelStorei(_.UNPACK_FLIP_Y_WEBGL,N.flipY),_.pixelStorei(_.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),_.pixelStorei(_.UNPACK_ALIGNMENT,N.unpackAlignment);const ht=_.getParameter(_.UNPACK_ROW_LENGTH),_t=_.getParameter(_.UNPACK_IMAGE_HEIGHT),Zt=_.getParameter(_.UNPACK_SKIP_PIXELS),Qe=_.getParameter(_.UNPACK_SKIP_ROWS),Ce=_.getParameter(_.UNPACK_SKIP_IMAGES),Lt=A.isCompressedTexture?A.mipmaps[O]:A.image;_.pixelStorei(_.UNPACK_ROW_LENGTH,Lt.width),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,Lt.height),_.pixelStorei(_.UNPACK_SKIP_PIXELS,be),_.pixelStorei(_.UNPACK_SKIP_ROWS,Ae),A.isDataTexture?_.texSubImage2D(_.TEXTURE_2D,O,Fe,ke,de,Se,Re,rt,Lt.data):A.isCompressedTexture?_.compressedTexSubImage2D(_.TEXTURE_2D,O,Fe,ke,Lt.width,Lt.height,Re,Lt.data):_.texSubImage2D(_.TEXTURE_2D,O,Fe,ke,de,Se,Re,rt,Lt),_.pixelStorei(_.UNPACK_ROW_LENGTH,ht),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,_t),_.pixelStorei(_.UNPACK_SKIP_PIXELS,Zt),_.pixelStorei(_.UNPACK_SKIP_ROWS,Qe),_.pixelStorei(_.UNPACK_SKIP_IMAGES,Ce),O===0&&N.generateMipmaps&&_.generateMipmap(_.TEXTURE_2D),H.unbindTexture()},this.copyTextureToTexture3D=function(A,N,V=null,q=null,O=0){A.isTexture!==!0&&(bo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,q=arguments[1]||null,A=arguments[2],N=arguments[3],O=arguments[4]||0);let de,Se,be,Ae,Fe,ke,Re,rt,ht;const _t=A.isCompressedTexture?A.mipmaps[O]:A.image;V!==null?(de=V.max.x-V.min.x,Se=V.max.y-V.min.y,be=V.max.z-V.min.z,Ae=V.min.x,Fe=V.min.y,ke=V.min.z):(de=_t.width,Se=_t.height,be=_t.depth,Ae=0,Fe=0,ke=0),q!==null?(Re=q.x,rt=q.y,ht=q.z):(Re=0,rt=0,ht=0);const Zt=Le.convert(N.format),Qe=Le.convert(N.type);let Ce;if(N.isData3DTexture)M.setTexture3D(N,0),Ce=_.TEXTURE_3D;else if(N.isDataArrayTexture||N.isCompressedArrayTexture)M.setTexture2DArray(N,0),Ce=_.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}_.pixelStorei(_.UNPACK_FLIP_Y_WEBGL,N.flipY),_.pixelStorei(_.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),_.pixelStorei(_.UNPACK_ALIGNMENT,N.unpackAlignment);const Lt=_.getParameter(_.UNPACK_ROW_LENGTH),et=_.getParameter(_.UNPACK_IMAGE_HEIGHT),dn=_.getParameter(_.UNPACK_SKIP_PIXELS),nr=_.getParameter(_.UNPACK_SKIP_ROWS),Jt=_.getParameter(_.UNPACK_SKIP_IMAGES);_.pixelStorei(_.UNPACK_ROW_LENGTH,_t.width),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,_t.height),_.pixelStorei(_.UNPACK_SKIP_PIXELS,Ae),_.pixelStorei(_.UNPACK_SKIP_ROWS,Fe),_.pixelStorei(_.UNPACK_SKIP_IMAGES,ke),A.isDataTexture||A.isData3DTexture?_.texSubImage3D(Ce,O,Re,rt,ht,de,Se,be,Zt,Qe,_t.data):N.isCompressedArrayTexture?_.compressedTexSubImage3D(Ce,O,Re,rt,ht,de,Se,be,Zt,_t.data):_.texSubImage3D(Ce,O,Re,rt,ht,de,Se,be,Zt,Qe,_t),_.pixelStorei(_.UNPACK_ROW_LENGTH,Lt),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,et),_.pixelStorei(_.UNPACK_SKIP_PIXELS,dn),_.pixelStorei(_.UNPACK_SKIP_ROWS,nr),_.pixelStorei(_.UNPACK_SKIP_IMAGES,Jt),O===0&&N.generateMipmaps&&_.generateMipmap(Ce),H.unbindTexture()},this.initRenderTarget=function(A){te.get(A).__webglFramebuffer===void 0&&M.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?M.setTextureCube(A,0):A.isData3DTexture?M.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?M.setTexture2DArray(A,0):M.setTexture2D(A,0),H.unbindTexture()},this.resetState=function(){P=0,C=0,R=null,H.reset(),it.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===$c?"display-p3":"srgb",n.unpackColorSpace=nt.workingColorSpace===pa?"display-p3":"srgb"}}class Zc{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ke(e),this.density=n}clone(){return new Zc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Qy extends It{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bn,this.environmentIntensity=1,this.environmentRotation=new Bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Jc extends ui{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),c(i),u(),this.setAttribute("position",new on(s,3)),this.setAttribute("normal",new on(s.slice(),3)),this.setAttribute("uv",new on(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(b){const y=new F,E=new F,P=new F;for(let C=0;C<n.length;C+=3)m(n[C+0],y),m(n[C+1],E),m(n[C+2],P),l(y,E,P,b)}function l(b,y,E,P){const C=P+1,R=[];for(let D=0;D<=C;D++){R[D]=[];const j=b.clone().lerp(E,D/C),x=y.clone().lerp(E,D/C),T=C-D;for(let $=0;$<=T;$++)$===0&&D===C?R[D][$]=j:R[D][$]=j.clone().lerp(x,$/T)}for(let D=0;D<C;D++)for(let j=0;j<2*(C-D)-1;j++){const x=Math.floor(j/2);j%2===0?(h(R[D][x+1]),h(R[D+1][x]),h(R[D][x])):(h(R[D][x+1]),h(R[D+1][x+1]),h(R[D+1][x]))}}function c(b){const y=new F;for(let E=0;E<s.length;E+=3)y.x=s[E+0],y.y=s[E+1],y.z=s[E+2],y.normalize().multiplyScalar(b),s[E+0]=y.x,s[E+1]=y.y,s[E+2]=y.z}function u(){const b=new F;for(let y=0;y<s.length;y+=3){b.x=s[y+0],b.y=s[y+1],b.z=s[y+2];const E=d(b)/2/Math.PI+.5,P=p(b)/Math.PI+.5;o.push(E,1-P)}v(),f()}function f(){for(let b=0;b<o.length;b+=6){const y=o[b+0],E=o[b+2],P=o[b+4],C=Math.max(y,E,P),R=Math.min(y,E,P);C>.9&&R<.1&&(y<.2&&(o[b+0]+=1),E<.2&&(o[b+2]+=1),P<.2&&(o[b+4]+=1))}}function h(b){s.push(b.x,b.y,b.z)}function m(b,y){const E=b*3;y.x=e[E+0],y.y=e[E+1],y.z=e[E+2]}function v(){const b=new F,y=new F,E=new F,P=new F,C=new qe,R=new qe,D=new qe;for(let j=0,x=0;j<s.length;j+=9,x+=6){b.set(s[j+0],s[j+1],s[j+2]),y.set(s[j+3],s[j+4],s[j+5]),E.set(s[j+6],s[j+7],s[j+8]),C.set(o[x+0],o[x+1]),R.set(o[x+2],o[x+3]),D.set(o[x+4],o[x+5]),P.copy(b).add(y).add(E).divideScalar(3);const T=d(P);S(C,x+0,b,T),S(R,x+2,y,T),S(D,x+4,E,T)}}function S(b,y,E,P){P<0&&b.x===1&&(o[y]=b.x-1),E.x===0&&E.z===0&&(o[y]=P/2/Math.PI+.5)}function d(b){return Math.atan2(b.z,-b.x)}function p(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jc(e.vertices,e.indices,e.radius,e.details)}}class Qc extends Jc{constructor(e=1,n=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,n),this.type="OctahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Qc(e.radius,e.detail)}}class eu extends ui{constructor(e=.5,n=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],c=[],u=[];let f=e;const h=(n-e)/r,m=new F,v=new qe;for(let S=0;S<=r;S++){for(let d=0;d<=i;d++){const p=s+d/i*o;m.x=f*Math.cos(p),m.y=f*Math.sin(p),l.push(m.x,m.y,m.z),c.push(0,0,1),v.x=(m.x/n+1)/2,v.y=(m.y/n+1)/2,u.push(v.x,v.y)}f+=h}for(let S=0;S<r;S++){const d=S*(i+1);for(let p=0;p<i;p++){const b=p+d,y=b,E=b+i+1,P=b+i+2,C=b+1;a.push(y,E,C),a.push(E,P,C)}}this.setIndex(a),this.setAttribute("position",new on(l,3)),this.setAttribute("normal",new on(c,3)),this.setAttribute("uv",new on(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new eu(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class hl extends Us{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cd,this.normalScale=new qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class tu extends It{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ke(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class eM extends tu{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ke(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const dl=new gt,Gf=new F,zf=new F;class Kd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qe(512,512),this.map=null,this.mapPass=null,this.matrix=new gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yc,this._frameExtents=new qe(1,1),this._viewportCount=1,this._viewports=[new ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Gf.setFromMatrixPosition(e.matrixWorld),n.position.copy(Gf),zf.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(zf),n.updateMatrixWorld(),dl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(dl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Vf=new gt,ts=new F,pl=new F;class tM extends Kd{constructor(){super(new tn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new qe(4,2),this._viewportCount=6,this._viewports=[new ot(2,1,1,1),new ot(0,1,1,1),new ot(3,1,1,1),new ot(1,1,1,1),new ot(3,0,1,1),new ot(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),ts.setFromMatrixPosition(e.matrixWorld),i.position.copy(ts),pl.copy(i.position),pl.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(pl),i.updateMatrixWorld(),r.makeTranslation(-ts.x,-ts.y,-ts.z),Vf.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vf)}}class nM extends tu{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new tM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class iM extends Kd{constructor(){super(new zd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class rM extends tu{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.shadow=new iM}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Hc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Hc);const sM=Wr({__name:"ArenaCanvas",props:{accent:{}},setup(t){const e=t,n=En();let i,r,s,o,a=0,l;const c=[];function u(v,S,d,p){const b=new zt(new er(v,S,d),new hl({color:p,roughness:.88,metalness:.08}));return r==null||r.add(b),b}function f(){if(!n.value)return;i=new Jy({canvas:n.value,antialias:!1,alpha:!0,powerPreference:"high-performance"}),i.setPixelRatio(Math.min(window.devicePixelRatio,1.35)),i.outputColorSpace=_n,r=new Qy,r.background=new Ke("#100915"),r.fog=new Zc("#1d101f",.028),s=new tn(42,1,.1,200),s.position.set(0,7.2,19),s.lookAt(0,2.1,-5),r.add(new eM("#5d78aa","#4b180f",1.25));const v=new rM("#d9e8ff",2.4);v.position.set(-8,12,8),r.add(v),l=new nM(e.accent,45,24,1.4),l.position.set(0,5,-4),r.add(l);const S=new zt(new Ns(36,30,16,10),new hl({color:"#321b20",roughness:.72,metalness:.05}));S.rotation.x=-Math.PI/2,S.position.set(0,-1.4,-3),r.add(S);const d=new zt(new eu(4.8,7.6,64),new hl({color:"#9b6b3c",roughness:1,side:Nn}));d.rotation.x=-Math.PI/2,d.position.set(0,-1.36,.3),r.add(d);for(let y=-6;y<=6;y+=1)u(.12,.04,20,y%2===0?7947816:5976100).position.set(y*1.24,-1.29,-2);for(const y of[-1,1])for(let E=0;E<4;E+=1){const P=u(.72,7.3,.72,3876664);P.position.set(y*(7.4+E*2.6),2.1,-8-E*1.1),u(1.12,.48,1.12,5782095).position.set(P.position.x,5.7,P.position.z)}const p=new Xo({color:1117464}),b=new er(.34,.6,.34);for(let y=0;y<4;y+=1)for(let E=-23;E<=23;E+=1){const P=new zt(b,p);P.position.set(E*.54,.15+y*.58+Math.sin(E*2.7+y)*.12,-10.5-y),P.scale.y=.65+(E*E+y*7)%9/16,r.add(P),(E+y)%9===0&&c.push(P)}for(const y of[-1,1]){u(.62,.7,.62,2761257).position.set(y*6.5,.1,-4.5);const P=new zt(new Qc(.45,0),new Xo({color:y<0?16735268:16761147}));P.position.set(y*6.5,.9,-4.5),r.add(P),c.push(P)}o=new ResizeObserver(()=>h()),o.observe(n.value),h(),m()}function h(){if(!n.value||!i||!s)return;const{clientWidth:v,clientHeight:S}=n.value;i.setSize(v,S,!1),s.aspect=v/Math.max(1,S),s.updateProjectionMatrix()}function m(){if(!i||!r||!s)return;const v=performance.now()*.001;c.forEach((S,d)=>{S.position.y+=Math.sin(v*(2.4+d%4*.25)+d)*.0015,d>=c.length-2&&(S.scale.y=.75+Math.sin(v*7+d)*.24,S.rotation.y+=.018)}),l&&(l.intensity=39+Math.sin(v*2.7)*7),i.render(r,s),a=requestAnimationFrame(m)}return Cr(()=>e.accent,v=>l==null?void 0:l.color.set(v)),Rs(f),la(()=>{cancelAnimationFrame(a),o==null||o.disconnect(),r==null||r.traverse(v=>{v instanceof zt&&(v.geometry.dispose(),(Array.isArray(v.material)?v.material:[v.material]).forEach(d=>d.dispose()))}),i==null||i.dispose()}),(v,S)=>(Ne(),He("canvas",{ref_key:"canvas",ref:n,class:"arena-canvas","aria-hidden":"true"},null,512))}}),oM={0:1,20:.88,50:.74,75:.58};function cn(t){const e=t.maxHealth>0?t.health/t.maxHealth:0;return e<=.25?75:e<=.5?50:e<=.8?20:0}function qo(t){return oM[cn(t)]}function Os(t){return t===75?1:t===50?.68:t===20?.32:0}function aM(t){return t===75?{interval:.36,amount:3.8}:t===50?{interval:.82,amount:2.55}:t===20?{interval:1.7,amount:1.6}:null}const Er={asset:"turtle-shell-finisher.png",columns:4,rows:4,width:54,duration:3.85,captureAt:.9,impactAt:2.4,frames:[{at:0,label:"WRIST CATCH"},{at:.16,label:"CAUGHT!"},{at:.32,label:"PULL IN"},{at:.5,label:"SHELL TURN"},{at:.7,label:"TRAPPED"},{at:.9,label:"SHELL GRIP!"},{at:1.15,label:"RETRACT"},{at:1.38,label:"LIFT"},{at:1.65,label:"BRACE YOURSELF"},{at:2.1,label:"DOWNWARD SLAM"},{at:2.4,label:"SHELL SHOCK!"},{at:2.58,label:"CRUSHED"},{at:2.82,label:"RELEASE"},{at:3.04,label:"COLLAPSE"},{at:3.26,label:"SILENCE"},{at:3.5,label:"FINISHED"}],exit:{player:.34,opponent:.73}};function ga(t,e=Er.frames.map(n=>n.at)){return t.map((n,i)=>({at:e[i],label:n}))}const wo={asset:"wormy-finisher-scale-v2.png",columns:4,rows:4,width:56,duration:3.85,captureAt:.9,impactAt:2.1,description:"Wormy coils around the player, fires green lightning from his eyes, then uncoils as the player collapses",frames:ga(["TAIL SNARE","ANKLE LOCK","NO ESCAPE","COILING","TRAPPED","COIL CRUSH!","INCOHERENT RANT","EYES IGNITE","THEY ARE WATCHING","CONSPIRACY SHOCK!","EYE LIGHTNING","OVERLOAD","UNCOIL","COLLAPSE","SILENCE","FINISHED"]),exit:{player:.36,opponent:.74},contact:{capture:{x:.31,y:38},impact:{x:.3,y:40}}},Ro={asset:"baxter-finisher.png",columns:4,rows:4,width:54,duration:3.85,captureAt:.9,impactAt:2.1,description:"Baxter grabs the player by the collar, jabs him with a bottle and delivers an overhead bottle strike before releasing him",frames:ga(["COLLAR GRAB","CAUGHT!","PULL IN","STRUGGLE","BAD BUSINESS","BOTTLE JAB!","WINDED","DRUNKEN STAGGER","LAST ORDERS","LAST CALL!","BOTTLE IMPACT","FOLLOW THROUGH","RELEASE","COLLAPSE","STEADY NOW","BOARDROOM TEARS"]),exit:{player:.32,opponent:.71},contact:{capture:{x:.35,y:36},impact:{x:.31,y:48}}},_c={asset:"witch-finisher.png",columns:4,rows:4,width:54,duration:3.85,captureAt:.9,impactAt:2.4,description:"The Shadow Witch vanishes, materializes next to the player, catches his chin and slaps him before teleporting away",frames:ga(["INTO SHADOW","VANISH","THE RIFT","MATERIALIZE","CHIN CATCH","FROZEN","DRAW BACK","BRACE YOURSELF","THE WIND-UP","PALM SWING","SHADOW SLAP!","REELING","DISSOLVE","COLLAPSE","GONE","RETURN FROM SHADOW"]),exit:{player:.34,opponent:.78},contact:{capture:{x:.35,y:47},impact:{x:.32,y:49}}},vc={asset:"giant-finisher.png",columns:4,rows:4,width:90,duration:3.85,captureAt:.9,impactAt:2.1,nonGraphic:!0,description:"Enormous monster feet surround the player before a sagging diaper drops, hides him, then releases him onto the floor",frames:ga(["HUGE FOOTSTEPS","BOXED IN","OFF BALANCE","NOWHERE TO GO","KNEES BEND","BRACE!","LOOK OUT BELOW","THE BIG DROP","DESCENDING","DIAPER DISASTER!","GROUND SHAKES","SIT TIGHT","LIFT OFF","SLIDE OUT","FLAT OUT","FINISHED"]),exit:{player:.3,opponent:.6},contact:{capture:{x:.46,y:25},impact:{x:.44,y:12}}},Vr={brutus:Er,wormy:wo,baxter:Ro,witch:_c,giant:vc};function lM(t,e){let n=0;for(let i=1;i<t.frames.length&&!(e+1e-6<t.frames[i].at);i++)n=i;return{index:n,label:t.frames[n].label,position:`${n%t.columns*100/(t.columns-1)}% ${Math.floor(n/t.columns)*100/(t.rows-1)}%`}}function $o(t,e){const n=t.width/2;return Math.max(n+1,Math.min(99-n,e-10))}function Yd(t){return t.hits.reduce((e,n)=>e+n.damage,0)}const fi={giant:{name:"DIAPER DISASTER",duration:vc.duration,cooldown:19,initialCooldown:8,range:20,holdGap:12,knockback:18,hits:[{at:vc.impactAt,damage:60,label:"DIAPER DISASTER!"}],frames:[{at:0,player:"66.667% 100%",opponent:"0 100%",label:"LOOK OUT BELOW"}]},brutus:{name:"SHELL SHOCK",duration:Er.duration,cooldown:13,initialCooldown:5,range:16,holdGap:5,knockback:13,hits:[{at:Er.captureAt,damage:10,label:"SHELL GRIP!"},{at:Er.impactAt,damage:24,label:"SHELL SHOCK!"}],frames:[{at:0,player:"66.667% 100%",opponent:"66.667% 66.667%",label:"CAUGHT!"},{at:.45,player:"66.667% 100%",opponent:"66.667% 33.333%",label:"SHELL GRIP"},{at:1.55,player:"66.667% 100%",opponent:"100% 66.667%",label:"BRACE YOURSELF"},{at:Er.impactAt,player:"100% 100%",opponent:"66.667% 33.333%",label:"SHELL SHOCK!"},{at:2.82,player:"100% 100%",opponent:"0 0",label:"RELEASE"}]},pudger:{name:"VELVET AVALANCHE",duration:2.5,cooldown:15,initialCooldown:6,range:17,holdGap:9,knockback:14,hits:[{at:.9,damage:12,label:"BELLY ROLL!"},{at:1.65,damage:25,label:"CRUSH!"}],frames:[{at:0,player:"66.667% 100%",opponent:"0 33.333%",label:"ROLLING IN"},{at:.5,player:"66.667% 100%",opponent:"33.333% 33.333%",label:"BELLY ROLL"},{at:.9,player:"100% 100%",opponent:"33.333% 33.333%",label:"PINNED!"},{at:1.65,player:"100% 100%",opponent:"0 33.333%",label:"CRUSH!"},{at:2.1,player:"66.667% 100%",opponent:"0 0",label:"RELEASE"}]},wormy:{name:"CONSPIRACY CORKSCREW",duration:wo.duration,cooldown:22,initialCooldown:8,range:18,holdGap:10,knockback:13,hits:[{at:wo.captureAt,damage:14,label:"COIL CRUSH!"},{at:wo.impactAt,damage:25,label:"CONSPIRACY SHOCK!"}],frames:[{at:0,player:"66.667% 100%",opponent:"0 0",label:"BURROWING IN"},{at:.45,player:"66.667% 100%",opponent:"33.333% 0",label:"UNSOLICITED CLAIMS"},{at:.8,player:"33.333% 33.333%",opponent:"33.333% 0",label:"INCOHERENT RANT!"},{at:1.35,player:"33.333% 33.333%",opponent:"66.667% 33.333%",label:"WIGGLE!"},{at:1.8,player:"100% 100%",opponent:"66.667% 33.333%",label:"CORKSCREW CRUSH!"},{at:2.25,player:"100% 100%",opponent:"100% 66.667%",label:"RELEASE"}]},baxter:{name:"BOARDROOM BREAKDOWN",duration:Ro.duration,cooldown:17,initialCooldown:7,range:18,holdGap:10,knockback:12,hits:[{at:Ro.captureAt,damage:8,label:"BOTTLE JAB!"},{at:Ro.impactAt,damage:32,label:"LAST CALL!"}],frames:[{at:0,player:"66.667% 100%",opponent:"66.667% 33.333%",label:"YOU'RE FIRED!"},{at:.7,player:"66.667% 100%",opponent:"100% 33.333%",label:"BOTTLE JAB!"},{at:1.25,player:"66.667% 100%",opponent:"66.667% 66.667%",label:"BOARDROOM RAGE"},{at:2.1,player:"100% 100%",opponent:"100% 33.333%",label:"LAST CALL!"},{at:2.65,player:"100% 100%",opponent:"100% 66.667%",label:"RELEASE"}]},witch:{name:"SHADOW SLAP",duration:_c.duration,cooldown:19,initialCooldown:8,range:20,holdGap:12,knockback:18,hits:[{at:_c.impactAt,damage:60,label:"SHADOW SLAP!"}],frames:[{at:0,player:"66.667% 100%",opponent:"0 0",label:"VANISH"},{at:.55,player:"66.667% 100%",opponent:"33.333% 33.333%",label:"TELEPORT"},{at:1.05,player:"33.333% 33.333%",opponent:"66.667% 33.333%",label:"SHADOW SLAP!"},{at:1.55,player:"100% 100%",opponent:"100% 33.333%",label:"VANISH"},{at:2.15,player:"100% 100%",opponent:"100% 66.667%",label:"RELEASE"}]}};function cM(t,e){const n=fi[t].frames;return[...n].reverse().find(i=>e>=i.at)??n[0]}const Qn={duration:1.2,cooldown:10,healing:12,sobInterval:1.4};function uM(t){return cn(t)>=50?"HUNGOVER":"DRUNK"}function _a(t){return(t.phase==="playing"||t.phase==="paused")&&t.opponent.health>0&&t.player.health>0&&t.opponentDrinkCooldown>0&&t.opponentDrinkTimer===0}const Tr={attackDurationScale:1.75,damageScale:.75,attackGap:.95,attackGapVariation:.4,movementScale:.72};function Wf(t){const n={"high-punch":.28,"high-kick":.44,"medium-punch":.3,"medium-kick":.42,kick:.42,"low-punch":.32,"low-kick":.46,"body-slam":.58}[t];return n===void 0?void 0:n*Tr.attackDurationScale}const ni={duration:.6,releaseAt:.18,gruntPitch:.64},Xf=.025,fM=.35;function hM(t){if(t.owner!=="player"||(t.launchDelay??0)>0)return[];const e=Math.floor(t.age/Xf);return Array.from({length:Math.min(14,e+1)},(n,i)=>{const r=e-i,s=t.age-r*Xf,o=Math.sin((t.id*137+r*43)*12.9898);return{id:`${t.id}-${r}`,x:t.x-t.velocityX*s,y:t.y+o*s*24-s*s*36,opacity:Math.max(0,1-s/fM),angle:o*60,size:.65+Math.abs(o)*.65}})}const jd=23,ps=76,xc=10,qf=.3,dM=5,pM=5,mM=150,gM=428.57,_M=.7,Ir=[{specialMove:"brutus",name:"TURTLE",epithet:"The Awkward Slow-Mo",accent:"#8fa84e",filter:"none",health:100,aggression:1},{specialMove:"wormy",name:"WORMY",epithet:"The Professional Troll Worm",accent:"#b7df4a",filter:"none",health:118,aggression:1.14},{specialMove:"baxter",name:"BOOZY BAXTER",epithet:"The Boardroom Breakdown",accent:"#ff902e",filter:"none",health:136,aggression:1.28},{specialMove:"giant",name:"BIG BABY",epithet:"The Diaper Disaster",accent:"#a77538",filter:"none",health:158,aggression:1.42}];function Ko(t,e){return{x:t,y:0,velocityY:0,health:e,maxHealth:e,pose:"idle",poseTimer:0,cooldown:0,hurtTimer:0,bleedTimer:0,blockTimer:0}}function Pt(t){return{...Ir[(t-1)%Ir.length],health:100+(t-1)*24,aggression:Math.min(2.55,1.18+(t-1)*.2)}}function vM(){const t=Pt(1);return{phase:"title",player:Ko(jd,100),opponent:Ko(ps,t.health),projectiles:[],effects:[],bloodBursts:[],bloodPools:[],soundEvents:[],level:1,wins:0,timer:60,banner:"ROUND 1",bannerTimer:0,outcome:null,transitionTimer:0,opponentAiTimer:.42,opponentStrategy:"advance",opponentStrategyTimer:.55,lastRightTap:-10,projectileId:0,effectId:0,bloodBurstId:0,bloodPoolId:0,soundEventId:0,screenShake:0,footstepShake:0,playerStepTimer:0,playerBackingUp:!1,playerAttackGap:0,playerAttackChainTime:0,playerAttackChainCount:0,opponentStepTimer:0,combo:0,comboTimer:0,discusSpamCount:0,discusSpamTimer:0,discusCooldownTimer:0,opponentPunishPhase:"none",opponentPunishTimer:0,opponentPunishAttack:"body-slam",opponentSpecial:null,opponentSpecialCooldown:fi[t.specialMove].initialCooldown,opponentDrinkTimer:0,opponentDrinkCooldown:0,opponentCanDrink:!1,opponentCryTimer:0}}function Zd(t){const e=Pt(t.level);Object.assign(t.player,Ko(jd,100)),Object.assign(t.opponent,Ko(ps,e.health)),t.projectiles.splice(0),t.effects.splice(0),t.bloodBursts.splice(0),t.soundEvents.splice(0),t.timer=60,t.outcome=null,t.transitionTimer=0,t.opponentAiTimer=.34,t.opponentStrategy=t.level===1?"advance":"rush",t.opponentStrategyTimer=t.level===1?.55:.8,t.lastRightTap=-10,t.footstepShake=0,t.playerStepTimer=0,t.playerBackingUp=!1,t.playerAttackGap=0,t.playerAttackChainTime=0,t.playerAttackChainCount=0,t.opponentStepTimer=0,t.combo=0,t.comboTimer=0,t.discusSpamCount=0,t.discusSpamTimer=0,t.discusCooldownTimer=0,t.opponentPunishPhase="none",t.opponentPunishTimer=0,t.opponentPunishAttack="body-slam",t.opponentSpecial=null,t.opponentSpecialCooldown=fi[e.specialMove].initialCooldown,t.opponentDrinkTimer=0,t.opponentDrinkCooldown=0,t.opponentCanDrink=!1,t.opponentCryTimer=0}function Jd(t,e){!Number.isInteger(e)||e<1||e>Ir.length||(t.level=e,t.wins=0,t.bloodPools.splice(0),Zd(t),t.screenShake=0,t.phase="playing",t.banner=`ROUND ${e} — FIGHT!`,t.bannerTimer=1.8)}function Qd(t){Jd(t,1)}function xM(t){Qd(t)}function SM(t){t.phase==="playing"?t.phase="paused":t.phase==="paused"&&(t.phase="playing")}function wt(t,e,n){t.pose=e,t.poseTimer=n}function Co(t,e,n,i){t.effects.push({id:++t.effectId,x:e,y:n,age:0,label:i})}function ep(t){let e=t>>>0;return()=>(e=Math.imul(e,1664525)+1013904223>>>0,e/4294967296)}function yM(t){return t.includes("UPPERCUT")?63:t.includes("HAMMER")||t.includes("CRACK")?58:t.includes("KICK")||t.includes("THUMP")||t.includes("WHOMP")||t.includes("SWEEP")?43:53}function MM(t,e,n,i,r){const s=++t.bloodBurstId,o=ep(s*7919+Math.round(i*100)+n*104729),a=e===t.opponent?1:-1,l=Math.min(8,3+Math.ceil(n/5)+Math.floor(o()*2)),c=e===t.opponent?-1:1,u=Math.max(2,Math.min(98,e.x+c*(.45+o()*.85)+(o()-.5)*.8)),f=yM(r)+e.y+(o()-.5)*8,h=Pt(t.level),m=h.specialMove==="brutus"&&e===t.opponent&&e.maxHealth===h.health,v=h.specialMove==="wormy"&&e===t.opponent&&e.maxHealth===h.health,S=h.specialMove==="witch"&&e===t.opponent&&e.maxHealth===h.health;t.bloodBursts.push({color:e===t.opponent?h.specialMove==="giant"?"brown":h.specialMove==="baxter"?"orange":m?"pink":v?"green":S?"black":"red":"red",id:s,x:u,y:f,age:0,sprites:Array.from({length:l},(d,p)=>({id:p,offsetX:p===0?0:a*(2+o()*12)+(o()-.5)*8,offsetY:p===0?0:6+o()*38,size:p===0?190+n*4.4:95+o()*105+n*2.2,rotation:Math.round((o()-.5)*28),delay:p===0?0:.025+o()*.14,duration:.46+o()*.18+n*.004,flip:o()<.5?a:-a}))})}function EM(t,e,n,i){const r=Pt(t.level).specialMove,s=r==="brutus"&&n==="opponent"&&e.maxHealth===Pt(t.level).health,o=r==="wormy"&&n==="opponent"&&e.maxHealth===Pt(t.level).health,a=r==="witch"&&n==="opponent"&&e.maxHealth===Pt(t.level).health,l=n==="opponent"?r==="giant"?"brown":r==="baxter"?"orange":s?"pink":o?"green":a?"black":"red":"red",c=ep((t.bloodPoolId+1)*15485863+Math.round(e.x*100)),u=n==="opponent"&&r==="giant",f=t.opponentSpecial&&Vr[t.opponentSpecial.id],h=u?f&&t.opponentSpecial?$o(f,t.opponentSpecial.anchorX):e.x+19:e.x,m=Math.max(2,Math.min(98,h+(c()-.5)*2.4)),v=t.bloodPools.findIndex(S=>S.source===n&&S.color===l&&Math.abs(S.x-m)<4.2);if(v>=0){const S=t.bloodPools.splice(v,1)[0];S.x=(S.x*S.size+m*i)/(S.size+i),S.size=Math.min(18,S.size+i*.82),S.stretch=Math.min(1.48,S.stretch+i*.025),S.age=0,S.lifetime=18+c()*5,t.bloodPools.push(S);return}t.bloodPools.push({color:l,id:++t.bloodPoolId,source:n,x:m,size:3.4+i*.9,stretch:.82+c()*.45,rotation:Math.round((c()-.5)*22),age:0,lifetime:18+c()*5}),t.bloodPools.length>48&&t.bloodPools.splice(0,t.bloodPools.length-48)}function po(t,e,n,i){const r=n==="opponent"&&Pt(t.level).specialMove==="giant",s=cn(e),o=r?{interval:.48-s*.004,amount:2.2+s*.04}:aM(s);if(!o||e.health<=0){e.bleedTimer=0;return}e.bleedTimer=Math.min(e.bleedTimer,o.interval)-i,!(e.bleedTimer>0)&&(EM(t,e,n,o.amount),e.bleedTimer=o.interval)}function TM(t,e){for(const n of t.bloodPools)n.age+=e;for(let n=t.bloodPools.length-1;n>=0;n-=1)t.bloodPools[n].age>=t.bloodPools[n].lifetime&&t.bloodPools.splice(n,1)}function kn(t,e,n,i,r,s){const o=n==="player"?t.player:t.opponent;t.soundEvents.push({id:++t.soundEventId,kind:e,fighter:n,style:i,intensity:r,duration:s,damageTier:cn(o)}),t.soundEvents.length>32&&t.soundEvents.splice(0,t.soundEvents.length-32)}function Fs(t,e,n,i,r){var a;if(e===t.opponent&&t.opponentSpecial||e.hurtTimer>0||t.phase!=="playing")return!1;const s=e.blockTimer>0,o=s?Math.max(1,Math.ceil(n*.35)):n;if(e===t.player&&!t.opponentSpecial&&e.health>0&&o>=e.health&&t.opponent.health>0){const l=fi[Pt(t.level).specialMove];return t.opponent.x=Math.max(17,Math.min(93,t.player.x+l.holdGap)),ip(t),!1}return e===t.opponent&&t.opponentPunishPhase!=="none"?(Co(t,i,56+e.y,"INVINCIBLE"),!1):(e.health=Math.max(0,e.health-o),e===t.opponent&&Pt(t.level).specialMove==="baxter"&&(t.opponentCanDrink=e.health>0,t.opponentDrinkTimer>0&&(t.opponentDrinkTimer=0,t.opponentDrinkCooldown=Qn.cooldown,t.opponentCryTimer=0,Co(t,e.x,65,"DRINK INTERRUPTED!"))),s&&e.health>0?(e.hurtTimer=0,wt(e,"block",e.blockTimer)):(e.hurtTimer=.28,wt(e,e.health<=0?"defeat":"hurt",e.health<=0?3:.28)),t.screenShake=Math.max(t.screenShake,Math.min(1.3,o/14)),Co(t,i,52+e.y,s?"BLOCKED!":r),(!t.opponentSpecial||!((a=Vr[t.opponentSpecial.id])!=null&&a.nonGraphic))&&MM(t,e,n,i,r),kn(t,"hit",e===t.player?"player":"opponent",n>=16?"heavy":r.includes("DISCUS")||r==="SPLAT"?"discus":"light",Math.min(1.5,o/12)),e===t.opponent?(t.combo+=1,t.comboTimer=1.2):t.combo=0,!0)}function bM(t){return t==="sweep"||t==="low-punch"||t==="low-kick"?"low":t==="kick"||t==="roundhouse"||t==="hammer"||t==="medium-punch"||t==="medium-kick"?"medium":"high"}function tp(t,e){return e==="high"?t.pose==="crouch":e==="low"?t.y>12:!1}function Rn(t,e,n,i,r,s){if(t.player.cooldown>0||t.player.y>12)return;wt(t.player,e,s),t.player.cooldown=s,(e==="punch"||e==="jab"||e==="backfist"||e==="kick"||e==="roundhouse"||e==="sweep"||e==="uppercut"||e==="hammer")&&(t.playerAttackGap<=0&&(t.playerAttackChainTime=0,t.playerAttackChainCount=0),t.playerAttackGap=.5,t.playerAttackChainCount+=1,t.playerAttackChainCount>=3&&t.playerAttackChainTime>0&&(t.opponent.blockTimer=Math.max(t.opponent.blockTimer,s+.12),wt(t.opponent,"block",t.opponent.blockTimer))),kn(t,"attack","player",i>=16||e.includes("kick")||e==="roundhouse"||e==="hammer"||e==="sweep"?"heavy":"light",i/14),t.opponent.x-t.player.x<=n+pM&&!tp(t.opponent,bM(e))&&Fs(t,t.opponent,i,t.opponent.x-2,r)&&(t.opponent.x=Math.min(91,t.opponent.x+i*.13))}function $f(t){return t.discusCooldownTimer>0?(t.banner=`DISCUS RECHARGING — ${Math.ceil(t.discusCooldownTimer)}s`,t.bannerTimer=.7,!1):(t.player.health=Math.min(t.player.maxHealth,t.player.health+3),t.player.cooldown=ni.duration,wt(t.player,"throw",ni.duration),kn(t,"attack","player","discus",1.15),t.projectiles.push({id:++t.projectileId,owner:"player",x:t.player.x+6,y:43+t.player.y,velocityX:68,age:0,launchDelay:ni.releaseAt}),t.discusCooldownTimer=dM,t.discusSpamCount=t.discusSpamTimer>0?t.discusSpamCount+1:1,t.discusSpamTimer=18,t.discusSpamCount>3&&t.opponentPunishPhase==="none"&&(t.opponentPunishPhase="charging",t.opponentPunishTimer=1.8,t.opponentPunishAttack=(t.projectileId+t.level)%2===0?"body-slam":"jab",t.opponent.hurtTimer=0,t.opponent.cooldown=0,t.banner="ANTI-SPAM ARMOR!",t.bannerTimer=1.25),!0)}function AM(t,e,n){if(t.phase!=="playing"||t.opponentSpecial)return;if(e==="il"){Rn(t,"uppercut",19,16,"UPPERCUT",.4);return}if(e==="ij"){Rn(t,"hammer",21,15,"HAMMER",.36);return}if(e==="kl"){Rn(t,"roundhouse",24,18,"ROUNDHOUSE",.46);return}if(e==="kj"){Rn(t,"sweep",25,15,"SWEEP",.42);return}if(e==="k"){if(t.playerBackingUp&&t.player.cooldown<=0){t.player.blockTimer=.42,t.player.cooldown=.42,wt(t.player,"block",.42),kn(t,"attack","player","heavy",.35);return}Rn(t,"kick",22,13,"KICK",.34);return}if(e==="up"){Rn(t,"jab",17,8,"SMACK",.21);return}if(e==="left"){Rn(t,"backfist",19,10,"CRACK",.29);return}if(e==="down"){Rn(t,"kick",22,13,"THUMP",.35);return}if(e==="l"){const r=n-t.lastRightTap;t.lastRightTap=n,r>.045&&r<=qf?(t.lastRightTap=-10,$f(t)):Rn(t,"punch",17,9,"PUNCH",.22);return}const i=n-t.lastRightTap;t.lastRightTap=n,i>.045&&i<=qf?(t.lastRightTap=-10,$f(t)):Rn(t,"elbow",15,7,"BONK",.2)}function ml(t,e){t.phase==="playing"&&(t.outcome=e,t.opponentSpecial=null,t.opponentDrinkTimer=0,t.phase="round-over",t.transitionTimer=2.25,t.banner=e==="player"?"VICTORY!":e==="opponent"?"KNOCKED OUT":"DRAW",t.bannerTimer=2.25,wt(t.player,e==="player"?"victory":e==="opponent"?"defeat":"idle",3),wt(t.opponent,e==="opponent"?"victory":e==="player"?"defeat":"idle",3))}function wM(t,e){if(t.opponentPunishPhase==="none")return!1;const n=t.opponent.x-t.player.x;if(t.opponentPunishPhase==="charging"){if(t.opponentPunishTimer-=e,t.opponent.x=Math.max(t.player.x+13,t.opponent.x-e*46*qo(t.opponent)),t.opponent.pose="walk",n<=17||t.opponentPunishTimer<=0){const i=t.opponentPunishAttack==="body-slam";t.opponentPunishPhase="attacking",t.opponentPunishTimer=i?.64:.38,t.opponent.cooldown=t.opponentPunishTimer;const r=Pt(t.level).specialMove==="giant";if(wt(t.opponent,r?"kick":t.opponentPunishAttack,t.opponentPunishTimer),kn(t,"attack","opponent",i?"heavy":"light",i?1.45:1),t.player.hurtTimer=0,Fs(t,t.player,i?24+t.level:14+t.level,t.player.x+2,r?"BOOTED!":i?"BODY SLAM!":"COUNTER!"),t.opponentSpecial)return!0;t.player.x=Math.max(7,t.player.x-(i?7:4))}return!0}return t.opponentPunishPhase==="attacking"?(t.opponentPunishTimer-=e,t.opponentPunishTimer<=0&&(t.opponentPunishPhase="retreating",t.opponentPunishTimer=2.2,t.opponent.pose="walk"),!0):(t.opponentPunishTimer-=e,t.opponent.x=Math.min(ps,t.opponent.x+e*38*qo(t.opponent)),t.opponent.pose="walk",(t.opponent.x>=ps||t.opponentPunishTimer<=0)&&(t.opponent.x=ps,t.opponentPunishPhase="none",t.opponentPunishTimer=0,t.opponent.pose="idle",t.opponent.cooldown=.35,t.opponentStrategy=t.level===1?"advance":"rush",t.opponentStrategyTimer=.45,t.discusSpamCount=0,t.discusSpamTimer=0),!0)}function Yo(t,e,n,i){const r=Pt(t.level).specialMove==="brutus"?Tr.movementScale:1;t.opponent.x+=n*i*r*qo(t.opponent)*e,(t.opponent.pose==="idle"||t.opponent.pose==="walk")&&(t.opponent.pose="walk")}function Kf(t,e,n){if(e.specialMove==="giant")return;const i=Math.max(.34,.46/e.aggression);wt(t.opponent,"throw",i),t.opponent.cooldown=i,t.opponentAiTimer=(.32+n()*.3)/e.aggression,kn(t,"attack","opponent","discus",1),t.projectiles.push({id:++t.projectileId,owner:"opponent",x:t.opponent.x-5,y:47,velocityX:-(48+t.level*4),age:0})}function np(t,e,n){const i=e.specialMove==="brutus",r=Math.min(4,t.level),s=n(),o=t.opponent.x-t.player.x,a=e.specialMove==="giant",l=!a&&r>=3&&s>(r>=4?.86:.93),c=Math.floor(n()*6),f=[{pose:"high-punch",height:"high",range:18,damage:8+Math.ceil(t.level*.75),cooldown:.28,label:"HIGH PUNCH!"},{pose:"high-kick",height:"high",range:22,damage:12+t.level,cooldown:.44,label:"HIGH KICK!"},{pose:"medium-punch",height:"medium",range:19,damage:9+t.level,cooldown:.3,label:"MEDIUM PUNCH!"},{pose:"kick",height:"medium",range:22,damage:12+t.level,cooldown:.42,label:"MEDIUM KICK!"},{pose:"low-punch",height:"low",range:19,damage:8+t.level,cooldown:.32,label:"LOW PUNCH!"},{pose:"low-kick",height:"low",range:23,damage:13+t.level,cooldown:.46,label:"LOW KICK!"}][a?[1,3,5][Math.min(2,Math.floor(c/2))]:c],h=l?"body-slam":f.pose,m=l?"low":f.height,v=l?23:f.range,S=l?17+t.level*2:f.damage,d=i?Math.max(1,Math.round(S*Tr.damageScale)):S,p=(l?.58:f.cooldown)*(i?Tr.attackDurationScale:1);return o>v?!1:(wt(t.opponent,h,p),t.opponent.cooldown=p,t.opponentAiTimer=i?Tr.attackGap+n()*Tr.attackGapVariation:(.25+n()*.34)/e.aggression,kn(t,"attack","opponent",l||f.height!=="high"?"heavy":"light",d/14),!tp(t.player,m)&&Fs(t,t.player,d,t.player.x+2,l?"SLAM!":f.label)&&(t.player.x=Math.max(7,t.player.x-d*(l?.16:.1))),!0)}function RM(t,e,n,i){const r=t.opponent.x-t.player.x;t.opponentStrategyTimer-=e,t.opponentStrategyTimer<=0&&(t.opponentStrategy=i()<.32?"retreat":"advance",t.opponentStrategyTimer=.32+i()*.72),t.opponentStrategy==="retreat"&&r<36?Yo(t,e,1,10.5):r>14&&(t.opponentStrategy="advance",Yo(t,e,-1,12.5)),t.opponentAiTimer<=0&&t.opponent.cooldown<=0&&r<=22&&np(t,n,i)&&i()<.58&&(t.opponentStrategy="retreat",t.opponentStrategyTimer=.28+i()*.48)}function CM(t,e,n,i){const r=Math.min(4,t.level),s=t.opponent.x-t.player.x,o=14+r*3.2+n.aggression,a=12+r*2.8,l=r===2?31:r===3?36:28;if(t.opponentStrategyTimer-=e,t.opponentStrategy==="back-off"){s<l&&Yo(t,e,1,a),r>=3&&s>27&&t.opponentAiTimer<=0&&t.opponent.cooldown<=0&&(i()<(r>=4?.58:.4)?Kf(t,n,i):t.opponentAiTimer=.12),(t.opponentStrategyTimer<=0||s>=l)&&(t.opponentStrategy="rush",t.opponentStrategyTimer=.9);return}if(t.opponentStrategy="rush",s>15&&Yo(t,e,-1,o),t.opponentAiTimer<=0&&t.opponent.cooldown<=0)if(s<=22){const c=np(t,n,i),u=c&&r>=4&&i()<.38;c&&!u&&(t.opponentStrategy="back-off",t.opponentStrategyTimer=r===2?.72:r===3?.56:.34)}else r>=3&&s>31&&i()<.3&&Kf(t,n,i)}function PM(t){if(t.phase!=="playing"||t.opponentSpecial||t.opponentSpecialCooldown>0||t.opponentPunishPhase!=="none"||t.opponent.cooldown>0||t.opponent.hurtTimer>0||t.player.y>0||t.player.health<=0||t.opponent.health<=0)return!1;const e=Pt(t.level).specialMove,n=fi[e];if(t.player.health>Yd(n))return!1;const i=t.opponent.x-t.player.x;return i<0||i>n.range?!1:(ip(t),!0)}function ip(t){const e=Pt(t.level).specialMove,n=fi[e];if(t.opponentPunishPhase="none",t.opponentPunishTimer=0,t.opponentDrinkTimer=0,t.opponentSpecial={id:e,elapsed:0,nextHit:0,anchorX:t.opponent.x},t.player.x=Math.max(7,t.opponent.x-n.holdGap),t.player.y=0,t.player.velocityY=0,t.player.hurtTimer=0,t.player.blockTimer=0,t.opponent.blockTimer=0,t.lastRightTap=-10,t.projectiles.splice(0),t.footstepShake=0,wt(t.player,"hurt",n.duration),wt(t.opponent,"body-slam",n.duration),t.player.cooldown=n.duration,t.opponent.cooldown=n.duration,t.banner=n.name,t.bannerTimer=.65,kn(t,"attack","opponent","heavy",1.45),e==="wormy"){const i=t.soundEvents.at(-1);i&&(i.specialMove=e,i.duration=n.duration)}}function LM(t,e){var s;const n=t.opponentSpecial,i=fi[n.id];for(n.elapsed=Math.min(i.duration,n.elapsed+e),t.opponent.x=n.anchorX,t.player.x=Math.max(7,n.anchorX-i.holdGap),t.player.y=0,t.player.velocityY=0;n.nextHit<i.hits.length&&n.elapsed>=i.hits[n.nextHit].at;){const o=i.hits[n.nextHit++];if(t.player.health>0){const a=n.nextHit===i.hits.length,l=a?t.player.health:Math.min(o.damage,Math.max(0,t.player.health-1));if(l>0){t.player.hurtTimer=0,Fs(t,t.player,l,t.player.x+2,o.label);const c=Vr[n.id];if(c){const u=$o(c,n.anchorX),f=(s=c.contact)==null?void 0:s[a?"impact":"capture"],h=u+c.width*(((f==null?void 0:f.x)??(a?.34:.46))-.5),m=(f==null?void 0:f.y)??(a?18:42),v=t.bloodBursts.at(-1);v&&!c.nonGraphic&&(v.x=h,v.y=m);const S=t.effects.at(-1);S&&(S.x=h,S.y=m),a&&(t.screenShake=1.3)}}}}if(n.elapsed+1e-6<i.duration)return;t.opponentSpecial=null,t.opponentSpecialCooldown=i.cooldown,t.player.x=Math.max(7,n.anchorX-xc-i.knockback);const r=Vr[n.id];if(r){const o=$o(r,n.anchorX);t.player.x=o+(r.exit.player-.5)*r.width,t.opponent.x=o+(r.exit.opponent-.5)*r.width}t.player.cooldown=.35,t.player.hurtTimer=.35,wt(t.player,t.player.health<=0?"defeat":"hurt",.35),wt(t.opponent,"idle",0),t.opponent.cooldown=.7,t.opponentAiTimer=.7}function DM(t,e){if(Pt(t.level).specialMove==="baxter"){if(t.opponentDrinkCooldown=Math.max(0,t.opponentDrinkCooldown-e),t.opponent.health<=0||t.player.health<=0){t.opponentDrinkTimer=0;return}if(t.opponentDrinkTimer>0&&(t.opponentDrinkTimer=Math.max(0,t.opponentDrinkTimer-e),t.opponentDrinkTimer<=1e-6)){t.opponentDrinkTimer=0;const n=Math.min(Qn.healing,t.opponent.maxHealth-t.opponent.health);t.opponent.health+=n,t.opponentDrinkCooldown=Qn.cooldown,t.opponentCryTimer=0,wt(t.opponent,"idle",0),Co(t,t.opponent.x,65,`+${n} HP`)}_a(t)?(t.opponentCryTimer-=e,t.opponentCryTimer<=0&&(kn(t,"cry","opponent","heavy",1.3,Math.min(1.2,t.opponentDrinkCooldown)),t.opponentCryTimer=Qn.sobInterval)):t.opponentCryTimer=0}}function IM(t){return Pt(t.level).specialMove!=="baxter"||!t.opponentCanDrink||t.opponentDrinkCooldown>0||t.opponent.health<=0||t.player.health<=0||t.opponent.health>=t.opponent.maxHealth||t.opponent.cooldown>0?!1:(t.opponentCanDrink=!1,t.opponentDrinkTimer=Qn.duration,t.opponentDrinkCooldown=Qn.duration+Qn.cooldown,t.opponent.cooldown=Qn.duration,wt(t.opponent,"drink",Qn.duration),kn(t,"drink","opponent","light",.8),!0)}function UM(t,e,n){if(t.opponentDrinkTimer>0||wM(t,e)||t.opponent.hurtTimer>0||PM(t)||IM(t))return;const i=Pt(t.level);t.opponentAiTimer-=e,t.level===1?RM(t,e,i,n):CM(t,e,i,n)}function NM(t,e){for(const n of t.projectiles){const i=Math.min(e,n.launchDelay??0);n.launchDelay=Math.max(0,(n.launchDelay??0)-i);const r=e-i;if(r<=0)continue;n.x+=n.velocityX*r,n.age+=r;const s=n.owner==="player"?t.opponent:t.player;if((n.owner==="player"?n.x>=s.x-3:n.x<=s.x+3)&&n.age<2){const a=n.owner==="player"?18:11+t.level,l=Fs(t,s,a,s.x,n.owner==="player"?"DISCUS!":"SPLAT");if(t.opponentSpecial)return;n.age=99,l&&(s.x+=n.owner==="player"?3:-3)}}for(let n=t.projectiles.length-1;n>=0;n-=1){const i=t.projectiles[n];(i.age>2||i.x<-5||i.x>105)&&t.projectiles.splice(n,1)}}function Yf(t,e){t.cooldown=Math.max(0,t.cooldown-e),t.hurtTimer=Math.max(0,t.hurtTimer-e),t.blockTimer=Math.max(0,t.blockTimer-e),t.poseTimer=Math.max(0,t.poseTimer-e),t.poseTimer===0&&t.y===0&&t.pose!=="walk"&&(t.pose="idle"),(t.y>0||t.velocityY!==0)&&(t.velocityY-=gM*e,t.y=Math.max(0,t.y+t.velocityY*e),t.y===0&&(t.velocityY=0))}function jf(t,e,n,i,r){if(!n){t[e]=0;return}t[e]-=i,t[e]<=0&&(t[e]=r,t.footstepShake=.13)}function OM(t,e,n,i=Math.random){const r=Math.min(e,.05);if(t.phase==="paused"||t.phase==="title"||t.phase==="game-over")return;t.bannerTimer>0&&(t.bannerTimer=Math.max(0,t.bannerTimer-r)),t.screenShake=Math.max(0,t.screenShake-r*3.4),t.footstepShake=Math.max(0,t.footstepShake-r),t.playerBackingUp=n.x<-.55,t.playerAttackGap=Math.max(0,t.playerAttackGap-r),t.playerAttackGap>0?t.playerAttackChainTime+=r:(t.playerAttackChainTime=0,t.playerAttackChainCount=0),t.comboTimer=Math.max(0,t.comboTimer-r),t.comboTimer===0&&(t.combo=0),t.discusSpamTimer=Math.max(0,t.discusSpamTimer-r),t.discusCooldownTimer=t.discusCooldownTimer<=r+1e-6?0:t.discusCooldownTimer-r,t.discusSpamTimer===0&&t.opponentPunishPhase==="none"&&(t.discusSpamCount=0);for(const u of t.effects)u.age+=r;for(let u=t.effects.length-1;u>=0;u-=1)t.effects[u].age>.65&&t.effects.splice(u,1);for(const u of t.bloodBursts)u.age+=r;for(let u=t.bloodBursts.length-1;u>=0;u-=1)t.bloodBursts[u].age>.95&&t.bloodBursts.splice(u,1);if(TM(t,r),t.opponentSpecial||(Yf(t.player,r),Yf(t.opponent,r)),t.phase==="round-over"){t.transitionTimer-=r,t.transitionTimer<=0&&(t.outcome==="player"?(t.level+=1,t.wins+=1,Zd(t),t.phase="playing",t.banner=`ROUND ${t.level} — FIGHT!`,t.bannerTimer=1.8):t.phase="game-over");return}if(DM(t,r),t.opponentSpecial){LM(t,r),po(t,t.player,"player",r),po(t,t.opponent,"opponent",r),t.timer=Math.max(0,t.timer-r),t.opponentSpecial||Zf(t);return}t.opponentSpecialCooldown=Math.max(0,t.opponentSpecialCooldown-r);const s=Math.abs(n.x)>.08,o=t.player.x;if(t.player.cooldown<=.12){const u=t.player.x+n.x*20*qo(t.player)*r;t.player.x=Math.max(7,Math.min(t.opponent.x-xc,u)),n.y>.55&&t.player.y===0?(t.player.velocityY=mM,wt(t.player,"jump",_M)):n.y<-.55&&t.player.y===0&&wt(t.player,"crouch",.12)}const a=t.player.y===0&&Math.abs(t.player.x-o)>.005;a&&(t.player.pose==="idle"||t.player.pose==="walk")?t.player.pose="walk":(!s||!a)&&t.player.pose==="walk"&&(t.player.pose="idle"),jf(t,"playerStepTimer",a,r,.27);const l=t.opponent.x;if(UM(t,r,i),t.opponentSpecial)return;const c=t.opponent.y===0&&Math.abs(t.opponent.x-l)>.005;!c&&t.opponent.pose==="walk"&&(t.opponent.pose="idle"),jf(t,"opponentStepTimer",c,r,.34),t.opponent.x=Math.max(t.player.x+xc,Math.min(93,t.opponent.x)),NM(t,r),!t.opponentSpecial&&(po(t,t.player,"player",r),po(t,t.opponent,"opponent",r),t.timer=Math.max(0,t.timer-r),Zf(t))}function Zf(t){if(!t.opponentSpecial){if(t.player.health<=0)ml(t,"opponent");else if(t.opponent.health<=0)ml(t,"player");else if(t.timer<=0){const e=t.player.health/t.player.maxHealth,n=t.opponent.health/t.opponent.maxHealth;ml(t,e===n?"draw":e>n?"player":"opponent")}}}const va=Yg("mortal-game",()=>{const t=As(vM()),e=ut(()=>Pt(t.level)),n=ut(()=>t.player.health/t.player.maxHealth*100),i=ut(()=>t.opponent.health/t.opponent.maxHealth*100);function r(o){AM(t,o,performance.now()/1e3)}function s(o,a){OM(t,o,a)}return{state:t,opponentProfile:e,playerHealthPercent:n,opponentHealthPercent:i,action:r,tick:s,start:()=>Qd(t),selectOpponent:o=>Jd(t,o),restart:()=>xM(t),togglePause:()=>SM(t)}});function rp(t,e,n=!1){const i=Math.max(360,Math.min(t*.5625,e)),r=e/2+i*.43,s=(r+32)/(n?.34:.5);return{arenaHeight:i,floor:r,size:s,offset:s*.3,gutter:s/32}}function FM(t,e){const i=rp(t,e).size*(162/256)/(274/512)*1.1;return{size:i,gutter:i*16/512}}function BM(t){let e=0;for(let n=0;n<t.length;n+=4){if(t[n+3]===0)continue;const i=t[n],r=t[n+1],s=t[n+2];i>45&&s>45&&i>r*1.6&&s>r*1.6&&Math.abs(i-s)<Math.max(i,s)*.35&&(t[n+3]=0,e++)}return e}const gl=new Map;function kM(t){const e=gl.get(t);if(e)return e;const n=(async()=>{const i=new Image;i.src=t,await i.decode();const r=document.createElement("canvas");r.width=i.naturalWidth,r.height=i.naturalHeight;const s=r.getContext("2d");if(!s)throw new Error("Cannot prepare sprite transparency");s.drawImage(i,0,0);const o=s.getImageData(0,0,r.width,r.height);return BM(o.data),s.putImageData(o,0,0),r.toDataURL("image/png")})();return gl.set(t,n),n.catch(()=>gl.delete(t)),n}const HM={key:0,class:"held-discus","aria-hidden":"true"},GM=["aria-label"],zM=["data-frame","aria-label"],VM={key:7,class:"special-status",role:"status"},WM=["value","max"],XM={key:8,class:"combo-callout"},qM={key:9,class:"round-banner"},$M={class:"stage-name"},KM="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",YM=Wr({__name:"FighterStage",setup(t){const e=va(),n=ut(()=>e.state.projectiles.filter(W=>(W.launchDelay??0)<=0)),i=ut(()=>e.state.projectiles.flatMap(hM)),r=ut(()=>["idle","walk","throw"].includes(e.state.player.pose)&&(e.state.player.pose!=="throw"||e.state.player.poseTimer>ni.duration-ni.releaseAt)),s={0:"/mortal/fighter-athlete-spritesheet-v4.png",20:"/mortal/fighter-athlete-damage-20.png",50:"/mortal/fighter-athlete-damage-50.png",75:"/mortal/fighter-athlete-damage-75.png"},o={0:"/mortal/fighter-opponent-spritesheet.png",20:"/mortal/fighter-opponent-damage-20.png",50:"/mortal/fighter-opponent-damage-50.png",75:"/mortal/fighter-opponent-damage-75.png"},a={0:"/mortal/fighter-brutus-retro-0.png",20:"/mortal/fighter-brutus-retro-20.png",50:"/mortal/fighter-brutus-retro-50.png",75:"/mortal/fighter-brutus-retro-75.png"},l={0:"/mortal/fighter-wormy-retro-0.png",20:"/mortal/fighter-wormy-retro-20.png",50:"/mortal/fighter-wormy-retro-50.png",75:"/mortal/fighter-wormy-retro-75.png"},c=ut(()=>s[cn(e.state.player)]),u={0:"/mortal/fighter-baxter-retro-0.png",20:"/mortal/fighter-baxter-retro-20.png",50:"/mortal/fighter-baxter-retro-50.png",75:"/mortal/fighter-baxter-retro-75.png"},f=En({}),h={0:"/mortal/fighter-witch-retro-0.png",20:"/mortal/fighter-witch-retro-20.png",50:"/mortal/fighter-witch-retro-50.png",75:"/mortal/fighter-witch-retro-75.png"},m=ut(()=>e.opponentProfile.specialMove==="baxter"),v=ut(()=>e.opponentProfile.specialMove==="brutus"),S=ut(()=>e.opponentProfile.specialMove==="witch"),d=ut(()=>e.opponentProfile.specialMove==="giant"),p="/mortal/fighter-giant-retro-0.png",b=En(),y=En({width:window.innerWidth,height:window.innerHeight}),E=ut(()=>rp(y.value.width,y.value.height,e.state.opponent.pose==="defeat")),P=ut(()=>FM(y.value.width,y.value.height)),C=ut(()=>({"--giant-size":`${E.value.size}px`,"--giant-offset":`${E.value.offset}px`,"--giant-gutter":`${e.state.opponent.pose==="high-kick"?E.value.size*9/256:E.value.gutter}px`,"--giant-leak-distance":`${E.value.size*.325}px`}));let R;const D=ut(()=>m.value&&_a(e.state)),j=ut(()=>d.value?p:v.value?a[cn(e.state.opponent)]:e.opponentProfile.specialMove==="wormy"?l[cn(e.state.opponent)]:m.value?f.value[cn(e.state.opponent)]??KM:S.value?h[cn(e.state.opponent)]:o[cn(e.state.opponent)]),x="/mortal/blood-splatter-spritesheet-v2.png",T=ut(()=>e.state.opponentSpecial),$=ut(()=>T.value?fi[T.value.id]:null),K=ut(()=>T.value?cM(T.value.id,T.value.elapsed):null),Z=ut(()=>T.value?Vr[T.value.id]:void 0),se=ut(()=>Z.value&&T.value?lM(Z.value,T.value.elapsed):void 0),z=ut(()=>{var re;if(!Z.value||!T.value)return{};const W=P.value.size;return{left:d.value?`calc(${T.value.anchorX}% + ${W*.05}px)`:`${$o(Z.value,T.value.anchorX)}%`,width:d.value?`${W}px`:`${Z.value.width}%`,bottom:d.value?`calc(7% - ${P.value.gutter}px)`:`calc(7% - ${Z.value.width*16/512}vw)`,backgroundImage:`url(/mortal/${Z.value.asset})`,backgroundPosition:(re=se.value)==null?void 0:re.position,backgroundSize:`${Z.value.columns*100}% ${Z.value.rows*100}%`}});function Y(W){const re=e.state[W];return{left:`${re.x}%`,bottom:`${7+re.y*.94}%`,filter:W==="opponent"?e.opponentProfile.filter:void 0,animationPlayState:m.value&&W==="opponent"&&e.state.phase==="paused"?"paused":void 0,...W==="player"&&re.pose==="throw"?k():{},...ge(W)}}function k(){return{animationDuration:`${ni.duration}s`,animationDelay:`${-Math.max(0,ni.duration-e.state.player.poseTimer)}s`,animationPlayState:"paused"}}function ge(W){return!T.value||!$.value?{}:{animationName:`special-${T.value.id}-${W}`,animationDuration:`${$.value.duration}s`,animationDelay:`${-T.value.elapsed}s`,animationTimingFunction:"linear",animationFillMode:"both",animationPlayState:"paused",transition:"none"}}function ve(W){return K.value?{animation:"none",backgroundPosition:W==="player"&&e.state.player.health<=0?"100% 100%":K.value[W]}:W==="player"&&e.state.player.pose==="throw"?k():W==="opponent"&&v.value&&e.state.opponentPunishPhase==="none"?{animationDuration:Wf(e.state.opponent.pose)===void 0?void 0:`${Wf(e.state.opponent.pose)}s`}:{}}Rs(()=>{for(const[W,re]of Object.entries(u))kM(re).then(pe=>{f.value[Number(W)]=pe}).catch(pe=>{console.error("Baxter sprite transparency preparation failed",pe),f.value[Number(W)]=re});R=new ResizeObserver(([W])=>{y.value={width:W.contentRect.width,height:W.contentRect.height}}),b.value&&R.observe(b.value);for(const W of Object.values(Vr)){const re=new Image;re.src=`/mortal/${W.asset}`}for(const W of[p,...Object.values(s),...Object.values(o),...Object.values(a),...Object.values(l),...Object.values(u),...Object.values(h)]){const re=new Image;re.src=W}}),Fc(()=>R==null?void 0:R.disconnect());function ye(W){const re=Z.value?.5:1;return{"--blood-offset-x":`${W.offsetX*re}px`,"--blood-offset-y":`${W.offsetY*re}px`,"--blood-size":`${W.size*re}px`,"--blood-rotation":`${W.rotation}deg`,"--blood-delay":`${W.delay}s`,"--blood-duration":`${W.duration}s`,"--blood-flip":W.flip,backgroundImage:`url(${x})`}}function Ge(W){return Z.value?`calc(7% + ${(W-7)*.5625}vw)`:`${W}%`}function $e(W){const re=Math.max(0,W.y-7);return{left:`${W.x}%`,bottom:Ge(W.y),"--blood-fall":Z.value?`${re*.5625}vw`:`max(${re*3.6}px, min(${re}dvh, ${re*.5625}vw))`}}function ne(W){const re=Math.min(4,W.lifetime*.3),pe=W.age<=W.lifetime-re?.94:Math.max(0,(W.lifetime-W.age)/re)*.94;return{left:`${W.x}%`,width:`${W.size}%`,opacity:pe,"--pool-stretch":W.stretch,"--pool-rotation":`${W.rotation}deg`}}return(W,re)=>{var pe,Ue,De,Ve,je,w;return Ne(),He("main",{ref_key:"stageElement",ref:b,class:Dt(["fight-stage",{shaking:ue(e).state.screenShake>0,"footstep-shake":ue(e).state.footstepShake>0&&ue(e).state.screenShake===0}]),style:st(d.value?C.value:void 0)},[re[6]||(re[6]=ie("div",{class:"world-extension","aria-hidden":"true"},[ie("div",{class:"upper-ruins"},[ie("i"),ie("i"),ie("i")]),ie("div",{class:"lower-ruins"},[ie("i"),ie("i"),ie("i")])],-1)),d.value&&!Z.value?(Ne(),He("div",{key:0,class:Dt(["fighter opponent-fighter giant-fighter giant-extension",[`pose-${ue(e).state.opponent.pose}`,{hurt:ue(e).state.opponent.hurtTimer>0}]]),style:st({...Y("opponent"),bottom:`${y.value.height-E.value.floor}px`}),"aria-hidden":"true"},[ie("div",{class:"fighter-sprite opponent-sprite",style:st({backgroundImage:`url(${p})`})},null,4)],6)):pt("",!0),d.value&&Z.value?(Ne(),He("div",{key:1,class:"finisher-cinematic giant-extension",style:st({...z.value,bottom:`${y.value.height-E.value.floor-P.value.gutter}px`}),"aria-hidden":"true"},null,4)):pt("",!0),ie("div",{class:Dt(["fight-area",T.value?["special-active",`special-${T.value.id}`]:[]])},[sn(sM,{accent:ue(e).opponentProfile.accent},null,8,["accent"]),re[3]||(re[3]=ie("div",{class:"moon","aria-hidden":"true"},null,-1)),re[4]||(re[4]=ie("div",{class:"mountains","aria-hidden":"true"},null,-1)),re[5]||(re[5]=ie("div",{class:"arena-vignette","aria-hidden":"true"},null,-1)),(Ne(!0),He(Tt,null,Cn(ue(e).state.bloodPools,_=>(Ne(),He("i",{key:`pool-${_.id}`,class:Dt(["blood-pool",[_.source,`blood-${_.color}`]]),style:st(ne(_)),"aria-hidden":"true"},null,6))),128)),Z.value?pt("",!0):(Ne(),He("div",{key:0,class:"ground-shadow player-shadow",style:st({left:`${ue(e).state.player.x}%`,transform:`translateX(-50%) scale(${1-ue(e).state.player.y/150})`})},null,4)),Z.value?pt("",!0):(Ne(),He("div",{key:1,class:"ground-shadow opponent-shadow",style:st({left:d.value?`calc(${ue(e).state.opponent.x}% + ${E.value.offset}px)`:`${ue(e).state.opponent.x}%`,width:d.value?`${E.value.size*.65}px`:void 0})},null,4)),Z.value?pt("",!0):(Ne(),He("div",{key:2,class:Dt(["fighter player-fighter",[`pose-${ue(e).state.player.pose}`,{hurt:ue(e).state.player.hurtTimer>0}]]),style:st(Y("player"))},[ie("div",{class:"fighter-sprite player-sprite",role:"img","aria-label":"Athletic discus fighter",style:st({backgroundImage:`url(${c.value})`,...ve("player")})},[r.value?(Ne(),He("i",HM)):pt("",!0)],4)],6)),Z.value?pt("",!0):(Ne(),He("div",{key:3,class:Dt(["fighter opponent-fighter",[`pose-${ue(e).state.opponent.pose}`,{hurt:ue(e).state.opponent.hurtTimer>0,"wormy-fighter":ue(e).opponentProfile.specialMove==="wormy","turtle-fighter":v.value,"baxter-fighter":m.value,"witch-fighter":S.value,"giant-fighter":d.value,hungover:m.value&&ue(cn)(ue(e).state.opponent)>=50,crying:D.value}]]),style:st(Y("opponent"))},[ie("div",{class:"fighter-sprite opponent-sprite",role:"img","aria-label":ue(e).opponentProfile.name,style:st({backgroundImage:`url(${j.value})`,...ve("opponent")})},null,12,GM),D.value?(Ne(),He("div",{key:0,class:Dt(["baxter-tears",{"tears-paused":ue(e).state.phase==="paused"}]),"aria-hidden":"true"},[(Ne(),He(Tt,null,Cn(8,_=>ie("i",{key:_,style:st({"--drop":_})},null,4)),64))],2)):pt("",!0),d.value&&ue(e).state.opponent.health>0?(Ne(),He("div",{key:1,class:Dt(["giant-leaks",{"leaks-paused":ue(e).state.phase!=="playing"}]),style:st({"--leak-cycle":`${.8-ue(cn)(ue(e).state.opponent)*.006}s`}),"aria-hidden":"true"},[(Ne(),He(Tt,null,Cn(5,_=>ie("i",{key:_,style:st({"--drop":_})},null,4)),64))],6)):pt("",!0)],6)),Z.value?(Ne(),He("div",{key:4,class:"finisher-cinematic",style:st(z.value),"data-frame":(pe=se.value)==null?void 0:pe.index,role:"img","aria-label":Z.value.description??"Turtle grabs the player, lifts him over his shell, slams him down and releases him"},null,12,zM)):pt("",!0),T.value&&!Z.value?(Ne(),He("div",{key:5,class:Dt(["special-aura",`aura-${T.value.id}`]),style:st({left:`${T.value.id==="wormy"?(ue(e).state.player.x+ue(e).state.opponent.x)/2:ue(e).state.player.x}%`,width:T.value.id==="wormy"?`${Math.max(40,ue(e).state.opponent.x-ue(e).state.player.x+8)}%`:void 0,"--special-accent":ue(e).opponentProfile.accent}),"aria-hidden":"true"},null,6)):pt("",!0),((Ue=T.value)==null?void 0:Ue.id)==="wormy"&&!Z.value?(Ne(),He(Tt,{key:6},Cn(2,_=>ie("i",{key:`wormy-bolt-${_}`,class:Dt(["wormy-eye-lightning",{"wormy-bolt-lower":_===2}]),style:st({left:`${ue(e).state.player.x}%`,width:`${Math.max(12,ue(e).state.opponent.x-ue(e).state.player.x)}%`}),"aria-hidden":"true"},null,6)),64)):pt("",!0),T.value?(Ne(),He("div",VM,[ie("strong",null,mt((De=$.value)==null?void 0:De.name),1),ie("span",null,mt(((Ve=se.value)==null?void 0:Ve.label)??((je=K.value)==null?void 0:je.label))+" • FINISHING MOVE",1),ie("progress",{value:T.value.elapsed,max:(w=$.value)==null?void 0:w.duration,"aria-label":"Finishing move progress"},null,8,WM)])):pt("",!0),(Ne(!0),He(Tt,null,Cn(n.value,_=>(Ne(),He("div",{key:_.id,class:Dt(["projectile",_.owner]),style:st({left:`${_.x}%`,bottom:`${_.y}%`,"--flight-play-state":ue(e).state.phase==="playing"?"running":"paused"}),"aria-hidden":"true"},[...re[0]||(re[0]=[ie("span",null,null,-1)])],6))),128)),(Ne(!0),He(Tt,null,Cn(i.value,_=>(Ne(),He("i",{key:_.id,class:"discus-spark","aria-hidden":"true",style:st({left:`${_.x}%`,bottom:`${_.y}%`,opacity:_.opacity,transform:`translate(-50%,50%) rotate(${_.angle}deg) scale(${_.size})`})},null,4))),128)),(Ne(!0),He(Tt,null,Cn(ue(e).state.effects,_=>(Ne(),He("div",{key:_.id,class:"hit-effect",style:st({left:`${_.x}%`,bottom:Ge(_.y),"--effect-age":_.age}),"aria-hidden":"true"},[re[1]||(re[1]=ie("i",null,null,-1)),ie("strong",null,mt(_.label),1)],4))),128)),(Ne(!0),He(Tt,null,Cn(ue(e).state.bloodBursts,_=>(Ne(),He("div",{key:`blood-${_.id}`,class:Dt(["blood-splatter",`blood-${_.color}`]),style:st($e(_)),"aria-hidden":"true"},[(Ne(!0),He(Tt,null,Cn(_.sprites,X=>(Ne(),He("i",{key:X.id,class:"blood-sprite",style:st(ye(X))},null,4))),128))],6))),128)),ue(e).state.combo>1?(Ne(),He("div",XM,[Fo(mt(ue(e).state.combo)+" HIT ",1),re[2]||(re[2]=ie("span",null,"COMBO",-1))])):pt("",!0),ue(e).state.bannerTimer>0?(Ne(),He("div",qM,mt(ue(e).state.banner),1)):pt("",!0),ie("div",$M,"THE OLYMPIC RUINS • LEVEL "+mt(ue(e).state.level),1)],2)],6)}}}),jM={class:"fight-hud","aria-label":"Fight status"},ZM={class:"health-side player-health"},JM={class:"health-frame"},QM={key:0,class:"discus-chip"},eE={key:1,class:"discus-chip ready"},tE={class:"round-clock"},nE={class:"round-label"},iE={class:"win-pips","aria-label":"Wins"},rE={class:"health-side opponent-health"},sE={class:"name-row"},oE={key:0,class:"armor-chip"},aE={key:1,class:"drink-chip",role:"status"},lE=Wr({__name:"GameHud",setup(t){const e=va(),n=ut(()=>fi[e.opponentProfile.specialMove]),i=ut(()=>e.state.player.health>0&&e.state.player.health<=Yd(n.value));return(r,s)=>(Ne(),He("header",jM,[ie("section",ZM,[s[0]||(s[0]=ie("div",{class:"name-row"},[ie("strong",null,"THE MAN"),ie("span",null,"THE RINGMASTER")],-1)),ie("div",JM,[ie("div",{class:"health-fill",style:st({width:`${ue(e).playerHealthPercent}%`})},null,4)]),ue(e).state.discusCooldownTimer>0?(Ne(),He("span",QM," DISCUS RECHARGE "+mt(Math.ceil(ue(e).state.discusCooldownTimer))+"s ",1)):(Ne(),He("span",eE,"DISCUS READY"))]),ie("div",tE,[ie("span",nE,"ROUND "+mt(ue(e).state.level),1),ie("strong",null,mt(Math.ceil(ue(e).state.timer).toString().padStart(2,"0")),1),ie("span",iE,[(Ne(!0),He(Tt,null,Cn(Math.min(ue(e).state.wins,5),o=>(Ne(),He("i",{key:o}))),128))])]),ie("section",rE,[ie("div",sE,[ie("strong",null,mt(ue(e).opponentProfile.name),1),ie("span",null,mt(ue(e).opponentProfile.epithet),1)]),ie("div",{class:Dt(["health-frame",{invincible:ue(e).state.opponentPunishPhase!=="none"||ue(e).state.opponentSpecial}])},[ie("div",{class:"health-fill",style:st({width:`${ue(e).opponentHealthPercent}%`,background:`linear-gradient(90deg, ${ue(e).opponentProfile.accent}, #ffef8b)`})},null,4)],2),ue(e).state.opponentPunishPhase!=="none"?(Ne(),He("span",oE,"INVINCIBLE • COUNTERING")):pt("",!0),ue(e).opponentProfile.specialMove==="baxter"?(Ne(),He("span",aE,mt(ue(uM)(ue(e).state.opponent))+" • "+mt(ue(e).state.opponent.health<=0?"LAST ORDERS":ue(e).state.opponentDrinkTimer>0?"DRINKING…":ue(_a)(ue(e).state)?`SOBBING • DRINK IN ${Math.ceil(ue(e).state.opponentDrinkCooldown)}s`:"DRINK READY"),1)):pt("",!0),ie("span",{class:Dt(["special-chip",{ready:i.value&&ue(e).state.opponentSpecialCooldown===0}])},mt(n.value.name)+" • "+mt(ue(e).state.opponentSpecial?"FINISHER":ue(e).state.opponentSpecialCooldown>0?`${Math.ceil(ue(e).state.opponentSpecialCooldown)}s`:i.value?"FINISHER READY":"FINISHER LOCKED"),3)])]))}}),Mi=new Set;let jo={x:0,y:0},_l=!1;const Jf={KeyI:"up",KeyJ:"left",KeyK:"k",KeyL:"l"},xr=new Map,cE=[{codes:["KeyI","KeyL"],action:"il"},{codes:["KeyK","KeyL"],action:"kl"},{codes:["KeyI","KeyJ"],action:"ij"},{codes:["KeyK","KeyJ"],action:"kj"}],uE=new Set(["KeyW","KeyA","KeyS","KeyD","KeyI","KeyJ","KeyK","KeyL","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"]);function fE(t){if(_l||typeof window>"u")return()=>{};_l=!0;const e=r=>{const s=/^(?:Digit|Numpad)([1-9])$/.exec(r.code);if(r.altKey&&!r.ctrlKey&&!r.metaKey&&!r.shiftKey&&s){const o=Number(s[1]);if(o<=t.opponentCount){r.preventDefault(),r.repeat||(i(),Sc(),t.onSelectOpponent(o));return}}if(uE.has(r.code)&&r.preventDefault(),Mi.add(r.code),!r.repeat&&Jf[r.code]){const o=cE.find(({codes:a})=>a.includes(r.code)&&a.every(l=>Mi.has(l)));if(o){for(const a of o.codes){const l=xr.get(a);l&&clearTimeout(l),xr.delete(a)}t.onAction(o.action)}else{const a=setTimeout(()=>{xr.delete(r.code),t.onAction(Jf[r.code])},62);xr.set(r.code,a)}}!r.repeat&&(r.code==="Escape"||r.code==="KeyP")&&t.onPause(),!r.repeat&&r.code==="Enter"&&t.onStart()},n=r=>Mi.delete(r.code),i=()=>{Mi.clear(),Sc(),xr.forEach(r=>clearTimeout(r)),xr.clear()};return window.addEventListener("keydown",e,{passive:!1}),window.addEventListener("keyup",n),window.addEventListener("blur",i),()=>{_l=!1,window.removeEventListener("keydown",e),window.removeEventListener("keyup",n),window.removeEventListener("blur",i),i()}}function Qf(t,e){jo={x:Number.isFinite(t)?Math.max(-1,Math.min(1,t)):0,y:Number.isFinite(e)?Math.max(-1,Math.min(1,e)):0}}function Sc(){jo={x:0,y:0}}function hE(){const t=Number(Mi.has("KeyD"))-Number(Mi.has("KeyA")),e=Number(Mi.has("KeyW"))-Number(Mi.has("KeyS"));return{x:Math.max(-1,Math.min(1,t+jo.x)),y:Math.max(-1,Math.min(1,e+jo.y))}}function dE(t){let e,n;function i(){const a=e,l=n;e=void 0,n=void 0,Qf(0,0),t(0,0),a!==void 0&&(l!=null&&l.hasPointerCapture(a))&&l.releasePointerCapture(a)}function r(a){if(a.pointerId!==e||!n)return;const l=n.getBoundingClientRect();if(!n.isConnected||l.width<=0||l.height<=0){i();return}const c=(a.clientX-l.left-l.width/2)/(l.width*.34),u=(a.clientY-l.top-l.height/2)/(l.height*.34);if(!Number.isFinite(c)||!Number.isFinite(u)){i();return}const f=Math.max(1,Math.hypot(c,u)),h=c/f,m=u/f;t(h,m),Qf(h,-m)}function s(a){if(e===void 0){n=a.currentTarget,e=a.pointerId;try{n.setPointerCapture(e)}catch{i();return}r(a)}}function o(a){a.pointerId===e&&i()}return{start:s,move:r,stop:o,reset:i}}const pE={class:"virtual-controls","aria-label":"Touch controls"},mE={class:"action-pad","aria-label":"Action directional pad"},gE=Wr({__name:"VirtualControls",setup(t){const e=va(),n=En(0),i=En(0),r=dE((o,a)=>{n.value=o,i.value=a});Cr(()=>[e.state.phase,e.state.level],r.reset,{flush:"sync"}),Rs(()=>{r.reset(),window.addEventListener("blur",r.reset),window.addEventListener("resize",r.reset),document.addEventListener("visibilitychange",r.reset)}),la(()=>{r.reset(),window.removeEventListener("blur",r.reset),window.removeEventListener("resize",r.reset),document.removeEventListener("visibilitychange",r.reset)});function s(o,a){a.preventDefault(),e.action(o)}return(o,a)=>(Ne(),He("div",pE,[ie("div",{class:"virtual-stick",role:"application","aria-label":"Movement joystick",onPointerdown:a[0]||(a[0]=rs((...l)=>ue(r).start&&ue(r).start(...l),["prevent"])),onPointermove:a[1]||(a[1]=rs((...l)=>ue(r).move&&ue(r).move(...l),["prevent"])),onPointerup:a[2]||(a[2]=rs((...l)=>ue(r).stop&&ue(r).stop(...l),["prevent"])),onPointercancel:a[3]||(a[3]=rs((...l)=>ue(r).stop&&ue(r).stop(...l),["prevent"])),onLostpointercapture:a[4]||(a[4]=(...l)=>ue(r).stop&&ue(r).stop(...l))},[a[11]||(a[11]=ie("span",{class:"stick-ring"},null,-1)),ie("span",{class:"stick-knob",style:st({transform:`translate(${n.value*36}px, ${i.value*36}px)`})},null,4)],32),ie("div",mE,[ie("button",{class:"action-key combo-key combo-ij","aria-label":"I plus J hammer strike",onPointerdown:a[5]||(a[5]=l=>s("ij",l))},[...a[12]||(a[12]=[ie("b",null,"I+J",-1),ie("small",null,"HAMMER",-1)])],32),ie("button",{class:"action-key combo-key combo-kj","aria-label":"K plus J low sweep",onPointerdown:a[6]||(a[6]=l=>s("kj",l))},[...a[13]||(a[13]=[ie("b",null,"K+J",-1),ie("small",null,"SWEEP",-1)])],32),ie("button",{class:"action-key key-up","aria-label":"I plus L uppercut",onPointerdown:a[7]||(a[7]=l=>s("il",l))},[...a[14]||(a[14]=[ie("b",null,"I+L",-1),ie("small",null,"UPPERCUT",-1)])],32),ie("button",{class:"action-key key-left","aria-label":"K kick; move backward and press K to block",onPointerdown:a[8]||(a[8]=l=>s("k",l))},[...a[15]||(a[15]=[ie("b",null,"K",-1),ie("small",null,"KICK • BACK + BLOCK",-1)])],32),ie("button",{class:"action-key key-down","aria-label":"K plus L roundhouse",onPointerdown:a[9]||(a[9]=l=>s("kl",l))},[...a[16]||(a[16]=[ie("b",null,"K+L",-1),ie("small",null,"ROUNDHOUSE",-1)])],32),ie("button",{class:"action-key key-right","aria-label":"L punch; double tap to throw discus",onPointerdown:a[10]||(a[10]=l=>s("l",l))},[...a[17]||(a[17]=[ie("b",null,"L",-1),ie("small",null,"PUNCH • ×2 DISCUS",-1)])],32)])]))}});let lt,bi,$i,Ct,An,yc=0,Ms=.68,Es=.82,Ts=!1,Po,Mc=0,Kn=0,sp=!1;const Zo=new Set,_E={battleCry:"battle-cry.mp3",bodyHitQuick:"body-hit-quick.mp3",hurtGrunt:"hurt-grunt.mp3",effortGrunt:"effort-grunt.mp3",fightGrunt:"fight-grunt.mp3",painGrunt:"pain-grunt.mp3",hardPunch:"hard-punch.mp3",painScream:"pain-scream.mp3",strongPunch:"strong-punch.mp3",punchWhoosh:"punch-whoosh.mp3",shortPainYell:"short-pain-yell.mp3",bodyHitOne:"body-hit-1.mp3",bodyHitTwo:"body-hit-2.mp3",bodyHitThree:"body-hit-3.mp3"};let op,mo;const ap=new Map;function vE(){if(!(typeof window>"u"))try{const t=JSON.parse(window.localStorage.getItem("mortal-audio-settings")??"{}");typeof t.music=="number"&&(Ms=Math.max(0,Math.min(1,t.music))),typeof t.sfx=="number"&&(Es=Math.max(0,Math.min(1,t.sfx)))}catch{}}vE();function xE(){if(lt||typeof window>"u")return lt;lt=new AudioContext;const t=lt.createDynamicsCompressor();t.threshold.value=-18,t.knee.value=12,t.ratio.value=6,t.attack.value=.003,t.release.value=.16,t.connect(lt.destination),bi=lt.createGain(),bi.gain.value=Es*.52,bi.connect(t),$i=lt.createGain(),$i.gain.value=Ms*.34,$i.connect(t),Ct=lt.createGain(),Ct.gain.value=1e-4,Ct.connect($i),An=lt.createBuffer(1,Math.ceil(lt.sampleRate*.55),lt.sampleRate);const e=An.getChannelData(0);for(let n=0;n<e.length;n+=1)e[n]=Math.random()*2-1;return SE(lt),lt}async function lp(){const t=new Map;return await Promise.all(Object.entries(_E).map(async([e,n])=>{try{const i=await fetch(`/mortal/sounds/${n}`);i.ok&&t.set(e,await i.arrayBuffer())}catch{}})),t}function SE(t){return mo||(mo=(op??(op=lp())).then(async e=>{await Promise.all([...e].map(async([n,i])=>{try{ap.set(n,await t.decodeAudioData(i.slice(0)))}catch{}}))}),mo)}function yE(){typeof window<"u"&&(op??(op=lp()))}function Pi(t,e,n=1){const i=t.createGain();i.gain.value=n;const r=t.createStereoPanner();return r.pan.value=e==="player"?-.34:.34,i.connect(r),r.connect(bi),i}function Bt(t,e,n,i,r){t.setValueAtTime(1e-4,e),t.exponentialRampToValueAtTime(Math.max(2e-4,n),e+i),t.exponentialRampToValueAtTime(1e-4,e+r)}function Ai(t,e){let n=Math.imul(t.id+e,2654435761)>>>0;return n^=n>>>16,n=Math.imul(n,2246822507)>>>0,n^=n>>>13,(n>>>0)/4294967296}function ME(t,e,n){return e[Math.floor(Ai(t,n)*e.length)]}function Zi(t,e,n,i,r,s=0,o=1){const a=ap.get(ME(e,n,i));if(!a)return!1;const l=t.createBufferSource();l.buffer=a;const c=Os(e.damageTier),u=1+c*(e.kind==="hit"?.1:.055),f=1+(Ai(e,i+2)-.5)*c*.09;return l.playbackRate.value=(e.fighter==="player"?1.04:.91)*(.96+Ai(e,i+1)*.08)*u*f*o,l.connect(Pi(t,e.fighter,r)),l.start(t.currentTime+.008+s),!0}const EE=["effortGrunt","fightGrunt"],TE=["battleCry","fightGrunt","effortGrunt"],bE=["bodyHitQuick","hardPunch","bodyHitOne","bodyHitTwo","bodyHitThree"],AE=["strongPunch","hardPunch","bodyHitOne","bodyHitTwo","bodyHitThree"],cp=["hurtGrunt","painGrunt","shortPainYell"],wE=["painScream","battleCry","hurtGrunt"],RE={0:EE,20:["effortGrunt","fightGrunt","hurtGrunt"],50:["painGrunt","hurtGrunt","shortPainYell","fightGrunt"],75:["shortPainYell","painScream","hurtGrunt","battleCry"]},CE={0:cp,20:["hurtGrunt","painGrunt","shortPainYell","battleCry"],50:["shortPainYell","painScream","painGrunt","hurtGrunt"],75:["painScream","shortPainYell","battleCry"]};function PE(t,e){const n=Os(e.damageTier),i=e.damageTier===0&&e.style==="heavy"?TE:RE[e.damageTier],r=Zi(t,e,i,11,(e.style==="heavy"?.82:.64)+n*.18);e.damageTier>=50&&Zi(t,e,e.damageTier===75?["painGrunt","shortPainYell"]:["hurtGrunt","painGrunt"],19,.24+n*.17,.075+n*.035);const s=Zi(t,e,["punchWhoosh"],29,e.style==="discus"?.78:.58,.012);return{voicePlayed:r,motionPlayed:s}}function LE(t,e){const n=Os(e.damageTier),i=e.style==="light"?bE:e.style==="discus"?["strongPunch"]:AE,r=e.damageTier===0?e.style==="light"?cp:e.style==="discus"?["shortPainYell","painScream"]:wE:CE[e.damageTier],s=Zi(t,e,i,43,Math.min(1.05,.68*e.intensity)),o=Zi(t,e,r,67,(e.style==="heavy"?.86:.66)+n*.24,.025);return e.damageTier===75&&Zi(t,e,["painScream","shortPainYell","painGrunt"],83,.46,.17),{impactPlayed:s,painPlayed:o}}function up(t,e){const n=t.createWaveShaper(),i=new Float32Array(256);for(let r=0;r<i.length;r+=1){const s=r*2/(i.length-1)-1;i[r]=Math.tanh(s*e)}return n.curve=i,n.oversample="2x",n}function eh(t,e,n){const i=e.fighter==="player"&&e.style==="discus",r=e.style==="heavy"||i,s=Os(e.damageTier),o=(r?.48:e.style==="discus"?.4:.29)+s*.2,a=.86+Ai(e,17)*.3,l=(e.fighter==="player"?112:76)*(i?ni.gruntPitch:r?.82:1)*a*(1+s*.12),c=Pi(t,e.fighter,(r?.86:.72)+s*.16),u=t.createGain(),f=t.createBiquadFilter(),h=up(t,(r?2.8:2.1)+s*1.7);f.type="lowpass",f.frequency.value=e.fighter==="player"?980:720,f.Q.value=2.6,u.connect(h),h.connect(f),f.connect(c),Bt(u.gain,n,Math.min(.55,.34*e.intensity),.018,o);for(const[d,p]of[[.5,.3],[1,1],[2.03,.3],[3.08,.1]]){const b=t.createOscillator(),y=t.createGain();b.type=d===1?"sawtooth":d<1?"square":"triangle",b.frequency.setValueAtTime(l*d*.88,n),b.frequency.exponentialRampToValueAtTime(l*d*1.34,n+o*.18),b.frequency.exponentialRampToValueAtTime(l*d*.55,n+o),b.detune.setValueAtTime((Ai(e,121+Math.round(d*10))-.5)*s*35,n),b.detune.linearRampToValueAtTime((Ai(e,131+Math.round(d*10))-.5)*s*90,n+o),y.gain.value=p,b.connect(y),y.connect(u),b.start(n),b.stop(n+o+.02)}const m=t.createBufferSource(),v=t.createBiquadFilter(),S=t.createGain();m.buffer=An,v.type="bandpass",v.frequency.value=e.fighter==="player"?430:310,v.Q.value=4.2,Bt(S.gain,n,r?.2:.12,.012,o*.86),m.connect(v),v.connect(S),S.connect(c),m.start(n),m.stop(n+o)}function DE(t,e,n){const i=e.style==="discus"?.34:e.style==="heavy"?.25:.16,r=Pi(t,e.fighter,e.style==="heavy"?.7:.52),s=t.createBufferSource(),o=t.createBiquadFilter(),a=t.createGain();if(s.buffer=An,o.type="bandpass",o.Q.value=e.style==="discus"?2.2:.8,o.frequency.setValueAtTime(e.style==="discus"?2400:1650,n),o.frequency.exponentialRampToValueAtTime(e.style==="heavy"?260:430,n+i),Bt(a.gain,n,.34*e.intensity,.018,i),s.connect(o),o.connect(a),a.connect(r),s.start(n),s.stop(n+i),e.style==="discus"){const l=t.createOscillator(),c=t.createGain();l.type="triangle",l.frequency.setValueAtTime(540,n),l.frequency.exponentialRampToValueAtTime(1320,n+.22),Bt(c.gain,n,.12,.015,.28),l.connect(c),c.connect(r),l.start(n),l.stop(n+.3)}}function IE(t,e,n){const i=e.style==="heavy",r=Pi(t,e.fighter,i?.95:.72),s=t.createOscillator(),o=t.createGain();s.type="sine",s.frequency.setValueAtTime(i?105:135,n),s.frequency.exponentialRampToValueAtTime(42,n+(i?.22:.14)),Bt(o.gain,n,Math.min(.62,.35*e.intensity),.004,i?.24:.16),s.connect(o),o.connect(r),s.start(n),s.stop(n+.26);const a=t.createBufferSource(),l=t.createBiquadFilter(),c=t.createGain();a.buffer=An,l.type=e.style==="discus"?"highpass":"lowpass",l.frequency.value=e.style==="discus"?1400:i?760:1150,Bt(c.gain,n,i?.5:.32,.002,i?.18:.1),a.connect(l),l.connect(c),c.connect(r),a.start(n),a.stop(n+.2)}function UE(t,e,n){const i=e.style==="heavy",r=Os(e.damageTier),s=(i?.92:e.style==="discus"?.76:.58)+r*.62,o=.84+Ai(e,71)*.34,a=(e.fighter==="player"?190:112)*o*(1+r*.16),l=Pi(t,e.fighter,(i?1:.86)+r*.18),c=t.createGain(),u=up(t,(i?3.8:2.7)+r*2.2),f=t.createBiquadFilter(),h=t.createBiquadFilter();f.type="bandpass",f.frequency.value=e.fighter==="player"?760:540,f.Q.value=3.4,h.type="bandpass",h.frequency.value=e.fighter==="player"?1560:1120,h.Q.value=4.8,Bt(c.gain,n,Math.min(.68,.4*e.intensity),.012,s),c.connect(u),u.connect(f),u.connect(h),f.connect(l),h.connect(l);const m=t.createOscillator(),v=t.createGain();m.frequency.value=18+Ai(e,103)*9+r*8,v.gain.value=(i?21:14)+r*18,m.connect(v),m.start(n),m.stop(n+s+.02);for(const[b,y]of[[1,1],[2.01,.24],[.5,.18]]){const E=t.createOscillator(),P=t.createGain();E.type=b===1?"sawtooth":b<1?"square":"triangle",E.frequency.setValueAtTime(a*b*1.12,n),E.frequency.exponentialRampToValueAtTime(a*b*(i?2.15:1.82)*(1+r*.14),n+s*.2),E.frequency.exponentialRampToValueAtTime(a*b*(.58-r*.13),n+s),v.connect(E.frequency),P.gain.value=y,E.connect(P),P.connect(c),E.start(n),E.stop(n+s+.02)}const S=t.createBufferSource(),d=t.createBiquadFilter(),p=t.createGain();S.buffer=An,d.type="bandpass",d.frequency.setValueAtTime(e.fighter==="player"?1850:1280,n),d.frequency.exponentialRampToValueAtTime(620,n+s),d.Q.value=2.2,Bt(p.gain,n,i?.26:.16,.02,s*.88),S.connect(d),d.connect(p),p.connect(l),S.start(n),S.stop(n+Math.min(s,.55))}const Ur=60/132/4,NE=[73.42,0,73.42,0,58.27,0,65.41,0,73.42,0,87.31,0,65.41,0,58.27,65.41],OE=[293.66,349.23,440,523.25,440,349.23,293.66,261.63,293.66,392,466.16,523.25,466.16,392,349.23,261.63];function FE(t,e){const n=t.createOscillator(),i=t.createGain();n.type="sine",n.frequency.setValueAtTime(155,e),n.frequency.exponentialRampToValueAtTime(44,e+.14),Bt(i.gain,e,.9,.002,.2),n.connect(i),i.connect(Ct),n.start(e),n.stop(e+.22);const r=t.createBufferSource(),s=t.createBiquadFilter(),o=t.createGain();r.buffer=An,s.type="highpass",s.frequency.value=3600,Bt(o.gain,e,.16,.001,.025),r.connect(s),s.connect(o),o.connect(Ct),r.start(e),r.stop(e+.03)}function BE(t,e,n){const i=t.createBufferSource(),r=t.createBiquadFilter(),s=t.createGain();i.buffer=An,r.type="highpass",r.frequency.value=n?5600:7200;const o=n?.16:.045;Bt(s.gain,e,n?.13:.09,.001,o),i.connect(r),r.connect(s),s.connect(Ct),i.start(e),i.stop(e+o+.01)}function kE(t,e,n){if(!n)return;const i=t.createOscillator(),r=t.createBiquadFilter(),s=t.createGain();i.type="sawtooth",i.frequency.value=n,r.type="lowpass",r.frequency.setValueAtTime(520,e),r.frequency.exponentialRampToValueAtTime(150,e+Ur*1.7),r.Q.value=6,Bt(s.gain,e,.19,.008,Ur*1.75),i.connect(r),r.connect(s),s.connect(Ct),i.start(e),i.stop(e+Ur*1.8)}function HE(t,e,n,i){const r=t.createOscillator(),s=t.createBiquadFilter(),o=t.createGain(),a=t.createStereoPanner();r.type=i%4===1?"square":"triangle",r.frequency.value=n,s.type="bandpass",s.frequency.value=1450+i%4*180,s.Q.value=2.8,Bt(o.gain,e,.075,.006,Ur*.82),a.pan.value=i%4<2?-.28:.28,r.connect(s),s.connect(o),o.connect(a),a.connect(Ct),r.start(e),r.stop(e+Ur*.9)}function th(){const t=lt;if(!(!t||!Ts||t.state==="closed"))for(Kn<t.currentTime&&(Kn=t.currentTime+.04);Kn<t.currentTime+.28;){const e=Mc%16;e%4===0&&FE(t,Kn),e%2===0&&BE(t,Kn,e===6||e===14),kE(t,Kn,NE[e]),e%2===1&&HE(t,Kn,OE[e],e),Kn+=Ur,Mc+=1}}function GE(){const t=lt;!t||t.state==="closed"||Ts||(Ts=!0,Mc=0,Kn=t.currentTime+.06,Ct.gain.cancelScheduledValues(t.currentTime),Ct.gain.setValueAtTime(Math.max(1e-4,Ct.gain.value),t.currentTime),Ct.gain.exponentialRampToValueAtTime(1,t.currentTime+.12),th(),Po=window.setInterval(th,90))}function fp(){if(Ts&&(Ts=!1,Po!==void 0&&window.clearInterval(Po),Po=void 0,lt&&Ct)){const t=lt.currentTime;Ct.gain.cancelScheduledValues(t),Ct.gain.setValueAtTime(Math.max(1e-4,Ct.gain.value),t),Ct.gain.exponentialRampToValueAtTime(1e-4,t+.09)}}function zE(t,e,n){const i=e.duration??1.2,r=Pi(t,"opponent",1.35),s=t.createGain(),o=t.createBiquadFilter(),a=t.createBiquadFilter();o.type=a.type="bandpass",o.frequency.value=650,a.frequency.value=1350,o.Q.value=a.Q.value=2.4,s.connect(o),s.connect(a),o.connect(r),a.connect(r),s.gain.setValueAtTime(1e-4,n);for(const l of[0,.3,.61])Bt(s.gain,n+i*l,.48,i*.08,i*.29);for(const l of[1,2.01]){const c=t.createOscillator();c.type=l===1?"sawtooth":"triangle";for(let u=0;u<=24;u++){const f=u/24,h=Math.sin(f*Math.PI*30)*13,m=160+Math.sin(f*Math.PI)*115+h;c.frequency.linearRampToValueAtTime(m*l,n+i*f)}c.connect(s),Zo.add(c),c.onended=()=>{Zo.delete(c),c.disconnect()},c.start(n),c.stop(n+i)}}function VE(t,e){for(const n of[0,.3,.6]){const i=t.createOscillator(),r=t.createGain();i.type="sine",i.frequency.setValueAtTime(380,e+n),i.frequency.exponentialRampToValueAtTime(95,e+n+.14),Bt(r.gain,e+n,.22,.03,.18),i.connect(r),r.connect(Pi(t,"opponent")),i.start(e+n),i.stop(e+n+.19)}}function WE(t,e,n){const i=Math.max(1.8,e.duration??2.7),r=Pi(t,"opponent",1.18),s=[0,-4,3,7,-7,2,-2,5];for(const[l,c]of s.entries()){const u=t.createOscillator(),f=t.createGain(),h=t.createBiquadFilter();u.type=l%3===0?"sawtooth":l%3===1?"triangle":"square",u.detune.value=c,h.type="bandpass",h.frequency.value=520+l%4*42,h.Q.value=2.2,u.connect(h),h.connect(f),f.connect(r),f.gain.setValueAtTime(1e-4,n);for(const m of[0,.52,1.04,1.56,2.08]){if(m>=i)continue;const v=n+m,S=Math.min(n+i,v+.38);f.gain.exponentialRampToValueAtTime(.075+l%3*.012,v+.035),f.gain.exponentialRampToValueAtTime(1e-4,S),u.frequency.setValueAtTime(116+l%4*2,v),u.frequency.linearRampToValueAtTime(128+l%3*3,S)}u.start(n),u.stop(n+i+.03)}const o=t.createOscillator(),a=t.createGain();o.type="sine",o.frequency.value=58,Bt(a.gain,n,.18,.02,i),o.connect(a),a.connect(r),o.start(n),o.stop(n+i+.03)}function hp(t){if(sp=t,!t){for(const e of Zo)e.stop();Zo.clear()}}const go=new Map;function dp(t,e){const n=lt,i=e?t.filter(r=>r.owner==="player"&&(r.launchDelay??0)<=0):[];for(const[r,s]of go){if(i.some(a=>a.id===r))continue;const o=(n==null?void 0:n.currentTime)??0;s.gain.gain.cancelScheduledValues(o),s.gain.gain.setTargetAtTime(1e-4,o,.008),s.noise.stop(o+.04),go.delete(r)}if(!(!n||n.state!=="running"||!An))for(const r of i){let s=go.get(r.id);if(!s){const a=n.createBufferSource(),l=n.createBiquadFilter(),c=n.createGain(),u=n.createStereoPanner();a.buffer=An,a.loop=!0,l.type="bandpass",l.Q.value=3.2,c.gain.value=1e-4,a.connect(l),l.connect(c),c.connect(u),u.connect(bi),a.onended=()=>{a.disconnect(),l.disconnect(),c.disconnect(),u.disconnect()},a.start(),s={noise:a,filter:l,gain:c,pan:u},go.set(r.id,s)}const o=n.currentTime;s.pan.pan.setTargetAtTime(Math.max(-1,Math.min(1,r.x/50-1)),o,.025),s.filter.frequency.setTargetAtTime(2800+Math.sin(r.age*65)*1600,o,.008),s.gain.gain.setTargetAtTime(.23+Math.sin(r.age*95)*.09,o,.008)}}function XE(t){const e=lt;if(!e||e.state==="closed")return;const n=e.currentTime+.008;if(t.specialMove==="wormy"&&t.kind==="attack")WE(e,t,n);else if(t.kind==="cry")sp&&zE(e,t,n);else if(t.kind==="drink")VE(e,n);else if(t.kind==="attack"&&t.fighter==="player"&&t.style==="discus")Zi(e,t,["effortGrunt","fightGrunt"],11,1,0,ni.gruntPitch)||eh(e,t,n);else if(t.kind==="attack"){const{voicePlayed:i,motionPlayed:r}=PE(e,t);i||eh(e,t,n),r||DE(e,t,n+.018)}else{const{impactPlayed:i,painPlayed:r}=LE(e,t);i||IE(e,t,n),r||UE(e,t,n+.025)}}function br(){const t=xE();(t==null?void 0:t.state)==="suspended"&&t.resume()}function qE(t){t?GE():fp()}function pp(){return{music:Ms,sfx:Es}}function mp(){if(!(typeof window>"u"))try{window.localStorage.setItem("mortal-audio-settings",JSON.stringify(pp()))}catch{}}function $E(t){Ms=Math.max(0,Math.min(1,t)),lt&&$i&&$i.gain.setTargetAtTime(Ms*.34,lt.currentTime,.02),mp()}function KE(t){Es=Math.max(0,Math.min(1,t)),lt&&bi&&bi.gain.setTargetAtTime(Es*.52,lt.currentTime,.02),mp()}function YE(t){for(const e of t)e.id<=yc||(XE(e),yc=e.id)}function jE(){dp([],!1),hp(!1),fp(),lt&&lt.state!=="closed"&&lt.close(),lt=void 0,bi=void 0,$i=void 0,Ct=void 0,An=void 0,yc=0}const ZE={class:"audio-control"},JE={class:"audio-popup","aria-label":"Audio mixer"},QE=Wr({__name:"AudioMixer",setup(t){const e=pp(),n=En(Math.round(e.music*100)),i=En(Math.round(e.sfx*100));function r(){br(),$E(n.value/100)}function s(){br(),KE(i.value/100)}return(o,a)=>(Ne(),He("details",ZE,[a[6]||(a[6]=ie("summary",{"aria-label":"Open audio mixer",title:"Audio mixer"},"♫",-1)),ie("section",JE,[a[4]||(a[4]=ie("strong",null,"AUDIO MIXER",-1)),ie("label",null,[ie("span",null,[a[2]||(a[2]=ie("b",null,"MUSIC",-1)),ie("output",null,mt(n.value)+"%",1)]),mu(ie("input",{"onUpdate:modelValue":a[0]||(a[0]=l=>n.value=l),type:"range",min:"0",max:"100",step:"1","aria-label":"Music volume",onInput:r},null,544),[[zu,n.value,void 0,{number:!0}]])]),ie("label",null,[ie("span",null,[a[3]||(a[3]=ie("b",null,"SOUND FX",-1)),ie("output",null,mt(i.value)+"%",1)]),mu(ie("input",{"onUpdate:modelValue":a[1]||(a[1]=l=>i.value=l),type:"range",min:"0",max:"100",step:"1","aria-label":"Sound effects volume",onInput:s},null,544),[[zu,i.value,void 0,{number:!0}]])]),a[5]||(a[5]=ie("small",null,"132 BPM • OLYMPIC NIGHT MIX",-1))])]))}});function eT(t,e){var b;const n=document,i=window.matchMedia("(orientation: landscape)"),r=window.matchMedia("(pointer: coarse)"),s=t.requestFullscreen?()=>t.requestFullscreen({navigationUI:"hide"}):(b=t.webkitRequestFullscreen)==null?void 0:b.bind(t),o=!!s&&(n.fullscreenEnabled??n.webkitFullscreenEnabled)!==!1,a=()=>n.fullscreenElement??n.webkitFullscreenElement;let l=!1,c=!1,u=!1,f=!1;function h(){e(!f&&l&&o&&!a())}async function m(){var y;if(a()===t)try{n.exitFullscreen?await n.exitFullscreen():await((y=n.webkitExitFullscreen)==null?void 0:y.call(n))}catch{}}async function v(){if(!(f||!l||c||!o||a())){c=!0;try{await s(),(f||!i.matches)&&await m()}catch{}finally{c=!1,h()}}}function S(){l=r.matches&&i.matches,l?v():m(),h()}function d(){const y=a()===t;u&&!y&&(l=!1),u=y,u&&(!i.matches||f)&&m(),h()}function p(){v()}return i.addEventListener("change",S),r.addEventListener("change",S),n.addEventListener("fullscreenchange",d),n.addEventListener("webkitfullscreenchange",d),t.addEventListener("pointerup",p,!0),t.addEventListener("click",p,!0),S(),()=>{f=!0,l=!1,i.removeEventListener("change",S),r.removeEventListener("change",S),n.removeEventListener("fullscreenchange",d),n.removeEventListener("webkitfullscreenchange",d),t.removeEventListener("pointerup",p,!0),t.removeEventListener("click",p,!0),e(!1),m()}}const tT={key:2,class:"game-overlay title-screen"},nT={class:"desktop-controls"},iT={class:"discus-tip"},rT={key:3,class:"game-overlay pause-screen"},sT={key:4,class:"game-overlay game-over-screen"},oT=["aria-label"],aT={class:"desktop-key-strip","aria-hidden":"true"},lT={key:6,class:"fullscreen-prompt","aria-label":"Enter fullscreen"},cT=Wr({__name:"App",setup(t){const e=va();let n=0,i=0,r;const s=En(),o=En(!1);let a;function l(u){const f=i?(u-i)/1e3:0;i=u,e.tick(f,hE()),hp(e.state.phase==="playing"&&_a(e.state)),dp(e.state.projectiles,e.state.phase==="playing"),YE(e.state.soundEvents),qE(e.state.phase==="playing"||e.state.phase==="round-over"),n=requestAnimationFrame(l)}function c(){(e.state.phase==="title"||e.state.phase==="game-over")&&e.start()}return Rs(()=>{s.value&&(a=eT(s.value,u=>{o.value=u})),yE(),r=fE({onAction:e.action,onPause:e.togglePause,onStart:c,onSelectOpponent:e.selectOpponent,opponentCount:Ir.length}),window.addEventListener("pointerdown",br,{passive:!0}),window.addEventListener("keydown",br),n=requestAnimationFrame(l),document.addEventListener("visibilitychange",()=>{document.hidden&&e.state.phase==="playing"&&e.togglePause()})}),la(()=>{cancelAnimationFrame(n),r==null||r(),a==null||a(),window.removeEventListener("pointerdown",br),window.removeEventListener("keydown",br),jE(),Sc()}),(u,f)=>(Ne(),He("div",{ref_key:"gameShell",ref:s,class:"game-shell",onContextmenu:f[4]||(f[4]=rs(()=>{},["prevent"]))},[sn(YM),sn(QE),ue(e).state.phase!=="title"?(Ne(),Al(lE,{key:0})):pt("",!0),ue(e).state.phase==="playing"?(Ne(),Al(gE,{key:1})):pt("",!0),ue(e).state.phase==="title"?(Ne(),He("section",tT,[f[8]||(f[8]=ie("p",{class:"eyebrow"},"USA DISCUS FEDERATION PRESENTS",-1)),f[9]||(f[9]=ie("h1",null,[ie("span",null,"MORTAL"),Fo(" DISCUS")],-1)),f[10]||(f[10]=ie("p",{class:"tagline"},"STEP INTO THE RING. LET IT FLY.",-1)),ie("button",{class:"arcade-button",onClick:f[0]||(f[0]=(...h)=>ue(e).start&&ue(e).start(...h))},"ENTER THE RING"),ie("div",nT,[f[7]||(f[7]=wu('<div><kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd><span>MOVE</span></div><div><kbd>I</kbd><kbd>J</kbd><kbd>K</kbd><kbd>L</kbd><span>ATTACK</span></div><div class="discus-tip"><kbd>L</kbd><kbd>L</kbd><span>DISCUS THROW</span></div>',3)),ie("div",iT,[f[5]||(f[5]=ie("kbd",null,"ALT",-1)),ie("kbd",null,"1–"+mt(ue(Ir).length),1),f[6]||(f[6]=ie("span",null,"SELECT OPPONENT",-1))])]),f[11]||(f[11]=ie("p",{class:"tap-hint"},"PRESS ENTER • TAP TO START",-1))])):pt("",!0),ue(e).state.phase==="paused"?(Ne(),He("section",rT,[f[12]||(f[12]=ie("p",{class:"eyebrow"},"MATCH SUSPENDED",-1)),f[13]||(f[13]=ie("h2",null,"PAUSED",-1)),ie("button",{class:"arcade-button",onClick:f[1]||(f[1]=(...h)=>ue(e).togglePause&&ue(e).togglePause(...h))},"RETURN TO FIGHT")])):pt("",!0),ue(e).state.phase==="game-over"?(Ne(),He("section",sT,[f[14]||(f[14]=ie("p",{class:"eyebrow"},"FINAL RESULT",-1)),ie("h2",null,mt(ue(e).state.outcome==="draw"?"DRAW":"OUT OF BOUNDS"),1),ie("p",null,"You cleared "+mt(ue(e).state.wins)+" "+mt(ue(e).state.wins===1?"opponent":"opponents")+".",1),ie("button",{class:"arcade-button",onClick:f[2]||(f[2]=(...h)=>ue(e).restart&&ue(e).restart(...h))},"FIGHT AGAIN")])):pt("",!0),ue(e).state.phase==="playing"||ue(e).state.phase==="paused"?(Ne(),He("button",{key:5,class:"pause-button","aria-label":ue(e).state.phase==="paused"?"Resume game":"Pause game",onClick:f[3]||(f[3]=(...h)=>ue(e).togglePause&&ue(e).togglePause(...h))},mt(ue(e).state.phase==="paused"?"▶":"Ⅱ"),9,oT)):pt("",!0),ie("div",aT,[f[16]||(f[16]=wu("<span><b>WASD</b> MOVE</span><span><b>I+L</b> UPPERCUT</span><span><b>I+J</b> HAMMER</span><span><b>L</b> PUNCH</span><span><b>K+L</b> ROUNDHOUSE</span><span><b>K+J</b> SWEEP</span><span><b>K</b> KICK</span><span><b>L ×2</b> THROW DISCUS</span><span><b>P</b> PAUSE</span>",9)),ie("span",null,[ie("b",null,"ALT+1–"+mt(ue(Ir).length),1),f[15]||(f[15]=Fo(" OPPONENT",-1))])]),f[17]||(f[17]=ie("div",{class:"scanlines","aria-hidden":"true"},null,-1)),o.value?(Ne(),He("button",lT,"⛶ TAP FOR FULLSCREEN")):pt("",!0),f[18]||(f[18]=ie("div",{class:"rotate-device"},[ie("span",null,"↻"),ie("strong",null,"ROTATE TO FIGHT"),ie("small",null,"Mortal Discus is built for landscape play.")],-1))],544))}});Hg(cT).use(Vg()).mount("#app");
