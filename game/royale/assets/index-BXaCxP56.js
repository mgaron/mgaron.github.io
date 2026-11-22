var Mp=Object.defineProperty;var Sp=(n,e,t)=>e in n?Mp(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var fe=(n,e,t)=>Sp(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ac(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const ut={},Qi=[],Xn=()=>{},df=()=>!1,ta=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),na=n=>n.startsWith("onUpdate:"),Ct=Object.assign,Tc=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},bp=Object.prototype.hasOwnProperty,nt=(n,e)=>bp.call(n,e),Be=Array.isArray,Ci=n=>kr(n)==="[object Map]",rs=n=>kr(n)==="[object Set]",yh=n=>kr(n)==="[object Date]",qe=n=>typeof n=="function",Et=n=>typeof n=="string",qn=n=>typeof n=="symbol",ht=n=>n!==null&&typeof n=="object",pf=n=>(ht(n)||qe(n))&&qe(n.then)&&qe(n.catch),mf=Object.prototype.toString,kr=n=>mf.call(n),Ep=n=>kr(n).slice(8,-1),gf=n=>kr(n)==="[object Object]",Rc=n=>Et(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,pr=Ac(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ia=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},wp=/-\w/g,Ln=ia(n=>n.replace(wp,e=>e.slice(1).toUpperCase())),Ap=/\B([A-Z])/g,hs=ia(n=>n.replace(Ap,"-$1").toLowerCase()),_f=ia(n=>n.charAt(0).toUpperCase()+n.slice(1)),Sa=ia(n=>n?`on${_f(n)}`:""),Wn=(n,e)=>!Object.is(n,e),To=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},vf=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Br=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Mh;const sa=()=>Mh||(Mh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ti(n){if(Be(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=Et(i)?Pp(i):Ti(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Et(n)||ht(n))return n}const Tp=/;(?![^(]*\))/g,Rp=/:([^]+)/,Cp=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function Pp(n){const e={};return n.replace(Cp,t=>t.startsWith("/*")?"":t).split(Tp).forEach(t=>{if(t){const i=t.split(Rp);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Fn(n){let e="";if(Et(n))e=n;else if(Be(n))for(let t=0;t<n.length;t++){const i=Fn(n[t]);i&&(e+=i+" ")}else if(ht(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Lp="itemscope,allowfullscreen,disablepictureinpicture,disableremoteplayback,formnovalidate,ismap,nomodule,novalidate,playsinline,readonly",Ip=Ac(Lp);function xf(n){return!!n||n===""}function Dp(n,e,t){if(n.length!==e.length)return!1;let i=!0;for(let s=0;i&&s<n.length;s++)i=Di(n[s],e[s],t);return i}function Sh(n,e,t){if(n.size!==e.size)return!1;const i=Array.from(e),s=new Uint8Array(i.length);for(const r of n){let o=-1;for(let a=0;a<i.length;a++)if(!s[a]&&Di(r,i[a],t)){o=a;break}if(o<0)return!1;s[o]=1}return!0}function Np(n,e,t){let i=Ci(n),s=Ci(e);if(i||s||(i=rs(n),s=rs(e),i||s))return i&&s?Sh(n,e,t):!1;const r=Object.keys(n).length,o=Object.keys(e).length;if(r!==o)return!1;for(const a in n){const l=n.hasOwnProperty(a),c=e.hasOwnProperty(a);if(l&&!c||!l&&c||!Di(n[a],e[a],t))return!1}return String(n)===String(e)}function bh(n,e,t,i){t||(t=[new Map,new Map]);const[s,r]=t;if(s.has(n)||r.has(e))return s.get(n)===e&&r.get(e)===n;s.set(n,e),r.set(e,n);const o=i(n,e,t);return s.delete(n),r.delete(e),o}function Di(n,e,t){if(n===e)return!0;let i=yh(n),s=yh(e);return i||s?i&&s?n.getTime()===e.getTime():!1:(i=qn(n),s=qn(e),i||s?n===e:(i=Be(n),s=Be(e),i||s?i&&s?bh(n,e,t,Dp):!1:(i=ht(n),s=ht(e),i||s?!i||!s?!1:bh(n,e,t,Np):String(n)===String(e))))}function Up(n,e){return n.findIndex(t=>Di(t,e))}const yf=n=>!!(n&&n.__v_isRef===!0),Ie=n=>Et(n)?n:n==null?"":Be(n)||ht(n)&&(n.toString===mf||!qe(n.toString))?yf(n)?Ie(n.value):JSON.stringify(n,Mf,2):String(n),Mf=(n,e)=>yf(e)?Mf(n,e.value):Ci(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s],r)=>(t[ba(i,r)+" =>"]=s,t),{})}:rs(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>ba(t))}:qn(e)?ba(e):ht(e)&&!Be(e)&&!gf(e)?String(e):e,ba=(n,e="")=>{var t;return qn(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ot;class Sf{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&Ot&&(Ot.active?(this.parent=Ot,this.index=(Ot.scopes||(Ot.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes){const i=this.scopes.slice();for(e=0,t=i.length;e<t;e++)i[e].pause()}for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes){const s=this.scopes.slice();for(e=0,t=s.length;e<t;e++)s[e].resume()}const i=this.effects.slice();for(e=0,t=i.length;e<t;e++)i[e].resume()}}run(e){if(this._active){const t=Ot;try{return Ot=this,e()}finally{Ot=t}}}on(){++this._on===1&&(this.prevScope=Ot,Ot=this)}off(){if(this._on>0&&--this._on===0){if(Ot===this)Ot=this.prevScope;else{let e=Ot;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){const s=this.scopes.slice();for(t=0,i=s.length;t<i;t++)s[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Op(n){return new Sf(n)}function Fp(){return Ot}let ft;const Ea=new WeakSet;class bf{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ot&&(Ot.active?Ot.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ea.has(this)&&(Ea.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||wf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Eh(this),Af(this);const e=ft,t=In;ft=this,In=!0;try{return this.fn()}finally{Tf(this),ft=e,In=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Lc(e);this.deps=this.depsTail=void 0,Eh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ea.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){bl(this)&&this.run()}get dirty(){return bl(this)}}let Ef=0,mr,gr;function wf(n,e=!1){if(n.flags|=8,e){n.next=gr,gr=n;return}n.next=mr,mr=n}function Cc(){Ef++}function Pc(){if(--Ef>0)return;if(gr){let e=gr;for(gr=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;mr;){let e=mr;for(mr=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function Af(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Tf(n){let e,t=n.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),Lc(i),kp(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=e,n.depsTail=t}function bl(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Rf(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Rf(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Tr)||(n.globalVersion=Tr,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!bl(n))))return;n.flags|=2;const e=n.dep,t=ft,i=In;ft=n,In=!0;try{Af(n);const s=n.fn(n._value);(e.version===0||Wn(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{ft=t,In=i,Tf(n),n.flags&=-3}}function Lc(n,e=!1){const{dep:t,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)Lc(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function kp(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let In=!0;const Cf=[];function jn(){Cf.push(In),In=!1}function Kn(){const n=Cf.pop();In=n===void 0?!0:n}function Eh(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=ft;ft=void 0;try{e()}finally{ft=t}}}let Tr=0;class Bp{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ic{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!ft||!In||ft===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==ft)t=this.activeLink=new Bp(ft,this),ft.deps?(t.prevDep=ft.depsTail,ft.depsTail.nextDep=t,ft.depsTail=t):ft.deps=ft.depsTail=t,Pf(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=ft.depsTail,t.nextDep=void 0,ft.depsTail.nextDep=t,ft.depsTail=t,ft.deps===t&&(ft.deps=i)}return t}trigger(e){this.version++,Tr++,this.notify(e)}notify(e){Cc();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Pc()}}}function Pf(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Pf(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const El=new WeakMap,is=Symbol(""),wl=Symbol(""),Rr=Symbol("");function zt(n,e,t){if(In&&ft){let i=El.get(n);i||El.set(n,i=new Map);let s=i.get(t);s||(i.set(t,s=new Ic),s.map=i,s.key=t),s.track()}}function ui(n,e,t,i,s,r){const o=El.get(n);if(!o){Tr++;return}const a=l=>{l&&l.trigger()};if(Cc(),e==="clear")o.forEach(a);else{const l=Be(n),c=l&&Rc(t);if(l&&t==="length"){const h=Number(i);o.forEach((f,u)=>{(u==="length"||u===Rr||!qn(u)&&u>=h)&&a(f)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(Rr)),e){case"add":l?c&&a(o.get("length")):(a(o.get(is)),Ci(n)&&a(o.get(wl)));break;case"delete":l||(a(o.get(is)),Ci(n)&&a(o.get(wl)));break;case"set":Ci(n)&&a(o.get(is));break}}Pc()}function ps(n){const e=rt(n);return e===n||(zt(e,"iterate",Rr),yn(n))?e:$n(n)?Pi(n)?e.map(t=>Ni(Mn(t))):e.map(Ni):e.map(Mn)}function ra(n){return zt(n=rt(n),"iterate",Rr),n}function Bn(n,e){return $n(n)?Ni(Pi(n)?Mn(e):e):Mn(e)}const zp={__proto__:null,[Symbol.iterator](){return wa(this,Symbol.iterator,n=>Bn(this,n))},concat(...n){return ps(this).concat(...n.map(e=>Be(e)?ps(e):e))},entries(){return wa(this,"entries",n=>(n[1]=Bn(this,n[1]),n))},every(n,e){return ei(this,"every",n,e,void 0,arguments)},filter(n,e){return ei(this,"filter",n,e,t=>t.map(i=>Bn(this,i)),arguments)},find(n,e){return ei(this,"find",n,e,t=>Bn(this,t),arguments)},findIndex(n,e){return ei(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return ei(this,"findLast",n,e,t=>Bn(this,t),arguments)},findLastIndex(n,e){return ei(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return ei(this,"forEach",n,e,void 0,arguments)},includes(...n){return Aa(this,"includes",n)},indexOf(...n){return Aa(this,"indexOf",n)},join(n){return ps(this).join(n)},lastIndexOf(...n){return Aa(this,"lastIndexOf",n)},map(n,e){return ei(this,"map",n,e,void 0,arguments)},pop(){return er(this,"pop")},push(...n){return er(this,"push",n)},reduce(n,...e){return Ah(this,"reduce",n,e)},reduceRight(n,...e){return Ah(this,"reduceRight",n,e)},shift(){return er(this,"shift")},some(n,e){return ei(this,"some",n,e,void 0,arguments)},splice(...n){return er(this,"splice",n)},toReversed(){return ps(this).toReversed()},toSorted(n){return ps(this).toSorted(n)},toSpliced(...n){return ps(this).toSpliced(...n)},unshift(...n){return er(this,"unshift",n)},values(){return wa(this,"values",n=>Bn(this,n))}};function wa(n,e,t){const i=ra(n),s=i[e],r=s.call(i);if(i!==n&&!yn(n)){if(r[Symbol.toStringTag]==="Array Iterator"){const o=Object.create(Object.getPrototypeOf(r));return o.next=()=>wh(r.next(),t),s!==Lf[e]&&Object.defineProperties(o,{return:{get(){const a=r.return;return typeof a=="function"?a.bind(r):a}},throw:{get(){const a=r.throw;return typeof a=="function"?a.bind(r):a}}}),o}r._next=r.next,r.next=()=>wh(r._next(),t)}return r}function wh(n,e){return n.done||(n.value=e(n.value)),n}const Lf=Array.prototype;function ei(n,e,t,i,s,r){const o=ra(n),a=o!==n&&!yn(n),l=o[e];if(l!==Lf[e]){const f=l.apply(n,r);return a?Mn(f):f}let c=t;o!==n&&(a?c=function(f,u){return t.call(this,Bn(n,f),u,n)}:t.length>2&&(c=function(f,u){return t.call(this,f,u,n)}));const h=l.call(o,c,i);return a&&s?s(h):h}function Ah(n,e,t,i){const s=ra(n),r=s!==n&&!yn(n);let o=t,a=!1;s!==n&&(r?(a=i.length===0,o=function(c,h,f){return a&&(a=!1,c=Bn(n,c)),t.call(this,c,Bn(n,h),f,n)}):t.length>3&&(o=function(c,h,f){return t.call(this,c,h,f,n)}));const l=s[e](o,...i);return a?Bn(n,l):l}function Aa(n,e,t){const i=rt(n);zt(i,"iterate",Rr);const s=i[e](...t);return(s===-1||s===!1)&&Oc(t[0])?(t[0]=rt(t[0]),i[e](...t)):s}function er(n,e,t=[]){jn(),Cc();const i=rt(n)[e].apply(n,t);return Pc(),Kn(),i}const Hp=Ac("__proto__,__v_isRef,__isVue"),If=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(qn));function Vp(n){qn(n)||(n=String(n));const e=rt(this);return zt(e,"has",n),e.hasOwnProperty(n)}class Df{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?Zp:Ff:r?Of:Uf).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Be(e);if(!s){let l;if(o&&(l=zp[t]))return l;if(t==="hasOwnProperty")return Vp}const a=Reflect.get(e,t,Gt(e)?e:i);if((qn(t)?If.has(t):Hp(t))||(s||zt(e,"get",t),r))return a;if(Gt(a)){const l=o&&Rc(t)?a:a.value;return s&&ht(l)?Tl(l):l}return ht(a)?s?Tl(a):Nc(a):a}}class Nf extends Df{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];const o=Be(e)&&Rc(t);if(!this._isShallow){const c=$n(r);if(!yn(i)&&!$n(i)&&(r=rt(r),i=rt(i)),!o&&Gt(r)&&!Gt(i))return c||(r.value=i),!0}const a=o?Number(t)<e.length:nt(e,t),l=Reflect.set(e,t,i,Gt(e)?e:s);return e===rt(s)&&l&&(a?Wn(i,r)&&ui(e,"set",t,i):ui(e,"add",t,i)),l}deleteProperty(e,t){const i=nt(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&ui(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!qn(t)||!If.has(t))&&zt(e,"has",t),i}ownKeys(e){return zt(e,"iterate",Be(e)?"length":is),Reflect.ownKeys(e)}}class Gp extends Df{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Wp=new Nf,Xp=new Gp,Yp=new Nf(!0);const Al=n=>n,jr=n=>Reflect.getPrototypeOf(n);function qp(n,e,t){return function(...i){const s=this.__v_raw,r=rt(s),o=Ci(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),h=t?Al:e?Ni:Mn;return!e&&zt(r,"iterate",l?wl:is),Ct(Object.create(c),{next(){const{value:f,done:u}=c.next();return u?{value:f,done:u}:{value:a?[h(f[0]),h(f[1])]:h(f),done:u}}})}}function Kr(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function jp(n,e){const t={get(s){const r=this.__v_raw,o=rt(r),a=rt(s);n||(Wn(s,a)&&zt(o,"get",s),zt(o,"get",a));const{has:l}=jr(o),c=e?Al:n?Ni:Mn;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&zt(rt(s),"iterate",is),s.size},has(s){const r=this.__v_raw,o=rt(r),a=rt(s);return n||(Wn(s,a)&&zt(o,"has",s),zt(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=rt(a),c=e?Al:n?Ni:Mn;return!n&&zt(l,"iterate",is),a.forEach((h,f)=>s.call(r,c(h),c(f),o))}};return Ct(t,n?{add:Kr("add"),set:Kr("set"),delete:Kr("delete"),clear:Kr("clear")}:{add(s){const r=rt(this),o=jr(r),a=rt(s),l=!e&&!yn(s)&&!$n(s)?a:s;return o.has.call(r,l)||Wn(s,l)&&o.has.call(r,s)||Wn(a,l)&&o.has.call(r,a)||(r.add(l),ui(r,"add",l,l)),this},set(s,r){!e&&!yn(r)&&!$n(r)&&(r=rt(r));const o=rt(this),{has:a,get:l}=jr(o);let c=a.call(o,s);c||(s=rt(s),c=a.call(o,s));const h=l.call(o,s);return o.set(s,r),c?Wn(r,h)&&ui(o,"set",s,r):ui(o,"add",s,r),this},delete(s){const r=rt(this),{has:o,get:a}=jr(r);let l=o.call(r,s);l||(s=rt(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&ui(r,"delete",s,void 0),c},clear(){const s=rt(this),r=s.size!==0,o=s.clear();return r&&ui(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=qp(s,n,e)}),t}function Dc(n,e){const t=jp(n,e);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_isShallow"?e:s==="__v_raw"?i:Reflect.get(nt(t,s)&&s in i?t:i,s,r)}const Kp={get:Dc(!1,!1)},$p={get:Dc(!1,!0)},Jp={get:Dc(!0,!1)};const Uf=new WeakMap,Of=new WeakMap,Ff=new WeakMap,Zp=new WeakMap;function Qp(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Nc(n){return $n(n)?n:Uc(n,!1,Wp,Kp,Uf)}function em(n){return Uc(n,!1,Yp,$p,Of)}function Tl(n){return Uc(n,!0,Xp,Jp,Ff)}function Uc(n,e,t,i,s){if(!ht(n)||n.__v_raw&&!(e&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const r=s.get(n);if(r)return r;const o=Qp(Ep(n));if(o===0)return n;const a=new Proxy(n,o===2?i:t);return s.set(n,a),a}function Pi(n){return $n(n)?Pi(n.__v_raw):!!(n&&n.__v_isReactive)}function $n(n){return!!(n&&n.__v_isReadonly)}function yn(n){return!!(n&&n.__v_isShallow)}function Oc(n){return n?!!n.__v_raw:!1}function rt(n){const e=n&&n.__v_raw;return e?rt(e):n}function kf(n){return!nt(n,"__v_skip")&&Object.isExtensible(n)&&vf(n,"__v_skip",!0),n}const Mn=n=>ht(n)?Nc(n):n,Ni=n=>ht(n)?Tl(n):n;function Gt(n){return n?n.__v_isRef===!0:!1}function Rt(n){return tm(n,!1)}function tm(n,e){return Gt(n)?n:new nm(n,e)}class nm{constructor(e,t){this.dep=new Ic,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:rt(e),this._value=t?e:Mn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||yn(e)||$n(e);e=i?e:rt(e),Wn(e,t)&&(this._rawValue=e,this._value=i?e:Mn(e),this.dep.trigger())}}function vt(n){return Gt(n)?n.value:n}const im={get:(n,e,t)=>e==="__v_raw"?n:vt(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return Gt(s)&&!Gt(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function Bf(n){return Pi(n)?n:new Proxy(n,im)}class sm{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Ic(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Tr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&ft!==this)return wf(this,!0),!0}get value(){const e=this.dep.track();return Rf(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function rm(n,e,t=!1){let i,s;return qe(n)?i=n:(i=n.get,s=n.set),new sm(i,s,t)}const $r={},Fo=new WeakMap;let qi;function om(n,e=!1,t=qi){if(t){let i=Fo.get(t);i||Fo.set(t,i=[]),i.push(n)}}function am(n,e,t=ut){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=t,c=E=>s?E:yn(E)||s===!1||s===0?fi(E,1):fi(E);let h,f,u,d,g=!1,_=!1;if(Gt(n)?(f=()=>n.value,g=yn(n)):Pi(n)?(f=()=>c(n),g=!0):Be(n)?(_=!0,g=n.some(E=>Pi(E)||yn(E)),f=()=>n.map(E=>{if(Gt(E))return E.value;if(Pi(E))return c(E);if(qe(E))return l?l(E,2):E()})):qe(n)?e?f=l?()=>l(n,2):n:f=()=>{if(u){jn();try{u()}finally{Kn()}}const E=qi;qi=h;try{return l?l(n,3,[d]):n(d)}finally{qi=E}}:f=Xn,e&&s){const E=f,U=s===!0?1/0:s;f=()=>fi(E(),U)}const p=Fp(),m=()=>{h.stop(),p&&p.active&&Tc(p.effects,h)};if(r&&e){const E=e;e=(...U)=>{try{return E(...U)}finally{m()}}}let M=_?new Array(n.length).fill($r):$r;const v=E=>{if(!(!(h.flags&1)||!h.dirty&&!E))if(e){const U=h.run();if(E||s||g||(_?U.some((R,P)=>Wn(R,M[P])):Wn(U,M))){const R=qi;jn();try{u&&u(),qi=h;const P=[U,M===$r?void 0:_&&M[0]===$r?[]:M,d];M=U,l?l(e,3,P):e(...P)}finally{qi=R,Kn()}}}else h.run()};return a&&a(v),h=new bf(f),h.scheduler=o?()=>o(v,!1):v,d=E=>om(E,!1,h),u=h.onStop=()=>{const E=Fo.get(h);if(E){if(l)l(E,4);else for(const U of E)U();Fo.delete(h)}},e?i?v(!0):M=h.run():o?o(v.bind(null,!0),!0):h.run(),m.pause=h.pause.bind(h),m.resume=h.resume.bind(h),m.stop=m,m}function fi(n,e=1/0,t){if(e<=0||!ht(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,Gt(n))fi(n.value,e,t);else if(Be(n))for(let i=0;i<n.length;i++)fi(n[i],e,t);else if(rs(n)||Ci(n))n.forEach(i=>{fi(i,e,t)});else if(gf(n)){for(const i in n)fi(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&fi(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function zr(n,e,t,i){try{return i?n(...i):n()}catch(s){oa(s,e,t)}}function Nn(n,e,t,i){if(qe(n)){const s=zr(n,e,t,i);return s&&pf(s)&&s.catch(r=>{oa(r,e,t,void 0,!0)}),s}if(Be(n)){const s=[];for(let r=0;r<n.length;r++)s.push(Nn(n[r],e,t,i));return s}}function oa(n,e,t,i=!0,s=!1){const r=e?e.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||ut;if(e){let l=e.parent;const c=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${t}`;for(;l;){const f=l.ec;if(f&&!l.isUnmounted&&(!s||l.scope.active)){for(let u=0;u<f.length;u++)if(f[u](n,c,h)===!1)return}l=l.parent}if(o){jn(),zr(o,null,10,[n,c,h]),Kn();return}}lm(n,t,r,i,a)}function lm(n,e,t,i=!0,s=!1){if(s)throw n;console.error(n)}const jt=[];let An=-1;const zn=[];let wi=null,Cs=0;const zf=Promise.resolve();let ko=null;function Fc(n){const e=ko||zf;return n?e.then(this?n.bind(this):n):e}function cm(n){let e=An+1,t=jt.length;for(;e<t;){const i=e+t>>>1,s=jt[i],r=Cr(s);r<n||r===n&&s.flags&2?e=i+1:t=i}return e}function kc(n){if(!(n.flags&1)){const e=Cr(n),t=jt[jt.length-1];!t||!(n.flags&2)&&e>=Cr(t)?jt.push(n):jt.splice(cm(e),0,n),n.flags|=1,Hf()}}function Hf(){ko||(ko=zf.then(Wf))}function hm(n){if(!Be(n))wi&&n.id===-1?wi.splice(Cs+1,0,n):n.flags&1||(zn.push(n),n.flags|=1);else for(let e=0;e<n.length;e++)zn.push(n[e]);Hf()}function Vf(n,e,t,i=An+1){for(;i<jt.length;i++){const s=jt[i];if(s&&s.flags&2){if(n&&s.id!==n.uid||e!==void 0&&!(s.id>=e))continue;jt.splice(i,1),i=n?i-1:An,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function Gf(n,e,t=0){if(zn.length){let i=zn,s=0;if(e){i=[];for(let o=0;o<zn.length;o++){const a=zn[o];(a.i!==void 0?!a.i||a.i.uid<t:e.has(a))?zn[s++]=a:i.push(a)}}const r=[...new Set(i)].sort((o,a)=>Cr(o)-Cr(a));if(zn.length=s,wi){for(let o=0;o<r.length;o++)wi.push(r[o]);return}for(wi=r,Cs=0;Cs<wi.length;Cs++){const o=wi[Cs];o.flags&4&&(o.flags&=-2),o.flags&8||o(),o.flags&=-2}wi=null,Cs=0}}let Ta=!1;function um(n,e){if(Ta){n();return}const t=e===void 0?void 0:new Set(zn);n(),Ta=!0;try{Vf(void 0,e),Gf(void 0,t,e)}finally{Ta=!1}}const Cr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Wf(n){try{for(An=0;An<jt.length;An++){const e=jt[An];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),zr(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;An<jt.length;An++){const e=jt[An];e&&(e.flags&=-2)}An=-1,jt.length=0,Gf(),ko=null,(jt.length||zn.length)&&Wf()}}let xn=null,Xf=null;function Bo(n){const e=xn;return xn=n,Xf=n&&n.type.__scopeId||null,e}function fm(n,e=xn,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&Fh(-1);const r=Bo(e),o=ss.length;let a;try{a=n(...s)}finally{for(let l=ss.length;l>o;l--)gd();Bo(r),i._d&&Fh(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function Ps(n,e){if(xn===null)return n;const t=ha(xn),i=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=ut]=e[s];r&&(qe(r)&&(r={mounted:r,updated:r}),r.deep&&fi(o),i.push({dir:r,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function Bi(n,e,t,i){let s=n;if(i==="beforeMount")n._mount=n;else if(i==="beforeUpdate"){const a=e&&e._mount;a&&(a._latest=n,n._mount=a)}else if(i==="mounted"){const a=n._latest;n._mount=n._latest=void 0,a&&(s=a,a._mount=void 0)}const r=s.dirs,o=e&&e.dirs;for(let a=0;a<r.length;a++){let l=r[a];o?l.oldValue=o[a].value:i==="mounted"&&l.oldValue!==void 0&&(l=Ct({},l,{oldValue:void 0}));let c=l.dir[i];c&&(jn(),Nn(c,t,8,[n.el,l,s,e]),Kn())}}function dm(n,e){if(Kt){let t=Kt.provides;const i=Kt.parent&&Kt.parent.provides;i===t&&(t=Kt.provides=Object.create(i)),t[n]=e}}function Ro(n,e,t=!1){const i=u0();if(i||Us){let s=Us?Us._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&qe(e)?e.call(i&&i.proxy):e}}const pm=Symbol.for("v-scx"),mm=()=>Ro(pm);function Ns(n,e,t){return Yf(n,e,t)}function Yf(n,e,t=ut){const{immediate:i,deep:s,flush:r,once:o}=t,a=Ct({},t),l=e&&i||!e&&r!=="post";let c;if(Dr){if(r==="sync"){const d=mm();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=Xn,d.resume=Xn,d.pause=Xn,d}}const h=Kt;a.call=(d,g,_)=>Nn(d,h,g,_);let f=!1;r==="post"?a.scheduler=d=>{d.i=h,Yt(d,h&&h.suspense)}:r!=="sync"&&(f=!0,a.scheduler=(d,g)=>{g?d():kc(d)}),a.augmentJob=d=>{e&&(d.flags|=4),f&&(d.flags|=2,h&&(d.id=h.uid,d.i=h))};const u=am(n,e,a);return Dr&&(c?c.push(u):l&&u()),u}function gm(n,e,t){const i=this.proxy,s=Et(n)?n.includes(".")?qf(i,n):()=>i[n]:n.bind(i,i);let r;qe(e)?r=e:(r=e.handler,t=e);const o=Hr(this),a=Yf(s,r.bind(i),t);return o(),a}function qf(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}const _m=Symbol("_vte"),aa=n=>n.__isTeleport,Ra=Symbol("_leaveCb");function vm(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==Un){e=t;break}}return e}function jf(n){if(!Bc(n))return aa(n.type)&&n.children?vm(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&qe(t.default))return t.default()}}function _r(n,e){if(n.shapeFlag&6&&n.component){n.transition=e;const t=n.component.subTree;_r(aa(t.type)&&jf(t)||t,e)}else if(n.shapeFlag&128){const t=n.suspense;if(t){const i=t.isHydrating?t.pendingBranch:t.activeBranch;i&&_r(i,e.clone(i))}else n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)}else if(n.transition=e,n.type===xt&&Be(n.children)){const t=id(n.children,!1);t&&_r(t,e)}}function Rl(n){if(n.component)return Rl(n.component.subTree);if(n.type===xt){const e=Be(n.children)&&id(n.children,!1);return e?Rl(e):void 0}if(n.type!==Un)return n}function Kf(n,e){return qe(n)?Ct({name:n.name},e,{setup:n}):n}function $f(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Th(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const zo=new WeakMap;function vr(n,e,t,i,s=!1){if(Be(n)){n.forEach((_,p)=>vr(_,e&&(Be(e)?e[p]:e),t,i,s));return}if(xr(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&vr(n,e,t,i.component.subTree);return}const r=i.shapeFlag&4?ha(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=e&&e.r,h=a.refs===ut?a.refs={}:a.refs,f=a.setupState,u=rt(f),d=f===ut?df:_=>Th(h,_)?!1:nt(u,_),g=(_,p)=>!(p&&Th(h,p));if(c!=null&&c!==l){if(Rh(e),Et(c))h[c]=null,d(c)&&(f[c]=null);else if(Gt(c)){const _=e;g(c,_.k)&&(c.value=null),_.k&&(h[_.k]=null)}}if(qe(l))zr(l,a,12,[o,h]);else{const _=Et(l),p=Gt(l);if(_||p){const m=()=>{if(n.f){const M=_?d(l)?f[l]:h[l]:g()||!n.k?l.value:h[n.k];if(s)Be(M)&&Tc(M,r);else if(Be(M))M.includes(r)||M.push(r);else if(_)h[l]=[r],d(l)&&(f[l]=h[l]);else{const v=[r];g(l,n.k)&&(l.value=v),n.k&&(h[n.k]=v)}}else _?(h[l]=o,d(l)&&(f[l]=o)):p&&(g(l,n.k)&&(l.value=o),n.k&&(h[n.k]=o))};if(o){const M=()=>{m(),zo.delete(n)};M.id=-1,zo.set(n,M),Yt(M,t)}else Rh(n),m()}}}function Rh(n){const e=zo.get(n);e&&(e.flags|=8,zo.delete(n))}sa().requestIdleCallback;sa().cancelIdleCallback;const xr=n=>!!n.type.__asyncLoader,Bc=n=>n.type.__isKeepAlive;function xm(n,e){Jf(n,"a",e)}function ym(n,e){Jf(n,"da",e)}function Jf(n,e,t=Kt){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Pr(e,i,t),t){let s=t.parent;for(;s&&s.parent;)Bc(s.parent.vnode)&&Mm(i,e,t,s),s=s.parent}}function Mm(n,e,t,i){const s=Pr(e,n,i,!0),r=Pr("um",()=>Tc(i[e],s),t);r.flags=16}function Pr(n,e,t=Kt,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...o)=>{jn();const a=Hr(t),l=Nn(e,t,n,o);return a(),Kn(),l});return i?s.unshift(r):s.push(r),r}}const _i=n=>(e,t=Kt)=>{(!Dr||n==="sp")&&Pr(n,(...i)=>e(...i),t)},Sm=_i("bm"),Zf=_i("m"),bm=_i("bu"),Em=_i("u"),zc=_i("bum"),wm=_i("um"),Am=_i("sp"),Tm=_i("rtg"),Rm=_i("rtc");function Cm(n,e=Kt){Pr("ec",n,e)}const Pm=Symbol.for("v-ndc");function ti(n,e,t,i){let s;const r=t,o=Be(n);if(o||Et(n)){const a=o&&Pi(n);let l=!1,c=!1;a&&(l=!yn(n),c=$n(n),n=ra(n)),s=new Array(n.length);for(let h=0,f=n.length;h<f;h++)s[h]=e(l?c?Ni(Mn(n[h])):Mn(n[h]):n[h],h,void 0,r)}else if(typeof n=="number")if(!Number.isInteger(n)||n<0)s=[];else{s=new Array(n);for(let a=0;a<n;a++)s[a]=e(a+1,a,void 0,r)}else if(ht(n))if(n[Symbol.iterator])s=Array.from(n,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(n);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const h=a[l];s[l]=e(n[h],h,l,r)}}else s=[];return s}const Cl=n=>n?yd(n)?ha(n):Cl(n.parent):null,yr=Ct(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Cl(n.parent),$root:n=>Cl(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>ed(n),$forceUpdate:n=>n.f||(n.f=()=>{kc(n.update)}),$nextTick:n=>n.n||(n.n=Fc.bind(n.proxy)),$watch:n=>gm.bind(n)}),Ca=(n,e)=>n!==ut&&!n.__isScriptSetup&&nt(n,e),Lm={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;if(e[0]!=="$"){const u=o[e];if(u!==void 0)switch(u){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(Ca(i,e))return o[e]=1,i[e];if(s!==ut&&nt(s,e))return o[e]=2,s[e];if(nt(r,e))return o[e]=3,r[e];if(t!==ut&&nt(t,e))return o[e]=4,t[e];Pl&&(o[e]=0)}}const c=yr[e];let h,f;if(c)return e==="$attrs"&&zt(n.attrs,"get",""),c(n);if((h=a.__cssModules)&&(h=h[e]))return h;if(t!==ut&&nt(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,nt(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return Ca(s,e)?(s[e]=t,!0):i!==ut&&nt(i,e)?(i[e]=t,!0):nt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,props:r,type:o}},a){let l;return!!(t[a]||n!==ut&&a[0]!=="$"&&nt(n,a)||Ca(e,a)||nt(r,a)||nt(i,a)||nt(yr,a)||nt(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:nt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Ch(n){return Be(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Pl=!0;function Im(n){const e=ed(n),t=n.proxy,i=n.ctx;Pl=!1,e.beforeCreate&&Ph(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:h,beforeMount:f,mounted:u,beforeUpdate:d,updated:g,activated:_,deactivated:p,beforeDestroy:m,beforeUnmount:M,destroyed:v,unmounted:E,render:U,renderTracked:R,renderTriggered:P,errorCaptured:D,serverPrefetch:Z,expose:x,inheritAttrs:w,components:z,directives:W,filters:$}=e;if(c&&Dm(c,i,null),o)for(const se in o){const G=o[se];qe(G)&&(i[se]=G.bind(t))}if(s){const se=s.call(t,t);ht(se)&&(n.data=Nc(se))}if(Pl=!0,r)for(const se in r){const G=r[se],_e=qe(G)?G.bind(t,t):qe(G.get)?G.get.bind(t,t):Xn,Me=!qe(G)&&qe(G.set)?G.set.bind(t):Xn,we=cn({get:_e,set:Me});Object.defineProperty(i,se,{enumerable:!0,configurable:!0,get:()=>we.value,set:We=>we.value=We})}if(a)for(const se in a)Qf(a[se],i,t,se);if(l){const se=qe(l)?l.call(t):l;Reflect.ownKeys(se).forEach(G=>{dm(G,se[G])})}h&&Ph(h,n,"c");function V(se,G){Be(G)?G.forEach(_e=>se(_e.bind(t))):G&&se(G.bind(t))}if(V(Sm,f),V(Zf,u),V(bm,d),V(Em,g),V(xm,_),V(ym,p),V(Cm,D),V(Rm,R),V(Tm,P),V(zc,M),V(wm,E),V(Am,Z),Be(x))if(x.length){const se=n.exposed||(n.exposed={});x.forEach(G=>{Object.defineProperty(se,G,{get:()=>t[G],set:_e=>t[G]=_e,enumerable:!0})})}else n.exposed||(n.exposed={});U&&n.render===Xn&&(n.render=U),w!=null&&(n.inheritAttrs=w),z&&(n.components=z),W&&(n.directives=W),Z&&$f(n)}function Dm(n,e,t=Xn){Be(n)&&(n=Ll(n));for(const i in n){const s=n[i];let r;ht(s)?"default"in s?r=Ro(s.from||i,s.default,!0):r=Ro(s.from||i):r=Ro(s),Gt(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function Ph(n,e,t){Nn(Be(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Qf(n,e,t,i){let s=i.includes(".")?qf(t,i):()=>t[i];if(Et(n)){const r=e[n];qe(r)&&Ns(s,r)}else if(qe(n))Ns(s,n.bind(t));else if(ht(n))if(Be(n))n.forEach(r=>Qf(r,e,t,i));else{const r=qe(n.handler)?n.handler.bind(t):e[n.handler];qe(r)&&Ns(s,r,n)}}function ed(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>Ho(l,c,o,!0)),Ho(l,e,o)),ht(e)&&r.set(e,l),l}function Ho(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&Ho(n,r,t,!0),s&&s.forEach(o=>Ho(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=Nm[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const Nm={data:Lh,props:Ih,emits:Ih,methods:ur,computed:ur,beforeCreate:Xt,created:Xt,beforeMount:Xt,mounted:Xt,beforeUpdate:Xt,updated:Xt,beforeDestroy:Xt,beforeUnmount:Xt,destroyed:Xt,unmounted:Xt,activated:Xt,deactivated:Xt,errorCaptured:Xt,serverPrefetch:Xt,components:ur,directives:ur,watch:Om,provide:Lh,inject:Um};function Lh(n,e){return e?n?function(){return Ct(qe(n)?n.call(this,this):n,qe(e)?e.call(this,this):e)}:e:n}function Um(n,e){return ur(Ll(n),Ll(e))}function Ll(n){if(Be(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Xt(n,e){return n?[...new Set([].concat(n,e))]:e}function ur(n,e){return n?Ct(Object.create(null),n,e):e}function Ih(n,e){return n?Be(n)&&Be(e)?[...new Set([...n,...e])]:Ct(Object.create(null),Ch(n),Ch(e??{})):e}function Om(n,e){if(!n)return e;if(!e)return n;const t=Ct(Object.create(null),n);for(const i in e)t[i]=Xt(n[i],e[i]);return t}function td(){return{app:null,config:{isNativeTag:df,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Fm=0;function km(n,e){return function(i,s=null){qe(i)||(i=Ct({},i)),s!=null&&!ht(s)&&(s=null);const r=td(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:Fm++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:_0,get config(){return r.config},set config(h){},use(h,...f){return o.has(h)||(h&&qe(h.install)?(o.add(h),h.install(c,...f)):qe(h)&&(o.add(h),h(c,...f))),c},mixin(h){return r.mixins.includes(h)||r.mixins.push(h),c},component(h,f){return f?(r.components[h]=f,c):r.components[h]},directive(h,f){return f?(r.directives[h]=f,c):r.directives[h]},mount(h,f,u){if(!l){const d=c._ceVNode||Yn(i,s);return d.appContext=r,u===!0?u="svg":u===!1&&(u=void 0),n(d,h,u),l=!0,c._container=h,h.__vue_app__=c,ha(d.component)}},onUnmount(h){a.push(h)},unmount(){l&&(Nn(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(h,f){return r.provides[h]=f,c},runWithContext(h){const f=Us;Us=c;try{return h()}finally{Us=f}}};return c}}let Us=null;const Bm=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Ln(e)}Modifiers`]||n[`${hs(e)}Modifiers`];function zm(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||ut;let s=t;const r=e.startsWith("update:"),o=r&&Bm(i,e.slice(7));o&&(o.trim&&(s=t.map(h=>Et(h)?h.trim():h)),o.number&&(s=s.map(Br)));let a,l=i[a=Sa(e)]||i[a=Sa(Ln(e))];!l&&r&&(l=i[a=Sa(hs(e))]),l&&Nn(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Nn(c,n,6,s)}}const Hm=new WeakMap;function nd(n,e,t=!1){const i=t?Hm:e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!qe(n)){const l=c=>{const h=nd(c,e,!0);h&&(a=!0,Ct(o,h))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(ht(n)&&i.set(n,null),null):(Be(r)?r.forEach(l=>o[l]=null):Ct(o,r),ht(n)&&i.set(n,o),o)}function la(n,e){return!n||!ta(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),nt(n,e[0].toLowerCase()+e.slice(1))||nt(n,hs(e))||nt(n,e))}function Dh(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:h,props:f,data:u,setupState:d,ctx:g,inheritAttrs:_}=n,p=Bo(n);let m,M;try{if(t.shapeFlag&4){const E=s||i,U=E;m=Hn(c.call(U,E,h,f,d,u,g)),M=a}else{const E=e;m=Hn(E.length>1?E(f,{attrs:a,slots:o,emit:l}):E(f,null)),M=e.props?a:Vm(a)}}catch(E){ss.length=0,oa(E,n,1),m=Yn(Un)}let v=m;if(M&&_!==!1){const E=Object.keys(M),{shapeFlag:U}=v;E.length&&U&7&&(r&&E.some(na)&&(M=Gm(M,r)),v=Hs(v,M,!1,!0))}if(t.dirs&&(v=Hs(v,null,!1,!0),v.dirs=v.dirs?v.dirs.concat(t.dirs):t.dirs),t.transition){const E=aa(v.type)&&jf(v)||v;_r(E,t.transition)}return m=v,Bo(p),m}function id(n,e=!0){let t;for(let i=0;i<n.length;i++){const s=n[i];if(Gc(s)){if(s.type!==Un||s.children==="v-if"){if(t)return;t=s}}else return}return t}const Vm=n=>{let e;for(const t in n)(t==="class"||t==="style"||ta(t))&&((e||(e={}))[t]=n[t]);return e},Gm=(n,e)=>{const t={};for(const i in n)(!na(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Wm(n,e,t){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Nh(i,o,c):!!o;if(l&8){const h=e.dynamicProps;for(let f=0;f<h.length;f++){const u=h[f];if(sd(o,i,u)&&!la(c,u))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Nh(i,o,c):!0:!!o;return!1}function Nh(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(!nt(n,r)||sd(e,n,r)&&!la(t,r))return!0}return!1}function sd(n,e,t){const i=n[t],s=e[t];return t==="style"&&ht(i)&&ht(s)?!Di(i,s):i!==s}function Xm({vnode:n,parent:e,suspense:t},i){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.suspense.vnode.el=s.el=i,n=s),s===n)(n=e.vnode).el=i,e=e.parent;else break}t&&t.activeBranch===n&&(t.vnode.el=i)}const rd={},od=()=>Object.create(rd),ad=n=>Object.getPrototypeOf(n)===rd;function Ym(n,e,t,i=!1){const s={},r=od();n.propsDefaults=Object.create(null),ld(n,e,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=i?s:em(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function qm(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=rt(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const h=n.vnode.dynamicProps;for(let f=0;f<h.length;f++){let u=h[f];if(la(n.emitsOptions,u))continue;const d=e[u];if(l)if(nt(r,u))d!==r[u]&&(r[u]=d,c=!0);else{const g=Ln(u);s[g]=Il(l,a,g,d,n,!1)}else d!==r[u]&&(r[u]=d,c=!0)}}}else{ld(n,e,s,r)&&(c=!0);let h;for(const f in a)(!e||!nt(e,f)&&((h=hs(f))===f||!nt(e,h)))&&(l?t&&(t[f]!==void 0||t[h]!==void 0)&&(s[f]=Il(l,a,f,void 0,n,!0)):delete s[f]);if(r!==a)for(const f in r)(!e||!nt(e,f))&&(delete r[f],c=!0)}c&&ui(n.attrs,"set","")}function ld(n,e,t,i){const[s,r]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(pr(l))continue;const c=e[l];let h;s&&nt(s,h=Ln(l))?!r||!r.includes(h)?t[h]=c:(a||(a={}))[h]=c:la(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=rt(t),c=a||ut;for(let h=0;h<r.length;h++){const f=r[h];t[f]=Il(s,l,f,c[f],n,!nt(c,f))}}return o}function Il(n,e,t,i,s,r){const o=n[t];if(o!=null){const a=nt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&qe(l)){const{propsDefaults:c}=s;if(t in c)i=c[t];else{const h=Hr(s);i=c[t]=l.call(null,e),h()}}else i=l;s.ce&&s.ce._setProp(t,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===hs(t))&&(i=!0))}return i}const jm=new WeakMap;function cd(n,e,t=!1){const i=t?jm:e.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!qe(n)){const h=f=>{l=!0;const[u,d]=cd(f,e,!0);Ct(o,u),d&&a.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(h),n.extends&&h(n.extends),n.mixins&&n.mixins.forEach(h)}if(!r&&!l)return ht(n)&&i.set(n,Qi),Qi;if(Be(r))for(let h=0;h<r.length;h++){const f=Ln(r[h]);Uh(f)&&(o[f]=ut)}else if(r)for(const h in r){const f=Ln(h);if(Uh(f)){const u=r[h],d=o[f]=Be(u)||qe(u)?{type:u}:Ct({},u),g=d.type;let _=!1,p=!0;if(Be(g))for(let m=0;m<g.length;++m){const M=g[m],v=qe(M)&&M.name;if(v==="Boolean"){_=!0;break}else v==="String"&&(p=!1)}else _=qe(g)&&g.name==="Boolean";d[0]=_,d[1]=p,(_||nt(d,"default"))&&a.push(f)}}const c=[o,a];return ht(n)&&i.set(n,c),c}function Uh(n){return n[0]!=="$"&&!pr(n)}const Hc=n=>n==="_"||n==="_ctx"||n==="$stable",Vc=n=>Be(n)?n.map(Hn):[Hn(n)],Km=(n,e,t)=>{if(e._n)return e;const i=fm((...s)=>Vc(e(...s)),t);return i._c=!1,i},hd=(n,e,t)=>{const i=n._ctx;for(const s in n){if(Hc(s))continue;const r=n[s];if(qe(r))e[s]=Km(s,r,i);else if(r!=null){const o=Vc(r);e[s]=()=>o}}},ud=(n,e)=>{const t=Vc(e);n.slots.default=()=>t},fd=(n,e,t)=>{for(const i in e)(t||!Hc(i))&&(n[i]=e[i])},$m=(n,e,t)=>{const i=n.slots=od();if(n.vnode.shapeFlag&32){const s=e._;s?(fd(i,e,t),t&&vf(i,"_",s,!0)):hd(e,i)}else e&&ud(n,e)},Jm=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,o=ut;if(i.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:fd(s,e,t):(r=!e.$stable,hd(e,s)),o=e}else e&&(ud(n,e),o={default:1});if(r)for(const a in s)!Hc(a)&&o[a]==null&&delete s[a]},Yt=i0;function Zm(n){return Qm(n)}function Qm(n,e){const t=sa();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:h,parentNode:f,nextSibling:u,setScopeId:d=Xn,insertStaticContent:g}=n,_=(C,T,S,ne=null,X=null,J=null,te=void 0,re=null,Q=!!T.dynamicChildren)=>{if(C===T)return;C&&!tr(C,T)&&(ne=xe(C),We(C,X,J,!0),C=null),T.patchFlag===-2&&(Q=!1,T.dynamicChildren=null),T.dynamicChildren&&C&&C.dynamicChildren&&C.dynamicChildren.hasOnce&&(T.dynamicChildren===Qi&&(T.dynamicChildren=[]),T.dynamicChildren.hasOnce=!0);const{type:b,ref:y,shapeFlag:L}=T;switch(b){case ca:p(C,T,S,ne);break;case Un:m(C,T,S,ne);break;case La:C==null&&M(T,S,ne,te);break;case xt:z(C,T,S,ne,X,J,te,re,Q);break;default:L&1?U(C,T,S,ne,X,J,te,re,Q):L&6?W(C,T,S,ne,X,J,te,re,Q):(L&64||L&128)&&b.process(C,T,S,ne,X,J,te,re,Q,I)}y!=null&&X?vr(y,C&&C.ref,J,T||C,!T):y==null&&C&&C.ref!=null&&vr(C.ref,null,J,C,!0)},p=(C,T,S,ne)=>{if(C==null)i(T.el=a(T.children),S,ne);else{const X=T.el=C.el;T.children!==C.children&&c(X,T.children)}},m=(C,T,S,ne)=>{C==null?i(T.el=l(T.children||""),S,ne):T.el=C.el},M=(C,T,S,ne)=>{[C.el,C.anchor]=g(C.children,T,S,ne,C.el,C.anchor)},v=({el:C,anchor:T},S,ne)=>{let X;for(;C&&C!==T;)X=u(C),i(C,S,ne),C=X;i(T,S,ne)},E=({el:C,anchor:T})=>{let S;for(;C&&C!==T;)S=u(C),s(C),C=S;s(T)},U=(C,T,S,ne,X,J,te,re,Q)=>{if(T.type==="svg"?te="svg":T.type==="math"&&(te="mathml"),C==null)R(T,S,ne,X,J,te,re,Q);else{const b=C.el&&C.el._isVueCE?C.el:null;try{b&&b._beginPatch(),Z(C,T,X,J,te,re,Q)}finally{b&&b._endPatch()}}},R=(C,T,S,ne,X,J,te,re)=>{let Q,b;const{props:y,shapeFlag:L,transition:B,dirs:K}=C;if(Q=C.el=o(C.type,J,y&&y.is,y),L&8?h(Q,C.children):L&16&&D(C.children,Q,null,ne,X,Pa(C,J),te,re),K&&Bi(C,null,ne,"created"),P(Q,C,C.scopeId,te,ne),y){for(const de in y)de!=="value"&&!pr(de)&&r(Q,de,null,y[de],J,ne);"value"in y&&r(Q,"value",null,y.value,J),(b=y.onVnodeBeforeMount)&&On(b,ne,C)}K&&Bi(C,null,ne,"beforeMount");const q=e0(X,B);q?B.beforeEnter(Q):B&&!B.persisted&&(Q[n0]=!0),i(Q,T,S),((b=y&&y.onVnodeMounted)||q||K)&&Yt(()=>{try{b&&On(b,ne,C),q&&B.enter(Q),K&&Bi(C,null,ne,"mounted")}finally{}},X)},P=(C,T,S,ne,X)=>{if(S&&d(C,S),ne)for(let J=0;J<ne.length;J++)d(C,ne[J]);if(X){let J=X.subTree;if(T===J||md(J.type)&&(J.ssContent===T||J.ssFallback===T)){const te=X.vnode;P(C,te,te.scopeId,te.slotScopeIds,X.parent)}}},D=(C,T,S,ne,X,J,te,re,Q=0)=>{for(let b=Q;b<C.length;b++){const y=C[b]=re?hi(C[b]):Hn(C[b]);_(null,y,T,S,ne,X,J,te,re)}},Z=(C,T,S,ne,X,J,te)=>{const re=T.el=C.el;let{patchFlag:Q,dynamicChildren:b,dirs:y}=T;Q|=C.patchFlag&16;const L=C.props||ut,B=T.props||ut;let K;if(S&&zi(S,!1),(K=B.onVnodeBeforeUpdate)&&On(K,S,T,C),y&&Bi(T,C,S,"beforeUpdate"),S&&zi(S,!0),b&&(!C.dynamicChildren||C.dynamicChildren.length!==b.length)&&(Q=0,te=!1,b=null),(L.innerHTML&&B.innerHTML==null||L.textContent&&B.textContent==null)&&h(re,""),b?x(C.dynamicChildren,b,re,S,ne,Pa(T,X),J):te||G(C,T,re,null,S,ne,Pa(T,X),J,!1),Q>0){if(Q&16)w(re,L,B,S,X);else if(Q&2&&L.class!==B.class&&r(re,"class",null,B.class,X),Q&4&&r(re,"style",L.style,B.style,X),Q&8){const q=T.dynamicProps;for(let de=0;de<q.length;de++){const le=q[de],ue=L[le],ke=B[le];(ke!==ue||le==="value")&&r(re,le,ue,ke,X,S)}}Q&1&&C.children!==T.children&&h(re,T.children)}else!te&&b==null&&w(re,L,B,S,X);((K=B.onVnodeUpdated)||y)&&Yt(()=>{K&&On(K,S,T,C),y&&Bi(T,C,S,"updated")},ne)},x=(C,T,S,ne,X,J,te)=>{for(let re=0;re<T.length;re++){const Q=C[re],b=T[re],y=Q.el||Mr(Q),L=y&&(Q.type===xt||!tr(Q,b)||Q.shapeFlag&198)?f(y):S;_(Q,b,L,null,ne,X,J,te,!0)}},w=(C,T,S,ne,X)=>{if(T!==S){if(T!==ut)for(const J in T)!pr(J)&&!(J in S)&&r(C,J,T[J],null,X,ne);for(const J in S){if(pr(J))continue;const te=S[J],re=T[J];te!==re&&J!=="value"&&r(C,J,re,te,X,ne)}"value"in S&&r(C,"value",T.value,S.value,X)}},z=(C,T,S,ne,X,J,te,re,Q)=>{const b=T.el=C?C.el:a(""),y=T.anchor=C?C.anchor:a("");let{patchFlag:L,dynamicChildren:B,slotScopeIds:K}=T;K&&(re=re?re.concat(K):K),C==null?(i(b,S,ne),i(y,S,ne),D(T.children||[],S,y,X,J,te,re,Q)):L>0&&L&64&&B&&C.dynamicChildren&&C.dynamicChildren.length===B.length?(x(C.dynamicChildren,B,S,X,J,te,re),(T.key!=null||X&&T===X.subTree)&&dd(C,T,!0)):G(C,T,S,y,X,J,te,re,Q)},W=(C,T,S,ne,X,J,te,re,Q)=>{T.slotScopeIds=re,C==null?T.shapeFlag&512?X.ctx.activate(T,S,ne,te,Q):$(T,S,ne,X,J,te,Q):ae(C,T,Q)},$=(C,T,S,ne,X,J,te)=>{const re=C.component=h0(C,ne,X);if(Bc(C)&&(re.ctx.renderer=I),f0(re,!1,te),re.asyncDep){if(X&&X.registerDep(re,V,te,J),!C.el){const Q=re.subTree=Yn(Un);m(null,Q,T,S),C.placeholder=Q.el}}else V(re,C,T,S,X,J,te)},ae=(C,T,S)=>{const ne=T.component=C.component;if(Wm(C,T,S))if(ne.asyncDep&&!ne.asyncResolved){T.el=C.el,T.placeholder=C.placeholder,se(ne,T,S);return}else ne.next=T,ne.update();else T.el=C.el,T.placeholder=C.placeholder,ne.vnode=T},V=(C,T,S,ne,X,J,te)=>{const re=()=>{if(C.isMounted){let{next:L,bu:B,u:K,parent:q,vnode:de}=C;{const ye=pd(C);if(ye){L&&(L.el=de.el,se(C,L,te)),ye.asyncDep.then(()=>{const De=()=>{C.job.flags&8||(X&&X.pendingBranch?Yt(De,X):b())};De.flags=48,Yt(De,X)});return}}let le=L,ue;zi(C,!1),L?(L.el=de.el,se(C,L,te)):L=de,B&&To(B),(ue=L.props&&L.props.onVnodeBeforeUpdate)&&On(ue,q,L,de),zi(C,!0);const ke=Dh(C),ce=C.subTree;C.subTree=ke,_(ce,ke,f(ce.el||Mr(ce)),xe(ce),C,X,J),L.el=ke.el,le===null&&Xm(C,ke.el),K&&Yt(K,X),(ue=L.props&&L.props.onVnodeUpdated)&&Yt(()=>On(ue,q,L,de),X)}else{let L;const{el:B,props:K}=T,{bm:q,m:de,parent:le,root:ue,type:ke}=C,ce=xr(T);zi(C,!1),q&&To(q),!ce&&(L=K&&K.onVnodeBeforeMount)&&On(L,le,T),zi(C,!0);{ue.ce&&ue.ce._hasShadowRoot()&&ue.ce._injectChildStyle(ke,C.parent?C.parent.type:void 0);const ye=C.subTree=Dh(C);_(null,ye,S,ne,C,X,J),T.el=ye.el}if(de&&Yt(de,X),!ce&&(L=K&&K.onVnodeMounted)){const ye=T;Yt(()=>On(L,le,ye),X)}(T.shapeFlag&256||le&&xr(le.vnode)&&le.vnode.shapeFlag&256)&&C.a&&Yt(C.a,X),C.isMounted=!0,T=S=ne=null}};C.scope.on();const Q=C.effect=new bf(re);C.scope.off();const b=C.update=Q.run.bind(Q),y=C.job=Q.runIfDirty.bind(Q);y.i=C,y.id=C.uid,Q.scheduler=()=>kc(y),zi(C,!0),b()},se=(C,T,S)=>{T.component=C;const ne=C.vnode.props;C.vnode=T,C.next=null,qm(C,T.props,ne,S),Jm(C,T.children,S),jn(),Vf(C),Kn()},G=(C,T,S,ne,X,J,te,re,Q=!1)=>{const b=C&&C.children,y=C?C.shapeFlag:0,L=T.children,{patchFlag:B,shapeFlag:K}=T;if(B>0){if(B&128){Me(b,L,S,ne,X,J,te,re,Q);return}else if(B&256){_e(b,L,S,ne,X,J,te,re,Q);return}}K&8?(y&16&&Se(b,X,J),L!==b&&h(S,L)):y&16?K&16?Me(b,L,S,ne,X,J,te,re,Q):Se(b,X,J,!0):(y&8&&h(S,""),K&16&&D(L,S,ne,X,J,te,re,Q))},_e=(C,T,S,ne,X,J,te,re,Q)=>{C=C||Qi,T=T||Qi;const b=C.length,y=T.length,L=Math.min(b,y);let B;for(B=0;B<L;B++){const K=T[B]=Q?hi(T[B]):Hn(T[B]);_(C[B],K,S,null,X,J,te,re,Q)}b>y?Se(C,X,J,!0,!1,L):D(T,S,ne,X,J,te,re,Q,L)},Me=(C,T,S,ne,X,J,te,re,Q)=>{let b=0;const y=T.length;let L=C.length-1,B=y-1;for(;b<=L&&b<=B;){const K=C[b],q=T[b]=Q?hi(T[b]):Hn(T[b]);if(tr(K,q))_(K,q,S,null,X,J,te,re,Q);else break;b++}for(;b<=L&&b<=B;){const K=C[L],q=T[B]=Q?hi(T[B]):Hn(T[B]);if(tr(K,q))_(K,q,S,null,X,J,te,re,Q);else break;L--,B--}if(b>L){if(b<=B){const K=B+1,q=K<y?T[K].el:ne;for(;b<=B;)_(null,T[b]=Q?hi(T[b]):Hn(T[b]),S,q,X,J,te,re,Q),b++}}else if(b>B)for(;b<=L;)We(C[b],X,J,!0),b++;else{const K=b,q=b,de=new Map;for(b=q;b<=B;b++){const ge=T[b]=Q?hi(T[b]):Hn(T[b]);ge.key!=null&&de.set(ge.key,b)}let le,ue=0;const ke=B-q+1;let ce=!1,ye=0;const De=new Array(ke);for(b=0;b<ke;b++)De[b]=0;for(b=K;b<=L;b++){const ge=C[b];if(ue>=ke){We(ge,X,J,!0);continue}let Xe;if(ge.key!=null)Xe=de.get(ge.key);else for(le=q;le<=B;le++)if(De[le-q]===0&&tr(ge,T[le])){Xe=le;break}Xe===void 0?We(ge,X,J,!0):(De[Xe-q]=b+1,Xe>=ye?ye=Xe:ce=!0,_(ge,T[Xe],S,null,X,J,te,re,Q),ue++)}const He=ce?t0(De):Qi;for(le=He.length-1,b=ke-1;b>=0;b--){const ge=q+b,Xe=T[ge],Ye=T[ge+1],at=ge+1<y?Ye.el||Mr(Ye):ne;De[b]===0?_(null,Xe,S,at,X,J,te,re,Q):ce&&(le<0||b!==He[le]?we(Xe,S,at,2):le--)}}},we=(C,T,S,ne,X=null)=>{const{el:J,type:te,transition:re,children:Q,shapeFlag:b}=C;if(b&6){we(C.component.subTree,T,S,ne);return}if(b&128){C.suspense.move(T,S,ne);return}if(b&64){te.move(C,T,S,I);return}if(te===xt){i(J,T,S);for(let L=0;L<Q.length;L++)we(Q[L],T,S,ne);i(C.anchor,T,S);return}if(te===La){v(C,T,S);return}if(ne!==2&&b&1&&re)if(ne===0)re.persisted&&!J[Ra]?i(J,T,S):(re.beforeEnter(J),i(J,T,S),Yt(()=>re.enter(J),X));else{const{leave:L,delayLeave:B,afterLeave:K}=re,q=()=>{C.ctx.isUnmounted?s(J):i(J,T,S)},de=()=>{const le=J._isLeaving||!!J[Ra];J._isLeaving&&J[Ra](!0),re.persisted&&!le?q():L(J,()=>{q(),K&&K()})};B?B(J,q,de):de()}else i(J,T,S)},We=(C,T,S,ne=!1,X=!1)=>{const{type:J,props:te,ref:re,children:Q,dynamicChildren:b,shapeFlag:y,patchFlag:L,dirs:B,cacheIndex:K,memo:q}=C;if((L===-2||b&&b.hasOnce)&&(X=!1),re!=null&&(jn(),vr(re,null,S,C,!0),Kn()),K!=null&&(!C.ctx||C.ctx===T)&&(T.renderCache[K]=void 0),y&256&&T.ctx.deactivate(C))return;const de=y&1&&B,le=!xr(C);let ue;if(le&&(ue=te&&te.onVnodeBeforeUnmount)&&On(ue,T,C),y&6)he(C.component,S,ne);else{if(y&128){C.suspense.unmount(S,ne);return}de&&Bi(C,null,T,"beforeUnmount"),y&64?C.type.remove(C,T,S,I,ne):b&&!b.hasOnce&&(J!==xt||L>0&&L&64)?Se(b,T,S,!1,!0):(J===xt&&L&384||!X&&y&16)&&Se(Q,T,S),ne&&Ze(C)}const ke=q!=null&&K==null;(le&&(ue=te&&te.onVnodeUnmounted)||de||ke)&&Yt(()=>{ue&&On(ue,T,C),de&&Bi(C,null,T,"unmounted"),ke&&(C.el=null)},S)},Ze=C=>{const{type:T,el:S,anchor:ne,transition:X}=C,J=T===xt;if(J&&!X){ie(S,ne);return}if(T===La){E(C),X&&!X.persisted&&X.afterLeave&&X.afterLeave();return}const te=J?Rl(C):C,re=()=>{J?f(S)&&ie(S,ne):s(S),X&&!X.persisted&&X.afterLeave&&X.afterLeave()};if(te&&te.shapeFlag&1&&X&&!X.persisted){const{leave:Q,delayLeave:b}=X,y=te.el,L=()=>Q(y,re);b?b(y,re,L):L()}else re()},ie=(C,T)=>{let S;for(;C!==T;)S=u(C),s(C),C=S;s(T)},he=(C,T,S)=>{const{bum:ne,scope:X,job:J,subTree:te,um:re,m:Q,a:b}=C;Oh(Q),Oh(b),ne&&To(ne),X.stop(),J?(J.flags|=8,We(te,C,T,S)):te&&(te.transition=C.vnode.transition,We(te,C,T,S)),re&&Yt(re,T);const y=()=>{C.isUnmounted=!0};y.flags=16,Yt(y,T)},Se=(C,T,S,ne=!1,X=!1,J=0)=>{for(let te=J;te<C.length;te++)We(C[te],T,S,ne,X)},xe=C=>{if(C.shapeFlag&6)return xe(C.component.subTree);if(C.shapeFlag&128)return C.suspense.next();const T=u(C.anchor||C.el),S=T&&T[_m];return S?u(S):T},me=(C,T,S)=>{const ne=C&&T._vnode?void 0:C&&C.component?C.component.uid:c0();um(()=>{C==null?T._vnode&&We(T._vnode,null,null,!0):_(T._vnode||null,C,T,null,null,null,S),T._vnode=C},ne)},I={p:_,um:We,m:we,r:Ze,mt:$,mc:D,pc:G,pbc:x,n:xe,o:n};return{render:me,hydrate:void 0,createApp:km(me)}}function Pa({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function zi({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function e0(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function dd(n,e,t=!1){const i=n.children,s=e.children;if(Be(i)&&Be(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=hi(s[r]),a.el=o.el),!t&&a.patchFlag!==-2&&dd(o,a)),a.type===ca&&(a.patchFlag===-1&&(a=s[r]=hi(a)),a.el=o.el),a.type===Un&&!a.el&&(a.el=o.el)}}function t0(n){const e=n.slice(),t=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,n[t[a]]<c?r=a+1:o=a;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}function pd(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:pd(e)}function Oh(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function Mr(n){if(n.placeholder)return n.placeholder;const e=n.component;if(e)return Mr(e.subTree);const t=n.suspense;return t&&t.activeBranch?Mr(t.activeBranch):null}const md=n=>n.__isSuspense,n0=Symbol("_deferredEnter");function i0(n,e){e&&e.pendingBranch?Be(n)?e.effects.push(...n):e.effects.push(n):hm(n)}const xt=Symbol.for("v-fgt"),ca=Symbol.for("v-txt"),Un=Symbol.for("v-cmt"),La=Symbol.for("v-stc"),ss=[];let un=null;function Oe(n=!1){ss.push(un=n?null:[])}function gd(){ss.pop(),un=ss[ss.length-1]||null}let Lr=1;function Fh(n,e=!1){Lr+=n,n<0&&un&&e&&(un.hasOnce=!0)}function _d(n){return n.dynamicChildren=Lr>0?un||Qi:null,gd(),Lr>0&&un&&un.push(n),n}function Fe(n,e,t,i,s,r){return _d(H(n,e,t,i,s,r,!0))}function s0(n,e,t,i,s){return _d(Yn(n,e,t,i,s,!0))}function Gc(n){return n?n.__v_isVNode===!0:!1}function tr(n,e){return n.type===e.type&&n.key===e.key}const vd=({key:n})=>n??null,Co=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Et(n)||Gt(n)||qe(n)?{i:xn,r:n,k:e,f:!!t}:n:null);function H(n,e=null,t=null,i=0,s=null,r=n===xt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&vd(e),ref:e&&Co(e),scopeId:Xf,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:xn};return a?(Vo(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=Et(t)?8:16),Lr>0&&!o&&un&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&un.push(l),l}const Yn=r0;function r0(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===Pm)&&(n=Un),Gc(n)){const a=Hs(n,e,!0);return t&&Vo(a,t),Lr>0&&!r&&un&&(a.shapeFlag&6?un[un.indexOf(n)]=a:un.push(a)),a.patchFlag=-2,a}if(g0(n)&&(n=n.__vccOpts),e){e=o0(e);let{class:a,style:l}=e;a&&!Et(a)&&(e.class=Fn(a)),ht(l)&&(Oc(l)&&!Be(l)&&(l=Ct({},l)),e.style=Ti(l))}const o=Et(n)?1:md(n)?128:aa(n)?64:ht(n)?4:qe(n)?2:0;return H(n,e,t,i,s,o,r,!0)}function o0(n){return n?Oc(n)?Ct({},n):ad(n)?Ct({},n[Sd]||n):n:null}function Hs(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=e?a0(s||{},e):s,h={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&vd(c),ref:e&&e.ref?t&&r?Be(r)?r.concat(Co(e)):[r,Co(e)]:Co(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==xt?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Hs(n.ssContent),ssFallback:n.ssFallback&&Hs(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce,cacheIndex:n.cacheIndex};return l&&i&&_r(h,l.clone(h)),h}function tt(n=" ",e=0){return Yn(ca,null,n,e)}function mt(n="",e=!1){return e?(Oe(),s0(Un,null,n)):Yn(Un,null,n)}function Hn(n){return n==null||typeof n=="boolean"?Yn(Un):Be(n)?Yn(xt,null,n.slice()):Gc(n)?hi(n):Yn(ca,null,String(n))}function hi(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Hs(n)}function Vo(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Be(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),Vo(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!ad(e)?e._ctx=xn:s===3&&xn&&(xn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else if(qe(e)){if(i&65){Vo(n,{default:e});return}e={default:e,_ctx:xn},t=32}else e=String(e),i&64?(t=16,e=[tt(e)]):t=8;n.children=e,n.shapeFlag|=t}function a0(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Fn([e.class,i.class]));else if(s==="style")e.style=Ti([e.style,i.style]);else if(ta(s)){const r=e[s],o=i[s];o&&r!==o&&!(Be(r)&&r.includes(o))?e[s]=r?[].concat(r,o):o:o==null&&r==null&&!na(s)&&(e[s]=o)}else s!==""&&(e[s]=i[s])}return e}function On(n,e,t,i=null){Nn(n,e,7,[t,i])}const l0=td();let xd=0;function c0(){return xd}function h0(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||l0,r={uid:xd++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Sf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:cd(i,s),emitsOptions:nd(i,s),emit:null,emitted:null,propsDefaults:ut,inheritAttrs:i.inheritAttrs,ctx:ut,data:ut,props:ut,attrs:ut,slots:ut,refs:ut,setupState:ut,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=zm.bind(null,r),n.ce&&n.ce(r),r}let Kt=null;const u0=()=>Kt||xn;let Go,Ir;{const n=sa(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};Go=e("__VUE_INSTANCE_SETTERS__",t=>Kt=t),Ir=e("__VUE_SSR_SETTERS__",t=>Dr=t)}const Hr=n=>{const e=Kt;return Go(n),n.scope.on(),()=>{n.scope.off(),Go(e)}},kh=()=>{Kt&&Kt.scope.off(),Go(null)};function yd(n){return n.vnode.shapeFlag&4}let Dr=!1;function f0(n,e=!1,t=!1){e&&Ir(e);const{props:i,children:s}=n.vnode,r=yd(n);Ym(n,i,r,e),$m(n,s,t||e);const o=r?d0(n,e):void 0;return e&&Ir(!1),o}function d0(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Lm);const{setup:i}=t;if(i){jn();const s=n.setupContext=i.length>1?m0(n):null,r=Hr(n),o=zr(i,n,0,[n.props,s]),a=pf(o);if(Kn(),r(),(a||n.sp)&&!xr(n)&&$f(n),a){if(o.then(kh,kh),e)return o.then(l=>{Ir(!0);try{Bh(n,l,e)}finally{Ir(!1)}}).catch(l=>{oa(l,n,0,void 0,!0),n.ssrRender=(c,h)=>h("<!---->")});n.asyncDep=o}else Bh(n,o)}else Md(n)}function Bh(n,e,t){qe(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:ht(e)&&(n.setupState=Bf(e)),Md(n)}function Md(n,e,t){const i=n.type;n.render||(n.render=i.render||Xn);{const s=Hr(n);jn();try{Im(n)}finally{Kn(),s()}}}const Sd=Symbol(),p0={get(n,e){return zt(n,"get",""),e===Sd?n:n[e]}};function m0(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,p0),slots:n.slots,emit:n.emit,expose:e}}function ha(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Bf(kf(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in yr)return yr[t](n)},has(e,t){return t in e||t in yr}})):n.proxy}function g0(n){return qe(n)&&"__vccOpts"in n}const cn=(n,e)=>rm(n,e,Dr),_0="3.5.45";/**
* @vue/runtime-dom v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Dl;const zh=typeof window<"u"&&window.trustedTypes;if(zh)try{Dl=zh.createPolicy("vue",{createHTML:n=>n})}catch{}const bd=Dl?n=>Dl.createHTML(n):n=>n,v0="http://www.w3.org/2000/svg",x0="http://www.w3.org/1998/Math/MathML",li=typeof document<"u"?document:null,Hh=li&&li.createElement("template"),y0={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?li.createElementNS(v0,n):e==="mathml"?li.createElementNS(x0,n):t?li.createElement(n,{is:t}):li.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>li.createTextNode(n),createComment:n=>li.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>li.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{Hh.innerHTML=bd(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Hh.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},M0=Symbol("_vtc");function S0(n,e,t){const i=n[M0];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Wo=Symbol("_vod"),Ed=Symbol("_vsh"),b0={name:"show",beforeMount(n,{value:e},{transition:t}){n[Wo]=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):nr(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:i}){!e!=!t&&(i?e?(i.beforeEnter(n),nr(n,!0),i.enter(n)):i.leave(n,()=>{nr(n,!1)}):nr(n,e))},beforeUnmount(n,{value:e}){nr(n,e)}};function nr(n,e){n.style.display=e?n[Wo]:"none",n[Ed]=!e}const E0=Symbol(""),w0=/(?:^|;)\s*display\s*:/;function A0(n,e,t){const i=n.style,s=Et(t);let r=!1;if(t&&!s){if(e)if(Et(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&fr(i,a,"")}else for(const o in e)t[o]==null&&fr(i,o,"");for(const o in t){o==="display"&&(r=!0);const a=t[o];a!=null?R0(n,o,!Et(e)&&e?e[o]:void 0,a)||fr(i,o,a):fr(i,o,"")}}else if(s){if(e!==t){const o=i[E0];o&&(t+=";"+o),i.cssText=t,r=w0.test(t)}}else e&&n.removeAttribute("style");Wo in n&&((!s||e!==t)&&(n[Wo]=r?i.display:""),n[Ed]&&(i.display="none"))}const Jr=/\s*!important$/;function fr(n,e,t){if(Be(t))t.forEach(i=>fr(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))Jr.test(t)?n.setProperty(e,t.replace(Jr,""),"important"):n.setProperty(e,t);else{const i=T0(n,e);Jr.test(t)?n.setProperty(hs(i),t.replace(Jr,""),"important"):n[i]=t}}const Vh=["Webkit","Moz","ms"],Ia={};function T0(n,e){const t=Ia[e];if(t)return t;let i=Ln(e);if(i!=="filter"&&i in n)return Ia[e]=i;i=_f(i);for(let s=0;s<Vh.length;s++){const r=Vh[s]+i;if(r in n)return Ia[e]=r}return e}function R0(n,e,t,i){return n.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&Et(i)&&t===i}const Gh="http://www.w3.org/1999/xlink";function Wh(n,e,t,i,s,r=Ip(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Gh,e.slice(6,e.length)):n.setAttributeNS(Gh,e,t):t==null||r&&!xf(t)?n.removeAttribute(e):n.setAttribute(e,r?"":qn(t)?String(t):t)}function Xh(n,e,t,i,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?bd(t):t);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=xf(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(s||e)}function Ki(n,e,t,i){n.addEventListener(e,t,i)}function C0(n,e,t,i){n.removeEventListener(e,t,i)}const Yh=Symbol("_vei");function P0(n,e,t,i,s=null){const r=n[Yh]||(n[Yh]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=D0(e);if(i){const c=r[e]=O0(i,s);Ki(n,a,c,l)}else o&&(C0(n,a,o,l),r[e]=void 0)}}const L0=/(Once|Passive|Capture)$/,I0=/^on:?(?:Once|Passive|Capture)$/;function D0(n){let e,t;for(;(t=n.match(L0))&&!I0.test(n);)e||(e={}),n=n.slice(0,n.length-t[1].length),e[t[1].toLowerCase()]=!0;return[n[2]===":"?n.slice(3):hs(n.slice(2)),e]}let Da=0;const N0=Promise.resolve(),U0=()=>Da||(N0.then(()=>Da=0),Da=Date.now());function O0(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;const s=t.value;if(Be(s)){const r=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{r.call(i),i._stopped=!0};const o=s.slice(),a=[i];for(let l=0;l<o.length&&!i._stopped;l++){const c=o[l];c&&Nn(c,e,5,a)}}else Nn(s,e,5,[i])};return t.value=n,t.attached=U0(),t}const qh=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,F0=(n,e,t,i,s,r)=>{const o=s==="svg";e==="class"?S0(n,i,o):e==="style"?A0(n,t,i):ta(e)?na(e)||P0(n,e,t,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):k0(n,e,i,o))?(Xh(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Wh(n,e,i,o,r,e!=="value")):n._isVueCE&&(B0(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!Et(i)))?Xh(n,Ln(e),i,r,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Wh(n,e,i,o))};function k0(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&qh(e)&&qe(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return qh(e)&&Et(t)?!1:e in n}function B0(n,e){const t=n._def.props;if(!t)return!1;const i=Ln(e);return Array.isArray(t)?t.some(s=>Ln(s)===i):Object.keys(t).some(s=>Ln(s)===i)}const Xo=n=>{const e=n.props["onUpdate:modelValue"]||!1;return Be(e)?t=>To(e,t):e};function z0(n){n.target.composing=!0}function jh(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const es=Symbol("_assign"),Zr=Symbol("_initialValue");function Na(n,e,t){return e&&(n=n.trim()),t&&(n=Br(n)),n}const H0={created(n,{modifiers:{lazy:e,trim:t,number:i}},s){n.parentNode&&(n.type==="text"?n[Zr]=n.defaultValue.replace(/[\r\n]/g,""):n.type==="textarea"&&(n[Zr]=n.defaultValue.replace(/\r\n?/g,`
`))),n[es]=Xo(s);const r=i||s.props&&s.props.type==="number";Ki(n,e?"change":"input",o=>{o.target.composing||n[es](Na(n.value,t,r))}),(t||r)&&Ki(n,"change",()=>{n.value=Na(n.value,t,r)}),e||(Ki(n,"compositionstart",z0),Ki(n,"compositionend",jh),Ki(n,"change",jh))},mounted(n,{value:e,modifiers:{trim:t,number:i}}){const s=e??"",r=n[Zr];delete n[Zr],r!==void 0&&(n.type==="text"||n.type==="textarea")&&n.value!==r?n[es](Na(n.value,t,i)):n.value=s},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:s,number:r}},o){if(n[es]=Xo(o),n.composing)return;const a=(r||n.type==="number")&&!/^0\d/.test(n.value)?Br(n.value):n.value,l=e??"";if(a===l)return;const c=n.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===n&&n.type!=="range"&&(i&&e===t||s&&n.value.trim()===l)||(n.value=l)}},Qr={deep:!0,created(n,{value:e,modifiers:{number:t}},i){n._modelValue=e,Ki(n,"change",()=>{const s=Array.prototype.filter.call(n.options,l=>l.selected).map(l=>t?Br(Yo(l)):Yo(l)),r=n.multiple,o=r?rs(n._modelValue)?new Set(s):s:s[0],a=n._pendingValue=[r,r?Be(o)?s.slice():s:o];try{n[es](o)}finally{Fc(()=>{n._pendingValue===a&&(n._pendingValue=void 0)})}}),n[es]=Xo(i)},mounted(n,{value:e,modifiers:{number:t}}){Kh(n,e,t)},beforeUpdate(n,{value:e},t){n._modelValue=e,n[es]=Xo(t)},updated(n,{value:e,modifiers:{number:t}}){const i=n._pendingValue;n._pendingValue=void 0,(!i||i[0]!==n.multiple||!V0(e,i[1],i[0]))&&Kh(n,e,t)}};function V0(n,e,t){if(!t||Be(n))return Di(n,e);if(rs(n)){if(n.size!==e.length)return!1;for(const i of e)if(!n.has(i))return!1;return!0}return!1}function Kh(n,e,t=!1){const i=n.multiple,s=Be(e);if(!(i&&!s&&!rs(e))){for(let r=0,o=n.options.length;r<o;r++){const a=n.options[r],l=Yo(a);if(i)if(s){const c=typeof l;c==="string"||c==="number"?a.selected=e.some(h=>String(h)===String(l)):a.selected=Up(e,l)>-1}else a.selected=e.has(l)||t&&typeof l=="string"&&e.has(Br(l));else if(Di(Yo(a),e)){n.selectedIndex!==r&&(n.selectedIndex=r);return}}!i&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function Yo(n){return"_value"in n?n._value:n.value}const G0=Ct({patchProp:F0},y0);let $h;function W0(){return $h||($h=Zm(G0))}const X0=((...n)=>{const e=W0().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=q0(i);if(!s)return;const r=e._component;!qe(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=t(s,!1,Y0(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e});function Y0(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function q0(n){return Et(n)?document.querySelector(n):n}/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const j0=Symbol();var Jh;(function(n){n.direct="direct",n.patchObject="patch object",n.patchFunction="patch function"})(Jh||(Jh={}));function K0(){const n=Op(!0),e=n.run(()=>Rt({}));let t=[],i=[];const s=kf({install(r){s._a=r,r.provide(j0,s),r.config.globalProperties.$pinia=s,i.forEach(o=>t.push(o)),i=[]},use(r){return this._a?t.push(r):i.push(r),this},_p:t,_a:null,_e:n,_s:new Map,state:e});return s}const $0="modulepreload",J0=function(n){return"/game/royale/"+n},Zh={},Z0=function(e,t,i){let s=Promise.resolve();if(t&&t.length>0){let o=function(c){return Promise.all(c.map(h=>Promise.resolve(h).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=o(t.map(c=>{if(c=J0(c),c in Zh)return;Zh[c]=!0;const h=c.endsWith(".css"),f=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${f}`))return;const u=document.createElement("link");if(u.rel=h?"stylesheet":$0,h||(u.as="script"),u.crossOrigin="",u.href=c,l&&u.setAttribute("nonce",l),document.head.appendChild(u),h)return new Promise((d,g)=>{u.addEventListener("load",d),u.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return e().catch(r)})},Q0=["hoarder","bomber","charger","coward"],eg={hoarder:"LOOT GOBLIN",bomber:"BAD DELIVERY",charger:"NO BRAKES",coward:"ABSOLUTELY NOT"},wd={cart:"CART CHARGE",recoil:"RECOIL BOOTS",skates:"SLIPPERY SKATES"},Qh=["cart","recoil","skates"],tg={cart:300,recoil:360,skates:360},ir={shank:45,axe:90,shotgun:70,smg:60,laser:40,flamethrower:50,body:0},ua={gender:0,skin:2,hair:2,hairColor:0,clothes:0,color:0},Vr=["#f4ceae","#dca47a","#b87953","#925739","#603c2f","#3b2b26"],Vs=["#e9bb22","#d43163","#2b9c96","#4d63cb","#d46a27","#b1aca0"],fa=["#242028","#653b23","#d7ad52","#dd457b"],vn=[{id:"gas",name:"LAST STOP GAS",tag:"PREMIUM FUEL. SUBSTANDARD DECISIONS."},{id:"rest",name:"REST IN PIECES",tag:"TAKE A BREAK. LEAVE A PART."},{id:"motel",name:"MOTEL NO-TELL",tag:"VACANCIES CREATED DAILY."},{id:"bathroom",name:"STALL OF DUTY",tag:"TRUCK STOP BATHROOM. HOLD YOUR BREATH."},{id:"laundry",name:"SPIN CYCLE SLAUGHTER",tag:"YOUR LAST LOAD."},{id:"market",name:"COLD CUTS",tag:"EVERYTHING MUST GO. INCLUDING YOU."},{id:"impound",name:"FINAL NOTICE",tag:"PAYMENT DUE IN BODY PARTS."}],hn=["torso","head","armL","armR","forearmL","forearmR","handL","handR","thighL","thighR","shinL","shinR","footL","footR"],os={torso:{x:0,y:1.65,w:.85,h:.9,hp:120,parent:null},head:{x:0,y:2.45,w:.6,h:.65,hp:34,parent:"torso"},armL:{x:-.57,y:1.85,w:.28,h:.5,hp:30,parent:"torso"},armR:{x:.57,y:1.85,w:.28,h:.5,hp:30,parent:"torso"},forearmL:{x:-.59,y:1.38,w:.25,h:.48,hp:24,parent:"armL"},forearmR:{x:.59,y:1.38,w:.25,h:.48,hp:24,parent:"armR"},handL:{x:-.6,y:1.08,w:.27,h:.25,hp:15,parent:"forearmL"},handR:{x:.6,y:1.08,w:.27,h:.25,hp:15,parent:"forearmR"},thighL:{x:-.25,y:.95,w:.34,h:.55,hp:36,parent:"torso"},thighR:{x:.25,y:.95,w:.34,h:.55,hp:36,parent:"torso"},shinL:{x:-.25,y:.48,w:.29,h:.5,hp:26,parent:"thighL"},shinR:{x:.25,y:.48,w:.29,h:.5,hp:26,parent:"thighR"},footL:{x:-.31,y:.12,w:.45,h:.24,hp:17,parent:"shinL"},footR:{x:.31,y:.12,w:.45,h:.24,hp:17,parent:"shinR"}},$i=(n=ua)=>({move:0,aimX:1,aimY:0,attack:!1,jump:0,grab:0,pickup:0,cycle:0,reload:0,ready:0,rematch:0,venue:0,venueChange:0,look:{...n}});function Wc(n){const e=n&&typeof n=="object"?n:{},t={gender:3,skin:Vr.length,hair:5,hairColor:fa.length,clothes:3,color:Vs.length},i={...ua};for(const s of Object.keys(t)){const r=Number(e[s]);Number.isInteger(r)&&r>=0&&r<t[s]&&(i[s]=r)}return i}function ng(n){const e=n&&typeof n=="object"?n:{},t=$i(Wc(e.look));for(const i of["jump","grab","pickup","cycle","reload","ready","rematch","venueChange"]){const s=Number(e[i]);t[i]=Number.isSafeInteger(s)&&s>=0?Math.min(s,1e7):0}return t.move=Math.max(-1,Math.min(1,Number(e.move)||0)),t.aimX=Math.max(-1,Math.min(1,Number(e.aimX)||0)),t.aimY=Math.max(-1,Math.min(1,Number(e.aimY)||0)),t.attack=e.attack===!0,t.venue=Math.max(0,Math.min(vn.length-1,Math.floor(Number(e.venue)||0))),t}function Os(n){return+(n.parts.thighL>0&&n.parts.shinL>0)+ +(n.parts.thighR>0&&n.parts.shinR>0)}function eu(n,e){const t=os[e];return Os(n)>0?{x:t.x,y:t.y,w:t.w,h:t.h,rotation:0,length:t.h}:e.startsWith("thigh")?{x:t.x*1.5,y:.22,w:t.h,h:t.w,rotation:e.endsWith("L")?Math.PI/2:-Math.PI/2,length:t.h}:{x:t.x,y:Math.max(t.h/2+.04,t.y-1.16),w:t.w,h:t.h,rotation:0,length:t.h}}function gn(n,e){const t=eu(n,e),i=rg(n);if(!i||n.weapons[n.slot]==="body"&&!n.carrying||!n.parts.armL&&!n.parts.armR)return t;const s=i.endsWith("L")?"L":"R",r=Ls(n);if(e===i)return{...t,x:r.x,y:r.y,rotation:r.angle-Math.PI/2};if(e!==`arm${s}`&&e!==`forearm${s}`)return t;const o=eu(n,`arm${s}`),a=o.x,l=o.y+.25,c=(a+r.x)/2-r.dy*.13,h=(l+r.y)/2+r.dx*.13,f=e.startsWith("forearm")?{x:c,y:h}:{x:a,y:l},u=e.startsWith("forearm")?r:{x:c,y:h},d=u.x-f.x,g=u.y-f.y,_=Math.hypot(d,g),p=Math.atan2(g,d)-Math.PI/2,m=os[e].w;return{x:(f.x+u.x)/2,y:(f.y+u.y)/2,w:Math.abs(Math.cos(p))*m+Math.abs(Math.sin(p))*_,h:Math.abs(Math.sin(p))*m+Math.abs(Math.cos(p))*_,rotation:p,length:_}}const ig=1.1;function sg(n){if(n.weapons[n.slot]!=="shank"||n.attacking<=0)return 0;const e=(10-n.attacking)/10;return .23*Math.max(0,e<.25?e/.25:(1-e)/.75)}function ci(n){return Os(n)===0?.39:1.55}function Tn(n){return Math.max(...hn.filter(e=>n.parts[e]>0).map(e=>{const t=gn(n,e);return t.y+t.h/2}),.5)}function Ls(n){const e=Math.hypot(n.aimX,n.aimY),t=e>.01?n.aimX/e:n.face,i=e>.01?n.aimY/e:0,s=!n.carrying&&n.weapons[n.slot]==="shank"?.42+sg(n):.85;return{x:t*s,y:ci(n)+i*s,angle:Math.atan2(i,t),dx:t,dy:i}}function rg(n){const e=n.aimX<0?"handL":"handR",t=e==="handL"?"handR":"handL";return n.parts[e]>0?e:n.parts[t]>0?t:null}function Ua(n){return[["armL","forearmL","handL"],["armR","forearmR","handR"],["thighL","shinL","footL"],["thighR","shinR","footR"]].filter(e=>e.some(t=>n.parts[t]<=0)).length}function og(n,e){const t=[];function i(s,r,o,a,l,c,h,f=[],u=0){const d={id:e(),kind:s,x:r,y:o,w:a,h:l,material:c,hp:h,maxHp:h,fuel:c==="fuel"?1:c==="wood"||c==="fabric"?.5:0,burn:0,supports:f,falling:!1,vy:0,exploded:!1,solid:s!=="floor"&&s!=="glass"&&s!=="railing",color:u};return t.push(d),d.id}for(let s=-60;s<64;s+=8)i("floor",s,0,8,.45,"concrete",240);if(n==="gas"){for(const r of[-40,-28,-16])i("pump",r,1.7,1.8,3.4,"fuel",75);const s=[i("post",-46,3,.5,6,"metal",80),i("post",-10,3,.5,6,"metal",80)];for(let r=-43;r<-9;r+=6)i("roof",r,6.4,6,.7,"metal",100,s);for(const r of[-35,-19,27])i("can",r,.6,.7,1.2,"fuel",20);i("car",5,1.1,7,2.2,"fuel",120),i("car",45,1.1,6.5,2.2,"fuel",120),i("counter",23,1,6,2,"wood",70),i("fridge",33,1.8,2.8,3.6,"metal",85),i("glass",23,3.6,7,2.3,"glass",22),i("door",17,1.6,1.5,3.2,"wood",40),i("sign",-51,7.5,5,3,"metal",55,[i("pole",-51,3.6,.5,7.2,"metal",65)]);for(const r of[12,39,40])i("tire",r,.6,1.1,1.2,"fabric",25)}else if(n==="rest"){for(const r of[-42,-15,18])i("table",r,1,5.5,2,"wood",70),i("bench",r+5,.55,3,1.1,"wood",35);for(const r of[-30,8])i("vending",r,1.8,2.4,3.6,"metal",85);for(const r of[-50,-3,35])i("bin",r,.85,1.2,1.7,"metal",45);i("truck",44,1.7,10,3.4,"fuel",180),i("car",-4,1.1,6,2.2,"fuel",120);for(const r of[-49,27])i("sign",r,7,5,2.4,"metal",55,[i("pole",r,3.5,.45,7,"metal",60)]);i("barrier",-24,.6,4,1.2,"concrete",80),i("door",27,1.6,1.6,3.2,"wood",45);const s=[i("post",-5,2.5,.5,5,"metal",65),i("post",8,2.5,.5,5,"metal",65)];i("roof",1.5,5.2,14,.5,"metal",95,s)}else if(n==="bathroom"){for(const s of[-20,-14,-8,-2,4,10,16,22]){const r=i("stall",s,2.65,4.6,4.8,"metal",65);t.find(o=>o.id===r).solid=!1}for(const[s,r]of[-39,-30,33,42].entries()){const o=i("urinal",r,1.55,1.5,2.4,"concrete",45),a=t.find(l=>l.id===o);a.solid=!1,a.toxic=s===1||s===2}for(const s of[-46,49]){const r=i("sink",s,1.15,2.8,1.8,"concrete",55);t.find(o=>o.id===r).solid=!1}for(const s of[-25,28])i("bin",s,.8,1.2,1.6,"metal",35);i("vending",0,1.8,2.4,3.6,"metal",70)}else if(n==="laundry"||n==="market"||n==="impound"){for(const[s,r]of[-32,-21,-10,1,12,23,32].entries()){const o=i("entrance",r,2.5,2.5,4.5,"metal",55,[],s);t.find(a=>a.id===o).solid=!1}if(n==="laundry"){for(const s of[-45,-31,-17,11,25,39])i("washer",s,1.5,2.6,2.5,"metal",65),i("dryer",s+3,1.5,2.5,2.5,"fabric",55);for(const s of[-34,20]){const r=i("detergent",s,.55,.8,.65,"fabric",30);t.find(o=>o.id===r).solid=!1}for(const s of[-5,33])i("bench",s,.65,4,1.3,"metal",45);i("vending",-49,1.8,2.2,3.6,"metal",70)}else if(n==="market"){for(const s of[-44,-27,9,27])i("shelf",s,1.55,4.5,2.65,"metal",80);for(const s of[-35,34]){const r=i("freezer",s,2,2.4,3.5,"metal",70);t.find(o=>o.id===r).solid=!1}for(const s of[-18,18]){const r=i("pallet",s,.825,3,1.2,"wood",45);i("pallet",s,2.025,3,1.2,"wood",45,[r])}i("counter",-5,1,4,2,"metal",70),i("forklift",43,1.5,4,2.6,"metal",100)}else{for(const[s,r]of[-43,-25,-7,11,29].entries())i("car",r,1.25,5.5,2.05,"metal",100,[],s);i("truck",48,1.9,8,3.4,"metal",140);for(const s of[-35,-16,20,37])i("tire",s,.6,1.1,1.2,"fabric",25);i("barrier",-3,.825,3,1.2,"concrete",80),i("counter",-48,1,3,2,"wood",55)}}else{for(const r of[-45,-23,-1,21,43]){const o=i("post",r-4.5,2.5,.5,5,"wood",60);i("balcony",r,5,11,.6,"concrete",100,[o]),i("railing",r,5.9,10.5,1.2,"metal",30),i("door",r-2,1.7,1.5,3.4,"wood",40),i("glass",r+2,2.6,2.5,1.8,"glass",20),i("mattress",r+3,.65,3.5,1.3,"fabric",40),i("tv",r,.65,1.1,1.3,"glass",25),i("ac",r+3,7,2,1.2,"metal",35,[o]),i("door",r-2,6.8,1.5,3.4,"wood",40)}i("ice",49,1.3,2.8,2.6,"metal",70);const s=i("pole",-53,5,.5,10,"metal",65);i("sign",-53,10,6.5,3.5,"metal",70,[s])}return t}const Oa=.5,ag=.5,Ut=1/60,Fa=27,pn=[-57,57,-20,-5,13,20,-9,8],lg=18,cg=3,hg=3,ug=["YOU","GUEST","BAD CREDIT","ROOM SERVICE","UNLEADED","NO REFUNDS","LAST CALL","MILD CONCERN"];class Ad{constructor(e=1){fe(this,"state");this.state={version:1,thrown:[],boosts:[],frame:0,round:0,seed:77191,id:0,phase:"lobby",phaseFrame:0,venue:"gas",actors:[],props:[],shots:[],debris:[],blood:[],fires:[],pickups:[],events:[],winner:null,zoneLeft:-64,zoneRight:64,humans:Math.max(1,Math.min(2,e)),venueNonce:0,eventSeq:0},this.makeActors(),this.makeWorld()}next(){return++this.state.id}random(){let e=this.state.seed|0;return e^=e<<13,e^=e>>>17,e^=e<<5,this.state.seed=e>>>0,(e>>>0)/4294967296}makeActors(){this.state.actors=[];for(let e=0;e<8;e++){const t={...ua,gender:e%3,skin:e%6,hair:e%5,color:e%6},i=$i(t);this.state.actors.push({id:e,name:e<this.state.humans?this.state.humans===1?"YOU":`PLAYER ${e+1}`:ug[e],human:e<this.state.humans,pendingSpawn:e>=this.state.humans,personality:e>=this.state.humans?Q0[(e-this.state.humans)%4]:void 0,look:t,x:pn[e],y:1,vx:0,vy:0,face:e%2?-1:1,hp:100,parts:Object.fromEntries(hn.map(s=>[s,os[s].hp])),weapons:["shank"],durability:{...ir},slot:0,specialAmmo:{laser:0,flamethrower:0},ammo:0,magazines:{shotgun:6,smg:30},reserve:90,cooldown:0,reloading:0,grounded:!1,ready:!1,last:i,drift:0,driftAt:0,death:null,deathFrame:-1,bleedOutAt:null,bleedOwner:-1,aimX:e%2?-1:1,aimY:0,attacking:0,kills:0})}}openingSpawnProtected(e){const t=this.state.actors.filter(i=>!i.human&&i.hp>0);return this.state.actors.filter(i=>i.human&&i.hp>0).some(i=>{const s=[...t].sort((r,o)=>Math.abs(pn[r.id]-pn[i.id])-Math.abs(pn[o.id]-pn[i.id]))[0];return s!==void 0&&Math.abs(e-pn[s.id])<lg})}makeWorld(){this.state.thrown=[],this.state.boosts=[],delete this.state.chaosAt,delete this.state.nextMajorAt,delete this.state.major,delete this.state.nextSpawnAt,this.state.props=og(this.state.venue,()=>this.next()),this.state.shots=[],this.state.debris=[],this.state.blood=[],this.state.fires=[],this.state.pickups=[];const e=this.state.props.filter(r=>r.kind==="entrance"),t=this.state.props.filter(r=>r.kind==="stall");this.state.actors.filter(r=>!r.human).forEach((r,o)=>{delete r.stallId,delete r.entryId,delete r.spawnAfter,delete r.entryWarningAt,e[o]&&(r.entryId=e[o].id,r.x=e[o].x,r.spawnAfter=600+o*480+Math.floor(this.random()*240)),t[o]&&(r.stallId=t[o].id,r.x=t[o].x)});for(const r of this.state.actors.filter(o=>o.human)){const o=pn[r.id]+(pn[r.id]<0?3:-3),a=this.next();for(let l=0;l<2;l++)this.state.props.push({id:l===0?a:this.next(),kind:"crate",trainingFor:r.id,x:o,y:.225+.55+l*1.1,w:1.5,h:1.1,hp:18,maxHp:18,material:"wood",fuel:.5,burn:0,supports:l===1?[a]:[],falling:!1,vy:0,exploded:!1,solid:!0,color:l})}const i=[-1,-.5,0,.5,1];let s=0;for(let r=0;r<9;r++){const o=-52+r*13,a=this.openingSpawnProtected(o)?i[s++%i.length]:o,l=["axe","shotgun","smg"][r%3];this.state.pickups.push({id:this.next(),x:a,y:1,weapon:l,hp:ir[l]})}for(const r of this.state.actors.filter(o=>o.human)){const o=pn[r.id]+(pn[r.id]<0?-1:1);this.state.pickups.push({id:this.next(),x:o,y:1,weapon:"smg",hp:ir.smg,reservedFor:r.id,reservedUntil:600})}}releaseEnemies(){const e=this.state.actors.some(r=>r.pendingSpawn&&r.hp>0)&&this.state.chaosAt===void 0,t=this.state.actors.filter(r=>r.human&&r.hp>0),i=this.state.props.some(r=>r.kind==="entrance"),s=this.state.actors.filter(r=>!r.human&&r.hp>0&&!r.pendingSpawn).length<hg;for(const r of this.state.actors.filter(o=>o.pendingSpawn&&o.hp>0).sort((o,a)=>+(a.entryWarningAt!==void 0)-+(o.entryWarningAt!==void 0))){const o=c=>Math.min(...t.map(h=>Math.abs(h.x-c)));if(i){if(!s||this.state.frame<(this.state.nextSpawnAt??0))break;const c=this.state.props.find(f=>f.id===r.entryId);if(!c)continue;const h=t.some(f=>Math.abs(f.x-c.x)<9&&Math.abs(f.y-.225)<3);if(r.entryWarningAt===void 0){if(!t.length||!h&&this.state.frame-(this.state.chaosAt??this.state.frame)<(r.spawnAfter??600))continue;r.entryWarningAt=this.state.frame,this.state.nextSpawnAt=this.state.frame+45,this.event("warning",c.x,2);break}if(this.state.frame-r.entryWarningAt<45)break;r.x=c.x,c.openedAt=this.state.frame,this.state.nextSpawnAt=this.state.frame+300+Math.floor(this.random()*181)}const a=this.state.props.find(c=>c.id===r.stallId);if(this.state.venue==="bathroom"){if(!a||!t.some(c=>Math.abs(c.x-a.x)<=cg&&Math.abs(c.y-.225)<2.5))continue;r.x=a.x,a.hp>0&&(a.openedAt=this.state.frame)}if(!i&&this.state.venue!=="bathroom"&&o(r.x)<34){const c=Array.from({length:121},(h,f)=>f-60);c.sort((h,f)=>o(f)-o(h)||Math.abs(h-pn[r.id])-Math.abs(f-pn[r.id])),r.x=c[0]}const l=this.floorAt(r.x,100,-100);if(r.y=l>-50?l:1,r.vx=r.vy=0,r.pendingSpawn=!1,i)break}if(e){this.state.chaosAt=this.state.frame,this.state.nextMajorAt=this.state.frame+1200;for(const r of t)for(let o=0;o<3;o++){const a=Math.max(-61,Math.min(61,r.x+(r.x<0?1:-1)*(5+o*6))),l=this.floorAt(a,100,-100);l>-50&&this.state.boosts.push({id:this.next(),x:a,y:l+.6,kind:Qh[o],hp:20,expires:this.state.frame+1800})}}}snapshot(){return JSON.parse(JSON.stringify(this.state))}restore(e){if(e.version!==1)throw new Error("Incompatible Royale state");this.state=JSON.parse(JSON.stringify(e))}event(e,t,i,s=-1,r={}){this.state.events.push({id:`${this.state.round}:${this.state.frame}:${++this.state.eventSeq}`,frame:this.state.frame,kind:e,x:t,y:i,actor:s,...r}),this.state.events.length>180&&this.state.events.shift()}startRound(){const e=this.state.actors.map(s=>({...s.look})),t=this.state.actors.map(s=>s.last),i=this.state.round+1;this.makeActors(),this.state.actors.forEach((s,r)=>{s.look=e[r],s.last=t[r],s.y=this.floorAt(s.x,100,-1)>-50?this.floorAt(s.x,100,-1):1}),this.makeWorld(),this.state.round=i,this.state.phase="match",this.state.phaseFrame=0,this.state.winner=null,this.state.zoneLeft=-64,this.state.zoneRight=64}lobby(e){for(const s of this.state.actors.filter(r=>r.human)){const r=e[s.id]??$i(s.look);JSON.stringify(s.look)!==JSON.stringify(r.look)&&(s.look={...r.look},s.ready=!1),r.ready!==s.last.ready&&(s.ready=!s.ready),s.last={...r}}const t=e[0];t&&t.venueChange!==this.state.venueNonce&&(this.state.venueNonce=t.venueChange,this.state.venue=vn[t.venue].id,this.makeWorld(),this.state.actors.forEach(s=>s.ready=!1));const i=this.state.actors.filter(s=>s.human).every(s=>s.ready);this.state.phase==="lobby"&&i?(this.state.phase="countdown",this.state.phaseFrame=0):this.state.phase==="countdown"&&!i&&(this.state.phase="lobby",this.state.phaseFrame=0),this.state.phase==="countdown"&&this.state.phaseFrame>=180&&this.startRound()}rematch(e){if(this.state.actors.filter(t=>t.human).every(t=>{var i;return(((i=e[t.id])==null?void 0:i.rematch)??0)>t.last.rematch})){this.state.venue=vn[(vn.findIndex(i=>i.id===this.state.venue)+1)%vn.length].id,this.state.phase="lobby",this.state.phaseFrame=0;const t=this.state.actors.map(i=>({...i.look}));this.makeActors(),this.state.actors.forEach((i,s)=>{i.look=t[s],i.human&&(i.last=e[i.id]),i.ready=!1}),this.makeWorld()}}weapon(e){return!e.parts.armL&&!e.parts.armR?"body":e.weapons[e.slot]??"shank"}handling(e){return(e.parts.handL>0?1:0)+(e.parts.handR>0?1:0)}movement(e){const t=Os(e),i=+(e.parts.footL>0)+ +(e.parts.footR>0);return Math.max(.24,(t===2?1:t===1?.65:.29)*(i===2?1:i===1?.85:.7))}detach(e,t,i=-1){const s=e.parts.head>0,r=Ua(e),o=Object.fromEntries(hn.map(c=>[c,gn(e,c)])),a=c=>{if(e.parts[c]<=0)return;e.parts[c]=0;const h=o[c];this.state.debris.length<120&&this.state.debris.push({id:this.next(),x:e.x+h.x,y:e.y+h.y,vx:(this.random()-.5)*12,vy:3+this.random()*5,life:900,part:c,look:{...e.look},color:0,hp:14,w:h.w,h:h.h}),this.event("detach",e.x+h.x,e.y+h.y,e.id,{part:c,severed:c===t&&t!=="torso"});for(const f of hn)os[f].parent===c&&a(f)};a(t);const l=Ua(e);if(l===1&&r!==1&&e.hp>0&&e.parts.head>0?(e.distressAt=this.state.frame,e.distressCount=0):(l!==1||e.hp<=0||e.parts.head<=0)&&(delete e.distressAt,delete e.distressCount),e.hp>0&&!e.pendingSpawn&&e.parts.torso>0){const c=Os(e)===0,h=t==="head"&&s&&e.parts.head<=0,f=c?360:h?600:null;f!==null&&(e.bleedOutAt===null||this.state.frame+f<e.bleedOutAt)&&(e.bleedOutAt=this.state.frame+f,e.bleedOwner=i,e.bleedCause=c?"bleedout":"head_bleedout",e.bleedRate=c?100/360*(e.human?Oa:1):e.hp/600)}if(!e.parts.armL&&!e.parts.armR){for(const c of e.weapons)c!=="shank"&&c!=="body"&&e.durability[c]>0&&this.state.pickups.push({id:this.next(),x:e.x,y:e.y+.5,weapon:c,hp:e.durability[c],charges:c==="laser"||c==="flamethrower"?e.specialAmmo[c]:void 0});e.weapons=["body"],e.slot=0}}incomingDamage(e,t,i){const s=this.state.actors[i];return t*(e.human&&s&&!s.human?ag:1)}damage(e,t,i,s,r=-1){if(e.pendingSpawn||e.hp<=0||e.parts[t]<=0)return;i=this.incomingDamage(e,i,r);const o=!["fire","fuel_fire","zone","toxic"].includes(s),a=e.human?Oa:1,l=Math.min(e.parts[t],i*(t==="torso"?(o?.45:1)*a:1));if(t==="torso"&&o){const h=e.id%2===0?"L":"R",f=h==="L"?"R":"L",d=[`thigh${h}`,`arm${h}`,`thigh${f}`,`arm${f}`,"head"].find(g=>e.parts[g]>0);if(d){const g=i*.8;e.parts[d]<=g?this.detach(e,d,r):e.parts[d]-=g}}e.parts[t]<=l?this.detach(e,t,r):e.parts[t]-=l;const c=t==="torso"?l:l*.08*a;e.hp=Math.max(0,e.hp-c),this.event("hit",e.x+gn(e,t).x,e.y+gn(e,t).y,e.id,{part:t}),(e.hp<=0||e.parts.torso<=0)&&this.kill(e,s,r)}kill(e,t,i=-1){if(!e.death){if(e.carrying&&this.throwObject(e,!0),!e.human&&!e.pendingSpawn&&this.state.chaosAt!==void 0&&this.state.boosts.length<16){const s=this.floorAt(e.x,e.y+.5,-100);s>-50&&this.state.boosts.push({id:this.next(),x:e.x,y:s+.6,kind:Qh[e.id%3],hp:20,expires:this.state.frame+900})}e.hp=0,e.death=t,e.deathFrame=this.state.frame,(t==="bleedout"||t==="head_bleedout")&&this.bloodSplatter(e),this.event("death",e.x,e.y+1,e.id,{cause:t}),i>=0&&i!==e.id&&this.state.actors[i].kills++,this.detach(e,"torso")}}bloodSplatter(e){const t=this.floorAt(e.x,e.y+.3,-100);if(t<=-50)return;const i=this.state.props.find(s=>s.hp>0&&!s.falling&&Math.abs(s.y+s.h/2-t)<.001&&Math.abs(e.x-s.x)<s.w/2+.25);i&&(this.state.blood.push({id:this.next(),x:e.x,y:t+.018,surface:i.id}),this.state.blood.length>8&&this.state.blood.shift())}hitPart(e,t,i){if(e.pendingSpawn)return null;let s=null,r=1/0;for(const o of hn){if(e.parts[o]<=0)continue;const a=gn(e,o),l=Math.abs(t-e.x-a.x),c=Math.abs(i-e.y-a.y);l<a.w/2+.14&&c<a.h/2+.14&&l+c<r&&(r=l+c,s=o)}return s}floorAt(e,t,i){let s=-100;for(const r of this.state.props){if(r.hp<=0||r.falling||!(r.kind==="floor"||r.kind==="crate"||r.kind==="roof"||r.kind==="balcony"||r.kind==="table"||r.kind==="car"||r.kind==="truck"||r.kind==="barrier"||r.kind==="shelf"||r.kind==="pallet"))continue;const o=r.y+r.h/2;Math.abs(e-r.x)<r.w/2+.25&&t>=o-.2&&i<=o&&o>s&&(s=o)}return s}damagePickup(e,t){e.hp-=t,e.hp<=0&&(this.event("break",e.x,e.y),this.state.debris.length<120&&this.state.debris.push({id:this.next(),x:e.x,y:e.y,vx:(this.random()-.5)*5,vy:3,life:450,part:null,look:null,color:4,hp:8,w:.4,h:.15}),this.state.pickups=this.state.pickups.filter(i=>i.id!==e.id))}damageBoost(e,t){e.hp-=t,e.hp<=0&&(this.event("break",e.x,e.y),this.state.boosts=this.state.boosts.filter(i=>i.id!==e.id))}damageWeapon(e,t,i=-1){if(e.pendingSpawn)return;if(t=this.incomingDamage(e,t,i),e.carrying){if(e.carrying.hp-=t,e.carrying.hp<=0){const r=e.carrying.kind;delete e.carrying,this.event("break",e.x,e.y+1,i),r==="can"&&this.state.fires.length<32&&this.state.fires.push({id:this.next(),x:e.x,y:e.y+.5,radius:1.5,until:this.state.frame+180,owner:i,cause:"fire"})}return}const s=this.weapon(e);s!=="body"&&(e.durability[s]=Math.max(0,e.durability[s]-t),e.durability[s]||(this.event("break",e.x,e.y+ci(e),e.id),e.weapons=e.weapons.filter(r=>r!==s),e.weapons.length||(e.weapons=["body"]),e.slot=0,e.reloading=0))}canPickup(e,t){return!e.pendingSpawn&&(t.expires===void 0||t.expires>this.state.frame)&&(t.reservedFor===void 0||t.reservedFor===e.id||this.state.phaseFrame>=(t.reservedUntil??0))}pickup(e){if(!e.pendingSpawn&&this.state.chaosAt!==void 0){const i=this.state.boosts.filter(s=>s.expires>this.state.frame&&Math.hypot(s.x-e.x,s.y-e.y-.5)<2.5).sort((s,r)=>Math.abs(s.x-e.x)-Math.abs(r.x-e.x))[0];if(i){e.boost={kind:i.kind,until:this.state.frame+tg[i.kind]},this.state.boosts=this.state.boosts.filter(s=>s.id!==i.id),this.event("pickup",e.x,e.y+1,e.id);return}}if(!e.parts.armL&&!e.parts.armR)return;const t=this.state.pickups.filter(i=>this.canPickup(e,i)&&Math.hypot(i.x-e.x,i.y-e.y-1)<3).sort((i,s)=>Math.abs(i.x-e.x)-Math.abs(s.x-e.x))[0];if(t){if(!e.weapons.includes(t.weapon))if(e.weapons.length<2)e.weapons.push(t.weapon);else{const i=e.weapons[1];e.weapons[1]=t.weapon,this.state.pickups.push({id:this.next(),x:e.x-1,y:e.y+.6,weapon:i,hp:e.durability[i],charges:i==="laser"||i==="flamethrower"?e.specialAmmo[i]:void 0})}(t.weapon==="laser"||t.weapon==="flamethrower")&&(e.specialAmmo[t.weapon]=t.charges??(t.weapon==="laser"?2:24)),e.durability[t.weapon]=t.hp,e.slot=Math.max(0,e.weapons.indexOf(t.weapon)),e.reloading=0,this.state.pickups=this.state.pickups.filter(i=>i.id!==t.id),e.ammo=this.clip(e),this.event("pickup",e.x,e.y+1,e.id)}}clip(e){const t=this.weapon(e);return t==="laser"||t==="flamethrower"?e.specialAmmo[t]:t==="shotgun"||t==="smg"?e.magazines[t]:0}reload(e){const t=this.weapon(e);if(e.reloading||e.reserve<=0||!(t==="smg"||t==="shotgun"))return;const i=t==="smg"?30:6;e.magazines[t]>=i||(this.event("reload",e.x,e.y+1,e.id),e.reloading=Math.round((t==="smg"?110:40)*(this.handling(e)<2?1.5:1)))}attack(e){if(e.pendingSpawn||e.cooldown>0)return;if(e.carrying){this.throwObject(e);return}const t=this.weapon(e),i=t==="shotgun"||t==="smg",s=Ls(e);if(t==="laser"||t==="flamethrower"){if(e.specialAmmo[t]<=0){this.spendSpecial(e,t);return}if(t==="flamethrower"&&this.state.shots.length>117)return;e.specialAmmo[t]--,e.cooldown=t==="laser"?24:6;const r=e.x+s.x+s.dx*.4,o=e.y+s.y+s.dy*.4;if(t==="laser"){let a=r,l=o,c=!1;for(let h=0;h<=160&&!c;h++){a=r+s.dx*h*.15,l=o+s.dy*h*.15;for(const f of this.state.props)if(f.hp>0&&Math.abs(a-f.x)<f.w/2&&Math.abs(l-f.y)<f.h/2){this.damageProp(f,65,e.id),c=!0;break}if(!c)for(const f of this.state.actors){if(f.id===e.id||f.hp<=0||f.pendingSpawn)continue;const u=this.hitPart(f,a,l);if(u){this.damage(f,u,50,"laser",e.id),c=!0;break}}}this.recoilBoost(e,s.dx,s.dy,!1),this.event("shot",r,o,e.id,{weapon:t,endX:a,endY:l})}else{for(let a=-1;a<=1;a++){const l=s.angle+a*.13;this.state.shots.push({id:this.next(),owner:e.id,x:r,y:o,vx:Math.cos(l)*20,vy:Math.sin(l)*20,life:15,damage:1,weapon:t})}this.event("shot",r,o,e.id,{weapon:t})}this.spendSpecial(e,t),e.ammo=this.clip(e);return}if(t==="axe"){if(this.state.shots.length>=120)return;this.state.shots.push({id:this.next(),owner:e.id,x:e.x+s.x+s.dx*.35,y:e.y+s.y+s.dy*.35,vx:s.dx*18,vy:s.dy*18,life:22,damage:30,weapon:"axe",durability:e.durability.axe}),this.event("shot",e.x+s.x,e.y+s.y,e.id,{weapon:t}),e.weapons=e.weapons.filter(r=>r!=="axe"),e.weapons.length||(e.weapons=["body"]),e.slot=0,e.cooldown=43,e.attacking=10,e.reloading=0;return}if(i){if(e.reloading&&!(t==="shotgun"&&e.magazines.shotgun>0))return;if(e.magazines[t]<=0){this.reload(e);return}e.reloading=0,e.magazines[t]--,e.cooldown=t==="smg"?6:45;const r=Math.atan2(e.aimY,e.aimX),o=t==="shotgun"?7:1;for(let a=0;a<o&&this.state.shots.length<120;a++){const l=(this.random()-.5)*(t==="shotgun"?.38:.09)+(e.parts.head?0:(this.random()-.5)*.65),c=r+l;this.state.shots.push({id:this.next(),owner:e.id,x:e.x+s.x+s.dx*.35,y:e.y+s.y+s.dy*.35,vx:Math.cos(c)*48,vy:Math.sin(c)*48,life:t==="shotgun"?20:60,damage:t==="shotgun"?9:8,weapon:t})}this.recoilBoost(e,s.dx,s.dy,t==="shotgun"),this.event("shot",e.x,e.y+ci(e),e.id,{weapon:t})}else{e.cooldown=t==="body"?32:18,e.attacking=10;const r=(t==="shank"?ig:1.1)*(this.handling(e)<2?.85:1),o=t==="body"?8:13;if(this.event("melee",e.x,e.y+ci(e),e.id,{weapon:t}),t==="shank"){let a=!1;for(let l=1;l<=12&&!a;l++){const c=r*l/12,h=e.x+s.dx*c,f=e.y+ci(e)+s.dy*c;for(const u of this.state.props)if(u.hp>0&&Math.abs(h-u.x)<u.w/2&&Math.abs(f-u.y)<u.h/2){this.damageProp(u,o*.7,e.id),a=!0;break}if(a)break;for(const u of this.state.actors){if(u.id===e.id||u.hp<=0||u.pendingSpawn||Math.hypot(u.x-e.x,u.y-e.y)>r+.25)continue;const d=this.hitPart(u,h,f);if(d){this.damage(u,d,o,"shank",e.id),a=!0;break}}}return}for(const a of this.state.actors){if(a.id===e.id||a.hp<=0||a.pendingSpawn||Math.abs(a.y-e.y)>2.3)continue;const l=a.x-e.x;if(Math.sign(l)!==e.face||Math.abs(l)>r)continue;const c=e.y+ci(e)+e.aimY*1.5,h=hn.filter(f=>a.parts[f]>0).sort((f,u)=>Math.abs(a.y+gn(a,f).y-c)-Math.abs(a.y+gn(a,u).y-c));h[0]&&this.damage(a,h[0],o,t,e.id)}for(const a of this.state.props)if(a.hp>0&&Math.abs(a.x-e.x)<r+a.w/2&&Math.abs(a.y-e.y-ci(e)-e.aimY*1.1)<a.h/2+1){const l=a.x-e.x;(Math.sign(l)===e.face||Math.abs(l)<.6)&&this.damageProp(a,o*.7,e.id)}}e.ammo=this.clip(e)}spendSpecial(e,t){e.specialAmmo[t]>0||(e.weapons=e.weapons.filter(i=>i!==t),e.weapons.length||(e.weapons=["body"]),e.slot=0)}dropLoot(e){if(this.state.pickups.length>=32)return;const t=this.floorAt(e.x,e.y+e.h/2+.1,-100);if(t<=-50)return;const i=e.trainingFor!==void 0||this.state.phaseFrame<600&&this.openingSpawnProtected(e.x)?"shank":this.random()<.5?"laser":"flamethrower";this.state.pickups.push({id:this.next(),x:e.x,y:t+.55,weapon:i,hp:ir[i],charges:i==="laser"?2:i==="flamethrower"?24:void 0,expires:this.state.frame+600})}damageProp(e,t,i=-1){if(!(e.hp<=0)&&(e.hp=Math.max(0,e.hp-t),e.material==="fuel"&&e.hp<e.maxHp*.5&&(e.burn=Math.max(e.burn,1),this.ignite(e,this.state.frame+360,"fuel_fire",i)),e.hp<=0)){this.event("break",e.x,e.y,i,{prop:e.kind}),e.kind==="pump"&&!this.state.fires.some(s=>s.id===e.id)&&this.state.fires.push({id:e.id,x:e.x,y:Math.max(.4,e.y-e.h/2+.5),radius:3,until:this.state.frame+480,owner:i,cause:"fuel_fire"});for(let s=0;s<4&&this.state.debris.length<120;s++)this.state.debris.push({id:this.next(),x:e.x+(this.random()-.5)*e.w,y:e.y,vx:(this.random()-.5)*8,vy:2+this.random()*5,life:600,part:null,look:null,color:e.material==="glass"?2:e.material==="metal"?4:5,hp:12,w:Math.min(1,e.w/4),h:Math.min(.7,e.h/3)});if(e.material==="fuel"&&!e.exploded){e.exploded=!0,this.event("explosion",e.x,e.y,i);const s=e.kind==="can"?4:7;for(const r of this.state.actors)if(r.hp>0&&!r.pendingSpawn){const o=Math.hypot(r.x-e.x,r.y+1-e.y);o<s&&(this.damage(r,"torso",Math.max(12,55*(1-o/s)),"blast",i),r.vx+=(r.x>e.x?1:-1)*10,r.vy+=5)}for(const r of[...this.state.pickups])Math.hypot(r.x-e.x,r.y-e.y)<s&&this.damagePickup(r,50);for(const r of this.state.props)r!==e&&r.hp>0&&Math.hypot(r.x-e.x,r.y-e.y)<s&&(r.fuel>0&&(r.burn=1,this.ignite(r,this.state.frame+240,"fuel_fire",i)),r.hp=Math.max(1,r.hp-22))}this.dropLoot(e)}}ignite(e,t,i,s,r=0){var a;if(r>2||e.onFire&&e.onFire.until>this.state.frame)return;const o=this.state.actors.find(l=>l===e);o&&(o.hp<=0||o.pendingSpawn)||((a=this.state.major)==null?void 0:a.kind)==="foam"&&this.state.major.started&&this.state.frame<this.state.major.until&&Math.abs(e.x-this.state.major.x)<8||(this.event("ignite",e.x,e.y+(o?Tn(o)*.5:0),(o==null?void 0:o.id)??-1),e.onFire={until:Math.min(t,this.state.frame+240),cause:i,owner:s,depth:r})}burning(){const e=this.state,t=e.frame;e.fires=e.fires.filter(r=>r.until>t);for(const r of e.props)r.hp>0&&r.burn&&!r.onFire&&this.ignite(r,t+240,r.material==="fuel"?"fuel_fire":"fire",-1);const i=[...e.actors.filter(r=>r.hp>0&&!r.pendingSpawn).map(r=>({object:r,x:r.x,y:r.y+Tn(r)/2,w:.9,h:Tn(r)})),...e.props.filter(r=>r.hp>0).map(r=>({object:r,x:r.x,y:r.y,w:r.w,h:r.h})),...e.debris.filter(r=>r.hp>0).map(r=>({object:r,x:r.x,y:r.y,w:r.w,h:r.h})),...e.pickups.filter(r=>r.hp>0).map(r=>({object:r,x:r.x,y:r.y,w:.6,h:.4})),...e.boosts.filter(r=>r.hp>0).map(r=>({object:r,x:r.x,y:r.y,w:.8,h:.6}))],s=[...e.fires.map(r=>({...r,object:null})),...i.filter(r=>r.object.onFire&&r.object.onFire.until>t&&(r.object.onFire.depth??0)<2&&(!("material"in r.object)||["wood","fabric","fuel"].includes(r.object.material))).map(r=>({...r.object.onFire,object:r.object,x:r.x,y:r.y,radius:.75}))];for(const r of s)for(const o of i){if(r.object===o.object)continue;const a=Math.max(0,Math.abs(o.x-r.x)-o.w/2),l=Math.max(0,Math.abs(o.y-r.y)-o.h/2);Math.hypot(a,l)<=r.radius&&this.ignite(o.object,r.until,r.cause,r.owner,(r.depth??0)+1)}for(const r of i){const o=r.object.onFire;o&&o.until<=t&&(delete r.object.onFire,"burn"in r.object&&(r.object.burn=0))}if(t%15===0){for(const r of e.actors)r.hp>0&&!r.pendingSpawn&&r.onFire&&this.damage(r,"torso",2,r.onFire.cause,r.onFire.owner);for(const r of e.props)r.hp>0&&r.onFire&&this.damageProp(r,3,r.onFire.owner);for(const r of e.debris)r.hp>0&&r.onFire&&(r.hp-=2);for(const r of[...e.pickups])r.hp>0&&r.onFire&&this.damagePickup(r,2);for(const r of[...e.boosts])r.hp>0&&r.onFire&&this.damageBoost(r,2)}}grabOrThrow(e){if(this.state.chaosAt===void 0||e.pendingSpawn||e.hp<=0||(e.stunUntil??0)>this.state.frame||!e.parts.armL&&!e.parts.armR)return;if(e.carrying){this.throwObject(e);return}const t=this.state.props.filter(i=>i.hp>0&&!i.falling&&["tire","tv","can"].includes(i.kind)&&Math.hypot(i.x-e.x,i.y-e.y-1)<2.8).sort((i,s)=>Math.abs(i.x-e.x)-Math.abs(s.x-e.x))[0];if(t)e.carrying={kind:t.kind,hp:t.hp},this.state.props=this.state.props.filter(i=>i.id!==t.id);else{const i=this.state.debris.find(s=>s.part&&s.look&&Math.hypot(s.x-e.x,s.y-e.y-1)<2.8);i&&(e.carrying={kind:"limb",hp:i.hp,part:i.part,look:i.look},this.state.debris=this.state.debris.filter(s=>s.id!==i.id))}e.carrying&&this.event("pickup",e.x,e.y+1,e.id)}throwObject(e,t=!1){if(!e.carrying||this.state.thrown.length>=24)return;const i=Ls(e),s=e.carrying;delete e.carrying,this.state.thrown.push({...s,id:this.next(),owner:e.id,x:e.x+i.x,y:e.y+i.y,vx:t?0:i.dx*18,vy:t?0:i.dy*18+4,angle:0,life:180,bounces:0,hit:[]}),e.cooldown=24,this.event("throw",e.x,e.y+1,e.id)}recoilBoost(e,t,i,s){var r;((r=e.boost)==null?void 0:r.kind)!=="recoil"||e.boost.until<=this.state.frame||(e.vx-=t*(s?8:3),e.vy=Math.max(e.vy,s?9:3)-i*(s?5:2),e.grounded=!1)}thrownObjects(){const e=this.state;for(const t of e.thrown){t.life--;const i=t.y;if(t.vy-=24*Ut,t.x+=t.vx*Ut,t.y+=t.vy*Ut,t.angle+=t.vx*Ut*.8,t.hp<=0&&(t.life=0),t.kind==="can"&&t.life>0&&e.frame%12===0&&e.fires.length<32&&e.fires.push({id:this.next(),x:t.x,y:t.y,radius:.65,until:e.frame+90,owner:t.owner,cause:"fire"}),t.life>0&&(Math.abs(t.vx)>1||Math.abs(t.vy)>1))for(const o of e.actors)o.id===t.owner||o.hp<=0||o.pendingSpawn||t.hit.includes(o.id)||Math.abs(o.x-t.x)<.75&&t.y>o.y&&t.y<o.y+Tn(o)&&(t.hit.push(o.id),this.damage(o,"torso",t.kind==="tv"?22:16,"thrown",t.owner),t.kind==="tv"&&(o.stunUntil=e.frame+45),o.vx+=Math.sign(t.vx)*6,t.kind!=="tire"&&(t.life=0));let s=!1;for(const o of e.props)if(o.hp>0&&!["floor","roof","balcony","tire"].includes(o.kind)&&Math.abs(t.x-o.x)<o.w/2+.2&&Math.abs(t.y-o.y)<o.h/2+.2){this.damageProp(o,12,t.owner),t.vx*=-.65,t.bounces++,s=!0,t.kind!=="tire"&&(t.life=0);break}const r=this.floorAt(t.x,i-.25,t.y-.25);t.vy<0&&r>-50&&(t.y=r+.25,t.kind==="tire"&&t.bounces<3&&t.hp>0?(t.vy=Math.max(3,Math.abs(t.vy)*.65),t.vx*=.85,t.bounces++):t.life=0),s&&t.bounces>6&&(t.life=0),(t.y<-15||Math.abs(t.x)>70)&&(t.life=0),t.life<=0&&(t.kind==="can"&&t.y>-10?(e.fires.length<32&&e.fires.push({id:this.next(),x:t.x,y:t.y,radius:1.5,until:e.frame+180,owner:t.owner,cause:"fire"}),this.event("explosion",t.x,t.y,t.owner)):t.kind==="tire"&&t.hp>0&&r>-50?e.props.push({id:this.next(),kind:"tire",x:t.x,y:r+.6,w:1.1,h:1.2,hp:t.hp,maxHp:25,material:"fabric",fuel:.5,burn:0,supports:[],falling:!1,vy:0,exploded:!1,solid:!0,color:0}):e.debris.length<120&&t.y>-10&&e.debris.push({id:this.next(),x:t.x,y:t.y,vx:t.vx*.2,vy:1,life:450,part:t.part??null,look:t.look??null,color:3,hp:Math.max(1,t.hp),w:.5,h:.3}))}e.thrown=e.thrown.filter(t=>t.life>0)}surfaceEffect(e){if(this.state.chaosAt===void 0||e.y>1.2)return;const t=this.state.props.filter(i=>i.hp>0&&!i.falling&&Math.abs(i.x-e.x)<3.7);if(t.some(i=>i.kind==="freezer"))return"cold";if(t.some(i=>i.kind==="detergent"))return"detergent"}toxicUrinals(){const e=this.state;if(e.venue!=="bathroom"||e.chaosAt===void 0||e.frame%15!==0)return;const t=e.props.filter(i=>i.kind==="urinal"&&i.toxic&&i.hp>0&&!i.falling);for(const i of e.actors)i.hp<=0||i.pendingSpawn||t.some(s=>Math.abs(i.x-s.x)<2.6&&i.y<2.4&&i.y+Tn(i)>.2)&&this.damage(i,"torso",2,"toxic")}majorEvents(){var i;const e=this.state;if(e.chaosAt===void 0)return;let t=e.major;if(!t){if(e.frame<(e.nextMajorAt??1/0))return;const s=e.actors.find(a=>a.human&&a.hp>0);let r=Math.max(-48,Math.min(48,((s==null?void 0:s.x)??0)+6));const o=e.venue==="laundry"?"spin":e.venue==="market"?this.random()<.5?"pallet":"forklift":e.venue==="impound"?"tow":e.venue==="rest"?"truck":e.venue==="motel"?"collapse":"foam";if(t={kind:o,x:r,activeAt:e.frame+120,until:e.frame+600,started:!1},o==="spin"||o==="tow"){const a=e.props.filter(l=>l.hp>0&&!l.falling&&l.kind===(o==="spin"?"washer":"car")).sort((l,c)=>Math.abs(l.x-((s==null?void 0:s.x)??0))-Math.abs(c.x-((s==null?void 0:s.x)??0)))[0];if(!a){e.nextMajorAt=e.frame+600;return}r=a.x,t.x=r,o==="spin"?t.sourceId=a.id:(t.propId=a.id,t.sourceId=this.next(),e.props.push({id:t.sourceId,kind:"towchain",x:r+4,y:2.1,w:4,h:.24,hp:25,maxHp:25,material:"metal",fuel:0,burn:0,supports:[],falling:!1,vy:0,exploded:!1,solid:!1,color:0}))}e.major=t,this.event("warning",r,1);return}if(e.frame>=t.until){if(["truck","forklift"].includes(t.kind)){const s=e.props.find(r=>r.id===t.propId);s&&s.hp>0&&this.damageProp(s,s.hp)}if(t.kind==="tow"){const s=e.props.find(r=>r.id===t.sourceId);s&&s.hp>0&&this.damageProp(s,s.hp)}delete e.major,e.nextMajorAt=e.frame+1800;return}if(t.kind==="tow"){const s=e.props.find(o=>o.id===t.sourceId),r=e.props.find(o=>o.id===t.propId);if(!s||!r||s.hp<=0||r.hp<=0){t.until=e.frame;return}}if(t.kind==="spin"&&!t.started&&!e.props.some(s=>s.id===t.sourceId&&s.hp>0)){t.until=e.frame;return}if(!(e.frame<t.activeAt)){if(!t.started){if(t.started=!0,t.kind==="spin"){const s=e.props.find(l=>l.id===t.sourceId),r=e.actors.find(l=>l.human&&l.hp>0),o=((r==null?void 0:r.x)??0)<s.x?-1:1;e.thrown.length<24&&e.thrown.push({id:this.next(),kind:"washer-door",owner:-1,x:s.x+o*1.8,y:2.1,vx:o*13,vy:5,angle:0,life:150,bounces:0,hit:[],hp:20}),this.event("throw",s.x,2);const a=e.props.filter(l=>l.kind==="dryer"&&l.hp>0&&Math.abs(l.x-s.x)<6)[0];a&&(this.ignite(a,e.frame+240,"fire",-1),this.event("explosion",a.x,a.y),e.fires.length<32&&e.fires.push({id:this.next(),x:a.x,y:.5,radius:2,until:e.frame+180,cause:"fire",owner:-1}))}else if(t.kind==="tow"){const s=e.props.find(r=>r.id===t.propId);s.hitActors=[]}else if(t.kind!=="foam"){const s=t.kind==="truck"||t.kind==="forklift",r=t.kind==="forklift",o=t.kind==="pallet",a=this.next();e.props.push({id:a,kind:r?"forklift":s?"truck":o?"pallet":"ac",x:s?-64:t.x,y:s?1.7:11,w:r?4:s?7:o?3:2,h:s?2.6:1.3,hp:s?90:35,maxHp:s?90:35,material:o?"wood":"metal",fuel:o?.5:0,burn:0,supports:[],falling:!s,vy:s?0:-1,exploded:!1,solid:!0,color:0}),t.propId=a}}if(t.kind==="foam"){e.fires=e.fires.filter(s=>Math.abs(s.x-t.x)>8);for(const s of e.actors)Math.abs(s.x-t.x)<8&&delete s.onFire;for(const s of e.props)Math.abs(s.x-t.x)<8&&(delete s.onFire,s.burn=0);for(const s of[...e.pickups,...e.debris,...e.boosts])Math.abs(s.x-t.x)<8&&delete s.onFire}else if(t.kind==="truck"||t.kind==="forklift"||t.kind==="tow"){const s=e.props.find(a=>a.id===t.propId);if(!s||s.hp<=0){t.until=e.frame;return}const r=t.kind==="tow";s.x+=(r?8:t.kind==="forklift"?11:16)*Ut,t.x=s.x;const o=e.props.find(a=>a.kind==="floor"&&a.hp>0&&Math.abs(a.x-s.x)<a.w/2);if(s.y=(o?o.y+o.h/2:0)+s.h/2,r){const a=e.props.find(l=>l.id===t.sourceId);a.x=s.x+4,a.y=s.y+.65}for(const a of e.actors)a.hp>0&&!a.pendingSpawn&&!((i=s.hitActors)!=null&&i.includes(a.id))&&Math.abs(a.x-s.x)<s.w/2+.5&&a.y<s.y+s.h/2&&a.y+Tn(a)>s.y-s.h/2&&((s.hitActors??(s.hitActors=[])).push(a.id),this.damage(a,"torso",32,r?"crush":"traffic"),a.vx=12,a.vy=5)}}}bot(e){if(e.pendingSpawn)return $i(e.look);const t=$i(e.look),i=this.state.actors.filter(R=>R.hp>0&&!R.pendingSpawn&&R.id!==e.id),s=this.state.chaosAt!==void 0&&this.state.frame-this.state.chaosAt<720,r=i.filter(R=>R.human),o=(s&&r.length?r:i).sort((R,P)=>Math.abs(R.x-e.x)-Math.abs(P.x-e.x)),a=o[0];if(!a)return t;const l=this.weapon(e),c=l==="smg"||l==="shotgun"||l==="laser"||l==="flamethrower",h=l==="axe",f=Math.abs(a.x-e.x),u=this.state.chaosAt===void 0?void 0:e.personality,d=this.state.pickups.filter(R=>this.canPickup(e,R)&&R.weapon!=="shank"&&Math.abs(R.x-e.x)<(u==="hoarder"?22:14)).sort((R,P)=>Math.abs(R.x-e.x)-Math.abs(P.x-e.x))[0];(e.weapons.length<2||u==="hoarder")&&d?(t.move=Math.sign(d.x-e.x),Math.abs(d.x-e.x)<2&&(t.pickup=e.last.pickup+1)):t.move=f>(l==="flamethrower"?3:c?9:h?4:1.4)?Math.sign(a.x-e.x):c&&f<4?-Math.sign(a.x-e.x):0,e.x<this.state.zoneLeft+3&&(t.move=1),e.x>this.state.zoneRight-3&&(t.move=-1);const g=hn.filter(R=>a.parts[R]>0)[(Math.floor(this.state.frame/47)+e.id)%hn.filter(R=>a.parts[R]>0).length]??"torso",_=a.x+gn(a,g).x-e.x,p=a.y+gn(a,g).y-(e.y+ci(e)),m=Math.max(.1,Math.hypot(_,p));if(t.aimX=_/m,t.aimY=p/m,t.attack=f<(l==="flamethrower"?5:c?23:h?6:2.3)&&Math.abs(a.y-e.y)<(c?9:2.3),u==="charger"&&(t.move=f>1.1?Math.sign(a.x-e.x):0),u==="bomber")if(e.carrying)t.move=f>10?Math.sign(a.x-e.x):f<4?-Math.sign(a.x-e.x):0,t.attack=f<13&&e.cooldown===0;else{const R=this.state.props.filter(P=>P.hp>0&&["can","tv","tire"].includes(P.kind)&&Math.abs(P.x-e.x)<14).sort((P,D)=>+(D.kind==="can")-+(P.kind==="can")||Math.abs(P.x-e.x)-Math.abs(D.x-e.x))[0];R&&(t.move=Math.sign(R.x-e.x),Math.abs(R.x-e.x)<2&&(t.grab=e.last.grab+1))}u==="coward"&&e.onFire&&(t.move=-Math.sign(a.x-e.x),t.attack=!1,e.grounded&&this.state.frame%45===0&&(t.jump=e.last.jump+1)),this.state.boosts.find(R=>Math.abs(R.x-e.x)<2)&&!e.boost&&(t.pickup=e.last.pickup+1);const v=this.state.props.find(R=>R.hp>0&&R.solid&&R.y-R.h/2<e.y+2.7&&R.y+R.h/2>e.y+.4&&Math.abs(R.x-e.x-t.move*1.4)<R.w/2+.6),E=this.state.fires.some(R=>Math.abs(R.x-e.x-t.move*2)<R.radius+1)||this.state.props.some(R=>R.hp>0&&(R.burn||R.onFire)&&Math.abs(R.x-e.x-t.move*2)<R.w/2+1),U=this.floorAt(e.x+t.move*2,e.y+.5,e.y-1)<-50;return e.grounded&&(v||E||U||(this.state.frame+e.id*37)%113===0)&&(t.jump=e.last.jump+1),v&&(t.attack=!0,this.state.frame%20<12&&(t.aimX=t.move,t.aimY=0)),(l==="smg"||l==="shotgun")&&this.clip(e)===0&&(e.reserve>0?t.reload=e.last.reload+1:t.cycle=e.last.cycle+1),t}move(e,t){var d,g;if(e.pendingSpawn)return;if(e.bleedOutAt!==null){if(this.state.frame>=e.bleedOutAt){this.kill(e,e.bleedCause??"bleedout",e.bleedOwner);return}e.hp=Math.max(.01,e.hp-(e.bleedRate??100/360*(e.human?Oa:1)))}if(e.distressAt!==void 0&&this.state.frame>=e.distressAt&&Ua(e)===1&&e.parts.head>0){const _=e.distressCount??0;this.event(_%2===0?"scream":"cry",e.x,e.y+gn(e,"head").y,e.id),e.distressCount=_+1,e.distressAt=this.state.frame+150+(e.id*31+_*17)%90}if(e.cooldown=Math.max(0,e.cooldown-1),e.attacking=Math.max(0,e.attacking-1),e.reloading>0&&(e.reloading--,!e.reloading)){const _=this.weapon(e);if(_==="smg"){const p=Math.min(e.reserve,30-e.magazines.smg);e.magazines.smg+=p,e.reserve-=p}else _==="shotgun"&&e.reserve>0&&(e.magazines.shotgun++,e.reserve--,e.magazines.shotgun<6&&this.reload(e))}t.cycle!==e.last.cycle&&(this.event("swap",e.x,e.y+1,e.id),e.slot=(e.slot+1)%e.weapons.length,e.reloading=0),t.grab!==e.last.grab&&this.grabOrThrow(e),t.pickup!==e.last.pickup&&this.pickup(e),t.reload!==e.last.reload&&this.reload(e),!e.parts.head&&this.state.frame>=e.driftAt&&(e.drift=(this.random()*2-1)*5.5,e.driftAt=this.state.frame+15+Math.floor(this.random()*15)),e.boost&&e.boost.until<=this.state.frame&&delete e.boost;const i=(d=e.boost)==null?void 0:d.kind,s=(e.stunUntil??0)>this.state.frame,r=this.surfaceEffect(e),o=r==="detergent"||i==="skates"||((g=this.state.major)==null?void 0:g.kind)==="foam"&&this.state.major.started&&Math.abs(e.x-this.state.major.x)<8,a=7*this.movement(e)*(r==="cold"?.55:1)*(i==="cart"?2.1:i==="skates"?1.65:1),l=s?0:t.move,c=s?0:e.parts.head?l*a:l*a*.25+e.drift;e.vx+=((o&&l===0?e.vx*.985:c)-e.vx)*(o?.055:i==="cart"?.12:.2),Math.abs(t.aimX)>.05&&(e.face=Math.sign(t.aimX)),e.aimX=t.aimX,e.aimY=t.aimY,t.jump!==e.last.jump&&e.grounded&&Os(e)>0&&!s&&(this.event("jump",e.x,e.y,e.id),e.vy=14*Math.max(.4,this.movement(e)),e.grounded=!1),e.vy-=Fa*Ut;const h=e.x,f=e.y;e.x=Math.max(-63,Math.min(63,e.x+e.vx*Ut)),e.y+=e.vy*Ut,e.grounded=!1;const u=this.floorAt(e.x,f,e.y);e.vy<=0&&u>-50&&(e.vy<-5&&this.event("land",e.x,u,e.id),e.y=u,e.vy=0,e.grounded=!0);for(const _ of this.state.props)_.hp<=0||!_.solid||_.falling||_.kind==="floor"||_.kind==="roof"||_.kind==="balcony"||Math.abs(e.x-_.x)<_.w/2+.4&&e.y+Tn(e)>_.y-_.h/2+.1&&e.y<_.y+_.h/2-.1&&Math.abs(h-_.x)>=_.w/2+.35&&(i==="cart"&&Math.abs(e.vx)>5&&this.state.frame>=(e.ramAt??0)&&(this.damageProp(_,45,e.id),e.ramAt=this.state.frame+30),_.hp>0&&(e.x=h,e.vx=i==="cart"?-e.vx*.25:0));if(e.carrying&&!e.parts.armL&&!e.parts.armR&&this.throwObject(e,!0),i==="cart"&&Math.abs(e.vx)>5&&this.state.frame>=(e.ramAt??0)){const _=this.state.actors.find(p=>p.id!==e.id&&p.hp>0&&!p.pendingSpawn&&Math.abs(p.x-e.x)<1.3&&Math.abs(p.y-e.y)<1.5);_&&(this.damage(_,"torso",18,"body",e.id),_.vx=Math.sign(e.vx)*12,_.vy=5,e.ramAt=this.state.frame+45)}t.attack&&!s&&this.attack(e),e.ammo=this.clip(e),e.y<-12&&this.kill(e,"fall"),this.state.phaseFrame%30===0&&(e.x<this.state.zoneLeft||e.x>this.state.zoneRight)&&this.damage(e,"torso",this.state.phaseFrame>10800?20:5,"zone"),this.state.phaseFrame>14400&&this.state.phaseFrame%60===0&&this.damage(e,"torso",8,"zone"),e.last={...t}}step(e=[]){var a,l;const t=this.state;t.frame++,t.phaseFrame++,t.eventSeq=0;const i=e.map(ng);if(t.phase==="lobby"||t.phase==="countdown"){this.lobby(i);return}if(t.phase==="results"){this.rematch(i);return}if(t.chaosAt===void 0&&t.actors.some(c=>c.pendingSpawn)){const c=t.actors.filter(f=>f.human&&f.hp>0);t.props.some(f=>f.trainingFor!==void 0&&f.hp>0&&c.some(u=>u.id===f.trainingFor))?t.phaseFrame=0:this.releaseEnemies()}(t.venue==="bathroom"||t.props.some(c=>c.kind==="entrance"))&&t.chaosAt!==void 0&&t.actors.some(c=>c.pendingSpawn&&c.hp>0)&&this.releaseEnemies(),this.majorEvents();const s=t.phaseFrame/60,r=Math.max(0,s-30)*.27;if(t.zoneLeft=Math.min(-1,-64+r),t.zoneRight=Math.max(1,64-r),t.chaosAt!==void 0)for(const c of t.actors)c.pendingSpawn&&c.hp>0&&(c.x<t.zoneLeft||c.x>t.zoneRight||t.phaseFrame>=14400)&&this.kill(c,"zone");for(const c of t.actors)c.hp>0&&!c.pendingSpawn&&this.move(c,c.human?i[c.id]??$i(c.look):this.bot(c));for(const c of t.shots){c.life--,c.weapon==="axe"&&(c.vy-=18*Ut);const h=c.x,f=c.y;c.x+=c.vx*Ut,c.y+=c.vy*Ut;const u=Math.max(1,Math.ceil(Math.hypot(c.x-h,c.y-f)/.18));for(let d=1;d<=u&&c.life>0;d++){const g=h+(c.x-h)*d/u,_=f+(c.y-f)*d/u;let p=!1;for(const m of t.actors)if(m.hp>0&&!m.pendingSpawn&&m.id!==c.owner){if(c.weapon!=="flamethrower"&&(m.carrying||this.weapon(m)!=="body")&&Math.abs(g-m.x-Ls(m).x)<.35&&Math.abs(_-m.y-Ls(m).y)<.16){this.damageWeapon(m,c.damage,c.owner),p=!0;break}const M=this.hitPart(m,g,_);if(M){this.damage(m,M,c.damage,c.weapon==="flamethrower"?"fire":c.weapon,c.owner),c.weapon==="flamethrower"&&this.ignite(m,t.frame+240,"fire",c.owner),p=!0;break}}if(!p){for(const m of t.props)if(m.hp>0&&Math.abs(g-m.x)<m.w/2&&Math.abs(_-m.y)<m.h/2){this.damageProp(m,c.damage*(c.weapon==="axe"?1.6:.65),c.owner),c.weapon==="flamethrower"&&m.hp>0&&this.ignite(m,t.frame+240,"fire",c.owner),p=!0;break}}if(!p){for(const m of[...t.boosts])if(Math.abs(g-m.x)<.5&&Math.abs(_-m.y)<.4){this.damageBoost(m,c.damage),c.weapon==="flamethrower"&&this.ignite(m,t.frame+240,"fire",c.owner),p=!0;break}}if(!p){for(const m of t.thrown)if(Math.abs(g-m.x)<.5&&Math.abs(_-m.y)<.5){m.hp-=c.damage,p=!0;break}}if(!p){for(const m of[...t.pickups])if(Math.abs(g-m.x)<.6&&Math.abs(_-m.y)<.35){this.damagePickup(m,c.damage),c.weapon==="flamethrower"&&this.ignite(m,t.frame+240,"fire",c.owner),p=!0;break}}if(!p){for(const m of t.debris)if(m.hp>0&&Math.abs(g-m.x)<m.w/2&&Math.abs(_-m.y)<m.h/2){m.hp-=c.damage,c.weapon==="flamethrower"&&this.ignite(m,t.frame+240,"fire",c.owner),m.vx+=c.vx*.1,m.settled=!1,m.groundTicks=0,p=!0;break}}p&&(c.life=0,c.x=g,c.y=_)}}for(const c of t.shots)if(c.weapon==="axe"&&c.life<=0){const h=this.floorAt(c.x,c.y+.5,-100);h>-50&&c.y>-12&&this.state.pickups.push({id:this.next(),x:c.x,y:h+.55,weapon:"axe",hp:c.durability??ir.axe})}t.shots=t.shots.filter(c=>c.life>0),this.thrownObjects(),t.boosts=t.boosts.filter(c=>c.expires>t.frame);for(const c of t.props)if(!(c.hp<=0)&&(c.supports.some(h=>{var f;return((f=t.props.find(u=>u.id===h))==null?void 0:f.hp)===0})&&(c.falling=!0),c.falling)){const h=c.y;c.vy-=Fa*Ut,c.y+=c.vy*Ut;for(const f of t.actors)f.hp>0&&!f.pendingSpawn&&!((a=c.hitActors)!=null&&a.includes(f.id))&&Math.abs(f.x-c.x)<c.w/2+.5&&f.y+Tn(f)>c.y-c.h/2&&f.y<h+c.h/2&&((c.hitActors??(c.hitActors=[])).push(f.id),this.damage(f,"torso",32,c.kind==="roof"?"canopy":"collapse"));if(c.y-c.h/2<.4){c.y=.4+c.h/2,c.falling=!1,this.damageProp(c,c.maxHp);continue}}this.toxicUrinals(),this.burning(),t.pickups=t.pickups.filter(c=>c.expires===void 0||c.expires>t.frame);for(const c of t.debris){c.life--;const h=c.y-c.h/2;if(c.settled){const d=this.floorAt(c.x,h+.05,h-.08);if(d>-50&&Math.abs(d-h)<.1)continue;c.settled=!1,c.groundTicks=0}c.vy-=Fa*Ut;const f=h;c.x+=c.vx*Ut,c.y+=c.vy*Ut,c.angle=(c.angle??0)+c.vx*.15*Ut;const u=this.floorAt(c.x,f,c.y-c.h/2);c.vy<0&&u>-50?(c.y=u+c.h/2,c.vy=Math.abs(c.vy)<1?0:c.vy*-.2,c.vx*=.85,c.groundTicks=Math.abs(c.vy)<.2&&Math.abs(c.vx)<.15?(c.groundTicks??0)+1:0,c.groundTicks>=45&&(c.settled=!0,c.vx=0,c.vy=0)):c.groundTicks=0}t.debris=t.debris.filter(c=>c.life>0&&c.hp>0&&c.y>-15);const o=t.actors.filter(c=>c.hp>0);o.length<=1&&(t.phase="results",t.phaseFrame=0,t.winner=((l=o[0])==null?void 0:l.id)??null)}}const qo={crush:{title:"The parking fee was an arm and a leg.",hint:"A red tow chain means moving wreckage. Shoot the chain or leave its path."},toxic:{title:"You should have held it.",hint:"Red-ringed urinals leak toxic gas. Leave the marked area or smash the fixture to stop it."},thrown:{title:"Someone weaponized the furniture.",hint:"Red-marked flying objects hurt. TVs also stun; gas cans leave fire."},traffic:{title:"The truck did not yield.",hint:"The red lane warning gives you two seconds. Get above or out of its path."},laser:{title:"The warranty did not cover laser surgery.",hint:"Loot lasers have two shots. Break line of sight before the second."},head_bleedout:{title:"You quit while you were a head.",hint:"Head loss gives you ten seconds before bleeding out. Your remaining aim and movement are unreliable."},bleedout:{title:"You have run out of legs. And blood.",hint:"Losing both legs starts a six-second bleed-out. Make your last shots count."},fuel_fire:{title:"Turns out you are flammable.",hint:"Fuel leaks are not a shortcut. Break the chain and leave the flames."},fire:{title:"Your outfit was not fireproof.",hint:"Burning fabric spreads fire. Find an unlit route."},canopy:{title:"The roof was not emotionally supportive.",hint:"Broken canopy posts mean incoming metal. Move away from the shadow."},collapse:{title:"Structural integrity was more of a suggestion.",hint:"Watch the supports. Loose objects land with consequences."},shotgun:{title:"You brought personal space to a shotgun fight.",hint:"Leave the pellet cone. Reloading opponents are easier company."},axe:{title:"You have been downsized.",hint:"Dodge the chop, then punish the recovery."},shank:{title:"That was a very local problem.",hint:"Stay outside the blade’s reach. Backpedal and use cover."},smg:{title:"Standing still simplified their paperwork.",hint:"Break line of sight and avoid trading sustained bursts."},blast:{title:"The explosion had a wider social circle.",hint:"Fuel containers detonate once. Make sure you are elsewhere."},fall:{title:"Gravity remains undefeated.",hint:"Floor panels can disappear. Jump to intact ground."},zone:{title:"The map asked you to leave.",hint:"Watch the yellow boundary and move before the next contraction."},body:{title:"You lost an argument with a torso.",hint:"Even unarmed opponents can body-check. Keep a little distance."}};class fg{constructor(){fe(this,"seen",new Set);try{for(const e of JSON.parse(localStorage.getItem("royale.advice")??"[]"))Object.hasOwn(qo,e)&&this.seen.add(e)}catch{}}discover(e){if(this.seen.has(e))return null;this.seen.add(e);try{localStorage.setItem("royale.advice",JSON.stringify([...this.seen]))}catch{}return qo[e]}}class dg{constructor(){fe(this,"seen",new Set)}collect(e,t){const i=e.filter(s=>s.frame<=t&&!this.seen.has(s.id));for(const s of i)this.seen.add(s.id);if(this.seen.size>6e3){const s=new Set(e.map(r=>r.id));this.seen=new Set([...this.seen].filter(r=>s.has(r)))}return i}reset(){this.seen.clear()}}function pg(n,e){if(!Number.isFinite(n)||!Number.isFinite(e))return{gain:0,pan:0};const t=Math.max(0,Math.abs(n)-.85,Math.abs(e)-.85);return{gain:1/(1+12*t+24*t*t),pan:Math.max(-.92,Math.min(.92,n*.8))}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Xc="169",mg=0,tu=1,gg=2,Yc=1,_g=2,ai=3,Ui=0,sn=1,Vt=2,Li=0,Fs=1,nu=2,iu=3,su=4,vg=5,Ji=100,xg=101,yg=102,Mg=103,Sg=104,bg=200,Eg=201,wg=202,Ag=203,Nl=204,Ul=205,Tg=206,Rg=207,Cg=208,Pg=209,Lg=210,Ig=211,Dg=212,Ng=213,Ug=214,Ol=0,Fl=1,kl=2,Gs=3,Bl=4,zl=5,Hl=6,Vl=7,Td=0,Og=1,Fg=2,Ii=0,kg=1,Bg=2,zg=3,Rd=4,Hg=5,Vg=6,Gg=7,Cd=300,Ws=301,Xs=302,Gl=303,Wl=304,da=306,Xl=1e3,ts=1001,Yl=1002,$t=1003,Wg=1004,eo=1005,Rn=1006,ka=1007,ns=1008,gi=1009,Pd=1010,Ld=1011,Nr=1012,qc=1013,as=1014,di=1015,Gr=1016,jc=1017,Kc=1018,Ys=1020,Id=35902,Dd=1021,Nd=1022,Pn=1023,Ud=1024,Od=1025,ks=1026,qs=1027,Fd=1028,$c=1029,kd=1030,Jc=1031,Zc=1033,Po=33776,Lo=33777,Io=33778,Do=33779,ql=35840,jl=35841,Kl=35842,$l=35843,Jl=36196,Zl=37492,Ql=37496,ec=37808,tc=37809,nc=37810,ic=37811,sc=37812,rc=37813,oc=37814,ac=37815,lc=37816,cc=37817,hc=37818,uc=37819,fc=37820,dc=37821,No=36492,pc=36494,mc=36495,Bd=36283,gc=36284,_c=36285,vc=36286,Xg=3200,Yg=3201,zd=0,qg=1,Ri="",nn="srgb",Fi="srgb-linear",Qc="display-p3",pa="display-p3-linear",jo="linear",gt="srgb",Ko="rec709",$o="p3",ms=7680,ru=519,jg=512,Kg=513,$g=514,Hd=515,Jg=516,Zg=517,Qg=518,e_=519,ou=35044,Ba=35048,au="300 es",pi=2e3,Jo=2001;class Js{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],za=Math.PI/180,xc=180/Math.PI;function Zs(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(kt[n&255]+kt[n>>8&255]+kt[n>>16&255]+kt[n>>24&255]+"-"+kt[e&255]+kt[e>>8&255]+"-"+kt[e>>16&15|64]+kt[e>>24&255]+"-"+kt[t&63|128]+kt[t>>8&255]+"-"+kt[t>>16&255]+kt[t>>24&255]+kt[i&255]+kt[i>>8&255]+kt[i>>16&255]+kt[i>>24&255]).toLowerCase()}function Ht(n,e,t){return Math.max(e,Math.min(t,n))}function t_(n,e){return(n%e+e)%e}function Ha(n,e,t){return(1-t)*n+t*e}function sr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function en(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Re{constructor(e=0,t=0){Re.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ht(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ke{constructor(e,t,i,s,r,o,a,l,c){Ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],f=i[7],u=i[2],d=i[5],g=i[8],_=s[0],p=s[3],m=s[6],M=s[1],v=s[4],E=s[7],U=s[2],R=s[5],P=s[8];return r[0]=o*_+a*M+l*U,r[3]=o*p+a*v+l*R,r[6]=o*m+a*E+l*P,r[1]=c*_+h*M+f*U,r[4]=c*p+h*v+f*R,r[7]=c*m+h*E+f*P,r[2]=u*_+d*M+g*U,r[5]=u*p+d*v+g*R,r[8]=u*m+d*E+g*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=h*o-a*c,u=a*l-h*r,d=c*r-o*l,g=t*f+i*u+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(s*c-h*i)*_,e[2]=(a*i-s*o)*_,e[3]=u*_,e[4]=(h*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=d*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Va.makeScale(e,t)),this}rotate(e){return this.premultiply(Va.makeRotation(-e)),this}translate(e,t){return this.premultiply(Va.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Va=new Ke;function Vd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Zo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function n_(){const n=Zo("canvas");return n.style.display="block",n}const lu={};function Uo(n){n in lu||(lu[n]=!0,console.warn(n))}function i_(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function s_(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function r_(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const cu=new Ke().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),hu=new Ke().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),rr={[Fi]:{transfer:jo,primaries:Ko,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[nn]:{transfer:gt,primaries:Ko,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[pa]:{transfer:jo,primaries:$o,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(hu),fromReference:n=>n.applyMatrix3(cu)},[Qc]:{transfer:gt,primaries:$o,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(hu),fromReference:n=>n.applyMatrix3(cu).convertLinearToSRGB()}},o_=new Set([Fi,pa]),ot={enabled:!0,_workingColorSpace:Fi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!o_.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=rr[e].toReference,s=rr[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return rr[n].primaries},getTransfer:function(n){return n===Ri?jo:rr[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(rr[e].luminanceCoefficients)}};function Bs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ga(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let gs;class a_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{gs===void 0&&(gs=Zo("canvas")),gs.width=e.width,gs.height=e.height;const i=gs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=gs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Zo("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Bs(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Bs(t[i]/255)*255):t[i]=Bs(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let l_=0;class Gd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:l_++}),this.uuid=Zs(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Wa(s[o].image)):r.push(Wa(s[o]))}else r=Wa(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Wa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?a_.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let c_=0;class Jt extends Js{constructor(e=Jt.DEFAULT_IMAGE,t=Jt.DEFAULT_MAPPING,i=ts,s=ts,r=Rn,o=ns,a=Pn,l=gi,c=Jt.DEFAULT_ANISOTROPY,h=Ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:c_++}),this.uuid=Zs(),this.name="",this.source=new Gd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Re(0,0),this.repeat=new Re(1,1),this.center=new Re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Cd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xl:e.x=e.x-Math.floor(e.x);break;case ts:e.x=e.x<0?0:1;break;case Yl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xl:e.y=e.y-Math.floor(e.y);break;case ts:e.y=e.y<0?0:1;break;case Yl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Jt.DEFAULT_IMAGE=null;Jt.DEFAULT_MAPPING=Cd;Jt.DEFAULT_ANISOTROPY=1;class ct{constructor(e=0,t=0,i=0,s=1){ct.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,E=(d+1)/2,U=(m+1)/2,R=(h+u)/4,P=(f+_)/4,D=(g+p)/4;return v>E&&v>U?v<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(v),s=R/i,r=P/i):E>U?E<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),i=R/s,r=D/s):U<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(U),i=P/r,s=D/r),this.set(i,s,r,t),this}let M=Math.sqrt((p-g)*(p-g)+(f-_)*(f-_)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(p-g)/M,this.y=(f-_)/M,this.z=(u-h)/M,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class h_ extends Js{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ct(0,0,e,t),this.scissorTest=!1,this.viewport=new ct(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new Jt(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Gd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ls extends h_{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Wd extends Jt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=$t,this.minFilter=$t,this.wrapR=ts,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class u_ extends Jt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=$t,this.minFilter=$t,this.wrapR=ts,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wr{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],f=i[s+3];const u=r[o+0],d=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f;return}if(a===1){e[t+0]=u,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(f!==_||l!==u||c!==d||h!==g){let p=1-a;const m=l*u+c*d+h*g+f*_,M=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){const U=Math.sqrt(v),R=Math.atan2(U,m*M);p=Math.sin(p*R)/U,a=Math.sin(a*R)/U}const E=a*M;if(l=l*p+u*E,c=c*p+d*E,h=h*p+g*E,f=f*p+_*E,p===1-a){const U=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=U,c*=U,h*=U,f*=U}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],f=r[o],u=r[o+1],d=r[o+2],g=r[o+3];return e[t]=a*g+h*f+l*d-c*u,e[t+1]=l*g+h*u+c*f-a*d,e[t+2]=c*g+h*d+a*u-l*f,e[t+3]=h*g-a*f-l*u-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),f=a(r/2),u=l(i/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=u*h*f+c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f-u*d*g;break;case"YXZ":this._x=u*h*f+c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f+u*d*g;break;case"ZXY":this._x=u*h*f-c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f-u*d*g;break;case"ZYX":this._x=u*h*f-c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f+u*d*g;break;case"YZX":this._x=u*h*f+c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f-u*d*g;break;case"XZY":this._x=u*h*f-c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f+u*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],f=t[10],u=i+a+f;if(u>0){const d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(i>a&&i>f){const d=2*Math.sqrt(1+i-a-f);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-i-f);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+f-i-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ht(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*i+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),f=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=o*f+this._w*u,this._x=i*f+this._x*u,this._y=s*f+this._y*u,this._z=r*f+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,i=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(uu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(uu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),f=2*(r*i-o*t);return this.x=t+l*c+o*f-a*h,this.y=i+l*h+a*c-r*f,this.z=s+l*f+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Xa.copy(this).projectOnVector(e),this.sub(Xa)}reflect(e){return this.sub(Xa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ht(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xa=new N,uu=new Wr;class Xr{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(bn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(bn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=bn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,bn):bn.fromBufferAttribute(r,o),bn.applyMatrix4(e.matrixWorld),this.expandByPoint(bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),to.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),to.copy(i.boundingBox)),to.applyMatrix4(e.matrixWorld),this.union(to)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,bn),bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(or),no.subVectors(this.max,or),_s.subVectors(e.a,or),vs.subVectors(e.b,or),xs.subVectors(e.c,or),xi.subVectors(vs,_s),yi.subVectors(xs,vs),Hi.subVectors(_s,xs);let t=[0,-xi.z,xi.y,0,-yi.z,yi.y,0,-Hi.z,Hi.y,xi.z,0,-xi.x,yi.z,0,-yi.x,Hi.z,0,-Hi.x,-xi.y,xi.x,0,-yi.y,yi.x,0,-Hi.y,Hi.x,0];return!Ya(t,_s,vs,xs,no)||(t=[1,0,0,0,1,0,0,0,1],!Ya(t,_s,vs,xs,no))?!1:(io.crossVectors(xi,yi),t=[io.x,io.y,io.z],Ya(t,_s,vs,xs,no))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ni),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ni=[new N,new N,new N,new N,new N,new N,new N,new N],bn=new N,to=new Xr,_s=new N,vs=new N,xs=new N,xi=new N,yi=new N,Hi=new N,or=new N,no=new N,io=new N,Vi=new N;function Ya(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Vi.fromArray(n,r);const a=s.x*Math.abs(Vi.x)+s.y*Math.abs(Vi.y)+s.z*Math.abs(Vi.z),l=e.dot(Vi),c=t.dot(Vi),h=i.dot(Vi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const f_=new Xr,ar=new N,qa=new N;class ma{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):f_.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ar.subVectors(e,this.center);const t=ar.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(ar,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ar.copy(e.center).add(qa)),this.expandByPoint(ar.copy(e.center).sub(qa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ii=new N,ja=new N,so=new N,Mi=new N,Ka=new N,ro=new N,$a=new N;class eh{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ii)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ii.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ii.copy(this.origin).addScaledVector(this.direction,t),ii.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){ja.copy(e).add(t).multiplyScalar(.5),so.copy(t).sub(e).normalize(),Mi.copy(this.origin).sub(ja);const r=e.distanceTo(t)*.5,o=-this.direction.dot(so),a=Mi.dot(this.direction),l=-Mi.dot(so),c=Mi.lengthSq(),h=Math.abs(1-o*o);let f,u,d,g;if(h>0)if(f=o*l-a,u=o*a-l,g=r*h,f>=0)if(u>=-g)if(u<=g){const _=1/h;f*=_,u*=_,d=f*(f+o*u+2*a)+u*(o*f+u+2*l)+c}else u=r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;else u<=-g?(f=Math.max(0,-(-o*r+a)),u=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c):u<=g?(f=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(f=Math.max(0,-(o*r+a)),u=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c);else u=o>0?-r:r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(ja).addScaledVector(so,u),d}intersectSphere(e,t){ii.subVectors(e.center,this.origin);const i=ii.dot(this.direction),s=ii.dot(ii)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-u.z)*f,l=(e.max.z-u.z)*f):(a=(e.max.z-u.z)*f,l=(e.min.z-u.z)*f),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,ii)!==null}intersectTriangle(e,t,i,s,r){Ka.subVectors(t,e),ro.subVectors(i,e),$a.crossVectors(Ka,ro);let o=this.direction.dot($a),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Mi.subVectors(this.origin,e);const l=a*this.direction.dot(ro.crossVectors(Mi,ro));if(l<0)return null;const c=a*this.direction.dot(Ka.cross(Mi));if(c<0||l+c>o)return null;const h=-a*Mi.dot($a);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class dt{constructor(e,t,i,s,r,o,a,l,c,h,f,u,d,g,_,p){dt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,f,u,d,g,_,p)}set(e,t,i,s,r,o,a,l,c,h,f,u,d,g,_,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=f,m[14]=u,m[3]=d,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new dt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/ys.setFromMatrixColumn(e,0).length(),r=1/ys.setFromMatrixColumn(e,1).length(),o=1/ys.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const u=o*h,d=o*f,g=a*h,_=a*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=d+g*c,t[5]=u-_*c,t[9]=-a*l,t[2]=_-u*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const u=l*h,d=l*f,g=c*h,_=c*f;t[0]=u+_*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*f,t[5]=o*h,t[9]=-a,t[2]=d*a-g,t[6]=_+u*a,t[10]=o*l}else if(e.order==="ZXY"){const u=l*h,d=l*f,g=c*h,_=c*f;t[0]=u-_*a,t[4]=-o*f,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*h,t[9]=_-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const u=o*h,d=o*f,g=a*h,_=a*f;t[0]=l*h,t[4]=g*c-d,t[8]=u*c+_,t[1]=l*f,t[5]=_*c+u,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const u=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=_-u*f,t[8]=g*f+d,t[1]=f,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=d*f+g,t[10]=u-_*f}else if(e.order==="XZY"){const u=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=u*f+_,t[5]=o*h,t[9]=d*f-g,t[2]=g*f-d,t[6]=a*h,t[10]=_*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(d_,e,p_)}lookAt(e,t,i){const s=this.elements;return an.subVectors(e,t),an.lengthSq()===0&&(an.z=1),an.normalize(),Si.crossVectors(i,an),Si.lengthSq()===0&&(Math.abs(i.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),Si.crossVectors(i,an)),Si.normalize(),oo.crossVectors(an,Si),s[0]=Si.x,s[4]=oo.x,s[8]=an.x,s[1]=Si.y,s[5]=oo.y,s[9]=an.y,s[2]=Si.z,s[6]=oo.z,s[10]=an.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],f=i[5],u=i[9],d=i[13],g=i[2],_=i[6],p=i[10],m=i[14],M=i[3],v=i[7],E=i[11],U=i[15],R=s[0],P=s[4],D=s[8],Z=s[12],x=s[1],w=s[5],z=s[9],W=s[13],$=s[2],ae=s[6],V=s[10],se=s[14],G=s[3],_e=s[7],Me=s[11],we=s[15];return r[0]=o*R+a*x+l*$+c*G,r[4]=o*P+a*w+l*ae+c*_e,r[8]=o*D+a*z+l*V+c*Me,r[12]=o*Z+a*W+l*se+c*we,r[1]=h*R+f*x+u*$+d*G,r[5]=h*P+f*w+u*ae+d*_e,r[9]=h*D+f*z+u*V+d*Me,r[13]=h*Z+f*W+u*se+d*we,r[2]=g*R+_*x+p*$+m*G,r[6]=g*P+_*w+p*ae+m*_e,r[10]=g*D+_*z+p*V+m*Me,r[14]=g*Z+_*W+p*se+m*we,r[3]=M*R+v*x+E*$+U*G,r[7]=M*P+v*w+E*ae+U*_e,r[11]=M*D+v*z+E*V+U*Me,r[15]=M*Z+v*W+E*se+U*we,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],f=e[6],u=e[10],d=e[14],g=e[3],_=e[7],p=e[11],m=e[15];return g*(+r*l*f-s*c*f-r*a*u+i*c*u+s*a*d-i*l*d)+_*(+t*l*d-t*c*u+r*o*u-s*o*d+s*c*h-r*l*h)+p*(+t*c*f-t*a*d-r*o*f+i*o*d+r*a*h-i*c*h)+m*(-s*a*h-t*l*f+t*a*u+s*o*f-i*o*u+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=e[9],u=e[10],d=e[11],g=e[12],_=e[13],p=e[14],m=e[15],M=f*p*c-_*u*c+_*l*d-a*p*d-f*l*m+a*u*m,v=g*u*c-h*p*c-g*l*d+o*p*d+h*l*m-o*u*m,E=h*_*c-g*f*c+g*a*d-o*_*d-h*a*m+o*f*m,U=g*f*l-h*_*l-g*a*u+o*_*u+h*a*p-o*f*p,R=t*M+i*v+s*E+r*U;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/R;return e[0]=M*P,e[1]=(_*u*r-f*p*r-_*s*d+i*p*d+f*s*m-i*u*m)*P,e[2]=(a*p*r-_*l*r+_*s*c-i*p*c-a*s*m+i*l*m)*P,e[3]=(f*l*r-a*u*r-f*s*c+i*u*c+a*s*d-i*l*d)*P,e[4]=v*P,e[5]=(h*p*r-g*u*r+g*s*d-t*p*d-h*s*m+t*u*m)*P,e[6]=(g*l*r-o*p*r-g*s*c+t*p*c+o*s*m-t*l*m)*P,e[7]=(o*u*r-h*l*r+h*s*c-t*u*c-o*s*d+t*l*d)*P,e[8]=E*P,e[9]=(g*f*r-h*_*r-g*i*d+t*_*d+h*i*m-t*f*m)*P,e[10]=(o*_*r-g*a*r+g*i*c-t*_*c-o*i*m+t*a*m)*P,e[11]=(h*a*r-o*f*r-h*i*c+t*f*c+o*i*d-t*a*d)*P,e[12]=U*P,e[13]=(h*_*s-g*f*s+g*i*u-t*_*u-h*i*p+t*f*p)*P,e[14]=(g*a*s-o*_*s-g*i*l+t*_*l+o*i*p-t*a*p)*P,e[15]=(o*f*s-h*a*s+h*i*l-t*f*l-o*i*u+t*a*u)*P,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,f=a+a,u=r*c,d=r*h,g=r*f,_=o*h,p=o*f,m=a*f,M=l*c,v=l*h,E=l*f,U=i.x,R=i.y,P=i.z;return s[0]=(1-(_+m))*U,s[1]=(d+E)*U,s[2]=(g-v)*U,s[3]=0,s[4]=(d-E)*R,s[5]=(1-(u+m))*R,s[6]=(p+M)*R,s[7]=0,s[8]=(g+v)*P,s[9]=(p-M)*P,s[10]=(1-(u+_))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=ys.set(s[0],s[1],s[2]).length();const o=ys.set(s[4],s[5],s[6]).length(),a=ys.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],En.copy(this);const c=1/r,h=1/o,f=1/a;return En.elements[0]*=c,En.elements[1]*=c,En.elements[2]*=c,En.elements[4]*=h,En.elements[5]*=h,En.elements[6]*=h,En.elements[8]*=f,En.elements[9]*=f,En.elements[10]*=f,t.setFromRotationMatrix(En),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=pi){const l=this.elements,c=2*r/(t-e),h=2*r/(i-s),f=(t+e)/(t-e),u=(i+s)/(i-s);let d,g;if(a===pi)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Jo)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=pi){const l=this.elements,c=1/(t-e),h=1/(i-s),f=1/(o-r),u=(t+e)*c,d=(i+s)*h;let g,_;if(a===pi)g=(o+r)*f,_=-2*f;else if(a===Jo)g=r*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ys=new N,En=new dt,d_=new N(0,0,0),p_=new N(1,1,1),Si=new N,oo=new N,an=new N,fu=new dt,du=new Wr;class Jn{constructor(e=0,t=0,i=0,s=Jn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(Ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ht(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ht(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ht(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ht(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return fu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return du.setFromEuler(this),this.setFromQuaternion(du,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Jn.DEFAULT_ORDER="XYZ";class th{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let m_=0;const pu=new N,Ms=new Wr,si=new dt,ao=new N,lr=new N,g_=new N,__=new Wr,mu=new N(1,0,0),gu=new N(0,1,0),_u=new N(0,0,1),vu={type:"added"},v_={type:"removed"},Ss={type:"childadded",child:null},Ja={type:"childremoved",child:null};class Dt extends Js{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:m_++}),this.uuid=Zs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dt.DEFAULT_UP.clone();const e=new N,t=new Jn,i=new Wr,s=new N(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new dt},normalMatrix:{value:new Ke}}),this.matrix=new dt,this.matrixWorld=new dt,this.matrixAutoUpdate=Dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new th,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ms.setFromAxisAngle(e,t),this.quaternion.multiply(Ms),this}rotateOnWorldAxis(e,t){return Ms.setFromAxisAngle(e,t),this.quaternion.premultiply(Ms),this}rotateX(e){return this.rotateOnAxis(mu,e)}rotateY(e){return this.rotateOnAxis(gu,e)}rotateZ(e){return this.rotateOnAxis(_u,e)}translateOnAxis(e,t){return pu.copy(e).applyQuaternion(this.quaternion),this.position.add(pu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(mu,e)}translateY(e){return this.translateOnAxis(gu,e)}translateZ(e){return this.translateOnAxis(_u,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(si.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ao.copy(e):ao.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),lr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?si.lookAt(lr,ao,this.up):si.lookAt(ao,lr,this.up),this.quaternion.setFromRotationMatrix(si),s&&(si.extractRotation(s.matrixWorld),Ms.setFromRotationMatrix(si),this.quaternion.premultiply(Ms.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(vu),Ss.child=e,this.dispatchEvent(Ss),Ss.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(v_),Ja.child=e,this.dispatchEvent(Ja),Ja.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),si.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),si.multiply(e.parent.matrixWorld)),e.applyMatrix4(si),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(vu),Ss.child=e,this.dispatchEvent(Ss),Ss.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lr,e,g_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lr,__,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),f=o(e.shapes),u=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),u.length>0&&(i.skeletons=u),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Dt.DEFAULT_UP=new N(0,1,0);Dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const wn=new N,ri=new N,Za=new N,oi=new N,bs=new N,Es=new N,xu=new N,Qa=new N,el=new N,tl=new N,nl=new ct,il=new ct,sl=new ct;class Cn{constructor(e=new N,t=new N,i=new N){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),wn.subVectors(e,t),s.cross(wn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){wn.subVectors(s,t),ri.subVectors(i,t),Za.subVectors(e,t);const o=wn.dot(wn),a=wn.dot(ri),l=wn.dot(Za),c=ri.dot(ri),h=ri.dot(Za),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;const u=1/f,d=(c*l-a*h)*u,g=(o*h-a*l)*u;return r.set(1-d-g,g,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,oi)===null?!1:oi.x>=0&&oi.y>=0&&oi.x+oi.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,oi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,oi.x),l.addScaledVector(o,oi.y),l.addScaledVector(a,oi.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return nl.setScalar(0),il.setScalar(0),sl.setScalar(0),nl.fromBufferAttribute(e,t),il.fromBufferAttribute(e,i),sl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(nl,r.x),o.addScaledVector(il,r.y),o.addScaledVector(sl,r.z),o}static isFrontFacing(e,t,i,s){return wn.subVectors(i,t),ri.subVectors(e,t),wn.cross(ri).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wn.subVectors(this.c,this.b),ri.subVectors(this.a,this.b),wn.cross(ri).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Cn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Cn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Cn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Cn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Cn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;bs.subVectors(s,i),Es.subVectors(r,i),Qa.subVectors(e,i);const l=bs.dot(Qa),c=Es.dot(Qa);if(l<=0&&c<=0)return t.copy(i);el.subVectors(e,s);const h=bs.dot(el),f=Es.dot(el);if(h>=0&&f<=h)return t.copy(s);const u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(bs,o);tl.subVectors(e,r);const d=bs.dot(tl),g=Es.dot(tl);if(g>=0&&d<=g)return t.copy(r);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Es,a);const p=h*g-d*f;if(p<=0&&f-h>=0&&d-g>=0)return xu.subVectors(r,s),a=(f-h)/(f-h+(d-g)),t.copy(s).addScaledVector(xu,a);const m=1/(p+_+u);return o=_*m,a=u*m,t.copy(i).addScaledVector(bs,o).addScaledVector(Es,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Xd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bi={h:0,s:0,l:0},lo={h:0,s:0,l:0};function rl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class $e{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=nn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=ot.workingColorSpace){return this.r=e,this.g=t,this.b=i,ot.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=ot.workingColorSpace){if(e=t_(e,1),t=Ht(t,0,1),i=Ht(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=rl(o,r,e+1/3),this.g=rl(o,r,e),this.b=rl(o,r,e-1/3)}return ot.toWorkingColorSpace(this,s),this}setStyle(e,t=nn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=nn){const i=Xd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Bs(e.r),this.g=Bs(e.g),this.b=Bs(e.b),this}copyLinearToSRGB(e){return this.r=Ga(e.r),this.g=Ga(e.g),this.b=Ga(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=nn){return ot.fromWorkingColorSpace(Bt.copy(this),e),Math.round(Ht(Bt.r*255,0,255))*65536+Math.round(Ht(Bt.g*255,0,255))*256+Math.round(Ht(Bt.b*255,0,255))}getHexString(e=nn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ot.workingColorSpace){ot.fromWorkingColorSpace(Bt.copy(this),t);const i=Bt.r,s=Bt.g,r=Bt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ot.workingColorSpace){return ot.fromWorkingColorSpace(Bt.copy(this),t),e.r=Bt.r,e.g=Bt.g,e.b=Bt.b,e}getStyle(e=nn){ot.fromWorkingColorSpace(Bt.copy(this),e);const t=Bt.r,i=Bt.g,s=Bt.b;return e!==nn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(bi),this.setHSL(bi.h+e,bi.s+t,bi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(bi),e.getHSL(lo);const i=Ha(bi.h,lo.h,t),s=Ha(bi.s,lo.s,t),r=Ha(bi.l,lo.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bt=new $e;$e.NAMES=Xd;let x_=0;class us extends Js{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:x_++}),this.uuid=Zs(),this.name="",this.type="Material",this.blending=Fs,this.side=Ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nl,this.blendDst=Ul,this.blendEquation=Ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=Gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ru,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ms,this.stencilZFail=ms,this.stencilZPass=ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Fs&&(i.blending=this.blending),this.side!==Ui&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Nl&&(i.blendSrc=this.blendSrc),this.blendDst!==Ul&&(i.blendDst=this.blendDst),this.blendEquation!==Ji&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Gs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ru&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ms&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ms&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ms&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ft extends us{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.combine=Td,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Tt=new N,co=new Re;class fn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ou,this.updateRanges=[],this.gpuType=di,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)co.fromBufferAttribute(this,t),co.applyMatrix3(e),this.setXY(t,co.x,co.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix3(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=sr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=en(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=sr(t,this.array)),t}setX(e,t){return this.normalized&&(t=en(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=sr(t,this.array)),t}setY(e,t){return this.normalized&&(t=en(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=sr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=en(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=sr(t,this.array)),t}setW(e,t){return this.normalized&&(t=en(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=en(t,this.array),i=en(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=en(t,this.array),i=en(i,this.array),s=en(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=en(t,this.array),i=en(i,this.array),s=en(s,this.array),r=en(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ou&&(e.usage=this.usage),e}}class Yd extends fn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class qd extends fn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class _t extends fn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let y_=0;const mn=new dt,ol=new Dt,ws=new N,ln=new Xr,cr=new Xr,It=new N;class Wt extends Js{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:y_++}),this.uuid=Zs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Vd(e)?qd:Yd)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ke().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return mn.makeRotationFromQuaternion(e),this.applyMatrix4(mn),this}rotateX(e){return mn.makeRotationX(e),this.applyMatrix4(mn),this}rotateY(e){return mn.makeRotationY(e),this.applyMatrix4(mn),this}rotateZ(e){return mn.makeRotationZ(e),this.applyMatrix4(mn),this}translate(e,t,i){return mn.makeTranslation(e,t,i),this.applyMatrix4(mn),this}scale(e,t,i){return mn.makeScale(e,t,i),this.applyMatrix4(mn),this}lookAt(e){return ol.lookAt(e),ol.updateMatrix(),this.applyMatrix4(ol.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ws).negate(),this.translate(ws.x,ws.y,ws.z),this}setFromPoints(e){const t=[];for(let i=0,s=e.length;i<s;i++){const r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new _t(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];ln.setFromBufferAttribute(r),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ma);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const i=this.boundingSphere.center;if(ln.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];cr.setFromBufferAttribute(a),this.morphTargetsRelative?(It.addVectors(ln.min,cr.min),ln.expandByPoint(It),It.addVectors(ln.max,cr.max),ln.expandByPoint(It)):(ln.expandByPoint(cr.min),ln.expandByPoint(cr.max))}ln.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)It.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(It));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)It.fromBufferAttribute(a,c),l&&(ws.fromBufferAttribute(e,c),It.add(ws)),s=Math.max(s,i.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<i.count;D++)a[D]=new N,l[D]=new N;const c=new N,h=new N,f=new N,u=new Re,d=new Re,g=new Re,_=new N,p=new N;function m(D,Z,x){c.fromBufferAttribute(i,D),h.fromBufferAttribute(i,Z),f.fromBufferAttribute(i,x),u.fromBufferAttribute(r,D),d.fromBufferAttribute(r,Z),g.fromBufferAttribute(r,x),h.sub(c),f.sub(c),d.sub(u),g.sub(u);const w=1/(d.x*g.y-g.x*d.y);isFinite(w)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(w),p.copy(f).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(w),a[D].add(_),a[Z].add(_),a[x].add(_),l[D].add(p),l[Z].add(p),l[x].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let D=0,Z=M.length;D<Z;++D){const x=M[D],w=x.start,z=x.count;for(let W=w,$=w+z;W<$;W+=3)m(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const v=new N,E=new N,U=new N,R=new N;function P(D){U.fromBufferAttribute(s,D),R.copy(U);const Z=a[D];v.copy(Z),v.sub(U.multiplyScalar(U.dot(Z))).normalize(),E.crossVectors(R,Z);const w=E.dot(l[D])<0?-1:1;o.setXYZW(D,v.x,v.y,v.z,w)}for(let D=0,Z=M.length;D<Z;++D){const x=M[D],w=x.start,z=x.count;for(let W=w,$=w+z;W<$;W+=3)P(e.getX(W+0)),P(e.getX(W+1)),P(e.getX(W+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new fn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,d=i.count;u<d;u++)i.setXYZ(u,0,0,0);const s=new N,r=new N,o=new N,a=new N,l=new N,c=new N,h=new N,f=new N;if(e)for(let u=0,d=e.count;u<d;u+=3){const g=e.getX(u+0),_=e.getX(u+1),p=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,p),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,d=t.count;u<d;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)It.fromBufferAttribute(e,t),It.normalize(),e.setXYZ(t,It.x,It.y,It.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,f=a.normalized,u=new c.constructor(l.length*h);let d=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*h;for(let m=0;m<h;m++)u[g++]=c[d++]}return new fn(u,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Wt,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,f=c.length;h<f;h++){const u=c[h],d=e(u,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){const d=c[f];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],f=r[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const yu=new dt,Gi=new eh,ho=new ma,Mu=new N,uo=new N,fo=new N,po=new N,al=new N,mo=new N,Su=new N,go=new N;class Je extends Dt{constructor(e=new Wt,t=new Ft){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){mo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],f=r[l];h!==0&&(al.fromBufferAttribute(f,e),o?mo.addScaledVector(al,h):mo.addScaledVector(al.sub(t),h))}t.add(mo)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ho.copy(i.boundingSphere),ho.applyMatrix4(r),Gi.copy(e.ray).recast(e.near),!(ho.containsPoint(Gi.origin)===!1&&(Gi.intersectSphere(ho,Mu)===null||Gi.origin.distanceToSquared(Mu)>(e.far-e.near)**2))&&(yu.copy(r).invert(),Gi.copy(e.ray).applyMatrix4(yu),!(i.boundingBox!==null&&Gi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Gi)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){const p=u[g],m=o[p.materialIndex],M=Math.max(p.start,d.start),v=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let E=M,U=v;E<U;E+=3){const R=a.getX(E),P=a.getX(E+1),D=a.getX(E+2);s=_o(this,m,e,i,c,h,f,R,P,D),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){const M=a.getX(p),v=a.getX(p+1),E=a.getX(p+2);s=_o(this,o,e,i,c,h,f,M,v,E),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){const p=u[g],m=o[p.materialIndex],M=Math.max(p.start,d.start),v=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let E=M,U=v;E<U;E+=3){const R=E,P=E+1,D=E+2;s=_o(this,m,e,i,c,h,f,R,P,D),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){const M=p,v=p+1,E=p+2;s=_o(this,o,e,i,c,h,f,M,v,E),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function M_(n,e,t,i,s,r,o,a){let l;if(e.side===sn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Ui,a),l===null)return null;go.copy(a),go.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(go);return c<t.near||c>t.far?null:{distance:c,point:go.clone(),object:n}}function _o(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,uo),n.getVertexPosition(l,fo),n.getVertexPosition(c,po);const h=M_(n,e,t,i,uo,fo,po,Su);if(h){const f=new N;Cn.getBarycoord(Su,uo,fo,po,f),s&&(h.uv=Cn.getInterpolatedAttribute(s,a,l,c,f,new Re)),r&&(h.uv1=Cn.getInterpolatedAttribute(r,a,l,c,f,new Re)),o&&(h.normal=Cn.getInterpolatedAttribute(o,a,l,c,f,new N),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new N,materialIndex:0};Cn.getNormal(uo,fo,po,u.normal),h.face=u,h.barycoord=f}return h}class Dn extends Wt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],f=[];let u=0,d=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new _t(c,3)),this.setAttribute("normal",new _t(h,3)),this.setAttribute("uv",new _t(f,2));function g(_,p,m,M,v,E,U,R,P,D,Z){const x=E/P,w=U/D,z=E/2,W=U/2,$=R/2,ae=P+1,V=D+1;let se=0,G=0;const _e=new N;for(let Me=0;Me<V;Me++){const we=Me*w-W;for(let We=0;We<ae;We++){const Ze=We*x-z;_e[_]=Ze*M,_e[p]=we*v,_e[m]=$,c.push(_e.x,_e.y,_e.z),_e[_]=0,_e[p]=0,_e[m]=R>0?1:-1,h.push(_e.x,_e.y,_e.z),f.push(We/P),f.push(1-Me/D),se+=1}}for(let Me=0;Me<D;Me++)for(let we=0;we<P;we++){const We=u+we+ae*Me,Ze=u+we+ae*(Me+1),ie=u+(we+1)+ae*(Me+1),he=u+(we+1)+ae*Me;l.push(We,Ze,he),l.push(Ze,ie,he),G+=6}a.addGroup(d,G,Z),d+=G,u+=se}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function js(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function qt(n){const e={};for(let t=0;t<n.length;t++){const i=js(n[t]);for(const s in i)e[s]=i[s]}return e}function S_(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function jd(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}const b_={clone:js,merge:qt};var E_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,w_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Oi extends us{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=E_,this.fragmentShader=w_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=js(e.uniforms),this.uniformsGroups=S_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Kd extends Dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dt,this.projectionMatrix=new dt,this.projectionMatrixInverse=new dt,this.coordinateSystem=pi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ei=new N,bu=new Re,Eu=new Re;class _n extends Kd{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=xc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(za*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return xc*2*Math.atan(Math.tan(za*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ei.x,Ei.y).multiplyScalar(-e/Ei.z),Ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ei.x,Ei.y).multiplyScalar(-e/Ei.z)}getViewSize(e,t){return this.getViewBounds(e,bu,Eu),t.subVectors(Eu,bu)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(za*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const As=-90,Ts=1;class A_ extends Dt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new _n(As,Ts,e,t);s.layers=this.layers,this.add(s);const r=new _n(As,Ts,e,t);r.layers=this.layers,this.add(r);const o=new _n(As,Ts,e,t);o.layers=this.layers,this.add(o);const a=new _n(As,Ts,e,t);a.layers=this.layers,this.add(a);const l=new _n(As,Ts,e,t);l.layers=this.layers,this.add(l);const c=new _n(As,Ts,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===pi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Jo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(f,u,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class $d extends Jt{constructor(e,t,i,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Ws,super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class T_ extends ls{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new $d(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Rn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Dn(5,5,5),r=new Oi({name:"CubemapFromEquirect",uniforms:js(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:sn,blending:Li});r.uniforms.tEquirect.value=t;const o=new Je(s,r),a=t.minFilter;return t.minFilter===ns&&(t.minFilter=Rn),new A_(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}const ll=new N,R_=new N,C_=new Ke;class Ai{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=ll.subVectors(i,t).cross(R_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(ll),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||C_.getNormalMatrix(e),s=this.coplanarPoint(ll).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Wi=new ma,vo=new N;class nh{constructor(e=new Ai,t=new Ai,i=new Ai,s=new Ai,r=new Ai,o=new Ai){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=pi){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],f=s[6],u=s[7],d=s[8],g=s[9],_=s[10],p=s[11],m=s[12],M=s[13],v=s[14],E=s[15];if(i[0].setComponents(l-r,u-c,p-d,E-m).normalize(),i[1].setComponents(l+r,u+c,p+d,E+m).normalize(),i[2].setComponents(l+o,u+h,p+g,E+M).normalize(),i[3].setComponents(l-o,u-h,p-g,E-M).normalize(),i[4].setComponents(l-a,u-f,p-_,E-v).normalize(),t===pi)i[5].setComponents(l+a,u+f,p+_,E+v).normalize();else if(t===Jo)i[5].setComponents(a,f,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Wi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Wi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Wi)}intersectsSprite(e){return Wi.center.set(0,0,0),Wi.radius=.7071067811865476,Wi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Wi)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(vo.x=s.normal.x>0?e.max.x:e.min.x,vo.y=s.normal.y>0?e.max.y:e.min.y,vo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(vo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Jd(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function P_(n){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,f=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const h=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,h);else{f.sort((d,g)=>d.start-g.start);let u=0;for(let d=1;d<f.length;d++){const g=f[u],_=f[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,f[u]=_)}f.length=u+1;for(let d=0,g=f.length;d<g;d++){const _=f[d];n.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class fs extends Wt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,f=e/a,u=t/l,d=[],g=[],_=[],p=[];for(let m=0;m<h;m++){const M=m*u-o;for(let v=0;v<c;v++){const E=v*f-r;g.push(E,-M,0),_.push(0,0,1),p.push(v/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<a;M++){const v=M+c*m,E=M+c*(m+1),U=M+1+c*(m+1),R=M+1+c*m;d.push(v,E,R),d.push(E,U,R)}this.setIndex(d),this.setAttribute("position",new _t(g,3)),this.setAttribute("normal",new _t(_,3)),this.setAttribute("uv",new _t(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fs(e.width,e.height,e.widthSegments,e.heightSegments)}}var L_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,I_=`#ifdef USE_ALPHAHASH
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
#endif`,D_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,N_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,U_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,O_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,F_=`#ifdef USE_AOMAP
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
#endif`,k_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,B_=`#ifdef USE_BATCHING
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
#endif`,z_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,H_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,V_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,G_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,W_=`#ifdef USE_IRIDESCENCE
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
#endif`,X_=`#ifdef USE_BUMPMAP
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
#endif`,Y_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,q_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,j_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,K_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,J_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Z_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Q_=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ev=`#define PI 3.141592653589793
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
} // validated`,tv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,nv=`vec3 transformedNormal = objectNormal;
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
#endif`,iv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ov=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,av="gl_FragColor = linearToOutputTexel( gl_FragColor );",lv=`
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
}`,cv=`#ifdef USE_ENVMAP
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
#endif`,hv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,uv=`#ifdef USE_ENVMAP
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
#endif`,fv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dv=`#ifdef USE_ENVMAP
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
#endif`,pv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_v=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vv=`#ifdef USE_GRADIENTMAP
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
}`,xv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Mv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Sv=`uniform bool receiveShadow;
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
#endif`,bv=`#ifdef USE_ENVMAP
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
#endif`,Ev=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Av=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Tv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Rv=`PhysicalMaterial material;
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
#endif`,Cv=`struct PhysicalMaterial {
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
}`,Pv=`
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
#endif`,Lv=`#if defined( RE_IndirectDiffuse )
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
#endif`,Iv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Dv=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Nv=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Uv=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ov=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Fv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,zv=`#if defined( USE_POINTS_UV )
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
#endif`,Hv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Vv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Wv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Xv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yv=`#ifdef USE_MORPHTARGETS
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
#endif`,qv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Kv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,$v=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Qv=`#ifdef USE_NORMALMAP
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
#endif`,ex=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,nx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ix=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ox=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ax=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ux=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,px=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,mx=`float getShadowMask() {
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
}`,gx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_x=`#ifdef USE_SKINNING
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
#endif`,vx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xx=`#ifdef USE_SKINNING
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
#endif`,yx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Mx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Sx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ex=`#ifdef USE_TRANSMISSION
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
#endif`,wx=`#ifdef USE_TRANSMISSION
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
#endif`,Ax=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Px=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Lx=`uniform sampler2D t2D;
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
}`,Ix=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Nx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ux=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ox=`#include <common>
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
}`,Fx=`#if DEPTH_PACKING == 3200
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
}`,kx=`#define DISTANCE
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
}`,Bx=`#define DISTANCE
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
}`,zx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Hx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vx=`uniform float scale;
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
}`,Gx=`uniform vec3 diffuse;
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
}`,Wx=`#include <common>
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
}`,Xx=`uniform vec3 diffuse;
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
}`,Yx=`#define LAMBERT
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
}`,qx=`#define LAMBERT
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
}`,jx=`#define MATCAP
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
}`,Kx=`#define MATCAP
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
}`,$x=`#define NORMAL
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
}`,Jx=`#define NORMAL
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
}`,Zx=`#define PHONG
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
}`,Qx=`#define PHONG
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
}`,ey=`#define STANDARD
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
}`,ty=`#define STANDARD
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
}`,ny=`#define TOON
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
}`,iy=`#define TOON
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
}`,sy=`uniform float size;
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
}`,ry=`uniform vec3 diffuse;
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
}`,oy=`#include <common>
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
}`,ay=`uniform vec3 color;
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
}`,ly=`uniform float rotation;
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
}`,cy=`uniform vec3 diffuse;
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
}`,je={alphahash_fragment:L_,alphahash_pars_fragment:I_,alphamap_fragment:D_,alphamap_pars_fragment:N_,alphatest_fragment:U_,alphatest_pars_fragment:O_,aomap_fragment:F_,aomap_pars_fragment:k_,batching_pars_vertex:B_,batching_vertex:z_,begin_vertex:H_,beginnormal_vertex:V_,bsdfs:G_,iridescence_fragment:W_,bumpmap_pars_fragment:X_,clipping_planes_fragment:Y_,clipping_planes_pars_fragment:q_,clipping_planes_pars_vertex:j_,clipping_planes_vertex:K_,color_fragment:$_,color_pars_fragment:J_,color_pars_vertex:Z_,color_vertex:Q_,common:ev,cube_uv_reflection_fragment:tv,defaultnormal_vertex:nv,displacementmap_pars_vertex:iv,displacementmap_vertex:sv,emissivemap_fragment:rv,emissivemap_pars_fragment:ov,colorspace_fragment:av,colorspace_pars_fragment:lv,envmap_fragment:cv,envmap_common_pars_fragment:hv,envmap_pars_fragment:uv,envmap_pars_vertex:fv,envmap_physical_pars_fragment:bv,envmap_vertex:dv,fog_vertex:pv,fog_pars_vertex:mv,fog_fragment:gv,fog_pars_fragment:_v,gradientmap_pars_fragment:vv,lightmap_pars_fragment:xv,lights_lambert_fragment:yv,lights_lambert_pars_fragment:Mv,lights_pars_begin:Sv,lights_toon_fragment:Ev,lights_toon_pars_fragment:wv,lights_phong_fragment:Av,lights_phong_pars_fragment:Tv,lights_physical_fragment:Rv,lights_physical_pars_fragment:Cv,lights_fragment_begin:Pv,lights_fragment_maps:Lv,lights_fragment_end:Iv,logdepthbuf_fragment:Dv,logdepthbuf_pars_fragment:Nv,logdepthbuf_pars_vertex:Uv,logdepthbuf_vertex:Ov,map_fragment:Fv,map_pars_fragment:kv,map_particle_fragment:Bv,map_particle_pars_fragment:zv,metalnessmap_fragment:Hv,metalnessmap_pars_fragment:Vv,morphinstance_vertex:Gv,morphcolor_vertex:Wv,morphnormal_vertex:Xv,morphtarget_pars_vertex:Yv,morphtarget_vertex:qv,normal_fragment_begin:jv,normal_fragment_maps:Kv,normal_pars_fragment:$v,normal_pars_vertex:Jv,normal_vertex:Zv,normalmap_pars_fragment:Qv,clearcoat_normal_fragment_begin:ex,clearcoat_normal_fragment_maps:tx,clearcoat_pars_fragment:nx,iridescence_pars_fragment:ix,opaque_fragment:sx,packing:rx,premultiplied_alpha_fragment:ox,project_vertex:ax,dithering_fragment:lx,dithering_pars_fragment:cx,roughnessmap_fragment:hx,roughnessmap_pars_fragment:ux,shadowmap_pars_fragment:fx,shadowmap_pars_vertex:dx,shadowmap_vertex:px,shadowmask_pars_fragment:mx,skinbase_vertex:gx,skinning_pars_vertex:_x,skinning_vertex:vx,skinnormal_vertex:xx,specularmap_fragment:yx,specularmap_pars_fragment:Mx,tonemapping_fragment:Sx,tonemapping_pars_fragment:bx,transmission_fragment:Ex,transmission_pars_fragment:wx,uv_pars_fragment:Ax,uv_pars_vertex:Tx,uv_vertex:Rx,worldpos_vertex:Cx,background_vert:Px,background_frag:Lx,backgroundCube_vert:Ix,backgroundCube_frag:Dx,cube_vert:Nx,cube_frag:Ux,depth_vert:Ox,depth_frag:Fx,distanceRGBA_vert:kx,distanceRGBA_frag:Bx,equirect_vert:zx,equirect_frag:Hx,linedashed_vert:Vx,linedashed_frag:Gx,meshbasic_vert:Wx,meshbasic_frag:Xx,meshlambert_vert:Yx,meshlambert_frag:qx,meshmatcap_vert:jx,meshmatcap_frag:Kx,meshnormal_vert:$x,meshnormal_frag:Jx,meshphong_vert:Zx,meshphong_frag:Qx,meshphysical_vert:ey,meshphysical_frag:ty,meshtoon_vert:ny,meshtoon_frag:iy,points_vert:sy,points_frag:ry,shadow_vert:oy,shadow_frag:ay,sprite_vert:ly,sprite_frag:cy},ve={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new Re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new Re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},Vn={basic:{uniforms:qt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:qt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new $e(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:qt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:qt([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:qt([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new $e(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:qt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:qt([ve.points,ve.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:qt([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:qt([ve.common,ve.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:qt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:qt([ve.sprite,ve.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:qt([ve.common,ve.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:qt([ve.lights,ve.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};Vn.physical={uniforms:qt([Vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new Re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new Re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new Re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const xo={r:0,b:0,g:0},Xi=new Jn,hy=new dt;function uy(n,e,t,i,s,r,o){const a=new $e(0);let l=r===!0?0:1,c,h,f=null,u=0,d=null;function g(M){let v=M.isScene===!0?M.background:null;return v&&v.isTexture&&(v=(M.backgroundBlurriness>0?t:e).get(v)),v}function _(M){let v=!1;const E=g(M);E===null?m(a,l):E&&E.isColor&&(m(E,1),v=!0);const U=n.xr.getEnvironmentBlendMode();U==="additive"?i.buffers.color.setClear(0,0,0,1,o):U==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(M,v){const E=g(v);E&&(E.isCubeTexture||E.mapping===da)?(h===void 0&&(h=new Je(new Dn(1,1,1),new Oi({name:"BackgroundCubeMaterial",uniforms:js(Vn.backgroundCube.uniforms),vertexShader:Vn.backgroundCube.vertexShader,fragmentShader:Vn.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(U,R,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Xi.copy(v.backgroundRotation),Xi.x*=-1,Xi.y*=-1,Xi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Xi.y*=-1,Xi.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(hy.makeRotationFromEuler(Xi)),h.material.toneMapped=ot.getTransfer(E.colorSpace)!==gt,(f!==E||u!==E.version||d!==n.toneMapping)&&(h.material.needsUpdate=!0,f=E,u=E.version,d=n.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new Je(new fs(2,2),new Oi({name:"BackgroundMaterial",uniforms:js(Vn.background.uniforms),vertexShader:Vn.background.vertexShader,fragmentShader:Vn.background.fragmentShader,side:Ui,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=ot.getTransfer(E.colorSpace)!==gt,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(f!==E||u!==E.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,f=E,u=E.version,d=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function m(M,v){M.getRGB(xo,jd(n)),i.buffers.color.setClear(xo.r,xo.g,xo.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(M,v=1){a.set(M),l=v,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,m(a,l)},render:_,addToRenderList:p}}function fy(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null);let r=s,o=!1;function a(x,w,z,W,$){let ae=!1;const V=f(W,z,w);r!==V&&(r=V,c(r.object)),ae=d(x,W,z,$),ae&&g(x,W,z,$),$!==null&&e.update($,n.ELEMENT_ARRAY_BUFFER),(ae||o)&&(o=!1,E(x,w,z,W),$!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function l(){return n.createVertexArray()}function c(x){return n.bindVertexArray(x)}function h(x){return n.deleteVertexArray(x)}function f(x,w,z){const W=z.wireframe===!0;let $=i[x.id];$===void 0&&($={},i[x.id]=$);let ae=$[w.id];ae===void 0&&(ae={},$[w.id]=ae);let V=ae[W];return V===void 0&&(V=u(l()),ae[W]=V),V}function u(x){const w=[],z=[],W=[];for(let $=0;$<t;$++)w[$]=0,z[$]=0,W[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:z,attributeDivisors:W,object:x,attributes:{},index:null}}function d(x,w,z,W){const $=r.attributes,ae=w.attributes;let V=0;const se=z.getAttributes();for(const G in se)if(se[G].location>=0){const Me=$[G];let we=ae[G];if(we===void 0&&(G==="instanceMatrix"&&x.instanceMatrix&&(we=x.instanceMatrix),G==="instanceColor"&&x.instanceColor&&(we=x.instanceColor)),Me===void 0||Me.attribute!==we||we&&Me.data!==we.data)return!0;V++}return r.attributesNum!==V||r.index!==W}function g(x,w,z,W){const $={},ae=w.attributes;let V=0;const se=z.getAttributes();for(const G in se)if(se[G].location>=0){let Me=ae[G];Me===void 0&&(G==="instanceMatrix"&&x.instanceMatrix&&(Me=x.instanceMatrix),G==="instanceColor"&&x.instanceColor&&(Me=x.instanceColor));const we={};we.attribute=Me,Me&&Me.data&&(we.data=Me.data),$[G]=we,V++}r.attributes=$,r.attributesNum=V,r.index=W}function _(){const x=r.newAttributes;for(let w=0,z=x.length;w<z;w++)x[w]=0}function p(x){m(x,0)}function m(x,w){const z=r.newAttributes,W=r.enabledAttributes,$=r.attributeDivisors;z[x]=1,W[x]===0&&(n.enableVertexAttribArray(x),W[x]=1),$[x]!==w&&(n.vertexAttribDivisor(x,w),$[x]=w)}function M(){const x=r.newAttributes,w=r.enabledAttributes;for(let z=0,W=w.length;z<W;z++)w[z]!==x[z]&&(n.disableVertexAttribArray(z),w[z]=0)}function v(x,w,z,W,$,ae,V){V===!0?n.vertexAttribIPointer(x,w,z,$,ae):n.vertexAttribPointer(x,w,z,W,$,ae)}function E(x,w,z,W){_();const $=W.attributes,ae=z.getAttributes(),V=w.defaultAttributeValues;for(const se in ae){const G=ae[se];if(G.location>=0){let _e=$[se];if(_e===void 0&&(se==="instanceMatrix"&&x.instanceMatrix&&(_e=x.instanceMatrix),se==="instanceColor"&&x.instanceColor&&(_e=x.instanceColor)),_e!==void 0){const Me=_e.normalized,we=_e.itemSize,We=e.get(_e);if(We===void 0)continue;const Ze=We.buffer,ie=We.type,he=We.bytesPerElement,Se=ie===n.INT||ie===n.UNSIGNED_INT||_e.gpuType===qc;if(_e.isInterleavedBufferAttribute){const xe=_e.data,me=xe.stride,I=_e.offset;if(xe.isInstancedInterleavedBuffer){for(let ze=0;ze<G.locationSize;ze++)m(G.location+ze,xe.meshPerAttribute);x.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let ze=0;ze<G.locationSize;ze++)p(G.location+ze);n.bindBuffer(n.ARRAY_BUFFER,Ze);for(let ze=0;ze<G.locationSize;ze++)v(G.location+ze,we/G.locationSize,ie,Me,me*he,(I+we/G.locationSize*ze)*he,Se)}else{if(_e.isInstancedBufferAttribute){for(let xe=0;xe<G.locationSize;xe++)m(G.location+xe,_e.meshPerAttribute);x.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let xe=0;xe<G.locationSize;xe++)p(G.location+xe);n.bindBuffer(n.ARRAY_BUFFER,Ze);for(let xe=0;xe<G.locationSize;xe++)v(G.location+xe,we/G.locationSize,ie,Me,we*he,we/G.locationSize*xe*he,Se)}}else if(V!==void 0){const Me=V[se];if(Me!==void 0)switch(Me.length){case 2:n.vertexAttrib2fv(G.location,Me);break;case 3:n.vertexAttrib3fv(G.location,Me);break;case 4:n.vertexAttrib4fv(G.location,Me);break;default:n.vertexAttrib1fv(G.location,Me)}}}}M()}function U(){D();for(const x in i){const w=i[x];for(const z in w){const W=w[z];for(const $ in W)h(W[$].object),delete W[$];delete w[z]}delete i[x]}}function R(x){if(i[x.id]===void 0)return;const w=i[x.id];for(const z in w){const W=w[z];for(const $ in W)h(W[$].object),delete W[$];delete w[z]}delete i[x.id]}function P(x){for(const w in i){const z=i[w];if(z[x.id]===void 0)continue;const W=z[x.id];for(const $ in W)h(W[$].object),delete W[$];delete z[x.id]}}function D(){Z(),o=!0,r!==s&&(r=s,c(r.object))}function Z(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:D,resetDefaultState:Z,dispose:U,releaseStatesOfGeometry:R,releaseStatesOfProgram:P,initAttributes:_,enableAttribute:p,disableUnusedAttributes:M}}function dy(n,e,t){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function o(c,h,f){f!==0&&(n.drawArraysInstanced(i,c,h,f),t.update(h,i,f))}function a(c,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,f);let d=0;for(let g=0;g<f;g++)d+=h[g];t.update(d,i,1)}function l(c,h,f,u){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],h[g],u[g]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,h,0,u,0,f);let g=0;for(let _=0;_<f;_++)g+=h[_];for(let _=0;_<u.length;_++)t.update(g,i,u[_])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function py(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==Pn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const D=P===Gr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==gi&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==di&&!D)}function l(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=t.logarithmicDepthBuffer===!0,u=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(u===!0){const P=e.get("EXT_clip_control");P.clipControlEXT(P.LOWER_LEFT_EXT,P.ZERO_TO_ONE_EXT)}const d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),v=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),U=g>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:u,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:M,maxVaryings:v,maxFragmentUniforms:E,vertexTextures:U,maxSamples:R}}function my(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new Ai,a=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const d=f.length!==0||u||i!==0||s;return s=u,i=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){t=h(f,u,0)},this.setState=function(f,u,d){const g=f.clippingPlanes,_=f.clipIntersection,p=f.clipShadows,m=n.get(f);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{const M=r?0:i,v=M*4;let E=m.clippingState||null;l.value=E,E=h(g,u,v,d);for(let U=0;U!==v;++U)E[U]=t[U];m.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(f,u,d,g){const _=f!==null?f.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const m=d+_*4,M=u.matrixWorldInverse;a.getNormalMatrix(M),(p===null||p.length<m)&&(p=new Float32Array(m));for(let v=0,E=d;v!==_;++v,E+=4)o.copy(f[v]).applyMatrix4(M,a),o.normal.toArray(p,E),p[E+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function gy(n){let e=new WeakMap;function t(o,a){return a===Gl?o.mapping=Ws:a===Wl&&(o.mapping=Xs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Gl||a===Wl)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new T_(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class ih extends Kd{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Is=4,wu=[.125,.215,.35,.446,.526,.582],Zi=20,cl=new ih,Au=new $e;let hl=null,ul=0,fl=0,dl=!1;const ji=(1+Math.sqrt(5))/2,Rs=1/ji,Tu=[new N(-ji,Rs,0),new N(ji,Rs,0),new N(-Rs,0,ji),new N(Rs,0,ji),new N(0,ji,-Rs),new N(0,ji,Rs),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class Ru{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){hl=this._renderer.getRenderTarget(),ul=this._renderer.getActiveCubeFace(),fl=this._renderer.getActiveMipmapLevel(),dl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(hl,ul,fl),this._renderer.xr.enabled=dl,e.scissorTest=!1,yo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ws||e.mapping===Xs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),hl=this._renderer.getRenderTarget(),ul=this._renderer.getActiveCubeFace(),fl=this._renderer.getActiveMipmapLevel(),dl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Rn,minFilter:Rn,generateMipmaps:!1,type:Gr,format:Pn,colorSpace:Fi,depthBuffer:!1},s=Cu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cu(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_y(r)),this._blurMaterial=vy(r,e,t)}return s}_compileMaterial(e){const t=new Je(this._lodPlanes[0],e);this._renderer.compile(t,cl)}_sceneToCubeUV(e,t,i,s){const a=new _n(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,u=h.toneMapping;h.getClearColor(Au),h.toneMapping=Ii,h.autoClear=!1;const d=new Ft({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1}),g=new Je(new Dn,d);let _=!1;const p=e.background;p?p.isColor&&(d.color.copy(p),e.background=null,_=!0):(d.color.copy(Au),_=!0);for(let m=0;m<6;m++){const M=m%3;M===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):M===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const v=this._cubeSize;yo(s,M*v,m>2?v:0,v,v),h.setRenderTarget(s),_&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=f,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Ws||e.mapping===Xs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pu());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Je(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;yo(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,cl)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Tu[(s-r-1)%Tu.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new Je(this._lodPlanes[s],c),u=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Zi-1),_=r/g,p=isFinite(r)?1+Math.floor(h*_):Zi;p>Zi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Zi}`);const m=[];let M=0;for(let P=0;P<Zi;++P){const D=P/_,Z=Math.exp(-D*D/2);m.push(Z),P===0?M+=Z:P<p&&(M+=2*Z)}for(let P=0;P<m.length;P++)m[P]=m[P]/M;u.envMap.value=e.texture,u.samples.value=p,u.weights.value=m,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:v}=this;u.dTheta.value=g,u.mipInt.value=v-i;const E=this._sizeLods[s],U=3*E*(s>v-Is?s-v+Is:0),R=4*(this._cubeSize-E);yo(t,U,R,3*E,2*E),l.setRenderTarget(t),l.render(f,cl)}}function _y(n){const e=[],t=[],i=[];let s=n;const r=n-Is+1+wu.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-Is?l=wu[o-n+Is-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,f=1+c,u=[h,h,f,h,f,f,h,h,f,f,h,f],d=6,g=6,_=3,p=2,m=1,M=new Float32Array(_*g*d),v=new Float32Array(p*g*d),E=new Float32Array(m*g*d);for(let R=0;R<d;R++){const P=R%3*2/3-1,D=R>2?0:-1,Z=[P,D,0,P+2/3,D,0,P+2/3,D+1,0,P,D,0,P+2/3,D+1,0,P,D+1,0];M.set(Z,_*g*R),v.set(u,p*g*R);const x=[R,R,R,R,R,R];E.set(x,m*g*R)}const U=new Wt;U.setAttribute("position",new fn(M,_)),U.setAttribute("uv",new fn(v,p)),U.setAttribute("faceIndex",new fn(E,m)),e.push(U),s>Is&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Cu(n,e,t){const i=new ls(n,e,t);return i.texture.mapping=da,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function yo(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function vy(n,e,t){const i=new Float32Array(Zi),s=new N(0,1,0);return new Oi({name:"SphericalGaussianBlur",defines:{n:Zi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:sh(),fragmentShader:`

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
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Pu(){return new Oi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sh(),fragmentShader:`

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
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Lu(){return new Oi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function sh(){return`

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
	`}function xy(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Gl||l===Wl,h=l===Ws||l===Xs;if(c||h){let f=e.get(a);const u=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return t===null&&(t=new Ru(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const d=a.image;return c&&d&&d.height>0||h&&d&&s(d)?(t===null&&(t=new Ru(n)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function yy(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Uo("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function My(n,e,t,i){const s={},r=new WeakMap;function o(f){const u=f.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);for(const g in u.morphAttributes){const _=u.morphAttributes[g];for(let p=0,m=_.length;p<m;p++)e.remove(_[p])}u.removeEventListener("dispose",o),delete s[u.id];const d=r.get(u);d&&(e.remove(d),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(f,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,t.memory.geometries++),u}function l(f){const u=f.attributes;for(const g in u)e.update(u[g],n.ARRAY_BUFFER);const d=f.morphAttributes;for(const g in d){const _=d[g];for(let p=0,m=_.length;p<m;p++)e.update(_[p],n.ARRAY_BUFFER)}}function c(f){const u=[],d=f.index,g=f.attributes.position;let _=0;if(d!==null){const M=d.array;_=d.version;for(let v=0,E=M.length;v<E;v+=3){const U=M[v+0],R=M[v+1],P=M[v+2];u.push(U,R,R,P,P,U)}}else if(g!==void 0){const M=g.array;_=g.version;for(let v=0,E=M.length/3-1;v<E;v+=3){const U=v+0,R=v+1,P=v+2;u.push(U,R,R,P,P,U)}}else return;const p=new(Vd(u)?qd:Yd)(u,1);p.version=_;const m=r.get(f);m&&e.remove(m),r.set(f,p)}function h(f){const u=r.get(f);if(u){const d=f.index;d!==null&&u.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function Sy(n,e,t){let i;function s(u){i=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,d){n.drawElements(i,d,r,u*o),t.update(d,i,1)}function c(u,d,g){g!==0&&(n.drawElementsInstanced(i,d,r,u*o,g),t.update(d,i,g))}function h(u,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,u,0,g);let p=0;for(let m=0;m<g;m++)p+=d[m];t.update(p,i,1)}function f(u,d,g,_){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<u.length;m++)c(u[m]/o,d[m],_[m]);else{p.multiDrawElementsInstancedWEBGL(i,d,0,r,u,0,_,0,g);let m=0;for(let M=0;M<g;M++)m+=d[M];for(let M=0;M<_.length;M++)t.update(m,i,_[M])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function by(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Ey(n,e,t){const i=new WeakMap,s=new ct;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0;let u=i.get(a);if(u===void 0||u.count!==f){let Z=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",Z)};u!==void 0&&u.texture.dispose();const d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let v=0;d===!0&&(v=1),g===!0&&(v=2),_===!0&&(v=3);let E=a.attributes.position.count*v,U=1;E>e.maxTextureSize&&(U=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const R=new Float32Array(E*U*4*f),P=new Wd(R,E,U,f);P.type=di,P.needsUpdate=!0;const D=v*4;for(let x=0;x<f;x++){const w=p[x],z=m[x],W=M[x],$=E*U*4*x;for(let ae=0;ae<w.count;ae++){const V=ae*D;d===!0&&(s.fromBufferAttribute(w,ae),R[$+V+0]=s.x,R[$+V+1]=s.y,R[$+V+2]=s.z,R[$+V+3]=0),g===!0&&(s.fromBufferAttribute(z,ae),R[$+V+4]=s.x,R[$+V+5]=s.y,R[$+V+6]=s.z,R[$+V+7]=0),_===!0&&(s.fromBufferAttribute(W,ae),R[$+V+8]=s.x,R[$+V+9]=s.y,R[$+V+10]=s.z,R[$+V+11]=W.itemSize===4?s.w:1)}}u={count:f,texture:P,size:new Re(E,U)},i.set(a,u),a.addEventListener("dispose",Z)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];const g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function wy(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,h=l.geometry,f=e.get(l,h);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return f}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class Zd extends Jt{constructor(e,t,i,s,r,o,a,l,c,h=ks){if(h!==ks&&h!==qs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===ks&&(i=as),i===void 0&&h===qs&&(i=Ys),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:$t,this.minFilter=l!==void 0?l:$t,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Qd=new Jt,Iu=new Zd(1,1),ep=new Wd,tp=new u_,np=new $d,Du=[],Nu=[],Uu=new Float32Array(16),Ou=new Float32Array(9),Fu=new Float32Array(4);function Qs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Du[s];if(r===void 0&&(r=new Float32Array(s),Du[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Pt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Lt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ga(n,e){let t=Nu[e];t===void 0&&(t=new Int32Array(e),Nu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Ay(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Ty(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2fv(this.addr,e),Lt(t,e)}}function Ry(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pt(t,e))return;n.uniform3fv(this.addr,e),Lt(t,e)}}function Cy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4fv(this.addr,e),Lt(t,e)}}function Py(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,i))return;Fu.set(i),n.uniformMatrix2fv(this.addr,!1,Fu),Lt(t,i)}}function Ly(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,i))return;Ou.set(i),n.uniformMatrix3fv(this.addr,!1,Ou),Lt(t,i)}}function Iy(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,i))return;Uu.set(i),n.uniformMatrix4fv(this.addr,!1,Uu),Lt(t,i)}}function Dy(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Ny(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2iv(this.addr,e),Lt(t,e)}}function Uy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;n.uniform3iv(this.addr,e),Lt(t,e)}}function Oy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4iv(this.addr,e),Lt(t,e)}}function Fy(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function ky(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2uiv(this.addr,e),Lt(t,e)}}function By(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;n.uniform3uiv(this.addr,e),Lt(t,e)}}function zy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4uiv(this.addr,e),Lt(t,e)}}function Hy(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Iu.compareFunction=Hd,r=Iu):r=Qd,t.setTexture2D(e||r,s)}function Vy(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||tp,s)}function Gy(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||np,s)}function Wy(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||ep,s)}function Xy(n){switch(n){case 5126:return Ay;case 35664:return Ty;case 35665:return Ry;case 35666:return Cy;case 35674:return Py;case 35675:return Ly;case 35676:return Iy;case 5124:case 35670:return Dy;case 35667:case 35671:return Ny;case 35668:case 35672:return Uy;case 35669:case 35673:return Oy;case 5125:return Fy;case 36294:return ky;case 36295:return By;case 36296:return zy;case 35678:case 36198:case 36298:case 36306:case 35682:return Hy;case 35679:case 36299:case 36307:return Vy;case 35680:case 36300:case 36308:case 36293:return Gy;case 36289:case 36303:case 36311:case 36292:return Wy}}function Yy(n,e){n.uniform1fv(this.addr,e)}function qy(n,e){const t=Qs(e,this.size,2);n.uniform2fv(this.addr,t)}function jy(n,e){const t=Qs(e,this.size,3);n.uniform3fv(this.addr,t)}function Ky(n,e){const t=Qs(e,this.size,4);n.uniform4fv(this.addr,t)}function $y(n,e){const t=Qs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Jy(n,e){const t=Qs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Zy(n,e){const t=Qs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Qy(n,e){n.uniform1iv(this.addr,e)}function eM(n,e){n.uniform2iv(this.addr,e)}function tM(n,e){n.uniform3iv(this.addr,e)}function nM(n,e){n.uniform4iv(this.addr,e)}function iM(n,e){n.uniform1uiv(this.addr,e)}function sM(n,e){n.uniform2uiv(this.addr,e)}function rM(n,e){n.uniform3uiv(this.addr,e)}function oM(n,e){n.uniform4uiv(this.addr,e)}function aM(n,e,t){const i=this.cache,s=e.length,r=ga(t,s);Pt(i,r)||(n.uniform1iv(this.addr,r),Lt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Qd,r[o])}function lM(n,e,t){const i=this.cache,s=e.length,r=ga(t,s);Pt(i,r)||(n.uniform1iv(this.addr,r),Lt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||tp,r[o])}function cM(n,e,t){const i=this.cache,s=e.length,r=ga(t,s);Pt(i,r)||(n.uniform1iv(this.addr,r),Lt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||np,r[o])}function hM(n,e,t){const i=this.cache,s=e.length,r=ga(t,s);Pt(i,r)||(n.uniform1iv(this.addr,r),Lt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||ep,r[o])}function uM(n){switch(n){case 5126:return Yy;case 35664:return qy;case 35665:return jy;case 35666:return Ky;case 35674:return $y;case 35675:return Jy;case 35676:return Zy;case 5124:case 35670:return Qy;case 35667:case 35671:return eM;case 35668:case 35672:return tM;case 35669:case 35673:return nM;case 5125:return iM;case 36294:return sM;case 36295:return rM;case 36296:return oM;case 35678:case 36198:case 36298:case 36306:case 35682:return aM;case 35679:case 36299:case 36307:return lM;case 35680:case 36300:case 36308:case 36293:return cM;case 36289:case 36303:case 36311:case 36292:return hM}}class fM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Xy(t.type)}}class dM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=uM(t.type)}}class pM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const pl=/(\w+)(\])?(\[|\.)?/g;function ku(n,e){n.seq.push(e),n.map[e.id]=e}function mM(n,e,t){const i=n.name,s=i.length;for(pl.lastIndex=0;;){const r=pl.exec(i),o=pl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){ku(t,c===void 0?new fM(a,n,e):new dM(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new pM(a),ku(t,f)),t=f}}}class Oo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);mM(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function Bu(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const gM=37297;let _M=0;function vM(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function xM(n){const e=ot.getPrimaries(ot.workingColorSpace),t=ot.getPrimaries(n);let i;switch(e===t?i="":e===$o&&t===Ko?i="LinearDisplayP3ToLinearSRGB":e===Ko&&t===$o&&(i="LinearSRGBToLinearDisplayP3"),n){case Fi:case pa:return[i,"LinearTransferOETF"];case nn:case Qc:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function zu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+vM(n.getShaderSource(e),o)}else return s}function yM(n,e){const t=xM(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function MM(n,e){let t;switch(e){case kg:t="Linear";break;case Bg:t="Reinhard";break;case zg:t="Cineon";break;case Rd:t="ACESFilmic";break;case Vg:t="AgX";break;case Gg:t="Neutral";break;case Hg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Mo=new N;function SM(){ot.getLuminanceCoefficients(Mo);const n=Mo.x.toFixed(4),e=Mo.y.toFixed(4),t=Mo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function bM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(dr).join(`
`)}function EM(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function wM(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function dr(n){return n!==""}function Hu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const AM=/^[ \t]*#include +<([\w\d./]+)>/gm;function yc(n){return n.replace(AM,RM)}const TM=new Map;function RM(n,e){let t=je[e];if(t===void 0){const i=TM.get(e);if(i!==void 0)t=je[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return yc(t)}const CM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gu(n){return n.replace(CM,PM)}function PM(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Wu(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function LM(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Yc?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===_g?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ai&&(e="SHADOWMAP_TYPE_VSM"),e}function IM(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ws:case Xs:e="ENVMAP_TYPE_CUBE";break;case da:e="ENVMAP_TYPE_CUBE_UV";break}return e}function DM(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Xs:e="ENVMAP_MODE_REFRACTION";break}return e}function NM(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Td:e="ENVMAP_BLENDING_MULTIPLY";break;case Og:e="ENVMAP_BLENDING_MIX";break;case Fg:e="ENVMAP_BLENDING_ADD";break}return e}function UM(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function OM(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=LM(t),c=IM(t),h=DM(t),f=NM(t),u=UM(t),d=bM(t),g=EM(r),_=s.createProgram();let p,m,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(dr).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(dr).join(`
`),m.length>0&&(m+=`
`)):(p=[Wu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(dr).join(`
`),m=[Wu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ii?"#define TONE_MAPPING":"",t.toneMapping!==Ii?je.tonemapping_pars_fragment:"",t.toneMapping!==Ii?MM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,yM("linearToOutputTexel",t.outputColorSpace),SM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(dr).join(`
`)),o=yc(o),o=Hu(o,t),o=Vu(o,t),a=yc(a),a=Hu(a,t),a=Vu(a,t),o=Gu(o),a=Gu(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===au?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===au?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const v=M+p+o,E=M+m+a,U=Bu(s,s.VERTEX_SHADER,v),R=Bu(s,s.FRAGMENT_SHADER,E);s.attachShader(_,U),s.attachShader(_,R),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function P(w){if(n.debug.checkShaderErrors){const z=s.getProgramInfoLog(_).trim(),W=s.getShaderInfoLog(U).trim(),$=s.getShaderInfoLog(R).trim();let ae=!0,V=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(ae=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,U,R);else{const se=zu(s,U,"vertex"),G=zu(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+z+`
`+se+`
`+G)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(W===""||$==="")&&(V=!1);V&&(w.diagnostics={runnable:ae,programLog:z,vertexShader:{log:W,prefix:p},fragmentShader:{log:$,prefix:m}})}s.deleteShader(U),s.deleteShader(R),D=new Oo(s,_),Z=wM(s,_)}let D;this.getUniforms=function(){return D===void 0&&P(this),D};let Z;this.getAttributes=function(){return Z===void 0&&P(this),Z};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(_,gM)),x},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=_M++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=U,this.fragmentShader=R,this}let FM=0;class kM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new BM(e),t.set(e,i)),i}}class BM{constructor(e){this.id=FM++,this.code=e,this.usedTimes=0}}function zM(n,e,t,i,s,r,o){const a=new th,l=new kM,c=new Set,h=[],f=s.logarithmicDepthBuffer,u=s.reverseDepthBuffer,d=s.vertexTextures;let g=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return c.add(x),x===0?"uv":`uv${x}`}function m(x,w,z,W,$){const ae=W.fog,V=$.geometry,se=x.isMeshStandardMaterial?W.environment:null,G=(x.isMeshStandardMaterial?t:e).get(x.envMap||se),_e=G&&G.mapping===da?G.image.height:null,Me=_[x.type];x.precision!==null&&(g=s.getMaxPrecision(x.precision),g!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",g,"instead."));const we=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,We=we!==void 0?we.length:0;let Ze=0;V.morphAttributes.position!==void 0&&(Ze=1),V.morphAttributes.normal!==void 0&&(Ze=2),V.morphAttributes.color!==void 0&&(Ze=3);let ie,he,Se,xe;if(Me){const Qt=Vn[Me];ie=Qt.vertexShader,he=Qt.fragmentShader}else ie=x.vertexShader,he=x.fragmentShader,l.update(x),Se=l.getVertexShaderID(x),xe=l.getFragmentShaderID(x);const me=n.getRenderTarget(),I=$.isInstancedMesh===!0,ze=$.isBatchedMesh===!0,C=!!x.map,T=!!x.matcap,S=!!G,ne=!!x.aoMap,X=!!x.lightMap,J=!!x.bumpMap,te=!!x.normalMap,re=!!x.displacementMap,Q=!!x.emissiveMap,b=!!x.metalnessMap,y=!!x.roughnessMap,L=x.anisotropy>0,B=x.clearcoat>0,K=x.dispersion>0,q=x.iridescence>0,de=x.sheen>0,le=x.transmission>0,ue=L&&!!x.anisotropyMap,ke=B&&!!x.clearcoatMap,ce=B&&!!x.clearcoatNormalMap,ye=B&&!!x.clearcoatRoughnessMap,De=q&&!!x.iridescenceMap,He=q&&!!x.iridescenceThicknessMap,ge=de&&!!x.sheenColorMap,Xe=de&&!!x.sheenRoughnessMap,Ye=!!x.specularMap,at=!!x.specularColorMap,O=!!x.specularIntensityMap,Ae=le&&!!x.transmissionMap,ee=le&&!!x.thicknessMap,oe=!!x.gradientMap,be=!!x.alphaMap,Te=x.alphaTest>0,Qe=!!x.alphaHash,At=!!x.extensions;let Zt=Ii;x.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(Zt=n.toneMapping);const et={shaderID:Me,shaderType:x.type,shaderName:x.name,vertexShader:ie,fragmentShader:he,defines:x.defines,customVertexShaderID:Se,customFragmentShaderID:xe,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:g,batching:ze,batchingColor:ze&&$._colorsTexture!==null,instancing:I,instancingColor:I&&$.instanceColor!==null,instancingMorph:I&&$.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:me===null?n.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:Fi,alphaToCoverage:!!x.alphaToCoverage,map:C,matcap:T,envMap:S,envMapMode:S&&G.mapping,envMapCubeUVHeight:_e,aoMap:ne,lightMap:X,bumpMap:J,normalMap:te,displacementMap:d&&re,emissiveMap:Q,normalMapObjectSpace:te&&x.normalMapType===qg,normalMapTangentSpace:te&&x.normalMapType===zd,metalnessMap:b,roughnessMap:y,anisotropy:L,anisotropyMap:ue,clearcoat:B,clearcoatMap:ke,clearcoatNormalMap:ce,clearcoatRoughnessMap:ye,dispersion:K,iridescence:q,iridescenceMap:De,iridescenceThicknessMap:He,sheen:de,sheenColorMap:ge,sheenRoughnessMap:Xe,specularMap:Ye,specularColorMap:at,specularIntensityMap:O,transmission:le,transmissionMap:Ae,thicknessMap:ee,gradientMap:oe,opaque:x.transparent===!1&&x.blending===Fs&&x.alphaToCoverage===!1,alphaMap:be,alphaTest:Te,alphaHash:Qe,combine:x.combine,mapUv:C&&p(x.map.channel),aoMapUv:ne&&p(x.aoMap.channel),lightMapUv:X&&p(x.lightMap.channel),bumpMapUv:J&&p(x.bumpMap.channel),normalMapUv:te&&p(x.normalMap.channel),displacementMapUv:re&&p(x.displacementMap.channel),emissiveMapUv:Q&&p(x.emissiveMap.channel),metalnessMapUv:b&&p(x.metalnessMap.channel),roughnessMapUv:y&&p(x.roughnessMap.channel),anisotropyMapUv:ue&&p(x.anisotropyMap.channel),clearcoatMapUv:ke&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:ce&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&p(x.clearcoatRoughnessMap.channel),iridescenceMapUv:De&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:He&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:Xe&&p(x.sheenRoughnessMap.channel),specularMapUv:Ye&&p(x.specularMap.channel),specularColorMapUv:at&&p(x.specularColorMap.channel),specularIntensityMapUv:O&&p(x.specularIntensityMap.channel),transmissionMapUv:Ae&&p(x.transmissionMap.channel),thicknessMapUv:ee&&p(x.thicknessMap.channel),alphaMapUv:be&&p(x.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(te||L),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!V.attributes.uv&&(C||be),fog:!!ae,useFog:x.fog===!0,fogExp2:!!ae&&ae.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:u,skinning:$.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:We,morphTextureStride:Ze,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&z.length>0,shadowMapType:n.shadowMap.type,toneMapping:Zt,decodeVideoTexture:C&&x.map.isVideoTexture===!0&&ot.getTransfer(x.map.colorSpace)===gt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Vt,flipSided:x.side===sn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:At&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(At&&x.extensions.multiDraw===!0||ze)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return et.vertexUv1s=c.has(1),et.vertexUv2s=c.has(2),et.vertexUv3s=c.has(3),c.clear(),et}function M(x){const w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(const z in x.defines)w.push(z),w.push(x.defines[z]);return x.isRawShaderMaterial===!1&&(v(w,x),E(w,x),w.push(n.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function v(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function E(x,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),x.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reverseDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.alphaToCoverage&&a.enable(20),x.push(a.mask)}function U(x){const w=_[x.type];let z;if(w){const W=Vn[w];z=b_.clone(W.uniforms)}else z=x.uniforms;return z}function R(x,w){let z;for(let W=0,$=h.length;W<$;W++){const ae=h[W];if(ae.cacheKey===w){z=ae,++z.usedTimes;break}}return z===void 0&&(z=new OM(n,w,x,r),h.push(z)),z}function P(x){if(--x.usedTimes===0){const w=h.indexOf(x);h[w]=h[h.length-1],h.pop(),x.destroy()}}function D(x){l.remove(x)}function Z(){l.dispose()}return{getParameters:m,getProgramCacheKey:M,getUniforms:U,acquireProgram:R,releaseProgram:P,releaseShaderCache:D,programs:h,dispose:Z}}function HM(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function VM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Xu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Yu(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(f,u,d,g,_,p){let m=n[e];return m===void 0?(m={id:f.id,object:f,geometry:u,material:d,groupOrder:g,renderOrder:f.renderOrder,z:_,group:p},n[e]=m):(m.id=f.id,m.object=f,m.geometry=u,m.material=d,m.groupOrder=g,m.renderOrder=f.renderOrder,m.z=_,m.group=p),e++,m}function a(f,u,d,g,_,p){const m=o(f,u,d,g,_,p);d.transmission>0?i.push(m):d.transparent===!0?s.push(m):t.push(m)}function l(f,u,d,g,_,p){const m=o(f,u,d,g,_,p);d.transmission>0?i.unshift(m):d.transparent===!0?s.unshift(m):t.unshift(m)}function c(f,u){t.length>1&&t.sort(f||VM),i.length>1&&i.sort(u||Xu),s.length>1&&s.sort(u||Xu)}function h(){for(let f=e,u=n.length;f<u;f++){const d=n[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function GM(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new Yu,n.set(i,[o])):s>=r.length?(o=new Yu,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function WM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new $e};break;case"SpotLight":t={position:new N,direction:new N,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new N,halfWidth:new N,halfHeight:new N};break}return n[e.id]=t,t}}}function XM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let YM=0;function qM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function jM(n){const e=new WM,t=XM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new N);const s=new N,r=new dt,o=new dt;function a(c){let h=0,f=0,u=0;for(let Z=0;Z<9;Z++)i.probe[Z].set(0,0,0);let d=0,g=0,_=0,p=0,m=0,M=0,v=0,E=0,U=0,R=0,P=0;c.sort(qM);for(let Z=0,x=c.length;Z<x;Z++){const w=c[Z],z=w.color,W=w.intensity,$=w.distance,ae=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)h+=z.r*W,f+=z.g*W,u+=z.b*W;else if(w.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(w.sh.coefficients[V],W);P++}else if(w.isDirectionalLight){const V=e.get(w);if(V.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const se=w.shadow,G=t.get(w);G.shadowIntensity=se.intensity,G.shadowBias=se.bias,G.shadowNormalBias=se.normalBias,G.shadowRadius=se.radius,G.shadowMapSize=se.mapSize,i.directionalShadow[d]=G,i.directionalShadowMap[d]=ae,i.directionalShadowMatrix[d]=w.shadow.matrix,M++}i.directional[d]=V,d++}else if(w.isSpotLight){const V=e.get(w);V.position.setFromMatrixPosition(w.matrixWorld),V.color.copy(z).multiplyScalar(W),V.distance=$,V.coneCos=Math.cos(w.angle),V.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),V.decay=w.decay,i.spot[_]=V;const se=w.shadow;if(w.map&&(i.spotLightMap[U]=w.map,U++,se.updateMatrices(w),w.castShadow&&R++),i.spotLightMatrix[_]=se.matrix,w.castShadow){const G=t.get(w);G.shadowIntensity=se.intensity,G.shadowBias=se.bias,G.shadowNormalBias=se.normalBias,G.shadowRadius=se.radius,G.shadowMapSize=se.mapSize,i.spotShadow[_]=G,i.spotShadowMap[_]=ae,E++}_++}else if(w.isRectAreaLight){const V=e.get(w);V.color.copy(z).multiplyScalar(W),V.halfWidth.set(w.width*.5,0,0),V.halfHeight.set(0,w.height*.5,0),i.rectArea[p]=V,p++}else if(w.isPointLight){const V=e.get(w);if(V.color.copy(w.color).multiplyScalar(w.intensity),V.distance=w.distance,V.decay=w.decay,w.castShadow){const se=w.shadow,G=t.get(w);G.shadowIntensity=se.intensity,G.shadowBias=se.bias,G.shadowNormalBias=se.normalBias,G.shadowRadius=se.radius,G.shadowMapSize=se.mapSize,G.shadowCameraNear=se.camera.near,G.shadowCameraFar=se.camera.far,i.pointShadow[g]=G,i.pointShadowMap[g]=ae,i.pointShadowMatrix[g]=w.shadow.matrix,v++}i.point[g]=V,g++}else if(w.isHemisphereLight){const V=e.get(w);V.skyColor.copy(w.color).multiplyScalar(W),V.groundColor.copy(w.groundColor).multiplyScalar(W),i.hemi[m]=V,m++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ve.LTC_FLOAT_1,i.rectAreaLTC2=ve.LTC_FLOAT_2):(i.rectAreaLTC1=ve.LTC_HALF_1,i.rectAreaLTC2=ve.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=u;const D=i.hash;(D.directionalLength!==d||D.pointLength!==g||D.spotLength!==_||D.rectAreaLength!==p||D.hemiLength!==m||D.numDirectionalShadows!==M||D.numPointShadows!==v||D.numSpotShadows!==E||D.numSpotMaps!==U||D.numLightProbes!==P)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=p,i.point.length=g,i.hemi.length=m,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=E+U-R,i.spotLightMap.length=U,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=P,D.directionalLength=d,D.pointLength=g,D.spotLength=_,D.rectAreaLength=p,D.hemiLength=m,D.numDirectionalShadows=M,D.numPointShadows=v,D.numSpotShadows=E,D.numSpotMaps=U,D.numLightProbes=P,i.version=YM++)}function l(c,h){let f=0,u=0,d=0,g=0,_=0;const p=h.matrixWorldInverse;for(let m=0,M=c.length;m<M;m++){const v=c[m];if(v.isDirectionalLight){const E=i.directional[f];E.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),f++}else if(v.isSpotLight){const E=i.spot[d];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),d++}else if(v.isRectAreaLight){const E=i.rectArea[g];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(p),o.identity(),r.copy(v.matrixWorld),r.premultiply(p),o.extractRotation(r),E.halfWidth.set(v.width*.5,0,0),E.halfHeight.set(0,v.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){const E=i.point[u];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(p),u++}else if(v.isHemisphereLight){const E=i.hemi[_];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(p),_++}}}return{setup:a,setupView:l,state:i}}function qu(n){const e=new jM(n),t=[],i=[];function s(h){c.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function o(h){i.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function KM(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new qu(n),e.set(s,[a])):r>=o.length?(a=new qu(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class $M extends us{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Xg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class JM extends us{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ZM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,QM=`uniform sampler2D shadow_pass;
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
}`;function eS(n,e,t){let i=new nh;const s=new Re,r=new Re,o=new ct,a=new $M({depthPacking:Yg}),l=new JM,c={},h=t.maxTextureSize,f={[Ui]:sn,[sn]:Ui,[Vt]:Vt},u=new Oi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Re},radius:{value:4}},vertexShader:ZM,fragmentShader:QM}),d=u.clone();d.defines.HORIZONTAL_PASS=1;const g=new Wt;g.setAttribute("position",new fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Je(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yc;let m=this.type;this.render=function(R,P,D){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;const Z=n.getRenderTarget(),x=n.getActiveCubeFace(),w=n.getActiveMipmapLevel(),z=n.state;z.setBlending(Li),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const W=m!==ai&&this.type===ai,$=m===ai&&this.type!==ai;for(let ae=0,V=R.length;ae<V;ae++){const se=R[ae],G=se.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",se,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const _e=G.getFrameExtents();if(s.multiply(_e),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/_e.x),s.x=r.x*_e.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/_e.y),s.y=r.y*_e.y,G.mapSize.y=r.y)),G.map===null||W===!0||$===!0){const we=this.type!==ai?{minFilter:$t,magFilter:$t}:{};G.map!==null&&G.map.dispose(),G.map=new ls(s.x,s.y,we),G.map.texture.name=se.name+".shadowMap",G.camera.updateProjectionMatrix()}n.setRenderTarget(G.map),n.clear();const Me=G.getViewportCount();for(let we=0;we<Me;we++){const We=G.getViewport(we);o.set(r.x*We.x,r.y*We.y,r.x*We.z,r.y*We.w),z.viewport(o),G.updateMatrices(se,we),i=G.getFrustum(),E(P,D,G.camera,se,this.type)}G.isPointLightShadow!==!0&&this.type===ai&&M(G,D),G.needsUpdate=!1}m=this.type,p.needsUpdate=!1,n.setRenderTarget(Z,x,w)};function M(R,P){const D=e.update(_);u.defines.VSM_SAMPLES!==R.blurSamples&&(u.defines.VSM_SAMPLES=R.blurSamples,d.defines.VSM_SAMPLES=R.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new ls(s.x,s.y)),u.uniforms.shadow_pass.value=R.map.texture,u.uniforms.resolution.value=R.mapSize,u.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(P,null,D,u,_,null),d.uniforms.shadow_pass.value=R.mapPass.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(P,null,D,d,_,null)}function v(R,P,D,Z){let x=null;const w=D.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(w!==void 0)x=w;else if(x=D.isPointLight===!0?l:a,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const z=x.uuid,W=P.uuid;let $=c[z];$===void 0&&($={},c[z]=$);let ae=$[W];ae===void 0&&(ae=x.clone(),$[W]=ae,P.addEventListener("dispose",U)),x=ae}if(x.visible=P.visible,x.wireframe=P.wireframe,Z===ai?x.side=P.shadowSide!==null?P.shadowSide:P.side:x.side=P.shadowSide!==null?P.shadowSide:f[P.side],x.alphaMap=P.alphaMap,x.alphaTest=P.alphaTest,x.map=P.map,x.clipShadows=P.clipShadows,x.clippingPlanes=P.clippingPlanes,x.clipIntersection=P.clipIntersection,x.displacementMap=P.displacementMap,x.displacementScale=P.displacementScale,x.displacementBias=P.displacementBias,x.wireframeLinewidth=P.wireframeLinewidth,x.linewidth=P.linewidth,D.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const z=n.properties.get(x);z.light=D}return x}function E(R,P,D,Z,x){if(R.visible===!1)return;if(R.layers.test(P.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&x===ai)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,R.matrixWorld);const W=e.update(R),$=R.material;if(Array.isArray($)){const ae=W.groups;for(let V=0,se=ae.length;V<se;V++){const G=ae[V],_e=$[G.materialIndex];if(_e&&_e.visible){const Me=v(R,_e,Z,x);R.onBeforeShadow(n,R,P,D,W,Me,G),n.renderBufferDirect(D,null,W,Me,R,G),R.onAfterShadow(n,R,P,D,W,Me,G)}}}else if($.visible){const ae=v(R,$,Z,x);R.onBeforeShadow(n,R,P,D,W,ae,null),n.renderBufferDirect(D,null,W,ae,R,null),R.onAfterShadow(n,R,P,D,W,ae,null)}}const z=R.children;for(let W=0,$=z.length;W<$;W++)E(z[W],P,D,Z,x)}function U(R){R.target.removeEventListener("dispose",U);for(const D in c){const Z=c[D],x=R.target.uuid;x in Z&&(Z[x].dispose(),delete Z[x])}}}const tS={[Ol]:Fl,[kl]:Hl,[Bl]:Vl,[Gs]:zl,[Fl]:Ol,[Hl]:kl,[Vl]:Bl,[zl]:Gs};function nS(n){function e(){let O=!1;const Ae=new ct;let ee=null;const oe=new ct(0,0,0,0);return{setMask:function(be){ee!==be&&!O&&(n.colorMask(be,be,be,be),ee=be)},setLocked:function(be){O=be},setClear:function(be,Te,Qe,At,Zt){Zt===!0&&(be*=At,Te*=At,Qe*=At),Ae.set(be,Te,Qe,At),oe.equals(Ae)===!1&&(n.clearColor(be,Te,Qe,At),oe.copy(Ae))},reset:function(){O=!1,ee=null,oe.set(-1,0,0,0)}}}function t(){let O=!1,Ae=!1,ee=null,oe=null,be=null;return{setReversed:function(Te){Ae=Te},setTest:function(Te){Te?Se(n.DEPTH_TEST):xe(n.DEPTH_TEST)},setMask:function(Te){ee!==Te&&!O&&(n.depthMask(Te),ee=Te)},setFunc:function(Te){if(Ae&&(Te=tS[Te]),oe!==Te){switch(Te){case Ol:n.depthFunc(n.NEVER);break;case Fl:n.depthFunc(n.ALWAYS);break;case kl:n.depthFunc(n.LESS);break;case Gs:n.depthFunc(n.LEQUAL);break;case Bl:n.depthFunc(n.EQUAL);break;case zl:n.depthFunc(n.GEQUAL);break;case Hl:n.depthFunc(n.GREATER);break;case Vl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}oe=Te}},setLocked:function(Te){O=Te},setClear:function(Te){be!==Te&&(n.clearDepth(Te),be=Te)},reset:function(){O=!1,ee=null,oe=null,be=null}}}function i(){let O=!1,Ae=null,ee=null,oe=null,be=null,Te=null,Qe=null,At=null,Zt=null;return{setTest:function(et){O||(et?Se(n.STENCIL_TEST):xe(n.STENCIL_TEST))},setMask:function(et){Ae!==et&&!O&&(n.stencilMask(et),Ae=et)},setFunc:function(et,Qt,Qn){(ee!==et||oe!==Qt||be!==Qn)&&(n.stencilFunc(et,Qt,Qn),ee=et,oe=Qt,be=Qn)},setOp:function(et,Qt,Qn){(Te!==et||Qe!==Qt||At!==Qn)&&(n.stencilOp(et,Qt,Qn),Te=et,Qe=Qt,At=Qn)},setLocked:function(et){O=et},setClear:function(et){Zt!==et&&(n.clearStencil(et),Zt=et)},reset:function(){O=!1,Ae=null,ee=null,oe=null,be=null,Te=null,Qe=null,At=null,Zt=null}}}const s=new e,r=new t,o=new i,a=new WeakMap,l=new WeakMap;let c={},h={},f=new WeakMap,u=[],d=null,g=!1,_=null,p=null,m=null,M=null,v=null,E=null,U=null,R=new $e(0,0,0),P=0,D=!1,Z=null,x=null,w=null,z=null,W=null;const $=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ae=!1,V=0;const se=n.getParameter(n.VERSION);se.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(se)[1]),ae=V>=1):se.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(se)[1]),ae=V>=2);let G=null,_e={};const Me=n.getParameter(n.SCISSOR_BOX),we=n.getParameter(n.VIEWPORT),We=new ct().fromArray(Me),Ze=new ct().fromArray(we);function ie(O,Ae,ee,oe){const be=new Uint8Array(4),Te=n.createTexture();n.bindTexture(O,Te),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Qe=0;Qe<ee;Qe++)O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?n.texImage3D(Ae,0,n.RGBA,1,1,oe,0,n.RGBA,n.UNSIGNED_BYTE,be):n.texImage2D(Ae+Qe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,be);return Te}const he={};he[n.TEXTURE_2D]=ie(n.TEXTURE_2D,n.TEXTURE_2D,1),he[n.TEXTURE_CUBE_MAP]=ie(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),he[n.TEXTURE_2D_ARRAY]=ie(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),he[n.TEXTURE_3D]=ie(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),Se(n.DEPTH_TEST),r.setFunc(Gs),X(!1),J(tu),Se(n.CULL_FACE),S(Li);function Se(O){c[O]!==!0&&(n.enable(O),c[O]=!0)}function xe(O){c[O]!==!1&&(n.disable(O),c[O]=!1)}function me(O,Ae){return h[O]!==Ae?(n.bindFramebuffer(O,Ae),h[O]=Ae,O===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=Ae),O===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=Ae),!0):!1}function I(O,Ae){let ee=u,oe=!1;if(O){ee=f.get(Ae),ee===void 0&&(ee=[],f.set(Ae,ee));const be=O.textures;if(ee.length!==be.length||ee[0]!==n.COLOR_ATTACHMENT0){for(let Te=0,Qe=be.length;Te<Qe;Te++)ee[Te]=n.COLOR_ATTACHMENT0+Te;ee.length=be.length,oe=!0}}else ee[0]!==n.BACK&&(ee[0]=n.BACK,oe=!0);oe&&n.drawBuffers(ee)}function ze(O){return d!==O?(n.useProgram(O),d=O,!0):!1}const C={[Ji]:n.FUNC_ADD,[xg]:n.FUNC_SUBTRACT,[yg]:n.FUNC_REVERSE_SUBTRACT};C[Mg]=n.MIN,C[Sg]=n.MAX;const T={[bg]:n.ZERO,[Eg]:n.ONE,[wg]:n.SRC_COLOR,[Nl]:n.SRC_ALPHA,[Lg]:n.SRC_ALPHA_SATURATE,[Cg]:n.DST_COLOR,[Tg]:n.DST_ALPHA,[Ag]:n.ONE_MINUS_SRC_COLOR,[Ul]:n.ONE_MINUS_SRC_ALPHA,[Pg]:n.ONE_MINUS_DST_COLOR,[Rg]:n.ONE_MINUS_DST_ALPHA,[Ig]:n.CONSTANT_COLOR,[Dg]:n.ONE_MINUS_CONSTANT_COLOR,[Ng]:n.CONSTANT_ALPHA,[Ug]:n.ONE_MINUS_CONSTANT_ALPHA};function S(O,Ae,ee,oe,be,Te,Qe,At,Zt,et){if(O===Li){g===!0&&(xe(n.BLEND),g=!1);return}if(g===!1&&(Se(n.BLEND),g=!0),O!==vg){if(O!==_||et!==D){if((p!==Ji||v!==Ji)&&(n.blendEquation(n.FUNC_ADD),p=Ji,v=Ji),et)switch(O){case Fs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case nu:n.blendFunc(n.ONE,n.ONE);break;case iu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case su:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Fs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case nu:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case iu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case su:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}m=null,M=null,E=null,U=null,R.set(0,0,0),P=0,_=O,D=et}return}be=be||Ae,Te=Te||ee,Qe=Qe||oe,(Ae!==p||be!==v)&&(n.blendEquationSeparate(C[Ae],C[be]),p=Ae,v=be),(ee!==m||oe!==M||Te!==E||Qe!==U)&&(n.blendFuncSeparate(T[ee],T[oe],T[Te],T[Qe]),m=ee,M=oe,E=Te,U=Qe),(At.equals(R)===!1||Zt!==P)&&(n.blendColor(At.r,At.g,At.b,Zt),R.copy(At),P=Zt),_=O,D=!1}function ne(O,Ae){O.side===Vt?xe(n.CULL_FACE):Se(n.CULL_FACE);let ee=O.side===sn;Ae&&(ee=!ee),X(ee),O.blending===Fs&&O.transparent===!1?S(Li):S(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),r.setFunc(O.depthFunc),r.setTest(O.depthTest),r.setMask(O.depthWrite),s.setMask(O.colorWrite);const oe=O.stencilWrite;o.setTest(oe),oe&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),re(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?Se(n.SAMPLE_ALPHA_TO_COVERAGE):xe(n.SAMPLE_ALPHA_TO_COVERAGE)}function X(O){Z!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),Z=O)}function J(O){O!==mg?(Se(n.CULL_FACE),O!==x&&(O===tu?n.cullFace(n.BACK):O===gg?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):xe(n.CULL_FACE),x=O}function te(O){O!==w&&(ae&&n.lineWidth(O),w=O)}function re(O,Ae,ee){O?(Se(n.POLYGON_OFFSET_FILL),(z!==Ae||W!==ee)&&(n.polygonOffset(Ae,ee),z=Ae,W=ee)):xe(n.POLYGON_OFFSET_FILL)}function Q(O){O?Se(n.SCISSOR_TEST):xe(n.SCISSOR_TEST)}function b(O){O===void 0&&(O=n.TEXTURE0+$-1),G!==O&&(n.activeTexture(O),G=O)}function y(O,Ae,ee){ee===void 0&&(G===null?ee=n.TEXTURE0+$-1:ee=G);let oe=_e[ee];oe===void 0&&(oe={type:void 0,texture:void 0},_e[ee]=oe),(oe.type!==O||oe.texture!==Ae)&&(G!==ee&&(n.activeTexture(ee),G=ee),n.bindTexture(O,Ae||he[O]),oe.type=O,oe.texture=Ae)}function L(){const O=_e[G];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function B(){try{n.compressedTexImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function K(){try{n.compressedTexImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function q(){try{n.texSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function de(){try{n.texSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function le(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ue(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ke(){try{n.texStorage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ce(){try{n.texStorage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ye(){try{n.texImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function De(){try{n.texImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function He(O){We.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),We.copy(O))}function ge(O){Ze.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),Ze.copy(O))}function Xe(O,Ae){let ee=l.get(Ae);ee===void 0&&(ee=new WeakMap,l.set(Ae,ee));let oe=ee.get(O);oe===void 0&&(oe=n.getUniformBlockIndex(Ae,O.name),ee.set(O,oe))}function Ye(O,Ae){const oe=l.get(Ae).get(O);a.get(Ae)!==oe&&(n.uniformBlockBinding(Ae,oe,O.__bindingPointIndex),a.set(Ae,oe))}function at(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},G=null,_e={},h={},f=new WeakMap,u=[],d=null,g=!1,_=null,p=null,m=null,M=null,v=null,E=null,U=null,R=new $e(0,0,0),P=0,D=!1,Z=null,x=null,w=null,z=null,W=null,We.set(0,0,n.canvas.width,n.canvas.height),Ze.set(0,0,n.canvas.width,n.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:Se,disable:xe,bindFramebuffer:me,drawBuffers:I,useProgram:ze,setBlending:S,setMaterial:ne,setFlipSided:X,setCullFace:J,setLineWidth:te,setPolygonOffset:re,setScissorTest:Q,activeTexture:b,bindTexture:y,unbindTexture:L,compressedTexImage2D:B,compressedTexImage3D:K,texImage2D:ye,texImage3D:De,updateUBOMapping:Xe,uniformBlockBinding:Ye,texStorage2D:ke,texStorage3D:ce,texSubImage2D:q,texSubImage3D:de,compressedTexSubImage2D:le,compressedTexSubImage3D:ue,scissor:He,viewport:ge,reset:at}}function ju(n,e,t,i){const s=iS(i);switch(t){case Dd:return n*e;case Ud:return n*e;case Od:return n*e*2;case Fd:return n*e/s.components*s.byteLength;case $c:return n*e/s.components*s.byteLength;case kd:return n*e*2/s.components*s.byteLength;case Jc:return n*e*2/s.components*s.byteLength;case Nd:return n*e*3/s.components*s.byteLength;case Pn:return n*e*4/s.components*s.byteLength;case Zc:return n*e*4/s.components*s.byteLength;case Po:case Lo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Io:case Do:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case jl:case $l:return Math.max(n,16)*Math.max(e,8)/4;case ql:case Kl:return Math.max(n,8)*Math.max(e,8)/2;case Jl:case Zl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ql:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ec:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case tc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case nc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case ic:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case sc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case rc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case oc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case ac:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case lc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case cc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case hc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case uc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case fc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case dc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case No:case pc:case mc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Bd:case gc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case _c:case vc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function iS(n){switch(n){case gi:case Pd:return{byteLength:1,components:1};case Nr:case Ld:case Gr:return{byteLength:2,components:1};case jc:case Kc:return{byteLength:2,components:4};case as:case qc:case di:return{byteLength:4,components:1};case Id:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function sS(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Re,h=new WeakMap;let f;const u=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,y){return d?new OffscreenCanvas(b,y):Zo("canvas")}function _(b,y,L){let B=1;const K=Q(b);if((K.width>L||K.height>L)&&(B=L/Math.max(K.width,K.height)),B<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const q=Math.floor(B*K.width),de=Math.floor(B*K.height);f===void 0&&(f=g(q,de));const le=y?g(q,de):f;return le.width=q,le.height=de,le.getContext("2d").drawImage(b,0,0,q,de),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+q+"x"+de+")."),le}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),b;return b}function p(b){return b.generateMipmaps&&b.minFilter!==$t&&b.minFilter!==Rn}function m(b){n.generateMipmap(b)}function M(b,y,L,B,K=!1){if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let q=y;if(y===n.RED&&(L===n.FLOAT&&(q=n.R32F),L===n.HALF_FLOAT&&(q=n.R16F),L===n.UNSIGNED_BYTE&&(q=n.R8)),y===n.RED_INTEGER&&(L===n.UNSIGNED_BYTE&&(q=n.R8UI),L===n.UNSIGNED_SHORT&&(q=n.R16UI),L===n.UNSIGNED_INT&&(q=n.R32UI),L===n.BYTE&&(q=n.R8I),L===n.SHORT&&(q=n.R16I),L===n.INT&&(q=n.R32I)),y===n.RG&&(L===n.FLOAT&&(q=n.RG32F),L===n.HALF_FLOAT&&(q=n.RG16F),L===n.UNSIGNED_BYTE&&(q=n.RG8)),y===n.RG_INTEGER&&(L===n.UNSIGNED_BYTE&&(q=n.RG8UI),L===n.UNSIGNED_SHORT&&(q=n.RG16UI),L===n.UNSIGNED_INT&&(q=n.RG32UI),L===n.BYTE&&(q=n.RG8I),L===n.SHORT&&(q=n.RG16I),L===n.INT&&(q=n.RG32I)),y===n.RGB_INTEGER&&(L===n.UNSIGNED_BYTE&&(q=n.RGB8UI),L===n.UNSIGNED_SHORT&&(q=n.RGB16UI),L===n.UNSIGNED_INT&&(q=n.RGB32UI),L===n.BYTE&&(q=n.RGB8I),L===n.SHORT&&(q=n.RGB16I),L===n.INT&&(q=n.RGB32I)),y===n.RGBA_INTEGER&&(L===n.UNSIGNED_BYTE&&(q=n.RGBA8UI),L===n.UNSIGNED_SHORT&&(q=n.RGBA16UI),L===n.UNSIGNED_INT&&(q=n.RGBA32UI),L===n.BYTE&&(q=n.RGBA8I),L===n.SHORT&&(q=n.RGBA16I),L===n.INT&&(q=n.RGBA32I)),y===n.RGB&&L===n.UNSIGNED_INT_5_9_9_9_REV&&(q=n.RGB9_E5),y===n.RGBA){const de=K?jo:ot.getTransfer(B);L===n.FLOAT&&(q=n.RGBA32F),L===n.HALF_FLOAT&&(q=n.RGBA16F),L===n.UNSIGNED_BYTE&&(q=de===gt?n.SRGB8_ALPHA8:n.RGBA8),L===n.UNSIGNED_SHORT_4_4_4_4&&(q=n.RGBA4),L===n.UNSIGNED_SHORT_5_5_5_1&&(q=n.RGB5_A1)}return(q===n.R16F||q===n.R32F||q===n.RG16F||q===n.RG32F||q===n.RGBA16F||q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function v(b,y){let L;return b?y===null||y===as||y===Ys?L=n.DEPTH24_STENCIL8:y===di?L=n.DEPTH32F_STENCIL8:y===Nr&&(L=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===as||y===Ys?L=n.DEPTH_COMPONENT24:y===di?L=n.DEPTH_COMPONENT32F:y===Nr&&(L=n.DEPTH_COMPONENT16),L}function E(b,y){return p(b)===!0||b.isFramebufferTexture&&b.minFilter!==$t&&b.minFilter!==Rn?Math.log2(Math.max(y.width,y.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?y.mipmaps.length:1}function U(b){const y=b.target;y.removeEventListener("dispose",U),P(y),y.isVideoTexture&&h.delete(y)}function R(b){const y=b.target;y.removeEventListener("dispose",R),Z(y)}function P(b){const y=i.get(b);if(y.__webglInit===void 0)return;const L=b.source,B=u.get(L);if(B){const K=B[y.__cacheKey];K.usedTimes--,K.usedTimes===0&&D(b),Object.keys(B).length===0&&u.delete(L)}i.remove(b)}function D(b){const y=i.get(b);n.deleteTexture(y.__webglTexture);const L=b.source,B=u.get(L);delete B[y.__cacheKey],o.memory.textures--}function Z(b){const y=i.get(b);if(b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let B=0;B<6;B++){if(Array.isArray(y.__webglFramebuffer[B]))for(let K=0;K<y.__webglFramebuffer[B].length;K++)n.deleteFramebuffer(y.__webglFramebuffer[B][K]);else n.deleteFramebuffer(y.__webglFramebuffer[B]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[B])}else{if(Array.isArray(y.__webglFramebuffer))for(let B=0;B<y.__webglFramebuffer.length;B++)n.deleteFramebuffer(y.__webglFramebuffer[B]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let B=0;B<y.__webglColorRenderbuffer.length;B++)y.__webglColorRenderbuffer[B]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[B]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const L=b.textures;for(let B=0,K=L.length;B<K;B++){const q=i.get(L[B]);q.__webglTexture&&(n.deleteTexture(q.__webglTexture),o.memory.textures--),i.remove(L[B])}i.remove(b)}let x=0;function w(){x=0}function z(){const b=x;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),x+=1,b}function W(b){const y=[];return y.push(b.wrapS),y.push(b.wrapT),y.push(b.wrapR||0),y.push(b.magFilter),y.push(b.minFilter),y.push(b.anisotropy),y.push(b.internalFormat),y.push(b.format),y.push(b.type),y.push(b.generateMipmaps),y.push(b.premultiplyAlpha),y.push(b.flipY),y.push(b.unpackAlignment),y.push(b.colorSpace),y.join()}function $(b,y){const L=i.get(b);if(b.isVideoTexture&&te(b),b.isRenderTargetTexture===!1&&b.version>0&&L.__version!==b.version){const B=b.image;if(B===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(B.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ze(L,b,y);return}}t.bindTexture(n.TEXTURE_2D,L.__webglTexture,n.TEXTURE0+y)}function ae(b,y){const L=i.get(b);if(b.version>0&&L.__version!==b.version){Ze(L,b,y);return}t.bindTexture(n.TEXTURE_2D_ARRAY,L.__webglTexture,n.TEXTURE0+y)}function V(b,y){const L=i.get(b);if(b.version>0&&L.__version!==b.version){Ze(L,b,y);return}t.bindTexture(n.TEXTURE_3D,L.__webglTexture,n.TEXTURE0+y)}function se(b,y){const L=i.get(b);if(b.version>0&&L.__version!==b.version){ie(L,b,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+y)}const G={[Xl]:n.REPEAT,[ts]:n.CLAMP_TO_EDGE,[Yl]:n.MIRRORED_REPEAT},_e={[$t]:n.NEAREST,[Wg]:n.NEAREST_MIPMAP_NEAREST,[eo]:n.NEAREST_MIPMAP_LINEAR,[Rn]:n.LINEAR,[ka]:n.LINEAR_MIPMAP_NEAREST,[ns]:n.LINEAR_MIPMAP_LINEAR},Me={[jg]:n.NEVER,[e_]:n.ALWAYS,[Kg]:n.LESS,[Hd]:n.LEQUAL,[$g]:n.EQUAL,[Qg]:n.GEQUAL,[Jg]:n.GREATER,[Zg]:n.NOTEQUAL};function we(b,y){if(y.type===di&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Rn||y.magFilter===ka||y.magFilter===eo||y.magFilter===ns||y.minFilter===Rn||y.minFilter===ka||y.minFilter===eo||y.minFilter===ns)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(b,n.TEXTURE_WRAP_S,G[y.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,G[y.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,G[y.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,_e[y.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,_e[y.minFilter]),y.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,Me[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===$t||y.minFilter!==eo&&y.minFilter!==ns||y.type===di&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const L=e.get("EXT_texture_filter_anisotropic");n.texParameterf(b,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function We(b,y){let L=!1;b.__webglInit===void 0&&(b.__webglInit=!0,y.addEventListener("dispose",U));const B=y.source;let K=u.get(B);K===void 0&&(K={},u.set(B,K));const q=W(y);if(q!==b.__cacheKey){K[q]===void 0&&(K[q]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,L=!0),K[q].usedTimes++;const de=K[b.__cacheKey];de!==void 0&&(K[b.__cacheKey].usedTimes--,de.usedTimes===0&&D(y)),b.__cacheKey=q,b.__webglTexture=K[q].texture}return L}function Ze(b,y,L){let B=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(B=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(B=n.TEXTURE_3D);const K=We(b,y),q=y.source;t.bindTexture(B,b.__webglTexture,n.TEXTURE0+L);const de=i.get(q);if(q.version!==de.__version||K===!0){t.activeTexture(n.TEXTURE0+L);const le=ot.getPrimaries(ot.workingColorSpace),ue=y.colorSpace===Ri?null:ot.getPrimaries(y.colorSpace),ke=y.colorSpace===Ri||le===ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);let ce=_(y.image,!1,s.maxTextureSize);ce=re(y,ce);const ye=r.convert(y.format,y.colorSpace),De=r.convert(y.type);let He=M(y.internalFormat,ye,De,y.colorSpace,y.isVideoTexture);we(B,y);let ge;const Xe=y.mipmaps,Ye=y.isVideoTexture!==!0,at=de.__version===void 0||K===!0,O=q.dataReady,Ae=E(y,ce);if(y.isDepthTexture)He=v(y.format===qs,y.type),at&&(Ye?t.texStorage2D(n.TEXTURE_2D,1,He,ce.width,ce.height):t.texImage2D(n.TEXTURE_2D,0,He,ce.width,ce.height,0,ye,De,null));else if(y.isDataTexture)if(Xe.length>0){Ye&&at&&t.texStorage2D(n.TEXTURE_2D,Ae,He,Xe[0].width,Xe[0].height);for(let ee=0,oe=Xe.length;ee<oe;ee++)ge=Xe[ee],Ye?O&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,ge.width,ge.height,ye,De,ge.data):t.texImage2D(n.TEXTURE_2D,ee,He,ge.width,ge.height,0,ye,De,ge.data);y.generateMipmaps=!1}else Ye?(at&&t.texStorage2D(n.TEXTURE_2D,Ae,He,ce.width,ce.height),O&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ce.width,ce.height,ye,De,ce.data)):t.texImage2D(n.TEXTURE_2D,0,He,ce.width,ce.height,0,ye,De,ce.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ye&&at&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ae,He,Xe[0].width,Xe[0].height,ce.depth);for(let ee=0,oe=Xe.length;ee<oe;ee++)if(ge=Xe[ee],y.format!==Pn)if(ye!==null)if(Ye){if(O)if(y.layerUpdates.size>0){const be=ju(ge.width,ge.height,y.format,y.type);for(const Te of y.layerUpdates){const Qe=ge.data.subarray(Te*be/ge.data.BYTES_PER_ELEMENT,(Te+1)*be/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,Te,ge.width,ge.height,1,ye,Qe,0,0)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,0,ge.width,ge.height,ce.depth,ye,ge.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ee,He,ge.width,ge.height,ce.depth,0,ge.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ye?O&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,0,ge.width,ge.height,ce.depth,ye,De,ge.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ee,He,ge.width,ge.height,ce.depth,0,ye,De,ge.data)}else{Ye&&at&&t.texStorage2D(n.TEXTURE_2D,Ae,He,Xe[0].width,Xe[0].height);for(let ee=0,oe=Xe.length;ee<oe;ee++)ge=Xe[ee],y.format!==Pn?ye!==null?Ye?O&&t.compressedTexSubImage2D(n.TEXTURE_2D,ee,0,0,ge.width,ge.height,ye,ge.data):t.compressedTexImage2D(n.TEXTURE_2D,ee,He,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?O&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,ge.width,ge.height,ye,De,ge.data):t.texImage2D(n.TEXTURE_2D,ee,He,ge.width,ge.height,0,ye,De,ge.data)}else if(y.isDataArrayTexture)if(Ye){if(at&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ae,He,ce.width,ce.height,ce.depth),O)if(y.layerUpdates.size>0){const ee=ju(ce.width,ce.height,y.format,y.type);for(const oe of y.layerUpdates){const be=ce.data.subarray(oe*ee/ce.data.BYTES_PER_ELEMENT,(oe+1)*ee/ce.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,oe,ce.width,ce.height,1,ye,De,be)}y.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,ye,De,ce.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,He,ce.width,ce.height,ce.depth,0,ye,De,ce.data);else if(y.isData3DTexture)Ye?(at&&t.texStorage3D(n.TEXTURE_3D,Ae,He,ce.width,ce.height,ce.depth),O&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,ye,De,ce.data)):t.texImage3D(n.TEXTURE_3D,0,He,ce.width,ce.height,ce.depth,0,ye,De,ce.data);else if(y.isFramebufferTexture){if(at)if(Ye)t.texStorage2D(n.TEXTURE_2D,Ae,He,ce.width,ce.height);else{let ee=ce.width,oe=ce.height;for(let be=0;be<Ae;be++)t.texImage2D(n.TEXTURE_2D,be,He,ee,oe,0,ye,De,null),ee>>=1,oe>>=1}}else if(Xe.length>0){if(Ye&&at){const ee=Q(Xe[0]);t.texStorage2D(n.TEXTURE_2D,Ae,He,ee.width,ee.height)}for(let ee=0,oe=Xe.length;ee<oe;ee++)ge=Xe[ee],Ye?O&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,ye,De,ge):t.texImage2D(n.TEXTURE_2D,ee,He,ye,De,ge);y.generateMipmaps=!1}else if(Ye){if(at){const ee=Q(ce);t.texStorage2D(n.TEXTURE_2D,Ae,He,ee.width,ee.height)}O&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ye,De,ce)}else t.texImage2D(n.TEXTURE_2D,0,He,ye,De,ce);p(y)&&m(B),de.__version=q.version,y.onUpdate&&y.onUpdate(y)}b.__version=y.version}function ie(b,y,L){if(y.image.length!==6)return;const B=We(b,y),K=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+L);const q=i.get(K);if(K.version!==q.__version||B===!0){t.activeTexture(n.TEXTURE0+L);const de=ot.getPrimaries(ot.workingColorSpace),le=y.colorSpace===Ri?null:ot.getPrimaries(y.colorSpace),ue=y.colorSpace===Ri||de===le?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const ke=y.isCompressedTexture||y.image[0].isCompressedTexture,ce=y.image[0]&&y.image[0].isDataTexture,ye=[];for(let oe=0;oe<6;oe++)!ke&&!ce?ye[oe]=_(y.image[oe],!0,s.maxCubemapSize):ye[oe]=ce?y.image[oe].image:y.image[oe],ye[oe]=re(y,ye[oe]);const De=ye[0],He=r.convert(y.format,y.colorSpace),ge=r.convert(y.type),Xe=M(y.internalFormat,He,ge,y.colorSpace),Ye=y.isVideoTexture!==!0,at=q.__version===void 0||B===!0,O=K.dataReady;let Ae=E(y,De);we(n.TEXTURE_CUBE_MAP,y);let ee;if(ke){Ye&&at&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ae,Xe,De.width,De.height);for(let oe=0;oe<6;oe++){ee=ye[oe].mipmaps;for(let be=0;be<ee.length;be++){const Te=ee[be];y.format!==Pn?He!==null?Ye?O&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,be,0,0,Te.width,Te.height,He,Te.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,be,Xe,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ye?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,be,0,0,Te.width,Te.height,He,ge,Te.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,be,Xe,Te.width,Te.height,0,He,ge,Te.data)}}}else{if(ee=y.mipmaps,Ye&&at){ee.length>0&&Ae++;const oe=Q(ye[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ae,Xe,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(ce){Ye?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,ye[oe].width,ye[oe].height,He,ge,ye[oe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,Xe,ye[oe].width,ye[oe].height,0,He,ge,ye[oe].data);for(let be=0;be<ee.length;be++){const Qe=ee[be].image[oe].image;Ye?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,be+1,0,0,Qe.width,Qe.height,He,ge,Qe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,be+1,Xe,Qe.width,Qe.height,0,He,ge,Qe.data)}}else{Ye?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,He,ge,ye[oe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,Xe,He,ge,ye[oe]);for(let be=0;be<ee.length;be++){const Te=ee[be];Ye?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,be+1,0,0,He,ge,Te.image[oe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,be+1,Xe,He,ge,Te.image[oe])}}}p(y)&&m(n.TEXTURE_CUBE_MAP),q.__version=K.version,y.onUpdate&&y.onUpdate(y)}b.__version=y.version}function he(b,y,L,B,K,q){const de=r.convert(L.format,L.colorSpace),le=r.convert(L.type),ue=M(L.internalFormat,de,le,L.colorSpace);if(!i.get(y).__hasExternalTextures){const ce=Math.max(1,y.width>>q),ye=Math.max(1,y.height>>q);K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?t.texImage3D(K,q,ue,ce,ye,y.depth,0,de,le,null):t.texImage2D(K,q,ue,ce,ye,0,de,le,null)}t.bindFramebuffer(n.FRAMEBUFFER,b),J(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,B,K,i.get(L).__webglTexture,0,X(y)):(K===n.TEXTURE_2D||K>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,B,K,i.get(L).__webglTexture,q),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Se(b,y,L){if(n.bindRenderbuffer(n.RENDERBUFFER,b),y.depthBuffer){const B=y.depthTexture,K=B&&B.isDepthTexture?B.type:null,q=v(y.stencilBuffer,K),de=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,le=X(y);J(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,le,q,y.width,y.height):L?n.renderbufferStorageMultisample(n.RENDERBUFFER,le,q,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,q,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,de,n.RENDERBUFFER,b)}else{const B=y.textures;for(let K=0;K<B.length;K++){const q=B[K],de=r.convert(q.format,q.colorSpace),le=r.convert(q.type),ue=M(q.internalFormat,de,le,q.colorSpace),ke=X(y);L&&J(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ke,ue,y.width,y.height):J(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ke,ue,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,ue,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function xe(b,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,b),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),$(y.depthTexture,0);const B=i.get(y.depthTexture).__webglTexture,K=X(y);if(y.depthTexture.format===ks)J(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,B,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,B,0);else if(y.depthTexture.format===qs)J(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,B,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,B,0);else throw new Error("Unknown depthTexture format")}function me(b){const y=i.get(b),L=b.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==b.depthTexture){const B=b.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),B){const K=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,B.removeEventListener("dispose",K)};B.addEventListener("dispose",K),y.__depthDisposeCallback=K}y.__boundDepthTexture=B}if(b.depthTexture&&!y.__autoAllocateDepthBuffer){if(L)throw new Error("target.depthTexture not supported in Cube render targets");xe(y.__webglFramebuffer,b)}else if(L){y.__webglDepthbuffer=[];for(let B=0;B<6;B++)if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[B]),y.__webglDepthbuffer[B]===void 0)y.__webglDepthbuffer[B]=n.createRenderbuffer(),Se(y.__webglDepthbuffer[B],b,!1);else{const K=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=y.__webglDepthbuffer[B];n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,q)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),Se(y.__webglDepthbuffer,b,!1);else{const B=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,K=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,K),n.framebufferRenderbuffer(n.FRAMEBUFFER,B,n.RENDERBUFFER,K)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function I(b,y,L){const B=i.get(b);y!==void 0&&he(B.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),L!==void 0&&me(b)}function ze(b){const y=b.texture,L=i.get(b),B=i.get(y);b.addEventListener("dispose",R);const K=b.textures,q=b.isWebGLCubeRenderTarget===!0,de=K.length>1;if(de||(B.__webglTexture===void 0&&(B.__webglTexture=n.createTexture()),B.__version=y.version,o.memory.textures++),q){L.__webglFramebuffer=[];for(let le=0;le<6;le++)if(y.mipmaps&&y.mipmaps.length>0){L.__webglFramebuffer[le]=[];for(let ue=0;ue<y.mipmaps.length;ue++)L.__webglFramebuffer[le][ue]=n.createFramebuffer()}else L.__webglFramebuffer[le]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){L.__webglFramebuffer=[];for(let le=0;le<y.mipmaps.length;le++)L.__webglFramebuffer[le]=n.createFramebuffer()}else L.__webglFramebuffer=n.createFramebuffer();if(de)for(let le=0,ue=K.length;le<ue;le++){const ke=i.get(K[le]);ke.__webglTexture===void 0&&(ke.__webglTexture=n.createTexture(),o.memory.textures++)}if(b.samples>0&&J(b)===!1){L.__webglMultisampledFramebuffer=n.createFramebuffer(),L.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let le=0;le<K.length;le++){const ue=K[le];L.__webglColorRenderbuffer[le]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,L.__webglColorRenderbuffer[le]);const ke=r.convert(ue.format,ue.colorSpace),ce=r.convert(ue.type),ye=M(ue.internalFormat,ke,ce,ue.colorSpace,b.isXRRenderTarget===!0),De=X(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,De,ye,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,L.__webglColorRenderbuffer[le])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(L.__webglDepthRenderbuffer=n.createRenderbuffer(),Se(L.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(q){t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture),we(n.TEXTURE_CUBE_MAP,y);for(let le=0;le<6;le++)if(y.mipmaps&&y.mipmaps.length>0)for(let ue=0;ue<y.mipmaps.length;ue++)he(L.__webglFramebuffer[le][ue],b,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,ue);else he(L.__webglFramebuffer[le],b,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);p(y)&&m(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(de){for(let le=0,ue=K.length;le<ue;le++){const ke=K[le],ce=i.get(ke);t.bindTexture(n.TEXTURE_2D,ce.__webglTexture),we(n.TEXTURE_2D,ke),he(L.__webglFramebuffer,b,ke,n.COLOR_ATTACHMENT0+le,n.TEXTURE_2D,0),p(ke)&&m(n.TEXTURE_2D)}t.unbindTexture()}else{let le=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(le=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(le,B.__webglTexture),we(le,y),y.mipmaps&&y.mipmaps.length>0)for(let ue=0;ue<y.mipmaps.length;ue++)he(L.__webglFramebuffer[ue],b,y,n.COLOR_ATTACHMENT0,le,ue);else he(L.__webglFramebuffer,b,y,n.COLOR_ATTACHMENT0,le,0);p(y)&&m(le),t.unbindTexture()}b.depthBuffer&&me(b)}function C(b){const y=b.textures;for(let L=0,B=y.length;L<B;L++){const K=y[L];if(p(K)){const q=b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,de=i.get(K).__webglTexture;t.bindTexture(q,de),m(q),t.unbindTexture()}}}const T=[],S=[];function ne(b){if(b.samples>0){if(J(b)===!1){const y=b.textures,L=b.width,B=b.height;let K=n.COLOR_BUFFER_BIT;const q=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=i.get(b),le=y.length>1;if(le)for(let ue=0;ue<y.length;ue++)t.bindFramebuffer(n.FRAMEBUFFER,de.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,de.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let ue=0;ue<y.length;ue++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(K|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(K|=n.STENCIL_BUFFER_BIT)),le){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,de.__webglColorRenderbuffer[ue]);const ke=i.get(y[ue]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ke,0)}n.blitFramebuffer(0,0,L,B,0,0,L,B,K,n.NEAREST),l===!0&&(T.length=0,S.length=0,T.push(n.COLOR_ATTACHMENT0+ue),b.depthBuffer&&b.resolveDepthBuffer===!1&&(T.push(q),S.push(q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,S)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,T))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),le)for(let ue=0;ue<y.length;ue++){t.bindFramebuffer(n.FRAMEBUFFER,de.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,de.__webglColorRenderbuffer[ue]);const ke=i.get(y[ue]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,de.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,ke,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const y=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function X(b){return Math.min(s.maxSamples,b.samples)}function J(b){const y=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function te(b){const y=o.render.frame;h.get(b)!==y&&(h.set(b,y),b.update())}function re(b,y){const L=b.colorSpace,B=b.format,K=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||L!==Fi&&L!==Ri&&(ot.getTransfer(L)===gt?(B!==Pn||K!==gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",L)),y}function Q(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=w,this.setTexture2D=$,this.setTexture2DArray=ae,this.setTexture3D=V,this.setTextureCube=se,this.rebindTextures=I,this.setupRenderTarget=ze,this.updateRenderTargetMipmap=C,this.updateMultisampleRenderTarget=ne,this.setupDepthRenderbuffer=me,this.setupFrameBufferTexture=he,this.useMultisampledRTT=J}function rS(n,e){function t(i,s=Ri){let r;const o=ot.getTransfer(s);if(i===gi)return n.UNSIGNED_BYTE;if(i===jc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Kc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Id)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Pd)return n.BYTE;if(i===Ld)return n.SHORT;if(i===Nr)return n.UNSIGNED_SHORT;if(i===qc)return n.INT;if(i===as)return n.UNSIGNED_INT;if(i===di)return n.FLOAT;if(i===Gr)return n.HALF_FLOAT;if(i===Dd)return n.ALPHA;if(i===Nd)return n.RGB;if(i===Pn)return n.RGBA;if(i===Ud)return n.LUMINANCE;if(i===Od)return n.LUMINANCE_ALPHA;if(i===ks)return n.DEPTH_COMPONENT;if(i===qs)return n.DEPTH_STENCIL;if(i===Fd)return n.RED;if(i===$c)return n.RED_INTEGER;if(i===kd)return n.RG;if(i===Jc)return n.RG_INTEGER;if(i===Zc)return n.RGBA_INTEGER;if(i===Po||i===Lo||i===Io||i===Do)if(o===gt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Po)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Io)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Do)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Po)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Lo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Io)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Do)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ql||i===jl||i===Kl||i===$l)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ql)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===jl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Kl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===$l)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Jl||i===Zl||i===Ql)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Jl||i===Zl)return o===gt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ql)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ec||i===tc||i===nc||i===ic||i===sc||i===rc||i===oc||i===ac||i===lc||i===cc||i===hc||i===uc||i===fc||i===dc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===ec)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===tc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===nc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ic)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===sc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===rc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===oc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ac)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===lc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===cc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===hc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===uc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===fc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===dc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===No||i===pc||i===mc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===No)return o===gt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===pc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===mc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Bd||i===gc||i===_c||i===vc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===No)return r.COMPRESSED_RED_RGTC1_EXT;if(i===gc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===_c)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===vc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ys?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class oS extends _n{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class bt extends Dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const aS={type:"move"};class ml{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,i),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&u>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(aS)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new bt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const lS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cS=`
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

}`;class hS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new Jt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Oi({vertexShader:lS,fragmentShader:cS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Je(new fs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class uS extends Js{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,g=null;const _=new hS,p=t.getContextAttributes();let m=null,M=null;const v=[],E=[],U=new Re;let R=null;const P=new _n;P.layers.enable(1),P.viewport=new ct;const D=new _n;D.layers.enable(2),D.viewport=new ct;const Z=[P,D],x=new oS;x.layers.enable(1),x.layers.enable(2);let w=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let he=v[ie];return he===void 0&&(he=new ml,v[ie]=he),he.getTargetRaySpace()},this.getControllerGrip=function(ie){let he=v[ie];return he===void 0&&(he=new ml,v[ie]=he),he.getGripSpace()},this.getHand=function(ie){let he=v[ie];return he===void 0&&(he=new ml,v[ie]=he),he.getHandSpace()};function W(ie){const he=E.indexOf(ie.inputSource);if(he===-1)return;const Se=v[he];Se!==void 0&&(Se.update(ie.inputSource,ie.frame,c||o),Se.dispatchEvent({type:ie.type,data:ie.inputSource}))}function $(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",$),s.removeEventListener("inputsourceschange",ae);for(let ie=0;ie<v.length;ie++){const he=E[ie];he!==null&&(E[ie]=null,v[ie].disconnect(he))}w=null,z=null,_.reset(),e.setRenderTarget(m),d=null,u=null,f=null,s=null,M=null,Ze.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(U.width,U.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){r=ie,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){a=ie,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ie){c=ie},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(ie){if(s=ie,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",$),s.addEventListener("inputsourceschange",ae),p.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(U),s.renderState.layers===void 0){const he={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,he),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new ls(d.framebufferWidth,d.framebufferHeight,{format:Pn,type:gi,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let he=null,Se=null,xe=null;p.depth&&(xe=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=p.stencil?qs:ks,Se=p.stencil?Ys:as);const me={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:r};f=new XRWebGLBinding(s,t),u=f.createProjectionLayer(me),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),M=new ls(u.textureWidth,u.textureHeight,{format:Pn,type:gi,depthTexture:new Zd(u.textureWidth,u.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ze.setContext(s),Ze.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function ae(ie){for(let he=0;he<ie.removed.length;he++){const Se=ie.removed[he],xe=E.indexOf(Se);xe>=0&&(E[xe]=null,v[xe].disconnect(Se))}for(let he=0;he<ie.added.length;he++){const Se=ie.added[he];let xe=E.indexOf(Se);if(xe===-1){for(let I=0;I<v.length;I++)if(I>=E.length){E.push(Se),xe=I;break}else if(E[I]===null){E[I]=Se,xe=I;break}if(xe===-1)break}const me=v[xe];me&&me.connect(Se)}}const V=new N,se=new N;function G(ie,he,Se){V.setFromMatrixPosition(he.matrixWorld),se.setFromMatrixPosition(Se.matrixWorld);const xe=V.distanceTo(se),me=he.projectionMatrix.elements,I=Se.projectionMatrix.elements,ze=me[14]/(me[10]-1),C=me[14]/(me[10]+1),T=(me[9]+1)/me[5],S=(me[9]-1)/me[5],ne=(me[8]-1)/me[0],X=(I[8]+1)/I[0],J=ze*ne,te=ze*X,re=xe/(-ne+X),Q=re*-ne;if(he.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(Q),ie.translateZ(re),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),me[10]===-1)ie.projectionMatrix.copy(he.projectionMatrix),ie.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const b=ze+re,y=C+re,L=J-Q,B=te+(xe-Q),K=T*C/y*b,q=S*C/y*b;ie.projectionMatrix.makePerspective(L,B,K,q,b,y),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function _e(ie,he){he===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(he.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(s===null)return;let he=ie.near,Se=ie.far;_.texture!==null&&(_.depthNear>0&&(he=_.depthNear),_.depthFar>0&&(Se=_.depthFar)),x.near=D.near=P.near=he,x.far=D.far=P.far=Se,(w!==x.near||z!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),w=x.near,z=x.far);const xe=ie.parent,me=x.cameras;_e(x,xe);for(let I=0;I<me.length;I++)_e(me[I],xe);me.length===2?G(x,P,D):x.projectionMatrix.copy(P.projectionMatrix),Me(ie,x,xe)};function Me(ie,he,Se){Se===null?ie.matrix.copy(he.matrixWorld):(ie.matrix.copy(Se.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(he.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(he.projectionMatrix),ie.projectionMatrixInverse.copy(he.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=xc*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(ie){l=ie,u!==null&&(u.fixedFoveation=ie),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=ie)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let we=null;function We(ie,he){if(h=he.getViewerPose(c||o),g=he,h!==null){const Se=h.views;d!==null&&(e.setRenderTargetFramebuffer(M,d.framebuffer),e.setRenderTarget(M));let xe=!1;Se.length!==x.cameras.length&&(x.cameras.length=0,xe=!0);for(let I=0;I<Se.length;I++){const ze=Se[I];let C=null;if(d!==null)C=d.getViewport(ze);else{const S=f.getViewSubImage(u,ze);C=S.viewport,I===0&&(e.setRenderTargetTextures(M,S.colorTexture,u.ignoreDepthValues?void 0:S.depthStencilTexture),e.setRenderTarget(M))}let T=Z[I];T===void 0&&(T=new _n,T.layers.enable(I),T.viewport=new ct,Z[I]=T),T.matrix.fromArray(ze.transform.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale),T.projectionMatrix.fromArray(ze.projectionMatrix),T.projectionMatrixInverse.copy(T.projectionMatrix).invert(),T.viewport.set(C.x,C.y,C.width,C.height),I===0&&(x.matrix.copy(T.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),xe===!0&&x.cameras.push(T)}const me=s.enabledFeatures;if(me&&me.includes("depth-sensing")){const I=f.getDepthInformation(Se[0]);I&&I.isValid&&I.texture&&_.init(e,I,s.renderState)}}for(let Se=0;Se<v.length;Se++){const xe=E[Se],me=v[Se];xe!==null&&me!==void 0&&me.update(xe,he,c||o)}we&&we(ie,he),he.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:he}),g=null}const Ze=new Jd;Ze.setAnimationLoop(We),this.setAnimationLoop=function(ie){we=ie},this.dispose=function(){}}}const Yi=new Jn,fS=new dt;function dS(n,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,jd(n)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,M,v,E){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),f(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m)):m.isMeshStandardMaterial?(r(p,m),u(p,m),m.isMeshPhysicalMaterial&&d(p,m,E)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),_(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,M,v):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===sn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===sn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const M=e.get(m),v=M.envMap,E=M.envMapRotation;v&&(p.envMap.value=v,Yi.copy(E),Yi.x*=-1,Yi.y*=-1,Yi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Yi.y*=-1,Yi.z*=-1),p.envMapRotation.value.setFromMatrix4(fS.makeRotationFromEuler(Yi)),p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,M,v){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*M,p.scale.value=v*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function f(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,M){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===sn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const M=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function pS(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,v){const E=v.program;i.uniformBlockBinding(M,E)}function c(M,v){let E=s[M.id];E===void 0&&(g(M),E=h(M),s[M.id]=E,M.addEventListener("dispose",p));const U=v.program;i.updateUBOMapping(M,U);const R=e.render.frame;r[M.id]!==R&&(u(M),r[M.id]=R)}function h(M){const v=f();M.__bindingPointIndex=v;const E=n.createBuffer(),U=M.__size,R=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,U,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,E),E}function f(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){const v=s[M.id],E=M.uniforms,U=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let R=0,P=E.length;R<P;R++){const D=Array.isArray(E[R])?E[R]:[E[R]];for(let Z=0,x=D.length;Z<x;Z++){const w=D[Z];if(d(w,R,Z,U)===!0){const z=w.__offset,W=Array.isArray(w.value)?w.value:[w.value];let $=0;for(let ae=0;ae<W.length;ae++){const V=W[ae],se=_(V);typeof V=="number"||typeof V=="boolean"?(w.__data[0]=V,n.bufferSubData(n.UNIFORM_BUFFER,z+$,w.__data)):V.isMatrix3?(w.__data[0]=V.elements[0],w.__data[1]=V.elements[1],w.__data[2]=V.elements[2],w.__data[3]=0,w.__data[4]=V.elements[3],w.__data[5]=V.elements[4],w.__data[6]=V.elements[5],w.__data[7]=0,w.__data[8]=V.elements[6],w.__data[9]=V.elements[7],w.__data[10]=V.elements[8],w.__data[11]=0):(V.toArray(w.__data,$),$+=se.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,z,w.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(M,v,E,U){const R=M.value,P=v+"_"+E;if(U[P]===void 0)return typeof R=="number"||typeof R=="boolean"?U[P]=R:U[P]=R.clone(),!0;{const D=U[P];if(typeof R=="number"||typeof R=="boolean"){if(D!==R)return U[P]=R,!0}else if(D.equals(R)===!1)return D.copy(R),!0}return!1}function g(M){const v=M.uniforms;let E=0;const U=16;for(let P=0,D=v.length;P<D;P++){const Z=Array.isArray(v[P])?v[P]:[v[P]];for(let x=0,w=Z.length;x<w;x++){const z=Z[x],W=Array.isArray(z.value)?z.value:[z.value];for(let $=0,ae=W.length;$<ae;$++){const V=W[$],se=_(V),G=E%U,_e=G%se.boundary,Me=G+_e;E+=_e,Me!==0&&U-Me<se.storage&&(E+=U-Me),z.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=E,E+=se.storage}}}const R=E%U;return R>0&&(E+=U-R),M.__size=E,M.__cache={},this}function _(M){const v={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),v}function p(M){const v=M.target;v.removeEventListener("dispose",p);const E=o.indexOf(v.__bindingPointIndex);o.splice(E,1),n.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function m(){for(const M in s)n.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}class mS{constructor(e={}){const{canvas:t=n_(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let u;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=i.getContextAttributes().alpha}else u=o;const d=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const m=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=nn,this.toneMapping=Ii,this.toneMappingExposure=1;const v=this;let E=!1,U=0,R=0,P=null,D=-1,Z=null;const x=new ct,w=new ct;let z=null;const W=new $e(0);let $=0,ae=t.width,V=t.height,se=1,G=null,_e=null;const Me=new ct(0,0,ae,V),we=new ct(0,0,ae,V);let We=!1;const Ze=new nh;let ie=!1,he=!1;const Se=new dt,xe=new dt,me=new N,I=new ct,ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let C=!1;function T(){return P===null?se:1}let S=i;function ne(A,F){return t.getContext(A,F)}try{const A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Xc}`),t.addEventListener("webglcontextlost",oe,!1),t.addEventListener("webglcontextrestored",be,!1),t.addEventListener("webglcontextcreationerror",Te,!1),S===null){const F="webgl2";if(S=ne(F,A),S===null)throw ne(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let X,J,te,re,Q,b,y,L,B,K,q,de,le,ue,ke,ce,ye,De,He,ge,Xe,Ye,at,O;function Ae(){X=new yy(S),X.init(),Ye=new rS(S,X),J=new py(S,X,e,Ye),te=new nS(S),J.reverseDepthBuffer&&te.buffers.depth.setReversed(!0),re=new by(S),Q=new HM,b=new sS(S,X,te,Q,J,Ye,re),y=new gy(v),L=new xy(v),B=new P_(S),at=new fy(S,B),K=new My(S,B,re,at),q=new wy(S,K,B,re),He=new Ey(S,J,b),ce=new my(Q),de=new zM(v,y,L,X,J,at,ce),le=new dS(v,Q),ue=new GM,ke=new KM(X),De=new uy(v,y,L,te,q,u,l),ye=new eS(v,q,J),O=new pS(S,re,J,te),ge=new dy(S,X,re),Xe=new Sy(S,X,re),re.programs=de.programs,v.capabilities=J,v.extensions=X,v.properties=Q,v.renderLists=ue,v.shadowMap=ye,v.state=te,v.info=re}Ae();const ee=new uS(v,S);this.xr=ee,this.getContext=function(){return S},this.getContextAttributes=function(){return S.getContextAttributes()},this.forceContextLoss=function(){const A=X.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=X.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return se},this.setPixelRatio=function(A){A!==void 0&&(se=A,this.setSize(ae,V,!1))},this.getSize=function(A){return A.set(ae,V)},this.setSize=function(A,F,Y=!0){if(ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ae=A,V=F,t.width=Math.floor(A*se),t.height=Math.floor(F*se),Y===!0&&(t.style.width=A+"px",t.style.height=F+"px"),this.setViewport(0,0,A,F)},this.getDrawingBufferSize=function(A){return A.set(ae*se,V*se).floor()},this.setDrawingBufferSize=function(A,F,Y){ae=A,V=F,se=Y,t.width=Math.floor(A*Y),t.height=Math.floor(F*Y),this.setViewport(0,0,A,F)},this.getCurrentViewport=function(A){return A.copy(x)},this.getViewport=function(A){return A.copy(Me)},this.setViewport=function(A,F,Y,j){A.isVector4?Me.set(A.x,A.y,A.z,A.w):Me.set(A,F,Y,j),te.viewport(x.copy(Me).multiplyScalar(se).round())},this.getScissor=function(A){return A.copy(we)},this.setScissor=function(A,F,Y,j){A.isVector4?we.set(A.x,A.y,A.z,A.w):we.set(A,F,Y,j),te.scissor(w.copy(we).multiplyScalar(se).round())},this.getScissorTest=function(){return We},this.setScissorTest=function(A){te.setScissorTest(We=A)},this.setOpaqueSort=function(A){G=A},this.setTransparentSort=function(A){_e=A},this.getClearColor=function(A){return A.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor.apply(De,arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha.apply(De,arguments)},this.clear=function(A=!0,F=!0,Y=!0){let j=0;if(A){let k=!1;if(P!==null){const pe=P.texture.format;k=pe===Zc||pe===Jc||pe===$c}if(k){const pe=P.texture.type,Ee=pe===gi||pe===as||pe===Nr||pe===Ys||pe===jc||pe===Kc,Ce=De.getClearColor(),Pe=De.getClearAlpha(),Ve=Ce.r,Ge=Ce.g,Le=Ce.b;Ee?(d[0]=Ve,d[1]=Ge,d[2]=Le,d[3]=Pe,S.clearBufferuiv(S.COLOR,0,d)):(g[0]=Ve,g[1]=Ge,g[2]=Le,g[3]=Pe,S.clearBufferiv(S.COLOR,0,g))}else j|=S.COLOR_BUFFER_BIT}F&&(j|=S.DEPTH_BUFFER_BIT,S.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),Y&&(j|=S.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),S.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",oe,!1),t.removeEventListener("webglcontextrestored",be,!1),t.removeEventListener("webglcontextcreationerror",Te,!1),ue.dispose(),ke.dispose(),Q.dispose(),y.dispose(),L.dispose(),q.dispose(),at.dispose(),O.dispose(),de.dispose(),ee.dispose(),ee.removeEventListener("sessionstart",fh),ee.removeEventListener("sessionend",dh),ki.stop()};function oe(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function be(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const A=re.autoReset,F=ye.enabled,Y=ye.autoUpdate,j=ye.needsUpdate,k=ye.type;Ae(),re.autoReset=A,ye.enabled=F,ye.autoUpdate=Y,ye.needsUpdate=j,ye.type=k}function Te(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Qe(A){const F=A.target;F.removeEventListener("dispose",Qe),At(F)}function At(A){Zt(A),Q.remove(A)}function Zt(A){const F=Q.get(A).programs;F!==void 0&&(F.forEach(function(Y){de.releaseProgram(Y)}),A.isShaderMaterial&&de.releaseShaderCache(A))}this.renderBufferDirect=function(A,F,Y,j,k,pe){F===null&&(F=ze);const Ee=k.isMesh&&k.matrixWorld.determinant()<0,Ce=_p(A,F,Y,j,k);te.setMaterial(j,Ee);let Pe=Y.index,Ve=1;if(j.wireframe===!0){if(Pe=K.getWireframeAttribute(Y),Pe===void 0)return;Ve=2}const Ge=Y.drawRange,Le=Y.attributes.position;let lt=Ge.start*Ve,pt=(Ge.start+Ge.count)*Ve;pe!==null&&(lt=Math.max(lt,pe.start*Ve),pt=Math.min(pt,(pe.start+pe.count)*Ve)),Pe!==null?(lt=Math.max(lt,0),pt=Math.min(pt,Pe.count)):Le!=null&&(lt=Math.max(lt,0),pt=Math.min(pt,Le.count));const Mt=pt-lt;if(Mt<0||Mt===1/0)return;at.setup(k,j,Ce,Y,Pe);let rn,it=ge;if(Pe!==null&&(rn=B.get(Pe),it=Xe,it.setIndex(rn)),k.isMesh)j.wireframe===!0?(te.setLineWidth(j.wireframeLinewidth*T()),it.setMode(S.LINES)):it.setMode(S.TRIANGLES);else if(k.isLine){let Ne=j.linewidth;Ne===void 0&&(Ne=1),te.setLineWidth(Ne*T()),k.isLineSegments?it.setMode(S.LINES):k.isLineLoop?it.setMode(S.LINE_LOOP):it.setMode(S.LINE_STRIP)}else k.isPoints?it.setMode(S.POINTS):k.isSprite&&it.setMode(S.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)it.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(X.get("WEBGL_multi_draw"))it.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Ne=k._multiDrawStarts,Nt=k._multiDrawCounts,st=k._multiDrawCount,Sn=Pe?B.get(Pe).bytesPerElement:1,ds=Q.get(j).currentProgram.getUniforms();for(let on=0;on<st;on++)ds.setValue(S,"_gl_DrawID",on),it.render(Ne[on]/Sn,Nt[on])}else if(k.isInstancedMesh)it.renderInstances(lt,Mt,k.count);else if(Y.isInstancedBufferGeometry){const Ne=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Nt=Math.min(Y.instanceCount,Ne);it.renderInstances(lt,Mt,Nt)}else it.render(lt,Mt)};function et(A,F,Y){A.transparent===!0&&A.side===Vt&&A.forceSinglePass===!1?(A.side=sn,A.needsUpdate=!0,qr(A,F,Y),A.side=Ui,A.needsUpdate=!0,qr(A,F,Y),A.side=Vt):qr(A,F,Y)}this.compile=function(A,F,Y=null){Y===null&&(Y=A),p=ke.get(Y),p.init(F),M.push(p),Y.traverseVisible(function(k){k.isLight&&k.layers.test(F.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),A!==Y&&A.traverseVisible(function(k){k.isLight&&k.layers.test(F.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights();const j=new Set;return A.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const pe=k.material;if(pe)if(Array.isArray(pe))for(let Ee=0;Ee<pe.length;Ee++){const Ce=pe[Ee];et(Ce,Y,k),j.add(Ce)}else et(pe,Y,k),j.add(pe)}),M.pop(),p=null,j},this.compileAsync=function(A,F,Y=null){const j=this.compile(A,F,Y);return new Promise(k=>{function pe(){if(j.forEach(function(Ee){Q.get(Ee).currentProgram.isReady()&&j.delete(Ee)}),j.size===0){k(A);return}setTimeout(pe,10)}X.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let Qt=null;function Qn(A){Qt&&Qt(A)}function fh(){ki.stop()}function dh(){ki.start()}const ki=new Jd;ki.setAnimationLoop(Qn),typeof self<"u"&&ki.setContext(self),this.setAnimationLoop=function(A){Qt=A,ee.setAnimationLoop(A),A===null?ki.stop():ki.start()},ee.addEventListener("sessionstart",fh),ee.addEventListener("sessionend",dh),this.render=function(A,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ee.enabled===!0&&ee.isPresenting===!0&&(ee.cameraAutoUpdate===!0&&ee.updateCamera(F),F=ee.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,F,P),p=ke.get(A,M.length),p.init(F),M.push(p),xe.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Ze.setFromProjectionMatrix(xe),he=this.localClippingEnabled,ie=ce.init(this.clippingPlanes,he),_=ue.get(A,m.length),_.init(),m.push(_),ee.enabled===!0&&ee.isPresenting===!0){const pe=v.xr.getDepthSensingMesh();pe!==null&&va(pe,F,-1/0,v.sortObjects)}va(A,F,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(G,_e),C=ee.enabled===!1||ee.isPresenting===!1||ee.hasDepthSensing()===!1,C&&De.addToRenderList(_,A),this.info.render.frame++,ie===!0&&ce.beginShadows();const Y=p.state.shadowsArray;ye.render(Y,A,F),ie===!0&&ce.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=_.opaque,k=_.transmissive;if(p.setupLights(),F.isArrayCamera){const pe=F.cameras;if(k.length>0)for(let Ee=0,Ce=pe.length;Ee<Ce;Ee++){const Pe=pe[Ee];mh(j,k,A,Pe)}C&&De.render(A);for(let Ee=0,Ce=pe.length;Ee<Ce;Ee++){const Pe=pe[Ee];ph(_,A,Pe,Pe.viewport)}}else k.length>0&&mh(j,k,A,F),C&&De.render(A),ph(_,A,F);P!==null&&(b.updateMultisampleRenderTarget(P),b.updateRenderTargetMipmap(P)),A.isScene===!0&&A.onAfterRender(v,A,F),at.resetDefaultState(),D=-1,Z=null,M.pop(),M.length>0?(p=M[M.length-1],ie===!0&&ce.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function va(A,F,Y,j){if(A.visible===!1)return;if(A.layers.test(F.layers)){if(A.isGroup)Y=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(F);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Ze.intersectsSprite(A)){j&&I.setFromMatrixPosition(A.matrixWorld).applyMatrix4(xe);const Ee=q.update(A),Ce=A.material;Ce.visible&&_.push(A,Ee,Ce,Y,I.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Ze.intersectsObject(A))){const Ee=q.update(A),Ce=A.material;if(j&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),I.copy(A.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),I.copy(Ee.boundingSphere.center)),I.applyMatrix4(A.matrixWorld).applyMatrix4(xe)),Array.isArray(Ce)){const Pe=Ee.groups;for(let Ve=0,Ge=Pe.length;Ve<Ge;Ve++){const Le=Pe[Ve],lt=Ce[Le.materialIndex];lt&&lt.visible&&_.push(A,Ee,lt,Y,I.z,Le)}}else Ce.visible&&_.push(A,Ee,Ce,Y,I.z,null)}}const pe=A.children;for(let Ee=0,Ce=pe.length;Ee<Ce;Ee++)va(pe[Ee],F,Y,j)}function ph(A,F,Y,j){const k=A.opaque,pe=A.transmissive,Ee=A.transparent;p.setupLightsView(Y),ie===!0&&ce.setGlobalState(v.clippingPlanes,Y),j&&te.viewport(x.copy(j)),k.length>0&&Yr(k,F,Y),pe.length>0&&Yr(pe,F,Y),Ee.length>0&&Yr(Ee,F,Y),te.buffers.depth.setTest(!0),te.buffers.depth.setMask(!0),te.buffers.color.setMask(!0),te.setPolygonOffset(!1)}function mh(A,F,Y,j){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[j.id]===void 0&&(p.state.transmissionRenderTarget[j.id]=new ls(1,1,{generateMipmaps:!0,type:X.has("EXT_color_buffer_half_float")||X.has("EXT_color_buffer_float")?Gr:gi,minFilter:ns,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ot.workingColorSpace}));const pe=p.state.transmissionRenderTarget[j.id],Ee=j.viewport||x;pe.setSize(Ee.z,Ee.w);const Ce=v.getRenderTarget();v.setRenderTarget(pe),v.getClearColor(W),$=v.getClearAlpha(),$<1&&v.setClearColor(16777215,.5),v.clear(),C&&De.render(Y);const Pe=v.toneMapping;v.toneMapping=Ii;const Ve=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),p.setupLightsView(j),ie===!0&&ce.setGlobalState(v.clippingPlanes,j),Yr(A,Y,j),b.updateMultisampleRenderTarget(pe),b.updateRenderTargetMipmap(pe),X.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let Le=0,lt=F.length;Le<lt;Le++){const pt=F[Le],Mt=pt.object,rn=pt.geometry,it=pt.material,Ne=pt.group;if(it.side===Vt&&Mt.layers.test(j.layers)){const Nt=it.side;it.side=sn,it.needsUpdate=!0,gh(Mt,Y,j,rn,it,Ne),it.side=Nt,it.needsUpdate=!0,Ge=!0}}Ge===!0&&(b.updateMultisampleRenderTarget(pe),b.updateRenderTargetMipmap(pe))}v.setRenderTarget(Ce),v.setClearColor(W,$),Ve!==void 0&&(j.viewport=Ve),v.toneMapping=Pe}function Yr(A,F,Y){const j=F.isScene===!0?F.overrideMaterial:null;for(let k=0,pe=A.length;k<pe;k++){const Ee=A[k],Ce=Ee.object,Pe=Ee.geometry,Ve=j===null?Ee.material:j,Ge=Ee.group;Ce.layers.test(Y.layers)&&gh(Ce,F,Y,Pe,Ve,Ge)}}function gh(A,F,Y,j,k,pe){A.onBeforeRender(v,F,Y,j,k,pe),A.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),k.onBeforeRender(v,F,Y,j,A,pe),k.transparent===!0&&k.side===Vt&&k.forceSinglePass===!1?(k.side=sn,k.needsUpdate=!0,v.renderBufferDirect(Y,F,j,k,A,pe),k.side=Ui,k.needsUpdate=!0,v.renderBufferDirect(Y,F,j,k,A,pe),k.side=Vt):v.renderBufferDirect(Y,F,j,k,A,pe),A.onAfterRender(v,F,Y,j,k,pe)}function qr(A,F,Y){F.isScene!==!0&&(F=ze);const j=Q.get(A),k=p.state.lights,pe=p.state.shadowsArray,Ee=k.state.version,Ce=de.getParameters(A,k.state,pe,F,Y),Pe=de.getProgramCacheKey(Ce);let Ve=j.programs;j.environment=A.isMeshStandardMaterial?F.environment:null,j.fog=F.fog,j.envMap=(A.isMeshStandardMaterial?L:y).get(A.envMap||j.environment),j.envMapRotation=j.environment!==null&&A.envMap===null?F.environmentRotation:A.envMapRotation,Ve===void 0&&(A.addEventListener("dispose",Qe),Ve=new Map,j.programs=Ve);let Ge=Ve.get(Pe);if(Ge!==void 0){if(j.currentProgram===Ge&&j.lightsStateVersion===Ee)return vh(A,Ce),Ge}else Ce.uniforms=de.getUniforms(A),A.onBeforeCompile(Ce,v),Ge=de.acquireProgram(Ce,Pe),Ve.set(Pe,Ge),j.uniforms=Ce.uniforms;const Le=j.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Le.clippingPlanes=ce.uniform),vh(A,Ce),j.needsLights=xp(A),j.lightsStateVersion=Ee,j.needsLights&&(Le.ambientLightColor.value=k.state.ambient,Le.lightProbe.value=k.state.probe,Le.directionalLights.value=k.state.directional,Le.directionalLightShadows.value=k.state.directionalShadow,Le.spotLights.value=k.state.spot,Le.spotLightShadows.value=k.state.spotShadow,Le.rectAreaLights.value=k.state.rectArea,Le.ltc_1.value=k.state.rectAreaLTC1,Le.ltc_2.value=k.state.rectAreaLTC2,Le.pointLights.value=k.state.point,Le.pointLightShadows.value=k.state.pointShadow,Le.hemisphereLights.value=k.state.hemi,Le.directionalShadowMap.value=k.state.directionalShadowMap,Le.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Le.spotShadowMap.value=k.state.spotShadowMap,Le.spotLightMatrix.value=k.state.spotLightMatrix,Le.spotLightMap.value=k.state.spotLightMap,Le.pointShadowMap.value=k.state.pointShadowMap,Le.pointShadowMatrix.value=k.state.pointShadowMatrix),j.currentProgram=Ge,j.uniformsList=null,Ge}function _h(A){if(A.uniformsList===null){const F=A.currentProgram.getUniforms();A.uniformsList=Oo.seqWithValue(F.seq,A.uniforms)}return A.uniformsList}function vh(A,F){const Y=Q.get(A);Y.outputColorSpace=F.outputColorSpace,Y.batching=F.batching,Y.batchingColor=F.batchingColor,Y.instancing=F.instancing,Y.instancingColor=F.instancingColor,Y.instancingMorph=F.instancingMorph,Y.skinning=F.skinning,Y.morphTargets=F.morphTargets,Y.morphNormals=F.morphNormals,Y.morphColors=F.morphColors,Y.morphTargetsCount=F.morphTargetsCount,Y.numClippingPlanes=F.numClippingPlanes,Y.numIntersection=F.numClipIntersection,Y.vertexAlphas=F.vertexAlphas,Y.vertexTangents=F.vertexTangents,Y.toneMapping=F.toneMapping}function _p(A,F,Y,j,k){F.isScene!==!0&&(F=ze),b.resetTextureUnits();const pe=F.fog,Ee=j.isMeshStandardMaterial?F.environment:null,Ce=P===null?v.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Fi,Pe=(j.isMeshStandardMaterial?L:y).get(j.envMap||Ee),Ve=j.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Ge=!!Y.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Le=!!Y.morphAttributes.position,lt=!!Y.morphAttributes.normal,pt=!!Y.morphAttributes.color;let Mt=Ii;j.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Mt=v.toneMapping);const rn=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,it=rn!==void 0?rn.length:0,Ne=Q.get(j),Nt=p.state.lights;if(ie===!0&&(he===!0||A!==Z)){const dn=A===Z&&j.id===D;ce.setState(j,A,dn)}let st=!1;j.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==Nt.state.version||Ne.outputColorSpace!==Ce||k.isBatchedMesh&&Ne.batching===!1||!k.isBatchedMesh&&Ne.batching===!0||k.isBatchedMesh&&Ne.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Ne.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Ne.instancing===!1||!k.isInstancedMesh&&Ne.instancing===!0||k.isSkinnedMesh&&Ne.skinning===!1||!k.isSkinnedMesh&&Ne.skinning===!0||k.isInstancedMesh&&Ne.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Ne.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Ne.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Ne.instancingMorph===!1&&k.morphTexture!==null||Ne.envMap!==Pe||j.fog===!0&&Ne.fog!==pe||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==ce.numPlanes||Ne.numIntersection!==ce.numIntersection)||Ne.vertexAlphas!==Ve||Ne.vertexTangents!==Ge||Ne.morphTargets!==Le||Ne.morphNormals!==lt||Ne.morphColors!==pt||Ne.toneMapping!==Mt||Ne.morphTargetsCount!==it)&&(st=!0):(st=!0,Ne.__version=j.version);let Sn=Ne.currentProgram;st===!0&&(Sn=qr(j,F,k));let ds=!1,on=!1,xa=!1;const wt=Sn.getUniforms(),vi=Ne.uniforms;if(te.useProgram(Sn.program)&&(ds=!0,on=!0,xa=!0),j.id!==D&&(D=j.id,on=!0),ds||Z!==A){J.reverseDepthBuffer?(Se.copy(A.projectionMatrix),s_(Se),r_(Se),wt.setValue(S,"projectionMatrix",Se)):wt.setValue(S,"projectionMatrix",A.projectionMatrix),wt.setValue(S,"viewMatrix",A.matrixWorldInverse);const dn=wt.map.cameraPosition;dn!==void 0&&dn.setValue(S,me.setFromMatrixPosition(A.matrixWorld)),J.logarithmicDepthBuffer&&wt.setValue(S,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&wt.setValue(S,"isOrthographic",A.isOrthographicCamera===!0),Z!==A&&(Z=A,on=!0,xa=!0)}if(k.isSkinnedMesh){wt.setOptional(S,k,"bindMatrix"),wt.setOptional(S,k,"bindMatrixInverse");const dn=k.skeleton;dn&&(dn.boneTexture===null&&dn.computeBoneTexture(),wt.setValue(S,"boneTexture",dn.boneTexture,b))}k.isBatchedMesh&&(wt.setOptional(S,k,"batchingTexture"),wt.setValue(S,"batchingTexture",k._matricesTexture,b),wt.setOptional(S,k,"batchingIdTexture"),wt.setValue(S,"batchingIdTexture",k._indirectTexture,b),wt.setOptional(S,k,"batchingColorTexture"),k._colorsTexture!==null&&wt.setValue(S,"batchingColorTexture",k._colorsTexture,b));const ya=Y.morphAttributes;if((ya.position!==void 0||ya.normal!==void 0||ya.color!==void 0)&&He.update(k,Y,Sn),(on||Ne.receiveShadow!==k.receiveShadow)&&(Ne.receiveShadow=k.receiveShadow,wt.setValue(S,"receiveShadow",k.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(vi.envMap.value=Pe,vi.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&F.environment!==null&&(vi.envMapIntensity.value=F.environmentIntensity),on&&(wt.setValue(S,"toneMappingExposure",v.toneMappingExposure),Ne.needsLights&&vp(vi,xa),pe&&j.fog===!0&&le.refreshFogUniforms(vi,pe),le.refreshMaterialUniforms(vi,j,se,V,p.state.transmissionRenderTarget[A.id]),Oo.upload(S,_h(Ne),vi,b)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Oo.upload(S,_h(Ne),vi,b),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&wt.setValue(S,"center",k.center),wt.setValue(S,"modelViewMatrix",k.modelViewMatrix),wt.setValue(S,"normalMatrix",k.normalMatrix),wt.setValue(S,"modelMatrix",k.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const dn=j.uniformsGroups;for(let Ma=0,yp=dn.length;Ma<yp;Ma++){const xh=dn[Ma];O.update(xh,Sn),O.bind(xh,Sn)}}return Sn}function vp(A,F){A.ambientLightColor.needsUpdate=F,A.lightProbe.needsUpdate=F,A.directionalLights.needsUpdate=F,A.directionalLightShadows.needsUpdate=F,A.pointLights.needsUpdate=F,A.pointLightShadows.needsUpdate=F,A.spotLights.needsUpdate=F,A.spotLightShadows.needsUpdate=F,A.rectAreaLights.needsUpdate=F,A.hemisphereLights.needsUpdate=F}function xp(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(A,F,Y){Q.get(A.texture).__webglTexture=F,Q.get(A.depthTexture).__webglTexture=Y;const j=Q.get(A);j.__hasExternalTextures=!0,j.__autoAllocateDepthBuffer=Y===void 0,j.__autoAllocateDepthBuffer||X.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,F){const Y=Q.get(A);Y.__webglFramebuffer=F,Y.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(A,F=0,Y=0){P=A,U=F,R=Y;let j=!0,k=null,pe=!1,Ee=!1;if(A){const Pe=Q.get(A);if(Pe.__useDefaultFramebuffer!==void 0)te.bindFramebuffer(S.FRAMEBUFFER,null),j=!1;else if(Pe.__webglFramebuffer===void 0)b.setupRenderTarget(A);else if(Pe.__hasExternalTextures)b.rebindTextures(A,Q.get(A.texture).__webglTexture,Q.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Le=A.depthTexture;if(Pe.__boundDepthTexture!==Le){if(Le!==null&&Q.has(Le)&&(A.width!==Le.image.width||A.height!==Le.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(A)}}const Ve=A.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Ee=!0);const Ge=Q.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ge[F])?k=Ge[F][Y]:k=Ge[F],pe=!0):A.samples>0&&b.useMultisampledRTT(A)===!1?k=Q.get(A).__webglMultisampledFramebuffer:Array.isArray(Ge)?k=Ge[Y]:k=Ge,x.copy(A.viewport),w.copy(A.scissor),z=A.scissorTest}else x.copy(Me).multiplyScalar(se).floor(),w.copy(we).multiplyScalar(se).floor(),z=We;if(te.bindFramebuffer(S.FRAMEBUFFER,k)&&j&&te.drawBuffers(A,k),te.viewport(x),te.scissor(w),te.setScissorTest(z),pe){const Pe=Q.get(A.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_CUBE_MAP_POSITIVE_X+F,Pe.__webglTexture,Y)}else if(Ee){const Pe=Q.get(A.texture),Ve=F||0;S.framebufferTextureLayer(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,Pe.__webglTexture,Y||0,Ve)}D=-1},this.readRenderTargetPixels=function(A,F,Y,j,k,pe,Ee){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=Q.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ce=Ce[Ee]),Ce){te.bindFramebuffer(S.FRAMEBUFFER,Ce);try{const Pe=A.texture,Ve=Pe.format,Ge=Pe.type;if(!J.textureFormatReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!J.textureTypeReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=A.width-j&&Y>=0&&Y<=A.height-k&&S.readPixels(F,Y,j,k,Ye.convert(Ve),Ye.convert(Ge),pe)}finally{const Pe=P!==null?Q.get(P).__webglFramebuffer:null;te.bindFramebuffer(S.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(A,F,Y,j,k,pe,Ee){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=Q.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ce=Ce[Ee]),Ce){const Pe=A.texture,Ve=Pe.format,Ge=Pe.type;if(!J.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!J.textureTypeReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=A.width-j&&Y>=0&&Y<=A.height-k){te.bindFramebuffer(S.FRAMEBUFFER,Ce);const Le=S.createBuffer();S.bindBuffer(S.PIXEL_PACK_BUFFER,Le),S.bufferData(S.PIXEL_PACK_BUFFER,pe.byteLength,S.STREAM_READ),S.readPixels(F,Y,j,k,Ye.convert(Ve),Ye.convert(Ge),0);const lt=P!==null?Q.get(P).__webglFramebuffer:null;te.bindFramebuffer(S.FRAMEBUFFER,lt);const pt=S.fenceSync(S.SYNC_GPU_COMMANDS_COMPLETE,0);return S.flush(),await i_(S,pt,4),S.bindBuffer(S.PIXEL_PACK_BUFFER,Le),S.getBufferSubData(S.PIXEL_PACK_BUFFER,0,pe),S.deleteBuffer(Le),S.deleteSync(pt),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,F=null,Y=0){A.isTexture!==!0&&(Uo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,A=arguments[1]);const j=Math.pow(2,-Y),k=Math.floor(A.image.width*j),pe=Math.floor(A.image.height*j),Ee=F!==null?F.x:0,Ce=F!==null?F.y:0;b.setTexture2D(A,0),S.copyTexSubImage2D(S.TEXTURE_2D,Y,0,0,Ee,Ce,k,pe),te.unbindTexture()},this.copyTextureToTexture=function(A,F,Y=null,j=null,k=0){A.isTexture!==!0&&(Uo("WebGLRenderer: copyTextureToTexture function signature has changed."),j=arguments[0]||null,A=arguments[1],F=arguments[2],k=arguments[3]||0,Y=null);let pe,Ee,Ce,Pe,Ve,Ge;Y!==null?(pe=Y.max.x-Y.min.x,Ee=Y.max.y-Y.min.y,Ce=Y.min.x,Pe=Y.min.y):(pe=A.image.width,Ee=A.image.height,Ce=0,Pe=0),j!==null?(Ve=j.x,Ge=j.y):(Ve=0,Ge=0);const Le=Ye.convert(F.format),lt=Ye.convert(F.type);b.setTexture2D(F,0),S.pixelStorei(S.UNPACK_FLIP_Y_WEBGL,F.flipY),S.pixelStorei(S.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),S.pixelStorei(S.UNPACK_ALIGNMENT,F.unpackAlignment);const pt=S.getParameter(S.UNPACK_ROW_LENGTH),Mt=S.getParameter(S.UNPACK_IMAGE_HEIGHT),rn=S.getParameter(S.UNPACK_SKIP_PIXELS),it=S.getParameter(S.UNPACK_SKIP_ROWS),Ne=S.getParameter(S.UNPACK_SKIP_IMAGES),Nt=A.isCompressedTexture?A.mipmaps[k]:A.image;S.pixelStorei(S.UNPACK_ROW_LENGTH,Nt.width),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,Nt.height),S.pixelStorei(S.UNPACK_SKIP_PIXELS,Ce),S.pixelStorei(S.UNPACK_SKIP_ROWS,Pe),A.isDataTexture?S.texSubImage2D(S.TEXTURE_2D,k,Ve,Ge,pe,Ee,Le,lt,Nt.data):A.isCompressedTexture?S.compressedTexSubImage2D(S.TEXTURE_2D,k,Ve,Ge,Nt.width,Nt.height,Le,Nt.data):S.texSubImage2D(S.TEXTURE_2D,k,Ve,Ge,pe,Ee,Le,lt,Nt),S.pixelStorei(S.UNPACK_ROW_LENGTH,pt),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,Mt),S.pixelStorei(S.UNPACK_SKIP_PIXELS,rn),S.pixelStorei(S.UNPACK_SKIP_ROWS,it),S.pixelStorei(S.UNPACK_SKIP_IMAGES,Ne),k===0&&F.generateMipmaps&&S.generateMipmap(S.TEXTURE_2D),te.unbindTexture()},this.copyTextureToTexture3D=function(A,F,Y=null,j=null,k=0){A.isTexture!==!0&&(Uo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Y=arguments[0]||null,j=arguments[1]||null,A=arguments[2],F=arguments[3],k=arguments[4]||0);let pe,Ee,Ce,Pe,Ve,Ge,Le,lt,pt;const Mt=A.isCompressedTexture?A.mipmaps[k]:A.image;Y!==null?(pe=Y.max.x-Y.min.x,Ee=Y.max.y-Y.min.y,Ce=Y.max.z-Y.min.z,Pe=Y.min.x,Ve=Y.min.y,Ge=Y.min.z):(pe=Mt.width,Ee=Mt.height,Ce=Mt.depth,Pe=0,Ve=0,Ge=0),j!==null?(Le=j.x,lt=j.y,pt=j.z):(Le=0,lt=0,pt=0);const rn=Ye.convert(F.format),it=Ye.convert(F.type);let Ne;if(F.isData3DTexture)b.setTexture3D(F,0),Ne=S.TEXTURE_3D;else if(F.isDataArrayTexture||F.isCompressedArrayTexture)b.setTexture2DArray(F,0),Ne=S.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}S.pixelStorei(S.UNPACK_FLIP_Y_WEBGL,F.flipY),S.pixelStorei(S.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),S.pixelStorei(S.UNPACK_ALIGNMENT,F.unpackAlignment);const Nt=S.getParameter(S.UNPACK_ROW_LENGTH),st=S.getParameter(S.UNPACK_IMAGE_HEIGHT),Sn=S.getParameter(S.UNPACK_SKIP_PIXELS),ds=S.getParameter(S.UNPACK_SKIP_ROWS),on=S.getParameter(S.UNPACK_SKIP_IMAGES);S.pixelStorei(S.UNPACK_ROW_LENGTH,Mt.width),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,Mt.height),S.pixelStorei(S.UNPACK_SKIP_PIXELS,Pe),S.pixelStorei(S.UNPACK_SKIP_ROWS,Ve),S.pixelStorei(S.UNPACK_SKIP_IMAGES,Ge),A.isDataTexture||A.isData3DTexture?S.texSubImage3D(Ne,k,Le,lt,pt,pe,Ee,Ce,rn,it,Mt.data):F.isCompressedArrayTexture?S.compressedTexSubImage3D(Ne,k,Le,lt,pt,pe,Ee,Ce,rn,Mt.data):S.texSubImage3D(Ne,k,Le,lt,pt,pe,Ee,Ce,rn,it,Mt),S.pixelStorei(S.UNPACK_ROW_LENGTH,Nt),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,st),S.pixelStorei(S.UNPACK_SKIP_PIXELS,Sn),S.pixelStorei(S.UNPACK_SKIP_ROWS,ds),S.pixelStorei(S.UNPACK_SKIP_IMAGES,on),k===0&&F.generateMipmaps&&S.generateMipmap(Ne),te.unbindTexture()},this.initRenderTarget=function(A){Q.get(A).__webglFramebuffer===void 0&&b.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?b.setTextureCube(A,0):A.isData3DTexture?b.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?b.setTexture2DArray(A,0):b.setTexture2D(A,0),te.unbindTexture()},this.resetState=function(){U=0,R=0,P=null,te.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Qc?"display-p3":"srgb",t.unpackColorSpace=ot.workingColorSpace===pa?"display-p3":"srgb"}}class rh{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new $e(e),this.near=t,this.far=i}clone(){return new rh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}let gS=class extends Dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Jn,this.environmentIntensity=1,this.environmentRotation=new Jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};class Mc extends us{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new $e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ku=new dt,Sc=new eh,So=new ma,bo=new N;class gl extends Dt{constructor(e=new Wt,t=new Mc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),So.copy(i.boundingSphere),So.applyMatrix4(s),So.radius+=r,e.ray.intersectsSphere(So)===!1)return;Ku.copy(s).invert(),Sc.copy(e.ray).applyMatrix4(Ku);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const u=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=u,_=d;g<_;g++){const p=c.getX(g);bo.fromBufferAttribute(f,p),$u(bo,p,l,s,e,t,this)}}else{const u=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let g=u,_=d;g<_;g++)bo.fromBufferAttribute(f,g),$u(bo,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function $u(n,e,t,i,s,r,o){const a=Sc.distanceSqToPoint(n);if(a<t){const l=new N;Sc.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class oh extends Jt{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Zn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let s=0;const r=i.length;let o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);const h=i[s],u=i[s+1]-h,d=(o-h)/u;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new Re:new N);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new N,s=[],r=[],o=[],a=new N,l=new dt;for(let d=0;d<=e;d++){const g=d/e;s[d]=this.getTangentAt(g,new N)}r[0]=new N,o[0]=new N;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),u<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Ht(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(Ht(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class ah extends Zn{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Re){const i=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*h-d*f+this.aX,c=u*f+d*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class _S extends ah{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function lh(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,f){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+f)+(l-a)/f;u*=h,d*=h,s(o,a,u,d)},calc:function(r){const o=r*r,a=o*r;return n+e*r+t*o+i*a}}}const Eo=new N,_l=new lh,vl=new lh,xl=new lh;class vS extends Zn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new N){const i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Eo.subVectors(s[0],s[1]).add(s[0]),c=Eo);const f=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Eo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Eo),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(f),d),_=Math.pow(f.distanceToSquared(u),d),p=Math.pow(u.distanceToSquared(h),d);_<1e-4&&(_=1),g<1e-4&&(g=_),p<1e-4&&(p=_),_l.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,g,_,p),vl.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,g,_,p),xl.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,g,_,p)}else this.curveType==="catmullrom"&&(_l.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),vl.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),xl.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return i.set(_l.calc(l),vl.calc(l),xl.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new N().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Ju(n,e,t,i,s){const r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function xS(n,e){const t=1-n;return t*t*e}function yS(n,e){return 2*(1-n)*n*e}function MS(n,e){return n*n*e}function Sr(n,e,t,i){return xS(n,e)+yS(n,t)+MS(n,i)}function SS(n,e){const t=1-n;return t*t*t*e}function bS(n,e){const t=1-n;return 3*t*t*n*e}function ES(n,e){return 3*(1-n)*n*n*e}function wS(n,e){return n*n*n*e}function br(n,e,t,i,s){return SS(n,e)+bS(n,t)+ES(n,i)+wS(n,s)}class ip extends Zn{constructor(e=new Re,t=new Re,i=new Re,s=new Re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new Re){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(br(e,s.x,r.x,o.x,a.x),br(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class AS extends Zn{constructor(e=new N,t=new N,i=new N,s=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new N){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(br(e,s.x,r.x,o.x,a.x),br(e,s.y,r.y,o.y,a.y),br(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class sp extends Zn{constructor(e=new Re,t=new Re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Re){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Re){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class TS extends Zn{constructor(e=new N,t=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new N){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new N){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class rp extends Zn{constructor(e=new Re,t=new Re,i=new Re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Re){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Sr(e,s.x,r.x,o.x),Sr(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class RS extends Zn{constructor(e=new N,t=new N,i=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new N){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Sr(e,s.x,r.x,o.x),Sr(e,s.y,r.y,o.y),Sr(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class op extends Zn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Re){const i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return i.set(Ju(a,l.x,c.x,h.x,f.x),Ju(a,l.y,c.y,h.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new Re().fromArray(s))}return this}}var Zu=Object.freeze({__proto__:null,ArcCurve:_S,CatmullRomCurve3:vS,CubicBezierCurve:ip,CubicBezierCurve3:AS,EllipseCurve:ah,LineCurve:sp,LineCurve3:TS,QuadraticBezierCurve:rp,QuadraticBezierCurve3:RS,SplineCurve:op});class CS extends Zn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Zu[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(new Zu[s.type]().fromJSON(s))}return this}}class Qu extends CS{constructor(e){super(),this.type="Path",this.currentPoint=new Re,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new sp(this.currentPoint.clone(),new Re(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){const r=new rp(this.currentPoint.clone(),new Re(e,t),new Re(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){const a=new ip(this.currentPoint.clone(),new Re(e,t),new Re(i,s),new Re(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new op(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){const c=new ah(e,t,i,s,r,o,a,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Ks extends Wt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],l=[],c=new N,h=new Re;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,u=3;f<=t;f++,u+=3){const d=i+f/t*s;c.x=e*Math.cos(d),c.y=e*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/e+1)/2,h.y=(o[u+1]/e+1)/2,l.push(h.x,h.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new _t(o,3)),this.setAttribute("normal",new _t(a,3)),this.setAttribute("uv",new _t(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ks(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Qo extends Wt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],f=[],u=[],d=[];let g=0;const _=[],p=i/2;let m=0;M(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new _t(f,3)),this.setAttribute("normal",new _t(u,3)),this.setAttribute("uv",new _t(d,2));function M(){const E=new N,U=new N;let R=0;const P=(t-e)/i;for(let D=0;D<=r;D++){const Z=[],x=D/r,w=x*(t-e)+e;for(let z=0;z<=s;z++){const W=z/s,$=W*l+a,ae=Math.sin($),V=Math.cos($);U.x=w*ae,U.y=-x*i+p,U.z=w*V,f.push(U.x,U.y,U.z),E.set(ae,P,V).normalize(),u.push(E.x,E.y,E.z),d.push(W,1-x),Z.push(g++)}_.push(Z)}for(let D=0;D<s;D++)for(let Z=0;Z<r;Z++){const x=_[Z][D],w=_[Z+1][D],z=_[Z+1][D+1],W=_[Z][D+1];e>0&&(h.push(x,w,W),R+=3),t>0&&(h.push(w,z,W),R+=3)}c.addGroup(m,R,0),m+=R}function v(E){const U=g,R=new Re,P=new N;let D=0;const Z=E===!0?e:t,x=E===!0?1:-1;for(let z=1;z<=s;z++)f.push(0,p*x,0),u.push(0,x,0),d.push(.5,.5),g++;const w=g;for(let z=0;z<=s;z++){const $=z/s*l+a,ae=Math.cos($),V=Math.sin($);P.x=Z*V,P.y=p*x,P.z=Z*ae,f.push(P.x,P.y,P.z),u.push(0,x,0),R.x=ae*.5+.5,R.y=V*.5*x+.5,d.push(R.x,R.y),g++}for(let z=0;z<s;z++){const W=U+z,$=w+z;E===!0?h.push($,$+1,W):h.push($+1,$,W),D+=3}c.addGroup(m,D,E===!0?1:2),m+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qo(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ch extends Wt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};const r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new _t(r,3)),this.setAttribute("normal",new _t(r.slice(),3)),this.setAttribute("uv",new _t(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const v=new N,E=new N,U=new N;for(let R=0;R<t.length;R+=3)d(t[R+0],v),d(t[R+1],E),d(t[R+2],U),l(v,E,U,M)}function l(M,v,E,U){const R=U+1,P=[];for(let D=0;D<=R;D++){P[D]=[];const Z=M.clone().lerp(E,D/R),x=v.clone().lerp(E,D/R),w=R-D;for(let z=0;z<=w;z++)z===0&&D===R?P[D][z]=Z:P[D][z]=Z.clone().lerp(x,z/w)}for(let D=0;D<R;D++)for(let Z=0;Z<2*(R-D)-1;Z++){const x=Math.floor(Z/2);Z%2===0?(u(P[D][x+1]),u(P[D+1][x]),u(P[D][x])):(u(P[D][x+1]),u(P[D+1][x+1]),u(P[D+1][x]))}}function c(M){const v=new N;for(let E=0;E<r.length;E+=3)v.x=r[E+0],v.y=r[E+1],v.z=r[E+2],v.normalize().multiplyScalar(M),r[E+0]=v.x,r[E+1]=v.y,r[E+2]=v.z}function h(){const M=new N;for(let v=0;v<r.length;v+=3){M.x=r[v+0],M.y=r[v+1],M.z=r[v+2];const E=p(M)/2/Math.PI+.5,U=m(M)/Math.PI+.5;o.push(E,1-U)}g(),f()}function f(){for(let M=0;M<o.length;M+=6){const v=o[M+0],E=o[M+2],U=o[M+4],R=Math.max(v,E,U),P=Math.min(v,E,U);R>.9&&P<.1&&(v<.2&&(o[M+0]+=1),E<.2&&(o[M+2]+=1),U<.2&&(o[M+4]+=1))}}function u(M){r.push(M.x,M.y,M.z)}function d(M,v){const E=M*3;v.x=e[E+0],v.y=e[E+1],v.z=e[E+2]}function g(){const M=new N,v=new N,E=new N,U=new N,R=new Re,P=new Re,D=new Re;for(let Z=0,x=0;Z<r.length;Z+=9,x+=6){M.set(r[Z+0],r[Z+1],r[Z+2]),v.set(r[Z+3],r[Z+4],r[Z+5]),E.set(r[Z+6],r[Z+7],r[Z+8]),R.set(o[x+0],o[x+1]),P.set(o[x+2],o[x+3]),D.set(o[x+4],o[x+5]),U.copy(M).add(v).add(E).divideScalar(3);const w=p(U);_(R,x+0,M,w),_(P,x+2,v,w),_(D,x+4,E,w)}}function _(M,v,E,U){U<0&&M.x===1&&(o[v]=M.x-1),E.x===0&&E.z===0&&(o[v]=U/2/Math.PI+.5)}function p(M){return Math.atan2(M.z,-M.x)}function m(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ch(e.vertices,e.indices,e.radius,e.details)}}class ap extends Qu{constructor(e){super(e),this.uuid=Zs(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(new Qu().fromJSON(s))}return this}}const PS={triangulate:function(n,e,t=2){const i=e&&e.length,s=i?e[0]*t:n.length;let r=lp(n,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,f,u,d;if(i&&(r=US(n,e,r,t)),n.length>80*t){a=c=n[0],l=h=n[1];for(let g=t;g<s;g+=t)f=n[g],u=n[g+1],f<a&&(a=f),u<l&&(l=u),f>c&&(c=f),u>h&&(h=u);d=Math.max(c-a,h-l),d=d!==0?32767/d:0}return Ur(r,o,t,a,l,d,0),o}};function lp(n,e,t,i,s){let r,o;if(s===YS(n,e,t,i)>0)for(r=e;r<t;r+=i)o=ef(r,n[r],n[r+1],o);else for(r=t-i;r>=e;r-=i)o=ef(r,n[r],n[r+1],o);return o&&_a(o,o.next)&&(Fr(o),o=o.next),o}function cs(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(_a(t,t.next)||yt(t.prev,t,t.next)===0)){if(Fr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Ur(n,e,t,i,s,r,o){if(!n)return;!o&&r&&zS(n,i,s,r);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?IS(n,i,s,r):LS(n)){e.push(l.i/t|0),e.push(n.i/t|0),e.push(c.i/t|0),Fr(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=DS(cs(n),e,t),Ur(n,e,t,i,s,r,2)):o===2&&NS(n,e,t,i,s,r):Ur(cs(n),e,t,i,s,r,1);break}}}function LS(n){const e=n.prev,t=n,i=n.next;if(yt(e,t,i)>=0)return!1;const s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,h=s<r?s<o?s:o:r<o?r:o,f=a<l?a<c?a:c:l<c?l:c,u=s>r?s>o?s:o:r>o?r:o,d=a>l?a>c?a:c:l>c?l:c;let g=i.next;for(;g!==e;){if(g.x>=h&&g.x<=u&&g.y>=f&&g.y<=d&&Ds(s,a,r,l,o,c,g.x,g.y)&&yt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function IS(n,e,t,i){const s=n.prev,r=n,o=n.next;if(yt(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,h=s.y,f=r.y,u=o.y,d=a<l?a<c?a:c:l<c?l:c,g=h<f?h<u?h:u:f<u?f:u,_=a>l?a>c?a:c:l>c?l:c,p=h>f?h>u?h:u:f>u?f:u,m=bc(d,g,e,t,i),M=bc(_,p,e,t,i);let v=n.prevZ,E=n.nextZ;for(;v&&v.z>=m&&E&&E.z<=M;){if(v.x>=d&&v.x<=_&&v.y>=g&&v.y<=p&&v!==s&&v!==o&&Ds(a,h,l,f,c,u,v.x,v.y)&&yt(v.prev,v,v.next)>=0||(v=v.prevZ,E.x>=d&&E.x<=_&&E.y>=g&&E.y<=p&&E!==s&&E!==o&&Ds(a,h,l,f,c,u,E.x,E.y)&&yt(E.prev,E,E.next)>=0))return!1;E=E.nextZ}for(;v&&v.z>=m;){if(v.x>=d&&v.x<=_&&v.y>=g&&v.y<=p&&v!==s&&v!==o&&Ds(a,h,l,f,c,u,v.x,v.y)&&yt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;E&&E.z<=M;){if(E.x>=d&&E.x<=_&&E.y>=g&&E.y<=p&&E!==s&&E!==o&&Ds(a,h,l,f,c,u,E.x,E.y)&&yt(E.prev,E,E.next)>=0)return!1;E=E.nextZ}return!0}function DS(n,e,t){let i=n;do{const s=i.prev,r=i.next.next;!_a(s,r)&&cp(s,i,i.next,r)&&Or(s,r)&&Or(r,s)&&(e.push(s.i/t|0),e.push(i.i/t|0),e.push(r.i/t|0),Fr(i),Fr(i.next),i=n=r),i=i.next}while(i!==n);return cs(i)}function NS(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&GS(o,a)){let l=hp(o,a);o=cs(o,o.next),l=cs(l,l.next),Ur(o,e,t,i,s,r,0),Ur(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function US(n,e,t,i){const s=[];let r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=lp(n,a,l,i,!1),c===c.next&&(c.steiner=!0),s.push(VS(c));for(s.sort(OS),r=0;r<s.length;r++)t=FS(s[r],t);return t}function OS(n,e){return n.x-e.x}function FS(n,e){const t=kS(n,e);if(!t)return e;const i=hp(t,n);return cs(i,i.next),cs(t,t.next)}function kS(n,e){let t=e,i=-1/0,s;const r=n.x,o=n.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const u=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=r&&u>i&&(i=u,s=t.x<t.next.x?t:t.next,u===r))return s}t=t.next}while(t!==e);if(!s)return null;const a=s,l=s.x,c=s.y;let h=1/0,f;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&Ds(o<c?r:i,o,l,c,o<c?i:r,o,t.x,t.y)&&(f=Math.abs(o-t.y)/(r-t.x),Or(t,n)&&(f<h||f===h&&(t.x>s.x||t.x===s.x&&BS(s,t)))&&(s=t,h=f)),t=t.next;while(t!==a);return s}function BS(n,e){return yt(n.prev,n,e.prev)<0&&yt(e.next,n,n.next)<0}function zS(n,e,t,i){let s=n;do s.z===0&&(s.z=bc(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,HS(s)}function HS(n){let e,t,i,s,r,o,a,l,c=1;do{for(t=n,n=null,r=null,o=0;t;){for(o++,i=t,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||t.z<=i.z)?(s=t,t=t.nextZ,a--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;t=i}r.nextZ=null,c*=2}while(o>1);return n}function bc(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function VS(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Ds(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function GS(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!WS(n,e)&&(Or(n,e)&&Or(e,n)&&XS(n,e)&&(yt(n.prev,n,e.prev)||yt(n,e.prev,e))||_a(n,e)&&yt(n.prev,n,n.next)>0&&yt(e.prev,e,e.next)>0)}function yt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function _a(n,e){return n.x===e.x&&n.y===e.y}function cp(n,e,t,i){const s=Ao(yt(n,e,t)),r=Ao(yt(n,e,i)),o=Ao(yt(t,i,n)),a=Ao(yt(t,i,e));return!!(s!==r&&o!==a||s===0&&wo(n,t,e)||r===0&&wo(n,i,e)||o===0&&wo(t,n,i)||a===0&&wo(t,e,i))}function wo(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Ao(n){return n>0?1:n<0?-1:0}function WS(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&cp(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Or(n,e){return yt(n.prev,n,n.next)<0?yt(n,e,n.next)>=0&&yt(n,n.prev,e)>=0:yt(n,e,n.prev)<0||yt(n,n.next,e)<0}function XS(n,e){let t=n,i=!1;const s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function hp(n,e){const t=new Ec(n.i,n.x,n.y),i=new Ec(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function ef(n,e,t,i){const s=new Ec(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Fr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Ec(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function YS(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class Er{static area(e){const t=e.length;let i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return Er.area(e)<0}static triangulateShape(e,t){const i=[],s=[],r=[];tf(e),nf(i,e);let o=e.length;t.forEach(tf);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,nf(i,t[l]);const a=PS.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function tf(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function nf(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class ea extends ch{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ea(e.radius,e.detail)}}class $s extends Wt{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);const a=[],l=[],c=[],h=[];let f=e;const u=(t-e)/s,d=new N,g=new Re;for(let _=0;_<=s;_++){for(let p=0;p<=i;p++){const m=r+p/i*o;d.x=f*Math.cos(m),d.y=f*Math.sin(m),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/t+1)/2,g.y=(d.y/t+1)/2,h.push(g.x,g.y)}f+=u}for(let _=0;_<s;_++){const p=_*(i+1);for(let m=0;m<i;m++){const M=m+p,v=M,E=M+i+1,U=M+i+2,R=M+1;a.push(v,E,R),a.push(E,U,R)}}this.setIndex(a),this.setAttribute("position",new _t(l,3)),this.setAttribute("normal",new _t(c,3)),this.setAttribute("uv",new _t(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $s(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class hh extends Wt{constructor(e=new ap([new Re(0,.5),new Re(-.5,-.5),new Re(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],s=[],r=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new _t(s,3)),this.setAttribute("normal",new _t(r,3)),this.setAttribute("uv",new _t(o,2));function c(h){const f=s.length/3,u=h.extractPoints(t);let d=u.shape;const g=u.holes;Er.isClockWise(d)===!1&&(d=d.reverse());for(let p=0,m=g.length;p<m;p++){const M=g[p];Er.isClockWise(M)===!0&&(g[p]=M.reverse())}const _=Er.triangulateShape(d,g);for(let p=0,m=g.length;p<m;p++){const M=g[p];d=d.concat(M)}for(let p=0,m=d.length;p<m;p++){const M=d[p];s.push(M.x,M.y,0),r.push(0,0,1),o.push(M.x,M.y)}for(let p=0,m=_.length;p<m;p++){const M=_[p],v=M[0]+f,E=M[1]+f,U=M[2]+f;i.push(v,E,U),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return qS(t,e)}static fromJSON(e,t){const i=[];for(let s=0,r=e.shapes.length;s<r;s++){const o=t[e.shapes[s]];i.push(o)}return new hh(i,e.curveSegments)}}function qS(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){const s=n[t];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e}class zs extends Wt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const o=[],a=[],l=[],c=[],h=new N,f=new N,u=new N;for(let d=0;d<=i;d++)for(let g=0;g<=s;g++){const _=g/s*r,p=d/i*Math.PI*2;f.x=(e+t*Math.cos(p))*Math.cos(_),f.y=(e+t*Math.cos(p))*Math.sin(_),f.z=t*Math.sin(p),a.push(f.x,f.y,f.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),u.subVectors(f,h).normalize(),l.push(u.x,u.y,u.z),c.push(g/s),c.push(d/i)}for(let d=1;d<=i;d++)for(let g=1;g<=s;g++){const _=(s+1)*d+g-1,p=(s+1)*(d-1)+g-1,m=(s+1)*(d-1)+g,M=(s+1)*d+g;o.push(_,p,M),o.push(p,m,M)}this.setIndex(o),this.setAttribute("position",new _t(a,3)),this.setAttribute("normal",new _t(l,3)),this.setAttribute("uv",new _t(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zs(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class up extends us{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new $e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zd,this.normalScale=new Re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class uh extends Dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class jS extends uh{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new $e(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const yl=new dt,sf=new N,rf=new N;class fp{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Re(512,512),this.map=null,this.mapPass=null,this.matrix=new dt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new nh,this._frameExtents=new Re(1,1),this._viewportCount=1,this._viewports=[new ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;sf.setFromMatrixPosition(e.matrixWorld),t.position.copy(sf),rf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(rf),t.updateMatrixWorld(),yl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(yl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const of=new dt,hr=new N,Ml=new N;class KS extends fp{constructor(){super(new _n(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Re(4,2),this._viewportCount=6,this._viewports=[new ct(2,1,1,1),new ct(0,1,1,1),new ct(3,1,1,1),new ct(1,1,1,1),new ct(3,0,1,1),new ct(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),hr.setFromMatrixPosition(e.matrixWorld),i.position.copy(hr),Ml.copy(i.position),Ml.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Ml),i.updateMatrixWorld(),s.makeTranslation(-hr.x,-hr.y,-hr.z),of.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(of)}}class af extends uh{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new KS}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class $S extends fp{constructor(){super(new ih(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class JS extends uh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.shadow=new $S}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const lf=new dt;class ZS{constructor(e,t,i=0,s=1/0){this.ray=new eh(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new th,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return lf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(lf),this}intersectObject(e,t=!0,i=[]){return wc(e,this,i,t),i.sort(cf),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)wc(e[s],this,i,t);return i.sort(cf),i}}function cf(n,e){return n.distance-e.distance}function wc(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)wc(r[o],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xc);class QS{constructor(){fe(this,"geometry");fe(this,"materials",["#ed4326","#ff931f","#ffe77b"].map(e=>new Ft({color:e,side:Vt,toneMapped:!1,depthWrite:!1})));const e=new ap;e.moveTo(0,0),e.bezierCurveTo(-.5,-.02,-.65,.35,-.38,.75),e.bezierCurveTo(-.4,.48,-.1,.49,-.18,.89),e.bezierCurveTo(-.24,1.16,.15,1.27,.13,1.6),e.bezierCurveTo(.62,1.23,.18,.94,.38,.65),e.bezierCurveTo(.43,.82,.64,.89,.59,1.05),e.bezierCurveTo(.97,.53,.75,.03,.15,0),e.closePath(),this.geometry=new hh(e,16)}create(e=!1){const t=new bt;for(let i=0;i<3;i++){const s=new Je(e?this.geometry.clone():this.geometry,this.materials[i]);s.scale.set(i===0?1:i===1?.69:.36,i===0?1:i===1?.73:.46,1),s.position.set(i*.035,.015*i,.012*i),s.renderOrder=1+i,t.add(s)}return t}dispose(){this.geometry.dispose();for(const e of this.materials)e.dispose()}}class eb{constructor(e=Math.random){fe(this,"drops",[]);fe(this,"wounds",[]);this.random=e}clear(){this.drops.length=0,this.wounds.length=0}get emitterCount(){return this.wounds.length}burst(e,t,i,s,r=!1){for(let o=0;o<i&&this.drops.length<600;o++)this.drops.push({x:e,y:t,z:1.1+(this.random()-.5)*.3,vx:(this.random()-.5)*(s?4:5),vy:s?7+this.random()*6:r?-1-this.random()*3:(this.random()-.35)*5,vz:(this.random()-.5)*1.8,life:1.6+this.random()*.6,settled:!1})}event(e,t=!1){if(e.kind==="hit"&&this.burst(e.x,e.y,t?7:30,!1),e.kind!=="detach"||!e.part||!e.severed)return;const i=e.part==="head";this.burst(e.x,e.y,t?16:i?80:50,i,!i),this.wounds.length<32&&this.wounds.push({actor:e.actor,part:e.part,x:e.x,y:e.y,life:3,carry:0,up:i})}update(e,t,i=!1){for(let s=this.wounds.length-1;s>=0;s--){const r=this.wounds[s];if(r.life-=e,r.life<=0){this.wounds.splice(s,1);continue}const o=t.actors[r.actor];if(o&&o.hp>0){const l=gn(o,r.part);r.x=o.x+l.x,r.y=o.y+l.y+(r.up?-.2:l.h*.35)}r.carry+=e*(i?10:36);const a=Math.floor(r.carry);r.carry-=a,this.burst(r.x,r.y,a,r.up,!r.up)}for(let s=this.drops.length-1;s>=0;s--){const r=this.drops[s];if(r.life-=e,r.life<=0||r.y<-15){this.drops.splice(s,1);continue}if(r.settled)continue;const o=r.y;if(r.x+=r.vx*e,r.y+=r.vy*e,r.z+=r.vz*e,r.vy-=17*e,r.vy>=0)continue;let a=-1/0;for(const l of t.props){if(l.hp<=0||l.falling||!["crate","floor","roof","balcony","table","car","truck","barrier"].includes(l.kind))continue;const c=l.y+l.h/2;Math.abs(r.x-l.x)<=l.w/2&&o>=c&&r.y<=c&&(a=Math.max(a,c))}a>-1/0&&(r.y=a+.025,r.settled=!0,r.vx=r.vy=r.vz=0,r.life=1.2)}}}const wr=new Map;let Gn;function tb(){if(Gn)return Gn;const n=document.createElement("canvas");n.width=128,n.height=128;const e=n.getContext("2d");e.fillStyle="#ededeb",e.fillRect(0,0,128,128);let t=719;const i=()=>(t=Math.imul(t,1664525)+1013904223|0,(t>>>0)/4294967296);for(let s=0;s<2e3;s++)e.fillStyle=`rgba(24,19,31,${i()*.15})`,e.fillRect(i()*128,i()*128,1+i()*3,1+i()*2);for(let s=0;s<14;s++)e.fillStyle="#231c3014",e.fillRect(i()*128,i()*128,1+i()*6,i()*28);return Gn=new oh(n),Gn.colorSpace=nn,Gn.magFilter=$t,Gn}function kn(n){return wr.has(n)||wr.set(n,new up({color:n,roughness:.88,flatShading:!0,map:Vr.includes(n)||fa.includes(n)?null:tb()})),wr.get(n)}function mi(n,e,t,i){const s=new Je(new Dn(n,e,t),kn(i));return s.castShadow=!0,s.receiveShadow=!0,s}function Ue(n,e,t,i,s,r,o,a){const l=mi(e,t,i,a);return l.position.set(s,r,o),n.add(l),l}const Ar=new Map;function St(n,e,t,i="#f7d438",s="#241e33"){const r=n+i+s;if(!Ar.has(r)){const o=document.createElement("canvas");o.width=512,o.height=192;const a=o.getContext("2d");a.fillStyle=s,a.fillRect(0,0,512,192),a.strokeStyle=i,a.lineWidth=7,a.strokeRect(10,10,492,172);const l=n.split(`
`);a.fillStyle=i,a.textAlign="center",a.textBaseline="middle",a.font=`900 ${l.length>1?54:72}px Impact, sans-serif`,l.forEach((h,f)=>a.fillText(h,256,96+(f-(l.length-1)/2)*65,470));const c=new oh(o);c.colorSpace=nn,c.magFilter=$t,Ar.set(r,new Ft({map:c}))}return new Je(new fs(e,t),Ar.get(r))}function nb(n){const e=new bt;e.userData.look=JSON.stringify(n);for(const t of hn){const i=os[t],s=Vr[n.skin],r=Vs[n.color],a=t==="head"||t.startsWith("hand")||t.startsWith("forearm")||n.clothes===1&&t.startsWith("arm")?s:t.startsWith("foot")?"#272530":t.startsWith("thigh")||t.startsWith("shin")?n.clothes===2?r:"#333346":r,l=mi(i.w,i.h,.5,a);if(l.name=t,l.position.set(i.x,i.y,0),e.add(l),t==="torso"&&(n.clothes===0?(Ue(l,.06,.75,.025,0,0,.27,"#292635"),Ue(l,.16,.13,.03,.2,.05,.27,"#eed5a0")):n.clothes===2&&(Ue(l,.6,.12,.025,0,-.15,.27,"#c7c8c0"),Ue(l,.08,.7,.03,-.2,0,.27,"#a9a9a0")),n.gender===1&&Ue(l,.35,.23,.025,0,.08,.27,"#cfcccc"),n.gender===2&&(Ue(l,.04,.3,.04,-.23,.27,.27,"#f3dc7d"),Ue(l,.04,.3,.04,.23,.27,.27,"#f3dc7d"))),t==="head"){Ue(l,.12,.07,.035,-.15,.05,.27,"#26212e"),Ue(l,.12,.07,.035,.15,.05,.27,"#26212e"),Ue(l,.15,.035,.035,0,-.14,.28,"#6b353b");const c=fa[n.hairColor];if(n.hair!==4){if(Ue(l,n.hair===2?.18:.64,n.hair===2?.35:.19,.54,0,.36,0,c),n.hair===1)for(const h of[-.21,0,.21])Ue(l,.23,.22,.6,h,.4,0,c);n.hair===3&&(Ue(l,.14,.65,.53,-.31,0,0,c),Ue(l,.14,.65,.53,.31,0,0,c))}}}return e}function Sl(n){const e=new bt;if(n==="laser")Ue(e,.85,.25,.23,.05,0,0,"#334052"),Ue(e,.3,.12,.3,.55,0,0,"#66ffff"),Ue(e,.12,.35,.14,-.2,-.2,0,"#6c40a8");else if(n==="flamethrower")Ue(e,.8,.25,.25,.1,0,0,"#795536"),Ue(e,.3,.3,.3,.55,0,0,"#ff7735"),Ue(e,.35,.6,.3,-.25,-.1,0,"#ba332b");else if(n==="axe")Ue(e,.12,.95,.12,0,0,0,"#865d3d"),Ue(e,.55,.4,.16,.16,.35,0,"#b9bec3");else if(n==="shank"){Ue(e,.14,.35,.14,0,-.12,0,"#3d3545");const t=Ue(e,.12,.5,.05,0,.27,0,"#e0e4df");t.rotation.z=-.07}else n==="shotgun"?(Ue(e,1,.12,.14,.2,0,0,"#9296a0"),Ue(e,.48,.22,.21,-.4,-.05,0,"#906445"),Ue(e,.23,.23,.22,.07,-.06,0,"#69503c")):n==="smg"&&(Ue(e,.8,.25,.2,0,0,0,"#4b5160"),Ue(e,.12,.4,.12,-.1,-.25,0,"#343645"),Ue(e,.35,.1,.11,.5,.07,0,"#9b9fa8"));return e}function dp(n,e){const t=new bt,i=n.w,s=n.h,o={metal:"#68737c",wood:"#7f665c",glass:"#3c929c",fuel:"#c7444f",concrete:"#5d5c6a",fabric:"#837e78"}[n.material],a=(l,c,h,f,u,d,g)=>Ue(t,l,c,h,f,u,d,g);switch(n.kind){case"entrance":{a(i+.3,s+.3,.25,0,0,-2.6,e==="impound"?"#7e6748":"#39464e");const h=mi(i,s,.16,e==="laundry"?"#b16a61":e==="market"?"#557c97":"#8b7949");h.position.z=-2.35,h.name="entry-door",t.add(h);const f=St(e==="laundry"?"STAFF ONLY":e==="market"?"DELIVERIES":"NO RELEASE",i*.9,.5,"#e3ce83","#303339");f.position.set(0,s*.3,-2.22),f.name="entry-label",t.add(f);const u=St("INCOMING",i*.95,.55,"#ff8c9b","#462936");u.name="entry-warning",u.visible=!1,u.position.set(0,.1,-2.15),t.add(u);break}case"washer":case"dryer":{a(i,s,1.5,0,0,0,n.kind==="washer"?"#99aaa4":"#be896d");const h=new Je(new zs(i*.3,.09,6,20),kn("#d5d1bb"));h.position.set(0,-.08,.81),t.add(h);const f=new Je(new Ks(i*.26,20),kn(n.kind==="dryer"?"#5c3a38":"#294956"));f.position.set(0,-.08,.82),t.add(f);const u=new bt;u.name="laundry-drum";for(let d=0;d<3;d++)Ue(u,.35,.22,.05,Math.cos(d*2.1)*.35,Math.sin(d*2.1)*.35,.86,["#e2bc69","#ba4e75","#82bab2"][d]);t.add(u),a(i*.8,.25,.08,0,s*.35,.8,"#39434a"),a(.2,.16,.1,i*.25,s*.35,.87,"#a4e6bf");break}case"detergent":case"freezer":{n.kind==="freezer"?(a(i,s,.8,0,0,-1.3,"#729eaf"),a(i*.8,s*.75,.06,0,0,-.86,"#243f55"),a(.1,s*.7,.15,i*.22,0,-.74,"#b9dbe0")):(a(i,s,.6,0,0,0,"#42c5ce"),a(i*.4,.12,.3,0,s*.55,0,"#ffd35c"));const h=new Je(new Ks(3.7,32),new Ft({color:n.kind==="freezer"?"#68b9ff":"#49e4dc",transparent:!0,opacity:.27,side:Vt,depthWrite:!1,toneMapped:!1}));h.rotation.x=-Math.PI/2,h.position.set(0,-n.y+.25,0),h.scale.y=.55,h.userData.ownedMaterial=!0,t.add(h);const f=St(n.kind==="freezer"?"COLD / SLOW":"SOAP / SLIPPERY",3,.4,n.kind==="freezer"?"#a9d9ff":"#a6f8ef","#263b4a");if(f.position.set(0,s*.65+.3,.6),t.add(f),n.kind==="freezer"){const u=new bt;u.name="cold-air";for(let d=0;d<3;d++){const g=new Je(new ea(.45,0),new Ft({color:"#b2deff",transparent:!0,opacity:.2,depthWrite:!1}));g.position.set(d-1,-1,.6),g.userData.ownedMaterial=!0,u.add(g)}t.add(u)}break}case"shelf":for(const h of[-s*.4,0,s*.4]){a(i,.12,1.3,0,h,0,"#78887b");for(let f=0;f<4;f++)a(.7,.65,.8,(f-1.5)*i*.22,h+.38,0,["#b99d55","#a95950","#719c9e","#a7b36f"][f])}for(const h of[-i*.48,i*.48])a(.12,s,1.2,h,0,0,"#616c75");break;case"pallet":for(let h=0;h<4;h++)a(i,.14,1.6,0,-s*.35+h*s*.24,0,h%2?"#987447":"#c19a62");for(const h of[-i*.35,i*.35])a(.25,s,1.4,h,0,0,"#735b43");break;case"forklift":a(i*.65,s*.35,1.8,-i*.1,-s*.15,0,"#d8a73a"),a(.6,s,1.5,i*.22,0,0,"#514d43"),a(i*.5,.15,.18,i*.4,-s*.4,.7,"#b7b6a0"),a(i*.5,.15,.18,i*.4,-s*.4,-.7,"#b7b6a0");for(const h of[-i*.3,i*.23])for(const f of[-.85,.85]){const u=new Je(new Qo(.4,.4,.25,10),kn("#2a2b30"));u.rotation.x=Math.PI/2,u.position.set(h,-s*.32,f),t.add(u)}break;case"towchain":for(let h=0;h<9;h++){const f=new Je(new zs(.17,.05,5,10),kn("#ff5268"));f.position.set((h/8-.5)*i,0,.2),f.rotation.y=h%2?.9:0,t.add(f)}break;case"stall":{a(i,s,.18,0,0,-2.1,"#273b3e");for(const g of[-i/2,i/2])a(.12,s,2.8,g,0,-.7,"#47756e"),a(.16,.2,.2,g,-s/2,.6,"#b6b6a4");a(1.1,.55,1.1,0,-s*.31,-.7,"#d7d6bb"),a(.85,1.1,.35,0,-s*.18,-1.3,"#c8c8b3");const h=new bt;h.name="stall-door",h.position.set(-i*.44,0,.8);const f=mi(i*.88,s*.85,.13,"#577d70");f.position.x=i*.44,h.add(f);const u=mi(.22,.12,.12,"#dfba72");u.position.set(i*.8,0,.12),h.add(u),t.add(h);const d=St("OCCUPIED",i*.7,.4,"#ffbe91","#38252f");d.name="stall-label",d.position.set(0,s*.33,.93),t.add(d);break}case"urinal":{if(a(i,s,.3,0,0,-1.4,"#cbcbb5"),a(i*.85,s*.5,.9,0,-s*.16,-.9,"#e0dec5"),a(i*.57,s*.29,.07,0,-s*.08,-.41,n.toxic?"#b4d834":"#436b66"),a(.13,s*.3,.13,0,s*.62,-1.25,"#b7b8a9"),a(.4,.12,.16,0,s*.45,-1.15,"#b7b8a9"),n.toxic){const h=St("TOXIC / KEEP BACK",3,.45,"#ff7b87","#3f222d");h.position.set(0,s*.7,.1),t.add(h);const f=new Je(new $s(2.45,2.6,32),new Ft({color:"#ff345f",side:Vt,transparent:!0,opacity:.85,depthWrite:!1,toneMapped:!1}));f.rotation.x=-Math.PI/2,f.position.set(0,-n.y+.25,0),f.userData.ownedMaterial=!0,t.add(f);const u=new bt;u.name="toxic-gas";for(let d=0;d<4;d++){const g=new Je(new ea(.5,0),new Ft({color:d%2?"#c9df43":"#92b82e",transparent:!0,opacity:.22,depthWrite:!1,toneMapped:!1}));g.position.set((d-1.5)*1.15,-.6,.5+d%2*.4),g.userData.ownedMaterial=!0,u.add(g)}t.add(u)}break}case"sink":a(i,.38,1.5,0,s*.2,-.5,"#cbccb7"),a(i*.55,.08,.85,0,s*.2+.21,-.5,"#52635d"),a(.18,s*.6,.18,0,-s*.15,-.5,"#818e84"),a(.15,.6,.15,i*.3,s*.4,-.8,"#b2b8af");break;case"crate":{a(i,s,1,0,0,0,n.color?"#bd6944":"#9f7c45");for(const u of[-i*.43,i*.43])a(.12,s,.08,u,0,.54,"#e0b979");for(const u of[-s*.43,s*.43])a(i,.1,.08,0,u,.55,"#e0b979");const h=new Je(new $s(.16,.22,16),kn("#ffe17b"));h.position.set(0,.12,.57),t.add(h);const f=St(n.color?"AIM HIGH":"AIM LOW",1.1,.27,"#ffe17b");f.position.set(0,-.31,.58),t.add(f);break}case"floor":a(i,s,8,0,0,-1,e==="bathroom"?"#61756a":"#454353"),e!=="bathroom"&&a(i*.4,.025,.12,0,s/2+.035,-1.5,"#a69a70"),a(i,.04,.12,0,s/2+.02,2.9,e==="bathroom"?"#a6ad95":"#9c8958");break;case"pump":a(i,s,1.35,0,0,-.6,"#bd364f"),a(i*.9,s*.4,1.5,0,.45,-.55,"#d3cebc"),a(i*.65,.6,.07,0,.65,.23,"#152d31");const l=St("9.99",i*.6,.45,"#a4e8ab","#13272b");l.position.set(0,.7,.29),t.add(l),a(.1,s*.7,.1,i*.57,-.3,-.1,"#1a1728");break;case"car":case"truck":a(i,s*.55,2,0,-s*.1,0,n.kind==="car"?"#b6a46c":"#527a78"),a(i*.48,s*.5,1.7,-i*.1,s*.34,0,n.kind==="car"?"#537c81":"#9b8174"),a(i*.4,s*.3,.06,-i*.1,s*.33,.89,"#243b4c"),a(i,.18,2.1,0,-s*.36,0,"#393442");for(const h of[-i*.34,i*.34]){const f=new Je(new Qo(.52,.52,2.1,10),kn("#26232d"));f.rotation.x=Math.PI/2,f.position.set(h,-s*.35,0),t.add(f)}a(.25,.25,.04,i*.43,0,1.03,"#e7d68f");break;case"post":case"pole":a(i,s,.6,0,0,-2,o),a(i*1.5,.2,.9,0,-s/2,-2,"#8f8b8f");break;case"roof":case"balcony":a(i,s,5,0,0,-1.2,e==="motel"?"#857587":"#b54b72"),a(i,.14,.15,0,0,1.35,"#f1b638");break;case"glass":const c=new Je(new Dn(i,s,.09),new up({color:"#488894",transparent:!0,opacity:.6,roughness:.3}));c.position.z=-1.2,c.userData.ownedMaterial=!0,t.add(c),a(i,.07,.13,0,-s/2,-1.15,"#c8b7a0");break;case"sign":{const h=e==="gas"?`LAST STOP
GAS`:e==="rest"?`REST AREA
1 MILE`:`NO-TELL
VACANCY`;a(i,s,.35,0,0,-1.8,"#382e48");const f=St(h,i*.94,s*.93,e==="motel"?"#ff8bad":"#f6d23a");f.position.z=-1.59,t.add(f);break}case"can":a(i,s,.6,0,0,0,"#d7ad3a"),a(i*.5,.15,.18,0,s/2,0,"#33303b");break;case"door":a(i,s,.2,0,0,-1.9,"#694761"),a(.09,.09,.1,i*.3,0,-1.73,"#ead176");break;case"table":case"bench":a(i,.24,1.6,0,s*.35,0,o);for(const h of[-i*.36,i*.36])a(.15,s,.8,h,0,0,"#514353");break;case"mattress":a(i,s,1.8,0,0,0,"#aea291");for(let h=-i*.4;h<i*.5;h+=.45)a(.04,s*1.01,1.81,h,0,0,"#857887");break;case"tire":{const h=new Je(new zs(i*.36,i*.16,6,12),kn("#292735"));t.add(h);break}case"railing":a(i,.09,.12,0,s/2,-.1,"#bcaabb");for(let h=-i/2;h<i/2;h+=.8)a(.06,s,.1,h,0,-.1,"#bcaabb");break;default:if(a(i,s,1.35,0,0,0,o),["fridge","vending","ice","tv"].includes(n.kind)){a(i*.8,s*.7,.07,0,s*.05,.71,"#243745");const h=St(n.kind==="vending"?`BAD
IDEA`:n.kind==="ice"?"ICE":n.kind==="tv"?"NO SIGNAL":"COLD",i*.7,s*.45,n.kind==="tv"?"#b99bbb":"#b9cfa2","#1e3040");h.position.set(0,.1,.76),t.add(h)}if(n.kind==="ac")for(let h=-i*.4;h<i*.4;h+=.22)a(.06,s*.65,.05,h,0,.73,"#383b4b")}return t}function ib(n){const e=new bt,t=document.createElement("canvas");t.width=2048,t.height=512;const i=t.getContext("2d");i.fillStyle=n==="motel"?"#261f37":n==="rest"?"#263339":"#2b263a",i.fillRect(0,0,2048,512);for(let a=0;a<90;a++){const l=a*25,c=130+a*73%150;i.fillStyle=["#343246","#3f364b","#2e3446"][a%3],i.fillRect(l,c,30+a%6*9,512-c),i.fillStyle=a%2?"#927652":"#486577";for(let h=0;h<5;h++)i.fillRect(l+8,c+20+h*36,7,10)}if(n==="bathroom"||n==="laundry"||n==="market"){i.fillStyle=n==="laundry"?"#bc9b89":n==="market"?"#6c8292":"#729080",i.fillRect(0,0,2048,512);for(let a=0;a<8;a++)for(let l=0;l<64;l++)i.fillStyle=(n==="laundry"?["#b39b88","#cbb29b","#ba9c88","#ae9180"]:n==="market"?["#647e8c","#728b95","#5e7885","#88979b"]:["#6f8b7c","#7e9684","#637f76","#8c9e86"])[(a*7+l*11)%4],i.fillRect(l*32+1,a*64+1,30,62),(a*13+l*3)%19===0&&(i.fillStyle="#475b4d",i.fillRect(l*32+7,a*64+5,3,48))}const s=new oh(t);s.colorSpace=nn,s.magFilter=$t;const r=new Je(new fs(190,35),new Ft({map:s}));r.position.set(0,["bathroom","laundry","market"].includes(n)?5:12,["bathroom","laundry","market"].includes(n)?-6:-18),["bathroom","laundry","market"].includes(n)&&r.scale.set(128/190,12/35,1),r.userData.ownedTexture=!0,e.add(r);const o=new bt;if(n==="gas"){Ue(o,31,8,1,24,3,-5,"#675d73"),Ue(o,31,.5,1.4,24,7,-4.8,"#b95b74");for(let l=13;l<38;l+=6)Ue(o,4.8,3.5,.06,l,2.4,-4.43,"#273c4c");const a=St("CHEAP THRILLS / OPEN 24H",27,1.4,"#f0c32f","#33283e");a.position.set(24,6,-4.4),o.add(a)}else if(n==="motel"){Ue(o,118,10,1,0,4.5,-4.5,"#66576c"),Ue(o,119,.6,1.4,0,9.5,-4.2,"#9d617e");for(let a=-50;a<55;a+=11)for(const l of[2,7]){Ue(o,4.2,3.4,.05,a,l,-3.94,"#302b3d");const c=St(String(101+Math.floor((a+50)/11)+(l>3?10:0)),1.2,.5,"#cca881","#372d40");c.position.set(a,l+1.1,-3.88),o.add(c)}}else if(n==="bathroom"){for(const c of[1,7.5])Ue(o,128,.14,.2,0,c,-4.5,"#414e4b");for(let c=-54;c<60;c+=18){Ue(o,5,.18,1,c,8.2,-.8,"#e1ebc6");const h=new Je(new Dn(4.6,.08,.8),new Ft({color:"#dcf4c0"}));h.position.set(c,8.08,-.8),h.userData.ownedMaterial=!0,o.add(h)}const a=St("STALL OF DUTY / TRUCK STOP BATHROOM",30,1,"#efe3aa","#35413e");a.position.set(-35,6.5,-3),o.add(a);const l=St("TOXIC URINALS / BREAK TO DISABLE",24,.9,"#ff8c9b","#3e2532");l.position.set(30,6.5,-3),o.add(l)}else if(n==="laundry"||n==="market"){for(let c=-54;c<60;c+=16)Ue(o,5,.2,.8,c,8,-1,"#d3d6b8"),Ue(o,1,6,.2,c,3,-4.5,n==="laundry"?"#a97664":"#4b626d");const a=St(n==="laundry"?"SPIN CYCLE SLAUGHTER / OPEN ALL NIGHT":"COLD CUTS / RECEIVING & DISPATCH",42,1.3,n==="laundry"?"#ffd279":"#bce9ef",n==="laundry"?"#6c3f43":"#293e4c");a.position.set(-25,6.5,-3),o.add(a);const l=St(n==="laundry"?"CAUTION / OVERLOADED MACHINES":"FORKLIFT LANE / KEEP CLEAR",25,1,"#ff9f98","#412c36");l.position.set(30,6.5,-3),o.add(l)}else if(n==="impound"){for(let c=-60;c<=60;c+=4){Ue(o,.14,5,.18,c,2.5,-3.5,"#79877d");for(let h=1;h<5;h++)Ue(o,4,.035,.06,c+2,h,-3.4,"#73827d")}Ue(o,17,6,1,-45,3,-6,"#726c5c");const a=St("FINAL NOTICE / VEHICLE IMPOUND",32,2,"#ffc666","#45383a");a.position.set(-28,7,-3),o.add(a);const l=St("NO REFUNDS / WATCH THE CHAINS",26,1.3,"#ff8d8e","#3c2a34");l.position.set(28,6,-3),o.add(l)}else{Ue(o,25,6,1,27,2.7,-5,"#656c73");const a=St("RESTROOMS / NO GUARANTEES",24,1.2,"#94c6bd","#263c45");a.position.set(27,5,-4.4),o.add(a)}return e.add(o),e}function tn(n){n.traverse(e=>{var t;if(e instanceof Je&&(e.geometry.dispose(),e.userData.ownedMaterial&&e.material.dispose(),e.userData.ownedTexture)){const i=e.material;(t=i.map)==null||t.dispose(),i.dispose()}})}function sb(){Gn==null||Gn.dispose(),Gn=void 0,wr.forEach(n=>n.dispose()),wr.clear(),Ar.forEach(n=>{var e;(e=n.map)==null||e.dispose(),n.dispose()}),Ar.clear()}function pp(n,e){return n==="head"||n.startsWith("hand")||n.startsWith("forearm")?Vr[e.skin]:n.startsWith("foot")?"#292735":Vs[e.color]}function hf(n){if(n.kind==="washer-door"){const e=new bt,t=new Je(new zs(.55,.1,6,20),kn("#c3cdc6"));e.add(t);const i=new Je(new Ks(.48,20),kn("#365967"));return i.position.z=.02,e.add(i),e}if(n.kind==="limb"){const e=new bt,t=n.part??"forearmL",i=os[t];return e.add(mi(i.w,i.h,.35,n.look?pp(t,n.look):"#b87953")),e}return dp({kind:n.kind,y:0,w:n.kind==="tire"?1.1:n.kind==="can"?.7:1.1,h:n.kind==="tire"||n.kind==="can"?1.2:1.3,hp:n.hp,maxHp:n.hp,material:n.kind==="can"?"fuel":n.kind==="tv"?"glass":"fabric",color:0},"gas")}function uf(n){const e=new bt;if(n==="cart"){Ue(e,1,.12,.65,0,-.12,0,"#75d8bf"),Ue(e,.1,.7,.65,.45,.2,0,"#75d8bf"),Ue(e,.8,.3,.08,0,.1,.3,"#b7ecda"),Ue(e,.8,.3,.08,0,.1,-.3,"#b7ecda");for(const t of[-.35,.35])for(const i of[-.25,.25]){const s=mi(.18,.18,.12,"#26232d");s.position.set(t,-.34,i),e.add(s)}}else for(const t of[-.25,.25])if(Ue(e,.35,.3,.35,t,0,0,n==="recoil"?"#af83f2":"#75d8bf"),Ue(e,.5,.13,.4,t+.08,-.2,0,"#d2f6da"),n==="skates")for(const i of[-.13,.13])Ue(e,.13,.13,.42,t+i,-.33,0,"#ffe17b");else Ue(e,.2,.12,.25,t,-.34,0,"#ffb255");return e}class rb{constructor(e,t,i){fe(this,"renderer");fe(this,"scene",new gS);fe(this,"camera",new ih);fe(this,"actors",new Map);fe(this,"props",new Map);fe(this,"blood",new Map);fe(this,"debris",new Map);fe(this,"shots",new Map);fe(this,"pickups",new Map);fe(this,"environment",new bt);fe(this,"venue","");fe(this,"flames",new Map);fe(this,"flameStyle",new QS);fe(this,"thrownModels",new Map);fe(this,"boostModels",new Map);fe(this,"majorModel");fe(this,"bloodParticles",new eb);fe(this,"bloodGeometry",new Wt);fe(this,"bloodPositions",new Float32Array(600*3));fe(this,"bloodPoints",new gl(this.bloodGeometry,new Mc({size:6,sizeAttenuation:!1,color:"#f52e48",transparent:!0,opacity:1,depthWrite:!1,toneMapped:!1,fog:!1})));fe(this,"bloodRound",-1);fe(this,"beams",[]);fe(this,"frame",0);fe(this,"last",0);fe(this,"center",0);fe(this,"width",1);fe(this,"height",1);fe(this,"observer");fe(this,"focused",0);fe(this,"particleGeometry",new Wt);fe(this,"positions",new Float32Array(500*3));fe(this,"colors",new Float32Array(500*3));fe(this,"particles",[]);fe(this,"points");fe(this,"sun");fe(this,"left",new Je(new fs(1,30),new Ft({color:"#c83f62",transparent:!0,opacity:.22,side:Vt,depthWrite:!1})));fe(this,"right",this.left.clone());fe(this,"reducedEffects",!1);fe(this,"resize",()=>{this.width=Math.max(1,this.host.clientWidth),this.height=Math.max(1,this.host.clientHeight),this.renderer.setSize(this.width,this.height);const e=this.width/this.height,t=e<.8?12:9;this.camera.left=-t*e,this.camera.right=t*e,this.camera.top=t,this.camera.bottom=-t,this.camera.near=.1,this.camera.far=150,this.camera.updateProjectionMatrix()});fe(this,"animate",e=>{const t=Math.min(.08,(e-this.last)/1e3||0);this.last=e,this.render(this.state(),t,e/1e3),this.frame=requestAnimationFrame(this.animate)});this.host=e,this.state=t,this.localId=i,this.renderer=new mS({antialias:!1,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,1.4)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Yc,this.renderer.outputColorSpace=nn,this.renderer.toneMapping=Rd,this.renderer.toneMappingExposure=1.28,e.appendChild(this.renderer.domElement),this.scene.background=new $e("#211b32"),this.scene.fog=new rh("#211b32",40,105),this.scene.add(new jS("#b7a8d8","#43424a",2.5)),this.sun=new JS("#edd6a5",3),this.sun.position.set(-10,16,14),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(1024,1024),Object.assign(this.sun.shadow.camera,{left:-24,right:24,top:20,bottom:-15,far:70}),this.sun.shadow.normalBias=.05,this.scene.add(this.sun,this.sun.target);const s=new af("#ed2867",160,33);s.position.set(-27,8,6);const r=new af("#26c6c1",120,33);r.position.set(25,7,5),this.scene.add(s,r),this.scene.add(this.environment,this.left,this.right),this.left.position.z=3.5,this.right.position.z=3.5,this.particleGeometry.setAttribute("position",new fn(this.positions,3).setUsage(Ba)),this.particleGeometry.setAttribute("color",new fn(this.colors,3).setUsage(Ba)),this.particleGeometry.setDrawRange(0,0),this.points=new gl(this.particleGeometry,new Mc({size:3,sizeAttenuation:!1,toneMapped:!1,vertexColors:!0,transparent:!0,opacity:.95,depthWrite:!1})),this.points.frustumCulled=!1,this.scene.add(this.points),this.bloodGeometry.setAttribute("position",new fn(this.bloodPositions,3).setUsage(Ba)),this.bloodGeometry.setDrawRange(0,0),this.bloodPoints.frustumCulled=!1,this.bloodPoints.renderOrder=3,this.scene.add(this.bloodPoints),this.observer=new ResizeObserver(this.resize),this.observer.observe(e),this.resize(),this.frame=requestAnimationFrame(this.animate)}get canvas(){return this.renderer.domElement}soundPosition(e,t){const i=new N(e,t,.7).project(this.camera);return pg(i.x,i.y)}setSpectator(e){this.focused=e}aim(e,t){const i=this.host.getBoundingClientRect(),s=new Re((e-i.left)/i.width*2-1,-(t-i.top)/i.height*2+1),r=new ZS;r.setFromCamera(s,this.camera);const o=new N;if(r.ray.intersectPlane(new Ai(new N(0,0,1),0),o)){const a=this.state().actors[this.localId()],l=o.x-a.x,c=o.y-a.y-ci(a),h=Math.max(.01,Math.hypot(l,c));return{x:Math.round(l/h*1024)/1024,y:Math.round(c/h*1024)/1024}}return{x:1,y:0}}present(e){this.bloodRound!==this.state().round&&(this.bloodParticles.clear(),this.bloodRound=this.state().round);for(const t of e){if(this.bloodParticles.event(t,this.reducedEffects),t.kind==="hit"||t.kind==="detach")continue;if(t.weapon==="laser"&&t.endX!==void 0&&t.endY!==void 0){const r=t.endX-t.x,o=t.endY-t.y,a=new Je(new Dn(Math.max(.01,Math.hypot(r,o)),.085,.085),new Ft({color:"#8cffff",transparent:!0,opacity:1,depthWrite:!1}));a.position.set((t.x+t.endX)/2,(t.y+t.endY)/2,.8),a.rotation.z=Math.atan2(o,r),this.scene.add(a),this.beams.push({mesh:a,life:.16})}if(["ignite","jump","land","swap","reload"].includes(t.kind))continue;const i=new $e(t.kind==="scream"||t.kind==="cry"?"#80cde1":t.kind==="explosion"?"#f9a349":t.kind==="break"?"#d2c3a4":"#f9de5e"),s=this.reducedEffects?2:t.kind==="explosion"?35:t.kind==="shot"?4:10;for(let r=0;r<s&&this.particles.length<500;r++)this.particles.push({x:t.x,y:t.y,z:1,vx:(Math.random()-.5)*(t.kind==="explosion"?12:6),vy:Math.random()*7,life:t.kind==="shot"?.08:.3+Math.random()*.4,color:i})}}chaosEffects(e,t){for(const[s,r]of this.thrownModels)e.thrown.some(o=>o.id===s)||(this.scene.remove(r),tn(r),this.thrownModels.delete(s));for(const s of e.thrown){let r=this.thrownModels.get(s.id);if(!r){r=hf(s);const o=new Je(new $s(.65,.71,20),new Ft({color:"#ff345f",side:Vt,toneMapped:!1}));o.position.z=1.2,o.userData.ownedMaterial=!0,r.add(o),this.thrownModels.set(s.id,r),this.scene.add(r)}r.position.set(s.x,s.y,.8),r.rotation.z=s.angle}for(const[s,r]of this.boostModels)e.boosts.some(o=>o.id===s)||(this.scene.remove(r),tn(r),this.boostModels.delete(s));for(const s of e.boosts){let r=this.boostModels.get(s.id);if(!r){r=uf(s.kind);const o=St(wd[s.kind],2.5,.4,"#a9f5d7");o.position.set(0,.85,.3),r.add(o),this.boostModels.set(s.id,r),this.scene.add(r)}r.position.set(s.x,s.y+Math.sin(t*3)*.1,1),r.rotation.y=Math.sin(t)*.15}const i=e.major;if(this.majorModel&&(!i||i.kind!==this.majorModel.kind)&&(this.scene.remove(this.majorModel.group),tn(this.majorModel.group),this.majorModel=void 0),i){const s=i.kind==="foam",r=i.kind==="truck"||i.kind==="forklift",o=r?128:s?16:i.kind==="spin"?8:i.kind==="tow"?12:4;if(!this.majorModel){const c=new bt,h=s?"#78e9cf":"#ff345f",f=St(s?"FOAM / NO DAMAGE":i.kind==="truck"?"DANGER / TRUCK →":i.kind==="forklift"?"DANGER / FORKLIFT →":i.kind==="spin"?"DANGER / DOOR + DRYER FIRE":i.kind==="pallet"?"DANGER / FALLING PALLET":i.kind==="tow"?"DANGER / TOW — SHOOT CHAIN":"DANGER / FALLING AC",4,.6,h);f.name="warning",c.add(f);const u=r?48:12;for(let d=0;d<u;d++){const g=new Je(new Dn(o/u*.6,.035,2.8),new Ft({color:h,transparent:!0,opacity:.6,toneMapped:!1,depthWrite:!1}));g.userData.ownedMaterial=!0,g.position.set((d/(u-1)-.5)*o,.28,.8),g.rotation.y=.3,c.add(g)}this.scene.add(c),this.majorModel={kind:i.kind,group:c}}const a=this.majorModel.group;a.position.x=r?0:i.x;const l=a.getObjectByName("warning");if(l.position.set(r?Math.max(this.center-8,Math.min(this.center+8,i.x)):0,3.7,2),l.scale.setScalar(.98+Math.sin(t*6)*.025),s&&i.started&&this.particles.length<470)for(let c=0;c<2;c++)this.particles.push({x:i.x+(Math.random()-.5)*16,y:6,z:1,vx:.4,vy:-3,life:1.5,color:new $e("#acf5e3")})}}burningEffects(e,t,i){const s=[...e.fires.map(r=>({key:`f${r.id}`,x:r.x,y:r.y-.3,w:r.radius*1.6,h:1.8})),...e.actors.filter(r=>r.hp>0&&r.onFire).map(r=>({key:`a${r.id}`,x:r.x,y:r.y+.15,w:1,h:Tn(r)})),...e.props.filter(r=>r.hp>0&&r.onFire).map(r=>({key:`p${r.id}`,x:r.x,y:r.y-r.h/2,w:Math.min(5,r.w),h:Math.min(3,r.h)})),...e.debris.filter(r=>r.hp>0&&r.onFire).map(r=>({key:`d${r.id}`,x:r.x,y:r.y-r.h/2,w:r.w,h:.5})),...e.boosts.filter(r=>r.onFire).map(r=>({key:`b${r.id}`,x:r.x,y:r.y,w:.8,h:.6})),...e.pickups.filter(r=>r.onFire).map(r=>({key:`i${r.id}`,x:r.x,y:r.y,w:.6,h:.6}))].filter(r=>Math.abs(r.x-this.center)<30).slice(0,96);for(const[r,o]of this.flames)s.some(a=>a.key===r)||(this.scene.remove(o),this.flames.delete(r));for(const r of s){let o=this.flames.get(r.key);if(!o){o=new bt;for(let a=0;a<5;a++){const l=this.flameStyle.create();o.add(l)}this.flames.set(r.key,o),this.scene.add(o)}o.position.set(r.x,r.y,.75),o.quaternion.copy(this.camera.quaternion),o.children.forEach((a,l)=>{const c=.86+Math.sin(t*10+l*2+r.x)*.13+Math.sin(t*17+l)*.06,h=Math.max(.45,r.h)*c;a.position.set((l/4-.5)*r.w+Math.sin(t*7+l)*.045,0,l*.035),a.scale.set((r.w/4+.3)*(1.05-Math.sin(t*10+l)*.08),h*.7,1),a.rotation.z=Math.sin(t*8+l)*.055}),!this.reducedEffects&&this.particles.length<480&&Math.random()<i*8&&this.particles.push({x:r.x,y:r.y+r.h,z:.5,vx:.3,vy:1.6,life:.8,color:new $e("#57505c")})}}render(e,t,i){var h,f;if(e.venue!==this.venue){this.scene.remove(this.environment),tn(this.environment),this.environment=ib(e.venue),this.scene.add(this.environment),this.venue=e.venue;for(const u of this.props.values())this.scene.remove(u),tn(u);this.props.clear()}const s=e.phase==="lobby"||e.phase==="countdown",r=e.actors[this.localId()],o=r.hp>0?r:((h=e.actors[this.focused])==null?void 0:h.hp)>0&&!e.actors[this.focused].pendingSpawn?e.actors[this.focused]:e.actors.find(u=>u.hp>0&&!u.pendingSpawn)??r,a=s?-25:o.x;this.center+=(a-this.center)*(1-Math.exp(-t*7)||1);const l=s?4:Math.max(4,o.y+2);this.camera.position.set(this.center+3.5,l+4,30),this.camera.lookAt(this.center,l,0),this.camera.updateMatrixWorld(),this.sun.position.set(this.center-12,16,14),this.sun.target.position.set(this.center,0,0),this.left.visible=this.right.visible=e.phase==="match",this.left.position.x=e.zoneLeft-50,this.left.scale.x=100,this.left.position.y=8,this.right.position.x=e.zoneRight+50,this.right.scale.x=100,this.right.position.y=8;for(const u of e.actors){let d=this.actors.get(u.id);if(d&&d.userData.look!==JSON.stringify(u.look)&&(this.scene.remove(d),tn(d),this.actors.delete(u.id),d=void 0),d||(d=nb(u.look),this.scene.add(d),this.actors.set(u.id,d)),!u.human&&u.personality&&!d.getObjectByName("personality")){const w=St(eg[u.personality],2.3,.32,"#eacb79");w.name="personality",d.add(w)}const g=d.getObjectByName("personality");g&&g.position.set(0,Tn(u)+.5,.5),d.visible=s?u.id===this.localId():u.hp>0&&!u.pendingSpawn,d.scale.setScalar(s?2:1),d.position.set(s?-20:u.x,s?1.1:u.y,s?6:0);const _=Os(u);!s&&_===1&&u.grounded&&(d.position.y+=Math.abs(Math.sin(i*10))*.22*Math.min(1,Math.abs(u.vx)/2));const p=Math.sin(i*14)*Math.min(1,Math.abs(u.vx)/5);for(const w of hn){const z=d.getObjectByName(w);z.visible=s||u.parts[w]>0;const W=gn(u,w);if(z.position.set(W.x,W.y,0),z.scale.y=W.length/os[w].h,z.rotation.z=W.rotation+(_>0&&(w.startsWith("thigh")||w.startsWith("shin"))?(w.endsWith("L")?1:-1)*p*.22:w==="torso"&&!u.parts.head?Math.sin(i*8)*.12:0),!s&&_===0&&u.grounded){const $=Math.sin(i*11)*Math.min(1,Math.abs(u.vx)/1.5);w==="torso"&&(z.rotation.z+=$*.035)}}const m=!u.parts.armL&&!u.parts.armR?"body":u.weapons[u.slot]??"shank";let M=d.getObjectByName("weapon");(M==null?void 0:M.userData.weapon)!==m&&(M&&(d.remove(M),tn(M)),M=Sl(m),M.name="weapon",M.userData.weapon=m,d.add(M));const v=Ls(u),E=m==="shank"||m==="axe",U=m==="axe"?.35:m==="shank"?.09:0;M.position.set(v.x+v.dx*U,v.y+v.dy*U,.4),M.rotation.z=v.angle-(E?Math.PI/2:0),M.scale.setScalar(m==="shank"?.75:1),M.visible=!u.carrying;let R=d.getObjectByName("carried");const P=u.carrying?JSON.stringify(u.carrying):"";R&&R.userData.signature!==P&&(d.remove(R),tn(R),R=void 0),u.carrying&&!R&&(R=hf(u.carrying),R.name="carried",R.userData.signature=P,d.add(R)),R&&(R.position.set(v.x,v.y,.7),R.rotation.z=v.angle*.3,R.scale.setScalar(.65));let D=d.getObjectByName("charge-cart");((f=u.boost)==null?void 0:f.kind)==="cart"&&u.boost.until>e.frame?(D||(D=uf("cart"),D.name="charge-cart",d.add(D)),D.position.set(u.face*.45,.4,.4)):D&&(d.remove(D),tn(D));let Z=d.getObjectByName("stun-stars");if((u.stunUntil??0)>e.frame){if(!Z){Z=new bt,Z.name="stun-stars";for(let w=0;w<3;w++){const z=mi(.12,.12,.12,"#ffe17b");z.position.set(Math.cos(w*Math.PI*2/3)*.55,0,Math.sin(w*Math.PI*2/3)*.55),Z.add(z)}d.add(Z)}Z.position.y=Tn(u)+.25,Z.rotation.y=i*5}else Z&&(d.remove(Z),tn(Z));const x=d.getObjectByName("torso");x.rotation.z+=u.attacking>0?u.face*.08:0}for(const[u,d]of this.props)e.props.some(g=>g.id===u&&g.hp>0)||(this.scene.remove(d),tn(d),this.props.delete(u));for(const u of e.props){if(u.hp<=0)continue;let d=this.props.get(u.id);d||(d=dp(u,e.venue),this.props.set(u.id,d),this.scene.add(d)),d.position.set(u.x,u.y,0),d.rotation.z=u.falling?Math.sin(i*3)*.08:0;const g=d.getObjectByName("entry-door"),_=d.getObjectByName("entry-label");if(g){const R=u.openedAt===void 0?0:Math.min(1,(e.frame-u.openedAt)/45);g.scale.y=Math.max(.03,1-R),g.position.y=R*u.h*.5,_&&(_.visible=R<.2)}const p=d.getObjectByName("entry-warning");p&&(p.visible=e.actors.some(R=>R.entryId===u.id&&R.pendingSpawn&&R.hp>0&&R.entryWarningAt!==void 0),p.scale.setScalar(1+Math.sin(i*12)*.06));const m=d.getObjectByName("laundry-drum");m&&(m.rotation.z=i*(u.kind==="dryer"?2:4));const M=d.getObjectByName("cold-air");M&&(M.visible=!s,M.children.forEach((R,P)=>{R.position.x=Math.sin(i+P*2)*2.6,R.position.y=-1.1+Math.sin(i*.7+P)*.2}));const v=d.getObjectByName("stall-door"),E=d.getObjectByName("stall-label");if(v){const R=u.openedAt===void 0?0:Math.min(1,Math.max(0,(e.frame-u.openedAt)/30));v.rotation.y=-1.5*R,E&&(E.visible=R<.2)}const U=d.getObjectByName("toxic-gas");U&&(U.visible=!s,U.children.forEach((R,P)=>{const D=(i*.55+P*.25)%1;R.position.y=-1+D*2,R.scale.setScalar(.8+D*.65),R.material.opacity=(1-D)*.25})),u.burn&&u.fuel>0&&this.particles.length<480&&Math.random()<t*(this.reducedEffects?3:22)&&this.particles.push({x:u.x+(Math.random()-.5)*u.w,y:u.y+u.h*.3,z:1,vx:Math.random()-.5,vy:3+Math.random()*2,life:.6,color:new $e(Math.random()>.5?"#ef6b32":"#efbf3b")})}const c=e.blood.filter(u=>e.props.some(d=>d.id===u.surface&&d.hp>0&&!d.falling));for(const[u,d]of this.blood)c.some(g=>g.id===u)||(this.scene.remove(d),tn(d),this.blood.delete(u));for(const u of c){let d=this.blood.get(u.id);if(!d){d=new bt;for(let g=0;g<10;g++){const _=new Je(new Ks(g===0?1:.08+g%3*.035,12),new Ft({color:g%2?"#8b1738":"#63152c",side:Vt,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1}));_.userData.ownedMaterial=!0,_.rotation.x=-Math.PI/2,_.scale.set(g===0?1.25:1,g===0?.55:1,1),g>0&&_.position.set(Math.cos(g*2.4+u.id)*(.5+g*.11),.001*g,Math.sin(g*2.4+u.id)*(.3+g*.06)),d.add(_)}this.blood.set(u.id,d),this.scene.add(d)}d.position.set(u.x,u.y,.4),d.visible=!s}for(const[u,d]of this.debris)e.debris.some(g=>g.id===u)||(this.scene.remove(d),d.geometry.dispose(),this.debris.delete(u));for(const u of e.debris){let d=this.debris.get(u.id);d||(d=mi(u.w,u.h,.35,u.part&&u.look?pp(u.part,u.look):Vs[u.color%Vs.length]),this.debris.set(u.id,d),this.scene.add(d)),d.position.set(u.x,u.y,1),d.rotation.z=u.angle??0}for(const[u,d]of this.shots)e.shots.some(g=>g.id===u)||(this.scene.remove(d),tn(d),this.shots.delete(u));for(const u of e.shots){let d=this.shots.get(u.id);d||(u.weapon==="axe"?d=Sl("axe"):u.weapon==="flamethrower"?d=this.flameStyle.create(!0):(d=new Je(new Dn(u.weapon==="shotgun"?.16:.45,.06,.06),new Ft({color:u.owner===this.localId()?"#ffdd3f":"#ff675d"})),d.userData.ownedMaterial=!0),this.shots.set(u.id,d),this.scene.add(d)),d.position.set(u.x,u.y,.65),d.rotation.z=u.weapon==="axe"?(22-u.life)*.55:Math.atan2(u.vy,u.vx)-(u.weapon==="flamethrower"?Math.PI/2:0),u.weapon==="flamethrower"&&(d.quaternion.copy(this.camera.quaternion),d.rotateZ(Math.atan2(u.vy,u.vx)-Math.PI/2),d.scale.setScalar(.22+(15-u.life)*.018))}for(const[u,d]of this.pickups)e.pickups.some(g=>g.id===u)||(this.scene.remove(d),tn(d),this.pickups.delete(u));for(const u of e.pickups){let d=this.pickups.get(u.id);if(!d){if(d=Sl(u.weapon),u.weapon==="laser"||u.weapon==="flamethrower"){const _=St(u.weapon==="laser"?"2 SHOTS":"FIRE SALE",1.7,.45,"#8cffff");_.position.set(0,.85,.1),d.add(_)}const g=new Je(new $s(.6,.67,20),new Ft({color:"#f0d432",side:Vt}));g.userData.ownedMaterial=!0,d.add(g),this.scene.add(d),this.pickups.set(u.id,d)}d.position.set(u.x,u.y+Math.sin(i*3)*.15,1),d.rotation.z=Math.sin(i)*.1}for(let u=this.particles.length-1;u>=0;u--){const d=this.particles[u];if(d.life-=t,d.life<=0){this.particles.splice(u,1);continue}d.x+=d.vx*t,d.y+=d.vy*t,d.vy-=t*9}this.particles.forEach((u,d)=>{this.positions.set([u.x,u.y,u.z],d*3),this.colors.set([u.color.r,u.color.g,u.color.b],d*3)}),this.particleGeometry.setDrawRange(0,this.particles.length),this.particleGeometry.attributes.position.needsUpdate=!0,this.particleGeometry.attributes.color.needsUpdate=!0;for(let u=this.beams.length-1;u>=0;u--){const d=this.beams[u];d.life-=t,d.life<=0?(this.scene.remove(d.mesh),d.mesh.geometry.dispose(),d.mesh.material.dispose(),this.beams.splice(u,1)):d.mesh.material.opacity=d.life/.16}(this.bloodRound!==e.round||s)&&(this.bloodParticles.clear(),this.bloodRound=e.round),this.bloodParticles.update(t,e,this.reducedEffects),this.bloodParticles.drops.forEach((u,d)=>this.bloodPositions.set([u.x,u.y,u.z],d*3)),this.bloodGeometry.setDrawRange(0,this.bloodParticles.drops.length),this.bloodGeometry.attributes.position.needsUpdate=!0,this.chaosEffects(e,i),this.burningEffects(e,i,t),this.renderer.render(this.scene,this.camera)}dispose(){for(const e of this.beams)e.mesh.material.dispose();cancelAnimationFrame(this.frame),this.observer.disconnect(),this.scene.traverse(e=>{(e instanceof Je||e instanceof gl)&&e.geometry.dispose()}),this.points.material instanceof us&&this.points.material.dispose(),this.bloodPoints.material.dispose(),this.bloodGeometry.dispose(),this.flameStyle.dispose(),sb(),this.renderer.dispose(),this.renderer.domElement.remove()}}function ob(n){return n.kind==="ignite"&&n.actor>=0?"catchfire":n.kind==="shot"||n.kind==="melee"?n.weapon??"body":n.kind}function ab(n){const e={};if(!n||typeof n!="object")return e;const t=n;if(t.version!==1||!t.cues||typeof t.cues!="object")return e;for(const[i,s]of Object.entries(t.cues))!/^[a-z]+$/.test(i)||!Array.isArray(s)||(e[i]=s.filter(r=>typeof r=="string"&&/^[a-z]+--[0-9]+\.wav$/.test(r)).slice(0,20));return e}class lb{constructor(){fe(this,"buffers",new Map);fe(this,"started",!1);fe(this,"abort",new AbortController)}async load(e){if(this.started)return;this.started=!0;const t="/game/royale/audio/royale/";try{const i=await fetch(t+"manifest.json",{signal:this.abort.signal});if(!i.ok)return;const s=ab(await i.json());await Promise.all(Object.entries(s).map(async([r,o])=>{const a=[];for(const l of o)try{const c=await fetch(t+l,{signal:this.abort.signal});c.ok&&a.push(await e.decodeAudioData(await c.arrayBuffer()))}catch{}a.length&&this.buffers.set(r,a)}))}catch{}}get(e){const t=this.buffers.get(e);return t==null?void 0:t[Math.floor(Math.random()*t.length)]}dispose(){this.abort.abort(),this.buffers.clear()}}function cb(n,e=Math.random()){return n&&e<.25}class hb{constructor(e=()=>({gain:1,pan:0})){fe(this,"channels",new Set);fe(this,"routing");fe(this,"enabled",!1);fe(this,"bank",new lb);fe(this,"context");fe(this,"master");fe(this,"active",new Set);fe(this,"last",new Map);this.locate=e}enable(e){if(this.enabled=e,e)try{if(this.context??(this.context=new AudioContext),!this.master){this.master=this.context.createGain();const t=this.context.createDynamicsCompressor();this.master.connect(t),t.connect(this.context.destination)}this.master.gain.value=.55,this.context.resume(),this.bank.load(this.context)}catch{this.enabled=!1}else{this.master&&(this.master.gain.value=0);for(const t of this.active)try{t.stop()}catch{}}}updateView(){if(this.context)for(const e of this.channels){const t=this.locate(e.event);e.gain.gain.setTargetAtTime(t.gain,this.context.currentTime,.06),e.pan.pan.setTargetAtTime(t.pan,this.context.currentTime,.06)}}release(e){e.gain.disconnect(),e.pan.disconnect(),this.channels.delete(e)}start(e,t,i,s,r){e.connect(r??t),r&&r.connect(t);const o=this.routing;t.connect((o==null?void 0:o.gain)??this.master),o&&o.sources++,this.active.add(e),e.onended=()=>{this.active.delete(e),e.disconnect(),r==null||r.disconnect(),t.disconnect(),o&&--o.sources===0&&this.release(o)},e.start(i),e.stop(i+s)}envelope(e,t,i){const s=this.context.createGain();return s.gain.setValueAtTime(1e-4,e),s.gain.linearRampToValueAtTime(i,e+.003),s.gain.exponentialRampToValueAtTime(1e-4,e+t),s}tone(e,t,i,s,r,o="sine"){const a=this.context.createOscillator();a.type=o,a.frequency.setValueAtTime(t,e),a.frequency.exponentialRampToValueAtTime(i,e+s),this.start(a,this.envelope(e,s,r),e,s)}noise(e,t,i,s,r="lowpass"){const o=this.context,a=o.createBuffer(1,Math.ceil(o.sampleRate*t),o.sampleRate),l=a.getChannelData(0);for(let f=0;f<l.length;f++)l[f]=Math.random()*2-1;const c=o.createBufferSource(),h=o.createBiquadFilter();c.buffer=a,h.type=r,h.frequency.value=s,h.Q.value=.7,this.start(c,this.envelope(e,t,i),e,t,h)}cry(e,t){const i=this.context,s=t?.7:.9,r=t?1:3;for(let o=0;o<r;o++){const a=e+o*.25,l=t?s:.24,c=i.createOscillator(),h=i.createBiquadFilter(),f=i.createOscillator(),u=i.createGain();c.type="sawtooth",c.frequency.setValueAtTime(t?430:240,a),c.frequency.exponentialRampToValueAtTime(t?270:155,a+l),f.frequency.value=t?9:6,u.gain.value=t?22:15,f.connect(u),u.connect(c.frequency),h.type="bandpass",h.frequency.value=t?1250:750,h.Q.value=.9,this.start(c,this.envelope(a,l,t?.12:.09),a,l,h),this.active.add(f),f.onended=()=>{this.active.delete(f),f.disconnect(),u.disconnect()},f.start(a),f.stop(a+l)}this.noise(e,s,.025,1600,"bandpass")}play(e){if(!this.enabled||!this.context)return;const t=ob(e),i=this.context.currentTime;if(this.active.size>=(t==="catchfire"?48:36))return;const s=this.locate(e);if(s.gain<.01)return;const r=`${t}:${e.actor>=0?e.actor:Math.round(e.x/6)}`;if(i-(this.last.get(r)??-1)<(t==="smg"?.045:.07))return;this.last.set(r,i);const o={event:{...e},gain:this.context.createGain(),pan:this.context.createStereoPanner(),sources:0};o.gain.gain.value=s.gain,o.pan.pan.value=s.pan,o.gain.connect(o.pan),o.pan.connect(this.master),this.channels.add(o),this.routing=o;try{const a=this.bank.get(t);if(cb(!!a)){const l=this.context.createBufferSource();l.buffer=a,l.playbackRate.value=.97+Math.random()*.06;const c=a.duration/l.playbackRate.value,h=this.envelope(i,c,.8);h.gain.cancelScheduledValues(i),h.gain.setValueAtTime(0,i),h.gain.linearRampToValueAtTime(.8,i+.005),h.gain.setValueAtTime(.8,i+Math.max(.005,c-.01)),h.gain.linearRampToValueAtTime(0,i+c),this.start(l,h,i,c);return}switch(t){case"throw":this.noise(i,.16,.09,800,"bandpass");break;case"warning":this.tone(i,720,720,.12,.07,"triangle"),this.tone(i+.18,960,960,.14,.07,"triangle");break;case"scream":this.cry(i,!0);break;case"cry":this.cry(i,!1);break;case"catchfire":this.noise(i,.55,.22,1100),this.noise(i+.05,.3,.07,3500,"highpass"),this.cry(i+.04,!0);break;case"ignite":this.noise(i,.5,.12,850),this.noise(i+.05,.3,.045,3500,"highpass");break;case"laser":this.tone(i,1800,140,.22,.1,"sawtooth"),this.tone(i,3200,700,.12,.045,"sine");break;case"flamethrower":this.noise(i,.18,.15,900),this.noise(i,.12,.045,3200,"highpass");break;case"smg":this.noise(i,.065,.19,3200,"highpass"),this.tone(i,145,48,.085,.11);break;case"shotgun":this.noise(i,.24,.35,2200),this.tone(i,125,32,.28,.24),this.noise(i+.075,.1,.08,4200,"highpass");break;case"explosion":this.noise(i,.8,.4,700),this.tone(i,65,22,.65,.3),this.noise(i+.1,.4,.08,2400);break;case"shank":this.noise(i,.055,.075,2400,"highpass"),this.tone(i,1600,650,.045,.025,"triangle");break;case"axe":this.noise(i,.22,.13,650,"bandpass"),this.tone(i,220,90,.17,.025,"triangle");break;case"body":case"hit":this.noise(i,.075,.1,950),this.tone(i,110,40,.12,.13);break;case"detach":this.noise(i,.13,.14,700),this.tone(i,210,65,.11,.08);break;case"land":this.noise(i,.09,.09,600),this.tone(i,80,30,.12,.07);break;case"jump":this.noise(i,.08,.045,1500,"bandpass");break;case"reload":this.noise(i,.035,.11,4e3,"highpass"),this.noise(i+.12,.04,.08,2100,"highpass"),this.tone(i+.14,650,280,.04,.04,"triangle");break;case"swap":this.noise(i,.045,.07,2800,"highpass"),this.tone(i,900,450,.035,.025,"triangle");break;case"pickup":this.tone(i,660,660,.1,.055,"triangle"),this.tone(i+.07,990,990,.17,.05,"triangle");break;case"break":this.noise(i,.22,.16,3700,"highpass"),this.tone(i,740,160,.14,.035,"triangle"),this.noise(i+.05,.14,.07,1800);break;case"death":this.tone(i,280,65,.5,.06,"triangle"),this.noise(i,.16,.07,600);break;default:this.noise(i,.12,.05,1e3)}}finally{this.routing=void 0,o.sources===0&&this.release(o)}}dispose(){var e;this.enable(!1);for(const t of this.channels)this.release(t);this.bank.dispose(),(e=this.context)==null||e.close()}}class ub{constructor(e,t,i){fe(this,"practiceSim",new Ad(1));fe(this,"session");fe(this,"scene");fe(this,"sound");fe(this,"journal",new fg);fe(this,"ledger",new dg);fe(this,"input");fe(this,"keys",new Set);fe(this,"mouseDown",!1);fe(this,"touchAttack",!1);fe(this,"frame",0);fe(this,"last",0);fe(this,"accumulator",0);fe(this,"reportTime",0);fe(this,"advice",null);fe(this,"mode","practice");fe(this,"paused",!1);fe(this,"touchMove",0);fe(this,"network",{status:"offline",invite:"",message:"Practice — one human, seven bots.",localId:0,ping:0});fe(this,"down",e=>{e.target instanceof HTMLElement&&e.target.matches("input,select,textarea")||(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(e.code)&&e.preventDefault(),this.keys.add(e.code),!e.repeat&&((e.code==="Space"||e.code==="KeyW"||e.code==="ArrowUp")&&this.command("jump"),e.code==="KeyG"&&this.command("grab"),e.code==="KeyE"&&this.command("pickup"),(e.code==="KeyQ"||e.code==="ShiftLeft"||e.code==="ShiftRight")&&this.command("cycle"),e.code==="KeyR"&&this.command("reload"),e.code==="Escape"&&this.mode==="practice"&&this.state.phase==="match"&&(this.paused=!this.paused)))});fe(this,"up",e=>{this.keys.delete(e.code)});fe(this,"blur",()=>{this.keys.clear(),this.mouseDown=!1,this.touchAttack=!1,this.touchMove=0,this.mode==="practice"&&this.state.phase==="match"&&(this.paused=!0)});fe(this,"pointerDown",e=>{e.pointerType!=="touch"&&(this.mouseDown=!0,this.pointerMove(e))});fe(this,"pointerUp",()=>{this.mouseDown=!1});fe(this,"pointerMove",e=>{if(e.pointerType==="touch")return;const t=this.scene.aim(e.clientX,e.clientY);this.input.aimX=t.x,this.input.aimY=t.y});fe(this,"animate",e=>{var t,i,s,r,o;try{const a=Math.min(.08,(e-this.last)/1e3||0);if(this.last=e,this.mode==="online")(t=this.session)==null||t.advance(a);else if(!this.paused)for(this.accumulator+=a;this.accumulator>=1/60;)this.practiceSim.step([this.poll()]),this.accumulator-=1/60;const l=(s=(i=this.session)==null?void 0:i.wrapper)==null?void 0:s.rollbackNetcode,c=this.mode==="online"?((r=l==null?void 0:l.history[0])==null?void 0:r.frame)??-1:this.state.frame,h=this.ledger.collect(this.state.events,c);this.sound.updateView(),this.scene.present(h);for(const u of h)this.sound.play(u),u.kind==="death"&&u.actor===this.localId&&u.cause&&(this.advice=this.journal.discover(u.cause));const f=this.state.actors[this.localId];if(f.death&&f.deathFrame<=c&&!this.advice&&(this.advice=this.journal.discover(f.death)),this.reportTime+=a,this.reportTime>.08){this.reportTime=0;const u=this.state,d=JSON.parse(JSON.stringify(u));d.phase==="results"&&this.mode==="online"&&c<d.frame-d.phaseFrame&&(d.phase="match"),this.changed({state:d,localId:this.localId,network:{...this.network},advice:this.advice,known:[...this.journal.seen],paused:this.paused})}}catch(a){(o=this.session)==null||o.dispose(!1),this.network={...this.network,status:"failed",message:`Simulation error: ${a instanceof Error?a.message:String(a)}`},this.changed({state:this.practiceSim.snapshot(),localId:0,network:{...this.network},advice:null,known:[...this.journal.seen],paused:!1})}this.frame=requestAnimationFrame(this.animate)});this.changed=i,this.input=$i(t),this.scene=new rb(e,()=>this.state,()=>this.localId),this.sound=new hb(s=>this.scene.soundPosition(s.x,s.y)),window.addEventListener("keydown",this.down),window.addEventListener("keyup",this.up),window.addEventListener("blur",this.blur),this.scene.canvas.addEventListener("pointerdown",this.pointerDown),window.addEventListener("pointerup",this.pointerUp),this.scene.canvas.addEventListener("pointermove",this.pointerMove),this.frame=requestAnimationFrame(this.animate)}get localId(){return this.mode==="online"?this.network.localId:0}get state(){var e;return this.mode==="online"&&((e=this.session)!=null&&e.simulation)?this.session.simulation.state:this.practiceSim.state}setLook(e){this.input.look=Wc(e)}setVenue(e){this.input.venue=Math.max(0,Math.min(vn.length-1,Math.floor(e))),this.input.venueChange++}ready(){this.input.ready++}rematch(){this.input.rematch++,this.advice=null}spectator(e){this.scene.setSpectator(e)}command(e){this.input[e]++}touchFire(e,t,i){if(this.touchAttack=e,t!==void 0&&i!==void 0){const s=Math.max(.01,Math.hypot(t,i));this.input.aimX=t/s,this.input.aimY=-i/s}}setSound(e){this.sound.enable(e)}async online(e="",t=""){if(!this.session){this.paused=!1,this.mode="online",this.input.ready=0,this.ledger.reset(),this.advice=null;try{const{Session:i}=await Z0(async()=>{const{Session:s}=await import("./session-slnB96La.js");return{Session:s}},[]);this.session=new i(()=>this.poll(),s=>{this.network=s}),await this.session.connect(e,t)}catch(i){this.network={...this.network,status:"failed",message:i instanceof Error?i.message:"Could not load multiplayer support."}}}}practice(){if(this.session){this.session.dispose(),location.assign(location.href.split("#")[0]);return}this.mode="practice",this.paused=!1}leave(){var e;(e=this.session)==null||e.dispose(),location.assign(location.href.split("#")[0])}poll(){return this.input.move=Math.max(-1,Math.min(1,Number(this.keys.has("KeyD")||this.keys.has("ArrowRight"))-Number(this.keys.has("KeyA")||this.keys.has("ArrowLeft"))+this.touchMove)),this.input.attack=this.mouseDown||this.touchAttack||this.keys.has("KeyJ"),JSON.parse(JSON.stringify(this.input))}dispose(){var e;cancelAnimationFrame(this.frame),(e=this.session)==null||e.dispose(),this.scene.dispose(),this.sound.dispose(),window.removeEventListener("keydown",this.down),window.removeEventListener("keyup",this.up),window.removeEventListener("blur",this.blur),window.removeEventListener("pointerup",this.pointerUp),this.scene.canvas.removeEventListener("pointerdown",this.pointerDown),this.scene.canvas.removeEventListener("pointermove",this.pointerMove)}}const mp="royale.preferences";function ff(n){try{return JSON.parse(localStorage.getItem(n)??"null")}catch{return null}}function gp(n,e){const t=n&&typeof n=="object"?n:{};return{look:Wc(t.look??e??ua),sound:t.sound===!0,lowFX:t.lowFX===!0,venue:vn.some(i=>i.id===t.venue)?t.venue:"gas"}}function fb(){return gp(ff(mp),ff("royale.look"))}function db(n){try{localStorage.setItem(mp,JSON.stringify({version:1,...gp(n)}))}catch{}}const pb={class:"turn-access",role:"status","aria-live":"polite"},mb=Kf({__name:"TurnAccess",setup(n,{expose:e}){const t=Rt(),i=Rt(!1);let s,r,o,a;function l(){return window.turnstile?Promise.resolve():s||(s=new Promise((u,d)=>{const g=document.createElement("script");g.src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit",g.async=!0,g.defer=!0,g.onload=()=>u(),g.onerror=()=>{g.remove(),s=void 0,d(new Error("Connection verification could not load. Please try again."))},document.head.appendChild(g)}),s)}function c(){clearTimeout(a),r&&window.turnstile&&window.turnstile.remove(r),r=void 0,i.value=!1}function h(){o==null||o(new Error("Connection verification cancelled.")),o=void 0,c()}async function f(){h(),i.value=!0;const u=new Promise((d,g)=>{o=g});try{if(await Promise.race([u,l(),new Promise((g,_)=>{a=setTimeout(()=>_(new Error("Connection verification timed out. Please try again.")),15e3)})]),clearTimeout(a),await Fc(),!window.turnstile||!t.value)throw new Error("Connection verification is unavailable.");const d="0x4AAAAAAGMk6Wc3ZfdCo5t5";return await Promise.race([u,new Promise((g,_)=>{a=setTimeout(()=>_(new Error("Connection verification timed out. Please try again.")),12e4),r=window.turnstile.render(t.value,{sitekey:d,action:"royale-turn",theme:"dark",callback:g,"error-callback":()=>_(new Error("Connection verification failed. Please try again.")),"expired-callback":()=>_(new Error("Connection verification expired. Please try again."))})})])}finally{o=void 0,c()}}return zc(h),e({verify:f,cancel:h}),(u,d)=>Ps((Oe(),Fe("div",pb,[d[0]||(d[0]=H("p",null,"CHECKING YOUR ONLINE CONNECTION…",-1)),H("div",{ref_key:"container",ref:t},null,512),H("button",{class:"secondary",onClick:h},"CANCEL")],512)),[[b0,i.value]])}}),gb=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},_b=gb(mb,[["__scopeId","data-v-95de6459"]]),vb={class:"header-venue"},xb={class:"header-tools"},yb={key:0,class:"network-pill"},Mb={key:0,class:"lobby"},Sb={class:"customize"},bb=["value"],Eb=["disabled"],wb=["value"],Ab={class:"swatch-row"},Tb=["onClick","aria-label"],Rb=["onClick","aria-label"],Cb={class:"swatch-row clothes-colors"},Pb=["onClick","aria-label"],Lb={key:0,class:"mode-buttons"},Ib=["disabled"],Db={class:"join-box"},Nb=["disabled"],Ub={key:1,class:"smallprint",role:"alert"},Ob={key:2,class:"connection-card"},Fb=["value"],kb={class:"roster-status"},Bb={key:0},zb={key:1},Hb=["disabled"],Vb={class:"smallprint"},Gb={key:1,class:"specimen"},Wb={class:"match-top"},Xb={class:"match-clock"},Yb={key:0,class:"chaos-tools"},qb={key:0},jb={key:1},Kb={key:2},$b={class:"player-hud"},Jb={class:"health-heading"},Zb={class:"health-bar"},Qb={class:"body-status"},eE={key:0},tE={key:1},nE={class:"weapon-readout"},iE={key:0},sE={key:1},rE={key:2},oE={class:"body-panel"},aE={key:2,class:"death-overlay"},lE={class:"spectator-buttons"},cE=["onClick"],hE={class:"touch-controls"},uE={class:"touch-actions"},fE={class:"eyebrow"},dE={key:0,class:"result-advice"},pE={class:"result-stat"},mE={key:0},gE={key:4},_E={key:0},vE={key:5,class:"modal-backdrop"},xE={class:"pause-card"},yE={key:6,class:"modal-backdrop"},ME={class:"pause-card"},SE={key:7,class:"modal-backdrop"},bE={class:"journal"},EE={key:0},wE={key:1,class:"modal-backdrop"},AE={class:"pause-card"},TE=Kf({__name:"App",setup(n){const e=fb(),t=Rt(e.venue),i=Rt(),s=Rt(e.look),r=Rt(vn.findIndex(me=>me.id===e.venue)),o=Rt(e.sound),a=Rt(e.lowFX),l=Rt(!1),c=Rt("COPY INVITE"),h=Rt(""),f=Rt(new URLSearchParams(location.hash.slice(1)).get("room")??""),u=Rt({state:new Ad().state,localId:0,network:{status:"offline",invite:"",message:"Practice — one human, seven bots.",localId:0,ping:0},advice:null,known:[],paused:!1}),d=Rt(),g=Rt(!1),_=Rt("");let p,m=!1;const M=cn(()=>u.value.state),v=cn(()=>M.value.actors[u.value.localId]),E=cn(()=>M.value.phase==="lobby"||M.value.phase==="countdown"),U=cn(()=>u.value.network.status!=="offline"),R=cn(()=>u.value.network.status==="connected"),P=cn(()=>M.value.actors.filter(me=>me.hp>0&&!me.pendingSpawn)),D=cn(()=>!v.value.parts.armL&&!v.value.parts.armR?"body":v.value.weapons[v.value.slot]),Z=cn(()=>hn.filter(me=>v.value.parts[me]>0).length),x=cn(()=>vn.find(me=>me.id===M.value.venue)),w=cn(()=>["failed","closed"].includes(u.value.network.status)),z=cn(()=>{const me=M.value.phase==="match"?Math.floor(M.value.phaseFrame/60):0;return`${String(Math.floor(me/60)).padStart(2,"0")}:${String(me%60).padStart(2,"0")}`}),W=cn(()=>v.value.ready);Ns(()=>u.value.state.venue,me=>{r.value=vn.findIndex(I=>I.id===me)});function $(){f.value=new URLSearchParams(location.hash.slice(1)).get("room")??""}function ae(){t.value=vn[r.value].id,p==null||p.setVenue(r.value)}function V(){o.value=!o.value,p==null||p.setSound(o.value),m=o.value}function se(){o.value&&!m&&p&&(p.setSound(!0),m=!0)}function G(){a.value=!a.value,p&&(p.scene.reducedEffects=a.value)}async function _e(me=""){var I;if(!g.value){g.value=!0,_.value="";try{const ze=await((I=d.value)==null?void 0:I.verify());await(p==null?void 0:p.online(me,ze??""))}catch(ze){_.value=ze instanceof Error?ze.message:"Could not verify the connection."}finally{g.value=!1}}}async function Me(){await _e()}async function we(){const me=f.value.match(/room=([a-f\d-]{36})/i);await _e((me==null?void 0:me[1])??f.value.trim())}async function We(){try{await navigator.clipboard.writeText(u.value.network.invite),c.value="COPIED"}catch{c.value="SELECT LINK BELOW"}}Ns(s,me=>p==null?void 0:p.setLook(me),{deep:!0}),Ns(()=>({look:s.value,sound:o.value,lowFX:a.value,venue:t.value}),db,{deep:!0});const Ze=Rt(null),ie=Rt(null),he=Rt({x:0,y:0});function Se(me,I){if(!p)return;const ze=I==="move"?Ze:ie,C=me.currentTarget;if(me.type==="pointerdown"){if(ze.value!==null)return;ze.value=me.pointerId,C.setPointerCapture(me.pointerId)}if(ze.value!==me.pointerId)return;const T=C.getBoundingClientRect(),S=(me.clientX-T.left-T.width/2)/32,ne=(me.clientY-T.top-T.height/2)/32,X=Math.max(1,Math.hypot(S,ne));I==="move"?(p.touchMove=S/X,he.value={x:S/X,y:ne/X}):p.touchFire(!0,S/X,ne/X)}function xe(me,I){if(!p)return;const ze=I==="move"?Ze:ie;ze.value===me.pointerId&&(ze.value=null,I==="move"?(p.touchMove=0,he.value={x:0,y:0}):p.touchFire(!1))}return Zf(()=>{window.addEventListener("hashchange",$);try{p=new ub(i.value,s.value,me=>u.value=me),p.scene.reducedEffects=a.value,p.setVenue(r.value),window.addEventListener("pointerdown",se,!0),window.addEventListener("keydown",se,!0)}catch(me){h.value=me instanceof Error?me.message:"WebGL could not start."}}),zc(()=>{window.removeEventListener("hashchange",$),window.removeEventListener("pointerdown",se,!0),window.removeEventListener("keydown",se,!0),p==null||p.dispose()}),(me,I)=>{var ze,C;return Oe(),Fe("div",{class:Fn(["royale",{"in-lobby":E.value}])},[H("div",{ref_key:"viewport",ref:i,class:"viewport"},null,512),I[73]||(I[73]=H("div",{class:"vignette"},null,-1)),I[74]||(I[74]=H("div",{class:"scanlines","aria-hidden":"true"},null,-1)),H("header",null,[I[28]||(I[28]=H("a",{class:"logo",href:"./"},[tt("R"),H("span",null,"®")],-1)),H("span",vb,[tt(Ie(x.value.name)+" ",1),I[26]||(I[26]=H("i",null,"/",-1)),I[27]||(I[27]=tt(" EST. BAD IDEA",-1))]),H("div",xb,[R.value?(Oe(),Fe("span",yb,Ie(u.value.network.route==="relay"?"P2P / RELAY":"P2P")+" · "+Ie(u.value.network.ping)+" MS",1)):mt("",!0),H("button",{onClick:V},"SOUND "+Ie(o.value?"ON":"OFF"),1),H("button",{onClick:G},"FX "+Ie(a.value?"LOW":"FULL"),1),U.value?(Oe(),Fe("button",{key:1,onClick:I[0]||(I[0]=T=>{var S;return(S=vt(p))==null?void 0:S.leave()})},"LEAVE P2P")):mt("",!0),H("button",{onClick:I[1]||(I[1]=T=>l.value=!l.value)},"DEATH NOTES "+Ie(u.value.known.length),1)])]),h.value?(Oe(),Fe("div",wE,[H("section",AE,[I[71]||(I[71]=H("h2",null,[tt("THE WORLD"),H("br"),tt("DIDN’T LOAD.")],-1)),H("p",null,Ie(h.value),1),I[72]||(I[72]=H("p",null,"A WebGL-capable browser is required.",-1))])])):(Oe(),Fe(xt,{key:0},[E.value?(Oe(),Fe("section",Mb,[I[42]||(I[42]=H("p",{class:"eyebrow"},[H("span"),tt(" SOME ASSEMBLY REQUIRED.")],-1)),I[43]||(I[43]=H("h1",null,[tt("ROYALE"),H("span",null,".")],-1)),I[44]||(I[44]=H("p",{class:"tagline"},[tt("LAST ONE STANDING."),H("br"),tt("OR WHATEVER’S LEFT.")],-1)),I[45]||(I[45]=H("div",{class:"lobby-rule"},[H("b",null,"01 / CHECK YOURSELF IN"),H("span",null,"8 ENTER. MOSTLY.")],-1)),H("div",Sb,[H("label",null,[I[30]||(I[30]=tt("GENDER",-1)),Ps(H("select",{"onUpdate:modelValue":I[2]||(I[2]=T=>s.value.gender=T)},[...I[29]||(I[29]=[H("option",{value:0},"WOMAN",-1),H("option",{value:1},"MAN",-1),H("option",{value:2},"NONBINARY",-1)])],512),[[Qr,s.value.gender,void 0,{number:!0}]])]),H("label",null,[I[31]||(I[31]=tt("HAIR",-1)),Ps(H("select",{"onUpdate:modelValue":I[3]||(I[3]=T=>s.value.hair=T)},[(Oe(),Fe(xt,null,ti(["CROPPED","CURLS","MOHAWK","LONG","SHAVED"],(T,S)=>H("option",{key:T,value:S},Ie(T),9,bb)),64))],512),[[Qr,s.value.hair,void 0,{number:!0}]])]),H("label",null,[I[33]||(I[33]=tt("CLOTHING",-1)),Ps(H("select",{"onUpdate:modelValue":I[4]||(I[4]=T=>s.value.clothes=T)},[...I[32]||(I[32]=[H("option",{value:0},"JACKET",-1),H("option",{value:1},"TANK TOP",-1),H("option",{value:2},"COVERALLS",-1)])],512),[[Qr,s.value.clothes,void 0,{number:!0}]])]),H("label",null,[I[34]||(I[34]=tt("VENUE",-1)),Ps(H("select",{"onUpdate:modelValue":I[5]||(I[5]=T=>r.value=T),disabled:R.value&&u.value.localId!==0,onChange:ae},[(Oe(!0),Fe(xt,null,ti(vt(vn),(T,S)=>(Oe(),Fe("option",{key:T.id,value:S},Ie(T.name),9,wb))),128))],40,Eb),[[Qr,r.value,void 0,{number:!0}]])])]),H("div",Ab,[I[35]||(I[35]=H("span",null,"SKIN",-1)),(Oe(!0),Fe(xt,null,ti(vt(Vr),(T,S)=>(Oe(),Fe("button",{key:T,class:Fn({chosen:s.value.skin===S}),style:Ti({background:T}),onClick:ne=>s.value.skin=S,"aria-label":`Skin tone ${S+1}`},null,14,Tb))),128)),I[36]||(I[36]=H("span",{class:"hair-label"},"HAIR",-1)),(Oe(!0),Fe(xt,null,ti(vt(fa),(T,S)=>(Oe(),Fe("button",{key:T,style:Ti({background:T}),class:Fn({chosen:s.value.hairColor===S}),onClick:ne=>s.value.hairColor=S,"aria-label":`Hair color ${S+1}`},null,14,Rb))),128))]),H("div",Cb,[I[37]||(I[37]=H("span",null,"THREADS",-1)),(Oe(!0),Fe(xt,null,ti(vt(Vs),(T,S)=>(Oe(),Fe("button",{key:T,style:Ti({background:T}),class:Fn({chosen:s.value.color===S}),onClick:ne=>s.value.color=S,"aria-label":`Clothing color ${S+1}`},null,14,Pb))),128)),I[38]||(I[38]=H("small",null,"ALL LOOKS. NO STAT BOOSTS.",-1))]),U.value?mt("",!0):(Oe(),Fe("div",Lb,[H("button",{class:"secondary",disabled:g.value,onClick:Me},[tt(Ie(g.value?"CONNECTING…":"HOST P2P")+" ",1),I[39]||(I[39]=H("span",null,"↗",-1))],8,Ib),H("div",Db,[Ps(H("input",{"onUpdate:modelValue":I[6]||(I[6]=T=>f.value=T),"aria-label":"Invite link or room ID",placeholder:"INVITE LINK / ROOM ID"},null,512),[[H0,f.value]]),H("button",{onClick:we,disabled:g.value||!f.value.trim()},"JOIN",8,Nb)])])),Yn(_b,{ref_key:"turnAccess",ref:d},null,512),_.value?(Oe(),Fe("p",Ub,Ie(_.value),1)):mt("",!0),U.value&&!R.value?(Oe(),Fe("div",Ob,[H("b",null,Ie(u.value.network.status.toUpperCase()),1),H("p",null,Ie(u.value.network.message),1),u.value.network.invite?(Oe(),Fe(xt,{key:0},[H("button",{onClick:We},Ie(c.value)+" ↗",1),H("input",{value:u.value.network.invite,readonly:"","aria-label":"P2P invite link"},null,8,Fb)],64)):mt("",!0),H("button",{class:"cancel-host",onClick:I[7]||(I[7]=T=>{var S;return(S=vt(p))==null?void 0:S.leave()})},"CANCEL / PRACTICE")])):mt("",!0),H("div",kb,[I[40]||(I[40]=H("span",{class:"tiny-dot"},null,-1)),H("b",null,Ie(R.value?"2 HUMANS / 6 BOTS":U.value?"WAITING FOR A HUMAN":"PRACTICE / 7 BOTS"),1),R.value?(Oe(),Fe("span",Bb,Ie(M.value.actors.filter(T=>T.human&&T.ready).length)+" / 2 READY",1)):(Oe(),Fe("span",zb,"NO CREDIT CARD REQUIRED"))]),H("button",{class:"primary",disabled:g.value||U.value&&!R.value,onClick:I[8]||(I[8]=T=>{var S;return(S=vt(p))==null?void 0:S.ready()})},[tt(Ie(M.value.phase==="countdown"?`BAD DECISIONS IN ${Math.max(1,3-Math.floor(M.value.phaseFrame/60))}…`:W.value?"READY. UNFORTUNATELY.":R.value?"READY TO FALL APART":"PRACTICE BAD DECISIONS")+" ",1),I[41]||(I[41]=H("span",null,"↗",-1))],8,Hb),H("p",Vb,Ie(R.value?"BOTH HUMANS MUST READY UP. COSMETIC CHANGES RESET READINESS.":"P2P: TWO HUMANS + SIX BOTS. PRACTICE WORKS OFFLINE."),1)])):mt("",!0),E.value?(Oe(),Fe("div",Gb,[...I[46]||(I[46]=[H("span",null,[tt("YOUR FUTURE"),H("br"),tt("FORMER SELF.")],-1),H("i",null,null,-1),H("small",null,[tt("100% ORIGINAL PARTS"),H("br"),tt("FOR NOW.")],-1)])])):mt("",!0),M.value.phase==="match"?(Oe(),Fe(xt,{key:2},[H("div",Wb,[H("div",null,[I[48]||(I[48]=H("small",null,"STILL TECHNICALLY ALIVE",-1)),H("b",null,[tt(Ie(P.value.length),1),I[47]||(I[47]=H("span",null,"/ 8",-1))])]),H("div",Xb,[tt(Ie(z.value),1),H("small",null,Ie(M.value.chaosAt===void 0?"DESTROY BOTH CRATES":M.value.venue==="bathroom"&&M.value.actors.some(T=>T.pendingSpawn&&T.hp>0)?"APPROACH STALLS WITH CAUTION":M.value.props.some(T=>T.kind==="entrance")&&M.value.actors.some(T=>T.pendingSpawn&&T.hp>0)?"WATCH THE ENTRANCES":M.value.phaseFrame<=1800?"SAFE AREA HOLDING":"SAFE AREA CONTRACTING"),1)])]),M.value.chaosAt!==void 0?(Oe(),Fe("div",Yb,[I[49]||(I[49]=H("span",null,"G GRAB / THROW · E MOVEMENT LOOT",-1)),v.value.carrying?(Oe(),Fe("b",qb,"HOLDING "+Ie(v.value.carrying.kind.toUpperCase())+" — AIM + ATTACK TO THROW",1)):mt("",!0),(v.value.stunUntil??0)>M.value.frame?(Oe(),Fe("b",jb,"TV STUN · "+Ie(Math.ceil(((v.value.stunUntil??0)-M.value.frame)/60))+"s",1)):mt("",!0),v.value.boost?(Oe(),Fe("b",Kb,Ie(vt(wd)[v.value.boost.kind])+" · "+Ie(Math.max(0,Math.ceil((v.value.boost.until-M.value.frame)/60)))+"s",1)):mt("",!0)])):mt("",!0),M.value.major?(Oe(),Fe("div",{key:1,class:Fn(["event-banner",{helpful:M.value.major.kind==="foam"}])},[H("b",null,Ie(M.value.major.kind==="foam"?"FOAM SPRINKLER — SLIPPERY, NO DAMAGE":M.value.major.kind==="truck"?"DANGER: RUNAWAY TRUCK — JUMP OR GET CLEAR":"DANGER: FALLING AIR CONDITIONER — CLEAR THE RED ZONE"),1),H("span",null,Ie(M.value.frame<M.value.major.activeAt?"STARTS IN "+Math.ceil((M.value.major.activeAt-M.value.frame)/60)+"s":"ACTIVE"),1)],2)):mt("",!0),H("div",$b,[H("div",Jb,[H("b",null,[tt(Ie(Math.ceil(v.value.hp)),1),I[50]||(I[50]=H("span",null,"%",-1))]),H("span",null,Ie(v.value.bleedOutAt!==null?(v.value.parts.head?"BLEEDING OUT / ":"HEADLESS — BLEEDING OUT / ")+Math.max(0,Math.ceil((v.value.bleedOutAt-M.value.frame)/60))+"s":v.value.parts.head?"VITALITY":"HEADLESS / MOSTLY GUESSWORK"),1)]),H("div",Zb,[H("i",{style:Ti({width:v.value.hp+"%"})},null,4)]),H("div",Qb,[H("span",null,"PARTS "+Ie(Z.value)+" / "+Ie(vt(hn).length),1),Z.value<vt(hn).length?(Oe(),Fe("span",eE,"SOME ASSEMBLY LOST")):(Oe(),Fe("span",tE,"FACTORY CONDITION"))]),H("div",nE,[H("b",null,Ie(D.value.toUpperCase()),1),D.value==="smg"||D.value==="shotgun"?(Oe(),Fe("span",iE,Ie(v.value.ammo)+" / "+Ie(v.value.reserve),1)):D.value==="laser"||D.value==="flamethrower"?(Oe(),Fe("span",sE,Ie(v.value.ammo)+" "+Ie(D.value==="laser"?"SHOTS":"FUEL"),1)):(Oe(),Fe("span",rE,Ie(D.value==="body"?"LIMITED DIGNITY":"UNLIMITED REGRETS"),1))]),H("small",null,Ie(v.value.reloading?"RELOADING…":"E PICKUP · Q / SHIFT SWAP · R RELOAD"),1)]),H("div",oE,[I[51]||(I[51]=H("small",null,"INVENTORY OF YOU",-1)),(Oe(),Fe(xt,null,ti([["head"],["armL","armR"],["handL","handR"],["thighL","thighR"],["footL","footR"]],T=>H("div",{key:T.join()},[H("span",null,Ie(T[0].startsWith("thigh")?"LEGS":T[0].replace(/[LR]$/,"").toUpperCase()),1),(Oe(!0),Fe(xt,null,ti(T,S=>(Oe(),Fe("i",{key:S,class:Fn({lost:v.value.parts[S]<=0})},null,2))),128))])),64))]),v.value.hp<=0?(Oe(),Fe("div",aE,[I[52]||(I[52]=H("p",{class:"eyebrow"},"YOU HAVE BEEN DISCONTINUED.",-1)),H("h2",null,Ie(((ze=u.value.advice)==null?void 0:ze.title)??"The warranty did not cover that."),1),H("p",null,Ie(((C=u.value.advice)==null?void 0:C.hint)??"A familiar lesson. Still not a pleasant one."),1),H("small",null,"SPECTATING — "+Ie(P.value.length)+" REMAIN",1),H("div",lE,[(Oe(!0),Fe(xt,null,ti(P.value,T=>(Oe(),Fe("button",{key:T.id,onClick:S=>{var ne;return(ne=vt(p))==null?void 0:ne.spectator(T.id)}},Ie(T.name),9,cE))),128))])])):mt("",!0),H("div",hE,[H("div",{class:"stick",onPointerdown:I[9]||(I[9]=T=>Se(T,"move")),onPointermove:I[10]||(I[10]=T=>Se(T,"move")),onPointerup:I[11]||(I[11]=T=>xe(T,"move")),onPointercancel:I[12]||(I[12]=T=>xe(T,"move"))},[H("i",{style:Ti({transform:`translate(${he.value.x*25}px,${he.value.y*25}px)`})},null,4),I[53]||(I[53]=H("small",null,"MOVE",-1))],32),H("div",uE,[H("button",{onClick:I[13]||(I[13]=T=>{var S;return(S=vt(p))==null?void 0:S.command("jump")})},"JUMP"),H("button",{onClick:I[14]||(I[14]=T=>{var S;return(S=vt(p))==null?void 0:S.command("pickup")})},"PICK UP"),M.value.chaosAt!==void 0?(Oe(),Fe("button",{key:0,onClick:I[15]||(I[15]=T=>{var S;return(S=vt(p))==null?void 0:S.command("grab")})},"GRAB / THROW")):mt("",!0),H("button",{onClick:I[16]||(I[16]=T=>{var S;return(S=vt(p))==null?void 0:S.command("cycle")})},"SWAP"),H("button",{onClick:I[17]||(I[17]=T=>{var S;return(S=vt(p))==null?void 0:S.command("reload")})},"RELOAD")]),H("div",{class:"stick fire-stick",onPointerdown:I[18]||(I[18]=T=>Se(T,"aim")),onPointermove:I[19]||(I[19]=T=>Se(T,"aim")),onPointerup:I[20]||(I[20]=T=>xe(T,"aim")),onPointercancel:I[21]||(I[21]=T=>xe(T,"aim"))},[...I[54]||(I[54]=[H("i",null,null,-1),H("small",null,"AIM / FIRE",-1)])],32)])],64)):mt("",!0),M.value.phase==="results"?(Oe(),Fe("section",{key:3,class:Fn(["result-card",{"is-victory":M.value.winner===u.value.localId}])},[H("p",fE,Ie(M.value.winner===u.value.localId?"VICTORY / YOU SURVIVED":"ROUND OVER"),1),H("h2",null,Ie(M.value.winner===null?"NO SURVIVORS.":M.value.winner===u.value.localId?"YOU WON.":"YOU WERE ELIMINATED."),1),H("p",null,Ie(M.value.winner===null?"A draw. Nobody survived the round.":M.value.winner===u.value.localId?"Victory — you are the last player standing.":`${M.value.actors[M.value.winner].name} won the round.`),1),u.value.advice?(Oe(),Fe("div",dE,[H("b",null,Ie(u.value.advice.title),1),H("span",null,Ie(u.value.advice.hint),1)])):mt("",!0),H("div",pE,[M.value.winner===u.value.localId?(Oe(),Fe("span",mE,[I[55]||(I[55]=tt("HEALTH ",-1)),H("b",null,Ie(Math.ceil(v.value.hp))+"%",1)])):mt("",!0),H("span",null,[I[56]||(I[56]=tt("ELIMINATIONS ",-1)),H("b",null,Ie(v.value.kills),1)]),H("span",null,[I[57]||(I[57]=tt("PARTS LEFT ",-1)),H("b",null,Ie(Z.value),1)])]),H("button",{class:"primary",onClick:I[22]||(I[22]=T=>{var S;return(S=vt(p))==null?void 0:S.rematch()})},[...I[58]||(I[58]=[tt("ANOTHER TERRIBLE IDEA ",-1),H("span",null,"↗",-1)])]),H("small",null,Ie(R.value?"BOTH HUMANS MUST REQUEST A REMATCH.":"NEXT ROUND ROTATES TO A NEW VENUE."),1)],2)):mt("",!0),M.value.phase!=="results"?(Oe(),Fe("footer",gE,[I[59]||(I[59]=H("span",null,"A / D · ← / → MOVE",-1)),I[60]||(I[60]=H("span",null,"SPACE JUMP",-1)),I[61]||(I[61]=H("span",null,"MOUSE / J ATTACK",-1)),I[62]||(I[62]=H("span",null,"E PICKUP",-1)),M.value.chaosAt!==void 0?(Oe(),Fe("span",_E,"G GRAB / THROW")):mt("",!0),I[63]||(I[63]=H("span",null,"Q / SHIFT WEAPON",-1)),I[64]||(I[64]=H("span",null,"R RELOAD",-1))])):mt("",!0),u.value.paused?(Oe(),Fe("div",vE,[H("section",xE,[I[65]||(I[65]=H("p",{class:"eyebrow"},"PRACTICE / HOLDING IT TOGETHER",-1)),I[66]||(I[66]=H("h2",null,[tt("TAKE A BREATHER."),H("br"),tt("WHILE YOU HAVE LUNGS.")],-1)),H("button",{class:"primary",onClick:I[23]||(I[23]=T=>vt(p)&&(vt(p).paused=!1))},"BACK TO IT ↗")])])):mt("",!0),w.value?(Oe(),Fe("div",yE,[H("section",ME,[I[67]||(I[67]=H("p",{class:"eyebrow"},"CONNECTION ENDED",-1)),I[68]||(I[68]=H("h2",null,[tt("TECHNICAL"),H("br"),tt("DIFFICULTIES.")],-1)),H("p",null,Ie(u.value.network.message),1),H("button",{class:"primary",onClick:I[24]||(I[24]=T=>{var S;return(S=vt(p))==null?void 0:S.leave()})},"RETURN TO LOBBY ↗")])])):mt("",!0),l.value?(Oe(),Fe("div",SE,[H("section",bE,[H("button",{class:"close",onClick:I[25]||(I[25]=T=>l.value=!1)},"CLOSE ×"),I[69]||(I[69]=H("p",{class:"eyebrow"},"LEARNING, APPARENTLY.",-1)),I[70]||(I[70]=H("h2",null,"DEATH NOTES.",-1)),u.value.known.length?mt("",!0):(Oe(),Fe("p",EE,"Discover new ways to die. Receive unsolicited advice.")),(Oe(!0),Fe(xt,null,ti(u.value.known,T=>(Oe(),Fe("article",{key:T},[H("b",null,Ie(vt(qo)[T].title),1),H("p",null,Ie(vt(qo)[T].hint),1)]))),128))])])):mt("",!0)],64))],2)}}});X0(TE).use(K0()).mount("#app");export{Ad as S,$i as e,ng as v};
