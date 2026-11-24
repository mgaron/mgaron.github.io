var Pp=Object.defineProperty;var Lp=(n,e,t)=>e in n?Pp(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var ce=(n,e,t)=>Lp(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Cc(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const ut={},Qi=[],Yn=()=>{},Sf=()=>!1,ia=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),sa=n=>n.startsWith("onUpdate:"),Ct=Object.assign,Pc=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Ip=Object.prototype.hasOwnProperty,nt=(n,e)=>Ip.call(n,e),Be=Array.isArray,Ci=n=>Hr(n)==="[object Map]",rs=n=>Hr(n)==="[object Set]",wh=n=>Hr(n)==="[object Date]",qe=n=>typeof n=="function",Et=n=>typeof n=="string",jn=n=>typeof n=="symbol",ht=n=>n!==null&&typeof n=="object",bf=n=>(ht(n)||qe(n))&&qe(n.then)&&qe(n.catch),Ef=Object.prototype.toString,Hr=n=>Ef.call(n),Dp=n=>Hr(n).slice(8,-1),wf=n=>Hr(n)==="[object Object]",Lc=n=>Et(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,mr=Cc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ra=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},Np=/-\w/g,Dn=ra(n=>n.replace(Np,e=>e.slice(1).toUpperCase())),Up=/\B([A-Z])/g,hs=ra(n=>n.replace(Up,"-$1").toLowerCase()),Af=ra(n=>n.charAt(0).toUpperCase()+n.slice(1)),Ea=ra(n=>n?`on${Af(n)}`:""),Xn=(n,e)=>!Object.is(n,e),Po=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Tf=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Vr=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Ah;const oa=()=>Ah||(Ah=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ti(n){if(Be(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=Et(i)?Bp(i):Ti(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Et(n)||ht(n))return n}const Op=/;(?![^(]*\))/g,Fp=/:([^]+)/,kp=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function Bp(n){const e={};return n.replace(kp,t=>t.startsWith("/*")?"":t).split(Op).forEach(t=>{if(t){const i=t.split(Fp);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Bn(n){let e="";if(Et(n))e=n;else if(Be(n))for(let t=0;t<n.length;t++){const i=Bn(n[t]);i&&(e+=i+" ")}else if(ht(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const zp="itemscope,allowfullscreen,disablepictureinpicture,disableremoteplayback,formnovalidate,ismap,nomodule,novalidate,playsinline,readonly",Hp=Cc(zp);function Rf(n){return!!n||n===""}function Vp(n,e,t){if(n.length!==e.length)return!1;let i=!0;for(let s=0;i&&s<n.length;s++)i=Di(n[s],e[s],t);return i}function Th(n,e,t){if(n.size!==e.size)return!1;const i=Array.from(e),s=new Uint8Array(i.length);for(const r of n){let o=-1;for(let a=0;a<i.length;a++)if(!s[a]&&Di(r,i[a],t)){o=a;break}if(o<0)return!1;s[o]=1}return!0}function Gp(n,e,t){let i=Ci(n),s=Ci(e);if(i||s||(i=rs(n),s=rs(e),i||s))return i&&s?Th(n,e,t):!1;const r=Object.keys(n).length,o=Object.keys(e).length;if(r!==o)return!1;for(const a in n){const l=n.hasOwnProperty(a),c=e.hasOwnProperty(a);if(l&&!c||!l&&c||!Di(n[a],e[a],t))return!1}return String(n)===String(e)}function Rh(n,e,t,i){t||(t=[new Map,new Map]);const[s,r]=t;if(s.has(n)||r.has(e))return s.get(n)===e&&r.get(e)===n;s.set(n,e),r.set(e,n);const o=i(n,e,t);return s.delete(n),r.delete(e),o}function Di(n,e,t){if(n===e)return!0;let i=wh(n),s=wh(e);return i||s?i&&s?n.getTime()===e.getTime():!1:(i=jn(n),s=jn(e),i||s?n===e:(i=Be(n),s=Be(e),i||s?i&&s?Rh(n,e,t,Vp):!1:(i=ht(n),s=ht(e),i||s?!i||!s?!1:Rh(n,e,t,Gp):String(n)===String(e))))}function Wp(n,e){return n.findIndex(t=>Di(t,e))}const Cf=n=>!!(n&&n.__v_isRef===!0),Ie=n=>Et(n)?n:n==null?"":Be(n)||ht(n)&&(n.toString===Ef||!qe(n.toString))?Cf(n)?Ie(n.value):JSON.stringify(n,Pf,2):String(n),Pf=(n,e)=>Cf(e)?Pf(n,e.value):Ci(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s],r)=>(t[wa(i,r)+" =>"]=s,t),{})}:rs(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>wa(t))}:jn(e)?wa(e):ht(e)&&!Be(e)&&!wf(e)?String(e):e,wa=(n,e="")=>{var t;return jn(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ot;class Lf{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&Ot&&(Ot.active?(this.parent=Ot,this.index=(Ot.scopes||(Ot.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes){const i=this.scopes.slice();for(e=0,t=i.length;e<t;e++)i[e].pause()}for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes){const s=this.scopes.slice();for(e=0,t=s.length;e<t;e++)s[e].resume()}const i=this.effects.slice();for(e=0,t=i.length;e<t;e++)i[e].resume()}}run(e){if(this._active){const t=Ot;try{return Ot=this,e()}finally{Ot=t}}}on(){++this._on===1&&(this.prevScope=Ot,Ot=this)}off(){if(this._on>0&&--this._on===0){if(Ot===this)Ot=this.prevScope;else{let e=Ot;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){const s=this.scopes.slice();for(t=0,i=s.length;t<i;t++)s[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Xp(n){return new Lf(n)}function Yp(){return Ot}let ft;const Aa=new WeakSet;class If{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ot&&(Ot.active?Ot.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Aa.has(this)&&(Aa.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Nf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ch(this),Uf(this);const e=ft,t=Nn;ft=this,Nn=!0;try{return this.fn()}finally{Of(this),ft=e,Nn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Nc(e);this.deps=this.depsTail=void 0,Ch(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Aa.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Al(this)&&this.run()}get dirty(){return Al(this)}}let Df=0,gr,vr;function Nf(n,e=!1){if(n.flags|=8,e){n.next=vr,vr=n;return}n.next=gr,gr=n}function Ic(){Df++}function Dc(){if(--Df>0)return;if(vr){let e=vr;for(vr=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;gr;){let e=gr;for(gr=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function Uf(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Of(n){let e,t=n.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),Nc(i),qp(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=e,n.depsTail=t}function Al(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Ff(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Ff(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Cr)||(n.globalVersion=Cr,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Al(n))))return;n.flags|=2;const e=n.dep,t=ft,i=Nn;ft=n,Nn=!0;try{Uf(n);const s=n.fn(n._value);(e.version===0||Xn(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{ft=t,Nn=i,Of(n),n.flags&=-3}}function Nc(n,e=!1){const{dep:t,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)Nc(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function qp(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Nn=!0;const kf=[];function Kn(){kf.push(Nn),Nn=!1}function $n(){const n=kf.pop();Nn=n===void 0?!0:n}function Ch(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=ft;ft=void 0;try{e()}finally{ft=t}}}let Cr=0;class jp{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Uc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!ft||!Nn||ft===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==ft)t=this.activeLink=new jp(ft,this),ft.deps?(t.prevDep=ft.depsTail,ft.depsTail.nextDep=t,ft.depsTail=t):ft.deps=ft.depsTail=t,Bf(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=ft.depsTail,t.nextDep=void 0,ft.depsTail.nextDep=t,ft.depsTail=t,ft.deps===t&&(ft.deps=i)}return t}trigger(e){this.version++,Cr++,this.notify(e)}notify(e){Ic();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Dc()}}}function Bf(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Bf(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Tl=new WeakMap,is=Symbol(""),Rl=Symbol(""),Pr=Symbol("");function zt(n,e,t){if(Nn&&ft){let i=Tl.get(n);i||Tl.set(n,i=new Map);let s=i.get(t);s||(i.set(t,s=new Uc),s.map=i,s.key=t),s.track()}}function ui(n,e,t,i,s,r){const o=Tl.get(n);if(!o){Cr++;return}const a=l=>{l&&l.trigger()};if(Ic(),e==="clear")o.forEach(a);else{const l=Be(n),c=l&&Lc(t);if(l&&t==="length"){const h=Number(i);o.forEach((f,u)=>{(u==="length"||u===Pr||!jn(u)&&u>=h)&&a(f)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(Pr)),e){case"add":l?c&&a(o.get("length")):(a(o.get(is)),Ci(n)&&a(o.get(Rl)));break;case"delete":l||(a(o.get(is)),Ci(n)&&a(o.get(Rl)));break;case"set":Ci(n)&&a(o.get(is));break}}Dc()}function ps(n){const e=rt(n);return e===n||(zt(e,"iterate",Pr),Mn(n))?e:Jn(n)?Pi(n)?e.map(t=>Ni(Sn(t))):e.map(Ni):e.map(Sn)}function aa(n){return zt(n=rt(n),"iterate",Pr),n}function zn(n,e){return Jn(n)?Ni(Pi(n)?Sn(e):e):Sn(e)}const Kp={__proto__:null,[Symbol.iterator](){return Ta(this,Symbol.iterator,n=>zn(this,n))},concat(...n){return ps(this).concat(...n.map(e=>Be(e)?ps(e):e))},entries(){return Ta(this,"entries",n=>(n[1]=zn(this,n[1]),n))},every(n,e){return ti(this,"every",n,e,void 0,arguments)},filter(n,e){return ti(this,"filter",n,e,t=>t.map(i=>zn(this,i)),arguments)},find(n,e){return ti(this,"find",n,e,t=>zn(this,t),arguments)},findIndex(n,e){return ti(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return ti(this,"findLast",n,e,t=>zn(this,t),arguments)},findLastIndex(n,e){return ti(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return ti(this,"forEach",n,e,void 0,arguments)},includes(...n){return Ra(this,"includes",n)},indexOf(...n){return Ra(this,"indexOf",n)},join(n){return ps(this).join(n)},lastIndexOf(...n){return Ra(this,"lastIndexOf",n)},map(n,e){return ti(this,"map",n,e,void 0,arguments)},pop(){return tr(this,"pop")},push(...n){return tr(this,"push",n)},reduce(n,...e){return Lh(this,"reduce",n,e)},reduceRight(n,...e){return Lh(this,"reduceRight",n,e)},shift(){return tr(this,"shift")},some(n,e){return ti(this,"some",n,e,void 0,arguments)},splice(...n){return tr(this,"splice",n)},toReversed(){return ps(this).toReversed()},toSorted(n){return ps(this).toSorted(n)},toSpliced(...n){return ps(this).toSpliced(...n)},unshift(...n){return tr(this,"unshift",n)},values(){return Ta(this,"values",n=>zn(this,n))}};function Ta(n,e,t){const i=aa(n),s=i[e],r=s.call(i);if(i!==n&&!Mn(n)){if(r[Symbol.toStringTag]==="Array Iterator"){const o=Object.create(Object.getPrototypeOf(r));return o.next=()=>Ph(r.next(),t),s!==zf[e]&&Object.defineProperties(o,{return:{get(){const a=r.return;return typeof a=="function"?a.bind(r):a}},throw:{get(){const a=r.throw;return typeof a=="function"?a.bind(r):a}}}),o}r._next=r.next,r.next=()=>Ph(r._next(),t)}return r}function Ph(n,e){return n.done||(n.value=e(n.value)),n}const zf=Array.prototype;function ti(n,e,t,i,s,r){const o=aa(n),a=o!==n&&!Mn(n),l=o[e];if(l!==zf[e]){const f=l.apply(n,r);return a?Sn(f):f}let c=t;o!==n&&(a?c=function(f,u){return t.call(this,zn(n,f),u,n)}:t.length>2&&(c=function(f,u){return t.call(this,f,u,n)}));const h=l.call(o,c,i);return a&&s?s(h):h}function Lh(n,e,t,i){const s=aa(n),r=s!==n&&!Mn(n);let o=t,a=!1;s!==n&&(r?(a=i.length===0,o=function(c,h,f){return a&&(a=!1,c=zn(n,c)),t.call(this,c,zn(n,h),f,n)}):t.length>3&&(o=function(c,h,f){return t.call(this,c,h,f,n)}));const l=s[e](o,...i);return a?zn(n,l):l}function Ra(n,e,t){const i=rt(n);zt(i,"iterate",Pr);const s=i[e](...t);return(s===-1||s===!1)&&Bc(t[0])?(t[0]=rt(t[0]),i[e](...t)):s}function tr(n,e,t=[]){Kn(),Ic();const i=rt(n)[e].apply(n,t);return Dc(),$n(),i}const $p=Cc("__proto__,__v_isRef,__isVue"),Hf=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(jn));function Jp(n){jn(n)||(n=String(n));const e=rt(this);return zt(e,"has",n),e.hasOwnProperty(n)}class Vf{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?am:Yf:r?Xf:Wf).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Be(e);if(!s){let l;if(o&&(l=Kp[t]))return l;if(t==="hasOwnProperty")return Jp}const a=Reflect.get(e,t,Gt(e)?e:i);if((jn(t)?Hf.has(t):$p(t))||(s||zt(e,"get",t),r))return a;if(Gt(a)){const l=o&&Lc(t)?a:a.value;return s&&ht(l)?Pl(l):l}return ht(a)?s?Pl(a):Fc(a):a}}class Gf extends Vf{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];const o=Be(e)&&Lc(t);if(!this._isShallow){const c=Jn(r);if(!Mn(i)&&!Jn(i)&&(r=rt(r),i=rt(i)),!o&&Gt(r)&&!Gt(i))return c||(r.value=i),!0}const a=o?Number(t)<e.length:nt(e,t),l=Reflect.set(e,t,i,Gt(e)?e:s);return e===rt(s)&&l&&(a?Xn(i,r)&&ui(e,"set",t,i):ui(e,"add",t,i)),l}deleteProperty(e,t){const i=nt(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&ui(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!jn(t)||!Hf.has(t))&&zt(e,"has",t),i}ownKeys(e){return zt(e,"iterate",Be(e)?"length":is),Reflect.ownKeys(e)}}class Zp extends Vf{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Qp=new Gf,em=new Zp,tm=new Gf(!0);const Cl=n=>n,Jr=n=>Reflect.getPrototypeOf(n);function nm(n,e,t){return function(...i){const s=this.__v_raw,r=rt(s),o=Ci(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),h=t?Cl:e?Ni:Sn;return!e&&zt(r,"iterate",l?Rl:is),Ct(Object.create(c),{next(){const{value:f,done:u}=c.next();return u?{value:f,done:u}:{value:a?[h(f[0]),h(f[1])]:h(f),done:u}}})}}function Zr(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function im(n,e){const t={get(s){const r=this.__v_raw,o=rt(r),a=rt(s);n||(Xn(s,a)&&zt(o,"get",s),zt(o,"get",a));const{has:l}=Jr(o),c=e?Cl:n?Ni:Sn;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&zt(rt(s),"iterate",is),s.size},has(s){const r=this.__v_raw,o=rt(r),a=rt(s);return n||(Xn(s,a)&&zt(o,"has",s),zt(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=rt(a),c=e?Cl:n?Ni:Sn;return!n&&zt(l,"iterate",is),a.forEach((h,f)=>s.call(r,c(h),c(f),o))}};return Ct(t,n?{add:Zr("add"),set:Zr("set"),delete:Zr("delete"),clear:Zr("clear")}:{add(s){const r=rt(this),o=Jr(r),a=rt(s),l=!e&&!Mn(s)&&!Jn(s)?a:s;return o.has.call(r,l)||Xn(s,l)&&o.has.call(r,s)||Xn(a,l)&&o.has.call(r,a)||(r.add(l),ui(r,"add",l,l)),this},set(s,r){!e&&!Mn(r)&&!Jn(r)&&(r=rt(r));const o=rt(this),{has:a,get:l}=Jr(o);let c=a.call(o,s);c||(s=rt(s),c=a.call(o,s));const h=l.call(o,s);return o.set(s,r),c?Xn(r,h)&&ui(o,"set",s,r):ui(o,"add",s,r),this},delete(s){const r=rt(this),{has:o,get:a}=Jr(r);let l=o.call(r,s);l||(s=rt(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&ui(r,"delete",s,void 0),c},clear(){const s=rt(this),r=s.size!==0,o=s.clear();return r&&ui(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=nm(s,n,e)}),t}function Oc(n,e){const t=im(n,e);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_isShallow"?e:s==="__v_raw"?i:Reflect.get(nt(t,s)&&s in i?t:i,s,r)}const sm={get:Oc(!1,!1)},rm={get:Oc(!1,!0)},om={get:Oc(!0,!1)};const Wf=new WeakMap,Xf=new WeakMap,Yf=new WeakMap,am=new WeakMap;function lm(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Fc(n){return Jn(n)?n:kc(n,!1,Qp,sm,Wf)}function cm(n){return kc(n,!1,tm,rm,Xf)}function Pl(n){return kc(n,!0,em,om,Yf)}function kc(n,e,t,i,s){if(!ht(n)||n.__v_raw&&!(e&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const r=s.get(n);if(r)return r;const o=lm(Dp(n));if(o===0)return n;const a=new Proxy(n,o===2?i:t);return s.set(n,a),a}function Pi(n){return Jn(n)?Pi(n.__v_raw):!!(n&&n.__v_isReactive)}function Jn(n){return!!(n&&n.__v_isReadonly)}function Mn(n){return!!(n&&n.__v_isShallow)}function Bc(n){return n?!!n.__v_raw:!1}function rt(n){const e=n&&n.__v_raw;return e?rt(e):n}function qf(n){return!nt(n,"__v_skip")&&Object.isExtensible(n)&&Tf(n,"__v_skip",!0),n}const Sn=n=>ht(n)?Fc(n):n,Ni=n=>ht(n)?Pl(n):n;function Gt(n){return n?n.__v_isRef===!0:!1}function Rt(n){return hm(n,!1)}function hm(n,e){return Gt(n)?n:new um(n,e)}class um{constructor(e,t){this.dep=new Uc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:rt(e),this._value=t?e:Sn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||Mn(e)||Jn(e);e=i?e:rt(e),Xn(e,t)&&(this._rawValue=e,this._value=i?e:Sn(e),this.dep.trigger())}}function _t(n){return Gt(n)?n.value:n}const fm={get:(n,e,t)=>e==="__v_raw"?n:_t(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return Gt(s)&&!Gt(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function jf(n){return Pi(n)?n:new Proxy(n,fm)}class dm{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Uc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Cr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&ft!==this)return Nf(this,!0),!0}get value(){const e=this.dep.track();return Ff(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function pm(n,e,t=!1){let i,s;return qe(n)?i=n:(i=n.get,s=n.set),new dm(i,s,t)}const Qr={},zo=new WeakMap;let qi;function mm(n,e=!1,t=qi){if(t){let i=zo.get(t);i||zo.set(t,i=[]),i.push(n)}}function gm(n,e,t=ut){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=t,c=b=>s?b:Mn(b)||s===!1||s===0?fi(b,1):fi(b);let h,f,u,d,g=!1,_=!1;if(Gt(n)?(f=()=>n.value,g=Mn(n)):Pi(n)?(f=()=>c(n),g=!0):Be(n)?(_=!0,g=n.some(b=>Pi(b)||Mn(b)),f=()=>n.map(b=>{if(Gt(b))return b.value;if(Pi(b))return c(b);if(qe(b))return l?l(b,2):b()})):qe(n)?e?f=l?()=>l(n,2):n:f=()=>{if(u){Kn();try{u()}finally{$n()}}const b=qi;qi=h;try{return l?l(n,3,[d]):n(d)}finally{qi=b}}:f=Yn,e&&s){const b=f,N=s===!0?1/0:s;f=()=>fi(b(),N)}const p=Yp(),m=()=>{h.stop(),p&&p.active&&Pc(p.effects,h)};if(r&&e){const b=e;e=(...N)=>{try{return b(...N)}finally{m()}}}let x=_?new Array(n.length).fill(Qr):Qr;const v=b=>{if(!(!(h.flags&1)||!h.dirty&&!b))if(e){const N=h.run();if(b||s||g||(_?N.some((R,P)=>Xn(R,x[P])):Xn(N,x))){const R=qi;Kn();try{u&&u(),qi=h;const P=[N,x===Qr?void 0:_&&x[0]===Qr?[]:x,d];x=N,l?l(e,3,P):e(...P)}finally{qi=R,$n()}}}else h.run()};return a&&a(v),h=new If(f),h.scheduler=o?()=>o(v,!1):v,d=b=>mm(b,!1,h),u=h.onStop=()=>{const b=zo.get(h);if(b){if(l)l(b,4);else for(const N of b)N();zo.delete(h)}},e?i?v(!0):x=h.run():o?o(v.bind(null,!0),!0):h.run(),m.pause=h.pause.bind(h),m.resume=h.resume.bind(h),m.stop=m,m}function fi(n,e=1/0,t){if(e<=0||!ht(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,Gt(n))fi(n.value,e,t);else if(Be(n))for(let i=0;i<n.length;i++)fi(n[i],e,t);else if(rs(n)||Ci(n))n.forEach(i=>{fi(i,e,t)});else if(wf(n)){for(const i in n)fi(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&fi(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Gr(n,e,t,i){try{return i?n(...i):n()}catch(s){la(s,e,t)}}function On(n,e,t,i){if(qe(n)){const s=Gr(n,e,t,i);return s&&bf(s)&&s.catch(r=>{la(r,e,t,void 0,!0)}),s}if(Be(n)){const s=[];for(let r=0;r<n.length;r++)s.push(On(n[r],e,t,i));return s}}function la(n,e,t,i=!0,s=!1){const r=e?e.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||ut;if(e){let l=e.parent;const c=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${t}`;for(;l;){const f=l.ec;if(f&&!l.isUnmounted&&(!s||l.scope.active)){for(let u=0;u<f.length;u++)if(f[u](n,c,h)===!1)return}l=l.parent}if(o){Kn(),Gr(o,null,10,[n,c,h]),$n();return}}vm(n,t,r,i,a)}function vm(n,e,t,i=!0,s=!1){if(s)throw n;console.error(n)}const jt=[];let Tn=-1;const Hn=[];let wi=null,Cs=0;const Kf=Promise.resolve();let Ho=null;function zc(n){const e=Ho||Kf;return n?e.then(this?n.bind(this):n):e}function _m(n){let e=Tn+1,t=jt.length;for(;e<t;){const i=e+t>>>1,s=jt[i],r=Lr(s);r<n||r===n&&s.flags&2?e=i+1:t=i}return e}function Hc(n){if(!(n.flags&1)){const e=Lr(n),t=jt[jt.length-1];!t||!(n.flags&2)&&e>=Lr(t)?jt.push(n):jt.splice(_m(e),0,n),n.flags|=1,$f()}}function $f(){Ho||(Ho=Kf.then(Qf))}function xm(n){if(!Be(n))wi&&n.id===-1?wi.splice(Cs+1,0,n):n.flags&1||(Hn.push(n),n.flags|=1);else for(let e=0;e<n.length;e++)Hn.push(n[e]);$f()}function Jf(n,e,t,i=Tn+1){for(;i<jt.length;i++){const s=jt[i];if(s&&s.flags&2){if(n&&s.id!==n.uid||e!==void 0&&!(s.id>=e))continue;jt.splice(i,1),i=n?i-1:Tn,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function Zf(n,e,t=0){if(Hn.length){let i=Hn,s=0;if(e){i=[];for(let o=0;o<Hn.length;o++){const a=Hn[o];(a.i!==void 0?!a.i||a.i.uid<t:e.has(a))?Hn[s++]=a:i.push(a)}}const r=[...new Set(i)].sort((o,a)=>Lr(o)-Lr(a));if(Hn.length=s,wi){for(let o=0;o<r.length;o++)wi.push(r[o]);return}for(wi=r,Cs=0;Cs<wi.length;Cs++){const o=wi[Cs];o.flags&4&&(o.flags&=-2),o.flags&8||o(),o.flags&=-2}wi=null,Cs=0}}let Ca=!1;function ym(n,e){if(Ca){n();return}const t=e===void 0?void 0:new Set(Hn);n(),Ca=!0;try{Jf(void 0,e),Zf(void 0,t,e)}finally{Ca=!1}}const Lr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Qf(n){try{for(Tn=0;Tn<jt.length;Tn++){const e=jt[Tn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Gr(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Tn<jt.length;Tn++){const e=jt[Tn];e&&(e.flags&=-2)}Tn=-1,jt.length=0,Zf(),Ho=null,(jt.length||Hn.length)&&Qf()}}let yn=null,ed=null;function Vo(n){const e=yn;return yn=n,ed=n&&n.type.__scopeId||null,e}function Mm(n,e=yn,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&Vh(-1);const r=Vo(e),o=ss.length;let a;try{a=n(...s)}finally{for(let l=ss.length;l>o;l--)wd();Vo(r),i._d&&Vh(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function Ps(n,e){if(yn===null)return n;const t=fa(yn),i=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=ut]=e[s];r&&(qe(r)&&(r={mounted:r,updated:r}),r.deep&&fi(o),i.push({dir:r,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function Bi(n,e,t,i){let s=n;if(i==="beforeMount")n._mount=n;else if(i==="beforeUpdate"){const a=e&&e._mount;a&&(a._latest=n,n._mount=a)}else if(i==="mounted"){const a=n._latest;n._mount=n._latest=void 0,a&&(s=a,a._mount=void 0)}const r=s.dirs,o=e&&e.dirs;for(let a=0;a<r.length;a++){let l=r[a];o?l.oldValue=o[a].value:i==="mounted"&&l.oldValue!==void 0&&(l=Ct({},l,{oldValue:void 0}));let c=l.dir[i];c&&(Kn(),On(c,t,8,[n.el,l,s,e]),$n())}}function Sm(n,e){if(Kt){let t=Kt.provides;const i=Kt.parent&&Kt.parent.provides;i===t&&(t=Kt.provides=Object.create(i)),t[n]=e}}function Lo(n,e,t=!1){const i=y0();if(i||Us){let s=Us?Us._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&qe(e)?e.call(i&&i.proxy):e}}const bm=Symbol.for("v-scx"),Em=()=>Lo(bm);function Ns(n,e,t){return td(n,e,t)}function td(n,e,t=ut){const{immediate:i,deep:s,flush:r,once:o}=t,a=Ct({},t),l=e&&i||!e&&r!=="post";let c;if(Ur){if(r==="sync"){const d=Em();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=Yn,d.resume=Yn,d.pause=Yn,d}}const h=Kt;a.call=(d,g,_)=>On(d,h,g,_);let f=!1;r==="post"?a.scheduler=d=>{d.i=h,Yt(d,h&&h.suspense)}:r!=="sync"&&(f=!0,a.scheduler=(d,g)=>{g?d():Hc(d)}),a.augmentJob=d=>{e&&(d.flags|=4),f&&(d.flags|=2,h&&(d.id=h.uid,d.i=h))};const u=gm(n,e,a);return Ur&&(c?c.push(u):l&&u()),u}function wm(n,e,t){const i=this.proxy,s=Et(n)?n.includes(".")?nd(i,n):()=>i[n]:n.bind(i,i);let r;qe(e)?r=e:(r=e.handler,t=e);const o=Wr(this),a=td(s,r.bind(i),t);return o(),a}function nd(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}const Am=Symbol("_vte"),ca=n=>n.__isTeleport,Pa=Symbol("_leaveCb");function Tm(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==Fn){e=t;break}}return e}function id(n){if(!Vc(n))return ca(n.type)&&n.children?Tm(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&qe(t.default))return t.default()}}function _r(n,e){if(n.shapeFlag&6&&n.component){n.transition=e;const t=n.component.subTree;_r(ca(t.type)&&id(t)||t,e)}else if(n.shapeFlag&128){const t=n.suspense;if(t){const i=t.isHydrating?t.pendingBranch:t.activeBranch;i&&_r(i,e.clone(i))}else n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)}else if(n.transition=e,n.type===xt&&Be(n.children)){const t=fd(n.children,!1);t&&_r(t,e)}}function Ll(n){if(n.component)return Ll(n.component.subTree);if(n.type===xt){const e=Be(n.children)&&fd(n.children,!1);return e?Ll(e):void 0}if(n.type!==Fn)return n}function sd(n,e){return qe(n)?Ct({name:n.name},e,{setup:n}):n}function rd(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Ih(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const Go=new WeakMap;function xr(n,e,t,i,s=!1){if(Be(n)){n.forEach((_,p)=>xr(_,e&&(Be(e)?e[p]:e),t,i,s));return}if(yr(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&xr(n,e,t,i.component.subTree);return}const r=i.shapeFlag&4?fa(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=e&&e.r,h=a.refs===ut?a.refs={}:a.refs,f=a.setupState,u=rt(f),d=f===ut?Sf:_=>Ih(h,_)?!1:nt(u,_),g=(_,p)=>!(p&&Ih(h,p));if(c!=null&&c!==l){if(Dh(e),Et(c))h[c]=null,d(c)&&(f[c]=null);else if(Gt(c)){const _=e;g(c,_.k)&&(c.value=null),_.k&&(h[_.k]=null)}}if(qe(l))Gr(l,a,12,[o,h]);else{const _=Et(l),p=Gt(l);if(_||p){const m=()=>{if(n.f){const x=_?d(l)?f[l]:h[l]:g()||!n.k?l.value:h[n.k];if(s)Be(x)&&Pc(x,r);else if(Be(x))x.includes(r)||x.push(r);else if(_)h[l]=[r],d(l)&&(f[l]=h[l]);else{const v=[r];g(l,n.k)&&(l.value=v),n.k&&(h[n.k]=v)}}else _?(h[l]=o,d(l)&&(f[l]=o)):p&&(g(l,n.k)&&(l.value=o),n.k&&(h[n.k]=o))};if(o){const x=()=>{m(),Go.delete(n)};x.id=-1,Go.set(n,x),Yt(x,t)}else Dh(n),m()}}}function Dh(n){const e=Go.get(n);e&&(e.flags|=8,Go.delete(n))}oa().requestIdleCallback;oa().cancelIdleCallback;const yr=n=>!!n.type.__asyncLoader,Vc=n=>n.type.__isKeepAlive;function Rm(n,e){od(n,"a",e)}function Cm(n,e){od(n,"da",e)}function od(n,e,t=Kt){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Ir(e,i,t),t){let s=t.parent;for(;s&&s.parent;)Vc(s.parent.vnode)&&Pm(i,e,t,s),s=s.parent}}function Pm(n,e,t,i){const s=Ir(e,n,i,!0),r=Ir("um",()=>Pc(i[e],s),t);r.flags=16}function Ir(n,e,t=Kt,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...o)=>{Kn();const a=Wr(t),l=On(e,t,n,o);return a(),$n(),l});return i?s.unshift(r):s.push(r),r}}const vi=n=>(e,t=Kt)=>{(!Ur||n==="sp")&&Ir(n,(...i)=>e(...i),t)},Lm=vi("bm"),ad=vi("m"),Im=vi("bu"),Dm=vi("u"),Gc=vi("bum"),Nm=vi("um"),Um=vi("sp"),Om=vi("rtg"),Fm=vi("rtc");function km(n,e=Kt){Ir("ec",n,e)}const Bm=Symbol.for("v-ndc");function ni(n,e,t,i){let s;const r=t,o=Be(n);if(o||Et(n)){const a=o&&Pi(n);let l=!1,c=!1;a&&(l=!Mn(n),c=Jn(n),n=aa(n)),s=new Array(n.length);for(let h=0,f=n.length;h<f;h++)s[h]=e(l?c?Ni(Sn(n[h])):Sn(n[h]):n[h],h,void 0,r)}else if(typeof n=="number")if(!Number.isInteger(n)||n<0)s=[];else{s=new Array(n);for(let a=0;a<n;a++)s[a]=e(a+1,a,void 0,r)}else if(ht(n))if(n[Symbol.iterator])s=Array.from(n,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(n);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const h=a[l];s[l]=e(n[h],h,l,r)}}else s=[];return s}const Il=n=>n?Cd(n)?fa(n):Il(n.parent):null,Mr=Ct(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Il(n.parent),$root:n=>Il(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>cd(n),$forceUpdate:n=>n.f||(n.f=()=>{Hc(n.update)}),$nextTick:n=>n.n||(n.n=zc.bind(n.proxy)),$watch:n=>wm.bind(n)}),La=(n,e)=>n!==ut&&!n.__isScriptSetup&&nt(n,e),zm={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;if(e[0]!=="$"){const u=o[e];if(u!==void 0)switch(u){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(La(i,e))return o[e]=1,i[e];if(s!==ut&&nt(s,e))return o[e]=2,s[e];if(nt(r,e))return o[e]=3,r[e];if(t!==ut&&nt(t,e))return o[e]=4,t[e];Dl&&(o[e]=0)}}const c=Mr[e];let h,f;if(c)return e==="$attrs"&&zt(n.attrs,"get",""),c(n);if((h=a.__cssModules)&&(h=h[e]))return h;if(t!==ut&&nt(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,nt(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return La(s,e)?(s[e]=t,!0):i!==ut&&nt(i,e)?(i[e]=t,!0):nt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,props:r,type:o}},a){let l;return!!(t[a]||n!==ut&&a[0]!=="$"&&nt(n,a)||La(e,a)||nt(r,a)||nt(i,a)||nt(Mr,a)||nt(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:nt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Nh(n){return Be(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Dl=!0;function Hm(n){const e=cd(n),t=n.proxy,i=n.ctx;Dl=!1,e.beforeCreate&&Uh(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:h,beforeMount:f,mounted:u,beforeUpdate:d,updated:g,activated:_,deactivated:p,beforeDestroy:m,beforeUnmount:x,destroyed:v,unmounted:b,render:N,renderTracked:R,renderTriggered:P,errorCaptured:D,serverPrefetch:Z,expose:y,inheritAttrs:w,components:z,directives:W,filters:$}=e;if(c&&Vm(c,i,null),o)for(const se in o){const G=o[se];qe(G)&&(i[se]=G.bind(t))}if(s){const se=s.call(t,t);ht(se)&&(n.data=Fc(se))}if(Dl=!0,r)for(const se in r){const G=r[se],ve=qe(G)?G.bind(t,t):qe(G.get)?G.get.bind(t,t):Yn,Me=!qe(G)&&qe(G.set)?G.set.bind(t):Yn,we=cn({get:ve,set:Me});Object.defineProperty(i,se,{enumerable:!0,configurable:!0,get:()=>we.value,set:We=>we.value=We})}if(a)for(const se in a)ld(a[se],i,t,se);if(l){const se=qe(l)?l.call(t):l;Reflect.ownKeys(se).forEach(G=>{Sm(G,se[G])})}h&&Uh(h,n,"c");function V(se,G){Be(G)?G.forEach(ve=>se(ve.bind(t))):G&&se(G.bind(t))}if(V(Lm,f),V(ad,u),V(Im,d),V(Dm,g),V(Rm,_),V(Cm,p),V(km,D),V(Fm,R),V(Om,P),V(Gc,x),V(Nm,b),V(Um,Z),Be(y))if(y.length){const se=n.exposed||(n.exposed={});y.forEach(G=>{Object.defineProperty(se,G,{get:()=>t[G],set:ve=>t[G]=ve,enumerable:!0})})}else n.exposed||(n.exposed={});N&&n.render===Yn&&(n.render=N),w!=null&&(n.inheritAttrs=w),z&&(n.components=z),W&&(n.directives=W),Z&&rd(n)}function Vm(n,e,t=Yn){Be(n)&&(n=Nl(n));for(const i in n){const s=n[i];let r;ht(s)?"default"in s?r=Lo(s.from||i,s.default,!0):r=Lo(s.from||i):r=Lo(s),Gt(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function Uh(n,e,t){On(Be(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function ld(n,e,t,i){let s=i.includes(".")?nd(t,i):()=>t[i];if(Et(n)){const r=e[n];qe(r)&&Ns(s,r)}else if(qe(n))Ns(s,n.bind(t));else if(ht(n))if(Be(n))n.forEach(r=>ld(r,e,t,i));else{const r=qe(n.handler)?n.handler.bind(t):e[n.handler];qe(r)&&Ns(s,r,n)}}function cd(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>Wo(l,c,o,!0)),Wo(l,e,o)),ht(e)&&r.set(e,l),l}function Wo(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&Wo(n,r,t,!0),s&&s.forEach(o=>Wo(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=Gm[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const Gm={data:Oh,props:Fh,emits:Fh,methods:fr,computed:fr,beforeCreate:Xt,created:Xt,beforeMount:Xt,mounted:Xt,beforeUpdate:Xt,updated:Xt,beforeDestroy:Xt,beforeUnmount:Xt,destroyed:Xt,unmounted:Xt,activated:Xt,deactivated:Xt,errorCaptured:Xt,serverPrefetch:Xt,components:fr,directives:fr,watch:Xm,provide:Oh,inject:Wm};function Oh(n,e){return e?n?function(){return Ct(qe(n)?n.call(this,this):n,qe(e)?e.call(this,this):e)}:e:n}function Wm(n,e){return fr(Nl(n),Nl(e))}function Nl(n){if(Be(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Xt(n,e){return n?[...new Set([].concat(n,e))]:e}function fr(n,e){return n?Ct(Object.create(null),n,e):e}function Fh(n,e){return n?Be(n)&&Be(e)?[...new Set([...n,...e])]:Ct(Object.create(null),Nh(n),Nh(e??{})):e}function Xm(n,e){if(!n)return e;if(!e)return n;const t=Ct(Object.create(null),n);for(const i in e)t[i]=Xt(n[i],e[i]);return t}function hd(){return{app:null,config:{isNativeTag:Sf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ym=0;function qm(n,e){return function(i,s=null){qe(i)||(i=Ct({},i)),s!=null&&!ht(s)&&(s=null);const r=hd(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:Ym++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:A0,get config(){return r.config},set config(h){},use(h,...f){return o.has(h)||(h&&qe(h.install)?(o.add(h),h.install(c,...f)):qe(h)&&(o.add(h),h(c,...f))),c},mixin(h){return r.mixins.includes(h)||r.mixins.push(h),c},component(h,f){return f?(r.components[h]=f,c):r.components[h]},directive(h,f){return f?(r.directives[h]=f,c):r.directives[h]},mount(h,f,u){if(!l){const d=c._ceVNode||qn(i,s);return d.appContext=r,u===!0?u="svg":u===!1&&(u=void 0),n(d,h,u),l=!0,c._container=h,h.__vue_app__=c,fa(d.component)}},onUnmount(h){a.push(h)},unmount(){l&&(On(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(h,f){return r.provides[h]=f,c},runWithContext(h){const f=Us;Us=c;try{return h()}finally{Us=f}}};return c}}let Us=null;const jm=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Dn(e)}Modifiers`]||n[`${hs(e)}Modifiers`];function Km(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||ut;let s=t;const r=e.startsWith("update:"),o=r&&jm(i,e.slice(7));o&&(o.trim&&(s=t.map(h=>Et(h)?h.trim():h)),o.number&&(s=s.map(Vr)));let a,l=i[a=Ea(e)]||i[a=Ea(Dn(e))];!l&&r&&(l=i[a=Ea(hs(e))]),l&&On(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,On(c,n,6,s)}}const $m=new WeakMap;function ud(n,e,t=!1){const i=t?$m:e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!qe(n)){const l=c=>{const h=ud(c,e,!0);h&&(a=!0,Ct(o,h))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(ht(n)&&i.set(n,null),null):(Be(r)?r.forEach(l=>o[l]=null):Ct(o,r),ht(n)&&i.set(n,o),o)}function ha(n,e){return!n||!ia(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),nt(n,e[0].toLowerCase()+e.slice(1))||nt(n,hs(e))||nt(n,e))}function kh(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:h,props:f,data:u,setupState:d,ctx:g,inheritAttrs:_}=n,p=Vo(n);let m,x;try{if(t.shapeFlag&4){const b=s||i,N=b;m=Vn(c.call(N,b,h,f,d,u,g)),x=a}else{const b=e;m=Vn(b.length>1?b(f,{attrs:a,slots:o,emit:l}):b(f,null)),x=e.props?a:Jm(a)}}catch(b){ss.length=0,la(b,n,1),m=qn(Fn)}let v=m;if(x&&_!==!1){const b=Object.keys(x),{shapeFlag:N}=v;b.length&&N&7&&(r&&b.some(sa)&&(x=Zm(x,r)),v=Vs(v,x,!1,!0))}if(t.dirs&&(v=Vs(v,null,!1,!0),v.dirs=v.dirs?v.dirs.concat(t.dirs):t.dirs),t.transition){const b=ca(v.type)&&id(v)||v;_r(b,t.transition)}return m=v,Vo(p),m}function fd(n,e=!0){let t;for(let i=0;i<n.length;i++){const s=n[i];if(Yc(s)){if(s.type!==Fn||s.children==="v-if"){if(t)return;t=s}}else return}return t}const Jm=n=>{let e;for(const t in n)(t==="class"||t==="style"||ia(t))&&((e||(e={}))[t]=n[t]);return e},Zm=(n,e)=>{const t={};for(const i in n)(!sa(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Qm(n,e,t){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Bh(i,o,c):!!o;if(l&8){const h=e.dynamicProps;for(let f=0;f<h.length;f++){const u=h[f];if(dd(o,i,u)&&!ha(c,u))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Bh(i,o,c):!0:!!o;return!1}function Bh(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(!nt(n,r)||dd(e,n,r)&&!ha(t,r))return!0}return!1}function dd(n,e,t){const i=n[t],s=e[t];return t==="style"&&ht(i)&&ht(s)?!Di(i,s):i!==s}function e0({vnode:n,parent:e,suspense:t},i){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.suspense.vnode.el=s.el=i,n=s),s===n)(n=e.vnode).el=i,e=e.parent;else break}t&&t.activeBranch===n&&(t.vnode.el=i)}const pd={},md=()=>Object.create(pd),gd=n=>Object.getPrototypeOf(n)===pd;function t0(n,e,t,i=!1){const s={},r=md();n.propsDefaults=Object.create(null),vd(n,e,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=i?s:cm(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function n0(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=rt(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const h=n.vnode.dynamicProps;for(let f=0;f<h.length;f++){let u=h[f];if(ha(n.emitsOptions,u))continue;const d=e[u];if(l)if(nt(r,u))d!==r[u]&&(r[u]=d,c=!0);else{const g=Dn(u);s[g]=Ul(l,a,g,d,n,!1)}else d!==r[u]&&(r[u]=d,c=!0)}}}else{vd(n,e,s,r)&&(c=!0);let h;for(const f in a)(!e||!nt(e,f)&&((h=hs(f))===f||!nt(e,h)))&&(l?t&&(t[f]!==void 0||t[h]!==void 0)&&(s[f]=Ul(l,a,f,void 0,n,!0)):delete s[f]);if(r!==a)for(const f in r)(!e||!nt(e,f))&&(delete r[f],c=!0)}c&&ui(n.attrs,"set","")}function vd(n,e,t,i){const[s,r]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(mr(l))continue;const c=e[l];let h;s&&nt(s,h=Dn(l))?!r||!r.includes(h)?t[h]=c:(a||(a={}))[h]=c:ha(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=rt(t),c=a||ut;for(let h=0;h<r.length;h++){const f=r[h];t[f]=Ul(s,l,f,c[f],n,!nt(c,f))}}return o}function Ul(n,e,t,i,s,r){const o=n[t];if(o!=null){const a=nt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&qe(l)){const{propsDefaults:c}=s;if(t in c)i=c[t];else{const h=Wr(s);i=c[t]=l.call(null,e),h()}}else i=l;s.ce&&s.ce._setProp(t,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===hs(t))&&(i=!0))}return i}const i0=new WeakMap;function _d(n,e,t=!1){const i=t?i0:e.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!qe(n)){const h=f=>{l=!0;const[u,d]=_d(f,e,!0);Ct(o,u),d&&a.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(h),n.extends&&h(n.extends),n.mixins&&n.mixins.forEach(h)}if(!r&&!l)return ht(n)&&i.set(n,Qi),Qi;if(Be(r))for(let h=0;h<r.length;h++){const f=Dn(r[h]);zh(f)&&(o[f]=ut)}else if(r)for(const h in r){const f=Dn(h);if(zh(f)){const u=r[h],d=o[f]=Be(u)||qe(u)?{type:u}:Ct({},u),g=d.type;let _=!1,p=!0;if(Be(g))for(let m=0;m<g.length;++m){const x=g[m],v=qe(x)&&x.name;if(v==="Boolean"){_=!0;break}else v==="String"&&(p=!1)}else _=qe(g)&&g.name==="Boolean";d[0]=_,d[1]=p,(_||nt(d,"default"))&&a.push(f)}}const c=[o,a];return ht(n)&&i.set(n,c),c}function zh(n){return n[0]!=="$"&&!mr(n)}const Wc=n=>n==="_"||n==="_ctx"||n==="$stable",Xc=n=>Be(n)?n.map(Vn):[Vn(n)],s0=(n,e,t)=>{if(e._n)return e;const i=Mm((...s)=>Xc(e(...s)),t);return i._c=!1,i},xd=(n,e,t)=>{const i=n._ctx;for(const s in n){if(Wc(s))continue;const r=n[s];if(qe(r))e[s]=s0(s,r,i);else if(r!=null){const o=Xc(r);e[s]=()=>o}}},yd=(n,e)=>{const t=Xc(e);n.slots.default=()=>t},Md=(n,e,t)=>{for(const i in e)(t||!Wc(i))&&(n[i]=e[i])},r0=(n,e,t)=>{const i=n.slots=md();if(n.vnode.shapeFlag&32){const s=e._;s?(Md(i,e,t),t&&Tf(i,"_",s,!0)):xd(e,i)}else e&&yd(n,e)},o0=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,o=ut;if(i.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:Md(s,e,t):(r=!e.$stable,xd(e,s)),o=e}else e&&(yd(n,e),o={default:1});if(r)for(const a in s)!Wc(a)&&o[a]==null&&delete s[a]},Yt=f0;function a0(n){return l0(n)}function l0(n,e){const t=oa();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:h,parentNode:f,nextSibling:u,setScopeId:d=Yn,insertStaticContent:g}=n,_=(C,T,S,ne=null,X=null,J=null,te=void 0,re=null,Q=!!T.dynamicChildren)=>{if(C===T)return;C&&!nr(C,T)&&(ne=xe(C),We(C,X,J,!0),C=null),T.patchFlag===-2&&(Q=!1,T.dynamicChildren=null),T.dynamicChildren&&C&&C.dynamicChildren&&C.dynamicChildren.hasOnce&&(T.dynamicChildren===Qi&&(T.dynamicChildren=[]),T.dynamicChildren.hasOnce=!0);const{type:E,ref:M,shapeFlag:L}=T;switch(E){case ua:p(C,T,S,ne);break;case Fn:m(C,T,S,ne);break;case Da:C==null&&x(T,S,ne,te);break;case xt:z(C,T,S,ne,X,J,te,re,Q);break;default:L&1?N(C,T,S,ne,X,J,te,re,Q):L&6?W(C,T,S,ne,X,J,te,re,Q):(L&64||L&128)&&E.process(C,T,S,ne,X,J,te,re,Q,I)}M!=null&&X?xr(M,C&&C.ref,J,T||C,!T):M==null&&C&&C.ref!=null&&xr(C.ref,null,J,C,!0)},p=(C,T,S,ne)=>{if(C==null)i(T.el=a(T.children),S,ne);else{const X=T.el=C.el;T.children!==C.children&&c(X,T.children)}},m=(C,T,S,ne)=>{C==null?i(T.el=l(T.children||""),S,ne):T.el=C.el},x=(C,T,S,ne)=>{[C.el,C.anchor]=g(C.children,T,S,ne,C.el,C.anchor)},v=({el:C,anchor:T},S,ne)=>{let X;for(;C&&C!==T;)X=u(C),i(C,S,ne),C=X;i(T,S,ne)},b=({el:C,anchor:T})=>{let S;for(;C&&C!==T;)S=u(C),s(C),C=S;s(T)},N=(C,T,S,ne,X,J,te,re,Q)=>{if(T.type==="svg"?te="svg":T.type==="math"&&(te="mathml"),C==null)R(T,S,ne,X,J,te,re,Q);else{const E=C.el&&C.el._isVueCE?C.el:null;try{E&&E._beginPatch(),Z(C,T,X,J,te,re,Q)}finally{E&&E._endPatch()}}},R=(C,T,S,ne,X,J,te,re)=>{let Q,E;const{props:M,shapeFlag:L,transition:B,dirs:K}=C;if(Q=C.el=o(C.type,J,M&&M.is,M),L&8?h(Q,C.children):L&16&&D(C.children,Q,null,ne,X,Ia(C,J),te,re),K&&Bi(C,null,ne,"created"),P(Q,C,C.scopeId,te,ne),M){for(const de in M)de!=="value"&&!mr(de)&&r(Q,de,null,M[de],J,ne);"value"in M&&r(Q,"value",null,M.value,J),(E=M.onVnodeBeforeMount)&&kn(E,ne,C)}K&&Bi(C,null,ne,"beforeMount");const q=c0(X,B);q?B.beforeEnter(Q):B&&!B.persisted&&(Q[u0]=!0),i(Q,T,S),((E=M&&M.onVnodeMounted)||q||K)&&Yt(()=>{try{E&&kn(E,ne,C),q&&B.enter(Q),K&&Bi(C,null,ne,"mounted")}finally{}},X)},P=(C,T,S,ne,X)=>{if(S&&d(C,S),ne)for(let J=0;J<ne.length;J++)d(C,ne[J]);if(X){let J=X.subTree;if(T===J||Ed(J.type)&&(J.ssContent===T||J.ssFallback===T)){const te=X.vnode;P(C,te,te.scopeId,te.slotScopeIds,X.parent)}}},D=(C,T,S,ne,X,J,te,re,Q=0)=>{for(let E=Q;E<C.length;E++){const M=C[E]=re?hi(C[E]):Vn(C[E]);_(null,M,T,S,ne,X,J,te,re)}},Z=(C,T,S,ne,X,J,te)=>{const re=T.el=C.el;let{patchFlag:Q,dynamicChildren:E,dirs:M}=T;Q|=C.patchFlag&16;const L=C.props||ut,B=T.props||ut;let K;if(S&&zi(S,!1),(K=B.onVnodeBeforeUpdate)&&kn(K,S,T,C),M&&Bi(T,C,S,"beforeUpdate"),S&&zi(S,!0),E&&(!C.dynamicChildren||C.dynamicChildren.length!==E.length)&&(Q=0,te=!1,E=null),(L.innerHTML&&B.innerHTML==null||L.textContent&&B.textContent==null)&&h(re,""),E?y(C.dynamicChildren,E,re,S,ne,Ia(T,X),J):te||G(C,T,re,null,S,ne,Ia(T,X),J,!1),Q>0){if(Q&16)w(re,L,B,S,X);else if(Q&2&&L.class!==B.class&&r(re,"class",null,B.class,X),Q&4&&r(re,"style",L.style,B.style,X),Q&8){const q=T.dynamicProps;for(let de=0;de<q.length;de++){const le=q[de],fe=L[le],ke=B[le];(ke!==fe||le==="value")&&r(re,le,fe,ke,X,S)}}Q&1&&C.children!==T.children&&h(re,T.children)}else!te&&E==null&&w(re,L,B,S,X);((K=B.onVnodeUpdated)||M)&&Yt(()=>{K&&kn(K,S,T,C),M&&Bi(T,C,S,"updated")},ne)},y=(C,T,S,ne,X,J,te)=>{for(let re=0;re<T.length;re++){const Q=C[re],E=T[re],M=Q.el||Sr(Q),L=M&&(Q.type===xt||!nr(Q,E)||Q.shapeFlag&198)?f(M):S;_(Q,E,L,null,ne,X,J,te,!0)}},w=(C,T,S,ne,X)=>{if(T!==S){if(T!==ut)for(const J in T)!mr(J)&&!(J in S)&&r(C,J,T[J],null,X,ne);for(const J in S){if(mr(J))continue;const te=S[J],re=T[J];te!==re&&J!=="value"&&r(C,J,re,te,X,ne)}"value"in S&&r(C,"value",T.value,S.value,X)}},z=(C,T,S,ne,X,J,te,re,Q)=>{const E=T.el=C?C.el:a(""),M=T.anchor=C?C.anchor:a("");let{patchFlag:L,dynamicChildren:B,slotScopeIds:K}=T;K&&(re=re?re.concat(K):K),C==null?(i(E,S,ne),i(M,S,ne),D(T.children||[],S,M,X,J,te,re,Q)):L>0&&L&64&&B&&C.dynamicChildren&&C.dynamicChildren.length===B.length?(y(C.dynamicChildren,B,S,X,J,te,re),(T.key!=null||X&&T===X.subTree)&&Sd(C,T,!0)):G(C,T,S,M,X,J,te,re,Q)},W=(C,T,S,ne,X,J,te,re,Q)=>{T.slotScopeIds=re,C==null?T.shapeFlag&512?X.ctx.activate(T,S,ne,te,Q):$(T,S,ne,X,J,te,Q):ae(C,T,Q)},$=(C,T,S,ne,X,J,te)=>{const re=C.component=x0(C,ne,X);if(Vc(C)&&(re.ctx.renderer=I),M0(re,!1,te),re.asyncDep){if(X&&X.registerDep(re,V,te,J),!C.el){const Q=re.subTree=qn(Fn);m(null,Q,T,S),C.placeholder=Q.el}}else V(re,C,T,S,X,J,te)},ae=(C,T,S)=>{const ne=T.component=C.component;if(Qm(C,T,S))if(ne.asyncDep&&!ne.asyncResolved){T.el=C.el,T.placeholder=C.placeholder,se(ne,T,S);return}else ne.next=T,ne.update();else T.el=C.el,T.placeholder=C.placeholder,ne.vnode=T},V=(C,T,S,ne,X,J,te)=>{const re=()=>{if(C.isMounted){let{next:L,bu:B,u:K,parent:q,vnode:de}=C;{const ye=bd(C);if(ye){L&&(L.el=de.el,se(C,L,te)),ye.asyncDep.then(()=>{const Ne=()=>{C.job.flags&8||(X&&X.pendingBranch?Yt(Ne,X):E())};Ne.flags=48,Yt(Ne,X)});return}}let le=L,fe;zi(C,!1),L?(L.el=de.el,se(C,L,te)):L=de,B&&Po(B),(fe=L.props&&L.props.onVnodeBeforeUpdate)&&kn(fe,q,L,de),zi(C,!0);const ke=kh(C),he=C.subTree;C.subTree=ke,_(he,ke,f(he.el||Sr(he)),xe(he),C,X,J),L.el=ke.el,le===null&&e0(C,ke.el),K&&Yt(K,X),(fe=L.props&&L.props.onVnodeUpdated)&&Yt(()=>kn(fe,q,L,de),X)}else{let L;const{el:B,props:K}=T,{bm:q,m:de,parent:le,root:fe,type:ke}=C,he=yr(T);zi(C,!1),q&&Po(q),!he&&(L=K&&K.onVnodeBeforeMount)&&kn(L,le,T),zi(C,!0);{fe.ce&&fe.ce._hasShadowRoot()&&fe.ce._injectChildStyle(ke,C.parent?C.parent.type:void 0);const ye=C.subTree=kh(C);_(null,ye,S,ne,C,X,J),T.el=ye.el}if(de&&Yt(de,X),!he&&(L=K&&K.onVnodeMounted)){const ye=T;Yt(()=>kn(L,le,ye),X)}(T.shapeFlag&256||le&&yr(le.vnode)&&le.vnode.shapeFlag&256)&&C.a&&Yt(C.a,X),C.isMounted=!0,T=S=ne=null}};C.scope.on();const Q=C.effect=new If(re);C.scope.off();const E=C.update=Q.run.bind(Q),M=C.job=Q.runIfDirty.bind(Q);M.i=C,M.id=C.uid,Q.scheduler=()=>Hc(M),zi(C,!0),E()},se=(C,T,S)=>{T.component=C;const ne=C.vnode.props;C.vnode=T,C.next=null,n0(C,T.props,ne,S),o0(C,T.children,S),Kn(),Jf(C),$n()},G=(C,T,S,ne,X,J,te,re,Q=!1)=>{const E=C&&C.children,M=C?C.shapeFlag:0,L=T.children,{patchFlag:B,shapeFlag:K}=T;if(B>0){if(B&128){Me(E,L,S,ne,X,J,te,re,Q);return}else if(B&256){ve(E,L,S,ne,X,J,te,re,Q);return}}K&8?(M&16&&Se(E,X,J),L!==E&&h(S,L)):M&16?K&16?Me(E,L,S,ne,X,J,te,re,Q):Se(E,X,J,!0):(M&8&&h(S,""),K&16&&D(L,S,ne,X,J,te,re,Q))},ve=(C,T,S,ne,X,J,te,re,Q)=>{C=C||Qi,T=T||Qi;const E=C.length,M=T.length,L=Math.min(E,M);let B;for(B=0;B<L;B++){const K=T[B]=Q?hi(T[B]):Vn(T[B]);_(C[B],K,S,null,X,J,te,re,Q)}E>M?Se(C,X,J,!0,!1,L):D(T,S,ne,X,J,te,re,Q,L)},Me=(C,T,S,ne,X,J,te,re,Q)=>{let E=0;const M=T.length;let L=C.length-1,B=M-1;for(;E<=L&&E<=B;){const K=C[E],q=T[E]=Q?hi(T[E]):Vn(T[E]);if(nr(K,q))_(K,q,S,null,X,J,te,re,Q);else break;E++}for(;E<=L&&E<=B;){const K=C[L],q=T[B]=Q?hi(T[B]):Vn(T[B]);if(nr(K,q))_(K,q,S,null,X,J,te,re,Q);else break;L--,B--}if(E>L){if(E<=B){const K=B+1,q=K<M?T[K].el:ne;for(;E<=B;)_(null,T[E]=Q?hi(T[E]):Vn(T[E]),S,q,X,J,te,re,Q),E++}}else if(E>B)for(;E<=L;)We(C[E],X,J,!0),E++;else{const K=E,q=E,de=new Map;for(E=q;E<=B;E++){const ge=T[E]=Q?hi(T[E]):Vn(T[E]);ge.key!=null&&de.set(ge.key,E)}let le,fe=0;const ke=B-q+1;let he=!1,ye=0;const Ne=new Array(ke);for(E=0;E<ke;E++)Ne[E]=0;for(E=K;E<=L;E++){const ge=C[E];if(fe>=ke){We(ge,X,J,!0);continue}let Xe;if(ge.key!=null)Xe=de.get(ge.key);else for(le=q;le<=B;le++)if(Ne[le-q]===0&&nr(ge,T[le])){Xe=le;break}Xe===void 0?We(ge,X,J,!0):(Ne[Xe-q]=E+1,Xe>=ye?ye=Xe:he=!0,_(ge,T[Xe],S,null,X,J,te,re,Q),fe++)}const He=he?h0(Ne):Qi;for(le=He.length-1,E=ke-1;E>=0;E--){const ge=q+E,Xe=T[ge],Ye=T[ge+1],at=ge+1<M?Ye.el||Sr(Ye):ne;Ne[E]===0?_(null,Xe,S,at,X,J,te,re,Q):he&&(le<0||E!==He[le]?we(Xe,S,at,2):le--)}}},we=(C,T,S,ne,X=null)=>{const{el:J,type:te,transition:re,children:Q,shapeFlag:E}=C;if(E&6){we(C.component.subTree,T,S,ne);return}if(E&128){C.suspense.move(T,S,ne);return}if(E&64){te.move(C,T,S,I);return}if(te===xt){i(J,T,S);for(let L=0;L<Q.length;L++)we(Q[L],T,S,ne);i(C.anchor,T,S);return}if(te===Da){v(C,T,S);return}if(ne!==2&&E&1&&re)if(ne===0)re.persisted&&!J[Pa]?i(J,T,S):(re.beforeEnter(J),i(J,T,S),Yt(()=>re.enter(J),X));else{const{leave:L,delayLeave:B,afterLeave:K}=re,q=()=>{C.ctx.isUnmounted?s(J):i(J,T,S)},de=()=>{const le=J._isLeaving||!!J[Pa];J._isLeaving&&J[Pa](!0),re.persisted&&!le?q():L(J,()=>{q(),K&&K()})};B?B(J,q,de):de()}else i(J,T,S)},We=(C,T,S,ne=!1,X=!1)=>{const{type:J,props:te,ref:re,children:Q,dynamicChildren:E,shapeFlag:M,patchFlag:L,dirs:B,cacheIndex:K,memo:q}=C;if((L===-2||E&&E.hasOnce)&&(X=!1),re!=null&&(Kn(),xr(re,null,S,C,!0),$n()),K!=null&&(!C.ctx||C.ctx===T)&&(T.renderCache[K]=void 0),M&256&&T.ctx.deactivate(C))return;const de=M&1&&B,le=!yr(C);let fe;if(le&&(fe=te&&te.onVnodeBeforeUnmount)&&kn(fe,T,C),M&6)ue(C.component,S,ne);else{if(M&128){C.suspense.unmount(S,ne);return}de&&Bi(C,null,T,"beforeUnmount"),M&64?C.type.remove(C,T,S,I,ne):E&&!E.hasOnce&&(J!==xt||L>0&&L&64)?Se(E,T,S,!1,!0):(J===xt&&L&384||!X&&M&16)&&Se(Q,T,S),ne&&Ze(C)}const ke=q!=null&&K==null;(le&&(fe=te&&te.onVnodeUnmounted)||de||ke)&&Yt(()=>{fe&&kn(fe,T,C),de&&Bi(C,null,T,"unmounted"),ke&&(C.el=null)},S)},Ze=C=>{const{type:T,el:S,anchor:ne,transition:X}=C,J=T===xt;if(J&&!X){ie(S,ne);return}if(T===Da){b(C),X&&!X.persisted&&X.afterLeave&&X.afterLeave();return}const te=J?Ll(C):C,re=()=>{J?f(S)&&ie(S,ne):s(S),X&&!X.persisted&&X.afterLeave&&X.afterLeave()};if(te&&te.shapeFlag&1&&X&&!X.persisted){const{leave:Q,delayLeave:E}=X,M=te.el,L=()=>Q(M,re);E?E(M,re,L):L()}else re()},ie=(C,T)=>{let S;for(;C!==T;)S=u(C),s(C),C=S;s(T)},ue=(C,T,S)=>{const{bum:ne,scope:X,job:J,subTree:te,um:re,m:Q,a:E}=C;Hh(Q),Hh(E),ne&&Po(ne),X.stop(),J?(J.flags|=8,We(te,C,T,S)):te&&(te.transition=C.vnode.transition,We(te,C,T,S)),re&&Yt(re,T);const M=()=>{C.isUnmounted=!0};M.flags=16,Yt(M,T)},Se=(C,T,S,ne=!1,X=!1,J=0)=>{for(let te=J;te<C.length;te++)We(C[te],T,S,ne,X)},xe=C=>{if(C.shapeFlag&6)return xe(C.component.subTree);if(C.shapeFlag&128)return C.suspense.next();const T=u(C.anchor||C.el),S=T&&T[Am];return S?u(S):T},me=(C,T,S)=>{const ne=C&&T._vnode?void 0:C&&C.component?C.component.uid:_0();ym(()=>{C==null?T._vnode&&We(T._vnode,null,null,!0):_(T._vnode||null,C,T,null,null,null,S),T._vnode=C},ne)},I={p:_,um:We,m:we,r:Ze,mt:$,mc:D,pc:G,pbc:y,n:xe,o:n};return{render:me,hydrate:void 0,createApp:qm(me)}}function Ia({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function zi({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function c0(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Sd(n,e,t=!1){const i=n.children,s=e.children;if(Be(i)&&Be(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=hi(s[r]),a.el=o.el),!t&&a.patchFlag!==-2&&Sd(o,a)),a.type===ua&&(a.patchFlag===-1&&(a=s[r]=hi(a)),a.el=o.el),a.type===Fn&&!a.el&&(a.el=o.el)}}function h0(n){const e=n.slice(),t=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,n[t[a]]<c?r=a+1:o=a;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}function bd(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:bd(e)}function Hh(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function Sr(n){if(n.placeholder)return n.placeholder;const e=n.component;if(e)return Sr(e.subTree);const t=n.suspense;return t&&t.activeBranch?Sr(t.activeBranch):null}const Ed=n=>n.__isSuspense,u0=Symbol("_deferredEnter");function f0(n,e){e&&e.pendingBranch?Be(n)?e.effects.push(...n):e.effects.push(n):xm(n)}const xt=Symbol.for("v-fgt"),ua=Symbol.for("v-txt"),Fn=Symbol.for("v-cmt"),Da=Symbol.for("v-stc"),ss=[];let fn=null;function Oe(n=!1){ss.push(fn=n?null:[])}function wd(){ss.pop(),fn=ss[ss.length-1]||null}let Dr=1;function Vh(n,e=!1){Dr+=n,n<0&&fn&&e&&(fn.hasOnce=!0)}function Ad(n){return n.dynamicChildren=Dr>0?fn||Qi:null,wd(),Dr>0&&fn&&fn.push(n),n}function Fe(n,e,t,i,s,r){return Ad(H(n,e,t,i,s,r,!0))}function d0(n,e,t,i,s){return Ad(qn(n,e,t,i,s,!0))}function Yc(n){return n?n.__v_isVNode===!0:!1}function nr(n,e){return n.type===e.type&&n.key===e.key}const Td=({key:n})=>n??null,Io=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Et(n)||Gt(n)||qe(n)?{i:yn,r:n,k:e,f:!!t}:n:null);function H(n,e=null,t=null,i=0,s=null,r=n===xt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Td(e),ref:e&&Io(e),scopeId:ed,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:yn};return a?(Xo(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=Et(t)?8:16),Dr>0&&!o&&fn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&fn.push(l),l}const qn=p0;function p0(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===Bm)&&(n=Fn),Yc(n)){const a=Vs(n,e,!0);return t&&Xo(a,t),Dr>0&&!r&&fn&&(a.shapeFlag&6?fn[fn.indexOf(n)]=a:fn.push(a)),a.patchFlag=-2,a}if(w0(n)&&(n=n.__vccOpts),e){e=m0(e);let{class:a,style:l}=e;a&&!Et(a)&&(e.class=Bn(a)),ht(l)&&(Bc(l)&&!Be(l)&&(l=Ct({},l)),e.style=Ti(l))}const o=Et(n)?1:Ed(n)?128:ca(n)?64:ht(n)?4:qe(n)?2:0;return H(n,e,t,i,s,o,r,!0)}function m0(n){return n?Bc(n)?Ct({},n):gd(n)?Ct({},n[Ld]||n):n:null}function Vs(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=e?g0(s||{},e):s,h={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Td(c),ref:e&&e.ref?t&&r?Be(r)?r.concat(Io(e)):[r,Io(e)]:Io(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==xt?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Vs(n.ssContent),ssFallback:n.ssFallback&&Vs(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce,cacheIndex:n.cacheIndex};return l&&i&&_r(h,l.clone(h)),h}function tt(n=" ",e=0){return qn(ua,null,n,e)}function mt(n="",e=!1){return e?(Oe(),d0(Fn,null,n)):qn(Fn,null,n)}function Vn(n){return n==null||typeof n=="boolean"?qn(Fn):Be(n)?qn(xt,null,n.slice()):Yc(n)?hi(n):qn(ua,null,String(n))}function hi(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Vs(n)}function Xo(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Be(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),Xo(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!gd(e)?e._ctx=yn:s===3&&yn&&(yn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else if(qe(e)){if(i&65){Xo(n,{default:e});return}e={default:e,_ctx:yn},t=32}else e=String(e),i&64?(t=16,e=[tt(e)]):t=8;n.children=e,n.shapeFlag|=t}function g0(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Bn([e.class,i.class]));else if(s==="style")e.style=Ti([e.style,i.style]);else if(ia(s)){const r=e[s],o=i[s];o&&r!==o&&!(Be(r)&&r.includes(o))?e[s]=r?[].concat(r,o):o:o==null&&r==null&&!sa(s)&&(e[s]=o)}else s!==""&&(e[s]=i[s])}return e}function kn(n,e,t,i=null){On(n,e,7,[t,i])}const v0=hd();let Rd=0;function _0(){return Rd}function x0(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||v0,r={uid:Rd++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Lf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:_d(i,s),emitsOptions:ud(i,s),emit:null,emitted:null,propsDefaults:ut,inheritAttrs:i.inheritAttrs,ctx:ut,data:ut,props:ut,attrs:ut,slots:ut,refs:ut,setupState:ut,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Km.bind(null,r),n.ce&&n.ce(r),r}let Kt=null;const y0=()=>Kt||yn;let Yo,Nr;{const n=oa(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};Yo=e("__VUE_INSTANCE_SETTERS__",t=>Kt=t),Nr=e("__VUE_SSR_SETTERS__",t=>Ur=t)}const Wr=n=>{const e=Kt;return Yo(n),n.scope.on(),()=>{n.scope.off(),Yo(e)}},Gh=()=>{Kt&&Kt.scope.off(),Yo(null)};function Cd(n){return n.vnode.shapeFlag&4}let Ur=!1;function M0(n,e=!1,t=!1){e&&Nr(e);const{props:i,children:s}=n.vnode,r=Cd(n);t0(n,i,r,e),r0(n,s,t||e);const o=r?S0(n,e):void 0;return e&&Nr(!1),o}function S0(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,zm);const{setup:i}=t;if(i){Kn();const s=n.setupContext=i.length>1?E0(n):null,r=Wr(n),o=Gr(i,n,0,[n.props,s]),a=bf(o);if($n(),r(),(a||n.sp)&&!yr(n)&&rd(n),a){if(o.then(Gh,Gh),e)return o.then(l=>{Nr(!0);try{Wh(n,l,e)}finally{Nr(!1)}}).catch(l=>{la(l,n,0,void 0,!0),n.ssrRender=(c,h)=>h("<!---->")});n.asyncDep=o}else Wh(n,o)}else Pd(n)}function Wh(n,e,t){qe(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:ht(e)&&(n.setupState=jf(e)),Pd(n)}function Pd(n,e,t){const i=n.type;n.render||(n.render=i.render||Yn);{const s=Wr(n);Kn();try{Hm(n)}finally{$n(),s()}}}const Ld=Symbol(),b0={get(n,e){return zt(n,"get",""),e===Ld?n:n[e]}};function E0(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,b0),slots:n.slots,emit:n.emit,expose:e}}function fa(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(jf(qf(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Mr)return Mr[t](n)},has(e,t){return t in e||t in Mr}})):n.proxy}function w0(n){return qe(n)&&"__vccOpts"in n}const cn=(n,e)=>pm(n,e,Ur),A0="3.5.45";/**
* @vue/runtime-dom v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ol;const Xh=typeof window<"u"&&window.trustedTypes;if(Xh)try{Ol=Xh.createPolicy("vue",{createHTML:n=>n})}catch{}const Id=Ol?n=>Ol.createHTML(n):n=>n,T0="http://www.w3.org/2000/svg",R0="http://www.w3.org/1998/Math/MathML",ci=typeof document<"u"?document:null,Yh=ci&&ci.createElement("template"),C0={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?ci.createElementNS(T0,n):e==="mathml"?ci.createElementNS(R0,n):t?ci.createElement(n,{is:t}):ci.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>ci.createTextNode(n),createComment:n=>ci.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>ci.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{Yh.innerHTML=Id(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Yh.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},P0=Symbol("_vtc");function L0(n,e,t){const i=n[P0];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const qo=Symbol("_vod"),Dd=Symbol("_vsh"),I0={name:"show",beforeMount(n,{value:e},{transition:t}){n[qo]=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):ir(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:i}){!e!=!t&&(i?e?(i.beforeEnter(n),ir(n,!0),i.enter(n)):i.leave(n,()=>{ir(n,!1)}):ir(n,e))},beforeUnmount(n,{value:e}){ir(n,e)}};function ir(n,e){n.style.display=e?n[qo]:"none",n[Dd]=!e}const D0=Symbol(""),N0=/(?:^|;)\s*display\s*:/;function U0(n,e,t){const i=n.style,s=Et(t);let r=!1;if(t&&!s){if(e)if(Et(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&dr(i,a,"")}else for(const o in e)t[o]==null&&dr(i,o,"");for(const o in t){o==="display"&&(r=!0);const a=t[o];a!=null?F0(n,o,!Et(e)&&e?e[o]:void 0,a)||dr(i,o,a):dr(i,o,"")}}else if(s){if(e!==t){const o=i[D0];o&&(t+=";"+o),i.cssText=t,r=N0.test(t)}}else e&&n.removeAttribute("style");qo in n&&((!s||e!==t)&&(n[qo]=r?i.display:""),n[Dd]&&(i.display="none"))}const eo=/\s*!important$/;function dr(n,e,t){if(Be(t))t.forEach(i=>dr(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))eo.test(t)?n.setProperty(e,t.replace(eo,""),"important"):n.setProperty(e,t);else{const i=O0(n,e);eo.test(t)?n.setProperty(hs(i),t.replace(eo,""),"important"):n[i]=t}}const qh=["Webkit","Moz","ms"],Na={};function O0(n,e){const t=Na[e];if(t)return t;let i=Dn(e);if(i!=="filter"&&i in n)return Na[e]=i;i=Af(i);for(let s=0;s<qh.length;s++){const r=qh[s]+i;if(r in n)return Na[e]=r}return e}function F0(n,e,t,i){return n.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&Et(i)&&t===i}const jh="http://www.w3.org/1999/xlink";function Kh(n,e,t,i,s,r=Hp(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(jh,e.slice(6,e.length)):n.setAttributeNS(jh,e,t):t==null||r&&!Rf(t)?n.removeAttribute(e):n.setAttribute(e,r?"":jn(t)?String(t):t)}function $h(n,e,t,i,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Id(t):t);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=Rf(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(s||e)}function Ki(n,e,t,i){n.addEventListener(e,t,i)}function k0(n,e,t,i){n.removeEventListener(e,t,i)}const Jh=Symbol("_vei");function B0(n,e,t,i,s=null){const r=n[Jh]||(n[Jh]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=V0(e);if(i){const c=r[e]=X0(i,s);Ki(n,a,c,l)}else o&&(k0(n,a,o,l),r[e]=void 0)}}const z0=/(Once|Passive|Capture)$/,H0=/^on:?(?:Once|Passive|Capture)$/;function V0(n){let e,t;for(;(t=n.match(z0))&&!H0.test(n);)e||(e={}),n=n.slice(0,n.length-t[1].length),e[t[1].toLowerCase()]=!0;return[n[2]===":"?n.slice(3):hs(n.slice(2)),e]}let Ua=0;const G0=Promise.resolve(),W0=()=>Ua||(G0.then(()=>Ua=0),Ua=Date.now());function X0(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;const s=t.value;if(Be(s)){const r=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{r.call(i),i._stopped=!0};const o=s.slice(),a=[i];for(let l=0;l<o.length&&!i._stopped;l++){const c=o[l];c&&On(c,e,5,a)}}else On(s,e,5,[i])};return t.value=n,t.attached=W0(),t}const Zh=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Y0=(n,e,t,i,s,r)=>{const o=s==="svg";e==="class"?L0(n,i,o):e==="style"?U0(n,t,i):ia(e)?sa(e)||B0(n,e,t,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):q0(n,e,i,o))?($h(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Kh(n,e,i,o,r,e!=="value")):n._isVueCE&&(j0(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!Et(i)))?$h(n,Dn(e),i,r,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Kh(n,e,i,o))};function q0(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Zh(e)&&qe(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Zh(e)&&Et(t)?!1:e in n}function j0(n,e){const t=n._def.props;if(!t)return!1;const i=Dn(e);return Array.isArray(t)?t.some(s=>Dn(s)===i):Object.keys(t).some(s=>Dn(s)===i)}const jo=n=>{const e=n.props["onUpdate:modelValue"]||!1;return Be(e)?t=>Po(e,t):e};function K0(n){n.target.composing=!0}function Qh(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const es=Symbol("_assign"),to=Symbol("_initialValue");function Oa(n,e,t){return e&&(n=n.trim()),t&&(n=Vr(n)),n}const $0={created(n,{modifiers:{lazy:e,trim:t,number:i}},s){n.parentNode&&(n.type==="text"?n[to]=n.defaultValue.replace(/[\r\n]/g,""):n.type==="textarea"&&(n[to]=n.defaultValue.replace(/\r\n?/g,`
`))),n[es]=jo(s);const r=i||s.props&&s.props.type==="number";Ki(n,e?"change":"input",o=>{o.target.composing||n[es](Oa(n.value,t,r))}),(t||r)&&Ki(n,"change",()=>{n.value=Oa(n.value,t,r)}),e||(Ki(n,"compositionstart",K0),Ki(n,"compositionend",Qh),Ki(n,"change",Qh))},mounted(n,{value:e,modifiers:{trim:t,number:i}}){const s=e??"",r=n[to];delete n[to],r!==void 0&&(n.type==="text"||n.type==="textarea")&&n.value!==r?n[es](Oa(n.value,t,i)):n.value=s},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:s,number:r}},o){if(n[es]=jo(o),n.composing)return;const a=(r||n.type==="number")&&!/^0\d/.test(n.value)?Vr(n.value):n.value,l=e??"";if(a===l)return;const c=n.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===n&&n.type!=="range"&&(i&&e===t||s&&n.value.trim()===l)||(n.value=l)}},no={deep:!0,created(n,{value:e,modifiers:{number:t}},i){n._modelValue=e,Ki(n,"change",()=>{const s=Array.prototype.filter.call(n.options,l=>l.selected).map(l=>t?Vr(Ko(l)):Ko(l)),r=n.multiple,o=r?rs(n._modelValue)?new Set(s):s:s[0],a=n._pendingValue=[r,r?Be(o)?s.slice():s:o];try{n[es](o)}finally{zc(()=>{n._pendingValue===a&&(n._pendingValue=void 0)})}}),n[es]=jo(i)},mounted(n,{value:e,modifiers:{number:t}}){eu(n,e,t)},beforeUpdate(n,{value:e},t){n._modelValue=e,n[es]=jo(t)},updated(n,{value:e,modifiers:{number:t}}){const i=n._pendingValue;n._pendingValue=void 0,(!i||i[0]!==n.multiple||!J0(e,i[1],i[0]))&&eu(n,e,t)}};function J0(n,e,t){if(!t||Be(n))return Di(n,e);if(rs(n)){if(n.size!==e.length)return!1;for(const i of e)if(!n.has(i))return!1;return!0}return!1}function eu(n,e,t=!1){const i=n.multiple,s=Be(e);if(!(i&&!s&&!rs(e))){for(let r=0,o=n.options.length;r<o;r++){const a=n.options[r],l=Ko(a);if(i)if(s){const c=typeof l;c==="string"||c==="number"?a.selected=e.some(h=>String(h)===String(l)):a.selected=Wp(e,l)>-1}else a.selected=e.has(l)||t&&typeof l=="string"&&e.has(Vr(l));else if(Di(Ko(a),e)){n.selectedIndex!==r&&(n.selectedIndex=r);return}}!i&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function Ko(n){return"_value"in n?n._value:n.value}const Z0=Ct({patchProp:Y0},C0);let tu;function Q0(){return tu||(tu=a0(Z0))}const eg=((...n)=>{const e=Q0().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=ng(i);if(!s)return;const r=e._component;!qe(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=t(s,!1,tg(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e});function tg(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function ng(n){return Et(n)?document.querySelector(n):n}/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const ig=Symbol();var nu;(function(n){n.direct="direct",n.patchObject="patch object",n.patchFunction="patch function"})(nu||(nu={}));function sg(){const n=Xp(!0),e=n.run(()=>Rt({}));let t=[],i=[];const s=qf({install(r){s._a=r,r.provide(ig,s),r.config.globalProperties.$pinia=s,i.forEach(o=>t.push(o)),i=[]},use(r){return this._a?t.push(r):i.push(r),this},_p:t,_a:null,_e:n,_s:new Map,state:e});return s}const rg="modulepreload",og=function(n){return"/game/royale/"+n},iu={},ag=function(e,t,i){let s=Promise.resolve();if(t&&t.length>0){let o=function(c){return Promise.all(c.map(h=>Promise.resolve(h).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=o(t.map(c=>{if(c=og(c),c in iu)return;iu[c]=!0;const h=c.endsWith(".css"),f=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${f}`))return;const u=document.createElement("link");if(u.rel=h?"stylesheet":rg,h||(u.as="script"),u.crossOrigin="",u.href=c,l&&u.setAttribute("nonce",l),document.head.appendChild(u),h)return new Promise((d,g)=>{u.addEventListener("load",d),u.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return e().catch(r)})},lg=["hoarder","bomber","charger","coward"],cg={hoarder:"LOOT GOBLIN",bomber:"BAD DELIVERY",charger:"NO BRAKES",coward:"ABSOLUTELY NOT"},Nd={cart:"CART CHARGE",recoil:"RECOIL BOOTS",skates:"SLIPPERY SKATES"},su=["cart","recoil","skates"],hg={cart:300,recoil:360,skates:360},sr={spear:80,shank:45,axe:90,shotgun:70,smg:60,laser:40,flamethrower:50,body:0},da={gender:0,skin:2,hair:2,hairColor:0,clothes:0,color:0},Xr=["#f4ceae","#dca47a","#b87953","#925739","#603c2f","#3b2b26"],Gs=["#e9bb22","#d43163","#2b9c96","#4d63cb","#d46a27","#b1aca0"],pa=["#242028","#653b23","#d7ad52","#dd457b"],xn=[{id:"gas",name:"LAST STOP GAS",tag:"PREMIUM FUEL. SUBSTANDARD DECISIONS."},{id:"rest",name:"REST IN PIECES",tag:"TAKE A BREAK. LEAVE A PART."},{id:"motel",name:"MOTEL NO-TELL",tag:"VACANCIES CREATED DAILY."},{id:"bathroom",name:"STALL OF DUTY",tag:"TRUCK STOP BATHROOM. HOLD YOUR BREATH."},{id:"laundry",name:"SPIN CYCLE SLAUGHTER",tag:"YOUR LAST LOAD."},{id:"market",name:"COLD CUTS",tag:"EVERYTHING MUST GO. INCLUDING YOU."},{id:"impound",name:"FINAL NOTICE",tag:"PAYMENT DUE IN BODY PARTS."}],un=["torso","head","armL","armR","forearmL","forearmR","handL","handR","thighL","thighR","shinL","shinR","footL","footR"],os={torso:{x:0,y:1.65,w:.85,h:.9,hp:120,parent:null},head:{x:0,y:2.45,w:.6,h:.65,hp:34,parent:"torso"},armL:{x:-.57,y:1.85,w:.28,h:.5,hp:30,parent:"torso"},armR:{x:.57,y:1.85,w:.28,h:.5,hp:30,parent:"torso"},forearmL:{x:-.59,y:1.38,w:.25,h:.48,hp:24,parent:"armL"},forearmR:{x:.59,y:1.38,w:.25,h:.48,hp:24,parent:"armR"},handL:{x:-.6,y:1.08,w:.27,h:.25,hp:15,parent:"forearmL"},handR:{x:.6,y:1.08,w:.27,h:.25,hp:15,parent:"forearmR"},thighL:{x:-.25,y:.95,w:.34,h:.55,hp:36,parent:"torso"},thighR:{x:.25,y:.95,w:.34,h:.55,hp:36,parent:"torso"},shinL:{x:-.25,y:.48,w:.29,h:.5,hp:26,parent:"thighL"},shinR:{x:.25,y:.48,w:.29,h:.5,hp:26,parent:"thighR"},footL:{x:-.31,y:.12,w:.45,h:.24,hp:17,parent:"shinL"},footR:{x:.31,y:.12,w:.45,h:.24,hp:17,parent:"shinR"}},$i=(n=da)=>({move:0,aimX:1,aimY:0,attack:!1,jump:0,grab:0,pickup:0,cycle:0,reload:0,ready:0,rematch:0,venue:0,venueChange:0,look:{...n}});function qc(n){const e=n&&typeof n=="object"?n:{},t={gender:3,skin:Xr.length,hair:5,hairColor:pa.length,clothes:3,color:Gs.length},i={...da};for(const s of Object.keys(t)){const r=Number(e[s]);Number.isInteger(r)&&r>=0&&r<t[s]&&(i[s]=r)}return i}function ug(n){const e=n&&typeof n=="object"?n:{},t=$i(qc(e.look));for(const i of["jump","grab","pickup","cycle","reload","ready","rematch","venueChange"]){const s=Number(e[i]);t[i]=Number.isSafeInteger(s)&&s>=0?Math.min(s,1e7):0}return t.move=Math.max(-1,Math.min(1,Number(e.move)||0)),t.aimX=Math.max(-1,Math.min(1,Number(e.aimX)||0)),t.aimY=Math.max(-1,Math.min(1,Number(e.aimY)||0)),t.attack=e.attack===!0,t.venue=Math.max(0,Math.min(xn.length-1,Math.floor(Number(e.venue)||0))),t}function Os(n){return+(n.parts.thighL>0&&n.parts.shinL>0)+ +(n.parts.thighR>0&&n.parts.shinR>0)}function ru(n,e){const t=os[e];return Os(n)>0?{x:t.x,y:t.y,w:t.w,h:t.h,rotation:0,length:t.h}:e.startsWith("thigh")?{x:t.x*1.5,y:.22,w:t.h,h:t.w,rotation:e.endsWith("L")?Math.PI/2:-Math.PI/2,length:t.h}:{x:t.x,y:Math.max(t.h/2+.04,t.y-1.16),w:t.w,h:t.h,rotation:0,length:t.h}}function vn(n,e){const t=ru(n,e),i=pg(n);if(!i||n.weapons[n.slot]==="body"&&!n.carrying||!n.parts.armL&&!n.parts.armR)return t;const s=i.endsWith("L")?"L":"R",r=Ls(n);if(e===i)return{...t,x:r.x,y:r.y,rotation:r.angle-Math.PI/2};if(e!==`arm${s}`&&e!==`forearm${s}`)return t;const o=ru(n,`arm${s}`),a=o.x,l=o.y+.25,c=(a+r.x)/2-r.dy*.13,h=(l+r.y)/2+r.dx*.13,f=e.startsWith("forearm")?{x:c,y:h}:{x:a,y:l},u=e.startsWith("forearm")?r:{x:c,y:h},d=u.x-f.x,g=u.y-f.y,_=Math.hypot(d,g),p=Math.atan2(g,d)-Math.PI/2,m=os[e].w;return{x:(f.x+u.x)/2,y:(f.y+u.y)/2,w:Math.abs(Math.cos(p))*m+Math.abs(Math.sin(p))*_,h:Math.abs(Math.sin(p))*m+Math.abs(Math.cos(p))*_,rotation:p,length:_}}const fg=1.1,dg=3.3;function ou(n){const e=n.weapons[n.slot]==="spear";if(!e&&n.weapons[n.slot]!=="shank"||n.attacking<=0)return 0;const t=e?14:10,i=(t-n.attacking)/t;return(e?.55:.23)*Math.max(0,i<.25?i/.25:(1-i)/.75)}function hn(n){return Os(n)===0?.39:1.55}function Rn(n){return Math.max(...un.filter(e=>n.parts[e]>0).map(e=>{const t=vn(n,e);return t.y+t.h/2}),.5)}function Ls(n){const e=Math.hypot(n.aimX,n.aimY),t=e>.01?n.aimX/e:n.face,i=e>.01?n.aimY/e:0,s=!n.carrying&&n.weapons[n.slot]==="spear"?.7+ou(n):!n.carrying&&n.weapons[n.slot]==="shank"?.42+ou(n):.85;return{x:t*s,y:hn(n)+i*s,angle:Math.atan2(i,t),dx:t,dy:i}}function pg(n){const e=n.aimX<0?"handL":"handR",t=e==="handL"?"handR":"handL";return n.parts[e]>0?e:n.parts[t]>0?t:null}function Fa(n){return[["armL","forearmL","handL"],["armR","forearmR","handR"],["thighL","shinL","footL"],["thighR","shinR","footR"]].filter(e=>e.some(t=>n.parts[t]<=0)).length}function mg(n,e){const t=[];function i(s,r,o,a,l,c,h,f=[],u=0){const d={id:e(),kind:s,x:r,y:o,w:a,h:l,material:c,hp:h,maxHp:h,fuel:c==="fuel"?1:c==="wood"||c==="fabric"?.5:0,burn:0,supports:f,falling:!1,vy:0,exploded:!1,solid:s!=="floor"&&s!=="glass"&&s!=="railing",color:u};return t.push(d),d.id}for(let s=-60;s<64;s+=8)i("floor",s,0,8,.45,"concrete",240);if(n==="gas"){for(const r of[-40,-28,-16])i("pump",r,1.7,1.8,3.4,"fuel",75);const s=[i("post",-46,3,.5,6,"metal",80),i("post",-10,3,.5,6,"metal",80)];for(let r=-43;r<-9;r+=6)i("roof",r,6.4,6,.7,"metal",100,s);for(const r of[-35,-19,27])i("can",r,.6,.7,1.2,"fuel",20);i("car",5,1.1,7,2.2,"fuel",120),i("car",45,1.1,6.5,2.2,"fuel",120),i("counter",23,1,6,2,"wood",70),i("fridge",33,1.8,2.8,3.6,"metal",85),i("glass",23,3.6,7,2.3,"glass",22),i("door",17,1.6,1.5,3.2,"wood",40),i("sign",-51,7.5,5,3,"metal",55,[i("pole",-51,3.6,.5,7.2,"metal",65)]);for(const r of[12,39,40])i("tire",r,.6,1.1,1.2,"fabric",25)}else if(n==="rest"){for(const r of[-42,-15,18])i("table",r,1,5.5,2,"wood",70),i("bench",r+5,.55,3,1.1,"wood",35);for(const r of[-30,8])i("vending",r,1.8,2.4,3.6,"metal",85);for(const r of[-50,-3,35])i("bin",r,.85,1.2,1.7,"metal",45);i("truck",44,1.7,10,3.4,"fuel",180),i("car",-4,1.1,6,2.2,"fuel",120);for(const r of[-49,27])i("sign",r,7,5,2.4,"metal",55,[i("pole",r,3.5,.45,7,"metal",60)]);i("barrier",-24,.6,4,1.2,"concrete",80),i("door",27,1.6,1.6,3.2,"wood",45);const s=[i("post",-5,2.5,.5,5,"metal",65),i("post",8,2.5,.5,5,"metal",65)];i("roof",1.5,5.2,14,.5,"metal",95,s)}else if(n==="bathroom"){for(const s of[-20,-14,-8,-2,4,10,16,22]){const r=i("stall",s,2.65,4.6,4.8,"metal",65);t.find(o=>o.id===r).solid=!1}for(const[s,r]of[-39,-30,33,42].entries()){const o=i("urinal",r,1.55,1.5,2.4,"concrete",45),a=t.find(l=>l.id===o);a.solid=!1,a.toxic=s===1||s===2}for(const s of[-46,49]){const r=i("sink",s,1.15,2.8,1.8,"concrete",55);t.find(o=>o.id===r).solid=!1}for(const s of[-25,28])i("bin",s,.8,1.2,1.6,"metal",35);i("vending",0,1.8,2.4,3.6,"metal",70)}else if(n==="laundry"||n==="market"||n==="impound"){for(const[s,r]of[-32,-21,-10,1,12,23,32].entries()){const o=i("entrance",r,2.5,2.5,4.5,"metal",55,[],s);t.find(a=>a.id===o).solid=!1}if(n==="laundry"){for(const s of[-45,-31,-17,11,25,39])i("washer",s,1.5,2.6,2.5,"metal",65),i("dryer",s+3,1.5,2.5,2.5,"fabric",55);for(const s of[-34,20]){const r=i("detergent",s,.55,.8,.65,"fabric",30);t.find(o=>o.id===r).solid=!1}for(const s of[-5,33])i("bench",s,.65,4,1.3,"metal",45);i("vending",-49,1.8,2.2,3.6,"metal",70)}else if(n==="market"){for(const s of[-44,-27,9,27])i("shelf",s,1.55,4.5,2.65,"metal",80);for(const s of[-35,34]){const r=i("freezer",s,2,2.4,3.5,"metal",70);t.find(o=>o.id===r).solid=!1}for(const s of[-18,18]){const r=i("pallet",s,.825,3,1.2,"wood",45);i("pallet",s,2.025,3,1.2,"wood",45,[r])}i("counter",-5,1,4,2,"metal",70),i("forklift",43,1.5,4,2.6,"metal",100)}else{for(const[s,r]of[-43,-25,-7,11,29].entries())i("car",r,1.25,5.5,2.05,"metal",100,[],s);i("truck",48,1.9,8,3.4,"metal",140);for(const s of[-35,-16,20,37])i("tire",s,.6,1.1,1.2,"fabric",25);i("barrier",-3,.825,3,1.2,"concrete",80),i("counter",-48,1,3,2,"wood",55)}}else{for(const r of[-45,-23,-1,21,43]){const o=i("post",r-4.5,2.5,.5,5,"wood",60);i("balcony",r,5,11,.6,"concrete",100,[o]),i("railing",r,5.9,10.5,1.2,"metal",30),i("door",r-2,1.7,1.5,3.4,"wood",40),i("glass",r+2,2.6,2.5,1.8,"glass",20),i("mattress",r+3,.65,3.5,1.3,"fabric",40),i("tv",r,.65,1.1,1.3,"glass",25),i("ac",r+3,7,2,1.2,"metal",35,[o]),i("door",r-2,6.8,1.5,3.4,"wood",40)}i("ice",49,1.3,2.8,2.6,"metal",70);const s=i("pole",-53,5,.5,10,"metal",65);i("sign",-53,10,6.5,3.5,"metal",70,[s])}return t}const au=14,gg=.1,lu={smg:5,shotgun:2.5,axe:10,laser:9,flamethrower:.4},ka=12,Ba=.5,vg=.5,_g=120,Ut=1/60,za=27,mn=[-57,57,-20,-5,13,20,-9,8],xg=18,yg=3,Mg=3,Sg=["YOU","GUEST","BAD CREDIT","ROOM SERVICE","UNLEADED","NO REFUNDS","LAST CALL","MILD CONCERN"];class Ud{constructor(e=1){ce(this,"state");this.state={version:1,thrown:[],boosts:[],frame:0,round:0,seed:77191,id:0,phase:"lobby",phaseFrame:0,venue:"gas",actors:[],props:[],shots:[],debris:[],blood:[],fires:[],pickups:[],events:[],winner:null,zoneLeft:-64,zoneRight:64,humans:Math.max(1,Math.min(2,e)),venueNonce:0,eventSeq:0},this.makeActors(),this.makeWorld()}next(){return++this.state.id}random(){let e=this.state.seed|0;return e^=e<<13,e^=e>>>17,e^=e<<5,this.state.seed=e>>>0,(e>>>0)/4294967296}makeActors(){this.state.actors=[];for(let e=0;e<8;e++){const t={...da,gender:e%3,skin:e%6,hair:e%5,color:e%6},i=$i(t);this.state.actors.push({id:e,name:e<this.state.humans?this.state.humans===1?"YOU":`PLAYER ${e+1}`:Sg[e],human:e<this.state.humans,pendingSpawn:e>=this.state.humans,personality:e>=this.state.humans?lg[(e-this.state.humans)%4]:void 0,look:t,x:mn[e],y:1,vx:0,vy:0,face:e%2?-1:1,hp:100,parts:Object.fromEntries(un.map(s=>[s,os[s].hp])),weapons:["shank"],durability:{...sr},slot:0,specialAmmo:{laser:0,flamethrower:0},ammo:0,magazines:{shotgun:6,smg:30},reserve:90,cooldown:0,reloading:0,grounded:!1,ready:!1,last:i,drift:0,driftAt:0,death:null,deathFrame:-1,bleedOutAt:null,bleedOwner:-1,aimX:e%2?-1:1,aimY:0,attacking:0,kills:0})}}openingSpawnProtected(e){const t=this.state.actors.filter(i=>!i.human&&i.hp>0);return this.state.actors.filter(i=>i.human&&i.hp>0).some(i=>{const s=[...t].sort((r,o)=>Math.abs(mn[r.id]-mn[i.id])-Math.abs(mn[o.id]-mn[i.id]))[0];return s!==void 0&&Math.abs(e-mn[s.id])<xg})}makeWorld(){this.state.thrown=[],this.state.boosts=[],delete this.state.chaosAt,delete this.state.nextMajorAt,delete this.state.major,delete this.state.nextSpawnAt,this.state.props=mg(this.state.venue,()=>this.next()),this.state.shots=[],this.state.debris=[],this.state.blood=[],this.state.fires=[],this.state.pickups=[];const e=this.state.props.filter(r=>r.kind==="entrance"),t=this.state.props.filter(r=>r.kind==="stall");this.state.actors.filter(r=>!r.human).forEach((r,o)=>{delete r.stallId,delete r.entryId,delete r.spawnAfter,delete r.entryWarningAt,e[o]&&(r.entryId=e[o].id,r.x=e[o].x,r.spawnAfter=600+o*480+Math.floor(this.random()*240)),t[o]&&(r.stallId=t[o].id,r.x=t[o].x)});for(const r of this.state.actors.filter(o=>o.human)){const o=mn[r.id]+(mn[r.id]<0?3:-3),a=this.next();for(let l=0;l<2;l++)this.state.props.push({id:l===0?a:this.next(),kind:"crate",trainingFor:r.id,x:o,y:.225+.55+l*1.1,w:1.5,h:1.1,hp:18,maxHp:18,material:"wood",fuel:.5,burn:0,supports:l===1?[a]:[],falling:!1,vy:0,exploded:!1,solid:!0,color:l})}const i=[-1,-.5,0,.5,1];let s=0;for(let r=0;r<9;r++){const o=-52+r*13,a=this.openingSpawnProtected(o)?i[s++%i.length]:o,l=["axe","shotgun","smg"][r%3];this.state.pickups.push({id:this.next(),x:a,y:1,weapon:l,hp:sr[l]})}for(const r of this.state.actors.filter(o=>o.human)){const o=mn[r.id]+(mn[r.id]<0?-1:1),a=this.random()<.9?"shotgun":"spear";this.state.pickups.push({id:this.next(),x:o,y:1,weapon:a,hp:sr[a],reservedFor:r.id,reservedUntil:600})}}releaseEnemies(){const e=this.state.actors.some(r=>r.pendingSpawn&&r.hp>0)&&this.state.chaosAt===void 0,t=this.state.actors.filter(r=>r.human&&r.hp>0),i=this.state.props.some(r=>r.kind==="entrance"),s=this.state.actors.filter(r=>!r.human&&r.hp>0&&!r.pendingSpawn).length<Mg;for(const r of this.state.actors.filter(o=>o.pendingSpawn&&o.hp>0).sort((o,a)=>+(a.entryWarningAt!==void 0)-+(o.entryWarningAt!==void 0))){const o=c=>Math.min(...t.map(h=>Math.abs(h.x-c)));if(i){if(!s||this.state.frame<(this.state.nextSpawnAt??0))break;const c=this.state.props.find(f=>f.id===r.entryId);if(!c)continue;const h=t.some(f=>Math.abs(f.x-c.x)<9&&Math.abs(f.y-.225)<3);if(r.entryWarningAt===void 0){if(!t.length||!h&&this.state.frame-(this.state.chaosAt??this.state.frame)<(r.spawnAfter??600))continue;r.entryWarningAt=this.state.frame,this.state.nextSpawnAt=this.state.frame+45,this.event("warning",c.x,2);break}if(this.state.frame-r.entryWarningAt<45)break;r.x=c.x,c.openedAt=this.state.frame,this.state.nextSpawnAt=this.state.frame+300+Math.floor(this.random()*181)}const a=this.state.props.find(c=>c.id===r.stallId);if(this.state.venue==="bathroom"){if(!a||!t.some(c=>Math.abs(c.x-a.x)<=yg&&Math.abs(c.y-.225)<2.5))continue;r.x=a.x,a.hp>0&&(a.openedAt=this.state.frame)}if(!i&&this.state.venue!=="bathroom"&&o(r.x)<34){const c=Array.from({length:121},(h,f)=>f-60);c.sort((h,f)=>o(f)-o(h)||Math.abs(h-mn[r.id])-Math.abs(f-mn[r.id])),r.x=c[0]}const l=this.floorAt(r.x,100,-100);if(r.y=l>-50?l:1,r.vx=r.vy=0,r.pendingSpawn=!1,i)break}if(e){this.state.chaosAt=this.state.frame,this.state.nextMajorAt=this.state.frame+1200;for(const r of t)for(let o=0;o<3;o++){const a=Math.max(-61,Math.min(61,r.x+(r.x<0?1:-1)*(5+o*6))),l=this.floorAt(a,100,-100);l>-50&&this.state.boosts.push({id:this.next(),x:a,y:l+.6,kind:su[o],hp:20,expires:this.state.frame+1800})}}}snapshot(){return JSON.parse(JSON.stringify(this.state))}restore(e){if(e.version!==1)throw new Error("Incompatible Royale state");this.state=JSON.parse(JSON.stringify(e))}event(e,t,i,s=-1,r={}){this.state.events.push({id:`${this.state.round}:${this.state.frame}:${++this.state.eventSeq}`,frame:this.state.frame,kind:e,x:t,y:i,actor:s,...r}),this.state.events.length>180&&this.state.events.shift()}startRound(){const e=this.state.actors.map(s=>({...s.look})),t=this.state.actors.map(s=>s.last),i=this.state.round+1;this.makeActors(),this.state.actors.forEach((s,r)=>{s.look=e[r],s.last=t[r],s.y=this.floorAt(s.x,100,-1)>-50?this.floorAt(s.x,100,-1):1}),this.makeWorld(),this.state.round=i,this.state.phase="match",this.state.phaseFrame=0,this.state.winner=null,this.state.zoneLeft=-64,this.state.zoneRight=64}lobby(e){for(const s of this.state.actors.filter(r=>r.human)){const r=e[s.id]??$i(s.look);JSON.stringify(s.look)!==JSON.stringify(r.look)&&(s.look={...r.look},s.ready=!1),r.ready!==s.last.ready&&(s.ready=!s.ready),s.last={...r}}const t=e[0];t&&t.venueChange!==this.state.venueNonce&&(this.state.venueNonce=t.venueChange,this.state.venue=xn[t.venue].id,this.makeWorld(),this.state.actors.forEach(s=>s.ready=!1));const i=this.state.actors.filter(s=>s.human).every(s=>s.ready);this.state.phase==="lobby"&&i?(this.state.phase="countdown",this.state.phaseFrame=0):this.state.phase==="countdown"&&!i&&(this.state.phase="lobby",this.state.phaseFrame=0),this.state.phase==="countdown"&&this.state.phaseFrame>=180&&this.startRound()}rematch(e){if(this.state.actors.filter(t=>t.human).every(t=>{var i;return(((i=e[t.id])==null?void 0:i.rematch)??0)>t.last.rematch})){this.state.venue=xn[(xn.findIndex(i=>i.id===this.state.venue)+1)%xn.length].id,this.state.phase="lobby",this.state.phaseFrame=0;const t=this.state.actors.map(i=>({...i.look}));this.makeActors(),this.state.actors.forEach((i,s)=>{i.look=t[s],i.human&&(i.last=e[i.id]),i.ready=!1}),this.makeWorld()}}weapon(e){return!e.parts.armL&&!e.parts.armR?"body":e.weapons[e.slot]??"shank"}handling(e){return(e.parts.handL>0?1:0)+(e.parts.handR>0?1:0)}movement(e){const t=Os(e),i=+(e.parts.footL>0)+ +(e.parts.footR>0);return Math.max(.24,(t===2?1:t===1?.65:.29)*(i===2?1:i===1?.85:.7))}detach(e,t,i=-1){const s=e.parts.head>0,r=Fa(e),o=Object.fromEntries(un.map(c=>[c,vn(e,c)])),a=c=>{if(e.parts[c]<=0)return;e.parts[c]=0;const h=o[c];this.state.debris.length<120&&this.state.debris.push({id:this.next(),x:e.x+h.x,y:e.y+h.y,vx:(this.random()-.5)*12,vy:3+this.random()*5,life:900,part:c,look:{...e.look},color:0,hp:14,w:h.w,h:h.h}),this.event("detach",e.x+h.x,e.y+h.y,e.id,{part:c,severed:c===t&&t!=="torso"});for(const f of un)os[f].parent===c&&a(f)};a(t);const l=Fa(e);if(l===1&&r!==1&&e.hp>0&&e.parts.head>0?(e.distressAt=this.state.frame,e.distressCount=0):(l!==1||e.hp<=0||e.parts.head<=0)&&(delete e.distressAt,delete e.distressCount),e.hp>0&&!e.pendingSpawn&&e.parts.torso>0){const c=Os(e)===0,h=t==="head"&&s&&e.parts.head<=0,f=c?360:h?600:null;f!==null&&(e.bleedOutAt===null||this.state.frame+f<e.bleedOutAt)&&(e.bleedOutAt=this.state.frame+f,e.bleedOwner=i,e.bleedCause=c?"bleedout":"head_bleedout",e.bleedRate=c?100/360*(e.human?Ba:1):e.hp/600)}if(!e.parts.armL&&!e.parts.armR){for(const c of e.weapons)c!=="shank"&&c!=="body"&&e.durability[c]>0&&this.state.pickups.push({id:this.next(),x:e.x,y:e.y+.5,weapon:c,hp:e.durability[c],charges:c==="laser"||c==="flamethrower"?e.specialAmmo[c]:void 0});e.weapons=["body"],e.slot=0}}incomingDamage(e,t,i){const s=this.state.actors[i];return t*(e.human&&s&&!s.human?vg:1)}damage(e,t,i,s,r=-1,o=!1){if(e.pendingSpawn||e.hp<=0||e.parts[t]<=0||i<=0)return;i=this.incomingDamage(e,i,r);const a=this.state.actors[r],l=this.state.frame;let c=1;const h=!o&&(a==null?void 0:a.human)&&a.hp>0&&a!==e;if(h){const m=a.hitStreak,x=m&&l-m.frame<=_g?m:void 0,v=((x==null?void 0:x.hitFrames)??0)+((x==null?void 0:x.frame)===l?0:1);c=1+Math.min(4,Math.floor((v-1)/3))*.25,a.hitStreak={frame:l,hitFrames:v},i*=c}const f=!["fire","fuel_fire","zone","toxic"].includes(s),u=e.human?Ba:1,d=Math.min(e.parts[t],i*(t==="torso"?(f?.45:1)*u:1));if(t==="torso"&&f){const m=e.id%2===0?"L":"R",x=m==="L"?"R":"L",b=[`thigh${m}`,`arm${m}`,`thigh${x}`,`arm${x}`,"head"].find(N=>e.parts[N]>0);if(b){const N=i*.8;e.parts[b]<=N?this.detach(e,b,r):e.parts[b]-=N}}e.parts[t]<=d?this.detach(e,t,r):e.parts[t]-=d;const g=t==="torso"?d:d*.08*u,_=Math.min(e.hp,g);e.hp-=_;const p=h?{owner:r,damage:_,multiplier:c}:void 0;this.event("hit",e.x+vn(e,t).x,e.y+vn(e,t).y,e.id,p?{part:t,hitCounter:p}:{part:t}),(e.hp<=0||e.parts.torso<=0)&&this.kill(e,s,r)}kill(e,t,i=-1){if(!e.death){if(e.carrying&&this.throwObject(e,!0),!e.human&&!e.pendingSpawn&&this.state.chaosAt!==void 0&&this.state.boosts.length<16){const s=this.floorAt(e.x,e.y+.5,-100);s>-50&&this.state.boosts.push({id:this.next(),x:e.x,y:s+.6,kind:su[e.id%3],hp:20,expires:this.state.frame+900})}e.hp=0,e.death=t,e.deathFrame=this.state.frame,(t==="bleedout"||t==="head_bleedout")&&this.bloodSplatter(e),this.event("death",e.x,e.y+1,e.id,{cause:t}),i>=0&&i!==e.id&&this.state.actors[i].kills++,this.detach(e,"torso")}}bloodSplatter(e){const t=this.floorAt(e.x,e.y+.3,-100);if(t<=-50)return;const i=this.state.props.find(s=>s.hp>0&&!s.falling&&Math.abs(s.y+s.h/2-t)<.001&&Math.abs(e.x-s.x)<s.w/2+.25);i&&(this.state.blood.push({id:this.next(),x:e.x,y:t+.018,surface:i.id}),this.state.blood.length>8&&this.state.blood.shift())}hitPart(e,t,i){if(e.pendingSpawn)return null;let s=null,r=1/0;for(const o of un){if(e.parts[o]<=0)continue;const a=vn(e,o),l=Math.abs(t-e.x-a.x),c=Math.abs(i-e.y-a.y);l<a.w/2+.14&&c<a.h/2+.14&&l+c<r&&(r=l+c,s=o)}return s}floorAt(e,t,i){let s=-100;for(const r of this.state.props){if(r.hp<=0||r.falling||!(r.kind==="floor"||r.kind==="crate"||r.kind==="roof"||r.kind==="balcony"||r.kind==="table"||r.kind==="car"||r.kind==="truck"||r.kind==="barrier"||r.kind==="shelf"||r.kind==="pallet"))continue;const o=r.y+r.h/2;Math.abs(e-r.x)<r.w/2+.25&&t>=o-.2&&i<=o&&o>s&&(s=o)}return s}damagePickup(e,t){e.hp-=t,e.hp<=0&&(this.event("break",e.x,e.y),this.state.debris.length<120&&this.state.debris.push({id:this.next(),x:e.x,y:e.y,vx:(this.random()-.5)*5,vy:3,life:450,part:null,look:null,color:4,hp:8,w:.4,h:.15}),this.state.pickups=this.state.pickups.filter(i=>i.id!==e.id))}damageBoost(e,t){e.hp-=t,e.hp<=0&&(this.event("break",e.x,e.y),this.state.boosts=this.state.boosts.filter(i=>i.id!==e.id))}damageWeapon(e,t,i=-1){if(e.pendingSpawn)return;if(t=this.incomingDamage(e,t,i),e.carrying){if(e.carrying.hp-=t,e.carrying.hp<=0){const r=e.carrying.kind;delete e.carrying,this.event("break",e.x,e.y+1,i),r==="can"&&this.state.fires.length<32&&this.state.fires.push({id:this.next(),x:e.x,y:e.y+.5,radius:1.5,until:this.state.frame+180,owner:i,cause:"fire"})}return}const s=this.weapon(e);s!=="body"&&(e.durability[s]=Math.max(0,e.durability[s]-t),e.durability[s]||(this.event("break",e.x,e.y+hn(e),e.id),e.weapons=e.weapons.filter(r=>r!==s),e.weapons.length||(e.weapons=["body"]),e.slot=0,e.reloading=0))}canPickup(e,t){return!e.pendingSpawn&&(t.expires===void 0||t.expires>this.state.frame)&&(t.reservedFor===void 0||t.reservedFor===e.id||this.state.phaseFrame>=(t.reservedUntil??0))}pickup(e){if(!e.pendingSpawn&&this.state.chaosAt!==void 0){const i=this.state.boosts.filter(s=>s.expires>this.state.frame&&Math.hypot(s.x-e.x,s.y-e.y-.5)<2.5).sort((s,r)=>Math.abs(s.x-e.x)-Math.abs(r.x-e.x))[0];if(i){e.boost={kind:i.kind,until:this.state.frame+hg[i.kind]},this.state.boosts=this.state.boosts.filter(s=>s.id!==i.id),this.event("pickup",e.x,e.y+1,e.id);return}}if(!e.parts.armL&&!e.parts.armR)return;const t=this.state.pickups.filter(i=>this.canPickup(e,i)&&Math.hypot(i.x-e.x,i.y-e.y-1)<3).sort((i,s)=>Math.abs(i.x-e.x)-Math.abs(s.x-e.x))[0];if(t){if(!e.weapons.includes(t.weapon))if(e.weapons.length<2)e.weapons.push(t.weapon);else{const i=e.weapons[1];e.weapons[1]=t.weapon,this.state.pickups.push({id:this.next(),x:e.x-1,y:e.y+.6,weapon:i,hp:e.durability[i],charges:i==="laser"||i==="flamethrower"?e.specialAmmo[i]:void 0})}(t.weapon==="laser"||t.weapon==="flamethrower")&&(e.specialAmmo[t.weapon]=t.charges??(t.weapon==="laser"?2:24)),e.durability[t.weapon]=t.hp,e.slot=Math.max(0,e.weapons.indexOf(t.weapon)),e.reloading=0,this.state.pickups=this.state.pickups.filter(i=>i.id!==t.id),e.ammo=this.clip(e),this.event("pickup",e.x,e.y+1,e.id)}}clip(e){const t=this.weapon(e);return t==="laser"||t==="flamethrower"?e.specialAmmo[t]:t==="shotgun"||t==="smg"?e.magazines[t]:0}reload(e){const t=this.weapon(e);if(e.reloading||e.reserve<=0||!(t==="smg"||t==="shotgun"))return;const i=t==="smg"?30:6;e.magazines[t]>=i||(this.event("reload",e.x,e.y+1,e.id),e.reloading=Math.round((t==="smg"?110:40)*(this.handling(e)<2?1.5:1)))}projectileImpact(e,t,i,s){if(e.hp<=0||e.pendingSpawn)return;const r=Math.hypot(t,i),o=lu[s]??0;if(r<.001||!Number.isFinite(r)||!o)return;const a=e.impactVelocity??{x:0,y:0};a.x+=t/r*o,a.y+=i/r*o;const l=Math.hypot(a.x,a.y);l>ka&&(a.x*=ka/l,a.y*=ka/l),e.impactVelocity=a,a.y>0&&(e.grounded=!1)}attack(e){if(e.pendingSpawn||e.cooldown>0)return;if(e.carrying){this.throwObject(e);return}const t=this.weapon(e),i=t==="shotgun"||t==="smg",s=Ls(e);if(t==="laser"||t==="flamethrower"){if(e.specialAmmo[t]<=0){this.spendSpecial(e,t);return}if(t==="flamethrower"&&this.state.shots.length>117)return;e.specialAmmo[t]--,e.cooldown=t==="laser"?24:6;const r=e.x+s.x+s.dx*.4,o=e.y+s.y+s.dy*.4;if(t==="laser"){let a=r,l=o,c=!1;for(let h=0;h<=160&&!c;h++){a=r+s.dx*h*.15,l=o+s.dy*h*.15;for(const f of this.state.props)if(f.hp>0&&Math.abs(a-f.x)<f.w/2&&Math.abs(l-f.y)<f.h/2){this.damageProp(f,65,e.id),c=!0;break}if(!c)for(const f of this.state.actors){if(f.id===e.id||f.hp<=0||f.pendingSpawn)continue;const u=this.hitPart(f,a,l);if(u){this.damage(f,u,50,"laser",e.id),this.projectileImpact(f,s.dx,s.dy,t),c=!0;break}}}this.recoilBoost(e,s.dx,s.dy,!1),this.event("shot",r,o,e.id,{weapon:t,endX:a,endY:l})}else{for(let a=-1;a<=1;a++){const l=s.angle+a*.13;this.state.shots.push({id:this.next(),owner:e.id,x:r,y:o,vx:Math.cos(l)*20,vy:Math.sin(l)*20,life:15,damage:1,weapon:t})}this.event("shot",r,o,e.id,{weapon:t})}this.spendSpecial(e,t),e.ammo=this.clip(e);return}if(t==="spear"){e.cooldown=32,e.attacking=14,e.reloading=0;const r=dg*(this.handling(e)<2?.85:1);this.event("melee",e.x,e.y+hn(e),e.id,{weapon:t});for(let o=1;o<=33;o++){const a=r*o/33,l=e.x+s.dx*a,c=e.y+hn(e)+s.dy*a;for(const h of this.state.props)if(h.hp>0&&Math.abs(l-h.x)<h.w/2&&Math.abs(c-h.y)<h.h/2){this.damageProp(h,20,e.id);return}for(const h of this.state.actors){if(h.id===e.id||h.hp<=0||h.pendingSpawn)continue;const f=this.hitPart(h,l,c);if(f){if(this.damage(h,f,26,"spear",e.id),h.hp>0){const u=au*(5+this.random()*5);h.vx=s.dx*u,h.vy=s.dy*u,h.grounded=!1,h.launchedUntil=this.state.frame+18,this.event("launch",h.x,h.y+hn(h),h.id,{weapon:t,endX:h.x+s.dx*3,endY:h.y+hn(h)+s.dy*3})}return}}}return}if(t==="axe"){if(this.state.shots.length>=120)return;this.state.shots.push({id:this.next(),owner:e.id,x:e.x+s.x+s.dx*.35,y:e.y+s.y+s.dy*.35,vx:s.dx*18,vy:s.dy*18,life:22,damage:30,weapon:"axe",durability:e.durability.axe}),this.event("shot",e.x+s.x,e.y+s.y,e.id,{weapon:t}),e.weapons=e.weapons.filter(r=>r!=="axe"),e.weapons.length||(e.weapons=["body"]),e.slot=0,e.cooldown=43,e.attacking=10,e.reloading=0;return}if(i){if(e.reloading&&!(t==="shotgun"&&e.magazines.shotgun>0))return;if(e.magazines[t]<=0){this.reload(e);return}e.reloading=0,e.magazines[t]--,e.cooldown=t==="smg"?6:45;const r=Math.atan2(e.aimY,e.aimX),o=t==="shotgun"?7:1;for(let a=0;a<o&&this.state.shots.length<120;a++){const l=(this.random()-.5)*(t==="shotgun"?.38:.09)+(e.parts.head?0:(this.random()-.5)*.65),c=r+l;this.state.shots.push({id:this.next(),owner:e.id,x:e.x+s.x+s.dx*.35,y:e.y+s.y+s.dy*.35,vx:Math.cos(c)*48,vy:Math.sin(c)*48,life:t==="shotgun"?20:60,damage:t==="shotgun"?9:8,weapon:t})}this.recoilBoost(e,s.dx,s.dy,t==="shotgun"),this.event("shot",e.x,e.y+hn(e),e.id,{weapon:t})}else{e.cooldown=t==="body"?32:18,e.attacking=10;const r=(t==="shank"?fg:1.1)*(this.handling(e)<2?.85:1),o=t==="body"?8:13;if(this.event("melee",e.x,e.y+hn(e),e.id,{weapon:t}),t==="shank"){let a=!1;for(let l=1;l<=12&&!a;l++){const c=r*l/12,h=e.x+s.dx*c,f=e.y+hn(e)+s.dy*c;for(const u of this.state.props)if(u.hp>0&&Math.abs(h-u.x)<u.w/2&&Math.abs(f-u.y)<u.h/2){this.damageProp(u,o*.7,e.id),a=!0;break}if(a)break;for(const u of this.state.actors){if(u.id===e.id||u.hp<=0||u.pendingSpawn||Math.hypot(u.x-e.x,u.y-e.y)>r+.25)continue;const d=this.hitPart(u,h,f);if(d){this.damage(u,d,o,"shank",e.id),a=!0;break}}}return}for(const a of this.state.actors){if(a.id===e.id||a.hp<=0||a.pendingSpawn||Math.abs(a.y-e.y)>2.3)continue;const l=a.x-e.x;if(Math.sign(l)!==e.face||Math.abs(l)>r)continue;const c=e.y+hn(e)+e.aimY*1.5,h=un.filter(f=>a.parts[f]>0).sort((f,u)=>Math.abs(a.y+vn(a,f).y-c)-Math.abs(a.y+vn(a,u).y-c));h[0]&&this.damage(a,h[0],o,t,e.id)}for(const a of this.state.props)if(a.hp>0&&Math.abs(a.x-e.x)<r+a.w/2&&Math.abs(a.y-e.y-hn(e)-e.aimY*1.1)<a.h/2+1){const l=a.x-e.x;(Math.sign(l)===e.face||Math.abs(l)<.6)&&this.damageProp(a,o*.7,e.id)}}e.ammo=this.clip(e)}spendSpecial(e,t){e.specialAmmo[t]>0||(e.weapons=e.weapons.filter(i=>i!==t),e.weapons.length||(e.weapons=["body"]),e.slot=0)}dropLoot(e){if(this.state.pickups.length>=32)return;const t=this.floorAt(e.x,e.y+e.h/2+.1,-100);if(t<=-50)return;const i=e.trainingFor!==void 0||this.state.phaseFrame<600&&this.openingSpawnProtected(e.x),s=i?1:this.random(),r=i?"shank":s<gg?"spear":s<.55?"laser":"flamethrower";this.state.pickups.push({id:this.next(),x:e.x,y:t+.55,weapon:r,hp:sr[r],charges:r==="laser"?2:r==="flamethrower"?24:void 0,expires:this.state.frame+600})}damageProp(e,t,i=-1){if(!(e.hp<=0)&&(e.hp=Math.max(0,e.hp-t),e.material==="fuel"&&e.hp<e.maxHp*.5&&(e.burn=Math.max(e.burn,1),this.ignite(e,this.state.frame+360,"fuel_fire",i)),e.hp<=0)){this.event("break",e.x,e.y,i,{prop:e.kind}),e.kind==="pump"&&!this.state.fires.some(s=>s.id===e.id)&&this.state.fires.push({id:e.id,x:e.x,y:Math.max(.4,e.y-e.h/2+.5),radius:3,until:this.state.frame+480,owner:i,cause:"fuel_fire"});for(let s=0;s<4&&this.state.debris.length<120;s++)this.state.debris.push({id:this.next(),x:e.x+(this.random()-.5)*e.w,y:e.y,vx:(this.random()-.5)*8,vy:2+this.random()*5,life:600,part:null,look:null,color:e.material==="glass"?2:e.material==="metal"?4:5,hp:12,w:Math.min(1,e.w/4),h:Math.min(.7,e.h/3)});if(e.material==="fuel"&&!e.exploded){e.exploded=!0,this.event("explosion",e.x,e.y,i);const s=e.kind==="can"?4:7;for(const r of this.state.actors)if(r.hp>0&&!r.pendingSpawn){const o=Math.hypot(r.x-e.x,r.y+1-e.y);o<s&&(this.damage(r,"torso",Math.max(12,55*(1-o/s)),"blast",i),r.vx+=(r.x>e.x?1:-1)*10,r.vy+=5)}for(const r of[...this.state.pickups])Math.hypot(r.x-e.x,r.y-e.y)<s&&this.damagePickup(r,50);for(const r of this.state.props)r!==e&&r.hp>0&&Math.hypot(r.x-e.x,r.y-e.y)<s&&(r.fuel>0&&(r.burn=1,this.ignite(r,this.state.frame+240,"fuel_fire",i)),r.hp=Math.max(1,r.hp-22))}this.dropLoot(e)}}ignite(e,t,i,s,r=0){var a;if(r>2||e.onFire&&e.onFire.until>this.state.frame)return;const o=this.state.actors.find(l=>l===e);o&&(o.hp<=0||o.pendingSpawn)||((a=this.state.major)==null?void 0:a.kind)==="foam"&&this.state.major.started&&this.state.frame<this.state.major.until&&Math.abs(e.x-this.state.major.x)<8||(this.event("ignite",e.x,e.y+(o?Rn(o)*.5:0),(o==null?void 0:o.id)??-1),e.onFire={until:Math.min(t,this.state.frame+240),cause:i,owner:s,depth:r})}burning(){const e=this.state,t=e.frame;e.fires=e.fires.filter(r=>r.until>t);for(const r of e.props)r.hp>0&&r.burn&&!r.onFire&&this.ignite(r,t+240,r.material==="fuel"?"fuel_fire":"fire",-1);const i=[...e.actors.filter(r=>r.hp>0&&!r.pendingSpawn).map(r=>({object:r,x:r.x,y:r.y+Rn(r)/2,w:.9,h:Rn(r)})),...e.props.filter(r=>r.hp>0).map(r=>({object:r,x:r.x,y:r.y,w:r.w,h:r.h})),...e.debris.filter(r=>r.hp>0).map(r=>({object:r,x:r.x,y:r.y,w:r.w,h:r.h})),...e.pickups.filter(r=>r.hp>0).map(r=>({object:r,x:r.x,y:r.y,w:.6,h:.4})),...e.boosts.filter(r=>r.hp>0).map(r=>({object:r,x:r.x,y:r.y,w:.8,h:.6}))],s=[...e.fires.map(r=>({...r,object:null})),...i.filter(r=>r.object.onFire&&r.object.onFire.until>t&&(r.object.onFire.depth??0)<2&&(!("material"in r.object)||["wood","fabric","fuel"].includes(r.object.material))).map(r=>({...r.object.onFire,object:r.object,x:r.x,y:r.y,radius:.75}))];for(const r of s)for(const o of i){if(r.object===o.object)continue;const a=Math.max(0,Math.abs(o.x-r.x)-o.w/2),l=Math.max(0,Math.abs(o.y-r.y)-o.h/2);Math.hypot(a,l)<=r.radius&&this.ignite(o.object,r.until,r.cause,r.owner,(r.depth??0)+1)}for(const r of i){const o=r.object.onFire;o&&o.until<=t&&(delete r.object.onFire,"burn"in r.object&&(r.object.burn=0))}if(t%15===0){for(const r of e.actors)r.hp>0&&!r.pendingSpawn&&r.onFire&&this.damage(r,"torso",2,r.onFire.cause,r.onFire.owner,!0);for(const r of e.props)r.hp>0&&r.onFire&&this.damageProp(r,3,r.onFire.owner);for(const r of e.debris)r.hp>0&&r.onFire&&(r.hp-=2);for(const r of[...e.pickups])r.hp>0&&r.onFire&&this.damagePickup(r,2);for(const r of[...e.boosts])r.hp>0&&r.onFire&&this.damageBoost(r,2)}}grabOrThrow(e){if(this.state.chaosAt===void 0||e.pendingSpawn||e.hp<=0||(e.stunUntil??0)>this.state.frame||!e.parts.armL&&!e.parts.armR)return;if(e.carrying){this.throwObject(e);return}const t=this.state.props.filter(i=>i.hp>0&&!i.falling&&["tire","tv","can"].includes(i.kind)&&Math.hypot(i.x-e.x,i.y-e.y-1)<2.8).sort((i,s)=>Math.abs(i.x-e.x)-Math.abs(s.x-e.x))[0];if(t)e.carrying={kind:t.kind,hp:t.hp},this.state.props=this.state.props.filter(i=>i.id!==t.id);else{const i=this.state.debris.find(s=>s.part&&s.look&&Math.hypot(s.x-e.x,s.y-e.y-1)<2.8);i&&(e.carrying={kind:"limb",hp:i.hp,part:i.part,look:i.look},this.state.debris=this.state.debris.filter(s=>s.id!==i.id))}e.carrying&&this.event("pickup",e.x,e.y+1,e.id)}throwObject(e,t=!1){if(!e.carrying||this.state.thrown.length>=24)return;const i=Ls(e),s=e.carrying;delete e.carrying,this.state.thrown.push({...s,id:this.next(),owner:e.id,x:e.x+i.x,y:e.y+i.y,vx:t?0:i.dx*18,vy:t?0:i.dy*18+4,angle:0,life:180,bounces:0,hit:[]}),e.cooldown=24,this.event("throw",e.x,e.y+1,e.id)}recoilBoost(e,t,i,s){var r;((r=e.boost)==null?void 0:r.kind)!=="recoil"||e.boost.until<=this.state.frame||(e.vx-=t*(s?8:3),e.vy=Math.max(e.vy,s?9:3)-i*(s?5:2),e.grounded=!1)}thrownObjects(){const e=this.state;for(const t of e.thrown){t.life--;const i=t.y;if(t.vy-=24*Ut,t.x+=t.vx*Ut,t.y+=t.vy*Ut,t.angle+=t.vx*Ut*.8,t.hp<=0&&(t.life=0),t.kind==="can"&&t.life>0&&e.frame%12===0&&e.fires.length<32&&e.fires.push({id:this.next(),x:t.x,y:t.y,radius:.65,until:e.frame+90,owner:t.owner,cause:"fire"}),t.life>0&&(Math.abs(t.vx)>1||Math.abs(t.vy)>1))for(const o of e.actors)o.id===t.owner||o.hp<=0||o.pendingSpawn||t.hit.includes(o.id)||Math.abs(o.x-t.x)<.75&&t.y>o.y&&t.y<o.y+Rn(o)&&(t.hit.push(o.id),this.damage(o,"torso",t.kind==="tv"?22:16,"thrown",t.owner),t.kind==="tv"&&(o.stunUntil=e.frame+45),o.vx+=Math.sign(t.vx)*6,t.kind!=="tire"&&(t.life=0));let s=!1;for(const o of e.props)if(o.hp>0&&!["floor","roof","balcony","tire"].includes(o.kind)&&Math.abs(t.x-o.x)<o.w/2+.2&&Math.abs(t.y-o.y)<o.h/2+.2){this.damageProp(o,12,t.owner),t.vx*=-.65,t.bounces++,s=!0,t.kind!=="tire"&&(t.life=0);break}const r=this.floorAt(t.x,i-.25,t.y-.25);t.vy<0&&r>-50&&(t.y=r+.25,t.kind==="tire"&&t.bounces<3&&t.hp>0?(t.vy=Math.max(3,Math.abs(t.vy)*.65),t.vx*=.85,t.bounces++):t.life=0),s&&t.bounces>6&&(t.life=0),(t.y<-15||Math.abs(t.x)>70)&&(t.life=0),t.life<=0&&(t.kind==="can"&&t.y>-10?(e.fires.length<32&&e.fires.push({id:this.next(),x:t.x,y:t.y,radius:1.5,until:e.frame+180,owner:t.owner,cause:"fire"}),this.event("explosion",t.x,t.y,t.owner)):t.kind==="tire"&&t.hp>0&&r>-50?e.props.push({id:this.next(),kind:"tire",x:t.x,y:r+.6,w:1.1,h:1.2,hp:t.hp,maxHp:25,material:"fabric",fuel:.5,burn:0,supports:[],falling:!1,vy:0,exploded:!1,solid:!0,color:0}):e.debris.length<120&&t.y>-10&&e.debris.push({id:this.next(),x:t.x,y:t.y,vx:t.vx*.2,vy:1,life:450,part:t.part??null,look:t.look??null,color:3,hp:Math.max(1,t.hp),w:.5,h:.3}))}e.thrown=e.thrown.filter(t=>t.life>0)}surfaceEffect(e){if(this.state.chaosAt===void 0||e.y>1.2)return;const t=this.state.props.filter(i=>i.hp>0&&!i.falling&&Math.abs(i.x-e.x)<3.7);if(t.some(i=>i.kind==="freezer"))return"cold";if(t.some(i=>i.kind==="detergent"))return"detergent"}toxicUrinals(){const e=this.state;if(e.venue!=="bathroom"||e.chaosAt===void 0||e.frame%15!==0)return;const t=e.props.filter(i=>i.kind==="urinal"&&i.toxic&&i.hp>0&&!i.falling);for(const i of e.actors)i.hp<=0||i.pendingSpawn||t.some(s=>Math.abs(i.x-s.x)<2.6&&i.y<2.4&&i.y+Rn(i)>.2)&&this.damage(i,"torso",2,"toxic")}majorEvents(){var i;const e=this.state;if(e.chaosAt===void 0)return;let t=e.major;if(!t){if(e.frame<(e.nextMajorAt??1/0))return;const s=e.actors.find(a=>a.human&&a.hp>0);let r=Math.max(-48,Math.min(48,((s==null?void 0:s.x)??0)+6));const o=e.venue==="laundry"?"spin":e.venue==="market"?this.random()<.5?"pallet":"forklift":e.venue==="impound"?"tow":e.venue==="rest"?"truck":e.venue==="motel"?"collapse":"foam";if(t={kind:o,x:r,activeAt:e.frame+120,until:e.frame+600,started:!1},o==="spin"||o==="tow"){const a=e.props.filter(l=>l.hp>0&&!l.falling&&l.kind===(o==="spin"?"washer":"car")).sort((l,c)=>Math.abs(l.x-((s==null?void 0:s.x)??0))-Math.abs(c.x-((s==null?void 0:s.x)??0)))[0];if(!a){e.nextMajorAt=e.frame+600;return}r=a.x,t.x=r,o==="spin"?t.sourceId=a.id:(t.propId=a.id,t.sourceId=this.next(),e.props.push({id:t.sourceId,kind:"towchain",x:r+4,y:2.1,w:4,h:.24,hp:25,maxHp:25,material:"metal",fuel:0,burn:0,supports:[],falling:!1,vy:0,exploded:!1,solid:!1,color:0}))}e.major=t,this.event("warning",r,1);return}if(e.frame>=t.until){if(["truck","forklift"].includes(t.kind)){const s=e.props.find(r=>r.id===t.propId);s&&s.hp>0&&this.damageProp(s,s.hp)}if(t.kind==="tow"){const s=e.props.find(r=>r.id===t.sourceId);s&&s.hp>0&&this.damageProp(s,s.hp)}delete e.major,e.nextMajorAt=e.frame+1800;return}if(t.kind==="tow"){const s=e.props.find(o=>o.id===t.sourceId),r=e.props.find(o=>o.id===t.propId);if(!s||!r||s.hp<=0||r.hp<=0){t.until=e.frame;return}}if(t.kind==="spin"&&!t.started&&!e.props.some(s=>s.id===t.sourceId&&s.hp>0)){t.until=e.frame;return}if(!(e.frame<t.activeAt)){if(!t.started){if(t.started=!0,t.kind==="spin"){const s=e.props.find(l=>l.id===t.sourceId),r=e.actors.find(l=>l.human&&l.hp>0),o=((r==null?void 0:r.x)??0)<s.x?-1:1;e.thrown.length<24&&e.thrown.push({id:this.next(),kind:"washer-door",owner:-1,x:s.x+o*1.8,y:2.1,vx:o*13,vy:5,angle:0,life:150,bounces:0,hit:[],hp:20}),this.event("throw",s.x,2);const a=e.props.filter(l=>l.kind==="dryer"&&l.hp>0&&Math.abs(l.x-s.x)<6)[0];a&&(this.ignite(a,e.frame+240,"fire",-1),this.event("explosion",a.x,a.y),e.fires.length<32&&e.fires.push({id:this.next(),x:a.x,y:.5,radius:2,until:e.frame+180,cause:"fire",owner:-1}))}else if(t.kind==="tow"){const s=e.props.find(r=>r.id===t.propId);s.hitActors=[]}else if(t.kind!=="foam"){const s=t.kind==="truck"||t.kind==="forklift",r=t.kind==="forklift",o=t.kind==="pallet",a=this.next();e.props.push({id:a,kind:r?"forklift":s?"truck":o?"pallet":"ac",x:s?-64:t.x,y:s?1.7:11,w:r?4:s?7:o?3:2,h:s?2.6:1.3,hp:s?90:35,maxHp:s?90:35,material:o?"wood":"metal",fuel:o?.5:0,burn:0,supports:[],falling:!s,vy:s?0:-1,exploded:!1,solid:!0,color:0}),t.propId=a}}if(t.kind==="foam"){e.fires=e.fires.filter(s=>Math.abs(s.x-t.x)>8);for(const s of e.actors)Math.abs(s.x-t.x)<8&&delete s.onFire;for(const s of e.props)Math.abs(s.x-t.x)<8&&(delete s.onFire,s.burn=0);for(const s of[...e.pickups,...e.debris,...e.boosts])Math.abs(s.x-t.x)<8&&delete s.onFire}else if(t.kind==="truck"||t.kind==="forklift"||t.kind==="tow"){const s=e.props.find(a=>a.id===t.propId);if(!s||s.hp<=0){t.until=e.frame;return}const r=t.kind==="tow";s.x+=(r?8:t.kind==="forklift"?11:16)*Ut,t.x=s.x;const o=e.props.find(a=>a.kind==="floor"&&a.hp>0&&Math.abs(a.x-s.x)<a.w/2);if(s.y=(o?o.y+o.h/2:0)+s.h/2,r){const a=e.props.find(l=>l.id===t.sourceId);a.x=s.x+4,a.y=s.y+.65}for(const a of e.actors)a.hp>0&&!a.pendingSpawn&&!((i=s.hitActors)!=null&&i.includes(a.id))&&Math.abs(a.x-s.x)<s.w/2+.5&&a.y<s.y+s.h/2&&a.y+Rn(a)>s.y-s.h/2&&((s.hitActors??(s.hitActors=[])).push(a.id),this.damage(a,"torso",32,r?"crush":"traffic"),a.vx=12,a.vy=5)}}}bot(e){if(e.pendingSpawn)return $i(e.look);const t=$i(e.look),i=this.state.actors.filter(R=>R.hp>0&&!R.pendingSpawn&&R.id!==e.id),s=this.state.chaosAt!==void 0&&this.state.frame-this.state.chaosAt<720,r=i.filter(R=>R.human),o=(s&&r.length?r:i).sort((R,P)=>Math.abs(R.x-e.x)-Math.abs(P.x-e.x)),a=o[0];if(!a)return t;const l=this.weapon(e),c=l==="smg"||l==="shotgun"||l==="laser"||l==="flamethrower",h=l==="axe",f=Math.abs(a.x-e.x),u=this.state.chaosAt===void 0?void 0:e.personality,d=this.state.pickups.filter(R=>this.canPickup(e,R)&&R.weapon!=="shank"&&Math.abs(R.x-e.x)<(u==="hoarder"?22:14)).sort((R,P)=>Math.abs(R.x-e.x)-Math.abs(P.x-e.x))[0];(e.weapons.length<2||u==="hoarder")&&d?(t.move=Math.sign(d.x-e.x),Math.abs(d.x-e.x)<2&&(t.pickup=e.last.pickup+1)):t.move=f>(l==="flamethrower"?3:c?9:h?4:l==="spear"?2.6:1.4)?Math.sign(a.x-e.x):c&&f<4?-Math.sign(a.x-e.x):0,e.x<this.state.zoneLeft+3&&(t.move=1),e.x>this.state.zoneRight-3&&(t.move=-1);const g=un.filter(R=>a.parts[R]>0)[(Math.floor(this.state.frame/47)+e.id)%un.filter(R=>a.parts[R]>0).length]??"torso",_=a.x+vn(a,g).x-e.x,p=a.y+vn(a,g).y-(e.y+hn(e)),m=Math.max(.1,Math.hypot(_,p));if(t.aimX=_/m,t.aimY=p/m,t.attack=f<(l==="flamethrower"?5:c?23:h?6:l==="spear"?3.6:2.3)&&Math.abs(a.y-e.y)<(c?9:2.3),u==="charger"&&(t.move=f>1.1?Math.sign(a.x-e.x):0),u==="bomber")if(e.carrying)t.move=f>10?Math.sign(a.x-e.x):f<4?-Math.sign(a.x-e.x):0,t.attack=f<13&&e.cooldown===0;else{const R=this.state.props.filter(P=>P.hp>0&&["can","tv","tire"].includes(P.kind)&&Math.abs(P.x-e.x)<14).sort((P,D)=>+(D.kind==="can")-+(P.kind==="can")||Math.abs(P.x-e.x)-Math.abs(D.x-e.x))[0];R&&(t.move=Math.sign(R.x-e.x),Math.abs(R.x-e.x)<2&&(t.grab=e.last.grab+1))}u==="coward"&&e.onFire&&(t.move=-Math.sign(a.x-e.x),t.attack=!1,e.grounded&&this.state.frame%45===0&&(t.jump=e.last.jump+1)),this.state.boosts.find(R=>Math.abs(R.x-e.x)<2)&&!e.boost&&(t.pickup=e.last.pickup+1);const v=this.state.props.find(R=>R.hp>0&&R.solid&&R.y-R.h/2<e.y+2.7&&R.y+R.h/2>e.y+.4&&Math.abs(R.x-e.x-t.move*1.4)<R.w/2+.6),b=this.state.fires.some(R=>Math.abs(R.x-e.x-t.move*2)<R.radius+1)||this.state.props.some(R=>R.hp>0&&(R.burn||R.onFire)&&Math.abs(R.x-e.x-t.move*2)<R.w/2+1),N=this.floorAt(e.x+t.move*2,e.y+.5,e.y-1)<-50;return e.grounded&&(v||b||N||(this.state.frame+e.id*37)%113===0)&&(t.jump=e.last.jump+1),v&&(t.attack=!0,this.state.frame%20<12&&(t.aimX=t.move,t.aimY=0)),(l==="smg"||l==="shotgun")&&this.clip(e)===0&&(e.reserve>0?t.reload=e.last.reload+1:t.cycle=e.last.cycle+1),t}move(e,t){var m,x;if(e.pendingSpawn)return;if(e.bleedOutAt!==null){if(this.state.frame>=e.bleedOutAt){this.kill(e,e.bleedCause??"bleedout",e.bleedOwner);return}e.hp=Math.max(.01,e.hp-(e.bleedRate??100/360*(e.human?Ba:1)))}if(e.distressAt!==void 0&&this.state.frame>=e.distressAt&&Fa(e)===1&&e.parts.head>0){const v=e.distressCount??0;this.event(v%2===0?"scream":"cry",e.x,e.y+vn(e,"head").y,e.id),e.distressCount=v+1,e.distressAt=this.state.frame+150+(e.id*31+v*17)%90}if(e.cooldown=Math.max(0,e.cooldown-1),e.attacking=Math.max(0,e.attacking-1),e.reloading>0&&(e.reloading--,!e.reloading)){const v=this.weapon(e);if(v==="smg"){const b=Math.min(e.reserve,30-e.magazines.smg);e.magazines.smg+=b,e.reserve-=b}else v==="shotgun"&&e.reserve>0&&(e.magazines.shotgun++,e.reserve--,e.magazines.shotgun<6&&this.reload(e))}t.cycle!==e.last.cycle&&(this.event("swap",e.x,e.y+1,e.id),e.slot=(e.slot+1)%e.weapons.length,e.reloading=0),t.grab!==e.last.grab&&this.grabOrThrow(e),t.pickup!==e.last.pickup&&this.pickup(e),t.reload!==e.last.reload&&this.reload(e),!e.parts.head&&this.state.frame>=e.driftAt&&(e.drift=(this.random()*2-1)*5.5,e.driftAt=this.state.frame+15+Math.floor(this.random()*15)),e.boost&&e.boost.until<=this.state.frame&&delete e.boost;const i=(m=e.boost)==null?void 0:m.kind,s=(e.stunUntil??0)>this.state.frame,r=this.surfaceEffect(e),o=r==="detergent"||i==="skates"||((x=this.state.major)==null?void 0:x.kind)==="foam"&&this.state.major.started&&Math.abs(e.x-this.state.major.x)<8,a=7*this.movement(e)*(r==="cold"?.55:1)*(i==="cart"?2.1:i==="skates"?1.65:1),l=s?0:t.move,c=s?0:e.parts.head?l*a:l*a*.25+e.drift,h=(e.launchedUntil??0)>this.state.frame;h||(e.vx+=((o&&l===0?e.vx*.985:c)-e.vx)*(o?.055:i==="cart"?.12:.2)),Math.abs(t.aimX)>.05&&(e.face=Math.sign(t.aimX)),e.aimX=t.aimX,e.aimY=t.aimY,t.jump!==e.last.jump&&e.grounded&&Os(e)>0&&!s&&!h&&(this.event("jump",e.x,e.y,e.id),e.vy=au*Math.max(.4,this.movement(e)),e.grounded=!1),e.vy-=za*Ut;const f=e.impactVelocity,u=e.vx+((f==null?void 0:f.x)??0),d=e.vy+((f==null?void 0:f.y)??0),g=e.x,_=e.y;e.x=Math.max(-63,Math.min(63,e.x+u*Ut)),e.y+=d*Ut,e.grounded=!1;const p=this.floorAt(e.x,_,e.y);d<=0&&p>-50&&(d<-5&&this.event("land",e.x,p,e.id),e.y=p,e.vy=0,e.grounded=!0,f&&(f.y=0));for(const v of this.state.props){if(v.hp<=0||!v.solid||v.falling||v.kind==="floor"||v.kind==="roof"||v.kind==="balcony")continue;const b=v.w/2+.4,N=(h||!!f)&&(g<v.x-b&&e.x>=v.x-b||g>v.x+b&&e.x<=v.x+b);(Math.abs(e.x-v.x)<b||N)&&e.y+Rn(e)>v.y-v.h/2+.1&&e.y<v.y+v.h/2-.1&&Math.abs(g-v.x)>=v.w/2+.35&&(i==="cart"&&Math.abs(e.vx)>5&&this.state.frame>=(e.ramAt??0)&&(this.damageProp(v,45,e.id),e.ramAt=this.state.frame+30),v.hp>0&&(e.x=h||f?v.x+(g<v.x?-1:1)*(b+.01):g,e.vx=i==="cart"?-e.vx*.25:0,f&&(f.x=0)))}if(f&&(f.x*=.85,f.y*=.85,Math.hypot(f.x,f.y)<.05&&delete e.impactVelocity),e.carrying&&!e.parts.armL&&!e.parts.armR&&this.throwObject(e,!0),i==="cart"&&Math.abs(e.vx)>5&&this.state.frame>=(e.ramAt??0)){const v=this.state.actors.find(b=>b.id!==e.id&&b.hp>0&&!b.pendingSpawn&&Math.abs(b.x-e.x)<1.3&&Math.abs(b.y-e.y)<1.5);v&&(this.damage(v,"torso",18,"body",e.id),v.vx=Math.sign(e.vx)*12,v.vy=5,e.ramAt=this.state.frame+45)}t.attack&&!s&&this.attack(e),e.ammo=this.clip(e),e.y<-12&&this.kill(e,"fall"),this.state.phaseFrame%30===0&&(e.x<this.state.zoneLeft||e.x>this.state.zoneRight)&&this.damage(e,"torso",this.state.phaseFrame>10800?20:5,"zone"),this.state.phaseFrame>14400&&this.state.phaseFrame%60===0&&this.damage(e,"torso",8,"zone"),e.last={...t}}step(e=[]){var a,l;const t=this.state;t.frame++,t.phaseFrame++,t.eventSeq=0;const i=e.map(ug);if(t.phase==="lobby"||t.phase==="countdown"){this.lobby(i);return}if(t.phase==="results"){this.rematch(i);return}if(t.chaosAt===void 0&&t.actors.some(c=>c.pendingSpawn)){const c=t.actors.filter(f=>f.human&&f.hp>0);t.props.some(f=>f.trainingFor!==void 0&&f.hp>0&&c.some(u=>u.id===f.trainingFor))?t.phaseFrame=0:this.releaseEnemies()}(t.venue==="bathroom"||t.props.some(c=>c.kind==="entrance"))&&t.chaosAt!==void 0&&t.actors.some(c=>c.pendingSpawn&&c.hp>0)&&this.releaseEnemies(),this.majorEvents();const s=t.phaseFrame/60,r=Math.max(0,s-30)*.27;if(t.zoneLeft=Math.min(-1,-64+r),t.zoneRight=Math.max(1,64-r),t.chaosAt!==void 0)for(const c of t.actors)c.pendingSpawn&&c.hp>0&&(c.x<t.zoneLeft||c.x>t.zoneRight||t.phaseFrame>=14400)&&this.kill(c,"zone");for(const c of t.actors)c.hp>0&&!c.pendingSpawn&&this.move(c,c.human?i[c.id]??$i(c.look):this.bot(c));for(const c of t.shots){c.life--,c.weapon==="axe"&&(c.vy-=18*Ut);const h=c.x,f=c.y;c.x+=c.vx*Ut,c.y+=c.vy*Ut;const u=Math.max(1,Math.ceil(Math.hypot(c.x-h,c.y-f)/.18));for(let d=1;d<=u&&c.life>0;d++){const g=h+(c.x-h)*d/u,_=f+(c.y-f)*d/u;let p=!1;for(const m of t.actors)if(m.hp>0&&!m.pendingSpawn&&m.id!==c.owner){if(c.weapon!=="flamethrower"&&(m.carrying||this.weapon(m)!=="body")&&Math.abs(g-m.x-Ls(m).x)<.35&&Math.abs(_-m.y-Ls(m).y)<.16){this.damageWeapon(m,c.damage,c.owner),this.projectileImpact(m,c.vx,c.vy,c.weapon),p=!0;break}const x=this.hitPart(m,g,_);if(x){this.damage(m,x,c.damage,c.weapon==="flamethrower"?"fire":c.weapon,c.owner),this.projectileImpact(m,c.vx,c.vy,c.weapon),c.weapon==="flamethrower"&&this.ignite(m,t.frame+240,"fire",c.owner),p=!0;break}}if(!p){for(const m of t.props)if(m.hp>0&&Math.abs(g-m.x)<m.w/2&&Math.abs(_-m.y)<m.h/2){this.damageProp(m,c.damage*(c.weapon==="axe"?1.6:.65),c.owner),c.weapon==="flamethrower"&&m.hp>0&&this.ignite(m,t.frame+240,"fire",c.owner),p=!0;break}}if(!p){for(const m of[...t.boosts])if(Math.abs(g-m.x)<.5&&Math.abs(_-m.y)<.4){this.damageBoost(m,c.damage),c.weapon==="flamethrower"&&this.ignite(m,t.frame+240,"fire",c.owner),p=!0;break}}if(!p){for(const m of t.thrown)if(Math.abs(g-m.x)<.5&&Math.abs(_-m.y)<.5){m.hp-=c.damage,p=!0;break}}if(!p){for(const m of[...t.pickups])if(Math.abs(g-m.x)<.6&&Math.abs(_-m.y)<.35){this.damagePickup(m,c.damage),c.weapon==="flamethrower"&&this.ignite(m,t.frame+240,"fire",c.owner),p=!0;break}}if(!p){for(const m of t.debris)if(m.hp>0&&Math.abs(g-m.x)<m.w/2&&Math.abs(_-m.y)<m.h/2){m.hp-=c.damage,c.weapon==="flamethrower"&&this.ignite(m,t.frame+240,"fire",c.owner);const x=Math.hypot(c.vx,c.vy),v=lu[c.weapon]??0;x>.001&&(m.vx+=c.vx/x*v,m.vy+=c.vy/x*v),m.settled=!1,m.groundTicks=0,p=!0;break}}p&&(c.life=0,c.x=g,c.y=_)}}for(const c of t.shots)if(c.weapon==="axe"&&c.life<=0){const h=this.floorAt(c.x,c.y+.5,-100);h>-50&&c.y>-12&&this.state.pickups.push({id:this.next(),x:c.x,y:h+.55,weapon:"axe",hp:c.durability??sr.axe})}t.shots=t.shots.filter(c=>c.life>0),this.thrownObjects(),t.boosts=t.boosts.filter(c=>c.expires>t.frame);for(const c of t.props)if(!(c.hp<=0)&&(c.supports.some(h=>{var f;return((f=t.props.find(u=>u.id===h))==null?void 0:f.hp)===0})&&(c.falling=!0),c.falling)){const h=c.y;c.vy-=za*Ut,c.y+=c.vy*Ut;for(const f of t.actors)f.hp>0&&!f.pendingSpawn&&!((a=c.hitActors)!=null&&a.includes(f.id))&&Math.abs(f.x-c.x)<c.w/2+.5&&f.y+Rn(f)>c.y-c.h/2&&f.y<h+c.h/2&&((c.hitActors??(c.hitActors=[])).push(f.id),this.damage(f,"torso",32,c.kind==="roof"?"canopy":"collapse"));if(c.y-c.h/2<.4){c.y=.4+c.h/2,c.falling=!1,this.damageProp(c,c.maxHp);continue}}this.toxicUrinals(),this.burning(),t.pickups=t.pickups.filter(c=>c.expires===void 0||c.expires>t.frame);for(const c of t.debris){c.life--;const h=c.y-c.h/2;if(c.settled){const d=this.floorAt(c.x,h+.05,h-.08);if(d>-50&&Math.abs(d-h)<.1)continue;c.settled=!1,c.groundTicks=0}c.vy-=za*Ut;const f=h;c.x+=c.vx*Ut,c.y+=c.vy*Ut,c.angle=(c.angle??0)+c.vx*.15*Ut;const u=this.floorAt(c.x,f,c.y-c.h/2);c.vy<0&&u>-50?(c.y=u+c.h/2,c.vy=Math.abs(c.vy)<1?0:c.vy*-.2,c.vx*=.85,c.groundTicks=Math.abs(c.vy)<.2&&Math.abs(c.vx)<.15?(c.groundTicks??0)+1:0,c.groundTicks>=45&&(c.settled=!0,c.vx=0,c.vy=0)):c.groundTicks=0}t.debris=t.debris.filter(c=>c.life>0&&c.hp>0&&c.y>-15);const o=t.actors.filter(c=>c.hp>0);o.length<=1&&(t.phase="results",t.phaseFrame=0,t.winner=((l=o[0])==null?void 0:l.id)??null)}}const $o={spear:{title:"You have been forwarded to another department.",hint:"Spears launch along their aim. Stay beyond the tip, use cover, and avoid lining up with a drop."},crush:{title:"The parking fee was an arm and a leg.",hint:"A red tow chain means moving wreckage. Shoot the chain or leave its path."},toxic:{title:"You should have held it.",hint:"Red-ringed urinals leak toxic gas. Leave the marked area or smash the fixture to stop it."},thrown:{title:"Someone weaponized the furniture.",hint:"Red-marked flying objects hurt. TVs also stun; gas cans leave fire."},traffic:{title:"The truck did not yield.",hint:"The red lane warning gives you two seconds. Get above or out of its path."},laser:{title:"The warranty did not cover laser surgery.",hint:"Loot lasers have two shots. Break line of sight before the second."},head_bleedout:{title:"You quit while you were a head.",hint:"Head loss gives you ten seconds before bleeding out. Your remaining aim and movement are unreliable."},bleedout:{title:"You have run out of legs. And blood.",hint:"Losing both legs starts a six-second bleed-out. Make your last shots count."},fuel_fire:{title:"Turns out you are flammable.",hint:"Fuel leaks are not a shortcut. Break the chain and leave the flames."},fire:{title:"Your outfit was not fireproof.",hint:"Burning fabric spreads fire. Find an unlit route."},canopy:{title:"The roof was not emotionally supportive.",hint:"Broken canopy posts mean incoming metal. Move away from the shadow."},collapse:{title:"Structural integrity was more of a suggestion.",hint:"Watch the supports. Loose objects land with consequences."},shotgun:{title:"You brought personal space to a shotgun fight.",hint:"Leave the pellet cone. Reloading opponents are easier company."},axe:{title:"You have been downsized.",hint:"Dodge the chop, then punish the recovery."},shank:{title:"That was a very local problem.",hint:"Stay outside the blade’s reach. Backpedal and use cover."},smg:{title:"Standing still simplified their paperwork.",hint:"Break line of sight and avoid trading sustained bursts."},blast:{title:"The explosion had a wider social circle.",hint:"Fuel containers detonate once. Make sure you are elsewhere."},fall:{title:"Gravity remains undefeated.",hint:"Floor panels can disappear. Jump to intact ground."},zone:{title:"The map asked you to leave.",hint:"Watch the yellow boundary and move before the next contraction."},body:{title:"You lost an argument with a torso.",hint:"Even unarmed opponents can body-check. Keep a little distance."}};class bg{constructor(){ce(this,"seen",new Set);try{for(const e of JSON.parse(localStorage.getItem("royale.advice")??"[]"))Object.hasOwn($o,e)&&this.seen.add(e)}catch{}}discover(e){if(this.seen.has(e))return null;this.seen.add(e);try{localStorage.setItem("royale.advice",JSON.stringify([...this.seen]))}catch{}return $o[e]}}class Eg{constructor(){ce(this,"seen",new Set)}collect(e,t){const i=e.filter(s=>s.frame<=t&&!this.seen.has(s.id));for(const s of i)this.seen.add(s.id);if(this.seen.size>6e3){const s=new Set(e.map(r=>r.id));this.seen=new Set([...this.seen].filter(r=>s.has(r)))}return i}reset(){this.seen.clear()}}function wg(n,e){if(!Number.isFinite(n)||!Number.isFinite(e))return{gain:0,pan:0};const t=Math.max(0,Math.abs(n)-.85,Math.abs(e)-.85);return{gain:1/(1+12*t+24*t*t),pan:Math.max(-.92,Math.min(.92,n*.8))}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const jc="169",Ag=0,cu=1,Tg=2,Kc=1,Rg=2,li=3,Ui=0,sn=1,Vt=2,Li=0,Fs=1,hu=2,uu=3,fu=4,Cg=5,Ji=100,Pg=101,Lg=102,Ig=103,Dg=104,Ng=200,Ug=201,Og=202,Fg=203,Fl=204,kl=205,kg=206,Bg=207,zg=208,Hg=209,Vg=210,Gg=211,Wg=212,Xg=213,Yg=214,Bl=0,zl=1,Hl=2,Ws=3,Vl=4,Gl=5,Wl=6,Xl=7,Od=0,qg=1,jg=2,Ii=0,Kg=1,$g=2,Jg=3,Fd=4,Zg=5,Qg=6,ev=7,kd=300,Xs=301,Ys=302,Yl=303,ql=304,ma=306,jl=1e3,ts=1001,Kl=1002,$t=1003,tv=1004,io=1005,Pn=1006,Ha=1007,ns=1008,gi=1009,Bd=1010,zd=1011,Or=1012,$c=1013,as=1014,di=1015,Yr=1016,Jc=1017,Zc=1018,qs=1020,Hd=35902,Vd=1021,Gd=1022,In=1023,Wd=1024,Xd=1025,ks=1026,js=1027,Yd=1028,Qc=1029,qd=1030,eh=1031,th=1033,Do=33776,No=33777,Uo=33778,Oo=33779,$l=35840,Jl=35841,Zl=35842,Ql=35843,ec=36196,tc=37492,nc=37496,ic=37808,sc=37809,rc=37810,oc=37811,ac=37812,lc=37813,cc=37814,hc=37815,uc=37816,fc=37817,dc=37818,pc=37819,mc=37820,gc=37821,Fo=36492,vc=36494,_c=36495,jd=36283,xc=36284,yc=36285,Mc=36286,nv=3200,iv=3201,Kd=0,sv=1,Ri="",nn="srgb",Fi="srgb-linear",nh="display-p3",ga="display-p3-linear",Jo="linear",gt="srgb",Zo="rec709",Qo="p3",ms=7680,du=519,rv=512,ov=513,av=514,$d=515,lv=516,cv=517,hv=518,uv=519,pu=35044,Va=35048,mu="300 es",pi=2e3,ea=2001;class Zs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ga=Math.PI/180,Sc=180/Math.PI;function Qs(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(kt[n&255]+kt[n>>8&255]+kt[n>>16&255]+kt[n>>24&255]+"-"+kt[e&255]+kt[e>>8&255]+"-"+kt[e>>16&15|64]+kt[e>>24&255]+"-"+kt[t&63|128]+kt[t>>8&255]+"-"+kt[t>>16&255]+kt[t>>24&255]+kt[i&255]+kt[i>>8&255]+kt[i>>16&255]+kt[i>>24&255]).toLowerCase()}function Ht(n,e,t){return Math.max(e,Math.min(t,n))}function fv(n,e){return(n%e+e)%e}function Wa(n,e,t){return(1-t)*n+t*e}function rr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function en(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Re{constructor(e=0,t=0){Re.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ht(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ke{constructor(e,t,i,s,r,o,a,l,c){Ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],f=i[7],u=i[2],d=i[5],g=i[8],_=s[0],p=s[3],m=s[6],x=s[1],v=s[4],b=s[7],N=s[2],R=s[5],P=s[8];return r[0]=o*_+a*x+l*N,r[3]=o*p+a*v+l*R,r[6]=o*m+a*b+l*P,r[1]=c*_+h*x+f*N,r[4]=c*p+h*v+f*R,r[7]=c*m+h*b+f*P,r[2]=u*_+d*x+g*N,r[5]=u*p+d*v+g*R,r[8]=u*m+d*b+g*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=h*o-a*c,u=a*l-h*r,d=c*r-o*l,g=t*f+i*u+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(s*c-h*i)*_,e[2]=(a*i-s*o)*_,e[3]=u*_,e[4]=(h*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=d*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Xa.makeScale(e,t)),this}rotate(e){return this.premultiply(Xa.makeRotation(-e)),this}translate(e,t){return this.premultiply(Xa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Xa=new Ke;function Jd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ta(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function dv(){const n=ta("canvas");return n.style.display="block",n}const gu={};function ko(n){n in gu||(gu[n]=!0,console.warn(n))}function pv(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function mv(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function gv(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const vu=new Ke().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),_u=new Ke().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),or={[Fi]:{transfer:Jo,primaries:Zo,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[nn]:{transfer:gt,primaries:Zo,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[ga]:{transfer:Jo,primaries:Qo,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(_u),fromReference:n=>n.applyMatrix3(vu)},[nh]:{transfer:gt,primaries:Qo,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(_u),fromReference:n=>n.applyMatrix3(vu).convertLinearToSRGB()}},vv=new Set([Fi,ga]),ot={enabled:!0,_workingColorSpace:Fi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!vv.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=or[e].toReference,s=or[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return or[n].primaries},getTransfer:function(n){return n===Ri?Jo:or[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(or[e].luminanceCoefficients)}};function Bs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ya(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let gs;class _v{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{gs===void 0&&(gs=ta("canvas")),gs.width=e.width,gs.height=e.height;const i=gs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=gs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ta("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Bs(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Bs(t[i]/255)*255):t[i]=Bs(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let xv=0;class Zd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xv++}),this.uuid=Qs(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(qa(s[o].image)):r.push(qa(s[o]))}else r=qa(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function qa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?_v.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let yv=0;class Jt extends Zs{constructor(e=Jt.DEFAULT_IMAGE,t=Jt.DEFAULT_MAPPING,i=ts,s=ts,r=Pn,o=ns,a=In,l=gi,c=Jt.DEFAULT_ANISOTROPY,h=Ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yv++}),this.uuid=Qs(),this.name="",this.source=new Zd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Re(0,0),this.repeat=new Re(1,1),this.center=new Re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==kd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case jl:e.x=e.x-Math.floor(e.x);break;case ts:e.x=e.x<0?0:1;break;case Kl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case jl:e.y=e.y-Math.floor(e.y);break;case ts:e.y=e.y<0?0:1;break;case Kl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Jt.DEFAULT_IMAGE=null;Jt.DEFAULT_MAPPING=kd;Jt.DEFAULT_ANISOTROPY=1;class ct{constructor(e=0,t=0,i=0,s=1){ct.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,b=(d+1)/2,N=(m+1)/2,R=(h+u)/4,P=(f+_)/4,D=(g+p)/4;return v>b&&v>N?v<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(v),s=R/i,r=P/i):b>N?b<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),i=R/s,r=D/s):N<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(N),i=P/r,s=D/r),this.set(i,s,r,t),this}let x=Math.sqrt((p-g)*(p-g)+(f-_)*(f-_)+(u-h)*(u-h));return Math.abs(x)<.001&&(x=1),this.x=(p-g)/x,this.y=(f-_)/x,this.z=(u-h)/x,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Mv extends Zs{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ct(0,0,e,t),this.scissorTest=!1,this.viewport=new ct(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new Jt(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Zd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ls extends Mv{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Qd extends Jt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=$t,this.minFilter=$t,this.wrapR=ts,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Sv extends Jt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=$t,this.minFilter=$t,this.wrapR=ts,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qr{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],f=i[s+3];const u=r[o+0],d=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f;return}if(a===1){e[t+0]=u,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(f!==_||l!==u||c!==d||h!==g){let p=1-a;const m=l*u+c*d+h*g+f*_,x=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){const N=Math.sqrt(v),R=Math.atan2(N,m*x);p=Math.sin(p*R)/N,a=Math.sin(a*R)/N}const b=a*x;if(l=l*p+u*b,c=c*p+d*b,h=h*p+g*b,f=f*p+_*b,p===1-a){const N=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=N,c*=N,h*=N,f*=N}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],f=r[o],u=r[o+1],d=r[o+2],g=r[o+3];return e[t]=a*g+h*f+l*d-c*u,e[t+1]=l*g+h*u+c*f-a*d,e[t+2]=c*g+h*d+a*u-l*f,e[t+3]=h*g-a*f-l*u-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),f=a(r/2),u=l(i/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=u*h*f+c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f-u*d*g;break;case"YXZ":this._x=u*h*f+c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f+u*d*g;break;case"ZXY":this._x=u*h*f-c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f-u*d*g;break;case"ZYX":this._x=u*h*f-c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f+u*d*g;break;case"YZX":this._x=u*h*f+c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f-u*d*g;break;case"XZY":this._x=u*h*f-c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f+u*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],f=t[10],u=i+a+f;if(u>0){const d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(i>a&&i>f){const d=2*Math.sqrt(1+i-a-f);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-i-f);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+f-i-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ht(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*i+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),f=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=o*f+this._w*u,this._x=i*f+this._x*u,this._y=s*f+this._y*u,this._z=r*f+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,i=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(xu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(xu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),f=2*(r*i-o*t);return this.x=t+l*c+o*f-a*h,this.y=i+l*h+a*c-r*f,this.z=s+l*f+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ja.copy(this).projectOnVector(e),this.sub(ja)}reflect(e){return this.sub(ja.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ht(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ja=new U,xu=new qr;class jr{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(En.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(En.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=En.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,En):En.fromBufferAttribute(r,o),En.applyMatrix4(e.matrixWorld),this.expandByPoint(En);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),so.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),so.copy(i.boundingBox)),so.applyMatrix4(e.matrixWorld),this.union(so)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,En),En.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ar),ro.subVectors(this.max,ar),vs.subVectors(e.a,ar),_s.subVectors(e.b,ar),xs.subVectors(e.c,ar),xi.subVectors(_s,vs),yi.subVectors(xs,_s),Hi.subVectors(vs,xs);let t=[0,-xi.z,xi.y,0,-yi.z,yi.y,0,-Hi.z,Hi.y,xi.z,0,-xi.x,yi.z,0,-yi.x,Hi.z,0,-Hi.x,-xi.y,xi.x,0,-yi.y,yi.x,0,-Hi.y,Hi.x,0];return!Ka(t,vs,_s,xs,ro)||(t=[1,0,0,0,1,0,0,0,1],!Ka(t,vs,_s,xs,ro))?!1:(oo.crossVectors(xi,yi),t=[oo.x,oo.y,oo.z],Ka(t,vs,_s,xs,ro))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,En).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(En).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ii),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ii=[new U,new U,new U,new U,new U,new U,new U,new U],En=new U,so=new jr,vs=new U,_s=new U,xs=new U,xi=new U,yi=new U,Hi=new U,ar=new U,ro=new U,oo=new U,Vi=new U;function Ka(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Vi.fromArray(n,r);const a=s.x*Math.abs(Vi.x)+s.y*Math.abs(Vi.y)+s.z*Math.abs(Vi.z),l=e.dot(Vi),c=t.dot(Vi),h=i.dot(Vi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const bv=new jr,lr=new U,$a=new U;class va{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):bv.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;lr.subVectors(e,this.center);const t=lr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(lr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($a.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(lr.copy(e.center).add($a)),this.expandByPoint(lr.copy(e.center).sub($a))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const si=new U,Ja=new U,ao=new U,Mi=new U,Za=new U,lo=new U,Qa=new U;class ih{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,si)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=si.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(si.copy(this.origin).addScaledVector(this.direction,t),si.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Ja.copy(e).add(t).multiplyScalar(.5),ao.copy(t).sub(e).normalize(),Mi.copy(this.origin).sub(Ja);const r=e.distanceTo(t)*.5,o=-this.direction.dot(ao),a=Mi.dot(this.direction),l=-Mi.dot(ao),c=Mi.lengthSq(),h=Math.abs(1-o*o);let f,u,d,g;if(h>0)if(f=o*l-a,u=o*a-l,g=r*h,f>=0)if(u>=-g)if(u<=g){const _=1/h;f*=_,u*=_,d=f*(f+o*u+2*a)+u*(o*f+u+2*l)+c}else u=r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;else u<=-g?(f=Math.max(0,-(-o*r+a)),u=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c):u<=g?(f=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(f=Math.max(0,-(o*r+a)),u=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c);else u=o>0?-r:r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Ja).addScaledVector(ao,u),d}intersectSphere(e,t){si.subVectors(e.center,this.origin);const i=si.dot(this.direction),s=si.dot(si)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-u.z)*f,l=(e.max.z-u.z)*f):(a=(e.max.z-u.z)*f,l=(e.min.z-u.z)*f),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,si)!==null}intersectTriangle(e,t,i,s,r){Za.subVectors(t,e),lo.subVectors(i,e),Qa.crossVectors(Za,lo);let o=this.direction.dot(Qa),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Mi.subVectors(this.origin,e);const l=a*this.direction.dot(lo.crossVectors(Mi,lo));if(l<0)return null;const c=a*this.direction.dot(Za.cross(Mi));if(c<0||l+c>o)return null;const h=-a*Mi.dot(Qa);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class dt{constructor(e,t,i,s,r,o,a,l,c,h,f,u,d,g,_,p){dt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,f,u,d,g,_,p)}set(e,t,i,s,r,o,a,l,c,h,f,u,d,g,_,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=f,m[14]=u,m[3]=d,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new dt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/ys.setFromMatrixColumn(e,0).length(),r=1/ys.setFromMatrixColumn(e,1).length(),o=1/ys.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const u=o*h,d=o*f,g=a*h,_=a*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=d+g*c,t[5]=u-_*c,t[9]=-a*l,t[2]=_-u*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const u=l*h,d=l*f,g=c*h,_=c*f;t[0]=u+_*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*f,t[5]=o*h,t[9]=-a,t[2]=d*a-g,t[6]=_+u*a,t[10]=o*l}else if(e.order==="ZXY"){const u=l*h,d=l*f,g=c*h,_=c*f;t[0]=u-_*a,t[4]=-o*f,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*h,t[9]=_-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const u=o*h,d=o*f,g=a*h,_=a*f;t[0]=l*h,t[4]=g*c-d,t[8]=u*c+_,t[1]=l*f,t[5]=_*c+u,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const u=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=_-u*f,t[8]=g*f+d,t[1]=f,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=d*f+g,t[10]=u-_*f}else if(e.order==="XZY"){const u=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=u*f+_,t[5]=o*h,t[9]=d*f-g,t[2]=g*f-d,t[6]=a*h,t[10]=_*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ev,e,wv)}lookAt(e,t,i){const s=this.elements;return an.subVectors(e,t),an.lengthSq()===0&&(an.z=1),an.normalize(),Si.crossVectors(i,an),Si.lengthSq()===0&&(Math.abs(i.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),Si.crossVectors(i,an)),Si.normalize(),co.crossVectors(an,Si),s[0]=Si.x,s[4]=co.x,s[8]=an.x,s[1]=Si.y,s[5]=co.y,s[9]=an.y,s[2]=Si.z,s[6]=co.z,s[10]=an.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],f=i[5],u=i[9],d=i[13],g=i[2],_=i[6],p=i[10],m=i[14],x=i[3],v=i[7],b=i[11],N=i[15],R=s[0],P=s[4],D=s[8],Z=s[12],y=s[1],w=s[5],z=s[9],W=s[13],$=s[2],ae=s[6],V=s[10],se=s[14],G=s[3],ve=s[7],Me=s[11],we=s[15];return r[0]=o*R+a*y+l*$+c*G,r[4]=o*P+a*w+l*ae+c*ve,r[8]=o*D+a*z+l*V+c*Me,r[12]=o*Z+a*W+l*se+c*we,r[1]=h*R+f*y+u*$+d*G,r[5]=h*P+f*w+u*ae+d*ve,r[9]=h*D+f*z+u*V+d*Me,r[13]=h*Z+f*W+u*se+d*we,r[2]=g*R+_*y+p*$+m*G,r[6]=g*P+_*w+p*ae+m*ve,r[10]=g*D+_*z+p*V+m*Me,r[14]=g*Z+_*W+p*se+m*we,r[3]=x*R+v*y+b*$+N*G,r[7]=x*P+v*w+b*ae+N*ve,r[11]=x*D+v*z+b*V+N*Me,r[15]=x*Z+v*W+b*se+N*we,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],f=e[6],u=e[10],d=e[14],g=e[3],_=e[7],p=e[11],m=e[15];return g*(+r*l*f-s*c*f-r*a*u+i*c*u+s*a*d-i*l*d)+_*(+t*l*d-t*c*u+r*o*u-s*o*d+s*c*h-r*l*h)+p*(+t*c*f-t*a*d-r*o*f+i*o*d+r*a*h-i*c*h)+m*(-s*a*h-t*l*f+t*a*u+s*o*f-i*o*u+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=e[9],u=e[10],d=e[11],g=e[12],_=e[13],p=e[14],m=e[15],x=f*p*c-_*u*c+_*l*d-a*p*d-f*l*m+a*u*m,v=g*u*c-h*p*c-g*l*d+o*p*d+h*l*m-o*u*m,b=h*_*c-g*f*c+g*a*d-o*_*d-h*a*m+o*f*m,N=g*f*l-h*_*l-g*a*u+o*_*u+h*a*p-o*f*p,R=t*x+i*v+s*b+r*N;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/R;return e[0]=x*P,e[1]=(_*u*r-f*p*r-_*s*d+i*p*d+f*s*m-i*u*m)*P,e[2]=(a*p*r-_*l*r+_*s*c-i*p*c-a*s*m+i*l*m)*P,e[3]=(f*l*r-a*u*r-f*s*c+i*u*c+a*s*d-i*l*d)*P,e[4]=v*P,e[5]=(h*p*r-g*u*r+g*s*d-t*p*d-h*s*m+t*u*m)*P,e[6]=(g*l*r-o*p*r-g*s*c+t*p*c+o*s*m-t*l*m)*P,e[7]=(o*u*r-h*l*r+h*s*c-t*u*c-o*s*d+t*l*d)*P,e[8]=b*P,e[9]=(g*f*r-h*_*r-g*i*d+t*_*d+h*i*m-t*f*m)*P,e[10]=(o*_*r-g*a*r+g*i*c-t*_*c-o*i*m+t*a*m)*P,e[11]=(h*a*r-o*f*r-h*i*c+t*f*c+o*i*d-t*a*d)*P,e[12]=N*P,e[13]=(h*_*s-g*f*s+g*i*u-t*_*u-h*i*p+t*f*p)*P,e[14]=(g*a*s-o*_*s-g*i*l+t*_*l+o*i*p-t*a*p)*P,e[15]=(o*f*s-h*a*s+h*i*l-t*f*l-o*i*u+t*a*u)*P,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,f=a+a,u=r*c,d=r*h,g=r*f,_=o*h,p=o*f,m=a*f,x=l*c,v=l*h,b=l*f,N=i.x,R=i.y,P=i.z;return s[0]=(1-(_+m))*N,s[1]=(d+b)*N,s[2]=(g-v)*N,s[3]=0,s[4]=(d-b)*R,s[5]=(1-(u+m))*R,s[6]=(p+x)*R,s[7]=0,s[8]=(g+v)*P,s[9]=(p-x)*P,s[10]=(1-(u+_))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=ys.set(s[0],s[1],s[2]).length();const o=ys.set(s[4],s[5],s[6]).length(),a=ys.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],wn.copy(this);const c=1/r,h=1/o,f=1/a;return wn.elements[0]*=c,wn.elements[1]*=c,wn.elements[2]*=c,wn.elements[4]*=h,wn.elements[5]*=h,wn.elements[6]*=h,wn.elements[8]*=f,wn.elements[9]*=f,wn.elements[10]*=f,t.setFromRotationMatrix(wn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=pi){const l=this.elements,c=2*r/(t-e),h=2*r/(i-s),f=(t+e)/(t-e),u=(i+s)/(i-s);let d,g;if(a===pi)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===ea)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=pi){const l=this.elements,c=1/(t-e),h=1/(i-s),f=1/(o-r),u=(t+e)*c,d=(i+s)*h;let g,_;if(a===pi)g=(o+r)*f,_=-2*f;else if(a===ea)g=r*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ys=new U,wn=new dt,Ev=new U(0,0,0),wv=new U(1,1,1),Si=new U,co=new U,an=new U,yu=new dt,Mu=new qr;class Zn{constructor(e=0,t=0,i=0,s=Zn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(Ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ht(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ht(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ht(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ht(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return yu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(yu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Mu.setFromEuler(this),this.setFromQuaternion(Mu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zn.DEFAULT_ORDER="XYZ";class sh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Av=0;const Su=new U,Ms=new qr,ri=new dt,ho=new U,cr=new U,Tv=new U,Rv=new qr,bu=new U(1,0,0),Eu=new U(0,1,0),wu=new U(0,0,1),Au={type:"added"},Cv={type:"removed"},Ss={type:"childadded",child:null},el={type:"childremoved",child:null};class Dt extends Zs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Av++}),this.uuid=Qs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dt.DEFAULT_UP.clone();const e=new U,t=new Zn,i=new qr,s=new U(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new dt},normalMatrix:{value:new Ke}}),this.matrix=new dt,this.matrixWorld=new dt,this.matrixAutoUpdate=Dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ms.setFromAxisAngle(e,t),this.quaternion.multiply(Ms),this}rotateOnWorldAxis(e,t){return Ms.setFromAxisAngle(e,t),this.quaternion.premultiply(Ms),this}rotateX(e){return this.rotateOnAxis(bu,e)}rotateY(e){return this.rotateOnAxis(Eu,e)}rotateZ(e){return this.rotateOnAxis(wu,e)}translateOnAxis(e,t){return Su.copy(e).applyQuaternion(this.quaternion),this.position.add(Su.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(bu,e)}translateY(e){return this.translateOnAxis(Eu,e)}translateZ(e){return this.translateOnAxis(wu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ri.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ho.copy(e):ho.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),cr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ri.lookAt(cr,ho,this.up):ri.lookAt(ho,cr,this.up),this.quaternion.setFromRotationMatrix(ri),s&&(ri.extractRotation(s.matrixWorld),Ms.setFromRotationMatrix(ri),this.quaternion.premultiply(Ms.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Au),Ss.child=e,this.dispatchEvent(Ss),Ss.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Cv),el.child=e,this.dispatchEvent(el),el.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(ri),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Au),Ss.child=e,this.dispatchEvent(Ss),Ss.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cr,e,Tv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cr,Rv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),f=o(e.shapes),u=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),u.length>0&&(i.skeletons=u),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Dt.DEFAULT_UP=new U(0,1,0);Dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const An=new U,oi=new U,tl=new U,ai=new U,bs=new U,Es=new U,Tu=new U,nl=new U,il=new U,sl=new U,rl=new ct,ol=new ct,al=new ct;class Ln{constructor(e=new U,t=new U,i=new U){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),An.subVectors(e,t),s.cross(An);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){An.subVectors(s,t),oi.subVectors(i,t),tl.subVectors(e,t);const o=An.dot(An),a=An.dot(oi),l=An.dot(tl),c=oi.dot(oi),h=oi.dot(tl),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;const u=1/f,d=(c*l-a*h)*u,g=(o*h-a*l)*u;return r.set(1-d-g,g,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,ai)===null?!1:ai.x>=0&&ai.y>=0&&ai.x+ai.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,ai)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ai.x),l.addScaledVector(o,ai.y),l.addScaledVector(a,ai.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return rl.setScalar(0),ol.setScalar(0),al.setScalar(0),rl.fromBufferAttribute(e,t),ol.fromBufferAttribute(e,i),al.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(rl,r.x),o.addScaledVector(ol,r.y),o.addScaledVector(al,r.z),o}static isFrontFacing(e,t,i,s){return An.subVectors(i,t),oi.subVectors(e,t),An.cross(oi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return An.subVectors(this.c,this.b),oi.subVectors(this.a,this.b),An.cross(oi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ln.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ln.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Ln.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Ln.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ln.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;bs.subVectors(s,i),Es.subVectors(r,i),nl.subVectors(e,i);const l=bs.dot(nl),c=Es.dot(nl);if(l<=0&&c<=0)return t.copy(i);il.subVectors(e,s);const h=bs.dot(il),f=Es.dot(il);if(h>=0&&f<=h)return t.copy(s);const u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(bs,o);sl.subVectors(e,r);const d=bs.dot(sl),g=Es.dot(sl);if(g>=0&&d<=g)return t.copy(r);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Es,a);const p=h*g-d*f;if(p<=0&&f-h>=0&&d-g>=0)return Tu.subVectors(r,s),a=(f-h)/(f-h+(d-g)),t.copy(s).addScaledVector(Tu,a);const m=1/(p+_+u);return o=_*m,a=u*m,t.copy(i).addScaledVector(bs,o).addScaledVector(Es,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ep={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bi={h:0,s:0,l:0},uo={h:0,s:0,l:0};function ll(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class $e{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=nn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=ot.workingColorSpace){return this.r=e,this.g=t,this.b=i,ot.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=ot.workingColorSpace){if(e=fv(e,1),t=Ht(t,0,1),i=Ht(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=ll(o,r,e+1/3),this.g=ll(o,r,e),this.b=ll(o,r,e-1/3)}return ot.toWorkingColorSpace(this,s),this}setStyle(e,t=nn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=nn){const i=ep[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Bs(e.r),this.g=Bs(e.g),this.b=Bs(e.b),this}copyLinearToSRGB(e){return this.r=Ya(e.r),this.g=Ya(e.g),this.b=Ya(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=nn){return ot.fromWorkingColorSpace(Bt.copy(this),e),Math.round(Ht(Bt.r*255,0,255))*65536+Math.round(Ht(Bt.g*255,0,255))*256+Math.round(Ht(Bt.b*255,0,255))}getHexString(e=nn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ot.workingColorSpace){ot.fromWorkingColorSpace(Bt.copy(this),t);const i=Bt.r,s=Bt.g,r=Bt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ot.workingColorSpace){return ot.fromWorkingColorSpace(Bt.copy(this),t),e.r=Bt.r,e.g=Bt.g,e.b=Bt.b,e}getStyle(e=nn){ot.fromWorkingColorSpace(Bt.copy(this),e);const t=Bt.r,i=Bt.g,s=Bt.b;return e!==nn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(bi),this.setHSL(bi.h+e,bi.s+t,bi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(bi),e.getHSL(uo);const i=Wa(bi.h,uo.h,t),s=Wa(bi.s,uo.s,t),r=Wa(bi.l,uo.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bt=new $e;$e.NAMES=ep;let Pv=0;class us extends Zs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Pv++}),this.uuid=Qs(),this.name="",this.type="Material",this.blending=Fs,this.side=Ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fl,this.blendDst=kl,this.blendEquation=Ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=Ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=du,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ms,this.stencilZFail=ms,this.stencilZPass=ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Fs&&(i.blending=this.blending),this.side!==Ui&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Fl&&(i.blendSrc=this.blendSrc),this.blendDst!==kl&&(i.blendDst=this.blendDst),this.blendEquation!==Ji&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ws&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==du&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ms&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ms&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ms&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ft extends us{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.combine=Od,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Tt=new U,fo=new Re;class dn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=pu,this.updateRanges=[],this.gpuType=di,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)fo.fromBufferAttribute(this,t),fo.applyMatrix3(e),this.setXY(t,fo.x,fo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix3(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=rr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=en(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=rr(t,this.array)),t}setX(e,t){return this.normalized&&(t=en(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=rr(t,this.array)),t}setY(e,t){return this.normalized&&(t=en(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=rr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=en(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=rr(t,this.array)),t}setW(e,t){return this.normalized&&(t=en(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=en(t,this.array),i=en(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=en(t,this.array),i=en(i,this.array),s=en(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=en(t,this.array),i=en(i,this.array),s=en(s,this.array),r=en(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==pu&&(e.usage=this.usage),e}}class tp extends dn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class np extends dn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class vt extends dn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Lv=0;const gn=new dt,cl=new Dt,ws=new U,ln=new jr,hr=new jr,It=new U;class Wt extends Zs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Lv++}),this.uuid=Qs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Jd(e)?np:tp)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ke().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return gn.makeRotationFromQuaternion(e),this.applyMatrix4(gn),this}rotateX(e){return gn.makeRotationX(e),this.applyMatrix4(gn),this}rotateY(e){return gn.makeRotationY(e),this.applyMatrix4(gn),this}rotateZ(e){return gn.makeRotationZ(e),this.applyMatrix4(gn),this}translate(e,t,i){return gn.makeTranslation(e,t,i),this.applyMatrix4(gn),this}scale(e,t,i){return gn.makeScale(e,t,i),this.applyMatrix4(gn),this}lookAt(e){return cl.lookAt(e),cl.updateMatrix(),this.applyMatrix4(cl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ws).negate(),this.translate(ws.x,ws.y,ws.z),this}setFromPoints(e){const t=[];for(let i=0,s=e.length;i<s;i++){const r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new vt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];ln.setFromBufferAttribute(r),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new va);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(ln.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];hr.setFromBufferAttribute(a),this.morphTargetsRelative?(It.addVectors(ln.min,hr.min),ln.expandByPoint(It),It.addVectors(ln.max,hr.max),ln.expandByPoint(It)):(ln.expandByPoint(hr.min),ln.expandByPoint(hr.max))}ln.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)It.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(It));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)It.fromBufferAttribute(a,c),l&&(ws.fromBufferAttribute(e,c),It.add(ws)),s=Math.max(s,i.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new dn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<i.count;D++)a[D]=new U,l[D]=new U;const c=new U,h=new U,f=new U,u=new Re,d=new Re,g=new Re,_=new U,p=new U;function m(D,Z,y){c.fromBufferAttribute(i,D),h.fromBufferAttribute(i,Z),f.fromBufferAttribute(i,y),u.fromBufferAttribute(r,D),d.fromBufferAttribute(r,Z),g.fromBufferAttribute(r,y),h.sub(c),f.sub(c),d.sub(u),g.sub(u);const w=1/(d.x*g.y-g.x*d.y);isFinite(w)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(w),p.copy(f).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(w),a[D].add(_),a[Z].add(_),a[y].add(_),l[D].add(p),l[Z].add(p),l[y].add(p))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let D=0,Z=x.length;D<Z;++D){const y=x[D],w=y.start,z=y.count;for(let W=w,$=w+z;W<$;W+=3)m(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const v=new U,b=new U,N=new U,R=new U;function P(D){N.fromBufferAttribute(s,D),R.copy(N);const Z=a[D];v.copy(Z),v.sub(N.multiplyScalar(N.dot(Z))).normalize(),b.crossVectors(R,Z);const w=b.dot(l[D])<0?-1:1;o.setXYZW(D,v.x,v.y,v.z,w)}for(let D=0,Z=x.length;D<Z;++D){const y=x[D],w=y.start,z=y.count;for(let W=w,$=w+z;W<$;W+=3)P(e.getX(W+0)),P(e.getX(W+1)),P(e.getX(W+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new dn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,d=i.count;u<d;u++)i.setXYZ(u,0,0,0);const s=new U,r=new U,o=new U,a=new U,l=new U,c=new U,h=new U,f=new U;if(e)for(let u=0,d=e.count;u<d;u+=3){const g=e.getX(u+0),_=e.getX(u+1),p=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,p),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,d=t.count;u<d;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)It.fromBufferAttribute(e,t),It.normalize(),e.setXYZ(t,It.x,It.y,It.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,f=a.normalized,u=new c.constructor(l.length*h);let d=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*h;for(let m=0;m<h;m++)u[g++]=c[d++]}return new dn(u,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Wt,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,f=c.length;h<f;h++){const u=c[h],d=e(u,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){const d=c[f];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],f=r[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ru=new dt,Gi=new ih,po=new va,Cu=new U,mo=new U,go=new U,vo=new U,hl=new U,_o=new U,Pu=new U,xo=new U;class Je extends Dt{constructor(e=new Wt,t=new Ft){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){_o.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],f=r[l];h!==0&&(hl.fromBufferAttribute(f,e),o?_o.addScaledVector(hl,h):_o.addScaledVector(hl.sub(t),h))}t.add(_o)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),po.copy(i.boundingSphere),po.applyMatrix4(r),Gi.copy(e.ray).recast(e.near),!(po.containsPoint(Gi.origin)===!1&&(Gi.intersectSphere(po,Cu)===null||Gi.origin.distanceToSquared(Cu)>(e.far-e.near)**2))&&(Ru.copy(r).invert(),Gi.copy(e.ray).applyMatrix4(Ru),!(i.boundingBox!==null&&Gi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Gi)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){const p=u[g],m=o[p.materialIndex],x=Math.max(p.start,d.start),v=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let b=x,N=v;b<N;b+=3){const R=a.getX(b),P=a.getX(b+1),D=a.getX(b+2);s=yo(this,m,e,i,c,h,f,R,P,D),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){const x=a.getX(p),v=a.getX(p+1),b=a.getX(p+2);s=yo(this,o,e,i,c,h,f,x,v,b),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){const p=u[g],m=o[p.materialIndex],x=Math.max(p.start,d.start),v=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let b=x,N=v;b<N;b+=3){const R=b,P=b+1,D=b+2;s=yo(this,m,e,i,c,h,f,R,P,D),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){const x=p,v=p+1,b=p+2;s=yo(this,o,e,i,c,h,f,x,v,b),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function Iv(n,e,t,i,s,r,o,a){let l;if(e.side===sn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Ui,a),l===null)return null;xo.copy(a),xo.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(xo);return c<t.near||c>t.far?null:{distance:c,point:xo.clone(),object:n}}function yo(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,mo),n.getVertexPosition(l,go),n.getVertexPosition(c,vo);const h=Iv(n,e,t,i,mo,go,vo,Pu);if(h){const f=new U;Ln.getBarycoord(Pu,mo,go,vo,f),s&&(h.uv=Ln.getInterpolatedAttribute(s,a,l,c,f,new Re)),r&&(h.uv1=Ln.getInterpolatedAttribute(r,a,l,c,f,new Re)),o&&(h.normal=Ln.getInterpolatedAttribute(o,a,l,c,f,new U),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new U,materialIndex:0};Ln.getNormal(mo,go,vo,u.normal),h.face=u,h.barycoord=f}return h}class Un extends Wt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],f=[];let u=0,d=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new vt(c,3)),this.setAttribute("normal",new vt(h,3)),this.setAttribute("uv",new vt(f,2));function g(_,p,m,x,v,b,N,R,P,D,Z){const y=b/P,w=N/D,z=b/2,W=N/2,$=R/2,ae=P+1,V=D+1;let se=0,G=0;const ve=new U;for(let Me=0;Me<V;Me++){const we=Me*w-W;for(let We=0;We<ae;We++){const Ze=We*y-z;ve[_]=Ze*x,ve[p]=we*v,ve[m]=$,c.push(ve.x,ve.y,ve.z),ve[_]=0,ve[p]=0,ve[m]=R>0?1:-1,h.push(ve.x,ve.y,ve.z),f.push(We/P),f.push(1-Me/D),se+=1}}for(let Me=0;Me<D;Me++)for(let we=0;we<P;we++){const We=u+we+ae*Me,Ze=u+we+ae*(Me+1),ie=u+(we+1)+ae*(Me+1),ue=u+(we+1)+ae*Me;l.push(We,Ze,ue),l.push(Ze,ie,ue),G+=6}a.addGroup(d,G,Z),d+=G,u+=se}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Un(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ks(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function qt(n){const e={};for(let t=0;t<n.length;t++){const i=Ks(n[t]);for(const s in i)e[s]=i[s]}return e}function Dv(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function ip(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}const Nv={clone:Ks,merge:qt};var Uv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ov=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Oi extends us{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Uv,this.fragmentShader=Ov,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ks(e.uniforms),this.uniformsGroups=Dv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class sp extends Dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dt,this.projectionMatrix=new dt,this.projectionMatrixInverse=new dt,this.coordinateSystem=pi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ei=new U,Lu=new Re,Iu=new Re;class _n extends sp{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Sc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ga*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Sc*2*Math.atan(Math.tan(Ga*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ei.x,Ei.y).multiplyScalar(-e/Ei.z),Ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ei.x,Ei.y).multiplyScalar(-e/Ei.z)}getViewSize(e,t){return this.getViewBounds(e,Lu,Iu),t.subVectors(Iu,Lu)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ga*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const As=-90,Ts=1;class Fv extends Dt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new _n(As,Ts,e,t);s.layers=this.layers,this.add(s);const r=new _n(As,Ts,e,t);r.layers=this.layers,this.add(r);const o=new _n(As,Ts,e,t);o.layers=this.layers,this.add(o);const a=new _n(As,Ts,e,t);a.layers=this.layers,this.add(a);const l=new _n(As,Ts,e,t);l.layers=this.layers,this.add(l);const c=new _n(As,Ts,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===pi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ea)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(f,u,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class rp extends Jt{constructor(e,t,i,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Xs,super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class kv extends ls{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new rp(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Pn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Un(5,5,5),r=new Oi({name:"CubemapFromEquirect",uniforms:Ks(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:sn,blending:Li});r.uniforms.tEquirect.value=t;const o=new Je(s,r),a=t.minFilter;return t.minFilter===ns&&(t.minFilter=Pn),new Fv(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}const ul=new U,Bv=new U,zv=new Ke;class Ai{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=ul.subVectors(i,t).cross(Bv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(ul),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||zv.getNormalMatrix(e),s=this.coplanarPoint(ul).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Wi=new va,Mo=new U;class rh{constructor(e=new Ai,t=new Ai,i=new Ai,s=new Ai,r=new Ai,o=new Ai){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=pi){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],f=s[6],u=s[7],d=s[8],g=s[9],_=s[10],p=s[11],m=s[12],x=s[13],v=s[14],b=s[15];if(i[0].setComponents(l-r,u-c,p-d,b-m).normalize(),i[1].setComponents(l+r,u+c,p+d,b+m).normalize(),i[2].setComponents(l+o,u+h,p+g,b+x).normalize(),i[3].setComponents(l-o,u-h,p-g,b-x).normalize(),i[4].setComponents(l-a,u-f,p-_,b-v).normalize(),t===pi)i[5].setComponents(l+a,u+f,p+_,b+v).normalize();else if(t===ea)i[5].setComponents(a,f,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Wi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Wi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Wi)}intersectsSprite(e){return Wi.center.set(0,0,0),Wi.radius=.7071067811865476,Wi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Wi)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Mo.x=s.normal.x>0?e.max.x:e.min.x,Mo.y=s.normal.y>0?e.max.y:e.min.y,Mo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Mo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function op(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Hv(n){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,f=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const h=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,h);else{f.sort((d,g)=>d.start-g.start);let u=0;for(let d=1;d<f.length;d++){const g=f[u],_=f[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,f[u]=_)}f.length=u+1;for(let d=0,g=f.length;d<g;d++){const _=f[d];n.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class fs extends Wt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,f=e/a,u=t/l,d=[],g=[],_=[],p=[];for(let m=0;m<h;m++){const x=m*u-o;for(let v=0;v<c;v++){const b=v*f-r;g.push(b,-x,0),_.push(0,0,1),p.push(v/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let x=0;x<a;x++){const v=x+c*m,b=x+c*(m+1),N=x+1+c*(m+1),R=x+1+c*m;d.push(v,b,R),d.push(b,N,R)}this.setIndex(d),this.setAttribute("position",new vt(g,3)),this.setAttribute("normal",new vt(_,3)),this.setAttribute("uv",new vt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fs(e.width,e.height,e.widthSegments,e.heightSegments)}}var Vv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gv=`#ifdef USE_ALPHAHASH
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
#endif`,Wv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Xv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jv=`#ifdef USE_AOMAP
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
#endif`,Kv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$v=`#ifdef USE_BATCHING
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
#endif`,Jv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Zv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Qv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,e_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,t_=`#ifdef USE_IRIDESCENCE
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
#endif`,n_=`#ifdef USE_BUMPMAP
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
#endif`,i_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,s_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,r_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,o_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,a_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,l_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,c_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,h_=`#if defined( USE_COLOR_ALPHA )
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
#endif`,u_=`#define PI 3.141592653589793
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
} // validated`,f_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,d_=`vec3 transformedNormal = objectNormal;
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
#endif`,p_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,m_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,g_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,v_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,__="gl_FragColor = linearToOutputTexel( gl_FragColor );",x_=`
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
}`,y_=`#ifdef USE_ENVMAP
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
#endif`,M_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,S_=`#ifdef USE_ENVMAP
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
#endif`,b_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,E_=`#ifdef USE_ENVMAP
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
#endif`,w_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,A_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,T_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,R_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,C_=`#ifdef USE_GRADIENTMAP
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
}`,P_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,L_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,I_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,D_=`uniform bool receiveShadow;
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
#endif`,N_=`#ifdef USE_ENVMAP
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
#endif`,U_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,O_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,F_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,k_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,B_=`PhysicalMaterial material;
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
#endif`,z_=`struct PhysicalMaterial {
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
}`,H_=`
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
#endif`,V_=`#if defined( RE_IndirectDiffuse )
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
#endif`,G_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,W_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,X_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Y_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,q_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,j_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,K_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,J_=`#if defined( USE_POINTS_UV )
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
#endif`,Z_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Q_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ex=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,tx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ix=`#ifdef USE_MORPHTARGETS
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
#endif`,sx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ox=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ax=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hx=`#ifdef USE_NORMALMAP
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
#endif`,ux=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,px=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,vx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_x=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Mx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ex=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ax=`float getShadowMask() {
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
}`,Tx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Rx=`#ifdef USE_SKINNING
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
#endif`,Cx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Px=`#ifdef USE_SKINNING
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
#endif`,Lx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ix=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Dx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Nx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ux=`#ifdef USE_TRANSMISSION
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
#endif`,Ox=`#ifdef USE_TRANSMISSION
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
#endif`,Fx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Hx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vx=`uniform sampler2D t2D;
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
}`,Gx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Xx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qx=`#include <common>
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
}`,jx=`#if DEPTH_PACKING == 3200
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
}`,Kx=`#define DISTANCE
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
}`,$x=`#define DISTANCE
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
}`,Jx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Zx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qx=`uniform float scale;
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
}`,ey=`uniform vec3 diffuse;
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
}`,ty=`#include <common>
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
}`,ny=`uniform vec3 diffuse;
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
}`,iy=`#define LAMBERT
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
}`,sy=`#define LAMBERT
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
}`,ry=`#define MATCAP
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
}`,oy=`#define MATCAP
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
}`,ay=`#define NORMAL
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
}`,ly=`#define NORMAL
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
}`,cy=`#define PHONG
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
}`,hy=`#define PHONG
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
}`,uy=`#define STANDARD
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
}`,fy=`#define STANDARD
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
}`,dy=`#define TOON
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
}`,py=`#define TOON
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
}`,my=`uniform float size;
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
}`,gy=`uniform vec3 diffuse;
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
}`,vy=`#include <common>
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
}`,_y=`uniform vec3 color;
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
}`,xy=`uniform float rotation;
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
}`,yy=`uniform vec3 diffuse;
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
}`,je={alphahash_fragment:Vv,alphahash_pars_fragment:Gv,alphamap_fragment:Wv,alphamap_pars_fragment:Xv,alphatest_fragment:Yv,alphatest_pars_fragment:qv,aomap_fragment:jv,aomap_pars_fragment:Kv,batching_pars_vertex:$v,batching_vertex:Jv,begin_vertex:Zv,beginnormal_vertex:Qv,bsdfs:e_,iridescence_fragment:t_,bumpmap_pars_fragment:n_,clipping_planes_fragment:i_,clipping_planes_pars_fragment:s_,clipping_planes_pars_vertex:r_,clipping_planes_vertex:o_,color_fragment:a_,color_pars_fragment:l_,color_pars_vertex:c_,color_vertex:h_,common:u_,cube_uv_reflection_fragment:f_,defaultnormal_vertex:d_,displacementmap_pars_vertex:p_,displacementmap_vertex:m_,emissivemap_fragment:g_,emissivemap_pars_fragment:v_,colorspace_fragment:__,colorspace_pars_fragment:x_,envmap_fragment:y_,envmap_common_pars_fragment:M_,envmap_pars_fragment:S_,envmap_pars_vertex:b_,envmap_physical_pars_fragment:N_,envmap_vertex:E_,fog_vertex:w_,fog_pars_vertex:A_,fog_fragment:T_,fog_pars_fragment:R_,gradientmap_pars_fragment:C_,lightmap_pars_fragment:P_,lights_lambert_fragment:L_,lights_lambert_pars_fragment:I_,lights_pars_begin:D_,lights_toon_fragment:U_,lights_toon_pars_fragment:O_,lights_phong_fragment:F_,lights_phong_pars_fragment:k_,lights_physical_fragment:B_,lights_physical_pars_fragment:z_,lights_fragment_begin:H_,lights_fragment_maps:V_,lights_fragment_end:G_,logdepthbuf_fragment:W_,logdepthbuf_pars_fragment:X_,logdepthbuf_pars_vertex:Y_,logdepthbuf_vertex:q_,map_fragment:j_,map_pars_fragment:K_,map_particle_fragment:$_,map_particle_pars_fragment:J_,metalnessmap_fragment:Z_,metalnessmap_pars_fragment:Q_,morphinstance_vertex:ex,morphcolor_vertex:tx,morphnormal_vertex:nx,morphtarget_pars_vertex:ix,morphtarget_vertex:sx,normal_fragment_begin:rx,normal_fragment_maps:ox,normal_pars_fragment:ax,normal_pars_vertex:lx,normal_vertex:cx,normalmap_pars_fragment:hx,clearcoat_normal_fragment_begin:ux,clearcoat_normal_fragment_maps:fx,clearcoat_pars_fragment:dx,iridescence_pars_fragment:px,opaque_fragment:mx,packing:gx,premultiplied_alpha_fragment:vx,project_vertex:_x,dithering_fragment:xx,dithering_pars_fragment:yx,roughnessmap_fragment:Mx,roughnessmap_pars_fragment:Sx,shadowmap_pars_fragment:bx,shadowmap_pars_vertex:Ex,shadowmap_vertex:wx,shadowmask_pars_fragment:Ax,skinbase_vertex:Tx,skinning_pars_vertex:Rx,skinning_vertex:Cx,skinnormal_vertex:Px,specularmap_fragment:Lx,specularmap_pars_fragment:Ix,tonemapping_fragment:Dx,tonemapping_pars_fragment:Nx,transmission_fragment:Ux,transmission_pars_fragment:Ox,uv_pars_fragment:Fx,uv_pars_vertex:kx,uv_vertex:Bx,worldpos_vertex:zx,background_vert:Hx,background_frag:Vx,backgroundCube_vert:Gx,backgroundCube_frag:Wx,cube_vert:Xx,cube_frag:Yx,depth_vert:qx,depth_frag:jx,distanceRGBA_vert:Kx,distanceRGBA_frag:$x,equirect_vert:Jx,equirect_frag:Zx,linedashed_vert:Qx,linedashed_frag:ey,meshbasic_vert:ty,meshbasic_frag:ny,meshlambert_vert:iy,meshlambert_frag:sy,meshmatcap_vert:ry,meshmatcap_frag:oy,meshnormal_vert:ay,meshnormal_frag:ly,meshphong_vert:cy,meshphong_frag:hy,meshphysical_vert:uy,meshphysical_frag:fy,meshtoon_vert:dy,meshtoon_frag:py,points_vert:my,points_frag:gy,shadow_vert:vy,shadow_frag:_y,sprite_vert:xy,sprite_frag:yy},_e={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new Re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new Re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},Gn={basic:{uniforms:qt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:qt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new $e(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:qt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:qt([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:qt([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new $e(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:qt([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:qt([_e.points,_e.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:qt([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:qt([_e.common,_e.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:qt([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:qt([_e.sprite,_e.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:qt([_e.common,_e.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:qt([_e.lights,_e.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};Gn.physical={uniforms:qt([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new Re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new Re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new Re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const So={r:0,b:0,g:0},Xi=new Zn,My=new dt;function Sy(n,e,t,i,s,r,o){const a=new $e(0);let l=r===!0?0:1,c,h,f=null,u=0,d=null;function g(x){let v=x.isScene===!0?x.background:null;return v&&v.isTexture&&(v=(x.backgroundBlurriness>0?t:e).get(v)),v}function _(x){let v=!1;const b=g(x);b===null?m(a,l):b&&b.isColor&&(m(b,1),v=!0);const N=n.xr.getEnvironmentBlendMode();N==="additive"?i.buffers.color.setClear(0,0,0,1,o):N==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(x,v){const b=g(v);b&&(b.isCubeTexture||b.mapping===ma)?(h===void 0&&(h=new Je(new Un(1,1,1),new Oi({name:"BackgroundCubeMaterial",uniforms:Ks(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(N,R,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Xi.copy(v.backgroundRotation),Xi.x*=-1,Xi.y*=-1,Xi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Xi.y*=-1,Xi.z*=-1),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(My.makeRotationFromEuler(Xi)),h.material.toneMapped=ot.getTransfer(b.colorSpace)!==gt,(f!==b||u!==b.version||d!==n.toneMapping)&&(h.material.needsUpdate=!0,f=b,u=b.version,d=n.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new Je(new fs(2,2),new Oi({name:"BackgroundMaterial",uniforms:Ks(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:Ui,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=ot.getTransfer(b.colorSpace)!==gt,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(f!==b||u!==b.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,f=b,u=b.version,d=n.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function m(x,v){x.getRGB(So,ip(n)),i.buffers.color.setClear(So.r,So.g,So.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(x,v=1){a.set(x),l=v,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,m(a,l)},render:_,addToRenderList:p}}function by(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null);let r=s,o=!1;function a(y,w,z,W,$){let ae=!1;const V=f(W,z,w);r!==V&&(r=V,c(r.object)),ae=d(y,W,z,$),ae&&g(y,W,z,$),$!==null&&e.update($,n.ELEMENT_ARRAY_BUFFER),(ae||o)&&(o=!1,b(y,w,z,W),$!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function l(){return n.createVertexArray()}function c(y){return n.bindVertexArray(y)}function h(y){return n.deleteVertexArray(y)}function f(y,w,z){const W=z.wireframe===!0;let $=i[y.id];$===void 0&&($={},i[y.id]=$);let ae=$[w.id];ae===void 0&&(ae={},$[w.id]=ae);let V=ae[W];return V===void 0&&(V=u(l()),ae[W]=V),V}function u(y){const w=[],z=[],W=[];for(let $=0;$<t;$++)w[$]=0,z[$]=0,W[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:z,attributeDivisors:W,object:y,attributes:{},index:null}}function d(y,w,z,W){const $=r.attributes,ae=w.attributes;let V=0;const se=z.getAttributes();for(const G in se)if(se[G].location>=0){const Me=$[G];let we=ae[G];if(we===void 0&&(G==="instanceMatrix"&&y.instanceMatrix&&(we=y.instanceMatrix),G==="instanceColor"&&y.instanceColor&&(we=y.instanceColor)),Me===void 0||Me.attribute!==we||we&&Me.data!==we.data)return!0;V++}return r.attributesNum!==V||r.index!==W}function g(y,w,z,W){const $={},ae=w.attributes;let V=0;const se=z.getAttributes();for(const G in se)if(se[G].location>=0){let Me=ae[G];Me===void 0&&(G==="instanceMatrix"&&y.instanceMatrix&&(Me=y.instanceMatrix),G==="instanceColor"&&y.instanceColor&&(Me=y.instanceColor));const we={};we.attribute=Me,Me&&Me.data&&(we.data=Me.data),$[G]=we,V++}r.attributes=$,r.attributesNum=V,r.index=W}function _(){const y=r.newAttributes;for(let w=0,z=y.length;w<z;w++)y[w]=0}function p(y){m(y,0)}function m(y,w){const z=r.newAttributes,W=r.enabledAttributes,$=r.attributeDivisors;z[y]=1,W[y]===0&&(n.enableVertexAttribArray(y),W[y]=1),$[y]!==w&&(n.vertexAttribDivisor(y,w),$[y]=w)}function x(){const y=r.newAttributes,w=r.enabledAttributes;for(let z=0,W=w.length;z<W;z++)w[z]!==y[z]&&(n.disableVertexAttribArray(z),w[z]=0)}function v(y,w,z,W,$,ae,V){V===!0?n.vertexAttribIPointer(y,w,z,$,ae):n.vertexAttribPointer(y,w,z,W,$,ae)}function b(y,w,z,W){_();const $=W.attributes,ae=z.getAttributes(),V=w.defaultAttributeValues;for(const se in ae){const G=ae[se];if(G.location>=0){let ve=$[se];if(ve===void 0&&(se==="instanceMatrix"&&y.instanceMatrix&&(ve=y.instanceMatrix),se==="instanceColor"&&y.instanceColor&&(ve=y.instanceColor)),ve!==void 0){const Me=ve.normalized,we=ve.itemSize,We=e.get(ve);if(We===void 0)continue;const Ze=We.buffer,ie=We.type,ue=We.bytesPerElement,Se=ie===n.INT||ie===n.UNSIGNED_INT||ve.gpuType===$c;if(ve.isInterleavedBufferAttribute){const xe=ve.data,me=xe.stride,I=ve.offset;if(xe.isInstancedInterleavedBuffer){for(let ze=0;ze<G.locationSize;ze++)m(G.location+ze,xe.meshPerAttribute);y.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let ze=0;ze<G.locationSize;ze++)p(G.location+ze);n.bindBuffer(n.ARRAY_BUFFER,Ze);for(let ze=0;ze<G.locationSize;ze++)v(G.location+ze,we/G.locationSize,ie,Me,me*ue,(I+we/G.locationSize*ze)*ue,Se)}else{if(ve.isInstancedBufferAttribute){for(let xe=0;xe<G.locationSize;xe++)m(G.location+xe,ve.meshPerAttribute);y.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let xe=0;xe<G.locationSize;xe++)p(G.location+xe);n.bindBuffer(n.ARRAY_BUFFER,Ze);for(let xe=0;xe<G.locationSize;xe++)v(G.location+xe,we/G.locationSize,ie,Me,we*ue,we/G.locationSize*xe*ue,Se)}}else if(V!==void 0){const Me=V[se];if(Me!==void 0)switch(Me.length){case 2:n.vertexAttrib2fv(G.location,Me);break;case 3:n.vertexAttrib3fv(G.location,Me);break;case 4:n.vertexAttrib4fv(G.location,Me);break;default:n.vertexAttrib1fv(G.location,Me)}}}}x()}function N(){D();for(const y in i){const w=i[y];for(const z in w){const W=w[z];for(const $ in W)h(W[$].object),delete W[$];delete w[z]}delete i[y]}}function R(y){if(i[y.id]===void 0)return;const w=i[y.id];for(const z in w){const W=w[z];for(const $ in W)h(W[$].object),delete W[$];delete w[z]}delete i[y.id]}function P(y){for(const w in i){const z=i[w];if(z[y.id]===void 0)continue;const W=z[y.id];for(const $ in W)h(W[$].object),delete W[$];delete z[y.id]}}function D(){Z(),o=!0,r!==s&&(r=s,c(r.object))}function Z(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:D,resetDefaultState:Z,dispose:N,releaseStatesOfGeometry:R,releaseStatesOfProgram:P,initAttributes:_,enableAttribute:p,disableUnusedAttributes:x}}function Ey(n,e,t){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function o(c,h,f){f!==0&&(n.drawArraysInstanced(i,c,h,f),t.update(h,i,f))}function a(c,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,f);let d=0;for(let g=0;g<f;g++)d+=h[g];t.update(d,i,1)}function l(c,h,f,u){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],h[g],u[g]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,h,0,u,0,f);let g=0;for(let _=0;_<f;_++)g+=h[_];for(let _=0;_<u.length;_++)t.update(g,i,u[_])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function wy(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==In&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const D=P===Yr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==gi&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==di&&!D)}function l(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=t.logarithmicDepthBuffer===!0,u=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(u===!0){const P=e.get("EXT_clip_control");P.clipControlEXT(P.LOWER_LEFT_EXT,P.ZERO_TO_ONE_EXT)}const d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),x=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),v=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),N=g>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:u,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:x,maxVaryings:v,maxFragmentUniforms:b,vertexTextures:N,maxSamples:R}}function Ay(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new Ai,a=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const d=f.length!==0||u||i!==0||s;return s=u,i=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){t=h(f,u,0)},this.setState=function(f,u,d){const g=f.clippingPlanes,_=f.clipIntersection,p=f.clipShadows,m=n.get(f);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{const x=r?0:i,v=x*4;let b=m.clippingState||null;l.value=b,b=h(g,u,v,d);for(let N=0;N!==v;++N)b[N]=t[N];m.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(f,u,d,g){const _=f!==null?f.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const m=d+_*4,x=u.matrixWorldInverse;a.getNormalMatrix(x),(p===null||p.length<m)&&(p=new Float32Array(m));for(let v=0,b=d;v!==_;++v,b+=4)o.copy(f[v]).applyMatrix4(x,a),o.normal.toArray(p,b),p[b+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function Ty(n){let e=new WeakMap;function t(o,a){return a===Yl?o.mapping=Xs:a===ql&&(o.mapping=Ys),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Yl||a===ql)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new kv(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class oh extends sp{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Is=4,Du=[.125,.215,.35,.446,.526,.582],Zi=20,fl=new oh,Nu=new $e;let dl=null,pl=0,ml=0,gl=!1;const ji=(1+Math.sqrt(5))/2,Rs=1/ji,Uu=[new U(-ji,Rs,0),new U(ji,Rs,0),new U(-Rs,0,ji),new U(Rs,0,ji),new U(0,ji,-Rs),new U(0,ji,Rs),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)];class Ou{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){dl=this._renderer.getRenderTarget(),pl=this._renderer.getActiveCubeFace(),ml=this._renderer.getActiveMipmapLevel(),gl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ku(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(dl,pl,ml),this._renderer.xr.enabled=gl,e.scissorTest=!1,bo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Xs||e.mapping===Ys?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),dl=this._renderer.getRenderTarget(),pl=this._renderer.getActiveCubeFace(),ml=this._renderer.getActiveMipmapLevel(),gl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Pn,minFilter:Pn,generateMipmaps:!1,type:Yr,format:In,colorSpace:Fi,depthBuffer:!1},s=Fu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fu(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ry(r)),this._blurMaterial=Cy(r,e,t)}return s}_compileMaterial(e){const t=new Je(this._lodPlanes[0],e);this._renderer.compile(t,fl)}_sceneToCubeUV(e,t,i,s){const a=new _n(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,u=h.toneMapping;h.getClearColor(Nu),h.toneMapping=Ii,h.autoClear=!1;const d=new Ft({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1}),g=new Je(new Un,d);let _=!1;const p=e.background;p?p.isColor&&(d.color.copy(p),e.background=null,_=!0):(d.color.copy(Nu),_=!0);for(let m=0;m<6;m++){const x=m%3;x===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):x===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const v=this._cubeSize;bo(s,x*v,m>2?v:0,v,v),h.setRenderTarget(s),_&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=f,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Xs||e.mapping===Ys;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ku());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Je(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;bo(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,fl)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Uu[(s-r-1)%Uu.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new Je(this._lodPlanes[s],c),u=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Zi-1),_=r/g,p=isFinite(r)?1+Math.floor(h*_):Zi;p>Zi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Zi}`);const m=[];let x=0;for(let P=0;P<Zi;++P){const D=P/_,Z=Math.exp(-D*D/2);m.push(Z),P===0?x+=Z:P<p&&(x+=2*Z)}for(let P=0;P<m.length;P++)m[P]=m[P]/x;u.envMap.value=e.texture,u.samples.value=p,u.weights.value=m,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:v}=this;u.dTheta.value=g,u.mipInt.value=v-i;const b=this._sizeLods[s],N=3*b*(s>v-Is?s-v+Is:0),R=4*(this._cubeSize-b);bo(t,N,R,3*b,2*b),l.setRenderTarget(t),l.render(f,fl)}}function Ry(n){const e=[],t=[],i=[];let s=n;const r=n-Is+1+Du.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-Is?l=Du[o-n+Is-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,f=1+c,u=[h,h,f,h,f,f,h,h,f,f,h,f],d=6,g=6,_=3,p=2,m=1,x=new Float32Array(_*g*d),v=new Float32Array(p*g*d),b=new Float32Array(m*g*d);for(let R=0;R<d;R++){const P=R%3*2/3-1,D=R>2?0:-1,Z=[P,D,0,P+2/3,D,0,P+2/3,D+1,0,P,D,0,P+2/3,D+1,0,P,D+1,0];x.set(Z,_*g*R),v.set(u,p*g*R);const y=[R,R,R,R,R,R];b.set(y,m*g*R)}const N=new Wt;N.setAttribute("position",new dn(x,_)),N.setAttribute("uv",new dn(v,p)),N.setAttribute("faceIndex",new dn(b,m)),e.push(N),s>Is&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Fu(n,e,t){const i=new ls(n,e,t);return i.texture.mapping=ma,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function bo(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Cy(n,e,t){const i=new Float32Array(Zi),s=new U(0,1,0);return new Oi({name:"SphericalGaussianBlur",defines:{n:Zi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ah(),fragmentShader:`

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
		`,blending:Li,depthTest:!1,depthWrite:!1})}function ku(){return new Oi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ah(),fragmentShader:`

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
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Bu(){return new Oi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ah(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function ah(){return`

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
	`}function Py(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Yl||l===ql,h=l===Xs||l===Ys;if(c||h){let f=e.get(a);const u=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return t===null&&(t=new Ou(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const d=a.image;return c&&d&&d.height>0||h&&d&&s(d)?(t===null&&(t=new Ou(n)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Ly(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&ko("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Iy(n,e,t,i){const s={},r=new WeakMap;function o(f){const u=f.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);for(const g in u.morphAttributes){const _=u.morphAttributes[g];for(let p=0,m=_.length;p<m;p++)e.remove(_[p])}u.removeEventListener("dispose",o),delete s[u.id];const d=r.get(u);d&&(e.remove(d),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(f,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,t.memory.geometries++),u}function l(f){const u=f.attributes;for(const g in u)e.update(u[g],n.ARRAY_BUFFER);const d=f.morphAttributes;for(const g in d){const _=d[g];for(let p=0,m=_.length;p<m;p++)e.update(_[p],n.ARRAY_BUFFER)}}function c(f){const u=[],d=f.index,g=f.attributes.position;let _=0;if(d!==null){const x=d.array;_=d.version;for(let v=0,b=x.length;v<b;v+=3){const N=x[v+0],R=x[v+1],P=x[v+2];u.push(N,R,R,P,P,N)}}else if(g!==void 0){const x=g.array;_=g.version;for(let v=0,b=x.length/3-1;v<b;v+=3){const N=v+0,R=v+1,P=v+2;u.push(N,R,R,P,P,N)}}else return;const p=new(Jd(u)?np:tp)(u,1);p.version=_;const m=r.get(f);m&&e.remove(m),r.set(f,p)}function h(f){const u=r.get(f);if(u){const d=f.index;d!==null&&u.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function Dy(n,e,t){let i;function s(u){i=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,d){n.drawElements(i,d,r,u*o),t.update(d,i,1)}function c(u,d,g){g!==0&&(n.drawElementsInstanced(i,d,r,u*o,g),t.update(d,i,g))}function h(u,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,u,0,g);let p=0;for(let m=0;m<g;m++)p+=d[m];t.update(p,i,1)}function f(u,d,g,_){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<u.length;m++)c(u[m]/o,d[m],_[m]);else{p.multiDrawElementsInstancedWEBGL(i,d,0,r,u,0,_,0,g);let m=0;for(let x=0;x<g;x++)m+=d[x];for(let x=0;x<_.length;x++)t.update(m,i,_[x])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function Ny(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Uy(n,e,t){const i=new WeakMap,s=new ct;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0;let u=i.get(a);if(u===void 0||u.count!==f){let Z=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",Z)};u!==void 0&&u.texture.dispose();const d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let v=0;d===!0&&(v=1),g===!0&&(v=2),_===!0&&(v=3);let b=a.attributes.position.count*v,N=1;b>e.maxTextureSize&&(N=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const R=new Float32Array(b*N*4*f),P=new Qd(R,b,N,f);P.type=di,P.needsUpdate=!0;const D=v*4;for(let y=0;y<f;y++){const w=p[y],z=m[y],W=x[y],$=b*N*4*y;for(let ae=0;ae<w.count;ae++){const V=ae*D;d===!0&&(s.fromBufferAttribute(w,ae),R[$+V+0]=s.x,R[$+V+1]=s.y,R[$+V+2]=s.z,R[$+V+3]=0),g===!0&&(s.fromBufferAttribute(z,ae),R[$+V+4]=s.x,R[$+V+5]=s.y,R[$+V+6]=s.z,R[$+V+7]=0),_===!0&&(s.fromBufferAttribute(W,ae),R[$+V+8]=s.x,R[$+V+9]=s.y,R[$+V+10]=s.z,R[$+V+11]=W.itemSize===4?s.w:1)}}u={count:f,texture:P,size:new Re(b,N)},i.set(a,u),a.addEventListener("dispose",Z)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];const g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function Oy(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,h=l.geometry,f=e.get(l,h);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return f}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class ap extends Jt{constructor(e,t,i,s,r,o,a,l,c,h=ks){if(h!==ks&&h!==js)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===ks&&(i=as),i===void 0&&h===js&&(i=qs),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:$t,this.minFilter=l!==void 0?l:$t,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const lp=new Jt,zu=new ap(1,1),cp=new Qd,hp=new Sv,up=new rp,Hu=[],Vu=[],Gu=new Float32Array(16),Wu=new Float32Array(9),Xu=new Float32Array(4);function er(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Hu[s];if(r===void 0&&(r=new Float32Array(s),Hu[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Pt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Lt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function _a(n,e){let t=Vu[e];t===void 0&&(t=new Int32Array(e),Vu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Fy(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function ky(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2fv(this.addr,e),Lt(t,e)}}function By(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pt(t,e))return;n.uniform3fv(this.addr,e),Lt(t,e)}}function zy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4fv(this.addr,e),Lt(t,e)}}function Hy(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,i))return;Xu.set(i),n.uniformMatrix2fv(this.addr,!1,Xu),Lt(t,i)}}function Vy(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,i))return;Wu.set(i),n.uniformMatrix3fv(this.addr,!1,Wu),Lt(t,i)}}function Gy(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,i))return;Gu.set(i),n.uniformMatrix4fv(this.addr,!1,Gu),Lt(t,i)}}function Wy(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Xy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2iv(this.addr,e),Lt(t,e)}}function Yy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;n.uniform3iv(this.addr,e),Lt(t,e)}}function qy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4iv(this.addr,e),Lt(t,e)}}function jy(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Ky(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2uiv(this.addr,e),Lt(t,e)}}function $y(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;n.uniform3uiv(this.addr,e),Lt(t,e)}}function Jy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4uiv(this.addr,e),Lt(t,e)}}function Zy(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(zu.compareFunction=$d,r=zu):r=lp,t.setTexture2D(e||r,s)}function Qy(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||hp,s)}function eM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||up,s)}function tM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||cp,s)}function nM(n){switch(n){case 5126:return Fy;case 35664:return ky;case 35665:return By;case 35666:return zy;case 35674:return Hy;case 35675:return Vy;case 35676:return Gy;case 5124:case 35670:return Wy;case 35667:case 35671:return Xy;case 35668:case 35672:return Yy;case 35669:case 35673:return qy;case 5125:return jy;case 36294:return Ky;case 36295:return $y;case 36296:return Jy;case 35678:case 36198:case 36298:case 36306:case 35682:return Zy;case 35679:case 36299:case 36307:return Qy;case 35680:case 36300:case 36308:case 36293:return eM;case 36289:case 36303:case 36311:case 36292:return tM}}function iM(n,e){n.uniform1fv(this.addr,e)}function sM(n,e){const t=er(e,this.size,2);n.uniform2fv(this.addr,t)}function rM(n,e){const t=er(e,this.size,3);n.uniform3fv(this.addr,t)}function oM(n,e){const t=er(e,this.size,4);n.uniform4fv(this.addr,t)}function aM(n,e){const t=er(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function lM(n,e){const t=er(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function cM(n,e){const t=er(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function hM(n,e){n.uniform1iv(this.addr,e)}function uM(n,e){n.uniform2iv(this.addr,e)}function fM(n,e){n.uniform3iv(this.addr,e)}function dM(n,e){n.uniform4iv(this.addr,e)}function pM(n,e){n.uniform1uiv(this.addr,e)}function mM(n,e){n.uniform2uiv(this.addr,e)}function gM(n,e){n.uniform3uiv(this.addr,e)}function vM(n,e){n.uniform4uiv(this.addr,e)}function _M(n,e,t){const i=this.cache,s=e.length,r=_a(t,s);Pt(i,r)||(n.uniform1iv(this.addr,r),Lt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||lp,r[o])}function xM(n,e,t){const i=this.cache,s=e.length,r=_a(t,s);Pt(i,r)||(n.uniform1iv(this.addr,r),Lt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||hp,r[o])}function yM(n,e,t){const i=this.cache,s=e.length,r=_a(t,s);Pt(i,r)||(n.uniform1iv(this.addr,r),Lt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||up,r[o])}function MM(n,e,t){const i=this.cache,s=e.length,r=_a(t,s);Pt(i,r)||(n.uniform1iv(this.addr,r),Lt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||cp,r[o])}function SM(n){switch(n){case 5126:return iM;case 35664:return sM;case 35665:return rM;case 35666:return oM;case 35674:return aM;case 35675:return lM;case 35676:return cM;case 5124:case 35670:return hM;case 35667:case 35671:return uM;case 35668:case 35672:return fM;case 35669:case 35673:return dM;case 5125:return pM;case 36294:return mM;case 36295:return gM;case 36296:return vM;case 35678:case 36198:case 36298:case 36306:case 35682:return _M;case 35679:case 36299:case 36307:return xM;case 35680:case 36300:case 36308:case 36293:return yM;case 36289:case 36303:case 36311:case 36292:return MM}}class bM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=nM(t.type)}}class EM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=SM(t.type)}}class wM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const vl=/(\w+)(\])?(\[|\.)?/g;function Yu(n,e){n.seq.push(e),n.map[e.id]=e}function AM(n,e,t){const i=n.name,s=i.length;for(vl.lastIndex=0;;){const r=vl.exec(i),o=vl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Yu(t,c===void 0?new bM(a,n,e):new EM(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new wM(a),Yu(t,f)),t=f}}}class Bo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);AM(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function qu(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const TM=37297;let RM=0;function CM(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function PM(n){const e=ot.getPrimaries(ot.workingColorSpace),t=ot.getPrimaries(n);let i;switch(e===t?i="":e===Qo&&t===Zo?i="LinearDisplayP3ToLinearSRGB":e===Zo&&t===Qo&&(i="LinearSRGBToLinearDisplayP3"),n){case Fi:case ga:return[i,"LinearTransferOETF"];case nn:case nh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function ju(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+CM(n.getShaderSource(e),o)}else return s}function LM(n,e){const t=PM(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function IM(n,e){let t;switch(e){case Kg:t="Linear";break;case $g:t="Reinhard";break;case Jg:t="Cineon";break;case Fd:t="ACESFilmic";break;case Qg:t="AgX";break;case ev:t="Neutral";break;case Zg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Eo=new U;function DM(){ot.getLuminanceCoefficients(Eo);const n=Eo.x.toFixed(4),e=Eo.y.toFixed(4),t=Eo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function NM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(pr).join(`
`)}function UM(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function OM(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function pr(n){return n!==""}function Ku(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $u(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const FM=/^[ \t]*#include +<([\w\d./]+)>/gm;function bc(n){return n.replace(FM,BM)}const kM=new Map;function BM(n,e){let t=je[e];if(t===void 0){const i=kM.get(e);if(i!==void 0)t=je[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return bc(t)}const zM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ju(n){return n.replace(zM,HM)}function HM(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Zu(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function VM(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Kc?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Rg?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===li&&(e="SHADOWMAP_TYPE_VSM"),e}function GM(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Xs:case Ys:e="ENVMAP_TYPE_CUBE";break;case ma:e="ENVMAP_TYPE_CUBE_UV";break}return e}function WM(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ys:e="ENVMAP_MODE_REFRACTION";break}return e}function XM(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Od:e="ENVMAP_BLENDING_MULTIPLY";break;case qg:e="ENVMAP_BLENDING_MIX";break;case jg:e="ENVMAP_BLENDING_ADD";break}return e}function YM(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function qM(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=VM(t),c=GM(t),h=WM(t),f=XM(t),u=YM(t),d=NM(t),g=UM(r),_=s.createProgram();let p,m,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(pr).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(pr).join(`
`),m.length>0&&(m+=`
`)):(p=[Zu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(pr).join(`
`),m=[Zu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ii?"#define TONE_MAPPING":"",t.toneMapping!==Ii?je.tonemapping_pars_fragment:"",t.toneMapping!==Ii?IM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,LM("linearToOutputTexel",t.outputColorSpace),DM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(pr).join(`
`)),o=bc(o),o=Ku(o,t),o=$u(o,t),a=bc(a),a=Ku(a,t),a=$u(a,t),o=Ju(o),a=Ju(a),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===mu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===mu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const v=x+p+o,b=x+m+a,N=qu(s,s.VERTEX_SHADER,v),R=qu(s,s.FRAGMENT_SHADER,b);s.attachShader(_,N),s.attachShader(_,R),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function P(w){if(n.debug.checkShaderErrors){const z=s.getProgramInfoLog(_).trim(),W=s.getShaderInfoLog(N).trim(),$=s.getShaderInfoLog(R).trim();let ae=!0,V=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(ae=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,N,R);else{const se=ju(s,N,"vertex"),G=ju(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+z+`
`+se+`
`+G)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(W===""||$==="")&&(V=!1);V&&(w.diagnostics={runnable:ae,programLog:z,vertexShader:{log:W,prefix:p},fragmentShader:{log:$,prefix:m}})}s.deleteShader(N),s.deleteShader(R),D=new Bo(s,_),Z=OM(s,_)}let D;this.getUniforms=function(){return D===void 0&&P(this),D};let Z;this.getAttributes=function(){return Z===void 0&&P(this),Z};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(_,TM)),y},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=RM++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=N,this.fragmentShader=R,this}let jM=0;class KM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new $M(e),t.set(e,i)),i}}class $M{constructor(e){this.id=jM++,this.code=e,this.usedTimes=0}}function JM(n,e,t,i,s,r,o){const a=new sh,l=new KM,c=new Set,h=[],f=s.logarithmicDepthBuffer,u=s.reverseDepthBuffer,d=s.vertexTextures;let g=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,w,z,W,$){const ae=W.fog,V=$.geometry,se=y.isMeshStandardMaterial?W.environment:null,G=(y.isMeshStandardMaterial?t:e).get(y.envMap||se),ve=G&&G.mapping===ma?G.image.height:null,Me=_[y.type];y.precision!==null&&(g=s.getMaxPrecision(y.precision),g!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",g,"instead."));const we=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,We=we!==void 0?we.length:0;let Ze=0;V.morphAttributes.position!==void 0&&(Ze=1),V.morphAttributes.normal!==void 0&&(Ze=2),V.morphAttributes.color!==void 0&&(Ze=3);let ie,ue,Se,xe;if(Me){const Qt=Gn[Me];ie=Qt.vertexShader,ue=Qt.fragmentShader}else ie=y.vertexShader,ue=y.fragmentShader,l.update(y),Se=l.getVertexShaderID(y),xe=l.getFragmentShaderID(y);const me=n.getRenderTarget(),I=$.isInstancedMesh===!0,ze=$.isBatchedMesh===!0,C=!!y.map,T=!!y.matcap,S=!!G,ne=!!y.aoMap,X=!!y.lightMap,J=!!y.bumpMap,te=!!y.normalMap,re=!!y.displacementMap,Q=!!y.emissiveMap,E=!!y.metalnessMap,M=!!y.roughnessMap,L=y.anisotropy>0,B=y.clearcoat>0,K=y.dispersion>0,q=y.iridescence>0,de=y.sheen>0,le=y.transmission>0,fe=L&&!!y.anisotropyMap,ke=B&&!!y.clearcoatMap,he=B&&!!y.clearcoatNormalMap,ye=B&&!!y.clearcoatRoughnessMap,Ne=q&&!!y.iridescenceMap,He=q&&!!y.iridescenceThicknessMap,ge=de&&!!y.sheenColorMap,Xe=de&&!!y.sheenRoughnessMap,Ye=!!y.specularMap,at=!!y.specularColorMap,O=!!y.specularIntensityMap,Ae=le&&!!y.transmissionMap,ee=le&&!!y.thicknessMap,oe=!!y.gradientMap,be=!!y.alphaMap,Te=y.alphaTest>0,Qe=!!y.alphaHash,At=!!y.extensions;let Zt=Ii;y.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(Zt=n.toneMapping);const et={shaderID:Me,shaderType:y.type,shaderName:y.name,vertexShader:ie,fragmentShader:ue,defines:y.defines,customVertexShaderID:Se,customFragmentShaderID:xe,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:g,batching:ze,batchingColor:ze&&$._colorsTexture!==null,instancing:I,instancingColor:I&&$.instanceColor!==null,instancingMorph:I&&$.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:me===null?n.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:Fi,alphaToCoverage:!!y.alphaToCoverage,map:C,matcap:T,envMap:S,envMapMode:S&&G.mapping,envMapCubeUVHeight:ve,aoMap:ne,lightMap:X,bumpMap:J,normalMap:te,displacementMap:d&&re,emissiveMap:Q,normalMapObjectSpace:te&&y.normalMapType===sv,normalMapTangentSpace:te&&y.normalMapType===Kd,metalnessMap:E,roughnessMap:M,anisotropy:L,anisotropyMap:fe,clearcoat:B,clearcoatMap:ke,clearcoatNormalMap:he,clearcoatRoughnessMap:ye,dispersion:K,iridescence:q,iridescenceMap:Ne,iridescenceThicknessMap:He,sheen:de,sheenColorMap:ge,sheenRoughnessMap:Xe,specularMap:Ye,specularColorMap:at,specularIntensityMap:O,transmission:le,transmissionMap:Ae,thicknessMap:ee,gradientMap:oe,opaque:y.transparent===!1&&y.blending===Fs&&y.alphaToCoverage===!1,alphaMap:be,alphaTest:Te,alphaHash:Qe,combine:y.combine,mapUv:C&&p(y.map.channel),aoMapUv:ne&&p(y.aoMap.channel),lightMapUv:X&&p(y.lightMap.channel),bumpMapUv:J&&p(y.bumpMap.channel),normalMapUv:te&&p(y.normalMap.channel),displacementMapUv:re&&p(y.displacementMap.channel),emissiveMapUv:Q&&p(y.emissiveMap.channel),metalnessMapUv:E&&p(y.metalnessMap.channel),roughnessMapUv:M&&p(y.roughnessMap.channel),anisotropyMapUv:fe&&p(y.anisotropyMap.channel),clearcoatMapUv:ke&&p(y.clearcoatMap.channel),clearcoatNormalMapUv:he&&p(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&p(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Ne&&p(y.iridescenceMap.channel),iridescenceThicknessMapUv:He&&p(y.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&p(y.sheenColorMap.channel),sheenRoughnessMapUv:Xe&&p(y.sheenRoughnessMap.channel),specularMapUv:Ye&&p(y.specularMap.channel),specularColorMapUv:at&&p(y.specularColorMap.channel),specularIntensityMapUv:O&&p(y.specularIntensityMap.channel),transmissionMapUv:Ae&&p(y.transmissionMap.channel),thicknessMapUv:ee&&p(y.thicknessMap.channel),alphaMapUv:be&&p(y.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(te||L),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!V.attributes.uv&&(C||be),fog:!!ae,useFog:y.fog===!0,fogExp2:!!ae&&ae.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:u,skinning:$.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:We,morphTextureStride:Ze,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&z.length>0,shadowMapType:n.shadowMap.type,toneMapping:Zt,decodeVideoTexture:C&&y.map.isVideoTexture===!0&&ot.getTransfer(y.map.colorSpace)===gt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Vt,flipSided:y.side===sn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:At&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(At&&y.extensions.multiDraw===!0||ze)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return et.vertexUv1s=c.has(1),et.vertexUv2s=c.has(2),et.vertexUv3s=c.has(3),c.clear(),et}function x(y){const w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(const z in y.defines)w.push(z),w.push(y.defines[z]);return y.isRawShaderMaterial===!1&&(v(w,y),b(w,y),w.push(n.outputColorSpace)),w.push(y.customProgramCacheKey),w.join()}function v(y,w){y.push(w.precision),y.push(w.outputColorSpace),y.push(w.envMapMode),y.push(w.envMapCubeUVHeight),y.push(w.mapUv),y.push(w.alphaMapUv),y.push(w.lightMapUv),y.push(w.aoMapUv),y.push(w.bumpMapUv),y.push(w.normalMapUv),y.push(w.displacementMapUv),y.push(w.emissiveMapUv),y.push(w.metalnessMapUv),y.push(w.roughnessMapUv),y.push(w.anisotropyMapUv),y.push(w.clearcoatMapUv),y.push(w.clearcoatNormalMapUv),y.push(w.clearcoatRoughnessMapUv),y.push(w.iridescenceMapUv),y.push(w.iridescenceThicknessMapUv),y.push(w.sheenColorMapUv),y.push(w.sheenRoughnessMapUv),y.push(w.specularMapUv),y.push(w.specularColorMapUv),y.push(w.specularIntensityMapUv),y.push(w.transmissionMapUv),y.push(w.thicknessMapUv),y.push(w.combine),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.morphAttributeCount),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.numLightProbes),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function b(y,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reverseDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.alphaToCoverage&&a.enable(20),y.push(a.mask)}function N(y){const w=_[y.type];let z;if(w){const W=Gn[w];z=Nv.clone(W.uniforms)}else z=y.uniforms;return z}function R(y,w){let z;for(let W=0,$=h.length;W<$;W++){const ae=h[W];if(ae.cacheKey===w){z=ae,++z.usedTimes;break}}return z===void 0&&(z=new qM(n,w,y,r),h.push(z)),z}function P(y){if(--y.usedTimes===0){const w=h.indexOf(y);h[w]=h[h.length-1],h.pop(),y.destroy()}}function D(y){l.remove(y)}function Z(){l.dispose()}return{getParameters:m,getProgramCacheKey:x,getUniforms:N,acquireProgram:R,releaseProgram:P,releaseShaderCache:D,programs:h,dispose:Z}}function ZM(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function QM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Qu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function ef(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(f,u,d,g,_,p){let m=n[e];return m===void 0?(m={id:f.id,object:f,geometry:u,material:d,groupOrder:g,renderOrder:f.renderOrder,z:_,group:p},n[e]=m):(m.id=f.id,m.object=f,m.geometry=u,m.material=d,m.groupOrder=g,m.renderOrder=f.renderOrder,m.z=_,m.group=p),e++,m}function a(f,u,d,g,_,p){const m=o(f,u,d,g,_,p);d.transmission>0?i.push(m):d.transparent===!0?s.push(m):t.push(m)}function l(f,u,d,g,_,p){const m=o(f,u,d,g,_,p);d.transmission>0?i.unshift(m):d.transparent===!0?s.unshift(m):t.unshift(m)}function c(f,u){t.length>1&&t.sort(f||QM),i.length>1&&i.sort(u||Qu),s.length>1&&s.sort(u||Qu)}function h(){for(let f=e,u=n.length;f<u;f++){const d=n[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function eS(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new ef,n.set(i,[o])):s>=r.length?(o=new ef,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function tS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new $e};break;case"SpotLight":t={position:new U,direction:new U,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new U,halfWidth:new U,halfHeight:new U};break}return n[e.id]=t,t}}}function nS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let iS=0;function sS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function rS(n){const e=new tS,t=nS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new U);const s=new U,r=new dt,o=new dt;function a(c){let h=0,f=0,u=0;for(let Z=0;Z<9;Z++)i.probe[Z].set(0,0,0);let d=0,g=0,_=0,p=0,m=0,x=0,v=0,b=0,N=0,R=0,P=0;c.sort(sS);for(let Z=0,y=c.length;Z<y;Z++){const w=c[Z],z=w.color,W=w.intensity,$=w.distance,ae=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)h+=z.r*W,f+=z.g*W,u+=z.b*W;else if(w.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(w.sh.coefficients[V],W);P++}else if(w.isDirectionalLight){const V=e.get(w);if(V.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const se=w.shadow,G=t.get(w);G.shadowIntensity=se.intensity,G.shadowBias=se.bias,G.shadowNormalBias=se.normalBias,G.shadowRadius=se.radius,G.shadowMapSize=se.mapSize,i.directionalShadow[d]=G,i.directionalShadowMap[d]=ae,i.directionalShadowMatrix[d]=w.shadow.matrix,x++}i.directional[d]=V,d++}else if(w.isSpotLight){const V=e.get(w);V.position.setFromMatrixPosition(w.matrixWorld),V.color.copy(z).multiplyScalar(W),V.distance=$,V.coneCos=Math.cos(w.angle),V.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),V.decay=w.decay,i.spot[_]=V;const se=w.shadow;if(w.map&&(i.spotLightMap[N]=w.map,N++,se.updateMatrices(w),w.castShadow&&R++),i.spotLightMatrix[_]=se.matrix,w.castShadow){const G=t.get(w);G.shadowIntensity=se.intensity,G.shadowBias=se.bias,G.shadowNormalBias=se.normalBias,G.shadowRadius=se.radius,G.shadowMapSize=se.mapSize,i.spotShadow[_]=G,i.spotShadowMap[_]=ae,b++}_++}else if(w.isRectAreaLight){const V=e.get(w);V.color.copy(z).multiplyScalar(W),V.halfWidth.set(w.width*.5,0,0),V.halfHeight.set(0,w.height*.5,0),i.rectArea[p]=V,p++}else if(w.isPointLight){const V=e.get(w);if(V.color.copy(w.color).multiplyScalar(w.intensity),V.distance=w.distance,V.decay=w.decay,w.castShadow){const se=w.shadow,G=t.get(w);G.shadowIntensity=se.intensity,G.shadowBias=se.bias,G.shadowNormalBias=se.normalBias,G.shadowRadius=se.radius,G.shadowMapSize=se.mapSize,G.shadowCameraNear=se.camera.near,G.shadowCameraFar=se.camera.far,i.pointShadow[g]=G,i.pointShadowMap[g]=ae,i.pointShadowMatrix[g]=w.shadow.matrix,v++}i.point[g]=V,g++}else if(w.isHemisphereLight){const V=e.get(w);V.skyColor.copy(w.color).multiplyScalar(W),V.groundColor.copy(w.groundColor).multiplyScalar(W),i.hemi[m]=V,m++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_e.LTC_FLOAT_1,i.rectAreaLTC2=_e.LTC_FLOAT_2):(i.rectAreaLTC1=_e.LTC_HALF_1,i.rectAreaLTC2=_e.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=u;const D=i.hash;(D.directionalLength!==d||D.pointLength!==g||D.spotLength!==_||D.rectAreaLength!==p||D.hemiLength!==m||D.numDirectionalShadows!==x||D.numPointShadows!==v||D.numSpotShadows!==b||D.numSpotMaps!==N||D.numLightProbes!==P)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=p,i.point.length=g,i.hemi.length=m,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=b+N-R,i.spotLightMap.length=N,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=P,D.directionalLength=d,D.pointLength=g,D.spotLength=_,D.rectAreaLength=p,D.hemiLength=m,D.numDirectionalShadows=x,D.numPointShadows=v,D.numSpotShadows=b,D.numSpotMaps=N,D.numLightProbes=P,i.version=iS++)}function l(c,h){let f=0,u=0,d=0,g=0,_=0;const p=h.matrixWorldInverse;for(let m=0,x=c.length;m<x;m++){const v=c[m];if(v.isDirectionalLight){const b=i.directional[f];b.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),f++}else if(v.isSpotLight){const b=i.spot[d];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),d++}else if(v.isRectAreaLight){const b=i.rectArea[g];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(p),o.identity(),r.copy(v.matrixWorld),r.premultiply(p),o.extractRotation(r),b.halfWidth.set(v.width*.5,0,0),b.halfHeight.set(0,v.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){const b=i.point[u];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(p),u++}else if(v.isHemisphereLight){const b=i.hemi[_];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(p),_++}}}return{setup:a,setupView:l,state:i}}function tf(n){const e=new rS(n),t=[],i=[];function s(h){c.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function o(h){i.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function oS(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new tf(n),e.set(s,[a])):r>=o.length?(a=new tf(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class aS extends us{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class lS extends us{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const cS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hS=`uniform sampler2D shadow_pass;
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
}`;function uS(n,e,t){let i=new rh;const s=new Re,r=new Re,o=new ct,a=new aS({depthPacking:iv}),l=new lS,c={},h=t.maxTextureSize,f={[Ui]:sn,[sn]:Ui,[Vt]:Vt},u=new Oi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Re},radius:{value:4}},vertexShader:cS,fragmentShader:hS}),d=u.clone();d.defines.HORIZONTAL_PASS=1;const g=new Wt;g.setAttribute("position",new dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Je(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kc;let m=this.type;this.render=function(R,P,D){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;const Z=n.getRenderTarget(),y=n.getActiveCubeFace(),w=n.getActiveMipmapLevel(),z=n.state;z.setBlending(Li),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const W=m!==li&&this.type===li,$=m===li&&this.type!==li;for(let ae=0,V=R.length;ae<V;ae++){const se=R[ae],G=se.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",se,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const ve=G.getFrameExtents();if(s.multiply(ve),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ve.x),s.x=r.x*ve.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ve.y),s.y=r.y*ve.y,G.mapSize.y=r.y)),G.map===null||W===!0||$===!0){const we=this.type!==li?{minFilter:$t,magFilter:$t}:{};G.map!==null&&G.map.dispose(),G.map=new ls(s.x,s.y,we),G.map.texture.name=se.name+".shadowMap",G.camera.updateProjectionMatrix()}n.setRenderTarget(G.map),n.clear();const Me=G.getViewportCount();for(let we=0;we<Me;we++){const We=G.getViewport(we);o.set(r.x*We.x,r.y*We.y,r.x*We.z,r.y*We.w),z.viewport(o),G.updateMatrices(se,we),i=G.getFrustum(),b(P,D,G.camera,se,this.type)}G.isPointLightShadow!==!0&&this.type===li&&x(G,D),G.needsUpdate=!1}m=this.type,p.needsUpdate=!1,n.setRenderTarget(Z,y,w)};function x(R,P){const D=e.update(_);u.defines.VSM_SAMPLES!==R.blurSamples&&(u.defines.VSM_SAMPLES=R.blurSamples,d.defines.VSM_SAMPLES=R.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new ls(s.x,s.y)),u.uniforms.shadow_pass.value=R.map.texture,u.uniforms.resolution.value=R.mapSize,u.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(P,null,D,u,_,null),d.uniforms.shadow_pass.value=R.mapPass.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(P,null,D,d,_,null)}function v(R,P,D,Z){let y=null;const w=D.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(w!==void 0)y=w;else if(y=D.isPointLight===!0?l:a,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const z=y.uuid,W=P.uuid;let $=c[z];$===void 0&&($={},c[z]=$);let ae=$[W];ae===void 0&&(ae=y.clone(),$[W]=ae,P.addEventListener("dispose",N)),y=ae}if(y.visible=P.visible,y.wireframe=P.wireframe,Z===li?y.side=P.shadowSide!==null?P.shadowSide:P.side:y.side=P.shadowSide!==null?P.shadowSide:f[P.side],y.alphaMap=P.alphaMap,y.alphaTest=P.alphaTest,y.map=P.map,y.clipShadows=P.clipShadows,y.clippingPlanes=P.clippingPlanes,y.clipIntersection=P.clipIntersection,y.displacementMap=P.displacementMap,y.displacementScale=P.displacementScale,y.displacementBias=P.displacementBias,y.wireframeLinewidth=P.wireframeLinewidth,y.linewidth=P.linewidth,D.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const z=n.properties.get(y);z.light=D}return y}function b(R,P,D,Z,y){if(R.visible===!1)return;if(R.layers.test(P.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&y===li)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,R.matrixWorld);const W=e.update(R),$=R.material;if(Array.isArray($)){const ae=W.groups;for(let V=0,se=ae.length;V<se;V++){const G=ae[V],ve=$[G.materialIndex];if(ve&&ve.visible){const Me=v(R,ve,Z,y);R.onBeforeShadow(n,R,P,D,W,Me,G),n.renderBufferDirect(D,null,W,Me,R,G),R.onAfterShadow(n,R,P,D,W,Me,G)}}}else if($.visible){const ae=v(R,$,Z,y);R.onBeforeShadow(n,R,P,D,W,ae,null),n.renderBufferDirect(D,null,W,ae,R,null),R.onAfterShadow(n,R,P,D,W,ae,null)}}const z=R.children;for(let W=0,$=z.length;W<$;W++)b(z[W],P,D,Z,y)}function N(R){R.target.removeEventListener("dispose",N);for(const D in c){const Z=c[D],y=R.target.uuid;y in Z&&(Z[y].dispose(),delete Z[y])}}}const fS={[Bl]:zl,[Hl]:Wl,[Vl]:Xl,[Ws]:Gl,[zl]:Bl,[Wl]:Hl,[Xl]:Vl,[Gl]:Ws};function dS(n){function e(){let O=!1;const Ae=new ct;let ee=null;const oe=new ct(0,0,0,0);return{setMask:function(be){ee!==be&&!O&&(n.colorMask(be,be,be,be),ee=be)},setLocked:function(be){O=be},setClear:function(be,Te,Qe,At,Zt){Zt===!0&&(be*=At,Te*=At,Qe*=At),Ae.set(be,Te,Qe,At),oe.equals(Ae)===!1&&(n.clearColor(be,Te,Qe,At),oe.copy(Ae))},reset:function(){O=!1,ee=null,oe.set(-1,0,0,0)}}}function t(){let O=!1,Ae=!1,ee=null,oe=null,be=null;return{setReversed:function(Te){Ae=Te},setTest:function(Te){Te?Se(n.DEPTH_TEST):xe(n.DEPTH_TEST)},setMask:function(Te){ee!==Te&&!O&&(n.depthMask(Te),ee=Te)},setFunc:function(Te){if(Ae&&(Te=fS[Te]),oe!==Te){switch(Te){case Bl:n.depthFunc(n.NEVER);break;case zl:n.depthFunc(n.ALWAYS);break;case Hl:n.depthFunc(n.LESS);break;case Ws:n.depthFunc(n.LEQUAL);break;case Vl:n.depthFunc(n.EQUAL);break;case Gl:n.depthFunc(n.GEQUAL);break;case Wl:n.depthFunc(n.GREATER);break;case Xl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}oe=Te}},setLocked:function(Te){O=Te},setClear:function(Te){be!==Te&&(n.clearDepth(Te),be=Te)},reset:function(){O=!1,ee=null,oe=null,be=null}}}function i(){let O=!1,Ae=null,ee=null,oe=null,be=null,Te=null,Qe=null,At=null,Zt=null;return{setTest:function(et){O||(et?Se(n.STENCIL_TEST):xe(n.STENCIL_TEST))},setMask:function(et){Ae!==et&&!O&&(n.stencilMask(et),Ae=et)},setFunc:function(et,Qt,ei){(ee!==et||oe!==Qt||be!==ei)&&(n.stencilFunc(et,Qt,ei),ee=et,oe=Qt,be=ei)},setOp:function(et,Qt,ei){(Te!==et||Qe!==Qt||At!==ei)&&(n.stencilOp(et,Qt,ei),Te=et,Qe=Qt,At=ei)},setLocked:function(et){O=et},setClear:function(et){Zt!==et&&(n.clearStencil(et),Zt=et)},reset:function(){O=!1,Ae=null,ee=null,oe=null,be=null,Te=null,Qe=null,At=null,Zt=null}}}const s=new e,r=new t,o=new i,a=new WeakMap,l=new WeakMap;let c={},h={},f=new WeakMap,u=[],d=null,g=!1,_=null,p=null,m=null,x=null,v=null,b=null,N=null,R=new $e(0,0,0),P=0,D=!1,Z=null,y=null,w=null,z=null,W=null;const $=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ae=!1,V=0;const se=n.getParameter(n.VERSION);se.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(se)[1]),ae=V>=1):se.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(se)[1]),ae=V>=2);let G=null,ve={};const Me=n.getParameter(n.SCISSOR_BOX),we=n.getParameter(n.VIEWPORT),We=new ct().fromArray(Me),Ze=new ct().fromArray(we);function ie(O,Ae,ee,oe){const be=new Uint8Array(4),Te=n.createTexture();n.bindTexture(O,Te),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Qe=0;Qe<ee;Qe++)O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?n.texImage3D(Ae,0,n.RGBA,1,1,oe,0,n.RGBA,n.UNSIGNED_BYTE,be):n.texImage2D(Ae+Qe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,be);return Te}const ue={};ue[n.TEXTURE_2D]=ie(n.TEXTURE_2D,n.TEXTURE_2D,1),ue[n.TEXTURE_CUBE_MAP]=ie(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[n.TEXTURE_2D_ARRAY]=ie(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ue[n.TEXTURE_3D]=ie(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),Se(n.DEPTH_TEST),r.setFunc(Ws),X(!1),J(cu),Se(n.CULL_FACE),S(Li);function Se(O){c[O]!==!0&&(n.enable(O),c[O]=!0)}function xe(O){c[O]!==!1&&(n.disable(O),c[O]=!1)}function me(O,Ae){return h[O]!==Ae?(n.bindFramebuffer(O,Ae),h[O]=Ae,O===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=Ae),O===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=Ae),!0):!1}function I(O,Ae){let ee=u,oe=!1;if(O){ee=f.get(Ae),ee===void 0&&(ee=[],f.set(Ae,ee));const be=O.textures;if(ee.length!==be.length||ee[0]!==n.COLOR_ATTACHMENT0){for(let Te=0,Qe=be.length;Te<Qe;Te++)ee[Te]=n.COLOR_ATTACHMENT0+Te;ee.length=be.length,oe=!0}}else ee[0]!==n.BACK&&(ee[0]=n.BACK,oe=!0);oe&&n.drawBuffers(ee)}function ze(O){return d!==O?(n.useProgram(O),d=O,!0):!1}const C={[Ji]:n.FUNC_ADD,[Pg]:n.FUNC_SUBTRACT,[Lg]:n.FUNC_REVERSE_SUBTRACT};C[Ig]=n.MIN,C[Dg]=n.MAX;const T={[Ng]:n.ZERO,[Ug]:n.ONE,[Og]:n.SRC_COLOR,[Fl]:n.SRC_ALPHA,[Vg]:n.SRC_ALPHA_SATURATE,[zg]:n.DST_COLOR,[kg]:n.DST_ALPHA,[Fg]:n.ONE_MINUS_SRC_COLOR,[kl]:n.ONE_MINUS_SRC_ALPHA,[Hg]:n.ONE_MINUS_DST_COLOR,[Bg]:n.ONE_MINUS_DST_ALPHA,[Gg]:n.CONSTANT_COLOR,[Wg]:n.ONE_MINUS_CONSTANT_COLOR,[Xg]:n.CONSTANT_ALPHA,[Yg]:n.ONE_MINUS_CONSTANT_ALPHA};function S(O,Ae,ee,oe,be,Te,Qe,At,Zt,et){if(O===Li){g===!0&&(xe(n.BLEND),g=!1);return}if(g===!1&&(Se(n.BLEND),g=!0),O!==Cg){if(O!==_||et!==D){if((p!==Ji||v!==Ji)&&(n.blendEquation(n.FUNC_ADD),p=Ji,v=Ji),et)switch(O){case Fs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case hu:n.blendFunc(n.ONE,n.ONE);break;case uu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case fu:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Fs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case hu:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case uu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case fu:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}m=null,x=null,b=null,N=null,R.set(0,0,0),P=0,_=O,D=et}return}be=be||Ae,Te=Te||ee,Qe=Qe||oe,(Ae!==p||be!==v)&&(n.blendEquationSeparate(C[Ae],C[be]),p=Ae,v=be),(ee!==m||oe!==x||Te!==b||Qe!==N)&&(n.blendFuncSeparate(T[ee],T[oe],T[Te],T[Qe]),m=ee,x=oe,b=Te,N=Qe),(At.equals(R)===!1||Zt!==P)&&(n.blendColor(At.r,At.g,At.b,Zt),R.copy(At),P=Zt),_=O,D=!1}function ne(O,Ae){O.side===Vt?xe(n.CULL_FACE):Se(n.CULL_FACE);let ee=O.side===sn;Ae&&(ee=!ee),X(ee),O.blending===Fs&&O.transparent===!1?S(Li):S(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),r.setFunc(O.depthFunc),r.setTest(O.depthTest),r.setMask(O.depthWrite),s.setMask(O.colorWrite);const oe=O.stencilWrite;o.setTest(oe),oe&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),re(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?Se(n.SAMPLE_ALPHA_TO_COVERAGE):xe(n.SAMPLE_ALPHA_TO_COVERAGE)}function X(O){Z!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),Z=O)}function J(O){O!==Ag?(Se(n.CULL_FACE),O!==y&&(O===cu?n.cullFace(n.BACK):O===Tg?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):xe(n.CULL_FACE),y=O}function te(O){O!==w&&(ae&&n.lineWidth(O),w=O)}function re(O,Ae,ee){O?(Se(n.POLYGON_OFFSET_FILL),(z!==Ae||W!==ee)&&(n.polygonOffset(Ae,ee),z=Ae,W=ee)):xe(n.POLYGON_OFFSET_FILL)}function Q(O){O?Se(n.SCISSOR_TEST):xe(n.SCISSOR_TEST)}function E(O){O===void 0&&(O=n.TEXTURE0+$-1),G!==O&&(n.activeTexture(O),G=O)}function M(O,Ae,ee){ee===void 0&&(G===null?ee=n.TEXTURE0+$-1:ee=G);let oe=ve[ee];oe===void 0&&(oe={type:void 0,texture:void 0},ve[ee]=oe),(oe.type!==O||oe.texture!==Ae)&&(G!==ee&&(n.activeTexture(ee),G=ee),n.bindTexture(O,Ae||ue[O]),oe.type=O,oe.texture=Ae)}function L(){const O=ve[G];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function B(){try{n.compressedTexImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function K(){try{n.compressedTexImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function q(){try{n.texSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function de(){try{n.texSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function le(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function fe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ke(){try{n.texStorage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function he(){try{n.texStorage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ye(){try{n.texImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ne(){try{n.texImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function He(O){We.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),We.copy(O))}function ge(O){Ze.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),Ze.copy(O))}function Xe(O,Ae){let ee=l.get(Ae);ee===void 0&&(ee=new WeakMap,l.set(Ae,ee));let oe=ee.get(O);oe===void 0&&(oe=n.getUniformBlockIndex(Ae,O.name),ee.set(O,oe))}function Ye(O,Ae){const oe=l.get(Ae).get(O);a.get(Ae)!==oe&&(n.uniformBlockBinding(Ae,oe,O.__bindingPointIndex),a.set(Ae,oe))}function at(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},G=null,ve={},h={},f=new WeakMap,u=[],d=null,g=!1,_=null,p=null,m=null,x=null,v=null,b=null,N=null,R=new $e(0,0,0),P=0,D=!1,Z=null,y=null,w=null,z=null,W=null,We.set(0,0,n.canvas.width,n.canvas.height),Ze.set(0,0,n.canvas.width,n.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:Se,disable:xe,bindFramebuffer:me,drawBuffers:I,useProgram:ze,setBlending:S,setMaterial:ne,setFlipSided:X,setCullFace:J,setLineWidth:te,setPolygonOffset:re,setScissorTest:Q,activeTexture:E,bindTexture:M,unbindTexture:L,compressedTexImage2D:B,compressedTexImage3D:K,texImage2D:ye,texImage3D:Ne,updateUBOMapping:Xe,uniformBlockBinding:Ye,texStorage2D:ke,texStorage3D:he,texSubImage2D:q,texSubImage3D:de,compressedTexSubImage2D:le,compressedTexSubImage3D:fe,scissor:He,viewport:ge,reset:at}}function nf(n,e,t,i){const s=pS(i);switch(t){case Vd:return n*e;case Wd:return n*e;case Xd:return n*e*2;case Yd:return n*e/s.components*s.byteLength;case Qc:return n*e/s.components*s.byteLength;case qd:return n*e*2/s.components*s.byteLength;case eh:return n*e*2/s.components*s.byteLength;case Gd:return n*e*3/s.components*s.byteLength;case In:return n*e*4/s.components*s.byteLength;case th:return n*e*4/s.components*s.byteLength;case Do:case No:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Uo:case Oo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Jl:case Ql:return Math.max(n,16)*Math.max(e,8)/4;case $l:case Zl:return Math.max(n,8)*Math.max(e,8)/2;case ec:case tc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case nc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ic:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case sc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case rc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case oc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case ac:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case lc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case cc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case hc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case uc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case fc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case dc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case pc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case mc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case gc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Fo:case vc:case _c:return Math.ceil(n/4)*Math.ceil(e/4)*16;case jd:case xc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case yc:case Mc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function pS(n){switch(n){case gi:case Bd:return{byteLength:1,components:1};case Or:case zd:case Yr:return{byteLength:2,components:1};case Jc:case Zc:return{byteLength:2,components:4};case as:case $c:case di:return{byteLength:4,components:1};case Hd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function mS(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Re,h=new WeakMap;let f;const u=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,M){return d?new OffscreenCanvas(E,M):ta("canvas")}function _(E,M,L){let B=1;const K=Q(E);if((K.width>L||K.height>L)&&(B=L/Math.max(K.width,K.height)),B<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const q=Math.floor(B*K.width),de=Math.floor(B*K.height);f===void 0&&(f=g(q,de));const le=M?g(q,de):f;return le.width=q,le.height=de,le.getContext("2d").drawImage(E,0,0,q,de),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+q+"x"+de+")."),le}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),E;return E}function p(E){return E.generateMipmaps&&E.minFilter!==$t&&E.minFilter!==Pn}function m(E){n.generateMipmap(E)}function x(E,M,L,B,K=!1){if(E!==null){if(n[E]!==void 0)return n[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let q=M;if(M===n.RED&&(L===n.FLOAT&&(q=n.R32F),L===n.HALF_FLOAT&&(q=n.R16F),L===n.UNSIGNED_BYTE&&(q=n.R8)),M===n.RED_INTEGER&&(L===n.UNSIGNED_BYTE&&(q=n.R8UI),L===n.UNSIGNED_SHORT&&(q=n.R16UI),L===n.UNSIGNED_INT&&(q=n.R32UI),L===n.BYTE&&(q=n.R8I),L===n.SHORT&&(q=n.R16I),L===n.INT&&(q=n.R32I)),M===n.RG&&(L===n.FLOAT&&(q=n.RG32F),L===n.HALF_FLOAT&&(q=n.RG16F),L===n.UNSIGNED_BYTE&&(q=n.RG8)),M===n.RG_INTEGER&&(L===n.UNSIGNED_BYTE&&(q=n.RG8UI),L===n.UNSIGNED_SHORT&&(q=n.RG16UI),L===n.UNSIGNED_INT&&(q=n.RG32UI),L===n.BYTE&&(q=n.RG8I),L===n.SHORT&&(q=n.RG16I),L===n.INT&&(q=n.RG32I)),M===n.RGB_INTEGER&&(L===n.UNSIGNED_BYTE&&(q=n.RGB8UI),L===n.UNSIGNED_SHORT&&(q=n.RGB16UI),L===n.UNSIGNED_INT&&(q=n.RGB32UI),L===n.BYTE&&(q=n.RGB8I),L===n.SHORT&&(q=n.RGB16I),L===n.INT&&(q=n.RGB32I)),M===n.RGBA_INTEGER&&(L===n.UNSIGNED_BYTE&&(q=n.RGBA8UI),L===n.UNSIGNED_SHORT&&(q=n.RGBA16UI),L===n.UNSIGNED_INT&&(q=n.RGBA32UI),L===n.BYTE&&(q=n.RGBA8I),L===n.SHORT&&(q=n.RGBA16I),L===n.INT&&(q=n.RGBA32I)),M===n.RGB&&L===n.UNSIGNED_INT_5_9_9_9_REV&&(q=n.RGB9_E5),M===n.RGBA){const de=K?Jo:ot.getTransfer(B);L===n.FLOAT&&(q=n.RGBA32F),L===n.HALF_FLOAT&&(q=n.RGBA16F),L===n.UNSIGNED_BYTE&&(q=de===gt?n.SRGB8_ALPHA8:n.RGBA8),L===n.UNSIGNED_SHORT_4_4_4_4&&(q=n.RGBA4),L===n.UNSIGNED_SHORT_5_5_5_1&&(q=n.RGB5_A1)}return(q===n.R16F||q===n.R32F||q===n.RG16F||q===n.RG32F||q===n.RGBA16F||q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function v(E,M){let L;return E?M===null||M===as||M===qs?L=n.DEPTH24_STENCIL8:M===di?L=n.DEPTH32F_STENCIL8:M===Or&&(L=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===as||M===qs?L=n.DEPTH_COMPONENT24:M===di?L=n.DEPTH_COMPONENT32F:M===Or&&(L=n.DEPTH_COMPONENT16),L}function b(E,M){return p(E)===!0||E.isFramebufferTexture&&E.minFilter!==$t&&E.minFilter!==Pn?Math.log2(Math.max(M.width,M.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?M.mipmaps.length:1}function N(E){const M=E.target;M.removeEventListener("dispose",N),P(M),M.isVideoTexture&&h.delete(M)}function R(E){const M=E.target;M.removeEventListener("dispose",R),Z(M)}function P(E){const M=i.get(E);if(M.__webglInit===void 0)return;const L=E.source,B=u.get(L);if(B){const K=B[M.__cacheKey];K.usedTimes--,K.usedTimes===0&&D(E),Object.keys(B).length===0&&u.delete(L)}i.remove(E)}function D(E){const M=i.get(E);n.deleteTexture(M.__webglTexture);const L=E.source,B=u.get(L);delete B[M.__cacheKey],o.memory.textures--}function Z(E){const M=i.get(E);if(E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let B=0;B<6;B++){if(Array.isArray(M.__webglFramebuffer[B]))for(let K=0;K<M.__webglFramebuffer[B].length;K++)n.deleteFramebuffer(M.__webglFramebuffer[B][K]);else n.deleteFramebuffer(M.__webglFramebuffer[B]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[B])}else{if(Array.isArray(M.__webglFramebuffer))for(let B=0;B<M.__webglFramebuffer.length;B++)n.deleteFramebuffer(M.__webglFramebuffer[B]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let B=0;B<M.__webglColorRenderbuffer.length;B++)M.__webglColorRenderbuffer[B]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[B]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const L=E.textures;for(let B=0,K=L.length;B<K;B++){const q=i.get(L[B]);q.__webglTexture&&(n.deleteTexture(q.__webglTexture),o.memory.textures--),i.remove(L[B])}i.remove(E)}let y=0;function w(){y=0}function z(){const E=y;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),y+=1,E}function W(E){const M=[];return M.push(E.wrapS),M.push(E.wrapT),M.push(E.wrapR||0),M.push(E.magFilter),M.push(E.minFilter),M.push(E.anisotropy),M.push(E.internalFormat),M.push(E.format),M.push(E.type),M.push(E.generateMipmaps),M.push(E.premultiplyAlpha),M.push(E.flipY),M.push(E.unpackAlignment),M.push(E.colorSpace),M.join()}function $(E,M){const L=i.get(E);if(E.isVideoTexture&&te(E),E.isRenderTargetTexture===!1&&E.version>0&&L.__version!==E.version){const B=E.image;if(B===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(B.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ze(L,E,M);return}}t.bindTexture(n.TEXTURE_2D,L.__webglTexture,n.TEXTURE0+M)}function ae(E,M){const L=i.get(E);if(E.version>0&&L.__version!==E.version){Ze(L,E,M);return}t.bindTexture(n.TEXTURE_2D_ARRAY,L.__webglTexture,n.TEXTURE0+M)}function V(E,M){const L=i.get(E);if(E.version>0&&L.__version!==E.version){Ze(L,E,M);return}t.bindTexture(n.TEXTURE_3D,L.__webglTexture,n.TEXTURE0+M)}function se(E,M){const L=i.get(E);if(E.version>0&&L.__version!==E.version){ie(L,E,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+M)}const G={[jl]:n.REPEAT,[ts]:n.CLAMP_TO_EDGE,[Kl]:n.MIRRORED_REPEAT},ve={[$t]:n.NEAREST,[tv]:n.NEAREST_MIPMAP_NEAREST,[io]:n.NEAREST_MIPMAP_LINEAR,[Pn]:n.LINEAR,[Ha]:n.LINEAR_MIPMAP_NEAREST,[ns]:n.LINEAR_MIPMAP_LINEAR},Me={[rv]:n.NEVER,[uv]:n.ALWAYS,[ov]:n.LESS,[$d]:n.LEQUAL,[av]:n.EQUAL,[hv]:n.GEQUAL,[lv]:n.GREATER,[cv]:n.NOTEQUAL};function we(E,M){if(M.type===di&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Pn||M.magFilter===Ha||M.magFilter===io||M.magFilter===ns||M.minFilter===Pn||M.minFilter===Ha||M.minFilter===io||M.minFilter===ns)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,G[M.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,G[M.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,G[M.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,ve[M.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,ve[M.minFilter]),M.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,Me[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===$t||M.minFilter!==io&&M.minFilter!==ns||M.type===di&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const L=e.get("EXT_texture_filter_anisotropic");n.texParameterf(E,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function We(E,M){let L=!1;E.__webglInit===void 0&&(E.__webglInit=!0,M.addEventListener("dispose",N));const B=M.source;let K=u.get(B);K===void 0&&(K={},u.set(B,K));const q=W(M);if(q!==E.__cacheKey){K[q]===void 0&&(K[q]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,L=!0),K[q].usedTimes++;const de=K[E.__cacheKey];de!==void 0&&(K[E.__cacheKey].usedTimes--,de.usedTimes===0&&D(M)),E.__cacheKey=q,E.__webglTexture=K[q].texture}return L}function Ze(E,M,L){let B=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(B=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(B=n.TEXTURE_3D);const K=We(E,M),q=M.source;t.bindTexture(B,E.__webglTexture,n.TEXTURE0+L);const de=i.get(q);if(q.version!==de.__version||K===!0){t.activeTexture(n.TEXTURE0+L);const le=ot.getPrimaries(ot.workingColorSpace),fe=M.colorSpace===Ri?null:ot.getPrimaries(M.colorSpace),ke=M.colorSpace===Ri||le===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);let he=_(M.image,!1,s.maxTextureSize);he=re(M,he);const ye=r.convert(M.format,M.colorSpace),Ne=r.convert(M.type);let He=x(M.internalFormat,ye,Ne,M.colorSpace,M.isVideoTexture);we(B,M);let ge;const Xe=M.mipmaps,Ye=M.isVideoTexture!==!0,at=de.__version===void 0||K===!0,O=q.dataReady,Ae=b(M,he);if(M.isDepthTexture)He=v(M.format===js,M.type),at&&(Ye?t.texStorage2D(n.TEXTURE_2D,1,He,he.width,he.height):t.texImage2D(n.TEXTURE_2D,0,He,he.width,he.height,0,ye,Ne,null));else if(M.isDataTexture)if(Xe.length>0){Ye&&at&&t.texStorage2D(n.TEXTURE_2D,Ae,He,Xe[0].width,Xe[0].height);for(let ee=0,oe=Xe.length;ee<oe;ee++)ge=Xe[ee],Ye?O&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,ge.width,ge.height,ye,Ne,ge.data):t.texImage2D(n.TEXTURE_2D,ee,He,ge.width,ge.height,0,ye,Ne,ge.data);M.generateMipmaps=!1}else Ye?(at&&t.texStorage2D(n.TEXTURE_2D,Ae,He,he.width,he.height),O&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,he.width,he.height,ye,Ne,he.data)):t.texImage2D(n.TEXTURE_2D,0,He,he.width,he.height,0,ye,Ne,he.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ye&&at&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ae,He,Xe[0].width,Xe[0].height,he.depth);for(let ee=0,oe=Xe.length;ee<oe;ee++)if(ge=Xe[ee],M.format!==In)if(ye!==null)if(Ye){if(O)if(M.layerUpdates.size>0){const be=nf(ge.width,ge.height,M.format,M.type);for(const Te of M.layerUpdates){const Qe=ge.data.subarray(Te*be/ge.data.BYTES_PER_ELEMENT,(Te+1)*be/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,Te,ge.width,ge.height,1,ye,Qe,0,0)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,0,ge.width,ge.height,he.depth,ye,ge.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ee,He,ge.width,ge.height,he.depth,0,ge.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ye?O&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,0,ge.width,ge.height,he.depth,ye,Ne,ge.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ee,He,ge.width,ge.height,he.depth,0,ye,Ne,ge.data)}else{Ye&&at&&t.texStorage2D(n.TEXTURE_2D,Ae,He,Xe[0].width,Xe[0].height);for(let ee=0,oe=Xe.length;ee<oe;ee++)ge=Xe[ee],M.format!==In?ye!==null?Ye?O&&t.compressedTexSubImage2D(n.TEXTURE_2D,ee,0,0,ge.width,ge.height,ye,ge.data):t.compressedTexImage2D(n.TEXTURE_2D,ee,He,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?O&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,ge.width,ge.height,ye,Ne,ge.data):t.texImage2D(n.TEXTURE_2D,ee,He,ge.width,ge.height,0,ye,Ne,ge.data)}else if(M.isDataArrayTexture)if(Ye){if(at&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ae,He,he.width,he.height,he.depth),O)if(M.layerUpdates.size>0){const ee=nf(he.width,he.height,M.format,M.type);for(const oe of M.layerUpdates){const be=he.data.subarray(oe*ee/he.data.BYTES_PER_ELEMENT,(oe+1)*ee/he.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,oe,he.width,he.height,1,ye,Ne,be)}M.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,ye,Ne,he.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,He,he.width,he.height,he.depth,0,ye,Ne,he.data);else if(M.isData3DTexture)Ye?(at&&t.texStorage3D(n.TEXTURE_3D,Ae,He,he.width,he.height,he.depth),O&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,ye,Ne,he.data)):t.texImage3D(n.TEXTURE_3D,0,He,he.width,he.height,he.depth,0,ye,Ne,he.data);else if(M.isFramebufferTexture){if(at)if(Ye)t.texStorage2D(n.TEXTURE_2D,Ae,He,he.width,he.height);else{let ee=he.width,oe=he.height;for(let be=0;be<Ae;be++)t.texImage2D(n.TEXTURE_2D,be,He,ee,oe,0,ye,Ne,null),ee>>=1,oe>>=1}}else if(Xe.length>0){if(Ye&&at){const ee=Q(Xe[0]);t.texStorage2D(n.TEXTURE_2D,Ae,He,ee.width,ee.height)}for(let ee=0,oe=Xe.length;ee<oe;ee++)ge=Xe[ee],Ye?O&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,ye,Ne,ge):t.texImage2D(n.TEXTURE_2D,ee,He,ye,Ne,ge);M.generateMipmaps=!1}else if(Ye){if(at){const ee=Q(he);t.texStorage2D(n.TEXTURE_2D,Ae,He,ee.width,ee.height)}O&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ye,Ne,he)}else t.texImage2D(n.TEXTURE_2D,0,He,ye,Ne,he);p(M)&&m(B),de.__version=q.version,M.onUpdate&&M.onUpdate(M)}E.__version=M.version}function ie(E,M,L){if(M.image.length!==6)return;const B=We(E,M),K=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+L);const q=i.get(K);if(K.version!==q.__version||B===!0){t.activeTexture(n.TEXTURE0+L);const de=ot.getPrimaries(ot.workingColorSpace),le=M.colorSpace===Ri?null:ot.getPrimaries(M.colorSpace),fe=M.colorSpace===Ri||de===le?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const ke=M.isCompressedTexture||M.image[0].isCompressedTexture,he=M.image[0]&&M.image[0].isDataTexture,ye=[];for(let oe=0;oe<6;oe++)!ke&&!he?ye[oe]=_(M.image[oe],!0,s.maxCubemapSize):ye[oe]=he?M.image[oe].image:M.image[oe],ye[oe]=re(M,ye[oe]);const Ne=ye[0],He=r.convert(M.format,M.colorSpace),ge=r.convert(M.type),Xe=x(M.internalFormat,He,ge,M.colorSpace),Ye=M.isVideoTexture!==!0,at=q.__version===void 0||B===!0,O=K.dataReady;let Ae=b(M,Ne);we(n.TEXTURE_CUBE_MAP,M);let ee;if(ke){Ye&&at&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ae,Xe,Ne.width,Ne.height);for(let oe=0;oe<6;oe++){ee=ye[oe].mipmaps;for(let be=0;be<ee.length;be++){const Te=ee[be];M.format!==In?He!==null?Ye?O&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,be,0,0,Te.width,Te.height,He,Te.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,be,Xe,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ye?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,be,0,0,Te.width,Te.height,He,ge,Te.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,be,Xe,Te.width,Te.height,0,He,ge,Te.data)}}}else{if(ee=M.mipmaps,Ye&&at){ee.length>0&&Ae++;const oe=Q(ye[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ae,Xe,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(he){Ye?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,ye[oe].width,ye[oe].height,He,ge,ye[oe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,Xe,ye[oe].width,ye[oe].height,0,He,ge,ye[oe].data);for(let be=0;be<ee.length;be++){const Qe=ee[be].image[oe].image;Ye?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,be+1,0,0,Qe.width,Qe.height,He,ge,Qe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,be+1,Xe,Qe.width,Qe.height,0,He,ge,Qe.data)}}else{Ye?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,He,ge,ye[oe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,Xe,He,ge,ye[oe]);for(let be=0;be<ee.length;be++){const Te=ee[be];Ye?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,be+1,0,0,He,ge,Te.image[oe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,be+1,Xe,He,ge,Te.image[oe])}}}p(M)&&m(n.TEXTURE_CUBE_MAP),q.__version=K.version,M.onUpdate&&M.onUpdate(M)}E.__version=M.version}function ue(E,M,L,B,K,q){const de=r.convert(L.format,L.colorSpace),le=r.convert(L.type),fe=x(L.internalFormat,de,le,L.colorSpace);if(!i.get(M).__hasExternalTextures){const he=Math.max(1,M.width>>q),ye=Math.max(1,M.height>>q);K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?t.texImage3D(K,q,fe,he,ye,M.depth,0,de,le,null):t.texImage2D(K,q,fe,he,ye,0,de,le,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),J(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,B,K,i.get(L).__webglTexture,0,X(M)):(K===n.TEXTURE_2D||K>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,B,K,i.get(L).__webglTexture,q),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Se(E,M,L){if(n.bindRenderbuffer(n.RENDERBUFFER,E),M.depthBuffer){const B=M.depthTexture,K=B&&B.isDepthTexture?B.type:null,q=v(M.stencilBuffer,K),de=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,le=X(M);J(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,le,q,M.width,M.height):L?n.renderbufferStorageMultisample(n.RENDERBUFFER,le,q,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,q,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,de,n.RENDERBUFFER,E)}else{const B=M.textures;for(let K=0;K<B.length;K++){const q=B[K],de=r.convert(q.format,q.colorSpace),le=r.convert(q.type),fe=x(q.internalFormat,de,le,q.colorSpace),ke=X(M);L&&J(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ke,fe,M.width,M.height):J(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ke,fe,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,fe,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function xe(E,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),$(M.depthTexture,0);const B=i.get(M.depthTexture).__webglTexture,K=X(M);if(M.depthTexture.format===ks)J(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,B,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,B,0);else if(M.depthTexture.format===js)J(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,B,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,B,0);else throw new Error("Unknown depthTexture format")}function me(E){const M=i.get(E),L=E.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==E.depthTexture){const B=E.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),B){const K=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,B.removeEventListener("dispose",K)};B.addEventListener("dispose",K),M.__depthDisposeCallback=K}M.__boundDepthTexture=B}if(E.depthTexture&&!M.__autoAllocateDepthBuffer){if(L)throw new Error("target.depthTexture not supported in Cube render targets");xe(M.__webglFramebuffer,E)}else if(L){M.__webglDepthbuffer=[];for(let B=0;B<6;B++)if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[B]),M.__webglDepthbuffer[B]===void 0)M.__webglDepthbuffer[B]=n.createRenderbuffer(),Se(M.__webglDepthbuffer[B],E,!1);else{const K=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=M.__webglDepthbuffer[B];n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,q)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),Se(M.__webglDepthbuffer,E,!1);else{const B=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,K=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,K),n.framebufferRenderbuffer(n.FRAMEBUFFER,B,n.RENDERBUFFER,K)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function I(E,M,L){const B=i.get(E);M!==void 0&&ue(B.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),L!==void 0&&me(E)}function ze(E){const M=E.texture,L=i.get(E),B=i.get(M);E.addEventListener("dispose",R);const K=E.textures,q=E.isWebGLCubeRenderTarget===!0,de=K.length>1;if(de||(B.__webglTexture===void 0&&(B.__webglTexture=n.createTexture()),B.__version=M.version,o.memory.textures++),q){L.__webglFramebuffer=[];for(let le=0;le<6;le++)if(M.mipmaps&&M.mipmaps.length>0){L.__webglFramebuffer[le]=[];for(let fe=0;fe<M.mipmaps.length;fe++)L.__webglFramebuffer[le][fe]=n.createFramebuffer()}else L.__webglFramebuffer[le]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){L.__webglFramebuffer=[];for(let le=0;le<M.mipmaps.length;le++)L.__webglFramebuffer[le]=n.createFramebuffer()}else L.__webglFramebuffer=n.createFramebuffer();if(de)for(let le=0,fe=K.length;le<fe;le++){const ke=i.get(K[le]);ke.__webglTexture===void 0&&(ke.__webglTexture=n.createTexture(),o.memory.textures++)}if(E.samples>0&&J(E)===!1){L.__webglMultisampledFramebuffer=n.createFramebuffer(),L.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let le=0;le<K.length;le++){const fe=K[le];L.__webglColorRenderbuffer[le]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,L.__webglColorRenderbuffer[le]);const ke=r.convert(fe.format,fe.colorSpace),he=r.convert(fe.type),ye=x(fe.internalFormat,ke,he,fe.colorSpace,E.isXRRenderTarget===!0),Ne=X(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ne,ye,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,L.__webglColorRenderbuffer[le])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(L.__webglDepthRenderbuffer=n.createRenderbuffer(),Se(L.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(q){t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture),we(n.TEXTURE_CUBE_MAP,M);for(let le=0;le<6;le++)if(M.mipmaps&&M.mipmaps.length>0)for(let fe=0;fe<M.mipmaps.length;fe++)ue(L.__webglFramebuffer[le][fe],E,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,fe);else ue(L.__webglFramebuffer[le],E,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);p(M)&&m(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(de){for(let le=0,fe=K.length;le<fe;le++){const ke=K[le],he=i.get(ke);t.bindTexture(n.TEXTURE_2D,he.__webglTexture),we(n.TEXTURE_2D,ke),ue(L.__webglFramebuffer,E,ke,n.COLOR_ATTACHMENT0+le,n.TEXTURE_2D,0),p(ke)&&m(n.TEXTURE_2D)}t.unbindTexture()}else{let le=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(le=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(le,B.__webglTexture),we(le,M),M.mipmaps&&M.mipmaps.length>0)for(let fe=0;fe<M.mipmaps.length;fe++)ue(L.__webglFramebuffer[fe],E,M,n.COLOR_ATTACHMENT0,le,fe);else ue(L.__webglFramebuffer,E,M,n.COLOR_ATTACHMENT0,le,0);p(M)&&m(le),t.unbindTexture()}E.depthBuffer&&me(E)}function C(E){const M=E.textures;for(let L=0,B=M.length;L<B;L++){const K=M[L];if(p(K)){const q=E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,de=i.get(K).__webglTexture;t.bindTexture(q,de),m(q),t.unbindTexture()}}}const T=[],S=[];function ne(E){if(E.samples>0){if(J(E)===!1){const M=E.textures,L=E.width,B=E.height;let K=n.COLOR_BUFFER_BIT;const q=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=i.get(E),le=M.length>1;if(le)for(let fe=0;fe<M.length;fe++)t.bindFramebuffer(n.FRAMEBUFFER,de.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,de.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let fe=0;fe<M.length;fe++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(K|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(K|=n.STENCIL_BUFFER_BIT)),le){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,de.__webglColorRenderbuffer[fe]);const ke=i.get(M[fe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ke,0)}n.blitFramebuffer(0,0,L,B,0,0,L,B,K,n.NEAREST),l===!0&&(T.length=0,S.length=0,T.push(n.COLOR_ATTACHMENT0+fe),E.depthBuffer&&E.resolveDepthBuffer===!1&&(T.push(q),S.push(q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,S)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,T))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),le)for(let fe=0;fe<M.length;fe++){t.bindFramebuffer(n.FRAMEBUFFER,de.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,de.__webglColorRenderbuffer[fe]);const ke=i.get(M[fe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,de.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,ke,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const M=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function X(E){return Math.min(s.maxSamples,E.samples)}function J(E){const M=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function te(E){const M=o.render.frame;h.get(E)!==M&&(h.set(E,M),E.update())}function re(E,M){const L=E.colorSpace,B=E.format,K=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||L!==Fi&&L!==Ri&&(ot.getTransfer(L)===gt?(B!==In||K!==gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",L)),M}function Q(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=w,this.setTexture2D=$,this.setTexture2DArray=ae,this.setTexture3D=V,this.setTextureCube=se,this.rebindTextures=I,this.setupRenderTarget=ze,this.updateRenderTargetMipmap=C,this.updateMultisampleRenderTarget=ne,this.setupDepthRenderbuffer=me,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=J}function gS(n,e){function t(i,s=Ri){let r;const o=ot.getTransfer(s);if(i===gi)return n.UNSIGNED_BYTE;if(i===Jc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Zc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Hd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Bd)return n.BYTE;if(i===zd)return n.SHORT;if(i===Or)return n.UNSIGNED_SHORT;if(i===$c)return n.INT;if(i===as)return n.UNSIGNED_INT;if(i===di)return n.FLOAT;if(i===Yr)return n.HALF_FLOAT;if(i===Vd)return n.ALPHA;if(i===Gd)return n.RGB;if(i===In)return n.RGBA;if(i===Wd)return n.LUMINANCE;if(i===Xd)return n.LUMINANCE_ALPHA;if(i===ks)return n.DEPTH_COMPONENT;if(i===js)return n.DEPTH_STENCIL;if(i===Yd)return n.RED;if(i===Qc)return n.RED_INTEGER;if(i===qd)return n.RG;if(i===eh)return n.RG_INTEGER;if(i===th)return n.RGBA_INTEGER;if(i===Do||i===No||i===Uo||i===Oo)if(o===gt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Do)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===No)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Uo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Oo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Do)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===No)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Uo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Oo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===$l||i===Jl||i===Zl||i===Ql)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===$l)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Jl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Zl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ql)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ec||i===tc||i===nc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ec||i===tc)return o===gt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===nc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ic||i===sc||i===rc||i===oc||i===ac||i===lc||i===cc||i===hc||i===uc||i===fc||i===dc||i===pc||i===mc||i===gc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===ic)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===sc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===rc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===oc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ac)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===lc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===cc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===hc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===uc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===fc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===dc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===pc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===mc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===gc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Fo||i===vc||i===_c)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Fo)return o===gt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===vc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===_c)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===jd||i===xc||i===yc||i===Mc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Fo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===xc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===yc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Mc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===qs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class vS extends _n{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class bt extends Dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _S={type:"move"};class _l{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,i),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&u>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(_S)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new bt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const xS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,yS=`
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

}`;class MS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new Jt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Oi({vertexShader:xS,fragmentShader:yS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Je(new fs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class SS extends Zs{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,g=null;const _=new MS,p=t.getContextAttributes();let m=null,x=null;const v=[],b=[],N=new Re;let R=null;const P=new _n;P.layers.enable(1),P.viewport=new ct;const D=new _n;D.layers.enable(2),D.viewport=new ct;const Z=[P,D],y=new vS;y.layers.enable(1),y.layers.enable(2);let w=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let ue=v[ie];return ue===void 0&&(ue=new _l,v[ie]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(ie){let ue=v[ie];return ue===void 0&&(ue=new _l,v[ie]=ue),ue.getGripSpace()},this.getHand=function(ie){let ue=v[ie];return ue===void 0&&(ue=new _l,v[ie]=ue),ue.getHandSpace()};function W(ie){const ue=b.indexOf(ie.inputSource);if(ue===-1)return;const Se=v[ue];Se!==void 0&&(Se.update(ie.inputSource,ie.frame,c||o),Se.dispatchEvent({type:ie.type,data:ie.inputSource}))}function $(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",$),s.removeEventListener("inputsourceschange",ae);for(let ie=0;ie<v.length;ie++){const ue=b[ie];ue!==null&&(b[ie]=null,v[ie].disconnect(ue))}w=null,z=null,_.reset(),e.setRenderTarget(m),d=null,u=null,f=null,s=null,x=null,Ze.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(N.width,N.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){r=ie,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){a=ie,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ie){c=ie},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(ie){if(s=ie,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",$),s.addEventListener("inputsourceschange",ae),p.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(N),s.renderState.layers===void 0){const ue={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,ue),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new ls(d.framebufferWidth,d.framebufferHeight,{format:In,type:gi,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let ue=null,Se=null,xe=null;p.depth&&(xe=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=p.stencil?js:ks,Se=p.stencil?qs:as);const me={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:r};f=new XRWebGLBinding(s,t),u=f.createProjectionLayer(me),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),x=new ls(u.textureWidth,u.textureHeight,{format:In,type:gi,depthTexture:new ap(u.textureWidth,u.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ze.setContext(s),Ze.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function ae(ie){for(let ue=0;ue<ie.removed.length;ue++){const Se=ie.removed[ue],xe=b.indexOf(Se);xe>=0&&(b[xe]=null,v[xe].disconnect(Se))}for(let ue=0;ue<ie.added.length;ue++){const Se=ie.added[ue];let xe=b.indexOf(Se);if(xe===-1){for(let I=0;I<v.length;I++)if(I>=b.length){b.push(Se),xe=I;break}else if(b[I]===null){b[I]=Se,xe=I;break}if(xe===-1)break}const me=v[xe];me&&me.connect(Se)}}const V=new U,se=new U;function G(ie,ue,Se){V.setFromMatrixPosition(ue.matrixWorld),se.setFromMatrixPosition(Se.matrixWorld);const xe=V.distanceTo(se),me=ue.projectionMatrix.elements,I=Se.projectionMatrix.elements,ze=me[14]/(me[10]-1),C=me[14]/(me[10]+1),T=(me[9]+1)/me[5],S=(me[9]-1)/me[5],ne=(me[8]-1)/me[0],X=(I[8]+1)/I[0],J=ze*ne,te=ze*X,re=xe/(-ne+X),Q=re*-ne;if(ue.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(Q),ie.translateZ(re),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),me[10]===-1)ie.projectionMatrix.copy(ue.projectionMatrix),ie.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const E=ze+re,M=C+re,L=J-Q,B=te+(xe-Q),K=T*C/M*E,q=S*C/M*E;ie.projectionMatrix.makePerspective(L,B,K,q,E,M),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function ve(ie,ue){ue===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(ue.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(s===null)return;let ue=ie.near,Se=ie.far;_.texture!==null&&(_.depthNear>0&&(ue=_.depthNear),_.depthFar>0&&(Se=_.depthFar)),y.near=D.near=P.near=ue,y.far=D.far=P.far=Se,(w!==y.near||z!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),w=y.near,z=y.far);const xe=ie.parent,me=y.cameras;ve(y,xe);for(let I=0;I<me.length;I++)ve(me[I],xe);me.length===2?G(y,P,D):y.projectionMatrix.copy(P.projectionMatrix),Me(ie,y,xe)};function Me(ie,ue,Se){Se===null?ie.matrix.copy(ue.matrixWorld):(ie.matrix.copy(Se.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(ue.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(ue.projectionMatrix),ie.projectionMatrixInverse.copy(ue.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=Sc*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(ie){l=ie,u!==null&&(u.fixedFoveation=ie),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=ie)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let we=null;function We(ie,ue){if(h=ue.getViewerPose(c||o),g=ue,h!==null){const Se=h.views;d!==null&&(e.setRenderTargetFramebuffer(x,d.framebuffer),e.setRenderTarget(x));let xe=!1;Se.length!==y.cameras.length&&(y.cameras.length=0,xe=!0);for(let I=0;I<Se.length;I++){const ze=Se[I];let C=null;if(d!==null)C=d.getViewport(ze);else{const S=f.getViewSubImage(u,ze);C=S.viewport,I===0&&(e.setRenderTargetTextures(x,S.colorTexture,u.ignoreDepthValues?void 0:S.depthStencilTexture),e.setRenderTarget(x))}let T=Z[I];T===void 0&&(T=new _n,T.layers.enable(I),T.viewport=new ct,Z[I]=T),T.matrix.fromArray(ze.transform.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale),T.projectionMatrix.fromArray(ze.projectionMatrix),T.projectionMatrixInverse.copy(T.projectionMatrix).invert(),T.viewport.set(C.x,C.y,C.width,C.height),I===0&&(y.matrix.copy(T.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),xe===!0&&y.cameras.push(T)}const me=s.enabledFeatures;if(me&&me.includes("depth-sensing")){const I=f.getDepthInformation(Se[0]);I&&I.isValid&&I.texture&&_.init(e,I,s.renderState)}}for(let Se=0;Se<v.length;Se++){const xe=b[Se],me=v[Se];xe!==null&&me!==void 0&&me.update(xe,ue,c||o)}we&&we(ie,ue),ue.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ue}),g=null}const Ze=new op;Ze.setAnimationLoop(We),this.setAnimationLoop=function(ie){we=ie},this.dispose=function(){}}}const Yi=new Zn,bS=new dt;function ES(n,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,ip(n)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,x,v,b){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),f(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m)):m.isMeshStandardMaterial?(r(p,m),u(p,m),m.isMeshPhysicalMaterial&&d(p,m,b)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),_(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,x,v):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===sn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===sn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const x=e.get(m),v=x.envMap,b=x.envMapRotation;v&&(p.envMap.value=v,Yi.copy(b),Yi.x*=-1,Yi.y*=-1,Yi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Yi.y*=-1,Yi.z*=-1),p.envMapRotation.value.setFromMatrix4(bS.makeRotationFromEuler(Yi)),p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,x,v){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*x,p.scale.value=v*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function f(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,x){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===sn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const x=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(x.matrixWorld),p.nearDistance.value=x.shadow.camera.near,p.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function wS(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,v){const b=v.program;i.uniformBlockBinding(x,b)}function c(x,v){let b=s[x.id];b===void 0&&(g(x),b=h(x),s[x.id]=b,x.addEventListener("dispose",p));const N=v.program;i.updateUBOMapping(x,N);const R=e.render.frame;r[x.id]!==R&&(u(x),r[x.id]=R)}function h(x){const v=f();x.__bindingPointIndex=v;const b=n.createBuffer(),N=x.__size,R=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,N,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,b),b}function f(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){const v=s[x.id],b=x.uniforms,N=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let R=0,P=b.length;R<P;R++){const D=Array.isArray(b[R])?b[R]:[b[R]];for(let Z=0,y=D.length;Z<y;Z++){const w=D[Z];if(d(w,R,Z,N)===!0){const z=w.__offset,W=Array.isArray(w.value)?w.value:[w.value];let $=0;for(let ae=0;ae<W.length;ae++){const V=W[ae],se=_(V);typeof V=="number"||typeof V=="boolean"?(w.__data[0]=V,n.bufferSubData(n.UNIFORM_BUFFER,z+$,w.__data)):V.isMatrix3?(w.__data[0]=V.elements[0],w.__data[1]=V.elements[1],w.__data[2]=V.elements[2],w.__data[3]=0,w.__data[4]=V.elements[3],w.__data[5]=V.elements[4],w.__data[6]=V.elements[5],w.__data[7]=0,w.__data[8]=V.elements[6],w.__data[9]=V.elements[7],w.__data[10]=V.elements[8],w.__data[11]=0):(V.toArray(w.__data,$),$+=se.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,z,w.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(x,v,b,N){const R=x.value,P=v+"_"+b;if(N[P]===void 0)return typeof R=="number"||typeof R=="boolean"?N[P]=R:N[P]=R.clone(),!0;{const D=N[P];if(typeof R=="number"||typeof R=="boolean"){if(D!==R)return N[P]=R,!0}else if(D.equals(R)===!1)return D.copy(R),!0}return!1}function g(x){const v=x.uniforms;let b=0;const N=16;for(let P=0,D=v.length;P<D;P++){const Z=Array.isArray(v[P])?v[P]:[v[P]];for(let y=0,w=Z.length;y<w;y++){const z=Z[y],W=Array.isArray(z.value)?z.value:[z.value];for(let $=0,ae=W.length;$<ae;$++){const V=W[$],se=_(V),G=b%N,ve=G%se.boundary,Me=G+ve;b+=ve,Me!==0&&N-Me<se.storage&&(b+=N-Me),z.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=b,b+=se.storage}}}const R=b%N;return R>0&&(b+=N-R),x.__size=b,x.__cache={},this}function _(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function p(x){const v=x.target;v.removeEventListener("dispose",p);const b=o.indexOf(v.__bindingPointIndex);o.splice(b,1),n.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function m(){for(const x in s)n.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}class AS{constructor(e={}){const{canvas:t=dv(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let u;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=i.getContextAttributes().alpha}else u=o;const d=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const m=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=nn,this.toneMapping=Ii,this.toneMappingExposure=1;const v=this;let b=!1,N=0,R=0,P=null,D=-1,Z=null;const y=new ct,w=new ct;let z=null;const W=new $e(0);let $=0,ae=t.width,V=t.height,se=1,G=null,ve=null;const Me=new ct(0,0,ae,V),we=new ct(0,0,ae,V);let We=!1;const Ze=new rh;let ie=!1,ue=!1;const Se=new dt,xe=new dt,me=new U,I=new ct,ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let C=!1;function T(){return P===null?se:1}let S=i;function ne(A,F){return t.getContext(A,F)}try{const A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${jc}`),t.addEventListener("webglcontextlost",oe,!1),t.addEventListener("webglcontextrestored",be,!1),t.addEventListener("webglcontextcreationerror",Te,!1),S===null){const F="webgl2";if(S=ne(F,A),S===null)throw ne(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let X,J,te,re,Q,E,M,L,B,K,q,de,le,fe,ke,he,ye,Ne,He,ge,Xe,Ye,at,O;function Ae(){X=new Ly(S),X.init(),Ye=new gS(S,X),J=new wy(S,X,e,Ye),te=new dS(S),J.reverseDepthBuffer&&te.buffers.depth.setReversed(!0),re=new Ny(S),Q=new ZM,E=new mS(S,X,te,Q,J,Ye,re),M=new Ty(v),L=new Py(v),B=new Hv(S),at=new by(S,B),K=new Iy(S,B,re,at),q=new Oy(S,K,B,re),He=new Uy(S,J,E),he=new Ay(Q),de=new JM(v,M,L,X,J,at,he),le=new ES(v,Q),fe=new eS,ke=new oS(X),Ne=new Sy(v,M,L,te,q,u,l),ye=new uS(v,q,J),O=new wS(S,re,J,te),ge=new Ey(S,X,re),Xe=new Dy(S,X,re),re.programs=de.programs,v.capabilities=J,v.extensions=X,v.properties=Q,v.renderLists=fe,v.shadowMap=ye,v.state=te,v.info=re}Ae();const ee=new SS(v,S);this.xr=ee,this.getContext=function(){return S},this.getContextAttributes=function(){return S.getContextAttributes()},this.forceContextLoss=function(){const A=X.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=X.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return se},this.setPixelRatio=function(A){A!==void 0&&(se=A,this.setSize(ae,V,!1))},this.getSize=function(A){return A.set(ae,V)},this.setSize=function(A,F,Y=!0){if(ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ae=A,V=F,t.width=Math.floor(A*se),t.height=Math.floor(F*se),Y===!0&&(t.style.width=A+"px",t.style.height=F+"px"),this.setViewport(0,0,A,F)},this.getDrawingBufferSize=function(A){return A.set(ae*se,V*se).floor()},this.setDrawingBufferSize=function(A,F,Y){ae=A,V=F,se=Y,t.width=Math.floor(A*Y),t.height=Math.floor(F*Y),this.setViewport(0,0,A,F)},this.getCurrentViewport=function(A){return A.copy(y)},this.getViewport=function(A){return A.copy(Me)},this.setViewport=function(A,F,Y,j){A.isVector4?Me.set(A.x,A.y,A.z,A.w):Me.set(A,F,Y,j),te.viewport(y.copy(Me).multiplyScalar(se).round())},this.getScissor=function(A){return A.copy(we)},this.setScissor=function(A,F,Y,j){A.isVector4?we.set(A.x,A.y,A.z,A.w):we.set(A,F,Y,j),te.scissor(w.copy(we).multiplyScalar(se).round())},this.getScissorTest=function(){return We},this.setScissorTest=function(A){te.setScissorTest(We=A)},this.setOpaqueSort=function(A){G=A},this.setTransparentSort=function(A){ve=A},this.getClearColor=function(A){return A.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor.apply(Ne,arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha.apply(Ne,arguments)},this.clear=function(A=!0,F=!0,Y=!0){let j=0;if(A){let k=!1;if(P!==null){const pe=P.texture.format;k=pe===th||pe===eh||pe===Qc}if(k){const pe=P.texture.type,Ee=pe===gi||pe===as||pe===Or||pe===qs||pe===Jc||pe===Zc,Ce=Ne.getClearColor(),Pe=Ne.getClearAlpha(),Ve=Ce.r,Ge=Ce.g,Le=Ce.b;Ee?(d[0]=Ve,d[1]=Ge,d[2]=Le,d[3]=Pe,S.clearBufferuiv(S.COLOR,0,d)):(g[0]=Ve,g[1]=Ge,g[2]=Le,g[3]=Pe,S.clearBufferiv(S.COLOR,0,g))}else j|=S.COLOR_BUFFER_BIT}F&&(j|=S.DEPTH_BUFFER_BIT,S.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),Y&&(j|=S.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),S.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",oe,!1),t.removeEventListener("webglcontextrestored",be,!1),t.removeEventListener("webglcontextcreationerror",Te,!1),fe.dispose(),ke.dispose(),Q.dispose(),M.dispose(),L.dispose(),q.dispose(),at.dispose(),O.dispose(),de.dispose(),ee.dispose(),ee.removeEventListener("sessionstart",vh),ee.removeEventListener("sessionend",_h),ki.stop()};function oe(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function be(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const A=re.autoReset,F=ye.enabled,Y=ye.autoUpdate,j=ye.needsUpdate,k=ye.type;Ae(),re.autoReset=A,ye.enabled=F,ye.autoUpdate=Y,ye.needsUpdate=j,ye.type=k}function Te(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Qe(A){const F=A.target;F.removeEventListener("dispose",Qe),At(F)}function At(A){Zt(A),Q.remove(A)}function Zt(A){const F=Q.get(A).programs;F!==void 0&&(F.forEach(function(Y){de.releaseProgram(Y)}),A.isShaderMaterial&&de.releaseShaderCache(A))}this.renderBufferDirect=function(A,F,Y,j,k,pe){F===null&&(F=ze);const Ee=k.isMesh&&k.matrixWorld.determinant()<0,Ce=Ap(A,F,Y,j,k);te.setMaterial(j,Ee);let Pe=Y.index,Ve=1;if(j.wireframe===!0){if(Pe=K.getWireframeAttribute(Y),Pe===void 0)return;Ve=2}const Ge=Y.drawRange,Le=Y.attributes.position;let lt=Ge.start*Ve,pt=(Ge.start+Ge.count)*Ve;pe!==null&&(lt=Math.max(lt,pe.start*Ve),pt=Math.min(pt,(pe.start+pe.count)*Ve)),Pe!==null?(lt=Math.max(lt,0),pt=Math.min(pt,Pe.count)):Le!=null&&(lt=Math.max(lt,0),pt=Math.min(pt,Le.count));const Mt=pt-lt;if(Mt<0||Mt===1/0)return;at.setup(k,j,Ce,Y,Pe);let rn,it=ge;if(Pe!==null&&(rn=B.get(Pe),it=Xe,it.setIndex(rn)),k.isMesh)j.wireframe===!0?(te.setLineWidth(j.wireframeLinewidth*T()),it.setMode(S.LINES)):it.setMode(S.TRIANGLES);else if(k.isLine){let Ue=j.linewidth;Ue===void 0&&(Ue=1),te.setLineWidth(Ue*T()),k.isLineSegments?it.setMode(S.LINES):k.isLineLoop?it.setMode(S.LINE_LOOP):it.setMode(S.LINE_STRIP)}else k.isPoints?it.setMode(S.POINTS):k.isSprite&&it.setMode(S.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)it.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(X.get("WEBGL_multi_draw"))it.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Ue=k._multiDrawStarts,Nt=k._multiDrawCounts,st=k._multiDrawCount,bn=Pe?B.get(Pe).bytesPerElement:1,ds=Q.get(j).currentProgram.getUniforms();for(let on=0;on<st;on++)ds.setValue(S,"_gl_DrawID",on),it.render(Ue[on]/bn,Nt[on])}else if(k.isInstancedMesh)it.renderInstances(lt,Mt,k.count);else if(Y.isInstancedBufferGeometry){const Ue=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Nt=Math.min(Y.instanceCount,Ue);it.renderInstances(lt,Mt,Nt)}else it.render(lt,Mt)};function et(A,F,Y){A.transparent===!0&&A.side===Vt&&A.forceSinglePass===!1?(A.side=sn,A.needsUpdate=!0,$r(A,F,Y),A.side=Ui,A.needsUpdate=!0,$r(A,F,Y),A.side=Vt):$r(A,F,Y)}this.compile=function(A,F,Y=null){Y===null&&(Y=A),p=ke.get(Y),p.init(F),x.push(p),Y.traverseVisible(function(k){k.isLight&&k.layers.test(F.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),A!==Y&&A.traverseVisible(function(k){k.isLight&&k.layers.test(F.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights();const j=new Set;return A.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const pe=k.material;if(pe)if(Array.isArray(pe))for(let Ee=0;Ee<pe.length;Ee++){const Ce=pe[Ee];et(Ce,Y,k),j.add(Ce)}else et(pe,Y,k),j.add(pe)}),x.pop(),p=null,j},this.compileAsync=function(A,F,Y=null){const j=this.compile(A,F,Y);return new Promise(k=>{function pe(){if(j.forEach(function(Ee){Q.get(Ee).currentProgram.isReady()&&j.delete(Ee)}),j.size===0){k(A);return}setTimeout(pe,10)}X.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let Qt=null;function ei(A){Qt&&Qt(A)}function vh(){ki.stop()}function _h(){ki.start()}const ki=new op;ki.setAnimationLoop(ei),typeof self<"u"&&ki.setContext(self),this.setAnimationLoop=function(A){Qt=A,ee.setAnimationLoop(A),A===null?ki.stop():ki.start()},ee.addEventListener("sessionstart",vh),ee.addEventListener("sessionend",_h),this.render=function(A,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ee.enabled===!0&&ee.isPresenting===!0&&(ee.cameraAutoUpdate===!0&&ee.updateCamera(F),F=ee.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,F,P),p=ke.get(A,x.length),p.init(F),x.push(p),xe.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Ze.setFromProjectionMatrix(xe),ue=this.localClippingEnabled,ie=he.init(this.clippingPlanes,ue),_=fe.get(A,m.length),_.init(),m.push(_),ee.enabled===!0&&ee.isPresenting===!0){const pe=v.xr.getDepthSensingMesh();pe!==null&&ya(pe,F,-1/0,v.sortObjects)}ya(A,F,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(G,ve),C=ee.enabled===!1||ee.isPresenting===!1||ee.hasDepthSensing()===!1,C&&Ne.addToRenderList(_,A),this.info.render.frame++,ie===!0&&he.beginShadows();const Y=p.state.shadowsArray;ye.render(Y,A,F),ie===!0&&he.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=_.opaque,k=_.transmissive;if(p.setupLights(),F.isArrayCamera){const pe=F.cameras;if(k.length>0)for(let Ee=0,Ce=pe.length;Ee<Ce;Ee++){const Pe=pe[Ee];yh(j,k,A,Pe)}C&&Ne.render(A);for(let Ee=0,Ce=pe.length;Ee<Ce;Ee++){const Pe=pe[Ee];xh(_,A,Pe,Pe.viewport)}}else k.length>0&&yh(j,k,A,F),C&&Ne.render(A),xh(_,A,F);P!==null&&(E.updateMultisampleRenderTarget(P),E.updateRenderTargetMipmap(P)),A.isScene===!0&&A.onAfterRender(v,A,F),at.resetDefaultState(),D=-1,Z=null,x.pop(),x.length>0?(p=x[x.length-1],ie===!0&&he.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function ya(A,F,Y,j){if(A.visible===!1)return;if(A.layers.test(F.layers)){if(A.isGroup)Y=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(F);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Ze.intersectsSprite(A)){j&&I.setFromMatrixPosition(A.matrixWorld).applyMatrix4(xe);const Ee=q.update(A),Ce=A.material;Ce.visible&&_.push(A,Ee,Ce,Y,I.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Ze.intersectsObject(A))){const Ee=q.update(A),Ce=A.material;if(j&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),I.copy(A.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),I.copy(Ee.boundingSphere.center)),I.applyMatrix4(A.matrixWorld).applyMatrix4(xe)),Array.isArray(Ce)){const Pe=Ee.groups;for(let Ve=0,Ge=Pe.length;Ve<Ge;Ve++){const Le=Pe[Ve],lt=Ce[Le.materialIndex];lt&&lt.visible&&_.push(A,Ee,lt,Y,I.z,Le)}}else Ce.visible&&_.push(A,Ee,Ce,Y,I.z,null)}}const pe=A.children;for(let Ee=0,Ce=pe.length;Ee<Ce;Ee++)ya(pe[Ee],F,Y,j)}function xh(A,F,Y,j){const k=A.opaque,pe=A.transmissive,Ee=A.transparent;p.setupLightsView(Y),ie===!0&&he.setGlobalState(v.clippingPlanes,Y),j&&te.viewport(y.copy(j)),k.length>0&&Kr(k,F,Y),pe.length>0&&Kr(pe,F,Y),Ee.length>0&&Kr(Ee,F,Y),te.buffers.depth.setTest(!0),te.buffers.depth.setMask(!0),te.buffers.color.setMask(!0),te.setPolygonOffset(!1)}function yh(A,F,Y,j){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[j.id]===void 0&&(p.state.transmissionRenderTarget[j.id]=new ls(1,1,{generateMipmaps:!0,type:X.has("EXT_color_buffer_half_float")||X.has("EXT_color_buffer_float")?Yr:gi,minFilter:ns,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ot.workingColorSpace}));const pe=p.state.transmissionRenderTarget[j.id],Ee=j.viewport||y;pe.setSize(Ee.z,Ee.w);const Ce=v.getRenderTarget();v.setRenderTarget(pe),v.getClearColor(W),$=v.getClearAlpha(),$<1&&v.setClearColor(16777215,.5),v.clear(),C&&Ne.render(Y);const Pe=v.toneMapping;v.toneMapping=Ii;const Ve=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),p.setupLightsView(j),ie===!0&&he.setGlobalState(v.clippingPlanes,j),Kr(A,Y,j),E.updateMultisampleRenderTarget(pe),E.updateRenderTargetMipmap(pe),X.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let Le=0,lt=F.length;Le<lt;Le++){const pt=F[Le],Mt=pt.object,rn=pt.geometry,it=pt.material,Ue=pt.group;if(it.side===Vt&&Mt.layers.test(j.layers)){const Nt=it.side;it.side=sn,it.needsUpdate=!0,Mh(Mt,Y,j,rn,it,Ue),it.side=Nt,it.needsUpdate=!0,Ge=!0}}Ge===!0&&(E.updateMultisampleRenderTarget(pe),E.updateRenderTargetMipmap(pe))}v.setRenderTarget(Ce),v.setClearColor(W,$),Ve!==void 0&&(j.viewport=Ve),v.toneMapping=Pe}function Kr(A,F,Y){const j=F.isScene===!0?F.overrideMaterial:null;for(let k=0,pe=A.length;k<pe;k++){const Ee=A[k],Ce=Ee.object,Pe=Ee.geometry,Ve=j===null?Ee.material:j,Ge=Ee.group;Ce.layers.test(Y.layers)&&Mh(Ce,F,Y,Pe,Ve,Ge)}}function Mh(A,F,Y,j,k,pe){A.onBeforeRender(v,F,Y,j,k,pe),A.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),k.onBeforeRender(v,F,Y,j,A,pe),k.transparent===!0&&k.side===Vt&&k.forceSinglePass===!1?(k.side=sn,k.needsUpdate=!0,v.renderBufferDirect(Y,F,j,k,A,pe),k.side=Ui,k.needsUpdate=!0,v.renderBufferDirect(Y,F,j,k,A,pe),k.side=Vt):v.renderBufferDirect(Y,F,j,k,A,pe),A.onAfterRender(v,F,Y,j,k,pe)}function $r(A,F,Y){F.isScene!==!0&&(F=ze);const j=Q.get(A),k=p.state.lights,pe=p.state.shadowsArray,Ee=k.state.version,Ce=de.getParameters(A,k.state,pe,F,Y),Pe=de.getProgramCacheKey(Ce);let Ve=j.programs;j.environment=A.isMeshStandardMaterial?F.environment:null,j.fog=F.fog,j.envMap=(A.isMeshStandardMaterial?L:M).get(A.envMap||j.environment),j.envMapRotation=j.environment!==null&&A.envMap===null?F.environmentRotation:A.envMapRotation,Ve===void 0&&(A.addEventListener("dispose",Qe),Ve=new Map,j.programs=Ve);let Ge=Ve.get(Pe);if(Ge!==void 0){if(j.currentProgram===Ge&&j.lightsStateVersion===Ee)return bh(A,Ce),Ge}else Ce.uniforms=de.getUniforms(A),A.onBeforeCompile(Ce,v),Ge=de.acquireProgram(Ce,Pe),Ve.set(Pe,Ge),j.uniforms=Ce.uniforms;const Le=j.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Le.clippingPlanes=he.uniform),bh(A,Ce),j.needsLights=Rp(A),j.lightsStateVersion=Ee,j.needsLights&&(Le.ambientLightColor.value=k.state.ambient,Le.lightProbe.value=k.state.probe,Le.directionalLights.value=k.state.directional,Le.directionalLightShadows.value=k.state.directionalShadow,Le.spotLights.value=k.state.spot,Le.spotLightShadows.value=k.state.spotShadow,Le.rectAreaLights.value=k.state.rectArea,Le.ltc_1.value=k.state.rectAreaLTC1,Le.ltc_2.value=k.state.rectAreaLTC2,Le.pointLights.value=k.state.point,Le.pointLightShadows.value=k.state.pointShadow,Le.hemisphereLights.value=k.state.hemi,Le.directionalShadowMap.value=k.state.directionalShadowMap,Le.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Le.spotShadowMap.value=k.state.spotShadowMap,Le.spotLightMatrix.value=k.state.spotLightMatrix,Le.spotLightMap.value=k.state.spotLightMap,Le.pointShadowMap.value=k.state.pointShadowMap,Le.pointShadowMatrix.value=k.state.pointShadowMatrix),j.currentProgram=Ge,j.uniformsList=null,Ge}function Sh(A){if(A.uniformsList===null){const F=A.currentProgram.getUniforms();A.uniformsList=Bo.seqWithValue(F.seq,A.uniforms)}return A.uniformsList}function bh(A,F){const Y=Q.get(A);Y.outputColorSpace=F.outputColorSpace,Y.batching=F.batching,Y.batchingColor=F.batchingColor,Y.instancing=F.instancing,Y.instancingColor=F.instancingColor,Y.instancingMorph=F.instancingMorph,Y.skinning=F.skinning,Y.morphTargets=F.morphTargets,Y.morphNormals=F.morphNormals,Y.morphColors=F.morphColors,Y.morphTargetsCount=F.morphTargetsCount,Y.numClippingPlanes=F.numClippingPlanes,Y.numIntersection=F.numClipIntersection,Y.vertexAlphas=F.vertexAlphas,Y.vertexTangents=F.vertexTangents,Y.toneMapping=F.toneMapping}function Ap(A,F,Y,j,k){F.isScene!==!0&&(F=ze),E.resetTextureUnits();const pe=F.fog,Ee=j.isMeshStandardMaterial?F.environment:null,Ce=P===null?v.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Fi,Pe=(j.isMeshStandardMaterial?L:M).get(j.envMap||Ee),Ve=j.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Ge=!!Y.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Le=!!Y.morphAttributes.position,lt=!!Y.morphAttributes.normal,pt=!!Y.morphAttributes.color;let Mt=Ii;j.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Mt=v.toneMapping);const rn=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,it=rn!==void 0?rn.length:0,Ue=Q.get(j),Nt=p.state.lights;if(ie===!0&&(ue===!0||A!==Z)){const pn=A===Z&&j.id===D;he.setState(j,A,pn)}let st=!1;j.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==Nt.state.version||Ue.outputColorSpace!==Ce||k.isBatchedMesh&&Ue.batching===!1||!k.isBatchedMesh&&Ue.batching===!0||k.isBatchedMesh&&Ue.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Ue.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Ue.instancing===!1||!k.isInstancedMesh&&Ue.instancing===!0||k.isSkinnedMesh&&Ue.skinning===!1||!k.isSkinnedMesh&&Ue.skinning===!0||k.isInstancedMesh&&Ue.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Ue.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Ue.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Ue.instancingMorph===!1&&k.morphTexture!==null||Ue.envMap!==Pe||j.fog===!0&&Ue.fog!==pe||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==he.numPlanes||Ue.numIntersection!==he.numIntersection)||Ue.vertexAlphas!==Ve||Ue.vertexTangents!==Ge||Ue.morphTargets!==Le||Ue.morphNormals!==lt||Ue.morphColors!==pt||Ue.toneMapping!==Mt||Ue.morphTargetsCount!==it)&&(st=!0):(st=!0,Ue.__version=j.version);let bn=Ue.currentProgram;st===!0&&(bn=$r(j,F,k));let ds=!1,on=!1,Ma=!1;const wt=bn.getUniforms(),_i=Ue.uniforms;if(te.useProgram(bn.program)&&(ds=!0,on=!0,Ma=!0),j.id!==D&&(D=j.id,on=!0),ds||Z!==A){J.reverseDepthBuffer?(Se.copy(A.projectionMatrix),mv(Se),gv(Se),wt.setValue(S,"projectionMatrix",Se)):wt.setValue(S,"projectionMatrix",A.projectionMatrix),wt.setValue(S,"viewMatrix",A.matrixWorldInverse);const pn=wt.map.cameraPosition;pn!==void 0&&pn.setValue(S,me.setFromMatrixPosition(A.matrixWorld)),J.logarithmicDepthBuffer&&wt.setValue(S,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&wt.setValue(S,"isOrthographic",A.isOrthographicCamera===!0),Z!==A&&(Z=A,on=!0,Ma=!0)}if(k.isSkinnedMesh){wt.setOptional(S,k,"bindMatrix"),wt.setOptional(S,k,"bindMatrixInverse");const pn=k.skeleton;pn&&(pn.boneTexture===null&&pn.computeBoneTexture(),wt.setValue(S,"boneTexture",pn.boneTexture,E))}k.isBatchedMesh&&(wt.setOptional(S,k,"batchingTexture"),wt.setValue(S,"batchingTexture",k._matricesTexture,E),wt.setOptional(S,k,"batchingIdTexture"),wt.setValue(S,"batchingIdTexture",k._indirectTexture,E),wt.setOptional(S,k,"batchingColorTexture"),k._colorsTexture!==null&&wt.setValue(S,"batchingColorTexture",k._colorsTexture,E));const Sa=Y.morphAttributes;if((Sa.position!==void 0||Sa.normal!==void 0||Sa.color!==void 0)&&He.update(k,Y,bn),(on||Ue.receiveShadow!==k.receiveShadow)&&(Ue.receiveShadow=k.receiveShadow,wt.setValue(S,"receiveShadow",k.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(_i.envMap.value=Pe,_i.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&F.environment!==null&&(_i.envMapIntensity.value=F.environmentIntensity),on&&(wt.setValue(S,"toneMappingExposure",v.toneMappingExposure),Ue.needsLights&&Tp(_i,Ma),pe&&j.fog===!0&&le.refreshFogUniforms(_i,pe),le.refreshMaterialUniforms(_i,j,se,V,p.state.transmissionRenderTarget[A.id]),Bo.upload(S,Sh(Ue),_i,E)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Bo.upload(S,Sh(Ue),_i,E),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&wt.setValue(S,"center",k.center),wt.setValue(S,"modelViewMatrix",k.modelViewMatrix),wt.setValue(S,"normalMatrix",k.normalMatrix),wt.setValue(S,"modelMatrix",k.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const pn=j.uniformsGroups;for(let ba=0,Cp=pn.length;ba<Cp;ba++){const Eh=pn[ba];O.update(Eh,bn),O.bind(Eh,bn)}}return bn}function Tp(A,F){A.ambientLightColor.needsUpdate=F,A.lightProbe.needsUpdate=F,A.directionalLights.needsUpdate=F,A.directionalLightShadows.needsUpdate=F,A.pointLights.needsUpdate=F,A.pointLightShadows.needsUpdate=F,A.spotLights.needsUpdate=F,A.spotLightShadows.needsUpdate=F,A.rectAreaLights.needsUpdate=F,A.hemisphereLights.needsUpdate=F}function Rp(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(A,F,Y){Q.get(A.texture).__webglTexture=F,Q.get(A.depthTexture).__webglTexture=Y;const j=Q.get(A);j.__hasExternalTextures=!0,j.__autoAllocateDepthBuffer=Y===void 0,j.__autoAllocateDepthBuffer||X.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,F){const Y=Q.get(A);Y.__webglFramebuffer=F,Y.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(A,F=0,Y=0){P=A,N=F,R=Y;let j=!0,k=null,pe=!1,Ee=!1;if(A){const Pe=Q.get(A);if(Pe.__useDefaultFramebuffer!==void 0)te.bindFramebuffer(S.FRAMEBUFFER,null),j=!1;else if(Pe.__webglFramebuffer===void 0)E.setupRenderTarget(A);else if(Pe.__hasExternalTextures)E.rebindTextures(A,Q.get(A.texture).__webglTexture,Q.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Le=A.depthTexture;if(Pe.__boundDepthTexture!==Le){if(Le!==null&&Q.has(Le)&&(A.width!==Le.image.width||A.height!==Le.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(A)}}const Ve=A.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Ee=!0);const Ge=Q.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ge[F])?k=Ge[F][Y]:k=Ge[F],pe=!0):A.samples>0&&E.useMultisampledRTT(A)===!1?k=Q.get(A).__webglMultisampledFramebuffer:Array.isArray(Ge)?k=Ge[Y]:k=Ge,y.copy(A.viewport),w.copy(A.scissor),z=A.scissorTest}else y.copy(Me).multiplyScalar(se).floor(),w.copy(we).multiplyScalar(se).floor(),z=We;if(te.bindFramebuffer(S.FRAMEBUFFER,k)&&j&&te.drawBuffers(A,k),te.viewport(y),te.scissor(w),te.setScissorTest(z),pe){const Pe=Q.get(A.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_CUBE_MAP_POSITIVE_X+F,Pe.__webglTexture,Y)}else if(Ee){const Pe=Q.get(A.texture),Ve=F||0;S.framebufferTextureLayer(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,Pe.__webglTexture,Y||0,Ve)}D=-1},this.readRenderTargetPixels=function(A,F,Y,j,k,pe,Ee){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=Q.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ce=Ce[Ee]),Ce){te.bindFramebuffer(S.FRAMEBUFFER,Ce);try{const Pe=A.texture,Ve=Pe.format,Ge=Pe.type;if(!J.textureFormatReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!J.textureTypeReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=A.width-j&&Y>=0&&Y<=A.height-k&&S.readPixels(F,Y,j,k,Ye.convert(Ve),Ye.convert(Ge),pe)}finally{const Pe=P!==null?Q.get(P).__webglFramebuffer:null;te.bindFramebuffer(S.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(A,F,Y,j,k,pe,Ee){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=Q.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ce=Ce[Ee]),Ce){const Pe=A.texture,Ve=Pe.format,Ge=Pe.type;if(!J.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!J.textureTypeReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=A.width-j&&Y>=0&&Y<=A.height-k){te.bindFramebuffer(S.FRAMEBUFFER,Ce);const Le=S.createBuffer();S.bindBuffer(S.PIXEL_PACK_BUFFER,Le),S.bufferData(S.PIXEL_PACK_BUFFER,pe.byteLength,S.STREAM_READ),S.readPixels(F,Y,j,k,Ye.convert(Ve),Ye.convert(Ge),0);const lt=P!==null?Q.get(P).__webglFramebuffer:null;te.bindFramebuffer(S.FRAMEBUFFER,lt);const pt=S.fenceSync(S.SYNC_GPU_COMMANDS_COMPLETE,0);return S.flush(),await pv(S,pt,4),S.bindBuffer(S.PIXEL_PACK_BUFFER,Le),S.getBufferSubData(S.PIXEL_PACK_BUFFER,0,pe),S.deleteBuffer(Le),S.deleteSync(pt),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,F=null,Y=0){A.isTexture!==!0&&(ko("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,A=arguments[1]);const j=Math.pow(2,-Y),k=Math.floor(A.image.width*j),pe=Math.floor(A.image.height*j),Ee=F!==null?F.x:0,Ce=F!==null?F.y:0;E.setTexture2D(A,0),S.copyTexSubImage2D(S.TEXTURE_2D,Y,0,0,Ee,Ce,k,pe),te.unbindTexture()},this.copyTextureToTexture=function(A,F,Y=null,j=null,k=0){A.isTexture!==!0&&(ko("WebGLRenderer: copyTextureToTexture function signature has changed."),j=arguments[0]||null,A=arguments[1],F=arguments[2],k=arguments[3]||0,Y=null);let pe,Ee,Ce,Pe,Ve,Ge;Y!==null?(pe=Y.max.x-Y.min.x,Ee=Y.max.y-Y.min.y,Ce=Y.min.x,Pe=Y.min.y):(pe=A.image.width,Ee=A.image.height,Ce=0,Pe=0),j!==null?(Ve=j.x,Ge=j.y):(Ve=0,Ge=0);const Le=Ye.convert(F.format),lt=Ye.convert(F.type);E.setTexture2D(F,0),S.pixelStorei(S.UNPACK_FLIP_Y_WEBGL,F.flipY),S.pixelStorei(S.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),S.pixelStorei(S.UNPACK_ALIGNMENT,F.unpackAlignment);const pt=S.getParameter(S.UNPACK_ROW_LENGTH),Mt=S.getParameter(S.UNPACK_IMAGE_HEIGHT),rn=S.getParameter(S.UNPACK_SKIP_PIXELS),it=S.getParameter(S.UNPACK_SKIP_ROWS),Ue=S.getParameter(S.UNPACK_SKIP_IMAGES),Nt=A.isCompressedTexture?A.mipmaps[k]:A.image;S.pixelStorei(S.UNPACK_ROW_LENGTH,Nt.width),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,Nt.height),S.pixelStorei(S.UNPACK_SKIP_PIXELS,Ce),S.pixelStorei(S.UNPACK_SKIP_ROWS,Pe),A.isDataTexture?S.texSubImage2D(S.TEXTURE_2D,k,Ve,Ge,pe,Ee,Le,lt,Nt.data):A.isCompressedTexture?S.compressedTexSubImage2D(S.TEXTURE_2D,k,Ve,Ge,Nt.width,Nt.height,Le,Nt.data):S.texSubImage2D(S.TEXTURE_2D,k,Ve,Ge,pe,Ee,Le,lt,Nt),S.pixelStorei(S.UNPACK_ROW_LENGTH,pt),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,Mt),S.pixelStorei(S.UNPACK_SKIP_PIXELS,rn),S.pixelStorei(S.UNPACK_SKIP_ROWS,it),S.pixelStorei(S.UNPACK_SKIP_IMAGES,Ue),k===0&&F.generateMipmaps&&S.generateMipmap(S.TEXTURE_2D),te.unbindTexture()},this.copyTextureToTexture3D=function(A,F,Y=null,j=null,k=0){A.isTexture!==!0&&(ko("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Y=arguments[0]||null,j=arguments[1]||null,A=arguments[2],F=arguments[3],k=arguments[4]||0);let pe,Ee,Ce,Pe,Ve,Ge,Le,lt,pt;const Mt=A.isCompressedTexture?A.mipmaps[k]:A.image;Y!==null?(pe=Y.max.x-Y.min.x,Ee=Y.max.y-Y.min.y,Ce=Y.max.z-Y.min.z,Pe=Y.min.x,Ve=Y.min.y,Ge=Y.min.z):(pe=Mt.width,Ee=Mt.height,Ce=Mt.depth,Pe=0,Ve=0,Ge=0),j!==null?(Le=j.x,lt=j.y,pt=j.z):(Le=0,lt=0,pt=0);const rn=Ye.convert(F.format),it=Ye.convert(F.type);let Ue;if(F.isData3DTexture)E.setTexture3D(F,0),Ue=S.TEXTURE_3D;else if(F.isDataArrayTexture||F.isCompressedArrayTexture)E.setTexture2DArray(F,0),Ue=S.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}S.pixelStorei(S.UNPACK_FLIP_Y_WEBGL,F.flipY),S.pixelStorei(S.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),S.pixelStorei(S.UNPACK_ALIGNMENT,F.unpackAlignment);const Nt=S.getParameter(S.UNPACK_ROW_LENGTH),st=S.getParameter(S.UNPACK_IMAGE_HEIGHT),bn=S.getParameter(S.UNPACK_SKIP_PIXELS),ds=S.getParameter(S.UNPACK_SKIP_ROWS),on=S.getParameter(S.UNPACK_SKIP_IMAGES);S.pixelStorei(S.UNPACK_ROW_LENGTH,Mt.width),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,Mt.height),S.pixelStorei(S.UNPACK_SKIP_PIXELS,Pe),S.pixelStorei(S.UNPACK_SKIP_ROWS,Ve),S.pixelStorei(S.UNPACK_SKIP_IMAGES,Ge),A.isDataTexture||A.isData3DTexture?S.texSubImage3D(Ue,k,Le,lt,pt,pe,Ee,Ce,rn,it,Mt.data):F.isCompressedArrayTexture?S.compressedTexSubImage3D(Ue,k,Le,lt,pt,pe,Ee,Ce,rn,Mt.data):S.texSubImage3D(Ue,k,Le,lt,pt,pe,Ee,Ce,rn,it,Mt),S.pixelStorei(S.UNPACK_ROW_LENGTH,Nt),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,st),S.pixelStorei(S.UNPACK_SKIP_PIXELS,bn),S.pixelStorei(S.UNPACK_SKIP_ROWS,ds),S.pixelStorei(S.UNPACK_SKIP_IMAGES,on),k===0&&F.generateMipmaps&&S.generateMipmap(Ue),te.unbindTexture()},this.initRenderTarget=function(A){Q.get(A).__webglFramebuffer===void 0&&E.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?E.setTextureCube(A,0):A.isData3DTexture?E.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?E.setTexture2DArray(A,0):E.setTexture2D(A,0),te.unbindTexture()},this.resetState=function(){N=0,R=0,P=null,te.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===nh?"display-p3":"srgb",t.unpackColorSpace=ot.workingColorSpace===ga?"display-p3":"srgb"}}class lh{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new $e(e),this.near=t,this.far=i}clone(){return new lh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}let TS=class extends Dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zn,this.environmentIntensity=1,this.environmentRotation=new Zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};class Ec extends us{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new $e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const sf=new dt,wc=new ih,wo=new va,Ao=new U;class xl extends Dt{constructor(e=new Wt,t=new Ec){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),wo.copy(i.boundingSphere),wo.applyMatrix4(s),wo.radius+=r,e.ray.intersectsSphere(wo)===!1)return;sf.copy(s).invert(),wc.copy(e.ray).applyMatrix4(sf);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const u=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=u,_=d;g<_;g++){const p=c.getX(g);Ao.fromBufferAttribute(f,p),rf(Ao,p,l,s,e,t,this)}}else{const u=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let g=u,_=d;g<_;g++)Ao.fromBufferAttribute(f,g),rf(Ao,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function rf(n,e,t,i,s,r,o){const a=wc.distanceSqToPoint(n);if(a<t){const l=new U;wc.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class ch extends Jt{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Qn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let s=0;const r=i.length;let o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);const h=i[s],u=i[s+1]-h,d=(o-h)/u;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new Re:new U);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new U,s=[],r=[],o=[],a=new U,l=new dt;for(let d=0;d<=e;d++){const g=d/e;s[d]=this.getTangentAt(g,new U)}r[0]=new U,o[0]=new U;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),u<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Ht(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(Ht(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class hh extends Qn{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Re){const i=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*h-d*f+this.aX,c=u*f+d*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class RS extends hh{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function uh(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,f){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+f)+(l-a)/f;u*=h,d*=h,s(o,a,u,d)},calc:function(r){const o=r*r,a=o*r;return n+e*r+t*o+i*a}}}const To=new U,yl=new uh,Ml=new uh,Sl=new uh;class CS extends Qn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new U){const i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(To.subVectors(s[0],s[1]).add(s[0]),c=To);const f=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(To.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=To),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(f),d),_=Math.pow(f.distanceToSquared(u),d),p=Math.pow(u.distanceToSquared(h),d);_<1e-4&&(_=1),g<1e-4&&(g=_),p<1e-4&&(p=_),yl.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,g,_,p),Ml.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,g,_,p),Sl.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,g,_,p)}else this.curveType==="catmullrom"&&(yl.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),Ml.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),Sl.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return i.set(yl.calc(l),Ml.calc(l),Sl.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new U().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function of(n,e,t,i,s){const r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function PS(n,e){const t=1-n;return t*t*e}function LS(n,e){return 2*(1-n)*n*e}function IS(n,e){return n*n*e}function br(n,e,t,i){return PS(n,e)+LS(n,t)+IS(n,i)}function DS(n,e){const t=1-n;return t*t*t*e}function NS(n,e){const t=1-n;return 3*t*t*n*e}function US(n,e){return 3*(1-n)*n*n*e}function OS(n,e){return n*n*n*e}function Er(n,e,t,i,s){return DS(n,e)+NS(n,t)+US(n,i)+OS(n,s)}class fp extends Qn{constructor(e=new Re,t=new Re,i=new Re,s=new Re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new Re){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Er(e,s.x,r.x,o.x,a.x),Er(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class FS extends Qn{constructor(e=new U,t=new U,i=new U,s=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new U){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Er(e,s.x,r.x,o.x,a.x),Er(e,s.y,r.y,o.y,a.y),Er(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class dp extends Qn{constructor(e=new Re,t=new Re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Re){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Re){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class kS extends Qn{constructor(e=new U,t=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new U){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new U){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class pp extends Qn{constructor(e=new Re,t=new Re,i=new Re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Re){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(br(e,s.x,r.x,o.x),br(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class BS extends Qn{constructor(e=new U,t=new U,i=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new U){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(br(e,s.x,r.x,o.x),br(e,s.y,r.y,o.y),br(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class mp extends Qn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Re){const i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return i.set(of(a,l.x,c.x,h.x,f.x),of(a,l.y,c.y,h.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new Re().fromArray(s))}return this}}var af=Object.freeze({__proto__:null,ArcCurve:RS,CatmullRomCurve3:CS,CubicBezierCurve:fp,CubicBezierCurve3:FS,EllipseCurve:hh,LineCurve:dp,LineCurve3:kS,QuadraticBezierCurve:pp,QuadraticBezierCurve3:BS,SplineCurve:mp});class zS extends Qn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new af[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(new af[s.type]().fromJSON(s))}return this}}class lf extends zS{constructor(e){super(),this.type="Path",this.currentPoint=new Re,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new dp(this.currentPoint.clone(),new Re(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){const r=new pp(this.currentPoint.clone(),new Re(e,t),new Re(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){const a=new fp(this.currentPoint.clone(),new Re(e,t),new Re(i,s),new Re(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new mp(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){const c=new hh(e,t,i,s,r,o,a,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class $s extends Wt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],l=[],c=new U,h=new Re;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,u=3;f<=t;f++,u+=3){const d=i+f/t*s;c.x=e*Math.cos(d),c.y=e*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/e+1)/2,h.y=(o[u+1]/e+1)/2,l.push(h.x,h.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new vt(o,3)),this.setAttribute("normal",new vt(a,3)),this.setAttribute("uv",new vt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $s(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Fr extends Wt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],f=[],u=[],d=[];let g=0;const _=[],p=i/2;let m=0;x(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new vt(f,3)),this.setAttribute("normal",new vt(u,3)),this.setAttribute("uv",new vt(d,2));function x(){const b=new U,N=new U;let R=0;const P=(t-e)/i;for(let D=0;D<=r;D++){const Z=[],y=D/r,w=y*(t-e)+e;for(let z=0;z<=s;z++){const W=z/s,$=W*l+a,ae=Math.sin($),V=Math.cos($);N.x=w*ae,N.y=-y*i+p,N.z=w*V,f.push(N.x,N.y,N.z),b.set(ae,P,V).normalize(),u.push(b.x,b.y,b.z),d.push(W,1-y),Z.push(g++)}_.push(Z)}for(let D=0;D<s;D++)for(let Z=0;Z<r;Z++){const y=_[Z][D],w=_[Z+1][D],z=_[Z+1][D+1],W=_[Z][D+1];e>0&&(h.push(y,w,W),R+=3),t>0&&(h.push(w,z,W),R+=3)}c.addGroup(m,R,0),m+=R}function v(b){const N=g,R=new Re,P=new U;let D=0;const Z=b===!0?e:t,y=b===!0?1:-1;for(let z=1;z<=s;z++)f.push(0,p*y,0),u.push(0,y,0),d.push(.5,.5),g++;const w=g;for(let z=0;z<=s;z++){const $=z/s*l+a,ae=Math.cos($),V=Math.sin($);P.x=Z*V,P.y=p*y,P.z=Z*ae,f.push(P.x,P.y,P.z),u.push(0,y,0),R.x=ae*.5+.5,R.y=V*.5*y+.5,d.push(R.x,R.y),g++}for(let z=0;z<s;z++){const W=N+z,$=w+z;b===!0?h.push($,$+1,W):h.push($+1,$,W),D+=3}c.addGroup(m,D,b===!0?1:2),m+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class fh extends Fr{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new fh(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class dh extends Wt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};const r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new vt(r,3)),this.setAttribute("normal",new vt(r.slice(),3)),this.setAttribute("uv",new vt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(x){const v=new U,b=new U,N=new U;for(let R=0;R<t.length;R+=3)d(t[R+0],v),d(t[R+1],b),d(t[R+2],N),l(v,b,N,x)}function l(x,v,b,N){const R=N+1,P=[];for(let D=0;D<=R;D++){P[D]=[];const Z=x.clone().lerp(b,D/R),y=v.clone().lerp(b,D/R),w=R-D;for(let z=0;z<=w;z++)z===0&&D===R?P[D][z]=Z:P[D][z]=Z.clone().lerp(y,z/w)}for(let D=0;D<R;D++)for(let Z=0;Z<2*(R-D)-1;Z++){const y=Math.floor(Z/2);Z%2===0?(u(P[D][y+1]),u(P[D+1][y]),u(P[D][y])):(u(P[D][y+1]),u(P[D+1][y+1]),u(P[D+1][y]))}}function c(x){const v=new U;for(let b=0;b<r.length;b+=3)v.x=r[b+0],v.y=r[b+1],v.z=r[b+2],v.normalize().multiplyScalar(x),r[b+0]=v.x,r[b+1]=v.y,r[b+2]=v.z}function h(){const x=new U;for(let v=0;v<r.length;v+=3){x.x=r[v+0],x.y=r[v+1],x.z=r[v+2];const b=p(x)/2/Math.PI+.5,N=m(x)/Math.PI+.5;o.push(b,1-N)}g(),f()}function f(){for(let x=0;x<o.length;x+=6){const v=o[x+0],b=o[x+2],N=o[x+4],R=Math.max(v,b,N),P=Math.min(v,b,N);R>.9&&P<.1&&(v<.2&&(o[x+0]+=1),b<.2&&(o[x+2]+=1),N<.2&&(o[x+4]+=1))}}function u(x){r.push(x.x,x.y,x.z)}function d(x,v){const b=x*3;v.x=e[b+0],v.y=e[b+1],v.z=e[b+2]}function g(){const x=new U,v=new U,b=new U,N=new U,R=new Re,P=new Re,D=new Re;for(let Z=0,y=0;Z<r.length;Z+=9,y+=6){x.set(r[Z+0],r[Z+1],r[Z+2]),v.set(r[Z+3],r[Z+4],r[Z+5]),b.set(r[Z+6],r[Z+7],r[Z+8]),R.set(o[y+0],o[y+1]),P.set(o[y+2],o[y+3]),D.set(o[y+4],o[y+5]),N.copy(x).add(v).add(b).divideScalar(3);const w=p(N);_(R,y+0,x,w),_(P,y+2,v,w),_(D,y+4,b,w)}}function _(x,v,b,N){N<0&&x.x===1&&(o[v]=x.x-1),b.x===0&&b.z===0&&(o[v]=N/2/Math.PI+.5)}function p(x){return Math.atan2(x.z,-x.x)}function m(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dh(e.vertices,e.indices,e.radius,e.details)}}class gp extends lf{constructor(e){super(e),this.uuid=Qs(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(new lf().fromJSON(s))}return this}}const HS={triangulate:function(n,e,t=2){const i=e&&e.length,s=i?e[0]*t:n.length;let r=vp(n,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,f,u,d;if(i&&(r=YS(n,e,r,t)),n.length>80*t){a=c=n[0],l=h=n[1];for(let g=t;g<s;g+=t)f=n[g],u=n[g+1],f<a&&(a=f),u<l&&(l=u),f>c&&(c=f),u>h&&(h=u);d=Math.max(c-a,h-l),d=d!==0?32767/d:0}return kr(r,o,t,a,l,d,0),o}};function vp(n,e,t,i,s){let r,o;if(s===ib(n,e,t,i)>0)for(r=e;r<t;r+=i)o=cf(r,n[r],n[r+1],o);else for(r=t-i;r>=e;r-=i)o=cf(r,n[r],n[r+1],o);return o&&xa(o,o.next)&&(zr(o),o=o.next),o}function cs(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(xa(t,t.next)||yt(t.prev,t,t.next)===0)){if(zr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function kr(n,e,t,i,s,r,o){if(!n)return;!o&&r&&JS(n,i,s,r);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?GS(n,i,s,r):VS(n)){e.push(l.i/t|0),e.push(n.i/t|0),e.push(c.i/t|0),zr(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=WS(cs(n),e,t),kr(n,e,t,i,s,r,2)):o===2&&XS(n,e,t,i,s,r):kr(cs(n),e,t,i,s,r,1);break}}}function VS(n){const e=n.prev,t=n,i=n.next;if(yt(e,t,i)>=0)return!1;const s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,h=s<r?s<o?s:o:r<o?r:o,f=a<l?a<c?a:c:l<c?l:c,u=s>r?s>o?s:o:r>o?r:o,d=a>l?a>c?a:c:l>c?l:c;let g=i.next;for(;g!==e;){if(g.x>=h&&g.x<=u&&g.y>=f&&g.y<=d&&Ds(s,a,r,l,o,c,g.x,g.y)&&yt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function GS(n,e,t,i){const s=n.prev,r=n,o=n.next;if(yt(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,h=s.y,f=r.y,u=o.y,d=a<l?a<c?a:c:l<c?l:c,g=h<f?h<u?h:u:f<u?f:u,_=a>l?a>c?a:c:l>c?l:c,p=h>f?h>u?h:u:f>u?f:u,m=Ac(d,g,e,t,i),x=Ac(_,p,e,t,i);let v=n.prevZ,b=n.nextZ;for(;v&&v.z>=m&&b&&b.z<=x;){if(v.x>=d&&v.x<=_&&v.y>=g&&v.y<=p&&v!==s&&v!==o&&Ds(a,h,l,f,c,u,v.x,v.y)&&yt(v.prev,v,v.next)>=0||(v=v.prevZ,b.x>=d&&b.x<=_&&b.y>=g&&b.y<=p&&b!==s&&b!==o&&Ds(a,h,l,f,c,u,b.x,b.y)&&yt(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;v&&v.z>=m;){if(v.x>=d&&v.x<=_&&v.y>=g&&v.y<=p&&v!==s&&v!==o&&Ds(a,h,l,f,c,u,v.x,v.y)&&yt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;b&&b.z<=x;){if(b.x>=d&&b.x<=_&&b.y>=g&&b.y<=p&&b!==s&&b!==o&&Ds(a,h,l,f,c,u,b.x,b.y)&&yt(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function WS(n,e,t){let i=n;do{const s=i.prev,r=i.next.next;!xa(s,r)&&_p(s,i,i.next,r)&&Br(s,r)&&Br(r,s)&&(e.push(s.i/t|0),e.push(i.i/t|0),e.push(r.i/t|0),zr(i),zr(i.next),i=n=r),i=i.next}while(i!==n);return cs(i)}function XS(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&eb(o,a)){let l=xp(o,a);o=cs(o,o.next),l=cs(l,l.next),kr(o,e,t,i,s,r,0),kr(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function YS(n,e,t,i){const s=[];let r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=vp(n,a,l,i,!1),c===c.next&&(c.steiner=!0),s.push(QS(c));for(s.sort(qS),r=0;r<s.length;r++)t=jS(s[r],t);return t}function qS(n,e){return n.x-e.x}function jS(n,e){const t=KS(n,e);if(!t)return e;const i=xp(t,n);return cs(i,i.next),cs(t,t.next)}function KS(n,e){let t=e,i=-1/0,s;const r=n.x,o=n.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const u=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=r&&u>i&&(i=u,s=t.x<t.next.x?t:t.next,u===r))return s}t=t.next}while(t!==e);if(!s)return null;const a=s,l=s.x,c=s.y;let h=1/0,f;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&Ds(o<c?r:i,o,l,c,o<c?i:r,o,t.x,t.y)&&(f=Math.abs(o-t.y)/(r-t.x),Br(t,n)&&(f<h||f===h&&(t.x>s.x||t.x===s.x&&$S(s,t)))&&(s=t,h=f)),t=t.next;while(t!==a);return s}function $S(n,e){return yt(n.prev,n,e.prev)<0&&yt(e.next,n,n.next)<0}function JS(n,e,t,i){let s=n;do s.z===0&&(s.z=Ac(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,ZS(s)}function ZS(n){let e,t,i,s,r,o,a,l,c=1;do{for(t=n,n=null,r=null,o=0;t;){for(o++,i=t,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||t.z<=i.z)?(s=t,t=t.nextZ,a--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;t=i}r.nextZ=null,c*=2}while(o>1);return n}function Ac(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function QS(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Ds(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function eb(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!tb(n,e)&&(Br(n,e)&&Br(e,n)&&nb(n,e)&&(yt(n.prev,n,e.prev)||yt(n,e.prev,e))||xa(n,e)&&yt(n.prev,n,n.next)>0&&yt(e.prev,e,e.next)>0)}function yt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function xa(n,e){return n.x===e.x&&n.y===e.y}function _p(n,e,t,i){const s=Co(yt(n,e,t)),r=Co(yt(n,e,i)),o=Co(yt(t,i,n)),a=Co(yt(t,i,e));return!!(s!==r&&o!==a||s===0&&Ro(n,t,e)||r===0&&Ro(n,i,e)||o===0&&Ro(t,n,i)||a===0&&Ro(t,e,i))}function Ro(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Co(n){return n>0?1:n<0?-1:0}function tb(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&_p(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Br(n,e){return yt(n.prev,n,n.next)<0?yt(n,e,n.next)>=0&&yt(n,n.prev,e)>=0:yt(n,e,n.prev)<0||yt(n,n.next,e)<0}function nb(n,e){let t=n,i=!1;const s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function xp(n,e){const t=new Tc(n.i,n.x,n.y),i=new Tc(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function cf(n,e,t,i){const s=new Tc(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function zr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Tc(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function ib(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class wr{static area(e){const t=e.length;let i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return wr.area(e)<0}static triangulateShape(e,t){const i=[],s=[],r=[];hf(e),uf(i,e);let o=e.length;t.forEach(hf);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,uf(i,t[l]);const a=HS.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function hf(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function uf(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class na extends dh{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new na(e.radius,e.detail)}}class Js extends Wt{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);const a=[],l=[],c=[],h=[];let f=e;const u=(t-e)/s,d=new U,g=new Re;for(let _=0;_<=s;_++){for(let p=0;p<=i;p++){const m=r+p/i*o;d.x=f*Math.cos(m),d.y=f*Math.sin(m),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/t+1)/2,g.y=(d.y/t+1)/2,h.push(g.x,g.y)}f+=u}for(let _=0;_<s;_++){const p=_*(i+1);for(let m=0;m<i;m++){const x=m+p,v=x,b=x+i+1,N=x+i+2,R=x+1;a.push(v,b,R),a.push(b,N,R)}}this.setIndex(a),this.setAttribute("position",new vt(l,3)),this.setAttribute("normal",new vt(c,3)),this.setAttribute("uv",new vt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Js(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ph extends Wt{constructor(e=new gp([new Re(0,.5),new Re(-.5,-.5),new Re(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],s=[],r=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new vt(s,3)),this.setAttribute("normal",new vt(r,3)),this.setAttribute("uv",new vt(o,2));function c(h){const f=s.length/3,u=h.extractPoints(t);let d=u.shape;const g=u.holes;wr.isClockWise(d)===!1&&(d=d.reverse());for(let p=0,m=g.length;p<m;p++){const x=g[p];wr.isClockWise(x)===!0&&(g[p]=x.reverse())}const _=wr.triangulateShape(d,g);for(let p=0,m=g.length;p<m;p++){const x=g[p];d=d.concat(x)}for(let p=0,m=d.length;p<m;p++){const x=d[p];s.push(x.x,x.y,0),r.push(0,0,1),o.push(x.x,x.y)}for(let p=0,m=_.length;p<m;p++){const x=_[p],v=x[0]+f,b=x[1]+f,N=x[2]+f;i.push(v,b,N),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return sb(t,e)}static fromJSON(e,t){const i=[];for(let s=0,r=e.shapes.length;s<r;s++){const o=t[e.shapes[s]];i.push(o)}return new ph(i,e.curveSegments)}}function sb(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){const s=n[t];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e}class zs extends Wt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const o=[],a=[],l=[],c=[],h=new U,f=new U,u=new U;for(let d=0;d<=i;d++)for(let g=0;g<=s;g++){const _=g/s*r,p=d/i*Math.PI*2;f.x=(e+t*Math.cos(p))*Math.cos(_),f.y=(e+t*Math.cos(p))*Math.sin(_),f.z=t*Math.sin(p),a.push(f.x,f.y,f.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),u.subVectors(f,h).normalize(),l.push(u.x,u.y,u.z),c.push(g/s),c.push(d/i)}for(let d=1;d<=i;d++)for(let g=1;g<=s;g++){const _=(s+1)*d+g-1,p=(s+1)*(d-1)+g-1,m=(s+1)*(d-1)+g,x=(s+1)*d+g;o.push(_,p,x),o.push(p,m,x)}this.setIndex(o),this.setAttribute("position",new vt(a,3)),this.setAttribute("normal",new vt(l,3)),this.setAttribute("uv",new vt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zs(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class yp extends us{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new $e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Kd,this.normalScale=new Re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class mh extends Dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class rb extends mh{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new $e(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const bl=new dt,ff=new U,df=new U;class Mp{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Re(512,512),this.map=null,this.mapPass=null,this.matrix=new dt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rh,this._frameExtents=new Re(1,1),this._viewportCount=1,this._viewports=[new ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;ff.setFromMatrixPosition(e.matrixWorld),t.position.copy(ff),df.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(df),t.updateMatrixWorld(),bl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(bl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const pf=new dt,ur=new U,El=new U;class ob extends Mp{constructor(){super(new _n(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Re(4,2),this._viewportCount=6,this._viewports=[new ct(2,1,1,1),new ct(0,1,1,1),new ct(3,1,1,1),new ct(1,1,1,1),new ct(3,0,1,1),new ct(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),ur.setFromMatrixPosition(e.matrixWorld),i.position.copy(ur),El.copy(i.position),El.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(El),i.updateMatrixWorld(),s.makeTranslation(-ur.x,-ur.y,-ur.z),pf.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pf)}}class mf extends mh{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new ob}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class ab extends Mp{constructor(){super(new oh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class lb extends mh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.shadow=new ab}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const gf=new dt;class cb{constructor(e,t,i=0,s=1/0){this.ray=new ih(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new sh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return gf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(gf),this}intersectObject(e,t=!0,i=[]){return Rc(e,this,i,t),i.sort(vf),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Rc(e[s],this,i,t);return i.sort(vf),i}}function vf(n,e){return n.distance-e.distance}function Rc(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)Rc(r[o],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jc);class hb{constructor(){ce(this,"geometry");ce(this,"materials",["#ed4326","#ff931f","#ffe77b"].map(e=>new Ft({color:e,side:Vt,toneMapped:!1,depthWrite:!1})));const e=new gp;e.moveTo(0,0),e.bezierCurveTo(-.5,-.02,-.65,.35,-.38,.75),e.bezierCurveTo(-.4,.48,-.1,.49,-.18,.89),e.bezierCurveTo(-.24,1.16,.15,1.27,.13,1.6),e.bezierCurveTo(.62,1.23,.18,.94,.38,.65),e.bezierCurveTo(.43,.82,.64,.89,.59,1.05),e.bezierCurveTo(.97,.53,.75,.03,.15,0),e.closePath(),this.geometry=new ph(e,16)}create(e=!1){const t=new bt;for(let i=0;i<3;i++){const s=new Je(e?this.geometry.clone():this.geometry,this.materials[i]);s.scale.set(i===0?1:i===1?.69:.36,i===0?1:i===1?.73:.46,1),s.position.set(i*.035,.015*i,.012*i),s.renderOrder=1+i,t.add(s)}return t}dispose(){this.geometry.dispose();for(const e of this.materials)e.dispose()}}class ub{constructor(e=Math.random){ce(this,"drops",[]);ce(this,"wounds",[]);this.random=e}clear(){this.drops.length=0,this.wounds.length=0}get emitterCount(){return this.wounds.length}burst(e,t,i,s,r=!1){for(let o=0;o<i&&this.drops.length<600;o++)this.drops.push({x:e,y:t,z:1.1+(this.random()-.5)*.3,vx:(this.random()-.5)*(s?4:5),vy:s?7+this.random()*6:r?-1-this.random()*3:(this.random()-.35)*5,vz:(this.random()-.5)*1.8,life:1.6+this.random()*.6,settled:!1})}event(e,t=!1){if(e.kind==="hit"&&this.burst(e.x,e.y,t?7:30,!1),e.kind!=="detach"||!e.part||!e.severed)return;const i=e.part==="head";this.burst(e.x,e.y,t?16:i?80:50,i,!i),this.wounds.length<32&&this.wounds.push({actor:e.actor,part:e.part,x:e.x,y:e.y,life:3,carry:0,up:i})}update(e,t,i=!1){for(let s=this.wounds.length-1;s>=0;s--){const r=this.wounds[s];if(r.life-=e,r.life<=0){this.wounds.splice(s,1);continue}const o=t.actors[r.actor];if(o&&o.hp>0){const l=vn(o,r.part);r.x=o.x+l.x,r.y=o.y+l.y+(r.up?-.2:l.h*.35)}r.carry+=e*(i?10:36);const a=Math.floor(r.carry);r.carry-=a,this.burst(r.x,r.y,a,r.up,!r.up)}for(let s=this.drops.length-1;s>=0;s--){const r=this.drops[s];if(r.life-=e,r.life<=0||r.y<-15){this.drops.splice(s,1);continue}if(r.settled)continue;const o=r.y;if(r.x+=r.vx*e,r.y+=r.vy*e,r.z+=r.vz*e,r.vy-=17*e,r.vy>=0)continue;let a=-1/0;for(const l of t.props){if(l.hp<=0||l.falling||!["crate","floor","roof","balcony","table","car","truck","barrier"].includes(l.kind))continue;const c=l.y+l.h/2;Math.abs(r.x-l.x)<=l.w/2&&o>=c&&r.y<=c&&(a=Math.max(a,c))}a>-1/0&&(r.y=a+.025,r.settled=!0,r.vx=r.vy=r.vz=0,r.life=1.2)}}}const Ar=new Map;let Wn;function fb(){if(Wn)return Wn;const n=document.createElement("canvas");n.width=128,n.height=128;const e=n.getContext("2d");e.fillStyle="#ededeb",e.fillRect(0,0,128,128);let t=719;const i=()=>(t=Math.imul(t,1664525)+1013904223|0,(t>>>0)/4294967296);for(let s=0;s<2e3;s++)e.fillStyle=`rgba(24,19,31,${i()*.15})`,e.fillRect(i()*128,i()*128,1+i()*3,1+i()*2);for(let s=0;s<14;s++)e.fillStyle="#231c3014",e.fillRect(i()*128,i()*128,1+i()*6,i()*28);return Wn=new ch(n),Wn.colorSpace=nn,Wn.magFilter=$t,Wn}function Cn(n){return Ar.has(n)||Ar.set(n,new yp({color:n,roughness:.88,flatShading:!0,map:Xr.includes(n)||pa.includes(n)?null:fb()})),Ar.get(n)}function mi(n,e,t,i){const s=new Je(new Un(n,e,t),Cn(i));return s.castShadow=!0,s.receiveShadow=!0,s}function De(n,e,t,i,s,r,o,a){const l=mi(e,t,i,a);return l.position.set(s,r,o),n.add(l),l}const Tr=new Map;function St(n,e,t,i="#f7d438",s="#241e33"){const r=n+i+s;if(!Tr.has(r)){const o=document.createElement("canvas");o.width=512,o.height=192;const a=o.getContext("2d");a.fillStyle=s,a.fillRect(0,0,512,192),a.strokeStyle=i,a.lineWidth=7,a.strokeRect(10,10,492,172);const l=n.split(`
`);a.fillStyle=i,a.textAlign="center",a.textBaseline="middle",a.font=`900 ${l.length>1?54:72}px Impact, sans-serif`,l.forEach((h,f)=>a.fillText(h,256,96+(f-(l.length-1)/2)*65,470));const c=new ch(o);c.colorSpace=nn,c.magFilter=$t,Tr.set(r,new Ft({map:c}))}return new Je(new fs(e,t),Tr.get(r))}function db(n){const e=new bt;e.userData.look=JSON.stringify(n);for(const t of un){const i=os[t],s=Xr[n.skin],r=Gs[n.color],a=t==="head"||t.startsWith("hand")||t.startsWith("forearm")||n.clothes===1&&t.startsWith("arm")?s:t.startsWith("foot")?"#272530":t.startsWith("thigh")||t.startsWith("shin")?n.clothes===2?r:"#333346":r,l=mi(i.w,i.h,.5,a);if(l.name=t,l.position.set(i.x,i.y,0),e.add(l),t==="torso"&&(n.clothes===0?(De(l,.06,.75,.025,0,0,.27,"#292635"),De(l,.16,.13,.03,.2,.05,.27,"#eed5a0")):n.clothes===2&&(De(l,.6,.12,.025,0,-.15,.27,"#c7c8c0"),De(l,.08,.7,.03,-.2,0,.27,"#a9a9a0")),n.gender===1&&De(l,.35,.23,.025,0,.08,.27,"#cfcccc"),n.gender===2&&(De(l,.04,.3,.04,-.23,.27,.27,"#f3dc7d"),De(l,.04,.3,.04,.23,.27,.27,"#f3dc7d"))),t==="head"){De(l,.12,.07,.035,-.15,.05,.27,"#26212e"),De(l,.12,.07,.035,.15,.05,.27,"#26212e"),De(l,.15,.035,.035,0,-.14,.28,"#6b353b");const c=pa[n.hairColor];if(n.hair!==4){if(De(l,n.hair===2?.18:.64,n.hair===2?.35:.19,.54,0,.36,0,c),n.hair===1)for(const h of[-.21,0,.21])De(l,.23,.22,.6,h,.4,0,c);n.hair===3&&(De(l,.14,.65,.53,-.31,0,0,c),De(l,.14,.65,.53,.31,0,0,c))}}}return e}function wl(n){const e=new bt;if(n==="laser")De(e,.85,.25,.23,.05,0,0,"#334052"),De(e,.3,.12,.3,.55,0,0,"#66ffff"),De(e,.12,.35,.14,-.2,-.2,0,"#6c40a8");else if(n==="flamethrower")De(e,.8,.25,.25,.1,0,0,"#795536"),De(e,.3,.3,.3,.55,0,0,"#ff7735"),De(e,.35,.6,.3,-.25,-.1,0,"#ba332b");else if(n==="axe")De(e,.12,.95,.12,0,0,0,"#865d3d"),De(e,.55,.4,.16,.16,.35,0,"#b9bec3");else if(n==="spear"){De(e,.1,2.6,.1,0,.3,0,"#977047"),De(e,.18,.12,.18,0,1.52,0,"#dfb55e");const t=new Je(new fh(.17,.5,4),Cn("#bdece5"));t.position.y=1.8,e.add(t)}else if(n==="shank"){De(e,.14,.35,.14,0,-.12,0,"#3d3545");const t=De(e,.12,.5,.05,0,.27,0,"#e0e4df");t.rotation.z=-.07}else n==="shotgun"?(De(e,1,.12,.14,.2,0,0,"#9296a0"),De(e,.48,.22,.21,-.4,-.05,0,"#906445"),De(e,.23,.23,.22,.07,-.06,0,"#69503c")):n==="smg"&&(De(e,.8,.25,.2,0,0,0,"#4b5160"),De(e,.12,.4,.12,-.1,-.25,0,"#343645"),De(e,.35,.1,.11,.5,.07,0,"#9b9fa8"));return e}function Sp(n,e){const t=new bt,i=n.w,s=n.h,o={metal:"#68737c",wood:"#7f665c",glass:"#3c929c",fuel:"#c7444f",concrete:"#5d5c6a",fabric:"#837e78"}[n.material],a=(l,c,h,f,u,d,g)=>De(t,l,c,h,f,u,d,g);switch(n.kind){case"entrance":{a(i+.3,s+.3,.25,0,0,-2.6,e==="impound"?"#7e6748":"#39464e");const h=mi(i,s,.16,e==="laundry"?"#b16a61":e==="market"?"#557c97":"#8b7949");h.position.z=-2.35,h.name="entry-door",t.add(h);const f=St(e==="laundry"?"STAFF ONLY":e==="market"?"DELIVERIES":"NO RELEASE",i*.9,.5,"#e3ce83","#303339");f.position.set(0,s*.3,-2.22),f.name="entry-label",t.add(f);const u=St("INCOMING",i*.95,.55,"#ff8c9b","#462936");u.name="entry-warning",u.visible=!1,u.position.set(0,.1,-2.15),t.add(u);break}case"washer":case"dryer":{a(i,s,1.5,0,0,0,n.kind==="washer"?"#99aaa4":"#be896d");const h=new Je(new zs(i*.3,.09,6,20),Cn("#d5d1bb"));h.position.set(0,-.08,.81),t.add(h);const f=new Je(new $s(i*.26,20),Cn(n.kind==="dryer"?"#5c3a38":"#294956"));f.position.set(0,-.08,.82),t.add(f);const u=new bt;u.name="laundry-drum";for(let d=0;d<3;d++)De(u,.35,.22,.05,Math.cos(d*2.1)*.35,Math.sin(d*2.1)*.35,.86,["#e2bc69","#ba4e75","#82bab2"][d]);t.add(u),a(i*.8,.25,.08,0,s*.35,.8,"#39434a"),a(.2,.16,.1,i*.25,s*.35,.87,"#a4e6bf");break}case"detergent":case"freezer":{n.kind==="freezer"?(a(i,s,.8,0,0,-1.3,"#729eaf"),a(i*.8,s*.75,.06,0,0,-.86,"#243f55"),a(.1,s*.7,.15,i*.22,0,-.74,"#b9dbe0")):(a(i,s,.6,0,0,0,"#42c5ce"),a(i*.4,.12,.3,0,s*.55,0,"#ffd35c"));const h=new Je(new $s(3.7,32),new Ft({color:n.kind==="freezer"?"#68b9ff":"#49e4dc",transparent:!0,opacity:.27,side:Vt,depthWrite:!1,toneMapped:!1}));h.rotation.x=-Math.PI/2,h.position.set(0,-n.y+.25,0),h.scale.y=.55,h.userData.ownedMaterial=!0,t.add(h);const f=St(n.kind==="freezer"?"COLD / SLOW":"SOAP / SLIPPERY",3,.4,n.kind==="freezer"?"#a9d9ff":"#a6f8ef","#263b4a");if(f.position.set(0,s*.65+.3,.6),t.add(f),n.kind==="freezer"){const u=new bt;u.name="cold-air";for(let d=0;d<3;d++){const g=new Je(new na(.45,0),new Ft({color:"#b2deff",transparent:!0,opacity:.2,depthWrite:!1}));g.position.set(d-1,-1,.6),g.userData.ownedMaterial=!0,u.add(g)}t.add(u)}break}case"shelf":for(const h of[-s*.4,0,s*.4]){a(i,.12,1.3,0,h,0,"#78887b");for(let f=0;f<4;f++)a(.7,.65,.8,(f-1.5)*i*.22,h+.38,0,["#b99d55","#a95950","#719c9e","#a7b36f"][f])}for(const h of[-i*.48,i*.48])a(.12,s,1.2,h,0,0,"#616c75");break;case"pallet":for(let h=0;h<4;h++)a(i,.14,1.6,0,-s*.35+h*s*.24,0,h%2?"#987447":"#c19a62");for(const h of[-i*.35,i*.35])a(.25,s,1.4,h,0,0,"#735b43");break;case"forklift":a(i*.65,s*.35,1.8,-i*.1,-s*.15,0,"#d8a73a"),a(.6,s,1.5,i*.22,0,0,"#514d43"),a(i*.5,.15,.18,i*.4,-s*.4,.7,"#b7b6a0"),a(i*.5,.15,.18,i*.4,-s*.4,-.7,"#b7b6a0");for(const h of[-i*.3,i*.23])for(const f of[-.85,.85]){const u=new Je(new Fr(.4,.4,.25,10),Cn("#2a2b30"));u.rotation.x=Math.PI/2,u.position.set(h,-s*.32,f),t.add(u)}break;case"towchain":for(let h=0;h<9;h++){const f=new Je(new zs(.17,.05,5,10),Cn("#ff5268"));f.position.set((h/8-.5)*i,0,.2),f.rotation.y=h%2?.9:0,t.add(f)}break;case"stall":{a(i,s,.18,0,0,-2.1,"#273b3e");for(const g of[-i/2,i/2])a(.12,s,2.8,g,0,-.7,"#47756e"),a(.16,.2,.2,g,-s/2,.6,"#b6b6a4");a(1.1,.55,1.1,0,-s*.31,-.7,"#d7d6bb"),a(.85,1.1,.35,0,-s*.18,-1.3,"#c8c8b3");const h=new bt;h.name="stall-door",h.position.set(-i*.44,0,.8);const f=mi(i*.88,s*.85,.13,"#577d70");f.position.x=i*.44,h.add(f);const u=mi(.22,.12,.12,"#dfba72");u.position.set(i*.8,0,.12),h.add(u),t.add(h);const d=St("OCCUPIED",i*.7,.4,"#ffbe91","#38252f");d.name="stall-label",d.position.set(0,s*.33,.93),t.add(d);break}case"urinal":{if(a(i,s,.3,0,0,-1.4,"#cbcbb5"),a(i*.85,s*.5,.9,0,-s*.16,-.9,"#e0dec5"),a(i*.57,s*.29,.07,0,-s*.08,-.41,n.toxic?"#b4d834":"#436b66"),a(.13,s*.3,.13,0,s*.62,-1.25,"#b7b8a9"),a(.4,.12,.16,0,s*.45,-1.15,"#b7b8a9"),n.toxic){const h=St("TOXIC / KEEP BACK",3,.45,"#ff7b87","#3f222d");h.position.set(0,s*.7,.1),t.add(h);const f=new Je(new Js(2.45,2.6,32),new Ft({color:"#ff345f",side:Vt,transparent:!0,opacity:.85,depthWrite:!1,toneMapped:!1}));f.rotation.x=-Math.PI/2,f.position.set(0,-n.y+.25,0),f.userData.ownedMaterial=!0,t.add(f);const u=new bt;u.name="toxic-gas";for(let d=0;d<4;d++){const g=new Je(new na(.5,0),new Ft({color:d%2?"#c9df43":"#92b82e",transparent:!0,opacity:.22,depthWrite:!1,toneMapped:!1}));g.position.set((d-1.5)*1.15,-.6,.5+d%2*.4),g.userData.ownedMaterial=!0,u.add(g)}t.add(u)}break}case"sink":a(i,.38,1.5,0,s*.2,-.5,"#cbccb7"),a(i*.55,.08,.85,0,s*.2+.21,-.5,"#52635d"),a(.18,s*.6,.18,0,-s*.15,-.5,"#818e84"),a(.15,.6,.15,i*.3,s*.4,-.8,"#b2b8af");break;case"crate":{a(i,s,1,0,0,0,n.color?"#bd6944":"#9f7c45");for(const u of[-i*.43,i*.43])a(.12,s,.08,u,0,.54,"#e0b979");for(const u of[-s*.43,s*.43])a(i,.1,.08,0,u,.55,"#e0b979");const h=new Je(new Js(.16,.22,16),Cn("#ffe17b"));h.position.set(0,.12,.57),t.add(h);const f=St(n.color?"AIM HIGH":"AIM LOW",1.1,.27,"#ffe17b");f.position.set(0,-.31,.58),t.add(f);break}case"floor":a(i,s,8,0,0,-1,e==="bathroom"?"#61756a":"#454353"),e!=="bathroom"&&a(i*.4,.025,.12,0,s/2+.035,-1.5,"#a69a70"),a(i,.04,.12,0,s/2+.02,2.9,e==="bathroom"?"#a6ad95":"#9c8958");break;case"pump":a(i,s,1.35,0,0,-.6,"#bd364f"),a(i*.9,s*.4,1.5,0,.45,-.55,"#d3cebc"),a(i*.65,.6,.07,0,.65,.23,"#152d31");const l=St("9.99",i*.6,.45,"#a4e8ab","#13272b");l.position.set(0,.7,.29),t.add(l),a(.1,s*.7,.1,i*.57,-.3,-.1,"#1a1728");break;case"car":case"truck":a(i,s*.55,2,0,-s*.1,0,n.kind==="car"?"#b6a46c":"#527a78"),a(i*.48,s*.5,1.7,-i*.1,s*.34,0,n.kind==="car"?"#537c81":"#9b8174"),a(i*.4,s*.3,.06,-i*.1,s*.33,.89,"#243b4c"),a(i,.18,2.1,0,-s*.36,0,"#393442");for(const h of[-i*.34,i*.34]){const f=new Je(new Fr(.52,.52,2.1,10),Cn("#26232d"));f.rotation.x=Math.PI/2,f.position.set(h,-s*.35,0),t.add(f)}a(.25,.25,.04,i*.43,0,1.03,"#e7d68f");break;case"post":case"pole":a(i,s,.6,0,0,-2,o),a(i*1.5,.2,.9,0,-s/2,-2,"#8f8b8f");break;case"roof":case"balcony":a(i,s,5,0,0,-1.2,e==="motel"?"#857587":"#b54b72"),a(i,.14,.15,0,0,1.35,"#f1b638");break;case"glass":const c=new Je(new Un(i,s,.09),new yp({color:"#488894",transparent:!0,opacity:.6,roughness:.3}));c.position.z=-1.2,c.userData.ownedMaterial=!0,t.add(c),a(i,.07,.13,0,-s/2,-1.15,"#c8b7a0");break;case"sign":{const h=e==="gas"?`LAST STOP
GAS`:e==="rest"?`REST AREA
1 MILE`:`NO-TELL
VACANCY`;a(i,s,.35,0,0,-1.8,"#382e48");const f=St(h,i*.94,s*.93,e==="motel"?"#ff8bad":"#f6d23a");f.position.z=-1.59,t.add(f);break}case"can":a(i,s,.6,0,0,0,"#d7ad3a"),a(i*.5,.15,.18,0,s/2,0,"#33303b");break;case"door":a(i,s,.2,0,0,-1.9,"#694761"),a(.09,.09,.1,i*.3,0,-1.73,"#ead176");break;case"table":case"bench":a(i,.24,1.6,0,s*.35,0,o);for(const h of[-i*.36,i*.36])a(.15,s,.8,h,0,0,"#514353");break;case"mattress":a(i,s,1.8,0,0,0,"#aea291");for(let h=-i*.4;h<i*.5;h+=.45)a(.04,s*1.01,1.81,h,0,0,"#857887");break;case"tire":{const h=new Je(new zs(i*.36,i*.16,6,12),Cn("#292735"));t.add(h);break}case"railing":a(i,.09,.12,0,s/2,-.1,"#bcaabb");for(let h=-i/2;h<i/2;h+=.8)a(.06,s,.1,h,0,-.1,"#bcaabb");break;default:if(a(i,s,1.35,0,0,0,o),["fridge","vending","ice","tv"].includes(n.kind)){a(i*.8,s*.7,.07,0,s*.05,.71,"#243745");const h=St(n.kind==="vending"?`BAD
IDEA`:n.kind==="ice"?"ICE":n.kind==="tv"?"NO SIGNAL":"COLD",i*.7,s*.45,n.kind==="tv"?"#b99bbb":"#b9cfa2","#1e3040");h.position.set(0,.1,.76),t.add(h)}if(n.kind==="ac")for(let h=-i*.4;h<i*.4;h+=.22)a(.06,s*.65,.05,h,0,.73,"#383b4b")}return t}function pb(n){const e=new bt,t=document.createElement("canvas");t.width=2048,t.height=512;const i=t.getContext("2d");i.fillStyle=n==="motel"?"#261f37":n==="rest"?"#263339":"#2b263a",i.fillRect(0,0,2048,512);for(let a=0;a<90;a++){const l=a*25,c=130+a*73%150;i.fillStyle=["#343246","#3f364b","#2e3446"][a%3],i.fillRect(l,c,30+a%6*9,512-c),i.fillStyle=a%2?"#927652":"#486577";for(let h=0;h<5;h++)i.fillRect(l+8,c+20+h*36,7,10)}if(n==="bathroom"||n==="laundry"||n==="market"){i.fillStyle=n==="laundry"?"#bc9b89":n==="market"?"#6c8292":"#729080",i.fillRect(0,0,2048,512);for(let a=0;a<8;a++)for(let l=0;l<64;l++)i.fillStyle=(n==="laundry"?["#b39b88","#cbb29b","#ba9c88","#ae9180"]:n==="market"?["#647e8c","#728b95","#5e7885","#88979b"]:["#6f8b7c","#7e9684","#637f76","#8c9e86"])[(a*7+l*11)%4],i.fillRect(l*32+1,a*64+1,30,62),(a*13+l*3)%19===0&&(i.fillStyle="#475b4d",i.fillRect(l*32+7,a*64+5,3,48))}const s=new ch(t);s.colorSpace=nn,s.magFilter=$t;const r=new Je(new fs(190,35),new Ft({map:s}));r.position.set(0,["bathroom","laundry","market"].includes(n)?5:12,["bathroom","laundry","market"].includes(n)?-6:-18),["bathroom","laundry","market"].includes(n)&&r.scale.set(128/190,12/35,1),r.userData.ownedTexture=!0,e.add(r);const o=new bt;if(n==="gas"){De(o,31,8,1,24,3,-5,"#675d73"),De(o,31,.5,1.4,24,7,-4.8,"#b95b74");for(let l=13;l<38;l+=6)De(o,4.8,3.5,.06,l,2.4,-4.43,"#273c4c");const a=St("CHEAP THRILLS / OPEN 24H",27,1.4,"#f0c32f","#33283e");a.position.set(24,6,-4.4),o.add(a)}else if(n==="motel"){De(o,118,10,1,0,4.5,-4.5,"#66576c"),De(o,119,.6,1.4,0,9.5,-4.2,"#9d617e");for(let a=-50;a<55;a+=11)for(const l of[2,7]){De(o,4.2,3.4,.05,a,l,-3.94,"#302b3d");const c=St(String(101+Math.floor((a+50)/11)+(l>3?10:0)),1.2,.5,"#cca881","#372d40");c.position.set(a,l+1.1,-3.88),o.add(c)}}else if(n==="bathroom"){for(const c of[1,7.5])De(o,128,.14,.2,0,c,-4.5,"#414e4b");for(let c=-54;c<60;c+=18){De(o,5,.18,1,c,8.2,-.8,"#e1ebc6");const h=new Je(new Un(4.6,.08,.8),new Ft({color:"#dcf4c0"}));h.position.set(c,8.08,-.8),h.userData.ownedMaterial=!0,o.add(h)}const a=St("STALL OF DUTY / TRUCK STOP BATHROOM",30,1,"#efe3aa","#35413e");a.position.set(-35,6.5,-3),o.add(a);const l=St("TOXIC URINALS / BREAK TO DISABLE",24,.9,"#ff8c9b","#3e2532");l.position.set(30,6.5,-3),o.add(l)}else if(n==="laundry"||n==="market"){for(let c=-54;c<60;c+=16)De(o,5,.2,.8,c,8,-1,"#d3d6b8"),De(o,1,6,.2,c,3,-4.5,n==="laundry"?"#a97664":"#4b626d");const a=St(n==="laundry"?"SPIN CYCLE SLAUGHTER / OPEN ALL NIGHT":"COLD CUTS / RECEIVING & DISPATCH",42,1.3,n==="laundry"?"#ffd279":"#bce9ef",n==="laundry"?"#6c3f43":"#293e4c");a.position.set(-25,6.5,-3),o.add(a);const l=St(n==="laundry"?"CAUTION / OVERLOADED MACHINES":"FORKLIFT LANE / KEEP CLEAR",25,1,"#ff9f98","#412c36");l.position.set(30,6.5,-3),o.add(l)}else if(n==="impound"){for(let c=-60;c<=60;c+=4){De(o,.14,5,.18,c,2.5,-3.5,"#79877d");for(let h=1;h<5;h++)De(o,4,.035,.06,c+2,h,-3.4,"#73827d")}De(o,17,6,1,-45,3,-6,"#726c5c");const a=St("FINAL NOTICE / VEHICLE IMPOUND",32,2,"#ffc666","#45383a");a.position.set(-28,7,-3),o.add(a);const l=St("NO REFUNDS / WATCH THE CHAINS",26,1.3,"#ff8d8e","#3c2a34");l.position.set(28,6,-3),o.add(l)}else{De(o,25,6,1,27,2.7,-5,"#656c73");const a=St("RESTROOMS / NO GUARANTEES",24,1.2,"#94c6bd","#263c45");a.position.set(27,5,-4.4),o.add(a)}return e.add(o),e}function tn(n){n.traverse(e=>{var t;if(e instanceof Je&&(e.geometry.dispose(),e.userData.ownedMaterial&&e.material.dispose(),e.userData.ownedTexture)){const i=e.material;(t=i.map)==null||t.dispose(),i.dispose()}})}function mb(){Wn==null||Wn.dispose(),Wn=void 0,Ar.forEach(n=>n.dispose()),Ar.clear(),Tr.forEach(n=>{var e;(e=n.map)==null||e.dispose(),n.dispose()}),Tr.clear()}function bp(n,e){return n==="head"||n.startsWith("hand")||n.startsWith("forearm")?Xr[e.skin]:n.startsWith("foot")?"#292735":Gs[e.color]}function _f(n){if(n.kind==="washer-door"){const e=new bt,t=new Je(new zs(.55,.1,6,20),Cn("#c3cdc6"));e.add(t);const i=new Je(new $s(.48,20),Cn("#365967"));return i.position.z=.02,e.add(i),e}if(n.kind==="limb"){const e=new bt,t=n.part??"forearmL",i=os[t];return e.add(mi(i.w,i.h,.35,n.look?bp(t,n.look):"#b87953")),e}return Sp({kind:n.kind,y:0,w:n.kind==="tire"?1.1:n.kind==="can"?.7:1.1,h:n.kind==="tire"||n.kind==="can"?1.2:1.3,hp:n.hp,maxHp:n.hp,material:n.kind==="can"?"fuel":n.kind==="tv"?"glass":"fabric",color:0},"gas")}function xf(n){const e=new bt;if(n==="cart"){De(e,1,.12,.65,0,-.12,0,"#75d8bf"),De(e,.1,.7,.65,.45,.2,0,"#75d8bf"),De(e,.8,.3,.08,0,.1,.3,"#b7ecda"),De(e,.8,.3,.08,0,.1,-.3,"#b7ecda");for(const t of[-.35,.35])for(const i of[-.25,.25]){const s=mi(.18,.18,.12,"#26232d");s.position.set(t,-.34,i),e.add(s)}}else for(const t of[-.25,.25])if(De(e,.35,.3,.35,t,0,0,n==="recoil"?"#af83f2":"#75d8bf"),De(e,.5,.13,.4,t+.08,-.2,0,"#d2f6da"),n==="skates")for(const i of[-.13,.13])De(e,.13,.13,.42,t+i,-.33,0,"#ffe17b");else De(e,.2,.12,.25,t,-.34,0,"#ffb255");return e}const yf=.46;class gb{constructor(e,t,i){ce(this,"renderer");ce(this,"scene",new TS);ce(this,"camera",new oh);ce(this,"actors",new Map);ce(this,"props",new Map);ce(this,"blood",new Map);ce(this,"debris",new Map);ce(this,"shots",new Map);ce(this,"pickups",new Map);ce(this,"environment",new bt);ce(this,"venue","");ce(this,"flames",new Map);ce(this,"flameStyle",new hb);ce(this,"thrownModels",new Map);ce(this,"boostModels",new Map);ce(this,"majorModel");ce(this,"bloodParticles",new ub);ce(this,"bloodGeometry",new Wt);ce(this,"bloodPositions",new Float32Array(600*3));ce(this,"bloodPoints",new xl(this.bloodGeometry,new Ec({size:6,sizeAttenuation:!1,color:"#f52e48",transparent:!0,opacity:1,depthWrite:!1,toneMapped:!1,fog:!1})));ce(this,"bloodRound",-1);ce(this,"hitCounterLayer",document.createElement("div"));ce(this,"hitCounters",new Map);ce(this,"beams",[]);ce(this,"frame",0);ce(this,"last",0);ce(this,"center",0);ce(this,"width",1);ce(this,"height",1);ce(this,"observer");ce(this,"focused",0);ce(this,"particleGeometry",new Wt);ce(this,"positions",new Float32Array(500*3));ce(this,"colors",new Float32Array(500*3));ce(this,"particles",[]);ce(this,"points");ce(this,"sun");ce(this,"left",new Je(new fs(1,30),new Ft({color:"#c83f62",transparent:!0,opacity:.22,side:Vt,depthWrite:!1})));ce(this,"right",this.left.clone());ce(this,"reducedEffects",!1);ce(this,"resize",()=>{this.width=Math.max(1,this.host.clientWidth),this.height=Math.max(1,this.host.clientHeight),this.renderer.setSize(this.width,this.height);const e=this.width/this.height,t=e<.8?12:9;this.camera.left=-t*e,this.camera.right=t*e,this.camera.top=t,this.camera.bottom=-t,this.camera.near=.1,this.camera.far=150,this.camera.updateProjectionMatrix()});ce(this,"animate",e=>{const t=Math.min(.08,(e-this.last)/1e3||0);this.last=e,this.render(this.state(),t,e/1e3),this.frame=requestAnimationFrame(this.animate)});this.host=e,this.state=t,this.localId=i,this.renderer=new AS({antialias:!1,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,1.4)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Kc,this.renderer.outputColorSpace=nn,this.renderer.toneMapping=Fd,this.renderer.toneMappingExposure=1.28,e.appendChild(this.renderer.domElement),this.hitCounterLayer.className="hit-counters",this.hitCounterLayer.setAttribute("aria-hidden","true"),e.appendChild(this.hitCounterLayer),this.scene.background=new $e("#211b32"),this.scene.fog=new lh("#211b32",40,105),this.scene.add(new rb("#b7a8d8","#43424a",2.5)),this.sun=new lb("#edd6a5",3),this.sun.position.set(-10,16,14),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(1024,1024),Object.assign(this.sun.shadow.camera,{left:-24,right:24,top:20,bottom:-15,far:70}),this.sun.shadow.normalBias=.05,this.scene.add(this.sun,this.sun.target);const s=new mf("#ed2867",160,33);s.position.set(-27,8,6);const r=new mf("#26c6c1",120,33);r.position.set(25,7,5),this.scene.add(s,r),this.scene.add(this.environment,this.left,this.right),this.left.position.z=3.5,this.right.position.z=3.5,this.particleGeometry.setAttribute("position",new dn(this.positions,3).setUsage(Va)),this.particleGeometry.setAttribute("color",new dn(this.colors,3).setUsage(Va)),this.particleGeometry.setDrawRange(0,0),this.points=new xl(this.particleGeometry,new Ec({size:3,sizeAttenuation:!1,toneMapped:!1,vertexColors:!0,transparent:!0,opacity:.95,depthWrite:!1})),this.points.frustumCulled=!1,this.scene.add(this.points),this.bloodGeometry.setAttribute("position",new dn(this.bloodPositions,3).setUsage(Va)),this.bloodGeometry.setDrawRange(0,0),this.bloodPoints.frustumCulled=!1,this.bloodPoints.renderOrder=3,this.scene.add(this.bloodPoints),this.observer=new ResizeObserver(this.resize),this.observer.observe(e),this.resize(),this.frame=requestAnimationFrame(this.animate)}get canvas(){return this.renderer.domElement}soundPosition(e,t){const i=new U(e,t,.7).project(this.camera);return wg(i.x,i.y)}setSpectator(e){this.focused=e}aim(e,t){const i=this.host.getBoundingClientRect(),s=new Re((e-i.left)/i.width*2-1,-(t-i.top)/i.height*2+1),r=new cb;r.setFromCamera(s,this.camera);const o=new U;if(r.ray.intersectPlane(new Ai(new U(0,0,1),0),o)){const a=this.state().actors[this.localId()],l=o.x-a.x,c=o.y-a.y-hn(a),h=Math.max(.01,Math.hypot(l,c));return{x:Math.round(l/h*1024)/1024,y:Math.round(c/h*1024)/1024}}return{x:1,y:0}}present(e){var t;this.bloodRound!==this.state().round&&(this.bloodParticles.clear(),this.clearHitCounters(),this.bloodRound=this.state().round);for(const i of e){if(this.bloodParticles.event(i,this.reducedEffects),i.kind==="hit"){const o=i.hitCounter;if((o==null?void 0:o.owner)===this.localId()){if(this.hitCounters.size>=48){const h=this.hitCounters.keys().next().value;(t=this.hitCounters.get(h))==null||t.label.remove(),this.hitCounters.delete(h)}const a=document.createElement("span");a.className=o.multiplier>1?"hit-counter boosted":"hit-counter",a.textContent=String(-Math.max(1,Math.round(o.damage))),this.hitCounterLayer.appendChild(a);const l=(Math.random()<.5?-1:1)*(18+Math.random()*35),c=Math.sign(l)*(8+Math.random()*12);this.hitCounters.set(i.id,{label:a,position:new U(i.x,i.y+.65,1),life:yf,side:l,angle:c})}continue}if(i.kind==="detach")continue;if(i.weapon==="laser"&&i.endX!==void 0&&i.endY!==void 0){const o=i.endX-i.x,a=i.endY-i.y,l=new Je(new Un(Math.max(.01,Math.hypot(o,a)),.085,.085),new Ft({color:"#8cffff",transparent:!0,opacity:1,depthWrite:!1}));l.position.set((i.x+i.endX)/2,(i.y+i.endY)/2,.8),l.rotation.z=Math.atan2(a,o),this.scene.add(l),this.beams.push({mesh:l,life:.16})}if(i.kind==="launch"&&this.particles.length<460){for(let o=0;o<(this.reducedEffects?6:22);o++)this.particles.push({x:i.x,y:i.y,z:1,vx:((i.endX??i.x)-i.x)*10+(Math.random()-.5)*4,vy:((i.endY??i.y)-i.y)*10+(Math.random()-.5)*4,life:.2+Math.random()*.2,color:new $e("#a5eee3")});continue}if(["ignite","jump","land","swap","reload"].includes(i.kind))continue;const s=new $e(i.kind==="scream"||i.kind==="cry"?"#80cde1":i.kind==="explosion"?"#f9a349":i.kind==="break"?"#d2c3a4":"#f9de5e"),r=this.reducedEffects?2:i.kind==="explosion"?35:i.kind==="shot"?4:10;for(let o=0;o<r&&this.particles.length<500;o++)this.particles.push({x:i.x,y:i.y,z:1,vx:(Math.random()-.5)*(i.kind==="explosion"?12:6),vy:Math.random()*7,life:i.kind==="shot"?.08:.3+Math.random()*.4,color:s})}}chaosEffects(e,t){for(const[s,r]of this.thrownModels)e.thrown.some(o=>o.id===s)||(this.scene.remove(r),tn(r),this.thrownModels.delete(s));for(const s of e.thrown){let r=this.thrownModels.get(s.id);if(!r){r=_f(s);const o=new Je(new Js(.65,.71,20),new Ft({color:"#ff345f",side:Vt,toneMapped:!1}));o.position.z=1.2,o.userData.ownedMaterial=!0,r.add(o),this.thrownModels.set(s.id,r),this.scene.add(r)}r.position.set(s.x,s.y,.8),r.rotation.z=s.angle}for(const[s,r]of this.boostModels)e.boosts.some(o=>o.id===s)||(this.scene.remove(r),tn(r),this.boostModels.delete(s));for(const s of e.boosts){let r=this.boostModels.get(s.id);if(!r){r=xf(s.kind);const o=St(Nd[s.kind],2.5,.4,"#a9f5d7");o.position.set(0,.85,.3),r.add(o),this.boostModels.set(s.id,r),this.scene.add(r)}r.position.set(s.x,s.y+Math.sin(t*3)*.1,1),r.rotation.y=Math.sin(t)*.15}const i=e.major;if(this.majorModel&&(!i||i.kind!==this.majorModel.kind)&&(this.scene.remove(this.majorModel.group),tn(this.majorModel.group),this.majorModel=void 0),i){const s=i.kind==="foam",r=i.kind==="truck"||i.kind==="forklift",o=r?128:s?16:i.kind==="spin"?8:i.kind==="tow"?12:4;if(!this.majorModel){const c=new bt,h=s?"#78e9cf":"#ff345f",f=St(s?"FOAM / NO DAMAGE":i.kind==="truck"?"DANGER / TRUCK →":i.kind==="forklift"?"DANGER / FORKLIFT →":i.kind==="spin"?"DANGER / DOOR + DRYER FIRE":i.kind==="pallet"?"DANGER / FALLING PALLET":i.kind==="tow"?"DANGER / TOW — SHOOT CHAIN":"DANGER / FALLING AC",4,.6,h);f.name="warning",c.add(f);const u=r?48:12;for(let d=0;d<u;d++){const g=new Je(new Un(o/u*.6,.035,2.8),new Ft({color:h,transparent:!0,opacity:.6,toneMapped:!1,depthWrite:!1}));g.userData.ownedMaterial=!0,g.position.set((d/(u-1)-.5)*o,.28,.8),g.rotation.y=.3,c.add(g)}this.scene.add(c),this.majorModel={kind:i.kind,group:c}}const a=this.majorModel.group;a.position.x=r?0:i.x;const l=a.getObjectByName("warning");if(l.position.set(r?Math.max(this.center-8,Math.min(this.center+8,i.x)):0,3.7,2),l.scale.setScalar(.98+Math.sin(t*6)*.025),s&&i.started&&this.particles.length<470)for(let c=0;c<2;c++)this.particles.push({x:i.x+(Math.random()-.5)*16,y:6,z:1,vx:.4,vy:-3,life:1.5,color:new $e("#acf5e3")})}}burningEffects(e,t,i){const s=[...e.fires.map(r=>({key:`f${r.id}`,x:r.x,y:r.y-.3,w:r.radius*1.6,h:1.8})),...e.actors.filter(r=>r.hp>0&&r.onFire).map(r=>({key:`a${r.id}`,x:r.x,y:r.y+.15,w:1,h:Rn(r)})),...e.props.filter(r=>r.hp>0&&r.onFire).map(r=>({key:`p${r.id}`,x:r.x,y:r.y-r.h/2,w:Math.min(5,r.w),h:Math.min(3,r.h)})),...e.debris.filter(r=>r.hp>0&&r.onFire).map(r=>({key:`d${r.id}`,x:r.x,y:r.y-r.h/2,w:r.w,h:.5})),...e.boosts.filter(r=>r.onFire).map(r=>({key:`b${r.id}`,x:r.x,y:r.y,w:.8,h:.6})),...e.pickups.filter(r=>r.onFire).map(r=>({key:`i${r.id}`,x:r.x,y:r.y,w:.6,h:.6}))].filter(r=>Math.abs(r.x-this.center)<30).slice(0,96);for(const[r,o]of this.flames)s.some(a=>a.key===r)||(this.scene.remove(o),this.flames.delete(r));for(const r of s){let o=this.flames.get(r.key);if(!o){o=new bt;for(let a=0;a<5;a++){const l=this.flameStyle.create();o.add(l)}this.flames.set(r.key,o),this.scene.add(o)}o.position.set(r.x,r.y,.75),o.quaternion.copy(this.camera.quaternion),o.children.forEach((a,l)=>{const c=.86+Math.sin(t*10+l*2+r.x)*.13+Math.sin(t*17+l)*.06,h=Math.max(.45,r.h)*c;a.position.set((l/4-.5)*r.w+Math.sin(t*7+l)*.045,0,l*.035),a.scale.set((r.w/4+.3)*(1.05-Math.sin(t*10+l)*.08),h*.7,1),a.rotation.z=Math.sin(t*8+l)*.055}),!this.reducedEffects&&this.particles.length<480&&Math.random()<i*8&&this.particles.push({x:r.x,y:r.y+r.h,z:.5,vx:.3,vy:1.6,life:.8,color:new $e("#57505c")})}}clearHitCounters(){this.hitCounterLayer.replaceChildren(),this.hitCounters.clear()}updateHitCounters(e){const t=new U;for(const[i,s]of this.hitCounters){if(s.life-=e,s.life<=0){s.label.remove(),this.hitCounters.delete(i);continue}t.copy(s.position).project(this.camera);const r=1-s.life/yf,o=1-(1-r)**3,a=(t.x+1)*this.width/2+s.side*(this.reducedEffects?.35:o),l=(1-t.y)*this.height/2-(this.reducedEffects?0:54*o),c=this.reducedEffects?0:s.angle*(1-r),h=this.reducedEffects?1:1+Math.max(0,1-r*5)*.65;s.label.style.transform="translate("+a+"px,"+l+"px) translate(-50%,-100%) rotate("+c+"deg) scale("+h+")",s.label.style.opacity=String(Math.min(1,s.life/.16))}}render(e,t,i){var h,f;if(e.venue!==this.venue){this.scene.remove(this.environment),tn(this.environment),this.environment=pb(e.venue),this.scene.add(this.environment),this.venue=e.venue;for(const u of this.props.values())this.scene.remove(u),tn(u);this.props.clear()}const s=e.phase==="lobby"||e.phase==="countdown",r=e.actors[this.localId()],o=r.hp>0?r:((h=e.actors[this.focused])==null?void 0:h.hp)>0&&!e.actors[this.focused].pendingSpawn?e.actors[this.focused]:e.actors.find(u=>u.hp>0&&!u.pendingSpawn)??r,a=s?-25:o.x;this.center+=(a-this.center)*(1-Math.exp(-t*7)||1);const l=s?4:Math.max(4,o.y+2);this.camera.position.set(this.center+3.5,l+4,30),this.camera.lookAt(this.center,l,0),this.camera.updateMatrixWorld(),this.sun.position.set(this.center-12,16,14),this.sun.target.position.set(this.center,0,0),this.left.visible=this.right.visible=e.phase==="match",this.left.position.x=e.zoneLeft-50,this.left.scale.x=100,this.left.position.y=8,this.right.position.x=e.zoneRight+50,this.right.scale.x=100,this.right.position.y=8;for(const u of e.actors){let d=this.actors.get(u.id);if(d&&d.userData.look!==JSON.stringify(u.look)&&(this.scene.remove(d),tn(d),this.actors.delete(u.id),d=void 0),d||(d=db(u.look),this.scene.add(d),this.actors.set(u.id,d)),!u.human&&u.personality&&!d.getObjectByName("personality")){const w=St(cg[u.personality],2.3,.32,"#eacb79");w.name="personality",d.add(w)}const g=d.getObjectByName("personality");g&&g.position.set(0,Rn(u)+.5,.5),d.visible=s?u.id===this.localId():u.hp>0&&!u.pendingSpawn,d.scale.setScalar(s?2:1),d.position.set(s?-20:u.x,s?1.1:u.y,s?6:0);const _=Os(u);!s&&_===1&&u.grounded&&(d.position.y+=Math.abs(Math.sin(i*10))*.22*Math.min(1,Math.abs(u.vx)/2));const p=Math.sin(i*14)*Math.min(1,Math.abs(u.vx)/5);for(const w of un){const z=d.getObjectByName(w);z.visible=s||u.parts[w]>0;const W=vn(u,w);if(z.position.set(W.x,W.y,0),z.scale.y=W.length/os[w].h,z.rotation.z=W.rotation+(_>0&&(w.startsWith("thigh")||w.startsWith("shin"))?(w.endsWith("L")?1:-1)*p*.22:w==="torso"&&!u.parts.head?Math.sin(i*8)*.12:0),!s&&_===0&&u.grounded){const $=Math.sin(i*11)*Math.min(1,Math.abs(u.vx)/1.5);w==="torso"&&(z.rotation.z+=$*.035)}}const m=!u.parts.armL&&!u.parts.armR?"body":u.weapons[u.slot]??"shank";let x=d.getObjectByName("weapon");(x==null?void 0:x.userData.weapon)!==m&&(x&&(d.remove(x),tn(x)),x=wl(m),x.name="weapon",x.userData.weapon=m,d.add(x));const v=Ls(u),b=m==="shank"||m==="axe"||m==="spear",N=m==="axe"?.35:m==="shank"?.09:0;x.position.set(v.x+v.dx*N,v.y+v.dy*N,.4),x.rotation.z=v.angle-(b?Math.PI/2:0),x.scale.setScalar(m==="shank"?.75:1),x.visible=!u.carrying;let R=d.getObjectByName("carried");const P=u.carrying?JSON.stringify(u.carrying):"";R&&R.userData.signature!==P&&(d.remove(R),tn(R),R=void 0),u.carrying&&!R&&(R=_f(u.carrying),R.name="carried",R.userData.signature=P,d.add(R)),R&&(R.position.set(v.x,v.y,.7),R.rotation.z=v.angle*.3,R.scale.setScalar(.65));let D=d.getObjectByName("charge-cart");((f=u.boost)==null?void 0:f.kind)==="cart"&&u.boost.until>e.frame?(D||(D=xf("cart"),D.name="charge-cart",d.add(D)),D.position.set(u.face*.45,.4,.4)):D&&(d.remove(D),tn(D));let Z=d.getObjectByName("stun-stars");if((u.stunUntil??0)>e.frame){if(!Z){Z=new bt,Z.name="stun-stars";for(let w=0;w<3;w++){const z=mi(.12,.12,.12,"#ffe17b");z.position.set(Math.cos(w*Math.PI*2/3)*.55,0,Math.sin(w*Math.PI*2/3)*.55),Z.add(z)}d.add(Z)}Z.position.y=Rn(u)+.25,Z.rotation.y=i*5}else Z&&(d.remove(Z),tn(Z));const y=d.getObjectByName("torso");y.rotation.z+=u.attacking>0?u.face*.08:0}for(const[u,d]of this.props)e.props.some(g=>g.id===u&&g.hp>0)||(this.scene.remove(d),tn(d),this.props.delete(u));for(const u of e.props){if(u.hp<=0)continue;let d=this.props.get(u.id);d||(d=Sp(u,e.venue),this.props.set(u.id,d),this.scene.add(d)),d.position.set(u.x,u.y,0),d.rotation.z=u.falling?Math.sin(i*3)*.08:0;const g=d.getObjectByName("entry-door"),_=d.getObjectByName("entry-label");if(g){const R=u.openedAt===void 0?0:Math.min(1,(e.frame-u.openedAt)/45);g.scale.y=Math.max(.03,1-R),g.position.y=R*u.h*.5,_&&(_.visible=R<.2)}const p=d.getObjectByName("entry-warning");p&&(p.visible=e.actors.some(R=>R.entryId===u.id&&R.pendingSpawn&&R.hp>0&&R.entryWarningAt!==void 0),p.scale.setScalar(1+Math.sin(i*12)*.06));const m=d.getObjectByName("laundry-drum");m&&(m.rotation.z=i*(u.kind==="dryer"?2:4));const x=d.getObjectByName("cold-air");x&&(x.visible=!s,x.children.forEach((R,P)=>{R.position.x=Math.sin(i+P*2)*2.6,R.position.y=-1.1+Math.sin(i*.7+P)*.2}));const v=d.getObjectByName("stall-door"),b=d.getObjectByName("stall-label");if(v){const R=u.openedAt===void 0?0:Math.min(1,Math.max(0,(e.frame-u.openedAt)/30));v.rotation.y=-1.5*R,b&&(b.visible=R<.2)}const N=d.getObjectByName("toxic-gas");N&&(N.visible=!s,N.children.forEach((R,P)=>{const D=(i*.55+P*.25)%1;R.position.y=-1+D*2,R.scale.setScalar(.8+D*.65),R.material.opacity=(1-D)*.25})),u.burn&&u.fuel>0&&this.particles.length<480&&Math.random()<t*(this.reducedEffects?3:22)&&this.particles.push({x:u.x+(Math.random()-.5)*u.w,y:u.y+u.h*.3,z:1,vx:Math.random()-.5,vy:3+Math.random()*2,life:.6,color:new $e(Math.random()>.5?"#ef6b32":"#efbf3b")})}const c=e.blood.filter(u=>e.props.some(d=>d.id===u.surface&&d.hp>0&&!d.falling));for(const[u,d]of this.blood)c.some(g=>g.id===u)||(this.scene.remove(d),tn(d),this.blood.delete(u));for(const u of c){let d=this.blood.get(u.id);if(!d){d=new bt;for(let g=0;g<10;g++){const _=new Je(new $s(g===0?1:.08+g%3*.035,12),new Ft({color:g%2?"#8b1738":"#63152c",side:Vt,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1}));_.userData.ownedMaterial=!0,_.rotation.x=-Math.PI/2,_.scale.set(g===0?1.25:1,g===0?.55:1,1),g>0&&_.position.set(Math.cos(g*2.4+u.id)*(.5+g*.11),.001*g,Math.sin(g*2.4+u.id)*(.3+g*.06)),d.add(_)}this.blood.set(u.id,d),this.scene.add(d)}d.position.set(u.x,u.y,.4),d.visible=!s}for(const[u,d]of this.debris)e.debris.some(g=>g.id===u)||(this.scene.remove(d),d.geometry.dispose(),this.debris.delete(u));for(const u of e.debris){let d=this.debris.get(u.id);d||(d=mi(u.w,u.h,.35,u.part&&u.look?bp(u.part,u.look):Gs[u.color%Gs.length]),this.debris.set(u.id,d),this.scene.add(d)),d.position.set(u.x,u.y,1),d.rotation.z=u.angle??0}for(const[u,d]of this.shots)e.shots.some(g=>g.id===u)||(this.scene.remove(d),tn(d),this.shots.delete(u));for(const u of e.shots){let d=this.shots.get(u.id);d||(u.weapon==="axe"?d=wl("axe"):u.weapon==="flamethrower"?d=this.flameStyle.create(!0):(d=new Je(new Un(u.weapon==="shotgun"?.16:.45,.06,.06),new Ft({color:u.owner===this.localId()?"#ffdd3f":"#ff675d"})),d.userData.ownedMaterial=!0),this.shots.set(u.id,d),this.scene.add(d)),d.position.set(u.x,u.y,.65),d.rotation.z=u.weapon==="axe"?(22-u.life)*.55:Math.atan2(u.vy,u.vx)-(u.weapon==="flamethrower"?Math.PI/2:0),u.weapon==="flamethrower"&&(d.quaternion.copy(this.camera.quaternion),d.rotateZ(Math.atan2(u.vy,u.vx)-Math.PI/2),d.scale.setScalar(.22+(15-u.life)*.018))}for(const[u,d]of this.pickups)e.pickups.some(g=>g.id===u)||(this.scene.remove(d),tn(d),this.pickups.delete(u));for(const u of e.pickups){let d=this.pickups.get(u.id);if(!d){if(d=wl(u.weapon),u.weapon==="laser"||u.weapon==="flamethrower"||u.weapon==="spear"){const _=St(u.weapon==="laser"?"2 SHOTS":u.weapon==="spear"?"SPEAR / LAUNCH":"FIRE SALE",1.7,.45,"#8cffff");_.position.set(0,.85,.1),d.add(_)}const g=new Je(new Js(.6,.67,20),new Ft({color:"#f0d432",side:Vt}));g.userData.ownedMaterial=!0,d.add(g),this.scene.add(d),this.pickups.set(u.id,d)}d.position.set(u.x,u.y+Math.sin(i*3)*.15,1),d.rotation.z=Math.sin(i)*.1}for(let u=this.particles.length-1;u>=0;u--){const d=this.particles[u];if(d.life-=t,d.life<=0){this.particles.splice(u,1);continue}d.x+=d.vx*t,d.y+=d.vy*t,d.vy-=t*9}this.particles.forEach((u,d)=>{this.positions.set([u.x,u.y,u.z],d*3),this.colors.set([u.color.r,u.color.g,u.color.b],d*3)}),this.particleGeometry.setDrawRange(0,this.particles.length),this.particleGeometry.attributes.position.needsUpdate=!0,this.particleGeometry.attributes.color.needsUpdate=!0;for(let u=this.beams.length-1;u>=0;u--){const d=this.beams[u];d.life-=t,d.life<=0?(this.scene.remove(d.mesh),d.mesh.geometry.dispose(),d.mesh.material.dispose(),this.beams.splice(u,1)):d.mesh.material.opacity=d.life/.16}(this.bloodRound!==e.round||s)&&(this.bloodParticles.clear(),this.clearHitCounters(),this.bloodRound=e.round),this.bloodParticles.update(t,e,this.reducedEffects),this.bloodParticles.drops.forEach((u,d)=>this.bloodPositions.set([u.x,u.y,u.z],d*3)),this.bloodGeometry.setDrawRange(0,this.bloodParticles.drops.length),this.bloodGeometry.attributes.position.needsUpdate=!0,this.chaosEffects(e,i),this.burningEffects(e,i,t),this.updateHitCounters(t),this.renderer.render(this.scene,this.camera)}dispose(){this.hitCounterLayer.remove(),this.hitCounters.clear();for(const e of this.beams)e.mesh.material.dispose();cancelAnimationFrame(this.frame),this.observer.disconnect(),this.scene.traverse(e=>{(e instanceof Je||e instanceof xl)&&e.geometry.dispose()}),this.points.material instanceof us&&this.points.material.dispose(),this.bloodPoints.material.dispose(),this.bloodGeometry.dispose(),this.flameStyle.dispose(),mb(),this.renderer.dispose(),this.renderer.domElement.remove()}}const gh=128,Hs=60/gh/4,Rr=256,vb=[[48,51,55],[44,48,51],[41,44,48],[43,47,50,53]],_b=[[72,75,79,78,79,75,73,72],[70,75,74,67,68,71,75,74],[77,75,72,68,72,75,80,79],[74,71,67,65,67,71,74,73]];function xb(n){const e=(n%Rr+Rr)%Rr,t=Math.floor(e/16),i=e%16,s=vb[Math.floor(t/2)%4],r=[],o=(a,l,c,h,f=0)=>r.push({voice:a,midi:l,duration:c,gain:h,pan:f});if((i%4===0||t%4===3&&i===14)&&o("kick",36,.22,.22),(i===4||i===12)&&o("snare",0,.15,.13,.1),i%2===0&&o("hat",0,i%4===2?.07:.035,i%4===2?.035:.022,i%4===0?-.35:.35),i%2===0&&o("bass",s[0]-12+(i===10?12:0),Hs*1.45,.105),i===0)for(const[a,l]of s.entries())o("pad",l,60/gh*6,.022,(a-1)*.3);if(i%4===2&&o("arp",s[(i>>2)%s.length]+24,Hs*1.7,.04,i%8===2?-.45:.45),t%2===1&&i%2===0){const a=_b[Math.floor(t/2)%4],l=a[i/2]+(t>=8&&i>=12?12:0);o("lead",l,Hs*(i===14?2.8:1.3),.052,t%4===1?-.15:.15)}return r}class yb{constructor(e,t){ce(this,"bus");ce(this,"delay");ce(this,"feedback");ce(this,"wet");ce(this,"noise");ce(this,"sources",new Map);ce(this,"timer");ce(this,"wanted",!1);ce(this,"disposed",!1);ce(this,"next",0);ce(this,"index",0);ce(this,"visibility",()=>{document.hidden?this.pause():this.wanted&&this.play()});ce(this,"schedule",()=>{const e=this.context.currentTime;if(this.context.state!=="running"){this.next=e+.04;return}if(this.next<e-.2){const i=Math.ceil((e-this.next)/Hs);this.index=(this.index+i)%Rr,this.next+=i*Hs}let t=0;for(;this.next<e+.2&&t++<8;){for(const i of xb(this.index))this.note(i,this.next);this.index=(this.index+1)%Rr,this.next+=Hs}});this.context=e,this.bus=e.createGain(),this.bus.gain.value=0,this.bus.connect(t),this.delay=e.createDelay(1),this.delay.delayTime.value=60/gh*.75,this.feedback=e.createGain(),this.feedback.gain.value=.22,this.wet=e.createGain(),this.wet.gain.value=.16,this.bus.connect(this.delay),this.delay.connect(this.feedback),this.feedback.connect(this.delay),this.delay.connect(this.wet),this.wet.connect(t),this.noise=e.createBuffer(1,Math.ceil(e.sampleRate*.2),e.sampleRate);const i=this.noise.getChannelData(0);let s=7271;for(let r=0;r<i.length;r++)s=Math.imul(s,1664525)+1013904223|0,i[r]=(s>>>0)/4294967296*2-1;document.addEventListener("visibilitychange",this.visibility)}start(){this.disposed||(this.wanted=!0,document.hidden||this.play())}stop(){this.wanted=!1,this.pause()}play(){this.timer!==void 0||this.disposed||(this.bus.gain.setTargetAtTime(.32,this.context.currentTime,.025),this.feedback.gain.value=.22,this.wet.gain.value=.16,this.next=this.context.currentTime+.04,this.index=0,this.schedule(),this.timer=setInterval(this.schedule,50))}pause(){clearInterval(this.timer),this.timer=void 0,this.bus.gain.setTargetAtTime(0,this.context.currentTime,.008),this.feedback.gain.value=0,this.wet.gain.value=0;for(const[e,t]of this.sources){e.onended=null;try{e.stop()}catch{}for(const i of t)i.disconnect()}this.sources.clear()}note(e,t){if(this.sources.size>=96)return;const i=this.context,s=i.createGain(),r=i.createStereoPanner(),o=i.createBiquadFilter(),a=e.voice==="snare"||e.voice==="hat";let l;if(a){const h=i.createBufferSource();h.buffer=this.noise,l=h,o.type="highpass",o.frequency.value=e.voice==="hat"?7200:1500}else{const h=i.createOscillator();l=h,h.type=e.voice==="bass"?"sawtooth":e.voice==="pad"?"triangle":e.voice==="kick"?"sine":"square";const f=440*2**((e.midi-69)/12);h.frequency.setValueAtTime(e.voice==="kick"?155:f,t),e.voice==="kick"&&h.frequency.exponentialRampToValueAtTime(42,t+.16),e.voice==="lead"&&h.detune.setValueAtTime(-6,t),o.type="lowpass",o.frequency.setValueAtTime(e.voice==="bass"?900:e.voice==="pad"?1800:4500,t),e.voice==="bass"&&o.frequency.exponentialRampToValueAtTime(200,t+e.duration)}s.gain.setValueAtTime(1e-4,t),s.gain.linearRampToValueAtTime(e.gain,t+(e.voice==="pad"?.08:.004)),s.gain.exponentialRampToValueAtTime(1e-4,t+e.duration),r.pan.value=e.pan,l.connect(o),o.connect(s),s.connect(r),r.connect(this.bus);const c=[l,o,s,r];this.sources.set(l,c),l.onended=()=>{for(const h of c)h.disconnect();this.sources.delete(l)},l.start(t),l.stop(t+e.duration+.01)}dispose(){if(!this.disposed){this.disposed=!0,this.stop(),document.removeEventListener("visibilitychange",this.visibility);for(const e of[this.bus,this.delay,this.feedback,this.wet])e.disconnect()}}}function Mb(n){return n.kind==="ignite"&&n.actor>=0?"catchfire":n.kind==="shot"||n.kind==="melee"?n.weapon??"body":n.kind}function Sb(n){const e={};if(!n||typeof n!="object")return e;const t=n;if(t.version!==1||!t.cues||typeof t.cues!="object")return e;for(const[i,s]of Object.entries(t.cues))!/^[a-z]+$/.test(i)||!Array.isArray(s)||(e[i]=s.filter(r=>typeof r=="string"&&/^[a-z]+--[0-9]+\.wav$/.test(r)).slice(0,20));return e}class bb{constructor(){ce(this,"buffers",new Map);ce(this,"started",!1);ce(this,"abort",new AbortController)}async load(e){if(this.started)return;this.started=!0;const t="/game/royale/audio/royale/";try{const i=await fetch(t+"manifest.json",{signal:this.abort.signal});if(!i.ok)return;const s=Sb(await i.json());await Promise.all(Object.entries(s).map(async([r,o])=>{const a=[];for(const l of o)try{const c=await fetch(t+l,{signal:this.abort.signal});c.ok&&a.push(await e.decodeAudioData(await c.arrayBuffer()))}catch{}a.length&&this.buffers.set(r,a)}))}catch{}}get(e){const t=this.buffers.get(e);return t==null?void 0:t[Math.floor(Math.random()*t.length)]}dispose(){this.abort.abort(),this.buffers.clear()}}function Eb(n,e=Math.random()){return n&&e<.25}class wb{constructor(e=()=>({gain:1,pan:0})){ce(this,"channels",new Set);ce(this,"routing");ce(this,"enabled",!1);ce(this,"music");ce(this,"bank",new bb);ce(this,"context");ce(this,"master");ce(this,"active",new Set);ce(this,"last",new Map);this.locate=e}enable(e){var t;if(this.enabled=e,e)try{if(this.context??(this.context=new AudioContext),!this.master){this.master=this.context.createGain();const i=this.context.createDynamicsCompressor();this.master.connect(i),i.connect(this.context.destination)}this.master.gain.value=.55,this.context.resume().catch(()=>{}),this.bank.load(this.context),this.music??(this.music=new yb(this.context,this.master)),this.music.start()}catch{this.enabled=!1}else{(t=this.music)==null||t.stop(),this.master&&(this.master.gain.value=0);for(const i of this.active)try{i.stop()}catch{}}}updateView(){if(this.context)for(const e of this.channels){const t=this.locate(e.event);e.gain.gain.setTargetAtTime(t.gain,this.context.currentTime,.06),e.pan.pan.setTargetAtTime(t.pan,this.context.currentTime,.06)}}release(e){e.gain.disconnect(),e.pan.disconnect(),this.channels.delete(e)}start(e,t,i,s,r){e.connect(r??t),r&&r.connect(t);const o=this.routing;t.connect((o==null?void 0:o.gain)??this.master),o&&o.sources++,this.active.add(e),e.onended=()=>{this.active.delete(e),e.disconnect(),r==null||r.disconnect(),t.disconnect(),o&&--o.sources===0&&this.release(o)},e.start(i),e.stop(i+s)}envelope(e,t,i){const s=this.context.createGain();return s.gain.setValueAtTime(1e-4,e),s.gain.linearRampToValueAtTime(i,e+.003),s.gain.exponentialRampToValueAtTime(1e-4,e+t),s}tone(e,t,i,s,r,o="sine"){const a=this.context.createOscillator();a.type=o,a.frequency.setValueAtTime(t,e),a.frequency.exponentialRampToValueAtTime(i,e+s),this.start(a,this.envelope(e,s,r),e,s)}noise(e,t,i,s,r="lowpass"){const o=this.context,a=o.createBuffer(1,Math.ceil(o.sampleRate*t),o.sampleRate),l=a.getChannelData(0);for(let f=0;f<l.length;f++)l[f]=Math.random()*2-1;const c=o.createBufferSource(),h=o.createBiquadFilter();c.buffer=a,h.type=r,h.frequency.value=s,h.Q.value=.7,this.start(c,this.envelope(e,t,i),e,t,h)}cry(e,t){const i=this.context,s=t?.7:.9,r=t?1:3;for(let o=0;o<r;o++){const a=e+o*.25,l=t?s:.24,c=i.createOscillator(),h=i.createBiquadFilter(),f=i.createOscillator(),u=i.createGain();c.type="sawtooth",c.frequency.setValueAtTime(t?430:240,a),c.frequency.exponentialRampToValueAtTime(t?270:155,a+l),f.frequency.value=t?9:6,u.gain.value=t?22:15,f.connect(u),u.connect(c.frequency),h.type="bandpass",h.frequency.value=t?1250:750,h.Q.value=.9,this.start(c,this.envelope(a,l,t?.12:.09),a,l,h),this.active.add(f),f.onended=()=>{this.active.delete(f),f.disconnect(),u.disconnect()},f.start(a),f.stop(a+l)}this.noise(e,s,.025,1600,"bandpass")}play(e){if(!this.enabled||!this.context)return;const t=Mb(e),i=this.context.currentTime;if(this.active.size>=(t==="catchfire"?48:36))return;const s=this.locate(e);if(s.gain<.01)return;const r=`${t}:${e.actor>=0?e.actor:Math.round(e.x/6)}`;if(i-(this.last.get(r)??-1)<(t==="smg"?.045:.07))return;this.last.set(r,i);const o={event:{...e},gain:this.context.createGain(),pan:this.context.createStereoPanner(),sources:0};o.gain.gain.value=s.gain,o.pan.pan.value=s.pan,o.gain.connect(o.pan),o.pan.connect(this.master),this.channels.add(o),this.routing=o;try{const a=this.bank.get(t);if(Eb(!!a)){const l=this.context.createBufferSource();l.buffer=a,l.playbackRate.value=.97+Math.random()*.06;const c=a.duration/l.playbackRate.value,h=this.envelope(i,c,.8);h.gain.cancelScheduledValues(i),h.gain.setValueAtTime(0,i),h.gain.linearRampToValueAtTime(.8,i+.005),h.gain.setValueAtTime(.8,i+Math.max(.005,c-.01)),h.gain.linearRampToValueAtTime(0,i+c),this.start(l,h,i,c);return}switch(t){case"throw":this.noise(i,.16,.09,800,"bandpass");break;case"warning":this.tone(i,720,720,.12,.07,"triangle"),this.tone(i+.18,960,960,.14,.07,"triangle");break;case"scream":this.cry(i,!0);break;case"cry":this.cry(i,!1);break;case"catchfire":this.noise(i,.55,.22,1100),this.noise(i+.05,.3,.07,3500,"highpass"),this.cry(i+.04,!0);break;case"ignite":this.noise(i,.5,.12,850),this.noise(i+.05,.3,.045,3500,"highpass");break;case"laser":this.tone(i,1800,140,.22,.1,"sawtooth"),this.tone(i,3200,700,.12,.045,"sine");break;case"flamethrower":this.noise(i,.18,.15,900),this.noise(i,.12,.045,3200,"highpass");break;case"smg":this.noise(i,.065,.19,3200,"highpass"),this.tone(i,145,48,.085,.11);break;case"shotgun":this.noise(i,.24,.35,2200),this.tone(i,125,32,.28,.24),this.noise(i+.075,.1,.08,4200,"highpass");break;case"explosion":this.noise(i,.8,.4,700),this.tone(i,65,22,.65,.3),this.noise(i+.1,.4,.08,2400);break;case"spear":this.noise(i,.15,.11,1500,"bandpass"),this.tone(i,480,110,.17,.055,"triangle");break;case"launch":this.noise(i,.2,.17,650),this.tone(i,90,320,.2,.09,"triangle");break;case"shank":this.noise(i,.055,.075,2400,"highpass"),this.tone(i,1600,650,.045,.025,"triangle");break;case"axe":this.noise(i,.22,.13,650,"bandpass"),this.tone(i,220,90,.17,.025,"triangle");break;case"body":case"hit":this.noise(i,.075,.1,950),this.tone(i,110,40,.12,.13);break;case"detach":this.noise(i,.13,.14,700),this.tone(i,210,65,.11,.08);break;case"land":this.noise(i,.09,.09,600),this.tone(i,80,30,.12,.07);break;case"jump":this.noise(i,.08,.045,1500,"bandpass");break;case"reload":this.noise(i,.035,.11,4e3,"highpass"),this.noise(i+.12,.04,.08,2100,"highpass"),this.tone(i+.14,650,280,.04,.04,"triangle");break;case"swap":this.noise(i,.045,.07,2800,"highpass"),this.tone(i,900,450,.035,.025,"triangle");break;case"pickup":this.tone(i,660,660,.1,.055,"triangle"),this.tone(i+.07,990,990,.17,.05,"triangle");break;case"break":this.noise(i,.22,.16,3700,"highpass"),this.tone(i,740,160,.14,.035,"triangle"),this.noise(i+.05,.14,.07,1800);break;case"death":this.tone(i,280,65,.5,.06,"triangle"),this.noise(i,.16,.07,600);break;default:this.noise(i,.12,.05,1e3)}}finally{this.routing=void 0,o.sources===0&&this.release(o)}}dispose(){var e,t;(e=this.music)==null||e.dispose(),this.enable(!1);for(const i of this.channels)this.release(i);this.bank.dispose(),(t=this.context)==null||t.close()}}class Ab{constructor(e,t,i){ce(this,"practiceSim",new Ud(1));ce(this,"session");ce(this,"scene");ce(this,"sound");ce(this,"journal",new bg);ce(this,"ledger",new Eg);ce(this,"input");ce(this,"keys",new Set);ce(this,"mouseDown",!1);ce(this,"touchAttack",!1);ce(this,"frame",0);ce(this,"last",0);ce(this,"accumulator",0);ce(this,"reportTime",0);ce(this,"advice",null);ce(this,"mode","practice");ce(this,"paused",!1);ce(this,"touchMove",0);ce(this,"network",{status:"offline",invite:"",message:"Practice — one human, seven bots.",localId:0,ping:0});ce(this,"down",e=>{e.target instanceof HTMLElement&&e.target.matches("input,select,textarea")||(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(e.code)&&e.preventDefault(),this.keys.add(e.code),!e.repeat&&((e.code==="Space"||e.code==="KeyW"||e.code==="ArrowUp")&&this.command("jump"),e.code==="KeyG"&&this.command("grab"),e.code==="KeyE"&&this.command("pickup"),(e.code==="KeyQ"||e.code==="ShiftLeft"||e.code==="ShiftRight")&&this.command("cycle"),e.code==="KeyR"&&this.command("reload"),e.code==="Escape"&&this.mode==="practice"&&this.state.phase==="match"&&(this.paused=!this.paused)))});ce(this,"up",e=>{this.keys.delete(e.code)});ce(this,"blur",()=>{this.keys.clear(),this.mouseDown=!1,this.touchAttack=!1,this.touchMove=0,this.mode==="practice"&&this.state.phase==="match"&&(this.paused=!0)});ce(this,"pointerDown",e=>{e.pointerType!=="touch"&&(this.mouseDown=!0,this.pointerMove(e))});ce(this,"pointerUp",()=>{this.mouseDown=!1});ce(this,"pointerMove",e=>{if(e.pointerType==="touch")return;const t=this.scene.aim(e.clientX,e.clientY);this.input.aimX=t.x,this.input.aimY=t.y});ce(this,"animate",e=>{var t,i,s,r,o;try{const a=Math.min(.08,(e-this.last)/1e3||0);if(this.last=e,this.mode==="online")(t=this.session)==null||t.advance(a);else if(!this.paused)for(this.accumulator+=a;this.accumulator>=1/60;)this.practiceSim.step([this.poll()]),this.accumulator-=1/60;const l=(s=(i=this.session)==null?void 0:i.wrapper)==null?void 0:s.rollbackNetcode,c=this.mode==="online"?((r=l==null?void 0:l.history[0])==null?void 0:r.frame)??-1:this.state.frame,h=this.ledger.collect(this.state.events,c);this.sound.updateView(),this.scene.present(h);for(const u of h)this.sound.play(u),u.kind==="death"&&u.actor===this.localId&&u.cause&&(this.advice=this.journal.discover(u.cause));const f=this.state.actors[this.localId];if(f.death&&f.deathFrame<=c&&!this.advice&&(this.advice=this.journal.discover(f.death)),this.reportTime+=a,this.reportTime>.08){this.reportTime=0;const u=this.state,d=JSON.parse(JSON.stringify(u));d.phase==="results"&&this.mode==="online"&&c<d.frame-d.phaseFrame&&(d.phase="match"),this.changed({state:d,localId:this.localId,network:{...this.network},advice:this.advice,known:[...this.journal.seen],paused:this.paused})}}catch(a){(o=this.session)==null||o.dispose(!1),this.network={...this.network,status:"failed",message:`Simulation error: ${a instanceof Error?a.message:String(a)}`},this.changed({state:this.practiceSim.snapshot(),localId:0,network:{...this.network},advice:null,known:[...this.journal.seen],paused:!1})}this.frame=requestAnimationFrame(this.animate)});this.changed=i,this.input=$i(t),this.scene=new gb(e,()=>this.state,()=>this.localId),this.sound=new wb(s=>this.scene.soundPosition(s.x,s.y)),window.addEventListener("keydown",this.down),window.addEventListener("keyup",this.up),window.addEventListener("blur",this.blur),this.scene.canvas.addEventListener("pointerdown",this.pointerDown),window.addEventListener("pointerup",this.pointerUp),this.scene.canvas.addEventListener("pointermove",this.pointerMove),this.frame=requestAnimationFrame(this.animate)}get localId(){return this.mode==="online"?this.network.localId:0}get state(){var e;return this.mode==="online"&&((e=this.session)!=null&&e.simulation)?this.session.simulation.state:this.practiceSim.state}setLook(e){this.input.look=qc(e)}setVenue(e){this.input.venue=Math.max(0,Math.min(xn.length-1,Math.floor(e))),this.input.venueChange++}ready(){this.input.ready++}rematch(){this.input.rematch++,this.advice=null}spectator(e){this.scene.setSpectator(e)}command(e){this.input[e]++}touchFire(e,t,i){if(this.touchAttack=e,t!==void 0&&i!==void 0){const s=Math.max(.01,Math.hypot(t,i));this.input.aimX=t/s,this.input.aimY=-i/s}}setSound(e){this.sound.enable(e)}async online(e="",t=""){if(!this.session){this.paused=!1,this.mode="online",this.input.ready=0,this.ledger.reset(),this.advice=null;try{const{Session:i}=await ag(async()=>{const{Session:s}=await import("./session-C5eOFG9t.js");return{Session:s}},[]);this.session=new i(()=>this.poll(),s=>{this.network=s}),await this.session.connect(e,t)}catch(i){this.network={...this.network,status:"failed",message:i instanceof Error?i.message:"Could not load multiplayer support."}}}}practice(){if(this.session){this.session.dispose(),location.assign(location.href.split("#")[0]);return}this.mode="practice",this.paused=!1}leave(){var e;(e=this.session)==null||e.dispose(),location.assign(location.href.split("#")[0])}poll(){return this.input.move=Math.max(-1,Math.min(1,Number(this.keys.has("KeyD")||this.keys.has("ArrowRight"))-Number(this.keys.has("KeyA")||this.keys.has("ArrowLeft"))+this.touchMove)),this.input.attack=this.mouseDown||this.touchAttack||this.keys.has("KeyJ"),JSON.parse(JSON.stringify(this.input))}dispose(){var e;cancelAnimationFrame(this.frame),(e=this.session)==null||e.dispose(),this.scene.dispose(),this.sound.dispose(),window.removeEventListener("keydown",this.down),window.removeEventListener("keyup",this.up),window.removeEventListener("blur",this.blur),window.removeEventListener("pointerup",this.pointerUp),this.scene.canvas.removeEventListener("pointerdown",this.pointerDown),this.scene.canvas.removeEventListener("pointermove",this.pointerMove)}}const Ep="royale.preferences";function Mf(n){try{return JSON.parse(localStorage.getItem(n)??"null")}catch{return null}}function wp(n,e){const t=n&&typeof n=="object"?n:{};return{look:qc(t.look??e??da),sound:t.sound===!0,lowFX:t.lowFX===!0,venue:xn.some(i=>i.id===t.venue)?t.venue:"gas"}}function Tb(){return wp(Mf(Ep),Mf("royale.look"))}function Rb(n){try{localStorage.setItem(Ep,JSON.stringify({version:1,...wp(n)}))}catch{}}const Cb={class:"turn-access",role:"status","aria-live":"polite"},Pb=sd({__name:"TurnAccess",setup(n,{expose:e}){const t=Rt(),i=Rt(!1);let s,r,o,a;function l(){return window.turnstile?Promise.resolve():s||(s=new Promise((u,d)=>{const g=document.createElement("script");g.src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit",g.async=!0,g.defer=!0,g.onload=()=>u(),g.onerror=()=>{g.remove(),s=void 0,d(new Error("Connection verification could not load. Please try again."))},document.head.appendChild(g)}),s)}function c(){clearTimeout(a),r&&window.turnstile&&window.turnstile.remove(r),r=void 0,i.value=!1}function h(){o==null||o(new Error("Connection verification cancelled.")),o=void 0,c()}async function f(){h(),i.value=!0;const u=new Promise((d,g)=>{o=g});try{if(await Promise.race([u,l(),new Promise((g,_)=>{a=setTimeout(()=>_(new Error("Connection verification timed out. Please try again.")),15e3)})]),clearTimeout(a),await zc(),!window.turnstile||!t.value)throw new Error("Connection verification is unavailable.");const d="0x4AAAAAAGMk6Wc3ZfdCo5t5";return await Promise.race([u,new Promise((g,_)=>{a=setTimeout(()=>_(new Error("Connection verification timed out. Please try again.")),12e4),r=window.turnstile.render(t.value,{sitekey:d,action:"royale-turn",theme:"dark",callback:g,"error-callback":()=>_(new Error("Connection verification failed. Please try again.")),"expired-callback":()=>_(new Error("Connection verification expired. Please try again."))})})])}finally{o=void 0,c()}}return Gc(h),e({verify:f,cancel:h}),(u,d)=>Ps((Oe(),Fe("div",Cb,[d[0]||(d[0]=H("p",null,"CHECKING YOUR ONLINE CONNECTION…",-1)),H("div",{ref_key:"container",ref:t},null,512),H("button",{class:"secondary",onClick:h},"CANCEL")],512)),[[I0,i.value]])}}),Lb=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},Ib=Lb(Pb,[["__scopeId","data-v-95de6459"]]),Db={class:"header-venue"},Nb={class:"header-tools"},Ub={key:0,class:"network-pill"},Ob={key:0,class:"lobby"},Fb={class:"customize"},kb=["value"],Bb=["disabled"],zb=["value"],Hb={class:"swatch-row"},Vb=["onClick","aria-label"],Gb=["onClick","aria-label"],Wb={class:"swatch-row clothes-colors"},Xb=["onClick","aria-label"],Yb={key:0,class:"mode-buttons"},qb=["disabled"],jb={class:"join-box"},Kb=["disabled"],$b={key:1,class:"smallprint",role:"alert"},Jb={key:2,class:"connection-card"},Zb=["value"],Qb={class:"roster-status"},e1={key:0},t1={key:1},n1=["disabled"],i1={class:"smallprint"},s1={key:1,class:"specimen"},r1={class:"match-top"},o1={class:"match-clock"},a1={key:0,class:"chaos-tools"},l1={key:0},c1={key:1},h1={key:2},u1={class:"player-hud"},f1={class:"health-heading"},d1={class:"health-bar"},p1={class:"body-status"},m1={key:0},g1={key:1},v1={class:"weapon-readout"},_1={key:0},x1={key:1},y1={key:2},M1={class:"body-panel"},S1={key:2,class:"death-overlay"},b1={class:"spectator-buttons"},E1=["onClick"],w1={class:"touch-controls"},A1={class:"touch-actions"},T1={class:"eyebrow"},R1={key:0,class:"result-advice"},C1={class:"result-stat"},P1={key:0},L1={key:4},I1={key:0},D1={key:5,class:"modal-backdrop"},N1={class:"pause-card"},U1={key:6,class:"modal-backdrop"},O1={class:"pause-card"},F1={key:7,class:"modal-backdrop"},k1={class:"journal"},B1={key:0},z1={key:1,class:"modal-backdrop"},H1={class:"pause-card"},V1=sd({__name:"App",setup(n){const e=Tb(),t=Rt(e.venue),i=Rt(),s=Rt(e.look),r=Rt(xn.findIndex(me=>me.id===e.venue)),o=Rt(e.sound),a=Rt(e.lowFX),l=Rt(!1),c=Rt("COPY INVITE"),h=Rt(""),f=Rt(new URLSearchParams(location.hash.slice(1)).get("room")??""),u=Rt({state:new Ud().state,localId:0,network:{status:"offline",invite:"",message:"Practice — one human, seven bots.",localId:0,ping:0},advice:null,known:[],paused:!1}),d=Rt(),g=Rt(!1),_=Rt("");let p,m=!1;const x=cn(()=>u.value.state),v=cn(()=>x.value.actors[u.value.localId]),b=cn(()=>x.value.phase==="lobby"||x.value.phase==="countdown"),N=cn(()=>u.value.network.status!=="offline"),R=cn(()=>u.value.network.status==="connected"),P=cn(()=>x.value.actors.filter(me=>me.hp>0&&!me.pendingSpawn)),D=cn(()=>!v.value.parts.armL&&!v.value.parts.armR?"body":v.value.weapons[v.value.slot]),Z=cn(()=>un.filter(me=>v.value.parts[me]>0).length),y=cn(()=>xn.find(me=>me.id===x.value.venue)),w=cn(()=>["failed","closed"].includes(u.value.network.status)),z=cn(()=>{const me=x.value.phase==="match"?Math.floor(x.value.phaseFrame/60):0;return`${String(Math.floor(me/60)).padStart(2,"0")}:${String(me%60).padStart(2,"0")}`}),W=cn(()=>v.value.ready);Ns(()=>u.value.state.venue,me=>{r.value=xn.findIndex(I=>I.id===me)});function $(){f.value=new URLSearchParams(location.hash.slice(1)).get("room")??""}function ae(){t.value=xn[r.value].id,p==null||p.setVenue(r.value)}function V(){o.value=!o.value,p==null||p.setSound(o.value),m=o.value}function se(){o.value&&!m&&p&&(p.setSound(!0),m=!0)}function G(){a.value=!a.value,p&&(p.scene.reducedEffects=a.value)}async function ve(me=""){var I;if(!g.value){g.value=!0,_.value="";try{const ze=await((I=d.value)==null?void 0:I.verify());await(p==null?void 0:p.online(me,ze??""))}catch(ze){_.value=ze instanceof Error?ze.message:"Could not verify the connection."}finally{g.value=!1}}}async function Me(){await ve()}async function we(){const me=f.value.match(/room=([a-f\d-]{36})/i);await ve((me==null?void 0:me[1])??f.value.trim())}async function We(){try{await navigator.clipboard.writeText(u.value.network.invite),c.value="COPIED"}catch{c.value="SELECT LINK BELOW"}}Ns(s,me=>p==null?void 0:p.setLook(me),{deep:!0}),Ns(()=>({look:s.value,sound:o.value,lowFX:a.value,venue:t.value}),Rb,{deep:!0});const Ze=Rt(null),ie=Rt(null),ue=Rt({x:0,y:0});function Se(me,I){if(!p)return;const ze=I==="move"?Ze:ie,C=me.currentTarget;if(me.type==="pointerdown"){if(ze.value!==null)return;ze.value=me.pointerId,C.setPointerCapture(me.pointerId)}if(ze.value!==me.pointerId)return;const T=C.getBoundingClientRect(),S=(me.clientX-T.left-T.width/2)/32,ne=(me.clientY-T.top-T.height/2)/32,X=Math.max(1,Math.hypot(S,ne));I==="move"?(p.touchMove=S/X,ue.value={x:S/X,y:ne/X}):p.touchFire(!0,S/X,ne/X)}function xe(me,I){if(!p)return;const ze=I==="move"?Ze:ie;ze.value===me.pointerId&&(ze.value=null,I==="move"?(p.touchMove=0,ue.value={x:0,y:0}):p.touchFire(!1))}return ad(()=>{window.addEventListener("hashchange",$);try{p=new Ab(i.value,s.value,me=>u.value=me),p.scene.reducedEffects=a.value,p.setVenue(r.value),window.addEventListener("pointerdown",se,!0),window.addEventListener("keydown",se,!0)}catch(me){h.value=me instanceof Error?me.message:"WebGL could not start."}}),Gc(()=>{window.removeEventListener("hashchange",$),window.removeEventListener("pointerdown",se,!0),window.removeEventListener("keydown",se,!0),p==null||p.dispose()}),(me,I)=>{var ze,C;return Oe(),Fe("div",{class:Bn(["royale",{"in-lobby":b.value}])},[H("div",{ref_key:"viewport",ref:i,class:"viewport"},null,512),I[73]||(I[73]=H("div",{class:"vignette"},null,-1)),I[74]||(I[74]=H("div",{class:"scanlines","aria-hidden":"true"},null,-1)),H("header",null,[I[28]||(I[28]=H("a",{class:"logo",href:"./"},[tt("R"),H("span",null,"®")],-1)),H("span",Db,[tt(Ie(y.value.name)+" ",1),I[26]||(I[26]=H("i",null,"/",-1)),I[27]||(I[27]=tt(" EST. BAD IDEA",-1))]),H("div",Nb,[R.value?(Oe(),Fe("span",Ub,Ie(u.value.network.route==="relay"?"P2P / RELAY":"P2P")+" · "+Ie(u.value.network.ping)+" MS",1)):mt("",!0),H("button",{onClick:V},"SOUND "+Ie(o.value?"ON":"OFF"),1),H("button",{onClick:G},"FX "+Ie(a.value?"LOW":"FULL"),1),N.value?(Oe(),Fe("button",{key:1,onClick:I[0]||(I[0]=T=>{var S;return(S=_t(p))==null?void 0:S.leave()})},"LEAVE P2P")):mt("",!0),H("button",{onClick:I[1]||(I[1]=T=>l.value=!l.value)},"DEATH NOTES "+Ie(u.value.known.length),1)])]),h.value?(Oe(),Fe("div",z1,[H("section",H1,[I[71]||(I[71]=H("h2",null,[tt("THE WORLD"),H("br"),tt("DIDN’T LOAD.")],-1)),H("p",null,Ie(h.value),1),I[72]||(I[72]=H("p",null,"A WebGL-capable browser is required.",-1))])])):(Oe(),Fe(xt,{key:0},[b.value?(Oe(),Fe("section",Ob,[I[42]||(I[42]=H("p",{class:"eyebrow"},[H("span"),tt(" SOME ASSEMBLY REQUIRED.")],-1)),I[43]||(I[43]=H("h1",null,[tt("ROYALE"),H("span",null,".")],-1)),I[44]||(I[44]=H("p",{class:"tagline"},[tt("LAST ONE STANDING."),H("br"),tt("OR WHATEVER’S LEFT.")],-1)),I[45]||(I[45]=H("div",{class:"lobby-rule"},[H("b",null,"01 / CHECK YOURSELF IN"),H("span",null,"8 ENTER. MOSTLY.")],-1)),H("div",Fb,[H("label",null,[I[30]||(I[30]=tt("GENDER",-1)),Ps(H("select",{"onUpdate:modelValue":I[2]||(I[2]=T=>s.value.gender=T)},[...I[29]||(I[29]=[H("option",{value:0},"WOMAN",-1),H("option",{value:1},"MAN",-1),H("option",{value:2},"NONBINARY",-1)])],512),[[no,s.value.gender,void 0,{number:!0}]])]),H("label",null,[I[31]||(I[31]=tt("HAIR",-1)),Ps(H("select",{"onUpdate:modelValue":I[3]||(I[3]=T=>s.value.hair=T)},[(Oe(),Fe(xt,null,ni(["CROPPED","CURLS","MOHAWK","LONG","SHAVED"],(T,S)=>H("option",{key:T,value:S},Ie(T),9,kb)),64))],512),[[no,s.value.hair,void 0,{number:!0}]])]),H("label",null,[I[33]||(I[33]=tt("CLOTHING",-1)),Ps(H("select",{"onUpdate:modelValue":I[4]||(I[4]=T=>s.value.clothes=T)},[...I[32]||(I[32]=[H("option",{value:0},"JACKET",-1),H("option",{value:1},"TANK TOP",-1),H("option",{value:2},"COVERALLS",-1)])],512),[[no,s.value.clothes,void 0,{number:!0}]])]),H("label",null,[I[34]||(I[34]=tt("VENUE",-1)),Ps(H("select",{"onUpdate:modelValue":I[5]||(I[5]=T=>r.value=T),disabled:R.value&&u.value.localId!==0,onChange:ae},[(Oe(!0),Fe(xt,null,ni(_t(xn),(T,S)=>(Oe(),Fe("option",{key:T.id,value:S},Ie(T.name),9,zb))),128))],40,Bb),[[no,r.value,void 0,{number:!0}]])])]),H("div",Hb,[I[35]||(I[35]=H("span",null,"SKIN",-1)),(Oe(!0),Fe(xt,null,ni(_t(Xr),(T,S)=>(Oe(),Fe("button",{key:T,class:Bn({chosen:s.value.skin===S}),style:Ti({background:T}),onClick:ne=>s.value.skin=S,"aria-label":`Skin tone ${S+1}`},null,14,Vb))),128)),I[36]||(I[36]=H("span",{class:"hair-label"},"HAIR",-1)),(Oe(!0),Fe(xt,null,ni(_t(pa),(T,S)=>(Oe(),Fe("button",{key:T,style:Ti({background:T}),class:Bn({chosen:s.value.hairColor===S}),onClick:ne=>s.value.hairColor=S,"aria-label":`Hair color ${S+1}`},null,14,Gb))),128))]),H("div",Wb,[I[37]||(I[37]=H("span",null,"THREADS",-1)),(Oe(!0),Fe(xt,null,ni(_t(Gs),(T,S)=>(Oe(),Fe("button",{key:T,style:Ti({background:T}),class:Bn({chosen:s.value.color===S}),onClick:ne=>s.value.color=S,"aria-label":`Clothing color ${S+1}`},null,14,Xb))),128)),I[38]||(I[38]=H("small",null,"ALL LOOKS. NO STAT BOOSTS.",-1))]),N.value?mt("",!0):(Oe(),Fe("div",Yb,[H("button",{class:"secondary",disabled:g.value,onClick:Me},[tt(Ie(g.value?"CONNECTING…":"HOST P2P")+" ",1),I[39]||(I[39]=H("span",null,"↗",-1))],8,qb),H("div",jb,[Ps(H("input",{"onUpdate:modelValue":I[6]||(I[6]=T=>f.value=T),"aria-label":"Invite link or room ID",placeholder:"INVITE LINK / ROOM ID"},null,512),[[$0,f.value]]),H("button",{onClick:we,disabled:g.value||!f.value.trim()},"JOIN",8,Kb)])])),qn(Ib,{ref_key:"turnAccess",ref:d},null,512),_.value?(Oe(),Fe("p",$b,Ie(_.value),1)):mt("",!0),N.value&&!R.value?(Oe(),Fe("div",Jb,[H("b",null,Ie(u.value.network.status.toUpperCase()),1),H("p",null,Ie(u.value.network.message),1),u.value.network.invite?(Oe(),Fe(xt,{key:0},[H("button",{onClick:We},Ie(c.value)+" ↗",1),H("input",{value:u.value.network.invite,readonly:"","aria-label":"P2P invite link"},null,8,Zb)],64)):mt("",!0),H("button",{class:"cancel-host",onClick:I[7]||(I[7]=T=>{var S;return(S=_t(p))==null?void 0:S.leave()})},"CANCEL / PRACTICE")])):mt("",!0),H("div",Qb,[I[40]||(I[40]=H("span",{class:"tiny-dot"},null,-1)),H("b",null,Ie(R.value?"2 HUMANS / 6 BOTS":N.value?"WAITING FOR A HUMAN":"PRACTICE / 7 BOTS"),1),R.value?(Oe(),Fe("span",e1,Ie(x.value.actors.filter(T=>T.human&&T.ready).length)+" / 2 READY",1)):(Oe(),Fe("span",t1,"NO CREDIT CARD REQUIRED"))]),H("button",{class:"primary",disabled:g.value||N.value&&!R.value,onClick:I[8]||(I[8]=T=>{var S;return(S=_t(p))==null?void 0:S.ready()})},[tt(Ie(x.value.phase==="countdown"?`BAD DECISIONS IN ${Math.max(1,3-Math.floor(x.value.phaseFrame/60))}…`:W.value?"READY. UNFORTUNATELY.":R.value?"READY TO FALL APART":"PRACTICE BAD DECISIONS")+" ",1),I[41]||(I[41]=H("span",null,"↗",-1))],8,n1),H("p",i1,Ie(R.value?"BOTH HUMANS MUST READY UP. COSMETIC CHANGES RESET READINESS.":"P2P: TWO HUMANS + SIX BOTS. PRACTICE WORKS OFFLINE."),1)])):mt("",!0),b.value?(Oe(),Fe("div",s1,[...I[46]||(I[46]=[H("span",null,[tt("YOUR FUTURE"),H("br"),tt("FORMER SELF.")],-1),H("i",null,null,-1),H("small",null,[tt("100% ORIGINAL PARTS"),H("br"),tt("FOR NOW.")],-1)])])):mt("",!0),x.value.phase==="match"?(Oe(),Fe(xt,{key:2},[H("div",r1,[H("div",null,[I[48]||(I[48]=H("small",null,"STILL TECHNICALLY ALIVE",-1)),H("b",null,[tt(Ie(P.value.length),1),I[47]||(I[47]=H("span",null,"/ 8",-1))])]),H("div",o1,[tt(Ie(z.value),1),H("small",null,Ie(x.value.chaosAt===void 0?"DESTROY BOTH CRATES":x.value.venue==="bathroom"&&x.value.actors.some(T=>T.pendingSpawn&&T.hp>0)?"APPROACH STALLS WITH CAUTION":x.value.props.some(T=>T.kind==="entrance")&&x.value.actors.some(T=>T.pendingSpawn&&T.hp>0)?"WATCH THE ENTRANCES":x.value.phaseFrame<=1800?"SAFE AREA HOLDING":"SAFE AREA CONTRACTING"),1)])]),x.value.chaosAt!==void 0?(Oe(),Fe("div",a1,[I[49]||(I[49]=H("span",null,"G GRAB / THROW · E MOVEMENT LOOT",-1)),v.value.carrying?(Oe(),Fe("b",l1,"HOLDING "+Ie(v.value.carrying.kind.toUpperCase())+" — AIM + ATTACK TO THROW",1)):mt("",!0),(v.value.stunUntil??0)>x.value.frame?(Oe(),Fe("b",c1,"TV STUN · "+Ie(Math.ceil(((v.value.stunUntil??0)-x.value.frame)/60))+"s",1)):mt("",!0),v.value.boost?(Oe(),Fe("b",h1,Ie(_t(Nd)[v.value.boost.kind])+" · "+Ie(Math.max(0,Math.ceil((v.value.boost.until-x.value.frame)/60)))+"s",1)):mt("",!0)])):mt("",!0),x.value.major?(Oe(),Fe("div",{key:1,class:Bn(["event-banner",{helpful:x.value.major.kind==="foam"}])},[H("b",null,Ie(x.value.major.kind==="foam"?"FOAM SPRINKLER — SLIPPERY, NO DAMAGE":x.value.major.kind==="truck"?"DANGER: RUNAWAY TRUCK — JUMP OR GET CLEAR":"DANGER: FALLING AIR CONDITIONER — CLEAR THE RED ZONE"),1),H("span",null,Ie(x.value.frame<x.value.major.activeAt?"STARTS IN "+Math.ceil((x.value.major.activeAt-x.value.frame)/60)+"s":"ACTIVE"),1)],2)):mt("",!0),H("div",u1,[H("div",f1,[H("b",null,[tt(Ie(Math.ceil(v.value.hp)),1),I[50]||(I[50]=H("span",null,"%",-1))]),H("span",null,Ie(v.value.bleedOutAt!==null?(v.value.parts.head?"BLEEDING OUT / ":"HEADLESS — BLEEDING OUT / ")+Math.max(0,Math.ceil((v.value.bleedOutAt-x.value.frame)/60))+"s":v.value.parts.head?"VITALITY":"HEADLESS / MOSTLY GUESSWORK"),1)]),H("div",d1,[H("i",{style:Ti({width:v.value.hp+"%"})},null,4)]),H("div",p1,[H("span",null,"PARTS "+Ie(Z.value)+" / "+Ie(_t(un).length),1),Z.value<_t(un).length?(Oe(),Fe("span",m1,"SOME ASSEMBLY LOST")):(Oe(),Fe("span",g1,"FACTORY CONDITION"))]),H("div",v1,[H("b",null,Ie(D.value.toUpperCase()),1),D.value==="smg"||D.value==="shotgun"?(Oe(),Fe("span",_1,Ie(v.value.ammo)+" / "+Ie(v.value.reserve),1)):D.value==="laser"||D.value==="flamethrower"?(Oe(),Fe("span",x1,Ie(v.value.ammo)+" "+Ie(D.value==="laser"?"SHOTS":"FUEL"),1)):(Oe(),Fe("span",y1,Ie(D.value==="body"?"LIMITED DIGNITY":"UNLIMITED REGRETS"),1))]),H("small",null,Ie(v.value.reloading?"RELOADING…":"E PICKUP · Q / SHIFT SWAP · R RELOAD"),1)]),H("div",M1,[I[51]||(I[51]=H("small",null,"INVENTORY OF YOU",-1)),(Oe(),Fe(xt,null,ni([["head"],["armL","armR"],["handL","handR"],["thighL","thighR"],["footL","footR"]],T=>H("div",{key:T.join()},[H("span",null,Ie(T[0].startsWith("thigh")?"LEGS":T[0].replace(/[LR]$/,"").toUpperCase()),1),(Oe(!0),Fe(xt,null,ni(T,S=>(Oe(),Fe("i",{key:S,class:Bn({lost:v.value.parts[S]<=0})},null,2))),128))])),64))]),v.value.hp<=0?(Oe(),Fe("div",S1,[I[52]||(I[52]=H("p",{class:"eyebrow"},"YOU HAVE BEEN DISCONTINUED.",-1)),H("h2",null,Ie(((ze=u.value.advice)==null?void 0:ze.title)??"The warranty did not cover that."),1),H("p",null,Ie(((C=u.value.advice)==null?void 0:C.hint)??"A familiar lesson. Still not a pleasant one."),1),H("small",null,"SPECTATING — "+Ie(P.value.length)+" REMAIN",1),H("div",b1,[(Oe(!0),Fe(xt,null,ni(P.value,T=>(Oe(),Fe("button",{key:T.id,onClick:S=>{var ne;return(ne=_t(p))==null?void 0:ne.spectator(T.id)}},Ie(T.name),9,E1))),128))])])):mt("",!0),H("div",w1,[H("div",{class:"stick",onPointerdown:I[9]||(I[9]=T=>Se(T,"move")),onPointermove:I[10]||(I[10]=T=>Se(T,"move")),onPointerup:I[11]||(I[11]=T=>xe(T,"move")),onPointercancel:I[12]||(I[12]=T=>xe(T,"move"))},[H("i",{style:Ti({transform:`translate(${ue.value.x*25}px,${ue.value.y*25}px)`})},null,4),I[53]||(I[53]=H("small",null,"MOVE",-1))],32),H("div",A1,[H("button",{onClick:I[13]||(I[13]=T=>{var S;return(S=_t(p))==null?void 0:S.command("jump")})},"JUMP"),H("button",{onClick:I[14]||(I[14]=T=>{var S;return(S=_t(p))==null?void 0:S.command("pickup")})},"PICK UP"),x.value.chaosAt!==void 0?(Oe(),Fe("button",{key:0,onClick:I[15]||(I[15]=T=>{var S;return(S=_t(p))==null?void 0:S.command("grab")})},"GRAB / THROW")):mt("",!0),H("button",{onClick:I[16]||(I[16]=T=>{var S;return(S=_t(p))==null?void 0:S.command("cycle")})},"SWAP"),H("button",{onClick:I[17]||(I[17]=T=>{var S;return(S=_t(p))==null?void 0:S.command("reload")})},"RELOAD")]),H("div",{class:"stick fire-stick",onPointerdown:I[18]||(I[18]=T=>Se(T,"aim")),onPointermove:I[19]||(I[19]=T=>Se(T,"aim")),onPointerup:I[20]||(I[20]=T=>xe(T,"aim")),onPointercancel:I[21]||(I[21]=T=>xe(T,"aim"))},[...I[54]||(I[54]=[H("i",null,null,-1),H("small",null,"AIM / FIRE",-1)])],32)])],64)):mt("",!0),x.value.phase==="results"?(Oe(),Fe("section",{key:3,class:Bn(["result-card",{"is-victory":x.value.winner===u.value.localId}])},[H("p",T1,Ie(x.value.winner===u.value.localId?"VICTORY / YOU SURVIVED":"ROUND OVER"),1),H("h2",null,Ie(x.value.winner===null?"NO SURVIVORS.":x.value.winner===u.value.localId?"YOU WON.":"YOU WERE ELIMINATED."),1),H("p",null,Ie(x.value.winner===null?"A draw. Nobody survived the round.":x.value.winner===u.value.localId?"Victory — you are the last player standing.":`${x.value.actors[x.value.winner].name} won the round.`),1),u.value.advice?(Oe(),Fe("div",R1,[H("b",null,Ie(u.value.advice.title),1),H("span",null,Ie(u.value.advice.hint),1)])):mt("",!0),H("div",C1,[x.value.winner===u.value.localId?(Oe(),Fe("span",P1,[I[55]||(I[55]=tt("HEALTH ",-1)),H("b",null,Ie(Math.ceil(v.value.hp))+"%",1)])):mt("",!0),H("span",null,[I[56]||(I[56]=tt("ELIMINATIONS ",-1)),H("b",null,Ie(v.value.kills),1)]),H("span",null,[I[57]||(I[57]=tt("PARTS LEFT ",-1)),H("b",null,Ie(Z.value),1)])]),H("button",{class:"primary",onClick:I[22]||(I[22]=T=>{var S;return(S=_t(p))==null?void 0:S.rematch()})},[...I[58]||(I[58]=[tt("ANOTHER TERRIBLE IDEA ",-1),H("span",null,"↗",-1)])]),H("small",null,Ie(R.value?"BOTH HUMANS MUST REQUEST A REMATCH.":"NEXT ROUND ROTATES TO A NEW VENUE."),1)],2)):mt("",!0),x.value.phase!=="results"?(Oe(),Fe("footer",L1,[I[59]||(I[59]=H("span",null,"A / D · ← / → MOVE",-1)),I[60]||(I[60]=H("span",null,"SPACE JUMP",-1)),I[61]||(I[61]=H("span",null,"MOUSE / J ATTACK",-1)),I[62]||(I[62]=H("span",null,"E PICKUP",-1)),x.value.chaosAt!==void 0?(Oe(),Fe("span",I1,"G GRAB / THROW")):mt("",!0),I[63]||(I[63]=H("span",null,"Q / SHIFT WEAPON",-1)),I[64]||(I[64]=H("span",null,"R RELOAD",-1))])):mt("",!0),u.value.paused?(Oe(),Fe("div",D1,[H("section",N1,[I[65]||(I[65]=H("p",{class:"eyebrow"},"PRACTICE / HOLDING IT TOGETHER",-1)),I[66]||(I[66]=H("h2",null,[tt("TAKE A BREATHER."),H("br"),tt("WHILE YOU HAVE LUNGS.")],-1)),H("button",{class:"primary",onClick:I[23]||(I[23]=T=>_t(p)&&(_t(p).paused=!1))},"BACK TO IT ↗")])])):mt("",!0),w.value?(Oe(),Fe("div",U1,[H("section",O1,[I[67]||(I[67]=H("p",{class:"eyebrow"},"CONNECTION ENDED",-1)),I[68]||(I[68]=H("h2",null,[tt("TECHNICAL"),H("br"),tt("DIFFICULTIES.")],-1)),H("p",null,Ie(u.value.network.message),1),H("button",{class:"primary",onClick:I[24]||(I[24]=T=>{var S;return(S=_t(p))==null?void 0:S.leave()})},"RETURN TO LOBBY ↗")])])):mt("",!0),l.value?(Oe(),Fe("div",F1,[H("section",k1,[H("button",{class:"close",onClick:I[25]||(I[25]=T=>l.value=!1)},"CLOSE ×"),I[69]||(I[69]=H("p",{class:"eyebrow"},"LEARNING, APPARENTLY.",-1)),I[70]||(I[70]=H("h2",null,"DEATH NOTES.",-1)),u.value.known.length?mt("",!0):(Oe(),Fe("p",B1,"Discover new ways to die. Receive unsolicited advice.")),(Oe(!0),Fe(xt,null,ni(u.value.known,T=>(Oe(),Fe("article",{key:T},[H("b",null,Ie(_t($o)[T].title),1),H("p",null,Ie(_t($o)[T].hint),1)]))),128))])])):mt("",!0)],64))],2)}}});eg(V1).use(sg()).mount("#app");export{Ud as S,$i as e,ug as v};
